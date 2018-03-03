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
a[c]=function(){a[c]=function(){H.mq(b)}
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
return d?function(e){if(t===null)t=H.iT(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.iT(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.iT(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={iI:function iI(a){this.a=a},
iM:function(a,b,c,d){if(!!a.$isc)return new H.dK(a,b,[c,d])
return new H.cT(a,b,[c,d])},
en:function(){return new P.ba("No element")},
lk:function(){return new P.ba("Too few elements")},
d4:function(a,b,c,d){if(c-b<=32)H.lA(a,b,c,d)
else H.lz(a,b,c,d)},
lA:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.ae(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.ag(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
lz:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.d(t>32)
s=C.b.G(t+1,6)
r=a3+s
q=a4-s
p=C.b.G(a3+a4,2)
o=p-s
n=p+s
t=J.ae(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.ag(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.ag(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.ag(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.ag(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.ag(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.ag(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.ag(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.ag(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.ag(a5.$2(j,i),0)){h=i
i=j
j=h}t.i(a2,r,m)
t.i(a2,p,k)
t.i(a2,q,i)
t.i(a2,o,t.h(a2,a3))
t.i(a2,n,t.h(a2,a4))
g=a3+1
f=a4-1
if(J.D(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=t.h(a2,e)
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
H.d4(a2,a3,g-2,a5)
H.d4(a2,f+2,a4,a5)
if(a0)return
if(g<r&&f>q){for(;J.D(a5.$2(t.h(a2,g),l),0);)++g
for(;J.D(a5.$2(t.h(a2,f),j),0);)--f
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
break}}H.d4(a2,g,f,a5)}else H.d4(a2,g,f,a5)},
c:function c(){},
b6:function b6(){},
cS:function cS(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cT:function cT(a,b,c){this.a=a
this.b=b
this.$ti=c},
dK:function dK(a,b,c){this.a=a
this.b=b
this.$ti=c},
ez:function ez(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cU:function cU(a,b,c){this.a=a
this.b=b
this.$ti=c},
c8:function c8(){},
df:function(a,b){var t=a.a7(b)
if(!u.globalState.d.cy)u.globalState.f.ad()
return t},
ij:function(){--u.globalState.f.b
H.d(u.globalState.f.b>=0)},
kh:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.q(s).$isb)throw H.e(P.dq("Arguments to main must be a List: "+H.i(s)))
u.globalState=new H.hE(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$jq()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.hd(P.iL(null,H.aU),0)
r=P.n
s.se_(new H.aa(0,null,null,null,null,null,0,[r,H.aT]))
s.se1(new H.aa(0,null,null,null,null,null,0,[r,null]))
if(s.x){q=new H.hD()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.lf,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.lL)}if(u.globalState.x)return
s=u.globalState.a++
q=P.aM(null,null,null,r)
p=new H.b8(0,null,!1)
o=new H.aT(s,new H.aa(0,null,null,null,null,null,0,[r,H.b8]),q,u.createNewIsolate(),p,new H.ai(H.iq()),new H.ai(H.iq()),!1,!1,[],P.aM(null,null,null,null),null,null,!1,!0,P.aM(null,null,null,null))
q.l(0,0)
o.bo(0,p)
u.globalState.e=o
u.globalState.z.i(0,s,o)
u.globalState.d=o
if(H.bj(a,{func:1,args:[,]}))o.a7(new H.iw(t,a))
else if(H.bj(a,{func:1,args:[,,]}))o.a7(new H.ix(t,a))
else o.a7(a)
u.globalState.f.ad()},
lL:function(a){var t=P.aL(["command","print","msg",a])
return new H.ad(!0,P.bQ(null,P.n)).F(t)},
lh:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.li()
return},
li:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.e(new P.r("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.e(new P.r('Cannot extract URI from "'+t+'"'))},
lf:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.aS(!0,[]).P(b.data)
s=J.ae(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.me(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.aS(!0,[]).P(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.aS(!0,[]).P(s.h(t,"replyTo"))
s=u.globalState.a++
k=P.n
j=P.aM(null,null,null,k)
i=new H.b8(0,null,!1)
h=new H.aT(s,new H.aa(0,null,null,null,null,null,0,[k,H.b8]),j,u.createNewIsolate(),i,new H.ai(H.iq()),new H.ai(H.iq()),!1,!1,[],P.aM(null,null,null,null),null,null,!1,!0,P.aM(null,null,null,null))
j.l(0,0)
h.bo(0,i)
u.globalState.f.a.N(0,new H.aU(h,new H.ek(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.ad()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.kP(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.ad()
break
case"close":u.globalState.ch.ac(0,$.$get$jr().h(0,a))
a.terminate()
u.globalState.f.ad()
break
case"log":H.le(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
k=P.aL(["command","print","msg",t])
k=new H.ad(!0,P.bQ(null,P.n)).F(k)
s.toString
self.postMessage(k)}else P.ar(s.h(t,"msg"))
break
case"error":throw H.e(s.h(t,"msg"))}},
le:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aL(["command","log","msg",a])
r=new H.ad(!0,P.bQ(null,P.n)).F(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.a7(q)
t=H.af(q)
s=P.c7(t)
throw H.e(s)}},
lg:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.jy=$.jy+("_"+s)
$.jz=$.jz+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.E(0,["spawned",new H.be(s,r),q,t.r])
r=new H.el(a,b,c,d,t)
if(e){t.bI(q,q)
u.globalState.f.a.N(0,new H.aU(t,r,"start isolate"))}else r.$0()},
lB:function(a,b){var t=new H.fG(!0,!1,null)
t.d0(a,b)
return t},
lN:function(a){return new H.aS(!0,[]).P(new H.ad(!1,P.bQ(null,P.n)).F(a))},
iw:function iw(a,b){this.a=a
this.b=b},
ix:function ix(a,b){this.a=a
this.b=b},
hE:function hE(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
aT:function aT(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
hz:function hz(a,b){this.a=a
this.b=b},
hd:function hd(a,b){this.a=a
this.b=b},
he:function he(a){this.a=a},
aU:function aU(a,b,c){this.a=a
this.b=b
this.c=c},
hD:function hD(){},
ek:function ek(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
el:function el(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
h6:function h6(){},
be:function be(a,b){this.b=a
this.a=b},
hF:function hF(a,b){this.a=a
this.b=b},
bR:function bR(a,b,c){this.b=a
this.c=b
this.a=c},
b8:function b8(a,b,c){this.a=a
this.b=b
this.c=c},
fG:function fG(a,b,c){this.a=a
this.b=b
this.c=c},
fH:function fH(a,b){this.a=a
this.b=b},
fI:function fI(a,b){this.a=a
this.b=b},
ai:function ai(a){this.a=a},
ad:function ad(a,b){this.a=a
this.b=b},
aS:function aS(a,b){this.a=a
this.b=b},
m9:function(a){return u.types[a]},
mg:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.q(a).$iso},
i:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.bk(a)
if(typeof t!=="string")throw H.e(H.U(a))
return t},
lx:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.fb(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aN:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
d1:function(a){var t,s,r,q,p,o,n,m
t=J.q(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.n||!!J.q(a).$isaP){p=C.j(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.e.aA(q,0)===36)q=C.e.cH(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.dg(H.i5(a),0,null),u.mangledGlobalNames)},
f7:function(a){return"Instance of '"+H.d1(a)+"'"},
O:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lv:function(a){return a.b?H.O(a).getUTCFullYear()+0:H.O(a).getFullYear()+0},
lt:function(a){return a.b?H.O(a).getUTCMonth()+1:H.O(a).getMonth()+1},
lp:function(a){return a.b?H.O(a).getUTCDate()+0:H.O(a).getDate()+0},
lq:function(a){return a.b?H.O(a).getUTCHours()+0:H.O(a).getHours()+0},
ls:function(a){return a.b?H.O(a).getUTCMinutes()+0:H.O(a).getMinutes()+0},
lu:function(a){return a.b?H.O(a).getUTCSeconds()+0:H.O(a).getSeconds()+0},
lr:function(a){return a.b?H.O(a).getUTCMilliseconds()+0:H.O(a).getMilliseconds()+0},
jx:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.U(a))
return a[b]},
N:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.as(!0,b,"index",null)
t=J.dl(a)
if(b<0||C.b.cr(b,t))return P.A(b,a,"index",null,t)
return P.f8(b,"index",null)},
U:function(a){return new P.as(!0,a,null,null)},
e:function(a){var t
if(a==null)a=new P.bF()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.kl})
t.name=""}else t.toString=H.kl
return t},
kl:function(){return J.bk(this.dartException)},
C:function(a){throw H.e(a)},
L:function(a){throw H.e(new P.a8(a))},
an:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.fN(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
fO:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
jK:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
iK:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.er(a,s,t?null:b.receiver)},
a7:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.iy(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aJ(r,16)&8191)===10)switch(q){case 438:return t.$1(H.iK(H.i(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.i(s)+" (Error "+q+")"
return t.$1(new H.d0(p,null))}}if(a instanceof TypeError){o=$.$get$jE()
n=$.$get$jF()
m=$.$get$jG()
l=$.$get$jH()
k=$.$get$jL()
j=$.$get$jM()
i=$.$get$jJ()
$.$get$jI()
h=$.$get$jO()
g=$.$get$jN()
f=o.I(s)
if(f!=null)return t.$1(H.iK(s,f))
else{f=n.I(s)
if(f!=null){f.method="call"
return t.$1(H.iK(s,f))}else{f=m.I(s)
if(f==null){f=l.I(s)
if(f==null){f=k.I(s)
if(f==null){f=j.I(s)
if(f==null){f=i.I(s)
if(f==null){f=l.I(s)
if(f==null){f=h.I(s)
if(f==null){f=g.I(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.d0(s,f==null?null:f.method))}}return t.$1(new H.fR(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.d5()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.as(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.d5()
return a},
af:function(a){var t
if(a==null)return new H.de(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.de(a,null)},
mk:function(a){if(a==null||typeof a!='object')return J.ah(a)
else return H.aN(a)},
m6:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=a.length
for(r=0;r<s;){q=r+1
H.d(t)
p=a[r]
r=q+1
H.d(t)
b.i(0,p,a[q])}return b},
mf:function(a,b,c,d,e,f,g){switch(c){case 0:return H.df(b,new H.id(a))
case 1:return H.df(b,new H.ie(a,d))
case 2:return H.df(b,new H.ig(a,d,e))
case 3:return H.df(b,new H.ih(a,d,e,f))
case 4:return H.df(b,new H.ii(a,d,e,f,g))}throw H.e(P.c7("Unsupported number of arguments for wrapped closure"))},
bi:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.mf)
a.$identity=t
return t},
l2:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.q(c).$isb){t.$reflectionInfo=c
r=H.lx(t).r}else r=c
q=d?Object.create(new H.fq().constructor.prototype):Object.create(new H.bl(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.jk(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.m9,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.jh:H.iE
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.e("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.jk(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
l_:function(a,b,c,d){var t=H.iE
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
jk:function(a,b,c){var t,s,r,q
if(c)return H.l1(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.l_(s,b==null?r!=null:b!==r,t,b)
return q},
l0:function(a,b,c,d){var t,s
t=H.iE
s=H.jh
switch(b?-1:a){case 0:throw H.e(new H.fg("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
l1:function(a,b){var t,s,r,q
H.kZ()
t=$.jg
if(t==null){t=H.jf("receiver")
$.jg=t}s=b.$stubName
r=b.length
q=a[s]
t=H.l0(r,b==null?q!=null:b!==q,s,b)
return t},
iT:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.q(c).$isb){c.fixed$length=Array
t=c}else t=c
return H.l2(a,b,t,!!d,e,f)},
iE:function(a){return a.a},
jh:function(a){return a.c},
kZ:function(){var t=$.ji
if(t==null){t=H.jf("self")
$.ji=t}return t},
jf:function(a){var t,s,r,q,p
t=new H.bl("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
mE:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.ao(a,"String"))},
V:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.ao(a,"double"))},
mD:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.ao(a,"num"))},
m_:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.ao(a,"bool"))},
me:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.ao(a,"int"))},
mm:function(a,b){throw H.e(H.ao(a,b.substring(3)))},
ml:function(a,b){var t=J.ae(b)
throw H.e(H.jj(H.d1(a),t.be(b,3,t.gj(b))))},
ka:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.q(a)[b])return a
H.mm(a,b)},
aA:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.q(a)[b]
else t=!0
if(t)return a
H.ml(a,b)},
mC:function(a){if(a==null)return a
if(!!J.q(a).$isb)return a
throw H.e(H.ao(a,"List"))},
k4:function(a){var t=J.q(a)
return"$S" in t?t.$S():null},
bj:function(a,b){var t
if(a==null)return!1
t=H.k4(a)
return t==null?!1:H.kb(t,b)},
mA:function(a,b){var t,s
if(a==null)return a
if($.iQ)return a
$.iQ=!0
try{if(H.bj(a,b))return a
t=H.aB(b,null)
s=H.ao(a,t)
throw H.e(s)}finally{$.iQ=!1}},
ao:function(a,b){return new H.fP("type '"+H.d1(a)+"' is not a subtype of type '"+b+"'")},
jj:function(a,b){return new H.dx("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
az:function(a){if(!0===a)return!1
if(!!J.q(a).$isiG)a=a.$0()
if(typeof a==="boolean")return!a
throw H.e(H.ao(a,"bool"))},
aW:function(a){throw H.e(new H.h0(a))},
d:function(a){if(H.az(a))throw H.e(new P.c0(null))},
mq:function(a){throw H.e(new P.dB(a))},
iq:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
k7:function(a){return u.getIsolateTag(a)},
I:function(a){return new H.aw(a,null)},
J:function(a,b){H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
i5:function(a){if(a==null)return
return a.$ti},
k8:function(a,b){return H.j_(a["$as"+H.i(b)],H.i5(a))},
aq:function(a,b,c){var t,s
t=H.k8(a,b)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
aY:function(a,b){var t,s
t=H.i5(a)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
aB:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.d(!0)
H.d(!0)
return a[0].name+H.dg(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.i(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aB(t,b)
return H.lP(a,b)}return"unknown-reified-type"},
lP:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aB(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aB(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aB(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.m5(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aB(l[j],b)+(" "+H.i(j))}q+="}"}return"("+q+") => "+t},
dg:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=new P.bJ("")
for(r=b,q=!0,p=!0;H.d(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.d(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aB(o,c)}return p?"":"<"+s.k(0)+">"},
i6:function(a){var t,s
if(a instanceof H.b0){t=H.k4(a)
if(t!=null)return H.aB(t,null)}s=J.q(a).constructor.name
if(a==null)return s
return s+H.dg(a.$ti,0,null)},
j_:function(a,b){if(a==null)return b
H.d(typeof a=="function")
H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.iW(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.iW(a,null,b)
return b},
bV:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.i5(a)
s=J.q(a)
if(s[b]==null)return!1
return H.k1(H.j_(s[d],t),c)},
dh:function(a,b,c,d){if(a==null)return a
if(H.bV(a,b,c,d))return a
throw H.e(H.jj(H.d1(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dg(c,0,null),u.mangledGlobalNames)))},
my:function(a,b,c,d){if(a==null)return a
if(H.bV(a,b,c,d))return a
throw H.e(H.ao(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dg(c,0,null),u.mangledGlobalNames)))},
k1:function(a,b){var t,s,r,q,p
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
if(!H.W(r,b[p]))return!1}return!0},
m2:function(a,b,c){return H.iW(a,b,H.k8(b,c))},
W:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.name==="av")return!0
if('func' in b)return H.kb(a,b)
if('func' in a)return b.name==="iG"||b.name==="p"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.d(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.d(!0)
q=b[0]}else q=b
if(q!==s){p=H.aB(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.k1(H.j_(o,t),r)},
k0:function(a,b,c){var t,s,r,q,p,o,n
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
if(!(H.W(o,n)||H.W(n,o)))return!1}return!0},
lW:function(a,b){var t,s,r,q,p,o
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
if(!(H.W(p,o)||H.W(o,p)))return!1}return!0},
kb:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.d('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.W(t,s)||H.W(s,t)))return!1}r=a.args
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
if(n===m){if(!H.k0(r,q,!1))return!1
if(!H.k0(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.d(j)
g=r[h]
H.d(i)
f=q[h]
if(!(H.W(g,f)||H.W(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.d(j)
g=p[d]
H.d(i)
f=q[e]
if(!(H.W(g,f)||H.W(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.d(j)
g=p[d]
H.d(i)
f=o[e]
if(!(H.W(g,f)||H.W(f,g)))return!1}}return H.lW(a.named,b.named)},
iW:function(a,b,c){H.d(typeof a=="function")
H.d(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
mF:function(a){var t=$.iU
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
mB:function(a){return H.aN(a)},
mz:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
mh:function(a){var t,s,r,q,p,o
H.d(!(a instanceof P.p))
t=$.iU.$1(a)
s=$.i2[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.ic[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.k_.$2(a,t)
if(t!=null){s=$.i2[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.ic[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.iX(r)
$.i2[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.ic[t]=r
return r}if(p==="-"){o=H.iX(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.kd(a,r)
if(p==="*")throw H.e(new P.d9(t))
if(u.leafTags[t]===true){o=H.iX(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.kd(a,r)},
kd:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.im(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
iX:function(a){return J.im(a,!1,null,!!a.$iso)},
mj:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.im(t,!1,null,!!t.$iso)
else return J.im(t,c,null,null)},
mc:function(){if(!0===$.iV)return
$.iV=!0
H.md()},
md:function(){var t,s,r,q,p,o,n,m
$.i2=Object.create(null)
$.ic=Object.create(null)
H.mb()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.kg.$1(p)
if(o!=null){n=H.mj(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
mb:function(){var t,s,r,q,p,o,n
t=C.t()
t=H.bh(C.p,H.bh(C.v,H.bh(C.i,H.bh(C.i,H.bh(C.u,H.bh(C.q,H.bh(C.r(C.j),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.iU=new H.i9(p)
$.k_=new H.ia(o)
$.kg=new H.ib(n)},
bh:function(a,b){return a(b)||b},
fb:function fb(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fN:function fN(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
d0:function d0(a,b){this.a=a
this.b=b},
er:function er(a,b,c){this.a=a
this.b=b
this.c=c},
fR:function fR(a){this.a=a},
iy:function iy(a){this.a=a},
de:function de(a,b){this.a=a
this.b=b},
id:function id(a){this.a=a},
ie:function ie(a,b){this.a=a
this.b=b},
ig:function ig(a,b,c){this.a=a
this.b=b
this.c=c},
ih:function ih(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ii:function ii(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
b0:function b0(){},
fA:function fA(){},
fq:function fq(){},
bl:function bl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fP:function fP(a){this.a=a},
dx:function dx(a){this.a=a},
fg:function fg(a){this.a=a},
h0:function h0(a){this.a=a},
aw:function aw(a,b){this.a=a
this.b=b},
aa:function aa(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
eq:function eq(a){this.a=a},
et:function et(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
eu:function eu(a,b){this.a=a
this.$ti=b},
ev:function ev(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
i9:function i9(a){this.a=a},
ia:function ia(a){this.a=a},
ib:function ib(a){this.a=a},
B:function(a){return a},
hX:function(a){var t,s,r
if(!!J.q(a).$ism)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
bA:function bA(){},
b7:function b7(){},
eJ:function eJ(){},
cW:function cW(){},
cX:function cX(){},
cY:function cY(){},
cV:function cV(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
cZ:function cZ(){},
eQ:function eQ(){},
bB:function bB(){},
bC:function bC(){},
bD:function bD(){},
bE:function bE(){},
m5:function(a){var t=H.J(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
ip:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
q:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cQ.prototype
return J.ep.prototype}if(typeof a=="string")return J.aI.prototype
if(a==null)return J.cR.prototype
if(typeof a=="boolean")return J.eo.prototype
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aJ.prototype
return a}if(a instanceof P.p)return a
return J.i4(a)},
im:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
i4:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.iV==null){H.mc()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.e(new P.d9("Return interceptor for "+H.i(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$iJ()]
if(p!=null)return p
p=H.mh(a)
if(p!=null)return p
if(typeof a=="function")return C.w
s=Object.getPrototypeOf(a)
if(s==null)return C.k
if(s===Object.prototype)return C.k
if(typeof q=="function"){Object.defineProperty(q,$.$get$iJ(),{value:C.f,enumerable:false,writable:true,configurable:true})
return C.f}return C.f},
ae:function(a){if(typeof a=="string")return J.aI.prototype
if(a==null)return a
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aJ.prototype
return a}if(a instanceof P.p)return a
return J.i4(a)},
i3:function(a){if(a==null)return a
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aJ.prototype
return a}if(a instanceof P.p)return a
return J.i4(a)},
k6:function(a){if(typeof a=="number")return J.b5.prototype
if(a==null)return a
if(!(a instanceof P.p))return J.aP.prototype
return a},
m7:function(a){if(typeof a=="number")return J.b5.prototype
if(typeof a=="string")return J.aI.prototype
if(a==null)return a
if(!(a instanceof P.p))return J.aP.prototype
return a},
m8:function(a){if(typeof a=="string")return J.aI.prototype
if(a==null)return a
if(!(a instanceof P.p))return J.aP.prototype
return a},
l:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aJ.prototype
return a}if(a instanceof P.p)return a
return J.i4(a)},
D:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.q(a).v(a,b)},
ag:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.k6(a).as(a,b)},
km:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.k6(a).at(a,b)},
aZ:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mg(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ae(a).h(a,b)},
kn:function(a,b,c,d){return J.l(a).d6(a,b,c,d)},
j0:function(a,b){return J.m8(a).aA(a,b)},
ko:function(a,b,c,d){return J.l(a).dn(a,b,c,d)},
j1:function(a,b){return J.l(a).bH(a,b)},
j2:function(a,b,c){return J.l(a).bJ(a,b,c)},
kp:function(a,b){return J.l(a).dA(a,b)},
di:function(a,b,c){return J.l(a).bK(a,b,c)},
bZ:function(a,b,c){return J.l(a).bL(a,b,c)},
dj:function(a,b){return J.l(a).dD(a,b)},
kq:function(a,b){return J.l(a).bM(a,b)},
kr:function(a,b,c){return J.l(a).bN(a,b,c)},
j3:function(a,b,c,d){return J.l(a).bO(a,b,c,d)},
ks:function(a,b,c,d,e){return J.l(a).bP(a,b,c,d,e)},
kt:function(a,b){return J.m7(a).K(a,b)},
iz:function(a){return J.l(a).bR(a)},
ku:function(a){return J.l(a).bS(a)},
kv:function(a){return J.l(a).bU(a)},
kw:function(a){return J.l(a).dH(a)},
kx:function(a,b){return J.l(a).bV(a,b)},
iA:function(a,b){return J.l(a).bW(a,b)},
ky:function(a,b,c,d){return J.l(a).bX(a,b,c,d)},
kz:function(a,b,c,d,e){return J.l(a).dO(a,b,c,d,e)},
kA:function(a,b,c,d,e){return J.l(a).bY(a,b,c,d,e)},
kB:function(a,b,c,d,e,f){return J.l(a).dP(a,b,c,d,e,f)},
kC:function(a,b){return J.i3(a).p(a,b)},
c_:function(a,b){return J.l(a).bZ(a,b)},
kD:function(a,b){return J.l(a).c_(a,b)},
kE:function(a){return J.l(a).dQ(a)},
kF:function(a,b){return J.i3(a).aX(a,b)},
ah:function(a){return J.q(a).gu(a)},
dk:function(a){return J.i3(a).gA(a)},
dl:function(a){return J.ae(a).gj(a)},
kG:function(a){return J.q(a).gw(a)},
kH:function(a){return J.l(a).gaq(a)},
iB:function(a){return J.l(a).gm(a)},
iC:function(a){return J.l(a).gn(a)},
j4:function(a){return J.l(a).gH(a)},
kI:function(a){return J.l(a).ar(a)},
kJ:function(a){return J.l(a).b4(a)},
kK:function(a,b){return J.l(a).b5(a,b)},
kL:function(a,b,c){return J.l(a).b6(a,b,c)},
j5:function(a,b,c){return J.l(a).b9(a,b,c)},
kM:function(a,b){return J.l(a).c1(a,b)},
kN:function(a,b){return J.i3(a).c4(a,b)},
kO:function(a,b,c){return J.l(a).c5(a,b,c)},
kP:function(a,b){return J.l(a).E(a,b)},
kQ:function(a,b,c,d){return J.l(a).bd(a,b,c,d)},
kR:function(a,b,c,d,e,f,g){return J.l(a).c9(a,b,c,d,e,f,g)},
kS:function(a,b,c,d){return J.l(a).ca(a,b,c,d)},
j6:function(a,b,c,d){return J.l(a).cb(a,b,c,d)},
bk:function(a){return J.q(a).k(a)},
kT:function(a,b,c,d){return J.l(a).ed(a,b,c,d)},
kU:function(a,b,c){return J.l(a).cc(a,b,c)},
kV:function(a,b,c){return J.l(a).cd(a,b,c)},
iD:function(a,b,c){return J.l(a).ce(a,b,c)},
kW:function(a,b,c){return J.l(a).cf(a,b,c)},
j7:function(a,b,c){return J.l(a).cg(a,b,c)},
j8:function(a,b,c){return J.l(a).ci(a,b,c)},
j9:function(a,b,c){return J.l(a).cj(a,b,c)},
ja:function(a,b,c,d){return J.l(a).ck(a,b,c,d)},
jb:function(a,b,c,d){return J.l(a).cl(a,b,c,d)},
kX:function(a,b){return J.l(a).cn(a,b)},
kY:function(a,b,c){return J.l(a).ee(a,b,c)},
jc:function(a,b,c,d,e,f,g){return J.l(a).cp(a,b,c,d,e,f,g)},
a:function a(){},
eo:function eo(){},
cR:function cR(){},
bx:function bx(){},
f1:function f1(){},
aP:function aP(){},
aJ:function aJ(){},
aH:function aH(a){this.$ti=a},
iH:function iH(a){this.$ti=a},
dr:function dr(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b5:function b5(){},
cQ:function cQ(){},
ep:function ep(){},
aI:function aI(){}},P={
lE:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.lX()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.bi(new P.h3(t),1)).observe(s,{childList:true})
return new P.h2(t,s,r)}else if(self.setImmediate!=null)return P.lY()
return P.lZ()},
lF:function(a){++u.globalState.f.b
self.scheduleImmediate(H.bi(new P.h4(a),0))},
lG:function(a){++u.globalState.f.b
self.setImmediate(H.bi(new P.h5(a),0))},
lH:function(a){P.iN(C.h,a)},
lS:function(a,b){if(H.bj(a,{func:1,args:[P.av,P.av]})){b.toString
return a}else{b.toString
return a}},
lb:function(a,b,c){var t
if(a==null)a=new P.bF()
t=$.u
if(t!==C.d)t.toString
t=new P.H(0,t,null,[c])
t.d7(a,b)
return t},
lc:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.H(0,$.u,null,[P.b])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.ec(t,!1,b,s)
try{for(m=0,l=0;m<1;++m){q=a[m]
p=l
q.b2(new P.eb(t,!1,b,s,p),r)
l=++t.b}if(l===0){l=new P.H(0,$.u,null,[null])
l.bp(C.x)
return l}k=new Array(l)
k.fixed$length=Array
t.a=k}catch(j){o=H.a7(j)
n=H.af(j)
if(t.b===0||!1)return P.lb(o,n,null)
else{t.c=o
t.d=n}}return s},
lO:function(a,b,c){$.u.toString
a.J(b,c)},
lI:function(a,b){var t=new P.H(0,$.u,null,[b])
H.d(!0)
t.a=4
t.c=a
return t},
jU:function(a,b){var t,s,r
H.d(b.a<4)
H.d(!(a instanceof P.H))
H.d(b.a===0)
b.a=1
try{a.b2(new P.hn(b),new P.ho(b))}catch(r){t=H.a7(r)
s=H.af(r)
P.mn(new P.hp(b,t,s))}},
hm:function(a,b){var t,s,r,q
H.d(b.a<=1)
for(;t=a.a,s=t===2,s;){H.d(s)
a=a.c}s=b.a
if(t>=4){H.d(s<4)
r=b.c
b.c=null
q=b.a5(r)
H.d(b.a<4)
H.d(a.a>=4)
b.a=a.a
b.c=a.c
P.bd(b,q)}else{q=b.c
H.d(s<=1)
b.a=2
b.c=a
a.bB(q)}},
bd:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.hY(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bd(t.a,b)}s=t.a
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
P.hY(null,null,p,o,s)
return}s=$.u
if(s==null?l!=null:s!==l){H.d(l!=null)
s=$.u
H.d(l==null?s!=null:l!==s)
j=$.u
$.u=l
i=j}else i=null
s=b.c
if(s===8)new P.hu(t,r,q,b).$0()
else if(p){if((s&1)!==0)new P.ht(r,b,m).$0()}else if((s&2)!==0)new P.hs(t,r,b).$0()
if(i!=null){H.d(!0)
$.u=i}s=r.b
if(!!J.q(s).$isaG){if(s.a>=4){H.d(o.a<4)
h=o.c
o.c=null
b=o.a5(h)
H.d(o.a<4)
H.d(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.hm(s,o)
return}}g=b.b
H.d(g.a<4)
h=g.c
g.c=null
b=g.a5(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.d(!o)
g.a=4
g.c=p}else{H.d(!o)
g.a=8
g.c=p}t.a=g
s=g}},
lR:function(){var t,s
for(;t=$.bf,t!=null;){$.bT=null
s=t.b
$.bf=s
if(s==null)$.bS=null
t.a.$0()}},
lV:function(){$.iR=!0
try{P.lR()}finally{$.bT=null
$.iR=!1
if($.bf!=null)$.$get$iP().$1(P.k2())}},
jY:function(a){var t=new P.da(a,null)
if($.bf==null){$.bS=t
$.bf=t
if(!$.iR)$.$get$iP().$1(P.k2())}else{$.bS.b=t
$.bS=t}},
lU:function(a){var t,s,r
t=$.bf
if(t==null){P.jY(a)
$.bT=$.bS
return}s=new P.da(a,null)
r=$.bT
if(r==null){s.b=t
$.bT=s
$.bf=s}else{s.b=r.b
r.b=s
$.bT=s
if(s.b==null)$.bS=s}},
mn:function(a){var t=$.u
if(C.d===t){P.bg(null,null,C.d,a)
return}t.toString
P.bg(null,null,t,t.aR(a))},
lM:function(a,b,c){var t=a.dE(0)
if(!!J.q(t).$isaG&&t!==$.$get$jo())t.ef(new P.hW(b,c))
else b.a2(c)},
lC:function(a,b){var t=$.u
if(t===C.d){t.toString
return P.iN(a,b)}return P.iN(a,t.aR(b))},
iN:function(a,b){var t=C.b.G(a.a,1000)
return H.lB(t<0?0:t,b)},
iO:function(a){var t,s
H.d(a!=null)
t=$.u
H.d(a==null?t!=null:a!==t)
s=$.u
$.u=a
return s},
hY:function(a,b,c,d,e){var t={}
t.a=d
P.lU(new P.hZ(t,e))},
jW:function(a,b,c,d){var t,s
if($.u===c)return d.$0()
t=P.iO(c)
try{s=d.$0()
return s}finally{s=t
H.d(s!=null)
$.u=s}},
jX:function(a,b,c,d,e){var t,s
if($.u===c)return d.$1(e)
t=P.iO(c)
try{s=d.$1(e)
return s}finally{s=t
H.d(s!=null)
$.u=s}},
lT:function(a,b,c,d,e,f){var t,s
if($.u===c)return d.$2(e,f)
t=P.iO(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.d(s!=null)
$.u=s}},
bg:function(a,b,c,d){var t=C.d!==c
if(t)d=!(!t||!1)?c.aR(d):c.dB(d)
P.jY(d)},
h3:function h3(a){this.a=a},
h2:function h2(a,b,c){this.a=a
this.b=b
this.c=c},
h4:function h4(a){this.a=a},
h5:function h5(a){this.a=a},
ec:function ec(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eb:function eb(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
h8:function h8(){},
h1:function h1(a,b){this.a=a
this.$ti=b},
hR:function hR(a,b){this.a=a
this.$ti=b},
bN:function bN(a,b,c,d,e,f){var _=this
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
hj:function hj(a,b){this.a=a
this.b=b},
hr:function hr(a,b){this.a=a
this.b=b},
hn:function hn(a){this.a=a},
ho:function ho(a){this.a=a},
hp:function hp(a,b,c){this.a=a
this.b=b
this.c=c},
hl:function hl(a,b){this.a=a
this.b=b},
hq:function hq(a,b){this.a=a
this.b=b},
hk:function hk(a,b,c){this.a=a
this.b=b
this.c=c},
hu:function hu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hv:function hv(a){this.a=a},
ht:function ht(a,b,c){this.a=a
this.b=b
this.c=c},
hs:function hs(a,b,c){this.a=a
this.b=b
this.c=c},
da:function da(a,b){this.a=a
this.b=b},
bI:function bI(){},
fv:function fv(a){this.a=a},
fw:function fw(a,b){this.a=a
this.b=b},
ft:function ft(a,b,c){this.a=a
this.b=b
this.c=c},
fu:function fu(a){this.a=a},
fs:function fs(){},
hW:function hW(a,b){this.a=a
this.b=b},
b_:function b_(a,b){this.a=a
this.b=b},
hV:function hV(){},
hZ:function hZ(a,b){this.a=a
this.b=b},
hH:function hH(){},
hJ:function hJ(a,b){this.a=a
this.b=b},
hI:function hI(a,b){this.a=a
this.b=b},
hK:function hK(a,b){this.a=a
this.b=b},
jt:function(a,b){return new H.aa(0,null,null,null,null,null,0,[a,b])},
R:function(){return new H.aa(0,null,null,null,null,null,0,[null,null])},
aL:function(a){return H.m6(a,new H.aa(0,null,null,null,null,null,0,[null,null]))},
bQ:function(a,b){return new P.dc(0,null,null,null,null,null,0,[a,b])},
lK:function(){var t=Object.create(null)
H.d(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
lj:function(a,b,c){var t,s
if(P.iS(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$bU()
C.a.l(s,a)
try{P.lQ(a,t)}finally{H.d(C.a.gaZ(s)===a)
s.pop()}s=P.jD(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
em:function(a,b,c){var t,s,r
if(P.iS(a))return b+"..."+c
t=new P.bJ(b)
s=$.$get$bU()
C.a.l(s,a)
try{r=t
r.a=P.jD(r.gU(),a,", ")}finally{H.d(C.a.gaZ(s)===a)
s.pop()}s=t
s.a=s.gU()+c
s=t.gU()
return s.charCodeAt(0)==0?s:s},
iS:function(a){var t,s
for(t=0;s=$.$get$bU(),t<s.length;++t)if(a===s[t])return!0
return!1},
lQ:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gA(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.q())return
q=H.i(t.gt())
C.a.l(b,q)
s+=q.length+2;++r}if(!t.q()){if(r<=5)return
p=b.pop()
o=b.pop()}else{n=t.gt();++r
if(!t.q()){if(r<=4){C.a.l(b,H.i(n))
return}p=H.i(n)
o=b.pop()
s+=p.length+2}else{m=t.gt();++r
H.d(r<100)
for(;t.q();n=m,m=l){l=t.gt();++r
if(r>100){while(!0){if(!(s>75&&r>3))break
s-=b.pop().length+2;--r}C.a.l(b,"...")
return}}o=H.i(n)
p=H.i(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)C.a.l(b,k)
C.a.l(b,o)
C.a.l(b,p)},
aM:function(a,b,c,d){return new P.hA(0,null,null,null,null,null,0,[d])},
ll:function(a,b){var t,s
t=P.aM(null,null,null,b)
for(s=J.dk(a);s.q();)t.l(0,s.gt())
return t},
ln:function(a){var t,s,r
t={}
if(P.iS(a))return"{...}"
s=new P.bJ("")
try{C.a.l($.$get$bU(),a)
r=s
r.a=r.gU()+"{"
t.a=!0
a.aX(0,new P.eA(t,s))
t=s
t.a=t.gU()+"}"}finally{t=$.$get$bU()
H.d(C.a.gaZ(t)===a)
t.pop()}t=s.gU()
return t.charCodeAt(0)==0?t:t},
iL:function(a,b){var t=new P.ew(null,0,0,0,[b])
t.cT(a,b)
return t},
dc:function dc(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hA:function hA(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hB:function hB(a,b,c){this.a=a
this.b=b
this.c=c},
bP:function bP(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hy:function hy(){},
w:function w(){},
eA:function eA(a,b){this.a=a
this.b=b},
ew:function ew(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hC:function hC(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fk:function fk(){},
fj:function fj(){},
jD:function(a,b,c){var t=J.dk(b)
if(!t.q())return a
if(c.length===0){do a+=H.i(t.gt())
while(t.q())}else{a+=H.i(t.gt())
for(;t.q();)a=a+c+H.i(t.gt())}return a},
l3:function(a,b){return J.kt(a,b)},
l4:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.i(t)
if(t>=10)return s+"00"+H.i(t)
return s+"000"+H.i(t)},
l5:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c2:function(a){if(a>=10)return""+a
return"0"+a},
iF:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bk(a)
if(typeof a==="string")return JSON.stringify(a)
return P.l7(a)},
l7:function(a){var t=J.q(a)
if(!!t.$isb0)return t.k(a)
return H.f7(a)},
dq:function(a){return new P.as(!1,null,null,a)},
jd:function(a,b,c){return new P.as(!0,a,b,c)},
f8:function(a,b,c){return new P.d2(null,null,!0,a,b,"Value not in range")},
bG:function(a,b,c,d,e){return new P.d2(b,c,!0,a,d,"Invalid value")},
jA:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.bG(a,0,c,"start",f))
if(a>b||b>c)throw H.e(P.bG(b,a,c,"end",f))
return b},
A:function(a,b,c,d,e){var t=e!=null?e:J.dl(b)
return new P.ei(b,t,!0,a,c,"Index out of range")},
c7:function(a){return new P.hi(a)},
ju:function(a,b,c){var t,s
t=H.J([],[c])
for(s=J.dk(a);s.q();)C.a.l(t,s.gt())
return t},
ar:function(a){H.ip(H.i(a))},
aX:function aX(){},
E:function E(){},
bn:function bn(a,b){this.a=a
this.b=b},
K:function K(){},
aF:function aF(a){this.a=a},
dI:function dI(){},
dJ:function dJ(){},
b1:function b1(){},
c0:function c0(a){this.a=a},
bF:function bF(){},
as:function as(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d2:function d2(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ei:function ei(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
r:function r(a){this.a=a},
d9:function d9(a){this.a=a},
ba:function ba(a){this.a=a},
a8:function a8(a){this.a=a},
d5:function d5(){},
dB:function dB(a){this.a=a},
hi:function hi(a){this.a=a},
dL:function dL(a,b,c){this.a=a
this.b=b
this.$ti=c},
n:function n(){},
aj:function aj(){},
cP:function cP(){},
b:function b(){},
au:function au(){},
av:function av(){},
Q:function Q(){},
p:function p(){},
bH:function bH(){},
v:function v(){},
bJ:function bJ(a){this.a=a},
k3:function(a){return a},
i0:function(a){var t,s,r,q,p
if(a==null)return
t=P.R()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.L)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
m3:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.kF(a,new P.i_(t))
return t},
i_:function i_(a){this.a=a},
hG:function hG(){},
F:function F(){},
dm:function dm(){},
aC:function aC(){},
dM:function dM(){},
dN:function dN(){},
dO:function dO(){},
dP:function dP(){},
dQ:function dQ(){},
dR:function dR(){},
dS:function dS(){},
dT:function dT(){},
dU:function dU(){},
dV:function dV(){},
dW:function dW(){},
dX:function dX(){},
dY:function dY(){},
dZ:function dZ(){},
e_:function e_(){},
e0:function e0(){},
e1:function e1(){},
e2:function e2(){},
e6:function e6(){},
e9:function e9(){},
a9:function a9(){},
at:function at(){},
eg:function eg(){},
ak:function ak(){},
es:function es(){},
eB:function eB(){},
eC:function eC(){},
al:function al(){},
eS:function eS(){},
eZ:function eZ(){},
f3:function f3(){},
f4:function f4(){},
f9:function f9(){},
fa:function fa(){},
fh:function fh(){},
fx:function fx(){},
G:function G(){},
fy:function fy(){},
fz:function fz(){},
d6:function d6(){},
fB:function fB(){},
bK:function bK(){},
am:function am(){},
fL:function fL(){},
fT:function fT(){},
fV:function fV(){},
fW:function fW(){},
bO:function bO(){},
hL:function hL(){},
hM:function hM(){},
hN:function hN(){},
cn:function cn(){},
cf:function cf(){},
cc:function cc(){},
cl:function cl(){},
cA:function cA(){},
cC:function cC(){},
cD:function cD(){},
cE:function cE(){},
ds:function ds(){},
fd:function fd(){},
fe:function fe(){},
hS:function hS(){},
fp:function fp(){},
ct:function ct(){},
cF:function cF(){}},W={
l6:function(a){return"wheel"},
aV:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jV:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ap:function(a,b,c,d,e){var t=W.jZ(new W.hh(c))
t=new W.hg(0,a,b,t,!1,[e])
t.d4(a,b,c,!1,e)
return t},
jZ:function(a){var t=$.u
if(t===C.d)return a
return t.dC(a)},
k:function k(){},
dn:function dn(){},
dp:function dp(){},
X:function X(){},
dt:function dt(){},
c1:function c1(){},
du:function du(){},
aD:function aD(){},
dw:function dw(){},
aE:function aE(){},
dz:function dz(){},
y:function y(){},
bm:function bm(){},
dA:function dA(){},
dC:function dC(){},
dD:function dD(){},
bo:function bo(){},
c3:function c3(){},
dE:function dE(){},
dF:function dF(){},
c4:function c4(){},
c5:function c5(){},
dG:function dG(){},
dH:function dH(){},
c6:function c6(){},
j:function j(){},
f:function f(){},
Y:function Y(){},
e4:function e4(){},
e5:function e5(){},
ea:function ea(){},
Z:function Z(){},
ee:function ee(){},
bv:function bv(){},
c9:function c9(){},
ef:function ef(){},
bw:function bw(){},
b2:function b2(){},
b3:function b3(){},
b4:function b4(){},
ej:function ej(){},
aK:function aK(){},
ey:function ey(){},
by:function by(){},
eE:function eE(){},
eG:function eG(){},
bz:function bz(){},
a_:function a_(){},
eH:function eH(){},
M:function M(){},
eR:function eR(){},
x:function x(){},
d_:function d_(){},
eY:function eY(){},
f0:function f0(){},
a0:function a0(){},
f2:function f2(){},
f5:function f5(){},
f6:function f6(){},
ff:function ff(){},
d3:function d3(){},
fi:function fi(){},
fl:function fl(){},
a1:function a1(){},
fm:function fm(){},
a2:function a2(){},
fo:function fo(){},
a3:function a3(){},
fr:function fr(){},
S:function S(){},
ac:function ac(){},
a4:function a4(){},
T:function T(){},
fC:function fC(){},
fD:function fD(){},
fF:function fF(){},
a5:function a5(){},
aO:function aO(){},
fJ:function fJ(){},
fK:function fK(){},
bb:function bb(){},
fM:function fM(){},
ax:function ax(){},
fS:function fS(){},
bc:function bc(){},
fU:function fU(){},
fX:function fX(){},
fY:function fY(){},
aQ:function aQ(){},
bM:function bM(){},
fZ:function fZ(a){this.a=a},
h_:function h_(){},
aR:function aR(){},
h7:function h7(){},
db:function db(){},
h9:function h9(){},
ha:function ha(){},
hb:function hb(){},
hw:function hw(){},
hx:function hx(){},
dd:function dd(){},
hO:function hO(){},
hP:function hP(){},
hQ:function hQ(){},
hT:function hT(){},
hU:function hU(){},
hf:function hf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hc:function hc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hg:function hg(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
hh:function hh(a){this.a=a},
z:function z(){},
e7:function e7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bp:function bp(){},
bq:function bq(){},
br:function br(){},
bs:function bs(){},
bt:function bt(){},
bu:function bu(){},
ca:function ca(){},
cu:function cu(){},
cg:function cg(){},
cd:function cd(){},
co:function co(){},
cp:function cp(){},
cq:function cq(){},
cr:function cr(){},
cs:function cs(){},
cb:function cb(){},
ce:function ce(){},
ch:function ch(){},
ci:function ci(){},
cj:function cj(){},
ck:function ck(){},
cm:function cm(){},
cv:function cv(){},
cw:function cw(){},
cx:function cx(){},
cH:function cH(){},
cI:function cI(){},
cG:function cG(){},
cL:function cL(){},
cM:function cM(){},
cN:function cN(){},
cO:function cO(){},
cy:function cy(){},
cz:function cz(){},
cB:function cB(){},
cJ:function cJ(){},
cK:function cK(){}},B={
mo:function(a){var t,s
t=document
s=W.aK
W.ap(t,"keydown",new B.ir(),!1,s)
W.ap(t,"keyup",new B.is(),!1,s)
if(!$.mp)W.ap(t,"mousemove",new B.it(),!1,W.M)
s=W.M
W.ap(t,"mousedown",new B.iu(),!1,s)
W.ap(t,"mouseup",new B.iv(),!1,s)},
lo:function(a,b,c,d){var t,s,r,q
t=new Float32Array(H.B(3))
s=$.$get$i1()
r=$.$get$bW()
q=new T.ab(new Float32Array(H.B(16)))
q.Z()
q=new B.eT(a,b,c,0,new T.t(t),-0.02,s,r,q,new T.t(new Float32Array(H.B(3))),new T.t(new Float32Array(H.B(3))),new T.t(new Float32Array(H.B(3))),new T.t(new Float32Array(H.B(3))),"camera:orbit",!1,!0)
q.cV(a,b,c,d)
return q},
ir:function ir(){},
is:function is(){},
it:function it(){},
iu:function iu(){},
iv:function iv(){},
eT:function eT(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
eU:function eU(a){this.a=a},
eV:function eV(a){this.a=a},
eW:function eW(){},
eX:function eX(a){this.a=a},
ly:function(b5,b6,b7,b8,b9,c0,c1,c2,c3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
t=[]
s=new Float32Array(H.B(3))
r=new T.t(s)
q=new T.t(new Float32Array(H.B(3)))
new Float32Array(H.B(3))
p=[[P.b,P.n]]
o=H.J(new Array(c0),p)
for(n=[P.n],m=0;m<c0;++m){o[m]=H.J(new Array(c1),n)
l=m/c0*2*b7*3.141592653589793
B.k9(l,b8,b7,b9,b6,$.$get$io())
B.k9(l+0.02,b8,b7,b9,b6,$.$get$iZ())
k=$.$get$iZ().a
j=k[0]
i=$.$get$io().a
s[0]=j-i[0]
s[1]=k[1]-i[1]
s[2]=k[2]-i[2]
j=q.a
j[0]=k[0]+i[0]
j[1]=k[1]+i[1]
j[2]=k[2]+i[2]
h=r.al(q)
h.ab(0)
q=h.al(r)
q.ab(0)
for(k=q.a,j=h.a,g=0;g<c1;++g){f=g/c1*2*3.141592653589793
e=c2*Math.cos(f)
d=c2*Math.sin(f)
i=$.$get$io().a
c=i[0]
b=k[0]
a=j[0]
a0=i[1]
a1=k[1]
a2=j[1]
i=i[2]
a3=k[2]
a4=j[2]
a5=new Float32Array(3)
a5[0]=c+e*b+d*a
a5[1]=a0+e*a1+d*a2
a5[2]=i+e*a3+d*a4
C.a.l(t,new T.t(a5))
o[m][g]=t.length-1}}s=P.R()
a6=new G.ed(!1,[],[],[],s)
H.d(!s.C(0,"aTexUV"))
H.d(C.e.cF("aTexUV","a"))
switch($.$get$P().h(0,"aTexUV").a){case"vec2":s.i(0,"aTexUV",H.J([],[T.a6]))
break
case"vec3":s.i(0,"aTexUV",H.J([],[T.t]))
break
case"vec4":s.i(0,"aTexUV",H.J([],[T.ay]))
break
case"float":s.i(0,"aTexUV",H.J([],[P.K]))
break
case"uvec4":s.i(0,"aTexUV",H.J([],p))
break
default:if(H.az(!1))H.aW("unknown type for aTexUV")}for(m=0;m<c0;m=a7)for(a7=m+1,a8=a7%c0,g=0;g<c1;g=a9){a9=g+1
b0=a9%c1
s=o[m]
b1=s[g]
p=o[a8]
b2=p[g]
b3=p[b0]
b4=s[b0]
s=g/c1
p=new Float32Array(2)
p[0]=0
p[1]=s
n=new Float32Array(2)
n[0]=1
n[1]=s
s=a9/c1
k=new Float32Array(2)
k[0]=1
k[1]=s
j=new Float32Array(2)
j[0]=0
j[1]=s
a6.cM(1)
a6.cN([C.a.h(t,b4),C.a.h(t,b3),C.a.h(t,b2),C.a.h(t,b1)])
a6.cL("aTexUV",[new T.a6(p),new T.a6(n),new T.a6(k),new T.a6(j)])}a6.cQ()
return a6},
k9:function(a,b,c,d,e,f){var t,s,r,q,p
t=Math.cos(a)
s=Math.sin(a)
r=b/c*a
q=d*(2+Math.cos(r))
p=f.a
p[0]=q*0.5*t
p[1]=q*s*0.5
p[2]=e*d*Math.sin(r)*0.5
return f}},G={
lD:function(a){var t,s,r
t=a.split("\n")
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.i(t[s])}return C.a.aa(t,"\n")},
jT:function(a,b,c){var t,s,r,q
t=J.l(a)
s=t.bT(a,b)
t.bc(a,s,c)
t.bQ(a,s)
r=t.b8(a,s,35713)
if(r!=null&&!r){q=t.b7(a,s)
P.ar("E:Compilation failed:")
P.ar("E:"+G.lD(c))
P.ar("E:Failure:")
P.ar(C.e.X("E:",q))
throw H.e(q)}return s},
jw:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
d.B(b)
d.aw(a)
e.B(c)
e.aw(a)
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
t=Math.sqrt(e.gao())
if(t===0)return!1
e.ct(0,-1/t)
return!0},
jv:function(a){var t=new G.eD(P.R(),a,!1,!0)
t.cU(a)
return t},
jn:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.iB(a[s])
b[t+1]=J.iC(a[s])
b[t+2]=J.j4(a[s])}return b},
l9:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.iB(a[s])
b[t+1]=J.iC(a[s])}return b},
la:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.iB(a[s])
b[t+1]=J.iC(a[s])
b[t+2]=J.j4(a[s])
b[t+3]=J.kH(a[s])}return b},
l8:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.aZ(a[s],0)
b[t+1]=J.aZ(a[s],1)
b[t+2]=J.aZ(a[s],2)
b[t+3]=J.aZ(a[s],3)}return b},
lJ:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
for(t=a.e,s=t.gL(t),s=s.gA(s),r=b.x,q=[[P.b,P.n]],p=[P.K],o=[T.ay],n=[T.t],m=[T.a6];s.q();){l=s.gt()
if(!r.C(0,l)){k="Dropping unnecessary attribute: "+H.i(l)
if($.k5>0)H.ip("I: "+k)
continue}j=t.h(0,l)
switch($.$get$P().h(0,l).a){case"vec2":b.a0(l,G.l9(H.dh(j,"$isb",m,"$asb"),null),2)
break
case"vec3":b.a0(l,G.jn(H.dh(j,"$isb",n,"$asb"),null),3)
break
case"vec4":b.a0(l,G.la(H.dh(j,"$isb",o,"$asb"),null),4)
break
case"float":b.a0(l,new Float32Array(H.hX(H.dh(j,"$isb",p,"$asb"))),1)
break
case"uvec4":b.a0(l,G.l8(H.dh(j,"$isb",q,"$asb"),null),4)
break
default:if(H.az(!1))H.aW("unknown type for "+H.i(l)+" ["+J.kG(j[0]).k(0)+"] ["+new H.aw(H.i6(j),null).k(0)+"] "+H.i(j))}}},
jB:function(a,b,c,d){var t=new G.fc(b,c,d,null,null,P.R(),P.R(),P.aM(null,null,null,P.v),null,a,!1,!0)
t.cW(a,b,c,d)
return t},
eI:function eI(){},
fQ:function fQ(){},
dv:function dv(){},
dy:function dy(a,b){this.a=a
this.b=b},
e3:function e3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ed:function ed(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
d8:function d8(a,b,c){this.a=a
this.b=b
this.c=c},
d7:function d7(a,b,c){this.a=a
this.b=b
this.c=c},
eD:function eD(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
eF:function eF(a,b,c,d,e,f,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
f_:function f_(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
fc:function fc(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
h:function h(a,b,c){this.a=a
this.b=b
this.c=c},
b9:function b9(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fn:function fn(){},
fE:function fE(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bL:function bL(){},
eh:function eh(a,b,c,d,e,f){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f},
mi:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
t={}
s=C.m.e5(document,"#webgl-canvas")
s.width=s.clientWidth
s.height=s.clientHeight
r=new G.dy(null,s)
q=(s&&C.l).cs(s,"webgl2",P.aL(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
r.a=q
if(q==null)H.C(P.c7('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
p="ChronosGL Config: "+J.bk(J.kI(q))
if($.k5>0)P.ar("I: "+p)
J.ks(q,0,0,0,1)
J.c_(q,2929)
J.c_(q,2884)
o=B.lo(165,0,0,s)
q=new T.ab(new Float32Array(H.B(16)))
q.Z()
p=new T.ab(new Float32Array(H.B(16)))
p.Z()
n=new G.f_(o,50,1,0.1,1000,q,p,new T.ab(new Float32Array(H.B(16))),P.R(),"perspective",!1,!0)
n.d2()
m=G.jB("textured",r,$.$get$kk(),$.$get$kj())
p=$.$get$ke()
q=new G.b9("PerlinNoiseColor F",null,[],[],[],[],0,P.R())
q.ah(["vNormal"])
q.ag(["uTime","uTransformationMatrix"])
H.d(q.b==null)
q.b=q.ay(!1,["","vec3 mod289(vec3 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x)\n{\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec3 fade(vec3 t) {\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\n\n// Classic Perlin noise, periodic variant\nfloat pnoise(vec3 P, vec3 rep)\n{\n  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \n  return 2.2 * n_xyz;\n}\n","#define VARIANT 1\n\nvoid main() {\n#if VARIANT == 1\n  float mytime = uTime/2.0;\n#ifdef BLACK\n  mytime = uTime/10.0;\n#endif\n  float period = 10.0;\n  float factor = 1.0; // sin( uTime)/4.0+2.0;\n  vec3 translation = uTransformationMatrix[3].xyz;\n  float r = pnoise( .75 * ( vNormal *factor + mytime ), vec3( period ) );\n  float g = pnoise( 0.8 * ( vNormal *factor + mytime ), vec3( period ) );\n  float b = pnoise( 0.9 * ( vNormal *factor + mytime ), vec3( period ) );\n  float n = pnoise( 1.5 * ( vNormal *factor + mytime ), vec3( period ) );\n#else\n  float mytime = 0.0 ; //uTime/50.0;\n  float period = 5.0;\n  float factor = 1.0; // sin( uTime)/4.0+2.0;\n  vec3 translation = uTransformationMatrix[3].xyz;\n  float r = pnoise( .75 * ( translation*0.175 + vNormal *factor + mytime ), vec3( period ) );\n  float g = pnoise( 0.8 * ( translation*0.175 + vNormal *factor + mytime ), vec3( period ) );\n  float b = pnoise( 0.9 * ( translation*0.175 + vNormal *factor + mytime ), vec3( period ) );\n  float n = pnoise( 1.5 * ( translation*0.175 + vNormal *factor + mytime ), vec3( period ) );\n#endif\n\n  n = pow( .001, n );\n//float n = 10.0 * pnoise( 5.0 * ( vNormal + uTime ), vec3( 10.0 ) ) * pnoise( .5 * ( vNormal + uTime ), vec3( 10.0 ) );\n//n += .5 * pnoise( 4.0 * vNormal, vec3( 10.0 ) );\n#ifdef BLACK\n  vec3 color = vec3( 1.0-(r + n), 1.0-(g + n), 1.0-(b + n) );\n#else\n  vec3 color = vec3( (r + n), (g + n), (b + n) );\n#endif\n  oFragColor = vec4( color, 1.0 );\n}\n"],null)
l=G.jB("perlin",r,p,q)
k=B.ly(!0,1,2,3,20,128,16,4,!0)
q=m.d
p=m.e.x
j=P.R()
i=J.kw(q.a)
h=new G.eF(q,i,4,j,p,null,0,-1,null,null,P.R(),"meshdata:torusknot",!1,!0)
g=G.jn(k.d,null)
j.i(0,"aPosition",J.iz(q.a))
h.ch=g
h.bg("aPosition",g,3)
f=$.$get$P().h(0,"aPosition")
if(f==null)H.C("Unknown canonical aPosition")
H.d(p.C(0,"aPosition"))
e=p.h(0,"aPosition")
J.dj(q.a,i)
q.c0(0,e,0)
p=j.h(0,"aPosition")
j=f.bi()
J.di(q.a,34962,p)
J.jc(q.a,e,j,5126,!1,0,0)
p=k.cP()
h.y=J.iz(q.a)
H.d(h.ch!=null)
j=h.ch.length
if(j<768){h.saE(new Uint8Array(H.hX(p)))
h.Q=5121}else if(j<196608){h.saE(new Uint16Array(H.hX(p)))
h.Q=5123}else{h.saE(new Uint32Array(H.hX(p)))
h.Q=5125}J.dj(q.a,i)
p=h.y
j=h.cx
i=J.q(j)
H.d(!!i.$isjP||!!i.$isjQ||!!i.$isjR)
J.di(q.a,34963,p)
J.j3(q.a,34963,j,35048)
G.lJ(k,h)
d=G.jv("texture")
q=new T.ab(new Float32Array(H.B(16)))
q.Z()
q.bb(-50,0,0)
d.M("uModelMatrix",q)
d.M("uColor",new T.t(new Float32Array(H.B(3))))
c=G.jv("perlin")
q=new T.ab(new Float32Array(H.B(16)))
q.Z()
q.bb(50,0,0)
c.M("uModelMatrix",q)
t.a=0
P.lc([D.lm($.ki)],null,!1).ap(new G.il(r,d,new G.ik(t,o,n,m,l,h,d,c)))},
ik:function ik(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
il:function il(a,b,c){this.a=a
this.b=b
this.c=c}},D={
lm:function(a){var t,s,r
t=new P.H(0,$.u,null,[null])
s=document.createElement("img")
r=new W.hc(s,"load",!1,[W.j])
r.gaW(r).ap(new D.ex(new P.h1(t,[null]),s))
s.src=a
return t},
ex:function ex(a,b){this.a=a
this.b=b}},A={
i7:function(a){var t,s
t=C.y.dR(a,0,new A.i8())
s=536870911&t+(C.b.cq(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
i8:function i8(){}},T={
jS:function(){return new T.t(new Float32Array(H.B(3)))},
ab:function ab(a){this.a=a},
a6:function a6(a){this.a=a},
t:function t(a){this.a=a},
ay:function ay(a){this.a=a}}
var v=[C,H,J,P,W,B,G,D,A,T]
setFunctionNamesIfNecessary(v)
var $={}
H.iI.prototype={}
J.a.prototype={
v:function(a,b){return a===b},
gu:function(a){return H.aN(a)},
k:function(a){return H.f7(a)},
gw:function(a){return new H.aw(H.i6(a),null)}}
J.eo.prototype={
k:function(a){return String(a)},
gu:function(a){return a?519018:218159},
gw:function(a){return C.N},
$isaX:1}
J.cR.prototype={
v:function(a,b){return null==b},
k:function(a){return"null"},
gu:function(a){return 0},
gw:function(a){return C.H}}
J.bx.prototype={
gu:function(a){return 0},
gw:function(a){return C.G},
k:function(a){return String(a)},
$isjs:1}
J.f1.prototype={}
J.aP.prototype={}
J.aJ.prototype={
k:function(a){var t=a[$.$get$jl()]
return t==null?this.cJ(a):J.bk(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isiG:1}
J.aH.prototype={
aT:function(a,b){if(!!a.immutable$list)throw H.e(new P.r(b))},
aS:function(a,b){if(!!a.fixed$length)throw H.e(new P.r(b))},
l:function(a,b){this.aS(a,"add")
a.push(b)},
dv:function(a,b){var t,s,r,q,p
t=a.length
this.aS(a,"addAll")
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.L)(b),++r,t=p){q=b[r]
p=t+1
H.d(t===a.length||H.C(new P.a8(a)))
a.push(q)}},
c4:function(a,b){return new H.cU(a,b,[H.aY(a,0),null])},
aa:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.i(a[s])
return t.join(b)},
p:function(a,b){return a[b]},
gaW:function(a){if(a.length>0)return a[0]
throw H.e(H.en())},
gaZ:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.e(H.en())},
ba:function(a,b,c,d,e){var t,s
this.aT(a,"setRange")
P.jA(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.C(P.bG(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.e(H.lk())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=d[e+s]
else for(s=0;s<t;++s)a[b+s]=d[e+s]},
cE:function(a,b){this.aT(a,"sort")
H.d4(a,0,a.length-1,P.m4())},
av:function(a){return this.cE(a,null)},
V:function(a,b){var t
for(t=0;t<a.length;++t)if(J.D(a[t],b))return!0
return!1},
k:function(a){return P.em(a,"[","]")},
gA:function(a){return new J.dr(a,a.length,0,null,[H.aY(a,0)])},
gu:function(a){return H.aN(a)},
gj:function(a){return a.length},
sj:function(a,b){this.aS(a,"set length")
if(b<0)throw H.e(P.bG(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.N(a,b))
if(b>=a.length||b<0)throw H.e(H.N(a,b))
return a[b]},
i:function(a,b,c){this.aT(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.N(a,b))
if(b>=a.length||b<0)throw H.e(H.N(a,b))
a[b]=c},
$ism:1,
$asm:function(){},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
J.iH.prototype={}
J.dr.prototype={
gt:function(){return this.d},
q:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.e(H.L(t))
r=this.c
if(r>=s){this.sbl(null)
return!1}this.sbl(t[r]);++this.c
return!0},
sbl:function(a){this.d=a}}
J.b5.prototype={
K:function(a,b){var t
if(typeof b!=="number")throw H.e(H.U(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaY(b)
if(this.gaY(a)===t)return 0
if(this.gaY(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaY:function(a){return a===0?1/a<0:a<0},
W:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(new P.r(""+a+".round()"))},
dF:function(a,b,c){if(this.K(b,c)>0)throw H.e(H.U(b))
if(this.K(a,b)<0)return b
if(this.K(a,c)>0)return c
return a},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu:function(a){return a&0x1FFFFFFF},
X:function(a,b){if(typeof b!=="number")throw H.e(H.U(b))
return a+b},
a_:function(a,b){if(typeof b!=="number")throw H.e(H.U(b))
return a-b},
D:function(a,b){if(typeof b!=="number")throw H.e(H.U(b))
return a*b},
ax:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bF(a,b)},
G:function(a,b){return(a|0)===a?a/b|0:this.bF(a,b)},
bF:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.e(new P.r("Result of truncating division is "+H.i(t)+": "+H.i(a)+" ~/ "+b))},
aJ:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
cq:function(a,b){if(typeof b!=="number")throw H.e(H.U(b))
return(a&b)>>>0},
cK:function(a,b){if(typeof b!=="number")throw H.e(H.U(b))
return(a^b)>>>0},
at:function(a,b){if(typeof b!=="number")throw H.e(H.U(b))
return a<b},
as:function(a,b){if(typeof b!=="number")throw H.e(H.U(b))
return a>b},
cr:function(a,b){if(typeof b!=="number")throw H.e(H.U(b))
return a>=b},
gw:function(a){return C.Q},
$isQ:1}
J.cQ.prototype={
gw:function(a){return C.P},
$isK:1,
$isn:1,
$isQ:1}
J.ep.prototype={
gw:function(a){return C.O},
$isK:1,
$isQ:1}
J.aI.prototype={
aA:function(a,b){if(b>=a.length)throw H.e(H.N(a,b))
return a.charCodeAt(b)},
X:function(a,b){if(typeof b!=="string")throw H.e(P.jd(b,null,null))
return a+b},
cG:function(a,b,c){var t
if(c>a.length)throw H.e(P.bG(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
cF:function(a,b){return this.cG(a,b,0)},
be:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.f8(b,null,null))
if(b>c)throw H.e(P.f8(b,null,null))
if(c>a.length)throw H.e(P.f8(c,null,null))
return a.substring(b,c)},
cH:function(a,b){return this.be(a,b,null)},
K:function(a,b){var t
if(typeof b!=="string")throw H.e(H.U(b))
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
gw:function(a){return C.I},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.e(H.N(a,b))
return a[b]},
$ism:1,
$asm:function(){},
$isv:1}
H.c.prototype={$asc:null}
H.b6.prototype={
gA:function(a){return new H.cS(this,this.gj(this),0,null,[H.aq(this,"b6",0)])},
ec:function(a,b){var t,s
t=H.J([],[H.aq(this,"b6",0)])
C.a.sj(t,this.gj(this))
for(s=0;s<this.gj(this);++s)t[s]=this.p(0,s)
return t},
eb:function(a){return this.ec(a,!0)}}
H.cS.prototype={
gt:function(){return this.d},
q:function(){var t,s,r,q
t=this.a
s=J.ae(t)
r=s.gj(t)
if(this.b!==r)throw H.e(new P.a8(t))
q=this.c
if(q>=r){this.sa3(null)
return!1}this.sa3(s.p(t,q));++this.c
return!0},
sa3:function(a){this.d=a}}
H.cT.prototype={
gA:function(a){return new H.ez(null,J.dk(this.a),this.b,this.$ti)},
gj:function(a){return J.dl(this.a)},
$asaj:function(a,b){return[b]}}
H.dK.prototype={$isc:1,
$asc:function(a,b){return[b]}}
H.ez.prototype={
q:function(){var t=this.b
if(t.q()){this.sa3(this.c.$1(t.gt()))
return!0}this.sa3(null)
return!1},
gt:function(){return this.a},
sa3:function(a){this.a=a},
$ascP:function(a,b){return[b]}}
H.cU.prototype={
gj:function(a){return J.dl(this.a)},
p:function(a,b){return this.b.$1(J.kC(this.a,b))},
$asc:function(a,b){return[b]},
$asb6:function(a,b){return[b]},
$asaj:function(a,b){return[b]}}
H.c8.prototype={}
H.iw.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.ix.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.hE.prototype={
se_:function(a){this.z=a},
se1:function(a){this.ch=a}}
H.aT.prototype={
bI:function(a,b){if(!this.f.v(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.aQ()},
e7:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.ac(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.bz();++r.d}this.y=!1}this.aQ()},
dw:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.q(a),s=0;r=this.ch,s<r.length;s+=2)if(t.v(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
e6:function(a){var t,s,r
if(this.ch==null)return
for(t=J.q(a),s=0;r=this.ch,s<r.length;s+=2)if(t.v(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.C(new P.r("removeRange"))
P.jA(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
cD:function(a,b){if(!this.r.v(0,a))return
this.db=b},
dU:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.E(0,c)
return}H.d(b===1)
t=this.cx
if(t==null){t=P.iL(null,null)
this.cx=t}t.N(0,new H.hz(a,c))},
dT:function(a,b){var t
if(!this.r.v(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.an()
return}H.d(b===1)
t=this.cx
if(t==null){t=P.iL(null,null)
this.cx=t}t.N(0,this.ge0())},
dV:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.ar(a)
if(b!=null)P.ar(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.bk(a)
s[1]=b==null?null:b.k(0)
for(r=new P.bP(t,t.r,null,null,[null]),r.c=t.e;r.q();)r.d.E(0,s)},
a7:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.a7(o)
p=H.af(o)
this.dV(q,p)
if(this.db){this.an()
if(this===u.globalState.e)throw o}}finally{this.cy=H.m_(r)
u.globalState.d=H.ka(t,"$isaT")
if(t!=null)$=t.gdZ()
if(this.cx!=null)for(;n=this.cx,!n.gam(n);)this.cx.c6().$0()}return s},
c3:function(a){return this.b.h(0,a)},
bo:function(a,b){var t=this.b
if(t.C(0,a))throw H.e(P.c7("Registry: ports must be registered only once."))
t.i(0,a,b)},
aQ:function(){var t=this.b
if(t.gj(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.an()},
an:function(){var t,s,r
t=this.cx
if(t!=null)t.O(0)
for(t=this.b,s=t.gco(t),s=s.gA(s);s.q();)s.gt().da()
t.O(0)
this.c.O(0)
u.globalState.z.ac(0,this.a)
this.dx.O(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].E(0,t[r+1])
this.ch=null}},
gdZ:function(){return this.d},
gdG:function(){return this.e}}
H.hz.prototype={
$0:function(){this.a.E(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.hd.prototype={
dJ:function(){var t=this.a
if(t.b===t.c)return
return t.c6()},
c8:function(){var t,s,r
t=this.dJ()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.C(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gam(s)}else s=!1
else s=!1
else s=!1
if(s)H.C(P.c7("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gam(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aL(["command","close"])
r=new H.ad(!0,new P.dc(0,null,null,null,null,null,0,[null,P.n])).F(r)
s.toString
self.postMessage(r)}return!1}t.e4()
return!0},
bD:function(){if(self.window!=null)new H.he(this).$0()
else for(;this.c8(););},
ad:function(){var t,s,r,q,p
if(!u.globalState.x)this.bD()
else try{this.bD()}catch(r){t=H.a7(r)
s=H.af(r)
q=u.globalState.Q
p=P.aL(["command","error","msg",H.i(t)+"\n"+H.i(s)])
p=new H.ad(!0,P.bQ(null,P.n)).F(p)
q.toString
self.postMessage(p)}}}
H.he.prototype={
$0:function(){if(!this.a.c8())return
P.lC(C.h,this)},
$S:function(){return{func:1,v:true}}}
H.aU.prototype={
e4:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.a7(this.b)}}
H.hD.prototype={}
H.ek.prototype={
$0:function(){H.lg(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.el.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(!this.d)this.a.$1(this.c)
else{s=this.a
if(H.bj(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.bj(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.aQ()},
$S:function(){return{func:1,v:true}}}
H.h6.prototype={}
H.be.prototype={
E:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.lN(b)
if(t.gdG()===s){s=J.ae(r)
switch(s.h(r,0)){case"pause":t.bI(s.h(r,1),s.h(r,2))
break
case"resume":t.e7(s.h(r,1))
break
case"add-ondone":t.dw(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.e6(s.h(r,1))
break
case"set-errors-fatal":t.cD(s.h(r,1),s.h(r,2))
break
case"ping":t.dU(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.dT(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.ac(0,s)
break}return}u.globalState.f.a.N(0,new H.aU(t,new H.hF(this,r),"receive"))},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.be){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gu:function(a){return this.b.a}}
H.hF.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.d5(0,this.b)},
$S:function(){return{func:1}}}
H.bR.prototype={
E:function(a,b){var t,s,r
t=P.aL(["command","message","port",this,"msg",b])
s=new H.ad(!0,P.bQ(null,P.n)).F(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bR){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gu:function(a){return C.b.cK((this.b<<16^this.a<<8)>>>0,this.c)}}
H.b8.prototype={
da:function(){this.c=!0
this.b=null},
d5:function(a,b){if(this.c)return
this.b.$1(b)},
$islw:1}
H.fG.prototype={
d0:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.N(0,new H.aU(s,new H.fH(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.bi(new H.fI(this,b),0),a)}else{H.d(a>0)
throw H.e(new P.r("Timer greater than 0."))}}}
H.fH.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.fI.prototype={
$0:function(){this.a.c=null
H.ij()
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.ai.prototype={
gu:function(a){var t=this.a
t=C.b.aJ(t,0)^C.b.G(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
v:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.ai){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.ad.prototype={
F:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gj(t))
t=J.q(a)
if(!!t.$isbA)return["buffer",a]
if(!!t.$isb7)return["typed",a]
if(!!t.$ism)return this.cz(a)
if(!!t.$isld){r=this.gcu()
q=t.gL(a)
q=H.iM(q,r,H.aq(q,"aj",0),null)
q=P.ju(q,!0,H.aq(q,"aj",0))
t=t.gco(a)
t=H.iM(t,r,H.aq(t,"aj",0),null)
return["map",q,P.ju(t,!0,H.aq(t,"aj",0))]}if(!!t.$isjs)return this.cA(a)
if(!!t.$isa)this.cm(a)
if(!!t.$islw)this.ae(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isbe)return this.cB(a)
if(!!t.$isbR)return this.cC(a)
if(!!t.$isb0){p=a.$static_name
if(p==null)this.ae(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isai)return["capability",a.a]
if(!(a instanceof P.p))this.cm(a)
return["dart",u.classIdExtractor(a),this.cw(u.classFieldsExtractor(a))]},
ae:function(a,b){throw H.e(new P.r((b==null?"Can't transmit:":b)+" "+H.i(a)))},
cm:function(a){return this.ae(a,null)},
cz:function(a){var t
H.d(typeof a!=="string")
t=this.cv(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.ae(a,"Can't serialize indexable: ")},
cv:function(a){var t,s
t=[]
C.a.sj(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.F(a[s])
return t},
cw:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.F(a[t]))
return a},
cA:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.ae(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sj(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.F(a[t[r]])
return["js-object",t,s]},
cC:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cB:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.aS.prototype={
P:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.e(P.dq("Bad serialized message: "+H.i(a)))
switch(C.a.gaW(a)){case"ref":H.d(J.D(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.d(J.D(a[0],"buffer"))
t=a[1]
C.a.l(this.b,t)
return t
case"typed":H.d(J.D(a[0],"typed"))
t=a[1]
C.a.l(this.b,t)
return t
case"fixed":H.d(J.D(a[0],"fixed"))
t=a[1]
C.a.l(this.b,t)
s=H.J(this.a6(t),[null])
s.fixed$length=Array
return s
case"extendable":H.d(J.D(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.J(this.a6(t),[null])
case"mutable":H.d(J.D(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.a6(t)
case"const":H.d(J.D(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
s=H.J(this.a6(t),[null])
s.fixed$length=Array
return s
case"map":return this.dM(a)
case"sendport":return this.dN(a)
case"raw sendport":H.d(J.D(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.dL(a)
case"function":H.d(J.D(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.d(J.D(a[0],"capability"))
return new H.ai(a[1])
case"dart":H.d(J.D(a[0],"dart"))
r=a[1]
q=a[2]
p=u.instanceFromClassId(r)
C.a.l(this.b,p)
this.a6(q)
return u.initializeEmptyInstance(r,p,q)
default:throw H.e("couldn't deserialize: "+H.i(a))}},
a6:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.P(a[t]))
return a},
dM:function(a){var t,s,r,q,p
H.d(J.D(a[0],"map"))
t=a[1]
s=a[2]
r=P.R()
C.a.l(this.b,r)
t=J.kN(t,this.gdK()).eb(0)
for(q=J.ae(s),p=0;p<t.length;++p)r.i(0,t[p],this.P(q.h(s,p)))
return r},
dN:function(a){var t,s,r,q,p,o,n
H.d(J.D(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.c3(r)
if(o==null)return
n=new H.be(o,s)}else n=new H.bR(t,r,s)
C.a.l(this.b,n)
return n},
dL:function(a){var t,s,r,q,p,o
H.d(J.D(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.ae(t),p=J.ae(s),o=0;o<q.gj(t);++o)r[q.h(t,o)]=this.P(p.h(s,o))
return r}}
H.fb.prototype={}
H.fN.prototype={
I:function(a){var t,s,r
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
H.d0.prototype={
k:function(a){var t=this.b
if(t==null)return"NullError: "+H.i(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.er.prototype={
k:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.i(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.i(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.i(this.a)+")"}}
H.fR.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.iy.prototype={
$1:function(a){if(!!J.q(a).$isb1)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.de.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.id.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.ie.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.ig.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.ih.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.ii.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.b0.prototype={
k:function(a){return"Closure '"+H.d1(this).trim()+"'"},
$isiG:1,
geg:function(){return this},
$D:null}
H.fA.prototype={}
H.fq.prototype={
k:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bl.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bl))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gu:function(a){var t,s
t=this.c
if(t==null)s=H.aN(this.a)
else s=typeof t!=="object"?J.ah(t):H.aN(t)
return(s^H.aN(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.i(this.d)+"' of "+H.f7(t)}}
H.fP.prototype={
k:function(a){return this.a}}
H.dx.prototype={
k:function(a){return this.a}}
H.fg.prototype={
k:function(a){return"RuntimeError: "+H.i(this.a)}}
H.h0.prototype={
k:function(a){return C.e.X("Assertion failed: ",P.iF(this.a))}}
H.aw.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gu:function(a){return J.ah(this.a)},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.aw){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.aa.prototype={
gj:function(a){return this.a},
gam:function(a){return this.a===0},
gL:function(a){return new H.eu(this,[H.aY(this,0)])},
gco:function(a){return H.iM(this.gL(this),new H.eq(this),H.aY(this,0),H.aY(this,1))},
C:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bw(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bw(s,b)}else return this.dW(b)},
dW:function(a){var t=this.d
if(t==null)return!1
return this.a9(this.ak(t,this.a8(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.a4(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.a4(r,b)
return s==null?null:s.b}else return this.dX(b)},
dX:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.ak(t,this.a8(a))
r=this.a9(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aF()
this.b=t}this.bn(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aF()
this.c=s}this.bn(s,b,c)}else{r=this.d
if(r==null){r=this.aF()
this.d=r}q=this.a8(b)
p=this.ak(r,q)
if(p==null)this.aI(r,q,[this.aG(b,c)])
else{o=this.a9(p,b)
if(o>=0)p[o].b=c
else p.push(this.aG(b,c))}}},
ac:function(a,b){if(typeof b==="string")return this.bC(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bC(this.c,b)
else return this.dY(b)},
dY:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.ak(t,this.a8(a))
r=this.a9(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bG(q)
return q.b},
O:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
aX:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.e(new P.a8(this))
t=t.c}},
bn:function(a,b,c){var t=this.a4(a,b)
if(t==null)this.aI(a,b,this.aG(b,c))
else t.b=c},
bC:function(a,b){var t
if(a==null)return
t=this.a4(a,b)
if(t==null)return
this.bG(t)
this.bx(a,b)
return t.b},
aG:function(a,b){var t,s
t=new H.et(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bG:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.r=this.r+1&67108863},
a8:function(a){return J.ah(a)&0x3ffffff},
a9:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.D(a[s].a,b))return s
return-1},
k:function(a){return P.ln(this)},
a4:function(a,b){return a[b]},
ak:function(a,b){return a[b]},
aI:function(a,b,c){H.d(c!=null)
a[b]=c},
bx:function(a,b){delete a[b]},
bw:function(a,b){return this.a4(a,b)!=null},
aF:function(){var t=Object.create(null)
this.aI(t,"<non-identifier-key>",t)
this.bx(t,"<non-identifier-key>")
return t},
$isld:1}
H.eq.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.et.prototype={}
H.eu.prototype={
gj:function(a){return this.a.a},
gA:function(a){var t,s
t=this.a
s=new H.ev(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.ev.prototype={
gt:function(){return this.d},
q:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a8(t))
else{t=this.c
if(t==null){this.sbm(null)
return!1}else{this.sbm(t.a)
this.c=this.c.c
return!0}}},
sbm:function(a){this.d=a}}
H.i9.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.ia.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.v]}}}
H.ib.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.v]}}}
H.bA.prototype={
gw:function(a){return C.z},
$isbA:1}
H.b7.prototype={$isb7:1}
H.eJ.prototype={
gw:function(a){return C.A}}
H.cW.prototype={
gj:function(a){return a.length},
$ism:1,
$asm:function(){},
$iso:1,
$aso:function(){}}
H.cX.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.C(H.N(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.C(H.N(a,b))
a[b]=c}}
H.cY.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.C(H.N(a,b))
a[b]=c},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]}}
H.cV.prototype={
gw:function(a){return C.B},
$isc:1,
$asc:function(){return[P.K]},
$isb:1,
$asb:function(){return[P.K]},
$ise8:1}
H.eK.prototype={
gw:function(a){return C.C},
$isc:1,
$asc:function(){return[P.K]},
$isb:1,
$asb:function(){return[P.K]}}
H.eL.prototype={
gw:function(a){return C.D},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.C(H.N(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]}}
H.eM.prototype={
gw:function(a){return C.E},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.C(H.N(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]},
$isjp:1}
H.eN.prototype={
gw:function(a){return C.F},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.C(H.N(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]}}
H.eO.prototype={
gw:function(a){return C.J},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.C(H.N(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]},
$isjP:1}
H.eP.prototype={
gw:function(a){return C.K},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.C(H.N(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]},
$isjQ:1}
H.cZ.prototype={
gw:function(a){return C.L},
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.C(H.N(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]}}
H.eQ.prototype={
gw:function(a){return C.M},
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.C(H.N(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]},
$isjR:1}
H.bB.prototype={
$asm:function(){},
$isc:1,
$asc:function(){return[P.n]},
$aso:function(){},
$isb:1,
$asb:function(){return[P.n]}}
H.bC.prototype={
$asm:function(){},
$isc:1,
$asc:function(){return[P.K]},
$aso:function(){},
$isb:1,
$asb:function(){return[P.K]}}
H.bD.prototype={
$asm:function(){},
$asc:function(){return[P.K]},
$aso:function(){},
$asb:function(){return[P.K]}}
H.bE.prototype={
$asm:function(){},
$asc:function(){return[P.n]},
$aso:function(){},
$asb:function(){return[P.n]}}
P.h3.prototype={
$1:function(a){var t,s
H.ij()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.h2.prototype={
$1:function(a){var t,s
t=this.a
H.d(t.a==null);++u.globalState.f.b
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.h4.prototype={
$0:function(){H.ij()
this.a.$0()},
$S:function(){return{func:1}}}
P.h5.prototype={
$0:function(){H.ij()
this.a.$0()},
$S:function(){return{func:1}}}
P.ec.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.b)this.d.J(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.b)this.d.J(t.c,t.d)},
$S:function(){return{func:1,args:[,,]}}}
P.eb.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){r[this.e]=a
if(s===0)this.d.bv(r)}else if(t.b===0&&!this.b)this.d.J(t.c,t.d)},
$S:function(){return{func:1,args:[,]}}}
P.h8.prototype={}
P.h1.prototype={
aU:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.ba("Future already completed"))
t.bp(b)}}
P.hR.prototype={
aU:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.ba("Future already completed"))
t.a2(b)}}
P.bN.prototype={
e2:function(a){if(this.c!==6)return!0
H.d(!0)
return this.b.b.b0(this.d,a.a)},
dS:function(a){var t,s
t=(this.c&2)!==0
if(t){H.d(t)
t=this.e!=null}else t=!1
H.d(t)
s=this.e
t=this.b.b
if(H.bj(s,{func:1,args:[P.p,P.bH]}))return t.e8(s,a.a,a.b)
else return t.b0(s,a.a)}}
P.H.prototype={
b2:function(a,b){var t,s,r
t=$.u
if(t!==C.d){t.toString
if(b!=null)b=P.lS(b,t)}s=new P.H(0,t,null,[null])
r=b==null?1:3
this.az(new P.bN(null,s,r,a,b,[H.aY(this,0),null]))
return s},
ap:function(a){return this.b2(a,null)},
ef:function(a){var t,s
t=$.u
s=new P.H(0,t,null,this.$ti)
if(t!==C.d)t.toString
t=H.aY(this,0)
this.az(new P.bN(null,s,8,a,null,[t,t]))
return s},
bq:function(a){H.d(this.a<4)
H.d(a.a>=4)
this.a=a.a
this.c=a.c},
az:function(a){var t
H.d(a.a==null)
t=this.a
if(t<=1){a.a=H.ka(this.c,"$isbN")
this.c=a}else{if(t===2){H.d(!0)
t=this.c
if(t.a<4){t.az(a)
return}this.bq(t)}H.d(this.a>=4)
t=this.b
t.toString
P.bg(null,null,t,new P.hj(this,a))}},
bB:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.d(!0)
s=this.c
if(s.a<4){s.bB(a)
return}this.bq(s)}H.d(this.a>=4)
t.a=this.a5(a)
s=this.b
s.toString
P.bg(null,null,s,new P.hr(t,this))}},
aH:function(){H.d(this.a<4)
var t=this.c
this.c=null
return this.a5(t)},
a5:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
a2:function(a){var t,s
H.d(this.a<4)
t=this.$ti
if(H.bV(a,"$isaG",t,"$asaG"))if(H.bV(a,"$isH",t,null))P.hm(a,this)
else P.jU(a,this)
else{s=this.aH()
H.d(this.a<4)
this.a=4
this.c=a
P.bd(this,s)}},
bv:function(a){var t
H.d(this.a<4)
H.d(!J.q(a).$isaG)
t=this.aH()
H.d(this.a<4)
this.a=4
this.c=a
P.bd(this,t)},
J:function(a,b){var t
H.d(this.a<4)
t=this.aH()
H.d(this.a<4)
this.a=8
this.c=new P.b_(a,b)
P.bd(this,t)},
dc:function(a){return this.J(a,null)},
bp:function(a){var t
H.d(this.a<4)
if(H.bV(a,"$isaG",this.$ti,"$asaG")){this.d9(a)
return}H.d(this.a===0)
this.a=1
t=this.b
t.toString
P.bg(null,null,t,new P.hl(this,a))},
d9:function(a){var t
if(H.bV(a,"$isH",this.$ti,null)){if(a.a===8){H.d(this.a===0)
this.a=1
t=this.b
t.toString
P.bg(null,null,t,new P.hq(this,a))}else P.hm(a,this)
return}P.jU(a,this)},
d7:function(a,b){var t
H.d(this.a<4)
H.d(this.a===0)
this.a=1
t=this.b
t.toString
P.bg(null,null,t,new P.hk(this,a,b))},
$isaG:1,
gaK:function(){return this.a},
gdr:function(){return this.c}}
P.hj.prototype={
$0:function(){P.bd(this.a,this.b)},
$S:function(){return{func:1}}}
P.hr.prototype={
$0:function(){P.bd(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.hn.prototype={
$1:function(a){var t=this.a
H.d(t.a===1)
H.d(t.a===1)
t.a=0
t.a2(a)},
$S:function(){return{func:1,args:[,]}}}
P.ho.prototype={
$2:function(a,b){var t=this.a
H.d(t.a===1)
t.J(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.hp.prototype={
$0:function(){this.a.J(this.b,this.c)},
$S:function(){return{func:1}}}
P.hl.prototype={
$0:function(){this.a.bv(this.b)},
$S:function(){return{func:1}}}
P.hq.prototype={
$0:function(){P.hm(this.b,this.a)},
$S:function(){return{func:1}}}
P.hk.prototype={
$0:function(){this.a.J(this.b,this.c)},
$S:function(){return{func:1}}}
P.hu.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.d
p=q.c
H.d((p&1)===0)
o=(p&2)===0
H.d(o)
t=null
try{H.d(o)
H.d(p===8)
t=q.b.b.c7(q.d)}catch(n){s=H.a7(n)
r=H.af(n)
if(this.c){q=this.a.a
H.d(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.d(q.a===8)
p.b=q.c}else p.b=new P.b_(s,r)
p.a=!0
return}if(!!J.q(t).$isaG){if(t instanceof P.H&&t.gaK()>=4){if(t.gaK()===8){q=t
H.d(q.gaK()===8)
p=this.b
p.b=q.gdr()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.ap(new P.hv(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.hv.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.ht.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.d((r.c&1)!==0)
this.a.b=r.b.b.b0(r.d,this.c)}catch(q){t=H.a7(q)
s=H.af(q)
r=this.a
r.b=new P.b_(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.hs.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.d(q.a===8)
t=q.c
q=this.c
if(q.e2(t)){H.d((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.dS(t)
p.a=!1}}catch(o){s=H.a7(o)
r=H.af(o)
q=this.a
p=q.a
H.d(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.d(q.a===8)
m.b=q.c}else m.b=new P.b_(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.da.prototype={}
P.bI.prototype={
gj:function(a){var t,s
t={}
s=new P.H(0,$.u,null,[P.n])
t.a=0
this.c2(new P.fv(t),!0,new P.fw(t,s),s.gbu())
return s},
gaW:function(a){var t,s
t={}
s=new P.H(0,$.u,null,[H.aq(this,"bI",0)])
t.a=null
t.a=this.c2(new P.ft(t,this,s),!0,new P.fu(s),s.gbu())
return s}}
P.fv.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.fw.prototype={
$0:function(){this.b.a2(this.a.a)},
$S:function(){return{func:1}}}
P.ft.prototype={
$1:function(a){P.lM(this.a.a,this.c,a)},
$S:function(){return H.m2(function(a){return{func:1,args:[a]}},this.b,"bI")}}
P.fu.prototype={
$0:function(){var t,s,r,q
try{r=H.en()
throw H.e(r)}catch(q){t=H.a7(q)
s=H.af(q)
P.lO(this.a,t,s)}},
$S:function(){return{func:1}}}
P.fs.prototype={}
P.hW.prototype={
$0:function(){return this.a.a2(this.b)},
$S:function(){return{func:1}}}
P.b_.prototype={
k:function(a){return H.i(this.a)},
$isb1:1}
P.hV.prototype={}
P.hZ.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.bF()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.e(t)
r=H.e(t)
r.stack=s.k(0)
throw r},
$S:function(){return{func:1}}}
P.hH.prototype={
e9:function(a){var t,s,r
try{if(C.d===$.u){a.$0()
return}P.jW(null,null,this,a)}catch(r){t=H.a7(r)
s=H.af(r)
P.hY(null,null,this,t,s)}},
ea:function(a,b){var t,s,r
try{if(C.d===$.u){a.$1(b)
return}P.jX(null,null,this,a,b)}catch(r){t=H.a7(r)
s=H.af(r)
P.hY(null,null,this,t,s)}},
dB:function(a){return new P.hJ(this,a)},
aR:function(a){return new P.hI(this,a)},
dC:function(a){return new P.hK(this,a)},
h:function(a,b){return},
c7:function(a){if($.u===C.d)return a.$0()
return P.jW(null,null,this,a)},
b0:function(a,b){if($.u===C.d)return a.$1(b)
return P.jX(null,null,this,a,b)},
e8:function(a,b,c){if($.u===C.d)return a.$2(b,c)
return P.lT(null,null,this,a,b,c)}}
P.hJ.prototype={
$0:function(){return this.a.c7(this.b)},
$S:function(){return{func:1}}}
P.hI.prototype={
$0:function(){return this.a.e9(this.b)},
$S:function(){return{func:1}}}
P.hK.prototype={
$1:function(a){return this.a.ea(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.dc.prototype={
a8:function(a){return H.mk(a)&0x3ffffff},
a9:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.hA.prototype={
gA:function(a){var t=new P.bP(this,this.r,null,null,[null])
t.c=this.e
return t},
gj:function(a){return this.a},
V:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dd(b)},
dd:function(a){var t=this.d
if(t==null)return!1
return this.aj(t[this.ai(a)],a)>=0},
c3:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.V(0,a)?a:null
else return this.dk(a)},
dk:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.ai(a)]
r=this.aj(s,a)
if(r<0)return
return J.aZ(s,r).gdf()},
l:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.br(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.br(r,b)}else return this.N(0,b)},
N:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.lK()
this.d=t}s=this.ai(b)
r=t[s]
if(r==null){q=[this.aB(b)]
H.d(q!=null)
t[s]=q}else{if(this.aj(r,b)>=0)return!1
r.push(this.aB(b))}return!0},
ac:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bs(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bs(this.c,b)
else return this.dm(0,b)},
dm:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.ai(b)]
r=this.aj(s,b)
if(r<0)return!1
this.bt(s.splice(r,1)[0])
return!0},
O:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
br:function(a,b){var t
if(a[b]!=null)return!1
t=this.aB(b)
H.d(!0)
a[b]=t
return!0},
bs:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bt(t)
delete a[b]
return!0},
aB:function(a){var t,s
t=new P.hB(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bt:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.r=this.r+1&67108863},
ai:function(a){return J.ah(a)&0x3ffffff},
aj:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.D(a[s].a,b))return s
return-1},
$isc:1,
$asc:null}
P.hB.prototype={
gdf:function(){return this.a}}
P.bP.prototype={
gt:function(){return this.d},
q:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a8(t))
else{t=this.c
if(t==null){this.sa1(null)
return!1}else{this.sa1(t.a)
this.c=this.c.b
return!0}}},
sa1:function(a){this.d=a}}
P.hy.prototype={}
P.w.prototype={
gA:function(a){return new H.cS(a,this.gj(a),0,null,[H.aq(a,"w",0)])},
p:function(a,b){return this.h(a,b)},
c4:function(a,b){return new H.cU(a,b,[H.aq(a,"w",0),null])},
dR:function(a,b,c){var t,s,r
t=this.gj(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gj(a))throw H.e(new P.a8(a))}return s},
k:function(a){return P.em(a,"[","]")},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
P.eA.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.i(a)
t.a=s+": "
t.a+=H.i(b)},
$S:function(){return{func:1,args:[,,]}}}
P.ew.prototype={
gA:function(a){return new P.hC(this,this.c,this.d,this.b,null,this.$ti)},
gam:function(a){return this.b===this.c},
gj:function(a){return(this.c-this.b&this.a.length-1)>>>0},
p:function(a,b){var t,s
t=(this.c-this.b&this.a.length-1)>>>0
if(0>b||b>=t)H.C(P.A(b,this,"index",null,t))
s=this.a
return s[(this.b+b&s.length-1)>>>0]},
O:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
k:function(a){return P.em(this,"{","}")},
c6:function(){var t,s,r
t=this.b
if(t===this.c)throw H.e(H.en());++this.d
s=this.a
r=s[t]
s[t]=null
this.b=(t+1&s.length-1)>>>0
return r},
N:function(a,b){var t,s
t=this.a
s=this.c
t[s]=b
t=(s+1&t.length-1)>>>0
this.c=t
if(this.b===t)this.bz();++this.d},
bz:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.J(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.ba(s,0,q,t,r)
C.a.ba(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbE(s)},
cT:function(a,b){var t
H.d(!0)
t=new Array(8)
t.fixed$length=Array
this.sbE(H.J(t,[b]))},
sbE:function(a){this.a=a},
$asc:null}
P.hC.prototype={
gt:function(){return this.e},
q:function(){var t,s
t=this.a
if(this.c!==t.d)H.C(new P.a8(t))
s=this.d
if(s===this.b){this.sa1(null)
return!1}this.sa1(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sa1:function(a){this.e=a}}
P.fk.prototype={
k:function(a){return P.em(this,"{","}")},
$isc:1,
$asc:null}
P.fj.prototype={}
P.aX.prototype={}
P.E.prototype={}
P.bn.prototype={
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.bn))return!1
return this.a===b.a&&this.b===b.b},
K:function(a,b){return C.b.K(this.a,b.a)},
gu:function(a){var t=this.a
return(t^C.b.aJ(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.l4(H.lv(this))
s=P.c2(H.lt(this))
r=P.c2(H.lp(this))
q=P.c2(H.lq(this))
p=P.c2(H.ls(this))
o=P.c2(H.lu(this))
n=P.l5(H.lr(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isE:1,
$asE:function(){return[P.bn]}}
P.K.prototype={$isE:1,
$asE:function(){return[P.Q]}}
P.aF.prototype={
at:function(a,b){return C.b.at(this.a,b.gde())},
as:function(a,b){return C.b.as(this.a,b.gde())},
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.aF))return!1
return this.a===b.a},
gu:function(a){return this.a&0x1FFFFFFF},
K:function(a,b){return C.b.K(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.dJ()
s=this.a
if(s<0)return"-"+new P.aF(0-s).k(0)
r=t.$1(C.b.G(s,6e7)%60)
q=t.$1(C.b.G(s,1e6)%60)
p=new P.dI().$1(s%1e6)
return""+C.b.G(s,36e8)+":"+H.i(r)+":"+H.i(q)+"."+H.i(p)},
$isE:1,
$asE:function(){return[P.aF]}}
P.dI.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.v,args:[P.n]}}}
P.dJ.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.v,args:[P.n]}}}
P.b1.prototype={}
P.c0.prototype={
k:function(a){return"Assertion failed"}}
P.bF.prototype={
k:function(a){return"Throw of null."}}
P.as.prototype={
gaD:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaC:function(){return""},
k:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+t
q=this.gaD()+s+r
if(!this.a)return q
p=this.gaC()
o=P.iF(this.b)
return q+p+": "+H.i(o)}}
P.d2.prototype={
gaD:function(){return"RangeError"},
gaC:function(){var t,s,r
H.d(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.i(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.i(t)
else if(r>t)s=": Not in range "+H.i(t)+".."+H.i(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.i(t)}return s}}
P.ei.prototype={
gaD:function(){return"RangeError"},
gaC:function(){H.d(this.a)
if(J.km(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.i(t)},
gj:function(a){return this.f}}
P.r.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.d9.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.ba.prototype={
k:function(a){return"Bad state: "+this.a}}
P.a8.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.i(P.iF(t))+"."}}
P.d5.prototype={
k:function(a){return"Stack Overflow"},
$isb1:1}
P.dB.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.hi.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.i(t)}}
P.dL.prototype={
k:function(a){return"Expando:"+H.i(this.a)},
h:function(a,b){var t,s
t=this.b
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.C(P.jd(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.jx(b,"expando$values")
return s==null?null:H.jx(s,t)}}
P.n.prototype={$isE:1,
$asE:function(){return[P.Q]}}
P.aj.prototype={
gj:function(a){var t,s
H.d(!this.$isc)
t=this.gA(this)
for(s=0;t.q();)++s
return s},
p:function(a,b){var t,s,r
if(b<0)H.C(P.bG(b,0,null,"index",null))
for(t=this.gA(this),s=0;t.q();){r=t.gt()
if(b===s)return r;++s}throw H.e(P.A(b,this,"index",null,s))},
k:function(a){return P.lj(this,"(",")")}}
P.cP.prototype={}
P.b.prototype={$isc:1,$asc:null,$asb:null}
P.au.prototype={}
P.av.prototype={
gu:function(a){return P.p.prototype.gu.call(this,this)},
k:function(a){return"null"}}
P.Q.prototype={$isE:1,
$asE:function(){return[P.Q]}}
P.p.prototype={constructor:P.p,$isp:1,
v:function(a,b){return this===b},
gu:function(a){return H.aN(this)},
k:function(a){return H.f7(this)},
gw:function(a){return new H.aw(H.i6(this),null)},
toString:function(){return this.k(this)}}
P.bH.prototype={}
P.v.prototype={$isE:1,
$asE:function(){return[P.v]}}
P.bJ.prototype={
gj:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
gU:function(){return this.a}}
W.k.prototype={}
W.dn.prototype={
k:function(a){return String(a)},
$isa:1}
W.dp.prototype={
k:function(a){return String(a)},
$isa:1}
W.X.prototype={$isp:1}
W.dt.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.X]},
$isc:1,
$asc:function(){return[W.X]},
$iso:1,
$aso:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.c1.prototype={}
W.du.prototype={$isa:1}
W.aD.prototype={
cs:function(a,b,c){var t=this.dh(a,b,P.m3(c,null))
return t},
dh:function(a,b,c){return a.getContext(b,c)},
$isaD:1}
W.dw.prototype={
ar:function(a){return P.i0(a.getContextAttributes())}}
W.aE.prototype={$isa:1,
gj:function(a){return a.length}}
W.dz.prototype={$isa:1}
W.y.prototype={$isp:1}
W.bm.prototype={
gj:function(a){return a.length}}
W.dA.prototype={}
W.dC.prototype={
h:function(a,b){return a[b]},
gj:function(a){return a.length}}
W.dD.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gH:function(a){return a.z}}
W.bo.prototype={
e5:function(a,b){return a.querySelector(b)}}
W.c3.prototype={$isa:1}
W.dE.prototype={
k:function(a){return String(a)}}
W.dF.prototype={
gaq:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gH:function(a){return a.z}}
W.c4.prototype={
gaq:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gH:function(a){return a.z}}
W.c5.prototype={
k:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.gT(a))+" x "+H.i(this.gS(a))},
v:function(a,b){var t
if(b==null)return!1
t=J.q(b)
if(!t.$isF)return!1
return a.left===t.gb_(b)&&a.top===t.gb3(b)&&this.gT(a)===t.gT(b)&&this.gS(a)===t.gS(b)},
gu:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gT(a)
q=this.gS(a)
return W.jV(W.aV(W.aV(W.aV(W.aV(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gS:function(a){return a.height},
gb_:function(a){return a.left},
gb3:function(a){return a.top},
gT:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isF:1,
$asF:function(){}}
W.dG.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[P.v]},
$isc:1,
$asc:function(){return[P.v]},
$iso:1,
$aso:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]}}
W.dH.prototype={
gj:function(a){return a.length}}
W.c6.prototype={
k:function(a){return a.localName},
$isa:1}
W.j.prototype={}
W.f.prototype={
d6:function(a,b,c,d){return a.addEventListener(b,H.bi(c,1),!1)},
dn:function(a,b,c,d){return a.removeEventListener(b,H.bi(c,1),!1)},
$isp:1,
$isf:1}
W.Y.prototype={$isp:1}
W.e4.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.Y]},
$isc:1,
$asc:function(){return[W.Y]},
$iso:1,
$aso:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.e5.prototype={
gj:function(a){return a.length}}
W.ea.prototype={
gj:function(a){return a.length}}
W.Z.prototype={$isp:1}
W.ee.prototype={
gj:function(a){return a.length}}
W.bv.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.x]},
$isc:1,
$asc:function(){return[W.x]},
$iso:1,
$aso:function(){return[W.x]},
$isb:1,
$asb:function(){return[W.x]}}
W.c9.prototype={}
W.ef.prototype={
E:function(a,b){return a.send(b)}}
W.bw.prototype={}
W.b2.prototype={$isb2:1}
W.b3.prototype={$isb3:1}
W.b4.prototype={$isb4:1}
W.ej.prototype={$isa:1}
W.aK.prototype={$isp:1,$isaK:1}
W.ey.prototype={
k:function(a){return String(a)}}
W.by.prototype={}
W.eE.prototype={
gj:function(a){return a.length}}
W.eG.prototype={
eh:function(a,b,c){return a.send(b,c)},
E:function(a,b){return a.send(b)}}
W.bz.prototype={}
W.a_.prototype={$isp:1}
W.eH.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.a_]},
$isc:1,
$asc:function(){return[W.a_]},
$iso:1,
$aso:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.M.prototype={$isp:1,$isM:1}
W.eR.prototype={$isa:1}
W.x.prototype={
k:function(a){var t=a.nodeValue
return t==null?this.cI(a):t},
$isp:1,
$isf:1}
W.d_.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.x]},
$isc:1,
$asc:function(){return[W.x]},
$iso:1,
$aso:function(){return[W.x]},
$isb:1,
$asb:function(){return[W.x]}}
W.eY.prototype={$isa:1}
W.f0.prototype={
gj:function(a){return a.length}}
W.a0.prototype={$isp:1,
gj:function(a){return a.length}}
W.f2.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.a0]},
$isc:1,
$asc:function(){return[W.a0]},
$iso:1,
$aso:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.f5.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.f6.prototype={
E:function(a,b){return a.send(b)}}
W.ff.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gH:function(a){return a.z}}
W.d3.prototype={
E:function(a,b){return a.send(b)}}
W.fi.prototype={
gj:function(a){return a.length}}
W.fl.prototype={$isa:1}
W.a1.prototype={$isp:1,$isf:1}
W.fm.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.a1]},
$isc:1,
$asc:function(){return[W.a1]},
$iso:1,
$aso:function(){return[W.a1]},
$isb:1,
$asb:function(){return[W.a1]}}
W.a2.prototype={$isp:1}
W.fo.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.a2]},
$isc:1,
$asc:function(){return[W.a2]},
$iso:1,
$aso:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.a3.prototype={$isp:1,
gj:function(a){return a.length}}
W.fr.prototype={
h:function(a,b){return this.by(a,b)},
aX:function(a,b){var t,s
for(t=0;!0;++t){s=this.dj(a,t)
if(s==null)return
b.$2(s,this.by(a,s))}},
gj:function(a){return a.length},
by:function(a,b){return a.getItem(b)},
dj:function(a,b){return a.key(b)}}
W.S.prototype={$isp:1}
W.ac.prototype={}
W.a4.prototype={$isp:1,$isf:1}
W.T.prototype={$isp:1,$isf:1}
W.fC.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.T]},
$isc:1,
$asc:function(){return[W.T]},
$iso:1,
$aso:function(){return[W.T]},
$isb:1,
$asb:function(){return[W.T]}}
W.fD.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.a4]},
$isc:1,
$asc:function(){return[W.a4]},
$iso:1,
$aso:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.fF.prototype={
gj:function(a){return a.length}}
W.a5.prototype={$isp:1}
W.aO.prototype={$isp:1,$isaO:1}
W.fJ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.a5]},
$isc:1,
$asc:function(){return[W.a5]},
$iso:1,
$aso:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.fK.prototype={
gj:function(a){return a.length}}
W.bb.prototype={}
W.fM.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gH:function(a){return a.z}}
W.ax.prototype={}
W.fS.prototype={
k:function(a){return String(a)},
$isa:1}
W.bc.prototype={$isbc:1}
W.fU.prototype={
gj:function(a){return a.length}}
W.fX.prototype={
gj:function(a){return a.length}}
W.fY.prototype={
E:function(a,b){return a.send(b)}}
W.aQ.prototype={
gdI:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(new P.r("deltaY is not supported"))},
$isp:1,
$isM:1,
$isaQ:1}
W.bM.prototype={
gdz:function(a){var t,s
t=P.Q
s=new P.H(0,$.u,null,[t])
this.dg(a)
this.dq(a,W.jZ(new W.fZ(new P.hR(s,[t]))))
return s},
dq:function(a,b){return a.requestAnimationFrame(H.bi(b,1))},
dg:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isa:1}
W.fZ.prototype={
$1:function(a){this.a.aU(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.h_.prototype={$isa:1}
W.aR.prototype={$isa:1}
W.h7.prototype={
k:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
v:function(a,b){var t,s,r
if(b==null)return!1
t=J.q(b)
if(!t.$isF)return!1
s=a.left
r=t.gb_(b)
if(s==null?r==null:s===r){s=a.top
r=t.gb3(b)
if(s==null?r==null:s===r){s=a.width
r=t.gT(b)
if(s==null?r==null:s===r){s=a.height
t=t.gS(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gu:function(a){var t,s,r,q
t=J.ah(a.left)
s=J.ah(a.top)
r=J.ah(a.width)
q=J.ah(a.height)
return W.jV(W.aV(W.aV(W.aV(W.aV(0,t),s),r),q))},
$isF:1,
$asF:function(){},
gS:function(a){return a.height},
gb_:function(a){return a.left},
gb3:function(a){return a.top},
gT:function(a){return a.width}}
W.db.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[P.F]},
$isc:1,
$asc:function(){return[P.F]},
$iso:1,
$aso:function(){return[P.F]},
$isb:1,
$asb:function(){return[P.F]}}
W.h9.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.y]},
$isc:1,
$asc:function(){return[W.y]},
$iso:1,
$aso:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.ha.prototype={$isa:1}
W.hb.prototype={
gS:function(a){return a.height},
gT:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.hw.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.Z]},
$isc:1,
$asc:function(){return[W.Z]},
$iso:1,
$aso:function(){return[W.Z]},
$isb:1,
$asb:function(){return[W.Z]}}
W.hx.prototype={$isa:1}
W.dd.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.x]},
$isc:1,
$asc:function(){return[W.x]},
$iso:1,
$aso:function(){return[W.x]},
$isb:1,
$asb:function(){return[W.x]}}
W.hO.prototype={$isa:1}
W.hP.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.a3]},
$isc:1,
$asc:function(){return[W.a3]},
$iso:1,
$aso:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.hQ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.S]},
$isc:1,
$asc:function(){return[W.S]},
$iso:1,
$aso:function(){return[W.S]},
$isb:1,
$asb:function(){return[W.S]}}
W.hT.prototype={$isa:1}
W.hU.prototype={$isa:1}
W.hf.prototype={
c2:function(a,b,c,d){return W.ap(this.a,this.b,a,!1,H.aY(this,0))}}
W.hc.prototype={}
W.hg.prototype={
dE:function(a){if(this.b==null)return
this.du()
this.b=null
this.sdl(null)
return},
dt:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.kn(r,this.c,t,!1)}},
du:function(){var t,s,r
t=this.d
s=t!=null
if(s){r=this.b
r.toString
if(s)J.ko(r,this.c,t,!1)}},
d4:function(a,b,c,d,e){this.dt()},
sdl:function(a){this.d=a}}
W.hh.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.z.prototype={
gA:function(a){return new W.e7(a,this.gj(a),-1,null,[H.aq(a,"z",0)])},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
W.e7.prototype={
q:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbA(J.aZ(this.a,t))
this.c=t
return!0}this.sbA(null)
this.c=s
return!1},
gt:function(){return this.d},
sbA:function(a){this.d=a}}
W.bp.prototype={$isc:1,
$asc:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.bq.prototype={$isc:1,
$asc:function(){return[W.a1]},
$isb:1,
$asb:function(){return[W.a1]}}
W.br.prototype={$isc:1,
$asc:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.bs.prototype={$isc:1,
$asc:function(){return[W.a1]},
$isb:1,
$asb:function(){return[W.a1]}}
W.bt.prototype={$isc:1,
$asc:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.bu.prototype={$isc:1,
$asc:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.ca.prototype={}
W.cu.prototype={$isc:1,
$asc:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.cg.prototype={$isc:1,
$asc:function(){return[W.x]},
$isb:1,
$asb:function(){return[W.x]}}
W.cd.prototype={$isc:1,
$asc:function(){return[W.S]},
$isb:1,
$asb:function(){return[W.S]}}
W.co.prototype={$isc:1,
$asc:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.cp.prototype={$isc:1,
$asc:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]}}
W.cq.prototype={$isc:1,
$asc:function(){return[W.Z]},
$isb:1,
$asb:function(){return[W.Z]}}
W.cr.prototype={$isc:1,
$asc:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.cs.prototype={$isc:1,
$asc:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.cb.prototype={$isc:1,
$asc:function(){return[P.F]},
$isb:1,
$asb:function(){return[P.F]}}
W.ce.prototype={$isc:1,
$asc:function(){return[W.x]},
$isb:1,
$asb:function(){return[W.x]}}
W.ch.prototype={$isc:1,
$asc:function(){return[W.T]},
$isb:1,
$asb:function(){return[W.T]}}
W.ci.prototype={$isc:1,
$asc:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.cj.prototype={$isc:1,
$asc:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.ck.prototype={$isc:1,
$asc:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.cm.prototype={$isc:1,
$asc:function(){return[W.x]},
$isb:1,
$asb:function(){return[W.x]}}
W.cv.prototype={$isc:1,
$asc:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.cw.prototype={$isc:1,
$asc:function(){return[W.x]},
$isb:1,
$asb:function(){return[W.x]}}
W.cx.prototype={$isc:1,
$asc:function(){return[W.T]},
$isb:1,
$asb:function(){return[W.T]}}
W.cH.prototype={$isc:1,
$asc:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.cI.prototype={$isc:1,
$asc:function(){return[W.x]},
$isb:1,
$asb:function(){return[W.x]}}
W.cG.prototype={$isc:1,
$asc:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.cL.prototype={$isc:1,
$asc:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.cM.prototype={$isc:1,
$asc:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]}}
W.cN.prototype={$isc:1,
$asc:function(){return[W.Z]},
$isb:1,
$asb:function(){return[W.Z]}}
W.cO.prototype={$isc:1,
$asc:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.cy.prototype={$isc:1,
$asc:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.cz.prototype={$isc:1,
$asc:function(){return[W.x]},
$isb:1,
$asb:function(){return[W.x]}}
W.cB.prototype={$isc:1,
$asc:function(){return[W.S]},
$isb:1,
$asb:function(){return[W.S]}}
W.cJ.prototype={$isc:1,
$asc:function(){return[P.F]},
$isb:1,
$asb:function(){return[P.F]}}
W.cK.prototype={$isc:1,
$asc:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
P.i_.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.v,,]}}}
P.hG.prototype={}
P.F.prototype={$asF:null}
P.dm.prototype={$isa:1}
P.aC.prototype={$isa:1}
P.dM.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dN.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dO.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dP.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dQ.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dR.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dS.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dT.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dU.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dV.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dW.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dX.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dY.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dZ.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gH:function(a){return a.z}}
P.e_.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e0.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gH:function(a){return a.z}}
P.e1.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e2.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e6.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e9.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.a9.prototype={}
P.at.prototype={$isa:1}
P.eg.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ak.prototype={$isp:1}
P.es.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return this.R(a,b)},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
R:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.ak]},
$isb:1,
$asb:function(){return[P.ak]}}
P.eB.prototype={$isa:1}
P.eC.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.al.prototype={$isp:1}
P.eS.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return this.R(a,b)},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
R:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.al]},
$isb:1,
$asb:function(){return[P.al]}}
P.eZ.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.f3.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.f4.prototype={
gj:function(a){return a.length}}
P.f9.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fa.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fh.prototype={$isa:1}
P.fx.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return this.R(a,b)},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
R:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]}}
P.G.prototype={$isa:1}
P.fy.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fz.prototype={$isa:1}
P.d6.prototype={}
P.fB.prototype={$isa:1}
P.bK.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.am.prototype={$isp:1}
P.fL.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return this.R(a,b)},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
R:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.am]},
$isb:1,
$asb:function(){return[P.am]}}
P.fT.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fV.prototype={$isa:1}
P.fW.prototype={$isa:1}
P.bO.prototype={$isa:1}
P.hL.prototype={$isa:1}
P.hM.prototype={$isa:1}
P.hN.prototype={$isa:1}
P.cn.prototype={$isc:1,
$asc:function(){return[P.ak]},
$isb:1,
$asb:function(){return[P.ak]}}
P.cf.prototype={$isc:1,
$asc:function(){return[P.al]},
$isb:1,
$asb:function(){return[P.al]}}
P.cc.prototype={$isc:1,
$asc:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]}}
P.cl.prototype={$isc:1,
$asc:function(){return[P.am]},
$isb:1,
$asb:function(){return[P.am]}}
P.cA.prototype={$isc:1,
$asc:function(){return[P.am]},
$isb:1,
$asb:function(){return[P.am]}}
P.cC.prototype={$isc:1,
$asc:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]}}
P.cD.prototype={$isc:1,
$asc:function(){return[P.al]},
$isb:1,
$asb:function(){return[P.al]}}
P.cE.prototype={$isc:1,
$asc:function(){return[P.ak]},
$isb:1,
$asb:function(){return[P.ak]}}
P.ds.prototype={
gj:function(a){return a.length}}
P.fd.prototype={
bH:function(a,b){return a.activeTexture(b)},
bJ:function(a,b,c){return a.attachShader(b,c)},
bK:function(a,b,c){return a.bindBuffer(b,c)},
bL:function(a,b,c){return a.bindTexture(b,c)},
bM:function(a,b){return a.blendEquation(b)},
bN:function(a,b,c){return a.blendFunc(b,c)},
bO:function(a,b,c,d){return a.bufferData(b,c,d)},
bP:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bQ:function(a,b){return a.compileShader(b)},
bR:function(a){return a.createBuffer()},
bS:function(a){return a.createProgram()},
bT:function(a,b){return a.createShader(b)},
bU:function(a){return a.createTexture()},
bV:function(a,b){return a.depthMask(b)},
bW:function(a,b){return a.disable(b)},
bX:function(a,b,c,d){return a.drawArrays(b,c,d)},
bY:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bZ:function(a,b){return a.enable(b)},
c_:function(a,b){return a.enableVertexAttribArray(b)},
ar:function(a){return P.i0(a.getContextAttributes())},
b4:function(a){return a.getError()},
b5:function(a,b){return a.getProgramInfoLog(b)},
b6:function(a,b,c){return a.getProgramParameter(b,c)},
b7:function(a,b){return a.getShaderInfoLog(b)},
b8:function(a,b,c){return a.getShaderParameter(b,c)},
b9:function(a,b,c){return a.getUniformLocation(b,c)},
c1:function(a,b){return a.linkProgram(b)},
c5:function(a,b,c){return a.pixelStorei(b,c)},
bc:function(a,b,c){return a.shaderSource(b,c)},
bd:function(a,b,c,d){return a.stencilFunc(b,c,d)},
b1:function(a,b,c,d,e,f,g,h,i,j){var t,s
t=J.q(g)
if(!!t.$isb3||g==null)s=!0
else s=!1
if(s){this.aL(a,b,c,d,e,f,P.k3(g))
return}if(!!t.$isb4)s=!0
else s=!1
if(s){this.aM(a,b,c,d,e,f,g)
return}if(!!t.$isaD)s=!0
else s=!1
if(s){this.aN(a,b,c,d,e,f,g)
return}if(!!t.$isbc)s=!0
else s=!1
if(s){this.aO(a,b,c,d,e,f,g)
return}if(!!t.$isb2)t=!0
else t=!1
if(t){this.aP(a,b,c,d,e,f,g)
return}throw H.e(P.dq("Incorrect number or type of arguments"))},
c9:function(a,b,c,d,e,f,g){return this.b1(a,b,c,d,e,f,g,null,null,null)},
aL:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aM:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aN:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aO:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aP:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
ca:function(a,b,c,d){return a.texParameterf(b,c,d)},
cb:function(a,b,c,d){return a.texParameteri(b,c,d)},
cc:function(a,b,c){return a.uniform1f(b,c)},
cd:function(a,b,c){return a.uniform1fv(b,c)},
ce:function(a,b,c){return a.uniform1i(b,c)},
cf:function(a,b,c){return a.uniform1iv(b,c)},
cg:function(a,b,c){return a.uniform2fv(b,c)},
ci:function(a,b,c){return a.uniform3fv(b,c)},
cj:function(a,b,c){return a.uniform4fv(b,c)},
ck:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cl:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cn:function(a,b){return a.useProgram(b)},
cp:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)}}
P.fe.prototype={
dA:function(a,b){return a.beginTransformFeedback(b)},
dD:function(a,b){return a.bindVertexArray(b)},
dH:function(a){return a.createVertexArray()},
dO:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dP:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dQ:function(a){return a.endTransformFeedback()},
ed:function(a,b,c,d){this.ds(a,b,c,d)
return},
ds:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
ee:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bH:function(a,b){return a.activeTexture(b)},
bJ:function(a,b,c){return a.attachShader(b,c)},
bK:function(a,b,c){return a.bindBuffer(b,c)},
bL:function(a,b,c){return a.bindTexture(b,c)},
bM:function(a,b){return a.blendEquation(b)},
bN:function(a,b,c){return a.blendFunc(b,c)},
bO:function(a,b,c,d){return a.bufferData(b,c,d)},
bP:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bQ:function(a,b){return a.compileShader(b)},
bR:function(a){return a.createBuffer()},
bS:function(a){return a.createProgram()},
bT:function(a,b){return a.createShader(b)},
bU:function(a){return a.createTexture()},
bV:function(a,b){return a.depthMask(b)},
bW:function(a,b){return a.disable(b)},
bX:function(a,b,c,d){return a.drawArrays(b,c,d)},
bY:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bZ:function(a,b){return a.enable(b)},
c_:function(a,b){return a.enableVertexAttribArray(b)},
ar:function(a){return P.i0(a.getContextAttributes())},
b4:function(a){return a.getError()},
b5:function(a,b){return a.getProgramInfoLog(b)},
b6:function(a,b,c){return a.getProgramParameter(b,c)},
b7:function(a,b){return a.getShaderInfoLog(b)},
b8:function(a,b,c){return a.getShaderParameter(b,c)},
b9:function(a,b,c){return a.getUniformLocation(b,c)},
c1:function(a,b){return a.linkProgram(b)},
c5:function(a,b,c){return a.pixelStorei(b,c)},
bc:function(a,b,c){return a.shaderSource(b,c)},
bd:function(a,b,c,d){return a.stencilFunc(b,c,d)},
b1:function(a,b,c,d,e,f,g,h,i,j){var t,s
t=J.q(g)
if(!!t.$isb3||g==null)s=!0
else s=!1
if(s){this.aL(a,b,c,d,e,f,P.k3(g))
return}if(!!t.$isb4)s=!0
else s=!1
if(s){this.aM(a,b,c,d,e,f,g)
return}if(!!t.$isaD)s=!0
else s=!1
if(s){this.aN(a,b,c,d,e,f,g)
return}if(!!t.$isbc)s=!0
else s=!1
if(s){this.aO(a,b,c,d,e,f,g)
return}if(!!t.$isb2)t=!0
else t=!1
if(t){this.aP(a,b,c,d,e,f,g)
return}throw H.e(P.dq("Incorrect number or type of arguments"))},
c9:function(a,b,c,d,e,f,g){return this.b1(a,b,c,d,e,f,g,null,null,null)},
aL:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aM:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aN:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aO:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aP:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
ca:function(a,b,c,d){return a.texParameterf(b,c,d)},
cb:function(a,b,c,d){return a.texParameteri(b,c,d)},
cc:function(a,b,c){return a.uniform1f(b,c)},
cd:function(a,b,c){return a.uniform1fv(b,c)},
ce:function(a,b,c){return a.uniform1i(b,c)},
cf:function(a,b,c){return a.uniform1iv(b,c)},
cg:function(a,b,c){return a.uniform2fv(b,c)},
ci:function(a,b,c){return a.uniform3fv(b,c)},
cj:function(a,b,c){return a.uniform4fv(b,c)},
ck:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cl:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cn:function(a,b){return a.useProgram(b)},
cp:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
$isa:1}
P.hS.prototype={$isa:1}
P.fp.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return P.i0(this.di(a,b))},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
di:function(a,b){return a.item(b)},
$isc:1,
$asc:function(){return[P.au]},
$isb:1,
$asb:function(){return[P.au]}}
P.ct.prototype={$isc:1,
$asc:function(){return[P.au]},
$isb:1,
$asb:function(){return[P.au]}}
P.cF.prototype={$isc:1,
$asc:function(){return[P.au]},
$isb:1,
$asb:function(){return[P.au]}}
B.ir.prototype={
$1:function(a){$.$get$i1().i(0,a.which,!0)},
$S:function(){return{func:1,args:[W.aK]}}}
B.is.prototype={
$1:function(a){$.$get$i1().i(0,a.which,null)},
$S:function(){return{func:1,args:[W.aK]}}}
B.it.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.m0=t
$.m1=C.b.a_(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.iY=s-C.b.G(window.innerWidth,2)
$.kc=-(t-C.b.G(window.innerHeight,2))},
$S:function(){return{func:1,args:[W.M]}}}
B.iu.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.bX=t-C.b.G(window.innerWidth,2)
$.bY=-(s-C.b.G(window.innerHeight,2))
if(a.button===2)$.$get$bW().i(0,"right",!0)
else $.$get$bW().i(0,"left",!0)},
$S:function(){return{func:1,args:[W.M]}}}
B.iv.prototype={
$1:function(a){if(a.button===2)$.$get$bW().i(0,"right",null)
else $.$get$bW().i(0,"left",null)},
$S:function(){return{func:1,args:[W.M]}}}
B.eT.prototype={
cV:function(a,b,c,d){var t
d.toString
W.ap(d,W.ma().$1(d),new B.eU(this),!1,W.aQ)
W.ap(d,"mousemove",new B.eV(this),!1,W.M)
t=W.aO
W.ap(d,"touchstart",new B.eW(),!1,t)
W.ap(d,"touchmove",new B.eX(this),!1,t)
B.mo(null)}}
B.eU.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.R.gdI(a)*r.k3
if(C.c.a_(r.fy,t)>0)r.fy=H.V(C.c.a_(r.fy,t))}catch(q){s=H.a7(q)
P.ar(s)}},
$S:function(){return{func:1,args:[W.aQ]}}}
B.eV.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=H.V(t.go+C.b.a_($.iY,$.bX)*0.01)
s=t.id
r=$.bY
q=$.kc
t.id=H.V(s+(r-q)*0.01)
$.bX=$.iY
$.bY=q}},
$S:function(){return{func:1,args:[W.M]}}}
B.eW.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.W(t.clientX)
C.c.W(t.clientY)
$.bX=s
C.c.W(t.clientX)
$.bY=C.c.W(t.clientY)},
$S:function(){return{func:1,args:[W.aO]}}}
B.eX.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.W(t.clientX)
t=C.c.W(t.clientY)
r=this.a
r.go=H.V(r.go+C.b.a_(s,$.bX)*0.01)
r.id=H.V(r.id+($.bY-t)*0.01)
$.bX=s
$.bY=t},
$S:function(){return{func:1,args:[W.aO]}}}
G.eI.prototype={}
G.fQ.prototype={
M:function(a,b){var t=this.d
if(H.az(!t.C(0,a)))H.aW("uniform "+a+" already set")
t.i(0,a,b)},
bj:function(){return this.d},
k:function(a){var t,s,r,q
t=H.J(["{"+new H.aw(H.i6(this),null).k(0)+"}["+this.a+"]"],[P.v])
for(s=this.d,r=s.gL(s),r=r.gA(r);r.q();){q=r.gt()
C.a.l(t,H.i(q)+": "+H.i(s.h(0,q)))}return C.a.aa(t,"\n")}}
G.dv.prototype={}
G.dy.prototype={
c0:function(a,b,c){J.kD(this.a,b)
if(c>0)J.kY(this.a,b,c)}}
G.e3.prototype={}
G.ed.prototype={
cM:function(a){var t,s,r
H.d(!0)
t=this.d.length
for(s=this.c,r=0;r<a;++r,t+=4)C.a.l(s,new G.e3(t,t+1,t+2,t+3))},
cN:function(a){var t,s,r,q,p
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.L)(a),++r){q=a[r]
p=new T.t(new Float32Array(3))
p.B(q)
C.a.l(s,p)}},
cL:function(a,b){var t,s,r,q,p,o,n
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.L)(b),++q){p=b[q]
o=new Float32Array(2)
n=p.a
o[1]=n[1]
o[0]=n[0]
r.l(t,new T.a6(o))}},
cP:function(){var t,s,r,q,p,o,n,m,l,k
t=this.b
H.d(t.length>0||this.c.length>0)
s=this.c
r=new Array(t.length*3+s.length*6)
r.fixed$length=Array
q=H.J(r,[P.n])
for(r=t.length,p=0,o=0;n=t.length,o<n;n===r||(0,H.L)(t),++o){m=t[o]
q[p]=m.a
q[p+1]=m.b
q[p+2]=m.c
p+=3}for(t=s.length,o=0;r=s.length,o<r;r===t||(0,H.L)(s),++o){l=s[o]
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
cQ:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=this.d
s=new Array(t.length)
s.fixed$length=Array
r=H.J(s,[T.t])
q=new T.t(new Float32Array(H.B(3)))
p=new T.t(new Float32Array(H.B(3)))
for(s=this.b,o=s.length,n=0;n<s.length;s.length===o||(0,H.L)(s),++n){m=s[n]
l=m.a
k=m.b
j=m.c
G.jw(t[l],t[k],t[j],q,p)
i=new T.t(new Float32Array(3))
i.B(p)
r[l]=i
l=new T.t(new Float32Array(3))
l.B(p)
r[k]=l
l=new T.t(new Float32Array(3))
l.B(p)
r[j]=l}for(s=this.c,o=s.length,n=0;n<s.length;s.length===o||(0,H.L)(s),++n){h=s[n]
l=h.a
k=h.b
j=h.c
G.jw(t[l],t[k],t[j],q,p)
i=new T.t(new Float32Array(3))
i.B(p)
r[l]=i
l=new T.t(new Float32Array(3))
l.B(p)
r[k]=l
l=new T.t(new Float32Array(3))
l.B(p)
r[j]=l
l=new T.t(new Float32Array(3))
l.B(p)
r[h.d]=l}this.e.i(0,"aNormal",r)},
k:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gL(s),r=r.gA(r);r.q();){q=r.gt()
p=$.$get$P().h(0,q).a
C.a.l(t,H.i(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.aa(t," ")}}
G.d8.prototype={}
G.d7.prototype={}
G.eD.prototype={
cU:function(a){this.M("cDepthTest",!0)
this.M("cDepthWrite",!0)
this.M("cBlendEquation",$.$get$je())
this.M("cStencilFunc",$.$get$jC())}}
G.eF.prototype={
bg:function(a,b,c){var t,s
if(C.e.aA(a,0)===105){if(H.az(C.b.ax(b.length,c)===this.z))H.aW("ChangeAttribute "+this.z)}else H.d(C.b.ax(b.length,c)===(this.ch.length/3|0))
this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.di(t.a,34962,s)
J.j3(t.a,34962,b,35048)},
cR:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
a0:function(a,b,c){var t,s,r,q,p,o
t=J.j0(a,0)===105
if(t&&this.z===0)this.z=C.b.ax(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.iz(r.a))
this.bg(a,b,c)
q=$.$get$P().h(0,a)
if(q==null)throw H.e("Unknown canonical "+a)
p=this.x
if(H.az(p.C(0,a)))H.aW("unexpected attribute "+a)
o=p.h(0,a)
J.dj(r.a,this.e)
r.c0(0,o,t?1:0)
s=s.h(0,a)
p=q.bi()
J.di(r.a,34962,s)
J.jc(r.a,o,p,5126,!1,0,0)},
k:function(a){var t,s,r
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,t=t.gL(t),t=t.gA(t);t.q();){r=t.gt()
C.a.l(s,H.i(r)+":"+this.cy.h(0,r).length)}return"MESH["+this.a+"] "+C.a.aa(s,"  ")},
saE:function(a){this.cx=a}}
G.f_.prototype={
d2:function(){var t,s,r,q,p,o
t=this.db
s=this.Q
r=this.ch
q=Math.tan(this.y*3.141592653589793/180*0.5)
p=s-r
o=t.a
o[0]=0
o[1]=0
o[2]=0
o[3]=0
o[4]=0
o[5]=0
o[6]=0
o[7]=0
o[8]=0
o[9]=0
o[10]=0
o[11]=0
o[12]=0
o[13]=0
o[14]=0
o[15]=0
t.Y(0,0,1/(q*this.z))
t.Y(1,1,1/q)
t.Y(2,2,(r+s)/p)
t.Y(3,2,-1)
t.Y(2,3,2*s*r/p)},
bj:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.t(new Float32Array(H.B(3)))
o.au(r,q,p)
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
s=J.q(n)
r=!!s.$isay
k=r?s.gaq(n):1
if(!!s.$ist){j=s.gm(n)
m=s.gn(n)
l=s.gH(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
l=s.gH(n)
n=j}else if(!(typeof n==="number")){n=null
m=null
l=null}s=C.c.D(t[0],n)
r=C.c.D(t[4],m)
q=C.c.D(t[8],l)
i=t[12]
h=C.c.D(t[1],n)
g=C.c.D(t[5],m)
f=C.c.D(t[9],l)
e=t[13]
d=C.c.D(t[2],n)
c=C.c.D(t[6],m)
b=C.c.D(t[10],l)
a=t[14]
a0=C.c.D(t[3],n)
a1=C.c.D(t[7],m)
a2=C.c.D(t[11],l)
a3=t[15]
t[12]=s+r+q+i*k
t[13]=h+g+f+e*k
t[14]=d+c+b+a*k
t[15]=a0+a1+a2+a3*k
a3=this.cx
a3.B(this.db)
a3.e3(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.fc.prototype={
d1:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gj(t)===s.gj(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gL(s),s=s.gA(s);s.q();){q=s.gt()
if(!t.C(0,q))C.a.l(r,q)}for(t=this.x,s=new P.bP(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.q();){q=s.d
if(!t.V(0,q))C.a.l(r,q)}return r},
d3:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gL(b),s=s.gA(s),r=this.d,q=this.y,p=this.z,o=0;s.q();){n=s.gt()
switch(J.j0(n,0)){case 117:if(q.C(0,n)){m=b.h(0,n)
if(p.C(0,n))H.ip("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$P().h(0,n)
if(l==null)H.C("unknown "+n)
H.d(q.C(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.iD(r.a,k,m)
else if(!!J.q(m).$isjp)J.kW(r.a,k,m)
break
case"float":if(l.c===0)J.kU(r.a,k,m)
else if(!!J.q(m).$ise8)J.kV(r.a,k,m)
break
case"mat4":if(l.c===0){j=H.aA(m,"$isab").a
J.jb(r.a,k,!1,j)}else if(!!J.q(m).$ise8)J.jb(r.a,k,!1,m)
else if(H.az(!1))H.aW("bad unform: "+n)
break
case"mat3":if(l.c===0){j=C.o.gei(H.aA(m,"$ismw"))
J.ja(r.a,k,!1,j)}else if(!!J.q(m).$ise8)J.ja(r.a,k,!1,m)
else if(H.az(!1))H.aW("bad unform: "+n)
break
case"vec4":if(l.c===0){j=H.aA(m,"$isay").a
J.j9(r.a,k,j)}else J.j9(r.a,k,m)
break
case"vec3":if(l.c===0){j=H.aA(m,"$ist").a
J.j8(r.a,k,j)}else J.j8(r.a,k,m)
break
case"vec2":if(l.c===0){j=H.aA(m,"$isa6").a
J.j7(r.a,k,j)}else J.j7(r.a,k,m)
break
case"sampler2D":case"sampler2DShadow":j=C.b.X(33984,this.ch)
J.j1(r.a,j)
j=H.aA(m,"$isbL").b
J.bZ(r.a,3553,j)
j=this.ch
J.iD(r.a,k,j)
this.ch=this.ch+1
break
case"samplerCube":H.d(n==="uCubeTexture")
j=C.b.X(33984,this.ch)
J.j1(r.a,j)
j=H.aA(m,"$isbL").b
J.bZ(r.a,34067,j)
j=this.ch
J.iD(r.a,k,j)
this.ch=this.ch+1
break
default:H.ip("Error: unknow uniform type: "+j)
H.d(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":if(J.D(m,!0))J.c_(r.a,2929)
else J.iA(r.a,2929)
break
case"cStencilFunc":H.aA(m,"$isd8")
j=m.a
if(j===1281)J.iA(r.a,2960)
else{J.c_(r.a,2960)
i=m.b
h=m.c
J.kQ(r.a,j,i,h)}break
case"cDepthWrite":J.kx(r.a,m)
break
case"cBlendEquation":H.aA(m,"$isd7")
j=m.a
if(j===1281)J.iA(r.a,3042)
else{J.c_(r.a,3042)
i=m.b
h=m.c
J.kr(r.a,i,h)
J.kq(r.a,j)}break}++o
break}}s=Date.now()
""+o
new P.aF(1000*(s-new P.bn(t,!1).a)).k(0)},
cO:function(a,b,c){var t,s,r,q,p,o,n,m,l
Date.now()
t=this.d
s=this.r
J.kX(t.a,s)
this.ch=0
this.z.O(0)
for(r=0;r<2;++r){q=b[r]
this.d3(q.a,q.bj())}s=this.Q
s.O(0)
for(p=a.cy,p=p.gL(p),p=p.gA(p);p.q();)s.l(0,p.gt())
o=this.d1()
if(o.length!==0)P.ar("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.i(o)))
J.dj(a.d.a,a.e)
n=this.e.f.length>0
s=a.f
p=a.cR()
m=a.Q
l=a.z
t.toString
if(n)J.kp(t.a,s)
if(m!==-1)if(l>1)J.kB(t.a,s,p,m,0,l)
else J.kA(t.a,s,p,m,0)
else if(l>1)J.kz(t.a,s,0,p,l)
else J.ky(t.a,s,0,p)
if(n)J.kE(t.a)},
bh:function(a,b){return this.cO(a,b,null)},
cW:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j
t=this.d
s=this.e
r=s.b
q=this.f
p=q.b
o=s.f
n=J.ku(t.a)
m=G.jT(t.a,35633,r)
J.j2(t.a,n,m)
l=G.jT(t.a,35632,p)
J.j2(t.a,n,l)
if(o.length>0)J.kT(t.a,n,o,35980)
J.kM(t.a,n)
if(!J.kL(t.a,n,35714))H.C(J.kK(t.a,n))
this.r=n
this.sd8(0,P.ll(s.c,null))
for(s=s.d,r=s.length,p=this.y,k=0;k<s.length;s.length===r||(0,H.L)(s),++k){j=s[k]
o=this.r
p.i(0,j,J.j5(t.a,o,j))}for(s=q.d,r=s.length,k=0;k<s.length;s.length===r||(0,H.L)(s),++k){j=s[k]
q=this.r
p.i(0,j,J.j5(t.a,q,j))}},
sd8:function(a,b){this.x=b}}
G.h.prototype={
bi:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.d(!1)
return-1}}}
G.b9.prototype={
bf:function(a){var t,s,r,q,p
H.d(this.b==null)
for(t=a.length,s=this.c,r=this.x,q=0;q<a.length;a.length===t||(0,H.L)(a),++q){p=a[q]
H.d($.$get$P().C(0,p))
H.d(!C.a.V(s,p))
C.a.l(s,p)
r.i(0,p,this.r);++this.r}C.a.av(s)},
ag:function(a){var t,s,r,q
H.d(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.L)(a),++r){q=a[r]
if(H.az($.$get$P().C(0,q)))H.aW("missing uniform "+q)
H.d(!C.a.V(s,q))
C.a.l(s,q)}C.a.av(s)},
ah:function(a){var t,s,r
H.d(this.b==null)
for(t=this.e,s=0;s<1;++s){r=a[s]
H.d($.$get$P().C(0,r))
H.d(!C.a.V(t,r))
C.a.l(t,r)}C.a.av(t)},
cZ:function(a,b){H.d(this.b==null)
this.b=this.ay(!0,a,b)},
bk:function(a){return this.cZ(a,null)},
cY:function(a,b){H.d(this.b==null)
this.b=this.ay(!1,a,b)},
cX:function(a){return this.cY(a,null)},
ay:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.d(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.L)(t),++o){n=t[o]
m=$.$get$P().h(0,n)
C.a.l(q,"layout (location="+H.i(p.h(0,n))+") in "+m.a+" "+H.i(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.L)(t),++o){k=t[o]
m=$.$get$P().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.i(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.L)(t),++o){k=t[o]
m=$.$get$P().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.i(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.L)(t),++o){k=t[o]
m=$.$get$P().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.i(k)+j+";")}C.a.l(q,"")
if(a)C.a.l(q,"void main(void) {")
C.a.dv(q,b)
if(a)C.a.l(q,"}")
return C.a.aa(q,"\n")}}
G.fn.prototype={}
G.fE.prototype={
cS:function(a,b){var t=this.e
if(t!==1)J.kS(a.a,b,34046,t)
J.j6(a.a,b,10240,this.r)
J.j6(a.a,b,10241,this.f)}}
G.bL.prototype={
k:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.eh.prototype={
d_:function(a){var t,s
t=this.d
s=this.c
J.bZ(t.a,s,this.b)
J.kR(t.a,s,0,6408,6408,5121,a)}}
D.ex.prototype={
$1:function(a){return this.a.aU(0,this.b)},
$S:function(){return{func:1,args:[,]}}}
A.i8.prototype={
$2:function(a,b){var t=536870911&a+J.ah(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(){return{func:1,args:[P.n,P.p]}}}
T.ab.prototype={
Y:function(a,b,c){H.d(a<4)
H.d(b<4)
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
k:function(a){return"[0] "+this.af(0).k(0)+"\n[1] "+this.af(1).k(0)+"\n[2] "+this.af(2).k(0)+"\n[3] "+this.af(3).k(0)+"\n"},
h:function(a,b){return this.a[b]},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.ab){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gu:function(a){return A.i7(this.a)},
af:function(a){var t,s
t=new Float32Array(H.B(4))
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.ay(t)},
Z:function(){var t=this.a
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
bb:function(a,b,c){var t=this.a
t[14]=c
t[13]=b
t[12]=a},
e3:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.a6.prototype={
k:function(a){var t=this.a
return"["+H.i(t[0])+","+H.i(t[1])+"]"},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.a6){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gu:function(a){return A.i7(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.t.prototype={
au:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
B:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
k:function(a){var t=this.a
return"["+H.i(t[0])+","+H.i(t[1])+","+H.i(t[2])+"]"},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.t){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gu:function(a){return A.i7(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){return Math.sqrt(this.gao())},
gao:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
ab:function(a){var t,s,r
t=Math.sqrt(this.gao())
if(t===0)return 0
s=1/t
r=this.a
r[0]=r[0]*s
r[1]=r[1]*s
r[2]=r[2]*s
return t},
aV:function(a){var t,s
t=a.a
s=this.a
return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]},
al:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.t(new Float32Array(H.B(3)))
t.au(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
aw:function(a){var t,s
t=a.a
s=this.a
s[0]=s[0]-t[0]
s[1]=s[1]-t[1]
s[2]=s[2]-t[2]},
ct:function(a,b){var t=this.a
t[2]=t[2]*b
t[1]=t[1]*b
t[0]=t[0]*b},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gH:function(a){return this.a[2]}}
T.ay.prototype={
k:function(a){var t=this.a
return H.i(t[0])+","+H.i(t[1])+","+H.i(t[2])+","+H.i(t[3])},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.ay){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gu:function(a){return A.i7(this.a)},
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
gH:function(a){return this.a[2]},
gaq:function(a){return this.a[3]}}
G.ik.prototype={
$1:function(b2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
this.a.a=b2+0
t=this.b
t.go=H.V(t.go+0.001)
s=t.k4
if(s.h(0,37)!=null)t.go=H.V(t.go+0.03)
else if(s.h(0,39)!=null)t.go=H.V(t.go-0.03)
if(s.h(0,38)!=null)t.id=H.V(t.id+0.03)
else if(s.h(0,40)!=null)t.id=H.V(t.id-0.03)
if(s.h(0,33)!=null)t.fy=H.V(t.fy*0.99)
else if(s.h(0,34)!=null)t.fy=H.V(t.fy*1.01)
if(s.h(0,32)!=null){t.go=0
t.id=0}s=H.V(C.c.dF(t.id,-1.4707963267948965,1.4707963267948965))
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
s=n[12]
r=n[13]
o=n[14]
m=new T.t(new Float32Array(H.B(3)))
m.au(0,1,0)
l=t.e
k=l.a
k[0]=n[12]
k[1]=n[13]
k[2]=n[14]
k=new Float32Array(H.B(3))
j=new T.t(k)
j.B(l)
j.aw(q)
j.ab(0)
i=m.al(j)
i.ab(0)
h=j.al(i)
h.ab(0)
q=i.aV(l)
g=h.aV(l)
l=j.aV(l)
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
n[15]=1
n[14]=-l
n[13]=-g
n[12]=-q
n[11]=0
n[10]=k
n[9]=d
n[8]=f
n[7]=0
n[6]=a1
n[5]=a0
n[4]=a
n[3]=0
n[2]=b
n[1]=c
n[0]=e
n[12]=s
n[13]=r
n[14]=o
o=t.f
r=o.a
r[0]=n[2]
r[1]=n[6]
r[2]=n[10]
t=-t.k1
o=Math.sqrt(o.gao())
i=r[0]/o
h=r[1]/o
j=r[2]/o
o=Math.cos(t)
t=Math.sin(t)
a2=1-o
a3=i*i*a2+o
r=j*t
a4=i*h*a2-r
s=h*t
a5=i*j*a2+s
a6=h*i*a2+r
a7=h*h*a2+o
t=i*t
a8=h*j*a2-t
a9=j*i*a2-s
b0=j*h*a2+t
b1=j*j*a2+o
o=n[0]
t=n[4]
s=n[8]
r=n[1]
e=n[5]
c=n[9]
b=n[2]
a=n[6]
a0=n[10]
a1=n[3]
f=n[7]
d=n[11]
n[0]=o*a3+t*a6+s*a9
n[1]=r*a3+e*a6+c*a9
n[2]=b*a3+a*a6+a0*a9
n[3]=a1*a3+f*a6+d*a9
n[4]=o*a4+t*a7+s*b0
n[5]=r*a4+e*a7+c*b0
n[6]=b*a4+a*a7+a0*b0
n[7]=a1*a4+f*a7+d*b0
n[8]=o*a5+t*a8+s*b1
n[9]=r*a5+e*a8+c*b1
n[10]=b*a5+a*a8+a0*b1
n[11]=a1*a5+f*a8+d*b1
d=this.x
d.d.i(0,"uTime",b2/1000)
f=this.f
a1=this.c
this.d.bh(f,[a1,this.r])
this.e.bh(f,[a1,d])
C.S.gdz(window).ap(this)},
$S:function(){return{func:1,v:true,args:[P.Q]}}}
G.il.prototype={
$1:function(a){var t,s,r,q,p,o
t=this.a
s=$.ki
r=J.aZ(a,0)
q=new G.fE(!1,!1,!1,!0,1,9729,9729)
p=J.kv(t.a)
o=new G.eh(r,s,p,3553,t,q)
J.bZ(t.a,3553,p)
J.kO(t.a,37440,1)
o.d_(r)
q.cS(t,3553)
H.d(J.kJ(t.a)===0)
J.bZ(t.a,3553,null)
this.b.M("uTexture",o)
this.c.$1(0)},
$S:function(){return{func:1,args:[P.b]}}}
J.a.prototype.cI=J.a.prototype.k
J.bx.prototype.cJ=J.bx.prototype.k;(function installTearOffs(){installTearOff(H.aT.prototype,"ge0",0,0,0,null,["$0"],["an"],0)
installTearOff(H.ad.prototype,"gcu",0,0,0,null,["$1"],["F"],2)
installTearOff(H.aS.prototype,"gdK",0,0,0,null,["$1"],["P"],2)
installTearOff(P,"lX",1,0,0,null,["$1"],["lF"],1)
installTearOff(P,"lY",1,0,0,null,["$1"],["lG"],1)
installTearOff(P,"lZ",1,0,0,null,["$1"],["lH"],1)
installTearOff(P,"k2",1,0,0,null,["$0"],["lV"],0)
installTearOff(P.H.prototype,"gbu",0,0,0,null,["$2","$1"],["J","dc"],3)
installTearOff(P,"m4",1,0,0,null,["$2"],["l3"],4)
installTearOff(W,"ma",1,0,0,null,["$1"],["l6"],5)
installTearOff(G,"kf",1,0,0,null,["$0"],["mi"],0)})();(function inheritance(){inherit(P.p,null)
var t=P.p
inherit(H.iI,t)
inherit(J.a,t)
inherit(J.dr,t)
inherit(P.aj,t)
inherit(H.cS,t)
inherit(P.cP,t)
inherit(H.c8,t)
inherit(H.b0,t)
inherit(H.hE,t)
inherit(H.aT,t)
inherit(H.hd,t)
inherit(H.aU,t)
inherit(H.hD,t)
inherit(H.h6,t)
inherit(H.b8,t)
inherit(H.fG,t)
inherit(H.ai,t)
inherit(H.ad,t)
inherit(H.aS,t)
inherit(H.fb,t)
inherit(H.fN,t)
inherit(P.b1,t)
inherit(H.de,t)
inherit(H.aw,t)
inherit(H.aa,t)
inherit(H.et,t)
inherit(H.ev,t)
inherit(P.h8,t)
inherit(P.bN,t)
inherit(P.H,t)
inherit(P.da,t)
inherit(P.bI,t)
inherit(P.fs,t)
inherit(P.b_,t)
inherit(P.hV,t)
inherit(P.fk,t)
inherit(P.hB,t)
inherit(P.bP,t)
inherit(P.w,t)
inherit(P.hC,t)
inherit(P.aX,t)
inherit(P.E,t)
inherit(P.bn,t)
inherit(P.Q,t)
inherit(P.aF,t)
inherit(P.d5,t)
inherit(P.hi,t)
inherit(P.dL,t)
inherit(P.b,t)
inherit(P.au,t)
inherit(P.av,t)
inherit(P.bH,t)
inherit(P.v,t)
inherit(P.bJ,t)
inherit(W.dA,t)
inherit(W.z,t)
inherit(W.e7,t)
inherit(P.hG,t)
inherit(G.eI,t)
inherit(G.dy,t)
inherit(G.e3,t)
inherit(G.ed,t)
inherit(G.d8,t)
inherit(G.d7,t)
inherit(G.h,t)
inherit(G.b9,t)
inherit(G.fE,t)
inherit(G.bL,t)
inherit(T.ab,t)
inherit(T.a6,t)
inherit(T.t,t)
inherit(T.ay,t)
t=J.a
inherit(J.eo,t)
inherit(J.cR,t)
inherit(J.bx,t)
inherit(J.aH,t)
inherit(J.b5,t)
inherit(J.aI,t)
inherit(H.bA,t)
inherit(H.b7,t)
inherit(W.f,t)
inherit(W.X,t)
inherit(W.c1,t)
inherit(W.dw,t)
inherit(W.y,t)
inherit(W.ca,t)
inherit(W.dC,t)
inherit(W.dD,t)
inherit(W.dE,t)
inherit(W.c4,t)
inherit(W.c5,t)
inherit(W.cp,t)
inherit(W.dH,t)
inherit(W.j,t)
inherit(W.cr,t)
inherit(W.Z,t)
inherit(W.ee,t)
inherit(W.cm,t)
inherit(W.b2,t)
inherit(W.b3,t)
inherit(W.ey,t)
inherit(W.eE,t)
inherit(W.a_,t)
inherit(W.cu,t)
inherit(W.eR,t)
inherit(W.cg,t)
inherit(W.eY,t)
inherit(W.bb,t)
inherit(W.a0,t)
inherit(W.ci,t)
inherit(W.ac,t)
inherit(W.a2,t)
inherit(W.cj,t)
inherit(W.a3,t)
inherit(W.fr,t)
inherit(W.S,t)
inherit(W.ch,t)
inherit(W.fF,t)
inherit(W.a5,t)
inherit(W.ck,t)
inherit(W.fK,t)
inherit(W.fS,t)
inherit(W.fX,t)
inherit(W.h7,t)
inherit(W.cb,t)
inherit(W.cs,t)
inherit(W.cq,t)
inherit(W.ce,t)
inherit(W.co,t)
inherit(W.cd,t)
inherit(W.hT,t)
inherit(W.hU,t)
inherit(P.ak,t)
inherit(P.cn,t)
inherit(P.al,t)
inherit(P.cf,t)
inherit(P.f3,t)
inherit(P.f4,t)
inherit(P.f9,t)
inherit(P.cc,t)
inherit(P.am,t)
inherit(P.cl,t)
inherit(P.fW,t)
inherit(P.ds,t)
inherit(P.fd,t)
inherit(P.fe,t)
inherit(P.hS,t)
inherit(P.ct,t)
t=J.bx
inherit(J.f1,t)
inherit(J.aP,t)
inherit(J.aJ,t)
inherit(J.iH,J.aH)
t=J.b5
inherit(J.cQ,t)
inherit(J.ep,t)
t=P.aj
inherit(H.c,t)
inherit(H.cT,t)
t=H.c
inherit(H.b6,t)
inherit(H.eu,t)
inherit(H.dK,H.cT)
inherit(H.ez,P.cP)
t=H.b6
inherit(H.cU,t)
inherit(P.ew,t)
t=H.b0
inherit(H.iw,t)
inherit(H.ix,t)
inherit(H.hz,t)
inherit(H.he,t)
inherit(H.ek,t)
inherit(H.el,t)
inherit(H.hF,t)
inherit(H.fH,t)
inherit(H.fI,t)
inherit(H.iy,t)
inherit(H.id,t)
inherit(H.ie,t)
inherit(H.ig,t)
inherit(H.ih,t)
inherit(H.ii,t)
inherit(H.fA,t)
inherit(H.eq,t)
inherit(H.i9,t)
inherit(H.ia,t)
inherit(H.ib,t)
inherit(P.h3,t)
inherit(P.h2,t)
inherit(P.h4,t)
inherit(P.h5,t)
inherit(P.ec,t)
inherit(P.eb,t)
inherit(P.hj,t)
inherit(P.hr,t)
inherit(P.hn,t)
inherit(P.ho,t)
inherit(P.hp,t)
inherit(P.hl,t)
inherit(P.hq,t)
inherit(P.hk,t)
inherit(P.hu,t)
inherit(P.hv,t)
inherit(P.ht,t)
inherit(P.hs,t)
inherit(P.fv,t)
inherit(P.fw,t)
inherit(P.ft,t)
inherit(P.fu,t)
inherit(P.hW,t)
inherit(P.hZ,t)
inherit(P.hJ,t)
inherit(P.hI,t)
inherit(P.hK,t)
inherit(P.eA,t)
inherit(P.dI,t)
inherit(P.dJ,t)
inherit(W.fZ,t)
inherit(W.hh,t)
inherit(P.i_,t)
inherit(B.ir,t)
inherit(B.is,t)
inherit(B.it,t)
inherit(B.iu,t)
inherit(B.iv,t)
inherit(B.eU,t)
inherit(B.eV,t)
inherit(B.eW,t)
inherit(B.eX,t)
inherit(D.ex,t)
inherit(A.i8,t)
inherit(G.ik,t)
inherit(G.il,t)
t=H.h6
inherit(H.be,t)
inherit(H.bR,t)
t=P.b1
inherit(H.d0,t)
inherit(H.er,t)
inherit(H.fR,t)
inherit(H.fP,t)
inherit(H.dx,t)
inherit(H.fg,t)
inherit(P.c0,t)
inherit(P.bF,t)
inherit(P.as,t)
inherit(P.r,t)
inherit(P.d9,t)
inherit(P.ba,t)
inherit(P.a8,t)
inherit(P.dB,t)
t=H.fA
inherit(H.fq,t)
inherit(H.bl,t)
inherit(H.h0,P.c0)
t=H.b7
inherit(H.eJ,t)
inherit(H.cW,t)
t=H.cW
inherit(H.bC,t)
inherit(H.bB,t)
inherit(H.bD,H.bC)
inherit(H.cX,H.bD)
inherit(H.bE,H.bB)
inherit(H.cY,H.bE)
t=H.cX
inherit(H.cV,t)
inherit(H.eK,t)
t=H.cY
inherit(H.eL,t)
inherit(H.eM,t)
inherit(H.eN,t)
inherit(H.eO,t)
inherit(H.eP,t)
inherit(H.cZ,t)
inherit(H.eQ,t)
t=P.h8
inherit(P.h1,t)
inherit(P.hR,t)
inherit(P.hH,P.hV)
inherit(P.dc,H.aa)
inherit(P.fj,P.fk)
inherit(P.hy,P.fj)
inherit(P.hA,P.hy)
t=P.Q
inherit(P.K,t)
inherit(P.n,t)
t=P.as
inherit(P.d2,t)
inherit(P.ei,t)
t=W.f
inherit(W.x,t)
inherit(W.bp,t)
inherit(W.dz,t)
inherit(W.e5,t)
inherit(W.bw,t)
inherit(W.bz,t)
inherit(W.f6,t)
inherit(W.d3,t)
inherit(W.fl,t)
inherit(W.a1,t)
inherit(W.bq,t)
inherit(W.a4,t)
inherit(W.T,t)
inherit(W.br,t)
inherit(W.fU,t)
inherit(W.fY,t)
inherit(W.bM,t)
inherit(W.h_,t)
inherit(W.aR,t)
inherit(W.hO,t)
t=W.x
inherit(W.c6,t)
inherit(W.aE,t)
inherit(W.bo,t)
inherit(W.c3,t)
inherit(W.ha,t)
t=W.c6
inherit(W.k,t)
inherit(P.G,t)
t=W.k
inherit(W.dn,t)
inherit(W.dp,t)
inherit(W.du,t)
inherit(W.aD,t)
inherit(W.ea,t)
inherit(W.b4,t)
inherit(W.ej,t)
inherit(W.by,t)
inherit(W.fi,t)
inherit(W.hx,t)
inherit(W.bt,W.bp)
inherit(W.dt,W.bt)
inherit(W.bm,W.ca)
inherit(W.dF,W.c4)
inherit(W.cM,W.cp)
inherit(W.dG,W.cM)
inherit(W.Y,W.c1)
inherit(W.cK,W.cr)
inherit(W.e4,W.cK)
inherit(W.cI,W.cm)
inherit(W.bv,W.cI)
inherit(W.c9,W.bo)
inherit(W.ef,W.bw)
inherit(W.ax,W.j)
t=W.ax
inherit(W.aK,t)
inherit(W.M,t)
inherit(W.aO,t)
inherit(W.eG,W.bz)
inherit(W.cH,W.cu)
inherit(W.eH,W.cH)
inherit(W.cw,W.cg)
inherit(W.d_,W.cw)
t=W.bb
inherit(W.f0,t)
inherit(W.ff,t)
inherit(W.fM,t)
inherit(W.cG,W.ci)
inherit(W.f2,W.cG)
inherit(W.f5,W.ac)
inherit(W.bs,W.bq)
inherit(W.fm,W.bs)
inherit(W.cv,W.cj)
inherit(W.fo,W.cv)
inherit(W.cx,W.ch)
inherit(W.fC,W.cx)
inherit(W.bu,W.br)
inherit(W.fD,W.bu)
inherit(W.cy,W.ck)
inherit(W.fJ,W.cy)
inherit(W.bc,W.by)
inherit(W.aQ,W.M)
inherit(W.cJ,W.cb)
inherit(W.db,W.cJ)
inherit(W.cL,W.cs)
inherit(W.h9,W.cL)
inherit(W.hb,W.c5)
inherit(W.cN,W.cq)
inherit(W.hw,W.cN)
inherit(W.cz,W.ce)
inherit(W.dd,W.cz)
inherit(W.cO,W.co)
inherit(W.hP,W.cO)
inherit(W.cB,W.cd)
inherit(W.hQ,W.cB)
inherit(W.hf,P.bI)
inherit(W.hc,W.hf)
inherit(W.hg,P.fs)
inherit(P.F,P.hG)
t=P.G
inherit(P.at,t)
inherit(P.aC,t)
inherit(P.dM,t)
inherit(P.dN,t)
inherit(P.dO,t)
inherit(P.dP,t)
inherit(P.dQ,t)
inherit(P.dR,t)
inherit(P.dS,t)
inherit(P.dT,t)
inherit(P.dU,t)
inherit(P.dV,t)
inherit(P.dW,t)
inherit(P.dX,t)
inherit(P.dY,t)
inherit(P.dZ,t)
inherit(P.e_,t)
inherit(P.e0,t)
inherit(P.e1,t)
inherit(P.e2,t)
inherit(P.e6,t)
inherit(P.eB,t)
inherit(P.eC,t)
inherit(P.eZ,t)
inherit(P.fh,t)
inherit(P.fz,t)
inherit(P.fV,t)
inherit(P.bO,t)
inherit(P.hL,t)
inherit(P.hM,t)
inherit(P.hN,t)
t=P.at
inherit(P.dm,t)
inherit(P.e9,t)
inherit(P.a9,t)
inherit(P.eg,t)
inherit(P.fy,t)
inherit(P.d6,t)
inherit(P.fT,t)
inherit(P.cE,P.cn)
inherit(P.es,P.cE)
inherit(P.cD,P.cf)
inherit(P.eS,P.cD)
inherit(P.fa,P.a9)
inherit(P.cC,P.cc)
inherit(P.fx,P.cC)
t=P.d6
inherit(P.fB,t)
inherit(P.bK,t)
inherit(P.cA,P.cl)
inherit(P.fL,P.cA)
inherit(P.cF,P.ct)
inherit(P.fp,P.cF)
t=G.eI
inherit(G.fn,t)
inherit(G.fQ,t)
inherit(G.eF,t)
inherit(G.fc,t)
inherit(G.dv,G.fn)
inherit(B.eT,G.dv)
t=G.fQ
inherit(G.eD,t)
inherit(G.f_,t)
inherit(G.eh,G.bL)
mixin(H.bB,P.w)
mixin(H.bC,P.w)
mixin(H.bD,H.c8)
mixin(H.bE,H.c8)
mixin(W.bp,P.w)
mixin(W.bq,P.w)
mixin(W.br,P.w)
mixin(W.bs,W.z)
mixin(W.bt,W.z)
mixin(W.bu,W.z)
mixin(W.ca,W.dA)
mixin(W.cu,P.w)
mixin(W.cg,P.w)
mixin(W.cd,P.w)
mixin(W.co,P.w)
mixin(W.cp,P.w)
mixin(W.cq,P.w)
mixin(W.cr,P.w)
mixin(W.cs,P.w)
mixin(W.cb,P.w)
mixin(W.ce,P.w)
mixin(W.ch,P.w)
mixin(W.ci,P.w)
mixin(W.cj,P.w)
mixin(W.ck,P.w)
mixin(W.cm,P.w)
mixin(W.cv,W.z)
mixin(W.cw,W.z)
mixin(W.cx,W.z)
mixin(W.cH,W.z)
mixin(W.cI,W.z)
mixin(W.cG,W.z)
mixin(W.cL,W.z)
mixin(W.cM,W.z)
mixin(W.cN,W.z)
mixin(W.cO,W.z)
mixin(W.cy,W.z)
mixin(W.cz,W.z)
mixin(W.cB,W.z)
mixin(W.cJ,W.z)
mixin(W.cK,W.z)
mixin(P.cn,P.w)
mixin(P.cf,P.w)
mixin(P.cc,P.w)
mixin(P.cl,P.w)
mixin(P.cA,W.z)
mixin(P.cC,W.z)
mixin(P.cD,W.z)
mixin(P.cE,W.z)
mixin(P.ct,P.w)
mixin(P.cF,W.z)})();(function constants(){C.l=W.aD.prototype
C.m=W.c9.prototype
C.n=J.a.prototype
C.a=J.aH.prototype
C.b=J.cQ.prototype
C.o=J.cR.prototype
C.c=J.b5.prototype
C.e=J.aI.prototype
C.w=J.aJ.prototype
C.y=H.cV.prototype
C.k=J.f1.prototype
C.f=J.aP.prototype
C.R=W.aQ.prototype
C.S=W.bM.prototype
C.d=new P.hH()
C.h=new P.aF(0)
C.p=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.q=function(hooks) {
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
C.i=function(hooks) { return hooks; }

C.r=function(getTagFallback) {
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
C.t=function() {
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
C.u=function(hooks) {
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
C.v=function(hooks) {
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
C.j=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.x=makeConstList([])
C.z=H.I("mr")
C.A=H.I("ms")
C.B=H.I("e8")
C.C=H.I("mt")
C.D=H.I("mu")
C.E=H.I("jp")
C.F=H.I("mv")
C.G=H.I("js")
C.H=H.I("av")
C.I=H.I("v")
C.J=H.I("jP")
C.K=H.I("jQ")
C.L=H.I("mx")
C.M=H.I("jR")
C.N=H.I("aX")
C.O=H.I("K")
C.P=H.I("n")
C.Q=H.I("Q")})();(function staticFields(){$.jy="$cachedFunction"
$.jz="$cachedInvocation"
$.ji=null
$.jg=null
$.iQ=!1
$.iU=null
$.k_=null
$.kg=null
$.i2=null
$.ic=null
$.iV=null
$.bf=null
$.bS=null
$.bT=null
$.iR=!1
$.u=C.d
$.jm=0
$.m0=0
$.m1=0
$.iY=0
$.kc=0
$.bX=0
$.bY=0
$.mp=!1
$.k5=0
$.ki="../gradient.jpg"})();(function lazyInitializers(){lazy($,"jl","$get$jl",function(){return H.k7("_$dart_dartClosure")})
lazy($,"iJ","$get$iJ",function(){return H.k7("_$dart_js")})
lazy($,"jq","$get$jq",function(){return H.lh()})
lazy($,"jr","$get$jr",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.jm
$.jm=t+1
t="expando$key$"+t}return new P.dL(null,t,[P.n])})
lazy($,"jE","$get$jE",function(){return H.an(H.fO({
toString:function(){return"$receiver$"}}))})
lazy($,"jF","$get$jF",function(){return H.an(H.fO({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"jG","$get$jG",function(){return H.an(H.fO(null))})
lazy($,"jH","$get$jH",function(){return H.an(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"jL","$get$jL",function(){return H.an(H.fO(void 0))})
lazy($,"jM","$get$jM",function(){return H.an(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"jJ","$get$jJ",function(){return H.an(H.jK(null))})
lazy($,"jI","$get$jI",function(){return H.an(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"jO","$get$jO",function(){return H.an(H.jK(void 0))})
lazy($,"jN","$get$jN",function(){return H.an(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"iP","$get$iP",function(){return P.lE()})
lazy($,"jo","$get$jo",function(){return P.lI(null,P.av)})
lazy($,"bU","$get$bU",function(){return[]})
lazy($,"i1","$get$i1",function(){return P.jt(P.n,P.aX)})
lazy($,"bW","$get$bW",function(){return P.jt(P.v,P.aX)})
lazy($,"jC","$get$jC",function(){return new G.d8(1281,0,4294967295)})
lazy($,"je","$get$je",function(){return new G.d7(1281,1281,1281)})
lazy($,"P","$get$P",function(){return P.aL(["cBlendEquation",new G.h("","",0),"cDepthWrite",new G.h("","",0),"cDepthTest",new G.h("","",0),"cStencilFunc",new G.h("","",0),"tPosition",new G.h("vec3","",0),"tSpeed",new G.h("vec3","",0),"tForce",new G.h("vec3","",0),"aColors",new G.h("vec3","per vertex color",0),"aColorAlpha",new G.h("vec4","per vertex color",0),"aPosition",new G.h("vec3","vertex coordinates",0),"aTexUV",new G.h("vec2","texture uvs",0),"aNormal",new G.h("vec3","vertex normals",0),"aBinormal",new G.h("vec3","vertex binormals",0),"aCenter",new G.h("vec4","for wireframe",0),"aPointSize",new G.h("float","",0),"aBoneIndex",new G.h("vec4","",0),"aBoneWeight",new G.h("vec4","",0),"aTangent",new G.h("vec3","vertex tangents",0),"aBitangent",new G.h("vec3","vertex btangents",0),"iaRotation",new G.h("vec4","",0),"iaTranslation",new G.h("vec3","",0),"iaScale",new G.h("vec3","",0),"vColor",new G.h("vec3","per vertex color",0),"vTexUV",new G.h("vec2","",0),"vLightWeighting",new G.h("vec3","",0),"vNormal",new G.h("vec3","",0),"vPosition",new G.h("vec3","vertex coordinates",0),"vPositionFromLight",new G.h("vec4","delta from light",0),"vCenter",new G.h("vec4","for wireframe",0),"vDepth",new G.h("float","depth for shadowmaps",0),"uTransformationMatrix",new G.h("mat4","",0),"uModelMatrix",new G.h("mat4","",0),"uNormalMatrix",new G.h("mat3","",0),"uConvolutionMatrix",new G.h("mat3","",0),"uPerspectiveViewMatrix",new G.h("mat4","",0),"uLightPerspectiveViewMatrix",new G.h("mat4","",0),"uShadowMap",new G.h("sampler2DShadow","",0),"uTexture",new G.h("sampler2D","",0),"uTexture2",new G.h("sampler2D","",0),"uTexture3",new G.h("sampler2D","",0),"uTexture4",new G.h("sampler2D","",0),"uSpecularMap",new G.h("sampler2D","",0),"uNormalMap",new G.h("sampler2D","",0),"uBumpMap",new G.h("sampler2D","",0),"uDepthMap",new G.h("sampler2D","",0),"uCubeTexture",new G.h("samplerCube","",0),"uAnimationTable",new G.h("sampler2D","",0),"uTime",new G.h("float","time since program start in sec",0),"uCameraNear",new G.h("float","",0),"uCameraFar",new G.h("float","",0),"uFogNear",new G.h("float","",0),"uFogFar",new G.h("float","",0),"uPointSize",new G.h("float","",0),"uScale",new G.h("float","",0),"uAngle",new G.h("float","",0),"uCanvasSize",new G.h("vec2","",0),"uCenter2",new G.h("vec2","",0),"uCutOff",new G.h("float","",0),"uShininess",new G.h("float","",0),"uShadowBias",new G.h("float","",0),"uOpacity",new G.h("float","",0),"uColor",new G.h("vec3","",0),"uAmbientDiffuse",new G.h("vec3","",0),"uColorEmissive",new G.h("vec3","",0),"uColorSpecular",new G.h("vec3","",0),"uColorDiffuse",new G.h("vec3","",0),"uColorAlpha",new G.h("vec4","",0),"uColorAlpha2",new G.h("vec4","",0),"uEyePosition",new G.h("vec3","",0),"uMaterial",new G.h("mat4","",0),"uRange",new G.h("vec2","",0),"uDirection",new G.h("vec2","",0),"uBoneMatrices",new G.h("mat4","",128),"uLightDescs",new G.h("mat4","",4),"uLightCount",new G.h("float","",0),"uLightTypes",new G.h("float","",4),"uBumpScale",new G.h("float","for bump maps",0),"uNormalScale",new G.h("float","for normal maps",0)])})
lazy($,"ke","$get$ke",function(){var t=new G.b9("PerlinNoiseV",null,[],[],[],[],0,P.R())
t.bf(["aPosition"])
t.ah(["vNormal"])
t.ag(["uPerspectiveViewMatrix","uModelMatrix","uTime"])
t.cX(["vec3 mod289(vec3 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x)\n{\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec3 fade(vec3 t) {\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\n\n// Classic Perlin noise, periodic variant\nfloat pnoise(vec3 P, vec3 rep)\n{\n  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \n  return 2.2 * n_xyz;\n}\n","void main() {\n    vec3 normal = normalize( aPosition);\n    float f = 0.5 * pnoise( normal + uTime/3.0, vec3( 10.0 ) );\n    //vNormal = aPosition + f * normal;\n    //vNormal = f*normal;\n    vNormal = normal;\n    gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);\n}\n"])
return t})
lazy($,"kk","$get$kk",function(){var t=new G.b9("Textured",null,[],[],[],[],0,P.R())
t.bf(["aPosition","aTexUV"])
t.ag(["uPerspectiveViewMatrix","uModelMatrix"])
t.ah(["vTexUV"])
t.bk(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vTexUV = aTexUV;"])
return t})
lazy($,"kj","$get$kj",function(){var t=new G.b9("TexturedF",null,[],[],[],[],0,P.R())
t.ah(["vTexUV"])
t.ag(["uColor","uTexture"])
t.bk(["oFragColor = texture(uTexture, vTexUV) + vec4( uColor, 0.0 );"])
return t})
lazy($,"io","$get$io",function(){return T.jS()})
lazy($,"iZ","$get$iZ",function(){return T.jS()})})()
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
mangledGlobalNames:{n:"int",K:"double",Q:"num",v:"String",aX:"bool",av:"Null",b:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,v:true,args:[P.p],opt:[P.bH]},{func:1,ret:P.n,args:[P.E,P.E]},{func:1,ret:P.v,args:[W.f]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationTimeline:J.a,AppBannerPromptResult:J.a,BarProp:J.a,Body:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CHROMIUMValuebuffer:J.a,CircularGeofencingRegion:J.a,Client:J.a,Clients:J.a,CompositorProxy:J.a,ConsoleBase:J.a,Coordinates:J.a,Credential:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMStringMap:J.a,EffectModel:J.a,Entry:J.a,FederatedCredential:J.a,FileEntry:J.a,FileError:J.a,Stream:J.a,DOMFileSystem:J.a,FontFace:J.a,FormData:J.a,GamepadButton:J.a,Geofencing:J.a,GeofencingRegion:J.a,Geolocation:J.a,Geoposition:J.a,Headers:J.a,HMDVRDevice:J.a,IdleDeadline:J.a,ImageBitmapRenderingContext:J.a,InjectedScriptHost:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,KeyframeEffect:J.a,MediaDeviceInfo:J.a,MediaDevices:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaMetadata:J.a,MediaSession:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigatorStorageUtils:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,OffscreenCanvas:J.a,PasswordCredential:J.a,PerformanceCompositeTiming:J.a,PerformanceEntry:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformanceRenderTiming:J.a,PerformanceResourceTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PositionError:J.a,PositionSensorVRDevice:J.a,Presentation:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,Range:J.a,ReadableByteStream:J.a,ReadableByteStreamReader:J.a,ReadableStreamReader:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,Selection:J.a,ServicePort:J.a,SharedArrayBuffer:J.a,SourceInfo:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StorageInfo:J.a,StorageManager:J.a,StorageQuota:J.a,StyleMedia:J.a,StylePropertyMap:J.a,SyncManager:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRDevice:J.a,VREyeParameters:J.a,VRFieldOfView:J.a,VRPositionState:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkerConsole:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothAdvertisingData:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,NFC:J.a,PagePopupController:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WebKitCSSMatrix:J.a,Worklet:J.a,WorkletGlobalScope:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPreserveAspectRatio:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,CHROMIUMSubscribeUniform:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTDisjointTimerQuery:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bA,ArrayBufferView:H.b7,DataView:H.eJ,Float32Array:H.cV,Float64Array:H.eK,Int16Array:H.eL,Int32Array:H.eM,Int8Array:H.eN,Uint16Array:H.eO,Uint32Array:H.eP,Uint8ClampedArray:H.cZ,CanvasPixelArray:H.cZ,Uint8Array:H.eQ,HTMLBRElement:W.k,HTMLBaseElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLDivElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLKeygenElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMenuElement:W.k,HTMLMenuItemElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTableElement:W.k,HTMLTableRowElement:W.k,HTMLTableSectionElement:W.k,HTMLTemplateElement:W.k,HTMLTextAreaElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,HTMLAnchorElement:W.dn,HTMLAreaElement:W.dp,AudioTrack:W.X,AudioTrackList:W.dt,Blob:W.c1,HTMLBodyElement:W.du,HTMLCanvasElement:W.aD,CanvasRenderingContext2D:W.dw,CDATASection:W.aE,CharacterData:W.aE,Comment:W.aE,ProcessingInstruction:W.aE,Text:W.aE,CompositorWorker:W.dz,CSSCharsetRule:W.y,CSSFontFaceRule:W.y,CSSGroupingRule:W.y,CSSImportRule:W.y,CSSKeyframeRule:W.y,MozCSSKeyframeRule:W.y,WebKitCSSKeyframeRule:W.y,CSSKeyframesRule:W.y,MozCSSKeyframesRule:W.y,WebKitCSSKeyframesRule:W.y,CSSMediaRule:W.y,CSSNamespaceRule:W.y,CSSPageRule:W.y,CSSRule:W.y,CSSStyleRule:W.y,CSSSupportsRule:W.y,CSSViewportRule:W.y,CSSStyleDeclaration:W.bm,MSStyleCSSProperties:W.bm,CSS2Properties:W.bm,DataTransferItemList:W.dC,DeviceAcceleration:W.dD,XMLDocument:W.bo,Document:W.bo,DocumentFragment:W.c3,ShadowRoot:W.c3,DOMException:W.dE,DOMPoint:W.dF,DOMPointReadOnly:W.c4,DOMRectReadOnly:W.c5,DOMStringList:W.dG,DOMTokenList:W.dH,Element:W.c6,AnimationEvent:W.j,AnimationPlayerEvent:W.j,ApplicationCacheErrorEvent:W.j,AutocompleteErrorEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceLightEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,GamepadEvent:W.j,GeofencingEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RelatedEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCIceCandidateEvent:W.j,RTCPeerConnectionIceEvent:W.j,SecurityPolicyViolationEvent:W.j,ServicePortConnectEvent:W.j,ServiceWorkerMessageEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BatteryManager:W.f,CanvasCaptureMediaStreamTrack:W.f,CrossOriginServiceWorkerClient:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MessagePort:W.f,MIDIAccess:W.f,NetworkInformation:W.f,Notification:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationReceiver:W.f,PresentationRequest:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,ServicePortCollection:W.f,ServiceWorkerContainer:W.f,ServiceWorkerRegistration:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioContext:W.f,webkitAudioContext:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioSourceNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OfflineAudioContext:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.Y,FileList:W.e4,FileWriter:W.e5,HTMLFormElement:W.ea,Gamepad:W.Z,History:W.ee,HTMLCollection:W.bv,HTMLFormControlsCollection:W.bv,HTMLOptionsCollection:W.bv,HTMLDocument:W.c9,XMLHttpRequest:W.ef,XMLHttpRequestUpload:W.bw,XMLHttpRequestEventTarget:W.bw,ImageBitmap:W.b2,ImageData:W.b3,HTMLImageElement:W.b4,HTMLInputElement:W.ej,KeyboardEvent:W.aK,Location:W.ey,HTMLAudioElement:W.by,HTMLMediaElement:W.by,MediaList:W.eE,MIDIOutput:W.eG,MIDIInput:W.bz,MIDIPort:W.bz,MimeType:W.a_,MimeTypeArray:W.eH,PointerEvent:W.M,MouseEvent:W.M,DragEvent:W.M,Navigator:W.eR,Attr:W.x,Node:W.x,NodeList:W.d_,RadioNodeList:W.d_,Path2D:W.eY,Perspective:W.f0,Plugin:W.a0,PluginArray:W.f2,PositionValue:W.f5,PresentationConnection:W.f6,Rotation:W.ff,RTCDataChannel:W.d3,DataChannel:W.d3,HTMLSelectElement:W.fi,SharedWorker:W.fl,SourceBuffer:W.a1,SourceBufferList:W.fm,SpeechGrammar:W.a2,SpeechGrammarList:W.fo,SpeechRecognitionResult:W.a3,Storage:W.fr,CSSStyleSheet:W.S,StyleSheet:W.S,CalcLength:W.ac,KeywordValue:W.ac,LengthValue:W.ac,NumberValue:W.ac,SimpleLength:W.ac,TransformValue:W.ac,StyleValue:W.ac,TextTrack:W.a4,TextTrackCue:W.T,VTTCue:W.T,TextTrackCueList:W.fC,TextTrackList:W.fD,TimeRanges:W.fF,Touch:W.a5,TouchEvent:W.aO,TouchList:W.fJ,TrackDefaultList:W.fK,Matrix:W.bb,Skew:W.bb,TransformComponent:W.bb,Translation:W.fM,CompositionEvent:W.ax,FocusEvent:W.ax,TextEvent:W.ax,SVGZoomEvent:W.ax,UIEvent:W.ax,URL:W.fS,HTMLVideoElement:W.bc,VideoTrackList:W.fU,VTTRegionList:W.fX,WebSocket:W.fY,WheelEvent:W.aQ,Window:W.bM,DOMWindow:W.bM,Worker:W.h_,CompositorWorkerGlobalScope:W.aR,DedicatedWorkerGlobalScope:W.aR,ServiceWorkerGlobalScope:W.aR,SharedWorkerGlobalScope:W.aR,WorkerGlobalScope:W.aR,ClientRect:W.h7,ClientRectList:W.db,DOMRectList:W.db,CSSRuleList:W.h9,DocumentType:W.ha,DOMRect:W.hb,GamepadList:W.hw,HTMLFrameSetElement:W.hx,NamedNodeMap:W.dd,MozNamedAttrMap:W.dd,ServiceWorker:W.hO,SpeechRecognitionResultList:W.hP,StyleSheetList:W.hQ,WorkerLocation:W.hT,WorkerNavigator:W.hU,SVGAElement:P.dm,SVGAnimateElement:P.aC,SVGAnimateMotionElement:P.aC,SVGAnimateTransformElement:P.aC,SVGAnimationElement:P.aC,SVGSetElement:P.aC,SVGFEBlendElement:P.dM,SVGFEColorMatrixElement:P.dN,SVGFEComponentTransferElement:P.dO,SVGFECompositeElement:P.dP,SVGFEConvolveMatrixElement:P.dQ,SVGFEDiffuseLightingElement:P.dR,SVGFEDisplacementMapElement:P.dS,SVGFEFloodElement:P.dT,SVGFEGaussianBlurElement:P.dU,SVGFEImageElement:P.dV,SVGFEMergeElement:P.dW,SVGFEMorphologyElement:P.dX,SVGFEOffsetElement:P.dY,SVGFEPointLightElement:P.dZ,SVGFESpecularLightingElement:P.e_,SVGFESpotLightElement:P.e0,SVGFETileElement:P.e1,SVGFETurbulenceElement:P.e2,SVGFilterElement:P.e6,SVGForeignObjectElement:P.e9,SVGCircleElement:P.a9,SVGEllipseElement:P.a9,SVGLineElement:P.a9,SVGPathElement:P.a9,SVGPolygonElement:P.a9,SVGPolylineElement:P.a9,SVGGeometryElement:P.a9,SVGClipPathElement:P.at,SVGDefsElement:P.at,SVGGElement:P.at,SVGSwitchElement:P.at,SVGGraphicsElement:P.at,SVGImageElement:P.eg,SVGLength:P.ak,SVGLengthList:P.es,SVGMarkerElement:P.eB,SVGMaskElement:P.eC,SVGNumber:P.al,SVGNumberList:P.eS,SVGPatternElement:P.eZ,SVGPoint:P.f3,SVGPointList:P.f4,SVGRect:P.f9,SVGRectElement:P.fa,SVGScriptElement:P.fh,SVGStringList:P.fx,SVGDescElement:P.G,SVGDiscardElement:P.G,SVGFEDistantLightElement:P.G,SVGFEFuncAElement:P.G,SVGFEFuncBElement:P.G,SVGFEFuncGElement:P.G,SVGFEFuncRElement:P.G,SVGFEMergeNodeElement:P.G,SVGMetadataElement:P.G,SVGStopElement:P.G,SVGStyleElement:P.G,SVGTitleElement:P.G,SVGComponentTransferFunctionElement:P.G,SVGElement:P.G,SVGSVGElement:P.fy,SVGSymbolElement:P.fz,SVGTextContentElement:P.d6,SVGTextPathElement:P.fB,SVGTSpanElement:P.bK,SVGTextElement:P.bK,SVGTextPositioningElement:P.bK,SVGTransform:P.am,SVGTransformList:P.fL,SVGUseElement:P.fT,SVGViewElement:P.fV,SVGViewSpec:P.fW,SVGLinearGradientElement:P.bO,SVGRadialGradientElement:P.bO,SVGGradientElement:P.bO,SVGCursorElement:P.hL,SVGFEDropShadowElement:P.hM,SVGMPathElement:P.hN,AudioBuffer:P.ds,WebGLRenderingContext:P.fd,WebGL2RenderingContext:P.fe,WebGL2RenderingContextBase:P.hS,SQLResultSetRowList:P.fp})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,Credential:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMStringMap:true,EffectModel:true,Entry:true,FederatedCredential:true,FileEntry:true,FileError:true,Stream:true,DOMFileSystem:true,FontFace:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmapRenderingContext:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PasswordCredential:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,Range:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,ServicePort:true,SharedArrayBuffer:true,SourceInfo:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPreserveAspectRatio:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,AudioTrack:true,AudioTrackList:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,CSSCharsetRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DataTransferItemList:true,DeviceAcceleration:true,XMLDocument:true,Document:false,DocumentFragment:true,ShadowRoot:true,DOMException:true,DOMPoint:true,DOMPointReadOnly:false,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AudioDestinationNode:true,AudioNode:true,AudioSourceNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OfflineAudioContext:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,ImageBitmap:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Navigator:true,Attr:true,Node:false,NodeList:true,RadioNodeList:true,Path2D:true,Perspective:true,Plugin:true,PluginArray:true,PositionValue:true,PresentationConnection:true,Rotation:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,SharedWorker:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,CalcLength:true,KeywordValue:true,LengthValue:true,NumberValue:true,SimpleLength:true,TransformValue:true,StyleValue:false,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,Matrix:true,Skew:true,TransformComponent:false,Translation:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,SVGZoomEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,VTTRegionList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.cW.$nativeSuperclassTag="ArrayBufferView"
H.bC.$nativeSuperclassTag="ArrayBufferView"
H.bD.$nativeSuperclassTag="ArrayBufferView"
H.cX.$nativeSuperclassTag="ArrayBufferView"
H.bB.$nativeSuperclassTag="ArrayBufferView"
H.bE.$nativeSuperclassTag="ArrayBufferView"
H.cY.$nativeSuperclassTag="ArrayBufferView"
W.bp.$nativeSuperclassTag="EventTarget"
W.bt.$nativeSuperclassTag="EventTarget"
W.bq.$nativeSuperclassTag="EventTarget"
W.bs.$nativeSuperclassTag="EventTarget"
W.br.$nativeSuperclassTag="EventTarget"
W.bu.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.kh(G.kf(),b)},[])
else (function(b){H.kh(G.kf(),b)})([])})})()