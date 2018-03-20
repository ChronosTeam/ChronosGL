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
a[c]=function(){a[c]=function(){H.od(b)}
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
return d?function(e){if(t===null)t=H.k_(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.k_(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.k_(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={jJ:function jJ(a){this.a=a},
jP:function(a,b,c,d){if(!!J.u(a).$isd)return new H.em(a,b,[c,d])
return new H.dg(a,b,[c,d])},
f_:function(){return new P.al("No element")},
n1:function(){return new P.al("Too many elements")},
n0:function(){return new P.al("Too few elements")},
dx:function(a,b,c,d){if(c-b<=32)H.ng(a,b,c,d)
else H.nf(a,b,c,d)},
ng:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.z(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.aq(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
nf:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.b(t>32)
s=C.b.G(t+1,6)
r=a3+s
q=a4-s
p=C.b.G(a3+a4,2)
o=p-s
n=p+s
t=J.z(a2)
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
if(J.G(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=t.h(a2,e)
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
if(g<r&&f>q){for(;J.G(a5.$2(t.h(a2,g),l),0);)++g
for(;J.G(a5.$2(t.h(a2,f),j),0);)--f
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
d:function d(){},
bj:function bj(){},
df:function df(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
dg:function dg(a,b,c){this.a=a
this.b=b
this.$ti=c},
em:function em(a,b,c){this.a=a
this.b=b
this.$ti=c},
fd:function fd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bK:function bK(a,b,c){this.a=a
this.b=b
this.$ti=c},
dF:function dF(a,b,c){this.a=a
this.b=b
this.$ti=c},
hI:function hI(a,b,c){this.a=a
this.b=b
this.$ti=c},
cs:function cs(){},
dP:function(a,b){var t=a.am(b)
if(!u.globalState.d.cy)u.globalState.f.ar()
return t},
jh:function(){--u.globalState.f.b
H.b(u.globalState.f.b>=0)},
lG:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.u(s).$isc)throw H.e(P.jC("Arguments to main must be a List: "+H.f(s)))
u.globalState=new H.iv(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$kI()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.i1(P.jO(null,H.b8),0)
r=P.p
s.sfd(new H.aj(0,null,null,null,null,null,0,[r,H.b7]))
s.sfh(new H.aj(0,null,null,null,null,null,0,[r,null]))
if(s.x){q=new H.iu()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.mW,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.nv)}if(u.globalState.x)return
s=u.globalState.a++
q=P.ak(null,null,null,r)
p=new H.bn(0,null,!1)
o=new H.b7(s,new H.aj(0,null,null,null,null,null,0,[r,H.bn]),q,u.createNewIsolate(),p,new H.at(H.jm()),new H.at(H.jm()),!1,!1,[],P.ak(null,null,null,null),null,null,!1,!0,P.ak(null,null,null,null))
q.j(0,0)
o.bM(0,p)
u.globalState.e=o
u.globalState.z.i(0,s,o)
u.globalState.d=o
if(H.bv(a,{func:1,args:[,]}))o.am(new H.js(t,a))
else if(H.bv(a,{func:1,args:[,,]}))o.am(new H.jt(t,a))
else o.am(a)
u.globalState.f.ar()},
nv:function(a){var t=P.aK(["command","print","msg",a])
return new H.an(!0,P.c4(null,P.p)).L(t)},
mY:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.mZ()
return},
mZ:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.e(new P.v("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.e(new P.v('Cannot extract URI from "'+t+'"'))},
mW:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.b6(!0,[]).X(b.data)
s=J.z(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.o0(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.b6(!0,[]).X(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.b6(!0,[]).X(s.h(t,"replyTo"))
s=u.globalState.a++
k=P.p
j=P.ak(null,null,null,k)
i=new H.bn(0,null,!1)
h=new H.b7(s,new H.aj(0,null,null,null,null,null,0,[k,H.bn]),j,u.createNewIsolate(),i,new H.at(H.jm()),new H.at(H.jm()),!1,!1,[],P.ak(null,null,null,null),null,null,!1,!0,P.ak(null,null,null,null))
j.j(0,0)
h.bM(0,i)
u.globalState.f.a.U(0,new H.b8(h,new H.eX(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.ar()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.mj(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.ar()
break
case"close":u.globalState.ch.aq(0,$.$get$kJ().h(0,a))
a.terminate()
u.globalState.f.ar()
break
case"log":H.mV(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
k=P.aK(["command","print","msg",t])
k=new H.an(!0,P.c4(null,P.p)).L(k)
s.toString
self.postMessage(k)}else P.O(s.h(t,"msg"))
break
case"error":throw H.e(s.h(t,"msg"))}},
mV:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aK(["command","log","msg",a])
r=new H.an(!0,P.c4(null,P.p)).L(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.R(q)
t=H.aD(q)
s=P.cr(t)
throw H.e(s)}},
mX:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.kR=$.kR+("_"+s)
$.kS=$.kS+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.I(0,["spawned",new H.br(s,r),q,t.r])
r=new H.eY(a,b,c,d,t)
if(e){t.c5(q,q)
u.globalState.f.a.U(0,new H.b8(t,r,"start isolate"))}else r.$0()},
nh:function(a,b){var t=new H.hp(!0,!1,null)
t.dL(a,b)
return t},
nw:function(a){return new H.b6(!0,[]).X(new H.an(!1,P.c4(null,P.p)).L(a))},
js:function js(a,b){this.a=a
this.b=b},
jt:function jt(a,b){this.a=a
this.b=b},
iv:function iv(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
ip:function ip(a,b){this.a=a
this.b=b},
i1:function i1(a,b){this.a=a
this.b=b},
i2:function i2(a){this.a=a},
b8:function b8(a,b,c){this.a=a
this.b=b
this.c=c},
iu:function iu(){},
eX:function eX(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eY:function eY(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hU:function hU(){},
br:function br(a,b){this.b=a
this.a=b},
iw:function iw(a,b){this.a=a
this.b=b},
c6:function c6(a,b,c){this.b=a
this.c=b
this.a=c},
bn:function bn(a,b,c){this.a=a
this.b=b
this.c=c},
hp:function hp(a,b,c){this.a=a
this.b=b
this.c=c},
hq:function hq(a,b){this.a=a
this.b=b},
hr:function hr(a,b){this.a=a
this.b=b},
at:function at(a){this.a=a},
an:function an(a,b){this.a=a
this.b=b},
b6:function b6(a,b){this.a=a
this.b=b},
nU:function(a){return u.types[a]},
o2:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.u(a).$isq},
f:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.as(a)
if(typeof t!=="string")throw H.e(H.M(a))
return t},
ne:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.fR(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
b0:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
ds:function(a){var t,s,r,q,p,o,n,m
t=J.u(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.N||!!J.u(a).$isb3){p=C.A(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.i.aL(q,0)===36)q=C.i.di(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.dR(H.j5(a),0,null),u.mangledGlobalNames)},
fN:function(a){return"Instance of '"+H.ds(a)+"'"},
V:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nb:function(a){return a.b?H.V(a).getUTCFullYear()+0:H.V(a).getFullYear()+0},
n9:function(a){return a.b?H.V(a).getUTCMonth()+1:H.V(a).getMonth()+1},
n5:function(a){return a.b?H.V(a).getUTCDate()+0:H.V(a).getDate()+0},
n6:function(a){return a.b?H.V(a).getUTCHours()+0:H.V(a).getHours()+0},
n8:function(a){return a.b?H.V(a).getUTCMinutes()+0:H.V(a).getMinutes()+0},
na:function(a){return a.b?H.V(a).getUTCSeconds()+0:H.V(a).getSeconds()+0},
n7:function(a){return a.b?H.V(a).getUTCMilliseconds()+0:H.V(a).getMilliseconds()+0},
jQ:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.M(a))
return a[b]},
kT:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.M(a))
a[b]=c},
U:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ah(!0,b,"index",null)
t=J.aQ(a)
if(b<0||C.b.cZ(b,t))return P.F(b,a,"index",null,t)
return P.fO(b,"index",null)},
M:function(a){return new P.ah(!0,a,null,null)},
e:function(a){var t
if(a==null)a=new P.bm()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.lH})
t.name=""}else t.toString=H.lH
return t},
lH:function(){return J.as(this.dartException)},
H:function(a){throw H.e(a)},
C:function(a){throw H.e(new P.Z(a))},
ay:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.hw(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
hx:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
l3:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
jL:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.f3(a,s,t?null:b.receiver)},
R:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.ju(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aX(r,16)&8191)===10)switch(q){case 438:return t.$1(H.jL(H.f(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.f(s)+" (Error "+q+")"
return t.$1(new H.dr(p,null))}}if(a instanceof TypeError){o=$.$get$kY()
n=$.$get$kZ()
m=$.$get$l_()
l=$.$get$l0()
k=$.$get$l4()
j=$.$get$l5()
i=$.$get$l2()
$.$get$l1()
h=$.$get$l7()
g=$.$get$l6()
f=o.O(s)
if(f!=null)return t.$1(H.jL(s,f))
else{f=n.O(s)
if(f!=null){f.method="call"
return t.$1(H.jL(s,f))}else{f=m.O(s)
if(f==null){f=l.O(s)
if(f==null){f=k.O(s)
if(f==null){f=j.O(s)
if(f==null){f=i.O(s)
if(f==null){f=l.O(s)
if(f==null){f=h.O(s)
if(f==null){f=g.O(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.dr(s,f==null?null:f.method))}}return t.$1(new H.hA(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.dy()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.ah(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.dy()
return a},
aD:function(a){var t
if(a==null)return new H.dN(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dN(a,null)},
o6:function(a){if(a==null||typeof a!='object')return J.ar(a)
else return H.b0(a)},
nS:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=a.length
for(r=0;r<s;){q=r+1
H.b(t)
p=a[r]
r=q+1
H.b(t)
b.i(0,p,a[q])}return b},
o1:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dP(b,new H.jc(a))
case 1:return H.dP(b,new H.jd(a,d))
case 2:return H.dP(b,new H.je(a,d,e))
case 3:return H.dP(b,new H.jf(a,d,e,f))
case 4:return H.dP(b,new H.jg(a,d,e,f,g))}throw H.e(P.cr("Unsupported number of arguments for wrapped closure"))},
ba:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.o1)
a.$identity=t
return t},
mB:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.u(c).$isc){t.$reflectionInfo=c
r=H.ne(t).r}else r=c
q=d?Object.create(new H.h6().constructor.prototype):Object.create(new H.by(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.ku(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.nU,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.kr:H.jE
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.e("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.ku(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
my:function(a,b,c,d){var t=H.jE
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
ku:function(a,b,c){var t,s,r,q
if(c)return H.mA(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.my(s,b==null?r!=null:b!==r,t,b)
return q},
mz:function(a,b,c,d){var t,s
t=H.jE
s=H.kr
switch(b?-1:a){case 0:throw H.e(new H.fX("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
mA:function(a,b){var t,s,r,q
H.mx()
t=$.kq
if(t==null){t=H.kp("receiver")
$.kq=t}s=b.$stubName
r=b.length
q=a[s]
t=H.mz(r,b==null?q!=null:b!==q,s,b)
return t},
k_:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.u(c).$isc){c.fixed$length=Array
t=c}else t=c
return H.mB(a,b,t,!!d,e,f)},
jE:function(a){return a.a},
kr:function(a){return a.c},
mx:function(){var t=$.ks
if(t==null){t=H.kp("self")
$.ks=t}return t},
kp:function(a){var t,s,r,q,p
t=new H.by("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
os:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.az(a,"String"))},
a4:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.az(a,"double"))},
or:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.az(a,"num"))},
nL:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.az(a,"bool"))},
o0:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.az(a,"int"))},
o8:function(a,b){throw H.e(H.az(a,b.substring(3)))},
o7:function(a,b){var t=J.z(b)
throw H.e(H.kt(H.ds(a),t.bv(b,3,t.gk(b))))},
k3:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.u(a)[b])return a
H.o8(a,b)},
aF:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.u(a)[b]
else t=!0
if(t)return a
H.o7(a,b)},
oq:function(a){if(a==null)return a
if(!!J.u(a).$isc)return a
throw H.e(H.az(a,"List"))},
lv:function(a){var t=J.u(a)
return"$S" in t?t.$S():null},
bv:function(a,b){var t
if(a==null)return!1
t=H.lv(a)
return t==null?!1:H.lA(t,b)},
oo:function(a,b){var t,s
if(a==null)return a
if($.jX)return a
$.jX=!0
try{if(H.bv(a,b))return a
t=H.aP(b,null)
s=H.az(a,t)
throw H.e(s)}finally{$.jX=!1}},
az:function(a,b){return new H.hy("type '"+H.ds(a)+"' is not a subtype of type '"+b+"'")},
kt:function(a,b){return new H.e8("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
ao:function(a){if(!0===a)return!1
if(!!J.u(a).$isjH)a=a.$0()
if(typeof a==="boolean")return!a
throw H.e(H.az(a,"bool"))},
aB:function(a){throw H.e(new H.hO(a))},
b:function(a){if(H.ao(a))throw H.e(new P.ce(null))},
od:function(a){throw H.e(new P.ec(a))},
jm:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
ly:function(a){return u.getIsolateTag(a)},
N:function(a){return new H.aN(a,null)},
w:function(a,b){H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
j5:function(a){if(a==null)return
return a.$ti},
lz:function(a,b){return H.k7(a["$as"+H.f(b)],H.j5(a))},
ap:function(a,b,c){var t,s
t=H.lz(a,b)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
aE:function(a,b){var t,s
t=H.j5(a)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
aP:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.b(!0)
H.b(!0)
return a[0].name+H.dR(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.f(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aP(t,b)
return H.nz(a,b)}return"unknown-reified-type"},
nz:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aP(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aP(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aP(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.nR(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aP(l[j],b)+(" "+H.f(j))}q+="}"}return"("+q+") => "+t},
dR:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=new P.bW("")
for(r=b,q=!0,p=!0;H.b(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.b(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aP(o,c)}return p?"":"<"+s.l(0)+">"},
j6:function(a){var t,s
if(a instanceof H.be){t=H.lv(a)
if(t!=null)return H.aP(t,null)}s=J.u(a).constructor.name
if(a==null)return s
return s+H.dR(a.$ti,0,null)},
k7:function(a,b){if(a==null)return b
H.b(typeof a=="function")
H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.k4(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.k4(a,null,b)
return b},
ca:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.j5(a)
s=J.u(a)
if(s[b]==null)return!1
return H.lq(H.k7(s[d],t),c)},
dS:function(a,b,c,d){if(a==null)return a
if(H.ca(a,b,c,d))return a
throw H.e(H.kt(H.ds(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dR(c,0,null),u.mangledGlobalNames)))},
ol:function(a,b,c,d){if(a==null)return a
if(H.ca(a,b,c,d))return a
throw H.e(H.az(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dR(c,0,null),u.mangledGlobalNames)))},
lq:function(a,b){var t,s,r,q,p
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
if(!H.a5(r,b[p]))return!1}return!0},
om:function(a,b,c){return H.k4(a,b,H.lz(b,c))},
a5:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.name==="b_")return!0
if('func' in b)return H.lA(a,b)
if('func' in a)return b.name==="jH"||b.name==="n"
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
return H.lq(H.k7(o,t),r)},
lp:function(a,b,c){var t,s,r,q,p,o,n
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
if(!(H.a5(o,n)||H.a5(n,o)))return!1}return!0},
nH:function(a,b){var t,s,r,q,p,o
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
if(!(H.a5(p,o)||H.a5(o,p)))return!1}return!0},
lA:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.b('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.a5(t,s)||H.a5(s,t)))return!1}r=a.args
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
if(n===m){if(!H.lp(r,q,!1))return!1
if(!H.lp(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.b(j)
g=r[h]
H.b(i)
f=q[h]
if(!(H.a5(g,f)||H.a5(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=q[e]
if(!(H.a5(g,f)||H.a5(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=o[e]
if(!(H.a5(g,f)||H.a5(f,g)))return!1}}return H.nH(a.named,b.named)},
k4:function(a,b,c){H.b(typeof a=="function")
H.b(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
ot:function(a){var t=$.k1
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
op:function(a){return H.b0(a)},
on:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
o3:function(a){var t,s,r,q,p,o
H.b(!(a instanceof P.n))
t=$.k1.$1(a)
s=$.j3[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.jb[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.ll.$2(a,t)
if(t!=null){s=$.j3[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.jb[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.k5(r)
$.j3[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.jb[t]=r
return r}if(p==="-"){o=H.k5(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.lC(a,r)
if(p==="*")throw H.e(new P.c_(t))
if(u.leafTags[t]===true){o=H.k5(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.lC(a,r)},
lC:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.jl(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
k5:function(a){return J.jl(a,!1,null,!!a.$isq)},
o5:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.jl(t,!1,null,!!t.$isq)
else return J.jl(t,c,null,null)},
nZ:function(){if(!0===$.k2)return
$.k2=!0
H.o_()},
o_:function(){var t,s,r,q,p,o,n,m
$.j3=Object.create(null)
$.jb=Object.create(null)
H.nY()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.lD.$1(p)
if(o!=null){n=H.o5(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
nY:function(){var t,s,r,q,p,o,n
t=C.R()
t=H.bu(C.O,H.bu(C.T,H.bu(C.z,H.bu(C.z,H.bu(C.S,H.bu(C.P,H.bu(C.Q(C.A),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.k1=new H.j8(p)
$.ll=new H.j9(o)
$.lD=new H.ja(n)},
bu:function(a,b){return a(b)||b},
oc:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
fR:function fR(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
hw:function hw(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dr:function dr(a,b){this.a=a
this.b=b},
f3:function f3(a,b,c){this.a=a
this.b=b
this.c=c},
hA:function hA(a){this.a=a},
ju:function ju(a){this.a=a},
dN:function dN(a,b){this.a=a
this.b=b},
jc:function jc(a){this.a=a},
jd:function jd(a,b){this.a=a
this.b=b},
je:function je(a,b,c){this.a=a
this.b=b
this.c=c},
jf:function jf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jg:function jg(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
be:function be(){},
hj:function hj(){},
h6:function h6(){},
by:function by(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hy:function hy(a){this.a=a},
e8:function e8(a){this.a=a},
fX:function fX(a){this.a=a},
hO:function hO(a){this.a=a},
aN:function aN(a,b){this.a=a
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
f2:function f2(a){this.a=a},
f7:function f7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
f8:function f8(a,b){this.a=a
this.$ti=b},
f9:function f9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
j8:function j8(a){this.a=a},
j9:function j9(a){this.a=a},
ja:function ja(a){this.a=a},
l:function(a){return a},
iV:function(a){var t,s,r
if(!!J.u(a).$iso)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
bM:function bM(){},
bk:function bk(){},
fm:function fm(){},
dj:function dj(){},
dk:function dk(){},
dl:function dl(){},
di:function di(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(){},
dm:function dm(){},
ft:function ft(){},
bN:function bN(){},
bO:function bO(){},
bP:function bP(){},
bQ:function bQ(){},
nR:function(a){var t=H.w(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
bw:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
u:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dd.prototype
return J.dc.prototype}if(typeof a=="string")return J.aX.prototype
if(a==null)return J.f1.prototype
if(typeof a=="boolean")return J.f0.prototype
if(a.constructor==Array)return J.aW.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aY.prototype
return a}if(a instanceof P.n)return a
return J.j4(a)},
jl:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
j4:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.k2==null){H.nZ()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.e(new P.c_("Return interceptor for "+H.f(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$jK()]
if(p!=null)return p
p=H.o3(a)
if(p!=null)return p
if(typeof a=="function")return C.U
s=Object.getPrototypeOf(a)
if(s==null)return C.D
if(s===Object.prototype)return C.D
if(typeof q=="function"){Object.defineProperty(q,$.$get$jK(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
z:function(a){if(typeof a=="string")return J.aX.prototype
if(a==null)return a
if(a.constructor==Array)return J.aW.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aY.prototype
return a}if(a instanceof P.n)return a
return J.j4(a)},
bb:function(a){if(a==null)return a
if(a.constructor==Array)return J.aW.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aY.prototype
return a}if(a instanceof P.n)return a
return J.j4(a)},
k0:function(a){if(typeof a=="number")return J.bi.prototype
if(a==null)return a
if(!(a instanceof P.n))return J.b3.prototype
return a},
nT:function(a){if(typeof a=="number")return J.bi.prototype
if(typeof a=="string")return J.aX.prototype
if(a==null)return a
if(!(a instanceof P.n))return J.b3.prototype
return a},
lx:function(a){if(typeof a=="string")return J.aX.prototype
if(a==null)return a
if(!(a instanceof P.n))return J.b3.prototype
return a},
j:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aY.prototype
return a}if(a instanceof P.n)return a
return J.j4(a)},
G:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.u(a).w(a,b)},
aq:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.k0(a).ab(a,b)},
lI:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.k0(a).ac(a,b)},
aG:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.o2(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.z(a).h(a,b)},
lJ:function(a,b,c){return J.bb(a).i(a,b,c)},
lK:function(a,b,c,d){return J.j(a).dV(a,b,c,d)},
k8:function(a,b){return J.lx(a).aL(a,b)},
lL:function(a,b){return J.j(a).e5(a,b)},
lM:function(a,b,c,d){return J.j(a).e7(a,b,c,d)},
bx:function(a,b){return J.j(a).eg(a,b)},
lN:function(a,b,c){return J.j(a).eh(a,b,c)},
k9:function(a,b){return J.j(a).c4(a,b)},
jv:function(a,b){return J.j(a).P(a,b)},
ka:function(a,b,c){return J.j(a).c7(a,b,c)},
lO:function(a,b){return J.j(a).eB(a,b)},
dT:function(a,b,c){return J.j(a).c8(a,b,c)},
lP:function(a,b,c){return J.j(a).c9(a,b,c)},
dU:function(a,b,c){return J.j(a).ca(a,b,c)},
dV:function(a,b){return J.j(a).eE(a,b)},
lQ:function(a,b){return J.j(a).cb(a,b)},
lR:function(a,b,c){return J.j(a).cc(a,b,c)},
kb:function(a,b,c,d){return J.j(a).cd(a,b,c,d)},
lS:function(a,b){return J.bb(a).ce(a,b)},
lT:function(a,b,c,d,e){return J.j(a).cf(a,b,c,d,e)},
lU:function(a,b){return J.nT(a).R(a,b)},
jw:function(a,b,c){return J.z(a).eJ(a,b,c)},
dW:function(a){return J.j(a).ci(a)},
lV:function(a){return J.j(a).cj(a)},
lW:function(a){return J.j(a).cl(a)},
kc:function(a){return J.j(a).eO(a)},
lX:function(a,b){return J.j(a).cn(a,b)},
jx:function(a,b){return J.j(a).co(a,b)},
lY:function(a,b){return J.j(a).eY(a,b)},
lZ:function(a,b,c,d){return J.j(a).cp(a,b,c,d)},
m_:function(a,b,c,d,e){return J.j(a).eZ(a,b,c,d,e)},
m0:function(a,b,c,d,e){return J.j(a).cq(a,b,c,d,e)},
m1:function(a,b,c,d,e,f){return J.j(a).f_(a,b,c,d,e,f)},
m2:function(a,b){return J.bb(a).t(a,b)},
dX:function(a,b){return J.j(a).cr(a,b)},
m3:function(a,b){return J.j(a).cs(a,b)},
m4:function(a){return J.j(a).f0(a)},
m5:function(a,b){return J.bb(a).a7(a,b)},
m6:function(a){return J.j(a).geA(a)},
ar:function(a){return J.u(a).gu(a)},
bc:function(a){return J.bb(a).gv(a)},
aQ:function(a){return J.z(a).gk(a)},
m7:function(a){return J.j(a).gcA(a)},
m8:function(a){return J.j(a).gb9(a)},
m9:function(a){return J.u(a).gC(a)},
ma:function(a){return J.j(a).gfv(a)},
mb:function(a){return J.j(a).gat(a)},
jy:function(a){return J.j(a).gm(a)},
jz:function(a){return J.j(a).gn(a)},
kd:function(a){return J.j(a).gK(a)},
jA:function(a,b){return J.j(a).aa(a,b)},
mc:function(a){return J.j(a).aG(a)},
md:function(a){return J.j(a).bh(a)},
me:function(a,b){return J.j(a).bi(a,b)},
mf:function(a,b,c){return J.j(a).bj(a,b,c)},
ke:function(a,b,c){return J.j(a).bn(a,b,c)},
mg:function(a,b){return J.j(a).cv(a,b)},
mh:function(a,b){return J.bb(a).cz(a,b)},
mi:function(a){return J.bb(a).fn(a)},
mj:function(a,b){return J.j(a).I(a,b)},
mk:function(a,b,c){return J.j(a).dc(a,b,c)},
ml:function(a,b,c,d){return J.j(a).bu(a,b,c,d)},
mm:function(a,b,c,d,e,f,g,h,i,j){return J.j(a).cG(a,b,c,d,e,f,g,h,i,j)},
mn:function(a,b,c,d){return J.j(a).cH(a,b,c,d)},
dY:function(a,b,c,d){return J.j(a).cI(a,b,c,d)},
P:function(a){return J.k0(a).fw(a)},
mo:function(a){return J.lx(a).fB(a)},
as:function(a){return J.u(a).l(a)},
mp:function(a,b,c,d){return J.j(a).fD(a,b,c,d)},
mq:function(a,b,c){return J.j(a).cJ(a,b,c)},
mr:function(a,b,c){return J.j(a).cK(a,b,c)},
jB:function(a,b,c){return J.j(a).cL(a,b,c)},
ms:function(a,b,c){return J.j(a).cM(a,b,c)},
kf:function(a,b,c){return J.j(a).cN(a,b,c)},
kg:function(a,b,c){return J.j(a).cO(a,b,c)},
kh:function(a,b,c){return J.j(a).cP(a,b,c)},
ki:function(a,b,c,d){return J.j(a).cQ(a,b,c,d)},
kj:function(a,b,c,d){return J.j(a).cR(a,b,c,d)},
mt:function(a,b){return J.j(a).cT(a,b)},
mu:function(a,b,c){return J.j(a).fE(a,b,c)},
kk:function(a,b,c,d,e,f,g){return J.j(a).cV(a,b,c,d,e,f,g)},
mv:function(a,b,c,d,e){return J.j(a).cW(a,b,c,d,e)},
a:function a(){},
f0:function f0(){},
f1:function f1(){},
bJ:function bJ(){},
fH:function fH(){},
b3:function b3(){},
aY:function aY(){},
aW:function aW(a){this.$ti=a},
jI:function jI(a){this.$ti=a},
e2:function e2(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bi:function bi(){},
dd:function dd(){},
dc:function dc(){},
aX:function aX(){}},P={
nk:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.nI()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.ba(new P.hQ(t),1)).observe(s,{childList:true})
return new P.hP(t,s,r)}else if(self.setImmediate!=null)return P.nJ()
return P.nK()},
nl:function(a){++u.globalState.f.b
self.scheduleImmediate(H.ba(new P.hR(a),0))},
nm:function(a){++u.globalState.f.b
self.setImmediate(H.ba(new P.hS(a),0))},
nn:function(a){P.jS(C.x,a)},
nD:function(a,b){if(H.bv(a,{func:1,args:[P.b_,P.b_]})){b.toString
return a}else{b.toString
return a}},
mP:function(a,b,c){var t
if(a==null)a=new P.bm()
t=$.y
if(t!==C.d)t.toString
t=new P.T(0,t,null,[c])
t.bO(a,b)
return t},
mQ:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.T(0,$.y,null,[P.c])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.eS(t,!1,b,s)
try{for(m=0,l=0;m<1;++m){q=a[m]
p=l
q.bd(new P.eR(t,!1,b,s,p),r)
l=++t.b}if(l===0){l=new P.T(0,$.y,null,[null])
l.bN(C.B)
return l}k=new Array(l)
k.fixed$length=Array
t.a=k}catch(j){o=H.R(j)
n=H.aD(j)
if(t.b===0||!1)return P.mP(o,n,null)
else{t.c=o
t.d=n}}return s},
lc:function(a,b){var t,s,r
H.b(b.a<4)
H.b(!(a instanceof P.T))
H.b(b.a===0)
b.a=1
try{a.bd(new P.ib(b),new P.ic(b))}catch(r){t=H.R(r)
s=H.aD(r)
P.o9(new P.id(b,t,s))}},
ia:function(a,b){var t,s,r,q
H.b(b.a<=1)
for(;t=a.a,s=t===2,s;){H.b(s)
a=a.c}s=b.a
if(t>=4){H.b(s<4)
r=b.c
b.c=null
q=b.ak(r)
H.b(b.a<4)
H.b(a.a>=4)
b.a=a.a
b.c=a.c
P.bq(b,q)}else{q=b.c
H.b(s<=1)
b.a=2
b.c=a
a.bZ(q)}},
bq:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.iW(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
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
if(k){H.b(s.a===8)
s=s.c
p=t.a.b
o=s.a
s=s.b
p.toString
P.iW(null,null,p,o,s)
return}s=$.y
if(s==null?l!=null:s!==l){H.b(l!=null)
s=$.y
H.b(l==null?s!=null:l!==s)
j=$.y
$.y=l
i=j}else i=null
s=b.c
if(s===8)new P.ij(t,r,q,b).$0()
else if(p){if((s&1)!==0)new P.ii(r,b,m).$0()}else if((s&2)!==0)new P.ih(t,r,b).$0()
if(i!=null){H.b(!0)
$.y=i}s=r.b
if(!!J.u(s).$isbh){if(s.a>=4){H.b(o.a<4)
h=o.c
o.c=null
b=o.ak(h)
H.b(o.a<4)
H.b(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.ia(s,o)
return}}g=b.b
H.b(g.a<4)
h=g.c
g.c=null
b=g.ak(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.b(!o)
g.a=4
g.c=p}else{H.b(!o)
g.a=8
g.c=p}t.a=g
s=g}},
nB:function(){var t,s
for(;t=$.bs,t!=null;){$.c8=null
s=t.b
$.bs=s
if(s==null)$.c7=null
t.a.$0()}},
nG:function(){$.jY=!0
try{P.nB()}finally{$.c8=null
$.jY=!1
if($.bs!=null)$.$get$jV().$1(P.lr())}},
lj:function(a){var t=new P.dG(a,null)
if($.bs==null){$.c7=t
$.bs=t
if(!$.jY)$.$get$jV().$1(P.lr())}else{$.c7.b=t
$.c7=t}},
nF:function(a){var t,s,r
t=$.bs
if(t==null){P.lj(a)
$.c8=$.c7
return}s=new P.dG(a,null)
r=$.c8
if(r==null){s.b=t
$.c8=s
$.bs=s}else{s.b=r.b
r.b=s
$.c8=s
if(s.b==null)$.c7=s}},
o9:function(a){var t=$.y
if(C.d===t){P.bt(null,null,C.d,a)
return}t.toString
P.bt(null,null,t,t.b0(a))},
ni:function(a,b){var t=$.y
if(t===C.d){t.toString
return P.jS(a,b)}return P.jS(a,t.b0(b))},
jS:function(a,b){var t=C.b.G(a.a,1000)
return H.nh(t<0?0:t,b)},
jU:function(a){var t,s
H.b(a!=null)
t=$.y
H.b(a==null?t!=null:a!==t)
s=$.y
$.y=a
return s},
iW:function(a,b,c,d,e){var t={}
t.a=d
P.nF(new P.iX(t,e))},
lh:function(a,b,c,d){var t,s
if($.y===c)return d.$0()
t=P.jU(c)
try{s=d.$0()
return s}finally{s=t
H.b(s!=null)
$.y=s}},
li:function(a,b,c,d,e){var t,s
if($.y===c)return d.$1(e)
t=P.jU(c)
try{s=d.$1(e)
return s}finally{s=t
H.b(s!=null)
$.y=s}},
nE:function(a,b,c,d,e,f){var t,s
if($.y===c)return d.$2(e,f)
t=P.jU(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.b(s!=null)
$.y=s}},
bt:function(a,b,c,d){var t=C.d!==c
if(t)d=!(!t||!1)?c.b0(d):c.eC(d)
P.lj(d)},
hQ:function hQ(a){this.a=a},
hP:function hP(a,b,c){this.a=a
this.b=b
this.c=c},
hR:function hR(a){this.a=a},
hS:function hS(a){this.a=a},
eS:function eS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eR:function eR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hW:function hW(){},
dH:function dH(a,b){this.a=a
this.$ti=b},
iM:function iM(a,b){this.a=a
this.$ti=b},
dK:function dK(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
T:function T(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
i7:function i7(a,b){this.a=a
this.b=b},
ig:function ig(a,b){this.a=a
this.b=b},
ib:function ib(a){this.a=a},
ic:function ic(a){this.a=a},
id:function id(a,b,c){this.a=a
this.b=b
this.c=c},
i9:function i9(a,b){this.a=a
this.b=b},
ie:function ie(a,b){this.a=a
this.b=b},
i8:function i8(a,b,c){this.a=a
this.b=b
this.c=c},
ij:function ij(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ik:function ik(a){this.a=a},
ii:function ii(a,b,c){this.a=a
this.b=b
this.c=c},
ih:function ih(a,b,c){this.a=a
this.b=b
this.c=c},
dG:function dG(a,b){this.a=a
this.b=b},
ha:function ha(){},
hc:function hc(a){this.a=a},
hd:function hd(a,b){this.a=a
this.b=b},
hb:function hb(){},
bd:function bd(a,b){this.a=a
this.b=b},
iT:function iT(){},
iX:function iX(a,b){this.a=a
this.b=b},
iy:function iy(){},
iA:function iA(a,b){this.a=a
this.b=b},
iz:function iz(a,b){this.a=a
this.b=b},
iB:function iB(a,b){this.a=a
this.b=b},
jM:function(a,b){return new H.aj(0,null,null,null,null,null,0,[a,b])},
I:function(){return new H.aj(0,null,null,null,null,null,0,[null,null])},
aK:function(a){return H.nS(a,new H.aj(0,null,null,null,null,null,0,[null,null]))},
c4:function(a,b){return new P.dL(0,null,null,null,null,null,0,[a,b])},
nu:function(){var t=Object.create(null)
H.b(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
n_:function(a,b,c){var t,s
if(P.jZ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$c9()
C.a.j(s,a)
try{P.nA(a,t)}finally{H.b(C.a.gaE(s)===a)
s.pop()}s=P.kW(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eZ:function(a,b,c){var t,s,r
if(P.jZ(a))return b+"..."+c
t=new P.bW(b)
s=$.$get$c9()
C.a.j(s,a)
try{r=t
r.a=P.kW(r.ga5(),a,", ")}finally{H.b(C.a.gaE(s)===a)
s.pop()}s=t
s.a=s.ga5()+c
s=t.ga5()
return s.charCodeAt(0)==0?s:s},
jZ:function(a){var t,s
for(t=0;s=$.$get$c9(),t<s.length;++t)if(a===s[t])return!0
return!1},
nA:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gv(a)
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
H.b(r<100)
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
ak:function(a,b,c,d){return new P.ir(0,null,null,null,null,null,0,[d])},
jN:function(a,b){var t,s
t=P.ak(null,null,null,b)
for(s=J.bc(a);s.p();)t.j(0,s.gq())
return t},
kP:function(a){var t,s,r
t={}
if(P.jZ(a))return"{...}"
s=new P.bW("")
try{C.a.j($.$get$c9(),a)
r=s
r.a=r.ga5()+"{"
t.a=!0
a.a7(0,new P.fe(t,s))
t=s
t.a=t.ga5()+"}"}finally{t=$.$get$c9()
H.b(C.a.gaE(t)===a)
t.pop()}t=s.ga5()
return t.charCodeAt(0)==0?t:t},
jO:function(a,b){var t=new P.fa(null,0,0,0,[b])
t.dE(a,b)
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
ir:function ir(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
is:function is(a,b,c){this.a=a
this.b=b
this.c=c},
c3:function c3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
io:function io(){},
de:function de(){},
x:function x(){},
fe:function fe(a,b){this.a=a
this.b=b},
fa:function fa(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
it:function it(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
h_:function h_(){},
fZ:function fZ(){},
bS:function bS(){},
iU:function(a){var t
if(a==null)return
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new P.iq(a,Object.create(null),null)
for(t=0;t<a.length;++t)a[t]=P.iU(a[t])
return a},
nC:function(a,b){var t,s,r,q
if(typeof a!=="string")throw H.e(H.M(a))
t=null
try{t=JSON.parse(a)}catch(r){s=H.R(r)
q=String(s)
throw H.e(new P.eP(q,null,null))}q=P.iU(t)
return q},
iq:function iq(a,b,c){this.a=a
this.b=b
this.c=c},
cj:function cj(){},
ck:function ck(){},
f4:function f4(a,b){this.a=a
this.b=b},
f5:function f5(a){this.a=a},
kW:function(a,b,c){var t=J.bc(b)
if(!t.p())return a
if(c.length===0){do a+=H.f(t.gq())
while(t.p())}else{a+=H.f(t.gq())
for(;t.p();)a=a+c+H.f(t.gq())}return a},
mC:function(a,b){return J.lU(a,b)},
mF:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.f(t)
if(t>=10)return s+"00"+H.f(t)
return s+"000"+H.f(t)},
mG:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cl:function(a){if(a>=10)return""+a
return"0"+a},
mI:function(a,b,c,d,e,f){return new P.aH(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
jG:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.as(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mL(a)},
mL:function(a){var t=J.u(a)
if(!!t.$isbe)return t.l(a)
return H.fN(a)},
jC:function(a){return new P.ah(!1,null,null,a)},
km:function(a,b,c){return new P.ah(!0,a,b,c)},
mw:function(a){return new P.ah(!1,null,a,"Must not be null")},
fO:function(a,b,c){return new P.du(null,null,!0,a,b,"Value not in range")},
b1:function(a,b,c,d,e){return new P.du(b,c,!0,a,d,"Invalid value")},
kU:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.b1(a,0,c,"start",f))
if(a>b||b>c)throw H.e(P.b1(b,a,c,"end",f))
return b},
F:function(a,b,c,d,e){var t=e!=null?e:J.aQ(b)
return new P.eW(b,t,!0,a,c,"Index out of range")},
cr:function(a){return new P.i6(a)},
kL:function(a,b,c){var t,s
t=H.w([],[c])
for(s=J.bc(a);s.p();)C.a.j(t,s.gq())
if(b)return t
t.fixed$length=Array
return t},
O:function(a){H.bw(H.f(a))},
aC:function aC(){},
K:function K(){},
aU:function aU(a,b){this.a=a
this.b=b},
Q:function Q(){},
aH:function aH(a){this.a=a},
ek:function ek(){},
el:function el(){},
bg:function bg(){},
ce:function ce(a){this.a=a},
bm:function bm(){},
ah:function ah(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
du:function du(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eW:function eW(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
v:function v(a){this.a=a},
c_:function c_(a){this.a=a},
al:function al(a){this.a=a},
Z:function Z(a){this.a=a},
dy:function dy(){},
ec:function ec(a){this.a=a},
i6:function i6(a){this.a=a},
eP:function eP(a,b,c){this.a=a
this.b=b
this.c=c},
en:function en(a,b,c){this.a=a
this.b=b
this.$ti=c},
p:function p(){},
a_:function a_(){},
db:function db(){},
c:function c(){},
aL:function aL(){},
b_:function b_(){},
Y:function Y(){},
n:function n(){},
bV:function bV(){},
r:function r(){},
bW:function bW(a){this.a=a},
j1:function(a){var t,s,r,q,p
if(a==null)return
t=P.I()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
nO:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.m5(a,new P.iZ(t))
return t},
nP:function(a){var t,s
t=new P.T(0,$.y,null,[null])
s=new P.dH(t,[null])
a.then(H.ba(new P.j_(s),1))["catch"](H.ba(new P.j0(s),1))
return t},
kD:function(){var t=$.kC
if(t==null){t=J.jw(window.navigator.userAgent,"Opera",0)
$.kC=t}return t},
mH:function(){var t,s
t=$.kz
if(t!=null)return t
s=$.kA
if(s==null){s=J.jw(window.navigator.userAgent,"Firefox",0)
$.kA=s}if(s)t="-moz-"
else{s=$.kB
if(s==null){s=!P.kD()&&J.jw(window.navigator.userAgent,"Trident/",0)
$.kB=s}if(s)t="-ms-"
else t=P.kD()?"-o-":"-webkit-"}$.kz=t
return t},
hL:function hL(){},
hN:function hN(a,b){this.a=a
this.b=b},
iZ:function iZ(a){this.a=a},
hM:function hM(a,b,c){this.a=a
this.b=b
this.c=c},
j_:function j_(a){this.a=a},
j0:function j0(a){this.a=a},
ix:function ix(){},
L:function L(){},
dZ:function dZ(){},
aR:function aR(){},
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
eK:function eK(){},
eN:function eN(){},
ai:function ai(){},
aJ:function aJ(){},
eV:function eV(){},
au:function au(){},
f6:function f6(){},
ff:function ff(){},
fg:function fg(){},
aw:function aw(){},
fx:function fx(){},
fE:function fE(){},
fJ:function fJ(){},
fK:function fK(){},
fP:function fP(){},
fQ:function fQ(){},
bU:function bU(){},
he:function he(){},
J:function J(){},
hf:function hf(){},
hg:function hg(){},
dA:function dA(){},
hk:function hk(){},
bY:function bY(){},
ax:function ax(){},
hu:function hu(){},
hC:function hC(){},
hE:function hE(){},
hF:function hF(){},
c1:function c1(){},
iC:function iC(){},
iD:function iD(){},
iE:function iE(){},
cA:function cA(){},
cy:function cy(){},
cF:function cF(){},
cJ:function cJ(){},
cU:function cU(){},
d1:function d1(){},
cY:function cY(){},
d_:function d_(){},
e3:function e3(){},
fU:function fU(){},
fV:function fV(){},
iQ:function iQ(){},
h5:function h5(){},
cz:function cz(){},
cT:function cT(){}},W={
mJ:function(a,b,c){var t,s
t=document.body
s=(t&&C.q).N(t,a,b,c)
s.toString
t=new H.dF(new W.W(s),new W.iY(),[W.t])
return t.ga3(t)},
mK:function(a){return"wheel"},
bz:function(a){var t,s,r
t="element tag unavailable"
try{s=J.ma(a)
if(typeof s==="string")t=a.tagName}catch(r){H.R(r)}return t},
np:function(a,b){return document.createElement(a)},
b9:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lf:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
a3:function(a,b,c,d,e){var t=c==null?null:W.lk(new W.i5(c))
t=new W.i4(0,a,b,t,!1,[e])
t.dQ(a,b,c,!1,e)
return t},
ld:function(a){var t,s
t=document.createElement("a")
s=new W.iF(t,window.location)
s=new W.c2(s)
s.dR(a)
return s},
ns:function(a,b,c,d){return!0},
nt:function(a,b,c,d){var t,s,r,q,p
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
lg:function(){var t=P.r
t=new W.iN(P.jN(C.t,t),P.ak(null,null,null,t),P.ak(null,null,null,t),P.ak(null,null,null,t),null)
t.dT(null,new H.bK(C.t,new W.iO(),[H.aE(C.t,0),null]),["TEMPLATE"],null)
return t},
nx:function(a){var t
if(a==null)return
if("postMessage" in a){t=W.no(a)
if(!!J.u(t).$ish)return t
return}else return a},
ny:function(a){var t
if(!!J.u(a).$isaV)return a
t=new P.hM([],[],!1)
t.c=!0
return t.bf(a)},
no:function(a){if(a===window)return a
else return new W.hY(a)},
lk:function(a){var t=$.y
if(t===C.d)return a
return t.eD(a)},
k:function k(){},
e_:function e_(){},
e1:function e1(){},
a6:function a6(){},
e4:function e4(){},
cf:function cf(){},
aS:function aS(){},
ci:function ci(){},
e7:function e7(){},
aT:function aT(){},
ea:function ea(){},
D:function D(){},
bf:function bf(){},
eb:function eb(){},
ed:function ed(){},
ee:function ee(){},
cm:function cm(){},
aV:function aV(){},
cn:function cn(){},
ef:function ef(){},
co:function co(){},
eg:function eg(){},
cp:function cp(){},
cq:function cq(){},
eh:function eh(){},
ei:function ei(){},
a7:function a7(){},
iY:function iY(){},
i:function i(){},
h:function h(){},
a8:function a8(){},
eI:function eI(){},
eJ:function eJ(){},
eO:function eO(){},
a9:function a9(){},
cu:function cu(){},
eU:function eU(){},
bG:function bG(){},
cv:function cv(){},
cw:function cw(){},
bH:function bH(){},
bI:function bI(){},
aZ:function aZ(){},
fc:function fc(){},
fi:function fi(){},
fj:function fj(){},
bL:function bL(){},
aa:function aa(){},
fk:function fk(){},
S:function S(){},
fu:function fu(){},
W:function W(a){this.a=a},
t:function t(){},
dn:function dn(){},
bR:function bR(){},
fD:function fD(){},
fG:function fG(){},
ab:function ab(){},
fI:function fI(){},
fL:function fL(){},
fM:function fM(){},
dt:function dt(){},
fW:function fW(){},
dw:function dw(){},
fY:function fY(){},
h0:function h0(){},
ac:function ac(){},
h2:function h2(){},
ad:function ad(){},
h4:function h4(){},
ae:function ae(){},
h9:function h9(){},
a0:function a0(){},
am:function am(){},
dz:function dz(){},
hh:function hh(){},
hi:function hi(){},
bX:function bX(){},
af:function af(){},
a1:function a1(){},
hl:function hl(){},
hm:function hm(){},
ho:function ho(){},
ag:function ag(){},
b2:function b2(){},
hs:function hs(){},
ht:function ht(){},
bp:function bp(){},
hv:function hv(){},
dD:function dD(){},
aO:function aO(){},
hB:function hB(){},
hD:function hD(){},
hG:function hG(){},
hH:function hH(){},
b4:function b4(){},
c0:function c0(){},
hJ:function hJ(a){this.a=a},
hK:function hK(){},
b5:function b5(){},
hV:function hV(){},
dI:function dI(){},
hX:function hX(){},
hZ:function hZ(){},
i_:function i_(){},
il:function il(){},
im:function im(){},
dM:function dM(){},
iG:function iG(){},
iJ:function iJ(){},
iK:function iK(){},
iR:function iR(){},
iS:function iS(){},
hT:function hT(){},
i0:function i0(a){this.a=a},
i3:function i3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
dJ:function dJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
i4:function i4(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
i5:function i5(a){this.a=a},
c2:function c2(a){this.a=a},
E:function E(){},
dq:function dq(a){this.a=a},
fw:function fw(a){this.a=a},
fv:function fv(a,b,c){this.a=a
this.b=b
this.c=c},
c5:function c5(){},
iH:function iH(){},
iI:function iI(){},
iN:function iN(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iO:function iO(){},
iL:function iL(){},
ct:function ct(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hY:function hY(a){this.a=a},
dp:function dp(){},
iF:function iF(a,b){this.a=a
this.b=b},
dO:function dO(a){this.a=a},
iP:function iP(a){this.a=a},
bA:function bA(){},
bB:function bB(){},
bC:function bC(){},
bD:function bD(){},
bE:function bE(){},
bF:function bF(){},
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
d3:function d3(){},
d4:function d4(){},
d2:function d2(){},
d7:function d7(){},
d8:function d8(){},
d9:function d9(){},
da:function da(){},
cV:function cV(){},
cW:function cW(){},
cX:function cX(){},
cZ:function cZ(){},
d0:function d0(){},
d5:function d5(){},
d6:function d6(){}},B={
oa:function(a){var t,s
t=document
s=W.aZ
W.a3(t,"keydown",new B.jn(),!1,s)
W.a3(t,"keyup",new B.jo(),!1,s)
if(!$.ob)W.a3(t,"mousemove",new B.jp(),!1,W.S)
s=W.S
W.a3(t,"mousedown",new B.jq(),!1,s)
W.a3(t,"mouseup",new B.jr(),!1,s)},
n4:function(a,b,c,d){var t,s,r,q
t=new Float32Array(H.l(3))
s=$.$get$j2()
r=$.$get$cb()
q=new T.B(new Float32Array(H.l(16)))
q.F()
q=new B.fy(a,b,c,0,new T.m(t),-0.02,s,r,q,new T.m(new Float32Array(H.l(3))),new T.m(new Float32Array(H.l(3))),new T.m(new Float32Array(H.l(3))),new T.m(new Float32Array(H.l(3))),"camera:orbit",!1,!0)
q.dG(a,b,c,d)
return q},
jn:function jn(){},
jo:function jo(){},
jp:function jp(){},
jq:function jq(){},
jr:function jr(){},
fy:function fy(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
fz:function fz(a){this.a=a},
fA:function fA(a){this.a=a},
fB:function fB(){},
fC:function fC(a){this.a=a},
o4:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
t={}
s=document
r=new R.h8(0,0,null,null,null,null)
r.dK(C.k.d0(s,"stats"),"blue","gray")
q=C.k.fm(s,"#webgl-canvas")
p=new G.e9(null,q)
o=(q&&C.K).d_(q,"webgl2",P.aK(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
p.a=o
if(o==null)H.H(P.cr('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
n="ChronosGL Config: "+J.as(J.mc(o))
if($.lw>0)P.O("I: "+n)
J.lT(o,0,0,0,1)
J.dX(o,2929)
m=B.n4(20,0,0,q)
o=new T.B(new Float32Array(H.l(16)))
o.F()
n=new T.B(new Float32Array(H.l(16)))
n.F()
l=new G.fF(m,50,1,0.1,1000,o,n,new T.B(new Float32Array(H.l(16))),P.I(),"perspective",!1,!0)
l.bG()
n=G.jR("animation",p,$.$get$lo(),$.$get$ln())
k=new A.bo(n,[l],[],"animation",!1,!0)
o=G.jR("solid",p,$.$get$lF(),$.$get$lE())
j=new A.bo(o,[l],[],"solid",!1,!0)
i=G.jR("demo",p,$.$get$lt(),$.$get$ls())
h=new A.bo(i,[l],[],"demo",!1,!0)
H.b(o.dC(n))
g=H.w([],[A.bo])
f=new R.dv(q,l,null,p,g,17664,0,0,0,0,"main",!1,!0)
f.dH("main",p,null)
f.cC(null)
W.a3(window,"resize",f.gfq(),!1,W.i)
H.b(!0)
C.a.j(g,j)
H.b(!0)
C.a.j(g,k)
H.b(!0)
C.a.j(g,h)
e=G.kQ("wire")
g=new T.m(new Float32Array(H.l(3)))
g.Z(1,1,0)
e.a4("uColor",g)
t.a=null
t.b=null
t.c=null
d=G.kQ("mat")
c=P.aK(["idSkeleton",o,"idStatic",i,"idAnimation",n])
for(o=C.k.bg(s,"input"),n=o.length,b=0;b<o.length;o.length===n||(0,H.C)(o),++b){i=J.m7(o[b])
W.a3(i.a,i.b,new B.jj(c),!1,H.aE(i,0))}for(o=C.k.bg(s,"input"),n=o.length,b=0;b<o.length;o.length===n||(0,H.C)(o),++b){a=o[b]
H.bw("initialize inputs "+H.f(a.id))
a0=C.k.e0(s,"Event")
J.lM(a0,"change",!0,!0)
J.lY(a,a0)}t.d=0
d.d.i(0,"uTime",0)
P.mQ([D.n3("../asset/knight/knight.js")],null,!1).bc(new B.jk(t,p,k,j,h,e,d,new B.ji(t,r,m,f,d)))},
jj:function jj(a){this.a=a},
ji:function ji(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jk:function jk(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h}},L={
kl:function(a){var t=[T.B]
t=new L.e0(H.w(new Array(a),t),H.w(new Array(a),t))
t.dv(a)
return t},
nd:function(a){var t,s,r,q,p
P.O("recomputing local transform")
t=a.length
s=H.w(new Array(t),[T.B])
for(r=0;r<t;++r){q=a[r]
p=q.e
if(p<0){p=new T.B(new Float32Array(16))
p.F()
p=p.E(0,q.b)
s[r]=p}else{p=s[p].E(0,q.b)
s[r]=p}q.c.b3(p)}},
jT:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new T.B(new Float32Array(16))
for(s=a.length,r=c.b,q=d.a,p=0;p<s;++p){o=a[p]
n=q[p]
m=o.e
if(m<0)n.F()
else n.B(q[m])
l=r[p]
if(l!=null){k=L.jD(l.f,e)
H.b(!0)
j=L.jD(l.b,e)
H.b(!0)
i=L.jD(l.d,e)
H.b(!0)
h=l.r[k]
t.bq(l.c[j],l.e[i])
t.T(0,h)
n.a0(0,t)}else n.a0(0,o.b)}for(r=d.b,p=0;p<s;++p){n=r[p]
n.B(b)
n.a0(0,q[p])
n.a0(0,a[p].c)}},
mE:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k
t=a.length
s=L.kl(t)
r=new Float32Array(H.l(t*16*d.length))
for(t=d.length,q=s.b,p=q.length,o=0,n=0;n<d.length;d.length===t||(0,H.C)(d),++n){L.jT(a,b,c,s,d[n])
for(m=0;m<p;++m){l=q[m]
for(k=0;k<16;++k)r[o+k]=l.a[k]
o+=16}}return r},
jD:function(a,b){var t,s,r
for(t=a.length-1,s=0;s<t;s=r){r=s+1
if(b<a[r])return s}return 0},
cg:function cg(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
e0:function e0(a,b){this.a=a
this.b=b},
ch:function ch(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
h1:function h1(a,b,c){this.a=a
this.b=b
this.c=c}},G={
nj:function(a){var t,s,r
t=a.split("\n")
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.f(t[s])}return C.a.a8(t,"\n")},
lb:function(a,b,c){var t,s,r,q
t=J.j(a)
s=t.ck(a,b)
t.bs(a,s,c)
t.cg(a,s)
r=t.bl(a,s,35713)
if(r!=null&&!r){q=t.bk(a,s)
P.O("E:Compilation failed:")
P.O("E:"+G.nj(c))
P.O("E:Failure:")
P.O(C.i.a2("E:",q))
throw H.e(q)}return s},
kQ:function(a){var t=new G.fh(P.I(),a,!1,!0)
t.dF(a)
return t},
eL:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.jy(a[s])
b[t+1]=J.jz(a[s])
b[t+2]=J.kd(a[s])}return b},
mN:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.jy(a[s])
b[t+1]=J.jz(a[s])}return b},
mO:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.jy(a[s])
b[t+1]=J.jz(a[s])
b[t+2]=J.kd(a[s])
b[t+3]=J.mb(a[s])}return b},
mM:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.aG(a[s],0)
b[t+1]=J.aG(a[s],1)
b[t+2]=J.aG(a[s],2)
b[t+3]=J.aG(a[s],3)}return b},
nr:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
for(t=a.e,s=t.gH(t),s=s.gv(s),r=b.x,q=[[P.c,P.p]],p=[P.Q],o=[T.a2],n=[T.m],m=[T.aA];s.p();){l=s.gq()
if(!r.A(0,l)){k="Dropping unnecessary attribute: "+H.f(l)
if($.lw>0)H.bw("I: "+k)
continue}j=t.h(0,l)
switch($.$get$X().h(0,l).a){case"vec2":b.ag(l,G.mN(H.dS(j,"$isc",m,"$asc"),null),2)
break
case"vec3":b.ag(l,G.eL(H.dS(j,"$isc",n,"$asc"),null),3)
break
case"vec4":b.ag(l,G.mO(H.dS(j,"$isc",o,"$asc"),null),4)
break
case"float":b.ag(l,new Float32Array(H.iV(H.dS(j,"$isc",p,"$asc"))),1)
break
case"uvec4":b.ag(l,G.mM(H.dS(j,"$isc",q,"$asc"),null),4)
break
default:if(H.ao(!1))H.aB("unknown type for "+H.f(l)+" ["+J.m9(j[0]).l(0)+"] ["+new H.aN(H.j6(j),null).l(0)+"] "+H.f(j))}}},
n2:function(a,b,c){var t,s,r,q
t=b.d
s=new G.dh(t,J.kc(t.a),1,P.I(),b.e.x,null,0,-1,null,null,P.I(),"meshdata:"+a,!1,!0)
s.bx(G.eL(c,null))
t=new Array(c.length)
t.fixed$length=Array
r=H.w(t,[P.p])
for(t=c.length,q=0;q<t;++q)r[q]=q
s.y=J.dW(s.d.a)
s.bz(r)
return s},
jR:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.ak(null,null,null,P.r)
s=c.b
r=d.b
q=c.f
p=J.lV(b.a)
o=G.lb(b.a,35633,s)
J.ka(b.a,p,o)
n=G.lb(b.a,35632,r)
J.ka(b.a,p,n)
if(q.length>0)J.mp(b.a,p,q,35980)
J.mg(b.a,p)
if(!J.mf(b.a,p,35714))H.H(J.me(b.a,p))
t=new G.fT(b,c,d,p,P.jN(c.c,null),P.I(),P.I(),t,null,a,!1,!0)
t.dI(a,b,c,d)
return t},
fl:function fl(){},
dE:function dE(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
e6:function e6(){},
e9:function e9(a,b){this.a=a
this.b=b},
eQ:function eQ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eG:function eG(a,b,c){this.a=a
this.b=b
this.c=c},
eH:function eH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eT:function eT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dC:function dC(a,b,c){this.a=a
this.b=b
this.c=c},
dB:function dB(a,b,c){this.a=a
this.b=b
this.c=c},
fh:function fh(a,b,c,d){var _=this
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
fF:function fF(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
fT:function fT(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
aM:function aM(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
h3:function h3(){},
hn:function hn(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bZ:function bZ(){},
hz:function hz(a,b,c,d,e,f,g,h){var _=this
_.f=a
_.r=b
_.x=c
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h}},R={
ko:function(a,b,c){var t,s,r,q,p,o,n
t=[]
for(s=a.length,r=b.a,q=0;q<s;++q){p=a[q].e
if(p===-1)continue
o=r[q].bm()
n=new T.m(new Float32Array(3))
n.B(o)
n.T(0,c)
C.a.j(t,n)
n=C.a.h(r,p).bm()
o=new T.m(new Float32Array(3))
o.B(n)
o.T(0,c)
C.a.j(t,o)}return t},
e5:function e5(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dv:function dv(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
h7:function h7(){},
h8:function h8(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},A={
lu:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
if(!b.c)return
t=b.dx
t.B(c)
s=b.d
t.a0(0,s)
r=b.ch
if(r!=null&&b.cx!=null){J.as(b)
q=C.a.gaE(e)
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
p.b3(new T.av(o))
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
C.a.j(e,r)
a.dA(b.cx,e,d)
e.pop()}for(s=b.cy,r=s.length,l=0;l<s.length;s.length===r||(0,H.C)(s),++l)A.lu(a,s[l],t,d,e)},
bl:function bl(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
bo:function bo(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.a=d
_.b=e
_.c=f},
fS:function fS(){},
dQ:function(a){var t,s
t=C.j.f3(a,0,new A.j7())
s=536870911&t+(C.b.cX(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
j7:function j7(){}},D={
n3:function(a){var t,s
t=new P.T(0,$.y,null,[null])
s=new XMLHttpRequest()
C.y.fk(s,"GET",a)
W.a3(s,"loadend",new D.fb(new P.dH(t,[null]),s),!1,W.oj)
C.y.I(s,"")
return t},
fb:function fb(a,b){this.a=a
this.b=b}},T={av:function av(a){this.a=a},B:function B(a){this.a=a},bT:function bT(a){this.a=a},aA:function aA(a){this.a=a},m:function m(a){this.a=a},a2:function a2(a){this.a=a}},Y={
nq:function(a){var t,s,r,q,p
t=J.z(a)
s=t.h(a,"skinIndices")
r=t.h(a,"skinWeights")
if(s==null||J.aQ(s)===0)return 0
t=C.c.G(J.aQ(t.h(a,"vertices")),3)
q=J.z(s)
p=C.b.af(q.gk(s),t)
t*=p
H.b(t===q.gk(s))
H.b(t===J.aQ(r))
H.b(p<=4)
P.O("Skin multiplier is "+p)
return p},
mS:function(b2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
t=[]
s=Y.nq(b2)
r=J.z(b2)
q=r.h(b2,"faces")
p=J.z(q)
P.O("faces: "+p.gk(q))
o=Y.kv(r.h(b2,"vertices"))
n=Y.kv(r.h(b2,"normals"))
m=s===0
l=m?null:Y.kw(s,r.h(b2,"skinIndices"))
k=m?null:Y.kw(s,r.h(b2,"skinWeights"))
if(k!=null)for(m=k.length,j=0;j<m;++j){i=k[j]
h=i.a
g=h[0]+h[1]+h[2]+h[3]
if(g<0.98||g>1.02)H.bw("bad vector: "+J.as(i))}f=Y.mD(J.aG(r.h(b2,"uvs"),0))
for(r=s>0,m=f.length>0,h=n.length>0,e=o.length,d=0;d<p.gk(q);){c=d+1
b=p.h(q,d)
g=(b&1)===0?3:4
a=[]
for(d=c,a0=0;a0<g;++a0,d=c){c=d+1
C.a.j(a,p.h(q,d))}if((b&2)!==0){c=d+1
a1=p.h(q,d)
d=c}else a1=0
a2=[]
if((b&8)!==0)for(a0=0;a0<g;++a0,d=c){c=d+1
C.a.j(a2,C.a.h(f,p.h(q,d)))}a3=[]
if((b&16)!==0){c=d+1
a4=C.a.h(n,p.h(q,d))
for(a0=0;a0<g;++a0)C.a.j(a3,a4)
d=c}if((b&32)!==0)for(a0=0;a0<g;++a0,d=c){c=d+1
C.a.j(a3,C.a.h(n,p.h(q,d)))}a5=[]
if((b&64)!==0){H.b(!1)
c=d+1
a6=p.h(q,d)
for(a0=0;a0<g;++a0)C.a.j(a5,a6)
d=c}if((b&128)!==0){H.b(!1)
for(a0=0;a0<g;++a0,d=c){c=d+1
C.a.j(a5,p.h(q,d))}}for(;C.b.d1(t.length,a1);){a7=new G.eT(!1,[],[],[],P.I())
if(h)a7.aw("aNormal")
if(m)a7.aw("aTexUV")
if(r){a7.aw("aBoneIndex")
a7.aw("aBoneWeight")}C.a.j(t,a7)}a7=C.a.h(t,a1)
a8=[]
for(a9=a.length,j=0;j<a.length;a.length===a9||(0,H.C)(a),++j)C.a.j(a8,C.a.h(o,a[j]))
if(g===3)a7.ds(a8)
else{H.b(g===4)
a7.dt(a8)}if(a2.length>0)a7.dq("aTexUV",a2)
if(a3.length>0)a7.dr("aNormal",a3)
if(r){H.b(e===l.length)
H.b(e===k.length)
b0=[]
b1=[]
for(a9=a.length,j=0;j<a.length;a.length===a9||(0,H.C)(a),++j){c=a[j]
C.a.j(b0,C.a.h(l,c))
C.a.j(b1,C.a.h(k,c))}a7.bw("aBoneIndex",b0)
a7.bw("aBoneWeight",b1)}}P.O("out: "+t.length+" "+t[0].l(0))
return t},
mR:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
t=J.z(a)
s=t.h(a,"animation")
r=J.z(s)
q=r.h(s,"hierarchy")
p=r.h(s,"name")
r=r.h(s,"length")
o=J.z(q)
n=H.w(new Array(o.gk(q)),[L.ch])
H.b(o.gk(q)===J.aQ(t.h(a,"bones")))
for(m=0;m<o.gk(q);++m){l=[]
k=[]
j=[]
i=[]
h=[]
g=[]
for(t=J.bc(J.aG(o.h(q,m),"keys"));t.p();){f=t.gq()
e=J.z(f)
d=J.P(e.h(f,"time"))
if(e.A(f,"pos")){C.a.j(l,d)
C.a.j(k,Y.kO(e.h(f,"pos")))}if(e.A(f,"scale")){C.a.j(h,d)
C.a.j(g,Y.kN(e.h(f,"scl")))}if(e.A(f,"rot")){C.a.j(j,d)
C.a.j(i,Y.kM(e.h(f,"rot")))}}t=b[m]
c=new L.ch(t,l,k,j,i,h,g)
e=l.length
if(e===0){c.seb([0])
e=new Float32Array(3)
e[0]=0
e[1]=0
e[2]=0
c.sec([new T.m(e)])}e=c.d
if(e==null||e.length===0){c.sek([0])
e=new Float32Array(4)
e[0]=0
e[1]=0
e[2]=0
e[3]=1
c.sel([new T.bT(e)])}e=c.f
if(e==null||e.length===0){c.seo([0])
e=new Float32Array(3)
e[0]=1
e[1]=1
e[2]=1
c.sep([new T.m(e)])}H.b(c.d.length>0)
H.b(c.b.length>0)
H.b(c.f.length>0)
H.b(c.d.length===c.e.length)
H.b(c.b.length===c.c.length)
H.b(c.f.length===c.r.length)
t=t.d
H.b(n[t]==null)
n[t]=c}P.O("anim-bones: "+n.length)
return new L.h1(p,n,r)},
mT:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=J.z(a)
s=t.h(a,"metadata")
r=t.h(a,"bones")
q=H.w(new Array(J.aG(s,"bones")),[L.cg])
for(t=J.z(r),p=0;p<t.gk(r);++p){o=t.h(r,p)
n=J.z(o)
m=n.h(o,"name")
l=n.h(o,"parent")
k=Y.kN(n.h(o,"scl"))
j=Y.kO(n.h(o,"pos"))
i=Y.kM(n.h(o,"rotq"))
h=new T.B(new Float32Array(16))
h.bq(j,i)
h.T(0,k)
if(p!==0&&l<0)H.bw("found unusal root node "+p+" "+H.f(l))
n=new T.B(new Float32Array(16))
n.F()
H.b(C.b.ab(p,l))
q[p]=new L.cg(m,h,n,p,l)}P.O("bones: "+q.length)
L.nd(q)
return q},
kv:function(a){var t,s,r,q,p,o,n,m
t=J.z(a)
s=H.w(new Array(C.b.G(t.gk(a),3)),[T.m])
for(r=0;r<t.gk(a);r+=3){q=C.b.G(r,3)
p=J.P(t.h(a,r))
o=J.P(t.h(a,r+1))
n=J.P(t.h(a,r+2))
m=new Float32Array(3)
m[0]=p
m[1]=o
m[2]=n
s[q]=new T.m(m)}return s},
mD:function(a){var t,s,r,q,p,o,n
t=J.z(a)
s=H.w(new Array(C.b.G(t.gk(a),2)),[T.aA])
for(r=0;r<t.gk(a);r+=2){q=C.b.G(r,2)
p=J.P(t.h(a,r))
o=J.P(t.h(a,r+1))
n=new Float32Array(2)
n[0]=p
n[1]=o
s[q]=new T.aA(n)}return s},
kw:function(a,b){var t,s,r,q,p,o
t=J.z(b)
s=H.w(new Array(C.b.af(t.gk(b),a)),[T.a2])
for(r=0,q=0;r<t.gk(b);r+=a,++q){p=new Float32Array(4)
for(o=0;o<a;++o)p[o]=J.P(t.h(b,r+o))
s[q]=new T.a2(p)}return s},
kO:function(a){var t,s,r,q
if(a==null)return new T.m(new Float32Array(3))
t=J.z(a)
s=J.P(t.h(a,0))
r=J.P(t.h(a,1))
t=J.P(t.h(a,2))
q=new Float32Array(3)
q[0]=s
q[1]=r
q[2]=t
return new T.m(q)},
kN:function(a){var t,s,r,q
if(a==null){t=new Float32Array(3)
t[0]=1
t[1]=1
t[2]=1
return new T.m(t)}t=J.z(a)
s=J.P(t.h(a,0))
r=J.P(t.h(a,1))
t=J.P(t.h(a,2))
q=new Float32Array(3)
q[0]=s
q[1]=r
q[2]=t
return new T.m(q)},
kM:function(a){var t,s,r,q,p
if(a==null){t=new Float32Array(4)
t[3]=1
return new T.bT(t)}t=J.z(a)
s=J.P(t.h(a,0))
r=J.P(t.h(a,1))
q=J.P(t.h(a,2))
t=J.P(t.h(a,3))
p=new Float32Array(4)
p[0]=s
p[1]=r
p[2]=q
p[3]=t
return new T.bT(p)}}
var v=[C,H,J,P,W,B,L,G,R,A,D,T,Y]
setFunctionNamesIfNecessary(v)
var $={}
H.jJ.prototype={}
J.a.prototype={
w:function(a,b){return a===b},
gu:function(a){return H.b0(a)},
l:function(a){return H.fN(a)},
gC:function(a){return new H.aN(H.j6(a),null)}}
J.f0.prototype={
l:function(a){return String(a)},
gu:function(a){return a?519018:218159},
gC:function(a){return C.as},
$isaC:1}
J.f1.prototype={
w:function(a,b){return null==b},
l:function(a){return"null"},
gu:function(a){return 0},
gC:function(a){return C.am}}
J.bJ.prototype={
gu:function(a){return 0},
gC:function(a){return C.al},
l:function(a){return String(a)},
$iskK:1}
J.fH.prototype={}
J.b3.prototype={}
J.aY.prototype={
l:function(a){var t=a[$.$get$ky()]
return t==null?this.dl(a):J.as(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isjH:1}
J.aW.prototype={
b2:function(a,b){if(!!a.immutable$list)throw H.e(new P.v(b))},
b1:function(a,b){if(!!a.fixed$length)throw H.e(new P.v(b))},
j:function(a,b){this.b1(a,"add")
a.push(b)},
M:function(a,b){var t,s,r,q,p
t=a.length
this.b1(a,"addAll")
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.C)(b),++r,t=p){q=b[r]
p=t+1
H.b(t===a.length||H.H(new P.Z(a)))
a.push(q)}},
cz:function(a,b){return new H.bK(a,b,[H.aE(a,0),null])},
a8:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.f(a[s])
return t.join(b)},
t:function(a,b){return this.h(a,b)},
gf1:function(a){if(a.length>0)return a[0]
throw H.e(H.f_())},
gaE:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.e(H.f_())},
br:function(a,b,c,d,e){var t,s
this.b2(a,"setRange")
P.kU(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.H(P.b1(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.e(H.n0())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=d[e+s]
else for(s=0;s<t;++s)a[b+s]=d[e+s]},
c6:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.e(new P.Z(a))}return!1},
dg:function(a,b){this.b2(a,"sort")
H.dx(a,0,a.length-1,P.nQ())},
aH:function(a){return this.dg(a,null)},
D:function(a,b){var t
for(t=0;t<a.length;++t)if(J.G(a[t],b))return!0
return!1},
l:function(a){return P.eZ(a,"[","]")},
gv:function(a){return new J.e2(a,a.length,0,null,[H.aE(a,0)])},
gu:function(a){return H.b0(a)},
gk:function(a){return a.length},
sk:function(a,b){this.b1(a,"set length")
if(b<0)throw H.e(P.b1(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.U(a,b))
if(b>=a.length||b<0)throw H.e(H.U(a,b))
return a[b]},
i:function(a,b,c){this.b2(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.U(a,b))
if(b>=a.length||b<0)throw H.e(H.U(a,b))
a[b]=c},
$iso:1,
$aso:function(){},
$isd:1,
$asd:null,
$isc:1,
$asc:null}
J.jI.prototype={}
J.e2.prototype={
gq:function(){return this.d},
p:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.e(H.C(t))
r=this.c
if(r>=s){this.sbI(null)
return!1}this.sbI(t[r]);++this.c
return!0},
sbI:function(a){this.d=a}}
J.bi.prototype={
R:function(a,b){var t
if(typeof b!=="number")throw H.e(H.M(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaC(b)
if(this.gaC(a)===t)return 0
if(this.gaC(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaC:function(a){return a===0?1/a<0:a<0},
eF:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.e(new P.v(""+a+".ceil()"))},
f2:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.e(new P.v(""+a+".floor()"))},
a9:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(new P.v(""+a+".round()"))},
eG:function(a,b,c){if(this.R(b,c)>0)throw H.e(H.M(b))
if(this.R(a,b)<0)return b
if(this.R(a,c)>0)return c
return a},
fw:function(a){return a},
fC:function(a,b){var t
if(b>20)throw H.e(P.b1(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gaC(a))return"-"+t
return t},
l:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu:function(a){return a&0x1FFFFFFF},
a2:function(a,b){if(typeof b!=="number")throw H.e(H.M(b))
return a+b},
ae:function(a,b){if(typeof b!=="number")throw H.e(H.M(b))
return a-b},
cY:function(a,b){if(typeof b!=="number")throw H.e(H.M(b))
return a/b},
E:function(a,b){if(typeof b!=="number")throw H.e(H.M(b))
return a*b},
bo:function(a,b){var t
if(typeof b!=="number")throw H.e(H.M(b))
t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
af:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.c2(a,b)},
G:function(a,b){return(a|0)===a?a/b|0:this.c2(a,b)},
c2:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.e(new P.v("Result of truncating division is "+H.f(t)+": "+H.f(a)+" ~/ "+b))},
aX:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
cX:function(a,b){if(typeof b!=="number")throw H.e(H.M(b))
return(a&b)>>>0},
dn:function(a,b){if(typeof b!=="number")throw H.e(H.M(b))
return(a^b)>>>0},
ac:function(a,b){if(typeof b!=="number")throw H.e(H.M(b))
return a<b},
ab:function(a,b){if(typeof b!=="number")throw H.e(H.M(b))
return a>b},
d1:function(a,b){if(typeof b!=="number")throw H.e(H.M(b))
return a<=b},
cZ:function(a,b){if(typeof b!=="number")throw H.e(H.M(b))
return a>=b},
gC:function(a){return C.av},
$isY:1}
J.dd.prototype={
gC:function(a){return C.au},
$isQ:1,
$isp:1,
$isY:1}
J.dc.prototype={
gC:function(a){return C.at},
$isQ:1,
$isY:1}
J.aX.prototype={
aL:function(a,b){if(b>=a.length)throw H.e(H.U(a,b))
return a.charCodeAt(b)},
a2:function(a,b){if(typeof b!=="string")throw H.e(P.km(b,null,null))
return a+b},
dh:function(a,b,c){var t
if(c>a.length)throw H.e(P.b1(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bt:function(a,b){return this.dh(a,b,0)},
bv:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.fO(b,null,null))
if(b>c)throw H.e(P.fO(b,null,null))
if(c>a.length)throw H.e(P.fO(c,null,null))
return a.substring(b,c)},
di:function(a,b){return this.bv(a,b,null)},
fB:function(a){return a.toLowerCase()},
eJ:function(a,b,c){if(c>a.length)throw H.e(P.b1(c,0,a.length,null,null))
return H.oc(a,b,c)},
R:function(a,b){var t
if(typeof b!=="string")throw H.e(H.M(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
l:function(a){return a},
gu:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gC:function(a){return C.an},
gk:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.e(H.U(a,b))
return a[b]},
$iso:1,
$aso:function(){},
$isr:1}
H.d.prototype={$asd:null}
H.bj.prototype={
gv:function(a){return new H.df(this,this.gk(this),0,null,[H.ap(this,"bj",0)])},
aF:function(a,b){return this.dk(0,b)},
fA:function(a,b){var t,s
t=H.w([],[H.ap(this,"bj",0)])
C.a.sk(t,this.gk(this))
for(s=0;s<this.gk(this);++s)t[s]=this.t(0,s)
return t},
fz:function(a){return this.fA(a,!0)}}
H.df.prototype={
gq:function(){return this.d},
p:function(){var t,s,r,q
t=this.a
s=J.z(t)
r=s.gk(t)
if(this.b!==r)throw H.e(new P.Z(t))
q=this.c
if(q>=r){this.sai(null)
return!1}this.sai(s.t(t,q));++this.c
return!0},
sai:function(a){this.d=a}}
H.dg.prototype={
gv:function(a){return new H.fd(null,J.bc(this.a),this.b,this.$ti)},
gk:function(a){return J.aQ(this.a)},
$asa_:function(a,b){return[b]}}
H.em.prototype={$isd:1,
$asd:function(a,b){return[b]}}
H.fd.prototype={
p:function(){var t=this.b
if(t.p()){this.sai(this.c.$1(t.gq()))
return!0}this.sai(null)
return!1},
gq:function(){return this.a},
sai:function(a){this.a=a},
$asdb:function(a,b){return[b]}}
H.bK.prototype={
gk:function(a){return J.aQ(this.a)},
t:function(a,b){return this.b.$1(J.m2(this.a,b))},
$asd:function(a,b){return[b]},
$asbj:function(a,b){return[b]},
$asa_:function(a,b){return[b]}}
H.dF.prototype={
gv:function(a){return new H.hI(J.bc(this.a),this.b,this.$ti)}}
H.hI.prototype={
p:function(){var t,s
for(t=this.a,s=this.b;t.p();)if(s.$1(t.gq()))return!0
return!1},
gq:function(){return this.a.gq()}}
H.cs.prototype={}
H.js.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.jt.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.iv.prototype={
sfd:function(a){this.z=a},
sfh:function(a){this.ch=a}}
H.b7.prototype={
c5:function(a,b){if(!this.f.w(0,a))return
if(this.Q.j(0,b)&&!this.y)this.y=!0
this.b_()},
fp:function(a){var t,s,r,q,p
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
if(q===r.c)r.bX();++r.d}this.y=!1}this.b_()},
ew:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.u(a),s=0;r=this.ch,s<r.length;s+=2)if(t.w(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).j(r,a)
t=this.ch;(t&&C.a).j(t,b)},
fo:function(a){var t,s,r
if(this.ch==null)return
for(t=J.u(a),s=0;r=this.ch,s<r.length;s+=2)if(t.w(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.H(new P.v("removeRange"))
P.kU(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
dd:function(a,b){if(!this.r.w(0,a))return
this.db=b},
f7:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.I(0,c)
return}H.b(b===1)
t=this.cx
if(t==null){t=P.jO(null,null)
this.cx=t}t.U(0,new H.ip(a,c))},
f6:function(a,b){var t
if(!this.r.w(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.aD()
return}H.b(b===1)
t=this.cx
if(t==null){t=P.jO(null,null)
this.cx=t}t.U(0,this.gfe())},
f8:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.O(a)
if(b!=null)P.O(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.as(a)
s[1]=b==null?null:b.l(0)
for(r=new P.c3(t,t.r,null,null,[null]),r.c=t.e;r.p();)r.d.I(0,s)},
am:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.R(o)
p=H.aD(o)
this.f8(q,p)
if(this.db){this.aD()
if(this===u.globalState.e)throw o}}finally{this.cy=H.nL(r)
u.globalState.d=H.k3(t,"$isb7")
if(t!=null)$=t.gfc()
if(this.cx!=null)for(;n=this.cx,!n.gap(n);)this.cx.cB().$0()}return s},
cw:function(a){return this.b.h(0,a)},
bM:function(a,b){var t=this.b
if(t.A(0,a))throw H.e(P.cr("Registry: ports must be registered only once."))
t.i(0,a,b)},
b_:function(){var t=this.b
if(t.gk(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.aD()},
aD:function(){var t,s,r
t=this.cx
if(t!=null)t.W(0)
for(t=this.b,s=t.gcU(t),s=s.gv(s);s.p();)s.gq().dX()
t.W(0)
this.c.W(0)
u.globalState.z.aq(0,this.a)
this.dx.W(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].I(0,t[r+1])
this.ch=null}},
gfc:function(){return this.d},
geK:function(){return this.e}}
H.ip.prototype={
$0:function(){this.a.I(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.i1.prototype={
eT:function(){var t=this.a
if(t.b===t.c)return
return t.cB()},
cF:function(){var t,s,r
t=this.eT()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.A(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gap(s)}else s=!1
else s=!1
else s=!1
if(s)H.H(P.cr("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gap(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aK(["command","close"])
r=new H.an(!0,new P.dL(0,null,null,null,null,null,0,[null,P.p])).L(r)
s.toString
self.postMessage(r)}return!1}t.fl()
return!0},
c0:function(){if(self.window!=null)new H.i2(this).$0()
else for(;this.cF(););},
ar:function(){var t,s,r,q,p
if(!u.globalState.x)this.c0()
else try{this.c0()}catch(r){t=H.R(r)
s=H.aD(r)
q=u.globalState.Q
p=P.aK(["command","error","msg",H.f(t)+"\n"+H.f(s)])
p=new H.an(!0,P.c4(null,P.p)).L(p)
q.toString
self.postMessage(p)}}}
H.i2.prototype={
$0:function(){if(!this.a.cF())return
P.ni(C.x,this)},
$S:function(){return{func:1,v:true}}}
H.b8.prototype={
fl:function(){var t=this.a
if(t.y){C.a.j(t.z,this)
return}t.am(this.b)}}
H.iu.prototype={}
H.eX.prototype={
$0:function(){H.mX(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.eY.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(!this.d)this.a.$1(this.c)
else{s=this.a
if(H.bv(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.bv(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.b_()},
$S:function(){return{func:1,v:true}}}
H.hU.prototype={}
H.br.prototype={
I:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.nw(b)
if(t.geK()===s){s=J.z(r)
switch(s.h(r,0)){case"pause":t.c5(s.h(r,1),s.h(r,2))
break
case"resume":t.fp(s.h(r,1))
break
case"add-ondone":t.ew(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.fo(s.h(r,1))
break
case"set-errors-fatal":t.dd(s.h(r,1),s.h(r,2))
break
case"ping":t.f7(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.f6(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.j(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.aq(0,s)
break}return}u.globalState.f.a.U(0,new H.b8(t,new H.iw(this,r),"receive"))},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.br){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gu:function(a){return this.b.a}}
H.iw.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dU(0,this.b)},
$S:function(){return{func:1}}}
H.c6.prototype={
I:function(a,b){var t,s,r
t=P.aK(["command","message","port",this,"msg",b])
s=new H.an(!0,P.c4(null,P.p)).L(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.c6){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gu:function(a){return C.b.dn((this.b<<16^this.a<<8)>>>0,this.c)}}
H.bn.prototype={
dX:function(){this.c=!0
this.b=null},
dU:function(a,b){if(this.c)return
this.b.$1(b)},
$isnc:1}
H.hp.prototype={
dL:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.U(0,new H.b8(s,new H.hq(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.ba(new H.hr(this,b),0),a)}else{H.b(a>0)
throw H.e(new P.v("Timer greater than 0."))}}}
H.hq.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.hr.prototype={
$0:function(){this.a.c=null
H.jh()
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.at.prototype={
gu:function(a){var t=this.a
t=C.b.aX(t,0)^C.b.G(t,4294967296)
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
H.an.prototype={
L:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gk(t))
t=J.u(a)
if(!!t.$isbM)return["buffer",a]
if(!!t.$isbk)return["typed",a]
if(!!t.$iso)return this.d7(a)
if(!!t.$ismU){r=this.gd4()
q=t.gH(a)
q=H.jP(q,r,H.ap(q,"a_",0),null)
q=P.kL(q,!0,H.ap(q,"a_",0))
t=t.gcU(a)
t=H.jP(t,r,H.ap(t,"a_",0),null)
return["map",q,P.kL(t,!0,H.ap(t,"a_",0))]}if(!!t.$iskK)return this.d8(a)
if(!!t.$isa)this.cS(a)
if(!!t.$isnc)this.as(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isbr)return this.d9(a)
if(!!t.$isc6)return this.da(a)
if(!!t.$isbe){p=a.$static_name
if(p==null)this.as(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isat)return["capability",a.a]
if(!(a instanceof P.n))this.cS(a)
return["dart",u.classIdExtractor(a),this.d6(u.classFieldsExtractor(a))]},
as:function(a,b){throw H.e(new P.v((b==null?"Can't transmit:":b)+" "+H.f(a)))},
cS:function(a){return this.as(a,null)},
d7:function(a){var t
H.b(typeof a!=="string")
t=this.d5(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.as(a,"Can't serialize indexable: ")},
d5:function(a){var t,s
t=[]
C.a.sk(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.L(a[s])
return t},
d6:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.L(a[t]))
return a},
d8:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.as(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sk(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.L(a[t[r]])
return["js-object",t,s]},
da:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
d9:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.b6.prototype={
X:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.e(P.jC("Bad serialized message: "+H.f(a)))
switch(C.a.gf1(a)){case"ref":H.b(J.G(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.b(J.G(a[0],"buffer"))
t=a[1]
C.a.j(this.b,t)
return t
case"typed":H.b(J.G(a[0],"typed"))
t=a[1]
C.a.j(this.b,t)
return t
case"fixed":H.b(J.G(a[0],"fixed"))
t=a[1]
C.a.j(this.b,t)
s=H.w(this.al(t),[null])
s.fixed$length=Array
return s
case"extendable":H.b(J.G(a[0],"extendable"))
t=a[1]
C.a.j(this.b,t)
return H.w(this.al(t),[null])
case"mutable":H.b(J.G(a[0],"mutable"))
t=a[1]
C.a.j(this.b,t)
return this.al(t)
case"const":H.b(J.G(a[0],"const"))
t=a[1]
C.a.j(this.b,t)
s=H.w(this.al(t),[null])
s.fixed$length=Array
return s
case"map":return this.eW(a)
case"sendport":return this.eX(a)
case"raw sendport":H.b(J.G(a[0],"raw sendport"))
t=a[1]
C.a.j(this.b,t)
return t
case"js-object":return this.eV(a)
case"function":H.b(J.G(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.j(this.b,t)
return t
case"capability":H.b(J.G(a[0],"capability"))
return new H.at(a[1])
case"dart":H.b(J.G(a[0],"dart"))
r=a[1]
q=a[2]
p=u.instanceFromClassId(r)
C.a.j(this.b,p)
this.al(q)
return u.initializeEmptyInstance(r,p,q)
default:throw H.e("couldn't deserialize: "+H.f(a))}},
al:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.X(a[t]))
return a},
eW:function(a){var t,s,r,q,p
H.b(J.G(a[0],"map"))
t=a[1]
s=a[2]
r=P.I()
C.a.j(this.b,r)
t=J.mh(t,this.geU()).fz(0)
for(q=J.z(s),p=0;p<t.length;++p)r.i(0,t[p],this.X(q.h(s,p)))
return r},
eX:function(a){var t,s,r,q,p,o,n
H.b(J.G(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.cw(r)
if(o==null)return
n=new H.br(o,s)}else n=new H.c6(t,r,s)
C.a.j(this.b,n)
return n},
eV:function(a){var t,s,r,q,p,o
H.b(J.G(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.j(this.b,r)
for(q=J.z(t),p=J.z(s),o=0;o<q.gk(t);++o)r[q.h(t,o)]=this.X(p.h(s,o))
return r}}
H.fR.prototype={}
H.hw.prototype={
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
H.dr.prototype={
l:function(a){var t=this.b
if(t==null)return"NullError: "+H.f(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.f3.prototype={
l:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.f(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.f(this.a)+")"}}
H.hA.prototype={
l:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.ju.prototype={
$1:function(a){if(!!J.u(a).$isbg)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.dN.prototype={
l:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.jc.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.jd.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.je.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.jf.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.jg.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.be.prototype={
l:function(a){return"Closure '"+H.ds(this).trim()+"'"},
$isjH:1,
gfF:function(){return this},
$D:null}
H.hj.prototype={}
H.h6.prototype={
l:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.by.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.by))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gu:function(a){var t,s
t=this.c
if(t==null)s=H.b0(this.a)
else s=typeof t!=="object"?J.ar(t):H.b0(t)
return(s^H.b0(this.b))>>>0},
l:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.f(this.d)+"' of "+H.fN(t)}}
H.hy.prototype={
l:function(a){return this.a}}
H.e8.prototype={
l:function(a){return this.a}}
H.fX.prototype={
l:function(a){return"RuntimeError: "+H.f(this.a)}}
H.hO.prototype={
l:function(a){return C.i.a2("Assertion failed: ",P.jG(this.a))}}
H.aN.prototype={
l:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gu:function(a){return J.ar(this.a)},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.aN){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.aj.prototype={
gk:function(a){return this.a},
gap:function(a){return this.a===0},
gH:function(a){return new H.f8(this,[H.aE(this,0)])},
gcU:function(a){return H.jP(this.gH(this),new H.f2(this),H.aE(this,0),H.aE(this,1))},
A:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bV(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bV(s,b)}else return this.f9(b)},
f9:function(a){var t=this.d
if(t==null)return!1
return this.ao(this.az(t,this.an(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.aj(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.aj(r,b)
return s==null?null:s.b}else return this.fa(b)},
fa:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.az(t,this.an(a))
r=this.ao(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aT()
this.b=t}this.bK(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aT()
this.c=s}this.bK(s,b,c)}else{r=this.d
if(r==null){r=this.aT()
this.d=r}q=this.an(b)
p=this.az(r,q)
if(p==null)this.aW(r,q,[this.aU(b,c)])
else{o=this.ao(p,b)
if(o>=0)p[o].b=c
else p.push(this.aU(b,c))}}},
aq:function(a,b){if(typeof b==="string")return this.c_(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.c_(this.c,b)
else return this.fb(b)},
fb:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.az(t,this.an(a))
r=this.ao(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.c3(q)
return q.b},
W:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
a7:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.e(new P.Z(this))
t=t.c}},
bK:function(a,b,c){var t=this.aj(a,b)
if(t==null)this.aW(a,b,this.aU(b,c))
else t.b=c},
c_:function(a,b){var t
if(a==null)return
t=this.aj(a,b)
if(t==null)return
this.c3(t)
this.bW(a,b)
return t.b},
aU:function(a,b){var t,s
t=new H.f7(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
c3:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.r=this.r+1&67108863},
an:function(a){return J.ar(a)&0x3ffffff},
ao:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.G(a[s].a,b))return s
return-1},
l:function(a){return P.kP(this)},
aj:function(a,b){return a[b]},
az:function(a,b){return a[b]},
aW:function(a,b,c){H.b(c!=null)
a[b]=c},
bW:function(a,b){delete a[b]},
bV:function(a,b){return this.aj(a,b)!=null},
aT:function(){var t=Object.create(null)
this.aW(t,"<non-identifier-key>",t)
this.bW(t,"<non-identifier-key>")
return t},
$ismU:1}
H.f2.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.f7.prototype={}
H.f8.prototype={
gk:function(a){return this.a.a},
gv:function(a){var t,s
t=this.a
s=new H.f9(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.f9.prototype={
gq:function(){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.Z(t))
else{t=this.c
if(t==null){this.sbJ(null)
return!1}else{this.sbJ(t.a)
this.c=this.c.c
return!0}}},
sbJ:function(a){this.d=a}}
H.j8.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.j9.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.r]}}}
H.ja.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.r]}}}
H.bM.prototype={
gC:function(a){return C.ae},
$isbM:1}
H.bk.prototype={$isbk:1}
H.fm.prototype={
gC:function(a){return C.af}}
H.dj.prototype={
gk:function(a){return a.length},
$iso:1,
$aso:function(){},
$isq:1,
$asq:function(){}}
H.dk.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.H(H.U(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.H(H.U(a,b))
a[b]=c}}
H.dl.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.H(H.U(a,b))
a[b]=c},
$isd:1,
$asd:function(){return[P.p]},
$isc:1,
$asc:function(){return[P.p]}}
H.di.prototype={
gC:function(a){return C.ag},
$isd:1,
$asd:function(){return[P.Q]},
$isc:1,
$asc:function(){return[P.Q]},
$iseM:1}
H.fn.prototype={
gC:function(a){return C.ah},
$isd:1,
$asd:function(){return[P.Q]},
$isc:1,
$asc:function(){return[P.Q]}}
H.fo.prototype={
gC:function(a){return C.ai},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.H(H.U(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.p]},
$isc:1,
$asc:function(){return[P.p]}}
H.fp.prototype={
gC:function(a){return C.aj},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.H(H.U(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.p]},
$isc:1,
$asc:function(){return[P.p]},
$iskH:1}
H.fq.prototype={
gC:function(a){return C.ak},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.H(H.U(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.p]},
$isc:1,
$asc:function(){return[P.p]}}
H.fr.prototype={
gC:function(a){return C.ao},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.H(H.U(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.p]},
$isc:1,
$asc:function(){return[P.p]},
$isl8:1}
H.fs.prototype={
gC:function(a){return C.ap},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.H(H.U(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.p]},
$isc:1,
$asc:function(){return[P.p]},
$isl9:1}
H.dm.prototype={
gC:function(a){return C.aq},
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.H(H.U(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.p]},
$isc:1,
$asc:function(){return[P.p]}}
H.ft.prototype={
gC:function(a){return C.ar},
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.H(H.U(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.p]},
$isc:1,
$asc:function(){return[P.p]},
$isla:1}
H.bN.prototype={
$aso:function(){},
$isd:1,
$asd:function(){return[P.p]},
$asq:function(){},
$isc:1,
$asc:function(){return[P.p]}}
H.bO.prototype={
$aso:function(){},
$isd:1,
$asd:function(){return[P.Q]},
$asq:function(){},
$isc:1,
$asc:function(){return[P.Q]}}
H.bP.prototype={
$aso:function(){},
$asd:function(){return[P.Q]},
$asq:function(){},
$asc:function(){return[P.Q]}}
H.bQ.prototype={
$aso:function(){},
$asd:function(){return[P.p]},
$asq:function(){},
$asc:function(){return[P.p]}}
P.hQ.prototype={
$1:function(a){var t,s
H.jh()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.hP.prototype={
$1:function(a){var t,s
t=this.a
H.b(t.a==null);++u.globalState.f.b
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.hR.prototype={
$0:function(){H.jh()
this.a.$0()},
$S:function(){return{func:1}}}
P.hS.prototype={
$0:function(){H.jh()
this.a.$0()},
$S:function(){return{func:1}}}
P.eS.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.b)this.d.J(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.b)this.d.J(t.c,t.d)},
$S:function(){return{func:1,args:[,,]}}}
P.eR.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){r[this.e]=a
if(s===0)this.d.bU(r)}else if(t.b===0&&!this.b)this.d.J(t.c,t.d)},
$S:function(){return{func:1,args:[,]}}}
P.hW.prototype={
eI:function(a,b){if(a==null)a=new P.bm()
if(this.a.a!==0)throw H.e(new P.al("Future already completed"))
$.y.toString
this.J(a,b)},
eH:function(a){return this.eI(a,null)}}
P.dH.prototype={
aB:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.al("Future already completed"))
t.bN(b)},
J:function(a,b){this.a.bO(a,b)}}
P.iM.prototype={
aB:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.al("Future already completed"))
t.aN(b)},
J:function(a,b){this.a.J(a,b)}}
P.dK.prototype={
fi:function(a){if(this.c!==6)return!0
H.b(!0)
return this.b.b.bb(this.d,a.a)},
f5:function(a){var t,s
t=(this.c&2)!==0
if(t){H.b(t)
t=this.e!=null}else t=!1
H.b(t)
s=this.e
t=this.b.b
if(H.bv(s,{func:1,args:[P.n,P.bV]}))return t.fs(s,a.a,a.b)
else return t.bb(s,a.a)}}
P.T.prototype={
bd:function(a,b){var t,s,r
t=$.y
if(t!==C.d){t.toString
if(b!=null)b=P.nD(b,t)}s=new P.T(0,t,null,[null])
r=b==null?1:3
this.bL(new P.dK(null,s,r,a,b,[H.aE(this,0),null]))
return s},
bc:function(a){return this.bd(a,null)},
bQ:function(a){H.b(this.a<4)
H.b(a.a>=4)
this.a=a.a
this.c=a.c},
bL:function(a){var t
H.b(a.a==null)
t=this.a
if(t<=1){a.a=H.k3(this.c,"$isdK")
this.c=a}else{if(t===2){H.b(!0)
t=this.c
if(t.a<4){t.bL(a)
return}this.bQ(t)}H.b(this.a>=4)
t=this.b
t.toString
P.bt(null,null,t,new P.i7(this,a))}},
bZ:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.b(!0)
s=this.c
if(s.a<4){s.bZ(a)
return}this.bQ(s)}H.b(this.a>=4)
t.a=this.ak(a)
s=this.b
s.toString
P.bt(null,null,s,new P.ig(t,this))}},
aV:function(){H.b(this.a<4)
var t=this.c
this.c=null
return this.ak(t)},
ak:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aN:function(a){var t,s
H.b(this.a<4)
t=this.$ti
if(H.ca(a,"$isbh",t,"$asbh"))if(H.ca(a,"$isT",t,null))P.ia(a,this)
else P.lc(a,this)
else{s=this.aV()
H.b(this.a<4)
this.a=4
this.c=a
P.bq(this,s)}},
bU:function(a){var t
H.b(this.a<4)
H.b(!J.u(a).$isbh)
t=this.aV()
H.b(this.a<4)
this.a=4
this.c=a
P.bq(this,t)},
J:function(a,b){var t
H.b(this.a<4)
t=this.aV()
H.b(this.a<4)
this.a=8
this.c=new P.bd(a,b)
P.bq(this,t)},
dZ:function(a){return this.J(a,null)},
bN:function(a){var t
H.b(this.a<4)
if(H.ca(a,"$isbh",this.$ti,"$asbh")){this.dW(a)
return}H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.bt(null,null,t,new P.i9(this,a))},
dW:function(a){var t
if(H.ca(a,"$isT",this.$ti,null)){if(a.a===8){H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.bt(null,null,t,new P.ie(this,a))}else P.ia(a,this)
return}P.lc(a,this)},
bO:function(a,b){var t
H.b(this.a<4)
H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.bt(null,null,t,new P.i8(this,a,b))},
$isbh:1,
gaY:function(){return this.a},
gej:function(){return this.c}}
P.i7.prototype={
$0:function(){P.bq(this.a,this.b)},
$S:function(){return{func:1}}}
P.ig.prototype={
$0:function(){P.bq(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.ib.prototype={
$1:function(a){var t=this.a
H.b(t.a===1)
H.b(t.a===1)
t.a=0
t.aN(a)},
$S:function(){return{func:1,args:[,]}}}
P.ic.prototype={
$2:function(a,b){var t=this.a
H.b(t.a===1)
t.J(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.id.prototype={
$0:function(){this.a.J(this.b,this.c)},
$S:function(){return{func:1}}}
P.i9.prototype={
$0:function(){this.a.bU(this.b)},
$S:function(){return{func:1}}}
P.ie.prototype={
$0:function(){P.ia(this.b,this.a)},
$S:function(){return{func:1}}}
P.i8.prototype={
$0:function(){this.a.J(this.b,this.c)},
$S:function(){return{func:1}}}
P.ij.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.d
p=q.c
H.b((p&1)===0)
o=(p&2)===0
H.b(o)
t=null
try{H.b(o)
H.b(p===8)
t=q.b.b.cE(q.d)}catch(n){s=H.R(n)
r=H.aD(n)
if(this.c){q=this.a.a
H.b(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.b(q.a===8)
p.b=q.c}else p.b=new P.bd(s,r)
p.a=!0
return}if(!!J.u(t).$isbh){if(t instanceof P.T&&t.gaY()>=4){if(t.gaY()===8){q=t
H.b(q.gaY()===8)
p=this.b
p.b=q.gej()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.bc(new P.ik(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.ik.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.ii.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.b((r.c&1)!==0)
this.a.b=r.b.b.bb(r.d,this.c)}catch(q){t=H.R(q)
s=H.aD(q)
r=this.a
r.b=new P.bd(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.ih.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.b(q.a===8)
t=q.c
q=this.c
if(q.fi(t)){H.b((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.f5(t)
p.a=!1}}catch(o){s=H.R(o)
r=H.aD(o)
q=this.a
p=q.a
H.b(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.b(q.a===8)
m.b=q.c}else m.b=new P.bd(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.dG.prototype={}
P.ha.prototype={
gk:function(a){var t,s
t={}
s=new P.T(0,$.y,null,[P.p])
t.a=0
this.ff(new P.hc(t),!0,new P.hd(t,s),s.gdY())
return s}}
P.hc.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.hd.prototype={
$0:function(){this.b.aN(this.a.a)},
$S:function(){return{func:1}}}
P.hb.prototype={}
P.bd.prototype={
l:function(a){return H.f(this.a)},
$isbg:1}
P.iT.prototype={}
P.iX.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.bm()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.e(t)
r=H.e(t)
r.stack=s.l(0)
throw r},
$S:function(){return{func:1}}}
P.iy.prototype={
ft:function(a){var t,s,r
try{if(C.d===$.y){a.$0()
return}P.lh(null,null,this,a)}catch(r){t=H.R(r)
s=H.aD(r)
P.iW(null,null,this,t,s)}},
fu:function(a,b){var t,s,r
try{if(C.d===$.y){a.$1(b)
return}P.li(null,null,this,a,b)}catch(r){t=H.R(r)
s=H.aD(r)
P.iW(null,null,this,t,s)}},
eC:function(a){return new P.iA(this,a)},
b0:function(a){return new P.iz(this,a)},
eD:function(a){return new P.iB(this,a)},
h:function(a,b){return},
cE:function(a){if($.y===C.d)return a.$0()
return P.lh(null,null,this,a)},
bb:function(a,b){if($.y===C.d)return a.$1(b)
return P.li(null,null,this,a,b)},
fs:function(a,b,c){if($.y===C.d)return a.$2(b,c)
return P.nE(null,null,this,a,b,c)}}
P.iA.prototype={
$0:function(){return this.a.cE(this.b)},
$S:function(){return{func:1}}}
P.iz.prototype={
$0:function(){return this.a.ft(this.b)},
$S:function(){return{func:1}}}
P.iB.prototype={
$1:function(a){return this.a.fu(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.dL.prototype={
an:function(a){return H.o6(a)&0x3ffffff},
ao:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.ir.prototype={
gv:function(a){var t=new P.c3(this,this.r,null,null,[null])
t.c=this.e
return t},
gk:function(a){return this.a},
D:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.e_(b)},
e_:function(a){var t=this.d
if(t==null)return!1
return this.ay(t[this.ax(a)],a)>=0},
cw:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.D(0,a)?a:null
else return this.ea(a)},
ea:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.ax(a)]
r=this.ay(s,a)
if(r<0)return
return J.aG(s,r).ge2()},
j:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
H.b(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.bR(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
H.b(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.bR(r,b)}else return this.U(0,b)},
U:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.nu()
this.d=t}s=this.ax(b)
r=t[s]
if(r==null){q=[this.aM(b)]
H.b(q!=null)
t[s]=q}else{if(this.ay(r,b)>=0)return!1
r.push(this.aM(b))}return!0},
aq:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bS(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bS(this.c,b)
else return this.ee(0,b)},
ee:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.ax(b)]
r=this.ay(s,b)
if(r<0)return!1
this.bT(s.splice(r,1)[0])
return!0},
W:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
bR:function(a,b){var t
if(a[b]!=null)return!1
t=this.aM(b)
H.b(!0)
a[b]=t
return!0},
bS:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bT(t)
delete a[b]
return!0},
aM:function(a){var t,s
t=new P.is(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bT:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.r=this.r+1&67108863},
ax:function(a){return J.ar(a)&0x3ffffff},
ay:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.G(a[s].a,b))return s
return-1},
$isd:1,
$asd:null}
P.is.prototype={
ge2:function(){return this.a}}
P.c3.prototype={
gq:function(){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.Z(t))
else{t=this.c
if(t==null){this.sah(null)
return!1}else{this.sah(t.a)
this.c=this.c.b
return!0}}},
sah:function(a){this.d=a}}
P.io.prototype={}
P.de.prototype={}
P.x.prototype={
gv:function(a){return new H.df(a,this.gk(a),0,null,[H.ap(a,"x",0)])},
t:function(a,b){return this.h(a,b)},
cz:function(a,b){return new H.bK(a,b,[H.ap(a,"x",0),null])},
f3:function(a,b,c){var t,s,r
t=this.gk(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gk(a))throw H.e(new P.Z(a))}return s},
l:function(a){return P.eZ(a,"[","]")},
$isd:1,
$asd:null,
$isc:1,
$asc:null}
P.fe.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.f(a)
t.a=s+": "
t.a+=H.f(b)},
$S:function(){return{func:1,args:[,,]}}}
P.fa.prototype={
gv:function(a){return new P.it(this,this.c,this.d,this.b,null,this.$ti)},
gap:function(a){return this.b===this.c},
gk:function(a){return(this.c-this.b&this.a.length-1)>>>0},
t:function(a,b){var t=(this.c-this.b&this.a.length-1)>>>0
if(C.b.ab(0,b)||b>=t)H.H(P.F(b,this,"index",null,t))
return this.a[(C.b.a2(this.b,b)&this.a.length-1)>>>0]},
W:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
l:function(a){return P.eZ(this,"{","}")},
cB:function(){var t,s,r
t=this.b
if(t===this.c)throw H.e(H.f_());++this.d
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
if(this.b===t)this.bX();++this.d},
bX:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.w(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.br(s,0,q,t,r)
C.a.br(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sc1(s)},
dE:function(a,b){var t
H.b(!0)
t=new Array(8)
t.fixed$length=Array
this.sc1(H.w(t,[b]))},
sc1:function(a){this.a=a},
$asd:null}
P.it.prototype={
gq:function(){return this.e},
p:function(){var t,s
t=this.a
if(this.c!==t.d)H.H(new P.Z(t))
s=this.d
if(s===this.b){this.sah(null)
return!1}this.sah(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sah:function(a){this.e=a}}
P.h_.prototype={
M:function(a,b){var t
for(t=J.bc(b);t.p();)this.j(0,t.gq())},
l:function(a){return P.eZ(this,"{","}")},
$isd:1,
$asd:null}
P.fZ.prototype={}
P.bS.prototype={$isd:1,$asd:null,$isc:1,$asc:null}
P.iq.prototype={
h:function(a,b){var t,s
t=this.b
if(t==null){H.b(!0)
return this.c.h(0,b)}else if(typeof b!=="string")return
else{s=t[b]
return typeof s=="undefined"?this.ed(b):s}},
gk:function(a){var t
if(this.b==null){H.b(!0)
t=this.c
t=t.gk(t)}else t=this.aO().length
return t},
i:function(a,b,c){var t,s
if(this.b==null){H.b(!0)
this.c.i(0,b,c)}else if(this.A(0,b)){t=this.b
t[b]=c
s=this.a
if(s==null?t!=null:s!==t)s[b]=null}else this.ev().i(0,b,c)},
A:function(a,b){if(this.b==null){H.b(!0)
return this.c.A(0,b)}if(typeof b!=="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,b)},
a7:function(a,b){var t,s,r,q
if(this.b==null){H.b(!0)
return this.c.a7(0,b)}t=this.aO()
for(s=0;s<t.length;++s){r=t[s]
q=this.b[r]
if(typeof q=="undefined"){q=P.iU(this.a[r])
this.b[r]=q}b.$2(r,q)
if(t!==this.c)throw H.e(new P.Z(this))}},
l:function(a){return P.kP(this)},
aO:function(){H.b(this.b!=null)
var t=this.c
if(t==null){t=Object.keys(this.a)
this.c=t}return t},
ev:function(){var t,s,r,q,p
if(this.b==null){H.b(!0)
return this.c}t=P.jM(P.r,null)
s=this.aO()
for(r=0;q=s.length,r<q;++r){p=s[r]
t.i(0,p,this.h(0,p))}if(q===0)C.a.j(s,null)
else C.a.sk(s,0)
this.b=null
this.a=null
this.c=t
H.b(!0)
return t},
ed:function(a){var t
if(!Object.prototype.hasOwnProperty.call(this.a,a))return
t=P.iU(this.a[a])
return this.b[a]=t}}
P.cj.prototype={}
P.ck.prototype={}
P.f4.prototype={
eQ:function(a,b){var t=P.nC(a,this.geR().a)
return t},
eP:function(a){return this.eQ(a,null)},
geR:function(){return C.W},
$ascj:function(){return[P.n,P.r]}}
P.f5.prototype={
$asck:function(){return[P.r,P.n]}}
P.aC.prototype={}
P.K.prototype={}
P.aU.prototype={
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.aU))return!1
return this.a===b.a&&this.b===b.b},
R:function(a,b){return C.b.R(this.a,b.a)},
gu:function(a){var t=this.a
return(t^C.b.aX(t,30))&1073741823},
l:function(a){var t,s,r,q,p,o,n
t=P.mF(H.nb(this))
s=P.cl(H.n9(this))
r=P.cl(H.n5(this))
q=P.cl(H.n6(this))
p=P.cl(H.n8(this))
o=P.cl(H.na(this))
n=P.mG(H.n7(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
gfj:function(){return this.a},
dw:function(a,b){var t
if(!(Math.abs(this.a)>864e13))t=!1
else t=!0
if(t)throw H.e(P.jC("DateTime is outside valid range: "+this.gfj()))},
$isK:1,
$asK:function(){return[P.aU]}}
P.Q.prototype={$isK:1,
$asK:function(){return[P.Y]}}
P.aH.prototype={
ac:function(a,b){return C.b.ac(this.a,b.ge1())},
ab:function(a,b){return C.b.ab(this.a,b.ge1())},
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.aH))return!1
return this.a===b.a},
gu:function(a){return this.a&0x1FFFFFFF},
R:function(a,b){return C.b.R(this.a,b.a)},
l:function(a){var t,s,r,q,p
t=new P.el()
s=this.a
if(s<0)return"-"+new P.aH(0-s).l(0)
r=t.$1(C.b.G(s,6e7)%60)
q=t.$1(C.b.G(s,1e6)%60)
p=new P.ek().$1(s%1e6)
return""+C.b.G(s,36e8)+":"+H.f(r)+":"+H.f(q)+"."+H.f(p)},
$isK:1,
$asK:function(){return[P.aH]}}
P.ek.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.r,args:[P.p]}}}
P.el.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.r,args:[P.p]}}}
P.bg.prototype={}
P.ce.prototype={
l:function(a){return"Assertion failed"}}
P.bm.prototype={
l:function(a){return"Throw of null."}}
P.ah.prototype={
gaQ:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaP:function(){return""},
l:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.f(t)
q=this.gaQ()+s+r
if(!this.a)return q
p=this.gaP()
o=P.jG(this.b)
return q+p+": "+H.f(o)}}
P.du.prototype={
gaQ:function(){return"RangeError"},
gaP:function(){var t,s,r
H.b(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.f(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.f(t)
else if(r>t)s=": Not in range "+H.f(t)+".."+H.f(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.f(t)}return s}}
P.eW.prototype={
gaQ:function(){return"RangeError"},
gaP:function(){H.b(this.a)
if(J.lI(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.f(t)},
gk:function(a){return this.f}}
P.v.prototype={
l:function(a){return"Unsupported operation: "+this.a}}
P.c_.prototype={
l:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.al.prototype={
l:function(a){return"Bad state: "+this.a}}
P.Z.prototype={
l:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.f(P.jG(t))+"."}}
P.dy.prototype={
l:function(a){return"Stack Overflow"},
$isbg:1}
P.ec.prototype={
l:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.i6.prototype={
l:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.f(t)}}
P.eP.prototype={
l:function(a){var t,s
t=this.a
s=""!==t?"FormatException: "+t:"FormatException"
return s}}
P.en.prototype={
l:function(a){return"Expando:"+H.f(this.a)},
h:function(a,b){var t,s
t=this.b
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.H(P.km(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.jQ(b,"expando$values")
return s==null?null:H.jQ(s,t)},
i:function(a,b,c){var t,s
t=this.b
if(typeof t!=="string")t.set(b,c)
else{s=H.jQ(b,"expando$values")
if(s==null){s=new P.n()
H.kT(b,"expando$values",s)}H.kT(s,t,c)}}}
P.p.prototype={$isK:1,
$asK:function(){return[P.Y]}}
P.a_.prototype={
aF:function(a,b){return new H.dF(this,b,[H.ap(this,"a_",0)])},
gk:function(a){var t,s
H.b(!this.$isd)
t=this.gv(this)
for(s=0;t.p();)++s
return s},
ga3:function(a){var t,s
t=this.gv(this)
if(!t.p())throw H.e(H.f_())
s=t.gq()
if(t.p())throw H.e(H.n1())
return s},
t:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(P.mw("index"))
if(b<0)H.H(P.b1(b,0,null,"index",null))
for(t=this.gv(this),s=0;t.p();){r=t.gq()
if(b===s)return r;++s}throw H.e(P.F(b,this,"index",null,s))},
l:function(a){return P.n_(this,"(",")")}}
P.db.prototype={}
P.c.prototype={$isd:1,$asd:null,$asc:null}
P.aL.prototype={}
P.b_.prototype={
gu:function(a){return P.n.prototype.gu.call(this,this)},
l:function(a){return"null"}}
P.Y.prototype={$isK:1,
$asK:function(){return[P.Y]}}
P.n.prototype={constructor:P.n,$isn:1,
w:function(a,b){return this===b},
gu:function(a){return H.b0(this)},
l:function(a){return H.fN(this)},
gC:function(a){return new H.aN(H.j6(this),null)},
toString:function(){return this.l(this)}}
P.bV.prototype={}
P.r.prototype={$isK:1,
$asK:function(){return[P.r]}}
P.bW.prototype={
gk:function(a){return this.a.length},
l:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga5:function(){return this.a}}
W.k.prototype={}
W.e_.prototype={
l:function(a){return String(a)},
$isa:1}
W.e1.prototype={
l:function(a){return String(a)},
$isa:1}
W.a6.prototype={$isn:1}
W.e4.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.a6]},
$isd:1,
$asd:function(){return[W.a6]},
$isq:1,
$asq:function(){return[W.a6]},
$isc:1,
$asc:function(){return[W.a6]}}
W.cf.prototype={}
W.aS.prototype={$isa:1,$isaS:1,$ish:1}
W.ci.prototype={
d_:function(a,b,c){var t=this.e4(a,b,P.nO(c,null))
return t},
e4:function(a,b,c){return a.getContext(b,c)}}
W.e7.prototype={
aG:function(a){return P.j1(a.getContextAttributes())}}
W.aT.prototype={$isa:1,
gk:function(a){return a.length}}
W.ea.prototype={$isa:1,$ish:1}
W.D.prototype={$isn:1}
W.bf.prototype={
bP:function(a,b){var t,s
t=$.$get$kx()
s=t[b]
if(typeof s==="string")return s
s=this.er(a,b)
t[b]=s
return s},
er:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.mH()+b
if(t in a)return t
return b},
gk:function(a){return a.length}}
W.eb.prototype={}
W.ed.prototype={
h:function(a,b){return a[b]},
gk:function(a){return a.length}}
W.ee.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.cm.prototype={}
W.aV.prototype={
ex:function(a,b){return a.adoptNode(b)},
e0:function(a,b){return a.createEvent(b)},
bg:function(a,b){return a.getElementsByTagName(b)},
d0:function(a,b){return a.getElementById(b)},
fm:function(a,b){return a.querySelector(b)},
$isaV:1}
W.cn.prototype={$isa:1}
W.ef.prototype={
l:function(a){return String(a)}}
W.co.prototype={
eN:function(a,b){return a.createHTMLDocument(b)}}
W.eg.prototype={
gat:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.cp.prototype={
gat:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.cq.prototype={
l:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.ga1(a))+" x "+H.f(this.ga_(a))},
w:function(a,b){var t
if(b==null)return!1
t=J.u(b)
if(!t.$isL)return!1
return a.left===t.gb5(b)&&a.top===t.gbe(b)&&this.ga1(a)===t.ga1(b)&&this.ga_(a)===t.ga_(b)},
gu:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.ga1(a)
q=this.ga_(a)
return W.lf(W.b9(W.b9(W.b9(W.b9(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga_:function(a){return a.height},
gb5:function(a){return a.left},
gbe:function(a){return a.top},
ga1:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isL:1,
$asL:function(){}}
W.eh.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[P.r]},
$isd:1,
$asd:function(){return[P.r]},
$isq:1,
$asq:function(){return[P.r]},
$isc:1,
$asc:function(){return[P.r]}}
W.ei.prototype={
gk:function(a){return a.length}}
W.a7.prototype={
geA:function(a){return new W.i0(a)},
l:function(a){return a.localName},
N:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.kF
if(t==null){t=H.w([],[W.dp])
s=new W.dq(t)
C.a.j(t,W.ld(null))
C.a.j(t,W.lg())
$.kF=s
d=s}else d=t
t=$.kE
if(t==null){t=new W.dO(d)
$.kE=t
c=t}else{t.a=d
c=t}}if($.aI==null){t=document
s=t.implementation
s=(s&&C.L).eN(s,"")
$.aI=s
$.jF=s.createRange()
s=$.aI
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.aI.head;(t&&C.M).P(t,r)}t=$.aI
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.k3(s,"$isaS")}t=$.aI
if(!!this.$isaS)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.aI.body;(t&&C.q).P(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.D(C.Y,a.tagName)){t=$.jF;(t&&C.E).d3(t,q)
t=$.jF
p=(t&&C.E).eL(t,b)}else{q.innerHTML=b
p=$.aI.createDocumentFragment()
for(t=J.j(p);s=q.firstChild,s!=null;)t.P(p,s)}t=$.aI.body
if(q==null?t!=null:q!==t)J.mi(q)
c.bp(p)
C.k.ex(document,p)
return p},
eM:function(a,b,c){return this.N(a,b,c,null)},
df:function(a,b,c,d){a.textContent=null
this.P(a,this.N(a,b,c,d))},
de:function(a,b){return this.df(a,b,null,null)},
aa:function(a,b){return a.getAttribute(b)},
e5:function(a,b){return a.hasAttribute(b)},
ef:function(a,b){return a.removeAttribute(b)},
dc:function(a,b,c){return a.setAttribute(b,c)},
gcA:function(a){return new W.dJ(a,"change",!1,[W.i])},
$isa:1,
$isn:1,
$isa7:1,
$ish:1,
$ist:1,
gfv:function(a){return a.tagName}}
W.iY.prototype={
$1:function(a){return!!J.u(a).$isa7},
$S:function(){return{func:1,args:[,]}}}
W.i.prototype={
e7:function(a,b,c,d){return a.initEvent(b,!0,!0)},
$isn:1,
$isi:1}
W.h.prototype={
dV:function(a,b,c,d){return a.addEventListener(b,H.ba(c,1),!1)},
eY:function(a,b){return a.dispatchEvent(b)},
$isn:1,
$ish:1}
W.a8.prototype={$isn:1}
W.eI.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.a8]},
$isd:1,
$asd:function(){return[W.a8]},
$isq:1,
$asq:function(){return[W.a8]},
$isc:1,
$asc:function(){return[W.a8]}}
W.eJ.prototype={
gk:function(a){return a.length}}
W.eO.prototype={
gk:function(a){return a.length}}
W.a9.prototype={$isn:1}
W.cu.prototype={}
W.eU.prototype={
gk:function(a){return a.length}}
W.bG.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.t]},
$isd:1,
$asd:function(){return[W.t]},
$isq:1,
$asq:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]}}
W.cv.prototype={}
W.cw.prototype={
fH:function(a,b,c,d,e,f){return a.open(b,c,d,f,e)},
fk:function(a,b,c){return a.open(b,c)},
I:function(a,b){return a.send(b)}}
W.bH.prototype={}
W.bI.prototype={$isa:1,$isa7:1,$ish:1,$isbI:1}
W.aZ.prototype={$isn:1,$isi:1,$isaZ:1}
W.fc.prototype={
l:function(a){return String(a)}}
W.fi.prototype={
gk:function(a){return a.length}}
W.fj.prototype={
fG:function(a,b,c){return a.send(b,c)},
I:function(a,b){return a.send(b)}}
W.bL.prototype={}
W.aa.prototype={$isn:1}
W.fk.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.aa]},
$isd:1,
$asd:function(){return[W.aa]},
$isq:1,
$asq:function(){return[W.aa]},
$isc:1,
$asc:function(){return[W.aa]}}
W.S.prototype={$isn:1,$isi:1,$isS:1}
W.fu.prototype={$isa:1}
W.W.prototype={
ga3:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.e(new P.al("No elements"))
if(s>1)throw H.e(new P.al("More than one element"))
return t.firstChild},
M:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.j(s),p=0;p<r;++p)q.P(s,t.firstChild)
return},
i:function(a,b,c){var t=this.a
J.lN(t,c,C.C.h(t.childNodes,b))},
gv:function(a){var t=this.a.childNodes
return new W.ct(t,t.length,-1,null,[H.ap(t,"E",0)])},
gk:function(a){return this.a.childNodes.length},
h:function(a,b){return C.C.h(this.a.childNodes,b)},
$asd:function(){return[W.t]},
$asde:function(){return[W.t]},
$asc:function(){return[W.t]},
$asbS:function(){return[W.t]}}
W.t.prototype={
fn:function(a){var t=a.parentNode
if(t!=null)J.bx(t,a)},
l:function(a){var t=a.nodeValue
return t==null?this.dj(a):t},
P:function(a,b){return a.appendChild(b)},
eg:function(a,b){return a.removeChild(b)},
eh:function(a,b,c){return a.replaceChild(b,c)},
$isn:1,
$ish:1,
$ist:1,
gb9:function(a){return a.previousSibling}}
W.dn.prototype={
ba:function(a){return a.previousNode()}}
W.bR.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.t]},
$isd:1,
$asd:function(){return[W.t]},
$isq:1,
$asq:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]}}
W.fD.prototype={$isa:1}
W.fG.prototype={
gk:function(a){return a.length}}
W.ab.prototype={$isn:1,
gk:function(a){return a.length}}
W.fI.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.ab]},
$isd:1,
$asd:function(){return[W.ab]},
$isq:1,
$asq:function(){return[W.ab]},
$isc:1,
$asc:function(){return[W.ab]}}
W.fL.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.fM.prototype={
I:function(a,b){return a.send(b)}}
W.dt.prototype={
eL:function(a,b){return a.createContextualFragment(b)},
d3:function(a,b){return a.selectNodeContents(b)}}
W.fW.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.dw.prototype={
I:function(a,b){return a.send(b)}}
W.fY.prototype={
gk:function(a){return a.length}}
W.h0.prototype={$isa:1,$ish:1}
W.ac.prototype={$isn:1,$ish:1}
W.h2.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.ac]},
$isd:1,
$asd:function(){return[W.ac]},
$isq:1,
$asq:function(){return[W.ac]},
$isc:1,
$asc:function(){return[W.ac]}}
W.ad.prototype={$isn:1}
W.h4.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.ad]},
$isd:1,
$asd:function(){return[W.ad]},
$isq:1,
$asq:function(){return[W.ad]},
$isc:1,
$asc:function(){return[W.ad]}}
W.ae.prototype={$isn:1,
gk:function(a){return a.length}}
W.h9.prototype={
A:function(a,b){return this.aS(a,b)!=null},
h:function(a,b){return this.aS(a,b)},
i:function(a,b,c){this.eq(a,b,c)},
a7:function(a,b){var t,s
for(t=0;!0;++t){s=this.e9(a,t)
if(s==null)return
b.$2(s,this.aS(a,s))}},
gk:function(a){return a.length},
aS:function(a,b){return a.getItem(b)},
e9:function(a,b){return a.key(b)},
eq:function(a,b,c){return a.setItem(b,c)}}
W.a0.prototype={$isn:1}
W.am.prototype={}
W.dz.prototype={
N:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aI(a,b,c,d)
t=W.mJ("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.W(s).M(0,new W.W(t))
return s}}
W.hh.prototype={
N:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aI(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.J.N(t.createElement("table"),b,c,d)
t.toString
t=new W.W(t)
r=t.ga3(t)
r.toString
t=new W.W(r)
q=t.ga3(t)
s.toString
q.toString
new W.W(s).M(0,new W.W(q))
return s}}
W.hi.prototype={
N:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aI(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.J.N(t.createElement("table"),b,c,d)
t.toString
t=new W.W(t)
r=t.ga3(t)
s.toString
r.toString
new W.W(s).M(0,new W.W(r))
return s}}
W.bX.prototype={$isbX:1}
W.af.prototype={$isn:1,$ish:1}
W.a1.prototype={$isn:1,$ish:1}
W.hl.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.a1]},
$isd:1,
$asd:function(){return[W.a1]},
$isq:1,
$asq:function(){return[W.a1]},
$isc:1,
$asc:function(){return[W.a1]}}
W.hm.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.af]},
$isd:1,
$asd:function(){return[W.af]},
$isq:1,
$asq:function(){return[W.af]},
$isc:1,
$asc:function(){return[W.af]}}
W.ho.prototype={
gk:function(a){return a.length}}
W.ag.prototype={$isn:1}
W.b2.prototype={$isn:1,$isi:1,$isb2:1}
W.hs.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.ag]},
$isd:1,
$asd:function(){return[W.ag]},
$isq:1,
$asq:function(){return[W.ag]},
$isc:1,
$asc:function(){return[W.ag]}}
W.ht.prototype={
gk:function(a){return a.length}}
W.bp.prototype={}
W.hv.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.dD.prototype={
ba:function(a){return a.previousNode()}}
W.aO.prototype={}
W.hB.prototype={
l:function(a){return String(a)},
$isa:1}
W.hD.prototype={
gk:function(a){return a.length}}
W.hG.prototype={
gk:function(a){return a.length}}
W.hH.prototype={
I:function(a,b){return a.send(b)}}
W.b4.prototype={
geS:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(new P.v("deltaY is not supported"))},
$isn:1,
$isi:1,
$isS:1,
$isb4:1}
W.c0.prototype={
gez:function(a){var t,s
t=P.Y
s=new P.T(0,$.y,null,[t])
this.e3(a)
this.ei(a,W.lk(new W.hJ(new P.iM(s,[t]))))
return s},
ei:function(a,b){return a.requestAnimationFrame(H.ba(b,1))},
e3:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isa:1,
$ish:1}
W.hJ.prototype={
$1:function(a){this.a.aB(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.hK.prototype={$isa:1,$ish:1}
W.b5.prototype={$isa:1}
W.hV.prototype={
l:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
w:function(a,b){var t,s,r
if(b==null)return!1
t=J.u(b)
if(!t.$isL)return!1
s=a.left
r=t.gb5(b)
if(s==null?r==null:s===r){s=a.top
r=t.gbe(b)
if(s==null?r==null:s===r){s=a.width
r=t.ga1(b)
if(s==null?r==null:s===r){s=a.height
t=t.ga_(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gu:function(a){var t,s,r,q
t=J.ar(a.left)
s=J.ar(a.top)
r=J.ar(a.width)
q=J.ar(a.height)
return W.lf(W.b9(W.b9(W.b9(W.b9(0,t),s),r),q))},
$isL:1,
$asL:function(){},
ga_:function(a){return a.height},
gb5:function(a){return a.left},
gbe:function(a){return a.top},
ga1:function(a){return a.width}}
W.dI.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[P.L]},
$isd:1,
$asd:function(){return[P.L]},
$isq:1,
$asq:function(){return[P.L]},
$isc:1,
$asc:function(){return[P.L]}}
W.hX.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.D]},
$isd:1,
$asd:function(){return[W.D]},
$isq:1,
$asq:function(){return[W.D]},
$isc:1,
$asc:function(){return[W.D]}}
W.hZ.prototype={$isa:1}
W.i_.prototype={
ga_:function(a){return a.height},
ga1:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.il.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.a9]},
$isd:1,
$asd:function(){return[W.a9]},
$isq:1,
$asq:function(){return[W.a9]},
$isc:1,
$asc:function(){return[W.a9]}}
W.im.prototype={$isa:1,$ish:1}
W.dM.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.t]},
$isd:1,
$asd:function(){return[W.t]},
$isq:1,
$asq:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]}}
W.iG.prototype={$isa:1,$ish:1}
W.iJ.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.ae]},
$isd:1,
$asd:function(){return[W.ae]},
$isq:1,
$asq:function(){return[W.ae]},
$isc:1,
$asc:function(){return[W.ae]}}
W.iK.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.a0]},
$isd:1,
$asd:function(){return[W.a0]},
$isq:1,
$asq:function(){return[W.a0]},
$isc:1,
$asc:function(){return[W.a0]}}
W.iR.prototype={$isa:1}
W.iS.prototype={$isa:1}
W.hT.prototype={
a7:function(a,b){var t,s,r,q,p,o
for(t=this.gH(this),s=t.length,r=this.a,q=J.j(r),p=0;p<t.length;t.length===s||(0,H.C)(t),++p){o=t[p]
b.$2(o,q.aa(r,o))}},
gH:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.w([],[P.r])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.j(s,p.name)}return s},
ge6:function(){return this.a}}
W.i0.prototype={
A:function(a,b){return J.lL(this.a,b)},
h:function(a,b){return J.jA(this.a,b)},
i:function(a,b,c){J.mk(this.a,b,c)},
gk:function(a){return this.gH(this).length}}
W.i3.prototype={
ff:function(a,b,c,d){return W.a3(this.a,this.b,a,!1,H.aE(this,0))}}
W.dJ.prototype={}
W.i4.prototype={
eu:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.lK(r,this.c,t,!1)}},
dQ:function(a,b,c,d,e){this.eu()}}
W.i5.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.c2.prototype={
a6:function(a){return $.$get$le().D(0,W.bz(a))},
V:function(a,b,c){var t,s,r
t=W.bz(a)
s=$.$get$jW()
r=s.h(0,H.f(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
dR:function(a){var t,s
t=$.$get$jW()
if(t.gap(t)){for(s=0;s<262;++s)t.i(0,C.X[s],W.nW())
for(s=0;s<12;++s)t.i(0,C.u[s],W.nX())}}}
W.E.prototype={
gv:function(a){return new W.ct(a,this.gk(a),-1,null,[H.ap(a,"E",0)])},
$isd:1,
$asd:null,
$isc:1,
$asc:null}
W.dq.prototype={
a6:function(a){return C.a.c6(this.a,new W.fw(a))},
V:function(a,b,c){return C.a.c6(this.a,new W.fv(a,b,c))}}
W.fw.prototype={
$1:function(a){return a.a6(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.fv.prototype={
$1:function(a){return a.V(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.c5.prototype={
a6:function(a){return this.a.D(0,W.bz(a))},
V:function(a,b,c){var t,s
t=W.bz(a)
s=this.c
if(s.D(0,H.f(t)+"::"+b))return this.d.ey(c)
else if(s.D(0,"*::"+b))return this.d.ey(c)
else{s=this.b
if(s.D(0,H.f(t)+"::"+b))return!0
else if(s.D(0,"*::"+b))return!0
else if(s.D(0,H.f(t)+"::*"))return!0
else if(s.D(0,"*::*"))return!0}return!1},
dT:function(a,b,c,d){var t,s,r
this.a.M(0,c)
t=b.aF(0,new W.iH())
s=b.aF(0,new W.iI())
this.b.M(0,t)
r=this.c
r.M(0,C.B)
r.M(0,s)}}
W.iH.prototype={
$1:function(a){return!C.a.D(C.u,a)},
$S:function(){return{func:1,args:[,]}}}
W.iI.prototype={
$1:function(a){return C.a.D(C.u,a)},
$S:function(){return{func:1,args:[,]}}}
W.iN.prototype={
V:function(a,b,c){if(this.dm(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.jA(a,"template")==="")return this.e.D(0,b)
return!1}}
W.iO.prototype={
$1:function(a){return"TEMPLATE::"+H.f(a)},
$S:function(){return{func:1,args:[,]}}}
W.iL.prototype={
a6:function(a){var t=J.u(a)
if(!!t.$isbU)return!1
t=!!t.$isJ
if(t&&W.bz(a)==="foreignObject")return!1
if(t)return!0
return!1},
V:function(a,b,c){if(b==="is"||C.i.bt(b,"on"))return!1
return this.a6(a)}}
W.ct.prototype={
p:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbY(J.aG(this.a,t))
this.c=t
return!0}this.sbY(null)
this.c=s
return!1},
gq:function(){return this.d},
sbY:function(a){this.d=a}}
W.hY.prototype={$isa:1,$ish:1}
W.dp.prototype={}
W.iF.prototype={}
W.dO.prototype={
bp:function(a){new W.iP(this).$2(a,null)},
aA:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)J.bx(t,a)}else J.bx(b,a)},
en:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.m6(a)
r=J.jA(s.ge6(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.R(n)}p="element unprintable"
try{p=J.as(a)}catch(n){H.R(n)}try{o=W.bz(a)
this.em(a,b,t,p,o,s,r)}catch(n){if(H.R(n) instanceof P.ah)throw n
else{this.aA(a,b)
window
m="Removing corrupted element "+H.f(p)
if(typeof console!="undefined")console.warn(m)}}},
em:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.aA(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.a6(a)){this.aA(a,b)
window
t="Removing disallowed element <"+H.f(e)+"> from "+J.as(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.V(a,"is",g)){this.aA(a,b)
window
t="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gH(f)
s=H.w(t.slice(0),[H.aE(t,0)])
for(r=f.gH(f).length-1,t=f.a,q=J.j(t);r>=0;--r){p=s[r]
if(!this.a.V(a,J.mo(p),q.aa(t,p))){window
o="Removing disallowed attribute <"+H.f(e)+" "+p+'="'+H.f(q.aa(t,p))+'">'
if(typeof console!="undefined")console.warn(o)
q.aa(t,p)
q.ef(t,p)}}if(!!J.u(a).$isbX)this.bp(a.content)}}
W.iP.prototype={
$2:function(a,b){var t,s,r,q
switch(a.nodeType){case 1:this.a.en(a,b)
break
case 8:case 11:case 3:case 4:break
default:if(b==null){r=a.parentNode
if(r!=null)J.bx(r,a)}else J.bx(b,a)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.m8(t)}catch(q){H.R(q)
r=t
J.bx(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.t,W.t]}}}
W.bA.prototype={$isd:1,
$asd:function(){return[W.af]},
$isc:1,
$asc:function(){return[W.af]}}
W.bB.prototype={$isd:1,
$asd:function(){return[W.ac]},
$isc:1,
$asc:function(){return[W.ac]}}
W.bC.prototype={$isd:1,
$asd:function(){return[W.a6]},
$isc:1,
$asc:function(){return[W.a6]}}
W.bD.prototype={$isd:1,
$asd:function(){return[W.af]},
$isc:1,
$asc:function(){return[W.af]}}
W.bE.prototype={$isd:1,
$asd:function(){return[W.ac]},
$isc:1,
$asc:function(){return[W.ac]}}
W.bF.prototype={$isd:1,
$asd:function(){return[W.a6]},
$isc:1,
$asc:function(){return[W.a6]}}
W.cx.prototype={}
W.cR.prototype={$isd:1,
$asd:function(){return[W.D]},
$isc:1,
$asc:function(){return[W.D]}}
W.cD.prototype={$isd:1,
$asd:function(){return[W.ad]},
$isc:1,
$asc:function(){return[W.ad]}}
W.cK.prototype={$isd:1,
$asd:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]}}
W.cL.prototype={$isd:1,
$asd:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]}}
W.cM.prototype={$isd:1,
$asd:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]}}
W.cN.prototype={$isd:1,
$asd:function(){return[W.ag]},
$isc:1,
$asc:function(){return[W.ag]}}
W.cO.prototype={$isd:1,
$asd:function(){return[W.a0]},
$isc:1,
$asc:function(){return[W.a0]}}
W.cP.prototype={$isd:1,
$asd:function(){return[W.ae]},
$isc:1,
$asc:function(){return[W.ae]}}
W.cQ.prototype={$isd:1,
$asd:function(){return[W.a9]},
$isc:1,
$asc:function(){return[W.a9]}}
W.cB.prototype={$isd:1,
$asd:function(){return[P.L]},
$isc:1,
$asc:function(){return[P.L]}}
W.cC.prototype={$isd:1,
$asd:function(){return[W.a1]},
$isc:1,
$asc:function(){return[W.a1]}}
W.cE.prototype={$isd:1,
$asd:function(){return[W.ab]},
$isc:1,
$asc:function(){return[W.ab]}}
W.cG.prototype={$isd:1,
$asd:function(){return[W.aa]},
$isc:1,
$asc:function(){return[W.aa]}}
W.cH.prototype={$isd:1,
$asd:function(){return[W.a8]},
$isc:1,
$asc:function(){return[W.a8]}}
W.cI.prototype={$isd:1,
$asd:function(){return[P.r]},
$isc:1,
$asc:function(){return[P.r]}}
W.cS.prototype={$isd:1,
$asd:function(){return[W.a9]},
$isc:1,
$asc:function(){return[W.a9]}}
W.d3.prototype={$isd:1,
$asd:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]}}
W.d4.prototype={$isd:1,
$asd:function(){return[W.ab]},
$isc:1,
$asc:function(){return[W.ab]}}
W.d2.prototype={$isd:1,
$asd:function(){return[W.aa]},
$isc:1,
$asc:function(){return[W.aa]}}
W.d7.prototype={$isd:1,
$asd:function(){return[P.L]},
$isc:1,
$asc:function(){return[P.L]}}
W.d8.prototype={$isd:1,
$asd:function(){return[W.a8]},
$isc:1,
$asc:function(){return[W.a8]}}
W.d9.prototype={$isd:1,
$asd:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]}}
W.da.prototype={$isd:1,
$asd:function(){return[P.r]},
$isc:1,
$asc:function(){return[P.r]}}
W.cV.prototype={$isd:1,
$asd:function(){return[W.a0]},
$isc:1,
$asc:function(){return[W.a0]}}
W.cW.prototype={$isd:1,
$asd:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]}}
W.cX.prototype={$isd:1,
$asd:function(){return[W.a1]},
$isc:1,
$asc:function(){return[W.a1]}}
W.cZ.prototype={$isd:1,
$asd:function(){return[W.ae]},
$isc:1,
$asc:function(){return[W.ae]}}
W.d0.prototype={$isd:1,
$asd:function(){return[W.ad]},
$isc:1,
$asc:function(){return[W.ad]}}
W.d5.prototype={$isd:1,
$asd:function(){return[W.D]},
$isc:1,
$asc:function(){return[W.D]}}
W.d6.prototype={$isd:1,
$asd:function(){return[W.ag]},
$isc:1,
$asc:function(){return[W.ag]}}
P.hL.prototype={
cu:function(a){var t,s,r,q
t=this.a
s=t.length
for(r=0;r<s;++r){q=t[r]
if(q==null?a==null:q===a)return r}C.a.j(t,a)
C.a.j(this.b,null)
return s},
bf:function(a){var t,s,r,q,p,o,n,m,l
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){s=a.getTime()
r=new P.aU(s,!0)
r.dw(s,!0)
return r}if(a instanceof RegExp)throw H.e(new P.c_("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.nP(a)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=this.cu(a)
r=this.b
o=r[p]
t.a=o
if(o!=null)return o
o=P.I()
t.a=o
r[p]=o
this.f4(a,new P.hN(t,this))
return t.a}if(a instanceof Array){p=this.cu(a)
r=this.b
o=r[p]
if(o!=null)return o
n=J.z(a)
m=n.gk(a)
o=this.c?new Array(m):a
r[p]=o
for(r=J.bb(o),l=0;C.b.ac(l,m);++l)r.i(o,l,this.bf(n.h(a,l)))
return o}return a}}
P.hN.prototype={
$2:function(a,b){var t,s
t=this.a.a
s=this.b.bf(b)
J.lJ(t,a,s)
return s},
$S:function(){return{func:1,args:[,,]}}}
P.iZ.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.r,,]}}}
P.hM.prototype={
f4:function(a,b){var t,s,r,q
for(t=Object.keys(a),s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r){q=t[r]
b.$2(q,a[q])}}}
P.j_.prototype={
$1:function(a){return this.a.aB(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.j0.prototype={
$1:function(a){return this.a.eH(a)},
$S:function(){return{func:1,args:[,]}}}
P.ix.prototype={}
P.L.prototype={$asL:null}
P.dZ.prototype={$isa:1}
P.aR.prototype={$isa:1}
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
gK:function(a){return a.z}}
P.eC.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eD.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
P.eE.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eF.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eK.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eN.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ai.prototype={}
P.aJ.prototype={$isa:1}
P.eV.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.au.prototype={$isn:1}
P.f6.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return this.Y(a,b)},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
Y:function(a,b){return a.getItem(b)},
$isd:1,
$asd:function(){return[P.au]},
$isc:1,
$asc:function(){return[P.au]}}
P.ff.prototype={$isa:1}
P.fg.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.aw.prototype={$isn:1}
P.fx.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return this.Y(a,b)},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
Y:function(a,b){return a.getItem(b)},
$isd:1,
$asd:function(){return[P.aw]},
$isc:1,
$asc:function(){return[P.aw]}}
P.fE.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fJ.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fK.prototype={
gk:function(a){return a.length}}
P.fP.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fQ.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bU.prototype={$isa:1,$isbU:1}
P.he.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return this.Y(a,b)},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
Y:function(a,b){return a.getItem(b)},
$isd:1,
$asd:function(){return[P.r]},
$isc:1,
$asc:function(){return[P.r]}}
P.J.prototype={
N:function(a,b,c,d){var t,s,r,q,p,o
t=H.w([],[W.dp])
C.a.j(t,W.ld(null))
C.a.j(t,W.lg())
C.a.j(t,new W.iL())
c=new W.dO(new W.dq(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.q).eM(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.W(q)
o=t.ga3(t)
for(t=J.j(p);r=o.firstChild,r!=null;)t.P(p,r)
return p},
gcA:function(a){return new W.dJ(a,"change",!1,[W.i])},
$isa:1,
$ish:1,
$isJ:1}
P.hf.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.hg.prototype={$isa:1}
P.dA.prototype={}
P.hk.prototype={$isa:1}
P.bY.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ax.prototype={$isn:1}
P.hu.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return this.Y(a,b)},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
Y:function(a,b){return a.getItem(b)},
$isd:1,
$asd:function(){return[P.ax]},
$isc:1,
$asc:function(){return[P.ax]}}
P.hC.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.hE.prototype={$isa:1}
P.hF.prototype={$isa:1}
P.c1.prototype={$isa:1}
P.iC.prototype={$isa:1}
P.iD.prototype={$isa:1}
P.iE.prototype={$isa:1}
P.cA.prototype={$isd:1,
$asd:function(){return[P.au]},
$isc:1,
$asc:function(){return[P.au]}}
P.cy.prototype={$isd:1,
$asd:function(){return[P.r]},
$isc:1,
$asc:function(){return[P.r]}}
P.cF.prototype={$isd:1,
$asd:function(){return[P.aw]},
$isc:1,
$asc:function(){return[P.aw]}}
P.cJ.prototype={$isd:1,
$asd:function(){return[P.ax]},
$isc:1,
$asc:function(){return[P.ax]}}
P.cU.prototype={$isd:1,
$asd:function(){return[P.au]},
$isc:1,
$asc:function(){return[P.au]}}
P.d1.prototype={$isd:1,
$asd:function(){return[P.aw]},
$isc:1,
$asc:function(){return[P.aw]}}
P.cY.prototype={$isd:1,
$asd:function(){return[P.ax]},
$isc:1,
$asc:function(){return[P.ax]}}
P.d_.prototype={$isd:1,
$asd:function(){return[P.r]},
$isc:1,
$asc:function(){return[P.r]}}
P.e3.prototype={
gk:function(a){return a.length}}
P.fU.prototype={
c4:function(a,b){return a.activeTexture(b)},
c7:function(a,b,c){return a.attachShader(b,c)},
c8:function(a,b,c){return a.bindBuffer(b,c)},
c9:function(a,b,c){return a.bindFramebuffer(b,c)},
ca:function(a,b,c){return a.bindTexture(b,c)},
cb:function(a,b){return a.blendEquation(b)},
cc:function(a,b,c){return a.blendFunc(b,c)},
cd:function(a,b,c,d){return a.bufferData(b,c,d)},
ce:function(a,b){return a.clear(b)},
cf:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
cg:function(a,b){return a.compileShader(b)},
ci:function(a){return a.createBuffer()},
cj:function(a){return a.createProgram()},
ck:function(a,b){return a.createShader(b)},
cl:function(a){return a.createTexture()},
cn:function(a,b){return a.depthMask(b)},
co:function(a,b){return a.disable(b)},
cp:function(a,b,c,d){return a.drawArrays(b,c,d)},
cq:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cr:function(a,b){return a.enable(b)},
cs:function(a,b){return a.enableVertexAttribArray(b)},
aG:function(a){return P.j1(a.getContextAttributes())},
bh:function(a){return a.getError()},
bi:function(a,b){return a.getProgramInfoLog(b)},
bj:function(a,b,c){return a.getProgramParameter(b,c)},
bk:function(a,b){return a.getShaderInfoLog(b)},
bl:function(a,b,c){return a.getShaderParameter(b,c)},
bn:function(a,b,c){return a.getUniformLocation(b,c)},
cv:function(a,b){return a.linkProgram(b)},
bs:function(a,b,c){return a.shaderSource(b,c)},
bu:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cG:function(a,b,c,d,e,f,g,h,i,j){this.aZ(a,b,c,d,e,f,g,h,i,j)
return},
aZ:function(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
cH:function(a,b,c,d){return a.texParameterf(b,c,d)},
cI:function(a,b,c,d){return a.texParameteri(b,c,d)},
cJ:function(a,b,c){return a.uniform1f(b,c)},
cK:function(a,b,c){return a.uniform1fv(b,c)},
cL:function(a,b,c){return a.uniform1i(b,c)},
cM:function(a,b,c){return a.uniform1iv(b,c)},
cN:function(a,b,c){return a.uniform2fv(b,c)},
cO:function(a,b,c){return a.uniform3fv(b,c)},
cP:function(a,b,c){return a.uniform4fv(b,c)},
cQ:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cR:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cT:function(a,b){return a.useProgram(b)},
cV:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cW:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fV.prototype={
eB:function(a,b){return a.beginTransformFeedback(b)},
eE:function(a,b){return a.bindVertexArray(b)},
eO:function(a){return a.createVertexArray()},
eZ:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
f_:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
f0:function(a){return a.endTransformFeedback()},
fD:function(a,b,c,d){this.es(a,b,c,d)
return},
es:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
fE:function(a,b,c){return a.vertexAttribDivisor(b,c)},
c4:function(a,b){return a.activeTexture(b)},
c7:function(a,b,c){return a.attachShader(b,c)},
c8:function(a,b,c){return a.bindBuffer(b,c)},
c9:function(a,b,c){return a.bindFramebuffer(b,c)},
ca:function(a,b,c){return a.bindTexture(b,c)},
cb:function(a,b){return a.blendEquation(b)},
cc:function(a,b,c){return a.blendFunc(b,c)},
cd:function(a,b,c,d){return a.bufferData(b,c,d)},
ce:function(a,b){return a.clear(b)},
cf:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
cg:function(a,b){return a.compileShader(b)},
ci:function(a){return a.createBuffer()},
cj:function(a){return a.createProgram()},
ck:function(a,b){return a.createShader(b)},
cl:function(a){return a.createTexture()},
cn:function(a,b){return a.depthMask(b)},
co:function(a,b){return a.disable(b)},
cp:function(a,b,c,d){return a.drawArrays(b,c,d)},
cq:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cr:function(a,b){return a.enable(b)},
cs:function(a,b){return a.enableVertexAttribArray(b)},
aG:function(a){return P.j1(a.getContextAttributes())},
bh:function(a){return a.getError()},
bi:function(a,b){return a.getProgramInfoLog(b)},
bj:function(a,b,c){return a.getProgramParameter(b,c)},
bk:function(a,b){return a.getShaderInfoLog(b)},
bl:function(a,b,c){return a.getShaderParameter(b,c)},
bn:function(a,b,c){return a.getUniformLocation(b,c)},
cv:function(a,b){return a.linkProgram(b)},
bs:function(a,b,c){return a.shaderSource(b,c)},
bu:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cG:function(a,b,c,d,e,f,g,h,i,j){this.aZ(a,b,c,d,e,f,g,h,i,j)
return},
aZ:function(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
cH:function(a,b,c,d){return a.texParameterf(b,c,d)},
cI:function(a,b,c,d){return a.texParameteri(b,c,d)},
cJ:function(a,b,c){return a.uniform1f(b,c)},
cK:function(a,b,c){return a.uniform1fv(b,c)},
cL:function(a,b,c){return a.uniform1i(b,c)},
cM:function(a,b,c){return a.uniform1iv(b,c)},
cN:function(a,b,c){return a.uniform2fv(b,c)},
cO:function(a,b,c){return a.uniform3fv(b,c)},
cP:function(a,b,c){return a.uniform4fv(b,c)},
cQ:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cR:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cT:function(a,b){return a.useProgram(b)},
cV:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cW:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isa:1}
P.iQ.prototype={$isa:1}
P.h5.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return P.j1(this.e8(a,b))},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
e8:function(a,b){return a.item(b)},
$isd:1,
$asd:function(){return[P.aL]},
$isc:1,
$asc:function(){return[P.aL]}}
P.cz.prototype={$isd:1,
$asd:function(){return[P.aL]},
$isc:1,
$asc:function(){return[P.aL]}}
P.cT.prototype={$isd:1,
$asd:function(){return[P.aL]},
$isc:1,
$asc:function(){return[P.aL]}}
B.jn.prototype={
$1:function(a){$.$get$j2().i(0,a.which,!0)},
$S:function(){return{func:1,args:[W.aZ]}}}
B.jo.prototype={
$1:function(a){$.$get$j2().i(0,a.which,null)},
$S:function(){return{func:1,args:[W.aZ]}}}
B.jp.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.nM=t
$.nN=C.b.ae(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.k6=s-C.b.G(window.innerWidth,2)
$.lB=-(t-C.b.G(window.innerHeight,2))},
$S:function(){return{func:1,args:[W.S]}}}
B.jq.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.cc=t-C.b.G(window.innerWidth,2)
$.cd=-(s-C.b.G(window.innerHeight,2))
if(a.button===2)$.$get$cb().i(0,"right",!0)
else $.$get$cb().i(0,"left",!0)},
$S:function(){return{func:1,args:[W.S]}}}
B.jr.prototype={
$1:function(a){if(a.button===2)$.$get$cb().i(0,"right",null)
else $.$get$cb().i(0,"left",null)},
$S:function(){return{func:1,args:[W.S]}}}
B.fy.prototype={
dG:function(a,b,c,d){var t
d.toString
W.a3(d,W.nV().$1(d),new B.fz(this),!1,W.b4)
W.a3(d,"mousemove",new B.fA(this),!1,W.S)
t=W.b2
W.a3(d,"touchstart",new B.fB(),!1,t)
W.a3(d,"touchmove",new B.fC(this),!1,t)
B.oa(null)}}
B.fz.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.aw.geS(a)*r.k3
if(C.c.ae(r.fy,t)>0)r.fy=H.a4(C.c.ae(r.fy,t))}catch(q){s=H.R(q)
P.O(s)}},
$S:function(){return{func:1,args:[W.b4]}}}
B.fA.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=H.a4(t.go+C.b.ae($.k6,$.cc)*0.01)
s=t.id
r=$.cd
q=$.lB
t.id=H.a4(s+(r-q)*0.01)
$.cc=$.k6
$.cd=q}},
$S:function(){return{func:1,args:[W.S]}}}
B.fB.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.a9(t.clientX)
C.c.a9(t.clientY)
$.cc=s
C.c.a9(t.clientX)
$.cd=C.c.a9(t.clientY)},
$S:function(){return{func:1,args:[W.b2]}}}
B.fC.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.a9(t.clientX)
t=C.c.a9(t.clientY)
r=this.a
r.go=H.a4(r.go+C.b.ae(s,$.cc)*0.01)
r.id=H.a4(r.id+($.cd-t)*0.01)
$.cc=s
$.cd=t},
$S:function(){return{func:1,args:[W.b2]}}}
L.cg.prototype={
l:function(a){return"BONE["+this.d+"] ("+H.f(this.e)+") "+H.f(this.a)+"\ntrans:\n"+this.b.l(0)+"offset:\n"+this.c.l(0)}}
L.e0.prototype={
dv:function(a){var t,s,r
for(t=this.b,s=this.a,r=0;r<a;++r){s[r]=new T.B(new Float32Array(16))
t[r]=new T.B(new Float32Array(16))}}}
L.ch.prototype={
l:function(a){var t=[]
C.a.j(t,H.f(this.a.a))
C.a.j(t,""+this.b.length+": "+H.f(this.c))
C.a.j(t,""+this.d.length+": "+H.f(this.e))
C.a.j(t,""+this.f.length+": "+H.f(this.r))
return C.a.a8(t,"\n")},
seb:function(a){this.b=a},
sec:function(a){this.c=a},
sek:function(a){this.d=a},
sel:function(a){this.e=a},
seo:function(a){this.f=a},
sep:function(a){this.r=a}}
L.h1.prototype={
l:function(a){return"SkeletalAnimation["+H.f(this.a)+", duration: "+H.f(this.c)+", frames: "+this.b.length+"]"}}
G.fl.prototype={}
G.dE.prototype={
a4:function(a,b){var t=this.d
if(H.ao(!t.A(0,a)))H.aB("uniform "+a+" already set")
t.i(0,a,b)},
bD:function(){return this.d},
l:function(a){var t,s,r,q
t=H.w(["{"+new H.aN(H.j6(this),null).l(0)+"}["+this.a+"]"],[P.r])
for(s=this.d,r=s.gH(s),r=r.gv(r);r.p();){q=r.gq()
C.a.j(t,H.f(q)+": "+H.f(s.h(0,q)))}return C.a.a8(t,"\n")}}
G.e6.prototype={}
G.e9.prototype={
ct:function(a,b,c){J.m3(this.a,b)
if(c>0)J.mu(this.a,b,c)}}
G.eQ.prototype={}
G.eG.prototype={}
G.eH.prototype={}
G.eT.prototype={
aw:function(a){var t=this.e
H.b(!t.A(0,a))
H.b(C.i.bt(a,"a"))
switch($.$get$X().h(0,a).a){case"vec2":t.i(0,a,H.w([],[T.aA]))
break
case"vec3":t.i(0,a,H.w([],[T.m]))
break
case"vec4":t.i(0,a,H.w([],[T.a2]))
break
case"float":t.i(0,a,H.w([],[P.Q]))
break
case"uvec4":t.i(0,a,H.w([],[[P.c,P.p]]))
break
default:if(H.ao(!1))H.aB("unknown type for "+a)}},
ds:function(a){var t,s,r,q,p,o
H.b(a.length===3)
t=this.d
s=t.length
C.a.j(this.b,new G.eG(s,s+1,s+2))
for(r=a.length,q=0;q<a.length;a.length===r||(0,H.C)(a),++q){p=a[q]
p.toString
o=new T.m(new Float32Array(3))
o.B(p)
C.a.j(t,o)}},
dq:function(a,b){var t,s,r,q,p,o,n
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.C)(b),++q){p=b[q]
p.toString
o=new Float32Array(2)
n=p.a
o[1]=n[1]
o[0]=n[0]
r.j(t,new T.aA(o))}},
dr:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.C)(b),++q){p=b[q]
p.toString
o=new T.m(new Float32Array(3))
o.B(p)
r.j(t,o)}},
bw:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.C)(b),++q){p=b[q]
p.toString
o=new T.a2(new Float32Array(4))
o.B(p)
r.j(t,o)}},
dt:function(a){var t,s,r,q,p,o
H.b(a.length===4)
t=this.d
s=t.length
C.a.j(this.c,new G.eH(s,s+1,s+2,s+3))
for(r=a.length,q=0;q<a.length;a.length===r||(0,H.C)(a),++q){p=a[q]
p.toString
o=new T.m(new Float32Array(3))
o.B(p)
C.a.j(t,o)}},
dB:function(){var t,s,r,q,p,o,n,m,l,k
t=this.b
H.b(t.length>0||this.c.length>0)
s=this.c
r=new Array(t.length*3+s.length*6)
r.fixed$length=Array
q=H.w(r,[P.p])
for(r=t.length,p=0,o=0;n=t.length,o<n;n===r||(0,H.C)(t),++o){m=t[o]
q[p]=m.a
q[p+1]=m.b
q[p+2]=m.c
p+=3}for(t=s.length,o=0;r=s.length,o<r;r===t||(0,H.C)(s),++o){l=s[o]
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
l:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gH(s),r=r.gv(r);r.p();){q=r.gq()
p=$.$get$X().h(0,q).a
C.a.j(t,H.f(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.a8(t," ")}}
G.dC.prototype={}
G.dB.prototype={}
G.fh.prototype={
dF:function(a){this.a4("cDepthTest",!0)
this.a4("cDepthWrite",!0)
this.a4("cBlendEquation",$.$get$kn())
this.a4("cStencilFunc",$.$get$kV())}}
G.dh.prototype={
by:function(a,b,c){var t,s
if(C.i.aL(a,0)===105){if(H.ao(C.b.af(b.length,c)===this.z))H.aB("ChangeAttribute "+this.z)}else{t=C.b.af(b.length,c)
if(H.ao(t===(this.ch.length/3|0)))H.aB("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.dT(t.a,34962,s)
J.kb(t.a,34962,b,35048)},
bA:function(a){this.ch=a
this.by("aPosition",a,3)},
bB:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
ag:function(a,b,c){var t,s,r,q,p,o
t=J.k8(a,0)===105
if(t&&this.z===0)this.z=C.b.af(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.dW(r.a))
this.by(a,b,c)
q=$.$get$X().h(0,a)
if(q==null)throw H.e("Unknown canonical "+a)
p=this.x
if(H.ao(p.A(0,a)))H.aB("unexpected attribute "+a)
o=p.h(0,a)
J.dV(r.a,this.e)
r.ct(0,o,t?1:0)
s=s.h(0,a)
p=q.bC()
J.dT(r.a,34962,s)
J.kk(r.a,o,p,5126,!1,0,0)},
bx:function(a){var t,s,r,q,p
t=this.r
s=this.d
t.i(0,"aPosition",J.dW(s.a))
this.bA(a)
r=$.$get$X().h(0,"aPosition")
if(r==null)throw H.e("Unknown canonical aPosition")
q=this.x
H.b(q.A(0,"aPosition"))
p=q.h(0,"aPosition")
J.dV(s.a,this.e)
s.ct(0,p,0)
t=t.h(0,"aPosition")
q=r.bC()
J.dT(s.a,34962,t)
J.kk(s.a,p,q,5126,!1,0,0)},
bz:function(a){var t,s,r,q
H.b(this.ch!=null)
t=this.ch.length
if(t<768){this.saR(new Uint8Array(H.iV(a)))
this.Q=5121}else if(t<196608){this.saR(new Uint16Array(H.iV(a)))
this.Q=5123}else{this.saR(new Uint32Array(H.iV(a)))
this.Q=5125}t=this.d
J.dV(t.a,this.e)
s=this.y
r=this.cx
q=J.u(r)
H.b(!!q.$isl8||!!q.$isl9||!!q.$isla)
J.dT(t.a,34963,s)
J.kb(t.a,34963,r,35048)},
l:function(a){var t,s,r,q
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,r=t.gH(t),r=r.gv(r);r.p();){q=r.gq()
C.a.j(s,H.f(q)+":"+t.h(0,q).length)}return"MESH["+this.a+"] "+C.a.a8(s,"  ")},
saR:function(a){this.cx=a}}
G.fF.prototype={
du:function(a,b){var t=C.b.cY(a,b)
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
t.ad(0,0,1/(p*s))
t.ad(1,1,1/p)
t.ad(2,2,(q+r)/o)
t.ad(3,2,-1)
t.ad(2,3,2*r*q/o)},
bD:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
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
o.B(t)
t=o.a
t[12]=0
t[13]=0
t[14]=0
t[15]=1
n=-s[12]
m=-s[13]
l=-s[14]
s=J.u(n)
r=!!s.$isa2
k=r?s.gat(n):1
if(!!s.$ism){j=s.gm(n)
m=s.gn(n)
l=s.gK(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
l=s.gK(n)
n=j}else if(!(typeof n==="number")){n=null
m=null
l=null}s=C.c.E(t[0],n)
r=C.c.E(t[4],m)
q=C.c.E(t[8],l)
i=t[12]
h=C.c.E(t[1],n)
g=C.c.E(t[5],m)
f=C.c.E(t[9],l)
e=t[13]
d=C.c.E(t[2],n)
c=C.c.E(t[6],m)
b=C.c.E(t[10],l)
a=t[14]
a0=C.c.E(t[3],n)
a1=C.c.E(t[7],m)
a2=C.c.E(t[11],l)
a3=t[15]
t[12]=s+r+q+i*k
t[13]=h+g+f+e*k
t[14]=d+c+b+a*k
t[15]=a0+a1+a2+a3*k
a3=this.cx
a3.B(this.db)
a3.a0(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.ej.prototype={
l:function(a){return"["+this.a+"] "+this.b+" "+this.c+" mode:"+this.d+" ["+this.e.a+"usec]"}}
G.fT.prototype={
dC:function(a){var t,s,r,q,p,o
t=this.e.x
s=a.e.x
for(r=t.gH(t),r=r.gv(r);r.p();){q=r.gq()
p=t.h(0,q)
o=s.h(0,q)
if(p==null?o!=null:p!==o)return!1}return!0},
dM:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gk(t)===s.gk(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gH(s),s=s.gv(s);s.p();){q=s.gq()
if(!t.A(0,q))C.a.j(r,q)}for(t=this.x,s=new P.c3(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.p();){q=s.d
if(!t.D(0,q))C.a.j(r,q)}return r},
dP:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gH(b),s=s.gv(s),r=this.d,q=this.y,p=this.z,o=0;s.p();){n=s.gq()
switch(J.k8(n,0)){case 117:if(q.A(0,n)){m=b.h(0,n)
if(p.A(0,n))H.bw("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$X().h(0,n)
if(l==null)H.H("unknown "+n)
H.b(q.A(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.jB(r.a,k,m)
else if(!!J.u(m).$iskH)J.ms(r.a,k,m)
break
case"float":if(l.c===0)J.mq(r.a,k,m)
else if(!!J.u(m).$iseM)J.mr(r.a,k,m)
break
case"mat4":if(l.c===0){j=H.aF(m,"$isB").a
J.kj(r.a,k,!1,j)}else if(!!J.u(m).$iseM)J.kj(r.a,k,!1,m)
else if(H.ao(!1))H.aB("bad unform: "+n)
break
case"mat3":if(l.c===0){j=H.aF(m,"$isav").a
J.ki(r.a,k,!1,j)}else if(!!J.u(m).$iseM)J.ki(r.a,k,!1,m)
else if(H.ao(!1))H.aB("bad unform: "+n)
break
case"vec4":j=l.c
i=r.a
if(j===0)J.kh(i,k,H.aF(m,"$isa2").a)
else J.kh(i,k,m)
break
case"vec3":j=l.c
i=r.a
if(j===0)J.kg(i,k,H.aF(m,"$ism").a)
else J.kg(i,k,m)
break
case"vec2":j=l.c
i=r.a
if(j===0)J.kf(i,k,H.aF(m,"$isaA").a)
else J.kf(i,k,m)
break
case"sampler2D":case"sampler2DShadow":j=C.b.a2(33984,this.ch)
J.k9(r.a,j)
j=H.aF(m,"$isbZ").b
J.dU(r.a,3553,j)
j=this.ch
J.jB(r.a,k,j)
this.ch=this.ch+1
break
case"samplerCube":H.b(n==="uCubeTexture")
j=C.b.a2(33984,this.ch)
J.k9(r.a,j)
j=H.aF(m,"$isbZ").b
J.dU(r.a,34067,j)
j=this.ch
J.jB(r.a,k,j)
this.ch=this.ch+1
break
default:H.bw("Error: unknow uniform type: "+j)
H.b(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":j=J.G(m,!0)
i=r.a
if(j)J.dX(i,2929)
else J.jx(i,2929)
break
case"cStencilFunc":H.aF(m,"$isdC")
j=m.a
i=r.a
if(j===1281)J.jx(i,2960)
else{J.dX(i,2960)
i=m.b
h=m.c
J.ml(r.a,j,i,h)}break
case"cDepthWrite":J.lX(r.a,m)
break
case"cBlendEquation":H.aF(m,"$isdB")
j=m.a
i=r.a
if(j===1281)J.jx(i,3042)
else{J.dX(i,3042)
i=m.b
h=m.c
J.lR(r.a,i,h)
J.lQ(r.a,j)}break}++o
break}}s=Date.now()
""+o
new P.aH(1000*(s-new P.aU(t,!1).a)).l(0)},
dA:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t=Date.now()
s=this.d
J.mt(s.a,this.r)
this.ch=0
this.z.W(0)
for(r=b.length,q=0;q<b.length;b.length===r||(0,H.C)(b),++q){p=b[q]
this.dP(p.a,p.bD())}r=this.Q
r.W(0)
for(o=a.cy,o=o.gH(o),o=o.gv(o);o.p();)r.j(0,o.gq())
n=this.dM()
if(n.length!==0)P.O("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.f(n)))
r=a.d
o=a.e
J.dV(r.a,o)
m=this.e.f.length>0
o=a.f
r=a.bB()
l=a.Q
k=a.z
if(m)J.lO(s.a,o)
if(l!==-1){j=s.a
if(k>1)J.m1(j,o,r,l,0,k)
else J.m0(j,o,r,l,0)}else{l=s.a
if(k>1)J.m_(l,o,0,r,k)
else J.lZ(l,o,0,r)}if(m)J.m4(s.a)
C.a.j(c,new G.ej(this.a,a.z,a.bB(),o,P.mI(0,0,0,Date.now()-new P.aU(t,!1).a,0,0)))},
dI:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.C)(t),++o){n=t[o]
r.i(0,n,J.ke(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.C)(t),++o){n=t[o]
r.i(0,n,J.ke(q.a,p,n))}}}
G.A.prototype={
bC:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.b(!1)
return-1}}}
G.aM.prototype={
aJ:function(a){var t,s,r,q,p
H.b(this.b==null)
for(t=a.length,s=this.c,r=this.x,q=0;q<a.length;a.length===t||(0,H.C)(a),++q){p=a[q]
H.b($.$get$X().A(0,p))
H.b(!C.a.D(s,p))
C.a.j(s,p)
r.i(0,p,this.r);++this.r}C.a.aH(s)},
au:function(a){var t,s,r,q
H.b(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.C)(a),++r){q=a[r]
if(H.ao($.$get$X().A(0,q)))H.aB("missing uniform "+q)
H.b(!C.a.D(s,q))
C.a.j(s,q)}C.a.aH(s)},
av:function(a){var t,s,r
H.b(this.b==null)
for(t=this.e,s=0;s<1;++s){r=a[s]
H.b($.$get$X().A(0,r))
H.b(!C.a.D(t,r))
C.a.j(t,r)}C.a.aH(t)},
bF:function(a,b){H.b(this.b==null)
this.b=this.bH(!0,a,b)},
aK:function(a){return this.bF(a,null)},
dJ:function(a,b){H.b(this.b==null)
this.b=this.bH(!1,a,b)},
bE:function(a){return this.dJ(a,null)},
bH:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.b(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.C)(t),++o){n=t[o]
m=$.$get$X().h(0,n)
C.a.j(q,"layout (location="+H.f(p.h(0,n))+") in "+m.a+" "+H.f(n)+";")}C.a.j(q,"")
l=r?"in":"out"
if(r)C.a.j(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.C)(t),++o){k=t[o]
m=$.$get$X().h(0,k)
C.a.j(q,l+" "+m.a+" "+H.f(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.C)(t),++o){k=t[o]
m=$.$get$X().h(0,k)
C.a.j(q,l+" "+m.a+" "+H.f(k)+";")}C.a.j(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.C)(t),++o){k=t[o]
m=$.$get$X().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.j(q,"uniform "+m.a+" "+H.f(k)+j+";")}C.a.j(q,"")
if(c!=null)C.a.M(q,c)
if(a)C.a.j(q,"void main(void) {")
C.a.M(q,b)
if(a)C.a.j(q,"}")
return C.a.a8(q,"\n")}}
G.h3.prototype={
fg:function(a0,a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
t=this.d.a
s=t[12]
r=t[13]
q=t[14]
a1=new T.m(new Float32Array(H.l(3)))
a1.Z(0,1,0)
p=this.e
o=p.a
o[0]=t[12]
o[1]=t[13]
o[2]=t[14]
o=new Float32Array(H.l(3))
n=new T.m(o)
n.B(p)
m=a0.a
o[0]=o[0]-m[0]
o[1]=o[1]-m[1]
o[2]=o[2]-m[2]
n.b8(0)
l=a1.cm(n)
l.b8(0)
k=n.cm(l)
k.b8(0)
j=l.b4(p)
i=k.b4(p)
p=n.b4(p)
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
b7:function(a){return this.fg(a,null)}}
G.hn.prototype={
dD:function(a,b){var t=this.e
if(t!==1)J.mn(a.a,b,34046,t)
t=this.r
J.dY(a.a,b,10240,t)
t=this.f
J.dY(a.a,b,10241,t)
if(this.b){J.dY(a.a,b,10242,33071)
J.dY(a.a,b,10243,33071)}}}
G.bZ.prototype={
l:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.hz.prototype={
l:function(a){return"TypedTextureMutable["+this.a+", "+this.x+", "+this.f+" X "+this.r+"]"}}
R.e5.prototype={}
R.dv.prototype={
cC:function(a){var t,s,r
t=this.db
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.O("size change "+H.f(s)+" "+H.f(r))
this.dx.du(s,r)
this.z=s
this.Q=r}}
R.h7.prototype={
dS:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.np("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.w).bP(r,"float")
r.setProperty(p,"left","")
p=C.w.bP(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.r.P(t,s)}return t},
dK:function(a,b,c){var t,s,r
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
J.jv(this.a,s)
r=this.dS(b,c,90,30)
this.d=r
J.jv(this.a,r)
t=t.createElement("div")
this.c=t
J.jv(this.a,t)}}
R.h8.prototype={
dO:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.o.fC(s,2)+" fps"
t=this.c;(t&&C.r).de(t,b)
r=C.b.G(30*C.o.eF(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.r).P(t,q)},
dN:function(a){return this.dO(a,"")}}
A.bl.prototype={
l:function(a){return"NODE["+this.a+"]"}}
A.bo.prototype={}
A.fS.prototype={
dz:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.d
s=this.r
r=this.z
q=this.Q
p=t.a
t=t.b
J.lP(p.a,36160,t)
H.b(r>0&&q>0)
J.mv(p.a,this.x,this.y,r,q)
if(s!==0)J.lS(p.a,s)
for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.C)(t),++o){n=t[o]
if(!n.c)continue
r=n.d
if(!r.c)continue
m=n.e
C.a.j(m,new G.dE(P.I(),"transforms",!1,!0))
l=new T.B(new Float32Array(16))
l.F()
for(q=n.f,p=q.length,k=0;k<q.length;q.length===p||(0,H.C)(q),++k)A.lu(r,q[k],l,a,m)
m.pop()}},
dH:function(a,b,c){if(this.d==null)this.d=new G.eQ(this.e,null,null,null,null)}}
D.fb.prototype={
$1:function(a){this.a.aB(0,C.V.eP(W.ny(this.b.response)))},
$S:function(){return{func:1,args:[,]}}}
A.j7.prototype={
$2:function(a,b){var t=536870911&a+J.ar(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(){return{func:1,args:[P.p,P.n]}}}
T.av.prototype={
B:function(a){var t,s
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
l:function(a){return"[0] "+this.S(0).l(0)+"\n[1] "+this.S(1).l(0)+"\n[2] "+this.S(2).l(0)+"\n"},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.j.i(this.a,b,c)},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.av){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gu:function(a){return A.dQ(this.a)},
S:function(a){var t,s
t=new Float32Array(H.l(3))
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.m(t)},
b3:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
if(g===0){this.B(a)
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
T.B.prototype={
ad:function(a,b,c){H.b(a<4)
H.b(b<4)
this.a[b*4+a]=c},
B:function(a){var t,s
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
bq:function(a,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
t=a0.a
s=t[0]
r=t[1]
q=t[2]
p=t[3]
o=s+s
n=r+r
m=q+q
l=s*o
k=s*n
j=s*m
i=r*n
h=r*m
g=q*m
f=p*o
e=p*n
d=p*m
c=a.a
b=this.a
b[0]=1-(i+g)
b[1]=k+d
b[2]=j-e
b[3]=0
b[4]=k-d
b[5]=1-(l+g)
b[6]=h+f
b[7]=0
b[8]=j+e
b[9]=h-f
b[10]=1-(l+i)
b[11]=0
b[12]=c[0]
b[13]=c[1]
b[14]=c[2]
b[15]=1},
l:function(a){return"[0] "+this.S(0).l(0)+"\n[1] "+this.S(1).l(0)+"\n[2] "+this.S(2).l(0)+"\n[3] "+this.S(3).l(0)+"\n"},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.j.i(this.a,b,c)},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.B){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gu:function(a){return A.dQ(this.a)},
S:function(a){var t,s
t=new Float32Array(H.l(4))
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.a2(t)},
E:function(a,b){var t=new T.B(new Float32Array(H.l(16)))
t.B(this)
t.a0(0,b)
return t},
cD:function(a){var t,s,r,q,p,o,n,m,l,k,j,i
t=Math.cos(a)
s=Math.sin(a)
r=this.a
q=r[4]
p=r[8]
o=r[5]
n=r[9]
m=r[6]
l=r[10]
k=r[7]
j=r[11]
i=-s
r[4]=q*t+p*s
r[5]=o*t+n*s
r[6]=m*t+l*s
r[7]=k*t+j*s
r[8]=q*i+p*t
r[9]=o*i+n*t
r[10]=m*i+l*t
r[11]=k*i+j*t},
d2:function(a,b,c,d){var t,s,r,q
t=b.a
s=t[0]
r=t[1]
q=t[2]
t=this.a
t[0]=t[0]*s
t[1]=t[1]*s
t[2]=t[2]*s
t[3]=t[3]*s
t[4]=t[4]*r
t[5]=t[5]*r
t[6]=t[6]*r
t[7]=t[7]*r
t[8]=t[8]*q
t[9]=t[9]*q
t[10]=t[10]*q
t[11]=t[11]*q
t[12]=t[12]
t[13]=t[13]
t[14]=t[14]
t[15]=t[15]},
T:function(a,b){return this.d2(a,b,null,null)},
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
bm:function(){var t,s,r,q
t=this.a
s=t[14]
r=t[13]
q=t[12]
t=new T.m(new Float32Array(H.l(3)))
t.Z(q,r,s)
return t},
b3:function(b4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
t=b4.a
s=t[0]
r=t[1]
q=t[2]
p=t[3]
o=t[4]
n=t[5]
m=t[6]
l=t[7]
k=t[8]
j=t[9]
i=t[10]
h=t[11]
g=t[12]
f=t[13]
e=t[14]
d=t[15]
c=s*n-r*o
b=s*m-q*o
a=s*l-p*o
a0=r*m-q*n
a1=r*l-p*n
a2=q*l-p*m
a3=k*f-j*g
a4=k*e-i*g
a5=k*d-h*g
a6=j*e-i*f
a7=j*d-h*f
a8=i*d-h*e
a9=c*a8-b*a7+a*a6+a0*a5-a1*a4+a2*a3
if(a9===0){this.B(b4)
return 0}b0=1/a9
b1=this.a
b1[0]=(n*a8-m*a7+l*a6)*b0
b1[1]=(-r*a8+q*a7-p*a6)*b0
b1[2]=(f*a2-e*a1+d*a0)*b0
b1[3]=(-j*a2+i*a1-h*a0)*b0
b2=-o
b1[4]=(b2*a8+m*a5-l*a4)*b0
b1[5]=(s*a8-q*a5+p*a4)*b0
b3=-g
b1[6]=(b3*a2+e*a-d*b)*b0
b1[7]=(k*a2-i*a+h*b)*b0
b1[8]=(o*a7-n*a5+l*a3)*b0
b1[9]=(-s*a7+r*a5-p*a3)*b0
b1[10]=(g*a1-f*a+d*c)*b0
b1[11]=(-k*a1+j*a-h*c)*b0
b1[12]=(b2*a6+n*a4-m*a3)*b0
b1[13]=(s*a6-r*a4+q*a3)*b0
b1[14]=(b3*a0+f*b-e*c)*b0
b1[15]=(k*a0-j*b+i*c)*b0
return a9},
a0:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.bT.prototype={
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gK:function(a){return this.a[2]},
gat:function(a){return this.a[3]},
gk:function(a){var t,s,r,q,p
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=t[3]
return Math.sqrt(s*s+r*r+q*q+p*p)},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.j.i(this.a,b,c)},
l:function(a){var t=this.a
return H.f(t[0])+", "+H.f(t[1])+", "+H.f(t[2])+" @ "+H.f(t[3])}}
T.aA.prototype={
l:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+"]"},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aA){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gu:function(a){return A.dQ(this.a)},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.j.i(this.a,b,c)},
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
B:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
l:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+"]"},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.m){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gu:function(a){return A.dQ(this.a)},
E:function(a,b){var t=new T.m(new Float32Array(H.l(3)))
t.B(this)
t.T(0,b)
return t},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.j.i(this.a,b,c)},
gk:function(a){return Math.sqrt(this.gb6())},
gb6:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
b8:function(a){var t,s,r
t=Math.sqrt(this.gb6())
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
cm:function(a){var t,s,r,q,p,o,n,m
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
T:function(a,b){var t=this.a
t[2]=t[2]*b
t[1]=t[1]*b
t[0]=t[0]*b},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gK:function(a){return this.a[2]}}
T.a2.prototype={
B:function(a){var t,s
t=a.a
s=this.a
s[3]=t[3]
s[2]=t[2]
s[1]=t[1]
s[0]=t[0]},
l:function(a){var t=this.a
return H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+","+H.f(t[3])},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.a2){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gu:function(a){return A.dQ(this.a)},
E:function(a,b){var t=new T.a2(new Float32Array(H.l(4)))
t.B(this)
t.T(0,b)
return t},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.j.i(this.a,b,c)},
gk:function(a){var t,s,r,q
t=this.a
s=t[0]
r=t[1]
q=t[2]
t=t[3]
return Math.sqrt(s*s+r*r+q*q+t*t)},
T:function(a,b){var t=this.a
t[0]=t[0]*b
t[1]=t[1]*b
t[2]=t[2]*b
t[3]=t[3]*b},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gK:function(a){return this.a[2]},
gat:function(a){return this.a[3]}}
B.jj.prototype={
$1:function(a){var t=H.aF(W.nx(a.target),"$isbI")
P.O(H.f(t.id)+" toggle "+H.f(t.checked))
this.a.h(0,t.id).c=t.checked},
$S:function(){return{func:1,args:[W.i]}}}
B.ji.prototype={
$1:function(a9){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
t=this.a
t.d=a9+0
s=this.c
s.go=H.a4(s.go+0.001)
r=s.k4
if(r.h(0,37)!=null)s.go=H.a4(s.go+0.03)
else if(r.h(0,39)!=null)s.go=H.a4(s.go-0.03)
if(r.h(0,38)!=null)s.id=H.a4(s.id+0.03)
else if(r.h(0,40)!=null)s.id=H.a4(s.id-0.03)
if(r.h(0,33)!=null)s.fy=H.a4(s.fy*0.99)
else if(r.h(0,34)!=null)s.fy=H.a4(s.fy*1.01)
if(r.h(0,32)!=null){s.go=0
s.id=0}r=H.a4(C.c.eG(s.id,-1.4707963267948965,1.4707963267948965))
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
s.b7(p)
p=s.f
r=p.a
r[0]=m[2]
r[1]=m[6]
r[2]=m[10]
s=-s.k1
p=Math.sqrt(p.gb6())
l=r[0]/p
k=r[1]/p
j=r[2]/p
p=Math.cos(s)
s=Math.sin(s)
i=1-p
h=l*l*i+p
r=j*s
g=l*k*i-r
q=k*s
f=l*j*i+q
e=k*l*i+r
d=k*k*i+p
s=l*s
c=k*j*i-s
b=j*l*i-q
a=j*k*i+s
a0=j*j*i+p
p=m[0]
s=m[4]
q=m[8]
r=m[1]
n=m[5]
a1=m[9]
a2=m[2]
a3=m[6]
a4=m[10]
a5=m[3]
a6=m[7]
a7=m[11]
m[0]=p*h+s*e+q*b
m[1]=r*h+n*e+a1*b
m[2]=a2*h+a3*e+a4*b
m[3]=a5*h+a6*e+a7*b
m[4]=p*g+s*d+q*a
m[5]=r*g+n*d+a1*a
m[6]=a2*g+a3*d+a4*a
m[7]=a5*g+a6*d+a7*a
m[8]=p*f+s*c+q*a0
m[9]=r*f+n*c+a1*a0
m[10]=a2*f+a3*c+a4*a0
m[11]=a5*f+a6*c+a7*a0
this.d.dz([])
C.ax.gez(window).bc(this)
this.b.dN(t.d)
a7=a9/1000
this.e.d.i(0,"uTime",C.b.bo(C.o.f2(a7/0.0333),t.c.length))
t=t.a
a6=t.c
a5=t.a
m=t.d
L.jT(a6,a5,m,t.e,C.o.bo(a7,m.c))
a8=R.ko(a6,t.e,1)
t.b.bA(G.eL(a8,null))},
$S:function(){return{func:1,v:true,args:[P.Y]}}}
B.jk.prototype={
$1:function(a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=new T.B(new Float32Array(H.l(16)))
t.F()
s=J.z(a4)
r=Y.mS(s.h(a4,0))
q=Y.mT(s.h(a4,0))
p=Y.mR(s.h(a4,0),q)
s=this.c
o=s.d
n=r[0]
m=o.d
l=new G.dh(m,J.kc(m.a),4,P.I(),o.e.x,null,0,-1,null,null,P.I(),"meshdata:../asset/knight/knight.js",!1,!0)
l.bx(G.eL(n.d,null))
o=n.dB()
l.y=J.dW(m.a)
l.bz(o)
G.nr(n,l)
o=this.r
n=new Float32Array(H.l(9))
m=new T.B(new Float32Array(H.l(16)))
m.F()
k=new T.B(new Float32Array(H.l(16)))
k.F()
j=new Float32Array(H.l(3))
i=new Float32Array(H.l(3))
h=new Float32Array(H.l(3))
g=new Float32Array(H.l(3))
k.cD(-0.785)
f=[]
e=new Float32Array(H.l(9))
d=new T.B(new Float32Array(H.l(16)))
d.F()
c=new T.B(new Float32Array(H.l(16)))
c.F()
b=new A.bl(null,null,f,new T.av(e),d,c,new T.m(new Float32Array(H.l(3))),new T.m(new Float32Array(H.l(3))),new T.m(new Float32Array(H.l(3))),new T.m(new Float32Array(H.l(3))),"wrapper",!1,!0)
C.a.j(f,new A.bl(o,l,[],new T.av(n),m,k,new T.m(j),new T.m(i),new T.m(h),new T.m(g),"meshdata:../asset/knight/knight.js",!1,!0))
n=new T.m(new Float32Array(H.l(3)))
n.Z(100,0,0)
b.b7(n)
H.b(!0)
C.a.j(this.e.f,b)
H.b(!0)
C.a.j(s.f,b)
s=this.a
s.c=[]
for(n=p.c,a=0;C.c.ac(a,n);a+=0.0333){m=s.c;(m&&C.a).j(m,a)}a0=L.mE(q,t,p,s.c)
n=this.b
m=q.length
k=m*4
j=s.c.length
i=$.$get$kX()
h=J.lW(n.a)
a1=new G.hz(k,j,34836,"anim",h,3553,n,i)
J.dU(n.a,3553,h)
J.mm(n.a,3553,0,34836,k,j,0,6408,5126,a0)
i.dD(n,3553)
a2=J.md(n.a)
if(H.ao(a2===0))H.aB("texture error "+H.f(a2))
J.dU(n.a,3553,null)
s.b=a1
o.a4("uAnimationTable",a1)
o=this.d
n=new T.B(new Float32Array(H.l(16)))
n.F()
a3=new R.e5(n,null,q,p,null,null)
m=L.kl(m)
a3.e=m
L.jT(q,n,p,m,0)
m=G.n2("wire",o.d,R.ko(q,m,1))
a3.b=m
n=new Float32Array(H.l(9))
k=new T.B(new Float32Array(H.l(16)))
k.F()
j=new T.B(new Float32Array(H.l(16)))
j.F()
m=new A.bl(this.f,m,[],new T.av(n),k,j,new T.m(new Float32Array(H.l(3))),new T.m(new Float32Array(H.l(3))),new T.m(new Float32Array(H.l(3))),new T.m(new Float32Array(H.l(3))),m.a,!1,!0)
a3.f=m
s.a=a3
j.cD(0.785)
j=[]
s=new Float32Array(H.l(9))
k=new T.B(new Float32Array(H.l(16)))
k.F()
n=new T.B(new Float32Array(H.l(16)))
n.F()
b=new A.bl(null,null,j,new T.av(s),k,n,new T.m(new Float32Array(H.l(3))),new T.m(new Float32Array(H.l(3))),new T.m(new Float32Array(H.l(3))),new T.m(new Float32Array(H.l(3))),"wrapper",!1,!0)
C.a.j(j,m)
s=new T.m(new Float32Array(H.l(3)))
s.Z(100,0,0)
b.b7(s)
H.b(!0)
C.a.j(o.f,b)
this.x.$1(0)},
$S:function(){return{func:1,args:[P.c]}}}
J.a.prototype.dj=J.a.prototype.l
J.bJ.prototype.dl=J.bJ.prototype.l
P.a_.prototype.dk=P.a_.prototype.aF
W.a7.prototype.aI=W.a7.prototype.N
W.c5.prototype.dm=W.c5.prototype.V;(function installTearOffs(){installTearOff(H.b7.prototype,"gfe",0,0,0,null,["$0"],["aD"],0)
installTearOff(H.an.prototype,"gd4",0,0,0,null,["$1"],["L"],2)
installTearOff(H.b6.prototype,"geU",0,0,0,null,["$1"],["X"],2)
installTearOff(P,"nI",1,0,0,null,["$1"],["nl"],1)
installTearOff(P,"nJ",1,0,0,null,["$1"],["nm"],1)
installTearOff(P,"nK",1,0,0,null,["$1"],["nn"],1)
installTearOff(P,"lr",1,0,0,null,["$0"],["nG"],0)
installTearOff(P.T.prototype,"gdY",0,0,0,null,["$2","$1"],["J","dZ"],5)
installTearOff(P,"nQ",1,0,0,null,["$2"],["mC"],7)
installTearOff(W,"nV",1,0,0,null,["$1"],["mK"],8)
installTearOff(W,"nW",1,0,0,null,["$4"],["ns"],4)
installTearOff(W,"nX",1,0,0,null,["$4"],["nt"],4)
installTearOff(W.dn.prototype,"gb9",0,1,0,null,["$0"],["ba"],3)
installTearOff(W.dD.prototype,"gb9",0,1,0,null,["$0"],["ba"],3)
installTearOff(R.dv.prototype,"gfq",0,0,0,null,["$1"],["cC"],6)
installTearOff(B,"lm",1,0,0,null,["$0"],["o4"],0)})();(function inheritance(){inherit(P.n,null)
var t=P.n
inherit(H.jJ,t)
inherit(J.a,t)
inherit(J.e2,t)
inherit(P.a_,t)
inherit(H.df,t)
inherit(P.db,t)
inherit(H.cs,t)
inherit(H.be,t)
inherit(H.iv,t)
inherit(H.b7,t)
inherit(H.i1,t)
inherit(H.b8,t)
inherit(H.iu,t)
inherit(H.hU,t)
inherit(H.bn,t)
inherit(H.hp,t)
inherit(H.at,t)
inherit(H.an,t)
inherit(H.b6,t)
inherit(H.fR,t)
inherit(H.hw,t)
inherit(P.bg,t)
inherit(H.dN,t)
inherit(H.aN,t)
inherit(H.aj,t)
inherit(H.f7,t)
inherit(H.f9,t)
inherit(P.hW,t)
inherit(P.dK,t)
inherit(P.T,t)
inherit(P.dG,t)
inherit(P.ha,t)
inherit(P.hb,t)
inherit(P.bd,t)
inherit(P.iT,t)
inherit(P.h_,t)
inherit(P.is,t)
inherit(P.c3,t)
inherit(P.bS,t)
inherit(P.x,t)
inherit(P.it,t)
inherit(P.iq,t)
inherit(P.cj,t)
inherit(P.ck,t)
inherit(P.aC,t)
inherit(P.K,t)
inherit(P.aU,t)
inherit(P.Y,t)
inherit(P.aH,t)
inherit(P.dy,t)
inherit(P.i6,t)
inherit(P.eP,t)
inherit(P.en,t)
inherit(P.c,t)
inherit(P.aL,t)
inherit(P.b_,t)
inherit(P.bV,t)
inherit(P.r,t)
inherit(P.bW,t)
inherit(W.eb,t)
inherit(W.hT,t)
inherit(W.c2,t)
inherit(W.E,t)
inherit(W.dq,t)
inherit(W.c5,t)
inherit(W.iL,t)
inherit(W.ct,t)
inherit(W.hY,t)
inherit(W.dp,t)
inherit(W.iF,t)
inherit(W.dO,t)
inherit(P.hL,t)
inherit(P.ix,t)
inherit(G.fl,t)
inherit(L.cg,t)
inherit(L.e0,t)
inherit(L.ch,t)
inherit(L.h1,t)
inherit(G.e9,t)
inherit(G.eQ,t)
inherit(G.eG,t)
inherit(G.eH,t)
inherit(G.eT,t)
inherit(G.dC,t)
inherit(G.dB,t)
inherit(G.ej,t)
inherit(G.A,t)
inherit(G.aM,t)
inherit(G.hn,t)
inherit(G.bZ,t)
inherit(R.e5,t)
inherit(R.h7,t)
inherit(T.av,t)
inherit(T.B,t)
inherit(T.bT,t)
inherit(T.aA,t)
inherit(T.m,t)
inherit(T.a2,t)
t=J.a
inherit(J.f0,t)
inherit(J.f1,t)
inherit(J.bJ,t)
inherit(J.aW,t)
inherit(J.bi,t)
inherit(J.aX,t)
inherit(H.bM,t)
inherit(H.bk,t)
inherit(W.h,t)
inherit(W.a6,t)
inherit(W.cf,t)
inherit(W.e7,t)
inherit(W.D,t)
inherit(W.cx,t)
inherit(W.ed,t)
inherit(W.ee,t)
inherit(W.ef,t)
inherit(W.co,t)
inherit(W.cp,t)
inherit(W.cq,t)
inherit(W.cI,t)
inherit(W.ei,t)
inherit(W.i,t)
inherit(W.cH,t)
inherit(W.a9,t)
inherit(W.eU,t)
inherit(W.cM,t)
inherit(W.fc,t)
inherit(W.fi,t)
inherit(W.aa,t)
inherit(W.cG,t)
inherit(W.fu,t)
inherit(W.dn,t)
inherit(W.cL,t)
inherit(W.fD,t)
inherit(W.bp,t)
inherit(W.ab,t)
inherit(W.cE,t)
inherit(W.am,t)
inherit(W.dt,t)
inherit(W.ad,t)
inherit(W.cD,t)
inherit(W.ae,t)
inherit(W.h9,t)
inherit(W.a0,t)
inherit(W.cC,t)
inherit(W.ho,t)
inherit(W.ag,t)
inherit(W.cN,t)
inherit(W.ht,t)
inherit(W.dD,t)
inherit(W.hB,t)
inherit(W.hG,t)
inherit(W.hV,t)
inherit(W.cB,t)
inherit(W.cR,t)
inherit(W.cQ,t)
inherit(W.cK,t)
inherit(W.cP,t)
inherit(W.cO,t)
inherit(W.iR,t)
inherit(W.iS,t)
inherit(P.au,t)
inherit(P.cA,t)
inherit(P.aw,t)
inherit(P.cF,t)
inherit(P.fJ,t)
inherit(P.fK,t)
inherit(P.fP,t)
inherit(P.cy,t)
inherit(P.ax,t)
inherit(P.cJ,t)
inherit(P.hF,t)
inherit(P.e3,t)
inherit(P.fU,t)
inherit(P.fV,t)
inherit(P.iQ,t)
inherit(P.cz,t)
t=J.bJ
inherit(J.fH,t)
inherit(J.b3,t)
inherit(J.aY,t)
inherit(J.jI,J.aW)
t=J.bi
inherit(J.dd,t)
inherit(J.dc,t)
t=P.a_
inherit(H.d,t)
inherit(H.dg,t)
inherit(H.dF,t)
t=H.d
inherit(H.bj,t)
inherit(H.f8,t)
inherit(H.em,H.dg)
t=P.db
inherit(H.fd,t)
inherit(H.hI,t)
t=H.bj
inherit(H.bK,t)
inherit(P.fa,t)
t=H.be
inherit(H.js,t)
inherit(H.jt,t)
inherit(H.ip,t)
inherit(H.i2,t)
inherit(H.eX,t)
inherit(H.eY,t)
inherit(H.iw,t)
inherit(H.hq,t)
inherit(H.hr,t)
inherit(H.ju,t)
inherit(H.jc,t)
inherit(H.jd,t)
inherit(H.je,t)
inherit(H.jf,t)
inherit(H.jg,t)
inherit(H.hj,t)
inherit(H.f2,t)
inherit(H.j8,t)
inherit(H.j9,t)
inherit(H.ja,t)
inherit(P.hQ,t)
inherit(P.hP,t)
inherit(P.hR,t)
inherit(P.hS,t)
inherit(P.eS,t)
inherit(P.eR,t)
inherit(P.i7,t)
inherit(P.ig,t)
inherit(P.ib,t)
inherit(P.ic,t)
inherit(P.id,t)
inherit(P.i9,t)
inherit(P.ie,t)
inherit(P.i8,t)
inherit(P.ij,t)
inherit(P.ik,t)
inherit(P.ii,t)
inherit(P.ih,t)
inherit(P.hc,t)
inherit(P.hd,t)
inherit(P.iX,t)
inherit(P.iA,t)
inherit(P.iz,t)
inherit(P.iB,t)
inherit(P.fe,t)
inherit(P.ek,t)
inherit(P.el,t)
inherit(W.iY,t)
inherit(W.hJ,t)
inherit(W.i5,t)
inherit(W.fw,t)
inherit(W.fv,t)
inherit(W.iH,t)
inherit(W.iI,t)
inherit(W.iO,t)
inherit(W.iP,t)
inherit(P.hN,t)
inherit(P.iZ,t)
inherit(P.j_,t)
inherit(P.j0,t)
inherit(B.jn,t)
inherit(B.jo,t)
inherit(B.jp,t)
inherit(B.jq,t)
inherit(B.jr,t)
inherit(B.fz,t)
inherit(B.fA,t)
inherit(B.fB,t)
inherit(B.fC,t)
inherit(D.fb,t)
inherit(A.j7,t)
inherit(B.jj,t)
inherit(B.ji,t)
inherit(B.jk,t)
t=H.hU
inherit(H.br,t)
inherit(H.c6,t)
t=P.bg
inherit(H.dr,t)
inherit(H.f3,t)
inherit(H.hA,t)
inherit(H.hy,t)
inherit(H.e8,t)
inherit(H.fX,t)
inherit(P.ce,t)
inherit(P.bm,t)
inherit(P.ah,t)
inherit(P.v,t)
inherit(P.c_,t)
inherit(P.al,t)
inherit(P.Z,t)
inherit(P.ec,t)
t=H.hj
inherit(H.h6,t)
inherit(H.by,t)
inherit(H.hO,P.ce)
t=H.bk
inherit(H.fm,t)
inherit(H.dj,t)
t=H.dj
inherit(H.bO,t)
inherit(H.bN,t)
inherit(H.bP,H.bO)
inherit(H.dk,H.bP)
inherit(H.bQ,H.bN)
inherit(H.dl,H.bQ)
t=H.dk
inherit(H.di,t)
inherit(H.fn,t)
t=H.dl
inherit(H.fo,t)
inherit(H.fp,t)
inherit(H.fq,t)
inherit(H.fr,t)
inherit(H.fs,t)
inherit(H.dm,t)
inherit(H.ft,t)
t=P.hW
inherit(P.dH,t)
inherit(P.iM,t)
inherit(P.iy,P.iT)
inherit(P.dL,H.aj)
inherit(P.fZ,P.h_)
inherit(P.io,P.fZ)
inherit(P.ir,P.io)
inherit(P.de,P.bS)
inherit(P.f4,P.cj)
inherit(P.f5,P.ck)
t=P.Y
inherit(P.Q,t)
inherit(P.p,t)
t=P.ah
inherit(P.du,t)
inherit(P.eW,t)
t=W.h
inherit(W.t,t)
inherit(W.bC,t)
inherit(W.ea,t)
inherit(W.eJ,t)
inherit(W.bH,t)
inherit(W.bL,t)
inherit(W.fM,t)
inherit(W.dw,t)
inherit(W.h0,t)
inherit(W.ac,t)
inherit(W.bB,t)
inherit(W.af,t)
inherit(W.a1,t)
inherit(W.bA,t)
inherit(W.hD,t)
inherit(W.hH,t)
inherit(W.c0,t)
inherit(W.hK,t)
inherit(W.b5,t)
inherit(W.iG,t)
t=W.t
inherit(W.a7,t)
inherit(W.aT,t)
inherit(W.aV,t)
inherit(W.cn,t)
inherit(W.hZ,t)
t=W.a7
inherit(W.k,t)
inherit(P.J,t)
t=W.k
inherit(W.e_,t)
inherit(W.e1,t)
inherit(W.aS,t)
inherit(W.ci,t)
inherit(W.cm,t)
inherit(W.eO,t)
inherit(W.cu,t)
inherit(W.bI,t)
inherit(W.fY,t)
inherit(W.dz,t)
inherit(W.hh,t)
inherit(W.hi,t)
inherit(W.bX,t)
inherit(W.im,t)
inherit(W.bF,W.bC)
inherit(W.e4,W.bF)
inherit(W.bf,W.cx)
inherit(W.eg,W.cp)
inherit(W.da,W.cI)
inherit(W.eh,W.da)
inherit(W.a8,W.cf)
inherit(W.d8,W.cH)
inherit(W.eI,W.d8)
inherit(W.cW,W.cM)
inherit(W.bG,W.cW)
inherit(W.cv,W.aV)
inherit(W.cw,W.bH)
inherit(W.aO,W.i)
t=W.aO
inherit(W.aZ,t)
inherit(W.S,t)
inherit(W.b2,t)
inherit(W.fj,W.bL)
inherit(W.d2,W.cG)
inherit(W.fk,W.d2)
inherit(W.W,P.de)
inherit(W.d3,W.cL)
inherit(W.bR,W.d3)
t=W.bp
inherit(W.fG,t)
inherit(W.fW,t)
inherit(W.hv,t)
inherit(W.d4,W.cE)
inherit(W.fI,W.d4)
inherit(W.fL,W.am)
inherit(W.bE,W.bB)
inherit(W.h2,W.bE)
inherit(W.d0,W.cD)
inherit(W.h4,W.d0)
inherit(W.cX,W.cC)
inherit(W.hl,W.cX)
inherit(W.bD,W.bA)
inherit(W.hm,W.bD)
inherit(W.d6,W.cN)
inherit(W.hs,W.d6)
inherit(W.b4,W.S)
inherit(W.d7,W.cB)
inherit(W.dI,W.d7)
inherit(W.d5,W.cR)
inherit(W.hX,W.d5)
inherit(W.i_,W.cq)
inherit(W.cS,W.cQ)
inherit(W.il,W.cS)
inherit(W.d9,W.cK)
inherit(W.dM,W.d9)
inherit(W.cZ,W.cP)
inherit(W.iJ,W.cZ)
inherit(W.cV,W.cO)
inherit(W.iK,W.cV)
inherit(W.i0,W.hT)
inherit(W.i3,P.ha)
inherit(W.dJ,W.i3)
inherit(W.i4,P.hb)
inherit(W.iN,W.c5)
inherit(P.hM,P.hL)
inherit(P.L,P.ix)
t=P.J
inherit(P.aJ,t)
inherit(P.aR,t)
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
inherit(P.eK,t)
inherit(P.ff,t)
inherit(P.fg,t)
inherit(P.fE,t)
inherit(P.bU,t)
inherit(P.hg,t)
inherit(P.hE,t)
inherit(P.c1,t)
inherit(P.iC,t)
inherit(P.iD,t)
inherit(P.iE,t)
t=P.aJ
inherit(P.dZ,t)
inherit(P.eN,t)
inherit(P.ai,t)
inherit(P.eV,t)
inherit(P.hf,t)
inherit(P.dA,t)
inherit(P.hC,t)
inherit(P.cU,P.cA)
inherit(P.f6,P.cU)
inherit(P.d1,P.cF)
inherit(P.fx,P.d1)
inherit(P.fQ,P.ai)
inherit(P.d_,P.cy)
inherit(P.he,P.d_)
t=P.dA
inherit(P.hk,t)
inherit(P.bY,t)
inherit(P.cY,P.cJ)
inherit(P.hu,P.cY)
inherit(P.cT,P.cz)
inherit(P.h5,P.cT)
t=G.fl
inherit(G.h3,t)
inherit(G.dE,t)
inherit(G.dh,t)
inherit(G.fT,t)
inherit(A.fS,t)
inherit(A.bo,t)
t=G.h3
inherit(G.e6,t)
inherit(A.bl,t)
inherit(B.fy,G.e6)
t=G.dE
inherit(G.fh,t)
inherit(G.fF,t)
inherit(G.hz,G.bZ)
inherit(R.dv,A.fS)
inherit(R.h8,R.h7)
mixin(H.bN,P.x)
mixin(H.bO,P.x)
mixin(H.bP,H.cs)
mixin(H.bQ,H.cs)
mixin(P.bS,P.x)
mixin(W.bA,P.x)
mixin(W.bB,P.x)
mixin(W.bC,P.x)
mixin(W.bD,W.E)
mixin(W.bE,W.E)
mixin(W.bF,W.E)
mixin(W.cx,W.eb)
mixin(W.cR,P.x)
mixin(W.cD,P.x)
mixin(W.cK,P.x)
mixin(W.cL,P.x)
mixin(W.cM,P.x)
mixin(W.cN,P.x)
mixin(W.cO,P.x)
mixin(W.cP,P.x)
mixin(W.cQ,P.x)
mixin(W.cB,P.x)
mixin(W.cC,P.x)
mixin(W.cE,P.x)
mixin(W.cG,P.x)
mixin(W.cH,P.x)
mixin(W.cI,P.x)
mixin(W.cS,W.E)
mixin(W.d3,W.E)
mixin(W.d4,W.E)
mixin(W.d2,W.E)
mixin(W.d7,W.E)
mixin(W.d8,W.E)
mixin(W.d9,W.E)
mixin(W.da,W.E)
mixin(W.cV,W.E)
mixin(W.cW,W.E)
mixin(W.cX,W.E)
mixin(W.cZ,W.E)
mixin(W.d0,W.E)
mixin(W.d5,W.E)
mixin(W.d6,W.E)
mixin(P.cA,P.x)
mixin(P.cy,P.x)
mixin(P.cF,P.x)
mixin(P.cJ,P.x)
mixin(P.cU,W.E)
mixin(P.d1,W.E)
mixin(P.cY,W.E)
mixin(P.d_,W.E)
mixin(P.cz,P.x)
mixin(P.cT,W.E)})();(function constants(){C.q=W.aS.prototype
C.K=W.ci.prototype
C.w=W.bf.prototype
C.r=W.cm.prototype
C.L=W.co.prototype
C.M=W.cu.prototype
C.k=W.cv.prototype
C.y=W.cw.prototype
C.N=J.a.prototype
C.a=J.aW.prototype
C.o=J.dc.prototype
C.b=J.dd.prototype
C.c=J.bi.prototype
C.i=J.aX.prototype
C.U=J.aY.prototype
C.j=H.di.prototype
C.C=W.bR.prototype
C.D=J.fH.prototype
C.E=W.dt.prototype
C.J=W.dz.prototype
C.v=J.b3.prototype
C.aw=W.b4.prototype
C.ax=W.c0.prototype
C.d=new P.iy()
C.x=new P.aH(0)
C.O=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.P=function(hooks) {
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
C.z=function(hooks) { return hooks; }

C.Q=function(getTagFallback) {
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
C.R=function() {
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
C.S=function(hooks) {
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
C.T=function(hooks) {
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
C.A=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.V=new P.f4(null,null)
C.W=new P.f5(null)
C.X=H.w(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.r])
C.Y=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.B=makeConstList([])
C.t=H.w(makeConstList(["bind","if","ref","repeat","syntax"]),[P.r])
C.u=H.w(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.r])
C.Z=new G.A("vec3","vertex btangents",0)
C.e=new G.A("vec3","",0)
C.a_=new G.A("vec4","delta from light",0)
C.p=new G.A("","",0)
C.F=new G.A("vec3","vertex coordinates",0)
C.a0=new G.A("vec3","vertex binormals",0)
C.G=new G.A("vec4","for wireframe",0)
C.a1=new G.A("vec4","per vertex color",0)
C.a2=new G.A("float","for normal maps",0)
C.l=new G.A("mat4","",0)
C.a4=new G.A("mat4","",4)
C.a3=new G.A("mat4","",128)
C.f=new G.A("float","",0)
C.a5=new G.A("float","",4)
C.a6=new G.A("float","depth for shadowmaps",0)
C.h=new G.A("sampler2D","",0)
C.a7=new G.A("float","for bump maps",0)
C.a8=new G.A("vec2","texture uvs",0)
C.a9=new G.A("float","time since program start in sec",0)
C.m=new G.A("vec2","",0)
C.aa=new G.A("samplerCube","",0)
C.n=new G.A("vec4","",0)
C.ab=new G.A("vec3","vertex normals",0)
C.ac=new G.A("sampler2DShadow","",0)
C.H=new G.A("vec3","per vertex color",0)
C.I=new G.A("mat3","",0)
C.ad=new G.A("vec3","vertex tangents",0)
C.ae=H.N("oe")
C.af=H.N("of")
C.ag=H.N("eM")
C.ah=H.N("og")
C.ai=H.N("oh")
C.aj=H.N("kH")
C.ak=H.N("oi")
C.al=H.N("kK")
C.am=H.N("b_")
C.an=H.N("r")
C.ao=H.N("l8")
C.ap=H.N("l9")
C.aq=H.N("ok")
C.ar=H.N("la")
C.as=H.N("aC")
C.at=H.N("Q")
C.au=H.N("p")
C.av=H.N("Y")})();(function staticFields(){$.kR="$cachedFunction"
$.kS="$cachedInvocation"
$.ks=null
$.kq=null
$.jX=!1
$.k1=null
$.ll=null
$.lD=null
$.j3=null
$.jb=null
$.k2=null
$.bs=null
$.c7=null
$.c8=null
$.jY=!1
$.y=C.d
$.kG=0
$.aI=null
$.jF=null
$.kF=null
$.kE=null
$.kC=null
$.kB=null
$.kA=null
$.kz=null
$.nM=0
$.nN=0
$.k6=0
$.lB=0
$.cc=0
$.cd=0
$.ob=!1
$.lw=0})();(function lazyInitializers(){lazy($,"ky","$get$ky",function(){return H.ly("_$dart_dartClosure")})
lazy($,"jK","$get$jK",function(){return H.ly("_$dart_js")})
lazy($,"kI","$get$kI",function(){return H.mY()})
lazy($,"kJ","$get$kJ",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.kG
$.kG=t+1
t="expando$key$"+t}return new P.en(null,t,[P.p])})
lazy($,"kY","$get$kY",function(){return H.ay(H.hx({
toString:function(){return"$receiver$"}}))})
lazy($,"kZ","$get$kZ",function(){return H.ay(H.hx({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"l_","$get$l_",function(){return H.ay(H.hx(null))})
lazy($,"l0","$get$l0",function(){return H.ay(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"l4","$get$l4",function(){return H.ay(H.hx(void 0))})
lazy($,"l5","$get$l5",function(){return H.ay(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"l2","$get$l2",function(){return H.ay(H.l3(null))})
lazy($,"l1","$get$l1",function(){return H.ay(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"l7","$get$l7",function(){return H.ay(H.l3(void 0))})
lazy($,"l6","$get$l6",function(){return H.ay(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"jV","$get$jV",function(){return P.nk()})
lazy($,"c9","$get$c9",function(){return[]})
lazy($,"kx","$get$kx",function(){return{}})
lazy($,"le","$get$le",function(){return P.jN(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"jW","$get$jW",function(){return P.I()})
lazy($,"j2","$get$j2",function(){return P.jM(P.p,P.aC)})
lazy($,"cb","$get$cb",function(){return P.jM(P.r,P.aC)})
lazy($,"kV","$get$kV",function(){return new G.dC(1281,0,4294967295)})
lazy($,"kn","$get$kn",function(){return new G.dB(1281,1281,1281)})
lazy($,"X","$get$X",function(){return P.aK(["cBlendEquation",C.p,"cDepthWrite",C.p,"cDepthTest",C.p,"cStencilFunc",C.p,"tPosition",C.e,"tSpeed",C.e,"tForce",C.e,"aColors",C.H,"aColorAlpha",C.a1,"aPosition",C.F,"aTexUV",C.a8,"aNormal",C.ab,"aBinormal",C.a0,"aCenter",C.G,"aPointSize",C.f,"aBoneIndex",C.n,"aBoneWeight",C.n,"aTangent",C.ad,"aBitangent",C.Z,"iaRotation",C.n,"iaTranslation",C.e,"iaScale",C.e,"vColor",C.H,"vTexUV",C.m,"vLightWeighting",C.e,"vNormal",C.e,"vPosition",C.F,"vPositionFromLight",C.a_,"vCenter",C.G,"vDepth",C.a6,"uTransformationMatrix",C.l,"uModelMatrix",C.l,"uNormalMatrix",C.I,"uConvolutionMatrix",C.I,"uPerspectiveViewMatrix",C.l,"uLightPerspectiveViewMatrix",C.l,"uShadowMap",C.ac,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.aa,"uAnimationTable",C.h,"uTime",C.a9,"uCameraNear",C.f,"uCameraFar",C.f,"uFogNear",C.f,"uFogFar",C.f,"uPointSize",C.f,"uScale",C.f,"uAngle",C.f,"uCanvasSize",C.m,"uCenter2",C.m,"uCutOff",C.f,"uShininess",C.f,"uShadowBias",C.f,"uOpacity",C.f,"uColor",C.e,"uAmbientDiffuse",C.e,"uColorEmissive",C.e,"uColorSpecular",C.e,"uColorDiffuse",C.e,"uColorAlpha",C.n,"uColorAlpha2",C.n,"uEyePosition",C.e,"uMaterial",C.l,"uRange",C.m,"uDirection",C.m,"uBoneMatrices",C.a3,"uLightDescs",C.a4,"uLightCount",C.f,"uLightTypes",C.a5,"uBumpScale",C.a7,"uNormalScale",C.a2])})
lazy($,"kX","$get$kX",function(){var t=new G.hn(!1,!1,!1,!0,1,9729,9729)
t.d=!1
t.b=!0
t.f=9728
t.r=9728
return t})
lazy($,"lF","$get$lF",function(){var t=new G.aM("SolidColor",null,[],[],[],[],0,P.I())
t.aJ(["aPosition"])
t.au(["uPerspectiveViewMatrix","uModelMatrix"])
t.aK(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"])
return t})
lazy($,"lE","$get$lE",function(){var t=new G.aM("SolidColorF",null,[],[],[],[],0,P.I())
t.au(["uColor"])
t.aK(["oFragColor = vec4( uColor, 1.0 );"])
return t})
lazy($,"lt","$get$lt",function(){var t=new G.aM("FixedVertexColorV",null,[],[],[],[],0,P.I())
t.aJ(["aPosition"])
t.au(["uPerspectiveViewMatrix","uModelMatrix"])
t.av(["vColor"])
t.bF(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vColor = ColorFromPosition(aPosition);"],["// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"])
return t})
lazy($,"ls","$get$ls",function(){var t=new G.aM("FixedVertexColorF",null,[],[],[],[],0,P.I())
t.av(["vColor"])
t.aK(["oFragColor = vec4( vColor, 1.0 );"])
return t})
lazy($,"lo","$get$lo",function(){var t=new G.aM("AnimationV",null,[],[],[],[],0,P.I())
t.aJ(["aPosition","aBoneIndex","aBoneWeight"])
t.av(["vColor"])
t.au(["uPerspectiveViewMatrix","uModelMatrix","uAnimationTable","uTime"])
t.bE(["mat4 GetBoneMatrix(sampler2D table, int index, int time) {\n    vec4 v1 = texelFetch(table, ivec2(index * 4 + 0, time), 0);\n    vec4 v2 = texelFetch(table, ivec2(index * 4 + 1, time), 0);\n    vec4 v3 = texelFetch(table, ivec2(index * 4 + 2, time), 0);\n    vec4 v4 = texelFetch(table, ivec2(index * 4 + 3, time), 0);\n    return mat4(v1, v2, v3, v4);\n    //return uBoneMatrices[index];\n}\n\nmat4 adjustMatrix(sampler2D table, vec4 weights, ivec4 indices, int time) {\n    return weights.x * GetBoneMatrix(table, indices.x, time) +\n           weights.y * GetBoneMatrix(table, indices.y, time) +\n           weights.z * GetBoneMatrix(table, indices.z, time) +\n           weights.w * GetBoneMatrix(table, indices.w, time);\n}\n\nvoid main() {\n   mat4 skinMat = uModelMatrix * adjustMatrix(uAnimationTable,\n                                              aBoneWeight,\n                                              ivec4(aBoneIndex),\n                                              int(uTime));\n   vec4 pos = skinMat * vec4(aPosition, 1.0);\n   // vPosition = pos.xyz;\n   // This is not quite accurate\n   //vNormal = normalize(mat3(skinMat) * aNormal);\n   gl_Position = uPerspectiveViewMatrix * pos;\n\n\n   vColor = vec3( sin(aPosition.x)/2.0+0.5,\n                      cos(aPosition.y)/2.0+0.5,\n                      sin(aPosition.z)/2.0+0.5);\n   //vTexUV = aTexUV;\n}\n\n"])
return t})
lazy($,"ln","$get$ln",function(){var t=new G.aM("AnimationV",null,[],[],[],[],0,P.I())
t.av(["vColor"])
t.bE(["void main() {\n  oFragColor.rgb = vColor;\n}\n"])
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
mangledGlobalNames:{p:"int",Q:"double",Y:"num",r:"String",aC:"bool",b_:"Null",c:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.t},{func:1,ret:P.aC,args:[W.a7,P.r,P.r,W.c2]},{func:1,v:true,args:[P.n],opt:[P.bV]},{func:1,v:true,args:[W.i]},{func:1,ret:P.p,args:[P.K,P.K]},{func:1,ret:P.r,args:[W.h]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationTimeline:J.a,AppBannerPromptResult:J.a,BarProp:J.a,Body:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CHROMIUMValuebuffer:J.a,CircularGeofencingRegion:J.a,Client:J.a,Clients:J.a,CompositorProxy:J.a,ConsoleBase:J.a,Coordinates:J.a,Credential:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMStringMap:J.a,EffectModel:J.a,Entry:J.a,FederatedCredential:J.a,FileEntry:J.a,FileError:J.a,Stream:J.a,DOMFileSystem:J.a,FontFace:J.a,FormData:J.a,GamepadButton:J.a,Geofencing:J.a,GeofencingRegion:J.a,Geolocation:J.a,Geoposition:J.a,Headers:J.a,HMDVRDevice:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageData:J.a,InjectedScriptHost:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,KeyframeEffect:J.a,MediaDeviceInfo:J.a,MediaDevices:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaMetadata:J.a,MediaSession:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigatorStorageUtils:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,OffscreenCanvas:J.a,PasswordCredential:J.a,PerformanceCompositeTiming:J.a,PerformanceEntry:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformanceRenderTiming:J.a,PerformanceResourceTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PositionError:J.a,PositionSensorVRDevice:J.a,Presentation:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,ReadableByteStream:J.a,ReadableByteStreamReader:J.a,ReadableStreamReader:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,Selection:J.a,ServicePort:J.a,SharedArrayBuffer:J.a,SourceInfo:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StorageInfo:J.a,StorageManager:J.a,StorageQuota:J.a,StyleMedia:J.a,StylePropertyMap:J.a,SyncManager:J.a,TextMetrics:J.a,TrackDefault:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRDevice:J.a,VREyeParameters:J.a,VRFieldOfView:J.a,VRPositionState:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkerConsole:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothAdvertisingData:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,NFC:J.a,PagePopupController:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WebKitCSSMatrix:J.a,Worklet:J.a,WorkletGlobalScope:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPreserveAspectRatio:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,CHROMIUMSubscribeUniform:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTDisjointTimerQuery:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bM,ArrayBufferView:H.bk,DataView:H.fm,Float32Array:H.di,Float64Array:H.fn,Int16Array:H.fo,Int32Array:H.fp,Int8Array:H.fq,Uint16Array:H.fr,Uint32Array:H.fs,Uint8ClampedArray:H.dm,CanvasPixelArray:H.dm,Uint8Array:H.ft,HTMLAudioElement:W.k,HTMLBRElement:W.k,HTMLBaseElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLImageElement:W.k,HTMLKeygenElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMediaElement:W.k,HTMLMenuElement:W.k,HTMLMenuItemElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTextAreaElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLVideoElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,HTMLAnchorElement:W.e_,HTMLAreaElement:W.e1,AudioTrack:W.a6,AudioTrackList:W.e4,Blob:W.cf,HTMLBodyElement:W.aS,HTMLCanvasElement:W.ci,CanvasRenderingContext2D:W.e7,CDATASection:W.aT,CharacterData:W.aT,Comment:W.aT,ProcessingInstruction:W.aT,Text:W.aT,CompositorWorker:W.ea,CSSCharsetRule:W.D,CSSFontFaceRule:W.D,CSSGroupingRule:W.D,CSSImportRule:W.D,CSSKeyframeRule:W.D,MozCSSKeyframeRule:W.D,WebKitCSSKeyframeRule:W.D,CSSKeyframesRule:W.D,MozCSSKeyframesRule:W.D,WebKitCSSKeyframesRule:W.D,CSSMediaRule:W.D,CSSNamespaceRule:W.D,CSSPageRule:W.D,CSSRule:W.D,CSSStyleRule:W.D,CSSSupportsRule:W.D,CSSViewportRule:W.D,CSSStyleDeclaration:W.bf,MSStyleCSSProperties:W.bf,CSS2Properties:W.bf,DataTransferItemList:W.ed,DeviceAcceleration:W.ee,HTMLDivElement:W.cm,XMLDocument:W.aV,Document:W.aV,DocumentFragment:W.cn,ShadowRoot:W.cn,DOMException:W.ef,DOMImplementation:W.co,DOMPoint:W.eg,DOMPointReadOnly:W.cp,DOMRectReadOnly:W.cq,DOMStringList:W.eh,DOMTokenList:W.ei,Element:W.a7,AnimationEvent:W.i,AnimationPlayerEvent:W.i,ApplicationCacheErrorEvent:W.i,AutocompleteErrorEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceLightEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,GamepadEvent:W.i,GeofencingEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RelatedEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCIceCandidateEvent:W.i,RTCPeerConnectionIceEvent:W.i,SecurityPolicyViolationEvent:W.i,ServicePortConnectEvent:W.i,ServiceWorkerMessageEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,Animation:W.h,ApplicationCache:W.h,DOMApplicationCache:W.h,OfflineResourceList:W.h,BatteryManager:W.h,CanvasCaptureMediaStreamTrack:W.h,CrossOriginServiceWorkerClient:W.h,EventSource:W.h,FileReader:W.h,FontFaceSet:W.h,MediaKeySession:W.h,MediaQueryList:W.h,MediaRecorder:W.h,MediaSource:W.h,MediaStream:W.h,MediaStreamTrack:W.h,MessagePort:W.h,MIDIAccess:W.h,NetworkInformation:W.h,Notification:W.h,Performance:W.h,PermissionStatus:W.h,PresentationAvailability:W.h,PresentationReceiver:W.h,PresentationRequest:W.h,RTCDTMFSender:W.h,RTCPeerConnection:W.h,webkitRTCPeerConnection:W.h,mozRTCPeerConnection:W.h,ScreenOrientation:W.h,ServicePortCollection:W.h,ServiceWorkerContainer:W.h,ServiceWorkerRegistration:W.h,SpeechRecognition:W.h,SpeechSynthesis:W.h,SpeechSynthesisUtterance:W.h,WorkerPerformance:W.h,BluetoothDevice:W.h,BluetoothRemoteGATTCharacteristic:W.h,USB:W.h,IDBDatabase:W.h,IDBOpenDBRequest:W.h,IDBVersionChangeRequest:W.h,IDBRequest:W.h,IDBTransaction:W.h,AnalyserNode:W.h,RealtimeAnalyserNode:W.h,AudioBufferSourceNode:W.h,AudioContext:W.h,webkitAudioContext:W.h,AudioDestinationNode:W.h,AudioNode:W.h,AudioSourceNode:W.h,BiquadFilterNode:W.h,ChannelMergerNode:W.h,AudioChannelMerger:W.h,ChannelSplitterNode:W.h,AudioChannelSplitter:W.h,ConvolverNode:W.h,DelayNode:W.h,DynamicsCompressorNode:W.h,GainNode:W.h,AudioGainNode:W.h,IIRFilterNode:W.h,MediaElementAudioSourceNode:W.h,MediaStreamAudioDestinationNode:W.h,MediaStreamAudioSourceNode:W.h,OfflineAudioContext:W.h,OscillatorNode:W.h,Oscillator:W.h,PannerNode:W.h,AudioPannerNode:W.h,webkitAudioPannerNode:W.h,ScriptProcessorNode:W.h,JavaScriptAudioNode:W.h,StereoPannerNode:W.h,WaveShaperNode:W.h,EventTarget:W.h,File:W.a8,FileList:W.eI,FileWriter:W.eJ,HTMLFormElement:W.eO,Gamepad:W.a9,HTMLHeadElement:W.cu,History:W.eU,HTMLCollection:W.bG,HTMLFormControlsCollection:W.bG,HTMLOptionsCollection:W.bG,HTMLDocument:W.cv,XMLHttpRequest:W.cw,XMLHttpRequestUpload:W.bH,XMLHttpRequestEventTarget:W.bH,HTMLInputElement:W.bI,KeyboardEvent:W.aZ,Location:W.fc,MediaList:W.fi,MIDIOutput:W.fj,MIDIInput:W.bL,MIDIPort:W.bL,MimeType:W.aa,MimeTypeArray:W.fk,PointerEvent:W.S,MouseEvent:W.S,DragEvent:W.S,Navigator:W.fu,Attr:W.t,Node:W.t,NodeIterator:W.dn,NodeList:W.bR,RadioNodeList:W.bR,Path2D:W.fD,Perspective:W.fG,Plugin:W.ab,PluginArray:W.fI,PositionValue:W.fL,PresentationConnection:W.fM,Range:W.dt,Rotation:W.fW,RTCDataChannel:W.dw,DataChannel:W.dw,HTMLSelectElement:W.fY,SharedWorker:W.h0,SourceBuffer:W.ac,SourceBufferList:W.h2,SpeechGrammar:W.ad,SpeechGrammarList:W.h4,SpeechRecognitionResult:W.ae,Storage:W.h9,CSSStyleSheet:W.a0,StyleSheet:W.a0,CalcLength:W.am,KeywordValue:W.am,LengthValue:W.am,NumberValue:W.am,SimpleLength:W.am,TransformValue:W.am,StyleValue:W.am,HTMLTableElement:W.dz,HTMLTableRowElement:W.hh,HTMLTableSectionElement:W.hi,HTMLTemplateElement:W.bX,TextTrack:W.af,TextTrackCue:W.a1,VTTCue:W.a1,TextTrackCueList:W.hl,TextTrackList:W.hm,TimeRanges:W.ho,Touch:W.ag,TouchEvent:W.b2,TouchList:W.hs,TrackDefaultList:W.ht,Matrix:W.bp,Skew:W.bp,TransformComponent:W.bp,Translation:W.hv,TreeWalker:W.dD,CompositionEvent:W.aO,FocusEvent:W.aO,TextEvent:W.aO,SVGZoomEvent:W.aO,UIEvent:W.aO,URL:W.hB,VideoTrackList:W.hD,VTTRegionList:W.hG,WebSocket:W.hH,WheelEvent:W.b4,Window:W.c0,DOMWindow:W.c0,Worker:W.hK,CompositorWorkerGlobalScope:W.b5,DedicatedWorkerGlobalScope:W.b5,ServiceWorkerGlobalScope:W.b5,SharedWorkerGlobalScope:W.b5,WorkerGlobalScope:W.b5,ClientRect:W.hV,ClientRectList:W.dI,DOMRectList:W.dI,CSSRuleList:W.hX,DocumentType:W.hZ,DOMRect:W.i_,GamepadList:W.il,HTMLFrameSetElement:W.im,NamedNodeMap:W.dM,MozNamedAttrMap:W.dM,ServiceWorker:W.iG,SpeechRecognitionResultList:W.iJ,StyleSheetList:W.iK,WorkerLocation:W.iR,WorkerNavigator:W.iS,SVGAElement:P.dZ,SVGAnimateElement:P.aR,SVGAnimateMotionElement:P.aR,SVGAnimateTransformElement:P.aR,SVGAnimationElement:P.aR,SVGSetElement:P.aR,SVGFEBlendElement:P.eo,SVGFEColorMatrixElement:P.ep,SVGFEComponentTransferElement:P.eq,SVGFECompositeElement:P.er,SVGFEConvolveMatrixElement:P.es,SVGFEDiffuseLightingElement:P.et,SVGFEDisplacementMapElement:P.eu,SVGFEFloodElement:P.ev,SVGFEGaussianBlurElement:P.ew,SVGFEImageElement:P.ex,SVGFEMergeElement:P.ey,SVGFEMorphologyElement:P.ez,SVGFEOffsetElement:P.eA,SVGFEPointLightElement:P.eB,SVGFESpecularLightingElement:P.eC,SVGFESpotLightElement:P.eD,SVGFETileElement:P.eE,SVGFETurbulenceElement:P.eF,SVGFilterElement:P.eK,SVGForeignObjectElement:P.eN,SVGCircleElement:P.ai,SVGEllipseElement:P.ai,SVGLineElement:P.ai,SVGPathElement:P.ai,SVGPolygonElement:P.ai,SVGPolylineElement:P.ai,SVGGeometryElement:P.ai,SVGClipPathElement:P.aJ,SVGDefsElement:P.aJ,SVGGElement:P.aJ,SVGSwitchElement:P.aJ,SVGGraphicsElement:P.aJ,SVGImageElement:P.eV,SVGLength:P.au,SVGLengthList:P.f6,SVGMarkerElement:P.ff,SVGMaskElement:P.fg,SVGNumber:P.aw,SVGNumberList:P.fx,SVGPatternElement:P.fE,SVGPoint:P.fJ,SVGPointList:P.fK,SVGRect:P.fP,SVGRectElement:P.fQ,SVGScriptElement:P.bU,SVGStringList:P.he,SVGDescElement:P.J,SVGDiscardElement:P.J,SVGFEDistantLightElement:P.J,SVGFEFuncAElement:P.J,SVGFEFuncBElement:P.J,SVGFEFuncGElement:P.J,SVGFEFuncRElement:P.J,SVGFEMergeNodeElement:P.J,SVGMetadataElement:P.J,SVGStopElement:P.J,SVGStyleElement:P.J,SVGTitleElement:P.J,SVGComponentTransferFunctionElement:P.J,SVGElement:P.J,SVGSVGElement:P.hf,SVGSymbolElement:P.hg,SVGTextContentElement:P.dA,SVGTextPathElement:P.hk,SVGTSpanElement:P.bY,SVGTextElement:P.bY,SVGTextPositioningElement:P.bY,SVGTransform:P.ax,SVGTransformList:P.hu,SVGUseElement:P.hC,SVGViewElement:P.hE,SVGViewSpec:P.hF,SVGLinearGradientElement:P.c1,SVGRadialGradientElement:P.c1,SVGGradientElement:P.c1,SVGCursorElement:P.iC,SVGFEDropShadowElement:P.iD,SVGMPathElement:P.iE,AudioBuffer:P.e3,WebGLRenderingContext:P.fU,WebGL2RenderingContext:P.fV,WebGL2RenderingContextBase:P.iQ,SQLResultSetRowList:P.h5})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,Credential:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMStringMap:true,EffectModel:true,Entry:true,FederatedCredential:true,FileEntry:true,FileError:true,Stream:true,DOMFileSystem:true,FontFace:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageData:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PasswordCredential:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,ServicePort:true,SharedArrayBuffer:true,SourceInfo:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,TrackDefault:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPreserveAspectRatio:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,AudioTrack:true,AudioTrackList:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,CSSCharsetRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DocumentFragment:true,ShadowRoot:true,DOMException:true,DOMImplementation:true,DOMPoint:true,DOMPointReadOnly:false,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AudioDestinationNode:true,AudioNode:true,AudioSourceNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OfflineAudioContext:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Navigator:true,Attr:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Path2D:true,Perspective:true,Plugin:true,PluginArray:true,PositionValue:true,PresentationConnection:true,Range:true,Rotation:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,SharedWorker:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,CalcLength:true,KeywordValue:true,LengthValue:true,NumberValue:true,SimpleLength:true,TransformValue:true,StyleValue:false,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,Matrix:true,Skew:true,TransformComponent:false,Translation:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,SVGZoomEvent:true,UIEvent:false,URL:true,VideoTrackList:true,VTTRegionList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.dj.$nativeSuperclassTag="ArrayBufferView"
H.bO.$nativeSuperclassTag="ArrayBufferView"
H.bP.$nativeSuperclassTag="ArrayBufferView"
H.dk.$nativeSuperclassTag="ArrayBufferView"
H.bN.$nativeSuperclassTag="ArrayBufferView"
H.bQ.$nativeSuperclassTag="ArrayBufferView"
H.dl.$nativeSuperclassTag="ArrayBufferView"
W.bC.$nativeSuperclassTag="EventTarget"
W.bF.$nativeSuperclassTag="EventTarget"
W.bB.$nativeSuperclassTag="EventTarget"
W.bE.$nativeSuperclassTag="EventTarget"
W.bA.$nativeSuperclassTag="EventTarget"
W.bD.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.lG(B.lm(),b)},[])
else (function(b){H.lG(B.lm(),b)})([])})})()