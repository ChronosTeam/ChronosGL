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
a[c]=function(){a[c]=function(){H.o2(b)}
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
return d?function(e){if(t===null)t=H.jQ(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.jQ(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.jQ(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={jz:function jz(a){this.a=a},
jF:function(a,b,c,d){if(!!a.$isd)return new H.el(a,b,[c,d])
return new H.dn(a,b,[c,d])},
dh:function(){return new P.aw("No element")},
mS:function(){return new P.aw("Too many elements")},
mR:function(){return new P.aw("Too few elements")},
dE:function(a,b,c,d){if(c-b<=32)H.n5(a,b,c,d)
else H.n4(a,b,c,d)},
n5:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.a2(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.ar(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.j(a,q,s.h(a,p))
q=p}s.j(a,q,r)}},
n4:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.c(t>32)
s=C.b.L(t+1,6)
r=a3+s
q=a4-s
p=C.b.L(a3+a4,2)
o=p-s
n=p+s
t=J.a2(a2)
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
H.dE(a2,a3,g-2,a5)
H.dE(a2,f+2,a4,a5)
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
break}}H.dE(a2,g,f,a5)}else H.dE(a2,g,f,a5)},
d:function d(){},
bj:function bj(){},
dm:function dm(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
dn:function dn(a,b,c){this.a=a
this.b=b
this.$ti=c},
el:function el(a,b,c){this.a=a
this.b=b
this.$ti=c},
f8:function f8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bN:function bN(a,b,c){this.a=a
this.b=b
this.$ti=c},
dM:function dM(a,b,c){this.a=a
this.b=b
this.$ti=c},
hB:function hB(a,b,c){this.a=a
this.b=b
this.$ti=c},
cy:function cy(){},
dT:function(a,b){var t=a.ao(b)
if(!u.globalState.d.cy)u.globalState.f.at()
return t},
j6:function(){--u.globalState.f.b
H.c(u.globalState.f.b>=0)},
lz:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.w(s).$isb)throw H.e(P.e2("Arguments to main must be a List: "+H.i(s)))
u.globalState=new H.il(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$kE()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.hT(P.jD(null,H.b7),0)
r=P.o
s.seS(new H.ak(0,null,null,null,null,null,0,[r,H.b6]))
s.seU(new H.ak(0,null,null,null,null,null,0,[r,null]))
if(s.x){q=new H.ik()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.mM,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.nk)}if(u.globalState.x)return
s=u.globalState.a++
q=P.al(null,null,null,r)
p=new H.bl(0,null,!1)
o=new H.b6(s,new H.ak(0,null,null,null,null,null,0,[r,H.bl]),q,u.createNewIsolate(),p,new H.at(H.jd()),new H.at(H.jd()),!1,!1,[],P.al(null,null,null,null),null,null,!1,!0,P.al(null,null,null,null))
q.i(0,0)
o.bK(0,p)
u.globalState.e=o
u.globalState.z.j(0,s,o)
u.globalState.d=o
if(H.bw(a,{func:1,args:[,]}))o.ao(new H.jj(t,a))
else if(H.bw(a,{func:1,args:[,,]}))o.ao(new H.jk(t,a))
else o.ao(a)
u.globalState.f.at()},
nk:function(a){var t=P.aZ(["command","print","msg",a])
return new H.ao(!0,P.ca(null,P.o)).N(t)},
mO:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.mP()
return},
mP:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.e(new P.x("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.e(new P.x('Cannot extract URI from "'+t+'"'))},
mM:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.b5(!0,[]).a0(b.data)
s=J.a2(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.nP(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.b5(!0,[]).a0(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.b5(!0,[]).a0(s.h(t,"replyTo"))
s=u.globalState.a++
k=P.o
j=P.al(null,null,null,k)
i=new H.bl(0,null,!1)
h=new H.b6(s,new H.ak(0,null,null,null,null,null,0,[k,H.bl]),j,u.createNewIsolate(),i,new H.at(H.jd()),new H.at(H.jd()),!1,!1,[],P.al(null,null,null,null),null,null,!1,!0,P.al(null,null,null,null))
j.i(0,0)
h.bK(0,i)
u.globalState.f.a.Y(0,new H.b7(h,new H.eV(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.at()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.mc(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.at()
break
case"close":u.globalState.ch.as(0,$.$get$kF().h(0,a))
a.terminate()
u.globalState.f.at()
break
case"log":H.mL(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
k=P.aZ(["command","print","msg",t])
k=new H.ao(!0,P.ca(null,P.o)).N(k)
s.toString
self.postMessage(k)}else P.aq(s.h(t,"msg"))
break
case"error":throw H.e(s.h(t,"msg"))}},
mL:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aZ(["command","log","msg",a])
r=new H.ao(!0,P.ca(null,P.o)).N(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.R(q)
t=H.ap(q)
s=P.cx(t)
throw H.e(s)}},
mN:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.kK=$.kK+("_"+s)
$.kL=$.kL+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.K(0,["spawned",new H.br(s,r),q,t.r])
r=new H.eW(a,b,c,d,t)
if(e){t.c4(q,q)
u.globalState.f.a.Y(0,new H.b7(t,r,"start isolate"))}else r.$0()},
n6:function(a,b){var t=new H.hj(!0,!1,null)
t.dC(a,b)
return t},
nm:function(a){return new H.b5(!0,[]).a0(new H.ao(!1,P.ca(null,P.o)).N(a))},
jj:function jj(a,b){this.a=a
this.b=b},
jk:function jk(a,b){this.a=a
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
b6:function b6(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
ie:function ie(a,b){this.a=a
this.b=b},
hT:function hT(a,b){this.a=a
this.b=b},
hU:function hU(a){this.a=a},
b7:function b7(a,b,c){this.a=a
this.b=b
this.c=c},
ik:function ik(){},
eV:function eV(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eW:function eW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hL:function hL(){},
br:function br(a,b){this.b=a
this.a=b},
im:function im(a,b){this.a=a
this.b=b},
cc:function cc(a,b,c){this.b=a
this.c=b
this.a=c},
bl:function bl(a,b,c){this.a=a
this.b=b
this.c=c},
hj:function hj(a,b,c){this.a=a
this.b=b
this.c=c},
hk:function hk(a,b){this.a=a
this.b=b},
hl:function hl(a,b){this.a=a
this.b=b},
at:function at(a){this.a=a},
ao:function ao(a,b){this.a=a
this.b=b},
b5:function b5(a,b){this.a=a
this.b=b},
nI:function(a){return u.types[a]},
nR:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.w(a).$ist},
i:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aC(a)
if(typeof t!=="string")throw H.e(H.X(a))
return t},
n2:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.fL(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
b_:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
dA:function(a){var t,s,r,q,p,o,n,m
t=J.w(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.D||!!J.w(a).$isb2){p=C.u(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.e.aT(q,0)===36)q=C.e.dd(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.dV(H.iV(a),0,null),u.mangledGlobalNames)},
fH:function(a){return"Instance of '"+H.dA(a)+"'"},
U:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
n0:function(a){return a.b?H.U(a).getUTCFullYear()+0:H.U(a).getFullYear()+0},
mZ:function(a){return a.b?H.U(a).getUTCMonth()+1:H.U(a).getMonth()+1},
mV:function(a){return a.b?H.U(a).getUTCDate()+0:H.U(a).getDate()+0},
mW:function(a){return a.b?H.U(a).getUTCHours()+0:H.U(a).getHours()+0},
mY:function(a){return a.b?H.U(a).getUTCMinutes()+0:H.U(a).getMinutes()+0},
n_:function(a){return a.b?H.U(a).getUTCSeconds()+0:H.U(a).getSeconds()+0},
mX:function(a){return a.b?H.U(a).getUTCMilliseconds()+0:H.U(a).getMilliseconds()+0},
kJ:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.X(a))
return a[b]},
T:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ai(!0,b,"index",null)
t=J.dZ(a)
if(b<0||C.b.cX(b,t))return P.D(b,a,"index",null,t)
return P.fI(b,"index",null)},
X:function(a){return new P.ai(!0,a,null,null)},
e:function(a){var t
if(a==null)a=new P.bW()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.lD})
t.name=""}else t.toString=H.lD
return t},
lD:function(){return J.aC(this.dartException)},
K:function(a){throw H.e(a)},
F:function(a){throw H.e(new P.a5(a))},
ay:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.hq(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
hr:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
kV:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
jB:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.f0(a,s,t?null:b.receiver)},
R:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.jl(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.b1(r,16)&8191)===10)switch(q){case 438:return t.$1(H.jB(H.i(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.i(s)+" (Error "+q+")"
return t.$1(new H.dz(p,null))}}if(a instanceof TypeError){o=$.$get$kP()
n=$.$get$kQ()
m=$.$get$kR()
l=$.$get$kS()
k=$.$get$kW()
j=$.$get$kX()
i=$.$get$kU()
$.$get$kT()
h=$.$get$kZ()
g=$.$get$kY()
f=o.S(s)
if(f!=null)return t.$1(H.jB(s,f))
else{f=n.S(s)
if(f!=null){f.method="call"
return t.$1(H.jB(s,f))}else{f=m.S(s)
if(f==null){f=l.S(s)
if(f==null){f=k.S(s)
if(f==null){f=j.S(s)
if(f==null){f=i.S(s)
if(f==null){f=l.S(s)
if(f==null){f=h.S(s)
if(f==null){f=g.S(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.dz(s,f==null?null:f.method))}}return t.$1(new H.ht(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.dF()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.ai(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.dF()
return a},
ap:function(a){var t
if(a==null)return new H.dR(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dR(a,null)},
nV:function(a){if(a==null||typeof a!='object')return J.as(a)
else return H.b_(a)},
nG:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.c(t)
s=a.length
for(r=0;r<s;){q=r+1
H.c(t)
p=a[r]
r=q+1
H.c(t)
b.j(0,p,a[q])}return b},
nQ:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dT(b,new H.j1(a))
case 1:return H.dT(b,new H.j2(a,d))
case 2:return H.dT(b,new H.j3(a,d,e))
case 3:return H.dT(b,new H.j4(a,d,e,f))
case 4:return H.dT(b,new H.j5(a,d,e,f,g))}throw H.e(P.cx("Unsupported number of arguments for wrapped closure"))},
bv:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.nQ)
a.$identity=t
return t},
mt:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.w(c).$isb){t.$reflectionInfo=c
r=H.n2(t).r}else r=c
q=d?Object.create(new H.h_().constructor.prototype):Object.create(new H.bA(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.kl(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.nI,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.ki:H.ju
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.e("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.kl(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
mq:function(a,b,c,d){var t=H.ju
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
kl:function(a,b,c){var t,s,r,q
if(c)return H.ms(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.mq(s,b==null?r!=null:b!==r,t,b)
return q},
mr:function(a,b,c,d){var t,s
t=H.ju
s=H.ki
switch(b?-1:a){case 0:throw H.e(new H.fR("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
ms:function(a,b){var t,s,r,q
H.mp()
t=$.kh
if(t==null){t=H.kg("receiver")
$.kh=t}s=b.$stubName
r=b.length
q=a[s]
t=H.mr(r,b==null?q!=null:b!==q,s,b)
return t},
jQ:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.w(c).$isb){c.fixed$length=Array
t=c}else t=c
return H.mt(a,b,t,!!d,e,f)},
ju:function(a){return a.a},
ki:function(a){return a.c},
mp:function(){var t=$.kj
if(t==null){t=H.kg("self")
$.kj=t}return t},
kg:function(a){var t,s,r,q,p
t=new H.bA("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
of:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.az(a,"String"))},
a1:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.az(a,"double"))},
oe:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.az(a,"num"))},
nz:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.az(a,"bool"))},
nP:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.az(a,"int"))},
nX:function(a,b){throw H.e(H.az(a,b.substring(3)))},
nW:function(a,b){var t=J.a2(b)
throw H.e(H.kk(H.dA(a),t.by(b,3,t.gl(b))))},
jT:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.w(a)[b])return a
H.nX(a,b)},
aN:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.w(a)[b]
else t=!0
if(t)return a
H.nW(a,b)},
od:function(a){if(a==null)return a
if(!!J.w(a).$isb)return a
throw H.e(H.az(a,"List"))},
lm:function(a){var t=J.w(a)
return"$S" in t?t.$S():null},
bw:function(a,b){var t
if(a==null)return!1
t=H.lm(a)
return t==null?!1:H.lt(t,b)},
ob:function(a,b){var t,s
if(a==null)return a
if($.jN)return a
$.jN=!0
try{if(H.bw(a,b))return a
t=H.aO(b,null)
s=H.az(a,t)
throw H.e(s)}finally{$.jN=!1}},
az:function(a,b){return new H.hs("type '"+H.dA(a)+"' is not a subtype of type '"+b+"'")},
kk:function(a,b){return new H.e7("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
aM:function(a){if(!0===a)return!1
if(!!J.w(a).$isjx)a=a.$0()
if(typeof a==="boolean")return!a
throw H.e(H.az(a,"bool"))},
b9:function(a){throw H.e(new H.hE(a))},
c:function(a){if(H.aM(a))throw H.e(new P.cn(null))},
o2:function(a){throw H.e(new P.eb(a))},
jd:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
lq:function(a){return u.getIsolateTag(a)},
P:function(a){return new H.aJ(a,null)},
E:function(a,b){H.c(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
iV:function(a){if(a==null)return
return a.$ti},
lr:function(a,b){return H.jY(a["$as"+H.i(b)],H.iV(a))},
ah:function(a,b,c){var t,s
t=H.lr(a,b)
if(t==null)s=null
else{H.c(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
aB:function(a,b){var t,s
t=H.iV(a)
if(t==null)s=null
else{H.c(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
aO:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.c(!0)
H.c(!0)
return a[0].name+H.dV(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.i(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aO(t,b)
return H.no(a,b)}return"unknown-reified-type"},
no:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aO(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aO(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aO(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.nF(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aO(l[j],b)+(" "+H.i(j))}q+="}"}return"("+q+") => "+t},
dV:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.c(t)
s=new P.c1("")
for(r=b,q=!0,p=!0;H.c(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.c(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aO(o,c)}return p?"":"<"+s.k(0)+">"},
iW:function(a){var t,s
if(a instanceof H.bb){t=H.lm(a)
if(t!=null)return H.aO(t,null)}s=J.w(a).constructor.name
if(a==null)return s
return s+H.dV(a.$ti,0,null)},
jY:function(a,b){if(a==null)return b
H.c(typeof a=="function")
H.c(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.jU(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.jU(a,null,b)
return b},
cg:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.iV(a)
s=J.w(a)
if(s[b]==null)return!1
return H.lh(H.jY(s[d],t),c)},
dW:function(a,b,c,d){if(a==null)return a
if(H.cg(a,b,c,d))return a
throw H.e(H.kk(H.dA(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dV(c,0,null),u.mangledGlobalNames)))},
o9:function(a,b,c,d){if(a==null)return a
if(H.cg(a,b,c,d))return a
throw H.e(H.az(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dV(c,0,null),u.mangledGlobalNames)))},
lh:function(a,b){var t,s,r,q,p
if(a==null||b==null)return!0
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.c(t)
s=typeof b==="object"&&b!==null&&b.constructor===Array
H.c(s)
H.c(t)
r=a.length
H.c(s)
H.c(r===b.length)
H.c(t)
q=a.length
for(p=0;p<q;++p){H.c(t)
r=a[p]
H.c(s)
if(!H.a3(r,b[p]))return!1}return!0},
nC:function(a,b,c){return H.jU(a,b,H.lr(b,c))},
a3:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.name==="aI")return!0
if('func' in b)return H.lt(a,b)
if('func' in a)return b.name==="jx"||b.name==="r"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.c(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.c(!0)
q=b[0]}else q=b
if(q!==s){p=H.aO(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.lh(H.jY(o,t),r)},
lg:function(a,b,c){var t,s,r,q,p,o,n
t=b==null
if(t&&a==null)return!0
if(t)return c
if(a==null)return!1
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.c(t)
s=typeof b==="object"&&b!==null&&b.constructor===Array
H.c(s)
H.c(t)
r=a.length
H.c(s)
q=b.length
if(c){if(r<q)return!1}else if(r!==q)return!1
for(p=0;p<q;++p){H.c(t)
o=a[p]
H.c(s)
n=b[p]
if(!(H.a3(o,n)||H.a3(n,o)))return!1}return!0},
nv:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
H.c(typeof a=='object')
H.c(typeof b=='object')
t=Object.getOwnPropertyNames(b)
t.fixed$length=Array
s=t
for(t=s.length,r=0;r<t;++r){q=s[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.a3(p,o)||H.a3(o,p)))return!1}return!0},
lt:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.c('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.a3(t,s)||H.a3(s,t)))return!1}r=a.args
q=b.args
p=a.opt
o=b.opt
if(r!=null){H.c(typeof r==="object"&&r!==null&&r.constructor===Array)
n=r.length}else n=0
if(q!=null){H.c(typeof q==="object"&&q!==null&&q.constructor===Array)
m=q.length}else m=0
if(p!=null){H.c(typeof p==="object"&&p!==null&&p.constructor===Array)
l=p.length}else l=0
if(o!=null){H.c(typeof o==="object"&&o!==null&&o.constructor===Array)
k=o.length}else k=0
if(n>m)return!1
if(n+l<m+k)return!1
if(n===m){if(!H.lg(r,q,!1))return!1
if(!H.lg(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.c(j)
g=r[h]
H.c(i)
f=q[h]
if(!(H.a3(g,f)||H.a3(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.c(j)
g=p[d]
H.c(i)
f=q[e]
if(!(H.a3(g,f)||H.a3(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.c(j)
g=p[d]
H.c(i)
f=o[e]
if(!(H.a3(g,f)||H.a3(f,g)))return!1}}return H.nv(a.named,b.named)},
jU:function(a,b,c){H.c(typeof a=="function")
H.c(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
og:function(a){var t=$.jR
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
oc:function(a){return H.b_(a)},
oa:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nS:function(a){var t,s,r,q,p,o
H.c(!(a instanceof P.r))
t=$.jR.$1(a)
s=$.iT[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.j0[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.lf.$2(a,t)
if(t!=null){s=$.iT[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.j0[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.jV(r)
$.iT[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.j0[t]=r
return r}if(p==="-"){o=H.jV(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.lv(a,r)
if(p==="*")throw H.e(new P.dL(t))
if(u.leafTags[t]===true){o=H.jV(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.lv(a,r)},
lv:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.ja(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
jV:function(a){return J.ja(a,!1,null,!!a.$ist)},
nU:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.ja(t,!1,null,!!t.$ist)
else return J.ja(t,c,null,null)},
nN:function(){if(!0===$.jS)return
$.jS=!0
H.nO()},
nO:function(){var t,s,r,q,p,o,n,m
$.iT=Object.create(null)
$.j0=Object.create(null)
H.nM()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.ly.$1(p)
if(o!=null){n=H.nU(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
nM:function(){var t,s,r,q,p,o,n
t=C.H()
t=H.bu(C.E,H.bu(C.J,H.bu(C.t,H.bu(C.t,H.bu(C.I,H.bu(C.F,H.bu(C.G(C.u),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.jR=new H.iY(p)
$.lf=new H.iZ(o)
$.ly=new H.j_(n)},
bu:function(a,b){return a(b)||b},
o1:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
fL:function fL(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
hq:function hq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dz:function dz(a,b){this.a=a
this.b=b},
f0:function f0(a,b,c){this.a=a
this.b=b
this.c=c},
ht:function ht(a){this.a=a},
jl:function jl(a){this.a=a},
dR:function dR(a,b){this.a=a
this.b=b},
j1:function j1(a){this.a=a},
j2:function j2(a,b){this.a=a
this.b=b},
j3:function j3(a,b,c){this.a=a
this.b=b
this.c=c},
j4:function j4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j5:function j5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bb:function bb(){},
hd:function hd(){},
h_:function h_(){},
bA:function bA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hs:function hs(a){this.a=a},
e7:function e7(a){this.a=a},
fR:function fR(a){this.a=a},
hE:function hE(a){this.a=a},
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
f_:function f_(a){this.a=a},
f2:function f2(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
f3:function f3(a,b){this.a=a
this.$ti=b},
f4:function f4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
iY:function iY(a){this.a=a},
iZ:function iZ(a){this.a=a},
j_:function j_(a){this.a=a},
f:function(a){return a},
iM:function(a){var t,s,r
if(!!J.w(a).$isp)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
bQ:function bQ(){},
bk:function bk(){},
fg:function fg(){},
ds:function ds(){},
dt:function dt(){},
du:function du(){},
dr:function dr(){},
fh:function fh(){},
fi:function fi(){},
fj:function fj(){},
fk:function fk(){},
fl:function fl(){},
fm:function fm(){},
dv:function dv(){},
fn:function fn(){},
bR:function bR(){},
bS:function bS(){},
bT:function bT(){},
bU:function bU(){},
nF:function(a){var t=H.E(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
jc:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
w:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dk.prototype
return J.dj.prototype}if(typeof a=="string")return J.aW.prototype
if(a==null)return J.eZ.prototype
if(typeof a=="boolean")return J.eY.prototype
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aX.prototype
return a}if(a instanceof P.r)return a
return J.iU(a)},
ja:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iU:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.jS==null){H.nN()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.e(new P.dL("Return interceptor for "+H.i(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$jA()]
if(p!=null)return p
p=H.nS(a)
if(p!=null)return p
if(typeof a=="function")return C.K
s=Object.getPrototypeOf(a)
if(s==null)return C.x
if(s===Object.prototype)return C.x
if(typeof q=="function"){Object.defineProperty(q,$.$get$jA(),{value:C.n,enumerable:false,writable:true,configurable:true})
return C.n}return C.n},
a2:function(a){if(typeof a=="string")return J.aW.prototype
if(a==null)return a
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aX.prototype
return a}if(a instanceof P.r)return a
return J.iU(a)},
ci:function(a){if(a==null)return a
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aX.prototype
return a}if(a instanceof P.r)return a
return J.iU(a)},
lo:function(a){if(typeof a=="number")return J.bi.prototype
if(a==null)return a
if(!(a instanceof P.r))return J.b2.prototype
return a},
nH:function(a){if(typeof a=="number")return J.bi.prototype
if(typeof a=="string")return J.aW.prototype
if(a==null)return a
if(!(a instanceof P.r))return J.b2.prototype
return a},
lp:function(a){if(typeof a=="string")return J.aW.prototype
if(a==null)return a
if(!(a instanceof P.r))return J.b2.prototype
return a},
m:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aX.prototype
return a}if(a instanceof P.r)return a
return J.iU(a)},
I:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.w(a).A(a,b)},
ar:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.lo(a).av(a,b)},
lE:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.lo(a).aN(a,b)},
bx:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nR(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.a2(a).h(a,b)},
lF:function(a,b,c,d){return J.m(a).dM(a,b,c,d)},
jZ:function(a,b){return J.lp(a).aT(a,b)},
by:function(a,b){return J.m(a).e4(a,b)},
lG:function(a,b,c,d){return J.m(a).e5(a,b,c,d)},
lH:function(a,b,c){return J.m(a).e6(a,b,c)},
k_:function(a,b){return J.m(a).c3(a,b)},
jm:function(a,b){return J.m(a).V(a,b)},
k0:function(a,b,c){return J.m(a).c6(a,b,c)},
lI:function(a,b){return J.m(a).ek(a,b)},
dX:function(a,b,c){return J.m(a).c7(a,b,c)},
lJ:function(a,b,c){return J.m(a).c8(a,b,c)},
cl:function(a,b,c){return J.m(a).c9(a,b,c)},
dY:function(a,b){return J.m(a).en(a,b)},
lK:function(a,b){return J.m(a).ca(a,b)},
lL:function(a,b,c){return J.m(a).cb(a,b,c)},
k1:function(a,b,c,d){return J.m(a).cc(a,b,c,d)},
lM:function(a,b){return J.ci(a).cd(a,b)},
lN:function(a,b,c,d,e){return J.m(a).ce(a,b,c,d,e)},
lO:function(a,b){return J.nH(a).W(a,b)},
jn:function(a,b,c){return J.a2(a).er(a,b,c)},
jo:function(a){return J.m(a).cg(a)},
lP:function(a){return J.m(a).ci(a)},
lQ:function(a){return J.m(a).cl(a)},
k2:function(a){return J.m(a).ey(a)},
lR:function(a,b){return J.m(a).cm(a,b)},
jp:function(a,b){return J.m(a).cn(a,b)},
lS:function(a,b,c,d){return J.m(a).co(a,b,c,d)},
lT:function(a,b,c,d,e){return J.m(a).eF(a,b,c,d,e)},
lU:function(a,b,c,d,e){return J.m(a).cp(a,b,c,d,e)},
lV:function(a,b,c,d,e,f){return J.m(a).eG(a,b,c,d,e,f)},
lW:function(a,b){return J.ci(a).u(a,b)},
cm:function(a,b){return J.m(a).cq(a,b)},
lX:function(a,b){return J.m(a).cr(a,b)},
lY:function(a){return J.m(a).eH(a)},
lZ:function(a,b){return J.ci(a).aF(a,b)},
m_:function(a){return J.m(a).gej(a)},
as:function(a){return J.w(a).gw(a)},
bz:function(a){return J.ci(a).gB(a)},
dZ:function(a){return J.a2(a).gl(a)},
m0:function(a){return J.m(a).gbg(a)},
m1:function(a){return J.w(a).gD(a)},
m2:function(a){return J.m(a).gf4(a)},
m3:function(a){return J.m(a).gaK(a)},
jq:function(a){return J.m(a).gm(a)},
jr:function(a){return J.m(a).gn(a)},
k3:function(a){return J.m(a).gO(a)},
js:function(a,b){return J.m(a).ad(a,b)},
m4:function(a){return J.m(a).aM(a)},
m5:function(a){return J.m(a).bn(a)},
m6:function(a,b){return J.m(a).bo(a,b)},
m7:function(a,b,c){return J.m(a).bp(a,b,c)},
k4:function(a,b,c){return J.m(a).bs(a,b,c)},
m8:function(a,b){return J.m(a).ct(a,b)},
m9:function(a,b){return J.ci(a).cw(a,b)},
ma:function(a,b,c){return J.m(a).cA(a,b,c)},
mb:function(a){return J.ci(a).eZ(a)},
mc:function(a,b){return J.m(a).K(a,b)},
md:function(a,b,c,d){return J.m(a).bx(a,b,c,d)},
me:function(a,b,c,d,e,f,g){return J.m(a).cE(a,b,c,d,e,f,g)},
mf:function(a,b,c,d){return J.m(a).cF(a,b,c,d)},
k5:function(a,b,c,d){return J.m(a).cG(a,b,c,d)},
mg:function(a){return J.lp(a).f7(a)},
aC:function(a){return J.w(a).k(a)},
mh:function(a,b,c,d){return J.m(a).f9(a,b,c,d)},
mi:function(a,b,c){return J.m(a).cH(a,b,c)},
mj:function(a,b,c){return J.m(a).cI(a,b,c)},
jt:function(a,b,c){return J.m(a).cJ(a,b,c)},
mk:function(a,b,c){return J.m(a).cK(a,b,c)},
k6:function(a,b,c){return J.m(a).cL(a,b,c)},
k7:function(a,b,c){return J.m(a).cM(a,b,c)},
k8:function(a,b,c){return J.m(a).cN(a,b,c)},
k9:function(a,b,c,d){return J.m(a).cO(a,b,c,d)},
ka:function(a,b,c,d){return J.m(a).cP(a,b,c,d)},
ml:function(a,b){return J.m(a).cR(a,b)},
mm:function(a,b,c){return J.m(a).fa(a,b,c)},
kb:function(a,b,c,d,e,f,g){return J.m(a).cT(a,b,c,d,e,f,g)},
mn:function(a,b,c,d,e){return J.m(a).cU(a,b,c,d,e)},
a:function a(){},
eY:function eY(){},
eZ:function eZ(){},
bM:function bM(){},
fB:function fB(){},
b2:function b2(){},
aX:function aX(){},
aV:function aV(a){this.$ti=a},
jy:function jy(a){this.$ti=a},
e3:function e3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bi:function bi(){},
dk:function dk(){},
dj:function dj(){},
aW:function aW(){}},P={
na:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.nw()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.bv(new P.hH(t),1)).observe(s,{childList:true})
return new P.hG(t,s,r)}else if(self.setImmediate!=null)return P.nx()
return P.ny()},
nb:function(a){++u.globalState.f.b
self.scheduleImmediate(H.bv(new P.hI(a),0))},
nc:function(a){++u.globalState.f.b
self.setImmediate(H.bv(new P.hJ(a),0))},
nd:function(a){P.jJ(C.q,a)},
nr:function(a,b){if(H.bw(a,{func:1,args:[P.aI,P.aI]})){b.toString
return a}else{b.toString
return a}},
mH:function(a,b,c){var t
if(a==null)a=new P.bW()
t=$.y
if(t!==C.d)t.toString
t=new P.O(0,t,null,[c])
t.dN(a,b)
return t},
mI:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.O(0,$.y,null,[P.b])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.eN(t,!1,b,s)
try{for(m=0,l=0;m<3;++m){q=a[m]
p=l
q.bk(new P.eM(t,!1,b,s,p),r)
l=++t.b}if(l===0){l=new P.O(0,$.y,null,[null])
l.bL(C.v)
return l}k=new Array(l)
k.fixed$length=Array
t.a=k}catch(j){o=H.R(j)
n=H.ap(j)
if(t.b===0||!1)return P.mH(o,n,null)
else{t.c=o
t.d=n}}return s},
nn:function(a,b,c){$.y.toString
a.U(b,c)},
nf:function(a,b){var t=new P.O(0,$.y,null,[b])
H.c(!0)
t.a=4
t.c=a
return t},
l6:function(a,b){var t,s,r
H.c(b.a<4)
H.c(!(a instanceof P.O))
H.c(b.a===0)
b.a=1
try{a.bk(new P.i2(b),new P.i3(b))}catch(r){t=H.R(r)
s=H.ap(r)
P.nY(new P.i4(b,t,s))}},
i1:function(a,b){var t,s,r,q
H.c(b.a<=1)
for(;t=a.a,s=t===2,s;){H.c(s)
a=a.c}s=b.a
if(t>=4){H.c(s<4)
r=b.c
b.c=null
q=b.am(r)
H.c(b.a<4)
H.c(a.a>=4)
b.a=a.a
b.c=a.c
P.bq(b,q)}else{q=b.c
H.c(s<=1)
b.a=2
b.c=a
a.bY(q)}},
bq:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t={}
t.a=a
for(s=a;!0;){r={}
H.c(s.a>=4)
s=t.a
q=s.a===8
if(b==null){if(q){H.c(!0)
s=s.c
p=t.a.b
o=s.a
s=s.b
p.toString
P.iN(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bq(t.a,b)}s=t.a
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
if(k){H.c(s.a===8)
s=s.c
p=t.a.b
o=s.a
s=s.b
p.toString
P.iN(null,null,p,o,s)
return}s=$.y
if(s==null?l!=null:s!==l){H.c(l!=null)
s=$.y
H.c(l==null?s!=null:l!==s)
j=$.y
$.y=l
i=j}else i=null
s=b.c
if(s===8)new P.i9(t,r,q,b).$0()
else if(p){if((s&1)!==0)new P.i8(r,b,m).$0()}else if((s&2)!==0)new P.i7(t,r,b).$0()
if(i!=null){H.c(!0)
$.y=i}s=r.b
if(!!J.w(s).$isaT){if(s.a>=4){H.c(o.a<4)
h=o.c
o.c=null
b=o.am(h)
H.c(o.a<4)
H.c(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.i1(s,o)
return}}g=b.b
H.c(g.a<4)
h=g.c
g.c=null
b=g.am(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.c(!o)
g.a=4
g.c=p}else{H.c(!o)
g.a=8
g.c=p}t.a=g
s=g}},
nq:function(){var t,s
for(;t=$.bs,t!=null;){$.ce=null
s=t.b
$.bs=s
if(s==null)$.cd=null
t.a.$0()}},
nu:function(){$.jO=!0
try{P.nq()}finally{$.ce=null
$.jO=!1
if($.bs!=null)$.$get$jL().$1(P.li())}},
ld:function(a){var t=new P.dN(a,null)
if($.bs==null){$.cd=t
$.bs=t
if(!$.jO)$.$get$jL().$1(P.li())}else{$.cd.b=t
$.cd=t}},
nt:function(a){var t,s,r
t=$.bs
if(t==null){P.ld(a)
$.ce=$.cd
return}s=new P.dN(a,null)
r=$.ce
if(r==null){s.b=t
$.ce=s
$.bs=s}else{s.b=r.b
r.b=s
$.ce=s
if(s.b==null)$.cd=s}},
nY:function(a){var t=$.y
if(C.d===t){P.bt(null,null,C.d,a)
return}t.toString
P.bt(null,null,t,t.b9(a))},
nl:function(a,b,c){var t=a.eo(0)
if(!!J.w(t).$isaT&&t!==$.$get$kA())t.fb(new P.iL(b,c))
else b.aj(c)},
n7:function(a,b){var t=$.y
if(t===C.d){t.toString
return P.jJ(a,b)}return P.jJ(a,t.b9(b))},
jJ:function(a,b){var t=C.b.L(a.a,1000)
return H.n6(t<0?0:t,b)},
jK:function(a){var t,s
H.c(a!=null)
t=$.y
H.c(a==null?t!=null:a!==t)
s=$.y
$.y=a
return s},
iN:function(a,b,c,d,e){var t={}
t.a=d
P.nt(new P.iO(t,e))},
lb:function(a,b,c,d){var t,s
if($.y===c)return d.$0()
t=P.jK(c)
try{s=d.$0()
return s}finally{s=t
H.c(s!=null)
$.y=s}},
lc:function(a,b,c,d,e){var t,s
if($.y===c)return d.$1(e)
t=P.jK(c)
try{s=d.$1(e)
return s}finally{s=t
H.c(s!=null)
$.y=s}},
ns:function(a,b,c,d,e,f){var t,s
if($.y===c)return d.$2(e,f)
t=P.jK(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.c(s!=null)
$.y=s}},
bt:function(a,b,c,d){var t=C.d!==c
if(t)d=!(!t||!1)?c.b9(d):c.el(d)
P.ld(d)},
hH:function hH(a){this.a=a},
hG:function hG(a,b,c){this.a=a
this.b=b
this.c=c},
hI:function hI(a){this.a=a},
hJ:function hJ(a){this.a=a},
eN:function eN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eM:function eM(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hN:function hN(){},
hF:function hF(a,b){this.a=a
this.$ti=b},
iD:function iD(a,b){this.a=a
this.$ti=b},
c6:function c6(a,b,c,d,e,f){var _=this
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
hZ:function hZ(a,b){this.a=a
this.b=b},
i6:function i6(a,b){this.a=a
this.b=b},
i2:function i2(a){this.a=a},
i3:function i3(a){this.a=a},
i4:function i4(a,b,c){this.a=a
this.b=b
this.c=c},
i0:function i0(a,b){this.a=a
this.b=b},
i5:function i5(a,b){this.a=a
this.b=b},
i_:function i_(a,b,c){this.a=a
this.b=b
this.c=c},
i9:function i9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ia:function ia(a){this.a=a},
i8:function i8(a,b,c){this.a=a
this.b=b
this.c=c},
i7:function i7(a,b,c){this.a=a
this.b=b
this.c=c},
dN:function dN(a,b){this.a=a
this.b=b},
c0:function c0(){},
h6:function h6(a){this.a=a},
h7:function h7(a,b){this.a=a
this.b=b},
h4:function h4(a,b,c){this.a=a
this.b=b
this.c=c},
h5:function h5(a){this.a=a},
h3:function h3(){},
iL:function iL(a,b){this.a=a
this.b=b},
ba:function ba(a,b){this.a=a
this.b=b},
iK:function iK(){},
iO:function iO(a,b){this.a=a
this.b=b},
ip:function ip(){},
ir:function ir(a,b){this.a=a
this.b=b},
iq:function iq(a,b){this.a=a
this.b=b},
is:function is(a,b){this.a=a
this.b=b},
kH:function(a,b){return new H.ak(0,null,null,null,null,null,0,[a,b])},
G:function(){return new H.ak(0,null,null,null,null,null,0,[null,null])},
aZ:function(a){return H.nG(a,new H.ak(0,null,null,null,null,null,0,[null,null]))},
ca:function(a,b){return new P.dP(0,null,null,null,null,null,0,[a,b])},
nj:function(){var t=Object.create(null)
H.c(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
mQ:function(a,b,c){var t,s
if(P.jP(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$cf()
C.a.i(s,a)
try{P.np(a,t)}finally{H.c(C.a.gaI(s)===a)
s.pop()}s=P.kO(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eX:function(a,b,c){var t,s,r
if(P.jP(a))return b+"..."+c
t=new P.c1(b)
s=$.$get$cf()
C.a.i(s,a)
try{r=t
r.a=P.kO(r.ga9(),a,", ")}finally{H.c(C.a.gaI(s)===a)
s.pop()}s=t
s.a=s.ga9()+c
s=t.ga9()
return s.charCodeAt(0)==0?s:s},
jP:function(a){var t,s
for(t=0;s=$.$get$cf(),t<s.length;++t)if(a===s[t])return!0
return!1},
np:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gB(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.q())return
q=H.i(t.gt())
C.a.i(b,q)
s+=q.length+2;++r}if(!t.q()){if(r<=5)return
p=b.pop()
o=b.pop()}else{n=t.gt();++r
if(!t.q()){if(r<=4){C.a.i(b,H.i(n))
return}p=H.i(n)
o=b.pop()
s+=p.length+2}else{m=t.gt();++r
H.c(r<100)
for(;t.q();n=m,m=l){l=t.gt();++r
if(r>100){while(!0){if(!(s>75&&r>3))break
s-=b.pop().length+2;--r}C.a.i(b,"...")
return}}o=H.i(n)
p=H.i(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)C.a.i(b,k)
C.a.i(b,o)
C.a.i(b,p)},
al:function(a,b,c,d){return new P.ih(0,null,null,null,null,null,0,[d])},
jC:function(a,b){var t,s
t=P.al(null,null,null,b)
for(s=J.bz(a);s.q();)t.i(0,s.gt())
return t},
mT:function(a){var t,s,r
t={}
if(P.jP(a))return"{...}"
s=new P.c1("")
try{C.a.i($.$get$cf(),a)
r=s
r.a=r.ga9()+"{"
t.a=!0
a.aF(0,new P.f9(t,s))
t=s
t.a=t.ga9()+"}"}finally{t=$.$get$cf()
H.c(C.a.gaI(t)===a)
t.pop()}t=s.ga9()
return t.charCodeAt(0)==0?t:t},
jD:function(a,b){var t=new P.f5(null,0,0,0,[b])
t.dt(a,b)
return t},
dP:function dP(a,b,c,d,e,f,g,h){var _=this
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
c9:function c9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
id:function id(){},
dl:function dl(){},
z:function z(){},
f9:function f9(a,b){this.a=a
this.b=b},
f5:function f5(a,b,c,d,e){var _=this
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
fU:function fU(){},
fT:function fT(){},
bX:function bX(){},
kO:function(a,b,c){var t=J.bz(b)
if(!t.q())return a
if(c.length===0){do a+=H.i(t.gt())
while(t.q())}else{a+=H.i(t.gt())
for(;t.q();)a=a+c+H.i(t.gt())}return a},
mu:function(a,b){return J.lO(a,b)},
mx:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.i(t)
if(t>=10)return s+"00"+H.i(t)
return s+"000"+H.i(t)},
my:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cr:function(a){if(a>=10)return""+a
return"0"+a},
mA:function(a,b,c,d,e,f){return new P.aD(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
jw:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aC(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mD(a)},
mD:function(a){var t=J.w(a)
if(!!t.$isbb)return t.k(a)
return H.fH(a)},
e2:function(a){return new P.ai(!1,null,null,a)},
kc:function(a,b,c){return new P.ai(!0,a,b,c)},
mo:function(a){return new P.ai(!1,null,a,"Must not be null")},
fI:function(a,b,c){return new P.dC(null,null,!0,a,b,"Value not in range")},
b0:function(a,b,c,d,e){return new P.dC(b,c,!0,a,d,"Invalid value")},
kM:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.b0(a,0,c,"start",f))
if(a>b||b>c)throw H.e(P.b0(b,a,c,"end",f))
return b},
D:function(a,b,c,d,e){var t=e!=null?e:J.dZ(b)
return new P.eT(b,t,!0,a,c,"Index out of range")},
cx:function(a){return new P.hY(a)},
kI:function(a,b,c){var t,s
t=H.E([],[c])
for(s=J.bz(a);s.q();)C.a.i(t,s.gt())
if(b)return t
t.fixed$length=Array
return t},
aq:function(a){H.jc(H.i(a))},
aA:function aA(){},
M:function M(){},
bd:function bd(a,b){this.a=a
this.b=b},
Q:function Q(){},
aD:function aD(a){this.a=a},
ej:function ej(){},
ek:function ek(){},
be:function be(){},
cn:function cn(a){this.a=a},
bW:function bW(){},
ai:function ai(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dC:function dC(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eT:function eT(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
x:function x(a){this.a=a},
dL:function dL(a){this.a=a},
aw:function aw(a){this.a=a},
a5:function a5(a){this.a=a},
dF:function dF(){},
eb:function eb(a){this.a=a},
hY:function hY(a){this.a=a},
em:function em(a,b,c){this.a=a
this.b=b
this.$ti=c},
o:function o(){},
Z:function Z(){},
di:function di(){},
b:function b(){},
aG:function aG(){},
aI:function aI(){},
Y:function Y(){},
r:function r(){},
c_:function c_(){},
v:function v(){},
c1:function c1(a){this.a=a},
lk:function(a){return a},
iR:function(a){var t,s,r,q,p
if(a==null)return
t=P.G()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.F)(s),++q){p=s[q]
t.j(0,p,a[p])}return t},
nD:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.lZ(a,new P.iQ(t))
return t},
kv:function(){var t=$.ku
if(t==null){t=J.jn(window.navigator.userAgent,"Opera",0)
$.ku=t}return t},
mz:function(){var t,s
t=$.kr
if(t!=null)return t
s=$.ks
if(s==null){s=J.jn(window.navigator.userAgent,"Firefox",0)
$.ks=s}if(s)t="-moz-"
else{s=$.kt
if(s==null){s=!P.kv()&&J.jn(window.navigator.userAgent,"Trident/",0)
$.kt=s}if(s)t="-ms-"
else t=P.kv()?"-o-":"-webkit-"}$.kr=t
return t},
iQ:function iQ(a){this.a=a},
o0:function(a){return Math.sqrt(a)},
ig:function ig(){},
io:function io(){},
N:function N(){},
e_:function e_(){},
aP:function aP(){},
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
eE:function eE(){},
eH:function eH(){},
eJ:function eJ(){},
aj:function aj(){},
aF:function aF(){},
eQ:function eQ(){},
au:function au(){},
f1:function f1(){},
fa:function fa(){},
fb:function fb(){},
av:function av(){},
fr:function fr(){},
fy:function fy(){},
fD:function fD(){},
fE:function fE(){},
fJ:function fJ(){},
fK:function fK(){},
bZ:function bZ(){},
h8:function h8(){},
L:function L(){},
h9:function h9(){},
ha:function ha(){},
dH:function dH(){},
he:function he(){},
c3:function c3(){},
ax:function ax(){},
ho:function ho(){},
hv:function hv(){},
hx:function hx(){},
hy:function hy(){},
c7:function c7(){},
it:function it(){},
iu:function iu(){},
iv:function iv(){},
cG:function cG(){},
cE:function cE(){},
cL:function cL(){},
cP:function cP(){},
d_:function d_(){},
d7:function d7(){},
d3:function d3(){},
d5:function d5(){},
e4:function e4(){},
fO:function fO(){},
fP:function fP(){},
iH:function iH(){},
fZ:function fZ(){},
cF:function cF(){},
d1:function d1(){}},W={
mB:function(a,b,c){var t,s
t=document.body
s=(t&&C.h).P(t,a,b,c)
s.toString
t=new H.dM(new W.V(s),new W.iP(),[W.u])
return t.ga7(t)},
mC:function(a){return"wheel"},
bC:function(a){var t,s,r
t="element tag unavailable"
try{s=J.m2(a)
if(typeof s==="string")t=a.tagName}catch(r){H.R(r)}return t},
ne:function(a,b){return document.createElement(a)},
b8:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
l9:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
an:function(a,b,c,d,e){var t=c==null?null:W.le(new W.hX(c))
t=new W.hW(0,a,b,t,!1,[e])
t.dH(a,b,c,!1,e)
return t},
l7:function(a){var t,s
t=document.createElement("a")
s=new W.iw(t,window.location)
s=new W.c8(s)
s.dI(a)
return s},
nh:function(a,b,c,d){return!0},
ni:function(a,b,c,d){var t,s,r,q,p
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
la:function(){var t=P.v
t=new W.iE(P.jC(C.l,t),P.al(null,null,null,t),P.al(null,null,null,t),P.al(null,null,null,t),null)
t.dK(null,new H.bN(C.l,new W.iF(),[H.aB(C.l,0),null]),["TEMPLATE"],null)
return t},
le:function(a){var t=$.y
if(t===C.d)return a
return t.em(a)},
n:function n(){},
e0:function e0(){},
e1:function e1(){},
a4:function a4(){},
e5:function e5(){},
co:function co(){},
aQ:function aQ(){},
aR:function aR(){},
cp:function cp(){},
cq:function cq(){},
aS:function aS(){},
e9:function e9(){},
B:function B(){},
bc:function bc(){},
ea:function ea(){},
ec:function ec(){},
ed:function ed(){},
cs:function cs(){},
bB:function bB(){},
ct:function ct(){},
ee:function ee(){},
cu:function cu(){},
ef:function ef(){},
cv:function cv(){},
cw:function cw(){},
eg:function eg(){},
eh:function eh(){},
a6:function a6(){},
iP:function iP(){},
l:function l(){},
j:function j(){},
a7:function a7(){},
eF:function eF(){},
eG:function eG(){},
eK:function eK(){},
a8:function a8(){},
cB:function cB(){},
eO:function eO(){},
bK:function bK(){},
cC:function cC(){},
eP:function eP(){},
bL:function bL(){},
bf:function bf(){},
bg:function bg(){},
bh:function bh(){},
eU:function eU(){},
aY:function aY(){},
f7:function f7(){},
bO:function bO(){},
fc:function fc(){},
fd:function fd(){},
bP:function bP(){},
aa:function aa(){},
fe:function fe(){},
S:function S(){},
fo:function fo(){},
V:function V(a){this.a=a},
u:function u(){},
dw:function dw(){},
bV:function bV(){},
fx:function fx(){},
fA:function fA(){},
ab:function ab(){},
fC:function fC(){},
fF:function fF(){},
fG:function fG(){},
dB:function dB(){},
fQ:function fQ(){},
dD:function dD(){},
fS:function fS(){},
fV:function fV(){},
ac:function ac(){},
fW:function fW(){},
ad:function ad(){},
fY:function fY(){},
ae:function ae(){},
h2:function h2(){},
a_:function a_(){},
am:function am(){},
dG:function dG(){},
hb:function hb(){},
hc:function hc(){},
c2:function c2(){},
af:function af(){},
a0:function a0(){},
hf:function hf(){},
hg:function hg(){},
hi:function hi(){},
ag:function ag(){},
b1:function b1(){},
hm:function hm(){},
hn:function hn(){},
bo:function bo(){},
hp:function hp(){},
dJ:function dJ(){},
aK:function aK(){},
hu:function hu(){},
bp:function bp(){},
hw:function hw(){},
hz:function hz(){},
hA:function hA(){},
b3:function b3(){},
c5:function c5(){},
hC:function hC(a){this.a=a},
hD:function hD(){},
b4:function b4(){},
hM:function hM(){},
dO:function dO(){},
hO:function hO(){},
hP:function hP(){},
hQ:function hQ(){},
ib:function ib(){},
ic:function ic(){},
dQ:function dQ(){},
ix:function ix(){},
iA:function iA(){},
iB:function iB(){},
iI:function iI(){},
iJ:function iJ(){},
hK:function hK(){},
hR:function hR(a){this.a=a},
hV:function hV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hS:function hS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hW:function hW(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
hX:function hX(a){this.a=a},
c8:function c8(a){this.a=a},
C:function C(){},
dy:function dy(a){this.a=a},
fq:function fq(a){this.a=a},
fp:function fp(a,b,c){this.a=a
this.b=b
this.c=c},
cb:function cb(){},
iy:function iy(){},
iz:function iz(){},
iE:function iE(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iF:function iF(){},
iC:function iC(){},
cz:function cz(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
dx:function dx(){},
iw:function iw(a,b){this.a=a
this.b=b},
dS:function dS(a){this.a=a},
iG:function iG(a){this.a=a},
bD:function bD(){},
bE:function bE(){},
bF:function bF(){},
bG:function bG(){},
bH:function bH(){},
bI:function bI(){},
cD:function cD(){},
cX:function cX(){},
cJ:function cJ(){},
cQ:function cQ(){},
cR:function cR(){},
cS:function cS(){},
cT:function cT(){},
cU:function cU(){},
cV:function cV(){},
cW:function cW(){},
cH:function cH(){},
cI:function cI(){},
cK:function cK(){},
cM:function cM(){},
cN:function cN(){},
cO:function cO(){},
cY:function cY(){},
cZ:function cZ(){},
d9:function d9(){},
da:function da(){},
d8:function d8(){},
dd:function dd(){},
de:function de(){},
df:function df(){},
dg:function dg(){},
d0:function d0(){},
d2:function d2(){},
d4:function d4(){},
d6:function d6(){},
db:function db(){},
dc:function dc(){}},B={
nZ:function(a){var t,s
t=document
s=W.aY
W.an(t,"keydown",new B.je(),!1,s)
W.an(t,"keyup",new B.jf(),!1,s)
if(!$.o_)W.an(t,"mousemove",new B.jg(),!1,W.S)
s=W.S
W.an(t,"mousedown",new B.jh(),!1,s)
W.an(t,"mouseup",new B.ji(),!1,s)},
mU:function(a,b,c,d){var t,s,r,q
t=new Float32Array(H.f(3))
s=$.$get$iS()
r=$.$get$ch()
q=new T.H(new Float32Array(H.f(16)))
q.F()
q=new B.fs(a,b,c,0,new T.h(t),-0.02,s,r,q,new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),"camera:orbit",!1,!0)
q.dv(a,b,c,d)
return q},
je:function je(){},
jf:function jf(){},
jg:function jg(){},
jh:function jh(){},
ji:function ji(){},
fs:function fs(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
ft:function ft(a){this.a=a},
fu:function fu(a){this.a=a},
fv:function fv(){},
fw:function fw(a){this.a=a},
mv:function(d1,d2,d3,d4,d5,d6,d7,d8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0
t=-d6
s=-d7
r=new T.h(new Float32Array(H.f(3)))
r.p(t,s,d8)
q=new T.h(new Float32Array(H.f(3)))
q.p(d6,s,d8)
p=new T.h(new Float32Array(H.f(3)))
p.p(d6,d7,d8)
o=new T.h(new Float32Array(H.f(3)))
o.p(t,d7,d8)
n=-d8
m=new T.h(new Float32Array(H.f(3)))
m.p(t,s,n)
l=new T.h(new Float32Array(H.f(3)))
l.p(t,d7,n)
k=new T.h(new Float32Array(H.f(3)))
k.p(d6,d7,n)
j=new T.h(new Float32Array(H.f(3)))
j.p(d6,s,n)
i=new T.h(new Float32Array(H.f(3)))
i.p(t,d7,n)
h=new T.h(new Float32Array(H.f(3)))
h.p(t,d7,d8)
g=new T.h(new Float32Array(H.f(3)))
g.p(d6,d7,d8)
f=new T.h(new Float32Array(H.f(3)))
f.p(d6,d7,n)
e=new T.h(new Float32Array(H.f(3)))
e.p(d6,s,d8)
d=new T.h(new Float32Array(H.f(3)))
d.p(t,s,d8)
c=new T.h(new Float32Array(H.f(3)))
c.p(t,s,n)
b=new T.h(new Float32Array(H.f(3)))
b.p(d6,s,n)
a=new T.h(new Float32Array(H.f(3)))
a.p(d6,s,n)
a0=new T.h(new Float32Array(H.f(3)))
a0.p(d6,d7,n)
a1=new T.h(new Float32Array(H.f(3)))
a1.p(d6,d7,d8)
a2=new T.h(new Float32Array(H.f(3)))
a2.p(d6,s,d8)
a3=new T.h(new Float32Array(H.f(3)))
a3.p(t,s,n)
a4=new T.h(new Float32Array(H.f(3)))
a4.p(t,s,d8)
s=new T.h(new Float32Array(H.f(3)))
s.p(t,d7,d8)
a5=new T.h(new Float32Array(H.f(3)))
a5.p(t,d7,n)
n=new Float32Array(H.f(2))
n[0]=d3
n[1]=d5
t=new Float32Array(H.f(2))
t[0]=d2
t[1]=d5
a6=new Float32Array(H.f(2))
a6[0]=d2
a6[1]=d4
a7=new Float32Array(H.f(2))
a7[0]=d3
a7[1]=d4
a8=new Float32Array(H.f(2))
a8[0]=d2
a8[1]=d5
a9=new Float32Array(H.f(2))
a9[0]=d2
a9[1]=d4
b0=new Float32Array(H.f(2))
b0[0]=d3
b0[1]=d4
b1=new Float32Array(H.f(2))
b1[0]=d3
b1[1]=d5
b2=new Float32Array(H.f(2))
b2[0]=d3
b2[1]=d4
b3=new Float32Array(H.f(2))
b3[0]=d3
b3[1]=d5
b4=new Float32Array(H.f(2))
b4[0]=d2
b4[1]=d5
b5=new Float32Array(H.f(2))
b5[0]=d2
b5[1]=d4
b6=new Float32Array(H.f(2))
b6[0]=d2
b6[1]=d4
b7=new Float32Array(H.f(2))
b7[0]=d3
b7[1]=d4
b8=new Float32Array(H.f(2))
b8[0]=d3
b8[1]=d5
b9=new Float32Array(H.f(2))
b9[0]=d2
b9[1]=d5
c0=new Float32Array(H.f(2))
c0[0]=d2
c0[1]=d5
c1=new Float32Array(H.f(2))
c1[0]=d2
c1[1]=d4
c2=new Float32Array(H.f(2))
c2[0]=d3
c2[1]=d4
c3=new Float32Array(H.f(2))
c3[0]=d3
c3[1]=d5
c4=new Float32Array(H.f(2))
c4[0]=d3
c4[1]=d5
c5=new Float32Array(H.f(2))
c5[0]=d2
c5[1]=d5
c6=new Float32Array(H.f(2))
c6[0]=d2
c6[1]=d4
c7=new Float32Array(H.f(2))
c7[0]=d3
c7[1]=d4
c8=new G.aU(!1,[],[],[],P.G())
c8.T("aTexUV")
c8.T("aNormal")
c8.bA(6)
c8.a8([r,q,p,o,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,s,a5])
c8.ah("aTexUV",[new T.q(n),new T.q(t),new T.q(a6),new T.q(a7),new T.q(a8),new T.q(a9),new T.q(b0),new T.q(b1),new T.q(b2),new T.q(b3),new T.q(b4),new T.q(b5),new T.q(b6),new T.q(b7),new T.q(b8),new T.q(b9),new T.q(c0),new T.q(c1),new T.q(c2),new T.q(c3),new T.q(c4),new T.q(c5),new T.q(c6),new T.q(c7)])
for(c9=0;t=$.$get$l5(),c9<6;++c9){d0=t[c9]
c8.aw("aNormal",[d0,d0,d0,d0])}return c8},
mw:function(a1,a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
t=a3/2
s=[]
r=[]
q=[]
p=new T.h(new Float32Array(H.f(3)))
p.p(0,t,0)
C.a.i(s,p)
p=new Float32Array(H.f(2))
p[0]=0
p[1]=0
C.a.i(r,new T.q(p))
p=new T.h(new Float32Array(H.f(3)))
p.p(0,1,0)
C.a.i(q,p)
p=-t
o=new T.h(new Float32Array(H.f(3)))
o.p(0,p,0)
C.a.i(s,o)
o=new Float32Array(H.f(2))
o[0]=1
o[1]=1
C.a.i(r,new T.q(o))
o=new T.h(new Float32Array(H.f(3)))
o.p(0,-1,0)
C.a.i(q,o)
for(n=0;n<a4;++n){m=n/a4
o=m*3.141592653589793*2
l=Math.sin(o)
o=Math.cos(o)
k=new Float32Array(3)
k[0]=l*a1
k[1]=t
k[2]=o*a1
C.a.i(s,new T.h(k))
k=new Float32Array(2)
k[0]=m
k[1]=1
C.a.i(r,new T.q(k))
k=new Float32Array(3)
k[0]=0
k[1]=1
k[2]=0
C.a.i(q,new T.h(k))
k=new Float32Array(3)
k[0]=l*a2
k[1]=p
k[2]=o*a2
C.a.i(s,new T.h(k))
o=new Float32Array(2)
o[0]=m
o[1]=0
C.a.i(r,new T.q(o))
o=new Float32Array(3)
o[0]=0
o[1]=-1
o[2]=0
C.a.i(q,new T.h(o))}p=2*a4
o=2+p
H.c(s.length===o)
H.c(r.length===o)
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
f=new T.h(new Float32Array(3))
G.jH(i,h,g,new T.h(o),f)
C.a.i(q,f)
C.a.i(q,f)}H.c(s.length===2+4*a4)
p=[]
o=[]
e=new G.aU(!1,p,o,[],P.G())
e.T("aTexUV")
e.a8(s)
e.ah("aTexUV",r)
e.T("aNormal")
e.aw("aNormal",q)
for(d=a4*2,n=0;n<a4;n=b){c=n*2+2
h=c+1
b=n+1
a=(b===a4?0:b)*2+2
a0=a+1
H.c(!0)
C.a.i(p,new G.A(0,c,a))
H.c(!0)
C.a.i(p,new G.A(1,a0,h))
H.c(!0)
C.a.i(o,new G.bJ(d+a,d+c,d+h,d+a0))}return e},
mJ:function(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
t=[]
s=[]
C.a.M(t,$.$get$kB())
C.a.M(s,$.$get$kC())
for(r=0;r<a3;++r,t=q){q=[]
for(p=t.length,o=0;o<t.length;t.length===p||(0,H.F)(t),++o){n=t[o]
m=n.a
l=s[m]
k=new T.h(new Float32Array(3))
k.v(l)
l=n.b
k.i(0,s[l])
k.a2(0,0.5)
k.C(0)
j=s[l]
i=new T.h(new Float32Array(3))
i.v(j)
j=n.c
i.i(0,s[j])
i.a2(0,0.5)
i.C(0)
h=s[j]
g=new T.h(new Float32Array(3))
g.v(h)
g.i(0,s[m])
g.a2(0,0.5)
g.C(0)
f=s.length
C.a.i(s,k)
e=s.length
C.a.i(s,i)
d=s.length
C.a.i(s,g)
C.a.i(q,new G.A(m,f,d))
C.a.i(q,new G.A(l,e,f))
C.a.i(q,new G.A(j,d,e))
C.a.i(q,new G.A(f,e,d))}}c=new G.aU(!1,[],[],[],P.G())
c.T("aTexUV")
c.T("aNormal")
for(p=t.length,o=0;o<t.length;t.length===p||(0,H.F)(t),++o){n=t[o]
b=s[n.a]
H.c(Math.sqrt(b.gR())<1.01&&Math.sqrt(b.gR())>0.99)
a=s[n.b]
H.c(Math.sqrt(a.gR())<1.01&&Math.sqrt(a.gR())>0.99)
a0=s[n.c]
H.c(Math.sqrt(a0.gR())<1.01&&Math.sqrt(a0.gR())>0.99)
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
c.aw("aNormal",[b,a,a0])
m=new T.h(new Float32Array(3))
m.v(b)
m.a2(0,a4)
l=new T.h(new Float32Array(3))
l.v(a)
l.a2(0,a4)
a2=new T.h(new Float32Array(3))
a2.v(a0)
a2.a2(0,a4)
c.dj([m,l,a2])
c.ah("aTexUV",[new T.q(j),new T.q(h),new T.q(a1)])}return c},
n3:function(b4,b5,b6,b7,b8,b9,c0,c1,c2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
t=[]
s=new Float32Array(H.f(3))
r=new T.h(s)
q=new T.h(new Float32Array(H.f(3)))
new Float32Array(H.f(3))
p=H.E(new Array(b9),[[P.b,P.o]])
for(o=[P.o],n=0;n<b9;++n){p[n]=H.E(new Array(c0),o)
m=n/b9*2*b6*3.141592653589793
B.ls(m,b7,b6,b8,b5,$.$get$jb())
B.ls(m+0.02,b7,b6,b8,b5,$.$get$jX())
l=$.$get$jX().a
k=l[0]
j=$.$get$jb().a
s[0]=k-j[0]
s[1]=l[1]-j[1]
s[2]=l[2]-j[2]
k=q.a
k[0]=l[0]+j[0]
k[1]=l[1]+j[1]
k[2]=l[2]+j[2]
i=r.aE(q)
i.C(0)
q=i.aE(r)
q.C(0)
for(l=q.a,k=i.a,h=0;h<c0;++h){g=h/c0*2*3.141592653589793
f=c1*Math.cos(g)
e=c1*Math.sin(g)
j=$.$get$jb().a
d=j[0]
c=l[0]
b=k[0]
a=j[1]
a0=l[1]
a1=k[1]
j=j[2]
a2=l[2]
a3=k[2]
a4=new Float32Array(3)
a4[0]=d+f*c+e*b
a4[1]=a+f*a0+e*a1
a4[2]=j+f*a2+e*a3
C.a.i(t,new T.h(a4))
p[n][h]=t.length-1}}a5=new G.aU(!1,[],[],[],P.G())
a5.T("aTexUV")
for(n=0;n<b9;n=a6)for(a6=n+1,a7=a6%b9,h=0;h<c0;h=a8){a8=h+1
a9=a8%c0
s=p[n]
b0=s[h]
o=p[a7]
b1=o[h]
b2=o[a9]
b3=s[a9]
s=h/c0
o=new Float32Array(2)
o[0]=0
o[1]=s
l=new Float32Array(2)
l[0]=1
l[1]=s
s=a8/c0
k=new Float32Array(2)
k[0]=1
k[1]=s
j=new Float32Array(2)
j[0]=0
j[1]=s
a5.bA(1)
a5.a8([C.a.h(t,b3),C.a.h(t,b2),C.a.h(t,b1),C.a.h(t,b0)])
a5.ah("aTexUV",[new T.q(o),new T.q(l),new T.q(k),new T.q(j)])}a5.dr()
return a5},
ls:function(a,b,c,d,e,f){var t,s,r,q,p
t=Math.cos(a)
s=Math.sin(a)
r=b/c*a
q=d*(2+Math.cos(r))
p=f.a
p[0]=q*0.5*t
p[1]=q*s*0.5
p[2]=e*d*Math.sin(r)*0.5
return f}},G={
n9:function(a){var t,s,r
t=a.split("\n")
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.i(t[s])}return C.a.ab(t,"\n")},
l4:function(a,b,c){var t,s,r,q
t=J.m(a)
s=t.ck(a,b)
t.bv(a,s,c)
t.cf(a,s)
r=t.br(a,s,35713)
if(r!=null&&!r){q=t.bq(a,s)
P.aq("E:Compilation failed:")
P.aq("E:"+G.n9(c))
P.aq("E:Failure:")
P.aq(C.e.a5("E:",q))
throw H.e(q)}return s},
jH:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
d.v(b)
d.aP(a)
e.v(c)
e.aP(a)
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
jG:function(a){var t=new G.dp(P.G(),a,!1,!0)
t.du(a)
return t},
kz:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.jq(a[s])
b[t+1]=J.jr(a[s])
b[t+2]=J.k3(a[s])}return b},
mF:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.jq(a[s])
b[t+1]=J.jr(a[s])}return b},
mG:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.jq(a[s])
b[t+1]=J.jr(a[s])
b[t+2]=J.k3(a[s])
b[t+3]=J.m3(a[s])}return b},
mE:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.bx(a[s],0)
b[t+1]=J.bx(a[s],1)
b[t+2]=J.bx(a[s],2)
b[t+3]=J.bx(a[s],3)}return b},
ng:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
for(t=a.e,s=t.gI(t),s=s.gB(s),r=b.x,q=[[P.b,P.o]],p=[P.Q],o=[T.aL],n=[T.h],m=[T.q];s.q();){l=s.gt()
if(!r.H(0,l)){k="Dropping unnecessary attribute: "+H.i(l)
if($.ln>0)H.jc("I: "+k)
continue}j=t.h(0,l)
switch($.$get$W().h(0,l).a){case"vec2":b.ag(l,G.mF(H.dW(j,"$isb",m,"$asb"),null),2)
break
case"vec3":b.ag(l,G.kz(H.dW(j,"$isb",n,"$asb"),null),3)
break
case"vec4":b.ag(l,G.mG(H.dW(j,"$isb",o,"$asb"),null),4)
break
case"float":b.ag(l,new Float32Array(H.iM(H.dW(j,"$isb",p,"$asb"))),1)
break
case"uvec4":b.ag(l,G.mE(H.dW(j,"$isb",q,"$asb"),null),4)
break
default:if(H.aM(!1))H.b9("unknown type for "+H.i(l)+" ["+J.m1(j[0]).k(0)+"] ["+new H.aJ(H.iW(j),null).k(0)+"] "+H.i(j))}}},
cA:function(a,b,c){var t,s,r,q,p
t=b.d
s=J.k2(t.a)
r=new G.dq(t,s,4,P.G(),b.e.x,null,0,-1,null,null,P.G(),"meshdata:"+a,!1,!0)
r.a8(G.kz(c.d,null))
q=c.dq()
r.y=J.jo(t.a)
H.c(r.ch!=null)
p=r.ch.length
if(p<768){r.saX(new Uint8Array(H.iM(q)))
r.Q=5121}else if(p<196608){r.saX(new Uint16Array(H.iM(q)))
r.Q=5123}else{r.saX(new Uint32Array(H.iM(q)))
r.Q=5125}J.dY(t.a,s)
s=r.y
q=r.cx
t.toString
p=J.w(q)
H.c(!!p.$isl_||!!p.$isl0||!!p.$isl1)
J.dX(t.a,34963,s)
J.k1(t.a,34963,q,35048)
G.ng(c,r)
return r},
kN:function(a,b,c,d){var t=new G.fN(b,c,d,null,null,P.G(),P.G(),P.al(null,null,null,P.v),null,a,!1,!0)
t.dw(a,b,c,d)
return t},
eS:function(a,b,c,d,e){var t=new G.eR(c,b,J.lQ(a.a),e,a,new G.hh(!1,!1,!1,!0,1,9729,9729))
t.ds(a,b,c,d,e)
return t},
ff:function ff(){},
dK:function dK(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
e6:function e6(){},
e8:function e8(a,b){this.a=a
this.b=b},
eL:function eL(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
A:function A(a,b,c){this.a=a
this.b=b
this.c=c},
bJ:function bJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aU:function aU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dI:function dI(a,b,c){this.a=a
this.b=b
this.c=c},
bn:function bn(a,b,c){this.a=a
this.b=b
this.c=c},
dp:function dp(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dq:function dq(a,b,c,d,e,f,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
fz:function fz(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
ei:function ei(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fN:function fN(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
bm:function bm(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fX:function fX(){},
hh:function hh(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
c4:function c4(){},
eR:function eR(a,b,c,d,e,f){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f}},R={
n8:function(a,b,c){var t,s,r,q
t="stars_"+b
s=b*3
r=new Float32Array(H.f(s))
for(q=0;q<s;++q)r[q]=($.$get$l2().eW()-0.5)*c
s=a.d
s=new G.dq(s,J.k2(s.a),0,P.G(),a.e.x,null,0,-1,null,null,P.G(),"meshdata:"+t,!1,!0)
s.a8(r)
return s},
h0:function h0(){},
h1:function h1(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},A={
ll:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=b.dx
t.v(c)
s=b.d
t.cz(0,s)
r=b.cx
J.aC(b)
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
p.eu(new T.a9(o))
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
a.dn(r,e,d)
e.pop()
for(s=b.cy,r=s.length,l=0;l<s.length;s.length===r||(0,H.F)(s),++l)A.ll(a,s[l],t,d,e)},
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
bY:function bY(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.a=d
_.b=e
_.c=f},
fM:function fM(a,b,c,d,e,f,g,h,i,a0,a1){var _=this
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
dU:function(a){var t,s
t=C.N.eJ(a,0,new A.iX())
s=536870911&t+(C.b.cV(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
iX:function iX(){}},D={
jE:function(a){var t,s,r
t=new P.O(0,$.y,null,[null])
s=document.createElement("img")
r=new W.hS(s,"load",!1,[W.l])
r.gbe(r).aJ(new D.f6(new P.hF(t,[null]),s))
s.src=a
return t},
f6:function f6(a,b){this.a=a
this.b=b}},T={
J:function(a,b,c){var t=new Float32Array(3)
t[0]=a
t[1]=b
t[2]=c
return new T.h(t)},
l3:function(){return new T.h(new Float32Array(H.f(3)))},
a9:function a9(a){this.a=a},
H:function H(a){this.a=a},
q:function q(a){this.a=a},
h:function h(a){this.a=a},
aL:function aL(a){this.a=a}},V={
nT:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
t={}
s=document
r=new R.h1(0,0,null,null,null,null)
r.dB(C.k.cZ(s,"stats"),"blue","gray")
q=C.k.eY(s,"#webgl-canvas")
p=new G.e8(null,q)
o=(q&&C.o).bm(q,"webgl2",P.aZ(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
p.a=o
if(o==null)H.K(P.cx('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
n="ChronosGL Config: "+J.aC(J.m4(o))
if($.ln>0)P.aq("I: "+n)
J.lN(o,0,0,0,1)
J.cm(o,2929)
J.cm(o,2884)
m=B.mU(25,10,0,q)
o=new T.H(new Float32Array(H.f(16)))
o.F()
n=new T.H(new Float32Array(H.f(16)))
n.F()
l=new G.fz(m,50,1,0.1,1000,o,n,new T.H(new Float32Array(H.f(16))),P.G(),"perspective",!1,!0)
l.bG()
n=H.E([],[A.bY])
k=new A.fM(null,p,n,17664,0,0,0,0,"main",!1,!0)
k.d=new G.eL(p,null,null,null,null)
o=G.kN("textured",p,$.$get$lC(),$.$get$lB())
j=[]
H.c(!0)
C.a.i(n,new A.bY(o,[l],j,"objects",!1,!0))
i=G.jG("wood")
i.G("uColor",$.$get$km())
h=G.jG("gradient")
h.G("uColor",$.$get$ko())
g=G.jG("trans")
g.G("uColor",$.$get$kn())
g.d.j(0,"cBlendEquation",$.$get$kf())
f=G.cA("icosahedron-3",o,B.mJ(3,1,!0))
e=new Float32Array(H.f(9))
d=new T.H(new Float32Array(H.f(16)))
d.F()
c=new T.H(new Float32Array(H.f(16)))
c.F()
b=new A.aH(i,f,[],new T.a9(e),d,c,new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),"sphere",!1,!0)
b.a6(0,0,0)
H.c(!0)
C.a.i(j,b)
c=G.cA("cube",o,B.mv(!0,1,0,1,0,1,1,1))
d=new Float32Array(H.f(9))
e=new T.H(new Float32Array(H.f(16)))
e.F()
f=new T.H(new Float32Array(H.f(16)))
f.F()
a=new A.aH(h,c,[],new T.a9(d),e,f,new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),"cube",!1,!0)
a.a6(-5,0,-5)
H.c(!0)
C.a.i(j,a)
f=G.cA("cylinder-32",o,B.mw(3,6,2,32,!0))
e=new Float32Array(H.f(9))
d=new T.H(new Float32Array(H.f(16)))
d.F()
c=new T.H(new Float32Array(H.f(16)))
c.F()
a0=new A.aH(g,f,[],new T.a9(e),d,c,new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),"cylinder",!1,!0)
a0.a6(5,0,-5)
H.c(!0)
C.a.i(j,a0)
c=new T.h(new Float32Array(H.f(3)))
c.p(-2,-2,0)
d=new T.h(new Float32Array(H.f(3)))
d.p(2,-2,0)
e=new T.h(new Float32Array(H.f(3)))
e.p(2,2,0)
f=new T.h(new Float32Array(H.f(3)))
f.p(-2,2,0)
a1=new Float32Array(H.f(2))
a1[0]=0
a1[1]=0
a2=new Float32Array(H.f(2))
a2[0]=1
a2[1]=0
a3=new Float32Array(H.f(2))
a3[0]=1
a3[1]=1
a4=new Float32Array(H.f(2))
a4[0]=0
a4[1]=1
a5=new T.h(new Float32Array(H.f(3)))
a5.p(0,0,1)
a6=new G.aU(!1,[],[],[],P.G())
a6.T("aTexUV")
a6.dk([c,d,e,f])
a6.ah("aTexUV",[new T.q(a1),new T.q(a2),new T.q(a3),new T.q(a4)])
a6.T("aNormal")
a6.aw("aNormal",[a5,a5,a5,a5])
a4=G.cA("quad",o,a6)
a3=new Float32Array(H.f(9))
a2=new T.H(new Float32Array(H.f(16)))
a2.F()
a1=new T.H(new Float32Array(H.f(16)))
a1.F()
a7=new A.aH(g,a4,[],new T.a9(a3),a2,a1,new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),"quad",!1,!0)
a7.a6(-5,0,5)
H.c(!0)
C.a.i(j,a7)
o=G.cA("torusknot",o,B.n3(!0,1,2,3,1,128,16,0.4,!0))
a1=new Float32Array(H.f(9))
a2=new T.H(new Float32Array(H.f(16)))
a2.F()
a3=new T.H(new Float32Array(H.f(16)))
a3.F()
a8=new A.aH(h,o,[],new T.a9(a1),a2,a3,new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),"torus",!1,!0)
a8.a6(5,0,5)
H.c(!0)
C.a.i(j,a8)
j=G.kN("stars",p,$.$get$lx(),$.$get$lw())
a3=[]
o=$.$get$kd()
a9=new G.dp(P.G(),"stars",!1,!0)
a9.G("cDepthTest",!0)
a9.G("cDepthWrite",!1)
a9.G("cBlendEquation",o)
a9.G("cStencilFunc",$.$get$jI())
b0=s.createElement("canvas")
b0.width=64
b0.height=64
b1=C.o.cY(b0,"2d")
b2=(b1&&C.i).cj(b1,32,32,1,32,32,22);(b2&&C.f).aD(b2,0,"gray")
C.f.aD(b2,1,"black")
b1.fillStyle=b2
C.i.eI(b1,0,0,64,64)
b2=C.i.cj(b1,32,32,1,32,32,6);(b2&&C.f).aD(b2,0,"white")
C.f.aD(b2,1,"gray")
b1.globalAlpha=0.9
b1.fillStyle=b2
b1.arc(32,32,4,0,6.283185307179586,!1)
b1.fill("nonzero")
a9.G("uTexture",G.eS(j.d,"Utils::Particles",b0,null,3553))
a9.G("uPointSize",1000)
b3=R.n8(j,2000,100)
s=new Float32Array(H.f(9))
o=new T.H(new Float32Array(H.f(16)))
o.F()
f=new T.H(new Float32Array(H.f(16)))
f.F()
e=new Float32Array(H.f(3))
d=new Float32Array(H.f(3))
c=new Float32Array(H.f(3))
a1=new Float32Array(H.f(3))
H.c(!0)
C.a.i(a3,new A.aH(a9,b3,[],new T.a9(s),o,f,new T.h(e),new T.h(d),new T.h(c),new T.h(a1),b3.a,!1,!0))
H.c(!0)
C.a.i(n,new A.bY(j,[l],a3,"stars",!1,!0))
a3=new V.j9(q,l,k)
a3.$1(null)
W.an(window,"resize",a3,!1,W.l)
t.a=0
P.mI([D.jE("../gradient.jpg"),D.jE("../transparent.png"),D.jE("../wood.jpg")],null,!1).aJ(new V.j8(p,i,h,g,new V.j7(t,r,m,k)))},
j9:function j9(a,b,c){this.a=a
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
_.e=e}}
var v=[C,H,J,P,W,B,G,R,A,D,T,V]
setFunctionNamesIfNecessary(v)
var $={}
H.jz.prototype={}
J.a.prototype={
A:function(a,b){return a===b},
gw:function(a){return H.b_(a)},
k:function(a){return H.fH(a)},
gD:function(a){return new H.aJ(H.iW(a),null)}}
J.eY.prototype={
k:function(a){return String(a)},
gw:function(a){return a?519018:218159},
gD:function(a){return C.a1},
$isaA:1}
J.eZ.prototype={
A:function(a,b){return null==b},
k:function(a){return"null"},
gw:function(a){return 0},
gD:function(a){return C.W}}
J.bM.prototype={
gw:function(a){return 0},
gD:function(a){return C.V},
k:function(a){return String(a)},
$iskG:1}
J.fB.prototype={}
J.b2.prototype={}
J.aX.prototype={
k:function(a){var t=a[$.$get$kq()]
return t==null?this.dg(a):J.aC(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isjx:1}
J.aV.prototype={
bb:function(a,b){if(!!a.immutable$list)throw H.e(new P.x(b))},
ba:function(a,b){if(!!a.fixed$length)throw H.e(new P.x(b))},
i:function(a,b){this.ba(a,"add")
a.push(b)},
M:function(a,b){var t,s,r,q,p
t=a.length
this.ba(a,"addAll")
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.F)(b),++r,t=p){q=b[r]
p=t+1
H.c(t===a.length||H.K(new P.a5(a)))
a.push(q)}},
cw:function(a,b){return new H.bN(a,b,[H.aB(a,0),null])},
ab:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.i(a[s])
return t.join(b)},
u:function(a,b){return this.h(a,b)},
gbe:function(a){if(a.length>0)return a[0]
throw H.e(H.dh())},
gaI:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.e(H.dh())},
bu:function(a,b,c,d,e){var t,s
this.bb(a,"setRange")
P.kM(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.K(P.b0(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.e(H.mR())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=d[e+s]
else for(s=0;s<t;++s)a[b+s]=d[e+s]},
c5:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.e(new P.a5(a))}return!1},
da:function(a,b){this.bb(a,"sort")
H.dE(a,0,a.length-1,P.nE())},
aO:function(a){return this.da(a,null)},
E:function(a,b){var t
for(t=0;t<a.length;++t)if(J.I(a[t],b))return!0
return!1},
k:function(a){return P.eX(a,"[","]")},
gB:function(a){return new J.e3(a,a.length,0,null,[H.aB(a,0)])},
gw:function(a){return H.b_(a)},
gl:function(a){return a.length},
sl:function(a,b){this.ba(a,"set length")
if(b<0)throw H.e(P.b0(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.T(a,b))
if(b>=a.length||b<0)throw H.e(H.T(a,b))
return a[b]},
j:function(a,b,c){this.bb(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.T(a,b))
if(b>=a.length||b<0)throw H.e(H.T(a,b))
a[b]=c},
$isp:1,
$asp:function(){},
$isd:1,
$asd:null,
$isb:1,
$asb:null}
J.jy.prototype={}
J.e3.prototype={
gt:function(){return this.d},
q:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.e(H.F(t))
r=this.c
if(r>=s){this.sbH(null)
return!1}this.sbH(t[r]);++this.c
return!0},
sbH:function(a){this.d=a}}
J.bi.prototype={
W:function(a,b){var t
if(typeof b!=="number")throw H.e(H.X(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaG(b)
if(this.gaG(a)===t)return 0
if(this.gaG(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaG:function(a){return a===0?1/a<0:a<0},
ep:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.e(new P.x(""+a+".ceil()"))},
ac:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(new P.x(""+a+".round()"))},
eq:function(a,b,c){if(this.W(b,c)>0)throw H.e(H.X(b))
if(this.W(a,b)<0)return b
if(this.W(a,c)>0)return c
return a},
f8:function(a,b){var t
if(b>20)throw H.e(P.b0(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gaG(a))return"-"+t
return t},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gw:function(a){return a&0x1FFFFFFF},
a5:function(a,b){if(typeof b!=="number")throw H.e(H.X(b))
return a+b},
af:function(a,b){if(typeof b!=="number")throw H.e(H.X(b))
return a-b},
cW:function(a,b){if(typeof b!=="number")throw H.e(H.X(b))
return a/b},
J:function(a,b){if(typeof b!=="number")throw H.e(H.X(b))
return a*b},
aR:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.c1(a,b)},
L:function(a,b){return(a|0)===a?a/b|0:this.c1(a,b)},
c1:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.e(new P.x("Result of truncating division is "+H.i(t)+": "+H.i(a)+" ~/ "+b))},
b1:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
cV:function(a,b){if(typeof b!=="number")throw H.e(H.X(b))
return(a&b)>>>0},
di:function(a,b){if(typeof b!=="number")throw H.e(H.X(b))
return(a^b)>>>0},
aN:function(a,b){if(typeof b!=="number")throw H.e(H.X(b))
return a<b},
av:function(a,b){if(typeof b!=="number")throw H.e(H.X(b))
return a>b},
cX:function(a,b){if(typeof b!=="number")throw H.e(H.X(b))
return a>=b},
gD:function(a){return C.a4},
$isY:1}
J.dk.prototype={
gD:function(a){return C.a3},
$isQ:1,
$iso:1,
$isY:1}
J.dj.prototype={
gD:function(a){return C.a2},
$isQ:1,
$isY:1}
J.aW.prototype={
aT:function(a,b){if(b>=a.length)throw H.e(H.T(a,b))
return a.charCodeAt(b)},
a5:function(a,b){if(typeof b!=="string")throw H.e(P.kc(b,null,null))
return a+b},
dc:function(a,b,c){var t
if(c>a.length)throw H.e(P.b0(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bw:function(a,b){return this.dc(a,b,0)},
by:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.fI(b,null,null))
if(b>c)throw H.e(P.fI(b,null,null))
if(c>a.length)throw H.e(P.fI(c,null,null))
return a.substring(b,c)},
dd:function(a,b){return this.by(a,b,null)},
f7:function(a){return a.toLowerCase()},
er:function(a,b,c){if(c>a.length)throw H.e(P.b0(c,0,a.length,null,null))
return H.o1(a,b,c)},
W:function(a,b){var t
if(typeof b!=="string")throw H.e(H.X(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
k:function(a){return a},
gw:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gD:function(a){return C.X},
gl:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.e(H.T(a,b))
return a[b]},
$isp:1,
$asp:function(){},
$isv:1}
H.d.prototype={$asd:null}
H.bj.prototype={
gB:function(a){return new H.dm(this,this.gl(this),0,null,[H.ah(this,"bj",0)])},
aL:function(a,b){return this.df(0,b)},
f6:function(a,b){var t,s
t=H.E([],[H.ah(this,"bj",0)])
C.a.sl(t,this.gl(this))
for(s=0;s<this.gl(this);++s)t[s]=this.u(0,s)
return t},
f5:function(a){return this.f6(a,!0)}}
H.dm.prototype={
gt:function(){return this.d},
q:function(){var t,s,r,q
t=this.a
s=J.a2(t)
r=s.gl(t)
if(this.b!==r)throw H.e(new P.a5(t))
q=this.c
if(q>=r){this.sak(null)
return!1}this.sak(s.u(t,q));++this.c
return!0},
sak:function(a){this.d=a}}
H.dn.prototype={
gB:function(a){return new H.f8(null,J.bz(this.a),this.b,this.$ti)},
gl:function(a){return J.dZ(this.a)},
$asZ:function(a,b){return[b]}}
H.el.prototype={$isd:1,
$asd:function(a,b){return[b]}}
H.f8.prototype={
q:function(){var t=this.b
if(t.q()){this.sak(this.c.$1(t.gt()))
return!0}this.sak(null)
return!1},
gt:function(){return this.a},
sak:function(a){this.a=a},
$asdi:function(a,b){return[b]}}
H.bN.prototype={
gl:function(a){return J.dZ(this.a)},
u:function(a,b){return this.b.$1(J.lW(this.a,b))},
$asd:function(a,b){return[b]},
$asbj:function(a,b){return[b]},
$asZ:function(a,b){return[b]}}
H.dM.prototype={
gB:function(a){return new H.hB(J.bz(this.a),this.b,this.$ti)}}
H.hB.prototype={
q:function(){var t,s
for(t=this.a,s=this.b;t.q();)if(s.$1(t.gt()))return!0
return!1},
gt:function(){return this.a.gt()}}
H.cy.prototype={}
H.jj.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.jk.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.il.prototype={
seS:function(a){this.z=a},
seU:function(a){this.ch=a}}
H.b6.prototype={
c4:function(a,b){if(!this.f.A(0,a))return
if(this.Q.i(0,b)&&!this.y)this.y=!0
this.b8()},
f0:function(a){var t,s,r,q,p
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
if(q===r.c)r.bW();++r.d}this.y=!1}this.b8()},
ef:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.w(a),s=0;r=this.ch,s<r.length;s+=2)if(t.A(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).i(r,a)
t=this.ch;(t&&C.a).i(t,b)},
f_:function(a){var t,s,r
if(this.ch==null)return
for(t=J.w(a),s=0;r=this.ch,s<r.length;s+=2)if(t.A(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.K(new P.x("removeRange"))
P.kM(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
d7:function(a,b){if(!this.r.A(0,a))return
this.db=b},
eM:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.K(0,c)
return}H.c(b===1)
t=this.cx
if(t==null){t=P.jD(null,null)
this.cx=t}t.Y(0,new H.ie(a,c))},
eL:function(a,b){var t
if(!this.r.A(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.aH()
return}H.c(b===1)
t=this.cx
if(t==null){t=P.jD(null,null)
this.cx=t}t.Y(0,this.geT())},
eN:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.aq(a)
if(b!=null)P.aq(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.aC(a)
s[1]=b==null?null:b.k(0)
for(r=new P.c9(t,t.r,null,null,[null]),r.c=t.e;r.q();)r.d.K(0,s)},
ao:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.R(o)
p=H.ap(o)
this.eN(q,p)
if(this.db){this.aH()
if(this===u.globalState.e)throw o}}finally{this.cy=H.nz(r)
u.globalState.d=H.jT(t,"$isb6")
if(t!=null)$=t.geR()
if(this.cx!=null)for(;n=this.cx,!n.gar(n);)this.cx.cB().$0()}return s},
cv:function(a){return this.b.h(0,a)},
bK:function(a,b){var t=this.b
if(t.H(0,a))throw H.e(P.cx("Registry: ports must be registered only once."))
t.j(0,a,b)},
b8:function(){var t=this.b
if(t.gl(t)-this.c.a>0||this.y||!this.x)u.globalState.z.j(0,this.a,this)
else this.aH()},
aH:function(){var t,s,r
t=this.cx
if(t!=null)t.a_(0)
for(t=this.b,s=t.gcS(t),s=s.gB(s);s.q();)s.gt().dQ()
t.a_(0)
this.c.a_(0)
u.globalState.z.as(0,this.a)
this.dx.a_(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].K(0,t[r+1])
this.ch=null}},
geR:function(){return this.d},
ges:function(){return this.e}}
H.ie.prototype={
$0:function(){this.a.K(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.hT.prototype={
eA:function(){var t=this.a
if(t.b===t.c)return
return t.cB()},
cD:function(){var t,s,r
t=this.eA()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.H(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gar(s)}else s=!1
else s=!1
else s=!1
if(s)H.K(P.cx("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gar(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aZ(["command","close"])
r=new H.ao(!0,new P.dP(0,null,null,null,null,null,0,[null,P.o])).N(r)
s.toString
self.postMessage(r)}return!1}t.eX()
return!0},
c_:function(){if(self.window!=null)new H.hU(this).$0()
else for(;this.cD(););},
at:function(){var t,s,r,q,p
if(!u.globalState.x)this.c_()
else try{this.c_()}catch(r){t=H.R(r)
s=H.ap(r)
q=u.globalState.Q
p=P.aZ(["command","error","msg",H.i(t)+"\n"+H.i(s)])
p=new H.ao(!0,P.ca(null,P.o)).N(p)
q.toString
self.postMessage(p)}}}
H.hU.prototype={
$0:function(){if(!this.a.cD())return
P.n7(C.q,this)},
$S:function(){return{func:1,v:true}}}
H.b7.prototype={
eX:function(){var t=this.a
if(t.y){C.a.i(t.z,this)
return}t.ao(this.b)}}
H.ik.prototype={}
H.eV.prototype={
$0:function(){H.mN(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.eW.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(!this.d)this.a.$1(this.c)
else{s=this.a
if(H.bw(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.bw(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.b8()},
$S:function(){return{func:1,v:true}}}
H.hL.prototype={}
H.br.prototype={
K:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.nm(b)
if(t.ges()===s){s=J.a2(r)
switch(s.h(r,0)){case"pause":t.c4(s.h(r,1),s.h(r,2))
break
case"resume":t.f0(s.h(r,1))
break
case"add-ondone":t.ef(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.f_(s.h(r,1))
break
case"set-errors-fatal":t.d7(s.h(r,1),s.h(r,2))
break
case"ping":t.eM(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.eL(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.i(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.as(0,s)
break}return}u.globalState.f.a.Y(0,new H.b7(t,new H.im(this,r),"receive"))},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.br){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gw:function(a){return this.b.a}}
H.im.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dL(0,this.b)},
$S:function(){return{func:1}}}
H.cc.prototype={
K:function(a,b){var t,s,r
t=P.aZ(["command","message","port",this,"msg",b])
s=new H.ao(!0,P.ca(null,P.o)).N(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.cc){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gw:function(a){return C.b.di((this.b<<16^this.a<<8)>>>0,this.c)}}
H.bl.prototype={
dQ:function(){this.c=!0
this.b=null},
dL:function(a,b){if(this.c)return
this.b.$1(b)},
$isn1:1}
H.hj.prototype={
dC:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.Y(0,new H.b7(s,new H.hk(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.bv(new H.hl(this,b),0),a)}else{H.c(a>0)
throw H.e(new P.x("Timer greater than 0."))}}}
H.hk.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.hl.prototype={
$0:function(){this.a.c=null
H.j6()
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.at.prototype={
gw:function(a){var t=this.a
t=C.b.b1(t,0)^C.b.L(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
A:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.at){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.ao.prototype={
N:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.j(0,a,t.gl(t))
t=J.w(a)
if(!!t.$isbQ)return["buffer",a]
if(!!t.$isbk)return["typed",a]
if(!!t.$isp)return this.d3(a)
if(!!t.$ismK){r=this.gd0()
q=t.gI(a)
q=H.jF(q,r,H.ah(q,"Z",0),null)
q=P.kI(q,!0,H.ah(q,"Z",0))
t=t.gcS(a)
t=H.jF(t,r,H.ah(t,"Z",0),null)
return["map",q,P.kI(t,!0,H.ah(t,"Z",0))]}if(!!t.$iskG)return this.d4(a)
if(!!t.$isa)this.cQ(a)
if(!!t.$isn1)this.au(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isbr)return this.d5(a)
if(!!t.$iscc)return this.d6(a)
if(!!t.$isbb){p=a.$static_name
if(p==null)this.au(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isat)return["capability",a.a]
if(!(a instanceof P.r))this.cQ(a)
return["dart",u.classIdExtractor(a),this.d2(u.classFieldsExtractor(a))]},
au:function(a,b){throw H.e(new P.x((b==null?"Can't transmit:":b)+" "+H.i(a)))},
cQ:function(a){return this.au(a,null)},
d3:function(a){var t
H.c(typeof a!=="string")
t=this.d1(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.au(a,"Can't serialize indexable: ")},
d1:function(a){var t,s
t=[]
C.a.sl(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.N(a[s])
return t},
d2:function(a){var t
for(t=0;t<a.length;++t)C.a.j(a,t,this.N(a[t]))
return a},
d4:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.au(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sl(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.N(a[t[r]])
return["js-object",t,s]},
d6:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
d5:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.b5.prototype={
a0:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.e(P.e2("Bad serialized message: "+H.i(a)))
switch(C.a.gbe(a)){case"ref":H.c(J.I(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.c(J.I(a[0],"buffer"))
t=a[1]
C.a.i(this.b,t)
return t
case"typed":H.c(J.I(a[0],"typed"))
t=a[1]
C.a.i(this.b,t)
return t
case"fixed":H.c(J.I(a[0],"fixed"))
t=a[1]
C.a.i(this.b,t)
s=H.E(this.an(t),[null])
s.fixed$length=Array
return s
case"extendable":H.c(J.I(a[0],"extendable"))
t=a[1]
C.a.i(this.b,t)
return H.E(this.an(t),[null])
case"mutable":H.c(J.I(a[0],"mutable"))
t=a[1]
C.a.i(this.b,t)
return this.an(t)
case"const":H.c(J.I(a[0],"const"))
t=a[1]
C.a.i(this.b,t)
s=H.E(this.an(t),[null])
s.fixed$length=Array
return s
case"map":return this.eD(a)
case"sendport":return this.eE(a)
case"raw sendport":H.c(J.I(a[0],"raw sendport"))
t=a[1]
C.a.i(this.b,t)
return t
case"js-object":return this.eC(a)
case"function":H.c(J.I(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.i(this.b,t)
return t
case"capability":H.c(J.I(a[0],"capability"))
return new H.at(a[1])
case"dart":H.c(J.I(a[0],"dart"))
r=a[1]
q=a[2]
p=u.instanceFromClassId(r)
C.a.i(this.b,p)
this.an(q)
return u.initializeEmptyInstance(r,p,q)
default:throw H.e("couldn't deserialize: "+H.i(a))}},
an:function(a){var t
for(t=0;t<a.length;++t)C.a.j(a,t,this.a0(a[t]))
return a},
eD:function(a){var t,s,r,q,p
H.c(J.I(a[0],"map"))
t=a[1]
s=a[2]
r=P.G()
C.a.i(this.b,r)
t=J.m9(t,this.geB()).f5(0)
for(q=J.a2(s),p=0;p<t.length;++p)r.j(0,t[p],this.a0(q.h(s,p)))
return r},
eE:function(a){var t,s,r,q,p,o,n
H.c(J.I(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.cv(r)
if(o==null)return
n=new H.br(o,s)}else n=new H.cc(t,r,s)
C.a.i(this.b,n)
return n},
eC:function(a){var t,s,r,q,p,o
H.c(J.I(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.i(this.b,r)
for(q=J.a2(t),p=J.a2(s),o=0;o<q.gl(t);++o)r[q.h(t,o)]=this.a0(p.h(s,o))
return r}}
H.fL.prototype={}
H.hq.prototype={
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
H.dz.prototype={
k:function(a){var t=this.b
if(t==null)return"NullError: "+H.i(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.f0.prototype={
k:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.i(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.i(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.i(this.a)+")"}}
H.ht.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.jl.prototype={
$1:function(a){if(!!J.w(a).$isbe)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.dR.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.j1.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.j2.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.j3.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.j4.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.j5.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.bb.prototype={
k:function(a){return"Closure '"+H.dA(this).trim()+"'"},
$isjx:1,
gfc:function(){return this},
$D:null}
H.hd.prototype={}
H.h_.prototype={
k:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bA.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bA))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gw:function(a){var t,s
t=this.c
if(t==null)s=H.b_(this.a)
else s=typeof t!=="object"?J.as(t):H.b_(t)
return(s^H.b_(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.i(this.d)+"' of "+H.fH(t)}}
H.hs.prototype={
k:function(a){return this.a}}
H.e7.prototype={
k:function(a){return this.a}}
H.fR.prototype={
k:function(a){return"RuntimeError: "+H.i(this.a)}}
H.hE.prototype={
k:function(a){return C.e.a5("Assertion failed: ",P.jw(this.a))}}
H.aJ.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gw:function(a){return J.as(this.a)},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.aJ){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.ak.prototype={
gl:function(a){return this.a},
gar:function(a){return this.a===0},
gI:function(a){return new H.f3(this,[H.aB(this,0)])},
gcS:function(a){return H.jF(this.gI(this),new H.f_(this),H.aB(this,0),H.aB(this,1))},
H:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bT(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bT(s,b)}else return this.eO(b)},
eO:function(a){var t=this.d
if(t==null)return!1
return this.aq(this.aB(t,this.ap(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.al(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.al(r,b)
return s==null?null:s.b}else return this.eP(b)},
eP:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.aB(t,this.ap(a))
r=this.aq(s,a)
if(r<0)return
return s[r].b},
j:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aY()
this.b=t}this.bJ(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aY()
this.c=s}this.bJ(s,b,c)}else{r=this.d
if(r==null){r=this.aY()
this.d=r}q=this.ap(b)
p=this.aB(r,q)
if(p==null)this.b0(r,q,[this.aZ(b,c)])
else{o=this.aq(p,b)
if(o>=0)p[o].b=c
else p.push(this.aZ(b,c))}}},
as:function(a,b){if(typeof b==="string")return this.bZ(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bZ(this.c,b)
else return this.eQ(b)},
eQ:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.aB(t,this.ap(a))
r=this.aq(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.c2(q)
return q.b},
a_:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
aF:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.e(new P.a5(this))
t=t.c}},
bJ:function(a,b,c){var t=this.al(a,b)
if(t==null)this.b0(a,b,this.aZ(b,c))
else t.b=c},
bZ:function(a,b){var t
if(a==null)return
t=this.al(a,b)
if(t==null)return
this.c2(t)
this.bU(a,b)
return t.b},
aZ:function(a,b){var t,s
t=new H.f2(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
c2:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.c(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.c(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.r=this.r+1&67108863},
ap:function(a){return J.as(a)&0x3ffffff},
aq:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.I(a[s].a,b))return s
return-1},
k:function(a){return P.mT(this)},
al:function(a,b){return a[b]},
aB:function(a,b){return a[b]},
b0:function(a,b,c){H.c(c!=null)
a[b]=c},
bU:function(a,b){delete a[b]},
bT:function(a,b){return this.al(a,b)!=null},
aY:function(){var t=Object.create(null)
this.b0(t,"<non-identifier-key>",t)
this.bU(t,"<non-identifier-key>")
return t},
$ismK:1}
H.f_.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.f2.prototype={}
H.f3.prototype={
gl:function(a){return this.a.a},
gB:function(a){var t,s
t=this.a
s=new H.f4(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.f4.prototype={
gt:function(){return this.d},
q:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a5(t))
else{t=this.c
if(t==null){this.sbI(null)
return!1}else{this.sbI(t.a)
this.c=this.c.c
return!0}}},
sbI:function(a){this.d=a}}
H.iY.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.iZ.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.v]}}}
H.j_.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.v]}}}
H.bQ.prototype={
gD:function(a){return C.O},
$isbQ:1}
H.bk.prototype={$isbk:1}
H.fg.prototype={
gD:function(a){return C.P}}
H.ds.prototype={
gl:function(a){return a.length},
$isp:1,
$asp:function(){},
$ist:1,
$ast:function(){}}
H.dt.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.K(H.T(a,b))
return a[b]},
j:function(a,b,c){if(b>>>0!==b||b>=a.length)H.K(H.T(a,b))
a[b]=c}}
H.du.prototype={
j:function(a,b,c){if(b>>>0!==b||b>=a.length)H.K(H.T(a,b))
a[b]=c},
$isd:1,
$asd:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]}}
H.dr.prototype={
gD:function(a){return C.Q},
$isd:1,
$asd:function(){return[P.Q]},
$isb:1,
$asb:function(){return[P.Q]},
$iseI:1}
H.fh.prototype={
gD:function(a){return C.R},
$isd:1,
$asd:function(){return[P.Q]},
$isb:1,
$asb:function(){return[P.Q]}}
H.fi.prototype={
gD:function(a){return C.S},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.K(H.T(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]}}
H.fj.prototype={
gD:function(a){return C.T},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.K(H.T(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]},
$iskD:1}
H.fk.prototype={
gD:function(a){return C.U},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.K(H.T(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]}}
H.fl.prototype={
gD:function(a){return C.Y},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.K(H.T(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]},
$isl_:1}
H.fm.prototype={
gD:function(a){return C.Z},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.K(H.T(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]},
$isl0:1}
H.dv.prototype={
gD:function(a){return C.a_},
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.K(H.T(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]}}
H.fn.prototype={
gD:function(a){return C.a0},
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.K(H.T(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]},
$isl1:1}
H.bR.prototype={
$asp:function(){},
$isd:1,
$asd:function(){return[P.o]},
$ast:function(){},
$isb:1,
$asb:function(){return[P.o]}}
H.bS.prototype={
$asp:function(){},
$isd:1,
$asd:function(){return[P.Q]},
$ast:function(){},
$isb:1,
$asb:function(){return[P.Q]}}
H.bT.prototype={
$asp:function(){},
$asd:function(){return[P.Q]},
$ast:function(){},
$asb:function(){return[P.Q]}}
H.bU.prototype={
$asp:function(){},
$asd:function(){return[P.o]},
$ast:function(){},
$asb:function(){return[P.o]}}
P.hH.prototype={
$1:function(a){var t,s
H.j6()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.hG.prototype={
$1:function(a){var t,s
t=this.a
H.c(t.a==null);++u.globalState.f.b
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.hI.prototype={
$0:function(){H.j6()
this.a.$0()},
$S:function(){return{func:1}}}
P.hJ.prototype={
$0:function(){H.j6()
this.a.$0()},
$S:function(){return{func:1}}}
P.eN.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.b)this.d.U(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.b)this.d.U(t.c,t.d)},
$S:function(){return{func:1,args:[,,]}}}
P.eM.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){r[this.e]=a
if(s===0)this.d.bS(r)}else if(t.b===0&&!this.b)this.d.U(t.c,t.d)},
$S:function(){return{func:1,args:[,]}}}
P.hN.prototype={}
P.hF.prototype={
bc:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.aw("Future already completed"))
t.bL(b)}}
P.iD.prototype={
bc:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.aw("Future already completed"))
t.aj(b)}}
P.c6.prototype={
eV:function(a){if(this.c!==6)return!0
H.c(!0)
return this.b.b.bi(this.d,a.a)},
eK:function(a){var t,s
t=(this.c&2)!==0
if(t){H.c(t)
t=this.e!=null}else t=!1
H.c(t)
s=this.e
t=this.b.b
if(H.bw(s,{func:1,args:[P.r,P.c_]}))return t.f1(s,a.a,a.b)
else return t.bi(s,a.a)}}
P.O.prototype={
bk:function(a,b){var t,s,r
t=$.y
if(t!==C.d){t.toString
if(b!=null)b=P.nr(b,t)}s=new P.O(0,t,null,[null])
r=b==null?1:3
this.aS(new P.c6(null,s,r,a,b,[H.aB(this,0),null]))
return s},
aJ:function(a){return this.bk(a,null)},
fb:function(a){var t,s
t=$.y
s=new P.O(0,t,null,this.$ti)
if(t!==C.d)t.toString
t=H.aB(this,0)
this.aS(new P.c6(null,s,8,a,null,[t,t]))
return s},
bN:function(a){H.c(this.a<4)
H.c(a.a>=4)
this.a=a.a
this.c=a.c},
aS:function(a){var t
H.c(a.a==null)
t=this.a
if(t<=1){a.a=H.jT(this.c,"$isc6")
this.c=a}else{if(t===2){H.c(!0)
t=this.c
if(t.a<4){t.aS(a)
return}this.bN(t)}H.c(this.a>=4)
t=this.b
t.toString
P.bt(null,null,t,new P.hZ(this,a))}},
bY:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.c(!0)
s=this.c
if(s.a<4){s.bY(a)
return}this.bN(s)}H.c(this.a>=4)
t.a=this.am(a)
s=this.b
s.toString
P.bt(null,null,s,new P.i6(t,this))}},
b_:function(){H.c(this.a<4)
var t=this.c
this.c=null
return this.am(t)},
am:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aj:function(a){var t,s
H.c(this.a<4)
t=this.$ti
if(H.cg(a,"$isaT",t,"$asaT"))if(H.cg(a,"$isO",t,null))P.i1(a,this)
else P.l6(a,this)
else{s=this.b_()
H.c(this.a<4)
this.a=4
this.c=a
P.bq(this,s)}},
bS:function(a){var t
H.c(this.a<4)
H.c(!J.w(a).$isaT)
t=this.b_()
H.c(this.a<4)
this.a=4
this.c=a
P.bq(this,t)},
U:function(a,b){var t
H.c(this.a<4)
t=this.b_()
H.c(this.a<4)
this.a=8
this.c=new P.ba(a,b)
P.bq(this,t)},
dR:function(a){return this.U(a,null)},
bL:function(a){var t
H.c(this.a<4)
if(H.cg(a,"$isaT",this.$ti,"$asaT")){this.dP(a)
return}H.c(this.a===0)
this.a=1
t=this.b
t.toString
P.bt(null,null,t,new P.i0(this,a))},
dP:function(a){var t
if(H.cg(a,"$isO",this.$ti,null)){if(a.a===8){H.c(this.a===0)
this.a=1
t=this.b
t.toString
P.bt(null,null,t,new P.i5(this,a))}else P.i1(a,this)
return}P.l6(a,this)},
dN:function(a,b){var t
H.c(this.a<4)
H.c(this.a===0)
this.a=1
t=this.b
t.toString
P.bt(null,null,t,new P.i_(this,a,b))},
$isaT:1,
gb2:function(){return this.a},
ge8:function(){return this.c}}
P.hZ.prototype={
$0:function(){P.bq(this.a,this.b)},
$S:function(){return{func:1}}}
P.i6.prototype={
$0:function(){P.bq(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.i2.prototype={
$1:function(a){var t=this.a
H.c(t.a===1)
H.c(t.a===1)
t.a=0
t.aj(a)},
$S:function(){return{func:1,args:[,]}}}
P.i3.prototype={
$2:function(a,b){var t=this.a
H.c(t.a===1)
t.U(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.i4.prototype={
$0:function(){this.a.U(this.b,this.c)},
$S:function(){return{func:1}}}
P.i0.prototype={
$0:function(){this.a.bS(this.b)},
$S:function(){return{func:1}}}
P.i5.prototype={
$0:function(){P.i1(this.b,this.a)},
$S:function(){return{func:1}}}
P.i_.prototype={
$0:function(){this.a.U(this.b,this.c)},
$S:function(){return{func:1}}}
P.i9.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.d
p=q.c
H.c((p&1)===0)
o=(p&2)===0
H.c(o)
t=null
try{H.c(o)
H.c(p===8)
t=q.b.b.cC(q.d)}catch(n){s=H.R(n)
r=H.ap(n)
if(this.c){q=this.a.a
H.c(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.c(q.a===8)
p.b=q.c}else p.b=new P.ba(s,r)
p.a=!0
return}if(!!J.w(t).$isaT){if(t instanceof P.O&&t.gb2()>=4){if(t.gb2()===8){q=t
H.c(q.gb2()===8)
p=this.b
p.b=q.ge8()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.aJ(new P.ia(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.ia.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.i8.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.c((r.c&1)!==0)
this.a.b=r.b.b.bi(r.d,this.c)}catch(q){t=H.R(q)
s=H.ap(q)
r=this.a
r.b=new P.ba(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.i7.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.c(q.a===8)
t=q.c
q=this.c
if(q.eV(t)){H.c((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.eK(t)
p.a=!1}}catch(o){s=H.R(o)
r=H.ap(o)
q=this.a
p=q.a
H.c(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.c(q.a===8)
m.b=q.c}else m.b=new P.ba(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.dN.prototype={}
P.c0.prototype={
gl:function(a){var t,s
t={}
s=new P.O(0,$.y,null,[P.o])
t.a=0
this.cu(new P.h6(t),!0,new P.h7(t,s),s.gbR())
return s},
gbe:function(a){var t,s
t={}
s=new P.O(0,$.y,null,[H.ah(this,"c0",0)])
t.a=null
t.a=this.cu(new P.h4(t,this,s),!0,new P.h5(s),s.gbR())
return s}}
P.h6.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.h7.prototype={
$0:function(){this.b.aj(this.a.a)},
$S:function(){return{func:1}}}
P.h4.prototype={
$1:function(a){P.nl(this.a.a,this.c,a)},
$S:function(){return H.nC(function(a){return{func:1,args:[a]}},this.b,"c0")}}
P.h5.prototype={
$0:function(){var t,s,r,q
try{r=H.dh()
throw H.e(r)}catch(q){t=H.R(q)
s=H.ap(q)
P.nn(this.a,t,s)}},
$S:function(){return{func:1}}}
P.h3.prototype={}
P.iL.prototype={
$0:function(){return this.a.aj(this.b)},
$S:function(){return{func:1}}}
P.ba.prototype={
k:function(a){return H.i(this.a)},
$isbe:1}
P.iK.prototype={}
P.iO.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.bW()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.e(t)
r=H.e(t)
r.stack=s.k(0)
throw r},
$S:function(){return{func:1}}}
P.ip.prototype={
f2:function(a){var t,s,r
try{if(C.d===$.y){a.$0()
return}P.lb(null,null,this,a)}catch(r){t=H.R(r)
s=H.ap(r)
P.iN(null,null,this,t,s)}},
f3:function(a,b){var t,s,r
try{if(C.d===$.y){a.$1(b)
return}P.lc(null,null,this,a,b)}catch(r){t=H.R(r)
s=H.ap(r)
P.iN(null,null,this,t,s)}},
el:function(a){return new P.ir(this,a)},
b9:function(a){return new P.iq(this,a)},
em:function(a){return new P.is(this,a)},
h:function(a,b){return},
cC:function(a){if($.y===C.d)return a.$0()
return P.lb(null,null,this,a)},
bi:function(a,b){if($.y===C.d)return a.$1(b)
return P.lc(null,null,this,a,b)},
f1:function(a,b,c){if($.y===C.d)return a.$2(b,c)
return P.ns(null,null,this,a,b,c)}}
P.ir.prototype={
$0:function(){return this.a.cC(this.b)},
$S:function(){return{func:1}}}
P.iq.prototype={
$0:function(){return this.a.f2(this.b)},
$S:function(){return{func:1}}}
P.is.prototype={
$1:function(a){return this.a.f3(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.dP.prototype={
ap:function(a){return H.nV(a)&0x3ffffff},
aq:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.ih.prototype={
gB:function(a){var t=new P.c9(this,this.r,null,null,[null])
t.c=this.e
return t},
gl:function(a){return this.a},
E:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dS(b)},
dS:function(a){var t=this.d
if(t==null)return!1
return this.aA(t[this.az(a)],a)>=0},
cv:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.E(0,a)?a:null
else return this.e0(a)},
e0:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.az(a)]
r=this.aA(s,a)
if(r<0)return
return J.bx(s,r).gdU()},
i:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
H.c(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.bO(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
H.c(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.bO(r,b)}else return this.Y(0,b)},
Y:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.nj()
this.d=t}s=this.az(b)
r=t[s]
if(r==null){q=[this.aU(b)]
H.c(q!=null)
t[s]=q}else{if(this.aA(r,b)>=0)return!1
r.push(this.aU(b))}return!0},
as:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bP(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bP(this.c,b)
else return this.e2(0,b)},
e2:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.az(b)]
r=this.aA(s,b)
if(r<0)return!1
this.bQ(s.splice(r,1)[0])
return!0},
a_:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
bO:function(a,b){var t
if(a[b]!=null)return!1
t=this.aU(b)
H.c(!0)
a[b]=t
return!0},
bP:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bQ(t)
delete a[b]
return!0},
aU:function(a){var t,s
t=new P.ii(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bQ:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.c(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.c(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.r=this.r+1&67108863},
az:function(a){return J.as(a)&0x3ffffff},
aA:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.I(a[s].a,b))return s
return-1},
$isd:1,
$asd:null}
P.ii.prototype={
gdU:function(){return this.a}}
P.c9.prototype={
gt:function(){return this.d},
q:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a5(t))
else{t=this.c
if(t==null){this.sai(null)
return!1}else{this.sai(t.a)
this.c=this.c.b
return!0}}},
sai:function(a){this.d=a}}
P.id.prototype={}
P.dl.prototype={}
P.z.prototype={
gB:function(a){return new H.dm(a,this.gl(a),0,null,[H.ah(a,"z",0)])},
u:function(a,b){return this.h(a,b)},
cw:function(a,b){return new H.bN(a,b,[H.ah(a,"z",0),null])},
eJ:function(a,b,c){var t,s,r
t=this.gl(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gl(a))throw H.e(new P.a5(a))}return s},
k:function(a){return P.eX(a,"[","]")},
$isd:1,
$asd:null,
$isb:1,
$asb:null}
P.f9.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.i(a)
t.a=s+": "
t.a+=H.i(b)},
$S:function(){return{func:1,args:[,,]}}}
P.f5.prototype={
gB:function(a){return new P.ij(this,this.c,this.d,this.b,null,this.$ti)},
gar:function(a){return this.b===this.c},
gl:function(a){return(this.c-this.b&this.a.length-1)>>>0},
u:function(a,b){var t=(this.c-this.b&this.a.length-1)>>>0
if(C.b.av(0,b)||b>=t)H.K(P.D(b,this,"index",null,t))
return this.a[(C.b.a5(this.b,b)&this.a.length-1)>>>0]},
a_:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
k:function(a){return P.eX(this,"{","}")},
cB:function(){var t,s,r
t=this.b
if(t===this.c)throw H.e(H.dh());++this.d
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
if(this.b===t)this.bW();++this.d},
bW:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.E(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.bu(s,0,q,t,r)
C.a.bu(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sc0(s)},
dt:function(a,b){var t
H.c(!0)
t=new Array(8)
t.fixed$length=Array
this.sc0(H.E(t,[b]))},
sc0:function(a){this.a=a},
$asd:null}
P.ij.prototype={
gt:function(){return this.e},
q:function(){var t,s
t=this.a
if(this.c!==t.d)H.K(new P.a5(t))
s=this.d
if(s===this.b){this.sai(null)
return!1}this.sai(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sai:function(a){this.e=a}}
P.fU.prototype={
M:function(a,b){var t
for(t=J.bz(b);t.q();)this.i(0,t.gt())},
k:function(a){return P.eX(this,"{","}")},
$isd:1,
$asd:null}
P.fT.prototype={}
P.bX.prototype={$isd:1,$asd:null,$isb:1,$asb:null}
P.aA.prototype={}
P.M.prototype={}
P.bd.prototype={
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.bd))return!1
return this.a===b.a&&this.b===b.b},
W:function(a,b){return C.b.W(this.a,b.a)},
gw:function(a){var t=this.a
return(t^C.b.b1(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.mx(H.n0(this))
s=P.cr(H.mZ(this))
r=P.cr(H.mV(this))
q=P.cr(H.mW(this))
p=P.cr(H.mY(this))
o=P.cr(H.n_(this))
n=P.my(H.mX(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isM:1,
$asM:function(){return[P.bd]}}
P.Q.prototype={$isM:1,
$asM:function(){return[P.Y]}}
P.aD.prototype={
aN:function(a,b){return C.b.aN(this.a,b.gdT())},
av:function(a,b){return C.b.av(this.a,b.gdT())},
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.aD))return!1
return this.a===b.a},
gw:function(a){return this.a&0x1FFFFFFF},
W:function(a,b){return C.b.W(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.ek()
s=this.a
if(s<0)return"-"+new P.aD(0-s).k(0)
r=t.$1(C.b.L(s,6e7)%60)
q=t.$1(C.b.L(s,1e6)%60)
p=new P.ej().$1(s%1e6)
return""+C.b.L(s,36e8)+":"+H.i(r)+":"+H.i(q)+"."+H.i(p)},
$isM:1,
$asM:function(){return[P.aD]}}
P.ej.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.v,args:[P.o]}}}
P.ek.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.v,args:[P.o]}}}
P.be.prototype={}
P.cn.prototype={
k:function(a){return"Assertion failed"}}
P.bW.prototype={
k:function(a){return"Throw of null."}}
P.ai.prototype={
gaW:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaV:function(){return""},
k:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.i(t)
q=this.gaW()+s+r
if(!this.a)return q
p=this.gaV()
o=P.jw(this.b)
return q+p+": "+H.i(o)}}
P.dC.prototype={
gaW:function(){return"RangeError"},
gaV:function(){var t,s,r
H.c(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.i(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.i(t)
else if(r>t)s=": Not in range "+H.i(t)+".."+H.i(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.i(t)}return s}}
P.eT.prototype={
gaW:function(){return"RangeError"},
gaV:function(){H.c(this.a)
if(J.lE(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.i(t)},
gl:function(a){return this.f}}
P.x.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.dL.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.aw.prototype={
k:function(a){return"Bad state: "+this.a}}
P.a5.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.i(P.jw(t))+"."}}
P.dF.prototype={
k:function(a){return"Stack Overflow"},
$isbe:1}
P.eb.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.hY.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.i(t)}}
P.em.prototype={
k:function(a){return"Expando:"+H.i(this.a)},
h:function(a,b){var t,s
t=this.b
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.K(P.kc(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.kJ(b,"expando$values")
return s==null?null:H.kJ(s,t)}}
P.o.prototype={$isM:1,
$asM:function(){return[P.Y]}}
P.Z.prototype={
aL:function(a,b){return new H.dM(this,b,[H.ah(this,"Z",0)])},
gl:function(a){var t,s
H.c(!this.$isd)
t=this.gB(this)
for(s=0;t.q();)++s
return s},
ga7:function(a){var t,s
t=this.gB(this)
if(!t.q())throw H.e(H.dh())
s=t.gt()
if(t.q())throw H.e(H.mS())
return s},
u:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(P.mo("index"))
if(b<0)H.K(P.b0(b,0,null,"index",null))
for(t=this.gB(this),s=0;t.q();){r=t.gt()
if(b===s)return r;++s}throw H.e(P.D(b,this,"index",null,s))},
k:function(a){return P.mQ(this,"(",")")}}
P.di.prototype={}
P.b.prototype={$isd:1,$asd:null,$asb:null}
P.aG.prototype={}
P.aI.prototype={
gw:function(a){return P.r.prototype.gw.call(this,this)},
k:function(a){return"null"}}
P.Y.prototype={$isM:1,
$asM:function(){return[P.Y]}}
P.r.prototype={constructor:P.r,$isr:1,
A:function(a,b){return this===b},
gw:function(a){return H.b_(this)},
k:function(a){return H.fH(this)},
gD:function(a){return new H.aJ(H.iW(this),null)},
toString:function(){return this.k(this)}}
P.c_.prototype={}
P.v.prototype={$isM:1,
$asM:function(){return[P.v]}}
P.c1.prototype={
gl:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga9:function(){return this.a}}
W.n.prototype={}
W.e0.prototype={
k:function(a){return String(a)},
$isa:1}
W.e1.prototype={
k:function(a){return String(a)},
$isa:1}
W.a4.prototype={$isr:1}
W.e5.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.x("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.a4]},
$isd:1,
$asd:function(){return[W.a4]},
$ist:1,
$ast:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.co.prototype={}
W.aQ.prototype={$isa:1,$isaQ:1}
W.aR.prototype={
bm:function(a,b,c){if(c!=null)return this.dW(a,b,P.nD(c,null))
return this.dX(a,b)},
cY:function(a,b){return this.bm(a,b,null)},
dW:function(a,b,c){return a.getContext(b,c)},
dX:function(a,b){return a.getContext(b)},
$isaR:1}
W.cp.prototype={
aD:function(a,b,c){return a.addColorStop(b,c)}}
W.cq.prototype={
cj:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
eI:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
aM:function(a){return P.iR(a.getContextAttributes())}}
W.aS.prototype={$isa:1,
gl:function(a){return a.length}}
W.e9.prototype={$isa:1}
W.B.prototype={$isr:1}
W.bc.prototype={
bM:function(a,b){var t,s
t=$.$get$kp()
s=t[b]
if(typeof s==="string")return s
s=this.eb(a,b)
t[b]=s
return s},
eb:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.mz()+b
if(t in a)return t
return b},
gl:function(a){return a.length}}
W.ea.prototype={}
W.ec.prototype={
h:function(a,b){return a[b]},
gl:function(a){return a.length}}
W.ed.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gO:function(a){return a.z}}
W.cs.prototype={}
W.bB.prototype={
eg:function(a,b){return a.adoptNode(b)},
cZ:function(a,b){return a.getElementById(b)},
eY:function(a,b){return a.querySelector(b)}}
W.ct.prototype={$isa:1}
W.ee.prototype={
k:function(a){return String(a)}}
W.cu.prototype={
ex:function(a,b){return a.createHTMLDocument(b)}}
W.ef.prototype={
gaK:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gO:function(a){return a.z}}
W.cv.prototype={
gaK:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gO:function(a){return a.z}}
W.cw.prototype={
k:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.ga4(a))+" x "+H.i(this.ga3(a))},
A:function(a,b){var t
if(b==null)return!1
t=J.w(b)
if(!t.$isN)return!1
return a.left===t.gbf(b)&&a.top===t.gbl(b)&&this.ga4(a)===t.ga4(b)&&this.ga3(a)===t.ga3(b)},
gw:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.ga4(a)
q=this.ga3(a)
return W.l9(W.b8(W.b8(W.b8(W.b8(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga3:function(a){return a.height},
gbf:function(a){return a.left},
gbl:function(a){return a.top},
ga4:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isN:1,
$asN:function(){}}
W.eg.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.x("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[P.v]},
$isd:1,
$asd:function(){return[P.v]},
$ist:1,
$ast:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]}}
W.eh.prototype={
gl:function(a){return a.length}}
W.a6.prototype={
gej:function(a){return new W.hR(a)},
k:function(a){return a.localName},
P:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.kx
if(t==null){t=H.E([],[W.dx])
s=new W.dy(t)
C.a.i(t,W.l7(null))
C.a.i(t,W.la())
$.kx=s
d=s}else d=t
t=$.kw
if(t==null){t=new W.dS(d)
$.kw=t
c=t}else{t.a=d
c=t}}if($.aE==null){t=document
s=t.implementation
s=(s&&C.B).ex(s,"")
$.aE=s
$.jv=s.createRange()
s=$.aE
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.aE.head;(t&&C.C).V(t,r)}t=$.aE
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.jT(s,"$isaQ")}t=$.aE
if(!!this.$isaQ)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.aE.body;(t&&C.h).V(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.E(C.M,a.tagName)){t=$.jv;(t&&C.y).d_(t,q)
t=$.jv
p=(t&&C.y).ev(t,b)}else{q.innerHTML=b
p=$.aE.createDocumentFragment()
for(t=J.m(p);s=q.firstChild,s!=null;)t.V(p,s)}t=$.aE.body
if(q==null?t!=null:q!==t)J.mb(q)
c.bt(p)
C.k.eg(document,p)
return p},
ew:function(a,b,c){return this.P(a,b,c,null)},
d9:function(a,b,c,d){a.textContent=null
this.V(a,this.P(a,b,c,d))},
d8:function(a,b){return this.d9(a,b,null,null)},
ad:function(a,b){return a.getAttribute(b)},
e3:function(a,b){return a.removeAttribute(b)},
$isa:1,
$isr:1,
$isa6:1,
$isj:1,
$isu:1,
gf4:function(a){return a.tagName}}
W.iP.prototype={
$1:function(a){return!!J.w(a).$isa6},
$S:function(){return{func:1,args:[,]}}}
W.l.prototype={$isr:1,$isl:1}
W.j.prototype={
dM:function(a,b,c,d){return a.addEventListener(b,H.bv(c,1),!1)},
e5:function(a,b,c,d){return a.removeEventListener(b,H.bv(c,1),!1)},
$isr:1,
$isj:1}
W.a7.prototype={$isr:1}
W.eF.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.x("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.a7]},
$isd:1,
$asd:function(){return[W.a7]},
$ist:1,
$ast:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.eG.prototype={
gl:function(a){return a.length}}
W.eK.prototype={
gl:function(a){return a.length}}
W.a8.prototype={$isr:1}
W.cB.prototype={}
W.eO.prototype={
gl:function(a){return a.length}}
W.bK.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.x("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.u]},
$isd:1,
$asd:function(){return[W.u]},
$ist:1,
$ast:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.cC.prototype={}
W.eP.prototype={
K:function(a,b){return a.send(b)}}
W.bL.prototype={}
W.bf.prototype={$isbf:1}
W.bg.prototype={$isbg:1}
W.bh.prototype={$isbh:1}
W.eU.prototype={$isa:1,$isa6:1}
W.aY.prototype={$isr:1,$isl:1,$isaY:1}
W.f7.prototype={
k:function(a){return String(a)}}
W.bO.prototype={}
W.fc.prototype={
gl:function(a){return a.length}}
W.fd.prototype={
fd:function(a,b,c){return a.send(b,c)},
K:function(a,b){return a.send(b)}}
W.bP.prototype={}
W.aa.prototype={$isr:1}
W.fe.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.x("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.aa]},
$isd:1,
$asd:function(){return[W.aa]},
$ist:1,
$ast:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.S.prototype={$isr:1,$isl:1,$isS:1}
W.fo.prototype={$isa:1}
W.V.prototype={
ga7:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.e(new P.aw("No elements"))
if(s>1)throw H.e(new P.aw("More than one element"))
return t.firstChild},
M:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.m(s),p=0;p<r;++p)q.V(s,t.firstChild)
return},
j:function(a,b,c){var t=this.a
J.lH(t,c,C.w.h(t.childNodes,b))},
gB:function(a){var t=this.a.childNodes
return new W.cz(t,t.length,-1,null,[H.ah(t,"C",0)])},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){return C.w.h(this.a.childNodes,b)},
$asd:function(){return[W.u]},
$asdl:function(){return[W.u]},
$asb:function(){return[W.u]},
$asbX:function(){return[W.u]}}
W.u.prototype={
eZ:function(a){var t=a.parentNode
if(t!=null)J.by(t,a)},
k:function(a){var t=a.nodeValue
return t==null?this.de(a):t},
V:function(a,b){return a.appendChild(b)},
e4:function(a,b){return a.removeChild(b)},
e6:function(a,b,c){return a.replaceChild(b,c)},
$isr:1,
$isj:1,
$isu:1,
gbg:function(a){return a.previousSibling}}
W.dw.prototype={
bh:function(a){return a.previousNode()}}
W.bV.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.x("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.u]},
$isd:1,
$asd:function(){return[W.u]},
$ist:1,
$ast:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.fx.prototype={$isa:1}
W.fA.prototype={
gl:function(a){return a.length}}
W.ab.prototype={$isr:1,
gl:function(a){return a.length}}
W.fC.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.x("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.ab]},
$isd:1,
$asd:function(){return[W.ab]},
$ist:1,
$ast:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.fF.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.fG.prototype={
K:function(a,b){return a.send(b)}}
W.dB.prototype={
ev:function(a,b){return a.createContextualFragment(b)},
d_:function(a,b){return a.selectNodeContents(b)}}
W.fQ.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gO:function(a){return a.z}}
W.dD.prototype={
K:function(a,b){return a.send(b)}}
W.fS.prototype={
gl:function(a){return a.length}}
W.fV.prototype={$isa:1}
W.ac.prototype={$isr:1,$isj:1}
W.fW.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.x("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.ac]},
$isd:1,
$asd:function(){return[W.ac]},
$ist:1,
$ast:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
W.ad.prototype={$isr:1}
W.fY.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.x("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.ad]},
$isd:1,
$asd:function(){return[W.ad]},
$ist:1,
$ast:function(){return[W.ad]},
$isb:1,
$asb:function(){return[W.ad]}}
W.ae.prototype={$isr:1,
gl:function(a){return a.length}}
W.h2.prototype={
h:function(a,b){return this.bV(a,b)},
aF:function(a,b){var t,s
for(t=0;!0;++t){s=this.e_(a,t)
if(s==null)return
b.$2(s,this.bV(a,s))}},
gl:function(a){return a.length},
bV:function(a,b){return a.getItem(b)},
e_:function(a,b){return a.key(b)}}
W.a_.prototype={$isr:1}
W.am.prototype={}
W.dG.prototype={
P:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aQ(a,b,c,d)
t=W.mB("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.V(s).M(0,new W.V(t))
return s}}
W.hb.prototype={
P:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aQ(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.z.P(t.createElement("table"),b,c,d)
t.toString
t=new W.V(t)
r=t.ga7(t)
r.toString
t=new W.V(r)
q=t.ga7(t)
s.toString
q.toString
new W.V(s).M(0,new W.V(q))
return s}}
W.hc.prototype={
P:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aQ(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.z.P(t.createElement("table"),b,c,d)
t.toString
t=new W.V(t)
r=t.ga7(t)
s.toString
r.toString
new W.V(s).M(0,new W.V(r))
return s}}
W.c2.prototype={$isc2:1}
W.af.prototype={$isr:1,$isj:1}
W.a0.prototype={$isr:1,$isj:1}
W.hf.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.x("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.a0]},
$isd:1,
$asd:function(){return[W.a0]},
$ist:1,
$ast:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.hg.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.x("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.af]},
$isd:1,
$asd:function(){return[W.af]},
$ist:1,
$ast:function(){return[W.af]},
$isb:1,
$asb:function(){return[W.af]}}
W.hi.prototype={
gl:function(a){return a.length}}
W.ag.prototype={$isr:1}
W.b1.prototype={$isr:1,$isl:1,$isb1:1}
W.hm.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.x("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.ag]},
$isd:1,
$asd:function(){return[W.ag]},
$ist:1,
$ast:function(){return[W.ag]},
$isb:1,
$asb:function(){return[W.ag]}}
W.hn.prototype={
gl:function(a){return a.length}}
W.bo.prototype={}
W.hp.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gO:function(a){return a.z}}
W.dJ.prototype={
bh:function(a){return a.previousNode()}}
W.aK.prototype={}
W.hu.prototype={
k:function(a){return String(a)},
$isa:1}
W.bp.prototype={$isbp:1}
W.hw.prototype={
gl:function(a){return a.length}}
W.hz.prototype={
gl:function(a){return a.length}}
W.hA.prototype={
K:function(a,b){return a.send(b)}}
W.b3.prototype={
gez:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(new P.x("deltaY is not supported"))},
$isr:1,
$isl:1,
$isS:1,
$isb3:1}
W.c5.prototype={
gei:function(a){var t,s
t=P.Y
s=new P.O(0,$.y,null,[t])
this.dV(a)
this.e7(a,W.le(new W.hC(new P.iD(s,[t]))))
return s},
e7:function(a,b){return a.requestAnimationFrame(H.bv(b,1))},
dV:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isa:1}
W.hC.prototype={
$1:function(a){this.a.bc(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.hD.prototype={$isa:1}
W.b4.prototype={$isa:1}
W.hM.prototype={
k:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
A:function(a,b){var t,s,r
if(b==null)return!1
t=J.w(b)
if(!t.$isN)return!1
s=a.left
r=t.gbf(b)
if(s==null?r==null:s===r){s=a.top
r=t.gbl(b)
if(s==null?r==null:s===r){s=a.width
r=t.ga4(b)
if(s==null?r==null:s===r){s=a.height
t=t.ga3(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gw:function(a){var t,s,r,q
t=J.as(a.left)
s=J.as(a.top)
r=J.as(a.width)
q=J.as(a.height)
return W.l9(W.b8(W.b8(W.b8(W.b8(0,t),s),r),q))},
$isN:1,
$asN:function(){},
ga3:function(a){return a.height},
gbf:function(a){return a.left},
gbl:function(a){return a.top},
ga4:function(a){return a.width}}
W.dO.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.x("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[P.N]},
$isd:1,
$asd:function(){return[P.N]},
$ist:1,
$ast:function(){return[P.N]},
$isb:1,
$asb:function(){return[P.N]}}
W.hO.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.x("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.B]},
$isd:1,
$asd:function(){return[W.B]},
$ist:1,
$ast:function(){return[W.B]},
$isb:1,
$asb:function(){return[W.B]}}
W.hP.prototype={$isa:1}
W.hQ.prototype={
ga3:function(a){return a.height},
ga4:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.ib.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.x("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.a8]},
$isd:1,
$asd:function(){return[W.a8]},
$ist:1,
$ast:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.ic.prototype={$isa:1}
W.dQ.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.x("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.u]},
$isd:1,
$asd:function(){return[W.u]},
$ist:1,
$ast:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.ix.prototype={$isa:1}
W.iA.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.x("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.ae]},
$isd:1,
$asd:function(){return[W.ae]},
$ist:1,
$ast:function(){return[W.ae]},
$isb:1,
$asb:function(){return[W.ae]}}
W.iB.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.x("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.a_]},
$isd:1,
$asd:function(){return[W.a_]},
$ist:1,
$ast:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.iI.prototype={$isa:1}
W.iJ.prototype={$isa:1}
W.hK.prototype={
aF:function(a,b){var t,s,r,q,p,o
for(t=this.gI(this),s=t.length,r=this.a,q=J.m(r),p=0;p<t.length;t.length===s||(0,H.F)(t),++p){o=t[p]
b.$2(o,q.ad(r,o))}},
gI:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.E([],[P.v])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.i(s,p.name)}return s},
gdY:function(){return this.a}}
W.hR.prototype={
h:function(a,b){return J.js(this.a,b)},
gl:function(a){return this.gI(this).length}}
W.hV.prototype={
cu:function(a,b,c,d){return W.an(this.a,this.b,a,!1,H.aB(this,0))}}
W.hS.prototype={}
W.hW.prototype={
eo:function(a){if(this.b==null)return
this.ee()
this.b=null
this.se1(null)
return},
ed:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.lF(r,this.c,t,!1)}},
ee:function(){var t,s,r
t=this.d
s=t!=null
if(s){r=this.b
r.toString
if(s)J.lG(r,this.c,t,!1)}},
dH:function(a,b,c,d,e){this.ed()},
se1:function(a){this.d=a}}
W.hX.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.c8.prototype={
aa:function(a){return $.$get$l8().E(0,W.bC(a))},
Z:function(a,b,c){var t,s,r
t=W.bC(a)
s=$.$get$jM()
r=s.h(0,H.i(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
dI:function(a){var t,s
t=$.$get$jM()
if(t.gar(t)){for(s=0;s<262;++s)t.j(0,C.L[s],W.nK())
for(s=0;s<12;++s)t.j(0,C.m[s],W.nL())}}}
W.C.prototype={
gB:function(a){return new W.cz(a,this.gl(a),-1,null,[H.ah(a,"C",0)])},
$isd:1,
$asd:null,
$isb:1,
$asb:null}
W.dy.prototype={
aa:function(a){return C.a.c5(this.a,new W.fq(a))},
Z:function(a,b,c){return C.a.c5(this.a,new W.fp(a,b,c))}}
W.fq.prototype={
$1:function(a){return a.aa(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.fp.prototype={
$1:function(a){return a.Z(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.cb.prototype={
aa:function(a){return this.a.E(0,W.bC(a))},
Z:function(a,b,c){var t,s
t=W.bC(a)
s=this.c
if(s.E(0,H.i(t)+"::"+b))return this.d.eh(c)
else if(s.E(0,"*::"+b))return this.d.eh(c)
else{s=this.b
if(s.E(0,H.i(t)+"::"+b))return!0
else if(s.E(0,"*::"+b))return!0
else if(s.E(0,H.i(t)+"::*"))return!0
else if(s.E(0,"*::*"))return!0}return!1},
dK:function(a,b,c,d){var t,s,r
this.a.M(0,c)
t=b.aL(0,new W.iy())
s=b.aL(0,new W.iz())
this.b.M(0,t)
r=this.c
r.M(0,C.v)
r.M(0,s)}}
W.iy.prototype={
$1:function(a){return!C.a.E(C.m,a)},
$S:function(){return{func:1,args:[,]}}}
W.iz.prototype={
$1:function(a){return C.a.E(C.m,a)},
$S:function(){return{func:1,args:[,]}}}
W.iE.prototype={
Z:function(a,b,c){if(this.dh(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.js(a,"template")==="")return this.e.E(0,b)
return!1}}
W.iF.prototype={
$1:function(a){return"TEMPLATE::"+H.i(a)},
$S:function(){return{func:1,args:[,]}}}
W.iC.prototype={
aa:function(a){var t=J.w(a)
if(!!t.$isbZ)return!1
t=!!t.$isL
if(t&&W.bC(a)==="foreignObject")return!1
if(t)return!0
return!1},
Z:function(a,b,c){if(b==="is"||C.e.bw(b,"on"))return!1
return this.aa(a)}}
W.cz.prototype={
q:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbX(J.bx(this.a,t))
this.c=t
return!0}this.sbX(null)
this.c=s
return!1},
gt:function(){return this.d},
sbX:function(a){this.d=a}}
W.dx.prototype={}
W.iw.prototype={}
W.dS.prototype={
bt:function(a){new W.iG(this).$2(a,null)},
aC:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)J.by(t,a)}else J.by(b,a)},
ea:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.m_(a)
r=J.js(s.gdY(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.R(n)}p="element unprintable"
try{p=J.aC(a)}catch(n){H.R(n)}try{o=W.bC(a)
this.e9(a,b,t,p,o,s,r)}catch(n){if(H.R(n) instanceof P.ai)throw n
else{this.aC(a,b)
window
m="Removing corrupted element "+H.i(p)
if(typeof console!="undefined")console.warn(m)}}},
e9:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.aC(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.aa(a)){this.aC(a,b)
window
t="Removing disallowed element <"+H.i(e)+"> from "+J.aC(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.Z(a,"is",g)){this.aC(a,b)
window
t="Removing disallowed type extension <"+H.i(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gI(f)
s=H.E(t.slice(0),[H.aB(t,0)])
for(r=f.gI(f).length-1,t=f.a,q=J.m(t);r>=0;--r){p=s[r]
if(!this.a.Z(a,J.mg(p),q.ad(t,p))){window
o="Removing disallowed attribute <"+H.i(e)+" "+p+'="'+H.i(q.ad(t,p))+'">'
if(typeof console!="undefined")console.warn(o)
q.ad(t,p)
q.e3(t,p)}}if(!!J.w(a).$isc2)this.bt(a.content)}}
W.iG.prototype={
$2:function(a,b){var t,s,r,q
switch(a.nodeType){case 1:this.a.ea(a,b)
break
case 8:case 11:case 3:case 4:break
default:if(b==null){r=a.parentNode
if(r!=null)J.by(r,a)}else J.by(b,a)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.m0(t)}catch(q){H.R(q)
r=t
J.by(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.u,W.u]}}}
W.bD.prototype={$isd:1,
$asd:function(){return[W.af]},
$isb:1,
$asb:function(){return[W.af]}}
W.bE.prototype={$isd:1,
$asd:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
W.bF.prototype={$isd:1,
$asd:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.bG.prototype={$isd:1,
$asd:function(){return[W.af]},
$isb:1,
$asb:function(){return[W.af]}}
W.bH.prototype={$isd:1,
$asd:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
W.bI.prototype={$isd:1,
$asd:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.cD.prototype={}
W.cX.prototype={$isd:1,
$asd:function(){return[P.N]},
$isb:1,
$asb:function(){return[P.N]}}
W.cJ.prototype={$isd:1,
$asd:function(){return[W.ad]},
$isb:1,
$asb:function(){return[W.ad]}}
W.cQ.prototype={$isd:1,
$asd:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.cR.prototype={$isd:1,
$asd:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.cS.prototype={$isd:1,
$asd:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.cT.prototype={$isd:1,
$asd:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.cU.prototype={$isd:1,
$asd:function(){return[W.ae]},
$isb:1,
$asb:function(){return[W.ae]}}
W.cV.prototype={$isd:1,
$asd:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.cW.prototype={$isd:1,
$asd:function(){return[W.B]},
$isb:1,
$asb:function(){return[W.B]}}
W.cH.prototype={$isd:1,
$asd:function(){return[W.ag]},
$isb:1,
$asb:function(){return[W.ag]}}
W.cI.prototype={$isd:1,
$asd:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.cK.prototype={$isd:1,
$asd:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.cM.prototype={$isd:1,
$asd:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.cN.prototype={$isd:1,
$asd:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.cO.prototype={$isd:1,
$asd:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]}}
W.cY.prototype={$isd:1,
$asd:function(){return[W.B]},
$isb:1,
$asb:function(){return[W.B]}}
W.cZ.prototype={$isd:1,
$asd:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.d9.prototype={$isd:1,
$asd:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.da.prototype={$isd:1,
$asd:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.d8.prototype={$isd:1,
$asd:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.dd.prototype={$isd:1,
$asd:function(){return[W.ag]},
$isb:1,
$asb:function(){return[W.ag]}}
W.de.prototype={$isd:1,
$asd:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.df.prototype={$isd:1,
$asd:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.dg.prototype={$isd:1,
$asd:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]}}
W.d0.prototype={$isd:1,
$asd:function(){return[W.ae]},
$isb:1,
$asb:function(){return[W.ae]}}
W.d2.prototype={$isd:1,
$asd:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.d4.prototype={$isd:1,
$asd:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.d6.prototype={$isd:1,
$asd:function(){return[W.ad]},
$isb:1,
$asb:function(){return[W.ad]}}
W.db.prototype={$isd:1,
$asd:function(){return[P.N]},
$isb:1,
$asb:function(){return[P.N]}}
W.dc.prototype={$isd:1,
$asd:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
P.iQ.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.v,,]}}}
P.ig.prototype={
eW:function(){return Math.random()}}
P.io.prototype={}
P.N.prototype={$asN:null}
P.e_.prototype={$isa:1}
P.aP.prototype={$isa:1}
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
P.ez.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eA.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gO:function(a){return a.z}}
P.eB.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eC.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gO:function(a){return a.z}}
P.eD.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eE.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eH.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eJ.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.aj.prototype={}
P.aF.prototype={$isa:1}
P.eQ.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.au.prototype={$isr:1}
P.f1.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return this.a1(a,b)},
j:function(a,b,c){throw H.e(new P.x("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
a1:function(a,b){return a.getItem(b)},
$isd:1,
$asd:function(){return[P.au]},
$isb:1,
$asb:function(){return[P.au]}}
P.fa.prototype={$isa:1}
P.fb.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.av.prototype={$isr:1}
P.fr.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return this.a1(a,b)},
j:function(a,b,c){throw H.e(new P.x("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
a1:function(a,b){return a.getItem(b)},
$isd:1,
$asd:function(){return[P.av]},
$isb:1,
$asb:function(){return[P.av]}}
P.fy.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fD.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fE.prototype={
gl:function(a){return a.length}}
P.fJ.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fK.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bZ.prototype={$isa:1,$isbZ:1}
P.h8.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return this.a1(a,b)},
j:function(a,b,c){throw H.e(new P.x("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
a1:function(a,b){return a.getItem(b)},
$isd:1,
$asd:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]}}
P.L.prototype={
P:function(a,b,c,d){var t,s,r,q,p,o
t=H.E([],[W.dx])
C.a.i(t,W.l7(null))
C.a.i(t,W.la())
C.a.i(t,new W.iC())
c=new W.dS(new W.dy(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.h).ew(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.V(q)
o=t.ga7(t)
for(t=J.m(p);r=o.firstChild,r!=null;)t.V(p,r)
return p},
$isa:1,
$isL:1}
P.h9.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ha.prototype={$isa:1}
P.dH.prototype={}
P.he.prototype={$isa:1}
P.c3.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ax.prototype={$isr:1}
P.ho.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return this.a1(a,b)},
j:function(a,b,c){throw H.e(new P.x("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
a1:function(a,b){return a.getItem(b)},
$isd:1,
$asd:function(){return[P.ax]},
$isb:1,
$asb:function(){return[P.ax]}}
P.hv.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.hx.prototype={$isa:1}
P.hy.prototype={$isa:1}
P.c7.prototype={$isa:1}
P.it.prototype={$isa:1}
P.iu.prototype={$isa:1}
P.iv.prototype={$isa:1}
P.cG.prototype={$isd:1,
$asd:function(){return[P.au]},
$isb:1,
$asb:function(){return[P.au]}}
P.cE.prototype={$isd:1,
$asd:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]}}
P.cL.prototype={$isd:1,
$asd:function(){return[P.av]},
$isb:1,
$asb:function(){return[P.av]}}
P.cP.prototype={$isd:1,
$asd:function(){return[P.ax]},
$isb:1,
$asb:function(){return[P.ax]}}
P.d_.prototype={$isd:1,
$asd:function(){return[P.au]},
$isb:1,
$asb:function(){return[P.au]}}
P.d7.prototype={$isd:1,
$asd:function(){return[P.av]},
$isb:1,
$asb:function(){return[P.av]}}
P.d3.prototype={$isd:1,
$asd:function(){return[P.ax]},
$isb:1,
$asb:function(){return[P.ax]}}
P.d5.prototype={$isd:1,
$asd:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]}}
P.e4.prototype={
gl:function(a){return a.length}}
P.fO.prototype={
c3:function(a,b){return a.activeTexture(b)},
c6:function(a,b,c){return a.attachShader(b,c)},
c7:function(a,b,c){return a.bindBuffer(b,c)},
c8:function(a,b,c){return a.bindFramebuffer(b,c)},
c9:function(a,b,c){return a.bindTexture(b,c)},
ca:function(a,b){return a.blendEquation(b)},
cb:function(a,b,c){return a.blendFunc(b,c)},
cc:function(a,b,c,d){return a.bufferData(b,c,d)},
cd:function(a,b){return a.clear(b)},
ce:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
cf:function(a,b){return a.compileShader(b)},
cg:function(a){return a.createBuffer()},
ci:function(a){return a.createProgram()},
ck:function(a,b){return a.createShader(b)},
cl:function(a){return a.createTexture()},
cm:function(a,b){return a.depthMask(b)},
cn:function(a,b){return a.disable(b)},
co:function(a,b,c,d){return a.drawArrays(b,c,d)},
cp:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cq:function(a,b){return a.enable(b)},
cr:function(a,b){return a.enableVertexAttribArray(b)},
aM:function(a){return P.iR(a.getContextAttributes())},
bn:function(a){return a.getError()},
bo:function(a,b){return a.getProgramInfoLog(b)},
bp:function(a,b,c){return a.getProgramParameter(b,c)},
bq:function(a,b){return a.getShaderInfoLog(b)},
br:function(a,b,c){return a.getShaderParameter(b,c)},
bs:function(a,b,c){return a.getUniformLocation(b,c)},
ct:function(a,b){return a.linkProgram(b)},
cA:function(a,b,c){return a.pixelStorei(b,c)},
bv:function(a,b,c){return a.shaderSource(b,c)},
bx:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bj:function(a,b,c,d,e,f,g,h,i,j){var t,s
t=J.w(g)
if(!!t.$isbg||g==null)s=!0
else s=!1
if(s){this.b3(a,b,c,d,e,f,P.lk(g))
return}if(!!t.$isbh)s=!0
else s=!1
if(s){this.b4(a,b,c,d,e,f,g)
return}if(!!t.$isaR)s=!0
else s=!1
if(s){this.b5(a,b,c,d,e,f,g)
return}if(!!t.$isbp)s=!0
else s=!1
if(s){this.b6(a,b,c,d,e,f,g)
return}if(!!t.$isbf)t=!0
else t=!1
if(t){this.b7(a,b,c,d,e,f,g)
return}throw H.e(P.e2("Incorrect number or type of arguments"))},
cE:function(a,b,c,d,e,f,g){return this.bj(a,b,c,d,e,f,g,null,null,null)},
b3:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b4:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b5:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b6:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b7:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cF:function(a,b,c,d){return a.texParameterf(b,c,d)},
cG:function(a,b,c,d){return a.texParameteri(b,c,d)},
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
cT:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cU:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fP.prototype={
ek:function(a,b){return a.beginTransformFeedback(b)},
en:function(a,b){return a.bindVertexArray(b)},
ey:function(a){return a.createVertexArray()},
eF:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
eG:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
eH:function(a){return a.endTransformFeedback()},
f9:function(a,b,c,d){this.ec(a,b,c,d)
return},
ec:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
fa:function(a,b,c){return a.vertexAttribDivisor(b,c)},
c3:function(a,b){return a.activeTexture(b)},
c6:function(a,b,c){return a.attachShader(b,c)},
c7:function(a,b,c){return a.bindBuffer(b,c)},
c8:function(a,b,c){return a.bindFramebuffer(b,c)},
c9:function(a,b,c){return a.bindTexture(b,c)},
ca:function(a,b){return a.blendEquation(b)},
cb:function(a,b,c){return a.blendFunc(b,c)},
cc:function(a,b,c,d){return a.bufferData(b,c,d)},
cd:function(a,b){return a.clear(b)},
ce:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
cf:function(a,b){return a.compileShader(b)},
cg:function(a){return a.createBuffer()},
ci:function(a){return a.createProgram()},
ck:function(a,b){return a.createShader(b)},
cl:function(a){return a.createTexture()},
cm:function(a,b){return a.depthMask(b)},
cn:function(a,b){return a.disable(b)},
co:function(a,b,c,d){return a.drawArrays(b,c,d)},
cp:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cq:function(a,b){return a.enable(b)},
cr:function(a,b){return a.enableVertexAttribArray(b)},
aM:function(a){return P.iR(a.getContextAttributes())},
bn:function(a){return a.getError()},
bo:function(a,b){return a.getProgramInfoLog(b)},
bp:function(a,b,c){return a.getProgramParameter(b,c)},
bq:function(a,b){return a.getShaderInfoLog(b)},
br:function(a,b,c){return a.getShaderParameter(b,c)},
bs:function(a,b,c){return a.getUniformLocation(b,c)},
ct:function(a,b){return a.linkProgram(b)},
cA:function(a,b,c){return a.pixelStorei(b,c)},
bv:function(a,b,c){return a.shaderSource(b,c)},
bx:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bj:function(a,b,c,d,e,f,g,h,i,j){var t,s
t=J.w(g)
if(!!t.$isbg||g==null)s=!0
else s=!1
if(s){this.b3(a,b,c,d,e,f,P.lk(g))
return}if(!!t.$isbh)s=!0
else s=!1
if(s){this.b4(a,b,c,d,e,f,g)
return}if(!!t.$isaR)s=!0
else s=!1
if(s){this.b5(a,b,c,d,e,f,g)
return}if(!!t.$isbp)s=!0
else s=!1
if(s){this.b6(a,b,c,d,e,f,g)
return}if(!!t.$isbf)t=!0
else t=!1
if(t){this.b7(a,b,c,d,e,f,g)
return}throw H.e(P.e2("Incorrect number or type of arguments"))},
cE:function(a,b,c,d,e,f,g){return this.bj(a,b,c,d,e,f,g,null,null,null)},
b3:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b4:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b5:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b6:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b7:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cF:function(a,b,c,d){return a.texParameterf(b,c,d)},
cG:function(a,b,c,d){return a.texParameteri(b,c,d)},
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
cT:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cU:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isa:1}
P.iH.prototype={$isa:1}
P.fZ.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return P.iR(this.dZ(a,b))},
j:function(a,b,c){throw H.e(new P.x("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
dZ:function(a,b){return a.item(b)},
$isd:1,
$asd:function(){return[P.aG]},
$isb:1,
$asb:function(){return[P.aG]}}
P.cF.prototype={$isd:1,
$asd:function(){return[P.aG]},
$isb:1,
$asb:function(){return[P.aG]}}
P.d1.prototype={$isd:1,
$asd:function(){return[P.aG]},
$isb:1,
$asb:function(){return[P.aG]}}
B.je.prototype={
$1:function(a){$.$get$iS().j(0,a.which,!0)},
$S:function(){return{func:1,args:[W.aY]}}}
B.jf.prototype={
$1:function(a){$.$get$iS().j(0,a.which,null)},
$S:function(){return{func:1,args:[W.aY]}}}
B.jg.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.nA=t
$.nB=C.b.af(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.jW=s-C.b.L(window.innerWidth,2)
$.lu=-(t-C.b.L(window.innerHeight,2))},
$S:function(){return{func:1,args:[W.S]}}}
B.jh.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.cj=t-C.b.L(window.innerWidth,2)
$.ck=-(s-C.b.L(window.innerHeight,2))
if(a.button===2)$.$get$ch().j(0,"right",!0)
else $.$get$ch().j(0,"left",!0)},
$S:function(){return{func:1,args:[W.S]}}}
B.ji.prototype={
$1:function(a){if(a.button===2)$.$get$ch().j(0,"right",null)
else $.$get$ch().j(0,"left",null)},
$S:function(){return{func:1,args:[W.S]}}}
B.fs.prototype={
dv:function(a,b,c,d){var t
d.toString
W.an(d,W.nJ().$1(d),new B.ft(this),!1,W.b3)
W.an(d,"mousemove",new B.fu(this),!1,W.S)
t=W.b1
W.an(d,"touchstart",new B.fv(),!1,t)
W.an(d,"touchmove",new B.fw(this),!1,t)
B.nZ(null)}}
B.ft.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.a5.gez(a)*r.k3
if(C.c.af(r.fy,t)>0)r.fy=H.a1(C.c.af(r.fy,t))}catch(q){s=H.R(q)
P.aq(s)}},
$S:function(){return{func:1,args:[W.b3]}}}
B.fu.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=H.a1(t.go+C.b.af($.jW,$.cj)*0.01)
s=t.id
r=$.ck
q=$.lu
t.id=H.a1(s+(r-q)*0.01)
$.cj=$.jW
$.ck=q}},
$S:function(){return{func:1,args:[W.S]}}}
B.fv.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.ac(t.clientX)
C.c.ac(t.clientY)
$.cj=s
C.c.ac(t.clientX)
$.ck=C.c.ac(t.clientY)},
$S:function(){return{func:1,args:[W.b1]}}}
B.fw.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.ac(t.clientX)
t=C.c.ac(t.clientY)
r=this.a
r.go=H.a1(r.go+C.b.af(s,$.cj)*0.01)
r.id=H.a1(r.id+($.ck-t)*0.01)
$.cj=s
$.ck=t},
$S:function(){return{func:1,args:[W.b1]}}}
G.ff.prototype={}
G.dK.prototype={
G:function(a,b){var t=this.d
if(H.aM(!t.H(0,a)))H.b9("uniform "+a+" already set")
t.j(0,a,b)},
bF:function(){return this.d},
k:function(a){var t,s,r,q
t=H.E(["{"+new H.aJ(H.iW(this),null).k(0)+"}["+this.a+"]"],[P.v])
for(s=this.d,r=s.gI(s),r=r.gB(r);r.q();){q=r.gt()
C.a.i(t,H.i(q)+": "+H.i(s.h(0,q)))}return C.a.ab(t,"\n")}}
G.e6.prototype={}
G.e8.prototype={
cs:function(a,b,c){J.lX(this.a,b)
if(c>0)J.mm(this.a,b,c)}}
G.eL.prototype={}
G.A.prototype={}
G.bJ.prototype={}
G.aU.prototype={
T:function(a){var t=this.e
H.c(!t.H(0,a))
H.c(C.e.bw(a,"a"))
switch($.$get$W().h(0,a).a){case"vec2":t.j(0,a,H.E([],[T.q]))
break
case"vec3":t.j(0,a,H.E([],[T.h]))
break
case"vec4":t.j(0,a,H.E([],[T.aL]))
break
case"float":t.j(0,a,H.E([],[P.Q]))
break
case"uvec4":t.j(0,a,H.E([],[[P.b,P.o]]))
break
default:if(H.aM(!1))H.b9("unknown type for "+a)}},
bA:function(a){var t,s,r
H.c(!0)
t=this.d.length
for(s=this.c,r=0;r<a;++r,t+=4)C.a.i(s,new G.bJ(t,t+1,t+2,t+3))},
a8:function(a){var t,s,r,q,p
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.F)(a),++r){q=a[r]
p=new T.h(new Float32Array(3))
p.v(q)
C.a.i(s,p)}},
dj:function(a){var t,s,r,q,p
H.c(!0)
t=this.d
s=t.length
C.a.i(this.b,new G.A(s,s+1,s+2))
for(r=0;r<3;++r){q=a[r]
p=new T.h(new Float32Array(3))
p.v(q)
C.a.i(t,p)}},
ah:function(a,b){var t,s,r,q,p,o,n
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.F)(b),++q){p=b[q]
o=new Float32Array(2)
n=p.a
o[1]=n[1]
o[0]=n[0]
r.i(t,new T.q(o))}},
aw:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.F)(b),++q){p=b[q]
o=new T.h(new Float32Array(3))
o.v(p)
r.i(t,o)}},
dk:function(a){var t,s,r,q,p
H.c(!0)
t=this.d
s=t.length
C.a.i(this.c,new G.bJ(s,s+1,s+2,s+3))
for(r=0;r<4;++r){q=a[r]
p=new T.h(new Float32Array(3))
p.v(q)
C.a.i(t,p)}},
dq:function(){var t,s,r,q,p,o,n,m,l,k
t=this.b
H.c(t.length>0||this.c.length>0)
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
p+=6}H.c(p===q.length)
return q},
dr:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=this.d
s=new Array(t.length)
s.fixed$length=Array
r=H.E(s,[T.h])
q=new T.h(new Float32Array(H.f(3)))
p=new T.h(new Float32Array(H.f(3)))
for(s=this.b,o=s.length,n=0;n<s.length;s.length===o||(0,H.F)(s),++n){m=s[n]
l=m.a
k=m.b
j=m.c
G.jH(t[l],t[k],t[j],q,p)
i=new T.h(new Float32Array(3))
i.v(p)
r[l]=i
l=new T.h(new Float32Array(3))
l.v(p)
r[k]=l
l=new T.h(new Float32Array(3))
l.v(p)
r[j]=l}for(s=this.c,o=s.length,n=0;n<s.length;s.length===o||(0,H.F)(s),++n){h=s[n]
l=h.a
k=h.b
j=h.c
G.jH(t[l],t[k],t[j],q,p)
i=new T.h(new Float32Array(3))
i.v(p)
r[l]=i
l=new T.h(new Float32Array(3))
l.v(p)
r[k]=l
l=new T.h(new Float32Array(3))
l.v(p)
r[j]=l
l=new T.h(new Float32Array(3))
l.v(p)
r[h.d]=l}this.e.j(0,"aNormal",r)},
k:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gI(s),r=r.gB(r);r.q();){q=r.gt()
p=$.$get$W().h(0,q).a
C.a.i(t,H.i(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.ab(t," ")}}
G.dI.prototype={}
G.bn.prototype={}
G.dp.prototype={
du:function(a){this.G("cDepthTest",!0)
this.G("cDepthWrite",!0)
this.G("cBlendEquation",$.$get$ke())
this.G("cStencilFunc",$.$get$jI())}}
G.dq.prototype={
bC:function(a,b,c){var t,s
if(C.e.aT(a,0)===105){if(H.aM(C.b.aR(b.length,c)===this.z))H.b9("ChangeAttribute "+this.z)}else H.c(C.b.aR(b.length,c)===(this.ch.length/3|0))
this.cy.j(0,a,b)
t=this.d
s=this.r.h(0,a)
J.dX(t.a,34962,s)
J.k1(t.a,34962,b,35048)},
bD:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
ag:function(a,b,c){var t,s,r,q,p,o
t=J.jZ(a,0)===105
if(t&&this.z===0)this.z=C.b.aR(b.length,c)
s=this.r
r=this.d
s.j(0,a,J.jo(r.a))
this.bC(a,b,c)
q=$.$get$W().h(0,a)
if(q==null)throw H.e("Unknown canonical "+a)
p=this.x
if(H.aM(p.H(0,a)))H.b9("unexpected attribute "+a)
o=p.h(0,a)
J.dY(r.a,this.e)
r.cs(0,o,t?1:0)
s=s.h(0,a)
p=q.bE()
J.dX(r.a,34962,s)
J.kb(r.a,o,p,5126,!1,0,0)},
a8:function(a){var t,s,r,q,p
t=this.r
s=this.d
t.j(0,"aPosition",J.jo(s.a))
this.ch=a
this.bC("aPosition",a,3)
r=$.$get$W().h(0,"aPosition")
if(r==null)throw H.e("Unknown canonical aPosition")
q=this.x
H.c(q.H(0,"aPosition"))
p=q.h(0,"aPosition")
J.dY(s.a,this.e)
s.cs(0,p,0)
t=t.h(0,"aPosition")
q=r.bE()
J.dX(s.a,34962,t)
J.kb(s.a,p,q,5126,!1,0,0)},
k:function(a){var t,s,r
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,t=t.gI(t),t=t.gB(t);t.q();){r=t.gt()
C.a.i(s,H.i(r)+":"+this.cy.h(0,r).length)}return"MESH["+this.a+"] "+C.a.ab(s,"  ")},
saX:function(a){this.cx=a}}
G.fz.prototype={
dl:function(a,b){var t=C.b.cW(a,b)
if(this.z===t)return
this.z=t
this.bG()},
bG:function(){var t,s,r,q,p,o,n
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
t.ae(0,0,1/(p*s))
t.ae(1,1,1/p)
t.ae(2,2,(q+r)/o)
t.ae(3,2,-1)
t.ae(2,3,2*r*q/o)},
bF:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.h(new Float32Array(H.f(3)))
o.p(r,q,p)
p=this.d
p.j(0,"uEyePosition",o)
o=this.cy
o.v(t)
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
k=r?s.gaK(n):1
if(!!s.$ish){j=s.gm(n)
m=s.gn(n)
l=s.gO(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
l=s.gO(n)
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
a3.v(this.db)
a3.cz(0,o)
p.j(0,"uPerspectiveViewMatrix",a3)
return p}}
G.ei.prototype={
k:function(a){return"["+this.a+"] "+this.b+" "+this.c+" mode:"+this.d+" ["+this.e.a+"usec]"}}
G.fN.prototype={
dD:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gl(t)===s.gl(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gI(s),s=s.gB(s);s.q();){q=s.gt()
if(!t.H(0,q))C.a.i(r,q)}for(t=this.x,s=new P.c9(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.q();){q=s.d
if(!t.E(0,q))C.a.i(r,q)}return r},
dF:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gI(b),s=s.gB(s),r=this.d,q=this.y,p=this.z,o=0;s.q();){n=s.gt()
switch(J.jZ(n,0)){case 117:if(q.H(0,n)){m=b.h(0,n)
if(p.H(0,n))H.jc("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.j(0,n,a)
l=$.$get$W().h(0,n)
if(l==null)H.K("unknown "+n)
H.c(q.H(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.jt(r.a,k,m)
else if(!!J.w(m).$iskD)J.mk(r.a,k,m)
break
case"float":if(l.c===0)J.mi(r.a,k,m)
else if(!!J.w(m).$iseI)J.mj(r.a,k,m)
break
case"mat4":if(l.c===0){j=H.aN(m,"$isH").a
J.ka(r.a,k,!1,j)}else if(!!J.w(m).$iseI)J.ka(r.a,k,!1,m)
else if(H.aM(!1))H.b9("bad unform: "+n)
break
case"mat3":if(l.c===0){j=H.aN(m,"$isa9").a
J.k9(r.a,k,!1,j)}else if(!!J.w(m).$iseI)J.k9(r.a,k,!1,m)
else if(H.aM(!1))H.b9("bad unform: "+n)
break
case"vec4":if(l.c===0){j=H.aN(m,"$isaL").a
J.k8(r.a,k,j)}else J.k8(r.a,k,m)
break
case"vec3":if(l.c===0){j=H.aN(m,"$ish").a
J.k7(r.a,k,j)}else J.k7(r.a,k,m)
break
case"vec2":if(l.c===0){j=H.aN(m,"$isq").a
J.k6(r.a,k,j)}else J.k6(r.a,k,m)
break
case"sampler2D":case"sampler2DShadow":j=C.b.a5(33984,this.ch)
J.k_(r.a,j)
j=H.aN(m,"$isc4").b
J.cl(r.a,3553,j)
j=this.ch
J.jt(r.a,k,j)
this.ch=this.ch+1
break
case"samplerCube":H.c(n==="uCubeTexture")
j=C.b.a5(33984,this.ch)
J.k_(r.a,j)
j=H.aN(m,"$isc4").b
J.cl(r.a,34067,j)
j=this.ch
J.jt(r.a,k,j)
this.ch=this.ch+1
break
default:H.jc("Error: unknow uniform type: "+j)
H.c(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":if(J.I(m,!0))J.cm(r.a,2929)
else J.jp(r.a,2929)
break
case"cStencilFunc":H.aN(m,"$isdI")
j=m.a
if(j===1281)J.jp(r.a,2960)
else{J.cm(r.a,2960)
i=m.b
h=m.c
J.md(r.a,j,i,h)}break
case"cDepthWrite":J.lR(r.a,m)
break
case"cBlendEquation":H.aN(m,"$isbn")
j=m.a
if(j===1281)J.jp(r.a,3042)
else{J.cm(r.a,3042)
i=m.b
h=m.c
J.lL(r.a,i,h)
J.lK(r.a,j)}break}++o
break}}s=Date.now()
""+o
new P.aD(1000*(s-new P.bd(t,!1).a)).k(0)},
dn:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
t=Date.now()
s=this.d
r=this.r
J.ml(s.a,r)
this.ch=0
this.z.a_(0)
for(r=b.length,q=0;q<b.length;b.length===r||(0,H.F)(b),++q){p=b[q]
this.dF(p.a,p.bF())}r=this.Q
r.a_(0)
for(o=a.cy,o=o.gI(o),o=o.gB(o);o.q();)r.i(0,o.gt())
n=this.dD()
if(n.length!==0)P.aq("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.i(n)))
J.dY(a.d.a,a.e)
m=this.e.f.length>0
r=a.f
o=a.bD()
l=a.Q
k=a.z
s.toString
if(m)J.lI(s.a,r)
if(l!==-1)if(k>1)J.lV(s.a,r,o,l,0,k)
else J.lU(s.a,r,o,l,0)
else if(k>1)J.lT(s.a,r,0,o,k)
else J.lS(s.a,r,0,o)
if(m)J.lY(s.a)
C.a.i(c,new G.ei(this.a,a.z,a.bD(),r,P.mA(0,0,0,Date.now()-new P.bd(t,!1).a,0,0)))},
dw:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j
t=this.d
s=this.e
r=s.b
q=this.f
p=q.b
o=s.f
n=J.lP(t.a)
m=G.l4(t.a,35633,r)
J.k0(t.a,n,m)
l=G.l4(t.a,35632,p)
J.k0(t.a,n,l)
if(o.length>0)J.mh(t.a,n,o,35980)
J.m8(t.a,n)
if(!J.m7(t.a,n,35714))H.K(J.m6(t.a,n))
this.r=n
this.sdO(0,P.jC(s.c,null))
for(s=s.d,r=s.length,p=this.y,k=0;k<s.length;s.length===r||(0,H.F)(s),++k){j=s[k]
o=this.r
p.j(0,j,J.k4(t.a,o,j))}for(s=q.d,r=s.length,k=0;k<s.length;s.length===r||(0,H.F)(s),++k){j=s[k]
q=this.r
p.j(0,j,J.k4(t.a,q,j))}},
sdO:function(a,b){this.x=b}}
G.k.prototype={
bE:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.c(!1)
return-1}}}
G.bm.prototype={
bz:function(a){var t,s,r,q,p
H.c(this.b==null)
for(t=a.length,s=this.c,r=this.x,q=0;q<a.length;a.length===t||(0,H.F)(a),++q){p=a[q]
H.c($.$get$W().H(0,p))
H.c(!C.a.E(s,p))
C.a.i(s,p)
r.j(0,p,this.r);++this.r}C.a.aO(s)},
ax:function(a){var t,s,r,q
H.c(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.F)(a),++r){q=a[r]
if(H.aM($.$get$W().H(0,q)))H.b9("missing uniform "+q)
H.c(!C.a.E(s,q))
C.a.i(s,q)}C.a.aO(s)},
bB:function(a){var t,s,r
H.c(this.b==null)
for(t=this.e,s=0;s<1;++s){r=a[s]
H.c($.$get$W().H(0,r))
H.c(!C.a.E(t,r))
C.a.i(t,r)}C.a.aO(t)},
dz:function(a,b){H.c(this.b==null)
this.b=this.dG(!0,a,b)},
ay:function(a){return this.dz(a,null)},
dG:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.c(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.F)(t),++o){n=t[o]
m=$.$get$W().h(0,n)
C.a.i(q,"layout (location="+H.i(p.h(0,n))+") in "+m.a+" "+H.i(n)+";")}C.a.i(q,"")
l=r?"in":"out"
if(r)C.a.i(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.F)(t),++o){k=t[o]
m=$.$get$W().h(0,k)
C.a.i(q,l+" "+m.a+" "+H.i(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.F)(t),++o){k=t[o]
m=$.$get$W().h(0,k)
C.a.i(q,l+" "+m.a+" "+H.i(k)+";")}C.a.i(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.F)(t),++o){k=t[o]
m=$.$get$W().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.i(q,"uniform "+m.a+" "+H.i(k)+j+";")}C.a.i(q,"")
C.a.i(q,"void main(void) {")
C.a.M(q,b)
C.a.i(q,"}")
return C.a.ab(q,"\n")}}
G.fX.prototype={
a6:function(a,b,c){var t=this.d.a
t[12]=a
t[13]=b
t[14]=c}}
G.hh.prototype={}
G.c4.prototype={
k:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.eR.prototype={
dA:function(a){var t,s
t=this.d
s=this.c
J.cl(t.a,s,this.b)
J.me(t.a,s,0,6408,6408,5121,a)},
ds:function(a,b,c,d,e){var t,s,r,q
t=this.d
s=this.c
J.cl(t.a,s,this.b)
J.ma(t.a,37440,1)
this.dA(this.f)
r=this.e
q=r.e
if(q!==1)J.mf(t.a,s,34046,q)
J.k5(t.a,s,10240,r.r)
J.k5(t.a,s,10241,r.f)
H.c(J.m5(t.a)===0)
J.cl(t.a,s,null)}}
R.h0.prototype={
dJ:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.ne("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.p).bM(r,"float")
r.setProperty(p,"left","")
p=C.p.bM(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.j.V(t,s)}return t},
dB:function(a,b,c){var t,s,r
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
J.jm(this.a,s)
r=this.dJ(b,c,90,30)
this.d=r
J.jm(this.a,r)
t=t.createElement("div")
this.c=t
J.jm(this.a,t)}}
R.h1.prototype={
dE:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.r.f8(s,2)+" fps"
t=this.c;(t&&C.j).d8(t,b)
r=C.b.L(30*C.r.ep(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.j).V(t,q)}}
A.aH.prototype={
k:function(a){return"NODE["+this.a+"]"}}
A.bY.prototype={}
A.fM.prototype={
dm:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.d
s=this.r
r=this.z
q=this.Q
p=t.a
t=t.b
J.lJ(p.a,36160,t)
H.c(r>0&&q>0)
J.mn(p.a,this.x,this.y,r,q)
if(s!==0)J.lM(p.a,s)
for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.F)(t),++o){n=t[o]
m=n.e
C.a.i(m,new G.dK(P.G(),"transforms",!1,!0))
l=new T.H(new Float32Array(16))
l.F()
for(r=n.f,q=r.length,p=n.d,k=0;k<r.length;r.length===q||(0,H.F)(r),++k)A.ll(p,r[k],l,a,m)
m.pop()}}}
D.f6.prototype={
$1:function(a){return this.a.bc(0,this.b)},
$S:function(){return{func:1,args:[,]}}}
A.iX.prototype={
$2:function(a,b){var t=536870911&a+J.as(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(){return{func:1,args:[P.o,P.r]}}}
T.a9.prototype={
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
k:function(a){return"[0] "+this.X(0).k(0)+"\n[1] "+this.X(1).k(0)+"\n[2] "+this.X(2).k(0)+"\n"},
h:function(a,b){return this.a[b]},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.a9){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gw:function(a){return A.dU(this.a)},
X:function(a){var t,s
t=new Float32Array(H.f(3))
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.h(t)},
eu:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
T.H.prototype={
ae:function(a,b,c){H.c(a<4)
H.c(b<4)
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
k:function(a){return"[0] "+this.X(0).k(0)+"\n[1] "+this.X(1).k(0)+"\n[2] "+this.X(2).k(0)+"\n[3] "+this.X(3).k(0)+"\n"},
h:function(a,b){return this.a[b]},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.H){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gw:function(a){return A.dU(this.a)},
X:function(a){var t,s
t=new Float32Array(H.f(4))
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.aL(t)},
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
cz:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
k:function(a){var t=this.a
return"["+H.i(t[0])+","+H.i(t[1])+"]"},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.q){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gw:function(a){return A.dU(this.a)},
h:function(a,b){return this.a[b]},
gl:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.h.prototype={
p:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
v:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
k:function(a){var t=this.a
return"["+H.i(t[0])+","+H.i(t[1])+","+H.i(t[2])+"]"},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.h){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gw:function(a){return A.dU(this.a)},
h:function(a,b){return this.a[b]},
gl:function(a){return Math.sqrt(this.gR())},
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
bd:function(a){var t,s
t=a.a
s=this.a
return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]},
aE:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.h(new Float32Array(H.f(3)))
t.p(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
i:function(a,b){var t,s
t=b.a
s=this.a
s[0]=s[0]+t[0]
s[1]=s[1]+t[1]
s[2]=s[2]+t[2]},
aP:function(a){var t,s
t=a.a
s=this.a
s[0]=s[0]-t[0]
s[1]=s[1]-t[1]
s[2]=s[2]-t[2]},
a2:function(a,b){var t=this.a
t[2]=t[2]*b
t[1]=t[1]*b
t[0]=t[0]*b},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gO:function(a){return this.a[2]}}
T.aL.prototype={
k:function(a){var t=this.a
return H.i(t[0])+","+H.i(t[1])+","+H.i(t[2])+","+H.i(t[3])},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aL){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gw:function(a){return A.dU(this.a)},
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
gO:function(a){return this.a[2]},
gaK:function(a){return this.a[3]}}
V.j9.prototype={
$1:function(a){var t,s,r
t=this.a
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.aq("size change "+H.i(s)+" "+H.i(r))
this.b.dl(s,r)
t=this.c
t.z=s
t.Q=r},
$S:function(){return{func:1,v:true,args:[W.l]}}}
V.j7.prototype={
$1:function(b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
this.a.a=b5+0
t=this.c
t.go=H.a1(t.go+0.001)
s=t.k4
if(s.h(0,37)!=null)t.go=H.a1(t.go+0.03)
else if(s.h(0,39)!=null)t.go=H.a1(t.go-0.03)
if(s.h(0,38)!=null)t.id=H.a1(t.id+0.03)
else if(s.h(0,40)!=null)t.id=H.a1(t.id-0.03)
if(s.h(0,33)!=null)t.fy=H.a1(t.fy*0.99)
else if(s.h(0,34)!=null)t.fy=H.a1(t.fy*1.01)
if(s.h(0,32)!=null){t.go=0
t.id=0}s=H.a1(C.c.eq(t.id,-1.4707963267948965,1.4707963267948965))
t.id=s
r=t.fy
q=t.go
p=r*Math.cos(s)
t.a6(p*Math.cos(q),r*Math.sin(s),p*Math.sin(q))
q=t.k2
s=t.d.a
r=q.a
s[12]=s[12]+r[0]
s[13]=s[13]+r[1]
s[14]=s[14]+r[2]
r=s[12]
o=s[13]
n=s[14]
m=new T.h(new Float32Array(H.f(3)))
m.p(0,1,0)
l=t.e
k=l.a
k[0]=s[12]
k[1]=s[13]
k[2]=s[14]
k=new Float32Array(H.f(3))
j=new T.h(k)
j.v(l)
j.aP(q)
j.C(0)
i=m.aE(j)
i.C(0)
h=j.aE(i)
h.C(0)
q=i.bd(l)
g=h.bd(l)
l=j.bd(l)
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
s[15]=1
s[14]=-l
s[13]=-g
s[12]=-q
s[11]=0
s[10]=k
s[9]=d
s[8]=f
s[7]=0
s[6]=a1
s[5]=a0
s[4]=a
s[3]=0
s[2]=b
s[1]=c
s[0]=e
s[12]=r
s[13]=o
s[14]=n
n=t.f
o=n.a
o[0]=s[2]
o[1]=s[6]
o[2]=s[10]
t=-t.k1
n=Math.sqrt(n.gR())
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
n=s[0]
t=s[4]
r=s[8]
o=s[1]
e=s[5]
c=s[9]
b=s[2]
a=s[6]
a0=s[10]
a1=s[3]
f=s[7]
d=s[11]
s[0]=n*a3+t*a6+r*a9
s[1]=o*a3+e*a6+c*a9
s[2]=b*a3+a*a6+a0*a9
s[3]=a1*a3+f*a6+d*a9
s[4]=n*a4+t*a7+r*b0
s[5]=o*a4+e*a7+c*b0
s[6]=b*a4+a*a7+a0*b0
s[7]=a1*a4+f*a7+d*b0
s[8]=n*a5+t*a8+r*b1
s[9]=o*a5+e*a8+c*b1
s[10]=b*a5+a*a8+a0*b1
s[11]=a1*a5+f*a8+d*b1
b2=[]
this.d.dm(b2)
b3=[]
for(t=b2.length,b4=0;b4<b2.length;b2.length===t||(0,H.F)(b2),++b4)C.a.i(b3,b2[b4].k(0))
C.a6.gei(window).aJ(this)
this.b.dE(b5,C.a.ab(b3,"<br>"))},
$S:function(){return{func:1,v:true,args:[P.Y]}}}
V.j8.prototype={
$1:function(a){var t,s
t=this.a
s=J.a2(a)
this.c.G("uTexture",G.eS(t,"../gradient.jpg",s.h(a,0),null,3553))
this.d.G("uTexture",G.eS(t,"../transparent.png",s.h(a,1),null,3553))
this.b.G("uTexture",G.eS(t,"../wood.jpg",s.h(a,2),null,3553))
this.e.$1(0)},
$S:function(){return{func:1,args:[P.b]}}}
J.a.prototype.de=J.a.prototype.k
J.bM.prototype.dg=J.bM.prototype.k
P.Z.prototype.df=P.Z.prototype.aL
W.a6.prototype.aQ=W.a6.prototype.P
W.cb.prototype.dh=W.cb.prototype.Z;(function installTearOffs(){installTearOff(H.b6.prototype,"geT",0,0,0,null,["$0"],["aH"],0)
installTearOff(H.ao.prototype,"gd0",0,0,0,null,["$1"],["N"],2)
installTearOff(H.b5.prototype,"geB",0,0,0,null,["$1"],["a0"],2)
installTearOff(P,"nw",1,0,0,null,["$1"],["nb"],1)
installTearOff(P,"nx",1,0,0,null,["$1"],["nc"],1)
installTearOff(P,"ny",1,0,0,null,["$1"],["nd"],1)
installTearOff(P,"li",1,0,0,null,["$0"],["nu"],0)
installTearOff(P.O.prototype,"gbR",0,0,0,null,["$2","$1"],["U","dR"],5)
installTearOff(P,"nE",1,0,0,null,["$2"],["mu"],6)
installTearOff(W,"nJ",1,0,0,null,["$1"],["mC"],7)
installTearOff(W,"nK",1,0,0,null,["$4"],["nh"],4)
installTearOff(W,"nL",1,0,0,null,["$4"],["ni"],4)
installTearOff(W.dw.prototype,"gbg",0,1,0,null,["$0"],["bh"],3)
installTearOff(W.dJ.prototype,"gbg",0,1,0,null,["$0"],["bh"],3)
installTearOff(V,"lj",1,0,0,null,["$0"],["nT"],0)})();(function inheritance(){inherit(P.r,null)
var t=P.r
inherit(H.jz,t)
inherit(J.a,t)
inherit(J.e3,t)
inherit(P.Z,t)
inherit(H.dm,t)
inherit(P.di,t)
inherit(H.cy,t)
inherit(H.bb,t)
inherit(H.il,t)
inherit(H.b6,t)
inherit(H.hT,t)
inherit(H.b7,t)
inherit(H.ik,t)
inherit(H.hL,t)
inherit(H.bl,t)
inherit(H.hj,t)
inherit(H.at,t)
inherit(H.ao,t)
inherit(H.b5,t)
inherit(H.fL,t)
inherit(H.hq,t)
inherit(P.be,t)
inherit(H.dR,t)
inherit(H.aJ,t)
inherit(H.ak,t)
inherit(H.f2,t)
inherit(H.f4,t)
inherit(P.hN,t)
inherit(P.c6,t)
inherit(P.O,t)
inherit(P.dN,t)
inherit(P.c0,t)
inherit(P.h3,t)
inherit(P.ba,t)
inherit(P.iK,t)
inherit(P.fU,t)
inherit(P.ii,t)
inherit(P.c9,t)
inherit(P.bX,t)
inherit(P.z,t)
inherit(P.ij,t)
inherit(P.aA,t)
inherit(P.M,t)
inherit(P.bd,t)
inherit(P.Y,t)
inherit(P.aD,t)
inherit(P.dF,t)
inherit(P.hY,t)
inherit(P.em,t)
inherit(P.b,t)
inherit(P.aG,t)
inherit(P.aI,t)
inherit(P.c_,t)
inherit(P.v,t)
inherit(P.c1,t)
inherit(W.ea,t)
inherit(W.hK,t)
inherit(W.c8,t)
inherit(W.C,t)
inherit(W.dy,t)
inherit(W.cb,t)
inherit(W.iC,t)
inherit(W.cz,t)
inherit(W.dx,t)
inherit(W.iw,t)
inherit(W.dS,t)
inherit(P.ig,t)
inherit(P.io,t)
inherit(G.ff,t)
inherit(G.e8,t)
inherit(G.eL,t)
inherit(G.A,t)
inherit(G.bJ,t)
inherit(G.aU,t)
inherit(G.dI,t)
inherit(G.bn,t)
inherit(G.ei,t)
inherit(G.k,t)
inherit(G.bm,t)
inherit(G.hh,t)
inherit(G.c4,t)
inherit(R.h0,t)
inherit(T.a9,t)
inherit(T.H,t)
inherit(T.q,t)
inherit(T.h,t)
inherit(T.aL,t)
t=J.a
inherit(J.eY,t)
inherit(J.eZ,t)
inherit(J.bM,t)
inherit(J.aV,t)
inherit(J.bi,t)
inherit(J.aW,t)
inherit(H.bQ,t)
inherit(H.bk,t)
inherit(W.j,t)
inherit(W.a4,t)
inherit(W.co,t)
inherit(W.cp,t)
inherit(W.cq,t)
inherit(W.B,t)
inherit(W.cD,t)
inherit(W.ec,t)
inherit(W.ed,t)
inherit(W.ee,t)
inherit(W.cu,t)
inherit(W.cv,t)
inherit(W.cw,t)
inherit(W.cO,t)
inherit(W.eh,t)
inherit(W.l,t)
inherit(W.cN,t)
inherit(W.a8,t)
inherit(W.eO,t)
inherit(W.cS,t)
inherit(W.bf,t)
inherit(W.bg,t)
inherit(W.f7,t)
inherit(W.fc,t)
inherit(W.aa,t)
inherit(W.cM,t)
inherit(W.fo,t)
inherit(W.dw,t)
inherit(W.cR,t)
inherit(W.fx,t)
inherit(W.bo,t)
inherit(W.ab,t)
inherit(W.cK,t)
inherit(W.am,t)
inherit(W.dB,t)
inherit(W.ad,t)
inherit(W.cJ,t)
inherit(W.ae,t)
inherit(W.h2,t)
inherit(W.a_,t)
inherit(W.cI,t)
inherit(W.hi,t)
inherit(W.ag,t)
inherit(W.cH,t)
inherit(W.hn,t)
inherit(W.dJ,t)
inherit(W.hu,t)
inherit(W.hz,t)
inherit(W.hM,t)
inherit(W.cX,t)
inherit(W.cW,t)
inherit(W.cV,t)
inherit(W.cQ,t)
inherit(W.cU,t)
inherit(W.cT,t)
inherit(W.iI,t)
inherit(W.iJ,t)
inherit(P.au,t)
inherit(P.cG,t)
inherit(P.av,t)
inherit(P.cL,t)
inherit(P.fD,t)
inherit(P.fE,t)
inherit(P.fJ,t)
inherit(P.cE,t)
inherit(P.ax,t)
inherit(P.cP,t)
inherit(P.hy,t)
inherit(P.e4,t)
inherit(P.fO,t)
inherit(P.fP,t)
inherit(P.iH,t)
inherit(P.cF,t)
t=J.bM
inherit(J.fB,t)
inherit(J.b2,t)
inherit(J.aX,t)
inherit(J.jy,J.aV)
t=J.bi
inherit(J.dk,t)
inherit(J.dj,t)
t=P.Z
inherit(H.d,t)
inherit(H.dn,t)
inherit(H.dM,t)
t=H.d
inherit(H.bj,t)
inherit(H.f3,t)
inherit(H.el,H.dn)
t=P.di
inherit(H.f8,t)
inherit(H.hB,t)
t=H.bj
inherit(H.bN,t)
inherit(P.f5,t)
t=H.bb
inherit(H.jj,t)
inherit(H.jk,t)
inherit(H.ie,t)
inherit(H.hU,t)
inherit(H.eV,t)
inherit(H.eW,t)
inherit(H.im,t)
inherit(H.hk,t)
inherit(H.hl,t)
inherit(H.jl,t)
inherit(H.j1,t)
inherit(H.j2,t)
inherit(H.j3,t)
inherit(H.j4,t)
inherit(H.j5,t)
inherit(H.hd,t)
inherit(H.f_,t)
inherit(H.iY,t)
inherit(H.iZ,t)
inherit(H.j_,t)
inherit(P.hH,t)
inherit(P.hG,t)
inherit(P.hI,t)
inherit(P.hJ,t)
inherit(P.eN,t)
inherit(P.eM,t)
inherit(P.hZ,t)
inherit(P.i6,t)
inherit(P.i2,t)
inherit(P.i3,t)
inherit(P.i4,t)
inherit(P.i0,t)
inherit(P.i5,t)
inherit(P.i_,t)
inherit(P.i9,t)
inherit(P.ia,t)
inherit(P.i8,t)
inherit(P.i7,t)
inherit(P.h6,t)
inherit(P.h7,t)
inherit(P.h4,t)
inherit(P.h5,t)
inherit(P.iL,t)
inherit(P.iO,t)
inherit(P.ir,t)
inherit(P.iq,t)
inherit(P.is,t)
inherit(P.f9,t)
inherit(P.ej,t)
inherit(P.ek,t)
inherit(W.iP,t)
inherit(W.hC,t)
inherit(W.hX,t)
inherit(W.fq,t)
inherit(W.fp,t)
inherit(W.iy,t)
inherit(W.iz,t)
inherit(W.iF,t)
inherit(W.iG,t)
inherit(P.iQ,t)
inherit(B.je,t)
inherit(B.jf,t)
inherit(B.jg,t)
inherit(B.jh,t)
inherit(B.ji,t)
inherit(B.ft,t)
inherit(B.fu,t)
inherit(B.fv,t)
inherit(B.fw,t)
inherit(D.f6,t)
inherit(A.iX,t)
inherit(V.j9,t)
inherit(V.j7,t)
inherit(V.j8,t)
t=H.hL
inherit(H.br,t)
inherit(H.cc,t)
t=P.be
inherit(H.dz,t)
inherit(H.f0,t)
inherit(H.ht,t)
inherit(H.hs,t)
inherit(H.e7,t)
inherit(H.fR,t)
inherit(P.cn,t)
inherit(P.bW,t)
inherit(P.ai,t)
inherit(P.x,t)
inherit(P.dL,t)
inherit(P.aw,t)
inherit(P.a5,t)
inherit(P.eb,t)
t=H.hd
inherit(H.h_,t)
inherit(H.bA,t)
inherit(H.hE,P.cn)
t=H.bk
inherit(H.fg,t)
inherit(H.ds,t)
t=H.ds
inherit(H.bS,t)
inherit(H.bR,t)
inherit(H.bT,H.bS)
inherit(H.dt,H.bT)
inherit(H.bU,H.bR)
inherit(H.du,H.bU)
t=H.dt
inherit(H.dr,t)
inherit(H.fh,t)
t=H.du
inherit(H.fi,t)
inherit(H.fj,t)
inherit(H.fk,t)
inherit(H.fl,t)
inherit(H.fm,t)
inherit(H.dv,t)
inherit(H.fn,t)
t=P.hN
inherit(P.hF,t)
inherit(P.iD,t)
inherit(P.ip,P.iK)
inherit(P.dP,H.ak)
inherit(P.fT,P.fU)
inherit(P.id,P.fT)
inherit(P.ih,P.id)
inherit(P.dl,P.bX)
t=P.Y
inherit(P.Q,t)
inherit(P.o,t)
t=P.ai
inherit(P.dC,t)
inherit(P.eT,t)
t=W.j
inherit(W.u,t)
inherit(W.bF,t)
inherit(W.e9,t)
inherit(W.eG,t)
inherit(W.bL,t)
inherit(W.bP,t)
inherit(W.fG,t)
inherit(W.dD,t)
inherit(W.fV,t)
inherit(W.ac,t)
inherit(W.bE,t)
inherit(W.af,t)
inherit(W.a0,t)
inherit(W.bD,t)
inherit(W.hw,t)
inherit(W.hA,t)
inherit(W.c5,t)
inherit(W.hD,t)
inherit(W.b4,t)
inherit(W.ix,t)
t=W.u
inherit(W.a6,t)
inherit(W.aS,t)
inherit(W.bB,t)
inherit(W.ct,t)
inherit(W.hP,t)
t=W.a6
inherit(W.n,t)
inherit(P.L,t)
t=W.n
inherit(W.e0,t)
inherit(W.e1,t)
inherit(W.aQ,t)
inherit(W.aR,t)
inherit(W.cs,t)
inherit(W.eK,t)
inherit(W.cB,t)
inherit(W.bh,t)
inherit(W.eU,t)
inherit(W.bO,t)
inherit(W.fS,t)
inherit(W.dG,t)
inherit(W.hb,t)
inherit(W.hc,t)
inherit(W.c2,t)
inherit(W.ic,t)
inherit(W.bI,W.bF)
inherit(W.e5,W.bI)
inherit(W.bc,W.cD)
inherit(W.ef,W.cv)
inherit(W.dg,W.cO)
inherit(W.eg,W.dg)
inherit(W.a7,W.co)
inherit(W.de,W.cN)
inherit(W.eF,W.de)
inherit(W.cZ,W.cS)
inherit(W.bK,W.cZ)
inherit(W.cC,W.bB)
inherit(W.eP,W.bL)
inherit(W.aK,W.l)
t=W.aK
inherit(W.aY,t)
inherit(W.S,t)
inherit(W.b1,t)
inherit(W.fd,W.bP)
inherit(W.d8,W.cM)
inherit(W.fe,W.d8)
inherit(W.V,P.dl)
inherit(W.d9,W.cR)
inherit(W.bV,W.d9)
t=W.bo
inherit(W.fA,t)
inherit(W.fQ,t)
inherit(W.hp,t)
inherit(W.da,W.cK)
inherit(W.fC,W.da)
inherit(W.fF,W.am)
inherit(W.bH,W.bE)
inherit(W.fW,W.bH)
inherit(W.d6,W.cJ)
inherit(W.fY,W.d6)
inherit(W.d2,W.cI)
inherit(W.hf,W.d2)
inherit(W.bG,W.bD)
inherit(W.hg,W.bG)
inherit(W.dd,W.cH)
inherit(W.hm,W.dd)
inherit(W.bp,W.bO)
inherit(W.b3,W.S)
inherit(W.db,W.cX)
inherit(W.dO,W.db)
inherit(W.cY,W.cW)
inherit(W.hO,W.cY)
inherit(W.hQ,W.cw)
inherit(W.d4,W.cV)
inherit(W.ib,W.d4)
inherit(W.df,W.cQ)
inherit(W.dQ,W.df)
inherit(W.d0,W.cU)
inherit(W.iA,W.d0)
inherit(W.dc,W.cT)
inherit(W.iB,W.dc)
inherit(W.hR,W.hK)
inherit(W.hV,P.c0)
inherit(W.hS,W.hV)
inherit(W.hW,P.h3)
inherit(W.iE,W.cb)
inherit(P.N,P.io)
t=P.L
inherit(P.aF,t)
inherit(P.aP,t)
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
inherit(P.eE,t)
inherit(P.eH,t)
inherit(P.fa,t)
inherit(P.fb,t)
inherit(P.fy,t)
inherit(P.bZ,t)
inherit(P.ha,t)
inherit(P.hx,t)
inherit(P.c7,t)
inherit(P.it,t)
inherit(P.iu,t)
inherit(P.iv,t)
t=P.aF
inherit(P.e_,t)
inherit(P.eJ,t)
inherit(P.aj,t)
inherit(P.eQ,t)
inherit(P.h9,t)
inherit(P.dH,t)
inherit(P.hv,t)
inherit(P.d_,P.cG)
inherit(P.f1,P.d_)
inherit(P.d7,P.cL)
inherit(P.fr,P.d7)
inherit(P.fK,P.aj)
inherit(P.d5,P.cE)
inherit(P.h8,P.d5)
t=P.dH
inherit(P.he,t)
inherit(P.c3,t)
inherit(P.d3,P.cP)
inherit(P.ho,P.d3)
inherit(P.d1,P.cF)
inherit(P.fZ,P.d1)
t=G.ff
inherit(G.fX,t)
inherit(G.dK,t)
inherit(G.dq,t)
inherit(G.fN,t)
inherit(A.bY,t)
inherit(A.fM,t)
t=G.fX
inherit(G.e6,t)
inherit(A.aH,t)
inherit(B.fs,G.e6)
t=G.dK
inherit(G.dp,t)
inherit(G.fz,t)
inherit(G.eR,G.c4)
inherit(R.h1,R.h0)
mixin(H.bR,P.z)
mixin(H.bS,P.z)
mixin(H.bT,H.cy)
mixin(H.bU,H.cy)
mixin(P.bX,P.z)
mixin(W.bD,P.z)
mixin(W.bE,P.z)
mixin(W.bF,P.z)
mixin(W.bG,W.C)
mixin(W.bH,W.C)
mixin(W.bI,W.C)
mixin(W.cD,W.ea)
mixin(W.cX,P.z)
mixin(W.cJ,P.z)
mixin(W.cQ,P.z)
mixin(W.cR,P.z)
mixin(W.cS,P.z)
mixin(W.cT,P.z)
mixin(W.cU,P.z)
mixin(W.cV,P.z)
mixin(W.cW,P.z)
mixin(W.cH,P.z)
mixin(W.cI,P.z)
mixin(W.cK,P.z)
mixin(W.cM,P.z)
mixin(W.cN,P.z)
mixin(W.cO,P.z)
mixin(W.cY,W.C)
mixin(W.cZ,W.C)
mixin(W.d9,W.C)
mixin(W.da,W.C)
mixin(W.d8,W.C)
mixin(W.dd,W.C)
mixin(W.de,W.C)
mixin(W.df,W.C)
mixin(W.dg,W.C)
mixin(W.d0,W.C)
mixin(W.d2,W.C)
mixin(W.d4,W.C)
mixin(W.d6,W.C)
mixin(W.db,W.C)
mixin(W.dc,W.C)
mixin(P.cG,P.z)
mixin(P.cE,P.z)
mixin(P.cL,P.z)
mixin(P.cP,P.z)
mixin(P.d_,W.C)
mixin(P.d7,W.C)
mixin(P.d3,W.C)
mixin(P.d5,W.C)
mixin(P.cF,P.z)
mixin(P.d1,W.C)})();(function constants(){C.h=W.aQ.prototype
C.o=W.aR.prototype
C.f=W.cp.prototype
C.i=W.cq.prototype
C.p=W.bc.prototype
C.j=W.cs.prototype
C.B=W.cu.prototype
C.C=W.cB.prototype
C.k=W.cC.prototype
C.D=J.a.prototype
C.a=J.aV.prototype
C.r=J.dj.prototype
C.b=J.dk.prototype
C.c=J.bi.prototype
C.e=J.aW.prototype
C.K=J.aX.prototype
C.N=H.dr.prototype
C.w=W.bV.prototype
C.x=J.fB.prototype
C.y=W.dB.prototype
C.z=W.dG.prototype
C.n=J.b2.prototype
C.a5=W.b3.prototype
C.a6=W.c5.prototype
C.A=new P.ig()
C.d=new P.ip()
C.q=new P.aD(0)
C.E=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.F=function(hooks) {
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

C.G=function(getTagFallback) {
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
C.H=function() {
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
C.I=function(hooks) {
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
C.J=function(hooks) {
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
C.L=H.E(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.v])
C.M=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.v=makeConstList([])
C.l=H.E(makeConstList(["bind","if","ref","repeat","syntax"]),[P.v])
C.m=H.E(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.v])
C.O=H.P("o3")
C.P=H.P("o4")
C.Q=H.P("eI")
C.R=H.P("o5")
C.S=H.P("o6")
C.T=H.P("kD")
C.U=H.P("o7")
C.V=H.P("kG")
C.W=H.P("aI")
C.X=H.P("v")
C.Y=H.P("l_")
C.Z=H.P("l0")
C.a_=H.P("o8")
C.a0=H.P("l1")
C.a1=H.P("aA")
C.a2=H.P("Q")
C.a3=H.P("o")
C.a4=H.P("Y")})();(function staticFields(){$.kK="$cachedFunction"
$.kL="$cachedInvocation"
$.kj=null
$.kh=null
$.jN=!1
$.jR=null
$.lf=null
$.ly=null
$.iT=null
$.j0=null
$.jS=null
$.bs=null
$.cd=null
$.ce=null
$.jO=!1
$.y=C.d
$.ky=0
$.aE=null
$.jv=null
$.kx=null
$.kw=null
$.ku=null
$.kt=null
$.ks=null
$.kr=null
$.nA=0
$.nB=0
$.jW=0
$.lu=0
$.cj=0
$.ck=0
$.o_=!1
$.ln=0})();(function lazyInitializers(){lazy($,"kq","$get$kq",function(){return H.lq("_$dart_dartClosure")})
lazy($,"jA","$get$jA",function(){return H.lq("_$dart_js")})
lazy($,"kE","$get$kE",function(){return H.mO()})
lazy($,"kF","$get$kF",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.ky
$.ky=t+1
t="expando$key$"+t}return new P.em(null,t,[P.o])})
lazy($,"kP","$get$kP",function(){return H.ay(H.hr({
toString:function(){return"$receiver$"}}))})
lazy($,"kQ","$get$kQ",function(){return H.ay(H.hr({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"kR","$get$kR",function(){return H.ay(H.hr(null))})
lazy($,"kS","$get$kS",function(){return H.ay(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kW","$get$kW",function(){return H.ay(H.hr(void 0))})
lazy($,"kX","$get$kX",function(){return H.ay(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kU","$get$kU",function(){return H.ay(H.kV(null))})
lazy($,"kT","$get$kT",function(){return H.ay(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"kZ","$get$kZ",function(){return H.ay(H.kV(void 0))})
lazy($,"kY","$get$kY",function(){return H.ay(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"jL","$get$jL",function(){return P.na()})
lazy($,"kA","$get$kA",function(){return P.nf(null,P.aI)})
lazy($,"cf","$get$cf",function(){return[]})
lazy($,"kp","$get$kp",function(){return{}})
lazy($,"l8","$get$l8",function(){return P.jC(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"jM","$get$jM",function(){return P.G()})
lazy($,"iS","$get$iS",function(){return P.kH(P.o,P.aA)})
lazy($,"ch","$get$ch",function(){return P.kH(P.v,P.aA)})
lazy($,"jI","$get$jI",function(){return new G.dI(1281,0,4294967295)})
lazy($,"ke","$get$ke",function(){return new G.bn(1281,1281,1281)})
lazy($,"kf","$get$kf",function(){return new G.bn(32774,770,771)})
lazy($,"kd","$get$kd",function(){return new G.bn(32774,770,769)})
lazy($,"W","$get$W",function(){return P.aZ(["cBlendEquation",new G.k("","",0),"cDepthWrite",new G.k("","",0),"cDepthTest",new G.k("","",0),"cStencilFunc",new G.k("","",0),"tPosition",new G.k("vec3","",0),"tSpeed",new G.k("vec3","",0),"tForce",new G.k("vec3","",0),"aColors",new G.k("vec3","per vertex color",0),"aColorAlpha",new G.k("vec4","per vertex color",0),"aPosition",new G.k("vec3","vertex coordinates",0),"aTexUV",new G.k("vec2","texture uvs",0),"aNormal",new G.k("vec3","vertex normals",0),"aBinormal",new G.k("vec3","vertex binormals",0),"aCenter",new G.k("vec4","for wireframe",0),"aPointSize",new G.k("float","",0),"aBoneIndex",new G.k("vec4","",0),"aBoneWeight",new G.k("vec4","",0),"aTangent",new G.k("vec3","vertex tangents",0),"aBitangent",new G.k("vec3","vertex btangents",0),"iaRotation",new G.k("vec4","",0),"iaTranslation",new G.k("vec3","",0),"iaScale",new G.k("vec3","",0),"vColor",new G.k("vec3","per vertex color",0),"vTexUV",new G.k("vec2","",0),"vLightWeighting",new G.k("vec3","",0),"vNormal",new G.k("vec3","",0),"vPosition",new G.k("vec3","vertex coordinates",0),"vPositionFromLight",new G.k("vec4","delta from light",0),"vCenter",new G.k("vec4","for wireframe",0),"vDepth",new G.k("float","depth for shadowmaps",0),"uTransformationMatrix",new G.k("mat4","",0),"uModelMatrix",new G.k("mat4","",0),"uNormalMatrix",new G.k("mat3","",0),"uConvolutionMatrix",new G.k("mat3","",0),"uPerspectiveViewMatrix",new G.k("mat4","",0),"uLightPerspectiveViewMatrix",new G.k("mat4","",0),"uShadowMap",new G.k("sampler2DShadow","",0),"uTexture",new G.k("sampler2D","",0),"uTexture2",new G.k("sampler2D","",0),"uTexture3",new G.k("sampler2D","",0),"uTexture4",new G.k("sampler2D","",0),"uSpecularMap",new G.k("sampler2D","",0),"uNormalMap",new G.k("sampler2D","",0),"uBumpMap",new G.k("sampler2D","",0),"uDepthMap",new G.k("sampler2D","",0),"uCubeTexture",new G.k("samplerCube","",0),"uAnimationTable",new G.k("sampler2D","",0),"uTime",new G.k("float","time since program start in sec",0),"uCameraNear",new G.k("float","",0),"uCameraFar",new G.k("float","",0),"uFogNear",new G.k("float","",0),"uFogFar",new G.k("float","",0),"uPointSize",new G.k("float","",0),"uScale",new G.k("float","",0),"uAngle",new G.k("float","",0),"uCanvasSize",new G.k("vec2","",0),"uCenter2",new G.k("vec2","",0),"uCutOff",new G.k("float","",0),"uShininess",new G.k("float","",0),"uShadowBias",new G.k("float","",0),"uOpacity",new G.k("float","",0),"uColor",new G.k("vec3","",0),"uAmbientDiffuse",new G.k("vec3","",0),"uColorEmissive",new G.k("vec3","",0),"uColorSpecular",new G.k("vec3","",0),"uColorDiffuse",new G.k("vec3","",0),"uColorAlpha",new G.k("vec4","",0),"uColorAlpha2",new G.k("vec4","",0),"uEyePosition",new G.k("vec3","",0),"uMaterial",new G.k("mat4","",0),"uRange",new G.k("vec2","",0),"uDirection",new G.k("vec2","",0),"uBoneMatrices",new G.k("mat4","",128),"uLightDescs",new G.k("mat4","",4),"uLightCount",new G.k("float","",0),"uLightTypes",new G.k("float","",4),"uBumpScale",new G.k("float","for bump maps",0),"uNormalScale",new G.k("float","for normal maps",0)])})
lazy($,"l2","$get$l2",function(){return C.A})
lazy($,"kn","$get$kn",function(){return T.J(0.4,0.4,0.4)})
lazy($,"km","$get$km",function(){return T.J(0,0,0)})
lazy($,"ko","$get$ko",function(){return T.J(1,0,0)})
lazy($,"lC","$get$lC",function(){var t=new G.bm("Textured",null,[],[],[],[],0,P.G())
t.bz(["aPosition","aTexUV"])
t.ax(["uPerspectiveViewMatrix","uModelMatrix"])
t.bB(["vTexUV"])
t.ay(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vTexUV = aTexUV;"])
return t})
lazy($,"lB","$get$lB",function(){var t=new G.bm("TexturedF",null,[],[],[],[],0,P.G())
t.bB(["vTexUV"])
t.ax(["uColor","uTexture"])
t.ay(["oFragColor = texture(uTexture, vTexUV) + vec4( uColor, 0.0 );"])
return t})
lazy($,"lx","$get$lx",function(){var t=new G.bm("PointSpritesV",null,[],[],[],[],0,P.G())
t.bz(["aPosition"])
t.ax(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"])
t.ay(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"])
return t})
lazy($,"lw","$get$lw",function(){var t=new G.bm("PointSpritesF",null,[],[],[],[],0,P.G())
t.ax(["uTexture"])
t.ay(["oFragColor = texture( uTexture,  gl_PointCoord);"])
return t})
lazy($,"l5","$get$l5",function(){return[T.J(0,0,1),T.J(0,0,-1),T.J(0,1,0),T.J(0,-1,0),T.J(1,0,0),T.J(-1,0,0)]})
lazy($,"kB","$get$kB",function(){return[new G.A(0,11,5),new G.A(0,5,1),new G.A(0,1,7),new G.A(0,7,10),new G.A(0,10,11),new G.A(1,5,9),new G.A(5,11,4),new G.A(11,10,2),new G.A(10,7,6),new G.A(7,1,8),new G.A(3,9,4),new G.A(3,4,2),new G.A(3,2,6),new G.A(3,6,8),new G.A(3,8,9),new G.A(4,9,5),new G.A(2,4,11),new G.A(6,2,10),new G.A(8,6,7),new G.A(9,8,1)]})
lazy($,"lA","$get$lA",function(){return(1+P.o0(5))/2})
lazy($,"kC","$get$kC",function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=$.$get$lA()
s=T.J(-1,t,0)
s.C(0)
r=T.J(1,t,0)
r.C(0)
q=T.J(-1,-t,0)
q.C(0)
p=T.J(1,-t,0)
p.C(0)
o=T.J(0,-1,t)
o.C(0)
n=T.J(0,1,t)
n.C(0)
m=T.J(0,-1,-t)
m.C(0)
l=T.J(0,1,-t)
l.C(0)
k=T.J(t,0,-1)
k.C(0)
j=T.J(t,0,1)
j.C(0)
i=T.J(-t,0,-1)
i.C(0)
t=T.J(-t,0,1)
t.C(0)
return[s,r,q,p,o,n,m,l,k,j,i,t]})
lazy($,"jb","$get$jb",function(){return T.l3()})
lazy($,"jX","$get$jX",function(){return T.l3()})})()
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
mangledGlobalNames:{o:"int",Q:"double",Y:"num",v:"String",aA:"bool",aI:"Null",b:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.u},{func:1,ret:P.aA,args:[W.a6,P.v,P.v,W.c8]},{func:1,v:true,args:[P.r],opt:[P.c_]},{func:1,ret:P.o,args:[P.M,P.M]},{func:1,ret:P.v,args:[W.j]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationTimeline:J.a,AppBannerPromptResult:J.a,BarProp:J.a,Body:J.a,CacheStorage:J.a,CanvasPattern:J.a,CHROMIUMValuebuffer:J.a,CircularGeofencingRegion:J.a,Client:J.a,Clients:J.a,CompositorProxy:J.a,ConsoleBase:J.a,Coordinates:J.a,Credential:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMStringMap:J.a,EffectModel:J.a,Entry:J.a,FederatedCredential:J.a,FileEntry:J.a,FileError:J.a,Stream:J.a,DOMFileSystem:J.a,FontFace:J.a,FormData:J.a,GamepadButton:J.a,Geofencing:J.a,GeofencingRegion:J.a,Geolocation:J.a,Geoposition:J.a,Headers:J.a,HMDVRDevice:J.a,IdleDeadline:J.a,ImageBitmapRenderingContext:J.a,InjectedScriptHost:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,KeyframeEffect:J.a,MediaDeviceInfo:J.a,MediaDevices:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaMetadata:J.a,MediaSession:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigatorStorageUtils:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,OffscreenCanvas:J.a,PasswordCredential:J.a,PerformanceCompositeTiming:J.a,PerformanceEntry:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformanceRenderTiming:J.a,PerformanceResourceTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PositionError:J.a,PositionSensorVRDevice:J.a,Presentation:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,ReadableByteStream:J.a,ReadableByteStreamReader:J.a,ReadableStreamReader:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,Selection:J.a,ServicePort:J.a,SharedArrayBuffer:J.a,SourceInfo:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StorageInfo:J.a,StorageManager:J.a,StorageQuota:J.a,StyleMedia:J.a,StylePropertyMap:J.a,SyncManager:J.a,TextMetrics:J.a,TrackDefault:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRDevice:J.a,VREyeParameters:J.a,VRFieldOfView:J.a,VRPositionState:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkerConsole:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothAdvertisingData:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,NFC:J.a,PagePopupController:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WebKitCSSMatrix:J.a,Worklet:J.a,WorkletGlobalScope:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPreserveAspectRatio:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,CHROMIUMSubscribeUniform:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTDisjointTimerQuery:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bQ,ArrayBufferView:H.bk,DataView:H.fg,Float32Array:H.dr,Float64Array:H.fh,Int16Array:H.fi,Int32Array:H.fj,Int8Array:H.fk,Uint16Array:H.fl,Uint32Array:H.fm,Uint8ClampedArray:H.dv,CanvasPixelArray:H.dv,Uint8Array:H.fn,HTMLBRElement:W.n,HTMLBaseElement:W.n,HTMLButtonElement:W.n,HTMLContentElement:W.n,HTMLDListElement:W.n,HTMLDataListElement:W.n,HTMLDetailsElement:W.n,HTMLDialogElement:W.n,HTMLEmbedElement:W.n,HTMLFieldSetElement:W.n,HTMLHRElement:W.n,HTMLHeadingElement:W.n,HTMLHtmlElement:W.n,HTMLIFrameElement:W.n,HTMLKeygenElement:W.n,HTMLLIElement:W.n,HTMLLabelElement:W.n,HTMLLegendElement:W.n,HTMLLinkElement:W.n,HTMLMapElement:W.n,HTMLMenuElement:W.n,HTMLMenuItemElement:W.n,HTMLMetaElement:W.n,HTMLMeterElement:W.n,HTMLModElement:W.n,HTMLOListElement:W.n,HTMLObjectElement:W.n,HTMLOptGroupElement:W.n,HTMLOptionElement:W.n,HTMLOutputElement:W.n,HTMLParagraphElement:W.n,HTMLParamElement:W.n,HTMLPictureElement:W.n,HTMLPreElement:W.n,HTMLProgressElement:W.n,HTMLQuoteElement:W.n,HTMLScriptElement:W.n,HTMLShadowElement:W.n,HTMLSlotElement:W.n,HTMLSourceElement:W.n,HTMLSpanElement:W.n,HTMLStyleElement:W.n,HTMLTableCaptionElement:W.n,HTMLTableCellElement:W.n,HTMLTableDataCellElement:W.n,HTMLTableHeaderCellElement:W.n,HTMLTableColElement:W.n,HTMLTextAreaElement:W.n,HTMLTitleElement:W.n,HTMLTrackElement:W.n,HTMLUListElement:W.n,HTMLUnknownElement:W.n,HTMLDirectoryElement:W.n,HTMLFontElement:W.n,HTMLFrameElement:W.n,HTMLMarqueeElement:W.n,HTMLElement:W.n,HTMLAnchorElement:W.e0,HTMLAreaElement:W.e1,AudioTrack:W.a4,AudioTrackList:W.e5,Blob:W.co,HTMLBodyElement:W.aQ,HTMLCanvasElement:W.aR,CanvasGradient:W.cp,CanvasRenderingContext2D:W.cq,CDATASection:W.aS,CharacterData:W.aS,Comment:W.aS,ProcessingInstruction:W.aS,Text:W.aS,CompositorWorker:W.e9,CSSCharsetRule:W.B,CSSFontFaceRule:W.B,CSSGroupingRule:W.B,CSSImportRule:W.B,CSSKeyframeRule:W.B,MozCSSKeyframeRule:W.B,WebKitCSSKeyframeRule:W.B,CSSKeyframesRule:W.B,MozCSSKeyframesRule:W.B,WebKitCSSKeyframesRule:W.B,CSSMediaRule:W.B,CSSNamespaceRule:W.B,CSSPageRule:W.B,CSSRule:W.B,CSSStyleRule:W.B,CSSSupportsRule:W.B,CSSViewportRule:W.B,CSSStyleDeclaration:W.bc,MSStyleCSSProperties:W.bc,CSS2Properties:W.bc,DataTransferItemList:W.ec,DeviceAcceleration:W.ed,HTMLDivElement:W.cs,XMLDocument:W.bB,Document:W.bB,DocumentFragment:W.ct,ShadowRoot:W.ct,DOMException:W.ee,DOMImplementation:W.cu,DOMPoint:W.ef,DOMPointReadOnly:W.cv,DOMRectReadOnly:W.cw,DOMStringList:W.eg,DOMTokenList:W.eh,Element:W.a6,AnimationEvent:W.l,AnimationPlayerEvent:W.l,ApplicationCacheErrorEvent:W.l,AutocompleteErrorEvent:W.l,BeforeInstallPromptEvent:W.l,BeforeUnloadEvent:W.l,BlobEvent:W.l,ClipboardEvent:W.l,CloseEvent:W.l,CustomEvent:W.l,DeviceLightEvent:W.l,DeviceMotionEvent:W.l,DeviceOrientationEvent:W.l,ErrorEvent:W.l,ExtendableEvent:W.l,ExtendableMessageEvent:W.l,FetchEvent:W.l,FontFaceSetLoadEvent:W.l,GamepadEvent:W.l,GeofencingEvent:W.l,HashChangeEvent:W.l,InstallEvent:W.l,MediaEncryptedEvent:W.l,MediaKeyMessageEvent:W.l,MediaQueryListEvent:W.l,MediaStreamEvent:W.l,MediaStreamTrackEvent:W.l,MessageEvent:W.l,MIDIConnectionEvent:W.l,MIDIMessageEvent:W.l,NotificationEvent:W.l,PageTransitionEvent:W.l,PopStateEvent:W.l,PresentationConnectionAvailableEvent:W.l,PresentationConnectionCloseEvent:W.l,ProgressEvent:W.l,PromiseRejectionEvent:W.l,PushEvent:W.l,RelatedEvent:W.l,RTCDataChannelEvent:W.l,RTCDTMFToneChangeEvent:W.l,RTCIceCandidateEvent:W.l,RTCPeerConnectionIceEvent:W.l,SecurityPolicyViolationEvent:W.l,ServicePortConnectEvent:W.l,ServiceWorkerMessageEvent:W.l,SpeechRecognitionError:W.l,SpeechRecognitionEvent:W.l,SpeechSynthesisEvent:W.l,StorageEvent:W.l,SyncEvent:W.l,TrackEvent:W.l,TransitionEvent:W.l,WebKitTransitionEvent:W.l,ResourceProgressEvent:W.l,USBConnectionEvent:W.l,IDBVersionChangeEvent:W.l,AudioProcessingEvent:W.l,OfflineAudioCompletionEvent:W.l,WebGLContextEvent:W.l,Event:W.l,InputEvent:W.l,Animation:W.j,ApplicationCache:W.j,DOMApplicationCache:W.j,OfflineResourceList:W.j,BatteryManager:W.j,CanvasCaptureMediaStreamTrack:W.j,CrossOriginServiceWorkerClient:W.j,EventSource:W.j,FileReader:W.j,FontFaceSet:W.j,MediaKeySession:W.j,MediaQueryList:W.j,MediaRecorder:W.j,MediaSource:W.j,MediaStream:W.j,MediaStreamTrack:W.j,MessagePort:W.j,MIDIAccess:W.j,NetworkInformation:W.j,Notification:W.j,Performance:W.j,PermissionStatus:W.j,PresentationAvailability:W.j,PresentationReceiver:W.j,PresentationRequest:W.j,RTCDTMFSender:W.j,RTCPeerConnection:W.j,webkitRTCPeerConnection:W.j,mozRTCPeerConnection:W.j,ScreenOrientation:W.j,ServicePortCollection:W.j,ServiceWorkerContainer:W.j,ServiceWorkerRegistration:W.j,SpeechRecognition:W.j,SpeechSynthesis:W.j,SpeechSynthesisUtterance:W.j,WorkerPerformance:W.j,BluetoothDevice:W.j,BluetoothRemoteGATTCharacteristic:W.j,USB:W.j,IDBDatabase:W.j,IDBOpenDBRequest:W.j,IDBVersionChangeRequest:W.j,IDBRequest:W.j,IDBTransaction:W.j,AnalyserNode:W.j,RealtimeAnalyserNode:W.j,AudioBufferSourceNode:W.j,AudioContext:W.j,webkitAudioContext:W.j,AudioDestinationNode:W.j,AudioNode:W.j,AudioSourceNode:W.j,BiquadFilterNode:W.j,ChannelMergerNode:W.j,AudioChannelMerger:W.j,ChannelSplitterNode:W.j,AudioChannelSplitter:W.j,ConvolverNode:W.j,DelayNode:W.j,DynamicsCompressorNode:W.j,GainNode:W.j,AudioGainNode:W.j,IIRFilterNode:W.j,MediaElementAudioSourceNode:W.j,MediaStreamAudioDestinationNode:W.j,MediaStreamAudioSourceNode:W.j,OfflineAudioContext:W.j,OscillatorNode:W.j,Oscillator:W.j,PannerNode:W.j,AudioPannerNode:W.j,webkitAudioPannerNode:W.j,ScriptProcessorNode:W.j,JavaScriptAudioNode:W.j,StereoPannerNode:W.j,WaveShaperNode:W.j,EventTarget:W.j,File:W.a7,FileList:W.eF,FileWriter:W.eG,HTMLFormElement:W.eK,Gamepad:W.a8,HTMLHeadElement:W.cB,History:W.eO,HTMLCollection:W.bK,HTMLFormControlsCollection:W.bK,HTMLOptionsCollection:W.bK,HTMLDocument:W.cC,XMLHttpRequest:W.eP,XMLHttpRequestUpload:W.bL,XMLHttpRequestEventTarget:W.bL,ImageBitmap:W.bf,ImageData:W.bg,HTMLImageElement:W.bh,HTMLInputElement:W.eU,KeyboardEvent:W.aY,Location:W.f7,HTMLAudioElement:W.bO,HTMLMediaElement:W.bO,MediaList:W.fc,MIDIOutput:W.fd,MIDIInput:W.bP,MIDIPort:W.bP,MimeType:W.aa,MimeTypeArray:W.fe,PointerEvent:W.S,MouseEvent:W.S,DragEvent:W.S,Navigator:W.fo,Attr:W.u,Node:W.u,NodeIterator:W.dw,NodeList:W.bV,RadioNodeList:W.bV,Path2D:W.fx,Perspective:W.fA,Plugin:W.ab,PluginArray:W.fC,PositionValue:W.fF,PresentationConnection:W.fG,Range:W.dB,Rotation:W.fQ,RTCDataChannel:W.dD,DataChannel:W.dD,HTMLSelectElement:W.fS,SharedWorker:W.fV,SourceBuffer:W.ac,SourceBufferList:W.fW,SpeechGrammar:W.ad,SpeechGrammarList:W.fY,SpeechRecognitionResult:W.ae,Storage:W.h2,CSSStyleSheet:W.a_,StyleSheet:W.a_,CalcLength:W.am,KeywordValue:W.am,LengthValue:W.am,NumberValue:W.am,SimpleLength:W.am,TransformValue:W.am,StyleValue:W.am,HTMLTableElement:W.dG,HTMLTableRowElement:W.hb,HTMLTableSectionElement:W.hc,HTMLTemplateElement:W.c2,TextTrack:W.af,TextTrackCue:W.a0,VTTCue:W.a0,TextTrackCueList:W.hf,TextTrackList:W.hg,TimeRanges:W.hi,Touch:W.ag,TouchEvent:W.b1,TouchList:W.hm,TrackDefaultList:W.hn,Matrix:W.bo,Skew:W.bo,TransformComponent:W.bo,Translation:W.hp,TreeWalker:W.dJ,CompositionEvent:W.aK,FocusEvent:W.aK,TextEvent:W.aK,SVGZoomEvent:W.aK,UIEvent:W.aK,URL:W.hu,HTMLVideoElement:W.bp,VideoTrackList:W.hw,VTTRegionList:W.hz,WebSocket:W.hA,WheelEvent:W.b3,Window:W.c5,DOMWindow:W.c5,Worker:W.hD,CompositorWorkerGlobalScope:W.b4,DedicatedWorkerGlobalScope:W.b4,ServiceWorkerGlobalScope:W.b4,SharedWorkerGlobalScope:W.b4,WorkerGlobalScope:W.b4,ClientRect:W.hM,ClientRectList:W.dO,DOMRectList:W.dO,CSSRuleList:W.hO,DocumentType:W.hP,DOMRect:W.hQ,GamepadList:W.ib,HTMLFrameSetElement:W.ic,NamedNodeMap:W.dQ,MozNamedAttrMap:W.dQ,ServiceWorker:W.ix,SpeechRecognitionResultList:W.iA,StyleSheetList:W.iB,WorkerLocation:W.iI,WorkerNavigator:W.iJ,SVGAElement:P.e_,SVGAnimateElement:P.aP,SVGAnimateMotionElement:P.aP,SVGAnimateTransformElement:P.aP,SVGAnimationElement:P.aP,SVGSetElement:P.aP,SVGFEBlendElement:P.en,SVGFEColorMatrixElement:P.eo,SVGFEComponentTransferElement:P.ep,SVGFECompositeElement:P.eq,SVGFEConvolveMatrixElement:P.er,SVGFEDiffuseLightingElement:P.es,SVGFEDisplacementMapElement:P.et,SVGFEFloodElement:P.eu,SVGFEGaussianBlurElement:P.ev,SVGFEImageElement:P.ew,SVGFEMergeElement:P.ex,SVGFEMorphologyElement:P.ey,SVGFEOffsetElement:P.ez,SVGFEPointLightElement:P.eA,SVGFESpecularLightingElement:P.eB,SVGFESpotLightElement:P.eC,SVGFETileElement:P.eD,SVGFETurbulenceElement:P.eE,SVGFilterElement:P.eH,SVGForeignObjectElement:P.eJ,SVGCircleElement:P.aj,SVGEllipseElement:P.aj,SVGLineElement:P.aj,SVGPathElement:P.aj,SVGPolygonElement:P.aj,SVGPolylineElement:P.aj,SVGGeometryElement:P.aj,SVGClipPathElement:P.aF,SVGDefsElement:P.aF,SVGGElement:P.aF,SVGSwitchElement:P.aF,SVGGraphicsElement:P.aF,SVGImageElement:P.eQ,SVGLength:P.au,SVGLengthList:P.f1,SVGMarkerElement:P.fa,SVGMaskElement:P.fb,SVGNumber:P.av,SVGNumberList:P.fr,SVGPatternElement:P.fy,SVGPoint:P.fD,SVGPointList:P.fE,SVGRect:P.fJ,SVGRectElement:P.fK,SVGScriptElement:P.bZ,SVGStringList:P.h8,SVGDescElement:P.L,SVGDiscardElement:P.L,SVGFEDistantLightElement:P.L,SVGFEFuncAElement:P.L,SVGFEFuncBElement:P.L,SVGFEFuncGElement:P.L,SVGFEFuncRElement:P.L,SVGFEMergeNodeElement:P.L,SVGMetadataElement:P.L,SVGStopElement:P.L,SVGStyleElement:P.L,SVGTitleElement:P.L,SVGComponentTransferFunctionElement:P.L,SVGElement:P.L,SVGSVGElement:P.h9,SVGSymbolElement:P.ha,SVGTextContentElement:P.dH,SVGTextPathElement:P.he,SVGTSpanElement:P.c3,SVGTextElement:P.c3,SVGTextPositioningElement:P.c3,SVGTransform:P.ax,SVGTransformList:P.ho,SVGUseElement:P.hv,SVGViewElement:P.hx,SVGViewSpec:P.hy,SVGLinearGradientElement:P.c7,SVGRadialGradientElement:P.c7,SVGGradientElement:P.c7,SVGCursorElement:P.it,SVGFEDropShadowElement:P.iu,SVGMPathElement:P.iv,AudioBuffer:P.e4,WebGLRenderingContext:P.fO,WebGL2RenderingContext:P.fP,WebGL2RenderingContextBase:P.iH,SQLResultSetRowList:P.fZ})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasPattern:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,Credential:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMStringMap:true,EffectModel:true,Entry:true,FederatedCredential:true,FileEntry:true,FileError:true,Stream:true,DOMFileSystem:true,FontFace:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmapRenderingContext:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PasswordCredential:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,ServicePort:true,SharedArrayBuffer:true,SourceInfo:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,TrackDefault:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPreserveAspectRatio:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,AudioTrack:true,AudioTrackList:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasGradient:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,CSSCharsetRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DocumentFragment:true,ShadowRoot:true,DOMException:true,DOMImplementation:true,DOMPoint:true,DOMPointReadOnly:false,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AudioDestinationNode:true,AudioNode:true,AudioSourceNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OfflineAudioContext:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,ImageBitmap:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Navigator:true,Attr:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Path2D:true,Perspective:true,Plugin:true,PluginArray:true,PositionValue:true,PresentationConnection:true,Range:true,Rotation:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,SharedWorker:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,CalcLength:true,KeywordValue:true,LengthValue:true,NumberValue:true,SimpleLength:true,TransformValue:true,StyleValue:false,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,Matrix:true,Skew:true,TransformComponent:false,Translation:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,SVGZoomEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,VTTRegionList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.ds.$nativeSuperclassTag="ArrayBufferView"
H.bS.$nativeSuperclassTag="ArrayBufferView"
H.bT.$nativeSuperclassTag="ArrayBufferView"
H.dt.$nativeSuperclassTag="ArrayBufferView"
H.bR.$nativeSuperclassTag="ArrayBufferView"
H.bU.$nativeSuperclassTag="ArrayBufferView"
H.du.$nativeSuperclassTag="ArrayBufferView"
W.bF.$nativeSuperclassTag="EventTarget"
W.bI.$nativeSuperclassTag="EventTarget"
W.bE.$nativeSuperclassTag="EventTarget"
W.bH.$nativeSuperclassTag="EventTarget"
W.bD.$nativeSuperclassTag="EventTarget"
W.bG.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.lz(V.lj(),b)},[])
else (function(b){H.lz(V.lj(),b)})([])})})()