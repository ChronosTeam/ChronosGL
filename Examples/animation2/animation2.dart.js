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
jP:function(a,b,c,d){if(!!J.v(a).$isd)return new H.el(a,b,[c,d])
return new H.dg(a,b,[c,d])},
eZ:function(){return new P.al("No element")},
n1:function(){return new P.al("Too many elements")},
n0:function(){return new P.al("Too few elements")},
dw:function(a,b,c,d){if(c-b<=32)H.ng(a,b,c,d)
else H.nf(a,b,c,d)},
ng:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.A(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.ap(d.$2(s.h(a,q-1),r),0)))break
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
t=J.A(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.ap(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.ap(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.ap(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.ap(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.ap(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.ap(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.ap(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.ap(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.ap(a5.$2(j,i),0)){h=i
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
H.dw(a2,a3,g-2,a5)
H.dw(a2,f+2,a4,a5)
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
break}}H.dw(a2,g,f,a5)}else H.dw(a2,g,f,a5)},
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
el:function el(a,b,c){this.a=a
this.b=b
this.$ti=c},
fc:function fc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bK:function bK(a,b,c){this.a=a
this.b=b
this.$ti=c},
dE:function dE(a,b,c){this.a=a
this.b=b
this.$ti=c},
hH:function hH(a,b,c){this.a=a
this.b=b
this.$ti=c},
cs:function cs(){},
dO:function(a,b){var t=a.am(b)
if(!u.globalState.d.cy)u.globalState.f.ar()
return t},
jg:function(){--u.globalState.f.b
H.b(u.globalState.f.b>=0)},
lG:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.v(s).$isc)throw H.e(P.jC("Arguments to main must be a List: "+H.f(s)))
u.globalState=new H.iu(0,0,1,null,null,null,null,null,null,null,null,null,a)
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
s.f=new H.i0(P.jO(null,H.b8),0)
r=P.q
s.sfc(new H.aj(0,null,null,null,null,null,0,[r,H.b7]))
s.sfg(new H.aj(0,null,null,null,null,null,0,[r,null]))
if(s.x){q=new H.it()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.mW,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.nv)}if(u.globalState.x)return
s=u.globalState.a++
q=P.ak(null,null,null,r)
p=new H.bn(0,null,!1)
o=new H.b7(s,new H.aj(0,null,null,null,null,null,0,[r,H.bn]),q,u.createNewIsolate(),p,new H.as(H.jm()),new H.as(H.jm()),!1,!1,[],P.ak(null,null,null,null),null,null,!1,!0,P.ak(null,null,null,null))
q.j(0,0)
o.bM(0,p)
u.globalState.e=o
u.globalState.z.i(0,s,o)
u.globalState.d=o
if(H.bv(a,{func:1,args:[,]}))o.am(new H.js(t,a))
else if(H.bv(a,{func:1,args:[,,]}))o.am(new H.jt(t,a))
else o.am(a)
u.globalState.f.ar()},
nv:function(a){var t=P.aJ(["command","print","msg",a])
return new H.an(!0,P.c4(null,P.q)).L(t)},
mY:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.mZ()
return},
mZ:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.e(new P.w("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.e(new P.w('Cannot extract URI from "'+t+'"'))},
mW:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.b6(!0,[]).X(b.data)
s=J.A(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.o0(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.b6(!0,[]).X(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.b6(!0,[]).X(s.h(t,"replyTo"))
s=u.globalState.a++
k=P.q
j=P.ak(null,null,null,k)
i=new H.bn(0,null,!1)
h=new H.b7(s,new H.aj(0,null,null,null,null,null,0,[k,H.bn]),j,u.createNewIsolate(),i,new H.as(H.jm()),new H.as(H.jm()),!1,!1,[],P.ak(null,null,null,null),null,null,!1,!0,P.ak(null,null,null,null))
j.j(0,0)
h.bM(0,i)
u.globalState.f.a.U(0,new H.b8(h,new H.eW(q,p,o,n,m,l),"worker-start"))
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
k=P.aJ(["command","print","msg",t])
k=new H.an(!0,P.c4(null,P.q)).L(k)
s.toString
self.postMessage(k)}else P.O(s.h(t,"msg"))
break
case"error":throw H.e(s.h(t,"msg"))}},
mV:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aJ(["command","log","msg",a])
r=new H.an(!0,P.c4(null,P.q)).L(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.R(q)
t=H.aC(q)
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
r=new H.eX(a,b,c,d,t)
if(e){t.c5(q,q)
u.globalState.f.a.U(0,new H.b8(t,r,"start isolate"))}else r.$0()},
nh:function(a,b){var t=new H.ho(!0,!1,null)
t.dJ(a,b)
return t},
nw:function(a){return new H.b6(!0,[]).X(new H.an(!1,P.c4(null,P.q)).L(a))},
js:function js(a,b){this.a=a
this.b=b},
jt:function jt(a,b){this.a=a
this.b=b},
iu:function iu(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
io:function io(a,b){this.a=a
this.b=b},
i0:function i0(a,b){this.a=a
this.b=b},
i1:function i1(a){this.a=a},
b8:function b8(a,b,c){this.a=a
this.b=b
this.c=c},
it:function it(){},
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
hT:function hT(){},
br:function br(a,b){this.b=a
this.a=b},
iv:function iv(a,b){this.a=a
this.b=b},
c6:function c6(a,b,c){this.b=a
this.c=b
this.a=c},
bn:function bn(a,b,c){this.a=a
this.b=b
this.c=c},
ho:function ho(a,b,c){this.a=a
this.b=b
this.c=c},
hp:function hp(a,b){this.a=a
this.b=b},
hq:function hq(a,b){this.a=a
this.b=b},
as:function as(a){this.a=a},
an:function an(a,b){this.a=a
this.b=b},
b6:function b6(a,b){this.a=a
this.b=b},
nU:function(a){return u.types[a]},
o2:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.v(a).$isr},
f:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.ar(a)
if(typeof t!=="string")throw H.e(H.M(a))
return t},
ne:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.fQ(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
b0:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
ds:function(a){var t,s,r,q,p,o,n,m
t=J.v(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.C||!!J.v(a).$isb3){p=C.t(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.e.aL(q,0)===36)q=C.e.dh(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.dQ(H.j4(a),0,null),u.mangledGlobalNames)},
fM:function(a){return"Instance of '"+H.ds(a)+"'"},
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
if(b<0||C.b.cY(b,t))return P.F(b,a,"index",null,t)
return P.fN(b,"index",null)},
M:function(a){return new P.ah(!0,a,null,null)},
e:function(a){var t
if(a==null)a=new P.bm()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.lH})
t.name=""}else t.toString=H.lH
return t},
lH:function(){return J.ar(this.dartException)},
H:function(a){throw H.e(a)},
C:function(a){throw H.e(new P.Z(a))},
ax:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.hv(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
hw:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
l3:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
jL:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.f2(a,s,t?null:b.receiver)},
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
if(p)return t.$1(new H.dr(s,f==null?null:f.method))}}return t.$1(new H.hz(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.dx()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.ah(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.dx()
return a},
aC:function(a){var t
if(a==null)return new H.dM(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dM(a,null)},
o6:function(a){if(a==null||typeof a!='object')return J.aq(a)
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
o1:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dO(b,new H.jb(a))
case 1:return H.dO(b,new H.jc(a,d))
case 2:return H.dO(b,new H.jd(a,d,e))
case 3:return H.dO(b,new H.je(a,d,e,f))
case 4:return H.dO(b,new H.jf(a,d,e,f,g))}throw H.e(P.cr("Unsupported number of arguments for wrapped closure"))},
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
if(!!J.v(c).$isc){t.$reflectionInfo=c
r=H.ne(t).r}else r=c
q=d?Object.create(new H.h5().constructor.prototype):Object.create(new H.by(null,null,null,null).constructor.prototype)
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
switch(b?-1:a){case 0:throw H.e(new H.fW("Intercepted function with no arguments."))
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
if(!!J.v(c).$isc){c.fixed$length=Array
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
throw H.e(H.ay(a,"String"))},
a4:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.ay(a,"double"))},
or:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.ay(a,"num"))},
nL:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.ay(a,"bool"))},
o0:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.ay(a,"int"))},
o8:function(a,b){throw H.e(H.ay(a,b.substring(3)))},
o7:function(a,b){var t=J.A(b)
throw H.e(H.kt(H.ds(a),t.bv(b,3,t.gk(b))))},
k3:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.v(a)[b])return a
H.o8(a,b)},
aE:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.v(a)[b]
else t=!0
if(t)return a
H.o7(a,b)},
oq:function(a){if(a==null)return a
if(!!J.v(a).$isc)return a
throw H.e(H.ay(a,"List"))},
lv:function(a){var t=J.v(a)
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
s=H.ay(a,t)
throw H.e(s)}finally{$.jX=!1}},
ay:function(a,b){return new H.hx("type '"+H.ds(a)+"' is not a subtype of type '"+b+"'")},
kt:function(a,b){return new H.e7("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
aA:function(a){if(!0===a)return!1
if(!!J.v(a).$isjH)a=a.$0()
if(typeof a==="boolean")return!a
throw H.e(H.ay(a,"bool"))},
aO:function(a){throw H.e(new H.hN(a))},
b:function(a){if(H.aA(a))throw H.e(new P.ce(null))},
od:function(a){throw H.e(new P.eb(a))},
jm:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
ly:function(a){return u.getIsolateTag(a)},
N:function(a){return new H.aM(a,null)},
x:function(a,b){H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
j4:function(a){if(a==null)return
return a.$ti},
lz:function(a,b){return H.k7(a["$as"+H.f(b)],H.j4(a))},
ao:function(a,b,c){var t,s
t=H.lz(a,b)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
aD:function(a,b){var t,s
t=H.j4(a)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
aP:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.b(!0)
H.b(!0)
return a[0].name+H.dQ(a,1,b)}if(typeof a=="function")return a.name
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
dQ:function(a,b,c){var t,s,r,q,p,o
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
j5:function(a){var t,s
if(a instanceof H.be){t=H.lv(a)
if(t!=null)return H.aP(t,null)}s=J.v(a).constructor.name
if(a==null)return s
return s+H.dQ(a.$ti,0,null)},
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
t=H.j4(a)
s=J.v(a)
if(s[b]==null)return!1
return H.lq(H.k7(s[d],t),c)},
dR:function(a,b,c,d){if(a==null)return a
if(H.ca(a,b,c,d))return a
throw H.e(H.kt(H.ds(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dQ(c,0,null),u.mangledGlobalNames)))},
ol:function(a,b,c,d){if(a==null)return a
if(H.ca(a,b,c,d))return a
throw H.e(H.ay(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dQ(c,0,null),u.mangledGlobalNames)))},
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
if('func' in a)return b.name==="jH"||b.name==="o"
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
H.b(!(a instanceof P.o))
t=$.k1.$1(a)
s=$.j2[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.ja[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.ll.$2(a,t)
if(t!=null){s=$.j2[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.ja[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.k5(r)
$.j2[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.ja[t]=r
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
k5:function(a){return J.jl(a,!1,null,!!a.$isr)},
o5:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.jl(t,!1,null,!!t.$isr)
else return J.jl(t,c,null,null)},
nZ:function(){if(!0===$.k2)return
$.k2=!0
H.o_()},
o_:function(){var t,s,r,q,p,o,n,m
$.j2=Object.create(null)
$.ja=Object.create(null)
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
t=C.G()
t=H.bu(C.D,H.bu(C.I,H.bu(C.r,H.bu(C.r,H.bu(C.H,H.bu(C.E,H.bu(C.F(C.t),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.k1=new H.j7(p)
$.ll=new H.j8(o)
$.lD=new H.j9(n)},
bu:function(a,b){return a(b)||b},
oc:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
fQ:function fQ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
hv:function hv(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dr:function dr(a,b){this.a=a
this.b=b},
f2:function f2(a,b,c){this.a=a
this.b=b
this.c=c},
hz:function hz(a){this.a=a},
ju:function ju(a){this.a=a},
dM:function dM(a,b){this.a=a
this.b=b},
jb:function jb(a){this.a=a},
jc:function jc(a,b){this.a=a
this.b=b},
jd:function jd(a,b,c){this.a=a
this.b=b
this.c=c},
je:function je(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jf:function jf(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
be:function be(){},
hi:function hi(){},
h5:function h5(){},
by:function by(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hx:function hx(a){this.a=a},
e7:function e7(a){this.a=a},
fW:function fW(a){this.a=a},
hN:function hN(a){this.a=a},
aM:function aM(a,b){this.a=a
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
f1:function f1(a){this.a=a},
f6:function f6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
f7:function f7(a,b){this.a=a
this.$ti=b},
f8:function f8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
j7:function j7(a){this.a=a},
j8:function j8(a){this.a=a},
j9:function j9(a){this.a=a},
m:function(a){return a},
iU:function(a){var t,s,r
if(!!J.v(a).$isp)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
bM:function bM(){},
bk:function bk(){},
fl:function fl(){},
dj:function dj(){},
dk:function dk(){},
dl:function dl(){},
di:function di(){},
fm:function fm(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(){},
fr:function fr(){},
dm:function dm(){},
fs:function fs(){},
bN:function bN(){},
bO:function bO(){},
bP:function bP(){},
bQ:function bQ(){},
nR:function(a){var t=H.x(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
bw:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
v:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dd.prototype
return J.dc.prototype}if(typeof a=="string")return J.aX.prototype
if(a==null)return J.f0.prototype
if(typeof a=="boolean")return J.f_.prototype
if(a.constructor==Array)return J.aW.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aY.prototype
return a}if(a instanceof P.o)return a
return J.j3(a)},
jl:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
j3:function(a){var t,s,r,q,p
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
if(typeof a=="function")return C.J
s=Object.getPrototypeOf(a)
if(s==null)return C.w
if(s===Object.prototype)return C.w
if(typeof q=="function"){Object.defineProperty(q,$.$get$jK(),{value:C.n,enumerable:false,writable:true,configurable:true})
return C.n}return C.n},
A:function(a){if(typeof a=="string")return J.aX.prototype
if(a==null)return a
if(a.constructor==Array)return J.aW.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aY.prototype
return a}if(a instanceof P.o)return a
return J.j3(a)},
bb:function(a){if(a==null)return a
if(a.constructor==Array)return J.aW.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aY.prototype
return a}if(a instanceof P.o)return a
return J.j3(a)},
k0:function(a){if(typeof a=="number")return J.bi.prototype
if(a==null)return a
if(!(a instanceof P.o))return J.b3.prototype
return a},
nT:function(a){if(typeof a=="number")return J.bi.prototype
if(typeof a=="string")return J.aX.prototype
if(a==null)return a
if(!(a instanceof P.o))return J.b3.prototype
return a},
lx:function(a){if(typeof a=="string")return J.aX.prototype
if(a==null)return a
if(!(a instanceof P.o))return J.b3.prototype
return a},
k:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aY.prototype
return a}if(a instanceof P.o)return a
return J.j3(a)},
G:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.v(a).w(a,b)},
ap:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.k0(a).ab(a,b)},
lI:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.k0(a).ac(a,b)},
aF:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.o2(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.A(a).h(a,b)},
lJ:function(a,b,c){return J.bb(a).i(a,b,c)},
lK:function(a,b,c,d){return J.k(a).dT(a,b,c,d)},
k8:function(a,b){return J.lx(a).aL(a,b)},
lL:function(a,b){return J.k(a).e4(a,b)},
lM:function(a,b,c,d){return J.k(a).e6(a,b,c,d)},
bx:function(a,b){return J.k(a).ef(a,b)},
lN:function(a,b,c){return J.k(a).eg(a,b,c)},
k9:function(a,b){return J.k(a).c4(a,b)},
jv:function(a,b){return J.k(a).P(a,b)},
ka:function(a,b,c){return J.k(a).c7(a,b,c)},
lO:function(a,b){return J.k(a).eA(a,b)},
dS:function(a,b,c){return J.k(a).c8(a,b,c)},
lP:function(a,b,c){return J.k(a).c9(a,b,c)},
dT:function(a,b,c){return J.k(a).ca(a,b,c)},
dU:function(a,b){return J.k(a).eD(a,b)},
lQ:function(a,b){return J.k(a).cb(a,b)},
lR:function(a,b,c){return J.k(a).cc(a,b,c)},
kb:function(a,b,c,d){return J.k(a).cd(a,b,c,d)},
lS:function(a,b){return J.bb(a).ce(a,b)},
lT:function(a,b,c,d,e){return J.k(a).cf(a,b,c,d,e)},
lU:function(a,b){return J.nT(a).R(a,b)},
jw:function(a,b,c){return J.A(a).eI(a,b,c)},
dV:function(a){return J.k(a).ci(a)},
lV:function(a){return J.k(a).cj(a)},
lW:function(a){return J.k(a).cl(a)},
kc:function(a){return J.k(a).eN(a)},
lX:function(a,b){return J.k(a).cn(a,b)},
jx:function(a,b){return J.k(a).co(a,b)},
lY:function(a,b){return J.k(a).eX(a,b)},
lZ:function(a,b,c,d){return J.k(a).cp(a,b,c,d)},
m_:function(a,b,c,d,e){return J.k(a).eY(a,b,c,d,e)},
m0:function(a,b,c,d,e){return J.k(a).cq(a,b,c,d,e)},
m1:function(a,b,c,d,e,f){return J.k(a).eZ(a,b,c,d,e,f)},
m2:function(a,b){return J.bb(a).t(a,b)},
dW:function(a,b){return J.k(a).cr(a,b)},
m3:function(a,b){return J.k(a).cs(a,b)},
m4:function(a){return J.k(a).f_(a)},
m5:function(a,b){return J.bb(a).a7(a,b)},
m6:function(a){return J.k(a).gez(a)},
aq:function(a){return J.v(a).gu(a)},
bc:function(a){return J.bb(a).gv(a)},
aQ:function(a){return J.A(a).gk(a)},
m7:function(a){return J.k(a).gcA(a)},
m8:function(a){return J.k(a).gb9(a)},
m9:function(a){return J.v(a).gC(a)},
ma:function(a){return J.k(a).gft(a)},
mb:function(a){return J.k(a).gat(a)},
jy:function(a){return J.k(a).gm(a)},
jz:function(a){return J.k(a).gn(a)},
kd:function(a){return J.k(a).gK(a)},
jA:function(a,b){return J.k(a).aa(a,b)},
mc:function(a){return J.k(a).aG(a)},
md:function(a){return J.k(a).bh(a)},
me:function(a,b){return J.k(a).bi(a,b)},
mf:function(a,b,c){return J.k(a).bj(a,b,c)},
ke:function(a,b,c){return J.k(a).bn(a,b,c)},
mg:function(a,b){return J.k(a).cv(a,b)},
mh:function(a,b){return J.bb(a).cz(a,b)},
mi:function(a){return J.bb(a).fm(a)},
mj:function(a,b){return J.k(a).I(a,b)},
mk:function(a,b,c){return J.k(a).da(a,b,c)},
ml:function(a,b,c,d){return J.k(a).bu(a,b,c,d)},
mm:function(a,b,c,d,e,f,g,h,i,j){return J.k(a).cF(a,b,c,d,e,f,g,h,i,j)},
mn:function(a,b,c,d){return J.k(a).cG(a,b,c,d)},
dX:function(a,b,c,d){return J.k(a).cH(a,b,c,d)},
P:function(a){return J.k0(a).fu(a)},
mo:function(a){return J.lx(a).fz(a)},
ar:function(a){return J.v(a).l(a)},
mp:function(a,b,c,d){return J.k(a).fB(a,b,c,d)},
mq:function(a,b,c){return J.k(a).cI(a,b,c)},
mr:function(a,b,c){return J.k(a).cJ(a,b,c)},
jB:function(a,b,c){return J.k(a).cK(a,b,c)},
ms:function(a,b,c){return J.k(a).cL(a,b,c)},
kf:function(a,b,c){return J.k(a).cM(a,b,c)},
kg:function(a,b,c){return J.k(a).cN(a,b,c)},
kh:function(a,b,c){return J.k(a).cO(a,b,c)},
ki:function(a,b,c,d){return J.k(a).cP(a,b,c,d)},
kj:function(a,b,c,d){return J.k(a).cQ(a,b,c,d)},
mt:function(a,b){return J.k(a).cS(a,b)},
mu:function(a,b,c){return J.k(a).fC(a,b,c)},
kk:function(a,b,c,d,e,f,g){return J.k(a).cU(a,b,c,d,e,f,g)},
mv:function(a,b,c,d,e){return J.k(a).cV(a,b,c,d,e)},
a:function a(){},
f_:function f_(){},
f0:function f0(){},
bJ:function bJ(){},
fG:function fG(){},
b3:function b3(){},
aY:function aY(){},
aW:function aW(a){this.$ti=a},
jI:function jI(a){this.$ti=a},
e1:function e1(a,b,c,d,e){var _=this
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
new self.MutationObserver(H.ba(new P.hP(t),1)).observe(s,{childList:true})
return new P.hO(t,s,r)}else if(self.setImmediate!=null)return P.nJ()
return P.nK()},
nl:function(a){++u.globalState.f.b
self.scheduleImmediate(H.ba(new P.hQ(a),0))},
nm:function(a){++u.globalState.f.b
self.setImmediate(H.ba(new P.hR(a),0))},
nn:function(a){P.jS(C.p,a)},
nD:function(a,b){if(H.bv(a,{func:1,args:[P.b_,P.b_]})){b.toString
return a}else{b.toString
return a}},
mP:function(a,b,c){var t
if(a==null)a=new P.bm()
t=$.z
if(t!==C.d)t.toString
t=new P.T(0,t,null,[c])
t.bO(a,b)
return t},
mQ:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.T(0,$.z,null,[P.c])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.eR(t,!1,b,s)
try{for(m=0,l=0;m<1;++m){q=a[m]
p=l
q.bd(new P.eQ(t,!1,b,s,p),r)
l=++t.b}if(l===0){l=new P.T(0,$.z,null,[null])
l.bN(C.u)
return l}k=new Array(l)
k.fixed$length=Array
t.a=k}catch(j){o=H.R(j)
n=H.aC(j)
if(t.b===0||!1)return P.mP(o,n,null)
else{t.c=o
t.d=n}}return s},
lc:function(a,b){var t,s,r
H.b(b.a<4)
H.b(!(a instanceof P.T))
H.b(b.a===0)
b.a=1
try{a.bd(new P.ia(b),new P.ib(b))}catch(r){t=H.R(r)
s=H.aC(r)
P.o9(new P.ic(b,t,s))}},
i9:function(a,b){var t,s,r,q
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
P.iV(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
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
P.iV(null,null,p,o,s)
return}s=$.z
if(s==null?l!=null:s!==l){H.b(l!=null)
s=$.z
H.b(l==null?s!=null:l!==s)
j=$.z
$.z=l
i=j}else i=null
s=b.c
if(s===8)new P.ii(t,r,q,b).$0()
else if(p){if((s&1)!==0)new P.ih(r,b,m).$0()}else if((s&2)!==0)new P.ig(t,r,b).$0()
if(i!=null){H.b(!0)
$.z=i}s=r.b
if(!!J.v(s).$isbh){if(s.a>=4){H.b(o.a<4)
h=o.c
o.c=null
b=o.ak(h)
H.b(o.a<4)
H.b(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.i9(s,o)
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
lj:function(a){var t=new P.dF(a,null)
if($.bs==null){$.c7=t
$.bs=t
if(!$.jY)$.$get$jV().$1(P.lr())}else{$.c7.b=t
$.c7=t}},
nF:function(a){var t,s,r
t=$.bs
if(t==null){P.lj(a)
$.c8=$.c7
return}s=new P.dF(a,null)
r=$.c8
if(r==null){s.b=t
$.c8=s
$.bs=s}else{s.b=r.b
r.b=s
$.c8=s
if(s.b==null)$.c7=s}},
o9:function(a){var t=$.z
if(C.d===t){P.bt(null,null,C.d,a)
return}t.toString
P.bt(null,null,t,t.b0(a))},
ni:function(a,b){var t=$.z
if(t===C.d){t.toString
return P.jS(a,b)}return P.jS(a,t.b0(b))},
jS:function(a,b){var t=C.b.G(a.a,1000)
return H.nh(t<0?0:t,b)},
jU:function(a){var t,s
H.b(a!=null)
t=$.z
H.b(a==null?t!=null:a!==t)
s=$.z
$.z=a
return s},
iV:function(a,b,c,d,e){var t={}
t.a=d
P.nF(new P.iW(t,e))},
lh:function(a,b,c,d){var t,s
if($.z===c)return d.$0()
t=P.jU(c)
try{s=d.$0()
return s}finally{s=t
H.b(s!=null)
$.z=s}},
li:function(a,b,c,d,e){var t,s
if($.z===c)return d.$1(e)
t=P.jU(c)
try{s=d.$1(e)
return s}finally{s=t
H.b(s!=null)
$.z=s}},
nE:function(a,b,c,d,e,f){var t,s
if($.z===c)return d.$2(e,f)
t=P.jU(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.b(s!=null)
$.z=s}},
bt:function(a,b,c,d){var t=C.d!==c
if(t)d=!(!t||!1)?c.b0(d):c.eB(d)
P.lj(d)},
hP:function hP(a){this.a=a},
hO:function hO(a,b,c){this.a=a
this.b=b
this.c=c},
hQ:function hQ(a){this.a=a},
hR:function hR(a){this.a=a},
eR:function eR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eQ:function eQ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hV:function hV(){},
dG:function dG(a,b){this.a=a
this.$ti=b},
iL:function iL(a,b){this.a=a
this.$ti=b},
dJ:function dJ(a,b,c,d,e,f){var _=this
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
i6:function i6(a,b){this.a=a
this.b=b},
ie:function ie(a,b){this.a=a
this.b=b},
ia:function ia(a){this.a=a},
ib:function ib(a){this.a=a},
ic:function ic(a,b,c){this.a=a
this.b=b
this.c=c},
i8:function i8(a,b){this.a=a
this.b=b},
id:function id(a,b){this.a=a
this.b=b},
i7:function i7(a,b,c){this.a=a
this.b=b
this.c=c},
ii:function ii(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ij:function ij(a){this.a=a},
ih:function ih(a,b,c){this.a=a
this.b=b
this.c=c},
ig:function ig(a,b,c){this.a=a
this.b=b
this.c=c},
dF:function dF(a,b){this.a=a
this.b=b},
h9:function h9(){},
hb:function hb(a){this.a=a},
hc:function hc(a,b){this.a=a
this.b=b},
ha:function ha(){},
bd:function bd(a,b){this.a=a
this.b=b},
iS:function iS(){},
iW:function iW(a,b){this.a=a
this.b=b},
ix:function ix(){},
iz:function iz(a,b){this.a=a
this.b=b},
iy:function iy(a,b){this.a=a
this.b=b},
iA:function iA(a,b){this.a=a
this.b=b},
jM:function(a,b){return new H.aj(0,null,null,null,null,null,0,[a,b])},
I:function(){return new H.aj(0,null,null,null,null,null,0,[null,null])},
aJ:function(a){return H.nS(a,new H.aj(0,null,null,null,null,null,0,[null,null]))},
c4:function(a,b){return new P.dK(0,null,null,null,null,null,0,[a,b])},
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
eY:function(a,b,c){var t,s,r
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
ak:function(a,b,c,d){return new P.iq(0,null,null,null,null,null,0,[d])},
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
a.a7(0,new P.fd(t,s))
t=s
t.a=t.ga5()+"}"}finally{t=$.$get$c9()
H.b(C.a.gaE(t)===a)
t.pop()}t=s.ga5()
return t.charCodeAt(0)==0?t:t},
jO:function(a,b){var t=new P.f9(null,0,0,0,[b])
t.dD(a,b)
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
iq:function iq(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
ir:function ir(a,b,c){this.a=a
this.b=b
this.c=c},
c3:function c3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
im:function im(){},
de:function de(){},
y:function y(){},
fd:function fd(a,b){this.a=a
this.b=b},
f9:function f9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
is:function is(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fZ:function fZ(){},
fY:function fY(){},
bS:function bS(){},
iT:function(a){var t
if(a==null)return
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new P.ip(a,Object.create(null),null)
for(t=0;t<a.length;++t)a[t]=P.iT(a[t])
return a},
nC:function(a,b){var t,s,r,q
if(typeof a!=="string")throw H.e(H.M(a))
t=null
try{t=JSON.parse(a)}catch(r){s=H.R(r)
q=String(s)
throw H.e(new P.eO(q,null,null))}q=P.iT(t)
return q},
ip:function ip(a,b,c){this.a=a
this.b=b
this.c=c},
cj:function cj(){},
ck:function ck(){},
f3:function f3(a,b){this.a=a
this.b=b},
f4:function f4(a){this.a=a},
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
mI:function(a,b,c,d,e,f){return new P.aG(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
jG:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ar(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mL(a)},
mL:function(a){var t=J.v(a)
if(!!t.$isbe)return t.l(a)
return H.fM(a)},
jC:function(a){return new P.ah(!1,null,null,a)},
km:function(a,b,c){return new P.ah(!0,a,b,c)},
mw:function(a){return new P.ah(!1,null,a,"Must not be null")},
fN:function(a,b,c){return new P.du(null,null,!0,a,b,"Value not in range")},
b1:function(a,b,c,d,e){return new P.du(b,c,!0,a,d,"Invalid value")},
kU:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.b1(a,0,c,"start",f))
if(a>b||b>c)throw H.e(P.b1(b,a,c,"end",f))
return b},
F:function(a,b,c,d,e){var t=e!=null?e:J.aQ(b)
return new P.eV(b,t,!0,a,c,"Index out of range")},
cr:function(a){return new P.i5(a)},
kL:function(a,b,c){var t,s
t=H.x([],[c])
for(s=J.bc(a);s.p();)C.a.j(t,s.gq())
if(b)return t
t.fixed$length=Array
return t},
O:function(a){H.bw(H.f(a))},
aB:function aB(){},
K:function K(){},
aU:function aU(a,b){this.a=a
this.b=b},
Q:function Q(){},
aG:function aG(a){this.a=a},
ej:function ej(){},
ek:function ek(){},
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
eV:function eV(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
w:function w(a){this.a=a},
c_:function c_(a){this.a=a},
al:function al(a){this.a=a},
Z:function Z(a){this.a=a},
dx:function dx(){},
eb:function eb(a){this.a=a},
i5:function i5(a){this.a=a},
eO:function eO(a,b,c){this.a=a
this.b=b
this.c=c},
em:function em(a,b,c){this.a=a
this.b=b
this.$ti=c},
q:function q(){},
a_:function a_(){},
db:function db(){},
c:function c(){},
aK:function aK(){},
b_:function b_(){},
Y:function Y(){},
o:function o(){},
bV:function bV(){},
t:function t(){},
bW:function bW(a){this.a=a},
j0:function(a){var t,s,r,q,p
if(a==null)return
t=P.I()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
nO:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.m5(a,new P.iY(t))
return t},
nP:function(a){var t,s
t=new P.T(0,$.z,null,[null])
s=new P.dG(t,[null])
a.then(H.ba(new P.iZ(s),1))["catch"](H.ba(new P.j_(s),1))
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
hK:function hK(){},
hM:function hM(a,b){this.a=a
this.b=b},
iY:function iY(a){this.a=a},
hL:function hL(a,b,c){this.a=a
this.b=b
this.c=c},
iZ:function iZ(a){this.a=a},
j_:function j_(a){this.a=a},
iw:function iw(){},
L:function L(){},
dY:function dY(){},
aR:function aR(){},
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
eJ:function eJ(){},
eM:function eM(){},
ai:function ai(){},
aI:function aI(){},
eU:function eU(){},
at:function at(){},
f5:function f5(){},
fe:function fe(){},
ff:function ff(){},
av:function av(){},
fw:function fw(){},
fD:function fD(){},
fI:function fI(){},
fJ:function fJ(){},
fO:function fO(){},
fP:function fP(){},
bU:function bU(){},
hd:function hd(){},
J:function J(){},
he:function he(){},
hf:function hf(){},
dz:function dz(){},
hj:function hj(){},
bY:function bY(){},
aw:function aw(){},
ht:function ht(){},
hB:function hB(){},
hD:function hD(){},
hE:function hE(){},
c1:function c1(){},
iB:function iB(){},
iC:function iC(){},
iD:function iD(){},
cA:function cA(){},
cy:function cy(){},
cF:function cF(){},
cJ:function cJ(){},
cU:function cU(){},
d1:function d1(){},
cY:function cY(){},
d_:function d_(){},
e2:function e2(){},
fT:function fT(){},
fU:function fU(){},
iP:function iP(){},
h4:function h4(){},
cz:function cz(){},
cT:function cT(){}},W={
mJ:function(a,b,c){var t,s
t=document.body
s=(t&&C.j).N(t,a,b,c)
s.toString
t=new H.dE(new W.W(s),new W.iX(),[W.u])
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
a3:function(a,b,c,d,e){var t=c==null?null:W.lk(new W.i4(c))
t=new W.i3(0,a,b,t,!1,[e])
t.dO(a,b,c,!1,e)
return t},
ld:function(a){var t,s
t=document.createElement("a")
s=new W.iE(t,window.location)
s=new W.c2(s)
s.dP(a)
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
lg:function(){var t=P.t
t=new W.iM(P.jN(C.l,t),P.ak(null,null,null,t),P.ak(null,null,null,t),P.ak(null,null,null,t),null)
t.dR(null,new H.bK(C.l,new W.iN(),[H.aD(C.l,0),null]),["TEMPLATE"],null)
return t},
nx:function(a){var t
if(a==null)return
if("postMessage" in a){t=W.no(a)
if(!!J.v(t).$ish)return t
return}else return a},
ny:function(a){var t
if(!!J.v(a).$isaV)return a
t=new P.hL([],[],!1)
t.c=!0
return t.bf(a)},
no:function(a){if(a===window)return a
else return new W.hX(a)},
lk:function(a){var t=$.z
if(t===C.d)return a
return t.eC(a)},
l:function l(){},
dZ:function dZ(){},
e0:function e0(){},
a6:function a6(){},
e3:function e3(){},
cf:function cf(){},
aS:function aS(){},
ci:function ci(){},
e6:function e6(){},
aT:function aT(){},
e9:function e9(){},
D:function D(){},
bf:function bf(){},
ea:function ea(){},
ec:function ec(){},
ed:function ed(){},
cm:function cm(){},
aV:function aV(){},
cn:function cn(){},
ee:function ee(){},
co:function co(){},
ef:function ef(){},
cp:function cp(){},
cq:function cq(){},
eg:function eg(){},
eh:function eh(){},
a7:function a7(){},
iX:function iX(){},
j:function j(){},
h:function h(){},
a8:function a8(){},
eH:function eH(){},
eI:function eI(){},
eN:function eN(){},
a9:function a9(){},
cu:function cu(){},
eT:function eT(){},
bG:function bG(){},
cv:function cv(){},
cw:function cw(){},
bH:function bH(){},
bI:function bI(){},
aZ:function aZ(){},
fb:function fb(){},
fh:function fh(){},
fi:function fi(){},
bL:function bL(){},
aa:function aa(){},
fj:function fj(){},
S:function S(){},
ft:function ft(){},
W:function W(a){this.a=a},
u:function u(){},
dn:function dn(){},
bR:function bR(){},
fC:function fC(){},
fF:function fF(){},
ab:function ab(){},
fH:function fH(){},
fK:function fK(){},
fL:function fL(){},
dt:function dt(){},
fV:function fV(){},
dv:function dv(){},
fX:function fX(){},
h_:function h_(){},
ac:function ac(){},
h1:function h1(){},
ad:function ad(){},
h3:function h3(){},
ae:function ae(){},
h8:function h8(){},
a0:function a0(){},
am:function am(){},
dy:function dy(){},
hg:function hg(){},
hh:function hh(){},
bX:function bX(){},
af:function af(){},
a1:function a1(){},
hk:function hk(){},
hl:function hl(){},
hn:function hn(){},
ag:function ag(){},
b2:function b2(){},
hr:function hr(){},
hs:function hs(){},
bp:function bp(){},
hu:function hu(){},
dC:function dC(){},
aN:function aN(){},
hA:function hA(){},
hC:function hC(){},
hF:function hF(){},
hG:function hG(){},
b4:function b4(){},
c0:function c0(){},
hI:function hI(a){this.a=a},
hJ:function hJ(){},
b5:function b5(){},
hU:function hU(){},
dH:function dH(){},
hW:function hW(){},
hY:function hY(){},
hZ:function hZ(){},
ik:function ik(){},
il:function il(){},
dL:function dL(){},
iF:function iF(){},
iI:function iI(){},
iJ:function iJ(){},
iQ:function iQ(){},
iR:function iR(){},
hS:function hS(){},
i_:function i_(a){this.a=a},
i2:function i2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
dI:function dI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
i3:function i3(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
i4:function i4(a){this.a=a},
c2:function c2(a){this.a=a},
E:function E(){},
dq:function dq(a){this.a=a},
fv:function fv(a){this.a=a},
fu:function fu(a,b,c){this.a=a
this.b=b
this.c=c},
c5:function c5(){},
iG:function iG(){},
iH:function iH(){},
iM:function iM(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iN:function iN(){},
iK:function iK(){},
ct:function ct(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hX:function hX(a){this.a=a},
dp:function dp(){},
iE:function iE(a,b){this.a=a
this.b=b},
dN:function dN(a){this.a=a},
iO:function iO(a){this.a=a},
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
t=new Float32Array(H.m(3))
s=$.$get$j1()
r=$.$get$cb()
q=new T.B(new Float32Array(H.m(16)))
q.F()
q=new B.fx(a,b,c,0,new T.n(t),-0.02,s,r,q,new T.n(new Float32Array(H.m(3))),new T.n(new Float32Array(H.m(3))),new T.n(new Float32Array(H.m(3))),new T.n(new Float32Array(H.m(3))),"camera:orbit",!1,!0)
q.dF(a,b,c,d)
return q},
jn:function jn(){},
jo:function jo(){},
jp:function jp(){},
jq:function jq(){},
jr:function jr(){},
fx:function fx(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
fy:function fy(a){this.a=a},
fz:function fz(a){this.a=a},
fA:function fA(){},
fB:function fB(a){this.a=a},
o4:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t={}
s=document
r=new R.h7(0,0,null,null,null,null)
r.dI(C.h.d_(s,"stats"),"blue","gray")
q=C.h.fl(s,"#webgl-canvas")
p=new G.e8(null,q)
o=(q&&C.z).cZ(q,"webgl2",P.aJ(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
p.a=o
if(o==null)H.H(P.cr('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
n="ChronosGL Config: "+J.ar(J.mc(o))
if($.lw>0)P.O("I: "+n)
J.lT(o,0,0,0,1)
J.dW(o,2929)
m=B.n4(20,0,0,q)
o=new T.B(new Float32Array(H.m(16)))
o.F()
n=new T.B(new Float32Array(H.m(16)))
n.F()
l=new G.fE(m,50,1,0.1,1000,o,n,new T.B(new Float32Array(H.m(16))),P.I(),"perspective",!1,!0)
l.bG()
n=H.x([],[A.bo])
k=new A.fR(null,p,n,17664,0,0,0,0,"main",!1,!0)
k.d=new G.eP(p,null,null,null,null)
o=G.jR("animation",p,$.$get$lo(),$.$get$ln())
j=new A.bo(o,[l],[],"animation",!1,!0)
H.b(!0)
C.a.j(n,j)
i=G.jR("solid",p,$.$get$lF(),$.$get$lE())
h=new A.bo(i,[l],[],"solid",!1,!0)
H.b(!0)
C.a.j(n,h)
g=G.jR("demo",p,$.$get$lt(),$.$get$ls())
f=new A.bo(g,[l],[],"demo",!1,!0)
H.b(!0)
C.a.j(n,f)
H.b(i.dB(o))
e=G.kQ("wire")
n=new T.n(new Float32Array(H.m(3)))
n.Z(1,1,0)
e.a4("uColor",n)
t.a=null
t.b=null
t.c=null
d=G.kQ("mat")
c=new B.jk(q,l,k)
c.$1(null)
W.a3(window,"resize",c,!1,W.j)
b=P.aJ(["idSkeleton",i,"idStatic",g,"idAnimation",o])
for(o=C.h.bg(s,"input"),n=o.length,a=0;a<o.length;o.length===n||(0,H.C)(o),++a){i=J.m7(o[a])
W.a3(i.a,i.b,new B.ji(b),!1,H.aD(i,0))}for(o=C.h.bg(s,"input"),n=o.length,a=0;a<o.length;o.length===n||(0,H.C)(o),++a){a0=o[a]
H.bw("initialize inputs "+H.f(a0.id))
a1=C.h.e_(s,"Event")
J.lM(a1,"change",!0,!0)
J.lY(a0,a1)}t.d=0
d.d.i(0,"uTime",0)
P.mQ([D.n3("../asset/knight/knight.js")],null,!1).bc(new B.jj(t,p,j,h,f,e,d,new B.jh(t,r,m,k,d)))},
jk:function jk(a,b,c){this.a=a
this.b=b
this.c=c},
ji:function ji(a){this.a=a},
jh:function jh(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jj:function jj(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h}},L={
kl:function(a){var t=[T.B]
t=new L.e_(H.x(new Array(a),t),H.x(new Array(a),t))
t.du(a)
return t},
nd:function(a){var t,s,r,q,p
P.O("recomputing local transform")
t=a.length
s=H.x(new Array(t),[T.B])
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
r=new Float32Array(H.m(t*16*d.length))
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
e_:function e_(a,b){this.a=a
this.b=b},
ch:function ch(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
h0:function h0(a,b,c){this.a=a
this.b=b
this.c=c}},G={
nj:function(a){var t,s,r
t=a.split("\n")
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.f(t[s])}return C.a.a8(t,"\n")},
lb:function(a,b,c){var t,s,r,q
t=J.k(a)
s=t.ck(a,b)
t.bs(a,s,c)
t.cg(a,s)
r=t.bl(a,s,35713)
if(r!=null&&!r){q=t.bk(a,s)
P.O("E:Compilation failed:")
P.O("E:"+G.nj(c))
P.O("E:Failure:")
P.O(C.e.a2("E:",q))
throw H.e(q)}return s},
kQ:function(a){var t=new G.fg(P.I(),a,!1,!0)
t.dE(a)
return t},
eK:function(a,b){var t,s
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
b[t]=J.aF(a[s],0)
b[t+1]=J.aF(a[s],1)
b[t+2]=J.aF(a[s],2)
b[t+3]=J.aF(a[s],3)}return b},
nr:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
for(t=a.e,s=t.gH(t),s=s.gv(s),r=b.x,q=[[P.c,P.q]],p=[P.Q],o=[T.a2],n=[T.n],m=[T.az];s.p();){l=s.gq()
if(!r.A(0,l)){k="Dropping unnecessary attribute: "+H.f(l)
if($.lw>0)H.bw("I: "+k)
continue}j=t.h(0,l)
switch($.$get$X().h(0,l).a){case"vec2":b.ag(l,G.mN(H.dR(j,"$isc",m,"$asc"),null),2)
break
case"vec3":b.ag(l,G.eK(H.dR(j,"$isc",n,"$asc"),null),3)
break
case"vec4":b.ag(l,G.mO(H.dR(j,"$isc",o,"$asc"),null),4)
break
case"float":b.ag(l,new Float32Array(H.iU(H.dR(j,"$isc",p,"$asc"))),1)
break
case"uvec4":b.ag(l,G.mM(H.dR(j,"$isc",q,"$asc"),null),4)
break
default:if(H.aA(!1))H.aO("unknown type for "+H.f(l)+" ["+J.m9(j[0]).l(0)+"] ["+new H.aM(H.j5(j),null).l(0)+"] "+H.f(j))}}},
n2:function(a,b,c){var t,s,r,q
t=b.d
s=new G.dh(t,J.kc(t.a),1,P.I(),b.e.x,null,0,-1,null,null,P.I(),"meshdata:"+a,!1,!0)
s.bx(G.eK(c,null))
t=new Array(c.length)
t.fixed$length=Array
r=H.x(t,[P.q])
for(t=c.length,q=0;q<t;++q)r[q]=q
s.y=J.dV(s.d.a)
s.bz(r)
return s},
jR:function(a,b,c,d){var t=new G.fS(b,c,d,null,null,P.I(),P.I(),P.ak(null,null,null,P.t),null,a,!1,!0)
t.dG(a,b,c,d)
return t},
fk:function fk(){},
dD:function dD(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
e5:function e5(){},
e8:function e8(a,b){this.a=a
this.b=b},
eP:function eP(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eF:function eF(a,b,c){this.a=a
this.b=b
this.c=c},
eG:function eG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eS:function eS(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dB:function dB(a,b,c){this.a=a
this.b=b
this.c=c},
dA:function dA(a,b,c){this.a=a
this.b=b
this.c=c},
fg:function fg(a,b,c,d){var _=this
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
fE:function fE(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
fS:function fS(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
aL:function aL(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
h2:function h2(){},
hm:function hm(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bZ:function bZ(){},
hy:function hy(a,b,c,d,e,f,g,h){var _=this
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
n=new T.n(new Float32Array(3))
n.B(o)
n.T(0,c)
C.a.j(t,n)
n=C.a.h(r,p).bm()
o=new T.n(new Float32Array(3))
o.B(n)
o.T(0,c)
C.a.j(t,o)}return t},
e4:function e4(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
h6:function h6(){},
h7:function h7(a,b,c,d,e,f){var _=this
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
if(r!=null&&b.cx!=null){J.ar(b)
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
p.b3(new T.au(o))
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
a.dz(b.cx,e,d)
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
fR:function fR(a,b,c,d,e,f,g,h,i,a0,a1){var _=this
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
t=C.f.f2(a,0,new A.j6())
s=536870911&t+(C.b.cW(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
j6:function j6(){}},D={
n3:function(a){var t,s
t=new P.T(0,$.z,null,[null])
s=new XMLHttpRequest()
C.q.fj(s,"GET",a)
W.a3(s,"loadend",new D.fa(new P.dG(t,[null]),s),!1,W.oj)
C.q.I(s,"")
return t},
fa:function fa(a,b){this.a=a
this.b=b}},T={au:function au(a){this.a=a},B:function B(a){this.a=a},bT:function bT(a){this.a=a},az:function az(a){this.a=a},n:function n(a){this.a=a},a2:function a2(a){this.a=a}},Y={
nq:function(a){var t,s,r,q,p
t=J.A(a)
s=t.h(a,"skinIndices")
r=t.h(a,"skinWeights")
if(s==null||J.aQ(s)===0)return 0
t=C.c.G(J.aQ(t.h(a,"vertices")),3)
q=J.A(s)
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
r=J.A(b2)
q=r.h(b2,"faces")
p=J.A(q)
P.O("faces: "+p.gk(q))
o=Y.kv(r.h(b2,"vertices"))
n=Y.kv(r.h(b2,"normals"))
m=s===0
l=m?null:Y.kw(s,r.h(b2,"skinIndices"))
k=m?null:Y.kw(s,r.h(b2,"skinWeights"))
if(k!=null)for(m=k.length,j=0;j<m;++j){i=k[j]
h=i.a
g=h[0]+h[1]+h[2]+h[3]
if(g<0.98||g>1.02)H.bw("bad vector: "+J.ar(i))}f=Y.mD(J.aF(r.h(b2,"uvs"),0))
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
C.a.j(a5,p.h(q,d))}}for(;C.b.d0(t.length,a1);){a7=new G.eS(!1,[],[],[],P.I())
if(h)a7.aw("aNormal")
if(m)a7.aw("aTexUV")
if(r){a7.aw("aBoneIndex")
a7.aw("aBoneWeight")}C.a.j(t,a7)}a7=C.a.h(t,a1)
a8=[]
for(a9=a.length,j=0;j<a.length;a.length===a9||(0,H.C)(a),++j)C.a.j(a8,C.a.h(o,a[j]))
if(g===3)a7.dr(a8)
else{H.b(g===4)
a7.ds(a8)}if(a2.length>0)a7.dn("aTexUV",a2)
if(a3.length>0)a7.dq("aNormal",a3)
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
t=J.A(a)
s=t.h(a,"animation")
r=J.A(s)
q=r.h(s,"hierarchy")
p=r.h(s,"name")
r=r.h(s,"length")
o=J.A(q)
n=H.x(new Array(o.gk(q)),[L.ch])
H.b(o.gk(q)===J.aQ(t.h(a,"bones")))
for(m=0;m<o.gk(q);++m){l=[]
k=[]
j=[]
i=[]
h=[]
g=[]
for(t=J.bc(J.aF(o.h(q,m),"keys"));t.p();){f=t.gq()
e=J.A(f)
d=J.P(e.h(f,"time"))
if(e.A(f,"pos")){C.a.j(l,d)
C.a.j(k,Y.kO(e.h(f,"pos")))}if(e.A(f,"scale")){C.a.j(h,d)
C.a.j(g,Y.kN(e.h(f,"scl")))}if(e.A(f,"rot")){C.a.j(j,d)
C.a.j(i,Y.kM(e.h(f,"rot")))}}t=b[m]
c=new L.ch(t,l,k,j,i,h,g)
e=l.length
if(e===0){c.sea([0])
e=new Float32Array(3)
e[0]=0
e[1]=0
e[2]=0
c.seb([new T.n(e)])}e=c.d
if(e==null||e.length===0){c.sej([0])
e=new Float32Array(4)
e[0]=0
e[1]=0
e[2]=0
e[3]=1
c.sek([new T.bT(e)])}e=c.f
if(e==null||e.length===0){c.sen([0])
e=new Float32Array(3)
e[0]=1
e[1]=1
e[2]=1
c.seo([new T.n(e)])}H.b(c.d.length>0)
H.b(c.b.length>0)
H.b(c.f.length>0)
H.b(c.d.length===c.e.length)
H.b(c.b.length===c.c.length)
H.b(c.f.length===c.r.length)
t=t.d
H.b(n[t]==null)
n[t]=c}P.O("anim-bones: "+n.length)
return new L.h0(p,n,r)},
mT:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=J.A(a)
s=t.h(a,"metadata")
r=t.h(a,"bones")
q=H.x(new Array(J.aF(s,"bones")),[L.cg])
for(t=J.A(r),p=0;p<t.gk(r);++p){o=t.h(r,p)
n=J.A(o)
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
t=J.A(a)
s=H.x(new Array(C.b.G(t.gk(a),3)),[T.n])
for(r=0;r<t.gk(a);r+=3){q=C.b.G(r,3)
p=J.P(t.h(a,r))
o=J.P(t.h(a,r+1))
n=J.P(t.h(a,r+2))
m=new Float32Array(3)
m[0]=p
m[1]=o
m[2]=n
s[q]=new T.n(m)}return s},
mD:function(a){var t,s,r,q,p,o,n
t=J.A(a)
s=H.x(new Array(C.b.G(t.gk(a),2)),[T.az])
for(r=0;r<t.gk(a);r+=2){q=C.b.G(r,2)
p=J.P(t.h(a,r))
o=J.P(t.h(a,r+1))
n=new Float32Array(2)
n[0]=p
n[1]=o
s[q]=new T.az(n)}return s},
kw:function(a,b){var t,s,r,q,p,o
t=J.A(b)
s=H.x(new Array(C.b.af(t.gk(b),a)),[T.a2])
for(r=0,q=0;r<t.gk(b);r+=a,++q){p=new Float32Array(4)
for(o=0;o<a;++o)p[o]=J.P(t.h(b,r+o))
s[q]=new T.a2(p)}return s},
kO:function(a){var t,s,r,q
if(a==null)return new T.n(new Float32Array(3))
t=J.A(a)
s=J.P(t.h(a,0))
r=J.P(t.h(a,1))
t=J.P(t.h(a,2))
q=new Float32Array(3)
q[0]=s
q[1]=r
q[2]=t
return new T.n(q)},
kN:function(a){var t,s,r,q
if(a==null){t=new Float32Array(3)
t[0]=1
t[1]=1
t[2]=1
return new T.n(t)}t=J.A(a)
s=J.P(t.h(a,0))
r=J.P(t.h(a,1))
t=J.P(t.h(a,2))
q=new Float32Array(3)
q[0]=s
q[1]=r
q[2]=t
return new T.n(q)},
kM:function(a){var t,s,r,q,p
if(a==null){t=new Float32Array(4)
t[3]=1
return new T.bT(t)}t=J.A(a)
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
l:function(a){return H.fM(a)},
gC:function(a){return new H.aM(H.j5(a),null)}}
J.f_.prototype={
l:function(a){return String(a)},
gu:function(a){return a?519018:218159},
gC:function(a){return C.a1},
$isaB:1}
J.f0.prototype={
w:function(a,b){return null==b},
l:function(a){return"null"},
gu:function(a){return 0},
gC:function(a){return C.W}}
J.bJ.prototype={
gu:function(a){return 0},
gC:function(a){return C.V},
l:function(a){return String(a)},
$iskK:1}
J.fG.prototype={}
J.b3.prototype={}
J.aY.prototype={
l:function(a){var t=a[$.$get$ky()]
return t==null?this.dk(a):J.ar(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isjH:1}
J.aW.prototype={
b2:function(a,b){if(!!a.immutable$list)throw H.e(new P.w(b))},
b1:function(a,b){if(!!a.fixed$length)throw H.e(new P.w(b))},
j:function(a,b){this.b1(a,"add")
a.push(b)},
M:function(a,b){var t,s,r,q,p
t=a.length
this.b1(a,"addAll")
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.C)(b),++r,t=p){q=b[r]
p=t+1
H.b(t===a.length||H.H(new P.Z(a)))
a.push(q)}},
cz:function(a,b){return new H.bK(a,b,[H.aD(a,0),null])},
a8:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.f(a[s])
return t.join(b)},
t:function(a,b){return this.h(a,b)},
gf0:function(a){if(a.length>0)return a[0]
throw H.e(H.eZ())},
gaE:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.e(H.eZ())},
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
df:function(a,b){this.b2(a,"sort")
H.dw(a,0,a.length-1,P.nQ())},
aH:function(a){return this.df(a,null)},
D:function(a,b){var t
for(t=0;t<a.length;++t)if(J.G(a[t],b))return!0
return!1},
l:function(a){return P.eY(a,"[","]")},
gv:function(a){return new J.e1(a,a.length,0,null,[H.aD(a,0)])},
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
$isp:1,
$asp:function(){},
$isd:1,
$asd:null,
$isc:1,
$asc:null}
J.jI.prototype={}
J.e1.prototype={
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
eE:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.e(new P.w(""+a+".ceil()"))},
f1:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.e(new P.w(""+a+".floor()"))},
a9:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(new P.w(""+a+".round()"))},
eF:function(a,b,c){if(this.R(b,c)>0)throw H.e(H.M(b))
if(this.R(a,b)<0)return b
if(this.R(a,c)>0)return c
return a},
fu:function(a){return a},
fA:function(a,b){var t
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
cX:function(a,b){if(typeof b!=="number")throw H.e(H.M(b))
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
throw H.e(new P.w("Result of truncating division is "+H.f(t)+": "+H.f(a)+" ~/ "+b))},
aX:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
cW:function(a,b){if(typeof b!=="number")throw H.e(H.M(b))
return(a&b)>>>0},
dm:function(a,b){if(typeof b!=="number")throw H.e(H.M(b))
return(a^b)>>>0},
ac:function(a,b){if(typeof b!=="number")throw H.e(H.M(b))
return a<b},
ab:function(a,b){if(typeof b!=="number")throw H.e(H.M(b))
return a>b},
d0:function(a,b){if(typeof b!=="number")throw H.e(H.M(b))
return a<=b},
cY:function(a,b){if(typeof b!=="number")throw H.e(H.M(b))
return a>=b},
gC:function(a){return C.a4},
$isY:1}
J.dd.prototype={
gC:function(a){return C.a3},
$isQ:1,
$isq:1,
$isY:1}
J.dc.prototype={
gC:function(a){return C.a2},
$isQ:1,
$isY:1}
J.aX.prototype={
aL:function(a,b){if(b>=a.length)throw H.e(H.U(a,b))
return a.charCodeAt(b)},
a2:function(a,b){if(typeof b!=="string")throw H.e(P.km(b,null,null))
return a+b},
dg:function(a,b,c){var t
if(c>a.length)throw H.e(P.b1(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bt:function(a,b){return this.dg(a,b,0)},
bv:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.fN(b,null,null))
if(b>c)throw H.e(P.fN(b,null,null))
if(c>a.length)throw H.e(P.fN(c,null,null))
return a.substring(b,c)},
dh:function(a,b){return this.bv(a,b,null)},
fz:function(a){return a.toLowerCase()},
eI:function(a,b,c){if(c>a.length)throw H.e(P.b1(c,0,a.length,null,null))
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
gC:function(a){return C.X},
gk:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.e(H.U(a,b))
return a[b]},
$isp:1,
$asp:function(){},
$ist:1}
H.d.prototype={$asd:null}
H.bj.prototype={
gv:function(a){return new H.df(this,this.gk(this),0,null,[H.ao(this,"bj",0)])},
aF:function(a,b){return this.dj(0,b)},
fw:function(a,b){var t,s
t=H.x([],[H.ao(this,"bj",0)])
C.a.sk(t,this.gk(this))
for(s=0;s<this.gk(this);++s)t[s]=this.t(0,s)
return t},
fv:function(a){return this.fw(a,!0)}}
H.df.prototype={
gq:function(){return this.d},
p:function(){var t,s,r,q
t=this.a
s=J.A(t)
r=s.gk(t)
if(this.b!==r)throw H.e(new P.Z(t))
q=this.c
if(q>=r){this.sai(null)
return!1}this.sai(s.t(t,q));++this.c
return!0},
sai:function(a){this.d=a}}
H.dg.prototype={
gv:function(a){return new H.fc(null,J.bc(this.a),this.b,this.$ti)},
gk:function(a){return J.aQ(this.a)},
$asa_:function(a,b){return[b]}}
H.el.prototype={$isd:1,
$asd:function(a,b){return[b]}}
H.fc.prototype={
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
H.dE.prototype={
gv:function(a){return new H.hH(J.bc(this.a),this.b,this.$ti)}}
H.hH.prototype={
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
H.iu.prototype={
sfc:function(a){this.z=a},
sfg:function(a){this.ch=a}}
H.b7.prototype={
c5:function(a,b){if(!this.f.w(0,a))return
if(this.Q.j(0,b)&&!this.y)this.y=!0
this.b_()},
fo:function(a){var t,s,r,q,p
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
ev:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.v(a),s=0;r=this.ch,s<r.length;s+=2)if(t.w(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).j(r,a)
t=this.ch;(t&&C.a).j(t,b)},
fn:function(a){var t,s,r
if(this.ch==null)return
for(t=J.v(a),s=0;r=this.ch,s<r.length;s+=2)if(t.w(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.H(new P.w("removeRange"))
P.kU(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
dc:function(a,b){if(!this.r.w(0,a))return
this.db=b},
f6:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.I(0,c)
return}H.b(b===1)
t=this.cx
if(t==null){t=P.jO(null,null)
this.cx=t}t.U(0,new H.io(a,c))},
f5:function(a,b){var t
if(!this.r.w(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.aD()
return}H.b(b===1)
t=this.cx
if(t==null){t=P.jO(null,null)
this.cx=t}t.U(0,this.gfd())},
f7:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.O(a)
if(b!=null)P.O(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.ar(a)
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
p=H.aC(o)
this.f7(q,p)
if(this.db){this.aD()
if(this===u.globalState.e)throw o}}finally{this.cy=H.nL(r)
u.globalState.d=H.k3(t,"$isb7")
if(t!=null)$=t.gfb()
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
for(t=this.b,s=t.gcT(t),s=s.gv(s);s.p();)s.gq().dW()
t.W(0)
this.c.W(0)
u.globalState.z.aq(0,this.a)
this.dx.W(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].I(0,t[r+1])
this.ch=null}},
gfb:function(){return this.d},
geJ:function(){return this.e}}
H.io.prototype={
$0:function(){this.a.I(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.i0.prototype={
eS:function(){var t=this.a
if(t.b===t.c)return
return t.cB()},
cE:function(){var t,s,r
t=this.eS()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.A(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gap(s)}else s=!1
else s=!1
else s=!1
if(s)H.H(P.cr("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gap(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aJ(["command","close"])
r=new H.an(!0,new P.dK(0,null,null,null,null,null,0,[null,P.q])).L(r)
s.toString
self.postMessage(r)}return!1}t.fk()
return!0},
c0:function(){if(self.window!=null)new H.i1(this).$0()
else for(;this.cE(););},
ar:function(){var t,s,r,q,p
if(!u.globalState.x)this.c0()
else try{this.c0()}catch(r){t=H.R(r)
s=H.aC(r)
q=u.globalState.Q
p=P.aJ(["command","error","msg",H.f(t)+"\n"+H.f(s)])
p=new H.an(!0,P.c4(null,P.q)).L(p)
q.toString
self.postMessage(p)}}}
H.i1.prototype={
$0:function(){if(!this.a.cE())return
P.ni(C.p,this)},
$S:function(){return{func:1,v:true}}}
H.b8.prototype={
fk:function(){var t=this.a
if(t.y){C.a.j(t.z,this)
return}t.am(this.b)}}
H.it.prototype={}
H.eW.prototype={
$0:function(){H.mX(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.eX.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(!this.d)this.a.$1(this.c)
else{s=this.a
if(H.bv(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.bv(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.b_()},
$S:function(){return{func:1,v:true}}}
H.hT.prototype={}
H.br.prototype={
I:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.nw(b)
if(t.geJ()===s){s=J.A(r)
switch(s.h(r,0)){case"pause":t.c5(s.h(r,1),s.h(r,2))
break
case"resume":t.fo(s.h(r,1))
break
case"add-ondone":t.ev(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.fn(s.h(r,1))
break
case"set-errors-fatal":t.dc(s.h(r,1),s.h(r,2))
break
case"ping":t.f6(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.f5(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.j(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.aq(0,s)
break}return}u.globalState.f.a.U(0,new H.b8(t,new H.iv(this,r),"receive"))},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.br){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gu:function(a){return this.b.a}}
H.iv.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dS(0,this.b)},
$S:function(){return{func:1}}}
H.c6.prototype={
I:function(a,b){var t,s,r
t=P.aJ(["command","message","port",this,"msg",b])
s=new H.an(!0,P.c4(null,P.q)).L(t)
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
gu:function(a){return C.b.dm((this.b<<16^this.a<<8)>>>0,this.c)}}
H.bn.prototype={
dW:function(){this.c=!0
this.b=null},
dS:function(a,b){if(this.c)return
this.b.$1(b)},
$isnc:1}
H.ho.prototype={
dJ:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.U(0,new H.b8(s,new H.hp(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.ba(new H.hq(this,b),0),a)}else{H.b(a>0)
throw H.e(new P.w("Timer greater than 0."))}}}
H.hp.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.hq.prototype={
$0:function(){this.a.c=null
H.jg()
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.as.prototype={
gu:function(a){var t=this.a
t=C.b.aX(t,0)^C.b.G(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
w:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.as){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.an.prototype={
L:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gk(t))
t=J.v(a)
if(!!t.$isbM)return["buffer",a]
if(!!t.$isbk)return["typed",a]
if(!!t.$isp)return this.d6(a)
if(!!t.$ismU){r=this.gd3()
q=t.gH(a)
q=H.jP(q,r,H.ao(q,"a_",0),null)
q=P.kL(q,!0,H.ao(q,"a_",0))
t=t.gcT(a)
t=H.jP(t,r,H.ao(t,"a_",0),null)
return["map",q,P.kL(t,!0,H.ao(t,"a_",0))]}if(!!t.$iskK)return this.d7(a)
if(!!t.$isa)this.cR(a)
if(!!t.$isnc)this.as(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isbr)return this.d8(a)
if(!!t.$isc6)return this.d9(a)
if(!!t.$isbe){p=a.$static_name
if(p==null)this.as(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isas)return["capability",a.a]
if(!(a instanceof P.o))this.cR(a)
return["dart",u.classIdExtractor(a),this.d5(u.classFieldsExtractor(a))]},
as:function(a,b){throw H.e(new P.w((b==null?"Can't transmit:":b)+" "+H.f(a)))},
cR:function(a){return this.as(a,null)},
d6:function(a){var t
H.b(typeof a!=="string")
t=this.d4(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.as(a,"Can't serialize indexable: ")},
d4:function(a){var t,s
t=[]
C.a.sk(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.L(a[s])
return t},
d5:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.L(a[t]))
return a},
d7:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.as(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sk(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.L(a[t[r]])
return["js-object",t,s]},
d9:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
d8:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.b6.prototype={
X:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.e(P.jC("Bad serialized message: "+H.f(a)))
switch(C.a.gf0(a)){case"ref":H.b(J.G(a[0],"ref"))
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
s=H.x(this.al(t),[null])
s.fixed$length=Array
return s
case"extendable":H.b(J.G(a[0],"extendable"))
t=a[1]
C.a.j(this.b,t)
return H.x(this.al(t),[null])
case"mutable":H.b(J.G(a[0],"mutable"))
t=a[1]
C.a.j(this.b,t)
return this.al(t)
case"const":H.b(J.G(a[0],"const"))
t=a[1]
C.a.j(this.b,t)
s=H.x(this.al(t),[null])
s.fixed$length=Array
return s
case"map":return this.eV(a)
case"sendport":return this.eW(a)
case"raw sendport":H.b(J.G(a[0],"raw sendport"))
t=a[1]
C.a.j(this.b,t)
return t
case"js-object":return this.eU(a)
case"function":H.b(J.G(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.j(this.b,t)
return t
case"capability":H.b(J.G(a[0],"capability"))
return new H.as(a[1])
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
eV:function(a){var t,s,r,q,p
H.b(J.G(a[0],"map"))
t=a[1]
s=a[2]
r=P.I()
C.a.j(this.b,r)
t=J.mh(t,this.geT()).fv(0)
for(q=J.A(s),p=0;p<t.length;++p)r.i(0,t[p],this.X(q.h(s,p)))
return r},
eW:function(a){var t,s,r,q,p,o,n
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
eU:function(a){var t,s,r,q,p,o
H.b(J.G(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.j(this.b,r)
for(q=J.A(t),p=J.A(s),o=0;o<q.gk(t);++o)r[q.h(t,o)]=this.X(p.h(s,o))
return r}}
H.fQ.prototype={}
H.hv.prototype={
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
H.f2.prototype={
l:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.f(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.f(this.a)+")"}}
H.hz.prototype={
l:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.ju.prototype={
$1:function(a){if(!!J.v(a).$isbg)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.dM.prototype={
l:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.jb.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.jc.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.jd.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.je.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.jf.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.be.prototype={
l:function(a){return"Closure '"+H.ds(this).trim()+"'"},
$isjH:1,
gfD:function(){return this},
$D:null}
H.hi.prototype={}
H.h5.prototype={
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
else s=typeof t!=="object"?J.aq(t):H.b0(t)
return(s^H.b0(this.b))>>>0},
l:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.f(this.d)+"' of "+H.fM(t)}}
H.hx.prototype={
l:function(a){return this.a}}
H.e7.prototype={
l:function(a){return this.a}}
H.fW.prototype={
l:function(a){return"RuntimeError: "+H.f(this.a)}}
H.hN.prototype={
l:function(a){return C.e.a2("Assertion failed: ",P.jG(this.a))}}
H.aM.prototype={
l:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gu:function(a){return J.aq(this.a)},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.aM){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.aj.prototype={
gk:function(a){return this.a},
gap:function(a){return this.a===0},
gH:function(a){return new H.f7(this,[H.aD(this,0)])},
gcT:function(a){return H.jP(this.gH(this),new H.f1(this),H.aD(this,0),H.aD(this,1))},
A:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bV(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bV(s,b)}else return this.f8(b)},
f8:function(a){var t=this.d
if(t==null)return!1
return this.ao(this.az(t,this.an(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.aj(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.aj(r,b)
return s==null?null:s.b}else return this.f9(b)},
f9:function(a){var t,s,r
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
else return this.fa(b)},
fa:function(a){var t,s,r,q
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
t=new H.f6(a,b,null,null,[null,null])
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
an:function(a){return J.aq(a)&0x3ffffff},
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
H.f1.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.f6.prototype={}
H.f7.prototype={
gk:function(a){return this.a.a},
gv:function(a){var t,s
t=this.a
s=new H.f8(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.f8.prototype={
gq:function(){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.Z(t))
else{t=this.c
if(t==null){this.sbJ(null)
return!1}else{this.sbJ(t.a)
this.c=this.c.c
return!0}}},
sbJ:function(a){this.d=a}}
H.j7.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.j8.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.t]}}}
H.j9.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.t]}}}
H.bM.prototype={
gC:function(a){return C.O},
$isbM:1}
H.bk.prototype={$isbk:1}
H.fl.prototype={
gC:function(a){return C.P}}
H.dj.prototype={
gk:function(a){return a.length},
$isp:1,
$asp:function(){},
$isr:1,
$asr:function(){}}
H.dk.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.H(H.U(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.H(H.U(a,b))
a[b]=c}}
H.dl.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.H(H.U(a,b))
a[b]=c},
$isd:1,
$asd:function(){return[P.q]},
$isc:1,
$asc:function(){return[P.q]}}
H.di.prototype={
gC:function(a){return C.Q},
$isd:1,
$asd:function(){return[P.Q]},
$isc:1,
$asc:function(){return[P.Q]},
$iseL:1}
H.fm.prototype={
gC:function(a){return C.R},
$isd:1,
$asd:function(){return[P.Q]},
$isc:1,
$asc:function(){return[P.Q]}}
H.fn.prototype={
gC:function(a){return C.S},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.H(H.U(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.q]},
$isc:1,
$asc:function(){return[P.q]}}
H.fo.prototype={
gC:function(a){return C.T},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.H(H.U(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.q]},
$isc:1,
$asc:function(){return[P.q]},
$iskH:1}
H.fp.prototype={
gC:function(a){return C.U},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.H(H.U(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.q]},
$isc:1,
$asc:function(){return[P.q]}}
H.fq.prototype={
gC:function(a){return C.Y},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.H(H.U(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.q]},
$isc:1,
$asc:function(){return[P.q]},
$isl8:1}
H.fr.prototype={
gC:function(a){return C.Z},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.H(H.U(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.q]},
$isc:1,
$asc:function(){return[P.q]},
$isl9:1}
H.dm.prototype={
gC:function(a){return C.a_},
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.H(H.U(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.q]},
$isc:1,
$asc:function(){return[P.q]}}
H.fs.prototype={
gC:function(a){return C.a0},
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.H(H.U(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.q]},
$isc:1,
$asc:function(){return[P.q]},
$isla:1}
H.bN.prototype={
$asp:function(){},
$isd:1,
$asd:function(){return[P.q]},
$asr:function(){},
$isc:1,
$asc:function(){return[P.q]}}
H.bO.prototype={
$asp:function(){},
$isd:1,
$asd:function(){return[P.Q]},
$asr:function(){},
$isc:1,
$asc:function(){return[P.Q]}}
H.bP.prototype={
$asp:function(){},
$asd:function(){return[P.Q]},
$asr:function(){},
$asc:function(){return[P.Q]}}
H.bQ.prototype={
$asp:function(){},
$asd:function(){return[P.q]},
$asr:function(){},
$asc:function(){return[P.q]}}
P.hP.prototype={
$1:function(a){var t,s
H.jg()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.hO.prototype={
$1:function(a){var t,s
t=this.a
H.b(t.a==null);++u.globalState.f.b
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.hQ.prototype={
$0:function(){H.jg()
this.a.$0()},
$S:function(){return{func:1}}}
P.hR.prototype={
$0:function(){H.jg()
this.a.$0()},
$S:function(){return{func:1}}}
P.eR.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.b)this.d.J(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.b)this.d.J(t.c,t.d)},
$S:function(){return{func:1,args:[,,]}}}
P.eQ.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){r[this.e]=a
if(s===0)this.d.bU(r)}else if(t.b===0&&!this.b)this.d.J(t.c,t.d)},
$S:function(){return{func:1,args:[,]}}}
P.hV.prototype={
eH:function(a,b){if(a==null)a=new P.bm()
if(this.a.a!==0)throw H.e(new P.al("Future already completed"))
$.z.toString
this.J(a,b)},
eG:function(a){return this.eH(a,null)}}
P.dG.prototype={
aB:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.al("Future already completed"))
t.bN(b)},
J:function(a,b){this.a.bO(a,b)}}
P.iL.prototype={
aB:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.al("Future already completed"))
t.aN(b)},
J:function(a,b){this.a.J(a,b)}}
P.dJ.prototype={
fh:function(a){if(this.c!==6)return!0
H.b(!0)
return this.b.b.bb(this.d,a.a)},
f4:function(a){var t,s
t=(this.c&2)!==0
if(t){H.b(t)
t=this.e!=null}else t=!1
H.b(t)
s=this.e
t=this.b.b
if(H.bv(s,{func:1,args:[P.o,P.bV]}))return t.fp(s,a.a,a.b)
else return t.bb(s,a.a)}}
P.T.prototype={
bd:function(a,b){var t,s,r
t=$.z
if(t!==C.d){t.toString
if(b!=null)b=P.nD(b,t)}s=new P.T(0,t,null,[null])
r=b==null?1:3
this.bL(new P.dJ(null,s,r,a,b,[H.aD(this,0),null]))
return s},
bc:function(a){return this.bd(a,null)},
bQ:function(a){H.b(this.a<4)
H.b(a.a>=4)
this.a=a.a
this.c=a.c},
bL:function(a){var t
H.b(a.a==null)
t=this.a
if(t<=1){a.a=H.k3(this.c,"$isdJ")
this.c=a}else{if(t===2){H.b(!0)
t=this.c
if(t.a<4){t.bL(a)
return}this.bQ(t)}H.b(this.a>=4)
t=this.b
t.toString
P.bt(null,null,t,new P.i6(this,a))}},
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
P.bt(null,null,s,new P.ie(t,this))}},
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
if(H.ca(a,"$isbh",t,"$asbh"))if(H.ca(a,"$isT",t,null))P.i9(a,this)
else P.lc(a,this)
else{s=this.aV()
H.b(this.a<4)
this.a=4
this.c=a
P.bq(this,s)}},
bU:function(a){var t
H.b(this.a<4)
H.b(!J.v(a).$isbh)
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
dY:function(a){return this.J(a,null)},
bN:function(a){var t
H.b(this.a<4)
if(H.ca(a,"$isbh",this.$ti,"$asbh")){this.dV(a)
return}H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.bt(null,null,t,new P.i8(this,a))},
dV:function(a){var t
if(H.ca(a,"$isT",this.$ti,null)){if(a.a===8){H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.bt(null,null,t,new P.id(this,a))}else P.i9(a,this)
return}P.lc(a,this)},
bO:function(a,b){var t
H.b(this.a<4)
H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.bt(null,null,t,new P.i7(this,a,b))},
$isbh:1,
gaY:function(){return this.a},
gei:function(){return this.c}}
P.i6.prototype={
$0:function(){P.bq(this.a,this.b)},
$S:function(){return{func:1}}}
P.ie.prototype={
$0:function(){P.bq(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.ia.prototype={
$1:function(a){var t=this.a
H.b(t.a===1)
H.b(t.a===1)
t.a=0
t.aN(a)},
$S:function(){return{func:1,args:[,]}}}
P.ib.prototype={
$2:function(a,b){var t=this.a
H.b(t.a===1)
t.J(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.ic.prototype={
$0:function(){this.a.J(this.b,this.c)},
$S:function(){return{func:1}}}
P.i8.prototype={
$0:function(){this.a.bU(this.b)},
$S:function(){return{func:1}}}
P.id.prototype={
$0:function(){P.i9(this.b,this.a)},
$S:function(){return{func:1}}}
P.i7.prototype={
$0:function(){this.a.J(this.b,this.c)},
$S:function(){return{func:1}}}
P.ii.prototype={
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
r=H.aC(n)
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
return}if(!!J.v(t).$isbh){if(t instanceof P.T&&t.gaY()>=4){if(t.gaY()===8){q=t
H.b(q.gaY()===8)
p=this.b
p.b=q.gei()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.bc(new P.ij(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.ij.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.ih.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.b((r.c&1)!==0)
this.a.b=r.b.b.bb(r.d,this.c)}catch(q){t=H.R(q)
s=H.aC(q)
r=this.a
r.b=new P.bd(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.ig.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.b(q.a===8)
t=q.c
q=this.c
if(q.fh(t)){H.b((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.f4(t)
p.a=!1}}catch(o){s=H.R(o)
r=H.aC(o)
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
P.dF.prototype={}
P.h9.prototype={
gk:function(a){var t,s
t={}
s=new P.T(0,$.z,null,[P.q])
t.a=0
this.fe(new P.hb(t),!0,new P.hc(t,s),s.gdX())
return s}}
P.hb.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.hc.prototype={
$0:function(){this.b.aN(this.a.a)},
$S:function(){return{func:1}}}
P.ha.prototype={}
P.bd.prototype={
l:function(a){return H.f(this.a)},
$isbg:1}
P.iS.prototype={}
P.iW.prototype={
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
P.ix.prototype={
fq:function(a){var t,s,r
try{if(C.d===$.z){a.$0()
return}P.lh(null,null,this,a)}catch(r){t=H.R(r)
s=H.aC(r)
P.iV(null,null,this,t,s)}},
fs:function(a,b){var t,s,r
try{if(C.d===$.z){a.$1(b)
return}P.li(null,null,this,a,b)}catch(r){t=H.R(r)
s=H.aC(r)
P.iV(null,null,this,t,s)}},
eB:function(a){return new P.iz(this,a)},
b0:function(a){return new P.iy(this,a)},
eC:function(a){return new P.iA(this,a)},
h:function(a,b){return},
cD:function(a){if($.z===C.d)return a.$0()
return P.lh(null,null,this,a)},
bb:function(a,b){if($.z===C.d)return a.$1(b)
return P.li(null,null,this,a,b)},
fp:function(a,b,c){if($.z===C.d)return a.$2(b,c)
return P.nE(null,null,this,a,b,c)}}
P.iz.prototype={
$0:function(){return this.a.cD(this.b)},
$S:function(){return{func:1}}}
P.iy.prototype={
$0:function(){return this.a.fq(this.b)},
$S:function(){return{func:1}}}
P.iA.prototype={
$1:function(a){return this.a.fs(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.dK.prototype={
an:function(a){return H.o6(a)&0x3ffffff},
ao:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.iq.prototype={
gv:function(a){var t=new P.c3(this,this.r,null,null,[null])
t.c=this.e
return t},
gk:function(a){return this.a},
D:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dZ(b)},
dZ:function(a){var t=this.d
if(t==null)return!1
return this.ay(t[this.ax(a)],a)>=0},
cw:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.D(0,a)?a:null
else return this.e9(a)},
e9:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.ax(a)]
r=this.ay(s,a)
if(r<0)return
return J.aF(s,r).ge1()},
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
else return this.ed(0,b)},
ed:function(a,b){var t,s,r
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
t=new P.ir(a,null,null)
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
ax:function(a){return J.aq(a)&0x3ffffff},
ay:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.G(a[s].a,b))return s
return-1},
$isd:1,
$asd:null}
P.ir.prototype={
ge1:function(){return this.a}}
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
P.im.prototype={}
P.de.prototype={}
P.y.prototype={
gv:function(a){return new H.df(a,this.gk(a),0,null,[H.ao(a,"y",0)])},
t:function(a,b){return this.h(a,b)},
cz:function(a,b){return new H.bK(a,b,[H.ao(a,"y",0),null])},
f2:function(a,b,c){var t,s,r
t=this.gk(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gk(a))throw H.e(new P.Z(a))}return s},
l:function(a){return P.eY(a,"[","]")},
$isd:1,
$asd:null,
$isc:1,
$asc:null}
P.fd.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.f(a)
t.a=s+": "
t.a+=H.f(b)},
$S:function(){return{func:1,args:[,,]}}}
P.f9.prototype={
gv:function(a){return new P.is(this,this.c,this.d,this.b,null,this.$ti)},
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
l:function(a){return P.eY(this,"{","}")},
cB:function(){var t,s,r
t=this.b
if(t===this.c)throw H.e(H.eZ());++this.d
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
s=H.x(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.br(s,0,q,t,r)
C.a.br(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sc1(s)},
dD:function(a,b){var t
H.b(!0)
t=new Array(8)
t.fixed$length=Array
this.sc1(H.x(t,[b]))},
sc1:function(a){this.a=a},
$asd:null}
P.is.prototype={
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
P.fZ.prototype={
M:function(a,b){var t
for(t=J.bc(b);t.p();)this.j(0,t.gq())},
l:function(a){return P.eY(this,"{","}")},
$isd:1,
$asd:null}
P.fY.prototype={}
P.bS.prototype={$isd:1,$asd:null,$isc:1,$asc:null}
P.ip.prototype={
h:function(a,b){var t,s
t=this.b
if(t==null){H.b(!0)
return this.c.h(0,b)}else if(typeof b!=="string")return
else{s=t[b]
return typeof s=="undefined"?this.ec(b):s}},
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
if(s==null?t!=null:s!==t)s[b]=null}else this.eu().i(0,b,c)},
A:function(a,b){if(this.b==null){H.b(!0)
return this.c.A(0,b)}if(typeof b!=="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,b)},
a7:function(a,b){var t,s,r,q
if(this.b==null){H.b(!0)
return this.c.a7(0,b)}t=this.aO()
for(s=0;s<t.length;++s){r=t[s]
q=this.b[r]
if(typeof q=="undefined"){q=P.iT(this.a[r])
this.b[r]=q}b.$2(r,q)
if(t!==this.c)throw H.e(new P.Z(this))}},
l:function(a){return P.kP(this)},
aO:function(){H.b(this.b!=null)
var t=this.c
if(t==null){t=Object.keys(this.a)
this.c=t}return t},
eu:function(){var t,s,r,q,p
if(this.b==null){H.b(!0)
return this.c}t=P.jM(P.t,null)
s=this.aO()
for(r=0;q=s.length,r<q;++r){p=s[r]
t.i(0,p,this.h(0,p))}if(q===0)C.a.j(s,null)
else C.a.sk(s,0)
this.b=null
this.a=null
this.c=t
H.b(!0)
return t},
ec:function(a){var t
if(!Object.prototype.hasOwnProperty.call(this.a,a))return
t=P.iT(this.a[a])
return this.b[a]=t}}
P.cj.prototype={}
P.ck.prototype={}
P.f3.prototype={
eP:function(a,b){var t=P.nC(a,this.geQ().a)
return t},
eO:function(a){return this.eP(a,null)},
geQ:function(){return C.L},
$ascj:function(){return[P.o,P.t]}}
P.f4.prototype={
$asck:function(){return[P.t,P.o]}}
P.aB.prototype={}
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
gfi:function(){return this.a},
dv:function(a,b){var t
if(!(Math.abs(this.a)>864e13))t=!1
else t=!0
if(t)throw H.e(P.jC("DateTime is outside valid range: "+this.gfi()))},
$isK:1,
$asK:function(){return[P.aU]}}
P.Q.prototype={$isK:1,
$asK:function(){return[P.Y]}}
P.aG.prototype={
ac:function(a,b){return C.b.ac(this.a,b.ge0())},
ab:function(a,b){return C.b.ab(this.a,b.ge0())},
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.aG))return!1
return this.a===b.a},
gu:function(a){return this.a&0x1FFFFFFF},
R:function(a,b){return C.b.R(this.a,b.a)},
l:function(a){var t,s,r,q,p
t=new P.ek()
s=this.a
if(s<0)return"-"+new P.aG(0-s).l(0)
r=t.$1(C.b.G(s,6e7)%60)
q=t.$1(C.b.G(s,1e6)%60)
p=new P.ej().$1(s%1e6)
return""+C.b.G(s,36e8)+":"+H.f(r)+":"+H.f(q)+"."+H.f(p)},
$isK:1,
$asK:function(){return[P.aG]}}
P.ej.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.t,args:[P.q]}}}
P.ek.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.t,args:[P.q]}}}
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
P.eV.prototype={
gaQ:function(){return"RangeError"},
gaP:function(){H.b(this.a)
if(J.lI(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.f(t)},
gk:function(a){return this.f}}
P.w.prototype={
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
P.dx.prototype={
l:function(a){return"Stack Overflow"},
$isbg:1}
P.eb.prototype={
l:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.i5.prototype={
l:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.f(t)}}
P.eO.prototype={
l:function(a){var t,s
t=this.a
s=""!==t?"FormatException: "+t:"FormatException"
return s}}
P.em.prototype={
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
if(s==null){s=new P.o()
H.kT(b,"expando$values",s)}H.kT(s,t,c)}}}
P.q.prototype={$isK:1,
$asK:function(){return[P.Y]}}
P.a_.prototype={
aF:function(a,b){return new H.dE(this,b,[H.ao(this,"a_",0)])},
gk:function(a){var t,s
H.b(!this.$isd)
t=this.gv(this)
for(s=0;t.p();)++s
return s},
ga3:function(a){var t,s
t=this.gv(this)
if(!t.p())throw H.e(H.eZ())
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
P.aK.prototype={}
P.b_.prototype={
gu:function(a){return P.o.prototype.gu.call(this,this)},
l:function(a){return"null"}}
P.Y.prototype={$isK:1,
$asK:function(){return[P.Y]}}
P.o.prototype={constructor:P.o,$iso:1,
w:function(a,b){return this===b},
gu:function(a){return H.b0(this)},
l:function(a){return H.fM(this)},
gC:function(a){return new H.aM(H.j5(this),null)},
toString:function(){return this.l(this)}}
P.bV.prototype={}
P.t.prototype={$isK:1,
$asK:function(){return[P.t]}}
P.bW.prototype={
gk:function(a){return this.a.length},
l:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga5:function(){return this.a}}
W.l.prototype={}
W.dZ.prototype={
l:function(a){return String(a)},
$isa:1}
W.e0.prototype={
l:function(a){return String(a)},
$isa:1}
W.a6.prototype={$iso:1}
W.e3.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.a6]},
$isd:1,
$asd:function(){return[W.a6]},
$isr:1,
$asr:function(){return[W.a6]},
$isc:1,
$asc:function(){return[W.a6]}}
W.cf.prototype={}
W.aS.prototype={$isa:1,$isaS:1,$ish:1}
W.ci.prototype={
cZ:function(a,b,c){var t=this.e3(a,b,P.nO(c,null))
return t},
e3:function(a,b,c){return a.getContext(b,c)}}
W.e6.prototype={
aG:function(a){return P.j0(a.getContextAttributes())}}
W.aT.prototype={$isa:1,
gk:function(a){return a.length}}
W.e9.prototype={$isa:1,$ish:1}
W.D.prototype={$iso:1}
W.bf.prototype={
bP:function(a,b){var t,s
t=$.$get$kx()
s=t[b]
if(typeof s==="string")return s
s=this.eq(a,b)
t[b]=s
return s},
eq:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.mH()+b
if(t in a)return t
return b},
gk:function(a){return a.length}}
W.ea.prototype={}
W.ec.prototype={
h:function(a,b){return a[b]},
gk:function(a){return a.length}}
W.ed.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.cm.prototype={}
W.aV.prototype={
ew:function(a,b){return a.adoptNode(b)},
e_:function(a,b){return a.createEvent(b)},
bg:function(a,b){return a.getElementsByTagName(b)},
d_:function(a,b){return a.getElementById(b)},
fl:function(a,b){return a.querySelector(b)},
$isaV:1}
W.cn.prototype={$isa:1}
W.ee.prototype={
l:function(a){return String(a)}}
W.co.prototype={
eM:function(a,b){return a.createHTMLDocument(b)}}
W.ef.prototype={
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
t=J.v(b)
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
W.eg.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[P.t]},
$isd:1,
$asd:function(){return[P.t]},
$isr:1,
$asr:function(){return[P.t]},
$isc:1,
$asc:function(){return[P.t]}}
W.eh.prototype={
gk:function(a){return a.length}}
W.a7.prototype={
gez:function(a){return new W.i_(a)},
l:function(a){return a.localName},
N:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.kF
if(t==null){t=H.x([],[W.dp])
s=new W.dq(t)
C.a.j(t,W.ld(null))
C.a.j(t,W.lg())
$.kF=s
d=s}else d=t
t=$.kE
if(t==null){t=new W.dN(d)
$.kE=t
c=t}else{t.a=d
c=t}}if($.aH==null){t=document
s=t.implementation
s=(s&&C.A).eM(s,"")
$.aH=s
$.jF=s.createRange()
s=$.aH
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.aH.head;(t&&C.B).P(t,r)}t=$.aH
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.k3(s,"$isaS")}t=$.aH
if(!!this.$isaS)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.aH.body;(t&&C.j).P(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.D(C.N,a.tagName)){t=$.jF;(t&&C.x).d2(t,q)
t=$.jF
p=(t&&C.x).eK(t,b)}else{q.innerHTML=b
p=$.aH.createDocumentFragment()
for(t=J.k(p);s=q.firstChild,s!=null;)t.P(p,s)}t=$.aH.body
if(q==null?t!=null:q!==t)J.mi(q)
c.bp(p)
C.h.ew(document,p)
return p},
eL:function(a,b,c){return this.N(a,b,c,null)},
de:function(a,b,c,d){a.textContent=null
this.P(a,this.N(a,b,c,d))},
dd:function(a,b){return this.de(a,b,null,null)},
aa:function(a,b){return a.getAttribute(b)},
e4:function(a,b){return a.hasAttribute(b)},
ee:function(a,b){return a.removeAttribute(b)},
da:function(a,b,c){return a.setAttribute(b,c)},
gcA:function(a){return new W.dI(a,"change",!1,[W.j])},
$isa:1,
$iso:1,
$isa7:1,
$ish:1,
$isu:1,
gft:function(a){return a.tagName}}
W.iX.prototype={
$1:function(a){return!!J.v(a).$isa7},
$S:function(){return{func:1,args:[,]}}}
W.j.prototype={
e6:function(a,b,c,d){return a.initEvent(b,!0,!0)},
$iso:1,
$isj:1}
W.h.prototype={
dT:function(a,b,c,d){return a.addEventListener(b,H.ba(c,1),!1)},
eX:function(a,b){return a.dispatchEvent(b)},
$iso:1,
$ish:1}
W.a8.prototype={$iso:1}
W.eH.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.a8]},
$isd:1,
$asd:function(){return[W.a8]},
$isr:1,
$asr:function(){return[W.a8]},
$isc:1,
$asc:function(){return[W.a8]}}
W.eI.prototype={
gk:function(a){return a.length}}
W.eN.prototype={
gk:function(a){return a.length}}
W.a9.prototype={$iso:1}
W.cu.prototype={}
W.eT.prototype={
gk:function(a){return a.length}}
W.bG.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.u]},
$isd:1,
$asd:function(){return[W.u]},
$isr:1,
$asr:function(){return[W.u]},
$isc:1,
$asc:function(){return[W.u]}}
W.cv.prototype={}
W.cw.prototype={
fF:function(a,b,c,d,e,f){return a.open(b,c,d,f,e)},
fj:function(a,b,c){return a.open(b,c)},
I:function(a,b){return a.send(b)}}
W.bH.prototype={}
W.bI.prototype={$isa:1,$isa7:1,$ish:1,$isbI:1}
W.aZ.prototype={$iso:1,$isj:1,$isaZ:1}
W.fb.prototype={
l:function(a){return String(a)}}
W.fh.prototype={
gk:function(a){return a.length}}
W.fi.prototype={
fE:function(a,b,c){return a.send(b,c)},
I:function(a,b){return a.send(b)}}
W.bL.prototype={}
W.aa.prototype={$iso:1}
W.fj.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.aa]},
$isd:1,
$asd:function(){return[W.aa]},
$isr:1,
$asr:function(){return[W.aa]},
$isc:1,
$asc:function(){return[W.aa]}}
W.S.prototype={$iso:1,$isj:1,$isS:1}
W.ft.prototype={$isa:1}
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
if(t!==s)for(r=t.childNodes.length,q=J.k(s),p=0;p<r;++p)q.P(s,t.firstChild)
return},
i:function(a,b,c){var t=this.a
J.lN(t,c,C.v.h(t.childNodes,b))},
gv:function(a){var t=this.a.childNodes
return new W.ct(t,t.length,-1,null,[H.ao(t,"E",0)])},
gk:function(a){return this.a.childNodes.length},
h:function(a,b){return C.v.h(this.a.childNodes,b)},
$asd:function(){return[W.u]},
$asde:function(){return[W.u]},
$asc:function(){return[W.u]},
$asbS:function(){return[W.u]}}
W.u.prototype={
fm:function(a){var t=a.parentNode
if(t!=null)J.bx(t,a)},
l:function(a){var t=a.nodeValue
return t==null?this.di(a):t},
P:function(a,b){return a.appendChild(b)},
ef:function(a,b){return a.removeChild(b)},
eg:function(a,b,c){return a.replaceChild(b,c)},
$iso:1,
$ish:1,
$isu:1,
gb9:function(a){return a.previousSibling}}
W.dn.prototype={
ba:function(a){return a.previousNode()}}
W.bR.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.u]},
$isd:1,
$asd:function(){return[W.u]},
$isr:1,
$asr:function(){return[W.u]},
$isc:1,
$asc:function(){return[W.u]}}
W.fC.prototype={$isa:1}
W.fF.prototype={
gk:function(a){return a.length}}
W.ab.prototype={$iso:1,
gk:function(a){return a.length}}
W.fH.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.ab]},
$isd:1,
$asd:function(){return[W.ab]},
$isr:1,
$asr:function(){return[W.ab]},
$isc:1,
$asc:function(){return[W.ab]}}
W.fK.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.fL.prototype={
I:function(a,b){return a.send(b)}}
W.dt.prototype={
eK:function(a,b){return a.createContextualFragment(b)},
d2:function(a,b){return a.selectNodeContents(b)}}
W.fV.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.dv.prototype={
I:function(a,b){return a.send(b)}}
W.fX.prototype={
gk:function(a){return a.length}}
W.h_.prototype={$isa:1,$ish:1}
W.ac.prototype={$iso:1,$ish:1}
W.h1.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.ac]},
$isd:1,
$asd:function(){return[W.ac]},
$isr:1,
$asr:function(){return[W.ac]},
$isc:1,
$asc:function(){return[W.ac]}}
W.ad.prototype={$iso:1}
W.h3.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.ad]},
$isd:1,
$asd:function(){return[W.ad]},
$isr:1,
$asr:function(){return[W.ad]},
$isc:1,
$asc:function(){return[W.ad]}}
W.ae.prototype={$iso:1,
gk:function(a){return a.length}}
W.h8.prototype={
A:function(a,b){return this.aS(a,b)!=null},
h:function(a,b){return this.aS(a,b)},
i:function(a,b,c){this.ep(a,b,c)},
a7:function(a,b){var t,s
for(t=0;!0;++t){s=this.e8(a,t)
if(s==null)return
b.$2(s,this.aS(a,s))}},
gk:function(a){return a.length},
aS:function(a,b){return a.getItem(b)},
e8:function(a,b){return a.key(b)},
ep:function(a,b,c){return a.setItem(b,c)}}
W.a0.prototype={$iso:1}
W.am.prototype={}
W.dy.prototype={
N:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aI(a,b,c,d)
t=W.mJ("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.W(s).M(0,new W.W(t))
return s}}
W.hg.prototype={
N:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aI(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.y.N(t.createElement("table"),b,c,d)
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
W.hh.prototype={
N:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aI(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.y.N(t.createElement("table"),b,c,d)
t.toString
t=new W.W(t)
r=t.ga3(t)
s.toString
r.toString
new W.W(s).M(0,new W.W(r))
return s}}
W.bX.prototype={$isbX:1}
W.af.prototype={$iso:1,$ish:1}
W.a1.prototype={$iso:1,$ish:1}
W.hk.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.a1]},
$isd:1,
$asd:function(){return[W.a1]},
$isr:1,
$asr:function(){return[W.a1]},
$isc:1,
$asc:function(){return[W.a1]}}
W.hl.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.af]},
$isd:1,
$asd:function(){return[W.af]},
$isr:1,
$asr:function(){return[W.af]},
$isc:1,
$asc:function(){return[W.af]}}
W.hn.prototype={
gk:function(a){return a.length}}
W.ag.prototype={$iso:1}
W.b2.prototype={$iso:1,$isj:1,$isb2:1}
W.hr.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.ag]},
$isd:1,
$asd:function(){return[W.ag]},
$isr:1,
$asr:function(){return[W.ag]},
$isc:1,
$asc:function(){return[W.ag]}}
W.hs.prototype={
gk:function(a){return a.length}}
W.bp.prototype={}
W.hu.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.dC.prototype={
ba:function(a){return a.previousNode()}}
W.aN.prototype={}
W.hA.prototype={
l:function(a){return String(a)},
$isa:1}
W.hC.prototype={
gk:function(a){return a.length}}
W.hF.prototype={
gk:function(a){return a.length}}
W.hG.prototype={
I:function(a,b){return a.send(b)}}
W.b4.prototype={
geR:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(new P.w("deltaY is not supported"))},
$iso:1,
$isj:1,
$isS:1,
$isb4:1}
W.c0.prototype={
gey:function(a){var t,s
t=P.Y
s=new P.T(0,$.z,null,[t])
this.e2(a)
this.eh(a,W.lk(new W.hI(new P.iL(s,[t]))))
return s},
eh:function(a,b){return a.requestAnimationFrame(H.ba(b,1))},
e2:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isa:1,
$ish:1}
W.hI.prototype={
$1:function(a){this.a.aB(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.hJ.prototype={$isa:1,$ish:1}
W.b5.prototype={$isa:1}
W.hU.prototype={
l:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
w:function(a,b){var t,s,r
if(b==null)return!1
t=J.v(b)
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
t=J.aq(a.left)
s=J.aq(a.top)
r=J.aq(a.width)
q=J.aq(a.height)
return W.lf(W.b9(W.b9(W.b9(W.b9(0,t),s),r),q))},
$isL:1,
$asL:function(){},
ga_:function(a){return a.height},
gb5:function(a){return a.left},
gbe:function(a){return a.top},
ga1:function(a){return a.width}}
W.dH.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[P.L]},
$isd:1,
$asd:function(){return[P.L]},
$isr:1,
$asr:function(){return[P.L]},
$isc:1,
$asc:function(){return[P.L]}}
W.hW.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.D]},
$isd:1,
$asd:function(){return[W.D]},
$isr:1,
$asr:function(){return[W.D]},
$isc:1,
$asc:function(){return[W.D]}}
W.hY.prototype={$isa:1}
W.hZ.prototype={
ga_:function(a){return a.height},
ga1:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.ik.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.a9]},
$isd:1,
$asd:function(){return[W.a9]},
$isr:1,
$asr:function(){return[W.a9]},
$isc:1,
$asc:function(){return[W.a9]}}
W.il.prototype={$isa:1,$ish:1}
W.dL.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.u]},
$isd:1,
$asd:function(){return[W.u]},
$isr:1,
$asr:function(){return[W.u]},
$isc:1,
$asc:function(){return[W.u]}}
W.iF.prototype={$isa:1,$ish:1}
W.iI.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.ae]},
$isd:1,
$asd:function(){return[W.ae]},
$isr:1,
$asr:function(){return[W.ae]},
$isc:1,
$asc:function(){return[W.ae]}}
W.iJ.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.a0]},
$isd:1,
$asd:function(){return[W.a0]},
$isr:1,
$asr:function(){return[W.a0]},
$isc:1,
$asc:function(){return[W.a0]}}
W.iQ.prototype={$isa:1}
W.iR.prototype={$isa:1}
W.hS.prototype={
a7:function(a,b){var t,s,r,q,p,o
for(t=this.gH(this),s=t.length,r=this.a,q=J.k(r),p=0;p<t.length;t.length===s||(0,H.C)(t),++p){o=t[p]
b.$2(o,q.aa(r,o))}},
gH:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.x([],[P.t])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.j(s,p.name)}return s},
ge5:function(){return this.a}}
W.i_.prototype={
A:function(a,b){return J.lL(this.a,b)},
h:function(a,b){return J.jA(this.a,b)},
i:function(a,b,c){J.mk(this.a,b,c)},
gk:function(a){return this.gH(this).length}}
W.i2.prototype={
fe:function(a,b,c,d){return W.a3(this.a,this.b,a,!1,H.aD(this,0))}}
W.dI.prototype={}
W.i3.prototype={
es:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.lK(r,this.c,t,!1)}},
dO:function(a,b,c,d,e){this.es()}}
W.i4.prototype={
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
dP:function(a){var t,s
t=$.$get$jW()
if(t.gap(t)){for(s=0;s<262;++s)t.i(0,C.M[s],W.nW())
for(s=0;s<12;++s)t.i(0,C.m[s],W.nX())}}}
W.E.prototype={
gv:function(a){return new W.ct(a,this.gk(a),-1,null,[H.ao(a,"E",0)])},
$isd:1,
$asd:null,
$isc:1,
$asc:null}
W.dq.prototype={
a6:function(a){return C.a.c6(this.a,new W.fv(a))},
V:function(a,b,c){return C.a.c6(this.a,new W.fu(a,b,c))}}
W.fv.prototype={
$1:function(a){return a.a6(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.fu.prototype={
$1:function(a){return a.V(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.c5.prototype={
a6:function(a){return this.a.D(0,W.bz(a))},
V:function(a,b,c){var t,s
t=W.bz(a)
s=this.c
if(s.D(0,H.f(t)+"::"+b))return this.d.ex(c)
else if(s.D(0,"*::"+b))return this.d.ex(c)
else{s=this.b
if(s.D(0,H.f(t)+"::"+b))return!0
else if(s.D(0,"*::"+b))return!0
else if(s.D(0,H.f(t)+"::*"))return!0
else if(s.D(0,"*::*"))return!0}return!1},
dR:function(a,b,c,d){var t,s,r
this.a.M(0,c)
t=b.aF(0,new W.iG())
s=b.aF(0,new W.iH())
this.b.M(0,t)
r=this.c
r.M(0,C.u)
r.M(0,s)}}
W.iG.prototype={
$1:function(a){return!C.a.D(C.m,a)},
$S:function(){return{func:1,args:[,]}}}
W.iH.prototype={
$1:function(a){return C.a.D(C.m,a)},
$S:function(){return{func:1,args:[,]}}}
W.iM.prototype={
V:function(a,b,c){if(this.dl(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.jA(a,"template")==="")return this.e.D(0,b)
return!1}}
W.iN.prototype={
$1:function(a){return"TEMPLATE::"+H.f(a)},
$S:function(){return{func:1,args:[,]}}}
W.iK.prototype={
a6:function(a){var t=J.v(a)
if(!!t.$isbU)return!1
t=!!t.$isJ
if(t&&W.bz(a)==="foreignObject")return!1
if(t)return!0
return!1},
V:function(a,b,c){if(b==="is"||C.e.bt(b,"on"))return!1
return this.a6(a)}}
W.ct.prototype={
p:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbY(J.aF(this.a,t))
this.c=t
return!0}this.sbY(null)
this.c=s
return!1},
gq:function(){return this.d},
sbY:function(a){this.d=a}}
W.hX.prototype={$isa:1,$ish:1}
W.dp.prototype={}
W.iE.prototype={}
W.dN.prototype={
bp:function(a){new W.iO(this).$2(a,null)},
aA:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)J.bx(t,a)}else J.bx(b,a)},
em:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.m6(a)
r=J.jA(s.ge5(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.R(n)}p="element unprintable"
try{p=J.ar(a)}catch(n){H.R(n)}try{o=W.bz(a)
this.el(a,b,t,p,o,s,r)}catch(n){if(H.R(n) instanceof P.ah)throw n
else{this.aA(a,b)
window
m="Removing corrupted element "+H.f(p)
if(typeof console!="undefined")console.warn(m)}}},
el:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.aA(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.a6(a)){this.aA(a,b)
window
t="Removing disallowed element <"+H.f(e)+"> from "+J.ar(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.V(a,"is",g)){this.aA(a,b)
window
t="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gH(f)
s=H.x(t.slice(0),[H.aD(t,0)])
for(r=f.gH(f).length-1,t=f.a,q=J.k(t);r>=0;--r){p=s[r]
if(!this.a.V(a,J.mo(p),q.aa(t,p))){window
o="Removing disallowed attribute <"+H.f(e)+" "+p+'="'+H.f(q.aa(t,p))+'">'
if(typeof console!="undefined")console.warn(o)
q.aa(t,p)
q.ee(t,p)}}if(!!J.v(a).$isbX)this.bp(a.content)}}
W.iO.prototype={
$2:function(a,b){var t,s,r,q
switch(a.nodeType){case 1:this.a.em(a,b)
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
$S:function(){return{func:1,v:true,args:[W.u,W.u]}}}
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
$asd:function(){return[W.u]},
$isc:1,
$asc:function(){return[W.u]}}
W.cL.prototype={$isd:1,
$asd:function(){return[W.u]},
$isc:1,
$asc:function(){return[W.u]}}
W.cM.prototype={$isd:1,
$asd:function(){return[W.u]},
$isc:1,
$asc:function(){return[W.u]}}
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
$asd:function(){return[P.t]},
$isc:1,
$asc:function(){return[P.t]}}
W.cS.prototype={$isd:1,
$asd:function(){return[W.a9]},
$isc:1,
$asc:function(){return[W.a9]}}
W.d3.prototype={$isd:1,
$asd:function(){return[W.u]},
$isc:1,
$asc:function(){return[W.u]}}
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
$asd:function(){return[W.u]},
$isc:1,
$asc:function(){return[W.u]}}
W.da.prototype={$isd:1,
$asd:function(){return[P.t]},
$isc:1,
$asc:function(){return[P.t]}}
W.cV.prototype={$isd:1,
$asd:function(){return[W.a0]},
$isc:1,
$asc:function(){return[W.a0]}}
W.cW.prototype={$isd:1,
$asd:function(){return[W.u]},
$isc:1,
$asc:function(){return[W.u]}}
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
P.hK.prototype={
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
r.dv(s,!0)
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
this.f3(a,new P.hM(t,this))
return t.a}if(a instanceof Array){p=this.cu(a)
r=this.b
o=r[p]
if(o!=null)return o
n=J.A(a)
m=n.gk(a)
o=this.c?new Array(m):a
r[p]=o
for(r=J.bb(o),l=0;C.b.ac(l,m);++l)r.i(o,l,this.bf(n.h(a,l)))
return o}return a}}
P.hM.prototype={
$2:function(a,b){var t,s
t=this.a.a
s=this.b.bf(b)
J.lJ(t,a,s)
return s},
$S:function(){return{func:1,args:[,,]}}}
P.iY.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.t,,]}}}
P.hL.prototype={
f3:function(a,b){var t,s,r,q
for(t=Object.keys(a),s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r){q=t[r]
b.$2(q,a[q])}}}
P.iZ.prototype={
$1:function(a){return this.a.aB(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.j_.prototype={
$1:function(a){return this.a.eG(a)},
$S:function(){return{func:1,args:[,]}}}
P.iw.prototype={}
P.L.prototype={$asL:null}
P.dY.prototype={$isa:1}
P.aR.prototype={$isa:1}
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
gK:function(a){return a.z}}
P.eB.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eC.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
P.eD.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eE.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eJ.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eM.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ai.prototype={}
P.aI.prototype={$isa:1}
P.eU.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.at.prototype={$iso:1}
P.f5.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return this.Y(a,b)},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
Y:function(a,b){return a.getItem(b)},
$isd:1,
$asd:function(){return[P.at]},
$isc:1,
$asc:function(){return[P.at]}}
P.fe.prototype={$isa:1}
P.ff.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.av.prototype={$iso:1}
P.fw.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return this.Y(a,b)},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
Y:function(a,b){return a.getItem(b)},
$isd:1,
$asd:function(){return[P.av]},
$isc:1,
$asc:function(){return[P.av]}}
P.fD.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fI.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fJ.prototype={
gk:function(a){return a.length}}
P.fO.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fP.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bU.prototype={$isa:1,$isbU:1}
P.hd.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return this.Y(a,b)},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
Y:function(a,b){return a.getItem(b)},
$isd:1,
$asd:function(){return[P.t]},
$isc:1,
$asc:function(){return[P.t]}}
P.J.prototype={
N:function(a,b,c,d){var t,s,r,q,p,o
t=H.x([],[W.dp])
C.a.j(t,W.ld(null))
C.a.j(t,W.lg())
C.a.j(t,new W.iK())
c=new W.dN(new W.dq(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.j).eL(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.W(q)
o=t.ga3(t)
for(t=J.k(p);r=o.firstChild,r!=null;)t.P(p,r)
return p},
gcA:function(a){return new W.dI(a,"change",!1,[W.j])},
$isa:1,
$ish:1,
$isJ:1}
P.he.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.hf.prototype={$isa:1}
P.dz.prototype={}
P.hj.prototype={$isa:1}
P.bY.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.aw.prototype={$iso:1}
P.ht.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return this.Y(a,b)},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
Y:function(a,b){return a.getItem(b)},
$isd:1,
$asd:function(){return[P.aw]},
$isc:1,
$asc:function(){return[P.aw]}}
P.hB.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.hD.prototype={$isa:1}
P.hE.prototype={$isa:1}
P.c1.prototype={$isa:1}
P.iB.prototype={$isa:1}
P.iC.prototype={$isa:1}
P.iD.prototype={$isa:1}
P.cA.prototype={$isd:1,
$asd:function(){return[P.at]},
$isc:1,
$asc:function(){return[P.at]}}
P.cy.prototype={$isd:1,
$asd:function(){return[P.t]},
$isc:1,
$asc:function(){return[P.t]}}
P.cF.prototype={$isd:1,
$asd:function(){return[P.av]},
$isc:1,
$asc:function(){return[P.av]}}
P.cJ.prototype={$isd:1,
$asd:function(){return[P.aw]},
$isc:1,
$asc:function(){return[P.aw]}}
P.cU.prototype={$isd:1,
$asd:function(){return[P.at]},
$isc:1,
$asc:function(){return[P.at]}}
P.d1.prototype={$isd:1,
$asd:function(){return[P.av]},
$isc:1,
$asc:function(){return[P.av]}}
P.cY.prototype={$isd:1,
$asd:function(){return[P.aw]},
$isc:1,
$asc:function(){return[P.aw]}}
P.d_.prototype={$isd:1,
$asd:function(){return[P.t]},
$isc:1,
$asc:function(){return[P.t]}}
P.e2.prototype={
gk:function(a){return a.length}}
P.fT.prototype={
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
aG:function(a){return P.j0(a.getContextAttributes())},
bh:function(a){return a.getError()},
bi:function(a,b){return a.getProgramInfoLog(b)},
bj:function(a,b,c){return a.getProgramParameter(b,c)},
bk:function(a,b){return a.getShaderInfoLog(b)},
bl:function(a,b,c){return a.getShaderParameter(b,c)},
bn:function(a,b,c){return a.getUniformLocation(b,c)},
cv:function(a,b){return a.linkProgram(b)},
bs:function(a,b,c){return a.shaderSource(b,c)},
bu:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cF:function(a,b,c,d,e,f,g,h,i,j){this.aZ(a,b,c,d,e,f,g,h,i,j)
return},
aZ:function(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
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
P.fU.prototype={
eA:function(a,b){return a.beginTransformFeedback(b)},
eD:function(a,b){return a.bindVertexArray(b)},
eN:function(a){return a.createVertexArray()},
eY:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
eZ:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
f_:function(a){return a.endTransformFeedback()},
fB:function(a,b,c,d){this.er(a,b,c,d)
return},
er:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
fC:function(a,b,c){return a.vertexAttribDivisor(b,c)},
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
aG:function(a){return P.j0(a.getContextAttributes())},
bh:function(a){return a.getError()},
bi:function(a,b){return a.getProgramInfoLog(b)},
bj:function(a,b,c){return a.getProgramParameter(b,c)},
bk:function(a,b){return a.getShaderInfoLog(b)},
bl:function(a,b,c){return a.getShaderParameter(b,c)},
bn:function(a,b,c){return a.getUniformLocation(b,c)},
cv:function(a,b){return a.linkProgram(b)},
bs:function(a,b,c){return a.shaderSource(b,c)},
bu:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cF:function(a,b,c,d,e,f,g,h,i,j){this.aZ(a,b,c,d,e,f,g,h,i,j)
return},
aZ:function(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
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
P.iP.prototype={$isa:1}
P.h4.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return P.j0(this.e7(a,b))},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
e7:function(a,b){return a.item(b)},
$isd:1,
$asd:function(){return[P.aK]},
$isc:1,
$asc:function(){return[P.aK]}}
P.cz.prototype={$isd:1,
$asd:function(){return[P.aK]},
$isc:1,
$asc:function(){return[P.aK]}}
P.cT.prototype={$isd:1,
$asd:function(){return[P.aK]},
$isc:1,
$asc:function(){return[P.aK]}}
B.jn.prototype={
$1:function(a){$.$get$j1().i(0,a.which,!0)},
$S:function(){return{func:1,args:[W.aZ]}}}
B.jo.prototype={
$1:function(a){$.$get$j1().i(0,a.which,null)},
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
B.fx.prototype={
dF:function(a,b,c,d){var t
d.toString
W.a3(d,W.nV().$1(d),new B.fy(this),!1,W.b4)
W.a3(d,"mousemove",new B.fz(this),!1,W.S)
t=W.b2
W.a3(d,"touchstart",new B.fA(),!1,t)
W.a3(d,"touchmove",new B.fB(this),!1,t)
B.oa(null)}}
B.fy.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.a5.geR(a)*r.k3
if(C.c.ae(r.fy,t)>0)r.fy=H.a4(C.c.ae(r.fy,t))}catch(q){s=H.R(q)
P.O(s)}},
$S:function(){return{func:1,args:[W.b4]}}}
B.fz.prototype={
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
B.fA.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.a9(t.clientX)
C.c.a9(t.clientY)
$.cc=s
C.c.a9(t.clientX)
$.cd=C.c.a9(t.clientY)},
$S:function(){return{func:1,args:[W.b2]}}}
B.fB.prototype={
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
L.e_.prototype={
du:function(a){var t,s,r
for(t=this.b,s=this.a,r=0;r<a;++r){s[r]=new T.B(new Float32Array(16))
t[r]=new T.B(new Float32Array(16))}}}
L.ch.prototype={
l:function(a){var t=[]
C.a.j(t,H.f(this.a.a))
C.a.j(t,""+this.b.length+": "+H.f(this.c))
C.a.j(t,""+this.d.length+": "+H.f(this.e))
C.a.j(t,""+this.f.length+": "+H.f(this.r))
return C.a.a8(t,"\n")},
sea:function(a){this.b=a},
seb:function(a){this.c=a},
sej:function(a){this.d=a},
sek:function(a){this.e=a},
sen:function(a){this.f=a},
seo:function(a){this.r=a}}
L.h0.prototype={
l:function(a){return"SkeletalAnimation["+H.f(this.a)+", duration: "+H.f(this.c)+", frames: "+this.b.length+"]"}}
G.fk.prototype={}
G.dD.prototype={
a4:function(a,b){var t=this.d
if(H.aA(!t.A(0,a)))H.aO("uniform "+a+" already set")
t.i(0,a,b)},
bD:function(){return this.d},
l:function(a){var t,s,r,q
t=H.x(["{"+new H.aM(H.j5(this),null).l(0)+"}["+this.a+"]"],[P.t])
for(s=this.d,r=s.gH(s),r=r.gv(r);r.p();){q=r.gq()
C.a.j(t,H.f(q)+": "+H.f(s.h(0,q)))}return C.a.a8(t,"\n")}}
G.e5.prototype={}
G.e8.prototype={
ct:function(a,b,c){J.m3(this.a,b)
if(c>0)J.mu(this.a,b,c)}}
G.eP.prototype={}
G.eF.prototype={}
G.eG.prototype={}
G.eS.prototype={
aw:function(a){var t=this.e
H.b(!t.A(0,a))
H.b(C.e.bt(a,"a"))
switch($.$get$X().h(0,a).a){case"vec2":t.i(0,a,H.x([],[T.az]))
break
case"vec3":t.i(0,a,H.x([],[T.n]))
break
case"vec4":t.i(0,a,H.x([],[T.a2]))
break
case"float":t.i(0,a,H.x([],[P.Q]))
break
case"uvec4":t.i(0,a,H.x([],[[P.c,P.q]]))
break
default:if(H.aA(!1))H.aO("unknown type for "+a)}},
dr:function(a){var t,s,r,q,p,o
H.b(a.length===3)
t=this.d
s=t.length
C.a.j(this.b,new G.eF(s,s+1,s+2))
for(r=a.length,q=0;q<a.length;a.length===r||(0,H.C)(a),++q){p=a[q]
p.toString
o=new T.n(new Float32Array(3))
o.B(p)
C.a.j(t,o)}},
dn:function(a,b){var t,s,r,q,p,o,n
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.C)(b),++q){p=b[q]
p.toString
o=new Float32Array(2)
n=p.a
o[1]=n[1]
o[0]=n[0]
r.j(t,new T.az(o))}},
dq:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.C)(b),++q){p=b[q]
p.toString
o=new T.n(new Float32Array(3))
o.B(p)
r.j(t,o)}},
bw:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.C)(b),++q){p=b[q]
p.toString
o=new T.a2(new Float32Array(4))
o.B(p)
r.j(t,o)}},
ds:function(a){var t,s,r,q,p,o
H.b(a.length===4)
t=this.d
s=t.length
C.a.j(this.c,new G.eG(s,s+1,s+2,s+3))
for(r=a.length,q=0;q<a.length;a.length===r||(0,H.C)(a),++q){p=a[q]
p.toString
o=new T.n(new Float32Array(3))
o.B(p)
C.a.j(t,o)}},
dA:function(){var t,s,r,q,p,o,n,m,l,k
t=this.b
H.b(t.length>0||this.c.length>0)
s=this.c
r=new Array(t.length*3+s.length*6)
r.fixed$length=Array
q=H.x(r,[P.q])
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
G.dB.prototype={}
G.dA.prototype={}
G.fg.prototype={
dE:function(a){this.a4("cDepthTest",!0)
this.a4("cDepthWrite",!0)
this.a4("cBlendEquation",$.$get$kn())
this.a4("cStencilFunc",$.$get$kV())}}
G.dh.prototype={
by:function(a,b,c){var t,s
if(C.e.aL(a,0)===105){if(H.aA(C.b.af(b.length,c)===this.z))H.aO("ChangeAttribute "+this.z)}else H.b(C.b.af(b.length,c)===(this.ch.length/3|0))
this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.dS(t.a,34962,s)
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
s.i(0,a,J.dV(r.a))
this.by(a,b,c)
q=$.$get$X().h(0,a)
if(q==null)throw H.e("Unknown canonical "+a)
p=this.x
if(H.aA(p.A(0,a)))H.aO("unexpected attribute "+a)
o=p.h(0,a)
J.dU(r.a,this.e)
r.ct(0,o,t?1:0)
s=s.h(0,a)
p=q.bC()
J.dS(r.a,34962,s)
J.kk(r.a,o,p,5126,!1,0,0)},
bx:function(a){var t,s,r,q,p
t=this.r
s=this.d
t.i(0,"aPosition",J.dV(s.a))
this.bA(a)
r=$.$get$X().h(0,"aPosition")
if(r==null)throw H.e("Unknown canonical aPosition")
q=this.x
H.b(q.A(0,"aPosition"))
p=q.h(0,"aPosition")
J.dU(s.a,this.e)
s.ct(0,p,0)
t=t.h(0,"aPosition")
q=r.bC()
J.dS(s.a,34962,t)
J.kk(s.a,p,q,5126,!1,0,0)},
bz:function(a){var t,s,r,q
H.b(this.ch!=null)
t=this.ch.length
if(t<768){this.saR(new Uint8Array(H.iU(a)))
this.Q=5121}else if(t<196608){this.saR(new Uint16Array(H.iU(a)))
this.Q=5123}else{this.saR(new Uint32Array(H.iU(a)))
this.Q=5125}t=this.d
J.dU(t.a,this.e)
s=this.y
r=this.cx
t.toString
q=J.v(r)
H.b(!!q.$isl8||!!q.$isl9||!!q.$isla)
J.dS(t.a,34963,s)
J.kb(t.a,34963,r,35048)},
l:function(a){var t,s,r
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,t=t.gH(t),t=t.gv(t);t.p();){r=t.gq()
C.a.j(s,H.f(r)+":"+this.cy.h(0,r).length)}return"MESH["+this.a+"] "+C.a.a8(s,"  ")},
saR:function(a){this.cx=a}}
G.fE.prototype={
dt:function(a,b){var t=C.b.cX(a,b)
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
o=new T.n(new Float32Array(H.m(3)))
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
s=J.v(n)
r=!!s.$isa2
k=r?s.gat(n):1
if(!!s.$isn){j=s.gm(n)
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
G.ei.prototype={
l:function(a){return"["+this.a+"] "+this.b+" "+this.c+" mode:"+this.d+" ["+this.e.a+"usec]"}}
G.fS.prototype={
dB:function(a){var t,s,r,q,p,o
t=this.e.x
s=a.e.x
for(r=t.gH(t),r=r.gv(r);r.p();){q=r.gq()
p=t.h(0,q)
o=s.h(0,q)
if(p==null?o!=null:p!==o)return!1}return!0},
dK:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gk(t)===s.gk(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gH(s),s=s.gv(s);s.p();){q=s.gq()
if(!t.A(0,q))C.a.j(r,q)}for(t=this.x,s=new P.c3(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.p();){q=s.d
if(!t.D(0,q))C.a.j(r,q)}return r},
dN:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
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
else if(!!J.v(m).$iskH)J.ms(r.a,k,m)
break
case"float":if(l.c===0)J.mq(r.a,k,m)
else if(!!J.v(m).$iseL)J.mr(r.a,k,m)
break
case"mat4":if(l.c===0){j=H.aE(m,"$isB").a
J.kj(r.a,k,!1,j)}else if(!!J.v(m).$iseL)J.kj(r.a,k,!1,m)
else if(H.aA(!1))H.aO("bad unform: "+n)
break
case"mat3":if(l.c===0){j=H.aE(m,"$isau").a
J.ki(r.a,k,!1,j)}else if(!!J.v(m).$iseL)J.ki(r.a,k,!1,m)
else if(H.aA(!1))H.aO("bad unform: "+n)
break
case"vec4":if(l.c===0){j=H.aE(m,"$isa2").a
J.kh(r.a,k,j)}else J.kh(r.a,k,m)
break
case"vec3":if(l.c===0){j=H.aE(m,"$isn").a
J.kg(r.a,k,j)}else J.kg(r.a,k,m)
break
case"vec2":if(l.c===0){j=H.aE(m,"$isaz").a
J.kf(r.a,k,j)}else J.kf(r.a,k,m)
break
case"sampler2D":case"sampler2DShadow":j=C.b.a2(33984,this.ch)
J.k9(r.a,j)
j=H.aE(m,"$isbZ").b
J.dT(r.a,3553,j)
j=this.ch
J.jB(r.a,k,j)
this.ch=this.ch+1
break
case"samplerCube":H.b(n==="uCubeTexture")
j=C.b.a2(33984,this.ch)
J.k9(r.a,j)
j=H.aE(m,"$isbZ").b
J.dT(r.a,34067,j)
j=this.ch
J.jB(r.a,k,j)
this.ch=this.ch+1
break
default:H.bw("Error: unknow uniform type: "+j)
H.b(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":if(J.G(m,!0))J.dW(r.a,2929)
else J.jx(r.a,2929)
break
case"cStencilFunc":H.aE(m,"$isdB")
j=m.a
if(j===1281)J.jx(r.a,2960)
else{J.dW(r.a,2960)
i=m.b
h=m.c
J.ml(r.a,j,i,h)}break
case"cDepthWrite":J.lX(r.a,m)
break
case"cBlendEquation":H.aE(m,"$isdA")
j=m.a
if(j===1281)J.jx(r.a,3042)
else{J.dW(r.a,3042)
i=m.b
h=m.c
J.lR(r.a,i,h)
J.lQ(r.a,j)}break}++o
break}}s=Date.now()
""+o
new P.aG(1000*(s-new P.aU(t,!1).a)).l(0)},
dz:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
t=Date.now()
s=this.d
r=this.r
J.mt(s.a,r)
this.ch=0
this.z.W(0)
for(r=b.length,q=0;q<b.length;b.length===r||(0,H.C)(b),++q){p=b[q]
this.dN(p.a,p.bD())}r=this.Q
r.W(0)
for(o=a.cy,o=o.gH(o),o=o.gv(o);o.p();)r.j(0,o.gq())
n=this.dK()
if(n.length!==0)P.O("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.f(n)))
r=a.d
o=a.e
J.dU(r.a,o)
m=this.e.f.length>0
o=a.f
r=a.bB()
l=a.Q
k=a.z
s.toString
if(m)J.lO(s.a,o)
if(l!==-1)if(k>1)J.m1(s.a,o,r,l,0,k)
else J.m0(s.a,o,r,l,0)
else if(k>1)J.m_(s.a,o,0,r,k)
else J.lZ(s.a,o,0,r)
if(m)J.m4(s.a)
C.a.j(c,new G.ei(this.a,a.z,a.bB(),o,P.mI(0,0,0,Date.now()-new P.aU(t,!1).a,0,0)))},
dG:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j
t=this.d
s=this.e
r=s.b
q=this.f
p=q.b
o=s.f
n=J.lV(t.a)
m=G.lb(t.a,35633,r)
J.ka(t.a,n,m)
l=G.lb(t.a,35632,p)
J.ka(t.a,n,l)
if(o.length>0)J.mp(t.a,n,o,35980)
J.mg(t.a,n)
if(!J.mf(t.a,n,35714))H.H(J.me(t.a,n))
this.r=n
this.sdU(0,P.jN(s.c,null))
for(s=s.d,r=s.length,p=this.y,k=0;k<s.length;s.length===r||(0,H.C)(s),++k){j=s[k]
o=this.r
p.i(0,j,J.ke(t.a,o,j))}for(s=q.d,r=s.length,k=0;k<s.length;s.length===r||(0,H.C)(s),++k){j=s[k]
q=this.r
p.i(0,j,J.ke(t.a,q,j))}},
sdU:function(a,b){this.x=b}}
G.i.prototype={
bC:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.b(!1)
return-1}}}
G.aL.prototype={
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
if(H.aA($.$get$X().A(0,q)))H.aO("missing uniform "+q)
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
dH:function(a,b){H.b(this.b==null)
this.b=this.bH(!1,a,b)},
bE:function(a){return this.dH(a,null)},
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
G.h2.prototype={
ff:function(a0,a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
t=this.d.a
s=t[12]
r=t[13]
q=t[14]
a1=new T.n(new Float32Array(H.m(3)))
a1.Z(0,1,0)
p=this.e
o=p.a
o[0]=t[12]
o[1]=t[13]
o[2]=t[14]
o=new Float32Array(H.m(3))
n=new T.n(o)
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
b7:function(a){return this.ff(a,null)}}
G.hm.prototype={
dC:function(a,b){var t=this.e
if(t!==1)J.mn(a.a,b,34046,t)
t=this.r
J.dX(a.a,b,10240,t)
t=this.f
J.dX(a.a,b,10241,t)
if(this.b){J.dX(a.a,b,10242,33071)
J.dX(a.a,b,10243,33071)}}}
G.bZ.prototype={
l:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.hy.prototype={
l:function(a){return"TypedTextureMutable["+this.a+", "+this.x+", "+this.f+" X "+this.r+"]"}}
R.e4.prototype={}
R.h6.prototype={
dQ:function(a,b,c,d){var t,s,r,q,p
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
p=(r&&C.o).bP(r,"float")
r.setProperty(p,"left","")
p=C.o.bP(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.k.P(t,s)}return t},
dI:function(a,b,c){var t,s,r
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
r=this.dQ(b,c,90,30)
this.d=r
J.jv(this.a,r)
t=t.createElement("div")
this.c=t
J.jv(this.a,t)}}
R.h7.prototype={
dM:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.i.fA(s,2)+" fps"
t=this.c;(t&&C.k).dd(t,b)
r=C.b.G(30*C.i.eE(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.k).P(t,q)},
dL:function(a){return this.dM(a,"")}}
A.bl.prototype={
l:function(a){return"NODE["+this.a+"]"}}
A.bo.prototype={}
A.fR.prototype={
dw:function(a){var t,s,r,q,p,o,n,m,l,k
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
C.a.j(m,new G.dD(P.I(),"transforms",!1,!0))
l=new T.B(new Float32Array(16))
l.F()
for(q=n.f,p=q.length,k=0;k<q.length;q.length===p||(0,H.C)(q),++k)A.lu(r,q[k],l,a,m)
m.pop()}}}
D.fa.prototype={
$1:function(a){this.a.aB(0,C.K.eO(W.ny(this.b.response)))},
$S:function(){return{func:1,args:[,]}}}
A.j6.prototype={
$2:function(a,b){var t=536870911&a+J.aq(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(){return{func:1,args:[P.q,P.o]}}}
T.au.prototype={
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
i:function(a,b,c){C.f.i(this.a,b,c)},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.au){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gu:function(a){return A.dP(this.a)},
S:function(a){var t,s
t=new Float32Array(H.m(3))
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.n(t)},
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
i:function(a,b,c){C.f.i(this.a,b,c)},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.B){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gu:function(a){return A.dP(this.a)},
S:function(a){var t,s
t=new Float32Array(H.m(4))
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.a2(t)},
E:function(a,b){var t=new T.B(new Float32Array(H.m(16)))
t.B(this)
t.a0(0,b)
return t},
cC:function(a){var t,s,r,q,p,o,n,m,l,k,j,i
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
d1:function(a,b,c,d){var t,s,r,q
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
T:function(a,b){return this.d1(a,b,null,null)},
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
t=new T.n(new Float32Array(H.m(3)))
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
i:function(a,b,c){C.f.i(this.a,b,c)},
l:function(a){var t=this.a
return H.f(t[0])+", "+H.f(t[1])+", "+H.f(t[2])+" @ "+H.f(t[3])}}
T.az.prototype={
l:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+"]"},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.az){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gu:function(a){return A.dP(this.a)},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.f.i(this.a,b,c)},
gk:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.n.prototype={
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
if(b instanceof T.n){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gu:function(a){return A.dP(this.a)},
E:function(a,b){var t=new T.n(new Float32Array(H.m(3)))
t.B(this)
t.T(0,b)
return t},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.f.i(this.a,b,c)},
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
t=new T.n(new Float32Array(H.m(3)))
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
gu:function(a){return A.dP(this.a)},
E:function(a,b){var t=new T.a2(new Float32Array(H.m(4)))
t.B(this)
t.T(0,b)
return t},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.f.i(this.a,b,c)},
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
B.jk.prototype={
$1:function(a){var t,s,r
t=this.a
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.O("size change "+H.f(s)+" "+H.f(r))
this.b.dt(s,r)
t=this.c
t.z=s
t.Q=r},
$S:function(){return{func:1,v:true,args:[W.j]}}}
B.ji.prototype={
$1:function(a){var t=H.aE(W.nx(a.target),"$isbI")
P.O(H.f(t.id)+" toggle "+H.f(t.checked))
this.a.h(0,t.id).c=t.checked},
$S:function(){return{func:1,args:[W.j]}}}
B.jh.prototype={
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
s.id=0}r=H.a4(C.c.eF(s.id,-1.4707963267948965,1.4707963267948965))
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
this.d.dw([])
C.a6.gey(window).bc(this)
this.b.dL(a9)
a7=a9/1000
this.e.d.i(0,"uTime",C.b.bo(C.i.f1(a7/0.0333),t.c.length))
t=t.a
a6=t.c
a5=t.a
m=t.d
L.jT(a6,a5,m,t.e,C.i.bo(a7,m.c))
a8=R.ko(a6,t.e,1)
t.b.bA(G.eK(a8,null))},
$S:function(){return{func:1,v:true,args:[P.Y]}}}
B.jj.prototype={
$1:function(a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=new T.B(new Float32Array(H.m(16)))
t.F()
s=J.A(a4)
r=Y.mS(s.h(a4,0))
q=Y.mT(s.h(a4,0))
p=Y.mR(s.h(a4,0),q)
s=this.c
o=s.d
n=r[0]
m=o.d
l=new G.dh(m,J.kc(m.a),4,P.I(),o.e.x,null,0,-1,null,null,P.I(),"meshdata:../asset/knight/knight.js",!1,!0)
l.bx(G.eK(n.d,null))
o=n.dA()
l.y=J.dV(m.a)
l.bz(o)
G.nr(n,l)
o=this.r
n=new Float32Array(H.m(9))
m=new T.B(new Float32Array(H.m(16)))
m.F()
k=new T.B(new Float32Array(H.m(16)))
k.F()
j=new Float32Array(H.m(3))
i=new Float32Array(H.m(3))
h=new Float32Array(H.m(3))
g=new Float32Array(H.m(3))
k.cC(-0.785)
f=[]
e=new Float32Array(H.m(9))
d=new T.B(new Float32Array(H.m(16)))
d.F()
c=new T.B(new Float32Array(H.m(16)))
c.F()
b=new A.bl(null,null,f,new T.au(e),d,c,new T.n(new Float32Array(H.m(3))),new T.n(new Float32Array(H.m(3))),new T.n(new Float32Array(H.m(3))),new T.n(new Float32Array(H.m(3))),"wrapper",!1,!0)
C.a.j(f,new A.bl(o,l,[],new T.au(n),m,k,new T.n(j),new T.n(i),new T.n(h),new T.n(g),"meshdata:../asset/knight/knight.js",!1,!0))
n=new T.n(new Float32Array(H.m(3)))
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
a1=new G.hy(k,j,34836,"anim",h,3553,n,i)
J.dT(n.a,3553,h)
J.mm(n.a,3553,0,34836,k,j,0,6408,5126,a0)
i.dC(n,3553)
a2=J.md(n.a)
if(H.aA(a2===0))H.aO("texture error "+H.f(a2))
J.dT(n.a,3553,null)
s.b=a1
o.a4("uAnimationTable",a1)
o=this.d
n=new T.B(new Float32Array(H.m(16)))
n.F()
a3=new R.e4(n,null,q,p,null,null)
m=L.kl(m)
a3.e=m
L.jT(q,n,p,m,0)
m=G.n2("wire",o.d,R.ko(q,m,1))
a3.b=m
n=new Float32Array(H.m(9))
k=new T.B(new Float32Array(H.m(16)))
k.F()
j=new T.B(new Float32Array(H.m(16)))
j.F()
m=new A.bl(this.f,m,[],new T.au(n),k,j,new T.n(new Float32Array(H.m(3))),new T.n(new Float32Array(H.m(3))),new T.n(new Float32Array(H.m(3))),new T.n(new Float32Array(H.m(3))),m.a,!1,!0)
a3.f=m
s.a=a3
j.cC(0.785)
j=[]
s=new Float32Array(H.m(9))
k=new T.B(new Float32Array(H.m(16)))
k.F()
n=new T.B(new Float32Array(H.m(16)))
n.F()
b=new A.bl(null,null,j,new T.au(s),k,n,new T.n(new Float32Array(H.m(3))),new T.n(new Float32Array(H.m(3))),new T.n(new Float32Array(H.m(3))),new T.n(new Float32Array(H.m(3))),"wrapper",!1,!0)
C.a.j(j,m)
s=new T.n(new Float32Array(H.m(3)))
s.Z(100,0,0)
b.b7(s)
H.b(!0)
C.a.j(o.f,b)
this.x.$1(0)},
$S:function(){return{func:1,args:[P.c]}}}
J.a.prototype.di=J.a.prototype.l
J.bJ.prototype.dk=J.bJ.prototype.l
P.a_.prototype.dj=P.a_.prototype.aF
W.a7.prototype.aI=W.a7.prototype.N
W.c5.prototype.dl=W.c5.prototype.V;(function installTearOffs(){installTearOff(H.b7.prototype,"gfd",0,0,0,null,["$0"],["aD"],0)
installTearOff(H.an.prototype,"gd3",0,0,0,null,["$1"],["L"],2)
installTearOff(H.b6.prototype,"geT",0,0,0,null,["$1"],["X"],2)
installTearOff(P,"nI",1,0,0,null,["$1"],["nl"],1)
installTearOff(P,"nJ",1,0,0,null,["$1"],["nm"],1)
installTearOff(P,"nK",1,0,0,null,["$1"],["nn"],1)
installTearOff(P,"lr",1,0,0,null,["$0"],["nG"],0)
installTearOff(P.T.prototype,"gdX",0,0,0,null,["$2","$1"],["J","dY"],5)
installTearOff(P,"nQ",1,0,0,null,["$2"],["mC"],6)
installTearOff(W,"nV",1,0,0,null,["$1"],["mK"],7)
installTearOff(W,"nW",1,0,0,null,["$4"],["ns"],4)
installTearOff(W,"nX",1,0,0,null,["$4"],["nt"],4)
installTearOff(W.dn.prototype,"gb9",0,1,0,null,["$0"],["ba"],3)
installTearOff(W.dC.prototype,"gb9",0,1,0,null,["$0"],["ba"],3)
installTearOff(B,"lm",1,0,0,null,["$0"],["o4"],0)})();(function inheritance(){inherit(P.o,null)
var t=P.o
inherit(H.jJ,t)
inherit(J.a,t)
inherit(J.e1,t)
inherit(P.a_,t)
inherit(H.df,t)
inherit(P.db,t)
inherit(H.cs,t)
inherit(H.be,t)
inherit(H.iu,t)
inherit(H.b7,t)
inherit(H.i0,t)
inherit(H.b8,t)
inherit(H.it,t)
inherit(H.hT,t)
inherit(H.bn,t)
inherit(H.ho,t)
inherit(H.as,t)
inherit(H.an,t)
inherit(H.b6,t)
inherit(H.fQ,t)
inherit(H.hv,t)
inherit(P.bg,t)
inherit(H.dM,t)
inherit(H.aM,t)
inherit(H.aj,t)
inherit(H.f6,t)
inherit(H.f8,t)
inherit(P.hV,t)
inherit(P.dJ,t)
inherit(P.T,t)
inherit(P.dF,t)
inherit(P.h9,t)
inherit(P.ha,t)
inherit(P.bd,t)
inherit(P.iS,t)
inherit(P.fZ,t)
inherit(P.ir,t)
inherit(P.c3,t)
inherit(P.bS,t)
inherit(P.y,t)
inherit(P.is,t)
inherit(P.ip,t)
inherit(P.cj,t)
inherit(P.ck,t)
inherit(P.aB,t)
inherit(P.K,t)
inherit(P.aU,t)
inherit(P.Y,t)
inherit(P.aG,t)
inherit(P.dx,t)
inherit(P.i5,t)
inherit(P.eO,t)
inherit(P.em,t)
inherit(P.c,t)
inherit(P.aK,t)
inherit(P.b_,t)
inherit(P.bV,t)
inherit(P.t,t)
inherit(P.bW,t)
inherit(W.ea,t)
inherit(W.hS,t)
inherit(W.c2,t)
inherit(W.E,t)
inherit(W.dq,t)
inherit(W.c5,t)
inherit(W.iK,t)
inherit(W.ct,t)
inherit(W.hX,t)
inherit(W.dp,t)
inherit(W.iE,t)
inherit(W.dN,t)
inherit(P.hK,t)
inherit(P.iw,t)
inherit(G.fk,t)
inherit(L.cg,t)
inherit(L.e_,t)
inherit(L.ch,t)
inherit(L.h0,t)
inherit(G.e8,t)
inherit(G.eP,t)
inherit(G.eF,t)
inherit(G.eG,t)
inherit(G.eS,t)
inherit(G.dB,t)
inherit(G.dA,t)
inherit(G.ei,t)
inherit(G.i,t)
inherit(G.aL,t)
inherit(G.hm,t)
inherit(G.bZ,t)
inherit(R.e4,t)
inherit(R.h6,t)
inherit(T.au,t)
inherit(T.B,t)
inherit(T.bT,t)
inherit(T.az,t)
inherit(T.n,t)
inherit(T.a2,t)
t=J.a
inherit(J.f_,t)
inherit(J.f0,t)
inherit(J.bJ,t)
inherit(J.aW,t)
inherit(J.bi,t)
inherit(J.aX,t)
inherit(H.bM,t)
inherit(H.bk,t)
inherit(W.h,t)
inherit(W.a6,t)
inherit(W.cf,t)
inherit(W.e6,t)
inherit(W.D,t)
inherit(W.cx,t)
inherit(W.ec,t)
inherit(W.ed,t)
inherit(W.ee,t)
inherit(W.co,t)
inherit(W.cp,t)
inherit(W.cq,t)
inherit(W.cI,t)
inherit(W.eh,t)
inherit(W.j,t)
inherit(W.cH,t)
inherit(W.a9,t)
inherit(W.eT,t)
inherit(W.cM,t)
inherit(W.fb,t)
inherit(W.fh,t)
inherit(W.aa,t)
inherit(W.cG,t)
inherit(W.ft,t)
inherit(W.dn,t)
inherit(W.cL,t)
inherit(W.fC,t)
inherit(W.bp,t)
inherit(W.ab,t)
inherit(W.cE,t)
inherit(W.am,t)
inherit(W.dt,t)
inherit(W.ad,t)
inherit(W.cD,t)
inherit(W.ae,t)
inherit(W.h8,t)
inherit(W.a0,t)
inherit(W.cC,t)
inherit(W.hn,t)
inherit(W.ag,t)
inherit(W.cN,t)
inherit(W.hs,t)
inherit(W.dC,t)
inherit(W.hA,t)
inherit(W.hF,t)
inherit(W.hU,t)
inherit(W.cB,t)
inherit(W.cR,t)
inherit(W.cQ,t)
inherit(W.cK,t)
inherit(W.cP,t)
inherit(W.cO,t)
inherit(W.iQ,t)
inherit(W.iR,t)
inherit(P.at,t)
inherit(P.cA,t)
inherit(P.av,t)
inherit(P.cF,t)
inherit(P.fI,t)
inherit(P.fJ,t)
inherit(P.fO,t)
inherit(P.cy,t)
inherit(P.aw,t)
inherit(P.cJ,t)
inherit(P.hE,t)
inherit(P.e2,t)
inherit(P.fT,t)
inherit(P.fU,t)
inherit(P.iP,t)
inherit(P.cz,t)
t=J.bJ
inherit(J.fG,t)
inherit(J.b3,t)
inherit(J.aY,t)
inherit(J.jI,J.aW)
t=J.bi
inherit(J.dd,t)
inherit(J.dc,t)
t=P.a_
inherit(H.d,t)
inherit(H.dg,t)
inherit(H.dE,t)
t=H.d
inherit(H.bj,t)
inherit(H.f7,t)
inherit(H.el,H.dg)
t=P.db
inherit(H.fc,t)
inherit(H.hH,t)
t=H.bj
inherit(H.bK,t)
inherit(P.f9,t)
t=H.be
inherit(H.js,t)
inherit(H.jt,t)
inherit(H.io,t)
inherit(H.i1,t)
inherit(H.eW,t)
inherit(H.eX,t)
inherit(H.iv,t)
inherit(H.hp,t)
inherit(H.hq,t)
inherit(H.ju,t)
inherit(H.jb,t)
inherit(H.jc,t)
inherit(H.jd,t)
inherit(H.je,t)
inherit(H.jf,t)
inherit(H.hi,t)
inherit(H.f1,t)
inherit(H.j7,t)
inherit(H.j8,t)
inherit(H.j9,t)
inherit(P.hP,t)
inherit(P.hO,t)
inherit(P.hQ,t)
inherit(P.hR,t)
inherit(P.eR,t)
inherit(P.eQ,t)
inherit(P.i6,t)
inherit(P.ie,t)
inherit(P.ia,t)
inherit(P.ib,t)
inherit(P.ic,t)
inherit(P.i8,t)
inherit(P.id,t)
inherit(P.i7,t)
inherit(P.ii,t)
inherit(P.ij,t)
inherit(P.ih,t)
inherit(P.ig,t)
inherit(P.hb,t)
inherit(P.hc,t)
inherit(P.iW,t)
inherit(P.iz,t)
inherit(P.iy,t)
inherit(P.iA,t)
inherit(P.fd,t)
inherit(P.ej,t)
inherit(P.ek,t)
inherit(W.iX,t)
inherit(W.hI,t)
inherit(W.i4,t)
inherit(W.fv,t)
inherit(W.fu,t)
inherit(W.iG,t)
inherit(W.iH,t)
inherit(W.iN,t)
inherit(W.iO,t)
inherit(P.hM,t)
inherit(P.iY,t)
inherit(P.iZ,t)
inherit(P.j_,t)
inherit(B.jn,t)
inherit(B.jo,t)
inherit(B.jp,t)
inherit(B.jq,t)
inherit(B.jr,t)
inherit(B.fy,t)
inherit(B.fz,t)
inherit(B.fA,t)
inherit(B.fB,t)
inherit(D.fa,t)
inherit(A.j6,t)
inherit(B.jk,t)
inherit(B.ji,t)
inherit(B.jh,t)
inherit(B.jj,t)
t=H.hT
inherit(H.br,t)
inherit(H.c6,t)
t=P.bg
inherit(H.dr,t)
inherit(H.f2,t)
inherit(H.hz,t)
inherit(H.hx,t)
inherit(H.e7,t)
inherit(H.fW,t)
inherit(P.ce,t)
inherit(P.bm,t)
inherit(P.ah,t)
inherit(P.w,t)
inherit(P.c_,t)
inherit(P.al,t)
inherit(P.Z,t)
inherit(P.eb,t)
t=H.hi
inherit(H.h5,t)
inherit(H.by,t)
inherit(H.hN,P.ce)
t=H.bk
inherit(H.fl,t)
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
inherit(H.fm,t)
t=H.dl
inherit(H.fn,t)
inherit(H.fo,t)
inherit(H.fp,t)
inherit(H.fq,t)
inherit(H.fr,t)
inherit(H.dm,t)
inherit(H.fs,t)
t=P.hV
inherit(P.dG,t)
inherit(P.iL,t)
inherit(P.ix,P.iS)
inherit(P.dK,H.aj)
inherit(P.fY,P.fZ)
inherit(P.im,P.fY)
inherit(P.iq,P.im)
inherit(P.de,P.bS)
inherit(P.f3,P.cj)
inherit(P.f4,P.ck)
t=P.Y
inherit(P.Q,t)
inherit(P.q,t)
t=P.ah
inherit(P.du,t)
inherit(P.eV,t)
t=W.h
inherit(W.u,t)
inherit(W.bC,t)
inherit(W.e9,t)
inherit(W.eI,t)
inherit(W.bH,t)
inherit(W.bL,t)
inherit(W.fL,t)
inherit(W.dv,t)
inherit(W.h_,t)
inherit(W.ac,t)
inherit(W.bB,t)
inherit(W.af,t)
inherit(W.a1,t)
inherit(W.bA,t)
inherit(W.hC,t)
inherit(W.hG,t)
inherit(W.c0,t)
inherit(W.hJ,t)
inherit(W.b5,t)
inherit(W.iF,t)
t=W.u
inherit(W.a7,t)
inherit(W.aT,t)
inherit(W.aV,t)
inherit(W.cn,t)
inherit(W.hY,t)
t=W.a7
inherit(W.l,t)
inherit(P.J,t)
t=W.l
inherit(W.dZ,t)
inherit(W.e0,t)
inherit(W.aS,t)
inherit(W.ci,t)
inherit(W.cm,t)
inherit(W.eN,t)
inherit(W.cu,t)
inherit(W.bI,t)
inherit(W.fX,t)
inherit(W.dy,t)
inherit(W.hg,t)
inherit(W.hh,t)
inherit(W.bX,t)
inherit(W.il,t)
inherit(W.bF,W.bC)
inherit(W.e3,W.bF)
inherit(W.bf,W.cx)
inherit(W.ef,W.cp)
inherit(W.da,W.cI)
inherit(W.eg,W.da)
inherit(W.a8,W.cf)
inherit(W.d8,W.cH)
inherit(W.eH,W.d8)
inherit(W.cW,W.cM)
inherit(W.bG,W.cW)
inherit(W.cv,W.aV)
inherit(W.cw,W.bH)
inherit(W.aN,W.j)
t=W.aN
inherit(W.aZ,t)
inherit(W.S,t)
inherit(W.b2,t)
inherit(W.fi,W.bL)
inherit(W.d2,W.cG)
inherit(W.fj,W.d2)
inherit(W.W,P.de)
inherit(W.d3,W.cL)
inherit(W.bR,W.d3)
t=W.bp
inherit(W.fF,t)
inherit(W.fV,t)
inherit(W.hu,t)
inherit(W.d4,W.cE)
inherit(W.fH,W.d4)
inherit(W.fK,W.am)
inherit(W.bE,W.bB)
inherit(W.h1,W.bE)
inherit(W.d0,W.cD)
inherit(W.h3,W.d0)
inherit(W.cX,W.cC)
inherit(W.hk,W.cX)
inherit(W.bD,W.bA)
inherit(W.hl,W.bD)
inherit(W.d6,W.cN)
inherit(W.hr,W.d6)
inherit(W.b4,W.S)
inherit(W.d7,W.cB)
inherit(W.dH,W.d7)
inherit(W.d5,W.cR)
inherit(W.hW,W.d5)
inherit(W.hZ,W.cq)
inherit(W.cS,W.cQ)
inherit(W.ik,W.cS)
inherit(W.d9,W.cK)
inherit(W.dL,W.d9)
inherit(W.cZ,W.cP)
inherit(W.iI,W.cZ)
inherit(W.cV,W.cO)
inherit(W.iJ,W.cV)
inherit(W.i_,W.hS)
inherit(W.i2,P.h9)
inherit(W.dI,W.i2)
inherit(W.i3,P.ha)
inherit(W.iM,W.c5)
inherit(P.hL,P.hK)
inherit(P.L,P.iw)
t=P.J
inherit(P.aI,t)
inherit(P.aR,t)
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
inherit(P.eJ,t)
inherit(P.fe,t)
inherit(P.ff,t)
inherit(P.fD,t)
inherit(P.bU,t)
inherit(P.hf,t)
inherit(P.hD,t)
inherit(P.c1,t)
inherit(P.iB,t)
inherit(P.iC,t)
inherit(P.iD,t)
t=P.aI
inherit(P.dY,t)
inherit(P.eM,t)
inherit(P.ai,t)
inherit(P.eU,t)
inherit(P.he,t)
inherit(P.dz,t)
inherit(P.hB,t)
inherit(P.cU,P.cA)
inherit(P.f5,P.cU)
inherit(P.d1,P.cF)
inherit(P.fw,P.d1)
inherit(P.fP,P.ai)
inherit(P.d_,P.cy)
inherit(P.hd,P.d_)
t=P.dz
inherit(P.hj,t)
inherit(P.bY,t)
inherit(P.cY,P.cJ)
inherit(P.ht,P.cY)
inherit(P.cT,P.cz)
inherit(P.h4,P.cT)
t=G.fk
inherit(G.h2,t)
inherit(G.dD,t)
inherit(G.dh,t)
inherit(G.fS,t)
inherit(A.bo,t)
inherit(A.fR,t)
t=G.h2
inherit(G.e5,t)
inherit(A.bl,t)
inherit(B.fx,G.e5)
t=G.dD
inherit(G.fg,t)
inherit(G.fE,t)
inherit(G.hy,G.bZ)
inherit(R.h7,R.h6)
mixin(H.bN,P.y)
mixin(H.bO,P.y)
mixin(H.bP,H.cs)
mixin(H.bQ,H.cs)
mixin(P.bS,P.y)
mixin(W.bA,P.y)
mixin(W.bB,P.y)
mixin(W.bC,P.y)
mixin(W.bD,W.E)
mixin(W.bE,W.E)
mixin(W.bF,W.E)
mixin(W.cx,W.ea)
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
mixin(P.cA,P.y)
mixin(P.cy,P.y)
mixin(P.cF,P.y)
mixin(P.cJ,P.y)
mixin(P.cU,W.E)
mixin(P.d1,W.E)
mixin(P.cY,W.E)
mixin(P.d_,W.E)
mixin(P.cz,P.y)
mixin(P.cT,W.E)})();(function constants(){C.j=W.aS.prototype
C.z=W.ci.prototype
C.o=W.bf.prototype
C.k=W.cm.prototype
C.A=W.co.prototype
C.B=W.cu.prototype
C.h=W.cv.prototype
C.q=W.cw.prototype
C.C=J.a.prototype
C.a=J.aW.prototype
C.i=J.dc.prototype
C.b=J.dd.prototype
C.c=J.bi.prototype
C.e=J.aX.prototype
C.J=J.aY.prototype
C.f=H.di.prototype
C.v=W.bR.prototype
C.w=J.fG.prototype
C.x=W.dt.prototype
C.y=W.dy.prototype
C.n=J.b3.prototype
C.a5=W.b4.prototype
C.a6=W.c0.prototype
C.d=new P.ix()
C.p=new P.aG(0)
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
C.K=new P.f3(null,null)
C.L=new P.f4(null)
C.M=H.x(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.t])
C.N=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.u=makeConstList([])
C.l=H.x(makeConstList(["bind","if","ref","repeat","syntax"]),[P.t])
C.m=H.x(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.t])
C.O=H.N("oe")
C.P=H.N("of")
C.Q=H.N("eL")
C.R=H.N("og")
C.S=H.N("oh")
C.T=H.N("kH")
C.U=H.N("oi")
C.V=H.N("kK")
C.W=H.N("b_")
C.X=H.N("t")
C.Y=H.N("l8")
C.Z=H.N("l9")
C.a_=H.N("ok")
C.a0=H.N("la")
C.a1=H.N("aB")
C.a2=H.N("Q")
C.a3=H.N("q")
C.a4=H.N("Y")})();(function staticFields(){$.kR="$cachedFunction"
$.kS="$cachedInvocation"
$.ks=null
$.kq=null
$.jX=!1
$.k1=null
$.ll=null
$.lD=null
$.j2=null
$.ja=null
$.k2=null
$.bs=null
$.c7=null
$.c8=null
$.jY=!1
$.z=C.d
$.kG=0
$.aH=null
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
t="expando$key$"+t}return new P.em(null,t,[P.q])})
lazy($,"kY","$get$kY",function(){return H.ax(H.hw({
toString:function(){return"$receiver$"}}))})
lazy($,"kZ","$get$kZ",function(){return H.ax(H.hw({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"l_","$get$l_",function(){return H.ax(H.hw(null))})
lazy($,"l0","$get$l0",function(){return H.ax(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"l4","$get$l4",function(){return H.ax(H.hw(void 0))})
lazy($,"l5","$get$l5",function(){return H.ax(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"l2","$get$l2",function(){return H.ax(H.l3(null))})
lazy($,"l1","$get$l1",function(){return H.ax(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"l7","$get$l7",function(){return H.ax(H.l3(void 0))})
lazy($,"l6","$get$l6",function(){return H.ax(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"jV","$get$jV",function(){return P.nk()})
lazy($,"c9","$get$c9",function(){return[]})
lazy($,"kx","$get$kx",function(){return{}})
lazy($,"le","$get$le",function(){return P.jN(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"jW","$get$jW",function(){return P.I()})
lazy($,"j1","$get$j1",function(){return P.jM(P.q,P.aB)})
lazy($,"cb","$get$cb",function(){return P.jM(P.t,P.aB)})
lazy($,"kV","$get$kV",function(){return new G.dB(1281,0,4294967295)})
lazy($,"kn","$get$kn",function(){return new G.dA(1281,1281,1281)})
lazy($,"X","$get$X",function(){return P.aJ(["cBlendEquation",new G.i("","",0),"cDepthWrite",new G.i("","",0),"cDepthTest",new G.i("","",0),"cStencilFunc",new G.i("","",0),"tPosition",new G.i("vec3","",0),"tSpeed",new G.i("vec3","",0),"tForce",new G.i("vec3","",0),"aColors",new G.i("vec3","per vertex color",0),"aColorAlpha",new G.i("vec4","per vertex color",0),"aPosition",new G.i("vec3","vertex coordinates",0),"aTexUV",new G.i("vec2","texture uvs",0),"aNormal",new G.i("vec3","vertex normals",0),"aBinormal",new G.i("vec3","vertex binormals",0),"aCenter",new G.i("vec4","for wireframe",0),"aPointSize",new G.i("float","",0),"aBoneIndex",new G.i("vec4","",0),"aBoneWeight",new G.i("vec4","",0),"aTangent",new G.i("vec3","vertex tangents",0),"aBitangent",new G.i("vec3","vertex btangents",0),"iaRotation",new G.i("vec4","",0),"iaTranslation",new G.i("vec3","",0),"iaScale",new G.i("vec3","",0),"vColor",new G.i("vec3","per vertex color",0),"vTexUV",new G.i("vec2","",0),"vLightWeighting",new G.i("vec3","",0),"vNormal",new G.i("vec3","",0),"vPosition",new G.i("vec3","vertex coordinates",0),"vPositionFromLight",new G.i("vec4","delta from light",0),"vCenter",new G.i("vec4","for wireframe",0),"vDepth",new G.i("float","depth for shadowmaps",0),"uTransformationMatrix",new G.i("mat4","",0),"uModelMatrix",new G.i("mat4","",0),"uNormalMatrix",new G.i("mat3","",0),"uConvolutionMatrix",new G.i("mat3","",0),"uPerspectiveViewMatrix",new G.i("mat4","",0),"uLightPerspectiveViewMatrix",new G.i("mat4","",0),"uShadowMap",new G.i("sampler2DShadow","",0),"uTexture",new G.i("sampler2D","",0),"uTexture2",new G.i("sampler2D","",0),"uTexture3",new G.i("sampler2D","",0),"uTexture4",new G.i("sampler2D","",0),"uSpecularMap",new G.i("sampler2D","",0),"uNormalMap",new G.i("sampler2D","",0),"uBumpMap",new G.i("sampler2D","",0),"uDepthMap",new G.i("sampler2D","",0),"uCubeTexture",new G.i("samplerCube","",0),"uAnimationTable",new G.i("sampler2D","",0),"uTime",new G.i("float","time since program start in sec",0),"uCameraNear",new G.i("float","",0),"uCameraFar",new G.i("float","",0),"uFogNear",new G.i("float","",0),"uFogFar",new G.i("float","",0),"uPointSize",new G.i("float","",0),"uScale",new G.i("float","",0),"uAngle",new G.i("float","",0),"uCanvasSize",new G.i("vec2","",0),"uCenter2",new G.i("vec2","",0),"uCutOff",new G.i("float","",0),"uShininess",new G.i("float","",0),"uShadowBias",new G.i("float","",0),"uOpacity",new G.i("float","",0),"uColor",new G.i("vec3","",0),"uAmbientDiffuse",new G.i("vec3","",0),"uColorEmissive",new G.i("vec3","",0),"uColorSpecular",new G.i("vec3","",0),"uColorDiffuse",new G.i("vec3","",0),"uColorAlpha",new G.i("vec4","",0),"uColorAlpha2",new G.i("vec4","",0),"uEyePosition",new G.i("vec3","",0),"uMaterial",new G.i("mat4","",0),"uRange",new G.i("vec2","",0),"uDirection",new G.i("vec2","",0),"uBoneMatrices",new G.i("mat4","",128),"uLightDescs",new G.i("mat4","",4),"uLightCount",new G.i("float","",0),"uLightTypes",new G.i("float","",4),"uBumpScale",new G.i("float","for bump maps",0),"uNormalScale",new G.i("float","for normal maps",0)])})
lazy($,"kX","$get$kX",function(){var t=new G.hm(!1,!1,!1,!0,1,9729,9729)
t.d=!1
t.b=!0
t.f=9728
t.r=9728
return t})
lazy($,"lF","$get$lF",function(){var t=new G.aL("SolidColor",null,[],[],[],[],0,P.I())
t.aJ(["aPosition"])
t.au(["uPerspectiveViewMatrix","uModelMatrix"])
t.aK(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"])
return t})
lazy($,"lE","$get$lE",function(){var t=new G.aL("SolidColorF",null,[],[],[],[],0,P.I())
t.au(["uColor"])
t.aK(["oFragColor = vec4( uColor, 1.0 );"])
return t})
lazy($,"lt","$get$lt",function(){var t=new G.aL("FixedVertexColorV",null,[],[],[],[],0,P.I())
t.aJ(["aPosition"])
t.au(["uPerspectiveViewMatrix","uModelMatrix"])
t.av(["vColor"])
t.bF(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vColor = ColorFromPosition(aPosition);"],["// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"])
return t})
lazy($,"ls","$get$ls",function(){var t=new G.aL("FixedVertexColorF",null,[],[],[],[],0,P.I())
t.av(["vColor"])
t.aK(["oFragColor = vec4( vColor, 1.0 );"])
return t})
lazy($,"lo","$get$lo",function(){var t=new G.aL("AnimationV",null,[],[],[],[],0,P.I())
t.aJ(["aPosition","aBoneIndex","aBoneWeight"])
t.av(["vColor"])
t.au(["uPerspectiveViewMatrix","uModelMatrix","uAnimationTable","uTime"])
t.bE(["mat4 GetBoneMatrix(sampler2D table, int index, int time) {\n    vec4 v1 = texelFetch(table, ivec2(index * 4 + 0, time), 0);\n    vec4 v2 = texelFetch(table, ivec2(index * 4 + 1, time), 0);\n    vec4 v3 = texelFetch(table, ivec2(index * 4 + 2, time), 0);\n    vec4 v4 = texelFetch(table, ivec2(index * 4 + 3, time), 0);\n    return mat4(v1, v2, v3, v4);\n    //return uBoneMatrices[index];\n}\n\nmat4 adjustMatrix(sampler2D table, vec4 weights, ivec4 indices, int time) {\n    return weights.x * GetBoneMatrix(table, indices.x, time) +\n           weights.y * GetBoneMatrix(table, indices.y, time) +\n           weights.z * GetBoneMatrix(table, indices.z, time) +\n           weights.w * GetBoneMatrix(table, indices.w, time);\n}\n\nvoid main() {\n   mat4 skinMat = uModelMatrix * adjustMatrix(uAnimationTable,\n                                              aBoneWeight,\n                                              ivec4(aBoneIndex),\n                                              int(uTime));\n   vec4 pos = skinMat * vec4(aPosition, 1.0);\n   // vPosition = pos.xyz;\n   // This is not quite accurate\n   //vNormal = normalize(mat3(skinMat) * aNormal);\n   gl_Position = uPerspectiveViewMatrix * pos;\n\n\n   vColor = vec3( sin(aPosition.x)/2.0+0.5,\n                      cos(aPosition.y)/2.0+0.5,\n                      sin(aPosition.z)/2.0+0.5);\n   //vTexUV = aTexUV;\n}\n\n"])
return t})
lazy($,"ln","$get$ln",function(){var t=new G.aL("AnimationV",null,[],[],[],[],0,P.I())
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
mangledGlobalNames:{q:"int",Q:"double",Y:"num",t:"String",aB:"bool",b_:"Null",c:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.u},{func:1,ret:P.aB,args:[W.a7,P.t,P.t,W.c2]},{func:1,v:true,args:[P.o],opt:[P.bV]},{func:1,ret:P.q,args:[P.K,P.K]},{func:1,ret:P.t,args:[W.h]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationTimeline:J.a,AppBannerPromptResult:J.a,BarProp:J.a,Body:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CHROMIUMValuebuffer:J.a,CircularGeofencingRegion:J.a,Client:J.a,Clients:J.a,CompositorProxy:J.a,ConsoleBase:J.a,Coordinates:J.a,Credential:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMStringMap:J.a,EffectModel:J.a,Entry:J.a,FederatedCredential:J.a,FileEntry:J.a,FileError:J.a,Stream:J.a,DOMFileSystem:J.a,FontFace:J.a,FormData:J.a,GamepadButton:J.a,Geofencing:J.a,GeofencingRegion:J.a,Geolocation:J.a,Geoposition:J.a,Headers:J.a,HMDVRDevice:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageData:J.a,InjectedScriptHost:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,KeyframeEffect:J.a,MediaDeviceInfo:J.a,MediaDevices:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaMetadata:J.a,MediaSession:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigatorStorageUtils:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,OffscreenCanvas:J.a,PasswordCredential:J.a,PerformanceCompositeTiming:J.a,PerformanceEntry:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformanceRenderTiming:J.a,PerformanceResourceTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PositionError:J.a,PositionSensorVRDevice:J.a,Presentation:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,ReadableByteStream:J.a,ReadableByteStreamReader:J.a,ReadableStreamReader:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,Selection:J.a,ServicePort:J.a,SharedArrayBuffer:J.a,SourceInfo:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StorageInfo:J.a,StorageManager:J.a,StorageQuota:J.a,StyleMedia:J.a,StylePropertyMap:J.a,SyncManager:J.a,TextMetrics:J.a,TrackDefault:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRDevice:J.a,VREyeParameters:J.a,VRFieldOfView:J.a,VRPositionState:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkerConsole:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothAdvertisingData:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,NFC:J.a,PagePopupController:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WebKitCSSMatrix:J.a,Worklet:J.a,WorkletGlobalScope:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPreserveAspectRatio:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,CHROMIUMSubscribeUniform:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTDisjointTimerQuery:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bM,ArrayBufferView:H.bk,DataView:H.fl,Float32Array:H.di,Float64Array:H.fm,Int16Array:H.fn,Int32Array:H.fo,Int8Array:H.fp,Uint16Array:H.fq,Uint32Array:H.fr,Uint8ClampedArray:H.dm,CanvasPixelArray:H.dm,Uint8Array:H.fs,HTMLAudioElement:W.l,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLImageElement:W.l,HTMLKeygenElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMediaElement:W.l,HTMLMenuElement:W.l,HTMLMenuItemElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTextAreaElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLVideoElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,HTMLAnchorElement:W.dZ,HTMLAreaElement:W.e0,AudioTrack:W.a6,AudioTrackList:W.e3,Blob:W.cf,HTMLBodyElement:W.aS,HTMLCanvasElement:W.ci,CanvasRenderingContext2D:W.e6,CDATASection:W.aT,CharacterData:W.aT,Comment:W.aT,ProcessingInstruction:W.aT,Text:W.aT,CompositorWorker:W.e9,CSSCharsetRule:W.D,CSSFontFaceRule:W.D,CSSGroupingRule:W.D,CSSImportRule:W.D,CSSKeyframeRule:W.D,MozCSSKeyframeRule:W.D,WebKitCSSKeyframeRule:W.D,CSSKeyframesRule:W.D,MozCSSKeyframesRule:W.D,WebKitCSSKeyframesRule:W.D,CSSMediaRule:W.D,CSSNamespaceRule:W.D,CSSPageRule:W.D,CSSRule:W.D,CSSStyleRule:W.D,CSSSupportsRule:W.D,CSSViewportRule:W.D,CSSStyleDeclaration:W.bf,MSStyleCSSProperties:W.bf,CSS2Properties:W.bf,DataTransferItemList:W.ec,DeviceAcceleration:W.ed,HTMLDivElement:W.cm,XMLDocument:W.aV,Document:W.aV,DocumentFragment:W.cn,ShadowRoot:W.cn,DOMException:W.ee,DOMImplementation:W.co,DOMPoint:W.ef,DOMPointReadOnly:W.cp,DOMRectReadOnly:W.cq,DOMStringList:W.eg,DOMTokenList:W.eh,Element:W.a7,AnimationEvent:W.j,AnimationPlayerEvent:W.j,ApplicationCacheErrorEvent:W.j,AutocompleteErrorEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceLightEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,GamepadEvent:W.j,GeofencingEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RelatedEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCIceCandidateEvent:W.j,RTCPeerConnectionIceEvent:W.j,SecurityPolicyViolationEvent:W.j,ServicePortConnectEvent:W.j,ServiceWorkerMessageEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,Animation:W.h,ApplicationCache:W.h,DOMApplicationCache:W.h,OfflineResourceList:W.h,BatteryManager:W.h,CanvasCaptureMediaStreamTrack:W.h,CrossOriginServiceWorkerClient:W.h,EventSource:W.h,FileReader:W.h,FontFaceSet:W.h,MediaKeySession:W.h,MediaQueryList:W.h,MediaRecorder:W.h,MediaSource:W.h,MediaStream:W.h,MediaStreamTrack:W.h,MessagePort:W.h,MIDIAccess:W.h,NetworkInformation:W.h,Notification:W.h,Performance:W.h,PermissionStatus:W.h,PresentationAvailability:W.h,PresentationReceiver:W.h,PresentationRequest:W.h,RTCDTMFSender:W.h,RTCPeerConnection:W.h,webkitRTCPeerConnection:W.h,mozRTCPeerConnection:W.h,ScreenOrientation:W.h,ServicePortCollection:W.h,ServiceWorkerContainer:W.h,ServiceWorkerRegistration:W.h,SpeechRecognition:W.h,SpeechSynthesis:W.h,SpeechSynthesisUtterance:W.h,WorkerPerformance:W.h,BluetoothDevice:W.h,BluetoothRemoteGATTCharacteristic:W.h,USB:W.h,IDBDatabase:W.h,IDBOpenDBRequest:W.h,IDBVersionChangeRequest:W.h,IDBRequest:W.h,IDBTransaction:W.h,AnalyserNode:W.h,RealtimeAnalyserNode:W.h,AudioBufferSourceNode:W.h,AudioContext:W.h,webkitAudioContext:W.h,AudioDestinationNode:W.h,AudioNode:W.h,AudioSourceNode:W.h,BiquadFilterNode:W.h,ChannelMergerNode:W.h,AudioChannelMerger:W.h,ChannelSplitterNode:W.h,AudioChannelSplitter:W.h,ConvolverNode:W.h,DelayNode:W.h,DynamicsCompressorNode:W.h,GainNode:W.h,AudioGainNode:W.h,IIRFilterNode:W.h,MediaElementAudioSourceNode:W.h,MediaStreamAudioDestinationNode:W.h,MediaStreamAudioSourceNode:W.h,OfflineAudioContext:W.h,OscillatorNode:W.h,Oscillator:W.h,PannerNode:W.h,AudioPannerNode:W.h,webkitAudioPannerNode:W.h,ScriptProcessorNode:W.h,JavaScriptAudioNode:W.h,StereoPannerNode:W.h,WaveShaperNode:W.h,EventTarget:W.h,File:W.a8,FileList:W.eH,FileWriter:W.eI,HTMLFormElement:W.eN,Gamepad:W.a9,HTMLHeadElement:W.cu,History:W.eT,HTMLCollection:W.bG,HTMLFormControlsCollection:W.bG,HTMLOptionsCollection:W.bG,HTMLDocument:W.cv,XMLHttpRequest:W.cw,XMLHttpRequestUpload:W.bH,XMLHttpRequestEventTarget:W.bH,HTMLInputElement:W.bI,KeyboardEvent:W.aZ,Location:W.fb,MediaList:W.fh,MIDIOutput:W.fi,MIDIInput:W.bL,MIDIPort:W.bL,MimeType:W.aa,MimeTypeArray:W.fj,PointerEvent:W.S,MouseEvent:W.S,DragEvent:W.S,Navigator:W.ft,Attr:W.u,Node:W.u,NodeIterator:W.dn,NodeList:W.bR,RadioNodeList:W.bR,Path2D:W.fC,Perspective:W.fF,Plugin:W.ab,PluginArray:W.fH,PositionValue:W.fK,PresentationConnection:W.fL,Range:W.dt,Rotation:W.fV,RTCDataChannel:W.dv,DataChannel:W.dv,HTMLSelectElement:W.fX,SharedWorker:W.h_,SourceBuffer:W.ac,SourceBufferList:W.h1,SpeechGrammar:W.ad,SpeechGrammarList:W.h3,SpeechRecognitionResult:W.ae,Storage:W.h8,CSSStyleSheet:W.a0,StyleSheet:W.a0,CalcLength:W.am,KeywordValue:W.am,LengthValue:W.am,NumberValue:W.am,SimpleLength:W.am,TransformValue:W.am,StyleValue:W.am,HTMLTableElement:W.dy,HTMLTableRowElement:W.hg,HTMLTableSectionElement:W.hh,HTMLTemplateElement:W.bX,TextTrack:W.af,TextTrackCue:W.a1,VTTCue:W.a1,TextTrackCueList:W.hk,TextTrackList:W.hl,TimeRanges:W.hn,Touch:W.ag,TouchEvent:W.b2,TouchList:W.hr,TrackDefaultList:W.hs,Matrix:W.bp,Skew:W.bp,TransformComponent:W.bp,Translation:W.hu,TreeWalker:W.dC,CompositionEvent:W.aN,FocusEvent:W.aN,TextEvent:W.aN,SVGZoomEvent:W.aN,UIEvent:W.aN,URL:W.hA,VideoTrackList:W.hC,VTTRegionList:W.hF,WebSocket:W.hG,WheelEvent:W.b4,Window:W.c0,DOMWindow:W.c0,Worker:W.hJ,CompositorWorkerGlobalScope:W.b5,DedicatedWorkerGlobalScope:W.b5,ServiceWorkerGlobalScope:W.b5,SharedWorkerGlobalScope:W.b5,WorkerGlobalScope:W.b5,ClientRect:W.hU,ClientRectList:W.dH,DOMRectList:W.dH,CSSRuleList:W.hW,DocumentType:W.hY,DOMRect:W.hZ,GamepadList:W.ik,HTMLFrameSetElement:W.il,NamedNodeMap:W.dL,MozNamedAttrMap:W.dL,ServiceWorker:W.iF,SpeechRecognitionResultList:W.iI,StyleSheetList:W.iJ,WorkerLocation:W.iQ,WorkerNavigator:W.iR,SVGAElement:P.dY,SVGAnimateElement:P.aR,SVGAnimateMotionElement:P.aR,SVGAnimateTransformElement:P.aR,SVGAnimationElement:P.aR,SVGSetElement:P.aR,SVGFEBlendElement:P.en,SVGFEColorMatrixElement:P.eo,SVGFEComponentTransferElement:P.ep,SVGFECompositeElement:P.eq,SVGFEConvolveMatrixElement:P.er,SVGFEDiffuseLightingElement:P.es,SVGFEDisplacementMapElement:P.et,SVGFEFloodElement:P.eu,SVGFEGaussianBlurElement:P.ev,SVGFEImageElement:P.ew,SVGFEMergeElement:P.ex,SVGFEMorphologyElement:P.ey,SVGFEOffsetElement:P.ez,SVGFEPointLightElement:P.eA,SVGFESpecularLightingElement:P.eB,SVGFESpotLightElement:P.eC,SVGFETileElement:P.eD,SVGFETurbulenceElement:P.eE,SVGFilterElement:P.eJ,SVGForeignObjectElement:P.eM,SVGCircleElement:P.ai,SVGEllipseElement:P.ai,SVGLineElement:P.ai,SVGPathElement:P.ai,SVGPolygonElement:P.ai,SVGPolylineElement:P.ai,SVGGeometryElement:P.ai,SVGClipPathElement:P.aI,SVGDefsElement:P.aI,SVGGElement:P.aI,SVGSwitchElement:P.aI,SVGGraphicsElement:P.aI,SVGImageElement:P.eU,SVGLength:P.at,SVGLengthList:P.f5,SVGMarkerElement:P.fe,SVGMaskElement:P.ff,SVGNumber:P.av,SVGNumberList:P.fw,SVGPatternElement:P.fD,SVGPoint:P.fI,SVGPointList:P.fJ,SVGRect:P.fO,SVGRectElement:P.fP,SVGScriptElement:P.bU,SVGStringList:P.hd,SVGDescElement:P.J,SVGDiscardElement:P.J,SVGFEDistantLightElement:P.J,SVGFEFuncAElement:P.J,SVGFEFuncBElement:P.J,SVGFEFuncGElement:P.J,SVGFEFuncRElement:P.J,SVGFEMergeNodeElement:P.J,SVGMetadataElement:P.J,SVGStopElement:P.J,SVGStyleElement:P.J,SVGTitleElement:P.J,SVGComponentTransferFunctionElement:P.J,SVGElement:P.J,SVGSVGElement:P.he,SVGSymbolElement:P.hf,SVGTextContentElement:P.dz,SVGTextPathElement:P.hj,SVGTSpanElement:P.bY,SVGTextElement:P.bY,SVGTextPositioningElement:P.bY,SVGTransform:P.aw,SVGTransformList:P.ht,SVGUseElement:P.hB,SVGViewElement:P.hD,SVGViewSpec:P.hE,SVGLinearGradientElement:P.c1,SVGRadialGradientElement:P.c1,SVGGradientElement:P.c1,SVGCursorElement:P.iB,SVGFEDropShadowElement:P.iC,SVGMPathElement:P.iD,AudioBuffer:P.e2,WebGLRenderingContext:P.fT,WebGL2RenderingContext:P.fU,WebGL2RenderingContextBase:P.iP,SQLResultSetRowList:P.h4})
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