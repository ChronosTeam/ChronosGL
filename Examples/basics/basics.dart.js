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
a[c]=function(){a[c]=function(){H.o1(b)}
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
return d?function(e){if(t===null)t=H.jP(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.jP(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.jP(this,a,b,true,[],d).prototype
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
jF:function(a,b,c,d){if(!!a.$isd)return new H.em(a,b,[c,d])
return new H.dn(a,b,[c,d])},
dh:function(){return new P.aw("No element")},
mO:function(){return new P.aw("Too many elements")},
mN:function(){return new P.aw("Too few elements")},
dF:function(a,b,c,d){if(c-b<=32)H.n3(a,b,c,d)
else H.n2(a,b,c,d)},
n3:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.a2(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.ar(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.j(a,q,s.h(a,p))
q=p}s.j(a,q,r)}},
n2:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.b(t>32)
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
H.dF(a2,a3,g-2,a5)
H.dF(a2,f+2,a4,a5)
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
break}}H.dF(a2,g,f,a5)}else H.dF(a2,g,f,a5)},
d:function d(){},
bk:function bk(){},
dm:function dm(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
dn:function dn(a,b,c){this.a=a
this.b=b
this.$ti=c},
em:function em(a,b,c){this.a=a
this.b=b
this.$ti=c},
f9:function f9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bN:function bN(a,b,c){this.a=a
this.b=b
this.$ti=c},
dN:function dN(a,b,c){this.a=a
this.b=b
this.$ti=c},
hD:function hD(a,b,c){this.a=a
this.b=b
this.$ti=c},
cy:function cy(){},
dU:function(a,b){var t=a.an(b)
if(!u.globalState.d.cy)u.globalState.f.as()
return t},
j8:function(){--u.globalState.f.b
H.b(u.globalState.f.b>=0)},
lv:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.v(s).$isc)throw H.e(P.e3("Arguments to main must be a List: "+H.i(s)))
u.globalState=new H.io(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$kC()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.hV(P.jD(null,H.b8),0)
r=P.o
s.seV(new H.ak(0,null,null,null,null,null,0,[r,H.b7]))
s.seX(new H.ak(0,null,null,null,null,null,0,[r,null]))
if(s.x){q=new H.im()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.mI,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.nj)}if(u.globalState.x)return
s=u.globalState.a++
q=P.al(null,null,null,r)
p=new H.bm(0,null,!1)
o=new H.b7(s,new H.ak(0,null,null,null,null,null,0,[r,H.bm]),q,u.createNewIsolate(),p,new H.at(H.jd()),new H.at(H.jd()),!1,!1,[],P.al(null,null,null,null),null,null,!1,!0,P.al(null,null,null,null))
q.i(0,0)
o.bJ(0,p)
u.globalState.e=o
u.globalState.z.j(0,s,o)
u.globalState.d=o
if(H.bx(a,{func:1,args:[,]}))o.an(new H.jj(t,a))
else if(H.bx(a,{func:1,args:[,,]}))o.an(new H.jk(t,a))
else o.an(a)
u.globalState.f.as()},
nj:function(a){var t=P.b_(["command","print","msg",a])
return new H.ao(!0,P.ca(null,P.o)).N(t)},
mK:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.mL()
return},
mL:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.e(new P.w("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.e(new P.w('Cannot extract URI from "'+t+'"'))},
mI:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.b6(!0,[]).a0(b.data)
s=J.a2(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.nO(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.b6(!0,[]).a0(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.b6(!0,[]).a0(s.h(t,"replyTo"))
s=u.globalState.a++
k=P.o
j=P.al(null,null,null,k)
i=new H.bm(0,null,!1)
h=new H.b7(s,new H.ak(0,null,null,null,null,null,0,[k,H.bm]),j,u.createNewIsolate(),i,new H.at(H.jd()),new H.at(H.jd()),!1,!1,[],P.al(null,null,null,null),null,null,!1,!0,P.al(null,null,null,null))
j.i(0,0)
h.bJ(0,i)
u.globalState.f.a.Y(0,new H.b8(h,new H.eW(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.as()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.m8(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.as()
break
case"close":u.globalState.ch.ar(0,$.$get$kD().h(0,a))
a.terminate()
u.globalState.f.as()
break
case"log":H.mH(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
k=P.b_(["command","print","msg",t])
k=new H.ao(!0,P.ca(null,P.o)).N(k)
s.toString
self.postMessage(k)}else P.aq(s.h(t,"msg"))
break
case"error":throw H.e(s.h(t,"msg"))}},
mH:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.b_(["command","log","msg",a])
r=new H.ao(!0,P.ca(null,P.o)).N(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.R(q)
t=H.ap(q)
s=P.cx(t)
throw H.e(s)}},
mJ:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.kI=$.kI+("_"+s)
$.kJ=$.kJ+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.K(0,["spawned",new H.bs(s,r),q,t.r])
r=new H.eX(a,b,c,d,t)
if(e){t.c3(q,q)
u.globalState.f.a.Y(0,new H.b8(t,r,"start isolate"))}else r.$0()},
n4:function(a,b){var t=new H.hl(!0,!1,null)
t.dG(a,b)
return t},
nl:function(a){return new H.b6(!0,[]).a0(new H.ao(!1,P.ca(null,P.o)).N(a))},
jj:function jj(a,b){this.a=a
this.b=b},
jk:function jk(a,b){this.a=a
this.b=b},
io:function io(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
b7:function b7(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
ih:function ih(a,b){this.a=a
this.b=b},
hV:function hV(a,b){this.a=a
this.b=b},
hW:function hW(a){this.a=a},
b8:function b8(a,b,c){this.a=a
this.b=b
this.c=c},
im:function im(){},
eW:function eW(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eX:function eX(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hN:function hN(){},
bs:function bs(a,b){this.b=a
this.a=b},
ip:function ip(a,b){this.a=a
this.b=b},
cc:function cc(a,b,c){this.b=a
this.c=b
this.a=c},
bm:function bm(a,b,c){this.a=a
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
b6:function b6(a,b){this.a=a
this.b=b},
nH:function(a){return u.types[a]},
nQ:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.v(a).$isq},
i:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aD(a)
if(typeof t!=="string")throw H.e(H.X(a))
return t},
n0:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.fM(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
b0:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
dA:function(a){var t,s,r,q,p,o,n,m
t=J.v(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.O||!!J.v(a).$isb3){p=C.B(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.i.aT(q,0)===36)q=C.i.de(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.dW(H.iX(a),0,null),u.mangledGlobalNames)},
fI:function(a){return"Instance of '"+H.dA(a)+"'"},
U:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mZ:function(a){return a.b?H.U(a).getUTCFullYear()+0:H.U(a).getFullYear()+0},
mX:function(a){return a.b?H.U(a).getUTCMonth()+1:H.U(a).getMonth()+1},
mT:function(a){return a.b?H.U(a).getUTCDate()+0:H.U(a).getDate()+0},
mU:function(a){return a.b?H.U(a).getUTCHours()+0:H.U(a).getHours()+0},
mW:function(a){return a.b?H.U(a).getUTCMinutes()+0:H.U(a).getMinutes()+0},
mY:function(a){return a.b?H.U(a).getUTCSeconds()+0:H.U(a).getSeconds()+0},
mV:function(a){return a.b?H.U(a).getUTCMilliseconds()+0:H.U(a).getMilliseconds()+0},
kH:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.X(a))
return a[b]},
T:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ai(!0,b,"index",null)
t=J.e_(a)
if(b<0||C.b.cY(b,t))return P.D(b,a,"index",null,t)
return P.fJ(b,"index",null)},
X:function(a){return new P.ai(!0,a,null,null)},
e:function(a){var t
if(a==null)a=new P.bW()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.lz})
t.name=""}else t.toString=H.lz
return t},
lz:function(){return J.aD(this.dartException)},
K:function(a){throw H.e(a)},
E:function(a){throw H.e(new P.a5(a))},
ay:function(a){var t,s,r,q,p,o
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
kT:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
jB:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.f1(a,s,t?null:b.receiver)},
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
return t.$1(new H.dz(p,null))}}if(a instanceof TypeError){o=$.$get$kN()
n=$.$get$kO()
m=$.$get$kP()
l=$.$get$kQ()
k=$.$get$kU()
j=$.$get$kV()
i=$.$get$kS()
$.$get$kR()
h=$.$get$kX()
g=$.$get$kW()
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
if(p)return t.$1(new H.dz(s,f==null?null:f.method))}}return t.$1(new H.hv(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.dG()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.ai(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.dG()
return a},
ap:function(a){var t
if(a==null)return new H.dS(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dS(a,null)},
nU:function(a){if(a==null||typeof a!='object')return J.as(a)
else return H.b0(a)},
nF:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=a.length
for(r=0;r<s;){q=r+1
H.b(t)
p=a[r]
r=q+1
H.b(t)
b.j(0,p,a[q])}return b},
nP:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dU(b,new H.j3(a))
case 1:return H.dU(b,new H.j4(a,d))
case 2:return H.dU(b,new H.j5(a,d,e))
case 3:return H.dU(b,new H.j6(a,d,e,f))
case 4:return H.dU(b,new H.j7(a,d,e,f,g))}throw H.e(P.cx("Unsupported number of arguments for wrapped closure"))},
bw:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.nP)
a.$identity=t
return t},
mp:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.v(c).$isc){t.$reflectionInfo=c
r=H.n0(t).r}else r=c
q=d?Object.create(new H.h1().constructor.prototype):Object.create(new H.bB(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.kj(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.nH,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.kg:H.ju
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.e("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.kj(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
mm:function(a,b,c,d){var t=H.ju
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
kj:function(a,b,c){var t,s,r,q
if(c)return H.mo(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.mm(s,b==null?r!=null:b!==r,t,b)
return q},
mn:function(a,b,c,d){var t,s
t=H.ju
s=H.kg
switch(b?-1:a){case 0:throw H.e(new H.fS("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
mo:function(a,b){var t,s,r,q
H.ml()
t=$.kf
if(t==null){t=H.ke("receiver")
$.kf=t}s=b.$stubName
r=b.length
q=a[s]
t=H.mn(r,b==null?q!=null:b!==q,s,b)
return t},
jP:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.v(c).$isc){c.fixed$length=Array
t=c}else t=c
return H.mp(a,b,t,!!d,e,f)},
ju:function(a){return a.a},
kg:function(a){return a.c},
ml:function(){var t=$.kh
if(t==null){t=H.ke("self")
$.kh=t}return t},
ke:function(a){var t,s,r,q,p
t=new H.bB("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
oe:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.az(a,"String"))},
a1:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.az(a,"double"))},
od:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.az(a,"num"))},
ny:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.az(a,"bool"))},
nO:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.az(a,"int"))},
nW:function(a,b){throw H.e(H.az(a,b.substring(3)))},
nV:function(a,b){var t=J.a2(b)
throw H.e(H.ki(H.dA(a),t.by(b,3,t.gl(b))))},
jS:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.v(a)[b])return a
H.nW(a,b)},
aO:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.v(a)[b]
else t=!0
if(t)return a
H.nV(a,b)},
oc:function(a){if(a==null)return a
if(!!J.v(a).$isc)return a
throw H.e(H.az(a,"List"))},
lj:function(a){var t=J.v(a)
return"$S" in t?t.$S():null},
bx:function(a,b){var t
if(a==null)return!1
t=H.lj(a)
return t==null?!1:H.lp(t,b)},
oa:function(a,b){var t,s
if(a==null)return a
if($.jM)return a
$.jM=!0
try{if(H.bx(a,b))return a
t=H.aP(b,null)
s=H.az(a,t)
throw H.e(s)}finally{$.jM=!1}},
az:function(a,b){return new H.hu("type '"+H.dA(a)+"' is not a subtype of type '"+b+"'")},
ki:function(a,b){return new H.e8("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
aA:function(a){if(!0===a)return!1
if(!!J.v(a).$isjx)a=a.$0()
if(typeof a==="boolean")return!a
throw H.e(H.az(a,"bool"))},
aN:function(a){throw H.e(new H.hG(a))},
b:function(a){if(H.aA(a))throw H.e(new P.cn(null))},
o1:function(a){throw H.e(new P.ec(a))},
jd:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
ln:function(a){return u.getIsolateTag(a)},
P:function(a){return new H.aK(a,null)},
F:function(a,b){H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
iX:function(a){if(a==null)return
return a.$ti},
lo:function(a,b){return H.jW(a["$as"+H.i(b)],H.iX(a))},
ah:function(a,b,c){var t,s
t=H.lo(a,b)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
aC:function(a,b){var t,s
t=H.iX(a)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
aP:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.b(!0)
H.b(!0)
return a[0].name+H.dW(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.i(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aP(t,b)
return H.nn(a,b)}return"unknown-reified-type"},
nn:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aP(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aP(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aP(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.nE(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aP(l[j],b)+(" "+H.i(j))}q+="}"}return"("+q+") => "+t},
dW:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=new P.c1("")
for(r=b,q=!0,p=!0;H.b(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.b(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aP(o,c)}return p?"":"<"+s.k(0)+">"},
iY:function(a){var t,s
if(a instanceof H.bb){t=H.lj(a)
if(t!=null)return H.aP(t,null)}s=J.v(a).constructor.name
if(a==null)return s
return s+H.dW(a.$ti,0,null)},
jW:function(a,b){if(a==null)return b
H.b(typeof a=="function")
H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.jT(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.jT(a,null,b)
return b},
cg:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.iX(a)
s=J.v(a)
if(s[b]==null)return!1
return H.le(H.jW(s[d],t),c)},
dX:function(a,b,c,d){if(a==null)return a
if(H.cg(a,b,c,d))return a
throw H.e(H.ki(H.dA(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dW(c,0,null),u.mangledGlobalNames)))},
o8:function(a,b,c,d){if(a==null)return a
if(H.cg(a,b,c,d))return a
throw H.e(H.az(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dW(c,0,null),u.mangledGlobalNames)))},
le:function(a,b){var t,s,r,q,p
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
if(!H.a3(r,b[p]))return!1}return!0},
nB:function(a,b,c){return H.jT(a,b,H.lo(b,c))},
a3:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.name==="aJ")return!0
if('func' in b)return H.lp(a,b)
if('func' in a)return b.name==="jx"||b.name==="p"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.b(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.b(!0)
q=b[0]}else q=b
if(q!==s){p=H.aP(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.le(H.jW(o,t),r)},
ld:function(a,b,c){var t,s,r,q,p,o,n
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
if(!(H.a3(o,n)||H.a3(n,o)))return!1}return!0},
nu:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
H.b(typeof a=='object')
H.b(typeof b=='object')
t=Object.getOwnPropertyNames(b)
t.fixed$length=Array
s=t
for(t=s.length,r=0;r<t;++r){q=s[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.a3(p,o)||H.a3(o,p)))return!1}return!0},
lp:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.b('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.a3(t,s)||H.a3(s,t)))return!1}r=a.args
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
if(n===m){if(!H.ld(r,q,!1))return!1
if(!H.ld(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.b(j)
g=r[h]
H.b(i)
f=q[h]
if(!(H.a3(g,f)||H.a3(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=q[e]
if(!(H.a3(g,f)||H.a3(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=o[e]
if(!(H.a3(g,f)||H.a3(f,g)))return!1}}return H.nu(a.named,b.named)},
jT:function(a,b,c){H.b(typeof a=="function")
H.b(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
of:function(a){var t=$.jQ
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
ob:function(a){return H.b0(a)},
o9:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nR:function(a){var t,s,r,q,p,o
H.b(!(a instanceof P.p))
t=$.jQ.$1(a)
s=$.iV[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.j2[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.lc.$2(a,t)
if(t!=null){s=$.iV[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.j2[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.jU(r)
$.iV[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.j2[t]=r
return r}if(p==="-"){o=H.jU(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.lr(a,r)
if(p==="*")throw H.e(new P.dM(t))
if(u.leafTags[t]===true){o=H.jU(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.lr(a,r)},
lr:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.jb(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
jU:function(a){return J.jb(a,!1,null,!!a.$isq)},
nT:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.jb(t,!1,null,!!t.$isq)
else return J.jb(t,c,null,null)},
nM:function(){if(!0===$.jR)return
$.jR=!0
H.nN()},
nN:function(){var t,s,r,q,p,o,n,m
$.iV=Object.create(null)
$.j2=Object.create(null)
H.nL()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.lu.$1(p)
if(o!=null){n=H.nT(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
nL:function(){var t,s,r,q,p,o,n
t=C.S()
t=H.bv(C.P,H.bv(C.U,H.bv(C.A,H.bv(C.A,H.bv(C.T,H.bv(C.Q,H.bv(C.R(C.B),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.jQ=new H.j_(p)
$.lc=new H.j0(o)
$.lu=new H.j1(n)},
bv:function(a,b){return a(b)||b},
o0:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
fM:function fM(a,b,c,d,e,f,g,h){var _=this
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
dz:function dz(a,b){this.a=a
this.b=b},
f1:function f1(a,b,c){this.a=a
this.b=b
this.c=c},
hv:function hv(a){this.a=a},
jl:function jl(a){this.a=a},
dS:function dS(a,b){this.a=a
this.b=b},
j3:function j3(a){this.a=a},
j4:function j4(a,b){this.a=a
this.b=b},
j5:function j5(a,b,c){this.a=a
this.b=b
this.c=c},
j6:function j6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j7:function j7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bb:function bb(){},
hf:function hf(){},
h1:function h1(){},
bB:function bB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hu:function hu(a){this.a=a},
e8:function e8(a){this.a=a},
fS:function fS(a){this.a=a},
hG:function hG(a){this.a=a},
aK:function aK(a,b){this.a=a
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
f0:function f0(a){this.a=a},
f3:function f3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
f4:function f4(a,b){this.a=a
this.$ti=b},
f5:function f5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
j_:function j_(a){this.a=a},
j0:function j0(a){this.a=a},
j1:function j1(a){this.a=a},
f:function(a){return a},
iO:function(a){var t,s,r
if(!!J.v(a).$isn)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
bQ:function bQ(){},
bl:function bl(){},
fh:function fh(){},
ds:function ds(){},
dt:function dt(){},
du:function du(){},
dr:function dr(){},
fi:function fi(){},
fj:function fj(){},
fk:function fk(){},
fl:function fl(){},
fm:function fm(){},
fn:function fn(){},
dv:function dv(){},
fo:function fo(){},
bR:function bR(){},
bS:function bS(){},
bT:function bT(){},
bU:function bU(){},
nE:function(a){var t=H.F(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
jc:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
v:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dk.prototype
return J.dj.prototype}if(typeof a=="string")return J.aX.prototype
if(a==null)return J.f_.prototype
if(typeof a=="boolean")return J.eZ.prototype
if(a.constructor==Array)return J.aW.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aY.prototype
return a}if(a instanceof P.p)return a
return J.iW(a)},
jb:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iW:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.jR==null){H.nM()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.e(new P.dM("Return interceptor for "+H.i(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$jA()]
if(p!=null)return p
p=H.nR(a)
if(p!=null)return p
if(typeof a=="function")return C.V
s=Object.getPrototypeOf(a)
if(s==null)return C.E
if(s===Object.prototype)return C.E
if(typeof q=="function"){Object.defineProperty(q,$.$get$jA(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
a2:function(a){if(typeof a=="string")return J.aX.prototype
if(a==null)return a
if(a.constructor==Array)return J.aW.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aY.prototype
return a}if(a instanceof P.p)return a
return J.iW(a)},
ci:function(a){if(a==null)return a
if(a.constructor==Array)return J.aW.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aY.prototype
return a}if(a instanceof P.p)return a
return J.iW(a)},
ll:function(a){if(typeof a=="number")return J.bj.prototype
if(a==null)return a
if(!(a instanceof P.p))return J.b3.prototype
return a},
nG:function(a){if(typeof a=="number")return J.bj.prototype
if(typeof a=="string")return J.aX.prototype
if(a==null)return a
if(!(a instanceof P.p))return J.b3.prototype
return a},
lm:function(a){if(typeof a=="string")return J.aX.prototype
if(a==null)return a
if(!(a instanceof P.p))return J.b3.prototype
return a},
l:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aY.prototype
return a}if(a instanceof P.p)return a
return J.iW(a)},
I:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.v(a).A(a,b)},
ar:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.ll(a).au(a,b)},
lA:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.ll(a).aO(a,b)},
by:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nQ(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.a2(a).h(a,b)},
lB:function(a,b,c,d){return J.l(a).dQ(a,b,c,d)},
jX:function(a,b){return J.lm(a).aT(a,b)},
bz:function(a,b){return J.l(a).e7(a,b)},
lC:function(a,b,c,d){return J.l(a).e8(a,b,c,d)},
lD:function(a,b,c){return J.l(a).e9(a,b,c)},
jY:function(a,b){return J.l(a).c2(a,b)},
jm:function(a,b){return J.l(a).V(a,b)},
jZ:function(a,b,c){return J.l(a).c5(a,b,c)},
lE:function(a,b){return J.l(a).en(a,b)},
dY:function(a,b,c){return J.l(a).c6(a,b,c)},
lF:function(a,b,c){return J.l(a).c7(a,b,c)},
cl:function(a,b,c){return J.l(a).c8(a,b,c)},
dZ:function(a,b){return J.l(a).eq(a,b)},
lG:function(a,b){return J.l(a).c9(a,b)},
lH:function(a,b,c){return J.l(a).ca(a,b,c)},
k_:function(a,b,c,d){return J.l(a).cb(a,b,c,d)},
lI:function(a,b){return J.ci(a).cc(a,b)},
lJ:function(a,b,c,d,e){return J.l(a).cd(a,b,c,d,e)},
lK:function(a,b){return J.nG(a).W(a,b)},
jn:function(a,b,c){return J.a2(a).ev(a,b,c)},
jo:function(a){return J.l(a).cf(a)},
lL:function(a){return J.l(a).cg(a)},
lM:function(a){return J.l(a).ck(a)},
k0:function(a){return J.l(a).eB(a)},
lN:function(a,b){return J.l(a).cm(a,b)},
jp:function(a,b){return J.l(a).cn(a,b)},
lO:function(a,b,c,d){return J.l(a).co(a,b,c,d)},
lP:function(a,b,c,d,e){return J.l(a).eI(a,b,c,d,e)},
lQ:function(a,b,c,d,e){return J.l(a).cp(a,b,c,d,e)},
lR:function(a,b,c,d,e,f){return J.l(a).eJ(a,b,c,d,e,f)},
lS:function(a,b){return J.ci(a).u(a,b)},
cm:function(a,b){return J.l(a).cq(a,b)},
lT:function(a,b){return J.l(a).cr(a,b)},
lU:function(a){return J.l(a).eK(a)},
lV:function(a,b){return J.ci(a).aG(a,b)},
lW:function(a){return J.l(a).gem(a)},
as:function(a){return J.v(a).gw(a)},
bA:function(a){return J.ci(a).gB(a)},
e_:function(a){return J.a2(a).gl(a)},
lX:function(a){return J.l(a).gbg(a)},
lY:function(a){return J.v(a).gD(a)},
lZ:function(a){return J.l(a).gf8(a)},
m_:function(a){return J.l(a).gaL(a)},
jq:function(a){return J.l(a).gm(a)},
jr:function(a){return J.l(a).gn(a)},
k1:function(a){return J.l(a).gO(a)},
js:function(a,b){return J.l(a).ac(a,b)},
m0:function(a){return J.l(a).aN(a)},
m1:function(a){return J.l(a).bn(a)},
m2:function(a,b){return J.l(a).bo(a,b)},
m3:function(a,b,c){return J.l(a).bp(a,b,c)},
k2:function(a,b,c){return J.l(a).bs(a,b,c)},
m4:function(a,b){return J.l(a).ct(a,b)},
m5:function(a,b){return J.ci(a).cw(a,b)},
m6:function(a,b,c){return J.l(a).cA(a,b,c)},
m7:function(a){return J.ci(a).f1(a)},
m8:function(a,b){return J.l(a).K(a,b)},
m9:function(a,b,c,d){return J.l(a).bx(a,b,c,d)},
ma:function(a,b,c,d,e,f,g){return J.l(a).cF(a,b,c,d,e,f,g)},
mb:function(a,b,c,d){return J.l(a).cG(a,b,c,d)},
k3:function(a,b,c,d){return J.l(a).cH(a,b,c,d)},
mc:function(a){return J.lm(a).fb(a)},
aD:function(a){return J.v(a).k(a)},
md:function(a,b,c,d){return J.l(a).fd(a,b,c,d)},
me:function(a,b,c){return J.l(a).cI(a,b,c)},
mf:function(a,b,c){return J.l(a).cJ(a,b,c)},
jt:function(a,b,c){return J.l(a).cK(a,b,c)},
mg:function(a,b,c){return J.l(a).cL(a,b,c)},
k4:function(a,b,c){return J.l(a).cM(a,b,c)},
k5:function(a,b,c){return J.l(a).cN(a,b,c)},
k6:function(a,b,c){return J.l(a).cO(a,b,c)},
k7:function(a,b,c,d){return J.l(a).cP(a,b,c,d)},
k8:function(a,b,c,d){return J.l(a).cQ(a,b,c,d)},
mh:function(a,b){return J.l(a).cS(a,b)},
mi:function(a,b,c){return J.l(a).fe(a,b,c)},
k9:function(a,b,c,d,e,f,g){return J.l(a).cU(a,b,c,d,e,f,g)},
mj:function(a,b,c,d,e){return J.l(a).cV(a,b,c,d,e)},
a:function a(){},
eZ:function eZ(){},
f_:function f_(){},
bM:function bM(){},
fC:function fC(){},
b3:function b3(){},
aY:function aY(){},
aW:function aW(a){this.$ti=a},
jy:function jy(a){this.$ti=a},
e4:function e4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bj:function bj(){},
dk:function dk(){},
dj:function dj(){},
aX:function aX(){}},P={
n9:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.nv()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.bw(new P.hJ(t),1)).observe(s,{childList:true})
return new P.hI(t,s,r)}else if(self.setImmediate!=null)return P.nw()
return P.nx()},
na:function(a){++u.globalState.f.b
self.scheduleImmediate(H.bw(new P.hK(a),0))},
nb:function(a){++u.globalState.f.b
self.setImmediate(H.bw(new P.hL(a),0))},
nc:function(a){P.jI(C.y,a)},
nq:function(a,b){if(H.bx(a,{func:1,args:[P.aJ,P.aJ]})){b.toString
return a}else{b.toString
return a}},
mD:function(a,b,c){var t
if(a==null)a=new P.bW()
t=$.x
if(t!==C.d)t.toString
t=new P.O(0,t,null,[c])
t.dR(a,b)
return t},
mE:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.O(0,$.x,null,[P.c])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.eO(t,!1,b,s)
try{for(m=0,l=0;m<3;++m){q=a[m]
p=l
q.bk(new P.eN(t,!1,b,s,p),r)
l=++t.b}if(l===0){l=new P.O(0,$.x,null,[null])
l.bK(C.C)
return l}k=new Array(l)
k.fixed$length=Array
t.a=k}catch(j){o=H.R(j)
n=H.ap(j)
if(t.b===0||!1)return P.mD(o,n,null)
else{t.c=o
t.d=n}}return s},
nm:function(a,b,c){$.x.toString
a.U(b,c)},
ne:function(a,b){var t=new P.O(0,$.x,null,[b])
H.b(!0)
t.a=4
t.c=a
return t},
l3:function(a,b){var t,s,r
H.b(b.a<4)
H.b(!(a instanceof P.O))
H.b(b.a===0)
b.a=1
try{a.bk(new P.i4(b),new P.i5(b))}catch(r){t=H.R(r)
s=H.ap(r)
P.nX(new P.i6(b,t,s))}},
i3:function(a,b){var t,s,r,q
H.b(b.a<=1)
for(;t=a.a,s=t===2,s;){H.b(s)
a=a.c}s=b.a
if(t>=4){H.b(s<4)
r=b.c
b.c=null
q=b.al(r)
H.b(b.a<4)
H.b(a.a>=4)
b.a=a.a
b.c=a.c
P.br(b,q)}else{q=b.c
H.b(s<=1)
b.a=2
b.c=a
a.bX(q)}},
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
P.iP(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
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
P.iP(null,null,p,o,s)
return}s=$.x
if(s==null?l!=null:s!==l){H.b(l!=null)
s=$.x
H.b(l==null?s!=null:l!==s)
j=$.x
$.x=l
i=j}else i=null
s=b.c
if(s===8)new P.ib(t,r,q,b).$0()
else if(p){if((s&1)!==0)new P.ia(r,b,m).$0()}else if((s&2)!==0)new P.i9(t,r,b).$0()
if(i!=null){H.b(!0)
$.x=i}s=r.b
if(!!J.v(s).$isaU){if(s.a>=4){H.b(o.a<4)
h=o.c
o.c=null
b=o.al(h)
H.b(o.a<4)
H.b(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.i3(s,o)
return}}g=b.b
H.b(g.a<4)
h=g.c
g.c=null
b=g.al(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.b(!o)
g.a=4
g.c=p}else{H.b(!o)
g.a=8
g.c=p}t.a=g
s=g}},
np:function(){var t,s
for(;t=$.bt,t!=null;){$.ce=null
s=t.b
$.bt=s
if(s==null)$.cd=null
t.a.$0()}},
nt:function(){$.jN=!0
try{P.np()}finally{$.ce=null
$.jN=!1
if($.bt!=null)$.$get$jK().$1(P.lf())}},
la:function(a){var t=new P.dO(a,null)
if($.bt==null){$.cd=t
$.bt=t
if(!$.jN)$.$get$jK().$1(P.lf())}else{$.cd.b=t
$.cd=t}},
ns:function(a){var t,s,r
t=$.bt
if(t==null){P.la(a)
$.ce=$.cd
return}s=new P.dO(a,null)
r=$.ce
if(r==null){s.b=t
$.ce=s
$.bt=s}else{s.b=r.b
r.b=s
$.ce=s
if(s.b==null)$.cd=s}},
nX:function(a){var t=$.x
if(C.d===t){P.bu(null,null,C.d,a)
return}t.toString
P.bu(null,null,t,t.b9(a))},
nk:function(a,b,c){var t=a.er(0)
if(!!J.v(t).$isaU&&t!==$.$get$ky())t.ff(new P.iN(b,c))
else b.ai(c)},
n5:function(a,b){var t=$.x
if(t===C.d){t.toString
return P.jI(a,b)}return P.jI(a,t.b9(b))},
jI:function(a,b){var t=C.b.L(a.a,1000)
return H.n4(t<0?0:t,b)},
jJ:function(a){var t,s
H.b(a!=null)
t=$.x
H.b(a==null?t!=null:a!==t)
s=$.x
$.x=a
return s},
iP:function(a,b,c,d,e){var t={}
t.a=d
P.ns(new P.iQ(t,e))},
l8:function(a,b,c,d){var t,s
if($.x===c)return d.$0()
t=P.jJ(c)
try{s=d.$0()
return s}finally{s=t
H.b(s!=null)
$.x=s}},
l9:function(a,b,c,d,e){var t,s
if($.x===c)return d.$1(e)
t=P.jJ(c)
try{s=d.$1(e)
return s}finally{s=t
H.b(s!=null)
$.x=s}},
nr:function(a,b,c,d,e,f){var t,s
if($.x===c)return d.$2(e,f)
t=P.jJ(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.b(s!=null)
$.x=s}},
bu:function(a,b,c,d){var t=C.d!==c
if(t)d=!(!t||!1)?c.b9(d):c.eo(d)
P.la(d)},
hJ:function hJ(a){this.a=a},
hI:function hI(a,b,c){this.a=a
this.b=b
this.c=c},
hK:function hK(a){this.a=a},
hL:function hL(a){this.a=a},
eO:function eO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eN:function eN(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hP:function hP(){},
hH:function hH(a,b){this.a=a
this.$ti=b},
iF:function iF(a,b){this.a=a
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
i0:function i0(a,b){this.a=a
this.b=b},
i8:function i8(a,b){this.a=a
this.b=b},
i4:function i4(a){this.a=a},
i5:function i5(a){this.a=a},
i6:function i6(a,b,c){this.a=a
this.b=b
this.c=c},
i2:function i2(a,b){this.a=a
this.b=b},
i7:function i7(a,b){this.a=a
this.b=b},
i1:function i1(a,b,c){this.a=a
this.b=b
this.c=c},
ib:function ib(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ic:function ic(a){this.a=a},
ia:function ia(a,b,c){this.a=a
this.b=b
this.c=c},
i9:function i9(a,b,c){this.a=a
this.b=b
this.c=c},
dO:function dO(a,b){this.a=a
this.b=b},
c0:function c0(){},
h8:function h8(a){this.a=a},
h9:function h9(a,b){this.a=a
this.b=b},
h6:function h6(a,b,c){this.a=a
this.b=b
this.c=c},
h7:function h7(a){this.a=a},
h5:function h5(){},
iN:function iN(a,b){this.a=a
this.b=b},
ba:function ba(a,b){this.a=a
this.b=b},
iM:function iM(){},
iQ:function iQ(a,b){this.a=a
this.b=b},
ir:function ir(){},
it:function it(a,b){this.a=a
this.b=b},
is:function is(a,b){this.a=a
this.b=b},
iu:function iu(a,b){this.a=a
this.b=b},
kF:function(a,b){return new H.ak(0,null,null,null,null,null,0,[a,b])},
G:function(){return new H.ak(0,null,null,null,null,null,0,[null,null])},
b_:function(a){return H.nF(a,new H.ak(0,null,null,null,null,null,0,[null,null]))},
ca:function(a,b){return new P.dQ(0,null,null,null,null,null,0,[a,b])},
ni:function(){var t=Object.create(null)
H.b(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
mM:function(a,b,c){var t,s
if(P.jO(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$cf()
C.a.i(s,a)
try{P.no(a,t)}finally{H.b(C.a.gaJ(s)===a)
s.pop()}s=P.kM(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eY:function(a,b,c){var t,s,r
if(P.jO(a))return b+"..."+c
t=new P.c1(b)
s=$.$get$cf()
C.a.i(s,a)
try{r=t
r.a=P.kM(r.ga8(),a,", ")}finally{H.b(C.a.gaJ(s)===a)
s.pop()}s=t
s.a=s.ga8()+c
s=t.ga8()
return s.charCodeAt(0)==0?s:s},
jO:function(a){var t,s
for(t=0;s=$.$get$cf(),t<s.length;++t)if(a===s[t])return!0
return!1},
no:function(a,b){var t,s,r,q,p,o,n,m,l,k
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
H.b(r<100)
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
al:function(a,b,c,d){return new P.ij(0,null,null,null,null,null,0,[d])},
jC:function(a,b){var t,s
t=P.al(null,null,null,b)
for(s=J.bA(a);s.q();)t.i(0,s.gt())
return t},
mP:function(a){var t,s,r
t={}
if(P.jO(a))return"{...}"
s=new P.c1("")
try{C.a.i($.$get$cf(),a)
r=s
r.a=r.ga8()+"{"
t.a=!0
a.aG(0,new P.fa(t,s))
t=s
t.a=t.ga8()+"}"}finally{t=$.$get$cf()
H.b(C.a.gaJ(t)===a)
t.pop()}t=s.ga8()
return t.charCodeAt(0)==0?t:t},
jD:function(a,b){var t=new P.f6(null,0,0,0,[b])
t.dw(a,b)
return t},
dQ:function dQ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
ij:function ij(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
ik:function ik(a,b,c){this.a=a
this.b=b
this.c=c},
c9:function c9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ig:function ig(){},
dl:function dl(){},
y:function y(){},
fa:function fa(a,b){this.a=a
this.b=b},
f6:function f6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
il:function il(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fV:function fV(){},
fU:function fU(){},
bX:function bX(){},
kM:function(a,b,c){var t=J.bA(b)
if(!t.q())return a
if(c.length===0){do a+=H.i(t.gt())
while(t.q())}else{a+=H.i(t.gt())
for(;t.q();)a=a+c+H.i(t.gt())}return a},
mq:function(a,b){return J.lK(a,b)},
mt:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.i(t)
if(t>=10)return s+"00"+H.i(t)
return s+"000"+H.i(t)},
mu:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cr:function(a){if(a>=10)return""+a
return"0"+a},
mw:function(a,b,c,d,e,f){return new P.aE(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
jw:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aD(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mz(a)},
mz:function(a){var t=J.v(a)
if(!!t.$isbb)return t.k(a)
return H.fI(a)},
e3:function(a){return new P.ai(!1,null,null,a)},
ka:function(a,b,c){return new P.ai(!0,a,b,c)},
mk:function(a){return new P.ai(!1,null,a,"Must not be null")},
fJ:function(a,b,c){return new P.dC(null,null,!0,a,b,"Value not in range")},
b1:function(a,b,c,d,e){return new P.dC(b,c,!0,a,d,"Invalid value")},
kK:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.b1(a,0,c,"start",f))
if(a>b||b>c)throw H.e(P.b1(b,a,c,"end",f))
return b},
D:function(a,b,c,d,e){var t=e!=null?e:J.e_(b)
return new P.eU(b,t,!0,a,c,"Index out of range")},
cx:function(a){return new P.i_(a)},
kG:function(a,b,c){var t,s
t=H.F([],[c])
for(s=J.bA(a);s.q();)C.a.i(t,s.gt())
if(b)return t
t.fixed$length=Array
return t},
aq:function(a){H.jc(H.i(a))},
aB:function aB(){},
M:function M(){},
bd:function bd(a,b){this.a=a
this.b=b},
Q:function Q(){},
aE:function aE(a){this.a=a},
ek:function ek(){},
el:function el(){},
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
eU:function eU(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
w:function w(a){this.a=a},
dM:function dM(a){this.a=a},
aw:function aw(a){this.a=a},
a5:function a5(a){this.a=a},
dG:function dG(){},
ec:function ec(a){this.a=a},
i_:function i_(a){this.a=a},
en:function en(a,b,c){this.a=a
this.b=b
this.$ti=c},
o:function o(){},
Z:function Z(){},
di:function di(){},
c:function c(){},
aH:function aH(){},
aJ:function aJ(){},
Y:function Y(){},
p:function p(){},
c_:function c_(){},
u:function u(){},
c1:function c1(a){this.a=a},
lh:function(a){return a},
iT:function(a){var t,s,r,q,p
if(a==null)return
t=P.G()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.E)(s),++q){p=s[q]
t.j(0,p,a[p])}return t},
nC:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.lV(a,new P.iS(t))
return t},
kt:function(){var t=$.ks
if(t==null){t=J.jn(window.navigator.userAgent,"Opera",0)
$.ks=t}return t},
mv:function(){var t,s
t=$.kp
if(t!=null)return t
s=$.kq
if(s==null){s=J.jn(window.navigator.userAgent,"Firefox",0)
$.kq=s}if(s)t="-moz-"
else{s=$.kr
if(s==null){s=!P.kt()&&J.jn(window.navigator.userAgent,"Trident/",0)
$.kr=s}if(s)t="-ms-"
else t=P.kt()?"-o-":"-webkit-"}$.kp=t
return t},
iS:function iS(a){this.a=a},
o_:function(a){return Math.sqrt(a)},
ii:function ii(){},
iq:function iq(){},
N:function N(){},
e0:function e0(){},
aQ:function aQ(){},
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
eF:function eF(){},
eI:function eI(){},
eK:function eK(){},
aj:function aj(){},
aG:function aG(){},
eR:function eR(){},
au:function au(){},
f2:function f2(){},
fb:function fb(){},
fc:function fc(){},
av:function av(){},
fs:function fs(){},
fz:function fz(){},
fE:function fE(){},
fF:function fF(){},
fK:function fK(){},
fL:function fL(){},
bZ:function bZ(){},
ha:function ha(){},
L:function L(){},
hb:function hb(){},
hc:function hc(){},
dI:function dI(){},
hg:function hg(){},
c3:function c3(){},
ax:function ax(){},
hq:function hq(){},
hx:function hx(){},
hz:function hz(){},
hA:function hA(){},
c7:function c7(){},
iv:function iv(){},
iw:function iw(){},
ix:function ix(){},
cG:function cG(){},
cE:function cE(){},
cL:function cL(){},
cP:function cP(){},
d_:function d_(){},
d7:function d7(){},
d3:function d3(){},
d5:function d5(){},
e5:function e5(){},
fP:function fP(){},
fQ:function fQ(){},
iJ:function iJ(){},
h0:function h0(){},
cF:function cF(){},
d1:function d1(){}},W={
mx:function(a,b,c){var t,s
t=document.body
s=(t&&C.o).P(t,a,b,c)
s.toString
t=new H.dN(new W.V(s),new W.iR(),[W.t])
return t.ga7(t)},
my:function(a){return"wheel"},
bD:function(a){var t,s,r
t="element tag unavailable"
try{s=J.lZ(a)
if(typeof s==="string")t=a.tagName}catch(r){H.R(r)}return t},
nd:function(a,b){return document.createElement(a)},
b9:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
l6:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
an:function(a,b,c,d,e){var t=c==null?null:W.lb(new W.hZ(c))
t=new W.hY(0,a,b,t,!1,[e])
t.dL(a,b,c,!1,e)
return t},
l4:function(a){var t,s
t=document.createElement("a")
s=new W.iy(t,window.location)
s=new W.c8(s)
s.dM(a)
return s},
ng:function(a,b,c,d){return!0},
nh:function(a,b,c,d){var t,s,r,q,p
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
l7:function(){var t=P.u
t=new W.iG(P.jC(C.t,t),P.al(null,null,null,t),P.al(null,null,null,t),P.al(null,null,null,t),null)
t.dO(null,new H.bN(C.t,new W.iH(),[H.aC(C.t,0),null]),["TEMPLATE"],null)
return t},
lb:function(a){var t=$.x
if(t===C.d)return a
return t.ep(a)},
m:function m(){},
e1:function e1(){},
e2:function e2(){},
a4:function a4(){},
e6:function e6(){},
co:function co(){},
aR:function aR(){},
aS:function aS(){},
cp:function cp(){},
cq:function cq(){},
aT:function aT(){},
ea:function ea(){},
B:function B(){},
bc:function bc(){},
eb:function eb(){},
ed:function ed(){},
ee:function ee(){},
cs:function cs(){},
bC:function bC(){},
ct:function ct(){},
ef:function ef(){},
cu:function cu(){},
eg:function eg(){},
cv:function cv(){},
cw:function cw(){},
eh:function eh(){},
ei:function ei(){},
a6:function a6(){},
iR:function iR(){},
k:function k(){},
j:function j(){},
a7:function a7(){},
eG:function eG(){},
eH:function eH(){},
eL:function eL(){},
a8:function a8(){},
cB:function cB(){},
eP:function eP(){},
bK:function bK(){},
cC:function cC(){},
eQ:function eQ(){},
bL:function bL(){},
bg:function bg(){},
bh:function bh(){},
bi:function bi(){},
eV:function eV(){},
aZ:function aZ(){},
f8:function f8(){},
bO:function bO(){},
fd:function fd(){},
fe:function fe(){},
bP:function bP(){},
aa:function aa(){},
ff:function ff(){},
S:function S(){},
fp:function fp(){},
V:function V(a){this.a=a},
t:function t(){},
dw:function dw(){},
bV:function bV(){},
fy:function fy(){},
fB:function fB(){},
ab:function ab(){},
fD:function fD(){},
fG:function fG(){},
fH:function fH(){},
dB:function dB(){},
fR:function fR(){},
dE:function dE(){},
fT:function fT(){},
fX:function fX(){},
ac:function ac(){},
fY:function fY(){},
ad:function ad(){},
h_:function h_(){},
ae:function ae(){},
h4:function h4(){},
a_:function a_(){},
am:function am(){},
dH:function dH(){},
hd:function hd(){},
he:function he(){},
c2:function c2(){},
af:function af(){},
a0:function a0(){},
hh:function hh(){},
hi:function hi(){},
hk:function hk(){},
ag:function ag(){},
b2:function b2(){},
ho:function ho(){},
hp:function hp(){},
bp:function bp(){},
hr:function hr(){},
dK:function dK(){},
aL:function aL(){},
hw:function hw(){},
bq:function bq(){},
hy:function hy(){},
hB:function hB(){},
hC:function hC(){},
b4:function b4(){},
c5:function c5(){},
hE:function hE(a){this.a=a},
hF:function hF(){},
b5:function b5(){},
hO:function hO(){},
dP:function dP(){},
hQ:function hQ(){},
hR:function hR(){},
hS:function hS(){},
id:function id(){},
ie:function ie(){},
dR:function dR(){},
iz:function iz(){},
iC:function iC(){},
iD:function iD(){},
iK:function iK(){},
iL:function iL(){},
hM:function hM(){},
hT:function hT(a){this.a=a},
hX:function hX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hU:function hU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hY:function hY(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
hZ:function hZ(a){this.a=a},
c8:function c8(a){this.a=a},
C:function C(){},
dy:function dy(a){this.a=a},
fr:function fr(a){this.a=a},
fq:function fq(a,b,c){this.a=a
this.b=b
this.c=c},
cb:function cb(){},
iA:function iA(){},
iB:function iB(){},
iG:function iG(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iH:function iH(){},
iE:function iE(){},
cz:function cz(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
dx:function dx(){},
iy:function iy(a,b){this.a=a
this.b=b},
dT:function dT(a){this.a=a},
iI:function iI(a){this.a=a},
bE:function bE(){},
bF:function bF(){},
bG:function bG(){},
bH:function bH(){},
bI:function bI(){},
bJ:function bJ(){},
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
nY:function(a){var t,s
t=document
s=W.aZ
W.an(t,"keydown",new B.je(),!1,s)
W.an(t,"keyup",new B.jf(),!1,s)
if(!$.nZ)W.an(t,"mousemove",new B.jg(),!1,W.S)
s=W.S
W.an(t,"mousedown",new B.jh(),!1,s)
W.an(t,"mouseup",new B.ji(),!1,s)},
mR:function(a,b,c,d){var t,s,r,q
t=new Float32Array(H.f(3))
s=$.$get$iU()
r=$.$get$ch()
q=new T.H(new Float32Array(H.f(16)))
q.F()
q=new B.ft(a,b,c,0,new T.h(t),-0.02,s,r,q,new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),"camera:orbit",!1,!0)
q.dA(a,b,c,d)
return q},
je:function je(){},
jf:function jf(){},
jg:function jg(){},
jh:function jh(){},
ji:function ji(){},
ft:function ft(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
fu:function fu(a){this.a=a},
fv:function fv(a){this.a=a},
fw:function fw(){},
fx:function fx(a){this.a=a},
mr:function(d1,d2,d3,d4,d5,d6,d7,d8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0
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
c8=new G.aV(!1,[],[],[],P.G())
c8.T("aTexUV")
c8.T("aNormal")
c8.dk(6)
c8.ag([r,q,p,o,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,s,a5])
c8.aw("aTexUV",[new T.r(n),new T.r(t),new T.r(a6),new T.r(a7),new T.r(a8),new T.r(a9),new T.r(b0),new T.r(b1),new T.r(b2),new T.r(b3),new T.r(b4),new T.r(b5),new T.r(b6),new T.r(b7),new T.r(b8),new T.r(b9),new T.r(c0),new T.r(c1),new T.r(c2),new T.r(c3),new T.r(c4),new T.r(c5),new T.r(c6),new T.r(c7)])
for(c9=0;t=$.$get$l2(),c9<6;++c9){d0=t[c9]
c8.ax("aNormal",[d0,d0,d0,d0])}return c8},
ms:function(a1,a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
C.a.i(r,new T.r(p))
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
C.a.i(r,new T.r(o))
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
C.a.i(r,new T.r(k))
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
C.a.i(r,new T.r(o))
o=new Float32Array(3)
o[0]=0
o[1]=-1
o[2]=0
C.a.i(q,new T.h(o))}p=2*a4
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
f=new T.h(new Float32Array(3))
G.mQ(i,h,g,new T.h(o),f)
C.a.i(q,f)
C.a.i(q,f)}H.b(s.length===2+4*a4)
p=[]
o=[]
e=new G.aV(!1,p,o,[],P.G())
e.T("aTexUV")
e.ag(s)
e.aw("aTexUV",r)
e.T("aNormal")
e.ax("aNormal",q)
for(d=a4*2,n=0;n<a4;n=b){c=n*2+2
h=c+1
b=n+1
a=(b===a4?0:b)*2+2
a0=a+1
H.b(!0)
C.a.i(p,new G.z(0,c,a))
H.b(!0)
C.a.i(p,new G.z(1,a0,h))
H.b(!0)
C.a.i(o,new G.bf(d+a,d+c,d+h,d+a0))}return e},
mF:function(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
t=[]
s=[]
C.a.M(t,$.$get$kz())
C.a.M(s,$.$get$kA())
for(r=0;r<a3;++r,t=q){q=[]
for(p=t.length,o=0;o<t.length;t.length===p||(0,H.E)(t),++o){n=t[o]
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
C.a.i(q,new G.z(m,f,d))
C.a.i(q,new G.z(l,e,f))
C.a.i(q,new G.z(j,d,e))
C.a.i(q,new G.z(f,e,d))}}c=new G.aV(!1,[],[],[],P.G())
c.T("aTexUV")
c.T("aNormal")
for(p=t.length,o=0;o<t.length;t.length===p||(0,H.E)(t),++o){n=t[o]
b=s[n.a]
H.b(Math.sqrt(b.gR())<1.01&&Math.sqrt(b.gR())>0.99)
a=s[n.b]
H.b(Math.sqrt(a.gR())<1.01&&Math.sqrt(a.gR())>0.99)
a0=s[n.c]
H.b(Math.sqrt(a0.gR())<1.01&&Math.sqrt(a0.gR())>0.99)
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
c.ax("aNormal",[b,a,a0])
m=new T.h(new Float32Array(3))
m.v(b)
m.a2(0,a4)
l=new T.h(new Float32Array(3))
l.v(a)
l.a2(0,a4)
a2=new T.h(new Float32Array(3))
a2.v(a0)
a2.a2(0,a4)
c.dl([m,l,a2])
c.aw("aTexUV",[new T.r(j),new T.r(h),new T.r(a1)])}return c},
n1:function(a,b,c,d,e,f,a0,a1,a2,a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=a1+1
s=a0+1
r=B.mS(new B.fW(f,d,e,c),0,6.283185307179586,s,!1,0.001)
H.b(r.length===2*s)
q=B.n6(r,a1,a2,!1)
H.b(q.length===s)
H.b(q[0].length===2*t)
p=[]
o=new G.aV(!1,[],[],p,P.G())
for(n=q.length,m=0;m<q.length;q.length===n||(0,H.E)(q),++m){l=q[m]
for(k=0;k<l.length;k+=2){j=l[k]
j.toString
i=new T.h(new Float32Array(3))
i.v(j)
C.a.i(p,i)}}H.b(p.length===t*s)
o.dt(t,s,!1)
o.du(t,s)
n=o.e
H.b(n.h(0,"aTexUV").length===p.length)
o.T("aNormal")
for(j=q.length,m=0;m<q.length;q.length===j||(0,H.E)(q),++m){l=q[m]
for(k=0;k<l.length;k+=2){i=l[k+1]
h=n.h(0,"aNormal")
i.toString
g=new T.h(new Float32Array(3))
g.v(i);(h&&C.a).i(h,g)}}H.b(n.h(0,"aNormal").length===p.length)
return o},
n6:function(a1,a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
t=[]
s=new Float32Array(H.f(3))
r=new T.h(s)
q=new Float32Array(H.f(3))
p=new T.h(q)
o=new Float32Array(H.f(3))
n=new T.h(o)
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
o[2]=e*d}p.C(0)
n.C(0)
for(c=0;c<m;++c){b=c/a2*2*3.141592653589793
a=a3*Math.cos(b)
a0=a3*Math.sin(b)
r.v(k)
r.aF(p,a)
r.aF(n,a0)
h=new T.h(new Float32Array(3))
h.v(r)
C.a.i(i,h)
s[2]=0
s[1]=0
s[0]=0
r.aF(p,a)
r.aF(n,a0)
r.C(0)
h=new T.h(new Float32Array(3))
h.v(r)
C.a.i(i,h)}}return t},
mS:function(a,b,c,d,e,f){var t,s,r,q,p,o,n
H.b(d>=2)
t=[]
s=new T.h(new Float32Array(H.f(3)))
r=new T.h(new Float32Array(H.f(3)))
for(q=(c-b)/(d-1),p=0;p<d;++p){o=q*p+b
a.$2(o,s)
a.$2(o+f,r)
r.av(s)
n=new T.h(new Float32Array(3))
n.v(s)
C.a.i(t,n)
n=new T.h(new Float32Array(3))
n.v(r)
C.a.i(t,n)}return t},
fW:function fW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},G={
n8:function(a){var t,s,r
t=a.split("\n")
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.i(t[s])}return C.a.aa(t,"\n")},
l1:function(a,b,c){var t,s,r,q
t=J.l(a)
s=t.cj(a,b)
t.bv(a,s,c)
t.ce(a,s)
r=t.br(a,s,35713)
if(r!=null&&!r){q=t.bq(a,s)
P.aq("E:Compilation failed:")
P.aq("E:"+G.n8(c))
P.aq("E:Failure:")
P.aq(C.i.a5("E:",q))
throw H.e(q)}return s},
mQ:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
d.v(b)
d.av(a)
e.v(c)
e.av(a)
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
t.dz(a)
return t},
kx:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.jq(a[s])
b[t+1]=J.jr(a[s])
b[t+2]=J.k1(a[s])}return b},
mB:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.jq(a[s])
b[t+1]=J.jr(a[s])}return b},
mC:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.jq(a[s])
b[t+1]=J.jr(a[s])
b[t+2]=J.k1(a[s])
b[t+3]=J.m_(a[s])}return b},
mA:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.by(a[s],0)
b[t+1]=J.by(a[s],1)
b[t+2]=J.by(a[s],2)
b[t+3]=J.by(a[s],3)}return b},
nf:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
for(t=a.e,s=t.gI(t),s=s.gB(s),r=b.x,q=[[P.c,P.o]],p=[P.Q],o=[T.aM],n=[T.h],m=[T.r];s.q();){l=s.gt()
if(!r.H(0,l)){k="Dropping unnecessary attribute: "+H.i(l)
if($.lk>0)H.jc("I: "+k)
continue}j=t.h(0,l)
switch($.$get$W().h(0,l).a){case"vec2":b.af(l,G.mB(H.dX(j,"$isc",m,"$asc"),null),2)
break
case"vec3":b.af(l,G.kx(H.dX(j,"$isc",n,"$asc"),null),3)
break
case"vec4":b.af(l,G.mC(H.dX(j,"$isc",o,"$asc"),null),4)
break
case"float":b.af(l,new Float32Array(H.iO(H.dX(j,"$isc",p,"$asc"))),1)
break
case"uvec4":b.af(l,G.mA(H.dX(j,"$isc",q,"$asc"),null),4)
break
default:if(H.aA(!1))H.aN("unknown type for "+H.i(l)+" ["+J.lY(j[0]).k(0)+"] ["+new H.aK(H.iY(j),null).k(0)+"] "+H.i(j))}}},
cA:function(a,b,c){var t,s,r,q,p
t=b.d
s=J.k0(t.a)
r=new G.dq(t,s,4,P.G(),b.e.x,null,0,-1,null,null,P.G(),"meshdata:"+a,!1,!0)
r.ag(G.kx(c.d,null))
q=c.ds()
r.y=J.jo(t.a)
H.b(r.ch!=null)
p=r.ch.length
if(p<768){r.saX(new Uint8Array(H.iO(q)))
r.Q=5121}else if(p<196608){r.saX(new Uint16Array(H.iO(q)))
r.Q=5123}else{r.saX(new Uint32Array(H.iO(q)))
r.Q=5125}J.dZ(t.a,s)
s=r.y
q=r.cx
p=J.v(q)
H.b(!!p.$iskY||!!p.$iskZ||!!p.$isl_)
J.dY(t.a,34963,s)
J.k_(t.a,34963,q,35048)
G.nf(c,r)
return r},
kL:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.al(null,null,null,P.u)
s=c.b
r=d.b
q=c.f
p=J.lL(b.a)
o=G.l1(b.a,35633,s)
J.jZ(b.a,p,o)
n=G.l1(b.a,35632,r)
J.jZ(b.a,p,n)
if(q.length>0)J.md(b.a,p,q,35980)
J.m4(b.a,p)
if(!J.m3(b.a,p,35714))H.K(J.m2(b.a,p))
t=new G.fO(b,c,d,p,P.jC(c.c,null),P.G(),P.G(),t,null,a,!1,!0)
t.dC(a,b,c,d)
return t},
eT:function(a,b,c,d,e){var t=new G.eS(c,b,J.lM(a.a),e,a,new G.hj(!1,!1,!1,!0,1,9729,9729))
t.dv(a,b,c,d,e)
return t},
fg:function fg(){},
dL:function dL(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
e7:function e7(){},
e9:function e9(a,b){this.a=a
this.b=b},
eM:function eM(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
z:function z(a,b,c){this.a=a
this.b=b
this.c=c},
bf:function bf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aV:function aV(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dJ:function dJ(a,b,c){this.a=a
this.b=b
this.c=c},
bo:function bo(a,b,c){this.a=a
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
fA:function fA(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
ej:function ej(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fO:function fO(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
A:function A(a,b,c){this.a=a
this.b=b
this.c=c},
bn:function bn(a,b,c,d,e,f,g,h){var _=this
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
c4:function c4(){},
eS:function eS(a,b,c,d,e,f){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f}},R={
n7:function(a,b,c){var t,s,r,q
t="stars_"+b
s=b*3
r=new Float32Array(H.f(s))
for(q=0;q<s;++q)r[q]=($.$get$l0().eZ()-0.5)*c
s=a.d
s=new G.dq(s,J.k0(s.a),0,P.G(),a.e.x,null,0,-1,null,null,P.G(),"meshdata:"+t,!1,!0)
s.ag(r)
return s},
dD:function dD(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
_.c=a5},
h2:function h2(){},
h3:function h3(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},A={
li:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=b.dx
t.v(c)
s=b.d
t.cz(0,s)
r=b.cx
J.aD(b)
q=C.a.gaJ(e)
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
p.ex(new T.a9(o))
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
a.dr(r,e,d)
e.pop()
for(s=b.cy,r=s.length,l=0;l<s.length;s.length===r||(0,H.E)(s),++l)A.li(a,s[l],t,d,e)},
aI:function aI(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
fN:function fN(){},
dV:function(a){var t,s
t=C.Y.eM(a,0,new A.iZ())
s=536870911&t+(C.b.cW(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
iZ:function iZ(){}},D={
jE:function(a){var t,s,r
t=new P.O(0,$.x,null,[null])
s=document.createElement("img")
r=new W.hU(s,"load",!1,[W.k])
r.gbe(r).aK(new D.f7(new P.hH(t,[null]),s))
s.src=a
return t},
f7:function f7(a,b){this.a=a
this.b=b}},T={
J:function(a,b,c){var t=new Float32Array(3)
t[0]=a
t[1]=b
t[2]=c
return new T.h(t)},
a9:function a9(a){this.a=a},
H:function H(a){this.a=a},
r:function r(a){this.a=a},
h:function h(a){this.a=a},
aM:function aM(a){this.a=a}},V={
nS:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
t={}
s=document
r=new R.h3(0,0,null,null,null,null)
r.dF(C.r.d_(s,"stats"),"blue","gray")
q=C.r.f0(s,"#webgl-canvas")
p=new G.e9(null,q)
o=(q&&C.w).bm(q,"webgl2",P.b_(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
p.a=o
if(o==null)H.K(P.cx('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
n="ChronosGL Config: "+J.aD(J.m0(o))
if($.lk>0)P.aq("I: "+n)
J.lJ(o,0,0,0,1)
J.cm(o,2929)
J.cm(o,2884)
m=B.mR(25,10,0,q)
o=new T.H(new Float32Array(H.f(16)))
o.F()
n=new T.H(new Float32Array(H.f(16)))
n.F()
l=new G.fA(m,50,1,0.1,1000,o,n,new T.H(new Float32Array(H.f(16))),P.G(),"perspective",!1,!0)
l.bF()
n=H.F([],[A.bY])
k=new R.dD(q,l,null,p,n,17664,0,0,0,0,"main",!1,!0)
k.dB("main",p,null)
k.cC(null)
W.an(window,"resize",k.gf4(),!1,W.k)
o=G.kL("textured",p,$.$get$ly(),$.$get$lx())
j=[]
H.b(!0)
C.a.i(n,new A.bY(o,[l],j,"objects",!1,!0))
i=G.jG("wood")
i.G("uColor",$.$get$kk())
h=G.jG("gradient")
h.G("uColor",$.$get$km())
g=G.jG("trans")
g.G("uColor",$.$get$kl())
g.d.j(0,"cBlendEquation",$.$get$kd())
f=G.cA("icosahedron-3",o,B.mF(3,1,!0))
e=new Float32Array(H.f(9))
d=new T.H(new Float32Array(H.f(16)))
d.F()
c=new T.H(new Float32Array(H.f(16)))
c.F()
b=new A.aI(i,f,[],new T.a9(e),d,c,new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),"sphere",!1,!0)
b.a6(0,0,0)
H.b(!0)
C.a.i(j,b)
c=G.cA("cube",o,B.mr(!0,1,0,1,0,1,1,1))
d=new Float32Array(H.f(9))
e=new T.H(new Float32Array(H.f(16)))
e.F()
f=new T.H(new Float32Array(H.f(16)))
f.F()
a=new A.aI(h,c,[],new T.a9(d),e,f,new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),"cube",!1,!0)
a.a6(-5,0,-5)
H.b(!0)
C.a.i(j,a)
f=G.cA("cylinder-32",o,B.ms(3,6,2,32,!0))
e=new Float32Array(H.f(9))
d=new T.H(new Float32Array(H.f(16)))
d.F()
c=new T.H(new Float32Array(H.f(16)))
c.F()
a0=new A.aI(g,f,[],new T.a9(e),d,c,new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),"cylinder",!1,!0)
a0.a6(5,0,-5)
H.b(!0)
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
a6=new G.aV(!1,[],[],[],P.G())
a6.T("aTexUV")
a6.dm([c,d,e,f])
a6.aw("aTexUV",[new T.r(a1),new T.r(a2),new T.r(a3),new T.r(a4)])
a6.T("aNormal")
a6.ax("aNormal",[a5,a5,a5,a5])
a4=G.cA("quad",o,a6)
a3=new Float32Array(H.f(9))
a2=new T.H(new Float32Array(H.f(16)))
a2.F()
a1=new T.H(new Float32Array(H.f(16)))
a1.F()
a7=new A.aI(g,a4,[],new T.a9(a3),a2,a1,new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),"quad",!1,!0)
a7.a6(-5,0,5)
H.b(!0)
C.a.i(j,a7)
o=G.cA("torusknot",o,B.n1(!0,!0,1,2,3,1,128,16,0.4,!1))
a1=new Float32Array(H.f(9))
a2=new T.H(new Float32Array(H.f(16)))
a2.F()
a3=new T.H(new Float32Array(H.f(16)))
a3.F()
a8=new A.aI(h,o,[],new T.a9(a1),a2,a3,new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),"torus",!1,!0)
a8.a6(5,0,5)
H.b(!0)
C.a.i(j,a8)
j=G.kL("stars",p,$.$get$lt(),$.$get$ls())
a3=[]
o=$.$get$kb()
a9=new G.dp(P.G(),"stars",!1,!0)
a9.G("cDepthTest",!0)
a9.G("cDepthWrite",!1)
a9.G("cBlendEquation",o)
a9.G("cStencilFunc",$.$get$jH())
b0=s.createElement("canvas")
b0.width=64
b0.height=64
b1=C.w.cZ(b0,"2d")
b2=(b1&&C.p).ci(b1,32,32,1,32,32,22);(b2&&C.m).aE(b2,0,"gray")
C.m.aE(b2,1,"black")
b1.fillStyle=b2
C.p.eL(b1,0,0,64,64)
b2=C.p.ci(b1,32,32,1,32,32,6);(b2&&C.m).aE(b2,0,"white")
C.m.aE(b2,1,"gray")
b1.globalAlpha=0.9
b1.fillStyle=b2
b1.arc(32,32,4,0,6.283185307179586,!1)
b1.fill("nonzero")
a9.G("uTexture",G.eT(j.d,"Utils::Particles",b0,null,3553))
a9.G("uPointSize",1000)
b3=R.n7(j,2000,100)
s=new Float32Array(H.f(9))
o=new T.H(new Float32Array(H.f(16)))
o.F()
f=new T.H(new Float32Array(H.f(16)))
f.F()
e=new Float32Array(H.f(3))
d=new Float32Array(H.f(3))
c=new Float32Array(H.f(3))
a1=new Float32Array(H.f(3))
H.b(!0)
C.a.i(a3,new A.aI(a9,b3,[],new T.a9(s),o,f,new T.h(e),new T.h(d),new T.h(c),new T.h(a1),b3.a,!1,!0))
H.b(!0)
C.a.i(n,new A.bY(j,[l],a3,"stars",!1,!0))
t.a=0
P.mE([D.jE("../gradient.jpg"),D.jE("../transparent.png"),D.jE("../wood.jpg")],null,!1).aK(new V.ja(p,i,h,g,new V.j9(t,r,m,k)))},
j9:function j9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ja:function ja(a,b,c,d,e){var _=this
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
gw:function(a){return H.b0(a)},
k:function(a){return H.fI(a)},
gD:function(a){return new H.aK(H.iY(a),null)}}
J.eZ.prototype={
k:function(a){return String(a)},
gw:function(a){return a?519018:218159},
gD:function(a){return C.as},
$isaB:1}
J.f_.prototype={
A:function(a,b){return null==b},
k:function(a){return"null"},
gw:function(a){return 0},
gD:function(a){return C.am}}
J.bM.prototype={
gw:function(a){return 0},
gD:function(a){return C.al},
k:function(a){return String(a)},
$iskE:1}
J.fC.prototype={}
J.b3.prototype={}
J.aY.prototype={
k:function(a){var t=a[$.$get$ko()]
return t==null?this.dh(a):J.aD(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isjx:1}
J.aW.prototype={
bb:function(a,b){if(!!a.immutable$list)throw H.e(new P.w(b))},
ba:function(a,b){if(!!a.fixed$length)throw H.e(new P.w(b))},
i:function(a,b){this.ba(a,"add")
a.push(b)},
M:function(a,b){var t,s,r,q,p
t=a.length
this.ba(a,"addAll")
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.E)(b),++r,t=p){q=b[r]
p=t+1
H.b(t===a.length||H.K(new P.a5(a)))
a.push(q)}},
cw:function(a,b){return new H.bN(a,b,[H.aC(a,0),null])},
aa:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.i(a[s])
return t.join(b)},
u:function(a,b){return this.h(a,b)},
gbe:function(a){if(a.length>0)return a[0]
throw H.e(H.dh())},
gaJ:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.e(H.dh())},
bu:function(a,b,c,d,e){var t,s
this.bb(a,"setRange")
P.kK(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.K(P.b1(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.e(H.mN())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=d[e+s]
else for(s=0;s<t;++s)a[b+s]=d[e+s]},
c4:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.e(new P.a5(a))}return!1},
dc:function(a,b){this.bb(a,"sort")
H.dF(a,0,a.length-1,P.nD())},
aP:function(a){return this.dc(a,null)},
E:function(a,b){var t
for(t=0;t<a.length;++t)if(J.I(a[t],b))return!0
return!1},
k:function(a){return P.eY(a,"[","]")},
gB:function(a){return new J.e4(a,a.length,0,null,[H.aC(a,0)])},
gw:function(a){return H.b0(a)},
gl:function(a){return a.length},
sl:function(a,b){this.ba(a,"set length")
if(b<0)throw H.e(P.b1(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.T(a,b))
if(b>=a.length||b<0)throw H.e(H.T(a,b))
return a[b]},
j:function(a,b,c){this.bb(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.T(a,b))
if(b>=a.length||b<0)throw H.e(H.T(a,b))
a[b]=c},
$isn:1,
$asn:function(){},
$isd:1,
$asd:null,
$isc:1,
$asc:null}
J.jy.prototype={}
J.e4.prototype={
gt:function(){return this.d},
q:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.e(H.E(t))
r=this.c
if(r>=s){this.sbG(null)
return!1}this.sbG(t[r]);++this.c
return!0},
sbG:function(a){this.d=a}}
J.bj.prototype={
W:function(a,b){var t
if(typeof b!=="number")throw H.e(H.X(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaH(b)
if(this.gaH(a)===t)return 0
if(this.gaH(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaH:function(a){return a===0?1/a<0:a<0},
es:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.e(new P.w(""+a+".ceil()"))},
ab:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(new P.w(""+a+".round()"))},
eu:function(a,b,c){if(this.W(b,c)>0)throw H.e(H.X(b))
if(this.W(a,b)<0)return b
if(this.W(a,c)>0)return c
return a},
fc:function(a,b){var t
if(b>20)throw H.e(P.b1(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gaH(a))return"-"+t
return t},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gw:function(a){return a&0x1FFFFFFF},
a5:function(a,b){if(typeof b!=="number")throw H.e(H.X(b))
return a+b},
ae:function(a,b){if(typeof b!=="number")throw H.e(H.X(b))
return a-b},
cX:function(a,b){if(typeof b!=="number")throw H.e(H.X(b))
return a/b},
J:function(a,b){if(typeof b!=="number")throw H.e(H.X(b))
return a*b},
aR:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.c0(a,b)},
L:function(a,b){return(a|0)===a?a/b|0:this.c0(a,b)},
c0:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.e(new P.w("Result of truncating division is "+H.i(t)+": "+H.i(a)+" ~/ "+b))},
b1:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
cW:function(a,b){if(typeof b!=="number")throw H.e(H.X(b))
return(a&b)>>>0},
dj:function(a,b){if(typeof b!=="number")throw H.e(H.X(b))
return(a^b)>>>0},
aO:function(a,b){if(typeof b!=="number")throw H.e(H.X(b))
return a<b},
au:function(a,b){if(typeof b!=="number")throw H.e(H.X(b))
return a>b},
cY:function(a,b){if(typeof b!=="number")throw H.e(H.X(b))
return a>=b},
gD:function(a){return C.av},
$isY:1}
J.dk.prototype={
gD:function(a){return C.au},
$isQ:1,
$iso:1,
$isY:1}
J.dj.prototype={
gD:function(a){return C.at},
$isQ:1,
$isY:1}
J.aX.prototype={
aT:function(a,b){if(b>=a.length)throw H.e(H.T(a,b))
return a.charCodeAt(b)},
a5:function(a,b){if(typeof b!=="string")throw H.e(P.ka(b,null,null))
return a+b},
dd:function(a,b,c){var t
if(c>a.length)throw H.e(P.b1(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bw:function(a,b){return this.dd(a,b,0)},
by:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.fJ(b,null,null))
if(b>c)throw H.e(P.fJ(b,null,null))
if(c>a.length)throw H.e(P.fJ(c,null,null))
return a.substring(b,c)},
de:function(a,b){return this.by(a,b,null)},
fb:function(a){return a.toLowerCase()},
ev:function(a,b,c){if(c>a.length)throw H.e(P.b1(c,0,a.length,null,null))
return H.o0(a,b,c)},
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
gD:function(a){return C.an},
gl:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.e(H.T(a,b))
return a[b]},
$isn:1,
$asn:function(){},
$isu:1}
H.d.prototype={$asd:null}
H.bk.prototype={
gB:function(a){return new H.dm(this,this.gl(this),0,null,[H.ah(this,"bk",0)])},
aM:function(a,b){return this.dg(0,b)},
fa:function(a,b){var t,s
t=H.F([],[H.ah(this,"bk",0)])
C.a.sl(t,this.gl(this))
for(s=0;s<this.gl(this);++s)t[s]=this.u(0,s)
return t},
f9:function(a){return this.fa(a,!0)}}
H.dm.prototype={
gt:function(){return this.d},
q:function(){var t,s,r,q
t=this.a
s=J.a2(t)
r=s.gl(t)
if(this.b!==r)throw H.e(new P.a5(t))
q=this.c
if(q>=r){this.saj(null)
return!1}this.saj(s.u(t,q));++this.c
return!0},
saj:function(a){this.d=a}}
H.dn.prototype={
gB:function(a){return new H.f9(null,J.bA(this.a),this.b,this.$ti)},
gl:function(a){return J.e_(this.a)},
$asZ:function(a,b){return[b]}}
H.em.prototype={$isd:1,
$asd:function(a,b){return[b]}}
H.f9.prototype={
q:function(){var t=this.b
if(t.q()){this.saj(this.c.$1(t.gt()))
return!0}this.saj(null)
return!1},
gt:function(){return this.a},
saj:function(a){this.a=a},
$asdi:function(a,b){return[b]}}
H.bN.prototype={
gl:function(a){return J.e_(this.a)},
u:function(a,b){return this.b.$1(J.lS(this.a,b))},
$asd:function(a,b){return[b]},
$asbk:function(a,b){return[b]},
$asZ:function(a,b){return[b]}}
H.dN.prototype={
gB:function(a){return new H.hD(J.bA(this.a),this.b,this.$ti)}}
H.hD.prototype={
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
H.io.prototype={
seV:function(a){this.z=a},
seX:function(a){this.ch=a}}
H.b7.prototype={
c3:function(a,b){if(!this.f.A(0,a))return
if(this.Q.i(0,b)&&!this.y)this.y=!0
this.b8()},
f3:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.ar(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.bV();++r.d}this.y=!1}this.b8()},
ei:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.v(a),s=0;r=this.ch,s<r.length;s+=2)if(t.A(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).i(r,a)
t=this.ch;(t&&C.a).i(t,b)},
f2:function(a){var t,s,r
if(this.ch==null)return
for(t=J.v(a),s=0;r=this.ch,s<r.length;s+=2)if(t.A(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.K(new P.w("removeRange"))
P.kK(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
d8:function(a,b){if(!this.r.A(0,a))return
this.db=b},
eP:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.K(0,c)
return}H.b(b===1)
t=this.cx
if(t==null){t=P.jD(null,null)
this.cx=t}t.Y(0,new H.ih(a,c))},
eO:function(a,b){var t
if(!this.r.A(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.aI()
return}H.b(b===1)
t=this.cx
if(t==null){t=P.jD(null,null)
this.cx=t}t.Y(0,this.geW())},
eQ:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.aq(a)
if(b!=null)P.aq(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.aD(a)
s[1]=b==null?null:b.k(0)
for(r=new P.c9(t,t.r,null,null,[null]),r.c=t.e;r.q();)r.d.K(0,s)},
an:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.R(o)
p=H.ap(o)
this.eQ(q,p)
if(this.db){this.aI()
if(this===u.globalState.e)throw o}}finally{this.cy=H.ny(r)
u.globalState.d=H.jS(t,"$isb7")
if(t!=null)$=t.geU()
if(this.cx!=null)for(;n=this.cx,!n.gaq(n);)this.cx.cB().$0()}return s},
cv:function(a){return this.b.h(0,a)},
bJ:function(a,b){var t=this.b
if(t.H(0,a))throw H.e(P.cx("Registry: ports must be registered only once."))
t.j(0,a,b)},
b8:function(){var t=this.b
if(t.gl(t)-this.c.a>0||this.y||!this.x)u.globalState.z.j(0,this.a,this)
else this.aI()},
aI:function(){var t,s,r
t=this.cx
if(t!=null)t.a_(0)
for(t=this.b,s=t.gcT(t),s=s.gB(s);s.q();)s.gt().dT()
t.a_(0)
this.c.a_(0)
u.globalState.z.ar(0,this.a)
this.dx.a_(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].K(0,t[r+1])
this.ch=null}},
geU:function(){return this.d},
gew:function(){return this.e}}
H.ih.prototype={
$0:function(){this.a.K(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.hV.prototype={
eD:function(){var t=this.a
if(t.b===t.c)return
return t.cB()},
cE:function(){var t,s,r
t=this.eD()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.H(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gaq(s)}else s=!1
else s=!1
else s=!1
if(s)H.K(P.cx("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gaq(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.b_(["command","close"])
r=new H.ao(!0,new P.dQ(0,null,null,null,null,null,0,[null,P.o])).N(r)
s.toString
self.postMessage(r)}return!1}t.f_()
return!0},
bZ:function(){if(self.window!=null)new H.hW(this).$0()
else for(;this.cE(););},
as:function(){var t,s,r,q,p
if(!u.globalState.x)this.bZ()
else try{this.bZ()}catch(r){t=H.R(r)
s=H.ap(r)
q=u.globalState.Q
p=P.b_(["command","error","msg",H.i(t)+"\n"+H.i(s)])
p=new H.ao(!0,P.ca(null,P.o)).N(p)
q.toString
self.postMessage(p)}}}
H.hW.prototype={
$0:function(){if(!this.a.cE())return
P.n5(C.y,this)},
$S:function(){return{func:1,v:true}}}
H.b8.prototype={
f_:function(){var t=this.a
if(t.y){C.a.i(t.z,this)
return}t.an(this.b)}}
H.im.prototype={}
H.eW.prototype={
$0:function(){H.mJ(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.eX.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(!this.d)this.a.$1(this.c)
else{s=this.a
if(H.bx(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.bx(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.b8()},
$S:function(){return{func:1,v:true}}}
H.hN.prototype={}
H.bs.prototype={
K:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.nl(b)
if(t.gew()===s){s=J.a2(r)
switch(s.h(r,0)){case"pause":t.c3(s.h(r,1),s.h(r,2))
break
case"resume":t.f3(s.h(r,1))
break
case"add-ondone":t.ei(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.f2(s.h(r,1))
break
case"set-errors-fatal":t.d8(s.h(r,1),s.h(r,2))
break
case"ping":t.eP(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.eO(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.i(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.ar(0,s)
break}return}u.globalState.f.a.Y(0,new H.b8(t,new H.ip(this,r),"receive"))},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bs){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gw:function(a){return this.b.a}}
H.ip.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dP(0,this.b)},
$S:function(){return{func:1}}}
H.cc.prototype={
K:function(a,b){var t,s,r
t=P.b_(["command","message","port",this,"msg",b])
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
gw:function(a){return C.b.dj((this.b<<16^this.a<<8)>>>0,this.c)}}
H.bm.prototype={
dT:function(){this.c=!0
this.b=null},
dP:function(a,b){if(this.c)return
this.b.$1(b)},
$isn_:1}
H.hl.prototype={
dG:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.Y(0,new H.b8(s,new H.hm(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.bw(new H.hn(this,b),0),a)}else{H.b(a>0)
throw H.e(new P.w("Timer greater than 0."))}}}
H.hm.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.hn.prototype={
$0:function(){this.a.c=null
H.j8()
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
t=J.v(a)
if(!!t.$isbQ)return["buffer",a]
if(!!t.$isbl)return["typed",a]
if(!!t.$isn)return this.d4(a)
if(!!t.$ismG){r=this.gd1()
q=t.gI(a)
q=H.jF(q,r,H.ah(q,"Z",0),null)
q=P.kG(q,!0,H.ah(q,"Z",0))
t=t.gcT(a)
t=H.jF(t,r,H.ah(t,"Z",0),null)
return["map",q,P.kG(t,!0,H.ah(t,"Z",0))]}if(!!t.$iskE)return this.d5(a)
if(!!t.$isa)this.cR(a)
if(!!t.$isn_)this.at(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isbs)return this.d6(a)
if(!!t.$iscc)return this.d7(a)
if(!!t.$isbb){p=a.$static_name
if(p==null)this.at(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isat)return["capability",a.a]
if(!(a instanceof P.p))this.cR(a)
return["dart",u.classIdExtractor(a),this.d3(u.classFieldsExtractor(a))]},
at:function(a,b){throw H.e(new P.w((b==null?"Can't transmit:":b)+" "+H.i(a)))},
cR:function(a){return this.at(a,null)},
d4:function(a){var t
H.b(typeof a!=="string")
t=this.d2(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.at(a,"Can't serialize indexable: ")},
d2:function(a){var t,s
t=[]
C.a.sl(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.N(a[s])
return t},
d3:function(a){var t
for(t=0;t<a.length;++t)C.a.j(a,t,this.N(a[t]))
return a},
d5:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.at(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sl(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.N(a[t[r]])
return["js-object",t,s]},
d7:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
d6:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.b6.prototype={
a0:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.e(P.e3("Bad serialized message: "+H.i(a)))
switch(C.a.gbe(a)){case"ref":H.b(J.I(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.b(J.I(a[0],"buffer"))
t=a[1]
C.a.i(this.b,t)
return t
case"typed":H.b(J.I(a[0],"typed"))
t=a[1]
C.a.i(this.b,t)
return t
case"fixed":H.b(J.I(a[0],"fixed"))
t=a[1]
C.a.i(this.b,t)
s=H.F(this.am(t),[null])
s.fixed$length=Array
return s
case"extendable":H.b(J.I(a[0],"extendable"))
t=a[1]
C.a.i(this.b,t)
return H.F(this.am(t),[null])
case"mutable":H.b(J.I(a[0],"mutable"))
t=a[1]
C.a.i(this.b,t)
return this.am(t)
case"const":H.b(J.I(a[0],"const"))
t=a[1]
C.a.i(this.b,t)
s=H.F(this.am(t),[null])
s.fixed$length=Array
return s
case"map":return this.eG(a)
case"sendport":return this.eH(a)
case"raw sendport":H.b(J.I(a[0],"raw sendport"))
t=a[1]
C.a.i(this.b,t)
return t
case"js-object":return this.eF(a)
case"function":H.b(J.I(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.i(this.b,t)
return t
case"capability":H.b(J.I(a[0],"capability"))
return new H.at(a[1])
case"dart":H.b(J.I(a[0],"dart"))
r=a[1]
q=a[2]
p=u.instanceFromClassId(r)
C.a.i(this.b,p)
this.am(q)
return u.initializeEmptyInstance(r,p,q)
default:throw H.e("couldn't deserialize: "+H.i(a))}},
am:function(a){var t
for(t=0;t<a.length;++t)C.a.j(a,t,this.a0(a[t]))
return a},
eG:function(a){var t,s,r,q,p
H.b(J.I(a[0],"map"))
t=a[1]
s=a[2]
r=P.G()
C.a.i(this.b,r)
t=J.m5(t,this.geE()).f9(0)
for(q=J.a2(s),p=0;p<t.length;++p)r.j(0,t[p],this.a0(q.h(s,p)))
return r},
eH:function(a){var t,s,r,q,p,o,n
H.b(J.I(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.cv(r)
if(o==null)return
n=new H.bs(o,s)}else n=new H.cc(t,r,s)
C.a.i(this.b,n)
return n},
eF:function(a){var t,s,r,q,p,o
H.b(J.I(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.i(this.b,r)
for(q=J.a2(t),p=J.a2(s),o=0;o<q.gl(t);++o)r[q.h(t,o)]=this.a0(p.h(s,o))
return r}}
H.fM.prototype={}
H.hs.prototype={
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
H.f1.prototype={
k:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.i(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.i(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.i(this.a)+")"}}
H.hv.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.jl.prototype={
$1:function(a){if(!!J.v(a).$isbe)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.dS.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.j3.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.j4.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.j5.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.j6.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.j7.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.bb.prototype={
k:function(a){return"Closure '"+H.dA(this).trim()+"'"},
$isjx:1,
gfg:function(){return this},
$D:null}
H.hf.prototype={}
H.h1.prototype={
k:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bB.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bB))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gw:function(a){var t,s
t=this.c
if(t==null)s=H.b0(this.a)
else s=typeof t!=="object"?J.as(t):H.b0(t)
return(s^H.b0(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.i(this.d)+"' of "+H.fI(t)}}
H.hu.prototype={
k:function(a){return this.a}}
H.e8.prototype={
k:function(a){return this.a}}
H.fS.prototype={
k:function(a){return"RuntimeError: "+H.i(this.a)}}
H.hG.prototype={
k:function(a){return C.i.a5("Assertion failed: ",P.jw(this.a))}}
H.aK.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gw:function(a){return J.as(this.a)},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.aK){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.ak.prototype={
gl:function(a){return this.a},
gaq:function(a){return this.a===0},
gI:function(a){return new H.f4(this,[H.aC(this,0)])},
gcT:function(a){return H.jF(this.gI(this),new H.f0(this),H.aC(this,0),H.aC(this,1))},
H:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bS(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bS(s,b)}else return this.eR(b)},
eR:function(a){var t=this.d
if(t==null)return!1
return this.ap(this.aC(t,this.ao(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.ak(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.ak(r,b)
return s==null?null:s.b}else return this.eS(b)},
eS:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.aC(t,this.ao(a))
r=this.ap(s,a)
if(r<0)return
return s[r].b},
j:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aY()
this.b=t}this.bI(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aY()
this.c=s}this.bI(s,b,c)}else{r=this.d
if(r==null){r=this.aY()
this.d=r}q=this.ao(b)
p=this.aC(r,q)
if(p==null)this.b0(r,q,[this.aZ(b,c)])
else{o=this.ap(p,b)
if(o>=0)p[o].b=c
else p.push(this.aZ(b,c))}}},
ar:function(a,b){if(typeof b==="string")return this.bY(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bY(this.c,b)
else return this.eT(b)},
eT:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.aC(t,this.ao(a))
r=this.ap(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.c1(q)
return q.b},
a_:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
aG:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.e(new P.a5(this))
t=t.c}},
bI:function(a,b,c){var t=this.ak(a,b)
if(t==null)this.b0(a,b,this.aZ(b,c))
else t.b=c},
bY:function(a,b){var t
if(a==null)return
t=this.ak(a,b)
if(t==null)return
this.c1(t)
this.bT(a,b)
return t.b},
aZ:function(a,b){var t,s
t=new H.f3(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
c1:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.r=this.r+1&67108863},
ao:function(a){return J.as(a)&0x3ffffff},
ap:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.I(a[s].a,b))return s
return-1},
k:function(a){return P.mP(this)},
ak:function(a,b){return a[b]},
aC:function(a,b){return a[b]},
b0:function(a,b,c){H.b(c!=null)
a[b]=c},
bT:function(a,b){delete a[b]},
bS:function(a,b){return this.ak(a,b)!=null},
aY:function(){var t=Object.create(null)
this.b0(t,"<non-identifier-key>",t)
this.bT(t,"<non-identifier-key>")
return t},
$ismG:1}
H.f0.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.f3.prototype={}
H.f4.prototype={
gl:function(a){return this.a.a},
gB:function(a){var t,s
t=this.a
s=new H.f5(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.f5.prototype={
gt:function(){return this.d},
q:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a5(t))
else{t=this.c
if(t==null){this.sbH(null)
return!1}else{this.sbH(t.a)
this.c=this.c.c
return!0}}},
sbH:function(a){this.d=a}}
H.j_.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.j0.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.u]}}}
H.j1.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.u]}}}
H.bQ.prototype={
gD:function(a){return C.ae},
$isbQ:1}
H.bl.prototype={$isbl:1}
H.fh.prototype={
gD:function(a){return C.af}}
H.ds.prototype={
gl:function(a){return a.length},
$isn:1,
$asn:function(){},
$isq:1,
$asq:function(){}}
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
$isc:1,
$asc:function(){return[P.o]}}
H.dr.prototype={
gD:function(a){return C.ag},
$isd:1,
$asd:function(){return[P.Q]},
$isc:1,
$asc:function(){return[P.Q]},
$iseJ:1}
H.fi.prototype={
gD:function(a){return C.ah},
$isd:1,
$asd:function(){return[P.Q]},
$isc:1,
$asc:function(){return[P.Q]}}
H.fj.prototype={
gD:function(a){return C.ai},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.K(H.T(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]}}
H.fk.prototype={
gD:function(a){return C.aj},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.K(H.T(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]},
$iskB:1}
H.fl.prototype={
gD:function(a){return C.ak},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.K(H.T(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]}}
H.fm.prototype={
gD:function(a){return C.ao},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.K(H.T(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]},
$iskY:1}
H.fn.prototype={
gD:function(a){return C.ap},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.K(H.T(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]},
$iskZ:1}
H.dv.prototype={
gD:function(a){return C.aq},
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.K(H.T(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]}}
H.fo.prototype={
gD:function(a){return C.ar},
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.K(H.T(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]},
$isl_:1}
H.bR.prototype={
$asn:function(){},
$isd:1,
$asd:function(){return[P.o]},
$asq:function(){},
$isc:1,
$asc:function(){return[P.o]}}
H.bS.prototype={
$asn:function(){},
$isd:1,
$asd:function(){return[P.Q]},
$asq:function(){},
$isc:1,
$asc:function(){return[P.Q]}}
H.bT.prototype={
$asn:function(){},
$asd:function(){return[P.Q]},
$asq:function(){},
$asc:function(){return[P.Q]}}
H.bU.prototype={
$asn:function(){},
$asd:function(){return[P.o]},
$asq:function(){},
$asc:function(){return[P.o]}}
P.hJ.prototype={
$1:function(a){var t,s
H.j8()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.hI.prototype={
$1:function(a){var t,s
t=this.a
H.b(t.a==null);++u.globalState.f.b
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.hK.prototype={
$0:function(){H.j8()
this.a.$0()},
$S:function(){return{func:1}}}
P.hL.prototype={
$0:function(){H.j8()
this.a.$0()},
$S:function(){return{func:1}}}
P.eO.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.b)this.d.U(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.b)this.d.U(t.c,t.d)},
$S:function(){return{func:1,args:[,,]}}}
P.eN.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){r[this.e]=a
if(s===0)this.d.bR(r)}else if(t.b===0&&!this.b)this.d.U(t.c,t.d)},
$S:function(){return{func:1,args:[,]}}}
P.hP.prototype={}
P.hH.prototype={
bc:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.aw("Future already completed"))
t.bK(b)}}
P.iF.prototype={
bc:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.aw("Future already completed"))
t.ai(b)}}
P.c6.prototype={
eY:function(a){if(this.c!==6)return!0
H.b(!0)
return this.b.b.bi(this.d,a.a)},
eN:function(a){var t,s
t=(this.c&2)!==0
if(t){H.b(t)
t=this.e!=null}else t=!1
H.b(t)
s=this.e
t=this.b.b
if(H.bx(s,{func:1,args:[P.p,P.c_]}))return t.f5(s,a.a,a.b)
else return t.bi(s,a.a)}}
P.O.prototype={
bk:function(a,b){var t,s,r
t=$.x
if(t!==C.d){t.toString
if(b!=null)b=P.nq(b,t)}s=new P.O(0,t,null,[null])
r=b==null?1:3
this.aS(new P.c6(null,s,r,a,b,[H.aC(this,0),null]))
return s},
aK:function(a){return this.bk(a,null)},
ff:function(a){var t,s
t=$.x
s=new P.O(0,t,null,this.$ti)
if(t!==C.d)t.toString
t=H.aC(this,0)
this.aS(new P.c6(null,s,8,a,null,[t,t]))
return s},
bM:function(a){H.b(this.a<4)
H.b(a.a>=4)
this.a=a.a
this.c=a.c},
aS:function(a){var t
H.b(a.a==null)
t=this.a
if(t<=1){a.a=H.jS(this.c,"$isc6")
this.c=a}else{if(t===2){H.b(!0)
t=this.c
if(t.a<4){t.aS(a)
return}this.bM(t)}H.b(this.a>=4)
t=this.b
t.toString
P.bu(null,null,t,new P.i0(this,a))}},
bX:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.b(!0)
s=this.c
if(s.a<4){s.bX(a)
return}this.bM(s)}H.b(this.a>=4)
t.a=this.al(a)
s=this.b
s.toString
P.bu(null,null,s,new P.i8(t,this))}},
b_:function(){H.b(this.a<4)
var t=this.c
this.c=null
return this.al(t)},
al:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
ai:function(a){var t,s
H.b(this.a<4)
t=this.$ti
if(H.cg(a,"$isaU",t,"$asaU"))if(H.cg(a,"$isO",t,null))P.i3(a,this)
else P.l3(a,this)
else{s=this.b_()
H.b(this.a<4)
this.a=4
this.c=a
P.br(this,s)}},
bR:function(a){var t
H.b(this.a<4)
H.b(!J.v(a).$isaU)
t=this.b_()
H.b(this.a<4)
this.a=4
this.c=a
P.br(this,t)},
U:function(a,b){var t
H.b(this.a<4)
t=this.b_()
H.b(this.a<4)
this.a=8
this.c=new P.ba(a,b)
P.br(this,t)},
dU:function(a){return this.U(a,null)},
bK:function(a){var t
H.b(this.a<4)
if(H.cg(a,"$isaU",this.$ti,"$asaU")){this.dS(a)
return}H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.bu(null,null,t,new P.i2(this,a))},
dS:function(a){var t
if(H.cg(a,"$isO",this.$ti,null)){if(a.a===8){H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.bu(null,null,t,new P.i7(this,a))}else P.i3(a,this)
return}P.l3(a,this)},
dR:function(a,b){var t
H.b(this.a<4)
H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.bu(null,null,t,new P.i1(this,a,b))},
$isaU:1,
gb2:function(){return this.a},
geb:function(){return this.c}}
P.i0.prototype={
$0:function(){P.br(this.a,this.b)},
$S:function(){return{func:1}}}
P.i8.prototype={
$0:function(){P.br(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.i4.prototype={
$1:function(a){var t=this.a
H.b(t.a===1)
H.b(t.a===1)
t.a=0
t.ai(a)},
$S:function(){return{func:1,args:[,]}}}
P.i5.prototype={
$2:function(a,b){var t=this.a
H.b(t.a===1)
t.U(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.i6.prototype={
$0:function(){this.a.U(this.b,this.c)},
$S:function(){return{func:1}}}
P.i2.prototype={
$0:function(){this.a.bR(this.b)},
$S:function(){return{func:1}}}
P.i7.prototype={
$0:function(){P.i3(this.b,this.a)},
$S:function(){return{func:1}}}
P.i1.prototype={
$0:function(){this.a.U(this.b,this.c)},
$S:function(){return{func:1}}}
P.ib.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.d
p=q.c
H.b((p&1)===0)
o=(p&2)===0
H.b(o)
t=null
try{H.b(o)
H.b(p===8)
t=q.b.b.cD(q.d)}catch(n){s=H.R(n)
r=H.ap(n)
if(this.c){q=this.a.a
H.b(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.b(q.a===8)
p.b=q.c}else p.b=new P.ba(s,r)
p.a=!0
return}if(!!J.v(t).$isaU){if(t instanceof P.O&&t.gb2()>=4){if(t.gb2()===8){q=t
H.b(q.gb2()===8)
p=this.b
p.b=q.geb()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.aK(new P.ic(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.ic.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.ia.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.b((r.c&1)!==0)
this.a.b=r.b.b.bi(r.d,this.c)}catch(q){t=H.R(q)
s=H.ap(q)
r=this.a
r.b=new P.ba(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.i9.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.b(q.a===8)
t=q.c
q=this.c
if(q.eY(t)){H.b((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.eN(t)
p.a=!1}}catch(o){s=H.R(o)
r=H.ap(o)
q=this.a
p=q.a
H.b(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.b(q.a===8)
m.b=q.c}else m.b=new P.ba(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.dO.prototype={}
P.c0.prototype={
gl:function(a){var t,s
t={}
s=new P.O(0,$.x,null,[P.o])
t.a=0
this.cu(new P.h8(t),!0,new P.h9(t,s),s.gbQ())
return s},
gbe:function(a){var t,s
t={}
s=new P.O(0,$.x,null,[H.ah(this,"c0",0)])
t.a=null
t.a=this.cu(new P.h6(t,this,s),!0,new P.h7(s),s.gbQ())
return s}}
P.h8.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.h9.prototype={
$0:function(){this.b.ai(this.a.a)},
$S:function(){return{func:1}}}
P.h6.prototype={
$1:function(a){P.nk(this.a.a,this.c,a)},
$S:function(){return H.nB(function(a){return{func:1,args:[a]}},this.b,"c0")}}
P.h7.prototype={
$0:function(){var t,s,r,q
try{r=H.dh()
throw H.e(r)}catch(q){t=H.R(q)
s=H.ap(q)
P.nm(this.a,t,s)}},
$S:function(){return{func:1}}}
P.h5.prototype={}
P.iN.prototype={
$0:function(){return this.a.ai(this.b)},
$S:function(){return{func:1}}}
P.ba.prototype={
k:function(a){return H.i(this.a)},
$isbe:1}
P.iM.prototype={}
P.iQ.prototype={
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
P.ir.prototype={
f6:function(a){var t,s,r
try{if(C.d===$.x){a.$0()
return}P.l8(null,null,this,a)}catch(r){t=H.R(r)
s=H.ap(r)
P.iP(null,null,this,t,s)}},
f7:function(a,b){var t,s,r
try{if(C.d===$.x){a.$1(b)
return}P.l9(null,null,this,a,b)}catch(r){t=H.R(r)
s=H.ap(r)
P.iP(null,null,this,t,s)}},
eo:function(a){return new P.it(this,a)},
b9:function(a){return new P.is(this,a)},
ep:function(a){return new P.iu(this,a)},
h:function(a,b){return},
cD:function(a){if($.x===C.d)return a.$0()
return P.l8(null,null,this,a)},
bi:function(a,b){if($.x===C.d)return a.$1(b)
return P.l9(null,null,this,a,b)},
f5:function(a,b,c){if($.x===C.d)return a.$2(b,c)
return P.nr(null,null,this,a,b,c)}}
P.it.prototype={
$0:function(){return this.a.cD(this.b)},
$S:function(){return{func:1}}}
P.is.prototype={
$0:function(){return this.a.f6(this.b)},
$S:function(){return{func:1}}}
P.iu.prototype={
$1:function(a){return this.a.f7(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.dQ.prototype={
ao:function(a){return H.nU(a)&0x3ffffff},
ap:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.ij.prototype={
gB:function(a){var t=new P.c9(this,this.r,null,null,[null])
t.c=this.e
return t},
gl:function(a){return this.a},
E:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dV(b)},
dV:function(a){var t=this.d
if(t==null)return!1
return this.aB(t[this.aA(a)],a)>=0},
cv:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.E(0,a)?a:null
else return this.e3(a)},
e3:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.aA(a)]
r=this.aB(s,a)
if(r<0)return
return J.by(s,r).gdX()},
i:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
H.b(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.bN(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
H.b(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.bN(r,b)}else return this.Y(0,b)},
Y:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.ni()
this.d=t}s=this.aA(b)
r=t[s]
if(r==null){q=[this.aU(b)]
H.b(q!=null)
t[s]=q}else{if(this.aB(r,b)>=0)return!1
r.push(this.aU(b))}return!0},
ar:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bO(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bO(this.c,b)
else return this.e5(0,b)},
e5:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.aA(b)]
r=this.aB(s,b)
if(r<0)return!1
this.bP(s.splice(r,1)[0])
return!0},
a_:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
bN:function(a,b){var t
if(a[b]!=null)return!1
t=this.aU(b)
H.b(!0)
a[b]=t
return!0},
bO:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bP(t)
delete a[b]
return!0},
aU:function(a){var t,s
t=new P.ik(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bP:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.r=this.r+1&67108863},
aA:function(a){return J.as(a)&0x3ffffff},
aB:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.I(a[s].a,b))return s
return-1},
$isd:1,
$asd:null}
P.ik.prototype={
gdX:function(){return this.a}}
P.c9.prototype={
gt:function(){return this.d},
q:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a5(t))
else{t=this.c
if(t==null){this.sah(null)
return!1}else{this.sah(t.a)
this.c=this.c.b
return!0}}},
sah:function(a){this.d=a}}
P.ig.prototype={}
P.dl.prototype={}
P.y.prototype={
gB:function(a){return new H.dm(a,this.gl(a),0,null,[H.ah(a,"y",0)])},
u:function(a,b){return this.h(a,b)},
cw:function(a,b){return new H.bN(a,b,[H.ah(a,"y",0),null])},
eM:function(a,b,c){var t,s,r
t=this.gl(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gl(a))throw H.e(new P.a5(a))}return s},
k:function(a){return P.eY(a,"[","]")},
$isd:1,
$asd:null,
$isc:1,
$asc:null}
P.fa.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.i(a)
t.a=s+": "
t.a+=H.i(b)},
$S:function(){return{func:1,args:[,,]}}}
P.f6.prototype={
gB:function(a){return new P.il(this,this.c,this.d,this.b,null,this.$ti)},
gaq:function(a){return this.b===this.c},
gl:function(a){return(this.c-this.b&this.a.length-1)>>>0},
u:function(a,b){var t=(this.c-this.b&this.a.length-1)>>>0
if(C.b.au(0,b)||b>=t)H.K(P.D(b,this,"index",null,t))
return this.a[(C.b.a5(this.b,b)&this.a.length-1)>>>0]},
a_:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
k:function(a){return P.eY(this,"{","}")},
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
if(this.b===t)this.bV();++this.d},
bV:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.F(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.bu(s,0,q,t,r)
C.a.bu(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sc_(s)},
dw:function(a,b){var t
H.b(!0)
t=new Array(8)
t.fixed$length=Array
this.sc_(H.F(t,[b]))},
sc_:function(a){this.a=a},
$asd:null}
P.il.prototype={
gt:function(){return this.e},
q:function(){var t,s
t=this.a
if(this.c!==t.d)H.K(new P.a5(t))
s=this.d
if(s===this.b){this.sah(null)
return!1}this.sah(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sah:function(a){this.e=a}}
P.fV.prototype={
M:function(a,b){var t
for(t=J.bA(b);t.q();)this.i(0,t.gt())},
k:function(a){return P.eY(this,"{","}")},
$isd:1,
$asd:null}
P.fU.prototype={}
P.bX.prototype={$isd:1,$asd:null,$isc:1,$asc:null}
P.aB.prototype={}
P.M.prototype={}
P.bd.prototype={
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.bd))return!1
return this.a===b.a&&this.b===b.b},
W:function(a,b){return C.b.W(this.a,b.a)},
gw:function(a){var t=this.a
return(t^C.b.b1(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.mt(H.mZ(this))
s=P.cr(H.mX(this))
r=P.cr(H.mT(this))
q=P.cr(H.mU(this))
p=P.cr(H.mW(this))
o=P.cr(H.mY(this))
n=P.mu(H.mV(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isM:1,
$asM:function(){return[P.bd]}}
P.Q.prototype={$isM:1,
$asM:function(){return[P.Y]}}
P.aE.prototype={
aO:function(a,b){return C.b.aO(this.a,b.gdW())},
au:function(a,b){return C.b.au(this.a,b.gdW())},
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.aE))return!1
return this.a===b.a},
gw:function(a){return this.a&0x1FFFFFFF},
W:function(a,b){return C.b.W(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.el()
s=this.a
if(s<0)return"-"+new P.aE(0-s).k(0)
r=t.$1(C.b.L(s,6e7)%60)
q=t.$1(C.b.L(s,1e6)%60)
p=new P.ek().$1(s%1e6)
return""+C.b.L(s,36e8)+":"+H.i(r)+":"+H.i(q)+"."+H.i(p)},
$isM:1,
$asM:function(){return[P.aE]}}
P.ek.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.u,args:[P.o]}}}
P.el.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.u,args:[P.o]}}}
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
H.b(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.i(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.i(t)
else if(r>t)s=": Not in range "+H.i(t)+".."+H.i(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.i(t)}return s}}
P.eU.prototype={
gaW:function(){return"RangeError"},
gaV:function(){H.b(this.a)
if(J.lA(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.i(t)},
gl:function(a){return this.f}}
P.w.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.dM.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.aw.prototype={
k:function(a){return"Bad state: "+this.a}}
P.a5.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.i(P.jw(t))+"."}}
P.dG.prototype={
k:function(a){return"Stack Overflow"},
$isbe:1}
P.ec.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.i_.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.i(t)}}
P.en.prototype={
k:function(a){return"Expando:"+H.i(this.a)},
h:function(a,b){var t,s
t=this.b
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.K(P.ka(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.kH(b,"expando$values")
return s==null?null:H.kH(s,t)}}
P.o.prototype={$isM:1,
$asM:function(){return[P.Y]}}
P.Z.prototype={
aM:function(a,b){return new H.dN(this,b,[H.ah(this,"Z",0)])},
gl:function(a){var t,s
H.b(!this.$isd)
t=this.gB(this)
for(s=0;t.q();)++s
return s},
ga7:function(a){var t,s
t=this.gB(this)
if(!t.q())throw H.e(H.dh())
s=t.gt()
if(t.q())throw H.e(H.mO())
return s},
u:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(P.mk("index"))
if(b<0)H.K(P.b1(b,0,null,"index",null))
for(t=this.gB(this),s=0;t.q();){r=t.gt()
if(b===s)return r;++s}throw H.e(P.D(b,this,"index",null,s))},
k:function(a){return P.mM(this,"(",")")}}
P.di.prototype={}
P.c.prototype={$isd:1,$asd:null,$asc:null}
P.aH.prototype={}
P.aJ.prototype={
gw:function(a){return P.p.prototype.gw.call(this,this)},
k:function(a){return"null"}}
P.Y.prototype={$isM:1,
$asM:function(){return[P.Y]}}
P.p.prototype={constructor:P.p,$isp:1,
A:function(a,b){return this===b},
gw:function(a){return H.b0(this)},
k:function(a){return H.fI(this)},
gD:function(a){return new H.aK(H.iY(this),null)},
toString:function(){return this.k(this)}}
P.c_.prototype={}
P.u.prototype={$isM:1,
$asM:function(){return[P.u]}}
P.c1.prototype={
gl:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga8:function(){return this.a}}
W.m.prototype={}
W.e1.prototype={
k:function(a){return String(a)},
$isa:1}
W.e2.prototype={
k:function(a){return String(a)},
$isa:1}
W.a4.prototype={$isp:1}
W.e6.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a4]},
$isd:1,
$asd:function(){return[W.a4]},
$isq:1,
$asq:function(){return[W.a4]},
$isc:1,
$asc:function(){return[W.a4]}}
W.co.prototype={}
W.aR.prototype={$isa:1,$isaR:1}
W.aS.prototype={
bm:function(a,b,c){if(c!=null)return this.dZ(a,b,P.nC(c,null))
return this.e_(a,b)},
cZ:function(a,b){return this.bm(a,b,null)},
dZ:function(a,b,c){return a.getContext(b,c)},
e_:function(a,b){return a.getContext(b)},
$isaS:1}
W.cp.prototype={
aE:function(a,b,c){return a.addColorStop(b,c)}}
W.cq.prototype={
ci:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
eL:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
aN:function(a){return P.iT(a.getContextAttributes())}}
W.aT.prototype={$isa:1,
gl:function(a){return a.length}}
W.ea.prototype={$isa:1}
W.B.prototype={$isp:1}
W.bc.prototype={
bL:function(a,b){var t,s
t=$.$get$kn()
s=t[b]
if(typeof s==="string")return s
s=this.ee(a,b)
t[b]=s
return s},
ee:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.mv()+b
if(t in a)return t
return b},
gl:function(a){return a.length}}
W.eb.prototype={}
W.ed.prototype={
h:function(a,b){return a[b]},
gl:function(a){return a.length}}
W.ee.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gO:function(a){return a.z}}
W.cs.prototype={}
W.bC.prototype={
ej:function(a,b){return a.adoptNode(b)},
d_:function(a,b){return a.getElementById(b)},
f0:function(a,b){return a.querySelector(b)}}
W.ct.prototype={$isa:1}
W.ef.prototype={
k:function(a){return String(a)}}
W.cu.prototype={
eA:function(a,b){return a.createHTMLDocument(b)}}
W.eg.prototype={
gaL:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gO:function(a){return a.z}}
W.cv.prototype={
gaL:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gO:function(a){return a.z}}
W.cw.prototype={
k:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.ga4(a))+" x "+H.i(this.ga3(a))},
A:function(a,b){var t
if(b==null)return!1
t=J.v(b)
if(!t.$isN)return!1
return a.left===t.gbf(b)&&a.top===t.gbl(b)&&this.ga4(a)===t.ga4(b)&&this.ga3(a)===t.ga3(b)},
gw:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.ga4(a)
q=this.ga3(a)
return W.l6(W.b9(W.b9(W.b9(W.b9(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga3:function(a){return a.height},
gbf:function(a){return a.left},
gbl:function(a){return a.top},
ga4:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isN:1,
$asN:function(){}}
W.eh.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[P.u]},
$isd:1,
$asd:function(){return[P.u]},
$isq:1,
$asq:function(){return[P.u]},
$isc:1,
$asc:function(){return[P.u]}}
W.ei.prototype={
gl:function(a){return a.length}}
W.a6.prototype={
gem:function(a){return new W.hT(a)},
k:function(a){return a.localName},
P:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.kv
if(t==null){t=H.F([],[W.dx])
s=new W.dy(t)
C.a.i(t,W.l4(null))
C.a.i(t,W.l7())
$.kv=s
d=s}else d=t
t=$.ku
if(t==null){t=new W.dT(d)
$.ku=t
c=t}else{t.a=d
c=t}}if($.aF==null){t=document
s=t.implementation
s=(s&&C.M).eA(s,"")
$.aF=s
$.jv=s.createRange()
s=$.aF
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.aF.head;(t&&C.N).V(t,r)}t=$.aF
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.jS(s,"$isaR")}t=$.aF
if(!!this.$isaR)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.aF.body;(t&&C.o).V(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.E(C.X,a.tagName)){t=$.jv;(t&&C.F).d0(t,q)
t=$.jv
p=(t&&C.F).ey(t,b)}else{q.innerHTML=b
p=$.aF.createDocumentFragment()
for(t=J.l(p);s=q.firstChild,s!=null;)t.V(p,s)}t=$.aF.body
if(q==null?t!=null:q!==t)J.m7(q)
c.bt(p)
C.r.ej(document,p)
return p},
ez:function(a,b,c){return this.P(a,b,c,null)},
da:function(a,b,c,d){a.textContent=null
this.V(a,this.P(a,b,c,d))},
d9:function(a,b){return this.da(a,b,null,null)},
ac:function(a,b){return a.getAttribute(b)},
e6:function(a,b){return a.removeAttribute(b)},
$isa:1,
$isp:1,
$isa6:1,
$isj:1,
$ist:1,
gf8:function(a){return a.tagName}}
W.iR.prototype={
$1:function(a){return!!J.v(a).$isa6},
$S:function(){return{func:1,args:[,]}}}
W.k.prototype={$isp:1,$isk:1}
W.j.prototype={
dQ:function(a,b,c,d){return a.addEventListener(b,H.bw(c,1),!1)},
e8:function(a,b,c,d){return a.removeEventListener(b,H.bw(c,1),!1)},
$isp:1,
$isj:1}
W.a7.prototype={$isp:1}
W.eG.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a7]},
$isd:1,
$asd:function(){return[W.a7]},
$isq:1,
$asq:function(){return[W.a7]},
$isc:1,
$asc:function(){return[W.a7]}}
W.eH.prototype={
gl:function(a){return a.length}}
W.eL.prototype={
gl:function(a){return a.length}}
W.a8.prototype={$isp:1}
W.cB.prototype={}
W.eP.prototype={
gl:function(a){return a.length}}
W.bK.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.t]},
$isd:1,
$asd:function(){return[W.t]},
$isq:1,
$asq:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]}}
W.cC.prototype={}
W.eQ.prototype={
K:function(a,b){return a.send(b)}}
W.bL.prototype={}
W.bg.prototype={$isbg:1}
W.bh.prototype={$isbh:1}
W.bi.prototype={$isbi:1}
W.eV.prototype={$isa:1,$isa6:1}
W.aZ.prototype={$isp:1,$isk:1,$isaZ:1}
W.f8.prototype={
k:function(a){return String(a)}}
W.bO.prototype={}
W.fd.prototype={
gl:function(a){return a.length}}
W.fe.prototype={
fh:function(a,b,c){return a.send(b,c)},
K:function(a,b){return a.send(b)}}
W.bP.prototype={}
W.aa.prototype={$isp:1}
W.ff.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.aa]},
$isd:1,
$asd:function(){return[W.aa]},
$isq:1,
$asq:function(){return[W.aa]},
$isc:1,
$asc:function(){return[W.aa]}}
W.S.prototype={$isp:1,$isk:1,$isS:1}
W.fp.prototype={$isa:1}
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
if(t!==s)for(r=t.childNodes.length,q=J.l(s),p=0;p<r;++p)q.V(s,t.firstChild)
return},
j:function(a,b,c){var t=this.a
J.lD(t,c,C.D.h(t.childNodes,b))},
gB:function(a){var t=this.a.childNodes
return new W.cz(t,t.length,-1,null,[H.ah(t,"C",0)])},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){return C.D.h(this.a.childNodes,b)},
$asd:function(){return[W.t]},
$asdl:function(){return[W.t]},
$asc:function(){return[W.t]},
$asbX:function(){return[W.t]}}
W.t.prototype={
f1:function(a){var t=a.parentNode
if(t!=null)J.bz(t,a)},
k:function(a){var t=a.nodeValue
return t==null?this.df(a):t},
V:function(a,b){return a.appendChild(b)},
e7:function(a,b){return a.removeChild(b)},
e9:function(a,b,c){return a.replaceChild(b,c)},
$isp:1,
$isj:1,
$ist:1,
gbg:function(a){return a.previousSibling}}
W.dw.prototype={
bh:function(a){return a.previousNode()}}
W.bV.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.t]},
$isd:1,
$asd:function(){return[W.t]},
$isq:1,
$asq:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]}}
W.fy.prototype={$isa:1}
W.fB.prototype={
gl:function(a){return a.length}}
W.ab.prototype={$isp:1,
gl:function(a){return a.length}}
W.fD.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.ab]},
$isd:1,
$asd:function(){return[W.ab]},
$isq:1,
$asq:function(){return[W.ab]},
$isc:1,
$asc:function(){return[W.ab]}}
W.fG.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.fH.prototype={
K:function(a,b){return a.send(b)}}
W.dB.prototype={
ey:function(a,b){return a.createContextualFragment(b)},
d0:function(a,b){return a.selectNodeContents(b)}}
W.fR.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gO:function(a){return a.z}}
W.dE.prototype={
K:function(a,b){return a.send(b)}}
W.fT.prototype={
gl:function(a){return a.length}}
W.fX.prototype={$isa:1}
W.ac.prototype={$isp:1,$isj:1}
W.fY.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.ac]},
$isd:1,
$asd:function(){return[W.ac]},
$isq:1,
$asq:function(){return[W.ac]},
$isc:1,
$asc:function(){return[W.ac]}}
W.ad.prototype={$isp:1}
W.h_.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.ad]},
$isd:1,
$asd:function(){return[W.ad]},
$isq:1,
$asq:function(){return[W.ad]},
$isc:1,
$asc:function(){return[W.ad]}}
W.ae.prototype={$isp:1,
gl:function(a){return a.length}}
W.h4.prototype={
h:function(a,b){return this.bU(a,b)},
aG:function(a,b){var t,s
for(t=0;!0;++t){s=this.e2(a,t)
if(s==null)return
b.$2(s,this.bU(a,s))}},
gl:function(a){return a.length},
bU:function(a,b){return a.getItem(b)},
e2:function(a,b){return a.key(b)}}
W.a_.prototype={$isp:1}
W.am.prototype={}
W.dH.prototype={
P:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aQ(a,b,c,d)
t=W.mx("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.V(s).M(0,new W.V(t))
return s}}
W.hd.prototype={
P:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aQ(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.K.P(t.createElement("table"),b,c,d)
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
W.he.prototype={
P:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aQ(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.K.P(t.createElement("table"),b,c,d)
t.toString
t=new W.V(t)
r=t.ga7(t)
s.toString
r.toString
new W.V(s).M(0,new W.V(r))
return s}}
W.c2.prototype={$isc2:1}
W.af.prototype={$isp:1,$isj:1}
W.a0.prototype={$isp:1,$isj:1}
W.hh.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a0]},
$isd:1,
$asd:function(){return[W.a0]},
$isq:1,
$asq:function(){return[W.a0]},
$isc:1,
$asc:function(){return[W.a0]}}
W.hi.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.af]},
$isd:1,
$asd:function(){return[W.af]},
$isq:1,
$asq:function(){return[W.af]},
$isc:1,
$asc:function(){return[W.af]}}
W.hk.prototype={
gl:function(a){return a.length}}
W.ag.prototype={$isp:1}
W.b2.prototype={$isp:1,$isk:1,$isb2:1}
W.ho.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.ag]},
$isd:1,
$asd:function(){return[W.ag]},
$isq:1,
$asq:function(){return[W.ag]},
$isc:1,
$asc:function(){return[W.ag]}}
W.hp.prototype={
gl:function(a){return a.length}}
W.bp.prototype={}
W.hr.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gO:function(a){return a.z}}
W.dK.prototype={
bh:function(a){return a.previousNode()}}
W.aL.prototype={}
W.hw.prototype={
k:function(a){return String(a)},
$isa:1}
W.bq.prototype={$isbq:1}
W.hy.prototype={
gl:function(a){return a.length}}
W.hB.prototype={
gl:function(a){return a.length}}
W.hC.prototype={
K:function(a,b){return a.send(b)}}
W.b4.prototype={
geC:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(new P.w("deltaY is not supported"))},
$isp:1,
$isk:1,
$isS:1,
$isb4:1}
W.c5.prototype={
gel:function(a){var t,s
t=P.Y
s=new P.O(0,$.x,null,[t])
this.dY(a)
this.ea(a,W.lb(new W.hE(new P.iF(s,[t]))))
return s},
ea:function(a,b){return a.requestAnimationFrame(H.bw(b,1))},
dY:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isa:1}
W.hE.prototype={
$1:function(a){this.a.bc(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.hF.prototype={$isa:1}
W.b5.prototype={$isa:1}
W.hO.prototype={
k:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
A:function(a,b){var t,s,r
if(b==null)return!1
t=J.v(b)
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
return W.l6(W.b9(W.b9(W.b9(W.b9(0,t),s),r),q))},
$isN:1,
$asN:function(){},
ga3:function(a){return a.height},
gbf:function(a){return a.left},
gbl:function(a){return a.top},
ga4:function(a){return a.width}}
W.dP.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[P.N]},
$isd:1,
$asd:function(){return[P.N]},
$isq:1,
$asq:function(){return[P.N]},
$isc:1,
$asc:function(){return[P.N]}}
W.hQ.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.B]},
$isd:1,
$asd:function(){return[W.B]},
$isq:1,
$asq:function(){return[W.B]},
$isc:1,
$asc:function(){return[W.B]}}
W.hR.prototype={$isa:1}
W.hS.prototype={
ga3:function(a){return a.height},
ga4:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.id.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a8]},
$isd:1,
$asd:function(){return[W.a8]},
$isq:1,
$asq:function(){return[W.a8]},
$isc:1,
$asc:function(){return[W.a8]}}
W.ie.prototype={$isa:1}
W.dR.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.t]},
$isd:1,
$asd:function(){return[W.t]},
$isq:1,
$asq:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]}}
W.iz.prototype={$isa:1}
W.iC.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.ae]},
$isd:1,
$asd:function(){return[W.ae]},
$isq:1,
$asq:function(){return[W.ae]},
$isc:1,
$asc:function(){return[W.ae]}}
W.iD.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a_]},
$isd:1,
$asd:function(){return[W.a_]},
$isq:1,
$asq:function(){return[W.a_]},
$isc:1,
$asc:function(){return[W.a_]}}
W.iK.prototype={$isa:1}
W.iL.prototype={$isa:1}
W.hM.prototype={
aG:function(a,b){var t,s,r,q,p,o
for(t=this.gI(this),s=t.length,r=this.a,q=J.l(r),p=0;p<t.length;t.length===s||(0,H.E)(t),++p){o=t[p]
b.$2(o,q.ac(r,o))}},
gI:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.F([],[P.u])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.i(s,p.name)}return s},
ge0:function(){return this.a}}
W.hT.prototype={
h:function(a,b){return J.js(this.a,b)},
gl:function(a){return this.gI(this).length}}
W.hX.prototype={
cu:function(a,b,c,d){return W.an(this.a,this.b,a,!1,H.aC(this,0))}}
W.hU.prototype={}
W.hY.prototype={
er:function(a){if(this.b==null)return
this.eh()
this.b=null
this.se4(null)
return},
eg:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.lB(r,this.c,t,!1)}},
eh:function(){var t,s,r
t=this.d
s=t!=null
if(s){r=this.b
r.toString
if(s)J.lC(r,this.c,t,!1)}},
dL:function(a,b,c,d,e){this.eg()},
se4:function(a){this.d=a}}
W.hZ.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.c8.prototype={
a9:function(a){return $.$get$l5().E(0,W.bD(a))},
Z:function(a,b,c){var t,s,r
t=W.bD(a)
s=$.$get$jL()
r=s.h(0,H.i(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
dM:function(a){var t,s
t=$.$get$jL()
if(t.gaq(t)){for(s=0;s<262;++s)t.j(0,C.W[s],W.nJ())
for(s=0;s<12;++s)t.j(0,C.u[s],W.nK())}}}
W.C.prototype={
gB:function(a){return new W.cz(a,this.gl(a),-1,null,[H.ah(a,"C",0)])},
$isd:1,
$asd:null,
$isc:1,
$asc:null}
W.dy.prototype={
a9:function(a){return C.a.c4(this.a,new W.fr(a))},
Z:function(a,b,c){return C.a.c4(this.a,new W.fq(a,b,c))}}
W.fr.prototype={
$1:function(a){return a.a9(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.fq.prototype={
$1:function(a){return a.Z(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.cb.prototype={
a9:function(a){return this.a.E(0,W.bD(a))},
Z:function(a,b,c){var t,s
t=W.bD(a)
s=this.c
if(s.E(0,H.i(t)+"::"+b))return this.d.ek(c)
else if(s.E(0,"*::"+b))return this.d.ek(c)
else{s=this.b
if(s.E(0,H.i(t)+"::"+b))return!0
else if(s.E(0,"*::"+b))return!0
else if(s.E(0,H.i(t)+"::*"))return!0
else if(s.E(0,"*::*"))return!0}return!1},
dO:function(a,b,c,d){var t,s,r
this.a.M(0,c)
t=b.aM(0,new W.iA())
s=b.aM(0,new W.iB())
this.b.M(0,t)
r=this.c
r.M(0,C.C)
r.M(0,s)}}
W.iA.prototype={
$1:function(a){return!C.a.E(C.u,a)},
$S:function(){return{func:1,args:[,]}}}
W.iB.prototype={
$1:function(a){return C.a.E(C.u,a)},
$S:function(){return{func:1,args:[,]}}}
W.iG.prototype={
Z:function(a,b,c){if(this.di(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.js(a,"template")==="")return this.e.E(0,b)
return!1}}
W.iH.prototype={
$1:function(a){return"TEMPLATE::"+H.i(a)},
$S:function(){return{func:1,args:[,]}}}
W.iE.prototype={
a9:function(a){var t=J.v(a)
if(!!t.$isbZ)return!1
t=!!t.$isL
if(t&&W.bD(a)==="foreignObject")return!1
if(t)return!0
return!1},
Z:function(a,b,c){if(b==="is"||C.i.bw(b,"on"))return!1
return this.a9(a)}}
W.cz.prototype={
q:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbW(J.by(this.a,t))
this.c=t
return!0}this.sbW(null)
this.c=s
return!1},
gt:function(){return this.d},
sbW:function(a){this.d=a}}
W.dx.prototype={}
W.iy.prototype={}
W.dT.prototype={
bt:function(a){new W.iI(this).$2(a,null)},
aD:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)J.bz(t,a)}else J.bz(b,a)},
ed:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.lW(a)
r=J.js(s.ge0(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.R(n)}p="element unprintable"
try{p=J.aD(a)}catch(n){H.R(n)}try{o=W.bD(a)
this.ec(a,b,t,p,o,s,r)}catch(n){if(H.R(n) instanceof P.ai)throw n
else{this.aD(a,b)
window
m="Removing corrupted element "+H.i(p)
if(typeof console!="undefined")console.warn(m)}}},
ec:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.aD(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.a9(a)){this.aD(a,b)
window
t="Removing disallowed element <"+H.i(e)+"> from "+J.aD(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.Z(a,"is",g)){this.aD(a,b)
window
t="Removing disallowed type extension <"+H.i(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gI(f)
s=H.F(t.slice(0),[H.aC(t,0)])
for(r=f.gI(f).length-1,t=f.a,q=J.l(t);r>=0;--r){p=s[r]
if(!this.a.Z(a,J.mc(p),q.ac(t,p))){window
o="Removing disallowed attribute <"+H.i(e)+" "+p+'="'+H.i(q.ac(t,p))+'">'
if(typeof console!="undefined")console.warn(o)
q.ac(t,p)
q.e6(t,p)}}if(!!J.v(a).$isc2)this.bt(a.content)}}
W.iI.prototype={
$2:function(a,b){var t,s,r,q
switch(a.nodeType){case 1:this.a.ed(a,b)
break
case 8:case 11:case 3:case 4:break
default:if(b==null){r=a.parentNode
if(r!=null)J.bz(r,a)}else J.bz(b,a)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.lX(t)}catch(q){H.R(q)
r=t
J.bz(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.t,W.t]}}}
W.bE.prototype={$isd:1,
$asd:function(){return[W.af]},
$isc:1,
$asc:function(){return[W.af]}}
W.bF.prototype={$isd:1,
$asd:function(){return[W.ac]},
$isc:1,
$asc:function(){return[W.ac]}}
W.bG.prototype={$isd:1,
$asd:function(){return[W.a4]},
$isc:1,
$asc:function(){return[W.a4]}}
W.bH.prototype={$isd:1,
$asd:function(){return[W.af]},
$isc:1,
$asc:function(){return[W.af]}}
W.bI.prototype={$isd:1,
$asd:function(){return[W.ac]},
$isc:1,
$asc:function(){return[W.ac]}}
W.bJ.prototype={$isd:1,
$asd:function(){return[W.a4]},
$isc:1,
$asc:function(){return[W.a4]}}
W.cD.prototype={}
W.cX.prototype={$isd:1,
$asd:function(){return[P.N]},
$isc:1,
$asc:function(){return[P.N]}}
W.cJ.prototype={$isd:1,
$asd:function(){return[W.ad]},
$isc:1,
$asc:function(){return[W.ad]}}
W.cQ.prototype={$isd:1,
$asd:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]}}
W.cR.prototype={$isd:1,
$asd:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]}}
W.cS.prototype={$isd:1,
$asd:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]}}
W.cT.prototype={$isd:1,
$asd:function(){return[W.a_]},
$isc:1,
$asc:function(){return[W.a_]}}
W.cU.prototype={$isd:1,
$asd:function(){return[W.ae]},
$isc:1,
$asc:function(){return[W.ae]}}
W.cV.prototype={$isd:1,
$asd:function(){return[W.a8]},
$isc:1,
$asc:function(){return[W.a8]}}
W.cW.prototype={$isd:1,
$asd:function(){return[W.B]},
$isc:1,
$asc:function(){return[W.B]}}
W.cH.prototype={$isd:1,
$asd:function(){return[W.ag]},
$isc:1,
$asc:function(){return[W.ag]}}
W.cI.prototype={$isd:1,
$asd:function(){return[W.a0]},
$isc:1,
$asc:function(){return[W.a0]}}
W.cK.prototype={$isd:1,
$asd:function(){return[W.ab]},
$isc:1,
$asc:function(){return[W.ab]}}
W.cM.prototype={$isd:1,
$asd:function(){return[W.aa]},
$isc:1,
$asc:function(){return[W.aa]}}
W.cN.prototype={$isd:1,
$asd:function(){return[W.a7]},
$isc:1,
$asc:function(){return[W.a7]}}
W.cO.prototype={$isd:1,
$asd:function(){return[P.u]},
$isc:1,
$asc:function(){return[P.u]}}
W.cY.prototype={$isd:1,
$asd:function(){return[W.B]},
$isc:1,
$asc:function(){return[W.B]}}
W.cZ.prototype={$isd:1,
$asd:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]}}
W.d9.prototype={$isd:1,
$asd:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]}}
W.da.prototype={$isd:1,
$asd:function(){return[W.ab]},
$isc:1,
$asc:function(){return[W.ab]}}
W.d8.prototype={$isd:1,
$asd:function(){return[W.aa]},
$isc:1,
$asc:function(){return[W.aa]}}
W.dd.prototype={$isd:1,
$asd:function(){return[W.ag]},
$isc:1,
$asc:function(){return[W.ag]}}
W.de.prototype={$isd:1,
$asd:function(){return[W.a7]},
$isc:1,
$asc:function(){return[W.a7]}}
W.df.prototype={$isd:1,
$asd:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]}}
W.dg.prototype={$isd:1,
$asd:function(){return[P.u]},
$isc:1,
$asc:function(){return[P.u]}}
W.d0.prototype={$isd:1,
$asd:function(){return[W.ae]},
$isc:1,
$asc:function(){return[W.ae]}}
W.d2.prototype={$isd:1,
$asd:function(){return[W.a0]},
$isc:1,
$asc:function(){return[W.a0]}}
W.d4.prototype={$isd:1,
$asd:function(){return[W.a8]},
$isc:1,
$asc:function(){return[W.a8]}}
W.d6.prototype={$isd:1,
$asd:function(){return[W.ad]},
$isc:1,
$asc:function(){return[W.ad]}}
W.db.prototype={$isd:1,
$asd:function(){return[P.N]},
$isc:1,
$asc:function(){return[P.N]}}
W.dc.prototype={$isd:1,
$asd:function(){return[W.a_]},
$isc:1,
$asc:function(){return[W.a_]}}
P.iS.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.u,,]}}}
P.ii.prototype={
eZ:function(){return Math.random()}}
P.iq.prototype={}
P.N.prototype={$asN:null}
P.e0.prototype={$isa:1}
P.aQ.prototype={$isa:1}
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
P.eA.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eB.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gO:function(a){return a.z}}
P.eC.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eD.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gO:function(a){return a.z}}
P.eE.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eF.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eI.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eK.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.aj.prototype={}
P.aG.prototype={$isa:1}
P.eR.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.au.prototype={$isp:1}
P.f2.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return this.a1(a,b)},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
a1:function(a,b){return a.getItem(b)},
$isd:1,
$asd:function(){return[P.au]},
$isc:1,
$asc:function(){return[P.au]}}
P.fb.prototype={$isa:1}
P.fc.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.av.prototype={$isp:1}
P.fs.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return this.a1(a,b)},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
a1:function(a,b){return a.getItem(b)},
$isd:1,
$asd:function(){return[P.av]},
$isc:1,
$asc:function(){return[P.av]}}
P.fz.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fE.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fF.prototype={
gl:function(a){return a.length}}
P.fK.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fL.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bZ.prototype={$isa:1,$isbZ:1}
P.ha.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return this.a1(a,b)},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
a1:function(a,b){return a.getItem(b)},
$isd:1,
$asd:function(){return[P.u]},
$isc:1,
$asc:function(){return[P.u]}}
P.L.prototype={
P:function(a,b,c,d){var t,s,r,q,p,o
t=H.F([],[W.dx])
C.a.i(t,W.l4(null))
C.a.i(t,W.l7())
C.a.i(t,new W.iE())
c=new W.dT(new W.dy(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.o).ez(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.V(q)
o=t.ga7(t)
for(t=J.l(p);r=o.firstChild,r!=null;)t.V(p,r)
return p},
$isa:1,
$isL:1}
P.hb.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.hc.prototype={$isa:1}
P.dI.prototype={}
P.hg.prototype={$isa:1}
P.c3.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ax.prototype={$isp:1}
P.hq.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return this.a1(a,b)},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
a1:function(a,b){return a.getItem(b)},
$isd:1,
$asd:function(){return[P.ax]},
$isc:1,
$asc:function(){return[P.ax]}}
P.hx.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.hz.prototype={$isa:1}
P.hA.prototype={$isa:1}
P.c7.prototype={$isa:1}
P.iv.prototype={$isa:1}
P.iw.prototype={$isa:1}
P.ix.prototype={$isa:1}
P.cG.prototype={$isd:1,
$asd:function(){return[P.au]},
$isc:1,
$asc:function(){return[P.au]}}
P.cE.prototype={$isd:1,
$asd:function(){return[P.u]},
$isc:1,
$asc:function(){return[P.u]}}
P.cL.prototype={$isd:1,
$asd:function(){return[P.av]},
$isc:1,
$asc:function(){return[P.av]}}
P.cP.prototype={$isd:1,
$asd:function(){return[P.ax]},
$isc:1,
$asc:function(){return[P.ax]}}
P.d_.prototype={$isd:1,
$asd:function(){return[P.au]},
$isc:1,
$asc:function(){return[P.au]}}
P.d7.prototype={$isd:1,
$asd:function(){return[P.av]},
$isc:1,
$asc:function(){return[P.av]}}
P.d3.prototype={$isd:1,
$asd:function(){return[P.ax]},
$isc:1,
$asc:function(){return[P.ax]}}
P.d5.prototype={$isd:1,
$asd:function(){return[P.u]},
$isc:1,
$asc:function(){return[P.u]}}
P.e5.prototype={
gl:function(a){return a.length}}
P.fP.prototype={
c2:function(a,b){return a.activeTexture(b)},
c5:function(a,b,c){return a.attachShader(b,c)},
c6:function(a,b,c){return a.bindBuffer(b,c)},
c7:function(a,b,c){return a.bindFramebuffer(b,c)},
c8:function(a,b,c){return a.bindTexture(b,c)},
c9:function(a,b){return a.blendEquation(b)},
ca:function(a,b,c){return a.blendFunc(b,c)},
cb:function(a,b,c,d){return a.bufferData(b,c,d)},
cc:function(a,b){return a.clear(b)},
cd:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
ce:function(a,b){return a.compileShader(b)},
cf:function(a){return a.createBuffer()},
cg:function(a){return a.createProgram()},
cj:function(a,b){return a.createShader(b)},
ck:function(a){return a.createTexture()},
cm:function(a,b){return a.depthMask(b)},
cn:function(a,b){return a.disable(b)},
co:function(a,b,c,d){return a.drawArrays(b,c,d)},
cp:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cq:function(a,b){return a.enable(b)},
cr:function(a,b){return a.enableVertexAttribArray(b)},
aN:function(a){return P.iT(a.getContextAttributes())},
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
t=J.v(g)
if(!!t.$isbh||g==null)s=!0
else s=!1
if(s){this.b3(a,b,c,d,e,f,P.lh(g))
return}if(!!t.$isbi)s=!0
else s=!1
if(s){this.b4(a,b,c,d,e,f,g)
return}if(!!t.$isaS)s=!0
else s=!1
if(s){this.b5(a,b,c,d,e,f,g)
return}if(!!t.$isbq)s=!0
else s=!1
if(s){this.b6(a,b,c,d,e,f,g)
return}if(!!t.$isbg)t=!0
else t=!1
if(t){this.b7(a,b,c,d,e,f,g)
return}throw H.e(P.e3("Incorrect number or type of arguments"))},
cF:function(a,b,c,d,e,f,g){return this.bj(a,b,c,d,e,f,g,null,null,null)},
b3:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b4:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b5:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b6:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b7:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cG:function(a,b,c,d){return a.texParameterf(b,c,d)},
cH:function(a,b,c,d){return a.texParameteri(b,c,d)},
cI:function(a,b,c){return a.uniform1f(b,c)},
cJ:function(a,b,c){return a.uniform1fv(b,c)},
cK:function(a,b,c){return a.uniform1i(b,c)},
cL:function(a,b,c){return a.uniform1iv(b,c)},
cM:function(a,b,c){return a.uniform2fv(b,c)},
cN:function(a,b,c){return a.uniform3fv(b,c)},
cO:function(a,b,c){return a.uniform4fv(b,c)},
cP:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cQ:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cS:function(a,b){return a.useProgram(b)},
cU:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cV:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fQ.prototype={
en:function(a,b){return a.beginTransformFeedback(b)},
eq:function(a,b){return a.bindVertexArray(b)},
eB:function(a){return a.createVertexArray()},
eI:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
eJ:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
eK:function(a){return a.endTransformFeedback()},
fd:function(a,b,c,d){this.ef(a,b,c,d)
return},
ef:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
fe:function(a,b,c){return a.vertexAttribDivisor(b,c)},
c2:function(a,b){return a.activeTexture(b)},
c5:function(a,b,c){return a.attachShader(b,c)},
c6:function(a,b,c){return a.bindBuffer(b,c)},
c7:function(a,b,c){return a.bindFramebuffer(b,c)},
c8:function(a,b,c){return a.bindTexture(b,c)},
c9:function(a,b){return a.blendEquation(b)},
ca:function(a,b,c){return a.blendFunc(b,c)},
cb:function(a,b,c,d){return a.bufferData(b,c,d)},
cc:function(a,b){return a.clear(b)},
cd:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
ce:function(a,b){return a.compileShader(b)},
cf:function(a){return a.createBuffer()},
cg:function(a){return a.createProgram()},
cj:function(a,b){return a.createShader(b)},
ck:function(a){return a.createTexture()},
cm:function(a,b){return a.depthMask(b)},
cn:function(a,b){return a.disable(b)},
co:function(a,b,c,d){return a.drawArrays(b,c,d)},
cp:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cq:function(a,b){return a.enable(b)},
cr:function(a,b){return a.enableVertexAttribArray(b)},
aN:function(a){return P.iT(a.getContextAttributes())},
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
t=J.v(g)
if(!!t.$isbh||g==null)s=!0
else s=!1
if(s){this.b3(a,b,c,d,e,f,P.lh(g))
return}if(!!t.$isbi)s=!0
else s=!1
if(s){this.b4(a,b,c,d,e,f,g)
return}if(!!t.$isaS)s=!0
else s=!1
if(s){this.b5(a,b,c,d,e,f,g)
return}if(!!t.$isbq)s=!0
else s=!1
if(s){this.b6(a,b,c,d,e,f,g)
return}if(!!t.$isbg)t=!0
else t=!1
if(t){this.b7(a,b,c,d,e,f,g)
return}throw H.e(P.e3("Incorrect number or type of arguments"))},
cF:function(a,b,c,d,e,f,g){return this.bj(a,b,c,d,e,f,g,null,null,null)},
b3:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b4:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b5:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b6:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b7:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cG:function(a,b,c,d){return a.texParameterf(b,c,d)},
cH:function(a,b,c,d){return a.texParameteri(b,c,d)},
cI:function(a,b,c){return a.uniform1f(b,c)},
cJ:function(a,b,c){return a.uniform1fv(b,c)},
cK:function(a,b,c){return a.uniform1i(b,c)},
cL:function(a,b,c){return a.uniform1iv(b,c)},
cM:function(a,b,c){return a.uniform2fv(b,c)},
cN:function(a,b,c){return a.uniform3fv(b,c)},
cO:function(a,b,c){return a.uniform4fv(b,c)},
cP:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cQ:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cS:function(a,b){return a.useProgram(b)},
cU:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cV:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isa:1}
P.iJ.prototype={$isa:1}
P.h0.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return P.iT(this.e1(a,b))},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
e1:function(a,b){return a.item(b)},
$isd:1,
$asd:function(){return[P.aH]},
$isc:1,
$asc:function(){return[P.aH]}}
P.cF.prototype={$isd:1,
$asd:function(){return[P.aH]},
$isc:1,
$asc:function(){return[P.aH]}}
P.d1.prototype={$isd:1,
$asd:function(){return[P.aH]},
$isc:1,
$asc:function(){return[P.aH]}}
B.je.prototype={
$1:function(a){$.$get$iU().j(0,a.which,!0)},
$S:function(){return{func:1,args:[W.aZ]}}}
B.jf.prototype={
$1:function(a){$.$get$iU().j(0,a.which,null)},
$S:function(){return{func:1,args:[W.aZ]}}}
B.jg.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.nz=t
$.nA=C.b.ae(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.jV=s-C.b.L(window.innerWidth,2)
$.lq=-(t-C.b.L(window.innerHeight,2))},
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
B.ft.prototype={
dA:function(a,b,c,d){var t
d.toString
W.an(d,W.nI().$1(d),new B.fu(this),!1,W.b4)
W.an(d,"mousemove",new B.fv(this),!1,W.S)
t=W.b2
W.an(d,"touchstart",new B.fw(),!1,t)
W.an(d,"touchmove",new B.fx(this),!1,t)
B.nY(null)}}
B.fu.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.aw.geC(a)*r.k3
if(C.c.ae(r.fy,t)>0)r.fy=H.a1(C.c.ae(r.fy,t))}catch(q){s=H.R(q)
P.aq(s)}},
$S:function(){return{func:1,args:[W.b4]}}}
B.fv.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=H.a1(t.go+C.b.ae($.jV,$.cj)*0.01)
s=t.id
r=$.ck
q=$.lq
t.id=H.a1(s+(r-q)*0.01)
$.cj=$.jV
$.ck=q}},
$S:function(){return{func:1,args:[W.S]}}}
B.fw.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.ab(t.clientX)
C.c.ab(t.clientY)
$.cj=s
C.c.ab(t.clientX)
$.ck=C.c.ab(t.clientY)},
$S:function(){return{func:1,args:[W.b2]}}}
B.fx.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.ab(t.clientX)
t=C.c.ab(t.clientY)
r=this.a
r.go=H.a1(r.go+C.b.ae(s,$.cj)*0.01)
r.id=H.a1(r.id+($.ck-t)*0.01)
$.cj=s
$.ck=t},
$S:function(){return{func:1,args:[W.b2]}}}
G.fg.prototype={}
G.dL.prototype={
G:function(a,b){var t=this.d
if(H.aA(!t.H(0,a)))H.aN("uniform "+a+" already set")
t.j(0,a,b)},
bE:function(){return this.d},
k:function(a){var t,s,r,q
t=H.F(["{"+new H.aK(H.iY(this),null).k(0)+"}["+this.a+"]"],[P.u])
for(s=this.d,r=s.gI(s),r=r.gB(r);r.q();){q=r.gt()
C.a.i(t,H.i(q)+": "+H.i(s.h(0,q)))}return C.a.aa(t,"\n")}}
G.e7.prototype={}
G.e9.prototype={
cs:function(a,b,c){J.lT(this.a,b)
if(c>0)J.mi(this.a,b,c)}}
G.eM.prototype={}
G.z.prototype={}
G.bf.prototype={}
G.aV.prototype={
T:function(a){var t=this.e
H.b(!t.H(0,a))
H.b(C.i.bw(a,"a"))
switch($.$get$W().h(0,a).a){case"vec2":t.j(0,a,H.F([],[T.r]))
break
case"vec3":t.j(0,a,H.F([],[T.h]))
break
case"vec4":t.j(0,a,H.F([],[T.aM]))
break
case"float":t.j(0,a,H.F([],[P.Q]))
break
case"uvec4":t.j(0,a,H.F([],[[P.c,P.o]]))
break
default:if(H.aA(!1))H.aN("unknown type for "+a)}},
dk:function(a){var t,s,r
H.b(!0)
t=this.d.length
for(s=this.c,r=0;r<a;++r,t+=4)C.a.i(s,new G.bf(t,t+1,t+2,t+3))},
ag:function(a){var t,s,r,q,p
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.E)(a),++r){q=a[r]
p=new T.h(new Float32Array(3))
p.v(q)
C.a.i(s,p)}},
dl:function(a){var t,s,r,q,p
H.b(!0)
t=this.d
s=t.length
C.a.i(this.b,new G.z(s,s+1,s+2))
for(r=0;r<3;++r){q=a[r]
p=new T.h(new Float32Array(3))
p.v(q)
C.a.i(t,p)}},
aw:function(a,b){var t,s,r,q,p,o,n
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.E)(b),++q){p=b[q]
o=new Float32Array(2)
n=p.a
o[1]=n[1]
o[0]=n[0]
r.i(t,new T.r(o))}},
ax:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.E)(b),++q){p=b[q]
o=new T.h(new Float32Array(3))
o.v(p)
r.i(t,o)}},
dm:function(a){var t,s,r,q,p
H.b(!0)
t=this.d
s=t.length
C.a.i(this.c,new G.bf(s,s+1,s+2,s+3))
for(r=0;r<4;++r){q=a[r]
p=new T.h(new Float32Array(3))
p.v(q)
C.a.i(t,p)}},
ds:function(){var t,s,r,q,p,o,n,m,l,k
t=this.b
H.b(t.length>0||this.c.length>0)
s=this.c
r=new Array(t.length*3+s.length*6)
r.fixed$length=Array
q=H.F(r,[P.o])
for(r=t.length,p=0,o=0;n=t.length,o<n;n===r||(0,H.E)(t),++o){m=t[o]
q[p]=m.a
q[p+1]=m.b
q[p+2]=m.c
p+=3}for(t=s.length,o=0;r=s.length,o<r;r===t||(0,H.E)(s),++o){l=s[o]
n=l.a
q[p]=n
q[p+1]=l.b
k=l.c
q[p+2]=k
q[p+3]=n
q[p+4]=k
q[p+5]=l.d
p+=6}H.b(p===q.length)
return q},
du:function(a,b){var t,s,r,q,p,o,n,m
t=a*b
H.b(this.d.length===t)
s=[]
this.e.j(0,"aTexUV",s)
for(r=b-1,q=a-1,p=0;p<b;++p)for(o=p/r,n=0;n<a;++n){m=new Float32Array(2)
m[0]=o
m[1]=n/q
C.a.i(s,new T.r(m))}H.b(s.length===t)},
dt:function(a,b,c){var t,s,r,q,p,o,n,m,l
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
C.a.i(t,new G.bf(p+m,l+m,l+n,p+n))
n=m}q=o}},
k:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gI(s),r=r.gB(r);r.q();){q=r.gt()
p=$.$get$W().h(0,q).a
C.a.i(t,H.i(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.aa(t," ")}}
G.dJ.prototype={}
G.bo.prototype={}
G.dp.prototype={
dz:function(a){this.G("cDepthTest",!0)
this.G("cDepthWrite",!0)
this.G("cBlendEquation",$.$get$kc())
this.G("cStencilFunc",$.$get$jH())}}
G.dq.prototype={
bB:function(a,b,c){var t,s
if(C.i.aT(a,0)===105){if(H.aA(C.b.aR(b.length,c)===this.z))H.aN("ChangeAttribute "+this.z)}else{t=C.b.aR(b.length,c)
if(H.aA(t===(this.ch.length/3|0)))H.aN("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}this.cy.j(0,a,b)
t=this.d
s=this.r.h(0,a)
J.dY(t.a,34962,s)
J.k_(t.a,34962,b,35048)},
bC:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
af:function(a,b,c){var t,s,r,q,p,o
t=J.jX(a,0)===105
if(t&&this.z===0)this.z=C.b.aR(b.length,c)
s=this.r
r=this.d
s.j(0,a,J.jo(r.a))
this.bB(a,b,c)
q=$.$get$W().h(0,a)
if(q==null)throw H.e("Unknown canonical "+a)
p=this.x
if(H.aA(p.H(0,a)))H.aN("unexpected attribute "+a)
o=p.h(0,a)
J.dZ(r.a,this.e)
r.cs(0,o,t?1:0)
s=s.h(0,a)
p=q.bD()
J.dY(r.a,34962,s)
J.k9(r.a,o,p,5126,!1,0,0)},
ag:function(a){var t,s,r,q,p
t=this.r
s=this.d
t.j(0,"aPosition",J.jo(s.a))
this.ch=a
this.bB("aPosition",a,3)
r=$.$get$W().h(0,"aPosition")
if(r==null)throw H.e("Unknown canonical aPosition")
q=this.x
H.b(q.H(0,"aPosition"))
p=q.h(0,"aPosition")
J.dZ(s.a,this.e)
s.cs(0,p,0)
t=t.h(0,"aPosition")
q=r.bD()
J.dY(s.a,34962,t)
J.k9(s.a,p,q,5126,!1,0,0)},
k:function(a){var t,s,r,q
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,r=t.gI(t),r=r.gB(r);r.q();){q=r.gt()
C.a.i(s,H.i(q)+":"+t.h(0,q).length)}return"MESH["+this.a+"] "+C.a.aa(s,"  ")},
saX:function(a){this.cx=a}}
G.fA.prototype={
dn:function(a,b){var t=C.b.cX(a,b)
if(this.z===t)return
this.z=t
this.bF()},
bF:function(){var t,s,r,q,p,o,n
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
t.ad(0,0,1/(p*s))
t.ad(1,1,1/p)
t.ad(2,2,(q+r)/o)
t.ad(3,2,-1)
t.ad(2,3,2*r*q/o)},
bE:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
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
s=J.v(n)
r=!!s.$isaM
k=r?s.gaL(n):1
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
G.ej.prototype={
k:function(a){return"["+this.a+"] "+this.b+" "+this.c+" mode:"+this.d+" ["+this.e.a+"usec]"}}
G.fO.prototype={
dH:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gl(t)===s.gl(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gI(s),s=s.gB(s);s.q();){q=s.gt()
if(!t.H(0,q))C.a.i(r,q)}for(t=this.x,s=new P.c9(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.q();){q=s.d
if(!t.E(0,q))C.a.i(r,q)}return r},
dJ:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gI(b),s=s.gB(s),r=this.d,q=this.y,p=this.z,o=0;s.q();){n=s.gt()
switch(J.jX(n,0)){case 117:if(q.H(0,n)){m=b.h(0,n)
if(p.H(0,n))H.jc("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.j(0,n,a)
l=$.$get$W().h(0,n)
if(l==null)H.K("unknown "+n)
H.b(q.H(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.jt(r.a,k,m)
else if(!!J.v(m).$iskB)J.mg(r.a,k,m)
break
case"float":if(l.c===0)J.me(r.a,k,m)
else if(!!J.v(m).$iseJ)J.mf(r.a,k,m)
break
case"mat4":if(l.c===0){j=H.aO(m,"$isH").a
J.k8(r.a,k,!1,j)}else if(!!J.v(m).$iseJ)J.k8(r.a,k,!1,m)
else if(H.aA(!1))H.aN("bad unform: "+n)
break
case"mat3":if(l.c===0){j=H.aO(m,"$isa9").a
J.k7(r.a,k,!1,j)}else if(!!J.v(m).$iseJ)J.k7(r.a,k,!1,m)
else if(H.aA(!1))H.aN("bad unform: "+n)
break
case"vec4":j=l.c
i=r.a
if(j===0)J.k6(i,k,H.aO(m,"$isaM").a)
else J.k6(i,k,m)
break
case"vec3":j=l.c
i=r.a
if(j===0)J.k5(i,k,H.aO(m,"$ish").a)
else J.k5(i,k,m)
break
case"vec2":j=l.c
i=r.a
if(j===0)J.k4(i,k,H.aO(m,"$isr").a)
else J.k4(i,k,m)
break
case"sampler2D":case"sampler2DShadow":j=C.b.a5(33984,this.ch)
J.jY(r.a,j)
j=H.aO(m,"$isc4").b
J.cl(r.a,3553,j)
j=this.ch
J.jt(r.a,k,j)
this.ch=this.ch+1
break
case"samplerCube":H.b(n==="uCubeTexture")
j=C.b.a5(33984,this.ch)
J.jY(r.a,j)
j=H.aO(m,"$isc4").b
J.cl(r.a,34067,j)
j=this.ch
J.jt(r.a,k,j)
this.ch=this.ch+1
break
default:H.jc("Error: unknow uniform type: "+j)
H.b(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":j=J.I(m,!0)
i=r.a
if(j)J.cm(i,2929)
else J.jp(i,2929)
break
case"cStencilFunc":H.aO(m,"$isdJ")
j=m.a
i=r.a
if(j===1281)J.jp(i,2960)
else{J.cm(i,2960)
i=m.b
h=m.c
J.m9(r.a,j,i,h)}break
case"cDepthWrite":J.lN(r.a,m)
break
case"cBlendEquation":H.aO(m,"$isbo")
j=m.a
i=r.a
if(j===1281)J.jp(i,3042)
else{J.cm(i,3042)
i=m.b
h=m.c
J.lH(r.a,i,h)
J.lG(r.a,j)}break}++o
break}}s=Date.now()
""+o
new P.aE(1000*(s-new P.bd(t,!1).a)).k(0)},
dr:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t=Date.now()
s=this.d
J.mh(s.a,this.r)
this.ch=0
this.z.a_(0)
for(r=b.length,q=0;q<b.length;b.length===r||(0,H.E)(b),++q){p=b[q]
this.dJ(p.a,p.bE())}r=this.Q
r.a_(0)
for(o=a.cy,o=o.gI(o),o=o.gB(o);o.q();)r.i(0,o.gt())
n=this.dH()
if(n.length!==0)P.aq("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.i(n)))
J.dZ(a.d.a,a.e)
m=this.e.f.length>0
r=a.f
o=a.bC()
l=a.Q
k=a.z
if(m)J.lE(s.a,r)
if(l!==-1){j=s.a
if(k>1)J.lR(j,r,o,l,0,k)
else J.lQ(j,r,o,l,0)}else{l=s.a
if(k>1)J.lP(l,r,0,o,k)
else J.lO(l,r,0,o)}if(m)J.lU(s.a)
C.a.i(c,new G.ej(this.a,a.z,a.bC(),r,P.mw(0,0,0,Date.now()-new P.bd(t,!1).a,0,0)))},
dC:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.E)(t),++o){n=t[o]
r.j(0,n,J.k2(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.E)(t),++o){n=t[o]
r.j(0,n,J.k2(q.a,p,n))}}}
G.A.prototype={
bD:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.b(!1)
return-1}}}
G.bn.prototype={
bz:function(a){var t,s,r,q,p
H.b(this.b==null)
for(t=a.length,s=this.c,r=this.x,q=0;q<a.length;a.length===t||(0,H.E)(a),++q){p=a[q]
H.b($.$get$W().H(0,p))
H.b(!C.a.E(s,p))
C.a.i(s,p)
r.j(0,p,this.r);++this.r}C.a.aP(s)},
ay:function(a){var t,s,r,q
H.b(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.E)(a),++r){q=a[r]
if(H.aA($.$get$W().H(0,q)))H.aN("missing uniform "+q)
H.b(!C.a.E(s,q))
C.a.i(s,q)}C.a.aP(s)},
bA:function(a){var t,s,r
H.b(this.b==null)
for(t=this.e,s=0;s<1;++s){r=a[s]
H.b($.$get$W().H(0,r))
H.b(!C.a.E(t,r))
C.a.i(t,r)}C.a.aP(t)},
dD:function(a,b){H.b(this.b==null)
this.b=this.dK(!0,a,b)},
az:function(a){return this.dD(a,null)},
dK:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.b(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.E)(t),++o){n=t[o]
m=$.$get$W().h(0,n)
C.a.i(q,"layout (location="+H.i(p.h(0,n))+") in "+m.a+" "+H.i(n)+";")}C.a.i(q,"")
l=r?"in":"out"
if(r)C.a.i(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.E)(t),++o){k=t[o]
m=$.$get$W().h(0,k)
C.a.i(q,l+" "+m.a+" "+H.i(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.E)(t),++o){k=t[o]
m=$.$get$W().h(0,k)
C.a.i(q,l+" "+m.a+" "+H.i(k)+";")}C.a.i(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.E)(t),++o){k=t[o]
m=$.$get$W().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.i(q,"uniform "+m.a+" "+H.i(k)+j+";")}C.a.i(q,"")
C.a.i(q,"void main(void) {")
C.a.M(q,b)
C.a.i(q,"}")
return C.a.aa(q,"\n")}}
G.fZ.prototype={
a6:function(a,b,c){var t=this.d.a
t[12]=a
t[13]=b
t[14]=c}}
G.hj.prototype={}
G.c4.prototype={
k:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.eS.prototype={
dE:function(a){var t,s
t=this.d
s=this.c
J.cl(t.a,s,this.b)
J.ma(t.a,s,0,6408,6408,5121,a)},
dv:function(a,b,c,d,e){var t,s,r,q
t=this.d
s=this.c
J.cl(t.a,s,this.b)
J.m6(t.a,37440,1)
this.dE(this.f)
r=this.e
q=r.e
if(q!==1)J.mb(t.a,s,34046,q)
J.k3(t.a,s,10240,r.r)
J.k3(t.a,s,10241,r.f)
H.b(J.m1(t.a)===0)
J.cl(t.a,s,null)}}
R.dD.prototype={
cC:function(a){var t,s,r
t=this.db
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.aq("size change "+H.i(s)+" "+H.i(r))
this.dx.dn(s,r)
this.z=s
this.Q=r}}
R.h2.prototype={
dN:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.nd("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.x).bL(r,"float")
r.setProperty(p,"left","")
p=C.x.bL(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.q.V(t,s)}return t},
dF:function(a,b,c){var t,s,r
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
r=this.dN(b,c,90,30)
this.d=r
J.jm(this.a,r)
t=t.createElement("div")
this.c=t
J.jm(this.a,t)}}
R.h3.prototype={
dI:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.z.fc(s,2)+" fps"
t=this.c;(t&&C.q).d9(t,b)
r=C.b.L(30*C.z.es(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.q).V(t,q)}}
A.aI.prototype={
k:function(a){return"NODE["+this.a+"]"}}
A.bY.prototype={}
A.fN.prototype={
dq:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.d
s=this.r
r=this.z
q=this.Q
p=t.a
t=t.b
J.lF(p.a,36160,t)
H.b(r>0&&q>0)
J.mj(p.a,this.x,this.y,r,q)
if(s!==0)J.lI(p.a,s)
for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.E)(t),++o){n=t[o]
m=n.e
C.a.i(m,new G.dL(P.G(),"transforms",!1,!0))
l=new T.H(new Float32Array(16))
l.F()
for(r=n.f,q=r.length,p=n.d,k=0;k<r.length;r.length===q||(0,H.E)(r),++k)A.li(p,r[k],l,a,m)
m.pop()}},
dB:function(a,b,c){if(this.d==null)this.d=new G.eM(this.e,null,null,null,null)}}
B.fW.prototype={
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
D.f7.prototype={
$1:function(a){return this.a.bc(0,this.b)},
$S:function(){return{func:1,args:[,]}}}
A.iZ.prototype={
$2:function(a,b){var t=536870911&a+J.as(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(){return{func:1,args:[P.o,P.p]}}}
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
gw:function(a){return A.dV(this.a)},
X:function(a){var t,s
t=new Float32Array(H.f(3))
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.h(t)},
ex:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
ad:function(a,b,c){H.b(a<4)
H.b(b<4)
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
gw:function(a){return A.dV(this.a)},
X:function(a){var t,s
t=new Float32Array(H.f(4))
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.aM(t)},
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
T.r.prototype={
k:function(a){var t=this.a
return"["+H.i(t[0])+","+H.i(t[1])+"]"},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.r){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gw:function(a){return A.dV(this.a)},
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
gw:function(a){return A.dV(this.a)},
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
cl:function(a){var t,s,r,q,p,o,n,m
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
aF:function(a,b){var t,s
t=a.a
s=this.a
s[0]=s[0]+t[0]*b
s[1]=s[1]+t[1]*b
s[2]=s[2]+t[2]*b},
av:function(a){var t,s
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
T.aM.prototype={
k:function(a){var t=this.a
return H.i(t[0])+","+H.i(t[1])+","+H.i(t[2])+","+H.i(t[3])},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aM){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gw:function(a){return A.dV(this.a)},
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
gaL:function(a){return this.a[3]}}
V.j9.prototype={
$1:function(b6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
t=this.a
t.a=b6+0
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
s.id=0}r=H.a1(C.c.eu(s.id,-1.4707963267948965,1.4707963267948965))
s.id=r
q=s.fy
p=s.go
o=q*Math.cos(r)
s.a6(o*Math.cos(p),q*Math.sin(r),o*Math.sin(p))
p=s.k2
r=s.d.a
q=p.a
r[12]=r[12]+q[0]
r[13]=r[13]+q[1]
r[14]=r[14]+q[2]
q=r[12]
n=r[13]
m=r[14]
l=new T.h(new Float32Array(H.f(3)))
l.p(0,1,0)
k=s.e
j=k.a
j[0]=r[12]
j[1]=r[13]
j[2]=r[14]
j=new Float32Array(H.f(3))
i=new T.h(j)
i.v(k)
i.av(p)
i.C(0)
h=l.cl(i)
h.C(0)
g=i.cl(h)
g.C(0)
p=h.bd(k)
f=g.bd(k)
k=i.bd(k)
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
b3=[]
this.d.dq(b3)
b4=[]
for(s=b3.length,b5=0;b5<b3.length;b3.length===s||(0,H.E)(b3),++b5)C.a.i(b4,b3[b5].k(0))
C.ax.gel(window).aK(this)
this.b.dI(t.a,C.a.aa(b4,"<br>"))},
$S:function(){return{func:1,v:true,args:[P.Y]}}}
V.ja.prototype={
$1:function(a){var t,s
t=this.a
s=J.a2(a)
this.c.G("uTexture",G.eT(t,"../gradient.jpg",s.h(a,0),null,3553))
this.d.G("uTexture",G.eT(t,"../transparent.png",s.h(a,1),null,3553))
this.b.G("uTexture",G.eT(t,"../wood.jpg",s.h(a,2),null,3553))
this.e.$1(0)},
$S:function(){return{func:1,args:[P.c]}}}
J.a.prototype.df=J.a.prototype.k
J.bM.prototype.dh=J.bM.prototype.k
P.Z.prototype.dg=P.Z.prototype.aM
W.a6.prototype.aQ=W.a6.prototype.P
W.cb.prototype.di=W.cb.prototype.Z;(function installTearOffs(){installTearOff(H.b7.prototype,"geW",0,0,0,null,["$0"],["aI"],0)
installTearOff(H.ao.prototype,"gd1",0,0,0,null,["$1"],["N"],2)
installTearOff(H.b6.prototype,"geE",0,0,0,null,["$1"],["a0"],2)
installTearOff(P,"nv",1,0,0,null,["$1"],["na"],1)
installTearOff(P,"nw",1,0,0,null,["$1"],["nb"],1)
installTearOff(P,"nx",1,0,0,null,["$1"],["nc"],1)
installTearOff(P,"lf",1,0,0,null,["$0"],["nt"],0)
installTearOff(P.O.prototype,"gbQ",0,0,0,null,["$2","$1"],["U","dU"],5)
installTearOff(P,"nD",1,0,0,null,["$2"],["mq"],7)
installTearOff(W,"nI",1,0,0,null,["$1"],["my"],8)
installTearOff(W,"nJ",1,0,0,null,["$4"],["ng"],4)
installTearOff(W,"nK",1,0,0,null,["$4"],["nh"],4)
installTearOff(W.dw.prototype,"gbg",0,1,0,null,["$0"],["bh"],3)
installTearOff(W.dK.prototype,"gbg",0,1,0,null,["$0"],["bh"],3)
installTearOff(R.dD.prototype,"gf4",0,0,0,null,["$1"],["cC"],6)
installTearOff(V,"lg",1,0,0,null,["$0"],["nS"],0)})();(function inheritance(){inherit(P.p,null)
var t=P.p
inherit(H.jz,t)
inherit(J.a,t)
inherit(J.e4,t)
inherit(P.Z,t)
inherit(H.dm,t)
inherit(P.di,t)
inherit(H.cy,t)
inherit(H.bb,t)
inherit(H.io,t)
inherit(H.b7,t)
inherit(H.hV,t)
inherit(H.b8,t)
inherit(H.im,t)
inherit(H.hN,t)
inherit(H.bm,t)
inherit(H.hl,t)
inherit(H.at,t)
inherit(H.ao,t)
inherit(H.b6,t)
inherit(H.fM,t)
inherit(H.hs,t)
inherit(P.be,t)
inherit(H.dS,t)
inherit(H.aK,t)
inherit(H.ak,t)
inherit(H.f3,t)
inherit(H.f5,t)
inherit(P.hP,t)
inherit(P.c6,t)
inherit(P.O,t)
inherit(P.dO,t)
inherit(P.c0,t)
inherit(P.h5,t)
inherit(P.ba,t)
inherit(P.iM,t)
inherit(P.fV,t)
inherit(P.ik,t)
inherit(P.c9,t)
inherit(P.bX,t)
inherit(P.y,t)
inherit(P.il,t)
inherit(P.aB,t)
inherit(P.M,t)
inherit(P.bd,t)
inherit(P.Y,t)
inherit(P.aE,t)
inherit(P.dG,t)
inherit(P.i_,t)
inherit(P.en,t)
inherit(P.c,t)
inherit(P.aH,t)
inherit(P.aJ,t)
inherit(P.c_,t)
inherit(P.u,t)
inherit(P.c1,t)
inherit(W.eb,t)
inherit(W.hM,t)
inherit(W.c8,t)
inherit(W.C,t)
inherit(W.dy,t)
inherit(W.cb,t)
inherit(W.iE,t)
inherit(W.cz,t)
inherit(W.dx,t)
inherit(W.iy,t)
inherit(W.dT,t)
inherit(P.ii,t)
inherit(P.iq,t)
inherit(G.fg,t)
inherit(G.e9,t)
inherit(G.eM,t)
inherit(G.z,t)
inherit(G.bf,t)
inherit(G.aV,t)
inherit(G.dJ,t)
inherit(G.bo,t)
inherit(G.ej,t)
inherit(G.A,t)
inherit(G.bn,t)
inherit(G.hj,t)
inherit(G.c4,t)
inherit(R.h2,t)
inherit(T.a9,t)
inherit(T.H,t)
inherit(T.r,t)
inherit(T.h,t)
inherit(T.aM,t)
t=J.a
inherit(J.eZ,t)
inherit(J.f_,t)
inherit(J.bM,t)
inherit(J.aW,t)
inherit(J.bj,t)
inherit(J.aX,t)
inherit(H.bQ,t)
inherit(H.bl,t)
inherit(W.j,t)
inherit(W.a4,t)
inherit(W.co,t)
inherit(W.cp,t)
inherit(W.cq,t)
inherit(W.B,t)
inherit(W.cD,t)
inherit(W.ed,t)
inherit(W.ee,t)
inherit(W.ef,t)
inherit(W.cu,t)
inherit(W.cv,t)
inherit(W.cw,t)
inherit(W.cO,t)
inherit(W.ei,t)
inherit(W.k,t)
inherit(W.cN,t)
inherit(W.a8,t)
inherit(W.eP,t)
inherit(W.cS,t)
inherit(W.bg,t)
inherit(W.bh,t)
inherit(W.f8,t)
inherit(W.fd,t)
inherit(W.aa,t)
inherit(W.cM,t)
inherit(W.fp,t)
inherit(W.dw,t)
inherit(W.cR,t)
inherit(W.fy,t)
inherit(W.bp,t)
inherit(W.ab,t)
inherit(W.cK,t)
inherit(W.am,t)
inherit(W.dB,t)
inherit(W.ad,t)
inherit(W.cJ,t)
inherit(W.ae,t)
inherit(W.h4,t)
inherit(W.a_,t)
inherit(W.cI,t)
inherit(W.hk,t)
inherit(W.ag,t)
inherit(W.cH,t)
inherit(W.hp,t)
inherit(W.dK,t)
inherit(W.hw,t)
inherit(W.hB,t)
inherit(W.hO,t)
inherit(W.cX,t)
inherit(W.cW,t)
inherit(W.cV,t)
inherit(W.cQ,t)
inherit(W.cU,t)
inherit(W.cT,t)
inherit(W.iK,t)
inherit(W.iL,t)
inherit(P.au,t)
inherit(P.cG,t)
inherit(P.av,t)
inherit(P.cL,t)
inherit(P.fE,t)
inherit(P.fF,t)
inherit(P.fK,t)
inherit(P.cE,t)
inherit(P.ax,t)
inherit(P.cP,t)
inherit(P.hA,t)
inherit(P.e5,t)
inherit(P.fP,t)
inherit(P.fQ,t)
inherit(P.iJ,t)
inherit(P.cF,t)
t=J.bM
inherit(J.fC,t)
inherit(J.b3,t)
inherit(J.aY,t)
inherit(J.jy,J.aW)
t=J.bj
inherit(J.dk,t)
inherit(J.dj,t)
t=P.Z
inherit(H.d,t)
inherit(H.dn,t)
inherit(H.dN,t)
t=H.d
inherit(H.bk,t)
inherit(H.f4,t)
inherit(H.em,H.dn)
t=P.di
inherit(H.f9,t)
inherit(H.hD,t)
t=H.bk
inherit(H.bN,t)
inherit(P.f6,t)
t=H.bb
inherit(H.jj,t)
inherit(H.jk,t)
inherit(H.ih,t)
inherit(H.hW,t)
inherit(H.eW,t)
inherit(H.eX,t)
inherit(H.ip,t)
inherit(H.hm,t)
inherit(H.hn,t)
inherit(H.jl,t)
inherit(H.j3,t)
inherit(H.j4,t)
inherit(H.j5,t)
inherit(H.j6,t)
inherit(H.j7,t)
inherit(H.hf,t)
inherit(H.f0,t)
inherit(H.j_,t)
inherit(H.j0,t)
inherit(H.j1,t)
inherit(P.hJ,t)
inherit(P.hI,t)
inherit(P.hK,t)
inherit(P.hL,t)
inherit(P.eO,t)
inherit(P.eN,t)
inherit(P.i0,t)
inherit(P.i8,t)
inherit(P.i4,t)
inherit(P.i5,t)
inherit(P.i6,t)
inherit(P.i2,t)
inherit(P.i7,t)
inherit(P.i1,t)
inherit(P.ib,t)
inherit(P.ic,t)
inherit(P.ia,t)
inherit(P.i9,t)
inherit(P.h8,t)
inherit(P.h9,t)
inherit(P.h6,t)
inherit(P.h7,t)
inherit(P.iN,t)
inherit(P.iQ,t)
inherit(P.it,t)
inherit(P.is,t)
inherit(P.iu,t)
inherit(P.fa,t)
inherit(P.ek,t)
inherit(P.el,t)
inherit(W.iR,t)
inherit(W.hE,t)
inherit(W.hZ,t)
inherit(W.fr,t)
inherit(W.fq,t)
inherit(W.iA,t)
inherit(W.iB,t)
inherit(W.iH,t)
inherit(W.iI,t)
inherit(P.iS,t)
inherit(B.je,t)
inherit(B.jf,t)
inherit(B.jg,t)
inherit(B.jh,t)
inherit(B.ji,t)
inherit(B.fu,t)
inherit(B.fv,t)
inherit(B.fw,t)
inherit(B.fx,t)
inherit(B.fW,t)
inherit(D.f7,t)
inherit(A.iZ,t)
inherit(V.j9,t)
inherit(V.ja,t)
t=H.hN
inherit(H.bs,t)
inherit(H.cc,t)
t=P.be
inherit(H.dz,t)
inherit(H.f1,t)
inherit(H.hv,t)
inherit(H.hu,t)
inherit(H.e8,t)
inherit(H.fS,t)
inherit(P.cn,t)
inherit(P.bW,t)
inherit(P.ai,t)
inherit(P.w,t)
inherit(P.dM,t)
inherit(P.aw,t)
inherit(P.a5,t)
inherit(P.ec,t)
t=H.hf
inherit(H.h1,t)
inherit(H.bB,t)
inherit(H.hG,P.cn)
t=H.bl
inherit(H.fh,t)
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
inherit(H.fi,t)
t=H.du
inherit(H.fj,t)
inherit(H.fk,t)
inherit(H.fl,t)
inherit(H.fm,t)
inherit(H.fn,t)
inherit(H.dv,t)
inherit(H.fo,t)
t=P.hP
inherit(P.hH,t)
inherit(P.iF,t)
inherit(P.ir,P.iM)
inherit(P.dQ,H.ak)
inherit(P.fU,P.fV)
inherit(P.ig,P.fU)
inherit(P.ij,P.ig)
inherit(P.dl,P.bX)
t=P.Y
inherit(P.Q,t)
inherit(P.o,t)
t=P.ai
inherit(P.dC,t)
inherit(P.eU,t)
t=W.j
inherit(W.t,t)
inherit(W.bG,t)
inherit(W.ea,t)
inherit(W.eH,t)
inherit(W.bL,t)
inherit(W.bP,t)
inherit(W.fH,t)
inherit(W.dE,t)
inherit(W.fX,t)
inherit(W.ac,t)
inherit(W.bF,t)
inherit(W.af,t)
inherit(W.a0,t)
inherit(W.bE,t)
inherit(W.hy,t)
inherit(W.hC,t)
inherit(W.c5,t)
inherit(W.hF,t)
inherit(W.b5,t)
inherit(W.iz,t)
t=W.t
inherit(W.a6,t)
inherit(W.aT,t)
inherit(W.bC,t)
inherit(W.ct,t)
inherit(W.hR,t)
t=W.a6
inherit(W.m,t)
inherit(P.L,t)
t=W.m
inherit(W.e1,t)
inherit(W.e2,t)
inherit(W.aR,t)
inherit(W.aS,t)
inherit(W.cs,t)
inherit(W.eL,t)
inherit(W.cB,t)
inherit(W.bi,t)
inherit(W.eV,t)
inherit(W.bO,t)
inherit(W.fT,t)
inherit(W.dH,t)
inherit(W.hd,t)
inherit(W.he,t)
inherit(W.c2,t)
inherit(W.ie,t)
inherit(W.bJ,W.bG)
inherit(W.e6,W.bJ)
inherit(W.bc,W.cD)
inherit(W.eg,W.cv)
inherit(W.dg,W.cO)
inherit(W.eh,W.dg)
inherit(W.a7,W.co)
inherit(W.de,W.cN)
inherit(W.eG,W.de)
inherit(W.cZ,W.cS)
inherit(W.bK,W.cZ)
inherit(W.cC,W.bC)
inherit(W.eQ,W.bL)
inherit(W.aL,W.k)
t=W.aL
inherit(W.aZ,t)
inherit(W.S,t)
inherit(W.b2,t)
inherit(W.fe,W.bP)
inherit(W.d8,W.cM)
inherit(W.ff,W.d8)
inherit(W.V,P.dl)
inherit(W.d9,W.cR)
inherit(W.bV,W.d9)
t=W.bp
inherit(W.fB,t)
inherit(W.fR,t)
inherit(W.hr,t)
inherit(W.da,W.cK)
inherit(W.fD,W.da)
inherit(W.fG,W.am)
inherit(W.bI,W.bF)
inherit(W.fY,W.bI)
inherit(W.d6,W.cJ)
inherit(W.h_,W.d6)
inherit(W.d2,W.cI)
inherit(W.hh,W.d2)
inherit(W.bH,W.bE)
inherit(W.hi,W.bH)
inherit(W.dd,W.cH)
inherit(W.ho,W.dd)
inherit(W.bq,W.bO)
inherit(W.b4,W.S)
inherit(W.db,W.cX)
inherit(W.dP,W.db)
inherit(W.cY,W.cW)
inherit(W.hQ,W.cY)
inherit(W.hS,W.cw)
inherit(W.d4,W.cV)
inherit(W.id,W.d4)
inherit(W.df,W.cQ)
inherit(W.dR,W.df)
inherit(W.d0,W.cU)
inherit(W.iC,W.d0)
inherit(W.dc,W.cT)
inherit(W.iD,W.dc)
inherit(W.hT,W.hM)
inherit(W.hX,P.c0)
inherit(W.hU,W.hX)
inherit(W.hY,P.h5)
inherit(W.iG,W.cb)
inherit(P.N,P.iq)
t=P.L
inherit(P.aG,t)
inherit(P.aQ,t)
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
inherit(P.eF,t)
inherit(P.eI,t)
inherit(P.fb,t)
inherit(P.fc,t)
inherit(P.fz,t)
inherit(P.bZ,t)
inherit(P.hc,t)
inherit(P.hz,t)
inherit(P.c7,t)
inherit(P.iv,t)
inherit(P.iw,t)
inherit(P.ix,t)
t=P.aG
inherit(P.e0,t)
inherit(P.eK,t)
inherit(P.aj,t)
inherit(P.eR,t)
inherit(P.hb,t)
inherit(P.dI,t)
inherit(P.hx,t)
inherit(P.d_,P.cG)
inherit(P.f2,P.d_)
inherit(P.d7,P.cL)
inherit(P.fs,P.d7)
inherit(P.fL,P.aj)
inherit(P.d5,P.cE)
inherit(P.ha,P.d5)
t=P.dI
inherit(P.hg,t)
inherit(P.c3,t)
inherit(P.d3,P.cP)
inherit(P.hq,P.d3)
inherit(P.d1,P.cF)
inherit(P.h0,P.d1)
t=G.fg
inherit(G.fZ,t)
inherit(G.dL,t)
inherit(G.dq,t)
inherit(G.fO,t)
inherit(A.fN,t)
inherit(A.bY,t)
t=G.fZ
inherit(G.e7,t)
inherit(A.aI,t)
inherit(B.ft,G.e7)
t=G.dL
inherit(G.dp,t)
inherit(G.fA,t)
inherit(G.eS,G.c4)
inherit(R.dD,A.fN)
inherit(R.h3,R.h2)
mixin(H.bR,P.y)
mixin(H.bS,P.y)
mixin(H.bT,H.cy)
mixin(H.bU,H.cy)
mixin(P.bX,P.y)
mixin(W.bE,P.y)
mixin(W.bF,P.y)
mixin(W.bG,P.y)
mixin(W.bH,W.C)
mixin(W.bI,W.C)
mixin(W.bJ,W.C)
mixin(W.cD,W.eb)
mixin(W.cX,P.y)
mixin(W.cJ,P.y)
mixin(W.cQ,P.y)
mixin(W.cR,P.y)
mixin(W.cS,P.y)
mixin(W.cT,P.y)
mixin(W.cU,P.y)
mixin(W.cV,P.y)
mixin(W.cW,P.y)
mixin(W.cH,P.y)
mixin(W.cI,P.y)
mixin(W.cK,P.y)
mixin(W.cM,P.y)
mixin(W.cN,P.y)
mixin(W.cO,P.y)
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
mixin(P.cG,P.y)
mixin(P.cE,P.y)
mixin(P.cL,P.y)
mixin(P.cP,P.y)
mixin(P.d_,W.C)
mixin(P.d7,W.C)
mixin(P.d3,W.C)
mixin(P.d5,W.C)
mixin(P.cF,P.y)
mixin(P.d1,W.C)})();(function constants(){C.o=W.aR.prototype
C.w=W.aS.prototype
C.m=W.cp.prototype
C.p=W.cq.prototype
C.x=W.bc.prototype
C.q=W.cs.prototype
C.M=W.cu.prototype
C.N=W.cB.prototype
C.r=W.cC.prototype
C.O=J.a.prototype
C.a=J.aW.prototype
C.z=J.dj.prototype
C.b=J.dk.prototype
C.c=J.bj.prototype
C.i=J.aX.prototype
C.V=J.aY.prototype
C.Y=H.dr.prototype
C.D=W.bV.prototype
C.E=J.fC.prototype
C.F=W.dB.prototype
C.K=W.dH.prototype
C.v=J.b3.prototype
C.aw=W.b4.prototype
C.ax=W.c5.prototype
C.L=new P.ii()
C.d=new P.ir()
C.y=new P.aE(0)
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
C.A=function(hooks) { return hooks; }

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
C.B=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.W=H.F(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.u])
C.X=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.C=makeConstList([])
C.t=H.F(makeConstList(["bind","if","ref","repeat","syntax"]),[P.u])
C.u=H.F(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.u])
C.Z=new G.A("vec3","vertex btangents",0)
C.e=new G.A("vec3","",0)
C.a_=new G.A("vec4","delta from light",0)
C.n=new G.A("","",0)
C.G=new G.A("vec3","vertex coordinates",0)
C.a0=new G.A("vec3","vertex binormals",0)
C.H=new G.A("vec4","for wireframe",0)
C.a1=new G.A("vec4","per vertex color",0)
C.a2=new G.A("float","for normal maps",0)
C.j=new G.A("mat4","",0)
C.a4=new G.A("mat4","",4)
C.a3=new G.A("mat4","",128)
C.f=new G.A("float","",0)
C.a5=new G.A("float","",4)
C.a6=new G.A("float","depth for shadowmaps",0)
C.h=new G.A("sampler2D","",0)
C.a7=new G.A("float","for bump maps",0)
C.a8=new G.A("vec2","texture uvs",0)
C.a9=new G.A("float","time since program start in sec",0)
C.k=new G.A("vec2","",0)
C.aa=new G.A("samplerCube","",0)
C.l=new G.A("vec4","",0)
C.ab=new G.A("vec3","vertex normals",0)
C.ac=new G.A("sampler2DShadow","",0)
C.I=new G.A("vec3","per vertex color",0)
C.J=new G.A("mat3","",0)
C.ad=new G.A("vec3","vertex tangents",0)
C.ae=H.P("o2")
C.af=H.P("o3")
C.ag=H.P("eJ")
C.ah=H.P("o4")
C.ai=H.P("o5")
C.aj=H.P("kB")
C.ak=H.P("o6")
C.al=H.P("kE")
C.am=H.P("aJ")
C.an=H.P("u")
C.ao=H.P("kY")
C.ap=H.P("kZ")
C.aq=H.P("o7")
C.ar=H.P("l_")
C.as=H.P("aB")
C.at=H.P("Q")
C.au=H.P("o")
C.av=H.P("Y")})();(function staticFields(){$.kI="$cachedFunction"
$.kJ="$cachedInvocation"
$.kh=null
$.kf=null
$.jM=!1
$.jQ=null
$.lc=null
$.lu=null
$.iV=null
$.j2=null
$.jR=null
$.bt=null
$.cd=null
$.ce=null
$.jN=!1
$.x=C.d
$.kw=0
$.aF=null
$.jv=null
$.kv=null
$.ku=null
$.ks=null
$.kr=null
$.kq=null
$.kp=null
$.nz=0
$.nA=0
$.jV=0
$.lq=0
$.cj=0
$.ck=0
$.nZ=!1
$.lk=0})();(function lazyInitializers(){lazy($,"ko","$get$ko",function(){return H.ln("_$dart_dartClosure")})
lazy($,"jA","$get$jA",function(){return H.ln("_$dart_js")})
lazy($,"kC","$get$kC",function(){return H.mK()})
lazy($,"kD","$get$kD",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.kw
$.kw=t+1
t="expando$key$"+t}return new P.en(null,t,[P.o])})
lazy($,"kN","$get$kN",function(){return H.ay(H.ht({
toString:function(){return"$receiver$"}}))})
lazy($,"kO","$get$kO",function(){return H.ay(H.ht({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"kP","$get$kP",function(){return H.ay(H.ht(null))})
lazy($,"kQ","$get$kQ",function(){return H.ay(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kU","$get$kU",function(){return H.ay(H.ht(void 0))})
lazy($,"kV","$get$kV",function(){return H.ay(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kS","$get$kS",function(){return H.ay(H.kT(null))})
lazy($,"kR","$get$kR",function(){return H.ay(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"kX","$get$kX",function(){return H.ay(H.kT(void 0))})
lazy($,"kW","$get$kW",function(){return H.ay(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"jK","$get$jK",function(){return P.n9()})
lazy($,"ky","$get$ky",function(){return P.ne(null,P.aJ)})
lazy($,"cf","$get$cf",function(){return[]})
lazy($,"kn","$get$kn",function(){return{}})
lazy($,"l5","$get$l5",function(){return P.jC(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"jL","$get$jL",function(){return P.G()})
lazy($,"iU","$get$iU",function(){return P.kF(P.o,P.aB)})
lazy($,"ch","$get$ch",function(){return P.kF(P.u,P.aB)})
lazy($,"jH","$get$jH",function(){return new G.dJ(1281,0,4294967295)})
lazy($,"kc","$get$kc",function(){return new G.bo(1281,1281,1281)})
lazy($,"kd","$get$kd",function(){return new G.bo(32774,770,771)})
lazy($,"kb","$get$kb",function(){return new G.bo(32774,770,769)})
lazy($,"W","$get$W",function(){return P.b_(["cBlendEquation",C.n,"cDepthWrite",C.n,"cDepthTest",C.n,"cStencilFunc",C.n,"tPosition",C.e,"tSpeed",C.e,"tForce",C.e,"aColors",C.I,"aColorAlpha",C.a1,"aPosition",C.G,"aTexUV",C.a8,"aNormal",C.ab,"aBinormal",C.a0,"aCenter",C.H,"aPointSize",C.f,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.ad,"aBitangent",C.Z,"iaRotation",C.l,"iaTranslation",C.e,"iaScale",C.e,"vColor",C.I,"vTexUV",C.k,"vLightWeighting",C.e,"vNormal",C.e,"vPosition",C.G,"vPositionFromLight",C.a_,"vCenter",C.H,"vDepth",C.a6,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.J,"uConvolutionMatrix",C.J,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.ac,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.aa,"uAnimationTable",C.h,"uTime",C.a9,"uCameraNear",C.f,"uCameraFar",C.f,"uFogNear",C.f,"uFogFar",C.f,"uPointSize",C.f,"uScale",C.f,"uAngle",C.f,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.f,"uShininess",C.f,"uShadowBias",C.f,"uOpacity",C.f,"uColor",C.e,"uAmbientDiffuse",C.e,"uColorEmissive",C.e,"uColorSpecular",C.e,"uColorDiffuse",C.e,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.e,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a3,"uLightDescs",C.a4,"uLightCount",C.f,"uLightTypes",C.a5,"uBumpScale",C.a7,"uNormalScale",C.a2])})
lazy($,"l0","$get$l0",function(){return C.L})
lazy($,"kl","$get$kl",function(){return T.J(0.4,0.4,0.4)})
lazy($,"kk","$get$kk",function(){return T.J(0,0,0)})
lazy($,"km","$get$km",function(){return T.J(1,0,0)})
lazy($,"ly","$get$ly",function(){var t=new G.bn("Textured",null,[],[],[],[],0,P.G())
t.bz(["aPosition","aTexUV"])
t.ay(["uPerspectiveViewMatrix","uModelMatrix"])
t.bA(["vTexUV"])
t.az(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vTexUV = aTexUV;"])
return t})
lazy($,"lx","$get$lx",function(){var t=new G.bn("TexturedF",null,[],[],[],[],0,P.G())
t.bA(["vTexUV"])
t.ay(["uColor","uTexture"])
t.az(["oFragColor = texture(uTexture, vTexUV) + vec4( uColor, 0.0 );"])
return t})
lazy($,"lt","$get$lt",function(){var t=new G.bn("PointSpritesV",null,[],[],[],[],0,P.G())
t.bz(["aPosition"])
t.ay(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"])
t.az(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"])
return t})
lazy($,"ls","$get$ls",function(){var t=new G.bn("PointSpritesF",null,[],[],[],[],0,P.G())
t.ay(["uTexture"])
t.az(["oFragColor = texture( uTexture,  gl_PointCoord);"])
return t})
lazy($,"l2","$get$l2",function(){return[T.J(0,0,1),T.J(0,0,-1),T.J(0,1,0),T.J(0,-1,0),T.J(1,0,0),T.J(-1,0,0)]})
lazy($,"kz","$get$kz",function(){return[new G.z(0,11,5),new G.z(0,5,1),new G.z(0,1,7),new G.z(0,7,10),new G.z(0,10,11),new G.z(1,5,9),new G.z(5,11,4),new G.z(11,10,2),new G.z(10,7,6),new G.z(7,1,8),new G.z(3,9,4),new G.z(3,4,2),new G.z(3,2,6),new G.z(3,6,8),new G.z(3,8,9),new G.z(4,9,5),new G.z(2,4,11),new G.z(6,2,10),new G.z(8,6,7),new G.z(9,8,1)]})
lazy($,"lw","$get$lw",function(){return(1+P.o_(5))/2})
lazy($,"kA","$get$kA",function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=$.$get$lw()
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
mangledGlobalNames:{o:"int",Q:"double",Y:"num",u:"String",aB:"bool",aJ:"Null",c:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.t},{func:1,ret:P.aB,args:[W.a6,P.u,P.u,W.c8]},{func:1,v:true,args:[P.p],opt:[P.c_]},{func:1,v:true,args:[W.k]},{func:1,ret:P.o,args:[P.M,P.M]},{func:1,ret:P.u,args:[W.j]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationTimeline:J.a,AppBannerPromptResult:J.a,BarProp:J.a,Body:J.a,CacheStorage:J.a,CanvasPattern:J.a,CHROMIUMValuebuffer:J.a,CircularGeofencingRegion:J.a,Client:J.a,Clients:J.a,CompositorProxy:J.a,ConsoleBase:J.a,Coordinates:J.a,Credential:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMStringMap:J.a,EffectModel:J.a,Entry:J.a,FederatedCredential:J.a,FileEntry:J.a,FileError:J.a,Stream:J.a,DOMFileSystem:J.a,FontFace:J.a,FormData:J.a,GamepadButton:J.a,Geofencing:J.a,GeofencingRegion:J.a,Geolocation:J.a,Geoposition:J.a,Headers:J.a,HMDVRDevice:J.a,IdleDeadline:J.a,ImageBitmapRenderingContext:J.a,InjectedScriptHost:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,KeyframeEffect:J.a,MediaDeviceInfo:J.a,MediaDevices:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaMetadata:J.a,MediaSession:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigatorStorageUtils:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,OffscreenCanvas:J.a,PasswordCredential:J.a,PerformanceCompositeTiming:J.a,PerformanceEntry:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformanceRenderTiming:J.a,PerformanceResourceTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PositionError:J.a,PositionSensorVRDevice:J.a,Presentation:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,ReadableByteStream:J.a,ReadableByteStreamReader:J.a,ReadableStreamReader:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,Selection:J.a,ServicePort:J.a,SharedArrayBuffer:J.a,SourceInfo:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StorageInfo:J.a,StorageManager:J.a,StorageQuota:J.a,StyleMedia:J.a,StylePropertyMap:J.a,SyncManager:J.a,TextMetrics:J.a,TrackDefault:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRDevice:J.a,VREyeParameters:J.a,VRFieldOfView:J.a,VRPositionState:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkerConsole:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothAdvertisingData:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,NFC:J.a,PagePopupController:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WebKitCSSMatrix:J.a,Worklet:J.a,WorkletGlobalScope:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPreserveAspectRatio:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,CHROMIUMSubscribeUniform:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTDisjointTimerQuery:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bQ,ArrayBufferView:H.bl,DataView:H.fh,Float32Array:H.dr,Float64Array:H.fi,Int16Array:H.fj,Int32Array:H.fk,Int8Array:H.fl,Uint16Array:H.fm,Uint32Array:H.fn,Uint8ClampedArray:H.dv,CanvasPixelArray:H.dv,Uint8Array:H.fo,HTMLBRElement:W.m,HTMLBaseElement:W.m,HTMLButtonElement:W.m,HTMLContentElement:W.m,HTMLDListElement:W.m,HTMLDataListElement:W.m,HTMLDetailsElement:W.m,HTMLDialogElement:W.m,HTMLEmbedElement:W.m,HTMLFieldSetElement:W.m,HTMLHRElement:W.m,HTMLHeadingElement:W.m,HTMLHtmlElement:W.m,HTMLIFrameElement:W.m,HTMLKeygenElement:W.m,HTMLLIElement:W.m,HTMLLabelElement:W.m,HTMLLegendElement:W.m,HTMLLinkElement:W.m,HTMLMapElement:W.m,HTMLMenuElement:W.m,HTMLMenuItemElement:W.m,HTMLMetaElement:W.m,HTMLMeterElement:W.m,HTMLModElement:W.m,HTMLOListElement:W.m,HTMLObjectElement:W.m,HTMLOptGroupElement:W.m,HTMLOptionElement:W.m,HTMLOutputElement:W.m,HTMLParagraphElement:W.m,HTMLParamElement:W.m,HTMLPictureElement:W.m,HTMLPreElement:W.m,HTMLProgressElement:W.m,HTMLQuoteElement:W.m,HTMLScriptElement:W.m,HTMLShadowElement:W.m,HTMLSlotElement:W.m,HTMLSourceElement:W.m,HTMLSpanElement:W.m,HTMLStyleElement:W.m,HTMLTableCaptionElement:W.m,HTMLTableCellElement:W.m,HTMLTableDataCellElement:W.m,HTMLTableHeaderCellElement:W.m,HTMLTableColElement:W.m,HTMLTextAreaElement:W.m,HTMLTitleElement:W.m,HTMLTrackElement:W.m,HTMLUListElement:W.m,HTMLUnknownElement:W.m,HTMLDirectoryElement:W.m,HTMLFontElement:W.m,HTMLFrameElement:W.m,HTMLMarqueeElement:W.m,HTMLElement:W.m,HTMLAnchorElement:W.e1,HTMLAreaElement:W.e2,AudioTrack:W.a4,AudioTrackList:W.e6,Blob:W.co,HTMLBodyElement:W.aR,HTMLCanvasElement:W.aS,CanvasGradient:W.cp,CanvasRenderingContext2D:W.cq,CDATASection:W.aT,CharacterData:W.aT,Comment:W.aT,ProcessingInstruction:W.aT,Text:W.aT,CompositorWorker:W.ea,CSSCharsetRule:W.B,CSSFontFaceRule:W.B,CSSGroupingRule:W.B,CSSImportRule:W.B,CSSKeyframeRule:W.B,MozCSSKeyframeRule:W.B,WebKitCSSKeyframeRule:W.B,CSSKeyframesRule:W.B,MozCSSKeyframesRule:W.B,WebKitCSSKeyframesRule:W.B,CSSMediaRule:W.B,CSSNamespaceRule:W.B,CSSPageRule:W.B,CSSRule:W.B,CSSStyleRule:W.B,CSSSupportsRule:W.B,CSSViewportRule:W.B,CSSStyleDeclaration:W.bc,MSStyleCSSProperties:W.bc,CSS2Properties:W.bc,DataTransferItemList:W.ed,DeviceAcceleration:W.ee,HTMLDivElement:W.cs,XMLDocument:W.bC,Document:W.bC,DocumentFragment:W.ct,ShadowRoot:W.ct,DOMException:W.ef,DOMImplementation:W.cu,DOMPoint:W.eg,DOMPointReadOnly:W.cv,DOMRectReadOnly:W.cw,DOMStringList:W.eh,DOMTokenList:W.ei,Element:W.a6,AnimationEvent:W.k,AnimationPlayerEvent:W.k,ApplicationCacheErrorEvent:W.k,AutocompleteErrorEvent:W.k,BeforeInstallPromptEvent:W.k,BeforeUnloadEvent:W.k,BlobEvent:W.k,ClipboardEvent:W.k,CloseEvent:W.k,CustomEvent:W.k,DeviceLightEvent:W.k,DeviceMotionEvent:W.k,DeviceOrientationEvent:W.k,ErrorEvent:W.k,ExtendableEvent:W.k,ExtendableMessageEvent:W.k,FetchEvent:W.k,FontFaceSetLoadEvent:W.k,GamepadEvent:W.k,GeofencingEvent:W.k,HashChangeEvent:W.k,InstallEvent:W.k,MediaEncryptedEvent:W.k,MediaKeyMessageEvent:W.k,MediaQueryListEvent:W.k,MediaStreamEvent:W.k,MediaStreamTrackEvent:W.k,MessageEvent:W.k,MIDIConnectionEvent:W.k,MIDIMessageEvent:W.k,NotificationEvent:W.k,PageTransitionEvent:W.k,PopStateEvent:W.k,PresentationConnectionAvailableEvent:W.k,PresentationConnectionCloseEvent:W.k,ProgressEvent:W.k,PromiseRejectionEvent:W.k,PushEvent:W.k,RelatedEvent:W.k,RTCDataChannelEvent:W.k,RTCDTMFToneChangeEvent:W.k,RTCIceCandidateEvent:W.k,RTCPeerConnectionIceEvent:W.k,SecurityPolicyViolationEvent:W.k,ServicePortConnectEvent:W.k,ServiceWorkerMessageEvent:W.k,SpeechRecognitionError:W.k,SpeechRecognitionEvent:W.k,SpeechSynthesisEvent:W.k,StorageEvent:W.k,SyncEvent:W.k,TrackEvent:W.k,TransitionEvent:W.k,WebKitTransitionEvent:W.k,ResourceProgressEvent:W.k,USBConnectionEvent:W.k,IDBVersionChangeEvent:W.k,AudioProcessingEvent:W.k,OfflineAudioCompletionEvent:W.k,WebGLContextEvent:W.k,Event:W.k,InputEvent:W.k,Animation:W.j,ApplicationCache:W.j,DOMApplicationCache:W.j,OfflineResourceList:W.j,BatteryManager:W.j,CanvasCaptureMediaStreamTrack:W.j,CrossOriginServiceWorkerClient:W.j,EventSource:W.j,FileReader:W.j,FontFaceSet:W.j,MediaKeySession:W.j,MediaQueryList:W.j,MediaRecorder:W.j,MediaSource:W.j,MediaStream:W.j,MediaStreamTrack:W.j,MessagePort:W.j,MIDIAccess:W.j,NetworkInformation:W.j,Notification:W.j,Performance:W.j,PermissionStatus:W.j,PresentationAvailability:W.j,PresentationReceiver:W.j,PresentationRequest:W.j,RTCDTMFSender:W.j,RTCPeerConnection:W.j,webkitRTCPeerConnection:W.j,mozRTCPeerConnection:W.j,ScreenOrientation:W.j,ServicePortCollection:W.j,ServiceWorkerContainer:W.j,ServiceWorkerRegistration:W.j,SpeechRecognition:W.j,SpeechSynthesis:W.j,SpeechSynthesisUtterance:W.j,WorkerPerformance:W.j,BluetoothDevice:W.j,BluetoothRemoteGATTCharacteristic:W.j,USB:W.j,IDBDatabase:W.j,IDBOpenDBRequest:W.j,IDBVersionChangeRequest:W.j,IDBRequest:W.j,IDBTransaction:W.j,AnalyserNode:W.j,RealtimeAnalyserNode:W.j,AudioBufferSourceNode:W.j,AudioContext:W.j,webkitAudioContext:W.j,AudioDestinationNode:W.j,AudioNode:W.j,AudioSourceNode:W.j,BiquadFilterNode:W.j,ChannelMergerNode:W.j,AudioChannelMerger:W.j,ChannelSplitterNode:W.j,AudioChannelSplitter:W.j,ConvolverNode:W.j,DelayNode:W.j,DynamicsCompressorNode:W.j,GainNode:W.j,AudioGainNode:W.j,IIRFilterNode:W.j,MediaElementAudioSourceNode:W.j,MediaStreamAudioDestinationNode:W.j,MediaStreamAudioSourceNode:W.j,OfflineAudioContext:W.j,OscillatorNode:W.j,Oscillator:W.j,PannerNode:W.j,AudioPannerNode:W.j,webkitAudioPannerNode:W.j,ScriptProcessorNode:W.j,JavaScriptAudioNode:W.j,StereoPannerNode:W.j,WaveShaperNode:W.j,EventTarget:W.j,File:W.a7,FileList:W.eG,FileWriter:W.eH,HTMLFormElement:W.eL,Gamepad:W.a8,HTMLHeadElement:W.cB,History:W.eP,HTMLCollection:W.bK,HTMLFormControlsCollection:W.bK,HTMLOptionsCollection:W.bK,HTMLDocument:W.cC,XMLHttpRequest:W.eQ,XMLHttpRequestUpload:W.bL,XMLHttpRequestEventTarget:W.bL,ImageBitmap:W.bg,ImageData:W.bh,HTMLImageElement:W.bi,HTMLInputElement:W.eV,KeyboardEvent:W.aZ,Location:W.f8,HTMLAudioElement:W.bO,HTMLMediaElement:W.bO,MediaList:W.fd,MIDIOutput:W.fe,MIDIInput:W.bP,MIDIPort:W.bP,MimeType:W.aa,MimeTypeArray:W.ff,PointerEvent:W.S,MouseEvent:W.S,DragEvent:W.S,Navigator:W.fp,Attr:W.t,Node:W.t,NodeIterator:W.dw,NodeList:W.bV,RadioNodeList:W.bV,Path2D:W.fy,Perspective:W.fB,Plugin:W.ab,PluginArray:W.fD,PositionValue:W.fG,PresentationConnection:W.fH,Range:W.dB,Rotation:W.fR,RTCDataChannel:W.dE,DataChannel:W.dE,HTMLSelectElement:W.fT,SharedWorker:W.fX,SourceBuffer:W.ac,SourceBufferList:W.fY,SpeechGrammar:W.ad,SpeechGrammarList:W.h_,SpeechRecognitionResult:W.ae,Storage:W.h4,CSSStyleSheet:W.a_,StyleSheet:W.a_,CalcLength:W.am,KeywordValue:W.am,LengthValue:W.am,NumberValue:W.am,SimpleLength:W.am,TransformValue:W.am,StyleValue:W.am,HTMLTableElement:W.dH,HTMLTableRowElement:W.hd,HTMLTableSectionElement:W.he,HTMLTemplateElement:W.c2,TextTrack:W.af,TextTrackCue:W.a0,VTTCue:W.a0,TextTrackCueList:W.hh,TextTrackList:W.hi,TimeRanges:W.hk,Touch:W.ag,TouchEvent:W.b2,TouchList:W.ho,TrackDefaultList:W.hp,Matrix:W.bp,Skew:W.bp,TransformComponent:W.bp,Translation:W.hr,TreeWalker:W.dK,CompositionEvent:W.aL,FocusEvent:W.aL,TextEvent:W.aL,SVGZoomEvent:W.aL,UIEvent:W.aL,URL:W.hw,HTMLVideoElement:W.bq,VideoTrackList:W.hy,VTTRegionList:W.hB,WebSocket:W.hC,WheelEvent:W.b4,Window:W.c5,DOMWindow:W.c5,Worker:W.hF,CompositorWorkerGlobalScope:W.b5,DedicatedWorkerGlobalScope:W.b5,ServiceWorkerGlobalScope:W.b5,SharedWorkerGlobalScope:W.b5,WorkerGlobalScope:W.b5,ClientRect:W.hO,ClientRectList:W.dP,DOMRectList:W.dP,CSSRuleList:W.hQ,DocumentType:W.hR,DOMRect:W.hS,GamepadList:W.id,HTMLFrameSetElement:W.ie,NamedNodeMap:W.dR,MozNamedAttrMap:W.dR,ServiceWorker:W.iz,SpeechRecognitionResultList:W.iC,StyleSheetList:W.iD,WorkerLocation:W.iK,WorkerNavigator:W.iL,SVGAElement:P.e0,SVGAnimateElement:P.aQ,SVGAnimateMotionElement:P.aQ,SVGAnimateTransformElement:P.aQ,SVGAnimationElement:P.aQ,SVGSetElement:P.aQ,SVGFEBlendElement:P.eo,SVGFEColorMatrixElement:P.ep,SVGFEComponentTransferElement:P.eq,SVGFECompositeElement:P.er,SVGFEConvolveMatrixElement:P.es,SVGFEDiffuseLightingElement:P.et,SVGFEDisplacementMapElement:P.eu,SVGFEFloodElement:P.ev,SVGFEGaussianBlurElement:P.ew,SVGFEImageElement:P.ex,SVGFEMergeElement:P.ey,SVGFEMorphologyElement:P.ez,SVGFEOffsetElement:P.eA,SVGFEPointLightElement:P.eB,SVGFESpecularLightingElement:P.eC,SVGFESpotLightElement:P.eD,SVGFETileElement:P.eE,SVGFETurbulenceElement:P.eF,SVGFilterElement:P.eI,SVGForeignObjectElement:P.eK,SVGCircleElement:P.aj,SVGEllipseElement:P.aj,SVGLineElement:P.aj,SVGPathElement:P.aj,SVGPolygonElement:P.aj,SVGPolylineElement:P.aj,SVGGeometryElement:P.aj,SVGClipPathElement:P.aG,SVGDefsElement:P.aG,SVGGElement:P.aG,SVGSwitchElement:P.aG,SVGGraphicsElement:P.aG,SVGImageElement:P.eR,SVGLength:P.au,SVGLengthList:P.f2,SVGMarkerElement:P.fb,SVGMaskElement:P.fc,SVGNumber:P.av,SVGNumberList:P.fs,SVGPatternElement:P.fz,SVGPoint:P.fE,SVGPointList:P.fF,SVGRect:P.fK,SVGRectElement:P.fL,SVGScriptElement:P.bZ,SVGStringList:P.ha,SVGDescElement:P.L,SVGDiscardElement:P.L,SVGFEDistantLightElement:P.L,SVGFEFuncAElement:P.L,SVGFEFuncBElement:P.L,SVGFEFuncGElement:P.L,SVGFEFuncRElement:P.L,SVGFEMergeNodeElement:P.L,SVGMetadataElement:P.L,SVGStopElement:P.L,SVGStyleElement:P.L,SVGTitleElement:P.L,SVGComponentTransferFunctionElement:P.L,SVGElement:P.L,SVGSVGElement:P.hb,SVGSymbolElement:P.hc,SVGTextContentElement:P.dI,SVGTextPathElement:P.hg,SVGTSpanElement:P.c3,SVGTextElement:P.c3,SVGTextPositioningElement:P.c3,SVGTransform:P.ax,SVGTransformList:P.hq,SVGUseElement:P.hx,SVGViewElement:P.hz,SVGViewSpec:P.hA,SVGLinearGradientElement:P.c7,SVGRadialGradientElement:P.c7,SVGGradientElement:P.c7,SVGCursorElement:P.iv,SVGFEDropShadowElement:P.iw,SVGMPathElement:P.ix,AudioBuffer:P.e5,WebGLRenderingContext:P.fP,WebGL2RenderingContext:P.fQ,WebGL2RenderingContextBase:P.iJ,SQLResultSetRowList:P.h0})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasPattern:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,Credential:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMStringMap:true,EffectModel:true,Entry:true,FederatedCredential:true,FileEntry:true,FileError:true,Stream:true,DOMFileSystem:true,FontFace:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmapRenderingContext:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PasswordCredential:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,ServicePort:true,SharedArrayBuffer:true,SourceInfo:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,TrackDefault:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPreserveAspectRatio:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,AudioTrack:true,AudioTrackList:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasGradient:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,CSSCharsetRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DocumentFragment:true,ShadowRoot:true,DOMException:true,DOMImplementation:true,DOMPoint:true,DOMPointReadOnly:false,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AudioDestinationNode:true,AudioNode:true,AudioSourceNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OfflineAudioContext:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,ImageBitmap:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Navigator:true,Attr:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Path2D:true,Perspective:true,Plugin:true,PluginArray:true,PositionValue:true,PresentationConnection:true,Range:true,Rotation:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,SharedWorker:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,CalcLength:true,KeywordValue:true,LengthValue:true,NumberValue:true,SimpleLength:true,TransformValue:true,StyleValue:false,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,Matrix:true,Skew:true,TransformComponent:false,Translation:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,SVGZoomEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,VTTRegionList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.ds.$nativeSuperclassTag="ArrayBufferView"
H.bS.$nativeSuperclassTag="ArrayBufferView"
H.bT.$nativeSuperclassTag="ArrayBufferView"
H.dt.$nativeSuperclassTag="ArrayBufferView"
H.bR.$nativeSuperclassTag="ArrayBufferView"
H.bU.$nativeSuperclassTag="ArrayBufferView"
H.du.$nativeSuperclassTag="ArrayBufferView"
W.bG.$nativeSuperclassTag="EventTarget"
W.bJ.$nativeSuperclassTag="EventTarget"
W.bF.$nativeSuperclassTag="EventTarget"
W.bI.$nativeSuperclassTag="EventTarget"
W.bE.$nativeSuperclassTag="EventTarget"
W.bH.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.lv(V.lg(),b)},[])
else (function(b){H.lv(V.lg(),b)})([])})})()