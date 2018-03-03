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
a[c]=function(){a[c]=function(){H.om(b)}
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
return d?function(e){if(t===null)t=H.k1(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.k1(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.k1(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={jL:function jL(a){this.a=a},
jS:function(a,b,c,d){if(!!J.u(a).$isd)return new H.em(a,b,[c,d])
return new H.dq(a,b,[c,d])},
dj:function(){return new P.ap("No element")},
n9:function(){return new P.ap("Too many elements")},
n8:function(){return new P.ap("Too few elements")},
dE:function(a,b,c,d){if(c-b<=32)H.nm(a,b,c,d)
else H.nl(a,b,c,d)},
nm:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.H(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.at(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
nl:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.b(t>32)
s=C.b.E(t+1,6)
r=a3+s
q=a4-s
p=C.b.E(a3+a4,2)
o=p-s
n=p+s
t=J.H(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.at(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.at(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.at(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.at(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.at(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.at(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.at(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.at(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.at(a5.$2(j,i),0)){h=i
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
H.dE(a2,a3,g-2,a5)
H.dE(a2,f+2,a4,a5)
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
break}}H.dE(a2,g,f,a5)}else H.dE(a2,g,f,a5)},
d:function d(){},
bm:function bm(){},
dp:function dp(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
dq:function dq(a,b,c){this.a=a
this.b=b
this.$ti=c},
em:function em(a,b,c){this.a=a
this.b=b
this.$ti=c},
fe:function fe(a,b,c,d){var _=this
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
hK:function hK(a,b,c){this.a=a
this.b=b
this.$ti=c},
cz:function cz(){},
dT:function(a,b){var t=a.an(b)
if(!u.globalState.d.cy)u.globalState.f.at()
return t},
jk:function(){--u.globalState.f.b
H.b(u.globalState.f.b>=0)},
lP:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.u(s).$isc)throw H.e(P.cn("Arguments to main must be a List: "+H.f(s)))
u.globalState=new H.ix(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$kS()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.i3(P.jQ(null,H.b7),0)
r=P.o
s.sf1(new H.an(0,null,null,null,null,null,0,[r,H.b6]))
s.sf4(new H.an(0,null,null,null,null,null,0,[r,null]))
if(s.x){q=new H.iw()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.n3,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.nB)}if(u.globalState.x)return
s=u.globalState.a++
q=P.ao(null,null,null,r)
p=new H.bp(0,null,!1)
o=new H.b6(s,new H.an(0,null,null,null,null,null,0,[r,H.bp]),q,u.createNewIsolate(),p,new H.av(H.jp()),new H.av(H.jp()),!1,!1,[],P.ao(null,null,null,null),null,null,!1,!0,P.ao(null,null,null,null))
q.j(0,0)
o.bH(0,p)
u.globalState.e=o
u.globalState.z.i(0,s,o)
u.globalState.d=o
if(H.by(a,{func:1,args:[,]}))o.an(new H.jv(t,a))
else if(H.by(a,{func:1,args:[,,]}))o.an(new H.jw(t,a))
else o.an(a)
u.globalState.f.at()},
nB:function(a){var t=P.aZ(["command","print","msg",a])
return new H.ar(!0,P.cc(null,P.o)).L(t)},
n5:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.n6()
return},
n6:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.e(new P.w("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.e(new P.w('Cannot extract URI from "'+t+'"'))},
n3:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.b5(!0,[]).Z(b.data)
s=J.H(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.o8(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.b5(!0,[]).Z(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.b5(!0,[]).Z(s.h(t,"replyTo"))
s=u.globalState.a++
k=P.o
j=P.ao(null,null,null,k)
i=new H.bp(0,null,!1)
h=new H.b6(s,new H.an(0,null,null,null,null,null,0,[k,H.bp]),j,u.createNewIsolate(),i,new H.av(H.jp()),new H.av(H.jp()),!1,!1,[],P.ao(null,null,null,null),null,null,!1,!0,P.ao(null,null,null,null))
j.j(0,0)
h.bH(0,i)
u.globalState.f.a.W(0,new H.b7(h,new H.eX(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.at()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.mt(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.at()
break
case"close":u.globalState.ch.as(0,$.$get$kT().h(0,a))
a.terminate()
u.globalState.f.at()
break
case"log":H.n2(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
k=P.aZ(["command","print","msg",t])
k=new H.ar(!0,P.cc(null,P.o)).L(k)
s.toString
self.postMessage(k)}else P.V(s.h(t,"msg"))
break
case"error":throw H.e(s.h(t,"msg"))}},
n2:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aZ(["command","log","msg",a])
r=new H.ar(!0,P.cc(null,P.o)).L(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.P(q)
t=H.as(q)
s=P.cy(t)
throw H.e(s)}},
n4:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.kY=$.kY+("_"+s)
$.kZ=$.kZ+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.H(0,["spawned",new H.bu(s,r),q,t.r])
r=new H.eY(a,b,c,d,t)
if(e){t.c2(q,q)
u.globalState.f.a.W(0,new H.b7(t,r,"start isolate"))}else r.$0()},
nn:function(a,b){var t=new H.hs(!0,!1,null)
t.dF(a,b)
return t},
nD:function(a){return new H.b5(!0,[]).Z(new H.ar(!1,P.cc(null,P.o)).L(a))},
jv:function jv(a,b){this.a=a
this.b=b},
jw:function jw(a,b){this.a=a
this.b=b},
ix:function ix(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
ir:function ir(a,b){this.a=a
this.b=b},
i3:function i3(a,b){this.a=a
this.b=b},
i4:function i4(a){this.a=a},
b7:function b7(a,b,c){this.a=a
this.b=b
this.c=c},
iw:function iw(){},
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
hW:function hW(){},
bu:function bu(a,b){this.b=a
this.a=b},
iy:function iy(a,b){this.a=a
this.b=b},
ce:function ce(a,b,c){this.b=a
this.c=b
this.a=c},
bp:function bp(a,b,c){this.a=a
this.b=b
this.c=c},
hs:function hs(a,b,c){this.a=a
this.b=b
this.c=c},
ht:function ht(a,b){this.a=a
this.b=b},
hu:function hu(a,b){this.a=a
this.b=b},
av:function av(a){this.a=a},
ar:function ar(a,b){this.a=a
this.b=b},
b5:function b5(a,b){this.a=a
this.b=b},
o1:function(a){return u.types[a]},
oa:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.u(a).$isp},
f:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.a6(a)
if(typeof t!=="string")throw H.e(H.Q(a))
return t},
nk:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.fT(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
b_:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
dA:function(a){var t,s,r,q,p,o,n,m
t=J.u(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.C||!!J.u(a).$isb2){p=C.t(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.e.aO(q,0)===36)q=C.e.dg(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.dV(H.j8(a),0,null),u.mangledGlobalNames)},
fP:function(a){return"Instance of '"+H.dA(a)+"'"},
W:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ni:function(a){return a.b?H.W(a).getUTCFullYear()+0:H.W(a).getFullYear()+0},
ng:function(a){return a.b?H.W(a).getUTCMonth()+1:H.W(a).getMonth()+1},
nc:function(a){return a.b?H.W(a).getUTCDate()+0:H.W(a).getDate()+0},
nd:function(a){return a.b?H.W(a).getUTCHours()+0:H.W(a).getHours()+0},
nf:function(a){return a.b?H.W(a).getUTCMinutes()+0:H.W(a).getMinutes()+0},
nh:function(a){return a.b?H.W(a).getUTCSeconds()+0:H.W(a).getSeconds()+0},
ne:function(a){return a.b?H.W(a).getUTCMilliseconds()+0:H.W(a).getMilliseconds()+0},
jT:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.Q(a))
return a[b]},
l_:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.Q(a))
a[b]=c},
T:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.al(!0,b,"index",null)
t=J.bc(a)
if(b<0||C.b.cY(b,t))return P.D(b,a,"index",null,t)
return P.fQ(b,"index",null)},
Q:function(a){return new P.al(!0,a,null,null)},
e:function(a){var t
if(a==null)a=new P.bo()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.lR})
t.name=""}else t.toString=H.lR
return t},
lR:function(){return J.a6(this.dartException)},
F:function(a){throw H.e(a)},
z:function(a){throw H.e(new P.a_(a))},
az:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.hz(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
hA:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
l9:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
jN:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.f2(a,s,t?null:b.receiver)},
P:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.jx(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aY(r,16)&8191)===10)switch(q){case 438:return t.$1(H.jN(H.f(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.f(s)+" (Error "+q+")"
return t.$1(new H.dz(p,null))}}if(a instanceof TypeError){o=$.$get$l3()
n=$.$get$l4()
m=$.$get$l5()
l=$.$get$l6()
k=$.$get$la()
j=$.$get$lb()
i=$.$get$l8()
$.$get$l7()
h=$.$get$ld()
g=$.$get$lc()
f=o.R(s)
if(f!=null)return t.$1(H.jN(s,f))
else{f=n.R(s)
if(f!=null){f.method="call"
return t.$1(H.jN(s,f))}else{f=m.R(s)
if(f==null){f=l.R(s)
if(f==null){f=k.R(s)
if(f==null){f=j.R(s)
if(f==null){f=i.R(s)
if(f==null){f=l.R(s)
if(f==null){f=h.R(s)
if(f==null){f=g.R(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.dz(s,f==null?null:f.method))}}return t.$1(new H.hC(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.dF()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.al(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.dF()
return a},
as:function(a){var t
if(a==null)return new H.dR(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dR(a,null)},
oe:function(a){if(a==null||typeof a!='object')return J.au(a)
else return H.b_(a)},
o_:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=a.length
for(r=0;r<s;){q=r+1
H.b(t)
p=a[r]
r=q+1
H.b(t)
b.i(0,p,a[q])}return b},
o9:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dT(b,new H.jf(a))
case 1:return H.dT(b,new H.jg(a,d))
case 2:return H.dT(b,new H.jh(a,d,e))
case 3:return H.dT(b,new H.ji(a,d,e,f))
case 4:return H.dT(b,new H.jj(a,d,e,f,g))}throw H.e(P.cy("Unsupported number of arguments for wrapped closure"))},
aL:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.o9)
a.$identity=t
return t},
mL:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.u(c).$isc){t.$reflectionInfo=c
r=H.nk(t).r}else r=c
q=d?Object.create(new H.h8().constructor.prototype):Object.create(new H.bC(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.kx(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.o1,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.ku:H.jG
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.e("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.kx(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
mI:function(a,b,c,d){var t=H.jG
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
kx:function(a,b,c){var t,s,r,q
if(c)return H.mK(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.mI(s,b==null?r!=null:b!==r,t,b)
return q},
mJ:function(a,b,c,d){var t,s
t=H.jG
s=H.ku
switch(b?-1:a){case 0:throw H.e(new H.fZ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
mK:function(a,b){var t,s,r,q
H.mH()
t=$.kt
if(t==null){t=H.ks("receiver")
$.kt=t}s=b.$stubName
r=b.length
q=a[s]
t=H.mJ(r,b==null?q!=null:b!==q,s,b)
return t},
k1:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.u(c).$isc){c.fixed$length=Array
t=c}else t=c
return H.mL(a,b,t,!!d,e,f)},
jG:function(a){return a.a},
ku:function(a){return a.c},
mH:function(){var t=$.kv
if(t==null){t=H.ks("self")
$.kv=t}return t},
ks:function(a){var t,s,r,q,p
t=new H.bC("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
oA:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.aA(a,"String"))},
a4:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aA(a,"double"))},
oz:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aA(a,"num"))},
nS:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.aA(a,"bool"))},
o8:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.aA(a,"int"))},
og:function(a,b){throw H.e(H.aA(a,b.substring(3)))},
of:function(a,b){var t=J.H(b)
throw H.e(H.kw(H.dA(a),t.bt(b,3,t.gk(b))))},
k5:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.u(a)[b])return a
H.og(a,b)},
aM:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.u(a)[b]
else t=!0
if(t)return a
H.of(a,b)},
oy:function(a){if(a==null)return a
if(!!J.u(a).$isc)return a
throw H.e(H.aA(a,"List"))},
lA:function(a){var t=J.u(a)
return"$S" in t?t.$S():null},
by:function(a,b){var t
if(a==null)return!1
t=H.lA(a)
return t==null?!1:H.lG(t,b)},
ow:function(a,b){var t,s
if(a==null)return a
if($.jZ)return a
$.jZ=!0
try{if(H.by(a,b))return a
t=H.aN(b,null)
s=H.aA(a,t)
throw H.e(s)}finally{$.jZ=!1}},
aA:function(a,b){return new H.hB("type '"+H.dA(a)+"' is not a subtype of type '"+b+"'")},
kw:function(a,b){return new H.e8("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
aK:function(a){if(!0===a)return!1
if(!!J.u(a).$isjJ)a=a.$0()
if(typeof a==="boolean")return!a
throw H.e(H.aA(a,"bool"))},
b9:function(a){throw H.e(new H.hQ(a))},
b:function(a){if(H.aK(a))throw H.e(new P.co(null))},
om:function(a){throw H.e(new P.ec(a))},
jp:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
lE:function(a){return u.getIsolateTag(a)},
O:function(a){return new H.aI(a,null)},
E:function(a,b){H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
j8:function(a){if(a==null)return
return a.$ti},
lF:function(a,b){return H.kb(a["$as"+H.f(b)],H.j8(a))},
ak:function(a,b,c){var t,s
t=H.lF(a,b)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
aC:function(a,b){var t,s
t=H.j8(a)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
aN:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.b(!0)
H.b(!0)
return a[0].name+H.dV(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.f(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aN(t,b)
return H.nG(a,b)}return"unknown-reified-type"},
nG:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aN(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aN(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aN(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.nZ(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aN(l[j],b)+(" "+H.f(j))}q+="}"}return"("+q+") => "+t},
dV:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=new P.c1("")
for(r=b,q=!0,p=!0;H.b(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.b(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aN(o,c)}return p?"":"<"+s.l(0)+">"},
j9:function(a){var t,s
if(a instanceof H.be){t=H.lA(a)
if(t!=null)return H.aN(t,null)}s=J.u(a).constructor.name
if(a==null)return s
return s+H.dV(a.$ti,0,null)},
kb:function(a,b){if(a==null)return b
H.b(typeof a=="function")
H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.k6(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.k6(a,null,b)
return b},
ci:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.j8(a)
s=J.u(a)
if(s[b]==null)return!1
return H.lu(H.kb(s[d],t),c)},
dX:function(a,b,c,d){if(a==null)return a
if(H.ci(a,b,c,d))return a
throw H.e(H.kw(H.dA(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dV(c,0,null),u.mangledGlobalNames)))},
ou:function(a,b,c,d){if(a==null)return a
if(H.ci(a,b,c,d))return a
throw H.e(H.aA(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dV(c,0,null),u.mangledGlobalNames)))},
lu:function(a,b){var t,s,r,q,p
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
nV:function(a,b,c){return H.k6(a,b,H.lF(b,c))},
a5:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.name==="aH")return!0
if('func' in b)return H.lG(a,b)
if('func' in a)return b.name==="jJ"||b.name==="m"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.b(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.b(!0)
q=b[0]}else q=b
if(q!==s){p=H.aN(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.lu(H.kb(o,t),r)},
lt:function(a,b,c){var t,s,r,q,p,o,n
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
nO:function(a,b){var t,s,r,q,p,o
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
lG:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
if(n===m){if(!H.lt(r,q,!1))return!1
if(!H.lt(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.b(j)
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
if(!(H.a5(g,f)||H.a5(f,g)))return!1}}return H.nO(a.named,b.named)},
k6:function(a,b,c){H.b(typeof a=="function")
H.b(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
oB:function(a){var t=$.k3
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
ox:function(a){return H.b_(a)},
ov:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
ob:function(a){var t,s,r,q,p,o
H.b(!(a instanceof P.m))
t=$.k3.$1(a)
s=$.j6[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.je[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.ls.$2(a,t)
if(t!=null){s=$.j6[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.je[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.k7(r)
$.j6[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.je[t]=r
return r}if(p==="-"){o=H.k7(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.lK(a,r)
if(p==="*")throw H.e(new P.c5(t))
if(u.leafTags[t]===true){o=H.k7(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.lK(a,r)},
lK:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.jo(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
k7:function(a){return J.jo(a,!1,null,!!a.$isp)},
od:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.jo(t,!1,null,!!t.$isp)
else return J.jo(t,c,null,null)},
o6:function(){if(!0===$.k4)return
$.k4=!0
H.o7()},
o7:function(){var t,s,r,q,p,o,n,m
$.j6=Object.create(null)
$.je=Object.create(null)
H.o5()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.lL.$1(p)
if(o!=null){n=H.od(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
o5:function(){var t,s,r,q,p,o,n
t=C.G()
t=H.bx(C.D,H.bx(C.I,H.bx(C.r,H.bx(C.r,H.bx(C.H,H.bx(C.E,H.bx(C.F(C.t),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.k3=new H.jb(p)
$.ls=new H.jc(o)
$.lL=new H.jd(n)},
bx:function(a,b){return a(b)||b},
ol:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
fT:function fT(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
hz:function hz(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dz:function dz(a,b){this.a=a
this.b=b},
f2:function f2(a,b,c){this.a=a
this.b=b
this.c=c},
hC:function hC(a){this.a=a},
jx:function jx(a){this.a=a},
dR:function dR(a,b){this.a=a
this.b=b},
jf:function jf(a){this.a=a},
jg:function jg(a,b){this.a=a
this.b=b},
jh:function jh(a,b,c){this.a=a
this.b=b
this.c=c},
ji:function ji(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jj:function jj(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
be:function be(){},
hm:function hm(){},
h8:function h8(){},
bC:function bC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hB:function hB(a){this.a=a},
e8:function e8(a){this.a=a},
fZ:function fZ(a){this.a=a},
hQ:function hQ(a){this.a=a},
aI:function aI(a,b){this.a=a
this.b=b},
an:function an(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
f1:function f1(a){this.a=a},
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
jb:function jb(a){this.a=a},
jc:function jc(a){this.a=a},
jd:function jd(a){this.a=a},
t:function(a){return a},
iY:function(a){var t,s,r
if(!!J.u(a).$isn)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
bQ:function bQ(){},
bn:function bn(){},
fo:function fo(){},
ds:function ds(){},
dt:function dt(){},
du:function du(){},
dr:function dr(){},
fp:function fp(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(){},
ft:function ft(){},
fu:function fu(){},
dv:function dv(){},
fv:function fv(){},
bR:function bR(){},
bS:function bS(){},
bT:function bT(){},
bU:function bU(){},
nZ:function(a){var t=H.E(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
dW:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
u:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dm.prototype
return J.dl.prototype}if(typeof a=="string")return J.aW.prototype
if(a==null)return J.f0.prototype
if(typeof a=="boolean")return J.f_.prototype
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aX.prototype
return a}if(a instanceof P.m)return a
return J.j7(a)},
jo:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
j7:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.k4==null){H.o6()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.e(new P.c5("Return interceptor for "+H.f(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$jM()]
if(p!=null)return p
p=H.ob(a)
if(p!=null)return p
if(typeof a=="function")return C.J
s=Object.getPrototypeOf(a)
if(s==null)return C.w
if(s===Object.prototype)return C.w
if(typeof q=="function"){Object.defineProperty(q,$.$get$jM(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
H:function(a){if(typeof a=="string")return J.aW.prototype
if(a==null)return a
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aX.prototype
return a}if(a instanceof P.m)return a
return J.j7(a)},
ba:function(a){if(a==null)return a
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aX.prototype
return a}if(a instanceof P.m)return a
return J.j7(a)},
k2:function(a){if(typeof a=="number")return J.bl.prototype
if(a==null)return a
if(!(a instanceof P.m))return J.b2.prototype
return a},
o0:function(a){if(typeof a=="number")return J.bl.prototype
if(typeof a=="string")return J.aW.prototype
if(a==null)return a
if(!(a instanceof P.m))return J.b2.prototype
return a},
lD:function(a){if(typeof a=="string")return J.aW.prototype
if(a==null)return a
if(!(a instanceof P.m))return J.b2.prototype
return a},
k:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aX.prototype
return a}if(a instanceof P.m)return a
return J.j7(a)},
G:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.u(a).v(a,b)},
at:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.k2(a).av(a,b)},
lT:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.k2(a).aw(a,b)},
bb:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.oa(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.H(a).h(a,b)},
lU:function(a,b,c){return J.ba(a).i(a,b,c)},
lV:function(a,b,c,d){return J.k(a).dQ(a,b,c,d)},
kd:function(a,b){return J.lD(a).aO(a,b)},
bz:function(a,b){return J.k(a).e7(a,b)},
lW:function(a,b,c,d){return J.k(a).e8(a,b,c,d)},
lX:function(a,b,c){return J.k(a).e9(a,b,c)},
ke:function(a,b){return J.k(a).c1(a,b)},
jy:function(a,b){return J.k(a).S(a,b)},
kf:function(a,b,c){return J.k(a).c4(a,b,c)},
lY:function(a,b){return J.k(a).ep(a,b)},
dY:function(a,b,c){return J.k(a).c5(a,b,c)},
lZ:function(a,b,c){return J.k(a).c6(a,b,c)},
cm:function(a,b,c){return J.k(a).c7(a,b,c)},
dZ:function(a,b){return J.k(a).es(a,b)},
m_:function(a,b){return J.k(a).c8(a,b)},
m0:function(a,b,c){return J.k(a).c9(a,b,c)},
kg:function(a,b,c,d){return J.k(a).ca(a,b,c,d)},
m1:function(a,b){return J.ba(a).cb(a,b)},
m2:function(a,b,c,d,e){return J.k(a).cc(a,b,c,d,e)},
m3:function(a,b){return J.o0(a).T(a,b)},
jz:function(a,b,c){return J.H(a).ez(a,b,c)},
jA:function(a){return J.k(a).ce(a)},
m4:function(a){return J.k(a).cf(a)},
m5:function(a){return J.k(a).ci(a)},
m6:function(a){return J.k(a).eF(a)},
m7:function(a,b){return J.k(a).ck(a,b)},
jB:function(a,b){return J.k(a).cl(a,b)},
m8:function(a,b,c,d){return J.k(a).cm(a,b,c,d)},
m9:function(a,b,c,d,e){return J.k(a).eP(a,b,c,d,e)},
ma:function(a,b,c,d,e){return J.k(a).cn(a,b,c,d,e)},
mb:function(a,b,c,d,e,f){return J.k(a).eQ(a,b,c,d,e,f)},
mc:function(a,b){return J.ba(a).t(a,b)},
e_:function(a,b){return J.k(a).co(a,b)},
md:function(a,b){return J.k(a).cp(a,b)},
me:function(a){return J.k(a).eR(a)},
mf:function(a,b){return J.ba(a).a8(a,b)},
mg:function(a){return J.k(a).geo(a)},
au:function(a){return J.u(a).gu(a)},
bA:function(a){return J.ba(a).gw(a)},
bc:function(a){return J.H(a).gk(a)},
mh:function(a){return J.k(a).gbb(a)},
mi:function(a){return J.u(a).gA(a)},
mj:function(a){return J.k(a).gfg(a)},
mk:function(a){return J.k(a).gaG(a)},
jC:function(a){return J.k(a).gm(a)},
jD:function(a){return J.k(a).gn(a)},
kh:function(a){return J.k(a).gM(a)},
jE:function(a,b){return J.k(a).aa(a,b)},
ml:function(a){return J.k(a).aI(a)},
mm:function(a){return J.k(a).bi(a)},
mn:function(a,b){return J.k(a).bj(a,b)},
mo:function(a,b,c){return J.k(a).bk(a,b,c)},
ki:function(a,b,c){return J.k(a).bn(a,b,c)},
mp:function(a,b){return J.k(a).ct(a,b)},
mq:function(a,b){return J.ba(a).cz(a,b)},
mr:function(a,b,c){return J.k(a).cB(a,b,c)},
ms:function(a){return J.ba(a).fa(a)},
mt:function(a,b){return J.k(a).H(a,b)},
mu:function(a,b,c){return J.k(a).d9(a,b,c)},
mv:function(a,b,c,d){return J.k(a).bs(a,b,c,d)},
mw:function(a,b,c,d,e,f,g){return J.k(a).cF(a,b,c,d,e,f,g)},
mx:function(a,b,c,d){return J.k(a).cG(a,b,c,d)},
kj:function(a,b,c,d){return J.k(a).cH(a,b,c,d)},
bB:function(a){return J.k2(a).fh(a)},
my:function(a){return J.lD(a).fk(a)},
a6:function(a){return J.u(a).l(a)},
mz:function(a,b,c,d){return J.k(a).fm(a,b,c,d)},
mA:function(a,b,c){return J.k(a).cI(a,b,c)},
mB:function(a,b,c){return J.k(a).cJ(a,b,c)},
jF:function(a,b,c){return J.k(a).cK(a,b,c)},
mC:function(a,b,c){return J.k(a).cL(a,b,c)},
kk:function(a,b,c){return J.k(a).cM(a,b,c)},
kl:function(a,b,c){return J.k(a).cN(a,b,c)},
km:function(a,b,c){return J.k(a).cO(a,b,c)},
kn:function(a,b,c,d){return J.k(a).cP(a,b,c,d)},
ko:function(a,b,c,d){return J.k(a).cQ(a,b,c,d)},
mD:function(a,b){return J.k(a).cS(a,b)},
mE:function(a,b,c){return J.k(a).fn(a,b,c)},
kp:function(a,b,c,d,e,f,g){return J.k(a).cU(a,b,c,d,e,f,g)},
mF:function(a,b,c,d,e){return J.k(a).cV(a,b,c,d,e)},
a:function a(){},
f_:function f_(){},
f0:function f0(){},
bM:function bM(){},
fJ:function fJ(){},
b2:function b2(){},
aX:function aX(){},
aV:function aV(a){this.$ti=a},
jK:function jK(a){this.$ti=a},
e3:function e3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bl:function bl(){},
dm:function dm(){},
dl:function dl(){},
aW:function aW(){}},P={
nq:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.nP()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.aL(new P.hS(t),1)).observe(s,{childList:true})
return new P.hR(t,s,r)}else if(self.setImmediate!=null)return P.nQ()
return P.nR()},
nr:function(a){++u.globalState.f.b
self.scheduleImmediate(H.aL(new P.hT(a),0))},
ns:function(a){++u.globalState.f.b
self.setImmediate(H.aL(new P.hU(a),0))},
nt:function(a){P.jV(C.o,a)},
nK:function(a,b){if(H.by(a,{func:1,args:[P.aH,P.aH]})){b.toString
return a}else{b.toString
return a}},
mX:function(a,b,c){var t
if(a==null)a=new P.bo()
t=$.x
if(t!==C.d)t.toString
t=new P.J(0,t,null,[c])
t.bJ(a,b)
return t},
mY:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.J(0,$.x,null,[P.c])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.eQ(t,!1,b,s)
try{for(m=0,l=0;m<4;++m){q=a[m]
p=l
q.bf(new P.eP(t,!1,b,s,p),r)
l=++t.b}if(l===0){l=new P.J(0,$.x,null,[null])
l.bI(C.u)
return l}k=new Array(l)
k.fixed$length=Array
t.a=k}catch(j){o=H.P(j)
n=H.as(j)
if(t.b===0||!1)return P.mX(o,n,null)
else{t.c=o
t.d=n}}return s},
nE:function(a,b,c){$.x.toString
a.I(b,c)},
nw:function(a,b){var t=new P.J(0,$.x,null,[b])
H.b(!0)
t.a=4
t.c=a
return t},
lj:function(a,b){var t,s,r
H.b(b.a<4)
H.b(!(a instanceof P.J))
H.b(b.a===0)
b.a=1
try{a.bf(new P.id(b),new P.ie(b))}catch(r){t=H.P(r)
s=H.as(r)
P.oh(new P.ig(b,t,s))}},
ic:function(a,b){var t,s,r,q
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
P.bt(b,q)}else{q=b.c
H.b(s<=1)
b.a=2
b.c=a
a.bW(q)}},
bt:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.iZ(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bt(t.a,b)}s=t.a
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
P.iZ(null,null,p,o,s)
return}s=$.x
if(s==null?l!=null:s!==l){H.b(l!=null)
s=$.x
H.b(l==null?s!=null:l!==s)
j=$.x
$.x=l
i=j}else i=null
s=b.c
if(s===8)new P.il(t,r,q,b).$0()
else if(p){if((s&1)!==0)new P.ik(r,b,m).$0()}else if((s&2)!==0)new P.ij(t,r,b).$0()
if(i!=null){H.b(!0)
$.x=i}s=r.b
if(!!J.u(s).$isaU){if(s.a>=4){H.b(o.a<4)
h=o.c
o.c=null
b=o.ak(h)
H.b(o.a<4)
H.b(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.ic(s,o)
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
nI:function(){var t,s
for(;t=$.bv,t!=null;){$.cg=null
s=t.b
$.bv=s
if(s==null)$.cf=null
t.a.$0()}},
nN:function(){$.k_=!0
try{P.nI()}finally{$.cg=null
$.k_=!1
if($.bv!=null)$.$get$jX().$1(P.lv())}},
lq:function(a){var t=new P.dN(a,null)
if($.bv==null){$.cf=t
$.bv=t
if(!$.k_)$.$get$jX().$1(P.lv())}else{$.cf.b=t
$.cf=t}},
nM:function(a){var t,s,r
t=$.bv
if(t==null){P.lq(a)
$.cg=$.cf
return}s=new P.dN(a,null)
r=$.cg
if(r==null){s.b=t
$.cg=s
$.bv=s}else{s.b=r.b
r.b=s
$.cg=s
if(s.b==null)$.cf=s}},
oh:function(a){var t=$.x
if(C.d===t){P.bw(null,null,C.d,a)
return}t.toString
P.bw(null,null,t,t.b5(a))},
nC:function(a,b,c){var t=a.eu(0)
if(!!J.u(t).$isaU&&t!==$.$get$kN())t.fo(new P.iW(b,c))
else b.ah(c)},
no:function(a,b){var t=$.x
if(t===C.d){t.toString
return P.jV(a,b)}return P.jV(a,t.b5(b))},
jV:function(a,b){var t=C.b.E(a.a,1000)
return H.nn(t<0?0:t,b)},
jW:function(a){var t,s
H.b(a!=null)
t=$.x
H.b(a==null?t!=null:a!==t)
s=$.x
$.x=a
return s},
iZ:function(a,b,c,d,e){var t={}
t.a=d
P.nM(new P.j_(t,e))},
lo:function(a,b,c,d){var t,s
if($.x===c)return d.$0()
t=P.jW(c)
try{s=d.$0()
return s}finally{s=t
H.b(s!=null)
$.x=s}},
lp:function(a,b,c,d,e){var t,s
if($.x===c)return d.$1(e)
t=P.jW(c)
try{s=d.$1(e)
return s}finally{s=t
H.b(s!=null)
$.x=s}},
nL:function(a,b,c,d,e,f){var t,s
if($.x===c)return d.$2(e,f)
t=P.jW(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.b(s!=null)
$.x=s}},
bw:function(a,b,c,d){var t=C.d!==c
if(t)d=!(!t||!1)?c.b5(d):c.eq(d)
P.lq(d)},
hS:function hS(a){this.a=a},
hR:function hR(a,b,c){this.a=a
this.b=b
this.c=c},
hT:function hT(a){this.a=a},
hU:function hU(a){this.a=a},
eQ:function eQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eP:function eP(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hY:function hY(){},
c7:function c7(a,b){this.a=a
this.$ti=b},
iO:function iO(a,b){this.a=a
this.$ti=b},
c8:function c8(a,b,c,d,e,f){var _=this
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
i9:function i9(a,b){this.a=a
this.b=b},
ii:function ii(a,b){this.a=a
this.b=b},
id:function id(a){this.a=a},
ie:function ie(a){this.a=a},
ig:function ig(a,b,c){this.a=a
this.b=b
this.c=c},
ib:function ib(a,b){this.a=a
this.b=b},
ih:function ih(a,b){this.a=a
this.b=b},
ia:function ia(a,b,c){this.a=a
this.b=b
this.c=c},
il:function il(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
im:function im(a){this.a=a},
ik:function ik(a,b,c){this.a=a
this.b=b
this.c=c},
ij:function ij(a,b,c){this.a=a
this.b=b
this.c=c},
dN:function dN(a,b){this.a=a
this.b=b},
c0:function c0(){},
hf:function hf(a){this.a=a},
hg:function hg(a,b){this.a=a
this.b=b},
hd:function hd(a,b,c){this.a=a
this.b=b
this.c=c},
he:function he(a){this.a=a},
hc:function hc(){},
iW:function iW(a,b){this.a=a
this.b=b},
bd:function bd(a,b){this.a=a
this.b=b},
iV:function iV(){},
j_:function j_(a,b){this.a=a
this.b=b},
iA:function iA(){},
iC:function iC(a,b){this.a=a
this.b=b},
iB:function iB(a,b){this.a=a
this.b=b},
iD:function iD(a,b){this.a=a
this.b=b},
jO:function(a,b){return new H.an(0,null,null,null,null,null,0,[a,b])},
L:function(){return new H.an(0,null,null,null,null,null,0,[null,null])},
aZ:function(a){return H.o_(a,new H.an(0,null,null,null,null,null,0,[null,null]))},
cc:function(a,b){return new P.dP(0,null,null,null,null,null,0,[a,b])},
nA:function(){var t=Object.create(null)
H.b(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
n7:function(a,b,c){var t,s
if(P.k0(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$ch()
C.a.j(s,a)
try{P.nH(a,t)}finally{H.b(C.a.gaE(s)===a)
s.pop()}s=P.l2(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eZ:function(a,b,c){var t,s,r
if(P.k0(a))return b+"..."+c
t=new P.c1(b)
s=$.$get$ch()
C.a.j(s,a)
try{r=t
r.a=P.l2(r.ga6(),a,", ")}finally{H.b(C.a.gaE(s)===a)
s.pop()}s=t
s.a=s.ga6()+c
s=t.ga6()
return s.charCodeAt(0)==0?s:s},
k0:function(a){var t,s
for(t=0;s=$.$get$ch(),t<s.length;++t)if(a===s[t])return!0
return!1},
nH:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gw(a)
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
ao:function(a,b,c,d){return new P.it(0,null,null,null,null,null,0,[d])},
jP:function(a,b){var t,s
t=P.ao(null,null,null,b)
for(s=J.bA(a);s.p();)t.j(0,s.gq())
return t},
kW:function(a){var t,s,r
t={}
if(P.k0(a))return"{...}"
s=new P.c1("")
try{C.a.j($.$get$ch(),a)
r=s
r.a=r.ga6()+"{"
t.a=!0
a.a8(0,new P.ff(t,s))
t=s
t.a=t.ga6()+"}"}finally{t=$.$get$ch()
H.b(C.a.gaE(t)===a)
t.pop()}t=s.ga6()
return t.charCodeAt(0)==0?t:t},
jQ:function(a,b){var t=new P.fa(null,0,0,0,[b])
t.dz(a,b)
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
it:function it(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
iu:function iu(a,b,c){this.a=a
this.b=b
this.c=c},
cb:function cb(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
iq:function iq(){},
dn:function dn(){},
y:function y(){},
ff:function ff(a,b){this.a=a
this.b=b},
fa:function fa(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
iv:function iv(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
h1:function h1(){},
h0:function h0(){},
bX:function bX(){},
iX:function(a){var t
if(a==null)return
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new P.is(a,Object.create(null),null)
for(t=0;t<a.length;++t)a[t]=P.iX(a[t])
return a},
nJ:function(a,b){var t,s,r,q
if(typeof a!=="string")throw H.e(H.Q(a))
t=null
try{t=JSON.parse(a)}catch(r){s=H.P(r)
q=String(s)
throw H.e(new P.eN(q,null,null))}q=P.iX(t)
return q},
is:function is(a,b,c){this.a=a
this.b=b
this.c=c},
cq:function cq(){},
cr:function cr(){},
f3:function f3(a,b){this.a=a
this.b=b},
f4:function f4(a){this.a=a},
l2:function(a,b,c){var t=J.bA(b)
if(!t.p())return a
if(c.length===0){do a+=H.f(t.gq())
while(t.p())}else{a+=H.f(t.gq())
for(;t.p();)a=a+c+H.f(t.gq())}return a},
mM:function(a,b){return J.m3(a,b)},
mO:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.f(t)
if(t>=10)return s+"00"+H.f(t)
return s+"000"+H.f(t)},
mP:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cs:function(a){if(a>=10)return""+a
return"0"+a},
jI:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a6(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mT(a)},
mT:function(a){var t=J.u(a)
if(!!t.$isbe)return t.l(a)
return H.fP(a)},
cn:function(a){return new P.al(!1,null,null,a)},
kq:function(a,b,c){return new P.al(!0,a,b,c)},
mG:function(a){return new P.al(!1,null,a,"Must not be null")},
fQ:function(a,b,c){return new P.dC(null,null,!0,a,b,"Value not in range")},
b0:function(a,b,c,d,e){return new P.dC(b,c,!0,a,d,"Invalid value")},
jU:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.b0(a,0,c,"start",f))
if(a>b||b>c)throw H.e(P.b0(b,a,c,"end",f))
return b},
D:function(a,b,c,d,e){var t=e!=null?e:J.bc(b)
return new P.eV(b,t,!0,a,c,"Index out of range")},
cy:function(a){return new P.i8(a)},
kV:function(a,b,c){var t,s
t=H.E([],[c])
for(s=J.bA(a);s.p();)C.a.j(t,s.gq())
if(b)return t
t.fixed$length=Array
return t},
V:function(a){H.dW(H.f(a))},
aB:function aB(){},
K:function K(){},
bg:function bg(a,b){this.a=a
this.b=b},
R:function R(){},
aT:function aT(a){this.a=a},
ek:function ek(){},
el:function el(){},
bh:function bh(){},
co:function co(a){this.a=a},
bo:function bo(){},
al:function al(a,b,c,d){var _=this
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
eV:function eV(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
w:function w(a){this.a=a},
c5:function c5(a){this.a=a},
ap:function ap(a){this.a=a},
a_:function a_(a){this.a=a},
dF:function dF(){},
ec:function ec(a){this.a=a},
i8:function i8(a){this.a=a},
eN:function eN(a,b,c){this.a=a
this.b=b
this.c=c},
en:function en(a,b,c){this.a=a
this.b=b
this.$ti=c},
o:function o(){},
a0:function a0(){},
dk:function dk(){},
c:function c(){},
aF:function aF(){},
aH:function aH(){},
Z:function Z(){},
m:function m(){},
c_:function c_(){},
r:function r(){},
c1:function c1(a){this.a=a},
ly:function(a){return a},
j4:function(a){var t,s,r,q,p
if(a==null)return
t=P.L()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
nW:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.mf(a,new P.j1(t))
return t},
nX:function(a){var t,s
t=new P.J(0,$.x,null,[null])
s=new P.c7(t,[null])
a.then(H.aL(new P.j2(s),1))["catch"](H.aL(new P.j3(s),1))
return t},
kI:function(){var t=$.kH
if(t==null){t=J.jz(window.navigator.userAgent,"Opera",0)
$.kH=t}return t},
mQ:function(){var t,s
t=$.kE
if(t!=null)return t
s=$.kF
if(s==null){s=J.jz(window.navigator.userAgent,"Firefox",0)
$.kF=s}if(s)t="-moz-"
else{s=$.kG
if(s==null){s=!P.kI()&&J.jz(window.navigator.userAgent,"Trident/",0)
$.kG=s}if(s)t="-ms-"
else t=P.kI()?"-o-":"-webkit-"}$.kE=t
return t},
hN:function hN(){},
hP:function hP(a,b){this.a=a
this.b=b},
j1:function j1(a){this.a=a},
hO:function hO(a,b,c){this.a=a
this.b=b
this.c=c},
j2:function j2(a){this.a=a},
j3:function j3(a){this.a=a},
ok:function(a){return Math.sqrt(a)},
iz:function iz(){},
N:function N(){},
e0:function e0(){},
aO:function aO(){},
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
eJ:function eJ(){},
eL:function eL(){},
am:function am(){},
aE:function aE(){},
eT:function eT(){},
aw:function aw(){},
f5:function f5(){},
fg:function fg(){},
fh:function fh(){},
ax:function ax(){},
fz:function fz(){},
fG:function fG(){},
fL:function fL(){},
fM:function fM(){},
fR:function fR(){},
fS:function fS(){},
bZ:function bZ(){},
hh:function hh(){},
I:function I(){},
hi:function hi(){},
hj:function hj(){},
dH:function dH(){},
hn:function hn(){},
c3:function c3(){},
ay:function ay(){},
hx:function hx(){},
hE:function hE(){},
hG:function hG(){},
hH:function hH(){},
c9:function c9(){},
iE:function iE(){},
iF:function iF(){},
iG:function iG(){},
cI:function cI(){},
cG:function cG(){},
cN:function cN(){},
cR:function cR(){},
d1:function d1(){},
d9:function d9(){},
d5:function d5(){},
d7:function d7(){},
e4:function e4(){},
fW:function fW(){},
fX:function fX(){},
iS:function iS(){},
h7:function h7(){},
cH:function cH(){},
d3:function d3(){}},W={
mR:function(a,b,c){var t,s
t=document.body
s=(t&&C.h).P(t,a,b,c)
s.toString
t=new H.dM(new W.X(s),new W.j0(),[W.v])
return t.ga4(t)},
mS:function(a){return"wheel"},
bD:function(a){var t,s,r
t="element tag unavailable"
try{s=J.mj(a)
if(typeof s==="string")t=a.tagName}catch(r){H.P(r)}return t},
nu:function(a,b){return document.createElement(a)},
b8:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lm:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
aj:function(a,b,c,d,e){var t=c==null?null:W.lr(new W.i7(c))
t=new W.i6(0,a,b,t,!1,[e])
t.dL(a,b,c,!1,e)
return t},
lk:function(a){var t,s
t=document.createElement("a")
s=new W.iH(t,window.location)
s=new W.ca(s)
s.dM(a)
return s},
ny:function(a,b,c,d){return!0},
nz:function(a,b,c,d){var t,s,r,q,p
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
ln:function(){var t=P.r
t=new W.iP(P.jP(C.k,t),P.ao(null,null,null,t),P.ao(null,null,null,t),P.ao(null,null,null,t),null)
t.dO(null,new H.bN(C.k,new W.iQ(),[H.aC(C.k,0),null]),["TEMPLATE"],null)
return t},
nF:function(a){var t
if(!!J.u(a).$isaS)return a
t=new P.hO([],[],!1)
t.c=!0
return t.bh(a)},
lr:function(a){var t=$.x
if(t===C.d)return a
return t.er(a)},
l:function l(){},
e1:function e1(){},
e2:function e2(){},
a7:function a7(){},
e5:function e5(){},
cp:function cp(){},
aP:function aP(){},
aQ:function aQ(){},
e7:function e7(){},
aR:function aR(){},
ea:function ea(){},
A:function A(){},
bf:function bf(){},
eb:function eb(){},
ed:function ed(){},
ee:function ee(){},
ct:function ct(){},
aS:function aS(){},
cu:function cu(){},
eg:function eg(){},
cv:function cv(){},
eh:function eh(){},
cw:function cw(){},
cx:function cx(){},
ei:function ei(){},
ej:function ej(){},
a8:function a8(){},
j0:function j0(){},
j:function j(){},
h:function h(){},
a9:function a9(){},
eH:function eH(){},
eI:function eI(){},
eM:function eM(){},
aa:function aa(){},
cC:function cC(){},
eR:function eR(){},
bK:function bK(){},
cD:function cD(){},
cE:function cE(){},
bL:function bL(){},
bi:function bi(){},
bj:function bj(){},
bk:function bk(){},
eW:function eW(){},
aY:function aY(){},
fd:function fd(){},
bO:function bO(){},
fj:function fj(){},
fl:function fl(){},
bP:function bP(){},
ab:function ab(){},
fm:function fm(){},
S:function S(){},
fw:function fw(){},
X:function X(a){this.a=a},
v:function v(){},
dw:function dw(){},
bW:function bW(){},
fF:function fF(){},
fI:function fI(){},
ac:function ac(){},
fK:function fK(){},
fN:function fN(){},
fO:function fO(){},
dB:function dB(){},
fY:function fY(){},
dD:function dD(){},
h_:function h_(){},
h2:function h2(){},
ad:function ad(){},
h3:function h3(){},
ae:function ae(){},
h5:function h5(){},
af:function af(){},
hb:function hb(){},
a1:function a1(){},
aq:function aq(){},
dG:function dG(){},
hk:function hk(){},
hl:function hl(){},
c2:function c2(){},
ag:function ag(){},
a2:function a2(){},
ho:function ho(){},
hp:function hp(){},
hr:function hr(){},
ah:function ah(){},
b1:function b1(){},
hv:function hv(){},
hw:function hw(){},
br:function br(){},
hy:function hy(){},
dK:function dK(){},
aJ:function aJ(){},
hD:function hD(){},
bs:function bs(){},
hF:function hF(){},
hI:function hI(){},
hJ:function hJ(){},
b3:function b3(){},
c6:function c6(){},
hL:function hL(a){this.a=a},
hM:function hM(){},
b4:function b4(){},
hX:function hX(){},
dO:function dO(){},
hZ:function hZ(){},
i_:function i_(){},
i0:function i0(){},
io:function io(){},
ip:function ip(){},
dQ:function dQ(){},
iI:function iI(){},
iL:function iL(){},
iM:function iM(){},
iT:function iT(){},
iU:function iU(){},
hV:function hV(){},
i1:function i1(a){this.a=a},
i5:function i5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
i2:function i2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
i6:function i6(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
i7:function i7(a){this.a=a},
ca:function ca(a){this.a=a},
C:function C(){},
dy:function dy(a){this.a=a},
fy:function fy(a){this.a=a},
fx:function fx(a,b,c){this.a=a
this.b=b
this.c=c},
cd:function cd(){},
iJ:function iJ(){},
iK:function iK(){},
iP:function iP(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iQ:function iQ(){},
iN:function iN(){},
cA:function cA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
dx:function dx(){},
iH:function iH(a,b){this.a=a
this.b=b},
dS:function dS(a){this.a=a},
iR:function iR(a){this.a=a},
bE:function bE(){},
bF:function bF(){},
bG:function bG(){},
bH:function bH(){},
bI:function bI(){},
bJ:function bJ(){},
cF:function cF(){},
cZ:function cZ(){},
cL:function cL(){},
cS:function cS(){},
cT:function cT(){},
cU:function cU(){},
cV:function cV(){},
cW:function cW(){},
cX:function cX(){},
cY:function cY(){},
cJ:function cJ(){},
cK:function cK(){},
cM:function cM(){},
cO:function cO(){},
cP:function cP(){},
cQ:function cQ(){},
d_:function d_(){},
d0:function d0(){},
db:function db(){},
dc:function dc(){},
da:function da(){},
df:function df(){},
dg:function dg(){},
dh:function dh(){},
di:function di(){},
d2:function d2(){},
d4:function d4(){},
d6:function d6(){},
d8:function d8(){},
dd:function dd(){},
de:function de(){}},B={
oi:function(a){var t,s
t=document
s=W.aY
W.aj(t,"keydown",new B.jq(),!1,s)
W.aj(t,"keyup",new B.jr(),!1,s)
if(!$.oj)W.aj(t,"mousemove",new B.js(),!1,W.S)
s=W.S
W.aj(t,"mousedown",new B.jt(),!1,s)
W.aj(t,"mouseup",new B.ju(),!1,s)},
nb:function(a,b,c,d){var t,s,r,q
t=new Float32Array(H.t(3))
s=$.$get$j5()
r=$.$get$cj()
q=new T.M(new Float32Array(H.t(16)))
q.N()
q=new B.fA(a,b,c,0,new T.q(t),-0.02,s,r,q,new T.q(new Float32Array(H.t(3))),new T.q(new Float32Array(H.t(3))),new T.q(new Float32Array(H.t(3))),new T.q(new Float32Array(H.t(3))),"camera:orbit",!1,!0)
q.dB(a,b,c,d)
return q},
jq:function jq(){},
jr:function jr(){},
js:function js(){},
jt:function jt(){},
ju:function ju(){},
fA:function fA(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
fB:function fB(a){this.a=a},
fC:function fC(a){this.a=a},
fD:function fD(){},
fE:function fE(a){this.a=a},
mZ:function(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
t=[]
s=[]
C.a.J(t,$.$get$kP())
C.a.J(s,$.$get$kQ())
for(r=0;r<a3;++r,t=q){q=[]
for(p=t.length,o=0;o<t.length;t.length===p||(0,H.z)(t),++o){n=t[o]
m=n.a
l=s[m]
k=new T.q(new Float32Array(3))
k.B(l)
l=n.b
k.j(0,s[l])
k.a3(0,0.5)
k.D(0)
j=s[l]
i=new T.q(new Float32Array(3))
i.B(j)
j=n.c
i.j(0,s[j])
i.a3(0,0.5)
i.D(0)
h=s[j]
g=new T.q(new Float32Array(3))
g.B(h)
g.j(0,s[m])
g.a3(0,0.5)
g.D(0)
f=s.length
C.a.j(s,k)
e=s.length
C.a.j(s,i)
d=s.length
C.a.j(s,g)
C.a.j(q,new G.B(m,f,d))
C.a.j(q,new G.B(l,e,f))
C.a.j(q,new G.B(j,d,e))
C.a.j(q,new G.B(f,e,d))}}c=new G.cB(!1,[],[],[],P.L())
c.a5("aTexUV")
c.a5("aNormal")
for(p=t.length,o=0;o<t.length;t.length===p||(0,H.z)(t),++o){n=t[o]
b=s[n.a]
H.b(Math.sqrt(b.gU())<1.01&&Math.sqrt(b.gU())>0.99)
a=s[n.b]
H.b(Math.sqrt(a.gU())<1.01&&Math.sqrt(a.gU())>0.99)
a0=s[n.c]
H.b(Math.sqrt(a0.gU())<1.01&&Math.sqrt(a0.gU())>0.99)
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
c.bw("aNormal",[b,a,a0])
m=new T.q(new Float32Array(3))
m.B(b)
m.a3(0,a4)
l=new T.q(new Float32Array(3))
l.B(a)
l.a3(0,a4)
a2=new T.q(new Float32Array(3))
a2.B(a0)
a2.a3(0,a4)
c.bz([m,l,a2])
c.bv("aTexUV",[new T.a3(j),new T.a3(h),new T.a3(a1)])}return c}},G={
np:function(a){var t,s,r
t=a.split("\n")
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.f(t[s])}return C.a.ar(t,"\n")},
li:function(a,b,c){var t,s,r,q
t=J.k(a)
s=t.cg(a,b)
t.bq(a,s,c)
t.cd(a,s)
r=t.bm(a,s,35713)
if(r!=null&&!r){q=t.bl(a,s)
P.V("E:Compilation failed:")
P.V("E:"+G.np(c))
P.V("E:Failure:")
P.V(C.e.a_("E:",q))
throw H.e(q)}return s},
n_:function(a,b,c){var t,s,r,q,p,o,n
C.f.cr(a,0,a.length,0)
C.f.cr(b,0,4,0)
for(t=c.length,s=0,r=0;r<c.length;c.length===t||(0,H.z)(c),++r){q=c[r]
p=s*16
o=q.x.a
n=o[0]
a[p]=n
a[p+1]=o[1]
a[p+2]=o[2]
o=q.y.a
a[p+4]=o[0]
a[p+5]=o[1]
a[p+6]=o[2]
o=q.z.a
a[p+8]=o[0]
a[p+9]=o[1]
a[p+10]=o[2]
o=q.Q.a
a[p+12]=o[0]
a[p+13]=o[1]
a[p+14]=o[2]
a[p+7]=q.ch
a[p+11]=Math.cos(q.cx)
a[p+15]=q.cy
b[s]=q.d;++s}},
kX:function(a){var t=new G.fi(P.L(),a,!1,!0)
t.dA(a)
return t},
kM:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.jC(a[s])
b[t+1]=J.jD(a[s])
b[t+2]=J.kh(a[s])}return b},
mV:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.jC(a[s])
b[t+1]=J.jD(a[s])}return b},
mW:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.jC(a[s])
b[t+1]=J.jD(a[s])
b[t+2]=J.kh(a[s])
b[t+3]=J.mk(a[s])}return b},
mU:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.bb(a[s],0)
b[t+1]=J.bb(a[s],1)
b[t+2]=J.bb(a[s],2)
b[t+3]=J.bb(a[s],3)}return b},
nx:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
for(t=a.e,s=t.gG(t),s=s.gw(s),r=b.x,q=[[P.c,P.o]],p=[P.R],o=[T.ai],n=[T.q],m=[T.a3];s.p();){l=s.gq()
if(!r.F(0,l)){k="Dropping unnecessary attribute: "+H.f(l)
if($.lC>0)H.dW("I: "+k)
continue}j=t.h(0,l)
switch($.$get$Y().h(0,l).a){case"vec2":b.ae(l,G.mV(H.dX(j,"$isc",m,"$asc"),null),2)
break
case"vec3":b.ae(l,G.kM(H.dX(j,"$isc",n,"$asc"),null),3)
break
case"vec4":b.ae(l,G.mW(H.dX(j,"$isc",o,"$asc"),null),4)
break
case"float":b.ae(l,new Float32Array(H.iY(H.dX(j,"$isc",p,"$asc"))),1)
break
case"uvec4":b.ae(l,G.mU(H.dX(j,"$isc",q,"$asc"),null),4)
break
default:if(H.aK(!1))H.b9("unknown type for "+H.f(l)+" ["+J.mi(j[0]).l(0)+"] ["+new H.aI(H.j9(j),null).l(0)+"] "+H.f(j))}}},
kO:function(a,b,c){var t,s,r,q,p,o,n,m
t=b.d
s=b.e.x
r=P.L()
q=J.m6(t.a)
p=new G.fk(t,q,4,r,s,null,0,-1,null,null,P.L(),C.e.a_("meshdata:",a),!1,!0)
o=G.kM(c.d,null)
r.i(0,"aPosition",J.jA(t.a))
p.ch=o
p.bA("aPosition",o,3)
n=$.$get$Y().h(0,"aPosition")
if(n==null)H.F("Unknown canonical aPosition")
H.b(s.F(0,"aPosition"))
m=s.h(0,"aPosition")
J.dZ(t.a,q)
t.cq(0,m,0)
s=r.h(0,"aPosition")
r=n.bB()
J.dY(t.a,34962,s)
J.kp(t.a,m,r,5126,!1,0,0)
s=c.du()
p.y=J.jA(t.a)
H.b(p.ch!=null)
r=p.ch.length
if(r<768){p.saT(new Uint8Array(H.iY(s)))
p.Q=5121}else if(r<196608){p.saT(new Uint16Array(H.iY(s)))
p.Q=5123}else{p.saT(new Uint32Array(H.iY(s)))
p.Q=5125}J.dZ(t.a,q)
s=p.y
r=p.cx
q=J.u(r)
H.b(!!q.$isle||!!q.$islf||!!q.$islg)
J.dY(t.a,34963,s)
J.kg(t.a,34963,r,35048)
G.nx(c,p)
return p},
l0:function(a,b,c,d){var t=new G.fV(b,c,d,null,null,P.L(),P.L(),P.ao(null,null,null,P.r),null,a,!1,!0)
t.dC(a,b,c,d)
return t},
fn:function fn(){},
dL:function dL(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
e6:function e6(){},
e9:function e9(a,b){this.a=a
this.b=b},
eO:function eO(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
B:function B(a,b,c){this.a=a
this.b=b
this.c=c},
eG:function eG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cB:function cB(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
f6:function f6(){},
h6:function h6(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
eS:function eS(a,b,c,d,e,f,g){var _=this
_.x=a
_.y=b
_.z=c
_.d=d
_.a=e
_.b=f
_.c=g},
dJ:function dJ(a,b,c){this.a=a
this.b=b
this.c=c},
dI:function dI(a,b,c){this.a=a
this.b=b
this.c=c},
fi:function fi(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
fk:function fk(a,b,c,d,e,f,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
fH:function fH(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
fV:function fV(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
bq:function bq(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
h4:function h4(){},
hq:function hq(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
c4:function c4(){},
eU:function eU(a,b,c,d,e,f){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f}},R={h9:function h9(){},ha:function ha(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},A={
lz:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=b.dx
t.B(c)
s=b.d
t.cA(0,s)
r=b.ch
if(r!=null&&b.cx!=null){J.a6(b)
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
p.eB(new T.aG(o))
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
a.dt(b.cx,e,d)
e.pop()}for(s=b.cy,r=s.length,l=0;l<s.length;s.length===r||(0,H.z)(s),++l)A.lz(a,s[l],t,d,e)},
bV:function bV(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
fU:function fU(a,b,c,d,e,f,g,h,i,a0,a1){var _=this
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
t=C.f.eS(a,0,new A.ja())
s=536870911&t+(C.b.cW(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
ja:function ja(){}},D={
na:function(a){var t,s
t=new P.J(0,$.x,null,[null])
s=new XMLHttpRequest()
C.p.f7(s,"GET",a)
W.aj(s,"loadend",new D.fc(new P.c7(t,[null]),s),!1,W.os)
C.p.H(s,"")
return t},
jR:function(a){var t,s,r
t=new P.J(0,$.x,null,[null])
s=document.createElement("img")
r=new W.i2(s,"load",!1,[W.j])
r.gb9(r).aF(new D.fb(new P.c7(t,[null]),s))
s.src=a
return t},
fc:function fc(a,b){this.a=a
this.b=b},
fb:function fb(a,b){this.a=a
this.b=b}},T={
U:function(a,b,c){var t=new Float32Array(3)
t[0]=a
t[1]=b
t[2]=c
return new T.q(t)},
lh:function(a){var t=new Float32Array(H.t(3))
t[2]=a
t[1]=a
t[0]=a
return new T.q(t)},
aG:function aG(a){this.a=a},
M:function M(a){this.a=a},
a3:function a3(a){this.a=a},
q:function q(a){this.a=a},
ai:function ai(a){this.a=a}},Q={
oc:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
t={}
s=document
r=new R.ha(0,0,null,null,null,null)
r.dE(C.j.d_(s,"stats"),"blue","gray")
q=C.j.f9(s,"#webgl-canvas")
p=new G.e9(null,q)
s=(q&&C.z).cZ(q,"webgl2",P.aZ(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
p.a=s
if(s==null)H.F(P.cy('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
o="ChronosGL Config: "+J.a6(J.ml(s))
if($.lC>0)P.V("I: "+o)
J.m2(s,0,0,0,1)
J.e_(s,2929)
n=B.nb(0.5,0,0,q)
s=new T.M(new Float32Array(H.t(16)))
s.N()
o=new T.M(new Float32Array(H.t(16)))
o.N()
m=new G.fH(n,50,1,0.1,100,s,o,new T.M(new Float32Array(H.t(16))),P.L(),"perspective",!1,!0)
m.bD()
o=[]
l=new G.eS(o,new Float32Array(H.t(64)),new Float32Array(H.t(4)),P.L(),"illumination",!1,!0)
s=$.$get$ka()
C.a.j(o,new G.h6(s,s,$.$get$lw(),$.$get$lx(),50,0.95,2,1,1,50,new T.M(new Float32Array(H.t(16))),new T.M(new Float32Array(H.t(16))),2,"spot",!1,!0))
s=H.E([],[A.bY])
k=new A.fU(null,p,s,17664,0,0,0,0,"main",!1,!0)
k.d=new G.eO(p,null,null,null,null)
o=G.l0("Fixed",p,$.$get$lN(),$.$get$lM())
j=[]
H.b(!0)
C.a.j(s,new A.bY(o,[m,l],j,"Fixed",!1,!0))
i=G.kX("light")
i.O("uColor",$.$get$kz())
i.O("uShininess",25)
o=G.kO("icosahedron-4",o,B.mZ(4,0.1,!0))
h=new Float32Array(H.t(9))
g=new T.M(new Float32Array(H.t(16)))
g.N()
f=new Float32Array(H.t(16))
e=new T.M(f)
e.N()
d=new Float32Array(H.t(3))
c=new Float32Array(H.t(3))
b=new Float32Array(H.t(3))
a=new Float32Array(H.t(3))
a0=$.$get$ka().a
f[12]=a0[0]
f[13]=a0[1]
f[14]=a0[2]
H.b(!0)
C.a.j(j,new A.bV(i,o,[],new T.aG(h),g,e,new T.q(d),new T.q(c),new T.q(b),new T.q(a),"pointLight",!1,!0))
a=G.l0("main",p,$.$get$lS(),$.$get$lB())
a1=new A.bY(a,[m,l],[],"main",!1,!0)
H.b(!0)
C.a.j(s,a1)
s=new Q.jn(q,m,k)
s.$1(null)
W.aj(window,"resize",s,!1,W.j)
t.a=0
a2=G.kX("mat")
a2.O("uColor",$.$get$ky())
a2.O("uShininess",25)
P.mY([D.na($.$get$k8()),D.jR($.$get$kc()),D.jR($.$get$lO()),D.jR($.$get$lI())],null,!1).aF(new Q.jm(p,a1,new Q.jl(t,r,n,k),a2))},
jn:function jn(a,b,c){this.a=a
this.b=b
this.c=c},
jl:function jl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jm:function jm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},Y={
nv:function(a){var t,s,r,q,p
t=J.H(a)
s=t.h(a,"skinIndices")
r=t.h(a,"skinWeights")
if(s==null||J.bc(s)===0)return 0
t=C.c.E(J.bc(t.h(a,"vertices")),3)
q=J.H(s)
p=C.b.ad(q.gk(s),t)
t*=p
H.b(t===q.gk(s))
H.b(t===J.bc(r))
H.b(p<=4)
P.V("Skin multiplier is "+p)
return p},
n0:function(b2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
t=[]
s=Y.nv(b2)
r=J.H(b2)
q=r.h(b2,"faces")
p=J.H(q)
P.V("faces: "+p.gk(q))
o=Y.kA(r.h(b2,"vertices"))
n=Y.kA(r.h(b2,"normals"))
m=s===0
l=m?null:Y.kB(s,r.h(b2,"skinIndices"))
k=m?null:Y.kB(s,r.h(b2,"skinWeights"))
if(k!=null)for(m=k.length,j=0;j<m;++j){i=k[j]
h=i.a
g=h[0]+h[1]+h[2]+h[3]
if(g<0.98||g>1.02)H.dW("bad vector: "+J.a6(i))}f=Y.mN(J.bb(r.h(b2,"uvs"),0))
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
C.a.j(a5,p.h(q,d))}}for(;C.b.d0(t.length,a1);){a7=new G.cB(!1,[],[],[],P.L())
if(h)a7.a5("aNormal")
if(m)a7.a5("aTexUV")
if(r){a7.a5("aBoneIndex")
a7.a5("aBoneWeight")}C.a.j(t,a7)}a7=C.a.h(t,a1)
a8=[]
for(a9=a.length,j=0;j<a.length;a.length===a9||(0,H.z)(a),++j)C.a.j(a8,C.a.h(o,a[j]))
if(g===3)a7.bz(a8)
else{H.b(g===4)
a7.dm(a8)}if(a2.length>0)a7.bv("aTexUV",a2)
if(a3.length>0)a7.bw("aNormal",a3)
if(r){H.b(e===l.length)
H.b(e===k.length)
b0=[]
b1=[]
for(a9=a.length,j=0;j<a.length;a.length===a9||(0,H.z)(a),++j){c=a[j]
C.a.j(b0,C.a.h(l,c))
C.a.j(b1,C.a.h(k,c))}a7.bx("aBoneIndex",b0)
a7.bx("aBoneWeight",b1)}}P.V("out: "+t.length+" "+t[0].l(0))
return t},
kA:function(a){var t,s,r,q,p,o,n,m
t=J.H(a)
s=H.E(new Array(C.b.E(t.gk(a),3)),[T.q])
for(r=0;r<t.gk(a);r+=3){q=C.b.E(r,3)
p=J.bB(t.h(a,r))
o=J.bB(t.h(a,r+1))
n=J.bB(t.h(a,r+2))
m=new Float32Array(3)
m[0]=p
m[1]=o
m[2]=n
s[q]=new T.q(m)}return s},
mN:function(a){var t,s,r,q,p,o,n
t=J.H(a)
s=H.E(new Array(C.b.E(t.gk(a),2)),[T.a3])
for(r=0;r<t.gk(a);r+=2){q=C.b.E(r,2)
p=J.bB(t.h(a,r))
o=J.bB(t.h(a,r+1))
n=new Float32Array(2)
n[0]=p
n[1]=o
s[q]=new T.a3(n)}return s},
kB:function(a,b){var t,s,r,q,p,o
t=J.H(b)
s=H.E(new Array(C.b.ad(t.gk(b),a)),[T.ai])
for(r=0,q=0;r<t.gk(b);r+=a,++q){p=new Float32Array(4)
for(o=0;o<a;++o)p[o]=J.bB(t.h(b,r+o))
s[q]=new T.ai(p)}return s}}
var v=[C,H,J,P,W,B,G,R,A,D,T,Q,Y]
setFunctionNamesIfNecessary(v)
var $={}
H.jL.prototype={}
J.a.prototype={
v:function(a,b){return a===b},
gu:function(a){return H.b_(a)},
l:function(a){return H.fP(a)},
gA:function(a){return new H.aI(H.j9(a),null)}}
J.f_.prototype={
l:function(a){return String(a)},
gu:function(a){return a?519018:218159},
gA:function(a){return C.a1},
$isaB:1}
J.f0.prototype={
v:function(a,b){return null==b},
l:function(a){return"null"},
gu:function(a){return 0},
gA:function(a){return C.W}}
J.bM.prototype={
gu:function(a){return 0},
gA:function(a){return C.V},
l:function(a){return String(a)},
$iskU:1}
J.fJ.prototype={}
J.b2.prototype={}
J.aX.prototype={
l:function(a){var t=a[$.$get$kD()]
return t==null?this.dj(a):J.a6(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isjJ:1}
J.aV.prototype={
b7:function(a,b){if(!!a.immutable$list)throw H.e(new P.w(b))},
b6:function(a,b){if(!!a.fixed$length)throw H.e(new P.w(b))},
j:function(a,b){this.b6(a,"add")
a.push(b)},
J:function(a,b){var t,s,r,q,p
t=a.length
this.b6(a,"addAll")
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.z)(b),++r,t=p){q=b[r]
p=t+1
H.b(t===a.length||H.F(new P.a_(a)))
a.push(q)}},
cz:function(a,b){return new H.bN(a,b,[H.aC(a,0),null])},
ar:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.f(a[s])
return t.join(b)},
t:function(a,b){return this.h(a,b)},
gb9:function(a){if(a.length>0)return a[0]
throw H.e(H.dj())},
gaE:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.e(H.dj())},
bp:function(a,b,c,d,e){var t,s
this.b7(a,"setRange")
P.jU(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.F(P.b0(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.e(H.n8())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=d[e+s]
else for(s=0;s<t;++s)a[b+s]=d[e+s]},
c3:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.e(new P.a_(a))}return!1},
de:function(a,b){this.b7(a,"sort")
H.dE(a,0,a.length-1,P.nY())},
aJ:function(a){return this.de(a,null)},
C:function(a,b){var t
for(t=0;t<a.length;++t)if(J.G(a[t],b))return!0
return!1},
l:function(a){return P.eZ(a,"[","]")},
gw:function(a){return new J.e3(a,a.length,0,null,[H.aC(a,0)])},
gu:function(a){return H.b_(a)},
gk:function(a){return a.length},
sk:function(a,b){this.b6(a,"set length")
if(b<0)throw H.e(P.b0(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.T(a,b))
if(b>=a.length||b<0)throw H.e(H.T(a,b))
return a[b]},
i:function(a,b,c){this.b7(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.T(a,b))
if(b>=a.length||b<0)throw H.e(H.T(a,b))
a[b]=c},
$isn:1,
$asn:function(){},
$isd:1,
$asd:null,
$isc:1,
$asc:null}
J.jK.prototype={}
J.e3.prototype={
gq:function(){return this.d},
p:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.e(H.z(t))
r=this.c
if(r>=s){this.sbE(null)
return!1}this.sbE(t[r]);++this.c
return!0},
sbE:function(a){this.d=a}}
J.bl.prototype={
T:function(a,b){var t
if(typeof b!=="number")throw H.e(H.Q(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaC(b)
if(this.gaC(a)===t)return 0
if(this.gaC(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaC:function(a){return a===0?1/a<0:a<0},
ev:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.e(new P.w(""+a+".ceil()"))},
a9:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(new P.w(""+a+".round()"))},
ew:function(a,b,c){if(this.T(b,c)>0)throw H.e(H.Q(b))
if(this.T(a,b)<0)return b
if(this.T(a,c)>0)return c
return a},
fh:function(a){return a},
fl:function(a,b){var t
if(b>20)throw H.e(P.b0(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gaC(a))return"-"+t
return t},
l:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu:function(a){return a&0x1FFFFFFF},
a_:function(a,b){if(typeof b!=="number")throw H.e(H.Q(b))
return a+b},
ac:function(a,b){if(typeof b!=="number")throw H.e(H.Q(b))
return a-b},
cX:function(a,b){if(typeof b!=="number")throw H.e(H.Q(b))
return a/b},
K:function(a,b){if(typeof b!=="number")throw H.e(H.Q(b))
return a*b},
ad:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.c_(a,b)},
E:function(a,b){return(a|0)===a?a/b|0:this.c_(a,b)},
c_:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.e(new P.w("Result of truncating division is "+H.f(t)+": "+H.f(a)+" ~/ "+b))},
aY:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
cW:function(a,b){if(typeof b!=="number")throw H.e(H.Q(b))
return(a&b)>>>0},
dl:function(a,b){if(typeof b!=="number")throw H.e(H.Q(b))
return(a^b)>>>0},
aw:function(a,b){if(typeof b!=="number")throw H.e(H.Q(b))
return a<b},
av:function(a,b){if(typeof b!=="number")throw H.e(H.Q(b))
return a>b},
d0:function(a,b){if(typeof b!=="number")throw H.e(H.Q(b))
return a<=b},
cY:function(a,b){if(typeof b!=="number")throw H.e(H.Q(b))
return a>=b},
gA:function(a){return C.a4},
$isZ:1}
J.dm.prototype={
gA:function(a){return C.a3},
$isR:1,
$iso:1,
$isZ:1}
J.dl.prototype={
gA:function(a){return C.a2},
$isR:1,
$isZ:1}
J.aW.prototype={
aO:function(a,b){if(b>=a.length)throw H.e(H.T(a,b))
return a.charCodeAt(b)},
a_:function(a,b){if(typeof b!=="string")throw H.e(P.kq(b,null,null))
return a+b},
df:function(a,b,c){var t
if(c>a.length)throw H.e(P.b0(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
br:function(a,b){return this.df(a,b,0)},
bt:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.fQ(b,null,null))
if(b>c)throw H.e(P.fQ(b,null,null))
if(c>a.length)throw H.e(P.fQ(c,null,null))
return a.substring(b,c)},
dg:function(a,b){return this.bt(a,b,null)},
fk:function(a){return a.toLowerCase()},
ez:function(a,b,c){if(c>a.length)throw H.e(P.b0(c,0,a.length,null,null))
return H.ol(a,b,c)},
T:function(a,b){var t
if(typeof b!=="string")throw H.e(H.Q(b))
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
gA:function(a){return C.X},
gk:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.e(H.T(a,b))
return a[b]},
$isn:1,
$asn:function(){},
$isr:1}
H.d.prototype={$asd:null}
H.bm.prototype={
gw:function(a){return new H.dp(this,this.gk(this),0,null,[H.ak(this,"bm",0)])},
aH:function(a,b){return this.di(0,b)},
fj:function(a,b){var t,s
t=H.E([],[H.ak(this,"bm",0)])
C.a.sk(t,this.gk(this))
for(s=0;s<this.gk(this);++s)t[s]=this.t(0,s)
return t},
fi:function(a){return this.fj(a,!0)}}
H.dp.prototype={
gq:function(){return this.d},
p:function(){var t,s,r,q
t=this.a
s=J.H(t)
r=s.gk(t)
if(this.b!==r)throw H.e(new P.a_(t))
q=this.c
if(q>=r){this.sai(null)
return!1}this.sai(s.t(t,q));++this.c
return!0},
sai:function(a){this.d=a}}
H.dq.prototype={
gw:function(a){return new H.fe(null,J.bA(this.a),this.b,this.$ti)},
gk:function(a){return J.bc(this.a)},
$asa0:function(a,b){return[b]}}
H.em.prototype={$isd:1,
$asd:function(a,b){return[b]}}
H.fe.prototype={
p:function(){var t=this.b
if(t.p()){this.sai(this.c.$1(t.gq()))
return!0}this.sai(null)
return!1},
gq:function(){return this.a},
sai:function(a){this.a=a},
$asdk:function(a,b){return[b]}}
H.bN.prototype={
gk:function(a){return J.bc(this.a)},
t:function(a,b){return this.b.$1(J.mc(this.a,b))},
$asd:function(a,b){return[b]},
$asbm:function(a,b){return[b]},
$asa0:function(a,b){return[b]}}
H.dM.prototype={
gw:function(a){return new H.hK(J.bA(this.a),this.b,this.$ti)}}
H.hK.prototype={
p:function(){var t,s
for(t=this.a,s=this.b;t.p();)if(s.$1(t.gq()))return!0
return!1},
gq:function(){return this.a.gq()}}
H.cz.prototype={}
H.jv.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.jw.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.ix.prototype={
sf1:function(a){this.z=a},
sf4:function(a){this.ch=a}}
H.b6.prototype={
c2:function(a,b){if(!this.f.v(0,a))return
if(this.Q.j(0,b)&&!this.y)this.y=!0
this.b4()},
fc:function(a){var t,s,r,q,p
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
if(q===r.c)r.bU();++r.d}this.y=!1}this.b4()},
ek:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.u(a),s=0;r=this.ch,s<r.length;s+=2)if(t.v(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).j(r,a)
t=this.ch;(t&&C.a).j(t,b)},
fb:function(a){var t,s,r
if(this.ch==null)return
for(t=J.u(a),s=0;r=this.ch,s<r.length;s+=2)if(t.v(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.F(new P.w("removeRange"))
P.jU(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
da:function(a,b){if(!this.r.v(0,a))return
this.db=b},
eW:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.H(0,c)
return}H.b(b===1)
t=this.cx
if(t==null){t=P.jQ(null,null)
this.cx=t}t.W(0,new H.ir(a,c))},
eV:function(a,b){var t
if(!this.r.v(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.aD()
return}H.b(b===1)
t=this.cx
if(t==null){t=P.jQ(null,null)
this.cx=t}t.W(0,this.gf2())},
eX:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.V(a)
if(b!=null)P.V(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.a6(a)
s[1]=b==null?null:b.l(0)
for(r=new P.cb(t,t.r,null,null,[null]),r.c=t.e;r.p();)r.d.H(0,s)},
an:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.P(o)
p=H.as(o)
this.eX(q,p)
if(this.db){this.aD()
if(this===u.globalState.e)throw o}}finally{this.cy=H.nS(r)
u.globalState.d=H.k5(t,"$isb6")
if(t!=null)$=t.gf0()
if(this.cx!=null)for(;n=this.cx,!n.gaq(n);)this.cx.cC().$0()}return s},
cw:function(a){return this.b.h(0,a)},
bH:function(a,b){var t=this.b
if(t.F(0,a))throw H.e(P.cy("Registry: ports must be registered only once."))
t.i(0,a,b)},
b4:function(){var t=this.b
if(t.gk(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.aD()},
aD:function(){var t,s,r
t=this.cx
if(t!=null)t.Y(0)
for(t=this.b,s=t.gcT(t),s=s.gw(s);s.p();)s.gq().dT()
t.Y(0)
this.c.Y(0)
u.globalState.z.as(0,this.a)
this.dx.Y(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].H(0,t[r+1])
this.ch=null}},
gf0:function(){return this.d},
geA:function(){return this.e}}
H.ir.prototype={
$0:function(){this.a.H(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.i3.prototype={
eK:function(){var t=this.a
if(t.b===t.c)return
return t.cC()},
cE:function(){var t,s,r
t=this.eK()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.F(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gaq(s)}else s=!1
else s=!1
else s=!1
if(s)H.F(P.cy("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gaq(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aZ(["command","close"])
r=new H.ar(!0,new P.dP(0,null,null,null,null,null,0,[null,P.o])).L(r)
s.toString
self.postMessage(r)}return!1}t.f8()
return!0},
bY:function(){if(self.window!=null)new H.i4(this).$0()
else for(;this.cE(););},
at:function(){var t,s,r,q,p
if(!u.globalState.x)this.bY()
else try{this.bY()}catch(r){t=H.P(r)
s=H.as(r)
q=u.globalState.Q
p=P.aZ(["command","error","msg",H.f(t)+"\n"+H.f(s)])
p=new H.ar(!0,P.cc(null,P.o)).L(p)
q.toString
self.postMessage(p)}}}
H.i4.prototype={
$0:function(){if(!this.a.cE())return
P.no(C.o,this)},
$S:function(){return{func:1,v:true}}}
H.b7.prototype={
f8:function(){var t=this.a
if(t.y){C.a.j(t.z,this)
return}t.an(this.b)}}
H.iw.prototype={}
H.eX.prototype={
$0:function(){H.n4(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.eY.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(!this.d)this.a.$1(this.c)
else{s=this.a
if(H.by(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.by(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.b4()},
$S:function(){return{func:1,v:true}}}
H.hW.prototype={}
H.bu.prototype={
H:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.nD(b)
if(t.geA()===s){s=J.H(r)
switch(s.h(r,0)){case"pause":t.c2(s.h(r,1),s.h(r,2))
break
case"resume":t.fc(s.h(r,1))
break
case"add-ondone":t.ek(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.fb(s.h(r,1))
break
case"set-errors-fatal":t.da(s.h(r,1),s.h(r,2))
break
case"ping":t.eW(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.eV(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.j(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.as(0,s)
break}return}u.globalState.f.a.W(0,new H.b7(t,new H.iy(this,r),"receive"))},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bu){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gu:function(a){return this.b.a}}
H.iy.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dP(0,this.b)},
$S:function(){return{func:1}}}
H.ce.prototype={
H:function(a,b){var t,s,r
t=P.aZ(["command","message","port",this,"msg",b])
s=new H.ar(!0,P.cc(null,P.o)).L(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.ce){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gu:function(a){return C.b.dl((this.b<<16^this.a<<8)>>>0,this.c)}}
H.bp.prototype={
dT:function(){this.c=!0
this.b=null},
dP:function(a,b){if(this.c)return
this.b.$1(b)},
$isnj:1}
H.hs.prototype={
dF:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.W(0,new H.b7(s,new H.ht(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.aL(new H.hu(this,b),0),a)}else{H.b(a>0)
throw H.e(new P.w("Timer greater than 0."))}}}
H.ht.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.hu.prototype={
$0:function(){this.a.c=null
H.jk()
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.av.prototype={
gu:function(a){var t=this.a
t=C.b.aY(t,0)^C.b.E(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
v:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.av){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.ar.prototype={
L:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gk(t))
t=J.u(a)
if(!!t.$isbQ)return["buffer",a]
if(!!t.$isbn)return["typed",a]
if(!!t.$isn)return this.d5(a)
if(!!t.$isn1){r=this.gd2()
q=t.gG(a)
q=H.jS(q,r,H.ak(q,"a0",0),null)
q=P.kV(q,!0,H.ak(q,"a0",0))
t=t.gcT(a)
t=H.jS(t,r,H.ak(t,"a0",0),null)
return["map",q,P.kV(t,!0,H.ak(t,"a0",0))]}if(!!t.$iskU)return this.d6(a)
if(!!t.$isa)this.cR(a)
if(!!t.$isnj)this.au(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isbu)return this.d7(a)
if(!!t.$isce)return this.d8(a)
if(!!t.$isbe){p=a.$static_name
if(p==null)this.au(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isav)return["capability",a.a]
if(!(a instanceof P.m))this.cR(a)
return["dart",u.classIdExtractor(a),this.d4(u.classFieldsExtractor(a))]},
au:function(a,b){throw H.e(new P.w((b==null?"Can't transmit:":b)+" "+H.f(a)))},
cR:function(a){return this.au(a,null)},
d5:function(a){var t
H.b(typeof a!=="string")
t=this.d3(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.au(a,"Can't serialize indexable: ")},
d3:function(a){var t,s
t=[]
C.a.sk(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.L(a[s])
return t},
d4:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.L(a[t]))
return a},
d6:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.au(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sk(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.L(a[t[r]])
return["js-object",t,s]},
d8:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
d7:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.b5.prototype={
Z:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.e(P.cn("Bad serialized message: "+H.f(a)))
switch(C.a.gb9(a)){case"ref":H.b(J.G(a[0],"ref"))
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
s=H.E(this.am(t),[null])
s.fixed$length=Array
return s
case"extendable":H.b(J.G(a[0],"extendable"))
t=a[1]
C.a.j(this.b,t)
return H.E(this.am(t),[null])
case"mutable":H.b(J.G(a[0],"mutable"))
t=a[1]
C.a.j(this.b,t)
return this.am(t)
case"const":H.b(J.G(a[0],"const"))
t=a[1]
C.a.j(this.b,t)
s=H.E(this.am(t),[null])
s.fixed$length=Array
return s
case"map":return this.eN(a)
case"sendport":return this.eO(a)
case"raw sendport":H.b(J.G(a[0],"raw sendport"))
t=a[1]
C.a.j(this.b,t)
return t
case"js-object":return this.eM(a)
case"function":H.b(J.G(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.j(this.b,t)
return t
case"capability":H.b(J.G(a[0],"capability"))
return new H.av(a[1])
case"dart":H.b(J.G(a[0],"dart"))
r=a[1]
q=a[2]
p=u.instanceFromClassId(r)
C.a.j(this.b,p)
this.am(q)
return u.initializeEmptyInstance(r,p,q)
default:throw H.e("couldn't deserialize: "+H.f(a))}},
am:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.Z(a[t]))
return a},
eN:function(a){var t,s,r,q,p
H.b(J.G(a[0],"map"))
t=a[1]
s=a[2]
r=P.L()
C.a.j(this.b,r)
t=J.mq(t,this.geL()).fi(0)
for(q=J.H(s),p=0;p<t.length;++p)r.i(0,t[p],this.Z(q.h(s,p)))
return r},
eO:function(a){var t,s,r,q,p,o,n
H.b(J.G(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.cw(r)
if(o==null)return
n=new H.bu(o,s)}else n=new H.ce(t,r,s)
C.a.j(this.b,n)
return n},
eM:function(a){var t,s,r,q,p,o
H.b(J.G(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.j(this.b,r)
for(q=J.H(t),p=J.H(s),o=0;o<q.gk(t);++o)r[q.h(t,o)]=this.Z(p.h(s,o))
return r}}
H.fT.prototype={}
H.hz.prototype={
R:function(a){var t,s,r
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
H.hC.prototype={
l:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.jx.prototype={
$1:function(a){if(!!J.u(a).$isbh)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.dR.prototype={
l:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.jf.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.jg.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.jh.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.ji.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.jj.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.be.prototype={
l:function(a){return"Closure '"+H.dA(this).trim()+"'"},
$isjJ:1,
gfp:function(){return this},
$D:null}
H.hm.prototype={}
H.h8.prototype={
l:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bC.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bC))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gu:function(a){var t,s
t=this.c
if(t==null)s=H.b_(this.a)
else s=typeof t!=="object"?J.au(t):H.b_(t)
return(s^H.b_(this.b))>>>0},
l:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.f(this.d)+"' of "+H.fP(t)}}
H.hB.prototype={
l:function(a){return this.a}}
H.e8.prototype={
l:function(a){return this.a}}
H.fZ.prototype={
l:function(a){return"RuntimeError: "+H.f(this.a)}}
H.hQ.prototype={
l:function(a){return C.e.a_("Assertion failed: ",P.jI(this.a))}}
H.aI.prototype={
l:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gu:function(a){return J.au(this.a)},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.aI){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.an.prototype={
gk:function(a){return this.a},
gaq:function(a){return this.a===0},
gG:function(a){return new H.f8(this,[H.aC(this,0)])},
gcT:function(a){return H.jS(this.gG(this),new H.f1(this),H.aC(this,0),H.aC(this,1))},
F:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bR(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bR(s,b)}else return this.eY(b)},
eY:function(a){var t=this.d
if(t==null)return!1
return this.ap(this.aA(t,this.ao(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.aj(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.aj(r,b)
return s==null?null:s.b}else return this.eZ(b)},
eZ:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.aA(t,this.ao(a))
r=this.ap(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aU()
this.b=t}this.bG(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aU()
this.c=s}this.bG(s,b,c)}else{r=this.d
if(r==null){r=this.aU()
this.d=r}q=this.ao(b)
p=this.aA(r,q)
if(p==null)this.aX(r,q,[this.aV(b,c)])
else{o=this.ap(p,b)
if(o>=0)p[o].b=c
else p.push(this.aV(b,c))}}},
as:function(a,b){if(typeof b==="string")return this.bX(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bX(this.c,b)
else return this.f_(b)},
f_:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.aA(t,this.ao(a))
r=this.ap(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.c0(q)
return q.b},
Y:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
a8:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.e(new P.a_(this))
t=t.c}},
bG:function(a,b,c){var t=this.aj(a,b)
if(t==null)this.aX(a,b,this.aV(b,c))
else t.b=c},
bX:function(a,b){var t
if(a==null)return
t=this.aj(a,b)
if(t==null)return
this.c0(t)
this.bS(a,b)
return t.b},
aV:function(a,b){var t,s
t=new H.f7(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
c0:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.r=this.r+1&67108863},
ao:function(a){return J.au(a)&0x3ffffff},
ap:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.G(a[s].a,b))return s
return-1},
l:function(a){return P.kW(this)},
aj:function(a,b){return a[b]},
aA:function(a,b){return a[b]},
aX:function(a,b,c){H.b(c!=null)
a[b]=c},
bS:function(a,b){delete a[b]},
bR:function(a,b){return this.aj(a,b)!=null},
aU:function(){var t=Object.create(null)
this.aX(t,"<non-identifier-key>",t)
this.bS(t,"<non-identifier-key>")
return t},
$isn1:1}
H.f1.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.f7.prototype={}
H.f8.prototype={
gk:function(a){return this.a.a},
gw:function(a){var t,s
t=this.a
s=new H.f9(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.f9.prototype={
gq:function(){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a_(t))
else{t=this.c
if(t==null){this.sbF(null)
return!1}else{this.sbF(t.a)
this.c=this.c.c
return!0}}},
sbF:function(a){this.d=a}}
H.jb.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.jc.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.r]}}}
H.jd.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.r]}}}
H.bQ.prototype={
gA:function(a){return C.O},
$isbQ:1}
H.bn.prototype={$isbn:1}
H.fo.prototype={
gA:function(a){return C.P}}
H.ds.prototype={
gk:function(a){return a.length},
$isn:1,
$asn:function(){},
$isp:1,
$asp:function(){}}
H.dt.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.F(H.T(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.F(H.T(a,b))
a[b]=c}}
H.du.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.F(H.T(a,b))
a[b]=c},
$isd:1,
$asd:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]}}
H.dr.prototype={
gA:function(a){return C.Q},
$isd:1,
$asd:function(){return[P.R]},
$isc:1,
$asc:function(){return[P.R]},
$iseK:1}
H.fp.prototype={
gA:function(a){return C.R},
$isd:1,
$asd:function(){return[P.R]},
$isc:1,
$asc:function(){return[P.R]}}
H.fq.prototype={
gA:function(a){return C.S},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.F(H.T(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]}}
H.fr.prototype={
gA:function(a){return C.T},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.F(H.T(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]},
$iskR:1}
H.fs.prototype={
gA:function(a){return C.U},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.F(H.T(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]}}
H.ft.prototype={
gA:function(a){return C.Y},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.F(H.T(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]},
$isle:1}
H.fu.prototype={
gA:function(a){return C.Z},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.F(H.T(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]},
$islf:1}
H.dv.prototype={
gA:function(a){return C.a_},
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.F(H.T(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]}}
H.fv.prototype={
gA:function(a){return C.a0},
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.F(H.T(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]},
$islg:1}
H.bR.prototype={
$asn:function(){},
$isd:1,
$asd:function(){return[P.o]},
$asp:function(){},
$isc:1,
$asc:function(){return[P.o]}}
H.bS.prototype={
$asn:function(){},
$isd:1,
$asd:function(){return[P.R]},
$asp:function(){},
$isc:1,
$asc:function(){return[P.R]}}
H.bT.prototype={
$asn:function(){},
$asd:function(){return[P.R]},
$asp:function(){},
$asc:function(){return[P.R]}}
H.bU.prototype={
$asn:function(){},
$asd:function(){return[P.o]},
$asp:function(){},
$asc:function(){return[P.o]}}
P.hS.prototype={
$1:function(a){var t,s
H.jk()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.hR.prototype={
$1:function(a){var t,s
t=this.a
H.b(t.a==null);++u.globalState.f.b
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.hT.prototype={
$0:function(){H.jk()
this.a.$0()},
$S:function(){return{func:1}}}
P.hU.prototype={
$0:function(){H.jk()
this.a.$0()},
$S:function(){return{func:1}}}
P.eQ.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.b)this.d.I(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.b)this.d.I(t.c,t.d)},
$S:function(){return{func:1,args:[,,]}}}
P.eP.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){r[this.e]=a
if(s===0)this.d.bQ(r)}else if(t.b===0&&!this.b)this.d.I(t.c,t.d)},
$S:function(){return{func:1,args:[,]}}}
P.hY.prototype={
ey:function(a,b){if(a==null)a=new P.bo()
if(this.a.a!==0)throw H.e(new P.ap("Future already completed"))
$.x.toString
this.I(a,b)},
ex:function(a){return this.ey(a,null)}}
P.c7.prototype={
al:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.ap("Future already completed"))
t.bI(b)},
I:function(a,b){this.a.bJ(a,b)}}
P.iO.prototype={
al:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.ap("Future already completed"))
t.ah(b)},
I:function(a,b){this.a.I(a,b)}}
P.c8.prototype={
f5:function(a){if(this.c!==6)return!0
H.b(!0)
return this.b.b.bd(this.d,a.a)},
eU:function(a){var t,s
t=(this.c&2)!==0
if(t){H.b(t)
t=this.e!=null}else t=!1
H.b(t)
s=this.e
t=this.b.b
if(H.by(s,{func:1,args:[P.m,P.c_]}))return t.fd(s,a.a,a.b)
else return t.bd(s,a.a)}}
P.J.prototype={
bf:function(a,b){var t,s,r
t=$.x
if(t!==C.d){t.toString
if(b!=null)b=P.nK(b,t)}s=new P.J(0,t,null,[null])
r=b==null?1:3
this.aN(new P.c8(null,s,r,a,b,[H.aC(this,0),null]))
return s},
aF:function(a){return this.bf(a,null)},
fo:function(a){var t,s
t=$.x
s=new P.J(0,t,null,this.$ti)
if(t!==C.d)t.toString
t=H.aC(this,0)
this.aN(new P.c8(null,s,8,a,null,[t,t]))
return s},
bL:function(a){H.b(this.a<4)
H.b(a.a>=4)
this.a=a.a
this.c=a.c},
aN:function(a){var t
H.b(a.a==null)
t=this.a
if(t<=1){a.a=H.k5(this.c,"$isc8")
this.c=a}else{if(t===2){H.b(!0)
t=this.c
if(t.a<4){t.aN(a)
return}this.bL(t)}H.b(this.a>=4)
t=this.b
t.toString
P.bw(null,null,t,new P.i9(this,a))}},
bW:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.b(!0)
s=this.c
if(s.a<4){s.bW(a)
return}this.bL(s)}H.b(this.a>=4)
t.a=this.ak(a)
s=this.b
s.toString
P.bw(null,null,s,new P.ii(t,this))}},
aW:function(){H.b(this.a<4)
var t=this.c
this.c=null
return this.ak(t)},
ak:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
ah:function(a){var t,s
H.b(this.a<4)
t=this.$ti
if(H.ci(a,"$isaU",t,"$asaU"))if(H.ci(a,"$isJ",t,null))P.ic(a,this)
else P.lj(a,this)
else{s=this.aW()
H.b(this.a<4)
this.a=4
this.c=a
P.bt(this,s)}},
bQ:function(a){var t
H.b(this.a<4)
H.b(!J.u(a).$isaU)
t=this.aW()
H.b(this.a<4)
this.a=4
this.c=a
P.bt(this,t)},
I:function(a,b){var t
H.b(this.a<4)
t=this.aW()
H.b(this.a<4)
this.a=8
this.c=new P.bd(a,b)
P.bt(this,t)},
dU:function(a){return this.I(a,null)},
bI:function(a){var t
H.b(this.a<4)
if(H.ci(a,"$isaU",this.$ti,"$asaU")){this.dS(a)
return}H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.bw(null,null,t,new P.ib(this,a))},
dS:function(a){var t
if(H.ci(a,"$isJ",this.$ti,null)){if(a.a===8){H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.bw(null,null,t,new P.ih(this,a))}else P.ic(a,this)
return}P.lj(a,this)},
bJ:function(a,b){var t
H.b(this.a<4)
H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.bw(null,null,t,new P.ia(this,a,b))},
$isaU:1,
gaZ:function(){return this.a},
geb:function(){return this.c}}
P.i9.prototype={
$0:function(){P.bt(this.a,this.b)},
$S:function(){return{func:1}}}
P.ii.prototype={
$0:function(){P.bt(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.id.prototype={
$1:function(a){var t=this.a
H.b(t.a===1)
H.b(t.a===1)
t.a=0
t.ah(a)},
$S:function(){return{func:1,args:[,]}}}
P.ie.prototype={
$2:function(a,b){var t=this.a
H.b(t.a===1)
t.I(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.ig.prototype={
$0:function(){this.a.I(this.b,this.c)},
$S:function(){return{func:1}}}
P.ib.prototype={
$0:function(){this.a.bQ(this.b)},
$S:function(){return{func:1}}}
P.ih.prototype={
$0:function(){P.ic(this.b,this.a)},
$S:function(){return{func:1}}}
P.ia.prototype={
$0:function(){this.a.I(this.b,this.c)},
$S:function(){return{func:1}}}
P.il.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.d
p=q.c
H.b((p&1)===0)
o=(p&2)===0
H.b(o)
t=null
try{H.b(o)
H.b(p===8)
t=q.b.b.cD(q.d)}catch(n){s=H.P(n)
r=H.as(n)
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
return}if(!!J.u(t).$isaU){if(t instanceof P.J&&t.gaZ()>=4){if(t.gaZ()===8){q=t
H.b(q.gaZ()===8)
p=this.b
p.b=q.geb()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.aF(new P.im(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.im.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.ik.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.b((r.c&1)!==0)
this.a.b=r.b.b.bd(r.d,this.c)}catch(q){t=H.P(q)
s=H.as(q)
r=this.a
r.b=new P.bd(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.ij.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.b(q.a===8)
t=q.c
q=this.c
if(q.f5(t)){H.b((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.eU(t)
p.a=!1}}catch(o){s=H.P(o)
r=H.as(o)
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
P.dN.prototype={}
P.c0.prototype={
gk:function(a){var t,s
t={}
s=new P.J(0,$.x,null,[P.o])
t.a=0
this.cu(new P.hf(t),!0,new P.hg(t,s),s.gbP())
return s},
gb9:function(a){var t,s
t={}
s=new P.J(0,$.x,null,[H.ak(this,"c0",0)])
t.a=null
t.a=this.cu(new P.hd(t,this,s),!0,new P.he(s),s.gbP())
return s}}
P.hf.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.hg.prototype={
$0:function(){this.b.ah(this.a.a)},
$S:function(){return{func:1}}}
P.hd.prototype={
$1:function(a){P.nC(this.a.a,this.c,a)},
$S:function(){return H.nV(function(a){return{func:1,args:[a]}},this.b,"c0")}}
P.he.prototype={
$0:function(){var t,s,r,q
try{r=H.dj()
throw H.e(r)}catch(q){t=H.P(q)
s=H.as(q)
P.nE(this.a,t,s)}},
$S:function(){return{func:1}}}
P.hc.prototype={}
P.iW.prototype={
$0:function(){return this.a.ah(this.b)},
$S:function(){return{func:1}}}
P.bd.prototype={
l:function(a){return H.f(this.a)},
$isbh:1}
P.iV.prototype={}
P.j_.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.bo()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.e(t)
r=H.e(t)
r.stack=s.l(0)
throw r},
$S:function(){return{func:1}}}
P.iA.prototype={
fe:function(a){var t,s,r
try{if(C.d===$.x){a.$0()
return}P.lo(null,null,this,a)}catch(r){t=H.P(r)
s=H.as(r)
P.iZ(null,null,this,t,s)}},
ff:function(a,b){var t,s,r
try{if(C.d===$.x){a.$1(b)
return}P.lp(null,null,this,a,b)}catch(r){t=H.P(r)
s=H.as(r)
P.iZ(null,null,this,t,s)}},
eq:function(a){return new P.iC(this,a)},
b5:function(a){return new P.iB(this,a)},
er:function(a){return new P.iD(this,a)},
h:function(a,b){return},
cD:function(a){if($.x===C.d)return a.$0()
return P.lo(null,null,this,a)},
bd:function(a,b){if($.x===C.d)return a.$1(b)
return P.lp(null,null,this,a,b)},
fd:function(a,b,c){if($.x===C.d)return a.$2(b,c)
return P.nL(null,null,this,a,b,c)}}
P.iC.prototype={
$0:function(){return this.a.cD(this.b)},
$S:function(){return{func:1}}}
P.iB.prototype={
$0:function(){return this.a.fe(this.b)},
$S:function(){return{func:1}}}
P.iD.prototype={
$1:function(a){return this.a.ff(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.dP.prototype={
ao:function(a){return H.oe(a)&0x3ffffff},
ap:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.it.prototype={
gw:function(a){var t=new P.cb(this,this.r,null,null,[null])
t.c=this.e
return t},
gk:function(a){return this.a},
C:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dV(b)},
dV:function(a){var t=this.d
if(t==null)return!1
return this.az(t[this.ay(a)],a)>=0},
cw:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.C(0,a)?a:null
else return this.e2(a)},
e2:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.ay(a)]
r=this.az(s,a)
if(r<0)return
return J.bb(s,r).gdX()},
j:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
H.b(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.bM(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
H.b(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.bM(r,b)}else return this.W(0,b)},
W:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.nA()
this.d=t}s=this.ay(b)
r=t[s]
if(r==null){q=[this.aP(b)]
H.b(q!=null)
t[s]=q}else{if(this.az(r,b)>=0)return!1
r.push(this.aP(b))}return!0},
as:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bN(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bN(this.c,b)
else return this.e5(0,b)},
e5:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.ay(b)]
r=this.az(s,b)
if(r<0)return!1
this.bO(s.splice(r,1)[0])
return!0},
Y:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
bM:function(a,b){var t
if(a[b]!=null)return!1
t=this.aP(b)
H.b(!0)
a[b]=t
return!0},
bN:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bO(t)
delete a[b]
return!0},
aP:function(a){var t,s
t=new P.iu(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bO:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.r=this.r+1&67108863},
ay:function(a){return J.au(a)&0x3ffffff},
az:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.G(a[s].a,b))return s
return-1},
$isd:1,
$asd:null}
P.iu.prototype={
gdX:function(){return this.a}}
P.cb.prototype={
gq:function(){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a_(t))
else{t=this.c
if(t==null){this.sag(null)
return!1}else{this.sag(t.a)
this.c=this.c.b
return!0}}},
sag:function(a){this.d=a}}
P.iq.prototype={}
P.dn.prototype={}
P.y.prototype={
gw:function(a){return new H.dp(a,this.gk(a),0,null,[H.ak(a,"y",0)])},
t:function(a,b){return this.h(a,b)},
cz:function(a,b){return new H.bN(a,b,[H.ak(a,"y",0),null])},
eS:function(a,b,c){var t,s,r
t=this.gk(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gk(a))throw H.e(new P.a_(a))}return s},
cr:function(a,b,c,d){var t
P.jU(b,c,this.gk(a),null,null,null)
for(t=b;t<c;++t)this.i(a,t,d)},
l:function(a){return P.eZ(a,"[","]")},
$isd:1,
$asd:null,
$isc:1,
$asc:null}
P.ff.prototype={
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
gw:function(a){return new P.iv(this,this.c,this.d,this.b,null,this.$ti)},
gaq:function(a){return this.b===this.c},
gk:function(a){return(this.c-this.b&this.a.length-1)>>>0},
t:function(a,b){var t=(this.c-this.b&this.a.length-1)>>>0
if(C.b.av(0,b)||b>=t)H.F(P.D(b,this,"index",null,t))
return this.a[(C.b.a_(this.b,b)&this.a.length-1)>>>0]},
Y:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
l:function(a){return P.eZ(this,"{","}")},
cC:function(){var t,s,r
t=this.b
if(t===this.c)throw H.e(H.dj());++this.d
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
if(this.b===t)this.bU();++this.d},
bU:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.E(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.bp(s,0,q,t,r)
C.a.bp(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbZ(s)},
dz:function(a,b){var t
H.b(!0)
t=new Array(8)
t.fixed$length=Array
this.sbZ(H.E(t,[b]))},
sbZ:function(a){this.a=a},
$asd:null}
P.iv.prototype={
gq:function(){return this.e},
p:function(){var t,s
t=this.a
if(this.c!==t.d)H.F(new P.a_(t))
s=this.d
if(s===this.b){this.sag(null)
return!1}this.sag(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sag:function(a){this.e=a}}
P.h1.prototype={
J:function(a,b){var t
for(t=J.bA(b);t.p();)this.j(0,t.gq())},
l:function(a){return P.eZ(this,"{","}")},
$isd:1,
$asd:null}
P.h0.prototype={}
P.bX.prototype={$isd:1,$asd:null,$isc:1,$asc:null}
P.is.prototype={
h:function(a,b){var t,s
t=this.b
if(t==null){H.b(!0)
return this.c.h(0,b)}else if(typeof b!=="string")return
else{s=t[b]
return typeof s=="undefined"?this.e4(b):s}},
gk:function(a){var t
if(this.b==null){H.b(!0)
t=this.c
t=t.gk(t)}else t=this.aQ().length
return t},
i:function(a,b,c){var t,s
if(this.b==null){H.b(!0)
this.c.i(0,b,c)}else if(this.F(0,b)){t=this.b
t[b]=c
s=this.a
if(s==null?t!=null:s!==t)s[b]=null}else this.ej().i(0,b,c)},
F:function(a,b){if(this.b==null){H.b(!0)
return this.c.F(0,b)}if(typeof b!=="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,b)},
a8:function(a,b){var t,s,r,q
if(this.b==null){H.b(!0)
return this.c.a8(0,b)}t=this.aQ()
for(s=0;s<t.length;++s){r=t[s]
q=this.b[r]
if(typeof q=="undefined"){q=P.iX(this.a[r])
this.b[r]=q}b.$2(r,q)
if(t!==this.c)throw H.e(new P.a_(this))}},
l:function(a){return P.kW(this)},
aQ:function(){H.b(this.b!=null)
var t=this.c
if(t==null){t=Object.keys(this.a)
this.c=t}return t},
ej:function(){var t,s,r,q,p
if(this.b==null){H.b(!0)
return this.c}t=P.jO(P.r,null)
s=this.aQ()
for(r=0;q=s.length,r<q;++r){p=s[r]
t.i(0,p,this.h(0,p))}if(q===0)C.a.j(s,null)
else C.a.sk(s,0)
this.b=null
this.a=null
this.c=t
H.b(!0)
return t},
e4:function(a){var t
if(!Object.prototype.hasOwnProperty.call(this.a,a))return
t=P.iX(this.a[a])
return this.b[a]=t}}
P.cq.prototype={}
P.cr.prototype={}
P.f3.prototype={
eH:function(a,b){var t=P.nJ(a,this.geI().a)
return t},
eG:function(a){return this.eH(a,null)},
geI:function(){return C.L},
$ascq:function(){return[P.m,P.r]}}
P.f4.prototype={
$ascr:function(){return[P.r,P.m]}}
P.aB.prototype={}
P.K.prototype={}
P.bg.prototype={
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.bg))return!1
return this.a===b.a&&this.b===b.b},
T:function(a,b){return C.b.T(this.a,b.a)},
gu:function(a){var t=this.a
return(t^C.b.aY(t,30))&1073741823},
l:function(a){var t,s,r,q,p,o,n
t=P.mO(H.ni(this))
s=P.cs(H.ng(this))
r=P.cs(H.nc(this))
q=P.cs(H.nd(this))
p=P.cs(H.nf(this))
o=P.cs(H.nh(this))
n=P.mP(H.ne(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
gf6:function(){return this.a},
dq:function(a,b){var t
if(!(Math.abs(this.a)>864e13))t=!1
else t=!0
if(t)throw H.e(P.cn("DateTime is outside valid range: "+this.gf6()))},
$isK:1,
$asK:function(){return[P.bg]}}
P.R.prototype={$isK:1,
$asK:function(){return[P.Z]}}
P.aT.prototype={
aw:function(a,b){return C.b.aw(this.a,b.gdW())},
av:function(a,b){return C.b.av(this.a,b.gdW())},
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.aT))return!1
return this.a===b.a},
gu:function(a){return this.a&0x1FFFFFFF},
T:function(a,b){return C.b.T(this.a,b.a)},
l:function(a){var t,s,r,q,p
t=new P.el()
s=this.a
if(s<0)return"-"+new P.aT(0-s).l(0)
r=t.$1(C.b.E(s,6e7)%60)
q=t.$1(C.b.E(s,1e6)%60)
p=new P.ek().$1(s%1e6)
return""+C.b.E(s,36e8)+":"+H.f(r)+":"+H.f(q)+"."+H.f(p)},
$isK:1,
$asK:function(){return[P.aT]}}
P.ek.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.r,args:[P.o]}}}
P.el.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.r,args:[P.o]}}}
P.bh.prototype={}
P.co.prototype={
l:function(a){return"Assertion failed"}}
P.bo.prototype={
l:function(a){return"Throw of null."}}
P.al.prototype={
gaS:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaR:function(){return""},
l:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.f(t)
q=this.gaS()+s+r
if(!this.a)return q
p=this.gaR()
o=P.jI(this.b)
return q+p+": "+H.f(o)}}
P.dC.prototype={
gaS:function(){return"RangeError"},
gaR:function(){var t,s,r
H.b(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.f(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.f(t)
else if(r>t)s=": Not in range "+H.f(t)+".."+H.f(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.f(t)}return s}}
P.eV.prototype={
gaS:function(){return"RangeError"},
gaR:function(){H.b(this.a)
if(J.lT(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.f(t)},
gk:function(a){return this.f}}
P.w.prototype={
l:function(a){return"Unsupported operation: "+this.a}}
P.c5.prototype={
l:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.ap.prototype={
l:function(a){return"Bad state: "+this.a}}
P.a_.prototype={
l:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.f(P.jI(t))+"."}}
P.dF.prototype={
l:function(a){return"Stack Overflow"},
$isbh:1}
P.ec.prototype={
l:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.i8.prototype={
l:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.f(t)}}
P.eN.prototype={
l:function(a){var t,s
t=this.a
s=""!==t?"FormatException: "+t:"FormatException"
return s}}
P.en.prototype={
l:function(a){return"Expando:"+H.f(this.a)},
h:function(a,b){var t,s
t=this.b
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.F(P.kq(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.jT(b,"expando$values")
return s==null?null:H.jT(s,t)},
i:function(a,b,c){var t,s
t=this.b
if(typeof t!=="string")t.set(b,c)
else{s=H.jT(b,"expando$values")
if(s==null){s=new P.m()
H.l_(b,"expando$values",s)}H.l_(s,t,c)}}}
P.o.prototype={$isK:1,
$asK:function(){return[P.Z]}}
P.a0.prototype={
aH:function(a,b){return new H.dM(this,b,[H.ak(this,"a0",0)])},
gk:function(a){var t,s
H.b(!this.$isd)
t=this.gw(this)
for(s=0;t.p();)++s
return s},
ga4:function(a){var t,s
t=this.gw(this)
if(!t.p())throw H.e(H.dj())
s=t.gq()
if(t.p())throw H.e(H.n9())
return s},
t:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(P.mG("index"))
if(b<0)H.F(P.b0(b,0,null,"index",null))
for(t=this.gw(this),s=0;t.p();){r=t.gq()
if(b===s)return r;++s}throw H.e(P.D(b,this,"index",null,s))},
l:function(a){return P.n7(this,"(",")")}}
P.dk.prototype={}
P.c.prototype={$isd:1,$asd:null,$asc:null}
P.aF.prototype={}
P.aH.prototype={
gu:function(a){return P.m.prototype.gu.call(this,this)},
l:function(a){return"null"}}
P.Z.prototype={$isK:1,
$asK:function(){return[P.Z]}}
P.m.prototype={constructor:P.m,$ism:1,
v:function(a,b){return this===b},
gu:function(a){return H.b_(this)},
l:function(a){return H.fP(this)},
gA:function(a){return new H.aI(H.j9(this),null)},
toString:function(){return this.l(this)}}
P.c_.prototype={}
P.r.prototype={$isK:1,
$asK:function(){return[P.r]}}
P.c1.prototype={
gk:function(a){return this.a.length},
l:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga6:function(){return this.a}}
W.l.prototype={}
W.e1.prototype={
l:function(a){return String(a)},
$isa:1}
W.e2.prototype={
l:function(a){return String(a)},
$isa:1}
W.a7.prototype={$ism:1}
W.e5.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a7]},
$isd:1,
$asd:function(){return[W.a7]},
$isp:1,
$asp:function(){return[W.a7]},
$isc:1,
$asc:function(){return[W.a7]}}
W.cp.prototype={}
W.aP.prototype={$isa:1,$isaP:1}
W.aQ.prototype={
cZ:function(a,b,c){var t=this.dZ(a,b,P.nW(c,null))
return t},
dZ:function(a,b,c){return a.getContext(b,c)},
$isaQ:1}
W.e7.prototype={
aI:function(a){return P.j4(a.getContextAttributes())}}
W.aR.prototype={$isa:1,
gk:function(a){return a.length}}
W.ea.prototype={$isa:1}
W.A.prototype={$ism:1}
W.bf.prototype={
bK:function(a,b){var t,s
t=$.$get$kC()
s=t[b]
if(typeof s==="string")return s
s=this.ef(a,b)
t[b]=s
return s},
ef:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.mQ()+b
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
gM:function(a){return a.z}}
W.ct.prototype={}
W.aS.prototype={
el:function(a,b){return a.adoptNode(b)},
d_:function(a,b){return a.getElementById(b)},
f9:function(a,b){return a.querySelector(b)},
$isaS:1}
W.cu.prototype={$isa:1}
W.eg.prototype={
l:function(a){return String(a)}}
W.cv.prototype={
eE:function(a,b){return a.createHTMLDocument(b)}}
W.eh.prototype={
gaG:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gM:function(a){return a.z}}
W.cw.prototype={
gaG:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gM:function(a){return a.z}}
W.cx.prototype={
l:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.ga2(a))+" x "+H.f(this.ga1(a))},
v:function(a,b){var t
if(b==null)return!1
t=J.u(b)
if(!t.$isN)return!1
return a.left===t.gba(b)&&a.top===t.gbg(b)&&this.ga2(a)===t.ga2(b)&&this.ga1(a)===t.ga1(b)},
gu:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.ga2(a)
q=this.ga1(a)
return W.lm(W.b8(W.b8(W.b8(W.b8(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga1:function(a){return a.height},
gba:function(a){return a.left},
gbg:function(a){return a.top},
ga2:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isN:1,
$asN:function(){}}
W.ei.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[P.r]},
$isd:1,
$asd:function(){return[P.r]},
$isp:1,
$asp:function(){return[P.r]},
$isc:1,
$asc:function(){return[P.r]}}
W.ej.prototype={
gk:function(a){return a.length}}
W.a8.prototype={
geo:function(a){return new W.i1(a)},
l:function(a){return a.localName},
P:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.kK
if(t==null){t=H.E([],[W.dx])
s=new W.dy(t)
C.a.j(t,W.lk(null))
C.a.j(t,W.ln())
$.kK=s
d=s}else d=t
t=$.kJ
if(t==null){t=new W.dS(d)
$.kJ=t
c=t}else{t.a=d
c=t}}if($.aD==null){t=document
s=t.implementation
s=(s&&C.A).eE(s,"")
$.aD=s
$.jH=s.createRange()
s=$.aD
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.aD.head;(t&&C.B).S(t,r)}t=$.aD
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.k5(s,"$isaP")}t=$.aD
if(!!this.$isaP)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.aD.body;(t&&C.h).S(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.C(C.N,a.tagName)){t=$.jH;(t&&C.x).d1(t,q)
t=$.jH
p=(t&&C.x).eC(t,b)}else{q.innerHTML=b
p=$.aD.createDocumentFragment()
for(t=J.k(p);s=q.firstChild,s!=null;)t.S(p,s)}t=$.aD.body
if(q==null?t!=null:q!==t)J.ms(q)
c.bo(p)
C.j.el(document,p)
return p},
eD:function(a,b,c){return this.P(a,b,c,null)},
dd:function(a,b,c,d){a.textContent=null
this.S(a,this.P(a,b,c,d))},
dc:function(a,b){return this.dd(a,b,null,null)},
aa:function(a,b){return a.getAttribute(b)},
e6:function(a,b){return a.removeAttribute(b)},
d9:function(a,b,c){return a.setAttribute(b,c)},
$isa:1,
$ism:1,
$isa8:1,
$ish:1,
$isv:1,
gfg:function(a){return a.tagName}}
W.j0.prototype={
$1:function(a){return!!J.u(a).$isa8},
$S:function(){return{func:1,args:[,]}}}
W.j.prototype={$ism:1,$isj:1}
W.h.prototype={
dQ:function(a,b,c,d){return a.addEventListener(b,H.aL(c,1),!1)},
e8:function(a,b,c,d){return a.removeEventListener(b,H.aL(c,1),!1)},
$ism:1,
$ish:1}
W.a9.prototype={$ism:1}
W.eH.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a9]},
$isd:1,
$asd:function(){return[W.a9]},
$isp:1,
$asp:function(){return[W.a9]},
$isc:1,
$asc:function(){return[W.a9]}}
W.eI.prototype={
gk:function(a){return a.length}}
W.eM.prototype={
gk:function(a){return a.length}}
W.aa.prototype={$ism:1}
W.cC.prototype={}
W.eR.prototype={
gk:function(a){return a.length}}
W.bK.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.v]},
$isd:1,
$asd:function(){return[W.v]},
$isp:1,
$asp:function(){return[W.v]},
$isc:1,
$asc:function(){return[W.v]}}
W.cD.prototype={}
W.cE.prototype={
fs:function(a,b,c,d,e,f){return a.open(b,c,d,f,e)},
f7:function(a,b,c){return a.open(b,c)},
H:function(a,b){return a.send(b)}}
W.bL.prototype={}
W.bi.prototype={$isbi:1}
W.bj.prototype={$isbj:1}
W.bk.prototype={$isbk:1}
W.eW.prototype={$isa:1,$isa8:1}
W.aY.prototype={$ism:1,$isj:1,$isaY:1}
W.fd.prototype={
l:function(a){return String(a)}}
W.bO.prototype={}
W.fj.prototype={
gk:function(a){return a.length}}
W.fl.prototype={
fq:function(a,b,c){return a.send(b,c)},
H:function(a,b){return a.send(b)}}
W.bP.prototype={}
W.ab.prototype={$ism:1}
W.fm.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.ab]},
$isd:1,
$asd:function(){return[W.ab]},
$isp:1,
$asp:function(){return[W.ab]},
$isc:1,
$asc:function(){return[W.ab]}}
W.S.prototype={$ism:1,$isj:1,$isS:1}
W.fw.prototype={$isa:1}
W.X.prototype={
ga4:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.e(new P.ap("No elements"))
if(s>1)throw H.e(new P.ap("More than one element"))
return t.firstChild},
J:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.k(s),p=0;p<r;++p)q.S(s,t.firstChild)
return},
i:function(a,b,c){var t=this.a
J.lX(t,c,C.v.h(t.childNodes,b))},
gw:function(a){var t=this.a.childNodes
return new W.cA(t,t.length,-1,null,[H.ak(t,"C",0)])},
gk:function(a){return this.a.childNodes.length},
h:function(a,b){return C.v.h(this.a.childNodes,b)},
$asd:function(){return[W.v]},
$asdn:function(){return[W.v]},
$asc:function(){return[W.v]},
$asbX:function(){return[W.v]}}
W.v.prototype={
fa:function(a){var t=a.parentNode
if(t!=null)J.bz(t,a)},
l:function(a){var t=a.nodeValue
return t==null?this.dh(a):t},
S:function(a,b){return a.appendChild(b)},
e7:function(a,b){return a.removeChild(b)},
e9:function(a,b,c){return a.replaceChild(b,c)},
$ism:1,
$ish:1,
$isv:1,
gbb:function(a){return a.previousSibling}}
W.dw.prototype={
bc:function(a){return a.previousNode()}}
W.bW.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.v]},
$isd:1,
$asd:function(){return[W.v]},
$isp:1,
$asp:function(){return[W.v]},
$isc:1,
$asc:function(){return[W.v]}}
W.fF.prototype={$isa:1}
W.fI.prototype={
gk:function(a){return a.length}}
W.ac.prototype={$ism:1,
gk:function(a){return a.length}}
W.fK.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.ac]},
$isd:1,
$asd:function(){return[W.ac]},
$isp:1,
$asp:function(){return[W.ac]},
$isc:1,
$asc:function(){return[W.ac]}}
W.fN.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.fO.prototype={
H:function(a,b){return a.send(b)}}
W.dB.prototype={
eC:function(a,b){return a.createContextualFragment(b)},
d1:function(a,b){return a.selectNodeContents(b)}}
W.fY.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gM:function(a){return a.z}}
W.dD.prototype={
H:function(a,b){return a.send(b)}}
W.h_.prototype={
gk:function(a){return a.length}}
W.h2.prototype={$isa:1}
W.ad.prototype={$ism:1,$ish:1}
W.h3.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.ad]},
$isd:1,
$asd:function(){return[W.ad]},
$isp:1,
$asp:function(){return[W.ad]},
$isc:1,
$asc:function(){return[W.ad]}}
W.ae.prototype={$ism:1}
W.h5.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.ae]},
$isd:1,
$asd:function(){return[W.ae]},
$isp:1,
$asp:function(){return[W.ae]},
$isc:1,
$asc:function(){return[W.ae]}}
W.af.prototype={$ism:1,
gk:function(a){return a.length}}
W.hb.prototype={
h:function(a,b){return this.bT(a,b)},
i:function(a,b,c){this.ee(a,b,c)},
a8:function(a,b){var t,s
for(t=0;!0;++t){s=this.e1(a,t)
if(s==null)return
b.$2(s,this.bT(a,s))}},
gk:function(a){return a.length},
bT:function(a,b){return a.getItem(b)},
e1:function(a,b){return a.key(b)},
ee:function(a,b,c){return a.setItem(b,c)}}
W.a1.prototype={$ism:1}
W.aq.prototype={}
W.dG.prototype={
P:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aK(a,b,c,d)
t=W.mR("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.X(s).J(0,new W.X(t))
return s}}
W.hk.prototype={
P:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aK(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.y.P(t.createElement("table"),b,c,d)
t.toString
t=new W.X(t)
r=t.ga4(t)
r.toString
t=new W.X(r)
q=t.ga4(t)
s.toString
q.toString
new W.X(s).J(0,new W.X(q))
return s}}
W.hl.prototype={
P:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aK(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.y.P(t.createElement("table"),b,c,d)
t.toString
t=new W.X(t)
r=t.ga4(t)
s.toString
r.toString
new W.X(s).J(0,new W.X(r))
return s}}
W.c2.prototype={$isc2:1}
W.ag.prototype={$ism:1,$ish:1}
W.a2.prototype={$ism:1,$ish:1}
W.ho.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a2]},
$isd:1,
$asd:function(){return[W.a2]},
$isp:1,
$asp:function(){return[W.a2]},
$isc:1,
$asc:function(){return[W.a2]}}
W.hp.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.ag]},
$isd:1,
$asd:function(){return[W.ag]},
$isp:1,
$asp:function(){return[W.ag]},
$isc:1,
$asc:function(){return[W.ag]}}
W.hr.prototype={
gk:function(a){return a.length}}
W.ah.prototype={$ism:1}
W.b1.prototype={$ism:1,$isj:1,$isb1:1}
W.hv.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.ah]},
$isd:1,
$asd:function(){return[W.ah]},
$isp:1,
$asp:function(){return[W.ah]},
$isc:1,
$asc:function(){return[W.ah]}}
W.hw.prototype={
gk:function(a){return a.length}}
W.br.prototype={}
W.hy.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gM:function(a){return a.z}}
W.dK.prototype={
bc:function(a){return a.previousNode()}}
W.aJ.prototype={}
W.hD.prototype={
l:function(a){return String(a)},
$isa:1}
W.bs.prototype={$isbs:1}
W.hF.prototype={
gk:function(a){return a.length}}
W.hI.prototype={
gk:function(a){return a.length}}
W.hJ.prototype={
H:function(a,b){return a.send(b)}}
W.b3.prototype={
geJ:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(new P.w("deltaY is not supported"))},
$ism:1,
$isj:1,
$isS:1,
$isb3:1}
W.c6.prototype={
gen:function(a){var t,s
t=P.Z
s=new P.J(0,$.x,null,[t])
this.dY(a)
this.ea(a,W.lr(new W.hL(new P.iO(s,[t]))))
return s},
ea:function(a,b){return a.requestAnimationFrame(H.aL(b,1))},
dY:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isa:1}
W.hL.prototype={
$1:function(a){this.a.al(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.hM.prototype={$isa:1}
W.b4.prototype={$isa:1}
W.hX.prototype={
l:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
v:function(a,b){var t,s,r
if(b==null)return!1
t=J.u(b)
if(!t.$isN)return!1
s=a.left
r=t.gba(b)
if(s==null?r==null:s===r){s=a.top
r=t.gbg(b)
if(s==null?r==null:s===r){s=a.width
r=t.ga2(b)
if(s==null?r==null:s===r){s=a.height
t=t.ga1(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gu:function(a){var t,s,r,q
t=J.au(a.left)
s=J.au(a.top)
r=J.au(a.width)
q=J.au(a.height)
return W.lm(W.b8(W.b8(W.b8(W.b8(0,t),s),r),q))},
$isN:1,
$asN:function(){},
ga1:function(a){return a.height},
gba:function(a){return a.left},
gbg:function(a){return a.top},
ga2:function(a){return a.width}}
W.dO.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[P.N]},
$isd:1,
$asd:function(){return[P.N]},
$isp:1,
$asp:function(){return[P.N]},
$isc:1,
$asc:function(){return[P.N]}}
W.hZ.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.A]},
$isd:1,
$asd:function(){return[W.A]},
$isp:1,
$asp:function(){return[W.A]},
$isc:1,
$asc:function(){return[W.A]}}
W.i_.prototype={$isa:1}
W.i0.prototype={
ga1:function(a){return a.height},
ga2:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.io.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.aa]},
$isd:1,
$asd:function(){return[W.aa]},
$isp:1,
$asp:function(){return[W.aa]},
$isc:1,
$asc:function(){return[W.aa]}}
W.ip.prototype={$isa:1}
W.dQ.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.v]},
$isd:1,
$asd:function(){return[W.v]},
$isp:1,
$asp:function(){return[W.v]},
$isc:1,
$asc:function(){return[W.v]}}
W.iI.prototype={$isa:1}
W.iL.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.af]},
$isd:1,
$asd:function(){return[W.af]},
$isp:1,
$asp:function(){return[W.af]},
$isc:1,
$asc:function(){return[W.af]}}
W.iM.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a1]},
$isd:1,
$asd:function(){return[W.a1]},
$isp:1,
$asp:function(){return[W.a1]},
$isc:1,
$asc:function(){return[W.a1]}}
W.iT.prototype={$isa:1}
W.iU.prototype={$isa:1}
W.hV.prototype={
a8:function(a,b){var t,s,r,q,p,o
for(t=this.gG(this),s=t.length,r=this.a,q=J.k(r),p=0;p<t.length;t.length===s||(0,H.z)(t),++p){o=t[p]
b.$2(o,q.aa(r,o))}},
gG:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.E([],[P.r])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.j(s,p.name)}return s},
ge_:function(){return this.a}}
W.i1.prototype={
h:function(a,b){return J.jE(this.a,b)},
i:function(a,b,c){J.mu(this.a,b,c)},
gk:function(a){return this.gG(this).length}}
W.i5.prototype={
cu:function(a,b,c,d){return W.aj(this.a,this.b,a,!1,H.aC(this,0))}}
W.i2.prototype={}
W.i6.prototype={
eu:function(a){if(this.b==null)return
this.ei()
this.b=null
this.se3(null)
return},
eh:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.lV(r,this.c,t,!1)}},
ei:function(){var t,s,r
t=this.d
s=t!=null
if(s){r=this.b
r.toString
if(s)J.lW(r,this.c,t,!1)}},
dL:function(a,b,c,d,e){this.eh()},
se3:function(a){this.d=a}}
W.i7.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.ca.prototype={
a7:function(a){return $.$get$ll().C(0,W.bD(a))},
X:function(a,b,c){var t,s,r
t=W.bD(a)
s=$.$get$jY()
r=s.h(0,H.f(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
dM:function(a){var t,s
t=$.$get$jY()
if(t.gaq(t)){for(s=0;s<262;++s)t.i(0,C.M[s],W.o3())
for(s=0;s<12;++s)t.i(0,C.l[s],W.o4())}}}
W.C.prototype={
gw:function(a){return new W.cA(a,this.gk(a),-1,null,[H.ak(a,"C",0)])},
$isd:1,
$asd:null,
$isc:1,
$asc:null}
W.dy.prototype={
a7:function(a){return C.a.c3(this.a,new W.fy(a))},
X:function(a,b,c){return C.a.c3(this.a,new W.fx(a,b,c))}}
W.fy.prototype={
$1:function(a){return a.a7(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.fx.prototype={
$1:function(a){return a.X(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.cd.prototype={
a7:function(a){return this.a.C(0,W.bD(a))},
X:function(a,b,c){var t,s
t=W.bD(a)
s=this.c
if(s.C(0,H.f(t)+"::"+b))return this.d.em(c)
else if(s.C(0,"*::"+b))return this.d.em(c)
else{s=this.b
if(s.C(0,H.f(t)+"::"+b))return!0
else if(s.C(0,"*::"+b))return!0
else if(s.C(0,H.f(t)+"::*"))return!0
else if(s.C(0,"*::*"))return!0}return!1},
dO:function(a,b,c,d){var t,s,r
this.a.J(0,c)
t=b.aH(0,new W.iJ())
s=b.aH(0,new W.iK())
this.b.J(0,t)
r=this.c
r.J(0,C.u)
r.J(0,s)}}
W.iJ.prototype={
$1:function(a){return!C.a.C(C.l,a)},
$S:function(){return{func:1,args:[,]}}}
W.iK.prototype={
$1:function(a){return C.a.C(C.l,a)},
$S:function(){return{func:1,args:[,]}}}
W.iP.prototype={
X:function(a,b,c){if(this.dk(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.jE(a,"template")==="")return this.e.C(0,b)
return!1}}
W.iQ.prototype={
$1:function(a){return"TEMPLATE::"+H.f(a)},
$S:function(){return{func:1,args:[,]}}}
W.iN.prototype={
a7:function(a){var t=J.u(a)
if(!!t.$isbZ)return!1
t=!!t.$isI
if(t&&W.bD(a)==="foreignObject")return!1
if(t)return!0
return!1},
X:function(a,b,c){if(b==="is"||C.e.br(b,"on"))return!1
return this.a7(a)}}
W.cA.prototype={
p:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbV(J.bb(this.a,t))
this.c=t
return!0}this.sbV(null)
this.c=s
return!1},
gq:function(){return this.d},
sbV:function(a){this.d=a}}
W.dx.prototype={}
W.iH.prototype={}
W.dS.prototype={
bo:function(a){new W.iR(this).$2(a,null)},
aB:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)J.bz(t,a)}else J.bz(b,a)},
ed:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.mg(a)
r=J.jE(s.ge_(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.P(n)}p="element unprintable"
try{p=J.a6(a)}catch(n){H.P(n)}try{o=W.bD(a)
this.ec(a,b,t,p,o,s,r)}catch(n){if(H.P(n) instanceof P.al)throw n
else{this.aB(a,b)
window
m="Removing corrupted element "+H.f(p)
if(typeof console!="undefined")console.warn(m)}}},
ec:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.aB(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.a7(a)){this.aB(a,b)
window
t="Removing disallowed element <"+H.f(e)+"> from "+J.a6(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.X(a,"is",g)){this.aB(a,b)
window
t="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gG(f)
s=H.E(t.slice(0),[H.aC(t,0)])
for(r=f.gG(f).length-1,t=f.a,q=J.k(t);r>=0;--r){p=s[r]
if(!this.a.X(a,J.my(p),q.aa(t,p))){window
o="Removing disallowed attribute <"+H.f(e)+" "+p+'="'+H.f(q.aa(t,p))+'">'
if(typeof console!="undefined")console.warn(o)
q.aa(t,p)
q.e6(t,p)}}if(!!J.u(a).$isc2)this.bo(a.content)}}
W.iR.prototype={
$2:function(a,b){var t,s,r,q
switch(a.nodeType){case 1:this.a.ed(a,b)
break
case 8:case 11:case 3:case 4:break
default:if(b==null){r=a.parentNode
if(r!=null)J.bz(r,a)}else J.bz(b,a)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.mh(t)}catch(q){H.P(q)
r=t
J.bz(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.v,W.v]}}}
W.bE.prototype={$isd:1,
$asd:function(){return[W.ag]},
$isc:1,
$asc:function(){return[W.ag]}}
W.bF.prototype={$isd:1,
$asd:function(){return[W.ad]},
$isc:1,
$asc:function(){return[W.ad]}}
W.bG.prototype={$isd:1,
$asd:function(){return[W.a7]},
$isc:1,
$asc:function(){return[W.a7]}}
W.bH.prototype={$isd:1,
$asd:function(){return[W.ag]},
$isc:1,
$asc:function(){return[W.ag]}}
W.bI.prototype={$isd:1,
$asd:function(){return[W.ad]},
$isc:1,
$asc:function(){return[W.ad]}}
W.bJ.prototype={$isd:1,
$asd:function(){return[W.a7]},
$isc:1,
$asc:function(){return[W.a7]}}
W.cF.prototype={}
W.cZ.prototype={$isd:1,
$asd:function(){return[W.A]},
$isc:1,
$asc:function(){return[W.A]}}
W.cL.prototype={$isd:1,
$asd:function(){return[W.ae]},
$isc:1,
$asc:function(){return[W.ae]}}
W.cS.prototype={$isd:1,
$asd:function(){return[W.v]},
$isc:1,
$asc:function(){return[W.v]}}
W.cT.prototype={$isd:1,
$asd:function(){return[W.v]},
$isc:1,
$asc:function(){return[W.v]}}
W.cU.prototype={$isd:1,
$asd:function(){return[W.v]},
$isc:1,
$asc:function(){return[W.v]}}
W.cV.prototype={$isd:1,
$asd:function(){return[W.ah]},
$isc:1,
$asc:function(){return[W.ah]}}
W.cW.prototype={$isd:1,
$asd:function(){return[W.a1]},
$isc:1,
$asc:function(){return[W.a1]}}
W.cX.prototype={$isd:1,
$asd:function(){return[W.af]},
$isc:1,
$asc:function(){return[W.af]}}
W.cY.prototype={$isd:1,
$asd:function(){return[W.aa]},
$isc:1,
$asc:function(){return[W.aa]}}
W.cJ.prototype={$isd:1,
$asd:function(){return[P.N]},
$isc:1,
$asc:function(){return[P.N]}}
W.cK.prototype={$isd:1,
$asd:function(){return[W.a2]},
$isc:1,
$asc:function(){return[W.a2]}}
W.cM.prototype={$isd:1,
$asd:function(){return[W.ac]},
$isc:1,
$asc:function(){return[W.ac]}}
W.cO.prototype={$isd:1,
$asd:function(){return[W.ab]},
$isc:1,
$asc:function(){return[W.ab]}}
W.cP.prototype={$isd:1,
$asd:function(){return[W.a9]},
$isc:1,
$asc:function(){return[W.a9]}}
W.cQ.prototype={$isd:1,
$asd:function(){return[P.r]},
$isc:1,
$asc:function(){return[P.r]}}
W.d_.prototype={$isd:1,
$asd:function(){return[W.aa]},
$isc:1,
$asc:function(){return[W.aa]}}
W.d0.prototype={$isd:1,
$asd:function(){return[W.v]},
$isc:1,
$asc:function(){return[W.v]}}
W.db.prototype={$isd:1,
$asd:function(){return[W.v]},
$isc:1,
$asc:function(){return[W.v]}}
W.dc.prototype={$isd:1,
$asd:function(){return[W.ac]},
$isc:1,
$asc:function(){return[W.ac]}}
W.da.prototype={$isd:1,
$asd:function(){return[W.ab]},
$isc:1,
$asc:function(){return[W.ab]}}
W.df.prototype={$isd:1,
$asd:function(){return[P.N]},
$isc:1,
$asc:function(){return[P.N]}}
W.dg.prototype={$isd:1,
$asd:function(){return[W.a9]},
$isc:1,
$asc:function(){return[W.a9]}}
W.dh.prototype={$isd:1,
$asd:function(){return[W.v]},
$isc:1,
$asc:function(){return[W.v]}}
W.di.prototype={$isd:1,
$asd:function(){return[P.r]},
$isc:1,
$asc:function(){return[P.r]}}
W.d2.prototype={$isd:1,
$asd:function(){return[W.a1]},
$isc:1,
$asc:function(){return[W.a1]}}
W.d4.prototype={$isd:1,
$asd:function(){return[W.a2]},
$isc:1,
$asc:function(){return[W.a2]}}
W.d6.prototype={$isd:1,
$asd:function(){return[W.af]},
$isc:1,
$asc:function(){return[W.af]}}
W.d8.prototype={$isd:1,
$asd:function(){return[W.ae]},
$isc:1,
$asc:function(){return[W.ae]}}
W.dd.prototype={$isd:1,
$asd:function(){return[W.A]},
$isc:1,
$asc:function(){return[W.A]}}
W.de.prototype={$isd:1,
$asd:function(){return[W.ah]},
$isc:1,
$asc:function(){return[W.ah]}}
P.hN.prototype={
cs:function(a){var t,s,r,q
t=this.a
s=t.length
for(r=0;r<s;++r){q=t[r]
if(q==null?a==null:q===a)return r}C.a.j(t,a)
C.a.j(this.b,null)
return s},
bh:function(a){var t,s,r,q,p,o,n,m,l
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){s=a.getTime()
r=new P.bg(s,!0)
r.dq(s,!0)
return r}if(a instanceof RegExp)throw H.e(new P.c5("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.nX(a)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=this.cs(a)
r=this.b
o=r[p]
t.a=o
if(o!=null)return o
o=P.L()
t.a=o
r[p]=o
this.eT(a,new P.hP(t,this))
return t.a}if(a instanceof Array){p=this.cs(a)
r=this.b
o=r[p]
if(o!=null)return o
n=J.H(a)
m=n.gk(a)
o=this.c?new Array(m):a
r[p]=o
for(r=J.ba(o),l=0;C.b.aw(l,m);++l)r.i(o,l,this.bh(n.h(a,l)))
return o}return a}}
P.hP.prototype={
$2:function(a,b){var t,s
t=this.a.a
s=this.b.bh(b)
J.lU(t,a,s)
return s},
$S:function(){return{func:1,args:[,,]}}}
P.j1.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.r,,]}}}
P.hO.prototype={
eT:function(a,b){var t,s,r,q
for(t=Object.keys(a),s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r){q=t[r]
b.$2(q,a[q])}}}
P.j2.prototype={
$1:function(a){return this.a.al(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.j3.prototype={
$1:function(a){return this.a.ex(a)},
$S:function(){return{func:1,args:[,]}}}
P.iz.prototype={}
P.N.prototype={$asN:null}
P.e0.prototype={$isa:1}
P.aO.prototype={$isa:1}
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
gM:function(a){return a.z}}
P.eC.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eD.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gM:function(a){return a.z}}
P.eE.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eF.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eJ.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eL.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.am.prototype={}
P.aE.prototype={$isa:1}
P.eT.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.aw.prototype={$ism:1}
P.f5.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return this.a0(a,b)},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
a0:function(a,b){return a.getItem(b)},
$isd:1,
$asd:function(){return[P.aw]},
$isc:1,
$asc:function(){return[P.aw]}}
P.fg.prototype={$isa:1}
P.fh.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ax.prototype={$ism:1}
P.fz.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return this.a0(a,b)},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
a0:function(a,b){return a.getItem(b)},
$isd:1,
$asd:function(){return[P.ax]},
$isc:1,
$asc:function(){return[P.ax]}}
P.fG.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fL.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fM.prototype={
gk:function(a){return a.length}}
P.fR.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fS.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bZ.prototype={$isa:1,$isbZ:1}
P.hh.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return this.a0(a,b)},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
a0:function(a,b){return a.getItem(b)},
$isd:1,
$asd:function(){return[P.r]},
$isc:1,
$asc:function(){return[P.r]}}
P.I.prototype={
P:function(a,b,c,d){var t,s,r,q,p,o
t=H.E([],[W.dx])
C.a.j(t,W.lk(null))
C.a.j(t,W.ln())
C.a.j(t,new W.iN())
c=new W.dS(new W.dy(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.h).eD(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.X(q)
o=t.ga4(t)
for(t=J.k(p);r=o.firstChild,r!=null;)t.S(p,r)
return p},
$isa:1,
$isI:1}
P.hi.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.hj.prototype={$isa:1}
P.dH.prototype={}
P.hn.prototype={$isa:1}
P.c3.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ay.prototype={$ism:1}
P.hx.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return this.a0(a,b)},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
a0:function(a,b){return a.getItem(b)},
$isd:1,
$asd:function(){return[P.ay]},
$isc:1,
$asc:function(){return[P.ay]}}
P.hE.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.hG.prototype={$isa:1}
P.hH.prototype={$isa:1}
P.c9.prototype={$isa:1}
P.iE.prototype={$isa:1}
P.iF.prototype={$isa:1}
P.iG.prototype={$isa:1}
P.cI.prototype={$isd:1,
$asd:function(){return[P.aw]},
$isc:1,
$asc:function(){return[P.aw]}}
P.cG.prototype={$isd:1,
$asd:function(){return[P.r]},
$isc:1,
$asc:function(){return[P.r]}}
P.cN.prototype={$isd:1,
$asd:function(){return[P.ax]},
$isc:1,
$asc:function(){return[P.ax]}}
P.cR.prototype={$isd:1,
$asd:function(){return[P.ay]},
$isc:1,
$asc:function(){return[P.ay]}}
P.d1.prototype={$isd:1,
$asd:function(){return[P.aw]},
$isc:1,
$asc:function(){return[P.aw]}}
P.d9.prototype={$isd:1,
$asd:function(){return[P.ax]},
$isc:1,
$asc:function(){return[P.ax]}}
P.d5.prototype={$isd:1,
$asd:function(){return[P.ay]},
$isc:1,
$asc:function(){return[P.ay]}}
P.d7.prototype={$isd:1,
$asd:function(){return[P.r]},
$isc:1,
$asc:function(){return[P.r]}}
P.e4.prototype={
gk:function(a){return a.length}}
P.fW.prototype={
c1:function(a,b){return a.activeTexture(b)},
c4:function(a,b,c){return a.attachShader(b,c)},
c5:function(a,b,c){return a.bindBuffer(b,c)},
c6:function(a,b,c){return a.bindFramebuffer(b,c)},
c7:function(a,b,c){return a.bindTexture(b,c)},
c8:function(a,b){return a.blendEquation(b)},
c9:function(a,b,c){return a.blendFunc(b,c)},
ca:function(a,b,c,d){return a.bufferData(b,c,d)},
cb:function(a,b){return a.clear(b)},
cc:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
cd:function(a,b){return a.compileShader(b)},
ce:function(a){return a.createBuffer()},
cf:function(a){return a.createProgram()},
cg:function(a,b){return a.createShader(b)},
ci:function(a){return a.createTexture()},
ck:function(a,b){return a.depthMask(b)},
cl:function(a,b){return a.disable(b)},
cm:function(a,b,c,d){return a.drawArrays(b,c,d)},
cn:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
co:function(a,b){return a.enable(b)},
cp:function(a,b){return a.enableVertexAttribArray(b)},
aI:function(a){return P.j4(a.getContextAttributes())},
bi:function(a){return a.getError()},
bj:function(a,b){return a.getProgramInfoLog(b)},
bk:function(a,b,c){return a.getProgramParameter(b,c)},
bl:function(a,b){return a.getShaderInfoLog(b)},
bm:function(a,b,c){return a.getShaderParameter(b,c)},
bn:function(a,b,c){return a.getUniformLocation(b,c)},
ct:function(a,b){return a.linkProgram(b)},
cB:function(a,b,c){return a.pixelStorei(b,c)},
bq:function(a,b,c){return a.shaderSource(b,c)},
bs:function(a,b,c,d){return a.stencilFunc(b,c,d)},
be:function(a,b,c,d,e,f,g,h,i,j){var t,s
t=J.u(g)
if(!!t.$isbj||g==null)s=!0
else s=!1
if(s){this.b_(a,b,c,d,e,f,P.ly(g))
return}if(!!t.$isbk)s=!0
else s=!1
if(s){this.b0(a,b,c,d,e,f,g)
return}if(!!t.$isaQ)s=!0
else s=!1
if(s){this.b1(a,b,c,d,e,f,g)
return}if(!!t.$isbs)s=!0
else s=!1
if(s){this.b2(a,b,c,d,e,f,g)
return}if(!!t.$isbi)t=!0
else t=!1
if(t){this.b3(a,b,c,d,e,f,g)
return}throw H.e(P.cn("Incorrect number or type of arguments"))},
cF:function(a,b,c,d,e,f,g){return this.be(a,b,c,d,e,f,g,null,null,null)},
b_:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b0:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b1:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b2:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b3:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
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
P.fX.prototype={
ep:function(a,b){return a.beginTransformFeedback(b)},
es:function(a,b){return a.bindVertexArray(b)},
eF:function(a){return a.createVertexArray()},
eP:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
eQ:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
eR:function(a){return a.endTransformFeedback()},
fm:function(a,b,c,d){this.eg(a,b,c,d)
return},
eg:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
fn:function(a,b,c){return a.vertexAttribDivisor(b,c)},
c1:function(a,b){return a.activeTexture(b)},
c4:function(a,b,c){return a.attachShader(b,c)},
c5:function(a,b,c){return a.bindBuffer(b,c)},
c6:function(a,b,c){return a.bindFramebuffer(b,c)},
c7:function(a,b,c){return a.bindTexture(b,c)},
c8:function(a,b){return a.blendEquation(b)},
c9:function(a,b,c){return a.blendFunc(b,c)},
ca:function(a,b,c,d){return a.bufferData(b,c,d)},
cb:function(a,b){return a.clear(b)},
cc:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
cd:function(a,b){return a.compileShader(b)},
ce:function(a){return a.createBuffer()},
cf:function(a){return a.createProgram()},
cg:function(a,b){return a.createShader(b)},
ci:function(a){return a.createTexture()},
ck:function(a,b){return a.depthMask(b)},
cl:function(a,b){return a.disable(b)},
cm:function(a,b,c,d){return a.drawArrays(b,c,d)},
cn:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
co:function(a,b){return a.enable(b)},
cp:function(a,b){return a.enableVertexAttribArray(b)},
aI:function(a){return P.j4(a.getContextAttributes())},
bi:function(a){return a.getError()},
bj:function(a,b){return a.getProgramInfoLog(b)},
bk:function(a,b,c){return a.getProgramParameter(b,c)},
bl:function(a,b){return a.getShaderInfoLog(b)},
bm:function(a,b,c){return a.getShaderParameter(b,c)},
bn:function(a,b,c){return a.getUniformLocation(b,c)},
ct:function(a,b){return a.linkProgram(b)},
cB:function(a,b,c){return a.pixelStorei(b,c)},
bq:function(a,b,c){return a.shaderSource(b,c)},
bs:function(a,b,c,d){return a.stencilFunc(b,c,d)},
be:function(a,b,c,d,e,f,g,h,i,j){var t,s
t=J.u(g)
if(!!t.$isbj||g==null)s=!0
else s=!1
if(s){this.b_(a,b,c,d,e,f,P.ly(g))
return}if(!!t.$isbk)s=!0
else s=!1
if(s){this.b0(a,b,c,d,e,f,g)
return}if(!!t.$isaQ)s=!0
else s=!1
if(s){this.b1(a,b,c,d,e,f,g)
return}if(!!t.$isbs)s=!0
else s=!1
if(s){this.b2(a,b,c,d,e,f,g)
return}if(!!t.$isbi)t=!0
else t=!1
if(t){this.b3(a,b,c,d,e,f,g)
return}throw H.e(P.cn("Incorrect number or type of arguments"))},
cF:function(a,b,c,d,e,f,g){return this.be(a,b,c,d,e,f,g,null,null,null)},
b_:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b0:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b1:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b2:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b3:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
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
P.iS.prototype={$isa:1}
P.h7.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return P.j4(this.e0(a,b))},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
e0:function(a,b){return a.item(b)},
$isd:1,
$asd:function(){return[P.aF]},
$isc:1,
$asc:function(){return[P.aF]}}
P.cH.prototype={$isd:1,
$asd:function(){return[P.aF]},
$isc:1,
$asc:function(){return[P.aF]}}
P.d3.prototype={$isd:1,
$asd:function(){return[P.aF]},
$isc:1,
$asc:function(){return[P.aF]}}
B.jq.prototype={
$1:function(a){$.$get$j5().i(0,a.which,!0)},
$S:function(){return{func:1,args:[W.aY]}}}
B.jr.prototype={
$1:function(a){$.$get$j5().i(0,a.which,null)},
$S:function(){return{func:1,args:[W.aY]}}}
B.js.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.nT=t
$.nU=C.b.ac(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.k9=s-C.b.E(window.innerWidth,2)
$.lH=-(t-C.b.E(window.innerHeight,2))},
$S:function(){return{func:1,args:[W.S]}}}
B.jt.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.ck=t-C.b.E(window.innerWidth,2)
$.cl=-(s-C.b.E(window.innerHeight,2))
if(a.button===2)$.$get$cj().i(0,"right",!0)
else $.$get$cj().i(0,"left",!0)},
$S:function(){return{func:1,args:[W.S]}}}
B.ju.prototype={
$1:function(a){if(a.button===2)$.$get$cj().i(0,"right",null)
else $.$get$cj().i(0,"left",null)},
$S:function(){return{func:1,args:[W.S]}}}
B.fA.prototype={
dB:function(a,b,c,d){var t
d.toString
W.aj(d,W.o2().$1(d),new B.fB(this),!1,W.b3)
W.aj(d,"mousemove",new B.fC(this),!1,W.S)
t=W.b1
W.aj(d,"touchstart",new B.fD(),!1,t)
W.aj(d,"touchmove",new B.fE(this),!1,t)
B.oi(null)}}
B.fB.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.a5.geJ(a)*r.k3
if(C.c.ac(r.fy,t)>0)r.fy=H.a4(C.c.ac(r.fy,t))}catch(q){s=H.P(q)
P.V(s)}},
$S:function(){return{func:1,args:[W.b3]}}}
B.fC.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=H.a4(t.go+C.b.ac($.k9,$.ck)*0.01)
s=t.id
r=$.cl
q=$.lH
t.id=H.a4(s+(r-q)*0.01)
$.ck=$.k9
$.cl=q}},
$S:function(){return{func:1,args:[W.S]}}}
B.fD.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.a9(t.clientX)
C.c.a9(t.clientY)
$.ck=s
C.c.a9(t.clientX)
$.cl=C.c.a9(t.clientY)},
$S:function(){return{func:1,args:[W.b1]}}}
B.fE.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.a9(t.clientX)
t=C.c.a9(t.clientY)
r=this.a
r.go=H.a4(r.go+C.b.ac(s,$.ck)*0.01)
r.id=H.a4(r.id+($.cl-t)*0.01)
$.ck=s
$.cl=t},
$S:function(){return{func:1,args:[W.b1]}}}
G.fn.prototype={}
G.dL.prototype={
O:function(a,b){var t=this.d
if(H.aK(!t.F(0,a)))H.b9("uniform "+a+" already set")
t.i(0,a,b)},
aL:function(){return this.d},
l:function(a){var t,s,r,q
t=H.E(["{"+new H.aI(H.j9(this),null).l(0)+"}["+this.a+"]"],[P.r])
for(s=this.d,r=s.gG(s),r=r.gw(r);r.p();){q=r.gq()
C.a.j(t,H.f(q)+": "+H.f(s.h(0,q)))}return C.a.ar(t,"\n")}}
G.e6.prototype={}
G.e9.prototype={
cq:function(a,b,c){J.md(this.a,b)
if(c>0)J.mE(this.a,b,c)}}
G.eO.prototype={}
G.B.prototype={}
G.eG.prototype={}
G.cB.prototype={
a5:function(a){var t=this.e
H.b(!t.F(0,a))
H.b(C.e.br(a,"a"))
switch($.$get$Y().h(0,a).a){case"vec2":t.i(0,a,H.E([],[T.a3]))
break
case"vec3":t.i(0,a,H.E([],[T.q]))
break
case"vec4":t.i(0,a,H.E([],[T.ai]))
break
case"float":t.i(0,a,H.E([],[P.R]))
break
case"uvec4":t.i(0,a,H.E([],[[P.c,P.o]]))
break
default:if(H.aK(!1))H.b9("unknown type for "+a)}},
bz:function(a){var t,s,r,q,p,o
H.b(a.length===3)
t=this.d
s=t.length
C.a.j(this.b,new G.B(s,s+1,s+2))
for(r=a.length,q=0;q<a.length;a.length===r||(0,H.z)(a),++q){p=a[q]
p.toString
o=new T.q(new Float32Array(3))
o.B(p)
C.a.j(t,o)}},
bv:function(a,b){var t,s,r,q,p,o,n
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.z)(b),++q){p=b[q]
p.toString
o=new Float32Array(2)
n=p.a
o[1]=n[1]
o[0]=n[0]
r.j(t,new T.a3(o))}},
bw:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.z)(b),++q){p=b[q]
p.toString
o=new T.q(new Float32Array(3))
o.B(p)
r.j(t,o)}},
bx:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.z)(b),++q){p=b[q]
p.toString
o=new T.ai(new Float32Array(4))
o.B(p)
r.j(t,o)}},
dm:function(a){var t,s,r,q,p,o
H.b(a.length===4)
t=this.d
s=t.length
C.a.j(this.c,new G.eG(s,s+1,s+2,s+3))
for(r=a.length,q=0;q<a.length;a.length===r||(0,H.z)(a),++q){p=a[q]
p.toString
o=new T.q(new Float32Array(3))
o.B(p)
C.a.j(t,o)}},
du:function(){var t,s,r,q,p,o,n,m,l,k
t=this.b
H.b(t.length>0||this.c.length>0)
s=this.c
r=new Array(t.length*3+s.length*6)
r.fixed$length=Array
q=H.E(r,[P.o])
for(r=t.length,p=0,o=0;n=t.length,o<n;n===r||(0,H.z)(t),++o){m=t[o]
q[p]=m.a
q[p+1]=m.b
q[p+2]=m.c
p+=3}for(t=s.length,o=0;r=s.length,o<r;r===t||(0,H.z)(s),++o){l=s[o]
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
for(s=this.e,r=s.gG(s),r=r.gw(r);r.p();){q=r.gq()
p=$.$get$Y().h(0,q).a
C.a.j(t,H.f(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.ar(t," ")}}
G.f6.prototype={}
G.h6.prototype={
l:function(a){return"SL: p:"+J.a6(this.x)+"  d:"+J.a6(this.y)+"  r:"+this.ch+"  a:"+H.f(this.cx)}}
G.eS.prototype={
aL:function(){var t,s,r
t=this.y
s=this.z
G.n_(t,s,this.x)
r=this.d
r.i(0,"uLightDescs",t)
r.i(0,"uLightTypes",s)
return r}}
G.dJ.prototype={}
G.dI.prototype={}
G.fi.prototype={
dA:function(a){this.O("cDepthTest",!0)
this.O("cDepthWrite",!0)
this.O("cBlendEquation",$.$get$kr())
this.O("cStencilFunc",$.$get$l1())}}
G.fk.prototype={
bA:function(a,b,c){var t,s
if(C.e.aO(a,0)===105){if(H.aK(C.b.ad(b.length,c)===this.z))H.b9("ChangeAttribute "+this.z)}else H.b(C.b.ad(b.length,c)===(this.ch.length/3|0))
this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.dY(t.a,34962,s)
J.kg(t.a,34962,b,35048)},
dv:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
ae:function(a,b,c){var t,s,r,q,p,o
t=J.kd(a,0)===105
if(t&&this.z===0)this.z=C.b.ad(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.jA(r.a))
this.bA(a,b,c)
q=$.$get$Y().h(0,a)
if(q==null)throw H.e("Unknown canonical "+a)
p=this.x
if(H.aK(p.F(0,a)))H.b9("unexpected attribute "+a)
o=p.h(0,a)
J.dZ(r.a,this.e)
r.cq(0,o,t?1:0)
s=s.h(0,a)
p=q.bB()
J.dY(r.a,34962,s)
J.kp(r.a,o,p,5126,!1,0,0)},
l:function(a){var t,s,r
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,t=t.gG(t),t=t.gw(t);t.p();){r=t.gq()
C.a.j(s,H.f(r)+":"+this.cy.h(0,r).length)}return"MESH["+this.a+"] "+C.a.ar(s,"  ")},
saT:function(a){this.cx=a}}
G.fH.prototype={
dn:function(a,b){var t=C.b.cX(a,b)
if(this.z===t)return
this.z=t
this.bD()},
bD:function(){var t,s,r,q,p,o,n
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
aL:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.q(new Float32Array(H.t(3)))
o.ax(r,q,p)
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
r=!!s.$isai
k=r?s.gaG(n):1
if(!!s.$isq){j=s.gm(n)
m=s.gn(n)
l=s.gM(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
l=s.gM(n)
n=j}else if(!(typeof n==="number")){n=null
m=null
l=null}s=C.c.K(t[0],n)
r=C.c.K(t[4],m)
q=C.c.K(t[8],l)
i=t[12]
h=C.c.K(t[1],n)
g=C.c.K(t[5],m)
f=C.c.K(t[9],l)
e=t[13]
d=C.c.K(t[2],n)
c=C.c.K(t[6],m)
b=C.c.K(t[10],l)
a=t[14]
a0=C.c.K(t[3],n)
a1=C.c.K(t[7],m)
a2=C.c.K(t[11],l)
a3=t[15]
t[12]=s+r+q+i*k
t[13]=h+g+f+e*k
t[14]=d+c+b+a*k
t[15]=a0+a1+a2+a3*k
a3=this.cx
a3.B(this.db)
a3.cA(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.fV.prototype={
dG:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gk(t)===s.gk(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gG(s),s=s.gw(s);s.p();){q=s.gq()
if(!t.F(0,q))C.a.j(r,q)}for(t=this.x,s=new P.cb(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.p();){q=s.d
if(!t.C(0,q))C.a.j(r,q)}return r},
dJ:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gG(b),s=s.gw(s),r=this.d,q=this.y,p=this.z,o=0;s.p();){n=s.gq()
switch(J.kd(n,0)){case 117:if(q.F(0,n)){m=b.h(0,n)
if(p.F(0,n))H.dW("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$Y().h(0,n)
if(l==null)H.F("unknown "+n)
H.b(q.F(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.jF(r.a,k,m)
else if(!!J.u(m).$iskR)J.mC(r.a,k,m)
break
case"float":if(l.c===0)J.mA(r.a,k,m)
else if(!!J.u(m).$iseK)J.mB(r.a,k,m)
break
case"mat4":if(l.c===0){j=H.aM(m,"$isM").a
J.ko(r.a,k,!1,j)}else if(!!J.u(m).$iseK)J.ko(r.a,k,!1,m)
else if(H.aK(!1))H.b9("bad unform: "+n)
break
case"mat3":if(l.c===0){j=H.aM(m,"$isaG").a
J.kn(r.a,k,!1,j)}else if(!!J.u(m).$iseK)J.kn(r.a,k,!1,m)
else if(H.aK(!1))H.b9("bad unform: "+n)
break
case"vec4":if(l.c===0){j=H.aM(m,"$isai").a
J.km(r.a,k,j)}else J.km(r.a,k,m)
break
case"vec3":if(l.c===0){j=H.aM(m,"$isq").a
J.kl(r.a,k,j)}else J.kl(r.a,k,m)
break
case"vec2":if(l.c===0){j=H.aM(m,"$isa3").a
J.kk(r.a,k,j)}else J.kk(r.a,k,m)
break
case"sampler2D":case"sampler2DShadow":j=C.b.a_(33984,this.ch)
J.ke(r.a,j)
j=H.aM(m,"$isc4").b
J.cm(r.a,3553,j)
j=this.ch
J.jF(r.a,k,j)
this.ch=this.ch+1
break
case"samplerCube":H.b(n==="uCubeTexture")
j=C.b.a_(33984,this.ch)
J.ke(r.a,j)
j=H.aM(m,"$isc4").b
J.cm(r.a,34067,j)
j=this.ch
J.jF(r.a,k,j)
this.ch=this.ch+1
break
default:H.dW("Error: unknow uniform type: "+j)
H.b(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":if(J.G(m,!0))J.e_(r.a,2929)
else J.jB(r.a,2929)
break
case"cStencilFunc":H.aM(m,"$isdJ")
j=m.a
if(j===1281)J.jB(r.a,2960)
else{J.e_(r.a,2960)
i=m.b
h=m.c
J.mv(r.a,j,i,h)}break
case"cDepthWrite":J.m7(r.a,m)
break
case"cBlendEquation":H.aM(m,"$isdI")
j=m.a
if(j===1281)J.jB(r.a,3042)
else{J.e_(r.a,3042)
i=m.b
h=m.c
J.m0(r.a,i,h)
J.m_(r.a,j)}break}++o
break}}s=Date.now()
""+o
new P.aT(1000*(s-new P.bg(t,!1).a)).l(0)},
dt:function(a,b,c){var t,s,r,q,p,o,n,m,l
Date.now()
t=this.d
s=this.r
J.mD(t.a,s)
this.ch=0
this.z.Y(0)
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.z)(b),++r){q=b[r]
this.dJ(q.a,q.aL())}s=this.Q
s.Y(0)
for(p=a.cy,p=p.gG(p),p=p.gw(p);p.p();)s.j(0,p.gq())
o=this.dG()
if(o.length!==0)P.V("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.f(o)))
s=a.d
p=a.e
J.dZ(s.a,p)
n=this.e.f.length>0
p=a.f
s=a.dv()
m=a.Q
l=a.z
t.toString
if(n)J.lY(t.a,p)
if(m!==-1)if(l>1)J.mb(t.a,p,s,m,0,l)
else J.ma(t.a,p,s,m,0)
else if(l>1)J.m9(t.a,p,0,s,l)
else J.m8(t.a,p,0,s)
if(n)J.me(t.a)},
dC:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j
t=this.d
s=this.e
r=s.b
q=this.f
p=q.b
o=s.f
n=J.m4(t.a)
m=G.li(t.a,35633,r)
J.kf(t.a,n,m)
l=G.li(t.a,35632,p)
J.kf(t.a,n,l)
if(o.length>0)J.mz(t.a,n,o,35980)
J.mp(t.a,n)
if(!J.mo(t.a,n,35714))H.F(J.mn(t.a,n))
this.r=n
this.sdR(0,P.jP(s.c,null))
for(s=s.d,r=s.length,p=this.y,k=0;k<s.length;s.length===r||(0,H.z)(s),++k){j=s[k]
o=this.r
p.i(0,j,J.ki(t.a,o,j))}for(s=q.d,r=s.length,k=0;k<s.length;s.length===r||(0,H.z)(s),++k){j=s[k]
q=this.r
p.i(0,j,J.ki(t.a,q,j))}},
sdR:function(a,b){this.x=b}}
G.i.prototype={
bB:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.b(!1)
return-1}}}
G.bq.prototype={
bu:function(a){var t,s,r,q,p
H.b(this.b==null)
for(t=a.length,s=this.c,r=this.x,q=0;q<a.length;a.length===t||(0,H.z)(a),++q){p=a[q]
H.b($.$get$Y().F(0,p))
H.b(!C.a.C(s,p))
C.a.j(s,p)
r.i(0,p,this.r);++this.r}C.a.aJ(s)},
af:function(a){var t,s,r,q
H.b(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.z)(a),++r){q=a[r]
if(H.aK($.$get$Y().F(0,q)))H.b9("missing uniform "+q)
H.b(!C.a.C(s,q))
C.a.j(s,q)}C.a.aJ(s)},
by:function(a){var t,s,r
H.b(this.b==null)
for(t=this.e,s=0;s<3;++s){r=a[s]
H.b($.$get$Y().F(0,r))
H.b(!C.a.C(t,r))
C.a.j(t,r)}C.a.aJ(t)},
bC:function(a,b){H.b(this.b==null)
this.b=this.dK(!0,a,b)},
aM:function(a){return this.bC(a,null)},
dK:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.b(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.z)(t),++o){n=t[o]
m=$.$get$Y().h(0,n)
C.a.j(q,"layout (location="+H.f(p.h(0,n))+") in "+m.a+" "+H.f(n)+";")}C.a.j(q,"")
l=r?"in":"out"
if(r)C.a.j(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.z)(t),++o){k=t[o]
m=$.$get$Y().h(0,k)
C.a.j(q,l+" "+m.a+" "+H.f(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.z)(t),++o){k=t[o]
m=$.$get$Y().h(0,k)
C.a.j(q,l+" "+m.a+" "+H.f(k)+";")}C.a.j(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.z)(t),++o){k=t[o]
m=$.$get$Y().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.j(q,"uniform "+m.a+" "+H.f(k)+j+";")}C.a.j(q,"")
if(c!=null)C.a.J(q,c)
C.a.j(q,"void main(void) {")
C.a.J(q,b)
C.a.j(q,"}")
return C.a.ar(q,"\n")}}
G.h4.prototype={
f3:function(a0,a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
t=this.d.a
s=t[12]
r=t[13]
q=t[14]
a1=new T.q(new Float32Array(H.t(3)))
a1.ax(0,1,0)
p=this.e
o=p.a
o[0]=t[12]
o[1]=t[13]
o[2]=t[14]
o=new Float32Array(H.t(3))
n=new T.q(o)
n.B(p)
m=a0.a
o[0]=o[0]-m[0]
o[1]=o[1]-m[1]
o[2]=o[2]-m[2]
n.D(0)
l=a1.cj(n)
l.D(0)
k=n.cj(l)
k.D(0)
j=l.b8(p)
i=k.b8(p)
p=n.b8(p)
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
cv:function(a){return this.f3(a,null)}}
G.hq.prototype={
dw:function(a,b){var t=this.e
if(t!==1)J.mx(a.a,b,34046,t)
J.kj(a.a,b,10240,this.r)
J.kj(a.a,b,10241,this.f)}}
G.c4.prototype={
l:function(a){return"Texture["+H.f(this.a)+", "+this.c+"]"}}
G.eU.prototype={
dD:function(a){var t,s
t=this.d
s=this.c
J.cm(t.a,s,this.b)
J.mw(t.a,s,0,6408,6408,5121,a)}}
R.h9.prototype={
dN:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.nu("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.n).bK(r,"float")
r.setProperty(p,"left","")
p=C.n.bK(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.i.S(t,s)}return t},
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
J.jy(this.a,s)
r=this.dN(b,c,90,30)
this.d=r
J.jy(this.a,r)
t=t.createElement("div")
this.c=t
J.jy(this.a,t)}}
R.ha.prototype={
dI:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.q.fl(s,2)+" fps"
t=this.c;(t&&C.i).dc(t,b)
r=C.b.E(30*C.q.ev(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.i).S(t,q)},
dH:function(a){return this.dI(a,"")}}
A.bV.prototype={
l:function(a){return"NODE["+this.a+"]"}}
A.bY.prototype={}
A.fU.prototype={
ds:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.d
s=this.r
r=this.z
q=this.Q
p=t.a
t=t.b
J.lZ(p.a,36160,t)
H.b(r>0&&q>0)
J.mF(p.a,this.x,this.y,r,q)
if(s!==0)J.m1(p.a,s)
for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.z)(t),++o){n=t[o]
m=n.e
C.a.j(m,new G.dL(P.L(),"transforms",!1,!0))
l=new T.M(new Float32Array(16))
l.N()
for(r=n.f,q=r.length,p=n.d,k=0;k<r.length;r.length===q||(0,H.z)(r),++k)A.lz(p,r[k],l,a,m)
m.pop()}},
dr:function(){return this.ds(null)}}
D.fc.prototype={
$1:function(a){this.a.al(0,C.K.eG(W.nF(this.b.response)))},
$S:function(){return{func:1,args:[,]}}}
D.fb.prototype={
$1:function(a){return this.a.al(0,this.b)},
$S:function(){return{func:1,args:[,]}}}
A.ja.prototype={
$2:function(a,b){var t=536870911&a+J.au(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(){return{func:1,args:[P.o,P.m]}}}
T.aG.prototype={
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
l:function(a){return"[0] "+this.V(0).l(0)+"\n[1] "+this.V(1).l(0)+"\n[2] "+this.V(2).l(0)+"\n"},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.f.i(this.a,b,c)},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aG){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gu:function(a){return A.dU(this.a)},
V:function(a){var t,s
t=new Float32Array(H.t(3))
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.q(t)},
eB:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
T.M.prototype={
ab:function(a,b,c){H.b(a<4)
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
l:function(a){return"[0] "+this.V(0).l(0)+"\n[1] "+this.V(1).l(0)+"\n[2] "+this.V(2).l(0)+"\n[3] "+this.V(3).l(0)+"\n"},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.f.i(this.a,b,c)},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.M){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gu:function(a){return A.dU(this.a)},
V:function(a){var t,s
t=new Float32Array(H.t(4))
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.ai(t)},
N:function(){var t=this.a
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
cA:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.a3.prototype={
l:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+"]"},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.a3){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gu:function(a){return A.dU(this.a)},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.f.i(this.a,b,c)},
gk:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.q.prototype={
ax:function(a,b,c){var t=this.a
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
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.q){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gu:function(a){return A.dU(this.a)},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.f.i(this.a,b,c)},
gk:function(a){return Math.sqrt(this.gU())},
gU:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
D:function(a){var t,s,r
t=Math.sqrt(this.gU())
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
cj:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.q(new Float32Array(H.t(3)))
t.ax(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
j:function(a,b){var t,s
t=b.a
s=this.a
s[0]=s[0]+t[0]
s[1]=s[1]+t[1]
s[2]=s[2]+t[2]},
a3:function(a,b){var t=this.a
t[2]=t[2]*b
t[1]=t[1]*b
t[0]=t[0]*b},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gM:function(a){return this.a[2]}}
T.ai.prototype={
B:function(a){var t,s
t=a.a
s=this.a
s[3]=t[3]
s[2]=t[2]
s[1]=t[1]
s[0]=t[0]},
l:function(a){var t=this.a
return H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+","+H.f(t[3])},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.ai){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gu:function(a){return A.dU(this.a)},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.f.i(this.a,b,c)},
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
gaG:function(a){return this.a[3]}}
Q.jn.prototype={
$1:function(a){var t,s,r
t=this.a
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.V("size change "+H.f(s)+" "+H.f(r))
this.b.dn(s,r)
t=this.c
t.z=s
t.Q=r},
$S:function(){return{func:1,v:true,args:[W.j]}}}
Q.jl.prototype={
$1:function(a7){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
this.a.a=a7+0
t=this.c
t.go=H.a4(t.go+0.001)
s=t.k4
if(s.h(0,37)!=null)t.go=H.a4(t.go+0.03)
else if(s.h(0,39)!=null)t.go=H.a4(t.go-0.03)
if(s.h(0,38)!=null)t.id=H.a4(t.id+0.03)
else if(s.h(0,40)!=null)t.id=H.a4(t.id-0.03)
if(s.h(0,33)!=null)t.fy=H.a4(t.fy*0.99)
else if(s.h(0,34)!=null)t.fy=H.a4(t.fy*1.01)
if(s.h(0,32)!=null){t.go=0
t.id=0}s=H.a4(C.c.ew(t.id,-1.4707963267948965,1.4707963267948965))
t.id=s
r=t.fy
q=t.go
p=r*Math.cos(s)
o=Math.cos(q)
s=Math.sin(s)
q=Math.sin(q)
n=t.d.a
n[12]=p*o
n[13]=r*s
n[14]=p*q
q=t.k2
s=q.a
n[12]=n[12]+s[0]
n[13]=n[13]+s[1]
n[14]=n[14]+s[2]
t.cv(q)
q=t.f
s=q.a
s[0]=n[2]
s[1]=n[6]
s[2]=n[10]
t=-t.k1
q=Math.sqrt(q.gU())
m=s[0]/q
l=s[1]/q
k=s[2]/q
q=Math.cos(t)
t=Math.sin(t)
j=1-q
i=m*m*j+q
s=k*t
h=m*l*j-s
r=l*t
g=m*k*j+r
f=l*m*j+s
e=l*l*j+q
t=m*t
d=l*k*j-t
c=k*m*j-r
b=k*l*j+t
a=k*k*j+q
q=n[0]
t=n[4]
r=n[8]
s=n[1]
o=n[5]
a0=n[9]
a1=n[2]
a2=n[6]
a3=n[10]
a4=n[3]
a5=n[7]
a6=n[11]
n[0]=q*i+t*f+r*c
n[1]=s*i+o*f+a0*c
n[2]=a1*i+a2*f+a3*c
n[3]=a4*i+a5*f+a6*c
n[4]=q*h+t*e+r*b
n[5]=s*h+o*e+a0*b
n[6]=a1*h+a2*e+a3*b
n[7]=a4*h+a5*e+a6*b
n[8]=q*g+t*d+r*a
n[9]=s*g+o*d+a0*a
n[10]=a1*g+a2*d+a3*a
n[11]=a4*g+a5*d+a6*a
this.d.dr()
C.a6.gen(window).aF(this)
this.b.dH(a7)},
$S:function(){return{func:1,v:true,args:[P.Z]}}}
Q.jm.prototype={
$1:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
t=this.a
s=$.$get$kc()
r=J.H(a)
q=r.h(a,1)
p=new G.hq(!1,!1,!1,!0,1,9729,9729)
o=J.m5(t.a)
n=new G.eU(q,s,o,3553,t,p)
J.cm(t.a,3553,o)
J.mr(t.a,37440,1)
n.dD(q)
p.dw(t,3553)
H.b(J.mm(t.a)===0)
J.cm(t.a,3553,null)
t=this.d
t.O("uTexture",n)
t.O("uNormalScale",0.8)
m=Y.n0(r.h(a,0))
P.V(m[0])
r=this.b
l=G.kO($.$get$k8(),r.d,m[0])
s=new Float32Array(H.t(9))
q=new T.M(new Float32Array(H.t(16)))
q.N()
p=new T.M(new Float32Array(H.t(16)))
p.N()
o=new Float32Array(H.t(3))
k=new Float32Array(H.t(3))
j=new Float32Array(H.t(3))
i=new Float32Array(H.t(3))
h=[]
g=new Float32Array(H.t(9))
f=new T.M(new Float32Array(H.t(16)))
f.N()
e=new T.M(new Float32Array(H.t(16)))
e.N()
d=new A.bV(null,null,h,new T.aG(g),f,e,new T.q(new Float32Array(H.t(3))),new T.q(new Float32Array(H.t(3))),new T.q(new Float32Array(H.t(3))),new T.q(new Float32Array(H.t(3))),"wrapper",!1,!0)
C.a.j(h,new A.bV(t,l,[],new T.aG(s),q,p,new T.q(o),new T.q(k),new T.q(j),new T.q(i),l.a,!1,!0))
t=new T.q(new Float32Array(H.t(3)))
t.ax(100,0,0)
d.cv(t)
H.b(!0)
C.a.j(r.f,d)
this.c.$1(0)},
$S:function(){return{func:1,args:[P.c]}}}
J.a.prototype.dh=J.a.prototype.l
J.bM.prototype.dj=J.bM.prototype.l
P.a0.prototype.di=P.a0.prototype.aH
W.a8.prototype.aK=W.a8.prototype.P
W.cd.prototype.dk=W.cd.prototype.X;(function installTearOffs(){installTearOff(H.b6.prototype,"gf2",0,0,0,null,["$0"],["aD"],0)
installTearOff(H.ar.prototype,"gd2",0,0,0,null,["$1"],["L"],2)
installTearOff(H.b5.prototype,"geL",0,0,0,null,["$1"],["Z"],2)
installTearOff(P,"nP",1,0,0,null,["$1"],["nr"],1)
installTearOff(P,"nQ",1,0,0,null,["$1"],["ns"],1)
installTearOff(P,"nR",1,0,0,null,["$1"],["nt"],1)
installTearOff(P,"lv",1,0,0,null,["$0"],["nN"],0)
installTearOff(P.J.prototype,"gbP",0,0,0,null,["$2","$1"],["I","dU"],5)
installTearOff(P,"nY",1,0,0,null,["$2"],["mM"],6)
installTearOff(W,"o2",1,0,0,null,["$1"],["mS"],7)
installTearOff(W,"o3",1,0,0,null,["$4"],["ny"],4)
installTearOff(W,"o4",1,0,0,null,["$4"],["nz"],4)
installTearOff(W.dw.prototype,"gbb",0,1,0,null,["$0"],["bc"],3)
installTearOff(W.dK.prototype,"gbb",0,1,0,null,["$0"],["bc"],3)
installTearOff(Q,"lJ",1,0,0,null,["$0"],["oc"],0)})();(function inheritance(){inherit(P.m,null)
var t=P.m
inherit(H.jL,t)
inherit(J.a,t)
inherit(J.e3,t)
inherit(P.a0,t)
inherit(H.dp,t)
inherit(P.dk,t)
inherit(H.cz,t)
inherit(H.be,t)
inherit(H.ix,t)
inherit(H.b6,t)
inherit(H.i3,t)
inherit(H.b7,t)
inherit(H.iw,t)
inherit(H.hW,t)
inherit(H.bp,t)
inherit(H.hs,t)
inherit(H.av,t)
inherit(H.ar,t)
inherit(H.b5,t)
inherit(H.fT,t)
inherit(H.hz,t)
inherit(P.bh,t)
inherit(H.dR,t)
inherit(H.aI,t)
inherit(H.an,t)
inherit(H.f7,t)
inherit(H.f9,t)
inherit(P.hY,t)
inherit(P.c8,t)
inherit(P.J,t)
inherit(P.dN,t)
inherit(P.c0,t)
inherit(P.hc,t)
inherit(P.bd,t)
inherit(P.iV,t)
inherit(P.h1,t)
inherit(P.iu,t)
inherit(P.cb,t)
inherit(P.bX,t)
inherit(P.y,t)
inherit(P.iv,t)
inherit(P.is,t)
inherit(P.cq,t)
inherit(P.cr,t)
inherit(P.aB,t)
inherit(P.K,t)
inherit(P.bg,t)
inherit(P.Z,t)
inherit(P.aT,t)
inherit(P.dF,t)
inherit(P.i8,t)
inherit(P.eN,t)
inherit(P.en,t)
inherit(P.c,t)
inherit(P.aF,t)
inherit(P.aH,t)
inherit(P.c_,t)
inherit(P.r,t)
inherit(P.c1,t)
inherit(W.eb,t)
inherit(W.hV,t)
inherit(W.ca,t)
inherit(W.C,t)
inherit(W.dy,t)
inherit(W.cd,t)
inherit(W.iN,t)
inherit(W.cA,t)
inherit(W.dx,t)
inherit(W.iH,t)
inherit(W.dS,t)
inherit(P.hN,t)
inherit(P.iz,t)
inherit(G.fn,t)
inherit(G.e9,t)
inherit(G.eO,t)
inherit(G.B,t)
inherit(G.eG,t)
inherit(G.cB,t)
inherit(G.dJ,t)
inherit(G.dI,t)
inherit(G.i,t)
inherit(G.bq,t)
inherit(G.hq,t)
inherit(G.c4,t)
inherit(R.h9,t)
inherit(T.aG,t)
inherit(T.M,t)
inherit(T.a3,t)
inherit(T.q,t)
inherit(T.ai,t)
t=J.a
inherit(J.f_,t)
inherit(J.f0,t)
inherit(J.bM,t)
inherit(J.aV,t)
inherit(J.bl,t)
inherit(J.aW,t)
inherit(H.bQ,t)
inherit(H.bn,t)
inherit(W.h,t)
inherit(W.a7,t)
inherit(W.cp,t)
inherit(W.e7,t)
inherit(W.A,t)
inherit(W.cF,t)
inherit(W.ed,t)
inherit(W.ee,t)
inherit(W.eg,t)
inherit(W.cv,t)
inherit(W.cw,t)
inherit(W.cx,t)
inherit(W.cQ,t)
inherit(W.ej,t)
inherit(W.j,t)
inherit(W.cP,t)
inherit(W.aa,t)
inherit(W.eR,t)
inherit(W.cT,t)
inherit(W.bi,t)
inherit(W.bj,t)
inherit(W.fd,t)
inherit(W.fj,t)
inherit(W.ab,t)
inherit(W.cO,t)
inherit(W.fw,t)
inherit(W.dw,t)
inherit(W.cS,t)
inherit(W.fF,t)
inherit(W.br,t)
inherit(W.ac,t)
inherit(W.cM,t)
inherit(W.aq,t)
inherit(W.dB,t)
inherit(W.ae,t)
inherit(W.cL,t)
inherit(W.af,t)
inherit(W.hb,t)
inherit(W.a1,t)
inherit(W.cK,t)
inherit(W.hr,t)
inherit(W.ah,t)
inherit(W.cV,t)
inherit(W.hw,t)
inherit(W.dK,t)
inherit(W.hD,t)
inherit(W.hI,t)
inherit(W.hX,t)
inherit(W.cJ,t)
inherit(W.cZ,t)
inherit(W.cY,t)
inherit(W.cU,t)
inherit(W.cX,t)
inherit(W.cW,t)
inherit(W.iT,t)
inherit(W.iU,t)
inherit(P.aw,t)
inherit(P.cI,t)
inherit(P.ax,t)
inherit(P.cN,t)
inherit(P.fL,t)
inherit(P.fM,t)
inherit(P.fR,t)
inherit(P.cG,t)
inherit(P.ay,t)
inherit(P.cR,t)
inherit(P.hH,t)
inherit(P.e4,t)
inherit(P.fW,t)
inherit(P.fX,t)
inherit(P.iS,t)
inherit(P.cH,t)
t=J.bM
inherit(J.fJ,t)
inherit(J.b2,t)
inherit(J.aX,t)
inherit(J.jK,J.aV)
t=J.bl
inherit(J.dm,t)
inherit(J.dl,t)
t=P.a0
inherit(H.d,t)
inherit(H.dq,t)
inherit(H.dM,t)
t=H.d
inherit(H.bm,t)
inherit(H.f8,t)
inherit(H.em,H.dq)
t=P.dk
inherit(H.fe,t)
inherit(H.hK,t)
t=H.bm
inherit(H.bN,t)
inherit(P.fa,t)
t=H.be
inherit(H.jv,t)
inherit(H.jw,t)
inherit(H.ir,t)
inherit(H.i4,t)
inherit(H.eX,t)
inherit(H.eY,t)
inherit(H.iy,t)
inherit(H.ht,t)
inherit(H.hu,t)
inherit(H.jx,t)
inherit(H.jf,t)
inherit(H.jg,t)
inherit(H.jh,t)
inherit(H.ji,t)
inherit(H.jj,t)
inherit(H.hm,t)
inherit(H.f1,t)
inherit(H.jb,t)
inherit(H.jc,t)
inherit(H.jd,t)
inherit(P.hS,t)
inherit(P.hR,t)
inherit(P.hT,t)
inherit(P.hU,t)
inherit(P.eQ,t)
inherit(P.eP,t)
inherit(P.i9,t)
inherit(P.ii,t)
inherit(P.id,t)
inherit(P.ie,t)
inherit(P.ig,t)
inherit(P.ib,t)
inherit(P.ih,t)
inherit(P.ia,t)
inherit(P.il,t)
inherit(P.im,t)
inherit(P.ik,t)
inherit(P.ij,t)
inherit(P.hf,t)
inherit(P.hg,t)
inherit(P.hd,t)
inherit(P.he,t)
inherit(P.iW,t)
inherit(P.j_,t)
inherit(P.iC,t)
inherit(P.iB,t)
inherit(P.iD,t)
inherit(P.ff,t)
inherit(P.ek,t)
inherit(P.el,t)
inherit(W.j0,t)
inherit(W.hL,t)
inherit(W.i7,t)
inherit(W.fy,t)
inherit(W.fx,t)
inherit(W.iJ,t)
inherit(W.iK,t)
inherit(W.iQ,t)
inherit(W.iR,t)
inherit(P.hP,t)
inherit(P.j1,t)
inherit(P.j2,t)
inherit(P.j3,t)
inherit(B.jq,t)
inherit(B.jr,t)
inherit(B.js,t)
inherit(B.jt,t)
inherit(B.ju,t)
inherit(B.fB,t)
inherit(B.fC,t)
inherit(B.fD,t)
inherit(B.fE,t)
inherit(D.fc,t)
inherit(D.fb,t)
inherit(A.ja,t)
inherit(Q.jn,t)
inherit(Q.jl,t)
inherit(Q.jm,t)
t=H.hW
inherit(H.bu,t)
inherit(H.ce,t)
t=P.bh
inherit(H.dz,t)
inherit(H.f2,t)
inherit(H.hC,t)
inherit(H.hB,t)
inherit(H.e8,t)
inherit(H.fZ,t)
inherit(P.co,t)
inherit(P.bo,t)
inherit(P.al,t)
inherit(P.w,t)
inherit(P.c5,t)
inherit(P.ap,t)
inherit(P.a_,t)
inherit(P.ec,t)
t=H.hm
inherit(H.h8,t)
inherit(H.bC,t)
inherit(H.hQ,P.co)
t=H.bn
inherit(H.fo,t)
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
inherit(H.fp,t)
t=H.du
inherit(H.fq,t)
inherit(H.fr,t)
inherit(H.fs,t)
inherit(H.ft,t)
inherit(H.fu,t)
inherit(H.dv,t)
inherit(H.fv,t)
t=P.hY
inherit(P.c7,t)
inherit(P.iO,t)
inherit(P.iA,P.iV)
inherit(P.dP,H.an)
inherit(P.h0,P.h1)
inherit(P.iq,P.h0)
inherit(P.it,P.iq)
inherit(P.dn,P.bX)
inherit(P.f3,P.cq)
inherit(P.f4,P.cr)
t=P.Z
inherit(P.R,t)
inherit(P.o,t)
t=P.al
inherit(P.dC,t)
inherit(P.eV,t)
t=W.h
inherit(W.v,t)
inherit(W.bG,t)
inherit(W.ea,t)
inherit(W.eI,t)
inherit(W.bL,t)
inherit(W.bP,t)
inherit(W.fO,t)
inherit(W.dD,t)
inherit(W.h2,t)
inherit(W.ad,t)
inherit(W.bF,t)
inherit(W.ag,t)
inherit(W.a2,t)
inherit(W.bE,t)
inherit(W.hF,t)
inherit(W.hJ,t)
inherit(W.c6,t)
inherit(W.hM,t)
inherit(W.b4,t)
inherit(W.iI,t)
t=W.v
inherit(W.a8,t)
inherit(W.aR,t)
inherit(W.aS,t)
inherit(W.cu,t)
inherit(W.i_,t)
t=W.a8
inherit(W.l,t)
inherit(P.I,t)
t=W.l
inherit(W.e1,t)
inherit(W.e2,t)
inherit(W.aP,t)
inherit(W.aQ,t)
inherit(W.ct,t)
inherit(W.eM,t)
inherit(W.cC,t)
inherit(W.bk,t)
inherit(W.eW,t)
inherit(W.bO,t)
inherit(W.h_,t)
inherit(W.dG,t)
inherit(W.hk,t)
inherit(W.hl,t)
inherit(W.c2,t)
inherit(W.ip,t)
inherit(W.bJ,W.bG)
inherit(W.e5,W.bJ)
inherit(W.bf,W.cF)
inherit(W.eh,W.cw)
inherit(W.di,W.cQ)
inherit(W.ei,W.di)
inherit(W.a9,W.cp)
inherit(W.dg,W.cP)
inherit(W.eH,W.dg)
inherit(W.dh,W.cT)
inherit(W.bK,W.dh)
inherit(W.cD,W.aS)
inherit(W.cE,W.bL)
inherit(W.aJ,W.j)
t=W.aJ
inherit(W.aY,t)
inherit(W.S,t)
inherit(W.b1,t)
inherit(W.fl,W.bP)
inherit(W.da,W.cO)
inherit(W.fm,W.da)
inherit(W.X,P.dn)
inherit(W.db,W.cS)
inherit(W.bW,W.db)
t=W.br
inherit(W.fI,t)
inherit(W.fY,t)
inherit(W.hy,t)
inherit(W.dc,W.cM)
inherit(W.fK,W.dc)
inherit(W.fN,W.aq)
inherit(W.bI,W.bF)
inherit(W.h3,W.bI)
inherit(W.d8,W.cL)
inherit(W.h5,W.d8)
inherit(W.d4,W.cK)
inherit(W.ho,W.d4)
inherit(W.bH,W.bE)
inherit(W.hp,W.bH)
inherit(W.de,W.cV)
inherit(W.hv,W.de)
inherit(W.bs,W.bO)
inherit(W.b3,W.S)
inherit(W.df,W.cJ)
inherit(W.dO,W.df)
inherit(W.dd,W.cZ)
inherit(W.hZ,W.dd)
inherit(W.i0,W.cx)
inherit(W.d_,W.cY)
inherit(W.io,W.d_)
inherit(W.d0,W.cU)
inherit(W.dQ,W.d0)
inherit(W.d6,W.cX)
inherit(W.iL,W.d6)
inherit(W.d2,W.cW)
inherit(W.iM,W.d2)
inherit(W.i1,W.hV)
inherit(W.i5,P.c0)
inherit(W.i2,W.i5)
inherit(W.i6,P.hc)
inherit(W.iP,W.cd)
inherit(P.hO,P.hN)
inherit(P.N,P.iz)
t=P.I
inherit(P.aE,t)
inherit(P.aO,t)
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
inherit(P.eJ,t)
inherit(P.fg,t)
inherit(P.fh,t)
inherit(P.fG,t)
inherit(P.bZ,t)
inherit(P.hj,t)
inherit(P.hG,t)
inherit(P.c9,t)
inherit(P.iE,t)
inherit(P.iF,t)
inherit(P.iG,t)
t=P.aE
inherit(P.e0,t)
inherit(P.eL,t)
inherit(P.am,t)
inherit(P.eT,t)
inherit(P.hi,t)
inherit(P.dH,t)
inherit(P.hE,t)
inherit(P.d1,P.cI)
inherit(P.f5,P.d1)
inherit(P.d9,P.cN)
inherit(P.fz,P.d9)
inherit(P.fS,P.am)
inherit(P.d7,P.cG)
inherit(P.hh,P.d7)
t=P.dH
inherit(P.hn,t)
inherit(P.c3,t)
inherit(P.d5,P.cR)
inherit(P.hx,P.d5)
inherit(P.d3,P.cH)
inherit(P.h7,P.d3)
t=G.fn
inherit(G.h4,t)
inherit(G.dL,t)
inherit(G.f6,t)
inherit(G.fk,t)
inherit(G.fV,t)
inherit(A.bY,t)
inherit(A.fU,t)
t=G.h4
inherit(G.e6,t)
inherit(A.bV,t)
inherit(B.fA,G.e6)
inherit(G.h6,G.f6)
t=G.dL
inherit(G.eS,t)
inherit(G.fi,t)
inherit(G.fH,t)
inherit(G.eU,G.c4)
inherit(R.ha,R.h9)
mixin(H.bR,P.y)
mixin(H.bS,P.y)
mixin(H.bT,H.cz)
mixin(H.bU,H.cz)
mixin(P.bX,P.y)
mixin(W.bE,P.y)
mixin(W.bF,P.y)
mixin(W.bG,P.y)
mixin(W.bH,W.C)
mixin(W.bI,W.C)
mixin(W.bJ,W.C)
mixin(W.cF,W.eb)
mixin(W.cZ,P.y)
mixin(W.cL,P.y)
mixin(W.cS,P.y)
mixin(W.cT,P.y)
mixin(W.cU,P.y)
mixin(W.cV,P.y)
mixin(W.cW,P.y)
mixin(W.cX,P.y)
mixin(W.cY,P.y)
mixin(W.cJ,P.y)
mixin(W.cK,P.y)
mixin(W.cM,P.y)
mixin(W.cO,P.y)
mixin(W.cP,P.y)
mixin(W.cQ,P.y)
mixin(W.d_,W.C)
mixin(W.d0,W.C)
mixin(W.db,W.C)
mixin(W.dc,W.C)
mixin(W.da,W.C)
mixin(W.df,W.C)
mixin(W.dg,W.C)
mixin(W.dh,W.C)
mixin(W.di,W.C)
mixin(W.d2,W.C)
mixin(W.d4,W.C)
mixin(W.d6,W.C)
mixin(W.d8,W.C)
mixin(W.dd,W.C)
mixin(W.de,W.C)
mixin(P.cI,P.y)
mixin(P.cG,P.y)
mixin(P.cN,P.y)
mixin(P.cR,P.y)
mixin(P.d1,W.C)
mixin(P.d9,W.C)
mixin(P.d5,W.C)
mixin(P.d7,W.C)
mixin(P.cH,P.y)
mixin(P.d3,W.C)})();(function constants(){C.h=W.aP.prototype
C.z=W.aQ.prototype
C.n=W.bf.prototype
C.i=W.ct.prototype
C.A=W.cv.prototype
C.B=W.cC.prototype
C.j=W.cD.prototype
C.p=W.cE.prototype
C.C=J.a.prototype
C.a=J.aV.prototype
C.q=J.dl.prototype
C.b=J.dm.prototype
C.c=J.bl.prototype
C.e=J.aW.prototype
C.J=J.aX.prototype
C.f=H.dr.prototype
C.v=W.bW.prototype
C.w=J.fJ.prototype
C.x=W.dB.prototype
C.y=W.dG.prototype
C.m=J.b2.prototype
C.a5=W.b3.prototype
C.a6=W.c6.prototype
C.d=new P.iA()
C.o=new P.aT(0)
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
C.M=H.E(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.r])
C.N=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.u=makeConstList([])
C.k=H.E(makeConstList(["bind","if","ref","repeat","syntax"]),[P.r])
C.l=H.E(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.r])
C.O=H.O("on")
C.P=H.O("oo")
C.Q=H.O("eK")
C.R=H.O("op")
C.S=H.O("oq")
C.T=H.O("kR")
C.U=H.O("or")
C.V=H.O("kU")
C.W=H.O("aH")
C.X=H.O("r")
C.Y=H.O("le")
C.Z=H.O("lf")
C.a_=H.O("ot")
C.a0=H.O("lg")
C.a1=H.O("aB")
C.a2=H.O("R")
C.a3=H.O("o")
C.a4=H.O("Z")})();(function staticFields(){$.kY="$cachedFunction"
$.kZ="$cachedInvocation"
$.kv=null
$.kt=null
$.jZ=!1
$.k3=null
$.ls=null
$.lL=null
$.j6=null
$.je=null
$.k4=null
$.bv=null
$.cf=null
$.cg=null
$.k_=!1
$.x=C.d
$.kL=0
$.aD=null
$.jH=null
$.kK=null
$.kJ=null
$.kH=null
$.kG=null
$.kF=null
$.kE=null
$.nT=0
$.nU=0
$.k9=0
$.lH=0
$.ck=0
$.cl=0
$.oj=!1
$.lC=0
$.ef="../asset/leeperrysmith/"})();(function lazyInitializers(){lazy($,"kD","$get$kD",function(){return H.lE("_$dart_dartClosure")})
lazy($,"jM","$get$jM",function(){return H.lE("_$dart_js")})
lazy($,"kS","$get$kS",function(){return H.n5()})
lazy($,"kT","$get$kT",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.kL
$.kL=t+1
t="expando$key$"+t}return new P.en(null,t,[P.o])})
lazy($,"l3","$get$l3",function(){return H.az(H.hA({
toString:function(){return"$receiver$"}}))})
lazy($,"l4","$get$l4",function(){return H.az(H.hA({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"l5","$get$l5",function(){return H.az(H.hA(null))})
lazy($,"l6","$get$l6",function(){return H.az(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"la","$get$la",function(){return H.az(H.hA(void 0))})
lazy($,"lb","$get$lb",function(){return H.az(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"l8","$get$l8",function(){return H.az(H.l9(null))})
lazy($,"l7","$get$l7",function(){return H.az(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"ld","$get$ld",function(){return H.az(H.l9(void 0))})
lazy($,"lc","$get$lc",function(){return H.az(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"jX","$get$jX",function(){return P.nq()})
lazy($,"kN","$get$kN",function(){return P.nw(null,P.aH)})
lazy($,"ch","$get$ch",function(){return[]})
lazy($,"kC","$get$kC",function(){return{}})
lazy($,"ll","$get$ll",function(){return P.jP(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"jY","$get$jY",function(){return P.L()})
lazy($,"j5","$get$j5",function(){return P.jO(P.o,P.aB)})
lazy($,"cj","$get$cj",function(){return P.jO(P.r,P.aB)})
lazy($,"l1","$get$l1",function(){return new G.dJ(1281,0,4294967295)})
lazy($,"kr","$get$kr",function(){return new G.dI(1281,1281,1281)})
lazy($,"Y","$get$Y",function(){return P.aZ(["cBlendEquation",new G.i("","",0),"cDepthWrite",new G.i("","",0),"cDepthTest",new G.i("","",0),"cStencilFunc",new G.i("","",0),"tPosition",new G.i("vec3","",0),"tSpeed",new G.i("vec3","",0),"tForce",new G.i("vec3","",0),"aColors",new G.i("vec3","per vertex color",0),"aColorAlpha",new G.i("vec4","per vertex color",0),"aPosition",new G.i("vec3","vertex coordinates",0),"aTexUV",new G.i("vec2","texture uvs",0),"aNormal",new G.i("vec3","vertex normals",0),"aBinormal",new G.i("vec3","vertex binormals",0),"aCenter",new G.i("vec4","for wireframe",0),"aPointSize",new G.i("float","",0),"aBoneIndex",new G.i("vec4","",0),"aBoneWeight",new G.i("vec4","",0),"aTangent",new G.i("vec3","vertex tangents",0),"aBitangent",new G.i("vec3","vertex btangents",0),"iaRotation",new G.i("vec4","",0),"iaTranslation",new G.i("vec3","",0),"iaScale",new G.i("vec3","",0),"vColor",new G.i("vec3","per vertex color",0),"vTexUV",new G.i("vec2","",0),"vLightWeighting",new G.i("vec3","",0),"vNormal",new G.i("vec3","",0),"vPosition",new G.i("vec3","vertex coordinates",0),"vPositionFromLight",new G.i("vec4","delta from light",0),"vCenter",new G.i("vec4","for wireframe",0),"vDepth",new G.i("float","depth for shadowmaps",0),"uTransformationMatrix",new G.i("mat4","",0),"uModelMatrix",new G.i("mat4","",0),"uNormalMatrix",new G.i("mat3","",0),"uConvolutionMatrix",new G.i("mat3","",0),"uPerspectiveViewMatrix",new G.i("mat4","",0),"uLightPerspectiveViewMatrix",new G.i("mat4","",0),"uShadowMap",new G.i("sampler2DShadow","",0),"uTexture",new G.i("sampler2D","",0),"uTexture2",new G.i("sampler2D","",0),"uTexture3",new G.i("sampler2D","",0),"uTexture4",new G.i("sampler2D","",0),"uSpecularMap",new G.i("sampler2D","",0),"uNormalMap",new G.i("sampler2D","",0),"uBumpMap",new G.i("sampler2D","",0),"uDepthMap",new G.i("sampler2D","",0),"uCubeTexture",new G.i("samplerCube","",0),"uAnimationTable",new G.i("sampler2D","",0),"uTime",new G.i("float","time since program start in sec",0),"uCameraNear",new G.i("float","",0),"uCameraFar",new G.i("float","",0),"uFogNear",new G.i("float","",0),"uFogFar",new G.i("float","",0),"uPointSize",new G.i("float","",0),"uScale",new G.i("float","",0),"uAngle",new G.i("float","",0),"uCanvasSize",new G.i("vec2","",0),"uCenter2",new G.i("vec2","",0),"uCutOff",new G.i("float","",0),"uShininess",new G.i("float","",0),"uShadowBias",new G.i("float","",0),"uOpacity",new G.i("float","",0),"uColor",new G.i("vec3","",0),"uAmbientDiffuse",new G.i("vec3","",0),"uColorEmissive",new G.i("vec3","",0),"uColorSpecular",new G.i("vec3","",0),"uColorDiffuse",new G.i("vec3","",0),"uColorAlpha",new G.i("vec4","",0),"uColorAlpha2",new G.i("vec4","",0),"uEyePosition",new G.i("vec3","",0),"uMaterial",new G.i("mat4","",0),"uRange",new G.i("vec2","",0),"uDirection",new G.i("vec2","",0),"uBoneMatrices",new G.i("mat4","",128),"uLightDescs",new G.i("mat4","",4),"uLightCount",new G.i("float","",0),"uLightTypes",new G.i("float","",4),"uBumpScale",new G.i("float","for bump maps",0),"uNormalScale",new G.i("float","for normal maps",0)])})
lazy($,"ky","$get$ky",function(){return T.U(0.4,0.4,0.4)})
lazy($,"kz","$get$kz",function(){return T.U(1,1,0)})
lazy($,"lN","$get$lN",function(){var t=new G.bq("SolidColor",null,[],[],[],[],0,P.L())
t.bu(["aPosition"])
t.af(["uPerspectiveViewMatrix","uModelMatrix"])
t.aM(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"])
return t})
lazy($,"lM","$get$lM",function(){var t=new G.bq("SolidColorF",null,[],[],[],[],0,P.L())
t.af(["uColor"])
t.aM(["oFragColor = vec4( uColor, 1.0 );"])
return t})
lazy($,"kP","$get$kP",function(){return[new G.B(0,11,5),new G.B(0,5,1),new G.B(0,1,7),new G.B(0,7,10),new G.B(0,10,11),new G.B(1,5,9),new G.B(5,11,4),new G.B(11,10,2),new G.B(10,7,6),new G.B(7,1,8),new G.B(3,9,4),new G.B(3,4,2),new G.B(3,2,6),new G.B(3,6,8),new G.B(3,8,9),new G.B(4,9,5),new G.B(2,4,11),new G.B(6,2,10),new G.B(8,6,7),new G.B(9,8,1)]})
lazy($,"lQ","$get$lQ",function(){return(1+P.ok(5))/2})
lazy($,"kQ","$get$kQ",function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=$.$get$lQ()
s=T.U(-1,t,0)
s.D(0)
r=T.U(1,t,0)
r.D(0)
q=T.U(-1,-t,0)
q.D(0)
p=T.U(1,-t,0)
p.D(0)
o=T.U(0,-1,t)
o.D(0)
n=T.U(0,1,t)
n.D(0)
m=T.U(0,-1,-t)
m.D(0)
l=T.U(0,1,-t)
l.D(0)
k=T.U(t,0,-1)
k.D(0)
j=T.U(t,0,1)
j.D(0)
i=T.U(-t,0,-1)
i.D(0)
t=T.U(-t,0,1)
t.D(0)
return[s,r,q,p,o,n,m,l,k,j,i,t]})
lazy($,"k8","$get$k8",function(){return $.ef+"LeePerrySmith.js"})
lazy($,"lI","$get$lI",function(){return $.ef+"Infinite-Level_02_Tangent_SmoothUV.jpg"})
lazy($,"kc","$get$kc",function(){return $.ef+"Map-COL.jpg"})
lazy($,"lO","$get$lO",function(){return $.ef+"Map-SPEC.jpg"})
lazy($,"lS","$get$lS",function(){var t=new G.bq("LightBlinnPhongV",null,[],[],[],[],0,P.L())
t.bu(["aPosition","aNormal","aTexUV"])
t.by(["vPosition","vNormal","vTexUV"])
t.af(["uPerspectiveViewMatrix","uModelMatrix","uNormalMatrix"])
t.aM(["        vec4 pos = uModelMatrix * vec4(aPosition, 1.0);\n        gl_Position = uPerspectiveViewMatrix * pos;\n        vPosition = pos.xyz;\n        vNormal = uNormalMatrix * aNormal;\n        vTexUV = aTexUV;\n"])
return t})
lazy($,"lB","$get$lB",function(){var t=new G.bq("LightBlinnPhongF",null,[],[],[],[],0,P.L())
t.by(["vPosition","vNormal","vTexUV"])
t.af(["uLightDescs","uLightTypes","uShininess"])
t.af(["uEyePosition","uColor","uTexture"])
t.bC(["ColorComponents acc = CombinedLight(vPosition - uEyePosition,\n                                    vNormal,\n                                    uEyePosition,\n                                    uLightDescs,\n                                    uLightTypes,\n                                    uShininess);\n\nvec4 diffuseMap = texture(uTexture, vTexUV );\n\noFragColor.rgb = diffuseMap.rgb + acc.diffuse + acc.specular + uColor;\noFragColor.a = 1.0;\n\n"],["// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"])
return t})
lazy($,"ka","$get$ka",function(){return T.U(0.5,1,0)})
lazy($,"lw","$get$lw",function(){return T.lh(0.866)})
lazy($,"lx","$get$lx",function(){return T.lh(0.133)})})()
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
mangledGlobalNames:{o:"int",R:"double",Z:"num",r:"String",aB:"bool",aH:"Null",c:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.v},{func:1,ret:P.aB,args:[W.a8,P.r,P.r,W.ca]},{func:1,v:true,args:[P.m],opt:[P.c_]},{func:1,ret:P.o,args:[P.K,P.K]},{func:1,ret:P.r,args:[W.h]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationTimeline:J.a,AppBannerPromptResult:J.a,BarProp:J.a,Body:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CHROMIUMValuebuffer:J.a,CircularGeofencingRegion:J.a,Client:J.a,Clients:J.a,CompositorProxy:J.a,ConsoleBase:J.a,Coordinates:J.a,Credential:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMStringMap:J.a,EffectModel:J.a,Entry:J.a,FederatedCredential:J.a,FileEntry:J.a,FileError:J.a,Stream:J.a,DOMFileSystem:J.a,FontFace:J.a,FormData:J.a,GamepadButton:J.a,Geofencing:J.a,GeofencingRegion:J.a,Geolocation:J.a,Geoposition:J.a,Headers:J.a,HMDVRDevice:J.a,IdleDeadline:J.a,ImageBitmapRenderingContext:J.a,InjectedScriptHost:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,KeyframeEffect:J.a,MediaDeviceInfo:J.a,MediaDevices:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaMetadata:J.a,MediaSession:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigatorStorageUtils:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,OffscreenCanvas:J.a,PasswordCredential:J.a,PerformanceCompositeTiming:J.a,PerformanceEntry:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformanceRenderTiming:J.a,PerformanceResourceTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PositionError:J.a,PositionSensorVRDevice:J.a,Presentation:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,ReadableByteStream:J.a,ReadableByteStreamReader:J.a,ReadableStreamReader:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,Selection:J.a,ServicePort:J.a,SharedArrayBuffer:J.a,SourceInfo:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StorageInfo:J.a,StorageManager:J.a,StorageQuota:J.a,StyleMedia:J.a,StylePropertyMap:J.a,SyncManager:J.a,TextMetrics:J.a,TrackDefault:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRDevice:J.a,VREyeParameters:J.a,VRFieldOfView:J.a,VRPositionState:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkerConsole:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothAdvertisingData:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,NFC:J.a,PagePopupController:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WebKitCSSMatrix:J.a,Worklet:J.a,WorkletGlobalScope:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPreserveAspectRatio:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,CHROMIUMSubscribeUniform:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTDisjointTimerQuery:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bQ,ArrayBufferView:H.bn,DataView:H.fo,Float32Array:H.dr,Float64Array:H.fp,Int16Array:H.fq,Int32Array:H.fr,Int8Array:H.fs,Uint16Array:H.ft,Uint32Array:H.fu,Uint8ClampedArray:H.dv,CanvasPixelArray:H.dv,Uint8Array:H.fv,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLKeygenElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMenuElement:W.l,HTMLMenuItemElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTextAreaElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,HTMLAnchorElement:W.e1,HTMLAreaElement:W.e2,AudioTrack:W.a7,AudioTrackList:W.e5,Blob:W.cp,HTMLBodyElement:W.aP,HTMLCanvasElement:W.aQ,CanvasRenderingContext2D:W.e7,CDATASection:W.aR,CharacterData:W.aR,Comment:W.aR,ProcessingInstruction:W.aR,Text:W.aR,CompositorWorker:W.ea,CSSCharsetRule:W.A,CSSFontFaceRule:W.A,CSSGroupingRule:W.A,CSSImportRule:W.A,CSSKeyframeRule:W.A,MozCSSKeyframeRule:W.A,WebKitCSSKeyframeRule:W.A,CSSKeyframesRule:W.A,MozCSSKeyframesRule:W.A,WebKitCSSKeyframesRule:W.A,CSSMediaRule:W.A,CSSNamespaceRule:W.A,CSSPageRule:W.A,CSSRule:W.A,CSSStyleRule:W.A,CSSSupportsRule:W.A,CSSViewportRule:W.A,CSSStyleDeclaration:W.bf,MSStyleCSSProperties:W.bf,CSS2Properties:W.bf,DataTransferItemList:W.ed,DeviceAcceleration:W.ee,HTMLDivElement:W.ct,XMLDocument:W.aS,Document:W.aS,DocumentFragment:W.cu,ShadowRoot:W.cu,DOMException:W.eg,DOMImplementation:W.cv,DOMPoint:W.eh,DOMPointReadOnly:W.cw,DOMRectReadOnly:W.cx,DOMStringList:W.ei,DOMTokenList:W.ej,Element:W.a8,AnimationEvent:W.j,AnimationPlayerEvent:W.j,ApplicationCacheErrorEvent:W.j,AutocompleteErrorEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceLightEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,GamepadEvent:W.j,GeofencingEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RelatedEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCIceCandidateEvent:W.j,RTCPeerConnectionIceEvent:W.j,SecurityPolicyViolationEvent:W.j,ServicePortConnectEvent:W.j,ServiceWorkerMessageEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,Animation:W.h,ApplicationCache:W.h,DOMApplicationCache:W.h,OfflineResourceList:W.h,BatteryManager:W.h,CanvasCaptureMediaStreamTrack:W.h,CrossOriginServiceWorkerClient:W.h,EventSource:W.h,FileReader:W.h,FontFaceSet:W.h,MediaKeySession:W.h,MediaQueryList:W.h,MediaRecorder:W.h,MediaSource:W.h,MediaStream:W.h,MediaStreamTrack:W.h,MessagePort:W.h,MIDIAccess:W.h,NetworkInformation:W.h,Notification:W.h,Performance:W.h,PermissionStatus:W.h,PresentationAvailability:W.h,PresentationReceiver:W.h,PresentationRequest:W.h,RTCDTMFSender:W.h,RTCPeerConnection:W.h,webkitRTCPeerConnection:W.h,mozRTCPeerConnection:W.h,ScreenOrientation:W.h,ServicePortCollection:W.h,ServiceWorkerContainer:W.h,ServiceWorkerRegistration:W.h,SpeechRecognition:W.h,SpeechSynthesis:W.h,SpeechSynthesisUtterance:W.h,WorkerPerformance:W.h,BluetoothDevice:W.h,BluetoothRemoteGATTCharacteristic:W.h,USB:W.h,IDBDatabase:W.h,IDBOpenDBRequest:W.h,IDBVersionChangeRequest:W.h,IDBRequest:W.h,IDBTransaction:W.h,AnalyserNode:W.h,RealtimeAnalyserNode:W.h,AudioBufferSourceNode:W.h,AudioContext:W.h,webkitAudioContext:W.h,AudioDestinationNode:W.h,AudioNode:W.h,AudioSourceNode:W.h,BiquadFilterNode:W.h,ChannelMergerNode:W.h,AudioChannelMerger:W.h,ChannelSplitterNode:W.h,AudioChannelSplitter:W.h,ConvolverNode:W.h,DelayNode:W.h,DynamicsCompressorNode:W.h,GainNode:W.h,AudioGainNode:W.h,IIRFilterNode:W.h,MediaElementAudioSourceNode:W.h,MediaStreamAudioDestinationNode:W.h,MediaStreamAudioSourceNode:W.h,OfflineAudioContext:W.h,OscillatorNode:W.h,Oscillator:W.h,PannerNode:W.h,AudioPannerNode:W.h,webkitAudioPannerNode:W.h,ScriptProcessorNode:W.h,JavaScriptAudioNode:W.h,StereoPannerNode:W.h,WaveShaperNode:W.h,EventTarget:W.h,File:W.a9,FileList:W.eH,FileWriter:W.eI,HTMLFormElement:W.eM,Gamepad:W.aa,HTMLHeadElement:W.cC,History:W.eR,HTMLCollection:W.bK,HTMLFormControlsCollection:W.bK,HTMLOptionsCollection:W.bK,HTMLDocument:W.cD,XMLHttpRequest:W.cE,XMLHttpRequestUpload:W.bL,XMLHttpRequestEventTarget:W.bL,ImageBitmap:W.bi,ImageData:W.bj,HTMLImageElement:W.bk,HTMLInputElement:W.eW,KeyboardEvent:W.aY,Location:W.fd,HTMLAudioElement:W.bO,HTMLMediaElement:W.bO,MediaList:W.fj,MIDIOutput:W.fl,MIDIInput:W.bP,MIDIPort:W.bP,MimeType:W.ab,MimeTypeArray:W.fm,PointerEvent:W.S,MouseEvent:W.S,DragEvent:W.S,Navigator:W.fw,Attr:W.v,Node:W.v,NodeIterator:W.dw,NodeList:W.bW,RadioNodeList:W.bW,Path2D:W.fF,Perspective:W.fI,Plugin:W.ac,PluginArray:W.fK,PositionValue:W.fN,PresentationConnection:W.fO,Range:W.dB,Rotation:W.fY,RTCDataChannel:W.dD,DataChannel:W.dD,HTMLSelectElement:W.h_,SharedWorker:W.h2,SourceBuffer:W.ad,SourceBufferList:W.h3,SpeechGrammar:W.ae,SpeechGrammarList:W.h5,SpeechRecognitionResult:W.af,Storage:W.hb,CSSStyleSheet:W.a1,StyleSheet:W.a1,CalcLength:W.aq,KeywordValue:W.aq,LengthValue:W.aq,NumberValue:W.aq,SimpleLength:W.aq,TransformValue:W.aq,StyleValue:W.aq,HTMLTableElement:W.dG,HTMLTableRowElement:W.hk,HTMLTableSectionElement:W.hl,HTMLTemplateElement:W.c2,TextTrack:W.ag,TextTrackCue:W.a2,VTTCue:W.a2,TextTrackCueList:W.ho,TextTrackList:W.hp,TimeRanges:W.hr,Touch:W.ah,TouchEvent:W.b1,TouchList:W.hv,TrackDefaultList:W.hw,Matrix:W.br,Skew:W.br,TransformComponent:W.br,Translation:W.hy,TreeWalker:W.dK,CompositionEvent:W.aJ,FocusEvent:W.aJ,TextEvent:W.aJ,SVGZoomEvent:W.aJ,UIEvent:W.aJ,URL:W.hD,HTMLVideoElement:W.bs,VideoTrackList:W.hF,VTTRegionList:W.hI,WebSocket:W.hJ,WheelEvent:W.b3,Window:W.c6,DOMWindow:W.c6,Worker:W.hM,CompositorWorkerGlobalScope:W.b4,DedicatedWorkerGlobalScope:W.b4,ServiceWorkerGlobalScope:W.b4,SharedWorkerGlobalScope:W.b4,WorkerGlobalScope:W.b4,ClientRect:W.hX,ClientRectList:W.dO,DOMRectList:W.dO,CSSRuleList:W.hZ,DocumentType:W.i_,DOMRect:W.i0,GamepadList:W.io,HTMLFrameSetElement:W.ip,NamedNodeMap:W.dQ,MozNamedAttrMap:W.dQ,ServiceWorker:W.iI,SpeechRecognitionResultList:W.iL,StyleSheetList:W.iM,WorkerLocation:W.iT,WorkerNavigator:W.iU,SVGAElement:P.e0,SVGAnimateElement:P.aO,SVGAnimateMotionElement:P.aO,SVGAnimateTransformElement:P.aO,SVGAnimationElement:P.aO,SVGSetElement:P.aO,SVGFEBlendElement:P.eo,SVGFEColorMatrixElement:P.ep,SVGFEComponentTransferElement:P.eq,SVGFECompositeElement:P.er,SVGFEConvolveMatrixElement:P.es,SVGFEDiffuseLightingElement:P.et,SVGFEDisplacementMapElement:P.eu,SVGFEFloodElement:P.ev,SVGFEGaussianBlurElement:P.ew,SVGFEImageElement:P.ex,SVGFEMergeElement:P.ey,SVGFEMorphologyElement:P.ez,SVGFEOffsetElement:P.eA,SVGFEPointLightElement:P.eB,SVGFESpecularLightingElement:P.eC,SVGFESpotLightElement:P.eD,SVGFETileElement:P.eE,SVGFETurbulenceElement:P.eF,SVGFilterElement:P.eJ,SVGForeignObjectElement:P.eL,SVGCircleElement:P.am,SVGEllipseElement:P.am,SVGLineElement:P.am,SVGPathElement:P.am,SVGPolygonElement:P.am,SVGPolylineElement:P.am,SVGGeometryElement:P.am,SVGClipPathElement:P.aE,SVGDefsElement:P.aE,SVGGElement:P.aE,SVGSwitchElement:P.aE,SVGGraphicsElement:P.aE,SVGImageElement:P.eT,SVGLength:P.aw,SVGLengthList:P.f5,SVGMarkerElement:P.fg,SVGMaskElement:P.fh,SVGNumber:P.ax,SVGNumberList:P.fz,SVGPatternElement:P.fG,SVGPoint:P.fL,SVGPointList:P.fM,SVGRect:P.fR,SVGRectElement:P.fS,SVGScriptElement:P.bZ,SVGStringList:P.hh,SVGDescElement:P.I,SVGDiscardElement:P.I,SVGFEDistantLightElement:P.I,SVGFEFuncAElement:P.I,SVGFEFuncBElement:P.I,SVGFEFuncGElement:P.I,SVGFEFuncRElement:P.I,SVGFEMergeNodeElement:P.I,SVGMetadataElement:P.I,SVGStopElement:P.I,SVGStyleElement:P.I,SVGTitleElement:P.I,SVGComponentTransferFunctionElement:P.I,SVGElement:P.I,SVGSVGElement:P.hi,SVGSymbolElement:P.hj,SVGTextContentElement:P.dH,SVGTextPathElement:P.hn,SVGTSpanElement:P.c3,SVGTextElement:P.c3,SVGTextPositioningElement:P.c3,SVGTransform:P.ay,SVGTransformList:P.hx,SVGUseElement:P.hE,SVGViewElement:P.hG,SVGViewSpec:P.hH,SVGLinearGradientElement:P.c9,SVGRadialGradientElement:P.c9,SVGGradientElement:P.c9,SVGCursorElement:P.iE,SVGFEDropShadowElement:P.iF,SVGMPathElement:P.iG,AudioBuffer:P.e4,WebGLRenderingContext:P.fW,WebGL2RenderingContext:P.fX,WebGL2RenderingContextBase:P.iS,SQLResultSetRowList:P.h7})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,Credential:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMStringMap:true,EffectModel:true,Entry:true,FederatedCredential:true,FileEntry:true,FileError:true,Stream:true,DOMFileSystem:true,FontFace:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmapRenderingContext:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PasswordCredential:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,ServicePort:true,SharedArrayBuffer:true,SourceInfo:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,TrackDefault:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPreserveAspectRatio:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,AudioTrack:true,AudioTrackList:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,CSSCharsetRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DocumentFragment:true,ShadowRoot:true,DOMException:true,DOMImplementation:true,DOMPoint:true,DOMPointReadOnly:false,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AudioDestinationNode:true,AudioNode:true,AudioSourceNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OfflineAudioContext:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,ImageBitmap:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Navigator:true,Attr:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Path2D:true,Perspective:true,Plugin:true,PluginArray:true,PositionValue:true,PresentationConnection:true,Range:true,Rotation:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,SharedWorker:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,CalcLength:true,KeywordValue:true,LengthValue:true,NumberValue:true,SimpleLength:true,TransformValue:true,StyleValue:false,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,Matrix:true,Skew:true,TransformComponent:false,Translation:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,SVGZoomEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,VTTRegionList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
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
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.lP(Q.lJ(),b)},[])
else (function(b){H.lP(Q.lJ(),b)})([])})})()