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
a.prototype=t}}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){a[c]=function(){H.nm(b)}
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
return d?function(e){if(t===null)t=H.jj(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.jj(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.jj(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={iV:function iV(a){this.a=a},
j1:function(a,b,c,d){if(!!a.$isk)return new H.e1(a,b,[c,d])
return new H.cg(a,b,[c,d])},
eB:function(){return new P.aY("No element")},
md:function(){return new P.aY("Too many elements")},
mc:function(){return new P.aY("Too few elements")},
mt:function(a,b){H.cw(a,0,J.b8(a)-1,b)},
cw:function(a,b,c,d){if(c-b<=32)H.ms(a,b,c,d)
else H.mr(a,b,c,d)},
ms:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.T(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.a3(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
mr:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.b(t>32)
s=C.b.F(t+1,6)
r=a3+s
q=a4-s
p=C.b.F(a3+a4,2)
o=p-s
n=p+s
t=J.T(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.a3(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.a3(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.a3(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.a3(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.a3(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.a3(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.a3(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.a3(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.a3(a5.$2(j,i),0)){h=i
i=j
j=h}t.i(a2,r,m)
t.i(a2,p,k)
t.i(a2,q,i)
t.i(a2,o,t.h(a2,a3))
t.i(a2,n,t.h(a2,a4))
g=a3+1
f=a4-1
if(J.B(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=t.h(a2,e)
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
H.cw(a2,a3,g-2,a5)
H.cw(a2,f+2,a4,a5)
if(a0)return
if(g<r&&f>q){for(;J.B(a5.$2(t.h(a2,g),l),0);)++g
for(;J.B(a5.$2(t.h(a2,f),j),0);)--f
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
break}}H.cw(a2,g,f,a5)}else H.cw(a2,g,f,a5)},
k:function k(){},
aS:function aS(){},
ce:function ce(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cg:function cg(a,b,c){this.a=a
this.b=b
this.$ti=c},
e1:function e1(a,b,c){this.a=a
this.b=b
this.$ti=c},
eN:function eN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bh:function bh(a,b,c){this.a=a
this.b=b
this.$ti=c},
cI:function cI(a,b,c){this.a=a
this.b=b
this.$ti=c},
h9:function h9(a,b,c){this.a=a
this.b=b
this.$ti=c},
aQ:function aQ(){},
du:function(a,b){var t=a.ak(b)
if(!u.globalState.d.cy)u.globalState.f.ar()
return t},
i9:function(){++u.globalState.f.b},
iq:function(){--u.globalState.f.b
H.b(u.globalState.f.b>=0)},
l4:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.u(s).$ish)throw H.c(P.jG("Arguments to main must be a List: "+H.e(s)))
u.globalState=new H.hJ(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$k2()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.hm(P.j0(null,H.aI),0)
q=P.x
s.seC(new H.a6(0,null,null,null,null,null,0,[q,H.aZ]))
s.seF(new H.a6(0,null,null,null,null,null,0,[q,null]))
if(s.x){r=new H.hI()
s.Q=r
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.m7,r)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.mI)}if(u.globalState.x)return
o=H.kA()
u.globalState.e=o
u.globalState.z.i(0,o.a,o)
u.globalState.d=o
if(H.b4(a,{func:1,args:[P.J]}))o.ak(new H.iA(t,a))
else if(H.b4(a,{func:1,args:[P.J,P.J]}))o.ak(new H.iB(t,a))
else o.ak(a)
u.globalState.f.ar()},
mI:function(a){var t=P.ay(["command","print","msg",a])
return new H.a_(!0,P.b_(null,P.x)).K(t)},
kA:function(){var t,s
t=u.globalState.a++
s=P.x
t=new H.aZ(t,new H.a6(0,null,null,null,null,null,0,[s,H.ct]),P.az(null,null,null,s),u.createNewIsolate(),new H.ct(0,null,!1),new H.ap(H.l3()),new H.ap(H.l3()),!1,!1,[],P.az(null,null,null,null),null,null,!1,!0,P.az(null,null,null,null))
t.dv()
return t},
m9:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.ma()
return},
ma:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.c(P.r("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.c(P.r('Cannot extract URI from "'+t+'"'))},
m7:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=new H.aH(!0,[]).X(b.data)
s=J.T(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.n8(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.aH(!0,[]).X(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.aH(!0,[]).X(s.h(t,"replyTo"))
k=H.kA()
u.globalState.f.a.U(0,new H.aI(k,new H.ey(q,p,o,n,m,l),"worker-start"))
u.globalState.d=k
u.globalState.f.ar()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.lD(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.ar()
break
case"close":u.globalState.ch.aq(0,$.$get$k3().h(0,a))
a.terminate()
u.globalState.f.ar()
break
case"log":H.m6(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
j=P.ay(["command","print","msg",t])
j=new H.a_(!0,P.b_(null,P.x)).K(j)
s.toString
self.postMessage(j)}else P.ag(s.h(t,"msg"))
break
case"error":throw H.c(s.h(t,"msg"))}},
m6:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.ay(["command","log","msg",a])
r=new H.a_(!0,P.b_(null,P.x)).K(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.K(q)
t=H.al(q)
s=P.c0(t)
throw H.c(s)}},
m8:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.ka=$.ka+("_"+s)
$.kb=$.kb+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.J(0,["spawned",new H.b0(s,r),q,t.r])
r=new H.ez(t,d,a,c,b)
if(e){t.bN(q,q)
u.globalState.f.a.U(0,new H.aI(t,r,"start isolate"))}else r.$0()},
mu:function(a,b){var t=new H.fS(!0,!1,null,0)
t.dl(a,b)
return t},
mJ:function(a){return new H.aH(!0,[]).X(new H.a_(!1,P.b_(null,P.x)).K(a))},
iA:function iA(a,b){this.a=a
this.b=b},
iB:function iB(a,b){this.a=a
this.b=b},
hJ:function hJ(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i
_.z=j
_.Q=k
_.ch=l
_.cx=m},
aZ:function aZ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i
_.z=j
_.Q=k
_.ch=l
_.cx=m
_.cy=n
_.db=o
_.dx=p},
hD:function hD(a,b){this.a=a
this.b=b},
hm:function hm(a,b){this.a=a
this.b=b},
hn:function hn(a){this.a=a},
aI:function aI(a,b,c){this.a=a
this.b=b
this.c=c},
hI:function hI(){},
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
hh:function hh(){},
b0:function b0(a,b){this.b=a
this.a=b},
hK:function hK(a,b){this.a=a
this.b=b},
bG:function bG(a,b,c){this.b=a
this.c=b
this.a=c},
ct:function ct(a,b,c){this.a=a
this.b=b
this.c=c},
fS:function fS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fT:function fT(a,b){this.a=a
this.b=b},
fU:function fU(a,b){this.a=a
this.b=b},
ap:function ap(a){this.a=a},
a_:function a_(a,b){this.a=a
this.b=b},
aH:function aH(a,b){this.a=a
this.b=b},
n2:function(a){return u.types[a]},
na:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.u(a).$isq},
e:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.b9(a)
if(typeof t!=="string")throw H.c(H.O(a))
return t},
mo:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t=J.au(t)
s=t[0]
r=t[1]
return new H.fm(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aA:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
bl:function(a){var t,s,r,q,p,o,n,m,l
t=J.u(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.K||!!J.u(a).$isaF){p=C.y(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.i.aO(q,0)===36)q=C.i.cZ(q,1)
l=H.dv(H.ib(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+l,u.mangledGlobalNames)},
L:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mm:function(a){return a.b?H.L(a).getUTCFullYear()+0:H.L(a).getFullYear()+0},
mk:function(a){return a.b?H.L(a).getUTCMonth()+1:H.L(a).getMonth()+1},
mg:function(a){return a.b?H.L(a).getUTCDate()+0:H.L(a).getDate()+0},
mh:function(a){return a.b?H.L(a).getUTCHours()+0:H.L(a).getHours()+0},
mj:function(a){return a.b?H.L(a).getUTCMinutes()+0:H.L(a).getMinutes()+0},
ml:function(a){return a.b?H.L(a).getUTCSeconds()+0:H.L(a).getSeconds()+0},
mi:function(a){return a.b?H.L(a).getUTCMilliseconds()+0:H.L(a).getMilliseconds()+0},
k9:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.c(H.O(a))
return a[b]},
b3:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a4(!0,b,"index",null)
t=J.b8(a)
if(b<0||C.b.cJ(b,t))return P.y(b,a,"index",null,t)
return P.fj(b,"index",null)},
O:function(a){return new P.a4(!0,a,null,null)},
c:function(a){var t
if(a==null)a=new P.cq()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.l5})
t.name=""}else t.toString=H.l5
return t},
l5:function(){return J.b9(this.dartException)},
G:function(a){throw H.c(a)},
P:function(a){throw H.c(P.ah(a))},
a9:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.fY(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
fZ:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
km:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
k8:function(a,b){return new H.f4(a,b==null?null:b.method)},
iX:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.eE(a,s,t?null:b.receiver)},
K:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.iC(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.b_(r,16)&8191)===10)switch(q){case 438:return t.$1(H.iX(H.e(s)+" (Error "+q+")",null))
case 445:case 5007:return t.$1(H.k8(H.e(s)+" (Error "+q+")",null))}}if(a instanceof TypeError){p=$.$get$kg()
o=$.$get$kh()
n=$.$get$ki()
m=$.$get$kj()
l=$.$get$kn()
k=$.$get$ko()
j=$.$get$kl()
$.$get$kk()
i=$.$get$kq()
h=$.$get$kp()
g=p.N(s)
if(g!=null)return t.$1(H.iX(s,g))
else{g=o.N(s)
if(g!=null){g.method="call"
return t.$1(H.iX(s,g))}else{g=n.N(s)
if(g==null){g=m.N(s)
if(g==null){g=l.N(s)
if(g==null){g=k.N(s)
if(g==null){g=j.N(s)
if(g==null){g=m.N(s)
if(g==null){g=i.N(s)
if(g==null){g=h.N(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return t.$1(H.k8(s,g))}}return t.$1(new H.h2(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.cz()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.a4(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.cz()
return a},
al:function(a){var t
if(a==null)return new H.d8(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.d8(a,null)},
nf:function(a){if(a==null||typeof a!='object')return J.b7(a)
else return H.aA(a)},
n0:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=a.length
for(r=0;r<s;){q=r+1
H.b(t)
p=a[r]
r=q+1
H.b(t)
b.i(0,p,a[q])}return b},
n9:function(a,b,c,d,e,f,g){switch(c){case 0:return H.du(b,new H.ik(a))
case 1:return H.du(b,new H.il(a,d))
case 2:return H.du(b,new H.im(a,d,e))
case 3:return H.du(b,new H.io(a,d,e,f))
case 4:return H.du(b,new H.ip(a,d,e,f,g))}throw H.c(P.c0("Unsupported number of arguments for wrapped closure"))},
bK:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.n9)
a.$identity=t
return t},
lU:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.u(c).$ish){t.$reflectionInfo=c
r=H.mo(t).r}else r=c
q=d?Object.create(new H.fA().constructor.prototype):Object.create(new H.ba(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.jO(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.n2,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.jL:H.iO
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.c("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.jO(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
lR:function(a,b,c,d){var t=H.iO
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
jO:function(a,b,c){var t,s,r,q
if(c)return H.lT(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.lR(s,b==null?r!=null:b!==r,t,b)
return q},
lS:function(a,b,c,d){var t,s
t=H.iO
s=H.jL
switch(b?-1:a){case 0:throw H.c(H.mp("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
lT:function(a,b){var t,s,r,q
t=$.jM
if(t==null){t=H.jJ("self")
$.jM=t}t=$.jK
if(t==null){t=H.jJ("receiver")
$.jK=t}s=b.$stubName
r=b.length
q=a[s]
t=H.lS(r,b==null?q!=null:b!==q,s,b)
return t},
jj:function(a,b,c,d,e,f){var t,s
t=J.au(b)
s=!!J.u(c).$ish?J.au(c):c
return H.lU(a,t,s,!!d,e,f)},
iO:function(a){return a.a},
jL:function(a){return a.c},
jJ:function(a){var t,s,r,q,p
t=new H.ba("self","target","receiver","name")
s=J.au(Object.getOwnPropertyNames(t))
for(r=s.length,q=0;q<r;++q){p=s[q]
if(t[p]===a)return p}},
nC:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.aa(a,"String"))},
nx:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aa(a,"double"))},
nB:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aa(a,"num"))},
mV:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.aa(a,"bool"))},
n8:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.aa(a,"int"))},
nh:function(a,b){throw H.c(H.aa(a,b.substring(3)))},
ng:function(a,b){var t=J.T(b)
throw H.c(H.jN(a,t.bm(b,3,t.gj(b))))},
jn:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.u(a)[b])return a
H.nh(a,b)},
an:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.u(a)[b]
else t=!0
if(t)return a
H.ng(a,b)},
nA:function(a){if(a==null)return a
if(!!J.u(a).$ish)return a
throw H.c(H.aa(a,"List"))},
jk:function(a){var t=J.u(a)
return"$S" in t?t.$S():null},
b4:function(a,b){var t,s
if(a==null)return!1
t=H.jk(a)
if(t==null)s=!1
else s=H.kY(t,b)
return s},
ny:function(a,b){var t,s
if(a==null)return a
if($.jg)return a
$.jg=!0
try{if(H.b4(a,b))return a
t=H.iu(b,null)
s=H.aa(a,t)
throw H.c(s)}finally{$.jg=!1}},
aa:function(a,b){return new H.h_("TypeError: "+H.e(P.c_(a))+": type '"+H.kG(a)+"' is not a subtype of type '"+b+"'")},
jN:function(a,b){return new H.dI("CastError: "+H.e(P.c_(a))+": type '"+H.kG(a)+"' is not a subtype of type '"+b+"'")},
kG:function(a){var t
if(a instanceof H.ar){t=H.jk(a)
if(t!=null)return H.iu(t,null)
return"Closure"}return H.bl(a)},
V:function(a){if(!0===a)return!1
if(!!J.u(a).$isiT)a=a.$0()
if(typeof a==="boolean")return!a
throw H.c(H.aa(a,"bool"))},
a0:function(a){throw H.c(new H.hb(a))},
b:function(a){if(H.V(a))throw H.c(P.lQ(null))},
nm:function(a){throw H.c(new P.dT(a))},
mp:function(a){return new H.fr(a)},
l3:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
kW:function(a){return u.getIsolateTag(a)},
F:function(a){return new H.ak(a,null)},
A:function(a,b){H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
ib:function(a){if(a==null)return
return a.$ti},
kX:function(a,b){return H.jr(a["$as"+H.e(b)],H.ib(a))},
a1:function(a,b,c){var t,s
t=H.kX(a,b)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
am:function(a,b){var t,s
t=H.ib(a)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
iu:function(a,b){var t=H.b5(a,b)
return t},
b5:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.b(!0)
H.b(!0)
return a[0].name+H.dv(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.e(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.b5(t,b)
return H.mK(a,b)}return"unknown-reified-type"},
mK:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.b5(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.b5(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.b5(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.n_(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.b5(l[j],b)+(" "+H.e(j))}q+="}"}return"("+q+") => "+t},
dv:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=new P.bn("")
for(r=b,q=!0,p=!0;H.b(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.b(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.b5(o,c)}return p?"":"<"+s.k(0)+">"},
ic:function(a){var t,s,r
if(a instanceof H.ar){t=H.jk(a)
if(t!=null)return H.iu(t,null)}s=J.u(a).constructor.name
if(a==null)return s
r=H.dv(a.$ti,0,null)
return s+r},
jr:function(a,b){if(a==null)return b
H.b(typeof a=="function")
H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.jo(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.jo(a,null,b)
return b},
i4:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.ib(a)
s=J.u(a)
if(s[b]==null)return!1
return H.kM(H.jr(s[d],t),c)},
dw:function(a,b,c,d){var t,s
if(a==null)return a
t=H.i4(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.dv(c,0,null)
throw H.c(H.jN(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
nu:function(a,b,c,d){var t,s
if(a==null)return a
t=H.i4(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.dv(c,0,null)
throw H.c(H.aa(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
kM:function(a,b){var t,s,r,q,p
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
if(!H.U(r,b[p]))return!1}return!0},
nv:function(a,b,c){return H.jo(a,b,H.kX(b,c))},
U:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.name==="J")return!0
if('func' in b)return H.kY(a,b)
if('func' in a)return b.name==="iT"||b.name==="C"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.b(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.b(!0)
q=b[0]}else q=b
if(q!==s){p=H.iu(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.kM(H.jr(o,t),r)},
kL:function(a,b,c){var t,s,r,q,p,o,n
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
if(!(H.U(o,n)||H.U(n,o)))return!1}return!0},
mR:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
H.b(typeof a=='object')
H.b(typeof b=='object')
t=J.au(Object.getOwnPropertyNames(b))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.U(p,o)||H.U(o,p)))return!1}return!0},
kY:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.b('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.U(t,s)||H.U(s,t)))return!1}r=a.args
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
if(n===m){if(!H.kL(r,q,!1))return!1
if(!H.kL(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.b(j)
g=r[h]
H.b(i)
f=q[h]
if(!(H.U(g,f)||H.U(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=q[e]
if(!(H.U(g,f)||H.U(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=o[e]
if(!(H.U(g,f)||H.U(f,g)))return!1}}return H.mR(a.named,b.named)},
jo:function(a,b,c){H.b(typeof a=="function")
H.b(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
nD:function(a){var t=$.jl
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
nz:function(a){return H.aA(a)},
nw:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nb:function(a){var t,s,r,q,p,o
H.b(!(a instanceof P.C))
t=$.jl.$1(a)
s=$.i8[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.ij[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.kI.$2(a,t)
if(t!=null){s=$.i8[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.ij[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.is(r)
$.i8[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.ij[t]=r
return r}if(p==="-"){o=H.is(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.l0(a,r)
if(p==="*")throw H.c(P.kv(t))
if(u.leafTags[t]===true){o=H.is(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.l0(a,r)},
l0:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.jp(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
is:function(a){return J.jp(a,!1,null,!!a.$isq)},
nd:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return H.is(t)
else return J.jp(t,c,null,null)},
n6:function(){if(!0===$.jm)return
$.jm=!0
H.n7()},
n7:function(){var t,s,r,q,p,o,n,m
$.i8=Object.create(null)
$.ij=Object.create(null)
H.n5()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.l2.$1(p)
if(o!=null){n=H.nd(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
n5:function(){var t,s,r,q,p,o,n
t=C.P()
t=H.b2(C.M,H.b2(C.R,H.b2(C.x,H.b2(C.x,H.b2(C.Q,H.b2(C.N,H.b2(C.O(C.y),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.jl=new H.ig(p)
$.kI=new H.ih(o)
$.l2=new H.ii(n)},
b2:function(a,b){return a(b)||b},
nl:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
fm:function fm(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fY:function fY(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
f4:function f4(a,b){this.a=a
this.b=b},
eE:function eE(a,b,c){this.a=a
this.b=b
this.c=c},
h2:function h2(a){this.a=a},
iC:function iC(a){this.a=a},
d8:function d8(a,b){this.a=a
this.b=b},
ik:function ik(a){this.a=a},
il:function il(a,b){this.a=a
this.b=b},
im:function im(a,b,c){this.a=a
this.b=b
this.c=c},
io:function io(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ip:function ip(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ar:function ar(){},
fN:function fN(){},
fA:function fA(){},
ba:function ba(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h_:function h_(a){this.a=a},
dI:function dI(a){this.a=a},
fr:function fr(a){this.a=a},
hb:function hb(a){this.a=a},
ak:function ak(a,b){this.a=a
this.b=b},
a6:function a6(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
eD:function eD(a){this.a=a},
eG:function eG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eH:function eH(a,b){this.a=a
this.$ti=b},
eI:function eI(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ig:function ig(a){this.a=a},
ih:function ih(a){this.a=a},
ii:function ii(a){this.a=a},
i0:function(a){var t,s,r
if(!!J.u(a).$iso)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
ae:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.b3(b,a))},
bj:function bj(){},
aV:function aV(){},
eV:function eV(){},
cj:function cj(){},
ck:function ck(){},
cl:function cl(){},
ci:function ci(){},
eW:function eW(){},
eX:function eX(){},
eY:function eY(){},
eZ:function eZ(){},
f_:function f_(){},
f0:function f0(){},
cm:function cm(){},
f1:function f1(){},
bx:function bx(){},
by:function by(){},
bz:function bz(){},
bA:function bA(){},
n_:function(a){return J.au(H.A(a?Object.keys(a):[],[null]))},
it:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
u:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cb.prototype
return J.ca.prototype}if(typeof a=="string")return J.av.prototype
if(a==null)return J.cc.prototype
if(typeof a=="boolean")return J.eC.prototype
if(a.constructor==Array)return J.at.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aw.prototype
return a}if(a instanceof P.C)return a
return J.ia(a)},
jp:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ia:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.jm==null){H.n6()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.c(P.kv("Return interceptor for "+H.e(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$iW()]
if(p!=null)return p
p=H.nb(a)
if(p!=null)return p
if(typeof a=="function")return C.S
s=Object.getPrototypeOf(a)
if(s==null)return C.A
if(s===Object.prototype)return C.A
if(typeof q=="function"){Object.defineProperty(q,$.$get$iW(),{value:C.t,enumerable:false,writable:true,configurable:true})
return C.t}return C.t},
au:function(a){a.fixed$length=Array
return a},
T:function(a){if(typeof a=="string")return J.av.prototype
if(a==null)return a
if(a.constructor==Array)return J.at.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aw.prototype
return a}if(a instanceof P.C)return a
return J.ia(a)},
bM:function(a){if(a==null)return a
if(a.constructor==Array)return J.at.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aw.prototype
return a}if(a instanceof P.C)return a
return J.ia(a)},
kU:function(a){if(typeof a=="number")return J.aR.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.aF.prototype
return a},
n1:function(a){if(typeof a=="number")return J.aR.prototype
if(typeof a=="string")return J.av.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.aF.prototype
return a},
kV:function(a){if(typeof a=="string")return J.av.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.aF.prototype
return a},
i:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aw.prototype
return a}if(a instanceof P.C)return a
return J.ia(a)},
B:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.u(a).w(a,b)},
a3:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.kU(a).aG(a,b)},
l6:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kU(a).aH(a,b)},
b6:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.na(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.T(a).h(a,b)},
l7:function(a,b,c,d){return J.i(a).dB(a,b,c,d)},
js:function(a,b){return J.kV(a).aO(a,b)},
iD:function(a,b){return J.i(a).dR(a,b)},
l8:function(a,b,c){return J.i(a).dS(a,b,c)},
jt:function(a,b){return J.i(a).bM(a,b)},
iE:function(a,b){return J.i(a).P(a,b)},
ju:function(a,b,c){return J.i(a).bP(a,b,c)},
l9:function(a,b){return J.i(a).e5(a,b)},
iF:function(a,b,c){return J.i(a).bQ(a,b,c)},
iG:function(a,b,c){return J.i(a).bR(a,b,c)},
dx:function(a,b,c){return J.i(a).bS(a,b,c)},
dy:function(a,b){return J.i(a).e8(a,b)},
la:function(a,b){return J.i(a).bT(a,b)},
lb:function(a,b,c){return J.i(a).bU(a,b,c)},
jv:function(a,b,c,d){return J.i(a).bV(a,b,c,d)},
lc:function(a,b){return J.i(a).bW(a,b)},
ld:function(a,b){return J.bM(a).bX(a,b)},
le:function(a,b,c,d,e){return J.i(a).bY(a,b,c,d,e)},
lf:function(a,b){return J.n1(a).R(a,b)},
iH:function(a,b,c){return J.T(a).ec(a,b,c)},
iI:function(a){return J.i(a).c_(a)},
lg:function(a){return J.i(a).c0(a)},
lh:function(a){return J.i(a).c1(a)},
li:function(a){return J.i(a).c3(a)},
lj:function(a){return J.i(a).eh(a)},
lk:function(a,b){return J.i(a).c5(a,b)},
iJ:function(a,b){return J.i(a).c6(a,b)},
ll:function(a,b,c,d){return J.i(a).c7(a,b,c,d)},
lm:function(a,b,c,d,e){return J.i(a).eo(a,b,c,d,e)},
ln:function(a,b,c,d,e){return J.i(a).c8(a,b,c,d,e)},
lo:function(a,b,c,d,e,f){return J.i(a).ep(a,b,c,d,e,f)},
lp:function(a,b){return J.bM(a).t(a,b)},
bP:function(a,b){return J.i(a).c9(a,b)},
lq:function(a,b){return J.i(a).ca(a,b)},
lr:function(a){return J.i(a).eq(a)},
jw:function(a,b){return J.bM(a).al(a,b)},
jx:function(a,b,c,d,e,f){return J.i(a).cc(a,b,c,d,e,f)},
ls:function(a){return J.i(a).ge4(a)},
b7:function(a){return J.u(a).gu(a)},
aK:function(a){return J.bM(a).gv(a)},
b8:function(a){return J.T(a).gj(a)},
lt:function(a){return J.i(a).gb6(a)},
lu:function(a){return J.u(a).gA(a)},
lv:function(a){return J.i(a).geP(a)},
lw:function(a){return J.i(a).gaD(a)},
iK:function(a){return J.i(a).gm(a)},
iL:function(a){return J.i(a).gn(a)},
jy:function(a){return J.i(a).gD(a)},
iM:function(a,b){return J.i(a).a6(a,b)},
lx:function(a){return J.i(a).aF(a)},
ly:function(a){return J.i(a).ba(a)},
lz:function(a,b){return J.i(a).bb(a,b)},
lA:function(a,b,c){return J.i(a).bc(a,b,c)},
jz:function(a,b,c){return J.i(a).bf(a,b,c)},
lB:function(a,b){return J.i(a).ce(a,b)},
lC:function(a,b){return J.bM(a).cg(a,b)},
jA:function(a){return J.bM(a).eJ(a)},
lD:function(a,b){return J.i(a).J(a,b)},
lE:function(a,b,c,d){return J.i(a).bk(a,b,c,d)},
lF:function(a,b,c,d){return J.i(a).cl(a,b,c,d)},
dz:function(a,b,c,d){return J.i(a).cm(a,b,c,d)},
lG:function(a,b,c,d,e,f){return J.i(a).eQ(a,b,c,d,e,f)},
lH:function(a){return J.kV(a).eT(a)},
b9:function(a){return J.u(a).k(a)},
lI:function(a,b,c,d){return J.i(a).eV(a,b,c,d)},
lJ:function(a,b,c){return J.i(a).cq(a,b,c)},
lK:function(a,b,c){return J.i(a).cr(a,b,c)},
iN:function(a,b,c){return J.i(a).cs(a,b,c)},
lL:function(a,b,c){return J.i(a).ct(a,b,c)},
jB:function(a,b,c){return J.i(a).cu(a,b,c)},
jC:function(a,b,c){return J.i(a).cv(a,b,c)},
jD:function(a,b,c){return J.i(a).cw(a,b,c)},
jE:function(a,b,c,d){return J.i(a).cz(a,b,c,d)},
jF:function(a,b,c,d){return J.i(a).cA(a,b,c,d)},
lM:function(a,b){return J.i(a).cC(a,b)},
lN:function(a,b,c){return J.i(a).eW(a,b,c)},
lO:function(a,b,c,d,e,f,g){return J.i(a).cE(a,b,c,d,e,f,g)},
lP:function(a,b,c,d,e){return J.i(a).cG(a,b,c,d,e)},
a:function a(){},
eC:function eC(){},
cc:function cc(){},
bg:function bg(){},
fe:function fe(){},
aF:function aF(){},
aw:function aw(){},
at:function at(a){this.$ti=a},
iU:function iU(a){this.$ti=a},
dD:function dD(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aR:function aR(){},
cb:function cb(){},
ca:function ca(){},
av:function av(){}},P={
mz:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.mS()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.bK(new P.hd(t),1)).observe(s,{childList:true})
return new P.hc(t,s,r)}else if(self.setImmediate!=null)return P.mT()
return P.mU()},
mA:function(a){H.i9()
self.scheduleImmediate(H.bK(new P.he(a),0))},
mB:function(a){H.i9()
self.setImmediate(H.bK(new P.hf(a),0))},
mC:function(a){P.j6(C.v,a)},
j6:function(a,b){var t=C.b.F(a.a,1000)
return H.mu(t<0?0:t,b)},
mN:function(a,b){if(H.b4(a,{func:1,args:[P.J,P.J]})){b.toString
return a}else{b.toString
return a}},
mE:function(a,b){var t,s,r
H.b(b.a<4)
H.b(!(a instanceof P.ad))
H.b(b.a===0)
b.a=1
try{a.co(new P.ht(b),new P.hu(b))}catch(r){t=H.K(r)
s=H.al(r)
P.ni(new P.hv(b,t,s))}},
kx:function(a,b){var t,s,r
H.b(b.a<=1)
for(;t=a.a,s=t===2,s;){H.b(s)
a=a.c}if(t>=4){r=b.aY()
b.aN(a)
P.bt(b,r)}else{r=b.c
H.b(b.a<=1)
b.a=2
b.c=a
a.bG(r)}},
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
P.i1(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
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
P.i1(null,null,p,o,s)
return}s=$.z
if(s==null?l!=null:s!==l){H.b(l!=null)
s=$.z
H.b(l==null?s!=null:l!==s)
j=$.z
$.z=l
i=j}else i=null
s=b.c
if(s===8)new P.hz(t,r,b,q).$0()
else if(p){if((s&1)!==0)new P.hy(r,b,m).$0()}else if((s&2)!==0)new P.hx(t,r,b).$0()
if(i!=null){H.b(!0)
$.z=i}s=r.b
if(!!J.u(s).$ises){if(s.a>=4){H.b(o.a<4)
h=o.c
o.c=null
b=o.az(h)
H.b(o.a<4)
H.b(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.kx(s,o)
return}}g=b.b
H.b(g.a<4)
h=g.c
g.c=null
b=g.az(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.b(!o)
g.a=4
g.c=p}else{H.b(!o)
g.a=8
g.c=p}t.a=g
s=g}},
mM:function(){var t,s
for(;t=$.b1,t!=null;){$.bI=null
s=t.b
$.b1=s
if(s==null)$.bH=null
t.a.$0()}},
mQ:function(){$.jh=!0
try{P.mM()}finally{$.bI=null
$.jh=!1
if($.b1!=null)$.$get$jc().$1(P.kN())}},
kF:function(a){var t=new P.cJ(a,null)
if($.b1==null){$.bH=t
$.b1=t
if(!$.jh)$.$get$jc().$1(P.kN())}else{$.bH.b=t
$.bH=t}},
mP:function(a){var t,s,r
t=$.b1
if(t==null){P.kF(a)
$.bI=$.bH
return}s=new P.cJ(a,null)
r=$.bI
if(r==null){s.b=t
$.bI=s
$.b1=s}else{s.b=r.b
r.b=s
$.bI=s
if(s.b==null)$.bH=s}},
ni:function(a){var t=$.z
if(C.f===t){P.i3(null,null,C.f,a)
return}t.toString
P.i3(null,null,t,t.b2(a))},
mv:function(a,b){var t=$.z
if(t===C.f){t.toString
return P.j6(a,b)}return P.j6(a,t.b2(b))},
jb:function(a){var t,s
H.b(a!=null)
t=$.z
H.b(a==null?t!=null:a!==t)
s=$.z
$.z=a
return s},
i1:function(a,b,c,d,e){var t={}
t.a=d
P.mP(new P.i2(t,e))},
kD:function(a,b,c,d){var t,s
if($.z===c)return d.$0()
t=P.jb(c)
try{s=d.$0()
return s}finally{s=t
H.b(s!=null)
$.z=s}},
kE:function(a,b,c,d,e){var t,s
if($.z===c)return d.$1(e)
t=P.jb(c)
try{s=d.$1(e)
return s}finally{s=t
H.b(s!=null)
$.z=s}},
mO:function(a,b,c,d,e,f){var t,s
if($.z===c)return d.$2(e,f)
t=P.jb(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.b(s!=null)
$.z=s}},
i3:function(a,b,c,d){var t=C.f!==c
if(t)d=!(!t||!1)?c.b2(d):c.e6(d)
P.kF(d)},
hd:function hd(a){this.a=a},
hc:function hc(a,b,c){this.a=a
this.b=b
this.c=c},
he:function he(a){this.a=a},
hf:function hf(a){this.a=a},
iP:function iP(){},
hi:function hi(){},
hW:function hW(a,b){this.a=a
this.$ti=b},
cR:function cR(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
ad:function ad(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hs:function hs(a,b){this.a=a
this.b=b},
hw:function hw(a,b){this.a=a
this.b=b},
ht:function ht(a){this.a=a},
hu:function hu(a){this.a=a},
hv:function hv(a,b,c){this.a=a
this.b=b
this.c=c},
hz:function hz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hA:function hA(a){this.a=a},
hy:function hy(a,b,c){this.a=a
this.b=b
this.c=c},
hx:function hx(a,b,c){this.a=a
this.b=b
this.c=c},
cJ:function cJ(a,b){this.a=a
this.b=b},
fF:function fF(){},
fH:function fH(a){this.a=a},
fI:function fI(a,b){this.a=a
this.b=b},
fG:function fG(){},
j5:function j5(){},
aL:function aL(a,b){this.a=a
this.b=b},
i_:function i_(){},
i2:function i2(a,b){this.a=a
this.b=b},
hM:function hM(){},
hO:function hO(a,b){this.a=a
this.b=b},
hN:function hN(a,b){this.a=a
this.b=b},
hP:function hP(a,b){this.a=a
this.b=b},
k5:function(a,b){return new H.a6(0,null,null,null,null,null,0,[a,b])},
E:function(){return new H.a6(0,null,null,null,null,null,0,[null,null])},
ay:function(a){return H.n0(a,new H.a6(0,null,null,null,null,null,0,[null,null]))},
b_:function(a,b){return new P.hG(0,null,null,null,null,null,0,[a,b])},
az:function(a,b,c,d){return new P.hE(0,null,null,null,null,null,0,[d])},
jf:function(){var t=Object.create(null)
H.b(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
mb:function(a,b,c){var t,s
if(P.ji(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$bJ()
C.a.l(s,a)
try{P.mL(a,t)}finally{H.b(C.a.gb4(s)===a)
s.pop()}s=P.ke(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eA:function(a,b,c){var t,s,r
if(P.ji(a))return b+"..."+c
t=new P.bn(b)
s=$.$get$bJ()
C.a.l(s,a)
try{r=t
r.a=P.ke(r.ga_(),a,", ")}finally{H.b(C.a.gb4(s)===a)
s.pop()}s=t
s.a=s.ga_()+c
s=t.ga_()
return s.charCodeAt(0)==0?s:s},
ji:function(a){var t,s
for(t=0;s=$.$get$bJ(),t<s.length;++t)if(a===s[t])return!0
return!1},
mL:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gv(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.p())return
q=H.e(t.gq(t))
C.a.l(b,q)
s+=q.length+2;++r}if(!t.p()){if(r<=5)return
p=b.pop()
o=b.pop()}else{n=t.gq(t);++r
if(!t.p()){if(r<=4){C.a.l(b,H.e(n))
return}p=H.e(n)
o=b.pop()
s+=p.length+2}else{m=t.gq(t);++r
H.b(r<100)
for(;t.p();n=m,m=l){l=t.gq(t);++r
if(r>100){while(!0){if(!(s>75&&r>3))break
s-=b.pop().length+2;--r}C.a.l(b,"...")
return}}o=H.e(n)
p=H.e(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)C.a.l(b,k)
C.a.l(b,o)
C.a.l(b,p)},
j_:function(a,b){var t,s
t=P.az(null,null,null,b)
for(s=J.aK(a);s.p();)t.l(0,s.gq(s))
return t},
k7:function(a){var t,s,r
t={}
if(P.ji(a))return"{...}"
s=new P.bn("")
try{C.a.l($.$get$bJ(),a)
r=s
r.a=r.ga_()+"{"
t.a=!0
J.jw(a,new P.eM(t,s))
t=s
t.a=t.ga_()+"}"}finally{t=$.$get$bJ()
H.b(C.a.gb4(t)===a)
t.pop()}t=s.ga_()
return t.charCodeAt(0)==0?t:t},
j0:function(a,b){var t=new P.eJ(null,0,0,0,[b])
t.df(a,b)
return t},
hG:function hG(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hE:function hE(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hF:function hF(a,b,c){this.a=a
this.b=b
this.c=c},
bv:function bv(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hC:function hC(){},
iZ:function iZ(){},
cd:function cd(){},
l:function l(){},
cf:function cf(){},
eM:function eM(a,b){this.a=a
this.b=b},
aU:function aU(){},
eJ:function eJ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hH:function hH(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fu:function fu(){},
ft:function ft(){},
bw:function bw(){},
m1:function(a){var t=J.u(a)
if(!!t.$isar)return t.k(a)
return"Instance of '"+H.bl(a)+"'"},
k6:function(a,b,c){var t,s
t=H.A([],[c])
for(s=J.aK(a);s.p();)C.a.l(t,s.gq(s))
return t},
ke:function(a,b,c){var t=J.aK(b)
if(!t.p())return a
if(c.length===0){do a+=H.e(t.gq(t))
while(t.p())}else{a+=H.e(t.gq(t))
for(;t.p();)a=a+c+H.e(t.gq(t))}return a},
lV:function(a,b){return J.lf(a,b)},
lW:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+t
if(t>=10)return s+"00"+t
return s+"000"+t},
lX:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bU:function(a){if(a>=10)return""+a
return"0"+a},
lZ:function(a,b,c,d,e,f){return new P.as(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
c_:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.b9(a)
if(typeof a==="string")return JSON.stringify(a)
return P.m1(a)},
lQ:function(a){return new P.bR(a)},
jG:function(a){return new P.a4(!1,null,null,a)},
jH:function(a,b,c){return new P.a4(!0,a,b,c)},
fj:function(a,b,c){return new P.cs(null,null,!0,a,b,"Value not in range")},
aB:function(a,b,c,d,e){return new P.cs(b,c,!0,a,d,"Invalid value")},
kc:function(a,b,c,d,e,f){if(0>a||a>c)throw H.c(P.aB(a,0,c,"start",f))
if(a>b||b>c)throw H.c(P.aB(b,a,c,"end",f))
return b},
y:function(a,b,c,d,e){var t=e!=null?e:J.b8(b)
return new P.ex(b,t,!0,a,c,"Index out of range")},
r:function(a){return new P.h3(a)},
kv:function(a){return new P.h1(a)},
j4:function(a){return new P.aY(a)},
ah:function(a){return new P.dK(a)},
c0:function(a){return new P.hr(a)},
ag:function(a){H.it(H.e(a))},
af:function af(){},
D:function D(){},
bb:function bb(a,b){this.a=a
this.b=b},
S:function S(){},
as:function as(a){this.a=a},
e_:function e_(){},
e0:function e0(){},
aP:function aP(){},
bR:function bR(a){this.a=a},
cq:function cq(){},
a4:function a4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cs:function cs(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ex:function ex(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
h3:function h3(a){this.a=a},
h1:function h1(a){this.a=a},
aY:function aY(a){this.a=a},
dK:function dK(a){this.a=a},
cz:function cz(){},
dT:function dT(a){this.a=a},
iR:function iR(){},
hr:function hr(a){this.a=a},
e3:function e3(a,b,c){this.a=a
this.b=b
this.$ti=c},
x:function x(){},
Q:function Q(){},
c9:function c9(){},
h:function h(){},
aT:function aT(){},
J:function J(){},
a2:function a2(){},
C:function C(){},
aX:function aX(){},
n:function n(){},
bn:function bn(a){this.a=a},
j8:function j8(){},
i6:function(a){var t,s,r,q,p
if(a==null)return
t=P.E()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.P)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
mY:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.jw(a,new P.i5(t))
return t},
jW:function(){var t=$.jV
if(t==null){t=J.iH(window.navigator.userAgent,"Opera",0)
$.jV=t}return t},
lY:function(){var t,s
t=$.jS
if(t!=null)return t
s=$.jT
if(s==null){s=J.iH(window.navigator.userAgent,"Firefox",0)
$.jT=s}if(s)t="-moz-"
else{s=$.jU
if(s==null){s=!P.jW()&&J.iH(window.navigator.userAgent,"Trident/",0)
$.jU=s}if(s)t="-ms-"
else t=P.jW()?"-o-":"-webkit-"}$.jS=t
return t},
i5:function i5(a){this.a=a},
hL:function hL(){},
R:function R(){},
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
Y:function Y(){},
a5:function a5(){},
ew:function ew(){},
eF:function eF(){},
eO:function eO(){},
f5:function f5(){},
fc:function fc(){},
fg:function fg(){},
fh:function fh(){},
fk:function fk(){},
fl:function fl(){},
bm:function bm(){},
fJ:function fJ(){},
v:function v(){},
fK:function fK(){},
bp:function bp(){},
bq:function bq(){},
fX:function fX(){},
h5:function h5(){},
cU:function cU(){},
cV:function cV(){},
d0:function d0(){},
d1:function d1(){},
da:function da(){},
db:function db(){},
dg:function dg(){},
dh:function dh(){},
dE:function dE(){},
dF:function dF(){},
aM:function aM(){},
f6:function f6(){},
fp:function fp(){},
fq:function fq(){},
fz:function fz(){},
d6:function d6(){},
d7:function d7(){}},W={
kP:function(){return document},
m_:function(a,b,c){var t,s
t=document.body
s=(t&&C.o).M(t,a,b,c)
s.toString
t=new H.cI(new W.M(s),new W.e2(),[W.p])
return t.gZ(t)},
m0:function(a){return"wheel"},
bd:function(a){var t,s,r
t="element tag unavailable"
try{s=J.lv(a)
if(typeof s==="string")t=a.tagName}catch(r){H.K(r)}return t},
mD:function(a,b){return document.createElement(a)},
aJ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kB:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ac:function(a,b,c,d,e){var t=W.kH(new W.hq(c))
t=new W.hp(0,a,b,t,!1,[e])
t.dt(a,b,c,!1,e)
return t},
ky:function(a){var t,s
t=document.createElement("a")
s=new W.hQ(t,window.location)
s=new W.bu(s)
s.du(a)
return s},
mG:function(a,b,c,d){return!0},
mH:function(a,b,c,d){var t,s,r,q,p
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
kC:function(){var t=P.n
t=new W.hX(P.j_(C.q,t),P.az(null,null,null,t),P.az(null,null,null,t),P.az(null,null,null,t),null)
t.dz(null,new H.bh(C.q,new W.hY(),[H.am(C.q,0),null]),["TEMPLATE"],null)
return t},
kH:function(a){var t=$.z
if(t===C.f)return a
return t.e7(a)},
j:function j(){},
bQ:function bQ(){},
dA:function dA(){},
dB:function dB(){},
dC:function dC(){},
ao:function ao(){},
bS:function bS(){},
dH:function dH(){},
aq:function aq(){},
dL:function dL(){},
dM:function dM(){},
dN:function dN(){},
dO:function dO(){},
aN:function aN(){},
dP:function dP(){},
W:function W(){},
aO:function aO(){},
dQ:function dQ(){},
dR:function dR(){},
dS:function dS(){},
dU:function dU(){},
dV:function dV(){},
bV:function bV(){},
bc:function bc(){},
dW:function dW(){},
bW:function bW(){},
dX:function dX(){},
bX:function bX(){},
bY:function bY(){},
bZ:function bZ(){},
dY:function dY(){},
dZ:function dZ(){},
X:function X(){},
e2:function e2(){},
f:function f(){},
d:function d(){},
em:function em(){},
en:function en(){},
er:function er(){},
et:function et(){},
c7:function c7(){},
eu:function eu(){},
be:function be(){},
c8:function c8(){},
ev:function ev(){},
bf:function bf(){},
ax:function ax(){},
eK:function eK(){},
eL:function eL(){},
eQ:function eQ(){},
eS:function eS(){},
bi:function bi(){},
eT:function eT(){},
I:function I(){},
M:function M(a){this.a=a},
p:function p(){},
cn:function cn(){},
bk:function bk(){},
a7:function a7(){},
ff:function ff(){},
fi:function fi(){},
cr:function cr(){},
cu:function cu(){},
fs:function fs(){},
aj:function aj(){},
fw:function fw(){},
fy:function fy(){},
a8:function a8(){},
fD:function fD(){},
fE:function fE(a){this.a=a},
cB:function cB(){},
fL:function fL(){},
fM:function fM(){},
bo:function bo(){},
fO:function fO(){},
fP:function fP(){},
fR:function fR(){},
aC:function aC(){},
fV:function fV(){},
fW:function fW(){},
cH:function cH(){},
aD:function aD(){},
h4:function h4(){},
h6:function h6(){},
h7:function h7(){},
h8:function h8(){},
aG:function aG(){},
bs:function bs(){},
ha:function ha(a){this.a=a},
ja:function ja(){},
hj:function hj(){},
hk:function hk(){},
hB:function hB(){},
cY:function cY(){},
hT:function hT(){},
hU:function hU(){},
hg:function hg(){},
hl:function hl(a){this.a=a},
ho:function ho(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jd:function jd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hp:function hp(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
hq:function hq(a){this.a=a},
bu:function bu(a){this.a=a},
m:function m(){},
cp:function cp(a){this.a=a},
f3:function f3(a){this.a=a},
f2:function f2(a,b,c){this.a=a
this.b=b
this.c=c},
bB:function bB(){},
hR:function hR(){},
hS:function hS(){},
hX:function hX(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
hY:function hY(){},
hV:function hV(){},
c3:function c3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
co:function co(){},
j2:function j2(){},
j9:function j9(){},
hQ:function hQ(a,b){this.a=a
this.b=b},
di:function di(a){this.a=a},
hZ:function hZ(a){this.a=a},
cK:function cK(){},
cL:function cL(){},
cM:function cM(){},
cN:function cN(){},
cO:function cO(){},
cP:function cP(){},
cQ:function cQ(){},
cS:function cS(){},
cT:function cT(){},
cW:function cW(){},
cX:function cX(){},
cZ:function cZ(){},
d_:function d_(){},
d2:function d2(){},
d3:function d3(){},
bC:function bC(){},
bD:function bD(){},
d4:function d4(){},
d5:function d5(){},
d9:function d9(){},
dc:function dc(){},
dd:function dd(){},
bE:function bE(){},
bF:function bF(){},
de:function de(){},
df:function df(){},
dj:function dj(){},
dk:function dk(){},
dl:function dl(){},
dm:function dm(){},
dn:function dn(){},
dp:function dp(){},
dq:function dq(){},
dr:function dr(){},
ds:function ds(){},
dt:function dt(){}},B={
nj:function(a){var t,s
t=document
s=W.ax
W.ac(t,"keydown",new B.iv(),!1,s)
W.ac(t,"keyup",new B.iw(),!1,s)
if(!$.nk)W.ac(t,"mousemove",new B.ix(),!1,W.I)
s=W.I
W.ac(t,"mousedown",new B.iy(),!1,s)
W.ac(t,"mouseup",new B.iz(),!1,s)},
me:function(a,b,c,d){var t,s,r,q,p,o,n
t=new Float32Array(3)
s=$.$get$i7()
r=$.$get$bL()
q=new T.Z(new Float32Array(16))
q.a8()
p=new Float32Array(3)
o=new Float32Array(3)
n=new Float32Array(3)
t=new B.f7(a,b,c,0,new T.t(t),-0.02,s,r,q,new T.t(p),new T.t(o),new T.t(n),new T.t(new Float32Array(3)),"camera:orbit",!1,!0)
t.dg(a,b,c,d)
return t},
iv:function iv(){},
iw:function iw(){},
ix:function ix(){},
iy:function iy(){},
iz:function iz(){},
f7:function f7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.fy=a
_.go=b
_.id=c
_.k1=d
_.k2=e
_.k3=f
_.k4=g
_.r1=h
_.d=i
_.e=j
_.f=k
_.r=l
_.x=m
_.a=n
_.b=o
_.c=p},
f8:function f8(a){this.a=a},
f9:function f9(a){this.a=a},
fa:function fa(){},
fb:function fb(a){this.a=a},
mq:function(a,b,c,d,e,f,a0,a1,a2,a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=a1+1
s=a0+1
r=B.mf(new B.fv(e,d,f,c),0,6.283185307179586,s,!1,0.001)
H.b(r.length===2*s)
q=B.mw(r,a1,a2,!1)
H.b(q.length===s)
H.b(q[0].length===2*t)
p=[]
o=new G.c6(!1,[],[],p,P.E())
for(n=q.length,m=0;m<q.length;q.length===n||(0,H.P)(q),++m){l=q[m]
for(k=0;k<l.length;k+=2){j=l[k]
j.toString
i=new T.t(new Float32Array(3))
i.H(j)
C.a.l(p,i)}}H.b(p.length===t*s)
o.dc(t,s,!1)
o.dd(t,s)
n=o.e
H.b(n.h(0,"aTexUV").length===p.length)
o.aL("aNormal")
for(j=q.length,m=0;m<q.length;q.length===j||(0,H.P)(q),++m){l=q[m]
for(k=0;k<l.length;k+=2){i=l[k+1]
h=n.h(0,"aNormal")
i.toString
g=new T.t(new Float32Array(3))
g.H(i);(h&&C.a).l(h,g)}}H.b(n.h(0,"aNormal").length===p.length)
return o},
mw:function(a1,a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
t=[]
s=new Float32Array(3)
r=new T.t(s)
q=new Float32Array(3)
p=new T.t(q)
o=new Float32Array(3)
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
r.H(k)
r.aA(p,a)
r.aA(n,a0)
h=new T.t(new Float32Array(3))
h.H(r)
C.a.l(i,h)
s[2]=0
s[1]=0
s[0]=0
r.aA(p,a)
r.aA(n,a0)
r.a2(0)
h=new T.t(new Float32Array(3))
h.H(r)
C.a.l(i,h)}}return t},
mf:function(a,b,c,d,e,f){var t,s,r,q,p,o,n
H.b(d>=2)
t=[]
s=new T.t(new Float32Array(3))
r=new T.t(new Float32Array(3))
for(q=(c-b)/(d-1),p=0;p<d;++p){o=q*p+b
a.$2(o,s)
a.$2(o+f,r)
r.bl(0,s)
n=new T.t(new Float32Array(3))
n.H(s)
C.a.l(t,n)
n=new T.t(new Float32Array(3))
n.H(r)
C.a.l(t,n)}return t},
fv:function fv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},G={
my:function(a){var t,s,r
t=H.A(a.split("\n"),[P.n])
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.e(t[s])}return C.a.ap(t,"\n")},
kw:function(a,b,c){var t,s,r,q
t=J.i(a)
s=t.c2(a,b)
t.bi(a,s,c)
t.bZ(a,s)
r=t.be(a,s,35713)
if(r!=null&&!r){q=t.bd(a,s)
P.ag("E:Compilation failed:")
P.ag("E:"+G.my(c))
P.ag("E:Failure:")
P.ag(C.i.a5("E:",q))
throw H.c(q)}return s},
iS:function(a,b,c){var t,s,r
t=$.$get$kf()
s=G.kr(a,"frame::color",b,c,32856,t)
t=G.kr(a,"frame::depth",b,c,33190,t)
r=new G.c4(a,null,s,t,null)
r.d9(a,s,t,null,!1)
return r},
k_:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.iK(a[s])
b[t+1]=J.iL(a[s])
b[t+2]=J.jy(a[s])}return b},
m3:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.iK(a[s])
b[t+1]=J.iL(a[s])}return b},
m4:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.iK(a[s])
b[t+1]=J.iL(a[s])
b[t+2]=J.jy(a[s])
b[t+3]=J.lw(a[s])}return b},
m2:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.b6(a[s],0)
b[t+1]=J.b6(a[s],1)
b[t+2]=J.b6(a[s],2)
b[t+3]=J.b6(a[s],3)}return b},
mF:function(a,b){var t,s,r,q,p,o,n,m,l,k
for(t=a.e,s=t.gC(t),s=s.gv(s),r=b.x,q=[[P.h,P.x]],p=[P.S],o=[T.ab],n=[T.t],m=[T.H];s.p();){l=s.gq(s)
if(!r.G(0,l)){l="Dropping unnecessary attribute: "+H.e(l)
if($.kS>0)H.it("I: "+l)
continue}k=t.h(0,l)
switch($.$get$N().h(0,l).a){case"vec2":b.ab(l,G.m3(H.dw(k,"$ish",m,"$ash"),null),2)
break
case"vec3":b.ab(l,G.k_(H.dw(k,"$ish",n,"$ash"),null),3)
break
case"vec4":b.ab(l,G.m4(H.dw(k,"$ish",o,"$ash"),null),4)
break
case"float":b.ab(l,new Float32Array(H.i0(H.dw(k,"$ish",p,"$ash"))),1)
break
case"uvec4":b.ab(l,G.m2(H.dw(k,"$ish",q,"$ash"),null),4)
break
default:if(H.V(!1))H.a0("unknown type for "+H.e(l)+" ["+J.lu(k[0]).k(0)+"] ["+new H.ak(H.ic(k),null).k(0)+"] "+H.e(k))}}},
k0:function(a,b,c){var t,s,r,q,p,o,n,m
t=b.d
s=b.e.x
r=P.E()
q=J.lj(t.a)
p=new G.eR(t,q,4,r,s,null,0,-1,null,null,P.E(),"meshdata:"+a,!1,!0)
o=G.k_(c.d,null)
r.i(0,"aPosition",J.iI(t.a))
p.ch=o
p.bn("aPosition",o,3)
n=$.$get$N().h(0,"aPosition")
if(n==null)H.G("Unknown canonical aPosition")
H.b(s.G(0,"aPosition"))
m=s.h(0,"aPosition")
J.dy(t.a,q)
t.cb(0,m,0)
t.cF(0,r.h(0,"aPosition"),m,n.bo(),5126,!1,0,0)
s=c.da()
p.y=J.iI(t.a)
H.b(p.ch!=null)
r=p.ch.length
if(r<768){p.saU(new Uint8Array(H.i0(s)))
p.Q=5121}else if(r<196608){p.saU(new Uint16Array(H.i0(s)))
p.Q=5123}else{p.saU(new Uint32Array(H.i0(s)))
p.Q=5125}J.dy(t.a,q)
s=p.y
r=p.cx
q=J.u(r)
H.b(!!q.$isks||!!q.$iskt||!!q.$isku)
J.iF(t.a,34963,s)
J.jv(t.a,34963,r,35048)
G.mF(c,p)
return p},
fo:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.az(null,null,null,P.n)
s=c.b
r=d.b
q=c.f
p=J.lh(b.a)
o=G.kw(b.a,35633,s)
J.ju(b.a,p,o)
n=G.kw(b.a,35632,r)
J.ju(b.a,p,n)
if(q.length>0)J.lI(b.a,p,q,35980)
J.lB(b.a,p)
if(!J.lA(b.a,p,35714))H.G(J.lz(b.a,p))
t=new G.fn(b,c,d,p,P.j_(c.c,null),P.E(),P.E(),t,null,a,!1,!0)
t.dh(a,b,c,d)
return t},
cv:function(a){return new G.aW(a,null,[],[],[],[],0,P.E())},
kr:function(a,b,c,d,e,f){var t=new G.h0(c,d,e,b,J.li(a.a),3553,a,f)
t.dm(a,b,c,d,e,f)
return t},
eU:function eU(){},
aE:function aE(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dG:function dG(){},
dJ:function dJ(a,b){this.a=a
this.b=b},
c4:function c4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
c1:function c1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c6:function c6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cF:function cF(a,b,c){this.a=a
this.b=b
this.c=c},
cE:function cE(a,b,c){this.a=a
this.b=b
this.c=c},
eP:function eP(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
eR:function eR(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
_.d=a
_.e=b
_.f=c
_.r=d
_.x=e
_.y=f
_.z=g
_.Q=h
_.ch=i
_.cx=j
_.cy=k
_.a=l
_.b=m
_.c=n},
fd:function fd(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.cx=f
_.cy=g
_.db=h
_.d=i
_.a=j
_.b=k
_.c=l},
fn:function fn(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.d=a
_.e=b
_.f=c
_.r=d
_.x=e
_.y=f
_.z=g
_.Q=h
_.ch=i
_.a=j
_.b=k
_.c=l},
w:function w(a,b,c){this.a=a
this.b=b
this.c=c},
aW:function aW(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fx:function fx(){},
fQ:function fQ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
br:function br(){},
h0:function h0(a,b,c,d,e,f,g,h){var _=this
_.f=a
_.r=b
_.x=c
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h}},R={fB:function fB(){},fC:function fC(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},A={
id:function(a){var t,s
t=C.W.es(a,0,new A.ie())
s=536870911&t+(C.b.cH(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
ie:function ie(){}},T={
mx:function(a,b,c){var t=new T.t(new Float32Array(3))
t.O(a,b,c)
return t},
Z:function Z(a){this.a=a},
H:function H(a){this.a=a},
t:function t(a){this.a=a},
ab:function ab(a){this.a=a}},Q={
nc:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
t={}
s=document
r=new R.fC(0,0,null,null,null,null)
r.dk(C.j.cL(s,"stats"),"blue","gray")
q=C.j.b8(s,"#webgl-canvas")
p=new G.dJ(null,q)
s=(q&&C.H).cK(q,"webgl2",P.ay(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
p.a=s
if(s==null)H.G(P.c0('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
o="ChronosGL Config: "+H.e(J.lx(s))
if($.kS>0)P.ag("I: "+o)
J.le(s,0,0,0,1)
J.bP(s,2929)
J.bP(s,2884)
n=B.me(165,0,0,q)
s=new T.Z(new Float32Array(16))
s.a8()
o=new T.Z(new Float32Array(16))
o.a8()
m=new G.fd(n,50,1,0.1,1000,s,o,new T.Z(new Float32Array(16)),P.E(),"perspective",!1,!0)
m.br()
l=q.clientWidth
k=q.clientHeight
q.width=l
q.height=k
m.d7(l,k)
j=G.iS(p,l,k)
s=C.b.F(l,2)
o=C.b.F(k,2)
i=G.iS(p,s,o)
h=G.iS(p,s,o)
o=$.$get$l1()
s=new G.aW("BlackPerlinNoiseColor F",null,[],[],[],[],0,P.E())
s.T(["vNormal"])
s.ac(["uTime","uTransformationMatrix"])
s.ae(["#define BLACK 1","vec3 mod289(vec3 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x)\n{\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec3 fade(vec3 t) {\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\n\n// Classic Perlin noise, periodic variant\nfloat pnoise(vec3 P, vec3 rep)\n{\n  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \n  return 2.2 * n_xyz;\n}\n","#define VARIANT 1\n\nvoid main() {\n#if VARIANT == 1\n  float mytime = uTime/2.0;\n#ifdef BLACK\n  mytime = uTime/10.0;\n#endif\n  float period = 10.0;\n  float factor = 1.0; // sin( uTime)/4.0+2.0;\n  vec3 translation = uTransformationMatrix[3].xyz;\n  float r = pnoise( .75 * ( vNormal *factor + mytime ), vec3( period ) );\n  float g = pnoise( 0.8 * ( vNormal *factor + mytime ), vec3( period ) );\n  float b = pnoise( 0.9 * ( vNormal *factor + mytime ), vec3( period ) );\n  float n = pnoise( 1.5 * ( vNormal *factor + mytime ), vec3( period ) );\n#else\n  float mytime = 0.0 ; //uTime/50.0;\n  float period = 5.0;\n  float factor = 1.0; // sin( uTime)/4.0+2.0;\n  vec3 translation = uTransformationMatrix[3].xyz;\n  float r = pnoise( .75 * ( translation*0.175 + vNormal *factor + mytime ), vec3( period ) );\n  float g = pnoise( 0.8 * ( translation*0.175 + vNormal *factor + mytime ), vec3( period ) );\n  float b = pnoise( 0.9 * ( translation*0.175 + vNormal *factor + mytime ), vec3( period ) );\n  float n = pnoise( 1.5 * ( translation*0.175 + vNormal *factor + mytime ), vec3( period ) );\n#endif\n\n  n = pow( .001, n );\n//float n = 10.0 * pnoise( 5.0 * ( vNormal + uTime ), vec3( 10.0 ) ) * pnoise( .5 * ( vNormal + uTime ), vec3( 10.0 ) );\n//n += .5 * pnoise( 4.0 * vNormal, vec3( 10.0 ) );\n#ifdef BLACK\n  vec3 color = vec3( 1.0-(r + n), 1.0-(g + n), 1.0-(b + n) );\n#else\n  vec3 color = vec3( (r + n), (g + n), (b + n) );\n#endif\n  oFragColor = vec4( color, 1.0 );\n}\n"])
g=G.fo("perlin",p,o,s)
f=G.fo("highpass",p,$.$get$kQ(),$.$get$kZ())
e=V.ne(6,6)
s=new G.aW("uv-passthru",null,[],[],[],[],0,P.E())
s.au(["aPosition","aTexUV"])
s.T(["vTexUV"])
s.aM(["gl_Position = vec4(aPosition, 1.0);","vTexUV = aTexUV;"])
o=new G.aW("BloomPassF",null,[],[],[],[],0,P.E())
o.T(["vTexUV"])
o.ac(["uDirection","uTexture"])
o.ae([e,"void main() {\n    vec2 invSize = 1.0 / vec2(textureSize(uTexture, 0));\n    vec3 sum = texture(uTexture, vTexUV).rgb * kernel[0];\n    for (int i = 1; i < kernel.length(); i++) {\n        vec2 offset = uDirection * invSize * float(i);\n        sum += texture(uTexture, vTexUV + offset).rgb * kernel[i];\n        sum += texture(uTexture, vTexUV - offset).rgb * kernel[i];\n    }\n    oFragColor = vec4(sum, 1.0);\n}\n"])
d=[s,o]
c=G.fo("bloom",p,d[0],d[1])
b=G.fo("bloom",p,$.$get$kK(),$.$get$kJ())
H.b(b.bq(f))
H.b(b.bq(c))
s=new T.t(new Float32Array(3))
s.O(-1,-1,0)
o=new T.t(new Float32Array(3))
o.O(1,-1,0)
a=new T.t(new Float32Array(3))
a.O(1,1,0)
a0=new T.t(new Float32Array(3))
a0.O(-1,1,0)
a1=new T.H(new Float32Array(2))
a1.S(0,0)
a2=new T.H(new Float32Array(2))
a2.S(1,0)
a3=new T.H(new Float32Array(2))
a3.S(1,1)
a4=new T.H(new Float32Array(2))
a4.S(0,1)
a5=new T.t(new Float32Array(3))
a5.O(0,0,1)
a6=new G.c6(!1,[],[],[],P.E())
a6.aL("aTexUV")
a6.d6([s,o,a,a0])
a6.d4("aTexUV",[a1,a2,a3,a4])
a6.aL("aNormal")
a6.d5("aNormal",[a5,a5,a5,a5])
a7=G.k0("quad",b,a6)
a8=new G.eP(P.E(),"mat",!1,!0)
a8.E("cDepthTest",!0)
a8.E("cDepthWrite",!0)
a8.E("cBlendEquation",$.$get$jI())
a8.E("cStencilFunc",$.$get$kd())
s=new T.Z(new Float32Array(16))
s.a8()
a8.E("uTransformationMatrix",s)
s=new T.Z(new Float32Array(16))
s.a8()
a8.E("uModelMatrix",s)
a9=G.k0("torusknot",g,B.mq(!0,!0,1,2,3,20,128,16,4,!1))
b0=new G.aE(P.E(),"uniformsHighPass",!1,!0)
s=new T.H(new Float32Array(2))
s.S(0.65,0.66)
b0.E("uRange",s)
b0.E("uColorAlpha",new T.ab(new Float32Array(4)))
s=j.c
b0.E("uTexture",s)
b1=new G.aE(P.E(),"Bloom Horizontal",!1,!0)
o=new T.H(new Float32Array(2))
o.S(1.5,0)
b1.E("uDirection",o)
o=h.c
b1.E("uTexture",o)
b2=new G.aE(P.E(),"Bloom Vertical",!1,!0)
a=new T.H(new Float32Array(2))
a.S(0,1.5)
b2.E("uDirection",a)
b2.E("uTexture",i.c)
b3=new G.aE(P.E(),"uniformApply",!1,!0)
b3.E("uTexture",s)
b3.E("uScale",0.6)
b3.E("uColor",$.$get$jP())
b3.E("uTexture2",o)
t.a=0
new Q.ir(t,n,a8,j,l,k,g,a9,m,h,b0,f,a7,i,c,b1,b2,new G.c4(p,null,null,null,null),b3,b,r).$1(0)},
ir:function ir(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i
_.z=j
_.Q=k
_.ch=l
_.cx=m
_.cy=n
_.db=o
_.dx=p
_.dy=q
_.fr=r
_.fx=s
_.fy=t
_.go=a0}},V={
ne:function(a,b){var t,s,r,q,p,o
t=[]
for(s=b*b,r=0,q=0;q<a;++q){p=0.39894*Math.exp(-0.5*q*q/s)/b
C.a.l(t,p)
r+=p
if(q>0)r+=p}for(o="",q=0,s="";q<a;++q,o=", ")s=s+o+H.e(t[q]/r)
return"float kernel["+a+"] = float["+a+"]("+(s.charCodeAt(0)==0?s:s)+");"}}
var v=[C,H,J,P,W,B,G,R,A,T,Q,V]
setFunctionNamesIfNecessary(v)
var $={}
H.iV.prototype={}
J.a.prototype={
w:function(a,b){return a===b},
gu:function(a){return H.aA(a)},
k:function(a){return"Instance of '"+H.bl(a)+"'"},
gA:function(a){return new H.ak(H.ic(a),null)}}
J.eC.prototype={
k:function(a){return String(a)},
gu:function(a){return a?519018:218159},
gA:function(a){return C.aq},
$isaf:1}
J.cc.prototype={
w:function(a,b){return null==b},
k:function(a){return"null"},
gu:function(a){return 0},
gA:function(a){return C.ak},
$isJ:1}
J.bg.prototype={
gu:function(a){return 0},
gA:function(a){return C.aj},
k:function(a){return String(a)},
$isk4:1}
J.fe.prototype={}
J.aF.prototype={}
J.aw.prototype={
k:function(a){var t=a[$.$get$jR()]
return t==null?this.d1(a):J.b9(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isiT:1}
J.at.prototype={
l:function(a,b){if(!!a.fixed$length)H.G(P.r("add"))
a.push(b)},
L:function(a,b){var t,s,r,q,p
t=a.length
if(!!a.fixed$length)H.G(P.r("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.P)(b),++r,t=p){q=b[r]
p=t+1
H.b(t===a.length||H.G(P.ah(a)))
a.push(q)}},
cg:function(a,b){return new H.bh(a,b,[H.am(a,0),null])},
ap:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.e(a[s])
return t.join(b)},
t:function(a,b){return a[b]},
ger:function(a){if(a.length>0)return a[0]
throw H.c(H.eB())},
gb4:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.c(H.eB())},
bh:function(a,b,c,d,e){var t,s,r
if(!!a.immutable$list)H.G(P.r("setRange"))
P.kc(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.G(P.aB(e,0,null,"skipCount",null))
s=J.T(d)
if(e+t>s.gj(d))throw H.c(H.mc())
if(e<b)for(r=t-1;r>=0;--r)a[b+r]=s.h(d,e+r)
else for(r=0;r<t;++r)a[b+r]=s.h(d,e+r)},
bO:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.c(P.ah(a))}return!1},
cX:function(a,b){if(!!a.immutable$list)H.G(P.r("sort"))
H.mt(a,P.mZ())},
aI:function(a){return this.cX(a,null)},
B:function(a,b){var t
for(t=0;t<a.length;++t)if(J.B(a[t],b))return!0
return!1},
k:function(a){return P.eA(a,"[","]")},
gv:function(a){return new J.dD(a,a.length,0,null,[H.am(a,0)])},
gu:function(a){return H.aA(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.G(P.r("set length"))
if(b<0)throw H.c(P.aB(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.b3(a,b))
if(b>=a.length||b<0)throw H.c(H.b3(a,b))
return a[b]},
i:function(a,b,c){if(!!a.immutable$list)H.G(P.r("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.b3(a,b))
if(b>=a.length||b<0)throw H.c(H.b3(a,b))
a[b]=c},
$iso:1,
$aso:function(){},
$isk:1,
$ish:1}
J.iU.prototype={}
J.dD.prototype={
gq:function(a){return this.d},
p:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.c(H.P(t))
r=this.c
if(r>=s){this.sbt(null)
return!1}this.sbt(t[r]);++this.c
return!0},
sbt:function(a){this.d=a}}
J.aR.prototype={
R:function(a,b){var t
if(typeof b!=="number")throw H.c(H.O(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaB(b)
if(this.gaB(a)===t)return 0
if(this.gaB(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaB:function(a){return a===0?1/a<0:a<0},
e9:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.c(P.r(""+a+".ceil()"))},
a3:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.r(""+a+".round()"))},
ea:function(a,b,c){if(this.R(b,c)>0)throw H.c(H.O(b))
if(this.R(a,b)<0)return b
if(this.R(a,c)>0)return c
return a},
eU:function(a,b){var t
if(b>20)throw H.c(P.aB(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gaB(a))return"-"+t
return t},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu:function(a){return a&0x1FFFFFFF},
a5:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return a+b},
a9:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return a-b},
cI:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return a/b},
I:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return a*b},
aK:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bK(a,b)},
F:function(a,b){return(a|0)===a?a/b|0:this.bK(a,b)},
bK:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.c(P.r("Result of truncating division is "+H.e(t)+": "+H.e(a)+" ~/ "+b))},
b_:function(a,b){var t
if(a>0)t=this.dX(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
dX:function(a,b){return b>31?0:a>>>b},
cH:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return(a&b)>>>0},
d3:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return(a^b)>>>0},
aH:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return a<b},
aG:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return a>b},
cJ:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return a>=b},
gA:function(a){return C.at},
$isD:1,
$asD:function(){return[P.a2]},
$isS:1,
$isa2:1}
J.cb.prototype={
gA:function(a){return C.as},
$isx:1}
J.ca.prototype={
gA:function(a){return C.ar}}
J.av.prototype={
aO:function(a,b){if(b>=a.length)throw H.c(H.b3(a,b))
return a.charCodeAt(b)},
a5:function(a,b){if(typeof b!=="string")throw H.c(P.jH(b,null,null))
return a+b},
cY:function(a,b,c){var t
if(c>a.length)throw H.c(P.aB(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bj:function(a,b){return this.cY(a,b,0)},
bm:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.fj(b,null,null))
if(b>c)throw H.c(P.fj(b,null,null))
if(c>a.length)throw H.c(P.fj(c,null,null))
return a.substring(b,c)},
cZ:function(a,b){return this.bm(a,b,null)},
eT:function(a){return a.toLowerCase()},
ec:function(a,b,c){if(c>a.length)throw H.c(P.aB(c,0,a.length,null,null))
return H.nl(a,b,c)},
R:function(a,b){var t
if(typeof b!=="string")throw H.c(H.O(b))
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
h:function(a,b){if(b>=a.length||!1)throw H.c(H.b3(a,b))
return a[b]},
$iso:1,
$aso:function(){},
$isD:1,
$asD:function(){return[P.n]},
$isn:1}
H.k.prototype={}
H.aS.prototype={
gv:function(a){return new H.ce(this,this.gj(this),0,null,[H.a1(this,"aS",0)])},
aE:function(a,b){return this.d0(0,b)},
eS:function(a,b){var t,s
t=H.A([],[H.a1(this,"aS",0)])
C.a.sj(t,this.gj(this))
for(s=0;s<this.gj(this);++s)t[s]=this.t(0,s)
return t},
eR:function(a){return this.eS(a,!0)}}
H.ce.prototype={
gq:function(a){return this.d},
p:function(){var t,s,r,q
t=this.a
s=J.T(t)
r=s.gj(t)
if(this.b!==r)throw H.c(P.ah(t))
q=this.c
if(q>=r){this.sag(null)
return!1}this.sag(s.t(t,q));++this.c
return!0},
sag:function(a){this.d=a}}
H.cg.prototype={
gv:function(a){return new H.eN(null,J.aK(this.a),this.b,this.$ti)},
gj:function(a){return J.b8(this.a)},
$asQ:function(a,b){return[b]}}
H.e1.prototype={$isk:1,
$ask:function(a,b){return[b]}}
H.eN.prototype={
p:function(){var t=this.b
if(t.p()){this.sag(this.c.$1(t.gq(t)))
return!0}this.sag(null)
return!1},
gq:function(a){return this.a},
sag:function(a){this.a=a},
$asc9:function(a,b){return[b]}}
H.bh.prototype={
gj:function(a){return J.b8(this.a)},
t:function(a,b){return this.b.$1(J.lp(this.a,b))},
$ask:function(a,b){return[b]},
$asaS:function(a,b){return[b]},
$asQ:function(a,b){return[b]}}
H.cI.prototype={
gv:function(a){return new H.h9(J.aK(this.a),this.b,this.$ti)}}
H.h9.prototype={
p:function(){var t,s
for(t=this.a,s=this.b;t.p();)if(s.$1(t.gq(t)))return!0
return!1},
gq:function(a){var t=this.a
return t.gq(t)}}
H.aQ.prototype={}
H.iA.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.iB.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.hJ.prototype={
seC:function(a){this.z=a},
seF:function(a){this.ch=a}}
H.aZ.prototype={
dv:function(){var t,s
t=this.e
s=t.a
this.c.l(0,s)
this.dC(s,t)},
bN:function(a,b){if(!this.f.w(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.b1()},
eL:function(a){var t,s,r,q,p
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
if(q===r.c)r.bE();++r.d}this.y=!1}this.b1()},
e0:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.u(a),s=0;r=this.ch,s<r.length;s+=2)if(t.w(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
eK:function(a){var t,s,r
if(this.ch==null)return
for(t=J.u(a),s=0;r=this.ch,s<r.length;s+=2)if(t.w(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.G(P.r("removeRange"))
P.kc(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
cU:function(a,b){if(!this.r.w(0,a))return
this.db=b},
ew:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.J(0,c)
return}H.b(b===1)
t=this.cx
if(t==null){t=P.j0(null,null)
this.cx=t}t.U(0,new H.hD(a,c))},
ev:function(a,b){var t
if(!this.r.w(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.aC()
return}H.b(b===1)
t=this.cx
if(t==null){t=P.j0(null,null)
this.cx=t}t.U(0,this.geD())},
ex:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.ag(a)
if(b!=null)P.ag(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.b9(a)
s[1]=b==null?null:b.k(0)
for(r=new P.bv(t,t.r,null,null,[null]),r.c=t.e;r.p();)r.d.J(0,s)},
ak:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.K(o)
p=H.al(o)
this.ex(q,p)
if(this.db){this.aC()
if(this===u.globalState.e)throw o}}finally{this.cy=H.mV(r)
u.globalState.d=H.jn(t,"$isaZ")
if(t!=null)$=t.geB()
if(this.cx!=null)for(;n=this.cx,!n.gao(n);)this.cx.ci().$0()}return s},
cf:function(a){return this.b.h(0,a)},
dC:function(a,b){var t=this.b
if(t.G(0,a))throw H.c(P.c0("Registry: ports must be registered only once."))
t.i(0,a,b)},
b1:function(){var t=this.b
if(t.gj(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.aC()},
aC:function(){var t,s,r
t=this.cx
if(t!=null)t.W(0)
for(t=this.b,s=t.gcD(t),s=s.gv(s);s.p();)s.gq(s).dD()
t.W(0)
this.c.W(0)
u.globalState.z.aq(0,this.a)
this.dx.W(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].J(0,t[r+1])
this.ch=null}},
geB:function(){return this.d},
ged:function(){return this.e}}
H.hD.prototype={
$0:function(){this.a.J(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.hm.prototype={
ej:function(){var t=this.a
if(t.b===t.c)return
return t.ci()},
ck:function(){var t,s,r
t=this.ej()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.G(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gao(s)}else s=!1
else s=!1
else s=!1
if(s)H.G(P.c0("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gao(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.ay(["command","close"])
r=new H.a_(!0,P.b_(null,P.x)).K(r)
s.toString
self.postMessage(r)}return!1}t.eI()
return!0},
bI:function(){if(self.window!=null)new H.hn(this).$0()
else for(;this.ck(););},
ar:function(){var t,s,r,q,p
if(!u.globalState.x)this.bI()
else try{this.bI()}catch(r){t=H.K(r)
s=H.al(r)
q=u.globalState.Q
p=P.ay(["command","error","msg",H.e(t)+"\n"+H.e(s)])
p=new H.a_(!0,P.b_(null,P.x)).K(p)
q.toString
self.postMessage(p)}}}
H.hn.prototype={
$0:function(){if(!this.a.ck())return
P.mv(C.v,this)},
$S:function(){return{func:1,v:true}}}
H.aI.prototype={
eI:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.ak(this.b)}}
H.hI.prototype={}
H.ey.prototype={
$0:function(){H.m8(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.ez.prototype={
$0:function(){var t,s
t=this.a
t.x=!0
if(!this.b)this.c.$1(this.d)
else{s=this.c
if(H.b4(s,{func:1,args:[P.J,P.J]}))s.$2(this.e,this.d)
else if(H.b4(s,{func:1,args:[P.J]}))s.$1(this.e)
else s.$0()}t.b1()},
$S:function(){return{func:1,v:true}}}
H.hh.prototype={}
H.b0.prototype={
J:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.mJ(b)
if(t.ged()===s){s=J.T(r)
switch(s.h(r,0)){case"pause":t.bN(s.h(r,1),s.h(r,2))
break
case"resume":t.eL(s.h(r,1))
break
case"add-ondone":t.e0(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.eK(s.h(r,1))
break
case"set-errors-fatal":t.cU(s.h(r,1),s.h(r,2))
break
case"ping":t.ew(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.ev(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.aq(0,s)
break}return}u.globalState.f.a.U(0,new H.aI(t,new H.hK(this,r),"receive"))},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.b0){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gu:function(a){return this.b.a}}
H.hK.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dA(0,this.b)},
$S:function(){return{func:1}}}
H.bG.prototype={
J:function(a,b){var t,s,r
t=P.ay(["command","message","port",this,"msg",b])
s=new H.a_(!0,P.b_(null,P.x)).K(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bG){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gu:function(a){return C.b.d3((this.b<<16^this.a<<8)>>>0,this.c)}}
H.ct.prototype={
dD:function(){this.c=!0
this.b=null},
dA:function(a,b){if(this.c)return
this.b.$1(b)},
$ismn:1}
H.fS.prototype={
dl:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.U(0,new H.aI(s,new H.fT(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){H.i9()
this.c=self.setTimeout(H.bK(new H.fU(this,b),0),a)}else{H.b(a>0)
throw H.c(P.r("Timer greater than 0."))}}}
H.fT.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.fU.prototype={
$0:function(){var t=this.a
t.c=null
H.iq()
t.d=1
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.ap.prototype={
gu:function(a){var t=this.a
t=C.b.b_(t,0)^C.b.F(t,4294967296)
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
H.a_.prototype={
K:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gj(t))
t=J.u(a)
if(!!t.$isbj)return["buffer",a]
if(!!t.$isaV)return["typed",a]
if(!!t.$iso)return this.cQ(a)
if(!!t.$ism5){r=this.gcN()
q=t.gC(a)
q=H.j1(q,r,H.a1(q,"Q",0),null)
q=P.k6(q,!0,H.a1(q,"Q",0))
t=t.gcD(a)
t=H.j1(t,r,H.a1(t,"Q",0),null)
return["map",q,P.k6(t,!0,H.a1(t,"Q",0))]}if(!!t.$isk4)return this.cR(a)
if(!!t.$isa)this.cB(a)
if(!!t.$ismn)this.as(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isb0)return this.cS(a)
if(!!t.$isbG)return this.cT(a)
if(!!t.$isar){p=a.$static_name
if(p==null)this.as(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isap)return["capability",a.a]
if(!(a instanceof P.C))this.cB(a)
return["dart",u.classIdExtractor(a),this.cP(u.classFieldsExtractor(a))]},
as:function(a,b){throw H.c(P.r((b==null?"Can't transmit:":b)+" "+H.e(a)))},
cB:function(a){return this.as(a,null)},
cQ:function(a){var t
H.b(typeof a!=="string")
t=this.cO(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.as(a,"Can't serialize indexable: ")},
cO:function(a){var t,s
t=[]
C.a.sj(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.K(a[s])
return t},
cP:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.K(a[t]))
return a},
cR:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.as(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sj(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.K(a[t[r]])
return["js-object",t,s]},
cT:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cS:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.aH.prototype={
X:function(a){var t,s,r,q
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.c(P.jG("Bad serialized message: "+H.e(a)))
switch(C.a.ger(a)){case"ref":H.b(J.B(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.b(J.B(a[0],"buffer"))
t=a[1]
C.a.l(this.b,t)
return t
case"typed":H.b(J.B(a[0],"typed"))
t=a[1]
C.a.l(this.b,t)
return t
case"fixed":H.b(J.B(a[0],"fixed"))
t=a[1]
C.a.l(this.b,t)
return J.au(H.A(this.aj(t),[null]))
case"extendable":H.b(J.B(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.A(this.aj(t),[null])
case"mutable":H.b(J.B(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.aj(t)
case"const":H.b(J.B(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
return J.au(H.A(this.aj(t),[null]))
case"map":return this.em(a)
case"sendport":return this.en(a)
case"raw sendport":H.b(J.B(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.el(a)
case"function":H.b(J.B(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.b(J.B(a[0],"capability"))
return new H.ap(a[1])
case"dart":H.b(J.B(a[0],"dart"))
s=a[1]
r=a[2]
q=u.instanceFromClassId(s)
C.a.l(this.b,q)
this.aj(r)
return u.initializeEmptyInstance(s,q,r)
default:throw H.c("couldn't deserialize: "+H.e(a))}},
aj:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.X(a[t]))
return a},
em:function(a){var t,s,r,q,p
H.b(J.B(a[0],"map"))
t=a[1]
s=a[2]
r=P.E()
C.a.l(this.b,r)
t=J.lC(t,this.gek()).eR(0)
for(q=J.T(s),p=0;p<t.length;++p)r.i(0,t[p],this.X(q.h(s,p)))
return r},
en:function(a){var t,s,r,q,p,o,n
H.b(J.B(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.cf(r)
if(o==null)return
n=new H.b0(o,s)}else n=new H.bG(t,r,s)
C.a.l(this.b,n)
return n},
el:function(a){var t,s,r,q,p,o
H.b(J.B(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.T(t),p=J.T(s),o=0;o<q.gj(t);++o)r[q.h(t,o)]=this.X(p.h(s,o))
return r}}
H.fm.prototype={}
H.fY.prototype={
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
H.f4.prototype={
k:function(a){var t=this.b
if(t==null)return"NullError: "+H.e(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.eE.prototype={
k:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.e(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.e(this.a)+")"}}
H.h2.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.iC.prototype={
$1:function(a){if(!!J.u(a).$isaP)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(a){return{func:1,args:[,]}}}
H.d8.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t},
$isaX:1}
H.ik.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.il.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.im.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.io.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.ip.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.ar.prototype={
k:function(a){return"Closure '"+H.bl(this).trim()+"'"},
$isiT:1,
geX:function(){return this},
$D:null}
H.fN.prototype={}
H.fA.prototype={
k:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.ba.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.ba))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gu:function(a){var t,s
t=this.c
if(t==null)s=H.aA(this.a)
else s=typeof t!=="object"?J.b7(t):H.aA(t)
return(s^H.aA(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.bl(t)+"'")}}
H.h_.prototype={
k:function(a){return this.a}}
H.dI.prototype={
k:function(a){return this.a}}
H.fr.prototype={
k:function(a){return"RuntimeError: "+H.e(this.a)}}
H.hb.prototype={
k:function(a){return C.i.a5("Assertion failed: ",P.c_(this.a))}}
H.ak.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gu:function(a){return J.b7(this.a)},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.ak){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.a6.prototype={
gj:function(a){return this.a},
gao:function(a){return this.a===0},
gC:function(a){return new H.eH(this,[H.am(this,0)])},
gcD:function(a){return H.j1(this.gC(this),new H.eD(this),H.am(this,0),H.am(this,1))},
G:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bB(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bB(s,b)}else return this.ey(b)},
ey:function(a){var t=this.d
if(t==null)return!1
return this.an(this.ay(t,this.am(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.ah(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.ah(r,b)
return s==null?null:s.b}else return this.ez(b)},
ez:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.ay(t,this.am(a))
r=this.an(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aW()
this.b=t}this.bv(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aW()
this.c=s}this.bv(s,b,c)}else{r=this.d
if(r==null){r=this.aW()
this.d=r}q=this.am(b)
p=this.ay(r,q)
if(p==null)this.aZ(r,q,[this.aX(b,c)])
else{o=this.an(p,b)
if(o>=0)p[o].b=c
else p.push(this.aX(b,c))}}},
aq:function(a,b){if(typeof b==="string")return this.bH(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bH(this.c,b)
else return this.eA(b)},
eA:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.ay(t,this.am(a))
r=this.an(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bL(q)
return q.b},
W:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aV()}},
al:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.c(P.ah(this))
t=t.c}},
bv:function(a,b,c){var t=this.ah(a,b)
if(t==null)this.aZ(a,b,this.aX(b,c))
else t.b=c},
bH:function(a,b){var t
if(a==null)return
t=this.ah(a,b)
if(t==null)return
this.bL(t)
this.bC(a,b)
return t.b},
aV:function(){this.r=this.r+1&67108863},
aX:function(a,b){var t,s
t=new H.eG(a,b,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.aV()
return t},
bL:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.aV()},
am:function(a){return J.b7(a)&0x3ffffff},
an:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.B(a[s].a,b))return s
return-1},
k:function(a){return P.k7(this)},
ah:function(a,b){return a[b]},
ay:function(a,b){return a[b]},
aZ:function(a,b,c){H.b(c!=null)
a[b]=c},
bC:function(a,b){delete a[b]},
bB:function(a,b){return this.ah(a,b)!=null},
aW:function(){var t=Object.create(null)
this.aZ(t,"<non-identifier-key>",t)
this.bC(t,"<non-identifier-key>")
return t},
$ism5:1}
H.eD.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(a){return{func:1,args:[,]}}}
H.eG.prototype={}
H.eH.prototype={
gj:function(a){return this.a.a},
gv:function(a){var t,s
t=this.a
s=new H.eI(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.eI.prototype={
gq:function(a){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.ah(t))
else{t=this.c
if(t==null){this.sbu(null)
return!1}else{this.sbu(t.a)
this.c=this.c.c
return!0}}},
sbu:function(a){this.d=a}}
H.ig.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[,]}}}
H.ih.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(a,b){return{func:1,args:[,P.n]}}}
H.ii.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[P.n]}}}
H.bj.prototype={
gA:function(a){return C.ac},
$isbj:1}
H.aV.prototype={$isaV:1}
H.eV.prototype={
gA:function(a){return C.ad}}
H.cj.prototype={
gj:function(a){return a.length},
$iso:1,
$aso:function(){},
$isq:1,
$asq:function(){}}
H.ck.prototype={
h:function(a,b){H.ae(b,a,a.length)
return a[b]},
i:function(a,b,c){H.ae(b,a,a.length)
a[b]=c},
$isk:1,
$ask:function(){return[P.S]},
$asaQ:function(){return[P.S]},
$asl:function(){return[P.S]},
$ish:1,
$ash:function(){return[P.S]}}
H.cl.prototype={
i:function(a,b,c){H.ae(b,a,a.length)
a[b]=c},
$isk:1,
$ask:function(){return[P.x]},
$asaQ:function(){return[P.x]},
$asl:function(){return[P.x]},
$ish:1,
$ash:function(){return[P.x]}}
H.ci.prototype={
gA:function(a){return C.ae},
$isep:1}
H.eW.prototype={
gA:function(a){return C.af}}
H.eX.prototype={
gA:function(a){return C.ag},
h:function(a,b){H.ae(b,a,a.length)
return a[b]}}
H.eY.prototype={
gA:function(a){return C.ah},
h:function(a,b){H.ae(b,a,a.length)
return a[b]},
$isk1:1}
H.eZ.prototype={
gA:function(a){return C.ai},
h:function(a,b){H.ae(b,a,a.length)
return a[b]}}
H.f_.prototype={
gA:function(a){return C.am},
h:function(a,b){H.ae(b,a,a.length)
return a[b]},
$isks:1}
H.f0.prototype={
gA:function(a){return C.an},
h:function(a,b){H.ae(b,a,a.length)
return a[b]},
$iskt:1}
H.cm.prototype={
gA:function(a){return C.ao},
gj:function(a){return a.length},
h:function(a,b){H.ae(b,a,a.length)
return a[b]}}
H.f1.prototype={
gA:function(a){return C.ap},
gj:function(a){return a.length},
h:function(a,b){H.ae(b,a,a.length)
return a[b]},
$isku:1}
H.bx.prototype={}
H.by.prototype={}
H.bz.prototype={}
H.bA.prototype={}
P.hd.prototype={
$1:function(a){var t,s
H.iq()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(a){return{func:1,args:[,]}}}
P.hc.prototype={
$1:function(a){var t,s
t=this.a
H.b(t.a==null)
H.i9()
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(a){return{func:1,args:[{func:1,v:true}]}}}
P.he.prototype={
$0:function(){H.iq()
this.a.$0()},
$S:function(){return{func:1}}}
P.hf.prototype={
$0:function(){H.iq()
this.a.$0()},
$S:function(){return{func:1}}}
P.iP.prototype={}
P.hi.prototype={}
P.hW.prototype={
eb:function(a,b){var t=this.a
if(t.a!==0)throw H.c(P.j4("Future already completed"))
t.aR(b)}}
P.cR.prototype={
eG:function(a){if(this.c!==6)return!0
H.b(!0)
return this.b.b.b9(this.d,a.a)},
eu:function(a){var t,s
t=(this.c&2)!==0
if(t){H.b(t)
t=this.e!=null}else t=!1
H.b(t)
s=this.e
t=this.b.b
if(H.b4(s,{func:1,args:[P.C,P.aX]}))return t.eM(s,a.a,a.b)
else return t.b9(s,a.a)}}
P.ad.prototype={
co:function(a,b){var t,s,r
t=$.z
if(t!==C.f){t.toString
if(b!=null)b=P.mN(b,t)}s=new P.ad(0,t,null,[null])
r=b==null?1:3
this.bw(new P.cR(null,s,r,a,b,[H.am(this,0),null]))
return s},
cn:function(a){return this.co(a,null)},
aN:function(a){H.b(this.a<4)
H.b(a.a>=4)
this.a=a.a
this.c=a.c},
bw:function(a){var t
H.b(a.a==null)
t=this.a
if(t<=1){a.a=H.jn(this.c,"$iscR")
this.c=a}else{if(t===2){H.b(!0)
t=this.c
if(t.a<4){t.bw(a)
return}this.aN(t)}H.b(this.a>=4)
t=this.b
t.toString
P.i3(null,null,t,new P.hs(this,a))}},
bG:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.b(!0)
s=this.c
if(s.a<4){s.bG(a)
return}this.aN(s)}H.b(this.a>=4)
t.a=this.az(a)
s=this.b
s.toString
P.i3(null,null,s,new P.hw(t,this))}},
aY:function(){H.b(this.a<4)
var t=this.c
this.c=null
return this.az(t)},
az:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aR:function(a){var t,s,r
H.b(this.a<4)
t=this.$ti
s=H.i4(a,"$ises",t,"$ases")
if(s){t=H.i4(a,"$isad",t,null)
if(t)P.kx(a,this)
else P.mE(a,this)}else{r=this.aY()
H.b(this.a<4)
this.a=4
this.c=a
P.bt(this,r)}},
av:function(a,b){var t
H.b(this.a<4)
t=this.aY()
H.b(this.a<4)
this.a=8
this.c=new P.aL(a,b)
P.bt(this,t)},
dF:function(a){return this.av(a,null)},
$ises:1,
gb0:function(){return this.a},
gdU:function(){return this.c}}
P.hs.prototype={
$0:function(){P.bt(this.a,this.b)},
$S:function(){return{func:1}}}
P.hw.prototype={
$0:function(){P.bt(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.ht.prototype={
$1:function(a){var t=this.a
H.b(t.a===1)
H.b(t.a===1)
t.a=0
t.aR(a)},
$S:function(a){return{func:1,args:[,]}}}
P.hu.prototype={
$2:function(a,b){var t=this.a
H.b(t.a===1)
t.av(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(a,b){return{func:1,args:[,],opt:[,]}}}
P.hv.prototype={
$0:function(){this.a.av(this.b,this.c)},
$S:function(){return{func:1}}}
P.hz.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.c
p=q.c
H.b((p&1)===0)
o=(p&2)===0
H.b(o)
t=null
try{H.b(o)
H.b(p===8)
t=q.b.b.cj(q.d)}catch(n){s=H.K(n)
r=H.al(n)
if(this.d){q=this.a.a
H.b(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.b(q.a===8)
p.b=q.c}else p.b=new P.aL(s,r)
p.a=!0
return}if(!!J.u(t).$ises){if(t instanceof P.ad&&t.gb0()>=4){if(t.gb0()===8){q=t
H.b(q.gb0()===8)
p=this.b
p.b=q.gdU()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.cn(new P.hA(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.hA.prototype={
$1:function(a){return this.a},
$S:function(a){return{func:1,args:[,]}}}
P.hy.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.b((r.c&1)!==0)
this.a.b=r.b.b.b9(r.d,this.c)}catch(q){t=H.K(q)
s=H.al(q)
r=this.a
r.b=new P.aL(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.hx.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.b(q.a===8)
t=q.c
q=this.c
if(q.eG(t)){H.b((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.eu(t)
p.a=!1}}catch(o){s=H.K(o)
r=H.al(o)
q=this.a
p=q.a
H.b(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.b(q.a===8)
m.b=q.c}else m.b=new P.aL(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.cJ.prototype={}
P.fF.prototype={
gj:function(a){var t,s
t={}
s=new P.ad(0,$.z,null,[P.x])
t.a=0
this.eE(new P.fH(t),!0,new P.fI(t,s),s.gdE())
return s}}
P.fH.prototype={
$1:function(a){++this.a.a},
$S:function(a){return{func:1,args:[,]}}}
P.fI.prototype={
$0:function(){this.b.aR(this.a.a)},
$S:function(){return{func:1}}}
P.fG.prototype={}
P.j5.prototype={}
P.aL.prototype={
k:function(a){return H.e(this.a)},
$isaP:1}
P.i_.prototype={}
P.i2.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.cq()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.c(t)
r=H.c(t)
r.stack=s.k(0)
throw r},
$S:function(){return{func:1}}}
P.hM.prototype={
eN:function(a){var t,s,r
try{if(C.f===$.z){a.$0()
return}P.kD(null,null,this,a)}catch(r){t=H.K(r)
s=H.al(r)
P.i1(null,null,this,t,s)}},
eO:function(a,b){var t,s,r
try{if(C.f===$.z){a.$1(b)
return}P.kE(null,null,this,a,b)}catch(r){t=H.K(r)
s=H.al(r)
P.i1(null,null,this,t,s)}},
e6:function(a){return new P.hO(this,a)},
b2:function(a){return new P.hN(this,a)},
e7:function(a){return new P.hP(this,a)},
h:function(a,b){return},
cj:function(a){if($.z===C.f)return a.$0()
return P.kD(null,null,this,a)},
b9:function(a,b){if($.z===C.f)return a.$1(b)
return P.kE(null,null,this,a,b)},
eM:function(a,b,c){if($.z===C.f)return a.$2(b,c)
return P.mO(null,null,this,a,b,c)}}
P.hO.prototype={
$0:function(){return this.a.cj(this.b)},
$S:function(){return{func:1}}}
P.hN.prototype={
$0:function(){return this.a.eN(this.b)},
$S:function(){return{func:1}}}
P.hP.prototype={
$1:function(a){return this.a.eO(this.b,a)},
$S:function(a){return{func:1,args:[,]}}}
P.hG.prototype={
am:function(a){return H.nf(a)&0x3ffffff},
an:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.hE.prototype={
gv:function(a){var t=new P.bv(this,this.r,null,null,[null])
t.c=this.e
return t},
gj:function(a){return this.a},
B:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dG(b)},
dG:function(a){var t=this.d
if(t==null)return!1
return this.ax(t[this.aw(a)],a)>=0},
cf:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.B(0,a)?a:null
else return this.dO(a)},
dO:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.aw(a)]
r=this.ax(s,a)
if(r<0)return
return J.b6(s,r).gdI()},
l:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.jf()
this.b=t}return this.by(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.jf()
this.c=s}return this.by(s,b)}else return this.U(0,b)},
U:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.jf()
this.d=t}s=this.aw(b)
r=t[s]
if(r==null){q=[this.aQ(b)]
H.b(q!=null)
t[s]=q}else{if(this.ax(r,b)>=0)return!1
r.push(this.aQ(b))}return!0},
aq:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bz(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bz(this.c,b)
else return this.dP(0,b)},
dP:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.aw(b)]
r=this.ax(s,b)
if(r<0)return!1
this.bA(s.splice(r,1)[0])
return!0},
W:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aP()}},
by:function(a,b){var t
if(a[b]!=null)return!1
t=this.aQ(b)
H.b(!0)
a[b]=t
return!0},
bz:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bA(t)
delete a[b]
return!0},
aP:function(){this.r=this.r+1&67108863},
aQ:function(a){var t,s
t=new P.hF(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.aP()
return t},
bA:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.aP()},
aw:function(a){return J.b7(a)&0x3ffffff},
ax:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.B(a[s].a,b))return s
return-1}}
P.hF.prototype={
gdI:function(){return this.a}}
P.bv.prototype={
gq:function(a){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.ah(t))
else{t=this.c
if(t==null){this.saf(null)
return!1}else{this.saf(t.a)
this.c=this.c.b
return!0}}},
saf:function(a){this.d=a}}
P.hC.prototype={}
P.iZ.prototype={$isk:1}
P.cd.prototype={$isk:1,$ish:1}
P.l.prototype={
gv:function(a){return new H.ce(a,this.gj(a),0,null,[H.a1(a,"l",0)])},
t:function(a,b){return this.h(a,b)},
cg:function(a,b){return new H.bh(a,b,[H.a1(a,"l",0),null])},
es:function(a,b,c){var t,s,r
t=this.gj(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gj(a))throw H.c(P.ah(a))}return s},
k:function(a){return P.eA(a,"[","]")}}
P.cf.prototype={}
P.eM.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.e(a)
t.a=s+": "
t.a+=H.e(b)},
$S:function(a,b){return{func:1,args:[,,]}}}
P.aU.prototype={
al:function(a,b){var t,s
for(t=J.aK(this.gC(a));t.p();){s=t.gq(t)
b.$2(s,this.h(a,s))}},
gj:function(a){return J.b8(this.gC(a))},
k:function(a){return P.k7(a)}}
P.eJ.prototype={
df:function(a,b){var t
H.b(!0)
t=new Array(8)
t.fixed$length=Array
this.sbJ(H.A(t,[b]))},
gv:function(a){return new P.hH(this,this.c,this.d,this.b,null,this.$ti)},
gao:function(a){return this.b===this.c},
gj:function(a){return(this.c-this.b&this.a.length-1)>>>0},
t:function(a,b){var t,s
t=this.gj(this)
if(0>b||b>=t)H.G(P.y(b,this,"index",null,t))
s=this.a
return s[(this.b+b&s.length-1)>>>0]},
W:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
k:function(a){return P.eA(this,"{","}")},
ci:function(){var t,s,r
t=this.b
if(t===this.c)throw H.c(H.eB());++this.d
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
if(this.b===t)this.bE();++this.d},
bE:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.A(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.bh(s,0,q,t,r)
C.a.bh(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbJ(s)},
sbJ:function(a){this.a=a}}
P.hH.prototype={
gq:function(a){return this.e},
p:function(){var t,s
t=this.a
if(this.c!==t.d)H.G(P.ah(t))
s=this.d
if(s===this.b){this.saf(null)
return!1}this.saf(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
saf:function(a){this.e=a}}
P.fu.prototype={
L:function(a,b){var t
for(t=J.aK(b);t.p();)this.l(0,t.gq(t))},
k:function(a){return P.eA(this,"{","}")},
$isk:1}
P.ft.prototype={}
P.bw.prototype={}
P.af.prototype={}
P.D.prototype={}
P.bb.prototype={
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.bb))return!1
return this.a===b.a&&this.b===b.b},
R:function(a,b){return C.b.R(this.a,b.a)},
gu:function(a){var t=this.a
return(t^C.b.b_(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.lW(H.mm(this))
s=P.bU(H.mk(this))
r=P.bU(H.mg(this))
q=P.bU(H.mh(this))
p=P.bU(H.mj(this))
o=P.bU(H.ml(this))
n=P.lX(H.mi(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isD:1,
$asD:function(){return[P.bb]}}
P.S.prototype={}
P.as.prototype={
aH:function(a,b){return C.b.aH(this.a,b.gdH())},
aG:function(a,b){return C.b.aG(this.a,b.gdH())},
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.as))return!1
return this.a===b.a},
gu:function(a){return this.a&0x1FFFFFFF},
R:function(a,b){return C.b.R(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.e0()
s=this.a
if(s<0)return"-"+new P.as(0-s).k(0)
r=t.$1(C.b.F(s,6e7)%60)
q=t.$1(C.b.F(s,1e6)%60)
p=new P.e_().$1(s%1e6)
return""+C.b.F(s,36e8)+":"+H.e(r)+":"+H.e(q)+"."+H.e(p)},
$isD:1,
$asD:function(){return[P.as]}}
P.e_.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(a){return{func:1,ret:P.n,args:[P.x]}}}
P.e0.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(a){return{func:1,ret:P.n,args:[P.x]}}}
P.aP.prototype={}
P.bR.prototype={
k:function(a){return"Assertion failed"}}
P.cq.prototype={
k:function(a){return"Throw of null."}}
P.a4.prototype={
gaT:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaS:function(){return""},
k:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+t
q=this.gaT()+s+r
if(!this.a)return q
p=this.gaS()
o=P.c_(this.b)
return q+p+": "+H.e(o)}}
P.cs.prototype={
gaT:function(){return"RangeError"},
gaS:function(){var t,s,r
H.b(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.e(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.e(t)
else if(r>t)s=": Not in range "+H.e(t)+".."+H.e(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.e(t)}return s}}
P.ex.prototype={
gaT:function(){return"RangeError"},
gaS:function(){H.b(this.a)
if(J.l6(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.e(t)},
gj:function(a){return this.f}}
P.h3.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.h1.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.aY.prototype={
k:function(a){return"Bad state: "+this.a}}
P.dK.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.e(P.c_(t))+"."}}
P.cz.prototype={
k:function(a){return"Stack Overflow"},
$isaP:1}
P.dT.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.iR.prototype={}
P.hr.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.e(t)}}
P.e3.prototype={
h:function(a,b){var t,s
t=this.a
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.G(P.jH(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.k9(b,"expando$values")
return s==null?null:H.k9(s,t)},
k:function(a){return"Expando:"+H.e(this.b)}}
P.x.prototype={}
P.Q.prototype={
aE:function(a,b){return new H.cI(this,b,[H.a1(this,"Q",0)])},
gj:function(a){var t,s
H.b(!this.$isk)
t=this.gv(this)
for(s=0;t.p();)++s
return s},
gZ:function(a){var t,s
t=this.gv(this)
if(!t.p())throw H.c(H.eB())
s=t.gq(t)
if(t.p())throw H.c(H.md())
return s},
t:function(a,b){var t,s,r
if(b<0)H.G(P.aB(b,0,null,"index",null))
for(t=this.gv(this),s=0;t.p();){r=t.gq(t)
if(b===s)return r;++s}throw H.c(P.y(b,this,"index",null,s))},
k:function(a){return P.mb(this,"(",")")}}
P.c9.prototype={}
P.h.prototype={$isk:1}
P.aT.prototype={}
P.J.prototype={
gu:function(a){return P.C.prototype.gu.call(this,this)},
k:function(a){return"null"}}
P.a2.prototype={$isD:1,
$asD:function(){return[P.a2]}}
P.C.prototype={constructor:P.C,$isC:1,
w:function(a,b){return this===b},
gu:function(a){return H.aA(this)},
k:function(a){return"Instance of '"+H.bl(this)+"'"},
gA:function(a){return new H.ak(H.ic(this),null)},
toString:function(){return this.k(this)}}
P.aX.prototype={}
P.n.prototype={$isD:1,
$asD:function(){return[P.n]}}
P.bn.prototype={
gj:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga_:function(){return this.a}}
P.j8.prototype={}
W.j.prototype={}
W.bQ.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
W.dA.prototype={
gj:function(a){return a.length}}
W.dB.prototype={
k:function(a){return String(a)}}
W.dC.prototype={
k:function(a){return String(a)}}
W.ao.prototype={$isao:1}
W.bS.prototype={
cK:function(a,b,c){var t=this.dK(a,b,P.mY(c,null))
return t},
dK:function(a,b,c){return a.getContext(b,c)}}
W.dH.prototype={
aF:function(a){return P.i6(a.getContextAttributes())}}
W.aq.prototype={
gj:function(a){return a.length}}
W.dL.prototype={
gj:function(a){return a.length}}
W.dM.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.dN.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
W.dO.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
W.aN.prototype={
bx:function(a,b){var t,s
t=$.$get$jQ()
s=t[b]
if(typeof s==="string")return s
s=this.dY(a,b)
t[b]=s
return s},
dY:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.lY()+b
if(t in a)return t
return b},
gj:function(a){return a.length}}
W.dP.prototype={}
W.W.prototype={}
W.aO.prototype={}
W.dQ.prototype={
gj:function(a){return a.length}}
W.dR.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
W.dS.prototype={
gj:function(a){return a.length}}
W.dU.prototype={
h:function(a,b){return a[b]},
gj:function(a){return a.length}}
W.dV.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
W.bV.prototype={}
W.bc.prototype={
e1:function(a,b){return a.adoptNode(b)},
cL:function(a,b){return a.getElementById(b)},
b8:function(a,b){return a.querySelector(b)}}
W.dW.prototype={
k:function(a){return String(a)}}
W.bW.prototype={
eg:function(a,b){return a.createHTMLDocument(b)}}
W.dX.prototype={
gaD:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
W.bX.prototype={
gaD:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
W.bY.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[P.R]},
$isk:1,
$ask:function(){return[P.R]},
$isq:1,
$asq:function(){return[P.R]},
$asl:function(){return[P.R]},
$ish:1,
$ash:function(){return[P.R]},
$asm:function(){return[P.R]}}
W.bZ.prototype={
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.ga4(a))+" x "+H.e(this.ga1(a))},
w:function(a,b){var t
if(b==null)return!1
t=J.u(b)
if(!t.$isR)return!1
return a.left===t.gcd(b)&&a.top===t.gcp(b)&&this.ga4(a)===t.ga4(b)&&this.ga1(a)===t.ga1(b)},
gu:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.ga4(a)
q=this.ga1(a)
return W.kB(W.aJ(W.aJ(W.aJ(W.aJ(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga1:function(a){return a.height},
gcd:function(a){return a.left},
gcp:function(a){return a.top},
ga4:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isR:1,
$asR:function(){}}
W.dY.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[P.n]},
$isk:1,
$ask:function(){return[P.n]},
$isq:1,
$asq:function(){return[P.n]},
$asl:function(){return[P.n]},
$ish:1,
$ash:function(){return[P.n]},
$asm:function(){return[P.n]}}
W.dZ.prototype={
gj:function(a){return a.length}}
W.X.prototype={
ge4:function(a){return new W.hl(a)},
k:function(a){return a.localName},
M:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.jY
if(t==null){t=H.A([],[W.co])
s=new W.cp(t)
C.a.l(t,W.ky(null))
C.a.l(t,W.kC())
$.jY=s
d=s}else d=t
t=$.jX
if(t==null){t=new W.di(d)
$.jX=t
c=t}else{t.a=d
c=t}}if($.ai==null){t=document
s=t.implementation
s=(s&&C.I).eg(s,"")
$.ai=s
$.iQ=s.createRange()
s=$.ai
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.ai.head;(t&&C.J).P(t,r)}t=$.ai
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.jn(s,"$isao")}t=$.ai
if(!!this.$isao)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.ai.body;(t&&C.o).P(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.B(C.U,a.tagName)){t=$.iQ;(t&&C.B).cM(t,q)
t=$.iQ
p=(t&&C.B).ee(t,b)}else{q.innerHTML=b
p=$.ai.createDocumentFragment()
for(t=J.i(p);s=q.firstChild,s!=null;)t.P(p,s)}t=$.ai.body
if(q==null?t!=null:q!==t)J.jA(q)
c.bg(p)
C.j.e1(document,p)
return p},
ef:function(a,b,c){return this.M(a,b,c,null)},
cW:function(a,b,c,d){a.textContent=null
this.P(a,this.M(a,b,c,d))},
cV:function(a,b){return this.cW(a,b,null,null)},
a6:function(a,b){return a.getAttribute(b)},
dQ:function(a,b){return a.removeAttribute(b)},
$isX:1,
geP:function(a){return a.tagName}}
W.e2.prototype={
$1:function(a){return!!J.u(a).$isX},
$S:function(a){return{func:1,args:[,]}}}
W.f.prototype={}
W.d.prototype={
dB:function(a,b,c,d){return a.addEventListener(b,H.bK(c,1),!1)}}
W.em.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.c2]},
$isk:1,
$ask:function(){return[W.c2]},
$isq:1,
$asq:function(){return[W.c2]},
$asl:function(){return[W.c2]},
$ish:1,
$ash:function(){return[W.c2]},
$asm:function(){return[W.c2]}}
W.en.prototype={
gj:function(a){return a.length}}
W.er.prototype={
gj:function(a){return a.length}}
W.et.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
W.c7.prototype={}
W.eu.prototype={
gj:function(a){return a.length}}
W.be.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.p]},
$isk:1,
$ask:function(){return[W.p]},
$isq:1,
$asq:function(){return[W.p]},
$asl:function(){return[W.p]},
$ish:1,
$ash:function(){return[W.p]},
$asm:function(){return[W.p]}}
W.c8.prototype={}
W.ev.prototype={
J:function(a,b){return a.send(b)}}
W.bf.prototype={}
W.ax.prototype={$isax:1}
W.eK.prototype={
k:function(a){return String(a)}}
W.eL.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
W.eQ.prototype={
gj:function(a){return a.length}}
W.eS.prototype={
eY:function(a,b,c){return a.send(b,c)},
J:function(a,b){return a.send(b)}}
W.bi.prototype={}
W.eT.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.ch]},
$isk:1,
$ask:function(){return[W.ch]},
$isq:1,
$asq:function(){return[W.ch]},
$asl:function(){return[W.ch]},
$ish:1,
$ash:function(){return[W.ch]},
$asm:function(){return[W.ch]}}
W.I.prototype={$isI:1}
W.M.prototype={
gZ:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.c(P.j4("No elements"))
if(s>1)throw H.c(P.j4("More than one element"))
return t.firstChild},
L:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.i(s),p=0;p<r;++p)q.P(s,t.firstChild)
return},
i:function(a,b,c){var t=this.a
J.l8(t,c,C.z.h(t.childNodes,b))},
gv:function(a){var t=this.a.childNodes
return new W.c3(t,t.length,-1,null,[H.a1(t,"m",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){return C.z.h(this.a.childNodes,b)},
$ask:function(){return[W.p]},
$ascd:function(){return[W.p]},
$asl:function(){return[W.p]},
$ash:function(){return[W.p]},
$asbw:function(){return[W.p]}}
W.p.prototype={
eJ:function(a){var t=a.parentNode
if(t!=null)J.iD(t,a)},
k:function(a){var t=a.nodeValue
return t==null?this.d_(a):t},
P:function(a,b){return a.appendChild(b)},
dR:function(a,b){return a.removeChild(b)},
dS:function(a,b,c){return a.replaceChild(b,c)},
$isp:1,
gb6:function(a){return a.previousSibling}}
W.cn.prototype={
b7:function(a){return a.previousNode()}}
W.bk.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.p]},
$isk:1,
$ask:function(){return[W.p]},
$isq:1,
$asq:function(){return[W.p]},
$asl:function(){return[W.p]},
$ish:1,
$ash:function(){return[W.p]},
$asm:function(){return[W.p]}}
W.a7.prototype={
gj:function(a){return a.length}}
W.ff.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.a7]},
$isk:1,
$ask:function(){return[W.a7]},
$isq:1,
$asq:function(){return[W.a7]},
$asl:function(){return[W.a7]},
$ish:1,
$ash:function(){return[W.a7]},
$asm:function(){return[W.a7]}}
W.fi.prototype={
J:function(a,b){return a.send(b)}}
W.cr.prototype={
ee:function(a,b){return a.createContextualFragment(b)},
cM:function(a,b){return a.selectNodeContents(b)}}
W.cu.prototype={
J:function(a,b){return a.send(b)}}
W.fs.prototype={
gj:function(a){return a.length}}
W.aj.prototype={}
W.fw.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.cx]},
$isk:1,
$ask:function(){return[W.cx]},
$isq:1,
$asq:function(){return[W.cx]},
$asl:function(){return[W.cx]},
$ish:1,
$ash:function(){return[W.cx]},
$asm:function(){return[W.cx]}}
W.fy.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.cy]},
$isk:1,
$ask:function(){return[W.cy]},
$isq:1,
$asq:function(){return[W.cy]},
$asl:function(){return[W.cy]},
$ish:1,
$ash:function(){return[W.cy]},
$asm:function(){return[W.cy]}}
W.a8.prototype={
gj:function(a){return a.length}}
W.fD.prototype={
h:function(a,b){return this.bD(a,b)},
al:function(a,b){var t,s
for(t=0;!0;++t){s=this.dN(a,t)
if(s==null)return
b.$2(s,this.bD(a,s))}},
gC:function(a){var t=H.A([],[P.n])
this.al(a,new W.fE(t))
return t},
gj:function(a){return a.length},
bD:function(a,b){return a.getItem(b)},
dN:function(a,b){return a.key(b)},
$asaU:function(){return[P.n,P.n]}}
W.fE.prototype={
$2:function(a,b){return C.a.l(this.a,a)},
$S:function(a,b){return{func:1,args:[,,]}}}
W.cB.prototype={
M:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aJ(a,b,c,d)
t=W.m_("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.M(s).L(0,new W.M(t))
return s}}
W.fL.prototype={
M:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aJ(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.G.M(t.createElement("table"),b,c,d)
t.toString
t=new W.M(t)
r=t.gZ(t)
r.toString
t=new W.M(r)
q=t.gZ(t)
s.toString
q.toString
new W.M(s).L(0,new W.M(q))
return s}}
W.fM.prototype={
M:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aJ(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.G.M(t.createElement("table"),b,c,d)
t.toString
t=new W.M(t)
r=t.gZ(t)
s.toString
r.toString
new W.M(s).L(0,new W.M(r))
return s}}
W.bo.prototype={$isbo:1}
W.fO.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.cD]},
$isk:1,
$ask:function(){return[W.cD]},
$isq:1,
$asq:function(){return[W.cD]},
$asl:function(){return[W.cD]},
$ish:1,
$ash:function(){return[W.cD]},
$asm:function(){return[W.cD]}}
W.fP.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.cC]},
$isk:1,
$ask:function(){return[W.cC]},
$isq:1,
$asq:function(){return[W.cC]},
$asl:function(){return[W.cC]},
$ish:1,
$ash:function(){return[W.cC]},
$asm:function(){return[W.cC]}}
W.fR.prototype={
gj:function(a){return a.length}}
W.aC.prototype={$isaC:1}
W.fV.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.cG]},
$isk:1,
$ask:function(){return[W.cG]},
$isq:1,
$asq:function(){return[W.cG]},
$asl:function(){return[W.cG]},
$ish:1,
$ash:function(){return[W.cG]},
$asm:function(){return[W.cG]}}
W.fW.prototype={
gj:function(a){return a.length}}
W.cH.prototype={
b7:function(a){return a.previousNode()}}
W.aD.prototype={}
W.h4.prototype={
k:function(a){return String(a)}}
W.h6.prototype={
gm:function(a){return a.x},
gD:function(a){return a.z}}
W.h7.prototype={
gj:function(a){return a.length}}
W.h8.prototype={
J:function(a,b){return a.send(b)}}
W.aG.prototype={
gei:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.r("deltaY is not supported"))},
$isaG:1}
W.bs.prototype={
ge3:function(a){var t,s
t=P.a2
s=new P.ad(0,$.z,null,[t])
this.dJ(a)
this.dT(a,W.kH(new W.ha(new P.hW(s,[t]))))
return s},
dT:function(a,b){return a.requestAnimationFrame(H.bK(b,1))},
dJ:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.ha.prototype={
$1:function(a){this.a.eb(0,a)},
$S:function(a){return{func:1,args:[,]}}}
W.ja.prototype={}
W.hj.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.bT]},
$isk:1,
$ask:function(){return[W.bT]},
$isq:1,
$asq:function(){return[W.bT]},
$asl:function(){return[W.bT]},
$ish:1,
$ash:function(){return[W.bT]},
$asm:function(){return[W.bT]}}
W.hk.prototype={
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
w:function(a,b){var t
if(b==null)return!1
t=J.u(b)
if(!t.$isR)return!1
return a.left===t.gcd(b)&&a.top===t.gcp(b)&&a.width===t.ga4(b)&&a.height===t.ga1(b)},
gu:function(a){var t,s,r,q
t=a.left
s=a.top
r=a.width
q=a.height
return W.kB(W.aJ(W.aJ(W.aJ(W.aJ(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga1:function(a){return a.height},
ga4:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.hB.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.c5]},
$isk:1,
$ask:function(){return[W.c5]},
$isq:1,
$asq:function(){return[W.c5]},
$asl:function(){return[W.c5]},
$ish:1,
$ash:function(){return[W.c5]},
$asm:function(){return[W.c5]}}
W.cY.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.p]},
$isk:1,
$ask:function(){return[W.p]},
$isq:1,
$asq:function(){return[W.p]},
$asl:function(){return[W.p]},
$ish:1,
$ash:function(){return[W.p]},
$asm:function(){return[W.p]}}
W.hT.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.a8]},
$isk:1,
$ask:function(){return[W.a8]},
$isq:1,
$asq:function(){return[W.a8]},
$asl:function(){return[W.a8]},
$ish:1,
$ash:function(){return[W.a8]},
$asm:function(){return[W.a8]}}
W.hU.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.cA]},
$isk:1,
$ask:function(){return[W.cA]},
$isq:1,
$asq:function(){return[W.cA]},
$asl:function(){return[W.cA]},
$ish:1,
$ash:function(){return[W.cA]},
$asm:function(){return[W.cA]}}
W.hg.prototype={
al:function(a,b){var t,s,r,q,p,o
for(t=this.gC(this),s=t.length,r=this.a,q=J.i(r),p=0;p<t.length;t.length===s||(0,H.P)(t),++p){o=t[p]
b.$2(o,q.a6(r,o))}},
gC:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.A([],[P.n])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.l(s,p.name)}return s},
$ascf:function(){return[P.n,P.n]},
$asaU:function(){return[P.n,P.n]},
gdL:function(){return this.a}}
W.hl.prototype={
h:function(a,b){return J.iM(this.a,b)},
gj:function(a){return this.gC(this).length}}
W.ho.prototype={
eE:function(a,b,c,d){return W.ac(this.a,this.b,a,!1,H.am(this,0))}}
W.jd.prototype={}
W.hp.prototype={
dt:function(a,b,c,d,e){this.e_()},
e_:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.l7(r,this.c,t,!1)}}}
W.hq.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(a){return{func:1,args:[,]}}}
W.bu.prototype={
du:function(a){var t,s
t=$.$get$je()
if(t.gao(t)){for(s=0;s<262;++s)t.i(0,C.T[s],W.n3())
for(s=0;s<12;++s)t.i(0,C.r[s],W.n4())}},
a0:function(a){return $.$get$kz().B(0,W.bd(a))},
V:function(a,b,c){var t,s,r
t=W.bd(a)
s=$.$get$je()
r=s.h(0,H.e(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)}}
W.m.prototype={
gv:function(a){return new W.c3(a,this.gj(a),-1,null,[H.a1(a,"m",0)])}}
W.cp.prototype={
a0:function(a){return C.a.bO(this.a,new W.f3(a))},
V:function(a,b,c){return C.a.bO(this.a,new W.f2(a,b,c))}}
W.f3.prototype={
$1:function(a){return a.a0(this.a)},
$S:function(a){return{func:1,args:[,]}}}
W.f2.prototype={
$1:function(a){return a.V(this.a,this.b,this.c)},
$S:function(a){return{func:1,args:[,]}}}
W.bB.prototype={
dz:function(a,b,c,d){var t,s,r
this.a.L(0,c)
t=b.aE(0,new W.hR())
s=b.aE(0,new W.hS())
this.b.L(0,t)
r=this.c
r.L(0,C.V)
r.L(0,s)},
a0:function(a){return this.a.B(0,W.bd(a))},
V:function(a,b,c){var t,s
t=W.bd(a)
s=this.c
if(s.B(0,H.e(t)+"::"+b))return this.d.e2(c)
else if(s.B(0,"*::"+b))return this.d.e2(c)
else{s=this.b
if(s.B(0,H.e(t)+"::"+b))return!0
else if(s.B(0,"*::"+b))return!0
else if(s.B(0,H.e(t)+"::*"))return!0
else if(s.B(0,"*::*"))return!0}return!1}}
W.hR.prototype={
$1:function(a){return!C.a.B(C.r,a)},
$S:function(a){return{func:1,args:[,]}}}
W.hS.prototype={
$1:function(a){return C.a.B(C.r,a)},
$S:function(a){return{func:1,args:[,]}}}
W.hX.prototype={
V:function(a,b,c){if(this.d2(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.iM(a,"template")==="")return this.e.B(0,b)
return!1}}
W.hY.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)},
$S:function(a){return{func:1,args:[,]}}}
W.hV.prototype={
a0:function(a){var t=J.u(a)
if(!!t.$isbm)return!1
t=!!t.$isv
if(t&&W.bd(a)==="foreignObject")return!1
if(t)return!0
return!1},
V:function(a,b,c){if(b==="is"||C.i.bj(b,"on"))return!1
return this.a0(a)}}
W.c3.prototype={
p:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbF(J.b6(this.a,t))
this.c=t
return!0}this.sbF(null)
this.c=s
return!1},
gq:function(a){return this.d},
sbF:function(a){this.d=a}}
W.co.prototype={}
W.j2.prototype={}
W.j9.prototype={}
W.hQ.prototype={}
W.di.prototype={
bg:function(a){new W.hZ(this).$2(a,null)},
ai:function(a,b){if(b==null)J.jA(a)
else J.iD(b,a)},
dW:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.ls(a)
r=J.iM(s.gdL(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.K(n)}p="element unprintable"
try{p=J.b9(a)}catch(n){H.K(n)}try{o=W.bd(a)
this.dV(a,b,t,p,o,s,r)}catch(n){if(H.K(n) instanceof P.a4)throw n
else{this.ai(a,b)
window
m="Removing corrupted element "+H.e(p)
if(typeof console!="undefined")window.console.warn(m)}}},
dV:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.ai(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(t)
return}if(!this.a.a0(a)){this.ai(a,b)
window
t="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(t)
return}if(g!=null)if(!this.a.V(a,"is",g)){this.ai(a,b)
window
t="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(t)
return}t=f.gC(f)
s=H.A(t.slice(0),[H.am(t,0)])
for(r=f.gC(f).length-1,t=f.a,q=J.i(t);r>=0;--r){p=s[r]
if(!this.a.V(a,J.lH(p),q.a6(t,p))){window
o="Removing disallowed attribute <"+H.e(e)+" "+p+'="'+H.e(q.a6(t,p))+'">'
if(typeof console!="undefined")window.console.warn(o)
q.a6(t,p)
q.dQ(t,p)}}if(!!J.u(a).$isbo)this.bg(a.content)}}
W.hZ.prototype={
$2:function(a,b){var t,s,r,q
r=this.a
switch(a.nodeType){case 1:r.dW(a,b)
break
case 8:case 11:case 3:case 4:break
default:r.ai(a,b)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.lt(t)}catch(q){H.K(q)
r=t
J.iD(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(a,b){return{func:1,v:true,args:[W.p,W.p]}}}
W.cK.prototype={}
W.cL.prototype={}
W.cM.prototype={}
W.cN.prototype={}
W.cO.prototype={}
W.cP.prototype={}
W.cQ.prototype={}
W.cS.prototype={}
W.cT.prototype={}
W.cW.prototype={}
W.cX.prototype={}
W.cZ.prototype={}
W.d_.prototype={}
W.d2.prototype={}
W.d3.prototype={}
W.bC.prototype={}
W.bD.prototype={}
W.d4.prototype={}
W.d5.prototype={}
W.d9.prototype={}
W.dc.prototype={}
W.dd.prototype={}
W.bE.prototype={}
W.bF.prototype={}
W.de.prototype={}
W.df.prototype={}
W.dj.prototype={}
W.dk.prototype={}
W.dl.prototype={}
W.dm.prototype={}
W.dn.prototype={}
W.dp.prototype={}
W.dq.prototype={}
W.dr.prototype={}
W.ds.prototype={}
W.dt.prototype={}
P.i5.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(a,b){return{func:1,args:[,,]}}}
P.hL.prototype={}
P.R.prototype={}
P.e4.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e5.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e6.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e7.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e8.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e9.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ea.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eb.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ec.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ed.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ee.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ef.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eg.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eh.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
P.ei.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ej.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
P.ek.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.el.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eo.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eq.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.Y.prototype={}
P.a5.prototype={}
P.ew.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eF.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return this.Y(a,b)},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
Y:function(a,b){return a.getItem(b)},
$isk:1,
$ask:function(){return[P.iY]},
$asl:function(){return[P.iY]},
$ish:1,
$ash:function(){return[P.iY]},
$asm:function(){return[P.iY]}}
P.eO.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.f5.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return this.Y(a,b)},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
Y:function(a,b){return a.getItem(b)},
$isk:1,
$ask:function(){return[P.j3]},
$asl:function(){return[P.j3]},
$ish:1,
$ash:function(){return[P.j3]},
$asm:function(){return[P.j3]}}
P.fc.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fg.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fh.prototype={
gj:function(a){return a.length}}
P.fk.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fl.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bm.prototype={$isbm:1}
P.fJ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return this.Y(a,b)},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
Y:function(a,b){return a.getItem(b)},
$isk:1,
$ask:function(){return[P.n]},
$asl:function(){return[P.n]},
$ish:1,
$ash:function(){return[P.n]},
$asm:function(){return[P.n]}}
P.v.prototype={
M:function(a,b,c,d){var t,s,r,q,p,o
t=H.A([],[W.co])
C.a.l(t,W.ky(null))
C.a.l(t,W.kC())
C.a.l(t,new W.hV())
c=new W.di(new W.cp(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.o).ef(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.M(q)
o=t.gZ(t)
for(t=J.i(p);r=o.firstChild,r!=null;)t.P(p,r)
return p},
$isv:1}
P.fK.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bp.prototype={}
P.bq.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fX.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return this.Y(a,b)},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
Y:function(a,b){return a.getItem(b)},
$isk:1,
$ask:function(){return[P.j7]},
$asl:function(){return[P.j7]},
$ish:1,
$ash:function(){return[P.j7]},
$asm:function(){return[P.j7]}}
P.h5.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.cU.prototype={}
P.cV.prototype={}
P.d0.prototype={}
P.d1.prototype={}
P.da.prototype={}
P.db.prototype={}
P.dg.prototype={}
P.dh.prototype={}
P.dE.prototype={
gj:function(a){return a.length}}
P.dF.prototype={
gj:function(a){return a.length}}
P.aM.prototype={}
P.f6.prototype={
gj:function(a){return a.length}}
P.fp.prototype={
bM:function(a,b){return a.activeTexture(b)},
bP:function(a,b,c){return a.attachShader(b,c)},
bQ:function(a,b,c){return a.bindBuffer(b,c)},
bR:function(a,b,c){return a.bindFramebuffer(b,c)},
bS:function(a,b,c){return a.bindTexture(b,c)},
bT:function(a,b){return a.blendEquation(b)},
bU:function(a,b,c){return a.blendFunc(b,c)},
bV:function(a,b,c,d){return a.bufferData(b,c,d)},
bW:function(a,b){return a.checkFramebufferStatus(b)},
bX:function(a,b){return a.clear(b)},
bY:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bZ:function(a,b){return a.compileShader(b)},
c_:function(a){return a.createBuffer()},
c0:function(a){return a.createFramebuffer()},
c1:function(a){return a.createProgram()},
c2:function(a,b){return a.createShader(b)},
c3:function(a){return a.createTexture()},
c5:function(a,b){return a.depthMask(b)},
c6:function(a,b){return a.disable(b)},
c7:function(a,b,c,d){return a.drawArrays(b,c,d)},
c8:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c9:function(a,b){return a.enable(b)},
ca:function(a,b){return a.enableVertexAttribArray(b)},
cc:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
aF:function(a){return P.i6(a.getContextAttributes())},
ba:function(a){return a.getError()},
bb:function(a,b){return a.getProgramInfoLog(b)},
bc:function(a,b,c){return a.getProgramParameter(b,c)},
bd:function(a,b){return a.getShaderInfoLog(b)},
be:function(a,b,c){return a.getShaderParameter(b,c)},
bf:function(a,b,c){return a.getUniformLocation(b,c)},
ce:function(a,b){return a.linkProgram(b)},
bi:function(a,b,c){return a.shaderSource(b,c)},
bk:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cl:function(a,b,c,d){return a.texParameterf(b,c,d)},
cm:function(a,b,c,d){return a.texParameteri(b,c,d)},
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
cG:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fq.prototype={
e5:function(a,b){return a.beginTransformFeedback(b)},
e8:function(a,b){return a.bindVertexArray(b)},
eh:function(a){return a.createVertexArray()},
eo:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
ep:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
eq:function(a){return a.endTransformFeedback()},
eQ:function(a,b,c,d,e,f){return a.texStorage2D(b,c,d,e,f)},
eV:function(a,b,c,d){this.dZ(a,b,c,d)
return},
dZ:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
eW:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bM:function(a,b){return a.activeTexture(b)},
bP:function(a,b,c){return a.attachShader(b,c)},
bQ:function(a,b,c){return a.bindBuffer(b,c)},
bR:function(a,b,c){return a.bindFramebuffer(b,c)},
bS:function(a,b,c){return a.bindTexture(b,c)},
bT:function(a,b){return a.blendEquation(b)},
bU:function(a,b,c){return a.blendFunc(b,c)},
bV:function(a,b,c,d){return a.bufferData(b,c,d)},
bW:function(a,b){return a.checkFramebufferStatus(b)},
bX:function(a,b){return a.clear(b)},
bY:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bZ:function(a,b){return a.compileShader(b)},
c_:function(a){return a.createBuffer()},
c0:function(a){return a.createFramebuffer()},
c1:function(a){return a.createProgram()},
c2:function(a,b){return a.createShader(b)},
c3:function(a){return a.createTexture()},
c5:function(a,b){return a.depthMask(b)},
c6:function(a,b){return a.disable(b)},
c7:function(a,b,c,d){return a.drawArrays(b,c,d)},
c8:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c9:function(a,b){return a.enable(b)},
ca:function(a,b){return a.enableVertexAttribArray(b)},
cc:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
aF:function(a){return P.i6(a.getContextAttributes())},
ba:function(a){return a.getError()},
bb:function(a,b){return a.getProgramInfoLog(b)},
bc:function(a,b,c){return a.getProgramParameter(b,c)},
bd:function(a,b){return a.getShaderInfoLog(b)},
be:function(a,b,c){return a.getShaderParameter(b,c)},
bf:function(a,b,c){return a.getUniformLocation(b,c)},
ce:function(a,b){return a.linkProgram(b)},
bi:function(a,b,c){return a.shaderSource(b,c)},
bk:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cl:function(a,b,c,d){return a.texParameterf(b,c,d)},
cm:function(a,b,c,d){return a.texParameteri(b,c,d)},
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
cG:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fz.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return P.i6(this.dM(a,b))},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
dM:function(a,b){return a.item(b)},
$isk:1,
$ask:function(){return[P.aT]},
$asl:function(){return[P.aT]},
$ish:1,
$ash:function(){return[P.aT]},
$asm:function(){return[P.aT]}}
P.d6.prototype={}
P.d7.prototype={}
B.iv.prototype={
$1:function(a){$.$get$i7().i(0,a.which,!0)},
$S:function(a){return{func:1,args:[W.ax]}}}
B.iw.prototype={
$1:function(a){$.$get$i7().i(0,a.which,null)},
$S:function(a){return{func:1,args:[W.ax]}}}
B.ix.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.mW=t
$.mX=C.b.a9(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.jq=s-C.b.F(window.innerWidth,2)
$.l_=-(t-C.b.F(window.innerHeight,2))},
$S:function(a){return{func:1,args:[W.I]}}}
B.iy.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.bN=t-C.b.F(window.innerWidth,2)
$.bO=-(s-C.b.F(window.innerHeight,2))
if(a.button===2)$.$get$bL().i(0,"right",!0)
else $.$get$bL().i(0,"left",!0)},
$S:function(a){return{func:1,args:[W.I]}}}
B.iz.prototype={
$1:function(a){if(a.button===2)$.$get$bL().i(0,"right",null)
else $.$get$bL().i(0,"left",null)},
$S:function(a){return{func:1,args:[W.I]}}}
B.f7.prototype={
dg:function(a,b,c,d){var t
d.toString
W.ac(d,W.m0(d),new B.f8(this),!1,W.aG)
W.ac(d,"mousemove",new B.f9(this),!1,W.I)
t=W.aC
W.ac(d,"touchstart",new B.fa(),!1,t)
W.ac(d,"touchmove",new B.fb(this),!1,t)
B.nj(null)}}
B.f8.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.au.gei(a)*r.k3
if(C.c.a9(r.fy,t)>0)r.fy=C.c.a9(r.fy,t)}catch(q){s=H.K(q)
P.ag(s)}},
$S:function(a){return{func:1,args:[W.aG]}}}
B.f9.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=t.go+C.b.a9($.jq,$.bN)*0.01
s=t.id
r=$.bO
q=$.l_
t.id=s+(r-q)*0.01
$.bN=$.jq
$.bO=q}},
$S:function(a){return{func:1,args:[W.I]}}}
B.fa.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.a3(t.clientX)
C.c.a3(t.clientY)
$.bN=s
C.c.a3(t.clientX)
$.bO=C.c.a3(t.clientY)},
$S:function(a){return{func:1,args:[W.aC]}}}
B.fb.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.a3(t.clientX)
t=C.c.a3(t.clientY)
r=this.a
r.go=r.go+C.b.a9(s,$.bN)*0.01
r.id=r.id+($.bO-t)*0.01
$.bN=s
$.bO=t},
$S:function(a){return{func:1,args:[W.aC]}}}
G.eU.prototype={}
G.aE.prototype={
E:function(a,b){var t=this.d
if(H.V(!t.G(0,a)))H.a0("uniform "+a+" already set")
t.i(0,a,b)},
bp:function(){return this.d},
k:function(a){var t,s,r,q
t=H.A(["{"+new H.ak(H.ic(this),null).k(0)+"}["+this.a+"]"],[P.n])
for(s=this.d,r=s.gC(s),r=r.gv(r);r.p();){q=r.gq(r)
C.a.l(t,H.e(q)+": "+H.e(s.h(0,q)))}return C.a.ap(t,"\n")}}
G.dG.prototype={}
G.dJ.prototype={
cb:function(a,b,c){J.lq(this.a,b)
if(c>0)J.lN(this.a,b,c)},
cF:function(a,b,c,d,e,f,g,h){J.iF(this.a,34962,b)
J.lO(this.a,c,d,e,!1,g,h)}}
G.c4.prototype={
d9:function(a,b,c,d,e){var t,s,r
t=this.a
s=J.lg(t.a)
this.b=s
J.iG(t.a,36160,s)
s=this.c
if(s!=null){s=s.b
J.jx(t.a,36160,36064,3553,s,0)}s=this.d
if(s!=null){s=s.b
J.jx(t.a,36160,36096,3553,s,0)}r=J.lc(t.a,36160)
s=r===36053
if(H.V(s))H.a0("framebuffer error: "+H.e(r))
if(!s)throw H.c("Error Incomplete Framebuffer: "+H.e(r))
J.iG(t.a,36160,null)},
aa:function(a,b,c,d,e){var t,s
t=this.a
s=this.b
J.iG(t.a,36160,s)
H.b(d>0&&e>0)
J.lP(t.a,b,c,d,e)
if(a!==0)J.ld(t.a,a)}}
G.c1.prototype={}
G.c6.prototype={
aL:function(a){var t=this.e
H.b(!t.G(0,a))
H.b(C.i.bj(a,"a"))
switch($.$get$N().h(0,a).a){case"vec2":t.i(0,a,H.A([],[T.H]))
break
case"vec3":t.i(0,a,H.A([],[T.t]))
break
case"vec4":t.i(0,a,H.A([],[T.ab]))
break
case"float":t.i(0,a,H.A([],[P.S]))
break
case"uvec4":t.i(0,a,H.A([],[[P.h,P.x]]))
break
default:if(H.V(!1))H.a0("unknown type for "+a)}},
d4:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=t&&C.a,r=0;r<4;++r){q=b[r]
p=new Float32Array(2)
o=q.a
p[1]=o[1]
p[0]=o[0]
s.l(t,new T.H(p))}},
d5:function(a,b){var t,s,r,q,p
t=this.e.h(0,a)
for(s=t&&C.a,r=0;r<4;++r){q=b[r]
p=new T.t(new Float32Array(3))
p.H(q)
s.l(t,p)}},
d6:function(a){var t,s,r,q,p
H.b(!0)
t=this.d
s=t.length
C.a.l(this.c,new G.c1(s,s+1,s+2,s+3))
for(r=0;r<4;++r){q=a[r]
p=new T.t(new Float32Array(3))
p.H(q)
C.a.l(t,p)}},
da:function(){var t,s,r,q,p,o,n,m,l
t=this.c
s=t.length
H.b(s>0)
s=new Array(t.length*6)
s.fixed$length=Array
r=H.A(s,[P.x])
for(s=this.b,q=0,p=0;!1;++p){o=s[p]
r[q]=o.gf_(o)
r[q+1]=o.gf0(o)
r[q+2]=o.gf1(o)
q+=3}for(s=t.length,p=0;p<s;++p){n=t[p]
m=n.a
r[q]=m
r[q+1]=n.b
l=n.c
r[q+2]=l
r[q+3]=m
r[q+4]=l
r[q+5]=n.d
q+=6}H.b(q===r.length)
return r},
dd:function(a,b){var t,s,r,q,p,o,n,m
t=a*b
H.b(this.d.length===t)
s=[]
this.e.i(0,"aTexUV",s)
for(r=b-1,q=a-1,p=0;p<b;++p)for(o=p/r,n=0;n<a;++n){m=new Float32Array(2)
m[0]=o
m[1]=n/q
C.a.l(s,new T.H(m))}H.b(s.length===t)},
dc:function(a,b,c){var t,s,r,q,p,o,n,m,l
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
C.a.l(t,new G.c1(p+m,l+m,l+n,p+n))
n=m}q=o}},
k:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gC(s),r=r.gv(r);r.p();){q=r.gq(r)
p=$.$get$N().h(0,q).a
C.a.l(t,H.e(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.ap(t," ")}}
G.cF.prototype={}
G.cE.prototype={}
G.eP.prototype={}
G.eR.prototype={
bn:function(a,b,c){var t,s
if(C.i.aO(a,0)===105){if(H.V(C.b.aK(b.length,c)===this.z))H.a0("ChangeAttribute "+this.z)}else{t=C.b.aK(b.length,c)
if(H.V(t===(this.ch.length/3|0)))H.a0("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.iF(t.a,34962,s)
J.jv(t.a,34962,b,35048)},
de:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
ab:function(a,b,c){var t,s,r,q,p,o
t=J.js(a,0)===105
if(t&&this.z===0)this.z=C.b.aK(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.iI(r.a))
this.bn(a,b,c)
q=$.$get$N().h(0,a)
if(q==null)throw H.c("Unknown canonical "+a)
p=this.x
if(H.V(p.G(0,a)))H.a0("unexpected attribute "+a)
o=p.h(0,a)
J.dy(r.a,this.e)
r.cb(0,o,t?1:0)
r.cF(0,s.h(0,a),o,q.bo(),5126,!1,0,0)},
k:function(a){var t,s,r,q
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,r=t.gC(t),r=r.gv(r);r.p();){q=r.gq(r)
C.a.l(s,H.e(q)+":"+t.h(0,q).length)}return"MESH["+this.a+"] "+C.a.ap(s,"  ")},
saU:function(a){this.cx=a}}
G.fd.prototype={
d7:function(a,b){var t=C.b.cI(a,b)
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
t.a7(0,0,1/(p*s))
t.a7(1,1,1/p)
t.a7(2,2,(q+r)/o)
t.a7(3,2,-1)
t.a7(2,3,2*r*q/o)},
bp:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.t(new Float32Array(3))
o.O(r,q,p)
p=this.d
p.i(0,"uEyePosition",o)
o=this.cy
o.H(t)
t=o.a
t[12]=0
t[13]=0
t[14]=0
t[15]=1
n=-s[12]
m=-s[13]
l=-s[14]
s=J.u(n)
r=!!s.$isab
k=r?s.gaD(n):1
if(!!s.$ist){j=s.gm(n)
m=s.gn(n)
l=s.gD(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
l=s.gD(n)
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
a3.H(this.db)
a3.eH(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.fn.prototype={
dh:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.P)(t),++o){n=t[o]
r.i(0,n,J.jz(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.P)(t),++o){n=t[o]
r.i(0,n,J.jz(q.a,p,n))}},
bq:function(a){var t,s,r,q,p
t=this.e.x
s=a.e.x
if(t.gj(t)!==s.gj(s))return!1
for(r=t.gC(t),r=r.gv(r);r.p();){q=r.gq(r)
p=t.h(0,q)
q=s.h(0,q)
if(p==null?q!=null:p!==q)return!1}return!0},
dn:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gj(t)===s.gj(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gC(s),s=s.gv(s);s.p();){q=s.gq(s)
if(!t.G(0,q))C.a.l(r,q)}for(t=this.x,s=new P.bv(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.p();){q=s.d
if(!t.B(0,q))C.a.l(r,q)}return r},
ds:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gC(b),s=s.gv(s),r=this.d,q=this.y,p=this.z,o=0;s.p();){n=s.gq(s)
switch(J.js(n,0)){case 117:if(q.G(0,n)){m=b.h(0,n)
if(p.G(0,n))H.it("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$N().h(0,n)
if(l==null)H.G("unknown "+n)
H.b(q.G(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.iN(r.a,k,m)
else if(!!J.u(m).$isk1)J.lL(r.a,k,m)
break
case"float":if(l.c===0)J.lJ(r.a,k,m)
else if(!!J.u(m).$isep)J.lK(r.a,k,m)
break
case"mat4":if(l.c===0){n=H.an(m,"$isZ").a
J.jF(r.a,k,!1,n)}else if(!!J.u(m).$isep)J.jF(r.a,k,!1,m)
else if(H.V(!1))H.a0("bad unform: "+n)
break
case"mat3":if(l.c===0){n=C.L.geZ(H.an(m,"$isns"))
J.jE(r.a,k,!1,n)}else if(!!J.u(m).$isep)J.jE(r.a,k,!1,m)
else if(H.V(!1))H.a0("bad unform: "+n)
break
case"vec4":n=l.c
j=r.a
if(n===0)J.jD(j,k,H.an(m,"$isab").a)
else J.jD(j,k,m)
break
case"vec3":n=l.c
j=r.a
if(n===0)J.jC(j,k,H.an(m,"$ist").a)
else J.jC(j,k,m)
break
case"vec2":n=l.c
j=r.a
if(n===0)J.jB(j,k,H.an(m,"$isH").a)
else J.jB(j,k,m)
break
case"sampler2D":case"sampler2DShadow":n=C.b.a5(33984,this.ch)
J.jt(r.a,n)
n=H.an(m,"$isbr").b
J.dx(r.a,3553,n)
n=this.ch
J.iN(r.a,k,n)
this.ch=this.ch+1
break
case"samplerCube":H.b(n==="uCubeTexture")
n=C.b.a5(33984,this.ch)
J.jt(r.a,n)
n=H.an(m,"$isbr").b
J.dx(r.a,34067,n)
n=this.ch
J.iN(r.a,k,n)
this.ch=this.ch+1
break
default:H.it("Error: unknow uniform type: "+j)
H.b(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":n=J.B(m,!0)
j=r.a
if(n)J.bP(j,2929)
else J.iJ(j,2929)
break
case"cStencilFunc":H.an(m,"$iscF")
n=m.a
j=r.a
if(n===1281)J.iJ(j,2960)
else{J.bP(j,2960)
j=m.b
i=m.c
J.lE(r.a,n,j,i)}break
case"cDepthWrite":J.lk(r.a,m)
break
case"cBlendEquation":H.an(m,"$iscE")
n=m.a
j=r.a
if(n===1281)J.iJ(j,3042)
else{J.bP(j,3042)
j=m.b
i=m.c
J.lb(r.a,j,i)
J.la(r.a,n)}break}++o
break}}h=P.lZ(0,0,0,Date.now()-new P.bb(t,!1).a,0,0)
""+o
h.k(0)},
d8:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
Date.now()
t=this.d
J.lM(t.a,this.r)
this.ch=0
this.z.W(0)
for(s=0;s<2;++s){r=b[s]
this.ds(r.a,r.bp())}q=this.Q
q.W(0)
for(p=a.cy,p=p.gC(p),p=p.gv(p);p.p();)q.l(0,p.gq(p))
o=this.dn()
if(o.length!==0)P.ag("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(o)))
J.dy(a.d.a,a.e)
n=this.e.f.length>0
q=a.f
p=a.de()
m=a.Q
l=a.z
if(n)J.l9(t.a,q)
if(m!==-1){k=t.a
if(l>1)J.lo(k,q,p,m,0,l)
else J.ln(k,q,p,m,0)}else{m=t.a
if(l>1)J.lm(m,q,0,p,l)
else J.ll(m,q,0,p)}if(n)J.lr(t.a)},
ad:function(a,b){return this.d8(a,b,null)}}
G.w.prototype={
bo:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.b(!1)
return-1}}}
G.aW.prototype={
au:function(a){var t,s,r,q,p
H.b(this.b==null)
for(t=a.length,s=this.c,r=this.x,q=0;q<a.length;a.length===t||(0,H.P)(a),++q){p=a[q]
H.b($.$get$N().G(0,p))
H.b(!C.a.B(s,p))
C.a.l(s,p)
r.i(0,p,this.r);++this.r}C.a.aI(s)},
ac:function(a){var t,s,r,q
H.b(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.P)(a),++r){q=a[r]
if(H.V($.$get$N().G(0,q)))H.a0("missing uniform "+q)
H.b(!C.a.B(s,q))
C.a.l(s,q)}C.a.aI(s)},
T:function(a){var t,s,r
H.b(this.b==null)
for(t=this.e,s=0;s<1;++s){r=a[s]
H.b($.$get$N().G(0,r))
H.b(!C.a.B(t,r))
C.a.l(t,r)}C.a.aI(t)},
dj:function(a,b){H.b(this.b==null)
this.b=this.bs(!0,a,b)},
aM:function(a){return this.dj(a,null)},
di:function(a,b){H.b(this.b==null)
this.b=this.bs(!1,a,b)},
ae:function(a){return this.di(a,null)},
bs:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.b(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.P)(t),++o){n=t[o]
m=$.$get$N().h(0,n)
C.a.l(q,"layout (location="+H.e(p.h(0,n))+") in "+m.a+" "+H.e(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.P)(t),++o){k=t[o]
m=$.$get$N().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.e(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.P)(t),++o){k=t[o]
m=$.$get$N().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.e(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.P)(t),++o){k=t[o]
m=$.$get$N().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.e(k)+j+";")}C.a.l(q,"")
if(a)C.a.l(q,"void main(void) {")
C.a.L(q,b)
if(a)C.a.l(q,"}")
return C.a.ap(q,"\n")}}
G.fx.prototype={}
G.fQ.prototype={}
G.br.prototype={
k:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.h0.prototype={
dm:function(a,b,c,d,e,f){var t,s,r,q,p
t=this.d
s=this.c
J.dx(t.a,s,this.b)
J.lG(t.a,3553,1,this.x,this.f,this.r)
r=this.e
q=r.e
if(q!==1)J.lF(t.a,s,34046,q)
q=r.r
J.dz(t.a,s,10240,q)
q=r.f
J.dz(t.a,s,10241,q)
if(r.b){J.dz(t.a,s,10242,33071)
J.dz(t.a,s,10243,33071)}r.c
p=J.ly(t.a)
if(H.V(p===0))H.a0("texture error "+H.e(p))
J.dx(t.a,s,null)},
k:function(a){return"TypedTexture["+this.a+", "+this.x+", "+H.e(this.f)+" X "+H.e(this.r)+"]"}}
R.fB.prototype={
dk:function(a,b,c){var t,s,r
if(a==null)throw H.c("no element provided")
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
J.iE(this.a,s)
r=this.dw(b,c,90,30)
this.d=r
J.iE(this.a,r)
t=t.createElement("div")
this.c=t
J.iE(this.a,t)},
dw:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.mD("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.u).bx(r,"float")
r.setProperty(p,"left","")
p=C.u.bx(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.p.P(t,s)}return t}}
R.fC.prototype={
dr:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.w.eU(s,2)+" fps"
t=this.c;(t&&C.p).cV(t,b)
r=C.b.F(30*C.w.e9(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.p).P(t,q)},
dq:function(a){return this.dr(a,"")}}
B.fv.prototype={
$2:function(a,b){var t,s,r,q,p,o
t=this.c
s=this.a*a
r=Math.cos(s)
q=Math.sin(s)
s=this.b*a
p=Math.cos(s)
o=Math.sin(s)
s=t*(2+r)*0.5
b.sm(0,s*p)
b.sn(0,s*o)
b.sD(0,this.d*t*0.5*q)},
$S:function(a,b){return{func:1,v:true,args:[P.S,T.t]}}}
A.ie.prototype={
$2:function(a,b){var t=536870911&a+J.b7(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(a,b){return{func:1,args:[P.x,P.C]}}}
T.Z.prototype={
a7:function(a,b,c){H.b(a<4)
H.b(b<4)
this.a[b*4+a]=c},
H:function(a){var t,s
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
k:function(a){return"[0] "+this.at(0).k(0)+"\n[1] "+this.at(1).k(0)+"\n[2] "+this.at(2).k(0)+"\n[3] "+this.at(3).k(0)+"\n"},
h:function(a,b){return this.a[b]},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.Z){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gu:function(a){return A.id(this.a)},
at:function(a){var t,s
t=new Float32Array(4)
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.ab(t)},
a8:function(){var t=this.a
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
eH:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.H.prototype={
S:function(a,b){var t=this.a
t[0]=a
t[1]=b},
k:function(a){var t=this.a
return"["+H.e(t[0])+","+H.e(t[1])+"]"},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.H){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gu:function(a){return A.id(this.a)},
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
H:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
k:function(a){var t=this.a
return"["+H.e(t[0])+","+H.e(t[1])+","+H.e(t[2])+"]"},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.t){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gu:function(a){return A.id(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){return Math.sqrt(this.gb5())},
gb5:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
a2:function(a){var t,s,r
t=Math.sqrt(this.gb5())
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
c4:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.t(new Float32Array(3))
t.O(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
aA:function(a,b){var t,s
t=a.a
s=this.a
s[0]=s[0]+t[0]*b
s[1]=s[1]+t[1]*b
s[2]=s[2]+t[2]*b},
bl:function(a,b){var t,s
t=b.a
s=this.a
s[0]=s[0]-t[0]
s[1]=s[1]-t[1]
s[2]=s[2]-t[2]},
sm:function(a,b){this.a[0]=b
return b},
sn:function(a,b){this.a[1]=b
return b},
sD:function(a,b){this.a[2]=b
return b},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gD:function(a){return this.a[2]}}
T.ab.prototype={
k:function(a){var t=this.a
return H.e(t[0])+","+H.e(t[1])+","+H.e(t[2])+","+H.e(t[3])},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.ab){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gu:function(a){return A.id(this.a)},
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
gD:function(a){return this.a[2]},
gaD:function(a){return this.a[3]}}
Q.ir.prototype={
$1:function(b6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
t=this.a
t.a=b6+0
s=this.b
s.go+=0.01
r=s.k4
if(r.h(0,37)!=null)s.go+=0.03
else if(r.h(0,39)!=null)s.go-=0.03
if(r.h(0,38)!=null)s.id+=0.03
else if(r.h(0,40)!=null)s.id-=0.03
if(r.h(0,33)!=null)s.fy*=0.99
else if(r.h(0,34)!=null)s.fy*=1.01
if(r.h(0,32)!=null){s.go=0
s.id=0}r=C.c.ea(s.id,-1.4707963267948965,1.4707963267948965)
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
l=m[12]
k=m[13]
j=m[14]
i=new T.t(new Float32Array(3))
i.O(0,1,0)
r=s.e
q=r.a
q[0]=m[12]
q[1]=m[13]
q[2]=m[14]
q=new Float32Array(3)
h=new T.t(q)
h.H(r)
h.bl(0,p)
h.a2(0)
g=i.c4(h)
g.a2(0)
f=h.c4(g)
f.a2(0)
p=g.b3(r)
n=f.b3(r)
r=h.b3(r)
e=g.a
d=e[0]
c=f.a
b=c[0]
a=q[0]
a0=e[1]
a1=c[1]
a2=q[1]
e=e[2]
c=c[2]
q=q[2]
m[15]=1
m[14]=-r
m[13]=-n
m[12]=-p
m[11]=0
m[10]=q
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
m[12]=l
m[13]=k
m[14]=j
d=s.f
b=d.a
b[0]=m[2]
b[1]=m[6]
b[2]=m[10]
s=-s.k1
a3=Math.sqrt(d.gb5())
l=b[0]/a3
k=b[1]/a3
j=b[2]/a3
a4=Math.cos(s)
a5=Math.sin(s)
a6=1-a4
a7=l*l*a6+a4
s=j*a5
a8=l*k*a6-s
b=k*a5
a9=l*j*a6+b
b0=k*l*a6+s
b1=k*k*a6+a4
s=l*a5
b2=k*j*a6-s
b3=j*l*a6-b
b4=j*k*a6+s
b5=j*j*a6+a4
s=m[0]
b=m[4]
d=m[8]
a=m[1]
a0=m[5]
a1=m[9]
a2=m[2]
e=m[6]
c=m[10]
q=m[3]
p=m[7]
n=m[11]
m[0]=s*a7+b*b0+d*b3
m[1]=a*a7+a0*b0+a1*b3
m[2]=a2*a7+e*b0+c*b3
m[3]=q*a7+p*b0+n*b3
m[4]=s*a8+b*b1+d*b4
m[5]=a*a8+a0*b1+a1*b4
m[6]=a2*a8+e*b1+c*b4
m[7]=q*a8+p*b1+n*b4
m[8]=s*a9+b*b2+d*b5
m[9]=a*a9+a0*b2+a1*b5
m[10]=a2*a9+e*b2+c*b5
m[11]=q*a9+p*b2+n*b5
n=this.c
n.d.i(0,"uTime",b6/1000)
p=this.e
q=this.f
this.d.aa(17664,0,0,p,q)
m=this.y
this.r.ad(this.x,[m,n])
n=this.z
c=C.b.F(p,2)
e=C.b.F(q,2)
n.aa(17664,0,0,c,e)
a2=$.$get$kT().valueAsNumber
a1=this.Q
s=new T.H(new Float32Array(2))
s.S(a2,a2+0.01)
a1.d.i(0,"uRange",s)
s=this.cx
this.ch.ad(s,[m,a1])
this.cy.aa(17664,0,0,c,e)
a1=this.db
a1.ad(s,[m,this.dx])
n.aa(17664,0,0,c,e)
a1.ad(s,[m,this.dy])
this.fr.aa(17664,0,0,p,q)
q=this.fx
q.d.i(0,"uScale",$.$get$kR().valueAsNumber)
this.fy.ad(s,[m,q])
C.av.ge3(window).cn(this)
this.go.dq(t.a)},
$S:function(a){return{func:1,v:true,args:[P.a2]}}}
J.a.prototype.d_=J.a.prototype.k
J.bg.prototype.d1=J.bg.prototype.k
P.Q.prototype.d0=P.Q.prototype.aE
W.X.prototype.aJ=W.X.prototype.M
W.bB.prototype.d2=W.bB.prototype.V;(function installTearOffs(){installTearOff(H.aZ.prototype,"geD",0,0,0,null,["$0"],["aC"],0)
installTearOff(H.a_.prototype,"gcN",0,0,0,null,["$1"],["K"],2)
installTearOff(H.aH.prototype,"gek",0,0,0,null,["$1"],["X"],2)
installTearOff(P,"mS",1,0,0,null,["$1"],["mA"],1)
installTearOff(P,"mT",1,0,0,null,["$1"],["mB"],1)
installTearOff(P,"mU",1,0,0,null,["$1"],["mC"],1)
installTearOff(P,"kN",1,0,0,null,["$0"],["mQ"],0)
installTearOff(P.ad.prototype,"gdE",0,0,0,null,["$2","$1"],["av","dF"],5)
installTearOff(P,"mZ",1,0,0,null,["$2"],["lV"],6)
installTearOff(W,"n3",1,0,0,null,["$4"],["mG"],4)
installTearOff(W,"n4",1,0,0,null,["$4"],["mH"],4)
installTearOff(W.cn.prototype,"gb6",0,1,0,null,["$0"],["b7"],3)
installTearOff(W.cH.prototype,"gb6",0,1,0,null,["$0"],["b7"],3)
installTearOff(Q,"kO",1,0,0,null,["$0"],["nc"],0)})();(function inheritance(){inherit(P.C,null)
var t=P.C
inherit(H.iV,t)
inherit(J.a,t)
inherit(J.dD,t)
inherit(P.Q,t)
inherit(H.ce,t)
inherit(P.c9,t)
inherit(H.aQ,t)
inherit(H.ar,t)
inherit(H.hJ,t)
inherit(H.aZ,t)
inherit(H.hm,t)
inherit(H.aI,t)
inherit(H.hI,t)
inherit(H.hh,t)
inherit(H.ct,t)
inherit(H.fS,t)
inherit(H.ap,t)
inherit(H.a_,t)
inherit(H.aH,t)
inherit(H.fm,t)
inherit(H.fY,t)
inherit(P.aP,t)
inherit(H.d8,t)
inherit(H.ak,t)
inherit(P.aU,t)
inherit(H.eG,t)
inherit(H.eI,t)
inherit(P.iP,t)
inherit(P.hi,t)
inherit(P.cR,t)
inherit(P.ad,t)
inherit(P.cJ,t)
inherit(P.fF,t)
inherit(P.fG,t)
inherit(P.j5,t)
inherit(P.aL,t)
inherit(P.i_,t)
inherit(P.fu,t)
inherit(P.hF,t)
inherit(P.bv,t)
inherit(P.iZ,t)
inherit(P.bw,t)
inherit(P.l,t)
inherit(P.hH,t)
inherit(P.af,t)
inherit(P.D,t)
inherit(P.bb,t)
inherit(P.a2,t)
inherit(P.as,t)
inherit(P.cz,t)
inherit(P.iR,t)
inherit(P.hr,t)
inherit(P.e3,t)
inherit(P.h,t)
inherit(P.aT,t)
inherit(P.J,t)
inherit(P.aX,t)
inherit(P.n,t)
inherit(P.bn,t)
inherit(P.j8,t)
inherit(W.dP,t)
inherit(W.bu,t)
inherit(W.m,t)
inherit(W.cp,t)
inherit(W.bB,t)
inherit(W.hV,t)
inherit(W.c3,t)
inherit(W.co,t)
inherit(W.j2,t)
inherit(W.j9,t)
inherit(W.hQ,t)
inherit(W.di,t)
inherit(P.hL,t)
inherit(G.eU,t)
inherit(G.dJ,t)
inherit(G.c4,t)
inherit(G.c1,t)
inherit(G.c6,t)
inherit(G.cF,t)
inherit(G.cE,t)
inherit(G.w,t)
inherit(G.aW,t)
inherit(G.fQ,t)
inherit(G.br,t)
inherit(R.fB,t)
inherit(T.Z,t)
inherit(T.H,t)
inherit(T.t,t)
inherit(T.ab,t)
t=J.a
inherit(J.eC,t)
inherit(J.cc,t)
inherit(J.bg,t)
inherit(J.at,t)
inherit(J.aR,t)
inherit(J.av,t)
inherit(H.bj,t)
inherit(H.aV,t)
inherit(W.d,t)
inherit(W.dA,t)
inherit(W.dH,t)
inherit(W.aO,t)
inherit(W.W,t)
inherit(W.cK,t)
inherit(W.dU,t)
inherit(W.dV,t)
inherit(W.dW,t)
inherit(W.bW,t)
inherit(W.bX,t)
inherit(W.cL,t)
inherit(W.bZ,t)
inherit(W.cN,t)
inherit(W.dZ,t)
inherit(W.f,t)
inherit(W.cP,t)
inherit(W.eu,t)
inherit(W.cS,t)
inherit(W.eK,t)
inherit(W.eQ,t)
inherit(W.cW,t)
inherit(W.cn,t)
inherit(W.cZ,t)
inherit(W.a7,t)
inherit(W.d2,t)
inherit(W.cr,t)
inherit(W.d4,t)
inherit(W.a8,t)
inherit(W.d9,t)
inherit(W.dc,t)
inherit(W.fR,t)
inherit(W.de,t)
inherit(W.fW,t)
inherit(W.cH,t)
inherit(W.h4,t)
inherit(W.h6,t)
inherit(W.dj,t)
inherit(W.dl,t)
inherit(W.dn,t)
inherit(W.dq,t)
inherit(W.ds,t)
inherit(P.cU,t)
inherit(P.d0,t)
inherit(P.fg,t)
inherit(P.fh,t)
inherit(P.fk,t)
inherit(P.da,t)
inherit(P.dg,t)
inherit(P.dE,t)
inherit(P.fp,t)
inherit(P.fq,t)
inherit(P.d6,t)
t=J.bg
inherit(J.fe,t)
inherit(J.aF,t)
inherit(J.aw,t)
inherit(J.iU,J.at)
t=J.aR
inherit(J.cb,t)
inherit(J.ca,t)
t=P.Q
inherit(H.k,t)
inherit(H.cg,t)
inherit(H.cI,t)
t=H.k
inherit(H.aS,t)
inherit(H.eH,t)
inherit(H.e1,H.cg)
t=P.c9
inherit(H.eN,t)
inherit(H.h9,t)
t=H.aS
inherit(H.bh,t)
inherit(P.eJ,t)
t=H.ar
inherit(H.iA,t)
inherit(H.iB,t)
inherit(H.hD,t)
inherit(H.hn,t)
inherit(H.ey,t)
inherit(H.ez,t)
inherit(H.hK,t)
inherit(H.fT,t)
inherit(H.fU,t)
inherit(H.iC,t)
inherit(H.ik,t)
inherit(H.il,t)
inherit(H.im,t)
inherit(H.io,t)
inherit(H.ip,t)
inherit(H.fN,t)
inherit(H.eD,t)
inherit(H.ig,t)
inherit(H.ih,t)
inherit(H.ii,t)
inherit(P.hd,t)
inherit(P.hc,t)
inherit(P.he,t)
inherit(P.hf,t)
inherit(P.hs,t)
inherit(P.hw,t)
inherit(P.ht,t)
inherit(P.hu,t)
inherit(P.hv,t)
inherit(P.hz,t)
inherit(P.hA,t)
inherit(P.hy,t)
inherit(P.hx,t)
inherit(P.fH,t)
inherit(P.fI,t)
inherit(P.i2,t)
inherit(P.hO,t)
inherit(P.hN,t)
inherit(P.hP,t)
inherit(P.eM,t)
inherit(P.e_,t)
inherit(P.e0,t)
inherit(W.e2,t)
inherit(W.fE,t)
inherit(W.ha,t)
inherit(W.hq,t)
inherit(W.f3,t)
inherit(W.f2,t)
inherit(W.hR,t)
inherit(W.hS,t)
inherit(W.hY,t)
inherit(W.hZ,t)
inherit(P.i5,t)
inherit(B.iv,t)
inherit(B.iw,t)
inherit(B.ix,t)
inherit(B.iy,t)
inherit(B.iz,t)
inherit(B.f8,t)
inherit(B.f9,t)
inherit(B.fa,t)
inherit(B.fb,t)
inherit(B.fv,t)
inherit(A.ie,t)
inherit(Q.ir,t)
t=H.hh
inherit(H.b0,t)
inherit(H.bG,t)
t=P.aP
inherit(H.f4,t)
inherit(H.eE,t)
inherit(H.h2,t)
inherit(H.h_,t)
inherit(H.dI,t)
inherit(H.fr,t)
inherit(P.bR,t)
inherit(P.cq,t)
inherit(P.a4,t)
inherit(P.h3,t)
inherit(P.h1,t)
inherit(P.aY,t)
inherit(P.dK,t)
inherit(P.dT,t)
t=H.fN
inherit(H.fA,t)
inherit(H.ba,t)
inherit(H.hb,P.bR)
inherit(P.cf,P.aU)
t=P.cf
inherit(H.a6,t)
inherit(W.hg,t)
t=H.aV
inherit(H.eV,t)
inherit(H.cj,t)
t=H.cj
inherit(H.bx,t)
inherit(H.bz,t)
inherit(H.by,H.bx)
inherit(H.ck,H.by)
inherit(H.bA,H.bz)
inherit(H.cl,H.bA)
t=H.ck
inherit(H.ci,t)
inherit(H.eW,t)
t=H.cl
inherit(H.eX,t)
inherit(H.eY,t)
inherit(H.eZ,t)
inherit(H.f_,t)
inherit(H.f0,t)
inherit(H.cm,t)
inherit(H.f1,t)
inherit(P.hW,P.hi)
inherit(P.hM,P.i_)
inherit(P.hG,H.a6)
inherit(P.ft,P.fu)
inherit(P.hC,P.ft)
inherit(P.hE,P.hC)
inherit(P.cd,P.bw)
t=P.a2
inherit(P.S,t)
inherit(P.x,t)
t=P.a4
inherit(P.cs,t)
inherit(P.ex,t)
t=W.d
inherit(W.p,t)
inherit(W.aj,t)
inherit(W.en,t)
inherit(W.bf,t)
inherit(W.bi,t)
inherit(W.fi,t)
inherit(W.cu,t)
inherit(W.bC,t)
inherit(W.bE,t)
inherit(W.h7,t)
inherit(W.h8,t)
inherit(W.bs,t)
inherit(W.ja,t)
inherit(P.dF,t)
inherit(P.aM,t)
t=W.p
inherit(W.X,t)
inherit(W.aq,t)
inherit(W.bc,t)
t=W.X
inherit(W.j,t)
inherit(P.v,t)
t=W.aj
inherit(W.bQ,t)
inherit(W.et,t)
inherit(W.eL,t)
t=W.j
inherit(W.dB,t)
inherit(W.dC,t)
inherit(W.ao,t)
inherit(W.bS,t)
inherit(W.bV,t)
inherit(W.er,t)
inherit(W.c7,t)
inherit(W.fs,t)
inherit(W.cB,t)
inherit(W.fL,t)
inherit(W.fM,t)
inherit(W.bo,t)
t=W.aO
inherit(W.dL,t)
inherit(W.dN,t)
inherit(W.dO,t)
inherit(W.dR,t)
t=W.W
inherit(W.dM,t)
inherit(W.dQ,t)
inherit(W.dS,t)
inherit(W.aN,W.cK)
inherit(W.dX,W.bX)
inherit(W.cM,W.cL)
inherit(W.bY,W.cM)
inherit(W.cO,W.cN)
inherit(W.dY,W.cO)
inherit(W.cQ,W.cP)
inherit(W.em,W.cQ)
inherit(W.cT,W.cS)
inherit(W.be,W.cT)
inherit(W.c8,W.bc)
inherit(W.ev,W.bf)
inherit(W.aD,W.f)
t=W.aD
inherit(W.ax,t)
inherit(W.I,t)
inherit(W.aC,t)
inherit(W.eS,W.bi)
inherit(W.cX,W.cW)
inherit(W.eT,W.cX)
inherit(W.M,P.cd)
inherit(W.d_,W.cZ)
inherit(W.bk,W.d_)
inherit(W.d3,W.d2)
inherit(W.ff,W.d3)
inherit(W.bD,W.bC)
inherit(W.fw,W.bD)
inherit(W.d5,W.d4)
inherit(W.fy,W.d5)
inherit(W.fD,W.d9)
inherit(W.dd,W.dc)
inherit(W.fO,W.dd)
inherit(W.bF,W.bE)
inherit(W.fP,W.bF)
inherit(W.df,W.de)
inherit(W.fV,W.df)
inherit(W.aG,W.I)
inherit(W.dk,W.dj)
inherit(W.hj,W.dk)
inherit(W.hk,W.bZ)
inherit(W.dm,W.dl)
inherit(W.hB,W.dm)
inherit(W.dp,W.dn)
inherit(W.cY,W.dp)
inherit(W.dr,W.dq)
inherit(W.hT,W.dr)
inherit(W.dt,W.ds)
inherit(W.hU,W.dt)
inherit(W.hl,W.hg)
inherit(W.ho,P.fF)
inherit(W.jd,W.ho)
inherit(W.hp,P.fG)
inherit(W.hX,W.bB)
inherit(P.R,P.hL)
t=P.v
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
inherit(P.a5,t)
inherit(P.eO,t)
inherit(P.fc,t)
inherit(P.bm,t)
t=P.a5
inherit(P.eq,t)
inherit(P.Y,t)
inherit(P.ew,t)
inherit(P.fK,t)
inherit(P.bp,t)
inherit(P.h5,t)
inherit(P.cV,P.cU)
inherit(P.eF,P.cV)
inherit(P.d1,P.d0)
inherit(P.f5,P.d1)
inherit(P.fl,P.Y)
inherit(P.db,P.da)
inherit(P.fJ,P.db)
inherit(P.bq,P.bp)
inherit(P.dh,P.dg)
inherit(P.fX,P.dh)
inherit(P.f6,P.aM)
inherit(P.d7,P.d6)
inherit(P.fz,P.d7)
t=G.eU
inherit(G.fx,t)
inherit(G.aE,t)
inherit(G.eR,t)
inherit(G.fn,t)
inherit(G.dG,G.fx)
inherit(B.f7,G.dG)
t=G.aE
inherit(G.eP,t)
inherit(G.fd,t)
inherit(G.h0,G.br)
inherit(R.fC,R.fB)
mixin(H.bx,P.l)
mixin(H.by,H.aQ)
mixin(H.bz,P.l)
mixin(H.bA,H.aQ)
mixin(P.bw,P.l)
mixin(W.cK,W.dP)
mixin(W.cL,P.l)
mixin(W.cM,W.m)
mixin(W.cN,P.l)
mixin(W.cO,W.m)
mixin(W.cP,P.l)
mixin(W.cQ,W.m)
mixin(W.cS,P.l)
mixin(W.cT,W.m)
mixin(W.cW,P.l)
mixin(W.cX,W.m)
mixin(W.cZ,P.l)
mixin(W.d_,W.m)
mixin(W.d2,P.l)
mixin(W.d3,W.m)
mixin(W.bC,P.l)
mixin(W.bD,W.m)
mixin(W.d4,P.l)
mixin(W.d5,W.m)
mixin(W.d9,P.aU)
mixin(W.dc,P.l)
mixin(W.dd,W.m)
mixin(W.bE,P.l)
mixin(W.bF,W.m)
mixin(W.de,P.l)
mixin(W.df,W.m)
mixin(W.dj,P.l)
mixin(W.dk,W.m)
mixin(W.dl,P.l)
mixin(W.dm,W.m)
mixin(W.dn,P.l)
mixin(W.dp,W.m)
mixin(W.dq,P.l)
mixin(W.dr,W.m)
mixin(W.ds,P.l)
mixin(W.dt,W.m)
mixin(P.cU,P.l)
mixin(P.cV,W.m)
mixin(P.d0,P.l)
mixin(P.d1,W.m)
mixin(P.da,P.l)
mixin(P.db,W.m)
mixin(P.dg,P.l)
mixin(P.dh,W.m)
mixin(P.d6,P.l)
mixin(P.d7,W.m)})();(function constants(){C.o=W.ao.prototype
C.H=W.bS.prototype
C.u=W.aN.prototype
C.p=W.bV.prototype
C.I=W.bW.prototype
C.J=W.c7.prototype
C.j=W.c8.prototype
C.K=J.a.prototype
C.a=J.at.prototype
C.w=J.ca.prototype
C.b=J.cb.prototype
C.L=J.cc.prototype
C.c=J.aR.prototype
C.i=J.av.prototype
C.S=J.aw.prototype
C.W=H.ci.prototype
C.z=W.bk.prototype
C.A=J.fe.prototype
C.B=W.cr.prototype
C.G=W.cB.prototype
C.t=J.aF.prototype
C.au=W.aG.prototype
C.av=W.bs.prototype
C.f=new P.hM()
C.v=new P.as(0)
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
C.T=H.A(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.n])
C.U=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.V=makeConstList([])
C.q=H.A(makeConstList(["bind","if","ref","repeat","syntax"]),[P.n])
C.r=H.A(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.n])
C.X=new G.w("vec3","vertex btangents",0)
C.d=new G.w("vec3","",0)
C.Y=new G.w("vec4","delta from light",0)
C.n=new G.w("","",0)
C.C=new G.w("vec3","vertex coordinates",0)
C.Z=new G.w("vec3","vertex binormals",0)
C.D=new G.w("vec4","for wireframe",0)
C.a_=new G.w("vec4","per vertex color",0)
C.a0=new G.w("float","for normal maps",0)
C.k=new G.w("mat4","",0)
C.a2=new G.w("mat4","",4)
C.a1=new G.w("mat4","",128)
C.e=new G.w("float","",0)
C.a3=new G.w("float","",4)
C.a4=new G.w("float","depth for shadowmaps",0)
C.h=new G.w("sampler2D","",0)
C.a5=new G.w("float","for bump maps",0)
C.a6=new G.w("vec2","texture uvs",0)
C.a7=new G.w("float","time since program start in sec",0)
C.l=new G.w("vec2","",0)
C.a8=new G.w("samplerCube","",0)
C.m=new G.w("vec4","",0)
C.a9=new G.w("vec3","vertex normals",0)
C.aa=new G.w("sampler2DShadow","",0)
C.E=new G.w("vec3","per vertex color",0)
C.F=new G.w("mat3","",0)
C.ab=new G.w("vec3","vertex tangents",0)
C.ac=H.F("nn")
C.ad=H.F("no")
C.ae=H.F("ep")
C.af=H.F("np")
C.ag=H.F("nq")
C.ah=H.F("k1")
C.ai=H.F("nr")
C.aj=H.F("k4")
C.ak=H.F("J")
C.al=H.F("n")
C.am=H.F("ks")
C.an=H.F("kt")
C.ao=H.F("nt")
C.ap=H.F("ku")
C.aq=H.F("af")
C.ar=H.F("S")
C.as=H.F("x")
C.at=H.F("a2")})();(function staticFields(){$.ka="$cachedFunction"
$.kb="$cachedInvocation"
$.jM=null
$.jK=null
$.jg=!1
$.jl=null
$.kI=null
$.l2=null
$.i8=null
$.ij=null
$.jm=null
$.b1=null
$.bH=null
$.bI=null
$.jh=!1
$.z=C.f
$.jZ=0
$.ai=null
$.iQ=null
$.jY=null
$.jX=null
$.jV=null
$.jU=null
$.jT=null
$.jS=null
$.mW=0
$.mX=0
$.jq=0
$.l_=0
$.bN=0
$.bO=0
$.nk=!1
$.kS=0})();(function lazyInitializers(){lazy($,"jR","$get$jR",function(){return H.kW("_$dart_dartClosure")})
lazy($,"iW","$get$iW",function(){return H.kW("_$dart_js")})
lazy($,"k2","$get$k2",function(){return H.m9()})
lazy($,"k3","$get$k3",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.jZ
$.jZ=t+1
t="expando$key$"+t}return new P.e3(t,null,[P.x])})
lazy($,"kg","$get$kg",function(){return H.a9(H.fZ({
toString:function(){return"$receiver$"}}))})
lazy($,"kh","$get$kh",function(){return H.a9(H.fZ({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"ki","$get$ki",function(){return H.a9(H.fZ(null))})
lazy($,"kj","$get$kj",function(){return H.a9(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kn","$get$kn",function(){return H.a9(H.fZ(void 0))})
lazy($,"ko","$get$ko",function(){return H.a9(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kl","$get$kl",function(){return H.a9(H.km(null))})
lazy($,"kk","$get$kk",function(){return H.a9(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"kq","$get$kq",function(){return H.a9(H.km(void 0))})
lazy($,"kp","$get$kp",function(){return H.a9(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"jc","$get$jc",function(){return P.mz()})
lazy($,"bJ","$get$bJ",function(){return[]})
lazy($,"jQ","$get$jQ",function(){return{}})
lazy($,"kz","$get$kz",function(){return P.j_(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"je","$get$je",function(){return P.E()})
lazy($,"i7","$get$i7",function(){return P.k5(P.x,P.af)})
lazy($,"bL","$get$bL",function(){return P.k5(P.n,P.af)})
lazy($,"kd","$get$kd",function(){return new G.cF(1281,0,4294967295)})
lazy($,"jI","$get$jI",function(){return new G.cE(1281,1281,1281)})
lazy($,"N","$get$N",function(){return P.ay(["cBlendEquation",C.n,"cDepthWrite",C.n,"cDepthTest",C.n,"cStencilFunc",C.n,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColors",C.E,"aColorAlpha",C.a_,"aPosition",C.C,"aTexUV",C.a6,"aNormal",C.a9,"aBinormal",C.Z,"aCenter",C.D,"aPointSize",C.e,"aBoneIndex",C.m,"aBoneWeight",C.m,"aTangent",C.ab,"aBitangent",C.X,"iaRotation",C.m,"iaTranslation",C.d,"iaScale",C.d,"vColor",C.E,"vTexUV",C.l,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.C,"vPositionFromLight",C.Y,"vCenter",C.D,"vDepth",C.a4,"uTransformationMatrix",C.k,"uModelMatrix",C.k,"uNormalMatrix",C.F,"uConvolutionMatrix",C.F,"uPerspectiveViewMatrix",C.k,"uLightPerspectiveViewMatrix",C.k,"uShadowMap",C.aa,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a8,"uAnimationTable",C.h,"uTime",C.a7,"uCameraNear",C.e,"uCameraFar",C.e,"uFogNear",C.e,"uFogFar",C.e,"uPointSize",C.e,"uScale",C.e,"uAngle",C.e,"uCanvasSize",C.l,"uCenter2",C.l,"uCutOff",C.e,"uShininess",C.e,"uShadowBias",C.e,"uOpacity",C.e,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.m,"uColorAlpha2",C.m,"uEyePosition",C.d,"uMaterial",C.k,"uRange",C.l,"uDirection",C.l,"uBoneMatrices",C.a1,"uLightDescs",C.a2,"uLightCount",C.e,"uLightTypes",C.a3,"uBumpScale",C.a5,"uNormalScale",C.a0])})
lazy($,"kf","$get$kf",function(){var t=new G.fQ(!1,!1,!1,!0,1,9729,9729)
t.d=!1
t.b=!0
t.f=9728
t.r=9728
return t})
lazy($,"jP","$get$jP",function(){return T.mx(1,1,1)})
lazy($,"kK","$get$kK",function(){var t=G.cv("uv-passthru")
t.au(["aPosition","aTexUV"])
t.T(["vTexUV"])
t.aM(["gl_Position = vec4(aPosition, 1.0);","vTexUV = aTexUV;"])
return t})
lazy($,"kJ","$get$kJ",function(){var t=G.cv("BloomPassF")
t.T(["vTexUV"])
t.ac(["uTexture","uTexture2","uScale","uColor"])
t.ae(["void main() {\n\toFragColor = texture(uTexture, vTexUV) +\n\t                uScale *\n\t                vec4(uColor, 1.0) *\n\t                texture(uTexture2, vTexUV);\n}\n"])
return t})
lazy($,"kQ","$get$kQ",function(){var t=G.cv("uv-passthru")
t.au(["aPosition","aTexUV"])
t.T(["vTexUV"])
t.aM(["gl_Position = vec4(aPosition, 1.0);","vTexUV = aTexUV;"])
return t})
lazy($,"kZ","$get$kZ",function(){var t=G.cv("LuminosityHighPassF")
t.T(["vTexUV"])
t.ac(["uRange","uColorAlpha","uTexture"])
t.ae(["\n// http://stackoverflow.com/questions/596216/formula-to-determine-brightness-of-rgb-color\nfloat RGB2Luma(vec3 rgb) { return dot(rgb, vec3(0.212, 0.715, 0.072)); }\n// float RGB2Luma(vec3 rgb) { return dot(rgb, vec3(0.299, 0.587, 0.114)); }\n\nvoid main() {\n    vec4 color = texture(uTexture, vTexUV);\n    float luma = RGB2Luma(color.rgb);\n    float alpha = smoothstep(uRange.x, uRange.y, luma);\n    oFragColor = mix(uColorAlpha, color, alpha );\n}\n"])
return t})
lazy($,"l1","$get$l1",function(){var t=G.cv("PerlinNoiseV")
t.au(["aPosition"])
t.T(["vNormal"])
t.ac(["uPerspectiveViewMatrix","uModelMatrix","uTime"])
t.ae(["vec3 mod289(vec3 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x)\n{\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec3 fade(vec3 t) {\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\n\n// Classic Perlin noise, periodic variant\nfloat pnoise(vec3 P, vec3 rep)\n{\n  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \n  return 2.2 * n_xyz;\n}\n","void main() {\n    vec3 normal = normalize( aPosition);\n    float f = 0.5 * pnoise( normal + uTime/3.0, vec3( 10.0 ) );\n    //vNormal = aPosition + f * normal;\n    //vNormal = f*normal;\n    vNormal = normal;\n    gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);\n}\n"])
return t})
lazy($,"kT","$get$kT",function(){return C.j.b8(W.kP(),"#luminance")})
lazy($,"kR","$get$kR",function(){return C.j.b8(W.kP(),"#intensity")})})()
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
mangledGlobalNames:{x:"int",S:"double",a2:"num",n:"String",af:"bool",J:"Null",h:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.p},{func:1,ret:P.af,args:[W.X,P.n,P.n,W.bu]},{func:1,v:true,args:[P.C],opt:[P.aX]},{func:1,ret:P.x,args:[P.D,P.D]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,Blob:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSCharsetRule:J.a,CSSConditionRule:J.a,CSSFontFaceRule:J.a,CSSGroupingRule:J.a,CSSImportRule:J.a,CSSKeyframeRule:J.a,MozCSSKeyframeRule:J.a,WebKitCSSKeyframeRule:J.a,CSSKeyframesRule:J.a,MozCSSKeyframesRule:J.a,WebKitCSSKeyframesRule:J.a,CSSMediaRule:J.a,CSSNamespaceRule:J.a,CSSPageRule:J.a,CSSRule:J.a,CSSStyleRule:J.a,CSSStyleSheet:J.a,CSSSupportsRule:J.a,CSSVariableReferenceValue:J.a,CSSViewportRule:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,File:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,Gamepad:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MimeType:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechGrammar:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,StyleSheet:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,Touch:J.a,TrackDefault:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGLength:J.a,SVGMatrix:J.a,SVGNumber:J.a,SVGPreserveAspectRatio:J.a,SVGTransform:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioParamMap:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bj,ArrayBufferView:H.aV,DataView:H.eV,Float32Array:H.ci,Float64Array:H.eW,Int16Array:H.eX,Int32Array:H.eY,Int8Array:H.eZ,Uint16Array:H.f_,Uint32Array:H.f0,Uint8ClampedArray:H.cm,CanvasPixelArray:H.cm,Uint8Array:H.f1,HTMLAudioElement:W.j,HTMLBRElement:W.j,HTMLBaseElement:W.j,HTMLButtonElement:W.j,HTMLContentElement:W.j,HTMLDListElement:W.j,HTMLDataElement:W.j,HTMLDataListElement:W.j,HTMLDetailsElement:W.j,HTMLDialogElement:W.j,HTMLEmbedElement:W.j,HTMLFieldSetElement:W.j,HTMLHRElement:W.j,HTMLHeadingElement:W.j,HTMLHtmlElement:W.j,HTMLIFrameElement:W.j,HTMLImageElement:W.j,HTMLInputElement:W.j,HTMLLIElement:W.j,HTMLLabelElement:W.j,HTMLLegendElement:W.j,HTMLLinkElement:W.j,HTMLMapElement:W.j,HTMLMediaElement:W.j,HTMLMenuElement:W.j,HTMLMetaElement:W.j,HTMLMeterElement:W.j,HTMLModElement:W.j,HTMLOListElement:W.j,HTMLObjectElement:W.j,HTMLOptGroupElement:W.j,HTMLOptionElement:W.j,HTMLOutputElement:W.j,HTMLParagraphElement:W.j,HTMLParamElement:W.j,HTMLPictureElement:W.j,HTMLPreElement:W.j,HTMLProgressElement:W.j,HTMLQuoteElement:W.j,HTMLScriptElement:W.j,HTMLShadowElement:W.j,HTMLSlotElement:W.j,HTMLSourceElement:W.j,HTMLSpanElement:W.j,HTMLStyleElement:W.j,HTMLTableCaptionElement:W.j,HTMLTableCellElement:W.j,HTMLTableDataCellElement:W.j,HTMLTableHeaderCellElement:W.j,HTMLTableColElement:W.j,HTMLTextAreaElement:W.j,HTMLTimeElement:W.j,HTMLTitleElement:W.j,HTMLTrackElement:W.j,HTMLUListElement:W.j,HTMLUnknownElement:W.j,HTMLVideoElement:W.j,HTMLDirectoryElement:W.j,HTMLFontElement:W.j,HTMLFrameElement:W.j,HTMLFrameSetElement:W.j,HTMLMarqueeElement:W.j,HTMLElement:W.j,Accelerometer:W.bQ,LinearAccelerationSensor:W.bQ,AccessibleNodeList:W.dA,HTMLAnchorElement:W.dB,HTMLAreaElement:W.dC,HTMLBodyElement:W.ao,HTMLCanvasElement:W.bS,CanvasRenderingContext2D:W.dH,CDATASection:W.aq,CharacterData:W.aq,Comment:W.aq,ProcessingInstruction:W.aq,Text:W.aq,CSSPerspective:W.dL,CSSPositionValue:W.dM,CSSRotation:W.dN,CSSScale:W.dO,CSSStyleDeclaration:W.aN,MSStyleCSSProperties:W.aN,CSS2Properties:W.aN,CSSImageValue:W.W,CSSKeywordValue:W.W,CSSNumericValue:W.W,CSSResourceValue:W.W,CSSUnitValue:W.W,CSSURLImageValue:W.W,CSSStyleValue:W.W,CSSMatrixComponent:W.aO,CSSSkew:W.aO,CSSTransformComponent:W.aO,CSSTransformValue:W.dQ,CSSTranslation:W.dR,CSSUnparsedValue:W.dS,DataTransferItemList:W.dU,DeviceAcceleration:W.dV,HTMLDivElement:W.bV,XMLDocument:W.bc,Document:W.bc,DOMException:W.dW,DOMImplementation:W.bW,DOMPoint:W.dX,DOMPointReadOnly:W.bX,ClientRectList:W.bY,DOMRectList:W.bY,DOMRectReadOnly:W.bZ,DOMStringList:W.dY,DOMTokenList:W.dZ,Element:W.X,AbortPaymentEvent:W.f,AnimationEvent:W.f,AnimationPlaybackEvent:W.f,ApplicationCacheErrorEvent:W.f,BackgroundFetchClickEvent:W.f,BackgroundFetchEvent:W.f,BackgroundFetchFailEvent:W.f,BackgroundFetchedEvent:W.f,BeforeInstallPromptEvent:W.f,BeforeUnloadEvent:W.f,BlobEvent:W.f,CanMakePaymentEvent:W.f,ClipboardEvent:W.f,CloseEvent:W.f,CustomEvent:W.f,DeviceMotionEvent:W.f,DeviceOrientationEvent:W.f,ErrorEvent:W.f,ExtendableEvent:W.f,ExtendableMessageEvent:W.f,FetchEvent:W.f,FontFaceSetLoadEvent:W.f,ForeignFetchEvent:W.f,GamepadEvent:W.f,HashChangeEvent:W.f,InstallEvent:W.f,MediaEncryptedEvent:W.f,MediaKeyMessageEvent:W.f,MediaQueryListEvent:W.f,MediaStreamEvent:W.f,MediaStreamTrackEvent:W.f,MessageEvent:W.f,MIDIConnectionEvent:W.f,MIDIMessageEvent:W.f,MutationEvent:W.f,NotificationEvent:W.f,PageTransitionEvent:W.f,PaymentRequestEvent:W.f,PaymentRequestUpdateEvent:W.f,PopStateEvent:W.f,PresentationConnectionAvailableEvent:W.f,PresentationConnectionCloseEvent:W.f,ProgressEvent:W.f,PromiseRejectionEvent:W.f,PushEvent:W.f,RTCDataChannelEvent:W.f,RTCDTMFToneChangeEvent:W.f,RTCPeerConnectionIceEvent:W.f,RTCTrackEvent:W.f,SecurityPolicyViolationEvent:W.f,SensorErrorEvent:W.f,SpeechRecognitionError:W.f,SpeechRecognitionEvent:W.f,SpeechSynthesisEvent:W.f,StorageEvent:W.f,SyncEvent:W.f,TrackEvent:W.f,TransitionEvent:W.f,WebKitTransitionEvent:W.f,VRDeviceEvent:W.f,VRDisplayEvent:W.f,VRSessionEvent:W.f,MojoInterfaceRequestEvent:W.f,ResourceProgressEvent:W.f,USBConnectionEvent:W.f,IDBVersionChangeEvent:W.f,AudioProcessingEvent:W.f,OfflineAudioCompletionEvent:W.f,WebGLContextEvent:W.f,Event:W.f,InputEvent:W.f,AccessibleNode:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RemotePlayback:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SourceBuffer:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,TextTrack:W.d,TextTrackCue:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,VTTCue:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,ServiceWorker:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,FileList:W.em,FileWriter:W.en,HTMLFormElement:W.er,Gyroscope:W.et,HTMLHeadElement:W.c7,History:W.eu,HTMLCollection:W.be,HTMLFormControlsCollection:W.be,HTMLOptionsCollection:W.be,HTMLDocument:W.c8,XMLHttpRequest:W.ev,XMLHttpRequestUpload:W.bf,XMLHttpRequestEventTarget:W.bf,KeyboardEvent:W.ax,Location:W.eK,Magnetometer:W.eL,MediaList:W.eQ,MIDIOutput:W.eS,MIDIInput:W.bi,MIDIPort:W.bi,MimeTypeArray:W.eT,PointerEvent:W.I,MouseEvent:W.I,DragEvent:W.I,DocumentFragment:W.p,ShadowRoot:W.p,Attr:W.p,DocumentType:W.p,Node:W.p,NodeIterator:W.cn,NodeList:W.bk,RadioNodeList:W.bk,Plugin:W.a7,PluginArray:W.ff,PresentationConnection:W.fi,Range:W.cr,RTCDataChannel:W.cu,DataChannel:W.cu,HTMLSelectElement:W.fs,AbsoluteOrientationSensor:W.aj,AmbientLightSensor:W.aj,OrientationSensor:W.aj,RelativeOrientationSensor:W.aj,Sensor:W.aj,SourceBufferList:W.fw,SpeechGrammarList:W.fy,SpeechRecognitionResult:W.a8,Storage:W.fD,HTMLTableElement:W.cB,HTMLTableRowElement:W.fL,HTMLTableSectionElement:W.fM,HTMLTemplateElement:W.bo,TextTrackCueList:W.fO,TextTrackList:W.fP,TimeRanges:W.fR,TouchEvent:W.aC,TouchList:W.fV,TrackDefaultList:W.fW,TreeWalker:W.cH,CompositionEvent:W.aD,FocusEvent:W.aD,TextEvent:W.aD,UIEvent:W.aD,URL:W.h4,VRStageBoundsPoint:W.h6,VideoTrackList:W.h7,WebSocket:W.h8,WheelEvent:W.aG,Window:W.bs,DOMWindow:W.bs,CSSRuleList:W.hj,DOMRect:W.hk,GamepadList:W.hB,NamedNodeMap:W.cY,MozNamedAttrMap:W.cY,SpeechRecognitionResultList:W.hT,StyleSheetList:W.hU,SVGFEBlendElement:P.e4,SVGFEColorMatrixElement:P.e5,SVGFEComponentTransferElement:P.e6,SVGFECompositeElement:P.e7,SVGFEConvolveMatrixElement:P.e8,SVGFEDiffuseLightingElement:P.e9,SVGFEDisplacementMapElement:P.ea,SVGFEFloodElement:P.eb,SVGFEGaussianBlurElement:P.ec,SVGFEImageElement:P.ed,SVGFEMergeElement:P.ee,SVGFEMorphologyElement:P.ef,SVGFEOffsetElement:P.eg,SVGFEPointLightElement:P.eh,SVGFESpecularLightingElement:P.ei,SVGFESpotLightElement:P.ej,SVGFETileElement:P.ek,SVGFETurbulenceElement:P.el,SVGFilterElement:P.eo,SVGForeignObjectElement:P.eq,SVGCircleElement:P.Y,SVGEllipseElement:P.Y,SVGLineElement:P.Y,SVGPathElement:P.Y,SVGPolygonElement:P.Y,SVGPolylineElement:P.Y,SVGGeometryElement:P.Y,SVGAElement:P.a5,SVGClipPathElement:P.a5,SVGDefsElement:P.a5,SVGGElement:P.a5,SVGSwitchElement:P.a5,SVGGraphicsElement:P.a5,SVGImageElement:P.ew,SVGLengthList:P.eF,SVGMaskElement:P.eO,SVGNumberList:P.f5,SVGPatternElement:P.fc,SVGPoint:P.fg,SVGPointList:P.fh,SVGRect:P.fk,SVGRectElement:P.fl,SVGScriptElement:P.bm,SVGStringList:P.fJ,SVGAnimateElement:P.v,SVGAnimateMotionElement:P.v,SVGAnimateTransformElement:P.v,SVGAnimationElement:P.v,SVGDescElement:P.v,SVGDiscardElement:P.v,SVGFEDistantLightElement:P.v,SVGFEFuncAElement:P.v,SVGFEFuncBElement:P.v,SVGFEFuncGElement:P.v,SVGFEFuncRElement:P.v,SVGFEMergeNodeElement:P.v,SVGLinearGradientElement:P.v,SVGMarkerElement:P.v,SVGMetadataElement:P.v,SVGRadialGradientElement:P.v,SVGSetElement:P.v,SVGStopElement:P.v,SVGStyleElement:P.v,SVGSymbolElement:P.v,SVGTitleElement:P.v,SVGViewElement:P.v,SVGGradientElement:P.v,SVGComponentTransferFunctionElement:P.v,SVGFEDropShadowElement:P.v,SVGMPathElement:P.v,SVGElement:P.v,SVGSVGElement:P.fK,SVGTextPathElement:P.bp,SVGTextContentElement:P.bp,SVGTSpanElement:P.bq,SVGTextElement:P.bq,SVGTextPositioningElement:P.bq,SVGTransformList:P.fX,SVGUseElement:P.h5,AudioBuffer:P.dE,AudioTrackList:P.dF,AudioContext:P.aM,webkitAudioContext:P.aM,BaseAudioContext:P.aM,OfflineAudioContext:P.f6,WebGLRenderingContext:P.fp,WebGL2RenderingContext:P.fq,SQLResultSetRowList:P.fz})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,Blob:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSStyleSheet:true,CSSSupportsRule:true,CSSVariableReferenceValue:true,CSSViewportRule:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,File:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,Gamepad:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechGrammar:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,StyleSheet:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,Touch:true,TrackDefault:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGLength:true,SVGMatrix:true,SVGNumber:true,SVGPreserveAspectRatio:true,SVGTransform:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioParamMap:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,Accelerometer:true,LinearAccelerationSensor:true,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSPositionValue:true,CSSRotation:true,CSSScale:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSSkew:true,CSSTransformComponent:false,CSSTransformValue:true,CSSTranslation:true,CSSUnparsedValue:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMPoint:true,DOMPointReadOnly:false,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AccessibleNode:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnectionList:true,PresentationRequest:true,RemotePlayback:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SourceBuffer:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,TextTrack:true,TextTrackCue:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,VTTCue:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,ServiceWorker:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,FileList:true,FileWriter:true,HTMLFormElement:true,Gyroscope:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,KeyboardEvent:true,Location:true,Magnetometer:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,PresentationConnection:true,Range:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,AbsoluteOrientationSensor:true,AmbientLightSensor:true,OrientationSensor:true,RelativeOrientationSensor:true,Sensor:false,SourceBufferList:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VRStageBoundsPoint:true,VideoTrackList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGAElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLengthList:true,SVGMaskElement:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMetadataElement:true,SVGRadialGradientElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSymbolElement:true,SVGTitleElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGSVGElement:true,SVGTextPathElement:true,SVGTextContentElement:false,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransformList:true,SVGUseElement:true,AudioBuffer:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cj.$nativeSuperclassTag="ArrayBufferView"
H.bx.$nativeSuperclassTag="ArrayBufferView"
H.by.$nativeSuperclassTag="ArrayBufferView"
H.ck.$nativeSuperclassTag="ArrayBufferView"
H.bz.$nativeSuperclassTag="ArrayBufferView"
H.bA.$nativeSuperclassTag="ArrayBufferView"
H.cl.$nativeSuperclassTag="ArrayBufferView"
W.bC.$nativeSuperclassTag="EventTarget"
W.bD.$nativeSuperclassTag="EventTarget"
W.bE.$nativeSuperclassTag="EventTarget"
W.bF.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.l4(Q.kO(),b)},[])
else (function(b){H.l4(Q.kO(),b)})([])})})()