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
a[c]=function(){a[c]=function(){H.nP(b)}
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
return d?function(e){if(t===null)t=H.jN(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.jN(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.jN(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={jA:function jA(a){this.a=a},
jF:function(a,b,c,d){if(!!a.$isc)return new H.ek(a,b,[c,d])
return new H.dh(a,b,[c,d])},
db:function(){return new P.al("No element")},
mH:function(){return new P.al("Too many elements")},
mG:function(){return new P.al("Too few elements")},
dz:function(a,b,c,d){if(c-b<=32)H.mV(a,b,c,d)
else H.mU(a,b,c,d)},
mV:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.a1(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.ar(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
mU:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.d(t>32)
s=C.b.I(t+1,6)
r=a3+s
q=a4-s
p=C.b.I(a3+a4,2)
o=p-s
n=p+s
t=J.a1(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.ar(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.ar(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.ar(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.ar(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.ar(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.ar(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.ar(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.ar(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.ar(a5.$2(j,i),0)){h=i
i=j
j=h}t.i(a2,r,m)
t.i(a2,p,k)
t.i(a2,q,i)
t.i(a2,o,t.h(a2,a3))
t.i(a2,n,t.h(a2,a4))
g=a3+1
f=a4-1
if(J.F(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=t.h(a2,e)
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
H.dz(a2,a3,g-2,a5)
H.dz(a2,f+2,a4,a5)
if(a0)return
if(g<r&&f>q){for(;J.F(a5.$2(t.h(a2,g),l),0);)++g
for(;J.F(a5.$2(t.h(a2,f),j),0);)--f
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
break}}H.dz(a2,g,f,a5)}else H.dz(a2,g,f,a5)},
c:function c(){},
bf:function bf(){},
dg:function dg(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
dh:function dh(a,b,c){this.a=a
this.b=b
this.$ti=c},
ek:function ek(a,b,c){this.a=a
this.b=b
this.$ti=c},
f7:function f7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bM:function bM(a,b,c){this.a=a
this.b=b
this.$ti=c},
dH:function dH(a,b,c){this.a=a
this.b=b
this.$ti=c},
hD:function hD(a,b,c){this.a=a
this.b=b
this.$ti=c},
cs:function cs(){},
dP:function(a,b){var t=a.ai(b)
if(!u.globalState.d.cy)u.globalState.f.ao()
return t},
j9:function(){--u.globalState.f.b
H.d(u.globalState.f.b>=0)},
ls:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.u(s).$isb)throw H.e(P.e0("Arguments to main must be a List: "+H.f(s)))
u.globalState=new H.il(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$kt()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.hU(P.jE(null,H.b6),0)
r=P.p
s.seQ(new H.aj(0,null,null,null,null,null,0,[r,H.b5]))
s.seS(new H.aj(0,null,null,null,null,null,0,[r,null]))
if(s.x){q=new H.ik()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.mB,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.n8)}if(u.globalState.x)return
s=u.globalState.a++
q=P.ak(null,null,null,r)
p=new H.bj(0,null,!1)
o=new H.b5(s,new H.aj(0,null,null,null,null,null,0,[r,H.bj]),q,u.createNewIsolate(),p,new H.at(H.je()),new H.at(H.je()),!1,!1,[],P.ak(null,null,null,null),null,null,!1,!0,P.ak(null,null,null,null))
q.l(0,0)
o.bC(0,p)
u.globalState.e=o
u.globalState.z.i(0,s,o)
u.globalState.d=o
if(H.bu(a,{func:1,args:[,]}))o.ai(new H.jk(t,a))
else if(H.bu(a,{func:1,args:[,,]}))o.ai(new H.jl(t,a))
else o.ai(a)
u.globalState.f.ao()},
n8:function(a){var t=P.aF(["command","print","msg",a])
return new H.ao(!0,P.c7(null,P.p)).J(t)},
mD:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.mE()
return},
mE:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.e(new P.v("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.e(new P.v('Cannot extract URI from "'+t+'"'))},
mB:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.b4(!0,[]).X(b.data)
s=J.a1(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.nC(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.b4(!0,[]).X(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.b4(!0,[]).X(s.h(t,"replyTo"))
s=u.globalState.a++
k=P.p
j=P.ak(null,null,null,k)
i=new H.bj(0,null,!1)
h=new H.b5(s,new H.aj(0,null,null,null,null,null,0,[k,H.bj]),j,u.createNewIsolate(),i,new H.at(H.je()),new H.at(H.je()),!1,!1,[],P.ak(null,null,null,null),null,null,!1,!0,P.ak(null,null,null,null))
j.l(0,0)
h.bC(0,i)
u.globalState.f.a.U(0,new H.b6(h,new H.eS(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.ao()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.m3(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.ao()
break
case"close":u.globalState.ch.an(0,$.$get$ku().h(0,a))
a.terminate()
u.globalState.f.ao()
break
case"log":H.mA(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
k=P.aF(["command","print","msg",t])
k=new H.ao(!0,P.c7(null,P.p)).J(k)
s.toString
self.postMessage(k)}else P.a3(s.h(t,"msg"))
break
case"error":throw H.e(s.h(t,"msg"))}},
mA:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aF(["command","log","msg",a])
r=new H.ao(!0,P.c7(null,P.p)).J(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.M(q)
t=H.ap(q)
s=P.cq(t)
throw H.e(s)}},
mC:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.kA=$.kA+("_"+s)
$.kB=$.kB+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.H(0,["spawned",new H.bq(s,r),q,t.r])
r=new H.eT(a,b,c,d,t)
if(e){t.bY(q,q)
u.globalState.f.a.U(0,new H.b6(t,r,"start isolate"))}else r.$0()},
mW:function(a,b){var t=new H.hl(!0,!1,null)
t.dz(a,b)
return t},
na:function(a){return new H.b4(!0,[]).X(new H.ao(!1,P.c7(null,P.p)).J(a))},
jk:function jk(a,b){this.a=a
this.b=b},
jl:function jl(a,b){this.a=a
this.b=b},
il:function il(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
ig:function ig(a,b){this.a=a
this.b=b},
hU:function hU(a,b){this.a=a
this.b=b},
hV:function hV(a){this.a=a},
b6:function b6(a,b,c){this.a=a
this.b=b
this.c=c},
ik:function ik(){},
eS:function eS(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eT:function eT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hM:function hM(){},
bq:function bq(a,b){this.b=a
this.a=b},
im:function im(a,b){this.a=a
this.b=b},
c9:function c9(a,b,c){this.b=a
this.c=b
this.a=c},
bj:function bj(a,b,c){this.a=a
this.b=b
this.c=c},
hl:function hl(a,b,c){this.a=a
this.b=b
this.c=c},
hm:function hm(a,b){this.a=a
this.b=b},
hn:function hn(a,b){this.a=a
this.b=b},
at:function at(a){this.a=a},
ao:function ao(a,b){this.a=a
this.b=b},
b4:function b4(a,b){this.a=a
this.b=b},
nv:function(a){return u.types[a]},
nE:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.u(a).$isq},
f:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aB(a)
if(typeof t!=="string")throw H.e(H.X(a))
return t},
mT:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.fN(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aZ:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
du:function(a){var t,s,r,q,p,o,n,m
t=J.u(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.M||!!J.u(a).$isb1){p=C.y(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.i.aK(q,0)===36)q=C.i.d9(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.dR(H.iY(a),0,null),u.mangledGlobalNames)},
fJ:function(a){return"Instance of '"+H.du(a)+"'"},
U:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mR:function(a){return a.b?H.U(a).getUTCFullYear()+0:H.U(a).getFullYear()+0},
mP:function(a){return a.b?H.U(a).getUTCMonth()+1:H.U(a).getMonth()+1},
mL:function(a){return a.b?H.U(a).getUTCDate()+0:H.U(a).getDate()+0},
mM:function(a){return a.b?H.U(a).getUTCHours()+0:H.U(a).getHours()+0},
mO:function(a){return a.b?H.U(a).getUTCMinutes()+0:H.U(a).getMinutes()+0},
mQ:function(a){return a.b?H.U(a).getUTCSeconds()+0:H.U(a).getSeconds()+0},
mN:function(a){return a.b?H.U(a).getUTCMilliseconds()+0:H.U(a).getMilliseconds()+0},
kz:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.X(a))
return a[b]},
R:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ah(!0,b,"index",null)
t=J.dW(a)
if(b<0||C.b.cS(b,t))return P.C(b,a,"index",null,t)
return P.fK(b,"index",null)},
X:function(a){return new P.ah(!0,a,null,null)},
e:function(a){var t
if(a==null)a=new P.bi()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.lt})
t.name=""}else t.toString=H.lt
return t},
lt:function(){return J.aB(this.dartException)},
E:function(a){throw H.e(a)},
J:function(a){throw H.e(new P.a5(a))},
ax:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.hs(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
ht:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
kN:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
jC:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.eY(a,s,t?null:b.receiver)},
M:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.jm(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aT(r,16)&8191)===10)switch(q){case 438:return t.$1(H.jC(H.f(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.f(s)+" (Error "+q+")"
return t.$1(new H.dt(p,null))}}if(a instanceof TypeError){o=$.$get$kH()
n=$.$get$kI()
m=$.$get$kJ()
l=$.$get$kK()
k=$.$get$kO()
j=$.$get$kP()
i=$.$get$kM()
$.$get$kL()
h=$.$get$kR()
g=$.$get$kQ()
f=o.O(s)
if(f!=null)return t.$1(H.jC(s,f))
else{f=n.O(s)
if(f!=null){f.method="call"
return t.$1(H.jC(s,f))}else{f=m.O(s)
if(f==null){f=l.O(s)
if(f==null){f=k.O(s)
if(f==null){f=j.O(s)
if(f==null){f=i.O(s)
if(f==null){f=l.O(s)
if(f==null){f=h.O(s)
if(f==null){f=g.O(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.dt(s,f==null?null:f.method))}}return t.$1(new H.hv(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.dA()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.ah(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.dA()
return a},
ap:function(a){var t
if(a==null)return new H.dN(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dN(a,null)},
nI:function(a){if(a==null||typeof a!='object')return J.as(a)
else return H.aZ(a)},
nt:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=a.length
for(r=0;r<s;){q=r+1
H.d(t)
p=a[r]
r=q+1
H.d(t)
b.i(0,p,a[q])}return b},
nD:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dP(b,new H.j4(a))
case 1:return H.dP(b,new H.j5(a,d))
case 2:return H.dP(b,new H.j6(a,d,e))
case 3:return H.dP(b,new H.j7(a,d,e,f))
case 4:return H.dP(b,new H.j8(a,d,e,f,g))}throw H.e(P.cq("Unsupported number of arguments for wrapped closure"))},
aL:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.nD)
a.$identity=t
return t},
mk:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.u(c).$isb){t.$reflectionInfo=c
r=H.mT(t).r}else r=c
q=d?Object.create(new H.h1().constructor.prototype):Object.create(new H.by(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.kd(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.nv,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.ka:H.jv
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.e("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.kd(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
mh:function(a,b,c,d){var t=H.jv
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
kd:function(a,b,c){var t,s,r,q
if(c)return H.mj(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.mh(s,b==null?r!=null:b!==r,t,b)
return q},
mi:function(a,b,c,d){var t,s
t=H.jv
s=H.ka
switch(b?-1:a){case 0:throw H.e(new H.fT("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
mj:function(a,b){var t,s,r,q
H.mg()
t=$.k9
if(t==null){t=H.k8("receiver")
$.k9=t}s=b.$stubName
r=b.length
q=a[s]
t=H.mi(r,b==null?q!=null:b!==q,s,b)
return t},
jN:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.u(c).$isb){c.fixed$length=Array
t=c}else t=c
return H.mk(a,b,t,!!d,e,f)},
jv:function(a){return a.a},
ka:function(a){return a.c},
mg:function(){var t=$.kb
if(t==null){t=H.k8("self")
$.kb=t}return t},
k8:function(a){var t,s,r,q,p
t=new H.by("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
o1:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.ay(a,"String"))},
af:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.ay(a,"double"))},
o0:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.ay(a,"num"))},
nm:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.ay(a,"bool"))},
nC:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.ay(a,"int"))},
nK:function(a,b){throw H.e(H.ay(a,b.substring(3)))},
nJ:function(a,b){var t=J.a1(b)
throw H.e(H.kc(H.du(a),t.bo(b,3,t.gk(b))))},
jQ:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.u(a)[b])return a
H.nK(a,b)},
aM:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.u(a)[b]
else t=!0
if(t)return a
H.nJ(a,b)},
o_:function(a){if(a==null)return a
if(!!J.u(a).$isb)return a
throw H.e(H.ay(a,"List"))},
lg:function(a){var t=J.u(a)
return"$S" in t?t.$S():null},
bu:function(a,b){var t
if(a==null)return!1
t=H.lg(a)
return t==null?!1:H.lm(t,b)},
nY:function(a,b){var t,s
if(a==null)return a
if($.jK)return a
$.jK=!0
try{if(H.bu(a,b))return a
t=H.aN(b,null)
s=H.ay(a,t)
throw H.e(s)}finally{$.jK=!1}},
ay:function(a,b){return new H.hu("type '"+H.du(a)+"' is not a subtype of type '"+b+"'")},
kc:function(a,b){return new H.e6("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
az:function(a){if(!0===a)return!1
if(!!J.u(a).$isjy)a=a.$0()
if(typeof a==="boolean")return!a
throw H.e(H.ay(a,"bool"))},
aK:function(a){throw H.e(new H.hG(a))},
d:function(a){if(H.az(a))throw H.e(new P.ci(null))},
nP:function(a){throw H.e(new P.ea(a))},
je:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
lk:function(a){return u.getIsolateTag(a)},
L:function(a){return new H.aH(a,null)},
D:function(a,b){H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
iY:function(a){if(a==null)return
return a.$ti},
ll:function(a,b){return H.jU(a["$as"+H.f(b)],H.iY(a))},
ag:function(a,b,c){var t,s
t=H.ll(a,b)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
aq:function(a,b){var t,s
t=H.iY(a)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
aN:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.d(!0)
H.d(!0)
return a[0].name+H.dR(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.f(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aN(t,b)
return H.nc(a,b)}return"unknown-reified-type"},
nc:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aN(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aN(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aN(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.ns(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aN(l[j],b)+(" "+H.f(j))}q+="}"}return"("+q+") => "+t},
dR:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=new P.bZ("")
for(r=b,q=!0,p=!0;H.d(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.d(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aN(o,c)}return p?"":"<"+s.j(0)+">"},
iZ:function(a){var t,s
if(a instanceof H.bb){t=H.lg(a)
if(t!=null)return H.aN(t,null)}s=J.u(a).constructor.name
if(a==null)return s
return s+H.dR(a.$ti,0,null)},
jU:function(a,b){if(a==null)return b
H.d(typeof a=="function")
H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.jR(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.jR(a,null,b)
return b},
cd:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.iY(a)
s=J.u(a)
if(s[b]==null)return!1
return H.l8(H.jU(s[d],t),c)},
dS:function(a,b,c,d){if(a==null)return a
if(H.cd(a,b,c,d))return a
throw H.e(H.kc(H.du(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dR(c,0,null),u.mangledGlobalNames)))},
nW:function(a,b,c,d){if(a==null)return a
if(H.cd(a,b,c,d))return a
throw H.e(H.ay(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dR(c,0,null),u.mangledGlobalNames)))},
l8:function(a,b){var t,s,r,q,p
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
np:function(a,b,c){return H.jR(a,b,H.ll(b,c))},
a2:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.name==="aG")return!0
if('func' in b)return H.lm(a,b)
if('func' in a)return b.name==="jy"||b.name==="o"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.d(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.d(!0)
q=b[0]}else q=b
if(q!==s){p=H.aN(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.l8(H.jU(o,t),r)},
l7:function(a,b,c){var t,s,r,q,p,o,n
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
ni:function(a,b){var t,s,r,q,p,o
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
lm:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
if(n===m){if(!H.l7(r,q,!1))return!1
if(!H.l7(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.d(j)
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
if(!(H.a2(g,f)||H.a2(f,g)))return!1}}return H.ni(a.named,b.named)},
jR:function(a,b,c){H.d(typeof a=="function")
H.d(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
o2:function(a){var t=$.jO
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
nZ:function(a){return H.aZ(a)},
nX:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nF:function(a){var t,s,r,q,p,o
H.d(!(a instanceof P.o))
t=$.jO.$1(a)
s=$.iW[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.j3[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.l6.$2(a,t)
if(t!=null){s=$.iW[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.j3[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.jS(r)
$.iW[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.j3[t]=r
return r}if(p==="-"){o=H.jS(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.lo(a,r)
if(p==="*")throw H.e(new P.c2(t))
if(u.leafTags[t]===true){o=H.jS(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.lo(a,r)},
lo:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.jc(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
jS:function(a){return J.jc(a,!1,null,!!a.$isq)},
nH:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.jc(t,!1,null,!!t.$isq)
else return J.jc(t,c,null,null)},
nA:function(){if(!0===$.jP)return
$.jP=!0
H.nB()},
nB:function(){var t,s,r,q,p,o,n,m
$.iW=Object.create(null)
$.j3=Object.create(null)
H.nz()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.lp.$1(p)
if(o!=null){n=H.nH(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
nz:function(){var t,s,r,q,p,o,n
t=C.Q()
t=H.bt(C.N,H.bt(C.S,H.bt(C.x,H.bt(C.x,H.bt(C.R,H.bt(C.O,H.bt(C.P(C.y),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.jO=new H.j0(p)
$.l6=new H.j1(o)
$.lp=new H.j2(n)},
bt:function(a,b){return a(b)||b},
nO:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
fN:function fN(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
hs:function hs(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dt:function dt(a,b){this.a=a
this.b=b},
eY:function eY(a,b,c){this.a=a
this.b=b
this.c=c},
hv:function hv(a){this.a=a},
jm:function jm(a){this.a=a},
dN:function dN(a,b){this.a=a
this.b=b},
j4:function j4(a){this.a=a},
j5:function j5(a,b){this.a=a
this.b=b},
j6:function j6(a,b,c){this.a=a
this.b=b
this.c=c},
j7:function j7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j8:function j8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bb:function bb(){},
hf:function hf(){},
h1:function h1(){},
by:function by(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hu:function hu(a){this.a=a},
e6:function e6(a){this.a=a},
fT:function fT(a){this.a=a},
hG:function hG(a){this.a=a},
aH:function aH(a,b){this.a=a
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
eX:function eX(a){this.a=a},
f_:function f_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
f0:function f0(a,b){this.a=a
this.$ti=b},
f1:function f1(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
j0:function j0(a){this.a=a},
j1:function j1(a){this.a=a},
j2:function j2(a){this.a=a},
i:function(a){return a},
iP:function(a){var t,s,r
if(!!J.u(a).$isn)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
bh:function bh(){},
aY:function aY(){},
fh:function fh(){},
dj:function dj(){},
dk:function dk(){},
dl:function dl(){},
di:function di(){},
fi:function fi(){},
fj:function fj(){},
fk:function fk(){},
fl:function fl(){},
fm:function fm(){},
fn:function fn(){},
dm:function dm(){},
fo:function fo(){},
bP:function bP(){},
bQ:function bQ(){},
bR:function bR(){},
bS:function bS(){},
ns:function(a){var t=H.D(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
jd:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
u:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.de.prototype
return J.dd.prototype}if(typeof a=="string")return J.aU.prototype
if(a==null)return J.eW.prototype
if(typeof a=="boolean")return J.eV.prototype
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aV.prototype
return a}if(a instanceof P.o)return a
return J.iX(a)},
jc:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iX:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.jP==null){H.nA()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.e(new P.c2("Return interceptor for "+H.f(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$jB()]
if(p!=null)return p
p=H.nF(a)
if(p!=null)return p
if(typeof a=="function")return C.T
s=Object.getPrototypeOf(a)
if(s==null)return C.B
if(s===Object.prototype)return C.B
if(typeof q=="function"){Object.defineProperty(q,$.$get$jB(),{value:C.t,enumerable:false,writable:true,configurable:true})
return C.t}return C.t},
a1:function(a){if(typeof a=="string")return J.aU.prototype
if(a==null)return a
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aV.prototype
return a}if(a instanceof P.o)return a
return J.iX(a)},
cf:function(a){if(a==null)return a
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aV.prototype
return a}if(a instanceof P.o)return a
return J.iX(a)},
li:function(a){if(typeof a=="number")return J.be.prototype
if(a==null)return a
if(!(a instanceof P.o))return J.b1.prototype
return a},
nu:function(a){if(typeof a=="number")return J.be.prototype
if(typeof a=="string")return J.aU.prototype
if(a==null)return a
if(!(a instanceof P.o))return J.b1.prototype
return a},
lj:function(a){if(typeof a=="string")return J.aU.prototype
if(a==null)return a
if(!(a instanceof P.o))return J.b1.prototype
return a},
k:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aV.prototype
return a}if(a instanceof P.o)return a
return J.iX(a)},
F:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.u(a).w(a,b)},
ar:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.li(a).ar(a,b)},
lu:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.li(a).aF(a,b)},
b8:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nE(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.a1(a).h(a,b)},
lv:function(a,b,c,d){return J.k(a).dJ(a,b,c,d)},
jV:function(a,b){return J.lj(a).aK(a,b)},
bv:function(a,b){return J.k(a).e_(a,b)},
lw:function(a,b,c,d){return J.k(a).e0(a,b,c,d)},
lx:function(a,b,c){return J.k(a).e1(a,b,c)},
jW:function(a,b){return J.k(a).bX(a,b)},
jn:function(a,b){return J.k(a).P(a,b)},
jX:function(a,b,c){return J.k(a).c_(a,b,c)},
ly:function(a,b){return J.k(a).eg(a,b)},
dT:function(a,b,c){return J.k(a).c0(a,b,c)},
lz:function(a,b,c){return J.k(a).c1(a,b,c)},
bw:function(a,b,c){return J.k(a).c2(a,b,c)},
dU:function(a,b){return J.k(a).ej(a,b)},
lA:function(a,b){return J.k(a).c3(a,b)},
lB:function(a,b,c){return J.k(a).c4(a,b,c)},
jY:function(a,b,c,d){return J.k(a).c5(a,b,c,d)},
lC:function(a,b){return J.cf(a).c6(a,b)},
lD:function(a,b,c,d,e){return J.k(a).c7(a,b,c,d,e)},
lE:function(a,b){return J.nu(a).R(a,b)},
jo:function(a,b,c){return J.a1(a).ep(a,b,c)},
jp:function(a){return J.k(a).c9(a)},
lF:function(a){return J.k(a).ca(a)},
lG:function(a){return J.k(a).cc(a)},
lH:function(a){return J.k(a).ex(a)},
lI:function(a,b){return J.k(a).ce(a,b)},
jq:function(a,b){return J.k(a).cf(a,b)},
lJ:function(a,b,c,d){return J.k(a).cg(a,b,c,d)},
lK:function(a,b,c,d,e){return J.k(a).eE(a,b,c,d,e)},
lL:function(a,b,c,d,e){return J.k(a).ci(a,b,c,d,e)},
lM:function(a,b,c,d,e,f){return J.k(a).eF(a,b,c,d,e,f)},
lN:function(a,b){return J.cf(a).u(a,b)},
dV:function(a,b){return J.k(a).cj(a,b)},
lO:function(a,b){return J.k(a).ck(a,b)},
lP:function(a){return J.k(a).eG(a)},
lQ:function(a,b){return J.cf(a).aj(a,b)},
lR:function(a){return J.k(a).gef(a)},
as:function(a){return J.u(a).gv(a)},
bx:function(a){return J.cf(a).gA(a)},
dW:function(a){return J.a1(a).gk(a)},
lS:function(a){return J.k(a).gb5(a)},
lT:function(a){return J.u(a).gB(a)},
lU:function(a){return J.k(a).gf2(a)},
lV:function(a){return J.k(a).gaC(a)},
jr:function(a){return J.k(a).gm(a)},
js:function(a){return J.k(a).gn(a)},
jZ:function(a){return J.k(a).gK(a)},
jt:function(a,b){return J.k(a).a7(a,b)},
lW:function(a){return J.k(a).aE(a)},
lX:function(a){return J.k(a).bc(a)},
lY:function(a,b){return J.k(a).bd(a,b)},
lZ:function(a,b,c){return J.k(a).be(a,b,c)},
k_:function(a,b,c){return J.k(a).bh(a,b,c)},
m_:function(a,b){return J.k(a).cn(a,b)},
m0:function(a,b){return J.cf(a).cq(a,b)},
m1:function(a,b,c){return J.k(a).cs(a,b,c)},
m2:function(a){return J.cf(a).eW(a)},
m3:function(a,b){return J.k(a).H(a,b)},
m4:function(a,b,c,d){return J.k(a).bn(a,b,c,d)},
m5:function(a,b,c,d,e,f,g){return J.k(a).cz(a,b,c,d,e,f,g)},
m6:function(a,b,c,d){return J.k(a).cA(a,b,c,d)},
dX:function(a,b,c,d){return J.k(a).cB(a,b,c,d)},
m7:function(a){return J.lj(a).f5(a)},
aB:function(a){return J.u(a).j(a)},
m8:function(a,b,c,d){return J.k(a).f7(a,b,c,d)},
m9:function(a,b,c){return J.k(a).cC(a,b,c)},
ma:function(a,b,c){return J.k(a).cD(a,b,c)},
ju:function(a,b,c){return J.k(a).cE(a,b,c)},
mb:function(a,b,c){return J.k(a).cF(a,b,c)},
k0:function(a,b,c){return J.k(a).cG(a,b,c)},
k1:function(a,b,c){return J.k(a).cH(a,b,c)},
k2:function(a,b,c){return J.k(a).cI(a,b,c)},
k3:function(a,b,c,d){return J.k(a).cJ(a,b,c,d)},
k4:function(a,b,c,d){return J.k(a).cK(a,b,c,d)},
mc:function(a,b){return J.k(a).cM(a,b)},
md:function(a,b,c){return J.k(a).f8(a,b,c)},
k5:function(a,b,c,d,e,f,g){return J.k(a).cO(a,b,c,d,e,f,g)},
me:function(a,b,c,d,e){return J.k(a).cP(a,b,c,d,e)},
a:function a(){},
eV:function eV(){},
eW:function eW(){},
bL:function bL(){},
fD:function fD(){},
b1:function b1(){},
aV:function aV(){},
aT:function aT(a){this.$ti=a},
jz:function jz(a){this.$ti=a},
e1:function e1(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
be:function be(){},
de:function de(){},
dd:function dd(){},
aU:function aU(){}},P={
mZ:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.nj()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.aL(new P.hI(t),1)).observe(s,{childList:true})
return new P.hH(t,s,r)}else if(self.setImmediate!=null)return P.nk()
return P.nl()},
n_:function(a){++u.globalState.f.b
self.scheduleImmediate(H.aL(new P.hJ(a),0))},
n0:function(a){++u.globalState.f.b
self.setImmediate(H.aL(new P.hK(a),0))},
n1:function(a){P.jG(C.v,a)},
l1:function(a,b){if(H.bu(a,{func:1,args:[P.aG,P.aG]})){b.toString
return a}else{b.toString
return a}},
mx:function(a,b,c){var t
if(a==null)a=new P.bi()
t=$.x
if(t!==C.d)t.toString
t=new P.H(0,t,null,[c])
t.bE(a,b)
return t},
my:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.H(0,$.x,null,[P.b])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.eL(t,!1,b,s)
try{for(m=0,l=0;m<1;++m){q=a[m]
p=l
q.b9(new P.eK(t,!1,b,s,p),r)
l=++t.b}if(l===0){l=new P.H(0,$.x,null,[null])
l.bD(C.z)
return l}k=new Array(l)
k.fixed$length=Array
t.a=k}catch(j){o=H.M(j)
n=H.ap(j)
if(t.b===0||!1)return P.mx(o,n,null)
else{t.c=o
t.d=n}}return s},
nb:function(a,b,c){$.x.toString
a.F(b,c)},
n3:function(a,b){var t=new P.H(0,$.x,null,[b])
H.d(!0)
t.a=4
t.c=a
return t},
kX:function(a,b){var t,s,r
H.d(b.a<4)
H.d(!(a instanceof P.H))
H.d(b.a===0)
b.a=1
try{a.b9(new P.i3(b),new P.i4(b))}catch(r){t=H.M(r)
s=H.ap(r)
P.nL(new P.i5(b,t,s))}},
i2:function(a,b){var t,s,r,q
H.d(b.a<=1)
for(;t=a.a,s=t===2,s;){H.d(s)
a=a.c}s=b.a
if(t>=4){H.d(s<4)
r=b.c
b.c=null
q=b.af(r)
H.d(b.a<4)
H.d(a.a>=4)
b.a=a.a
b.c=a.c
P.bp(b,q)}else{q=b.c
H.d(s<=1)
b.a=2
b.c=a
a.bR(q)}},
bp:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.iQ(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bp(t.a,b)}s=t.a
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
P.iQ(null,null,p,o,s)
return}s=$.x
if(s==null?l!=null:s!==l){H.d(l!=null)
s=$.x
H.d(l==null?s!=null:l!==s)
j=$.x
$.x=l
i=j}else i=null
s=b.c
if(s===8)new P.ia(t,r,q,b).$0()
else if(p){if((s&1)!==0)new P.i9(r,b,m).$0()}else if((s&2)!==0)new P.i8(t,r,b).$0()
if(i!=null){H.d(!0)
$.x=i}s=r.b
if(!!J.u(s).$isaS){if(s.a>=4){H.d(o.a<4)
h=o.c
o.c=null
b=o.af(h)
H.d(o.a<4)
H.d(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.i2(s,o)
return}}g=b.b
H.d(g.a<4)
h=g.c
g.c=null
b=g.af(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.d(!o)
g.a=4
g.c=p}else{H.d(!o)
g.a=8
g.c=p}t.a=g
s=g}},
ne:function(){var t,s
for(;t=$.br,t!=null;){$.cb=null
s=t.b
$.br=s
if(s==null)$.ca=null
t.a.$0()}},
nh:function(){$.jL=!0
try{P.ne()}finally{$.cb=null
$.jL=!1
if($.br!=null)$.$get$jI().$1(P.l9())}},
l4:function(a){var t=new P.dI(a,null)
if($.br==null){$.ca=t
$.br=t
if(!$.jL)$.$get$jI().$1(P.l9())}else{$.ca.b=t
$.ca=t}},
ng:function(a){var t,s,r
t=$.br
if(t==null){P.l4(a)
$.cb=$.ca
return}s=new P.dI(a,null)
r=$.cb
if(r==null){s.b=t
$.cb=s
$.br=s}else{s.b=r.b
r.b=s
$.cb=s
if(s.b==null)$.ca=s}},
nL:function(a){var t=$.x
if(C.d===t){P.bs(null,null,C.d,a)
return}t.toString
P.bs(null,null,t,t.aY(a))},
n9:function(a,b,c){var t=a.ek(0)
if(!!J.u(t).$isaS&&t!==$.$get$kq())t.f9(new P.iO(b,c))
else b.ac(c)},
mX:function(a,b){var t=$.x
if(t===C.d){t.toString
return P.jG(a,b)}return P.jG(a,t.aY(b))},
jG:function(a,b){var t=C.b.I(a.a,1000)
return H.mW(t<0?0:t,b)},
jH:function(a){var t,s
H.d(a!=null)
t=$.x
H.d(a==null?t!=null:a!==t)
s=$.x
$.x=a
return s},
iQ:function(a,b,c,d,e){var t={}
t.a=d
P.ng(new P.iR(t,e))},
l2:function(a,b,c,d){var t,s
if($.x===c)return d.$0()
t=P.jH(c)
try{s=d.$0()
return s}finally{s=t
H.d(s!=null)
$.x=s}},
l3:function(a,b,c,d,e){var t,s
if($.x===c)return d.$1(e)
t=P.jH(c)
try{s=d.$1(e)
return s}finally{s=t
H.d(s!=null)
$.x=s}},
nf:function(a,b,c,d,e,f){var t,s
if($.x===c)return d.$2(e,f)
t=P.jH(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.d(s!=null)
$.x=s}},
bs:function(a,b,c,d){var t=C.d!==c
if(t)d=!(!t||!1)?c.aY(d):c.eh(d)
P.l4(d)},
hI:function hI(a){this.a=a},
hH:function hH(a,b,c){this.a=a
this.b=b
this.c=c},
hJ:function hJ(a){this.a=a},
hK:function hK(a){this.a=a},
eL:function eL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eK:function eK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hO:function hO(){},
dJ:function dJ(a,b){this.a=a
this.$ti=b},
iG:function iG(a,b){this.a=a
this.$ti=b},
bo:function bo(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
H:function H(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
i_:function i_(a,b){this.a=a
this.b=b},
i7:function i7(a,b){this.a=a
this.b=b},
i3:function i3(a){this.a=a},
i4:function i4(a){this.a=a},
i5:function i5(a,b,c){this.a=a
this.b=b
this.c=c},
i1:function i1(a,b){this.a=a
this.b=b},
i6:function i6(a,b){this.a=a
this.b=b},
i0:function i0(a,b,c){this.a=a
this.b=b
this.c=c},
ia:function ia(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ib:function ib(a){this.a=a},
i9:function i9(a,b,c){this.a=a
this.b=b
this.c=c},
i8:function i8(a,b,c){this.a=a
this.b=b
this.c=c},
dI:function dI(a,b){this.a=a
this.b=b},
bY:function bY(){},
h8:function h8(a){this.a=a},
h9:function h9(a,b){this.a=a
this.b=b},
h6:function h6(a,b,c){this.a=a
this.b=b
this.c=c},
h7:function h7(a){this.a=a},
h5:function h5(){},
iO:function iO(a,b){this.a=a
this.b=b},
b9:function b9(a,b){this.a=a
this.b=b},
iN:function iN(){},
iR:function iR(a,b){this.a=a
this.b=b},
ip:function ip(){},
ir:function ir(a,b){this.a=a
this.b=b},
iq:function iq(a,b){this.a=a
this.b=b},
is:function is(a,b){this.a=a
this.b=b},
kw:function(a,b){return new H.aj(0,null,null,null,null,null,0,[a,b])},
P:function(){return new H.aj(0,null,null,null,null,null,0,[null,null])},
aF:function(a){return H.nt(a,new H.aj(0,null,null,null,null,null,0,[null,null]))},
c7:function(a,b){return new P.dL(0,null,null,null,null,null,0,[a,b])},
n7:function(){var t=Object.create(null)
H.d(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
mF:function(a,b,c){var t,s
if(P.jM(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$cc()
C.a.l(s,a)
try{P.nd(a,t)}finally{H.d(C.a.gaB(s)===a)
s.pop()}s=P.kF(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eU:function(a,b,c){var t,s,r
if(P.jM(a))return b+"..."+c
t=new P.bZ(b)
s=$.$get$cc()
C.a.l(s,a)
try{r=t
r.a=P.kF(r.ga3(),a,", ")}finally{H.d(C.a.gaB(s)===a)
s.pop()}s=t
s.a=s.ga3()+c
s=t.ga3()
return s.charCodeAt(0)==0?s:s},
jM:function(a){var t,s
for(t=0;s=$.$get$cc(),t<s.length;++t)if(a===s[t])return!0
return!1},
nd:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gA(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.q())return
q=H.f(t.gt())
C.a.l(b,q)
s+=q.length+2;++r}if(!t.q()){if(r<=5)return
p=b.pop()
o=b.pop()}else{n=t.gt();++r
if(!t.q()){if(r<=4){C.a.l(b,H.f(n))
return}p=H.f(n)
o=b.pop()
s+=p.length+2}else{m=t.gt();++r
H.d(r<100)
for(;t.q();n=m,m=l){l=t.gt();++r
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
ak:function(a,b,c,d){return new P.ih(0,null,null,null,null,null,0,[d])},
jD:function(a,b){var t,s
t=P.ak(null,null,null,b)
for(s=J.bx(a);s.q();)t.l(0,s.gt())
return t},
mJ:function(a){var t,s,r
t={}
if(P.jM(a))return"{...}"
s=new P.bZ("")
try{C.a.l($.$get$cc(),a)
r=s
r.a=r.ga3()+"{"
t.a=!0
a.aj(0,new P.f8(t,s))
t=s
t.a=t.ga3()+"}"}finally{t=$.$get$cc()
H.d(C.a.gaB(t)===a)
t.pop()}t=s.ga3()
return t.charCodeAt(0)==0?t:t},
jE:function(a,b){var t=new P.f2(null,0,0,0,[b])
t.dq(a,b)
return t},
dL:function dL(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
ih:function ih(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
ii:function ii(a,b,c){this.a=a
this.b=b
this.c=c},
c6:function c6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ie:function ie(){},
df:function df(){},
y:function y(){},
f8:function f8(a,b){this.a=a
this.b=b},
f2:function f2(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ij:function ij(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fW:function fW(){},
fV:function fV(){},
bU:function bU(){},
kF:function(a,b,c){var t=J.bx(b)
if(!t.q())return a
if(c.length===0){do a+=H.f(t.gt())
while(t.q())}else{a+=H.f(t.gt())
for(;t.q();)a=a+c+H.f(t.gt())}return a},
ml:function(a,b){return J.lE(a,b)},
mn:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.f(t)
if(t>=10)return s+"00"+H.f(t)
return s+"000"+H.f(t)},
mo:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ck:function(a){if(a>=10)return""+a
return"0"+a},
mq:function(a,b,c,d,e,f){return new P.aC(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
jx:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aB(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mt(a)},
mt:function(a){var t=J.u(a)
if(!!t.$isbb)return t.j(a)
return H.fJ(a)},
e0:function(a){return new P.ah(!1,null,null,a)},
k6:function(a,b,c){return new P.ah(!0,a,b,c)},
mf:function(a){return new P.ah(!1,null,a,"Must not be null")},
fK:function(a,b,c){return new P.dw(null,null,!0,a,b,"Value not in range")},
b_:function(a,b,c,d,e){return new P.dw(b,c,!0,a,d,"Invalid value")},
kC:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.b_(a,0,c,"start",f))
if(a>b||b>c)throw H.e(P.b_(b,a,c,"end",f))
return b},
C:function(a,b,c,d,e){var t=e!=null?e:J.dW(b)
return new P.eQ(b,t,!0,a,c,"Index out of range")},
cq:function(a){return new P.hZ(a)},
kx:function(a,b,c){var t,s
t=H.D([],[c])
for(s=J.bx(a);s.q();)C.a.l(t,s.gt())
if(b)return t
t.fixed$length=Array
return t},
a3:function(a){H.jd(H.f(a))},
aA:function aA(){},
I:function I(){},
aR:function aR(a,b){this.a=a
this.b=b},
O:function O(){},
aC:function aC(a){this.a=a},
ei:function ei(){},
ej:function ej(){},
bd:function bd(){},
ci:function ci(a){this.a=a},
bi:function bi(){},
ah:function ah(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dw:function dw(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eQ:function eQ(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
v:function v(a){this.a=a},
c2:function c2(a){this.a=a},
al:function al(a){this.a=a},
a5:function a5(a){this.a=a},
dA:function dA(){},
ea:function ea(a){this.a=a},
hZ:function hZ(a){this.a=a},
el:function el(a,b,c){this.a=a
this.b=b
this.$ti=c},
p:function p(){},
Z:function Z(){},
dc:function dc(){},
b:function b(){},
N:function N(){},
aG:function aG(){},
Y:function Y(){},
o:function o(){},
bX:function bX(){},
r:function r(){},
bZ:function bZ(a){this.a=a},
lb:function(a){return a},
iU:function(a){var t,s,r,q,p
if(a==null)return
t=P.P()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.J)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
nq:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.lQ(a,new P.iT(t))
return t},
kl:function(){var t=$.kk
if(t==null){t=J.jo(window.navigator.userAgent,"Opera",0)
$.kk=t}return t},
mp:function(){var t,s
t=$.kh
if(t!=null)return t
s=$.ki
if(s==null){s=J.jo(window.navigator.userAgent,"Firefox",0)
$.ki=s}if(s)t="-moz-"
else{s=$.kj
if(s==null){s=!P.kl()&&J.jo(window.navigator.userAgent,"Trident/",0)
$.kj=s}if(s)t="-ms-"
else t=P.kl()?"-o-":"-webkit-"}$.kh=t
return t},
iB:function iB(){},
iD:function iD(a,b){this.a=a
this.b=b},
iT:function iT(a){this.a=a},
iC:function iC(a,b){this.a=a
this.b=b},
io:function io(){},
K:function K(){},
dY:function dY(){},
aO:function aO(){},
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
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eF:function eF(){},
eH:function eH(){},
ai:function ai(){},
aE:function aE(){},
eO:function eO(){},
au:function au(){},
eZ:function eZ(){},
f9:function f9(){},
fa:function fa(){},
av:function av(){},
ft:function ft(){},
fA:function fA(){},
fF:function fF(){},
fG:function fG(){},
fL:function fL(){},
fM:function fM(){},
bW:function bW(){},
ha:function ha(){},
G:function G(){},
hb:function hb(){},
hc:function hc(){},
dC:function dC(){},
hg:function hg(){},
c0:function c0(){},
aw:function aw(){},
hq:function hq(){},
hx:function hx(){},
hz:function hz(){},
hA:function hA(){},
c4:function c4(){},
it:function it(){},
iu:function iu(){},
iv:function iv(){},
cA:function cA(){},
cy:function cy(){},
cF:function cF(){},
cJ:function cJ(){},
cU:function cU(){},
d1:function d1(){},
cY:function cY(){},
d_:function d_(){},
e2:function e2(){},
fQ:function fQ(){},
fR:function fR(){},
iK:function iK(){},
h0:function h0(){},
cz:function cz(){},
cW:function cW(){}},W={
mr:function(a,b,c){var t,s
t=document.body
s=(t&&C.n).N(t,a,b,c)
s.toString
t=new H.dH(new W.V(s),new W.iS(),[W.t])
return t.ga1(t)},
ms:function(a){return"wheel"},
bA:function(a){var t,s,r
t="element tag unavailable"
try{s=J.lU(a)
if(typeof s==="string")t=a.tagName}catch(r){H.M(r)}return t},
n2:function(a,b){return document.createElement(a)},
b7:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
l_:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
an:function(a,b,c,d,e){var t=c==null?null:W.l5(new W.hY(c))
t=new W.hX(0,a,b,t,!1,[e])
t.dE(a,b,c,!1,e)
return t},
kY:function(a){var t,s
t=document.createElement("a")
s=new W.iw(t,window.location)
s=new W.c5(s)
s.dF(a)
return s},
n5:function(a,b,c,d){return!0},
n6:function(a,b,c,d){var t,s,r,q,p
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
l0:function(){var t=P.r
t=new W.iH(P.jD(C.q,t),P.ak(null,null,null,t),P.ak(null,null,null,t),P.ak(null,null,null,t),null)
t.dH(null,new H.bM(C.q,new W.iI(),[H.aq(C.q,0),null]),["TEMPLATE"],null)
return t},
l5:function(a){var t=$.x
if(t===C.d)return a
return t.ei(a)},
l:function l(){},
dZ:function dZ(){},
e_:function e_(){},
a4:function a4(){},
e3:function e3(){},
ba:function ba(){},
aP:function aP(){},
cj:function cj(){},
e5:function e5(){},
aQ:function aQ(){},
e8:function e8(){},
A:function A(){},
bc:function bc(){},
e9:function e9(){},
eb:function eb(){},
ec:function ec(){},
cl:function cl(){},
bz:function bz(){},
cm:function cm(){},
ed:function ed(){},
cn:function cn(){},
ee:function ee(){},
co:function co(){},
cp:function cp(){},
ef:function ef(){},
eg:function eg(){},
a6:function a6(){},
iS:function iS(){},
j:function j(){},
h:function h(){},
S:function S(){},
bH:function bH(){},
eE:function eE(){},
eI:function eI(){},
a7:function a7(){},
cv:function cv(){},
eM:function eM(){},
bI:function bI(){},
cw:function cw(){},
eN:function eN(){},
bJ:function bJ(){},
bK:function bK(){},
eR:function eR(){},
aW:function aW(){},
f3:function f3(){},
bN:function bN(){},
fc:function fc(){},
bg:function bg(){},
fe:function fe(){},
bO:function bO(){},
a8:function a8(){},
ff:function ff(){},
Q:function Q(){},
dn:function dn(){},
fp:function fp(a){this.a=a},
fq:function fq(a){this.a=a},
V:function V(a){this.a=a},
t:function t(){},
dq:function dq(){},
bT:function bT(){},
fz:function fz(){},
fC:function fC(){},
a9:function a9(){},
fE:function fE(){},
fH:function fH(){},
fI:function fI(){},
dv:function dv(){},
fS:function fS(){},
dy:function dy(){},
fU:function fU(){},
fX:function fX(){},
aa:function aa(){},
fY:function fY(){},
ab:function ab(){},
h_:function h_(){},
ac:function ac(){},
h4:function h4(){},
a_:function a_(){},
am:function am(){},
dB:function dB(){},
hd:function hd(){},
he:function he(){},
c_:function c_(){},
ad:function ad(){},
a0:function a0(){},
hh:function hh(){},
hi:function hi(){},
hk:function hk(){},
ae:function ae(){},
b0:function b0(){},
ho:function ho(){},
hp:function hp(){},
bl:function bl(){},
hr:function hr(){},
dF:function dF(){},
aI:function aI(){},
hw:function hw(){},
bn:function bn(){},
hy:function hy(){},
hB:function hB(){},
hC:function hC(){},
b2:function b2(){},
c3:function c3(){},
hE:function hE(a){this.a=a},
hF:function hF(){},
b3:function b3(){},
hN:function hN(){},
dK:function dK(){},
hP:function hP(){},
hQ:function hQ(){},
hR:function hR(){},
ic:function ic(){},
id:function id(){},
dM:function dM(){},
ix:function ix(){},
iA:function iA(){},
iE:function iE(){},
iL:function iL(){},
iM:function iM(){},
hL:function hL(){},
hS:function hS(a){this.a=a},
hW:function hW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hT:function hT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hX:function hX(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
hY:function hY(a){this.a=a},
c5:function c5(a){this.a=a},
B:function B(){},
ds:function ds(a){this.a=a},
fs:function fs(a){this.a=a},
fr:function fr(a,b,c){this.a=a
this.b=b
this.c=c},
c8:function c8(){},
iy:function iy(){},
iz:function iz(){},
iH:function iH(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iI:function iI(){},
iF:function iF(){},
ct:function ct(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
dr:function dr(){},
iw:function iw(a,b){this.a=a
this.b=b},
dO:function dO(a){this.a=a},
iJ:function iJ(a){this.a=a},
bB:function bB(){},
bC:function bC(){},
bD:function bD(){},
bE:function bE(){},
bF:function bF(){},
bG:function bG(){},
cx:function cx(){},
cR:function cR(){},
cD:function cD(){},
cK:function cK(){},
cL:function cL(){},
cM:function cM(){},
cN:function cN(){},
cO:function cO(){},
cP:function cP(){},
cQ:function cQ(){},
cB:function cB(){},
cC:function cC(){},
cE:function cE(){},
cG:function cG(){},
cH:function cH(){},
cI:function cI(){},
cS:function cS(){},
cT:function cT(){},
d3:function d3(){},
d4:function d4(){},
d2:function d2(){},
d7:function d7(){},
d8:function d8(){},
d9:function d9(){},
da:function da(){},
cV:function cV(){},
cX:function cX(){},
cZ:function cZ(){},
d0:function d0(){},
d5:function d5(){},
d6:function d6(){}},B={
nM:function(a){var t,s
t=document
s=W.aW
W.an(t,"keydown",new B.jf(),!1,s)
W.an(t,"keyup",new B.jg(),!1,s)
if(!$.nN)W.an(t,"mousemove",new B.jh(),!1,W.Q)
s=W.Q
W.an(t,"mousedown",new B.ji(),!1,s)
W.an(t,"mouseup",new B.jj(),!1,s)},
mK:function(a,b,c,d){var t,s,r,q
t=new Float32Array(H.i(3))
s=$.$get$iV()
r=$.$get$ce()
q=new T.T(new Float32Array(H.i(16)))
q.T()
q=new B.fu(a,b,c,0,new T.m(t),-0.02,s,r,q,new T.m(new Float32Array(H.i(3))),new T.m(new Float32Array(H.i(3))),new T.m(new Float32Array(H.i(3))),new T.m(new Float32Array(H.i(3))),"camera:orbit",!1,!0)
q.ds(a,b,c,d)
return q},
jf:function jf(){},
jg:function jg(){},
jh:function jh(){},
ji:function ji(){},
jj:function jj(){},
fu:function fu(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
fv:function fv(a){this.a=a},
fw:function fw(a){this.a=a},
fx:function fx(){},
fy:function fy(a){this.a=a},
mm:function(d1,d2,d3,d4,d5,d6,d7,d8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0
t=-d6
s=-d7
r=new T.m(new Float32Array(H.i(3)))
r.p(t,s,d8)
q=new T.m(new Float32Array(H.i(3)))
q.p(d6,s,d8)
p=new T.m(new Float32Array(H.i(3)))
p.p(d6,d7,d8)
o=new T.m(new Float32Array(H.i(3)))
o.p(t,d7,d8)
n=-d8
m=new T.m(new Float32Array(H.i(3)))
m.p(t,s,n)
l=new T.m(new Float32Array(H.i(3)))
l.p(t,d7,n)
k=new T.m(new Float32Array(H.i(3)))
k.p(d6,d7,n)
j=new T.m(new Float32Array(H.i(3)))
j.p(d6,s,n)
i=new T.m(new Float32Array(H.i(3)))
i.p(t,d7,n)
h=new T.m(new Float32Array(H.i(3)))
h.p(t,d7,d8)
g=new T.m(new Float32Array(H.i(3)))
g.p(d6,d7,d8)
f=new T.m(new Float32Array(H.i(3)))
f.p(d6,d7,n)
e=new T.m(new Float32Array(H.i(3)))
e.p(d6,s,d8)
d=new T.m(new Float32Array(H.i(3)))
d.p(t,s,d8)
c=new T.m(new Float32Array(H.i(3)))
c.p(t,s,n)
b=new T.m(new Float32Array(H.i(3)))
b.p(d6,s,n)
a=new T.m(new Float32Array(H.i(3)))
a.p(d6,s,n)
a0=new T.m(new Float32Array(H.i(3)))
a0.p(d6,d7,n)
a1=new T.m(new Float32Array(H.i(3)))
a1.p(d6,d7,d8)
a2=new T.m(new Float32Array(H.i(3)))
a2.p(d6,s,d8)
a3=new T.m(new Float32Array(H.i(3)))
a3.p(t,s,n)
a4=new T.m(new Float32Array(H.i(3)))
a4.p(t,s,d8)
s=new T.m(new Float32Array(H.i(3)))
s.p(t,d7,d8)
a5=new T.m(new Float32Array(H.i(3)))
a5.p(t,d7,n)
n=new Float32Array(H.i(2))
n[0]=d3
n[1]=d5
t=new Float32Array(H.i(2))
t[0]=d2
t[1]=d5
a6=new Float32Array(H.i(2))
a6[0]=d2
a6[1]=d4
a7=new Float32Array(H.i(2))
a7[0]=d3
a7[1]=d4
a8=new Float32Array(H.i(2))
a8[0]=d2
a8[1]=d5
a9=new Float32Array(H.i(2))
a9[0]=d2
a9[1]=d4
b0=new Float32Array(H.i(2))
b0[0]=d3
b0[1]=d4
b1=new Float32Array(H.i(2))
b1[0]=d3
b1[1]=d5
b2=new Float32Array(H.i(2))
b2[0]=d3
b2[1]=d4
b3=new Float32Array(H.i(2))
b3[0]=d3
b3[1]=d5
b4=new Float32Array(H.i(2))
b4[0]=d2
b4[1]=d5
b5=new Float32Array(H.i(2))
b5[0]=d2
b5[1]=d4
b6=new Float32Array(H.i(2))
b6[0]=d2
b6[1]=d4
b7=new Float32Array(H.i(2))
b7[0]=d3
b7[1]=d4
b8=new Float32Array(H.i(2))
b8[0]=d3
b8[1]=d5
b9=new Float32Array(H.i(2))
b9[0]=d2
b9[1]=d5
c0=new Float32Array(H.i(2))
c0[0]=d2
c0[1]=d5
c1=new Float32Array(H.i(2))
c1[0]=d2
c1[1]=d4
c2=new Float32Array(H.i(2))
c2[0]=d3
c2[1]=d4
c3=new Float32Array(H.i(2))
c3[0]=d3
c3[1]=d5
c4=new Float32Array(H.i(2))
c4[0]=d3
c4[1]=d5
c5=new Float32Array(H.i(2))
c5[0]=d2
c5[1]=d5
c6=new Float32Array(H.i(2))
c6[0]=d2
c6[1]=d4
c7=new Float32Array(H.i(2))
c7[0]=d3
c7[1]=d4
c8=new G.cu(!1,[],[],[],P.P())
c8.as("aTexUV")
c8.as("aNormal")
c8.dg(6)
c8.dh([r,q,p,o,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,s,a5])
c8.bq("aTexUV",[new T.w(n),new T.w(t),new T.w(a6),new T.w(a7),new T.w(a8),new T.w(a9),new T.w(b0),new T.w(b1),new T.w(b2),new T.w(b3),new T.w(b4),new T.w(b5),new T.w(b6),new T.w(b7),new T.w(b8),new T.w(b9),new T.w(c0),new T.w(c1),new T.w(c2),new T.w(c3),new T.w(c4),new T.w(c5),new T.w(c6),new T.w(c7)])
for(c9=0;t=$.$get$kW(),c9<6;++c9){d0=t[c9]
c8.br("aNormal",[d0,d0,d0,d0])}return c8}},G={
mY:function(a){var t,s,r
t=a.split("\n")
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.f(t[s])}return C.a.a5(t,"\n")},
kV:function(a,b,c){var t,s,r,q
t=J.k(a)
s=t.cb(a,b)
t.bl(a,s,c)
t.c8(a,s)
r=t.bg(a,s,35713)
if(r!=null&&!r){q=t.bf(a,s)
P.a3("E:Compilation failed:")
P.a3("E:"+G.mY(c))
P.a3("E:Failure:")
P.a3(C.i.a0("E:",q))
throw H.e(q)}return s},
ky:function(a){var t=new G.fb(P.P(),a,!1,!0)
t.dr(a)
return t},
kp:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.jr(a[s])
b[t+1]=J.js(a[s])
b[t+2]=J.jZ(a[s])}return b},
mv:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.jr(a[s])
b[t+1]=J.js(a[s])}return b},
mw:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.jr(a[s])
b[t+1]=J.js(a[s])
b[t+2]=J.jZ(a[s])
b[t+3]=J.lV(a[s])}return b},
mu:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.b8(a[s],0)
b[t+1]=J.b8(a[s],1)
b[t+2]=J.b8(a[s],2)
b[t+3]=J.b8(a[s],3)}return b},
n4:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
for(t=a.e,s=t.gE(t),s=s.gA(s),r=b.x,q=[[P.b,P.p]],p=[P.O],o=[T.aJ],n=[T.m],m=[T.w];s.q();){l=s.gt()
if(!r.D(0,l)){k="Dropping unnecessary attribute: "+H.f(l)
if($.lh>0)H.jd("I: "+k)
continue}j=t.h(0,l)
switch($.$get$W().h(0,l).a){case"vec2":b.aa(l,G.mv(H.dS(j,"$isb",m,"$asb"),null),2)
break
case"vec3":b.aa(l,G.kp(H.dS(j,"$isb",n,"$asb"),null),3)
break
case"vec4":b.aa(l,G.mw(H.dS(j,"$isb",o,"$asb"),null),4)
break
case"float":b.aa(l,new Float32Array(H.iP(H.dS(j,"$isb",p,"$asb"))),1)
break
case"uvec4":b.aa(l,G.mu(H.dS(j,"$isb",q,"$asb"),null),4)
break
default:if(H.az(!1))H.aK("unknown type for "+H.f(l)+" ["+J.lT(j[0]).j(0)+"] ["+new H.aH(H.iZ(j),null).j(0)+"] "+H.f(j))}}},
kr:function(a,b,c){var t,s,r,q,p,o,n,m
t=b.d
s=b.e.x
r=P.P()
q=J.lH(t.a)
p=new G.fd(t,q,4,r,s,null,0,-1,null,null,P.P(),"meshdata:"+a,!1,!0)
o=G.kp(c.d,null)
r.i(0,"aPosition",J.jp(t.a))
p.ch=o
p.bt("aPosition",o,3)
n=$.$get$W().h(0,"aPosition")
if(n==null)H.E("Unknown canonical aPosition")
H.d(s.D(0,"aPosition"))
m=s.h(0,"aPosition")
J.dU(t.a,q)
t.cl(0,m,0)
s=r.h(0,"aPosition")
r=n.bv()
J.dT(t.a,34962,s)
J.k5(t.a,m,r,5126,!1,0,0)
s=c.dm()
p.y=J.jp(t.a)
H.d(p.ch!=null)
r=p.ch.length
if(r<768){p.saO(new Uint8Array(H.iP(s)))
p.Q=5121}else if(r<196608){p.saO(new Uint16Array(H.iP(s)))
p.Q=5123}else{p.saO(new Uint32Array(H.iP(s)))
p.Q=5125}J.dU(t.a,q)
s=p.y
r=p.cx
q=J.u(r)
H.d(!!q.$iskS||!!q.$iskT||!!q.$iskU)
J.dT(t.a,34963,s)
J.jY(t.a,34963,r,35048)
G.n4(c,p)
return p},
kD:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.ak(null,null,null,P.r)
s=c.b
r=d.b
q=c.f
p=J.lF(b.a)
o=G.kV(b.a,35633,s)
J.jX(b.a,p,o)
n=G.kV(b.a,35632,r)
J.jX(b.a,p,n)
if(q.length>0)J.m8(b.a,p,q,35980)
J.m_(b.a,p)
if(!J.lZ(b.a,p,35714))H.E(J.lY(b.a,p))
t=new G.fP(b,c,d,p,P.jD(c.c,null),P.P(),P.P(),t,null,a,!1,!0)
t.du(a,b,c,d)
return t},
fg:function fg(){},
dG:function dG(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
e4:function e4(){},
e7:function e7(a,b){this.a=a
this.b=b},
eJ:function eJ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cr:function cr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cu:function cu(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dE:function dE(a,b,c){this.a=a
this.b=b
this.c=c},
dD:function dD(a,b,c){this.a=a
this.b=b
this.c=c},
fb:function fb(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
fd:function fd(a,b,c,d,e,f,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
fB:function fB(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
eh:function eh(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fP:function fP(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
z:function z(a,b,c){this.a=a
this.b=b
this.c=c},
bk:function bk(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fZ:function fZ(){},
hj:function hj(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
c1:function c1(){},
eP:function eP(a,b,c,d,e,f){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f}},R={dx:function dx(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
_.c=a5},h2:function h2(){},h3:function h3(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},A={
le:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=b.dx
t.L(c)
s=b.d
t.cr(0,s)
r=b.cx
J.aB(b)
q=C.a.gaB(e)
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
p.er(new T.aX(o))
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
a.dl(r,e,d)
e.pop()
for(s=b.cy,r=s.length,l=0;l<s.length;s.length===r||(0,H.J)(s),++l)A.le(a,s[l],t,d,e)},
dp:function dp(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
bV:function bV(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.a=d
_.b=e
_.c=f},
fO:function fO(){},
dQ:function(a){var t,s
t=C.W.eH(a,0,new A.j_())
s=536870911&t+(C.b.cQ(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
j_:function j_(){}},D={
mI:function(){var t,s,r,q,p,o
t=new P.H(0,$.x,null,[null])
s=new P.dJ(t,[null])
r=window.navigator
r=(r&&C.X).cV(r,!0).ap(new D.f5(s))
q=new D.f6(s)
p=H.aq(r,0)
o=$.x
if(o!==C.d)q=P.l1(q,o)
r.au(new P.bo(null,new P.H(0,o,null,[p]),2,null,q,[p,p]))
return t},
f5:function f5(a){this.a=a},
f4:function f4(a,b){this.a=a
this.b=b},
f6:function f6(a){this.a=a}},T={
bm:function(a,b,c){var t=new T.m(new Float32Array(H.i(3)))
t.p(a,b,c)
return t},
aX:function aX(a){this.a=a},
T:function T(a){this.a=a},
w:function w(a){this.a=a},
m:function m(a){this.a=a},
aJ:function aJ(a){this.a=a}},U={
nG:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
t={}
s=document
r=new R.h3(0,0,null,null,null,null)
r.dw(C.p.cU(s,"stats"),"blue","gray")
q=C.p.eV(s,"#webgl-canvas")
p=new G.e7(null,q)
s=(q&&C.J).cT(q,"webgl2",P.aF(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
p.a=s
if(s==null)H.E(P.cq('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
o="ChronosGL Config: "+J.aB(J.lW(s))
if($.lh>0)P.a3("I: "+o)
J.lD(s,0,0,0,1)
J.dV(s,2929)
n=B.mK(15,10,0,q)
s=new T.T(new Float32Array(H.i(16)))
s.T()
o=new T.T(new Float32Array(H.i(16)))
o.T()
m=new G.fB(n,50,1,0.1,1000,s,o,new T.T(new Float32Array(H.i(16))),P.P(),"perspective",!1,!0)
m.by()
o=H.D([],[A.bV])
l=new R.dx(q,m,null,p,o,17664,0,0,0,0,"main",!1,!0)
l.dt("main",p,null)
l.cu(null)
W.an(window,"resize",l.geZ(),!1,W.j)
s=G.kD("bg",p,$.$get$ld(),$.$get$lc())
k=[]
H.d(!0)
C.a.l(o,new A.bV(s,[],k,"bg",!1,!0))
j=G.ky("bg")
j.d.i(0,"cDepthWrite",!1)
i=new T.m(new Float32Array(H.i(3)))
i.p(-1,-1,0)
h=new T.m(new Float32Array(H.i(3)))
h.p(1,-1,0)
g=new T.m(new Float32Array(H.i(3)))
g.p(1,1,0)
f=new T.m(new Float32Array(H.i(3)))
f.p(-1,1,0)
e=new Float32Array(H.i(2))
e[0]=0
e[1]=0
d=new Float32Array(H.i(2))
d[0]=1
d[1]=0
c=new Float32Array(H.i(2))
c[0]=1
c[1]=1
b=new Float32Array(H.i(2))
b[0]=0
b[1]=1
a=new T.m(new Float32Array(H.i(3)))
a.p(0,0,1)
a0=new G.cu(!1,[],[],[],P.P())
a0.as("aTexUV")
a0.di([i,h,g,f])
a0.bq("aTexUV",[new T.w(e),new T.w(d),new T.w(c),new T.w(b)])
a0.as("aNormal")
a0.br("aNormal",[a,a,a,a])
s=G.kr("quad",s,a0)
b=new Float32Array(H.i(9))
c=new T.T(new Float32Array(H.i(16)))
c.T()
d=new T.T(new Float32Array(H.i(16)))
d.T()
e=new Float32Array(H.i(3))
f=new Float32Array(H.i(3))
g=new Float32Array(H.i(3))
h=new Float32Array(H.i(3))
H.d(!0)
C.a.l(k,new A.dp(j,s,[],new T.aX(b),c,d,new T.m(e),new T.m(f),new T.m(g),new T.m(h),"bg",!1,!0))
h=G.kD("solid",p,$.$get$lr(),$.$get$lq())
g=[]
H.d(!0)
C.a.l(o,new A.bV(h,[m],g,"objects",!1,!0))
a1=G.ky("cube")
a1.a2("uColor",$.$get$ke())
s=G.kr("cube",h,B.mm(!0,1,0,1,0,0.2,0.2,0.2))
o=new Float32Array(H.i(9))
k=new T.T(new Float32Array(H.i(16)))
k.T()
i=new T.T(new Float32Array(H.i(16)))
i.T()
a2=new A.dp(a1,s,[],new T.aX(o),k,i,new T.m(new Float32Array(H.i(3))),new T.m(new Float32Array(H.i(3))),new T.m(new Float32Array(H.i(3))),new T.m(new Float32Array(H.i(3))),"cube",!1,!0)
a2.bj(-5,0,-5)
H.d(!0)
C.a.l(g,a2)
t.a=null
t.b=null
t.c=0
P.my([D.mI()],null,!1).ap(new U.jb(t,p,j,new U.ja(t,r,n,l,a2)))},
ja:function ja(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jb:function jb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}}
var v=[C,H,J,P,W,B,G,R,A,D,T,U]
setFunctionNamesIfNecessary(v)
var $={}
H.jA.prototype={}
J.a.prototype={
w:function(a,b){return a===b},
gv:function(a){return H.aZ(a)},
j:function(a){return H.fJ(a)},
gB:function(a){return new H.aH(H.iZ(a),null)}}
J.eV.prototype={
j:function(a){return String(a)},
gv:function(a){return a?519018:218159},
gB:function(a){return C.ar},
$isaA:1}
J.eW.prototype={
w:function(a,b){return null==b},
j:function(a){return"null"},
gv:function(a){return 0},
gB:function(a){return C.al}}
J.bL.prototype={
gv:function(a){return 0},
gB:function(a){return C.ak},
j:function(a){return String(a)},
$iskv:1}
J.fD.prototype={}
J.b1.prototype={}
J.aV.prototype={
j:function(a){var t=a[$.$get$kg()]
return t==null?this.dd(a):J.aB(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isjy:1}
J.aT.prototype={
b_:function(a,b){if(!!a.immutable$list)throw H.e(new P.v(b))},
aZ:function(a,b){if(!!a.fixed$length)throw H.e(new P.v(b))},
l:function(a,b){this.aZ(a,"add")
a.push(b)},
M:function(a,b){var t,s,r,q,p
t=a.length
this.aZ(a,"addAll")
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.J)(b),++r,t=p){q=b[r]
p=t+1
H.d(t===a.length||H.E(new P.a5(a)))
a.push(q)}},
cq:function(a,b){return new H.bM(a,b,[H.aq(a,0),null])},
a5:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.f(a[s])
return t.join(b)},
u:function(a,b){return this.h(a,b)},
gb1:function(a){if(a.length>0)return a[0]
throw H.e(H.db())},
gaB:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.e(H.db())},
bk:function(a,b,c,d,e){var t,s
this.b_(a,"setRange")
P.kC(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.E(P.b_(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.e(H.mG())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=d[e+s]
else for(s=0;s<t;++s)a[b+s]=d[e+s]},
bZ:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.e(new P.a5(a))}return!1},
d7:function(a,b){this.b_(a,"sort")
H.dz(a,0,a.length-1,P.nr())},
aG:function(a){return this.d7(a,null)},
C:function(a,b){var t
for(t=0;t<a.length;++t)if(J.F(a[t],b))return!0
return!1},
j:function(a){return P.eU(a,"[","]")},
gA:function(a){return new J.e1(a,a.length,0,null,[H.aq(a,0)])},
gv:function(a){return H.aZ(a)},
gk:function(a){return a.length},
sk:function(a,b){this.aZ(a,"set length")
if(b<0)throw H.e(P.b_(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.R(a,b))
if(b>=a.length||b<0)throw H.e(H.R(a,b))
return a[b]},
i:function(a,b,c){this.b_(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.R(a,b))
if(b>=a.length||b<0)throw H.e(H.R(a,b))
a[b]=c},
$isn:1,
$asn:function(){},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
J.jz.prototype={}
J.e1.prototype={
gt:function(){return this.d},
q:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.e(H.J(t))
r=this.c
if(r>=s){this.sbz(null)
return!1}this.sbz(t[r]);++this.c
return!0},
sbz:function(a){this.d=a}}
J.be.prototype={
R:function(a,b){var t
if(typeof b!=="number")throw H.e(H.X(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaz(b)
if(this.gaz(a)===t)return 0
if(this.gaz(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaz:function(a){return a===0?1/a<0:a<0},
el:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.e(new P.v(""+a+".ceil()"))},
a6:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(new P.v(""+a+".round()"))},
em:function(a,b,c){if(this.R(b,c)>0)throw H.e(H.X(b))
if(this.R(a,b)<0)return b
if(this.R(a,c)>0)return c
return a},
f6:function(a,b){var t
if(b>20)throw H.e(P.b_(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gaz(a))return"-"+t
return t},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv:function(a){return a&0x1FFFFFFF},
a0:function(a,b){if(typeof b!=="number")throw H.e(H.X(b))
return a+b},
a9:function(a,b){if(typeof b!=="number")throw H.e(H.X(b))
return a-b},
cR:function(a,b){if(typeof b!=="number")throw H.e(H.X(b))
return a/b},
G:function(a,b){if(typeof b!=="number")throw H.e(H.X(b))
return a*b},
aI:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bV(a,b)},
I:function(a,b){return(a|0)===a?a/b|0:this.bV(a,b)},
bV:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.e(new P.v("Result of truncating division is "+H.f(t)+": "+H.f(a)+" ~/ "+b))},
aT:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
cQ:function(a,b){if(typeof b!=="number")throw H.e(H.X(b))
return(a&b)>>>0},
df:function(a,b){if(typeof b!=="number")throw H.e(H.X(b))
return(a^b)>>>0},
aF:function(a,b){if(typeof b!=="number")throw H.e(H.X(b))
return a<b},
ar:function(a,b){if(typeof b!=="number")throw H.e(H.X(b))
return a>b},
cS:function(a,b){if(typeof b!=="number")throw H.e(H.X(b))
return a>=b},
gB:function(a){return C.au},
$isY:1}
J.de.prototype={
gB:function(a){return C.at},
$isO:1,
$isp:1,
$isY:1}
J.dd.prototype={
gB:function(a){return C.as},
$isO:1,
$isY:1}
J.aU.prototype={
aK:function(a,b){if(b>=a.length)throw H.e(H.R(a,b))
return a.charCodeAt(b)},
a0:function(a,b){if(typeof b!=="string")throw H.e(P.k6(b,null,null))
return a+b},
d8:function(a,b,c){var t
if(c>a.length)throw H.e(P.b_(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bm:function(a,b){return this.d8(a,b,0)},
bo:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.fK(b,null,null))
if(b>c)throw H.e(P.fK(b,null,null))
if(c>a.length)throw H.e(P.fK(c,null,null))
return a.substring(b,c)},
d9:function(a,b){return this.bo(a,b,null)},
f5:function(a){return a.toLowerCase()},
ep:function(a,b,c){if(c>a.length)throw H.e(P.b_(c,0,a.length,null,null))
return H.nO(a,b,c)},
R:function(a,b){var t
if(typeof b!=="string")throw H.e(H.X(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
j:function(a){return a},
gv:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gB:function(a){return C.am},
gk:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.e(H.R(a,b))
return a[b]},
$isn:1,
$asn:function(){},
$isr:1}
H.c.prototype={$asc:null}
H.bf.prototype={
gA:function(a){return new H.dg(this,this.gk(this),0,null,[H.ag(this,"bf",0)])},
aD:function(a,b){return this.dc(0,b)},
f4:function(a,b){var t,s
t=H.D([],[H.ag(this,"bf",0)])
C.a.sk(t,this.gk(this))
for(s=0;s<this.gk(this);++s)t[s]=this.u(0,s)
return t},
f3:function(a){return this.f4(a,!0)}}
H.dg.prototype={
gt:function(){return this.d},
q:function(){var t,s,r,q
t=this.a
s=J.a1(t)
r=s.gk(t)
if(this.b!==r)throw H.e(new P.a5(t))
q=this.c
if(q>=r){this.sad(null)
return!1}this.sad(s.u(t,q));++this.c
return!0},
sad:function(a){this.d=a}}
H.dh.prototype={
gA:function(a){return new H.f7(null,J.bx(this.a),this.b,this.$ti)},
gk:function(a){return J.dW(this.a)},
$asZ:function(a,b){return[b]}}
H.ek.prototype={$isc:1,
$asc:function(a,b){return[b]}}
H.f7.prototype={
q:function(){var t=this.b
if(t.q()){this.sad(this.c.$1(t.gt()))
return!0}this.sad(null)
return!1},
gt:function(){return this.a},
sad:function(a){this.a=a},
$asdc:function(a,b){return[b]}}
H.bM.prototype={
gk:function(a){return J.dW(this.a)},
u:function(a,b){return this.b.$1(J.lN(this.a,b))},
$asc:function(a,b){return[b]},
$asbf:function(a,b){return[b]},
$asZ:function(a,b){return[b]}}
H.dH.prototype={
gA:function(a){return new H.hD(J.bx(this.a),this.b,this.$ti)}}
H.hD.prototype={
q:function(){var t,s
for(t=this.a,s=this.b;t.q();)if(s.$1(t.gt()))return!0
return!1},
gt:function(){return this.a.gt()}}
H.cs.prototype={}
H.jk.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.jl.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.il.prototype={
seQ:function(a){this.z=a},
seS:function(a){this.ch=a}}
H.b5.prototype={
bY:function(a,b){if(!this.f.w(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.aX()},
eY:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.an(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.bP();++r.d}this.y=!1}this.aX()},
ea:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.u(a),s=0;r=this.ch,s<r.length;s+=2)if(t.w(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
eX:function(a){var t,s,r
if(this.ch==null)return
for(t=J.u(a),s=0;r=this.ch,s<r.length;s+=2)if(t.w(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.E(new P.v("removeRange"))
P.kC(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
d4:function(a,b){if(!this.r.w(0,a))return
this.db=b},
eK:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.H(0,c)
return}H.d(b===1)
t=this.cx
if(t==null){t=P.jE(null,null)
this.cx=t}t.U(0,new H.ig(a,c))},
eJ:function(a,b){var t
if(!this.r.w(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.aA()
return}H.d(b===1)
t=this.cx
if(t==null){t=P.jE(null,null)
this.cx=t}t.U(0,this.geR())},
eL:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.a3(a)
if(b!=null)P.a3(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.aB(a)
s[1]=b==null?null:b.j(0)
for(r=new P.c6(t,t.r,null,null,[null]),r.c=t.e;r.q();)r.d.H(0,s)},
ai:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.M(o)
p=H.ap(o)
this.eL(q,p)
if(this.db){this.aA()
if(this===u.globalState.e)throw o}}finally{this.cy=H.nm(r)
u.globalState.d=H.jQ(t,"$isb5")
if(t!=null)$=t.geP()
if(this.cx!=null)for(;n=this.cx,!n.gam(n);)this.cx.ct().$0()}return s},
cp:function(a){return this.b.h(0,a)},
bC:function(a,b){var t=this.b
if(t.D(0,a))throw H.e(P.cq("Registry: ports must be registered only once."))
t.i(0,a,b)},
aX:function(){var t=this.b
if(t.gk(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.aA()},
aA:function(){var t,s,r
t=this.cx
if(t!=null)t.W(0)
for(t=this.b,s=t.gcN(t),s=s.gA(s);s.q();)s.gt().dL()
t.W(0)
this.c.W(0)
u.globalState.z.an(0,this.a)
this.dx.W(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].H(0,t[r+1])
this.ch=null}},
geP:function(){return this.d},
geq:function(){return this.e}}
H.ig.prototype={
$0:function(){this.a.H(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.hU.prototype={
ez:function(){var t=this.a
if(t.b===t.c)return
return t.ct()},
cw:function(){var t,s,r
t=this.ez()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.D(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gam(s)}else s=!1
else s=!1
else s=!1
if(s)H.E(P.cq("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gam(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aF(["command","close"])
r=new H.ao(!0,new P.dL(0,null,null,null,null,null,0,[null,P.p])).J(r)
s.toString
self.postMessage(r)}return!1}t.eU()
return!0},
bT:function(){if(self.window!=null)new H.hV(this).$0()
else for(;this.cw(););},
ao:function(){var t,s,r,q,p
if(!u.globalState.x)this.bT()
else try{this.bT()}catch(r){t=H.M(r)
s=H.ap(r)
q=u.globalState.Q
p=P.aF(["command","error","msg",H.f(t)+"\n"+H.f(s)])
p=new H.ao(!0,P.c7(null,P.p)).J(p)
q.toString
self.postMessage(p)}}}
H.hV.prototype={
$0:function(){if(!this.a.cw())return
P.mX(C.v,this)},
$S:function(){return{func:1,v:true}}}
H.b6.prototype={
eU:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.ai(this.b)}}
H.ik.prototype={}
H.eS.prototype={
$0:function(){H.mC(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.eT.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(!this.d)this.a.$1(this.c)
else{s=this.a
if(H.bu(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.bu(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.aX()},
$S:function(){return{func:1,v:true}}}
H.hM.prototype={}
H.bq.prototype={
H:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.na(b)
if(t.geq()===s){s=J.a1(r)
switch(s.h(r,0)){case"pause":t.bY(s.h(r,1),s.h(r,2))
break
case"resume":t.eY(s.h(r,1))
break
case"add-ondone":t.ea(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.eX(s.h(r,1))
break
case"set-errors-fatal":t.d4(s.h(r,1),s.h(r,2))
break
case"ping":t.eK(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.eJ(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.an(0,s)
break}return}u.globalState.f.a.U(0,new H.b6(t,new H.im(this,r),"receive"))},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bq){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gv:function(a){return this.b.a}}
H.im.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dI(0,this.b)},
$S:function(){return{func:1}}}
H.c9.prototype={
H:function(a,b){var t,s,r
t=P.aF(["command","message","port",this,"msg",b])
s=new H.ao(!0,P.c7(null,P.p)).J(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.c9){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gv:function(a){return C.b.df((this.b<<16^this.a<<8)>>>0,this.c)}}
H.bj.prototype={
dL:function(){this.c=!0
this.b=null},
dI:function(a,b){if(this.c)return
this.b.$1(b)},
$ismS:1}
H.hl.prototype={
dz:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.U(0,new H.b6(s,new H.hm(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.aL(new H.hn(this,b),0),a)}else{H.d(a>0)
throw H.e(new P.v("Timer greater than 0."))}}}
H.hm.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.hn.prototype={
$0:function(){this.a.c=null
H.j9()
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.at.prototype={
gv:function(a){var t=this.a
t=C.b.aT(t,0)^C.b.I(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
w:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.at){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.ao.prototype={
J:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gk(t))
t=J.u(a)
if(!!t.$isbh)return["buffer",a]
if(!!t.$isaY)return["typed",a]
if(!!t.$isn)return this.d0(a)
if(!!t.$ismz){r=this.gcY()
q=t.gE(a)
q=H.jF(q,r,H.ag(q,"Z",0),null)
q=P.kx(q,!0,H.ag(q,"Z",0))
t=t.gcN(a)
t=H.jF(t,r,H.ag(t,"Z",0),null)
return["map",q,P.kx(t,!0,H.ag(t,"Z",0))]}if(!!t.$iskv)return this.d1(a)
if(!!t.$isa)this.cL(a)
if(!!t.$ismS)this.aq(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isbq)return this.d2(a)
if(!!t.$isc9)return this.d3(a)
if(!!t.$isbb){p=a.$static_name
if(p==null)this.aq(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isat)return["capability",a.a]
if(!(a instanceof P.o))this.cL(a)
return["dart",u.classIdExtractor(a),this.d_(u.classFieldsExtractor(a))]},
aq:function(a,b){throw H.e(new P.v((b==null?"Can't transmit:":b)+" "+H.f(a)))},
cL:function(a){return this.aq(a,null)},
d0:function(a){var t
H.d(typeof a!=="string")
t=this.cZ(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.aq(a,"Can't serialize indexable: ")},
cZ:function(a){var t,s
t=[]
C.a.sk(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.J(a[s])
return t},
d_:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.J(a[t]))
return a},
d1:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.aq(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sk(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.J(a[t[r]])
return["js-object",t,s]},
d3:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
d2:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.b4.prototype={
X:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.e(P.e0("Bad serialized message: "+H.f(a)))
switch(C.a.gb1(a)){case"ref":H.d(J.F(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.d(J.F(a[0],"buffer"))
t=a[1]
C.a.l(this.b,t)
return t
case"typed":H.d(J.F(a[0],"typed"))
t=a[1]
C.a.l(this.b,t)
return t
case"fixed":H.d(J.F(a[0],"fixed"))
t=a[1]
C.a.l(this.b,t)
s=H.D(this.ah(t),[null])
s.fixed$length=Array
return s
case"extendable":H.d(J.F(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.D(this.ah(t),[null])
case"mutable":H.d(J.F(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.ah(t)
case"const":H.d(J.F(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
s=H.D(this.ah(t),[null])
s.fixed$length=Array
return s
case"map":return this.eC(a)
case"sendport":return this.eD(a)
case"raw sendport":H.d(J.F(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.eB(a)
case"function":H.d(J.F(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.d(J.F(a[0],"capability"))
return new H.at(a[1])
case"dart":H.d(J.F(a[0],"dart"))
r=a[1]
q=a[2]
p=u.instanceFromClassId(r)
C.a.l(this.b,p)
this.ah(q)
return u.initializeEmptyInstance(r,p,q)
default:throw H.e("couldn't deserialize: "+H.f(a))}},
ah:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.X(a[t]))
return a},
eC:function(a){var t,s,r,q,p
H.d(J.F(a[0],"map"))
t=a[1]
s=a[2]
r=P.P()
C.a.l(this.b,r)
t=J.m0(t,this.geA()).f3(0)
for(q=J.a1(s),p=0;p<t.length;++p)r.i(0,t[p],this.X(q.h(s,p)))
return r},
eD:function(a){var t,s,r,q,p,o,n
H.d(J.F(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.cp(r)
if(o==null)return
n=new H.bq(o,s)}else n=new H.c9(t,r,s)
C.a.l(this.b,n)
return n},
eB:function(a){var t,s,r,q,p,o
H.d(J.F(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.a1(t),p=J.a1(s),o=0;o<q.gk(t);++o)r[q.h(t,o)]=this.X(p.h(s,o))
return r}}
H.fN.prototype={}
H.hs.prototype={
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
H.dt.prototype={
j:function(a){var t=this.b
if(t==null)return"NullError: "+H.f(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.eY.prototype={
j:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.f(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.f(this.a)+")"}}
H.hv.prototype={
j:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.jm.prototype={
$1:function(a){if(!!J.u(a).$isbd)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.dN.prototype={
j:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.j4.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.j5.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.j6.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.j7.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.j8.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.bb.prototype={
j:function(a){return"Closure '"+H.du(this).trim()+"'"},
$isjy:1,
gfa:function(){return this},
$D:null}
H.hf.prototype={}
H.h1.prototype={
j:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.by.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.by))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gv:function(a){var t,s
t=this.c
if(t==null)s=H.aZ(this.a)
else s=typeof t!=="object"?J.as(t):H.aZ(t)
return(s^H.aZ(this.b))>>>0},
j:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.f(this.d)+"' of "+H.fJ(t)}}
H.hu.prototype={
j:function(a){return this.a}}
H.e6.prototype={
j:function(a){return this.a}}
H.fT.prototype={
j:function(a){return"RuntimeError: "+H.f(this.a)}}
H.hG.prototype={
j:function(a){return C.i.a0("Assertion failed: ",P.jx(this.a))}}
H.aH.prototype={
j:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gv:function(a){return J.as(this.a)},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.aH){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.aj.prototype={
gk:function(a){return this.a},
gam:function(a){return this.a===0},
gE:function(a){return new H.f0(this,[H.aq(this,0)])},
gcN:function(a){return H.jF(this.gE(this),new H.eX(this),H.aq(this,0),H.aq(this,1))},
D:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bM(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bM(s,b)}else return this.eM(b)},
eM:function(a){var t=this.d
if(t==null)return!1
return this.al(this.ax(t,this.ak(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.ae(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.ae(r,b)
return s==null?null:s.b}else return this.eN(b)},
eN:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.ax(t,this.ak(a))
r=this.al(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aP()
this.b=t}this.bB(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aP()
this.c=s}this.bB(s,b,c)}else{r=this.d
if(r==null){r=this.aP()
this.d=r}q=this.ak(b)
p=this.ax(r,q)
if(p==null)this.aS(r,q,[this.aQ(b,c)])
else{o=this.al(p,b)
if(o>=0)p[o].b=c
else p.push(this.aQ(b,c))}}},
an:function(a,b){if(typeof b==="string")return this.bS(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bS(this.c,b)
else return this.eO(b)},
eO:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.ax(t,this.ak(a))
r=this.al(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bW(q)
return q.b},
W:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
aj:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.e(new P.a5(this))
t=t.c}},
bB:function(a,b,c){var t=this.ae(a,b)
if(t==null)this.aS(a,b,this.aQ(b,c))
else t.b=c},
bS:function(a,b){var t
if(a==null)return
t=this.ae(a,b)
if(t==null)return
this.bW(t)
this.bN(a,b)
return t.b},
aQ:function(a,b){var t,s
t=new H.f_(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bW:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.r=this.r+1&67108863},
ak:function(a){return J.as(a)&0x3ffffff},
al:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.F(a[s].a,b))return s
return-1},
j:function(a){return P.mJ(this)},
ae:function(a,b){return a[b]},
ax:function(a,b){return a[b]},
aS:function(a,b,c){H.d(c!=null)
a[b]=c},
bN:function(a,b){delete a[b]},
bM:function(a,b){return this.ae(a,b)!=null},
aP:function(){var t=Object.create(null)
this.aS(t,"<non-identifier-key>",t)
this.bN(t,"<non-identifier-key>")
return t},
$ismz:1,
$isN:1,
$asN:null}
H.eX.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.f_.prototype={}
H.f0.prototype={
gk:function(a){return this.a.a},
gA:function(a){var t,s
t=this.a
s=new H.f1(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.f1.prototype={
gt:function(){return this.d},
q:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a5(t))
else{t=this.c
if(t==null){this.sbA(null)
return!1}else{this.sbA(t.a)
this.c=this.c.c
return!0}}},
sbA:function(a){this.d=a}}
H.j0.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.j1.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.r]}}}
H.j2.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.r]}}}
H.bh.prototype={
gB:function(a){return C.ad},
$isbh:1}
H.aY.prototype={$isaY:1}
H.fh.prototype={
gB:function(a){return C.ae}}
H.dj.prototype={
gk:function(a){return a.length},
$isn:1,
$asn:function(){},
$isq:1,
$asq:function(){}}
H.dk.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.R(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.E(H.R(a,b))
a[b]=c}}
H.dl.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.E(H.R(a,b))
a[b]=c},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]}}
H.di.prototype={
gB:function(a){return C.af},
$isc:1,
$asc:function(){return[P.O]},
$isb:1,
$asb:function(){return[P.O]},
$iseG:1}
H.fi.prototype={
gB:function(a){return C.ag},
$isc:1,
$asc:function(){return[P.O]},
$isb:1,
$asb:function(){return[P.O]}}
H.fj.prototype={
gB:function(a){return C.ah},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.R(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]}}
H.fk.prototype={
gB:function(a){return C.ai},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.R(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]},
$isks:1}
H.fl.prototype={
gB:function(a){return C.aj},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.R(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]}}
H.fm.prototype={
gB:function(a){return C.an},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.R(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]},
$iskS:1}
H.fn.prototype={
gB:function(a){return C.ao},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.R(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]},
$iskT:1}
H.dm.prototype={
gB:function(a){return C.ap},
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.R(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]}}
H.fo.prototype={
gB:function(a){return C.aq},
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.R(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]},
$iskU:1}
H.bP.prototype={
$asn:function(){},
$isc:1,
$asc:function(){return[P.p]},
$asq:function(){},
$isb:1,
$asb:function(){return[P.p]}}
H.bQ.prototype={
$asn:function(){},
$isc:1,
$asc:function(){return[P.O]},
$asq:function(){},
$isb:1,
$asb:function(){return[P.O]}}
H.bR.prototype={
$asn:function(){},
$asc:function(){return[P.O]},
$asq:function(){},
$asb:function(){return[P.O]}}
H.bS.prototype={
$asn:function(){},
$asc:function(){return[P.p]},
$asq:function(){},
$asb:function(){return[P.p]}}
P.hI.prototype={
$1:function(a){var t,s
H.j9()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.hH.prototype={
$1:function(a){var t,s
t=this.a
H.d(t.a==null);++u.globalState.f.b
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.hJ.prototype={
$0:function(){H.j9()
this.a.$0()},
$S:function(){return{func:1}}}
P.hK.prototype={
$0:function(){H.j9()
this.a.$0()},
$S:function(){return{func:1}}}
P.eL.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.b)this.d.F(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.b)this.d.F(t.c,t.d)},
$S:function(){return{func:1,args:[,,]}}}
P.eK.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){r[this.e]=a
if(s===0)this.d.bL(r)}else if(t.b===0&&!this.b)this.d.F(t.c,t.d)},
$S:function(){return{func:1,args:[,]}}}
P.hO.prototype={
eo:function(a,b){if(a==null)a=new P.bi()
if(this.a.a!==0)throw H.e(new P.al("Future already completed"))
$.x.toString
this.F(a,b)},
en:function(a){return this.eo(a,null)}}
P.dJ.prototype={
ag:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.al("Future already completed"))
t.bD(b)},
F:function(a,b){this.a.bE(a,b)}}
P.iG.prototype={
ag:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.al("Future already completed"))
t.ac(b)},
F:function(a,b){this.a.F(a,b)}}
P.bo.prototype={
eT:function(a){if(this.c!==6)return!0
H.d(!0)
return this.b.b.b7(this.d,a.a)},
eI:function(a){var t,s
t=(this.c&2)!==0
if(t){H.d(t)
t=this.e!=null}else t=!1
H.d(t)
s=this.e
t=this.b.b
if(H.bu(s,{func:1,args:[P.o,P.bX]}))return t.f_(s,a.a,a.b)
else return t.b7(s,a.a)}}
P.H.prototype={
b9:function(a,b){var t,s,r
t=$.x
if(t!==C.d){t.toString
if(b!=null)b=P.l1(b,t)}s=new P.H(0,t,null,[null])
r=b==null?1:3
this.au(new P.bo(null,s,r,a,b,[H.aq(this,0),null]))
return s},
ap:function(a){return this.b9(a,null)},
f9:function(a){var t,s
t=$.x
s=new P.H(0,t,null,this.$ti)
if(t!==C.d)t.toString
t=H.aq(this,0)
this.au(new P.bo(null,s,8,a,null,[t,t]))
return s},
bG:function(a){H.d(this.a<4)
H.d(a.a>=4)
this.a=a.a
this.c=a.c},
au:function(a){var t
H.d(a.a==null)
t=this.a
if(t<=1){a.a=H.jQ(this.c,"$isbo")
this.c=a}else{if(t===2){H.d(!0)
t=this.c
if(t.a<4){t.au(a)
return}this.bG(t)}H.d(this.a>=4)
t=this.b
t.toString
P.bs(null,null,t,new P.i_(this,a))}},
bR:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.d(!0)
s=this.c
if(s.a<4){s.bR(a)
return}this.bG(s)}H.d(this.a>=4)
t.a=this.af(a)
s=this.b
s.toString
P.bs(null,null,s,new P.i7(t,this))}},
aR:function(){H.d(this.a<4)
var t=this.c
this.c=null
return this.af(t)},
af:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
ac:function(a){var t,s
H.d(this.a<4)
t=this.$ti
if(H.cd(a,"$isaS",t,"$asaS"))if(H.cd(a,"$isH",t,null))P.i2(a,this)
else P.kX(a,this)
else{s=this.aR()
H.d(this.a<4)
this.a=4
this.c=a
P.bp(this,s)}},
bL:function(a){var t
H.d(this.a<4)
H.d(!J.u(a).$isaS)
t=this.aR()
H.d(this.a<4)
this.a=4
this.c=a
P.bp(this,t)},
F:function(a,b){var t
H.d(this.a<4)
t=this.aR()
H.d(this.a<4)
this.a=8
this.c=new P.b9(a,b)
P.bp(this,t)},
dM:function(a){return this.F(a,null)},
bD:function(a){var t
H.d(this.a<4)
if(H.cd(a,"$isaS",this.$ti,"$asaS")){this.dK(a)
return}H.d(this.a===0)
this.a=1
t=this.b
t.toString
P.bs(null,null,t,new P.i1(this,a))},
dK:function(a){var t
if(H.cd(a,"$isH",this.$ti,null)){if(a.a===8){H.d(this.a===0)
this.a=1
t=this.b
t.toString
P.bs(null,null,t,new P.i6(this,a))}else P.i2(a,this)
return}P.kX(a,this)},
bE:function(a,b){var t
H.d(this.a<4)
H.d(this.a===0)
this.a=1
t=this.b
t.toString
P.bs(null,null,t,new P.i0(this,a,b))},
$isaS:1,
gaU:function(){return this.a},
ge3:function(){return this.c}}
P.i_.prototype={
$0:function(){P.bp(this.a,this.b)},
$S:function(){return{func:1}}}
P.i7.prototype={
$0:function(){P.bp(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.i3.prototype={
$1:function(a){var t=this.a
H.d(t.a===1)
H.d(t.a===1)
t.a=0
t.ac(a)},
$S:function(){return{func:1,args:[,]}}}
P.i4.prototype={
$2:function(a,b){var t=this.a
H.d(t.a===1)
t.F(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.i5.prototype={
$0:function(){this.a.F(this.b,this.c)},
$S:function(){return{func:1}}}
P.i1.prototype={
$0:function(){this.a.bL(this.b)},
$S:function(){return{func:1}}}
P.i6.prototype={
$0:function(){P.i2(this.b,this.a)},
$S:function(){return{func:1}}}
P.i0.prototype={
$0:function(){this.a.F(this.b,this.c)},
$S:function(){return{func:1}}}
P.ia.prototype={
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
r=H.ap(n)
if(this.c){q=this.a.a
H.d(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.d(q.a===8)
p.b=q.c}else p.b=new P.b9(s,r)
p.a=!0
return}if(!!J.u(t).$isaS){if(t instanceof P.H&&t.gaU()>=4){if(t.gaU()===8){q=t
H.d(q.gaU()===8)
p=this.b
p.b=q.ge3()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.ap(new P.ib(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.ib.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.i9.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.d((r.c&1)!==0)
this.a.b=r.b.b.b7(r.d,this.c)}catch(q){t=H.M(q)
s=H.ap(q)
r=this.a
r.b=new P.b9(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.i8.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.d(q.a===8)
t=q.c
q=this.c
if(q.eT(t)){H.d((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.eI(t)
p.a=!1}}catch(o){s=H.M(o)
r=H.ap(o)
q=this.a
p=q.a
H.d(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.d(q.a===8)
m.b=q.c}else m.b=new P.b9(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.dI.prototype={}
P.bY.prototype={
gk:function(a){var t,s
t={}
s=new P.H(0,$.x,null,[P.p])
t.a=0
this.co(new P.h8(t),!0,new P.h9(t,s),s.gbK())
return s},
gb1:function(a){var t,s
t={}
s=new P.H(0,$.x,null,[H.ag(this,"bY",0)])
t.a=null
t.a=this.co(new P.h6(t,this,s),!0,new P.h7(s),s.gbK())
return s}}
P.h8.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.h9.prototype={
$0:function(){this.b.ac(this.a.a)},
$S:function(){return{func:1}}}
P.h6.prototype={
$1:function(a){P.n9(this.a.a,this.c,a)},
$S:function(){return H.np(function(a){return{func:1,args:[a]}},this.b,"bY")}}
P.h7.prototype={
$0:function(){var t,s,r,q
try{r=H.db()
throw H.e(r)}catch(q){t=H.M(q)
s=H.ap(q)
P.nb(this.a,t,s)}},
$S:function(){return{func:1}}}
P.h5.prototype={}
P.iO.prototype={
$0:function(){return this.a.ac(this.b)},
$S:function(){return{func:1}}}
P.b9.prototype={
j:function(a){return H.f(this.a)},
$isbd:1}
P.iN.prototype={}
P.iR.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.bi()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.e(t)
r=H.e(t)
r.stack=s.j(0)
throw r},
$S:function(){return{func:1}}}
P.ip.prototype={
f0:function(a){var t,s,r
try{if(C.d===$.x){a.$0()
return}P.l2(null,null,this,a)}catch(r){t=H.M(r)
s=H.ap(r)
P.iQ(null,null,this,t,s)}},
f1:function(a,b){var t,s,r
try{if(C.d===$.x){a.$1(b)
return}P.l3(null,null,this,a,b)}catch(r){t=H.M(r)
s=H.ap(r)
P.iQ(null,null,this,t,s)}},
eh:function(a){return new P.ir(this,a)},
aY:function(a){return new P.iq(this,a)},
ei:function(a){return new P.is(this,a)},
h:function(a,b){return},
cv:function(a){if($.x===C.d)return a.$0()
return P.l2(null,null,this,a)},
b7:function(a,b){if($.x===C.d)return a.$1(b)
return P.l3(null,null,this,a,b)},
f_:function(a,b,c){if($.x===C.d)return a.$2(b,c)
return P.nf(null,null,this,a,b,c)}}
P.ir.prototype={
$0:function(){return this.a.cv(this.b)},
$S:function(){return{func:1}}}
P.iq.prototype={
$0:function(){return this.a.f0(this.b)},
$S:function(){return{func:1}}}
P.is.prototype={
$1:function(a){return this.a.f1(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.dL.prototype={
ak:function(a){return H.nI(a)&0x3ffffff},
al:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.ih.prototype={
gA:function(a){var t=new P.c6(this,this.r,null,null,[null])
t.c=this.e
return t},
gk:function(a){return this.a},
C:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dN(b)},
dN:function(a){var t=this.d
if(t==null)return!1
return this.aw(t[this.av(a)],a)>=0},
cp:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.C(0,a)?a:null
else return this.dW(a)},
dW:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.av(a)]
r=this.aw(s,a)
if(r<0)return
return J.b8(s,r).gdP()},
l:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.bH(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.bH(r,b)}else return this.U(0,b)},
U:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.n7()
this.d=t}s=this.av(b)
r=t[s]
if(r==null){q=[this.aL(b)]
H.d(q!=null)
t[s]=q}else{if(this.aw(r,b)>=0)return!1
r.push(this.aL(b))}return!0},
an:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bI(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bI(this.c,b)
else return this.dY(0,b)},
dY:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.av(b)]
r=this.aw(s,b)
if(r<0)return!1
this.bJ(s.splice(r,1)[0])
return!0},
W:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
bH:function(a,b){var t
if(a[b]!=null)return!1
t=this.aL(b)
H.d(!0)
a[b]=t
return!0},
bI:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bJ(t)
delete a[b]
return!0},
aL:function(a){var t,s
t=new P.ii(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bJ:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.r=this.r+1&67108863},
av:function(a){return J.as(a)&0x3ffffff},
aw:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.F(a[s].a,b))return s
return-1},
$isc:1,
$asc:null}
P.ii.prototype={
gdP:function(){return this.a}}
P.c6.prototype={
gt:function(){return this.d},
q:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a5(t))
else{t=this.c
if(t==null){this.sab(null)
return!1}else{this.sab(t.a)
this.c=this.c.b
return!0}}},
sab:function(a){this.d=a}}
P.ie.prototype={}
P.df.prototype={}
P.y.prototype={
gA:function(a){return new H.dg(a,this.gk(a),0,null,[H.ag(a,"y",0)])},
u:function(a,b){return this.h(a,b)},
cq:function(a,b){return new H.bM(a,b,[H.ag(a,"y",0),null])},
eH:function(a,b,c){var t,s,r
t=this.gk(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gk(a))throw H.e(new P.a5(a))}return s},
j:function(a){return P.eU(a,"[","]")},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
P.f8.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.f(a)
t.a=s+": "
t.a+=H.f(b)},
$S:function(){return{func:1,args:[,,]}}}
P.f2.prototype={
gA:function(a){return new P.ij(this,this.c,this.d,this.b,null,this.$ti)},
gam:function(a){return this.b===this.c},
gk:function(a){return(this.c-this.b&this.a.length-1)>>>0},
u:function(a,b){var t=(this.c-this.b&this.a.length-1)>>>0
if(C.b.ar(0,b)||b>=t)H.E(P.C(b,this,"index",null,t))
return this.a[(C.b.a0(this.b,b)&this.a.length-1)>>>0]},
W:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
j:function(a){return P.eU(this,"{","}")},
ct:function(){var t,s,r
t=this.b
if(t===this.c)throw H.e(H.db());++this.d
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
if(this.b===t)this.bP();++this.d},
bP:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.D(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.bk(s,0,q,t,r)
C.a.bk(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbU(s)},
dq:function(a,b){var t
H.d(!0)
t=new Array(8)
t.fixed$length=Array
this.sbU(H.D(t,[b]))},
sbU:function(a){this.a=a},
$asc:null}
P.ij.prototype={
gt:function(){return this.e},
q:function(){var t,s
t=this.a
if(this.c!==t.d)H.E(new P.a5(t))
s=this.d
if(s===this.b){this.sab(null)
return!1}this.sab(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sab:function(a){this.e=a}}
P.fW.prototype={
M:function(a,b){var t
for(t=J.bx(b);t.q();)this.l(0,t.gt())},
j:function(a){return P.eU(this,"{","}")},
$isc:1,
$asc:null}
P.fV.prototype={}
P.bU.prototype={$isc:1,$asc:null,$isb:1,$asb:null}
P.aA.prototype={}
P.I.prototype={}
P.aR.prototype={
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.aR))return!1
return this.a===b.a&&this.b===b.b},
R:function(a,b){return C.b.R(this.a,b.a)},
gv:function(a){var t=this.a
return(t^C.b.aT(t,30))&1073741823},
j:function(a){var t,s,r,q,p,o,n
t=P.mn(H.mR(this))
s=P.ck(H.mP(this))
r=P.ck(H.mL(this))
q=P.ck(H.mM(this))
p=P.ck(H.mO(this))
o=P.ck(H.mQ(this))
n=P.mo(H.mN(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isI:1,
$asI:function(){return[P.aR]}}
P.O.prototype={$isI:1,
$asI:function(){return[P.Y]}}
P.aC.prototype={
aF:function(a,b){return C.b.aF(this.a,b.gdO())},
ar:function(a,b){return C.b.ar(this.a,b.gdO())},
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.aC))return!1
return this.a===b.a},
gv:function(a){return this.a&0x1FFFFFFF},
R:function(a,b){return C.b.R(this.a,b.a)},
j:function(a){var t,s,r,q,p
t=new P.ej()
s=this.a
if(s<0)return"-"+new P.aC(0-s).j(0)
r=t.$1(C.b.I(s,6e7)%60)
q=t.$1(C.b.I(s,1e6)%60)
p=new P.ei().$1(s%1e6)
return""+C.b.I(s,36e8)+":"+H.f(r)+":"+H.f(q)+"."+H.f(p)},
$isI:1,
$asI:function(){return[P.aC]}}
P.ei.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.r,args:[P.p]}}}
P.ej.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.r,args:[P.p]}}}
P.bd.prototype={}
P.ci.prototype={
j:function(a){return"Assertion failed"}}
P.bi.prototype={
j:function(a){return"Throw of null."}}
P.ah.prototype={
gaN:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaM:function(){return""},
j:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.f(t)
q=this.gaN()+s+r
if(!this.a)return q
p=this.gaM()
o=P.jx(this.b)
return q+p+": "+H.f(o)}}
P.dw.prototype={
gaN:function(){return"RangeError"},
gaM:function(){var t,s,r
H.d(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.f(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.f(t)
else if(r>t)s=": Not in range "+H.f(t)+".."+H.f(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.f(t)}return s}}
P.eQ.prototype={
gaN:function(){return"RangeError"},
gaM:function(){H.d(this.a)
if(J.lu(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.f(t)},
gk:function(a){return this.f}}
P.v.prototype={
j:function(a){return"Unsupported operation: "+this.a}}
P.c2.prototype={
j:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.al.prototype={
j:function(a){return"Bad state: "+this.a}}
P.a5.prototype={
j:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.f(P.jx(t))+"."}}
P.dA.prototype={
j:function(a){return"Stack Overflow"},
$isbd:1}
P.ea.prototype={
j:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.hZ.prototype={
j:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.f(t)}}
P.el.prototype={
j:function(a){return"Expando:"+H.f(this.a)},
h:function(a,b){var t,s
t=this.b
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.E(P.k6(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.kz(b,"expando$values")
return s==null?null:H.kz(s,t)}}
P.p.prototype={$isI:1,
$asI:function(){return[P.Y]}}
P.Z.prototype={
aD:function(a,b){return new H.dH(this,b,[H.ag(this,"Z",0)])},
gk:function(a){var t,s
H.d(!this.$isc)
t=this.gA(this)
for(s=0;t.q();)++s
return s},
ga1:function(a){var t,s
t=this.gA(this)
if(!t.q())throw H.e(H.db())
s=t.gt()
if(t.q())throw H.e(H.mH())
return s},
u:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(P.mf("index"))
if(b<0)H.E(P.b_(b,0,null,"index",null))
for(t=this.gA(this),s=0;t.q();){r=t.gt()
if(b===s)return r;++s}throw H.e(P.C(b,this,"index",null,s))},
j:function(a){return P.mF(this,"(",")")}}
P.dc.prototype={}
P.b.prototype={$isc:1,$asc:null,$asb:null}
P.N.prototype={$asN:null}
P.aG.prototype={
gv:function(a){return P.o.prototype.gv.call(this,this)},
j:function(a){return"null"}}
P.Y.prototype={$isI:1,
$asI:function(){return[P.Y]}}
P.o.prototype={constructor:P.o,$iso:1,
w:function(a,b){return this===b},
gv:function(a){return H.aZ(this)},
j:function(a){return H.fJ(this)},
gB:function(a){return new H.aH(H.iZ(this),null)},
toString:function(){return this.j(this)}}
P.bX.prototype={}
P.r.prototype={$isI:1,
$asI:function(){return[P.r]}}
P.bZ.prototype={
gk:function(a){return this.a.length},
j:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga3:function(){return this.a}}
W.l.prototype={}
W.dZ.prototype={
j:function(a){return String(a)},
$isa:1}
W.e_.prototype={
j:function(a){return String(a)},
$isa:1}
W.a4.prototype={$iso:1}
W.e3.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a4]},
$isc:1,
$asc:function(){return[W.a4]},
$isq:1,
$asq:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.ba.prototype={$isba:1}
W.aP.prototype={$isa:1,$isaP:1}
W.cj.prototype={
cT:function(a,b,c){var t=this.dR(a,b,P.nq(c,null))
return t},
dR:function(a,b,c){return a.getContext(b,c)}}
W.e5.prototype={
aE:function(a){return P.iU(a.getContextAttributes())}}
W.aQ.prototype={$isa:1,
gk:function(a){return a.length}}
W.e8.prototype={$isa:1}
W.A.prototype={$iso:1}
W.bc.prototype={
bF:function(a,b){var t,s
t=$.$get$kf()
s=t[b]
if(typeof s==="string")return s
s=this.e6(a,b)
t[b]=s
return s},
e6:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.mp()+b
if(t in a)return t
return b},
gk:function(a){return a.length}}
W.e9.prototype={}
W.eb.prototype={
h:function(a,b){return a[b]},
gk:function(a){return a.length}}
W.ec.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.cl.prototype={}
W.bz.prototype={
eb:function(a,b){return a.adoptNode(b)},
cU:function(a,b){return a.getElementById(b)},
eV:function(a,b){return a.querySelector(b)}}
W.cm.prototype={$isa:1}
W.ed.prototype={
j:function(a){return String(a)}}
W.cn.prototype={
ew:function(a,b){return a.createHTMLDocument(b)}}
W.ee.prototype={
gaC:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.co.prototype={
gaC:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.cp.prototype={
j:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.ga_(a))+" x "+H.f(this.gZ(a))},
w:function(a,b){var t
if(b==null)return!1
t=J.u(b)
if(!t.$isK)return!1
return a.left===t.gb2(b)&&a.top===t.gba(b)&&this.ga_(a)===t.ga_(b)&&this.gZ(a)===t.gZ(b)},
gv:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.ga_(a)
q=this.gZ(a)
return W.l_(W.b7(W.b7(W.b7(W.b7(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gZ:function(a){return a.height},
gb2:function(a){return a.left},
gba:function(a){return a.top},
ga_:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isK:1,
$asK:function(){}}
W.ef.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[P.r]},
$isc:1,
$asc:function(){return[P.r]},
$isq:1,
$asq:function(){return[P.r]},
$isb:1,
$asb:function(){return[P.r]}}
W.eg.prototype={
gk:function(a){return a.length}}
W.a6.prototype={
gef:function(a){return new W.hS(a)},
j:function(a){return a.localName},
N:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.kn
if(t==null){t=H.D([],[W.dr])
s=new W.ds(t)
C.a.l(t,W.kY(null))
C.a.l(t,W.l0())
$.kn=s
d=s}else d=t
t=$.km
if(t==null){t=new W.dO(d)
$.km=t
c=t}else{t.a=d
c=t}}if($.aD==null){t=document
s=t.implementation
s=(s&&C.K).ew(s,"")
$.aD=s
$.jw=s.createRange()
s=$.aD
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.aD.head;(t&&C.L).P(t,r)}t=$.aD
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.jQ(s,"$isaP")}t=$.aD
if(!!this.$isaP)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.aD.body;(t&&C.n).P(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.C(C.V,a.tagName)){t=$.jw;(t&&C.C).cX(t,q)
t=$.jw
p=(t&&C.C).eu(t,b)}else{q.innerHTML=b
p=$.aD.createDocumentFragment()
for(t=J.k(p);s=q.firstChild,s!=null;)t.P(p,s)}t=$.aD.body
if(q==null?t!=null:q!==t)J.m2(q)
c.bi(p)
C.p.eb(document,p)
return p},
ev:function(a,b,c){return this.N(a,b,c,null)},
d6:function(a,b,c,d){a.textContent=null
this.P(a,this.N(a,b,c,d))},
d5:function(a,b){return this.d6(a,b,null,null)},
a7:function(a,b){return a.getAttribute(b)},
dZ:function(a,b){return a.removeAttribute(b)},
$isa:1,
$iso:1,
$isa6:1,
$ish:1,
$ist:1,
gf2:function(a){return a.tagName}}
W.iS.prototype={
$1:function(a){return!!J.u(a).$isa6},
$S:function(){return{func:1,args:[,]}}}
W.j.prototype={$iso:1,$isj:1}
W.h.prototype={
dJ:function(a,b,c,d){return a.addEventListener(b,H.aL(c,1),!1)},
e0:function(a,b,c,d){return a.removeEventListener(b,H.aL(c,1),!1)},
$iso:1,
$ish:1}
W.S.prototype={$iso:1,$isS:1}
W.bH.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.S]},
$isc:1,
$asc:function(){return[W.S]},
$isq:1,
$asq:function(){return[W.S]},
$isb:1,
$asb:function(){return[W.S]},
$isbH:1}
W.eE.prototype={
gk:function(a){return a.length}}
W.eI.prototype={
gk:function(a){return a.length}}
W.a7.prototype={$iso:1}
W.cv.prototype={}
W.eM.prototype={
gk:function(a){return a.length}}
W.bI.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]},
$isq:1,
$asq:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.cw.prototype={}
W.eN.prototype={
H:function(a,b){return a.send(b)}}
W.bJ.prototype={}
W.bK.prototype={$isbK:1}
W.eR.prototype={$isa:1,$isa6:1}
W.aW.prototype={$iso:1,$isj:1,$isaW:1}
W.f3.prototype={
j:function(a){return String(a)}}
W.bN.prototype={}
W.fc.prototype={
gk:function(a){return a.length}}
W.bg.prototype={$iso:1,$ish:1,$isbg:1}
W.fe.prototype={
fb:function(a,b,c){return a.send(b,c)},
H:function(a,b){return a.send(b)}}
W.bO.prototype={}
W.a8.prototype={$iso:1}
W.ff.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a8]},
$isc:1,
$asc:function(){return[W.a8]},
$isq:1,
$asq:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.Q.prototype={$iso:1,$isj:1,$isQ:1}
W.dn.prototype={
cW:function(a,b,c){var t,s,r,q
t=W.bg
s=new P.H(0,$.x,null,[t])
r=new P.dJ(s,[t])
q=P.aF(["audio",!1,"video",!0])
if(!a.getUserMedia)a.getUserMedia=a.getUserMedia||a.webkitGetUserMedia||a.mozGetUserMedia||a.msGetUserMedia
this.dS(a,new P.iC([],[]).bb(q),new W.fp(r),new W.fq(r))
return s},
cV:function(a,b){return this.cW(a,!1,b)},
dS:function(a,b,c,d){return a.getUserMedia(b,H.aL(c,1),H.aL(d,1))},
$isa:1}
W.fp.prototype={
$1:function(a){this.a.ag(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.fq.prototype={
$1:function(a){this.a.en(a)},
$S:function(){return{func:1,args:[,]}}}
W.V.prototype={
ga1:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.e(new P.al("No elements"))
if(s>1)throw H.e(new P.al("More than one element"))
return t.firstChild},
M:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.k(s),p=0;p<r;++p)q.P(s,t.firstChild)
return},
i:function(a,b,c){var t=this.a
J.lx(t,c,C.A.h(t.childNodes,b))},
gA:function(a){var t=this.a.childNodes
return new W.ct(t,t.length,-1,null,[H.ag(t,"B",0)])},
gk:function(a){return this.a.childNodes.length},
h:function(a,b){return C.A.h(this.a.childNodes,b)},
$asc:function(){return[W.t]},
$asdf:function(){return[W.t]},
$asb:function(){return[W.t]},
$asbU:function(){return[W.t]}}
W.t.prototype={
eW:function(a){var t=a.parentNode
if(t!=null)J.bv(t,a)},
j:function(a){var t=a.nodeValue
return t==null?this.da(a):t},
P:function(a,b){return a.appendChild(b)},
e_:function(a,b){return a.removeChild(b)},
e1:function(a,b,c){return a.replaceChild(b,c)},
$iso:1,
$ish:1,
$ist:1,
gb5:function(a){return a.previousSibling}}
W.dq.prototype={
b6:function(a){return a.previousNode()}}
W.bT.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]},
$isq:1,
$asq:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.fz.prototype={$isa:1}
W.fC.prototype={
gk:function(a){return a.length}}
W.a9.prototype={$iso:1,
gk:function(a){return a.length}}
W.fE.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a9]},
$isc:1,
$asc:function(){return[W.a9]},
$isq:1,
$asq:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.fH.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.fI.prototype={
H:function(a,b){return a.send(b)}}
W.dv.prototype={
eu:function(a,b){return a.createContextualFragment(b)},
cX:function(a,b){return a.selectNodeContents(b)}}
W.fS.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.dy.prototype={
H:function(a,b){return a.send(b)}}
W.fU.prototype={
gk:function(a){return a.length}}
W.fX.prototype={$isa:1}
W.aa.prototype={$iso:1,$ish:1}
W.fY.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.aa]},
$isc:1,
$asc:function(){return[W.aa]},
$isq:1,
$asq:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.ab.prototype={$iso:1}
W.h_.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.ab]},
$isc:1,
$asc:function(){return[W.ab]},
$isq:1,
$asq:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.ac.prototype={$iso:1,
gk:function(a){return a.length}}
W.h4.prototype={
h:function(a,b){return this.bO(a,b)},
aj:function(a,b){var t,s
for(t=0;!0;++t){s=this.dV(a,t)
if(s==null)return
b.$2(s,this.bO(a,s))}},
gk:function(a){return a.length},
bO:function(a,b){return a.getItem(b)},
dV:function(a,b){return a.key(b)},
$isN:1,
$asN:function(){return[P.r,P.r]}}
W.a_.prototype={$iso:1}
W.am.prototype={}
W.dB.prototype={
N:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aH(a,b,c,d)
t=W.mr("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.V(s).M(0,new W.V(t))
return s}}
W.hd.prototype={
N:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aH(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.H.N(t.createElement("table"),b,c,d)
t.toString
t=new W.V(t)
r=t.ga1(t)
r.toString
t=new W.V(r)
q=t.ga1(t)
s.toString
q.toString
new W.V(s).M(0,new W.V(q))
return s}}
W.he.prototype={
N:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aH(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.H.N(t.createElement("table"),b,c,d)
t.toString
t=new W.V(t)
r=t.ga1(t)
s.toString
r.toString
new W.V(s).M(0,new W.V(r))
return s}}
W.c_.prototype={$isc_:1}
W.ad.prototype={$iso:1,$ish:1}
W.a0.prototype={$iso:1,$ish:1}
W.hh.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a0]},
$isc:1,
$asc:function(){return[W.a0]},
$isq:1,
$asq:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.hi.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.ad]},
$isc:1,
$asc:function(){return[W.ad]},
$isq:1,
$asq:function(){return[W.ad]},
$isb:1,
$asb:function(){return[W.ad]}}
W.hk.prototype={
gk:function(a){return a.length}}
W.ae.prototype={$iso:1}
W.b0.prototype={$iso:1,$isj:1,$isb0:1}
W.ho.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.ae]},
$isc:1,
$asc:function(){return[W.ae]},
$isq:1,
$asq:function(){return[W.ae]},
$isb:1,
$asb:function(){return[W.ae]}}
W.hp.prototype={
gk:function(a){return a.length}}
W.bl.prototype={}
W.hr.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.dF.prototype={
b6:function(a){return a.previousNode()}}
W.aI.prototype={}
W.hw.prototype={
j:function(a){return String(a)},
$isa:1}
W.bn.prototype={$isbn:1}
W.hy.prototype={
gk:function(a){return a.length}}
W.hB.prototype={
gk:function(a){return a.length}}
W.hC.prototype={
H:function(a,b){return a.send(b)}}
W.b2.prototype={
gey:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(new P.v("deltaY is not supported"))},
$iso:1,
$isj:1,
$isQ:1,
$isb2:1}
W.c3.prototype={
gee:function(a){var t,s
t=P.Y
s=new P.H(0,$.x,null,[t])
this.dQ(a)
this.e2(a,W.l5(new W.hE(new P.iG(s,[t]))))
return s},
e2:function(a,b){return a.requestAnimationFrame(H.aL(b,1))},
dQ:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
ec:function(a,b){return a.alert(b)},
$isa:1}
W.hE.prototype={
$1:function(a){this.a.ag(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.hF.prototype={$isa:1}
W.b3.prototype={$isa:1}
W.hN.prototype={
j:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
w:function(a,b){var t,s,r
if(b==null)return!1
t=J.u(b)
if(!t.$isK)return!1
s=a.left
r=t.gb2(b)
if(s==null?r==null:s===r){s=a.top
r=t.gba(b)
if(s==null?r==null:s===r){s=a.width
r=t.ga_(b)
if(s==null?r==null:s===r){s=a.height
t=t.gZ(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gv:function(a){var t,s,r,q
t=J.as(a.left)
s=J.as(a.top)
r=J.as(a.width)
q=J.as(a.height)
return W.l_(W.b7(W.b7(W.b7(W.b7(0,t),s),r),q))},
$isK:1,
$asK:function(){},
gZ:function(a){return a.height},
gb2:function(a){return a.left},
gba:function(a){return a.top},
ga_:function(a){return a.width}}
W.dK.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[P.K]},
$isc:1,
$asc:function(){return[P.K]},
$isq:1,
$asq:function(){return[P.K]},
$isb:1,
$asb:function(){return[P.K]}}
W.hP.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.A]},
$isc:1,
$asc:function(){return[W.A]},
$isq:1,
$asq:function(){return[W.A]},
$isb:1,
$asb:function(){return[W.A]}}
W.hQ.prototype={$isa:1}
W.hR.prototype={
gZ:function(a){return a.height},
ga_:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.ic.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a7]},
$isc:1,
$asc:function(){return[W.a7]},
$isq:1,
$asq:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.id.prototype={$isa:1}
W.dM.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]},
$isq:1,
$asq:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.ix.prototype={$isa:1}
W.iA.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.ac]},
$isc:1,
$asc:function(){return[W.ac]},
$isq:1,
$asq:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
W.iE.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a_]},
$isc:1,
$asc:function(){return[W.a_]},
$isq:1,
$asq:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.iL.prototype={$isa:1}
W.iM.prototype={$isa:1}
W.hL.prototype={
aj:function(a,b){var t,s,r,q,p,o
for(t=this.gE(this),s=t.length,r=this.a,q=J.k(r),p=0;p<t.length;t.length===s||(0,H.J)(t),++p){o=t[p]
b.$2(o,q.a7(r,o))}},
gE:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.D([],[P.r])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.l(s,p.name)}return s},
$isN:1,
$asN:function(){return[P.r,P.r]},
gdT:function(){return this.a}}
W.hS.prototype={
h:function(a,b){return J.jt(this.a,b)},
gk:function(a){return this.gE(this).length}}
W.hW.prototype={
co:function(a,b,c,d){return W.an(this.a,this.b,a,!1,H.aq(this,0))}}
W.hT.prototype={}
W.hX.prototype={
ek:function(a){if(this.b==null)return
this.e9()
this.b=null
this.sdX(null)
return},
e8:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.lv(r,this.c,t,!1)}},
e9:function(){var t,s,r
t=this.d
s=t!=null
if(s){r=this.b
r.toString
if(s)J.lw(r,this.c,t,!1)}},
dE:function(a,b,c,d,e){this.e8()},
sdX:function(a){this.d=a}}
W.hY.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.c5.prototype={
a4:function(a){return $.$get$kZ().C(0,W.bA(a))},
V:function(a,b,c){var t,s,r
t=W.bA(a)
s=$.$get$jJ()
r=s.h(0,H.f(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
dF:function(a){var t,s
t=$.$get$jJ()
if(t.gam(t)){for(s=0;s<262;++s)t.i(0,C.U[s],W.nx())
for(s=0;s<12;++s)t.i(0,C.r[s],W.ny())}}}
W.B.prototype={
gA:function(a){return new W.ct(a,this.gk(a),-1,null,[H.ag(a,"B",0)])},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
W.ds.prototype={
a4:function(a){return C.a.bZ(this.a,new W.fs(a))},
V:function(a,b,c){return C.a.bZ(this.a,new W.fr(a,b,c))}}
W.fs.prototype={
$1:function(a){return a.a4(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.fr.prototype={
$1:function(a){return a.V(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.c8.prototype={
a4:function(a){return this.a.C(0,W.bA(a))},
V:function(a,b,c){var t,s
t=W.bA(a)
s=this.c
if(s.C(0,H.f(t)+"::"+b))return this.d.ed(c)
else if(s.C(0,"*::"+b))return this.d.ed(c)
else{s=this.b
if(s.C(0,H.f(t)+"::"+b))return!0
else if(s.C(0,"*::"+b))return!0
else if(s.C(0,H.f(t)+"::*"))return!0
else if(s.C(0,"*::*"))return!0}return!1},
dH:function(a,b,c,d){var t,s,r
this.a.M(0,c)
t=b.aD(0,new W.iy())
s=b.aD(0,new W.iz())
this.b.M(0,t)
r=this.c
r.M(0,C.z)
r.M(0,s)}}
W.iy.prototype={
$1:function(a){return!C.a.C(C.r,a)},
$S:function(){return{func:1,args:[,]}}}
W.iz.prototype={
$1:function(a){return C.a.C(C.r,a)},
$S:function(){return{func:1,args:[,]}}}
W.iH.prototype={
V:function(a,b,c){if(this.de(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.jt(a,"template")==="")return this.e.C(0,b)
return!1}}
W.iI.prototype={
$1:function(a){return"TEMPLATE::"+H.f(a)},
$S:function(){return{func:1,args:[,]}}}
W.iF.prototype={
a4:function(a){var t=J.u(a)
if(!!t.$isbW)return!1
t=!!t.$isG
if(t&&W.bA(a)==="foreignObject")return!1
if(t)return!0
return!1},
V:function(a,b,c){if(b==="is"||C.i.bm(b,"on"))return!1
return this.a4(a)}}
W.ct.prototype={
q:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbQ(J.b8(this.a,t))
this.c=t
return!0}this.sbQ(null)
this.c=s
return!1},
gt:function(){return this.d},
sbQ:function(a){this.d=a}}
W.dr.prototype={}
W.iw.prototype={}
W.dO.prototype={
bi:function(a){new W.iJ(this).$2(a,null)},
ay:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)J.bv(t,a)}else J.bv(b,a)},
e5:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.lR(a)
r=J.jt(s.gdT(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.M(n)}p="element unprintable"
try{p=J.aB(a)}catch(n){H.M(n)}try{o=W.bA(a)
this.e4(a,b,t,p,o,s,r)}catch(n){if(H.M(n) instanceof P.ah)throw n
else{this.ay(a,b)
window
m="Removing corrupted element "+H.f(p)
if(typeof console!="undefined")console.warn(m)}}},
e4:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.ay(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.a4(a)){this.ay(a,b)
window
t="Removing disallowed element <"+H.f(e)+"> from "+J.aB(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.V(a,"is",g)){this.ay(a,b)
window
t="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gE(f)
s=H.D(t.slice(0),[H.aq(t,0)])
for(r=f.gE(f).length-1,t=f.a,q=J.k(t);r>=0;--r){p=s[r]
if(!this.a.V(a,J.m7(p),q.a7(t,p))){window
o="Removing disallowed attribute <"+H.f(e)+" "+p+'="'+H.f(q.a7(t,p))+'">'
if(typeof console!="undefined")console.warn(o)
q.a7(t,p)
q.dZ(t,p)}}if(!!J.u(a).$isc_)this.bi(a.content)}}
W.iJ.prototype={
$2:function(a,b){var t,s,r,q
switch(a.nodeType){case 1:this.a.e5(a,b)
break
case 8:case 11:case 3:case 4:break
default:if(b==null){r=a.parentNode
if(r!=null)J.bv(r,a)}else J.bv(b,a)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.lS(t)}catch(q){H.M(q)
r=t
J.bv(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.t,W.t]}}}
W.bB.prototype={$isc:1,
$asc:function(){return[W.ad]},
$isb:1,
$asb:function(){return[W.ad]}}
W.bC.prototype={$isc:1,
$asc:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.bD.prototype={$isc:1,
$asc:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.bE.prototype={$isc:1,
$asc:function(){return[W.ad]},
$isb:1,
$asb:function(){return[W.ad]}}
W.bF.prototype={$isc:1,
$asc:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.bG.prototype={$isc:1,
$asc:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.cx.prototype={}
W.cR.prototype={$isc:1,
$asc:function(){return[W.A]},
$isb:1,
$asb:function(){return[W.A]}}
W.cD.prototype={$isc:1,
$asc:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.cK.prototype={$isc:1,
$asc:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.cL.prototype={$isc:1,
$asc:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.cM.prototype={$isc:1,
$asc:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.cN.prototype={$isc:1,
$asc:function(){return[W.ae]},
$isb:1,
$asb:function(){return[W.ae]}}
W.cO.prototype={$isc:1,
$asc:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.cP.prototype={$isc:1,
$asc:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
W.cQ.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.cB.prototype={$isc:1,
$asc:function(){return[P.K]},
$isb:1,
$asb:function(){return[P.K]}}
W.cC.prototype={$isc:1,
$asc:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.cE.prototype={$isc:1,
$asc:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.cG.prototype={$isc:1,
$asc:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.cH.prototype={$isc:1,
$asc:function(){return[W.S]},
$isb:1,
$asb:function(){return[W.S]}}
W.cI.prototype={$isc:1,
$asc:function(){return[P.r]},
$isb:1,
$asb:function(){return[P.r]}}
W.cS.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.cT.prototype={$isc:1,
$asc:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.d3.prototype={$isc:1,
$asc:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.d4.prototype={$isc:1,
$asc:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.d2.prototype={$isc:1,
$asc:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.d7.prototype={$isc:1,
$asc:function(){return[P.K]},
$isb:1,
$asb:function(){return[P.K]}}
W.d8.prototype={$isc:1,
$asc:function(){return[W.S]},
$isb:1,
$asb:function(){return[W.S]}}
W.d9.prototype={$isc:1,
$asc:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.da.prototype={$isc:1,
$asc:function(){return[P.r]},
$isb:1,
$asb:function(){return[P.r]}}
W.cV.prototype={$isc:1,
$asc:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.cX.prototype={$isc:1,
$asc:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.cZ.prototype={$isc:1,
$asc:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
W.d0.prototype={$isc:1,
$asc:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.d5.prototype={$isc:1,
$asc:function(){return[W.A]},
$isb:1,
$asb:function(){return[W.A]}}
W.d6.prototype={$isc:1,
$asc:function(){return[W.ae]},
$isb:1,
$asb:function(){return[W.ae]}}
P.iB.prototype={
cm:function(a){var t,s,r
t=this.a
s=t.length
for(r=0;r<s;++r)if(t[r]===a)return r
C.a.l(t,a)
C.a.l(this.b,null)
return s},
bb:function(a){var t,s,r,q,p
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
s=J.u(a)
if(!!s.$isaR)return new Date(a.a)
if(!!s.$isS)return a
if(!!s.$isba)return a
if(!!s.$isbH)return a
if(!!s.$isbK)return a
if(!!s.$isbh||!!s.$isaY)return a
if(!!s.$isN){r=this.cm(a)
q=this.b
p=q[r]
t.a=p
if(p!=null)return p
p={}
t.a=p
q[r]=p
s.aj(a,new P.iD(t,this))
return t.a}if(!!s.$isb){r=this.cm(a)
p=this.b[r]
if(p!=null)return p
return this.es(a,r)}throw H.e(new P.c2("structured clone of other type"))},
es:function(a,b){var t,s,r,q
t=J.a1(a)
s=t.gk(a)
r=new Array(s)
this.b[b]=r
for(q=0;q<s;++q)r[q]=this.bb(t.h(a,q))
return r}}
P.iD.prototype={
$2:function(a,b){this.a.a[a]=this.b.bb(b)},
$S:function(){return{func:1,args:[,,]}}}
P.iT.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.r,,]}}}
P.iC.prototype={}
P.io.prototype={}
P.K.prototype={$asK:null}
P.dY.prototype={$isa:1}
P.aO.prototype={$isa:1}
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
P.ev.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ew.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ex.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ey.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ez.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
P.eA.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eB.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
P.eC.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eD.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eF.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eH.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ai.prototype={}
P.aE.prototype={$isa:1}
P.eO.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.au.prototype={$iso:1}
P.eZ.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.Y(a,b)},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
Y:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.au]},
$isb:1,
$asb:function(){return[P.au]}}
P.f9.prototype={$isa:1}
P.fa.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.av.prototype={$iso:1}
P.ft.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.Y(a,b)},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
Y:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.av]},
$isb:1,
$asb:function(){return[P.av]}}
P.fA.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fF.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fG.prototype={
gk:function(a){return a.length}}
P.fL.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fM.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bW.prototype={$isa:1,$isbW:1}
P.ha.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.Y(a,b)},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
Y:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.r]},
$isb:1,
$asb:function(){return[P.r]}}
P.G.prototype={
N:function(a,b,c,d){var t,s,r,q,p,o
t=H.D([],[W.dr])
C.a.l(t,W.kY(null))
C.a.l(t,W.l0())
C.a.l(t,new W.iF())
c=new W.dO(new W.ds(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.n).ev(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.V(q)
o=t.ga1(t)
for(t=J.k(p);r=o.firstChild,r!=null;)t.P(p,r)
return p},
$isa:1,
$isG:1}
P.hb.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.hc.prototype={$isa:1}
P.dC.prototype={}
P.hg.prototype={$isa:1}
P.c0.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.aw.prototype={$iso:1}
P.hq.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.Y(a,b)},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
Y:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.aw]},
$isb:1,
$asb:function(){return[P.aw]}}
P.hx.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.hz.prototype={$isa:1}
P.hA.prototype={$isa:1}
P.c4.prototype={$isa:1}
P.it.prototype={$isa:1}
P.iu.prototype={$isa:1}
P.iv.prototype={$isa:1}
P.cA.prototype={$isc:1,
$asc:function(){return[P.au]},
$isb:1,
$asb:function(){return[P.au]}}
P.cy.prototype={$isc:1,
$asc:function(){return[P.r]},
$isb:1,
$asb:function(){return[P.r]}}
P.cF.prototype={$isc:1,
$asc:function(){return[P.av]},
$isb:1,
$asb:function(){return[P.av]}}
P.cJ.prototype={$isc:1,
$asc:function(){return[P.aw]},
$isb:1,
$asb:function(){return[P.aw]}}
P.cU.prototype={$isc:1,
$asc:function(){return[P.au]},
$isb:1,
$asb:function(){return[P.au]}}
P.d1.prototype={$isc:1,
$asc:function(){return[P.av]},
$isb:1,
$asb:function(){return[P.av]}}
P.cY.prototype={$isc:1,
$asc:function(){return[P.aw]},
$isb:1,
$asb:function(){return[P.aw]}}
P.d_.prototype={$isc:1,
$asc:function(){return[P.r]},
$isb:1,
$asb:function(){return[P.r]}}
P.e2.prototype={
gk:function(a){return a.length}}
P.fQ.prototype={
bX:function(a,b){return a.activeTexture(b)},
c_:function(a,b,c){return a.attachShader(b,c)},
c0:function(a,b,c){return a.bindBuffer(b,c)},
c1:function(a,b,c){return a.bindFramebuffer(b,c)},
c2:function(a,b,c){return a.bindTexture(b,c)},
c3:function(a,b){return a.blendEquation(b)},
c4:function(a,b,c){return a.blendFunc(b,c)},
c5:function(a,b,c,d){return a.bufferData(b,c,d)},
c6:function(a,b){return a.clear(b)},
c7:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c8:function(a,b){return a.compileShader(b)},
c9:function(a){return a.createBuffer()},
ca:function(a){return a.createProgram()},
cb:function(a,b){return a.createShader(b)},
cc:function(a){return a.createTexture()},
ce:function(a,b){return a.depthMask(b)},
cf:function(a,b){return a.disable(b)},
cg:function(a,b,c,d){return a.drawArrays(b,c,d)},
ci:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cj:function(a,b){return a.enable(b)},
ck:function(a,b){return a.enableVertexAttribArray(b)},
aE:function(a){return P.iU(a.getContextAttributes())},
bc:function(a){return a.getError()},
bd:function(a,b){return a.getProgramInfoLog(b)},
be:function(a,b,c){return a.getProgramParameter(b,c)},
bf:function(a,b){return a.getShaderInfoLog(b)},
bg:function(a,b,c){return a.getShaderParameter(b,c)},
bh:function(a,b,c){return a.getUniformLocation(b,c)},
cn:function(a,b){return a.linkProgram(b)},
cs:function(a,b,c){return a.pixelStorei(b,c)},
bl:function(a,b,c){return a.shaderSource(b,c)},
bn:function(a,b,c,d){return a.stencilFunc(b,c,d)},
b8:function(a,b,c,d,e,f,g,h,i,j){var t
if(g==null)t=!0
else t=!1
if(t){this.aV(a,b,c,d,e,f,P.lb(g))
return}if(!!J.u(g).$isbn)t=!0
else t=!1
if(t){this.aW(a,b,c,d,e,f,g)
return}throw H.e(P.e0("Incorrect number or type of arguments"))},
cz:function(a,b,c,d,e,f,g){return this.b8(a,b,c,d,e,f,g,null,null,null)},
aV:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aW:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
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
P.fR.prototype={
eg:function(a,b){return a.beginTransformFeedback(b)},
ej:function(a,b){return a.bindVertexArray(b)},
ex:function(a){return a.createVertexArray()},
eE:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
eF:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
eG:function(a){return a.endTransformFeedback()},
f7:function(a,b,c,d){this.e7(a,b,c,d)
return},
e7:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
f8:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bX:function(a,b){return a.activeTexture(b)},
c_:function(a,b,c){return a.attachShader(b,c)},
c0:function(a,b,c){return a.bindBuffer(b,c)},
c1:function(a,b,c){return a.bindFramebuffer(b,c)},
c2:function(a,b,c){return a.bindTexture(b,c)},
c3:function(a,b){return a.blendEquation(b)},
c4:function(a,b,c){return a.blendFunc(b,c)},
c5:function(a,b,c,d){return a.bufferData(b,c,d)},
c6:function(a,b){return a.clear(b)},
c7:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c8:function(a,b){return a.compileShader(b)},
c9:function(a){return a.createBuffer()},
ca:function(a){return a.createProgram()},
cb:function(a,b){return a.createShader(b)},
cc:function(a){return a.createTexture()},
ce:function(a,b){return a.depthMask(b)},
cf:function(a,b){return a.disable(b)},
cg:function(a,b,c,d){return a.drawArrays(b,c,d)},
ci:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cj:function(a,b){return a.enable(b)},
ck:function(a,b){return a.enableVertexAttribArray(b)},
aE:function(a){return P.iU(a.getContextAttributes())},
bc:function(a){return a.getError()},
bd:function(a,b){return a.getProgramInfoLog(b)},
be:function(a,b,c){return a.getProgramParameter(b,c)},
bf:function(a,b){return a.getShaderInfoLog(b)},
bg:function(a,b,c){return a.getShaderParameter(b,c)},
bh:function(a,b,c){return a.getUniformLocation(b,c)},
cn:function(a,b){return a.linkProgram(b)},
cs:function(a,b,c){return a.pixelStorei(b,c)},
bl:function(a,b,c){return a.shaderSource(b,c)},
bn:function(a,b,c,d){return a.stencilFunc(b,c,d)},
b8:function(a,b,c,d,e,f,g,h,i,j){var t
if(g==null)t=!0
else t=!1
if(t){this.aV(a,b,c,d,e,f,P.lb(g))
return}if(!!J.u(g).$isbn)t=!0
else t=!1
if(t){this.aW(a,b,c,d,e,f,g)
return}throw H.e(P.e0("Incorrect number or type of arguments"))},
cz:function(a,b,c,d,e,f,g){return this.b8(a,b,c,d,e,f,g,null,null,null)},
aV:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aW:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
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
P.iK.prototype={$isa:1}
P.h0.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return P.iU(this.dU(a,b))},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
dU:function(a,b){return a.item(b)},
$isc:1,
$asc:function(){return[P.N]},
$isb:1,
$asb:function(){return[P.N]}}
P.cz.prototype={$isc:1,
$asc:function(){return[P.N]},
$isb:1,
$asb:function(){return[P.N]}}
P.cW.prototype={$isc:1,
$asc:function(){return[P.N]},
$isb:1,
$asb:function(){return[P.N]}}
B.jf.prototype={
$1:function(a){$.$get$iV().i(0,a.which,!0)},
$S:function(){return{func:1,args:[W.aW]}}}
B.jg.prototype={
$1:function(a){$.$get$iV().i(0,a.which,null)},
$S:function(){return{func:1,args:[W.aW]}}}
B.jh.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.nn=t
$.no=C.b.a9(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.jT=s-C.b.I(window.innerWidth,2)
$.ln=-(t-C.b.I(window.innerHeight,2))},
$S:function(){return{func:1,args:[W.Q]}}}
B.ji.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.cg=t-C.b.I(window.innerWidth,2)
$.ch=-(s-C.b.I(window.innerHeight,2))
if(a.button===2)$.$get$ce().i(0,"right",!0)
else $.$get$ce().i(0,"left",!0)},
$S:function(){return{func:1,args:[W.Q]}}}
B.jj.prototype={
$1:function(a){if(a.button===2)$.$get$ce().i(0,"right",null)
else $.$get$ce().i(0,"left",null)},
$S:function(){return{func:1,args:[W.Q]}}}
B.fu.prototype={
ds:function(a,b,c,d){var t
d.toString
W.an(d,W.nw().$1(d),new B.fv(this),!1,W.b2)
W.an(d,"mousemove",new B.fw(this),!1,W.Q)
t=W.b0
W.an(d,"touchstart",new B.fx(),!1,t)
W.an(d,"touchmove",new B.fy(this),!1,t)
B.nM(null)}}
B.fv.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.av.gey(a)*r.k3
if(C.c.a9(r.fy,t)>0)r.fy=H.af(C.c.a9(r.fy,t))}catch(q){s=H.M(q)
P.a3(s)}},
$S:function(){return{func:1,args:[W.b2]}}}
B.fw.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=H.af(t.go+C.b.a9($.jT,$.cg)*0.01)
s=t.id
r=$.ch
q=$.ln
t.id=H.af(s+(r-q)*0.01)
$.cg=$.jT
$.ch=q}},
$S:function(){return{func:1,args:[W.Q]}}}
B.fx.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.a6(t.clientX)
C.c.a6(t.clientY)
$.cg=s
C.c.a6(t.clientX)
$.ch=C.c.a6(t.clientY)},
$S:function(){return{func:1,args:[W.b0]}}}
B.fy.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.a6(t.clientX)
t=C.c.a6(t.clientY)
r=this.a
r.go=H.af(r.go+C.b.a9(s,$.cg)*0.01)
r.id=H.af(r.id+($.ch-t)*0.01)
$.cg=s
$.ch=t},
$S:function(){return{func:1,args:[W.b0]}}}
G.fg.prototype={}
G.dG.prototype={
a2:function(a,b){var t=this.d
if(H.az(!t.D(0,a)))H.aK("uniform "+a+" already set")
t.i(0,a,b)},
bw:function(){return this.d},
j:function(a){var t,s,r,q
t=H.D(["{"+new H.aH(H.iZ(this),null).j(0)+"}["+this.a+"]"],[P.r])
for(s=this.d,r=s.gE(s),r=r.gA(r);r.q();){q=r.gt()
C.a.l(t,H.f(q)+": "+H.f(s.h(0,q)))}return C.a.a5(t,"\n")}}
G.e4.prototype={}
G.e7.prototype={
cl:function(a,b,c){J.lO(this.a,b)
if(c>0)J.md(this.a,b,c)}}
G.eJ.prototype={}
G.cr.prototype={}
G.cu.prototype={
as:function(a){var t=this.e
H.d(!t.D(0,a))
H.d(C.i.bm(a,"a"))
switch($.$get$W().h(0,a).a){case"vec2":t.i(0,a,H.D([],[T.w]))
break
case"vec3":t.i(0,a,H.D([],[T.m]))
break
case"vec4":t.i(0,a,H.D([],[T.aJ]))
break
case"float":t.i(0,a,H.D([],[P.O]))
break
case"uvec4":t.i(0,a,H.D([],[[P.b,P.p]]))
break
default:if(H.az(!1))H.aK("unknown type for "+a)}},
dg:function(a){var t,s,r
H.d(!0)
t=this.d.length
for(s=this.c,r=0;r<a;++r,t+=4)C.a.l(s,new G.cr(t,t+1,t+2,t+3))},
dh:function(a){var t,s,r,q
for(t=this.d,s=0;s<24;++s){r=a[s]
q=new T.m(new Float32Array(3))
q.L(r)
C.a.l(t,q)}},
bq:function(a,b){var t,s,r,q,p,o,n
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.J)(b),++q){p=b[q]
o=new Float32Array(2)
n=p.a
o[1]=n[1]
o[0]=n[0]
r.l(t,new T.w(o))}},
br:function(a,b){var t,s,r,q,p
t=this.e.h(0,a)
for(s=t&&C.a,r=0;r<4;++r){q=b[r]
p=new T.m(new Float32Array(3))
p.L(q)
s.l(t,p)}},
di:function(a){var t,s,r,q,p
H.d(!0)
t=this.d
s=t.length
C.a.l(this.c,new G.cr(s,s+1,s+2,s+3))
for(r=0;r<4;++r){q=a[r]
p=new T.m(new Float32Array(3))
p.L(q)
C.a.l(t,p)}},
dm:function(){var t,s,r,q,p,o,n,m,l,k
t=this.c
s=t.length
H.d(s>0)
s=new Array(t.length*6)
s.fixed$length=Array
r=H.D(s,[P.p])
for(s=this.b,q=0,p=0;!1;++p){o=s[p]
r[q]=o.gfc(o)
r[q+1]=o.gfd(o)
r[q+2]=o.gfe(o)
q+=3}for(s=t.length,p=0;n=t.length,p<n;n===s||(0,H.J)(t),++p){m=t[p]
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
j:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gE(s),r=r.gA(r);r.q();){q=r.gt()
p=$.$get$W().h(0,q).a
C.a.l(t,H.f(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.a5(t," ")}}
G.dE.prototype={}
G.dD.prototype={}
G.fb.prototype={
dr:function(a){this.a2("cDepthTest",!0)
this.a2("cDepthWrite",!0)
this.a2("cBlendEquation",$.$get$k7())
this.a2("cStencilFunc",$.$get$kE())}}
G.fd.prototype={
bt:function(a,b,c){var t,s
if(C.i.aK(a,0)===105){if(H.az(C.b.aI(b.length,c)===this.z))H.aK("ChangeAttribute "+this.z)}else{t=C.b.aI(b.length,c)
if(H.az(t===(this.ch.length/3|0)))H.aK("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.dT(t.a,34962,s)
J.jY(t.a,34962,b,35048)},
bu:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
aa:function(a,b,c){var t,s,r,q,p,o
t=J.jV(a,0)===105
if(t&&this.z===0)this.z=C.b.aI(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.jp(r.a))
this.bt(a,b,c)
q=$.$get$W().h(0,a)
if(q==null)throw H.e("Unknown canonical "+a)
p=this.x
if(H.az(p.D(0,a)))H.aK("unexpected attribute "+a)
o=p.h(0,a)
J.dU(r.a,this.e)
r.cl(0,o,t?1:0)
s=s.h(0,a)
p=q.bv()
J.dT(r.a,34962,s)
J.k5(r.a,o,p,5126,!1,0,0)},
j:function(a){var t,s,r,q
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,r=t.gE(t),r=r.gA(r);r.q();){q=r.gt()
C.a.l(s,H.f(q)+":"+t.h(0,q).length)}return"MESH["+this.a+"] "+C.a.a5(s,"  ")},
saO:function(a){this.cx=a}}
G.fB.prototype={
dj:function(a,b){var t=C.b.cR(a,b)
if(this.z===t)return
this.z=t
this.by()},
by:function(){var t,s,r,q,p,o,n
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
bw:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.m(new Float32Array(H.i(3)))
o.p(r,q,p)
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
s=J.u(n)
r=!!s.$isaJ
k=r?s.gaC(n):1
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
a3.L(this.db)
a3.cr(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.eh.prototype={
j:function(a){return"["+this.a+"] "+this.b+" "+this.c+" mode:"+this.d+" ["+this.e.a+"usec]"}}
G.fP.prototype={
dA:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gk(t)===s.gk(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gE(s),s=s.gA(s);s.q();){q=s.gt()
if(!t.D(0,q))C.a.l(r,q)}for(t=this.x,s=new P.c6(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.q();){q=s.d
if(!t.C(0,q))C.a.l(r,q)}return r},
dC:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gE(b),s=s.gA(s),r=this.d,q=this.y,p=this.z,o=0;s.q();){n=s.gt()
switch(J.jV(n,0)){case 117:if(q.D(0,n)){m=b.h(0,n)
if(p.D(0,n))H.jd("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$W().h(0,n)
if(l==null)H.E("unknown "+n)
H.d(q.D(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.ju(r.a,k,m)
else if(!!J.u(m).$isks)J.mb(r.a,k,m)
break
case"float":if(l.c===0)J.m9(r.a,k,m)
else if(!!J.u(m).$iseG)J.ma(r.a,k,m)
break
case"mat4":if(l.c===0){j=H.aM(m,"$isT").a
J.k4(r.a,k,!1,j)}else if(!!J.u(m).$iseG)J.k4(r.a,k,!1,m)
else if(H.az(!1))H.aK("bad unform: "+n)
break
case"mat3":if(l.c===0){j=H.aM(m,"$isaX").a
J.k3(r.a,k,!1,j)}else if(!!J.u(m).$iseG)J.k3(r.a,k,!1,m)
else if(H.az(!1))H.aK("bad unform: "+n)
break
case"vec4":j=l.c
i=r.a
if(j===0)J.k2(i,k,H.aM(m,"$isaJ").a)
else J.k2(i,k,m)
break
case"vec3":j=l.c
i=r.a
if(j===0)J.k1(i,k,H.aM(m,"$ism").a)
else J.k1(i,k,m)
break
case"vec2":j=l.c
i=r.a
if(j===0)J.k0(i,k,H.aM(m,"$isw").a)
else J.k0(i,k,m)
break
case"sampler2D":case"sampler2DShadow":j=C.b.a0(33984,this.ch)
J.jW(r.a,j)
j=H.aM(m,"$isc1").b
J.bw(r.a,3553,j)
j=this.ch
J.ju(r.a,k,j)
this.ch=this.ch+1
break
case"samplerCube":H.d(n==="uCubeTexture")
j=C.b.a0(33984,this.ch)
J.jW(r.a,j)
j=H.aM(m,"$isc1").b
J.bw(r.a,34067,j)
j=this.ch
J.ju(r.a,k,j)
this.ch=this.ch+1
break
default:H.jd("Error: unknow uniform type: "+j)
H.d(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":j=J.F(m,!0)
i=r.a
if(j)J.dV(i,2929)
else J.jq(i,2929)
break
case"cStencilFunc":H.aM(m,"$isdE")
j=m.a
i=r.a
if(j===1281)J.jq(i,2960)
else{J.dV(i,2960)
i=m.b
h=m.c
J.m4(r.a,j,i,h)}break
case"cDepthWrite":J.lI(r.a,m)
break
case"cBlendEquation":H.aM(m,"$isdD")
j=m.a
i=r.a
if(j===1281)J.jq(i,3042)
else{J.dV(i,3042)
i=m.b
h=m.c
J.lB(r.a,i,h)
J.lA(r.a,j)}break}++o
break}}s=Date.now()
""+o
new P.aC(1000*(s-new P.aR(t,!1).a)).j(0)},
dl:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t=Date.now()
s=this.d
J.mc(s.a,this.r)
this.ch=0
this.z.W(0)
for(r=b.length,q=0;q<b.length;b.length===r||(0,H.J)(b),++q){p=b[q]
this.dC(p.a,p.bw())}r=this.Q
r.W(0)
for(o=a.cy,o=o.gE(o),o=o.gA(o);o.q();)r.l(0,o.gt())
n=this.dA()
if(n.length!==0)P.a3("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.f(n)))
J.dU(a.d.a,a.e)
m=this.e.f.length>0
r=a.f
o=a.bu()
l=a.Q
k=a.z
if(m)J.ly(s.a,r)
if(l!==-1){j=s.a
if(k>1)J.lM(j,r,o,l,0,k)
else J.lL(j,r,o,l,0)}else{l=s.a
if(k>1)J.lK(l,r,0,o,k)
else J.lJ(l,r,0,o)}if(m)J.lP(s.a)
C.a.l(c,new G.eh(this.a,a.z,a.bu(),r,P.mq(0,0,0,Date.now()-new P.aR(t,!1).a,0,0)))},
du:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.J)(t),++o){n=t[o]
r.i(0,n,J.k_(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.J)(t),++o){n=t[o]
r.i(0,n,J.k_(q.a,p,n))}}}
G.z.prototype={
bv:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.d(!1)
return-1}}}
G.bk.prototype={
bp:function(a){var t,s,r,q,p
H.d(this.b==null)
for(t=a.length,s=this.c,r=this.x,q=0;q<a.length;a.length===t||(0,H.J)(a),++q){p=a[q]
H.d($.$get$W().D(0,p))
H.d(!C.a.C(s,p))
C.a.l(s,p)
r.i(0,p,this.r);++this.r}C.a.aG(s)},
aJ:function(a){var t,s,r,q
H.d(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.J)(a),++r){q=a[r]
if(H.az($.$get$W().D(0,q)))H.aK("missing uniform "+q)
H.d(!C.a.C(s,q))
C.a.l(s,q)}C.a.aG(s)},
bs:function(a){var t,s,r
H.d(this.b==null)
for(t=this.e,s=0;s<1;++s){r=a[s]
H.d($.$get$W().D(0,r))
H.d(!C.a.C(t,r))
C.a.l(t,r)}C.a.aG(t)},
dv:function(a,b){H.d(this.b==null)
this.b=this.dD(!0,a,b)},
at:function(a){return this.dv(a,null)},
dD:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.d(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.J)(t),++o){n=t[o]
m=$.$get$W().h(0,n)
C.a.l(q,"layout (location="+H.f(p.h(0,n))+") in "+m.a+" "+H.f(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.J)(t),++o){k=t[o]
m=$.$get$W().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.f(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.J)(t),++o){k=t[o]
m=$.$get$W().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.f(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.J)(t),++o){k=t[o]
m=$.$get$W().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.f(k)+j+";")}C.a.l(q,"")
C.a.l(q,"void main(void) {")
C.a.M(q,b)
C.a.l(q,"}")
return C.a.a5(q,"\n")}}
G.fZ.prototype={
bj:function(a,b,c){var t=this.d.a
t[12]=a
t[13]=b
t[14]=c}}
G.hj.prototype={
dn:function(a,b){var t=this.e
if(t!==1)J.m6(a.a,b,34046,t)
J.dX(a.a,b,10240,this.r)
J.dX(a.a,b,10241,this.f)
if(this.b){J.dX(a.a,b,10242,33071)
J.dX(a.a,b,10243,33071)}}}
G.c1.prototype={
j:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.eP.prototype={
bx:function(a){var t,s
t=this.d
s=this.c
J.bw(t.a,s,this.b)
J.m5(t.a,s,0,6408,6408,5121,a)}}
R.dx.prototype={
cu:function(a){var t,s,r
t=this.db
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.a3("size change "+H.f(s)+" "+H.f(r))
this.dx.dj(s,r)
this.z=s
this.Q=r}}
R.h2.prototype={
dG:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.n2("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.u).bF(r,"float")
r.setProperty(p,"left","")
p=C.u.bF(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.o.P(t,s)}return t},
dw:function(a,b,c){var t,s,r
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
J.jn(this.a,s)
r=this.dG(b,c,90,30)
this.d=r
J.jn(this.a,r)
t=t.createElement("div")
this.c=t
J.jn(this.a,t)}}
R.h3.prototype={
dB:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.w.f6(s,2)+" fps"
t=this.c;(t&&C.o).d5(t,b)
r=C.b.I(30*C.w.el(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.o).P(t,q)}}
A.dp.prototype={
j:function(a){return"NODE["+this.a+"]"}}
A.bV.prototype={}
A.fO.prototype={
dk:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.d
s=this.r
r=this.z
q=this.Q
p=t.a
t=t.b
J.lz(p.a,36160,t)
H.d(r>0&&q>0)
J.me(p.a,this.x,this.y,r,q)
if(s!==0)J.lC(p.a,s)
for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.J)(t),++o){n=t[o]
m=n.e
C.a.l(m,new G.dG(P.P(),"transforms",!1,!0))
l=new T.T(new Float32Array(16))
l.T()
for(r=n.f,q=r.length,p=n.d,k=0;k<r.length;r.length===q||(0,H.J)(r),++k)A.le(p,r[k],l,a,m)
m.pop()}},
dt:function(a,b,c){if(this.d==null)this.d=new G.eJ(this.e,null,null,null,null)}}
D.f5.prototype={
$1:function(a){var t,s
t=document.createElement("video")
t.autoplay=!0
s=new W.hT(t,"playing",!1,[W.j])
s.gb1(s).ap(new D.f4(this.a,t))
t.src=(self.URL||self.webkitURL).createObjectURL(a)},
$S:function(){return{func:1,args:[W.bg]}}}
D.f4.prototype={
$1:function(a){return this.a.ag(0,this.b)},
$S:function(){return{func:1,args:[,]}}}
D.f6.prototype={
$1:function(a){P.a3("E:"+("Camera open error "+H.f(a)))
this.a.ag(0,null)},
$S:function(){return{func:1,args:[P.o]}}}
A.j_.prototype={
$2:function(a,b){var t=536870911&a+J.as(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(){return{func:1,args:[P.p,P.o]}}}
T.aX.prototype={
L:function(a){var t,s
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
j:function(a){return"[0] "+this.S(0).j(0)+"\n[1] "+this.S(1).j(0)+"\n[2] "+this.S(2).j(0)+"\n"},
h:function(a,b){return this.a[b]},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aX){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gv:function(a){return A.dQ(this.a)},
S:function(a){var t,s
t=new Float32Array(H.i(3))
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.m(t)},
er:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
if(g===0){this.L(a)
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
T.T.prototype={
a8:function(a,b,c){H.d(a<4)
H.d(b<4)
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
j:function(a){return"[0] "+this.S(0).j(0)+"\n[1] "+this.S(1).j(0)+"\n[2] "+this.S(2).j(0)+"\n[3] "+this.S(3).j(0)+"\n"},
h:function(a,b){return this.a[b]},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.T){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gv:function(a){return A.dQ(this.a)},
S:function(a){var t,s
t=new Float32Array(H.i(4))
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.aJ(t)},
T:function(){var t=this.a
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
cr:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.w.prototype={
j:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+"]"},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.w){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gv:function(a){return A.dQ(this.a)},
h:function(a,b){return this.a[b]},
gk:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.m.prototype={
p:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
L:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
j:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+"]"},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.m){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gv:function(a){return A.dQ(this.a)},
h:function(a,b){return this.a[b]},
gk:function(a){return Math.sqrt(this.gb3())},
gb3:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
b4:function(a){var t,s,r
t=Math.sqrt(this.gb3())
if(t===0)return 0
s=1/t
r=this.a
r[0]=r[0]*s
r[1]=r[1]*s
r[2]=r[2]*s
return t},
b0:function(a){var t,s
t=a.a
s=this.a
return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]},
cd:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.m(new Float32Array(H.i(3)))
t.p(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gK:function(a){return this.a[2]}}
T.aJ.prototype={
j:function(a){var t=this.a
return H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+","+H.f(t[3])},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aJ){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gv:function(a){return A.dQ(this.a)},
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
gaC:function(a){return this.a[3]}}
U.ja.prototype={
$1:function(b8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7
s=this.a
s.c=b8+0
r=this.c
q=r.k4
if(q.h(0,37)!=null)r.go=H.af(r.go+0.03)
else if(q.h(0,39)!=null)r.go=H.af(r.go-0.03)
if(q.h(0,38)!=null)r.id=H.af(r.id+0.03)
else if(q.h(0,40)!=null)r.id=H.af(r.id-0.03)
if(q.h(0,33)!=null)r.fy=H.af(r.fy*0.99)
else if(q.h(0,34)!=null)r.fy=H.af(r.fy*1.01)
if(q.h(0,32)!=null){r.go=0
r.id=0}q=H.af(C.c.em(r.id,-1.4707963267948965,1.4707963267948965))
r.id=q
p=r.fy
o=r.go
n=p*Math.cos(q)
r.bj(n*Math.cos(o),p*Math.sin(q),n*Math.sin(o))
o=r.d.a
q=r.k2.a
o[12]=o[12]+q[0]
o[13]=o[13]+q[1]
o[14]=o[14]+q[2]
p=o[12]
m=o[13]
l=o[14]
k=new T.m(new Float32Array(H.i(3)))
k.p(0,1,0)
j=r.e
i=j.a
i[0]=o[12]
i[1]=o[13]
i[2]=o[14]
i=new Float32Array(H.i(3))
h=new T.m(i)
h.L(j)
i[0]=i[0]-q[0]
i[1]=i[1]-q[1]
i[2]=i[2]-q[2]
h.b4(0)
g=k.cd(h)
g.b4(0)
f=h.cd(g)
f.b4(0)
q=g.b0(j)
e=f.b0(j)
j=h.b0(j)
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
o[15]=1
o[14]=-j
o[13]=-e
o[12]=-q
o[11]=0
o[10]=i
o[9]=b
o[8]=d
o[7]=0
o[6]=a3
o[5]=a2
o[4]=a1
o[3]=0
o[2]=a0
o[1]=a
o[0]=c
o[12]=p
o[13]=m
o[14]=l
l=r.f
m=l.a
m[0]=o[2]
m[1]=o[6]
m[2]=o[10]
r=-r.k1
l=Math.sqrt(l.gb3())
g=m[0]/l
f=m[1]/l
h=m[2]/l
l=Math.cos(r)
r=Math.sin(r)
a4=1-l
a5=g*g*a4+l
m=h*r
a6=g*f*a4-m
p=f*r
a7=g*h*a4+p
a8=f*g*a4+m
a9=f*f*a4+l
r=g*r
b0=f*h*a4-r
b1=h*g*a4-p
b2=h*f*a4+r
b3=h*h*a4+l
l=o[0]
r=o[4]
p=o[8]
m=o[1]
c=o[5]
a=o[9]
a0=o[2]
a1=o[6]
a2=o[10]
a3=o[3]
d=o[7]
b=o[11]
o[0]=l*a5+r*a8+p*b1
o[1]=m*a5+c*a8+a*b1
o[2]=a0*a5+a1*a8+a2*b1
o[3]=a3*a5+d*a8+b*b1
o[4]=l*a6+r*a9+p*b2
o[5]=m*a6+c*a9+a*b2
o[6]=a0*a6+a1*a9+a2*b2
o[7]=a3*a6+d*a9+b*b2
o[8]=l*a7+r*b0+p*b3
o[9]=m*a7+c*b0+a*b3
o[10]=a0*a7+a1*b0+a2*b3
o[11]=a3*a7+d*b0+b*b3
b=Math.cos(0.01)
d=Math.sin(0.01)
a3=this.e.d.a
o=a3[4]
a2=a3[8]
a1=a3[5]
a0=a3[9]
a=a3[6]
c=a3[10]
m=a3[7]
p=a3[11]
r=-d
a3[4]=o*b+a2*d
a3[5]=a1*b+a0*d
a3[6]=a*b+c*d
a3[7]=m*b+p*d
a3[8]=o*r+a2*b
a3[9]=a1*r+a0*b
a3[10]=a*r+c*b
a3[11]=m*r+p*b
b=Math.cos(0.01)
p=Math.sin(0.01)
r=a3[0]
m=a3[8]
c=-p
a=a3[1]
a0=a3[9]
a1=a3[2]
a2=a3[10]
o=a3[3]
d=a3[11]
a3[0]=r*b+m*c
a3[1]=a*b+a0*c
a3[2]=a1*b+a2*c
a3[3]=o*b+d*c
a3[8]=r*p+m*b
a3[9]=a*p+a0*b
a3[10]=a1*p+a2*b
a3[11]=o*p+d*b
try{r=s.b
r.bx(r.f)
q=r.d
r=r.c
J.bw(q.a,r,null)}catch(b4){t=H.M(b4)
P.a3(t)}b5=[]
this.d.dk(b5)
b6=[]
for(r=b5.length,b7=0;b7<b5.length;b5.length===r||(0,H.J)(b5),++b7)C.a.l(b6,b5[b7].j(0))
this.b.dB(s.c,C.a.a5(b6,"<br>"))
C.I.gee(window).ap(this)},
$S:function(){return{func:1,v:true,args:[P.Y]}}}
U.jb.prototype={
$1:function(a){var t,s,r,q,p,o,n
t=J.b8(a,0)
s=this.a
s.a=t
if(t==null)C.I.ec(window,"Could not access camera - do you have a camera installed?")
r=this.b
q=s.a
p=$.$get$kG()
o=J.lG(r.a)
n=new G.eP(q,"video",o,3553,r,p)
J.bw(r.a,3553,o)
J.m1(r.a,37440,1)
n.bx(q)
p.dn(r,3553)
H.d(J.lX(r.a)===0)
J.bw(r.a,3553,null)
s.b=n
this.c.a2("uTexture",n)
this.d.$1(0)},
$S:function(){return{func:1,args:[P.b]}}}
J.a.prototype.da=J.a.prototype.j
J.bL.prototype.dd=J.bL.prototype.j
P.Z.prototype.dc=P.Z.prototype.aD
W.a6.prototype.aH=W.a6.prototype.N
W.c8.prototype.de=W.c8.prototype.V;(function installTearOffs(){installTearOff(H.b5.prototype,"geR",0,0,0,null,["$0"],["aA"],0)
installTearOff(H.ao.prototype,"gcY",0,0,0,null,["$1"],["J"],2)
installTearOff(H.b4.prototype,"geA",0,0,0,null,["$1"],["X"],2)
installTearOff(P,"nj",1,0,0,null,["$1"],["n_"],1)
installTearOff(P,"nk",1,0,0,null,["$1"],["n0"],1)
installTearOff(P,"nl",1,0,0,null,["$1"],["n1"],1)
installTearOff(P,"l9",1,0,0,null,["$0"],["nh"],0)
installTearOff(P.H.prototype,"gbK",0,0,0,null,["$2","$1"],["F","dM"],5)
installTearOff(P,"nr",1,0,0,null,["$2"],["ml"],7)
installTearOff(W,"nw",1,0,0,null,["$1"],["ms"],8)
installTearOff(W,"nx",1,0,0,null,["$4"],["n5"],4)
installTearOff(W,"ny",1,0,0,null,["$4"],["n6"],4)
installTearOff(W.dq.prototype,"gb5",0,1,0,null,["$0"],["b6"],3)
installTearOff(W.dF.prototype,"gb5",0,1,0,null,["$0"],["b6"],3)
installTearOff(R.dx.prototype,"geZ",0,0,0,null,["$1"],["cu"],6)
installTearOff(U,"la",1,0,0,null,["$0"],["nG"],0)})();(function inheritance(){inherit(P.o,null)
var t=P.o
inherit(H.jA,t)
inherit(J.a,t)
inherit(J.e1,t)
inherit(P.Z,t)
inherit(H.dg,t)
inherit(P.dc,t)
inherit(H.cs,t)
inherit(H.bb,t)
inherit(H.il,t)
inherit(H.b5,t)
inherit(H.hU,t)
inherit(H.b6,t)
inherit(H.ik,t)
inherit(H.hM,t)
inherit(H.bj,t)
inherit(H.hl,t)
inherit(H.at,t)
inherit(H.ao,t)
inherit(H.b4,t)
inherit(H.fN,t)
inherit(H.hs,t)
inherit(P.bd,t)
inherit(H.dN,t)
inherit(H.aH,t)
inherit(H.aj,t)
inherit(H.f_,t)
inherit(H.f1,t)
inherit(P.hO,t)
inherit(P.bo,t)
inherit(P.H,t)
inherit(P.dI,t)
inherit(P.bY,t)
inherit(P.h5,t)
inherit(P.b9,t)
inherit(P.iN,t)
inherit(P.fW,t)
inherit(P.ii,t)
inherit(P.c6,t)
inherit(P.bU,t)
inherit(P.y,t)
inherit(P.ij,t)
inherit(P.aA,t)
inherit(P.I,t)
inherit(P.aR,t)
inherit(P.Y,t)
inherit(P.aC,t)
inherit(P.dA,t)
inherit(P.hZ,t)
inherit(P.el,t)
inherit(P.b,t)
inherit(P.N,t)
inherit(P.aG,t)
inherit(P.bX,t)
inherit(P.r,t)
inherit(P.bZ,t)
inherit(W.e9,t)
inherit(W.hL,t)
inherit(W.c5,t)
inherit(W.B,t)
inherit(W.ds,t)
inherit(W.c8,t)
inherit(W.iF,t)
inherit(W.ct,t)
inherit(W.dr,t)
inherit(W.iw,t)
inherit(W.dO,t)
inherit(P.iB,t)
inherit(P.io,t)
inherit(G.fg,t)
inherit(G.e7,t)
inherit(G.eJ,t)
inherit(G.cr,t)
inherit(G.cu,t)
inherit(G.dE,t)
inherit(G.dD,t)
inherit(G.eh,t)
inherit(G.z,t)
inherit(G.bk,t)
inherit(G.hj,t)
inherit(G.c1,t)
inherit(R.h2,t)
inherit(T.aX,t)
inherit(T.T,t)
inherit(T.w,t)
inherit(T.m,t)
inherit(T.aJ,t)
t=J.a
inherit(J.eV,t)
inherit(J.eW,t)
inherit(J.bL,t)
inherit(J.aT,t)
inherit(J.be,t)
inherit(J.aU,t)
inherit(H.bh,t)
inherit(H.aY,t)
inherit(W.h,t)
inherit(W.a4,t)
inherit(W.ba,t)
inherit(W.e5,t)
inherit(W.A,t)
inherit(W.cx,t)
inherit(W.eb,t)
inherit(W.ec,t)
inherit(W.ed,t)
inherit(W.cn,t)
inherit(W.co,t)
inherit(W.cp,t)
inherit(W.cI,t)
inherit(W.eg,t)
inherit(W.j,t)
inherit(W.cH,t)
inherit(W.a7,t)
inherit(W.eM,t)
inherit(W.cM,t)
inherit(W.bK,t)
inherit(W.f3,t)
inherit(W.fc,t)
inherit(W.a8,t)
inherit(W.cG,t)
inherit(W.dn,t)
inherit(W.dq,t)
inherit(W.cL,t)
inherit(W.fz,t)
inherit(W.bl,t)
inherit(W.a9,t)
inherit(W.cE,t)
inherit(W.am,t)
inherit(W.dv,t)
inherit(W.ab,t)
inherit(W.cD,t)
inherit(W.ac,t)
inherit(W.h4,t)
inherit(W.a_,t)
inherit(W.cC,t)
inherit(W.hk,t)
inherit(W.ae,t)
inherit(W.cN,t)
inherit(W.hp,t)
inherit(W.dF,t)
inherit(W.hw,t)
inherit(W.hB,t)
inherit(W.hN,t)
inherit(W.cB,t)
inherit(W.cR,t)
inherit(W.cQ,t)
inherit(W.cK,t)
inherit(W.cP,t)
inherit(W.cO,t)
inherit(W.iL,t)
inherit(W.iM,t)
inherit(P.au,t)
inherit(P.cA,t)
inherit(P.av,t)
inherit(P.cF,t)
inherit(P.fF,t)
inherit(P.fG,t)
inherit(P.fL,t)
inherit(P.cy,t)
inherit(P.aw,t)
inherit(P.cJ,t)
inherit(P.hA,t)
inherit(P.e2,t)
inherit(P.fQ,t)
inherit(P.fR,t)
inherit(P.iK,t)
inherit(P.cz,t)
t=J.bL
inherit(J.fD,t)
inherit(J.b1,t)
inherit(J.aV,t)
inherit(J.jz,J.aT)
t=J.be
inherit(J.de,t)
inherit(J.dd,t)
t=P.Z
inherit(H.c,t)
inherit(H.dh,t)
inherit(H.dH,t)
t=H.c
inherit(H.bf,t)
inherit(H.f0,t)
inherit(H.ek,H.dh)
t=P.dc
inherit(H.f7,t)
inherit(H.hD,t)
t=H.bf
inherit(H.bM,t)
inherit(P.f2,t)
t=H.bb
inherit(H.jk,t)
inherit(H.jl,t)
inherit(H.ig,t)
inherit(H.hV,t)
inherit(H.eS,t)
inherit(H.eT,t)
inherit(H.im,t)
inherit(H.hm,t)
inherit(H.hn,t)
inherit(H.jm,t)
inherit(H.j4,t)
inherit(H.j5,t)
inherit(H.j6,t)
inherit(H.j7,t)
inherit(H.j8,t)
inherit(H.hf,t)
inherit(H.eX,t)
inherit(H.j0,t)
inherit(H.j1,t)
inherit(H.j2,t)
inherit(P.hI,t)
inherit(P.hH,t)
inherit(P.hJ,t)
inherit(P.hK,t)
inherit(P.eL,t)
inherit(P.eK,t)
inherit(P.i_,t)
inherit(P.i7,t)
inherit(P.i3,t)
inherit(P.i4,t)
inherit(P.i5,t)
inherit(P.i1,t)
inherit(P.i6,t)
inherit(P.i0,t)
inherit(P.ia,t)
inherit(P.ib,t)
inherit(P.i9,t)
inherit(P.i8,t)
inherit(P.h8,t)
inherit(P.h9,t)
inherit(P.h6,t)
inherit(P.h7,t)
inherit(P.iO,t)
inherit(P.iR,t)
inherit(P.ir,t)
inherit(P.iq,t)
inherit(P.is,t)
inherit(P.f8,t)
inherit(P.ei,t)
inherit(P.ej,t)
inherit(W.iS,t)
inherit(W.fp,t)
inherit(W.fq,t)
inherit(W.hE,t)
inherit(W.hY,t)
inherit(W.fs,t)
inherit(W.fr,t)
inherit(W.iy,t)
inherit(W.iz,t)
inherit(W.iI,t)
inherit(W.iJ,t)
inherit(P.iD,t)
inherit(P.iT,t)
inherit(B.jf,t)
inherit(B.jg,t)
inherit(B.jh,t)
inherit(B.ji,t)
inherit(B.jj,t)
inherit(B.fv,t)
inherit(B.fw,t)
inherit(B.fx,t)
inherit(B.fy,t)
inherit(D.f5,t)
inherit(D.f4,t)
inherit(D.f6,t)
inherit(A.j_,t)
inherit(U.ja,t)
inherit(U.jb,t)
t=H.hM
inherit(H.bq,t)
inherit(H.c9,t)
t=P.bd
inherit(H.dt,t)
inherit(H.eY,t)
inherit(H.hv,t)
inherit(H.hu,t)
inherit(H.e6,t)
inherit(H.fT,t)
inherit(P.ci,t)
inherit(P.bi,t)
inherit(P.ah,t)
inherit(P.v,t)
inherit(P.c2,t)
inherit(P.al,t)
inherit(P.a5,t)
inherit(P.ea,t)
t=H.hf
inherit(H.h1,t)
inherit(H.by,t)
inherit(H.hG,P.ci)
t=H.aY
inherit(H.fh,t)
inherit(H.dj,t)
t=H.dj
inherit(H.bQ,t)
inherit(H.bP,t)
inherit(H.bR,H.bQ)
inherit(H.dk,H.bR)
inherit(H.bS,H.bP)
inherit(H.dl,H.bS)
t=H.dk
inherit(H.di,t)
inherit(H.fi,t)
t=H.dl
inherit(H.fj,t)
inherit(H.fk,t)
inherit(H.fl,t)
inherit(H.fm,t)
inherit(H.fn,t)
inherit(H.dm,t)
inherit(H.fo,t)
t=P.hO
inherit(P.dJ,t)
inherit(P.iG,t)
inherit(P.ip,P.iN)
inherit(P.dL,H.aj)
inherit(P.fV,P.fW)
inherit(P.ie,P.fV)
inherit(P.ih,P.ie)
inherit(P.df,P.bU)
t=P.Y
inherit(P.O,t)
inherit(P.p,t)
t=P.ah
inherit(P.dw,t)
inherit(P.eQ,t)
t=W.h
inherit(W.t,t)
inherit(W.bD,t)
inherit(W.e8,t)
inherit(W.eE,t)
inherit(W.bJ,t)
inherit(W.bg,t)
inherit(W.bO,t)
inherit(W.fI,t)
inherit(W.dy,t)
inherit(W.fX,t)
inherit(W.aa,t)
inherit(W.bC,t)
inherit(W.ad,t)
inherit(W.a0,t)
inherit(W.bB,t)
inherit(W.hy,t)
inherit(W.hC,t)
inherit(W.c3,t)
inherit(W.hF,t)
inherit(W.b3,t)
inherit(W.ix,t)
t=W.t
inherit(W.a6,t)
inherit(W.aQ,t)
inherit(W.bz,t)
inherit(W.cm,t)
inherit(W.hQ,t)
t=W.a6
inherit(W.l,t)
inherit(P.G,t)
t=W.l
inherit(W.dZ,t)
inherit(W.e_,t)
inherit(W.aP,t)
inherit(W.cj,t)
inherit(W.cl,t)
inherit(W.eI,t)
inherit(W.cv,t)
inherit(W.eR,t)
inherit(W.bN,t)
inherit(W.fU,t)
inherit(W.dB,t)
inherit(W.hd,t)
inherit(W.he,t)
inherit(W.c_,t)
inherit(W.id,t)
inherit(W.bG,W.bD)
inherit(W.e3,W.bG)
inherit(W.bc,W.cx)
inherit(W.ee,W.co)
inherit(W.da,W.cI)
inherit(W.ef,W.da)
inherit(W.S,W.ba)
inherit(W.d8,W.cH)
inherit(W.bH,W.d8)
inherit(W.cT,W.cM)
inherit(W.bI,W.cT)
inherit(W.cw,W.bz)
inherit(W.eN,W.bJ)
inherit(W.aI,W.j)
t=W.aI
inherit(W.aW,t)
inherit(W.Q,t)
inherit(W.b0,t)
inherit(W.fe,W.bO)
inherit(W.d2,W.cG)
inherit(W.ff,W.d2)
inherit(W.V,P.df)
inherit(W.d3,W.cL)
inherit(W.bT,W.d3)
t=W.bl
inherit(W.fC,t)
inherit(W.fS,t)
inherit(W.hr,t)
inherit(W.d4,W.cE)
inherit(W.fE,W.d4)
inherit(W.fH,W.am)
inherit(W.bF,W.bC)
inherit(W.fY,W.bF)
inherit(W.d0,W.cD)
inherit(W.h_,W.d0)
inherit(W.cX,W.cC)
inherit(W.hh,W.cX)
inherit(W.bE,W.bB)
inherit(W.hi,W.bE)
inherit(W.d6,W.cN)
inherit(W.ho,W.d6)
inherit(W.bn,W.bN)
inherit(W.b2,W.Q)
inherit(W.d7,W.cB)
inherit(W.dK,W.d7)
inherit(W.d5,W.cR)
inherit(W.hP,W.d5)
inherit(W.hR,W.cp)
inherit(W.cS,W.cQ)
inherit(W.ic,W.cS)
inherit(W.d9,W.cK)
inherit(W.dM,W.d9)
inherit(W.cZ,W.cP)
inherit(W.iA,W.cZ)
inherit(W.cV,W.cO)
inherit(W.iE,W.cV)
inherit(W.hS,W.hL)
inherit(W.hW,P.bY)
inherit(W.hT,W.hW)
inherit(W.hX,P.h5)
inherit(W.iH,W.c8)
inherit(P.iC,P.iB)
inherit(P.K,P.io)
t=P.G
inherit(P.aE,t)
inherit(P.aO,t)
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
inherit(P.eA,t)
inherit(P.eB,t)
inherit(P.eC,t)
inherit(P.eD,t)
inherit(P.eF,t)
inherit(P.f9,t)
inherit(P.fa,t)
inherit(P.fA,t)
inherit(P.bW,t)
inherit(P.hc,t)
inherit(P.hz,t)
inherit(P.c4,t)
inherit(P.it,t)
inherit(P.iu,t)
inherit(P.iv,t)
t=P.aE
inherit(P.dY,t)
inherit(P.eH,t)
inherit(P.ai,t)
inherit(P.eO,t)
inherit(P.hb,t)
inherit(P.dC,t)
inherit(P.hx,t)
inherit(P.cU,P.cA)
inherit(P.eZ,P.cU)
inherit(P.d1,P.cF)
inherit(P.ft,P.d1)
inherit(P.fM,P.ai)
inherit(P.d_,P.cy)
inherit(P.ha,P.d_)
t=P.dC
inherit(P.hg,t)
inherit(P.c0,t)
inherit(P.cY,P.cJ)
inherit(P.hq,P.cY)
inherit(P.cW,P.cz)
inherit(P.h0,P.cW)
t=G.fg
inherit(G.fZ,t)
inherit(G.dG,t)
inherit(G.fd,t)
inherit(G.fP,t)
inherit(A.fO,t)
inherit(A.bV,t)
t=G.fZ
inherit(G.e4,t)
inherit(A.dp,t)
inherit(B.fu,G.e4)
t=G.dG
inherit(G.fb,t)
inherit(G.fB,t)
inherit(G.eP,G.c1)
inherit(R.dx,A.fO)
inherit(R.h3,R.h2)
mixin(H.bP,P.y)
mixin(H.bQ,P.y)
mixin(H.bR,H.cs)
mixin(H.bS,H.cs)
mixin(P.bU,P.y)
mixin(W.bB,P.y)
mixin(W.bC,P.y)
mixin(W.bD,P.y)
mixin(W.bE,W.B)
mixin(W.bF,W.B)
mixin(W.bG,W.B)
mixin(W.cx,W.e9)
mixin(W.cR,P.y)
mixin(W.cD,P.y)
mixin(W.cK,P.y)
mixin(W.cL,P.y)
mixin(W.cM,P.y)
mixin(W.cN,P.y)
mixin(W.cO,P.y)
mixin(W.cP,P.y)
mixin(W.cQ,P.y)
mixin(W.cB,P.y)
mixin(W.cC,P.y)
mixin(W.cE,P.y)
mixin(W.cG,P.y)
mixin(W.cH,P.y)
mixin(W.cI,P.y)
mixin(W.cS,W.B)
mixin(W.cT,W.B)
mixin(W.d3,W.B)
mixin(W.d4,W.B)
mixin(W.d2,W.B)
mixin(W.d7,W.B)
mixin(W.d8,W.B)
mixin(W.d9,W.B)
mixin(W.da,W.B)
mixin(W.cV,W.B)
mixin(W.cX,W.B)
mixin(W.cZ,W.B)
mixin(W.d0,W.B)
mixin(W.d5,W.B)
mixin(W.d6,W.B)
mixin(P.cA,P.y)
mixin(P.cy,P.y)
mixin(P.cF,P.y)
mixin(P.cJ,P.y)
mixin(P.cU,W.B)
mixin(P.d1,W.B)
mixin(P.cY,W.B)
mixin(P.d_,W.B)
mixin(P.cz,P.y)
mixin(P.cW,W.B)})();(function constants(){C.n=W.aP.prototype
C.J=W.cj.prototype
C.u=W.bc.prototype
C.o=W.cl.prototype
C.K=W.cn.prototype
C.L=W.cv.prototype
C.p=W.cw.prototype
C.M=J.a.prototype
C.a=J.aT.prototype
C.w=J.dd.prototype
C.b=J.de.prototype
C.c=J.be.prototype
C.i=J.aU.prototype
C.T=J.aV.prototype
C.W=H.di.prototype
C.X=W.dn.prototype
C.A=W.bT.prototype
C.B=J.fD.prototype
C.C=W.dv.prototype
C.H=W.dB.prototype
C.t=J.b1.prototype
C.av=W.b2.prototype
C.I=W.c3.prototype
C.d=new P.ip()
C.v=new P.aC(0)
C.N=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.O=function(hooks) {
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

C.P=function(getTagFallback) {
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
C.Q=function() {
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
C.R=function(hooks) {
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
C.S=function(hooks) {
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
C.U=H.D(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.r])
C.V=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.z=makeConstList([])
C.q=H.D(makeConstList(["bind","if","ref","repeat","syntax"]),[P.r])
C.r=H.D(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.r])
C.Y=new G.z("vec3","vertex btangents",0)
C.e=new G.z("vec3","",0)
C.Z=new G.z("vec4","delta from light",0)
C.m=new G.z("","",0)
C.D=new G.z("vec3","vertex coordinates",0)
C.a_=new G.z("vec3","vertex binormals",0)
C.E=new G.z("vec4","for wireframe",0)
C.a0=new G.z("vec4","per vertex color",0)
C.a1=new G.z("float","for normal maps",0)
C.j=new G.z("mat4","",0)
C.a3=new G.z("mat4","",4)
C.a2=new G.z("mat4","",128)
C.f=new G.z("float","",0)
C.a4=new G.z("float","",4)
C.a5=new G.z("float","depth for shadowmaps",0)
C.h=new G.z("sampler2D","",0)
C.a6=new G.z("float","for bump maps",0)
C.a7=new G.z("vec2","texture uvs",0)
C.a8=new G.z("float","time since program start in sec",0)
C.k=new G.z("vec2","",0)
C.a9=new G.z("samplerCube","",0)
C.l=new G.z("vec4","",0)
C.aa=new G.z("vec3","vertex normals",0)
C.ab=new G.z("sampler2DShadow","",0)
C.F=new G.z("vec3","per vertex color",0)
C.G=new G.z("mat3","",0)
C.ac=new G.z("vec3","vertex tangents",0)
C.ad=H.L("nQ")
C.ae=H.L("nR")
C.af=H.L("eG")
C.ag=H.L("nS")
C.ah=H.L("nT")
C.ai=H.L("ks")
C.aj=H.L("nU")
C.ak=H.L("kv")
C.al=H.L("aG")
C.am=H.L("r")
C.an=H.L("kS")
C.ao=H.L("kT")
C.ap=H.L("nV")
C.aq=H.L("kU")
C.ar=H.L("aA")
C.as=H.L("O")
C.at=H.L("p")
C.au=H.L("Y")})();(function staticFields(){$.kA="$cachedFunction"
$.kB="$cachedInvocation"
$.kb=null
$.k9=null
$.jK=!1
$.jO=null
$.l6=null
$.lp=null
$.iW=null
$.j3=null
$.jP=null
$.br=null
$.ca=null
$.cb=null
$.jL=!1
$.x=C.d
$.ko=0
$.aD=null
$.jw=null
$.kn=null
$.km=null
$.kk=null
$.kj=null
$.ki=null
$.kh=null
$.nn=0
$.no=0
$.jT=0
$.ln=0
$.cg=0
$.ch=0
$.nN=!1
$.lh=0})();(function lazyInitializers(){lazy($,"kg","$get$kg",function(){return H.lk("_$dart_dartClosure")})
lazy($,"jB","$get$jB",function(){return H.lk("_$dart_js")})
lazy($,"kt","$get$kt",function(){return H.mD()})
lazy($,"ku","$get$ku",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.ko
$.ko=t+1
t="expando$key$"+t}return new P.el(null,t,[P.p])})
lazy($,"kH","$get$kH",function(){return H.ax(H.ht({
toString:function(){return"$receiver$"}}))})
lazy($,"kI","$get$kI",function(){return H.ax(H.ht({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"kJ","$get$kJ",function(){return H.ax(H.ht(null))})
lazy($,"kK","$get$kK",function(){return H.ax(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kO","$get$kO",function(){return H.ax(H.ht(void 0))})
lazy($,"kP","$get$kP",function(){return H.ax(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kM","$get$kM",function(){return H.ax(H.kN(null))})
lazy($,"kL","$get$kL",function(){return H.ax(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"kR","$get$kR",function(){return H.ax(H.kN(void 0))})
lazy($,"kQ","$get$kQ",function(){return H.ax(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"jI","$get$jI",function(){return P.mZ()})
lazy($,"kq","$get$kq",function(){return P.n3(null,P.aG)})
lazy($,"cc","$get$cc",function(){return[]})
lazy($,"kf","$get$kf",function(){return{}})
lazy($,"kZ","$get$kZ",function(){return P.jD(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"jJ","$get$jJ",function(){return P.P()})
lazy($,"iV","$get$iV",function(){return P.kw(P.p,P.aA)})
lazy($,"ce","$get$ce",function(){return P.kw(P.r,P.aA)})
lazy($,"kE","$get$kE",function(){return new G.dE(1281,0,4294967295)})
lazy($,"k7","$get$k7",function(){return new G.dD(1281,1281,1281)})
lazy($,"W","$get$W",function(){return P.aF(["cBlendEquation",C.m,"cDepthWrite",C.m,"cDepthTest",C.m,"cStencilFunc",C.m,"tPosition",C.e,"tSpeed",C.e,"tForce",C.e,"aColors",C.F,"aColorAlpha",C.a0,"aPosition",C.D,"aTexUV",C.a7,"aNormal",C.aa,"aBinormal",C.a_,"aCenter",C.E,"aPointSize",C.f,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.ac,"aBitangent",C.Y,"iaRotation",C.l,"iaTranslation",C.e,"iaScale",C.e,"vColor",C.F,"vTexUV",C.k,"vLightWeighting",C.e,"vNormal",C.e,"vPosition",C.D,"vPositionFromLight",C.Z,"vCenter",C.E,"vDepth",C.a5,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.G,"uConvolutionMatrix",C.G,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.ab,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a9,"uAnimationTable",C.h,"uTime",C.a8,"uCameraNear",C.f,"uCameraFar",C.f,"uFogNear",C.f,"uFogFar",C.f,"uPointSize",C.f,"uScale",C.f,"uAngle",C.f,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.f,"uShininess",C.f,"uShadowBias",C.f,"uOpacity",C.f,"uColor",C.e,"uAmbientDiffuse",C.e,"uColorEmissive",C.e,"uColorSpecular",C.e,"uColorDiffuse",C.e,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.e,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a2,"uLightDescs",C.a3,"uLightCount",C.f,"uLightTypes",C.a4,"uBumpScale",C.a6,"uNormalScale",C.a1])})
lazy($,"kG","$get$kG",function(){var t=new G.hj(!1,!1,!1,!0,1,9729,9729)
t.b=!0
return t})
lazy($,"ke","$get$ke",function(){return T.bm(1,0,0)})
lazy($,"lf","$get$lf",function(){var t=new G.bk("uv-passthru",null,[],[],[],[],0,P.P())
t.bp(["aPosition","aTexUV"])
t.bs(["vTexUV"])
t.at(["gl_Position = vec4(aPosition, 1.0);","vTexUV = aTexUV;"])
return t})
lazy($,"ld","$get$ld",function(){return $.$get$lf()})
lazy($,"lc","$get$lc",function(){var t=new G.bk("copyF",null,[],[],[],[],0,P.P())
t.bs(["vTexUV"])
t.aJ(["uTexture"])
t.at(["oFragColor = texture(uTexture, vTexUV);"])
return t})
lazy($,"lr","$get$lr",function(){var t=new G.bk("SolidColor",null,[],[],[],[],0,P.P())
t.bp(["aPosition"])
t.aJ(["uPerspectiveViewMatrix","uModelMatrix"])
t.at(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"])
return t})
lazy($,"lq","$get$lq",function(){var t=new G.bk("SolidColorF",null,[],[],[],[],0,P.P())
t.aJ(["uColor"])
t.at(["oFragColor = vec4( uColor, 1.0 );"])
return t})
lazy($,"kW","$get$kW",function(){return[T.bm(0,0,1),T.bm(0,0,-1),T.bm(0,1,0),T.bm(0,-1,0),T.bm(1,0,0),T.bm(-1,0,0)]})})()
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
mangledGlobalNames:{p:"int",O:"double",Y:"num",r:"String",aA:"bool",aG:"Null",b:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.t},{func:1,ret:P.aA,args:[W.a6,P.r,P.r,W.c5]},{func:1,v:true,args:[P.o],opt:[P.bX]},{func:1,v:true,args:[W.j]},{func:1,ret:P.p,args:[P.I,P.I]},{func:1,ret:P.r,args:[W.h]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationTimeline:J.a,AppBannerPromptResult:J.a,BarProp:J.a,Body:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CHROMIUMValuebuffer:J.a,CircularGeofencingRegion:J.a,Client:J.a,Clients:J.a,CompositorProxy:J.a,ConsoleBase:J.a,Coordinates:J.a,Credential:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMStringMap:J.a,EffectModel:J.a,Entry:J.a,FederatedCredential:J.a,FileEntry:J.a,FileError:J.a,Stream:J.a,DOMFileSystem:J.a,FontFace:J.a,FormData:J.a,GamepadButton:J.a,Geofencing:J.a,GeofencingRegion:J.a,Geolocation:J.a,Geoposition:J.a,Headers:J.a,HMDVRDevice:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,InjectedScriptHost:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,KeyframeEffect:J.a,MediaDeviceInfo:J.a,MediaDevices:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaMetadata:J.a,MediaSession:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigatorStorageUtils:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,OffscreenCanvas:J.a,PasswordCredential:J.a,PerformanceCompositeTiming:J.a,PerformanceEntry:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformanceRenderTiming:J.a,PerformanceResourceTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PositionError:J.a,PositionSensorVRDevice:J.a,Presentation:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,ReadableByteStream:J.a,ReadableByteStreamReader:J.a,ReadableStreamReader:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,Selection:J.a,ServicePort:J.a,SharedArrayBuffer:J.a,SourceInfo:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StorageInfo:J.a,StorageManager:J.a,StorageQuota:J.a,StyleMedia:J.a,StylePropertyMap:J.a,SyncManager:J.a,TextMetrics:J.a,TrackDefault:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRDevice:J.a,VREyeParameters:J.a,VRFieldOfView:J.a,VRPositionState:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkerConsole:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothAdvertisingData:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,NFC:J.a,PagePopupController:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WebKitCSSMatrix:J.a,Worklet:J.a,WorkletGlobalScope:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPreserveAspectRatio:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,CHROMIUMSubscribeUniform:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTDisjointTimerQuery:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bh,ArrayBufferView:H.aY,DataView:H.fh,Float32Array:H.di,Float64Array:H.fi,Int16Array:H.fj,Int32Array:H.fk,Int8Array:H.fl,Uint16Array:H.fm,Uint32Array:H.fn,Uint8ClampedArray:H.dm,CanvasPixelArray:H.dm,Uint8Array:H.fo,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLImageElement:W.l,HTMLKeygenElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMenuElement:W.l,HTMLMenuItemElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTextAreaElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,HTMLAnchorElement:W.dZ,HTMLAreaElement:W.e_,AudioTrack:W.a4,AudioTrackList:W.e3,Blob:W.ba,HTMLBodyElement:W.aP,HTMLCanvasElement:W.cj,CanvasRenderingContext2D:W.e5,CDATASection:W.aQ,CharacterData:W.aQ,Comment:W.aQ,ProcessingInstruction:W.aQ,Text:W.aQ,CompositorWorker:W.e8,CSSCharsetRule:W.A,CSSFontFaceRule:W.A,CSSGroupingRule:W.A,CSSImportRule:W.A,CSSKeyframeRule:W.A,MozCSSKeyframeRule:W.A,WebKitCSSKeyframeRule:W.A,CSSKeyframesRule:W.A,MozCSSKeyframesRule:W.A,WebKitCSSKeyframesRule:W.A,CSSMediaRule:W.A,CSSNamespaceRule:W.A,CSSPageRule:W.A,CSSRule:W.A,CSSStyleRule:W.A,CSSSupportsRule:W.A,CSSViewportRule:W.A,CSSStyleDeclaration:W.bc,MSStyleCSSProperties:W.bc,CSS2Properties:W.bc,DataTransferItemList:W.eb,DeviceAcceleration:W.ec,HTMLDivElement:W.cl,XMLDocument:W.bz,Document:W.bz,DocumentFragment:W.cm,ShadowRoot:W.cm,DOMException:W.ed,DOMImplementation:W.cn,DOMPoint:W.ee,DOMPointReadOnly:W.co,DOMRectReadOnly:W.cp,DOMStringList:W.ef,DOMTokenList:W.eg,Element:W.a6,AnimationEvent:W.j,AnimationPlayerEvent:W.j,ApplicationCacheErrorEvent:W.j,AutocompleteErrorEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceLightEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,GamepadEvent:W.j,GeofencingEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RelatedEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCIceCandidateEvent:W.j,RTCPeerConnectionIceEvent:W.j,SecurityPolicyViolationEvent:W.j,ServicePortConnectEvent:W.j,ServiceWorkerMessageEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,Animation:W.h,ApplicationCache:W.h,DOMApplicationCache:W.h,OfflineResourceList:W.h,BatteryManager:W.h,CanvasCaptureMediaStreamTrack:W.h,CrossOriginServiceWorkerClient:W.h,EventSource:W.h,FileReader:W.h,FontFaceSet:W.h,MediaKeySession:W.h,MediaQueryList:W.h,MediaRecorder:W.h,MediaSource:W.h,MediaStreamTrack:W.h,MessagePort:W.h,MIDIAccess:W.h,NetworkInformation:W.h,Notification:W.h,Performance:W.h,PermissionStatus:W.h,PresentationAvailability:W.h,PresentationReceiver:W.h,PresentationRequest:W.h,RTCDTMFSender:W.h,RTCPeerConnection:W.h,webkitRTCPeerConnection:W.h,mozRTCPeerConnection:W.h,ScreenOrientation:W.h,ServicePortCollection:W.h,ServiceWorkerContainer:W.h,ServiceWorkerRegistration:W.h,SpeechRecognition:W.h,SpeechSynthesis:W.h,SpeechSynthesisUtterance:W.h,WorkerPerformance:W.h,BluetoothDevice:W.h,BluetoothRemoteGATTCharacteristic:W.h,USB:W.h,IDBDatabase:W.h,IDBOpenDBRequest:W.h,IDBVersionChangeRequest:W.h,IDBRequest:W.h,IDBTransaction:W.h,AnalyserNode:W.h,RealtimeAnalyserNode:W.h,AudioBufferSourceNode:W.h,AudioContext:W.h,webkitAudioContext:W.h,AudioDestinationNode:W.h,AudioNode:W.h,AudioSourceNode:W.h,BiquadFilterNode:W.h,ChannelMergerNode:W.h,AudioChannelMerger:W.h,ChannelSplitterNode:W.h,AudioChannelSplitter:W.h,ConvolverNode:W.h,DelayNode:W.h,DynamicsCompressorNode:W.h,GainNode:W.h,AudioGainNode:W.h,IIRFilterNode:W.h,MediaElementAudioSourceNode:W.h,MediaStreamAudioDestinationNode:W.h,MediaStreamAudioSourceNode:W.h,OfflineAudioContext:W.h,OscillatorNode:W.h,Oscillator:W.h,PannerNode:W.h,AudioPannerNode:W.h,webkitAudioPannerNode:W.h,ScriptProcessorNode:W.h,JavaScriptAudioNode:W.h,StereoPannerNode:W.h,WaveShaperNode:W.h,EventTarget:W.h,File:W.S,FileList:W.bH,FileWriter:W.eE,HTMLFormElement:W.eI,Gamepad:W.a7,HTMLHeadElement:W.cv,History:W.eM,HTMLCollection:W.bI,HTMLFormControlsCollection:W.bI,HTMLOptionsCollection:W.bI,HTMLDocument:W.cw,XMLHttpRequest:W.eN,XMLHttpRequestUpload:W.bJ,XMLHttpRequestEventTarget:W.bJ,ImageData:W.bK,HTMLInputElement:W.eR,KeyboardEvent:W.aW,Location:W.f3,HTMLAudioElement:W.bN,HTMLMediaElement:W.bN,MediaList:W.fc,MediaStream:W.bg,MIDIOutput:W.fe,MIDIInput:W.bO,MIDIPort:W.bO,MimeType:W.a8,MimeTypeArray:W.ff,PointerEvent:W.Q,MouseEvent:W.Q,DragEvent:W.Q,Navigator:W.dn,Attr:W.t,Node:W.t,NodeIterator:W.dq,NodeList:W.bT,RadioNodeList:W.bT,Path2D:W.fz,Perspective:W.fC,Plugin:W.a9,PluginArray:W.fE,PositionValue:W.fH,PresentationConnection:W.fI,Range:W.dv,Rotation:W.fS,RTCDataChannel:W.dy,DataChannel:W.dy,HTMLSelectElement:W.fU,SharedWorker:W.fX,SourceBuffer:W.aa,SourceBufferList:W.fY,SpeechGrammar:W.ab,SpeechGrammarList:W.h_,SpeechRecognitionResult:W.ac,Storage:W.h4,CSSStyleSheet:W.a_,StyleSheet:W.a_,CalcLength:W.am,KeywordValue:W.am,LengthValue:W.am,NumberValue:W.am,SimpleLength:W.am,TransformValue:W.am,StyleValue:W.am,HTMLTableElement:W.dB,HTMLTableRowElement:W.hd,HTMLTableSectionElement:W.he,HTMLTemplateElement:W.c_,TextTrack:W.ad,TextTrackCue:W.a0,VTTCue:W.a0,TextTrackCueList:W.hh,TextTrackList:W.hi,TimeRanges:W.hk,Touch:W.ae,TouchEvent:W.b0,TouchList:W.ho,TrackDefaultList:W.hp,Matrix:W.bl,Skew:W.bl,TransformComponent:W.bl,Translation:W.hr,TreeWalker:W.dF,CompositionEvent:W.aI,FocusEvent:W.aI,TextEvent:W.aI,SVGZoomEvent:W.aI,UIEvent:W.aI,URL:W.hw,HTMLVideoElement:W.bn,VideoTrackList:W.hy,VTTRegionList:W.hB,WebSocket:W.hC,WheelEvent:W.b2,Window:W.c3,DOMWindow:W.c3,Worker:W.hF,CompositorWorkerGlobalScope:W.b3,DedicatedWorkerGlobalScope:W.b3,ServiceWorkerGlobalScope:W.b3,SharedWorkerGlobalScope:W.b3,WorkerGlobalScope:W.b3,ClientRect:W.hN,ClientRectList:W.dK,DOMRectList:W.dK,CSSRuleList:W.hP,DocumentType:W.hQ,DOMRect:W.hR,GamepadList:W.ic,HTMLFrameSetElement:W.id,NamedNodeMap:W.dM,MozNamedAttrMap:W.dM,ServiceWorker:W.ix,SpeechRecognitionResultList:W.iA,StyleSheetList:W.iE,WorkerLocation:W.iL,WorkerNavigator:W.iM,SVGAElement:P.dY,SVGAnimateElement:P.aO,SVGAnimateMotionElement:P.aO,SVGAnimateTransformElement:P.aO,SVGAnimationElement:P.aO,SVGSetElement:P.aO,SVGFEBlendElement:P.em,SVGFEColorMatrixElement:P.en,SVGFEComponentTransferElement:P.eo,SVGFECompositeElement:P.ep,SVGFEConvolveMatrixElement:P.eq,SVGFEDiffuseLightingElement:P.er,SVGFEDisplacementMapElement:P.es,SVGFEFloodElement:P.et,SVGFEGaussianBlurElement:P.eu,SVGFEImageElement:P.ev,SVGFEMergeElement:P.ew,SVGFEMorphologyElement:P.ex,SVGFEOffsetElement:P.ey,SVGFEPointLightElement:P.ez,SVGFESpecularLightingElement:P.eA,SVGFESpotLightElement:P.eB,SVGFETileElement:P.eC,SVGFETurbulenceElement:P.eD,SVGFilterElement:P.eF,SVGForeignObjectElement:P.eH,SVGCircleElement:P.ai,SVGEllipseElement:P.ai,SVGLineElement:P.ai,SVGPathElement:P.ai,SVGPolygonElement:P.ai,SVGPolylineElement:P.ai,SVGGeometryElement:P.ai,SVGClipPathElement:P.aE,SVGDefsElement:P.aE,SVGGElement:P.aE,SVGSwitchElement:P.aE,SVGGraphicsElement:P.aE,SVGImageElement:P.eO,SVGLength:P.au,SVGLengthList:P.eZ,SVGMarkerElement:P.f9,SVGMaskElement:P.fa,SVGNumber:P.av,SVGNumberList:P.ft,SVGPatternElement:P.fA,SVGPoint:P.fF,SVGPointList:P.fG,SVGRect:P.fL,SVGRectElement:P.fM,SVGScriptElement:P.bW,SVGStringList:P.ha,SVGDescElement:P.G,SVGDiscardElement:P.G,SVGFEDistantLightElement:P.G,SVGFEFuncAElement:P.G,SVGFEFuncBElement:P.G,SVGFEFuncGElement:P.G,SVGFEFuncRElement:P.G,SVGFEMergeNodeElement:P.G,SVGMetadataElement:P.G,SVGStopElement:P.G,SVGStyleElement:P.G,SVGTitleElement:P.G,SVGComponentTransferFunctionElement:P.G,SVGElement:P.G,SVGSVGElement:P.hb,SVGSymbolElement:P.hc,SVGTextContentElement:P.dC,SVGTextPathElement:P.hg,SVGTSpanElement:P.c0,SVGTextElement:P.c0,SVGTextPositioningElement:P.c0,SVGTransform:P.aw,SVGTransformList:P.hq,SVGUseElement:P.hx,SVGViewElement:P.hz,SVGViewSpec:P.hA,SVGLinearGradientElement:P.c4,SVGRadialGradientElement:P.c4,SVGGradientElement:P.c4,SVGCursorElement:P.it,SVGFEDropShadowElement:P.iu,SVGMPathElement:P.iv,AudioBuffer:P.e2,WebGLRenderingContext:P.fQ,WebGL2RenderingContext:P.fR,WebGL2RenderingContextBase:P.iK,SQLResultSetRowList:P.h0})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,Credential:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMStringMap:true,EffectModel:true,Entry:true,FederatedCredential:true,FileEntry:true,FileError:true,Stream:true,DOMFileSystem:true,FontFace:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PasswordCredential:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,ServicePort:true,SharedArrayBuffer:true,SourceInfo:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,TrackDefault:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPreserveAspectRatio:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,AudioTrack:true,AudioTrackList:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,CSSCharsetRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DocumentFragment:true,ShadowRoot:true,DOMException:true,DOMImplementation:true,DOMPoint:true,DOMPointReadOnly:false,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AudioDestinationNode:true,AudioNode:true,AudioSourceNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OfflineAudioContext:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,ImageData:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MediaStream:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Navigator:true,Attr:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Path2D:true,Perspective:true,Plugin:true,PluginArray:true,PositionValue:true,PresentationConnection:true,Range:true,Rotation:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,SharedWorker:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,CalcLength:true,KeywordValue:true,LengthValue:true,NumberValue:true,SimpleLength:true,TransformValue:true,StyleValue:false,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,Matrix:true,Skew:true,TransformComponent:false,Translation:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,SVGZoomEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,VTTRegionList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.dj.$nativeSuperclassTag="ArrayBufferView"
H.bQ.$nativeSuperclassTag="ArrayBufferView"
H.bR.$nativeSuperclassTag="ArrayBufferView"
H.dk.$nativeSuperclassTag="ArrayBufferView"
H.bP.$nativeSuperclassTag="ArrayBufferView"
H.bS.$nativeSuperclassTag="ArrayBufferView"
H.dl.$nativeSuperclassTag="ArrayBufferView"
W.bD.$nativeSuperclassTag="EventTarget"
W.bG.$nativeSuperclassTag="EventTarget"
W.bC.$nativeSuperclassTag="EventTarget"
W.bF.$nativeSuperclassTag="EventTarget"
W.bB.$nativeSuperclassTag="EventTarget"
W.bE.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.ls(U.la(),b)},[])
else (function(b){H.ls(U.la(),b)})([])})})()