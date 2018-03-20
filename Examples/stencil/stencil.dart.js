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
a[c]=function(){a[c]=function(){H.nE(b)}
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
return d?function(e){if(t===null)t=H.jw(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.jw(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.jw(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={jg:function jg(a){this.a=a},
jl:function(a,b,c,d){if(!!a.$isd)return new H.ea(a,b,[c,d])
return new H.dc(a,b,[c,d])},
eI:function(){return new P.aH("No element")},
ms:function(){return new P.aH("Too many elements")},
mr:function(){return new P.aH("Too few elements")},
ds:function(a,b,c,d){if(c-b<=32)H.mJ(a,b,c,d)
else H.mI(a,b,c,d)},
mJ:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.ag(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.ap(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.j(a,q,s.h(a,p))
q=p}s.j(a,q,r)}},
mI:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.b(t>32)
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
j=h}t.j(a2,r,m)
t.j(a2,p,k)
t.j(a2,q,i)
t.j(a2,o,t.h(a2,a3))
t.j(a2,n,t.h(a2,a4))
g=a3+1
f=a4-1
if(J.H(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=t.h(a2,e)
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
H.ds(a2,a3,g-2,a5)
H.ds(a2,f+2,a4,a5)
if(a0)return
if(g<r&&f>q){for(;J.H(a5.$2(t.h(a2,g),l),0);)++g
for(;J.H(a5.$2(t.h(a2,f),j),0);)--f
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
break}}H.ds(a2,g,f,a5)}else H.ds(a2,g,f,a5)},
d:function d(){},
bf:function bf(){},
db:function db(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
dc:function dc(a,b,c){this.a=a
this.b=b
this.$ti=c},
ea:function ea(a,b,c){this.a=a
this.b=b
this.$ti=c},
eT:function eT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bF:function bF(a,b,c){this.a=a
this.b=b
this.$ti=c},
dz:function dz(a,b,c){this.a=a
this.b=b
this.$ti=c},
hq:function hq(a,b,c){this.a=a
this.b=b
this.$ti=c},
cn:function cn(){},
dH:function(a,b){var t=a.ak(b)
if(!u.globalState.d.cy)u.globalState.f.ap()
return t},
iQ:function(){--u.globalState.f.b
H.b(u.globalState.f.b>=0)},
ld:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.w(s).$isc)throw H.e(P.jT("Arguments to main must be a List: "+H.i(s)))
u.globalState=new H.i2(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$ki()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.hG(P.jk(null,H.b6),0)
r=P.o
s.seD(new H.aj(0,null,null,null,null,null,0,[r,H.b5]))
s.seG(new H.aj(0,null,null,null,null,null,0,[r,null]))
if(s.x){q=new H.i1()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.mm,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.mY)}if(u.globalState.x)return
s=u.globalState.a++
q=P.ak(null,null,null,r)
p=new H.bh(0,null,!1)
o=new H.b5(s,new H.aj(0,null,null,null,null,null,0,[r,H.bh]),q,u.createNewIsolate(),p,new H.ar(H.iU()),new H.ar(H.iU()),!1,!1,[],P.ak(null,null,null,null),null,null,!1,!0,P.ak(null,null,null,null))
q.i(0,0)
o.bz(0,p)
u.globalState.e=o
u.globalState.z.j(0,s,o)
u.globalState.d=o
if(H.bn(a,{func:1,args:[,]}))o.ak(new H.j_(t,a))
else if(H.bn(a,{func:1,args:[,,]}))o.ak(new H.j0(t,a))
else o.ak(a)
u.globalState.f.ap()},
mY:function(a){var t=P.aW(["command","print","msg",a])
return new H.an(!0,P.c1(null,P.o)).M(t)},
mo:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.mp()
return},
mp:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.e(new P.v("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.e(new P.v('Cannot extract URI from "'+t+'"'))},
mm:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.b4(!0,[]).a0(b.data)
s=J.ag(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.nq(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.b4(!0,[]).a0(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.b4(!0,[]).a0(s.h(t,"replyTo"))
s=u.globalState.a++
k=P.o
j=P.ak(null,null,null,k)
i=new H.bh(0,null,!1)
h=new H.b5(s,new H.aj(0,null,null,null,null,null,0,[k,H.bh]),j,u.createNewIsolate(),i,new H.ar(H.iU()),new H.ar(H.iU()),!1,!1,[],P.ak(null,null,null,null),null,null,!1,!0,P.ak(null,null,null,null))
j.i(0,0)
h.bz(0,i)
u.globalState.f.a.Y(0,new H.b6(h,new H.eF(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.ap()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.lO(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.ap()
break
case"close":u.globalState.ch.ao(0,$.$get$kj().h(0,a))
a.terminate()
u.globalState.f.ap()
break
case"log":H.ml(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
k=P.aW(["command","print","msg",t])
k=new H.an(!0,P.c1(null,P.o)).M(k)
s.toString
self.postMessage(k)}else P.aB(s.h(t,"msg"))
break
case"error":throw H.e(s.h(t,"msg"))}},
ml:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aW(["command","log","msg",a])
r=new H.an(!0,P.c1(null,P.o)).M(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.S(q)
t=H.aL(q)
s=P.cm(t)
throw H.e(s)}},
mn:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.ko=$.ko+("_"+s)
$.kp=$.kp+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.J(0,["spawned",new H.bk(s,r),q,t.r])
r=new H.eG(a,b,c,d,t)
if(e){t.bS(q,q)
u.globalState.f.a.Y(0,new H.b6(t,r,"start isolate"))}else r.$0()},
mK:function(a,b){var t=new H.h6(!0,!1,null)
t.dr(a,b)
return t},
mZ:function(a){return new H.b4(!0,[]).a0(new H.an(!1,P.c1(null,P.o)).M(a))},
j_:function j_(a,b){this.a=a
this.b=b},
j0:function j0(a,b){this.a=a
this.b=b},
i2:function i2(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
hY:function hY(a,b){this.a=a
this.b=b},
hG:function hG(a,b){this.a=a
this.b=b},
hH:function hH(a){this.a=a},
b6:function b6(a,b,c){this.a=a
this.b=b
this.c=c},
i1:function i1(){},
eF:function eF(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eG:function eG(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hz:function hz(){},
bk:function bk(a,b){this.b=a
this.a=b},
i3:function i3(a,b){this.a=a
this.b=b},
c3:function c3(a,b,c){this.b=a
this.c=b
this.a=c},
bh:function bh(a,b,c){this.a=a
this.b=b
this.c=c},
h6:function h6(a,b,c){this.a=a
this.b=b
this.c=c},
h7:function h7(a,b){this.a=a
this.b=b},
h8:function h8(a,b){this.a=a
this.b=b},
ar:function ar(a){this.a=a},
an:function an(a,b){this.a=a
this.b=b},
b4:function b4(a,b){this.a=a
this.b=b},
nj:function(a){return u.types[a]},
ns:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.w(a).$isq},
i:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aC(a)
if(typeof t!=="string")throw H.e(H.W(a))
return t},
mG:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.fx(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aZ:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
dn:function(a){var t,s,r,q,p,o,n,m
t=J.w(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.K||!!J.w(a).$isb1){p=C.y(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.i.aO(q,0)===36)q=C.i.d3(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.dJ(H.iE(a),0,null),u.mangledGlobalNames)},
ft:function(a){return"Instance of '"+H.dn(a)+"'"},
T:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mE:function(a){return a.b?H.T(a).getUTCFullYear()+0:H.T(a).getFullYear()+0},
mC:function(a){return a.b?H.T(a).getUTCMonth()+1:H.T(a).getMonth()+1},
my:function(a){return a.b?H.T(a).getUTCDate()+0:H.T(a).getDate()+0},
mz:function(a){return a.b?H.T(a).getUTCHours()+0:H.T(a).getHours()+0},
mB:function(a){return a.b?H.T(a).getUTCMinutes()+0:H.T(a).getMinutes()+0},
mD:function(a){return a.b?H.T(a).getUTCSeconds()+0:H.T(a).getSeconds()+0},
mA:function(a){return a.b?H.T(a).getUTCMilliseconds()+0:H.T(a).getMilliseconds()+0},
kn:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.W(a))
return a[b]},
R:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ah(!0,b,"index",null)
t=J.dN(a)
if(b<0||C.b.cO(b,t))return P.C(b,a,"index",null,t)
return P.fu(b,"index",null)},
W:function(a){return new P.ah(!0,a,null,null)},
e:function(a){var t
if(a==null)a=new P.dm()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.lg})
t.name=""}else t.toString=H.lg
return t},
lg:function(){return J.aC(this.dartException)},
G:function(a){throw H.e(a)},
D:function(a){throw H.e(new P.a4(a))},
av:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.hd(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
he:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
kA:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
ji:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.eM(a,s,t?null:b.receiver)},
S:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.j1(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aX(r,16)&8191)===10)switch(q){case 438:return t.$1(H.ji(H.i(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.i(s)+" (Error "+q+")"
return t.$1(new H.dl(p,null))}}if(a instanceof TypeError){o=$.$get$ku()
n=$.$get$kv()
m=$.$get$kw()
l=$.$get$kx()
k=$.$get$kB()
j=$.$get$kC()
i=$.$get$kz()
$.$get$ky()
h=$.$get$kE()
g=$.$get$kD()
f=o.R(s)
if(f!=null)return t.$1(H.ji(s,f))
else{f=n.R(s)
if(f!=null){f.method="call"
return t.$1(H.ji(s,f))}else{f=m.R(s)
if(f==null){f=l.R(s)
if(f==null){f=k.R(s)
if(f==null){f=j.R(s)
if(f==null){f=i.R(s)
if(f==null){f=l.R(s)
if(f==null){f=h.R(s)
if(f==null){f=g.R(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.dl(s,f==null?null:f.method))}}return t.$1(new H.hi(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.dt()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.ah(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.dt()
return a},
aL:function(a){var t
if(a==null)return new H.dF(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dF(a,null)},
nw:function(a){if(a==null||typeof a!='object')return J.aq(a)
else return H.aZ(a)},
nh:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=a.length
for(r=0;r<s;){q=r+1
H.b(t)
p=a[r]
r=q+1
H.b(t)
b.j(0,p,a[q])}return b},
nr:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dH(b,new H.iL(a))
case 1:return H.dH(b,new H.iM(a,d))
case 2:return H.dH(b,new H.iN(a,d,e))
case 3:return H.dH(b,new H.iO(a,d,e,f))
case 4:return H.dH(b,new H.iP(a,d,e,f,g))}throw H.e(P.cm("Unsupported number of arguments for wrapped closure"))},
c7:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.nr)
a.$identity=t
return t},
m5:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.w(c).$isc){t.$reflectionInfo=c
r=H.mG(t).r}else r=c
q=d?Object.create(new H.fN().constructor.prototype):Object.create(new H.bs(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.k0(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.nj,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.jY:H.jb
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.e("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.k0(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
m2:function(a,b,c,d){var t=H.jb
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
k0:function(a,b,c){var t,s,r,q
if(c)return H.m4(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.m2(s,b==null?r!=null:b!==r,t,b)
return q},
m3:function(a,b,c,d){var t,s
t=H.jb
s=H.jY
switch(b?-1:a){case 0:throw H.e(new H.fD("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
m4:function(a,b){var t,s,r,q
H.m1()
t=$.jX
if(t==null){t=H.jW("receiver")
$.jX=t}s=b.$stubName
r=b.length
q=a[s]
t=H.m3(r,b==null?q!=null:b!==q,s,b)
return t},
jw:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.w(c).$isc){c.fixed$length=Array
t=c}else t=c
return H.m5(a,b,t,!!d,e,f)},
jb:function(a){return a.a},
jY:function(a){return a.c},
m1:function(){var t=$.jZ
if(t==null){t=H.jW("self")
$.jZ=t}return t},
jW:function(a){var t,s,r,q,p
t=new H.bs("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
nS:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.aw(a,"String"))},
a1:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aw(a,"double"))},
nR:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aw(a,"num"))},
na:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.aw(a,"bool"))},
nq:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.aw(a,"int"))},
ny:function(a,b){throw H.e(H.aw(a,b.substring(3)))},
nx:function(a,b){var t=J.ag(b)
throw H.e(H.k_(H.dn(a),t.bk(b,3,t.gl(b))))},
jz:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.w(a)[b])return a
H.ny(a,b)},
aA:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.w(a)[b]
else t=!0
if(t)return a
H.nx(a,b)},
nQ:function(a){if(a==null)return a
if(!!J.w(a).$isc)return a
throw H.e(H.aw(a,"List"))},
l0:function(a){var t=J.w(a)
return"$S" in t?t.$S():null},
bn:function(a,b){var t
if(a==null)return!1
t=H.l0(a)
return t==null?!1:H.l7(t,b)},
nO:function(a,b){var t,s
if(a==null)return a
if($.jt)return a
$.jt=!0
try{if(H.bn(a,b))return a
t=H.aN(b,null)
s=H.aw(a,t)
throw H.e(s)}finally{$.jt=!1}},
aw:function(a,b){return new H.hf("type '"+H.dn(a)+"' is not a subtype of type '"+b+"'")},
k_:function(a,b){return new H.dX("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
a0:function(a){if(!0===a)return!1
if(!!J.w(a).$isje)a=a.$0()
if(typeof a==="boolean")return!a
throw H.e(H.aw(a,"bool"))},
af:function(a){throw H.e(new H.ht(a))},
b:function(a){if(H.a0(a))throw H.e(new P.cd(null))},
nE:function(a){throw H.e(new P.e0(a))},
iU:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
l5:function(a){return u.getIsolateTag(a)},
O:function(a){return new H.aI(a,null)},
F:function(a,b){H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
iE:function(a){if(a==null)return
return a.$ti},
l6:function(a,b){return H.jD(a["$as"+H.i(b)],H.iE(a))},
ao:function(a,b,c){var t,s
t=H.l6(a,b)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
aM:function(a,b){var t,s
t=H.iE(a)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
aN:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.b(!0)
H.b(!0)
return a[0].name+H.dJ(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.i(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aN(t,b)
return H.n_(a,b)}return"unknown-reified-type"},
n_:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aN(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aN(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aN(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.ng(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aN(l[j],b)+(" "+H.i(j))}q+="}"}return"("+q+") => "+t},
dJ:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=new P.bR("")
for(r=b,q=!0,p=!0;H.b(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.b(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aN(o,c)}return p?"":"<"+s.k(0)+">"},
iF:function(a){var t,s
if(a instanceof H.b9){t=H.l0(a)
if(t!=null)return H.aN(t,null)}s=J.w(a).constructor.name
if(a==null)return s
return s+H.dJ(a.$ti,0,null)},
jD:function(a,b){if(a==null)return b
H.b(typeof a=="function")
H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.jA(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.jA(a,null,b)
return b},
ix:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.iE(a)
s=J.w(a)
if(s[b]==null)return!1
return H.kV(H.jD(s[d],t),c)},
dK:function(a,b,c,d){if(a==null)return a
if(H.ix(a,b,c,d))return a
throw H.e(H.k_(H.dn(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dJ(c,0,null),u.mangledGlobalNames)))},
nL:function(a,b,c,d){if(a==null)return a
if(H.ix(a,b,c,d))return a
throw H.e(H.aw(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dJ(c,0,null),u.mangledGlobalNames)))},
kV:function(a,b){var t,s,r,q,p
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
if(!H.a2(r,b[p]))return!1}return!0},
nM:function(a,b,c){return H.jA(a,b,H.l6(b,c))},
a2:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.name==="aY")return!0
if('func' in b)return H.l7(a,b)
if('func' in a)return b.name==="je"||b.name==="r"
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
return H.kV(H.jD(o,t),r)},
kU:function(a,b,c){var t,s,r,q,p,o,n
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
if(!(H.a2(o,n)||H.a2(n,o)))return!1}return!0},
n6:function(a,b){var t,s,r,q,p,o
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
if(!(H.a2(p,o)||H.a2(o,p)))return!1}return!0},
l7:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.b('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.a2(t,s)||H.a2(s,t)))return!1}r=a.args
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
if(n===m){if(!H.kU(r,q,!1))return!1
if(!H.kU(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.b(j)
g=r[h]
H.b(i)
f=q[h]
if(!(H.a2(g,f)||H.a2(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=q[e]
if(!(H.a2(g,f)||H.a2(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=o[e]
if(!(H.a2(g,f)||H.a2(f,g)))return!1}}return H.n6(a.named,b.named)},
jA:function(a,b,c){H.b(typeof a=="function")
H.b(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
nT:function(a){var t=$.jx
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
nP:function(a){return H.aZ(a)},
nN:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nt:function(a){var t,s,r,q,p,o
H.b(!(a instanceof P.r))
t=$.jx.$1(a)
s=$.iC[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iK[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.kT.$2(a,t)
if(t!=null){s=$.iC[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iK[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.jB(r)
$.iC[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.iK[t]=r
return r}if(p==="-"){o=H.jB(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.l9(a,r)
if(p==="*")throw H.e(new P.dy(t))
if(u.leafTags[t]===true){o=H.jB(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.l9(a,r)},
l9:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.iS(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
jB:function(a){return J.iS(a,!1,null,!!a.$isq)},
nv:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.iS(t,!1,null,!!t.$isq)
else return J.iS(t,c,null,null)},
no:function(){if(!0===$.jy)return
$.jy=!0
H.np()},
np:function(){var t,s,r,q,p,o,n,m
$.iC=Object.create(null)
$.iK=Object.create(null)
H.nn()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.la.$1(p)
if(o!=null){n=H.nv(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
nn:function(){var t,s,r,q,p,o,n
t=C.O()
t=H.bm(C.L,H.bm(C.Q,H.bm(C.x,H.bm(C.x,H.bm(C.P,H.bm(C.M,H.bm(C.N(C.y),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.jx=new H.iH(p)
$.kT=new H.iI(o)
$.la=new H.iJ(n)},
bm:function(a,b){return a(b)||b},
nD:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
fx:function fx(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
hd:function hd(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dl:function dl(a,b){this.a=a
this.b=b},
eM:function eM(a,b,c){this.a=a
this.b=b
this.c=c},
hi:function hi(a){this.a=a},
j1:function j1(a){this.a=a},
dF:function dF(a,b){this.a=a
this.b=b},
iL:function iL(a){this.a=a},
iM:function iM(a,b){this.a=a
this.b=b},
iN:function iN(a,b,c){this.a=a
this.b=b
this.c=c},
iO:function iO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iP:function iP(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
b9:function b9(){},
h0:function h0(){},
fN:function fN(){},
bs:function bs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hf:function hf(a){this.a=a},
dX:function dX(a){this.a=a},
fD:function fD(a){this.a=a},
ht:function ht(a){this.a=a},
aI:function aI(a,b){this.a=a
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
eL:function eL(a){this.a=a},
eO:function eO(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
eP:function eP(a,b){this.a=a
this.$ti=b},
eQ:function eQ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
iH:function iH(a){this.a=a},
iI:function iI(a){this.a=a},
iJ:function iJ(a){this.a=a},
f:function(a){return a},
it:function(a){var t,s,r
if(!!J.w(a).$isn)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
bH:function bH(){},
bg:function bg(){},
f2:function f2(){},
de:function de(){},
df:function df(){},
dg:function dg(){},
dd:function dd(){},
f3:function f3(){},
f4:function f4(){},
f5:function f5(){},
f6:function f6(){},
f7:function f7(){},
f8:function f8(){},
dh:function dh(){},
f9:function f9(){},
bI:function bI(){},
bJ:function bJ(){},
bK:function bK(){},
bL:function bL(){},
ng:function(a){var t=H.F(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
iT:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
w:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d9.prototype
return J.d8.prototype}if(typeof a=="string")return J.aT.prototype
if(a==null)return J.eK.prototype
if(typeof a=="boolean")return J.eJ.prototype
if(a.constructor==Array)return J.aS.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.r)return a
return J.iD(a)},
iS:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iD:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.jy==null){H.no()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.e(new P.dy("Return interceptor for "+H.i(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$jh()]
if(p!=null)return p
p=H.nt(a)
if(p!=null)return p
if(typeof a=="function")return C.R
s=Object.getPrototypeOf(a)
if(s==null)return C.A
if(s===Object.prototype)return C.A
if(typeof q=="function"){Object.defineProperty(q,$.$get$jh(),{value:C.t,enumerable:false,writable:true,configurable:true})
return C.t}return C.t},
ag:function(a){if(typeof a=="string")return J.aT.prototype
if(a==null)return a
if(a.constructor==Array)return J.aS.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.r)return a
return J.iD(a)},
c9:function(a){if(a==null)return a
if(a.constructor==Array)return J.aS.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.r)return a
return J.iD(a)},
l3:function(a){if(typeof a=="number")return J.be.prototype
if(a==null)return a
if(!(a instanceof P.r))return J.b1.prototype
return a},
ni:function(a){if(typeof a=="number")return J.be.prototype
if(typeof a=="string")return J.aT.prototype
if(a==null)return a
if(!(a instanceof P.r))return J.b1.prototype
return a},
l4:function(a){if(typeof a=="string")return J.aT.prototype
if(a==null)return a
if(!(a instanceof P.r))return J.b1.prototype
return a},
k:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.r)return a
return J.iD(a)},
H:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.w(a).A(a,b)},
ap:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.l3(a).ar(a,b)},
lh:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.l3(a).as(a,b)},
bo:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ns(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ag(a).h(a,b)},
li:function(a,b,c,d){return J.k(a).dD(a,b,c,d)},
jE:function(a,b){return J.l4(a).aO(a,b)},
bp:function(a,b){return J.k(a).dS(a,b)},
lj:function(a,b,c){return J.k(a).dT(a,b,c)},
jF:function(a,b){return J.k(a).bR(a,b)},
j2:function(a,b){return J.k(a).T(a,b)},
jG:function(a,b,c){return J.k(a).bU(a,b,c)},
lk:function(a,b){return J.k(a).e5(a,b)},
dL:function(a,b,c){return J.k(a).bV(a,b,c)},
j3:function(a,b,c){return J.k(a).bW(a,b,c)},
bq:function(a,b,c){return J.k(a).bX(a,b,c)},
dM:function(a,b){return J.k(a).e8(a,b)},
ll:function(a,b){return J.k(a).bY(a,b)},
lm:function(a,b,c){return J.k(a).bZ(a,b,c)},
jH:function(a,b,c,d){return J.k(a).c_(a,b,c,d)},
ln:function(a,b){return J.k(a).c0(a,b)},
lo:function(a,b){return J.c9(a).c1(a,b)},
lp:function(a,b,c,d,e){return J.k(a).c2(a,b,c,d,e)},
lq:function(a,b){return J.ni(a).U(a,b)},
j4:function(a,b,c){return J.ag(a).ec(a,b,c)},
j5:function(a){return J.k(a).c4(a)},
lr:function(a){return J.k(a).c5(a)},
ls:function(a){return J.k(a).c6(a)},
jI:function(a){return J.k(a).c8(a)},
lt:function(a){return J.k(a).ei(a)},
lu:function(a,b){return J.k(a).ca(a,b)},
j6:function(a,b){return J.k(a).cb(a,b)},
lv:function(a,b,c,d){return J.k(a).cc(a,b,c,d)},
lw:function(a,b,c,d,e){return J.k(a).ep(a,b,c,d,e)},
lx:function(a,b,c,d,e){return J.k(a).cd(a,b,c,d,e)},
ly:function(a,b,c,d,e,f){return J.k(a).eq(a,b,c,d,e,f)},
lz:function(a,b){return J.c9(a).u(a,b)},
cc:function(a,b){return J.k(a).ce(a,b)},
lA:function(a,b){return J.k(a).cf(a,b)},
lB:function(a){return J.k(a).er(a)},
lC:function(a,b){return J.c9(a).aD(a,b)},
jJ:function(a,b,c,d,e,f){return J.k(a).ci(a,b,c,d,e,f)},
lD:function(a){return J.k(a).ge4(a)},
aq:function(a){return J.w(a).gw(a)},
br:function(a){return J.c9(a).gB(a)},
dN:function(a){return J.ag(a).gl(a)},
lE:function(a){return J.k(a).gb5(a)},
lF:function(a){return J.w(a).gD(a)},
lG:function(a){return J.k(a).geP(a)},
lH:function(a){return J.k(a).gaH(a)},
j7:function(a){return J.k(a).gm(a)},
j8:function(a){return J.k(a).gn(a)},
jK:function(a){return J.k(a).gN(a)},
j9:function(a,b){return J.k(a).aa(a,b)},
lI:function(a){return J.k(a).aJ(a)},
jL:function(a){return J.k(a).b9(a)},
lJ:function(a,b){return J.k(a).ba(a,b)},
lK:function(a,b,c){return J.k(a).bb(a,b,c)},
jM:function(a,b,c){return J.k(a).be(a,b,c)},
lL:function(a,b){return J.k(a).cj(a,b)},
lM:function(a,b){return J.c9(a).cl(a,b)},
lN:function(a){return J.c9(a).eJ(a)},
lO:function(a,b){return J.k(a).J(a,b)},
lP:function(a,b,c,d){return J.k(a).bj(a,b,c,d)},
lQ:function(a,b,c,d,e,f,g,h,i,j){return J.k(a).cr(a,b,c,d,e,f,g,h,i,j)},
lR:function(a,b,c,d){return J.k(a).cs(a,b,c,d)},
dO:function(a,b,c,d){return J.k(a).ct(a,b,c,d)},
lS:function(a,b,c,d,e,f){return J.k(a).eQ(a,b,c,d,e,f)},
lT:function(a){return J.l4(a).eT(a)},
aC:function(a){return J.w(a).k(a)},
lU:function(a,b,c,d){return J.k(a).eV(a,b,c,d)},
lV:function(a,b,c){return J.k(a).cw(a,b,c)},
lW:function(a,b,c){return J.k(a).cz(a,b,c)},
ja:function(a,b,c){return J.k(a).cA(a,b,c)},
lX:function(a,b,c){return J.k(a).cB(a,b,c)},
jN:function(a,b,c){return J.k(a).cC(a,b,c)},
jO:function(a,b,c){return J.k(a).cD(a,b,c)},
jP:function(a,b,c){return J.k(a).cE(a,b,c)},
jQ:function(a,b,c,d){return J.k(a).cF(a,b,c,d)},
jR:function(a,b,c,d){return J.k(a).cG(a,b,c,d)},
lY:function(a,b){return J.k(a).cI(a,b)},
lZ:function(a,b,c){return J.k(a).eW(a,b,c)},
jS:function(a,b,c,d,e,f,g){return J.k(a).cK(a,b,c,d,e,f,g)},
m_:function(a,b,c,d,e){return J.k(a).cL(a,b,c,d,e)},
a:function a(){},
eJ:function eJ(){},
eK:function eK(){},
bE:function bE(){},
fn:function fn(){},
b1:function b1(){},
aU:function aU(){},
aS:function aS(a){this.$ti=a},
jf:function jf(a){this.$ti=a},
dS:function dS(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
be:function be(){},
d9:function d9(){},
d8:function d8(){},
aT:function aT(){}},P={
mO:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.n7()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.c7(new P.hv(t),1)).observe(s,{childList:true})
return new P.hu(t,s,r)}else if(self.setImmediate!=null)return P.n8()
return P.n9()},
mP:function(a){++u.globalState.f.b
self.scheduleImmediate(H.c7(new P.hw(a),0))},
mQ:function(a){++u.globalState.f.b
self.setImmediate(H.c7(new P.hx(a),0))},
mR:function(a){P.jo(C.v,a)},
n2:function(a,b){if(H.bn(a,{func:1,args:[P.aY,P.aY]})){b.toString
return a}else{b.toString
return a}},
mT:function(a,b){var t,s,r
H.b(b.a<4)
H.b(!(a instanceof P.ay))
H.b(b.a===0)
b.a=1
try{a.cv(new P.hN(b),new P.hO(b))}catch(r){t=H.S(r)
s=H.aL(r)
P.nz(new P.hP(b,t,s))}},
kK:function(a,b){var t,s,r,q
H.b(b.a<=1)
for(;t=a.a,s=t===2,s;){H.b(s)
a=a.c}s=b.a
if(t>=4){H.b(s<4)
r=b.c
b.c=null
q=b.ai(r)
H.b(b.a<4)
H.b(a.a>=4)
b.a=a.a
b.c=a.c
P.bY(b,q)}else{q=b.c
H.b(s<=1)
b.a=2
b.c=a
a.bK(q)}},
bY:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.iu(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bY(t.a,b)}s=t.a
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
P.iu(null,null,p,o,s)
return}s=$.E
if(s==null?l!=null:s!==l){H.b(l!=null)
s=$.E
H.b(l==null?s!=null:l!==s)
j=$.E
$.E=l
i=j}else i=null
s=b.c
if(s===8)new P.hT(t,r,q,b).$0()
else if(p){if((s&1)!==0)new P.hS(r,b,m).$0()}else if((s&2)!==0)new P.hR(t,r,b).$0()
if(i!=null){H.b(!0)
$.E=i}s=r.b
if(!!J.w(s).$iseA){if(s.a>=4){H.b(o.a<4)
h=o.c
o.c=null
b=o.ai(h)
H.b(o.a<4)
H.b(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.kK(s,o)
return}}g=b.b
H.b(g.a<4)
h=g.c
g.c=null
b=g.ai(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.b(!o)
g.a=4
g.c=p}else{H.b(!o)
g.a=8
g.c=p}t.a=g
s=g}},
n1:function(){var t,s
for(;t=$.bl,t!=null;){$.c5=null
s=t.b
$.bl=s
if(s==null)$.c4=null
t.a.$0()}},
n5:function(){$.ju=!0
try{P.n1()}finally{$.c5=null
$.ju=!1
if($.bl!=null)$.$get$jq().$1(P.kW())}},
kR:function(a){var t=new P.dA(a,null)
if($.bl==null){$.c4=t
$.bl=t
if(!$.ju)$.$get$jq().$1(P.kW())}else{$.c4.b=t
$.c4=t}},
n4:function(a){var t,s,r
t=$.bl
if(t==null){P.kR(a)
$.c5=$.c4
return}s=new P.dA(a,null)
r=$.c5
if(r==null){s.b=t
$.c5=s
$.bl=s}else{s.b=r.b
r.b=s
$.c5=s
if(s.b==null)$.c4=s}},
nz:function(a){var t=$.E
if(C.f===t){P.iw(null,null,C.f,a)
return}t.toString
P.iw(null,null,t,t.b0(a))},
mL:function(a,b){var t=$.E
if(t===C.f){t.toString
return P.jo(a,b)}return P.jo(a,t.b0(b))},
jo:function(a,b){var t=C.b.K(a.a,1000)
return H.mK(t<0?0:t,b)},
jp:function(a){var t,s
H.b(a!=null)
t=$.E
H.b(a==null?t!=null:a!==t)
s=$.E
$.E=a
return s},
iu:function(a,b,c,d,e){var t={}
t.a=d
P.n4(new P.iv(t,e))},
kP:function(a,b,c,d){var t,s
if($.E===c)return d.$0()
t=P.jp(c)
try{s=d.$0()
return s}finally{s=t
H.b(s!=null)
$.E=s}},
kQ:function(a,b,c,d,e){var t,s
if($.E===c)return d.$1(e)
t=P.jp(c)
try{s=d.$1(e)
return s}finally{s=t
H.b(s!=null)
$.E=s}},
n3:function(a,b,c,d,e,f){var t,s
if($.E===c)return d.$2(e,f)
t=P.jp(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.b(s!=null)
$.E=s}},
iw:function(a,b,c,d){var t=C.f!==c
if(t)d=!(!t||!1)?c.b0(d):c.e6(d)
P.kR(d)},
hv:function hv(a){this.a=a},
hu:function hu(a,b,c){this.a=a
this.b=b
this.c=c},
hw:function hw(a){this.a=a},
hx:function hx(a){this.a=a},
hB:function hB(){},
ik:function ik(a,b){this.a=a
this.$ti=b},
dC:function dC(a,b,c,d,e,f){var _=this
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
hM:function hM(a,b){this.a=a
this.b=b},
hQ:function hQ(a,b){this.a=a
this.b=b},
hN:function hN(a){this.a=a},
hO:function hO(a){this.a=a},
hP:function hP(a,b,c){this.a=a
this.b=b
this.c=c},
hT:function hT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hU:function hU(a){this.a=a},
hS:function hS(a,b,c){this.a=a
this.b=b
this.c=c},
hR:function hR(a,b,c){this.a=a
this.b=b
this.c=c},
dA:function dA(a,b){this.a=a
this.b=b},
fS:function fS(){},
fU:function fU(a){this.a=a},
fV:function fV(a,b){this.a=a
this.b=b},
fT:function fT(){},
b8:function b8(a,b){this.a=a
this.b=b},
is:function is(){},
iv:function iv(a,b){this.a=a
this.b=b},
i5:function i5(){},
i7:function i7(a,b){this.a=a
this.b=b},
i6:function i6(a,b){this.a=a
this.b=b},
i8:function i8(a,b){this.a=a
this.b=b},
kl:function(a,b){return new H.aj(0,null,null,null,null,null,0,[a,b])},
I:function(){return new H.aj(0,null,null,null,null,null,0,[null,null])},
aW:function(a){return H.nh(a,new H.aj(0,null,null,null,null,null,0,[null,null]))},
c1:function(a,b){return new P.dD(0,null,null,null,null,null,0,[a,b])},
mX:function(){var t=Object.create(null)
H.b(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
mq:function(a,b,c){var t,s
if(P.jv(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$c6()
C.a.i(s,a)
try{P.n0(a,t)}finally{H.b(C.a.gaG(s)===a)
s.pop()}s=P.kt(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eH:function(a,b,c){var t,s,r
if(P.jv(a))return b+"..."+c
t=new P.bR(b)
s=$.$get$c6()
C.a.i(s,a)
try{r=t
r.a=P.kt(r.ga6(),a,", ")}finally{H.b(C.a.gaG(s)===a)
s.pop()}s=t
s.a=s.ga6()+c
s=t.ga6()
return s.charCodeAt(0)==0?s:s},
jv:function(a){var t,s
for(t=0;s=$.$get$c6(),t<s.length;++t)if(a===s[t])return!0
return!1},
n0:function(a,b){var t,s,r,q,p,o,n,m,l,k
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
ak:function(a,b,c,d){return new P.hZ(0,null,null,null,null,null,0,[d])},
jj:function(a,b){var t,s
t=P.ak(null,null,null,b)
for(s=J.br(a);s.q();)t.i(0,s.gt())
return t},
mu:function(a){var t,s,r
t={}
if(P.jv(a))return"{...}"
s=new P.bR("")
try{C.a.i($.$get$c6(),a)
r=s
r.a=r.ga6()+"{"
t.a=!0
a.aD(0,new P.eU(t,s))
t=s
t.a=t.ga6()+"}"}finally{t=$.$get$c6()
H.b(C.a.gaG(t)===a)
t.pop()}t=s.ga6()
return t.charCodeAt(0)==0?t:t},
jk:function(a,b){var t=new P.eR(null,0,0,0,[b])
t.di(a,b)
return t},
dD:function dD(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hZ:function hZ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
i_:function i_(a,b,c){this.a=a
this.b=b
this.c=c},
c0:function c0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hX:function hX(){},
da:function da(){},
x:function x(){},
eU:function eU(a,b){this.a=a
this.b=b},
eR:function eR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
i0:function i0(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fG:function fG(){},
fF:function fF(){},
bN:function bN(){},
kt:function(a,b,c){var t=J.br(b)
if(!t.q())return a
if(c.length===0){do a+=H.i(t.gt())
while(t.q())}else{a+=H.i(t.gt())
for(;t.q();)a=a+c+H.i(t.gt())}return a},
m6:function(a,b){return J.lq(a,b)},
m9:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.i(t)
if(t>=10)return s+"00"+H.i(t)
return s+"000"+H.i(t)},
ma:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cg:function(a){if(a>=10)return""+a
return"0"+a},
mc:function(a,b,c,d,e,f){return new P.aD(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
jd:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aC(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mf(a)},
mf:function(a){var t=J.w(a)
if(!!t.$isb9)return t.k(a)
return H.ft(a)},
jT:function(a){return new P.ah(!1,null,null,a)},
jU:function(a,b,c){return new P.ah(!0,a,b,c)},
m0:function(a){return new P.ah(!1,null,a,"Must not be null")},
fu:function(a,b,c){return new P.dq(null,null,!0,a,b,"Value not in range")},
b_:function(a,b,c,d,e){return new P.dq(b,c,!0,a,d,"Invalid value")},
kq:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.b_(a,0,c,"start",f))
if(a>b||b>c)throw H.e(P.b_(b,a,c,"end",f))
return b},
C:function(a,b,c,d,e){var t=e!=null?e:J.dN(b)
return new P.eE(b,t,!0,a,c,"Index out of range")},
cm:function(a){return new P.hL(a)},
km:function(a,b,c){var t,s
t=H.F([],[c])
for(s=J.br(a);s.q();)C.a.i(t,s.gt())
if(b)return t
t.fixed$length=Array
return t},
aB:function(a){H.iT(H.i(a))},
az:function az(){},
M:function M(){},
bb:function bb(a,b){this.a=a
this.b=b},
P:function P(){},
aD:function aD(a){this.a=a},
e8:function e8(){},
e9:function e9(){},
bc:function bc(){},
cd:function cd(a){this.a=a},
dm:function dm(){},
ah:function ah(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dq:function dq(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eE:function eE(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
v:function v(a){this.a=a},
dy:function dy(a){this.a=a},
aH:function aH(a){this.a=a},
a4:function a4(a){this.a=a},
dt:function dt(){},
e0:function e0(a){this.a=a},
hL:function hL(a){this.a=a},
eb:function eb(a,b,c){this.a=a
this.b=b
this.$ti=c},
o:function o(){},
Y:function Y(){},
d7:function d7(){},
c:function c(){},
aG:function aG(){},
aY:function aY(){},
X:function X(){},
r:function r(){},
bQ:function bQ(){},
u:function u(){},
bR:function bR(a){this.a=a},
iA:function(a){var t,s,r,q,p
if(a==null)return
t=P.I()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.D)(s),++q){p=s[q]
t.j(0,p,a[p])}return t},
nd:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.lC(a,new P.iz(t))
return t},
k9:function(){var t=$.k8
if(t==null){t=J.j4(window.navigator.userAgent,"Opera",0)
$.k8=t}return t},
mb:function(){var t,s
t=$.k5
if(t!=null)return t
s=$.k6
if(s==null){s=J.j4(window.navigator.userAgent,"Firefox",0)
$.k6=s}if(s)t="-moz-"
else{s=$.k7
if(s==null){s=!P.k9()&&J.j4(window.navigator.userAgent,"Trident/",0)
$.k7=s}if(s)t="-ms-"
else t=P.k9()?"-o-":"-webkit-"}$.k5=t
return t},
iz:function iz(a){this.a=a},
nC:function(a){return Math.sqrt(a)},
i4:function i4(){},
N:function N(){},
dP:function dP(){},
aO:function aO(){},
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
ew:function ew(){},
ey:function ey(){},
ai:function ai(){},
aF:function aF(){},
eD:function eD(){},
as:function as(){},
eN:function eN(){},
eV:function eV(){},
eW:function eW(){},
at:function at(){},
fd:function fd(){},
fk:function fk(){},
fp:function fp(){},
fq:function fq(){},
fv:function fv(){},
fw:function fw(){},
bP:function bP(){},
fW:function fW(){},
K:function K(){},
fX:function fX(){},
fY:function fY(){},
dv:function dv(){},
h1:function h1(){},
bT:function bT(){},
au:function au(){},
hb:function hb(){},
hk:function hk(){},
hm:function hm(){},
hn:function hn(){},
bZ:function bZ(){},
i9:function i9(){},
ia:function ia(){},
ib:function ib(){},
cJ:function cJ(){},
cv:function cv(){},
cA:function cA(){},
cF:function cF(){},
cT:function cT(){},
cU:function cU(){},
cW:function cW(){},
d1:function d1(){},
dT:function dT(){},
fA:function fA(){},
fB:function fB(){},
ip:function ip(){},
fM:function fM(){},
cK:function cK(){},
cX:function cX(){}},W={
nf:function(){return document},
md:function(a,b,c){var t,s
t=document.body
s=(t&&C.o).O(t,a,b,c)
s.toString
t=new H.dz(new W.U(s),new W.iy(),[W.t])
return t.ga5(t)},
me:function(a){return"wheel"},
bu:function(a){var t,s,r
t="element tag unavailable"
try{s=J.lG(a)
if(typeof s==="string")t=a.tagName}catch(r){H.S(r)}return t},
mS:function(a,b){return document.createElement(a)},
b7:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kN:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ax:function(a,b,c,d,e){var t=c==null?null:W.kS(new W.hK(c))
t=new W.hJ(0,a,b,t,!1,[e])
t.dw(a,b,c,!1,e)
return t},
kL:function(a){var t,s
t=document.createElement("a")
s=new W.ic(t,window.location)
s=new W.c_(s)
s.dz(a)
return s},
mV:function(a,b,c,d){return!0},
mW:function(a,b,c,d){var t,s,r,q,p
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
kO:function(){var t=P.u
t=new W.il(P.jj(C.q,t),P.ak(null,null,null,t),P.ak(null,null,null,t),P.ak(null,null,null,t),null)
t.dB(null,new H.bF(C.q,new W.im(),[H.aM(C.q,0),null]),["TEMPLATE"],null)
return t},
kS:function(a){var t=$.E
if(t===C.f)return a
return t.e7(a)},
m:function m(){},
dQ:function dQ(){},
dR:function dR(){},
a3:function a3(){},
dU:function dU(){},
ce:function ce(){},
aP:function aP(){},
cf:function cf(){},
dW:function dW(){},
aQ:function aQ(){},
dZ:function dZ(){},
A:function A(){},
ba:function ba(){},
e_:function e_(){},
e1:function e1(){},
e2:function e2(){},
ch:function ch(){},
bt:function bt(){},
ci:function ci(){},
e3:function e3(){},
cj:function cj(){},
e4:function e4(){},
ck:function ck(){},
cl:function cl(){},
e5:function e5(){},
e6:function e6(){},
a5:function a5(){},
iy:function iy(){},
l:function l(){},
j:function j(){},
a6:function a6(){},
eu:function eu(){},
ev:function ev(){},
ez:function ez(){},
a7:function a7(){},
cr:function cr(){},
eB:function eB(){},
bB:function bB(){},
cs:function cs(){},
eC:function eC(){},
bC:function bC(){},
bD:function bD(){},
aV:function aV(){},
eS:function eS(){},
eY:function eY(){},
f_:function f_(){},
bG:function bG(){},
a8:function a8(){},
f0:function f0(){},
Q:function Q(){},
fa:function fa(){},
U:function U(a){this.a=a},
t:function t(){},
di:function di(){},
bM:function bM(){},
fj:function fj(){},
fm:function fm(){},
a9:function a9(){},
fo:function fo(){},
fr:function fr(){},
fs:function fs(){},
dp:function dp(){},
fC:function fC(){},
dr:function dr(){},
fE:function fE(){},
fI:function fI(){},
aa:function aa(){},
fJ:function fJ(){},
ab:function ab(){},
fL:function fL(){},
ac:function ac(){},
fR:function fR(){},
Z:function Z(){},
am:function am(){},
du:function du(){},
fZ:function fZ(){},
h_:function h_(){},
bS:function bS(){},
ad:function ad(){},
a_:function a_(){},
h2:function h2(){},
h3:function h3(){},
h5:function h5(){},
ae:function ae(){},
b0:function b0(){},
h9:function h9(){},
ha:function ha(){},
bj:function bj(){},
hc:function hc(){},
dx:function dx(){},
aJ:function aJ(){},
hj:function hj(){},
hl:function hl(){},
ho:function ho(){},
hp:function hp(){},
b2:function b2(){},
bX:function bX(){},
hr:function hr(a){this.a=a},
hs:function hs(){},
b3:function b3(){},
hA:function hA(){},
dB:function dB(){},
hC:function hC(){},
hD:function hD(){},
hE:function hE(){},
hV:function hV(){},
hW:function hW(){},
dE:function dE(){},
id:function id(){},
ih:function ih(){},
ii:function ii(){},
iq:function iq(){},
ir:function ir(){},
hy:function hy(){},
hF:function hF(a){this.a=a},
hI:function hI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jr:function jr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hJ:function hJ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
hK:function hK(a){this.a=a},
c_:function c_(a){this.a=a},
B:function B(){},
dk:function dk(a){this.a=a},
fc:function fc(a){this.a=a},
fb:function fb(a,b,c){this.a=a
this.b=b
this.c=c},
c2:function c2(){},
ie:function ie(){},
ig:function ig(){},
il:function il(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
im:function im(){},
ij:function ij(){},
co:function co(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
dj:function dj(){},
ic:function ic(a,b){this.a=a
this.b=b},
dG:function dG(a){this.a=a},
io:function io(a){this.a=a},
bv:function bv(){},
bw:function bw(){},
bx:function bx(){},
by:function by(){},
bz:function bz(){},
bA:function bA(){},
ct:function ct(){},
cN:function cN(){},
cz:function cz(){},
cw:function cw(){},
cG:function cG(){},
cH:function cH(){},
cI:function cI(){},
cL:function cL(){},
cM:function cM(){},
cu:function cu(){},
cx:function cx(){},
cy:function cy(){},
cB:function cB(){},
cC:function cC(){},
cD:function cD(){},
cE:function cE(){},
cO:function cO(){},
cP:function cP(){},
cQ:function cQ(){},
d_:function d_(){},
d0:function d0(){},
cY:function cY(){},
cZ:function cZ(){},
d3:function d3(){},
d4:function d4(){},
d5:function d5(){},
d6:function d6(){},
cR:function cR(){},
cS:function cS(){},
cV:function cV(){},
d2:function d2(){}},B={
nA:function(a){var t,s
t=document
s=W.aV
W.ax(t,"keydown",new B.iV(),!1,s)
W.ax(t,"keyup",new B.iW(),!1,s)
if(!$.nB)W.ax(t,"mousemove",new B.iX(),!1,W.Q)
s=W.Q
W.ax(t,"mousedown",new B.iY(),!1,s)
W.ax(t,"mouseup",new B.iZ(),!1,s)},
mw:function(a,b,c,d){var t,s,r,q
t=new Float32Array(H.f(3))
s=$.$get$iB()
r=$.$get$c8()
q=new T.J(new Float32Array(H.f(16)))
q.F()
q=new B.fe(a,b,c,0,new T.h(t),-0.02,s,r,q,new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),"camera:orbit",!1,!0)
q.dk(a,b,c,d)
return q},
iV:function iV(){},
iW:function iW(){},
iX:function iX(){},
iY:function iY(){},
iZ:function iZ(){},
fe:function fe(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
ff:function ff(a){this.a=a},
fg:function fg(a){this.a=a},
fh:function fh(){},
fi:function fi(a){this.a=a},
m7:function(d1,d2,d3,d4,d5,d6,d7,d8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0
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
c8=new G.aR(!1,[],[],[],P.I())
c8.S("aTexUV")
c8.S("aNormal")
c8.d9(6)
c8.bn([r,q,p,o,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,s,a5])
c8.au("aTexUV",[new T.p(n),new T.p(t),new T.p(a6),new T.p(a7),new T.p(a8),new T.p(a9),new T.p(b0),new T.p(b1),new T.p(b2),new T.p(b3),new T.p(b4),new T.p(b5),new T.p(b6),new T.p(b7),new T.p(b8),new T.p(b9),new T.p(c0),new T.p(c1),new T.p(c2),new T.p(c3),new T.p(c4),new T.p(c5),new T.p(c6),new T.p(c7)])
for(c9=0;t=$.$get$kJ(),c9<6;++c9){d0=t[c9]
c8.av("aNormal",[d0,d0,d0,d0])}return c8},
m8:function(a1,a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
C.a.i(r,new T.p(p))
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
C.a.i(r,new T.p(o))
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
C.a.i(r,new T.p(k))
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
C.a.i(r,new T.p(o))
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
G.mv(i,h,g,new T.h(o),f)
C.a.i(q,f)
C.a.i(q,f)}H.b(s.length===2+4*a4)
p=[]
o=[]
e=new G.aR(!1,p,o,[],P.I())
e.S("aTexUV")
e.bn(s)
e.au("aTexUV",r)
e.S("aNormal")
e.av("aNormal",q)
for(d=a4*2,n=0;n<a4;n=b){c=n*2+2
h=c+1
b=n+1
a=(b===a4?0:b)*2+2
a0=a+1
H.b(!0)
C.a.i(p,new G.y(0,c,a))
H.b(!0)
C.a.i(p,new G.y(1,a0,h))
H.b(!0)
C.a.i(o,new G.bd(d+a,d+c,d+h,d+a0))}return e},
mj:function(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
t=[]
s=[]
C.a.L(t,$.$get$kf())
C.a.L(s,$.$get$kg())
for(r=0;r<a3;++r,t=q){q=[]
for(p=t.length,o=0;o<t.length;t.length===p||(0,H.D)(t),++o){n=t[o]
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
C.a.i(q,new G.y(m,f,d))
C.a.i(q,new G.y(l,e,f))
C.a.i(q,new G.y(j,d,e))
C.a.i(q,new G.y(f,e,d))}}c=new G.aR(!1,[],[],[],P.I())
c.S("aTexUV")
c.S("aNormal")
for(p=t.length,o=0;o<t.length;t.length===p||(0,H.D)(t),++o){n=t[o]
b=s[n.a]
H.b(Math.sqrt(b.gP())<1.01&&Math.sqrt(b.gP())>0.99)
a=s[n.b]
H.b(Math.sqrt(a.gP())<1.01&&Math.sqrt(a.gP())>0.99)
a0=s[n.c]
H.b(Math.sqrt(a0.gP())<1.01&&Math.sqrt(a0.gP())>0.99)
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
c.av("aNormal",[b,a,a0])
m=new T.h(new Float32Array(3))
m.v(b)
m.a2(0,a4)
l=new T.h(new Float32Array(3))
l.v(a)
l.a2(0,a4)
a2=new T.h(new Float32Array(3))
a2.v(a0)
a2.a2(0,a4)
c.da([m,l,a2])
c.au("aTexUV",[new T.p(j),new T.p(h),new T.p(a1)])}return c},
mH:function(a,b,c,d,e,f,a0,a1,a2,a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=a1+1
s=a0+1
r=B.mx(new B.fH(f,d,e,c),0,6.283185307179586,s,!1,0.001)
H.b(r.length===2*s)
q=B.mM(r,a1,a2,!1)
H.b(q.length===s)
H.b(q[0].length===2*t)
p=[]
o=new G.aR(!1,[],[],p,P.I())
for(n=q.length,m=0;m<q.length;q.length===n||(0,H.D)(q),++m){l=q[m]
for(k=0;k<l.length;k+=2){j=l[k]
j.toString
i=new T.h(new Float32Array(3))
i.v(j)
C.a.i(p,i)}}H.b(p.length===t*s)
o.dg(t,s,!1)
o.dh(t,s)
n=o.e
H.b(n.h(0,"aTexUV").length===p.length)
o.S("aNormal")
for(j=q.length,m=0;m<q.length;q.length===j||(0,H.D)(q),++m){l=q[m]
for(k=0;k<l.length;k+=2){i=l[k+1]
h=n.h(0,"aNormal")
i.toString
g=new T.h(new Float32Array(3))
g.v(i);(h&&C.a).i(h,g)}}H.b(n.h(0,"aNormal").length===p.length)
return o},
mM:function(a1,a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
r.aC(p,a)
r.aC(n,a0)
h=new T.h(new Float32Array(3))
h.v(r)
C.a.i(i,h)
s[2]=0
s[1]=0
s[0]=0
r.aC(p,a)
r.aC(n,a0)
r.C(0)
h=new T.h(new Float32Array(3))
h.v(r)
C.a.i(i,h)}}return t},
mx:function(a,b,c,d,e,f){var t,s,r,q,p,o,n
H.b(d>=2)
t=[]
s=new T.h(new Float32Array(H.f(3)))
r=new T.h(new Float32Array(H.f(3)))
for(q=(c-b)/(d-1),p=0;p<d;++p){o=q*p+b
a.$2(o,s)
a.$2(o+f,r)
r.at(s)
n=new T.h(new Float32Array(3))
n.v(s)
C.a.i(t,n)
n=new T.h(new Float32Array(3))
n.v(r)
C.a.i(t,n)}return t},
fH:function fH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},G={
mN:function(a){var t,s,r
t=a.split("\n")
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.i(t[s])}return C.a.a8(t,"\n")},
kI:function(a,b,c){var t,s,r,q
t=J.k(a)
s=t.c7(a,b)
t.bh(a,s,c)
t.c3(a,s)
r=t.bd(a,s,35713)
if(r!=null&&!r){q=t.bc(a,s)
P.aB("E:Compilation failed:")
P.aB("E:"+G.mN(c))
P.aB("E:Failure:")
P.aB(C.i.V("E:",q))
throw H.e(q)}return s},
mv:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
d.v(b)
d.at(a)
e.v(c)
e.at(a)
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
t=Math.sqrt(e.gP())
if(t===0)return!1
e.a2(0,-1/t)
return!0},
jm:function(a){var t=new G.eX(P.I(),a,!1,!0)
t.dj(a)
return t},
ke:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.j7(a[s])
b[t+1]=J.j8(a[s])
b[t+2]=J.jK(a[s])}return b},
mh:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.j7(a[s])
b[t+1]=J.j8(a[s])}return b},
mi:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.j7(a[s])
b[t+1]=J.j8(a[s])
b[t+2]=J.jK(a[s])
b[t+3]=J.lH(a[s])}return b},
mg:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.bo(a[s],0)
b[t+1]=J.bo(a[s],1)
b[t+2]=J.bo(a[s],2)
b[t+3]=J.bo(a[s],3)}return b},
mU:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
for(t=a.e,s=t.gH(t),s=s.gB(s),r=b.x,q=[[P.c,P.o]],p=[P.P],o=[T.aK],n=[T.h],m=[T.p];s.q();){l=s.gt()
if(!r.G(0,l)){k="Dropping unnecessary attribute: "+H.i(l)
if($.l1>0)H.iT("I: "+k)
continue}j=t.h(0,l)
switch($.$get$V().h(0,l).a){case"vec2":b.ae(l,G.mh(H.dK(j,"$isc",m,"$asc"),null),2)
break
case"vec3":b.ae(l,G.ke(H.dK(j,"$isc",n,"$asc"),null),3)
break
case"vec4":b.ae(l,G.mi(H.dK(j,"$isc",o,"$asc"),null),4)
break
case"float":b.ae(l,new Float32Array(H.it(H.dK(j,"$isc",p,"$asc"))),1)
break
case"uvec4":b.ae(l,G.mg(H.dK(j,"$isc",q,"$asc"),null),4)
break
default:if(H.a0(!1))H.af("unknown type for "+H.i(l)+" ["+J.lF(j[0]).k(0)+"] ["+new H.aI(H.iF(j),null).k(0)+"] "+H.i(j))}}},
cq:function(a,b,c){var t,s,r,q,p,o,n,m
t=b.d
s=b.e.x
r=P.I()
q=J.lt(t.a)
p=new G.eZ(t,q,4,r,s,null,0,-1,null,null,P.I(),"meshdata:"+a,!1,!0)
o=G.ke(c.d,null)
r.j(0,"aPosition",J.j5(t.a))
p.ch=o
p.bo("aPosition",o,3)
n=$.$get$V().h(0,"aPosition")
if(n==null)H.G("Unknown canonical aPosition")
H.b(s.G(0,"aPosition"))
m=s.h(0,"aPosition")
J.dM(t.a,q)
t.cg(0,m,0)
s=r.h(0,"aPosition")
r=n.br()
J.dL(t.a,34962,s)
J.jS(t.a,m,r,5126,!1,0,0)
s=c.df()
p.y=J.j5(t.a)
H.b(p.ch!=null)
r=p.ch.length
if(r<768){p.saT(new Uint8Array(H.it(s)))
p.Q=5121}else if(r<196608){p.saT(new Uint16Array(H.it(s)))
p.Q=5123}else{p.saT(new Uint32Array(H.it(s)))
p.Q=5125}J.dM(t.a,q)
s=p.y
r=p.cx
q=J.w(r)
H.b(!!q.$iskF||!!q.$iskG||!!q.$iskH)
J.dL(t.a,34963,s)
J.jH(t.a,34963,r,35048)
G.mU(c,p)
return p},
ks:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.ak(null,null,null,P.u)
s=c.b
r=d.b
q=c.f
p=J.ls(b.a)
o=G.kI(b.a,35633,s)
J.jG(b.a,p,o)
n=G.kI(b.a,35632,r)
J.jG(b.a,p,n)
if(q.length>0)J.lU(b.a,p,q,35980)
J.lL(b.a,p)
if(!J.lK(b.a,p,35714))H.G(J.lJ(b.a,p))
t=new G.fz(b,c,d,p,P.jj(c.c,null),P.I(),P.I(),t,null,a,!1,!0)
t.dm(a,b,c,d)
return t},
f1:function f1(){},
bW:function bW(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dV:function dV(){},
dY:function dY(a,b){this.a=a
this.b=b},
cp:function cp(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
y:function y(a,b,c){this.a=a
this.b=b
this.c=c},
bd:function bd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aR:function aR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bV:function bV(a,b,c){this.a=a
this.b=b
this.c=c},
dw:function dw(a,b,c){this.a=a
this.b=b
this.c=c},
eX:function eX(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
eZ:function eZ(a,b,c,d,e,f,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
fl:function fl(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
e7:function e7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fz:function fz(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
bi:function bi(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fK:function fK(){},
h4:function h4(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bU:function bU(){},
hg:function hg(a,b,c,d,e,f,g,h){var _=this
_.f=a
_.r=b
_.x=c
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
hh:function hh(a,b,c,d,e,f,g,h){var _=this
_.f=a
_.r=b
_.x=c
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h}},R={fO:function fO(){},fP:function fP(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},A={
kZ:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=b.dx
t.v(c)
s=b.d
t.cm(0,s)
r=b.ch
if(r!=null){b.cx
q=!0}else q=!1
if(q){J.aC(b)
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
p.ee(new T.al(o))
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
a.de(b.cx,e,d)
e.pop()}for(s=b.cy,r=s.length,l=0;l<s.length;s.length===r||(0,H.D)(s),++l)A.kZ(a,s[l],t,d,e)},
kr:function(a,b,c){var t=new A.fy(c,b,H.F([],[A.bO]),17664,0,0,0,0,a,!1,!0)
t.dl(a,b,c)
return t},
aX:function aX(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
bO:function bO(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.a=d
_.b=e
_.c=f},
fy:function fy(a,b,c,d,e,f,g,h,i,a0,a1){var _=this
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
dI:function(a){var t,s
t=C.V.eu(a,0,new A.iG())
s=536870911&t+(C.b.cM(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
iG:function iG(){}},T={
L:function(a,b,c){var t=new Float32Array(3)
t[0]=a
t[1]=b
t[2]=c
return new T.h(t)},
al:function al(a){this.a=a},
J:function J(a){this.a=a},
p:function p(a){this.a=a},
h:function h(a){this.a=a},
aK:function aK(a){this.a=a}},V={
mt:function(a,b,c,d){var t,s,r,q,p,o,n
t=new Uint32Array(H.f(C.b.I(b,c)))
for(s=2*d,r=0;r<b;++r)for(q=r%s<d,p=0;C.b.as(p,c);++p){o=q?0:1
t[p*b+r]=o}s=$.$get$jn()
q=J.jI(a.a)
J.bq(a.a,3553,q)
J.lQ(a.a,3553,0,35056,b,c,0,34041,34042,t)
s.bt(a,3553)
n=J.jL(a.a)
if(H.a0(n===0))H.af("texture error "+H.i(n))
J.bq(a.a,3553,null)
return new G.hh(b,c,35056,"frame::depth.stencil",q,3553,a,s)},
nu:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
t={}
s=document
r=new R.fP(0,0,null,null,null,null)
r.dq(C.m.cQ(s,"stats"),"blue","gray")
q=C.m.cn(s,"#webgl-canvas")
p=new G.dY(null,q)
s=(q&&C.H).cP(q,"webgl2",P.aW(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
p.a=s
if(s==null)H.G(P.cm('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
o="ChronosGL Config: "+J.aC(J.lI(s))
if($.l1>0)P.aB("I: "+o)
J.lp(s,0,0,0,1)
J.cc(s,2929)
J.cc(s,2884)
n=B.mw(25,10,0,q)
o=new T.J(new Float32Array(H.f(16)))
o.F()
m=new T.J(new Float32Array(H.f(16)))
m.F()
l=new G.fl(n,50,1,0.1,1000,o,m,new T.J(new Float32Array(H.f(16))),P.I(),"perspective",!1,!0)
l.bu()
k=q.clientWidth
j=q.clientHeight
q.width=k
q.height=j
l.dd(k,j)
m=$.$get$jn()
o=J.jI(s)
i=new G.hg(k,j,32856,"frame::color",o,3553,p,m)
J.bq(s,3553,o)
J.lS(p.a,3553,1,32856,k,j)
m.bt(p,3553)
h=J.jL(p.a)
if(H.a0(h===0))H.af("texture error "+H.i(h))
J.bq(p.a,3553,null)
g=V.mt(p,k,j,8)
f=new G.cp(p,null,i,g,null)
s=J.lr(p.a)
f.b=s
J.j3(p.a,36160,s)
J.jJ(p.a,36160,36064,3553,o,0)
J.jJ(p.a,36160,33306,3553,g.b,0)
h=J.ln(p.a,36160)
s=h===36053
if(H.a0(s))H.af("framebuffer error: "+H.i(h))
if(!s)H.G("Error Incomplete Framebuffer: "+H.i(h))
J.j3(p.a,36160,null)
e=A.kr("main",p,f)
e.z=k
e.Q=j
e.r&=4294966271
s=G.ks("solid",p,$.$get$lc(),$.$get$lb())
o=[]
H.b(!0)
C.a.i(e.f,new A.bO(s,[l],o,"solid",!1,!0))
d=G.jm("red")
d.X("uColor",$.$get$k2())
d.d.j(0,"cStencilFunc",$.$get$fQ())
c=new G.bV(514,1,255)
b=G.jm("blue")
b.X("uColor",$.$get$k1())
b.d.j(0,"cStencilFunc",c)
m=G.cq("icosahedron-3",s,B.mj(3,1,!0))
a=new Float32Array(H.f(9))
a0=new T.J(new Float32Array(H.f(16)))
a0.F()
a1=new T.J(new Float32Array(H.f(16)))
a1.F()
a1=new A.aX(d,m,[],new T.al(a),a0,a1,new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),"sphere",!1,!0)
a1.ac(0,0,0)
H.b(!0)
C.a.i(o,a1)
a1=G.cq("cube",s,B.m7(!0,1,0,1,0,1,1,1))
a0=new Float32Array(H.f(9))
a=new T.J(new Float32Array(H.f(16)))
a.F()
m=new T.J(new Float32Array(H.f(16)))
m.F()
m=new A.aX(b,a1,[],new T.al(a0),a,m,new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),"cube",!1,!0)
m.ac(-5,0,-5)
H.b(!0)
C.a.i(o,m)
m=G.cq("cylinder-32",s,B.m8(1,3,2,32,!0))
a=new Float32Array(H.f(9))
a0=new T.J(new Float32Array(H.f(16)))
a0.F()
a1=new T.J(new Float32Array(H.f(16)))
a1.F()
a1=new A.aX(d,m,[],new T.al(a),a0,a1,new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),"cylinder",!1,!0)
a1.ac(5,0,-5)
H.b(!0)
C.a.i(o,a1)
s=G.cq("torusknot",s,B.mH(!0,!0,1,2,3,1,128,16,0.4,!1))
a1=new Float32Array(H.f(9))
a0=new T.J(new Float32Array(H.f(16)))
a0.F()
a=new T.J(new Float32Array(H.f(16)))
a.F()
a=new A.aX(b,s,[],new T.al(a1),a0,a,new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),"torus",!1,!0)
a.ac(5,0,5)
H.b(!0)
C.a.i(o,a)
a2=A.kr("copy",p,null)
a2.z=k
a2.Q=j
a3=new G.bW(P.I(),"plain",!1,!0)
a=C.b.V(0,k)
o=C.b.V(0,j)
a0=new Float32Array(H.f(2))
a0[0]=a
a0[1]=o
a3.X("uCanvasSize",new T.p(a0))
a3.X("uTexture",i)
a0=G.ks("postproc",p,$.$get$kY(),$.$get$kX())
o=[]
H.b(!0)
C.a.i(a2.f,new A.bO(a0,[a3],o,"postproc",!1,!0))
s=new T.h(new Float32Array(H.f(3)))
s.p(-1,-1,0)
m=new T.h(new Float32Array(H.f(3)))
m.p(1,-1,0)
a=new T.h(new Float32Array(H.f(3)))
a.p(1,1,0)
a1=new T.h(new Float32Array(H.f(3)))
a1.p(-1,1,0)
a4=new Float32Array(H.f(2))
a4[0]=0
a4[1]=0
a5=new Float32Array(H.f(2))
a5[0]=1
a5[1]=0
a6=new Float32Array(H.f(2))
a6[0]=1
a6[1]=1
a7=new Float32Array(H.f(2))
a7[0]=0
a7[1]=1
a8=new T.h(new Float32Array(H.f(3)))
a8.p(0,0,1)
a9=new G.aR(!1,[],[],[],P.I())
a9.S("aTexUV")
a9.dc([s,m,a,a1])
a9.au("aTexUV",[new T.p(a4),new T.p(a5),new T.p(a6),new T.p(a7)])
a9.S("aNormal")
a9.av("aNormal",[a8,a8,a8,a8])
b0=G.cq("quad",a0,a9)
a0=$.$get$kc()
a7=new Float32Array(H.f(9))
a6=new T.J(new Float32Array(H.f(16)))
a6.F()
a5=new T.J(new Float32Array(H.f(16)))
a5.F()
a4=new Float32Array(H.f(3))
a1=new Float32Array(H.f(3))
a=new Float32Array(H.f(3))
m=new Float32Array(H.f(3))
H.b(!0)
C.a.i(o,new A.aX(a0,b0,[],new T.al(a7),a6,a5,new T.h(a4),new T.h(a1),new T.h(a),new T.h(m),"unit-mesh",!1,!0))
t.a=0
new V.iR(t,r,n,e,c,b,a2).$1(0)},
iR:function iR(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}}
var v=[C,H,J,P,W,B,G,R,A,T,V]
setFunctionNamesIfNecessary(v)
var $={}
H.jg.prototype={}
J.a.prototype={
A:function(a,b){return a===b},
gw:function(a){return H.aZ(a)},
k:function(a){return H.ft(a)},
gD:function(a){return new H.aI(H.iF(a),null)}}
J.eJ.prototype={
k:function(a){return String(a)},
gw:function(a){return a?519018:218159},
gD:function(a){return C.ap},
$isaz:1}
J.eK.prototype={
A:function(a,b){return null==b},
k:function(a){return"null"},
gw:function(a){return 0},
gD:function(a){return C.aj}}
J.bE.prototype={
gw:function(a){return 0},
gD:function(a){return C.ai},
k:function(a){return String(a)},
$iskk:1}
J.fn.prototype={}
J.b1.prototype={}
J.aU.prototype={
k:function(a){var t=a[$.$get$k4()]
return t==null?this.d6(a):J.aC(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isje:1}
J.aS.prototype={
b2:function(a,b){if(!!a.immutable$list)throw H.e(new P.v(b))},
b1:function(a,b){if(!!a.fixed$length)throw H.e(new P.v(b))},
i:function(a,b){this.b1(a,"add")
a.push(b)},
L:function(a,b){var t,s,r,q,p
t=a.length
this.b1(a,"addAll")
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.D)(b),++r,t=p){q=b[r]
p=t+1
H.b(t===a.length||H.G(new P.a4(a)))
a.push(q)}},
cl:function(a,b){return new H.bF(a,b,[H.aM(a,0),null])},
a8:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.i(a[s])
return t.join(b)},
u:function(a,b){return this.h(a,b)},
ges:function(a){if(a.length>0)return a[0]
throw H.e(H.eI())},
gaG:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.e(H.eI())},
bg:function(a,b,c,d,e){var t,s
this.b2(a,"setRange")
P.kq(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.G(P.b_(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.e(H.mr())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=d[e+s]
else for(s=0;s<t;++s)a[b+s]=d[e+s]},
bT:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.e(new P.a4(a))}return!1},
d1:function(a,b){this.b2(a,"sort")
H.ds(a,0,a.length-1,P.ne())},
aK:function(a){return this.d1(a,null)},
E:function(a,b){var t
for(t=0;t<a.length;++t)if(J.H(a[t],b))return!0
return!1},
k:function(a){return P.eH(a,"[","]")},
gB:function(a){return new J.dS(a,a.length,0,null,[H.aM(a,0)])},
gw:function(a){return H.aZ(a)},
gl:function(a){return a.length},
sl:function(a,b){this.b1(a,"set length")
if(b<0)throw H.e(P.b_(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.R(a,b))
if(b>=a.length||b<0)throw H.e(H.R(a,b))
return a[b]},
j:function(a,b,c){this.b2(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.R(a,b))
if(b>=a.length||b<0)throw H.e(H.R(a,b))
a[b]=c},
$isn:1,
$asn:function(){},
$isd:1,
$asd:null,
$isc:1,
$asc:null}
J.jf.prototype={}
J.dS.prototype={
gt:function(){return this.d},
q:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.e(H.D(t))
r=this.c
if(r>=s){this.sbv(null)
return!1}this.sbv(t[r]);++this.c
return!0},
sbv:function(a){this.d=a}}
J.be.prototype={
U:function(a,b){var t
if(typeof b!=="number")throw H.e(H.W(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaE(b)
if(this.gaE(a)===t)return 0
if(this.gaE(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaE:function(a){return a===0?1/a<0:a<0},
e9:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.e(new P.v(""+a+".ceil()"))},
a9:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(new P.v(""+a+".round()"))},
ea:function(a,b,c){if(this.U(b,c)>0)throw H.e(H.W(b))
if(this.U(a,b)<0)return b
if(this.U(a,c)>0)return c
return a},
eU:function(a,b){var t
if(b>20)throw H.e(P.b_(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gaE(a))return"-"+t
return t},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gw:function(a){return a&0x1FFFFFFF},
V:function(a,b){if(typeof b!=="number")throw H.e(H.W(b))
return a+b},
ad:function(a,b){if(typeof b!=="number")throw H.e(H.W(b))
return a-b},
cN:function(a,b){if(typeof b!=="number")throw H.e(H.W(b))
return a/b},
I:function(a,b){if(typeof b!=="number")throw H.e(H.W(b))
return a*b},
aM:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bP(a,b)},
K:function(a,b){return(a|0)===a?a/b|0:this.bP(a,b)},
bP:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.e(new P.v("Result of truncating division is "+H.i(t)+": "+H.i(a)+" ~/ "+b))},
aX:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
cM:function(a,b){if(typeof b!=="number")throw H.e(H.W(b))
return(a&b)>>>0},
d8:function(a,b){if(typeof b!=="number")throw H.e(H.W(b))
return(a^b)>>>0},
as:function(a,b){if(typeof b!=="number")throw H.e(H.W(b))
return a<b},
ar:function(a,b){if(typeof b!=="number")throw H.e(H.W(b))
return a>b},
cO:function(a,b){if(typeof b!=="number")throw H.e(H.W(b))
return a>=b},
gD:function(a){return C.as},
$isX:1}
J.d9.prototype={
gD:function(a){return C.ar},
$isP:1,
$iso:1,
$isX:1}
J.d8.prototype={
gD:function(a){return C.aq},
$isP:1,
$isX:1}
J.aT.prototype={
aO:function(a,b){if(b>=a.length)throw H.e(H.R(a,b))
return a.charCodeAt(b)},
V:function(a,b){if(typeof b!=="string")throw H.e(P.jU(b,null,null))
return a+b},
d2:function(a,b,c){var t
if(c>a.length)throw H.e(P.b_(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bi:function(a,b){return this.d2(a,b,0)},
bk:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.fu(b,null,null))
if(b>c)throw H.e(P.fu(b,null,null))
if(c>a.length)throw H.e(P.fu(c,null,null))
return a.substring(b,c)},
d3:function(a,b){return this.bk(a,b,null)},
eT:function(a){return a.toLowerCase()},
ec:function(a,b,c){if(c>a.length)throw H.e(P.b_(c,0,a.length,null,null))
return H.nD(a,b,c)},
U:function(a,b){var t
if(typeof b!=="string")throw H.e(H.W(b))
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
gD:function(a){return C.ak},
gl:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.e(H.R(a,b))
return a[b]},
$isn:1,
$asn:function(){},
$isu:1}
H.d.prototype={$asd:null}
H.bf.prototype={
gB:function(a){return new H.db(this,this.gl(this),0,null,[H.ao(this,"bf",0)])},
aI:function(a,b){return this.d5(0,b)},
eS:function(a,b){var t,s
t=H.F([],[H.ao(this,"bf",0)])
C.a.sl(t,this.gl(this))
for(s=0;s<this.gl(this);++s)t[s]=this.u(0,s)
return t},
eR:function(a){return this.eS(a,!0)}}
H.db.prototype={
gt:function(){return this.d},
q:function(){var t,s,r,q
t=this.a
s=J.ag(t)
r=s.gl(t)
if(this.b!==r)throw H.e(new P.a4(t))
q=this.c
if(q>=r){this.sag(null)
return!1}this.sag(s.u(t,q));++this.c
return!0},
sag:function(a){this.d=a}}
H.dc.prototype={
gB:function(a){return new H.eT(null,J.br(this.a),this.b,this.$ti)},
gl:function(a){return J.dN(this.a)},
$asY:function(a,b){return[b]}}
H.ea.prototype={$isd:1,
$asd:function(a,b){return[b]}}
H.eT.prototype={
q:function(){var t=this.b
if(t.q()){this.sag(this.c.$1(t.gt()))
return!0}this.sag(null)
return!1},
gt:function(){return this.a},
sag:function(a){this.a=a},
$asd7:function(a,b){return[b]}}
H.bF.prototype={
gl:function(a){return J.dN(this.a)},
u:function(a,b){return this.b.$1(J.lz(this.a,b))},
$asd:function(a,b){return[b]},
$asbf:function(a,b){return[b]},
$asY:function(a,b){return[b]}}
H.dz.prototype={
gB:function(a){return new H.hq(J.br(this.a),this.b,this.$ti)}}
H.hq.prototype={
q:function(){var t,s
for(t=this.a,s=this.b;t.q();)if(s.$1(t.gt()))return!0
return!1},
gt:function(){return this.a.gt()}}
H.cn.prototype={}
H.j_.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.j0.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.i2.prototype={
seD:function(a){this.z=a},
seG:function(a){this.ch=a}}
H.b5.prototype={
bS:function(a,b){if(!this.f.A(0,a))return
if(this.Q.i(0,b)&&!this.y)this.y=!0
this.b_()},
eL:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.ao(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.bI();++r.d}this.y=!1}this.b_()},
e0:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.w(a),s=0;r=this.ch,s<r.length;s+=2)if(t.A(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).i(r,a)
t=this.ch;(t&&C.a).i(t,b)},
eK:function(a){var t,s,r
if(this.ch==null)return
for(t=J.w(a),s=0;r=this.ch,s<r.length;s+=2)if(t.A(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.G(new P.v("removeRange"))
P.kq(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
cZ:function(a,b){if(!this.r.A(0,a))return
this.db=b},
ex:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.J(0,c)
return}H.b(b===1)
t=this.cx
if(t==null){t=P.jk(null,null)
this.cx=t}t.Y(0,new H.hY(a,c))},
ew:function(a,b){var t
if(!this.r.A(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.aF()
return}H.b(b===1)
t=this.cx
if(t==null){t=P.jk(null,null)
this.cx=t}t.Y(0,this.geE())},
ey:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.aB(a)
if(b!=null)P.aB(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.aC(a)
s[1]=b==null?null:b.k(0)
for(r=new P.c0(t,t.r,null,null,[null]),r.c=t.e;r.q();)r.d.J(0,s)},
ak:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.S(o)
p=H.aL(o)
this.ey(q,p)
if(this.db){this.aF()
if(this===u.globalState.e)throw o}}finally{this.cy=H.na(r)
u.globalState.d=H.jz(t,"$isb5")
if(t!=null)$=t.geC()
if(this.cx!=null)for(;n=this.cx,!n.gan(n);)this.cx.co().$0()}return s},
ck:function(a){return this.b.h(0,a)},
bz:function(a,b){var t=this.b
if(t.G(0,a))throw H.e(P.cm("Registry: ports must be registered only once."))
t.j(0,a,b)},
b_:function(){var t=this.b
if(t.gl(t)-this.c.a>0||this.y||!this.x)u.globalState.z.j(0,this.a,this)
else this.aF()},
aF:function(){var t,s,r
t=this.cx
if(t!=null)t.a_(0)
for(t=this.b,s=t.gcJ(t),s=s.gB(s);s.q();)s.gt().dE()
t.a_(0)
this.c.a_(0)
u.globalState.z.ao(0,this.a)
this.dx.a_(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].J(0,t[r+1])
this.ch=null}},
geC:function(){return this.d},
ged:function(){return this.e}}
H.hY.prototype={
$0:function(){this.a.J(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.hG.prototype={
ek:function(){var t=this.a
if(t.b===t.c)return
return t.co()},
cq:function(){var t,s,r
t=this.ek()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.G(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gan(s)}else s=!1
else s=!1
else s=!1
if(s)H.G(P.cm("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gan(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aW(["command","close"])
r=new H.an(!0,new P.dD(0,null,null,null,null,null,0,[null,P.o])).M(r)
s.toString
self.postMessage(r)}return!1}t.eI()
return!0},
bN:function(){if(self.window!=null)new H.hH(this).$0()
else for(;this.cq(););},
ap:function(){var t,s,r,q,p
if(!u.globalState.x)this.bN()
else try{this.bN()}catch(r){t=H.S(r)
s=H.aL(r)
q=u.globalState.Q
p=P.aW(["command","error","msg",H.i(t)+"\n"+H.i(s)])
p=new H.an(!0,P.c1(null,P.o)).M(p)
q.toString
self.postMessage(p)}}}
H.hH.prototype={
$0:function(){if(!this.a.cq())return
P.mL(C.v,this)},
$S:function(){return{func:1,v:true}}}
H.b6.prototype={
eI:function(){var t=this.a
if(t.y){C.a.i(t.z,this)
return}t.ak(this.b)}}
H.i1.prototype={}
H.eF.prototype={
$0:function(){H.mn(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.eG.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(!this.d)this.a.$1(this.c)
else{s=this.a
if(H.bn(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.bn(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.b_()},
$S:function(){return{func:1,v:true}}}
H.hz.prototype={}
H.bk.prototype={
J:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.mZ(b)
if(t.ged()===s){s=J.ag(r)
switch(s.h(r,0)){case"pause":t.bS(s.h(r,1),s.h(r,2))
break
case"resume":t.eL(s.h(r,1))
break
case"add-ondone":t.e0(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.eK(s.h(r,1))
break
case"set-errors-fatal":t.cZ(s.h(r,1),s.h(r,2))
break
case"ping":t.ex(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.ew(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.i(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.ao(0,s)
break}return}u.globalState.f.a.Y(0,new H.b6(t,new H.i3(this,r),"receive"))},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bk){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gw:function(a){return this.b.a}}
H.i3.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dC(0,this.b)},
$S:function(){return{func:1}}}
H.c3.prototype={
J:function(a,b){var t,s,r
t=P.aW(["command","message","port",this,"msg",b])
s=new H.an(!0,P.c1(null,P.o)).M(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.c3){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gw:function(a){return C.b.d8((this.b<<16^this.a<<8)>>>0,this.c)}}
H.bh.prototype={
dE:function(){this.c=!0
this.b=null},
dC:function(a,b){if(this.c)return
this.b.$1(b)},
$ismF:1}
H.h6.prototype={
dr:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.Y(0,new H.b6(s,new H.h7(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.c7(new H.h8(this,b),0),a)}else{H.b(a>0)
throw H.e(new P.v("Timer greater than 0."))}}}
H.h7.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.h8.prototype={
$0:function(){this.a.c=null
H.iQ()
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.ar.prototype={
gw:function(a){var t=this.a
t=C.b.aX(t,0)^C.b.K(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
A:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.ar){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.an.prototype={
M:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.j(0,a,t.gl(t))
t=J.w(a)
if(!!t.$isbH)return["buffer",a]
if(!!t.$isbg)return["typed",a]
if(!!t.$isn)return this.cV(a)
if(!!t.$ismk){r=this.gcS()
q=t.gH(a)
q=H.jl(q,r,H.ao(q,"Y",0),null)
q=P.km(q,!0,H.ao(q,"Y",0))
t=t.gcJ(a)
t=H.jl(t,r,H.ao(t,"Y",0),null)
return["map",q,P.km(t,!0,H.ao(t,"Y",0))]}if(!!t.$iskk)return this.cW(a)
if(!!t.$isa)this.cH(a)
if(!!t.$ismF)this.aq(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isbk)return this.cX(a)
if(!!t.$isc3)return this.cY(a)
if(!!t.$isb9){p=a.$static_name
if(p==null)this.aq(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isar)return["capability",a.a]
if(!(a instanceof P.r))this.cH(a)
return["dart",u.classIdExtractor(a),this.cU(u.classFieldsExtractor(a))]},
aq:function(a,b){throw H.e(new P.v((b==null?"Can't transmit:":b)+" "+H.i(a)))},
cH:function(a){return this.aq(a,null)},
cV:function(a){var t
H.b(typeof a!=="string")
t=this.cT(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.aq(a,"Can't serialize indexable: ")},
cT:function(a){var t,s
t=[]
C.a.sl(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.M(a[s])
return t},
cU:function(a){var t
for(t=0;t<a.length;++t)C.a.j(a,t,this.M(a[t]))
return a},
cW:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.aq(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sl(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.M(a[t[r]])
return["js-object",t,s]},
cY:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cX:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.b4.prototype={
a0:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.e(P.jT("Bad serialized message: "+H.i(a)))
switch(C.a.ges(a)){case"ref":H.b(J.H(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.b(J.H(a[0],"buffer"))
t=a[1]
C.a.i(this.b,t)
return t
case"typed":H.b(J.H(a[0],"typed"))
t=a[1]
C.a.i(this.b,t)
return t
case"fixed":H.b(J.H(a[0],"fixed"))
t=a[1]
C.a.i(this.b,t)
s=H.F(this.aj(t),[null])
s.fixed$length=Array
return s
case"extendable":H.b(J.H(a[0],"extendable"))
t=a[1]
C.a.i(this.b,t)
return H.F(this.aj(t),[null])
case"mutable":H.b(J.H(a[0],"mutable"))
t=a[1]
C.a.i(this.b,t)
return this.aj(t)
case"const":H.b(J.H(a[0],"const"))
t=a[1]
C.a.i(this.b,t)
s=H.F(this.aj(t),[null])
s.fixed$length=Array
return s
case"map":return this.en(a)
case"sendport":return this.eo(a)
case"raw sendport":H.b(J.H(a[0],"raw sendport"))
t=a[1]
C.a.i(this.b,t)
return t
case"js-object":return this.em(a)
case"function":H.b(J.H(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.i(this.b,t)
return t
case"capability":H.b(J.H(a[0],"capability"))
return new H.ar(a[1])
case"dart":H.b(J.H(a[0],"dart"))
r=a[1]
q=a[2]
p=u.instanceFromClassId(r)
C.a.i(this.b,p)
this.aj(q)
return u.initializeEmptyInstance(r,p,q)
default:throw H.e("couldn't deserialize: "+H.i(a))}},
aj:function(a){var t
for(t=0;t<a.length;++t)C.a.j(a,t,this.a0(a[t]))
return a},
en:function(a){var t,s,r,q,p
H.b(J.H(a[0],"map"))
t=a[1]
s=a[2]
r=P.I()
C.a.i(this.b,r)
t=J.lM(t,this.gel()).eR(0)
for(q=J.ag(s),p=0;p<t.length;++p)r.j(0,t[p],this.a0(q.h(s,p)))
return r},
eo:function(a){var t,s,r,q,p,o,n
H.b(J.H(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.ck(r)
if(o==null)return
n=new H.bk(o,s)}else n=new H.c3(t,r,s)
C.a.i(this.b,n)
return n},
em:function(a){var t,s,r,q,p,o
H.b(J.H(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.i(this.b,r)
for(q=J.ag(t),p=J.ag(s),o=0;o<q.gl(t);++o)r[q.h(t,o)]=this.a0(p.h(s,o))
return r}}
H.fx.prototype={}
H.hd.prototype={
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
H.dl.prototype={
k:function(a){var t=this.b
if(t==null)return"NullError: "+H.i(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.eM.prototype={
k:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.i(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.i(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.i(this.a)+")"}}
H.hi.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.j1.prototype={
$1:function(a){if(!!J.w(a).$isbc)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.dF.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.iL.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.iM.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.iN.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.iO.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.iP.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.b9.prototype={
k:function(a){return"Closure '"+H.dn(this).trim()+"'"},
$isje:1,
geX:function(){return this},
$D:null}
H.h0.prototype={}
H.fN.prototype={
k:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bs.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bs))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gw:function(a){var t,s
t=this.c
if(t==null)s=H.aZ(this.a)
else s=typeof t!=="object"?J.aq(t):H.aZ(t)
return(s^H.aZ(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.i(this.d)+"' of "+H.ft(t)}}
H.hf.prototype={
k:function(a){return this.a}}
H.dX.prototype={
k:function(a){return this.a}}
H.fD.prototype={
k:function(a){return"RuntimeError: "+H.i(this.a)}}
H.ht.prototype={
k:function(a){return C.i.V("Assertion failed: ",P.jd(this.a))}}
H.aI.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gw:function(a){return J.aq(this.a)},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.aI){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.aj.prototype={
gl:function(a){return this.a},
gan:function(a){return this.a===0},
gH:function(a){return new H.eP(this,[H.aM(this,0)])},
gcJ:function(a){return H.jl(this.gH(this),new H.eL(this),H.aM(this,0),H.aM(this,1))},
G:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bF(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bF(s,b)}else return this.ez(b)},
ez:function(a){var t=this.d
if(t==null)return!1
return this.am(this.aA(t,this.al(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.ah(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.ah(r,b)
return s==null?null:s.b}else return this.eA(b)},
eA:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.aA(t,this.al(a))
r=this.am(s,a)
if(r<0)return
return s[r].b},
j:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aU()
this.b=t}this.bx(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aU()
this.c=s}this.bx(s,b,c)}else{r=this.d
if(r==null){r=this.aU()
this.d=r}q=this.al(b)
p=this.aA(r,q)
if(p==null)this.aW(r,q,[this.aV(b,c)])
else{o=this.am(p,b)
if(o>=0)p[o].b=c
else p.push(this.aV(b,c))}}},
ao:function(a,b){if(typeof b==="string")return this.bL(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bL(this.c,b)
else return this.eB(b)},
eB:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.aA(t,this.al(a))
r=this.am(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bQ(q)
return q.b},
a_:function(a){if(this.a>0){this.f=null
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
bx:function(a,b,c){var t=this.ah(a,b)
if(t==null)this.aW(a,b,this.aV(b,c))
else t.b=c},
bL:function(a,b){var t
if(a==null)return
t=this.ah(a,b)
if(t==null)return
this.bQ(t)
this.bG(a,b)
return t.b},
aV:function(a,b){var t,s
t=new H.eO(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bQ:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.r=this.r+1&67108863},
al:function(a){return J.aq(a)&0x3ffffff},
am:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.H(a[s].a,b))return s
return-1},
k:function(a){return P.mu(this)},
ah:function(a,b){return a[b]},
aA:function(a,b){return a[b]},
aW:function(a,b,c){H.b(c!=null)
a[b]=c},
bG:function(a,b){delete a[b]},
bF:function(a,b){return this.ah(a,b)!=null},
aU:function(){var t=Object.create(null)
this.aW(t,"<non-identifier-key>",t)
this.bG(t,"<non-identifier-key>")
return t},
$ismk:1}
H.eL.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.eO.prototype={}
H.eP.prototype={
gl:function(a){return this.a.a},
gB:function(a){var t,s
t=this.a
s=new H.eQ(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.eQ.prototype={
gt:function(){return this.d},
q:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a4(t))
else{t=this.c
if(t==null){this.sbw(null)
return!1}else{this.sbw(t.a)
this.c=this.c.c
return!0}}},
sbw:function(a){this.d=a}}
H.iH.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.iI.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.u]}}}
H.iJ.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.u]}}}
H.bH.prototype={
gD:function(a){return C.ab},
$isbH:1}
H.bg.prototype={$isbg:1}
H.f2.prototype={
gD:function(a){return C.ac}}
H.de.prototype={
gl:function(a){return a.length},
$isn:1,
$asn:function(){},
$isq:1,
$asq:function(){}}
H.df.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.R(a,b))
return a[b]},
j:function(a,b,c){if(b>>>0!==b||b>=a.length)H.G(H.R(a,b))
a[b]=c}}
H.dg.prototype={
j:function(a,b,c){if(b>>>0!==b||b>=a.length)H.G(H.R(a,b))
a[b]=c},
$isd:1,
$asd:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]}}
H.dd.prototype={
gD:function(a){return C.ad},
$isd:1,
$asd:function(){return[P.P]},
$isc:1,
$asc:function(){return[P.P]},
$isex:1}
H.f3.prototype={
gD:function(a){return C.ae},
$isd:1,
$asd:function(){return[P.P]},
$isc:1,
$asc:function(){return[P.P]}}
H.f4.prototype={
gD:function(a){return C.af},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.R(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]}}
H.f5.prototype={
gD:function(a){return C.ag},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.R(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]},
$iskh:1}
H.f6.prototype={
gD:function(a){return C.ah},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.R(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]}}
H.f7.prototype={
gD:function(a){return C.al},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.R(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]},
$iskF:1}
H.f8.prototype={
gD:function(a){return C.am},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.R(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]},
$iskG:1}
H.dh.prototype={
gD:function(a){return C.an},
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.R(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]}}
H.f9.prototype={
gD:function(a){return C.ao},
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.R(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]},
$iskH:1}
H.bI.prototype={
$asn:function(){},
$isd:1,
$asd:function(){return[P.o]},
$asq:function(){},
$isc:1,
$asc:function(){return[P.o]}}
H.bJ.prototype={
$asn:function(){},
$isd:1,
$asd:function(){return[P.P]},
$asq:function(){},
$isc:1,
$asc:function(){return[P.P]}}
H.bK.prototype={
$asn:function(){},
$asd:function(){return[P.P]},
$asq:function(){},
$asc:function(){return[P.P]}}
H.bL.prototype={
$asn:function(){},
$asd:function(){return[P.o]},
$asq:function(){},
$asc:function(){return[P.o]}}
P.hv.prototype={
$1:function(a){var t,s
H.iQ()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.hu.prototype={
$1:function(a){var t,s
t=this.a
H.b(t.a==null);++u.globalState.f.b
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.hw.prototype={
$0:function(){H.iQ()
this.a.$0()},
$S:function(){return{func:1}}}
P.hx.prototype={
$0:function(){H.iQ()
this.a.$0()},
$S:function(){return{func:1}}}
P.hB.prototype={}
P.ik.prototype={
eb:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.aH("Future already completed"))
t.aQ(b)}}
P.dC.prototype={
eH:function(a){if(this.c!==6)return!0
H.b(!0)
return this.b.b.b7(this.d,a.a)},
ev:function(a){var t,s
t=(this.c&2)!==0
if(t){H.b(t)
t=this.e!=null}else t=!1
H.b(t)
s=this.e
t=this.b.b
if(H.bn(s,{func:1,args:[P.r,P.bQ]}))return t.eM(s,a.a,a.b)
else return t.b7(s,a.a)}}
P.ay.prototype={
cv:function(a,b){var t,s,r
t=$.E
if(t!==C.f){t.toString
if(b!=null)b=P.n2(b,t)}s=new P.ay(0,t,null,[null])
r=b==null?1:3
this.by(new P.dC(null,s,r,a,b,[H.aM(this,0),null]))
return s},
cu:function(a){return this.cv(a,null)},
bB:function(a){H.b(this.a<4)
H.b(a.a>=4)
this.a=a.a
this.c=a.c},
by:function(a){var t
H.b(a.a==null)
t=this.a
if(t<=1){a.a=H.jz(this.c,"$isdC")
this.c=a}else{if(t===2){H.b(!0)
t=this.c
if(t.a<4){t.by(a)
return}this.bB(t)}H.b(this.a>=4)
t=this.b
t.toString
P.iw(null,null,t,new P.hM(this,a))}},
bK:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.b(!0)
s=this.c
if(s.a<4){s.bK(a)
return}this.bB(s)}H.b(this.a>=4)
t.a=this.ai(a)
s=this.b
s.toString
P.iw(null,null,s,new P.hQ(t,this))}},
bM:function(){H.b(this.a<4)
var t=this.c
this.c=null
return this.ai(t)},
ai:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aQ:function(a){var t,s
H.b(this.a<4)
t=this.$ti
if(H.ix(a,"$iseA",t,"$aseA"))if(H.ix(a,"$isay",t,null))P.kK(a,this)
else P.mT(a,this)
else{s=this.bM()
H.b(this.a<4)
this.a=4
this.c=a
P.bY(this,s)}},
ax:function(a,b){var t
H.b(this.a<4)
t=this.bM()
H.b(this.a<4)
this.a=8
this.c=new P.b8(a,b)
P.bY(this,t)},
dG:function(a){return this.ax(a,null)},
$iseA:1,
gaY:function(){return this.a},
gdV:function(){return this.c}}
P.hM.prototype={
$0:function(){P.bY(this.a,this.b)},
$S:function(){return{func:1}}}
P.hQ.prototype={
$0:function(){P.bY(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.hN.prototype={
$1:function(a){var t=this.a
H.b(t.a===1)
H.b(t.a===1)
t.a=0
t.aQ(a)},
$S:function(){return{func:1,args:[,]}}}
P.hO.prototype={
$2:function(a,b){var t=this.a
H.b(t.a===1)
t.ax(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.hP.prototype={
$0:function(){this.a.ax(this.b,this.c)},
$S:function(){return{func:1}}}
P.hT.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.d
p=q.c
H.b((p&1)===0)
o=(p&2)===0
H.b(o)
t=null
try{H.b(o)
H.b(p===8)
t=q.b.b.cp(q.d)}catch(n){s=H.S(n)
r=H.aL(n)
if(this.c){q=this.a.a
H.b(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.b(q.a===8)
p.b=q.c}else p.b=new P.b8(s,r)
p.a=!0
return}if(!!J.w(t).$iseA){if(t instanceof P.ay&&t.gaY()>=4){if(t.gaY()===8){q=t
H.b(q.gaY()===8)
p=this.b
p.b=q.gdV()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.cu(new P.hU(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.hU.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.hS.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.b((r.c&1)!==0)
this.a.b=r.b.b.b7(r.d,this.c)}catch(q){t=H.S(q)
s=H.aL(q)
r=this.a
r.b=new P.b8(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.hR.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.b(q.a===8)
t=q.c
q=this.c
if(q.eH(t)){H.b((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.ev(t)
p.a=!1}}catch(o){s=H.S(o)
r=H.aL(o)
q=this.a
p=q.a
H.b(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.b(q.a===8)
m.b=q.c}else m.b=new P.b8(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.dA.prototype={}
P.fS.prototype={
gl:function(a){var t,s
t={}
s=new P.ay(0,$.E,null,[P.o])
t.a=0
this.eF(new P.fU(t),!0,new P.fV(t,s),s.gdF())
return s}}
P.fU.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.fV.prototype={
$0:function(){this.b.aQ(this.a.a)},
$S:function(){return{func:1}}}
P.fT.prototype={}
P.b8.prototype={
k:function(a){return H.i(this.a)},
$isbc:1}
P.is.prototype={}
P.iv.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.dm()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.e(t)
r=H.e(t)
r.stack=s.k(0)
throw r},
$S:function(){return{func:1}}}
P.i5.prototype={
eN:function(a){var t,s,r
try{if(C.f===$.E){a.$0()
return}P.kP(null,null,this,a)}catch(r){t=H.S(r)
s=H.aL(r)
P.iu(null,null,this,t,s)}},
eO:function(a,b){var t,s,r
try{if(C.f===$.E){a.$1(b)
return}P.kQ(null,null,this,a,b)}catch(r){t=H.S(r)
s=H.aL(r)
P.iu(null,null,this,t,s)}},
e6:function(a){return new P.i7(this,a)},
b0:function(a){return new P.i6(this,a)},
e7:function(a){return new P.i8(this,a)},
h:function(a,b){return},
cp:function(a){if($.E===C.f)return a.$0()
return P.kP(null,null,this,a)},
b7:function(a,b){if($.E===C.f)return a.$1(b)
return P.kQ(null,null,this,a,b)},
eM:function(a,b,c){if($.E===C.f)return a.$2(b,c)
return P.n3(null,null,this,a,b,c)}}
P.i7.prototype={
$0:function(){return this.a.cp(this.b)},
$S:function(){return{func:1}}}
P.i6.prototype={
$0:function(){return this.a.eN(this.b)},
$S:function(){return{func:1}}}
P.i8.prototype={
$1:function(a){return this.a.eO(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.dD.prototype={
al:function(a){return H.nw(a)&0x3ffffff},
am:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.hZ.prototype={
gB:function(a){var t=new P.c0(this,this.r,null,null,[null])
t.c=this.e
return t},
gl:function(a){return this.a},
E:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dH(b)},
dH:function(a){var t=this.d
if(t==null)return!1
return this.az(t[this.ay(a)],a)>=0},
ck:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.E(0,a)?a:null
else return this.dP(a)},
dP:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.ay(a)]
r=this.az(s,a)
if(r<0)return
return J.bo(s,r).gdJ()},
i:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
H.b(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.bC(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
H.b(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.bC(r,b)}else return this.Y(0,b)},
Y:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.mX()
this.d=t}s=this.ay(b)
r=t[s]
if(r==null){q=[this.aP(b)]
H.b(q!=null)
t[s]=q}else{if(this.az(r,b)>=0)return!1
r.push(this.aP(b))}return!0},
ao:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bD(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bD(this.c,b)
else return this.dQ(0,b)},
dQ:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.ay(b)]
r=this.az(s,b)
if(r<0)return!1
this.bE(s.splice(r,1)[0])
return!0},
a_:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
bC:function(a,b){var t
if(a[b]!=null)return!1
t=this.aP(b)
H.b(!0)
a[b]=t
return!0},
bD:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bE(t)
delete a[b]
return!0},
aP:function(a){var t,s
t=new P.i_(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bE:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.r=this.r+1&67108863},
ay:function(a){return J.aq(a)&0x3ffffff},
az:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.H(a[s].a,b))return s
return-1},
$isd:1,
$asd:null}
P.i_.prototype={
gdJ:function(){return this.a}}
P.c0.prototype={
gt:function(){return this.d},
q:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a4(t))
else{t=this.c
if(t==null){this.saf(null)
return!1}else{this.saf(t.a)
this.c=this.c.b
return!0}}},
saf:function(a){this.d=a}}
P.hX.prototype={}
P.da.prototype={}
P.x.prototype={
gB:function(a){return new H.db(a,this.gl(a),0,null,[H.ao(a,"x",0)])},
u:function(a,b){return this.h(a,b)},
cl:function(a,b){return new H.bF(a,b,[H.ao(a,"x",0),null])},
eu:function(a,b,c){var t,s,r
t=this.gl(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gl(a))throw H.e(new P.a4(a))}return s},
k:function(a){return P.eH(a,"[","]")},
$isd:1,
$asd:null,
$isc:1,
$asc:null}
P.eU.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.i(a)
t.a=s+": "
t.a+=H.i(b)},
$S:function(){return{func:1,args:[,,]}}}
P.eR.prototype={
gB:function(a){return new P.i0(this,this.c,this.d,this.b,null,this.$ti)},
gan:function(a){return this.b===this.c},
gl:function(a){return(this.c-this.b&this.a.length-1)>>>0},
u:function(a,b){var t=(this.c-this.b&this.a.length-1)>>>0
if(C.b.ar(0,b)||b>=t)H.G(P.C(b,this,"index",null,t))
return this.a[(C.b.V(this.b,b)&this.a.length-1)>>>0]},
a_:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
k:function(a){return P.eH(this,"{","}")},
co:function(){var t,s,r
t=this.b
if(t===this.c)throw H.e(H.eI());++this.d
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
if(this.b===t)this.bI();++this.d},
bI:function(){var t,s,r,q
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
this.sbO(s)},
di:function(a,b){var t
H.b(!0)
t=new Array(8)
t.fixed$length=Array
this.sbO(H.F(t,[b]))},
sbO:function(a){this.a=a},
$asd:null}
P.i0.prototype={
gt:function(){return this.e},
q:function(){var t,s
t=this.a
if(this.c!==t.d)H.G(new P.a4(t))
s=this.d
if(s===this.b){this.saf(null)
return!1}this.saf(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
saf:function(a){this.e=a}}
P.fG.prototype={
L:function(a,b){var t
for(t=J.br(b);t.q();)this.i(0,t.gt())},
k:function(a){return P.eH(this,"{","}")},
$isd:1,
$asd:null}
P.fF.prototype={}
P.bN.prototype={$isd:1,$asd:null,$isc:1,$asc:null}
P.az.prototype={}
P.M.prototype={}
P.bb.prototype={
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.bb))return!1
return this.a===b.a&&this.b===b.b},
U:function(a,b){return C.b.U(this.a,b.a)},
gw:function(a){var t=this.a
return(t^C.b.aX(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.m9(H.mE(this))
s=P.cg(H.mC(this))
r=P.cg(H.my(this))
q=P.cg(H.mz(this))
p=P.cg(H.mB(this))
o=P.cg(H.mD(this))
n=P.ma(H.mA(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isM:1,
$asM:function(){return[P.bb]}}
P.P.prototype={$isM:1,
$asM:function(){return[P.X]}}
P.aD.prototype={
as:function(a,b){return C.b.as(this.a,b.gdI())},
ar:function(a,b){return C.b.ar(this.a,b.gdI())},
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.aD))return!1
return this.a===b.a},
gw:function(a){return this.a&0x1FFFFFFF},
U:function(a,b){return C.b.U(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.e9()
s=this.a
if(s<0)return"-"+new P.aD(0-s).k(0)
r=t.$1(C.b.K(s,6e7)%60)
q=t.$1(C.b.K(s,1e6)%60)
p=new P.e8().$1(s%1e6)
return""+C.b.K(s,36e8)+":"+H.i(r)+":"+H.i(q)+"."+H.i(p)},
$isM:1,
$asM:function(){return[P.aD]}}
P.e8.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.u,args:[P.o]}}}
P.e9.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.u,args:[P.o]}}}
P.bc.prototype={}
P.cd.prototype={
k:function(a){return"Assertion failed"}}
P.dm.prototype={
k:function(a){return"Throw of null."}}
P.ah.prototype={
gaS:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaR:function(){return""},
k:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.i(t)
q=this.gaS()+s+r
if(!this.a)return q
p=this.gaR()
o=P.jd(this.b)
return q+p+": "+H.i(o)}}
P.dq.prototype={
gaS:function(){return"RangeError"},
gaR:function(){var t,s,r
H.b(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.i(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.i(t)
else if(r>t)s=": Not in range "+H.i(t)+".."+H.i(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.i(t)}return s}}
P.eE.prototype={
gaS:function(){return"RangeError"},
gaR:function(){H.b(this.a)
if(J.lh(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.i(t)},
gl:function(a){return this.f}}
P.v.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.dy.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.aH.prototype={
k:function(a){return"Bad state: "+this.a}}
P.a4.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.i(P.jd(t))+"."}}
P.dt.prototype={
k:function(a){return"Stack Overflow"},
$isbc:1}
P.e0.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.hL.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.i(t)}}
P.eb.prototype={
k:function(a){return"Expando:"+H.i(this.a)},
h:function(a,b){var t,s
t=this.b
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.G(P.jU(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.kn(b,"expando$values")
return s==null?null:H.kn(s,t)}}
P.o.prototype={$isM:1,
$asM:function(){return[P.X]}}
P.Y.prototype={
aI:function(a,b){return new H.dz(this,b,[H.ao(this,"Y",0)])},
gl:function(a){var t,s
H.b(!this.$isd)
t=this.gB(this)
for(s=0;t.q();)++s
return s},
ga5:function(a){var t,s
t=this.gB(this)
if(!t.q())throw H.e(H.eI())
s=t.gt()
if(t.q())throw H.e(H.ms())
return s},
u:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(P.m0("index"))
if(b<0)H.G(P.b_(b,0,null,"index",null))
for(t=this.gB(this),s=0;t.q();){r=t.gt()
if(b===s)return r;++s}throw H.e(P.C(b,this,"index",null,s))},
k:function(a){return P.mq(this,"(",")")}}
P.d7.prototype={}
P.c.prototype={$isd:1,$asd:null,$asc:null}
P.aG.prototype={}
P.aY.prototype={
gw:function(a){return P.r.prototype.gw.call(this,this)},
k:function(a){return"null"}}
P.X.prototype={$isM:1,
$asM:function(){return[P.X]}}
P.r.prototype={constructor:P.r,$isr:1,
A:function(a,b){return this===b},
gw:function(a){return H.aZ(this)},
k:function(a){return H.ft(this)},
gD:function(a){return new H.aI(H.iF(this),null)},
toString:function(){return this.k(this)}}
P.bQ.prototype={}
P.u.prototype={$isM:1,
$asM:function(){return[P.u]}}
P.bR.prototype={
gl:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga6:function(){return this.a}}
W.m.prototype={}
W.dQ.prototype={
k:function(a){return String(a)},
$isa:1}
W.dR.prototype={
k:function(a){return String(a)},
$isa:1}
W.a3.prototype={$isr:1}
W.dU.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a3]},
$isd:1,
$asd:function(){return[W.a3]},
$isq:1,
$asq:function(){return[W.a3]},
$isc:1,
$asc:function(){return[W.a3]}}
W.ce.prototype={}
W.aP.prototype={$isa:1,$isaP:1}
W.cf.prototype={
cP:function(a,b,c){var t=this.dL(a,b,P.nd(c,null))
return t},
dL:function(a,b,c){return a.getContext(b,c)}}
W.dW.prototype={
aJ:function(a){return P.iA(a.getContextAttributes())}}
W.aQ.prototype={$isa:1,
gl:function(a){return a.length}}
W.dZ.prototype={$isa:1}
W.A.prototype={$isr:1}
W.ba.prototype={
bA:function(a,b){var t,s
t=$.$get$k3()
s=t[b]
if(typeof s==="string")return s
s=this.dY(a,b)
t[b]=s
return s},
dY:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.mb()+b
if(t in a)return t
return b},
gl:function(a){return a.length}}
W.e_.prototype={}
W.e1.prototype={
h:function(a,b){return a[b]},
gl:function(a){return a.length}}
W.e2.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gN:function(a){return a.z}}
W.ch.prototype={}
W.bt.prototype={
e1:function(a,b){return a.adoptNode(b)},
cQ:function(a,b){return a.getElementById(b)},
cn:function(a,b){return a.querySelector(b)}}
W.ci.prototype={$isa:1}
W.e3.prototype={
k:function(a){return String(a)}}
W.cj.prototype={
eh:function(a,b){return a.createHTMLDocument(b)}}
W.e4.prototype={
gaH:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gN:function(a){return a.z}}
W.ck.prototype={
gaH:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gN:function(a){return a.z}}
W.cl.prototype={
k:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.ga4(a))+" x "+H.i(this.ga3(a))},
A:function(a,b){var t
if(b==null)return!1
t=J.w(b)
if(!t.$isN)return!1
return a.left===t.gb4(b)&&a.top===t.gb8(b)&&this.ga4(a)===t.ga4(b)&&this.ga3(a)===t.ga3(b)},
gw:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.ga4(a)
q=this.ga3(a)
return W.kN(W.b7(W.b7(W.b7(W.b7(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga3:function(a){return a.height},
gb4:function(a){return a.left},
gb8:function(a){return a.top},
ga4:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isN:1,
$asN:function(){}}
W.e5.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[P.u]},
$isd:1,
$asd:function(){return[P.u]},
$isq:1,
$asq:function(){return[P.u]},
$isc:1,
$asc:function(){return[P.u]}}
W.e6.prototype={
gl:function(a){return a.length}}
W.a5.prototype={
ge4:function(a){return new W.hF(a)},
k:function(a){return a.localName},
O:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.kb
if(t==null){t=H.F([],[W.dj])
s=new W.dk(t)
C.a.i(t,W.kL(null))
C.a.i(t,W.kO())
$.kb=s
d=s}else d=t
t=$.ka
if(t==null){t=new W.dG(d)
$.ka=t
c=t}else{t.a=d
c=t}}if($.aE==null){t=document
s=t.implementation
s=(s&&C.I).eh(s,"")
$.aE=s
$.jc=s.createRange()
s=$.aE
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.aE.head;(t&&C.J).T(t,r)}t=$.aE
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.jz(s,"$isaP")}t=$.aE
if(!!this.$isaP)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.aE.body;(t&&C.o).T(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.E(C.T,a.tagName)){t=$.jc;(t&&C.B).cR(t,q)
t=$.jc
p=(t&&C.B).ef(t,b)}else{q.innerHTML=b
p=$.aE.createDocumentFragment()
for(t=J.k(p);s=q.firstChild,s!=null;)t.T(p,s)}t=$.aE.body
if(q==null?t!=null:q!==t)J.lN(q)
c.bf(p)
C.m.e1(document,p)
return p},
eg:function(a,b,c){return this.O(a,b,c,null)},
d0:function(a,b,c,d){a.textContent=null
this.T(a,this.O(a,b,c,d))},
d_:function(a,b){return this.d0(a,b,null,null)},
aa:function(a,b){return a.getAttribute(b)},
dR:function(a,b){return a.removeAttribute(b)},
$isa:1,
$isr:1,
$isa5:1,
$isj:1,
$ist:1,
geP:function(a){return a.tagName}}
W.iy.prototype={
$1:function(a){return!!J.w(a).$isa5},
$S:function(){return{func:1,args:[,]}}}
W.l.prototype={}
W.j.prototype={
dD:function(a,b,c,d){return a.addEventListener(b,H.c7(c,1),!1)},
$isr:1,
$isj:1}
W.a6.prototype={$isr:1}
W.eu.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a6]},
$isd:1,
$asd:function(){return[W.a6]},
$isq:1,
$asq:function(){return[W.a6]},
$isc:1,
$asc:function(){return[W.a6]}}
W.ev.prototype={
gl:function(a){return a.length}}
W.ez.prototype={
gl:function(a){return a.length}}
W.a7.prototype={$isr:1}
W.cr.prototype={}
W.eB.prototype={
gl:function(a){return a.length}}
W.bB.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.t]},
$isd:1,
$asd:function(){return[W.t]},
$isq:1,
$asq:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]}}
W.cs.prototype={}
W.eC.prototype={
J:function(a,b){return a.send(b)}}
W.bC.prototype={}
W.bD.prototype={$isa:1,$isa5:1,$isbD:1}
W.aV.prototype={$isr:1,$isaV:1}
W.eS.prototype={
k:function(a){return String(a)}}
W.eY.prototype={
gl:function(a){return a.length}}
W.f_.prototype={
eY:function(a,b,c){return a.send(b,c)},
J:function(a,b){return a.send(b)}}
W.bG.prototype={}
W.a8.prototype={$isr:1}
W.f0.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a8]},
$isd:1,
$asd:function(){return[W.a8]},
$isq:1,
$asq:function(){return[W.a8]},
$isc:1,
$asc:function(){return[W.a8]}}
W.Q.prototype={$isr:1,$isQ:1}
W.fa.prototype={$isa:1}
W.U.prototype={
ga5:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.e(new P.aH("No elements"))
if(s>1)throw H.e(new P.aH("More than one element"))
return t.firstChild},
L:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.k(s),p=0;p<r;++p)q.T(s,t.firstChild)
return},
j:function(a,b,c){var t=this.a
J.lj(t,c,C.z.h(t.childNodes,b))},
gB:function(a){var t=this.a.childNodes
return new W.co(t,t.length,-1,null,[H.ao(t,"B",0)])},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){return C.z.h(this.a.childNodes,b)},
$asd:function(){return[W.t]},
$asda:function(){return[W.t]},
$asc:function(){return[W.t]},
$asbN:function(){return[W.t]}}
W.t.prototype={
eJ:function(a){var t=a.parentNode
if(t!=null)J.bp(t,a)},
k:function(a){var t=a.nodeValue
return t==null?this.d4(a):t},
T:function(a,b){return a.appendChild(b)},
dS:function(a,b){return a.removeChild(b)},
dT:function(a,b,c){return a.replaceChild(b,c)},
$isr:1,
$isj:1,
$ist:1,
gb5:function(a){return a.previousSibling}}
W.di.prototype={
b6:function(a){return a.previousNode()}}
W.bM.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.t]},
$isd:1,
$asd:function(){return[W.t]},
$isq:1,
$asq:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]}}
W.fj.prototype={$isa:1}
W.fm.prototype={
gl:function(a){return a.length}}
W.a9.prototype={$isr:1,
gl:function(a){return a.length}}
W.fo.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a9]},
$isd:1,
$asd:function(){return[W.a9]},
$isq:1,
$asq:function(){return[W.a9]},
$isc:1,
$asc:function(){return[W.a9]}}
W.fr.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.fs.prototype={
J:function(a,b){return a.send(b)}}
W.dp.prototype={
ef:function(a,b){return a.createContextualFragment(b)},
cR:function(a,b){return a.selectNodeContents(b)}}
W.fC.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gN:function(a){return a.z}}
W.dr.prototype={
J:function(a,b){return a.send(b)}}
W.fE.prototype={
gl:function(a){return a.length}}
W.fI.prototype={$isa:1}
W.aa.prototype={$isr:1,$isj:1}
W.fJ.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.aa]},
$isd:1,
$asd:function(){return[W.aa]},
$isq:1,
$asq:function(){return[W.aa]},
$isc:1,
$asc:function(){return[W.aa]}}
W.ab.prototype={$isr:1}
W.fL.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.ab]},
$isd:1,
$asd:function(){return[W.ab]},
$isq:1,
$asq:function(){return[W.ab]},
$isc:1,
$asc:function(){return[W.ab]}}
W.ac.prototype={$isr:1,
gl:function(a){return a.length}}
W.fR.prototype={
h:function(a,b){return this.bH(a,b)},
aD:function(a,b){var t,s
for(t=0;!0;++t){s=this.dO(a,t)
if(s==null)return
b.$2(s,this.bH(a,s))}},
gl:function(a){return a.length},
bH:function(a,b){return a.getItem(b)},
dO:function(a,b){return a.key(b)}}
W.Z.prototype={$isr:1}
W.am.prototype={}
W.du.prototype={
O:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aL(a,b,c,d)
t=W.md("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.U(s).L(0,new W.U(t))
return s}}
W.fZ.prototype={
O:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aL(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.G.O(t.createElement("table"),b,c,d)
t.toString
t=new W.U(t)
r=t.ga5(t)
r.toString
t=new W.U(r)
q=t.ga5(t)
s.toString
q.toString
new W.U(s).L(0,new W.U(q))
return s}}
W.h_.prototype={
O:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aL(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.G.O(t.createElement("table"),b,c,d)
t.toString
t=new W.U(t)
r=t.ga5(t)
s.toString
r.toString
new W.U(s).L(0,new W.U(r))
return s}}
W.bS.prototype={$isbS:1}
W.ad.prototype={$isr:1,$isj:1}
W.a_.prototype={$isr:1,$isj:1}
W.h2.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a_]},
$isd:1,
$asd:function(){return[W.a_]},
$isq:1,
$asq:function(){return[W.a_]},
$isc:1,
$asc:function(){return[W.a_]}}
W.h3.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.ad]},
$isd:1,
$asd:function(){return[W.ad]},
$isq:1,
$asq:function(){return[W.ad]},
$isc:1,
$asc:function(){return[W.ad]}}
W.h5.prototype={
gl:function(a){return a.length}}
W.ae.prototype={$isr:1}
W.b0.prototype={$isr:1,$isb0:1}
W.h9.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.ae]},
$isd:1,
$asd:function(){return[W.ae]},
$isq:1,
$asq:function(){return[W.ae]},
$isc:1,
$asc:function(){return[W.ae]}}
W.ha.prototype={
gl:function(a){return a.length}}
W.bj.prototype={}
W.hc.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gN:function(a){return a.z}}
W.dx.prototype={
b6:function(a){return a.previousNode()}}
W.aJ.prototype={}
W.hj.prototype={
k:function(a){return String(a)},
$isa:1}
W.hl.prototype={
gl:function(a){return a.length}}
W.ho.prototype={
gl:function(a){return a.length}}
W.hp.prototype={
J:function(a,b){return a.send(b)}}
W.b2.prototype={
gej:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(new P.v("deltaY is not supported"))},
$isr:1,
$isQ:1,
$isb2:1}
W.bX.prototype={
ge3:function(a){var t,s
t=P.X
s=new P.ay(0,$.E,null,[t])
this.dK(a)
this.dU(a,W.kS(new W.hr(new P.ik(s,[t]))))
return s},
dU:function(a,b){return a.requestAnimationFrame(H.c7(b,1))},
dK:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isa:1}
W.hr.prototype={
$1:function(a){this.a.eb(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.hs.prototype={$isa:1}
W.b3.prototype={$isa:1}
W.hA.prototype={
k:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
A:function(a,b){var t,s,r
if(b==null)return!1
t=J.w(b)
if(!t.$isN)return!1
s=a.left
r=t.gb4(b)
if(s==null?r==null:s===r){s=a.top
r=t.gb8(b)
if(s==null?r==null:s===r){s=a.width
r=t.ga4(b)
if(s==null?r==null:s===r){s=a.height
t=t.ga3(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gw:function(a){var t,s,r,q
t=J.aq(a.left)
s=J.aq(a.top)
r=J.aq(a.width)
q=J.aq(a.height)
return W.kN(W.b7(W.b7(W.b7(W.b7(0,t),s),r),q))},
$isN:1,
$asN:function(){},
ga3:function(a){return a.height},
gb4:function(a){return a.left},
gb8:function(a){return a.top},
ga4:function(a){return a.width}}
W.dB.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[P.N]},
$isd:1,
$asd:function(){return[P.N]},
$isq:1,
$asq:function(){return[P.N]},
$isc:1,
$asc:function(){return[P.N]}}
W.hC.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.A]},
$isd:1,
$asd:function(){return[W.A]},
$isq:1,
$asq:function(){return[W.A]},
$isc:1,
$asc:function(){return[W.A]}}
W.hD.prototype={$isa:1}
W.hE.prototype={
ga3:function(a){return a.height},
ga4:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.hV.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a7]},
$isd:1,
$asd:function(){return[W.a7]},
$isq:1,
$asq:function(){return[W.a7]},
$isc:1,
$asc:function(){return[W.a7]}}
W.hW.prototype={$isa:1}
W.dE.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.t]},
$isd:1,
$asd:function(){return[W.t]},
$isq:1,
$asq:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]}}
W.id.prototype={$isa:1}
W.ih.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.ac]},
$isd:1,
$asd:function(){return[W.ac]},
$isq:1,
$asq:function(){return[W.ac]},
$isc:1,
$asc:function(){return[W.ac]}}
W.ii.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.Z]},
$isd:1,
$asd:function(){return[W.Z]},
$isq:1,
$asq:function(){return[W.Z]},
$isc:1,
$asc:function(){return[W.Z]}}
W.iq.prototype={$isa:1}
W.ir.prototype={$isa:1}
W.hy.prototype={
aD:function(a,b){var t,s,r,q,p,o
for(t=this.gH(this),s=t.length,r=this.a,q=J.k(r),p=0;p<t.length;t.length===s||(0,H.D)(t),++p){o=t[p]
b.$2(o,q.aa(r,o))}},
gH:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.F([],[P.u])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.i(s,p.name)}return s},
gdM:function(){return this.a}}
W.hF.prototype={
h:function(a,b){return J.j9(this.a,b)},
gl:function(a){return this.gH(this).length}}
W.hI.prototype={
eF:function(a,b,c,d){return W.ax(this.a,this.b,a,!1,H.aM(this,0))}}
W.jr.prototype={}
W.hJ.prototype={
e_:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.li(r,this.c,t,!1)}},
dw:function(a,b,c,d,e){this.e_()}}
W.hK.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.c_.prototype={
a7:function(a){return $.$get$kM().E(0,W.bu(a))},
Z:function(a,b,c){var t,s,r
t=W.bu(a)
s=$.$get$js()
r=s.h(0,H.i(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
dz:function(a){var t,s
t=$.$get$js()
if(t.gan(t)){for(s=0;s<262;++s)t.j(0,C.S[s],W.nl())
for(s=0;s<12;++s)t.j(0,C.r[s],W.nm())}}}
W.B.prototype={
gB:function(a){return new W.co(a,this.gl(a),-1,null,[H.ao(a,"B",0)])},
$isd:1,
$asd:null,
$isc:1,
$asc:null}
W.dk.prototype={
a7:function(a){return C.a.bT(this.a,new W.fc(a))},
Z:function(a,b,c){return C.a.bT(this.a,new W.fb(a,b,c))}}
W.fc.prototype={
$1:function(a){return a.a7(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.fb.prototype={
$1:function(a){return a.Z(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.c2.prototype={
a7:function(a){return this.a.E(0,W.bu(a))},
Z:function(a,b,c){var t,s
t=W.bu(a)
s=this.c
if(s.E(0,H.i(t)+"::"+b))return this.d.e2(c)
else if(s.E(0,"*::"+b))return this.d.e2(c)
else{s=this.b
if(s.E(0,H.i(t)+"::"+b))return!0
else if(s.E(0,"*::"+b))return!0
else if(s.E(0,H.i(t)+"::*"))return!0
else if(s.E(0,"*::*"))return!0}return!1},
dB:function(a,b,c,d){var t,s,r
this.a.L(0,c)
t=b.aI(0,new W.ie())
s=b.aI(0,new W.ig())
this.b.L(0,t)
r=this.c
r.L(0,C.U)
r.L(0,s)}}
W.ie.prototype={
$1:function(a){return!C.a.E(C.r,a)},
$S:function(){return{func:1,args:[,]}}}
W.ig.prototype={
$1:function(a){return C.a.E(C.r,a)},
$S:function(){return{func:1,args:[,]}}}
W.il.prototype={
Z:function(a,b,c){if(this.d7(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.j9(a,"template")==="")return this.e.E(0,b)
return!1}}
W.im.prototype={
$1:function(a){return"TEMPLATE::"+H.i(a)},
$S:function(){return{func:1,args:[,]}}}
W.ij.prototype={
a7:function(a){var t=J.w(a)
if(!!t.$isbP)return!1
t=!!t.$isK
if(t&&W.bu(a)==="foreignObject")return!1
if(t)return!0
return!1},
Z:function(a,b,c){if(b==="is"||C.i.bi(b,"on"))return!1
return this.a7(a)}}
W.co.prototype={
q:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbJ(J.bo(this.a,t))
this.c=t
return!0}this.sbJ(null)
this.c=s
return!1},
gt:function(){return this.d},
sbJ:function(a){this.d=a}}
W.dj.prototype={}
W.ic.prototype={}
W.dG.prototype={
bf:function(a){new W.io(this).$2(a,null)},
aB:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)J.bp(t,a)}else J.bp(b,a)},
dX:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.lD(a)
r=J.j9(s.gdM(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.S(n)}p="element unprintable"
try{p=J.aC(a)}catch(n){H.S(n)}try{o=W.bu(a)
this.dW(a,b,t,p,o,s,r)}catch(n){if(H.S(n) instanceof P.ah)throw n
else{this.aB(a,b)
window
m="Removing corrupted element "+H.i(p)
if(typeof console!="undefined")console.warn(m)}}},
dW:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.aB(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.a7(a)){this.aB(a,b)
window
t="Removing disallowed element <"+H.i(e)+"> from "+J.aC(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.Z(a,"is",g)){this.aB(a,b)
window
t="Removing disallowed type extension <"+H.i(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gH(f)
s=H.F(t.slice(0),[H.aM(t,0)])
for(r=f.gH(f).length-1,t=f.a,q=J.k(t);r>=0;--r){p=s[r]
if(!this.a.Z(a,J.lT(p),q.aa(t,p))){window
o="Removing disallowed attribute <"+H.i(e)+" "+p+'="'+H.i(q.aa(t,p))+'">'
if(typeof console!="undefined")console.warn(o)
q.aa(t,p)
q.dR(t,p)}}if(!!J.w(a).$isbS)this.bf(a.content)}}
W.io.prototype={
$2:function(a,b){var t,s,r,q
switch(a.nodeType){case 1:this.a.dX(a,b)
break
case 8:case 11:case 3:case 4:break
default:if(b==null){r=a.parentNode
if(r!=null)J.bp(r,a)}else J.bp(b,a)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.lE(t)}catch(q){H.S(q)
r=t
J.bp(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.t,W.t]}}}
W.bv.prototype={$isd:1,
$asd:function(){return[W.a3]},
$isc:1,
$asc:function(){return[W.a3]}}
W.bw.prototype={$isd:1,
$asd:function(){return[W.aa]},
$isc:1,
$asc:function(){return[W.aa]}}
W.bx.prototype={$isd:1,
$asd:function(){return[W.ad]},
$isc:1,
$asc:function(){return[W.ad]}}
W.by.prototype={$isd:1,
$asd:function(){return[W.ad]},
$isc:1,
$asc:function(){return[W.ad]}}
W.bz.prototype={$isd:1,
$asd:function(){return[W.aa]},
$isc:1,
$asc:function(){return[W.aa]}}
W.bA.prototype={$isd:1,
$asd:function(){return[W.a3]},
$isc:1,
$asc:function(){return[W.a3]}}
W.ct.prototype={}
W.cN.prototype={$isd:1,
$asd:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]}}
W.cz.prototype={$isd:1,
$asd:function(){return[W.a8]},
$isc:1,
$asc:function(){return[W.a8]}}
W.cw.prototype={$isd:1,
$asd:function(){return[W.ac]},
$isc:1,
$asc:function(){return[W.ac]}}
W.cG.prototype={$isd:1,
$asd:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]}}
W.cH.prototype={$isd:1,
$asd:function(){return[W.a7]},
$isc:1,
$asc:function(){return[W.a7]}}
W.cI.prototype={$isd:1,
$asd:function(){return[W.A]},
$isc:1,
$asc:function(){return[W.A]}}
W.cL.prototype={$isd:1,
$asd:function(){return[W.a_]},
$isc:1,
$asc:function(){return[W.a_]}}
W.cM.prototype={$isd:1,
$asd:function(){return[W.ab]},
$isc:1,
$asc:function(){return[W.ab]}}
W.cu.prototype={$isd:1,
$asd:function(){return[P.N]},
$isc:1,
$asc:function(){return[P.N]}}
W.cx.prototype={$isd:1,
$asd:function(){return[W.a9]},
$isc:1,
$asc:function(){return[W.a9]}}
W.cy.prototype={$isd:1,
$asd:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]}}
W.cB.prototype={$isd:1,
$asd:function(){return[W.a6]},
$isc:1,
$asc:function(){return[W.a6]}}
W.cC.prototype={$isd:1,
$asd:function(){return[P.u]},
$isc:1,
$asc:function(){return[P.u]}}
W.cD.prototype={$isd:1,
$asd:function(){return[W.ae]},
$isc:1,
$asc:function(){return[W.ae]}}
W.cE.prototype={$isd:1,
$asd:function(){return[W.Z]},
$isc:1,
$asc:function(){return[W.Z]}}
W.cO.prototype={$isd:1,
$asd:function(){return[W.a_]},
$isc:1,
$asc:function(){return[W.a_]}}
W.cP.prototype={$isd:1,
$asd:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]}}
W.cQ.prototype={$isd:1,
$asd:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]}}
W.d_.prototype={$isd:1,
$asd:function(){return[W.a8]},
$isc:1,
$asc:function(){return[W.a8]}}
W.d0.prototype={$isd:1,
$asd:function(){return[W.A]},
$isc:1,
$asc:function(){return[W.A]}}
W.cY.prototype={$isd:1,
$asd:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]}}
W.cZ.prototype={$isd:1,
$asd:function(){return[W.ac]},
$isc:1,
$asc:function(){return[W.ac]}}
W.d3.prototype={$isd:1,
$asd:function(){return[W.a6]},
$isc:1,
$asc:function(){return[W.a6]}}
W.d4.prototype={$isd:1,
$asd:function(){return[W.ab]},
$isc:1,
$asc:function(){return[W.ab]}}
W.d5.prototype={$isd:1,
$asd:function(){return[P.u]},
$isc:1,
$asc:function(){return[P.u]}}
W.d6.prototype={$isd:1,
$asd:function(){return[P.N]},
$isc:1,
$asc:function(){return[P.N]}}
W.cR.prototype={$isd:1,
$asd:function(){return[W.ae]},
$isc:1,
$asc:function(){return[W.ae]}}
W.cS.prototype={$isd:1,
$asd:function(){return[W.Z]},
$isc:1,
$asc:function(){return[W.Z]}}
W.cV.prototype={$isd:1,
$asd:function(){return[W.a9]},
$isc:1,
$asc:function(){return[W.a9]}}
W.d2.prototype={$isd:1,
$asd:function(){return[W.a7]},
$isc:1,
$asc:function(){return[W.a7]}}
P.iz.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.u,,]}}}
P.i4.prototype={}
P.N.prototype={$asN:null}
P.dP.prototype={$isa:1}
P.aO.prototype={$isa:1}
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
gN:function(a){return a.z}}
P.eq.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.er.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gN:function(a){return a.z}}
P.es.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.et.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ew.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ey.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ai.prototype={}
P.aF.prototype={$isa:1}
P.eD.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.as.prototype={$isr:1}
P.eN.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.a1(a,b)},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
a1:function(a,b){return a.getItem(b)},
$isd:1,
$asd:function(){return[P.as]},
$isc:1,
$asc:function(){return[P.as]}}
P.eV.prototype={$isa:1}
P.eW.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.at.prototype={$isr:1}
P.fd.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.a1(a,b)},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
a1:function(a,b){return a.getItem(b)},
$isd:1,
$asd:function(){return[P.at]},
$isc:1,
$asc:function(){return[P.at]}}
P.fk.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fp.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fq.prototype={
gl:function(a){return a.length}}
P.fv.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fw.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bP.prototype={$isa:1,$isbP:1}
P.fW.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.a1(a,b)},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
a1:function(a,b){return a.getItem(b)},
$isd:1,
$asd:function(){return[P.u]},
$isc:1,
$asc:function(){return[P.u]}}
P.K.prototype={
O:function(a,b,c,d){var t,s,r,q,p,o
t=H.F([],[W.dj])
C.a.i(t,W.kL(null))
C.a.i(t,W.kO())
C.a.i(t,new W.ij())
c=new W.dG(new W.dk(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.o).eg(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.U(q)
o=t.ga5(t)
for(t=J.k(p);r=o.firstChild,r!=null;)t.T(p,r)
return p},
$isa:1,
$isK:1}
P.fX.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fY.prototype={$isa:1}
P.dv.prototype={}
P.h1.prototype={$isa:1}
P.bT.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.au.prototype={$isr:1}
P.hb.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.a1(a,b)},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
a1:function(a,b){return a.getItem(b)},
$isd:1,
$asd:function(){return[P.au]},
$isc:1,
$asc:function(){return[P.au]}}
P.hk.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.hm.prototype={$isa:1}
P.hn.prototype={$isa:1}
P.bZ.prototype={$isa:1}
P.i9.prototype={$isa:1}
P.ia.prototype={$isa:1}
P.ib.prototype={$isa:1}
P.cJ.prototype={$isd:1,
$asd:function(){return[P.as]},
$isc:1,
$asc:function(){return[P.as]}}
P.cv.prototype={$isd:1,
$asd:function(){return[P.u]},
$isc:1,
$asc:function(){return[P.u]}}
P.cA.prototype={$isd:1,
$asd:function(){return[P.at]},
$isc:1,
$asc:function(){return[P.at]}}
P.cF.prototype={$isd:1,
$asd:function(){return[P.au]},
$isc:1,
$asc:function(){return[P.au]}}
P.cT.prototype={$isd:1,
$asd:function(){return[P.as]},
$isc:1,
$asc:function(){return[P.as]}}
P.cU.prototype={$isd:1,
$asd:function(){return[P.au]},
$isc:1,
$asc:function(){return[P.au]}}
P.cW.prototype={$isd:1,
$asd:function(){return[P.u]},
$isc:1,
$asc:function(){return[P.u]}}
P.d1.prototype={$isd:1,
$asd:function(){return[P.at]},
$isc:1,
$asc:function(){return[P.at]}}
P.dT.prototype={
gl:function(a){return a.length}}
P.fA.prototype={
bR:function(a,b){return a.activeTexture(b)},
bU:function(a,b,c){return a.attachShader(b,c)},
bV:function(a,b,c){return a.bindBuffer(b,c)},
bW:function(a,b,c){return a.bindFramebuffer(b,c)},
bX:function(a,b,c){return a.bindTexture(b,c)},
bY:function(a,b){return a.blendEquation(b)},
bZ:function(a,b,c){return a.blendFunc(b,c)},
c_:function(a,b,c,d){return a.bufferData(b,c,d)},
c0:function(a,b){return a.checkFramebufferStatus(b)},
c1:function(a,b){return a.clear(b)},
c2:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c3:function(a,b){return a.compileShader(b)},
c4:function(a){return a.createBuffer()},
c5:function(a){return a.createFramebuffer()},
c6:function(a){return a.createProgram()},
c7:function(a,b){return a.createShader(b)},
c8:function(a){return a.createTexture()},
ca:function(a,b){return a.depthMask(b)},
cb:function(a,b){return a.disable(b)},
cc:function(a,b,c,d){return a.drawArrays(b,c,d)},
cd:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
ce:function(a,b){return a.enable(b)},
cf:function(a,b){return a.enableVertexAttribArray(b)},
ci:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
aJ:function(a){return P.iA(a.getContextAttributes())},
b9:function(a){return a.getError()},
ba:function(a,b){return a.getProgramInfoLog(b)},
bb:function(a,b,c){return a.getProgramParameter(b,c)},
bc:function(a,b){return a.getShaderInfoLog(b)},
bd:function(a,b,c){return a.getShaderParameter(b,c)},
be:function(a,b,c){return a.getUniformLocation(b,c)},
cj:function(a,b){return a.linkProgram(b)},
bh:function(a,b,c){return a.shaderSource(b,c)},
bj:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cr:function(a,b,c,d,e,f,g,h,i,j){this.aZ(a,b,c,d,e,f,g,h,i,j)
return},
aZ:function(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
cs:function(a,b,c,d){return a.texParameterf(b,c,d)},
ct:function(a,b,c,d){return a.texParameteri(b,c,d)},
cw:function(a,b,c){return a.uniform1f(b,c)},
cz:function(a,b,c){return a.uniform1fv(b,c)},
cA:function(a,b,c){return a.uniform1i(b,c)},
cB:function(a,b,c){return a.uniform1iv(b,c)},
cC:function(a,b,c){return a.uniform2fv(b,c)},
cD:function(a,b,c){return a.uniform3fv(b,c)},
cE:function(a,b,c){return a.uniform4fv(b,c)},
cF:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cG:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cI:function(a,b){return a.useProgram(b)},
cK:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cL:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fB.prototype={
e5:function(a,b){return a.beginTransformFeedback(b)},
e8:function(a,b){return a.bindVertexArray(b)},
ei:function(a){return a.createVertexArray()},
ep:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
eq:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
er:function(a){return a.endTransformFeedback()},
eQ:function(a,b,c,d,e,f){return a.texStorage2D(b,c,d,e,f)},
eV:function(a,b,c,d){this.dZ(a,b,c,d)
return},
dZ:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
eW:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bR:function(a,b){return a.activeTexture(b)},
bU:function(a,b,c){return a.attachShader(b,c)},
bV:function(a,b,c){return a.bindBuffer(b,c)},
bW:function(a,b,c){return a.bindFramebuffer(b,c)},
bX:function(a,b,c){return a.bindTexture(b,c)},
bY:function(a,b){return a.blendEquation(b)},
bZ:function(a,b,c){return a.blendFunc(b,c)},
c_:function(a,b,c,d){return a.bufferData(b,c,d)},
c0:function(a,b){return a.checkFramebufferStatus(b)},
c1:function(a,b){return a.clear(b)},
c2:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c3:function(a,b){return a.compileShader(b)},
c4:function(a){return a.createBuffer()},
c5:function(a){return a.createFramebuffer()},
c6:function(a){return a.createProgram()},
c7:function(a,b){return a.createShader(b)},
c8:function(a){return a.createTexture()},
ca:function(a,b){return a.depthMask(b)},
cb:function(a,b){return a.disable(b)},
cc:function(a,b,c,d){return a.drawArrays(b,c,d)},
cd:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
ce:function(a,b){return a.enable(b)},
cf:function(a,b){return a.enableVertexAttribArray(b)},
ci:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
aJ:function(a){return P.iA(a.getContextAttributes())},
b9:function(a){return a.getError()},
ba:function(a,b){return a.getProgramInfoLog(b)},
bb:function(a,b,c){return a.getProgramParameter(b,c)},
bc:function(a,b){return a.getShaderInfoLog(b)},
bd:function(a,b,c){return a.getShaderParameter(b,c)},
be:function(a,b,c){return a.getUniformLocation(b,c)},
cj:function(a,b){return a.linkProgram(b)},
bh:function(a,b,c){return a.shaderSource(b,c)},
bj:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cr:function(a,b,c,d,e,f,g,h,i,j){this.aZ(a,b,c,d,e,f,g,h,i,j)
return},
aZ:function(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
cs:function(a,b,c,d){return a.texParameterf(b,c,d)},
ct:function(a,b,c,d){return a.texParameteri(b,c,d)},
cw:function(a,b,c){return a.uniform1f(b,c)},
cz:function(a,b,c){return a.uniform1fv(b,c)},
cA:function(a,b,c){return a.uniform1i(b,c)},
cB:function(a,b,c){return a.uniform1iv(b,c)},
cC:function(a,b,c){return a.uniform2fv(b,c)},
cD:function(a,b,c){return a.uniform3fv(b,c)},
cE:function(a,b,c){return a.uniform4fv(b,c)},
cF:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cG:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cI:function(a,b){return a.useProgram(b)},
cK:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cL:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isa:1}
P.ip.prototype={$isa:1}
P.fM.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return P.iA(this.dN(a,b))},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
dN:function(a,b){return a.item(b)},
$isd:1,
$asd:function(){return[P.aG]},
$isc:1,
$asc:function(){return[P.aG]}}
P.cK.prototype={$isd:1,
$asd:function(){return[P.aG]},
$isc:1,
$asc:function(){return[P.aG]}}
P.cX.prototype={$isd:1,
$asd:function(){return[P.aG]},
$isc:1,
$asc:function(){return[P.aG]}}
B.iV.prototype={
$1:function(a){$.$get$iB().j(0,a.which,!0)},
$S:function(){return{func:1,args:[W.aV]}}}
B.iW.prototype={
$1:function(a){$.$get$iB().j(0,a.which,null)},
$S:function(){return{func:1,args:[W.aV]}}}
B.iX.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.nb=t
$.nc=C.b.ad(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.jC=s-C.b.K(window.innerWidth,2)
$.l8=-(t-C.b.K(window.innerHeight,2))},
$S:function(){return{func:1,args:[W.Q]}}}
B.iY.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.ca=t-C.b.K(window.innerWidth,2)
$.cb=-(s-C.b.K(window.innerHeight,2))
if(a.button===2)$.$get$c8().j(0,"right",!0)
else $.$get$c8().j(0,"left",!0)},
$S:function(){return{func:1,args:[W.Q]}}}
B.iZ.prototype={
$1:function(a){if(a.button===2)$.$get$c8().j(0,"right",null)
else $.$get$c8().j(0,"left",null)},
$S:function(){return{func:1,args:[W.Q]}}}
B.fe.prototype={
dk:function(a,b,c,d){var t
d.toString
W.ax(d,W.nk().$1(d),new B.ff(this),!1,W.b2)
W.ax(d,"mousemove",new B.fg(this),!1,W.Q)
t=W.b0
W.ax(d,"touchstart",new B.fh(),!1,t)
W.ax(d,"touchmove",new B.fi(this),!1,t)
B.nA(null)}}
B.ff.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.at.gej(a)*r.k3
if(C.c.ad(r.fy,t)>0)r.fy=H.a1(C.c.ad(r.fy,t))}catch(q){s=H.S(q)
P.aB(s)}},
$S:function(){return{func:1,args:[W.b2]}}}
B.fg.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=H.a1(t.go+C.b.ad($.jC,$.ca)*0.01)
s=t.id
r=$.cb
q=$.l8
t.id=H.a1(s+(r-q)*0.01)
$.ca=$.jC
$.cb=q}},
$S:function(){return{func:1,args:[W.Q]}}}
B.fh.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.a9(t.clientX)
C.c.a9(t.clientY)
$.ca=s
C.c.a9(t.clientX)
$.cb=C.c.a9(t.clientY)},
$S:function(){return{func:1,args:[W.b0]}}}
B.fi.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.a9(t.clientX)
t=C.c.a9(t.clientY)
r=this.a
r.go=H.a1(r.go+C.b.ad(s,$.ca)*0.01)
r.id=H.a1(r.id+($.cb-t)*0.01)
$.ca=s
$.cb=t},
$S:function(){return{func:1,args:[W.b0]}}}
G.f1.prototype={}
G.bW.prototype={
X:function(a,b){var t=this.d
if(H.a0(!t.G(0,a)))H.af("uniform "+a+" already set")
t.j(0,a,b)},
bs:function(){return this.d},
k:function(a){var t,s,r,q
t=H.F(["{"+new H.aI(H.iF(this),null).k(0)+"}["+this.a+"]"],[P.u])
for(s=this.d,r=s.gH(s),r=r.gB(r);r.q();){q=r.gt()
C.a.i(t,H.i(q)+": "+H.i(s.h(0,q)))}return C.a.a8(t,"\n")}}
G.dV.prototype={}
G.dY.prototype={
cg:function(a,b,c){J.lA(this.a,b)
if(c>0)J.lZ(this.a,b,c)}}
G.cp.prototype={}
G.y.prototype={}
G.bd.prototype={}
G.aR.prototype={
S:function(a){var t=this.e
H.b(!t.G(0,a))
H.b(C.i.bi(a,"a"))
switch($.$get$V().h(0,a).a){case"vec2":t.j(0,a,H.F([],[T.p]))
break
case"vec3":t.j(0,a,H.F([],[T.h]))
break
case"vec4":t.j(0,a,H.F([],[T.aK]))
break
case"float":t.j(0,a,H.F([],[P.P]))
break
case"uvec4":t.j(0,a,H.F([],[[P.c,P.o]]))
break
default:if(H.a0(!1))H.af("unknown type for "+a)}},
d9:function(a){var t,s,r
H.b(!0)
t=this.d.length
for(s=this.c,r=0;r<a;++r,t+=4)C.a.i(s,new G.bd(t,t+1,t+2,t+3))},
bn:function(a){var t,s,r,q,p
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.D)(a),++r){q=a[r]
p=new T.h(new Float32Array(3))
p.v(q)
C.a.i(s,p)}},
da:function(a){var t,s,r,q,p
H.b(!0)
t=this.d
s=t.length
C.a.i(this.b,new G.y(s,s+1,s+2))
for(r=0;r<3;++r){q=a[r]
p=new T.h(new Float32Array(3))
p.v(q)
C.a.i(t,p)}},
au:function(a,b){var t,s,r,q,p,o,n
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.D)(b),++q){p=b[q]
o=new Float32Array(2)
n=p.a
o[1]=n[1]
o[0]=n[0]
r.i(t,new T.p(o))}},
av:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.D)(b),++q){p=b[q]
o=new T.h(new Float32Array(3))
o.v(p)
r.i(t,o)}},
dc:function(a){var t,s,r,q,p
H.b(!0)
t=this.d
s=t.length
C.a.i(this.c,new G.bd(s,s+1,s+2,s+3))
for(r=0;r<4;++r){q=a[r]
p=new T.h(new Float32Array(3))
p.v(q)
C.a.i(t,p)}},
df:function(){var t,s,r,q,p,o,n,m,l,k
t=this.b
H.b(t.length>0||this.c.length>0)
s=this.c
r=new Array(t.length*3+s.length*6)
r.fixed$length=Array
q=H.F(r,[P.o])
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
p+=6}H.b(p===q.length)
return q},
dh:function(a,b){var t,s,r,q,p,o,n,m
t=a*b
H.b(this.d.length===t)
s=[]
this.e.j(0,"aTexUV",s)
for(r=b-1,q=a-1,p=0;p<b;++p)for(o=p/r,n=0;n<a;++n){m=new Float32Array(2)
m[0]=o
m[1]=n/q
C.a.i(s,new T.p(m))}H.b(s.length===t)},
dg:function(a,b,c){var t,s,r,q,p,o,n,m,l
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
C.a.i(t,new G.bd(p+m,l+m,l+n,p+n))
n=m}q=o}},
k:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gH(s),r=r.gB(r);r.q();){q=r.gt()
p=$.$get$V().h(0,q).a
C.a.i(t,H.i(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.a8(t," ")}}
G.bV.prototype={}
G.dw.prototype={}
G.eX.prototype={
dj:function(a){this.X("cDepthTest",!0)
this.X("cDepthWrite",!0)
this.X("cBlendEquation",$.$get$jV())
this.X("cStencilFunc",$.$get$fQ())}}
G.eZ.prototype={
bo:function(a,b,c){var t,s
if(C.i.aO(a,0)===105){if(H.a0(C.b.aM(b.length,c)===this.z))H.af("ChangeAttribute "+this.z)}else{t=C.b.aM(b.length,c)
if(H.a0(t===(this.ch.length/3|0)))H.af("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}this.cy.j(0,a,b)
t=this.d
s=this.r.h(0,a)
J.dL(t.a,34962,s)
J.jH(t.a,34962,b,35048)},
bq:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
ae:function(a,b,c){var t,s,r,q,p,o
t=J.jE(a,0)===105
if(t&&this.z===0)this.z=C.b.aM(b.length,c)
s=this.r
r=this.d
s.j(0,a,J.j5(r.a))
this.bo(a,b,c)
q=$.$get$V().h(0,a)
if(q==null)throw H.e("Unknown canonical "+a)
p=this.x
if(H.a0(p.G(0,a)))H.af("unexpected attribute "+a)
o=p.h(0,a)
J.dM(r.a,this.e)
r.cg(0,o,t?1:0)
s=s.h(0,a)
p=q.br()
J.dL(r.a,34962,s)
J.jS(r.a,o,p,5126,!1,0,0)},
k:function(a){var t,s,r,q
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,r=t.gH(t),r=r.gB(r);r.q();){q=r.gt()
C.a.i(s,H.i(q)+":"+t.h(0,q).length)}return"MESH["+this.a+"] "+C.a.a8(s,"  ")},
saT:function(a){this.cx=a}}
G.fl.prototype={
dd:function(a,b){var t=C.b.cN(a,b)
if(this.z===t)return
this.z=t
this.bu()},
bu:function(){var t,s,r,q,p,o,n
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
bs:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
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
r=!!s.$isaK
k=r?s.gaH(n):1
if(!!s.$ish){j=s.gm(n)
m=s.gn(n)
l=s.gN(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
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
a3.v(this.db)
a3.cm(0,o)
p.j(0,"uPerspectiveViewMatrix",a3)
return p}}
G.e7.prototype={
k:function(a){return"["+this.a+"] "+this.b+" "+this.c+" mode:"+this.d+" ["+this.e.a+"usec]"}}
G.fz.prototype={
ds:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gl(t)===s.gl(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gH(s),s=s.gB(s);s.q();){q=s.gt()
if(!t.G(0,q))C.a.i(r,q)}for(t=this.x,s=new P.c0(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.q();){q=s.d
if(!t.E(0,q))C.a.i(r,q)}return r},
du:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gH(b),s=s.gB(s),r=this.d,q=this.y,p=this.z,o=0;s.q();){n=s.gt()
switch(J.jE(n,0)){case 117:if(q.G(0,n)){m=b.h(0,n)
if(p.G(0,n))H.iT("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.j(0,n,a)
l=$.$get$V().h(0,n)
if(l==null)H.G("unknown "+n)
H.b(q.G(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.ja(r.a,k,m)
else if(!!J.w(m).$iskh)J.lX(r.a,k,m)
break
case"float":if(l.c===0)J.lV(r.a,k,m)
else if(!!J.w(m).$isex)J.lW(r.a,k,m)
break
case"mat4":if(l.c===0){j=H.aA(m,"$isJ").a
J.jR(r.a,k,!1,j)}else if(!!J.w(m).$isex)J.jR(r.a,k,!1,m)
else if(H.a0(!1))H.af("bad unform: "+n)
break
case"mat3":if(l.c===0){j=H.aA(m,"$isal").a
J.jQ(r.a,k,!1,j)}else if(!!J.w(m).$isex)J.jQ(r.a,k,!1,m)
else if(H.a0(!1))H.af("bad unform: "+n)
break
case"vec4":j=l.c
i=r.a
if(j===0)J.jP(i,k,H.aA(m,"$isaK").a)
else J.jP(i,k,m)
break
case"vec3":j=l.c
i=r.a
if(j===0)J.jO(i,k,H.aA(m,"$ish").a)
else J.jO(i,k,m)
break
case"vec2":j=l.c
i=r.a
if(j===0)J.jN(i,k,H.aA(m,"$isp").a)
else J.jN(i,k,m)
break
case"sampler2D":case"sampler2DShadow":j=C.b.V(33984,this.ch)
J.jF(r.a,j)
j=H.aA(m,"$isbU").b
J.bq(r.a,3553,j)
j=this.ch
J.ja(r.a,k,j)
this.ch=this.ch+1
break
case"samplerCube":H.b(n==="uCubeTexture")
j=C.b.V(33984,this.ch)
J.jF(r.a,j)
j=H.aA(m,"$isbU").b
J.bq(r.a,34067,j)
j=this.ch
J.ja(r.a,k,j)
this.ch=this.ch+1
break
default:H.iT("Error: unknow uniform type: "+j)
H.b(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":j=J.H(m,!0)
i=r.a
if(j)J.cc(i,2929)
else J.j6(i,2929)
break
case"cStencilFunc":H.aA(m,"$isbV")
j=m.a
i=r.a
if(j===1281)J.j6(i,2960)
else{J.cc(i,2960)
i=m.b
h=m.c
J.lP(r.a,j,i,h)}break
case"cDepthWrite":J.lu(r.a,m)
break
case"cBlendEquation":H.aA(m,"$isdw")
j=m.a
i=r.a
if(j===1281)J.j6(i,3042)
else{J.cc(i,3042)
i=m.b
h=m.c
J.lm(r.a,i,h)
J.ll(r.a,j)}break}++o
break}}s=Date.now()
""+o
new P.aD(1000*(s-new P.bb(t,!1).a)).k(0)},
de:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t=Date.now()
s=this.d
J.lY(s.a,this.r)
this.ch=0
this.z.a_(0)
for(r=b.length,q=0;q<b.length;b.length===r||(0,H.D)(b),++q){p=b[q]
this.du(p.a,p.bs())}r=this.Q
r.a_(0)
for(o=a.cy,o=o.gH(o),o=o.gB(o);o.q();)r.i(0,o.gt())
n=this.ds()
if(n.length!==0)P.aB("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.i(n)))
J.dM(a.d.a,a.e)
m=this.e.f.length>0
r=a.f
o=a.bq()
l=a.Q
k=a.z
if(m)J.lk(s.a,r)
if(l!==-1){j=s.a
if(k>1)J.ly(j,r,o,l,0,k)
else J.lx(j,r,o,l,0)}else{l=s.a
if(k>1)J.lw(l,r,0,o,k)
else J.lv(l,r,0,o)}if(m)J.lB(s.a)
C.a.i(c,new G.e7(this.a,a.z,a.bq(),r,P.mc(0,0,0,Date.now()-new P.bb(t,!1).a,0,0)))},
dm:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.D)(t),++o){n=t[o]
r.j(0,n,J.jM(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.D)(t),++o){n=t[o]
r.j(0,n,J.jM(q.a,p,n))}}}
G.z.prototype={
br:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.b(!1)
return-1}}}
G.bi.prototype={
bl:function(a){var t,s,r,q,p
H.b(this.b==null)
for(t=a.length,s=this.c,r=this.x,q=0;q<a.length;a.length===t||(0,H.D)(a),++q){p=a[q]
H.b($.$get$V().G(0,p))
H.b(!C.a.E(s,p))
C.a.i(s,p)
r.j(0,p,this.r);++this.r}C.a.aK(s)},
aN:function(a){var t,s,r,q
H.b(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.D)(a),++r){q=a[r]
if(H.a0($.$get$V().G(0,q)))H.af("missing uniform "+q)
H.b(!C.a.E(s,q))
C.a.i(s,q)}C.a.aK(s)},
bm:function(a){var t,s,r
H.b(this.b==null)
for(t=this.e,s=0;s<1;++s){r=a[s]
H.b($.$get$V().G(0,r))
H.b(!C.a.E(t,r))
C.a.i(t,r)}C.a.aK(t)},
dn:function(a,b){H.b(this.b==null)
this.b=this.dv(!0,a,b)},
aw:function(a){return this.dn(a,null)},
dv:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.b(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.D)(t),++o){n=t[o]
m=$.$get$V().h(0,n)
C.a.i(q,"layout (location="+H.i(p.h(0,n))+") in "+m.a+" "+H.i(n)+";")}C.a.i(q,"")
l=r?"in":"out"
if(r)C.a.i(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.D)(t),++o){k=t[o]
m=$.$get$V().h(0,k)
C.a.i(q,l+" "+m.a+" "+H.i(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.D)(t),++o){k=t[o]
m=$.$get$V().h(0,k)
C.a.i(q,l+" "+m.a+" "+H.i(k)+";")}C.a.i(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.D)(t),++o){k=t[o]
m=$.$get$V().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.i(q,"uniform "+m.a+" "+H.i(k)+j+";")}C.a.i(q,"")
C.a.i(q,"void main(void) {")
C.a.L(q,b)
C.a.i(q,"}")
return C.a.a8(q,"\n")}}
G.fK.prototype={
ac:function(a,b,c){var t=this.d.a
t[12]=a
t[13]=b
t[14]=c}}
G.h4.prototype={
bt:function(a,b){var t=this.e
if(t!==1)J.lR(a.a,b,34046,t)
t=this.r
J.dO(a.a,b,10240,t)
t=this.f
J.dO(a.a,b,10241,t)
if(this.b){J.dO(a.a,b,10242,33071)
J.dO(a.a,b,10243,33071)}}}
G.bU.prototype={
k:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.hg.prototype={
k:function(a){return"TypedTexture["+this.a+", "+this.x+", "+H.i(this.f)+" X "+H.i(this.r)+"]"}}
G.hh.prototype={
k:function(a){return"TypedTextureMutable["+this.a+", "+this.x+", "+this.f+" X "+H.i(this.r)+"]"}}
R.fO.prototype={
dA:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.mS("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.u).bA(r,"float")
r.setProperty(p,"left","")
p=C.u.bA(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.p.T(t,s)}return t},
dq:function(a,b,c){var t,s,r
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
J.j2(this.a,s)
r=this.dA(b,c,90,30)
this.d=r
J.j2(this.a,r)
t=t.createElement("div")
this.c=t
J.j2(this.a,t)}}
R.fP.prototype={
dt:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.w.eU(s,2)+" fps"
t=this.c;(t&&C.p).d_(t,b)
r=C.b.K(30*C.w.e9(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.p).T(t,q)}}
A.aX.prototype={
k:function(a){return"NODE["+this.a+"]"}}
A.bO.prototype={}
A.fy.prototype={
bp:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.d
s=this.r
r=this.z
q=this.Q
p=t.a
t=t.b
J.j3(p.a,36160,t)
H.b(r>0&&q>0)
J.m_(p.a,this.x,this.y,r,q)
if(s!==0)J.lo(p.a,s)
for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.D)(t),++o){n=t[o]
m=n.e
C.a.i(m,new G.bW(P.I(),"transforms",!1,!0))
l=new T.J(new Float32Array(16))
l.F()
for(r=n.f,q=r.length,p=n.d,k=0;k<r.length;r.length===q||(0,H.D)(r),++k)A.kZ(p,r[k],l,a,m)
m.pop()}},
dl:function(a,b,c){if(this.d==null)this.d=new G.cp(this.e,null,null,null,null)}}
B.fH.prototype={
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
$S:function(){return{func:1,v:true,args:[P.P,T.h]}}}
A.iG.prototype={
$2:function(a,b){var t=536870911&a+J.aq(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(){return{func:1,args:[P.o,P.r]}}}
T.al.prototype={
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
k:function(a){return"[0] "+this.W(0).k(0)+"\n[1] "+this.W(1).k(0)+"\n[2] "+this.W(2).k(0)+"\n"},
h:function(a,b){return this.a[b]},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.al){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gw:function(a){return A.dI(this.a)},
W:function(a){var t,s
t=new Float32Array(H.f(3))
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.h(t)},
ee:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
T.J.prototype={
ab:function(a,b,c){H.b(a<4)
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
k:function(a){return"[0] "+this.W(0).k(0)+"\n[1] "+this.W(1).k(0)+"\n[2] "+this.W(2).k(0)+"\n[3] "+this.W(3).k(0)+"\n"},
h:function(a,b){return this.a[b]},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.J){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gw:function(a){return A.dI(this.a)},
W:function(a){var t,s
t=new Float32Array(H.f(4))
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.aK(t)},
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
cm:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.p.prototype={
k:function(a){var t=this.a
return"["+H.i(t[0])+","+H.i(t[1])+"]"},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.p){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gw:function(a){return A.dI(this.a)},
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
gw:function(a){return A.dI(this.a)},
h:function(a,b){return this.a[b]},
gl:function(a){return Math.sqrt(this.gP())},
gP:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
C:function(a){var t,s,r
t=Math.sqrt(this.gP())
if(t===0)return 0
s=1/t
r=this.a
r[0]=r[0]*s
r[1]=r[1]*s
r[2]=r[2]*s
return t},
b3:function(a){var t,s
t=a.a
s=this.a
return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]},
c9:function(a){var t,s,r,q,p,o,n,m
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
aC:function(a,b){var t,s
t=a.a
s=this.a
s[0]=s[0]+t[0]*b
s[1]=s[1]+t[1]*b
s[2]=s[2]+t[2]*b},
at:function(a){var t,s
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
gN:function(a){return this.a[2]}}
T.aK.prototype={
k:function(a){var t=this.a
return H.i(t[0])+","+H.i(t[1])+","+H.i(t[2])+","+H.i(t[3])},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aK){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gw:function(a){return A.dI(this.a)},
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
gaH:function(a){return this.a[3]}}
V.iR.prototype={
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
s.id=0}r=H.a1(C.c.ea(s.id,-1.4707963267948965,1.4707963267948965))
s.id=r
q=s.fy
p=s.go
o=q*Math.cos(r)
s.ac(o*Math.cos(p),q*Math.sin(r),o*Math.sin(p))
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
i.at(p)
i.C(0)
h=l.c9(i)
h.C(0)
g=i.c9(h)
g.C(0)
p=h.b3(k)
f=g.b3(k)
k=i.b3(k)
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
m=Math.sqrt(m.gP())
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
s=$.$get$l2().checked?this.e:$.$get$fQ()
this.f.d.j(0,"cStencilFunc",s)
b3=[]
this.d.bp(b3)
this.r.bp(b3)
b4=[]
for(s=b3.length,b5=0;b5<b3.length;b3.length===s||(0,H.D)(b3),++b5)C.a.i(b4,b3[b5].k(0))
C.au.ge3(window).cu(this)
this.b.dt(t.a,C.a.a8(b4,"<br>"))},
$S:function(){return{func:1,v:true,args:[P.X]}}}
J.a.prototype.d4=J.a.prototype.k
J.bE.prototype.d6=J.bE.prototype.k
P.Y.prototype.d5=P.Y.prototype.aI
W.a5.prototype.aL=W.a5.prototype.O
W.c2.prototype.d7=W.c2.prototype.Z;(function installTearOffs(){installTearOff(H.b5.prototype,"geE",0,0,0,null,["$0"],["aF"],0)
installTearOff(H.an.prototype,"gcS",0,0,0,null,["$1"],["M"],2)
installTearOff(H.b4.prototype,"gel",0,0,0,null,["$1"],["a0"],2)
installTearOff(P,"n7",1,0,0,null,["$1"],["mP"],1)
installTearOff(P,"n8",1,0,0,null,["$1"],["mQ"],1)
installTearOff(P,"n9",1,0,0,null,["$1"],["mR"],1)
installTearOff(P,"kW",1,0,0,null,["$0"],["n5"],0)
installTearOff(P.ay.prototype,"gdF",0,0,0,null,["$2","$1"],["ax","dG"],5)
installTearOff(P,"ne",1,0,0,null,["$2"],["m6"],6)
installTearOff(W,"nk",1,0,0,null,["$1"],["me"],7)
installTearOff(W,"nl",1,0,0,null,["$4"],["mV"],4)
installTearOff(W,"nm",1,0,0,null,["$4"],["mW"],4)
installTearOff(W.di.prototype,"gb5",0,1,0,null,["$0"],["b6"],3)
installTearOff(W.dx.prototype,"gb5",0,1,0,null,["$0"],["b6"],3)
installTearOff(V,"le",1,0,0,null,["$0"],["nu"],0)})();(function inheritance(){inherit(P.r,null)
var t=P.r
inherit(H.jg,t)
inherit(J.a,t)
inherit(J.dS,t)
inherit(P.Y,t)
inherit(H.db,t)
inherit(P.d7,t)
inherit(H.cn,t)
inherit(H.b9,t)
inherit(H.i2,t)
inherit(H.b5,t)
inherit(H.hG,t)
inherit(H.b6,t)
inherit(H.i1,t)
inherit(H.hz,t)
inherit(H.bh,t)
inherit(H.h6,t)
inherit(H.ar,t)
inherit(H.an,t)
inherit(H.b4,t)
inherit(H.fx,t)
inherit(H.hd,t)
inherit(P.bc,t)
inherit(H.dF,t)
inherit(H.aI,t)
inherit(H.aj,t)
inherit(H.eO,t)
inherit(H.eQ,t)
inherit(P.hB,t)
inherit(P.dC,t)
inherit(P.ay,t)
inherit(P.dA,t)
inherit(P.fS,t)
inherit(P.fT,t)
inherit(P.b8,t)
inherit(P.is,t)
inherit(P.fG,t)
inherit(P.i_,t)
inherit(P.c0,t)
inherit(P.bN,t)
inherit(P.x,t)
inherit(P.i0,t)
inherit(P.az,t)
inherit(P.M,t)
inherit(P.bb,t)
inherit(P.X,t)
inherit(P.aD,t)
inherit(P.dt,t)
inherit(P.hL,t)
inherit(P.eb,t)
inherit(P.c,t)
inherit(P.aG,t)
inherit(P.aY,t)
inherit(P.bQ,t)
inherit(P.u,t)
inherit(P.bR,t)
inherit(W.e_,t)
inherit(W.hy,t)
inherit(W.c_,t)
inherit(W.B,t)
inherit(W.dk,t)
inherit(W.c2,t)
inherit(W.ij,t)
inherit(W.co,t)
inherit(W.dj,t)
inherit(W.ic,t)
inherit(W.dG,t)
inherit(P.i4,t)
inherit(G.f1,t)
inherit(G.dY,t)
inherit(G.cp,t)
inherit(G.y,t)
inherit(G.bd,t)
inherit(G.aR,t)
inherit(G.bV,t)
inherit(G.dw,t)
inherit(G.e7,t)
inherit(G.z,t)
inherit(G.bi,t)
inherit(G.h4,t)
inherit(G.bU,t)
inherit(R.fO,t)
inherit(T.al,t)
inherit(T.J,t)
inherit(T.p,t)
inherit(T.h,t)
inherit(T.aK,t)
t=J.a
inherit(J.eJ,t)
inherit(J.eK,t)
inherit(J.bE,t)
inherit(J.aS,t)
inherit(J.be,t)
inherit(J.aT,t)
inherit(H.bH,t)
inherit(H.bg,t)
inherit(W.j,t)
inherit(W.a3,t)
inherit(W.ce,t)
inherit(W.dW,t)
inherit(W.A,t)
inherit(W.ct,t)
inherit(W.e1,t)
inherit(W.e2,t)
inherit(W.e3,t)
inherit(W.cj,t)
inherit(W.ck,t)
inherit(W.cl,t)
inherit(W.cC,t)
inherit(W.e6,t)
inherit(W.l,t)
inherit(W.cB,t)
inherit(W.a7,t)
inherit(W.eB,t)
inherit(W.cN,t)
inherit(W.eS,t)
inherit(W.eY,t)
inherit(W.a8,t)
inherit(W.cz,t)
inherit(W.fa,t)
inherit(W.di,t)
inherit(W.cy,t)
inherit(W.fj,t)
inherit(W.bj,t)
inherit(W.a9,t)
inherit(W.cx,t)
inherit(W.am,t)
inherit(W.dp,t)
inherit(W.ab,t)
inherit(W.cM,t)
inherit(W.ac,t)
inherit(W.fR,t)
inherit(W.Z,t)
inherit(W.cL,t)
inherit(W.h5,t)
inherit(W.ae,t)
inherit(W.cD,t)
inherit(W.ha,t)
inherit(W.dx,t)
inherit(W.hj,t)
inherit(W.ho,t)
inherit(W.hA,t)
inherit(W.cu,t)
inherit(W.cI,t)
inherit(W.cH,t)
inherit(W.cG,t)
inherit(W.cw,t)
inherit(W.cE,t)
inherit(W.iq,t)
inherit(W.ir,t)
inherit(P.as,t)
inherit(P.cJ,t)
inherit(P.at,t)
inherit(P.cA,t)
inherit(P.fp,t)
inherit(P.fq,t)
inherit(P.fv,t)
inherit(P.cv,t)
inherit(P.au,t)
inherit(P.cF,t)
inherit(P.hn,t)
inherit(P.dT,t)
inherit(P.fA,t)
inherit(P.fB,t)
inherit(P.ip,t)
inherit(P.cK,t)
t=J.bE
inherit(J.fn,t)
inherit(J.b1,t)
inherit(J.aU,t)
inherit(J.jf,J.aS)
t=J.be
inherit(J.d9,t)
inherit(J.d8,t)
t=P.Y
inherit(H.d,t)
inherit(H.dc,t)
inherit(H.dz,t)
t=H.d
inherit(H.bf,t)
inherit(H.eP,t)
inherit(H.ea,H.dc)
t=P.d7
inherit(H.eT,t)
inherit(H.hq,t)
t=H.bf
inherit(H.bF,t)
inherit(P.eR,t)
t=H.b9
inherit(H.j_,t)
inherit(H.j0,t)
inherit(H.hY,t)
inherit(H.hH,t)
inherit(H.eF,t)
inherit(H.eG,t)
inherit(H.i3,t)
inherit(H.h7,t)
inherit(H.h8,t)
inherit(H.j1,t)
inherit(H.iL,t)
inherit(H.iM,t)
inherit(H.iN,t)
inherit(H.iO,t)
inherit(H.iP,t)
inherit(H.h0,t)
inherit(H.eL,t)
inherit(H.iH,t)
inherit(H.iI,t)
inherit(H.iJ,t)
inherit(P.hv,t)
inherit(P.hu,t)
inherit(P.hw,t)
inherit(P.hx,t)
inherit(P.hM,t)
inherit(P.hQ,t)
inherit(P.hN,t)
inherit(P.hO,t)
inherit(P.hP,t)
inherit(P.hT,t)
inherit(P.hU,t)
inherit(P.hS,t)
inherit(P.hR,t)
inherit(P.fU,t)
inherit(P.fV,t)
inherit(P.iv,t)
inherit(P.i7,t)
inherit(P.i6,t)
inherit(P.i8,t)
inherit(P.eU,t)
inherit(P.e8,t)
inherit(P.e9,t)
inherit(W.iy,t)
inherit(W.hr,t)
inherit(W.hK,t)
inherit(W.fc,t)
inherit(W.fb,t)
inherit(W.ie,t)
inherit(W.ig,t)
inherit(W.im,t)
inherit(W.io,t)
inherit(P.iz,t)
inherit(B.iV,t)
inherit(B.iW,t)
inherit(B.iX,t)
inherit(B.iY,t)
inherit(B.iZ,t)
inherit(B.ff,t)
inherit(B.fg,t)
inherit(B.fh,t)
inherit(B.fi,t)
inherit(B.fH,t)
inherit(A.iG,t)
inherit(V.iR,t)
t=H.hz
inherit(H.bk,t)
inherit(H.c3,t)
t=P.bc
inherit(H.dl,t)
inherit(H.eM,t)
inherit(H.hi,t)
inherit(H.hf,t)
inherit(H.dX,t)
inherit(H.fD,t)
inherit(P.cd,t)
inherit(P.dm,t)
inherit(P.ah,t)
inherit(P.v,t)
inherit(P.dy,t)
inherit(P.aH,t)
inherit(P.a4,t)
inherit(P.e0,t)
t=H.h0
inherit(H.fN,t)
inherit(H.bs,t)
inherit(H.ht,P.cd)
t=H.bg
inherit(H.f2,t)
inherit(H.de,t)
t=H.de
inherit(H.bJ,t)
inherit(H.bI,t)
inherit(H.bK,H.bJ)
inherit(H.df,H.bK)
inherit(H.bL,H.bI)
inherit(H.dg,H.bL)
t=H.df
inherit(H.dd,t)
inherit(H.f3,t)
t=H.dg
inherit(H.f4,t)
inherit(H.f5,t)
inherit(H.f6,t)
inherit(H.f7,t)
inherit(H.f8,t)
inherit(H.dh,t)
inherit(H.f9,t)
inherit(P.ik,P.hB)
inherit(P.i5,P.is)
inherit(P.dD,H.aj)
inherit(P.fF,P.fG)
inherit(P.hX,P.fF)
inherit(P.hZ,P.hX)
inherit(P.da,P.bN)
t=P.X
inherit(P.P,t)
inherit(P.o,t)
t=P.ah
inherit(P.dq,t)
inherit(P.eE,t)
t=W.j
inherit(W.t,t)
inherit(W.bv,t)
inherit(W.dZ,t)
inherit(W.ev,t)
inherit(W.bC,t)
inherit(W.bG,t)
inherit(W.fs,t)
inherit(W.dr,t)
inherit(W.fI,t)
inherit(W.aa,t)
inherit(W.bw,t)
inherit(W.ad,t)
inherit(W.a_,t)
inherit(W.bx,t)
inherit(W.hl,t)
inherit(W.hp,t)
inherit(W.bX,t)
inherit(W.hs,t)
inherit(W.b3,t)
inherit(W.id,t)
t=W.t
inherit(W.a5,t)
inherit(W.aQ,t)
inherit(W.bt,t)
inherit(W.ci,t)
inherit(W.hD,t)
t=W.a5
inherit(W.m,t)
inherit(P.K,t)
t=W.m
inherit(W.dQ,t)
inherit(W.dR,t)
inherit(W.aP,t)
inherit(W.cf,t)
inherit(W.ch,t)
inherit(W.ez,t)
inherit(W.cr,t)
inherit(W.bD,t)
inherit(W.fE,t)
inherit(W.du,t)
inherit(W.fZ,t)
inherit(W.h_,t)
inherit(W.bS,t)
inherit(W.hW,t)
inherit(W.bA,W.bv)
inherit(W.dU,W.bA)
inherit(W.ba,W.ct)
inherit(W.e4,W.ck)
inherit(W.d5,W.cC)
inherit(W.e5,W.d5)
inherit(W.a6,W.ce)
inherit(W.d3,W.cB)
inherit(W.eu,W.d3)
inherit(W.cY,W.cN)
inherit(W.bB,W.cY)
inherit(W.cs,W.bt)
inherit(W.eC,W.bC)
inherit(W.aJ,W.l)
t=W.aJ
inherit(W.aV,t)
inherit(W.Q,t)
inherit(W.b0,t)
inherit(W.f_,W.bG)
inherit(W.d_,W.cz)
inherit(W.f0,W.d_)
inherit(W.U,P.da)
inherit(W.cP,W.cy)
inherit(W.bM,W.cP)
t=W.bj
inherit(W.fm,t)
inherit(W.fC,t)
inherit(W.hc,t)
inherit(W.cV,W.cx)
inherit(W.fo,W.cV)
inherit(W.fr,W.am)
inherit(W.bz,W.bw)
inherit(W.fJ,W.bz)
inherit(W.d4,W.cM)
inherit(W.fL,W.d4)
inherit(W.cO,W.cL)
inherit(W.h2,W.cO)
inherit(W.by,W.bx)
inherit(W.h3,W.by)
inherit(W.cR,W.cD)
inherit(W.h9,W.cR)
inherit(W.b2,W.Q)
inherit(W.d6,W.cu)
inherit(W.dB,W.d6)
inherit(W.d0,W.cI)
inherit(W.hC,W.d0)
inherit(W.hE,W.cl)
inherit(W.d2,W.cH)
inherit(W.hV,W.d2)
inherit(W.cQ,W.cG)
inherit(W.dE,W.cQ)
inherit(W.cZ,W.cw)
inherit(W.ih,W.cZ)
inherit(W.cS,W.cE)
inherit(W.ii,W.cS)
inherit(W.hF,W.hy)
inherit(W.hI,P.fS)
inherit(W.jr,W.hI)
inherit(W.hJ,P.fT)
inherit(W.il,W.c2)
inherit(P.N,P.i4)
t=P.K
inherit(P.aF,t)
inherit(P.aO,t)
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
inherit(P.ew,t)
inherit(P.eV,t)
inherit(P.eW,t)
inherit(P.fk,t)
inherit(P.bP,t)
inherit(P.fY,t)
inherit(P.hm,t)
inherit(P.bZ,t)
inherit(P.i9,t)
inherit(P.ia,t)
inherit(P.ib,t)
t=P.aF
inherit(P.dP,t)
inherit(P.ey,t)
inherit(P.ai,t)
inherit(P.eD,t)
inherit(P.fX,t)
inherit(P.dv,t)
inherit(P.hk,t)
inherit(P.cT,P.cJ)
inherit(P.eN,P.cT)
inherit(P.d1,P.cA)
inherit(P.fd,P.d1)
inherit(P.fw,P.ai)
inherit(P.cW,P.cv)
inherit(P.fW,P.cW)
t=P.dv
inherit(P.h1,t)
inherit(P.bT,t)
inherit(P.cU,P.cF)
inherit(P.hb,P.cU)
inherit(P.cX,P.cK)
inherit(P.fM,P.cX)
t=G.f1
inherit(G.fK,t)
inherit(G.bW,t)
inherit(G.eZ,t)
inherit(G.fz,t)
inherit(A.bO,t)
inherit(A.fy,t)
t=G.fK
inherit(G.dV,t)
inherit(A.aX,t)
inherit(B.fe,G.dV)
t=G.bW
inherit(G.eX,t)
inherit(G.fl,t)
t=G.bU
inherit(G.hg,t)
inherit(G.hh,t)
inherit(R.fP,R.fO)
mixin(H.bI,P.x)
mixin(H.bJ,P.x)
mixin(H.bK,H.cn)
mixin(H.bL,H.cn)
mixin(P.bN,P.x)
mixin(W.bv,P.x)
mixin(W.bw,P.x)
mixin(W.bx,P.x)
mixin(W.by,W.B)
mixin(W.bz,W.B)
mixin(W.bA,W.B)
mixin(W.ct,W.e_)
mixin(W.cN,P.x)
mixin(W.cz,P.x)
mixin(W.cw,P.x)
mixin(W.cG,P.x)
mixin(W.cH,P.x)
mixin(W.cI,P.x)
mixin(W.cL,P.x)
mixin(W.cM,P.x)
mixin(W.cu,P.x)
mixin(W.cx,P.x)
mixin(W.cy,P.x)
mixin(W.cB,P.x)
mixin(W.cC,P.x)
mixin(W.cD,P.x)
mixin(W.cE,P.x)
mixin(W.cO,W.B)
mixin(W.cP,W.B)
mixin(W.cQ,W.B)
mixin(W.d_,W.B)
mixin(W.d0,W.B)
mixin(W.cY,W.B)
mixin(W.cZ,W.B)
mixin(W.d3,W.B)
mixin(W.d4,W.B)
mixin(W.d5,W.B)
mixin(W.d6,W.B)
mixin(W.cR,W.B)
mixin(W.cS,W.B)
mixin(W.cV,W.B)
mixin(W.d2,W.B)
mixin(P.cJ,P.x)
mixin(P.cv,P.x)
mixin(P.cA,P.x)
mixin(P.cF,P.x)
mixin(P.cT,W.B)
mixin(P.cU,W.B)
mixin(P.cW,W.B)
mixin(P.d1,W.B)
mixin(P.cK,P.x)
mixin(P.cX,W.B)})();(function constants(){C.o=W.aP.prototype
C.H=W.cf.prototype
C.u=W.ba.prototype
C.p=W.ch.prototype
C.I=W.cj.prototype
C.J=W.cr.prototype
C.m=W.cs.prototype
C.K=J.a.prototype
C.a=J.aS.prototype
C.w=J.d8.prototype
C.b=J.d9.prototype
C.c=J.be.prototype
C.i=J.aT.prototype
C.R=J.aU.prototype
C.V=H.dd.prototype
C.z=W.bM.prototype
C.A=J.fn.prototype
C.B=W.dp.prototype
C.G=W.du.prototype
C.t=J.b1.prototype
C.at=W.b2.prototype
C.au=W.bX.prototype
C.f=new P.i5()
C.v=new P.aD(0)
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
C.W=new G.z("vec3","vertex btangents",0)
C.d=new G.z("vec3","",0)
C.X=new G.z("vec4","delta from light",0)
C.n=new G.z("","",0)
C.C=new G.z("vec3","vertex coordinates",0)
C.Y=new G.z("vec3","vertex binormals",0)
C.D=new G.z("vec4","for wireframe",0)
C.Z=new G.z("vec4","per vertex color",0)
C.a_=new G.z("float","for normal maps",0)
C.j=new G.z("mat4","",0)
C.a1=new G.z("mat4","",4)
C.a0=new G.z("mat4","",128)
C.e=new G.z("float","",0)
C.a2=new G.z("float","",4)
C.a3=new G.z("float","depth for shadowmaps",0)
C.h=new G.z("sampler2D","",0)
C.a4=new G.z("float","for bump maps",0)
C.a5=new G.z("vec2","texture uvs",0)
C.a6=new G.z("float","time since program start in sec",0)
C.k=new G.z("vec2","",0)
C.a7=new G.z("samplerCube","",0)
C.l=new G.z("vec4","",0)
C.a8=new G.z("vec3","vertex normals",0)
C.a9=new G.z("sampler2DShadow","",0)
C.E=new G.z("vec3","per vertex color",0)
C.F=new G.z("mat3","",0)
C.aa=new G.z("vec3","vertex tangents",0)
C.ab=H.O("nF")
C.ac=H.O("nG")
C.ad=H.O("ex")
C.ae=H.O("nH")
C.af=H.O("nI")
C.ag=H.O("kh")
C.ah=H.O("nJ")
C.ai=H.O("kk")
C.aj=H.O("aY")
C.ak=H.O("u")
C.al=H.O("kF")
C.am=H.O("kG")
C.an=H.O("nK")
C.ao=H.O("kH")
C.ap=H.O("az")
C.aq=H.O("P")
C.ar=H.O("o")
C.as=H.O("X")})();(function staticFields(){$.ko="$cachedFunction"
$.kp="$cachedInvocation"
$.jZ=null
$.jX=null
$.jt=!1
$.jx=null
$.kT=null
$.la=null
$.iC=null
$.iK=null
$.jy=null
$.bl=null
$.c4=null
$.c5=null
$.ju=!1
$.E=C.f
$.kd=0
$.aE=null
$.jc=null
$.kb=null
$.ka=null
$.k8=null
$.k7=null
$.k6=null
$.k5=null
$.nb=0
$.nc=0
$.jC=0
$.l8=0
$.ca=0
$.cb=0
$.nB=!1
$.l1=0})();(function lazyInitializers(){lazy($,"k4","$get$k4",function(){return H.l5("_$dart_dartClosure")})
lazy($,"jh","$get$jh",function(){return H.l5("_$dart_js")})
lazy($,"ki","$get$ki",function(){return H.mo()})
lazy($,"kj","$get$kj",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.kd
$.kd=t+1
t="expando$key$"+t}return new P.eb(null,t,[P.o])})
lazy($,"ku","$get$ku",function(){return H.av(H.he({
toString:function(){return"$receiver$"}}))})
lazy($,"kv","$get$kv",function(){return H.av(H.he({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"kw","$get$kw",function(){return H.av(H.he(null))})
lazy($,"kx","$get$kx",function(){return H.av(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kB","$get$kB",function(){return H.av(H.he(void 0))})
lazy($,"kC","$get$kC",function(){return H.av(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kz","$get$kz",function(){return H.av(H.kA(null))})
lazy($,"ky","$get$ky",function(){return H.av(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"kE","$get$kE",function(){return H.av(H.kA(void 0))})
lazy($,"kD","$get$kD",function(){return H.av(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"jq","$get$jq",function(){return P.mO()})
lazy($,"c6","$get$c6",function(){return[]})
lazy($,"k3","$get$k3",function(){return{}})
lazy($,"kM","$get$kM",function(){return P.jj(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"js","$get$js",function(){return P.I()})
lazy($,"iB","$get$iB",function(){return P.kl(P.o,P.az)})
lazy($,"c8","$get$c8",function(){return P.kl(P.u,P.az)})
lazy($,"fQ","$get$fQ",function(){return new G.bV(1281,0,4294967295)})
lazy($,"jV","$get$jV",function(){return new G.dw(1281,1281,1281)})
lazy($,"V","$get$V",function(){return P.aW(["cBlendEquation",C.n,"cDepthWrite",C.n,"cDepthTest",C.n,"cStencilFunc",C.n,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColors",C.E,"aColorAlpha",C.Z,"aPosition",C.C,"aTexUV",C.a5,"aNormal",C.a8,"aBinormal",C.Y,"aCenter",C.D,"aPointSize",C.e,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.aa,"aBitangent",C.W,"iaRotation",C.l,"iaTranslation",C.d,"iaScale",C.d,"vColor",C.E,"vTexUV",C.k,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.C,"vPositionFromLight",C.X,"vCenter",C.D,"vDepth",C.a3,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.F,"uConvolutionMatrix",C.F,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a9,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a7,"uAnimationTable",C.h,"uTime",C.a6,"uCameraNear",C.e,"uCameraFar",C.e,"uFogNear",C.e,"uFogFar",C.e,"uPointSize",C.e,"uScale",C.e,"uAngle",C.e,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.e,"uShininess",C.e,"uShadowBias",C.e,"uOpacity",C.e,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.d,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a0,"uLightDescs",C.a1,"uLightCount",C.e,"uLightTypes",C.a2,"uBumpScale",C.a4,"uNormalScale",C.a_])})
lazy($,"jn","$get$jn",function(){var t=new G.h4(!1,!1,!1,!0,1,9729,9729)
t.d=!1
t.b=!0
t.f=9728
t.r=9728
return t})
lazy($,"kc","$get$kc",function(){return G.jm("empty-mat")})
lazy($,"k1","$get$k1",function(){return T.L(0,0,1)})
lazy($,"k2","$get$k2",function(){return T.L(1,0,0)})
lazy($,"l_","$get$l_",function(){var t=new G.bi("uv-passthru",null,[],[],[],[],0,P.I())
t.bl(["aPosition","aTexUV"])
t.bm(["vTexUV"])
t.aw(["gl_Position = vec4(aPosition, 1.0);","vTexUV = aTexUV;"])
return t})
lazy($,"kY","$get$kY",function(){return $.$get$l_()})
lazy($,"kX","$get$kX",function(){var t=new G.bi("copyF",null,[],[],[],[],0,P.I())
t.bm(["vTexUV"])
t.aN(["uTexture"])
t.aw(["oFragColor = texture(uTexture, vTexUV);"])
return t})
lazy($,"lc","$get$lc",function(){var t=new G.bi("SolidColor",null,[],[],[],[],0,P.I())
t.bl(["aPosition"])
t.aN(["uPerspectiveViewMatrix","uModelMatrix"])
t.aw(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"])
return t})
lazy($,"lb","$get$lb",function(){var t=new G.bi("SolidColorF",null,[],[],[],[],0,P.I())
t.aN(["uColor"])
t.aw(["oFragColor = vec4( uColor, 1.0 );"])
return t})
lazy($,"kJ","$get$kJ",function(){return[T.L(0,0,1),T.L(0,0,-1),T.L(0,1,0),T.L(0,-1,0),T.L(1,0,0),T.L(-1,0,0)]})
lazy($,"kf","$get$kf",function(){return[new G.y(0,11,5),new G.y(0,5,1),new G.y(0,1,7),new G.y(0,7,10),new G.y(0,10,11),new G.y(1,5,9),new G.y(5,11,4),new G.y(11,10,2),new G.y(10,7,6),new G.y(7,1,8),new G.y(3,9,4),new G.y(3,4,2),new G.y(3,2,6),new G.y(3,6,8),new G.y(3,8,9),new G.y(4,9,5),new G.y(2,4,11),new G.y(6,2,10),new G.y(8,6,7),new G.y(9,8,1)]})
lazy($,"lf","$get$lf",function(){return(1+P.nC(5))/2})
lazy($,"kg","$get$kg",function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=$.$get$lf()
s=T.L(-1,t,0)
s.C(0)
r=T.L(1,t,0)
r.C(0)
q=T.L(-1,-t,0)
q.C(0)
p=T.L(1,-t,0)
p.C(0)
o=T.L(0,-1,t)
o.C(0)
n=T.L(0,1,t)
n.C(0)
m=T.L(0,-1,-t)
m.C(0)
l=T.L(0,1,-t)
l.C(0)
k=T.L(t,0,-1)
k.C(0)
j=T.L(t,0,1)
j.C(0)
i=T.L(-t,0,-1)
i.C(0)
t=T.L(-t,0,1)
t.C(0)
return[s,r,q,p,o,n,m,l,k,j,i,t]})
lazy($,"l2","$get$l2",function(){return H.aA(C.m.cn(W.nf(),"#stencil"),"$isbD")})})()
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
mangledGlobalNames:{o:"int",P:"double",X:"num",u:"String",az:"bool",aY:"Null",c:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.t},{func:1,ret:P.az,args:[W.a5,P.u,P.u,W.c_]},{func:1,v:true,args:[P.r],opt:[P.bQ]},{func:1,ret:P.o,args:[P.M,P.M]},{func:1,ret:P.u,args:[W.j]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationTimeline:J.a,AppBannerPromptResult:J.a,BarProp:J.a,Body:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CHROMIUMValuebuffer:J.a,CircularGeofencingRegion:J.a,Client:J.a,Clients:J.a,CompositorProxy:J.a,ConsoleBase:J.a,Coordinates:J.a,Credential:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMStringMap:J.a,EffectModel:J.a,Entry:J.a,FederatedCredential:J.a,FileEntry:J.a,FileError:J.a,Stream:J.a,DOMFileSystem:J.a,FontFace:J.a,FormData:J.a,GamepadButton:J.a,Geofencing:J.a,GeofencingRegion:J.a,Geolocation:J.a,Geoposition:J.a,Headers:J.a,HMDVRDevice:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageData:J.a,InjectedScriptHost:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,KeyframeEffect:J.a,MediaDeviceInfo:J.a,MediaDevices:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaMetadata:J.a,MediaSession:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigatorStorageUtils:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,OffscreenCanvas:J.a,PasswordCredential:J.a,PerformanceCompositeTiming:J.a,PerformanceEntry:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformanceRenderTiming:J.a,PerformanceResourceTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PositionError:J.a,PositionSensorVRDevice:J.a,Presentation:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,ReadableByteStream:J.a,ReadableByteStreamReader:J.a,ReadableStreamReader:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,Selection:J.a,ServicePort:J.a,SharedArrayBuffer:J.a,SourceInfo:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StorageInfo:J.a,StorageManager:J.a,StorageQuota:J.a,StyleMedia:J.a,StylePropertyMap:J.a,SyncManager:J.a,TextMetrics:J.a,TrackDefault:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRDevice:J.a,VREyeParameters:J.a,VRFieldOfView:J.a,VRPositionState:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkerConsole:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothAdvertisingData:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,NFC:J.a,PagePopupController:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WebKitCSSMatrix:J.a,Worklet:J.a,WorkletGlobalScope:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPreserveAspectRatio:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,CHROMIUMSubscribeUniform:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTDisjointTimerQuery:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bH,ArrayBufferView:H.bg,DataView:H.f2,Float32Array:H.dd,Float64Array:H.f3,Int16Array:H.f4,Int32Array:H.f5,Int8Array:H.f6,Uint16Array:H.f7,Uint32Array:H.f8,Uint8ClampedArray:H.dh,CanvasPixelArray:H.dh,Uint8Array:H.f9,HTMLAudioElement:W.m,HTMLBRElement:W.m,HTMLBaseElement:W.m,HTMLButtonElement:W.m,HTMLContentElement:W.m,HTMLDListElement:W.m,HTMLDataListElement:W.m,HTMLDetailsElement:W.m,HTMLDialogElement:W.m,HTMLEmbedElement:W.m,HTMLFieldSetElement:W.m,HTMLHRElement:W.m,HTMLHeadingElement:W.m,HTMLHtmlElement:W.m,HTMLIFrameElement:W.m,HTMLImageElement:W.m,HTMLKeygenElement:W.m,HTMLLIElement:W.m,HTMLLabelElement:W.m,HTMLLegendElement:W.m,HTMLLinkElement:W.m,HTMLMapElement:W.m,HTMLMediaElement:W.m,HTMLMenuElement:W.m,HTMLMenuItemElement:W.m,HTMLMetaElement:W.m,HTMLMeterElement:W.m,HTMLModElement:W.m,HTMLOListElement:W.m,HTMLObjectElement:W.m,HTMLOptGroupElement:W.m,HTMLOptionElement:W.m,HTMLOutputElement:W.m,HTMLParagraphElement:W.m,HTMLParamElement:W.m,HTMLPictureElement:W.m,HTMLPreElement:W.m,HTMLProgressElement:W.m,HTMLQuoteElement:W.m,HTMLScriptElement:W.m,HTMLShadowElement:W.m,HTMLSlotElement:W.m,HTMLSourceElement:W.m,HTMLSpanElement:W.m,HTMLStyleElement:W.m,HTMLTableCaptionElement:W.m,HTMLTableCellElement:W.m,HTMLTableDataCellElement:W.m,HTMLTableHeaderCellElement:W.m,HTMLTableColElement:W.m,HTMLTextAreaElement:W.m,HTMLTitleElement:W.m,HTMLTrackElement:W.m,HTMLUListElement:W.m,HTMLUnknownElement:W.m,HTMLVideoElement:W.m,HTMLDirectoryElement:W.m,HTMLFontElement:W.m,HTMLFrameElement:W.m,HTMLMarqueeElement:W.m,HTMLElement:W.m,HTMLAnchorElement:W.dQ,HTMLAreaElement:W.dR,AudioTrack:W.a3,AudioTrackList:W.dU,Blob:W.ce,HTMLBodyElement:W.aP,HTMLCanvasElement:W.cf,CanvasRenderingContext2D:W.dW,CDATASection:W.aQ,CharacterData:W.aQ,Comment:W.aQ,ProcessingInstruction:W.aQ,Text:W.aQ,CompositorWorker:W.dZ,CSSCharsetRule:W.A,CSSFontFaceRule:W.A,CSSGroupingRule:W.A,CSSImportRule:W.A,CSSKeyframeRule:W.A,MozCSSKeyframeRule:W.A,WebKitCSSKeyframeRule:W.A,CSSKeyframesRule:W.A,MozCSSKeyframesRule:W.A,WebKitCSSKeyframesRule:W.A,CSSMediaRule:W.A,CSSNamespaceRule:W.A,CSSPageRule:W.A,CSSRule:W.A,CSSStyleRule:W.A,CSSSupportsRule:W.A,CSSViewportRule:W.A,CSSStyleDeclaration:W.ba,MSStyleCSSProperties:W.ba,CSS2Properties:W.ba,DataTransferItemList:W.e1,DeviceAcceleration:W.e2,HTMLDivElement:W.ch,XMLDocument:W.bt,Document:W.bt,DocumentFragment:W.ci,ShadowRoot:W.ci,DOMException:W.e3,DOMImplementation:W.cj,DOMPoint:W.e4,DOMPointReadOnly:W.ck,DOMRectReadOnly:W.cl,DOMStringList:W.e5,DOMTokenList:W.e6,Element:W.a5,AnimationEvent:W.l,AnimationPlayerEvent:W.l,ApplicationCacheErrorEvent:W.l,AutocompleteErrorEvent:W.l,BeforeInstallPromptEvent:W.l,BeforeUnloadEvent:W.l,BlobEvent:W.l,ClipboardEvent:W.l,CloseEvent:W.l,CustomEvent:W.l,DeviceLightEvent:W.l,DeviceMotionEvent:W.l,DeviceOrientationEvent:W.l,ErrorEvent:W.l,ExtendableEvent:W.l,ExtendableMessageEvent:W.l,FetchEvent:W.l,FontFaceSetLoadEvent:W.l,GamepadEvent:W.l,GeofencingEvent:W.l,HashChangeEvent:W.l,InstallEvent:W.l,MediaEncryptedEvent:W.l,MediaKeyMessageEvent:W.l,MediaQueryListEvent:W.l,MediaStreamEvent:W.l,MediaStreamTrackEvent:W.l,MessageEvent:W.l,MIDIConnectionEvent:W.l,MIDIMessageEvent:W.l,NotificationEvent:W.l,PageTransitionEvent:W.l,PopStateEvent:W.l,PresentationConnectionAvailableEvent:W.l,PresentationConnectionCloseEvent:W.l,ProgressEvent:W.l,PromiseRejectionEvent:W.l,PushEvent:W.l,RelatedEvent:W.l,RTCDataChannelEvent:W.l,RTCDTMFToneChangeEvent:W.l,RTCIceCandidateEvent:W.l,RTCPeerConnectionIceEvent:W.l,SecurityPolicyViolationEvent:W.l,ServicePortConnectEvent:W.l,ServiceWorkerMessageEvent:W.l,SpeechRecognitionError:W.l,SpeechRecognitionEvent:W.l,SpeechSynthesisEvent:W.l,StorageEvent:W.l,SyncEvent:W.l,TrackEvent:W.l,TransitionEvent:W.l,WebKitTransitionEvent:W.l,ResourceProgressEvent:W.l,USBConnectionEvent:W.l,IDBVersionChangeEvent:W.l,AudioProcessingEvent:W.l,OfflineAudioCompletionEvent:W.l,WebGLContextEvent:W.l,Event:W.l,InputEvent:W.l,Animation:W.j,ApplicationCache:W.j,DOMApplicationCache:W.j,OfflineResourceList:W.j,BatteryManager:W.j,CanvasCaptureMediaStreamTrack:W.j,CrossOriginServiceWorkerClient:W.j,EventSource:W.j,FileReader:W.j,FontFaceSet:W.j,MediaKeySession:W.j,MediaQueryList:W.j,MediaRecorder:W.j,MediaSource:W.j,MediaStream:W.j,MediaStreamTrack:W.j,MessagePort:W.j,MIDIAccess:W.j,NetworkInformation:W.j,Notification:W.j,Performance:W.j,PermissionStatus:W.j,PresentationAvailability:W.j,PresentationReceiver:W.j,PresentationRequest:W.j,RTCDTMFSender:W.j,RTCPeerConnection:W.j,webkitRTCPeerConnection:W.j,mozRTCPeerConnection:W.j,ScreenOrientation:W.j,ServicePortCollection:W.j,ServiceWorkerContainer:W.j,ServiceWorkerRegistration:W.j,SpeechRecognition:W.j,SpeechSynthesis:W.j,SpeechSynthesisUtterance:W.j,WorkerPerformance:W.j,BluetoothDevice:W.j,BluetoothRemoteGATTCharacteristic:W.j,USB:W.j,IDBDatabase:W.j,IDBOpenDBRequest:W.j,IDBVersionChangeRequest:W.j,IDBRequest:W.j,IDBTransaction:W.j,AnalyserNode:W.j,RealtimeAnalyserNode:W.j,AudioBufferSourceNode:W.j,AudioContext:W.j,webkitAudioContext:W.j,AudioDestinationNode:W.j,AudioNode:W.j,AudioSourceNode:W.j,BiquadFilterNode:W.j,ChannelMergerNode:W.j,AudioChannelMerger:W.j,ChannelSplitterNode:W.j,AudioChannelSplitter:W.j,ConvolverNode:W.j,DelayNode:W.j,DynamicsCompressorNode:W.j,GainNode:W.j,AudioGainNode:W.j,IIRFilterNode:W.j,MediaElementAudioSourceNode:W.j,MediaStreamAudioDestinationNode:W.j,MediaStreamAudioSourceNode:W.j,OfflineAudioContext:W.j,OscillatorNode:W.j,Oscillator:W.j,PannerNode:W.j,AudioPannerNode:W.j,webkitAudioPannerNode:W.j,ScriptProcessorNode:W.j,JavaScriptAudioNode:W.j,StereoPannerNode:W.j,WaveShaperNode:W.j,EventTarget:W.j,File:W.a6,FileList:W.eu,FileWriter:W.ev,HTMLFormElement:W.ez,Gamepad:W.a7,HTMLHeadElement:W.cr,History:W.eB,HTMLCollection:W.bB,HTMLFormControlsCollection:W.bB,HTMLOptionsCollection:W.bB,HTMLDocument:W.cs,XMLHttpRequest:W.eC,XMLHttpRequestUpload:W.bC,XMLHttpRequestEventTarget:W.bC,HTMLInputElement:W.bD,KeyboardEvent:W.aV,Location:W.eS,MediaList:W.eY,MIDIOutput:W.f_,MIDIInput:W.bG,MIDIPort:W.bG,MimeType:W.a8,MimeTypeArray:W.f0,PointerEvent:W.Q,MouseEvent:W.Q,DragEvent:W.Q,Navigator:W.fa,Attr:W.t,Node:W.t,NodeIterator:W.di,NodeList:W.bM,RadioNodeList:W.bM,Path2D:W.fj,Perspective:W.fm,Plugin:W.a9,PluginArray:W.fo,PositionValue:W.fr,PresentationConnection:W.fs,Range:W.dp,Rotation:W.fC,RTCDataChannel:W.dr,DataChannel:W.dr,HTMLSelectElement:W.fE,SharedWorker:W.fI,SourceBuffer:W.aa,SourceBufferList:W.fJ,SpeechGrammar:W.ab,SpeechGrammarList:W.fL,SpeechRecognitionResult:W.ac,Storage:W.fR,CSSStyleSheet:W.Z,StyleSheet:W.Z,CalcLength:W.am,KeywordValue:W.am,LengthValue:W.am,NumberValue:W.am,SimpleLength:W.am,TransformValue:W.am,StyleValue:W.am,HTMLTableElement:W.du,HTMLTableRowElement:W.fZ,HTMLTableSectionElement:W.h_,HTMLTemplateElement:W.bS,TextTrack:W.ad,TextTrackCue:W.a_,VTTCue:W.a_,TextTrackCueList:W.h2,TextTrackList:W.h3,TimeRanges:W.h5,Touch:W.ae,TouchEvent:W.b0,TouchList:W.h9,TrackDefaultList:W.ha,Matrix:W.bj,Skew:W.bj,TransformComponent:W.bj,Translation:W.hc,TreeWalker:W.dx,CompositionEvent:W.aJ,FocusEvent:W.aJ,TextEvent:W.aJ,SVGZoomEvent:W.aJ,UIEvent:W.aJ,URL:W.hj,VideoTrackList:W.hl,VTTRegionList:W.ho,WebSocket:W.hp,WheelEvent:W.b2,Window:W.bX,DOMWindow:W.bX,Worker:W.hs,CompositorWorkerGlobalScope:W.b3,DedicatedWorkerGlobalScope:W.b3,ServiceWorkerGlobalScope:W.b3,SharedWorkerGlobalScope:W.b3,WorkerGlobalScope:W.b3,ClientRect:W.hA,ClientRectList:W.dB,DOMRectList:W.dB,CSSRuleList:W.hC,DocumentType:W.hD,DOMRect:W.hE,GamepadList:W.hV,HTMLFrameSetElement:W.hW,NamedNodeMap:W.dE,MozNamedAttrMap:W.dE,ServiceWorker:W.id,SpeechRecognitionResultList:W.ih,StyleSheetList:W.ii,WorkerLocation:W.iq,WorkerNavigator:W.ir,SVGAElement:P.dP,SVGAnimateElement:P.aO,SVGAnimateMotionElement:P.aO,SVGAnimateTransformElement:P.aO,SVGAnimationElement:P.aO,SVGSetElement:P.aO,SVGFEBlendElement:P.ec,SVGFEColorMatrixElement:P.ed,SVGFEComponentTransferElement:P.ee,SVGFECompositeElement:P.ef,SVGFEConvolveMatrixElement:P.eg,SVGFEDiffuseLightingElement:P.eh,SVGFEDisplacementMapElement:P.ei,SVGFEFloodElement:P.ej,SVGFEGaussianBlurElement:P.ek,SVGFEImageElement:P.el,SVGFEMergeElement:P.em,SVGFEMorphologyElement:P.en,SVGFEOffsetElement:P.eo,SVGFEPointLightElement:P.ep,SVGFESpecularLightingElement:P.eq,SVGFESpotLightElement:P.er,SVGFETileElement:P.es,SVGFETurbulenceElement:P.et,SVGFilterElement:P.ew,SVGForeignObjectElement:P.ey,SVGCircleElement:P.ai,SVGEllipseElement:P.ai,SVGLineElement:P.ai,SVGPathElement:P.ai,SVGPolygonElement:P.ai,SVGPolylineElement:P.ai,SVGGeometryElement:P.ai,SVGClipPathElement:P.aF,SVGDefsElement:P.aF,SVGGElement:P.aF,SVGSwitchElement:P.aF,SVGGraphicsElement:P.aF,SVGImageElement:P.eD,SVGLength:P.as,SVGLengthList:P.eN,SVGMarkerElement:P.eV,SVGMaskElement:P.eW,SVGNumber:P.at,SVGNumberList:P.fd,SVGPatternElement:P.fk,SVGPoint:P.fp,SVGPointList:P.fq,SVGRect:P.fv,SVGRectElement:P.fw,SVGScriptElement:P.bP,SVGStringList:P.fW,SVGDescElement:P.K,SVGDiscardElement:P.K,SVGFEDistantLightElement:P.K,SVGFEFuncAElement:P.K,SVGFEFuncBElement:P.K,SVGFEFuncGElement:P.K,SVGFEFuncRElement:P.K,SVGFEMergeNodeElement:P.K,SVGMetadataElement:P.K,SVGStopElement:P.K,SVGStyleElement:P.K,SVGTitleElement:P.K,SVGComponentTransferFunctionElement:P.K,SVGElement:P.K,SVGSVGElement:P.fX,SVGSymbolElement:P.fY,SVGTextContentElement:P.dv,SVGTextPathElement:P.h1,SVGTSpanElement:P.bT,SVGTextElement:P.bT,SVGTextPositioningElement:P.bT,SVGTransform:P.au,SVGTransformList:P.hb,SVGUseElement:P.hk,SVGViewElement:P.hm,SVGViewSpec:P.hn,SVGLinearGradientElement:P.bZ,SVGRadialGradientElement:P.bZ,SVGGradientElement:P.bZ,SVGCursorElement:P.i9,SVGFEDropShadowElement:P.ia,SVGMPathElement:P.ib,AudioBuffer:P.dT,WebGLRenderingContext:P.fA,WebGL2RenderingContext:P.fB,WebGL2RenderingContextBase:P.ip,SQLResultSetRowList:P.fM})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,Credential:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMStringMap:true,EffectModel:true,Entry:true,FederatedCredential:true,FileEntry:true,FileError:true,Stream:true,DOMFileSystem:true,FontFace:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageData:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PasswordCredential:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,ServicePort:true,SharedArrayBuffer:true,SourceInfo:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,TrackDefault:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPreserveAspectRatio:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,AudioTrack:true,AudioTrackList:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,CSSCharsetRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DocumentFragment:true,ShadowRoot:true,DOMException:true,DOMImplementation:true,DOMPoint:true,DOMPointReadOnly:false,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AudioDestinationNode:true,AudioNode:true,AudioSourceNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OfflineAudioContext:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Navigator:true,Attr:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Path2D:true,Perspective:true,Plugin:true,PluginArray:true,PositionValue:true,PresentationConnection:true,Range:true,Rotation:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,SharedWorker:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,CalcLength:true,KeywordValue:true,LengthValue:true,NumberValue:true,SimpleLength:true,TransformValue:true,StyleValue:false,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,Matrix:true,Skew:true,TransformComponent:false,Translation:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,SVGZoomEvent:true,UIEvent:false,URL:true,VideoTrackList:true,VTTRegionList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.de.$nativeSuperclassTag="ArrayBufferView"
H.bJ.$nativeSuperclassTag="ArrayBufferView"
H.bK.$nativeSuperclassTag="ArrayBufferView"
H.df.$nativeSuperclassTag="ArrayBufferView"
H.bI.$nativeSuperclassTag="ArrayBufferView"
H.bL.$nativeSuperclassTag="ArrayBufferView"
H.dg.$nativeSuperclassTag="ArrayBufferView"
W.bv.$nativeSuperclassTag="EventTarget"
W.bA.$nativeSuperclassTag="EventTarget"
W.bw.$nativeSuperclassTag="EventTarget"
W.bz.$nativeSuperclassTag="EventTarget"
W.bx.$nativeSuperclassTag="EventTarget"
W.by.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.ld(V.le(),b)},[])
else (function(b){H.ld(V.le(),b)})([])})})()