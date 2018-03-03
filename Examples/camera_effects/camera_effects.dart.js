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
a[c]=function(){a[c]=function(){H.ni(b)}
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
return d?function(e){if(t===null)t=H.jh(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.jh(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.jh(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={j4:function j4(a){this.a=a},
j9:function(a,b,c,d){if(!!a.$isc)return new H.e3(a,b,[c,d])
return new H.d8(a,b,[c,d])},
d1:function(){return new P.ah("No element")},
mb:function(){return new P.ah("Too many elements")},
ma:function(){return new P.ah("Too few elements")},
dn:function(a,b,c,d){if(c-b<=32)H.mq(a,b,c,d)
else H.mp(a,b,c,d)},
mq:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.Z(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.am(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
mp:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.d(t>32)
s=C.b.P(t+1,6)
r=a3+s
q=a4-s
p=C.b.P(a3+a4,2)
o=p-s
n=p+s
t=J.Z(a2)
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
if(J.C(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=t.h(a2,e)
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
H.dn(a2,a3,g-2,a5)
H.dn(a2,f+2,a4,a5)
if(a0)return
if(g<r&&f>q){for(;J.C(a5.$2(t.h(a2,g),l),0);)++g
for(;J.C(a5.$2(t.h(a2,f),j),0);)--f
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
break}}H.dn(a2,g,f,a5)}else H.dn(a2,g,f,a5)},
c:function c(){},
b6:function b6(){},
d7:function d7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
d8:function d8(a,b,c){this.a=a
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
bD:function bD(a,b,c){this.a=a
this.b=b
this.$ti=c},
dt:function dt(a,b,c){this.a=a
this.b=b
this.$ti=c},
hc:function hc(a,b,c){this.a=a
this.b=b
this.$ti=c},
cj:function cj(){},
dB:function(a,b){var t=a.ad(b)
if(!u.globalState.d.cy)u.globalState.f.ak()
return t},
iK:function(){--u.globalState.f.b
H.d(u.globalState.f.b>=0)},
l1:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.r(s).$isb)throw H.e(P.c8("Arguments to main must be a List: "+H.f(s)))
u.globalState=new H.hU(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$k7()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.ht(P.j8(null,H.aW),0)
r=P.m
s.seB(new H.aq(0,null,null,null,null,null,0,[r,H.aV]))
s.seD(new H.aq(0,null,null,null,null,null,0,[r,null]))
if(s.x){q=new H.hT()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.m5,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.mF)}if(u.globalState.x)return
s=u.globalState.a++
q=P.ag(null,null,null,r)
p=new H.ba(0,null,!1)
o=new H.aV(s,new H.aq(0,null,null,null,null,null,0,[r,H.ba]),q,u.createNewIsolate(),p,new H.ap(H.iP()),new H.ap(H.iP()),!1,!1,[],P.ag(null,null,null,null),null,null,!1,!0,P.ag(null,null,null,null))
q.l(0,0)
o.bp(0,p)
u.globalState.e=o
u.globalState.z.i(0,s,o)
u.globalState.d=o
if(H.bk(a,{func:1,args:[,]}))o.ad(new H.iQ(t,a))
else if(H.bk(a,{func:1,args:[,,]}))o.ad(new H.iR(t,a))
else o.ad(a)
u.globalState.f.ak()},
mF:function(a){var t=P.az(["command","print","msg",a])
return new H.aj(!0,P.c1(null,P.m)).H(t)},
m7:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.m8()
return},
m8:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.e(new P.u("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.e(new P.u('Cannot extract URI from "'+t+'"'))},
m5:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.aU(!0,[]).T(b.data)
s=J.Z(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.n7(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.aU(!0,[]).T(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.aU(!0,[]).T(s.h(t,"replyTo"))
s=u.globalState.a++
k=P.m
j=P.ag(null,null,null,k)
i=new H.ba(0,null,!1)
h=new H.aV(s,new H.aq(0,null,null,null,null,null,0,[k,H.ba]),j,u.createNewIsolate(),i,new H.ap(H.iP()),new H.ap(H.iP()),!1,!1,[],P.ag(null,null,null,null),null,null,!1,!0,P.ag(null,null,null,null))
j.l(0,0)
h.bp(0,i)
u.globalState.f.a.O(0,new H.aW(h,new H.eC(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.ak()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.lD(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.ak()
break
case"close":u.globalState.ch.aj(0,$.$get$k8().h(0,a))
a.terminate()
u.globalState.f.ak()
break
case"log":H.m4(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
k=P.az(["command","print","msg",t])
k=new H.aj(!0,P.c1(null,P.m)).H(k)
s.toString
self.postMessage(k)}else P.ad(s.h(t,"msg"))
break
case"error":throw H.e(s.h(t,"msg"))}},
m4:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.az(["command","log","msg",a])
r=new H.aj(!0,P.c1(null,P.m)).H(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.J(q)
t=H.ak(q)
s=P.ci(t)
throw H.e(s)}},
m6:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.kc=$.kc+("_"+s)
$.kd=$.kd+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.G(0,["spawned",new H.bg(s,r),q,t.r])
r=new H.eD(a,b,c,d,t)
if(e){t.bL(q,q)
u.globalState.f.a.O(0,new H.aW(t,r,"start isolate"))}else r.$0()},
mr:function(a,b){var t=new H.fV(!0,!1,null)
t.df(a,b)
return t},
mH:function(a){return new H.aU(!0,[]).T(new H.aj(!1,P.c1(null,P.m)).H(a))},
iQ:function iQ(a,b){this.a=a
this.b=b},
iR:function iR(a,b){this.a=a
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
aV:function aV(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
ht:function ht(a,b){this.a=a
this.b=b},
hu:function hu(a){this.a=a},
aW:function aW(a,b,c){this.a=a
this.b=b
this.c=c},
hT:function hT(){},
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
hl:function hl(){},
bg:function bg(a,b){this.b=a
this.a=b},
hV:function hV(a,b){this.a=a
this.b=b},
c3:function c3(a,b,c){this.b=a
this.c=b
this.a=c},
ba:function ba(a,b,c){this.a=a
this.b=b
this.c=c},
fV:function fV(a,b,c){this.a=a
this.b=b
this.c=c},
fW:function fW(a,b){this.a=a
this.b=b},
fX:function fX(a,b){this.a=a
this.b=b},
ap:function ap(a){this.a=a},
aj:function aj(a,b){this.a=a
this.b=b},
aU:function aU(a,b){this.a=a
this.b=b},
n1:function(a){return u.types[a]},
n9:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.r(a).$isn},
f:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aG(a)
if(typeof t!=="string")throw H.e(H.av(a))
return t},
mm:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.fp(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aQ:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
dj:function(a){var t,s,r,q,p,o,n,m
t=J.r(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.B||!!J.r(a).$isaS){p=C.q(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.d.aC(q,0)===36)q=C.d.cU(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.dC(H.iy(a),0,null),u.mangledGlobalNames)},
fl:function(a){return"Instance of '"+H.dj(a)+"'"},
P:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mk:function(a){return a.b?H.P(a).getUTCFullYear()+0:H.P(a).getFullYear()+0},
mi:function(a){return a.b?H.P(a).getUTCMonth()+1:H.P(a).getMonth()+1},
me:function(a){return a.b?H.P(a).getUTCDate()+0:H.P(a).getDate()+0},
mf:function(a){return a.b?H.P(a).getUTCHours()+0:H.P(a).getHours()+0},
mh:function(a){return a.b?H.P(a).getUTCMinutes()+0:H.P(a).getMinutes()+0},
mj:function(a){return a.b?H.P(a).getUTCSeconds()+0:H.P(a).getSeconds()+0},
mg:function(a){return a.b?H.P(a).getUTCMilliseconds()+0:H.P(a).getMilliseconds()+0},
kb:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.av(a))
return a[b]},
M:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ao(!0,b,"index",null)
t=J.dH(a)
if(b<0||C.b.cB(b,t))return P.z(b,a,"index",null,t)
return P.fm(b,"index",null)},
av:function(a){return new P.ao(!0,a,null,null)},
e:function(a){var t
if(a==null)a=new P.b9()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.l2})
t.name=""}else t.toString=H.l2
return t},
l2:function(){return J.aG(this.dartException)},
A:function(a){throw H.e(a)},
ae:function(a){throw H.e(new P.a1(a))},
au:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.h1(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
h2:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
kn:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
j6:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.eH(a,s,t?null:b.receiver)},
J:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.iS(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aL(r,16)&8191)===10)switch(q){case 438:return t.$1(H.j6(H.f(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.f(s)+" (Error "+q+")"
return t.$1(new H.di(p,null))}}if(a instanceof TypeError){o=$.$get$kh()
n=$.$get$ki()
m=$.$get$kj()
l=$.$get$kk()
k=$.$get$ko()
j=$.$get$kp()
i=$.$get$km()
$.$get$kl()
h=$.$get$kr()
g=$.$get$kq()
f=o.L(s)
if(f!=null)return t.$1(H.j6(s,f))
else{f=n.L(s)
if(f!=null){f.method="call"
return t.$1(H.j6(s,f))}else{f=m.L(s)
if(f==null){f=l.L(s)
if(f==null){f=k.L(s)
if(f==null){f=j.L(s)
if(f==null){f=i.L(s)
if(f==null){f=l.L(s)
if(f==null){f=h.L(s)
if(f==null){f=g.L(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.di(s,f==null?null:f.method))}}return t.$1(new H.h4(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.dp()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.ao(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.dp()
return a},
ak:function(a){var t
if(a==null)return new H.dz(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dz(a,null)},
nd:function(a){if(a==null||typeof a!='object')return J.an(a)
else return H.aQ(a)},
n_:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=a.length
for(r=0;r<s;){q=r+1
H.d(t)
p=a[r]
r=q+1
H.d(t)
b.i(0,p,a[q])}return b},
n8:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dB(b,new H.iF(a))
case 1:return H.dB(b,new H.iG(a,d))
case 2:return H.dB(b,new H.iH(a,d,e))
case 3:return H.dB(b,new H.iI(a,d,e,f))
case 4:return H.dB(b,new H.iJ(a,d,e,f,g))}throw H.e(P.ci("Unsupported number of arguments for wrapped closure"))},
aE:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.n8)
a.$identity=t
return t},
lS:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.r(c).$isb){t.$reflectionInfo=c
r=H.mm(t).r}else r=c
q=d?Object.create(new H.fB().constructor.prototype):Object.create(new H.bo(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.jI(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.n1,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.jF:H.j_
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.e("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.jI(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
lP:function(a,b,c,d){var t=H.j_
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
jI:function(a,b,c){var t,s,r,q
if(c)return H.lR(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.lP(s,b==null?r!=null:b!==r,t,b)
return q},
lQ:function(a,b,c,d){var t,s
t=H.j_
s=H.jF
switch(b?-1:a){case 0:throw H.e(new H.fu("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
lR:function(a,b){var t,s,r,q
H.lO()
t=$.jE
if(t==null){t=H.jD("receiver")
$.jE=t}s=b.$stubName
r=b.length
q=a[s]
t=H.lQ(r,b==null?q!=null:b!==q,s,b)
return t},
jh:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.r(c).$isb){c.fixed$length=Array
t=c}else t=c
return H.lS(a,b,t,!!d,e,f)},
j_:function(a){return a.a},
jF:function(a){return a.c},
lO:function(){var t=$.jG
if(t==null){t=H.jD("self")
$.jG=t}return t},
jD:function(a){var t,s,r,q,p
t=new H.bo("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
nz:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.aB(a,"String"))},
ny:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aB(a,"num"))},
mU:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.aB(a,"bool"))},
n7:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.aB(a,"int"))},
nf:function(a,b){throw H.e(H.aB(a,b.substring(3)))},
ne:function(a,b){var t=J.Z(b)
throw H.e(H.jH(H.dj(a),t.bf(b,3,t.gj(b))))},
jl:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.r(a)[b])return a
H.nf(a,b)},
aw:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.r(a)[b]
else t=!0
if(t)return a
H.ne(a,b)},
nx:function(a){if(a==null)return a
if(!!J.r(a).$isb)return a
throw H.e(H.aB(a,"List"))},
kQ:function(a){var t=J.r(a)
return"$S" in t?t.$S():null},
bk:function(a,b){var t
if(a==null)return!1
t=H.kQ(a)
return t==null?!1:H.kX(t,b)},
nv:function(a,b){var t,s
if(a==null)return a
if($.je)return a
$.je=!0
try{if(H.bk(a,b))return a
t=H.aF(b,null)
s=H.aB(a,t)
throw H.e(s)}finally{$.je=!1}},
aB:function(a,b){return new H.h3("type '"+H.dj(a)+"' is not a subtype of type '"+b+"'")},
jH:function(a,b){return new H.dQ("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
aD:function(a){if(!0===a)return!1
if(!!J.r(a).$isj2)a=a.$0()
if(typeof a==="boolean")return!a
throw H.e(H.aB(a,"bool"))},
aY:function(a){throw H.e(new H.hf(a))},
d:function(a){if(H.aD(a))throw H.e(new P.c9(null))},
ni:function(a){throw H.e(new P.dU(a))},
iP:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
kU:function(a){return u.getIsolateTag(a)},
H:function(a){return new H.aC(a,null)},
B:function(a,b){H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
iy:function(a){if(a==null)return
return a.$ti},
kV:function(a,b){return H.jo(a["$as"+H.f(b)],H.iy(a))},
ac:function(a,b,c){var t,s
t=H.kV(a,b)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
al:function(a,b){var t,s
t=H.iy(a)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
aF:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.d(!0)
H.d(!0)
return a[0].name+H.dC(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.f(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aF(t,b)
return H.mJ(a,b)}return"unknown-reified-type"},
mJ:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aF(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aF(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aF(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.mZ(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aF(l[j],b)+(" "+H.f(j))}q+="}"}return"("+q+") => "+t},
dC:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=new P.bR("")
for(r=b,q=!0,p=!0;H.d(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.d(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aF(o,c)}return p?"":"<"+s.k(0)+">"},
iz:function(a){var t,s
if(a instanceof H.b2){t=H.kQ(a)
if(t!=null)return H.aF(t,null)}s=J.r(a).constructor.name
if(a==null)return s
return s+H.dC(a.$ti,0,null)},
jo:function(a,b){if(a==null)return b
H.d(typeof a=="function")
H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.jm(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.jm(a,null,b)
return b},
c7:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.iy(a)
s=J.r(a)
if(s[b]==null)return!1
return H.kI(H.jo(s[d],t),c)},
dD:function(a,b,c,d){if(a==null)return a
if(H.c7(a,b,c,d))return a
throw H.e(H.jH(H.dj(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dC(c,0,null),u.mangledGlobalNames)))},
nt:function(a,b,c,d){if(a==null)return a
if(H.c7(a,b,c,d))return a
throw H.e(H.aB(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dC(c,0,null),u.mangledGlobalNames)))},
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
if(!H.a_(r,b[p]))return!1}return!0},
mV:function(a,b,c){return H.jm(a,b,H.kV(b,c))},
a_:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.name==="aA")return!0
if('func' in b)return H.kX(a,b)
if('func' in a)return b.name==="j2"||b.name==="p"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.d(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.d(!0)
q=b[0]}else q=b
if(q!==s){p=H.aF(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.kI(H.jo(o,t),r)},
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
if(!(H.a_(o,n)||H.a_(n,o)))return!1}return!0},
mQ:function(a,b){var t,s,r,q,p,o
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
kX:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
if(n===m){if(!H.kH(r,q,!1))return!1
if(!H.kH(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.d(j)
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
if(!(H.a_(g,f)||H.a_(f,g)))return!1}}return H.mQ(a.named,b.named)},
jm:function(a,b,c){H.d(typeof a=="function")
H.d(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
nA:function(a){var t=$.ji
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
nw:function(a){return H.aQ(a)},
nu:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
na:function(a){var t,s,r,q,p,o
H.d(!(a instanceof P.p))
t=$.ji.$1(a)
s=$.iu[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iE[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.kG.$2(a,t)
if(t!=null){s=$.iu[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iE[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.jn(r)
$.iu[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.iE[t]=r
return r}if(p==="-"){o=H.jn(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.kZ(a,r)
if(p==="*")throw H.e(new P.bV(t))
if(u.leafTags[t]===true){o=H.jn(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.kZ(a,r)},
kZ:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.iN(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
jn:function(a){return J.iN(a,!1,null,!!a.$isn)},
nc:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.iN(t,!1,null,!!t.$isn)
else return J.iN(t,c,null,null)},
n5:function(){if(!0===$.jk)return
$.jk=!0
H.n6()},
n6:function(){var t,s,r,q,p,o,n,m
$.iu=Object.create(null)
$.iE=Object.create(null)
H.n4()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.l_.$1(p)
if(o!=null){n=H.nc(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
n4:function(){var t,s,r,q,p,o,n
t=C.F()
t=H.bj(C.C,H.bj(C.H,H.bj(C.p,H.bj(C.p,H.bj(C.G,H.bj(C.D,H.bj(C.E(C.q),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.ji=new H.iB(p)
$.kG=new H.iC(o)
$.l_=new H.iD(n)},
bj:function(a,b){return a(b)||b},
nh:function(a,b,c){var t=a.indexOf(b,c)
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
h1:function h1(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
di:function di(a,b){this.a=a
this.b=b},
eH:function eH(a,b,c){this.a=a
this.b=b
this.c=c},
h4:function h4(a){this.a=a},
iS:function iS(a){this.a=a},
dz:function dz(a,b){this.a=a
this.b=b},
iF:function iF(a){this.a=a},
iG:function iG(a,b){this.a=a
this.b=b},
iH:function iH(a,b,c){this.a=a
this.b=b
this.c=c},
iI:function iI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iJ:function iJ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
b2:function b2(){},
fP:function fP(){},
fB:function fB(){},
bo:function bo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h3:function h3(a){this.a=a},
dQ:function dQ(a){this.a=a},
fu:function fu(a){this.a=a},
hf:function hf(a){this.a=a},
aC:function aC(a,b){this.a=a
this.b=b},
aq:function aq(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
eG:function eG(a){this.a=a},
eJ:function eJ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
eK:function eK(a,b){this.a=a
this.$ti=b},
eL:function eL(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
iB:function iB(a){this.a=a},
iC:function iC(a){this.a=a},
iD:function iD(a){this.a=a},
T:function(a){return a},
io:function(a){var t,s,r
if(!!J.r(a).$isl)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
b8:function b8(){},
aP:function aP(){},
f_:function f_(){},
da:function da(){},
db:function db(){},
dc:function dc(){},
d9:function d9(){},
f0:function f0(){},
f1:function f1(){},
f2:function f2(){},
f3:function f3(){},
f4:function f4(){},
f5:function f5(){},
dd:function dd(){},
f6:function f6(){},
bI:function bI(){},
bJ:function bJ(){},
bK:function bK(){},
bL:function bL(){},
mZ:function(a){var t=H.B(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
iO:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
r:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d4.prototype
return J.d3.prototype}if(typeof a=="string")return J.aN.prototype
if(a==null)return J.d5.prototype
if(typeof a=="boolean")return J.eF.prototype
if(a.constructor==Array)return J.aM.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aO.prototype
return a}if(a instanceof P.p)return a
return J.ix(a)},
iN:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ix:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.jk==null){H.n5()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.e(new P.bV("Return interceptor for "+H.f(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$j5()]
if(p!=null)return p
p=H.na(a)
if(p!=null)return p
if(typeof a=="function")return C.I
s=Object.getPrototypeOf(a)
if(s==null)return C.u
if(s===Object.prototype)return C.u
if(typeof q=="function"){Object.defineProperty(q,$.$get$j5(),{value:C.k,enumerable:false,writable:true,configurable:true})
return C.k}return C.k},
Z:function(a){if(typeof a=="string")return J.aN.prototype
if(a==null)return a
if(a.constructor==Array)return J.aM.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aO.prototype
return a}if(a instanceof P.p)return a
return J.ix(a)},
iw:function(a){if(a==null)return a
if(a.constructor==Array)return J.aM.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aO.prototype
return a}if(a instanceof P.p)return a
return J.ix(a)},
kS:function(a){if(typeof a=="number")return J.bB.prototype
if(a==null)return a
if(!(a instanceof P.p))return J.aS.prototype
return a},
n0:function(a){if(typeof a=="number")return J.bB.prototype
if(typeof a=="string")return J.aN.prototype
if(a==null)return a
if(!(a instanceof P.p))return J.aS.prototype
return a},
kT:function(a){if(typeof a=="string")return J.aN.prototype
if(a==null)return a
if(!(a instanceof P.p))return J.aS.prototype
return a},
j:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aO.prototype
return a}if(a instanceof P.p)return a
return J.ix(a)},
C:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.r(a).A(a,b)},
am:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.kS(a).ax(a,b)},
l5:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kS(a).ay(a,b)},
b_:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.n9(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.Z(a).h(a,b)},
l6:function(a,b,c,d){return J.j(a).dr(a,b,c,d)},
jp:function(a,b){return J.kT(a).aC(a,b)},
bl:function(a,b){return J.j(a).dL(a,b)},
l7:function(a,b,c,d){return J.j(a).dM(a,b,c,d)},
l8:function(a,b,c){return J.j(a).dN(a,b,c)},
jq:function(a,b){return J.j(a).bK(a,b)},
iT:function(a,b){return J.j(a).K(a,b)},
jr:function(a,b,c){return J.j(a).bN(a,b,c)},
l9:function(a,b){return J.j(a).e1(a,b)},
dE:function(a,b,c){return J.j(a).bO(a,b,c)},
bm:function(a,b,c){return J.j(a).bP(a,b,c)},
dF:function(a,b){return J.j(a).e4(a,b)},
la:function(a,b){return J.j(a).bQ(a,b)},
lb:function(a,b,c){return J.j(a).bR(a,b,c)},
js:function(a,b,c,d){return J.j(a).bS(a,b,c,d)},
lc:function(a,b,c,d,e){return J.j(a).bT(a,b,c,d,e)},
ld:function(a,b){return J.n0(a).a2(a,b)},
iU:function(a,b,c){return J.Z(a).e9(a,b,c)},
iV:function(a){return J.j(a).bV(a)},
le:function(a){return J.j(a).bW(a)},
lf:function(a){return J.j(a).bY(a)},
lg:function(a){return J.j(a).ef(a)},
lh:function(a,b){return J.j(a).bZ(a,b)},
li:function(a,b){return J.j(a).c_(a,b)},
lj:function(a,b,c,d){return J.j(a).c0(a,b,c,d)},
lk:function(a,b,c,d,e){return J.j(a).el(a,b,c,d,e)},
ll:function(a,b,c,d,e){return J.j(a).c1(a,b,c,d,e)},
lm:function(a,b,c,d,e,f){return J.j(a).em(a,b,c,d,e,f)},
ln:function(a,b){return J.iw(a).t(a,b)},
dG:function(a,b){return J.j(a).c2(a,b)},
lo:function(a,b){return J.j(a).c3(a,b)},
lp:function(a){return J.j(a).en(a)},
lq:function(a){return J.j(a).ge0(a)},
an:function(a){return J.r(a).gv(a)},
bn:function(a){return J.iw(a).gu(a)},
dH:function(a){return J.Z(a).gj(a)},
lr:function(a){return J.j(a).gaW(a)},
ls:function(a){return J.r(a).gB(a)},
lt:function(a){return J.j(a).geM(a)},
lu:function(a){return J.j(a).gcz(a)},
iW:function(a){return J.j(a).gm(a)},
iX:function(a){return J.j(a).gn(a)},
jt:function(a){return J.j(a).gU(a)},
iY:function(a,b){return J.j(a).a4(a,b)},
lv:function(a){return J.j(a).av(a)},
lw:function(a){return J.j(a).b2(a)},
lx:function(a,b){return J.j(a).b3(a,b)},
ly:function(a,b,c){return J.j(a).b4(a,b,c)},
ju:function(a,b,c){return J.j(a).b7(a,b,c)},
jv:function(a,b,c){return J.j(a).c6(a,b,c)},
lz:function(a,b){return J.j(a).c7(a,b)},
lA:function(a,b){return J.iw(a).ca(a,b)},
lB:function(a,b,c){return J.j(a).cb(a,b,c)},
lC:function(a){return J.iw(a).eG(a)},
lD:function(a,b){return J.j(a).G(a,b)},
lE:function(a,b,c,d){return J.j(a).be(a,b,c,d)},
lF:function(a,b,c,d,e,f,g){return J.j(a).cg(a,b,c,d,e,f,g)},
lG:function(a,b,c,d){return J.j(a).ci(a,b,c,d)},
dI:function(a,b,c,d){return J.j(a).cj(a,b,c,d)},
lH:function(a){return J.kT(a).eP(a)},
aG:function(a){return J.r(a).k(a)},
lI:function(a,b,c,d){return J.j(a).eR(a,b,c,d)},
lJ:function(a,b,c){return J.j(a).ck(a,b,c)},
lK:function(a,b,c){return J.j(a).cl(a,b,c)},
iZ:function(a,b,c){return J.j(a).cm(a,b,c)},
lL:function(a,b,c){return J.j(a).cn(a,b,c)},
jw:function(a,b,c){return J.j(a).co(a,b,c)},
jx:function(a,b,c){return J.j(a).cp(a,b,c)},
jy:function(a,b,c){return J.j(a).cq(a,b,c)},
jz:function(a,b,c,d){return J.j(a).cr(a,b,c,d)},
jA:function(a,b,c,d){return J.j(a).cs(a,b,c,d)},
lM:function(a,b){return J.j(a).cu(a,b)},
lN:function(a,b,c){return J.j(a).eS(a,b,c)},
jB:function(a,b,c,d,e,f,g){return J.j(a).cw(a,b,c,d,e,f,g)},
a:function a(){},
eF:function eF(){},
d5:function d5(){},
bC:function bC(){},
ff:function ff(){},
aS:function aS(){},
aO:function aO(){},
aM:function aM(a){this.$ti=a},
j3:function j3(a){this.$ti=a},
dM:function dM(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bB:function bB(){},
d4:function d4(){},
d3:function d3(){},
aN:function aN(){}},P={
mu:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.mR()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.aE(new P.hh(t),1)).observe(s,{childList:true})
return new P.hg(t,s,r)}else if(self.setImmediate!=null)return P.mS()
return P.mT()},
mv:function(a){++u.globalState.f.b
self.scheduleImmediate(H.aE(new P.hi(a),0))},
mw:function(a){++u.globalState.f.b
self.setImmediate(H.aE(new P.hj(a),0))},
mx:function(a){P.ja(C.m,a)},
kB:function(a,b){if(H.bk(a,{func:1,args:[P.aA,P.aA]})){b.toString
return a}else{b.toString
return a}},
m1:function(a,b,c){var t
if(a==null)a=new P.b9()
t=$.t
if(t!==C.c)t.toString
t=new P.E(0,t,null,[c])
t.br(a,b)
return t},
m2:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.E(0,$.t,null,[P.b])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.eu(t,!1,b,s)
try{for(m=0,l=0;m<1;++m){q=a[m]
p=l
q.b_(new P.et(t,!1,b,s,p),r)
l=++t.b}if(l===0){l=new P.E(0,$.t,null,[null])
l.bq(C.r)
return l}k=new Array(l)
k.fixed$length=Array
t.a=k}catch(j){o=H.J(j)
n=H.ak(j)
if(t.b===0||!1)return P.m1(o,n,null)
else{t.c=o
t.d=n}}return s},
mI:function(a,b,c){$.t.toString
a.F(b,c)},
mA:function(a,b){var t=new P.E(0,$.t,null,[b])
H.d(!0)
t.a=4
t.c=a
return t},
kw:function(a,b){var t,s,r
H.d(b.a<4)
H.d(!(a instanceof P.E))
H.d(b.a===0)
b.a=1
try{a.b_(new P.hD(b),new P.hE(b))}catch(r){t=H.J(r)
s=H.ak(r)
P.ng(new P.hF(b,t,s))}},
hC:function(a,b){var t,s,r,q
H.d(b.a<=1)
for(;t=a.a,s=t===2,s;){H.d(s)
a=a.c}s=b.a
if(t>=4){H.d(s<4)
r=b.c
b.c=null
q=b.aa(r)
H.d(b.a<4)
H.d(a.a>=4)
b.a=a.a
b.c=a.c
P.bf(b,q)}else{q=b.c
H.d(s<=1)
b.a=2
b.c=a
a.bE(q)}},
bf:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.ip(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bf(t.a,b)}s=t.a
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
P.ip(null,null,p,o,s)
return}s=$.t
if(s==null?l!=null:s!==l){H.d(l!=null)
s=$.t
H.d(l==null?s!=null:l!==s)
j=$.t
$.t=l
i=j}else i=null
s=b.c
if(s===8)new P.hK(t,r,q,b).$0()
else if(p){if((s&1)!==0)new P.hJ(r,b,m).$0()}else if((s&2)!==0)new P.hI(t,r,b).$0()
if(i!=null){H.d(!0)
$.t=i}s=r.b
if(!!J.r(s).$isaL){if(s.a>=4){H.d(o.a<4)
h=o.c
o.c=null
b=o.aa(h)
H.d(o.a<4)
H.d(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.hC(s,o)
return}}g=b.b
H.d(g.a<4)
h=g.c
g.c=null
b=g.aa(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.d(!o)
g.a=4
g.c=p}else{H.d(!o)
g.a=8
g.c=p}t.a=g
s=g}},
mL:function(){var t,s
for(;t=$.bh,t!=null;){$.c5=null
s=t.b
$.bh=s
if(s==null)$.c4=null
t.a.$0()}},
mO:function(){$.jf=!0
try{P.mL()}finally{$.c5=null
$.jf=!1
if($.bh!=null)$.$get$jc().$1(P.kJ())}},
kE:function(a){var t=new P.du(a,null)
if($.bh==null){$.c4=t
$.bh=t
if(!$.jf)$.$get$jc().$1(P.kJ())}else{$.c4.b=t
$.c4=t}},
mN:function(a){var t,s,r
t=$.bh
if(t==null){P.kE(a)
$.c5=$.c4
return}s=new P.du(a,null)
r=$.c5
if(r==null){s.b=t
$.c5=s
$.bh=s}else{s.b=r.b
r.b=s
$.c5=s
if(s.b==null)$.c4=s}},
ng:function(a){var t=$.t
if(C.c===t){P.bi(null,null,C.c,a)
return}t.toString
P.bi(null,null,t,t.aQ(a))},
mG:function(a,b,c){var t=a.e5(0)
if(!!J.r(t).$isaL&&t!==$.$get$k5())t.eT(new P.im(b,c))
else b.a7(c)},
ms:function(a,b){var t=$.t
if(t===C.c){t.toString
return P.ja(a,b)}return P.ja(a,t.aQ(b))},
ja:function(a,b){var t=C.b.P(a.a,1000)
return H.mr(t<0?0:t,b)},
jb:function(a){var t,s
H.d(a!=null)
t=$.t
H.d(a==null?t!=null:a!==t)
s=$.t
$.t=a
return s},
ip:function(a,b,c,d,e){var t={}
t.a=d
P.mN(new P.iq(t,e))},
kC:function(a,b,c,d){var t,s
if($.t===c)return d.$0()
t=P.jb(c)
try{s=d.$0()
return s}finally{s=t
H.d(s!=null)
$.t=s}},
kD:function(a,b,c,d,e){var t,s
if($.t===c)return d.$1(e)
t=P.jb(c)
try{s=d.$1(e)
return s}finally{s=t
H.d(s!=null)
$.t=s}},
mM:function(a,b,c,d,e,f){var t,s
if($.t===c)return d.$2(e,f)
t=P.jb(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.d(s!=null)
$.t=s}},
bi:function(a,b,c,d){var t=C.c!==c
if(t)d=!(!t||!1)?c.aQ(d):c.e2(d)
P.kE(d)},
hh:function hh(a){this.a=a},
hg:function hg(a,b,c){this.a=a
this.b=b
this.c=c},
hi:function hi(a){this.a=a},
hj:function hj(a){this.a=a},
eu:function eu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
et:function et(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hn:function hn(){},
dv:function dv(a,b){this.a=a
this.$ti=b},
id:function id(a,b){this.a=a
this.$ti=b},
be:function be(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
E:function E(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hz:function hz(a,b){this.a=a
this.b=b},
hH:function hH(a,b){this.a=a
this.b=b},
hD:function hD(a){this.a=a},
hE:function hE(a){this.a=a},
hF:function hF(a,b,c){this.a=a
this.b=b
this.c=c},
hB:function hB(a,b){this.a=a
this.b=b},
hG:function hG(a,b){this.a=a
this.b=b},
hA:function hA(a,b,c){this.a=a
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
bQ:function bQ(){},
fI:function fI(a){this.a=a},
fJ:function fJ(a,b){this.a=a
this.b=b},
fG:function fG(a,b,c){this.a=a
this.b=b
this.c=c},
fH:function fH(a){this.a=a},
fF:function fF(){},
im:function im(a,b){this.a=a
this.b=b},
b0:function b0(a,b){this.a=a
this.b=b},
il:function il(){},
iq:function iq(a,b){this.a=a
this.b=b},
hX:function hX(){},
hZ:function hZ(a,b){this.a=a
this.b=b},
hY:function hY(a,b){this.a=a
this.b=b},
i_:function i_(a,b){this.a=a
this.b=b},
v:function(){return new H.aq(0,null,null,null,null,null,0,[null,null])},
az:function(a){return H.n_(a,new H.aq(0,null,null,null,null,null,0,[null,null]))},
c1:function(a,b){return new P.dx(0,null,null,null,null,null,0,[a,b])},
mE:function(){var t=Object.create(null)
H.d(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
m9:function(a,b,c){var t,s
if(P.jg(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$c6()
C.a.l(s,a)
try{P.mK(a,t)}finally{H.d(C.a.gaU(s)===a)
s.pop()}s=P.kf(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eE:function(a,b,c){var t,s,r
if(P.jg(a))return b+"..."+c
t=new P.bR(b)
s=$.$get$c6()
C.a.l(s,a)
try{r=t
r.a=P.kf(r.ga0(),a,", ")}finally{H.d(C.a.gaU(s)===a)
s.pop()}s=t
s.a=s.ga0()+c
s=t.ga0()
return s.charCodeAt(0)==0?s:s},
jg:function(a){var t,s
for(t=0;s=$.$get$c6(),t<s.length;++t)if(a===s[t])return!0
return!1},
mK:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gu(a)
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
ag:function(a,b,c,d){return new P.hQ(0,null,null,null,null,null,0,[d])},
j7:function(a,b){var t,s
t=P.ag(null,null,null,b)
for(s=J.bn(a);s.p();)t.l(0,s.gq())
return t},
md:function(a){var t,s,r
t={}
if(P.jg(a))return"{...}"
s=new P.bR("")
try{C.a.l($.$get$c6(),a)
r=s
r.a=r.ga0()+"{"
t.a=!0
a.ae(0,new P.eS(t,s))
t=s
t.a=t.ga0()+"}"}finally{t=$.$get$c6()
H.d(C.a.gaU(t)===a)
t.pop()}t=s.ga0()
return t.charCodeAt(0)==0?t:t},
j8:function(a,b){var t=new P.eM(null,0,0,0,[b])
t.d9(a,b)
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
c0:function c0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hO:function hO(){},
d6:function d6(){},
w:function w(){},
eS:function eS(a,b){this.a=a
this.b=b},
eM:function eM(a,b,c,d,e){var _=this
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
fw:function fw(){},
fv:function fv(){},
bN:function bN(){},
kf:function(a,b,c){var t=J.bn(b)
if(!t.p())return a
if(c.length===0){do a+=H.f(t.gq())
while(t.p())}else{a+=H.f(t.gq())
for(;t.p();)a=a+c+H.f(t.gq())}return a},
lT:function(a,b){return J.ld(a,b)},
lU:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.f(t)
if(t>=10)return s+"00"+H.f(t)
return s+"000"+H.f(t)},
lV:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cb:function(a){if(a>=10)return""+a
return"0"+a},
j1:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aG(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lY(a)},
lY:function(a){var t=J.r(a)
if(!!t.$isb2)return t.k(a)
return H.fl(a)},
c8:function(a){return new P.ao(!1,null,null,a)},
jC:function(a,b,c){return new P.ao(!0,a,b,c)},
fm:function(a,b,c){return new P.dl(null,null,!0,a,b,"Value not in range")},
aR:function(a,b,c,d,e){return new P.dl(b,c,!0,a,d,"Invalid value")},
ke:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.aR(a,0,c,"start",f))
if(a>b||b>c)throw H.e(P.aR(b,a,c,"end",f))
return b},
z:function(a,b,c,d,e){var t=e!=null?e:J.dH(b)
return new P.eA(b,t,!0,a,c,"Index out of range")},
ci:function(a){return new P.hy(a)},
ka:function(a,b,c){var t,s
t=H.B([],[c])
for(s=J.bn(a);s.p();)C.a.l(t,s.gq())
return t},
ad:function(a){H.iO(H.f(a))},
aZ:function aZ(){},
F:function F(){},
b4:function b4(a,b){this.a=a
this.b=b},
N:function N(){},
aK:function aK(a){this.a=a},
e0:function e0(){},
e1:function e1(){},
b5:function b5(){},
c9:function c9(a){this.a=a},
b9:function b9(){},
ao:function ao(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dl:function dl(a,b,c,d,e,f){var _=this
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
bV:function bV(a){this.a=a},
ah:function ah(a){this.a=a},
a1:function a1(a){this.a=a},
dp:function dp(){},
dU:function dU(a){this.a=a},
hy:function hy(a){this.a=a},
e4:function e4(a,b,c){this.a=a
this.b=b
this.$ti=c},
m:function m(){},
W:function W(){},
d2:function d2(){},
b:function b(){},
I:function I(){},
aA:function aA(){},
U:function U(){},
p:function p(){},
bP:function bP(){},
q:function q(){},
bR:function bR(a){this.a=a},
kL:function(a){return a},
it:function(a){var t,s,r,q,p
if(a==null)return
t=P.v()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.ae)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
mW:function(a,b){var t={}
a.ae(0,new P.is(t))
return t},
k0:function(){var t=$.k_
if(t==null){t=J.iU(window.navigator.userAgent,"Opera",0)
$.k_=t}return t},
lW:function(){var t,s
t=$.jX
if(t!=null)return t
s=$.jY
if(s==null){s=J.iU(window.navigator.userAgent,"Firefox",0)
$.jY=s}if(s)t="-moz-"
else{s=$.jZ
if(s==null){s=!P.k0()&&J.iU(window.navigator.userAgent,"Trident/",0)
$.jZ=s}if(s)t="-ms-"
else t=P.k0()?"-o-":"-webkit-"}$.jX=t
return t},
i8:function i8(){},
ia:function ia(a,b){this.a=a
this.b=b},
is:function is(a){this.a=a},
i9:function i9(a,b){this.a=a
this.b=b},
hW:function hW(){},
G:function G(){},
dJ:function dJ(){},
aH:function aH(){},
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
ep:function ep(){},
er:function er(){},
af:function af(){},
ay:function ay(){},
ey:function ey(){},
ar:function ar(){},
eI:function eI(){},
eT:function eT(){},
eU:function eU(){},
as:function as(){},
fb:function fb(){},
fd:function fd(){},
fh:function fh(){},
fi:function fi(){},
fn:function fn(){},
fo:function fo(){},
bO:function bO(){},
fK:function fK(){},
D:function D(){},
fL:function fL(){},
fM:function fM(){},
dr:function dr(){},
fQ:function fQ(){},
bT:function bT(){},
at:function at(){},
h_:function h_(){},
h6:function h6(){},
h8:function h8(){},
h9:function h9(){},
bZ:function bZ(){},
i0:function i0(){},
i1:function i1(){},
i2:function i2(){},
cq:function cq(){},
co:function co(){},
cv:function cv(){},
cz:function cz(){},
cJ:function cJ(){},
cS:function cS(){},
cO:function cO(){},
cQ:function cQ(){},
dN:function dN(){},
fr:function fr(){},
fs:function fs(){},
ii:function ii(){},
fA:function fA(){},
cp:function cp(){},
cM:function cM(){}},W={
mY:function(){return document},
lX:function(a,b,c){var t,s
t=document.body
s=(t&&C.f).I(t,a,b,c)
s.toString
t=new H.dt(new W.R(s),new W.ir(),[W.o])
return t.ga_(t)},
bq:function(a){var t,s,r
t="element tag unavailable"
try{s=J.lt(a)
if(typeof s==="string")t=a.tagName}catch(r){H.J(r)}return t},
my:function(a,b){return document.createElement(a)},
aX:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kz:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
mz:function(a,b,c,d,e){var t=W.kF(new W.hx(c))
t=new W.hw(0,a,b,t,!1,[e])
t.dk(a,b,c,!1,e)
return t},
kx:function(a){var t,s
t=document.createElement("a")
s=new W.i3(t,window.location)
s=new W.c_(s)
s.dl(a)
return s},
mC:function(a,b,c,d){return!0},
mD:function(a,b,c,d){var t,s,r,q,p
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
kA:function(){var t=P.q
t=new W.ie(P.j7(C.i,t),P.ag(null,null,null,t),P.ag(null,null,null,t),P.ag(null,null,null,t),null)
t.dn(null,new H.bD(C.i,new W.ig(),[H.al(C.i,0),null]),["TEMPLATE"],null)
return t},
kF:function(a){var t=$.t
if(t===C.c)return a
return t.e3(a)},
k:function k(){},
dK:function dK(){},
dL:function dL(){},
a0:function a0(){},
dO:function dO(){},
b1:function b1(){},
aI:function aI(){},
ca:function ca(){},
dP:function dP(){},
aJ:function aJ(){},
dS:function dS(){},
x:function x(){},
b3:function b3(){},
dT:function dT(){},
dV:function dV(){},
dW:function dW(){},
cc:function cc(){},
bp:function bp(){},
cd:function cd(){},
dX:function dX(){},
ce:function ce(){},
dY:function dY(){},
cf:function cf(){},
cg:function cg(){},
dZ:function dZ(){},
e_:function e_(){},
a2:function a2(){},
ir:function ir(){},
h:function h(){},
O:function O(){},
bx:function bx(){},
eo:function eo(){},
es:function es(){},
a3:function a3(){},
cl:function cl(){},
ew:function ew(){},
by:function by(){},
cm:function cm(){},
ex:function ex(){},
bz:function bz(){},
bA:function bA(){},
eB:function eB(){},
eN:function eN(){},
bG:function bG(){},
eV:function eV(){},
b7:function b7(){},
eX:function eX(){},
bH:function bH(){},
a4:function a4(){},
eY:function eY(){},
de:function de(){},
f7:function f7(a){this.a=a},
f8:function f8(a){this.a=a},
R:function R(a){this.a=a},
o:function o(){},
df:function df(){},
bM:function bM(){},
fc:function fc(){},
fe:function fe(){},
a5:function a5(){},
fg:function fg(){},
fj:function fj(){},
fk:function fk(){},
dk:function dk(){},
ft:function ft(){},
dm:function dm(){},
bb:function bb(){},
fx:function fx(){},
a7:function a7(){},
fy:function fy(){},
a8:function a8(){},
fz:function fz(){},
a9:function a9(){},
fE:function fE(){},
X:function X(){},
ai:function ai(){},
dq:function dq(){},
fN:function fN(){},
fO:function fO(){},
bS:function bS(){},
aa:function aa(){},
Y:function Y(){},
fR:function fR(){},
fS:function fS(){},
fU:function fU(){},
ab:function ab(){},
fY:function fY(){},
fZ:function fZ(){},
bc:function bc(){},
h0:function h0(){},
ds:function ds(){},
h5:function h5(){},
bd:function bd(){},
h7:function h7(){},
ha:function ha(){},
hb:function hb(){},
bY:function bY(){},
hd:function hd(a){this.a=a},
he:function he(){},
aT:function aT(){},
hm:function hm(){},
dw:function dw(){},
ho:function ho(){},
hp:function hp(){},
hq:function hq(){},
hM:function hM(){},
hN:function hN(){},
dy:function dy(){},
i4:function i4(){},
i7:function i7(){},
ib:function ib(){},
ij:function ij(){},
ik:function ik(){},
hk:function hk(){},
hr:function hr(a){this.a=a},
hv:function hv(){},
hs:function hs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hw:function hw(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
hx:function hx(a){this.a=a},
c_:function c_(a){this.a=a},
y:function y(){},
dh:function dh(a){this.a=a},
fa:function fa(a){this.a=a},
f9:function f9(a,b,c){this.a=a
this.b=b
this.c=c},
c2:function c2(){},
i5:function i5(){},
i6:function i6(){},
ie:function ie(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
ig:function ig(){},
ic:function ic(){},
ck:function ck(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
dg:function dg(){},
i3:function i3(a,b){this.a=a
this.b=b},
dA:function dA(a){this.a=a},
ih:function ih(a){this.a=a},
br:function br(){},
bs:function bs(){},
bt:function bt(){},
bu:function bu(){},
bv:function bv(){},
bw:function bw(){},
cn:function cn(){},
cH:function cH(){},
ct:function ct(){},
cA:function cA(){},
cB:function cB(){},
cC:function cC(){},
cD:function cD(){},
cE:function cE(){},
cF:function cF(){},
cG:function cG(){},
cr:function cr(){},
cs:function cs(){},
cu:function cu(){},
cw:function cw(){},
cx:function cx(){},
cy:function cy(){},
cI:function cI(){},
cK:function cK(){},
cU:function cU(){},
cV:function cV(){},
cT:function cT(){},
cY:function cY(){},
cZ:function cZ(){},
d_:function d_(){},
d0:function d0(){},
cL:function cL(){},
cN:function cN(){},
cP:function cP(){},
cR:function cR(){},
cW:function cW(){},
cX:function cX(){}},G={
mt:function(a){var t,s,r
t=a.split("\n")
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.f(t[s])}return C.a.ai(t,"\n")},
kv:function(a,b,c){var t,s,r,q
t=J.j(a)
s=t.bX(a,b)
t.bc(a,s,c)
t.bU(a,s)
r=t.b6(a,s,35713)
if(r!=null&&!r){q=t.b5(a,s)
P.ad("E:Compilation failed:")
P.ad("E:"+G.mt(c))
P.ad("E:Failure:")
P.ad(C.d.a3("E:",q))
throw H.e(q)}return s},
k4:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.iW(a[s])
b[t+1]=J.iX(a[s])
b[t+2]=J.jt(a[s])}return b},
m_:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.iW(a[s])
b[t+1]=J.iX(a[s])}return b},
m0:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.iW(a[s])
b[t+1]=J.iX(a[s])
b[t+2]=J.jt(a[s])
b[t+3]=J.lu(a[s])}return b},
lZ:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.b_(a[s],0)
b[t+1]=J.b_(a[s],1)
b[t+2]=J.b_(a[s],2)
b[t+3]=J.b_(a[s],3)}return b},
mB:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
for(t=a.e,s=t.gD(t),s=s.gu(s),r=b.x,q=[[P.b,P.m]],p=[P.N],o=[T.bX],n=[T.L],m=[T.Q];s.p();){l=s.gq()
if(!r.E(0,l)){k="Dropping unnecessary attribute: "+H.f(l)
if($.kR>0)H.iO("I: "+k)
continue}j=t.h(0,l)
switch($.$get$S().h(0,l).a){case"vec2":b.a5(l,G.m_(H.dD(j,"$isb",m,"$asb"),null),2)
break
case"vec3":b.a5(l,G.k4(H.dD(j,"$isb",n,"$asb"),null),3)
break
case"vec4":b.a5(l,G.m0(H.dD(j,"$isb",o,"$asb"),null),4)
break
case"float":b.a5(l,new Float32Array(H.io(H.dD(j,"$isb",p,"$asb"))),1)
break
case"uvec4":b.a5(l,G.lZ(H.dD(j,"$isb",q,"$asb"),null),4)
break
default:if(H.aD(!1))H.aY("unknown type for "+H.f(l)+" ["+J.ls(j[0]).k(0)+"] ["+new H.aC(H.iz(j),null).k(0)+"] "+H.f(j))}}},
mo:function(a,b,c,d){var t=new G.fq(b,c,d,null,null,P.v(),P.v(),P.ag(null,null,null,P.q),null,a,!1,!0)
t.da(a,b,c,d)
return t},
eZ:function eZ(){},
K:function K(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dR:function dR(a,b){this.a=a
this.b=b},
en:function en(a,b,c,d){var _=this
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
eW:function eW(a,b,c,d,e,f,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
i:function i(a,b,c){this.a=a
this.b=b
this.c=c},
a6:function a6(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fT:function fT(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bU:function bU(){},
ez:function ez(a,b,c,d,e,f){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f}},R={fC:function fC(){},fD:function fD(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},D={
mc:function(){var t,s,r,q,p,o
t=new P.E(0,$.t,null,[null])
s=new P.dv(t,[null])
r=window.navigator
r=(r&&C.M).cE(r,!0).al(new D.eP(s))
q=new D.eQ(s)
p=H.al(r,0)
o=$.t
if(o!==C.c)q=P.kB(q,o)
r.an(new P.be(null,new P.E(0,o,null,[p]),2,null,q,[p,p]))
return t},
eP:function eP(a){this.a=a},
eO:function eO(a,b){this.a=a
this.b=b},
eQ:function eQ(a){this.a=a}},A={
jj:function(a){var t,s
t=C.L.ep(a,0,new A.iA())
s=536870911&t+(C.b.cA(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
iA:function iA(){}},T={
bF:function(a,b,c,d,e,f,g,h,i){var t=new Float32Array(H.T(9))
t[8]=i
t[7]=h
t[6]=g
t[5]=f
t[4]=e
t[3]=d
t[2]=c
t[1]=b
t[0]=a
return new T.bE(t)},
bW:function(a,b,c){var t=new T.L(new Float32Array(H.T(3)))
t.Z(a,b,c)
return t},
bE:function bE(a){this.a=a},
Q:function Q(a){this.a=a},
L:function L(a){this.a=a},
bX:function bX(){},
V:function(a,b,c){var t=c.a
t=new T.e2(t,G.mo(t,a,$.$get$kP(),b),c)
t.d5(a,b,c)
return t},
mn:function(a){var t,s,r,q
T.V(a,$.$get$kN(),new G.K(P.v(),"none",!1,!0))
T.V(a,$.$get$l3(),new G.K(P.v(),"toon",!1,!0))
t=$.$get$kW()
s=new G.K(P.v(),"hexalate-10",!1,!0)
r=new Float32Array(H.T(2))
r[0]=0.5
r[1]=0.5
s.w("uCenter2",new T.Q(r))
s.w("uPointSize",10)
T.V(a,t,s)
s=$.$get$kO()
t=new G.K(P.v(),"dot",!1,!0)
r=new Float32Array(H.T(2))
r[0]=0
r[1]=0
t.w("uCenter2",new T.Q(r))
t.w("uScale",0.8)
t.w("uAngle",0.5)
T.V(a,s,t)
t=$.$get$l4()
s=new G.K(P.v(),"tv-distortion",!1,!0)
s.w("uScale",0.0009)
s.w("uTime",0)
T.V(a,t,s)
s=$.$get$kY()
t=new G.K(P.v(),"lumidots-8",!1,!0)
t.w("uPointSize",8)
T.V(a,s,t)
t=$.$get$l0()
s=new G.K(P.v(),"square-8",!1,!0)
s.w("uPointSize",8)
T.V(a,t,s)
s=$.$get$kM()
t=new G.K(P.v(),"emboss",!1,!0)
t.w("uConvolutionMatrix",$.$get$jL())
t.w("uColor",$.$get$jR())
T.V(a,s,t)
t=new G.K(P.v(),"emboss2",!1,!0)
t.w("uConvolutionMatrix",$.$get$jM())
t.w("uColor",$.$get$jS())
T.V(a,s,t)
t=new G.K(P.v(),"engrave",!1,!0)
t.w("uConvolutionMatrix",$.$get$jN())
t.w("uColor",$.$get$jT())
T.V(a,s,t)
t=new G.K(P.v(),"sharpen",!1,!0)
t.w("uConvolutionMatrix",$.$get$jO())
t.w("uColor",$.$get$jU())
T.V(a,s,t)
t=new G.K(P.v(),"edges",!1,!0)
t.w("uConvolutionMatrix",$.$get$jK())
t.w("uColor",$.$get$jQ())
T.V(a,s,t)
t=new G.K(P.v(),"blur",!1,!0)
t.w("uConvolutionMatrix",$.$get$jJ())
t.w("uColor",$.$get$jP())
T.V(a,s,t)
H.d($.$get$iv()!=null)
for(t=$.$get$ch(),t=t.gD(t),t=t.gu(t);t.p();){q=t.gq()
s=$.$get$iv();(s&&C.N).ew(s,"beforeend","<option>"+H.f(q)+"</option>",null,null)}},
nb:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
t={}
s=document
r=new R.fD(0,0,null,null,null,null)
r.de(C.e.cD(s,"stats"),"blue","gray")
q=C.e.cc(s,"#webgl-canvas")
q.width=q.clientWidth
q.height=q.clientHeight
p=new G.dR(null,q)
s=(q&&C.y).cC(q,"webgl2",P.az(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
p.a=s
if(s==null)H.A(P.ci('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
o="ChronosGL Config: "+J.aG(J.lv(s))
if($.kR>0)P.ad("I: "+o)
J.lc(s,0,0,0,1)
J.dG(s,2929)
T.mn(p)
t.a=null
t.b=null
s=$.$get$ch().h(0,"dot").b
o=new T.L(new Float32Array(H.T(3)))
o.Z(-1,-1,0)
n=new T.L(new Float32Array(H.T(3)))
n.Z(1,-1,0)
m=new T.L(new Float32Array(H.T(3)))
m.Z(1,1,0)
l=new T.L(new Float32Array(H.T(3)))
l.Z(-1,1,0)
k=new Float32Array(H.T(2))
k[0]=0
k[1]=0
j=new Float32Array(H.T(2))
j[0]=1
j[1]=0
i=new Float32Array(H.T(2))
i[0]=1
i[1]=1
h=new Float32Array(H.T(2))
h[0]=0
h[1]=1
g=new T.L(new Float32Array(H.T(3)))
g.Z(0,0,1)
f=[]
e=new G.ev(!1,[],[],f,P.v())
e.bh("aTexUV")
e.d2([o,n,m,l])
e.d0("aTexUV",[new T.Q(k),new T.Q(j),new T.Q(i),new T.Q(h)])
e.bh("aNormal")
e.d1("aNormal",[g,g,g,g])
o=s.d
s=s.e.x
n=P.v()
m=J.lg(o.a)
d=new G.eW(o,m,4,n,s,null,0,-1,null,null,P.v(),"meshdata:quad",!1,!0)
f=G.k4(f,null)
n.i(0,"aPosition",J.iV(o.a))
d.ch=f
d.bg("aPosition",f,3)
c=$.$get$S().h(0,"aPosition")
if(c==null)H.A("Unknown canonical aPosition")
H.d(s.E(0,"aPosition"))
b=s.h(0,"aPosition")
J.dF(o.a,m)
o.c4(0,b,0)
s=n.h(0,"aPosition")
n=c.bi()
J.dE(o.a,34962,s)
J.jB(o.a,b,n,5126,!1,0,0)
s=e.d6()
d.y=J.iV(o.a)
H.d(d.ch!=null)
n=d.ch.length
if(n<768){d.saG(new Uint8Array(H.io(s)))
d.Q=5121}else if(n<196608){d.saG(new Uint16Array(H.io(s)))
d.Q=5123}else{d.saG(new Uint32Array(H.io(s)))
d.Q=5125}J.dF(o.a,m)
s=d.y
n=d.cx
m=J.r(n)
H.d(!!m.$isks||!!m.$iskt||!!m.$isku)
J.dE(o.a,34963,s)
J.js(o.a,34963,n,35048)
G.mB(e,d)
P.m2([D.mc()],null,!1).al(new T.iM(t,p,new T.iL(t,r,d)))},
e2:function e2(a,b,c){this.a=a
this.b=b
this.c=c},
iL:function iL(a,b,c){this.a=a
this.b=b
this.c=c},
iM:function iM(a,b,c){this.a=a
this.b=b
this.c=c}}
var v=[C,H,J,P,W,G,R,D,A,T]
setFunctionNamesIfNecessary(v)
var $={}
H.j4.prototype={}
J.a.prototype={
A:function(a,b){return a===b},
gv:function(a){return H.aQ(a)},
k:function(a){return H.fl(a)},
gB:function(a){return new H.aC(H.iz(a),null)}}
J.eF.prototype={
k:function(a){return String(a)},
gv:function(a){return a?519018:218159},
gB:function(a){return C.a1},
$isaZ:1}
J.d5.prototype={
A:function(a,b){return null==b},
k:function(a){return"null"},
gv:function(a){return 0},
gB:function(a){return C.W}}
J.bC.prototype={
gv:function(a){return 0},
gB:function(a){return C.V},
k:function(a){return String(a)},
$isk9:1}
J.ff.prototype={}
J.aS.prototype={}
J.aO.prototype={
k:function(a){var t=a[$.$get$jW()]
return t==null?this.cX(a):J.aG(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isj2:1}
J.aM.prototype={
aS:function(a,b){if(!!a.immutable$list)throw H.e(new P.u(b))},
aR:function(a,b){if(!!a.fixed$length)throw H.e(new P.u(b))},
l:function(a,b){this.aR(a,"add")
a.push(b)},
J:function(a,b){var t,s,r,q,p
t=a.length
this.aR(a,"addAll")
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.ae)(b),++r,t=p){q=b[r]
p=t+1
H.d(t===a.length||H.A(new P.a1(a)))
a.push(q)}},
ca:function(a,b){return new H.bD(a,b,[H.al(a,0),null])},
ai:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.f(a[s])
return t.join(b)},
t:function(a,b){return a[b]},
gaT:function(a){if(a.length>0)return a[0]
throw H.e(H.d1())},
gaU:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.e(H.d1())},
bb:function(a,b,c,d,e){var t,s
this.aS(a,"setRange")
P.ke(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.A(P.aR(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.e(H.ma())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=d[e+s]
else for(s=0;s<t;++s)a[b+s]=d[e+s]},
bM:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.e(new P.a1(a))}return!1},
cR:function(a,b){this.aS(a,"sort")
H.dn(a,0,a.length-1,P.mX())},
az:function(a){return this.cR(a,null)},
C:function(a,b){var t
for(t=0;t<a.length;++t)if(J.C(a[t],b))return!0
return!1},
k:function(a){return P.eE(a,"[","]")},
gu:function(a){return new J.dM(a,a.length,0,null,[H.al(a,0)])},
gv:function(a){return H.aQ(a)},
gj:function(a){return a.length},
sj:function(a,b){this.aR(a,"set length")
if(b<0)throw H.e(P.aR(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.M(a,b))
if(b>=a.length||b<0)throw H.e(H.M(a,b))
return a[b]},
i:function(a,b,c){this.aS(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.M(a,b))
if(b>=a.length||b<0)throw H.e(H.M(a,b))
a[b]=c},
$isl:1,
$asl:function(){},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
J.j3.prototype={}
J.dM.prototype={
gq:function(){return this.d},
p:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.e(H.ae(t))
r=this.c
if(r>=s){this.sbm(null)
return!1}this.sbm(t[r]);++this.c
return!0},
sbm:function(a){this.d=a}}
J.bB.prototype={
a2:function(a,b){var t
if(typeof b!=="number")throw H.e(H.av(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gas(b)
if(this.gas(a)===t)return 0
if(this.gas(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gas:function(a){return a===0?1/a<0:a<0},
e6:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.e(new P.u(""+a+".ceil()"))},
eQ:function(a,b){var t
if(b>20)throw H.e(P.aR(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gas(a))return"-"+t
return t},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv:function(a){return a&0x1FFFFFFF},
a3:function(a,b){if(typeof b!=="number")throw H.e(H.av(b))
return a+b},
aB:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bI(a,b)},
P:function(a,b){return(a|0)===a?a/b|0:this.bI(a,b)},
bI:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.e(new P.u("Result of truncating division is "+H.f(t)+": "+H.f(a)+" ~/ "+b))},
aL:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
cA:function(a,b){if(typeof b!=="number")throw H.e(H.av(b))
return(a&b)>>>0},
cZ:function(a,b){if(typeof b!=="number")throw H.e(H.av(b))
return(a^b)>>>0},
ay:function(a,b){if(typeof b!=="number")throw H.e(H.av(b))
return a<b},
ax:function(a,b){if(typeof b!=="number")throw H.e(H.av(b))
return a>b},
cB:function(a,b){if(typeof b!=="number")throw H.e(H.av(b))
return a>=b},
gB:function(a){return C.a4},
$isU:1}
J.d4.prototype={
gB:function(a){return C.a3},
$ism:1,
$isU:1}
J.d3.prototype={
gB:function(a){return C.a2},
$isU:1}
J.aN.prototype={
aC:function(a,b){if(b>=a.length)throw H.e(H.M(a,b))
return a.charCodeAt(b)},
a3:function(a,b){if(typeof b!=="string")throw H.e(P.jC(b,null,null))
return a+b},
cS:function(a,b,c){var t
if(c>a.length)throw H.e(P.aR(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bd:function(a,b){return this.cS(a,b,0)},
bf:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.fm(b,null,null))
if(b>c)throw H.e(P.fm(b,null,null))
if(c>a.length)throw H.e(P.fm(c,null,null))
return a.substring(b,c)},
cU:function(a,b){return this.bf(a,b,null)},
eP:function(a){return a.toLowerCase()},
e9:function(a,b,c){if(c>a.length)throw H.e(P.aR(c,0,a.length,null,null))
return H.nh(a,b,c)},
a2:function(a,b){var t
if(typeof b!=="string")throw H.e(H.av(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
k:function(a){return a},
gv:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gB:function(a){return C.X},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.e(H.M(a,b))
return a[b]},
$isl:1,
$asl:function(){},
$isq:1}
H.c.prototype={$asc:null}
H.b6.prototype={
gu:function(a){return new H.d7(this,this.gj(this),0,null,[H.ac(this,"b6",0)])},
au:function(a,b){return this.cW(0,b)},
eO:function(a,b){var t,s
t=H.B([],[H.ac(this,"b6",0)])
C.a.sj(t,this.gj(this))
for(s=0;s<this.gj(this);++s)t[s]=this.t(0,s)
return t},
eN:function(a){return this.eO(a,!0)}}
H.d7.prototype={
gq:function(){return this.d},
p:function(){var t,s,r,q
t=this.a
s=J.Z(t)
r=s.gj(t)
if(this.b!==r)throw H.e(new P.a1(t))
q=this.c
if(q>=r){this.sa8(null)
return!1}this.sa8(s.t(t,q));++this.c
return!0},
sa8:function(a){this.d=a}}
H.d8.prototype={
gu:function(a){return new H.eR(null,J.bn(this.a),this.b,this.$ti)},
gj:function(a){return J.dH(this.a)},
$asW:function(a,b){return[b]}}
H.e3.prototype={$isc:1,
$asc:function(a,b){return[b]}}
H.eR.prototype={
p:function(){var t=this.b
if(t.p()){this.sa8(this.c.$1(t.gq()))
return!0}this.sa8(null)
return!1},
gq:function(){return this.a},
sa8:function(a){this.a=a},
$asd2:function(a,b){return[b]}}
H.bD.prototype={
gj:function(a){return J.dH(this.a)},
t:function(a,b){return this.b.$1(J.ln(this.a,b))},
$asc:function(a,b){return[b]},
$asb6:function(a,b){return[b]},
$asW:function(a,b){return[b]}}
H.dt.prototype={
gu:function(a){return new H.hc(J.bn(this.a),this.b,this.$ti)}}
H.hc.prototype={
p:function(){var t,s
for(t=this.a,s=this.b;t.p();)if(s.$1(t.gq()))return!0
return!1},
gq:function(){return this.a.gq()}}
H.cj.prototype={}
H.iQ.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.iR.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.hU.prototype={
seB:function(a){this.z=a},
seD:function(a){this.ch=a}}
H.aV.prototype={
bL:function(a,b){if(!this.f.A(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.aP()},
eI:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.aj(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.bC();++r.d}this.y=!1}this.aP()},
dW:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.r(a),s=0;r=this.ch,s<r.length;s+=2)if(t.A(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
eH:function(a){var t,s,r
if(this.ch==null)return
for(t=J.r(a),s=0;r=this.ch,s<r.length;s+=2)if(t.A(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.A(new P.u("removeRange"))
P.ke(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
cO:function(a,b){if(!this.r.A(0,a))return
this.db=b},
eu:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.G(0,c)
return}H.d(b===1)
t=this.cx
if(t==null){t=P.j8(null,null)
this.cx=t}t.O(0,new H.hP(a,c))},
es:function(a,b){var t
if(!this.r.A(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.at()
return}H.d(b===1)
t=this.cx
if(t==null){t=P.j8(null,null)
this.cx=t}t.O(0,this.geC())},
ev:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.ad(a)
if(b!=null)P.ad(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.aG(a)
s[1]=b==null?null:b.k(0)
for(r=new P.c0(t,t.r,null,null,[null]),r.c=t.e;r.p();)r.d.G(0,s)},
ad:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.J(o)
p=H.ak(o)
this.ev(q,p)
if(this.db){this.at()
if(this===u.globalState.e)throw o}}finally{this.cy=H.mU(r)
u.globalState.d=H.jl(t,"$isaV")
if(t!=null)$=t.geA()
if(this.cx!=null)for(;n=this.cx,!n.gah(n);)this.cx.cd().$0()}return s},
c9:function(a){return this.b.h(0,a)},
bp:function(a,b){var t=this.b
if(t.E(0,a))throw H.e(P.ci("Registry: ports must be registered only once."))
t.i(0,a,b)},
aP:function(){var t=this.b
if(t.gj(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.at()},
at:function(){var t,s,r
t=this.cx
if(t!=null)t.S(0)
for(t=this.b,s=t.gcv(t),s=s.gu(s);s.p();)s.gq().du()
t.S(0)
this.c.S(0)
u.globalState.z.aj(0,this.a)
this.dx.S(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].G(0,t[r+1])
this.ch=null}},
geA:function(){return this.d},
gea:function(){return this.e}}
H.hP.prototype={
$0:function(){this.a.G(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.ht.prototype={
eg:function(){var t=this.a
if(t.b===t.c)return
return t.cd()},
cf:function(){var t,s,r
t=this.eg()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.E(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gah(s)}else s=!1
else s=!1
else s=!1
if(s)H.A(P.ci("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gah(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.az(["command","close"])
r=new H.aj(!0,new P.dx(0,null,null,null,null,null,0,[null,P.m])).H(r)
s.toString
self.postMessage(r)}return!1}t.eF()
return!0},
bG:function(){if(self.window!=null)new H.hu(this).$0()
else for(;this.cf(););},
ak:function(){var t,s,r,q,p
if(!u.globalState.x)this.bG()
else try{this.bG()}catch(r){t=H.J(r)
s=H.ak(r)
q=u.globalState.Q
p=P.az(["command","error","msg",H.f(t)+"\n"+H.f(s)])
p=new H.aj(!0,P.c1(null,P.m)).H(p)
q.toString
self.postMessage(p)}}}
H.hu.prototype={
$0:function(){if(!this.a.cf())return
P.ms(C.m,this)},
$S:function(){return{func:1,v:true}}}
H.aW.prototype={
eF:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.ad(this.b)}}
H.hT.prototype={}
H.eC.prototype={
$0:function(){H.m6(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.eD.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(!this.d)this.a.$1(this.c)
else{s=this.a
if(H.bk(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.bk(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.aP()},
$S:function(){return{func:1,v:true}}}
H.hl.prototype={}
H.bg.prototype={
G:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.mH(b)
if(t.gea()===s){s=J.Z(r)
switch(s.h(r,0)){case"pause":t.bL(s.h(r,1),s.h(r,2))
break
case"resume":t.eI(s.h(r,1))
break
case"add-ondone":t.dW(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.eH(s.h(r,1))
break
case"set-errors-fatal":t.cO(s.h(r,1),s.h(r,2))
break
case"ping":t.eu(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.es(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.aj(0,s)
break}return}u.globalState.f.a.O(0,new H.aW(t,new H.hV(this,r),"receive"))},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bg){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gv:function(a){return this.b.a}}
H.hV.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dq(0,this.b)},
$S:function(){return{func:1}}}
H.c3.prototype={
G:function(a,b){var t,s,r
t=P.az(["command","message","port",this,"msg",b])
s=new H.aj(!0,P.c1(null,P.m)).H(t)
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
gv:function(a){return C.b.cZ((this.b<<16^this.a<<8)>>>0,this.c)}}
H.ba.prototype={
du:function(){this.c=!0
this.b=null},
dq:function(a,b){if(this.c)return
this.b.$1(b)},
$isml:1}
H.fV.prototype={
df:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.O(0,new H.aW(s,new H.fW(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.aE(new H.fX(this,b),0),a)}else{H.d(a>0)
throw H.e(new P.u("Timer greater than 0."))}}}
H.fW.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.fX.prototype={
$0:function(){this.a.c=null
H.iK()
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.ap.prototype={
gv:function(a){var t=this.a
t=C.b.aL(t,0)^C.b.P(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
A:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.ap){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.aj.prototype={
H:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gj(t))
t=J.r(a)
if(!!t.$isb8)return["buffer",a]
if(!!t.$isaP)return["typed",a]
if(!!t.$isl)return this.cK(a)
if(!!t.$ism3){r=this.gcH()
q=t.gD(a)
q=H.j9(q,r,H.ac(q,"W",0),null)
q=P.ka(q,!0,H.ac(q,"W",0))
t=t.gcv(a)
t=H.j9(t,r,H.ac(t,"W",0),null)
return["map",q,P.ka(t,!0,H.ac(t,"W",0))]}if(!!t.$isk9)return this.cL(a)
if(!!t.$isa)this.ct(a)
if(!!t.$isml)this.am(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isbg)return this.cM(a)
if(!!t.$isc3)return this.cN(a)
if(!!t.$isb2){p=a.$static_name
if(p==null)this.am(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isap)return["capability",a.a]
if(!(a instanceof P.p))this.ct(a)
return["dart",u.classIdExtractor(a),this.cJ(u.classFieldsExtractor(a))]},
am:function(a,b){throw H.e(new P.u((b==null?"Can't transmit:":b)+" "+H.f(a)))},
ct:function(a){return this.am(a,null)},
cK:function(a){var t
H.d(typeof a!=="string")
t=this.cI(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.am(a,"Can't serialize indexable: ")},
cI:function(a){var t,s
t=[]
C.a.sj(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.H(a[s])
return t},
cJ:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.H(a[t]))
return a},
cL:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.am(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sj(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.H(a[t[r]])
return["js-object",t,s]},
cN:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cM:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.aU.prototype={
T:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.e(P.c8("Bad serialized message: "+H.f(a)))
switch(C.a.gaT(a)){case"ref":H.d(J.C(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.d(J.C(a[0],"buffer"))
t=a[1]
C.a.l(this.b,t)
return t
case"typed":H.d(J.C(a[0],"typed"))
t=a[1]
C.a.l(this.b,t)
return t
case"fixed":H.d(J.C(a[0],"fixed"))
t=a[1]
C.a.l(this.b,t)
s=H.B(this.ac(t),[null])
s.fixed$length=Array
return s
case"extendable":H.d(J.C(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.B(this.ac(t),[null])
case"mutable":H.d(J.C(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.ac(t)
case"const":H.d(J.C(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
s=H.B(this.ac(t),[null])
s.fixed$length=Array
return s
case"map":return this.ej(a)
case"sendport":return this.ek(a)
case"raw sendport":H.d(J.C(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.ei(a)
case"function":H.d(J.C(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.d(J.C(a[0],"capability"))
return new H.ap(a[1])
case"dart":H.d(J.C(a[0],"dart"))
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
ej:function(a){var t,s,r,q,p
H.d(J.C(a[0],"map"))
t=a[1]
s=a[2]
r=P.v()
C.a.l(this.b,r)
t=J.lA(t,this.geh()).eN(0)
for(q=J.Z(s),p=0;p<t.length;++p)r.i(0,t[p],this.T(q.h(s,p)))
return r},
ek:function(a){var t,s,r,q,p,o,n
H.d(J.C(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.c9(r)
if(o==null)return
n=new H.bg(o,s)}else n=new H.c3(t,r,s)
C.a.l(this.b,n)
return n},
ei:function(a){var t,s,r,q,p,o
H.d(J.C(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.Z(t),p=J.Z(s),o=0;o<q.gj(t);++o)r[q.h(t,o)]=this.T(p.h(s,o))
return r}}
H.fp.prototype={}
H.h1.prototype={
L:function(a){var t,s,r
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
H.di.prototype={
k:function(a){var t=this.b
if(t==null)return"NullError: "+H.f(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.eH.prototype={
k:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.f(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.f(this.a)+")"}}
H.h4.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.iS.prototype={
$1:function(a){if(!!J.r(a).$isb5)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.dz.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.iF.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.iG.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.iH.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.iI.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.iJ.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.b2.prototype={
k:function(a){return"Closure '"+H.dj(this).trim()+"'"},
$isj2:1,
geU:function(){return this},
$D:null}
H.fP.prototype={}
H.fB.prototype={
k:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bo.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bo))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gv:function(a){var t,s
t=this.c
if(t==null)s=H.aQ(this.a)
else s=typeof t!=="object"?J.an(t):H.aQ(t)
return(s^H.aQ(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.f(this.d)+"' of "+H.fl(t)}}
H.h3.prototype={
k:function(a){return this.a}}
H.dQ.prototype={
k:function(a){return this.a}}
H.fu.prototype={
k:function(a){return"RuntimeError: "+H.f(this.a)}}
H.hf.prototype={
k:function(a){return C.d.a3("Assertion failed: ",P.j1(this.a))}}
H.aC.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gv:function(a){return J.an(this.a)},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.aC){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.aq.prototype={
gj:function(a){return this.a},
gah:function(a){return this.a===0},
gD:function(a){return new H.eK(this,[H.al(this,0)])},
gcv:function(a){return H.j9(this.gD(this),new H.eG(this),H.al(this,0),H.al(this,1))},
E:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bz(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bz(s,b)}else return this.ex(b)},
ex:function(a){var t=this.d
if(t==null)return!1
return this.ag(this.aq(t,this.af(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.a9(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.a9(r,b)
return s==null?null:s.b}else return this.ey(b)},
ey:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.aq(t,this.af(a))
r=this.ag(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aH()
this.b=t}this.bo(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aH()
this.c=s}this.bo(s,b,c)}else{r=this.d
if(r==null){r=this.aH()
this.d=r}q=this.af(b)
p=this.aq(r,q)
if(p==null)this.aK(r,q,[this.aI(b,c)])
else{o=this.ag(p,b)
if(o>=0)p[o].b=c
else p.push(this.aI(b,c))}}},
aj:function(a,b){if(typeof b==="string")return this.bF(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bF(this.c,b)
else return this.ez(b)},
ez:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.aq(t,this.af(a))
r=this.ag(s,a)
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
ae:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.e(new P.a1(this))
t=t.c}},
bo:function(a,b,c){var t=this.a9(a,b)
if(t==null)this.aK(a,b,this.aI(b,c))
else t.b=c},
bF:function(a,b){var t
if(a==null)return
t=this.a9(a,b)
if(t==null)return
this.bJ(t)
this.bA(a,b)
return t.b},
aI:function(a,b){var t,s
t=new H.eJ(a,b,null,null,[null,null])
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
af:function(a){return J.an(a)&0x3ffffff},
ag:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.C(a[s].a,b))return s
return-1},
k:function(a){return P.md(this)},
a9:function(a,b){return a[b]},
aq:function(a,b){return a[b]},
aK:function(a,b,c){H.d(c!=null)
a[b]=c},
bA:function(a,b){delete a[b]},
bz:function(a,b){return this.a9(a,b)!=null},
aH:function(){var t=Object.create(null)
this.aK(t,"<non-identifier-key>",t)
this.bA(t,"<non-identifier-key>")
return t},
$ism3:1,
$isI:1,
$asI:null}
H.eG.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.eJ.prototype={}
H.eK.prototype={
gj:function(a){return this.a.a},
gu:function(a){var t,s
t=this.a
s=new H.eL(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.eL.prototype={
gq:function(){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a1(t))
else{t=this.c
if(t==null){this.sbn(null)
return!1}else{this.sbn(t.a)
this.c=this.c.c
return!0}}},
sbn:function(a){this.d=a}}
H.iB.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.iC.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.q]}}}
H.iD.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.q]}}}
H.b8.prototype={
gB:function(a){return C.O},
$isb8:1}
H.aP.prototype={$isaP:1}
H.f_.prototype={
gB:function(a){return C.P}}
H.da.prototype={
gj:function(a){return a.length},
$isl:1,
$asl:function(){},
$isn:1,
$asn:function(){}}
H.db.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.A(H.M(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.A(H.M(a,b))
a[b]=c}}
H.dc.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.A(H.M(a,b))
a[b]=c},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]}}
H.d9.prototype={
gB:function(a){return C.Q},
$isc:1,
$asc:function(){return[P.N]},
$isb:1,
$asb:function(){return[P.N]},
$iseq:1}
H.f0.prototype={
gB:function(a){return C.R},
$isc:1,
$asc:function(){return[P.N]},
$isb:1,
$asb:function(){return[P.N]}}
H.f1.prototype={
gB:function(a){return C.S},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.A(H.M(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]}}
H.f2.prototype={
gB:function(a){return C.T},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.A(H.M(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]},
$isk6:1}
H.f3.prototype={
gB:function(a){return C.U},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.A(H.M(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]}}
H.f4.prototype={
gB:function(a){return C.Y},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.A(H.M(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]},
$isks:1}
H.f5.prototype={
gB:function(a){return C.Z},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.A(H.M(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]},
$iskt:1}
H.dd.prototype={
gB:function(a){return C.a_},
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.A(H.M(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]}}
H.f6.prototype={
gB:function(a){return C.a0},
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.A(H.M(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]},
$isku:1}
H.bI.prototype={
$asl:function(){},
$isc:1,
$asc:function(){return[P.N]},
$asn:function(){},
$isb:1,
$asb:function(){return[P.N]}}
H.bJ.prototype={
$asl:function(){},
$isc:1,
$asc:function(){return[P.m]},
$asn:function(){},
$isb:1,
$asb:function(){return[P.m]}}
H.bK.prototype={
$asl:function(){},
$asc:function(){return[P.m]},
$asn:function(){},
$asb:function(){return[P.m]}}
H.bL.prototype={
$asl:function(){},
$asc:function(){return[P.N]},
$asn:function(){},
$asb:function(){return[P.N]}}
P.hh.prototype={
$1:function(a){var t,s
H.iK()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.hg.prototype={
$1:function(a){var t,s
t=this.a
H.d(t.a==null);++u.globalState.f.b
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.hi.prototype={
$0:function(){H.iK()
this.a.$0()},
$S:function(){return{func:1}}}
P.hj.prototype={
$0:function(){H.iK()
this.a.$0()},
$S:function(){return{func:1}}}
P.eu.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.b)this.d.F(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.b)this.d.F(t.c,t.d)},
$S:function(){return{func:1,args:[,,]}}}
P.et.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){r[this.e]=a
if(s===0)this.d.by(r)}else if(t.b===0&&!this.b)this.d.F(t.c,t.d)},
$S:function(){return{func:1,args:[,]}}}
P.hn.prototype={
e8:function(a,b){if(a==null)a=new P.b9()
if(this.a.a!==0)throw H.e(new P.ah("Future already completed"))
$.t.toString
this.F(a,b)},
e7:function(a){return this.e8(a,null)}}
P.dv.prototype={
ab:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.ah("Future already completed"))
t.bq(b)},
F:function(a,b){this.a.br(a,b)}}
P.id.prototype={
ab:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.ah("Future already completed"))
t.a7(b)},
F:function(a,b){this.a.F(a,b)}}
P.be.prototype={
eE:function(a){if(this.c!==6)return!0
H.d(!0)
return this.b.b.aY(this.d,a.a)},
er:function(a){var t,s
t=(this.c&2)!==0
if(t){H.d(t)
t=this.e!=null}else t=!1
H.d(t)
s=this.e
t=this.b.b
if(H.bk(s,{func:1,args:[P.p,P.bP]}))return t.eJ(s,a.a,a.b)
else return t.aY(s,a.a)}}
P.E.prototype={
b_:function(a,b){var t,s,r
t=$.t
if(t!==C.c){t.toString
if(b!=null)b=P.kB(b,t)}s=new P.E(0,t,null,[null])
r=b==null?1:3
this.an(new P.be(null,s,r,a,b,[H.al(this,0),null]))
return s},
al:function(a){return this.b_(a,null)},
eT:function(a){var t,s
t=$.t
s=new P.E(0,t,null,this.$ti)
if(t!==C.c)t.toString
t=H.al(this,0)
this.an(new P.be(null,s,8,a,null,[t,t]))
return s},
bt:function(a){H.d(this.a<4)
H.d(a.a>=4)
this.a=a.a
this.c=a.c},
an:function(a){var t
H.d(a.a==null)
t=this.a
if(t<=1){a.a=H.jl(this.c,"$isbe")
this.c=a}else{if(t===2){H.d(!0)
t=this.c
if(t.a<4){t.an(a)
return}this.bt(t)}H.d(this.a>=4)
t=this.b
t.toString
P.bi(null,null,t,new P.hz(this,a))}},
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
t.a=this.aa(a)
s=this.b
s.toString
P.bi(null,null,s,new P.hH(t,this))}},
aJ:function(){H.d(this.a<4)
var t=this.c
this.c=null
return this.aa(t)},
aa:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
a7:function(a){var t,s
H.d(this.a<4)
t=this.$ti
if(H.c7(a,"$isaL",t,"$asaL"))if(H.c7(a,"$isE",t,null))P.hC(a,this)
else P.kw(a,this)
else{s=this.aJ()
H.d(this.a<4)
this.a=4
this.c=a
P.bf(this,s)}},
by:function(a){var t
H.d(this.a<4)
H.d(!J.r(a).$isaL)
t=this.aJ()
H.d(this.a<4)
this.a=4
this.c=a
P.bf(this,t)},
F:function(a,b){var t
H.d(this.a<4)
t=this.aJ()
H.d(this.a<4)
this.a=8
this.c=new P.b0(a,b)
P.bf(this,t)},
dv:function(a){return this.F(a,null)},
bq:function(a){var t
H.d(this.a<4)
if(H.c7(a,"$isaL",this.$ti,"$asaL")){this.dt(a)
return}H.d(this.a===0)
this.a=1
t=this.b
t.toString
P.bi(null,null,t,new P.hB(this,a))},
dt:function(a){var t
if(H.c7(a,"$isE",this.$ti,null)){if(a.a===8){H.d(this.a===0)
this.a=1
t=this.b
t.toString
P.bi(null,null,t,new P.hG(this,a))}else P.hC(a,this)
return}P.kw(a,this)},
br:function(a,b){var t
H.d(this.a<4)
H.d(this.a===0)
this.a=1
t=this.b
t.toString
P.bi(null,null,t,new P.hA(this,a,b))},
$isaL:1,
gaM:function(){return this.a},
gdP:function(){return this.c}}
P.hz.prototype={
$0:function(){P.bf(this.a,this.b)},
$S:function(){return{func:1}}}
P.hH.prototype={
$0:function(){P.bf(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.hD.prototype={
$1:function(a){var t=this.a
H.d(t.a===1)
H.d(t.a===1)
t.a=0
t.a7(a)},
$S:function(){return{func:1,args:[,]}}}
P.hE.prototype={
$2:function(a,b){var t=this.a
H.d(t.a===1)
t.F(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.hF.prototype={
$0:function(){this.a.F(this.b,this.c)},
$S:function(){return{func:1}}}
P.hB.prototype={
$0:function(){this.a.by(this.b)},
$S:function(){return{func:1}}}
P.hG.prototype={
$0:function(){P.hC(this.b,this.a)},
$S:function(){return{func:1}}}
P.hA.prototype={
$0:function(){this.a.F(this.b,this.c)},
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
t=q.b.b.ce(q.d)}catch(n){s=H.J(n)
r=H.ak(n)
if(this.c){q=this.a.a
H.d(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.d(q.a===8)
p.b=q.c}else p.b=new P.b0(s,r)
p.a=!0
return}if(!!J.r(t).$isaL){if(t instanceof P.E&&t.gaM()>=4){if(t.gaM()===8){q=t
H.d(q.gaM()===8)
p=this.b
p.b=q.gdP()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.al(new P.hL(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.hL.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.hJ.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.d((r.c&1)!==0)
this.a.b=r.b.b.aY(r.d,this.c)}catch(q){t=H.J(q)
s=H.ak(q)
r=this.a
r.b=new P.b0(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.hI.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.d(q.a===8)
t=q.c
q=this.c
if(q.eE(t)){H.d((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.er(t)
p.a=!1}}catch(o){s=H.J(o)
r=H.ak(o)
q=this.a
p=q.a
H.d(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.d(q.a===8)
m.b=q.c}else m.b=new P.b0(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.du.prototype={}
P.bQ.prototype={
gj:function(a){var t,s
t={}
s=new P.E(0,$.t,null,[P.m])
t.a=0
this.c8(new P.fI(t),!0,new P.fJ(t,s),s.gbx())
return s},
gaT:function(a){var t,s
t={}
s=new P.E(0,$.t,null,[H.ac(this,"bQ",0)])
t.a=null
t.a=this.c8(new P.fG(t,this,s),!0,new P.fH(s),s.gbx())
return s}}
P.fI.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.fJ.prototype={
$0:function(){this.b.a7(this.a.a)},
$S:function(){return{func:1}}}
P.fG.prototype={
$1:function(a){P.mG(this.a.a,this.c,a)},
$S:function(){return H.mV(function(a){return{func:1,args:[a]}},this.b,"bQ")}}
P.fH.prototype={
$0:function(){var t,s,r,q
try{r=H.d1()
throw H.e(r)}catch(q){t=H.J(q)
s=H.ak(q)
P.mI(this.a,t,s)}},
$S:function(){return{func:1}}}
P.fF.prototype={}
P.im.prototype={
$0:function(){return this.a.a7(this.b)},
$S:function(){return{func:1}}}
P.b0.prototype={
k:function(a){return H.f(this.a)},
$isb5:1}
P.il.prototype={}
P.iq.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.b9()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.e(t)
r=H.e(t)
r.stack=s.k(0)
throw r},
$S:function(){return{func:1}}}
P.hX.prototype={
eK:function(a){var t,s,r
try{if(C.c===$.t){a.$0()
return}P.kC(null,null,this,a)}catch(r){t=H.J(r)
s=H.ak(r)
P.ip(null,null,this,t,s)}},
eL:function(a,b){var t,s,r
try{if(C.c===$.t){a.$1(b)
return}P.kD(null,null,this,a,b)}catch(r){t=H.J(r)
s=H.ak(r)
P.ip(null,null,this,t,s)}},
e2:function(a){return new P.hZ(this,a)},
aQ:function(a){return new P.hY(this,a)},
e3:function(a){return new P.i_(this,a)},
h:function(a,b){return},
ce:function(a){if($.t===C.c)return a.$0()
return P.kC(null,null,this,a)},
aY:function(a,b){if($.t===C.c)return a.$1(b)
return P.kD(null,null,this,a,b)},
eJ:function(a,b,c){if($.t===C.c)return a.$2(b,c)
return P.mM(null,null,this,a,b,c)}}
P.hZ.prototype={
$0:function(){return this.a.ce(this.b)},
$S:function(){return{func:1}}}
P.hY.prototype={
$0:function(){return this.a.eK(this.b)},
$S:function(){return{func:1}}}
P.i_.prototype={
$1:function(a){return this.a.eL(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.dx.prototype={
af:function(a){return H.nd(a)&0x3ffffff},
ag:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.hQ.prototype={
gu:function(a){var t=new P.c0(this,this.r,null,null,[null])
t.c=this.e
return t},
gj:function(a){return this.a},
C:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dw(b)},
dw:function(a){var t=this.d
if(t==null)return!1
return this.ap(t[this.ao(a)],a)>=0},
c9:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.C(0,a)?a:null
else return this.dH(a)},
dH:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.ao(a)]
r=this.ap(s,a)
if(r<0)return
return J.b_(s,r).gdA()},
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
r=s}return this.bu(r,b)}else return this.O(0,b)},
O:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.mE()
this.d=t}s=this.ao(b)
r=t[s]
if(r==null){q=[this.aD(b)]
H.d(q!=null)
t[s]=q}else{if(this.ap(r,b)>=0)return!1
r.push(this.aD(b))}return!0},
aj:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bv(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bv(this.c,b)
else return this.dJ(0,b)},
dJ:function(a,b){var t,s,r
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
t=this.aD(b)
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
aD:function(a){var t,s
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
ao:function(a){return J.an(a)&0x3ffffff},
ap:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.C(a[s].a,b))return s
return-1},
$isc:1,
$asc:null}
P.hR.prototype={
gdA:function(){return this.a}}
P.c0.prototype={
gq:function(){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a1(t))
else{t=this.c
if(t==null){this.sa6(null)
return!1}else{this.sa6(t.a)
this.c=this.c.b
return!0}}},
sa6:function(a){this.d=a}}
P.hO.prototype={}
P.d6.prototype={}
P.w.prototype={
gu:function(a){return new H.d7(a,this.gj(a),0,null,[H.ac(a,"w",0)])},
t:function(a,b){return this.h(a,b)},
ca:function(a,b){return new H.bD(a,b,[H.ac(a,"w",0),null])},
ep:function(a,b,c){var t,s,r
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
P.eM.prototype={
gu:function(a){return new P.hS(this,this.c,this.d,this.b,null,this.$ti)},
gah:function(a){return this.b===this.c},
gj:function(a){return(this.c-this.b&this.a.length-1)>>>0},
t:function(a,b){var t,s
t=(this.c-this.b&this.a.length-1)>>>0
if(0>b||b>=t)H.A(P.z(b,this,"index",null,t))
s=this.a
return s[(this.b+b&s.length-1)>>>0]},
S:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
k:function(a){return P.eE(this,"{","}")},
cd:function(){var t,s,r
t=this.b
if(t===this.c)throw H.e(H.d1());++this.d
s=this.a
r=s[t]
s[t]=null
this.b=(t+1&s.length-1)>>>0
return r},
O:function(a,b){var t,s
t=this.a
s=this.c
t[s]=b
t=(s+1&t.length-1)>>>0
this.c=t
if(this.b===t)this.bC();++this.d},
bC:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.B(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.bb(s,0,q,t,r)
C.a.bb(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbH(s)},
d9:function(a,b){var t
H.d(!0)
t=new Array(8)
t.fixed$length=Array
this.sbH(H.B(t,[b]))},
sbH:function(a){this.a=a},
$asc:null}
P.hS.prototype={
gq:function(){return this.e},
p:function(){var t,s
t=this.a
if(this.c!==t.d)H.A(new P.a1(t))
s=this.d
if(s===this.b){this.sa6(null)
return!1}this.sa6(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sa6:function(a){this.e=a}}
P.fw.prototype={
J:function(a,b){var t
for(t=J.bn(b);t.p();)this.l(0,t.gq())},
k:function(a){return P.eE(this,"{","}")},
$isc:1,
$asc:null}
P.fv.prototype={}
P.bN.prototype={$isc:1,$asc:null,$isb:1,$asb:null}
P.aZ.prototype={}
P.F.prototype={}
P.b4.prototype={
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.b4))return!1
return this.a===b.a&&this.b===b.b},
a2:function(a,b){return C.b.a2(this.a,b.a)},
gv:function(a){var t=this.a
return(t^C.b.aL(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.lU(H.mk(this))
s=P.cb(H.mi(this))
r=P.cb(H.me(this))
q=P.cb(H.mf(this))
p=P.cb(H.mh(this))
o=P.cb(H.mj(this))
n=P.lV(H.mg(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isF:1,
$asF:function(){return[P.b4]}}
P.N.prototype={$isF:1,
$asF:function(){return[P.U]}}
P.aK.prototype={
ay:function(a,b){return C.b.ay(this.a,b.gdz())},
ax:function(a,b){return C.b.ax(this.a,b.gdz())},
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.aK))return!1
return this.a===b.a},
gv:function(a){return this.a&0x1FFFFFFF},
a2:function(a,b){return C.b.a2(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.e1()
s=this.a
if(s<0)return"-"+new P.aK(0-s).k(0)
r=t.$1(C.b.P(s,6e7)%60)
q=t.$1(C.b.P(s,1e6)%60)
p=new P.e0().$1(s%1e6)
return""+C.b.P(s,36e8)+":"+H.f(r)+":"+H.f(q)+"."+H.f(p)},
$isF:1,
$asF:function(){return[P.aK]}}
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
P.b5.prototype={}
P.c9.prototype={
k:function(a){return"Assertion failed"}}
P.b9.prototype={
k:function(a){return"Throw of null."}}
P.ao.prototype={
gaF:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaE:function(){return""},
k:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+t
q=this.gaF()+s+r
if(!this.a)return q
p=this.gaE()
o=P.j1(this.b)
return q+p+": "+H.f(o)}}
P.dl.prototype={
gaF:function(){return"RangeError"},
gaE:function(){var t,s,r
H.d(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.f(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.f(t)
else if(r>t)s=": Not in range "+H.f(t)+".."+H.f(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.f(t)}return s}}
P.eA.prototype={
gaF:function(){return"RangeError"},
gaE:function(){H.d(this.a)
if(J.l5(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.f(t)},
gj:function(a){return this.f}}
P.u.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.bV.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.ah.prototype={
k:function(a){return"Bad state: "+this.a}}
P.a1.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.f(P.j1(t))+"."}}
P.dp.prototype={
k:function(a){return"Stack Overflow"},
$isb5:1}
P.dU.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.hy.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.f(t)}}
P.e4.prototype={
k:function(a){return"Expando:"+H.f(this.a)},
h:function(a,b){var t,s
t=this.b
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.A(P.jC(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.kb(b,"expando$values")
return s==null?null:H.kb(s,t)}}
P.m.prototype={$isF:1,
$asF:function(){return[P.U]}}
P.W.prototype={
au:function(a,b){return new H.dt(this,b,[H.ac(this,"W",0)])},
gj:function(a){var t,s
H.d(!this.$isc)
t=this.gu(this)
for(s=0;t.p();)++s
return s},
ga_:function(a){var t,s
t=this.gu(this)
if(!t.p())throw H.e(H.d1())
s=t.gq()
if(t.p())throw H.e(H.mb())
return s},
t:function(a,b){var t,s,r
if(b<0)H.A(P.aR(b,0,null,"index",null))
for(t=this.gu(this),s=0;t.p();){r=t.gq()
if(b===s)return r;++s}throw H.e(P.z(b,this,"index",null,s))},
k:function(a){return P.m9(this,"(",")")}}
P.d2.prototype={}
P.b.prototype={$isc:1,$asc:null,$asb:null}
P.I.prototype={$asI:null}
P.aA.prototype={
gv:function(a){return P.p.prototype.gv.call(this,this)},
k:function(a){return"null"}}
P.U.prototype={$isF:1,
$asF:function(){return[P.U]}}
P.p.prototype={constructor:P.p,$isp:1,
A:function(a,b){return this===b},
gv:function(a){return H.aQ(this)},
k:function(a){return H.fl(this)},
gB:function(a){return new H.aC(H.iz(this),null)},
toString:function(){return this.k(this)}}
P.bP.prototype={}
P.q.prototype={$isF:1,
$asF:function(){return[P.q]}}
P.bR.prototype={
gj:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga0:function(){return this.a}}
W.k.prototype={}
W.dK.prototype={
k:function(a){return String(a)},
$isa:1}
W.dL.prototype={
k:function(a){return String(a)},
$isa:1}
W.a0.prototype={$isp:1}
W.dO.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a0]},
$isc:1,
$asc:function(){return[W.a0]},
$isn:1,
$asn:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.b1.prototype={$isb1:1}
W.aI.prototype={$isa:1,$isaI:1}
W.ca.prototype={
cC:function(a,b,c){var t=this.dC(a,b,P.mW(c,null))
return t},
dC:function(a,b,c){return a.getContext(b,c)}}
W.dP.prototype={
av:function(a){return P.it(a.getContextAttributes())}}
W.aJ.prototype={$isa:1,
gj:function(a){return a.length}}
W.dS.prototype={$isa:1}
W.x.prototype={$isp:1}
W.b3.prototype={
bs:function(a,b){var t,s
t=$.$get$jV()
s=t[b]
if(typeof s==="string")return s
s=this.dS(a,b)
t[b]=s
return s},
dS:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.lW()+b
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
gU:function(a){return a.z}}
W.cc.prototype={}
W.bp.prototype={
dX:function(a,b){return a.adoptNode(b)},
cD:function(a,b){return a.getElementById(b)},
cc:function(a,b){return a.querySelector(b)}}
W.cd.prototype={$isa:1}
W.dX.prototype={
k:function(a){return String(a)}}
W.ce.prototype={
ee:function(a,b){return a.createHTMLDocument(b)}}
W.dY.prototype={
gcz:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gU:function(a){return a.z}}
W.cf.prototype={
gcz:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gU:function(a){return a.z}}
W.cg.prototype={
k:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gY(a))+" x "+H.f(this.gX(a))},
A:function(a,b){var t
if(b==null)return!1
t=J.r(b)
if(!t.$isG)return!1
return a.left===t.gaV(b)&&a.top===t.gb0(b)&&this.gY(a)===t.gY(b)&&this.gX(a)===t.gX(b)},
gv:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gY(a)
q=this.gX(a)
return W.kz(W.aX(W.aX(W.aX(W.aX(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gX:function(a){return a.height},
gaV:function(a){return a.left},
gb0:function(a){return a.top},
gY:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isG:1,
$asG:function(){}}
W.dZ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
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
W.a2.prototype={
ge0:function(a){return new W.hr(a)},
k:function(a){return a.localName},
ew:function(a,b,c,d,e){var t,s
t=this.I(a,c,d,e)
switch(b.toLowerCase()){case"beforebegin":J.jv(a.parentNode,t,a)
break
case"afterbegin":s=a.childNodes
this.c6(a,t,s.length>0?s[0]:null)
break
case"beforeend":this.K(a,t)
break
case"afterend":J.jv(a.parentNode,t,a.nextSibling)
break
default:H.A(P.c8("Invalid position "+b))}},
I:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.k2
if(t==null){t=H.B([],[W.dg])
s=new W.dh(t)
C.a.l(t,W.kx(null))
C.a.l(t,W.kA())
$.k2=s
d=s}else d=t
t=$.k1
if(t==null){t=new W.dA(d)
$.k1=t
c=t}else{t.a=d
c=t}}if($.ax==null){t=document
s=t.implementation
s=(s&&C.z).ee(s,"")
$.ax=s
$.j0=s.createRange()
s=$.ax
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.ax.head;(t&&C.A).K(t,r)}t=$.ax
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.jl(s,"$isaI")}t=$.ax
if(!!this.$isaI)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.ax.body;(t&&C.f).K(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.C(C.K,a.tagName)){t=$.j0;(t&&C.v).cG(t,q)
t=$.j0
p=(t&&C.v).ec(t,b)}else{q.innerHTML=b
p=$.ax.createDocumentFragment()
for(t=J.j(p);s=q.firstChild,s!=null;)t.K(p,s)}t=$.ax.body
if(q==null?t!=null:q!==t)J.lC(q)
c.b8(p)
C.e.dX(document,p)
return p},
ed:function(a,b,c){return this.I(a,b,c,null)},
cQ:function(a,b,c,d){a.textContent=null
this.K(a,this.I(a,b,c,d))},
cP:function(a,b){return this.cQ(a,b,null,null)},
a4:function(a,b){return a.getAttribute(b)},
dK:function(a,b){return a.removeAttribute(b)},
$isa:1,
$isp:1,
$isa2:1,
$iso:1,
geM:function(a){return a.tagName}}
W.ir.prototype={
$1:function(a){return!!J.r(a).$isa2},
$S:function(){return{func:1,args:[,]}}}
W.h.prototype={
dr:function(a,b,c,d){return a.addEventListener(b,H.aE(c,1),!1)},
dM:function(a,b,c,d){return a.removeEventListener(b,H.aE(c,1),!1)}}
W.O.prototype={$isp:1,$isO:1}
W.bx.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.O]},
$isc:1,
$asc:function(){return[W.O]},
$isn:1,
$asn:function(){return[W.O]},
$isb:1,
$asb:function(){return[W.O]},
$isbx:1}
W.eo.prototype={
gj:function(a){return a.length}}
W.es.prototype={
gj:function(a){return a.length}}
W.a3.prototype={$isp:1}
W.cl.prototype={}
W.ew.prototype={
gj:function(a){return a.length}}
W.by.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.o]},
$isc:1,
$asc:function(){return[W.o]},
$isn:1,
$asn:function(){return[W.o]},
$isb:1,
$asb:function(){return[W.o]}}
W.cm.prototype={}
W.ex.prototype={
G:function(a,b){return a.send(b)}}
W.bz.prototype={}
W.bA.prototype={$isbA:1}
W.eB.prototype={$isa:1,$isa2:1}
W.eN.prototype={
k:function(a){return String(a)}}
W.bG.prototype={}
W.eV.prototype={
gj:function(a){return a.length}}
W.b7.prototype={$isp:1,$isb7:1}
W.eX.prototype={
eV:function(a,b,c){return a.send(b,c)},
G:function(a,b){return a.send(b)}}
W.bH.prototype={}
W.a4.prototype={$isp:1}
W.eY.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a4]},
$isc:1,
$asc:function(){return[W.a4]},
$isn:1,
$asn:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.de.prototype={
cF:function(a,b,c){var t,s,r,q
t=W.b7
s=new P.E(0,$.t,null,[t])
r=new P.dv(s,[t])
q=P.az(["audio",!1,"video",!0])
if(!a.getUserMedia)a.getUserMedia=a.getUserMedia||a.webkitGetUserMedia||a.mozGetUserMedia||a.msGetUserMedia
this.dD(a,new P.i9([],[]).b1(q),new W.f7(r),new W.f8(r))
return s},
cE:function(a,b){return this.cF(a,!1,b)},
dD:function(a,b,c,d){return a.getUserMedia(b,H.aE(c,1),H.aE(d,1))},
$isa:1}
W.f7.prototype={
$1:function(a){this.a.ab(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.f8.prototype={
$1:function(a){this.a.e7(a)},
$S:function(){return{func:1,args:[,]}}}
W.R.prototype={
ga_:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.e(new P.ah("No elements"))
if(s>1)throw H.e(new P.ah("More than one element"))
return t.firstChild},
J:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.j(s),p=0;p<r;++p)q.K(s,t.firstChild)
return},
i:function(a,b,c){var t=this.a
J.l8(t,c,C.t.h(t.childNodes,b))},
gu:function(a){var t=this.a.childNodes
return new W.ck(t,t.length,-1,null,[H.ac(t,"y",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){return C.t.h(this.a.childNodes,b)},
$asc:function(){return[W.o]},
$asd6:function(){return[W.o]},
$asb:function(){return[W.o]},
$asbN:function(){return[W.o]}}
W.o.prototype={
eG:function(a){var t=a.parentNode
if(t!=null)J.bl(t,a)},
k:function(a){var t=a.nodeValue
return t==null?this.cV(a):t},
K:function(a,b){return a.appendChild(b)},
c6:function(a,b,c){return a.insertBefore(b,c)},
dL:function(a,b){return a.removeChild(b)},
dN:function(a,b,c){return a.replaceChild(b,c)},
$isp:1,
$iso:1,
gaW:function(a){return a.previousSibling}}
W.df.prototype={
aX:function(a){return a.previousNode()}}
W.bM.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.o]},
$isc:1,
$asc:function(){return[W.o]},
$isn:1,
$asn:function(){return[W.o]},
$isb:1,
$asb:function(){return[W.o]}}
W.fc.prototype={$isa:1}
W.fe.prototype={
gj:function(a){return a.length}}
W.a5.prototype={$isp:1,
gj:function(a){return a.length}}
W.fg.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
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
G:function(a,b){return a.send(b)}}
W.dk.prototype={
ec:function(a,b){return a.createContextualFragment(b)},
cG:function(a,b){return a.selectNodeContents(b)}}
W.ft.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gU:function(a){return a.z}}
W.dm.prototype={
G:function(a,b){return a.send(b)}}
W.bb.prototype={$isbb:1,
gj:function(a){return a.length}}
W.fx.prototype={$isa:1}
W.a7.prototype={$isp:1}
W.fy.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a7]},
$isc:1,
$asc:function(){return[W.a7]},
$isn:1,
$asn:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.a8.prototype={$isp:1}
W.fz.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a8]},
$isc:1,
$asc:function(){return[W.a8]},
$isn:1,
$asn:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.a9.prototype={$isp:1,
gj:function(a){return a.length}}
W.fE.prototype={
h:function(a,b){return this.bB(a,b)},
ae:function(a,b){var t,s
for(t=0;!0;++t){s=this.dG(a,t)
if(s==null)return
b.$2(s,this.bB(a,s))}},
gj:function(a){return a.length},
bB:function(a,b){return a.getItem(b)},
dG:function(a,b){return a.key(b)},
$isI:1,
$asI:function(){return[P.q,P.q]}}
W.X.prototype={$isp:1}
W.ai.prototype={}
W.dq.prototype={
I:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aA(a,b,c,d)
t=W.lX("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.R(s).J(0,new W.R(t))
return s}}
W.fN.prototype={
I:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aA(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.w.I(t.createElement("table"),b,c,d)
t.toString
t=new W.R(t)
r=t.ga_(t)
r.toString
t=new W.R(r)
q=t.ga_(t)
s.toString
q.toString
new W.R(s).J(0,new W.R(q))
return s}}
W.fO.prototype={
I:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aA(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.w.I(t.createElement("table"),b,c,d)
t.toString
t=new W.R(t)
r=t.ga_(t)
s.toString
r.toString
new W.R(s).J(0,new W.R(r))
return s}}
W.bS.prototype={$isbS:1}
W.aa.prototype={$isp:1}
W.Y.prototype={$isp:1}
W.fR.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.Y]},
$isc:1,
$asc:function(){return[W.Y]},
$isn:1,
$asn:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.fS.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.aa]},
$isc:1,
$asc:function(){return[W.aa]},
$isn:1,
$asn:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.fU.prototype={
gj:function(a){return a.length}}
W.ab.prototype={$isp:1}
W.fY.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.ab]},
$isc:1,
$asc:function(){return[W.ab]},
$isn:1,
$asn:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.fZ.prototype={
gj:function(a){return a.length}}
W.bc.prototype={}
W.h0.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gU:function(a){return a.z}}
W.ds.prototype={
aX:function(a){return a.previousNode()}}
W.h5.prototype={
k:function(a){return String(a)},
$isa:1}
W.bd.prototype={$isbd:1}
W.h7.prototype={
gj:function(a){return a.length}}
W.ha.prototype={
gj:function(a){return a.length}}
W.hb.prototype={
G:function(a,b){return a.send(b)}}
W.bY.prototype={
ge_:function(a){var t,s
t=P.U
s=new P.E(0,$.t,null,[t])
this.dB(a)
this.dO(a,W.kF(new W.hd(new P.id(s,[t]))))
return s},
dO:function(a,b){return a.requestAnimationFrame(H.aE(b,1))},
dB:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
dY:function(a,b){return a.alert(b)},
$isa:1}
W.hd.prototype={
$1:function(a){this.a.ab(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.he.prototype={$isa:1}
W.aT.prototype={$isa:1}
W.hm.prototype={
k:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
A:function(a,b){var t,s,r
if(b==null)return!1
t=J.r(b)
if(!t.$isG)return!1
s=a.left
r=t.gaV(b)
if(s==null?r==null:s===r){s=a.top
r=t.gb0(b)
if(s==null?r==null:s===r){s=a.width
r=t.gY(b)
if(s==null?r==null:s===r){s=a.height
t=t.gX(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gv:function(a){var t,s,r,q
t=J.an(a.left)
s=J.an(a.top)
r=J.an(a.width)
q=J.an(a.height)
return W.kz(W.aX(W.aX(W.aX(W.aX(0,t),s),r),q))},
$isG:1,
$asG:function(){},
gX:function(a){return a.height},
gaV:function(a){return a.left},
gb0:function(a){return a.top},
gY:function(a){return a.width}}
W.dw.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[P.G]},
$isc:1,
$asc:function(){return[P.G]},
$isn:1,
$asn:function(){return[P.G]},
$isb:1,
$asb:function(){return[P.G]}}
W.ho.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.x]},
$isc:1,
$asc:function(){return[W.x]},
$isn:1,
$asn:function(){return[W.x]},
$isb:1,
$asb:function(){return[W.x]}}
W.hp.prototype={$isa:1}
W.hq.prototype={
gX:function(a){return a.height},
gY:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.hM.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a3]},
$isc:1,
$asc:function(){return[W.a3]},
$isn:1,
$asn:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.hN.prototype={$isa:1}
W.dy.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.o]},
$isc:1,
$asc:function(){return[W.o]},
$isn:1,
$asn:function(){return[W.o]},
$isb:1,
$asb:function(){return[W.o]}}
W.i4.prototype={$isa:1}
W.i7.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a9]},
$isc:1,
$asc:function(){return[W.a9]},
$isn:1,
$asn:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.ib.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.X]},
$isc:1,
$asc:function(){return[W.X]},
$isn:1,
$asn:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.ij.prototype={$isa:1}
W.ik.prototype={$isa:1}
W.hk.prototype={
ae:function(a,b){var t,s,r,q,p,o
for(t=this.gD(this),s=t.length,r=this.a,q=J.j(r),p=0;p<t.length;t.length===s||(0,H.ae)(t),++p){o=t[p]
b.$2(o,q.a4(r,o))}},
gD:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.B([],[P.q])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.l(s,p.name)}return s},
$isI:1,
$asI:function(){return[P.q,P.q]},
gdE:function(){return this.a}}
W.hr.prototype={
h:function(a,b){return J.iY(this.a,b)},
gj:function(a){return this.gD(this).length}}
W.hv.prototype={
c8:function(a,b,c,d){return W.mz(this.a,this.b,a,!1,H.al(this,0))}}
W.hs.prototype={}
W.hw.prototype={
e5:function(a){if(this.b==null)return
this.dV()
this.b=null
this.sdI(null)
return},
dU:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.l6(r,this.c,t,!1)}},
dV:function(){var t,s,r
t=this.d
s=t!=null
if(s){r=this.b
r.toString
if(s)J.l7(r,this.c,t,!1)}},
dk:function(a,b,c,d,e){this.dU()},
sdI:function(a){this.d=a}}
W.hx.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.c_.prototype={
a1:function(a){return $.$get$ky().C(0,W.bq(a))},
R:function(a,b,c){var t,s,r
t=W.bq(a)
s=$.$get$jd()
r=s.h(0,H.f(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
dl:function(a){var t,s
t=$.$get$jd()
if(t.gah(t)){for(s=0;s<262;++s)t.i(0,C.J[s],W.n2())
for(s=0;s<12;++s)t.i(0,C.j[s],W.n3())}}}
W.y.prototype={
gu:function(a){return new W.ck(a,this.gj(a),-1,null,[H.ac(a,"y",0)])},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
W.dh.prototype={
a1:function(a){return C.a.bM(this.a,new W.fa(a))},
R:function(a,b,c){return C.a.bM(this.a,new W.f9(a,b,c))}}
W.fa.prototype={
$1:function(a){return a.a1(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.f9.prototype={
$1:function(a){return a.R(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.c2.prototype={
a1:function(a){return this.a.C(0,W.bq(a))},
R:function(a,b,c){var t,s
t=W.bq(a)
s=this.c
if(s.C(0,H.f(t)+"::"+b))return this.d.dZ(c)
else if(s.C(0,"*::"+b))return this.d.dZ(c)
else{s=this.b
if(s.C(0,H.f(t)+"::"+b))return!0
else if(s.C(0,"*::"+b))return!0
else if(s.C(0,H.f(t)+"::*"))return!0
else if(s.C(0,"*::*"))return!0}return!1},
dn:function(a,b,c,d){var t,s,r
this.a.J(0,c)
t=b.au(0,new W.i5())
s=b.au(0,new W.i6())
this.b.J(0,t)
r=this.c
r.J(0,C.r)
r.J(0,s)}}
W.i5.prototype={
$1:function(a){return!C.a.C(C.j,a)},
$S:function(){return{func:1,args:[,]}}}
W.i6.prototype={
$1:function(a){return C.a.C(C.j,a)},
$S:function(){return{func:1,args:[,]}}}
W.ie.prototype={
R:function(a,b,c){if(this.cY(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.iY(a,"template")==="")return this.e.C(0,b)
return!1}}
W.ig.prototype={
$1:function(a){return"TEMPLATE::"+H.f(a)},
$S:function(){return{func:1,args:[,]}}}
W.ic.prototype={
a1:function(a){var t=J.r(a)
if(!!t.$isbO)return!1
t=!!t.$isD
if(t&&W.bq(a)==="foreignObject")return!1
if(t)return!0
return!1},
R:function(a,b,c){if(b==="is"||C.d.bd(b,"on"))return!1
return this.a1(a)}}
W.ck.prototype={
p:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbD(J.b_(this.a,t))
this.c=t
return!0}this.sbD(null)
this.c=s
return!1},
gq:function(){return this.d},
sbD:function(a){this.d=a}}
W.dg.prototype={}
W.i3.prototype={}
W.dA.prototype={
b8:function(a){new W.ih(this).$2(a,null)},
ar:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)J.bl(t,a)}else J.bl(b,a)},
dR:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.lq(a)
r=J.iY(s.gdE(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.J(n)}p="element unprintable"
try{p=J.aG(a)}catch(n){H.J(n)}try{o=W.bq(a)
this.dQ(a,b,t,p,o,s,r)}catch(n){if(H.J(n) instanceof P.ao)throw n
else{this.ar(a,b)
window
m="Removing corrupted element "+H.f(p)
if(typeof console!="undefined")console.warn(m)}}},
dQ:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.ar(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.a1(a)){this.ar(a,b)
window
t="Removing disallowed element <"+H.f(e)+"> from "+J.aG(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.R(a,"is",g)){this.ar(a,b)
window
t="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gD(f)
s=H.B(t.slice(0),[H.al(t,0)])
for(r=f.gD(f).length-1,t=f.a,q=J.j(t);r>=0;--r){p=s[r]
if(!this.a.R(a,J.lH(p),q.a4(t,p))){window
o="Removing disallowed attribute <"+H.f(e)+" "+p+'="'+H.f(q.a4(t,p))+'">'
if(typeof console!="undefined")console.warn(o)
q.a4(t,p)
q.dK(t,p)}}if(!!J.r(a).$isbS)this.b8(a.content)}}
W.ih.prototype={
$2:function(a,b){var t,s,r,q
switch(a.nodeType){case 1:this.a.dR(a,b)
break
case 8:case 11:case 3:case 4:break
default:if(b==null){r=a.parentNode
if(r!=null)J.bl(r,a)}else J.bl(b,a)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.lr(t)}catch(q){H.J(q)
r=t
J.bl(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.o,W.o]}}}
W.br.prototype={$isc:1,
$asc:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.bs.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.bt.prototype={$isc:1,
$asc:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.bu.prototype={$isc:1,
$asc:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.bv.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.bw.prototype={$isc:1,
$asc:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.cn.prototype={}
W.cH.prototype={$isc:1,
$asc:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.ct.prototype={$isc:1,
$asc:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.cA.prototype={$isc:1,
$asc:function(){return[W.o]},
$isb:1,
$asb:function(){return[W.o]}}
W.cB.prototype={$isc:1,
$asc:function(){return[W.o]},
$isb:1,
$asb:function(){return[W.o]}}
W.cC.prototype={$isc:1,
$asc:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.cD.prototype={$isc:1,
$asc:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.cE.prototype={$isc:1,
$asc:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.cF.prototype={$isc:1,
$asc:function(){return[W.x]},
$isb:1,
$asb:function(){return[W.x]}}
W.cG.prototype={$isc:1,
$asc:function(){return[P.G]},
$isb:1,
$asb:function(){return[P.G]}}
W.cr.prototype={$isc:1,
$asc:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.cs.prototype={$isc:1,
$asc:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.cu.prototype={$isc:1,
$asc:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.cw.prototype={$isc:1,
$asc:function(){return[W.o]},
$isb:1,
$asb:function(){return[W.o]}}
W.cx.prototype={$isc:1,
$asc:function(){return[W.O]},
$isb:1,
$asb:function(){return[W.O]}}
W.cy.prototype={$isc:1,
$asc:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]}}
W.cI.prototype={$isc:1,
$asc:function(){return[P.G]},
$isb:1,
$asb:function(){return[P.G]}}
W.cK.prototype={$isc:1,
$asc:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.cU.prototype={$isc:1,
$asc:function(){return[W.o]},
$isb:1,
$asb:function(){return[W.o]}}
W.cV.prototype={$isc:1,
$asc:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.cT.prototype={$isc:1,
$asc:function(){return[W.o]},
$isb:1,
$asb:function(){return[W.o]}}
W.cY.prototype={$isc:1,
$asc:function(){return[W.o]},
$isb:1,
$asb:function(){return[W.o]}}
W.cZ.prototype={$isc:1,
$asc:function(){return[W.O]},
$isb:1,
$asb:function(){return[W.O]}}
W.d_.prototype={$isc:1,
$asc:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.d0.prototype={$isc:1,
$asc:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]}}
W.cL.prototype={$isc:1,
$asc:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.cN.prototype={$isc:1,
$asc:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.cP.prototype={$isc:1,
$asc:function(){return[W.x]},
$isb:1,
$asb:function(){return[W.x]}}
W.cR.prototype={$isc:1,
$asc:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.cW.prototype={$isc:1,
$asc:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.cX.prototype={$isc:1,
$asc:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
P.i8.prototype={
c5:function(a){var t,s,r
t=this.a
s=t.length
for(r=0;r<s;++r)if(t[r]===a)return r
C.a.l(t,a)
C.a.l(this.b,null)
return s},
b1:function(a){var t,s,r,q,p
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
s=J.r(a)
if(!!s.$isb4)return new Date(a.a)
if(!!s.$isO)return a
if(!!s.$isb1)return a
if(!!s.$isbx)return a
if(!!s.$isbA)return a
if(!!s.$isb8||!!s.$isaP)return a
if(!!s.$isI){r=this.c5(a)
q=this.b
p=q[r]
t.a=p
if(p!=null)return p
p={}
t.a=p
q[r]=p
s.ae(a,new P.ia(t,this))
return t.a}if(!!s.$isb){r=this.c5(a)
p=this.b[r]
if(p!=null)return p
return this.eb(a,r)}throw H.e(new P.bV("structured clone of other type"))},
eb:function(a,b){var t,s,r,q
t=J.Z(a)
s=t.gj(a)
r=new Array(s)
this.b[b]=r
for(q=0;q<s;++q)r[q]=this.b1(t.h(a,q))
return r}}
P.ia.prototype={
$2:function(a,b){this.a.a[a]=this.b.b1(b)},
$S:function(){return{func:1,args:[,,]}}}
P.is.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.q,,]}}}
P.i9.prototype={}
P.hW.prototype={}
P.G.prototype={$asG:null}
P.dJ.prototype={$isa:1}
P.aH.prototype={$isa:1}
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
gU:function(a){return a.z}}
P.ej.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ek.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gU:function(a){return a.z}}
P.el.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.em.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ep.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.er.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.af.prototype={}
P.ay.prototype={$isa:1}
P.ey.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ar.prototype={$isp:1}
P.eI.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return this.V(a,b)},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
V:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.ar]},
$isb:1,
$asb:function(){return[P.ar]}}
P.eT.prototype={$isa:1}
P.eU.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.as.prototype={$isp:1}
P.fb.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return this.V(a,b)},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
V:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.as]},
$isb:1,
$asb:function(){return[P.as]}}
P.fd.prototype={$isa:1,
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
P.bO.prototype={$isa:1,$isbO:1}
P.fK.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return this.V(a,b)},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
V:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]}}
P.D.prototype={
I:function(a,b,c,d){var t,s,r,q,p,o
t=H.B([],[W.dg])
C.a.l(t,W.kx(null))
C.a.l(t,W.kA())
C.a.l(t,new W.ic())
c=new W.dA(new W.dh(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.f).ed(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.R(q)
o=t.ga_(t)
for(t=J.j(p);r=o.firstChild,r!=null;)t.K(p,r)
return p},
$isa:1,
$isD:1}
P.fL.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fM.prototype={$isa:1}
P.dr.prototype={}
P.fQ.prototype={$isa:1}
P.bT.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.at.prototype={$isp:1}
P.h_.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return this.V(a,b)},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
V:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.at]},
$isb:1,
$asb:function(){return[P.at]}}
P.h6.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.h8.prototype={$isa:1}
P.h9.prototype={$isa:1}
P.bZ.prototype={$isa:1}
P.i0.prototype={$isa:1}
P.i1.prototype={$isa:1}
P.i2.prototype={$isa:1}
P.cq.prototype={$isc:1,
$asc:function(){return[P.ar]},
$isb:1,
$asb:function(){return[P.ar]}}
P.co.prototype={$isc:1,
$asc:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]}}
P.cv.prototype={$isc:1,
$asc:function(){return[P.as]},
$isb:1,
$asb:function(){return[P.as]}}
P.cz.prototype={$isc:1,
$asc:function(){return[P.at]},
$isb:1,
$asb:function(){return[P.at]}}
P.cJ.prototype={$isc:1,
$asc:function(){return[P.ar]},
$isb:1,
$asb:function(){return[P.ar]}}
P.cS.prototype={$isc:1,
$asc:function(){return[P.as]},
$isb:1,
$asb:function(){return[P.as]}}
P.cO.prototype={$isc:1,
$asc:function(){return[P.at]},
$isb:1,
$asb:function(){return[P.at]}}
P.cQ.prototype={$isc:1,
$asc:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]}}
P.dN.prototype={
gj:function(a){return a.length}}
P.fr.prototype={
bK:function(a,b){return a.activeTexture(b)},
bN:function(a,b,c){return a.attachShader(b,c)},
bO:function(a,b,c){return a.bindBuffer(b,c)},
bP:function(a,b,c){return a.bindTexture(b,c)},
bQ:function(a,b){return a.blendEquation(b)},
bR:function(a,b,c){return a.blendFunc(b,c)},
bS:function(a,b,c,d){return a.bufferData(b,c,d)},
bT:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bU:function(a,b){return a.compileShader(b)},
bV:function(a){return a.createBuffer()},
bW:function(a){return a.createProgram()},
bX:function(a,b){return a.createShader(b)},
bY:function(a){return a.createTexture()},
bZ:function(a,b){return a.depthMask(b)},
c_:function(a,b){return a.disable(b)},
c0:function(a,b,c,d){return a.drawArrays(b,c,d)},
c1:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c2:function(a,b){return a.enable(b)},
c3:function(a,b){return a.enableVertexAttribArray(b)},
av:function(a){return P.it(a.getContextAttributes())},
b2:function(a){return a.getError()},
b3:function(a,b){return a.getProgramInfoLog(b)},
b4:function(a,b,c){return a.getProgramParameter(b,c)},
b5:function(a,b){return a.getShaderInfoLog(b)},
b6:function(a,b,c){return a.getShaderParameter(b,c)},
b7:function(a,b,c){return a.getUniformLocation(b,c)},
c7:function(a,b){return a.linkProgram(b)},
cb:function(a,b,c){return a.pixelStorei(b,c)},
bc:function(a,b,c){return a.shaderSource(b,c)},
be:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aZ:function(a,b,c,d,e,f,g,h,i,j){var t
if(g==null)t=!0
else t=!1
if(t){this.aN(a,b,c,d,e,f,P.kL(g))
return}if(!!J.r(g).$isbd)t=!0
else t=!1
if(t){this.aO(a,b,c,d,e,f,g)
return}throw H.e(P.c8("Incorrect number or type of arguments"))},
cg:function(a,b,c,d,e,f,g){return this.aZ(a,b,c,d,e,f,g,null,null,null)},
aN:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aO:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
ci:function(a,b,c,d){return a.texParameterf(b,c,d)},
cj:function(a,b,c,d){return a.texParameteri(b,c,d)},
ck:function(a,b,c){return a.uniform1f(b,c)},
cl:function(a,b,c){return a.uniform1fv(b,c)},
cm:function(a,b,c){return a.uniform1i(b,c)},
cn:function(a,b,c){return a.uniform1iv(b,c)},
co:function(a,b,c){return a.uniform2fv(b,c)},
cp:function(a,b,c){return a.uniform3fv(b,c)},
cq:function(a,b,c){return a.uniform4fv(b,c)},
cr:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cs:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cu:function(a,b){return a.useProgram(b)},
cw:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)}}
P.fs.prototype={
e1:function(a,b){return a.beginTransformFeedback(b)},
e4:function(a,b){return a.bindVertexArray(b)},
ef:function(a){return a.createVertexArray()},
el:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
em:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
en:function(a){return a.endTransformFeedback()},
eR:function(a,b,c,d){this.dT(a,b,c,d)
return},
dT:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
eS:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bK:function(a,b){return a.activeTexture(b)},
bN:function(a,b,c){return a.attachShader(b,c)},
bO:function(a,b,c){return a.bindBuffer(b,c)},
bP:function(a,b,c){return a.bindTexture(b,c)},
bQ:function(a,b){return a.blendEquation(b)},
bR:function(a,b,c){return a.blendFunc(b,c)},
bS:function(a,b,c,d){return a.bufferData(b,c,d)},
bT:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bU:function(a,b){return a.compileShader(b)},
bV:function(a){return a.createBuffer()},
bW:function(a){return a.createProgram()},
bX:function(a,b){return a.createShader(b)},
bY:function(a){return a.createTexture()},
bZ:function(a,b){return a.depthMask(b)},
c_:function(a,b){return a.disable(b)},
c0:function(a,b,c,d){return a.drawArrays(b,c,d)},
c1:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c2:function(a,b){return a.enable(b)},
c3:function(a,b){return a.enableVertexAttribArray(b)},
av:function(a){return P.it(a.getContextAttributes())},
b2:function(a){return a.getError()},
b3:function(a,b){return a.getProgramInfoLog(b)},
b4:function(a,b,c){return a.getProgramParameter(b,c)},
b5:function(a,b){return a.getShaderInfoLog(b)},
b6:function(a,b,c){return a.getShaderParameter(b,c)},
b7:function(a,b,c){return a.getUniformLocation(b,c)},
c7:function(a,b){return a.linkProgram(b)},
cb:function(a,b,c){return a.pixelStorei(b,c)},
bc:function(a,b,c){return a.shaderSource(b,c)},
be:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aZ:function(a,b,c,d,e,f,g,h,i,j){var t
if(g==null)t=!0
else t=!1
if(t){this.aN(a,b,c,d,e,f,P.kL(g))
return}if(!!J.r(g).$isbd)t=!0
else t=!1
if(t){this.aO(a,b,c,d,e,f,g)
return}throw H.e(P.c8("Incorrect number or type of arguments"))},
cg:function(a,b,c,d,e,f,g){return this.aZ(a,b,c,d,e,f,g,null,null,null)},
aN:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aO:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
ci:function(a,b,c,d){return a.texParameterf(b,c,d)},
cj:function(a,b,c,d){return a.texParameteri(b,c,d)},
ck:function(a,b,c){return a.uniform1f(b,c)},
cl:function(a,b,c){return a.uniform1fv(b,c)},
cm:function(a,b,c){return a.uniform1i(b,c)},
cn:function(a,b,c){return a.uniform1iv(b,c)},
co:function(a,b,c){return a.uniform2fv(b,c)},
cp:function(a,b,c){return a.uniform3fv(b,c)},
cq:function(a,b,c){return a.uniform4fv(b,c)},
cr:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cs:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cu:function(a,b){return a.useProgram(b)},
cw:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
$isa:1}
P.ii.prototype={$isa:1}
P.fA.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return P.it(this.dF(a,b))},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
dF:function(a,b){return a.item(b)},
$isc:1,
$asc:function(){return[P.I]},
$isb:1,
$asb:function(){return[P.I]}}
P.cp.prototype={$isc:1,
$asc:function(){return[P.I]},
$isb:1,
$asb:function(){return[P.I]}}
P.cM.prototype={$isc:1,
$asc:function(){return[P.I]},
$isb:1,
$asb:function(){return[P.I]}}
G.eZ.prototype={}
G.K.prototype={
w:function(a,b){var t=this.d
if(H.aD(!t.E(0,a)))H.aY("uniform "+a+" already set")
t.i(0,a,b)},
k:function(a){var t,s,r,q
t=H.B(["{"+new H.aC(H.iz(this),null).k(0)+"}["+this.a+"]"],[P.q])
for(s=this.d,r=s.gD(s),r=r.gu(r);r.p();){q=r.gq()
C.a.l(t,H.f(q)+": "+H.f(s.h(0,q)))}return C.a.ai(t,"\n")}}
G.dR.prototype={
c4:function(a,b,c){J.lo(this.a,b)
if(c>0)J.lN(this.a,b,c)}}
G.en.prototype={}
G.ev.prototype={
bh:function(a){var t=this.e
H.d(!t.E(0,a))
H.d(C.d.bd(a,"a"))
switch($.$get$S().h(0,a).a){case"vec2":t.i(0,a,H.B([],[T.Q]))
break
case"vec3":t.i(0,a,H.B([],[T.L]))
break
case"vec4":t.i(0,a,H.B([],[T.bX]))
break
case"float":t.i(0,a,H.B([],[P.N]))
break
case"uvec4":t.i(0,a,H.B([],[[P.b,P.m]]))
break
default:if(H.aD(!1))H.aY("unknown type for "+a)}},
d0:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=t&&C.a,r=0;r<4;++r){q=b[r]
p=new Float32Array(2)
o=q.a
p[1]=o[1]
p[0]=o[0]
s.l(t,new T.Q(p))}},
d1:function(a,b){var t,s,r,q,p
t=this.e.h(0,a)
for(s=t&&C.a,r=0;r<4;++r){q=b[r]
p=new T.L(new Float32Array(3))
p.ba(q)
s.l(t,p)}},
d2:function(a){var t,s,r,q,p
H.d(!0)
t=this.d
s=t.length
C.a.l(this.c,new G.en(s,s+1,s+2,s+3))
for(r=0;r<4;++r){q=a[r]
p=new T.L(new Float32Array(3))
p.ba(q)
C.a.l(t,p)}},
d6:function(){var t,s,r,q,p,o,n,m,l,k
t=this.c
s=t.length
H.d(s>0)
s=new Array(t.length*6)
s.fixed$length=Array
r=H.B(s,[P.m])
for(s=this.b,q=0,p=0;!1;++p){o=s[p]
r[q]=o.geX(o)
r[q+1]=o.geY(o)
r[q+2]=o.geZ(o)
q+=3}for(s=t.length,p=0;n=t.length,p<n;n===s||(0,H.ae)(t),++p){m=t[p]
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
k:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gD(s),r=r.gu(r);r.p();){q=r.gq()
p=$.$get$S().h(0,q).a
C.a.l(t,H.f(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.ai(t," ")}}
G.eW.prototype={
bg:function(a,b,c){var t,s
if(C.d.aC(a,0)===105){if(H.aD(C.b.aB(b.length,c)===this.z))H.aY("ChangeAttribute "+this.z)}else H.d(C.b.aB(b.length,c)===(this.ch.length/3|0))
this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.dE(t.a,34962,s)
J.js(t.a,34962,b,35048)},
d7:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
a5:function(a,b,c){var t,s,r,q,p,o
t=J.jp(a,0)===105
if(t&&this.z===0)this.z=C.b.aB(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.iV(r.a))
this.bg(a,b,c)
q=$.$get$S().h(0,a)
if(q==null)throw H.e("Unknown canonical "+a)
p=this.x
if(H.aD(p.E(0,a)))H.aY("unexpected attribute "+a)
o=p.h(0,a)
J.dF(r.a,this.e)
r.c4(0,o,t?1:0)
s=s.h(0,a)
p=q.bi()
J.dE(r.a,34962,s)
J.jB(r.a,o,p,5126,!1,0,0)},
k:function(a){var t,s,r
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,t=t.gD(t),t=t.gu(t);t.p();){r=t.gq()
C.a.l(s,H.f(r)+":"+this.cy.h(0,r).length)}return"MESH["+this.a+"] "+C.a.ai(s,"  ")},
saG:function(a){this.cx=a}}
G.fq.prototype={
dg:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gj(t)===s.gj(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gD(s),s=s.gu(s);s.p();){q=s.gq()
if(!t.E(0,q))C.a.l(r,q)}for(t=this.x,s=new P.c0(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.p();){q=s.d
if(!t.C(0,q))C.a.l(r,q)}return r},
dj:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gD(b),s=s.gu(s),r=this.d,q=this.y,p=this.z,o=0;s.p();){n=s.gq()
switch(J.jp(n,0)){case 117:if(q.E(0,n)){m=b.h(0,n)
if(p.E(0,n))H.iO("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$S().h(0,n)
if(l==null)H.A("unknown "+n)
H.d(q.E(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.iZ(r.a,k,m)
else if(!!J.r(m).$isk6)J.lL(r.a,k,m)
break
case"float":if(l.c===0)J.lJ(r.a,k,m)
else if(!!J.r(m).$iseq)J.lK(r.a,k,m)
break
case"mat4":if(l.c===0){j=C.o.gcT(H.aw(m,"$isnp"))
J.jA(r.a,k,!1,j)}else if(!!J.r(m).$iseq)J.jA(r.a,k,!1,m)
else if(H.aD(!1))H.aY("bad unform: "+n)
break
case"mat3":if(l.c===0){j=H.aw(m,"$isbE").a
J.jz(r.a,k,!1,j)}else if(!!J.r(m).$iseq)J.jz(r.a,k,!1,m)
else if(H.aD(!1))H.aY("bad unform: "+n)
break
case"vec4":if(l.c===0){j=C.o.gcT(H.aw(m,"$isbX"))
J.jy(r.a,k,j)}else J.jy(r.a,k,m)
break
case"vec3":if(l.c===0){j=H.aw(m,"$isL").a
J.jx(r.a,k,j)}else J.jx(r.a,k,m)
break
case"vec2":if(l.c===0){j=H.aw(m,"$isQ").a
J.jw(r.a,k,j)}else J.jw(r.a,k,m)
break
case"sampler2D":case"sampler2DShadow":j=C.b.a3(33984,this.ch)
J.jq(r.a,j)
j=H.aw(m,"$isbU").b
J.bm(r.a,3553,j)
j=this.ch
J.iZ(r.a,k,j)
this.ch=this.ch+1
break
case"samplerCube":H.d(n==="uCubeTexture")
j=C.b.a3(33984,this.ch)
J.jq(r.a,j)
j=H.aw(m,"$isbU").b
J.bm(r.a,34067,j)
j=this.ch
J.iZ(r.a,k,j)
this.ch=this.ch+1
break
default:H.iO("Error: unknow uniform type: "+j)
H.d(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":if(J.C(m,!0))J.dG(r.a,2929)
else J.li(r.a,2929)
break
case"cStencilFunc":H.aw(m,"$isnr")
m.geq()
J.dG(r.a,2960)
j=m.geq()
i=m.gf1(m)
h=m.gf0(m)
J.lE(r.a,j,i,h)
break
case"cDepthWrite":J.lh(r.a,m)
break
case"cBlendEquation":H.aw(m,"$isnq")
m.geo()
J.dG(r.a,3042)
j=m.geW()
i=m.gf_()
J.lb(r.a,j,i)
i=m.geo()
J.la(r.a,i)
break}++o
break}}s=Date.now()
""+o
new P.aK(1000*(s-new P.b4(t,!1).a)).k(0)},
d4:function(a,b,c){var t,s,r,q,p,o,n,m,l
Date.now()
t=this.d
s=this.r
J.lM(t.a,s)
this.ch=0
this.z.S(0)
for(r=0;r<1;++r){q=b[r]
this.dj(q.a,q.d)}s=this.Q
s.S(0)
for(p=a.cy,p=p.gD(p),p=p.gu(p);p.p();)s.l(0,p.gq())
o=this.dg()
if(o.length!==0)P.ad("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.f(o)))
J.dF(a.d.a,a.e)
n=this.e.f.length>0
s=a.f
p=a.d7()
m=a.Q
l=a.z
t.toString
if(n)J.l9(t.a,s)
if(m!==-1)if(l>1)J.lm(t.a,s,p,m,0,l)
else J.ll(t.a,s,p,m,0)
else if(l>1)J.lk(t.a,s,0,p,l)
else J.lj(t.a,s,0,p)
if(n)J.lp(t.a)},
d3:function(a,b){return this.d4(a,b,null)},
da:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j
t=this.d
s=this.e
r=s.b
q=this.f
p=q.b
o=s.f
n=J.le(t.a)
m=G.kv(t.a,35633,r)
J.jr(t.a,n,m)
l=G.kv(t.a,35632,p)
J.jr(t.a,n,l)
if(o.length>0)J.lI(t.a,n,o,35980)
J.lz(t.a,n)
if(!J.ly(t.a,n,35714))H.A(J.lx(t.a,n))
this.r=n
this.sds(0,P.j7(s.c,null))
for(s=s.d,r=s.length,p=this.y,k=0;k<s.length;s.length===r||(0,H.ae)(s),++k){j=s[k]
o=this.r
p.i(0,j,J.ju(t.a,o,j))}for(s=q.d,r=s.length,k=0;k<s.length;s.length===r||(0,H.ae)(s),++k){j=s[k]
q=this.r
p.i(0,j,J.ju(t.a,q,j))}},
sds:function(a,b){this.x=b}}
G.i.prototype={
bi:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.d(!1)
return-1}}}
G.a6.prototype={
d_:function(a){var t,s,r,q
H.d(this.b==null)
for(t=this.c,s=this.x,r=0;r<2;++r){q=a[r]
H.d($.$get$S().E(0,q))
H.d(!C.a.C(t,q))
C.a.l(t,q)
s.i(0,q,this.r);++this.r}C.a.az(t)},
N:function(a){var t,s,r,q
H.d(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.ae)(a),++r){q=a[r]
if(H.aD($.$get$S().E(0,q)))H.aY("missing uniform "+q)
H.d(!C.a.C(s,q))
C.a.l(s,q)}C.a.az(s)},
M:function(a){var t,s,r
H.d(this.b==null)
for(t=this.e,s=0;s<1;++s){r=a[s]
H.d($.$get$S().E(0,r))
H.d(!C.a.C(t,r))
C.a.l(t,r)}C.a.az(t)},
dd:function(a,b){H.d(this.b==null)
this.b=this.bl(!0,a,b)},
bj:function(a){return this.dd(a,null)},
dc:function(a,b){H.d(this.b==null)
this.b=this.bl(!1,a,b)},
W:function(a){return this.dc(a,null)},
bl:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.d(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.ae)(t),++o){n=t[o]
m=$.$get$S().h(0,n)
C.a.l(q,"layout (location="+H.f(p.h(0,n))+") in "+m.a+" "+H.f(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.ae)(t),++o){k=t[o]
m=$.$get$S().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.f(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.ae)(t),++o){k=t[o]
m=$.$get$S().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.f(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.ae)(t),++o){k=t[o]
m=$.$get$S().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.f(k)+j+";")}C.a.l(q,"")
if(a)C.a.l(q,"void main(void) {")
C.a.J(q,b)
if(a)C.a.l(q,"}")
return C.a.ai(q,"\n")}}
G.fT.prototype={
d8:function(a,b){var t=this.e
if(t!==1)J.lG(a.a,b,34046,t)
J.dI(a.a,b,10240,this.r)
J.dI(a.a,b,10241,this.f)
if(this.b){J.dI(a.a,b,10242,33071)
J.dI(a.a,b,10243,33071)}}}
G.bU.prototype={
k:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.ez.prototype={
bk:function(a){var t,s
t=this.d
s=this.c
J.bm(t.a,s,this.b)
J.lF(t.a,s,0,6408,6408,5121,a)}}
R.fC.prototype={
dm:function(a,b,c,d){var t,s,r,q,p
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
p=(r&&C.l).bs(r,"float")
r.setProperty(p,"left","")
p=C.l.bs(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.h.K(t,s)}return t},
de:function(a,b,c){var t,s,r
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
J.iT(this.a,s)
r=this.dm(b,c,90,30)
this.d=r
J.iT(this.a,r)
t=t.createElement("div")
this.c=t
J.iT(this.a,t)}}
R.fD.prototype={
di:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.n.eQ(s,2)+" fps"
t=this.c;(t&&C.h).cP(t,b)
r=C.b.P(30*C.n.e6(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.h).K(t,q)},
dh:function(a){return this.di(a,"")}}
D.eP.prototype={
$1:function(a){var t,s
t=document.createElement("video")
t.autoplay=!0
s=new W.hs(t,"playing",!1,[W.nl])
s.gaT(s).al(new D.eO(this.a,t))
t.src=(self.URL||self.webkitURL).createObjectURL(a)},
$S:function(){return{func:1,args:[W.b7]}}}
D.eO.prototype={
$1:function(a){return this.a.ab(0,this.b)},
$S:function(){return{func:1,args:[,]}}}
D.eQ.prototype={
$1:function(a){P.ad("E:"+("Camera open error "+H.f(a)))
this.a.ab(0,null)},
$S:function(){return{func:1,args:[P.p]}}}
A.iA.prototype={
$2:function(a,b){var t=536870911&a+J.an(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(){return{func:1,args:[P.m,P.p]}}}
T.bE.prototype={
k:function(a){return"[0] "+this.aw(0).k(0)+"\n[1] "+this.aw(1).k(0)+"\n[2] "+this.aw(2).k(0)+"\n"},
h:function(a,b){return this.a[b]},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.bE){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gv:function(a){return A.jj(this.a)},
aw:function(a){var t,s
t=new Float32Array(H.T(3))
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.L(t)},
b9:function(a,b){var t=this.a
t[0]=t[0]*b
t[1]=t[1]*b
t[2]=t[2]*b
t[3]=t[3]*b
t[4]=t[4]*b
t[5]=t[5]*b
t[6]=t[6]*b
t[7]=t[7]*b
t[8]=t[8]*b}}
T.Q.prototype={
k:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+"]"},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.Q){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gv:function(a){return A.jj(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.L.prototype={
Z:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
ba:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
k:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+"]"},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.L){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gv:function(a){return A.jj(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return Math.sqrt(s*s+r*r+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gU:function(a){return this.a[2]}}
T.bX.prototype={}
T.e2.prototype={
d5:function(a,b,c){$.$get$ch().i(0,this.c.a,this)}}
T.iL.prototype={
$1:function(a){var t,s,r,q,p
try{s=this.a.b
s.bk(s.f)
r=s.d
s=s.c
J.bm(r.a,s,null)}catch(q){t=H.J(q)
P.ad(t)}p=$.$get$ch().h(0,$.$get$iv().value)
s=p.c
r=s.d
r.i(0,"uTime",a/1000)
r.i(0,"uTexture",this.a.b)
p.b.d3(this.c,[s])
C.x.ge_(window).al(this)
this.b.dh(a+0)},
$S:function(){return{func:1,v:true,args:[P.U]}}}
T.iM.prototype={
$1:function(a){var t,s,r,q,p,o,n,m,l
t=J.b_(a,0)
s=this.a
s.a=t
if(t==null)C.x.dY(window,"Could not access camera - do you have a camera installed?")
r=s.a
q=r.videoWidth
p=r.videoHeight
P.ad("camera resolution: "+H.f(q)+"x"+H.f(p))
r=this.b
o=s.a
n=$.$get$kg()
m=J.lf(r.a)
l=new G.ez(o,"video",m,3553,r,n)
J.bm(r.a,3553,m)
J.lB(r.a,37440,1)
l.bk(o)
n.d8(r,3553)
H.d(J.lw(r.a)===0)
J.bm(r.a,3553,null)
s.b=l
this.c.$1(0)},
$S:function(){return{func:1,args:[P.b]}}}
J.a.prototype.cV=J.a.prototype.k
J.bC.prototype.cX=J.bC.prototype.k
P.W.prototype.cW=P.W.prototype.au
W.a2.prototype.aA=W.a2.prototype.I
W.c2.prototype.cY=W.c2.prototype.R;(function installTearOffs(){installTearOff(H.aV.prototype,"geC",0,0,0,null,["$0"],["at"],0)
installTearOff(H.aj.prototype,"gcH",0,0,0,null,["$1"],["H"],2)
installTearOff(H.aU.prototype,"geh",0,0,0,null,["$1"],["T"],2)
installTearOff(P,"mR",1,0,0,null,["$1"],["mv"],1)
installTearOff(P,"mS",1,0,0,null,["$1"],["mw"],1)
installTearOff(P,"mT",1,0,0,null,["$1"],["mx"],1)
installTearOff(P,"kJ",1,0,0,null,["$0"],["mO"],0)
installTearOff(P.E.prototype,"gbx",0,0,0,null,["$2","$1"],["F","dv"],5)
installTearOff(P,"mX",1,0,0,null,["$2"],["lT"],6)
installTearOff(W,"n2",1,0,0,null,["$4"],["mC"],4)
installTearOff(W,"n3",1,0,0,null,["$4"],["mD"],4)
installTearOff(W.df.prototype,"gaW",0,1,0,null,["$0"],["aX"],3)
installTearOff(W.ds.prototype,"gaW",0,1,0,null,["$0"],["aX"],3)
installTearOff(T,"kK",1,0,0,null,["$0"],["nb"],0)})();(function inheritance(){inherit(P.p,null)
var t=P.p
inherit(H.j4,t)
inherit(J.a,t)
inherit(J.dM,t)
inherit(P.W,t)
inherit(H.d7,t)
inherit(P.d2,t)
inherit(H.cj,t)
inherit(H.b2,t)
inherit(H.hU,t)
inherit(H.aV,t)
inherit(H.ht,t)
inherit(H.aW,t)
inherit(H.hT,t)
inherit(H.hl,t)
inherit(H.ba,t)
inherit(H.fV,t)
inherit(H.ap,t)
inherit(H.aj,t)
inherit(H.aU,t)
inherit(H.fp,t)
inherit(H.h1,t)
inherit(P.b5,t)
inherit(H.dz,t)
inherit(H.aC,t)
inherit(H.aq,t)
inherit(H.eJ,t)
inherit(H.eL,t)
inherit(P.hn,t)
inherit(P.be,t)
inherit(P.E,t)
inherit(P.du,t)
inherit(P.bQ,t)
inherit(P.fF,t)
inherit(P.b0,t)
inherit(P.il,t)
inherit(P.fw,t)
inherit(P.hR,t)
inherit(P.c0,t)
inherit(P.bN,t)
inherit(P.w,t)
inherit(P.hS,t)
inherit(P.aZ,t)
inherit(P.F,t)
inherit(P.b4,t)
inherit(P.U,t)
inherit(P.aK,t)
inherit(P.dp,t)
inherit(P.hy,t)
inherit(P.e4,t)
inherit(P.b,t)
inherit(P.I,t)
inherit(P.aA,t)
inherit(P.bP,t)
inherit(P.q,t)
inherit(P.bR,t)
inherit(W.dT,t)
inherit(W.hk,t)
inherit(W.c_,t)
inherit(W.y,t)
inherit(W.dh,t)
inherit(W.c2,t)
inherit(W.ic,t)
inherit(W.ck,t)
inherit(W.dg,t)
inherit(W.i3,t)
inherit(W.dA,t)
inherit(P.i8,t)
inherit(P.hW,t)
inherit(G.eZ,t)
inherit(G.dR,t)
inherit(G.en,t)
inherit(G.ev,t)
inherit(G.i,t)
inherit(G.a6,t)
inherit(G.fT,t)
inherit(G.bU,t)
inherit(R.fC,t)
inherit(T.bE,t)
inherit(T.Q,t)
inherit(T.L,t)
inherit(T.bX,t)
inherit(T.e2,t)
t=J.a
inherit(J.eF,t)
inherit(J.d5,t)
inherit(J.bC,t)
inherit(J.aM,t)
inherit(J.bB,t)
inherit(J.aN,t)
inherit(H.b8,t)
inherit(H.aP,t)
inherit(W.h,t)
inherit(W.a0,t)
inherit(W.b1,t)
inherit(W.dP,t)
inherit(W.x,t)
inherit(W.cn,t)
inherit(W.dV,t)
inherit(W.dW,t)
inherit(W.dX,t)
inherit(W.ce,t)
inherit(W.cf,t)
inherit(W.cg,t)
inherit(W.cy,t)
inherit(W.e_,t)
inherit(W.cx,t)
inherit(W.a3,t)
inherit(W.ew,t)
inherit(W.cw,t)
inherit(W.bA,t)
inherit(W.eN,t)
inherit(W.eV,t)
inherit(W.a4,t)
inherit(W.cu,t)
inherit(W.de,t)
inherit(W.df,t)
inherit(W.cB,t)
inherit(W.fc,t)
inherit(W.bc,t)
inherit(W.a5,t)
inherit(W.ct,t)
inherit(W.ai,t)
inherit(W.dk,t)
inherit(W.a8,t)
inherit(W.cs,t)
inherit(W.a9,t)
inherit(W.fE,t)
inherit(W.X,t)
inherit(W.cr,t)
inherit(W.fU,t)
inherit(W.ab,t)
inherit(W.cH,t)
inherit(W.fZ,t)
inherit(W.ds,t)
inherit(W.h5,t)
inherit(W.ha,t)
inherit(W.hm,t)
inherit(W.cG,t)
inherit(W.cF,t)
inherit(W.cE,t)
inherit(W.cA,t)
inherit(W.cD,t)
inherit(W.cC,t)
inherit(W.ij,t)
inherit(W.ik,t)
inherit(P.ar,t)
inherit(P.cq,t)
inherit(P.as,t)
inherit(P.cv,t)
inherit(P.fh,t)
inherit(P.fi,t)
inherit(P.fn,t)
inherit(P.co,t)
inherit(P.at,t)
inherit(P.cz,t)
inherit(P.h9,t)
inherit(P.dN,t)
inherit(P.fr,t)
inherit(P.fs,t)
inherit(P.ii,t)
inherit(P.cp,t)
t=J.bC
inherit(J.ff,t)
inherit(J.aS,t)
inherit(J.aO,t)
inherit(J.j3,J.aM)
t=J.bB
inherit(J.d4,t)
inherit(J.d3,t)
t=P.W
inherit(H.c,t)
inherit(H.d8,t)
inherit(H.dt,t)
t=H.c
inherit(H.b6,t)
inherit(H.eK,t)
inherit(H.e3,H.d8)
t=P.d2
inherit(H.eR,t)
inherit(H.hc,t)
t=H.b6
inherit(H.bD,t)
inherit(P.eM,t)
t=H.b2
inherit(H.iQ,t)
inherit(H.iR,t)
inherit(H.hP,t)
inherit(H.hu,t)
inherit(H.eC,t)
inherit(H.eD,t)
inherit(H.hV,t)
inherit(H.fW,t)
inherit(H.fX,t)
inherit(H.iS,t)
inherit(H.iF,t)
inherit(H.iG,t)
inherit(H.iH,t)
inherit(H.iI,t)
inherit(H.iJ,t)
inherit(H.fP,t)
inherit(H.eG,t)
inherit(H.iB,t)
inherit(H.iC,t)
inherit(H.iD,t)
inherit(P.hh,t)
inherit(P.hg,t)
inherit(P.hi,t)
inherit(P.hj,t)
inherit(P.eu,t)
inherit(P.et,t)
inherit(P.hz,t)
inherit(P.hH,t)
inherit(P.hD,t)
inherit(P.hE,t)
inherit(P.hF,t)
inherit(P.hB,t)
inherit(P.hG,t)
inherit(P.hA,t)
inherit(P.hK,t)
inherit(P.hL,t)
inherit(P.hJ,t)
inherit(P.hI,t)
inherit(P.fI,t)
inherit(P.fJ,t)
inherit(P.fG,t)
inherit(P.fH,t)
inherit(P.im,t)
inherit(P.iq,t)
inherit(P.hZ,t)
inherit(P.hY,t)
inherit(P.i_,t)
inherit(P.eS,t)
inherit(P.e0,t)
inherit(P.e1,t)
inherit(W.ir,t)
inherit(W.f7,t)
inherit(W.f8,t)
inherit(W.hd,t)
inherit(W.hx,t)
inherit(W.fa,t)
inherit(W.f9,t)
inherit(W.i5,t)
inherit(W.i6,t)
inherit(W.ig,t)
inherit(W.ih,t)
inherit(P.ia,t)
inherit(P.is,t)
inherit(D.eP,t)
inherit(D.eO,t)
inherit(D.eQ,t)
inherit(A.iA,t)
inherit(T.iL,t)
inherit(T.iM,t)
t=H.hl
inherit(H.bg,t)
inherit(H.c3,t)
t=P.b5
inherit(H.di,t)
inherit(H.eH,t)
inherit(H.h4,t)
inherit(H.h3,t)
inherit(H.dQ,t)
inherit(H.fu,t)
inherit(P.c9,t)
inherit(P.b9,t)
inherit(P.ao,t)
inherit(P.u,t)
inherit(P.bV,t)
inherit(P.ah,t)
inherit(P.a1,t)
inherit(P.dU,t)
t=H.fP
inherit(H.fB,t)
inherit(H.bo,t)
inherit(H.hf,P.c9)
t=H.aP
inherit(H.f_,t)
inherit(H.da,t)
t=H.da
inherit(H.bI,t)
inherit(H.bJ,t)
inherit(H.bL,H.bI)
inherit(H.db,H.bL)
inherit(H.bK,H.bJ)
inherit(H.dc,H.bK)
t=H.db
inherit(H.d9,t)
inherit(H.f0,t)
t=H.dc
inherit(H.f1,t)
inherit(H.f2,t)
inherit(H.f3,t)
inherit(H.f4,t)
inherit(H.f5,t)
inherit(H.dd,t)
inherit(H.f6,t)
t=P.hn
inherit(P.dv,t)
inherit(P.id,t)
inherit(P.hX,P.il)
inherit(P.dx,H.aq)
inherit(P.fv,P.fw)
inherit(P.hO,P.fv)
inherit(P.hQ,P.hO)
inherit(P.d6,P.bN)
t=P.U
inherit(P.N,t)
inherit(P.m,t)
t=P.ao
inherit(P.dl,t)
inherit(P.eA,t)
t=W.h
inherit(W.o,t)
inherit(W.bt,t)
inherit(W.dS,t)
inherit(W.eo,t)
inherit(W.bz,t)
inherit(W.b7,t)
inherit(W.bH,t)
inherit(W.fk,t)
inherit(W.dm,t)
inherit(W.fx,t)
inherit(W.a7,t)
inherit(W.bs,t)
inherit(W.aa,t)
inherit(W.Y,t)
inherit(W.br,t)
inherit(W.h7,t)
inherit(W.hb,t)
inherit(W.bY,t)
inherit(W.he,t)
inherit(W.aT,t)
inherit(W.i4,t)
t=W.o
inherit(W.a2,t)
inherit(W.aJ,t)
inherit(W.bp,t)
inherit(W.cd,t)
inherit(W.hp,t)
t=W.a2
inherit(W.k,t)
inherit(P.D,t)
t=W.k
inherit(W.dK,t)
inherit(W.dL,t)
inherit(W.aI,t)
inherit(W.ca,t)
inherit(W.cc,t)
inherit(W.es,t)
inherit(W.cl,t)
inherit(W.eB,t)
inherit(W.bG,t)
inherit(W.bb,t)
inherit(W.dq,t)
inherit(W.fN,t)
inherit(W.fO,t)
inherit(W.bS,t)
inherit(W.hN,t)
inherit(W.bw,W.bt)
inherit(W.dO,W.bw)
inherit(W.b3,W.cn)
inherit(W.dY,W.cf)
inherit(W.d0,W.cy)
inherit(W.dZ,W.d0)
inherit(W.O,W.b1)
inherit(W.cZ,W.cx)
inherit(W.bx,W.cZ)
inherit(W.cT,W.cw)
inherit(W.by,W.cT)
inherit(W.cm,W.bp)
inherit(W.ex,W.bz)
inherit(W.eX,W.bH)
inherit(W.cV,W.cu)
inherit(W.eY,W.cV)
inherit(W.R,P.d6)
inherit(W.cU,W.cB)
inherit(W.bM,W.cU)
t=W.bc
inherit(W.fe,t)
inherit(W.ft,t)
inherit(W.h0,t)
inherit(W.cK,W.ct)
inherit(W.fg,W.cK)
inherit(W.fj,W.ai)
inherit(W.bv,W.bs)
inherit(W.fy,W.bv)
inherit(W.cN,W.cs)
inherit(W.fz,W.cN)
inherit(W.cL,W.cr)
inherit(W.fR,W.cL)
inherit(W.bu,W.br)
inherit(W.fS,W.bu)
inherit(W.cW,W.cH)
inherit(W.fY,W.cW)
inherit(W.bd,W.bG)
inherit(W.cI,W.cG)
inherit(W.dw,W.cI)
inherit(W.cP,W.cF)
inherit(W.ho,W.cP)
inherit(W.hq,W.cg)
inherit(W.d_,W.cE)
inherit(W.hM,W.d_)
inherit(W.cY,W.cA)
inherit(W.dy,W.cY)
inherit(W.cX,W.cD)
inherit(W.i7,W.cX)
inherit(W.cR,W.cC)
inherit(W.ib,W.cR)
inherit(W.hr,W.hk)
inherit(W.hv,P.bQ)
inherit(W.hs,W.hv)
inherit(W.hw,P.fF)
inherit(W.ie,W.c2)
inherit(P.i9,P.i8)
inherit(P.G,P.hW)
t=P.D
inherit(P.ay,t)
inherit(P.aH,t)
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
inherit(P.ep,t)
inherit(P.eT,t)
inherit(P.eU,t)
inherit(P.fd,t)
inherit(P.bO,t)
inherit(P.fM,t)
inherit(P.h8,t)
inherit(P.bZ,t)
inherit(P.i0,t)
inherit(P.i1,t)
inherit(P.i2,t)
t=P.ay
inherit(P.dJ,t)
inherit(P.er,t)
inherit(P.af,t)
inherit(P.ey,t)
inherit(P.fL,t)
inherit(P.dr,t)
inherit(P.h6,t)
inherit(P.cJ,P.cq)
inherit(P.eI,P.cJ)
inherit(P.cS,P.cv)
inherit(P.fb,P.cS)
inherit(P.fo,P.af)
inherit(P.cQ,P.co)
inherit(P.fK,P.cQ)
t=P.dr
inherit(P.fQ,t)
inherit(P.bT,t)
inherit(P.cO,P.cz)
inherit(P.h_,P.cO)
inherit(P.cM,P.cp)
inherit(P.fA,P.cM)
t=G.eZ
inherit(G.K,t)
inherit(G.eW,t)
inherit(G.fq,t)
inherit(G.ez,G.bU)
inherit(R.fD,R.fC)
mixin(H.bI,P.w)
mixin(H.bJ,P.w)
mixin(H.bK,H.cj)
mixin(H.bL,H.cj)
mixin(P.bN,P.w)
mixin(W.br,P.w)
mixin(W.bs,P.w)
mixin(W.bt,P.w)
mixin(W.bu,W.y)
mixin(W.bv,W.y)
mixin(W.bw,W.y)
mixin(W.cn,W.dT)
mixin(W.cH,P.w)
mixin(W.ct,P.w)
mixin(W.cA,P.w)
mixin(W.cB,P.w)
mixin(W.cC,P.w)
mixin(W.cD,P.w)
mixin(W.cE,P.w)
mixin(W.cF,P.w)
mixin(W.cG,P.w)
mixin(W.cr,P.w)
mixin(W.cs,P.w)
mixin(W.cu,P.w)
mixin(W.cw,P.w)
mixin(W.cx,P.w)
mixin(W.cy,P.w)
mixin(W.cI,W.y)
mixin(W.cK,W.y)
mixin(W.cU,W.y)
mixin(W.cV,W.y)
mixin(W.cT,W.y)
mixin(W.cY,W.y)
mixin(W.cZ,W.y)
mixin(W.d_,W.y)
mixin(W.d0,W.y)
mixin(W.cL,W.y)
mixin(W.cN,W.y)
mixin(W.cP,W.y)
mixin(W.cR,W.y)
mixin(W.cW,W.y)
mixin(W.cX,W.y)
mixin(P.cq,P.w)
mixin(P.co,P.w)
mixin(P.cv,P.w)
mixin(P.cz,P.w)
mixin(P.cJ,W.y)
mixin(P.cS,W.y)
mixin(P.cO,W.y)
mixin(P.cQ,W.y)
mixin(P.cp,P.w)
mixin(P.cM,W.y)})();(function constants(){C.f=W.aI.prototype
C.y=W.ca.prototype
C.l=W.b3.prototype
C.h=W.cc.prototype
C.z=W.ce.prototype
C.A=W.cl.prototype
C.e=W.cm.prototype
C.B=J.a.prototype
C.a=J.aM.prototype
C.n=J.d3.prototype
C.b=J.d4.prototype
C.o=J.d5.prototype
C.d=J.aN.prototype
C.I=J.aO.prototype
C.L=H.d9.prototype
C.M=W.de.prototype
C.t=W.bM.prototype
C.u=J.ff.prototype
C.v=W.dk.prototype
C.N=W.bb.prototype
C.w=W.dq.prototype
C.k=J.aS.prototype
C.x=W.bY.prototype
C.c=new P.hX()
C.m=new P.aK(0)
C.C=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.D=function(hooks) {
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
C.p=function(hooks) { return hooks; }

C.E=function(getTagFallback) {
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
C.F=function() {
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
C.G=function(hooks) {
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
C.H=function(hooks) {
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
C.q=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.J=H.B(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.q])
C.K=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.r=makeConstList([])
C.i=H.B(makeConstList(["bind","if","ref","repeat","syntax"]),[P.q])
C.j=H.B(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.q])
C.O=H.H("nj")
C.P=H.H("nk")
C.Q=H.H("eq")
C.R=H.H("nm")
C.S=H.H("nn")
C.T=H.H("k6")
C.U=H.H("no")
C.V=H.H("k9")
C.W=H.H("aA")
C.X=H.H("q")
C.Y=H.H("ks")
C.Z=H.H("kt")
C.a_=H.H("ns")
C.a0=H.H("ku")
C.a1=H.H("aZ")
C.a2=H.H("N")
C.a3=H.H("m")
C.a4=H.H("U")})();(function staticFields(){$.kc="$cachedFunction"
$.kd="$cachedInvocation"
$.jG=null
$.jE=null
$.je=!1
$.ji=null
$.kG=null
$.l_=null
$.iu=null
$.iE=null
$.jk=null
$.bh=null
$.c4=null
$.c5=null
$.jf=!1
$.t=C.c
$.k3=0
$.ax=null
$.j0=null
$.k2=null
$.k1=null
$.k_=null
$.jZ=null
$.jY=null
$.jX=null
$.kR=0
$.mP="\nfloat nearestLevel(float col, int mode) {\n   if (mode==0) return ceil(col / 80.0) * 80.0;\n\t else if (mode==1) return ceil(col * 6.0) / 6.0;\n\t else return ceil(col * 3.0) / 3.0;\n}\n\n// averaged pixel intensity from 3 color channels\nfloat avg3(vec3 pix) {\n return (pix.r + pix.g + pix.b)/3.0;\n}\n\nvec3 get_pixel(vec2 coords, float dx, float dy) {\n return texture(uTexture, coords + vec2(dx, dy)).rgb;\n}\n\n// returns pixel color\nfloat IsEdge(vec2 coords, vec2 dim) {\n  vec2 d = vec2(1.0, 1.0) / dim;\n\n  // read neighboring pixel intensities\n  float pix0 = avg3(get_pixel(coords, -d.x, -d.y));\n  float pix1 = avg3(get_pixel(coords, -d.x, 0.0));\n  float pix2 = avg3(get_pixel(coords, -d.x, d.y));\n  float pix3 = avg3(get_pixel(coords, 0.0, -d.y));\n\n  float pix5 = avg3(get_pixel(coords, 0.0, d.y));\n  float pix6 = avg3(get_pixel(coords, d.x, -d.y));\n  float pix7 = avg3(get_pixel(coords, d.x, 0.0));\n  float pix8 = avg3(get_pixel(coords, d.x, d.y));\n\n\n  // average color differences around neighboring pixels\n  float delta = (abs(pix1-pix7) + abs(pix5-pix3) +\n                 abs(pix0-pix8) + abs(pix2-pix6)) * 0.25;\n  return clamp(5.5*delta, 0.0, 1.0);\n}\n\nvoid main() {\n    vec2 texdim = vec2(textureSize(uTexture, 0));\n    vec4 colorOrg = texture(uTexture, vTexUV);\n    vec3 vHSV =  RGBtoHSV(colorOrg.rgb);\n    vHSV.x = nearestLevel(vHSV.x, 0);\n    vHSV.y = nearestLevel(vHSV.y, 1);\n    vHSV.z = nearestLevel(vHSV.z, 2);\n    float edg = IsEdge(vTexUV, texdim);\n    vec3 vRGB = (edg >= 0.3) ? vec3(0.0,0.0,0.0) : HSVtoRGB(vHSV);\n    //vec3 vRGB = HSVtoRGB(vHSV);\n    oFragColor = vec4(vRGB, 1.0);\n}\n"})();(function lazyInitializers(){lazy($,"jW","$get$jW",function(){return H.kU("_$dart_dartClosure")})
lazy($,"j5","$get$j5",function(){return H.kU("_$dart_js")})
lazy($,"k7","$get$k7",function(){return H.m7()})
lazy($,"k8","$get$k8",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.k3
$.k3=t+1
t="expando$key$"+t}return new P.e4(null,t,[P.m])})
lazy($,"kh","$get$kh",function(){return H.au(H.h2({
toString:function(){return"$receiver$"}}))})
lazy($,"ki","$get$ki",function(){return H.au(H.h2({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"kj","$get$kj",function(){return H.au(H.h2(null))})
lazy($,"kk","$get$kk",function(){return H.au(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"ko","$get$ko",function(){return H.au(H.h2(void 0))})
lazy($,"kp","$get$kp",function(){return H.au(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"km","$get$km",function(){return H.au(H.kn(null))})
lazy($,"kl","$get$kl",function(){return H.au(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"kr","$get$kr",function(){return H.au(H.kn(void 0))})
lazy($,"kq","$get$kq",function(){return H.au(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"jc","$get$jc",function(){return P.mu()})
lazy($,"k5","$get$k5",function(){return P.mA(null,P.aA)})
lazy($,"c6","$get$c6",function(){return[]})
lazy($,"jV","$get$jV",function(){return{}})
lazy($,"ky","$get$ky",function(){return P.j7(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"jd","$get$jd",function(){return P.v()})
lazy($,"S","$get$S",function(){return P.az(["cBlendEquation",new G.i("","",0),"cDepthWrite",new G.i("","",0),"cDepthTest",new G.i("","",0),"cStencilFunc",new G.i("","",0),"tPosition",new G.i("vec3","",0),"tSpeed",new G.i("vec3","",0),"tForce",new G.i("vec3","",0),"aColors",new G.i("vec3","per vertex color",0),"aColorAlpha",new G.i("vec4","per vertex color",0),"aPosition",new G.i("vec3","vertex coordinates",0),"aTexUV",new G.i("vec2","texture uvs",0),"aNormal",new G.i("vec3","vertex normals",0),"aBinormal",new G.i("vec3","vertex binormals",0),"aCenter",new G.i("vec4","for wireframe",0),"aPointSize",new G.i("float","",0),"aBoneIndex",new G.i("vec4","",0),"aBoneWeight",new G.i("vec4","",0),"aTangent",new G.i("vec3","vertex tangents",0),"aBitangent",new G.i("vec3","vertex btangents",0),"iaRotation",new G.i("vec4","",0),"iaTranslation",new G.i("vec3","",0),"iaScale",new G.i("vec3","",0),"vColor",new G.i("vec3","per vertex color",0),"vTexUV",new G.i("vec2","",0),"vLightWeighting",new G.i("vec3","",0),"vNormal",new G.i("vec3","",0),"vPosition",new G.i("vec3","vertex coordinates",0),"vPositionFromLight",new G.i("vec4","delta from light",0),"vCenter",new G.i("vec4","for wireframe",0),"vDepth",new G.i("float","depth for shadowmaps",0),"uTransformationMatrix",new G.i("mat4","",0),"uModelMatrix",new G.i("mat4","",0),"uNormalMatrix",new G.i("mat3","",0),"uConvolutionMatrix",new G.i("mat3","",0),"uPerspectiveViewMatrix",new G.i("mat4","",0),"uLightPerspectiveViewMatrix",new G.i("mat4","",0),"uShadowMap",new G.i("sampler2DShadow","",0),"uTexture",new G.i("sampler2D","",0),"uTexture2",new G.i("sampler2D","",0),"uTexture3",new G.i("sampler2D","",0),"uTexture4",new G.i("sampler2D","",0),"uSpecularMap",new G.i("sampler2D","",0),"uNormalMap",new G.i("sampler2D","",0),"uBumpMap",new G.i("sampler2D","",0),"uDepthMap",new G.i("sampler2D","",0),"uCubeTexture",new G.i("samplerCube","",0),"uAnimationTable",new G.i("sampler2D","",0),"uTime",new G.i("float","time since program start in sec",0),"uCameraNear",new G.i("float","",0),"uCameraFar",new G.i("float","",0),"uFogNear",new G.i("float","",0),"uFogFar",new G.i("float","",0),"uPointSize",new G.i("float","",0),"uScale",new G.i("float","",0),"uAngle",new G.i("float","",0),"uCanvasSize",new G.i("vec2","",0),"uCenter2",new G.i("vec2","",0),"uCutOff",new G.i("float","",0),"uShininess",new G.i("float","",0),"uShadowBias",new G.i("float","",0),"uOpacity",new G.i("float","",0),"uColor",new G.i("vec3","",0),"uAmbientDiffuse",new G.i("vec3","",0),"uColorEmissive",new G.i("vec3","",0),"uColorSpecular",new G.i("vec3","",0),"uColorDiffuse",new G.i("vec3","",0),"uColorAlpha",new G.i("vec4","",0),"uColorAlpha2",new G.i("vec4","",0),"uEyePosition",new G.i("vec3","",0),"uMaterial",new G.i("mat4","",0),"uRange",new G.i("vec2","",0),"uDirection",new G.i("vec2","",0),"uBoneMatrices",new G.i("mat4","",128),"uLightDescs",new G.i("mat4","",4),"uLightCount",new G.i("float","",0),"uLightTypes",new G.i("float","",4),"uBumpScale",new G.i("float","for bump maps",0),"uNormalScale",new G.i("float","for normal maps",0)])})
lazy($,"kg","$get$kg",function(){var t=new G.fT(!1,!1,!1,!0,1,9729,9729)
t.b=!0
return t})
lazy($,"kP","$get$kP",function(){var t=new G.a6("uv-passthru",null,[],[],[],[],0,P.v())
t.d_(["aPosition","aTexUV"])
t.M(["vTexUV"])
t.bj(["gl_Position = vec4(aPosition, 1.0);","vTexUV = aTexUV;"])
return t})
lazy($,"kN","$get$kN",function(){var t=new G.a6("copyF",null,[],[],[],[],0,P.v())
t.M(["vTexUV"])
t.N(["uTexture"])
t.bj(["oFragColor = texture(uTexture, vTexUV);"])
return t})
lazy($,"l3","$get$l3",function(){var t=new G.a6("ToonF",null,[],[],[],[],0,P.v())
t.M(["vTexUV"])
t.N(["uTexture"])
t.W(["vec3 RGBtoHSV(vec3 rgb) {\n   float r = rgb.r;\n   float g = rgb.g;\n   float b = rgb.b;\n\n\n   float minv = min(min(r, g), b);\n   float maxv = max(max(r, g), b);\n   float delta = maxv - minv;\n\n   vec3 res;\n   res.z = maxv;            // v\n   if( maxv == 0.0 ) {\n      // r = g = b = 0      // s = 0, v is undefined\n      res.y = 0.0;\n      res.x = -1.0;\n      return res;\n   }\n\n   res.y = delta / maxv;      // s\n   if (r == maxv) res.x = (g - b) / delta;  // btwn yellow & magenta\n   else if (g == maxv) res.x = 2.0 + (b - r) / delta;   // btwn cyan & yellow\n   else res.x = 4.0 + (r - g) / delta;   // btwn magenta & cyan\n\n   res.x = res.x * 60.0;            // degrees\n   if( res.x < 0.0 ) res.x = res.x + 360.0;\n\n   return res;\n}\n\nvec3 HSVtoRGB(vec3 hsv) {\n   float h = hsv.x / 60.0;  // sector 0 to 5\n   float s = hsv.y;\n   float v = hsv.z;\n\n   if( s == 0.0 ) {\n      // achromatic (grey)\n      return vec3(v, v, v);\n   }\n\n   int i = int(floor( h ));\n   float f = h - float(i);         // fractional part of h\n   float p = v * ( 1.0 - s );\n   float q = v * ( 1.0 - s * f );\n   float t = v * ( 1.0 - s * ( 1.0 - f ) );\n\n   if (i == 0) return vec3(v, t, p);\n   else if (i == 1) return vec3(q, v , p);\n   else if (i == 2) return vec3(p, v, t);\n   else if (i == 3) return vec3(p, q, v);\n   else if (i == 4) return vec3(t, p, v);\n   return vec3(v, p, q);\n}\n",$.mP])
return t})
lazy($,"kW","$get$kW",function(){var t=new G.a6("HexPixelateF",null,[],[],[],[],0,P.v())
t.M(["vTexUV"])
t.N(["uCenter2","uPointSize","uTexture"])
t.W(["\nfloat S = 0.86602540378;\n\nvec2 GetHexCenter(vec2 p) {\n vec2 a;\n    if (p.x + p.y - floor(p.x) - floor(p.y) < 1.0) a = vec2(floor(p.x), floor(p.y));\n    else a = vec2(ceil(p.x), ceil(p.y));\n    vec2 b = vec2(ceil(p.x), floor(p.y));\n    vec2 c = vec2(floor(p.x), ceil(p.y));\n\n    vec3 P = vec3(p.x, p.y, 1.0 - p.x - p.y);\n    vec3 A = vec3(a.x, a.y, 1.0 - a.x - a.y);\n    vec3 B = vec3(b.x, b.y, 1.0 - b.x - b.y);\n    vec3 C = vec3(c.x, c.y, 1.0 - c.x - c.y);\n\n    float alen = length(P - A);\n    float blen = length(P - B);\n    float clen = length(P - C);\n\n    if (alen < blen) {\n        return (alen < clen) ? a : c;\n    } else {\n        return (blen < clen) ? b : c;\n    }\n}\n\nvec2 ToPixelSpace(vec2 v, vec2 texdim) {\n    vec2 p = (v * texdim - uCenter2) / uPointSize;\n    float t = p.y / S;\n    return vec2(p.x - 0.5 * t, t);\n}\n\nvec2 ToNormalizedSpace(vec2 v, vec2 texdim) {\n   vec2 p = vec2(v.x + v.y * 0.5, v.y * S);\n   return p * uPointSize / texdim + uCenter2 / texdim;\n}\n\nvoid main() {\n    vec2 texdim = vec2(textureSize(uTexture, 0));\n    vec2 p = ToPixelSpace(vTexUV, texdim);\n    vec2 c = GetHexCenter(p);\n    vec2 q = ToNormalizedSpace(c, texdim);\n    oFragColor = texture(uTexture, q);\n}\n"])
return t})
lazy($,"kO","$get$kO",function(){var t=new G.a6("DotF",null,[],[],[],[],0,P.v())
t.M(["vTexUV"])
t.N(["uCenter2","uScale","uAngle","uTexture"])
t.W(["float pattern(vec2 tex) {\n\t\tfloat s = sin( uAngle );\n\t\tfloat c = cos( uAngle );\n\t\tvec2 point = vec2( c * tex.x - s * tex.y, s * tex.x + c * tex.y ) * uScale;\n\t\treturn ( sin( point.x ) * sin( point.y ) ) * 4.0;\n}\n\nvoid main() {\n\t\tvec2 texdim = vec2(textureSize(uTexture, 0));\n\t\tvec4 color = texture(uTexture, vTexUV );\n\t\tfloat average = ( color.r + color.g + color.b ) / 3.0;\n     vec2 tex = vTexUV* texdim - uCenter2;\n\t\toFragColor = vec4( vec3( average * 10.0 - 5.0 + pattern(tex) ), color.a );\n}\n"])
return t})
lazy($,"l4","$get$l4",function(){var t=new G.a6("DotF",null,[],[],[],[],0,P.v())
t.M(["vTexUV"])
t.N(["uScale","uTime","uTexture"])
t.W(["float rand(vec2 co)  {\n    float a = 12.9898;\n    float b = 78.233;\n    float c = 43758.5453;\n    float dt = dot(co.xy, vec2(a,b));\n    float sn = mod(dt,3.14);\n    return fract(sin(sn) * c);\n}\n\nvec3 rgbDistortion(vec2 uv, float magnitude, float time) {\n    // x offset for the three color channels\n    // we do not change the y\n\t  float dR = rand(vec2(time * 0.03, uv.y * 0.42)) * 0.001 +\n\t             sin(rand(vec2(time * 0.2, uv.y))) * magnitude;\n\t  float dG = rand(vec2(time * 0.004, uv.y * 0.002)) * 0.004 +\n               sin(time * 9.0) * magnitude;\n\t  float dB = 0.0;\n    return vec3(dR, dG, dB);\n}\n\nvoid main() {\n      vec3 d = rgbDistortion(vTexUV, uScale, uTime);\n      float x = vTexUV.x;\n      float y = vTexUV.y;\n\n\t\t\tfloat r = texture(uTexture, vec2(x + d.r, y) ).r;\n\t\t\tfloat g = texture(uTexture, vec2(x + d.g, y) ).g;\n\t\t\tfloat b = texture(uTexture, vec2(x + d.b, y) ).b;\n\t\t\toFragColor = vec4( r, g, b, 1.0 );\n}\n"])
return t})
lazy($,"kY","$get$kY",function(){var t=new G.a6("LumidotsF",null,[],[],[],[],0,P.v())
t.M(["vTexUV"])
t.N(["uPointSize","uTexture"])
t.W(["\n// http://stackoverflow.com/questions/596216/formula-to-determine-brightness-of-rgb-color\nfloat RGB2Luma(vec3 rgb) { return dot(rgb, vec3(0.212, 0.715, 0.072)); }\n// float RGB2Luma(vec3 rgb) { return dot(rgb, vec3(0.299, 0.587, 0.114)); }\n\n\nvoid main() {\n\t  vec2 texdim = vec2(textureSize(uTexture, 0));\n    float r = uPointSize;\n    vec2 uv = vTexUV * texdim;\n    vec2 center = floor(uv / r / 2.0) * 2.0 * r + r;\n    vec3 col = texture(uTexture, center / texdim).rgb;\n    float lum = max(0.1, RGB2Luma(col));\n    float alpha =  smoothstep(1.0, 0.5,\n                              distance(center, uv) / lum / r);\n    oFragColor.rgb = col.rgb * alpha;\n}\n"])
return t})
lazy($,"l0","$get$l0",function(){var t=new G.a6("SquarePixelateF",null,[],[],[],[],0,P.v())
t.M(["vTexUV"])
t.N(["uPointSize","uTexture"])
t.W(["void main() {\n\t  vec2 texdim = vec2(textureSize(uTexture, 0));\n    float r = uPointSize;\n    vec2 uv = vTexUV * texdim;\n    vec2 center = floor(uv / r / 2.0) * 2.0 * r + r;\n    oFragColor = texture(uTexture, center / texdim);\n}\n"])
return t})
lazy($,"jL","$get$jL",function(){return T.bF(-1,0,-1,0,4,0,-1,0,-1)})
lazy($,"jR","$get$jR",function(){return T.bW(0.5,0.5,0.5)})
lazy($,"jM","$get$jM",function(){return T.bF(2,0,0,0,-1,0,0,0,-1)})
lazy($,"jS","$get$jS",function(){return T.bW(0.5,0.5,0.5)})
lazy($,"jN","$get$jN",function(){return T.bF(-2,0,0,0,2,0,0,0,0)})
lazy($,"jT","$get$jT",function(){return T.bW(0.37,0.37,0.37)})
lazy($,"jO","$get$jO",function(){var t=T.bF(0,-2,0,-2,11,-2,0,-2,0)
t.b9(0,0.333)
return t})
lazy($,"jU","$get$jU",function(){return T.bW(0,0,0)})
lazy($,"jK","$get$jK",function(){return T.bF(-1,-1,-1,-1,8,-1,-1,-1,-1)})
lazy($,"jQ","$get$jQ",function(){return T.bW(0,0,0)})
lazy($,"jJ","$get$jJ",function(){var t=T.bF(1,2,1,2,4,2,1,2,1)
t.b9(0,0.0625)
return t})
lazy($,"jP","$get$jP",function(){return T.bW(0,0,0)})
lazy($,"kM","$get$kM",function(){var t=new G.a6("Convolution3x3F",null,[],[],[],[],0,P.v())
t.M(["vTexUV"])
t.N(["uTexture","uColor","uConvolutionMatrix"])
t.W(["void main() {\n    mat3 m = uConvolutionMatrix;\n    vec2 d = 1.0 / vec2(textureSize(uTexture, 0));\n    vec3 sum = vec3(0.0, 0.0, 0.0);\n    for (int x = -1; x <= 1; x++) {\n      for (int y = -1; y <= 1; y++) {\n        sum += m[x+1][y+1] * texture(uTexture, vTexUV + d * vec2(x, y)).rgb;     \n      }\n    }\n    oFragColor.rgb = uColor + sum;\n}\n"])
return t})
lazy($,"iv","$get$iv",function(){return H.aw(C.e.cc(W.mY(),"#effect"),"$isbb")})
lazy($,"ch","$get$ch",function(){return P.v()})})()
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
mangledGlobalNames:{m:"int",N:"double",U:"num",q:"String",aZ:"bool",aA:"Null",b:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.o},{func:1,ret:P.aZ,args:[W.a2,P.q,P.q,W.c_]},{func:1,v:true,args:[P.p],opt:[P.bP]},{func:1,ret:P.m,args:[P.F,P.F]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEvent:J.a,AnimationPlayerEvent:J.a,AnimationTimeline:J.a,AppBannerPromptResult:J.a,ApplicationCacheErrorEvent:J.a,AutocompleteErrorEvent:J.a,BarProp:J.a,BeforeInstallPromptEvent:J.a,BeforeUnloadEvent:J.a,BlobEvent:J.a,Body:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CHROMIUMValuebuffer:J.a,CircularGeofencingRegion:J.a,Client:J.a,Clients:J.a,ClipboardEvent:J.a,CloseEvent:J.a,CompositionEvent:J.a,CompositorProxy:J.a,ConsoleBase:J.a,Coordinates:J.a,Credential:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CustomEvent:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeviceLightEvent:J.a,DeviceMotionEvent:J.a,DeviceOrientationEvent:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMStringMap:J.a,EffectModel:J.a,Entry:J.a,ErrorEvent:J.a,Event:J.a,InputEvent:J.a,ExtendableEvent:J.a,ExtendableMessageEvent:J.a,FederatedCredential:J.a,FetchEvent:J.a,FileEntry:J.a,FileError:J.a,Stream:J.a,DOMFileSystem:J.a,FocusEvent:J.a,FontFace:J.a,FontFaceSetLoadEvent:J.a,FormData:J.a,GamepadButton:J.a,GamepadEvent:J.a,Geofencing:J.a,GeofencingEvent:J.a,GeofencingRegion:J.a,Geolocation:J.a,Geoposition:J.a,HashChangeEvent:J.a,Headers:J.a,HMDVRDevice:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,InjectedScriptHost:J.a,InputDeviceCapabilities:J.a,InstallEvent:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,KeyboardEvent:J.a,KeyframeEffect:J.a,MediaDeviceInfo:J.a,MediaDevices:J.a,MediaEncryptedEvent:J.a,MediaError:J.a,MediaKeyMessageEvent:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaMetadata:J.a,MediaQueryListEvent:J.a,MediaSession:J.a,MediaStreamEvent:J.a,MediaStreamTrackEvent:J.a,MemoryInfo:J.a,MessageChannel:J.a,MessageEvent:J.a,Metadata:J.a,MIDIConnectionEvent:J.a,MIDIInputMap:J.a,MIDIMessageEvent:J.a,MIDIOutputMap:J.a,MouseEvent:J.a,DragEvent:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigatorStorageUtils:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NotificationEvent:J.a,OffscreenCanvas:J.a,PageTransitionEvent:J.a,PasswordCredential:J.a,PerformanceCompositeTiming:J.a,PerformanceEntry:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformanceRenderTiming:J.a,PerformanceResourceTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PointerEvent:J.a,PopStateEvent:J.a,PositionError:J.a,PositionSensorVRDevice:J.a,Presentation:J.a,PresentationConnectionAvailableEvent:J.a,PresentationConnectionCloseEvent:J.a,ProgressEvent:J.a,PromiseRejectionEvent:J.a,PushEvent:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,ReadableByteStream:J.a,ReadableByteStreamReader:J.a,ReadableStreamReader:J.a,RelatedEvent:J.a,RTCCertificate:J.a,RTCDataChannelEvent:J.a,RTCDTMFToneChangeEvent:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCIceCandidateEvent:J.a,RTCPeerConnectionIceEvent:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,SecurityPolicyViolationEvent:J.a,Selection:J.a,ServicePort:J.a,ServicePortConnectEvent:J.a,ServiceWorkerMessageEvent:J.a,SharedArrayBuffer:J.a,SourceInfo:J.a,SpeechRecognitionAlternative:J.a,SpeechRecognitionError:J.a,SpeechRecognitionEvent:J.a,SpeechSynthesisEvent:J.a,SpeechSynthesisVoice:J.a,StorageEvent:J.a,StorageInfo:J.a,StorageManager:J.a,StorageQuota:J.a,StyleMedia:J.a,StylePropertyMap:J.a,SyncEvent:J.a,SyncManager:J.a,TextEvent:J.a,TextMetrics:J.a,TouchEvent:J.a,TrackDefault:J.a,TrackEvent:J.a,TransitionEvent:J.a,WebKitTransitionEvent:J.a,UIEvent:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRDevice:J.a,VREyeParameters:J.a,VRFieldOfView:J.a,VRPositionState:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WheelEvent:J.a,WindowClient:J.a,WorkerConsole:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothAdvertisingData:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,NFC:J.a,PagePopupController:J.a,Request:J.a,ResourceProgressEvent:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBConnectionEvent:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WebKitCSSMatrix:J.a,Worklet:J.a,WorkletGlobalScope:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBVersionChangeEvent:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPreserveAspectRatio:J.a,SVGUnitTypes:J.a,SVGZoomEvent:J.a,AudioListener:J.a,AudioParam:J.a,AudioProcessingEvent:J.a,OfflineAudioCompletionEvent:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,CHROMIUMSubscribeUniform:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLContextEvent:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTDisjointTimerQuery:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.b8,ArrayBufferView:H.aP,DataView:H.f_,Float32Array:H.d9,Float64Array:H.f0,Int16Array:H.f1,Int32Array:H.f2,Int8Array:H.f3,Uint16Array:H.f4,Uint32Array:H.f5,Uint8ClampedArray:H.dd,CanvasPixelArray:H.dd,Uint8Array:H.f6,HTMLBRElement:W.k,HTMLBaseElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLImageElement:W.k,HTMLKeygenElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMenuElement:W.k,HTMLMenuItemElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTextAreaElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,HTMLAnchorElement:W.dK,HTMLAreaElement:W.dL,AudioTrack:W.a0,AudioTrackList:W.dO,Blob:W.b1,HTMLBodyElement:W.aI,HTMLCanvasElement:W.ca,CanvasRenderingContext2D:W.dP,CDATASection:W.aJ,CharacterData:W.aJ,Comment:W.aJ,ProcessingInstruction:W.aJ,Text:W.aJ,CompositorWorker:W.dS,CSSCharsetRule:W.x,CSSFontFaceRule:W.x,CSSGroupingRule:W.x,CSSImportRule:W.x,CSSKeyframeRule:W.x,MozCSSKeyframeRule:W.x,WebKitCSSKeyframeRule:W.x,CSSKeyframesRule:W.x,MozCSSKeyframesRule:W.x,WebKitCSSKeyframesRule:W.x,CSSMediaRule:W.x,CSSNamespaceRule:W.x,CSSPageRule:W.x,CSSRule:W.x,CSSStyleRule:W.x,CSSSupportsRule:W.x,CSSViewportRule:W.x,CSSStyleDeclaration:W.b3,MSStyleCSSProperties:W.b3,CSS2Properties:W.b3,DataTransferItemList:W.dV,DeviceAcceleration:W.dW,HTMLDivElement:W.cc,XMLDocument:W.bp,Document:W.bp,DocumentFragment:W.cd,ShadowRoot:W.cd,DOMException:W.dX,DOMImplementation:W.ce,DOMPoint:W.dY,DOMPointReadOnly:W.cf,DOMRectReadOnly:W.cg,DOMStringList:W.dZ,DOMTokenList:W.e_,Element:W.a2,Animation:W.h,ApplicationCache:W.h,DOMApplicationCache:W.h,OfflineResourceList:W.h,BatteryManager:W.h,CanvasCaptureMediaStreamTrack:W.h,CrossOriginServiceWorkerClient:W.h,EventSource:W.h,FileReader:W.h,FontFaceSet:W.h,MediaKeySession:W.h,MediaQueryList:W.h,MediaRecorder:W.h,MediaSource:W.h,MediaStreamTrack:W.h,MessagePort:W.h,MIDIAccess:W.h,NetworkInformation:W.h,Notification:W.h,Performance:W.h,PermissionStatus:W.h,PresentationAvailability:W.h,PresentationReceiver:W.h,PresentationRequest:W.h,RTCDTMFSender:W.h,RTCPeerConnection:W.h,webkitRTCPeerConnection:W.h,mozRTCPeerConnection:W.h,ScreenOrientation:W.h,ServicePortCollection:W.h,ServiceWorkerContainer:W.h,ServiceWorkerRegistration:W.h,SpeechRecognition:W.h,SpeechSynthesis:W.h,SpeechSynthesisUtterance:W.h,WorkerPerformance:W.h,BluetoothDevice:W.h,BluetoothRemoteGATTCharacteristic:W.h,USB:W.h,IDBDatabase:W.h,IDBOpenDBRequest:W.h,IDBVersionChangeRequest:W.h,IDBRequest:W.h,IDBTransaction:W.h,AnalyserNode:W.h,RealtimeAnalyserNode:W.h,AudioBufferSourceNode:W.h,AudioContext:W.h,webkitAudioContext:W.h,AudioDestinationNode:W.h,AudioNode:W.h,AudioSourceNode:W.h,BiquadFilterNode:W.h,ChannelMergerNode:W.h,AudioChannelMerger:W.h,ChannelSplitterNode:W.h,AudioChannelSplitter:W.h,ConvolverNode:W.h,DelayNode:W.h,DynamicsCompressorNode:W.h,GainNode:W.h,AudioGainNode:W.h,IIRFilterNode:W.h,MediaElementAudioSourceNode:W.h,MediaStreamAudioDestinationNode:W.h,MediaStreamAudioSourceNode:W.h,OfflineAudioContext:W.h,OscillatorNode:W.h,Oscillator:W.h,PannerNode:W.h,AudioPannerNode:W.h,webkitAudioPannerNode:W.h,ScriptProcessorNode:W.h,JavaScriptAudioNode:W.h,StereoPannerNode:W.h,WaveShaperNode:W.h,EventTarget:W.h,File:W.O,FileList:W.bx,FileWriter:W.eo,HTMLFormElement:W.es,Gamepad:W.a3,HTMLHeadElement:W.cl,History:W.ew,HTMLCollection:W.by,HTMLFormControlsCollection:W.by,HTMLOptionsCollection:W.by,HTMLDocument:W.cm,XMLHttpRequest:W.ex,XMLHttpRequestUpload:W.bz,XMLHttpRequestEventTarget:W.bz,ImageData:W.bA,HTMLInputElement:W.eB,Location:W.eN,HTMLAudioElement:W.bG,HTMLMediaElement:W.bG,MediaList:W.eV,MediaStream:W.b7,MIDIOutput:W.eX,MIDIInput:W.bH,MIDIPort:W.bH,MimeType:W.a4,MimeTypeArray:W.eY,Navigator:W.de,Attr:W.o,Node:W.o,NodeIterator:W.df,NodeList:W.bM,RadioNodeList:W.bM,Path2D:W.fc,Perspective:W.fe,Plugin:W.a5,PluginArray:W.fg,PositionValue:W.fj,PresentationConnection:W.fk,Range:W.dk,Rotation:W.ft,RTCDataChannel:W.dm,DataChannel:W.dm,HTMLSelectElement:W.bb,SharedWorker:W.fx,SourceBuffer:W.a7,SourceBufferList:W.fy,SpeechGrammar:W.a8,SpeechGrammarList:W.fz,SpeechRecognitionResult:W.a9,Storage:W.fE,CSSStyleSheet:W.X,StyleSheet:W.X,CalcLength:W.ai,KeywordValue:W.ai,LengthValue:W.ai,NumberValue:W.ai,SimpleLength:W.ai,TransformValue:W.ai,StyleValue:W.ai,HTMLTableElement:W.dq,HTMLTableRowElement:W.fN,HTMLTableSectionElement:W.fO,HTMLTemplateElement:W.bS,TextTrack:W.aa,TextTrackCue:W.Y,VTTCue:W.Y,TextTrackCueList:W.fR,TextTrackList:W.fS,TimeRanges:W.fU,Touch:W.ab,TouchList:W.fY,TrackDefaultList:W.fZ,Matrix:W.bc,Skew:W.bc,TransformComponent:W.bc,Translation:W.h0,TreeWalker:W.ds,URL:W.h5,HTMLVideoElement:W.bd,VideoTrackList:W.h7,VTTRegionList:W.ha,WebSocket:W.hb,Window:W.bY,DOMWindow:W.bY,Worker:W.he,CompositorWorkerGlobalScope:W.aT,DedicatedWorkerGlobalScope:W.aT,ServiceWorkerGlobalScope:W.aT,SharedWorkerGlobalScope:W.aT,WorkerGlobalScope:W.aT,ClientRect:W.hm,ClientRectList:W.dw,DOMRectList:W.dw,CSSRuleList:W.ho,DocumentType:W.hp,DOMRect:W.hq,GamepadList:W.hM,HTMLFrameSetElement:W.hN,NamedNodeMap:W.dy,MozNamedAttrMap:W.dy,ServiceWorker:W.i4,SpeechRecognitionResultList:W.i7,StyleSheetList:W.ib,WorkerLocation:W.ij,WorkerNavigator:W.ik,SVGAElement:P.dJ,SVGAnimateElement:P.aH,SVGAnimateMotionElement:P.aH,SVGAnimateTransformElement:P.aH,SVGAnimationElement:P.aH,SVGSetElement:P.aH,SVGFEBlendElement:P.e5,SVGFEColorMatrixElement:P.e6,SVGFEComponentTransferElement:P.e7,SVGFECompositeElement:P.e8,SVGFEConvolveMatrixElement:P.e9,SVGFEDiffuseLightingElement:P.ea,SVGFEDisplacementMapElement:P.eb,SVGFEFloodElement:P.ec,SVGFEGaussianBlurElement:P.ed,SVGFEImageElement:P.ee,SVGFEMergeElement:P.ef,SVGFEMorphologyElement:P.eg,SVGFEOffsetElement:P.eh,SVGFEPointLightElement:P.ei,SVGFESpecularLightingElement:P.ej,SVGFESpotLightElement:P.ek,SVGFETileElement:P.el,SVGFETurbulenceElement:P.em,SVGFilterElement:P.ep,SVGForeignObjectElement:P.er,SVGCircleElement:P.af,SVGEllipseElement:P.af,SVGLineElement:P.af,SVGPathElement:P.af,SVGPolygonElement:P.af,SVGPolylineElement:P.af,SVGGeometryElement:P.af,SVGClipPathElement:P.ay,SVGDefsElement:P.ay,SVGGElement:P.ay,SVGSwitchElement:P.ay,SVGGraphicsElement:P.ay,SVGImageElement:P.ey,SVGLength:P.ar,SVGLengthList:P.eI,SVGMarkerElement:P.eT,SVGMaskElement:P.eU,SVGNumber:P.as,SVGNumberList:P.fb,SVGPatternElement:P.fd,SVGPoint:P.fh,SVGPointList:P.fi,SVGRect:P.fn,SVGRectElement:P.fo,SVGScriptElement:P.bO,SVGStringList:P.fK,SVGDescElement:P.D,SVGDiscardElement:P.D,SVGFEDistantLightElement:P.D,SVGFEFuncAElement:P.D,SVGFEFuncBElement:P.D,SVGFEFuncGElement:P.D,SVGFEFuncRElement:P.D,SVGFEMergeNodeElement:P.D,SVGMetadataElement:P.D,SVGStopElement:P.D,SVGStyleElement:P.D,SVGTitleElement:P.D,SVGComponentTransferFunctionElement:P.D,SVGElement:P.D,SVGSVGElement:P.fL,SVGSymbolElement:P.fM,SVGTextContentElement:P.dr,SVGTextPathElement:P.fQ,SVGTSpanElement:P.bT,SVGTextElement:P.bT,SVGTextPositioningElement:P.bT,SVGTransform:P.at,SVGTransformList:P.h_,SVGUseElement:P.h6,SVGViewElement:P.h8,SVGViewSpec:P.h9,SVGLinearGradientElement:P.bZ,SVGRadialGradientElement:P.bZ,SVGGradientElement:P.bZ,SVGCursorElement:P.i0,SVGFEDropShadowElement:P.i1,SVGMPathElement:P.i2,AudioBuffer:P.dN,WebGLRenderingContext:P.fr,WebGL2RenderingContext:P.fs,WebGL2RenderingContextBase:P.ii,SQLResultSetRowList:P.fA})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEvent:true,AnimationPlayerEvent:true,AnimationTimeline:true,AppBannerPromptResult:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BarProp:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,Body:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,Credential:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CustomEvent:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMStringMap:true,EffectModel:true,Entry:true,ErrorEvent:true,Event:true,InputEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FederatedCredential:true,FetchEvent:true,FileEntry:true,FileError:true,Stream:true,DOMFileSystem:true,FocusEvent:true,FontFace:true,FontFaceSetLoadEvent:true,FormData:true,GamepadButton:true,GamepadEvent:true,Geofencing:true,GeofencingEvent:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,HashChangeEvent:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,InjectedScriptHost:true,InputDeviceCapabilities:true,InstallEvent:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyboardEvent:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaEncryptedEvent:true,MediaError:true,MediaKeyMessageEvent:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaQueryListEvent:true,MediaSession:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MemoryInfo:true,MessageChannel:true,MessageEvent:true,Metadata:true,MIDIConnectionEvent:true,MIDIInputMap:true,MIDIMessageEvent:true,MIDIOutputMap:true,MouseEvent:true,DragEvent:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NotificationEvent:true,OffscreenCanvas:true,PageTransitionEvent:true,PasswordCredential:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,PerformanceTiming:true,Permissions:true,PointerEvent:true,PopStateEvent:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,PushManager:true,PushMessageData:true,PushSubscription:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RelatedEvent:true,RTCCertificate:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,SecurityPolicyViolationEvent:true,Selection:true,ServicePort:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SharedArrayBuffer:true,SourceInfo:true,SpeechRecognitionAlternative:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,SpeechSynthesisVoice:true,StorageEvent:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncEvent:true,SyncManager:true,TextEvent:true,TextMetrics:true,TouchEvent:true,TrackDefault:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WheelEvent:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,ResourceProgressEvent:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBConnectionEvent:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBVersionChangeEvent:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPreserveAspectRatio:true,SVGUnitTypes:true,SVGZoomEvent:true,AudioListener:true,AudioParam:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLContextEvent:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,AudioTrack:true,AudioTrackList:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,CSSCharsetRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DocumentFragment:true,ShadowRoot:true,DOMException:true,DOMImplementation:true,DOMPoint:true,DOMPointReadOnly:false,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AudioDestinationNode:true,AudioNode:true,AudioSourceNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OfflineAudioContext:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,ImageData:true,HTMLInputElement:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MediaStream:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,Navigator:true,Attr:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Path2D:true,Perspective:true,Plugin:true,PluginArray:true,PositionValue:true,PresentationConnection:true,Range:true,Rotation:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,SharedWorker:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,CalcLength:true,KeywordValue:true,LengthValue:true,NumberValue:true,SimpleLength:true,TransformValue:true,StyleValue:false,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefaultList:true,Matrix:true,Skew:true,TransformComponent:false,Translation:true,TreeWalker:true,URL:true,HTMLVideoElement:true,VideoTrackList:true,VTTRegionList:true,WebSocket:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.da.$nativeSuperclassTag="ArrayBufferView"
H.bI.$nativeSuperclassTag="ArrayBufferView"
H.bL.$nativeSuperclassTag="ArrayBufferView"
H.db.$nativeSuperclassTag="ArrayBufferView"
H.bJ.$nativeSuperclassTag="ArrayBufferView"
H.bK.$nativeSuperclassTag="ArrayBufferView"
H.dc.$nativeSuperclassTag="ArrayBufferView"
W.bt.$nativeSuperclassTag="EventTarget"
W.bw.$nativeSuperclassTag="EventTarget"
W.bs.$nativeSuperclassTag="EventTarget"
W.bv.$nativeSuperclassTag="EventTarget"
W.br.$nativeSuperclassTag="EventTarget"
W.bu.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.l1(T.kK(),b)},[])
else (function(b){H.l1(T.kK(),b)})([])})})()