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
a[c]=function(){a[c]=function(){H.nz(b)}
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
return d?function(e){if(t===null)t=H.jz(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.jz(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.jz(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={jj:function jj(a){this.a=a},
jo:function(a,b,c,d){if(!!a.$isc)return new H.e3(a,b,[c,d])
return new H.d6(a,b,[c,d])},
eF:function(){return new P.af("No element")},
mi:function(){return new P.af("Too many elements")},
mh:function(){return new P.af("Too few elements")},
dl:function(a,b,c,d){if(c-b<=32)H.mz(a,b,c,d)
else H.my(a,b,c,d)},
mz:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.Z(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.al(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
my:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.d(t>32)
s=C.b.H(t+1,6)
r=a3+s
q=a4-s
p=C.b.H(a3+a4,2)
o=p-s
n=p+s
t=J.Z(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.al(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.al(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.al(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.al(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.al(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.al(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.al(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.al(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.al(a5.$2(j,i),0)){h=i
i=j
j=h}t.i(a2,r,m)
t.i(a2,p,k)
t.i(a2,q,i)
t.i(a2,o,t.h(a2,a3))
t.i(a2,n,t.h(a2,a4))
g=a3+1
f=a4-1
if(J.x(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=t.h(a2,e)
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
H.dl(a2,a3,g-2,a5)
H.dl(a2,f+2,a4,a5)
if(a0)return
if(g<r&&f>q){for(;J.x(a5.$2(t.h(a2,g),l),0);)++g
for(;J.x(a5.$2(t.h(a2,f),j),0);)--f
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
break}}H.dl(a2,g,f,a5)}else H.dl(a2,g,f,a5)},
c:function c(){},
be:function be(){},
d5:function d5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
d6:function d6(a,b,c){this.a=a
this.b=b
this.$ti=c},
e3:function e3(a,b,c){this.a=a
this.b=b
this.$ti=c},
eR:function eR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bF:function bF(a,b,c){this.a=a
this.b=b
this.$ti=c},
dt:function dt(a,b,c){this.a=a
this.b=b
this.$ti=c},
hj:function hj(a,b,c){this.a=a
this.b=b
this.$ti=c},
ch:function ch(){},
dC:function(a,b){var t=a.ad(b)
if(!u.globalState.d.cy)u.globalState.f.aj()
return t},
iT:function(){--u.globalState.f.b
H.d(u.globalState.f.b>=0)},
l9:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.t(s).$isb)throw H.e(P.jd("Arguments to main must be a List: "+H.f(s)))
u.globalState=new H.i2(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$ke()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.hC(P.jn(null,H.b3),0)
r=P.n
s.sew(new H.ad(0,null,null,null,null,null,0,[r,H.b2]))
s.sez(new H.ad(0,null,null,null,null,null,0,[r,null]))
if(s.x){q=new H.i1()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.mc,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.mO)}if(u.globalState.x)return
s=u.globalState.a++
q=P.ae(null,null,null,r)
p=new H.bh(0,null,!1)
o=new H.b2(s,new H.ad(0,null,null,null,null,null,0,[r,H.bh]),q,u.createNewIsolate(),p,new H.ao(H.iX()),new H.ao(H.iX()),!1,!1,[],P.ae(null,null,null,null),null,null,!1,!0,P.ae(null,null,null,null))
q.l(0,0)
o.bp(0,p)
u.globalState.e=o
u.globalState.z.i(0,s,o)
u.globalState.d=o
if(H.bo(a,{func:1,args:[,]}))o.ad(new H.j2(t,a))
else if(H.bo(a,{func:1,args:[,,]}))o.ad(new H.j3(t,a))
else o.ad(a)
u.globalState.f.aj()},
mO:function(a){var t=P.aT(["command","print","msg",a])
return new H.ai(!0,P.bY(null,P.n)).I(t)},
me:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.mf()
return},
mf:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.e(new P.u("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.e(new P.u('Cannot extract URI from "'+t+'"'))},
mc:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.b1(!0,[]).T(b.data)
s=J.Z(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.ni(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.b1(!0,[]).T(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.b1(!0,[]).T(s.h(t,"replyTo"))
s=u.globalState.a++
k=P.n
j=P.ae(null,null,null,k)
i=new H.bh(0,null,!1)
h=new H.b2(s,new H.ad(0,null,null,null,null,null,0,[k,H.bh]),j,u.createNewIsolate(),i,new H.ao(H.iX()),new H.ao(H.iX()),!1,!1,[],P.ae(null,null,null,null),null,null,!1,!0,P.ae(null,null,null,null))
j.l(0,0)
h.bp(0,i)
u.globalState.f.a.P(0,new H.b3(h,new H.eC(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.aj()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.lG(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.aj()
break
case"close":u.globalState.ch.ai(0,$.$get$kf().h(0,a))
a.terminate()
u.globalState.f.aj()
break
case"log":H.mb(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
k=P.aT(["command","print","msg",t])
k=new H.ai(!0,P.bY(null,P.n)).I(k)
s.toString
self.postMessage(k)}else P.ak(s.h(t,"msg"))
break
case"error":throw H.e(s.h(t,"msg"))}},
mb:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aT(["command","log","msg",a])
r=new H.ai(!0,P.bY(null,P.n)).I(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.O(q)
t=H.ax(q)
s=P.cg(t)
throw H.e(s)}},
md:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.kn=$.kn+("_"+s)
$.ko=$.ko+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.E(0,["spawned",new H.bk(s,r),q,t.r])
r=new H.eD(a,b,c,d,t)
if(e){t.bL(q,q)
u.globalState.f.a.P(0,new H.b3(t,r,"start isolate"))}else r.$0()},
mB:function(a,b){var t=new H.h0(!0,!1,null)
t.da(a,b)
return t},
mQ:function(a){return new H.b1(!0,[]).T(new H.ai(!1,P.bY(null,P.n)).I(a))},
j2:function j2(a,b){this.a=a
this.b=b},
j3:function j3(a,b){this.a=a
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
hY:function hY(a,b){this.a=a
this.b=b},
hC:function hC(a,b){this.a=a
this.b=b},
hD:function hD(a){this.a=a},
b3:function b3(a,b,c){this.a=a
this.b=b
this.c=c},
i1:function i1(){},
eC:function eC(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eD:function eD(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hv:function hv(){},
bk:function bk(a,b){this.b=a
this.a=b},
i4:function i4(a,b){this.a=a
this.b=b},
c_:function c_(a,b,c){this.b=a
this.c=b
this.a=c},
bh:function bh(a,b,c){this.a=a
this.b=b
this.c=c},
h0:function h0(a,b,c){this.a=a
this.b=b
this.c=c},
h1:function h1(a,b){this.a=a
this.b=b},
h2:function h2(a,b){this.a=a
this.b=b},
ao:function ao(a){this.a=a},
ai:function ai(a,b){this.a=a
this.b=b},
b1:function b1(a,b){this.a=a
this.b=b},
nb:function(a){return u.types[a]},
nk:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.t(a).$isp},
f:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aJ(a)
if(typeof t!=="string")throw H.e(H.N(a))
return t},
mw:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.fv(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aV:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
km:function(a,b){throw H.e(new P.bB(a,null,null))},
jq:function(a,b,c){var t,s
H.kW(a)
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return H.km(a,c)
s=t[3]
if(s!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return H.km(a,c)},
kl:function(a,b){throw H.e(new P.bB("Invalid double",a,null))},
aW:function(a,b){var t,s
H.kW(a)
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return H.kl(a,b)
t=parseFloat(a)
if(isNaN(t)){s=J.lM(a)
if(s==="NaN"||s==="+NaN"||s==="-NaN")return t
return H.kl(a,b)}return t},
dg:function(a){var t,s,r,q,p,o,n,m
t=J.t(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.C||!!J.t(a).$isaZ){p=C.t(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.e.a7(q,0)===36)q=C.e.cN(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.dD(H.iG(a),0,null),u.mangledGlobalNames)},
fr:function(a){return"Instance of '"+H.dg(a)+"'"},
R:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mu:function(a){return a.b?H.R(a).getUTCFullYear()+0:H.R(a).getFullYear()+0},
ms:function(a){return a.b?H.R(a).getUTCMonth()+1:H.R(a).getMonth()+1},
mo:function(a){return a.b?H.R(a).getUTCDate()+0:H.R(a).getDate()+0},
mp:function(a){return a.b?H.R(a).getUTCHours()+0:H.R(a).getHours()+0},
mr:function(a){return a.b?H.R(a).getUTCMinutes()+0:H.R(a).getMinutes()+0},
mt:function(a){return a.b?H.R(a).getUTCSeconds()+0:H.R(a).getSeconds()+0},
mq:function(a){return a.b?H.R(a).getUTCMilliseconds()+0:H.R(a).getMilliseconds()+0},
jp:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.N(a))
return a[b]},
kp:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.N(a))
a[b]=c},
I:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.an(!0,b,"index",null)
t=J.dI(a)
if(b<0||C.b.ct(b,t))return P.A(b,a,"index",null,t)
return P.fs(b,"index",null)},
N:function(a){return new P.an(!0,a,null,null)},
kW:function(a){if(typeof a!=="string")throw H.e(H.N(a))
return a},
e:function(a){var t
if(a==null)a=new P.bg()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.la})
t.name=""}else t.toString=H.la
return t},
la:function(){return J.aJ(this.dartException)},
C:function(a){throw H.e(a)},
J:function(a){throw H.e(new P.a1(a))},
at:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.h7(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
h8:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
kA:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
jl:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.eJ(a,s,t?null:b.receiver)},
O:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.j4(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aO(r,16)&8191)===10)switch(q){case 438:return t.$1(H.jl(H.f(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.f(s)+" (Error "+q+")"
return t.$1(new H.df(p,null))}}if(a instanceof TypeError){o=$.$get$ku()
n=$.$get$kv()
m=$.$get$kw()
l=$.$get$kx()
k=$.$get$kB()
j=$.$get$kC()
i=$.$get$kz()
$.$get$ky()
h=$.$get$kE()
g=$.$get$kD()
f=o.M(s)
if(f!=null)return t.$1(H.jl(s,f))
else{f=n.M(s)
if(f!=null){f.method="call"
return t.$1(H.jl(s,f))}else{f=m.M(s)
if(f==null){f=l.M(s)
if(f==null){f=k.M(s)
if(f==null){f=j.M(s)
if(f==null){f=i.M(s)
if(f==null){f=l.M(s)
if(f==null){f=h.M(s)
if(f==null){f=g.M(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.df(s,f==null?null:f.method))}}return t.$1(new H.hb(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.dm()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.an(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.dm()
return a},
ax:function(a){var t
if(a==null)return new H.dA(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dA(a,null)},
no:function(a){if(a==null||typeof a!='object')return J.am(a)
else return H.aV(a)},
n9:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=a.length
for(r=0;r<s;){q=r+1
H.d(t)
p=a[r]
r=q+1
H.d(t)
b.i(0,p,a[q])}return b},
nj:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dC(b,new H.iO(a))
case 1:return H.dC(b,new H.iP(a,d))
case 2:return H.dC(b,new H.iQ(a,d,e))
case 3:return H.dC(b,new H.iR(a,d,e,f))
case 4:return H.dC(b,new H.iS(a,d,e,f,g))}throw H.e(P.cg("Unsupported number of arguments for wrapped closure"))},
b6:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.nj)
a.$identity=t
return t},
lW:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.t(c).$isb){t.$reflectionInfo=c
r=H.mw(t).r}else r=c
q=d?Object.create(new H.fJ().constructor.prototype):Object.create(new H.bt(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.k0(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.nb,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.jY:H.je
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
lT:function(a,b,c,d){var t=H.je
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
k0:function(a,b,c){var t,s,r,q
if(c)return H.lV(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.lT(s,b==null?r!=null:b!==r,t,b)
return q},
lU:function(a,b,c,d){var t,s
t=H.je
s=H.jY
switch(b?-1:a){case 0:throw H.e(new H.fA("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
lV:function(a,b){var t,s,r,q
H.lS()
t=$.jX
if(t==null){t=H.jW("receiver")
$.jX=t}s=b.$stubName
r=b.length
q=a[s]
t=H.lU(r,b==null?q!=null:b!==q,s,b)
return t},
jz:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.t(c).$isb){c.fixed$length=Array
t=c}else t=c
return H.lW(a,b,t,!!d,e,f)},
je:function(a){return a.a},
jY:function(a){return a.c},
lS:function(){var t=$.jZ
if(t==null){t=H.jW("self")
$.jZ=t}return t},
jW:function(a){var t,s,r,q,p
t=new H.bt("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
nP:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.au(a,"String"))},
Y:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.au(a,"double"))},
nO:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.au(a,"num"))},
n2:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.au(a,"bool"))},
ni:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.au(a,"int"))},
nq:function(a,b){throw H.e(H.au(a,b.substring(3)))},
np:function(a,b){var t=J.Z(b)
throw H.e(H.k_(H.dg(a),t.aC(b,3,t.gj(b))))},
jC:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.t(a)[b])return a
H.nq(a,b)},
aH:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.t(a)[b]
else t=!0
if(t)return a
H.np(a,b)},
nN:function(a){if(a==null)return a
if(!!J.t(a).$isb)return a
throw H.e(H.au(a,"List"))},
kZ:function(a){var t=J.t(a)
return"$S" in t?t.$S():null},
bo:function(a,b){var t
if(a==null)return!1
t=H.kZ(a)
return t==null?!1:H.l3(t,b)},
nL:function(a,b){var t,s
if(a==null)return a
if($.jw)return a
$.jw=!0
try{if(H.bo(a,b))return a
t=H.aI(b,null)
s=H.au(a,t)
throw H.e(s)}finally{$.jw=!1}},
au:function(a,b){return new H.h9("type '"+H.dg(a)+"' is not a subtype of type '"+b+"'")},
k_:function(a,b){return new H.dR("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
aF:function(a){if(!0===a)return!1
if(!!J.t(a).$isjh)a=a.$0()
if(typeof a==="boolean")return!a
throw H.e(H.au(a,"bool"))},
b5:function(a){throw H.e(new H.hp(a))},
d:function(a){if(H.aF(a))throw H.e(new P.c7(null))},
nz:function(a){throw H.e(new P.dV(a))},
iX:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
l1:function(a){return u.getIsolateTag(a)},
H:function(a){return new H.aC(a,null)},
D:function(a,b){H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
iG:function(a){if(a==null)return
return a.$ti},
l2:function(a,b){return H.jG(a["$as"+H.f(b)],H.iG(a))},
aj:function(a,b,c){var t,s
t=H.l2(a,b)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
aG:function(a,b){var t,s
t=H.iG(a)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
aI:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.d(!0)
H.d(!0)
return a[0].name+H.dD(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.f(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aI(t,b)
return H.mS(a,b)}return"unknown-reified-type"},
mS:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aI(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aI(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aI(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.n8(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aI(l[j],b)+(" "+H.f(j))}q+="}"}return"("+q+") => "+t},
dD:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=new P.bQ("")
for(r=b,q=!0,p=!0;H.d(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.d(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aI(o,c)}return p?"":"<"+s.k(0)+">"},
iH:function(a){var t,s
if(a instanceof H.b9){t=H.kZ(a)
if(t!=null)return H.aI(t,null)}s=J.t(a).constructor.name
if(a==null)return s
return s+H.dD(a.$ti,0,null)},
jG:function(a,b){if(a==null)return b
H.d(typeof a=="function")
H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.jD(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.jD(a,null,b)
return b},
c3:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.iG(a)
s=J.t(a)
if(s[b]==null)return!1
return H.kU(H.jG(s[d],t),c)},
dE:function(a,b,c,d){if(a==null)return a
if(H.c3(a,b,c,d))return a
throw H.e(H.k_(H.dg(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dD(c,0,null),u.mangledGlobalNames)))},
nI:function(a,b,c,d){if(a==null)return a
if(H.c3(a,b,c,d))return a
throw H.e(H.au(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dD(c,0,null),u.mangledGlobalNames)))},
kU:function(a,b){var t,s,r,q,p
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
if(!H.a_(r,b[p]))return!1}return!0},
nJ:function(a,b,c){return H.jD(a,b,H.l2(b,c))},
a_:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.name==="aU")return!0
if('func' in b)return H.l3(a,b)
if('func' in a)return b.name==="jh"||b.name==="o"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.d(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.d(!0)
q=b[0]}else q=b
if(q!==s){p=H.aI(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.kU(H.jG(o,t),r)},
kT:function(a,b,c){var t,s,r,q,p,o,n
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
if(!(H.a_(o,n)||H.a_(n,o)))return!1}return!0},
mZ:function(a,b){var t,s,r,q,p,o
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
if(!(H.a_(p,o)||H.a_(o,p)))return!1}return!0},
l3:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.d('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.a_(t,s)||H.a_(s,t)))return!1}r=a.args
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
if(n===m){if(!H.kT(r,q,!1))return!1
if(!H.kT(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.d(j)
g=r[h]
H.d(i)
f=q[h]
if(!(H.a_(g,f)||H.a_(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.d(j)
g=p[d]
H.d(i)
f=q[e]
if(!(H.a_(g,f)||H.a_(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.d(j)
g=p[d]
H.d(i)
f=o[e]
if(!(H.a_(g,f)||H.a_(f,g)))return!1}}return H.mZ(a.named,b.named)},
jD:function(a,b,c){H.d(typeof a=="function")
H.d(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
nQ:function(a){var t=$.jA
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
nM:function(a){return H.aV(a)},
nK:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nl:function(a){var t,s,r,q,p,o
H.d(!(a instanceof P.o))
t=$.jA.$1(a)
s=$.iD[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iN[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.kS.$2(a,t)
if(t!=null){s=$.iD[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iN[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.jE(r)
$.iD[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.iN[t]=r
return r}if(p==="-"){o=H.jE(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.l7(a,r)
if(p==="*")throw H.e(new P.bT(t))
if(u.leafTags[t]===true){o=H.jE(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.l7(a,r)},
l7:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.iW(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
jE:function(a){return J.iW(a,!1,null,!!a.$isp)},
nn:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.iW(t,!1,null,!!t.$isp)
else return J.iW(t,c,null,null)},
ng:function(){if(!0===$.jB)return
$.jB=!0
H.nh()},
nh:function(){var t,s,r,q,p,o,n,m
$.iD=Object.create(null)
$.iN=Object.create(null)
H.nf()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.l8.$1(p)
if(o!=null){n=H.nn(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
nf:function(){var t,s,r,q,p,o,n
t=C.H()
t=H.bn(C.E,H.bn(C.J,H.bn(C.r,H.bn(C.r,H.bn(C.I,H.bn(C.F,H.bn(C.G(C.t),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.jA=new H.iK(p)
$.kS=new H.iL(o)
$.l8=new H.iM(n)},
bn:function(a,b){return a(b)||b},
ki:function(a,b,c,d){var t,s,r,q
t=b?"m":""
s=c?"":"i"
r=d?"g":""
q=function(e,f){try{return new RegExp(e,f)}catch(p){return p}}(a,t+s+r)
if(q instanceof RegExp)return q
throw H.e(new P.bB("Illegal RegExp pattern ("+String(q)+")",a,null))},
mP:function(a,b){var t=new H.i3(a,b)
t.dk(a,b)
return t},
nu:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
nw:function(a,b,c,d){var t,s,r
t=b.dB(a,d)
if(t==null)return a
s=t.b
r=s.index
return H.ny(a,r,r+s[0].length,c)},
nv:function(a,b,c){var t,s
t=b.gbD()
t.lastIndex=0
s=a.replace(t,c.replace(/\$/g,"$$$$"))
return s},
nx:function(a,b,c,d){return d===0?a.replace(b.b,c.replace(/\$/g,"$$$$")):H.nw(a,b,c,d)},
ny:function(a,b,c,d){var t,s
t=a.substring(0,b)
s=a.substring(c)
return t+d+s},
fv:function fv(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
h7:function h7(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
df:function df(a,b){this.a=a
this.b=b},
eJ:function eJ(a,b,c){this.a=a
this.b=b
this.c=c},
hb:function hb(a){this.a=a},
j4:function j4(a){this.a=a},
dA:function dA(a,b){this.a=a
this.b=b},
iO:function iO(a){this.a=a},
iP:function iP(a,b){this.a=a
this.b=b},
iQ:function iQ(a,b,c){this.a=a
this.b=b
this.c=c},
iR:function iR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iS:function iS(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
b9:function b9(){},
fW:function fW(){},
fJ:function fJ(){},
bt:function bt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h9:function h9(a){this.a=a},
dR:function dR(a){this.a=a},
fA:function fA(a){this.a=a},
hp:function hp(a){this.a=a},
aC:function aC(a,b){this.a=a
this.b=b},
ad:function ad(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
eI:function eI(a){this.a=a},
eL:function eL(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
eM:function eM(a,b){this.a=a
this.$ti=b},
eN:function eN(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
iK:function iK(a){this.a=a},
iL:function iL(a){this.a=a},
iM:function iM(a){this.a=a},
eH:function eH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i3:function i3(a,b){this.a=a
this.b=b},
P:function(a){return a},
iu:function(a){var t,s,r
if(!!J.t(a).$ism)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
bH:function bH(){},
bf:function bf(){},
f0:function f0(){},
d8:function d8(){},
d9:function d9(){},
da:function da(){},
d7:function d7(){},
f1:function f1(){},
f2:function f2(){},
f3:function f3(){},
f4:function f4(){},
f5:function f5(){},
f6:function f6(){},
db:function db(){},
f7:function f7(){},
bI:function bI(){},
bJ:function bJ(){},
bK:function bK(){},
bL:function bL(){},
n8:function(a){var t=H.D(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
bq:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
t:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d2.prototype
return J.d1.prototype}if(typeof a=="string")return J.aQ.prototype
if(a==null)return J.d3.prototype
if(typeof a=="boolean")return J.eG.prototype
if(a.constructor==Array)return J.aP.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aR.prototype
return a}if(a instanceof P.o)return a
return J.iF(a)},
iW:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iF:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.jB==null){H.ng()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.e(new P.bT("Return interceptor for "+H.f(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$jk()]
if(p!=null)return p
p=H.nl(a)
if(p!=null)return p
if(typeof a=="function")return C.K
s=Object.getPrototypeOf(a)
if(s==null)return C.w
if(s===Object.prototype)return C.w
if(typeof q=="function"){Object.defineProperty(q,$.$get$jk(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
kh:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
mj:function(a,b){var t,s
for(t=a.length;b<t;){s=C.e.a7(a,b)
if(s!==32&&s!==13&&!J.kh(s))break;++b}return b},
mk:function(a,b){var t,s
for(;b>0;b=t){t=b-1
s=C.e.bU(a,t)
if(s!==32&&s!==13&&!J.kh(s))break}return b},
Z:function(a){if(typeof a=="string")return J.aQ.prototype
if(a==null)return a
if(a.constructor==Array)return J.aP.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aR.prototype
return a}if(a instanceof P.o)return a
return J.iF(a)},
bp:function(a){if(a==null)return a
if(a.constructor==Array)return J.aP.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aR.prototype
return a}if(a instanceof P.o)return a
return J.iF(a)},
l0:function(a){if(typeof a=="number")return J.bd.prototype
if(a==null)return a
if(!(a instanceof P.o))return J.aZ.prototype
return a},
na:function(a){if(typeof a=="number")return J.bd.prototype
if(typeof a=="string")return J.aQ.prototype
if(a==null)return a
if(!(a instanceof P.o))return J.aZ.prototype
return a},
iE:function(a){if(typeof a=="string")return J.aQ.prototype
if(a==null)return a
if(!(a instanceof P.o))return J.aZ.prototype
return a},
l:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aR.prototype
return a}if(a instanceof P.o)return a
return J.iF(a)},
x:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.t(a).w(a,b)},
al:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.l0(a).az(a,b)},
lb:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.l0(a).am(a,b)},
b7:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nk(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.Z(a).h(a,b)},
lc:function(a,b,c){return J.bp(a).i(a,b,c)},
ld:function(a,b,c,d){return J.l(a).dn(a,b,c,d)},
jH:function(a,b){return J.iE(a).a7(a,b)},
br:function(a,b){return J.l(a).dJ(a,b)},
le:function(a,b,c){return J.l(a).dK(a,b,c)},
jI:function(a,b){return J.l(a).bK(a,b)},
j5:function(a,b){return J.l(a).N(a,b)},
jJ:function(a,b,c){return J.l(a).bN(a,b,c)},
lf:function(a,b){return J.l(a).dY(a,b)},
dF:function(a,b,c){return J.l(a).bO(a,b,c)},
jK:function(a,b,c){return J.l(a).bP(a,b,c)},
dG:function(a,b){return J.l(a).e0(a,b)},
lg:function(a,b){return J.l(a).bQ(a,b)},
lh:function(a,b,c){return J.l(a).bR(a,b,c)},
jL:function(a,b,c,d){return J.l(a).bS(a,b,c,d)},
li:function(a,b,c,d,e){return J.l(a).bT(a,b,c,d,e)},
lj:function(a,b){return J.na(a).O(a,b)},
j6:function(a,b,c){return J.Z(a).e5(a,b,c)},
j7:function(a){return J.l(a).bW(a)},
lk:function(a){return J.l(a).bX(a)},
ll:function(a){return J.l(a).ea(a)},
lm:function(a,b){return J.l(a).c_(a,b)},
j8:function(a,b){return J.l(a).c0(a,b)},
ln:function(a,b,c,d){return J.l(a).c1(a,b,c,d)},
lo:function(a,b,c,d,e){return J.l(a).eh(a,b,c,d,e)},
lp:function(a,b,c,d,e){return J.l(a).c2(a,b,c,d,e)},
lq:function(a,b,c,d,e,f){return J.l(a).ei(a,b,c,d,e,f)},
lr:function(a,b){return J.bp(a).t(a,b)},
dH:function(a,b){return J.l(a).c3(a,b)},
ls:function(a,b){return J.l(a).c4(a,b)},
lt:function(a){return J.l(a).ej(a)},
lu:function(a,b){return J.bp(a).at(a,b)},
lv:function(a){return J.l(a).gdX(a)},
am:function(a){return J.t(a).gu(a)},
bs:function(a){return J.bp(a).gv(a)},
dI:function(a){return J.Z(a).gj(a)},
lw:function(a){return J.l(a).gaY(a)},
lx:function(a){return J.t(a).gA(a)},
ly:function(a){return J.l(a).geM(a)},
lz:function(a){return J.l(a).gaw(a)},
j9:function(a){return J.l(a).gm(a)},
ja:function(a){return J.l(a).gn(a)},
jM:function(a){return J.l(a).gK(a)},
jb:function(a,b){return J.l(a).a3(a,b)},
lA:function(a){return J.l(a).ay(a)},
lB:function(a,b){return J.l(a).b4(a,b)},
lC:function(a,b,c){return J.l(a).b5(a,b,c)},
jN:function(a,b,c){return J.l(a).b8(a,b,c)},
lD:function(a,b){return J.l(a).c7(a,b)},
lE:function(a,b){return J.bp(a).c9(a,b)},
lF:function(a){return J.bp(a).eG(a)},
lG:function(a,b){return J.l(a).E(a,b)},
lH:function(a,b,c){return J.l(a).cG(a,b,c)},
lI:function(a,b){return J.iE(a).cL(a,b)},
lJ:function(a,b,c,d){return J.l(a).bd(a,b,c,d)},
lK:function(a){return J.iE(a).eP(a)},
aJ:function(a){return J.t(a).k(a)},
lL:function(a,b,c,d){return J.l(a).eR(a,b,c,d)},
lM:function(a){return J.iE(a).eS(a)},
lN:function(a,b,c){return J.l(a).cd(a,b,c)},
lO:function(a,b,c){return J.l(a).ce(a,b,c)},
jc:function(a,b,c){return J.l(a).cf(a,b,c)},
lP:function(a,b,c){return J.l(a).cg(a,b,c)},
jO:function(a,b,c){return J.l(a).ci(a,b,c)},
jP:function(a,b,c){return J.l(a).cj(a,b,c)},
jQ:function(a,b,c){return J.l(a).ck(a,b,c)},
jR:function(a,b,c,d){return J.l(a).cl(a,b,c,d)},
jS:function(a,b,c,d){return J.l(a).cm(a,b,c,d)},
lQ:function(a,b){return J.l(a).co(a,b)},
lR:function(a,b,c){return J.l(a).eT(a,b,c)},
jT:function(a,b,c,d,e,f,g){return J.l(a).cq(a,b,c,d,e,f,g)},
a:function a(){},
eG:function eG(){},
d3:function d3(){},
bE:function bE(){},
fl:function fl(){},
aZ:function aZ(){},
aR:function aR(){},
aP:function aP(a){this.$ti=a},
ji:function ji(a){this.$ti=a},
dM:function dM(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bd:function bd(){},
d2:function d2(){},
d1:function d1(){},
aQ:function aQ(){}},P={
mF:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.n_()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.b6(new P.hr(t),1)).observe(s,{childList:true})
return new P.hq(t,s,r)}else if(self.setImmediate!=null)return P.n0()
return P.n1()},
mG:function(a){++u.globalState.f.b
self.scheduleImmediate(H.b6(new P.hs(a),0))},
mH:function(a){++u.globalState.f.b
self.setImmediate(H.b6(new P.ht(a),0))},
mI:function(a){P.jr(C.o,a)},
mV:function(a,b){if(H.bo(a,{func:1,args:[P.aU,P.aU]})){b.toString
return a}else{b.toString
return a}},
m7:function(a,b,c){var t
if(a==null)a=new P.bg()
t=$.w
if(t!==C.d)t.toString
t=new P.M(0,t,null,[c])
t.br(a,b)
return t},
m8:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.M(0,$.w,null,[P.b])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.ew(t,!1,b,s)
try{for(m=0,l=0;m<1;++m){q=a[m]
p=l
q.b1(new P.ev(t,!1,b,s,p),r)
l=++t.b}if(l===0){l=new P.M(0,$.w,null,[null])
l.bq(C.u)
return l}k=new Array(l)
k.fixed$length=Array
t.a=k}catch(j){o=H.O(j)
n=H.ax(j)
if(t.b===0||!1)return P.m7(o,n,null)
else{t.c=o
t.d=n}}return s},
kJ:function(a,b){var t,s,r
H.d(b.a<4)
H.d(!(a instanceof P.M))
H.d(b.a===0)
b.a=1
try{a.b1(new P.hM(b),new P.hN(b))}catch(r){t=H.O(r)
s=H.ax(r)
P.nr(new P.hO(b,t,s))}},
hL:function(a,b){var t,s,r,q
H.d(b.a<=1)
for(;t=a.a,s=t===2,s;){H.d(s)
a=a.c}s=b.a
if(t>=4){H.d(s<4)
r=b.c
b.c=null
q=b.ab(r)
H.d(b.a<4)
H.d(a.a>=4)
b.a=a.a
b.c=a.c
P.bj(b,q)}else{q=b.c
H.d(s<=1)
b.a=2
b.c=a
a.bE(q)}},
bj:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.iv(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bj(t.a,b)}s=t.a
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
P.iv(null,null,p,o,s)
return}s=$.w
if(s==null?l!=null:s!==l){H.d(l!=null)
s=$.w
H.d(l==null?s!=null:l!==s)
j=$.w
$.w=l
i=j}else i=null
s=b.c
if(s===8)new P.hT(t,r,q,b).$0()
else if(p){if((s&1)!==0)new P.hS(r,b,m).$0()}else if((s&2)!==0)new P.hR(t,r,b).$0()
if(i!=null){H.d(!0)
$.w=i}s=r.b
if(!!J.t(s).$isbc){if(s.a>=4){H.d(o.a<4)
h=o.c
o.c=null
b=o.ab(h)
H.d(o.a<4)
H.d(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.hL(s,o)
return}}g=b.b
H.d(g.a<4)
h=g.c
g.c=null
b=g.ab(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.d(!o)
g.a=4
g.c=p}else{H.d(!o)
g.a=8
g.c=p}t.a=g
s=g}},
mU:function(){var t,s
for(;t=$.bl,t!=null;){$.c1=null
s=t.b
$.bl=s
if(s==null)$.c0=null
t.a.$0()}},
mY:function(){$.jx=!0
try{P.mU()}finally{$.c1=null
$.jx=!1
if($.bl!=null)$.$get$jt().$1(P.kV())}},
kQ:function(a){var t=new P.du(a,null)
if($.bl==null){$.c0=t
$.bl=t
if(!$.jx)$.$get$jt().$1(P.kV())}else{$.c0.b=t
$.c0=t}},
mX:function(a){var t,s,r
t=$.bl
if(t==null){P.kQ(a)
$.c1=$.c0
return}s=new P.du(a,null)
r=$.c1
if(r==null){s.b=t
$.c1=s
$.bl=s}else{s.b=r.b
r.b=s
$.c1=s
if(s.b==null)$.c0=s}},
nr:function(a){var t=$.w
if(C.d===t){P.bm(null,null,C.d,a)
return}t.toString
P.bm(null,null,t,t.aR(a))},
mC:function(a,b){var t=$.w
if(t===C.d){t.toString
return P.jr(a,b)}return P.jr(a,t.aR(b))},
jr:function(a,b){var t=C.b.H(a.a,1000)
return H.mB(t<0?0:t,b)},
js:function(a){var t,s
H.d(a!=null)
t=$.w
H.d(a==null?t!=null:a!==t)
s=$.w
$.w=a
return s},
iv:function(a,b,c,d,e){var t={}
t.a=d
P.mX(new P.iw(t,e))},
kO:function(a,b,c,d){var t,s
if($.w===c)return d.$0()
t=P.js(c)
try{s=d.$0()
return s}finally{s=t
H.d(s!=null)
$.w=s}},
kP:function(a,b,c,d,e){var t,s
if($.w===c)return d.$1(e)
t=P.js(c)
try{s=d.$1(e)
return s}finally{s=t
H.d(s!=null)
$.w=s}},
mW:function(a,b,c,d,e,f){var t,s
if($.w===c)return d.$2(e,f)
t=P.js(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.d(s!=null)
$.w=s}},
bm:function(a,b,c,d){var t=C.d!==c
if(t)d=!(!t||!1)?c.aR(d):c.dZ(d)
P.kQ(d)},
hr:function hr(a){this.a=a},
hq:function hq(a,b,c){this.a=a
this.b=b
this.c=c},
hs:function hs(a){this.a=a},
ht:function ht(a){this.a=a},
ew:function ew(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ev:function ev(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hx:function hx(){},
dv:function dv(a,b){this.a=a
this.$ti=b},
il:function il(a,b){this.a=a
this.$ti=b},
dx:function dx(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
M:function M(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hI:function hI(a,b){this.a=a
this.b=b},
hQ:function hQ(a,b){this.a=a
this.b=b},
hM:function hM(a){this.a=a},
hN:function hN(a){this.a=a},
hO:function hO(a,b,c){this.a=a
this.b=b
this.c=c},
hK:function hK(a,b){this.a=a
this.b=b},
hP:function hP(a,b){this.a=a
this.b=b},
hJ:function hJ(a,b,c){this.a=a
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
du:function du(a,b){this.a=a
this.b=b},
fN:function fN(){},
fP:function fP(a){this.a=a},
fQ:function fQ(a,b){this.a=a
this.b=b},
fO:function fO(){},
b8:function b8(a,b){this.a=a
this.b=b},
it:function it(){},
iw:function iw(a,b){this.a=a
this.b=b},
i6:function i6(){},
i8:function i8(a,b){this.a=a
this.b=b},
i7:function i7(a,b){this.a=a
this.b=b},
i9:function i9(a,b){this.a=a
this.b=b},
kj:function(a,b){return new H.ad(0,null,null,null,null,null,0,[a,b])},
Q:function(){return new H.ad(0,null,null,null,null,null,0,[null,null])},
aT:function(a){return H.n9(a,new H.ad(0,null,null,null,null,null,0,[null,null]))},
bY:function(a,b){return new P.dy(0,null,null,null,null,null,0,[a,b])},
mN:function(){var t=Object.create(null)
H.d(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
mg:function(a,b,c){var t,s
if(P.jy(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$c2()
C.a.l(s,a)
try{P.mT(a,t)}finally{H.d(C.a.gaV(s)===a)
s.pop()}s=P.kt(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eE:function(a,b,c){var t,s,r
if(P.jy(a))return b+"..."+c
t=new P.bQ(b)
s=$.$get$c2()
C.a.l(s,a)
try{r=t
r.a=P.kt(r.ga_(),a,", ")}finally{H.d(C.a.gaV(s)===a)
s.pop()}s=t
s.a=s.ga_()+c
s=t.ga_()
return s.charCodeAt(0)==0?s:s},
jy:function(a){var t,s
for(t=0;s=$.$get$c2(),t<s.length;++t)if(a===s[t])return!0
return!1},
mT:function(a,b){var t,s,r,q,p,o,n,m,l,k
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
ae:function(a,b,c,d){return new P.hZ(0,null,null,null,null,null,0,[d])},
jm:function(a,b){var t,s
t=P.ae(null,null,null,b)
for(s=J.bs(a);s.p();)t.l(0,s.gq())
return t},
mm:function(a){var t,s,r
t={}
if(P.jy(a))return"{...}"
s=new P.bQ("")
try{C.a.l($.$get$c2(),a)
r=s
r.a=r.ga_()+"{"
t.a=!0
a.at(0,new P.eS(t,s))
t=s
t.a=t.ga_()+"}"}finally{t=$.$get$c2()
H.d(C.a.gaV(t)===a)
t.pop()}t=s.ga_()
return t.charCodeAt(0)==0?t:t},
jn:function(a,b){var t=new P.eO(null,0,0,0,[b])
t.d5(a,b)
return t},
dy:function dy(a,b,c,d,e,f,g,h){var _=this
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
bX:function bX(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hX:function hX(){},
d4:function d4(){},
v:function v(){},
eS:function eS(a,b){this.a=a
this.b=b},
eO:function eO(a,b,c,d,e){var _=this
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
fD:function fD(){},
fC:function fC(){},
bN:function bN(){},
kt:function(a,b,c){var t=J.bs(b)
if(!t.p())return a
if(c.length===0){do a+=H.f(t.gq())
while(t.p())}else{a+=H.f(t.gq())
for(;t.p();)a=a+c+H.f(t.gq())}return a},
lX:function(a,b){return J.lj(a,b)},
lY:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.f(t)
if(t>=10)return s+"00"+H.f(t)
return s+"000"+H.f(t)},
lZ:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ca:function(a){if(a>=10)return""+a
return"0"+a},
m0:function(a,b,c,d,e,f){return new P.ay(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
jg:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aJ(a)
if(typeof a==="string")return JSON.stringify(a)
return P.m3(a)},
m3:function(a){var t=J.t(a)
if(!!t.$isb9)return t.k(a)
return H.fr(a)},
jd:function(a){return new P.an(!1,null,null,a)},
jU:function(a,b,c){return new P.an(!0,a,b,c)},
fs:function(a,b,c){return new P.di(null,null,!0,a,b,"Value not in range")},
aX:function(a,b,c,d,e){return new P.di(b,c,!0,a,d,"Invalid value")},
kq:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.aX(a,0,c,"start",f))
if(a>b||b>c)throw H.e(P.aX(b,a,c,"end",f))
return b},
A:function(a,b,c,d,e){var t=e!=null?e:J.dI(b)
return new P.eA(b,t,!0,a,c,"Index out of range")},
cg:function(a){return new P.hH(a)},
kk:function(a,b,c){var t,s
t=H.D([],[c])
for(s=J.bs(a);s.p();)C.a.l(t,s.gq())
return t},
ak:function(a){H.bq(H.f(a))},
kr:function(a,b,c){return new H.eH(a,H.ki(a,!1,!0,!1),null,null)},
aw:function aw(){},
F:function F(){},
aN:function aN(a,b){this.a=a
this.b=b},
K:function K(){},
ay:function ay(a){this.a=a},
e1:function e1(){},
e2:function e2(){},
bb:function bb(){},
c7:function c7(a){this.a=a},
bg:function bg(){},
an:function an(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
di:function di(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eA:function eA(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
u:function u(a){this.a=a},
bT:function bT(a){this.a=a},
af:function af(a){this.a=a},
a1:function a1(a){this.a=a},
dm:function dm(){},
dV:function dV(a){this.a=a},
hH:function hH(a){this.a=a},
bB:function bB(a,b,c){this.a=a
this.b=b
this.c=c},
e4:function e4(a,b,c){this.a=a
this.b=b
this.$ti=c},
n:function n(){},
V:function V(){},
d0:function d0(){},
b:function b(){},
aB:function aB(){},
aU:function aU(){},
U:function U(){},
o:function o(){},
bP:function bP(){},
r:function r(){},
bQ:function bQ(a){this.a=a},
iB:function(a){var t,s,r,q,p
if(a==null)return
t=P.Q()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.J)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
n5:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.lu(a,new P.iy(t))
return t},
n6:function(a){var t,s
t=new P.M(0,$.w,null,[null])
s=new P.dv(t,[null])
a.then(H.b6(new P.iz(s),1))["catch"](H.b6(new P.iA(s),1))
return t},
k8:function(){var t=$.k7
if(t==null){t=J.j6(window.navigator.userAgent,"Opera",0)
$.k7=t}return t},
m_:function(){var t,s
t=$.k4
if(t!=null)return t
s=$.k5
if(s==null){s=J.j6(window.navigator.userAgent,"Firefox",0)
$.k5=s}if(s)t="-moz-"
else{s=$.k6
if(s==null){s=!P.k8()&&J.j6(window.navigator.userAgent,"Trident/",0)
$.k6=s}if(s)t="-ms-"
else t=P.k8()?"-o-":"-webkit-"}$.k4=t
return t},
hm:function hm(){},
ho:function ho(a,b){this.a=a
this.b=b},
iy:function iy(a){this.a=a},
hn:function hn(a,b,c){this.a=a
this.b=b
this.c=c},
iz:function iz(a){this.a=a},
iA:function iA(a){this.a=a},
i5:function i5(){},
G:function G(){},
dJ:function dJ(){},
aK:function aK(){},
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
er:function er(){},
et:function et(){},
ac:function ac(){},
aA:function aA(){},
ez:function ez(){},
ap:function ap(){},
eK:function eK(){},
eT:function eT(){},
eU:function eU(){},
ar:function ar(){},
fb:function fb(){},
fi:function fi(){},
fn:function fn(){},
fo:function fo(){},
ft:function ft(){},
fu:function fu(){},
bO:function bO(){},
fR:function fR(){},
E:function E(){},
fS:function fS(){},
fT:function fT(){},
dp:function dp(){},
fX:function fX(){},
bS:function bS(){},
as:function as(){},
h5:function h5(){},
hd:function hd(){},
hf:function hf(){},
hg:function hg(){},
bV:function bV(){},
ia:function ia(){},
ib:function ib(){},
ic:function ic(){},
cp:function cp(){},
cn:function cn(){},
cu:function cu(){},
cy:function cy(){},
cI:function cI(){},
cR:function cR(){},
cN:function cN(){},
cP:function cP(){},
dN:function dN(){},
fx:function fx(){},
fy:function fy(){},
iq:function iq(){},
fI:function fI(){},
co:function co(){},
cL:function cL(){}},W={
m1:function(a,b,c){var t,s
t=document.body
s=(t&&C.h).L(t,a,b,c)
s.toString
t=new H.dt(new W.S(s),new W.ix(),[W.q])
return t.gY(t)},
m2:function(a){return"wheel"},
bu:function(a){var t,s,r
t="element tag unavailable"
try{s=J.ly(a)
if(typeof s==="string")t=a.tagName}catch(r){H.O(r)}return t},
mJ:function(a,b){return document.createElement(a)},
b4:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kM:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ah:function(a,b,c,d,e){var t=W.kR(new W.hG(c))
t=new W.hF(0,a,b,t,!1,[e])
t.dh(a,b,c,!1,e)
return t},
kK:function(a){var t,s
t=document.createElement("a")
s=new W.id(t,window.location)
s=new W.bW(s)
s.di(a)
return s},
mL:function(a,b,c,d){return!0},
mM:function(a,b,c,d){var t,s,r,q,p
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
kN:function(){var t=P.r
t=new W.im(P.jm(C.k,t),P.ae(null,null,null,t),P.ae(null,null,null,t),P.ae(null,null,null,t),null)
t.dl(null,new H.bF(C.k,new W.io(),[H.aG(C.k,0),null]),["TEMPLATE"],null)
return t},
mR:function(a){var t
if(!!J.t(a).$isaO)return a
t=new P.hn([],[],!1)
t.c=!0
return t.b3(a)},
kR:function(a){var t=$.w
if(t===C.d)return a
return t.e_(a)},
k:function k(){},
dK:function dK(){},
dL:function dL(){},
a0:function a0(){},
dO:function dO(){},
c8:function c8(){},
aL:function aL(){},
c9:function c9(){},
dQ:function dQ(){},
aM:function aM(){},
dT:function dT(){},
y:function y(){},
ba:function ba(){},
dU:function dU(){},
dW:function dW(){},
dX:function dX(){},
cb:function cb(){},
aO:function aO(){},
cc:function cc(){},
dY:function dY(){},
cd:function cd(){},
dZ:function dZ(){},
ce:function ce(){},
cf:function cf(){},
e_:function e_(){},
e0:function e0(){},
a2:function a2(){},
ix:function ix(){},
j:function j(){},
h:function h(){},
a3:function a3(){},
ep:function ep(){},
eq:function eq(){},
eu:function eu(){},
a4:function a4(){},
cj:function cj(){},
ey:function ey(){},
bC:function bC(){},
ck:function ck(){},
cl:function cl(){},
bD:function bD(){},
eB:function eB(){},
aS:function aS(){},
eQ:function eQ(){},
eW:function eW(){},
eY:function eY(){},
bG:function bG(){},
a5:function a5(){},
eZ:function eZ(){},
L:function L(){},
f8:function f8(){},
S:function S(a){this.a=a},
q:function q(){},
dc:function dc(){},
bM:function bM(){},
fh:function fh(){},
fk:function fk(){},
a6:function a6(){},
fm:function fm(){},
fp:function fp(){},
fq:function fq(){},
dh:function dh(){},
fz:function fz(){},
dj:function dj(){},
fB:function fB(){},
fE:function fE(){},
a7:function a7(){},
fF:function fF(){},
a8:function a8(){},
fH:function fH(){},
a9:function a9(){},
fM:function fM(){},
W:function W(){},
ag:function ag(){},
dn:function dn(){},
fU:function fU(){},
fV:function fV(){},
bR:function bR(){},
aa:function aa(){},
X:function X(){},
fY:function fY(){},
fZ:function fZ(){},
h_:function h_(){},
ab:function ab(){},
aY:function aY(){},
h3:function h3(){},
h4:function h4(){},
bi:function bi(){},
h6:function h6(){},
ds:function ds(){},
aD:function aD(){},
hc:function hc(){},
he:function he(){},
hh:function hh(){},
hi:function hi(){},
b_:function b_(){},
bU:function bU(){},
hk:function hk(a){this.a=a},
hl:function hl(){},
b0:function b0(){},
hw:function hw(){},
dw:function dw(){},
hy:function hy(){},
hz:function hz(){},
hA:function hA(){},
hV:function hV(){},
hW:function hW(){},
dz:function dz(){},
ie:function ie(){},
ii:function ii(){},
ij:function ij(){},
ir:function ir(){},
is:function is(){},
hu:function hu(){},
hB:function hB(a){this.a=a},
hE:function hE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ju:function ju(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hF:function hF(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
hG:function hG(a){this.a=a},
bW:function bW(a){this.a=a},
z:function z(){},
de:function de(a){this.a=a},
fa:function fa(a){this.a=a},
f9:function f9(a,b,c){this.a=a
this.b=b
this.c=c},
bZ:function bZ(){},
ig:function ig(){},
ih:function ih(){},
im:function im(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
io:function io(){},
ik:function ik(){},
ci:function ci(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
dd:function dd(){},
id:function id(a,b){this.a=a
this.b=b},
dB:function dB(a){this.a=a},
ip:function ip(a){this.a=a},
bv:function bv(){},
bw:function bw(){},
bx:function bx(){},
by:function by(){},
bz:function bz(){},
bA:function bA(){},
cm:function cm(){},
cG:function cG(){},
cs:function cs(){},
cz:function cz(){},
cA:function cA(){},
cB:function cB(){},
cC:function cC(){},
cD:function cD(){},
cE:function cE(){},
cF:function cF(){},
cq:function cq(){},
cr:function cr(){},
ct:function ct(){},
cv:function cv(){},
cw:function cw(){},
cx:function cx(){},
cH:function cH(){},
cJ:function cJ(){},
cT:function cT(){},
cU:function cU(){},
cS:function cS(){},
cX:function cX(){},
cY:function cY(){},
cZ:function cZ(){},
d_:function d_(){},
cK:function cK(){},
cM:function cM(){},
cO:function cO(){},
cQ:function cQ(){},
cV:function cV(){},
cW:function cW(){}},B={
ns:function(a){var t,s
t=document
s=W.aS
W.ah(t,"keydown",new B.iY(),!1,s)
W.ah(t,"keyup",new B.iZ(),!1,s)
if(!$.nt)W.ah(t,"mousemove",new B.j_(),!1,W.L)
s=W.L
W.ah(t,"mousedown",new B.j0(),!1,s)
W.ah(t,"mouseup",new B.j1(),!1,s)},
mn:function(a,b,c,d){var t,s,r,q
t=new Float32Array(H.P(3))
s=$.$get$iC()
r=$.$get$c4()
q=new T.aq(new Float32Array(H.P(16)))
q.an()
q=new B.fc(a,b,c,0,new T.B(t),-0.02,s,r,q,new T.B(new Float32Array(H.P(3))),new T.B(new Float32Array(H.P(3))),new T.B(new Float32Array(H.P(3))),new T.B(new Float32Array(H.P(3))),"camera:orbit",!1,!0)
q.d6(a,b,c,d)
return q},
iY:function iY(){},
iZ:function iZ(){},
j_:function j_(){},
j0:function j0(){},
j1:function j1(){},
fc:function fc(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
fd:function fd(a){this.a=a},
fe:function fe(a){this.a=a},
ff:function ff(){},
fg:function fg(a){this.a=a}},G={
mE:function(a){var t,s,r
t=a.split("\n")
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.f(t[s])}return C.a.ah(t,"\n")},
kI:function(a,b,c){var t,s,r,q
t=J.l(a)
s=t.bY(a,b)
t.bb(a,s,c)
t.bV(a,s)
r=t.b7(a,s,35713)
if(r!=null&&!r){q=t.b6(a,s)
P.ak("E:Compilation failed:")
P.ak("E:"+G.mE(c))
P.ak("E:Failure:")
P.ak(C.e.a2("E:",q))
throw H.e(q)}return s},
kc:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.j9(a[s])
b[t+1]=J.ja(a[s])
b[t+2]=J.jM(a[s])}return b},
m5:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.j9(a[s])
b[t+1]=J.ja(a[s])}return b},
m6:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.j9(a[s])
b[t+1]=J.ja(a[s])
b[t+2]=J.jM(a[s])
b[t+3]=J.lz(a[s])}return b},
m4:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.b7(a[s],0)
b[t+1]=J.b7(a[s],1)
b[t+2]=J.b7(a[s],2)
b[t+3]=J.b7(a[s],3)}return b},
mK:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
for(t=a.e,s=t.gD(t),s=s.gv(s),r=b.x,q=[[P.b,P.n]],p=[P.K],o=[T.aE],n=[T.B],m=[T.av];s.p();){l=s.gq()
if(!r.C(0,l)){k="Dropping unnecessary attribute: "+H.f(l)
if($.l_>0)H.bq("I: "+k)
continue}j=t.h(0,l)
switch($.$get$T().h(0,l).a){case"vec2":b.a6(l,G.m5(H.dE(j,"$isb",m,"$asb"),null),2)
break
case"vec3":b.a6(l,G.kc(H.dE(j,"$isb",n,"$asb"),null),3)
break
case"vec4":b.a6(l,G.m6(H.dE(j,"$isb",o,"$asb"),null),4)
break
case"float":b.a6(l,new Float32Array(H.iu(H.dE(j,"$isb",p,"$asb"))),1)
break
case"uvec4":b.a6(l,G.m4(H.dE(j,"$isb",q,"$asb"),null),4)
break
default:if(H.aF(!1))H.b5("unknown type for "+H.f(l)+" ["+J.lx(j[0]).k(0)+"] ["+new H.aC(H.iH(j),null).k(0)+"] "+H.f(j))}}},
mx:function(a,b,c,d){var t=new G.fw(b,c,d,null,null,P.Q(),P.Q(),P.ae(null,null,null,P.r),null,a,!1,!0)
t.d7(a,b,c,d)
return t},
f_:function f_(){},
ha:function ha(){},
dP:function dP(){},
dS:function dS(a,b){this.a=a
this.b=b},
en:function en(a,b,c){this.a=a
this.b=b
this.c=c},
eo:function eo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ex:function ex(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dr:function dr(a,b,c){this.a=a
this.b=b
this.c=c},
dq:function dq(a,b,c){this.a=a
this.b=b
this.c=c},
eV:function eV(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
eX:function eX(a,b,c,d,e,f,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
fj:function fj(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
fw:function fw(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
dk:function dk(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fG:function fG(){}},R={fK:function fK(){},fL:function fL(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},D={
ml:function(a){var t,s
t=new P.M(0,$.w,null,[null])
s=new XMLHttpRequest()
C.p.eD(s,"GET",a)
W.ah(s,"loadend",new D.eP(new P.dv(t,[null]),s),!1,W.nG)
C.p.E(s,"")
return t},
eP:function eP(a,b){this.a=a
this.b=b}},A={
iI:function(a){var t,s
t=C.f.el(a,0,new A.iJ())
s=536870911&t+(C.b.cr(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
iJ:function iJ(){}},T={
mD:function(a,b,c){var t=new Float32Array(3)
t[0]=a
t[1]=b
t[2]=c
return new T.B(t)},
aq:function aq(a){this.a=a},
av:function av(a){this.a=a},
B:function B(a){this.a=a},
aE:function aE(a){this.a=a},
nm:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
t={}
s=document
r=new R.fL(0,0,null,null,null,null)
r.d9(C.j.cv(s,"stats"),"blue","gray")
q=C.j.eF(s,"#webgl-canvas")
p=q.clientWidth
o=q.clientHeight
q.width=p
q.height=o
n=new G.dS(null,q)
s=(q&&C.z).cu(q,"webgl2",P.aT(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
n.a=s
if(s==null)H.C(P.cg('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
m="ChronosGL Config: "+J.aJ(J.lA(s))
if($.l_>0)P.ak("I: "+m)
J.li(s,0,0,0,1)
J.dH(s,2929)
l=B.mn(25,0,0,q)
s=new T.aq(new Float32Array(H.P(16)))
s.an()
m=new T.aq(new Float32Array(H.P(16)))
m.an()
k=new G.fj(l,50,1,0.1,1000,s,m,new T.aq(new Float32Array(H.P(16))),P.Q(),"perspective",!1,!0)
k.bk()
k.cZ(p,o)
j=G.mx("demo",n,$.$get$kY(),$.$get$kX())
t.a=null
i=new G.eV(P.Q(),"mat",!1,!0)
i.Z("cDepthTest",!0)
i.Z("cDepthWrite",!0)
i.Z("cBlendEquation",$.$get$jV())
i.Z("cStencilFunc",$.$get$ks())
i.Z("uColor",$.$get$k1())
m=new Float32Array(H.P(16))
s=new T.aq(m)
s.an()
h=Math.cos(1.5707963267948966)
g=Math.sin(1.5707963267948966)
f=m[4]
e=m[8]
d=m[5]
c=m[9]
b=m[6]
a=m[10]
a0=m[7]
a1=m[11]
a2=-g
m[4]=f*h+e*g
m[5]=d*h+c*g
m[6]=b*h+a*g
m[7]=a0*h+a1*g
m[8]=f*a2+e*h
m[9]=d*a2+c*h
m[10]=b*a2+a*h
m[11]=a0*a2+a1*h
i.Z("uModelMatrix",s)
t.b=0
P.m8([D.ml($.l4)],null,!1).b0(new T.iV(t,j,new T.iU(t,r,l,k,j,i)))},
iU:function iU(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iV:function iV(a,b,c){this.a=a
this.b=b
this.c=c}},Y={
m9:function(a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
t=new G.ex(!1,[],[],[],P.Q())
t.bg("aTexUV")
t.bg("aNormal")
s=P.Q()
r=a6.split("\n")
q=[]
p=[]
o=[]
n=Date.now()
m=P.kr("\\s+",!0,!1)
l=P.kr("\\s\\s*\\$",!0,!1)
for(k=r.length,j=0;j<r.length;r.length===k||(0,H.J)(r),++j){i=r[j]
i.toString
h=H.nv(i,m," ")
g=H.nx(h,l,"",0)
if(g.length===0||g[0]==="#")continue
f=g.split(" ")
if(J.x(f[0],"g"))s.i(0,f[1],q.length)
else if(J.x(f[0],"v")){h=H.aW(f[1],null)
e=H.aW(f[2],null)
d=H.aW(f[3],null)
c=new Float32Array(3)
c[0]=h
c[1]=e
c[2]=d
C.a.l(q,new T.B(c))}else if(J.x(f[0],"vt")){h=H.aW(f[1],null)
e=H.aW(f[2],null)
d=new Float32Array(2)
d[0]=h
d[1]=e
C.a.l(o,new T.av(d))}else if(J.x(f[0],"vn")){h=H.aW(f[1],null)
e=H.aW(f[2],null)
d=H.aW(f[3],null)
c=new Float32Array(3)
c[0]=h
c[1]=e
c[2]=d
C.a.l(p,new T.B(c))}else if(J.x(f[0],"f")){h=f.length
if(h!==4&&h!==5){H.bq("*** Error: face '"+g+"' not handled")
continue}b=[]
a=[]
a0=[]
for(a1=1;h=f.length,a1<h;++a1){a2=J.lI(f[a1],"/")
H.d(a2.length>0)
for(;a2.length<3;)C.a.l(a2,"")
a3=H.jq(a2[0],null,null)-1
a4=J.x(a2[1],"")?-1:H.jq(a2[1],null,null)-1
a5=J.x(a2[2],"")?-1:H.jq(a2[2],null,null)-1
if(a3<q.length)C.a.l(b,q[a3])
else C.a.l(b,new T.B(new Float32Array(3)))
if(a4!==-1&&a4<o.length)C.a.l(a0,o[a4])
else{H.bq("problem uv "+a1+" "+a4)
C.a.l(a0,new T.av(new Float32Array(2)))}if(a5!==-1&&a5<p.length)C.a.l(a,p[a5])
else{H.bq("problem normals "+a1+" "+a5)
C.a.l(a,new T.B(new Float32Array(3)))}}if(h===4)t.cX(b)
else t.cY(b)
t.cV("aNormal",a)
t.cU("aTexUV",a0)}}P.ak("loaded ("+P.m0(0,0,0,Date.now()-new P.aN(n,!1).a,0,0).k(0)+") "+t.k(0))
return t}}
var v=[C,H,J,P,W,B,G,R,D,A,T,Y]
setFunctionNamesIfNecessary(v)
var $={}
H.jj.prototype={}
J.a.prototype={
w:function(a,b){return a===b},
gu:function(a){return H.aV(a)},
k:function(a){return H.fr(a)},
gA:function(a){return new H.aC(H.iH(a),null)}}
J.eG.prototype={
k:function(a){return String(a)},
gu:function(a){return a?519018:218159},
gA:function(a){return C.a0},
$isaw:1}
J.d3.prototype={
w:function(a,b){return null==b},
k:function(a){return"null"},
gu:function(a){return 0},
gA:function(a){return C.V}}
J.bE.prototype={
gu:function(a){return 0},
gA:function(a){return C.U},
k:function(a){return String(a)},
$iskg:1}
J.fl.prototype={}
J.aZ.prototype={}
J.aR.prototype={
k:function(a){var t=a[$.$get$k3()]
return t==null?this.cQ(a):J.aJ(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isjh:1}
J.aP.prototype={
aT:function(a,b){if(!!a.immutable$list)throw H.e(new P.u(b))},
aS:function(a,b){if(!!a.fixed$length)throw H.e(new P.u(b))},
l:function(a,b){this.aS(a,"add")
a.push(b)},
J:function(a,b){var t,s,r,q,p
t=a.length
this.aS(a,"addAll")
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.J)(b),++r,t=p){q=b[r]
p=t+1
H.d(t===a.length||H.C(new P.a1(a)))
a.push(q)}},
c9:function(a,b){return new H.bF(a,b,[H.aG(a,0),null])},
ah:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.f(a[s])
return t.join(b)},
t:function(a,b){return a[b]},
gek:function(a){if(a.length>0)return a[0]
throw H.e(H.eF())},
gaV:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.e(H.eF())},
ba:function(a,b,c,d,e){var t,s
this.aT(a,"setRange")
P.kq(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.C(P.aX(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.e(H.mh())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=d[e+s]
else for(s=0;s<t;++s)a[b+s]=d[e+s]},
bM:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.e(new P.a1(a))}return!1},
cK:function(a,b){this.aT(a,"sort")
H.dl(a,0,a.length-1,P.n7())},
aB:function(a){return this.cK(a,null)},
B:function(a,b){var t
for(t=0;t<a.length;++t)if(J.x(a[t],b))return!0
return!1},
k:function(a){return P.eE(a,"[","]")},
gv:function(a){return new J.dM(a,a.length,0,null,[H.aG(a,0)])},
gu:function(a){return H.aV(a)},
gj:function(a){return a.length},
sj:function(a,b){this.aS(a,"set length")
if(b<0)throw H.e(P.aX(b,0,null,"newLength",null))
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
J.ji.prototype={}
J.dM.prototype={
gq:function(){return this.d},
p:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.e(H.J(t))
r=this.c
if(r>=s){this.sbl(null)
return!1}this.sbl(t[r]);++this.c
return!0},
sbl:function(a){this.d=a}}
J.bd.prototype={
O:function(a,b){var t
if(typeof b!=="number")throw H.e(H.N(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gau(b)
if(this.gau(a)===t)return 0
if(this.gau(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gau:function(a){return a===0?1/a<0:a<0},
e1:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.e(new P.u(""+a+".ceil()"))},
a1:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(new P.u(""+a+".round()"))},
e2:function(a,b,c){if(this.O(b,c)>0)throw H.e(H.N(b))
if(this.O(a,b)<0)return b
if(this.O(a,c)>0)return c
return a},
eQ:function(a,b){var t
if(b>20)throw H.e(P.aX(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gau(a))return"-"+t
return t},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu:function(a){return a&0x1FFFFFFF},
a2:function(a,b){if(typeof b!=="number")throw H.e(H.N(b))
return a+b},
a5:function(a,b){if(typeof b!=="number")throw H.e(H.N(b))
return a-b},
cs:function(a,b){if(typeof b!=="number")throw H.e(H.N(b))
return a/b},
F:function(a,b){if(typeof b!=="number")throw H.e(H.N(b))
return a*b},
aE:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bI(a,b)},
H:function(a,b){return(a|0)===a?a/b|0:this.bI(a,b)},
bI:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.e(new P.u("Result of truncating division is "+H.f(t)+": "+H.f(a)+" ~/ "+b))},
aO:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
cr:function(a,b){if(typeof b!=="number")throw H.e(H.N(b))
return(a&b)>>>0},
cS:function(a,b){if(typeof b!=="number")throw H.e(H.N(b))
return(a^b)>>>0},
am:function(a,b){if(typeof b!=="number")throw H.e(H.N(b))
return a<b},
az:function(a,b){if(typeof b!=="number")throw H.e(H.N(b))
return a>b},
ct:function(a,b){if(typeof b!=="number")throw H.e(H.N(b))
return a>=b},
gA:function(a){return C.a3},
$isU:1}
J.d2.prototype={
gA:function(a){return C.a2},
$isK:1,
$isn:1,
$isU:1}
J.d1.prototype={
gA:function(a){return C.a1},
$isK:1,
$isU:1}
J.aQ.prototype={
bU:function(a,b){if(b<0)throw H.e(H.I(a,b))
if(b>=a.length)H.C(H.I(a,b))
return a.charCodeAt(b)},
a7:function(a,b){if(b>=a.length)throw H.e(H.I(a,b))
return a.charCodeAt(b)},
a2:function(a,b){if(typeof b!=="string")throw H.e(P.jU(b,null,null))
return a+b},
cL:function(a,b){var t=a.split(b)
return t},
cM:function(a,b,c){var t
if(c>a.length)throw H.e(P.aX(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bc:function(a,b){return this.cM(a,b,0)},
aC:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.fs(b,null,null))
if(b>c)throw H.e(P.fs(b,null,null))
if(c>a.length)throw H.e(P.fs(c,null,null))
return a.substring(b,c)},
cN:function(a,b){return this.aC(a,b,null)},
eP:function(a){return a.toLowerCase()},
eS:function(a){var t,s,r,q,p
t=a.trim()
s=t.length
if(s===0)return t
if(this.a7(t,0)===133){r=J.mj(t,1)
if(r===s)return""}else r=0
q=s-1
p=this.bU(t,q)===133?J.mk(t,q):s
if(r===0&&p===s)return t
return t.substring(r,p)},
e5:function(a,b,c){if(c>a.length)throw H.e(P.aX(c,0,a.length,null,null))
return H.nu(a,b,c)},
O:function(a,b){var t
if(typeof b!=="string")throw H.e(H.N(b))
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
gA:function(a){return C.W},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.e(H.I(a,b))
return a[b]},
$ism:1,
$asm:function(){},
$isr:1}
H.c.prototype={$asc:null}
H.be.prototype={
gv:function(a){return new H.d5(this,this.gj(this),0,null,[H.aj(this,"be",0)])},
ax:function(a,b){return this.cP(0,b)},
eO:function(a,b){var t,s
t=H.D([],[H.aj(this,"be",0)])
C.a.sj(t,this.gj(this))
for(s=0;s<this.gj(this);++s)t[s]=this.t(0,s)
return t},
eN:function(a){return this.eO(a,!0)}}
H.d5.prototype={
gq:function(){return this.d},
p:function(){var t,s,r,q
t=this.a
s=J.Z(t)
r=s.gj(t)
if(this.b!==r)throw H.e(new P.a1(t))
q=this.c
if(q>=r){this.sa9(null)
return!1}this.sa9(s.t(t,q));++this.c
return!0},
sa9:function(a){this.d=a}}
H.d6.prototype={
gv:function(a){return new H.eR(null,J.bs(this.a),this.b,this.$ti)},
gj:function(a){return J.dI(this.a)},
$asV:function(a,b){return[b]}}
H.e3.prototype={$isc:1,
$asc:function(a,b){return[b]}}
H.eR.prototype={
p:function(){var t=this.b
if(t.p()){this.sa9(this.c.$1(t.gq()))
return!0}this.sa9(null)
return!1},
gq:function(){return this.a},
sa9:function(a){this.a=a},
$asd0:function(a,b){return[b]}}
H.bF.prototype={
gj:function(a){return J.dI(this.a)},
t:function(a,b){return this.b.$1(J.lr(this.a,b))},
$asc:function(a,b){return[b]},
$asbe:function(a,b){return[b]},
$asV:function(a,b){return[b]}}
H.dt.prototype={
gv:function(a){return new H.hj(J.bs(this.a),this.b,this.$ti)}}
H.hj.prototype={
p:function(){var t,s
for(t=this.a,s=this.b;t.p();)if(s.$1(t.gq()))return!0
return!1},
gq:function(){return this.a.gq()}}
H.ch.prototype={}
H.j2.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.j3.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.i2.prototype={
sew:function(a){this.z=a},
sez:function(a){this.ch=a}}
H.b2.prototype={
bL:function(a,b){if(!this.f.w(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.aQ()},
eI:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.ai(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.bB();++r.d}this.y=!1}this.aQ()},
dT:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.t(a),s=0;r=this.ch,s<r.length;s+=2)if(t.w(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
eH:function(a){var t,s,r
if(this.ch==null)return
for(t=J.t(a),s=0;r=this.ch,s<r.length;s+=2)if(t.w(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.C(new P.u("removeRange"))
P.kq(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
cH:function(a,b){if(!this.r.w(0,a))return
this.db=b},
ep:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.E(0,c)
return}H.d(b===1)
t=this.cx
if(t==null){t=P.jn(null,null)
this.cx=t}t.P(0,new H.hY(a,c))},
eo:function(a,b){var t
if(!this.r.w(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.av()
return}H.d(b===1)
t=this.cx
if(t==null){t=P.jn(null,null)
this.cx=t}t.P(0,this.gex())},
eq:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.ak(a)
if(b!=null)P.ak(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.aJ(a)
s[1]=b==null?null:b.k(0)
for(r=new P.bX(t,t.r,null,null,[null]),r.c=t.e;r.p();)r.d.E(0,s)},
ad:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.O(o)
p=H.ax(o)
this.eq(q,p)
if(this.db){this.av()
if(this===u.globalState.e)throw o}}finally{this.cy=H.n2(r)
u.globalState.d=H.jC(t,"$isb2")
if(t!=null)$=t.gev()
if(this.cx!=null)for(;n=this.cx,!n.gag(n);)this.cx.ca().$0()}return s},
c8:function(a){return this.b.h(0,a)},
bp:function(a,b){var t=this.b
if(t.C(0,a))throw H.e(P.cg("Registry: ports must be registered only once."))
t.i(0,a,b)},
aQ:function(){var t=this.b
if(t.gj(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.av()},
av:function(){var t,s,r
t=this.cx
if(t!=null)t.S(0)
for(t=this.b,s=t.gcp(t),s=s.gv(s);s.p();)s.gq().ds()
t.S(0)
this.c.S(0)
u.globalState.z.ai(0,this.a)
this.dx.S(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].E(0,t[r+1])
this.ch=null}},
gev:function(){return this.d},
ge6:function(){return this.e}}
H.hY.prototype={
$0:function(){this.a.E(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.hC.prototype={
ec:function(){var t=this.a
if(t.b===t.c)return
return t.ca()},
cc:function(){var t,s,r
t=this.ec()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.C(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gag(s)}else s=!1
else s=!1
else s=!1
if(s)H.C(P.cg("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gag(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aT(["command","close"])
r=new H.ai(!0,new P.dy(0,null,null,null,null,null,0,[null,P.n])).I(r)
s.toString
self.postMessage(r)}return!1}t.eE()
return!0},
bG:function(){if(self.window!=null)new H.hD(this).$0()
else for(;this.cc(););},
aj:function(){var t,s,r,q,p
if(!u.globalState.x)this.bG()
else try{this.bG()}catch(r){t=H.O(r)
s=H.ax(r)
q=u.globalState.Q
p=P.aT(["command","error","msg",H.f(t)+"\n"+H.f(s)])
p=new H.ai(!0,P.bY(null,P.n)).I(p)
q.toString
self.postMessage(p)}}}
H.hD.prototype={
$0:function(){if(!this.a.cc())return
P.mC(C.o,this)},
$S:function(){return{func:1,v:true}}}
H.b3.prototype={
eE:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.ad(this.b)}}
H.i1.prototype={}
H.eC.prototype={
$0:function(){H.md(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.eD.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(!this.d)this.a.$1(this.c)
else{s=this.a
if(H.bo(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.bo(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.aQ()},
$S:function(){return{func:1,v:true}}}
H.hv.prototype={}
H.bk.prototype={
E:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.mQ(b)
if(t.ge6()===s){s=J.Z(r)
switch(s.h(r,0)){case"pause":t.bL(s.h(r,1),s.h(r,2))
break
case"resume":t.eI(s.h(r,1))
break
case"add-ondone":t.dT(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.eH(s.h(r,1))
break
case"set-errors-fatal":t.cH(s.h(r,1),s.h(r,2))
break
case"ping":t.ep(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.eo(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.ai(0,s)
break}return}u.globalState.f.a.P(0,new H.b3(t,new H.i4(this,r),"receive"))},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bk){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gu:function(a){return this.b.a}}
H.i4.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dm(0,this.b)},
$S:function(){return{func:1}}}
H.c_.prototype={
E:function(a,b){var t,s,r
t=P.aT(["command","message","port",this,"msg",b])
s=new H.ai(!0,P.bY(null,P.n)).I(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.c_){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gu:function(a){return C.b.cS((this.b<<16^this.a<<8)>>>0,this.c)}}
H.bh.prototype={
ds:function(){this.c=!0
this.b=null},
dm:function(a,b){if(this.c)return
this.b.$1(b)},
$ismv:1}
H.h0.prototype={
da:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.P(0,new H.b3(s,new H.h1(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.b6(new H.h2(this,b),0),a)}else{H.d(a>0)
throw H.e(new P.u("Timer greater than 0."))}}}
H.h1.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.h2.prototype={
$0:function(){this.a.c=null
H.iT()
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.ao.prototype={
gu:function(a){var t=this.a
t=C.b.aO(t,0)^C.b.H(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
w:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.ao){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.ai.prototype={
I:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gj(t))
t=J.t(a)
if(!!t.$isbH)return["buffer",a]
if(!!t.$isbf)return["typed",a]
if(!!t.$ism)return this.cC(a)
if(!!t.$isma){r=this.gcz()
q=t.gD(a)
q=H.jo(q,r,H.aj(q,"V",0),null)
q=P.kk(q,!0,H.aj(q,"V",0))
t=t.gcp(a)
t=H.jo(t,r,H.aj(t,"V",0),null)
return["map",q,P.kk(t,!0,H.aj(t,"V",0))]}if(!!t.$iskg)return this.cD(a)
if(!!t.$isa)this.cn(a)
if(!!t.$ismv)this.ak(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isbk)return this.cE(a)
if(!!t.$isc_)return this.cF(a)
if(!!t.$isb9){p=a.$static_name
if(p==null)this.ak(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isao)return["capability",a.a]
if(!(a instanceof P.o))this.cn(a)
return["dart",u.classIdExtractor(a),this.cB(u.classFieldsExtractor(a))]},
ak:function(a,b){throw H.e(new P.u((b==null?"Can't transmit:":b)+" "+H.f(a)))},
cn:function(a){return this.ak(a,null)},
cC:function(a){var t
H.d(typeof a!=="string")
t=this.cA(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.ak(a,"Can't serialize indexable: ")},
cA:function(a){var t,s
t=[]
C.a.sj(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.I(a[s])
return t},
cB:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.I(a[t]))
return a},
cD:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.ak(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sj(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.I(a[t[r]])
return["js-object",t,s]},
cF:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cE:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.b1.prototype={
T:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.e(P.jd("Bad serialized message: "+H.f(a)))
switch(C.a.gek(a)){case"ref":H.d(J.x(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.d(J.x(a[0],"buffer"))
t=a[1]
C.a.l(this.b,t)
return t
case"typed":H.d(J.x(a[0],"typed"))
t=a[1]
C.a.l(this.b,t)
return t
case"fixed":H.d(J.x(a[0],"fixed"))
t=a[1]
C.a.l(this.b,t)
s=H.D(this.ac(t),[null])
s.fixed$length=Array
return s
case"extendable":H.d(J.x(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.D(this.ac(t),[null])
case"mutable":H.d(J.x(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.ac(t)
case"const":H.d(J.x(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
s=H.D(this.ac(t),[null])
s.fixed$length=Array
return s
case"map":return this.ef(a)
case"sendport":return this.eg(a)
case"raw sendport":H.d(J.x(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.ee(a)
case"function":H.d(J.x(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.d(J.x(a[0],"capability"))
return new H.ao(a[1])
case"dart":H.d(J.x(a[0],"dart"))
r=a[1]
q=a[2]
p=u.instanceFromClassId(r)
C.a.l(this.b,p)
this.ac(q)
return u.initializeEmptyInstance(r,p,q)
default:throw H.e("couldn't deserialize: "+H.f(a))}},
ac:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.T(a[t]))
return a},
ef:function(a){var t,s,r,q,p
H.d(J.x(a[0],"map"))
t=a[1]
s=a[2]
r=P.Q()
C.a.l(this.b,r)
t=J.lE(t,this.ged()).eN(0)
for(q=J.Z(s),p=0;p<t.length;++p)r.i(0,t[p],this.T(q.h(s,p)))
return r},
eg:function(a){var t,s,r,q,p,o,n
H.d(J.x(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.c8(r)
if(o==null)return
n=new H.bk(o,s)}else n=new H.c_(t,r,s)
C.a.l(this.b,n)
return n},
ee:function(a){var t,s,r,q,p,o
H.d(J.x(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.Z(t),p=J.Z(s),o=0;o<q.gj(t);++o)r[q.h(t,o)]=this.T(p.h(s,o))
return r}}
H.fv.prototype={}
H.h7.prototype={
M:function(a){var t,s,r
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
H.df.prototype={
k:function(a){var t=this.b
if(t==null)return"NullError: "+H.f(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.eJ.prototype={
k:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.f(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.f(this.a)+")"}}
H.hb.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.j4.prototype={
$1:function(a){if(!!J.t(a).$isbb)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.dA.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.iO.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.iP.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.iQ.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.iR.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.iS.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.b9.prototype={
k:function(a){return"Closure '"+H.dg(this).trim()+"'"},
$isjh:1,
geU:function(){return this},
$D:null}
H.fW.prototype={}
H.fJ.prototype={
k:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bt.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bt))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gu:function(a){var t,s
t=this.c
if(t==null)s=H.aV(this.a)
else s=typeof t!=="object"?J.am(t):H.aV(t)
return(s^H.aV(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.f(this.d)+"' of "+H.fr(t)}}
H.h9.prototype={
k:function(a){return this.a}}
H.dR.prototype={
k:function(a){return this.a}}
H.fA.prototype={
k:function(a){return"RuntimeError: "+H.f(this.a)}}
H.hp.prototype={
k:function(a){return C.e.a2("Assertion failed: ",P.jg(this.a))}}
H.aC.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gu:function(a){return J.am(this.a)},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.aC){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.ad.prototype={
gj:function(a){return this.a},
gag:function(a){return this.a===0},
gD:function(a){return new H.eM(this,[H.aG(this,0)])},
gcp:function(a){return H.jo(this.gD(this),new H.eI(this),H.aG(this,0),H.aG(this,1))},
C:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.by(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.by(s,b)}else return this.er(b)},
er:function(a){var t=this.d
if(t==null)return!1
return this.af(this.aq(t,this.ae(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.aa(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.aa(r,b)
return s==null?null:s.b}else return this.es(b)},
es:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.aq(t,this.ae(a))
r=this.af(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aK()
this.b=t}this.bn(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aK()
this.c=s}this.bn(s,b,c)}else{r=this.d
if(r==null){r=this.aK()
this.d=r}q=this.ae(b)
p=this.aq(r,q)
if(p==null)this.aN(r,q,[this.aL(b,c)])
else{o=this.af(p,b)
if(o>=0)p[o].b=c
else p.push(this.aL(b,c))}}},
ai:function(a,b){if(typeof b==="string")return this.bF(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bF(this.c,b)
else return this.eu(b)},
eu:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.aq(t,this.ae(a))
r=this.af(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bJ(q)
return q.b},
S:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
at:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.e(new P.a1(this))
t=t.c}},
bn:function(a,b,c){var t=this.aa(a,b)
if(t==null)this.aN(a,b,this.aL(b,c))
else t.b=c},
bF:function(a,b){var t
if(a==null)return
t=this.aa(a,b)
if(t==null)return
this.bJ(t)
this.bz(a,b)
return t.b},
aL:function(a,b){var t,s
t=new H.eL(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bJ:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.r=this.r+1&67108863},
ae:function(a){return J.am(a)&0x3ffffff},
af:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.x(a[s].a,b))return s
return-1},
k:function(a){return P.mm(this)},
aa:function(a,b){return a[b]},
aq:function(a,b){return a[b]},
aN:function(a,b,c){H.d(c!=null)
a[b]=c},
bz:function(a,b){delete a[b]},
by:function(a,b){return this.aa(a,b)!=null},
aK:function(){var t=Object.create(null)
this.aN(t,"<non-identifier-key>",t)
this.bz(t,"<non-identifier-key>")
return t},
$isma:1}
H.eI.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.eL.prototype={}
H.eM.prototype={
gj:function(a){return this.a.a},
gv:function(a){var t,s
t=this.a
s=new H.eN(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.eN.prototype={
gq:function(){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a1(t))
else{t=this.c
if(t==null){this.sbm(null)
return!1}else{this.sbm(t.a)
this.c=this.c.c
return!0}}},
sbm:function(a){this.d=a}}
H.iK.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.iL.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.r]}}}
H.iM.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.r]}}}
H.eH.prototype={
k:function(a){return"RegExp/"+this.a+"/"},
gbD:function(){var t=this.c
if(t!=null)return t
t=this.b
t=H.ki(this.a,t.multiline,!t.ignoreCase,!0)
this.c=t
return t},
dB:function(a,b){var t,s
t=this.gbD()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
return H.mP(this,s)}}
H.i3.prototype={
h:function(a,b){return this.b[b]},
dk:function(a,b){var t,s
t=this.b
s=t.input
H.d(typeof s==="string")
t=t.index
H.d(typeof t==="number"&&Math.floor(t)===t)}}
H.bH.prototype={
gA:function(a){return C.N},
$isbH:1}
H.bf.prototype={$isbf:1}
H.f0.prototype={
gA:function(a){return C.O}}
H.d8.prototype={
gj:function(a){return a.length},
$ism:1,
$asm:function(){},
$isp:1,
$asp:function(){}}
H.d9.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.C(H.I(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.C(H.I(a,b))
a[b]=c}}
H.da.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.C(H.I(a,b))
a[b]=c},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]}}
H.d7.prototype={
gA:function(a){return C.P},
$isc:1,
$asc:function(){return[P.K]},
$isb:1,
$asb:function(){return[P.K]},
$ises:1}
H.f1.prototype={
gA:function(a){return C.Q},
$isc:1,
$asc:function(){return[P.K]},
$isb:1,
$asb:function(){return[P.K]}}
H.f2.prototype={
gA:function(a){return C.R},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.C(H.I(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]}}
H.f3.prototype={
gA:function(a){return C.S},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.C(H.I(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]},
$iskd:1}
H.f4.prototype={
gA:function(a){return C.T},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.C(H.I(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]}}
H.f5.prototype={
gA:function(a){return C.X},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.C(H.I(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]},
$iskF:1}
H.f6.prototype={
gA:function(a){return C.Y},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.C(H.I(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]},
$iskG:1}
H.db.prototype={
gA:function(a){return C.Z},
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.C(H.I(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]}}
H.f7.prototype={
gA:function(a){return C.a_},
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.C(H.I(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]},
$iskH:1}
H.bI.prototype={
$asm:function(){},
$isc:1,
$asc:function(){return[P.n]},
$asp:function(){},
$isb:1,
$asb:function(){return[P.n]}}
H.bJ.prototype={
$asm:function(){},
$isc:1,
$asc:function(){return[P.K]},
$asp:function(){},
$isb:1,
$asb:function(){return[P.K]}}
H.bK.prototype={
$asm:function(){},
$asc:function(){return[P.K]},
$asp:function(){},
$asb:function(){return[P.K]}}
H.bL.prototype={
$asm:function(){},
$asc:function(){return[P.n]},
$asp:function(){},
$asb:function(){return[P.n]}}
P.hr.prototype={
$1:function(a){var t,s
H.iT()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.hq.prototype={
$1:function(a){var t,s
t=this.a
H.d(t.a==null);++u.globalState.f.b
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.hs.prototype={
$0:function(){H.iT()
this.a.$0()},
$S:function(){return{func:1}}}
P.ht.prototype={
$0:function(){H.iT()
this.a.$0()},
$S:function(){return{func:1}}}
P.ew.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.b)this.d.G(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.b)this.d.G(t.c,t.d)},
$S:function(){return{func:1,args:[,,]}}}
P.ev.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){r[this.e]=a
if(s===0)this.d.bx(r)}else if(t.b===0&&!this.b)this.d.G(t.c,t.d)},
$S:function(){return{func:1,args:[,]}}}
P.hx.prototype={
e4:function(a,b){if(a==null)a=new P.bg()
if(this.a.a!==0)throw H.e(new P.af("Future already completed"))
$.w.toString
this.G(a,b)},
e3:function(a){return this.e4(a,null)}}
P.dv.prototype={
as:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.af("Future already completed"))
t.bq(b)},
G:function(a,b){this.a.br(a,b)}}
P.il.prototype={
as:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.af("Future already completed"))
t.aG(b)},
G:function(a,b){this.a.G(a,b)}}
P.dx.prototype={
eA:function(a){if(this.c!==6)return!0
H.d(!0)
return this.b.b.b_(this.d,a.a)},
en:function(a){var t,s
t=(this.c&2)!==0
if(t){H.d(t)
t=this.e!=null}else t=!1
H.d(t)
s=this.e
t=this.b.b
if(H.bo(s,{func:1,args:[P.o,P.bP]}))return t.eJ(s,a.a,a.b)
else return t.b_(s,a.a)}}
P.M.prototype={
b1:function(a,b){var t,s,r
t=$.w
if(t!==C.d){t.toString
if(b!=null)b=P.mV(b,t)}s=new P.M(0,t,null,[null])
r=b==null?1:3
this.bo(new P.dx(null,s,r,a,b,[H.aG(this,0),null]))
return s},
b0:function(a){return this.b1(a,null)},
bt:function(a){H.d(this.a<4)
H.d(a.a>=4)
this.a=a.a
this.c=a.c},
bo:function(a){var t
H.d(a.a==null)
t=this.a
if(t<=1){a.a=H.jC(this.c,"$isdx")
this.c=a}else{if(t===2){H.d(!0)
t=this.c
if(t.a<4){t.bo(a)
return}this.bt(t)}H.d(this.a>=4)
t=this.b
t.toString
P.bm(null,null,t,new P.hI(this,a))}},
bE:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.d(!0)
s=this.c
if(s.a<4){s.bE(a)
return}this.bt(s)}H.d(this.a>=4)
t.a=this.ab(a)
s=this.b
s.toString
P.bm(null,null,s,new P.hQ(t,this))}},
aM:function(){H.d(this.a<4)
var t=this.c
this.c=null
return this.ab(t)},
ab:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aG:function(a){var t,s
H.d(this.a<4)
t=this.$ti
if(H.c3(a,"$isbc",t,"$asbc"))if(H.c3(a,"$isM",t,null))P.hL(a,this)
else P.kJ(a,this)
else{s=this.aM()
H.d(this.a<4)
this.a=4
this.c=a
P.bj(this,s)}},
bx:function(a){var t
H.d(this.a<4)
H.d(!J.t(a).$isbc)
t=this.aM()
H.d(this.a<4)
this.a=4
this.c=a
P.bj(this,t)},
G:function(a,b){var t
H.d(this.a<4)
t=this.aM()
H.d(this.a<4)
this.a=8
this.c=new P.b8(a,b)
P.bj(this,t)},
du:function(a){return this.G(a,null)},
bq:function(a){var t
H.d(this.a<4)
if(H.c3(a,"$isbc",this.$ti,"$asbc")){this.dr(a)
return}H.d(this.a===0)
this.a=1
t=this.b
t.toString
P.bm(null,null,t,new P.hK(this,a))},
dr:function(a){var t
if(H.c3(a,"$isM",this.$ti,null)){if(a.a===8){H.d(this.a===0)
this.a=1
t=this.b
t.toString
P.bm(null,null,t,new P.hP(this,a))}else P.hL(a,this)
return}P.kJ(a,this)},
br:function(a,b){var t
H.d(this.a<4)
H.d(this.a===0)
this.a=1
t=this.b
t.toString
P.bm(null,null,t,new P.hJ(this,a,b))},
$isbc:1,
gaP:function(){return this.a},
gdM:function(){return this.c}}
P.hI.prototype={
$0:function(){P.bj(this.a,this.b)},
$S:function(){return{func:1}}}
P.hQ.prototype={
$0:function(){P.bj(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.hM.prototype={
$1:function(a){var t=this.a
H.d(t.a===1)
H.d(t.a===1)
t.a=0
t.aG(a)},
$S:function(){return{func:1,args:[,]}}}
P.hN.prototype={
$2:function(a,b){var t=this.a
H.d(t.a===1)
t.G(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.hO.prototype={
$0:function(){this.a.G(this.b,this.c)},
$S:function(){return{func:1}}}
P.hK.prototype={
$0:function(){this.a.bx(this.b)},
$S:function(){return{func:1}}}
P.hP.prototype={
$0:function(){P.hL(this.b,this.a)},
$S:function(){return{func:1}}}
P.hJ.prototype={
$0:function(){this.a.G(this.b,this.c)},
$S:function(){return{func:1}}}
P.hT.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.d
p=q.c
H.d((p&1)===0)
o=(p&2)===0
H.d(o)
t=null
try{H.d(o)
H.d(p===8)
t=q.b.b.cb(q.d)}catch(n){s=H.O(n)
r=H.ax(n)
if(this.c){q=this.a.a
H.d(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.d(q.a===8)
p.b=q.c}else p.b=new P.b8(s,r)
p.a=!0
return}if(!!J.t(t).$isbc){if(t instanceof P.M&&t.gaP()>=4){if(t.gaP()===8){q=t
H.d(q.gaP()===8)
p=this.b
p.b=q.gdM()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.b0(new P.hU(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.hU.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.hS.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.d((r.c&1)!==0)
this.a.b=r.b.b.b_(r.d,this.c)}catch(q){t=H.O(q)
s=H.ax(q)
r=this.a
r.b=new P.b8(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.hR.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.d(q.a===8)
t=q.c
q=this.c
if(q.eA(t)){H.d((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.en(t)
p.a=!1}}catch(o){s=H.O(o)
r=H.ax(o)
q=this.a
p=q.a
H.d(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.d(q.a===8)
m.b=q.c}else m.b=new P.b8(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.du.prototype={}
P.fN.prototype={
gj:function(a){var t,s
t={}
s=new P.M(0,$.w,null,[P.n])
t.a=0
this.ey(new P.fP(t),!0,new P.fQ(t,s),s.gdt())
return s}}
P.fP.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.fQ.prototype={
$0:function(){this.b.aG(this.a.a)},
$S:function(){return{func:1}}}
P.fO.prototype={}
P.b8.prototype={
k:function(a){return H.f(this.a)},
$isbb:1}
P.it.prototype={}
P.iw.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.bg()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.e(t)
r=H.e(t)
r.stack=s.k(0)
throw r},
$S:function(){return{func:1}}}
P.i6.prototype={
eK:function(a){var t,s,r
try{if(C.d===$.w){a.$0()
return}P.kO(null,null,this,a)}catch(r){t=H.O(r)
s=H.ax(r)
P.iv(null,null,this,t,s)}},
eL:function(a,b){var t,s,r
try{if(C.d===$.w){a.$1(b)
return}P.kP(null,null,this,a,b)}catch(r){t=H.O(r)
s=H.ax(r)
P.iv(null,null,this,t,s)}},
dZ:function(a){return new P.i8(this,a)},
aR:function(a){return new P.i7(this,a)},
e_:function(a){return new P.i9(this,a)},
h:function(a,b){return},
cb:function(a){if($.w===C.d)return a.$0()
return P.kO(null,null,this,a)},
b_:function(a,b){if($.w===C.d)return a.$1(b)
return P.kP(null,null,this,a,b)},
eJ:function(a,b,c){if($.w===C.d)return a.$2(b,c)
return P.mW(null,null,this,a,b,c)}}
P.i8.prototype={
$0:function(){return this.a.cb(this.b)},
$S:function(){return{func:1}}}
P.i7.prototype={
$0:function(){return this.a.eK(this.b)},
$S:function(){return{func:1}}}
P.i9.prototype={
$1:function(a){return this.a.eL(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.dy.prototype={
ae:function(a){return H.no(a)&0x3ffffff},
af:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.hZ.prototype={
gv:function(a){var t=new P.bX(this,this.r,null,null,[null])
t.c=this.e
return t},
gj:function(a){return this.a},
B:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dv(b)},
dv:function(a){var t=this.d
if(t==null)return!1
return this.ap(t[this.ao(a)],a)>=0},
c8:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.B(0,a)?a:null
else return this.dG(a)},
dG:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.ao(a)]
r=this.ap(s,a)
if(r<0)return
return J.b7(s,r).gdz()},
l:function(a,b){var t,s,r
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
r=s}return this.bu(r,b)}else return this.P(0,b)},
P:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.mN()
this.d=t}s=this.ao(b)
r=t[s]
if(r==null){q=[this.aF(b)]
H.d(q!=null)
t[s]=q}else{if(this.ap(r,b)>=0)return!1
r.push(this.aF(b))}return!0},
ai:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bv(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bv(this.c,b)
else return this.dH(0,b)},
dH:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.ao(b)]
r=this.ap(s,b)
if(r<0)return!1
this.bw(s.splice(r,1)[0])
return!0},
S:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
bu:function(a,b){var t
if(a[b]!=null)return!1
t=this.aF(b)
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
aF:function(a){var t,s
t=new P.i_(a,null,null)
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
ao:function(a){return J.am(a)&0x3ffffff},
ap:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.x(a[s].a,b))return s
return-1},
$isc:1,
$asc:null}
P.i_.prototype={
gdz:function(){return this.a}}
P.bX.prototype={
gq:function(){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a1(t))
else{t=this.c
if(t==null){this.sa8(null)
return!1}else{this.sa8(t.a)
this.c=this.c.b
return!0}}},
sa8:function(a){this.d=a}}
P.hX.prototype={}
P.d4.prototype={}
P.v.prototype={
gv:function(a){return new H.d5(a,this.gj(a),0,null,[H.aj(a,"v",0)])},
t:function(a,b){return this.h(a,b)},
c9:function(a,b){return new H.bF(a,b,[H.aj(a,"v",0),null])},
el:function(a,b,c){var t,s,r
t=this.gj(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gj(a))throw H.e(new P.a1(a))}return s},
k:function(a){return P.eE(a,"[","]")},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
P.eS.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.f(a)
t.a=s+": "
t.a+=H.f(b)},
$S:function(){return{func:1,args:[,,]}}}
P.eO.prototype={
gv:function(a){return new P.i0(this,this.c,this.d,this.b,null,this.$ti)},
gag:function(a){return this.b===this.c},
gj:function(a){return(this.c-this.b&this.a.length-1)>>>0},
t:function(a,b){var t,s
t=(this.c-this.b&this.a.length-1)>>>0
if(0>b||b>=t)H.C(P.A(b,this,"index",null,t))
s=this.a
return s[(this.b+b&s.length-1)>>>0]},
S:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
k:function(a){return P.eE(this,"{","}")},
ca:function(){var t,s,r
t=this.b
if(t===this.c)throw H.e(H.eF());++this.d
s=this.a
r=s[t]
s[t]=null
this.b=(t+1&s.length-1)>>>0
return r},
P:function(a,b){var t,s
t=this.a
s=this.c
t[s]=b
t=(s+1&t.length-1)>>>0
this.c=t
if(this.b===t)this.bB();++this.d},
bB:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.D(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.ba(s,0,q,t,r)
C.a.ba(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbH(s)},
d5:function(a,b){var t
H.d(!0)
t=new Array(8)
t.fixed$length=Array
this.sbH(H.D(t,[b]))},
sbH:function(a){this.a=a},
$asc:null}
P.i0.prototype={
gq:function(){return this.e},
p:function(){var t,s
t=this.a
if(this.c!==t.d)H.C(new P.a1(t))
s=this.d
if(s===this.b){this.sa8(null)
return!1}this.sa8(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sa8:function(a){this.e=a}}
P.fD.prototype={
J:function(a,b){var t
for(t=J.bs(b);t.p();)this.l(0,t.gq())},
k:function(a){return P.eE(this,"{","}")},
$isc:1,
$asc:null}
P.fC.prototype={}
P.bN.prototype={$isc:1,$asc:null,$isb:1,$asb:null}
P.aw.prototype={}
P.F.prototype={}
P.aN.prototype={
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.aN))return!1
return this.a===b.a&&this.b===b.b},
O:function(a,b){return C.b.O(this.a,b.a)},
gu:function(a){var t=this.a
return(t^C.b.aO(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.lY(H.mu(this))
s=P.ca(H.ms(this))
r=P.ca(H.mo(this))
q=P.ca(H.mp(this))
p=P.ca(H.mr(this))
o=P.ca(H.mt(this))
n=P.lZ(H.mq(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
geB:function(){return this.a},
d_:function(a,b){var t
if(!(Math.abs(this.a)>864e13))t=!1
else t=!0
if(t)throw H.e(P.jd("DateTime is outside valid range: "+this.geB()))},
$isF:1,
$asF:function(){return[P.aN]}}
P.K.prototype={$isF:1,
$asF:function(){return[P.U]}}
P.ay.prototype={
am:function(a,b){return C.b.am(this.a,b.gdw())},
az:function(a,b){return C.b.az(this.a,b.gdw())},
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.ay))return!1
return this.a===b.a},
gu:function(a){return this.a&0x1FFFFFFF},
O:function(a,b){return C.b.O(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.e2()
s=this.a
if(s<0)return"-"+new P.ay(0-s).k(0)
r=t.$1(C.b.H(s,6e7)%60)
q=t.$1(C.b.H(s,1e6)%60)
p=new P.e1().$1(s%1e6)
return""+C.b.H(s,36e8)+":"+H.f(r)+":"+H.f(q)+"."+H.f(p)},
$isF:1,
$asF:function(){return[P.ay]}}
P.e1.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.r,args:[P.n]}}}
P.e2.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.r,args:[P.n]}}}
P.bb.prototype={}
P.c7.prototype={
k:function(a){return"Assertion failed"}}
P.bg.prototype={
k:function(a){return"Throw of null."}}
P.an.prototype={
gaI:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaH:function(){return""},
k:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.f(t)
q=this.gaI()+s+r
if(!this.a)return q
p=this.gaH()
o=P.jg(this.b)
return q+p+": "+H.f(o)}}
P.di.prototype={
gaI:function(){return"RangeError"},
gaH:function(){var t,s,r
H.d(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.f(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.f(t)
else if(r>t)s=": Not in range "+H.f(t)+".."+H.f(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.f(t)}return s}}
P.eA.prototype={
gaI:function(){return"RangeError"},
gaH:function(){H.d(this.a)
if(J.lb(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.f(t)},
gj:function(a){return this.f}}
P.u.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.bT.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.af.prototype={
k:function(a){return"Bad state: "+this.a}}
P.a1.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.f(P.jg(t))+"."}}
P.dm.prototype={
k:function(a){return"Stack Overflow"},
$isbb:1}
P.dV.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.hH.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.f(t)}}
P.bB.prototype={
k:function(a){var t,s,r
t=this.a
s=t!=null&&""!==t?"FormatException: "+H.f(t):"FormatException"
r=this.b
if(typeof r!=="string")return s
if(r.length>78)r=C.e.aC(r,0,75)+"..."
return s+"\n"+r}}
P.e4.prototype={
k:function(a){return"Expando:"+H.f(this.a)},
h:function(a,b){var t,s
t=this.b
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.C(P.jU(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.jp(b,"expando$values")
return s==null?null:H.jp(s,t)},
i:function(a,b,c){var t,s
t=this.b
if(typeof t!=="string")t.set(b,c)
else{s=H.jp(b,"expando$values")
if(s==null){s=new P.o()
H.kp(b,"expando$values",s)}H.kp(s,t,c)}}}
P.n.prototype={$isF:1,
$asF:function(){return[P.U]}}
P.V.prototype={
ax:function(a,b){return new H.dt(this,b,[H.aj(this,"V",0)])},
gj:function(a){var t,s
H.d(!this.$isc)
t=this.gv(this)
for(s=0;t.p();)++s
return s},
gY:function(a){var t,s
t=this.gv(this)
if(!t.p())throw H.e(H.eF())
s=t.gq()
if(t.p())throw H.e(H.mi())
return s},
t:function(a,b){var t,s,r
if(b<0)H.C(P.aX(b,0,null,"index",null))
for(t=this.gv(this),s=0;t.p();){r=t.gq()
if(b===s)return r;++s}throw H.e(P.A(b,this,"index",null,s))},
k:function(a){return P.mg(this,"(",")")}}
P.d0.prototype={}
P.b.prototype={$isc:1,$asc:null,$asb:null}
P.aB.prototype={}
P.aU.prototype={
gu:function(a){return P.o.prototype.gu.call(this,this)},
k:function(a){return"null"}}
P.U.prototype={$isF:1,
$asF:function(){return[P.U]}}
P.o.prototype={constructor:P.o,$iso:1,
w:function(a,b){return this===b},
gu:function(a){return H.aV(this)},
k:function(a){return H.fr(this)},
gA:function(a){return new H.aC(H.iH(this),null)},
toString:function(){return this.k(this)}}
P.bP.prototype={}
P.r.prototype={$isF:1,
$asF:function(){return[P.r]}}
P.bQ.prototype={
gj:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga_:function(){return this.a}}
W.k.prototype={}
W.dK.prototype={
k:function(a){return String(a)},
$isa:1}
W.dL.prototype={
k:function(a){return String(a)},
$isa:1}
W.a0.prototype={$iso:1}
W.dO.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.a0]},
$isc:1,
$asc:function(){return[W.a0]},
$isp:1,
$asp:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.c8.prototype={}
W.aL.prototype={$isa:1,$isaL:1}
W.c9.prototype={
cu:function(a,b,c){var t=this.dC(a,b,P.n5(c,null))
return t},
dC:function(a,b,c){return a.getContext(b,c)}}
W.dQ.prototype={
ay:function(a){return P.iB(a.getContextAttributes())}}
W.aM.prototype={$isa:1,
gj:function(a){return a.length}}
W.dT.prototype={$isa:1}
W.y.prototype={$iso:1}
W.ba.prototype={
bs:function(a,b){var t,s
t=$.$get$k2()
s=t[b]
if(typeof s==="string")return s
s=this.dQ(a,b)
t[b]=s
return s},
dQ:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.m_()+b
if(t in a)return t
return b},
gj:function(a){return a.length}}
W.dU.prototype={}
W.dW.prototype={
h:function(a,b){return a[b]},
gj:function(a){return a.length}}
W.dX.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.cb.prototype={}
W.aO.prototype={
dU:function(a,b){return a.adoptNode(b)},
cv:function(a,b){return a.getElementById(b)},
eF:function(a,b){return a.querySelector(b)},
$isaO:1}
W.cc.prototype={$isa:1}
W.dY.prototype={
k:function(a){return String(a)}}
W.cd.prototype={
e9:function(a,b){return a.createHTMLDocument(b)}}
W.dZ.prototype={
gaw:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.ce.prototype={
gaw:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.cf.prototype={
k:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gX(a))+" x "+H.f(this.gW(a))},
w:function(a,b){var t
if(b==null)return!1
t=J.t(b)
if(!t.$isG)return!1
return a.left===t.gaW(b)&&a.top===t.gb2(b)&&this.gX(a)===t.gX(b)&&this.gW(a)===t.gW(b)},
gu:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gX(a)
q=this.gW(a)
return W.kM(W.b4(W.b4(W.b4(W.b4(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gW:function(a){return a.height},
gaW:function(a){return a.left},
gb2:function(a){return a.top},
gX:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isG:1,
$asG:function(){}}
W.e_.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[P.r]},
$isc:1,
$asc:function(){return[P.r]},
$isp:1,
$asp:function(){return[P.r]},
$isb:1,
$asb:function(){return[P.r]}}
W.e0.prototype={
gj:function(a){return a.length}}
W.a2.prototype={
gdX:function(a){return new W.hB(a)},
k:function(a){return a.localName},
L:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.ka
if(t==null){t=H.D([],[W.dd])
s=new W.de(t)
C.a.l(t,W.kK(null))
C.a.l(t,W.kN())
$.ka=s
d=s}else d=t
t=$.k9
if(t==null){t=new W.dB(d)
$.k9=t
c=t}else{t.a=d
c=t}}if($.az==null){t=document
s=t.implementation
s=(s&&C.A).e9(s,"")
$.az=s
$.jf=s.createRange()
s=$.az
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.az.head;(t&&C.B).N(t,r)}t=$.az
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.jC(s,"$isaL")}t=$.az
if(!!this.$isaL)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.az.body;(t&&C.h).N(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.B(C.M,a.tagName)){t=$.jf;(t&&C.x).cw(t,q)
t=$.jf
p=(t&&C.x).e7(t,b)}else{q.innerHTML=b
p=$.az.createDocumentFragment()
for(t=J.l(p);s=q.firstChild,s!=null;)t.N(p,s)}t=$.az.body
if(q==null?t!=null:q!==t)J.lF(q)
c.b9(p)
C.j.dU(document,p)
return p},
e8:function(a,b,c){return this.L(a,b,c,null)},
cJ:function(a,b,c,d){a.textContent=null
this.N(a,this.L(a,b,c,d))},
cI:function(a,b){return this.cJ(a,b,null,null)},
a3:function(a,b){return a.getAttribute(b)},
dI:function(a,b){return a.removeAttribute(b)},
cG:function(a,b,c){return a.setAttribute(b,c)},
$isa:1,
$iso:1,
$isa2:1,
$ish:1,
$isq:1,
geM:function(a){return a.tagName}}
W.ix.prototype={
$1:function(a){return!!J.t(a).$isa2},
$S:function(){return{func:1,args:[,]}}}
W.j.prototype={}
W.h.prototype={
dn:function(a,b,c,d){return a.addEventListener(b,H.b6(c,1),!1)},
$iso:1,
$ish:1}
W.a3.prototype={$iso:1}
W.ep.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.a3]},
$isc:1,
$asc:function(){return[W.a3]},
$isp:1,
$asp:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.eq.prototype={
gj:function(a){return a.length}}
W.eu.prototype={
gj:function(a){return a.length}}
W.a4.prototype={$iso:1}
W.cj.prototype={}
W.ey.prototype={
gj:function(a){return a.length}}
W.bC.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.q]},
$isc:1,
$asc:function(){return[W.q]},
$isp:1,
$asp:function(){return[W.q]},
$isb:1,
$asb:function(){return[W.q]}}
W.ck.prototype={}
W.cl.prototype={
eX:function(a,b,c,d,e,f){return a.open(b,c,d,f,e)},
eD:function(a,b,c){return a.open(b,c)},
E:function(a,b){return a.send(b)}}
W.bD.prototype={}
W.eB.prototype={$isa:1,$isa2:1}
W.aS.prototype={$iso:1,$isaS:1}
W.eQ.prototype={
k:function(a){return String(a)}}
W.eW.prototype={
gj:function(a){return a.length}}
W.eY.prototype={
eV:function(a,b,c){return a.send(b,c)},
E:function(a,b){return a.send(b)}}
W.bG.prototype={}
W.a5.prototype={$iso:1}
W.eZ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.a5]},
$isc:1,
$asc:function(){return[W.a5]},
$isp:1,
$asp:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.L.prototype={$iso:1,$isL:1}
W.f8.prototype={$isa:1}
W.S.prototype={
gY:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.e(new P.af("No elements"))
if(s>1)throw H.e(new P.af("More than one element"))
return t.firstChild},
J:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.l(s),p=0;p<r;++p)q.N(s,t.firstChild)
return},
i:function(a,b,c){var t=this.a
J.le(t,c,C.v.h(t.childNodes,b))},
gv:function(a){var t=this.a.childNodes
return new W.ci(t,t.length,-1,null,[H.aj(t,"z",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){return C.v.h(this.a.childNodes,b)},
$asc:function(){return[W.q]},
$asd4:function(){return[W.q]},
$asb:function(){return[W.q]},
$asbN:function(){return[W.q]}}
W.q.prototype={
eG:function(a){var t=a.parentNode
if(t!=null)J.br(t,a)},
k:function(a){var t=a.nodeValue
return t==null?this.cO(a):t},
N:function(a,b){return a.appendChild(b)},
dJ:function(a,b){return a.removeChild(b)},
dK:function(a,b,c){return a.replaceChild(b,c)},
$iso:1,
$ish:1,
$isq:1,
gaY:function(a){return a.previousSibling}}
W.dc.prototype={
aZ:function(a){return a.previousNode()}}
W.bM.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.q]},
$isc:1,
$asc:function(){return[W.q]},
$isp:1,
$asp:function(){return[W.q]},
$isb:1,
$asb:function(){return[W.q]}}
W.fh.prototype={$isa:1}
W.fk.prototype={
gj:function(a){return a.length}}
W.a6.prototype={$iso:1,
gj:function(a){return a.length}}
W.fm.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.a6]},
$isc:1,
$asc:function(){return[W.a6]},
$isp:1,
$asp:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.fp.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.fq.prototype={
E:function(a,b){return a.send(b)}}
W.dh.prototype={
e7:function(a,b){return a.createContextualFragment(b)},
cw:function(a,b){return a.selectNodeContents(b)}}
W.fz.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.dj.prototype={
E:function(a,b){return a.send(b)}}
W.fB.prototype={
gj:function(a){return a.length}}
W.fE.prototype={$isa:1}
W.a7.prototype={$iso:1,$ish:1}
W.fF.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.a7]},
$isc:1,
$asc:function(){return[W.a7]},
$isp:1,
$asp:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.a8.prototype={$iso:1}
W.fH.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.a8]},
$isc:1,
$asc:function(){return[W.a8]},
$isp:1,
$asp:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.a9.prototype={$iso:1,
gj:function(a){return a.length}}
W.fM.prototype={
h:function(a,b){return this.bA(a,b)},
i:function(a,b,c){this.dP(a,b,c)},
at:function(a,b){var t,s
for(t=0;!0;++t){s=this.dF(a,t)
if(s==null)return
b.$2(s,this.bA(a,s))}},
gj:function(a){return a.length},
bA:function(a,b){return a.getItem(b)},
dF:function(a,b){return a.key(b)},
dP:function(a,b,c){return a.setItem(b,c)}}
W.W.prototype={$iso:1}
W.ag.prototype={}
W.dn.prototype={
L:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aD(a,b,c,d)
t=W.m1("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.S(s).J(0,new W.S(t))
return s}}
W.fU.prototype={
L:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aD(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.y.L(t.createElement("table"),b,c,d)
t.toString
t=new W.S(t)
r=t.gY(t)
r.toString
t=new W.S(r)
q=t.gY(t)
s.toString
q.toString
new W.S(s).J(0,new W.S(q))
return s}}
W.fV.prototype={
L:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aD(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.y.L(t.createElement("table"),b,c,d)
t.toString
t=new W.S(t)
r=t.gY(t)
s.toString
r.toString
new W.S(s).J(0,new W.S(r))
return s}}
W.bR.prototype={$isbR:1}
W.aa.prototype={$iso:1,$ish:1}
W.X.prototype={$iso:1,$ish:1}
W.fY.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.X]},
$isc:1,
$asc:function(){return[W.X]},
$isp:1,
$asp:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.fZ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.aa]},
$isc:1,
$asc:function(){return[W.aa]},
$isp:1,
$asp:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.h_.prototype={
gj:function(a){return a.length}}
W.ab.prototype={$iso:1}
W.aY.prototype={$iso:1,$isaY:1}
W.h3.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.ab]},
$isc:1,
$asc:function(){return[W.ab]},
$isp:1,
$asp:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.h4.prototype={
gj:function(a){return a.length}}
W.bi.prototype={}
W.h6.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.ds.prototype={
aZ:function(a){return a.previousNode()}}
W.aD.prototype={}
W.hc.prototype={
k:function(a){return String(a)},
$isa:1}
W.he.prototype={
gj:function(a){return a.length}}
W.hh.prototype={
gj:function(a){return a.length}}
W.hi.prototype={
E:function(a,b){return a.send(b)}}
W.b_.prototype={
geb:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(new P.u("deltaY is not supported"))},
$iso:1,
$isL:1,
$isb_:1}
W.bU.prototype={
gdW:function(a){var t,s
t=P.U
s=new P.M(0,$.w,null,[t])
this.dA(a)
this.dL(a,W.kR(new W.hk(new P.il(s,[t]))))
return s},
dL:function(a,b){return a.requestAnimationFrame(H.b6(b,1))},
dA:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isa:1}
W.hk.prototype={
$1:function(a){this.a.as(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.hl.prototype={$isa:1}
W.b0.prototype={$isa:1}
W.hw.prototype={
k:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
w:function(a,b){var t,s,r
if(b==null)return!1
t=J.t(b)
if(!t.$isG)return!1
s=a.left
r=t.gaW(b)
if(s==null?r==null:s===r){s=a.top
r=t.gb2(b)
if(s==null?r==null:s===r){s=a.width
r=t.gX(b)
if(s==null?r==null:s===r){s=a.height
t=t.gW(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gu:function(a){var t,s,r,q
t=J.am(a.left)
s=J.am(a.top)
r=J.am(a.width)
q=J.am(a.height)
return W.kM(W.b4(W.b4(W.b4(W.b4(0,t),s),r),q))},
$isG:1,
$asG:function(){},
gW:function(a){return a.height},
gaW:function(a){return a.left},
gb2:function(a){return a.top},
gX:function(a){return a.width}}
W.dw.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[P.G]},
$isc:1,
$asc:function(){return[P.G]},
$isp:1,
$asp:function(){return[P.G]},
$isb:1,
$asb:function(){return[P.G]}}
W.hy.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.y]},
$isc:1,
$asc:function(){return[W.y]},
$isp:1,
$asp:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.hz.prototype={$isa:1}
W.hA.prototype={
gW:function(a){return a.height},
gX:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.hV.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.a4]},
$isc:1,
$asc:function(){return[W.a4]},
$isp:1,
$asp:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.hW.prototype={$isa:1}
W.dz.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.q]},
$isc:1,
$asc:function(){return[W.q]},
$isp:1,
$asp:function(){return[W.q]},
$isb:1,
$asb:function(){return[W.q]}}
W.ie.prototype={$isa:1}
W.ii.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.a9]},
$isc:1,
$asc:function(){return[W.a9]},
$isp:1,
$asp:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.ij.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.W]},
$isc:1,
$asc:function(){return[W.W]},
$isp:1,
$asp:function(){return[W.W]},
$isb:1,
$asb:function(){return[W.W]}}
W.ir.prototype={$isa:1}
W.is.prototype={$isa:1}
W.hu.prototype={
at:function(a,b){var t,s,r,q,p,o
for(t=this.gD(this),s=t.length,r=this.a,q=J.l(r),p=0;p<t.length;t.length===s||(0,H.J)(t),++p){o=t[p]
b.$2(o,q.a3(r,o))}},
gD:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.D([],[P.r])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.l(s,p.name)}return s},
gdD:function(){return this.a}}
W.hB.prototype={
h:function(a,b){return J.jb(this.a,b)},
i:function(a,b,c){J.lH(this.a,b,c)},
gj:function(a){return this.gD(this).length}}
W.hE.prototype={
ey:function(a,b,c,d){return W.ah(this.a,this.b,a,!1,H.aG(this,0))}}
W.ju.prototype={}
W.hF.prototype={
dS:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.ld(r,this.c,t,!1)}},
dh:function(a,b,c,d,e){this.dS()}}
W.hG.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.bW.prototype={
a0:function(a){return $.$get$kL().B(0,W.bu(a))},
R:function(a,b,c){var t,s,r
t=W.bu(a)
s=$.$get$jv()
r=s.h(0,H.f(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
di:function(a){var t,s
t=$.$get$jv()
if(t.gag(t)){for(s=0;s<262;++s)t.i(0,C.L[s],W.nd())
for(s=0;s<12;++s)t.i(0,C.l[s],W.ne())}}}
W.z.prototype={
gv:function(a){return new W.ci(a,this.gj(a),-1,null,[H.aj(a,"z",0)])},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
W.de.prototype={
a0:function(a){return C.a.bM(this.a,new W.fa(a))},
R:function(a,b,c){return C.a.bM(this.a,new W.f9(a,b,c))}}
W.fa.prototype={
$1:function(a){return a.a0(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.f9.prototype={
$1:function(a){return a.R(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.bZ.prototype={
a0:function(a){return this.a.B(0,W.bu(a))},
R:function(a,b,c){var t,s
t=W.bu(a)
s=this.c
if(s.B(0,H.f(t)+"::"+b))return this.d.dV(c)
else if(s.B(0,"*::"+b))return this.d.dV(c)
else{s=this.b
if(s.B(0,H.f(t)+"::"+b))return!0
else if(s.B(0,"*::"+b))return!0
else if(s.B(0,H.f(t)+"::*"))return!0
else if(s.B(0,"*::*"))return!0}return!1},
dl:function(a,b,c,d){var t,s,r
this.a.J(0,c)
t=b.ax(0,new W.ig())
s=b.ax(0,new W.ih())
this.b.J(0,t)
r=this.c
r.J(0,C.u)
r.J(0,s)}}
W.ig.prototype={
$1:function(a){return!C.a.B(C.l,a)},
$S:function(){return{func:1,args:[,]}}}
W.ih.prototype={
$1:function(a){return C.a.B(C.l,a)},
$S:function(){return{func:1,args:[,]}}}
W.im.prototype={
R:function(a,b,c){if(this.cR(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.jb(a,"template")==="")return this.e.B(0,b)
return!1}}
W.io.prototype={
$1:function(a){return"TEMPLATE::"+H.f(a)},
$S:function(){return{func:1,args:[,]}}}
W.ik.prototype={
a0:function(a){var t=J.t(a)
if(!!t.$isbO)return!1
t=!!t.$isE
if(t&&W.bu(a)==="foreignObject")return!1
if(t)return!0
return!1},
R:function(a,b,c){if(b==="is"||C.e.bc(b,"on"))return!1
return this.a0(a)}}
W.ci.prototype={
p:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbC(J.b7(this.a,t))
this.c=t
return!0}this.sbC(null)
this.c=s
return!1},
gq:function(){return this.d},
sbC:function(a){this.d=a}}
W.dd.prototype={}
W.id.prototype={}
W.dB.prototype={
b9:function(a){new W.ip(this).$2(a,null)},
ar:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)J.br(t,a)}else J.br(b,a)},
dO:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.lv(a)
r=J.jb(s.gdD(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.O(n)}p="element unprintable"
try{p=J.aJ(a)}catch(n){H.O(n)}try{o=W.bu(a)
this.dN(a,b,t,p,o,s,r)}catch(n){if(H.O(n) instanceof P.an)throw n
else{this.ar(a,b)
window
m="Removing corrupted element "+H.f(p)
if(typeof console!="undefined")console.warn(m)}}},
dN:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.ar(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.a0(a)){this.ar(a,b)
window
t="Removing disallowed element <"+H.f(e)+"> from "+J.aJ(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.R(a,"is",g)){this.ar(a,b)
window
t="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gD(f)
s=H.D(t.slice(0),[H.aG(t,0)])
for(r=f.gD(f).length-1,t=f.a,q=J.l(t);r>=0;--r){p=s[r]
if(!this.a.R(a,J.lK(p),q.a3(t,p))){window
o="Removing disallowed attribute <"+H.f(e)+" "+p+'="'+H.f(q.a3(t,p))+'">'
if(typeof console!="undefined")console.warn(o)
q.a3(t,p)
q.dI(t,p)}}if(!!J.t(a).$isbR)this.b9(a.content)}}
W.ip.prototype={
$2:function(a,b){var t,s,r,q
switch(a.nodeType){case 1:this.a.dO(a,b)
break
case 8:case 11:case 3:case 4:break
default:if(b==null){r=a.parentNode
if(r!=null)J.br(r,a)}else J.br(b,a)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.lw(t)}catch(q){H.O(q)
r=t
J.br(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.q,W.q]}}}
W.bv.prototype={$isc:1,
$asc:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.bw.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.bx.prototype={$isc:1,
$asc:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.by.prototype={$isc:1,
$asc:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.bz.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.bA.prototype={$isc:1,
$asc:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.cm.prototype={}
W.cG.prototype={$isc:1,
$asc:function(){return[P.G]},
$isb:1,
$asb:function(){return[P.G]}}
W.cs.prototype={$isc:1,
$asc:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.cz.prototype={$isc:1,
$asc:function(){return[W.q]},
$isb:1,
$asb:function(){return[W.q]}}
W.cA.prototype={$isc:1,
$asc:function(){return[W.q]},
$isb:1,
$asb:function(){return[W.q]}}
W.cB.prototype={$isc:1,
$asc:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.cC.prototype={$isc:1,
$asc:function(){return[W.W]},
$isb:1,
$asb:function(){return[W.W]}}
W.cD.prototype={$isc:1,
$asc:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.cE.prototype={$isc:1,
$asc:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.cF.prototype={$isc:1,
$asc:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.cq.prototype={$isc:1,
$asc:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.cr.prototype={$isc:1,
$asc:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.ct.prototype={$isc:1,
$asc:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.cv.prototype={$isc:1,
$asc:function(){return[W.q]},
$isb:1,
$asb:function(){return[W.q]}}
W.cw.prototype={$isc:1,
$asc:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.cx.prototype={$isc:1,
$asc:function(){return[P.r]},
$isb:1,
$asb:function(){return[P.r]}}
W.cH.prototype={$isc:1,
$asc:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.cJ.prototype={$isc:1,
$asc:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.cT.prototype={$isc:1,
$asc:function(){return[W.q]},
$isb:1,
$asb:function(){return[W.q]}}
W.cU.prototype={$isc:1,
$asc:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.cS.prototype={$isc:1,
$asc:function(){return[W.q]},
$isb:1,
$asb:function(){return[W.q]}}
W.cX.prototype={$isc:1,
$asc:function(){return[W.q]},
$isb:1,
$asb:function(){return[W.q]}}
W.cY.prototype={$isc:1,
$asc:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.cZ.prototype={$isc:1,
$asc:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.d_.prototype={$isc:1,
$asc:function(){return[P.r]},
$isb:1,
$asb:function(){return[P.r]}}
W.cK.prototype={$isc:1,
$asc:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.cM.prototype={$isc:1,
$asc:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.cO.prototype={$isc:1,
$asc:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.cQ.prototype={$isc:1,
$asc:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.cV.prototype={$isc:1,
$asc:function(){return[P.G]},
$isb:1,
$asb:function(){return[P.G]}}
W.cW.prototype={$isc:1,
$asc:function(){return[W.W]},
$isb:1,
$asb:function(){return[W.W]}}
P.hm.prototype={
c6:function(a){var t,s,r,q
t=this.a
s=t.length
for(r=0;r<s;++r){q=t[r]
if(q==null?a==null:q===a)return r}C.a.l(t,a)
C.a.l(this.b,null)
return s},
b3:function(a){var t,s,r,q,p,o,n,m,l
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){s=a.getTime()
r=new P.aN(s,!0)
r.d_(s,!0)
return r}if(a instanceof RegExp)throw H.e(new P.bT("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.n6(a)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=this.c6(a)
r=this.b
o=r[p]
t.a=o
if(o!=null)return o
o=P.Q()
t.a=o
r[p]=o
this.em(a,new P.ho(t,this))
return t.a}if(a instanceof Array){p=this.c6(a)
r=this.b
o=r[p]
if(o!=null)return o
n=J.Z(a)
m=n.gj(a)
o=this.c?new Array(m):a
r[p]=o
for(r=J.bp(o),l=0;C.b.am(l,m);++l)r.i(o,l,this.b3(n.h(a,l)))
return o}return a}}
P.ho.prototype={
$2:function(a,b){var t,s
t=this.a.a
s=this.b.b3(b)
J.lc(t,a,s)
return s},
$S:function(){return{func:1,args:[,,]}}}
P.iy.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.r,,]}}}
P.hn.prototype={
em:function(a,b){var t,s,r,q
for(t=Object.keys(a),s=t.length,r=0;r<t.length;t.length===s||(0,H.J)(t),++r){q=t[r]
b.$2(q,a[q])}}}
P.iz.prototype={
$1:function(a){return this.a.as(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.iA.prototype={
$1:function(a){return this.a.e3(a)},
$S:function(){return{func:1,args:[,]}}}
P.i5.prototype={}
P.G.prototype={$asG:null}
P.dJ.prototype={$isa:1}
P.aK.prototype={$isa:1}
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
gK:function(a){return a.z}}
P.ej.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ek.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
P.el.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.em.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.er.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.et.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ac.prototype={}
P.aA.prototype={$isa:1}
P.ez.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ap.prototype={$iso:1}
P.eK.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return this.U(a,b)},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
U:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.ap]},
$isb:1,
$asb:function(){return[P.ap]}}
P.eT.prototype={$isa:1}
P.eU.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ar.prototype={$iso:1}
P.fb.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return this.U(a,b)},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
U:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.ar]},
$isb:1,
$asb:function(){return[P.ar]}}
P.fi.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fn.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fo.prototype={
gj:function(a){return a.length}}
P.ft.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fu.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bO.prototype={$isa:1,$isbO:1}
P.fR.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return this.U(a,b)},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
U:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.r]},
$isb:1,
$asb:function(){return[P.r]}}
P.E.prototype={
L:function(a,b,c,d){var t,s,r,q,p,o
t=H.D([],[W.dd])
C.a.l(t,W.kK(null))
C.a.l(t,W.kN())
C.a.l(t,new W.ik())
c=new W.dB(new W.de(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.h).e8(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.S(q)
o=t.gY(t)
for(t=J.l(p);r=o.firstChild,r!=null;)t.N(p,r)
return p},
$isa:1,
$isE:1}
P.fS.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fT.prototype={$isa:1}
P.dp.prototype={}
P.fX.prototype={$isa:1}
P.bS.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.as.prototype={$iso:1}
P.h5.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return this.U(a,b)},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
U:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.as]},
$isb:1,
$asb:function(){return[P.as]}}
P.hd.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.hf.prototype={$isa:1}
P.hg.prototype={$isa:1}
P.bV.prototype={$isa:1}
P.ia.prototype={$isa:1}
P.ib.prototype={$isa:1}
P.ic.prototype={$isa:1}
P.cp.prototype={$isc:1,
$asc:function(){return[P.ap]},
$isb:1,
$asb:function(){return[P.ap]}}
P.cn.prototype={$isc:1,
$asc:function(){return[P.r]},
$isb:1,
$asb:function(){return[P.r]}}
P.cu.prototype={$isc:1,
$asc:function(){return[P.ar]},
$isb:1,
$asb:function(){return[P.ar]}}
P.cy.prototype={$isc:1,
$asc:function(){return[P.as]},
$isb:1,
$asb:function(){return[P.as]}}
P.cI.prototype={$isc:1,
$asc:function(){return[P.ap]},
$isb:1,
$asb:function(){return[P.ap]}}
P.cR.prototype={$isc:1,
$asc:function(){return[P.ar]},
$isb:1,
$asb:function(){return[P.ar]}}
P.cN.prototype={$isc:1,
$asc:function(){return[P.as]},
$isb:1,
$asb:function(){return[P.as]}}
P.cP.prototype={$isc:1,
$asc:function(){return[P.r]},
$isb:1,
$asb:function(){return[P.r]}}
P.dN.prototype={
gj:function(a){return a.length}}
P.fx.prototype={
bK:function(a,b){return a.activeTexture(b)},
bN:function(a,b,c){return a.attachShader(b,c)},
bO:function(a,b,c){return a.bindBuffer(b,c)},
bP:function(a,b,c){return a.bindTexture(b,c)},
bQ:function(a,b){return a.blendEquation(b)},
bR:function(a,b,c){return a.blendFunc(b,c)},
bS:function(a,b,c,d){return a.bufferData(b,c,d)},
bT:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
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
ay:function(a){return P.iB(a.getContextAttributes())},
b4:function(a,b){return a.getProgramInfoLog(b)},
b5:function(a,b,c){return a.getProgramParameter(b,c)},
b6:function(a,b){return a.getShaderInfoLog(b)},
b7:function(a,b,c){return a.getShaderParameter(b,c)},
b8:function(a,b,c){return a.getUniformLocation(b,c)},
c7:function(a,b){return a.linkProgram(b)},
bb:function(a,b,c){return a.shaderSource(b,c)},
bd:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cd:function(a,b,c){return a.uniform1f(b,c)},
ce:function(a,b,c){return a.uniform1fv(b,c)},
cf:function(a,b,c){return a.uniform1i(b,c)},
cg:function(a,b,c){return a.uniform1iv(b,c)},
ci:function(a,b,c){return a.uniform2fv(b,c)},
cj:function(a,b,c){return a.uniform3fv(b,c)},
ck:function(a,b,c){return a.uniform4fv(b,c)},
cl:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cm:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
co:function(a,b){return a.useProgram(b)},
cq:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)}}
P.fy.prototype={
dY:function(a,b){return a.beginTransformFeedback(b)},
e0:function(a,b){return a.bindVertexArray(b)},
ea:function(a){return a.createVertexArray()},
eh:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
ei:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
ej:function(a){return a.endTransformFeedback()},
eR:function(a,b,c,d){this.dR(a,b,c,d)
return},
dR:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
eT:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bK:function(a,b){return a.activeTexture(b)},
bN:function(a,b,c){return a.attachShader(b,c)},
bO:function(a,b,c){return a.bindBuffer(b,c)},
bP:function(a,b,c){return a.bindTexture(b,c)},
bQ:function(a,b){return a.blendEquation(b)},
bR:function(a,b,c){return a.blendFunc(b,c)},
bS:function(a,b,c,d){return a.bufferData(b,c,d)},
bT:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
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
ay:function(a){return P.iB(a.getContextAttributes())},
b4:function(a,b){return a.getProgramInfoLog(b)},
b5:function(a,b,c){return a.getProgramParameter(b,c)},
b6:function(a,b){return a.getShaderInfoLog(b)},
b7:function(a,b,c){return a.getShaderParameter(b,c)},
b8:function(a,b,c){return a.getUniformLocation(b,c)},
c7:function(a,b){return a.linkProgram(b)},
bb:function(a,b,c){return a.shaderSource(b,c)},
bd:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cd:function(a,b,c){return a.uniform1f(b,c)},
ce:function(a,b,c){return a.uniform1fv(b,c)},
cf:function(a,b,c){return a.uniform1i(b,c)},
cg:function(a,b,c){return a.uniform1iv(b,c)},
ci:function(a,b,c){return a.uniform2fv(b,c)},
cj:function(a,b,c){return a.uniform3fv(b,c)},
ck:function(a,b,c){return a.uniform4fv(b,c)},
cl:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cm:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
co:function(a,b){return a.useProgram(b)},
cq:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
$isa:1}
P.iq.prototype={$isa:1}
P.fI.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return P.iB(this.dE(a,b))},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
dE:function(a,b){return a.item(b)},
$isc:1,
$asc:function(){return[P.aB]},
$isb:1,
$asb:function(){return[P.aB]}}
P.co.prototype={$isc:1,
$asc:function(){return[P.aB]},
$isb:1,
$asb:function(){return[P.aB]}}
P.cL.prototype={$isc:1,
$asc:function(){return[P.aB]},
$isb:1,
$asb:function(){return[P.aB]}}
B.iY.prototype={
$1:function(a){$.$get$iC().i(0,a.which,!0)},
$S:function(){return{func:1,args:[W.aS]}}}
B.iZ.prototype={
$1:function(a){$.$get$iC().i(0,a.which,null)},
$S:function(){return{func:1,args:[W.aS]}}}
B.j_.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.n3=t
$.n4=C.b.a5(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.jF=s-C.b.H(window.innerWidth,2)
$.l5=-(t-C.b.H(window.innerHeight,2))},
$S:function(){return{func:1,args:[W.L]}}}
B.j0.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.c5=t-C.b.H(window.innerWidth,2)
$.c6=-(s-C.b.H(window.innerHeight,2))
if(a.button===2)$.$get$c4().i(0,"right",!0)
else $.$get$c4().i(0,"left",!0)},
$S:function(){return{func:1,args:[W.L]}}}
B.j1.prototype={
$1:function(a){if(a.button===2)$.$get$c4().i(0,"right",null)
else $.$get$c4().i(0,"left",null)},
$S:function(){return{func:1,args:[W.L]}}}
B.fc.prototype={
d6:function(a,b,c,d){var t
W.ah(d,W.nc().$1(d),new B.fd(this),!1,W.b_)
W.ah(d,"mousemove",new B.fe(this),!1,W.L)
t=W.aY
W.ah(d,"touchstart",new B.ff(),!1,t)
W.ah(d,"touchmove",new B.fg(this),!1,t)
B.ns(null)}}
B.fd.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.a4.geb(a)*r.k3
if(C.c.a5(r.fy,t)>0)r.fy=H.Y(C.c.a5(r.fy,t))}catch(q){s=H.O(q)
P.ak(s)}},
$S:function(){return{func:1,args:[W.b_]}}}
B.fe.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=H.Y(t.go+C.b.a5($.jF,$.c5)*0.01)
s=t.id
r=$.c6
q=$.l5
t.id=H.Y(s+(r-q)*0.01)
$.c5=$.jF
$.c6=q}},
$S:function(){return{func:1,args:[W.L]}}}
B.ff.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.a1(t.clientX)
C.c.a1(t.clientY)
$.c5=s
C.c.a1(t.clientX)
$.c6=C.c.a1(t.clientY)},
$S:function(){return{func:1,args:[W.aY]}}}
B.fg.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.a1(t.clientX)
t=C.c.a1(t.clientY)
r=this.a
r.go=H.Y(r.go+C.b.a5(s,$.c5)*0.01)
r.id=H.Y(r.id+($.c6-t)*0.01)
$.c5=s
$.c6=t},
$S:function(){return{func:1,args:[W.aY]}}}
G.f_.prototype={}
G.ha.prototype={
Z:function(a,b){var t=this.d
if(H.aF(!t.C(0,a)))H.b5("uniform "+a+" already set")
t.i(0,a,b)},
bi:function(){return this.d},
k:function(a){var t,s,r,q
t=H.D(["{"+new H.aC(H.iH(this),null).k(0)+"}["+this.a+"]"],[P.r])
for(s=this.d,r=s.gD(s),r=r.gv(r);r.p();){q=r.gq()
C.a.l(t,H.f(q)+": "+H.f(s.h(0,q)))}return C.a.ah(t,"\n")}}
G.dP.prototype={}
G.dS.prototype={
c5:function(a,b,c){J.ls(this.a,b)
if(c>0)J.lR(this.a,b,c)}}
G.en.prototype={}
G.eo.prototype={}
G.ex.prototype={
bg:function(a){var t=this.e
H.d(!t.C(0,a))
H.d(C.e.bc(a,"a"))
switch($.$get$T().h(0,a).a){case"vec2":t.i(0,a,H.D([],[T.av]))
break
case"vec3":t.i(0,a,H.D([],[T.B]))
break
case"vec4":t.i(0,a,H.D([],[T.aE]))
break
case"float":t.i(0,a,H.D([],[P.K]))
break
case"uvec4":t.i(0,a,H.D([],[[P.b,P.n]]))
break
default:if(H.aF(!1))H.b5("unknown type for "+a)}},
cX:function(a){var t,s,r,q,p,o
H.d(a.length===3)
t=this.d
s=t.length
C.a.l(this.b,new G.en(s,s+1,s+2))
for(r=a.length,q=0;q<a.length;a.length===r||(0,H.J)(a),++q){p=a[q]
o=new T.B(new Float32Array(3))
o.V(p)
C.a.l(t,o)}},
cU:function(a,b){var t,s,r,q,p,o,n
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.J)(b),++q){p=b[q]
o=new Float32Array(2)
n=p.a
o[1]=n[1]
o[0]=n[0]
r.l(t,new T.av(o))}},
cV:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.J)(b),++q){p=b[q]
o=new T.B(new Float32Array(3))
o.V(p)
r.l(t,o)}},
cY:function(a){var t,s,r,q,p,o
H.d(a.length===4)
t=this.d
s=t.length
C.a.l(this.c,new G.eo(s,s+1,s+2,s+3))
for(r=a.length,q=0;q<a.length;a.length===r||(0,H.J)(a),++q){p=a[q]
o=new T.B(new Float32Array(3))
o.V(p)
C.a.l(t,o)}},
d2:function(){var t,s,r,q,p,o,n,m,l,k
t=this.b
H.d(t.length>0||this.c.length>0)
s=this.c
r=new Array(t.length*3+s.length*6)
r.fixed$length=Array
q=H.D(r,[P.n])
for(r=t.length,p=0,o=0;n=t.length,o<n;n===r||(0,H.J)(t),++o){m=t[o]
q[p]=m.a
q[p+1]=m.b
q[p+2]=m.c
p+=3}for(t=s.length,o=0;r=s.length,o<r;r===t||(0,H.J)(s),++o){l=s[o]
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
k:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gD(s),r=r.gv(r);r.p();){q=r.gq()
p=$.$get$T().h(0,q).a
C.a.l(t,H.f(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.ah(t," ")}}
G.dr.prototype={}
G.dq.prototype={}
G.eV.prototype={}
G.eX.prototype={
bf:function(a,b,c){var t,s
if(C.e.a7(a,0)===105){if(H.aF(C.b.aE(b.length,c)===this.z))H.b5("ChangeAttribute "+this.z)}else H.d(C.b.aE(b.length,c)===(this.ch.length/3|0))
this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.dF(t.a,34962,s)
J.jL(t.a,34962,b,35048)},
d3:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
a6:function(a,b,c){var t,s,r,q,p,o
t=J.jH(a,0)===105
if(t&&this.z===0)this.z=C.b.aE(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.j7(r.a))
this.bf(a,b,c)
q=$.$get$T().h(0,a)
if(q==null)throw H.e("Unknown canonical "+a)
p=this.x
if(H.aF(p.C(0,a)))H.b5("unexpected attribute "+a)
o=p.h(0,a)
J.dG(r.a,this.e)
r.c5(0,o,t?1:0)
s=s.h(0,a)
p=q.bh()
J.dF(r.a,34962,s)
J.jT(r.a,o,p,5126,!1,0,0)},
k:function(a){var t,s,r
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,t=t.gD(t),t=t.gv(t);t.p();){r=t.gq()
C.a.l(s,H.f(r)+":"+this.cy.h(0,r).length)}return"MESH["+this.a+"] "+C.a.ah(s,"  ")},
saJ:function(a){this.cx=a}}
G.fj.prototype={
cZ:function(a,b){var t=C.b.cs(a,b)
if(this.z===t)return
this.z=t
this.bk()},
bk:function(){var t,s,r,q,p,o,n
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
t.a4(0,0,1/(p*s))
t.a4(1,1,1/p)
t.a4(2,2,(q+r)/o)
t.a4(3,2,-1)
t.a4(2,3,2*r*q/o)},
bi:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.B(new Float32Array(H.P(3)))
o.aA(r,q,p)
p=this.d
p.i(0,"uEyePosition",o)
o=this.cy
o.V(t)
t=o.a
t[12]=0
t[13]=0
t[14]=0
t[15]=1
n=-s[12]
m=-s[13]
l=-s[14]
s=J.t(n)
r=!!s.$isaE
k=r?s.gaw(n):1
if(!!s.$isB){j=s.gm(n)
m=s.gn(n)
l=s.gK(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
l=s.gK(n)
n=j}else if(!(typeof n==="number")){n=null
m=null
l=null}s=C.c.F(t[0],n)
r=C.c.F(t[4],m)
q=C.c.F(t[8],l)
i=t[12]
h=C.c.F(t[1],n)
g=C.c.F(t[5],m)
f=C.c.F(t[9],l)
e=t[13]
d=C.c.F(t[2],n)
c=C.c.F(t[6],m)
b=C.c.F(t[10],l)
a=t[14]
a0=C.c.F(t[3],n)
a1=C.c.F(t[7],m)
a2=C.c.F(t[11],l)
a3=t[15]
t[12]=s+r+q+i*k
t[13]=h+g+f+e*k
t[14]=d+c+b+a*k
t[15]=a0+a1+a2+a3*k
a3=this.cx
a3.V(this.db)
a3.eC(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.fw.prototype={
dc:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gj(t)===s.gj(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gD(s),s=s.gv(s);s.p();){q=s.gq()
if(!t.C(0,q))C.a.l(r,q)}for(t=this.x,s=new P.bX(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.p();){q=s.d
if(!t.B(0,q))C.a.l(r,q)}return r},
df:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gD(b),s=s.gv(s),r=this.d,q=this.y,p=this.z,o=0;s.p();){n=s.gq()
switch(J.jH(n,0)){case 117:if(q.C(0,n)){m=b.h(0,n)
if(p.C(0,n))H.bq("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$T().h(0,n)
if(l==null)H.C("unknown "+n)
H.d(q.C(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.jc(r.a,k,m)
else if(!!J.t(m).$iskd)J.lP(r.a,k,m)
break
case"float":if(l.c===0)J.lN(r.a,k,m)
else if(!!J.t(m).$ises)J.lO(r.a,k,m)
break
case"mat4":if(l.c===0){j=H.aH(m,"$isaq").a
J.jS(r.a,k,!1,j)}else if(!!J.t(m).$ises)J.jS(r.a,k,!1,m)
else if(H.aF(!1))H.b5("bad unform: "+n)
break
case"mat3":if(l.c===0){j=C.D.geW(H.aH(m,"$isnF"))
J.jR(r.a,k,!1,j)}else if(!!J.t(m).$ises)J.jR(r.a,k,!1,m)
else if(H.aF(!1))H.b5("bad unform: "+n)
break
case"vec4":if(l.c===0){j=H.aH(m,"$isaE").a
J.jQ(r.a,k,j)}else J.jQ(r.a,k,m)
break
case"vec3":if(l.c===0){j=H.aH(m,"$isB").a
J.jP(r.a,k,j)}else J.jP(r.a,k,m)
break
case"vec2":if(l.c===0){j=H.aH(m,"$isav").a
J.jO(r.a,k,j)}else J.jO(r.a,k,m)
break
case"sampler2D":case"sampler2DShadow":j=C.b.a2(33984,this.ch)
J.jI(r.a,j)
j=H.aH(m,"$ismA").d4()
J.jK(r.a,3553,j)
j=this.ch
J.jc(r.a,k,j)
this.ch=this.ch+1
break
case"samplerCube":H.d(n==="uCubeTexture")
j=C.b.a2(33984,this.ch)
J.jI(r.a,j)
j=H.aH(m,"$ismA").d4()
J.jK(r.a,34067,j)
j=this.ch
J.jc(r.a,k,j)
this.ch=this.ch+1
break
default:H.bq("Error: unknow uniform type: "+j)
H.d(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":if(J.x(m,!0))J.dH(r.a,2929)
else J.j8(r.a,2929)
break
case"cStencilFunc":H.aH(m,"$isdr")
j=m.a
if(j===1281)J.j8(r.a,2960)
else{J.dH(r.a,2960)
i=m.b
h=m.c
J.lJ(r.a,j,i,h)}break
case"cDepthWrite":J.lm(r.a,m)
break
case"cBlendEquation":H.aH(m,"$isdq")
j=m.a
if(j===1281)J.j8(r.a,3042)
else{J.dH(r.a,3042)
i=m.b
h=m.c
J.lh(r.a,i,h)
J.lg(r.a,j)}break}++o
break}}s=Date.now()
""+o
new P.ay(1000*(s-new P.aN(t,!1).a)).k(0)},
d1:function(a,b,c){var t,s,r,q,p,o,n,m,l
Date.now()
t=this.d
s=this.r
J.lQ(t.a,s)
this.ch=0
this.z.S(0)
for(r=0;r<2;++r){q=b[r]
this.df(q.a,q.bi())}s=this.Q
s.S(0)
for(p=a.cy,p=p.gD(p),p=p.gv(p);p.p();)s.l(0,p.gq())
o=this.dc()
if(o.length!==0)P.ak("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.f(o)))
s=a.d
p=a.e
J.dG(s.a,p)
n=this.e.f.length>0
p=a.f
s=a.d3()
m=a.Q
l=a.z
t.toString
if(n)J.lf(t.a,p)
if(m!==-1)if(l>1)J.lq(t.a,p,s,m,0,l)
else J.lp(t.a,p,s,m,0)
else if(l>1)J.lo(t.a,p,0,s,l)
else J.ln(t.a,p,0,s)
if(n)J.lt(t.a)},
d0:function(a,b){return this.d1(a,b,null)},
d7:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j
t=this.d
s=this.e
r=s.b
q=this.f
p=q.b
o=s.f
n=J.lk(t.a)
m=G.kI(t.a,35633,r)
J.jJ(t.a,n,m)
l=G.kI(t.a,35632,p)
J.jJ(t.a,n,l)
if(o.length>0)J.lL(t.a,n,o,35980)
J.lD(t.a,n)
if(!J.lC(t.a,n,35714))H.C(J.lB(t.a,n))
this.r=n
this.sdq(0,P.jm(s.c,null))
for(s=s.d,r=s.length,p=this.y,k=0;k<s.length;s.length===r||(0,H.J)(s),++k){j=s[k]
o=this.r
p.i(0,j,J.jN(t.a,o,j))}for(s=q.d,r=s.length,k=0;k<s.length;s.length===r||(0,H.J)(s),++k){j=s[k]
q=this.r
p.i(0,j,J.jN(t.a,q,j))}},
sdq:function(a,b){this.x=b}}
G.i.prototype={
bh:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.d(!1)
return-1}}}
G.dk.prototype={
cT:function(a){var t,s,r,q
H.d(this.b==null)
for(t=this.c,s=this.x,r=0;r<1;++r){q=a[r]
H.d($.$get$T().C(0,q))
H.d(!C.a.B(t,q))
C.a.l(t,q)
s.i(0,q,this.r);++this.r}C.a.aB(t)},
cW:function(a){var t,s,r
H.d(this.b==null)
for(t=this.d,s=0;s<2;++s){r=a[s]
if(H.aF($.$get$T().C(0,r)))H.b5("missing uniform "+r)
H.d(!C.a.B(t,r))
C.a.l(t,r)}C.a.aB(t)},
be:function(a){var t,s,r
H.d(this.b==null)
for(t=this.e,s=0;s<1;++s){r=a[s]
H.d($.$get$T().C(0,r))
H.d(!C.a.B(t,r))
C.a.l(t,r)}C.a.aB(t)},
bj:function(a,b){H.d(this.b==null)
this.b=this.dg(!0,a,b)},
d8:function(a){return this.bj(a,null)},
dg:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.d(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.J)(t),++o){n=t[o]
m=$.$get$T().h(0,n)
C.a.l(q,"layout (location="+H.f(p.h(0,n))+") in "+m.a+" "+H.f(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.J)(t),++o){k=t[o]
m=$.$get$T().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.f(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.J)(t),++o){k=t[o]
m=$.$get$T().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.f(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.J)(t),++o){k=t[o]
m=$.$get$T().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.f(k)+j+";")}C.a.l(q,"")
if(c!=null)C.a.J(q,c)
C.a.l(q,"void main(void) {")
C.a.J(q,b)
C.a.l(q,"}")
return C.a.ah(q,"\n")}}
G.fG.prototype={}
R.fK.prototype={
dj:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.mJ("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.n).bs(r,"float")
r.setProperty(p,"left","")
p=C.n.bs(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.i.N(t,s)}return t},
d9:function(a,b,c){var t,s,r
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
J.j5(this.a,s)
r=this.dj(b,c,90,30)
this.d=r
J.j5(this.a,r)
t=t.createElement("div")
this.c=t
J.j5(this.a,t)}}
R.fL.prototype={
de:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.q.eQ(s,2)+" fps"
t=this.c;(t&&C.i).cI(t,b)
r=C.b.H(30*C.q.e1(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.i).N(t,q)},
dd:function(a){return this.de(a,"")}}
D.eP.prototype={
$1:function(a){this.a.as(0,W.mR(this.b.response))},
$S:function(){return{func:1,args:[,]}}}
A.iJ.prototype={
$2:function(a,b){var t=536870911&a+J.am(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(){return{func:1,args:[P.n,P.o]}}}
T.aq.prototype={
a4:function(a,b,c){H.d(a<4)
H.d(b<4)
this.a[b*4+a]=c},
V:function(a){var t,s
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
k:function(a){return"[0] "+this.al(0).k(0)+"\n[1] "+this.al(1).k(0)+"\n[2] "+this.al(2).k(0)+"\n[3] "+this.al(3).k(0)+"\n"},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.f.i(this.a,b,c)},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aq){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gu:function(a){return A.iI(this.a)},
al:function(a){var t,s
t=new Float32Array(H.P(4))
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.aE(t)},
an:function(){var t=this.a
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
eC:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.av.prototype={
k:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+"]"},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.av){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gu:function(a){return A.iI(this.a)},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.f.i(this.a,b,c)},
gj:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.B.prototype={
aA:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
V:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
k:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+"]"},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.B){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gu:function(a){return A.iI(this.a)},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.f.i(this.a,b,c)},
gj:function(a){var t,s,r
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
bZ:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.B(new Float32Array(H.P(3)))
t.aA(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gK:function(a){return this.a[2]}}
T.aE.prototype={
k:function(a){var t=this.a
return H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+","+H.f(t[3])},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aE){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gu:function(a){return A.iI(this.a)},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.f.i(this.a,b,c)},
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
gaw:function(a){return this.a[3]}}
T.iU.prototype={
$1:function(b3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
t=this.a
t.b=b3+0
s=this.c
s.go=H.Y(s.go+0.001)
r=s.k4
if(r.h(0,37)!=null)s.go=H.Y(s.go+0.03)
else if(r.h(0,39)!=null)s.go=H.Y(s.go-0.03)
if(r.h(0,38)!=null)s.id=H.Y(s.id+0.03)
else if(r.h(0,40)!=null)s.id=H.Y(s.id-0.03)
if(r.h(0,33)!=null)s.fy=H.Y(s.fy*0.99)
else if(r.h(0,34)!=null)s.fy=H.Y(s.fy*1.01)
if(r.h(0,32)!=null){s.go=0
s.id=0}r=H.Y(C.c.e2(s.id,-1.4707963267948965,1.4707963267948965))
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
p=s.k2.a
m[12]=m[12]+p[0]
m[13]=m[13]+p[1]
m[14]=m[14]+p[2]
r=m[12]
q=m[13]
n=m[14]
l=new T.B(new Float32Array(H.P(3)))
l.aA(0,1,0)
k=s.e
j=k.a
j[0]=m[12]
j[1]=m[13]
j[2]=m[14]
j=new Float32Array(H.P(3))
i=new T.B(j)
i.V(k)
j[0]=j[0]-p[0]
j[1]=j[1]-p[1]
j[2]=j[2]-p[2]
i.aX(0)
h=l.bZ(i)
h.aX(0)
g=i.bZ(h)
g.aX(0)
p=h.aU(k)
f=g.aU(k)
k=i.aU(k)
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
n=s.f.a
n[0]=m[2]
n[1]=m[6]
n[2]=m[10]
s=-s.k1
q=n[0]
r=n[1]
d=n[2]
d=Math.sqrt(q*q+r*r+d*d)
h=n[0]/d
g=n[1]/d
i=n[2]/d
d=Math.cos(s)
s=Math.sin(s)
a3=1-d
a4=h*h*a3+d
n=i*s
a5=h*g*a3-n
r=g*s
a6=h*i*a3+r
a7=g*h*a3+n
a8=g*g*a3+d
s=h*s
a9=g*i*a3-s
b0=i*h*a3-r
b1=i*g*a3+s
b2=i*i*a3+d
d=m[0]
s=m[4]
r=m[8]
n=m[1]
q=m[5]
b=m[9]
a=m[2]
a0=m[6]
a1=m[10]
a2=m[3]
e=m[7]
c=m[11]
m[0]=d*a4+s*a7+r*b0
m[1]=n*a4+q*a7+b*b0
m[2]=a*a4+a0*a7+a1*b0
m[3]=a2*a4+e*a7+c*b0
m[4]=d*a5+s*a8+r*b1
m[5]=n*a5+q*a8+b*b1
m[6]=a*a5+a0*a8+a1*b1
m[7]=a2*a5+e*a8+c*b1
m[8]=d*a6+s*a9+r*b2
m[9]=n*a6+q*a9+b*b2
m[10]=a*a6+a0*a9+a1*b2
m[11]=a2*a6+e*a9+c*b2
this.b.dd(b3)
this.e.d0(t.a,[this.d,this.f])
C.a5.gdW(window).b0(this)},
$S:function(){return{func:1,v:true,args:[P.U]}}}
T.iV.prototype={
$1:function(a){var t,s,r,q,p,o,n,m,l
t=Y.m9(J.b7(a,0))
s=$.l4
r=this.b
q=r.d
r=r.e.x
p=P.Q()
o=J.ll(q.a)
n=new G.eX(q,o,4,p,r,null,0,-1,null,null,P.Q(),"meshdata:"+s,!1,!0)
s=G.kc(t.d,null)
p.i(0,"aPosition",J.j7(q.a))
n.ch=s
n.bf("aPosition",s,3)
m=$.$get$T().h(0,"aPosition")
if(m==null)H.C("Unknown canonical aPosition")
H.d(r.C(0,"aPosition"))
l=r.h(0,"aPosition")
J.dG(q.a,o)
q.c5(0,l,0)
s=p.h(0,"aPosition")
r=m.bh()
J.dF(q.a,34962,s)
J.jT(q.a,l,r,5126,!1,0,0)
s=t.d2()
n.y=J.j7(q.a)
H.d(n.ch!=null)
r=n.ch.length
if(r<768){n.saJ(new Uint8Array(H.iu(s)))
n.Q=5121}else if(r<196608){n.saJ(new Uint16Array(H.iu(s)))
n.Q=5123}else{n.saJ(new Uint32Array(H.iu(s)))
n.Q=5125}J.dG(q.a,o)
s=n.y
r=n.cx
p=J.t(r)
H.d(!!p.$iskF||!!p.$iskG||!!p.$iskH)
J.dF(q.a,34963,s)
J.jL(q.a,34963,r,35048)
G.mK(t,n)
this.a.a=n
this.c.$1(0)},
$S:function(){return{func:1,args:[P.b]}}}
J.a.prototype.cO=J.a.prototype.k
J.bE.prototype.cQ=J.bE.prototype.k
P.V.prototype.cP=P.V.prototype.ax
W.a2.prototype.aD=W.a2.prototype.L
W.bZ.prototype.cR=W.bZ.prototype.R;(function installTearOffs(){installTearOff(H.b2.prototype,"gex",0,0,0,null,["$0"],["av"],0)
installTearOff(H.ai.prototype,"gcz",0,0,0,null,["$1"],["I"],2)
installTearOff(H.b1.prototype,"ged",0,0,0,null,["$1"],["T"],2)
installTearOff(P,"n_",1,0,0,null,["$1"],["mG"],1)
installTearOff(P,"n0",1,0,0,null,["$1"],["mH"],1)
installTearOff(P,"n1",1,0,0,null,["$1"],["mI"],1)
installTearOff(P,"kV",1,0,0,null,["$0"],["mY"],0)
installTearOff(P.M.prototype,"gdt",0,0,0,null,["$2","$1"],["G","du"],5)
installTearOff(P,"n7",1,0,0,null,["$2"],["lX"],6)
installTearOff(W,"nc",1,0,0,null,["$1"],["m2"],7)
installTearOff(W,"nd",1,0,0,null,["$4"],["mL"],4)
installTearOff(W,"ne",1,0,0,null,["$4"],["mM"],4)
installTearOff(W.dc.prototype,"gaY",0,1,0,null,["$0"],["aZ"],3)
installTearOff(W.ds.prototype,"gaY",0,1,0,null,["$0"],["aZ"],3)
installTearOff(T,"l6",1,0,0,null,["$0"],["nm"],0)})();(function inheritance(){inherit(P.o,null)
var t=P.o
inherit(H.jj,t)
inherit(J.a,t)
inherit(J.dM,t)
inherit(P.V,t)
inherit(H.d5,t)
inherit(P.d0,t)
inherit(H.ch,t)
inherit(H.b9,t)
inherit(H.i2,t)
inherit(H.b2,t)
inherit(H.hC,t)
inherit(H.b3,t)
inherit(H.i1,t)
inherit(H.hv,t)
inherit(H.bh,t)
inherit(H.h0,t)
inherit(H.ao,t)
inherit(H.ai,t)
inherit(H.b1,t)
inherit(H.fv,t)
inherit(H.h7,t)
inherit(P.bb,t)
inherit(H.dA,t)
inherit(H.aC,t)
inherit(H.ad,t)
inherit(H.eL,t)
inherit(H.eN,t)
inherit(H.eH,t)
inherit(H.i3,t)
inherit(P.hx,t)
inherit(P.dx,t)
inherit(P.M,t)
inherit(P.du,t)
inherit(P.fN,t)
inherit(P.fO,t)
inherit(P.b8,t)
inherit(P.it,t)
inherit(P.fD,t)
inherit(P.i_,t)
inherit(P.bX,t)
inherit(P.bN,t)
inherit(P.v,t)
inherit(P.i0,t)
inherit(P.aw,t)
inherit(P.F,t)
inherit(P.aN,t)
inherit(P.U,t)
inherit(P.ay,t)
inherit(P.dm,t)
inherit(P.hH,t)
inherit(P.bB,t)
inherit(P.e4,t)
inherit(P.b,t)
inherit(P.aB,t)
inherit(P.aU,t)
inherit(P.bP,t)
inherit(P.r,t)
inherit(P.bQ,t)
inherit(W.dU,t)
inherit(W.hu,t)
inherit(W.bW,t)
inherit(W.z,t)
inherit(W.de,t)
inherit(W.bZ,t)
inherit(W.ik,t)
inherit(W.ci,t)
inherit(W.dd,t)
inherit(W.id,t)
inherit(W.dB,t)
inherit(P.hm,t)
inherit(P.i5,t)
inherit(G.f_,t)
inherit(G.dS,t)
inherit(G.en,t)
inherit(G.eo,t)
inherit(G.ex,t)
inherit(G.dr,t)
inherit(G.dq,t)
inherit(G.i,t)
inherit(G.dk,t)
inherit(R.fK,t)
inherit(T.aq,t)
inherit(T.av,t)
inherit(T.B,t)
inherit(T.aE,t)
t=J.a
inherit(J.eG,t)
inherit(J.d3,t)
inherit(J.bE,t)
inherit(J.aP,t)
inherit(J.bd,t)
inherit(J.aQ,t)
inherit(H.bH,t)
inherit(H.bf,t)
inherit(W.h,t)
inherit(W.a0,t)
inherit(W.c8,t)
inherit(W.dQ,t)
inherit(W.y,t)
inherit(W.cm,t)
inherit(W.dW,t)
inherit(W.dX,t)
inherit(W.dY,t)
inherit(W.cd,t)
inherit(W.ce,t)
inherit(W.cf,t)
inherit(W.cx,t)
inherit(W.e0,t)
inherit(W.j,t)
inherit(W.cw,t)
inherit(W.a4,t)
inherit(W.ey,t)
inherit(W.cv,t)
inherit(W.eQ,t)
inherit(W.eW,t)
inherit(W.a5,t)
inherit(W.ct,t)
inherit(W.f8,t)
inherit(W.dc,t)
inherit(W.cz,t)
inherit(W.fh,t)
inherit(W.bi,t)
inherit(W.a6,t)
inherit(W.cs,t)
inherit(W.ag,t)
inherit(W.dh,t)
inherit(W.a8,t)
inherit(W.cr,t)
inherit(W.a9,t)
inherit(W.fM,t)
inherit(W.W,t)
inherit(W.cq,t)
inherit(W.h_,t)
inherit(W.ab,t)
inherit(W.cB,t)
inherit(W.h4,t)
inherit(W.ds,t)
inherit(W.hc,t)
inherit(W.hh,t)
inherit(W.hw,t)
inherit(W.cG,t)
inherit(W.cF,t)
inherit(W.cE,t)
inherit(W.cA,t)
inherit(W.cD,t)
inherit(W.cC,t)
inherit(W.ir,t)
inherit(W.is,t)
inherit(P.ap,t)
inherit(P.cp,t)
inherit(P.ar,t)
inherit(P.cu,t)
inherit(P.fn,t)
inherit(P.fo,t)
inherit(P.ft,t)
inherit(P.cn,t)
inherit(P.as,t)
inherit(P.cy,t)
inherit(P.hg,t)
inherit(P.dN,t)
inherit(P.fx,t)
inherit(P.fy,t)
inherit(P.iq,t)
inherit(P.co,t)
t=J.bE
inherit(J.fl,t)
inherit(J.aZ,t)
inherit(J.aR,t)
inherit(J.ji,J.aP)
t=J.bd
inherit(J.d2,t)
inherit(J.d1,t)
t=P.V
inherit(H.c,t)
inherit(H.d6,t)
inherit(H.dt,t)
t=H.c
inherit(H.be,t)
inherit(H.eM,t)
inherit(H.e3,H.d6)
t=P.d0
inherit(H.eR,t)
inherit(H.hj,t)
t=H.be
inherit(H.bF,t)
inherit(P.eO,t)
t=H.b9
inherit(H.j2,t)
inherit(H.j3,t)
inherit(H.hY,t)
inherit(H.hD,t)
inherit(H.eC,t)
inherit(H.eD,t)
inherit(H.i4,t)
inherit(H.h1,t)
inherit(H.h2,t)
inherit(H.j4,t)
inherit(H.iO,t)
inherit(H.iP,t)
inherit(H.iQ,t)
inherit(H.iR,t)
inherit(H.iS,t)
inherit(H.fW,t)
inherit(H.eI,t)
inherit(H.iK,t)
inherit(H.iL,t)
inherit(H.iM,t)
inherit(P.hr,t)
inherit(P.hq,t)
inherit(P.hs,t)
inherit(P.ht,t)
inherit(P.ew,t)
inherit(P.ev,t)
inherit(P.hI,t)
inherit(P.hQ,t)
inherit(P.hM,t)
inherit(P.hN,t)
inherit(P.hO,t)
inherit(P.hK,t)
inherit(P.hP,t)
inherit(P.hJ,t)
inherit(P.hT,t)
inherit(P.hU,t)
inherit(P.hS,t)
inherit(P.hR,t)
inherit(P.fP,t)
inherit(P.fQ,t)
inherit(P.iw,t)
inherit(P.i8,t)
inherit(P.i7,t)
inherit(P.i9,t)
inherit(P.eS,t)
inherit(P.e1,t)
inherit(P.e2,t)
inherit(W.ix,t)
inherit(W.hk,t)
inherit(W.hG,t)
inherit(W.fa,t)
inherit(W.f9,t)
inherit(W.ig,t)
inherit(W.ih,t)
inherit(W.io,t)
inherit(W.ip,t)
inherit(P.ho,t)
inherit(P.iy,t)
inherit(P.iz,t)
inherit(P.iA,t)
inherit(B.iY,t)
inherit(B.iZ,t)
inherit(B.j_,t)
inherit(B.j0,t)
inherit(B.j1,t)
inherit(B.fd,t)
inherit(B.fe,t)
inherit(B.ff,t)
inherit(B.fg,t)
inherit(D.eP,t)
inherit(A.iJ,t)
inherit(T.iU,t)
inherit(T.iV,t)
t=H.hv
inherit(H.bk,t)
inherit(H.c_,t)
t=P.bb
inherit(H.df,t)
inherit(H.eJ,t)
inherit(H.hb,t)
inherit(H.h9,t)
inherit(H.dR,t)
inherit(H.fA,t)
inherit(P.c7,t)
inherit(P.bg,t)
inherit(P.an,t)
inherit(P.u,t)
inherit(P.bT,t)
inherit(P.af,t)
inherit(P.a1,t)
inherit(P.dV,t)
t=H.fW
inherit(H.fJ,t)
inherit(H.bt,t)
inherit(H.hp,P.c7)
t=H.bf
inherit(H.f0,t)
inherit(H.d8,t)
t=H.d8
inherit(H.bJ,t)
inherit(H.bI,t)
inherit(H.bK,H.bJ)
inherit(H.d9,H.bK)
inherit(H.bL,H.bI)
inherit(H.da,H.bL)
t=H.d9
inherit(H.d7,t)
inherit(H.f1,t)
t=H.da
inherit(H.f2,t)
inherit(H.f3,t)
inherit(H.f4,t)
inherit(H.f5,t)
inherit(H.f6,t)
inherit(H.db,t)
inherit(H.f7,t)
t=P.hx
inherit(P.dv,t)
inherit(P.il,t)
inherit(P.i6,P.it)
inherit(P.dy,H.ad)
inherit(P.fC,P.fD)
inherit(P.hX,P.fC)
inherit(P.hZ,P.hX)
inherit(P.d4,P.bN)
t=P.U
inherit(P.K,t)
inherit(P.n,t)
t=P.an
inherit(P.di,t)
inherit(P.eA,t)
t=W.h
inherit(W.q,t)
inherit(W.bx,t)
inherit(W.dT,t)
inherit(W.eq,t)
inherit(W.bD,t)
inherit(W.bG,t)
inherit(W.fq,t)
inherit(W.dj,t)
inherit(W.fE,t)
inherit(W.a7,t)
inherit(W.bw,t)
inherit(W.aa,t)
inherit(W.X,t)
inherit(W.bv,t)
inherit(W.he,t)
inherit(W.hi,t)
inherit(W.bU,t)
inherit(W.hl,t)
inherit(W.b0,t)
inherit(W.ie,t)
t=W.q
inherit(W.a2,t)
inherit(W.aM,t)
inherit(W.aO,t)
inherit(W.cc,t)
inherit(W.hz,t)
t=W.a2
inherit(W.k,t)
inherit(P.E,t)
t=W.k
inherit(W.dK,t)
inherit(W.dL,t)
inherit(W.aL,t)
inherit(W.c9,t)
inherit(W.cb,t)
inherit(W.eu,t)
inherit(W.cj,t)
inherit(W.eB,t)
inherit(W.fB,t)
inherit(W.dn,t)
inherit(W.fU,t)
inherit(W.fV,t)
inherit(W.bR,t)
inherit(W.hW,t)
inherit(W.bA,W.bx)
inherit(W.dO,W.bA)
inherit(W.ba,W.cm)
inherit(W.dZ,W.ce)
inherit(W.d_,W.cx)
inherit(W.e_,W.d_)
inherit(W.a3,W.c8)
inherit(W.cY,W.cw)
inherit(W.ep,W.cY)
inherit(W.cS,W.cv)
inherit(W.bC,W.cS)
inherit(W.ck,W.aO)
inherit(W.cl,W.bD)
inherit(W.aD,W.j)
t=W.aD
inherit(W.aS,t)
inherit(W.L,t)
inherit(W.aY,t)
inherit(W.eY,W.bG)
inherit(W.cU,W.ct)
inherit(W.eZ,W.cU)
inherit(W.S,P.d4)
inherit(W.cT,W.cz)
inherit(W.bM,W.cT)
t=W.bi
inherit(W.fk,t)
inherit(W.fz,t)
inherit(W.h6,t)
inherit(W.cJ,W.cs)
inherit(W.fm,W.cJ)
inherit(W.fp,W.ag)
inherit(W.bz,W.bw)
inherit(W.fF,W.bz)
inherit(W.cM,W.cr)
inherit(W.fH,W.cM)
inherit(W.cK,W.cq)
inherit(W.fY,W.cK)
inherit(W.by,W.bv)
inherit(W.fZ,W.by)
inherit(W.cQ,W.cB)
inherit(W.h3,W.cQ)
inherit(W.b_,W.L)
inherit(W.cV,W.cG)
inherit(W.dw,W.cV)
inherit(W.cH,W.cF)
inherit(W.hy,W.cH)
inherit(W.hA,W.cf)
inherit(W.cO,W.cE)
inherit(W.hV,W.cO)
inherit(W.cX,W.cA)
inherit(W.dz,W.cX)
inherit(W.cZ,W.cD)
inherit(W.ii,W.cZ)
inherit(W.cW,W.cC)
inherit(W.ij,W.cW)
inherit(W.hB,W.hu)
inherit(W.hE,P.fN)
inherit(W.ju,W.hE)
inherit(W.hF,P.fO)
inherit(W.im,W.bZ)
inherit(P.hn,P.hm)
inherit(P.G,P.i5)
t=P.E
inherit(P.aA,t)
inherit(P.aK,t)
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
inherit(P.er,t)
inherit(P.eT,t)
inherit(P.eU,t)
inherit(P.fi,t)
inherit(P.bO,t)
inherit(P.fT,t)
inherit(P.hf,t)
inherit(P.bV,t)
inherit(P.ia,t)
inherit(P.ib,t)
inherit(P.ic,t)
t=P.aA
inherit(P.dJ,t)
inherit(P.et,t)
inherit(P.ac,t)
inherit(P.ez,t)
inherit(P.fS,t)
inherit(P.dp,t)
inherit(P.hd,t)
inherit(P.cI,P.cp)
inherit(P.eK,P.cI)
inherit(P.cR,P.cu)
inherit(P.fb,P.cR)
inherit(P.fu,P.ac)
inherit(P.cP,P.cn)
inherit(P.fR,P.cP)
t=P.dp
inherit(P.fX,t)
inherit(P.bS,t)
inherit(P.cN,P.cy)
inherit(P.h5,P.cN)
inherit(P.cL,P.co)
inherit(P.fI,P.cL)
t=G.f_
inherit(G.fG,t)
inherit(G.ha,t)
inherit(G.eX,t)
inherit(G.fw,t)
inherit(G.dP,G.fG)
inherit(B.fc,G.dP)
t=G.ha
inherit(G.eV,t)
inherit(G.fj,t)
inherit(R.fL,R.fK)
mixin(H.bI,P.v)
mixin(H.bJ,P.v)
mixin(H.bK,H.ch)
mixin(H.bL,H.ch)
mixin(P.bN,P.v)
mixin(W.bv,P.v)
mixin(W.bw,P.v)
mixin(W.bx,P.v)
mixin(W.by,W.z)
mixin(W.bz,W.z)
mixin(W.bA,W.z)
mixin(W.cm,W.dU)
mixin(W.cG,P.v)
mixin(W.cs,P.v)
mixin(W.cz,P.v)
mixin(W.cA,P.v)
mixin(W.cB,P.v)
mixin(W.cC,P.v)
mixin(W.cD,P.v)
mixin(W.cE,P.v)
mixin(W.cF,P.v)
mixin(W.cq,P.v)
mixin(W.cr,P.v)
mixin(W.ct,P.v)
mixin(W.cv,P.v)
mixin(W.cw,P.v)
mixin(W.cx,P.v)
mixin(W.cH,W.z)
mixin(W.cJ,W.z)
mixin(W.cT,W.z)
mixin(W.cU,W.z)
mixin(W.cS,W.z)
mixin(W.cX,W.z)
mixin(W.cY,W.z)
mixin(W.cZ,W.z)
mixin(W.d_,W.z)
mixin(W.cK,W.z)
mixin(W.cM,W.z)
mixin(W.cO,W.z)
mixin(W.cQ,W.z)
mixin(W.cV,W.z)
mixin(W.cW,W.z)
mixin(P.cp,P.v)
mixin(P.cn,P.v)
mixin(P.cu,P.v)
mixin(P.cy,P.v)
mixin(P.cI,W.z)
mixin(P.cR,W.z)
mixin(P.cN,W.z)
mixin(P.cP,W.z)
mixin(P.co,P.v)
mixin(P.cL,W.z)})();(function constants(){C.h=W.aL.prototype
C.z=W.c9.prototype
C.n=W.ba.prototype
C.i=W.cb.prototype
C.A=W.cd.prototype
C.B=W.cj.prototype
C.j=W.ck.prototype
C.p=W.cl.prototype
C.C=J.a.prototype
C.a=J.aP.prototype
C.q=J.d1.prototype
C.b=J.d2.prototype
C.D=J.d3.prototype
C.c=J.bd.prototype
C.e=J.aQ.prototype
C.K=J.aR.prototype
C.f=H.d7.prototype
C.v=W.bM.prototype
C.w=J.fl.prototype
C.x=W.dh.prototype
C.y=W.dn.prototype
C.m=J.aZ.prototype
C.a4=W.b_.prototype
C.a5=W.bU.prototype
C.d=new P.i6()
C.o=new P.ay(0)
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
C.r=function(hooks) { return hooks; }

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
C.t=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.L=H.D(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.r])
C.M=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.u=makeConstList([])
C.k=H.D(makeConstList(["bind","if","ref","repeat","syntax"]),[P.r])
C.l=H.D(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.r])
C.N=H.H("nA")
C.O=H.H("nB")
C.P=H.H("es")
C.Q=H.H("nC")
C.R=H.H("nD")
C.S=H.H("kd")
C.T=H.H("nE")
C.U=H.H("kg")
C.V=H.H("aU")
C.W=H.H("r")
C.X=H.H("kF")
C.Y=H.H("kG")
C.Z=H.H("nH")
C.a_=H.H("kH")
C.a0=H.H("aw")
C.a1=H.H("K")
C.a2=H.H("n")
C.a3=H.H("U")})();(function staticFields(){$.kn="$cachedFunction"
$.ko="$cachedInvocation"
$.jZ=null
$.jX=null
$.jw=!1
$.jA=null
$.kS=null
$.l8=null
$.iD=null
$.iN=null
$.jB=null
$.bl=null
$.c0=null
$.c1=null
$.jx=!1
$.w=C.d
$.kb=0
$.az=null
$.jf=null
$.ka=null
$.k9=null
$.k7=null
$.k6=null
$.k5=null
$.k4=null
$.n3=0
$.n4=0
$.jF=0
$.l5=0
$.c5=0
$.c6=0
$.nt=!1
$.l_=0
$.l4="../ct_logo.obj"})();(function lazyInitializers(){lazy($,"k3","$get$k3",function(){return H.l1("_$dart_dartClosure")})
lazy($,"jk","$get$jk",function(){return H.l1("_$dart_js")})
lazy($,"ke","$get$ke",function(){return H.me()})
lazy($,"kf","$get$kf",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.kb
$.kb=t+1
t="expando$key$"+t}return new P.e4(null,t,[P.n])})
lazy($,"ku","$get$ku",function(){return H.at(H.h8({
toString:function(){return"$receiver$"}}))})
lazy($,"kv","$get$kv",function(){return H.at(H.h8({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"kw","$get$kw",function(){return H.at(H.h8(null))})
lazy($,"kx","$get$kx",function(){return H.at(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kB","$get$kB",function(){return H.at(H.h8(void 0))})
lazy($,"kC","$get$kC",function(){return H.at(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kz","$get$kz",function(){return H.at(H.kA(null))})
lazy($,"ky","$get$ky",function(){return H.at(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"kE","$get$kE",function(){return H.at(H.kA(void 0))})
lazy($,"kD","$get$kD",function(){return H.at(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"jt","$get$jt",function(){return P.mF()})
lazy($,"c2","$get$c2",function(){return[]})
lazy($,"k2","$get$k2",function(){return{}})
lazy($,"kL","$get$kL",function(){return P.jm(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"jv","$get$jv",function(){return P.Q()})
lazy($,"iC","$get$iC",function(){return P.kj(P.n,P.aw)})
lazy($,"c4","$get$c4",function(){return P.kj(P.r,P.aw)})
lazy($,"ks","$get$ks",function(){return new G.dr(1281,0,4294967295)})
lazy($,"jV","$get$jV",function(){return new G.dq(1281,1281,1281)})
lazy($,"T","$get$T",function(){return P.aT(["cBlendEquation",new G.i("","",0),"cDepthWrite",new G.i("","",0),"cDepthTest",new G.i("","",0),"cStencilFunc",new G.i("","",0),"tPosition",new G.i("vec3","",0),"tSpeed",new G.i("vec3","",0),"tForce",new G.i("vec3","",0),"aColors",new G.i("vec3","per vertex color",0),"aColorAlpha",new G.i("vec4","per vertex color",0),"aPosition",new G.i("vec3","vertex coordinates",0),"aTexUV",new G.i("vec2","texture uvs",0),"aNormal",new G.i("vec3","vertex normals",0),"aBinormal",new G.i("vec3","vertex binormals",0),"aCenter",new G.i("vec4","for wireframe",0),"aPointSize",new G.i("float","",0),"aBoneIndex",new G.i("vec4","",0),"aBoneWeight",new G.i("vec4","",0),"aTangent",new G.i("vec3","vertex tangents",0),"aBitangent",new G.i("vec3","vertex btangents",0),"iaRotation",new G.i("vec4","",0),"iaTranslation",new G.i("vec3","",0),"iaScale",new G.i("vec3","",0),"vColor",new G.i("vec3","per vertex color",0),"vTexUV",new G.i("vec2","",0),"vLightWeighting",new G.i("vec3","",0),"vNormal",new G.i("vec3","",0),"vPosition",new G.i("vec3","vertex coordinates",0),"vPositionFromLight",new G.i("vec4","delta from light",0),"vCenter",new G.i("vec4","for wireframe",0),"vDepth",new G.i("float","depth for shadowmaps",0),"uTransformationMatrix",new G.i("mat4","",0),"uModelMatrix",new G.i("mat4","",0),"uNormalMatrix",new G.i("mat3","",0),"uConvolutionMatrix",new G.i("mat3","",0),"uPerspectiveViewMatrix",new G.i("mat4","",0),"uLightPerspectiveViewMatrix",new G.i("mat4","",0),"uShadowMap",new G.i("sampler2DShadow","",0),"uTexture",new G.i("sampler2D","",0),"uTexture2",new G.i("sampler2D","",0),"uTexture3",new G.i("sampler2D","",0),"uTexture4",new G.i("sampler2D","",0),"uSpecularMap",new G.i("sampler2D","",0),"uNormalMap",new G.i("sampler2D","",0),"uBumpMap",new G.i("sampler2D","",0),"uDepthMap",new G.i("sampler2D","",0),"uCubeTexture",new G.i("samplerCube","",0),"uAnimationTable",new G.i("sampler2D","",0),"uTime",new G.i("float","time since program start in sec",0),"uCameraNear",new G.i("float","",0),"uCameraFar",new G.i("float","",0),"uFogNear",new G.i("float","",0),"uFogFar",new G.i("float","",0),"uPointSize",new G.i("float","",0),"uScale",new G.i("float","",0),"uAngle",new G.i("float","",0),"uCanvasSize",new G.i("vec2","",0),"uCenter2",new G.i("vec2","",0),"uCutOff",new G.i("float","",0),"uShininess",new G.i("float","",0),"uShadowBias",new G.i("float","",0),"uOpacity",new G.i("float","",0),"uColor",new G.i("vec3","",0),"uAmbientDiffuse",new G.i("vec3","",0),"uColorEmissive",new G.i("vec3","",0),"uColorSpecular",new G.i("vec3","",0),"uColorDiffuse",new G.i("vec3","",0),"uColorAlpha",new G.i("vec4","",0),"uColorAlpha2",new G.i("vec4","",0),"uEyePosition",new G.i("vec3","",0),"uMaterial",new G.i("mat4","",0),"uRange",new G.i("vec2","",0),"uDirection",new G.i("vec2","",0),"uBoneMatrices",new G.i("mat4","",128),"uLightDescs",new G.i("mat4","",4),"uLightCount",new G.i("float","",0),"uLightTypes",new G.i("float","",4),"uBumpScale",new G.i("float","for bump maps",0),"uNormalScale",new G.i("float","for normal maps",0)])})
lazy($,"k1","$get$k1",function(){return T.mD(0.8,0.8,0.8)})
lazy($,"kY","$get$kY",function(){var t=new G.dk("FixedVertexColorV",null,[],[],[],[],0,P.Q())
t.cT(["aPosition"])
t.cW(["uPerspectiveViewMatrix","uModelMatrix"])
t.be(["vColor"])
t.bj(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vColor = ColorFromPosition(aPosition);"],["// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"])
return t})
lazy($,"kX","$get$kX",function(){var t=new G.dk("FixedVertexColorF",null,[],[],[],[],0,P.Q())
t.be(["vColor"])
t.d8(["oFragColor = vec4( vColor, 1.0 );"])
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
mangledGlobalNames:{n:"int",K:"double",U:"num",r:"String",aw:"bool",aU:"Null",b:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.q},{func:1,ret:P.aw,args:[W.a2,P.r,P.r,W.bW]},{func:1,v:true,args:[P.o],opt:[P.bP]},{func:1,ret:P.n,args:[P.F,P.F]},{func:1,ret:P.r,args:[W.h]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationTimeline:J.a,AppBannerPromptResult:J.a,BarProp:J.a,Body:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CHROMIUMValuebuffer:J.a,CircularGeofencingRegion:J.a,Client:J.a,Clients:J.a,CompositorProxy:J.a,ConsoleBase:J.a,Coordinates:J.a,Credential:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMStringMap:J.a,EffectModel:J.a,Entry:J.a,FederatedCredential:J.a,FileEntry:J.a,FileError:J.a,Stream:J.a,DOMFileSystem:J.a,FontFace:J.a,FormData:J.a,GamepadButton:J.a,Geofencing:J.a,GeofencingRegion:J.a,Geolocation:J.a,Geoposition:J.a,Headers:J.a,HMDVRDevice:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageData:J.a,InjectedScriptHost:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,KeyframeEffect:J.a,MediaDeviceInfo:J.a,MediaDevices:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaMetadata:J.a,MediaSession:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigatorStorageUtils:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,OffscreenCanvas:J.a,PasswordCredential:J.a,PerformanceCompositeTiming:J.a,PerformanceEntry:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformanceRenderTiming:J.a,PerformanceResourceTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PositionError:J.a,PositionSensorVRDevice:J.a,Presentation:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,ReadableByteStream:J.a,ReadableByteStreamReader:J.a,ReadableStreamReader:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,Selection:J.a,ServicePort:J.a,SharedArrayBuffer:J.a,SourceInfo:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StorageInfo:J.a,StorageManager:J.a,StorageQuota:J.a,StyleMedia:J.a,StylePropertyMap:J.a,SyncManager:J.a,TextMetrics:J.a,TrackDefault:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRDevice:J.a,VREyeParameters:J.a,VRFieldOfView:J.a,VRPositionState:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkerConsole:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothAdvertisingData:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,NFC:J.a,PagePopupController:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WebKitCSSMatrix:J.a,Worklet:J.a,WorkletGlobalScope:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPreserveAspectRatio:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,CHROMIUMSubscribeUniform:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTDisjointTimerQuery:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bH,ArrayBufferView:H.bf,DataView:H.f0,Float32Array:H.d7,Float64Array:H.f1,Int16Array:H.f2,Int32Array:H.f3,Int8Array:H.f4,Uint16Array:H.f5,Uint32Array:H.f6,Uint8ClampedArray:H.db,CanvasPixelArray:H.db,Uint8Array:H.f7,HTMLAudioElement:W.k,HTMLBRElement:W.k,HTMLBaseElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLImageElement:W.k,HTMLKeygenElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMediaElement:W.k,HTMLMenuElement:W.k,HTMLMenuItemElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTextAreaElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLVideoElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,HTMLAnchorElement:W.dK,HTMLAreaElement:W.dL,AudioTrack:W.a0,AudioTrackList:W.dO,Blob:W.c8,HTMLBodyElement:W.aL,HTMLCanvasElement:W.c9,CanvasRenderingContext2D:W.dQ,CDATASection:W.aM,CharacterData:W.aM,Comment:W.aM,ProcessingInstruction:W.aM,Text:W.aM,CompositorWorker:W.dT,CSSCharsetRule:W.y,CSSFontFaceRule:W.y,CSSGroupingRule:W.y,CSSImportRule:W.y,CSSKeyframeRule:W.y,MozCSSKeyframeRule:W.y,WebKitCSSKeyframeRule:W.y,CSSKeyframesRule:W.y,MozCSSKeyframesRule:W.y,WebKitCSSKeyframesRule:W.y,CSSMediaRule:W.y,CSSNamespaceRule:W.y,CSSPageRule:W.y,CSSRule:W.y,CSSStyleRule:W.y,CSSSupportsRule:W.y,CSSViewportRule:W.y,CSSStyleDeclaration:W.ba,MSStyleCSSProperties:W.ba,CSS2Properties:W.ba,DataTransferItemList:W.dW,DeviceAcceleration:W.dX,HTMLDivElement:W.cb,XMLDocument:W.aO,Document:W.aO,DocumentFragment:W.cc,ShadowRoot:W.cc,DOMException:W.dY,DOMImplementation:W.cd,DOMPoint:W.dZ,DOMPointReadOnly:W.ce,DOMRectReadOnly:W.cf,DOMStringList:W.e_,DOMTokenList:W.e0,Element:W.a2,AnimationEvent:W.j,AnimationPlayerEvent:W.j,ApplicationCacheErrorEvent:W.j,AutocompleteErrorEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceLightEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,GamepadEvent:W.j,GeofencingEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RelatedEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCIceCandidateEvent:W.j,RTCPeerConnectionIceEvent:W.j,SecurityPolicyViolationEvent:W.j,ServicePortConnectEvent:W.j,ServiceWorkerMessageEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,Animation:W.h,ApplicationCache:W.h,DOMApplicationCache:W.h,OfflineResourceList:W.h,BatteryManager:W.h,CanvasCaptureMediaStreamTrack:W.h,CrossOriginServiceWorkerClient:W.h,EventSource:W.h,FileReader:W.h,FontFaceSet:W.h,MediaKeySession:W.h,MediaQueryList:W.h,MediaRecorder:W.h,MediaSource:W.h,MediaStream:W.h,MediaStreamTrack:W.h,MessagePort:W.h,MIDIAccess:W.h,NetworkInformation:W.h,Notification:W.h,Performance:W.h,PermissionStatus:W.h,PresentationAvailability:W.h,PresentationReceiver:W.h,PresentationRequest:W.h,RTCDTMFSender:W.h,RTCPeerConnection:W.h,webkitRTCPeerConnection:W.h,mozRTCPeerConnection:W.h,ScreenOrientation:W.h,ServicePortCollection:W.h,ServiceWorkerContainer:W.h,ServiceWorkerRegistration:W.h,SpeechRecognition:W.h,SpeechSynthesis:W.h,SpeechSynthesisUtterance:W.h,WorkerPerformance:W.h,BluetoothDevice:W.h,BluetoothRemoteGATTCharacteristic:W.h,USB:W.h,IDBDatabase:W.h,IDBOpenDBRequest:W.h,IDBVersionChangeRequest:W.h,IDBRequest:W.h,IDBTransaction:W.h,AnalyserNode:W.h,RealtimeAnalyserNode:W.h,AudioBufferSourceNode:W.h,AudioContext:W.h,webkitAudioContext:W.h,AudioDestinationNode:W.h,AudioNode:W.h,AudioSourceNode:W.h,BiquadFilterNode:W.h,ChannelMergerNode:W.h,AudioChannelMerger:W.h,ChannelSplitterNode:W.h,AudioChannelSplitter:W.h,ConvolverNode:W.h,DelayNode:W.h,DynamicsCompressorNode:W.h,GainNode:W.h,AudioGainNode:W.h,IIRFilterNode:W.h,MediaElementAudioSourceNode:W.h,MediaStreamAudioDestinationNode:W.h,MediaStreamAudioSourceNode:W.h,OfflineAudioContext:W.h,OscillatorNode:W.h,Oscillator:W.h,PannerNode:W.h,AudioPannerNode:W.h,webkitAudioPannerNode:W.h,ScriptProcessorNode:W.h,JavaScriptAudioNode:W.h,StereoPannerNode:W.h,WaveShaperNode:W.h,EventTarget:W.h,File:W.a3,FileList:W.ep,FileWriter:W.eq,HTMLFormElement:W.eu,Gamepad:W.a4,HTMLHeadElement:W.cj,History:W.ey,HTMLCollection:W.bC,HTMLFormControlsCollection:W.bC,HTMLOptionsCollection:W.bC,HTMLDocument:W.ck,XMLHttpRequest:W.cl,XMLHttpRequestUpload:W.bD,XMLHttpRequestEventTarget:W.bD,HTMLInputElement:W.eB,KeyboardEvent:W.aS,Location:W.eQ,MediaList:W.eW,MIDIOutput:W.eY,MIDIInput:W.bG,MIDIPort:W.bG,MimeType:W.a5,MimeTypeArray:W.eZ,PointerEvent:W.L,MouseEvent:W.L,DragEvent:W.L,Navigator:W.f8,Attr:W.q,Node:W.q,NodeIterator:W.dc,NodeList:W.bM,RadioNodeList:W.bM,Path2D:W.fh,Perspective:W.fk,Plugin:W.a6,PluginArray:W.fm,PositionValue:W.fp,PresentationConnection:W.fq,Range:W.dh,Rotation:W.fz,RTCDataChannel:W.dj,DataChannel:W.dj,HTMLSelectElement:W.fB,SharedWorker:W.fE,SourceBuffer:W.a7,SourceBufferList:W.fF,SpeechGrammar:W.a8,SpeechGrammarList:W.fH,SpeechRecognitionResult:W.a9,Storage:W.fM,CSSStyleSheet:W.W,StyleSheet:W.W,CalcLength:W.ag,KeywordValue:W.ag,LengthValue:W.ag,NumberValue:W.ag,SimpleLength:W.ag,TransformValue:W.ag,StyleValue:W.ag,HTMLTableElement:W.dn,HTMLTableRowElement:W.fU,HTMLTableSectionElement:W.fV,HTMLTemplateElement:W.bR,TextTrack:W.aa,TextTrackCue:W.X,VTTCue:W.X,TextTrackCueList:W.fY,TextTrackList:W.fZ,TimeRanges:W.h_,Touch:W.ab,TouchEvent:W.aY,TouchList:W.h3,TrackDefaultList:W.h4,Matrix:W.bi,Skew:W.bi,TransformComponent:W.bi,Translation:W.h6,TreeWalker:W.ds,CompositionEvent:W.aD,FocusEvent:W.aD,TextEvent:W.aD,SVGZoomEvent:W.aD,UIEvent:W.aD,URL:W.hc,VideoTrackList:W.he,VTTRegionList:W.hh,WebSocket:W.hi,WheelEvent:W.b_,Window:W.bU,DOMWindow:W.bU,Worker:W.hl,CompositorWorkerGlobalScope:W.b0,DedicatedWorkerGlobalScope:W.b0,ServiceWorkerGlobalScope:W.b0,SharedWorkerGlobalScope:W.b0,WorkerGlobalScope:W.b0,ClientRect:W.hw,ClientRectList:W.dw,DOMRectList:W.dw,CSSRuleList:W.hy,DocumentType:W.hz,DOMRect:W.hA,GamepadList:W.hV,HTMLFrameSetElement:W.hW,NamedNodeMap:W.dz,MozNamedAttrMap:W.dz,ServiceWorker:W.ie,SpeechRecognitionResultList:W.ii,StyleSheetList:W.ij,WorkerLocation:W.ir,WorkerNavigator:W.is,SVGAElement:P.dJ,SVGAnimateElement:P.aK,SVGAnimateMotionElement:P.aK,SVGAnimateTransformElement:P.aK,SVGAnimationElement:P.aK,SVGSetElement:P.aK,SVGFEBlendElement:P.e5,SVGFEColorMatrixElement:P.e6,SVGFEComponentTransferElement:P.e7,SVGFECompositeElement:P.e8,SVGFEConvolveMatrixElement:P.e9,SVGFEDiffuseLightingElement:P.ea,SVGFEDisplacementMapElement:P.eb,SVGFEFloodElement:P.ec,SVGFEGaussianBlurElement:P.ed,SVGFEImageElement:P.ee,SVGFEMergeElement:P.ef,SVGFEMorphologyElement:P.eg,SVGFEOffsetElement:P.eh,SVGFEPointLightElement:P.ei,SVGFESpecularLightingElement:P.ej,SVGFESpotLightElement:P.ek,SVGFETileElement:P.el,SVGFETurbulenceElement:P.em,SVGFilterElement:P.er,SVGForeignObjectElement:P.et,SVGCircleElement:P.ac,SVGEllipseElement:P.ac,SVGLineElement:P.ac,SVGPathElement:P.ac,SVGPolygonElement:P.ac,SVGPolylineElement:P.ac,SVGGeometryElement:P.ac,SVGClipPathElement:P.aA,SVGDefsElement:P.aA,SVGGElement:P.aA,SVGSwitchElement:P.aA,SVGGraphicsElement:P.aA,SVGImageElement:P.ez,SVGLength:P.ap,SVGLengthList:P.eK,SVGMarkerElement:P.eT,SVGMaskElement:P.eU,SVGNumber:P.ar,SVGNumberList:P.fb,SVGPatternElement:P.fi,SVGPoint:P.fn,SVGPointList:P.fo,SVGRect:P.ft,SVGRectElement:P.fu,SVGScriptElement:P.bO,SVGStringList:P.fR,SVGDescElement:P.E,SVGDiscardElement:P.E,SVGFEDistantLightElement:P.E,SVGFEFuncAElement:P.E,SVGFEFuncBElement:P.E,SVGFEFuncGElement:P.E,SVGFEFuncRElement:P.E,SVGFEMergeNodeElement:P.E,SVGMetadataElement:P.E,SVGStopElement:P.E,SVGStyleElement:P.E,SVGTitleElement:P.E,SVGComponentTransferFunctionElement:P.E,SVGElement:P.E,SVGSVGElement:P.fS,SVGSymbolElement:P.fT,SVGTextContentElement:P.dp,SVGTextPathElement:P.fX,SVGTSpanElement:P.bS,SVGTextElement:P.bS,SVGTextPositioningElement:P.bS,SVGTransform:P.as,SVGTransformList:P.h5,SVGUseElement:P.hd,SVGViewElement:P.hf,SVGViewSpec:P.hg,SVGLinearGradientElement:P.bV,SVGRadialGradientElement:P.bV,SVGGradientElement:P.bV,SVGCursorElement:P.ia,SVGFEDropShadowElement:P.ib,SVGMPathElement:P.ic,AudioBuffer:P.dN,WebGLRenderingContext:P.fx,WebGL2RenderingContext:P.fy,WebGL2RenderingContextBase:P.iq,SQLResultSetRowList:P.fI})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,Credential:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMStringMap:true,EffectModel:true,Entry:true,FederatedCredential:true,FileEntry:true,FileError:true,Stream:true,DOMFileSystem:true,FontFace:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageData:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PasswordCredential:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,ServicePort:true,SharedArrayBuffer:true,SourceInfo:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,TrackDefault:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPreserveAspectRatio:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,AudioTrack:true,AudioTrackList:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,CSSCharsetRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DocumentFragment:true,ShadowRoot:true,DOMException:true,DOMImplementation:true,DOMPoint:true,DOMPointReadOnly:false,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AudioDestinationNode:true,AudioNode:true,AudioSourceNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OfflineAudioContext:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Navigator:true,Attr:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Path2D:true,Perspective:true,Plugin:true,PluginArray:true,PositionValue:true,PresentationConnection:true,Range:true,Rotation:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,SharedWorker:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,CalcLength:true,KeywordValue:true,LengthValue:true,NumberValue:true,SimpleLength:true,TransformValue:true,StyleValue:false,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,Matrix:true,Skew:true,TransformComponent:false,Translation:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,SVGZoomEvent:true,UIEvent:false,URL:true,VideoTrackList:true,VTTRegionList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.d8.$nativeSuperclassTag="ArrayBufferView"
H.bJ.$nativeSuperclassTag="ArrayBufferView"
H.bK.$nativeSuperclassTag="ArrayBufferView"
H.d9.$nativeSuperclassTag="ArrayBufferView"
H.bI.$nativeSuperclassTag="ArrayBufferView"
H.bL.$nativeSuperclassTag="ArrayBufferView"
H.da.$nativeSuperclassTag="ArrayBufferView"
W.bx.$nativeSuperclassTag="EventTarget"
W.bA.$nativeSuperclassTag="EventTarget"
W.bw.$nativeSuperclassTag="EventTarget"
W.bz.$nativeSuperclassTag="EventTarget"
W.bv.$nativeSuperclassTag="EventTarget"
W.by.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.l9(T.l6(),b)},[])
else (function(b){H.l9(T.l6(),b)})([])})})()