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
a[c]=function(){a[c]=function(){H.mp(b)}
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
return d?function(e){if(t===null)t=H.iq(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.iq(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.iq(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={hY:function hY(a){this.a=a},
i4:function(a,b,c,d){if(!!a.$isk)return new H.dF(a,b,[c,d])
return new H.c5(a,b,[c,d])},
dU:function(){return new P.aN("No element")},
lg:function(){return new P.aN("Too many elements")},
lf:function(){return new P.aN("Too few elements")},
lx:function(a,b){H.ci(a,0,J.aZ(a)-1,b)},
ci:function(a,b,c,d){if(c-b<=32)H.lw(a,b,c,d)
else H.lv(a,b,c,d)},
lw:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.N(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.Y(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.j(a,q,s.h(a,p))
q=p}s.j(a,q,r)}},
lv:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.b(t>32)
s=C.b.u(t+1,6)
r=a3+s
q=a4-s
p=C.b.u(a3+a4,2)
o=p-s
n=p+s
t=J.N(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.Y(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.Y(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.Y(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.Y(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.Y(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.Y(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.Y(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.Y(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.Y(a5.$2(j,i),0)){h=i
i=j
j=h}t.j(a2,r,m)
t.j(a2,p,k)
t.j(a2,q,i)
t.j(a2,o,t.h(a2,a3))
t.j(a2,n,t.h(a2,a4))
g=a3+1
f=a4-1
if(J.A(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=t.h(a2,e)
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
H.ci(a2,a3,g-2,a5)
H.ci(a2,f+2,a4,a5)
if(a0)return
if(g<r&&f>q){for(;J.A(a5.$2(t.h(a2,g),l),0);)++g
for(;J.A(a5.$2(t.h(a2,f),j),0);)--f
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
break}}H.ci(a2,g,f,a5)}else H.ci(a2,g,f,a5)},
k:function k(){},
aJ:function aJ(){},
c3:function c3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
c5:function c5(a,b,c){this.a=a
this.b=b
this.$ti=c},
dF:function dF(a,b,c){this.a=a
this.b=b
this.$ti=c},
e4:function e4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
b7:function b7(a,b,c){this.a=a
this.b=b
this.$ti=c},
cv:function cv(a,b,c){this.a=a
this.b=b
this.$ti=c},
fj:function fj(a,b,c){this.a=a
this.b=b
this.$ti=c},
aH:function aH(){},
dg:function(a,b){var t=a.a9(b)
if(!u.globalState.d.cy)u.globalState.f.ag()
return t},
hi:function(){++u.globalState.f.b},
hw:function(){--u.globalState.f.b
H.b(u.globalState.f.b>=0)},
k7:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.v(s).$isl)throw H.c(P.iQ("Arguments to main must be a List: "+H.e(s)))
u.globalState=new H.fT(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$ja()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.fw(P.i3(null,H.aA),0)
q=P.x
s.sez(new H.a0(0,null,null,null,null,null,0,[q,H.aP]))
s.seC(new H.a0(0,null,null,null,null,null,0,[q,null]))
if(s.x){r=new H.fS()
s.Q=r
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.la,r)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.lJ)}if(u.globalState.x)return
o=H.jH()
u.globalState.e=o
u.globalState.z.j(0,o.a,o)
u.globalState.d=o
if(H.aW(a,{func:1,args:[P.I]}))o.a9(new H.hH(t,a))
else if(H.aW(a,{func:1,args:[P.I,P.I]}))o.a9(new H.hI(t,a))
else o.a9(a)
u.globalState.f.ag()},
lJ:function(a){var t=P.aq(["command","print","msg",a])
return new H.V(!0,P.aQ(null,P.x)).G(t)},
jH:function(){var t,s
t=u.globalState.a++
s=P.x
t=new H.aP(t,new H.a0(0,null,null,null,null,null,0,[s,H.cg]),P.ar(null,null,null,s),u.createNewIsolate(),new H.cg(0,null,!1),new H.ah(H.k6()),new H.ah(H.k6()),!1,!1,[],P.ar(null,null,null,null),null,null,!1,!0,P.ar(null,null,null,null))
t.dg()
return t},
lc:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.ld()
return},
ld:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.c(P.t("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.c(P.t('Cannot extract URI from "'+t+'"'))},
la:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=new H.az(!0,[]).R(b.data)
s=J.N(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.mc(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.az(!0,[]).R(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.az(!0,[]).R(s.h(t,"replyTo"))
k=H.jH()
u.globalState.f.a.M(0,new H.aA(k,new H.dR(q,p,o,n,m,l),"worker-start"))
u.globalState.d=k
u.globalState.f.ag()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.kJ(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.ag()
break
case"close":u.globalState.ch.af(0,$.$get$jb().h(0,a))
a.terminate()
u.globalState.f.ag()
break
case"log":H.l9(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
j=P.aq(["command","print","msg",t])
j=new H.V(!0,P.aQ(null,P.x)).G(j)
s.toString
self.postMessage(j)}else P.R(s.h(t,"msg"))
break
case"error":throw H.c(s.h(t,"msg"))}},
l9:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aq(["command","log","msg",a])
r=new H.V(!0,P.aQ(null,P.x)).G(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.H(q)
t=H.ad(q)
s=P.bS(t)
throw H.c(s)}},
lb:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.jk=$.jk+("_"+s)
$.jl=$.jl+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.D(0,["spawned",new H.aR(s,r),q,t.r])
r=new H.dS(t,d,a,c,b)
if(e){t.bD(q,q)
u.globalState.f.a.M(0,new H.aA(t,r,"start isolate"))}else r.$0()},
ly:function(a,b){var t=new H.f3(!0,!1,null,0)
t.d7(a,b)
return t},
lL:function(a){return new H.az(!0,[]).R(new H.V(!1,P.aQ(null,P.x)).G(a))},
hH:function hH(a,b){this.a=a
this.b=b},
hI:function hI(a,b){this.a=a
this.b=b},
fT:function fT(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
aP:function aP(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
fN:function fN(a,b){this.a=a
this.b=b},
fw:function fw(a,b){this.a=a
this.b=b},
fx:function fx(a){this.a=a},
aA:function aA(a,b,c){this.a=a
this.b=b
this.c=c},
fS:function fS(){},
dR:function dR(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dS:function dS(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fr:function fr(){},
aR:function aR(a,b){this.b=a
this.a=b},
fU:function fU(a,b){this.a=a
this.b=b},
bw:function bw(a,b,c){this.b=a
this.c=b
this.a=c},
cg:function cg(a,b,c){this.a=a
this.b=b
this.c=c},
f3:function f3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f4:function f4(a,b){this.a=a
this.b=b},
f5:function f5(a,b){this.a=a
this.b=b},
ah:function ah(a){this.a=a},
V:function V(a,b){this.a=a
this.b=b},
az:function az(a,b){this.a=a
this.b=b},
m6:function(a){return u.types[a]},
me:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.v(a).$isr},
e:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.b_(a)
if(typeof t!=="string")throw H.c(H.G(a))
return t},
lt:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t=J.am(t)
s=t[0]
r=t[1]
return new H.ez(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
at:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
ji:function(a,b){throw H.c(new P.dL(a,null,null))},
lq:function(a,b,c){var t,s
if(typeof a!=="string")H.E(H.G(a))
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return H.ji(a,c)
s=t[3]
if(s!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return H.ji(a,c)},
bc:function(a){var t,s,r,q,p,o,n,m,l
t=J.v(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.N||!!J.v(a).$isax){p=C.C(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.j.bo(q,0)===36)q=C.j.cO(q,1)
l=H.hv(H.hk(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+l,u.mangledGlobalNames)},
J:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lp:function(a){return a.b?H.J(a).getUTCFullYear()+0:H.J(a).getFullYear()+0},
ln:function(a){return a.b?H.J(a).getUTCMonth()+1:H.J(a).getMonth()+1},
lj:function(a){return a.b?H.J(a).getUTCDate()+0:H.J(a).getDate()+0},
lk:function(a){return a.b?H.J(a).getUTCHours()+0:H.J(a).getHours()+0},
lm:function(a){return a.b?H.J(a).getUTCMinutes()+0:H.J(a).getMinutes()+0},
lo:function(a){return a.b?H.J(a).getUTCSeconds()+0:H.J(a).getSeconds()+0},
ll:function(a){return a.b?H.J(a).getUTCMilliseconds()+0:H.J(a).getMilliseconds()+0},
jj:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.c(H.G(a))
return a[b]},
aV:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.Z(!0,b,"index",null)
t=J.aZ(a)
if(b<0||C.b.ct(b,t))return P.y(b,a,"index",null,t)
return P.ey(b,"index",null)},
G:function(a){return new P.Z(!0,a,null,null)},
c:function(a){var t
if(a==null)a=new P.ce()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.k8})
t.name=""}else t.toString=H.k8
return t},
k8:function(){return J.b_(this.dartException)},
E:function(a){throw H.c(a)},
P:function(a){throw H.c(P.aa(a))},
a4:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.f9(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
fa:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
jw:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
jh:function(a,b){return new H.ej(a,b==null?null:b.method)},
i_:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.dX(a,s,t?null:b.receiver)},
H:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.hJ(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aO(r,16)&8191)===10)switch(q){case 438:return t.$1(H.i_(H.e(s)+" (Error "+q+")",null))
case 445:case 5007:return t.$1(H.jh(H.e(s)+" (Error "+q+")",null))}}if(a instanceof TypeError){p=$.$get$jq()
o=$.$get$jr()
n=$.$get$js()
m=$.$get$jt()
l=$.$get$jx()
k=$.$get$jy()
j=$.$get$jv()
$.$get$ju()
i=$.$get$jA()
h=$.$get$jz()
g=p.J(s)
if(g!=null)return t.$1(H.i_(s,g))
else{g=o.J(s)
if(g!=null){g.method="call"
return t.$1(H.i_(s,g))}else{g=n.J(s)
if(g==null){g=m.J(s)
if(g==null){g=l.J(s)
if(g==null){g=k.J(s)
if(g==null){g=j.J(s)
if(g==null){g=m.J(s)
if(g==null){g=i.J(s)
if(g==null){g=h.J(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return t.$1(H.jh(s,g))}}return t.$1(new H.fe(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.cl()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.Z(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.cl()
return a},
ad:function(a){var t
if(a==null)return new H.cW(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.cW(a,null)},
mi:function(a){if(a==null||typeof a!='object')return J.aY(a)
else return H.at(a)},
m2:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=a.length
for(r=0;r<s;){q=r+1
H.b(t)
p=a[r]
r=q+1
H.b(t)
b.j(0,p,a[q])}return b},
md:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dg(b,new H.hq(a))
case 1:return H.dg(b,new H.hr(a,d))
case 2:return H.dg(b,new H.hs(a,d,e))
case 3:return H.dg(b,new H.ht(a,d,e,f))
case 4:return H.dg(b,new H.hu(a,d,e,f,g))}throw H.c(P.bS("Unsupported number of arguments for wrapped closure"))},
bB:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.md)
a.$identity=t
return t},
kZ:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.v(c).$isl){t.$reflectionInfo=c
r=H.lt(t).r}else r=c
q=d?Object.create(new H.eN().constructor.prototype):Object.create(new H.b0(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.iX(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.m6,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.iV:H.hQ
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.c("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.iX(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
kW:function(a,b,c,d){var t=H.hQ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
iX:function(a,b,c){var t,s,r,q
if(c)return H.kY(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.kW(s,b==null?r!=null:b!==r,t,b)
return q},
kX:function(a,b,c,d){var t,s
t=H.hQ
s=H.iV
switch(b?-1:a){case 0:throw H.c(H.lu("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
kY:function(a,b){var t,s,r,q
t=$.iW
if(t==null){t=H.iT("self")
$.iW=t}t=$.iU
if(t==null){t=H.iT("receiver")
$.iU=t}s=b.$stubName
r=b.length
q=a[s]
t=H.kX(r,b==null?q!=null:b!==q,s,b)
return t},
iq:function(a,b,c,d,e,f){var t,s
t=J.am(b)
s=!!J.v(c).$isl?J.am(c):c
return H.kZ(a,t,s,!!d,e,f)},
hQ:function(a){return a.a},
iV:function(a){return a.c},
iT:function(a){var t,s,r,q,p
t=new H.b0("self","target","receiver","name")
s=J.am(Object.getOwnPropertyNames(t))
for(r=s.length,q=0;q<r;++q){p=s[q]
if(t[p]===a)return p}},
mA:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.a5(a,"String"))},
mv:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a5(a,"double"))},
mz:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a5(a,"num"))},
lX:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.a5(a,"bool"))},
mc:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.a5(a,"int"))},
mk:function(a,b){throw H.c(H.a5(a,b.substring(3)))},
mj:function(a,b){var t=J.N(b)
throw H.c(H.kV(a,t.bb(b,3,t.gi(b))))},
iw:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.v(a)[b])return a
H.mk(a,b)},
af:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.v(a)[b]
else t=!0
if(t)return a
H.mj(a,b)},
my:function(a){if(a==null)return a
if(!!J.v(a).$isl)return a
throw H.c(H.a5(a,"List"))},
ir:function(a){var t=J.v(a)
return"$S" in t?t.$S():null},
aW:function(a,b){var t,s
if(a==null)return!1
t=H.ir(a)
if(t==null)s=!1
else s=H.jZ(t,b)
return s},
mw:function(a,b){var t,s
if(a==null)return a
if($.il)return a
$.il=!0
try{if(H.aW(a,b))return a
t=H.hB(b,null)
s=H.a5(a,t)
throw H.c(s)}finally{$.il=!1}},
a5:function(a,b){return new H.fb("TypeError: "+H.e(P.bR(a))+": type '"+H.jN(a)+"' is not a subtype of type '"+b+"'")},
kV:function(a,b){return new H.dr("CastError: "+H.e(P.bR(a))+": type '"+H.jN(a)+"' is not a subtype of type '"+b+"'")},
jN:function(a){var t
if(a instanceof H.aj){t=H.ir(a)
if(t!=null)return H.hB(t,null)
return"Closure"}return H.bc(a)},
aU:function(a){if(!0===a)return!1
if(!!J.v(a).$ishW)a=a.$0()
if(typeof a==="boolean")return!a
throw H.c(H.a5(a,"bool"))},
bA:function(a){throw H.c(new H.fl(a))},
b:function(a){if(H.aU(a))throw H.c(P.kU(null))},
mp:function(a){throw H.c(new P.dy(a))},
lu:function(a){return new H.eD(a)},
k6:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
jX:function(a){return u.getIsolateTag(a)},
D:function(a,b){H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
hk:function(a){if(a==null)return
return a.$ti},
jY:function(a,b){return H.iB(a["$as"+H.e(b)],H.hk(a))},
X:function(a,b,c){var t,s
t=H.jY(a,b)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
ae:function(a,b){var t,s
t=H.hk(a)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
hB:function(a,b){var t=H.aX(a,b)
return t},
aX:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.b(!0)
H.b(!0)
return a[0].name+H.hv(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.e(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aX(t,b)
return H.lM(a,b)}return"unknown-reified-type"},
lM:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aX(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aX(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aX(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.m1(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aX(l[j],b)+(" "+H.e(j))}q+="}"}return"("+q+") => "+t},
hv:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=new P.bf("")
for(r=b,q=!0,p=!0;H.b(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.b(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aX(o,c)}return p?"":"<"+s.k(0)+">"},
m5:function(a){var t,s,r
if(a instanceof H.aj){t=H.ir(a)
if(t!=null)return H.hB(t,null)}s=J.v(a).constructor.name
if(a==null)return s
r=H.hv(a.$ti,0,null)
return s+r},
iB:function(a,b){if(a==null)return b
H.b(typeof a=="function")
H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.ix(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.ix(a,null,b)
return b},
ip:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.hk(a)
s=J.v(a)
if(s[b]==null)return!1
return H.jR(H.iB(s[d],t),c)},
ms:function(a,b,c,d){var t,s
if(a==null)return a
t=H.ip(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.hv(c,0,null)
throw H.c(H.a5(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
jR:function(a,b){var t,s,r,q,p
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
if(!H.O(r,b[p]))return!1}return!0},
mt:function(a,b,c){return H.ix(a,b,H.jY(b,c))},
O:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.name==="I")return!0
if('func' in b)return H.jZ(a,b)
if('func' in a)return b.name==="hW"||b.name==="B"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.b(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.b(!0)
q=b[0]}else q=b
if(q!==s){p=H.hB(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.jR(H.iB(o,t),r)},
jQ:function(a,b,c){var t,s,r,q,p,o,n
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
if(!(H.O(o,n)||H.O(n,o)))return!1}return!0},
lT:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
H.b(typeof a=='object')
H.b(typeof b=='object')
t=J.am(Object.getOwnPropertyNames(b))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.O(p,o)||H.O(o,p)))return!1}return!0},
jZ:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.b('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.O(t,s)||H.O(s,t)))return!1}r=a.args
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
if(n===m){if(!H.jQ(r,q,!1))return!1
if(!H.jQ(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.b(j)
g=r[h]
H.b(i)
f=q[h]
if(!(H.O(g,f)||H.O(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=q[e]
if(!(H.O(g,f)||H.O(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=o[e]
if(!(H.O(g,f)||H.O(f,g)))return!1}}return H.lT(a.named,b.named)},
ix:function(a,b,c){H.b(typeof a=="function")
H.b(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
mB:function(a){var t=$.it
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
mx:function(a){return H.at(a)},
mu:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
mf:function(a){var t,s,r,q,p,o
H.b(!(a instanceof P.B))
t=$.it.$1(a)
s=$.hh[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.hp[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.jP.$2(a,t)
if(t!=null){s=$.hh[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.hp[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.hA(r)
$.hh[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.hp[t]=r
return r}if(p==="-"){o=H.hA(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.k2(a,r)
if(p==="*")throw H.c(P.jB(t))
if(u.leafTags[t]===true){o=H.hA(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.k2(a,r)},
k2:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.iy(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
hA:function(a){return J.iy(a,!1,null,!!a.$isr)},
mh:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return H.hA(t)
else return J.iy(t,c,null,null)},
ma:function(){if(!0===$.iv)return
$.iv=!0
H.mb()},
mb:function(){var t,s,r,q,p,o,n,m
$.hh=Object.create(null)
$.hp=Object.create(null)
H.m9()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.k5.$1(p)
if(o!=null){n=H.mh(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
m9:function(){var t,s,r,q,p,o,n
t=C.R()
t=H.aT(C.O,H.aT(C.T,H.aT(C.B,H.aT(C.B,H.aT(C.S,H.aT(C.P,H.aT(C.Q(C.C),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.it=new H.hm(p)
$.jP=new H.hn(o)
$.k5=new H.ho(n)},
aT:function(a,b){return a(b)||b},
mo:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
ez:function ez(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
f9:function f9(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ej:function ej(a,b){this.a=a
this.b=b},
dX:function dX(a,b,c){this.a=a
this.b=b
this.c=c},
fe:function fe(a){this.a=a},
hJ:function hJ(a){this.a=a},
cW:function cW(a,b){this.a=a
this.b=b},
hq:function hq(a){this.a=a},
hr:function hr(a,b){this.a=a
this.b=b},
hs:function hs(a,b,c){this.a=a
this.b=b
this.c=c},
ht:function ht(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hu:function hu(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
aj:function aj(){},
eZ:function eZ(){},
eN:function eN(){},
b0:function b0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fb:function fb(a){this.a=a},
dr:function dr(a){this.a=a},
eD:function eD(a){this.a=a},
fl:function fl(a){this.a=a},
cu:function cu(a,b){this.a=a
this.b=b},
a0:function a0(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
dW:function dW(a){this.a=a},
dZ:function dZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e_:function e_(a,b){this.a=a
this.$ti=b},
e0:function e0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hm:function hm(a){this.a=a},
hn:function hn(a){this.a=a},
ho:function ho(a){this.a=a},
a7:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.aV(b,a))},
b9:function b9(){},
as:function as(){},
c8:function c8(){},
ba:function ba(){},
c9:function c9(){},
c7:function c7(){},
eb:function eb(){},
ec:function ec(){},
ed:function ed(){},
ee:function ee(){},
ef:function ef(){},
ca:function ca(){},
eg:function eg(){},
bn:function bn(){},
bo:function bo(){},
bp:function bp(){},
bq:function bq(){},
m1:function(a){return J.am(H.D(a?Object.keys(a):[],[null]))},
iA:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
v:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.c0.prototype
return J.c_.prototype}if(typeof a=="string")return J.an.prototype
if(a==null)return J.c1.prototype
if(typeof a=="boolean")return J.dV.prototype
if(a.constructor==Array)return J.al.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ao.prototype
return a}if(a instanceof P.B)return a
return J.hj(a)},
iy:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hj:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.iv==null){H.ma()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.c(P.jB("Return interceptor for "+H.e(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$hZ()]
if(p!=null)return p
p=H.mf(a)
if(p!=null)return p
if(typeof a=="function")return C.U
s=Object.getPrototypeOf(a)
if(s==null)return C.E
if(s===Object.prototype)return C.E
if(typeof q=="function"){Object.defineProperty(q,$.$get$hZ(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
am:function(a){a.fixed$length=Array
return a},
N:function(a){if(typeof a=="string")return J.an.prototype
if(a==null)return a
if(a.constructor==Array)return J.al.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ao.prototype
return a}if(a instanceof P.B)return a
return J.hj(a)},
dh:function(a){if(a==null)return a
if(a.constructor==Array)return J.al.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ao.prototype
return a}if(a instanceof P.B)return a
return J.hj(a)},
jV:function(a){if(typeof a=="number")return J.aI.prototype
if(a==null)return a
if(!(a instanceof P.B))return J.ax.prototype
return a},
m4:function(a){if(typeof a=="number")return J.aI.prototype
if(typeof a=="string")return J.an.prototype
if(a==null)return a
if(!(a instanceof P.B))return J.ax.prototype
return a},
jW:function(a){if(typeof a=="string")return J.an.prototype
if(a==null)return a
if(!(a instanceof P.B))return J.ax.prototype
return a},
j:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ao.prototype
return a}if(a instanceof P.B)return a
return J.hj(a)},
A:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.v(a).t(a,b)},
Y:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.jV(a).az(a,b)},
ka:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.jV(a).aj(a,b)},
iC:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.me(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.N(a).h(a,b)},
kb:function(a,b,c,d){return J.j(a).dl(a,b,c,d)},
kc:function(a,b){return J.jW(a).bo(a,b)},
hK:function(a,b){return J.j(a).dG(a,b)},
kd:function(a,b,c){return J.j(a).dH(a,b,c)},
iD:function(a,b){return J.j(a).bC(a,b)},
hL:function(a,b){return J.j(a).K(a,b)},
iE:function(a,b,c){return J.j(a).bF(a,b,c)},
ke:function(a,b){return J.j(a).dW(a,b)},
bF:function(a,b,c){return J.j(a).bG(a,b,c)},
iF:function(a,b,c,d){return J.j(a).dX(a,b,c,d)},
bG:function(a,b,c){return J.j(a).bH(a,b,c)},
kf:function(a,b,c){return J.j(a).dZ(a,b,c)},
iG:function(a,b){return J.j(a).e0(a,b)},
kg:function(a,b){return J.j(a).bI(a,b)},
kh:function(a,b,c){return J.j(a).bJ(a,b,c)},
ki:function(a,b,c,d){return J.j(a).bK(a,b,c,d)},
kj:function(a,b,c,d,e){return J.j(a).bL(a,b,c,d,e)},
kk:function(a,b){return J.m4(a).L(a,b)},
hM:function(a,b,c){return J.N(a).e4(a,b,c)},
kl:function(a,b,c,d,e,f){return J.j(a).e6(a,b,c,d,e,f)},
km:function(a){return J.j(a).bN(a)},
kn:function(a){return J.j(a).bO(a)},
ko:function(a){return J.j(a).bR(a)},
kp:function(a){return J.j(a).ea(a)},
kq:function(a){return J.j(a).eb(a)},
kr:function(a,b){return J.j(a).bT(a,b)},
hN:function(a,b){return J.j(a).bU(a,b)},
ks:function(a,b,c,d){return J.j(a).bV(a,b,c,d)},
kt:function(a,b,c,d,e){return J.j(a).ei(a,b,c,d,e)},
ku:function(a,b,c,d,e){return J.j(a).bW(a,b,c,d,e)},
kv:function(a,b,c,d,e,f){return J.j(a).ej(a,b,c,d,e,f)},
kw:function(a,b){return J.dh(a).p(a,b)},
di:function(a,b){return J.j(a).bX(a,b)},
kx:function(a,b){return J.j(a).bY(a,b)},
ky:function(a){return J.j(a).ek(a)},
iH:function(a,b){return J.dh(a).aa(a,b)},
kz:function(a){return J.j(a).gdV(a)},
aY:function(a){return J.v(a).gq(a)},
aC:function(a){return J.dh(a).gv(a)},
aZ:function(a){return J.N(a).gi(a)},
kA:function(a){return J.j(a).gaW(a)},
kB:function(a){return J.j(a).geM(a)},
hO:function(a,b){return J.j(a).a0(a,b)},
kC:function(a){return J.j(a).ay(a)},
kD:function(a){return J.j(a).b1(a)},
kE:function(a,b){return J.j(a).b2(a,b)},
kF:function(a,b,c){return J.j(a).b3(a,b,c)},
iI:function(a,b,c){return J.j(a).b6(a,b,c)},
kG:function(a,b){return J.j(a).c_(a,b)},
kH:function(a,b){return J.dh(a).c1(a,b)},
kI:function(a,b,c){return J.j(a).c3(a,b,c)},
iJ:function(a){return J.dh(a).eG(a)},
kJ:function(a,b){return J.j(a).D(a,b)},
kK:function(a,b,c,d){return J.j(a).ba(a,b,c,d)},
kL:function(a,b,c,d,e,f,g){return J.j(a).c7(a,b,c,d,e,f,g)},
kM:function(a,b,c,d){return J.j(a).c8(a,b,c,d)},
iK:function(a,b,c,d){return J.j(a).c9(a,b,c,d)},
kN:function(a){return J.jW(a).eP(a)},
b_:function(a){return J.v(a).k(a)},
kO:function(a,b,c,d){return J.j(a).eR(a,b,c,d)},
kP:function(a,b,c){return J.j(a).cd(a,b,c)},
kQ:function(a,b,c){return J.j(a).ce(a,b,c)},
hP:function(a,b,c){return J.j(a).cf(a,b,c)},
kR:function(a,b,c){return J.j(a).cg(a,b,c)},
iL:function(a,b,c){return J.j(a).ci(a,b,c)},
iM:function(a,b,c){return J.j(a).cj(a,b,c)},
iN:function(a,b,c){return J.j(a).ck(a,b,c)},
iO:function(a,b,c,d){return J.j(a).cl(a,b,c,d)},
iP:function(a,b,c,d){return J.j(a).cm(a,b,c,d)},
kS:function(a,b){return J.j(a).co(a,b)},
kT:function(a,b,c,d,e,f,g){return J.j(a).cq(a,b,c,d,e,f,g)},
a:function a(){},
dV:function dV(){},
c1:function c1(){},
b6:function b6(){},
es:function es(){},
ax:function ax(){},
ao:function ao(){},
al:function al(a){this.$ti=a},
hX:function hX(a){this.$ti=a},
dm:function dm(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aI:function aI(){},
c0:function c0(){},
c_:function c_(){},
an:function an(){}},P={
lB:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.lU()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.bB(new P.fn(t),1)).observe(s,{childList:true})
return new P.fm(t,s,r)}else if(self.setImmediate!=null)return P.lV()
return P.lW()},
lC:function(a){H.hi()
self.scheduleImmediate(H.bB(new P.fo(a),0))},
lD:function(a){H.hi()
self.setImmediate(H.bB(new P.fp(a),0))},
lE:function(a){P.ib(C.y,a)},
ib:function(a,b){var t=C.b.u(a.a,1000)
return H.ly(t<0?0:t,b)},
lP:function(a,b){if(H.aW(a,{func:1,args:[P.I,P.I]})){b.toString
return a}else{b.toString
return a}},
lG:function(a,b){var t,s,r
H.b(b.a<4)
H.b(!(a instanceof P.a6))
H.b(b.a===0)
b.a=1
try{a.cb(new P.fD(b),new P.fE(b))}catch(r){t=H.H(r)
s=H.ad(r)
P.ml(new P.fF(b,t,s))}},
jE:function(a,b){var t,s,r
H.b(b.a<=1)
for(;t=a.a,s=t===2,s;){H.b(s)
a=a.c}if(t>=4){r=b.aM()
b.aD(a)
P.bj(b,r)}else{r=b.c
H.b(b.a<=1)
b.a=2
b.c=a
a.bx(r)}},
bj:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.hb(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
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
if(k){H.b(s.a===8)
s=s.c
p=t.a.b
o=s.a
s=s.b
p.toString
P.hb(null,null,p,o,s)
return}s=$.z
if(s==null?l!=null:s!==l){H.b(l!=null)
s=$.z
H.b(l==null?s!=null:l!==s)
j=$.z
$.z=l
i=j}else i=null
s=b.c
if(s===8)new P.fJ(t,r,b,q).$0()
else if(p){if((s&1)!==0)new P.fI(r,b,m).$0()}else if((s&2)!==0)new P.fH(t,r,b).$0()
if(i!=null){H.b(!0)
$.z=i}s=r.b
if(!!J.v(s).$isdM){if(s.a>=4){H.b(o.a<4)
h=o.c
o.c=null
b=o.ar(h)
H.b(o.a<4)
H.b(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.jE(s,o)
return}}g=b.b
H.b(g.a<4)
h=g.c
g.c=null
b=g.ar(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.b(!o)
g.a=4
g.c=p}else{H.b(!o)
g.a=8
g.c=p}t.a=g
s=g}},
lO:function(){var t,s
for(;t=$.aS,t!=null;){$.by=null
s=t.b
$.aS=s
if(s==null)$.bx=null
t.a.$0()}},
lS:function(){$.im=!0
try{P.lO()}finally{$.by=null
$.im=!1
if($.aS!=null)$.$get$ih().$1(P.jS())}},
jM:function(a){var t=new P.cw(a,null)
if($.aS==null){$.bx=t
$.aS=t
if(!$.im)$.$get$ih().$1(P.jS())}else{$.bx.b=t
$.bx=t}},
lR:function(a){var t,s,r
t=$.aS
if(t==null){P.jM(a)
$.by=$.bx
return}s=new P.cw(a,null)
r=$.by
if(r==null){s.b=t
$.by=s
$.aS=s}else{s.b=r.b
r.b=s
$.by=s
if(s.b==null)$.bx=s}},
ml:function(a){var t=$.z
if(C.f===t){P.hd(null,null,C.f,a)
return}t.toString
P.hd(null,null,t,t.aS(a))},
lz:function(a,b){var t=$.z
if(t===C.f){t.toString
return P.ib(a,b)}return P.ib(a,t.aS(b))},
ig:function(a){var t,s
H.b(a!=null)
t=$.z
H.b(a==null?t!=null:a!==t)
s=$.z
$.z=a
return s},
hb:function(a,b,c,d,e){var t={}
t.a=d
P.lR(new P.hc(t,e))},
jK:function(a,b,c,d){var t,s
if($.z===c)return d.$0()
t=P.ig(c)
try{s=d.$0()
return s}finally{s=t
H.b(s!=null)
$.z=s}},
jL:function(a,b,c,d,e){var t,s
if($.z===c)return d.$1(e)
t=P.ig(c)
try{s=d.$1(e)
return s}finally{s=t
H.b(s!=null)
$.z=s}},
lQ:function(a,b,c,d,e,f){var t,s
if($.z===c)return d.$2(e,f)
t=P.ig(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.b(s!=null)
$.z=s}},
hd:function(a,b,c,d){var t=C.f!==c
if(t)d=!(!t||!1)?c.aS(d):c.dY(d)
P.jM(d)},
fn:function fn(a){this.a=a},
fm:function fm(a,b,c){this.a=a
this.b=b
this.c=c},
fo:function fo(a){this.a=a},
fp:function fp(a){this.a=a},
hR:function hR(){},
fs:function fs(){},
h6:function h6(a,b){this.a=a
this.$ti=b},
cE:function cE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
a6:function a6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
fC:function fC(a,b){this.a=a
this.b=b},
fG:function fG(a,b){this.a=a
this.b=b},
fD:function fD(a){this.a=a},
fE:function fE(a){this.a=a},
fF:function fF(a,b,c){this.a=a
this.b=b
this.c=c},
fJ:function fJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fK:function fK(a){this.a=a},
fI:function fI(a,b,c){this.a=a
this.b=b
this.c=c},
fH:function fH(a,b,c){this.a=a
this.b=b
this.c=c},
cw:function cw(a,b){this.a=a
this.b=b},
eS:function eS(){},
eU:function eU(a){this.a=a},
eV:function eV(a,b){this.a=a
this.b=b},
eT:function eT(){},
ia:function ia(){},
aD:function aD(a,b){this.a=a
this.b=b},
ha:function ha(){},
hc:function hc(a,b){this.a=a
this.b=b},
fX:function fX(){},
fZ:function fZ(a,b){this.a=a
this.b=b},
fY:function fY(a,b){this.a=a
this.b=b},
h_:function h_(a,b){this.a=a
this.b=b},
jc:function(a,b){return new H.a0(0,null,null,null,null,null,0,[a,b])},
a1:function(){return new H.a0(0,null,null,null,null,null,0,[null,null])},
aq:function(a){return H.m2(a,new H.a0(0,null,null,null,null,null,0,[null,null]))},
aQ:function(a,b){return new P.fQ(0,null,null,null,null,null,0,[a,b])},
ar:function(a,b,c,d){return new P.fO(0,null,null,null,null,null,0,[d])},
ik:function(){var t=Object.create(null)
H.b(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
le:function(a,b,c){var t,s
if(P.io(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$bz()
C.a.l(s,a)
try{P.lN(a,t)}finally{H.b(C.a.gaU(s)===a)
s.pop()}s=P.jp(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
dT:function(a,b,c){var t,s,r
if(P.io(a))return b+"..."+c
t=new P.bf(b)
s=$.$get$bz()
C.a.l(s,a)
try{r=t
r.a=P.jp(r.gW(),a,", ")}finally{H.b(C.a.gaU(s)===a)
s.pop()}s=t
s.a=s.gW()+c
s=t.gW()
return s.charCodeAt(0)==0?s:s},
io:function(a){var t,s
for(t=0;s=$.$get$bz(),t<s.length;++t)if(a===s[t])return!0
return!1},
lN:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gv(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.m())return
q=H.e(t.gn(t))
C.a.l(b,q)
s+=q.length+2;++r}if(!t.m()){if(r<=5)return
p=b.pop()
o=b.pop()}else{n=t.gn(t);++r
if(!t.m()){if(r<=4){C.a.l(b,H.e(n))
return}p=H.e(n)
o=b.pop()
s+=p.length+2}else{m=t.gn(t);++r
H.b(r<100)
for(;t.m();n=m,m=l){l=t.gn(t);++r
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
i2:function(a,b){var t,s
t=P.ar(null,null,null,b)
for(s=J.aC(a);s.m();)t.l(0,s.gn(s))
return t},
jf:function(a){var t,s,r
t={}
if(P.io(a))return"{...}"
s=new P.bf("")
try{C.a.l($.$get$bz(),a)
r=s
r.a=r.gW()+"{"
t.a=!0
J.iH(a,new P.e3(t,s))
t=s
t.a=t.gW()+"}"}finally{t=$.$get$bz()
H.b(C.a.gaU(t)===a)
t.pop()}t=s.gW()
return t.charCodeAt(0)==0?t:t},
i3:function(a,b){var t=new P.e1(null,0,0,0,[b])
t.d_(a,b)
return t},
fQ:function fQ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
fO:function fO(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
fP:function fP(a,b,c){this.a=a
this.b=b
this.c=c},
bl:function bl(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
fM:function fM(){},
i1:function i1(){},
c2:function c2(){},
m:function m(){},
c4:function c4(){},
e3:function e3(a,b){this.a=a
this.b=b},
aL:function aL(){},
e1:function e1(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
fR:function fR(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
eG:function eG(){},
eF:function eF(){},
bm:function bm(){},
l6:function(a){var t=J.v(a)
if(!!t.$isaj)return t.k(a)
return"Instance of '"+H.bc(a)+"'"},
jd:function(a,b,c){var t,s
t=H.D([],[c])
for(s=J.aC(a);s.m();)C.a.l(t,s.gn(s))
return t},
jp:function(a,b,c){var t=J.aC(b)
if(!t.m())return a
if(c.length===0){do a+=H.e(t.gn(t))
while(t.m())}else{a+=H.e(t.gn(t))
for(;t.m();)a=a+c+H.e(t.gn(t))}return a},
l_:function(a,b){return J.kk(a,b)},
l0:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+t
if(t>=10)return s+"00"+t
return s+"000"+t},
l1:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bM:function(a){if(a>=10)return""+a
return"0"+a},
l3:function(a,b,c,d,e,f){return new P.ak(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
bR:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.b_(a)
if(typeof a==="string")return JSON.stringify(a)
return P.l6(a)},
kU:function(a){return new P.bH(a)},
iQ:function(a){return new P.Z(!1,null,null,a)},
iR:function(a,b,c){return new P.Z(!0,a,b,c)},
lr:function(a){return new P.bd(null,null,!1,null,null,a)},
ey:function(a,b,c){return new P.bd(null,null,!0,a,b,"Value not in range")},
au:function(a,b,c,d,e){return new P.bd(b,c,!0,a,d,"Invalid value")},
jm:function(a,b,c,d,e,f){if(0>a||a>c)throw H.c(P.au(a,0,c,"start",f))
if(a>b||b>c)throw H.c(P.au(b,a,c,"end",f))
return b},
y:function(a,b,c,d,e){var t=e!=null?e:J.aZ(b)
return new P.dQ(b,t,!0,a,c,"Index out of range")},
t:function(a){return new P.ff(a)},
jB:function(a){return new P.fd(a)},
i9:function(a){return new P.aN(a)},
aa:function(a){return new P.dt(a)},
bS:function(a){return new P.fB(a)},
R:function(a){H.iA(H.e(a))},
ac:function ac(){},
C:function C(){},
b1:function b1(a,b){this.a=a
this.b=b},
a8:function a8(){},
ak:function ak(a){this.a=a},
dD:function dD(){},
dE:function dE(){},
aG:function aG(){},
bH:function bH(a){this.a=a},
ce:function ce(){},
Z:function Z(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bd:function bd(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dQ:function dQ(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ff:function ff(a){this.a=a},
fd:function fd(a){this.a=a},
aN:function aN(a){this.a=a},
dt:function dt(a){this.a=a},
cl:function cl(){},
dy:function dy(a){this.a=a},
hT:function hT(){},
fB:function fB(a){this.a=a},
dL:function dL(a,b,c){this.a=a
this.b=b
this.c=c},
dH:function dH(a,b,c){this.a=a
this.b=b
this.$ti=c},
x:function x(){},
L:function L(){},
bZ:function bZ(){},
l:function l(){},
aK:function aK(){},
I:function I(){},
a9:function a9(){},
B:function B(){},
aM:function aM(){},
o:function o(){},
bf:function bf(a){this.a=a},
hf:function(a){var t,s,r,q,p
if(a==null)return
t=P.a1()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.P)(s),++q){p=s[q]
t.j(0,p,a[p])}return t},
m_:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.iH(a,new P.he(t))
return t},
j3:function(){var t=$.j2
if(t==null){t=J.hM(window.navigator.userAgent,"Opera",0)
$.j2=t}return t},
l2:function(){var t,s
t=$.j_
if(t!=null)return t
s=$.j0
if(s==null){s=J.hM(window.navigator.userAgent,"Firefox",0)
$.j0=s}if(s)t="-moz-"
else{s=$.j1
if(s==null){s=!P.j3()&&J.hM(window.navigator.userAgent,"Trident/",0)
$.j1=s}if(s)t="-ms-"
else t=P.j3()?"-o-":"-webkit-"}$.j_=t
return t},
he:function he(a){this.a=a},
lK:function(a){var t=new P.fV(0,0)
t.di(a)
return t},
fV:function fV(a,b){this.a=a
this.b=b},
i8:function i8(){},
fW:function fW(){},
M:function M(){},
dY:function dY(){},
ek:function ek(){},
eu:function eu(){},
be:function be(){},
eW:function eW(){},
h:function h(){},
f8:function f8(){},
cH:function cH(){},
cI:function cI(){},
cO:function cO(){},
cP:function cP(){},
cY:function cY(){},
cZ:function cZ(){},
d3:function d3(){},
d4:function d4(){},
dn:function dn(){},
dp:function dp(){},
aE:function aE(){},
el:function el(){},
eB:function eB(){},
eC:function eC(){},
eM:function eM(){},
cU:function cU(){},
cV:function cV(){}},W={
jT:function(){return document},
l4:function(a,b,c){var t,s
t=document.body
s=(t&&C.p).I(t,a,b,c)
s.toString
t=new H.cv(new W.K(s),new W.dG(),[W.q])
return t.gV(t)},
l5:function(a){return"wheel"},
b3:function(a){var t,s,r
t="element tag unavailable"
try{s=J.kB(a)
if(typeof s==="string")t=a.tagName}catch(r){H.H(r)}return t},
lF:function(a,b){return document.createElement(a)},
aB:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jI:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
U:function(a,b,c,d,e){var t=W.jO(new W.fA(c))
t=new W.fz(0,a,b,t,!1,[e])
t.de(a,b,c,!1,e)
return t},
jF:function(a){var t,s
t=document.createElement("a")
s=new W.h0(t,window.location)
s=new W.bk(s)
s.df(a)
return s},
lH:function(a,b,c,d){return!0},
lI:function(a,b,c,d){var t,s,r,q,p
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
jJ:function(){var t=P.o
t=new W.h7(P.i2(C.t,t),P.ar(null,null,null,t),P.ar(null,null,null,t),P.ar(null,null,null,t),null)
t.dj(null,new H.b7(C.t,new W.h8(),[H.ae(C.t,0),null]),["TEMPLATE"],null)
return t},
jO:function(a){var t=$.z
if(t===C.f)return a
return t.e_(a)},
i:function i(){},
dj:function dj(){},
dk:function dk(){},
dl:function dl(){},
ag:function ag(){},
bI:function bI(){},
bJ:function bJ(){},
bK:function bK(){},
ai:function ai(){},
du:function du(){},
aF:function aF(){},
dv:function dv(){},
Q:function Q(){},
a_:function a_(){},
dw:function dw(){},
dx:function dx(){},
dz:function dz(){},
bN:function bN(){},
b2:function b2(){},
dA:function dA(){},
bO:function bO(){},
bP:function bP(){},
bQ:function bQ(){},
dB:function dB(){},
dC:function dC(){},
S:function S(){},
dG:function dG(){},
f:function f(){},
d:function d(){},
dI:function dI(){},
dJ:function dJ(){},
dK:function dK(){},
bW:function bW(){},
dN:function dN(){},
b4:function b4(){},
bX:function bX(){},
dO:function dO(){},
b5:function b5(){},
ap:function ap(){},
e2:function e2(){},
e6:function e6(){},
e8:function e8(){},
b8:function b8(){},
e9:function e9(){},
F:function F(){},
K:function K(a){this.a=a},
q:function q(){},
cb:function cb(){},
bb:function bb(){},
a2:function a2(){},
et:function et(){},
ew:function ew(){},
cf:function cf(){},
ch:function ch(){},
eE:function eE(){},
eJ:function eJ(){},
eL:function eL(){},
a3:function a3(){},
eQ:function eQ(){},
eR:function eR(a){this.a=a},
cn:function cn(){},
eX:function eX(){},
eY:function eY(){},
bg:function bg(){},
f_:function f_(){},
f0:function f0(){},
f2:function f2(){},
av:function av(){},
f6:function f6(){},
f7:function f7(){},
ct:function ct(){},
aw:function aw(){},
fg:function fg(){},
fh:function fh(){},
fi:function fi(){},
ay:function ay(){},
bi:function bi(){},
fk:function fk(a){this.a=a},
ie:function ie(){},
ft:function ft(){},
fu:function fu(){},
fL:function fL(){},
cL:function cL(){},
h3:function h3(){},
h4:function h4(){},
fq:function fq(){},
fv:function fv(a){this.a=a},
fy:function fy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ii:function ii(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
fz:function fz(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fA:function fA(a){this.a=a},
bk:function bk(a){this.a=a},
n:function n(){},
cd:function cd(a){this.a=a},
ei:function ei(a){this.a=a},
eh:function eh(a,b,c){this.a=a
this.b=b
this.c=c},
br:function br(){},
h1:function h1(){},
h2:function h2(){},
h7:function h7(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
h8:function h8(){},
h5:function h5(){},
bU:function bU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cc:function cc(){},
i6:function i6(){},
id:function id(){},
h0:function h0(a,b){this.a=a
this.b=b},
d5:function d5(a){this.a=a},
h9:function h9(a){this.a=a},
cx:function cx(){},
cy:function cy(){},
cz:function cz(){},
cA:function cA(){},
cB:function cB(){},
cC:function cC(){},
cD:function cD(){},
cF:function cF(){},
cG:function cG(){},
cJ:function cJ(){},
cK:function cK(){},
cM:function cM(){},
cN:function cN(){},
cQ:function cQ(){},
cR:function cR(){},
bs:function bs(){},
bt:function bt(){},
cS:function cS(){},
cT:function cT(){},
cX:function cX(){},
d_:function d_(){},
d0:function d0(){},
bu:function bu(){},
bv:function bv(){},
d1:function d1(){},
d2:function d2(){},
d6:function d6(){},
d7:function d7(){},
d8:function d8(){},
d9:function d9(){},
da:function da(){},
db:function db(){},
dc:function dc(){},
dd:function dd(){},
de:function de(){},
df:function df(){}},B={
mm:function(a){var t,s
t=document
s=W.ap
W.U(t,"keydown",new B.hC(),!1,s)
W.U(t,"keyup",new B.hD(),!1,s)
if(!$.mn)W.U(t,"mousemove",new B.hE(),!1,W.F)
s=W.F
W.U(t,"mousedown",new B.hF(),!1,s)
W.U(t,"mouseup",new B.hG(),!1,s)},
li:function(a,b,c,d){var t,s,r,q,p,o,n
t=new Float32Array(3)
s=$.$get$hg()
r=$.$get$bC()
q=new T.T(new Float32Array(16))
q.a3()
p=new Float32Array(3)
o=new Float32Array(3)
n=new Float32Array(3)
t=new B.em(a,b,c,0,new T.u(t),-0.02,s,r,q,new T.u(p),new T.u(o),new T.u(n),new T.u(new Float32Array(3)),"camera:orbit",!1,!0)
t.d1(a,b,c,d)
return t},
hC:function hC(){},
hD:function hD(){},
hE:function hE(){},
hF:function hF(){},
hG:function hG(){},
em:function em(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
en:function en(a){this.a=a},
eo:function eo(a){this.a=a},
ep:function ep(){},
eq:function eq(a){this.a=a}},G={
lA:function(a){var t,s,r
t=H.D(a.split("\n"),[P.o])
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.e(t[s])}return C.a.au(t,"\n")},
jD:function(a,b,c){var t,s,r,q
t=J.j(a)
s=t.bQ(a,b)
t.b9(a,s,c)
t.bM(a,s)
r=t.b5(a,s,35713)
if(r!=null&&!r){q=t.b4(a,s)
P.R("E:Compilation failed:")
P.R("E:"+G.lA(c))
P.R("E:Failure:")
P.R(C.j.S("E:",q))
throw H.c(q)}return s},
jg:function(a,b){var t=new G.e5(P.a1(),a,!1,!0)
t.d0(a,b)
return t},
i5:function(a,b,c,d){return new G.e7(b,J.kq(b.a),c,P.a1(),d,null,0,-1,null,null,P.a1(),"meshdata:"+a,!1,!0)},
jn:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.ar(null,null,null,P.o)
s=c.b
r=d.b
q=c.f
p=J.kn(b.a)
o=G.jD(b.a,35633,s)
J.iE(b.a,p,o)
n=G.jD(b.a,35632,r)
J.iE(b.a,p,n)
if(q.length>0)J.kO(b.a,p,q,35980)
J.kG(b.a,p)
if(!J.kF(b.a,p,35714))H.E(J.kE(b.a,p))
t=new G.eA(b,c,d,p,P.i2(c.c,null),P.a1(),P.a1(),t,null,a,!1,!0)
t.d2(a,b,c,d)
return t},
j9:function(a,b){var t=$.$get$W()
if(H.aU(!t.F(0,a)))H.bA("duplicate shader variable "+a)
t.j(0,a,b)},
eI:function(a){return new G.eH(a,null,[],[],[],[],0,P.a1())},
j8:function(a,b,c,d,e){var t=new G.dP(c,b,J.ko(a.a),e,a,new G.f1(!1,!1,!1,!0,1,9729,9729))
t.cZ(a,b,c,d,e)
return t},
ea:function ea(){},
fc:function fc(){},
dq:function dq(){},
ds:function ds(a,b){this.a=a
this.b=b},
cr:function cr(a,b,c){this.a=a
this.b=b
this.c=c},
cq:function cq(a,b,c){this.a=a
this.b=b
this.c=c},
e5:function e5(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
e7:function e7(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
er:function er(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
eA:function eA(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
eH:function eH(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
eK:function eK(){},
f1:function f1(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bh:function bh(){},
dP:function dP(a,b,c,d,e,f){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f}},R={
jC:function(){var t,s,r
t=document.createElement("canvas")
t.width=64
t.height=64
s=C.w.cu(t,"2d")
r=(s&&C.q).bP(s,32,32,1,32,32,22);(r&&C.n).as(r,0,"gray")
C.n.as(r,1,"black")
s.fillStyle=r
C.q.el(s,0,0,64,64)
r=C.q.bP(s,32,32,1,32,32,6);(r&&C.n).as(r,0,"white")
C.n.as(r,1,"gray")
s.globalAlpha=0.9
s.fillStyle=r
s.arc(32,32,4,0,6.283185307179586,!1)
s.fill("nonzero")
return t},
eO:function eO(){},
eP:function eP(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},A={
iu:function(a){var t,s
t=C.Y.en(a,0,new A.hl())
s=536870911&t+(C.b.cr(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
hl:function hl(){}},T={T:function T(a){this.a=a},u:function u(a){this.a=a},aO:function aO(a){this.a=a}},Z={
ex:function(a,b){var t,s,r,q
t=a.aV()
s=a.aV()
r=a.aV()
q=new T.u(new Float32Array(3))
q.ak(t-0.5,s-0.5,r-0.5)
q.a1(0,b)
return q},
je:function(a,b,c,d){var t,s,r,q,p,o
t=[]
for(s=0;s<5;++s){r=a[s]
q=new Float32Array(3)
q[0]=r
q[1]=b
q[2]=c
p=new T.u(new Float32Array(3))
p.w(new T.u(q))
p.a1(0,d)
q=new Z.ev(new T.u(new Float32Array(3)))
o=new T.u(new Float32Array(3))
o.w(p)
q.a=o
C.a.l(t,q)}return t},
j7:function(a){var t,s,r,q,p
t=a.length
s=new Float32Array(3*t)
for(t=a.length,r=0,q=0;q<t;++q){p=a[q].a.a
s[r]=p[0]
s[r+1]=p[1]
s[r+2]=p[2]
r+=3}return s},
hU:function(a,b){var t,s,r,q
H.b(a.length*3===b.length)
for(t=a.length,s=0,r=0;r<t;++r){q=a[r].a.a
b[s]=q[0]
b[s+1]=q[1]
b[s+2]=q[2]
s+=3}},
mg:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
t={}
G.j9("uSources",new G.w("vec3","",5))
G.j9("uSinks",new G.w("vec3","",5))
s=document
r=new R.eP(0,0,null,null,null,null)
r.d6(C.i.cv(s,"stats"),"blue","gray")
q=P.lK(0)
p=C.i.aY(s,"#webgl-canvas")
o=p.clientWidth
n=p.clientHeight
p.width=o
p.height=n
m=new G.ds(null,p)
s=(p&&C.w).b0(p,"webgl2",P.aq(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
m.a=s
if(s==null)H.E(P.bS('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
l="ChronosGL Config: "+H.e(J.kC(s))
if($.m3>0)P.R("I: "+l)
J.kj(s,0,0,0,1)
J.di(s,2929)
k=B.li(15,0.5,0.5,p)
s=new T.T(new Float32Array(16))
s.a3()
l=new T.T(new Float32Array(16))
l.a3()
j=new G.er(k,50,1,0.1,1000,s,l,new T.T(new Float32Array(16)),P.a1(),"perspective",!1,!0)
j.bh()
j.cV(o,n)
i=G.jn("CPU",m,$.$get$k4(),$.$get$k3())
h=G.jn("GPU",m,$.$get$k1(),$.$get$k0())
s=h.e
g=C.a.es(s.f,"tPosition")
P.R("@@@@ "+g)
f=Z.je([2,1,0,-1,-2],0,2,3)
e=Z.je([2,1,0,-1,-2],0,-2,3)
l=Z.ex(q,10010)
d=new Z.bY(null)
c=new T.u(new Float32Array(3))
c.w(l)
d.a=c
b=[d]
d=b.length
a=new Float32Array(3*d)
t.a=a
Z.hU(b,a)
l=$.$get$iS()
a0=G.jg("stars",l)
a0.E("uTexture",G.j8(m,"Utils::Particles",R.jC(),null,3553))
d=new T.T(new Float32Array(16))
d.a3()
a0.E("uModelMatrix",d)
a0.E("uPointSize",200)
a1=G.i5("mdJS",i.d,0,i.e.x)
a1.aC(a)
a2=G.jg("stars",l)
a2.E("uTexture",G.j8(m,"Utils::Particles",R.jC(),null,3553))
l=new T.T(new Float32Array(16))
l.a3()
a2.E("uModelMatrix",l)
a2.E("uPointSize",200)
a2.E("uSources",Z.j7(f))
a2.E("uSinks",Z.j7(e))
l=h.d
s=s.x
a3=G.i5("ionsOut",l,0,s)
a3.aC(a)
a4=G.i5("ionsIn",l,0,s)
a4.aC(a)
s=new Z.hx(t,b,q,m,g,a3,a4)
a5=J.kp(m.a)
J.kf(m.a,36386,a5)
s.$1(null)
l=$.$get$is()
l.toString
W.U(l,"change",s,!1,W.f)
new Z.hz(k,new Z.hy(t,b,f,e,q,a1),i,a1,j,a0,h,a4,a2,m,a3,b,r).$1(0)},
ev:function ev(a){this.a=a},
bY:function bY(a){this.a=a},
hx:function hx(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
hy:function hy(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hz:function hz(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
_.cx=m}}
var v=[C,H,J,P,W,B,G,R,A,T,Z]
setFunctionNamesIfNecessary(v)
var $={}
H.hY.prototype={}
J.a.prototype={
t:function(a,b){return a===b},
gq:function(a){return H.at(a)},
k:function(a){return"Instance of '"+H.bc(a)+"'"}}
J.dV.prototype={
k:function(a){return String(a)},
gq:function(a){return a?519018:218159},
$isac:1}
J.c1.prototype={
t:function(a,b){return null==b},
k:function(a){return"null"},
gq:function(a){return 0},
$isI:1}
J.b6.prototype={
gq:function(a){return 0},
k:function(a){return String(a)},
$islh:1}
J.es.prototype={}
J.ax.prototype={}
J.ao.prototype={
k:function(a){var t=a[$.$get$iZ()]
return t==null?this.cR(a):J.b_(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ishW:1}
J.al.prototype={
l:function(a,b){if(!!a.fixed$length)H.E(P.t("add"))
a.push(b)},
H:function(a,b){var t,s,r,q,p
t=a.length
if(!!a.fixed$length)H.E(P.t("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.P)(b),++r,t=p){q=b[r]
p=t+1
H.b(t===a.length||H.E(P.aa(a)))
a.push(q)}},
c1:function(a,b){return new H.b7(a,b,[H.ae(a,0),null])},
au:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.e(a[s])
return t.join(b)},
p:function(a,b){return a[b]},
gem:function(a){if(a.length>0)return a[0]
throw H.c(H.dU())},
gaU:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.c(H.dU())},
b8:function(a,b,c,d,e){var t,s,r
if(!!a.immutable$list)H.E(P.t("setRange"))
P.jm(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.E(P.au(e,0,null,"skipCount",null))
s=J.N(d)
if(e+t>s.gi(d))throw H.c(H.lf())
if(e<b)for(r=t-1;r>=0;--r)a[b+r]=s.h(d,e+r)
else for(r=0;r<t;++r)a[b+r]=s.h(d,e+r)},
bE:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.c(P.aa(a))}return!1},
cK:function(a,b){if(!!a.immutable$list)H.E(P.t("sort"))
H.lx(a,P.m0())},
aA:function(a){return this.cK(a,null)},
eu:function(a,b,c){var t
if(c>=a.length)return-1
for(t=c;t<a.length;++t)if(J.A(a[t],b))return t
return-1},
es:function(a,b){return this.eu(a,b,0)},
A:function(a,b){var t
for(t=0;t<a.length;++t)if(J.A(a[t],b))return!0
return!1},
k:function(a){return P.dT(a,"[","]")},
gv:function(a){return new J.dm(a,a.length,0,null,[H.ae(a,0)])},
gq:function(a){return H.at(a)},
gi:function(a){return a.length},
si:function(a,b){if(!!a.fixed$length)H.E(P.t("set length"))
if(b<0)throw H.c(P.au(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.aV(a,b))
if(b>=a.length||b<0)throw H.c(H.aV(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.E(P.t("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.aV(a,b))
if(b>=a.length||b<0)throw H.c(H.aV(a,b))
a[b]=c},
$isp:1,
$asp:function(){},
$isk:1,
$isl:1}
J.hX.prototype={}
J.dm.prototype={
gn:function(a){return this.d},
m:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.c(H.P(t))
r=this.c
if(r>=s){this.sbj(null)
return!1}this.sbj(t[r]);++this.c
return!0},
sbj:function(a){this.d=a}}
J.aI.prototype={
L:function(a,b){var t
if(typeof b!=="number")throw H.c(H.G(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gat(b)
if(this.gat(a)===t)return 0
if(this.gat(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gat:function(a){return a===0?1/a<0:a<0},
e1:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.c(P.t(""+a+".ceil()"))},
Z:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.t(""+a+".round()"))},
e2:function(a,b,c){if(this.L(b,c)>0)throw H.c(H.G(b))
if(this.L(a,b)<0)return b
if(this.L(a,c)>0)return c
return a},
eQ:function(a,b){var t
if(b>20)throw H.c(P.au(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gat(a))return"-"+t
return t},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gq:function(a){return a&0x1FFFFFFF},
S:function(a,b){if(typeof b!=="number")throw H.c(H.G(b))
return a+b},
U:function(a,b){if(typeof b!=="number")throw H.c(H.G(b))
return a-b},
cs:function(a,b){if(typeof b!=="number")throw H.c(H.G(b))
return a/b},
C:function(a,b){if(typeof b!=="number")throw H.c(H.G(b))
return a*b},
u:function(a,b){return(a|0)===a?a/b|0:this.dO(a,b)},
dO:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.c(P.t("Result of truncating division is "+H.e(t)+": "+H.e(a)+" ~/ "+b))},
aO:function(a,b){var t
if(a>0)t=this.dM(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
dM:function(a,b){return b>31?0:a>>>b},
cr:function(a,b){if(typeof b!=="number")throw H.c(H.G(b))
return(a&b)>>>0},
cT:function(a,b){if(typeof b!=="number")throw H.c(H.G(b))
return(a^b)>>>0},
aj:function(a,b){if(typeof b!=="number")throw H.c(H.G(b))
return a<b},
az:function(a,b){if(typeof b!=="number")throw H.c(H.G(b))
return a>b},
ct:function(a,b){if(typeof b!=="number")throw H.c(H.G(b))
return a>=b},
$isC:1,
$asC:function(){return[P.a9]},
$isa8:1,
$isa9:1}
J.c0.prototype={$isx:1}
J.c_.prototype={}
J.an.prototype={
bo:function(a,b){if(b>=a.length)throw H.c(H.aV(a,b))
return a.charCodeAt(b)},
S:function(a,b){if(typeof b!=="string")throw H.c(P.iR(b,null,null))
return a+b},
cM:function(a,b,c){var t
if(c>a.length)throw H.c(P.au(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
cL:function(a,b){return this.cM(a,b,0)},
bb:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.ey(b,null,null))
if(b>c)throw H.c(P.ey(b,null,null))
if(c>a.length)throw H.c(P.ey(c,null,null))
return a.substring(b,c)},
cO:function(a,b){return this.bb(a,b,null)},
eP:function(a){return a.toLowerCase()},
e4:function(a,b,c){if(c>a.length)throw H.c(P.au(c,0,a.length,null,null))
return H.mo(a,b,c)},
L:function(a,b){var t
if(typeof b!=="string")throw H.c(H.G(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
k:function(a){return a},
gq:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gi:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.c(H.aV(a,b))
return a[b]},
$isp:1,
$asp:function(){},
$isC:1,
$asC:function(){return[P.o]},
$iso:1}
H.k.prototype={}
H.aJ.prototype={
gv:function(a){return new H.c3(this,this.gi(this),0,null,[H.X(this,"aJ",0)])},
ax:function(a,b){return this.cQ(0,b)},
eO:function(a,b){var t,s
t=H.D([],[H.X(this,"aJ",0)])
C.a.si(t,this.gi(this))
for(s=0;s<this.gi(this);++s)t[s]=this.p(0,s)
return t},
eN:function(a){return this.eO(a,!0)}}
H.c3.prototype={
gn:function(a){return this.d},
m:function(){var t,s,r,q
t=this.a
s=J.N(t)
r=s.gi(t)
if(this.b!==r)throw H.c(P.aa(t))
q=this.c
if(q>=r){this.sa5(null)
return!1}this.sa5(s.p(t,q));++this.c
return!0},
sa5:function(a){this.d=a}}
H.c5.prototype={
gv:function(a){return new H.e4(null,J.aC(this.a),this.b,this.$ti)},
gi:function(a){return J.aZ(this.a)},
$asL:function(a,b){return[b]}}
H.dF.prototype={$isk:1,
$ask:function(a,b){return[b]}}
H.e4.prototype={
m:function(){var t=this.b
if(t.m()){this.sa5(this.c.$1(t.gn(t)))
return!0}this.sa5(null)
return!1},
gn:function(a){return this.a},
sa5:function(a){this.a=a},
$asbZ:function(a,b){return[b]}}
H.b7.prototype={
gi:function(a){return J.aZ(this.a)},
p:function(a,b){return this.b.$1(J.kw(this.a,b))},
$ask:function(a,b){return[b]},
$asaJ:function(a,b){return[b]},
$asL:function(a,b){return[b]}}
H.cv.prototype={
gv:function(a){return new H.fj(J.aC(this.a),this.b,this.$ti)}}
H.fj.prototype={
m:function(){var t,s
for(t=this.a,s=this.b;t.m();)if(s.$1(t.gn(t)))return!0
return!1},
gn:function(a){var t=this.a
return t.gn(t)}}
H.aH.prototype={}
H.hH.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.hI.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.fT.prototype={
sez:function(a){this.z=a},
seC:function(a){this.ch=a}}
H.aP.prototype={
dg:function(){var t,s
t=this.e
s=t.a
this.c.l(0,s)
this.dm(s,t)},
bD:function(a,b){if(!this.f.t(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.aR()},
eI:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.af(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.bv();++r.d}this.y=!1}this.aR()},
dR:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.v(a),s=0;r=this.ch,s<r.length;s+=2)if(t.t(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
eH:function(a){var t,s,r
if(this.ch==null)return
for(t=J.v(a),s=0;r=this.ch,s<r.length;s+=2)if(t.t(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.E(P.t("removeRange"))
P.jm(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
cH:function(a,b){if(!this.r.t(0,a))return
this.db=b},
eq:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.D(0,c)
return}H.b(b===1)
t=this.cx
if(t==null){t=P.i3(null,null)
this.cx=t}t.M(0,new H.fN(a,c))},
ep:function(a,b){var t
if(!this.r.t(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.av()
return}H.b(b===1)
t=this.cx
if(t==null){t=P.i3(null,null)
this.cx=t}t.M(0,this.geA())},
er:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.R(a)
if(b!=null)P.R(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.b_(a)
s[1]=b==null?null:b.k(0)
for(r=new P.bl(t,t.r,null,null,[null]),r.c=t.e;r.m();)r.d.D(0,s)},
a9:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.H(o)
p=H.ad(o)
this.er(q,p)
if(this.db){this.av()
if(this===u.globalState.e)throw o}}finally{this.cy=H.lX(r)
u.globalState.d=H.iw(t,"$isaP")
if(t!=null)$=t.gey()
if(this.cx!=null)for(;n=this.cx,!n.gad(n);)this.cx.c4().$0()}return s},
c0:function(a){return this.b.h(0,a)},
dm:function(a,b){var t=this.b
if(t.F(0,a))throw H.c(P.bS("Registry: ports must be registered only once."))
t.j(0,a,b)},
aR:function(){var t=this.b
if(t.gi(t)-this.c.a>0||this.y||!this.x)u.globalState.z.j(0,this.a,this)
else this.av()},
av:function(){var t,s,r
t=this.cx
if(t!=null)t.P(0)
for(t=this.b,s=t.gcp(t),s=s.gv(s);s.m();)s.gn(s).dn()
t.P(0)
this.c.P(0)
u.globalState.z.af(0,this.a)
this.dx.P(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].D(0,t[r+1])
this.ch=null}},
gey:function(){return this.d},
ge5:function(){return this.e}}
H.fN.prototype={
$0:function(){this.a.D(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.fw.prototype={
ed:function(){var t=this.a
if(t.b===t.c)return
return t.c4()},
c6:function(){var t,s,r
t=this.ed()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.F(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gad(s)}else s=!1
else s=!1
else s=!1
if(s)H.E(P.bS("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gad(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aq(["command","close"])
r=new H.V(!0,P.aQ(null,P.x)).G(r)
s.toString
self.postMessage(r)}return!1}t.eF()
return!0},
bz:function(){if(self.window!=null)new H.fx(this).$0()
else for(;this.c6(););},
ag:function(){var t,s,r,q,p
if(!u.globalState.x)this.bz()
else try{this.bz()}catch(r){t=H.H(r)
s=H.ad(r)
q=u.globalState.Q
p=P.aq(["command","error","msg",H.e(t)+"\n"+H.e(s)])
p=new H.V(!0,P.aQ(null,P.x)).G(p)
q.toString
self.postMessage(p)}}}
H.fx.prototype={
$0:function(){if(!this.a.c6())return
P.lz(C.y,this)},
$S:function(){return{func:1,v:true}}}
H.aA.prototype={
eF:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.a9(this.b)}}
H.fS.prototype={}
H.dR.prototype={
$0:function(){H.lb(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.dS.prototype={
$0:function(){var t,s
t=this.a
t.x=!0
if(!this.b)this.c.$1(this.d)
else{s=this.c
if(H.aW(s,{func:1,args:[P.I,P.I]}))s.$2(this.e,this.d)
else if(H.aW(s,{func:1,args:[P.I]}))s.$1(this.e)
else s.$0()}t.aR()},
$S:function(){return{func:1,v:true}}}
H.fr.prototype={}
H.aR.prototype={
D:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.lL(b)
if(t.ge5()===s){s=J.N(r)
switch(s.h(r,0)){case"pause":t.bD(s.h(r,1),s.h(r,2))
break
case"resume":t.eI(s.h(r,1))
break
case"add-ondone":t.dR(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.eH(s.h(r,1))
break
case"set-errors-fatal":t.cH(s.h(r,1),s.h(r,2))
break
case"ping":t.eq(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.ep(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.af(0,s)
break}return}u.globalState.f.a.M(0,new H.aA(t,new H.fU(this,r),"receive"))},
t:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.aR){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gq:function(a){return this.b.a}}
H.fU.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dk(0,this.b)},
$S:function(){return{func:1}}}
H.bw.prototype={
D:function(a,b){var t,s,r
t=P.aq(["command","message","port",this,"msg",b])
s=new H.V(!0,P.aQ(null,P.x)).G(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
t:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bw){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gq:function(a){return C.b.cT((this.b<<16^this.a<<8)>>>0,this.c)}}
H.cg.prototype={
dn:function(){this.c=!0
this.b=null},
dk:function(a,b){if(this.c)return
this.b.$1(b)},
$isls:1}
H.f3.prototype={
d7:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.M(0,new H.aA(s,new H.f4(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){H.hi()
this.c=self.setTimeout(H.bB(new H.f5(this,b),0),a)}else{H.b(a>0)
throw H.c(P.t("Timer greater than 0."))}}}
H.f4.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.f5.prototype={
$0:function(){var t=this.a
t.c=null
H.hw()
t.d=1
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.ah.prototype={
gq:function(a){var t=this.a
t=C.b.aO(t,0)^C.b.u(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
t:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.ah){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.V.prototype={
G:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.j(0,a,t.gi(t))
t=J.v(a)
if(!!t.$isb9)return["buffer",a]
if(!!t.$isas)return["typed",a]
if(!!t.$isp)return this.cD(a)
if(!!t.$isl8){r=this.gcA()
q=t.gB(a)
q=H.i4(q,r,H.X(q,"L",0),null)
q=P.jd(q,!0,H.X(q,"L",0))
t=t.gcp(a)
t=H.i4(t,r,H.X(t,"L",0),null)
return["map",q,P.jd(t,!0,H.X(t,"L",0))]}if(!!t.$islh)return this.cE(a)
if(!!t.$isa)this.cn(a)
if(!!t.$isls)this.ah(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isaR)return this.cF(a)
if(!!t.$isbw)return this.cG(a)
if(!!t.$isaj){p=a.$static_name
if(p==null)this.ah(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isah)return["capability",a.a]
if(!(a instanceof P.B))this.cn(a)
return["dart",u.classIdExtractor(a),this.cC(u.classFieldsExtractor(a))]},
ah:function(a,b){throw H.c(P.t((b==null?"Can't transmit:":b)+" "+H.e(a)))},
cn:function(a){return this.ah(a,null)},
cD:function(a){var t
H.b(typeof a!=="string")
t=this.cB(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.ah(a,"Can't serialize indexable: ")},
cB:function(a){var t,s
t=[]
C.a.si(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.G(a[s])
return t},
cC:function(a){var t
for(t=0;t<a.length;++t)C.a.j(a,t,this.G(a[t]))
return a},
cE:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.ah(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.si(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.G(a[t[r]])
return["js-object",t,s]},
cG:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cF:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.az.prototype={
R:function(a){var t,s,r,q
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.c(P.iQ("Bad serialized message: "+H.e(a)))
switch(C.a.gem(a)){case"ref":H.b(J.A(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.b(J.A(a[0],"buffer"))
t=a[1]
C.a.l(this.b,t)
return t
case"typed":H.b(J.A(a[0],"typed"))
t=a[1]
C.a.l(this.b,t)
return t
case"fixed":H.b(J.A(a[0],"fixed"))
t=a[1]
C.a.l(this.b,t)
return J.am(H.D(this.a8(t),[null]))
case"extendable":H.b(J.A(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.D(this.a8(t),[null])
case"mutable":H.b(J.A(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.a8(t)
case"const":H.b(J.A(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
return J.am(H.D(this.a8(t),[null]))
case"map":return this.eg(a)
case"sendport":return this.eh(a)
case"raw sendport":H.b(J.A(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.ef(a)
case"function":H.b(J.A(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.b(J.A(a[0],"capability"))
return new H.ah(a[1])
case"dart":H.b(J.A(a[0],"dart"))
s=a[1]
r=a[2]
q=u.instanceFromClassId(s)
C.a.l(this.b,q)
this.a8(r)
return u.initializeEmptyInstance(s,q,r)
default:throw H.c("couldn't deserialize: "+H.e(a))}},
a8:function(a){var t
for(t=0;t<a.length;++t)C.a.j(a,t,this.R(a[t]))
return a},
eg:function(a){var t,s,r,q,p
H.b(J.A(a[0],"map"))
t=a[1]
s=a[2]
r=P.a1()
C.a.l(this.b,r)
t=J.kH(t,this.gee()).eN(0)
for(q=J.N(s),p=0;p<t.length;++p)r.j(0,t[p],this.R(q.h(s,p)))
return r},
eh:function(a){var t,s,r,q,p,o,n
H.b(J.A(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.c0(r)
if(o==null)return
n=new H.aR(o,s)}else n=new H.bw(t,r,s)
C.a.l(this.b,n)
return n},
ef:function(a){var t,s,r,q,p,o
H.b(J.A(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.N(t),p=J.N(s),o=0;o<q.gi(t);++o)r[q.h(t,o)]=this.R(p.h(s,o))
return r}}
H.ez.prototype={}
H.f9.prototype={
J:function(a){var t,s,r
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
H.ej.prototype={
k:function(a){var t=this.b
if(t==null)return"NullError: "+H.e(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.dX.prototype={
k:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.e(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.e(this.a)+")"}}
H.fe.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.hJ.prototype={
$1:function(a){if(!!J.v(a).$isaG)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(a){return{func:1,args:[,]}}}
H.cW.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t},
$isaM:1}
H.hq.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.hr.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.hs.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.ht.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.hu.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.aj.prototype={
k:function(a){return"Closure '"+H.bc(this).trim()+"'"},
$ishW:1,
geV:function(){return this},
$D:null}
H.eZ.prototype={}
H.eN.prototype={
k:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.b0.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.b0))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gq:function(a){var t,s
t=this.c
if(t==null)s=H.at(this.a)
else s=typeof t!=="object"?J.aY(t):H.at(t)
return(s^H.at(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.bc(t)+"'")}}
H.fb.prototype={
k:function(a){return this.a}}
H.dr.prototype={
k:function(a){return this.a}}
H.eD.prototype={
k:function(a){return"RuntimeError: "+H.e(this.a)}}
H.fl.prototype={
k:function(a){return C.j.S("Assertion failed: ",P.bR(this.a))}}
H.cu.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gq:function(a){return J.aY(this.a)},
t:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.cu){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.a0.prototype={
gi:function(a){return this.a},
gad:function(a){return this.a===0},
gB:function(a){return new H.e_(this,[H.ae(this,0)])},
gcp:function(a){return H.i4(this.gB(this),new H.dW(this),H.ae(this,0),H.ae(this,1))},
F:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bs(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bs(s,b)}else return this.ev(b)},
ev:function(a){var t=this.d
if(t==null)return!1
return this.ac(this.aq(t,this.ab(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.a6(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.a6(r,b)
return s==null?null:s.b}else return this.ew(b)},
ew:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.aq(t,this.ab(a))
r=this.ac(s,a)
if(r<0)return
return s[r].b},
j:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aK()
this.b=t}this.bl(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aK()
this.c=s}this.bl(s,b,c)}else{r=this.d
if(r==null){r=this.aK()
this.d=r}q=this.ab(b)
p=this.aq(r,q)
if(p==null)this.aN(r,q,[this.aL(b,c)])
else{o=this.ac(p,b)
if(o>=0)p[o].b=c
else p.push(this.aL(b,c))}}},
af:function(a,b){if(typeof b==="string")return this.by(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.by(this.c,b)
else return this.ex(b)},
ex:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.aq(t,this.ab(a))
r=this.ac(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bB(q)
return q.b},
P:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aJ()}},
aa:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.c(P.aa(this))
t=t.c}},
bl:function(a,b,c){var t=this.a6(a,b)
if(t==null)this.aN(a,b,this.aL(b,c))
else t.b=c},
by:function(a,b){var t
if(a==null)return
t=this.a6(a,b)
if(t==null)return
this.bB(t)
this.bt(a,b)
return t.b},
aJ:function(){this.r=this.r+1&67108863},
aL:function(a,b){var t,s
t=new H.dZ(a,b,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.aJ()
return t},
bB:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.aJ()},
ab:function(a){return J.aY(a)&0x3ffffff},
ac:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.A(a[s].a,b))return s
return-1},
k:function(a){return P.jf(this)},
a6:function(a,b){return a[b]},
aq:function(a,b){return a[b]},
aN:function(a,b,c){H.b(c!=null)
a[b]=c},
bt:function(a,b){delete a[b]},
bs:function(a,b){return this.a6(a,b)!=null},
aK:function(){var t=Object.create(null)
this.aN(t,"<non-identifier-key>",t)
this.bt(t,"<non-identifier-key>")
return t},
$isl8:1}
H.dW.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(a){return{func:1,args:[,]}}}
H.dZ.prototype={}
H.e_.prototype={
gi:function(a){return this.a.a},
gv:function(a){var t,s
t=this.a
s=new H.e0(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.e0.prototype={
gn:function(a){return this.d},
m:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.aa(t))
else{t=this.c
if(t==null){this.sbk(null)
return!1}else{this.sbk(t.a)
this.c=this.c.c
return!0}}},
sbk:function(a){this.d=a}}
H.hm.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[,]}}}
H.hn.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(a,b){return{func:1,args:[,P.o]}}}
H.ho.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[P.o]}}}
H.b9.prototype={$isb9:1}
H.as.prototype={$isas:1}
H.c8.prototype={
gi:function(a){return a.length},
$isp:1,
$asp:function(){},
$isr:1,
$asr:function(){}}
H.ba.prototype={
h:function(a,b){H.a7(b,a,a.length)
return a[b]},
j:function(a,b,c){H.a7(b,a,a.length)
a[b]=c},
$isk:1,
$ask:function(){return[P.a8]},
$asaH:function(){return[P.a8]},
$asm:function(){return[P.a8]},
$isl:1,
$asl:function(){return[P.a8]}}
H.c9.prototype={
j:function(a,b,c){H.a7(b,a,a.length)
a[b]=c},
$isk:1,
$ask:function(){return[P.x]},
$asaH:function(){return[P.x]},
$asm:function(){return[P.x]},
$isl:1,
$asl:function(){return[P.x]}}
H.c7.prototype={$ishV:1}
H.eb.prototype={
h:function(a,b){H.a7(b,a,a.length)
return a[b]}}
H.ec.prototype={
h:function(a,b){H.a7(b,a,a.length)
return a[b]},
$isl7:1}
H.ed.prototype={
h:function(a,b){H.a7(b,a,a.length)
return a[b]}}
H.ee.prototype={
h:function(a,b){H.a7(b,a,a.length)
return a[b]}}
H.ef.prototype={
h:function(a,b){H.a7(b,a,a.length)
return a[b]}}
H.ca.prototype={
gi:function(a){return a.length},
h:function(a,b){H.a7(b,a,a.length)
return a[b]}}
H.eg.prototype={
gi:function(a){return a.length},
h:function(a,b){H.a7(b,a,a.length)
return a[b]}}
H.bn.prototype={}
H.bo.prototype={}
H.bp.prototype={}
H.bq.prototype={}
P.fn.prototype={
$1:function(a){var t,s
H.hw()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(a){return{func:1,args:[,]}}}
P.fm.prototype={
$1:function(a){var t,s
t=this.a
H.b(t.a==null)
H.hi()
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(a){return{func:1,args:[{func:1,v:true}]}}}
P.fo.prototype={
$0:function(){H.hw()
this.a.$0()},
$S:function(){return{func:1}}}
P.fp.prototype={
$0:function(){H.hw()
this.a.$0()},
$S:function(){return{func:1}}}
P.hR.prototype={}
P.fs.prototype={}
P.h6.prototype={
e3:function(a,b){var t=this.a
if(t.a!==0)throw H.c(P.i9("Future already completed"))
t.aG(b)}}
P.cE.prototype={
eD:function(a){if(this.c!==6)return!0
H.b(!0)
return this.b.b.aZ(this.d,a.a)},
eo:function(a){var t,s
t=(this.c&2)!==0
if(t){H.b(t)
t=this.e!=null}else t=!1
H.b(t)
s=this.e
t=this.b.b
if(H.aW(s,{func:1,args:[P.B,P.aM]}))return t.eJ(s,a.a,a.b)
else return t.aZ(s,a.a)}}
P.a6.prototype={
cb:function(a,b){var t,s,r
t=$.z
if(t!==C.f){t.toString
if(b!=null)b=P.lP(b,t)}s=new P.a6(0,t,null,[null])
r=b==null?1:3
this.bm(new P.cE(null,s,r,a,b,[H.ae(this,0),null]))
return s},
ca:function(a){return this.cb(a,null)},
aD:function(a){H.b(this.a<4)
H.b(a.a>=4)
this.a=a.a
this.c=a.c},
bm:function(a){var t
H.b(a.a==null)
t=this.a
if(t<=1){a.a=H.iw(this.c,"$iscE")
this.c=a}else{if(t===2){H.b(!0)
t=this.c
if(t.a<4){t.bm(a)
return}this.aD(t)}H.b(this.a>=4)
t=this.b
t.toString
P.hd(null,null,t,new P.fC(this,a))}},
bx:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.b(!0)
s=this.c
if(s.a<4){s.bx(a)
return}this.aD(s)}H.b(this.a>=4)
t.a=this.ar(a)
s=this.b
s.toString
P.hd(null,null,s,new P.fG(t,this))}},
aM:function(){H.b(this.a<4)
var t=this.c
this.c=null
return this.ar(t)},
ar:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aG:function(a){var t,s,r
H.b(this.a<4)
t=this.$ti
s=H.ip(a,"$isdM",t,"$asdM")
if(s){t=H.ip(a,"$isa6",t,null)
if(t)P.jE(a,this)
else P.lG(a,this)}else{r=this.aM()
H.b(this.a<4)
this.a=4
this.c=a
P.bj(this,r)}},
an:function(a,b){var t
H.b(this.a<4)
t=this.aM()
H.b(this.a<4)
this.a=8
this.c=new P.aD(a,b)
P.bj(this,t)},
dr:function(a){return this.an(a,null)},
$isdM:1,
gaP:function(){return this.a},
gdJ:function(){return this.c}}
P.fC.prototype={
$0:function(){P.bj(this.a,this.b)},
$S:function(){return{func:1}}}
P.fG.prototype={
$0:function(){P.bj(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.fD.prototype={
$1:function(a){var t=this.a
H.b(t.a===1)
H.b(t.a===1)
t.a=0
t.aG(a)},
$S:function(a){return{func:1,args:[,]}}}
P.fE.prototype={
$2:function(a,b){var t=this.a
H.b(t.a===1)
t.an(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(a,b){return{func:1,args:[,],opt:[,]}}}
P.fF.prototype={
$0:function(){this.a.an(this.b,this.c)},
$S:function(){return{func:1}}}
P.fJ.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.c
p=q.c
H.b((p&1)===0)
o=(p&2)===0
H.b(o)
t=null
try{H.b(o)
H.b(p===8)
t=q.b.b.c5(q.d)}catch(n){s=H.H(n)
r=H.ad(n)
if(this.d){q=this.a.a
H.b(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.b(q.a===8)
p.b=q.c}else p.b=new P.aD(s,r)
p.a=!0
return}if(!!J.v(t).$isdM){if(t instanceof P.a6&&t.gaP()>=4){if(t.gaP()===8){q=t
H.b(q.gaP()===8)
p=this.b
p.b=q.gdJ()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.ca(new P.fK(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.fK.prototype={
$1:function(a){return this.a},
$S:function(a){return{func:1,args:[,]}}}
P.fI.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.b((r.c&1)!==0)
this.a.b=r.b.b.aZ(r.d,this.c)}catch(q){t=H.H(q)
s=H.ad(q)
r=this.a
r.b=new P.aD(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.fH.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.b(q.a===8)
t=q.c
q=this.c
if(q.eD(t)){H.b((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.eo(t)
p.a=!1}}catch(o){s=H.H(o)
r=H.ad(o)
q=this.a
p=q.a
H.b(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.b(q.a===8)
m.b=q.c}else m.b=new P.aD(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.cw.prototype={}
P.eS.prototype={
gi:function(a){var t,s
t={}
s=new P.a6(0,$.z,null,[P.x])
t.a=0
this.eB(new P.eU(t),!0,new P.eV(t,s),s.gdq())
return s}}
P.eU.prototype={
$1:function(a){++this.a.a},
$S:function(a){return{func:1,args:[,]}}}
P.eV.prototype={
$0:function(){this.b.aG(this.a.a)},
$S:function(){return{func:1}}}
P.eT.prototype={}
P.ia.prototype={}
P.aD.prototype={
k:function(a){return H.e(this.a)},
$isaG:1}
P.ha.prototype={}
P.hc.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.ce()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.c(t)
r=H.c(t)
r.stack=s.k(0)
throw r},
$S:function(){return{func:1}}}
P.fX.prototype={
eK:function(a){var t,s,r
try{if(C.f===$.z){a.$0()
return}P.jK(null,null,this,a)}catch(r){t=H.H(r)
s=H.ad(r)
P.hb(null,null,this,t,s)}},
eL:function(a,b){var t,s,r
try{if(C.f===$.z){a.$1(b)
return}P.jL(null,null,this,a,b)}catch(r){t=H.H(r)
s=H.ad(r)
P.hb(null,null,this,t,s)}},
dY:function(a){return new P.fZ(this,a)},
aS:function(a){return new P.fY(this,a)},
e_:function(a){return new P.h_(this,a)},
h:function(a,b){return},
c5:function(a){if($.z===C.f)return a.$0()
return P.jK(null,null,this,a)},
aZ:function(a,b){if($.z===C.f)return a.$1(b)
return P.jL(null,null,this,a,b)},
eJ:function(a,b,c){if($.z===C.f)return a.$2(b,c)
return P.lQ(null,null,this,a,b,c)}}
P.fZ.prototype={
$0:function(){return this.a.c5(this.b)},
$S:function(){return{func:1}}}
P.fY.prototype={
$0:function(){return this.a.eK(this.b)},
$S:function(){return{func:1}}}
P.h_.prototype={
$1:function(a){return this.a.eL(this.b,a)},
$S:function(a){return{func:1,args:[,]}}}
P.fQ.prototype={
ab:function(a){return H.mi(a)&0x3ffffff},
ac:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.fO.prototype={
gv:function(a){var t=new P.bl(this,this.r,null,null,[null])
t.c=this.e
return t},
gi:function(a){return this.a},
A:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.ds(b)},
ds:function(a){var t=this.d
if(t==null)return!1
return this.ap(t[this.ao(a)],a)>=0},
c0:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.A(0,a)?a:null
else return this.dD(a)},
dD:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.ao(a)]
r=this.ap(s,a)
if(r<0)return
return J.iC(s,r).gdu()},
l:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.ik()
this.b=t}return this.bp(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.ik()
this.c=s}return this.bp(s,b)}else return this.M(0,b)},
M:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.ik()
this.d=t}s=this.ao(b)
r=t[s]
if(r==null){q=[this.aF(b)]
H.b(q!=null)
t[s]=q}else{if(this.ap(r,b)>=0)return!1
r.push(this.aF(b))}return!0},
af:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bq(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bq(this.c,b)
else return this.dE(0,b)},
dE:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.ao(b)]
r=this.ap(s,b)
if(r<0)return!1
this.br(s.splice(r,1)[0])
return!0},
P:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aE()}},
bp:function(a,b){var t
if(a[b]!=null)return!1
t=this.aF(b)
H.b(!0)
a[b]=t
return!0},
bq:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.br(t)
delete a[b]
return!0},
aE:function(){this.r=this.r+1&67108863},
aF:function(a){var t,s
t=new P.fP(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.aE()
return t},
br:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.aE()},
ao:function(a){return J.aY(a)&0x3ffffff},
ap:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.A(a[s].a,b))return s
return-1}}
P.fP.prototype={
gdu:function(){return this.a}}
P.bl.prototype={
gn:function(a){return this.d},
m:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.aa(t))
else{t=this.c
if(t==null){this.sa4(null)
return!1}else{this.sa4(t.a)
this.c=this.c.b
return!0}}},
sa4:function(a){this.d=a}}
P.fM.prototype={}
P.i1.prototype={$isk:1}
P.c2.prototype={$isk:1,$isl:1}
P.m.prototype={
gv:function(a){return new H.c3(a,this.gi(a),0,null,[H.X(a,"m",0)])},
p:function(a,b){return this.h(a,b)},
c1:function(a,b){return new H.b7(a,b,[H.X(a,"m",0),null])},
en:function(a,b,c){var t,s,r
t=this.gi(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gi(a))throw H.c(P.aa(a))}return s},
k:function(a){return P.dT(a,"[","]")}}
P.c4.prototype={}
P.e3.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.e(a)
t.a=s+": "
t.a+=H.e(b)},
$S:function(a,b){return{func:1,args:[,,]}}}
P.aL.prototype={
aa:function(a,b){var t,s
for(t=J.aC(this.gB(a));t.m();){s=t.gn(t)
b.$2(s,this.h(a,s))}},
gi:function(a){return J.aZ(this.gB(a))},
k:function(a){return P.jf(a)}}
P.e1.prototype={
d_:function(a,b){var t
H.b(!0)
t=new Array(8)
t.fixed$length=Array
this.sbA(H.D(t,[b]))},
gv:function(a){return new P.fR(this,this.c,this.d,this.b,null,this.$ti)},
gad:function(a){return this.b===this.c},
gi:function(a){return(this.c-this.b&this.a.length-1)>>>0},
p:function(a,b){var t,s
t=this.gi(this)
if(0>b||b>=t)H.E(P.y(b,this,"index",null,t))
s=this.a
return s[(this.b+b&s.length-1)>>>0]},
P:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
k:function(a){return P.dT(this,"{","}")},
c4:function(){var t,s,r
t=this.b
if(t===this.c)throw H.c(H.dU());++this.d
s=this.a
r=s[t]
s[t]=null
this.b=(t+1&s.length-1)>>>0
return r},
M:function(a,b){var t,s
t=this.a
s=this.c
t[s]=b
t=(s+1&t.length-1)>>>0
this.c=t
if(this.b===t)this.bv();++this.d},
bv:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.D(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.b8(s,0,q,t,r)
C.a.b8(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbA(s)},
sbA:function(a){this.a=a}}
P.fR.prototype={
gn:function(a){return this.e},
m:function(){var t,s
t=this.a
if(this.c!==t.d)H.E(P.aa(t))
s=this.d
if(s===this.b){this.sa4(null)
return!1}this.sa4(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sa4:function(a){this.e=a}}
P.eG.prototype={
H:function(a,b){var t
for(t=J.aC(b);t.m();)this.l(0,t.gn(t))},
k:function(a){return P.dT(this,"{","}")},
$isk:1}
P.eF.prototype={}
P.bm.prototype={}
P.ac.prototype={}
P.C.prototype={}
P.b1.prototype={
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.b1))return!1
return this.a===b.a&&this.b===b.b},
L:function(a,b){return C.b.L(this.a,b.a)},
gq:function(a){var t=this.a
return(t^C.b.aO(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.l0(H.lp(this))
s=P.bM(H.ln(this))
r=P.bM(H.lj(this))
q=P.bM(H.lk(this))
p=P.bM(H.lm(this))
o=P.bM(H.lo(this))
n=P.l1(H.ll(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isC:1,
$asC:function(){return[P.b1]}}
P.a8.prototype={}
P.ak.prototype={
aj:function(a,b){return C.b.aj(this.a,b.gdt())},
az:function(a,b){return C.b.az(this.a,b.gdt())},
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.ak))return!1
return this.a===b.a},
gq:function(a){return this.a&0x1FFFFFFF},
L:function(a,b){return C.b.L(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.dE()
s=this.a
if(s<0)return"-"+new P.ak(0-s).k(0)
r=t.$1(C.b.u(s,6e7)%60)
q=t.$1(C.b.u(s,1e6)%60)
p=new P.dD().$1(s%1e6)
return""+C.b.u(s,36e8)+":"+H.e(r)+":"+H.e(q)+"."+H.e(p)},
$isC:1,
$asC:function(){return[P.ak]}}
P.dD.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(a){return{func:1,ret:P.o,args:[P.x]}}}
P.dE.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(a){return{func:1,ret:P.o,args:[P.x]}}}
P.aG.prototype={}
P.bH.prototype={
k:function(a){return"Assertion failed"}}
P.ce.prototype={
k:function(a){return"Throw of null."}}
P.Z.prototype={
gaI:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaH:function(){return""},
k:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+t
q=this.gaI()+s+r
if(!this.a)return q
p=this.gaH()
o=P.bR(this.b)
return q+p+": "+H.e(o)}}
P.bd.prototype={
gaI:function(){return"RangeError"},
gaH:function(){var t,s,r
H.b(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.e(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.e(t)
else if(r>t)s=": Not in range "+H.e(t)+".."+H.e(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.e(t)}return s}}
P.dQ.prototype={
gaI:function(){return"RangeError"},
gaH:function(){H.b(this.a)
if(J.ka(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.e(t)},
gi:function(a){return this.f}}
P.ff.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.fd.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.aN.prototype={
k:function(a){return"Bad state: "+this.a}}
P.dt.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.e(P.bR(t))+"."}}
P.cl.prototype={
k:function(a){return"Stack Overflow"},
$isaG:1}
P.dy.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.hT.prototype={}
P.fB.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.e(t)}}
P.dL.prototype={
k:function(a){var t,s
t=this.a
s=t!=null&&""!==t?"FormatException: "+H.e(t):"FormatException"
return s}}
P.dH.prototype={
h:function(a,b){var t,s
t=this.a
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.E(P.iR(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.jj(b,"expando$values")
return s==null?null:H.jj(s,t)},
k:function(a){return"Expando:"+H.e(this.b)}}
P.x.prototype={}
P.L.prototype={
ax:function(a,b){return new H.cv(this,b,[H.X(this,"L",0)])},
gi:function(a){var t,s
H.b(!this.$isk)
t=this.gv(this)
for(s=0;t.m();)++s
return s},
gV:function(a){var t,s
t=this.gv(this)
if(!t.m())throw H.c(H.dU())
s=t.gn(t)
if(t.m())throw H.c(H.lg())
return s},
p:function(a,b){var t,s,r
if(b<0)H.E(P.au(b,0,null,"index",null))
for(t=this.gv(this),s=0;t.m();){r=t.gn(t)
if(b===s)return r;++s}throw H.c(P.y(b,this,"index",null,s))},
k:function(a){return P.le(this,"(",")")}}
P.bZ.prototype={}
P.l.prototype={$isk:1}
P.aK.prototype={}
P.I.prototype={
gq:function(a){return P.B.prototype.gq.call(this,this)},
k:function(a){return"null"}}
P.a9.prototype={$isC:1,
$asC:function(){return[P.a9]}}
P.B.prototype={constructor:P.B,$isB:1,
t:function(a,b){return this===b},
gq:function(a){return H.at(this)},
k:function(a){return"Instance of '"+H.bc(this)+"'"},
toString:function(){return this.k(this)}}
P.aM.prototype={}
P.o.prototype={$isC:1,
$asC:function(){return[P.o]}}
P.bf.prototype={
gi:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
gW:function(){return this.a}}
W.i.prototype={}
W.dj.prototype={
gi:function(a){return a.length}}
W.dk.prototype={
k:function(a){return String(a)}}
W.dl.prototype={
k:function(a){return String(a)}}
W.ag.prototype={$isag:1}
W.bI.prototype={
b0:function(a,b,c){if(c!=null)return this.dw(a,b,P.m_(c,null))
return this.dz(a,b)},
cu:function(a,b){return this.b0(a,b,null)},
dw:function(a,b,c){return a.getContext(b,c)},
dz:function(a,b){return a.getContext(b)}}
W.bJ.prototype={
as:function(a,b,c){return a.addColorStop(b,c)}}
W.bK.prototype={
bP:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
el:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
ay:function(a){return P.hf(a.getContextAttributes())}}
W.ai.prototype={
gi:function(a){return a.length}}
W.du.prototype={
gi:function(a){return a.length}}
W.aF.prototype={
bn:function(a,b){var t,s
t=$.$get$iY()
s=t[b]
if(typeof s==="string")return s
s=this.dN(a,b)
t[b]=s
return s},
dN:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.l2()+b
if(t in a)return t
return b},
gi:function(a){return a.length}}
W.dv.prototype={}
W.Q.prototype={}
W.a_.prototype={}
W.dw.prototype={
gi:function(a){return a.length}}
W.dx.prototype={
gi:function(a){return a.length}}
W.dz.prototype={
h:function(a,b){return a[b]},
gi:function(a){return a.length}}
W.bN.prototype={}
W.b2.prototype={
dS:function(a,b){return a.adoptNode(b)},
cv:function(a,b){return a.getElementById(b)},
aY:function(a,b){return a.querySelector(b)}}
W.dA.prototype={
k:function(a){return String(a)}}
W.bO.prototype={
e9:function(a,b){return a.createHTMLDocument(b)}}
W.bP.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isp:1,
$asp:function(){return[P.M]},
$isk:1,
$ask:function(){return[P.M]},
$isr:1,
$asr:function(){return[P.M]},
$asm:function(){return[P.M]},
$isl:1,
$asl:function(){return[P.M]},
$asn:function(){return[P.M]}}
W.bQ.prototype={
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.ga_(a))+" x "+H.e(this.gY(a))},
t:function(a,b){var t
if(b==null)return!1
t=J.v(b)
if(!t.$isM)return!1
return a.left===t.gbZ(b)&&a.top===t.gcc(b)&&this.ga_(a)===t.ga_(b)&&this.gY(a)===t.gY(b)},
gq:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.ga_(a)
q=this.gY(a)
return W.jI(W.aB(W.aB(W.aB(W.aB(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gY:function(a){return a.height},
gbZ:function(a){return a.left},
gcc:function(a){return a.top},
ga_:function(a){return a.width},
$isM:1,
$asM:function(){}}
W.dB.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isp:1,
$asp:function(){return[P.o]},
$isk:1,
$ask:function(){return[P.o]},
$isr:1,
$asr:function(){return[P.o]},
$asm:function(){return[P.o]},
$isl:1,
$asl:function(){return[P.o]},
$asn:function(){return[P.o]}}
W.dC.prototype={
gi:function(a){return a.length}}
W.S.prototype={
gdV:function(a){return new W.fv(a)},
k:function(a){return a.localName},
I:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.j5
if(t==null){t=H.D([],[W.cc])
s=new W.cd(t)
C.a.l(t,W.jF(null))
C.a.l(t,W.jJ())
$.j5=s
d=s}else d=t
t=$.j4
if(t==null){t=new W.d5(d)
$.j4=t
c=t}else{t.a=d
c=t}}if($.ab==null){t=document
s=t.implementation
s=(s&&C.L).e9(s,"")
$.ab=s
$.hS=s.createRange()
s=$.ab
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.ab.head;(t&&C.M).K(t,r)}t=$.ab
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.iw(s,"$isag")}t=$.ab
if(!!this.$isag)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.ab.body;(t&&C.p).K(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.A(C.W,a.tagName)){t=$.hS;(t&&C.F).cz(t,q)
t=$.hS
p=(t&&C.F).e7(t,b)}else{q.innerHTML=b
p=$.ab.createDocumentFragment()
for(t=J.j(p);s=q.firstChild,s!=null;)t.K(p,s)}t=$.ab.body
if(q==null?t!=null:q!==t)J.iJ(q)
c.b7(p)
C.i.dS(document,p)
return p},
e8:function(a,b,c){return this.I(a,b,c,null)},
cJ:function(a,b,c,d){a.textContent=null
this.K(a,this.I(a,b,c,d))},
cI:function(a,b){return this.cJ(a,b,null,null)},
a0:function(a,b){return a.getAttribute(b)},
dF:function(a,b){return a.removeAttribute(b)},
$isS:1,
geM:function(a){return a.tagName}}
W.dG.prototype={
$1:function(a){return!!J.v(a).$isS},
$S:function(a){return{func:1,args:[,]}}}
W.f.prototype={$isf:1}
W.d.prototype={
dl:function(a,b,c,d){return a.addEventListener(b,H.bB(c,1),!1)}}
W.dI.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isp:1,
$asp:function(){return[W.bT]},
$isk:1,
$ask:function(){return[W.bT]},
$isr:1,
$asr:function(){return[W.bT]},
$asm:function(){return[W.bT]},
$isl:1,
$asl:function(){return[W.bT]},
$asn:function(){return[W.bT]}}
W.dJ.prototype={
gi:function(a){return a.length}}
W.dK.prototype={
gi:function(a){return a.length}}
W.bW.prototype={}
W.dN.prototype={
gi:function(a){return a.length}}
W.b4.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isp:1,
$asp:function(){return[W.q]},
$isk:1,
$ask:function(){return[W.q]},
$isr:1,
$asr:function(){return[W.q]},
$asm:function(){return[W.q]},
$isl:1,
$asl:function(){return[W.q]},
$asn:function(){return[W.q]}}
W.bX.prototype={}
W.dO.prototype={
D:function(a,b){return a.send(b)}}
W.b5.prototype={}
W.ap.prototype={$isap:1}
W.e2.prototype={
k:function(a){return String(a)}}
W.e6.prototype={
gi:function(a){return a.length}}
W.e8.prototype={
eW:function(a,b,c){return a.send(b,c)},
D:function(a,b){return a.send(b)}}
W.b8.prototype={}
W.e9.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isp:1,
$asp:function(){return[W.c6]},
$isk:1,
$ask:function(){return[W.c6]},
$isr:1,
$asr:function(){return[W.c6]},
$asm:function(){return[W.c6]},
$isl:1,
$asl:function(){return[W.c6]},
$asn:function(){return[W.c6]}}
W.F.prototype={$isF:1}
W.K.prototype={
gV:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.c(P.i9("No elements"))
if(s>1)throw H.c(P.i9("More than one element"))
return t.firstChild},
H:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.j(s),p=0;p<r;++p)q.K(s,t.firstChild)
return},
j:function(a,b,c){var t=this.a
J.kd(t,c,C.D.h(t.childNodes,b))},
gv:function(a){var t=this.a.childNodes
return new W.bU(t,t.length,-1,null,[H.X(t,"n",0)])},
gi:function(a){return this.a.childNodes.length},
h:function(a,b){return C.D.h(this.a.childNodes,b)},
$ask:function(){return[W.q]},
$asc2:function(){return[W.q]},
$asm:function(){return[W.q]},
$asl:function(){return[W.q]},
$asbm:function(){return[W.q]}}
W.q.prototype={
eG:function(a){var t=a.parentNode
if(t!=null)J.hK(t,a)},
k:function(a){var t=a.nodeValue
return t==null?this.cP(a):t},
K:function(a,b){return a.appendChild(b)},
dG:function(a,b){return a.removeChild(b)},
dH:function(a,b,c){return a.replaceChild(b,c)},
$isq:1,
gaW:function(a){return a.previousSibling}}
W.cb.prototype={
aX:function(a){return a.previousNode()}}
W.bb.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isp:1,
$asp:function(){return[W.q]},
$isk:1,
$ask:function(){return[W.q]},
$isr:1,
$asr:function(){return[W.q]},
$asm:function(){return[W.q]},
$isl:1,
$asl:function(){return[W.q]},
$asn:function(){return[W.q]}}
W.a2.prototype={
gi:function(a){return a.length}}
W.et.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isp:1,
$asp:function(){return[W.a2]},
$isk:1,
$ask:function(){return[W.a2]},
$isr:1,
$asr:function(){return[W.a2]},
$asm:function(){return[W.a2]},
$isl:1,
$asl:function(){return[W.a2]},
$asn:function(){return[W.a2]}}
W.ew.prototype={
D:function(a,b){return a.send(b)}}
W.cf.prototype={
e7:function(a,b){return a.createContextualFragment(b)},
cz:function(a,b){return a.selectNodeContents(b)}}
W.ch.prototype={
D:function(a,b){return a.send(b)}}
W.eE.prototype={
gi:function(a){return a.length}}
W.eJ.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isp:1,
$asp:function(){return[W.cj]},
$isk:1,
$ask:function(){return[W.cj]},
$isr:1,
$asr:function(){return[W.cj]},
$asm:function(){return[W.cj]},
$isl:1,
$asl:function(){return[W.cj]},
$asn:function(){return[W.cj]}}
W.eL.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isp:1,
$asp:function(){return[W.ck]},
$isk:1,
$ask:function(){return[W.ck]},
$isr:1,
$asr:function(){return[W.ck]},
$asm:function(){return[W.ck]},
$isl:1,
$asl:function(){return[W.ck]},
$asn:function(){return[W.ck]}}
W.a3.prototype={
gi:function(a){return a.length}}
W.eQ.prototype={
h:function(a,b){return this.bu(a,b)},
aa:function(a,b){var t,s
for(t=0;!0;++t){s=this.dC(a,t)
if(s==null)return
b.$2(s,this.bu(a,s))}},
gB:function(a){var t=H.D([],[P.o])
this.aa(a,new W.eR(t))
return t},
gi:function(a){return a.length},
bu:function(a,b){return a.getItem(b)},
dC:function(a,b){return a.key(b)},
$asaL:function(){return[P.o,P.o]}}
W.eR.prototype={
$2:function(a,b){return C.a.l(this.a,a)},
$S:function(a,b){return{func:1,args:[,,]}}}
W.cn.prototype={
I:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aB(a,b,c,d)
t=W.l4("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.K(s).H(0,new W.K(t))
return s}}
W.eX.prototype={
I:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aB(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.K.I(t.createElement("table"),b,c,d)
t.toString
t=new W.K(t)
r=t.gV(t)
r.toString
t=new W.K(r)
q=t.gV(t)
s.toString
q.toString
new W.K(s).H(0,new W.K(q))
return s}}
W.eY.prototype={
I:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aB(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.K.I(t.createElement("table"),b,c,d)
t.toString
t=new W.K(t)
r=t.gV(t)
s.toString
r.toString
new W.K(s).H(0,new W.K(r))
return s}}
W.bg.prototype={$isbg:1}
W.f_.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isp:1,
$asp:function(){return[W.cp]},
$isk:1,
$ask:function(){return[W.cp]},
$isr:1,
$asr:function(){return[W.cp]},
$asm:function(){return[W.cp]},
$isl:1,
$asl:function(){return[W.cp]},
$asn:function(){return[W.cp]}}
W.f0.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isp:1,
$asp:function(){return[W.co]},
$isk:1,
$ask:function(){return[W.co]},
$isr:1,
$asr:function(){return[W.co]},
$asm:function(){return[W.co]},
$isl:1,
$asl:function(){return[W.co]},
$asn:function(){return[W.co]}}
W.f2.prototype={
gi:function(a){return a.length}}
W.av.prototype={$isav:1}
W.f6.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isp:1,
$asp:function(){return[W.cs]},
$isk:1,
$ask:function(){return[W.cs]},
$isr:1,
$asr:function(){return[W.cs]},
$asm:function(){return[W.cs]},
$isl:1,
$asl:function(){return[W.cs]},
$asn:function(){return[W.cs]}}
W.f7.prototype={
gi:function(a){return a.length}}
W.ct.prototype={
aX:function(a){return a.previousNode()}}
W.aw.prototype={}
W.fg.prototype={
k:function(a){return String(a)}}
W.fh.prototype={
gi:function(a){return a.length}}
W.fi.prototype={
D:function(a,b){return a.send(b)}}
W.ay.prototype={
gec:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.t("deltaY is not supported"))},
$isay:1}
W.bi.prototype={
gdU:function(a){var t,s
t=P.a9
s=new P.a6(0,$.z,null,[t])
this.dv(a)
this.dI(a,W.jO(new W.fk(new P.h6(s,[t]))))
return s},
dI:function(a,b){return a.requestAnimationFrame(H.bB(b,1))},
dv:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.fk.prototype={
$1:function(a){this.a.e3(0,a)},
$S:function(a){return{func:1,args:[,]}}}
W.ie.prototype={}
W.ft.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isp:1,
$asp:function(){return[W.bL]},
$isk:1,
$ask:function(){return[W.bL]},
$isr:1,
$asr:function(){return[W.bL]},
$asm:function(){return[W.bL]},
$isl:1,
$asl:function(){return[W.bL]},
$asn:function(){return[W.bL]}}
W.fu.prototype={
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
t:function(a,b){var t
if(b==null)return!1
t=J.v(b)
if(!t.$isM)return!1
return a.left===t.gbZ(b)&&a.top===t.gcc(b)&&a.width===t.ga_(b)&&a.height===t.gY(b)},
gq:function(a){var t,s,r,q
t=a.left
s=a.top
r=a.width
q=a.height
return W.jI(W.aB(W.aB(W.aB(W.aB(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gY:function(a){return a.height},
ga_:function(a){return a.width}}
W.fL.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isp:1,
$asp:function(){return[W.bV]},
$isk:1,
$ask:function(){return[W.bV]},
$isr:1,
$asr:function(){return[W.bV]},
$asm:function(){return[W.bV]},
$isl:1,
$asl:function(){return[W.bV]},
$asn:function(){return[W.bV]}}
W.cL.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isp:1,
$asp:function(){return[W.q]},
$isk:1,
$ask:function(){return[W.q]},
$isr:1,
$asr:function(){return[W.q]},
$asm:function(){return[W.q]},
$isl:1,
$asl:function(){return[W.q]},
$asn:function(){return[W.q]}}
W.h3.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isp:1,
$asp:function(){return[W.a3]},
$isk:1,
$ask:function(){return[W.a3]},
$isr:1,
$asr:function(){return[W.a3]},
$asm:function(){return[W.a3]},
$isl:1,
$asl:function(){return[W.a3]},
$asn:function(){return[W.a3]}}
W.h4.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isp:1,
$asp:function(){return[W.cm]},
$isk:1,
$ask:function(){return[W.cm]},
$isr:1,
$asr:function(){return[W.cm]},
$asm:function(){return[W.cm]},
$isl:1,
$asl:function(){return[W.cm]},
$asn:function(){return[W.cm]}}
W.fq.prototype={
aa:function(a,b){var t,s,r,q,p,o
for(t=this.gB(this),s=t.length,r=this.a,q=J.j(r),p=0;p<t.length;t.length===s||(0,H.P)(t),++p){o=t[p]
b.$2(o,q.a0(r,o))}},
gB:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.D([],[P.o])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.l(s,p.name)}return s},
$asc4:function(){return[P.o,P.o]},
$asaL:function(){return[P.o,P.o]},
gdA:function(){return this.a}}
W.fv.prototype={
h:function(a,b){return J.hO(this.a,b)},
gi:function(a){return this.gB(this).length}}
W.fy.prototype={
eB:function(a,b,c,d){return W.U(this.a,this.b,a,!1,H.ae(this,0))}}
W.ii.prototype={}
W.fz.prototype={
de:function(a,b,c,d,e){this.dQ()},
dQ:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.kb(r,this.c,t,!1)}}}
W.fA.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(a){return{func:1,args:[,]}}}
W.bk.prototype={
df:function(a){var t,s
t=$.$get$ij()
if(t.gad(t)){for(s=0;s<262;++s)t.j(0,C.V[s],W.m7())
for(s=0;s<12;++s)t.j(0,C.u[s],W.m8())}},
X:function(a){return $.$get$jG().A(0,W.b3(a))},
O:function(a,b,c){var t,s,r
t=W.b3(a)
s=$.$get$ij()
r=s.h(0,H.e(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)}}
W.n.prototype={
gv:function(a){return new W.bU(a,this.gi(a),-1,null,[H.X(a,"n",0)])}}
W.cd.prototype={
X:function(a){return C.a.bE(this.a,new W.ei(a))},
O:function(a,b,c){return C.a.bE(this.a,new W.eh(a,b,c))}}
W.ei.prototype={
$1:function(a){return a.X(this.a)},
$S:function(a){return{func:1,args:[,]}}}
W.eh.prototype={
$1:function(a){return a.O(this.a,this.b,this.c)},
$S:function(a){return{func:1,args:[,]}}}
W.br.prototype={
dj:function(a,b,c,d){var t,s,r
this.a.H(0,c)
t=b.ax(0,new W.h1())
s=b.ax(0,new W.h2())
this.b.H(0,t)
r=this.c
r.H(0,C.X)
r.H(0,s)},
X:function(a){return this.a.A(0,W.b3(a))},
O:function(a,b,c){var t,s
t=W.b3(a)
s=this.c
if(s.A(0,H.e(t)+"::"+b))return this.d.dT(c)
else if(s.A(0,"*::"+b))return this.d.dT(c)
else{s=this.b
if(s.A(0,H.e(t)+"::"+b))return!0
else if(s.A(0,"*::"+b))return!0
else if(s.A(0,H.e(t)+"::*"))return!0
else if(s.A(0,"*::*"))return!0}return!1}}
W.h1.prototype={
$1:function(a){return!C.a.A(C.u,a)},
$S:function(a){return{func:1,args:[,]}}}
W.h2.prototype={
$1:function(a){return C.a.A(C.u,a)},
$S:function(a){return{func:1,args:[,]}}}
W.h7.prototype={
O:function(a,b,c){if(this.cS(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.hO(a,"template")==="")return this.e.A(0,b)
return!1}}
W.h8.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)},
$S:function(a){return{func:1,args:[,]}}}
W.h5.prototype={
X:function(a){var t=J.v(a)
if(!!t.$isbe)return!1
t=!!t.$ish
if(t&&W.b3(a)==="foreignObject")return!1
if(t)return!0
return!1},
O:function(a,b,c){if(b==="is"||C.j.cL(b,"on"))return!1
return this.X(a)}}
W.bU.prototype={
m:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbw(J.iC(this.a,t))
this.c=t
return!0}this.sbw(null)
this.c=s
return!1},
gn:function(a){return this.d},
sbw:function(a){this.d=a}}
W.cc.prototype={}
W.i6.prototype={}
W.id.prototype={}
W.h0.prototype={}
W.d5.prototype={
b7:function(a){new W.h9(this).$2(a,null)},
a7:function(a,b){if(b==null)J.iJ(a)
else J.hK(b,a)},
dL:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.kz(a)
r=J.hO(s.gdA(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.H(n)}p="element unprintable"
try{p=J.b_(a)}catch(n){H.H(n)}try{o=W.b3(a)
this.dK(a,b,t,p,o,s,r)}catch(n){if(H.H(n) instanceof P.Z)throw n
else{this.a7(a,b)
window
m="Removing corrupted element "+H.e(p)
if(typeof console!="undefined")window.console.warn(m)}}},
dK:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.a7(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(t)
return}if(!this.a.X(a)){this.a7(a,b)
window
t="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(t)
return}if(g!=null)if(!this.a.O(a,"is",g)){this.a7(a,b)
window
t="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(t)
return}t=f.gB(f)
s=H.D(t.slice(0),[H.ae(t,0)])
for(r=f.gB(f).length-1,t=f.a,q=J.j(t);r>=0;--r){p=s[r]
if(!this.a.O(a,J.kN(p),q.a0(t,p))){window
o="Removing disallowed attribute <"+H.e(e)+" "+p+'="'+H.e(q.a0(t,p))+'">'
if(typeof console!="undefined")window.console.warn(o)
q.a0(t,p)
q.dF(t,p)}}if(!!J.v(a).$isbg)this.b7(a.content)}}
W.h9.prototype={
$2:function(a,b){var t,s,r,q
r=this.a
switch(a.nodeType){case 1:r.dL(a,b)
break
case 8:case 11:case 3:case 4:break
default:r.a7(a,b)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.kA(t)}catch(q){H.H(q)
r=t
J.hK(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(a,b){return{func:1,v:true,args:[W.q,W.q]}}}
W.cx.prototype={}
W.cy.prototype={}
W.cz.prototype={}
W.cA.prototype={}
W.cB.prototype={}
W.cC.prototype={}
W.cD.prototype={}
W.cF.prototype={}
W.cG.prototype={}
W.cJ.prototype={}
W.cK.prototype={}
W.cM.prototype={}
W.cN.prototype={}
W.cQ.prototype={}
W.cR.prototype={}
W.bs.prototype={}
W.bt.prototype={}
W.cS.prototype={}
W.cT.prototype={}
W.cX.prototype={}
W.d_.prototype={}
W.d0.prototype={}
W.bu.prototype={}
W.bv.prototype={}
W.d1.prototype={}
W.d2.prototype={}
W.d6.prototype={}
W.d7.prototype={}
W.d8.prototype={}
W.d9.prototype={}
W.da.prototype={}
W.db.prototype={}
W.dc.prototype={}
W.dd.prototype={}
W.de.prototype={}
W.df.prototype={}
P.he.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(a,b){return{func:1,args:[,,]}}}
P.fV.prototype={
di:function(a){var t,s,r,q,p,o,n
do{t=(a&4294967295)>>>0
a=C.b.u(a-t,4294967296)
s=(a&4294967295)>>>0
a=C.b.u(a-s,4294967296)
r=((~t&4294967295)>>>0)+(t<<21>>>0)
q=(r&4294967295)>>>0
s=(~s>>>0)+((s<<21|t>>>11)>>>0)+C.b.u(r-q,4294967296)&4294967295
r=((q^(q>>>24|s<<8))>>>0)*265
t=(r&4294967295)>>>0
s=((s^s>>>24)>>>0)*265+C.b.u(r-t,4294967296)&4294967295
r=((t^(t>>>14|s<<18))>>>0)*21
t=(r&4294967295)>>>0
s=((s^s>>>14)>>>0)*21+C.b.u(r-t,4294967296)&4294967295
t=(t^(t>>>28|s<<4))>>>0
s=(s^s>>>28)>>>0
r=(t<<31>>>0)+t
q=(r&4294967295)>>>0
p=C.b.u(r-q,4294967296)
r=this.a*1037
o=(r&4294967295)>>>0
this.a=o
n=(this.b*1037+C.b.u(r-o,4294967296)&4294967295)>>>0
this.b=n
o=(o^q)>>>0
this.a=o
p=(n^s+((s<<31|t>>>1)>>>0)+p&4294967295)>>>0
this.b=p}while(a!==0)
if(p===0&&o===0)this.a=23063
this.N()
this.N()
this.N()
this.N()},
N:function(){var t,s,r,q,p,o
t=this.a
s=4294901760*t
r=(s&4294967295)>>>0
q=55905*t
p=(q&4294967295)>>>0
o=p+r+this.b
t=(o&4294967295)>>>0
this.a=t
this.b=(C.b.u(q-p+(s-r)+(o-t),4294967296)&4294967295)>>>0
H.b(!0)
H.b(this.b<4294967296)},
c2:function(a){var t,s,r
if(a<=0||a>4294967296)throw H.c(P.lr("max must be in range 0 < max \u2264 2^32, was "+a))
t=a-1
if((a&t)>>>0===0){this.N()
return(this.a&t)>>>0}do{this.N()
s=this.a
r=s%a}while(s-r+a>=4294967296)
return r},
aV:function(){this.N()
var t=this.a
this.N()
return((t&67108863)*134217728+(this.a&134217727))/9007199254740992}}
P.i8.prototype={}
P.fW.prototype={}
P.M.prototype={}
P.dY.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return this.T(a,b)},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
T:function(a,b){return a.getItem(b)},
$isk:1,
$ask:function(){return[P.i0]},
$asm:function(){return[P.i0]},
$isl:1,
$asl:function(){return[P.i0]},
$asn:function(){return[P.i0]}}
P.ek.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return this.T(a,b)},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
T:function(a,b){return a.getItem(b)},
$isk:1,
$ask:function(){return[P.i7]},
$asm:function(){return[P.i7]},
$isl:1,
$asl:function(){return[P.i7]},
$asn:function(){return[P.i7]}}
P.eu.prototype={
gi:function(a){return a.length}}
P.be.prototype={$isbe:1}
P.eW.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return this.T(a,b)},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
T:function(a,b){return a.getItem(b)},
$isk:1,
$ask:function(){return[P.o]},
$asm:function(){return[P.o]},
$isl:1,
$asl:function(){return[P.o]},
$asn:function(){return[P.o]}}
P.h.prototype={
I:function(a,b,c,d){var t,s,r,q,p,o
t=H.D([],[W.cc])
C.a.l(t,W.jF(null))
C.a.l(t,W.jJ())
C.a.l(t,new W.h5())
c=new W.d5(new W.cd(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.p).e8(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.K(q)
o=t.gV(t)
for(t=J.j(p);r=o.firstChild,r!=null;)t.K(p,r)
return p},
$ish:1}
P.f8.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return this.T(a,b)},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
T:function(a,b){return a.getItem(b)},
$isk:1,
$ask:function(){return[P.ic]},
$asm:function(){return[P.ic]},
$isl:1,
$asl:function(){return[P.ic]},
$asn:function(){return[P.ic]}}
P.cH.prototype={}
P.cI.prototype={}
P.cO.prototype={}
P.cP.prototype={}
P.cY.prototype={}
P.cZ.prototype={}
P.d3.prototype={}
P.d4.prototype={}
P.dn.prototype={
gi:function(a){return a.length}}
P.dp.prototype={
gi:function(a){return a.length}}
P.aE.prototype={}
P.el.prototype={
gi:function(a){return a.length}}
P.eB.prototype={
bC:function(a,b){return a.activeTexture(b)},
bF:function(a,b,c){return a.attachShader(b,c)},
bG:function(a,b,c){return a.bindBuffer(b,c)},
bH:function(a,b,c){return a.bindTexture(b,c)},
bI:function(a,b){return a.blendEquation(b)},
bJ:function(a,b,c){return a.blendFunc(b,c)},
bK:function(a,b,c,d){return a.bufferData(b,c,d)},
bL:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bM:function(a,b){return a.compileShader(b)},
bN:function(a){return a.createBuffer()},
bO:function(a){return a.createProgram()},
bQ:function(a,b){return a.createShader(b)},
bR:function(a){return a.createTexture()},
bT:function(a,b){return a.depthMask(b)},
bU:function(a,b){return a.disable(b)},
bV:function(a,b,c,d){return a.drawArrays(b,c,d)},
bW:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bX:function(a,b){return a.enable(b)},
bY:function(a,b){return a.enableVertexAttribArray(b)},
ay:function(a){return P.hf(a.getContextAttributes())},
b1:function(a){return a.getError()},
b2:function(a,b){return a.getProgramInfoLog(b)},
b3:function(a,b,c){return a.getProgramParameter(b,c)},
b4:function(a,b){return a.getShaderInfoLog(b)},
b5:function(a,b,c){return a.getShaderParameter(b,c)},
b6:function(a,b,c){return a.getUniformLocation(b,c)},
c_:function(a,b){return a.linkProgram(b)},
c3:function(a,b,c){return a.pixelStorei(b,c)},
b9:function(a,b,c){return a.shaderSource(b,c)},
ba:function(a,b,c,d){return a.stencilFunc(b,c,d)},
b_:function(a,b,c,d,e,f,g,h,i,j){this.aQ(a,b,c,d,e,f,g)
return},
c7:function(a,b,c,d,e,f,g){return this.b_(a,b,c,d,e,f,g,null,null,null)},
aQ:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
c8:function(a,b,c,d){return a.texParameterf(b,c,d)},
c9:function(a,b,c,d){return a.texParameteri(b,c,d)},
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
P.eC.prototype={
dW:function(a,b){return a.beginTransformFeedback(b)},
dX:function(a,b,c,d){return a.bindBufferBase(b,c,d)},
dZ:function(a,b,c){return a.bindTransformFeedback(b,c)},
e0:function(a,b){return a.bindVertexArray(b)},
e6:function(a,b,c,d,e,f){return a.copyBufferSubData(b,c,d,e,f)},
ea:function(a){return a.createTransformFeedback()},
eb:function(a){return a.createVertexArray()},
ei:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
ej:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
ek:function(a){return a.endTransformFeedback()},
eR:function(a,b,c,d){this.dP(a,b,c,d)
return},
dP:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
bC:function(a,b){return a.activeTexture(b)},
bF:function(a,b,c){return a.attachShader(b,c)},
bG:function(a,b,c){return a.bindBuffer(b,c)},
bH:function(a,b,c){return a.bindTexture(b,c)},
bI:function(a,b){return a.blendEquation(b)},
bJ:function(a,b,c){return a.blendFunc(b,c)},
bK:function(a,b,c,d){return a.bufferData(b,c,d)},
bL:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bM:function(a,b){return a.compileShader(b)},
bN:function(a){return a.createBuffer()},
bO:function(a){return a.createProgram()},
bQ:function(a,b){return a.createShader(b)},
bR:function(a){return a.createTexture()},
bT:function(a,b){return a.depthMask(b)},
bU:function(a,b){return a.disable(b)},
bV:function(a,b,c,d){return a.drawArrays(b,c,d)},
bW:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bX:function(a,b){return a.enable(b)},
bY:function(a,b){return a.enableVertexAttribArray(b)},
ay:function(a){return P.hf(a.getContextAttributes())},
b1:function(a){return a.getError()},
b2:function(a,b){return a.getProgramInfoLog(b)},
b3:function(a,b,c){return a.getProgramParameter(b,c)},
b4:function(a,b){return a.getShaderInfoLog(b)},
b5:function(a,b,c){return a.getShaderParameter(b,c)},
b6:function(a,b,c){return a.getUniformLocation(b,c)},
c_:function(a,b){return a.linkProgram(b)},
c3:function(a,b,c){return a.pixelStorei(b,c)},
b9:function(a,b,c){return a.shaderSource(b,c)},
ba:function(a,b,c,d){return a.stencilFunc(b,c,d)},
b_:function(a,b,c,d,e,f,g,h,i,j){this.aQ(a,b,c,d,e,f,g)
return},
c7:function(a,b,c,d,e,f,g){return this.b_(a,b,c,d,e,f,g,null,null,null)},
aQ:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
c8:function(a,b,c,d){return a.texParameterf(b,c,d)},
c9:function(a,b,c,d){return a.texParameteri(b,c,d)},
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
P.eM.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return P.hf(this.dB(a,b))},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
dB:function(a,b){return a.item(b)},
$isk:1,
$ask:function(){return[P.aK]},
$asm:function(){return[P.aK]},
$isl:1,
$asl:function(){return[P.aK]},
$asn:function(){return[P.aK]}}
P.cU.prototype={}
P.cV.prototype={}
B.hC.prototype={
$1:function(a){$.$get$hg().j(0,a.which,!0)},
$S:function(a){return{func:1,args:[W.ap]}}}
B.hD.prototype={
$1:function(a){$.$get$hg().j(0,a.which,null)},
$S:function(a){return{func:1,args:[W.ap]}}}
B.hE.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.lY=t
$.lZ=C.b.U(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.iz=s-C.b.u(window.innerWidth,2)
$.k_=-(t-C.b.u(window.innerHeight,2))},
$S:function(a){return{func:1,args:[W.F]}}}
B.hF.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.bD=t-C.b.u(window.innerWidth,2)
$.bE=-(s-C.b.u(window.innerHeight,2))
if(a.button===2)$.$get$bC().j(0,"right",!0)
else $.$get$bC().j(0,"left",!0)},
$S:function(a){return{func:1,args:[W.F]}}}
B.hG.prototype={
$1:function(a){if(a.button===2)$.$get$bC().j(0,"right",null)
else $.$get$bC().j(0,"left",null)},
$S:function(a){return{func:1,args:[W.F]}}}
B.em.prototype={
d1:function(a,b,c,d){var t
W.U(d,W.l5(d),new B.en(this),!1,W.ay)
W.U(d,"mousemove",new B.eo(this),!1,W.F)
t=W.av
W.U(d,"touchstart",new B.ep(),!1,t)
W.U(d,"touchmove",new B.eq(this),!1,t)
B.mm(null)}}
B.en.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.ae.gec(a)*r.k3
if(C.c.U(r.fy,t)>0)r.fy=C.c.U(r.fy,t)}catch(q){s=H.H(q)
P.R(s)}},
$S:function(a){return{func:1,args:[W.ay]}}}
B.eo.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=t.go+C.b.U($.iz,$.bD)*0.01
s=t.id
r=$.bE
q=$.k_
t.id=s+(r-q)*0.01
$.bD=$.iz
$.bE=q}},
$S:function(a){return{func:1,args:[W.F]}}}
B.ep.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.Z(t.clientX)
C.c.Z(t.clientY)
$.bD=s
C.c.Z(t.clientX)
$.bE=C.c.Z(t.clientY)},
$S:function(a){return{func:1,args:[W.av]}}}
B.eq.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.Z(t.clientX)
t=C.c.Z(t.clientY)
r=this.a
r.go=r.go+C.b.U(s,$.bD)*0.01
r.id=r.id+($.bE-t)*0.01
$.bD=s
$.bE=t},
$S:function(a){return{func:1,args:[W.av]}}}
G.ea.prototype={}
G.fc.prototype={
E:function(a,b){var t=this.d
if(H.aU(!t.F(0,a)))H.bA("uniform "+a+" already set")
t.j(0,a,b)},
be:function(){return this.d},
k:function(a){var t,s,r,q
t=H.D(["{"+new H.cu(H.m5(this),null).k(0)+"}["+this.a+"]"],[P.o])
for(s=this.d,r=s.gB(s),r=r.gv(r);r.m();){q=r.gn(r)
C.a.l(t,H.e(q)+": "+H.e(s.h(0,q)))}return C.a.au(t,"\n")}}
G.dq.prototype={}
G.ds.prototype={}
G.cr.prototype={}
G.cq.prototype={}
G.e5.prototype={
d0:function(a,b){this.E("cDepthTest",!0)
this.E("cDepthWrite",!1)
this.E("cBlendEquation",b)
this.E("cStencilFunc",$.$get$jo())}}
G.e7.prototype={
am:function(a){var t,s
this.ch=a
if(H.aU(!0))H.bA("wrong size for attribute: aPosition expected: "+(this.ch.length/3|0)+" got: "+(a.length/3|0))
this.cy.j(0,"aPosition",a)
t=this.d
s=this.r.h(0,"aPosition")
J.bF(t.a,34962,s)
J.ki(t.a,34962,a,35048)},
cX:function(){return this.ch.length/3|0},
aC:function(a){var t,s,r,q,p
t=this.r
s=this.d
t.j(0,"aPosition",J.km(s.a))
this.am(a)
r=$.$get$W().h(0,"aPosition")
if(r==null)throw H.c("Unknown canonical aPosition")
q=this.x
H.b(q.F(0,"aPosition"))
p=q.h(0,"aPosition")
J.iG(s.a,this.e)
J.kx(s.a,p)
t=t.h(0,"aPosition")
q=r.cY()
J.bF(s.a,34962,t)
J.kT(s.a,p,q,5126,!1,0,0)},
k:function(a){var t,s,r,q
t=["Faces:0"]
for(s=this.cy,r=s.gB(s),r=r.gv(r);r.m();){q=r.gn(r)
C.a.l(t,H.e(q)+":"+s.h(0,q).length)}return"MESH["+this.a+"] "+C.a.au(t,"  ")}}
G.er.prototype={
cV:function(a,b){var t=C.b.cs(a,b)
if(this.z===t)return
this.z=t
this.bh()},
bh:function(){var t,s,r,q,p,o,n
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
t.a2(0,0,1/(p*s))
t.a2(1,1,1/p)
t.a2(2,2,(q+r)/o)
t.a2(3,2,-1)
t.a2(2,3,2*r*q/o)},
be:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.u(new Float32Array(3))
o.ak(r,q,p)
p=this.d
p.j(0,"uEyePosition",o)
o=this.cy
o.w(t)
t=o.a
t[12]=0
t[13]=0
t[14]=0
t[15]=1
n=-s[12]
m=-s[13]
l=-s[14]
s=J.v(n)
r=!!s.$isaO
k=r?s.geX(n):1
if(!!s.$isu){j=s.geS(n)
m=s.geT(n)
l=s.geU(n)
n=j}else if(r){j=s.geS(n)
m=s.geT(n)
l=s.geU(n)
n=j}else if(!(typeof n==="number")){n=null
m=null
l=null}s=C.c.C(t[0],n)
r=C.c.C(t[4],m)
q=C.c.C(t[8],l)
i=t[12]
h=C.c.C(t[1],n)
g=C.c.C(t[5],m)
f=C.c.C(t[9],l)
e=t[13]
d=C.c.C(t[2],n)
c=C.c.C(t[6],m)
b=C.c.C(t[10],l)
a=t[14]
a0=C.c.C(t[3],n)
a1=C.c.C(t[7],m)
a2=C.c.C(t[11],l)
a3=t[15]
t[12]=s+r+q+i*k
t[13]=h+g+f+e*k
t[14]=d+c+b+a*k
t[15]=a0+a1+a2+a3*k
a3=this.cx
a3.w(this.db)
a3.eE(0,o)
p.j(0,"uPerspectiveViewMatrix",a3)
return p}}
G.eA.prototype={
d2:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.P)(t),++o){n=t[o]
r.j(0,n,J.iI(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.P)(t),++o){n=t[o]
r.j(0,n,J.iI(q.a,p,n))}},
d8:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gi(t)===s.gi(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gB(s),s=s.gv(s);s.m();){q=s.gn(s)
if(!t.F(0,q))C.a.l(r,q)}for(t=this.x,s=new P.bl(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.m();){q=s.d
if(!t.A(0,q))C.a.l(r,q)}return r},
dd:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gB(b),s=s.gv(s),r=this.d,q=this.y,p=this.z,o=0;s.m();){n=s.gn(s)
switch(J.kc(n,0)){case 117:if(q.F(0,n)){m=b.h(0,n)
if(p.F(0,n))H.iA("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.j(0,n,a)
l=$.$get$W().h(0,n)
if(l==null)H.E("unknown "+n)
H.b(q.F(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.hP(r.a,k,m)
else if(!!J.v(m).$isl7)J.kR(r.a,k,m)
break
case"float":if(l.c===0)J.kP(r.a,k,m)
else if(!!J.v(m).$ishV)J.kQ(r.a,k,m)
break
case"mat4":if(l.c===0){n=H.af(m,"$isT").a
J.iP(r.a,k,!1,n)}else if(!!J.v(m).$ishV)J.iP(r.a,k,!1,m)
else if(H.aU(!1))H.bA("bad unform: "+n)
break
case"mat3":if(l.c===0){n=C.A.gcN(H.af(m,"$ismq"))
J.iO(r.a,k,!1,n)}else if(!!J.v(m).$ishV)J.iO(r.a,k,!1,m)
else if(H.aU(!1))H.bA("bad unform: "+n)
break
case"vec4":n=l.c
j=r.a
if(n===0)J.iN(j,k,H.af(m,"$isaO").a)
else J.iN(j,k,m)
break
case"vec3":n=l.c
j=r.a
if(n===0)J.iM(j,k,H.af(m,"$isu").a)
else J.iM(j,k,m)
break
case"vec2":if(l.c===0){n=C.A.gcN(H.af(m,"$ismr"))
J.iL(r.a,k,n)}else J.iL(r.a,k,m)
break
case"sampler2D":case"sampler2DShadow":n=C.b.S(33984,this.ch)
J.iD(r.a,n)
n=H.af(m,"$isbh").b
J.bG(r.a,3553,n)
n=this.ch
J.hP(r.a,k,n)
this.ch=this.ch+1
break
case"samplerCube":H.b(n==="uCubeTexture")
n=C.b.S(33984,this.ch)
J.iD(r.a,n)
n=H.af(m,"$isbh").b
J.bG(r.a,34067,n)
n=this.ch
J.hP(r.a,k,n)
this.ch=this.ch+1
break
default:H.iA("Error: unknow uniform type: "+j)
H.b(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":n=J.A(m,!0)
j=r.a
if(n)J.di(j,2929)
else J.hN(j,2929)
break
case"cStencilFunc":H.af(m,"$iscr")
n=m.a
j=r.a
if(n===1281)J.hN(j,2960)
else{J.di(j,2960)
j=m.b
i=m.c
J.kK(r.a,n,j,i)}break
case"cDepthWrite":J.kr(r.a,m)
break
case"cBlendEquation":H.af(m,"$iscq")
n=m.a
j=r.a
if(n===1281)J.hN(j,3042)
else{J.di(j,3042)
j=m.b
i=m.c
J.kh(r.a,j,i)
J.kg(r.a,n)}break}++o
break}}h=P.l3(0,0,0,Date.now()-new P.b1(t,!1).a,0,0)
""+o
h.k(0)},
cW:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
Date.now()
t=this.d
J.kS(t.a,this.r)
this.ch=0
this.z.P(0)
for(s=0;s<2;++s){r=b[s]
this.dd(r.a,r.be())}q=this.Q
q.P(0)
for(p=a.cy,p=p.gB(p),p=p.gv(p);p.m();)q.l(0,p.gn(p))
o=this.d8()
if(o.length!==0)P.R("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(o)))
J.iG(a.d.a,a.e)
n=this.e.f.length>0
q=a.f
p=a.cX()
m=a.Q
l=a.z
if(n)J.ke(t.a,q)
if(m!==-1){k=t.a
if(l>1)J.kv(k,q,p,m,0,l)
else J.ku(k,q,p,m,0)}else{m=t.a
if(l>1)J.kt(m,q,0,p,l)
else J.ks(m,q,0,p)}if(n)J.ky(t.a)},
bd:function(a,b){return this.cW(a,b,null)}}
G.w.prototype={
cY:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.b(!1)
return-1}}}
G.eH.prototype={
bc:function(a){var t,s,r,q
H.b(this.b==null)
for(t=this.c,s=this.x,r=0;r<1;++r){q=a[r]
H.b($.$get$W().F(0,q))
H.b(!C.a.A(t,q))
C.a.l(t,q)
s.j(0,q,this.r);++this.r}C.a.aA(t)},
al:function(a){var t,s,r,q
H.b(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.P)(a),++r){q=a[r]
if(H.aU($.$get$W().F(0,q)))H.bA("missing uniform "+q)
H.b(!C.a.A(s,q))
C.a.l(s,q)}C.a.aA(s)},
cU:function(a){var t,s,r
H.b(this.b==null)
for(t=this.f,s=0;s<1;++s){r=a[s]
H.b($.$get$W().F(0,r))
H.b(!C.a.A(t,r))
C.a.l(t,r)}C.a.aA(t)},
d4:function(a,b){H.b(this.b==null)
this.b=this.bi(!0,a,b)},
bg:function(a){return this.d4(a,null)},
d3:function(a,b){H.b(this.b==null)
this.b=this.bi(!1,a,b)},
bf:function(a){return this.d3(a,null)},
bi:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.b(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.P)(t),++o){n=t[o]
m=$.$get$W().h(0,n)
C.a.l(q,"layout (location="+H.e(p.h(0,n))+") in "+m.a+" "+H.e(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,o=0;!1;++o){k=t[o]
m=$.$get$W().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.e(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.P)(t),++o){k=t[o]
m=$.$get$W().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.e(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.P)(t),++o){k=t[o]
m=$.$get$W().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.e(k)+j+";")}C.a.l(q,"")
if(a)C.a.l(q,"void main(void) {")
C.a.H(q,b)
if(a)C.a.l(q,"}")
return C.a.au(q,"\n")}}
G.eK.prototype={}
G.f1.prototype={}
G.bh.prototype={
k:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.dP.prototype={
cZ:function(a,b,c,d,e){var t,s,r,q
t=this.d
s=this.c
J.bG(t.a,s,this.b)
J.kI(t.a,37440,1)
this.d5(this.f)
r=this.e
q=r.e
if(q!==1)J.kM(t.a,s,34046,q)
J.iK(t.a,s,10240,r.r)
J.iK(t.a,s,10241,r.f)
H.b(J.kD(t.a)===0)
J.bG(t.a,s,null)},
d5:function(a){var t,s
t=this.d
s=this.c
J.bG(t.a,s,this.b)
J.kL(t.a,s,0,6408,6408,5121,a)}}
R.eO.prototype={
d6:function(a,b,c){var t,s,r
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
J.hL(this.a,s)
r=this.dh(b,c,90,30)
this.d=r
J.hL(this.a,r)
t=t.createElement("div")
this.c=t
J.hL(this.a,t)},
dh:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.lF("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.x).bn(r,"float")
r.setProperty(p,"left","")
p=C.x.bn(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.r.K(t,s)}return t}}
R.eP.prototype={
dc:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.z.eQ(s,2)+" fps"
t=this.c;(t&&C.r).cI(t,b)
r=C.b.u(30*C.z.e1(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.r).K(t,q)},
da:function(a){return this.dc(a,"")}}
A.hl.prototype={
$2:function(a,b){var t=536870911&a+J.aY(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(a,b){return{func:1,args:[P.x,P.B]}}}
T.T.prototype={
a2:function(a,b,c){H.b(a<4)
H.b(b<4)
this.a[b*4+a]=c},
w:function(a){var t,s
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
k:function(a){return"[0] "+this.ai(0).k(0)+"\n[1] "+this.ai(1).k(0)+"\n[2] "+this.ai(2).k(0)+"\n[3] "+this.ai(3).k(0)+"\n"},
h:function(a,b){return this.a[b]},
t:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.T){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gq:function(a){return A.iu(this.a)},
ai:function(a){var t,s
t=new Float32Array(4)
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.aO(t)},
a3:function(){var t=this.a
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
eE:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.u.prototype={
ak:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
w:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
k:function(a){var t=this.a
return"["+H.e(t[0])+","+H.e(t[1])+","+H.e(t[2])+"]"},
t:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.u){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gq:function(a){return A.iu(this.a)},
U:function(a,b){var t,s,r
t=new Float32Array(3)
s=new T.u(t)
s.w(this)
r=b.a
t[0]=t[0]-r[0]
t[1]=t[1]-r[1]
t[2]=t[2]-r[2]
return s},
S:function(a,b){var t=new T.u(new Float32Array(3))
t.w(this)
t.l(0,b)
return t},
h:function(a,b){return this.a[b]},
gi:function(a){return Math.sqrt(this.gae())},
gae:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
aw:function(a){var t,s,r
t=Math.sqrt(this.gae())
if(t===0)return 0
s=1/t
r=this.a
r[0]=r[0]*s
r[1]=r[1]*s
r[2]=r[2]*s
return t},
aT:function(a){var t,s
t=a.a
s=this.a
return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]},
bS:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.u(new Float32Array(3))
t.ak(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
l:function(a,b){var t,s
t=b.a
s=this.a
s[0]=s[0]+t[0]
s[1]=s[1]+t[1]
s[2]=s[2]+t[2]},
a1:function(a,b){var t=this.a
t[2]=t[2]*b
t[1]=t[1]*b
t[0]=t[0]*b},
cw:function(a){var t=new T.u(new Float32Array(3))
t.w(this)
t.a1(0,a)
return t}}
T.aO.prototype={
k:function(a){var t=this.a
return H.e(t[0])+","+H.e(t[1])+","+H.e(t[2])+","+H.e(t[3])},
t:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aO){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gq:function(a){return A.iu(this.a)},
h:function(a,b){return this.a[b]},
gi:function(a){var t,s,r,q
t=this.a
s=t[0]
r=t[1]
q=t[2]
t=t[3]
return Math.sqrt(s*s+r*r+q*q+t*t)}}
Z.ev.prototype={
k:function(a){var t=this.a.a
return"POLE: "+(H.e(t[0])+" "+H.e(t[1])+" "+H.e(t[2]))}}
Z.bY.prototype={
d9:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j
t=new T.u(new Float32Array(3))
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.P)(a),++r){q=a[r]
p=this.a
o=q.a
n=new Float32Array(3)
m=new T.u(n)
m.w(p)
l=o.a
n[0]=n[0]-l[0]
n[1]=n[1]-l[1]
n[2]=n[2]-l[2]
k=Math.sqrt(m.gae())
if(k<=0.2)continue
if(k>100.1){s=a[c.c2(a.length)].a
p=Z.ex(c,0.35)
o=new T.u(new Float32Array(3))
o.w(s)
o.l(0,p)
this.a=o
return}p=new T.u(new Float32Array(3))
p.w(m)
p.a1(0,1/(k*k))
j=new T.u(new Float32Array(3))
j.w(t)
j.l(0,p)
t=j}for(s=b.length,r=0;r<b.length;b.length===s||(0,H.P)(b),++r,t=j){p=b[r].a
o=this.a
n=new Float32Array(3)
m=new T.u(n)
m.w(p)
l=o.a
n[0]=n[0]-l[0]
n[1]=n[1]-l[1]
n[2]=n[2]-l[2]
k=Math.sqrt(m.gae())
if(k<=0.2){s=a[c.c2(a.length)].a
p=Z.ex(c,0.35)
o=new T.u(new Float32Array(3))
o.w(s)
o.l(0,p)
this.a=o
return}p=new T.u(new Float32Array(3))
p.w(m)
p.a1(0,1/(k*k))
j=new T.u(new Float32Array(3))
j.w(t)
j.l(0,p)}s=this.a
p=new T.u(new Float32Array(3))
p.w(t)
p.aw(0)
this.a=s.S(0,p.cw(d))},
k:function(a){var t=this.a.a
return"ION: "+(H.e(t[0])+" "+H.e(t[1])+" "+H.e(t[2]))}}
Z.hx.prototype={
$1:function(a){var t,s,r,q,p,o,n,m
t=H.lq($.$get$is().value,null,null)
P.R("resize to "+H.e(t)+" ions")
s=this.b
C.a.si(s,0)
for(r=this.c,q=0;C.b.aj(q,t);++q){p=Z.ex(r,10010)
o=new Z.bY(null)
n=new T.u(new Float32Array(3))
n.w(p)
o.a=n
C.a.l(s,o)}r=C.b.C(3,t)
m=new Float32Array(r)
r=this.a
r.a=m
Z.hU(s,m)
s=this.d
J.bF(s.a,34962,null)
p=this.e
J.iF(s.a,35982,p,null)
n=this.f
n.am(r.a)
this.r.am(r.a)
n=n.r.h(0,"aPosition")
J.iF(s.a,35982,p,n)},
$S:function(a){return{func:1,v:true,args:[W.f]}}}
Z.hy.prototype={
$1:function(a){var t,s,r,q,p,o
for(t=this.b,s=t.length,r=this.c,q=this.d,p=this.e,o=0;o<t.length;t.length===s||(0,H.P)(t),++o)t[o].d9(r,q,p,a)
s=this.a
Z.hU(t,s.a)
this.f.am(s.a)},
$S:function(a){return{func:1,v:true,args:[P.a8]}}}
Z.hz.prototype={
$1:function(b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
t=this.a
t.go+=0.002
s=t.k4
if(s.h(0,37)!=null)t.go+=0.03
else if(s.h(0,39)!=null)t.go-=0.03
if(s.h(0,38)!=null)t.id+=0.03
else if(s.h(0,40)!=null)t.id-=0.03
if(s.h(0,33)!=null)t.fy*=0.99
else if(s.h(0,34)!=null)t.fy*=1.01
if(s.h(0,32)!=null){t.go=0
t.id=0}s=C.c.e2(t.id,-1.4707963267948965,1.4707963267948965)
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
m=n[12]
l=n[13]
k=n[14]
j=new T.u(new Float32Array(3))
j.ak(0,1,0)
s=t.e
r=s.a
r[0]=n[12]
r[1]=n[13]
r[2]=n[14]
i=s.U(0,q)
i.aw(0)
h=j.bS(i)
h.aw(0)
g=i.bS(h)
g.aw(0)
q=h.aT(s)
r=g.aT(s)
s=i.aT(s)
o=h.a
f=o[0]
e=g.a
d=e[0]
c=i.a
b=c[0]
a=o[1]
a0=e[1]
a1=c[1]
o=o[2]
e=e[2]
c=c[2]
n[15]=1
n[14]=-s
n[13]=-r
n[12]=-q
n[11]=0
n[10]=c
n[9]=e
n[8]=o
n[7]=0
n[6]=a1
n[5]=a0
n[4]=a
n[3]=0
n[2]=b
n[1]=d
n[0]=f
n[12]=m
n[13]=l
n[14]=k
f=t.f
d=f.a
d[0]=n[2]
d[1]=n[6]
d[2]=n[10]
t=-t.k1
a2=Math.sqrt(f.gae())
m=d[0]/a2
l=d[1]/a2
k=d[2]/a2
a3=Math.cos(t)
a4=Math.sin(t)
a5=1-a3
a6=m*m*a5+a3
t=k*a4
a7=m*l*a5-t
d=l*a4
a8=m*k*a5+d
a9=l*m*a5+t
b0=l*l*a5+a3
t=m*a4
b1=l*k*a5-t
b2=k*m*a5-d
b3=k*l*a5+t
b4=k*k*a5+a3
t=n[0]
d=n[4]
f=n[8]
b=n[1]
a=n[5]
a0=n[9]
a1=n[2]
o=n[6]
e=n[10]
c=n[3]
q=n[7]
r=n[11]
n[0]=t*a6+d*a9+f*b2
n[1]=b*a6+a*a9+a0*b2
n[2]=a1*a6+o*a9+e*b2
n[3]=c*a6+q*a9+r*b2
n[4]=t*a7+d*b0+f*b3
n[5]=b*a7+a*b0+a0*b3
n[6]=a1*a7+o*b0+e*b3
n[7]=c*a7+q*b0+r*b3
n[8]=t*a8+d*b1+f*b4
n[9]=b*a8+a*b1+a0*b4
n[10]=a1*a8+o*b1+e*b4
n[11]=c*a8+q*b1+r*b4
t=this.e
if($.$get$jU().checked){this.b.$1(0.06)
this.c.bd(this.d,[t,this.f])}else{s=this.x
this.r.bd(s,[t,this.y])
t=this.z
s=s.r.h(0,"aPosition")
J.bF(t.a,34962,s)
s=this.Q.r.h(0,"aPosition")
J.bF(t.a,35982,s)
s=this.ch.length
J.kl(t.a,35982,34962,0,0,s*3*4)}C.af.gdU(window).ca(this)
this.cx.da(b5+0)},
$S:function(a){return{func:1,v:true,args:[P.a9]}}}
J.a.prototype.cP=J.a.prototype.k
J.b6.prototype.cR=J.b6.prototype.k
P.L.prototype.cQ=P.L.prototype.ax
W.S.prototype.aB=W.S.prototype.I
W.br.prototype.cS=W.br.prototype.O;(function installTearOffs(){installTearOff(H.aP.prototype,"geA",0,0,0,null,["$0"],["av"],0)
installTearOff(H.V.prototype,"gcA",0,0,0,null,["$1"],["G"],2)
installTearOff(H.az.prototype,"gee",0,0,0,null,["$1"],["R"],2)
installTearOff(P,"lU",1,0,0,null,["$1"],["lC"],1)
installTearOff(P,"lV",1,0,0,null,["$1"],["lD"],1)
installTearOff(P,"lW",1,0,0,null,["$1"],["lE"],1)
installTearOff(P,"jS",1,0,0,null,["$0"],["lS"],0)
installTearOff(P.a6.prototype,"gdq",0,0,0,null,["$2","$1"],["an","dr"],5)
installTearOff(P,"m0",1,0,0,null,["$2"],["l_"],6)
installTearOff(W,"m7",1,0,0,null,["$4"],["lH"],4)
installTearOff(W,"m8",1,0,0,null,["$4"],["lI"],4)
installTearOff(W.cb.prototype,"gaW",0,1,0,null,["$0"],["aX"],3)
installTearOff(W.ct.prototype,"gaW",0,1,0,null,["$0"],["aX"],3)
installTearOff(Z,"k9",1,0,0,null,["$0"],["mg"],0)})();(function inheritance(){inherit(P.B,null)
var t=P.B
inherit(H.hY,t)
inherit(J.a,t)
inherit(J.dm,t)
inherit(P.L,t)
inherit(H.c3,t)
inherit(P.bZ,t)
inherit(H.aH,t)
inherit(H.aj,t)
inherit(H.fT,t)
inherit(H.aP,t)
inherit(H.fw,t)
inherit(H.aA,t)
inherit(H.fS,t)
inherit(H.fr,t)
inherit(H.cg,t)
inherit(H.f3,t)
inherit(H.ah,t)
inherit(H.V,t)
inherit(H.az,t)
inherit(H.ez,t)
inherit(H.f9,t)
inherit(P.aG,t)
inherit(H.cW,t)
inherit(H.cu,t)
inherit(P.aL,t)
inherit(H.dZ,t)
inherit(H.e0,t)
inherit(P.hR,t)
inherit(P.fs,t)
inherit(P.cE,t)
inherit(P.a6,t)
inherit(P.cw,t)
inherit(P.eS,t)
inherit(P.eT,t)
inherit(P.ia,t)
inherit(P.aD,t)
inherit(P.ha,t)
inherit(P.eG,t)
inherit(P.fP,t)
inherit(P.bl,t)
inherit(P.i1,t)
inherit(P.bm,t)
inherit(P.m,t)
inherit(P.fR,t)
inherit(P.ac,t)
inherit(P.C,t)
inherit(P.b1,t)
inherit(P.a9,t)
inherit(P.ak,t)
inherit(P.cl,t)
inherit(P.hT,t)
inherit(P.fB,t)
inherit(P.dL,t)
inherit(P.dH,t)
inherit(P.l,t)
inherit(P.aK,t)
inherit(P.I,t)
inherit(P.aM,t)
inherit(P.o,t)
inherit(P.bf,t)
inherit(W.dv,t)
inherit(W.bk,t)
inherit(W.n,t)
inherit(W.cd,t)
inherit(W.br,t)
inherit(W.h5,t)
inherit(W.bU,t)
inherit(W.cc,t)
inherit(W.i6,t)
inherit(W.id,t)
inherit(W.h0,t)
inherit(W.d5,t)
inherit(P.fV,t)
inherit(P.i8,t)
inherit(P.fW,t)
inherit(G.ea,t)
inherit(G.ds,t)
inherit(G.cr,t)
inherit(G.cq,t)
inherit(G.w,t)
inherit(G.eH,t)
inherit(G.f1,t)
inherit(G.bh,t)
inherit(R.eO,t)
inherit(T.T,t)
inherit(T.u,t)
inherit(T.aO,t)
inherit(Z.ev,t)
inherit(Z.bY,t)
t=J.a
inherit(J.dV,t)
inherit(J.c1,t)
inherit(J.b6,t)
inherit(J.al,t)
inherit(J.aI,t)
inherit(J.an,t)
inherit(H.b9,t)
inherit(H.as,t)
inherit(W.d,t)
inherit(W.dj,t)
inherit(W.bJ,t)
inherit(W.bK,t)
inherit(W.a_,t)
inherit(W.cx,t)
inherit(W.Q,t)
inherit(W.dz,t)
inherit(W.dA,t)
inherit(W.bO,t)
inherit(W.cy,t)
inherit(W.bQ,t)
inherit(W.cA,t)
inherit(W.dC,t)
inherit(W.f,t)
inherit(W.cC,t)
inherit(W.dN,t)
inherit(W.cF,t)
inherit(W.e2,t)
inherit(W.e6,t)
inherit(W.cJ,t)
inherit(W.cb,t)
inherit(W.cM,t)
inherit(W.a2,t)
inherit(W.cQ,t)
inherit(W.cf,t)
inherit(W.cS,t)
inherit(W.a3,t)
inherit(W.cX,t)
inherit(W.d_,t)
inherit(W.f2,t)
inherit(W.d1,t)
inherit(W.f7,t)
inherit(W.ct,t)
inherit(W.fg,t)
inherit(W.d6,t)
inherit(W.d8,t)
inherit(W.da,t)
inherit(W.dc,t)
inherit(W.de,t)
inherit(P.cH,t)
inherit(P.cO,t)
inherit(P.eu,t)
inherit(P.cY,t)
inherit(P.d3,t)
inherit(P.dn,t)
inherit(P.eB,t)
inherit(P.eC,t)
inherit(P.cU,t)
t=J.b6
inherit(J.es,t)
inherit(J.ax,t)
inherit(J.ao,t)
inherit(J.hX,J.al)
t=J.aI
inherit(J.c0,t)
inherit(J.c_,t)
t=P.L
inherit(H.k,t)
inherit(H.c5,t)
inherit(H.cv,t)
t=H.k
inherit(H.aJ,t)
inherit(H.e_,t)
inherit(H.dF,H.c5)
t=P.bZ
inherit(H.e4,t)
inherit(H.fj,t)
t=H.aJ
inherit(H.b7,t)
inherit(P.e1,t)
t=H.aj
inherit(H.hH,t)
inherit(H.hI,t)
inherit(H.fN,t)
inherit(H.fx,t)
inherit(H.dR,t)
inherit(H.dS,t)
inherit(H.fU,t)
inherit(H.f4,t)
inherit(H.f5,t)
inherit(H.hJ,t)
inherit(H.hq,t)
inherit(H.hr,t)
inherit(H.hs,t)
inherit(H.ht,t)
inherit(H.hu,t)
inherit(H.eZ,t)
inherit(H.dW,t)
inherit(H.hm,t)
inherit(H.hn,t)
inherit(H.ho,t)
inherit(P.fn,t)
inherit(P.fm,t)
inherit(P.fo,t)
inherit(P.fp,t)
inherit(P.fC,t)
inherit(P.fG,t)
inherit(P.fD,t)
inherit(P.fE,t)
inherit(P.fF,t)
inherit(P.fJ,t)
inherit(P.fK,t)
inherit(P.fI,t)
inherit(P.fH,t)
inherit(P.eU,t)
inherit(P.eV,t)
inherit(P.hc,t)
inherit(P.fZ,t)
inherit(P.fY,t)
inherit(P.h_,t)
inherit(P.e3,t)
inherit(P.dD,t)
inherit(P.dE,t)
inherit(W.dG,t)
inherit(W.eR,t)
inherit(W.fk,t)
inherit(W.fA,t)
inherit(W.ei,t)
inherit(W.eh,t)
inherit(W.h1,t)
inherit(W.h2,t)
inherit(W.h8,t)
inherit(W.h9,t)
inherit(P.he,t)
inherit(B.hC,t)
inherit(B.hD,t)
inherit(B.hE,t)
inherit(B.hF,t)
inherit(B.hG,t)
inherit(B.en,t)
inherit(B.eo,t)
inherit(B.ep,t)
inherit(B.eq,t)
inherit(A.hl,t)
inherit(Z.hx,t)
inherit(Z.hy,t)
inherit(Z.hz,t)
t=H.fr
inherit(H.aR,t)
inherit(H.bw,t)
t=P.aG
inherit(H.ej,t)
inherit(H.dX,t)
inherit(H.fe,t)
inherit(H.fb,t)
inherit(H.dr,t)
inherit(H.eD,t)
inherit(P.bH,t)
inherit(P.ce,t)
inherit(P.Z,t)
inherit(P.ff,t)
inherit(P.fd,t)
inherit(P.aN,t)
inherit(P.dt,t)
inherit(P.dy,t)
t=H.eZ
inherit(H.eN,t)
inherit(H.b0,t)
inherit(H.fl,P.bH)
inherit(P.c4,P.aL)
t=P.c4
inherit(H.a0,t)
inherit(W.fq,t)
inherit(H.c8,H.as)
t=H.c8
inherit(H.bn,t)
inherit(H.bp,t)
inherit(H.bo,H.bn)
inherit(H.ba,H.bo)
inherit(H.bq,H.bp)
inherit(H.c9,H.bq)
inherit(H.c7,H.ba)
t=H.c9
inherit(H.eb,t)
inherit(H.ec,t)
inherit(H.ed,t)
inherit(H.ee,t)
inherit(H.ef,t)
inherit(H.ca,t)
inherit(H.eg,t)
inherit(P.h6,P.fs)
inherit(P.fX,P.ha)
inherit(P.fQ,H.a0)
inherit(P.eF,P.eG)
inherit(P.fM,P.eF)
inherit(P.fO,P.fM)
inherit(P.c2,P.bm)
t=P.a9
inherit(P.a8,t)
inherit(P.x,t)
t=P.Z
inherit(P.bd,t)
inherit(P.dQ,t)
t=W.d
inherit(W.q,t)
inherit(W.dJ,t)
inherit(W.b5,t)
inherit(W.b8,t)
inherit(W.ew,t)
inherit(W.ch,t)
inherit(W.bs,t)
inherit(W.bu,t)
inherit(W.fh,t)
inherit(W.fi,t)
inherit(W.bi,t)
inherit(W.ie,t)
inherit(P.dp,t)
inherit(P.aE,t)
t=W.q
inherit(W.S,t)
inherit(W.ai,t)
inherit(W.b2,t)
t=W.S
inherit(W.i,t)
inherit(P.h,t)
t=W.i
inherit(W.dk,t)
inherit(W.dl,t)
inherit(W.ag,t)
inherit(W.bI,t)
inherit(W.bN,t)
inherit(W.dK,t)
inherit(W.bW,t)
inherit(W.eE,t)
inherit(W.cn,t)
inherit(W.eX,t)
inherit(W.eY,t)
inherit(W.bg,t)
inherit(W.du,W.a_)
inherit(W.aF,W.cx)
t=W.Q
inherit(W.dw,t)
inherit(W.dx,t)
inherit(W.cz,W.cy)
inherit(W.bP,W.cz)
inherit(W.cB,W.cA)
inherit(W.dB,W.cB)
inherit(W.cD,W.cC)
inherit(W.dI,W.cD)
inherit(W.cG,W.cF)
inherit(W.b4,W.cG)
inherit(W.bX,W.b2)
inherit(W.dO,W.b5)
inherit(W.aw,W.f)
t=W.aw
inherit(W.ap,t)
inherit(W.F,t)
inherit(W.av,t)
inherit(W.e8,W.b8)
inherit(W.cK,W.cJ)
inherit(W.e9,W.cK)
inherit(W.K,P.c2)
inherit(W.cN,W.cM)
inherit(W.bb,W.cN)
inherit(W.cR,W.cQ)
inherit(W.et,W.cR)
inherit(W.bt,W.bs)
inherit(W.eJ,W.bt)
inherit(W.cT,W.cS)
inherit(W.eL,W.cT)
inherit(W.eQ,W.cX)
inherit(W.d0,W.d_)
inherit(W.f_,W.d0)
inherit(W.bv,W.bu)
inherit(W.f0,W.bv)
inherit(W.d2,W.d1)
inherit(W.f6,W.d2)
inherit(W.ay,W.F)
inherit(W.d7,W.d6)
inherit(W.ft,W.d7)
inherit(W.fu,W.bQ)
inherit(W.d9,W.d8)
inherit(W.fL,W.d9)
inherit(W.db,W.da)
inherit(W.cL,W.db)
inherit(W.dd,W.dc)
inherit(W.h3,W.dd)
inherit(W.df,W.de)
inherit(W.h4,W.df)
inherit(W.fv,W.fq)
inherit(W.fy,P.eS)
inherit(W.ii,W.fy)
inherit(W.fz,P.eT)
inherit(W.h7,W.br)
inherit(P.M,P.fW)
inherit(P.cI,P.cH)
inherit(P.dY,P.cI)
inherit(P.cP,P.cO)
inherit(P.ek,P.cP)
inherit(P.be,P.h)
inherit(P.cZ,P.cY)
inherit(P.eW,P.cZ)
inherit(P.d4,P.d3)
inherit(P.f8,P.d4)
inherit(P.el,P.aE)
inherit(P.cV,P.cU)
inherit(P.eM,P.cV)
t=G.ea
inherit(G.eK,t)
inherit(G.fc,t)
inherit(G.e7,t)
inherit(G.eA,t)
inherit(G.dq,G.eK)
inherit(B.em,G.dq)
t=G.fc
inherit(G.e5,t)
inherit(G.er,t)
inherit(G.dP,G.bh)
inherit(R.eP,R.eO)
mixin(H.bn,P.m)
mixin(H.bo,H.aH)
mixin(H.bp,P.m)
mixin(H.bq,H.aH)
mixin(P.bm,P.m)
mixin(W.cx,W.dv)
mixin(W.cy,P.m)
mixin(W.cz,W.n)
mixin(W.cA,P.m)
mixin(W.cB,W.n)
mixin(W.cC,P.m)
mixin(W.cD,W.n)
mixin(W.cF,P.m)
mixin(W.cG,W.n)
mixin(W.cJ,P.m)
mixin(W.cK,W.n)
mixin(W.cM,P.m)
mixin(W.cN,W.n)
mixin(W.cQ,P.m)
mixin(W.cR,W.n)
mixin(W.bs,P.m)
mixin(W.bt,W.n)
mixin(W.cS,P.m)
mixin(W.cT,W.n)
mixin(W.cX,P.aL)
mixin(W.d_,P.m)
mixin(W.d0,W.n)
mixin(W.bu,P.m)
mixin(W.bv,W.n)
mixin(W.d1,P.m)
mixin(W.d2,W.n)
mixin(W.d6,P.m)
mixin(W.d7,W.n)
mixin(W.d8,P.m)
mixin(W.d9,W.n)
mixin(W.da,P.m)
mixin(W.db,W.n)
mixin(W.dc,P.m)
mixin(W.dd,W.n)
mixin(W.de,P.m)
mixin(W.df,W.n)
mixin(P.cH,P.m)
mixin(P.cI,W.n)
mixin(P.cO,P.m)
mixin(P.cP,W.n)
mixin(P.cY,P.m)
mixin(P.cZ,W.n)
mixin(P.d3,P.m)
mixin(P.d4,W.n)
mixin(P.cU,P.m)
mixin(P.cV,W.n)})();(function constants(){C.p=W.ag.prototype
C.w=W.bI.prototype
C.n=W.bJ.prototype
C.q=W.bK.prototype
C.x=W.aF.prototype
C.r=W.bN.prototype
C.L=W.bO.prototype
C.M=W.bW.prototype
C.i=W.bX.prototype
C.N=J.a.prototype
C.a=J.al.prototype
C.z=J.c_.prototype
C.b=J.c0.prototype
C.A=J.c1.prototype
C.c=J.aI.prototype
C.j=J.an.prototype
C.U=J.ao.prototype
C.Y=H.c7.prototype
C.D=W.bb.prototype
C.E=J.es.prototype
C.F=W.cf.prototype
C.K=W.cn.prototype
C.v=J.ax.prototype
C.ae=W.ay.prototype
C.af=W.bi.prototype
C.f=new P.fX()
C.y=new P.ak(0)
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
C.B=function(hooks) { return hooks; }

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
C.C=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.V=H.D(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.o])
C.W=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.X=makeConstList([])
C.t=H.D(makeConstList(["bind","if","ref","repeat","syntax"]),[P.o])
C.u=H.D(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.o])
C.Z=new G.w("vec3","vertex btangents",0)
C.d=new G.w("vec3","",0)
C.a_=new G.w("vec4","delta from light",0)
C.o=new G.w("","",0)
C.G=new G.w("vec3","vertex coordinates",0)
C.a0=new G.w("vec3","vertex binormals",0)
C.H=new G.w("vec4","for wireframe",0)
C.a1=new G.w("vec4","per vertex color",0)
C.a2=new G.w("float","for normal maps",0)
C.k=new G.w("mat4","",0)
C.a4=new G.w("mat4","",4)
C.a3=new G.w("mat4","",128)
C.e=new G.w("float","",0)
C.a5=new G.w("float","",4)
C.a6=new G.w("float","depth for shadowmaps",0)
C.h=new G.w("sampler2D","",0)
C.a7=new G.w("float","for bump maps",0)
C.a8=new G.w("vec2","texture uvs",0)
C.a9=new G.w("float","time since program start in sec",0)
C.l=new G.w("vec2","",0)
C.aa=new G.w("samplerCube","",0)
C.m=new G.w("vec4","",0)
C.ab=new G.w("vec3","vertex normals",0)
C.ac=new G.w("sampler2DShadow","",0)
C.I=new G.w("vec3","per vertex color",0)
C.J=new G.w("mat3","",0)
C.ad=new G.w("vec3","vertex tangents",0)})();(function staticFields(){$.jk="$cachedFunction"
$.jl="$cachedInvocation"
$.iW=null
$.iU=null
$.il=!1
$.it=null
$.jP=null
$.k5=null
$.hh=null
$.hp=null
$.iv=null
$.aS=null
$.bx=null
$.by=null
$.im=!1
$.z=C.f
$.j6=0
$.ab=null
$.hS=null
$.j5=null
$.j4=null
$.j2=null
$.j1=null
$.j0=null
$.j_=null
$.lY=0
$.lZ=0
$.iz=0
$.k_=0
$.bD=0
$.bE=0
$.mn=!1
$.m3=0})();(function lazyInitializers(){lazy($,"iZ","$get$iZ",function(){return H.jX("_$dart_dartClosure")})
lazy($,"hZ","$get$hZ",function(){return H.jX("_$dart_js")})
lazy($,"ja","$get$ja",function(){return H.lc()})
lazy($,"jb","$get$jb",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.j6
$.j6=t+1
t="expando$key$"+t}return new P.dH(t,null,[P.x])})
lazy($,"jq","$get$jq",function(){return H.a4(H.fa({
toString:function(){return"$receiver$"}}))})
lazy($,"jr","$get$jr",function(){return H.a4(H.fa({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"js","$get$js",function(){return H.a4(H.fa(null))})
lazy($,"jt","$get$jt",function(){return H.a4(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"jx","$get$jx",function(){return H.a4(H.fa(void 0))})
lazy($,"jy","$get$jy",function(){return H.a4(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"jv","$get$jv",function(){return H.a4(H.jw(null))})
lazy($,"ju","$get$ju",function(){return H.a4(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"jA","$get$jA",function(){return H.a4(H.jw(void 0))})
lazy($,"jz","$get$jz",function(){return H.a4(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"ih","$get$ih",function(){return P.lB()})
lazy($,"bz","$get$bz",function(){return[]})
lazy($,"iY","$get$iY",function(){return{}})
lazy($,"jG","$get$jG",function(){return P.i2(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"ij","$get$ij",function(){return P.a1()})
lazy($,"hg","$get$hg",function(){return P.jc(P.x,P.ac)})
lazy($,"bC","$get$bC",function(){return P.jc(P.o,P.ac)})
lazy($,"jo","$get$jo",function(){return new G.cr(1281,0,4294967295)})
lazy($,"iS","$get$iS",function(){return new G.cq(32774,770,769)})
lazy($,"W","$get$W",function(){return P.aq(["cBlendEquation",C.o,"cDepthWrite",C.o,"cDepthTest",C.o,"cStencilFunc",C.o,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColors",C.I,"aColorAlpha",C.a1,"aPosition",C.G,"aTexUV",C.a8,"aNormal",C.ab,"aBinormal",C.a0,"aCenter",C.H,"aPointSize",C.e,"aBoneIndex",C.m,"aBoneWeight",C.m,"aTangent",C.ad,"aBitangent",C.Z,"iaRotation",C.m,"iaTranslation",C.d,"iaScale",C.d,"vColor",C.I,"vTexUV",C.l,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.G,"vPositionFromLight",C.a_,"vCenter",C.H,"vDepth",C.a6,"uTransformationMatrix",C.k,"uModelMatrix",C.k,"uNormalMatrix",C.J,"uConvolutionMatrix",C.J,"uPerspectiveViewMatrix",C.k,"uLightPerspectiveViewMatrix",C.k,"uShadowMap",C.ac,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.aa,"uAnimationTable",C.h,"uTime",C.a9,"uCameraNear",C.e,"uCameraFar",C.e,"uFogNear",C.e,"uFogFar",C.e,"uPointSize",C.e,"uScale",C.e,"uAngle",C.e,"uCanvasSize",C.l,"uCenter2",C.l,"uCutOff",C.e,"uShininess",C.e,"uShadowBias",C.e,"uOpacity",C.e,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.m,"uColorAlpha2",C.m,"uEyePosition",C.d,"uMaterial",C.k,"uRange",C.l,"uDirection",C.l,"uBoneMatrices",C.a3,"uLightDescs",C.a4,"uLightCount",C.e,"uLightTypes",C.a5,"uBumpScale",C.a7,"uNormalScale",C.a2])})
lazy($,"k4","$get$k4",function(){var t=G.eI("PointSpritesV")
t.bc(["aPosition"])
t.al(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"])
t.bg(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"])
return t})
lazy($,"k3","$get$k3",function(){var t=G.eI("PointSpritesF")
t.al(["uTexture"])
t.bg(["oFragColor = texture( uTexture,  gl_PointCoord);"])
return t})
lazy($,"is","$get$is",function(){return C.i.aY(W.jT(),"#particles")})
lazy($,"jU","$get$jU",function(){return C.i.aY(W.jT(),"#cpucompute")})
lazy($,"k1","$get$k1",function(){var t=G.eI("ParticleV")
t.bc(["aPosition"])
t.al(["uPerspectiveViewMatrix","uModelMatrix","uPointSize","uSources","uSinks"])
t.cU(["tPosition"])
t.bf(["const float kMaxDistance = 100.1;\nconst float kMinDistance = 0.2;\nconst float dt = 0.06;  \n    \nfloat rand(vec2 seed){\n    return fract(sin(dot(seed, vec2(12.9898,78.233))) * 43758.5453);\n}      \n\nint irand(int n, vec2 seed) {\n    return int(floor(rand(seed) * float(n)));\n}\n\nvec3 vec3rand(vec3 seed) {\n    return vec3(rand(seed.yz) - 0.5, rand(seed.xz) - 0.5, rand(seed.xy) - 0.5);\n}\n\nvec3 RandomSource(vec3 seed) {\n    return uSources[irand(uSources.length(), seed.xy * seed.z)];\n}\n\nvec3 Update(vec3 pos, vec3 seed) {\n    vec3 force = vec3(0.0, 0.0, 0.0);\n    for (int i = 0; i < uSources.length(); ++i) {\n       vec3 d = pos - uSources[i];\n       float l = length(d);\n       if (l <= kMinDistance) continue;\n       if (l >= kMaxDistance) {\n           return RandomSource(seed) + vec3rand(seed) * 0.35;\n       }\n       force += d / (l * l); \n    } \n    \n    for (int i = 0; i < uSinks.length(); ++i) {\n       vec3 d = uSinks[i] - pos;\n       float l = length(d);\n       if (l <= kMinDistance) {\n          return RandomSource(seed) + vec3rand(seed) * 0.35;\n       }\n       force += d / (l * l); \n    } \n    return pos + normalize(force) * dt;\n}\n      \nvoid main() {        \n    gl_Position = uPerspectiveViewMatrix * uModelMatrix * \n                  vec4(aPosition, 1.0);\n    gl_PointSize = uPointSize/gl_Position.z;\n    \n    // new position for next round\n    tPosition = Update(aPosition, gl_Position.xyz);\n}\n"])
return t})
lazy($,"k0","$get$k0",function(){var t=G.eI("ParticleF")
t.al(["uTexture"])
t.bf(["void main() {\n      oFragColor = texture( uTexture,  gl_PointCoord);\n}\n"])
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
mangledGlobalNames:{x:"int",a8:"double",a9:"num",o:"String",ac:"bool",I:"Null",l:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.q},{func:1,ret:P.ac,args:[W.S,P.o,P.o,W.bk]},{func:1,v:true,args:[P.B],opt:[P.aM]},{func:1,ret:P.x,args:[P.C,P.C]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,Blob:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSCharsetRule:J.a,CSSConditionRule:J.a,CSSFontFaceRule:J.a,CSSGroupingRule:J.a,CSSImportRule:J.a,CSSKeyframeRule:J.a,MozCSSKeyframeRule:J.a,WebKitCSSKeyframeRule:J.a,CSSKeyframesRule:J.a,MozCSSKeyframesRule:J.a,WebKitCSSKeyframesRule:J.a,CSSMediaRule:J.a,CSSNamespaceRule:J.a,CSSPageRule:J.a,CSSRule:J.a,CSSStyleRule:J.a,CSSStyleSheet:J.a,CSSSupportsRule:J.a,CSSVariableReferenceValue:J.a,CSSViewportRule:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,File:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,Gamepad:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MimeType:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechGrammar:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,StyleSheet:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,Touch:J.a,TrackDefault:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGLength:J.a,SVGMatrix:J.a,SVGNumber:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGTransform:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioParamMap:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.b9,DataView:H.as,ArrayBufferView:H.as,Float64Array:H.ba,Float32Array:H.c7,Int16Array:H.eb,Int32Array:H.ec,Int8Array:H.ed,Uint16Array:H.ee,Uint32Array:H.ef,Uint8ClampedArray:H.ca,CanvasPixelArray:H.ca,Uint8Array:H.eg,HTMLAudioElement:W.i,HTMLBRElement:W.i,HTMLBaseElement:W.i,HTMLButtonElement:W.i,HTMLContentElement:W.i,HTMLDListElement:W.i,HTMLDataElement:W.i,HTMLDataListElement:W.i,HTMLDetailsElement:W.i,HTMLDialogElement:W.i,HTMLEmbedElement:W.i,HTMLFieldSetElement:W.i,HTMLHRElement:W.i,HTMLHeadingElement:W.i,HTMLHtmlElement:W.i,HTMLIFrameElement:W.i,HTMLImageElement:W.i,HTMLInputElement:W.i,HTMLLIElement:W.i,HTMLLabelElement:W.i,HTMLLegendElement:W.i,HTMLLinkElement:W.i,HTMLMapElement:W.i,HTMLMediaElement:W.i,HTMLMenuElement:W.i,HTMLMetaElement:W.i,HTMLMeterElement:W.i,HTMLModElement:W.i,HTMLOListElement:W.i,HTMLObjectElement:W.i,HTMLOptGroupElement:W.i,HTMLOptionElement:W.i,HTMLOutputElement:W.i,HTMLParagraphElement:W.i,HTMLParamElement:W.i,HTMLPictureElement:W.i,HTMLPreElement:W.i,HTMLProgressElement:W.i,HTMLQuoteElement:W.i,HTMLScriptElement:W.i,HTMLShadowElement:W.i,HTMLSlotElement:W.i,HTMLSourceElement:W.i,HTMLSpanElement:W.i,HTMLStyleElement:W.i,HTMLTableCaptionElement:W.i,HTMLTableCellElement:W.i,HTMLTableDataCellElement:W.i,HTMLTableHeaderCellElement:W.i,HTMLTableColElement:W.i,HTMLTextAreaElement:W.i,HTMLTimeElement:W.i,HTMLTitleElement:W.i,HTMLTrackElement:W.i,HTMLUListElement:W.i,HTMLUnknownElement:W.i,HTMLVideoElement:W.i,HTMLDirectoryElement:W.i,HTMLFontElement:W.i,HTMLFrameElement:W.i,HTMLFrameSetElement:W.i,HTMLMarqueeElement:W.i,HTMLElement:W.i,AccessibleNodeList:W.dj,HTMLAnchorElement:W.dk,HTMLAreaElement:W.dl,HTMLBodyElement:W.ag,HTMLCanvasElement:W.bI,CanvasGradient:W.bJ,CanvasRenderingContext2D:W.bK,CDATASection:W.ai,CharacterData:W.ai,Comment:W.ai,ProcessingInstruction:W.ai,Text:W.ai,CSSPerspective:W.du,CSSStyleDeclaration:W.aF,MSStyleCSSProperties:W.aF,CSS2Properties:W.aF,CSSImageValue:W.Q,CSSKeywordValue:W.Q,CSSNumericValue:W.Q,CSSPositionValue:W.Q,CSSResourceValue:W.Q,CSSUnitValue:W.Q,CSSURLImageValue:W.Q,CSSStyleValue:W.Q,CSSMatrixComponent:W.a_,CSSRotation:W.a_,CSSScale:W.a_,CSSSkew:W.a_,CSSTranslation:W.a_,CSSTransformComponent:W.a_,CSSTransformValue:W.dw,CSSUnparsedValue:W.dx,DataTransferItemList:W.dz,HTMLDivElement:W.bN,XMLDocument:W.b2,Document:W.b2,DOMException:W.dA,DOMImplementation:W.bO,ClientRectList:W.bP,DOMRectList:W.bP,DOMRectReadOnly:W.bQ,DOMStringList:W.dB,DOMTokenList:W.dC,Element:W.S,AbortPaymentEvent:W.f,AnimationEvent:W.f,AnimationPlaybackEvent:W.f,ApplicationCacheErrorEvent:W.f,BackgroundFetchClickEvent:W.f,BackgroundFetchEvent:W.f,BackgroundFetchFailEvent:W.f,BackgroundFetchedEvent:W.f,BeforeInstallPromptEvent:W.f,BeforeUnloadEvent:W.f,BlobEvent:W.f,CanMakePaymentEvent:W.f,ClipboardEvent:W.f,CloseEvent:W.f,CustomEvent:W.f,DeviceMotionEvent:W.f,DeviceOrientationEvent:W.f,ErrorEvent:W.f,ExtendableEvent:W.f,ExtendableMessageEvent:W.f,FetchEvent:W.f,FontFaceSetLoadEvent:W.f,ForeignFetchEvent:W.f,GamepadEvent:W.f,HashChangeEvent:W.f,InstallEvent:W.f,MediaEncryptedEvent:W.f,MediaKeyMessageEvent:W.f,MediaQueryListEvent:W.f,MediaStreamEvent:W.f,MediaStreamTrackEvent:W.f,MessageEvent:W.f,MIDIConnectionEvent:W.f,MIDIMessageEvent:W.f,MutationEvent:W.f,NotificationEvent:W.f,PageTransitionEvent:W.f,PaymentRequestEvent:W.f,PaymentRequestUpdateEvent:W.f,PopStateEvent:W.f,PresentationConnectionAvailableEvent:W.f,PresentationConnectionCloseEvent:W.f,ProgressEvent:W.f,PromiseRejectionEvent:W.f,PushEvent:W.f,RTCDataChannelEvent:W.f,RTCDTMFToneChangeEvent:W.f,RTCPeerConnectionIceEvent:W.f,RTCTrackEvent:W.f,SecurityPolicyViolationEvent:W.f,SensorErrorEvent:W.f,SpeechRecognitionError:W.f,SpeechRecognitionEvent:W.f,SpeechSynthesisEvent:W.f,StorageEvent:W.f,SyncEvent:W.f,TrackEvent:W.f,TransitionEvent:W.f,WebKitTransitionEvent:W.f,VRDeviceEvent:W.f,VRDisplayEvent:W.f,VRSessionEvent:W.f,MojoInterfaceRequestEvent:W.f,ResourceProgressEvent:W.f,USBConnectionEvent:W.f,IDBVersionChangeEvent:W.f,AudioProcessingEvent:W.f,OfflineAudioCompletionEvent:W.f,WebGLContextEvent:W.f,Event:W.f,InputEvent:W.f,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SourceBuffer:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,TextTrack:W.d,TextTrackCue:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,VTTCue:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,ServiceWorker:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,FileList:W.dI,FileWriter:W.dJ,HTMLFormElement:W.dK,HTMLHeadElement:W.bW,History:W.dN,HTMLCollection:W.b4,HTMLFormControlsCollection:W.b4,HTMLOptionsCollection:W.b4,HTMLDocument:W.bX,XMLHttpRequest:W.dO,XMLHttpRequestUpload:W.b5,XMLHttpRequestEventTarget:W.b5,KeyboardEvent:W.ap,Location:W.e2,MediaList:W.e6,MIDIOutput:W.e8,MIDIInput:W.b8,MIDIPort:W.b8,MimeTypeArray:W.e9,PointerEvent:W.F,MouseEvent:W.F,DragEvent:W.F,DocumentFragment:W.q,ShadowRoot:W.q,Attr:W.q,DocumentType:W.q,Node:W.q,NodeIterator:W.cb,NodeList:W.bb,RadioNodeList:W.bb,Plugin:W.a2,PluginArray:W.et,PresentationConnection:W.ew,Range:W.cf,RTCDataChannel:W.ch,DataChannel:W.ch,HTMLSelectElement:W.eE,SourceBufferList:W.eJ,SpeechGrammarList:W.eL,SpeechRecognitionResult:W.a3,Storage:W.eQ,HTMLTableElement:W.cn,HTMLTableRowElement:W.eX,HTMLTableSectionElement:W.eY,HTMLTemplateElement:W.bg,TextTrackCueList:W.f_,TextTrackList:W.f0,TimeRanges:W.f2,TouchEvent:W.av,TouchList:W.f6,TrackDefaultList:W.f7,TreeWalker:W.ct,CompositionEvent:W.aw,FocusEvent:W.aw,TextEvent:W.aw,UIEvent:W.aw,URL:W.fg,VideoTrackList:W.fh,WebSocket:W.fi,WheelEvent:W.ay,Window:W.bi,DOMWindow:W.bi,CSSRuleList:W.ft,DOMRect:W.fu,GamepadList:W.fL,NamedNodeMap:W.cL,MozNamedAttrMap:W.cL,SpeechRecognitionResultList:W.h3,StyleSheetList:W.h4,SVGLengthList:P.dY,SVGNumberList:P.ek,SVGPointList:P.eu,SVGScriptElement:P.be,SVGStringList:P.eW,SVGAElement:P.h,SVGAnimateElement:P.h,SVGAnimateMotionElement:P.h,SVGAnimateTransformElement:P.h,SVGAnimationElement:P.h,SVGCircleElement:P.h,SVGClipPathElement:P.h,SVGDefsElement:P.h,SVGDescElement:P.h,SVGDiscardElement:P.h,SVGEllipseElement:P.h,SVGFEBlendElement:P.h,SVGFEColorMatrixElement:P.h,SVGFEComponentTransferElement:P.h,SVGFECompositeElement:P.h,SVGFEConvolveMatrixElement:P.h,SVGFEDiffuseLightingElement:P.h,SVGFEDisplacementMapElement:P.h,SVGFEDistantLightElement:P.h,SVGFEFloodElement:P.h,SVGFEFuncAElement:P.h,SVGFEFuncBElement:P.h,SVGFEFuncGElement:P.h,SVGFEFuncRElement:P.h,SVGFEGaussianBlurElement:P.h,SVGFEImageElement:P.h,SVGFEMergeElement:P.h,SVGFEMergeNodeElement:P.h,SVGFEMorphologyElement:P.h,SVGFEOffsetElement:P.h,SVGFEPointLightElement:P.h,SVGFESpecularLightingElement:P.h,SVGFESpotLightElement:P.h,SVGFETileElement:P.h,SVGFETurbulenceElement:P.h,SVGFilterElement:P.h,SVGForeignObjectElement:P.h,SVGGElement:P.h,SVGGeometryElement:P.h,SVGGraphicsElement:P.h,SVGImageElement:P.h,SVGLineElement:P.h,SVGLinearGradientElement:P.h,SVGMarkerElement:P.h,SVGMaskElement:P.h,SVGMetadataElement:P.h,SVGPathElement:P.h,SVGPatternElement:P.h,SVGPolygonElement:P.h,SVGPolylineElement:P.h,SVGRadialGradientElement:P.h,SVGRectElement:P.h,SVGSetElement:P.h,SVGStopElement:P.h,SVGStyleElement:P.h,SVGSVGElement:P.h,SVGSwitchElement:P.h,SVGSymbolElement:P.h,SVGTSpanElement:P.h,SVGTextContentElement:P.h,SVGTextElement:P.h,SVGTextPathElement:P.h,SVGTextPositioningElement:P.h,SVGTitleElement:P.h,SVGUseElement:P.h,SVGViewElement:P.h,SVGGradientElement:P.h,SVGComponentTransferFunctionElement:P.h,SVGFEDropShadowElement:P.h,SVGMPathElement:P.h,SVGElement:P.h,SVGTransformList:P.f8,AudioBuffer:P.dn,AudioTrackList:P.dp,AudioContext:P.aE,webkitAudioContext:P.aE,BaseAudioContext:P.aE,OfflineAudioContext:P.el,WebGLRenderingContext:P.eB,WebGL2RenderingContext:P.eC,SQLResultSetRowList:P.eM})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,Blob:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSStyleSheet:true,CSSSupportsRule:true,CSSVariableReferenceValue:true,CSSViewportRule:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,File:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,Gamepad:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechGrammar:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,StyleSheet:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,Touch:true,TrackDefault:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGLength:true,SVGMatrix:true,SVGNumber:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGTransform:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioParamMap:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float64Array:true,Float32Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasGradient:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SourceBuffer:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,TextTrack:true,TextTrackCue:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,VTTCue:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,ServiceWorker:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,FileList:true,FileWriter:true,HTMLFormElement:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,KeyboardEvent:true,Location:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,PresentationConnection:true,Range:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,SourceBufferList:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLengthList:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransformList:true,AudioBuffer:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.c8.$nativeSuperclassTag="ArrayBufferView"
H.bn.$nativeSuperclassTag="ArrayBufferView"
H.bo.$nativeSuperclassTag="ArrayBufferView"
H.ba.$nativeSuperclassTag="ArrayBufferView"
H.bp.$nativeSuperclassTag="ArrayBufferView"
H.bq.$nativeSuperclassTag="ArrayBufferView"
H.c9.$nativeSuperclassTag="ArrayBufferView"
W.bs.$nativeSuperclassTag="EventTarget"
W.bt.$nativeSuperclassTag="EventTarget"
W.bu.$nativeSuperclassTag="EventTarget"
W.bv.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.k7(Z.k9(),b)},[])
else (function(b){H.k7(Z.k9(),b)})([])})})()