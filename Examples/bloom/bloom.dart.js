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
a[c]=function(){a[c]=function(){H.nj(b)}
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
return d?function(e){if(t===null)t=H.jm(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.jm(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.jm(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={j8:function j8(a){this.a=a},
jd:function(a,b,c,d){if(!!a.$isc)return new H.e2(a,b,[c,d])
return new H.d4(a,b,[c,d])},
eB:function(){return new P.aD("No element")},
m9:function(){return new P.aD("Too many elements")},
m8:function(){return new P.aD("Too few elements")},
dj:function(a,b,c,d){if(c-b<=32)H.mo(a,b,c,d)
else H.mn(a,b,c,d)},
mo:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.ac(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.am(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
mn:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.d(t>32)
s=C.b.D(t+1,6)
r=a3+s
q=a4-s
p=C.b.D(a3+a4,2)
o=p-s
n=p+s
t=J.ac(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.am(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.am(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.am(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.am(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.am(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.am(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.am(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.am(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.am(a5.$2(j,i),0)){h=i
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
H.dj(a2,a3,g-2,a5)
H.dj(a2,f+2,a4,a5)
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
break}}H.dj(a2,g,f,a5)}else H.dj(a2,g,f,a5)},
c:function c(){},
ba:function ba(){},
d3:function d3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
d4:function d4(a,b,c){this.a=a
this.b=b
this.$ti=c},
e2:function e2(a,b,c){this.a=a
this.b=b
this.$ti=c},
eL:function eL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
by:function by(a,b,c){this.a=a
this.b=b
this.$ti=c},
ds:function ds(a,b,c){this.a=a
this.b=b
this.$ti=c},
hg:function hg(a,b,c){this.a=a
this.b=b
this.$ti=c},
ce:function ce(){},
dA:function(a,b){var t=a.aj(b)
if(!u.globalState.d.cy)u.globalState.f.ap()
return t},
iH:function(){--u.globalState.f.b
H.d(u.globalState.f.b>=0)},
l0:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.v(s).$isb)throw H.e(P.jH("Arguments to main must be a List: "+H.f(s)))
u.globalState=new H.hT(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$k3()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.hw(P.jc(null,H.b3),0)
r=P.m
s.sey(new H.ae(0,null,null,null,null,null,0,[r,H.b2]))
s.seB(new H.ae(0,null,null,null,null,null,0,[r,null]))
if(s.x){q=new H.hS()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.m3,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.mE)}if(u.globalState.x)return
s=u.globalState.a++
q=P.af(null,null,null,r)
p=new H.bc(0,null,!1)
o=new H.b2(s,new H.ae(0,null,null,null,null,null,0,[r,H.bc]),q,u.createNewIsolate(),p,new H.ap(H.iL()),new H.ap(H.iL()),!1,!1,[],P.af(null,null,null,null),null,null,!1,!0,P.af(null,null,null,null))
q.l(0,0)
o.bw(0,p)
u.globalState.e=o
u.globalState.z.i(0,s,o)
u.globalState.d=o
if(H.bh(a,{func:1,args:[,]}))o.aj(new H.iR(t,a))
else if(H.bh(a,{func:1,args:[,,]}))o.aj(new H.iS(t,a))
else o.aj(a)
u.globalState.f.ap()},
mE:function(a){var t=P.aT(["command","print","msg",a])
return new H.aj(!0,P.bS(null,P.m)).J(t)},
m5:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.m6()
return},
m6:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.e(new P.r("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.e(new P.r('Cannot extract URI from "'+t+'"'))},
m3:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.b1(!0,[]).W(b.data)
s=J.ac(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.n5(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.b1(!0,[]).W(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.b1(!0,[]).W(s.h(t,"replyTo"))
s=u.globalState.a++
k=P.m
j=P.af(null,null,null,k)
i=new H.bc(0,null,!1)
h=new H.b2(s,new H.ae(0,null,null,null,null,null,0,[k,H.bc]),j,u.createNewIsolate(),i,new H.ap(H.iL()),new H.ap(H.iL()),!1,!1,[],P.af(null,null,null,null),null,null,!1,!0,P.af(null,null,null,null))
j.l(0,0)
h.bw(0,i)
u.globalState.f.a.T(0,new H.b3(h,new H.ey(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.ap()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.lB(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.ap()
break
case"close":u.globalState.ch.ao(0,$.$get$k4().h(0,a))
a.terminate()
u.globalState.f.ap()
break
case"log":H.m2(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
k=P.aT(["command","print","msg",t])
k=new H.aj(!0,P.bS(null,P.m)).J(k)
s.toString
self.postMessage(k)}else P.az(s.h(t,"msg"))
break
case"error":throw H.e(s.h(t,"msg"))}},
m2:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aT(["command","log","msg",a])
r=new H.aj(!0,P.bS(null,P.m)).J(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.P(q)
t=H.aG(q)
s=P.cc(t)
throw H.e(s)}},
m4:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.k9=$.k9+("_"+s)
$.ka=$.ka+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.I(0,["spawned",new H.be(s,r),q,t.r])
r=new H.ez(a,b,c,d,t)
if(e){t.bP(q,q)
u.globalState.f.a.T(0,new H.b3(t,r,"start isolate"))}else r.$0()},
mp:function(a,b){var t=new H.fY(!0,!1,null)
t.dk(a,b)
return t},
mF:function(a){return new H.b1(!0,[]).W(new H.aj(!1,P.bS(null,P.m)).J(a))},
iR:function iR(a,b){this.a=a
this.b=b},
iS:function iS(a,b){this.a=a
this.b=b},
hT:function hT(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
b2:function b2(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
hO:function hO(a,b){this.a=a
this.b=b},
hw:function hw(a,b){this.a=a
this.b=b},
hx:function hx(a){this.a=a},
b3:function b3(a,b,c){this.a=a
this.b=b
this.c=c},
hS:function hS(){},
ey:function ey(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ez:function ez(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hp:function hp(){},
be:function be(a,b){this.b=a
this.a=b},
hU:function hU(a,b){this.a=a
this.b=b},
bU:function bU(a,b,c){this.b=a
this.c=b
this.a=c},
bc:function bc(a,b,c){this.a=a
this.b=b
this.c=c},
fY:function fY(a,b,c){this.a=a
this.b=b
this.c=c},
fZ:function fZ(a,b){this.a=a
this.b=b},
h_:function h_(a,b){this.a=a
this.b=b},
ap:function ap(a){this.a=a},
aj:function aj(a,b){this.a=a
this.b=b},
b1:function b1(a,b){this.a=a
this.b=b},
mZ:function(a){return u.types[a]},
n7:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.v(a).$isn},
f:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aK(a)
if(typeof t!=="string")throw H.e(H.T(a))
return t},
ml:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.fp(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aV:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
df:function(a){var t,s,r,q,p,o,n,m
t=J.v(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.K||!!J.v(a).$isaZ){p=C.y(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.i.aM(q,0)===36)q=C.i.cY(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.dB(H.iu(a),0,null),u.mangledGlobalNames)},
fl:function(a){return"Instance of '"+H.df(a)+"'"},
Q:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mj:function(a){return a.b?H.Q(a).getUTCFullYear()+0:H.Q(a).getFullYear()+0},
mh:function(a){return a.b?H.Q(a).getUTCMonth()+1:H.Q(a).getMonth()+1},
md:function(a){return a.b?H.Q(a).getUTCDate()+0:H.Q(a).getDate()+0},
me:function(a){return a.b?H.Q(a).getUTCHours()+0:H.Q(a).getHours()+0},
mg:function(a){return a.b?H.Q(a).getUTCMinutes()+0:H.Q(a).getMinutes()+0},
mi:function(a){return a.b?H.Q(a).getUTCSeconds()+0:H.Q(a).getSeconds()+0},
mf:function(a){return a.b?H.Q(a).getUTCMilliseconds()+0:H.Q(a).getMilliseconds()+0},
k8:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.T(a))
return a[b]},
N:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ao(!0,b,"index",null)
t=J.dG(a)
if(b<0||C.b.cI(b,t))return P.A(b,a,"index",null,t)
return P.fm(b,"index",null)},
T:function(a){return new P.ao(!0,a,null,null)},
e:function(a){var t
if(a==null)a=new P.de()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.l1})
t.name=""}else t.toString=H.l1
return t},
l1:function(){return J.aK(this.dartException)},
E:function(a){throw H.e(a)},
O:function(a){throw H.e(new P.a0(a))},
at:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.h4(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
h5:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
kl:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
ja:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.eE(a,s,t?null:b.receiver)},
P:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.iT(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aV(r,16)&8191)===10)switch(q){case 438:return t.$1(H.ja(H.f(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.f(s)+" (Error "+q+")"
return t.$1(new H.dd(p,null))}}if(a instanceof TypeError){o=$.$get$kf()
n=$.$get$kg()
m=$.$get$kh()
l=$.$get$ki()
k=$.$get$km()
j=$.$get$kn()
i=$.$get$kk()
$.$get$kj()
h=$.$get$kp()
g=$.$get$ko()
f=o.N(s)
if(f!=null)return t.$1(H.ja(s,f))
else{f=n.N(s)
if(f!=null){f.method="call"
return t.$1(H.ja(s,f))}else{f=m.N(s)
if(f==null){f=l.N(s)
if(f==null){f=k.N(s)
if(f==null){f=j.N(s)
if(f==null){f=i.N(s)
if(f==null){f=l.N(s)
if(f==null){f=h.N(s)
if(f==null){f=g.N(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.dd(s,f==null?null:f.method))}}return t.$1(new H.h8(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.dk()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.ao(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.dk()
return a},
aG:function(a){var t
if(a==null)return new H.dy(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dy(a,null)},
nc:function(a){if(a==null||typeof a!='object')return J.an(a)
else return H.aV(a)},
mX:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=a.length
for(r=0;r<s;){q=r+1
H.d(t)
p=a[r]
r=q+1
H.d(t)
b.i(0,p,a[q])}return b},
n6:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dA(b,new H.iC(a))
case 1:return H.dA(b,new H.iD(a,d))
case 2:return H.dA(b,new H.iE(a,d,e))
case 3:return H.dA(b,new H.iF(a,d,e,f))
case 4:return H.dA(b,new H.iG(a,d,e,f,g))}throw H.e(P.cc("Unsupported number of arguments for wrapped closure"))},
bY:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.n6)
a.$identity=t
return t},
lR:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.v(c).$isb){t.$reflectionInfo=c
r=H.ml(t).r}else r=c
q=d?Object.create(new H.fF().constructor.prototype):Object.create(new H.bl(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.jP(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.mZ,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.jM:H.j2
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.e("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.jP(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
lO:function(a,b,c,d){var t=H.j2
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
jP:function(a,b,c){var t,s,r,q
if(c)return H.lQ(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.lO(s,b==null?r!=null:b!==r,t,b)
return q},
lP:function(a,b,c,d){var t,s
t=H.j2
s=H.jM
switch(b?-1:a){case 0:throw H.e(new H.fv("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
lQ:function(a,b){var t,s,r,q
H.lN()
t=$.jL
if(t==null){t=H.jK("receiver")
$.jL=t}s=b.$stubName
r=b.length
q=a[s]
t=H.lP(r,b==null?q!=null:b!==q,s,b)
return t},
jm:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.v(c).$isb){c.fixed$length=Array
t=c}else t=c
return H.lR(a,b,t,!!d,e,f)},
j2:function(a){return a.a},
jM:function(a){return a.c},
lN:function(){var t=$.jN
if(t==null){t=H.jK("self")
$.jN=t}return t},
jK:function(a){var t,s,r,q,p
t=new H.bl("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
ny:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.au(a,"String"))},
Y:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.au(a,"double"))},
nx:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.au(a,"num"))},
mR:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.au(a,"bool"))},
n5:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.au(a,"int"))},
ne:function(a,b){throw H.e(H.au(a,b.substring(3)))},
nd:function(a,b){var t=J.ac(b)
throw H.e(H.jO(H.df(a),t.bl(b,3,t.gj(b))))},
jp:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.v(a)[b])return a
H.ne(a,b)},
aI:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.v(a)[b]
else t=!0
if(t)return a
H.nd(a,b)},
nw:function(a){if(a==null)return a
if(!!J.v(a).$isb)return a
throw H.e(H.au(a,"List"))},
kN:function(a){var t=J.v(a)
return"$S" in t?t.$S():null},
bh:function(a,b){var t
if(a==null)return!1
t=H.kN(a)
return t==null?!1:H.kV(t,b)},
nu:function(a,b){var t,s
if(a==null)return a
if($.jj)return a
$.jj=!0
try{if(H.bh(a,b))return a
t=H.aJ(b,null)
s=H.au(a,t)
throw H.e(s)}finally{$.jj=!1}},
au:function(a,b){return new H.h6("type '"+H.df(a)+"' is not a subtype of type '"+b+"'")},
jO:function(a,b){return new H.dQ("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
ab:function(a){if(!0===a)return!1
if(!!J.v(a).$isj6)a=a.$0()
if(typeof a==="boolean")return!a
throw H.e(H.au(a,"bool"))},
ak:function(a){throw H.e(new H.hj(a))},
d:function(a){if(H.ab(a))throw H.e(new P.c3(null))},
nj:function(a){throw H.e(new P.dU(a))},
iL:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
kT:function(a){return u.getIsolateTag(a)},
J:function(a){return new H.aE(a,null)},
D:function(a,b){H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
iu:function(a){if(a==null)return
return a.$ti},
kU:function(a,b){return H.jt(a["$as"+H.f(b)],H.iu(a))},
al:function(a,b,c){var t,s
t=H.kU(a,b)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
aH:function(a,b){var t,s
t=H.iu(a)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
aJ:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.d(!0)
H.d(!0)
return a[0].name+H.dB(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.f(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aJ(t,b)
return H.mG(a,b)}return"unknown-reified-type"},
mG:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aJ(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aJ(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aJ(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.mW(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aJ(l[j],b)+(" "+H.f(j))}q+="}"}return"("+q+") => "+t},
dB:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=new P.bJ("")
for(r=b,q=!0,p=!0;H.d(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.d(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aJ(o,c)}return p?"":"<"+s.k(0)+">"},
iv:function(a){var t,s
if(a instanceof H.b6){t=H.kN(a)
if(t!=null)return H.aJ(t,null)}s=J.v(a).constructor.name
if(a==null)return s
return s+H.dB(a.$ti,0,null)},
jt:function(a,b){if(a==null)return b
H.d(typeof a=="function")
H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.jq(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.jq(a,null,b)
return b},
im:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.iu(a)
s=J.v(a)
if(s[b]==null)return!1
return H.kI(H.jt(s[d],t),c)},
dC:function(a,b,c,d){if(a==null)return a
if(H.im(a,b,c,d))return a
throw H.e(H.jO(H.df(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dB(c,0,null),u.mangledGlobalNames)))},
nr:function(a,b,c,d){if(a==null)return a
if(H.im(a,b,c,d))return a
throw H.e(H.au(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dB(c,0,null),u.mangledGlobalNames)))},
kI:function(a,b){var t,s,r,q,p
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
if(!H.Z(r,b[p]))return!1}return!0},
ns:function(a,b,c){return H.jq(a,b,H.kU(b,c))},
Z:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.name==="aU")return!0
if('func' in b)return H.kV(a,b)
if('func' in a)return b.name==="j6"||b.name==="o"
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
return H.kI(H.jt(o,t),r)},
kH:function(a,b,c){var t,s,r,q,p,o,n
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
if(!(H.Z(o,n)||H.Z(n,o)))return!1}return!0},
mN:function(a,b){var t,s,r,q,p,o
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
if(!(H.Z(p,o)||H.Z(o,p)))return!1}return!0},
kV:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.d('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.Z(t,s)||H.Z(s,t)))return!1}r=a.args
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
if(n===m){if(!H.kH(r,q,!1))return!1
if(!H.kH(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.d(j)
g=r[h]
H.d(i)
f=q[h]
if(!(H.Z(g,f)||H.Z(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.d(j)
g=p[d]
H.d(i)
f=q[e]
if(!(H.Z(g,f)||H.Z(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.d(j)
g=p[d]
H.d(i)
f=o[e]
if(!(H.Z(g,f)||H.Z(f,g)))return!1}}return H.mN(a.named,b.named)},
jq:function(a,b,c){H.d(typeof a=="function")
H.d(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
nz:function(a){var t=$.jn
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
nv:function(a){return H.aV(a)},
nt:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
n8:function(a){var t,s,r,q,p,o
H.d(!(a instanceof P.o))
t=$.jn.$1(a)
s=$.is[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iB[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.kE.$2(a,t)
if(t!=null){s=$.is[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iB[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.jr(r)
$.is[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.iB[t]=r
return r}if(p==="-"){o=H.jr(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.kY(a,r)
if(p==="*")throw H.e(new P.dr(t))
if(u.leafTags[t]===true){o=H.jr(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.kY(a,r)},
kY:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.iJ(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
jr:function(a){return J.iJ(a,!1,null,!!a.$isn)},
na:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.iJ(t,!1,null,!!t.$isn)
else return J.iJ(t,c,null,null)},
n3:function(){if(!0===$.jo)return
$.jo=!0
H.n4()},
n4:function(){var t,s,r,q,p,o,n,m
$.is=Object.create(null)
$.iB=Object.create(null)
H.n2()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.l_.$1(p)
if(o!=null){n=H.na(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
n2:function(){var t,s,r,q,p,o,n
t=C.P()
t=H.bg(C.M,H.bg(C.R,H.bg(C.x,H.bg(C.x,H.bg(C.Q,H.bg(C.N,H.bg(C.O(C.y),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.jn=new H.iy(p)
$.kE=new H.iz(o)
$.l_=new H.iA(n)},
bg:function(a,b){return a(b)||b},
ni:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
fp:function fp(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
h4:function h4(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dd:function dd(a,b){this.a=a
this.b=b},
eE:function eE(a,b,c){this.a=a
this.b=b
this.c=c},
h8:function h8(a){this.a=a},
iT:function iT(a){this.a=a},
dy:function dy(a,b){this.a=a
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
b6:function b6(){},
fS:function fS(){},
fF:function fF(){},
bl:function bl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h6:function h6(a){this.a=a},
dQ:function dQ(a){this.a=a},
fv:function fv(a){this.a=a},
hj:function hj(a){this.a=a},
aE:function aE(a,b){this.a=a
this.b=b},
ae:function ae(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
eD:function eD(a){this.a=a},
eG:function eG(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
eH:function eH(a,b){this.a=a
this.$ti=b},
eI:function eI(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
iy:function iy(a){this.a=a},
iz:function iz(a){this.a=a},
iA:function iA(a){this.a=a},
u:function(a){return a},
ii:function(a){var t,s,r
if(!!J.v(a).$isl)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
bA:function bA(){},
bb:function bb(){},
eV:function eV(){},
d6:function d6(){},
d7:function d7(){},
d8:function d8(){},
d5:function d5(){},
eW:function eW(){},
eX:function eX(){},
eY:function eY(){},
eZ:function eZ(){},
f_:function f_(){},
f0:function f0(){},
d9:function d9(){},
f1:function f1(){},
bB:function bB(){},
bC:function bC(){},
bD:function bD(){},
bE:function bE(){},
mW:function(a){var t=H.D(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
iK:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
v:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d0.prototype
return J.d_.prototype}if(typeof a=="string")return J.aQ.prototype
if(a==null)return J.d1.prototype
if(typeof a=="boolean")return J.eC.prototype
if(a.constructor==Array)return J.aP.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aR.prototype
return a}if(a instanceof P.o)return a
return J.it(a)},
iJ:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
it:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.jo==null){H.n3()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.e(new P.dr("Return interceptor for "+H.f(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$j9()]
if(p!=null)return p
p=H.n8(a)
if(p!=null)return p
if(typeof a=="function")return C.S
s=Object.getPrototypeOf(a)
if(s==null)return C.A
if(s===Object.prototype)return C.A
if(typeof q=="function"){Object.defineProperty(q,$.$get$j9(),{value:C.t,enumerable:false,writable:true,configurable:true})
return C.t}return C.t},
ac:function(a){if(typeof a=="string")return J.aQ.prototype
if(a==null)return a
if(a.constructor==Array)return J.aP.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aR.prototype
return a}if(a instanceof P.o)return a
return J.it(a)},
c_:function(a){if(a==null)return a
if(a.constructor==Array)return J.aP.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aR.prototype
return a}if(a instanceof P.o)return a
return J.it(a)},
kR:function(a){if(typeof a=="number")return J.b9.prototype
if(a==null)return a
if(!(a instanceof P.o))return J.aZ.prototype
return a},
mY:function(a){if(typeof a=="number")return J.b9.prototype
if(typeof a=="string")return J.aQ.prototype
if(a==null)return a
if(!(a instanceof P.o))return J.aZ.prototype
return a},
kS:function(a){if(typeof a=="string")return J.aQ.prototype
if(a==null)return a
if(!(a instanceof P.o))return J.aZ.prototype
return a},
i:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aR.prototype
return a}if(a instanceof P.o)return a
return J.it(a)},
F:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.v(a).w(a,b)},
am:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.kR(a).aF(a,b)},
l2:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kR(a).aG(a,b)},
bi:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.n7(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ac(a).h(a,b)},
l3:function(a,b,c,d){return J.i(a).dz(a,b,c,d)},
ju:function(a,b){return J.kS(a).aM(a,b)},
bj:function(a,b){return J.i(a).dO(a,b)},
l4:function(a,b,c){return J.i(a).dP(a,b,c)},
jv:function(a,b){return J.i(a).bO(a,b)},
iU:function(a,b){return J.i(a).P(a,b)},
jw:function(a,b,c){return J.i(a).bR(a,b,c)},
l5:function(a,b){return J.i(a).e1(a,b)},
dD:function(a,b,c){return J.i(a).bS(a,b,c)},
iV:function(a,b,c){return J.i(a).bT(a,b,c)},
dE:function(a,b,c){return J.i(a).bU(a,b,c)},
dF:function(a,b){return J.i(a).e4(a,b)},
l6:function(a,b){return J.i(a).bV(a,b)},
l7:function(a,b,c){return J.i(a).bW(a,b,c)},
jx:function(a,b,c,d){return J.i(a).bX(a,b,c,d)},
l8:function(a,b){return J.i(a).bY(a,b)},
l9:function(a,b){return J.c_(a).bZ(a,b)},
la:function(a,b,c,d,e){return J.i(a).c_(a,b,c,d,e)},
lb:function(a,b){return J.mY(a).R(a,b)},
iW:function(a,b,c){return J.ac(a).e8(a,b,c)},
iX:function(a){return J.i(a).c1(a)},
lc:function(a){return J.i(a).c2(a)},
ld:function(a){return J.i(a).c3(a)},
le:function(a){return J.i(a).c5(a)},
lf:function(a){return J.i(a).ed(a)},
lg:function(a,b){return J.i(a).c7(a,b)},
iY:function(a,b){return J.i(a).c8(a,b)},
lh:function(a,b,c,d){return J.i(a).c9(a,b,c,d)},
li:function(a,b,c,d,e){return J.i(a).ek(a,b,c,d,e)},
lj:function(a,b,c,d,e){return J.i(a).ca(a,b,c,d,e)},
lk:function(a,b,c,d,e,f){return J.i(a).el(a,b,c,d,e,f)},
ll:function(a,b){return J.c_(a).t(a,b)},
c2:function(a,b){return J.i(a).cb(a,b)},
lm:function(a,b){return J.i(a).cc(a,b)},
ln:function(a){return J.i(a).em(a)},
lo:function(a,b){return J.c_(a).az(a,b)},
jy:function(a,b,c,d,e,f){return J.i(a).ce(a,b,c,d,e,f)},
lp:function(a){return J.i(a).ge0(a)},
an:function(a){return J.v(a).gu(a)},
bk:function(a){return J.c_(a).gv(a)},
dG:function(a){return J.ac(a).gj(a)},
lq:function(a){return J.i(a).gb4(a)},
lr:function(a){return J.v(a).gA(a)},
ls:function(a){return J.i(a).geL(a)},
lt:function(a){return J.i(a).gaC(a)},
iZ:function(a){return J.i(a).gm(a)},
j_:function(a){return J.i(a).gn(a)},
jz:function(a){return J.i(a).gK(a)},
j0:function(a,b){return J.i(a).a5(a,b)},
lu:function(a){return J.i(a).aE(a)},
lv:function(a){return J.i(a).b9(a)},
lw:function(a,b){return J.i(a).ba(a,b)},
lx:function(a,b,c){return J.i(a).bb(a,b,c)},
jA:function(a,b,c){return J.i(a).be(a,b,c)},
ly:function(a,b){return J.i(a).cf(a,b)},
lz:function(a,b){return J.c_(a).ci(a,b)},
lA:function(a){return J.c_(a).eF(a)},
lB:function(a,b){return J.i(a).I(a,b)},
lC:function(a,b,c,d){return J.i(a).bj(a,b,c,d)},
lD:function(a,b,c,d){return J.i(a).cm(a,b,c,d)},
dH:function(a,b,c,d){return J.i(a).cn(a,b,c,d)},
lE:function(a,b,c,d,e,f){return J.i(a).eM(a,b,c,d,e,f)},
lF:function(a){return J.kS(a).eP(a)},
aK:function(a){return J.v(a).k(a)},
lG:function(a,b,c,d){return J.i(a).eR(a,b,c,d)},
lH:function(a,b,c){return J.i(a).cq(a,b,c)},
lI:function(a,b,c){return J.i(a).cr(a,b,c)},
j1:function(a,b,c){return J.i(a).cs(a,b,c)},
lJ:function(a,b,c){return J.i(a).ct(a,b,c)},
jB:function(a,b,c){return J.i(a).cu(a,b,c)},
jC:function(a,b,c){return J.i(a).cv(a,b,c)},
jD:function(a,b,c){return J.i(a).cw(a,b,c)},
jE:function(a,b,c,d){return J.i(a).cz(a,b,c,d)},
jF:function(a,b,c,d){return J.i(a).cA(a,b,c,d)},
lK:function(a,b){return J.i(a).cC(a,b)},
lL:function(a,b,c){return J.i(a).eS(a,b,c)},
jG:function(a,b,c,d,e,f,g){return J.i(a).cE(a,b,c,d,e,f,g)},
lM:function(a,b,c,d,e){return J.i(a).cF(a,b,c,d,e)},
a:function a(){},
eC:function eC(){},
d1:function d1(){},
bx:function bx(){},
ff:function ff(){},
aZ:function aZ(){},
aR:function aR(){},
aP:function aP(a){this.$ti=a},
j7:function j7(a){this.$ti=a},
dL:function dL(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b9:function b9(){},
d0:function d0(){},
d_:function d_(){},
aQ:function aQ(){}},P={
mu:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.mO()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.bY(new P.hl(t),1)).observe(s,{childList:true})
return new P.hk(t,s,r)}else if(self.setImmediate!=null)return P.mP()
return P.mQ()},
mv:function(a){++u.globalState.f.b
self.scheduleImmediate(H.bY(new P.hm(a),0))},
mw:function(a){++u.globalState.f.b
self.setImmediate(H.bY(new P.hn(a),0))},
mx:function(a){P.je(C.v,a)},
mJ:function(a,b){if(H.bh(a,{func:1,args:[P.aU,P.aU]})){b.toString
return a}else{b.toString
return a}},
mz:function(a,b){var t,s,r
H.d(b.a<4)
H.d(!(a instanceof P.ax))
H.d(b.a===0)
b.a=1
try{a.cp(new P.hD(b),new P.hE(b))}catch(r){t=H.P(r)
s=H.aG(r)
P.nf(new P.hF(b,t,s))}},
kv:function(a,b){var t,s,r,q
H.d(b.a<=1)
for(;t=a.a,s=t===2,s;){H.d(s)
a=a.c}s=b.a
if(t>=4){H.d(s<4)
r=b.c
b.c=null
q=b.ah(r)
H.d(b.a<4)
H.d(a.a>=4)
b.a=a.a
b.c=a.c
P.bO(b,q)}else{q=b.c
H.d(s<=1)
b.a=2
b.c=a
a.bH(q)}},
bO:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.ij(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bO(t.a,b)}s=t.a
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
P.ij(null,null,p,o,s)
return}s=$.B
if(s==null?l!=null:s!==l){H.d(l!=null)
s=$.B
H.d(l==null?s!=null:l!==s)
j=$.B
$.B=l
i=j}else i=null
s=b.c
if(s===8)new P.hJ(t,r,q,b).$0()
else if(p){if((s&1)!==0)new P.hI(r,b,m).$0()}else if((s&2)!==0)new P.hH(t,r,b).$0()
if(i!=null){H.d(!0)
$.B=i}s=r.b
if(!!J.v(s).$ises){if(s.a>=4){H.d(o.a<4)
h=o.c
o.c=null
b=o.ah(h)
H.d(o.a<4)
H.d(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.kv(s,o)
return}}g=b.b
H.d(g.a<4)
h=g.c
g.c=null
b=g.ah(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.d(!o)
g.a=4
g.c=p}else{H.d(!o)
g.a=8
g.c=p}t.a=g
s=g}},
mI:function(){var t,s
for(;t=$.bf,t!=null;){$.bW=null
s=t.b
$.bf=s
if(s==null)$.bV=null
t.a.$0()}},
mM:function(){$.jk=!0
try{P.mI()}finally{$.bW=null
$.jk=!1
if($.bf!=null)$.$get$jg().$1(P.kJ())}},
kC:function(a){var t=new P.dt(a,null)
if($.bf==null){$.bV=t
$.bf=t
if(!$.jk)$.$get$jg().$1(P.kJ())}else{$.bV.b=t
$.bV=t}},
mL:function(a){var t,s,r
t=$.bf
if(t==null){P.kC(a)
$.bW=$.bV
return}s=new P.dt(a,null)
r=$.bW
if(r==null){s.b=t
$.bW=s
$.bf=s}else{s.b=r.b
r.b=s
$.bW=s
if(s.b==null)$.bV=s}},
nf:function(a){var t=$.B
if(C.f===t){P.il(null,null,C.f,a)
return}t.toString
P.il(null,null,t,t.aY(a))},
mq:function(a,b){var t=$.B
if(t===C.f){t.toString
return P.je(a,b)}return P.je(a,t.aY(b))},
je:function(a,b){var t=C.b.D(a.a,1000)
return H.mp(t<0?0:t,b)},
jf:function(a){var t,s
H.d(a!=null)
t=$.B
H.d(a==null?t!=null:a!==t)
s=$.B
$.B=a
return s},
ij:function(a,b,c,d,e){var t={}
t.a=d
P.mL(new P.ik(t,e))},
kA:function(a,b,c,d){var t,s
if($.B===c)return d.$0()
t=P.jf(c)
try{s=d.$0()
return s}finally{s=t
H.d(s!=null)
$.B=s}},
kB:function(a,b,c,d,e){var t,s
if($.B===c)return d.$1(e)
t=P.jf(c)
try{s=d.$1(e)
return s}finally{s=t
H.d(s!=null)
$.B=s}},
mK:function(a,b,c,d,e,f){var t,s
if($.B===c)return d.$2(e,f)
t=P.jf(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.d(s!=null)
$.B=s}},
il:function(a,b,c,d){var t=C.f!==c
if(t)d=!(!t||!1)?c.aY(d):c.e2(d)
P.kC(d)},
hl:function hl(a){this.a=a},
hk:function hk(a,b,c){this.a=a
this.b=b
this.c=c},
hm:function hm(a){this.a=a},
hn:function hn(a){this.a=a},
hr:function hr(){},
i9:function i9(a,b){this.a=a
this.$ti=b},
dv:function dv(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
ax:function ax(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hC:function hC(a,b){this.a=a
this.b=b},
hG:function hG(a,b){this.a=a
this.b=b},
hD:function hD(a){this.a=a},
hE:function hE(a){this.a=a},
hF:function hF(a,b,c){this.a=a
this.b=b
this.c=c},
hJ:function hJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hK:function hK(a){this.a=a},
hI:function hI(a,b,c){this.a=a
this.b=b
this.c=c},
hH:function hH(a,b,c){this.a=a
this.b=b
this.c=c},
dt:function dt(a,b){this.a=a
this.b=b},
fJ:function fJ(){},
fL:function fL(a){this.a=a},
fM:function fM(a,b){this.a=a
this.b=b},
fK:function fK(){},
b5:function b5(a,b){this.a=a
this.b=b},
ih:function ih(){},
ik:function ik(a,b){this.a=a
this.b=b},
hW:function hW(){},
hY:function hY(a,b){this.a=a
this.b=b},
hX:function hX(a,b){this.a=a
this.b=b},
hZ:function hZ(a,b){this.a=a
this.b=b},
k6:function(a,b){return new H.ae(0,null,null,null,null,null,0,[a,b])},
C:function(){return new H.ae(0,null,null,null,null,null,0,[null,null])},
aT:function(a){return H.mX(a,new H.ae(0,null,null,null,null,null,0,[null,null]))},
bS:function(a,b){return new P.dw(0,null,null,null,null,null,0,[a,b])},
mD:function(){var t=Object.create(null)
H.d(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
m7:function(a,b,c){var t,s
if(P.jl(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$bX()
C.a.l(s,a)
try{P.mH(a,t)}finally{H.d(C.a.gb1(s)===a)
s.pop()}s=P.kd(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eA:function(a,b,c){var t,s,r
if(P.jl(a))return b+"..."+c
t=new P.bJ(b)
s=$.$get$bX()
C.a.l(s,a)
try{r=t
r.a=P.kd(r.ga0(),a,", ")}finally{H.d(C.a.gb1(s)===a)
s.pop()}s=t
s.a=s.ga0()+c
s=t.ga0()
return s.charCodeAt(0)==0?s:s},
jl:function(a){var t,s
for(t=0;s=$.$get$bX(),t<s.length;++t)if(a===s[t])return!0
return!1},
mH:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gv(a)
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
af:function(a,b,c,d){return new P.hP(0,null,null,null,null,null,0,[d])},
jb:function(a,b){var t,s
t=P.af(null,null,null,b)
for(s=J.bk(a);s.p();)t.l(0,s.gq())
return t},
ma:function(a){var t,s,r
t={}
if(P.jl(a))return"{...}"
s=new P.bJ("")
try{C.a.l($.$get$bX(),a)
r=s
r.a=r.ga0()+"{"
t.a=!0
a.az(0,new P.eM(t,s))
t=s
t.a=t.ga0()+"}"}finally{t=$.$get$bX()
H.d(C.a.gb1(t)===a)
t.pop()}t=s.ga0()
return t.charCodeAt(0)==0?t:t},
jc:function(a,b){var t=new P.eJ(null,0,0,0,[b])
t.de(a,b)
return t},
dw:function dw(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hP:function hP(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hQ:function hQ(a,b,c){this.a=a
this.b=b
this.c=c},
bR:function bR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hN:function hN(){},
d2:function d2(){},
w:function w(){},
eM:function eM(a,b){this.a=a
this.b=b},
eJ:function eJ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hR:function hR(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fy:function fy(){},
fx:function fx(){},
bG:function bG(){},
kd:function(a,b,c){var t=J.bk(b)
if(!t.p())return a
if(c.length===0){do a+=H.f(t.gq())
while(t.p())}else{a+=H.f(t.gq())
for(;t.p();)a=a+c+H.f(t.gq())}return a},
lS:function(a,b){return J.lb(a,b)},
lT:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.f(t)
if(t>=10)return s+"00"+H.f(t)
return s+"000"+H.f(t)},
lU:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c6:function(a){if(a>=10)return""+a
return"0"+a},
j4:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aK(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lY(a)},
lY:function(a){var t=J.v(a)
if(!!t.$isb6)return t.k(a)
return H.fl(a)},
jH:function(a){return new P.ao(!1,null,null,a)},
jI:function(a,b,c){return new P.ao(!0,a,b,c)},
fm:function(a,b,c){return new P.dh(null,null,!0,a,b,"Value not in range")},
aW:function(a,b,c,d,e){return new P.dh(b,c,!0,a,d,"Invalid value")},
kb:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.aW(a,0,c,"start",f))
if(a>b||b>c)throw H.e(P.aW(b,a,c,"end",f))
return b},
A:function(a,b,c,d,e){var t=e!=null?e:J.dG(b)
return new P.ew(b,t,!0,a,c,"Index out of range")},
cc:function(a){return new P.hB(a)},
k7:function(a,b,c){var t,s
t=H.D([],[c])
for(s=J.bk(a);s.p();)C.a.l(t,s.gq())
return t},
az:function(a){H.iK(H.f(a))},
ay:function ay(){},
H:function H(){},
bm:function bm(a,b){this.a=a
this.b=b},
K:function K(){},
aO:function aO(a){this.a=a},
e0:function e0(){},
e1:function e1(){},
b8:function b8(){},
c3:function c3(a){this.a=a},
de:function de(){},
ao:function ao(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dh:function dh(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ew:function ew(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
r:function r(a){this.a=a},
dr:function dr(a){this.a=a},
aD:function aD(a){this.a=a},
a0:function a0(a){this.a=a},
dk:function dk(){},
dU:function dU(a){this.a=a},
hB:function hB(a){this.a=a},
e3:function e3(a,b,c){this.a=a
this.b=b
this.$ti=c},
m:function m(){},
V:function V(){},
cZ:function cZ(){},
b:function b(){},
aC:function aC(){},
aU:function aU(){},
U:function U(){},
o:function o(){},
bI:function bI(){},
q:function q(){},
bJ:function bJ(a){this.a=a},
iq:function(a){var t,s,r,q,p
if(a==null)return
t=P.C()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.O)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
mU:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.lo(a,new P.ip(t))
return t},
jX:function(){var t=$.jW
if(t==null){t=J.iW(window.navigator.userAgent,"Opera",0)
$.jW=t}return t},
lV:function(){var t,s
t=$.jT
if(t!=null)return t
s=$.jU
if(s==null){s=J.iW(window.navigator.userAgent,"Firefox",0)
$.jU=s}if(s)t="-moz-"
else{s=$.jV
if(s==null){s=!P.jX()&&J.iW(window.navigator.userAgent,"Trident/",0)
$.jV=s}if(s)t="-ms-"
else t=P.jX()?"-o-":"-webkit-"}$.jT=t
return t},
ip:function ip(a){this.a=a},
hV:function hV(){},
I:function I(){},
dI:function dI(){},
aL:function aL(){},
e4:function e4(){},
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
eo:function eo(){},
eq:function eq(){},
ad:function ad(){},
aB:function aB(){},
ev:function ev(){},
aq:function aq(){},
eF:function eF(){},
eN:function eN(){},
eO:function eO(){},
ar:function ar(){},
f5:function f5(){},
fc:function fc(){},
fh:function fh(){},
fi:function fi(){},
fn:function fn(){},
fo:function fo(){},
bH:function bH(){},
fN:function fN(){},
G:function G(){},
fO:function fO(){},
fP:function fP(){},
dm:function dm(){},
fT:function fT(){},
bL:function bL(){},
as:function as(){},
h2:function h2(){},
ha:function ha(){},
hc:function hc(){},
hd:function hd(){},
bP:function bP(){},
i_:function i_(){},
i0:function i0(){},
i1:function i1(){},
cq:function cq(){},
cp:function cp(){},
cm:function cm(){},
cs:function cs(){},
cI:function cI(){},
cL:function cL(){},
cN:function cN(){},
cT:function cT(){},
dM:function dM(){},
fs:function fs(){},
ft:function ft(){},
id:function id(){},
fE:function fE(){},
cz:function cz(){},
cW:function cW(){}},W={
kL:function(){return document},
lW:function(a,b,c){var t,s
t=document.body
s=(t&&C.o).M(t,a,b,c)
s.toString
t=new H.ds(new W.R(s),new W.io(),[W.p])
return t.ga_(t)},
lX:function(a){return"wheel"},
bo:function(a){var t,s,r
t="element tag unavailable"
try{s=J.ls(a)
if(typeof s==="string")t=a.tagName}catch(r){H.P(r)}return t},
my:function(a,b){return document.createElement(a)},
b4:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ky:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
aw:function(a,b,c,d,e){var t=W.kD(new W.hA(c))
t=new W.hz(0,a,b,t,!1,[e])
t.ds(a,b,c,!1,e)
return t},
kw:function(a){var t,s
t=document.createElement("a")
s=new W.i2(t,window.location)
s=new W.bQ(s)
s.dt(a)
return s},
mB:function(a,b,c,d){return!0},
mC:function(a,b,c,d){var t,s,r,q,p
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
kz:function(){var t=P.q
t=new W.ia(P.jb(C.q,t),P.af(null,null,null,t),P.af(null,null,null,t),P.af(null,null,null,t),null)
t.dv(null,new H.by(C.q,new W.ib(),[H.aH(C.q,0),null]),["TEMPLATE"],null)
return t},
kD:function(a){var t=$.B
if(t===C.f)return a
return t.e3(a)},
k:function k(){},
dJ:function dJ(){},
dK:function dK(){},
a_:function a_(){},
dN:function dN(){},
c4:function c4(){},
aM:function aM(){},
c5:function c5(){},
dP:function dP(){},
aN:function aN(){},
dS:function dS(){},
y:function y(){},
b7:function b7(){},
dT:function dT(){},
dV:function dV(){},
dW:function dW(){},
c7:function c7(){},
bn:function bn(){},
c8:function c8(){},
dX:function dX(){},
c9:function c9(){},
dY:function dY(){},
ca:function ca(){},
cb:function cb(){},
dZ:function dZ(){},
e_:function e_(){},
a1:function a1(){},
io:function io(){},
j:function j(){},
h:function h(){},
a2:function a2(){},
em:function em(){},
en:function en(){},
er:function er(){},
a3:function a3(){},
ci:function ci(){},
et:function et(){},
bv:function bv(){},
cj:function cj(){},
eu:function eu(){},
bw:function bw(){},
ex:function ex(){},
aS:function aS(){},
eK:function eK(){},
eQ:function eQ(){},
eS:function eS(){},
bz:function bz(){},
a4:function a4(){},
eT:function eT(){},
M:function M(){},
f2:function f2(){},
R:function R(a){this.a=a},
p:function p(){},
da:function da(){},
bF:function bF(){},
fb:function fb(){},
fe:function fe(){},
a5:function a5(){},
fg:function fg(){},
fj:function fj(){},
fk:function fk(){},
dg:function dg(){},
fu:function fu(){},
di:function di(){},
fw:function fw(){},
fA:function fA(){},
a6:function a6(){},
fB:function fB(){},
a7:function a7(){},
fD:function fD(){},
a8:function a8(){},
fI:function fI(){},
W:function W(){},
ai:function ai(){},
dl:function dl(){},
fQ:function fQ(){},
fR:function fR(){},
bK:function bK(){},
a9:function a9(){},
X:function X(){},
fU:function fU(){},
fV:function fV(){},
fX:function fX(){},
aa:function aa(){},
aX:function aX(){},
h0:function h0(){},
h1:function h1(){},
bd:function bd(){},
h3:function h3(){},
dq:function dq(){},
aF:function aF(){},
h9:function h9(){},
hb:function hb(){},
he:function he(){},
hf:function hf(){},
b_:function b_(){},
bN:function bN(){},
hh:function hh(a){this.a=a},
hi:function hi(){},
b0:function b0(){},
hq:function hq(){},
du:function du(){},
hs:function hs(){},
ht:function ht(){},
hu:function hu(){},
hL:function hL(){},
hM:function hM(){},
dx:function dx(){},
i3:function i3(){},
i6:function i6(){},
i7:function i7(){},
ie:function ie(){},
ig:function ig(){},
ho:function ho(){},
hv:function hv(a){this.a=a},
hy:function hy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jh:function jh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hz:function hz(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
hA:function hA(a){this.a=a},
bQ:function bQ(a){this.a=a},
z:function z(){},
dc:function dc(a){this.a=a},
f4:function f4(a){this.a=a},
f3:function f3(a,b,c){this.a=a
this.b=b
this.c=c},
bT:function bT(){},
i4:function i4(){},
i5:function i5(){},
ia:function ia(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
ib:function ib(){},
i8:function i8(){},
cf:function cf(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
db:function db(){},
i2:function i2(a,b){this.a=a
this.b=b},
dz:function dz(a){this.a=a},
ic:function ic(a){this.a=a},
bp:function bp(){},
bq:function bq(){},
br:function br(){},
bs:function bs(){},
bt:function bt(){},
bu:function bu(){},
ck:function ck(){},
cE:function cE(){},
cn:function cn(){},
cx:function cx(){},
cy:function cy(){},
cA:function cA(){},
cB:function cB(){},
cC:function cC(){},
cD:function cD(){},
cl:function cl(){},
co:function co(){},
cr:function cr(){},
ct:function ct(){},
cu:function cu(){},
cv:function cv(){},
cw:function cw(){},
cF:function cF(){},
cG:function cG(){},
cH:function cH(){},
cR:function cR(){},
cS:function cS(){},
cP:function cP(){},
cQ:function cQ(){},
cV:function cV(){},
cX:function cX(){},
cY:function cY(){},
cJ:function cJ(){},
cK:function cK(){},
cM:function cM(){},
cO:function cO(){},
cU:function cU(){}},B={
ng:function(a){var t,s
t=document
s=W.aS
W.aw(t,"keydown",new B.iM(),!1,s)
W.aw(t,"keyup",new B.iN(),!1,s)
if(!$.nh)W.aw(t,"mousemove",new B.iO(),!1,W.M)
s=W.M
W.aw(t,"mousedown",new B.iP(),!1,s)
W.aw(t,"mouseup",new B.iQ(),!1,s)},
mb:function(a,b,c,d){var t,s,r,q
t=new Float32Array(H.u(3))
s=$.$get$ir()
r=$.$get$bZ()
q=new T.ag(new Float32Array(H.u(16)))
q.a7()
q=new B.f6(a,b,c,0,new T.t(t),-0.02,s,r,q,new T.t(new Float32Array(H.u(3))),new T.t(new Float32Array(H.u(3))),new T.t(new Float32Array(H.u(3))),new T.t(new Float32Array(H.u(3))),"camera:orbit",!1,!0)
q.df(a,b,c,d)
return q},
iM:function iM(){},
iN:function iN(){},
iO:function iO(){},
iP:function iP(){},
iQ:function iQ(){},
f6:function f6(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
f7:function f7(a){this.a=a},
f8:function f8(a){this.a=a},
f9:function f9(){},
fa:function fa(a){this.a=a},
mm:function(a,b,c,d,e,f,a0,a1,a2,a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=a1+1
s=a0+1
r=B.mc(new B.fz(f,d,e,c),0,6.283185307179586,s,!1,0.001)
H.d(r.length===2*s)
q=B.mr(r,a1,a2,!1)
H.d(q.length===s)
H.d(q[0].length===2*t)
p=[]
o=new G.ch(!1,[],[],p,P.C())
for(n=q.length,m=0;m<q.length;q.length===n||(0,H.O)(q),++m){l=q[m]
for(k=0;k<l.length;k+=2){j=l[k]
j.toString
i=new T.t(new Float32Array(3))
i.G(j)
C.a.l(p,i)}}H.d(p.length===t*s)
o.da(t,s,!1)
o.dc(t,s)
n=o.e
H.d(n.h(0,"aTexUV").length===p.length)
o.aK("aNormal")
for(j=q.length,m=0;m<q.length;q.length===j||(0,H.O)(q),++m){l=q[m]
for(k=0;k<l.length;k+=2){i=l[k+1]
h=n.h(0,"aNormal")
i.toString
g=new T.t(new Float32Array(3))
g.G(i);(h&&C.a).l(h,g)}}H.d(n.h(0,"aNormal").length===p.length)
return o},
mr:function(a1,a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
t=[]
s=new Float32Array(H.u(3))
r=new T.t(s)
q=new Float32Array(H.u(3))
p=new T.t(q)
o=new Float32Array(H.u(3))
n=new T.t(o)
for(m=a2+1,l=0;l<a1.length;l+=2){k=a1[l]
j=a1[l+1]
i=[]
C.a.l(t,i)
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
o[2]=e*d}p.a2(0)
n.a2(0)
for(c=0;c<m;++c){b=c/a2*2*3.141592653589793
a=a3*Math.cos(b)
a0=a3*Math.sin(b)
r.G(k)
r.ay(p,a)
r.ay(n,a0)
h=new T.t(new Float32Array(3))
h.G(r)
C.a.l(i,h)
s[2]=0
s[1]=0
s[0]=0
r.ay(p,a)
r.ay(n,a0)
r.a2(0)
h=new T.t(new Float32Array(3))
h.G(r)
C.a.l(i,h)}}return t},
mc:function(a,b,c,d,e,f){var t,s,r,q,p,o,n
H.d(d>=2)
t=[]
s=new T.t(new Float32Array(H.u(3)))
r=new T.t(new Float32Array(H.u(3)))
for(q=(c-b)/(d-1),p=0;p<d;++p){o=q*p+b
a.$2(o,s)
a.$2(o+f,r)
r.bk(s)
n=new T.t(new Float32Array(3))
n.G(s)
C.a.l(t,n)
n=new T.t(new Float32Array(3))
n.G(r)
C.a.l(t,n)}return t},
fz:function fz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},G={
mt:function(a){var t,s,r
t=a.split("\n")
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.f(t[s])}return C.a.an(t,"\n")},
ku:function(a,b,c){var t,s,r,q
t=J.i(a)
s=t.c4(a,b)
t.bh(a,s,c)
t.c0(a,s)
r=t.bd(a,s,35713)
if(r!=null&&!r){q=t.bc(a,s)
P.az("E:Compilation failed:")
P.az("E:"+G.mt(c))
P.az("E:Failure:")
P.az(C.i.a4("E:",q))
throw H.e(q)}return s},
j5:function(a,b,c){var t,s,r
t=$.$get$ke()
s=G.kq(a,"frame::color",b,c,32856,t)
t=G.kq(a,"frame::depth",b,c,33190,t)
r=new G.cg(a,null,s,t,null)
r.d8(a,s,t,null,!1)
return r},
k0:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.iZ(a[s])
b[t+1]=J.j_(a[s])
b[t+2]=J.jz(a[s])}return b},
m_:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.iZ(a[s])
b[t+1]=J.j_(a[s])}return b},
m0:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.iZ(a[s])
b[t+1]=J.j_(a[s])
b[t+2]=J.jz(a[s])
b[t+3]=J.lt(a[s])}return b},
lZ:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.bi(a[s],0)
b[t+1]=J.bi(a[s],1)
b[t+2]=J.bi(a[s],2)
b[t+3]=J.bi(a[s],3)}return b},
mA:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
for(t=a.e,s=t.gE(t),s=s.gv(s),r=b.x,q=[[P.b,P.m]],p=[P.K],o=[T.av],n=[T.t],m=[T.L];s.p();){l=s.gq()
if(!r.F(0,l)){k="Dropping unnecessary attribute: "+H.f(l)
if($.kP>0)H.iK("I: "+k)
continue}j=t.h(0,l)
switch($.$get$S().h(0,l).a){case"vec2":b.aa(l,G.m_(H.dC(j,"$isb",m,"$asb"),null),2)
break
case"vec3":b.aa(l,G.k0(H.dC(j,"$isb",n,"$asb"),null),3)
break
case"vec4":b.aa(l,G.m0(H.dC(j,"$isb",o,"$asb"),null),4)
break
case"float":b.aa(l,new Float32Array(H.ii(H.dC(j,"$isb",p,"$asb"))),1)
break
case"uvec4":b.aa(l,G.lZ(H.dC(j,"$isb",q,"$asb"),null),4)
break
default:if(H.ab(!1))H.ak("unknown type for "+H.f(l)+" ["+J.lr(j[0]).k(0)+"] ["+new H.aE(H.iv(j),null).k(0)+"] "+H.f(j))}}},
k1:function(a,b,c){var t,s,r,q,p,o,n,m
t=b.d
s=b.e.x
r=P.C()
q=J.lf(t.a)
p=new G.eR(t,q,4,r,s,null,0,-1,null,null,P.C(),"meshdata:"+a,!1,!0)
o=G.k0(c.d,null)
r.i(0,"aPosition",J.iX(t.a))
p.ch=o
p.bm("aPosition",o,3)
n=$.$get$S().h(0,"aPosition")
if(n==null)H.E("Unknown canonical aPosition")
H.d(s.F(0,"aPosition"))
m=s.h(0,"aPosition")
J.dF(t.a,q)
t.cd(0,m,0)
s=r.h(0,"aPosition")
r=n.bn()
J.dD(t.a,34962,s)
J.jG(t.a,m,r,5126,!1,0,0)
s=c.d9()
p.y=J.iX(t.a)
H.d(p.ch!=null)
r=p.ch.length
if(r<768){p.saR(new Uint8Array(H.ii(s)))
p.Q=5121}else if(r<196608){p.saR(new Uint16Array(H.ii(s)))
p.Q=5123}else{p.saR(new Uint32Array(H.ii(s)))
p.Q=5125}J.dF(t.a,q)
s=p.y
r=p.cx
q=J.v(r)
H.d(!!q.$iskr||!!q.$isks||!!q.$iskt)
J.dD(t.a,34963,s)
J.jx(t.a,34963,r,35048)
G.mA(c,p)
return p},
fr:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.af(null,null,null,P.q)
s=c.b
r=d.b
q=c.f
p=J.ld(b.a)
o=G.ku(b.a,35633,s)
J.jw(b.a,p,o)
n=G.ku(b.a,35632,r)
J.jw(b.a,p,n)
if(q.length>0)J.lG(b.a,p,q,35980)
J.ly(b.a,p)
if(!J.lx(b.a,p,35714))H.E(J.lw(b.a,p))
t=new G.fq(b,c,d,p,P.jb(c.c,null),P.C(),P.C(),t,null,a,!1,!0)
t.dg(a,b,c,d)
return t},
kq:function(a,b,c,d,e,f){var t=new G.h7(c,d,e,b,J.le(a.a),3553,a,f)
t.dl(a,b,c,d,e,f)
return t},
eU:function eU(){},
aY:function aY(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dO:function dO(){},
dR:function dR(a,b){this.a=a
this.b=b},
cg:function cg(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cd:function cd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ch:function ch(a,b,c,d,e){var _=this
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
eP:function eP(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
eR:function eR(a,b,c,d,e,f,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
fd:function fd(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
fq:function fq(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
x:function x(a,b,c){this.a=a
this.b=b
this.c=c},
ah:function ah(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fC:function fC(){},
fW:function fW(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bM:function bM(){},
h7:function h7(a,b,c,d,e,f,g,h){var _=this
_.f=a
_.r=b
_.x=c
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h}},R={fG:function fG(){},fH:function fH(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},A={
iw:function(a){var t,s
t=C.W.eo(a,0,new A.ix())
s=536870911&t+(C.b.cG(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
ix:function ix(){}},T={
ms:function(a,b,c){var t=new T.t(new Float32Array(H.u(3)))
t.O(a,b,c)
return t},
ag:function ag(a){this.a=a},
L:function L(a){this.a=a},
t:function t(a){this.a=a},
av:function av(a){this.a=a}},Q={
n9:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
t={}
s=document
r=new R.fH(0,0,null,null,null,null)
r.dj(C.j.cK(s,"stats"),"blue","gray")
q=C.j.b6(s,"#webgl-canvas")
p=new G.dR(null,q)
s=(q&&C.H).cJ(q,"webgl2",P.aT(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
p.a=s
if(s==null)H.E(P.cc('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
o="ChronosGL Config: "+J.aK(J.lu(s))
if($.kP>0)P.az("I: "+o)
J.la(s,0,0,0,1)
J.c2(s,2929)
J.c2(s,2884)
n=B.mb(165,0,0,q)
s=new T.ag(new Float32Array(H.u(16)))
s.a7()
o=new T.ag(new Float32Array(H.u(16)))
o.a7()
m=new G.fd(n,50,1,0.1,1000,s,o,new T.ag(new Float32Array(H.u(16))),P.C(),"perspective",!1,!0)
m.br()
l=q.clientWidth
k=q.clientHeight
q.width=l
q.height=k
m.d6(l,k)
j=G.j5(p,l,k)
o=C.b.D(l,2)
s=C.b.D(k,2)
i=G.j5(p,o,s)
h=G.j5(p,o,s)
s=$.$get$kZ()
o=new G.ah("BlackPerlinNoiseColor F",null,[],[],[],[],0,P.C())
o.S(["vNormal"])
o.ab(["uTime","uTransformationMatrix"])
H.d(o.b==null)
o.b=o.ad(!1,["#define BLACK 1","vec3 mod289(vec3 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x)\n{\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec3 fade(vec3 t) {\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\n\n// Classic Perlin noise, periodic variant\nfloat pnoise(vec3 P, vec3 rep)\n{\n  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \n  return 2.2 * n_xyz;\n}\n","#define VARIANT 1\n\nvoid main() {\n#if VARIANT == 1\n  float mytime = uTime/2.0;\n#ifdef BLACK\n  mytime = uTime/10.0;\n#endif\n  float period = 10.0;\n  float factor = 1.0; // sin( uTime)/4.0+2.0;\n  vec3 translation = uTransformationMatrix[3].xyz;\n  float r = pnoise( .75 * ( vNormal *factor + mytime ), vec3( period ) );\n  float g = pnoise( 0.8 * ( vNormal *factor + mytime ), vec3( period ) );\n  float b = pnoise( 0.9 * ( vNormal *factor + mytime ), vec3( period ) );\n  float n = pnoise( 1.5 * ( vNormal *factor + mytime ), vec3( period ) );\n#else\n  float mytime = 0.0 ; //uTime/50.0;\n  float period = 5.0;\n  float factor = 1.0; // sin( uTime)/4.0+2.0;\n  vec3 translation = uTransformationMatrix[3].xyz;\n  float r = pnoise( .75 * ( translation*0.175 + vNormal *factor + mytime ), vec3( period ) );\n  float g = pnoise( 0.8 * ( translation*0.175 + vNormal *factor + mytime ), vec3( period ) );\n  float b = pnoise( 0.9 * ( translation*0.175 + vNormal *factor + mytime ), vec3( period ) );\n  float n = pnoise( 1.5 * ( translation*0.175 + vNormal *factor + mytime ), vec3( period ) );\n#endif\n\n  n = pow( .001, n );\n//float n = 10.0 * pnoise( 5.0 * ( vNormal + uTime ), vec3( 10.0 ) ) * pnoise( .5 * ( vNormal + uTime ), vec3( 10.0 ) );\n//n += .5 * pnoise( 4.0 * vNormal, vec3( 10.0 ) );\n#ifdef BLACK\n  vec3 color = vec3( 1.0-(r + n), 1.0-(g + n), 1.0-(b + n) );\n#else\n  vec3 color = vec3( (r + n), (g + n), (b + n) );\n#endif\n  oFragColor = vec4( color, 1.0 );\n}\n"],null)
g=G.fr("perlin",p,s,o)
f=G.fr("highpass",p,$.$get$kM(),$.$get$kW())
e=V.nb(6,6)
o=new G.ah("uv-passthru",null,[],[],[],[],0,P.C())
o.as(["aPosition","aTexUV"])
o.S(["vTexUV"])
H.d(o.b==null)
o.b=o.ad(!0,["gl_Position = vec4(aPosition, 1.0);","vTexUV = aTexUV;"],null)
s=new G.ah("BloomPassF",null,[],[],[],[],0,P.C())
s.S(["vTexUV"])
s.ab(["uDirection","uTexture"])
H.d(s.b==null)
s.b=s.ad(!1,[e,"void main() {\n    vec2 invSize = 1.0 / vec2(textureSize(uTexture, 0));\n    vec3 sum = texture(uTexture, vTexUV).rgb * kernel[0];\n    for (int i = 1; i < kernel.length(); i++) {\n        vec2 offset = uDirection * invSize * float(i);\n        sum += texture(uTexture, vTexUV + offset).rgb * kernel[i];\n        sum += texture(uTexture, vTexUV - offset).rgb * kernel[i];\n    }\n    oFragColor = vec4(sum, 1.0);\n}\n"],null)
d=[o,s]
c=G.fr("bloom",p,d[0],d[1])
b=G.fr("bloom",p,$.$get$kG(),$.$get$kF())
H.d(b.bp(f))
H.d(b.bp(c))
s=new T.t(new Float32Array(H.u(3)))
s.O(-1,-1,0)
o=new T.t(new Float32Array(H.u(3)))
o.O(1,-1,0)
a=new T.t(new Float32Array(H.u(3)))
a.O(1,1,0)
a0=new T.t(new Float32Array(H.u(3)))
a0.O(-1,1,0)
a1=new Float32Array(H.u(2))
a1[0]=0
a1[1]=0
a2=new Float32Array(H.u(2))
a2[0]=1
a2[1]=0
a3=new Float32Array(H.u(2))
a3[0]=1
a3[1]=1
a4=new Float32Array(H.u(2))
a4[0]=0
a4[1]=1
a5=new T.t(new Float32Array(H.u(3)))
a5.O(0,0,1)
a6=new G.ch(!1,[],[],[],P.C())
a6.aK("aTexUV")
a6.d5([s,o,a,a0])
a6.d3("aTexUV",[new T.L(a1),new T.L(a2),new T.L(a3),new T.L(a4)])
a6.aK("aNormal")
a6.d4("aNormal",[a5,a5,a5,a5])
a7=G.k1("quad",b,a6)
a8=new G.eP(P.C(),"mat",!1,!0)
a8.C("cDepthTest",!0)
a8.C("cDepthWrite",!0)
a8.C("cBlendEquation",$.$get$jJ())
a8.C("cStencilFunc",$.$get$kc())
a4=new T.ag(new Float32Array(H.u(16)))
a4.a7()
a8.C("uTransformationMatrix",a4)
a4=new T.ag(new Float32Array(H.u(16)))
a4.a7()
a8.C("uModelMatrix",a4)
a9=G.k1("torusknot",g,B.mm(!0,!0,1,2,3,20,128,16,4,!1))
b0=new G.aY(P.C(),"uniformsHighPass",!1,!0)
a4=new Float32Array(H.u(2))
a4[0]=0.65
a4[1]=0.66
b0.C("uRange",new T.L(a4))
b0.C("uColorAlpha",new T.av(new Float32Array(H.u(4))))
a4=j.c
b0.C("uTexture",a4)
b1=new G.aY(P.C(),"Bloom Horizontal",!1,!0)
a3=new Float32Array(H.u(2))
a3[0]=1.5
a3[1]=0
b1.C("uDirection",new T.L(a3))
a3=h.c
b1.C("uTexture",a3)
b2=new G.aY(P.C(),"Bloom Vertical",!1,!0)
a2=new Float32Array(H.u(2))
a2[0]=0
a2[1]=1.5
b2.C("uDirection",new T.L(a2))
b2.C("uTexture",i.c)
b3=new G.aY(P.C(),"uniformApply",!1,!0)
b3.C("uTexture",a4)
b3.C("uScale",0.6)
b3.C("uColor",$.$get$jQ())
b3.C("uTexture2",a3)
t.a=0
new Q.iI(t,r,n,m,l,k,new G.cg(p,null,null,null,null),j,i,h,g,f,c,b,a7,a8,a9,b0,b1,b2,b3).$1(0)},
iI:function iI(a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1){var _=this
_.a=a1
_.b=a2
_.c=a3
_.d=a4
_.e=a5
_.f=a6
_.r=a7
_.x=a8
_.y=a9
_.z=b0
_.Q=b1
_.ch=b2
_.cx=b3
_.cy=b4
_.db=b5
_.dx=b6
_.dy=b7
_.fr=b8
_.fx=b9
_.fy=c0
_.go=c1}},V={
nb:function(a,b){var t,s,r,q,p,o
t=[]
for(s=b*b,r=0,q=0;q<a;++q){p=0.39894*Math.exp(-0.5*q*q/s)/b
C.a.l(t,p)
r+=p
if(q>0)r+=p}for(o="",q=0,s="";q<a;++q,o=", ")s=s+o+H.f(t[q]/r)
return"float kernel["+a+"] = float["+a+"]("+(s.charCodeAt(0)==0?s:s)+");"}}
var v=[C,H,J,P,W,B,G,R,A,T,Q,V]
setFunctionNamesIfNecessary(v)
var $={}
H.j8.prototype={}
J.a.prototype={
w:function(a,b){return a===b},
gu:function(a){return H.aV(a)},
k:function(a){return H.fl(a)},
gA:function(a){return new H.aE(H.iv(a),null)}}
J.eC.prototype={
k:function(a){return String(a)},
gu:function(a){return a?519018:218159},
gA:function(a){return C.aq},
$isay:1}
J.d1.prototype={
w:function(a,b){return null==b},
k:function(a){return"null"},
gu:function(a){return 0},
gA:function(a){return C.ak}}
J.bx.prototype={
gu:function(a){return 0},
gA:function(a){return C.aj},
k:function(a){return String(a)},
$isk5:1}
J.ff.prototype={}
J.aZ.prototype={}
J.aR.prototype={
k:function(a){var t=a[$.$get$jS()]
return t==null?this.d0(a):J.aK(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isj6:1}
J.aP.prototype={
b_:function(a,b){if(!!a.immutable$list)throw H.e(new P.r(b))},
aZ:function(a,b){if(!!a.fixed$length)throw H.e(new P.r(b))},
l:function(a,b){this.aZ(a,"add")
a.push(b)},
L:function(a,b){var t,s,r,q,p
t=a.length
this.aZ(a,"addAll")
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.O)(b),++r,t=p){q=b[r]
p=t+1
H.d(t===a.length||H.E(new P.a0(a)))
a.push(q)}},
ci:function(a,b){return new H.by(a,b,[H.aH(a,0),null])},
an:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.f(a[s])
return t.join(b)},
t:function(a,b){return a[b]},
gen:function(a){if(a.length>0)return a[0]
throw H.e(H.eB())},
gb1:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.e(H.eB())},
bg:function(a,b,c,d,e){var t,s
this.b_(a,"setRange")
P.kb(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.E(P.aW(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.e(H.m8())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=d[e+s]
else for(s=0;s<t;++s)a[b+s]=d[e+s]},
bQ:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.e(new P.a0(a))}return!1},
cW:function(a,b){this.b_(a,"sort")
H.dj(a,0,a.length-1,P.mV())},
aH:function(a){return this.cW(a,null)},
B:function(a,b){var t
for(t=0;t<a.length;++t)if(J.F(a[t],b))return!0
return!1},
k:function(a){return P.eA(a,"[","]")},
gv:function(a){return new J.dL(a,a.length,0,null,[H.aH(a,0)])},
gu:function(a){return H.aV(a)},
gj:function(a){return a.length},
sj:function(a,b){this.aZ(a,"set length")
if(b<0)throw H.e(P.aW(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.N(a,b))
if(b>=a.length||b<0)throw H.e(H.N(a,b))
return a[b]},
i:function(a,b,c){this.b_(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.N(a,b))
if(b>=a.length||b<0)throw H.e(H.N(a,b))
a[b]=c},
$isl:1,
$asl:function(){},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
J.j7.prototype={}
J.dL.prototype={
gq:function(){return this.d},
p:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.e(H.O(t))
r=this.c
if(r>=s){this.sbs(null)
return!1}this.sbs(t[r]);++this.c
return!0},
sbs:function(a){this.d=a}}
J.b9.prototype={
R:function(a,b){var t
if(typeof b!=="number")throw H.e(H.T(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaA(b)
if(this.gaA(a)===t)return 0
if(this.gaA(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaA:function(a){return a===0?1/a<0:a<0},
e5:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.e(new P.r(""+a+".ceil()"))},
a3:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(new P.r(""+a+".round()"))},
e6:function(a,b,c){if(this.R(b,c)>0)throw H.e(H.T(b))
if(this.R(a,b)<0)return b
if(this.R(a,c)>0)return c
return a},
eQ:function(a,b){var t
if(b>20)throw H.e(P.aW(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gaA(a))return"-"+t
return t},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu:function(a){return a&0x1FFFFFFF},
a4:function(a,b){if(typeof b!=="number")throw H.e(H.T(b))
return a+b},
a8:function(a,b){if(typeof b!=="number")throw H.e(H.T(b))
return a-b},
cH:function(a,b){if(typeof b!=="number")throw H.e(H.T(b))
return a/b},
H:function(a,b){if(typeof b!=="number")throw H.e(H.T(b))
return a*b},
aJ:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bM(a,b)},
D:function(a,b){return(a|0)===a?a/b|0:this.bM(a,b)},
bM:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.e(new P.r("Result of truncating division is "+H.f(t)+": "+H.f(a)+" ~/ "+b))},
aV:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
cG:function(a,b){if(typeof b!=="number")throw H.e(H.T(b))
return(a&b)>>>0},
d2:function(a,b){if(typeof b!=="number")throw H.e(H.T(b))
return(a^b)>>>0},
aG:function(a,b){if(typeof b!=="number")throw H.e(H.T(b))
return a<b},
aF:function(a,b){if(typeof b!=="number")throw H.e(H.T(b))
return a>b},
cI:function(a,b){if(typeof b!=="number")throw H.e(H.T(b))
return a>=b},
gA:function(a){return C.at},
$isU:1}
J.d0.prototype={
gA:function(a){return C.as},
$isK:1,
$ism:1,
$isU:1}
J.d_.prototype={
gA:function(a){return C.ar},
$isK:1,
$isU:1}
J.aQ.prototype={
aM:function(a,b){if(b>=a.length)throw H.e(H.N(a,b))
return a.charCodeAt(b)},
a4:function(a,b){if(typeof b!=="string")throw H.e(P.jI(b,null,null))
return a+b},
cX:function(a,b,c){var t
if(c>a.length)throw H.e(P.aW(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bi:function(a,b){return this.cX(a,b,0)},
bl:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.fm(b,null,null))
if(b>c)throw H.e(P.fm(b,null,null))
if(c>a.length)throw H.e(P.fm(c,null,null))
return a.substring(b,c)},
cY:function(a,b){return this.bl(a,b,null)},
eP:function(a){return a.toLowerCase()},
e8:function(a,b,c){if(c>a.length)throw H.e(P.aW(c,0,a.length,null,null))
return H.ni(a,b,c)},
R:function(a,b){var t
if(typeof b!=="string")throw H.e(H.T(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
k:function(a){return a},
gu:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gA:function(a){return C.al},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.e(H.N(a,b))
return a[b]},
$isl:1,
$asl:function(){},
$isq:1}
H.c.prototype={$asc:null}
H.ba.prototype={
gv:function(a){return new H.d3(this,this.gj(this),0,null,[H.al(this,"ba",0)])},
aD:function(a,b){return this.d_(0,b)},
eO:function(a,b){var t,s
t=H.D([],[H.al(this,"ba",0)])
C.a.sj(t,this.gj(this))
for(s=0;s<this.gj(this);++s)t[s]=this.t(0,s)
return t},
eN:function(a){return this.eO(a,!0)}}
H.d3.prototype={
gq:function(){return this.d},
p:function(){var t,s,r,q
t=this.a
s=J.ac(t)
r=s.gj(t)
if(this.b!==r)throw H.e(new P.a0(t))
q=this.c
if(q>=r){this.saf(null)
return!1}this.saf(s.t(t,q));++this.c
return!0},
saf:function(a){this.d=a}}
H.d4.prototype={
gv:function(a){return new H.eL(null,J.bk(this.a),this.b,this.$ti)},
gj:function(a){return J.dG(this.a)},
$asV:function(a,b){return[b]}}
H.e2.prototype={$isc:1,
$asc:function(a,b){return[b]}}
H.eL.prototype={
p:function(){var t=this.b
if(t.p()){this.saf(this.c.$1(t.gq()))
return!0}this.saf(null)
return!1},
gq:function(){return this.a},
saf:function(a){this.a=a},
$ascZ:function(a,b){return[b]}}
H.by.prototype={
gj:function(a){return J.dG(this.a)},
t:function(a,b){return this.b.$1(J.ll(this.a,b))},
$asc:function(a,b){return[b]},
$asba:function(a,b){return[b]},
$asV:function(a,b){return[b]}}
H.ds.prototype={
gv:function(a){return new H.hg(J.bk(this.a),this.b,this.$ti)}}
H.hg.prototype={
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
H.hT.prototype={
sey:function(a){this.z=a},
seB:function(a){this.ch=a}}
H.b2.prototype={
bP:function(a,b){if(!this.f.w(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.aX()},
eH:function(a){var t,s,r,q,p
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
if(q===r.c)r.bF();++r.d}this.y=!1}this.aX()},
dX:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.v(a),s=0;r=this.ch,s<r.length;s+=2)if(t.w(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
eG:function(a){var t,s,r
if(this.ch==null)return
for(t=J.v(a),s=0;r=this.ch,s<r.length;s+=2)if(t.w(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.E(new P.r("removeRange"))
P.kb(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
cT:function(a,b){if(!this.r.w(0,a))return
this.db=b},
er:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.I(0,c)
return}H.d(b===1)
t=this.cx
if(t==null){t=P.jc(null,null)
this.cx=t}t.T(0,new H.hO(a,c))},
eq:function(a,b){var t
if(!this.r.w(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.aB()
return}H.d(b===1)
t=this.cx
if(t==null){t=P.jc(null,null)
this.cx=t}t.T(0,this.gez())},
es:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.az(a)
if(b!=null)P.az(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.aK(a)
s[1]=b==null?null:b.k(0)
for(r=new P.bR(t,t.r,null,null,[null]),r.c=t.e;r.p();)r.d.I(0,s)},
aj:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.P(o)
p=H.aG(o)
this.es(q,p)
if(this.db){this.aB()
if(this===u.globalState.e)throw o}}finally{this.cy=H.mR(r)
u.globalState.d=H.jp(t,"$isb2")
if(t!=null)$=t.gex()
if(this.cx!=null)for(;n=this.cx,!n.gam(n);)this.cx.cj().$0()}return s},
cg:function(a){return this.b.h(0,a)},
bw:function(a,b){var t=this.b
if(t.F(0,a))throw H.e(P.cc("Registry: ports must be registered only once."))
t.i(0,a,b)},
aX:function(){var t=this.b
if(t.gj(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.aB()},
aB:function(){var t,s,r
t=this.cx
if(t!=null)t.V(0)
for(t=this.b,s=t.gcD(t),s=s.gv(s);s.p();)s.gq().dA()
t.V(0)
this.c.V(0)
u.globalState.z.ao(0,this.a)
this.dx.V(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].I(0,t[r+1])
this.ch=null}},
gex:function(){return this.d},
ge9:function(){return this.e}}
H.hO.prototype={
$0:function(){this.a.I(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.hw.prototype={
ef:function(){var t=this.a
if(t.b===t.c)return
return t.cj()},
cl:function(){var t,s,r
t=this.ef()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.F(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gam(s)}else s=!1
else s=!1
else s=!1
if(s)H.E(P.cc("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gam(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aT(["command","close"])
r=new H.aj(!0,new P.dw(0,null,null,null,null,null,0,[null,P.m])).J(r)
s.toString
self.postMessage(r)}return!1}t.eE()
return!0},
bK:function(){if(self.window!=null)new H.hx(this).$0()
else for(;this.cl(););},
ap:function(){var t,s,r,q,p
if(!u.globalState.x)this.bK()
else try{this.bK()}catch(r){t=H.P(r)
s=H.aG(r)
q=u.globalState.Q
p=P.aT(["command","error","msg",H.f(t)+"\n"+H.f(s)])
p=new H.aj(!0,P.bS(null,P.m)).J(p)
q.toString
self.postMessage(p)}}}
H.hx.prototype={
$0:function(){if(!this.a.cl())return
P.mq(C.v,this)},
$S:function(){return{func:1,v:true}}}
H.b3.prototype={
eE:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.aj(this.b)}}
H.hS.prototype={}
H.ey.prototype={
$0:function(){H.m4(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.ez.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(!this.d)this.a.$1(this.c)
else{s=this.a
if(H.bh(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.bh(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.aX()},
$S:function(){return{func:1,v:true}}}
H.hp.prototype={}
H.be.prototype={
I:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.mF(b)
if(t.ge9()===s){s=J.ac(r)
switch(s.h(r,0)){case"pause":t.bP(s.h(r,1),s.h(r,2))
break
case"resume":t.eH(s.h(r,1))
break
case"add-ondone":t.dX(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.eG(s.h(r,1))
break
case"set-errors-fatal":t.cT(s.h(r,1),s.h(r,2))
break
case"ping":t.er(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.eq(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.ao(0,s)
break}return}u.globalState.f.a.T(0,new H.b3(t,new H.hU(this,r),"receive"))},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.be){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gu:function(a){return this.b.a}}
H.hU.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dw(0,this.b)},
$S:function(){return{func:1}}}
H.bU.prototype={
I:function(a,b){var t,s,r
t=P.aT(["command","message","port",this,"msg",b])
s=new H.aj(!0,P.bS(null,P.m)).J(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bU){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gu:function(a){return C.b.d2((this.b<<16^this.a<<8)>>>0,this.c)}}
H.bc.prototype={
dA:function(){this.c=!0
this.b=null},
dw:function(a,b){if(this.c)return
this.b.$1(b)},
$ismk:1}
H.fY.prototype={
dk:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.T(0,new H.b3(s,new H.fZ(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.bY(new H.h_(this,b),0),a)}else{H.d(a>0)
throw H.e(new P.r("Timer greater than 0."))}}}
H.fZ.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.h_.prototype={
$0:function(){this.a.c=null
H.iH()
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.ap.prototype={
gu:function(a){var t=this.a
t=C.b.aV(t,0)^C.b.D(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
w:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.ap){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.aj.prototype={
J:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gj(t))
t=J.v(a)
if(!!t.$isbA)return["buffer",a]
if(!!t.$isbb)return["typed",a]
if(!!t.$isl)return this.cP(a)
if(!!t.$ism1){r=this.gcM()
q=t.gE(a)
q=H.jd(q,r,H.al(q,"V",0),null)
q=P.k7(q,!0,H.al(q,"V",0))
t=t.gcD(a)
t=H.jd(t,r,H.al(t,"V",0),null)
return["map",q,P.k7(t,!0,H.al(t,"V",0))]}if(!!t.$isk5)return this.cQ(a)
if(!!t.$isa)this.cB(a)
if(!!t.$ismk)this.aq(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isbe)return this.cR(a)
if(!!t.$isbU)return this.cS(a)
if(!!t.$isb6){p=a.$static_name
if(p==null)this.aq(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isap)return["capability",a.a]
if(!(a instanceof P.o))this.cB(a)
return["dart",u.classIdExtractor(a),this.cO(u.classFieldsExtractor(a))]},
aq:function(a,b){throw H.e(new P.r((b==null?"Can't transmit:":b)+" "+H.f(a)))},
cB:function(a){return this.aq(a,null)},
cP:function(a){var t
H.d(typeof a!=="string")
t=this.cN(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.aq(a,"Can't serialize indexable: ")},
cN:function(a){var t,s
t=[]
C.a.sj(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.J(a[s])
return t},
cO:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.J(a[t]))
return a},
cQ:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.aq(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sj(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.J(a[t[r]])
return["js-object",t,s]},
cS:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cR:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.b1.prototype={
W:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.e(P.jH("Bad serialized message: "+H.f(a)))
switch(C.a.gen(a)){case"ref":H.d(J.F(a[0],"ref"))
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
s=H.D(this.ai(t),[null])
s.fixed$length=Array
return s
case"extendable":H.d(J.F(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.D(this.ai(t),[null])
case"mutable":H.d(J.F(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.ai(t)
case"const":H.d(J.F(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
s=H.D(this.ai(t),[null])
s.fixed$length=Array
return s
case"map":return this.ei(a)
case"sendport":return this.ej(a)
case"raw sendport":H.d(J.F(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.eh(a)
case"function":H.d(J.F(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.d(J.F(a[0],"capability"))
return new H.ap(a[1])
case"dart":H.d(J.F(a[0],"dart"))
r=a[1]
q=a[2]
p=u.instanceFromClassId(r)
C.a.l(this.b,p)
this.ai(q)
return u.initializeEmptyInstance(r,p,q)
default:throw H.e("couldn't deserialize: "+H.f(a))}},
ai:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.W(a[t]))
return a},
ei:function(a){var t,s,r,q,p
H.d(J.F(a[0],"map"))
t=a[1]
s=a[2]
r=P.C()
C.a.l(this.b,r)
t=J.lz(t,this.geg()).eN(0)
for(q=J.ac(s),p=0;p<t.length;++p)r.i(0,t[p],this.W(q.h(s,p)))
return r},
ej:function(a){var t,s,r,q,p,o,n
H.d(J.F(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.cg(r)
if(o==null)return
n=new H.be(o,s)}else n=new H.bU(t,r,s)
C.a.l(this.b,n)
return n},
eh:function(a){var t,s,r,q,p,o
H.d(J.F(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.ac(t),p=J.ac(s),o=0;o<q.gj(t);++o)r[q.h(t,o)]=this.W(p.h(s,o))
return r}}
H.fp.prototype={}
H.h4.prototype={
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
H.dd.prototype={
k:function(a){var t=this.b
if(t==null)return"NullError: "+H.f(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.eE.prototype={
k:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.f(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.f(this.a)+")"}}
H.h8.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.iT.prototype={
$1:function(a){if(!!J.v(a).$isb8)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.dy.prototype={
k:function(a){var t,s
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
H.b6.prototype={
k:function(a){return"Closure '"+H.df(this).trim()+"'"},
$isj6:1,
geT:function(){return this},
$D:null}
H.fS.prototype={}
H.fF.prototype={
k:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bl.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bl))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gu:function(a){var t,s
t=this.c
if(t==null)s=H.aV(this.a)
else s=typeof t!=="object"?J.an(t):H.aV(t)
return(s^H.aV(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.f(this.d)+"' of "+H.fl(t)}}
H.h6.prototype={
k:function(a){return this.a}}
H.dQ.prototype={
k:function(a){return this.a}}
H.fv.prototype={
k:function(a){return"RuntimeError: "+H.f(this.a)}}
H.hj.prototype={
k:function(a){return C.i.a4("Assertion failed: ",P.j4(this.a))}}
H.aE.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gu:function(a){return J.an(this.a)},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.aE){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.ae.prototype={
gj:function(a){return this.a},
gam:function(a){return this.a===0},
gE:function(a){return new H.eH(this,[H.aH(this,0)])},
gcD:function(a){return H.jd(this.gE(this),new H.eD(this),H.aH(this,0),H.aH(this,1))},
F:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bC(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bC(s,b)}else return this.eu(b)},
eu:function(a){var t=this.d
if(t==null)return!1
return this.al(this.aw(t,this.ak(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.ag(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.ag(r,b)
return s==null?null:s.b}else return this.ev(b)},
ev:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.aw(t,this.ak(a))
r=this.al(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aS()
this.b=t}this.bu(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aS()
this.c=s}this.bu(s,b,c)}else{r=this.d
if(r==null){r=this.aS()
this.d=r}q=this.ak(b)
p=this.aw(r,q)
if(p==null)this.aU(r,q,[this.aT(b,c)])
else{o=this.al(p,b)
if(o>=0)p[o].b=c
else p.push(this.aT(b,c))}}},
ao:function(a,b){if(typeof b==="string")return this.bI(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bI(this.c,b)
else return this.ew(b)},
ew:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.aw(t,this.ak(a))
r=this.al(s,a)
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
az:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.e(new P.a0(this))
t=t.c}},
bu:function(a,b,c){var t=this.ag(a,b)
if(t==null)this.aU(a,b,this.aT(b,c))
else t.b=c},
bI:function(a,b){var t
if(a==null)return
t=this.ag(a,b)
if(t==null)return
this.bN(t)
this.bD(a,b)
return t.b},
aT:function(a,b){var t,s
t=new H.eG(a,b,null,null,[null,null])
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
ak:function(a){return J.an(a)&0x3ffffff},
al:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.F(a[s].a,b))return s
return-1},
k:function(a){return P.ma(this)},
ag:function(a,b){return a[b]},
aw:function(a,b){return a[b]},
aU:function(a,b,c){H.d(c!=null)
a[b]=c},
bD:function(a,b){delete a[b]},
bC:function(a,b){return this.ag(a,b)!=null},
aS:function(){var t=Object.create(null)
this.aU(t,"<non-identifier-key>",t)
this.bD(t,"<non-identifier-key>")
return t},
$ism1:1}
H.eD.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.eG.prototype={}
H.eH.prototype={
gj:function(a){return this.a.a},
gv:function(a){var t,s
t=this.a
s=new H.eI(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.eI.prototype={
gq:function(){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a0(t))
else{t=this.c
if(t==null){this.sbt(null)
return!1}else{this.sbt(t.a)
this.c=this.c.c
return!0}}},
sbt:function(a){this.d=a}}
H.iy.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.iz.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.q]}}}
H.iA.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.q]}}}
H.bA.prototype={
gA:function(a){return C.ac},
$isbA:1}
H.bb.prototype={$isbb:1}
H.eV.prototype={
gA:function(a){return C.ad}}
H.d6.prototype={
gj:function(a){return a.length},
$isl:1,
$asl:function(){},
$isn:1,
$asn:function(){}}
H.d7.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.N(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.E(H.N(a,b))
a[b]=c}}
H.d8.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.E(H.N(a,b))
a[b]=c},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]}}
H.d5.prototype={
gA:function(a){return C.ae},
$isc:1,
$asc:function(){return[P.K]},
$isb:1,
$asb:function(){return[P.K]},
$isep:1}
H.eW.prototype={
gA:function(a){return C.af},
$isc:1,
$asc:function(){return[P.K]},
$isb:1,
$asb:function(){return[P.K]}}
H.eX.prototype={
gA:function(a){return C.ag},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.N(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]}}
H.eY.prototype={
gA:function(a){return C.ah},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.N(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]},
$isk2:1}
H.eZ.prototype={
gA:function(a){return C.ai},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.N(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]}}
H.f_.prototype={
gA:function(a){return C.am},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.N(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]},
$iskr:1}
H.f0.prototype={
gA:function(a){return C.an},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.N(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]},
$isks:1}
H.d9.prototype={
gA:function(a){return C.ao},
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.N(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]}}
H.f1.prototype={
gA:function(a){return C.ap},
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.N(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]},
$iskt:1}
H.bB.prototype={
$asl:function(){},
$isc:1,
$asc:function(){return[P.m]},
$asn:function(){},
$isb:1,
$asb:function(){return[P.m]}}
H.bC.prototype={
$asl:function(){},
$isc:1,
$asc:function(){return[P.K]},
$asn:function(){},
$isb:1,
$asb:function(){return[P.K]}}
H.bD.prototype={
$asl:function(){},
$asc:function(){return[P.K]},
$asn:function(){},
$asb:function(){return[P.K]}}
H.bE.prototype={
$asl:function(){},
$asc:function(){return[P.m]},
$asn:function(){},
$asb:function(){return[P.m]}}
P.hl.prototype={
$1:function(a){var t,s
H.iH()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.hk.prototype={
$1:function(a){var t,s
t=this.a
H.d(t.a==null);++u.globalState.f.b
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.hm.prototype={
$0:function(){H.iH()
this.a.$0()},
$S:function(){return{func:1}}}
P.hn.prototype={
$0:function(){H.iH()
this.a.$0()},
$S:function(){return{func:1}}}
P.hr.prototype={}
P.i9.prototype={
e7:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.aD("Future already completed"))
t.aO(b)}}
P.dv.prototype={
eC:function(a){if(this.c!==6)return!0
H.d(!0)
return this.b.b.b7(this.d,a.a)},
ep:function(a){var t,s
t=(this.c&2)!==0
if(t){H.d(t)
t=this.e!=null}else t=!1
H.d(t)
s=this.e
t=this.b.b
if(H.bh(s,{func:1,args:[P.o,P.bI]}))return t.eI(s,a.a,a.b)
else return t.b7(s,a.a)}}
P.ax.prototype={
cp:function(a,b){var t,s,r
t=$.B
if(t!==C.f){t.toString
if(b!=null)b=P.mJ(b,t)}s=new P.ax(0,t,null,[null])
r=b==null?1:3
this.bv(new P.dv(null,s,r,a,b,[H.aH(this,0),null]))
return s},
co:function(a){return this.cp(a,null)},
by:function(a){H.d(this.a<4)
H.d(a.a>=4)
this.a=a.a
this.c=a.c},
bv:function(a){var t
H.d(a.a==null)
t=this.a
if(t<=1){a.a=H.jp(this.c,"$isdv")
this.c=a}else{if(t===2){H.d(!0)
t=this.c
if(t.a<4){t.bv(a)
return}this.by(t)}H.d(this.a>=4)
t=this.b
t.toString
P.il(null,null,t,new P.hC(this,a))}},
bH:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.d(!0)
s=this.c
if(s.a<4){s.bH(a)
return}this.by(s)}H.d(this.a>=4)
t.a=this.ah(a)
s=this.b
s.toString
P.il(null,null,s,new P.hG(t,this))}},
bJ:function(){H.d(this.a<4)
var t=this.c
this.c=null
return this.ah(t)},
ah:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aO:function(a){var t,s
H.d(this.a<4)
t=this.$ti
if(H.im(a,"$ises",t,"$ases"))if(H.im(a,"$isax",t,null))P.kv(a,this)
else P.mz(a,this)
else{s=this.bJ()
H.d(this.a<4)
this.a=4
this.c=a
P.bO(this,s)}},
at:function(a,b){var t
H.d(this.a<4)
t=this.bJ()
H.d(this.a<4)
this.a=8
this.c=new P.b5(a,b)
P.bO(this,t)},
dC:function(a){return this.at(a,null)},
$ises:1,
gaW:function(){return this.a},
gdR:function(){return this.c}}
P.hC.prototype={
$0:function(){P.bO(this.a,this.b)},
$S:function(){return{func:1}}}
P.hG.prototype={
$0:function(){P.bO(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.hD.prototype={
$1:function(a){var t=this.a
H.d(t.a===1)
H.d(t.a===1)
t.a=0
t.aO(a)},
$S:function(){return{func:1,args:[,]}}}
P.hE.prototype={
$2:function(a,b){var t=this.a
H.d(t.a===1)
t.at(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.hF.prototype={
$0:function(){this.a.at(this.b,this.c)},
$S:function(){return{func:1}}}
P.hJ.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.d
p=q.c
H.d((p&1)===0)
o=(p&2)===0
H.d(o)
t=null
try{H.d(o)
H.d(p===8)
t=q.b.b.ck(q.d)}catch(n){s=H.P(n)
r=H.aG(n)
if(this.c){q=this.a.a
H.d(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.d(q.a===8)
p.b=q.c}else p.b=new P.b5(s,r)
p.a=!0
return}if(!!J.v(t).$ises){if(t instanceof P.ax&&t.gaW()>=4){if(t.gaW()===8){q=t
H.d(q.gaW()===8)
p=this.b
p.b=q.gdR()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.co(new P.hK(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.hK.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.hI.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.d((r.c&1)!==0)
this.a.b=r.b.b.b7(r.d,this.c)}catch(q){t=H.P(q)
s=H.aG(q)
r=this.a
r.b=new P.b5(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.hH.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.d(q.a===8)
t=q.c
q=this.c
if(q.eC(t)){H.d((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.ep(t)
p.a=!1}}catch(o){s=H.P(o)
r=H.aG(o)
q=this.a
p=q.a
H.d(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.d(q.a===8)
m.b=q.c}else m.b=new P.b5(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.dt.prototype={}
P.fJ.prototype={
gj:function(a){var t,s
t={}
s=new P.ax(0,$.B,null,[P.m])
t.a=0
this.eA(new P.fL(t),!0,new P.fM(t,s),s.gdB())
return s}}
P.fL.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.fM.prototype={
$0:function(){this.b.aO(this.a.a)},
$S:function(){return{func:1}}}
P.fK.prototype={}
P.b5.prototype={
k:function(a){return H.f(this.a)},
$isb8:1}
P.ih.prototype={}
P.ik.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.de()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.e(t)
r=H.e(t)
r.stack=s.k(0)
throw r},
$S:function(){return{func:1}}}
P.hW.prototype={
eJ:function(a){var t,s,r
try{if(C.f===$.B){a.$0()
return}P.kA(null,null,this,a)}catch(r){t=H.P(r)
s=H.aG(r)
P.ij(null,null,this,t,s)}},
eK:function(a,b){var t,s,r
try{if(C.f===$.B){a.$1(b)
return}P.kB(null,null,this,a,b)}catch(r){t=H.P(r)
s=H.aG(r)
P.ij(null,null,this,t,s)}},
e2:function(a){return new P.hY(this,a)},
aY:function(a){return new P.hX(this,a)},
e3:function(a){return new P.hZ(this,a)},
h:function(a,b){return},
ck:function(a){if($.B===C.f)return a.$0()
return P.kA(null,null,this,a)},
b7:function(a,b){if($.B===C.f)return a.$1(b)
return P.kB(null,null,this,a,b)},
eI:function(a,b,c){if($.B===C.f)return a.$2(b,c)
return P.mK(null,null,this,a,b,c)}}
P.hY.prototype={
$0:function(){return this.a.ck(this.b)},
$S:function(){return{func:1}}}
P.hX.prototype={
$0:function(){return this.a.eJ(this.b)},
$S:function(){return{func:1}}}
P.hZ.prototype={
$1:function(a){return this.a.eK(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.dw.prototype={
ak:function(a){return H.nc(a)&0x3ffffff},
al:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.hP.prototype={
gv:function(a){var t=new P.bR(this,this.r,null,null,[null])
t.c=this.e
return t},
gj:function(a){return this.a},
B:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dD(b)},
dD:function(a){var t=this.d
if(t==null)return!1
return this.av(t[this.au(a)],a)>=0},
cg:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.B(0,a)?a:null
else return this.dL(a)},
dL:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.au(a)]
r=this.av(s,a)
if(r<0)return
return J.bi(s,r).gdF()},
l:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.bz(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.bz(r,b)}else return this.T(0,b)},
T:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.mD()
this.d=t}s=this.au(b)
r=t[s]
if(r==null){q=[this.aN(b)]
H.d(q!=null)
t[s]=q}else{if(this.av(r,b)>=0)return!1
r.push(this.aN(b))}return!0},
ao:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bA(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bA(this.c,b)
else return this.dM(0,b)},
dM:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.au(b)]
r=this.av(s,b)
if(r<0)return!1
this.bB(s.splice(r,1)[0])
return!0},
V:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
bz:function(a,b){var t
if(a[b]!=null)return!1
t=this.aN(b)
H.d(!0)
a[b]=t
return!0},
bA:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bB(t)
delete a[b]
return!0},
aN:function(a){var t,s
t=new P.hQ(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bB:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.r=this.r+1&67108863},
au:function(a){return J.an(a)&0x3ffffff},
av:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.F(a[s].a,b))return s
return-1},
$isc:1,
$asc:null}
P.hQ.prototype={
gdF:function(){return this.a}}
P.bR.prototype={
gq:function(){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a0(t))
else{t=this.c
if(t==null){this.sae(null)
return!1}else{this.sae(t.a)
this.c=this.c.b
return!0}}},
sae:function(a){this.d=a}}
P.hN.prototype={}
P.d2.prototype={}
P.w.prototype={
gv:function(a){return new H.d3(a,this.gj(a),0,null,[H.al(a,"w",0)])},
t:function(a,b){return this.h(a,b)},
ci:function(a,b){return new H.by(a,b,[H.al(a,"w",0),null])},
eo:function(a,b,c){var t,s,r
t=this.gj(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gj(a))throw H.e(new P.a0(a))}return s},
k:function(a){return P.eA(a,"[","]")},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
P.eM.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.f(a)
t.a=s+": "
t.a+=H.f(b)},
$S:function(){return{func:1,args:[,,]}}}
P.eJ.prototype={
gv:function(a){return new P.hR(this,this.c,this.d,this.b,null,this.$ti)},
gam:function(a){return this.b===this.c},
gj:function(a){return(this.c-this.b&this.a.length-1)>>>0},
t:function(a,b){var t,s
t=(this.c-this.b&this.a.length-1)>>>0
if(0>b||b>=t)H.E(P.A(b,this,"index",null,t))
s=this.a
return s[(this.b+b&s.length-1)>>>0]},
V:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
k:function(a){return P.eA(this,"{","}")},
cj:function(){var t,s,r
t=this.b
if(t===this.c)throw H.e(H.eB());++this.d
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
C.a.bg(s,0,q,t,r)
C.a.bg(s,q,q+this.b,this.a,0)
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
P.hR.prototype={
gq:function(){return this.e},
p:function(){var t,s
t=this.a
if(this.c!==t.d)H.E(new P.a0(t))
s=this.d
if(s===this.b){this.sae(null)
return!1}this.sae(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sae:function(a){this.e=a}}
P.fy.prototype={
L:function(a,b){var t
for(t=J.bk(b);t.p();)this.l(0,t.gq())},
k:function(a){return P.eA(this,"{","}")},
$isc:1,
$asc:null}
P.fx.prototype={}
P.bG.prototype={$isc:1,$asc:null,$isb:1,$asb:null}
P.ay.prototype={}
P.H.prototype={}
P.bm.prototype={
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.bm))return!1
return this.a===b.a&&this.b===b.b},
R:function(a,b){return C.b.R(this.a,b.a)},
gu:function(a){var t=this.a
return(t^C.b.aV(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.lT(H.mj(this))
s=P.c6(H.mh(this))
r=P.c6(H.md(this))
q=P.c6(H.me(this))
p=P.c6(H.mg(this))
o=P.c6(H.mi(this))
n=P.lU(H.mf(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isH:1,
$asH:function(){return[P.bm]}}
P.K.prototype={$isH:1,
$asH:function(){return[P.U]}}
P.aO.prototype={
aG:function(a,b){return C.b.aG(this.a,b.gdE())},
aF:function(a,b){return C.b.aF(this.a,b.gdE())},
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.aO))return!1
return this.a===b.a},
gu:function(a){return this.a&0x1FFFFFFF},
R:function(a,b){return C.b.R(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.e1()
s=this.a
if(s<0)return"-"+new P.aO(0-s).k(0)
r=t.$1(C.b.D(s,6e7)%60)
q=t.$1(C.b.D(s,1e6)%60)
p=new P.e0().$1(s%1e6)
return""+C.b.D(s,36e8)+":"+H.f(r)+":"+H.f(q)+"."+H.f(p)},
$isH:1,
$asH:function(){return[P.aO]}}
P.e0.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.q,args:[P.m]}}}
P.e1.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.q,args:[P.m]}}}
P.b8.prototype={}
P.c3.prototype={
k:function(a){return"Assertion failed"}}
P.de.prototype={
k:function(a){return"Throw of null."}}
P.ao.prototype={
gaQ:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaP:function(){return""},
k:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+t
q=this.gaQ()+s+r
if(!this.a)return q
p=this.gaP()
o=P.j4(this.b)
return q+p+": "+H.f(o)}}
P.dh.prototype={
gaQ:function(){return"RangeError"},
gaP:function(){var t,s,r
H.d(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.f(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.f(t)
else if(r>t)s=": Not in range "+H.f(t)+".."+H.f(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.f(t)}return s}}
P.ew.prototype={
gaQ:function(){return"RangeError"},
gaP:function(){H.d(this.a)
if(J.l2(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.f(t)},
gj:function(a){return this.f}}
P.r.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.dr.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.aD.prototype={
k:function(a){return"Bad state: "+this.a}}
P.a0.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.f(P.j4(t))+"."}}
P.dk.prototype={
k:function(a){return"Stack Overflow"},
$isb8:1}
P.dU.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.hB.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.f(t)}}
P.e3.prototype={
k:function(a){return"Expando:"+H.f(this.a)},
h:function(a,b){var t,s
t=this.b
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.E(P.jI(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.k8(b,"expando$values")
return s==null?null:H.k8(s,t)}}
P.m.prototype={$isH:1,
$asH:function(){return[P.U]}}
P.V.prototype={
aD:function(a,b){return new H.ds(this,b,[H.al(this,"V",0)])},
gj:function(a){var t,s
H.d(!this.$isc)
t=this.gv(this)
for(s=0;t.p();)++s
return s},
ga_:function(a){var t,s
t=this.gv(this)
if(!t.p())throw H.e(H.eB())
s=t.gq()
if(t.p())throw H.e(H.m9())
return s},
t:function(a,b){var t,s,r
if(b<0)H.E(P.aW(b,0,null,"index",null))
for(t=this.gv(this),s=0;t.p();){r=t.gq()
if(b===s)return r;++s}throw H.e(P.A(b,this,"index",null,s))},
k:function(a){return P.m7(this,"(",")")}}
P.cZ.prototype={}
P.b.prototype={$isc:1,$asc:null,$asb:null}
P.aC.prototype={}
P.aU.prototype={
gu:function(a){return P.o.prototype.gu.call(this,this)},
k:function(a){return"null"}}
P.U.prototype={$isH:1,
$asH:function(){return[P.U]}}
P.o.prototype={constructor:P.o,$iso:1,
w:function(a,b){return this===b},
gu:function(a){return H.aV(this)},
k:function(a){return H.fl(this)},
gA:function(a){return new H.aE(H.iv(this),null)},
toString:function(){return this.k(this)}}
P.bI.prototype={}
P.q.prototype={$isH:1,
$asH:function(){return[P.q]}}
P.bJ.prototype={
gj:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga0:function(){return this.a}}
W.k.prototype={}
W.dJ.prototype={
k:function(a){return String(a)},
$isa:1}
W.dK.prototype={
k:function(a){return String(a)},
$isa:1}
W.a_.prototype={$iso:1}
W.dN.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a_]},
$isc:1,
$asc:function(){return[W.a_]},
$isn:1,
$asn:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.c4.prototype={}
W.aM.prototype={$isa:1,$isaM:1}
W.c5.prototype={
cJ:function(a,b,c){var t=this.dH(a,b,P.mU(c,null))
return t},
dH:function(a,b,c){return a.getContext(b,c)}}
W.dP.prototype={
aE:function(a){return P.iq(a.getContextAttributes())}}
W.aN.prototype={$isa:1,
gj:function(a){return a.length}}
W.dS.prototype={$isa:1}
W.y.prototype={$iso:1}
W.b7.prototype={
bx:function(a,b){var t,s
t=$.$get$jR()
s=t[b]
if(typeof s==="string")return s
s=this.dU(a,b)
t[b]=s
return s},
dU:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.lV()+b
if(t in a)return t
return b},
gj:function(a){return a.length}}
W.dT.prototype={}
W.dV.prototype={
h:function(a,b){return a[b]},
gj:function(a){return a.length}}
W.dW.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.c7.prototype={}
W.bn.prototype={
dY:function(a,b){return a.adoptNode(b)},
cK:function(a,b){return a.getElementById(b)},
b6:function(a,b){return a.querySelector(b)}}
W.c8.prototype={$isa:1}
W.dX.prototype={
k:function(a){return String(a)}}
W.c9.prototype={
ec:function(a,b){return a.createHTMLDocument(b)}}
W.dY.prototype={
gaC:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.ca.prototype={
gaC:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.cb.prototype={
k:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gZ(a))+" x "+H.f(this.gY(a))},
w:function(a,b){var t
if(b==null)return!1
t=J.v(b)
if(!t.$isI)return!1
return a.left===t.gb2(b)&&a.top===t.gb8(b)&&this.gZ(a)===t.gZ(b)&&this.gY(a)===t.gY(b)},
gu:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gZ(a)
q=this.gY(a)
return W.ky(W.b4(W.b4(W.b4(W.b4(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gY:function(a){return a.height},
gb2:function(a){return a.left},
gb8:function(a){return a.top},
gZ:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isI:1,
$asI:function(){}}
W.dZ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[P.q]},
$isc:1,
$asc:function(){return[P.q]},
$isn:1,
$asn:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]}}
W.e_.prototype={
gj:function(a){return a.length}}
W.a1.prototype={
ge0:function(a){return new W.hv(a)},
k:function(a){return a.localName},
M:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.jZ
if(t==null){t=H.D([],[W.db])
s=new W.dc(t)
C.a.l(t,W.kw(null))
C.a.l(t,W.kz())
$.jZ=s
d=s}else d=t
t=$.jY
if(t==null){t=new W.dz(d)
$.jY=t
c=t}else{t.a=d
c=t}}if($.aA==null){t=document
s=t.implementation
s=(s&&C.I).ec(s,"")
$.aA=s
$.j3=s.createRange()
s=$.aA
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.aA.head;(t&&C.J).P(t,r)}t=$.aA
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.jp(s,"$isaM")}t=$.aA
if(!!this.$isaM)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.aA.body;(t&&C.o).P(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.B(C.U,a.tagName)){t=$.j3;(t&&C.B).cL(t,q)
t=$.j3
p=(t&&C.B).ea(t,b)}else{q.innerHTML=b
p=$.aA.createDocumentFragment()
for(t=J.i(p);s=q.firstChild,s!=null;)t.P(p,s)}t=$.aA.body
if(q==null?t!=null:q!==t)J.lA(q)
c.bf(p)
C.j.dY(document,p)
return p},
eb:function(a,b,c){return this.M(a,b,c,null)},
cV:function(a,b,c,d){a.textContent=null
this.P(a,this.M(a,b,c,d))},
cU:function(a,b){return this.cV(a,b,null,null)},
a5:function(a,b){return a.getAttribute(b)},
dN:function(a,b){return a.removeAttribute(b)},
$isa:1,
$iso:1,
$isa1:1,
$ish:1,
$isp:1,
geL:function(a){return a.tagName}}
W.io.prototype={
$1:function(a){return!!J.v(a).$isa1},
$S:function(){return{func:1,args:[,]}}}
W.j.prototype={}
W.h.prototype={
dz:function(a,b,c,d){return a.addEventListener(b,H.bY(c,1),!1)},
$iso:1,
$ish:1}
W.a2.prototype={$iso:1}
W.em.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a2]},
$isc:1,
$asc:function(){return[W.a2]},
$isn:1,
$asn:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.en.prototype={
gj:function(a){return a.length}}
W.er.prototype={
gj:function(a){return a.length}}
W.a3.prototype={$iso:1}
W.ci.prototype={}
W.et.prototype={
gj:function(a){return a.length}}
W.bv.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.p]},
$isc:1,
$asc:function(){return[W.p]},
$isn:1,
$asn:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.cj.prototype={}
W.eu.prototype={
I:function(a,b){return a.send(b)}}
W.bw.prototype={}
W.ex.prototype={$isa:1,$isa1:1}
W.aS.prototype={$iso:1,$isaS:1}
W.eK.prototype={
k:function(a){return String(a)}}
W.eQ.prototype={
gj:function(a){return a.length}}
W.eS.prototype={
eU:function(a,b,c){return a.send(b,c)},
I:function(a,b){return a.send(b)}}
W.bz.prototype={}
W.a4.prototype={$iso:1}
W.eT.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a4]},
$isc:1,
$asc:function(){return[W.a4]},
$isn:1,
$asn:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.M.prototype={$iso:1,$isM:1}
W.f2.prototype={$isa:1}
W.R.prototype={
ga_:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.e(new P.aD("No elements"))
if(s>1)throw H.e(new P.aD("More than one element"))
return t.firstChild},
L:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.i(s),p=0;p<r;++p)q.P(s,t.firstChild)
return},
i:function(a,b,c){var t=this.a
J.l4(t,c,C.z.h(t.childNodes,b))},
gv:function(a){var t=this.a.childNodes
return new W.cf(t,t.length,-1,null,[H.al(t,"z",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){return C.z.h(this.a.childNodes,b)},
$asc:function(){return[W.p]},
$asd2:function(){return[W.p]},
$asb:function(){return[W.p]},
$asbG:function(){return[W.p]}}
W.p.prototype={
eF:function(a){var t=a.parentNode
if(t!=null)J.bj(t,a)},
k:function(a){var t=a.nodeValue
return t==null?this.cZ(a):t},
P:function(a,b){return a.appendChild(b)},
dO:function(a,b){return a.removeChild(b)},
dP:function(a,b,c){return a.replaceChild(b,c)},
$iso:1,
$ish:1,
$isp:1,
gb4:function(a){return a.previousSibling}}
W.da.prototype={
b5:function(a){return a.previousNode()}}
W.bF.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.p]},
$isc:1,
$asc:function(){return[W.p]},
$isn:1,
$asn:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.fb.prototype={$isa:1}
W.fe.prototype={
gj:function(a){return a.length}}
W.a5.prototype={$iso:1,
gj:function(a){return a.length}}
W.fg.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a5]},
$isc:1,
$asc:function(){return[W.a5]},
$isn:1,
$asn:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.fj.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.fk.prototype={
I:function(a,b){return a.send(b)}}
W.dg.prototype={
ea:function(a,b){return a.createContextualFragment(b)},
cL:function(a,b){return a.selectNodeContents(b)}}
W.fu.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.di.prototype={
I:function(a,b){return a.send(b)}}
W.fw.prototype={
gj:function(a){return a.length}}
W.fA.prototype={$isa:1}
W.a6.prototype={$iso:1,$ish:1}
W.fB.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a6]},
$isc:1,
$asc:function(){return[W.a6]},
$isn:1,
$asn:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.a7.prototype={$iso:1}
W.fD.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a7]},
$isc:1,
$asc:function(){return[W.a7]},
$isn:1,
$asn:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.a8.prototype={$iso:1,
gj:function(a){return a.length}}
W.fI.prototype={
h:function(a,b){return this.bE(a,b)},
az:function(a,b){var t,s
for(t=0;!0;++t){s=this.dK(a,t)
if(s==null)return
b.$2(s,this.bE(a,s))}},
gj:function(a){return a.length},
bE:function(a,b){return a.getItem(b)},
dK:function(a,b){return a.key(b)}}
W.W.prototype={$iso:1}
W.ai.prototype={}
W.dl.prototype={
M:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aI(a,b,c,d)
t=W.lW("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.R(s).L(0,new W.R(t))
return s}}
W.fQ.prototype={
M:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aI(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.G.M(t.createElement("table"),b,c,d)
t.toString
t=new W.R(t)
r=t.ga_(t)
r.toString
t=new W.R(r)
q=t.ga_(t)
s.toString
q.toString
new W.R(s).L(0,new W.R(q))
return s}}
W.fR.prototype={
M:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aI(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.G.M(t.createElement("table"),b,c,d)
t.toString
t=new W.R(t)
r=t.ga_(t)
s.toString
r.toString
new W.R(s).L(0,new W.R(r))
return s}}
W.bK.prototype={$isbK:1}
W.a9.prototype={$iso:1,$ish:1}
W.X.prototype={$iso:1,$ish:1}
W.fU.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.X]},
$isc:1,
$asc:function(){return[W.X]},
$isn:1,
$asn:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.fV.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a9]},
$isc:1,
$asc:function(){return[W.a9]},
$isn:1,
$asn:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.fX.prototype={
gj:function(a){return a.length}}
W.aa.prototype={$iso:1}
W.aX.prototype={$iso:1,$isaX:1}
W.h0.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.aa]},
$isc:1,
$asc:function(){return[W.aa]},
$isn:1,
$asn:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.h1.prototype={
gj:function(a){return a.length}}
W.bd.prototype={}
W.h3.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.dq.prototype={
b5:function(a){return a.previousNode()}}
W.aF.prototype={}
W.h9.prototype={
k:function(a){return String(a)},
$isa:1}
W.hb.prototype={
gj:function(a){return a.length}}
W.he.prototype={
gj:function(a){return a.length}}
W.hf.prototype={
I:function(a,b){return a.send(b)}}
W.b_.prototype={
gee:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(new P.r("deltaY is not supported"))},
$iso:1,
$isM:1,
$isb_:1}
W.bN.prototype={
ge_:function(a){var t,s
t=P.U
s=new P.ax(0,$.B,null,[t])
this.dG(a)
this.dQ(a,W.kD(new W.hh(new P.i9(s,[t]))))
return s},
dQ:function(a,b){return a.requestAnimationFrame(H.bY(b,1))},
dG:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isa:1}
W.hh.prototype={
$1:function(a){this.a.e7(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.hi.prototype={$isa:1}
W.b0.prototype={$isa:1}
W.hq.prototype={
k:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
w:function(a,b){var t,s,r
if(b==null)return!1
t=J.v(b)
if(!t.$isI)return!1
s=a.left
r=t.gb2(b)
if(s==null?r==null:s===r){s=a.top
r=t.gb8(b)
if(s==null?r==null:s===r){s=a.width
r=t.gZ(b)
if(s==null?r==null:s===r){s=a.height
t=t.gY(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gu:function(a){var t,s,r,q
t=J.an(a.left)
s=J.an(a.top)
r=J.an(a.width)
q=J.an(a.height)
return W.ky(W.b4(W.b4(W.b4(W.b4(0,t),s),r),q))},
$isI:1,
$asI:function(){},
gY:function(a){return a.height},
gb2:function(a){return a.left},
gb8:function(a){return a.top},
gZ:function(a){return a.width}}
W.du.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[P.I]},
$isc:1,
$asc:function(){return[P.I]},
$isn:1,
$asn:function(){return[P.I]},
$isb:1,
$asb:function(){return[P.I]}}
W.hs.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.y]},
$isc:1,
$asc:function(){return[W.y]},
$isn:1,
$asn:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.ht.prototype={$isa:1}
W.hu.prototype={
gY:function(a){return a.height},
gZ:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.hL.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a3]},
$isc:1,
$asc:function(){return[W.a3]},
$isn:1,
$asn:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.hM.prototype={$isa:1}
W.dx.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.p]},
$isc:1,
$asc:function(){return[W.p]},
$isn:1,
$asn:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.i3.prototype={$isa:1}
W.i6.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a8]},
$isc:1,
$asc:function(){return[W.a8]},
$isn:1,
$asn:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.i7.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.W]},
$isc:1,
$asc:function(){return[W.W]},
$isn:1,
$asn:function(){return[W.W]},
$isb:1,
$asb:function(){return[W.W]}}
W.ie.prototype={$isa:1}
W.ig.prototype={$isa:1}
W.ho.prototype={
az:function(a,b){var t,s,r,q,p,o
for(t=this.gE(this),s=t.length,r=this.a,q=J.i(r),p=0;p<t.length;t.length===s||(0,H.O)(t),++p){o=t[p]
b.$2(o,q.a5(r,o))}},
gE:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.D([],[P.q])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.l(s,p.name)}return s},
gdI:function(){return this.a}}
W.hv.prototype={
h:function(a,b){return J.j0(this.a,b)},
gj:function(a){return this.gE(this).length}}
W.hy.prototype={
eA:function(a,b,c,d){return W.aw(this.a,this.b,a,!1,H.aH(this,0))}}
W.jh.prototype={}
W.hz.prototype={
dW:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.l3(r,this.c,t,!1)}},
ds:function(a,b,c,d,e){this.dW()}}
W.hA.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.bQ.prototype={
a1:function(a){return $.$get$kx().B(0,W.bo(a))},
U:function(a,b,c){var t,s,r
t=W.bo(a)
s=$.$get$ji()
r=s.h(0,H.f(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
dt:function(a){var t,s
t=$.$get$ji()
if(t.gam(t)){for(s=0;s<262;++s)t.i(0,C.T[s],W.n0())
for(s=0;s<12;++s)t.i(0,C.r[s],W.n1())}}}
W.z.prototype={
gv:function(a){return new W.cf(a,this.gj(a),-1,null,[H.al(a,"z",0)])},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
W.dc.prototype={
a1:function(a){return C.a.bQ(this.a,new W.f4(a))},
U:function(a,b,c){return C.a.bQ(this.a,new W.f3(a,b,c))}}
W.f4.prototype={
$1:function(a){return a.a1(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.f3.prototype={
$1:function(a){return a.U(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.bT.prototype={
a1:function(a){return this.a.B(0,W.bo(a))},
U:function(a,b,c){var t,s
t=W.bo(a)
s=this.c
if(s.B(0,H.f(t)+"::"+b))return this.d.dZ(c)
else if(s.B(0,"*::"+b))return this.d.dZ(c)
else{s=this.b
if(s.B(0,H.f(t)+"::"+b))return!0
else if(s.B(0,"*::"+b))return!0
else if(s.B(0,H.f(t)+"::*"))return!0
else if(s.B(0,"*::*"))return!0}return!1},
dv:function(a,b,c,d){var t,s,r
this.a.L(0,c)
t=b.aD(0,new W.i4())
s=b.aD(0,new W.i5())
this.b.L(0,t)
r=this.c
r.L(0,C.V)
r.L(0,s)}}
W.i4.prototype={
$1:function(a){return!C.a.B(C.r,a)},
$S:function(){return{func:1,args:[,]}}}
W.i5.prototype={
$1:function(a){return C.a.B(C.r,a)},
$S:function(){return{func:1,args:[,]}}}
W.ia.prototype={
U:function(a,b,c){if(this.d1(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.j0(a,"template")==="")return this.e.B(0,b)
return!1}}
W.ib.prototype={
$1:function(a){return"TEMPLATE::"+H.f(a)},
$S:function(){return{func:1,args:[,]}}}
W.i8.prototype={
a1:function(a){var t=J.v(a)
if(!!t.$isbH)return!1
t=!!t.$isG
if(t&&W.bo(a)==="foreignObject")return!1
if(t)return!0
return!1},
U:function(a,b,c){if(b==="is"||C.i.bi(b,"on"))return!1
return this.a1(a)}}
W.cf.prototype={
p:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbG(J.bi(this.a,t))
this.c=t
return!0}this.sbG(null)
this.c=s
return!1},
gq:function(){return this.d},
sbG:function(a){this.d=a}}
W.db.prototype={}
W.i2.prototype={}
W.dz.prototype={
bf:function(a){new W.ic(this).$2(a,null)},
ax:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)J.bj(t,a)}else J.bj(b,a)},
dT:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.lp(a)
r=J.j0(s.gdI(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.P(n)}p="element unprintable"
try{p=J.aK(a)}catch(n){H.P(n)}try{o=W.bo(a)
this.dS(a,b,t,p,o,s,r)}catch(n){if(H.P(n) instanceof P.ao)throw n
else{this.ax(a,b)
window
m="Removing corrupted element "+H.f(p)
if(typeof console!="undefined")console.warn(m)}}},
dS:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.ax(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.a1(a)){this.ax(a,b)
window
t="Removing disallowed element <"+H.f(e)+"> from "+J.aK(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.U(a,"is",g)){this.ax(a,b)
window
t="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gE(f)
s=H.D(t.slice(0),[H.aH(t,0)])
for(r=f.gE(f).length-1,t=f.a,q=J.i(t);r>=0;--r){p=s[r]
if(!this.a.U(a,J.lF(p),q.a5(t,p))){window
o="Removing disallowed attribute <"+H.f(e)+" "+p+'="'+H.f(q.a5(t,p))+'">'
if(typeof console!="undefined")console.warn(o)
q.a5(t,p)
q.dN(t,p)}}if(!!J.v(a).$isbK)this.bf(a.content)}}
W.ic.prototype={
$2:function(a,b){var t,s,r,q
switch(a.nodeType){case 1:this.a.dT(a,b)
break
case 8:case 11:case 3:case 4:break
default:if(b==null){r=a.parentNode
if(r!=null)J.bj(r,a)}else J.bj(b,a)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.lq(t)}catch(q){H.P(q)
r=t
J.bj(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.p,W.p]}}}
W.bp.prototype={$isc:1,
$asc:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.bq.prototype={$isc:1,
$asc:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.br.prototype={$isc:1,
$asc:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.bs.prototype={$isc:1,
$asc:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.bt.prototype={$isc:1,
$asc:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.bu.prototype={$isc:1,
$asc:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.ck.prototype={}
W.cE.prototype={$isc:1,
$asc:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.cn.prototype={$isc:1,
$asc:function(){return[W.W]},
$isb:1,
$asb:function(){return[W.W]}}
W.cx.prototype={$isc:1,
$asc:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.cy.prototype={$isc:1,
$asc:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.cA.prototype={$isc:1,
$asc:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.cB.prototype={$isc:1,
$asc:function(){return[P.I]},
$isb:1,
$asb:function(){return[P.I]}}
W.cC.prototype={$isc:1,
$asc:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.cD.prototype={$isc:1,
$asc:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.cl.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.co.prototype={$isc:1,
$asc:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]}}
W.cr.prototype={$isc:1,
$asc:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.ct.prototype={$isc:1,
$asc:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.cu.prototype={$isc:1,
$asc:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.cv.prototype={$isc:1,
$asc:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.cw.prototype={$isc:1,
$asc:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.cF.prototype={$isc:1,
$asc:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.cG.prototype={$isc:1,
$asc:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.cH.prototype={$isc:1,
$asc:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.cR.prototype={$isc:1,
$asc:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.cS.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.cP.prototype={$isc:1,
$asc:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.cQ.prototype={$isc:1,
$asc:function(){return[W.W]},
$isb:1,
$asb:function(){return[W.W]}}
W.cV.prototype={$isc:1,
$asc:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.cX.prototype={$isc:1,
$asc:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]}}
W.cY.prototype={$isc:1,
$asc:function(){return[P.I]},
$isb:1,
$asb:function(){return[P.I]}}
W.cJ.prototype={$isc:1,
$asc:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.cK.prototype={$isc:1,
$asc:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.cM.prototype={$isc:1,
$asc:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.cO.prototype={$isc:1,
$asc:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.cU.prototype={$isc:1,
$asc:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
P.ip.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.q,,]}}}
P.hV.prototype={}
P.I.prototype={$asI:null}
P.dI.prototype={$isa:1}
P.aL.prototype={$isa:1}
P.e4.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
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
P.eh.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
P.ei.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ej.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
P.ek.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.el.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eo.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eq.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ad.prototype={}
P.aB.prototype={$isa:1}
P.ev.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.aq.prototype={$iso:1}
P.eF.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return this.X(a,b)},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
X:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.aq]},
$isb:1,
$asb:function(){return[P.aq]}}
P.eN.prototype={$isa:1}
P.eO.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ar.prototype={$iso:1}
P.f5.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return this.X(a,b)},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
X:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.ar]},
$isb:1,
$asb:function(){return[P.ar]}}
P.fc.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fh.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fi.prototype={
gj:function(a){return a.length}}
P.fn.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fo.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bH.prototype={$isa:1,$isbH:1}
P.fN.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return this.X(a,b)},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
X:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]}}
P.G.prototype={
M:function(a,b,c,d){var t,s,r,q,p,o
t=H.D([],[W.db])
C.a.l(t,W.kw(null))
C.a.l(t,W.kz())
C.a.l(t,new W.i8())
c=new W.dz(new W.dc(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.o).eb(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.R(q)
o=t.ga_(t)
for(t=J.i(p);r=o.firstChild,r!=null;)t.P(p,r)
return p},
$isa:1,
$isG:1}
P.fO.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fP.prototype={$isa:1}
P.dm.prototype={}
P.fT.prototype={$isa:1}
P.bL.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.as.prototype={$iso:1}
P.h2.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return this.X(a,b)},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
X:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.as]},
$isb:1,
$asb:function(){return[P.as]}}
P.ha.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.hc.prototype={$isa:1}
P.hd.prototype={$isa:1}
P.bP.prototype={$isa:1}
P.i_.prototype={$isa:1}
P.i0.prototype={$isa:1}
P.i1.prototype={$isa:1}
P.cq.prototype={$isc:1,
$asc:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]}}
P.cp.prototype={$isc:1,
$asc:function(){return[P.as]},
$isb:1,
$asb:function(){return[P.as]}}
P.cm.prototype={$isc:1,
$asc:function(){return[P.aq]},
$isb:1,
$asb:function(){return[P.aq]}}
P.cs.prototype={$isc:1,
$asc:function(){return[P.ar]},
$isb:1,
$asb:function(){return[P.ar]}}
P.cI.prototype={$isc:1,
$asc:function(){return[P.aq]},
$isb:1,
$asb:function(){return[P.aq]}}
P.cL.prototype={$isc:1,
$asc:function(){return[P.as]},
$isb:1,
$asb:function(){return[P.as]}}
P.cN.prototype={$isc:1,
$asc:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]}}
P.cT.prototype={$isc:1,
$asc:function(){return[P.ar]},
$isb:1,
$asb:function(){return[P.ar]}}
P.dM.prototype={
gj:function(a){return a.length}}
P.fs.prototype={
bO:function(a,b){return a.activeTexture(b)},
bR:function(a,b,c){return a.attachShader(b,c)},
bS:function(a,b,c){return a.bindBuffer(b,c)},
bT:function(a,b,c){return a.bindFramebuffer(b,c)},
bU:function(a,b,c){return a.bindTexture(b,c)},
bV:function(a,b){return a.blendEquation(b)},
bW:function(a,b,c){return a.blendFunc(b,c)},
bX:function(a,b,c,d){return a.bufferData(b,c,d)},
bY:function(a,b){return a.checkFramebufferStatus(b)},
bZ:function(a,b){return a.clear(b)},
c_:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c0:function(a,b){return a.compileShader(b)},
c1:function(a){return a.createBuffer()},
c2:function(a){return a.createFramebuffer()},
c3:function(a){return a.createProgram()},
c4:function(a,b){return a.createShader(b)},
c5:function(a){return a.createTexture()},
c7:function(a,b){return a.depthMask(b)},
c8:function(a,b){return a.disable(b)},
c9:function(a,b,c,d){return a.drawArrays(b,c,d)},
ca:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cb:function(a,b){return a.enable(b)},
cc:function(a,b){return a.enableVertexAttribArray(b)},
ce:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
aE:function(a){return P.iq(a.getContextAttributes())},
b9:function(a){return a.getError()},
ba:function(a,b){return a.getProgramInfoLog(b)},
bb:function(a,b,c){return a.getProgramParameter(b,c)},
bc:function(a,b){return a.getShaderInfoLog(b)},
bd:function(a,b,c){return a.getShaderParameter(b,c)},
be:function(a,b,c){return a.getUniformLocation(b,c)},
cf:function(a,b){return a.linkProgram(b)},
bh:function(a,b,c){return a.shaderSource(b,c)},
bj:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cm:function(a,b,c,d){return a.texParameterf(b,c,d)},
cn:function(a,b,c,d){return a.texParameteri(b,c,d)},
cq:function(a,b,c){return a.uniform1f(b,c)},
cr:function(a,b,c){return a.uniform1fv(b,c)},
cs:function(a,b,c){return a.uniform1i(b,c)},
ct:function(a,b,c){return a.uniform1iv(b,c)},
cu:function(a,b,c){return a.uniform2fv(b,c)},
cv:function(a,b,c){return a.uniform3fv(b,c)},
cw:function(a,b,c){return a.uniform4fv(b,c)},
cz:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cA:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cC:function(a,b){return a.useProgram(b)},
cE:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cF:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.ft.prototype={
e1:function(a,b){return a.beginTransformFeedback(b)},
e4:function(a,b){return a.bindVertexArray(b)},
ed:function(a){return a.createVertexArray()},
ek:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
el:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
em:function(a){return a.endTransformFeedback()},
eM:function(a,b,c,d,e,f){return a.texStorage2D(b,c,d,e,f)},
eR:function(a,b,c,d){this.dV(a,b,c,d)
return},
dV:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
eS:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bO:function(a,b){return a.activeTexture(b)},
bR:function(a,b,c){return a.attachShader(b,c)},
bS:function(a,b,c){return a.bindBuffer(b,c)},
bT:function(a,b,c){return a.bindFramebuffer(b,c)},
bU:function(a,b,c){return a.bindTexture(b,c)},
bV:function(a,b){return a.blendEquation(b)},
bW:function(a,b,c){return a.blendFunc(b,c)},
bX:function(a,b,c,d){return a.bufferData(b,c,d)},
bY:function(a,b){return a.checkFramebufferStatus(b)},
bZ:function(a,b){return a.clear(b)},
c_:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c0:function(a,b){return a.compileShader(b)},
c1:function(a){return a.createBuffer()},
c2:function(a){return a.createFramebuffer()},
c3:function(a){return a.createProgram()},
c4:function(a,b){return a.createShader(b)},
c5:function(a){return a.createTexture()},
c7:function(a,b){return a.depthMask(b)},
c8:function(a,b){return a.disable(b)},
c9:function(a,b,c,d){return a.drawArrays(b,c,d)},
ca:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cb:function(a,b){return a.enable(b)},
cc:function(a,b){return a.enableVertexAttribArray(b)},
ce:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
aE:function(a){return P.iq(a.getContextAttributes())},
b9:function(a){return a.getError()},
ba:function(a,b){return a.getProgramInfoLog(b)},
bb:function(a,b,c){return a.getProgramParameter(b,c)},
bc:function(a,b){return a.getShaderInfoLog(b)},
bd:function(a,b,c){return a.getShaderParameter(b,c)},
be:function(a,b,c){return a.getUniformLocation(b,c)},
cf:function(a,b){return a.linkProgram(b)},
bh:function(a,b,c){return a.shaderSource(b,c)},
bj:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cm:function(a,b,c,d){return a.texParameterf(b,c,d)},
cn:function(a,b,c,d){return a.texParameteri(b,c,d)},
cq:function(a,b,c){return a.uniform1f(b,c)},
cr:function(a,b,c){return a.uniform1fv(b,c)},
cs:function(a,b,c){return a.uniform1i(b,c)},
ct:function(a,b,c){return a.uniform1iv(b,c)},
cu:function(a,b,c){return a.uniform2fv(b,c)},
cv:function(a,b,c){return a.uniform3fv(b,c)},
cw:function(a,b,c){return a.uniform4fv(b,c)},
cz:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cA:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cC:function(a,b){return a.useProgram(b)},
cE:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cF:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isa:1}
P.id.prototype={$isa:1}
P.fE.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return P.iq(this.dJ(a,b))},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
dJ:function(a,b){return a.item(b)},
$isc:1,
$asc:function(){return[P.aC]},
$isb:1,
$asb:function(){return[P.aC]}}
P.cz.prototype={$isc:1,
$asc:function(){return[P.aC]},
$isb:1,
$asb:function(){return[P.aC]}}
P.cW.prototype={$isc:1,
$asc:function(){return[P.aC]},
$isb:1,
$asb:function(){return[P.aC]}}
B.iM.prototype={
$1:function(a){$.$get$ir().i(0,a.which,!0)},
$S:function(){return{func:1,args:[W.aS]}}}
B.iN.prototype={
$1:function(a){$.$get$ir().i(0,a.which,null)},
$S:function(){return{func:1,args:[W.aS]}}}
B.iO.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.mS=t
$.mT=C.b.a8(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.js=s-C.b.D(window.innerWidth,2)
$.kX=-(t-C.b.D(window.innerHeight,2))},
$S:function(){return{func:1,args:[W.M]}}}
B.iP.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.c0=t-C.b.D(window.innerWidth,2)
$.c1=-(s-C.b.D(window.innerHeight,2))
if(a.button===2)$.$get$bZ().i(0,"right",!0)
else $.$get$bZ().i(0,"left",!0)},
$S:function(){return{func:1,args:[W.M]}}}
B.iQ.prototype={
$1:function(a){if(a.button===2)$.$get$bZ().i(0,"right",null)
else $.$get$bZ().i(0,"left",null)},
$S:function(){return{func:1,args:[W.M]}}}
B.f6.prototype={
df:function(a,b,c,d){var t
d.toString
W.aw(d,W.n_().$1(d),new B.f7(this),!1,W.b_)
W.aw(d,"mousemove",new B.f8(this),!1,W.M)
t=W.aX
W.aw(d,"touchstart",new B.f9(),!1,t)
W.aw(d,"touchmove",new B.fa(this),!1,t)
B.ng(null)}}
B.f7.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.au.gee(a)*r.k3
if(C.c.a8(r.fy,t)>0)r.fy=H.Y(C.c.a8(r.fy,t))}catch(q){s=H.P(q)
P.az(s)}},
$S:function(){return{func:1,args:[W.b_]}}}
B.f8.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=H.Y(t.go+C.b.a8($.js,$.c0)*0.01)
s=t.id
r=$.c1
q=$.kX
t.id=H.Y(s+(r-q)*0.01)
$.c0=$.js
$.c1=q}},
$S:function(){return{func:1,args:[W.M]}}}
B.f9.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.a3(t.clientX)
C.c.a3(t.clientY)
$.c0=s
C.c.a3(t.clientX)
$.c1=C.c.a3(t.clientY)},
$S:function(){return{func:1,args:[W.aX]}}}
B.fa.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.a3(t.clientX)
t=C.c.a3(t.clientY)
r=this.a
r.go=H.Y(r.go+C.b.a8(s,$.c0)*0.01)
r.id=H.Y(r.id+($.c1-t)*0.01)
$.c0=s
$.c1=t},
$S:function(){return{func:1,args:[W.aX]}}}
G.eU.prototype={}
G.aY.prototype={
C:function(a,b){var t=this.d
if(H.ab(!t.F(0,a)))H.ak("uniform "+a+" already set")
t.i(0,a,b)},
bo:function(){return this.d},
k:function(a){var t,s,r,q
t=H.D(["{"+new H.aE(H.iv(this),null).k(0)+"}["+this.a+"]"],[P.q])
for(s=this.d,r=s.gE(s),r=r.gv(r);r.p();){q=r.gq()
C.a.l(t,H.f(q)+": "+H.f(s.h(0,q)))}return C.a.an(t,"\n")}}
G.dO.prototype={}
G.dR.prototype={
cd:function(a,b,c){J.lm(this.a,b)
if(c>0)J.lL(this.a,b,c)}}
G.cg.prototype={
a9:function(a,b,c,d,e){var t,s
t=this.a
s=this.b
J.iV(t.a,36160,s)
H.d(d>0&&e>0)
J.lM(t.a,b,c,d,e)
if(a!==0)J.l9(t.a,a)},
d8:function(a,b,c,d,e){var t,s,r
t=this.a
s=J.lc(t.a)
this.b=s
J.iV(t.a,36160,s)
s=this.c
if(s!=null){s=s.b
J.jy(t.a,36160,36064,3553,s,0)}s=this.d
if(s!=null){s=s.b
J.jy(t.a,36160,36096,3553,s,0)}r=J.l8(t.a,36160)
s=r===36053
if(H.ab(s))H.ak("framebuffer error: "+H.f(r))
if(!s)throw H.e("Error Incomplete Framebuffer: "+H.f(r))
J.iV(t.a,36160,null)}}
G.cd.prototype={}
G.ch.prototype={
aK:function(a){var t=this.e
H.d(!t.F(0,a))
H.d(C.i.bi(a,"a"))
switch($.$get$S().h(0,a).a){case"vec2":t.i(0,a,H.D([],[T.L]))
break
case"vec3":t.i(0,a,H.D([],[T.t]))
break
case"vec4":t.i(0,a,H.D([],[T.av]))
break
case"float":t.i(0,a,H.D([],[P.K]))
break
case"uvec4":t.i(0,a,H.D([],[[P.b,P.m]]))
break
default:if(H.ab(!1))H.ak("unknown type for "+a)}},
d3:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=t&&C.a,r=0;r<4;++r){q=b[r]
p=new Float32Array(2)
o=q.a
p[1]=o[1]
p[0]=o[0]
s.l(t,new T.L(p))}},
d4:function(a,b){var t,s,r,q,p
t=this.e.h(0,a)
for(s=t&&C.a,r=0;r<4;++r){q=b[r]
p=new T.t(new Float32Array(3))
p.G(q)
s.l(t,p)}},
d5:function(a){var t,s,r,q,p
H.d(!0)
t=this.d
s=t.length
C.a.l(this.c,new G.cd(s,s+1,s+2,s+3))
for(r=0;r<4;++r){q=a[r]
p=new T.t(new Float32Array(3))
p.G(q)
C.a.l(t,p)}},
d9:function(){var t,s,r,q,p,o,n,m,l,k
t=this.c
s=t.length
H.d(s>0)
s=new Array(t.length*6)
s.fixed$length=Array
r=H.D(s,[P.m])
for(s=this.b,q=0,p=0;!1;++p){o=s[p]
r[q]=o.geW(o)
r[q+1]=o.geX(o)
r[q+2]=o.geY(o)
q+=3}for(s=t.length,p=0;n=t.length,p<n;n===s||(0,H.O)(t),++p){m=t[p]
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
dc:function(a,b){var t,s,r,q,p,o,n,m
t=a*b
H.d(this.d.length===t)
s=[]
this.e.i(0,"aTexUV",s)
for(r=b-1,q=a-1,p=0;p<b;++p)for(o=p/r,n=0;n<a;++n){m=new Float32Array(2)
m[0]=o
m[1]=n/q
C.a.l(s,new T.L(m))}H.d(s.length===t)},
da:function(a,b,c){var t,s,r,q,p,o,n,m,l
H.d(this.d.length===a*b)
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
H.d(!0)
C.a.l(t,new G.cd(p+m,l+m,l+n,p+n))
n=m}q=o}},
k:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gE(s),r=r.gv(r);r.p();){q=r.gq()
p=$.$get$S().h(0,q).a
C.a.l(t,H.f(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.an(t," ")}}
G.dp.prototype={}
G.dn.prototype={}
G.eP.prototype={}
G.eR.prototype={
bm:function(a,b,c){var t,s
if(C.i.aM(a,0)===105){if(H.ab(C.b.aJ(b.length,c)===this.z))H.ak("ChangeAttribute "+this.z)}else{t=C.b.aJ(b.length,c)
if(H.ab(t===(this.ch.length/3|0)))H.ak("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.dD(t.a,34962,s)
J.jx(t.a,34962,b,35048)},
dd:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
aa:function(a,b,c){var t,s,r,q,p,o
t=J.ju(a,0)===105
if(t&&this.z===0)this.z=C.b.aJ(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.iX(r.a))
this.bm(a,b,c)
q=$.$get$S().h(0,a)
if(q==null)throw H.e("Unknown canonical "+a)
p=this.x
if(H.ab(p.F(0,a)))H.ak("unexpected attribute "+a)
o=p.h(0,a)
J.dF(r.a,this.e)
r.cd(0,o,t?1:0)
s=s.h(0,a)
p=q.bn()
J.dD(r.a,34962,s)
J.jG(r.a,o,p,5126,!1,0,0)},
k:function(a){var t,s,r,q
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,r=t.gE(t),r=r.gv(r);r.p();){q=r.gq()
C.a.l(s,H.f(q)+":"+t.h(0,q).length)}return"MESH["+this.a+"] "+C.a.an(s,"  ")},
saR:function(a){this.cx=a}}
G.fd.prototype={
d6:function(a,b){var t=C.b.cH(a,b)
if(this.z===t)return
this.z=t
this.br()},
br:function(){var t,s,r,q,p,o,n
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
bo:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.t(new Float32Array(H.u(3)))
o.O(r,q,p)
p=this.d
p.i(0,"uEyePosition",o)
o=this.cy
o.G(t)
t=o.a
t[12]=0
t[13]=0
t[14]=0
t[15]=1
n=-s[12]
m=-s[13]
l=-s[14]
s=J.v(n)
r=!!s.$isav
k=r?s.gaC(n):1
if(!!s.$ist){j=s.gm(n)
m=s.gn(n)
l=s.gK(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
l=s.gK(n)
n=j}else if(!(typeof n==="number")){n=null
m=null
l=null}s=C.c.H(t[0],n)
r=C.c.H(t[4],m)
q=C.c.H(t[8],l)
i=t[12]
h=C.c.H(t[1],n)
g=C.c.H(t[5],m)
f=C.c.H(t[9],l)
e=t[13]
d=C.c.H(t[2],n)
c=C.c.H(t[6],m)
b=C.c.H(t[10],l)
a=t[14]
a0=C.c.H(t[3],n)
a1=C.c.H(t[7],m)
a2=C.c.H(t[11],l)
a3=t[15]
t[12]=s+r+q+i*k
t[13]=h+g+f+e*k
t[14]=d+c+b+a*k
t[15]=a0+a1+a2+a3*k
a3=this.cx
a3.G(this.db)
a3.eD(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.fq.prototype={
bp:function(a){var t,s,r,q,p,o
t=this.e.x
s=a.e.x
if(t.gj(t)!==s.gj(s))return!1
for(r=t.gE(t),r=r.gv(r);r.p();){q=r.gq()
p=t.h(0,q)
o=s.h(0,q)
if(p==null?o!=null:p!==o)return!1}return!0},
dm:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gj(t)===s.gj(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gE(s),s=s.gv(s);s.p();){q=s.gq()
if(!t.F(0,q))C.a.l(r,q)}for(t=this.x,s=new P.bR(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.p();){q=s.d
if(!t.B(0,q))C.a.l(r,q)}return r},
dr:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gE(b),s=s.gv(s),r=this.d,q=this.y,p=this.z,o=0;s.p();){n=s.gq()
switch(J.ju(n,0)){case 117:if(q.F(0,n)){m=b.h(0,n)
if(p.F(0,n))H.iK("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$S().h(0,n)
if(l==null)H.E("unknown "+n)
H.d(q.F(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.j1(r.a,k,m)
else if(!!J.v(m).$isk2)J.lJ(r.a,k,m)
break
case"float":if(l.c===0)J.lH(r.a,k,m)
else if(!!J.v(m).$isep)J.lI(r.a,k,m)
break
case"mat4":if(l.c===0){j=H.aI(m,"$isag").a
J.jF(r.a,k,!1,j)}else if(!!J.v(m).$isep)J.jF(r.a,k,!1,m)
else if(H.ab(!1))H.ak("bad unform: "+n)
break
case"mat3":if(l.c===0){j=C.L.geV(H.aI(m,"$isnp"))
J.jE(r.a,k,!1,j)}else if(!!J.v(m).$isep)J.jE(r.a,k,!1,m)
else if(H.ab(!1))H.ak("bad unform: "+n)
break
case"vec4":j=l.c
i=r.a
if(j===0)J.jD(i,k,H.aI(m,"$isav").a)
else J.jD(i,k,m)
break
case"vec3":j=l.c
i=r.a
if(j===0)J.jC(i,k,H.aI(m,"$ist").a)
else J.jC(i,k,m)
break
case"vec2":j=l.c
i=r.a
if(j===0)J.jB(i,k,H.aI(m,"$isL").a)
else J.jB(i,k,m)
break
case"sampler2D":case"sampler2DShadow":j=C.b.a4(33984,this.ch)
J.jv(r.a,j)
j=H.aI(m,"$isbM").b
J.dE(r.a,3553,j)
j=this.ch
J.j1(r.a,k,j)
this.ch=this.ch+1
break
case"samplerCube":H.d(n==="uCubeTexture")
j=C.b.a4(33984,this.ch)
J.jv(r.a,j)
j=H.aI(m,"$isbM").b
J.dE(r.a,34067,j)
j=this.ch
J.j1(r.a,k,j)
this.ch=this.ch+1
break
default:H.iK("Error: unknow uniform type: "+j)
H.d(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":j=J.F(m,!0)
i=r.a
if(j)J.c2(i,2929)
else J.iY(i,2929)
break
case"cStencilFunc":H.aI(m,"$isdp")
j=m.a
i=r.a
if(j===1281)J.iY(i,2960)
else{J.c2(i,2960)
i=m.b
h=m.c
J.lC(r.a,j,i,h)}break
case"cDepthWrite":J.lg(r.a,m)
break
case"cBlendEquation":H.aI(m,"$isdn")
j=m.a
i=r.a
if(j===1281)J.iY(i,3042)
else{J.c2(i,3042)
i=m.b
h=m.c
J.l7(r.a,i,h)
J.l6(r.a,j)}break}++o
break}}s=Date.now()
""+o
new P.aO(1000*(s-new P.bm(t,!1).a)).k(0)},
d7:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
Date.now()
t=this.d
J.lK(t.a,this.r)
this.ch=0
this.z.V(0)
for(s=0;s<2;++s){r=b[s]
this.dr(r.a,r.bo())}q=this.Q
q.V(0)
for(p=a.cy,p=p.gE(p),p=p.gv(p);p.p();)q.l(0,p.gq())
o=this.dm()
if(o.length!==0)P.az("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.f(o)))
J.dF(a.d.a,a.e)
n=this.e.f.length>0
q=a.f
p=a.dd()
m=a.Q
l=a.z
if(n)J.l5(t.a,q)
if(m!==-1){k=t.a
if(l>1)J.lk(k,q,p,m,0,l)
else J.lj(k,q,p,m,0)}else{m=t.a
if(l>1)J.li(m,q,0,p,l)
else J.lh(m,q,0,p)}if(n)J.ln(t.a)},
ac:function(a,b){return this.d7(a,b,null)},
dg:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.O)(t),++o){n=t[o]
r.i(0,n,J.jA(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.O)(t),++o){n=t[o]
r.i(0,n,J.jA(q.a,p,n))}}}
G.x.prototype={
bn:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.d(!1)
return-1}}}
G.ah.prototype={
as:function(a){var t,s,r,q,p
H.d(this.b==null)
for(t=a.length,s=this.c,r=this.x,q=0;q<a.length;a.length===t||(0,H.O)(a),++q){p=a[q]
H.d($.$get$S().F(0,p))
H.d(!C.a.B(s,p))
C.a.l(s,p)
r.i(0,p,this.r);++this.r}C.a.aH(s)},
ab:function(a){var t,s,r,q
H.d(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.O)(a),++r){q=a[r]
if(H.ab($.$get$S().F(0,q)))H.ak("missing uniform "+q)
H.d(!C.a.B(s,q))
C.a.l(s,q)}C.a.aH(s)},
S:function(a){var t,s,r
H.d(this.b==null)
for(t=this.e,s=0;s<1;++s){r=a[s]
H.d($.$get$S().F(0,r))
H.d(!C.a.B(t,r))
C.a.l(t,r)}C.a.aH(t)},
di:function(a,b){H.d(this.b==null)
this.b=this.ad(!0,a,b)},
bq:function(a){return this.di(a,null)},
dh:function(a,b){H.d(this.b==null)
this.b=this.ad(!1,a,b)},
aL:function(a){return this.dh(a,null)},
ad:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.d(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.O)(t),++o){n=t[o]
m=$.$get$S().h(0,n)
C.a.l(q,"layout (location="+H.f(p.h(0,n))+") in "+m.a+" "+H.f(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.O)(t),++o){k=t[o]
m=$.$get$S().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.f(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.O)(t),++o){k=t[o]
m=$.$get$S().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.f(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.O)(t),++o){k=t[o]
m=$.$get$S().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.f(k)+j+";")}C.a.l(q,"")
if(a)C.a.l(q,"void main(void) {")
C.a.L(q,b)
if(a)C.a.l(q,"}")
return C.a.an(q,"\n")}}
G.fC.prototype={}
G.fW.prototype={}
G.bM.prototype={
k:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.h7.prototype={
k:function(a){return"TypedTexture["+this.a+", "+this.x+", "+H.f(this.f)+" X "+H.f(this.r)+"]"},
dl:function(a,b,c,d,e,f){var t,s,r,q,p
t=this.d
s=this.c
J.dE(t.a,s,this.b)
J.lE(t.a,3553,1,this.x,this.f,this.r)
r=this.e
q=r.e
if(q!==1)J.lD(t.a,s,34046,q)
q=r.r
J.dH(t.a,s,10240,q)
q=r.f
J.dH(t.a,s,10241,q)
if(r.b){J.dH(t.a,s,10242,33071)
J.dH(t.a,s,10243,33071)}p=J.lv(t.a)
if(H.ab(p===0))H.ak("texture error "+H.f(p))
J.dE(t.a,s,null)}}
R.fG.prototype={
du:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.my("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.u).bx(r,"float")
r.setProperty(p,"left","")
p=C.u.bx(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.p.P(t,s)}return t},
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
J.iU(this.a,s)
r=this.du(b,c,90,30)
this.d=r
J.iU(this.a,r)
t=t.createElement("div")
this.c=t
J.iU(this.a,t)}}
R.fH.prototype={
dq:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.w.eQ(s,2)+" fps"
t=this.c;(t&&C.p).cU(t,b)
r=C.b.D(30*C.w.e5(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.p).P(t,q)},
dn:function(a){return this.dq(a,"")}}
B.fz.prototype={
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
$S:function(){return{func:1,v:true,args:[P.K,T.t]}}}
A.ix.prototype={
$2:function(a,b){var t=536870911&a+J.an(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(){return{func:1,args:[P.m,P.o]}}}
T.ag.prototype={
a6:function(a,b,c){H.d(a<4)
H.d(b<4)
this.a[b*4+a]=c},
G:function(a){var t,s
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
k:function(a){return"[0] "+this.ar(0).k(0)+"\n[1] "+this.ar(1).k(0)+"\n[2] "+this.ar(2).k(0)+"\n[3] "+this.ar(3).k(0)+"\n"},
h:function(a,b){return this.a[b]},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.ag){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gu:function(a){return A.iw(this.a)},
ar:function(a){var t,s
t=new Float32Array(H.u(4))
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.av(t)},
a7:function(){var t=this.a
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
eD:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.L.prototype={
k:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+"]"},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.L){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gu:function(a){return A.iw(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.t.prototype={
O:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
G:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
k:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+"]"},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.t){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gu:function(a){return A.iw(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){return Math.sqrt(this.gb3())},
gb3:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
a2:function(a){var t,s,r
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
c6:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.t(new Float32Array(H.u(3)))
t.O(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
ay:function(a,b){var t,s
t=a.a
s=this.a
s[0]=s[0]+t[0]*b
s[1]=s[1]+t[1]*b
s[2]=s[2]+t[2]*b},
bk:function(a){var t,s
t=a.a
s=this.a
s[0]=s[0]-t[0]
s[1]=s[1]-t[1]
s[2]=s[2]-t[2]},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gK:function(a){return this.a[2]}}
T.av.prototype={
k:function(a){var t=this.a
return H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+","+H.f(t[3])},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.av){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gu:function(a){return A.iw(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){var t,s,r,q
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
Q.iI.prototype={
$1:function(b3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
t=this.a
t.a=b3+0
s=this.c
s.go=H.Y(s.go+0.01)
r=s.k4
if(r.h(0,37)!=null)s.go=H.Y(s.go+0.03)
else if(r.h(0,39)!=null)s.go=H.Y(s.go-0.03)
if(r.h(0,38)!=null)s.id=H.Y(s.id+0.03)
else if(r.h(0,40)!=null)s.id=H.Y(s.id-0.03)
if(r.h(0,33)!=null)s.fy=H.Y(s.fy*0.99)
else if(r.h(0,34)!=null)s.fy=H.Y(s.fy*1.01)
if(r.h(0,32)!=null){s.go=0
s.id=0}r=H.Y(C.c.e6(s.id,-1.4707963267948965,1.4707963267948965))
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
r=m[12]
q=m[13]
n=m[14]
l=new T.t(new Float32Array(H.u(3)))
l.O(0,1,0)
k=s.e
j=k.a
j[0]=m[12]
j[1]=m[13]
j[2]=m[14]
j=new Float32Array(H.u(3))
i=new T.t(j)
i.G(k)
i.bk(p)
i.a2(0)
h=l.c6(i)
h.a2(0)
g=i.c6(h)
g.a2(0)
p=h.b0(k)
f=g.b0(k)
k=i.b0(k)
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
m[15]=1
m[14]=-k
m[13]=-f
m[12]=-p
m[11]=0
m[10]=j
m[9]=c
m[8]=e
m[7]=0
m[6]=a2
m[5]=a1
m[4]=a0
m[3]=0
m[2]=a
m[1]=b
m[0]=d
m[12]=r
m[13]=q
m[14]=n
n=s.f
q=n.a
q[0]=m[2]
q[1]=m[6]
q[2]=m[10]
s=-s.k1
n=Math.sqrt(n.gb3())
h=q[0]/n
g=q[1]/n
i=q[2]/n
n=Math.cos(s)
s=Math.sin(s)
a3=1-n
a4=h*h*a3+n
q=i*s
a5=h*g*a3-q
r=g*s
a6=h*i*a3+r
a7=g*h*a3+q
a8=g*g*a3+n
s=h*s
a9=g*i*a3-s
b0=i*h*a3-r
b1=i*g*a3+s
b2=i*i*a3+n
n=m[0]
s=m[4]
r=m[8]
q=m[1]
d=m[5]
b=m[9]
a=m[2]
a0=m[6]
a1=m[10]
a2=m[3]
e=m[7]
c=m[11]
m[0]=n*a4+s*a7+r*b0
m[1]=q*a4+d*a7+b*b0
m[2]=a*a4+a0*a7+a1*b0
m[3]=a2*a4+e*a7+c*b0
m[4]=n*a5+s*a8+r*b1
m[5]=q*a5+d*a8+b*b1
m[6]=a*a5+a0*a8+a1*b1
m[7]=a2*a5+e*a8+c*b1
m[8]=n*a6+s*a9+r*b2
m[9]=q*a6+d*a9+b*b2
m[10]=a*a6+a0*a9+a1*b2
m[11]=a2*a6+e*a9+c*b2
c=this.dx
c.d.i(0,"uTime",b3/1000)
e=this.e
a2=this.f
this.x.a9(17664,0,0,e,a2)
m=this.d
this.Q.ac(this.dy,[m,c])
c=this.z
a1=C.b.D(e,2)
a0=C.b.D(a2,2)
c.a9(17664,0,0,a1,a0)
a=$.$get$kQ().valueAsNumber
b=this.fr
d=new Float32Array(H.u(2))
d[0]=a
d[1]=a+0.01
b.d.i(0,"uRange",new T.L(d))
d=this.db
this.ch.ac(d,[m,b])
this.y.a9(17664,0,0,a1,a0)
b=this.cx
b.ac(d,[m,this.fx])
c.a9(17664,0,0,a1,a0)
b.ac(d,[m,this.fy])
this.r.a9(17664,0,0,e,a2)
a2=this.go
a2.d.i(0,"uScale",$.$get$kO().valueAsNumber)
this.cy.ac(d,[m,a2])
C.av.ge_(window).co(this)
this.b.dn(t.a)},
$S:function(){return{func:1,v:true,args:[P.U]}}}
J.a.prototype.cZ=J.a.prototype.k
J.bx.prototype.d0=J.bx.prototype.k
P.V.prototype.d_=P.V.prototype.aD
W.a1.prototype.aI=W.a1.prototype.M
W.bT.prototype.d1=W.bT.prototype.U;(function installTearOffs(){installTearOff(H.b2.prototype,"gez",0,0,0,null,["$0"],["aB"],0)
installTearOff(H.aj.prototype,"gcM",0,0,0,null,["$1"],["J"],2)
installTearOff(H.b1.prototype,"geg",0,0,0,null,["$1"],["W"],2)
installTearOff(P,"mO",1,0,0,null,["$1"],["mv"],1)
installTearOff(P,"mP",1,0,0,null,["$1"],["mw"],1)
installTearOff(P,"mQ",1,0,0,null,["$1"],["mx"],1)
installTearOff(P,"kJ",1,0,0,null,["$0"],["mM"],0)
installTearOff(P.ax.prototype,"gdB",0,0,0,null,["$2","$1"],["at","dC"],5)
installTearOff(P,"mV",1,0,0,null,["$2"],["lS"],6)
installTearOff(W,"n_",1,0,0,null,["$1"],["lX"],7)
installTearOff(W,"n0",1,0,0,null,["$4"],["mB"],4)
installTearOff(W,"n1",1,0,0,null,["$4"],["mC"],4)
installTearOff(W.da.prototype,"gb4",0,1,0,null,["$0"],["b5"],3)
installTearOff(W.dq.prototype,"gb4",0,1,0,null,["$0"],["b5"],3)
installTearOff(Q,"kK",1,0,0,null,["$0"],["n9"],0)})();(function inheritance(){inherit(P.o,null)
var t=P.o
inherit(H.j8,t)
inherit(J.a,t)
inherit(J.dL,t)
inherit(P.V,t)
inherit(H.d3,t)
inherit(P.cZ,t)
inherit(H.ce,t)
inherit(H.b6,t)
inherit(H.hT,t)
inherit(H.b2,t)
inherit(H.hw,t)
inherit(H.b3,t)
inherit(H.hS,t)
inherit(H.hp,t)
inherit(H.bc,t)
inherit(H.fY,t)
inherit(H.ap,t)
inherit(H.aj,t)
inherit(H.b1,t)
inherit(H.fp,t)
inherit(H.h4,t)
inherit(P.b8,t)
inherit(H.dy,t)
inherit(H.aE,t)
inherit(H.ae,t)
inherit(H.eG,t)
inherit(H.eI,t)
inherit(P.hr,t)
inherit(P.dv,t)
inherit(P.ax,t)
inherit(P.dt,t)
inherit(P.fJ,t)
inherit(P.fK,t)
inherit(P.b5,t)
inherit(P.ih,t)
inherit(P.fy,t)
inherit(P.hQ,t)
inherit(P.bR,t)
inherit(P.bG,t)
inherit(P.w,t)
inherit(P.hR,t)
inherit(P.ay,t)
inherit(P.H,t)
inherit(P.bm,t)
inherit(P.U,t)
inherit(P.aO,t)
inherit(P.dk,t)
inherit(P.hB,t)
inherit(P.e3,t)
inherit(P.b,t)
inherit(P.aC,t)
inherit(P.aU,t)
inherit(P.bI,t)
inherit(P.q,t)
inherit(P.bJ,t)
inherit(W.dT,t)
inherit(W.ho,t)
inherit(W.bQ,t)
inherit(W.z,t)
inherit(W.dc,t)
inherit(W.bT,t)
inherit(W.i8,t)
inherit(W.cf,t)
inherit(W.db,t)
inherit(W.i2,t)
inherit(W.dz,t)
inherit(P.hV,t)
inherit(G.eU,t)
inherit(G.dR,t)
inherit(G.cg,t)
inherit(G.cd,t)
inherit(G.ch,t)
inherit(G.dp,t)
inherit(G.dn,t)
inherit(G.x,t)
inherit(G.ah,t)
inherit(G.fW,t)
inherit(G.bM,t)
inherit(R.fG,t)
inherit(T.ag,t)
inherit(T.L,t)
inherit(T.t,t)
inherit(T.av,t)
t=J.a
inherit(J.eC,t)
inherit(J.d1,t)
inherit(J.bx,t)
inherit(J.aP,t)
inherit(J.b9,t)
inherit(J.aQ,t)
inherit(H.bA,t)
inherit(H.bb,t)
inherit(W.h,t)
inherit(W.a_,t)
inherit(W.c4,t)
inherit(W.dP,t)
inherit(W.y,t)
inherit(W.ck,t)
inherit(W.dV,t)
inherit(W.dW,t)
inherit(W.dX,t)
inherit(W.c9,t)
inherit(W.ca,t)
inherit(W.cb,t)
inherit(W.co,t)
inherit(W.e_,t)
inherit(W.j,t)
inherit(W.cr,t)
inherit(W.a3,t)
inherit(W.et,t)
inherit(W.cE,t)
inherit(W.eK,t)
inherit(W.eQ,t)
inherit(W.a4,t)
inherit(W.cu,t)
inherit(W.f2,t)
inherit(W.da,t)
inherit(W.ct,t)
inherit(W.fb,t)
inherit(W.bd,t)
inherit(W.a5,t)
inherit(W.cw,t)
inherit(W.ai,t)
inherit(W.dg,t)
inherit(W.a7,t)
inherit(W.cl,t)
inherit(W.a8,t)
inherit(W.fI,t)
inherit(W.W,t)
inherit(W.cD,t)
inherit(W.fX,t)
inherit(W.aa,t)
inherit(W.cv,t)
inherit(W.h1,t)
inherit(W.dq,t)
inherit(W.h9,t)
inherit(W.he,t)
inherit(W.hq,t)
inherit(W.cB,t)
inherit(W.cC,t)
inherit(W.cA,t)
inherit(W.cy,t)
inherit(W.cx,t)
inherit(W.cn,t)
inherit(W.ie,t)
inherit(W.ig,t)
inherit(P.aq,t)
inherit(P.cm,t)
inherit(P.ar,t)
inherit(P.cs,t)
inherit(P.fh,t)
inherit(P.fi,t)
inherit(P.fn,t)
inherit(P.cq,t)
inherit(P.as,t)
inherit(P.cp,t)
inherit(P.hd,t)
inherit(P.dM,t)
inherit(P.fs,t)
inherit(P.ft,t)
inherit(P.id,t)
inherit(P.cz,t)
t=J.bx
inherit(J.ff,t)
inherit(J.aZ,t)
inherit(J.aR,t)
inherit(J.j7,J.aP)
t=J.b9
inherit(J.d0,t)
inherit(J.d_,t)
t=P.V
inherit(H.c,t)
inherit(H.d4,t)
inherit(H.ds,t)
t=H.c
inherit(H.ba,t)
inherit(H.eH,t)
inherit(H.e2,H.d4)
t=P.cZ
inherit(H.eL,t)
inherit(H.hg,t)
t=H.ba
inherit(H.by,t)
inherit(P.eJ,t)
t=H.b6
inherit(H.iR,t)
inherit(H.iS,t)
inherit(H.hO,t)
inherit(H.hx,t)
inherit(H.ey,t)
inherit(H.ez,t)
inherit(H.hU,t)
inherit(H.fZ,t)
inherit(H.h_,t)
inherit(H.iT,t)
inherit(H.iC,t)
inherit(H.iD,t)
inherit(H.iE,t)
inherit(H.iF,t)
inherit(H.iG,t)
inherit(H.fS,t)
inherit(H.eD,t)
inherit(H.iy,t)
inherit(H.iz,t)
inherit(H.iA,t)
inherit(P.hl,t)
inherit(P.hk,t)
inherit(P.hm,t)
inherit(P.hn,t)
inherit(P.hC,t)
inherit(P.hG,t)
inherit(P.hD,t)
inherit(P.hE,t)
inherit(P.hF,t)
inherit(P.hJ,t)
inherit(P.hK,t)
inherit(P.hI,t)
inherit(P.hH,t)
inherit(P.fL,t)
inherit(P.fM,t)
inherit(P.ik,t)
inherit(P.hY,t)
inherit(P.hX,t)
inherit(P.hZ,t)
inherit(P.eM,t)
inherit(P.e0,t)
inherit(P.e1,t)
inherit(W.io,t)
inherit(W.hh,t)
inherit(W.hA,t)
inherit(W.f4,t)
inherit(W.f3,t)
inherit(W.i4,t)
inherit(W.i5,t)
inherit(W.ib,t)
inherit(W.ic,t)
inherit(P.ip,t)
inherit(B.iM,t)
inherit(B.iN,t)
inherit(B.iO,t)
inherit(B.iP,t)
inherit(B.iQ,t)
inherit(B.f7,t)
inherit(B.f8,t)
inherit(B.f9,t)
inherit(B.fa,t)
inherit(B.fz,t)
inherit(A.ix,t)
inherit(Q.iI,t)
t=H.hp
inherit(H.be,t)
inherit(H.bU,t)
t=P.b8
inherit(H.dd,t)
inherit(H.eE,t)
inherit(H.h8,t)
inherit(H.h6,t)
inherit(H.dQ,t)
inherit(H.fv,t)
inherit(P.c3,t)
inherit(P.de,t)
inherit(P.ao,t)
inherit(P.r,t)
inherit(P.dr,t)
inherit(P.aD,t)
inherit(P.a0,t)
inherit(P.dU,t)
t=H.fS
inherit(H.fF,t)
inherit(H.bl,t)
inherit(H.hj,P.c3)
t=H.bb
inherit(H.eV,t)
inherit(H.d6,t)
t=H.d6
inherit(H.bC,t)
inherit(H.bB,t)
inherit(H.bD,H.bC)
inherit(H.d7,H.bD)
inherit(H.bE,H.bB)
inherit(H.d8,H.bE)
t=H.d7
inherit(H.d5,t)
inherit(H.eW,t)
t=H.d8
inherit(H.eX,t)
inherit(H.eY,t)
inherit(H.eZ,t)
inherit(H.f_,t)
inherit(H.f0,t)
inherit(H.d9,t)
inherit(H.f1,t)
inherit(P.i9,P.hr)
inherit(P.hW,P.ih)
inherit(P.dw,H.ae)
inherit(P.fx,P.fy)
inherit(P.hN,P.fx)
inherit(P.hP,P.hN)
inherit(P.d2,P.bG)
t=P.U
inherit(P.K,t)
inherit(P.m,t)
t=P.ao
inherit(P.dh,t)
inherit(P.ew,t)
t=W.h
inherit(W.p,t)
inherit(W.bp,t)
inherit(W.dS,t)
inherit(W.en,t)
inherit(W.bw,t)
inherit(W.bz,t)
inherit(W.fk,t)
inherit(W.di,t)
inherit(W.fA,t)
inherit(W.a6,t)
inherit(W.br,t)
inherit(W.a9,t)
inherit(W.X,t)
inherit(W.bq,t)
inherit(W.hb,t)
inherit(W.hf,t)
inherit(W.bN,t)
inherit(W.hi,t)
inherit(W.b0,t)
inherit(W.i3,t)
t=W.p
inherit(W.a1,t)
inherit(W.aN,t)
inherit(W.bn,t)
inherit(W.c8,t)
inherit(W.ht,t)
t=W.a1
inherit(W.k,t)
inherit(P.G,t)
t=W.k
inherit(W.dJ,t)
inherit(W.dK,t)
inherit(W.aM,t)
inherit(W.c5,t)
inherit(W.c7,t)
inherit(W.er,t)
inherit(W.ci,t)
inherit(W.ex,t)
inherit(W.fw,t)
inherit(W.dl,t)
inherit(W.fQ,t)
inherit(W.fR,t)
inherit(W.bK,t)
inherit(W.hM,t)
inherit(W.bu,W.bp)
inherit(W.dN,W.bu)
inherit(W.b7,W.ck)
inherit(W.dY,W.ca)
inherit(W.cX,W.co)
inherit(W.dZ,W.cX)
inherit(W.a2,W.c4)
inherit(W.cV,W.cr)
inherit(W.em,W.cV)
inherit(W.cP,W.cE)
inherit(W.bv,W.cP)
inherit(W.cj,W.bn)
inherit(W.eu,W.bw)
inherit(W.aF,W.j)
t=W.aF
inherit(W.aS,t)
inherit(W.M,t)
inherit(W.aX,t)
inherit(W.eS,W.bz)
inherit(W.cR,W.cu)
inherit(W.eT,W.cR)
inherit(W.R,P.d2)
inherit(W.cJ,W.ct)
inherit(W.bF,W.cJ)
t=W.bd
inherit(W.fe,t)
inherit(W.fu,t)
inherit(W.h3,t)
inherit(W.cG,W.cw)
inherit(W.fg,W.cG)
inherit(W.fj,W.ai)
inherit(W.bt,W.br)
inherit(W.fB,W.bt)
inherit(W.cS,W.cl)
inherit(W.fD,W.cS)
inherit(W.cU,W.cD)
inherit(W.fU,W.cU)
inherit(W.bs,W.bq)
inherit(W.fV,W.bs)
inherit(W.cF,W.cv)
inherit(W.h0,W.cF)
inherit(W.b_,W.M)
inherit(W.cY,W.cB)
inherit(W.du,W.cY)
inherit(W.cK,W.cC)
inherit(W.hs,W.cK)
inherit(W.hu,W.cb)
inherit(W.cH,W.cA)
inherit(W.hL,W.cH)
inherit(W.cM,W.cy)
inherit(W.dx,W.cM)
inherit(W.cO,W.cx)
inherit(W.i6,W.cO)
inherit(W.cQ,W.cn)
inherit(W.i7,W.cQ)
inherit(W.hv,W.ho)
inherit(W.hy,P.fJ)
inherit(W.jh,W.hy)
inherit(W.hz,P.fK)
inherit(W.ia,W.bT)
inherit(P.I,P.hV)
t=P.G
inherit(P.aB,t)
inherit(P.aL,t)
inherit(P.e4,t)
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
inherit(P.eo,t)
inherit(P.eN,t)
inherit(P.eO,t)
inherit(P.fc,t)
inherit(P.bH,t)
inherit(P.fP,t)
inherit(P.hc,t)
inherit(P.bP,t)
inherit(P.i_,t)
inherit(P.i0,t)
inherit(P.i1,t)
t=P.aB
inherit(P.dI,t)
inherit(P.eq,t)
inherit(P.ad,t)
inherit(P.ev,t)
inherit(P.fO,t)
inherit(P.dm,t)
inherit(P.ha,t)
inherit(P.cI,P.cm)
inherit(P.eF,P.cI)
inherit(P.cT,P.cs)
inherit(P.f5,P.cT)
inherit(P.fo,P.ad)
inherit(P.cN,P.cq)
inherit(P.fN,P.cN)
t=P.dm
inherit(P.fT,t)
inherit(P.bL,t)
inherit(P.cL,P.cp)
inherit(P.h2,P.cL)
inherit(P.cW,P.cz)
inherit(P.fE,P.cW)
t=G.eU
inherit(G.fC,t)
inherit(G.aY,t)
inherit(G.eR,t)
inherit(G.fq,t)
inherit(G.dO,G.fC)
inherit(B.f6,G.dO)
t=G.aY
inherit(G.eP,t)
inherit(G.fd,t)
inherit(G.h7,G.bM)
inherit(R.fH,R.fG)
mixin(H.bB,P.w)
mixin(H.bC,P.w)
mixin(H.bD,H.ce)
mixin(H.bE,H.ce)
mixin(P.bG,P.w)
mixin(W.bp,P.w)
mixin(W.bq,P.w)
mixin(W.br,P.w)
mixin(W.bs,W.z)
mixin(W.bt,W.z)
mixin(W.bu,W.z)
mixin(W.ck,W.dT)
mixin(W.cE,P.w)
mixin(W.cn,P.w)
mixin(W.cx,P.w)
mixin(W.cy,P.w)
mixin(W.cA,P.w)
mixin(W.cB,P.w)
mixin(W.cC,P.w)
mixin(W.cD,P.w)
mixin(W.cl,P.w)
mixin(W.co,P.w)
mixin(W.cr,P.w)
mixin(W.ct,P.w)
mixin(W.cu,P.w)
mixin(W.cv,P.w)
mixin(W.cw,P.w)
mixin(W.cF,W.z)
mixin(W.cG,W.z)
mixin(W.cH,W.z)
mixin(W.cR,W.z)
mixin(W.cS,W.z)
mixin(W.cP,W.z)
mixin(W.cQ,W.z)
mixin(W.cV,W.z)
mixin(W.cX,W.z)
mixin(W.cY,W.z)
mixin(W.cJ,W.z)
mixin(W.cK,W.z)
mixin(W.cM,W.z)
mixin(W.cO,W.z)
mixin(W.cU,W.z)
mixin(P.cq,P.w)
mixin(P.cp,P.w)
mixin(P.cm,P.w)
mixin(P.cs,P.w)
mixin(P.cI,W.z)
mixin(P.cL,W.z)
mixin(P.cN,W.z)
mixin(P.cT,W.z)
mixin(P.cz,P.w)
mixin(P.cW,W.z)})();(function constants(){C.o=W.aM.prototype
C.H=W.c5.prototype
C.u=W.b7.prototype
C.p=W.c7.prototype
C.I=W.c9.prototype
C.J=W.ci.prototype
C.j=W.cj.prototype
C.K=J.a.prototype
C.a=J.aP.prototype
C.w=J.d_.prototype
C.b=J.d0.prototype
C.L=J.d1.prototype
C.c=J.b9.prototype
C.i=J.aQ.prototype
C.S=J.aR.prototype
C.W=H.d5.prototype
C.z=W.bF.prototype
C.A=J.ff.prototype
C.B=W.dg.prototype
C.G=W.dl.prototype
C.t=J.aZ.prototype
C.au=W.b_.prototype
C.av=W.bN.prototype
C.f=new P.hW()
C.v=new P.aO(0)
C.M=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.N=function(hooks) {
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

C.O=function(getTagFallback) {
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
C.P=function() {
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
C.Q=function(hooks) {
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
C.R=function(hooks) {
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
C.T=H.D(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.q])
C.U=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.V=makeConstList([])
C.q=H.D(makeConstList(["bind","if","ref","repeat","syntax"]),[P.q])
C.r=H.D(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.q])
C.X=new G.x("vec3","vertex btangents",0)
C.d=new G.x("vec3","",0)
C.Y=new G.x("vec4","delta from light",0)
C.n=new G.x("","",0)
C.C=new G.x("vec3","vertex coordinates",0)
C.Z=new G.x("vec3","vertex binormals",0)
C.D=new G.x("vec4","for wireframe",0)
C.a_=new G.x("vec4","per vertex color",0)
C.a0=new G.x("float","for normal maps",0)
C.k=new G.x("mat4","",0)
C.a2=new G.x("mat4","",4)
C.a1=new G.x("mat4","",128)
C.e=new G.x("float","",0)
C.a3=new G.x("float","",4)
C.a4=new G.x("float","depth for shadowmaps",0)
C.h=new G.x("sampler2D","",0)
C.a5=new G.x("float","for bump maps",0)
C.a6=new G.x("vec2","texture uvs",0)
C.a7=new G.x("float","time since program start in sec",0)
C.l=new G.x("vec2","",0)
C.a8=new G.x("samplerCube","",0)
C.m=new G.x("vec4","",0)
C.a9=new G.x("vec3","vertex normals",0)
C.aa=new G.x("sampler2DShadow","",0)
C.E=new G.x("vec3","per vertex color",0)
C.F=new G.x("mat3","",0)
C.ab=new G.x("vec3","vertex tangents",0)
C.ac=H.J("nk")
C.ad=H.J("nl")
C.ae=H.J("ep")
C.af=H.J("nm")
C.ag=H.J("nn")
C.ah=H.J("k2")
C.ai=H.J("no")
C.aj=H.J("k5")
C.ak=H.J("aU")
C.al=H.J("q")
C.am=H.J("kr")
C.an=H.J("ks")
C.ao=H.J("nq")
C.ap=H.J("kt")
C.aq=H.J("ay")
C.ar=H.J("K")
C.as=H.J("m")
C.at=H.J("U")})();(function staticFields(){$.k9="$cachedFunction"
$.ka="$cachedInvocation"
$.jN=null
$.jL=null
$.jj=!1
$.jn=null
$.kE=null
$.l_=null
$.is=null
$.iB=null
$.jo=null
$.bf=null
$.bV=null
$.bW=null
$.jk=!1
$.B=C.f
$.k_=0
$.aA=null
$.j3=null
$.jZ=null
$.jY=null
$.jW=null
$.jV=null
$.jU=null
$.jT=null
$.mS=0
$.mT=0
$.js=0
$.kX=0
$.c0=0
$.c1=0
$.nh=!1
$.kP=0})();(function lazyInitializers(){lazy($,"jS","$get$jS",function(){return H.kT("_$dart_dartClosure")})
lazy($,"j9","$get$j9",function(){return H.kT("_$dart_js")})
lazy($,"k3","$get$k3",function(){return H.m5()})
lazy($,"k4","$get$k4",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.k_
$.k_=t+1
t="expando$key$"+t}return new P.e3(null,t,[P.m])})
lazy($,"kf","$get$kf",function(){return H.at(H.h5({
toString:function(){return"$receiver$"}}))})
lazy($,"kg","$get$kg",function(){return H.at(H.h5({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"kh","$get$kh",function(){return H.at(H.h5(null))})
lazy($,"ki","$get$ki",function(){return H.at(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"km","$get$km",function(){return H.at(H.h5(void 0))})
lazy($,"kn","$get$kn",function(){return H.at(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kk","$get$kk",function(){return H.at(H.kl(null))})
lazy($,"kj","$get$kj",function(){return H.at(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"kp","$get$kp",function(){return H.at(H.kl(void 0))})
lazy($,"ko","$get$ko",function(){return H.at(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"jg","$get$jg",function(){return P.mu()})
lazy($,"bX","$get$bX",function(){return[]})
lazy($,"jR","$get$jR",function(){return{}})
lazy($,"kx","$get$kx",function(){return P.jb(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"ji","$get$ji",function(){return P.C()})
lazy($,"ir","$get$ir",function(){return P.k6(P.m,P.ay)})
lazy($,"bZ","$get$bZ",function(){return P.k6(P.q,P.ay)})
lazy($,"kc","$get$kc",function(){return new G.dp(1281,0,4294967295)})
lazy($,"jJ","$get$jJ",function(){return new G.dn(1281,1281,1281)})
lazy($,"S","$get$S",function(){return P.aT(["cBlendEquation",C.n,"cDepthWrite",C.n,"cDepthTest",C.n,"cStencilFunc",C.n,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColors",C.E,"aColorAlpha",C.a_,"aPosition",C.C,"aTexUV",C.a6,"aNormal",C.a9,"aBinormal",C.Z,"aCenter",C.D,"aPointSize",C.e,"aBoneIndex",C.m,"aBoneWeight",C.m,"aTangent",C.ab,"aBitangent",C.X,"iaRotation",C.m,"iaTranslation",C.d,"iaScale",C.d,"vColor",C.E,"vTexUV",C.l,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.C,"vPositionFromLight",C.Y,"vCenter",C.D,"vDepth",C.a4,"uTransformationMatrix",C.k,"uModelMatrix",C.k,"uNormalMatrix",C.F,"uConvolutionMatrix",C.F,"uPerspectiveViewMatrix",C.k,"uLightPerspectiveViewMatrix",C.k,"uShadowMap",C.aa,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a8,"uAnimationTable",C.h,"uTime",C.a7,"uCameraNear",C.e,"uCameraFar",C.e,"uFogNear",C.e,"uFogFar",C.e,"uPointSize",C.e,"uScale",C.e,"uAngle",C.e,"uCanvasSize",C.l,"uCenter2",C.l,"uCutOff",C.e,"uShininess",C.e,"uShadowBias",C.e,"uOpacity",C.e,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.m,"uColorAlpha2",C.m,"uEyePosition",C.d,"uMaterial",C.k,"uRange",C.l,"uDirection",C.l,"uBoneMatrices",C.a1,"uLightDescs",C.a2,"uLightCount",C.e,"uLightTypes",C.a3,"uBumpScale",C.a5,"uNormalScale",C.a0])})
lazy($,"ke","$get$ke",function(){var t=new G.fW(!1,!1,!1,!0,1,9729,9729)
t.d=!1
t.b=!0
t.f=9728
t.r=9728
return t})
lazy($,"jQ","$get$jQ",function(){return T.ms(1,1,1)})
lazy($,"kG","$get$kG",function(){var t=new G.ah("uv-passthru",null,[],[],[],[],0,P.C())
t.as(["aPosition","aTexUV"])
t.S(["vTexUV"])
t.bq(["gl_Position = vec4(aPosition, 1.0);","vTexUV = aTexUV;"])
return t})
lazy($,"kF","$get$kF",function(){var t=new G.ah("BloomPassF",null,[],[],[],[],0,P.C())
t.S(["vTexUV"])
t.ab(["uTexture","uTexture2","uScale","uColor"])
t.aL(["void main() {\n\toFragColor = texture(uTexture, vTexUV) +\n\t                uScale *\n\t                vec4(uColor, 1.0) *\n\t                texture(uTexture2, vTexUV);\n}\n"])
return t})
lazy($,"kM","$get$kM",function(){var t=new G.ah("uv-passthru",null,[],[],[],[],0,P.C())
t.as(["aPosition","aTexUV"])
t.S(["vTexUV"])
t.bq(["gl_Position = vec4(aPosition, 1.0);","vTexUV = aTexUV;"])
return t})
lazy($,"kW","$get$kW",function(){var t=new G.ah("LuminosityHighPassF",null,[],[],[],[],0,P.C())
t.S(["vTexUV"])
t.ab(["uRange","uColorAlpha","uTexture"])
t.aL(["\n// http://stackoverflow.com/questions/596216/formula-to-determine-brightness-of-rgb-color\nfloat RGB2Luma(vec3 rgb) { return dot(rgb, vec3(0.212, 0.715, 0.072)); }\n// float RGB2Luma(vec3 rgb) { return dot(rgb, vec3(0.299, 0.587, 0.114)); }\n\nvoid main() {\n    vec4 color = texture(uTexture, vTexUV);\n    float luma = RGB2Luma(color.rgb);\n    float alpha = smoothstep(uRange.x, uRange.y, luma);\n    oFragColor = mix(uColorAlpha, color, alpha );\n}\n"])
return t})
lazy($,"kZ","$get$kZ",function(){var t=new G.ah("PerlinNoiseV",null,[],[],[],[],0,P.C())
t.as(["aPosition"])
t.S(["vNormal"])
t.ab(["uPerspectiveViewMatrix","uModelMatrix","uTime"])
t.aL(["vec3 mod289(vec3 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x)\n{\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec3 fade(vec3 t) {\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\n\n// Classic Perlin noise, periodic variant\nfloat pnoise(vec3 P, vec3 rep)\n{\n  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \n  return 2.2 * n_xyz;\n}\n","void main() {\n    vec3 normal = normalize( aPosition);\n    float f = 0.5 * pnoise( normal + uTime/3.0, vec3( 10.0 ) );\n    //vNormal = aPosition + f * normal;\n    //vNormal = f*normal;\n    vNormal = normal;\n    gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);\n}\n"])
return t})
lazy($,"kQ","$get$kQ",function(){return C.j.b6(W.kL(),"#luminance")})
lazy($,"kO","$get$kO",function(){return C.j.b6(W.kL(),"#intensity")})})()
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
mangledGlobalNames:{m:"int",K:"double",U:"num",q:"String",ay:"bool",aU:"Null",b:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.p},{func:1,ret:P.ay,args:[W.a1,P.q,P.q,W.bQ]},{func:1,v:true,args:[P.o],opt:[P.bI]},{func:1,ret:P.m,args:[P.H,P.H]},{func:1,ret:P.q,args:[W.h]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationTimeline:J.a,AppBannerPromptResult:J.a,BarProp:J.a,Body:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CHROMIUMValuebuffer:J.a,CircularGeofencingRegion:J.a,Client:J.a,Clients:J.a,CompositorProxy:J.a,ConsoleBase:J.a,Coordinates:J.a,Credential:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMStringMap:J.a,EffectModel:J.a,Entry:J.a,FederatedCredential:J.a,FileEntry:J.a,FileError:J.a,Stream:J.a,DOMFileSystem:J.a,FontFace:J.a,FormData:J.a,GamepadButton:J.a,Geofencing:J.a,GeofencingRegion:J.a,Geolocation:J.a,Geoposition:J.a,Headers:J.a,HMDVRDevice:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageData:J.a,InjectedScriptHost:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,KeyframeEffect:J.a,MediaDeviceInfo:J.a,MediaDevices:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaMetadata:J.a,MediaSession:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigatorStorageUtils:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,OffscreenCanvas:J.a,PasswordCredential:J.a,PerformanceCompositeTiming:J.a,PerformanceEntry:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformanceRenderTiming:J.a,PerformanceResourceTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PositionError:J.a,PositionSensorVRDevice:J.a,Presentation:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,ReadableByteStream:J.a,ReadableByteStreamReader:J.a,ReadableStreamReader:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,Selection:J.a,ServicePort:J.a,SharedArrayBuffer:J.a,SourceInfo:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StorageInfo:J.a,StorageManager:J.a,StorageQuota:J.a,StyleMedia:J.a,StylePropertyMap:J.a,SyncManager:J.a,TextMetrics:J.a,TrackDefault:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRDevice:J.a,VREyeParameters:J.a,VRFieldOfView:J.a,VRPositionState:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkerConsole:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothAdvertisingData:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,NFC:J.a,PagePopupController:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WebKitCSSMatrix:J.a,Worklet:J.a,WorkletGlobalScope:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPreserveAspectRatio:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,CHROMIUMSubscribeUniform:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTDisjointTimerQuery:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bA,ArrayBufferView:H.bb,DataView:H.eV,Float32Array:H.d5,Float64Array:H.eW,Int16Array:H.eX,Int32Array:H.eY,Int8Array:H.eZ,Uint16Array:H.f_,Uint32Array:H.f0,Uint8ClampedArray:H.d9,CanvasPixelArray:H.d9,Uint8Array:H.f1,HTMLAudioElement:W.k,HTMLBRElement:W.k,HTMLBaseElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLImageElement:W.k,HTMLKeygenElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMediaElement:W.k,HTMLMenuElement:W.k,HTMLMenuItemElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTextAreaElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLVideoElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,HTMLAnchorElement:W.dJ,HTMLAreaElement:W.dK,AudioTrack:W.a_,AudioTrackList:W.dN,Blob:W.c4,HTMLBodyElement:W.aM,HTMLCanvasElement:W.c5,CanvasRenderingContext2D:W.dP,CDATASection:W.aN,CharacterData:W.aN,Comment:W.aN,ProcessingInstruction:W.aN,Text:W.aN,CompositorWorker:W.dS,CSSCharsetRule:W.y,CSSFontFaceRule:W.y,CSSGroupingRule:W.y,CSSImportRule:W.y,CSSKeyframeRule:W.y,MozCSSKeyframeRule:W.y,WebKitCSSKeyframeRule:W.y,CSSKeyframesRule:W.y,MozCSSKeyframesRule:W.y,WebKitCSSKeyframesRule:W.y,CSSMediaRule:W.y,CSSNamespaceRule:W.y,CSSPageRule:W.y,CSSRule:W.y,CSSStyleRule:W.y,CSSSupportsRule:W.y,CSSViewportRule:W.y,CSSStyleDeclaration:W.b7,MSStyleCSSProperties:W.b7,CSS2Properties:W.b7,DataTransferItemList:W.dV,DeviceAcceleration:W.dW,HTMLDivElement:W.c7,XMLDocument:W.bn,Document:W.bn,DocumentFragment:W.c8,ShadowRoot:W.c8,DOMException:W.dX,DOMImplementation:W.c9,DOMPoint:W.dY,DOMPointReadOnly:W.ca,DOMRectReadOnly:W.cb,DOMStringList:W.dZ,DOMTokenList:W.e_,Element:W.a1,AnimationEvent:W.j,AnimationPlayerEvent:W.j,ApplicationCacheErrorEvent:W.j,AutocompleteErrorEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceLightEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,GamepadEvent:W.j,GeofencingEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RelatedEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCIceCandidateEvent:W.j,RTCPeerConnectionIceEvent:W.j,SecurityPolicyViolationEvent:W.j,ServicePortConnectEvent:W.j,ServiceWorkerMessageEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,Animation:W.h,ApplicationCache:W.h,DOMApplicationCache:W.h,OfflineResourceList:W.h,BatteryManager:W.h,CanvasCaptureMediaStreamTrack:W.h,CrossOriginServiceWorkerClient:W.h,EventSource:W.h,FileReader:W.h,FontFaceSet:W.h,MediaKeySession:W.h,MediaQueryList:W.h,MediaRecorder:W.h,MediaSource:W.h,MediaStream:W.h,MediaStreamTrack:W.h,MessagePort:W.h,MIDIAccess:W.h,NetworkInformation:W.h,Notification:W.h,Performance:W.h,PermissionStatus:W.h,PresentationAvailability:W.h,PresentationReceiver:W.h,PresentationRequest:W.h,RTCDTMFSender:W.h,RTCPeerConnection:W.h,webkitRTCPeerConnection:W.h,mozRTCPeerConnection:W.h,ScreenOrientation:W.h,ServicePortCollection:W.h,ServiceWorkerContainer:W.h,ServiceWorkerRegistration:W.h,SpeechRecognition:W.h,SpeechSynthesis:W.h,SpeechSynthesisUtterance:W.h,WorkerPerformance:W.h,BluetoothDevice:W.h,BluetoothRemoteGATTCharacteristic:W.h,USB:W.h,IDBDatabase:W.h,IDBOpenDBRequest:W.h,IDBVersionChangeRequest:W.h,IDBRequest:W.h,IDBTransaction:W.h,AnalyserNode:W.h,RealtimeAnalyserNode:W.h,AudioBufferSourceNode:W.h,AudioContext:W.h,webkitAudioContext:W.h,AudioDestinationNode:W.h,AudioNode:W.h,AudioSourceNode:W.h,BiquadFilterNode:W.h,ChannelMergerNode:W.h,AudioChannelMerger:W.h,ChannelSplitterNode:W.h,AudioChannelSplitter:W.h,ConvolverNode:W.h,DelayNode:W.h,DynamicsCompressorNode:W.h,GainNode:W.h,AudioGainNode:W.h,IIRFilterNode:W.h,MediaElementAudioSourceNode:W.h,MediaStreamAudioDestinationNode:W.h,MediaStreamAudioSourceNode:W.h,OfflineAudioContext:W.h,OscillatorNode:W.h,Oscillator:W.h,PannerNode:W.h,AudioPannerNode:W.h,webkitAudioPannerNode:W.h,ScriptProcessorNode:W.h,JavaScriptAudioNode:W.h,StereoPannerNode:W.h,WaveShaperNode:W.h,EventTarget:W.h,File:W.a2,FileList:W.em,FileWriter:W.en,HTMLFormElement:W.er,Gamepad:W.a3,HTMLHeadElement:W.ci,History:W.et,HTMLCollection:W.bv,HTMLFormControlsCollection:W.bv,HTMLOptionsCollection:W.bv,HTMLDocument:W.cj,XMLHttpRequest:W.eu,XMLHttpRequestUpload:W.bw,XMLHttpRequestEventTarget:W.bw,HTMLInputElement:W.ex,KeyboardEvent:W.aS,Location:W.eK,MediaList:W.eQ,MIDIOutput:W.eS,MIDIInput:W.bz,MIDIPort:W.bz,MimeType:W.a4,MimeTypeArray:W.eT,PointerEvent:W.M,MouseEvent:W.M,DragEvent:W.M,Navigator:W.f2,Attr:W.p,Node:W.p,NodeIterator:W.da,NodeList:W.bF,RadioNodeList:W.bF,Path2D:W.fb,Perspective:W.fe,Plugin:W.a5,PluginArray:W.fg,PositionValue:W.fj,PresentationConnection:W.fk,Range:W.dg,Rotation:W.fu,RTCDataChannel:W.di,DataChannel:W.di,HTMLSelectElement:W.fw,SharedWorker:W.fA,SourceBuffer:W.a6,SourceBufferList:W.fB,SpeechGrammar:W.a7,SpeechGrammarList:W.fD,SpeechRecognitionResult:W.a8,Storage:W.fI,CSSStyleSheet:W.W,StyleSheet:W.W,CalcLength:W.ai,KeywordValue:W.ai,LengthValue:W.ai,NumberValue:W.ai,SimpleLength:W.ai,TransformValue:W.ai,StyleValue:W.ai,HTMLTableElement:W.dl,HTMLTableRowElement:W.fQ,HTMLTableSectionElement:W.fR,HTMLTemplateElement:W.bK,TextTrack:W.a9,TextTrackCue:W.X,VTTCue:W.X,TextTrackCueList:W.fU,TextTrackList:W.fV,TimeRanges:W.fX,Touch:W.aa,TouchEvent:W.aX,TouchList:W.h0,TrackDefaultList:W.h1,Matrix:W.bd,Skew:W.bd,TransformComponent:W.bd,Translation:W.h3,TreeWalker:W.dq,CompositionEvent:W.aF,FocusEvent:W.aF,TextEvent:W.aF,SVGZoomEvent:W.aF,UIEvent:W.aF,URL:W.h9,VideoTrackList:W.hb,VTTRegionList:W.he,WebSocket:W.hf,WheelEvent:W.b_,Window:W.bN,DOMWindow:W.bN,Worker:W.hi,CompositorWorkerGlobalScope:W.b0,DedicatedWorkerGlobalScope:W.b0,ServiceWorkerGlobalScope:W.b0,SharedWorkerGlobalScope:W.b0,WorkerGlobalScope:W.b0,ClientRect:W.hq,ClientRectList:W.du,DOMRectList:W.du,CSSRuleList:W.hs,DocumentType:W.ht,DOMRect:W.hu,GamepadList:W.hL,HTMLFrameSetElement:W.hM,NamedNodeMap:W.dx,MozNamedAttrMap:W.dx,ServiceWorker:W.i3,SpeechRecognitionResultList:W.i6,StyleSheetList:W.i7,WorkerLocation:W.ie,WorkerNavigator:W.ig,SVGAElement:P.dI,SVGAnimateElement:P.aL,SVGAnimateMotionElement:P.aL,SVGAnimateTransformElement:P.aL,SVGAnimationElement:P.aL,SVGSetElement:P.aL,SVGFEBlendElement:P.e4,SVGFEColorMatrixElement:P.e5,SVGFEComponentTransferElement:P.e6,SVGFECompositeElement:P.e7,SVGFEConvolveMatrixElement:P.e8,SVGFEDiffuseLightingElement:P.e9,SVGFEDisplacementMapElement:P.ea,SVGFEFloodElement:P.eb,SVGFEGaussianBlurElement:P.ec,SVGFEImageElement:P.ed,SVGFEMergeElement:P.ee,SVGFEMorphologyElement:P.ef,SVGFEOffsetElement:P.eg,SVGFEPointLightElement:P.eh,SVGFESpecularLightingElement:P.ei,SVGFESpotLightElement:P.ej,SVGFETileElement:P.ek,SVGFETurbulenceElement:P.el,SVGFilterElement:P.eo,SVGForeignObjectElement:P.eq,SVGCircleElement:P.ad,SVGEllipseElement:P.ad,SVGLineElement:P.ad,SVGPathElement:P.ad,SVGPolygonElement:P.ad,SVGPolylineElement:P.ad,SVGGeometryElement:P.ad,SVGClipPathElement:P.aB,SVGDefsElement:P.aB,SVGGElement:P.aB,SVGSwitchElement:P.aB,SVGGraphicsElement:P.aB,SVGImageElement:P.ev,SVGLength:P.aq,SVGLengthList:P.eF,SVGMarkerElement:P.eN,SVGMaskElement:P.eO,SVGNumber:P.ar,SVGNumberList:P.f5,SVGPatternElement:P.fc,SVGPoint:P.fh,SVGPointList:P.fi,SVGRect:P.fn,SVGRectElement:P.fo,SVGScriptElement:P.bH,SVGStringList:P.fN,SVGDescElement:P.G,SVGDiscardElement:P.G,SVGFEDistantLightElement:P.G,SVGFEFuncAElement:P.G,SVGFEFuncBElement:P.G,SVGFEFuncGElement:P.G,SVGFEFuncRElement:P.G,SVGFEMergeNodeElement:P.G,SVGMetadataElement:P.G,SVGStopElement:P.G,SVGStyleElement:P.G,SVGTitleElement:P.G,SVGComponentTransferFunctionElement:P.G,SVGElement:P.G,SVGSVGElement:P.fO,SVGSymbolElement:P.fP,SVGTextContentElement:P.dm,SVGTextPathElement:P.fT,SVGTSpanElement:P.bL,SVGTextElement:P.bL,SVGTextPositioningElement:P.bL,SVGTransform:P.as,SVGTransformList:P.h2,SVGUseElement:P.ha,SVGViewElement:P.hc,SVGViewSpec:P.hd,SVGLinearGradientElement:P.bP,SVGRadialGradientElement:P.bP,SVGGradientElement:P.bP,SVGCursorElement:P.i_,SVGFEDropShadowElement:P.i0,SVGMPathElement:P.i1,AudioBuffer:P.dM,WebGLRenderingContext:P.fs,WebGL2RenderingContext:P.ft,WebGL2RenderingContextBase:P.id,SQLResultSetRowList:P.fE})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,Credential:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMStringMap:true,EffectModel:true,Entry:true,FederatedCredential:true,FileEntry:true,FileError:true,Stream:true,DOMFileSystem:true,FontFace:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageData:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PasswordCredential:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,ServicePort:true,SharedArrayBuffer:true,SourceInfo:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,TrackDefault:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPreserveAspectRatio:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,AudioTrack:true,AudioTrackList:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,CSSCharsetRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DocumentFragment:true,ShadowRoot:true,DOMException:true,DOMImplementation:true,DOMPoint:true,DOMPointReadOnly:false,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AudioDestinationNode:true,AudioNode:true,AudioSourceNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OfflineAudioContext:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Navigator:true,Attr:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Path2D:true,Perspective:true,Plugin:true,PluginArray:true,PositionValue:true,PresentationConnection:true,Range:true,Rotation:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,SharedWorker:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,CalcLength:true,KeywordValue:true,LengthValue:true,NumberValue:true,SimpleLength:true,TransformValue:true,StyleValue:false,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,Matrix:true,Skew:true,TransformComponent:false,Translation:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,SVGZoomEvent:true,UIEvent:false,URL:true,VideoTrackList:true,VTTRegionList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.d6.$nativeSuperclassTag="ArrayBufferView"
H.bC.$nativeSuperclassTag="ArrayBufferView"
H.bD.$nativeSuperclassTag="ArrayBufferView"
H.d7.$nativeSuperclassTag="ArrayBufferView"
H.bB.$nativeSuperclassTag="ArrayBufferView"
H.bE.$nativeSuperclassTag="ArrayBufferView"
H.d8.$nativeSuperclassTag="ArrayBufferView"
W.bp.$nativeSuperclassTag="EventTarget"
W.bu.$nativeSuperclassTag="EventTarget"
W.br.$nativeSuperclassTag="EventTarget"
W.bt.$nativeSuperclassTag="EventTarget"
W.bq.$nativeSuperclassTag="EventTarget"
W.bs.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.l0(Q.kK(),b)},[])
else (function(b){H.l0(Q.kK(),b)})([])})})()