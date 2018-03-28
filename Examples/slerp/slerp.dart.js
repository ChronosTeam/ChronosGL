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
a[c]=function(){a[c]=function(){H.mV(b)}
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
return d?function(e){if(t===null)t=H.j2(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.j2(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.j2(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={iE:function iE(a){this.a=a},
iK:function(a,b,c,d){if(!!a.$isj)return new H.dM(a,b,[c,d])
return new H.c4(a,b,[c,d])},
iC:function(){return new P.bk("No element")},
lL:function(){return new P.bk("Too few elements")},
m3:function(a,b){H.cj(a,0,J.b7(a)-1,b)},
cj:function(a,b,c,d){if(c-b<=32)H.m2(a,b,c,d)
else H.m1(a,b,c,d)},
m2:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.S(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.a1(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
m1:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.b(t>32)
s=C.b.I(t+1,6)
r=a3+s
q=a4-s
p=C.b.I(a3+a4,2)
o=p-s
n=p+s
t=J.S(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.a1(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.a1(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.a1(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.a1(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.a1(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.a1(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.a1(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.a1(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.a1(a5.$2(j,i),0)){h=i
i=j
j=h}t.i(a2,r,m)
t.i(a2,p,k)
t.i(a2,q,i)
t.i(a2,o,t.h(a2,a3))
t.i(a2,n,t.h(a2,a4))
g=a3+1
f=a4-1
if(J.y(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=t.h(a2,e)
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
H.cj(a2,a3,g-2,a5)
H.cj(a2,f+2,a4,a5)
if(a0)return
if(g<r&&f>q){for(;J.y(a5.$2(t.h(a2,g),l),0);)++g
for(;J.y(a5.$2(t.h(a2,f),j),0);)--f
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
break}}H.cj(a2,g,f,a5)}else H.cj(a2,g,f,a5)},
j:function j(){},
aQ:function aQ(){},
c3:function c3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
c4:function c4(a,b,c){this.a=a
this.b=b
this.$ti=c},
dM:function dM(a,b,c){this.a=a
this.b=b
this.$ti=c},
eH:function eH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
c5:function c5(a,b,c){this.a=a
this.b=b
this.$ti=c},
aO:function aO(){},
de:function(a,b){var t=a.ab(b)
if(!u.globalState.d.cy)u.globalState.f.ah()
return t},
hW:function(){++u.globalState.f.b},
i9:function(){--u.globalState.f.b
H.b(u.globalState.f.b>=0)},
kE:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.r(s).$isi)throw H.c(P.iv("Arguments to main must be a List: "+H.e(s)))
u.globalState=new H.hB(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$jB()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.h9(P.iJ(null,H.aF),0)
q=P.x
s.sek(new H.a5(0,null,null,null,null,null,0,[q,H.aW]))
s.seo(new H.a5(0,null,null,null,null,null,0,[q,null]))
if(s.x){r=new H.hA()
s.Q=r
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.lG,r)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.md)}if(u.globalState.x)return
o=H.kd()
u.globalState.e=o
u.globalState.z.i(0,o.a,o)
u.globalState.d=o
if(H.b1(a,{func:1,args:[P.L]}))o.ab(new H.il(t,a))
else if(H.b1(a,{func:1,args:[P.L,P.L]}))o.ab(new H.im(t,a))
else o.ab(a)
u.globalState.f.ah()},
md:function(a){var t=P.ax(["command","print","msg",a])
return new H.Z(!0,P.aX(null,P.x)).H(t)},
kd:function(){var t,s
t=u.globalState.a++
s=P.x
t=new H.aW(t,new H.a5(0,null,null,null,null,null,0,[s,H.cg]),P.c2(null,null,null,s),u.createNewIsolate(),new H.cg(0,null,!1),new H.am(H.kC()),new H.am(H.kC()),!1,!1,[],P.c2(null,null,null,null),null,null,!1,!0,P.c2(null,null,null,null))
t.dl()
return t},
lI:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.lJ()
return},
lJ:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.c(P.q("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.c(P.q('Cannot extract URI from "'+t+'"'))},
lG:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=new H.aE(!0,[]).U(b.data)
s=J.S(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.mF(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.aE(!0,[]).U(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.aE(!0,[]).U(s.h(t,"replyTo"))
k=H.kd()
u.globalState.f.a.S(0,new H.aF(k,new H.eo(q,p,o,n,m,l),"worker-start"))
u.globalState.d=k
u.globalState.f.ah()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.l9(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.ah()
break
case"close":u.globalState.ch.ag(0,$.$get$jC().h(0,a))
a.terminate()
u.globalState.f.ah()
break
case"log":H.lF(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
j=P.ax(["command","print","msg",t])
j=new H.Z(!0,P.aX(null,P.x)).H(j)
s.toString
self.postMessage(j)}else P.P(s.h(t,"msg"))
break
case"error":throw H.c(s.h(t,"msg"))}},
lF:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.ax(["command","log","msg",a])
r=new H.Z(!0,P.aX(null,P.x)).H(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.a0(q)
t=H.ad(q)
s=P.bW(t)
throw H.c(s)}},
lH:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.jO=$.jO+("_"+s)
$.jP=$.jP+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.D(0,["spawned",new H.aY(s,r),q,t.r])
r=new H.ep(t,d,a,c,b)
if(e){t.bJ(q,q)
u.globalState.f.a.S(0,new H.aF(t,r,"start isolate"))}else r.$0()},
m4:function(a,b){var t=new H.fG(!0,!1,null,0)
t.dg(a,b)
return t},
mf:function(a){return new H.aE(!0,[]).U(new H.Z(!1,P.aX(null,P.x)).H(a))},
il:function il(a,b){this.a=a
this.b=b},
im:function im(a,b){this.a=a
this.b=b},
hB:function hB(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
aW:function aW(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
hu:function hu(a,b){this.a=a
this.b=b},
h9:function h9(a,b){this.a=a
this.b=b},
ha:function ha(a){this.a=a},
aF:function aF(a,b,c){this.a=a
this.b=b
this.c=c},
hA:function hA(){},
eo:function eo(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ep:function ep(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
h5:function h5(){},
aY:function aY(a,b){this.b=a
this.a=b},
hD:function hD(a,b){this.a=a
this.b=b},
bz:function bz(a,b,c){this.b=a
this.c=b
this.a=c},
cg:function cg(a,b,c){this.a=a
this.b=b
this.c=c},
fG:function fG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fH:function fH(a,b){this.a=a
this.b=b},
fI:function fI(a,b){this.a=a
this.b=b},
am:function am(a){this.a=a},
Z:function Z(a,b){this.a=a
this.b=b},
aE:function aE(a,b){this.a=a
this.b=b},
mB:function(a){return u.types[a]},
mH:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.r(a).$isp},
e:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.bJ(a)
if(typeof t!=="string")throw H.c(H.J(a))
return t},
m_:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t=J.ae(t)
s=t[0]
r=t[1]
return new H.fd(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
ay:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
jM:function(a,b){var t=P.iA(a,null,null)
throw H.c(t)},
iM:function(a,b,c){var t,s
if(typeof a!=="string")H.D(H.J(a))
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return H.jM(a,c)
s=t[3]
if(s!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return H.jM(a,c)},
jL:function(a,b){var t=P.iA("Invalid double",a,null)
throw H.c(t)},
az:function(a,b){var t,s
if(typeof a!=="string")H.D(H.J(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return H.jL(a,b)
t=parseFloat(a)
if(isNaN(t)){s=J.lf(a)
if(s==="NaN"||s==="+NaN"||s==="-NaN")return t
return H.jL(a,b)}return t},
bh:function(a){var t,s,r,q,p,o,n,m,l
t=J.r(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.D||!!J.r(a).$isaC){p=C.w(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.h.a6(q,0)===36)q=C.h.cV(q,1)
l=H.dg(H.hY(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+l,u.mangledGlobalNames)},
N:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lX:function(a){return a.b?H.N(a).getUTCFullYear()+0:H.N(a).getFullYear()+0},
lV:function(a){return a.b?H.N(a).getUTCMonth()+1:H.N(a).getMonth()+1},
lR:function(a){return a.b?H.N(a).getUTCDate()+0:H.N(a).getDate()+0},
lS:function(a){return a.b?H.N(a).getUTCHours()+0:H.N(a).getHours()+0},
lU:function(a){return a.b?H.N(a).getUTCMinutes()+0:H.N(a).getMinutes()+0},
lW:function(a){return a.b?H.N(a).getUTCSeconds()+0:H.N(a).getSeconds()+0},
lT:function(a){return a.b?H.N(a).getUTCMilliseconds()+0:H.N(a).getMilliseconds()+0},
jN:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.c(H.J(a))
return a[b]},
aj:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a2(!0,b,"index",null)
t=J.b7(a)
if(b<0||C.b.b_(b,t))return P.A(b,a,"index",null,t)
return P.fa(b,"index",null)},
J:function(a){return new P.a2(!0,a,null,null)},
c:function(a){var t
if(a==null)a=new P.aT()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.kF})
t.name=""}else t.toString=H.kF
return t},
kF:function(){return J.bJ(this.dartException)},
D:function(a){throw H.c(a)},
C:function(a){throw H.c(P.ap(a))},
a8:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.fM(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
fN:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
k2:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
jK:function(a,b){return new H.eW(a,b==null?null:b.method)},
iG:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.ew(a,s,t?null:b.receiver)},
a0:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.io(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aN(r,16)&8191)===10)switch(q){case 438:return t.$1(H.iG(H.e(s)+" (Error "+q+")",null))
case 445:case 5007:return t.$1(H.jK(H.e(s)+" (Error "+q+")",null))}}if(a instanceof TypeError){p=$.$get$jX()
o=$.$get$jY()
n=$.$get$jZ()
m=$.$get$k_()
l=$.$get$k3()
k=$.$get$k4()
j=$.$get$k1()
$.$get$k0()
i=$.$get$k6()
h=$.$get$k5()
g=p.M(s)
if(g!=null)return t.$1(H.iG(s,g))
else{g=o.M(s)
if(g!=null){g.method="call"
return t.$1(H.iG(s,g))}else{g=n.M(s)
if(g==null){g=m.M(s)
if(g==null){g=l.M(s)
if(g==null){g=k.M(s)
if(g==null){g=j.M(s)
if(g==null){g=m.M(s)
if(g==null){g=i.M(s)
if(g==null){g=h.M(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return t.$1(H.jK(s,g))}}return t.$1(new H.fQ(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.cm()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.a2(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.cm()
return a},
ad:function(a){var t
if(a==null)return new H.cV(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.cV(a,null)},
mL:function(a){if(a==null||typeof a!='object')return J.b6(a)
else return H.ay(a)},
mz:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=a.length
for(r=0;r<s;){q=r+1
H.b(t)
p=a[r]
r=q+1
H.b(t)
b.i(0,p,a[q])}return b},
mG:function(a,b,c,d,e,f,g){switch(c){case 0:return H.de(b,new H.i4(a))
case 1:return H.de(b,new H.i5(a,d))
case 2:return H.de(b,new H.i6(a,d,e))
case 3:return H.de(b,new H.i7(a,d,e,f))
case 4:return H.de(b,new H.i8(a,d,e,f,g))}throw H.c(P.bW("Unsupported number of arguments for wrapped closure"))},
aI:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.mG)
a.$identity=t
return t},
ls:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.r(c).$isi){t.$reflectionInfo=c
r=H.m_(t).r}else r=c
q=d?Object.create(new H.fs().constructor.prototype):Object.create(new H.b8(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.jv(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.mB,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.js:H.ix
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.c("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.jv(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
lp:function(a,b,c,d){var t=H.ix
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
jv:function(a,b,c){var t,s,r,q
if(c)return H.lr(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.lp(s,b==null?r!=null:b!==r,t,b)
return q},
lq:function(a,b,c,d){var t,s
t=H.ix
s=H.js
switch(b?-1:a){case 0:throw H.c(H.m0("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
lr:function(a,b){var t,s,r,q
t=$.jt
if(t==null){t=H.jq("self")
$.jt=t}t=$.jr
if(t==null){t=H.jq("receiver")
$.jr=t}s=b.$stubName
r=b.length
q=a[s]
t=H.lq(r,b==null?q!=null:b!==q,s,b)
return t},
j2:function(a,b,c,d,e,f){var t,s
t=J.ae(b)
s=!!J.r(c).$isi?J.ae(c):c
return H.ls(a,t,s,!!d,e,f)},
ix:function(a){return a.a},
js:function(a){return a.c},
jq:function(a){var t,s,r,q,p
t=new H.b8("self","target","receiver","name")
s=J.ae(Object.getOwnPropertyNames(t))
for(r=s.length,q=0;q<r;++q){p=s[q]
if(t[p]===a)return p}},
na:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.a9(a,"String"))},
n5:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a9(a,"double"))},
n9:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a9(a,"num"))},
ms:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.a9(a,"bool"))},
mF:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.a9(a,"int"))},
mN:function(a,b){throw H.c(H.a9(a,b.substring(3)))},
mM:function(a,b){var t=J.S(b)
throw H.c(H.ju(a,t.ay(b,3,t.gk(b))))},
kv:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.r(a)[b])return a
H.mN(a,b)},
al:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.r(a)[b]
else t=!0
if(t)return a
H.mM(a,b)},
n8:function(a){if(a==null)return a
if(!!J.r(a).$isi)return a
throw H.c(H.a9(a,"List"))},
j3:function(a){var t=J.r(a)
return"$S" in t?t.$S():null},
b1:function(a,b){var t,s
if(a==null)return!1
t=H.j3(a)
if(t==null)s=!1
else s=H.kw(t,b)
return s},
n6:function(a,b){var t,s
if(a==null)return a
if($.j_)return a
$.j_=!0
try{if(H.b1(a,b))return a
t=H.ie(b,null)
s=H.a9(a,t)
throw H.c(s)}finally{$.j_=!1}},
a9:function(a,b){return new H.fO("TypeError: "+H.e(P.bV(a))+": type '"+H.ki(a)+"' is not a subtype of type '"+b+"'")},
ju:function(a,b){return new H.ds("CastError: "+H.e(P.bV(a))+": type '"+H.ki(a)+"' is not a subtype of type '"+b+"'")},
ki:function(a){var t
if(a instanceof H.ao){t=H.j3(a)
if(t!=null)return H.ie(t,null)
return"Closure"}return H.bh(a)},
ac:function(a){if(!0===a)return!1
if(!!J.r(a).$isiB)a=a.$0()
if(typeof a==="boolean")return!a
throw H.c(H.a9(a,"bool"))},
ai:function(a){throw H.c(new H.h0(a))},
b:function(a){if(H.ac(a))throw H.c(P.lo(null))},
mV:function(a){throw H.c(new P.dD(a))},
m0:function(a){return new H.fi(a)},
kC:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
kt:function(a){return u.getIsolateTag(a)},
G:function(a){return new H.ag(a,null)},
F:function(a,b){H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
hY:function(a){if(a==null)return
return a.$ti},
ku:function(a,b){return H.ja(a["$as"+H.e(b)],H.hY(a))},
ak:function(a,b,c){var t,s
t=H.ku(a,b)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
b3:function(a,b){var t,s
t=H.hY(a)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
ie:function(a,b){var t=H.b5(a,b)
return t},
b5:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.b(!0)
H.b(!0)
return a[0].name+H.dg(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.e(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.b5(t,b)
return H.mh(a,b)}return"unknown-reified-type"},
mh:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.b5(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.b5(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.b5(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.my(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.b5(l[j],b)+(" "+H.e(j))}q+="}"}return"("+q+") => "+t},
dg:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=new P.bl("")
for(r=b,q=!0,p=!0;H.b(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.b(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.b5(o,c)}return p?"":"<"+s.j(0)+">"},
hZ:function(a){var t,s,r
if(a instanceof H.ao){t=H.j3(a)
if(t!=null)return H.ie(t,null)}s=J.r(a).constructor.name
if(a==null)return s
r=H.dg(a.$ti,0,null)
return s+r},
ja:function(a,b){if(a==null)return b
H.b(typeof a=="function")
H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.j7(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.j7(a,null,b)
return b},
bD:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.hY(a)
s=J.r(a)
if(s[b]==null)return!1
return H.km(H.ja(s[d],t),c)},
dh:function(a,b,c,d){var t,s
if(a==null)return a
t=H.bD(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.dg(c,0,null)
throw H.c(H.ju(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
n2:function(a,b,c,d){var t,s
if(a==null)return a
t=H.bD(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.dg(c,0,null)
throw H.c(H.a9(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
km:function(a,b){var t,s,r,q,p
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
if(!H.T(r,b[p]))return!1}return!0},
n3:function(a,b,c){return H.j7(a,b,H.ku(b,c))},
T:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.name==="L")return!0
if('func' in b)return H.kw(a,b)
if('func' in a)return b.name==="iB"||b.name==="B"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.b(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.b(!0)
q=b[0]}else q=b
if(q!==s){p=H.ie(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.km(H.ja(o,t),r)},
kl:function(a,b,c){var t,s,r,q,p,o,n
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
if(!(H.T(o,n)||H.T(n,o)))return!1}return!0},
mo:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
H.b(typeof a=='object')
H.b(typeof b=='object')
t=J.ae(Object.getOwnPropertyNames(b))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.T(p,o)||H.T(o,p)))return!1}return!0},
kw:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.b('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.T(t,s)||H.T(s,t)))return!1}r=a.args
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
if(n===m){if(!H.kl(r,q,!1))return!1
if(!H.kl(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.b(j)
g=r[h]
H.b(i)
f=q[h]
if(!(H.T(g,f)||H.T(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=q[e]
if(!(H.T(g,f)||H.T(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=o[e]
if(!(H.T(g,f)||H.T(f,g)))return!1}}return H.mo(a.named,b.named)},
j7:function(a,b,c){H.b(typeof a=="function")
H.b(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
nb:function(a){var t=$.j5
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
n7:function(a){return H.ay(a)},
n4:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
mI:function(a){var t,s,r,q,p,o
H.b(!(a instanceof P.B))
t=$.j5.$1(a)
s=$.hV[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.i3[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.kk.$2(a,t)
if(t!=null){s=$.hV[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.i3[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.id(r)
$.hV[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.i3[t]=r
return r}if(p==="-"){o=H.id(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.ky(a,r)
if(p==="*")throw H.c(P.iU(t))
if(u.leafTags[t]===true){o=H.id(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.ky(a,r)},
ky:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.j8(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
id:function(a){return J.j8(a,!1,null,!!a.$isp)},
mK:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return H.id(t)
else return J.j8(t,c,null,null)},
mD:function(){if(!0===$.j6)return
$.j6=!0
H.mE()},
mE:function(){var t,s,r,q,p,o,n,m
$.hV=Object.create(null)
$.i3=Object.create(null)
H.mC()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.kB.$1(p)
if(o!=null){n=H.mK(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
mC:function(){var t,s,r,q,p,o,n
t=C.H()
t=H.b0(C.E,H.b0(C.J,H.b0(C.v,H.b0(C.v,H.b0(C.I,H.b0(C.F,H.b0(C.G(C.w),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.j5=new H.i0(p)
$.kk=new H.i1(o)
$.kB=new H.i2(n)},
b0:function(a,b){return a(b)||b},
jF:function(a,b,c,d){var t,s,r,q
t=b?"m":""
s=c?"":"i"
r=d?"g":""
q=function(e,f){try{return new RegExp(e,f)}catch(p){return p}}(a,t+s+r)
if(q instanceof RegExp)return q
throw H.c(P.iA("Illegal RegExp pattern ("+String(q)+")",a,null))},
me:function(a,b){var t=new H.hC(a,b)
t.dm(a,b)
return t},
mS:function(a,b,c,d){var t,s,r
t=b.dC(a,d)
if(t==null)return a
s=t.b
r=s.index
return H.mU(a,r,r+s[0].length,c)},
mR:function(a,b,c){var t,s
t=b.gbA()
t.lastIndex=0
s=a.replace(t,c.replace(/\$/g,"$$$$"))
return s},
mT:function(a,b,c,d){return d===0?a.replace(b.b,c.replace(/\$/g,"$$$$")):H.mS(a,b,c,d)},
mU:function(a,b,c,d){var t,s
t=a.substring(0,b)
s=a.substring(c)
return t+d+s},
fd:function fd(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fM:function fM(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eW:function eW(a,b){this.a=a
this.b=b},
ew:function ew(a,b,c){this.a=a
this.b=b
this.c=c},
fQ:function fQ(a){this.a=a},
io:function io(a){this.a=a},
cV:function cV(a,b){this.a=a
this.b=b},
i4:function i4(a){this.a=a},
i5:function i5(a,b){this.a=a
this.b=b},
i6:function i6(a,b,c){this.a=a
this.b=b
this.c=c},
i7:function i7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i8:function i8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ao:function ao(){},
fB:function fB(){},
fs:function fs(){},
b8:function b8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fO:function fO(a){this.a=a},
ds:function ds(a){this.a=a},
fi:function fi(a){this.a=a},
h0:function h0(a){this.a=a},
ag:function ag(a,b){this.a=a
this.b=b},
a5:function a5(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
ev:function ev(a){this.a=a},
ey:function ey(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ez:function ez(a,b){this.a=a
this.$ti=b},
eA:function eA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
i0:function i0(a){this.a=a},
i1:function i1(a){this.a=a},
i2:function i2(a){this.a=a},
eu:function eu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hC:function hC(a,b){this.a=a
this.b=b},
hN:function(a){var t,s,r
if(!!J.r(a).$isn)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
ab:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.aj(b,a))},
bf:function bf(){},
aS:function aS(){},
eO:function eO(){},
c9:function c9(){},
ca:function ca(){},
cb:function cb(){},
c8:function c8(){},
eP:function eP(){},
eQ:function eQ(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(){},
eU:function eU(){},
cc:function cc(){},
eV:function eV(){},
br:function br(){},
bs:function bs(){},
bt:function bt(){},
bu:function bu(){},
my:function(a){return J.ae(H.F(a?Object.keys(a):[],[null]))},
b4:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
r:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.c1.prototype
return J.es.prototype}if(typeof a=="string")return J.au.prototype
if(a==null)return J.et.prototype
if(typeof a=="boolean")return J.er.prototype
if(a.constructor==Array)return J.at.prototype
if(typeof a!="object"){if(typeof a=="function")return J.av.prototype
return a}if(a instanceof P.B)return a
return J.hX(a)},
j8:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hX:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.j6==null){H.mD()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.c(P.iU("Return interceptor for "+H.e(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$iF()]
if(p!=null)return p
p=H.mI(a)
if(p!=null)return p
if(typeof a=="function")return C.K
s=Object.getPrototypeOf(a)
if(s==null)return C.x
if(s===Object.prototype)return C.x
if(typeof q=="function"){Object.defineProperty(q,$.$get$iF(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
ae:function(a){a.fixed$length=Array
return a},
jE:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
lM:function(a,b){var t,s
for(t=a.length;b<t;){s=C.h.a6(a,b)
if(s!==32&&s!==13&&!J.jE(s))break;++b}return b},
lN:function(a,b){var t,s
for(;b>0;b=t){t=b-1
s=C.h.bT(a,t)
if(s!==32&&s!==13&&!J.jE(s))break}return b},
S:function(a){if(typeof a=="string")return J.au.prototype
if(a==null)return a
if(a.constructor==Array)return J.at.prototype
if(typeof a!="object"){if(typeof a=="function")return J.av.prototype
return a}if(a instanceof P.B)return a
return J.hX(a)},
b2:function(a){if(a==null)return a
if(a.constructor==Array)return J.at.prototype
if(typeof a!="object"){if(typeof a=="function")return J.av.prototype
return a}if(a instanceof P.B)return a
return J.hX(a)},
ks:function(a){if(typeof a=="number")return J.aP.prototype
if(a==null)return a
if(!(a instanceof P.B))return J.aC.prototype
return a},
mA:function(a){if(typeof a=="number")return J.aP.prototype
if(typeof a=="string")return J.au.prototype
if(a==null)return a
if(!(a instanceof P.B))return J.aC.prototype
return a},
j4:function(a){if(typeof a=="string")return J.au.prototype
if(a==null)return a
if(!(a instanceof P.B))return J.aC.prototype
return a},
k:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.av.prototype
return a}if(a instanceof P.B)return a
return J.hX(a)},
y:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.r(a).v(a,b)},
a1:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.ks(a).P(a,b)},
kG:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.ks(a).R(a,b)},
aJ:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mH(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.S(a).h(a,b)},
kH:function(a,b,c){return J.b2(a).i(a,b,c)},
kI:function(a,b,c,d){return J.k(a).dq(a,b,c,d)},
jb:function(a,b){return J.j4(a).a6(a,b)},
jc:function(a,b){return J.k(a).bH(a,b)},
jd:function(a,b,c){return J.k(a).bK(a,b,c)},
kJ:function(a,b){return J.k(a).dQ(a,b)},
ip:function(a,b,c){return J.k(a).bL(a,b,c)},
kK:function(a,b,c){return J.k(a).bM(a,b,c)},
bH:function(a,b,c){return J.k(a).bN(a,b,c)},
di:function(a,b){return J.k(a).dT(a,b)},
kL:function(a,b){return J.k(a).bO(a,b)},
kM:function(a,b,c){return J.k(a).bP(a,b,c)},
je:function(a,b,c,d){return J.k(a).bQ(a,b,c,d)},
kN:function(a,b){return J.b2(a).bR(a,b)},
kO:function(a,b,c,d,e){return J.k(a).bS(a,b,c,d,e)},
kP:function(a,b){return J.mA(a).N(a,b)},
iq:function(a){return J.k(a).bV(a)},
kQ:function(a){return J.k(a).bW(a)},
kR:function(a){return J.k(a).bZ(a)},
kS:function(a){return J.k(a).dZ(a)},
kT:function(a,b){return J.k(a).c0(a,b)},
ir:function(a,b){return J.k(a).c1(a,b)},
kU:function(a,b,c,d){return J.k(a).c2(a,b,c,d)},
kV:function(a,b,c,d,e){return J.k(a).e5(a,b,c,d,e)},
kW:function(a,b,c,d,e){return J.k(a).c3(a,b,c,d,e)},
kX:function(a,b,c,d,e,f){return J.k(a).e6(a,b,c,d,e,f)},
kY:function(a,b){return J.b2(a).p(a,b)},
dj:function(a,b){return J.k(a).c4(a,b)},
kZ:function(a,b){return J.k(a).c5(a,b)},
l_:function(a){return J.k(a).e7(a)},
jf:function(a,b){return J.b2(a).ar(a,b)},
b6:function(a){return J.r(a).gu(a)},
bI:function(a){return J.b2(a).gA(a)},
b7:function(a){return J.S(a).gk(a)},
l0:function(a){return J.r(a).gw(a)},
l1:function(a){return J.k(a).gaj(a)},
is:function(a){return J.k(a).gm(a)},
it:function(a){return J.k(a).gn(a)},
jg:function(a){return J.k(a).gB(a)},
l2:function(a){return J.k(a).aw(a)},
l3:function(a){return J.k(a).b1(a)},
l4:function(a,b){return J.k(a).b2(a,b)},
l5:function(a,b,c){return J.k(a).b3(a,b,c)},
jh:function(a,b,c){return J.k(a).b6(a,b,c)},
l6:function(a,b){return J.k(a).c9(a,b)},
l7:function(a,b){return J.b2(a).cc(a,b)},
l8:function(a,b,c){return J.k(a).ce(a,b,c)},
l9:function(a,b){return J.k(a).D(a,b)},
la:function(a,b){return J.j4(a).cS(a,b)},
lb:function(a,b,c,d){return J.k(a).bb(a,b,c,d)},
lc:function(a,b,c,d,e,f,g){return J.k(a).ck(a,b,c,d,e,f,g)},
ld:function(a,b,c,d){return J.k(a).cl(a,b,c,d)},
ji:function(a,b,c,d){return J.k(a).cm(a,b,c,d)},
bJ:function(a){return J.r(a).j(a)},
le:function(a,b,c,d){return J.k(a).eE(a,b,c,d)},
lf:function(a){return J.j4(a).eF(a)},
lg:function(a,b,c){return J.k(a).co(a,b,c)},
lh:function(a,b,c){return J.k(a).cp(a,b,c)},
iu:function(a,b,c){return J.k(a).cq(a,b,c)},
li:function(a,b,c){return J.k(a).cr(a,b,c)},
jj:function(a,b,c){return J.k(a).cs(a,b,c)},
jk:function(a,b,c){return J.k(a).ct(a,b,c)},
jl:function(a,b,c){return J.k(a).cu(a,b,c)},
jm:function(a,b,c,d){return J.k(a).cv(a,b,c,d)},
jn:function(a,b,c,d){return J.k(a).cw(a,b,c,d)},
lj:function(a,b){return J.k(a).cA(a,b)},
lk:function(a,b,c){return J.k(a).eG(a,b,c)},
ll:function(a,b,c,d,e,f,g){return J.k(a).cC(a,b,c,d,e,f,g)},
lm:function(a,b,c,d,e){return J.k(a).cE(a,b,c,d,e)},
a:function a(){},
er:function er(){},
et:function et(){},
bc:function bc(){},
f5:function f5(){},
aC:function aC(){},
av:function av(){},
at:function at(a){this.$ti=a},
iD:function iD(a){this.$ti=a},
dn:function dn(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aP:function aP(){},
c1:function c1(){},
es:function es(){},
au:function au(){}},P={
m8:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.mp()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.aI(new P.h2(t),1)).observe(s,{childList:true})
return new P.h1(t,s,r)}else if(self.setImmediate!=null)return P.mq()
return P.mr()},
m9:function(a){H.hW()
self.scheduleImmediate(H.aI(new P.h3(a),0))},
ma:function(a){H.hW()
self.setImmediate(H.aI(new P.h4(a),0))},
mb:function(a){P.iR(C.t,a)},
iR:function(a,b){var t=C.b.I(a.a,1000)
return H.m4(t<0?0:t,b)},
mk:function(a,b){if(H.b1(a,{func:1,args:[P.L,P.L]})){b.toString
return a}else{b.toString
return a}},
lB:function(a,b,c){var t
if(a==null)a=new P.aT()
t=$.u
if(t!==C.d)t.toString
t=new P.I(0,t,null,[c])
t.bq(a,b)
return t},
lC:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.I(0,$.u,null,[P.i])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.eh(t,b,!1,s)
try{for(m=0,l=0;m<1;++m){q=a[m]
p=l
q.aY(new P.eg(t,p,s,b,!1),r)
l=++t.b}if(l===0){l=new P.I(0,$.u,null,[null])
l.bp(C.L)
return l}k=new Array(l)
k.fixed$length=Array
t.a=k}catch(j){o=H.a0(j)
n=H.ad(j)
if(t.b===0||!1)return P.lB(o,n,null)
else{t.c=o
t.d=n}}return s},
kc:function(a,b){var t,s,r
H.b(b.a<4)
H.b(!(a instanceof P.I))
H.b(b.a===0)
b.a=1
try{a.aY(new P.hj(b),new P.hk(b))}catch(r){t=H.a0(r)
s=H.ad(r)
P.mO(new P.hl(b,t,s))}},
hi:function(a,b){var t,s,r
H.b(b.a<=1)
for(;t=a.a,s=t===2,s;){H.b(s)
a=a.c}if(t>=4){r=b.an()
b.aC(a)
P.aV(b,r)}else{r=b.c
H.b(b.a<=1)
b.a=2
b.c=a
a.bB(r)}},
aV:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.hO(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.aV(t.a,b)}s=t.a
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
P.hO(null,null,p,o,s)
return}s=$.u
if(s==null?l!=null:s!==l){H.b(l!=null)
s=$.u
H.b(l==null?s!=null:l!==s)
j=$.u
$.u=l
i=j}else i=null
s=b.c
if(s===8)new P.hq(t,r,b,q).$0()
else if(p){if((s&1)!==0)new P.hp(r,b,m).$0()}else if((s&2)!==0)new P.ho(t,r,b).$0()
if(i!=null){H.b(!0)
$.u=i}s=r.b
if(!!J.r(s).$isW){if(s.a>=4){H.b(o.a<4)
h=o.c
o.c=null
b=o.ao(h)
H.b(o.a<4)
H.b(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.hi(s,o)
return}}g=b.b
H.b(g.a<4)
h=g.c
g.c=null
b=g.ao(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.b(!o)
g.a=4
g.c=p}else{H.b(!o)
g.a=8
g.c=p}t.a=g
s=g}},
mj:function(){var t,s
for(;t=$.aZ,t!=null;){$.bB=null
s=t.b
$.aZ=s
if(s==null)$.bA=null
t.a.$0()}},
mn:function(){$.j0=!0
try{P.mj()}finally{$.bB=null
$.j0=!1
if($.aZ!=null)$.$get$iX().$1(P.kn())}},
kh:function(a){var t=new P.cu(a,null)
if($.aZ==null){$.bA=t
$.aZ=t
if(!$.j0)$.$get$iX().$1(P.kn())}else{$.bA.b=t
$.bA=t}},
mm:function(a){var t,s,r
t=$.aZ
if(t==null){P.kh(a)
$.bB=$.bA
return}s=new P.cu(a,null)
r=$.bB
if(r==null){s.b=t
$.bB=s
$.aZ=s}else{s.b=r.b
r.b=s
$.bB=s
if(s.b==null)$.bA=s}},
mO:function(a){var t=$.u
if(C.d===t){P.b_(null,null,C.d,a)
return}t.toString
P.b_(null,null,t,t.aR(a))},
m5:function(a,b){var t=$.u
if(t===C.d){t.toString
return P.iR(a,b)}return P.iR(a,t.aR(b))},
iW:function(a){var t,s
H.b(a!=null)
t=$.u
H.b(a==null?t!=null:a!==t)
s=$.u
$.u=a
return s},
hO:function(a,b,c,d,e){var t={}
t.a=d
P.mm(new P.hP(t,e))},
kf:function(a,b,c,d){var t,s
if($.u===c)return d.$0()
t=P.iW(c)
try{s=d.$0()
return s}finally{s=t
H.b(s!=null)
$.u=s}},
kg:function(a,b,c,d,e){var t,s
if($.u===c)return d.$1(e)
t=P.iW(c)
try{s=d.$1(e)
return s}finally{s=t
H.b(s!=null)
$.u=s}},
ml:function(a,b,c,d,e,f){var t,s
if($.u===c)return d.$2(e,f)
t=P.iW(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.b(s!=null)
$.u=s}},
b_:function(a,b,c,d){var t=C.d!==c
if(t)d=!(!t||!1)?c.aR(d):c.dR(d)
P.kh(d)},
h2:function h2(a){this.a=a},
h1:function h1(a,b,c){this.a=a
this.b=b
this.c=c},
h3:function h3(a){this.a=a},
h4:function h4(a){this.a=a},
W:function W(){},
eh:function eh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eg:function eg(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iy:function iy(){},
h6:function h6(){},
cv:function cv(a,b){this.a=a
this.$ti=b},
hL:function hL(a,b){this.a=a
this.$ti=b},
cD:function cD(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
I:function I(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hf:function hf(a,b){this.a=a
this.b=b},
hn:function hn(a,b){this.a=a
this.b=b},
hj:function hj(a){this.a=a},
hk:function hk(a){this.a=a},
hl:function hl(a,b,c){this.a=a
this.b=b
this.c=c},
hh:function hh(a,b){this.a=a
this.b=b},
hm:function hm(a,b){this.a=a
this.b=b},
hg:function hg(a,b,c){this.a=a
this.b=b
this.c=c},
hq:function hq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hr:function hr(a){this.a=a},
hp:function hp(a,b,c){this.a=a
this.b=b
this.c=c},
ho:function ho(a,b,c){this.a=a
this.b=b
this.c=c},
cu:function cu(a,b){this.a=a
this.b=b},
fv:function fv(){},
fx:function fx(a){this.a=a},
fy:function fy(a,b){this.a=a
this.b=b},
fw:function fw(){},
iQ:function iQ(){},
aK:function aK(a,b){this.a=a
this.b=b},
hM:function hM(){},
hP:function hP(a,b){this.a=a
this.b=b},
hF:function hF(){},
hH:function hH(a,b){this.a=a
this.b=b},
hG:function hG(a,b){this.a=a
this.b=b},
hI:function hI(a,b){this.a=a
this.b=b},
jG:function(a,b){return new H.a5(0,null,null,null,null,null,0,[a,b])},
M:function(){return new H.a5(0,null,null,null,null,null,0,[null,null])},
ax:function(a){return H.mz(a,new H.a5(0,null,null,null,null,null,0,[null,null]))},
aX:function(a,b){return new P.hy(0,null,null,null,null,null,0,[a,b])},
c2:function(a,b,c,d){return new P.hw(0,null,null,null,null,null,0,[d])},
iZ:function(){var t=Object.create(null)
H.b(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
lK:function(a,b,c){var t,s
if(P.j1(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$bC()
C.a.l(s,a)
try{P.mi(a,t)}finally{H.b(C.a.gau(s)===a)
s.pop()}s=P.jV(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eq:function(a,b,c){var t,s,r
if(P.j1(a))return b+"..."+c
t=new P.bl(b)
s=$.$get$bC()
C.a.l(s,a)
try{r=t
r.a=P.jV(r.ga_(),a,", ")}finally{H.b(C.a.gau(s)===a)
s.pop()}s=t
s.a=s.ga_()+c
s=t.ga_()
return s.charCodeAt(0)==0?s:s},
j1:function(a){var t,s
for(t=0;s=$.$get$bC(),t<s.length;++t)if(a===s[t])return!0
return!1},
mi:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gA(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.q())return
q=H.e(t.gt(t))
C.a.l(b,q)
s+=q.length+2;++r}if(!t.q()){if(r<=5)return
p=b.pop()
o=b.pop()}else{n=t.gt(t);++r
if(!t.q()){if(r<=4){C.a.l(b,H.e(n))
return}p=H.e(n)
o=b.pop()
s+=p.length+2}else{m=t.gt(t);++r
H.b(r<100)
for(;t.q();n=m,m=l){l=t.gt(t);++r
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
lO:function(a,b){var t,s
t=P.c2(null,null,null,b)
for(s=J.bI(a);s.q();)t.l(0,s.gt(s))
return t},
jI:function(a){var t,s,r
t={}
if(P.j1(a))return"{...}"
s=new P.bl("")
try{C.a.l($.$get$bC(),a)
r=s
r.a=r.ga_()+"{"
t.a=!0
J.jf(a,new P.eG(t,s))
t=s
t.a=t.ga_()+"}"}finally{t=$.$get$bC()
H.b(C.a.gau(t)===a)
t.pop()}t=s.ga_()
return t.charCodeAt(0)==0?t:t},
iJ:function(a,b){var t=new P.eB(null,0,0,0,[b])
t.da(a,b)
return t},
hy:function hy(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hw:function hw(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hx:function hx(a,b,c){this.a=a
this.b=b
this.c=c},
bq:function bq(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ht:function ht(){},
iI:function iI(){},
l:function l(){},
eF:function eF(){},
eG:function eG(a,b){this.a=a
this.b=b},
bd:function bd(){},
eB:function eB(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hz:function hz(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fl:function fl(){},
fk:function fk(){},
lx:function(a){var t=J.r(a)
if(!!t.$isao)return t.j(a)
return"Instance of '"+H.bh(a)+"'"},
jH:function(a,b,c){var t,s
t=H.F([],[c])
for(s=J.bI(a);s.q();)C.a.l(t,s.gt(s))
if(b)return t
return J.ae(t)},
jS:function(a,b,c){return new H.eu(a,H.jF(a,!1,!0,!1),null,null)},
jV:function(a,b,c){var t=J.bI(b)
if(!t.q())return a
if(c.length===0){do a+=H.e(t.gt(t))
while(t.q())}else{a+=H.e(t.gt(t))
for(;t.q();)a=a+c+H.e(t.gt(t))}return a},
lt:function(a,b){return J.kP(a,b)},
lu:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+t
if(t>=10)return s+"00"+t
return s+"000"+t},
lv:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bQ:function(a){if(a>=10)return""+a
return"0"+a},
jx:function(a,b,c,d,e,f){return new P.as(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
bV:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bJ(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lx(a)},
lo:function(a){return new P.bL(a)},
iv:function(a){return new P.a2(!1,null,null,a)},
iw:function(a,b,c){return new P.a2(!0,a,b,c)},
ln:function(a){return new P.a2(!1,null,a,"Must not be null")},
fa:function(a,b,c){return new P.cf(null,null,!0,a,b,"Value not in range")},
bi:function(a,b,c,d,e){return new P.cf(b,c,!0,a,d,"Invalid value")},
jR:function(a,b,c,d,e,f){if(C.b.P(0,a)||C.b.P(a,c))throw H.c(P.bi(a,0,c,"start",f))
if(b!=null){if(a>b||C.b.P(b,c))throw H.c(P.bi(b,a,c,"end",f))
return b}return c},
A:function(a,b,c,d,e){var t=e!=null?e:J.b7(b)
return new P.en(b,t,!0,a,c,"Index out of range")},
q:function(a){return new P.fR(a)},
iU:function(a){return new P.fP(a)},
iP:function(a){return new P.bk(a)},
ap:function(a){return new P.du(a)},
bW:function(a){return new P.he(a)},
iA:function(a,b,c){return new P.ee(a,b,c)},
P:function(a){H.b4(H.e(a))},
aH:function aH(){},
E:function E(){},
aq:function aq(a,b){this.a=a
this.b=b},
R:function R(){},
as:function as(a){this.a=a},
dK:function dK(){},
dL:function dL(){},
aN:function aN(){},
bL:function bL(a){this.a=a},
aT:function aT(){},
a2:function a2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cf:function cf(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
en:function en(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fR:function fR(a){this.a=a},
fP:function fP(a){this.a=a},
bk:function bk(a){this.a=a},
du:function du(a){this.a=a},
cm:function cm(){},
dD:function dD(a){this.a=a},
iz:function iz(){},
he:function he(a){this.a=a},
ee:function ee(a,b,c){this.a=a
this.b=b
this.c=c},
dN:function dN(a,b,c){this.a=a
this.b=b
this.$ti=c},
x:function x(){},
a4:function a4(){},
c0:function c0(){},
i:function i(){},
aR:function aR(){},
L:function L(){},
a_:function a_(){},
B:function B(){},
iO:function iO(){},
aU:function aU(){},
w:function w(){},
bl:function bl(a){this.a=a},
iT:function iT(){},
hT:function(a){var t,s,r,q,p
if(a==null)return
t=P.M()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
mv:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.jf(a,new P.hQ(t))
return t},
mw:function(a){var t,s
t=new P.I(0,$.u,null,[null])
s=new P.cv(t,[null])
a.then(H.aI(new P.hR(s),1))["catch"](H.aI(new P.hS(s),1))
return t},
fY:function fY(){},
h_:function h_(a,b){this.a=a
this.b=b},
hQ:function hQ(a){this.a=a},
fZ:function fZ(a,b,c){this.a=a
this.b=b
this.c=c},
hR:function hR(a){this.a=a},
hS:function hS(a){this.a=a},
lY:function(a){return C.q},
hv:function hv(){},
iN:function iN(){},
hE:function hE(){},
Q:function Q(){},
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
e3:function e3(){},
e4:function e4(){},
e9:function e9(){},
ec:function ec(){},
X:function X(){},
a3:function a3(){},
el:function el(){},
ex:function ex(){},
eI:function eI(){},
eX:function eX(){},
f3:function f3(){},
f7:function f7(){},
f8:function f8(){},
fb:function fb(){},
fc:function fc(){},
fz:function fz(){},
t:function t(){},
fA:function fA(){},
bm:function bm(){},
bn:function bn(){},
fL:function fL(){},
fT:function fT(){},
cG:function cG(){},
cH:function cH(){},
cN:function cN(){},
cO:function cO(){},
cX:function cX(){},
cY:function cY(){},
d2:function d2(){},
d3:function d3(){},
dp:function dp(){},
dq:function dq(){},
aL:function aL(){},
eY:function eY(){},
fg:function fg(){},
fh:function fh(){},
fr:function fr(){},
cT:function cT(){},
cU:function cU(){}},W={
lw:function(a){return"wheel"},
aG:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ke:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
U:function(a,b,c,d,e){var t=c==null?null:W.kj(new W.hd(c))
t=new W.hc(0,a,b,t,!1,[e])
t.dk(a,b,c,!1,e)
return t},
mg:function(a){var t
if(!!J.r(a).$isar)return a
t=new P.fZ([],[],!1)
t.c=!0
return t.aZ(a)},
kj:function(a){var t=$.u
if(t===C.d)return a
return t.dS(a)},
h:function h(){},
bK:function bK(){},
dk:function dk(){},
dl:function dl(){},
dm:function dm(){},
bM:function bM(){},
bN:function bN(){},
bO:function bO(){},
an:function an(){},
dv:function dv(){},
dw:function dw(){},
dx:function dx(){},
dy:function dy(){},
b9:function b9(){},
dz:function dz(){},
V:function V(){},
aM:function aM(){},
dA:function dA(){},
dB:function dB(){},
dC:function dC(){},
dE:function dE(){},
dF:function dF(){},
ar:function ar(){},
dG:function dG(){},
dH:function dH(){},
bR:function bR(){},
bS:function bS(){},
bT:function bT(){},
dI:function dI(){},
dJ:function dJ(){},
bU:function bU(){},
f:function f(){},
d:function d(){},
e7:function e7(){},
e8:function e8(){},
ed:function ed(){},
ej:function ej(){},
ek:function ek(){},
ba:function ba(){},
bZ:function bZ(){},
c_:function c_(){},
bb:function bb(){},
aw:function aw(){},
eD:function eD(){},
eE:function eE(){},
eJ:function eJ(){},
eL:function eL(){},
be:function be(){},
eM:function eM(){},
K:function K(){},
z:function z(){},
cd:function cd(){},
a6:function a6(){},
f6:function f6(){},
f9:function f9(){},
ci:function ci(){},
fj:function fj(){},
af:function af(){},
fo:function fo(){},
fq:function fq(){},
a7:function a7(){},
ft:function ft(){},
fu:function fu(a){this.a=a},
fC:function fC(){},
fD:function fD(){},
fF:function fF(){},
aA:function aA(){},
fJ:function fJ(){},
fK:function fK(){},
aB:function aB(){},
fS:function fS(){},
fU:function fU(){},
fV:function fV(){},
fW:function fW(){},
aD:function aD(){},
bp:function bp(){},
fX:function fX(a){this.a=a},
iV:function iV(){},
h7:function h7(){},
h8:function h8(){},
hs:function hs(){},
cK:function cK(){},
hJ:function hJ(){},
hK:function hK(){},
hb:function hb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iY:function iY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hc:function hc(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
hd:function hd(a){this.a=a},
m:function m(){},
ea:function ea(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cw:function cw(){},
cx:function cx(){},
cy:function cy(){},
cz:function cz(){},
cA:function cA(){},
cB:function cB(){},
cC:function cC(){},
cE:function cE(){},
cF:function cF(){},
cI:function cI(){},
cJ:function cJ(){},
cL:function cL(){},
cM:function cM(){},
cP:function cP(){},
cQ:function cQ(){},
bv:function bv(){},
bw:function bw(){},
cR:function cR(){},
cS:function cS(){},
cW:function cW(){},
cZ:function cZ(){},
d_:function d_(){},
bx:function bx(){},
by:function by(){},
d0:function d0(){},
d1:function d1(){},
d4:function d4(){},
d5:function d5(){},
d6:function d6(){},
d7:function d7(){},
d8:function d8(){},
d9:function d9(){},
da:function da(){},
db:function db(){},
dc:function dc(){},
dd:function dd(){}},B={
mP:function(a){var t,s
t=document
s=W.aw
W.U(t,"keydown",new B.ig(),!1,s)
W.U(t,"keyup",new B.ih(),!1,s)
if(!$.mQ)W.U(t,"mousemove",new B.ii(),!1,W.K)
s=W.K
W.U(t,"mousedown",new B.ij(),!1,s)
W.U(t,"mouseup",new B.ik(),!1,s)},
lQ:function(a,b,c,d){var t,s,r,q,p,o,n
t=new Float32Array(3)
s=$.$get$hU()
r=$.$get$bE()
q=new T.H(new Float32Array(16))
q.K()
p=new Float32Array(3)
o=new Float32Array(3)
n=new Float32Array(3)
t=new B.eZ(a,b,c,0,new T.o(t),-0.02,s,r,q,new T.o(p),new T.o(o),new T.o(n),new T.o(new Float32Array(3)),"camera:orbit",!1,!0)
t.dc(a,b,c,d)
return t},
ig:function ig(){},
ih:function ih(){},
ii:function ii(){},
ij:function ij(){},
ik:function ik(){},
eZ:function eZ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
f_:function f_(a){this.a=a},
f0:function f0(a){this.a=a},
f1:function f1(){},
f2:function f2(a){this.a=a}},G={
m7:function(a){var t,s,r
t=H.F(a.split("\n"),[P.w])
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.e(t[s])}return C.a.ae(t,"\n")},
kb:function(a,b,c){var t,s,r,q
t=J.k(a)
s=t.bY(a,b)
t.ba(a,s,c)
t.bU(a,s)
r=t.b5(a,s,35713)
if(r!=null&&!r){q=t.b4(a,s)
P.P("E:Compilation failed:")
P.P("E:"+G.m7(c))
P.P("E:Failure:")
P.P(C.h.Y("E:",q))
throw H.c(q)}return s},
jW:function(a,b,c){return new G.cq(a,b,c)},
jz:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.is(a[s])
b[t+1]=J.it(a[s])
b[t+2]=J.jg(a[s])}return b},
lz:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.is(a[s])
b[t+1]=J.it(a[s])}return b},
lA:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.is(a[s])
b[t+1]=J.it(a[s])
b[t+2]=J.jg(a[s])
b[t+3]=J.l1(a[s])}return b},
ly:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.aJ(a[s],0)
b[t+1]=J.aJ(a[s],1)
b[t+2]=J.aJ(a[s],2)
b[t+3]=J.aJ(a[s],3)}return b},
jJ:function(a,b,c,d){return new G.eK(b,J.kS(b.a),c,P.M(),d,null,0,-1,null,null,P.M(),"meshdata:"+a,!1,!0)},
mc:function(a,b){var t,s,r,q,p,o,n,m,l,k
for(t=a.e,s=t.gG(t),s=s.gA(s),r=b.x,q=[[P.i,P.x]],p=[P.R],o=[T.ah],n=[T.o],m=[T.aa];s.q();){l=s.gt(s)
if(!r.C(0,l)){l="Dropping unnecessary attribute: "+H.e(l)
if($.kr>0)H.b4("I: "+l)
continue}k=t.h(0,l)
switch($.$get$O().h(0,l).a){case"vec2":b.a5(l,G.lz(H.dh(k,"$isi",m,"$asi"),null),2)
break
case"vec3":b.a5(l,G.jz(H.dh(k,"$isi",n,"$asi"),null),3)
break
case"vec4":b.a5(l,G.lA(H.dh(k,"$isi",o,"$asi"),null),4)
break
case"float":b.a5(l,new Float32Array(H.hN(H.dh(k,"$isi",p,"$asi"))),1)
break
case"uvec4":b.a5(l,G.ly(H.dh(k,"$isi",q,"$asi"),null),4)
break
default:if(H.ac(!1))H.ai("unknown type for "+H.e(l)+" ["+J.l0(k[0]).j(0)+"] ["+new H.ag(H.hZ(k),null).j(0)+"] "+H.e(k))}}},
jT:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.c2(null,null,null,P.w)
s=c.b
r=d.b
q=c.f
p=J.kQ(b.a)
o=G.kb(b.a,35633,s)
J.jd(b.a,p,o)
n=G.kb(b.a,35632,r)
J.jd(b.a,p,n)
if(q.length>0)J.le(b.a,p,q,35980)
J.l6(b.a,p)
if(!J.l5(b.a,p,35714))H.D(J.l4(b.a,p))
t=new G.ff(b,c,d,p,P.lO(c.c,null),P.M(),P.M(),t,null,a,!1,!0)
t.de(a,b,c,d)
return t},
fn:function(a){return new G.fm(a,null,[],[],[],[],0,P.M())},
eN:function eN(){},
ct:function ct(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dr:function dr(){},
dt:function dt(a,b){this.a=a
this.b=b},
ef:function ef(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
e5:function e5(a,b,c){this.a=a
this.b=b
this.c=c},
e6:function e6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ei:function ei(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cr:function cr(a,b,c){this.a=a
this.b=b
this.c=c},
cq:function cq(a,b,c){this.a=a
this.b=b
this.c=c},
c6:function c6(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
eK:function eK(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
f4:function f4(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
ff:function ff(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
v:function v(a,b,c){this.a=a
this.b=b
this.c=c},
fm:function fm(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fp:function fp(){},
fE:function fE(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bo:function bo(){},
em:function em(a,b,c,d,e,f){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f}},R={
m6:function(a,b,c){var t,s,r,q
t="stars_"+b
s=b*3
r=new Float32Array(s)
for(q=0;q<s;++q)r[q]=($.$get$ka().af()-0.5)*c
s=G.jJ(t,a.d,0,a.e.x)
s.be(r)
return s},
ch:function ch(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
_.db=a
_.dx=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i
_.Q=j
_.a=k
_.b=l
_.c=m}},A={
kq:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=b.dx
t.J(c)
s=b.d
t.cd(0,s)
r=b.ch
if(r!=null&&b.cx!=null){H.e(b)
q=C.a.gau(e)
p=b.db
o=new T.Y(new Float32Array(9))
t.aS(o)
p.dY(o)
n=p.a
m=n[3]
n[3]=n[1]
n[1]=m
m=n[6]
n[6]=n[2]
n[2]=m
m=n[7]
n[7]=n[5]
n[5]=m
q=q.d
q.i(0,"uTransformationMatrix",s)
q.i(0,"uModelMatrix",t)
q.i(0,"uNormalMatrix",p)
C.a.l(e,r)
a.d6(b.cx,e,d)
e.pop()}for(s=b.cy,r=s.length,l=0;l<s.length;s.length===r||(0,H.C)(s),++l)A.kq(a,s[l],t,d,e)},
bg:function bg(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
_.ch=a
_.cx=b
_.cy=c
_.db=d
_.dx=e
_.d=f
_.e=g
_.f=h
_.r=i
_.x=j
_.a=k
_.b=l
_.c=m},
bj:function bj(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.a=d
_.b=e
_.c=f},
fe:function fe(){},
df:function(a){var t,s
t=C.M.ea(a,0,new A.i_())
s=536870911&t+(C.b.cF(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
i_:function i_(){}},D={
lP:function(a){var t,s
t=new P.I(0,$.u,null,[null])
s=new XMLHttpRequest()
C.u.es(s,"GET",a)
W.U(s,"loadend",new D.eC(new P.cv(t,[null]),s),!1,W.n0)
C.u.D(s,"")
return t},
eC:function eC(a,b){this.a=a
this.b=b}},T={
jQ:function(){var t=new Float32Array(4)
t[3]=1
return new T.ce(t)},
Y:function Y(a){this.a=a},
H:function H(a){this.a=a},
ce:function ce(a){this.a=a},
aa:function aa(a){this.a=a},
o:function o(a){this.a=a},
ah:function ah(a){this.a=a}},F={
mJ:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=document
s=C.C.ev(t,"#webgl-canvas")
r=new G.dt(null,s)
q=(s&&C.r).b0(s,"webgl2",P.ax(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
r.a=q
if(q==null)H.D(P.bW('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
p="ChronosGL Config: "+H.e(J.l2(q))
if($.kr>0)P.P("I: "+p)
J.kO(q,0,0,0,1)
J.dj(q,2929)
o=B.lQ(15,-45,0.3,s)
q=new T.H(new Float32Array(16))
q.K()
p=new T.H(new Float32Array(16))
p.K()
n=new G.f4(o,50,1,1,1000,q,p,new T.H(new Float32Array(16)),P.M(),"perspective",!1,!0)
n.bk()
q=H.F([],[A.bj])
m=new R.ch(s,n,null,r,q,17664,0,0,0,0,"main",!1,!0)
m.dd("main",r,null)
m.cg(null)
W.U(window,"resize",m.gey(),!1,W.f)
p=G.jT("demo",r,$.$get$kp(),$.$get$ko())
l=new A.bj(p,[n],[],"demo",!1,!0)
H.b(!0)
C.a.l(q,l)
p=G.jT("stars",r,$.$get$kA(),$.$get$kz())
k=[]
j=p.d
i=$.$get$jo()
h=new G.c6(P.M(),"stars",!1,!0)
h.L("cDepthTest",!0)
h.L("cDepthWrite",!1)
h.L("cBlendEquation",i)
i=$.$get$jU()
h.L("cStencilFunc",i)
g=t.createElement("canvas")
g.width=64
g.height=64
f=C.r.cH(g,"2d")
e=(f&&C.o).bX(f,32,32,1,32,32,22);(e&&C.m).ap(e,0,"gray")
C.m.ap(e,1,"black")
f.fillStyle=e
C.o.e8(f,0,0,64,64)
e=C.o.bX(f,32,32,1,32,32,6);(e&&C.m).ap(e,0,"white")
C.m.ap(e,1,"gray")
f.globalAlpha=0.9
f.fillStyle=e
f.arc(32,32,4,0,6.283185307179586,!1)
f.fill("nonzero")
t=new G.fE(!1,!1,!1,!0,1,9729,9729)
d=J.kR(j.a)
c=new G.em(g,"Utils::Particles",d,3553,j,t)
J.bH(j.a,3553,d)
J.l8(j.a,37440,1)
c.df(g)
t.d9(j,3553)
H.b(J.l3(j.a)===0)
J.bH(j.a,3553,null)
h.L("uTexture",c)
h.L("uPointSize",1000)
b=R.m6(p,2000,100)
t=new Float32Array(9)
j=new T.H(new Float32Array(16))
j.K()
d=new T.H(new Float32Array(16))
d.K()
c=new Float32Array(3)
a=new Float32Array(3)
a0=new Float32Array(3)
a1=new Float32Array(3)
H.b(!0)
C.a.l(k,new A.bg(h,b,[],new T.Y(t),j,d,new T.o(c),new T.o(a),new T.o(a0),new T.o(a1),b.a,!1,!0))
H.b(!0)
C.a.l(q,new A.bj(p,[n],k,"stars",!1,!0))
h=new G.c6(P.M(),"mat",!1,!0)
h.L("cDepthTest",!0)
h.L("cDepthWrite",!0)
h.L("cBlendEquation",$.$get$jp())
h.L("cStencilFunc",i)
P.lC([D.lP("../ct_logo.obj")],null,!1).aX(new F.ia(l,h,C.q,o,m))},
ia:function ia(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ic:function ic(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ib:function ib(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},Y={
lD:function(a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
t=new G.ei(!1,[],[],[],P.M())
t.bg("aTexUV")
t.bg("aNormal")
s=P.M()
r=a6.split("\n")
q=[]
p=[]
o=[]
n=Date.now()
m=P.jS("\\s+",!0,!1)
l=P.jS("\\s\\s*\\$",!0,!1)
for(k=r.length,j=0;j<r.length;r.length===k||(0,H.C)(r),++j){i=r[j]
i.toString
h=H.mR(i,m," ")
g=H.mT(h,l,"",0)
if(g.length===0||g[0]==="#")continue
f=g.split(" ")
h=f[0]
if(J.y(h,"g"))s.i(0,f[1],q.length)
else if(J.y(h,"v")){h=H.az(f[1],null)
e=H.az(f[2],null)
d=H.az(f[3],null)
c=new Float32Array(3)
c[0]=h
c[1]=e
c[2]=d
C.a.l(q,new T.o(c))}else if(J.y(h,"vt")){h=H.az(f[1],null)
e=H.az(f[2],null)
d=new Float32Array(2)
d[0]=h
d[1]=e
C.a.l(o,new T.aa(d))}else if(J.y(h,"vn")){h=H.az(f[1],null)
e=H.az(f[2],null)
d=H.az(f[3],null)
c=new Float32Array(3)
c[0]=h
c[1]=e
c[2]=d
C.a.l(p,new T.o(c))}else if(J.y(h,"f")){h=f.length
if(h!==4&&h!==5){H.b4("*** Error: face '"+g+"' not handled")
continue}b=[]
a=[]
a0=[]
for(a1=1;h=f.length,a1<h;++a1){a2=J.la(f[a1],"/")
H.b(a2.length>0)
for(;a2.length<3;)C.a.l(a2,"")
a3=H.iM(a2[0],null,null)-1
a4=J.y(a2[1],"")?-1:H.iM(a2[1],null,null)-1
a5=J.y(a2[2],"")?-1:H.iM(a2[2],null,null)-1
if(a3<q.length)C.a.l(b,q[a3])
else C.a.l(b,new T.o(new Float32Array(3)))
if(a4!==-1&&a4<o.length)C.a.l(a0,o[a4])
else{H.b4("problem uv "+a1+" "+a4)
C.a.l(a0,new T.aa(new Float32Array(2)))}if(a5!==-1&&a5<p.length)C.a.l(a,p[a5])
else{H.b4("problem normals "+a1+" "+a5)
C.a.l(a,new T.o(new Float32Array(3)))}}if(h===4)t.d0(b)
else t.d1(b)
t.d_("aNormal",a)
t.cZ("aTexUV",a0)}}P.P("loaded ("+P.jx(0,0,0,Date.now()-new P.aq(n,!1).a,0,0).j(0)+") "+t.j(0))
return t}}
var v=[C,H,J,P,W,B,G,R,A,D,T,F,Y]
setFunctionNamesIfNecessary(v)
var $={}
H.iE.prototype={}
J.a.prototype={
v:function(a,b){return a===b},
gu:function(a){return H.ay(a)},
j:function(a){return"Instance of '"+H.bh(a)+"'"},
gw:function(a){return new H.ag(H.hZ(a),null)}}
J.er.prototype={
j:function(a){return String(a)},
gu:function(a){return a?519018:218159},
gw:function(a){return C.ag},
$isaH:1}
J.et.prototype={
v:function(a,b){return null==b},
j:function(a){return"null"},
gu:function(a){return 0},
gw:function(a){return C.aa},
$isL:1}
J.bc.prototype={
gu:function(a){return 0},
gw:function(a){return C.a9},
j:function(a){return String(a)},
$isjD:1}
J.f5.prototype={}
J.aC.prototype={}
J.av.prototype={
j:function(a){var t=a[$.$get$jw()]
return t==null?this.cX(a):J.bJ(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isiB:1}
J.at.prototype={
l:function(a,b){if(!!a.fixed$length)H.D(P.q("add"))
a.push(b)},
bI:function(a,b){var t,s,r,q,p
t=a.length
if(!!a.fixed$length)H.D(P.q("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.C)(b),++r,t=p){q=b[r]
p=t+1
H.b(t===a.length||H.D(P.ap(a)))
a.push(q)}},
cc:function(a,b){return new H.c5(a,b,[H.b3(a,0),null])},
ae:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.e(a[s])
return t.join(b)},
p:function(a,b){return this.h(a,b)},
ge9:function(a){if(a.length>0)return a[0]
throw H.c(H.iC())},
gau:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.c(H.iC())},
b9:function(a,b,c,d,e){var t,s,r
if(!!a.immutable$list)H.D(P.q("setRange"))
P.jR(b,c,a.length,null,null,null)
t=C.b.Z(c,b)
if(t===0)return
if(e<0)H.D(P.bi(e,0,null,"skipCount",null))
s=J.S(d)
if(C.b.P(e+t,s.gk(d)))throw H.c(H.lL())
if(C.b.R(e,b))for(r=t-1;r>=0;--r)a[b+r]=s.h(d,e+r)
else for(r=0;r<t;++r)a[b+r]=s.h(d,e+r)},
cR:function(a,b){if(!!a.immutable$list)H.D(P.q("sort"))
H.m3(a,P.mx())},
ax:function(a){return this.cR(a,null)},
a0:function(a,b){var t
for(t=0;t<a.length;++t)if(J.y(a[t],b))return!0
return!1},
j:function(a){return P.eq(a,"[","]")},
gA:function(a){return new J.dn(a,a.length,0,null,[H.b3(a,0)])},
gu:function(a){return H.ay(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.D(P.q("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.iw(b,"newLength",null))
if(b<0)throw H.c(P.bi(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.aj(a,b))
if(b>=a.length||b<0)throw H.c(H.aj(a,b))
return a[b]},
i:function(a,b,c){if(!!a.immutable$list)H.D(P.q("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.aj(a,b))
if(b>=a.length||b<0)throw H.c(H.aj(a,b))
a[b]=c},
$isn:1,
$asn:function(){},
$isj:1,
$isi:1}
J.iD.prototype={}
J.dn.prototype={
gt:function(a){return this.d},
q:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.c(H.C(t))
r=this.c
if(r>=s){this.sbl(null)
return!1}this.sbl(t[r]);++this.c
return!0},
sbl:function(a){this.d=a}}
J.aP.prototype={
N:function(a,b){var t
if(typeof b!=="number")throw H.c(H.J(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaU(b)
if(this.gaU(a)===t)return 0
if(this.gaU(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaU:function(a){return a===0?1/a<0:a<0},
a2:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.q(""+a+".round()"))},
dU:function(a,b,c){if(this.N(b,c)>0)throw H.c(H.J(b))
if(this.N(a,b)<0)return b
if(this.N(a,c)>0)return c
return a},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu:function(a){return a&0x1FFFFFFF},
Y:function(a,b){if(typeof b!=="number")throw H.c(H.J(b))
return a+b},
Z:function(a,b){if(typeof b!=="number")throw H.c(H.J(b))
return a-b},
cG:function(a,b){if(typeof b!=="number")throw H.c(H.J(b))
return a/b},
E:function(a,b){if(typeof b!=="number")throw H.c(H.J(b))
return a*b},
az:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bF(a,b)},
I:function(a,b){return(a|0)===a?a/b|0:this.bF(a,b)},
bF:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.c(P.q("Result of truncating division is "+H.e(t)+": "+H.e(a)+" ~/ "+b))},
aN:function(a,b){var t
if(a>0)t=this.dL(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
dL:function(a,b){return b>31?0:a>>>b},
cF:function(a,b){if(typeof b!=="number")throw H.c(H.J(b))
return(a&b)>>>0},
cY:function(a,b){if(typeof b!=="number")throw H.c(H.J(b))
return(a^b)>>>0},
R:function(a,b){if(typeof b!=="number")throw H.c(H.J(b))
return a<b},
P:function(a,b){if(typeof b!=="number")throw H.c(H.J(b))
return a>b},
b_:function(a,b){if(typeof b!=="number")throw H.c(H.J(b))
return a>=b},
gw:function(a){return C.aj},
$isE:1,
$asE:function(){return[P.a_]},
$isR:1,
$isa_:1}
J.c1.prototype={
gw:function(a){return C.ai},
$isx:1}
J.es.prototype={
gw:function(a){return C.ah}}
J.au.prototype={
bT:function(a,b){if(b<0)throw H.c(H.aj(a,b))
if(b>=a.length)H.D(H.aj(a,b))
return a.charCodeAt(b)},
a6:function(a,b){if(b>=a.length)throw H.c(H.aj(a,b))
return a.charCodeAt(b)},
Y:function(a,b){if(typeof b!=="string")throw H.c(P.iw(b,null,null))
return a+b},
cS:function(a,b){var t=H.F(a.split(b),[P.w])
return t},
cU:function(a,b,c){var t
if(c>a.length)throw H.c(P.bi(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
cT:function(a,b){return this.cU(a,b,0)},
ay:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.fa(b,null,null))
if(b>c)throw H.c(P.fa(b,null,null))
if(c>a.length)throw H.c(P.fa(c,null,null))
return a.substring(b,c)},
cV:function(a,b){return this.ay(a,b,null)},
eF:function(a){var t,s,r,q,p
t=a.trim()
s=t.length
if(s===0)return t
if(this.a6(t,0)===133){r=J.lM(t,1)
if(r===s)return""}else r=0
q=s-1
p=this.bT(t,q)===133?J.lN(t,q):s
if(r===0&&p===s)return t
return t.substring(r,p)},
N:function(a,b){var t
if(typeof b!=="string")throw H.c(H.J(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
j:function(a){return a},
gu:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gw:function(a){return C.ab},
gk:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.c(H.aj(a,b))
return a[b]},
$isn:1,
$asn:function(){},
$isE:1,
$asE:function(){return[P.w]},
$isw:1}
H.j.prototype={}
H.aQ.prototype={
gA:function(a){return new H.c3(this,this.gk(this),0,null,[H.ak(this,"aQ",0)])},
eD:function(a,b){var t,s
t=H.F([],[H.ak(this,"aQ",0)])
C.a.sk(t,this.gk(this))
for(s=0;C.b.R(s,this.gk(this));++s)t[s]=this.p(0,s)
return t},
eC:function(a){return this.eD(a,!0)}}
H.c3.prototype={
gt:function(a){return this.d},
q:function(){var t,s,r,q
t=this.a
s=J.S(t)
r=s.gk(t)
q=this.b
if(q==null?r!=null:q!==r)throw H.c(P.ap(t))
if(C.b.b_(this.c,r)){this.sa8(null)
return!1}this.sa8(s.p(t,this.c));++this.c
return!0},
sa8:function(a){this.d=a}}
H.c4.prototype={
gA:function(a){return new H.eH(null,J.bI(this.a),this.b,this.$ti)},
gk:function(a){return J.b7(this.a)},
$asa4:function(a,b){return[b]}}
H.dM.prototype={$isj:1,
$asj:function(a,b){return[b]}}
H.eH.prototype={
q:function(){var t=this.b
if(t.q()){this.sa8(this.c.$1(t.gt(t)))
return!0}this.sa8(null)
return!1},
gt:function(a){return this.a},
sa8:function(a){this.a=a},
$asc0:function(a,b){return[b]}}
H.c5.prototype={
gk:function(a){return J.b7(this.a)},
p:function(a,b){return this.b.$1(J.kY(this.a,b))},
$asj:function(a,b){return[b]},
$asaQ:function(a,b){return[b]},
$asa4:function(a,b){return[b]}}
H.aO.prototype={}
H.il.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.im.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.hB.prototype={
sek:function(a){this.z=a},
seo:function(a){this.ch=a}}
H.aW.prototype={
dl:function(){var t,s
t=this.e
s=t.a
this.c.l(0,s)
this.dr(s,t)},
bJ:function(a,b){if(!this.f.v(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.aQ()},
ex:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.ag(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.by();++r.d}this.y=!1}this.aQ()},
dO:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.r(a),s=0;r=this.ch,s<r.length;s+=2)if(t.v(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
ew:function(a){var t,s,r
if(this.ch==null)return
for(t=J.r(a),s=0;r=this.ch,s<r.length;s+=2)if(t.v(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.D(P.q("removeRange"))
P.jR(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
cP:function(a,b){if(!this.r.v(0,a))return
this.db=b},
ee:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.D(0,c)
return}H.b(b===1)
t=this.cx
if(t==null){t=P.iJ(null,null)
this.cx=t}t.S(0,new H.hu(a,c))},
ed:function(a,b){var t
if(!this.r.v(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.at()
return}H.b(b===1)
t=this.cx
if(t==null){t=P.iJ(null,null)
this.cx=t}t.S(0,this.gel())},
ef:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.P(a)
if(b!=null)P.P(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.bJ(a)
s[1]=b==null?null:b.j(0)
for(r=new P.bq(t,t.r,null,null,[null]),r.c=t.e;r.q();)r.d.D(0,s)},
ab:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.a0(o)
p=H.ad(o)
this.ef(q,p)
if(this.db){this.at()
if(this===u.globalState.e)throw o}}finally{this.cy=H.ms(r)
u.globalState.d=H.kv(t,"$isaW")
if(t!=null)$=t.gej()
if(this.cx!=null)for(;n=this.cx,!n.gas(n);)this.cx.cf().$0()}return s},
cb:function(a){return this.b.h(0,a)},
dr:function(a,b){var t=this.b
if(t.C(0,a))throw H.c(P.bW("Registry: ports must be registered only once."))
t.i(0,a,b)},
aQ:function(){var t=this.b
if(t.gk(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.at()},
at:function(){var t,s,r
t=this.cx
if(t!=null)t.T(0)
for(t=this.b,s=t.gcB(t),s=s.gA(s);s.q();)s.gt(s).dt()
t.T(0)
this.c.T(0)
u.globalState.z.ag(0,this.a)
this.dx.T(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].D(0,t[r+1])
this.ch=null}},
gej:function(){return this.d},
gdX:function(){return this.e}}
H.hu.prototype={
$0:function(){this.a.D(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.h9.prototype={
e0:function(){var t=this.a
if(t.b===t.c)return
return t.cf()},
cj:function(){var t,s,r
t=this.e0()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.C(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gas(s)}else s=!1
else s=!1
else s=!1
if(s)H.D(P.bW("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gas(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.ax(["command","close"])
r=new H.Z(!0,P.aX(null,P.x)).H(r)
s.toString
self.postMessage(r)}return!1}t.eu()
return!0},
bD:function(){if(self.window!=null)new H.ha(this).$0()
else for(;this.cj(););},
ah:function(){var t,s,r,q,p
if(!u.globalState.x)this.bD()
else try{this.bD()}catch(r){t=H.a0(r)
s=H.ad(r)
q=u.globalState.Q
p=P.ax(["command","error","msg",H.e(t)+"\n"+H.e(s)])
p=new H.Z(!0,P.aX(null,P.x)).H(p)
q.toString
self.postMessage(p)}}}
H.ha.prototype={
$0:function(){if(!this.a.cj())return
P.m5(C.t,this)},
$S:function(){return{func:1,v:true}}}
H.aF.prototype={
eu:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.ab(this.b)}}
H.hA.prototype={}
H.eo.prototype={
$0:function(){H.lH(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.ep.prototype={
$0:function(){var t,s
t=this.a
t.x=!0
if(!this.b)this.c.$1(this.d)
else{s=this.c
if(H.b1(s,{func:1,args:[P.L,P.L]}))s.$2(this.e,this.d)
else if(H.b1(s,{func:1,args:[P.L]}))s.$1(this.e)
else s.$0()}t.aQ()},
$S:function(){return{func:1,v:true}}}
H.h5.prototype={}
H.aY.prototype={
D:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.mf(b)
if(t.gdX()===s){s=J.S(r)
switch(s.h(r,0)){case"pause":t.bJ(s.h(r,1),s.h(r,2))
break
case"resume":t.ex(s.h(r,1))
break
case"add-ondone":t.dO(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.ew(s.h(r,1))
break
case"set-errors-fatal":t.cP(s.h(r,1),s.h(r,2))
break
case"ping":t.ee(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.ed(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.ag(0,s)
break}return}u.globalState.f.a.S(0,new H.aF(t,new H.hD(this,r),"receive"))},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.aY){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gu:function(a){return this.b.a}}
H.hD.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dn(0,this.b)},
$S:function(){return{func:1}}}
H.bz.prototype={
D:function(a,b){var t,s,r
t=P.ax(["command","message","port",this,"msg",b])
s=new H.Z(!0,P.aX(null,P.x)).H(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bz){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gu:function(a){return C.b.cY((this.b<<16^this.a<<8)>>>0,this.c)}}
H.cg.prototype={
dt:function(){this.c=!0
this.b=null},
dn:function(a,b){if(this.c)return
this.b.$1(b)},
$islZ:1}
H.fG.prototype={
dg:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.S(0,new H.aF(s,new H.fH(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){H.hW()
this.c=self.setTimeout(H.aI(new H.fI(this,b),0),a)}else{H.b(a>0)
throw H.c(P.q("Timer greater than 0."))}}}
H.fH.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.fI.prototype={
$0:function(){var t=this.a
t.c=null
H.i9()
t.d=1
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.am.prototype={
gu:function(a){var t=this.a
t=C.b.aN(t,0)^C.b.I(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
v:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.am){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.Z.prototype={
H:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gk(t))
t=J.r(a)
if(!!t.$isbf)return["buffer",a]
if(!!t.$isaS)return["typed",a]
if(!!t.$isn)return this.cL(a)
if(!!t.$islE){r=this.gcI()
q=t.gG(a)
q=H.iK(q,r,H.ak(q,"a4",0),null)
q=P.jH(q,!0,H.ak(q,"a4",0))
t=t.gcB(a)
t=H.iK(t,r,H.ak(t,"a4",0),null)
return["map",q,P.jH(t,!0,H.ak(t,"a4",0))]}if(!!t.$isjD)return this.cM(a)
if(!!t.$isa)this.cz(a)
if(!!t.$islZ)this.ai(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isaY)return this.cN(a)
if(!!t.$isbz)return this.cO(a)
if(!!t.$isao){p=a.$static_name
if(p==null)this.ai(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isam)return["capability",a.a]
if(!(a instanceof P.B))this.cz(a)
return["dart",u.classIdExtractor(a),this.cK(u.classFieldsExtractor(a))]},
ai:function(a,b){throw H.c(P.q((b==null?"Can't transmit:":b)+" "+H.e(a)))},
cz:function(a){return this.ai(a,null)},
cL:function(a){var t
H.b(typeof a!=="string")
t=this.cJ(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.ai(a,"Can't serialize indexable: ")},
cJ:function(a){var t,s
t=[]
C.a.sk(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.H(a[s])
return t},
cK:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.H(a[t]))
return a},
cM:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.ai(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sk(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.H(a[t[r]])
return["js-object",t,s]},
cO:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cN:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.aE.prototype={
U:function(a){var t,s,r,q
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.c(P.iv("Bad serialized message: "+H.e(a)))
switch(C.a.ge9(a)){case"ref":H.b(J.y(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.b(J.y(a[0],"buffer"))
t=a[1]
C.a.l(this.b,t)
return t
case"typed":H.b(J.y(a[0],"typed"))
t=a[1]
C.a.l(this.b,t)
return t
case"fixed":H.b(J.y(a[0],"fixed"))
t=a[1]
C.a.l(this.b,t)
return J.ae(H.F(this.aa(t),[null]))
case"extendable":H.b(J.y(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.F(this.aa(t),[null])
case"mutable":H.b(J.y(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.aa(t)
case"const":H.b(J.y(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
return J.ae(H.F(this.aa(t),[null]))
case"map":return this.e3(a)
case"sendport":return this.e4(a)
case"raw sendport":H.b(J.y(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.e2(a)
case"function":H.b(J.y(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.b(J.y(a[0],"capability"))
return new H.am(a[1])
case"dart":H.b(J.y(a[0],"dart"))
s=a[1]
r=a[2]
q=u.instanceFromClassId(s)
C.a.l(this.b,q)
this.aa(r)
return u.initializeEmptyInstance(s,q,r)
default:throw H.c("couldn't deserialize: "+H.e(a))}},
aa:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.U(a[t]))
return a},
e3:function(a){var t,s,r,q,p
H.b(J.y(a[0],"map"))
t=a[1]
s=a[2]
r=P.M()
C.a.l(this.b,r)
t=J.l7(t,this.ge1()).eC(0)
for(q=J.S(s),p=0;p<t.length;++p)r.i(0,t[p],this.U(q.h(s,p)))
return r},
e4:function(a){var t,s,r,q,p,o,n
H.b(J.y(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.cb(r)
if(o==null)return
n=new H.aY(o,s)}else n=new H.bz(t,r,s)
C.a.l(this.b,n)
return n},
e2:function(a){var t,s,r,q,p,o
H.b(J.y(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.S(t),p=J.S(s),o=0;C.b.R(o,q.gk(t));++o)r[q.h(t,o)]=this.U(p.h(s,o))
return r}}
H.fd.prototype={}
H.fM.prototype={
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
H.eW.prototype={
j:function(a){var t=this.b
if(t==null)return"NullError: "+H.e(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.ew.prototype={
j:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.e(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.e(this.a)+")"}}
H.fQ.prototype={
j:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.io.prototype={
$1:function(a){if(!!J.r(a).$isaN)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(a){return{func:1,args:[,]}}}
H.cV.prototype={
j:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t},
$isaU:1}
H.i4.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.i5.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.i6.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.i7.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.i8.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.ao.prototype={
j:function(a){return"Closure '"+H.bh(this).trim()+"'"},
$isiB:1,
geH:function(){return this},
$D:null}
H.fB.prototype={}
H.fs.prototype={
j:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.b8.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.b8))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gu:function(a){var t,s
t=this.c
if(t==null)s=H.ay(this.a)
else s=typeof t!=="object"?J.b6(t):H.ay(t)
return(s^H.ay(this.b))>>>0},
j:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.bh(t)+"'")}}
H.fO.prototype={
j:function(a){return this.a}}
H.ds.prototype={
j:function(a){return this.a}}
H.fi.prototype={
j:function(a){return"RuntimeError: "+H.e(this.a)}}
H.h0.prototype={
j:function(a){return C.h.Y("Assertion failed: ",P.bV(this.a))}}
H.ag.prototype={
j:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gu:function(a){return J.b6(this.a)},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.ag){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.a5.prototype={
gk:function(a){return this.a},
gas:function(a){return this.a===0},
gG:function(a){return new H.ez(this,[H.b3(this,0)])},
gcB:function(a){return H.iK(this.gG(this),new H.ev(this),H.b3(this,0),H.b3(this,1))},
C:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bv(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bv(s,b)}else return this.eg(b)},
eg:function(a){var t=this.d
if(t==null)return!1
return this.ad(this.am(t,this.ac(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.a9(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.a9(r,b)
return s==null?null:s.b}else return this.eh(b)},
eh:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.am(t,this.ac(a))
r=this.ad(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aK()
this.b=t}this.bn(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aK()
this.c=s}this.bn(s,b,c)}else{r=this.d
if(r==null){r=this.aK()
this.d=r}q=this.ac(b)
p=this.am(r,q)
if(p==null)this.aM(r,q,[this.aL(b,c)])
else{o=this.ad(p,b)
if(o>=0)p[o].b=c
else p.push(this.aL(b,c))}}},
ag:function(a,b){if(typeof b==="string")return this.bC(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bC(this.c,b)
else return this.ei(b)},
ei:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.am(t,this.ac(a))
r=this.ad(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bG(q)
return q.b},
T:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aJ()}},
ar:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.c(P.ap(this))
t=t.c}},
bn:function(a,b,c){var t=this.a9(a,b)
if(t==null)this.aM(a,b,this.aL(b,c))
else t.b=c},
bC:function(a,b){var t
if(a==null)return
t=this.a9(a,b)
if(t==null)return
this.bG(t)
this.bw(a,b)
return t.b},
aJ:function(){this.r=this.r+1&67108863},
aL:function(a,b){var t,s
t=new H.ey(a,b,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.aJ()
return t},
bG:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.aJ()},
ac:function(a){return J.b6(a)&0x3ffffff},
ad:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.y(a[s].a,b))return s
return-1},
j:function(a){return P.jI(this)},
a9:function(a,b){return a[b]},
am:function(a,b){return a[b]},
aM:function(a,b,c){H.b(c!=null)
a[b]=c},
bw:function(a,b){delete a[b]},
bv:function(a,b){return this.a9(a,b)!=null},
aK:function(){var t=Object.create(null)
this.aM(t,"<non-identifier-key>",t)
this.bw(t,"<non-identifier-key>")
return t},
$islE:1}
H.ev.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(a){return{func:1,args:[,]}}}
H.ey.prototype={}
H.ez.prototype={
gk:function(a){return this.a.a},
gA:function(a){var t,s
t=this.a
s=new H.eA(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.eA.prototype={
gt:function(a){return this.d},
q:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.ap(t))
else{t=this.c
if(t==null){this.sbm(null)
return!1}else{this.sbm(t.a)
this.c=this.c.c
return!0}}},
sbm:function(a){this.d=a}}
H.i0.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[,]}}}
H.i1.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(a,b){return{func:1,args:[,P.w]}}}
H.i2.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[P.w]}}}
H.eu.prototype={
j:function(a){return"RegExp/"+this.a+"/"},
gbA:function(){var t=this.c
if(t!=null)return t
t=this.b
t=H.jF(this.a,t.multiline,!t.ignoreCase,!0)
this.c=t
return t},
dC:function(a,b){var t,s
t=this.gbA()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
return H.me(this,s)}}
H.hC.prototype={
dm:function(a,b){var t,s
t=this.b
s=t.input
H.b(typeof s==="string")
t=t.index
H.b(typeof t==="number"&&Math.floor(t)===t)},
h:function(a,b){return this.b[b]}}
H.bf.prototype={
gw:function(a){return C.a2},
$isbf:1}
H.aS.prototype={$isaS:1}
H.eO.prototype={
gw:function(a){return C.a3}}
H.c9.prototype={
gk:function(a){return a.length},
$isn:1,
$asn:function(){},
$isp:1,
$asp:function(){}}
H.ca.prototype={
h:function(a,b){H.ab(b,a,a.length)
return a[b]},
i:function(a,b,c){H.ab(b,a,a.length)
a[b]=c},
$isj:1,
$asj:function(){return[P.R]},
$asaO:function(){return[P.R]},
$asl:function(){return[P.R]},
$isi:1,
$asi:function(){return[P.R]}}
H.cb.prototype={
i:function(a,b,c){H.ab(b,a,a.length)
a[b]=c},
$isj:1,
$asj:function(){return[P.x]},
$asaO:function(){return[P.x]},
$asl:function(){return[P.x]},
$isi:1,
$asi:function(){return[P.x]}}
H.c8.prototype={
gw:function(a){return C.a4},
$iseb:1}
H.eP.prototype={
gw:function(a){return C.a5}}
H.eQ.prototype={
gw:function(a){return C.a6},
h:function(a,b){H.ab(b,a,a.length)
return a[b]}}
H.eR.prototype={
gw:function(a){return C.a7},
h:function(a,b){H.ab(b,a,a.length)
return a[b]},
$isjA:1}
H.eS.prototype={
gw:function(a){return C.a8},
h:function(a,b){H.ab(b,a,a.length)
return a[b]}}
H.eT.prototype={
gw:function(a){return C.ac},
h:function(a,b){H.ab(b,a,a.length)
return a[b]},
$isk7:1}
H.eU.prototype={
gw:function(a){return C.ad},
h:function(a,b){H.ab(b,a,a.length)
return a[b]},
$isk8:1}
H.cc.prototype={
gw:function(a){return C.ae},
gk:function(a){return a.length},
h:function(a,b){H.ab(b,a,a.length)
return a[b]}}
H.eV.prototype={
gw:function(a){return C.af},
gk:function(a){return a.length},
h:function(a,b){H.ab(b,a,a.length)
return a[b]},
$isk9:1}
H.br.prototype={}
H.bs.prototype={}
H.bt.prototype={}
H.bu.prototype={}
P.h2.prototype={
$1:function(a){var t,s
H.i9()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(a){return{func:1,args:[,]}}}
P.h1.prototype={
$1:function(a){var t,s
t=this.a
H.b(t.a==null)
H.hW()
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(a){return{func:1,args:[{func:1,v:true}]}}}
P.h3.prototype={
$0:function(){H.i9()
this.a.$0()},
$S:function(){return{func:1}}}
P.h4.prototype={
$0:function(){H.i9()
this.a.$0()},
$S:function(){return{func:1}}}
P.W.prototype={}
P.eh.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.c)this.d.F(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.c)this.d.F(t.c,t.d)},
$S:function(a,b){return{func:1,args:[,,]}}}
P.eg.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){r[this.b]=a
if(s===0)this.c.bu(r)}else if(t.b===0&&!this.e)this.c.F(t.c,t.d)},
$S:function(a){return{func:1,args:[,]}}}
P.iy.prototype={}
P.h6.prototype={
dW:function(a,b){if(a==null)a=new P.aT()
if(this.a.a!==0)throw H.c(P.iP("Future already completed"))
$.u.toString
this.F(a,b)},
dV:function(a){return this.dW(a,null)}}
P.cv.prototype={
aq:function(a,b){var t=this.a
if(t.a!==0)throw H.c(P.iP("Future already completed"))
t.bp(b)},
F:function(a,b){this.a.bq(a,b)}}
P.hL.prototype={
aq:function(a,b){var t=this.a
if(t.a!==0)throw H.c(P.iP("Future already completed"))
t.aF(b)},
F:function(a,b){this.a.F(a,b)}}
P.cD.prototype={
ep:function(a){if(this.c!==6)return!0
H.b(!0)
return this.b.b.aV(this.d,a.a)},
ec:function(a){var t,s
t=(this.c&2)!==0
if(t){H.b(t)
t=this.e!=null}else t=!1
H.b(t)
s=this.e
t=this.b.b
if(H.b1(s,{func:1,args:[P.B,P.aU]}))return t.ez(s,a.a,a.b)
else return t.aV(s,a.a)}}
P.I.prototype={
aY:function(a,b){var t,s,r
t=$.u
if(t!==C.d){t.toString
if(b!=null)b=P.mk(b,t)}s=new P.I(0,t,null,[null])
r=b==null?1:3
this.bo(new P.cD(null,s,r,a,b,[H.b3(this,0),null]))
return s},
aX:function(a){return this.aY(a,null)},
aC:function(a){H.b(this.a<4)
H.b(a.a>=4)
this.a=a.a
this.c=a.c},
bo:function(a){var t
H.b(a.a==null)
t=this.a
if(t<=1){a.a=H.kv(this.c,"$iscD")
this.c=a}else{if(t===2){H.b(!0)
t=this.c
if(t.a<4){t.bo(a)
return}this.aC(t)}H.b(this.a>=4)
t=this.b
t.toString
P.b_(null,null,t,new P.hf(this,a))}},
bB:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.b(!0)
s=this.c
if(s.a<4){s.bB(a)
return}this.aC(s)}H.b(this.a>=4)
t.a=this.ao(a)
s=this.b
s.toString
P.b_(null,null,s,new P.hn(t,this))}},
an:function(){H.b(this.a<4)
var t=this.c
this.c=null
return this.ao(t)},
ao:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aF:function(a){var t,s,r
H.b(this.a<4)
t=this.$ti
s=H.bD(a,"$isW",t,"$asW")
if(s){t=H.bD(a,"$isI",t,null)
if(t)P.hi(a,this)
else P.kc(a,this)}else{r=this.an()
H.b(this.a<4)
this.a=4
this.c=a
P.aV(this,r)}},
bu:function(a){var t
H.b(this.a<4)
H.b(!J.r(a).$isW)
t=this.an()
H.b(this.a<4)
this.a=4
this.c=a
P.aV(this,t)},
F:function(a,b){var t
H.b(this.a<4)
t=this.an()
H.b(this.a<4)
this.a=8
this.c=new P.aK(a,b)
P.aV(this,t)},
dv:function(a){return this.F(a,null)},
bp:function(a){var t
H.b(this.a<4)
t=H.bD(a,"$isW",this.$ti,"$asW")
if(t){this.ds(a)
return}H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.b_(null,null,t,new P.hh(this,a))},
ds:function(a){var t=H.bD(a,"$isI",this.$ti,null)
if(t){if(a.a===8){H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.b_(null,null,t,new P.hm(this,a))}else P.hi(a,this)
return}P.kc(a,this)},
bq:function(a,b){var t
H.b(this.a<4)
H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.b_(null,null,t,new P.hg(this,a,b))},
$isW:1,
gaO:function(){return this.a},
gdK:function(){return this.c}}
P.hf.prototype={
$0:function(){P.aV(this.a,this.b)},
$S:function(){return{func:1}}}
P.hn.prototype={
$0:function(){P.aV(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.hj.prototype={
$1:function(a){var t=this.a
H.b(t.a===1)
H.b(t.a===1)
t.a=0
t.aF(a)},
$S:function(a){return{func:1,args:[,]}}}
P.hk.prototype={
$2:function(a,b){var t=this.a
H.b(t.a===1)
t.F(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(a,b){return{func:1,args:[,],opt:[,]}}}
P.hl.prototype={
$0:function(){this.a.F(this.b,this.c)},
$S:function(){return{func:1}}}
P.hh.prototype={
$0:function(){this.a.bu(this.b)},
$S:function(){return{func:1}}}
P.hm.prototype={
$0:function(){P.hi(this.b,this.a)},
$S:function(){return{func:1}}}
P.hg.prototype={
$0:function(){this.a.F(this.b,this.c)},
$S:function(){return{func:1}}}
P.hq.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.c
p=q.c
H.b((p&1)===0)
o=(p&2)===0
H.b(o)
t=null
try{H.b(o)
H.b(p===8)
t=q.b.b.ci(q.d)}catch(n){s=H.a0(n)
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
p.b=q.c}else p.b=new P.aK(s,r)
p.a=!0
return}if(!!J.r(t).$isW){if(t instanceof P.I&&t.gaO()>=4){if(t.gaO()===8){q=t
H.b(q.gaO()===8)
p=this.b
p.b=q.gdK()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.aX(new P.hr(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.hr.prototype={
$1:function(a){return this.a},
$S:function(a){return{func:1,args:[,]}}}
P.hp.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.b((r.c&1)!==0)
this.a.b=r.b.b.aV(r.d,this.c)}catch(q){t=H.a0(q)
s=H.ad(q)
r=this.a
r.b=new P.aK(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.ho.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.b(q.a===8)
t=q.c
q=this.c
if(q.ep(t)){H.b((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.ec(t)
p.a=!1}}catch(o){s=H.a0(o)
r=H.ad(o)
q=this.a
p=q.a
H.b(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.b(q.a===8)
m.b=q.c}else m.b=new P.aK(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.cu.prototype={}
P.fv.prototype={
gk:function(a){var t,s
t={}
s=new P.I(0,$.u,null,[P.x])
t.a=0
this.em(new P.fx(t),!0,new P.fy(t,s),s.gdu())
return s}}
P.fx.prototype={
$1:function(a){++this.a.a},
$S:function(a){return{func:1,args:[,]}}}
P.fy.prototype={
$0:function(){this.b.aF(this.a.a)},
$S:function(){return{func:1}}}
P.fw.prototype={}
P.iQ.prototype={}
P.aK.prototype={
j:function(a){return H.e(this.a)},
$isaN:1}
P.hM.prototype={}
P.hP.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.aT()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.c(t)
r=H.c(t)
r.stack=s.j(0)
throw r},
$S:function(){return{func:1}}}
P.hF.prototype={
eA:function(a){var t,s,r
try{if(C.d===$.u){a.$0()
return}P.kf(null,null,this,a)}catch(r){t=H.a0(r)
s=H.ad(r)
P.hO(null,null,this,t,s)}},
eB:function(a,b){var t,s,r
try{if(C.d===$.u){a.$1(b)
return}P.kg(null,null,this,a,b)}catch(r){t=H.a0(r)
s=H.ad(r)
P.hO(null,null,this,t,s)}},
dR:function(a){return new P.hH(this,a)},
aR:function(a){return new P.hG(this,a)},
dS:function(a){return new P.hI(this,a)},
h:function(a,b){return},
ci:function(a){if($.u===C.d)return a.$0()
return P.kf(null,null,this,a)},
aV:function(a,b){if($.u===C.d)return a.$1(b)
return P.kg(null,null,this,a,b)},
ez:function(a,b,c){if($.u===C.d)return a.$2(b,c)
return P.ml(null,null,this,a,b,c)}}
P.hH.prototype={
$0:function(){return this.a.ci(this.b)},
$S:function(){return{func:1}}}
P.hG.prototype={
$0:function(){return this.a.eA(this.b)},
$S:function(){return{func:1}}}
P.hI.prototype={
$1:function(a){return this.a.eB(this.b,a)},
$S:function(a){return{func:1,args:[,]}}}
P.hy.prototype={
ac:function(a){return H.mL(a)&0x3ffffff},
ad:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.hw.prototype={
gA:function(a){var t=new P.bq(this,this.r,null,null,[null])
t.c=this.e
return t},
gk:function(a){return this.a},
a0:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dw(b)},
dw:function(a){var t=this.d
if(t==null)return!1
return this.al(t[this.ak(a)],a)>=0},
cb:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.a0(0,a)?a:null
else return this.dH(a)},
dH:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.ak(a)]
r=this.al(s,a)
if(r<0)return
return J.aJ(s,r).gdA()},
l:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.iZ()
this.b=t}return this.br(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.iZ()
this.c=s}return this.br(s,b)}else return this.S(0,b)},
S:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.iZ()
this.d=t}s=this.ak(b)
r=t[s]
if(r==null){q=[this.aE(b)]
H.b(q!=null)
t[s]=q}else{if(this.al(r,b)>=0)return!1
r.push(this.aE(b))}return!0},
ag:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bs(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bs(this.c,b)
else return this.dI(0,b)},
dI:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.ak(b)]
r=this.al(s,b)
if(r<0)return!1
this.bt(s.splice(r,1)[0])
return!0},
T:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aD()}},
br:function(a,b){var t
if(a[b]!=null)return!1
t=this.aE(b)
H.b(!0)
a[b]=t
return!0},
bs:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bt(t)
delete a[b]
return!0},
aD:function(){this.r=this.r+1&67108863},
aE:function(a){var t,s
t=new P.hx(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.aD()
return t},
bt:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.aD()},
ak:function(a){return J.b6(a)&0x3ffffff},
al:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.y(a[s].a,b))return s
return-1}}
P.hx.prototype={
gdA:function(){return this.a}}
P.bq.prototype={
gt:function(a){return this.d},
q:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.ap(t))
else{t=this.c
if(t==null){this.sa7(null)
return!1}else{this.sa7(t.a)
this.c=this.c.b
return!0}}},
sa7:function(a){this.d=a}}
P.ht.prototype={}
P.iI.prototype={$isj:1}
P.l.prototype={
gA:function(a){return new H.c3(a,this.gk(a),0,null,[H.ak(a,"l",0)])},
p:function(a,b){return this.h(a,b)},
cc:function(a,b){return new H.c5(a,b,[H.ak(a,"l",0),null])},
ea:function(a,b,c){var t,s,r,q
t=this.gk(a)
for(s=b,r=0;C.b.R(r,t);++r){s=c.$2(s,this.h(a,r))
q=this.gk(a)
if(t==null?q!=null:t!==q)throw H.c(P.ap(a))}return s},
j:function(a){return P.eq(a,"[","]")}}
P.eF.prototype={}
P.eG.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.e(a)
t.a=s+": "
t.a+=H.e(b)},
$S:function(a,b){return{func:1,args:[,,]}}}
P.bd.prototype={
ar:function(a,b){var t,s
for(t=J.bI(this.gG(a));t.q();){s=t.gt(t)
b.$2(s,this.h(a,s))}},
gk:function(a){return J.b7(this.gG(a))},
j:function(a){return P.jI(a)}}
P.eB.prototype={
da:function(a,b){var t
H.b(!0)
t=new Array(8)
t.fixed$length=Array
this.sbE(H.F(t,[b]))},
gA:function(a){return new P.hz(this,this.c,this.d,this.b,null,this.$ti)},
gas:function(a){return this.b===this.c},
gk:function(a){return(this.c-this.b&this.a.length-1)>>>0},
p:function(a,b){var t=this.gk(this)
if(C.b.P(0,b)||b>=t)H.D(P.A(b,this,"index",null,t))
return this.a[(C.b.Y(this.b,b)&this.a.length-1)>>>0]},
T:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
j:function(a){return P.eq(this,"{","}")},
cf:function(){var t,s,r
t=this.b
if(t===this.c)throw H.c(H.iC());++this.d
s=this.a
r=s[t]
s[t]=null
this.b=(t+1&s.length-1)>>>0
return r},
S:function(a,b){var t,s
t=this.a
s=this.c
t[s]=b
t=(s+1&t.length-1)>>>0
this.c=t
if(this.b===t)this.by();++this.d},
by:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.F(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.b9(s,0,q,t,r)
C.a.b9(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbE(s)},
sbE:function(a){this.a=a}}
P.hz.prototype={
gt:function(a){return this.e},
q:function(){var t,s
t=this.a
if(this.c!==t.d)H.D(P.ap(t))
s=this.d
if(s===this.b){this.sa7(null)
return!1}this.sa7(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sa7:function(a){this.e=a}}
P.fl.prototype={
j:function(a){return P.eq(this,"{","}")},
$isj:1}
P.fk.prototype={}
P.aH.prototype={}
P.E.prototype={}
P.aq.prototype={
geq:function(){return this.a},
d3:function(a,b){var t
if(Math.abs(this.a)<=864e13)t=!1
else t=!0
if(t)throw H.c(P.iv("DateTime is outside valid range: "+this.geq()))},
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.aq))return!1
return this.a===b.a&&this.b===b.b},
N:function(a,b){return C.b.N(this.a,b.a)},
gu:function(a){var t=this.a
return(t^C.b.aN(t,30))&1073741823},
j:function(a){var t,s,r,q,p,o,n
t=P.lu(H.lX(this))
s=P.bQ(H.lV(this))
r=P.bQ(H.lR(this))
q=P.bQ(H.lS(this))
p=P.bQ(H.lU(this))
o=P.bQ(H.lW(this))
n=P.lv(H.lT(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isE:1,
$asE:function(){return[P.aq]}}
P.R.prototype={}
P.as.prototype={
R:function(a,b){return C.b.R(this.a,b.gdz())},
P:function(a,b){return C.b.P(this.a,b.gdz())},
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.as))return!1
return this.a===b.a},
gu:function(a){return this.a&0x1FFFFFFF},
N:function(a,b){return C.b.N(this.a,b.a)},
j:function(a){var t,s,r,q,p
t=new P.dL()
s=this.a
if(s<0)return"-"+new P.as(0-s).j(0)
r=t.$1(C.b.I(s,6e7)%60)
q=t.$1(C.b.I(s,1e6)%60)
p=new P.dK().$1(s%1e6)
return""+C.b.I(s,36e8)+":"+H.e(r)+":"+H.e(q)+"."+H.e(p)},
$isE:1,
$asE:function(){return[P.as]}}
P.dK.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(a){return{func:1,ret:P.w,args:[P.x]}}}
P.dL.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(a){return{func:1,ret:P.w,args:[P.x]}}}
P.aN.prototype={}
P.bL.prototype={
j:function(a){return"Assertion failed"}}
P.aT.prototype={
j:function(a){return"Throw of null."}}
P.a2.prototype={
gaH:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaG:function(){return""},
j:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.e(t)
q=this.gaH()+s+r
if(!this.a)return q
p=this.gaG()
o=P.bV(this.b)
return q+p+": "+H.e(o)}}
P.cf.prototype={
gaH:function(){return"RangeError"},
gaG:function(){var t,s,r
H.b(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.e(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.e(t)
else if(r>t)s=": Not in range "+H.e(t)+".."+H.e(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.e(t)}return s}}
P.en.prototype={
gaH:function(){return"RangeError"},
gaG:function(){H.b(this.a)
if(J.kG(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.e(t)},
gk:function(a){return this.f}}
P.fR.prototype={
j:function(a){return"Unsupported operation: "+this.a}}
P.fP.prototype={
j:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.bk.prototype={
j:function(a){return"Bad state: "+this.a}}
P.du.prototype={
j:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.e(P.bV(t))+"."}}
P.cm.prototype={
j:function(a){return"Stack Overflow"},
$isaN:1}
P.dD.prototype={
j:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.iz.prototype={}
P.he.prototype={
j:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.e(t)}}
P.ee.prototype={
j:function(a){var t,s,r
t=this.a
s=t!=null&&""!==t?"FormatException: "+H.e(t):"FormatException"
r=this.b
if(typeof r!=="string")return s
if(r.length>78)r=C.h.ay(r,0,75)+"..."
return s+"\n"+r}}
P.dN.prototype={
h:function(a,b){var t,s
t=this.a
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.D(P.iw(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.jN(b,"expando$values")
return s==null?null:H.jN(s,t)},
j:function(a){return"Expando:"+H.e(this.b)}}
P.x.prototype={}
P.a4.prototype={
gk:function(a){var t,s
H.b(!this.$isj)
t=this.gA(this)
for(s=0;t.q();)++s
return s},
p:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.ln("index"))
if(b<0)H.D(P.bi(b,0,null,"index",null))
for(t=this.gA(this),s=0;t.q();){r=t.gt(t)
if(b===s)return r;++s}throw H.c(P.A(b,this,"index",null,s))},
j:function(a){return P.lK(this,"(",")")}}
P.c0.prototype={}
P.i.prototype={$isj:1}
P.aR.prototype={}
P.L.prototype={
gu:function(a){return P.B.prototype.gu.call(this,this)},
j:function(a){return"null"}}
P.a_.prototype={$isE:1,
$asE:function(){return[P.a_]}}
P.B.prototype={constructor:P.B,$isB:1,
v:function(a,b){return this===b},
gu:function(a){return H.ay(this)},
j:function(a){return"Instance of '"+H.bh(this)+"'"},
gw:function(a){return new H.ag(H.hZ(this),null)},
toString:function(){return this.j(this)}}
P.iO.prototype={}
P.aU.prototype={}
P.w.prototype={$isE:1,
$asE:function(){return[P.w]}}
P.bl.prototype={
gk:function(a){return this.a.length},
j:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga_:function(){return this.a}}
P.iT.prototype={}
W.h.prototype={}
W.bK.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gB:function(a){return a.z}}
W.dk.prototype={
gk:function(a){return a.length}}
W.dl.prototype={
j:function(a){return String(a)}}
W.dm.prototype={
j:function(a){return String(a)}}
W.bM.prototype={
b0:function(a,b,c){if(c!=null)return this.dD(a,b,P.mv(c,null))
return this.dE(a,b)},
cH:function(a,b){return this.b0(a,b,null)},
dD:function(a,b,c){return a.getContext(b,c)},
dE:function(a,b){return a.getContext(b)}}
W.bN.prototype={
ap:function(a,b,c){return a.addColorStop(b,c)}}
W.bO.prototype={
bX:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
e8:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
aw:function(a){return P.hT(a.getContextAttributes())}}
W.an.prototype={
gk:function(a){return a.length}}
W.dv.prototype={
gk:function(a){return a.length}}
W.dw.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.dx.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gB:function(a){return a.z}}
W.dy.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gB:function(a){return a.z}}
W.b9.prototype={
gk:function(a){return a.length}}
W.dz.prototype={}
W.V.prototype={}
W.aM.prototype={}
W.dA.prototype={
gk:function(a){return a.length}}
W.dB.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gB:function(a){return a.z}}
W.dC.prototype={
gk:function(a){return a.length}}
W.dE.prototype={
h:function(a,b){return a[b]},
gk:function(a){return a.length}}
W.dF.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gB:function(a){return a.z}}
W.ar.prototype={
ev:function(a,b){return a.querySelector(b)},
$isar:1}
W.dG.prototype={
j:function(a){return String(a)}}
W.dH.prototype={
gaj:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gB:function(a){return a.z}}
W.bR.prototype={
gaj:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gB:function(a){return a.z}}
W.bS.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[P.Q]},
$isj:1,
$asj:function(){return[P.Q]},
$isp:1,
$asp:function(){return[P.Q]},
$asl:function(){return[P.Q]},
$isi:1,
$asi:function(){return[P.Q]},
$asm:function(){return[P.Q]}}
W.bT.prototype={
j:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.ga3(a))+" x "+H.e(this.ga1(a))},
v:function(a,b){var t
if(b==null)return!1
t=J.r(b)
if(!t.$isQ)return!1
return a.left===t.gc8(b)&&a.top===t.gcn(b)&&this.ga3(a)===t.ga3(b)&&this.ga1(a)===t.ga1(b)},
gu:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.ga3(a)
q=this.ga1(a)
return W.ke(W.aG(W.aG(W.aG(W.aG(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga1:function(a){return a.height},
gc8:function(a){return a.left},
gcn:function(a){return a.top},
ga3:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isQ:1,
$asQ:function(){}}
W.dI.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[P.w]},
$isj:1,
$asj:function(){return[P.w]},
$isp:1,
$asp:function(){return[P.w]},
$asl:function(){return[P.w]},
$isi:1,
$asi:function(){return[P.w]},
$asm:function(){return[P.w]}}
W.dJ.prototype={
gk:function(a){return a.length}}
W.bU.prototype={
j:function(a){return a.localName}}
W.f.prototype={$isf:1}
W.d.prototype={
dq:function(a,b,c,d){return a.addEventListener(b,H.aI(c,1),!1)}}
W.e7.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.bX]},
$isj:1,
$asj:function(){return[W.bX]},
$isp:1,
$asp:function(){return[W.bX]},
$asl:function(){return[W.bX]},
$isi:1,
$asi:function(){return[W.bX]},
$asm:function(){return[W.bX]}}
W.e8.prototype={
gk:function(a){return a.length}}
W.ed.prototype={
gk:function(a){return a.length}}
W.ej.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gB:function(a){return a.z}}
W.ek.prototype={
gk:function(a){return a.length}}
W.ba.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.z]},
$isj:1,
$asj:function(){return[W.z]},
$isp:1,
$asp:function(){return[W.z]},
$asl:function(){return[W.z]},
$isi:1,
$asi:function(){return[W.z]},
$asm:function(){return[W.z]}}
W.bZ.prototype={}
W.c_.prototype={
eJ:function(a,b,c,d,e,f){return a.open(b,c)},
es:function(a,b,c){return a.open(b,c)},
D:function(a,b){return a.send(b)}}
W.bb.prototype={}
W.aw.prototype={$isaw:1}
W.eD.prototype={
j:function(a){return String(a)}}
W.eE.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gB:function(a){return a.z}}
W.eJ.prototype={
gk:function(a){return a.length}}
W.eL.prototype={
eI:function(a,b,c){return a.send(b,c)},
D:function(a,b){return a.send(b)}}
W.be.prototype={}
W.eM.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.c7]},
$isj:1,
$asj:function(){return[W.c7]},
$isp:1,
$asp:function(){return[W.c7]},
$asl:function(){return[W.c7]},
$isi:1,
$asi:function(){return[W.c7]},
$asm:function(){return[W.c7]}}
W.K.prototype={$isK:1}
W.z.prototype={
j:function(a){var t=a.nodeValue
return t==null?this.cW(a):t}}
W.cd.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.z]},
$isj:1,
$asj:function(){return[W.z]},
$isp:1,
$asp:function(){return[W.z]},
$asl:function(){return[W.z]},
$isi:1,
$asi:function(){return[W.z]},
$asm:function(){return[W.z]}}
W.a6.prototype={
gk:function(a){return a.length}}
W.f6.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a6]},
$isj:1,
$asj:function(){return[W.a6]},
$isp:1,
$asp:function(){return[W.a6]},
$asl:function(){return[W.a6]},
$isi:1,
$asi:function(){return[W.a6]},
$asm:function(){return[W.a6]}}
W.f9.prototype={
D:function(a,b){return a.send(b)}}
W.ci.prototype={
D:function(a,b){return a.send(b)}}
W.fj.prototype={
gk:function(a){return a.length}}
W.af.prototype={}
W.fo.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.ck]},
$isj:1,
$asj:function(){return[W.ck]},
$isp:1,
$asp:function(){return[W.ck]},
$asl:function(){return[W.ck]},
$isi:1,
$asi:function(){return[W.ck]},
$asm:function(){return[W.ck]}}
W.fq.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.cl]},
$isj:1,
$asj:function(){return[W.cl]},
$isp:1,
$asp:function(){return[W.cl]},
$asl:function(){return[W.cl]},
$isi:1,
$asi:function(){return[W.cl]},
$asm:function(){return[W.cl]}}
W.a7.prototype={
gk:function(a){return a.length}}
W.ft.prototype={
h:function(a,b){return this.bx(a,b)},
ar:function(a,b){var t,s
for(t=0;!0;++t){s=this.dG(a,t)
if(s==null)return
b.$2(s,this.bx(a,s))}},
gG:function(a){var t=H.F([],[P.w])
this.ar(a,new W.fu(t))
return t},
gk:function(a){return a.length},
bx:function(a,b){return a.getItem(b)},
dG:function(a,b){return a.key(b)},
$asbd:function(){return[P.w,P.w]}}
W.fu.prototype={
$2:function(a,b){return C.a.l(this.a,a)},
$S:function(a,b){return{func:1,args:[,,]}}}
W.fC.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.cp]},
$isj:1,
$asj:function(){return[W.cp]},
$isp:1,
$asp:function(){return[W.cp]},
$asl:function(){return[W.cp]},
$isi:1,
$asi:function(){return[W.cp]},
$asm:function(){return[W.cp]}}
W.fD.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.co]},
$isj:1,
$asj:function(){return[W.co]},
$isp:1,
$asp:function(){return[W.co]},
$asl:function(){return[W.co]},
$isi:1,
$asi:function(){return[W.co]},
$asm:function(){return[W.co]}}
W.fF.prototype={
gk:function(a){return a.length}}
W.aA.prototype={$isaA:1}
W.fJ.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.cs]},
$isj:1,
$asj:function(){return[W.cs]},
$isp:1,
$asp:function(){return[W.cs]},
$asl:function(){return[W.cs]},
$isi:1,
$asi:function(){return[W.cs]},
$asm:function(){return[W.cs]}}
W.fK.prototype={
gk:function(a){return a.length}}
W.aB.prototype={}
W.fS.prototype={
j:function(a){return String(a)}}
W.fU.prototype={
gm:function(a){return a.x},
gB:function(a){return a.z}}
W.fV.prototype={
gk:function(a){return a.length}}
W.fW.prototype={
D:function(a,b){return a.send(b)}}
W.aD.prototype={
ge_:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.q("deltaY is not supported"))},
$isaD:1}
W.bp.prototype={
gdP:function(a){var t,s
t=P.a_
s=new P.I(0,$.u,null,[t])
this.dB(a)
this.dJ(a,W.kj(new W.fX(new P.hL(s,[t]))))
return s},
dJ:function(a,b){return a.requestAnimationFrame(H.aI(b,1))},
dB:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.fX.prototype={
$1:function(a){this.a.aq(0,a)},
$S:function(a){return{func:1,args:[,]}}}
W.iV.prototype={}
W.h7.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.bP]},
$isj:1,
$asj:function(){return[W.bP]},
$isp:1,
$asp:function(){return[W.bP]},
$asl:function(){return[W.bP]},
$isi:1,
$asi:function(){return[W.bP]},
$asm:function(){return[W.bP]}}
W.h8.prototype={
j:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
v:function(a,b){var t
if(b==null)return!1
t=J.r(b)
if(!t.$isQ)return!1
return a.left===t.gc8(b)&&a.top===t.gcn(b)&&a.width===t.ga3(b)&&a.height===t.ga1(b)},
gu:function(a){var t,s,r,q
t=a.left
s=a.top
r=a.width
q=a.height
return W.ke(W.aG(W.aG(W.aG(W.aG(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga1:function(a){return a.height},
ga3:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.hs.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.bY]},
$isj:1,
$asj:function(){return[W.bY]},
$isp:1,
$asp:function(){return[W.bY]},
$asl:function(){return[W.bY]},
$isi:1,
$asi:function(){return[W.bY]},
$asm:function(){return[W.bY]}}
W.cK.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.z]},
$isj:1,
$asj:function(){return[W.z]},
$isp:1,
$asp:function(){return[W.z]},
$asl:function(){return[W.z]},
$isi:1,
$asi:function(){return[W.z]},
$asm:function(){return[W.z]}}
W.hJ.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a7]},
$isj:1,
$asj:function(){return[W.a7]},
$isp:1,
$asp:function(){return[W.a7]},
$asl:function(){return[W.a7]},
$isi:1,
$asi:function(){return[W.a7]},
$asm:function(){return[W.a7]}}
W.hK.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.cn]},
$isj:1,
$asj:function(){return[W.cn]},
$isp:1,
$asp:function(){return[W.cn]},
$asl:function(){return[W.cn]},
$isi:1,
$asi:function(){return[W.cn]},
$asm:function(){return[W.cn]}}
W.hb.prototype={
em:function(a,b,c,d){return W.U(this.a,this.b,a,!1,H.b3(this,0))}}
W.iY.prototype={}
W.hc.prototype={
dk:function(a,b,c,d,e){this.dN()},
dN:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.kI(r,this.c,t,!1)}}}
W.hd.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(a){return{func:1,args:[,]}}}
W.m.prototype={
gA:function(a){return new W.ea(a,this.gk(a),-1,null,[H.ak(a,"m",0)])}}
W.ea.prototype={
q:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbz(J.aJ(this.a,t))
this.c=t
return!0}this.sbz(null)
this.c=s
return!1},
gt:function(a){return this.d},
sbz:function(a){this.d=a}}
W.cw.prototype={}
W.cx.prototype={}
W.cy.prototype={}
W.cz.prototype={}
W.cA.prototype={}
W.cB.prototype={}
W.cC.prototype={}
W.cE.prototype={}
W.cF.prototype={}
W.cI.prototype={}
W.cJ.prototype={}
W.cL.prototype={}
W.cM.prototype={}
W.cP.prototype={}
W.cQ.prototype={}
W.bv.prototype={}
W.bw.prototype={}
W.cR.prototype={}
W.cS.prototype={}
W.cW.prototype={}
W.cZ.prototype={}
W.d_.prototype={}
W.bx.prototype={}
W.by.prototype={}
W.d0.prototype={}
W.d1.prototype={}
W.d4.prototype={}
W.d5.prototype={}
W.d6.prototype={}
W.d7.prototype={}
W.d8.prototype={}
W.d9.prototype={}
W.da.prototype={}
W.db.prototype={}
W.dc.prototype={}
W.dd.prototype={}
P.fY.prototype={
c7:function(a){var t,s,r,q
t=this.a
s=t.length
for(r=0;r<s;++r){q=t[r]
if(q==null?a==null:q===a)return r}C.a.l(t,a)
C.a.l(this.b,null)
return s},
aZ:function(a){var t,s,r,q,p,o,n,m,l,k
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){s=a.getTime()
r=new P.aq(s,!0)
r.d3(s,!0)
return r}if(a instanceof RegExp)throw H.c(P.iU("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.mw(a)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=this.c7(a)
r=this.b
o=r[p]
t.a=o
if(o!=null)return o
o=P.M()
t.a=o
r[p]=o
this.eb(a,new P.h_(t,this))
return t.a}if(a instanceof Array){n=a
p=this.c7(n)
r=this.b
o=r[p]
if(o!=null)return o
m=J.S(n)
l=m.gk(n)
o=this.c?new Array(l):n
r[p]=o
for(r=J.b2(o),k=0;C.b.R(k,l);++k)r.i(o,k,this.aZ(m.h(n,k)))
return o}return a}}
P.h_.prototype={
$2:function(a,b){var t,s
t=this.a.a
s=this.b.aZ(b)
J.kH(t,a,s)
return s},
$S:function(a,b){return{func:1,args:[,,]}}}
P.hQ.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(a,b){return{func:1,args:[,,]}}}
P.fZ.prototype={
eb:function(a,b){var t,s,r,q
for(t=Object.keys(a),s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r){q=t[r]
b.$2(q,a[q])}}}
P.hR.prototype={
$1:function(a){return this.a.aq(0,a)},
$S:function(a){return{func:1,args:[,]}}}
P.hS.prototype={
$1:function(a){return this.a.dV(a)},
$S:function(a){return{func:1,args:[,]}}}
P.hv.prototype={
af:function(){return Math.random()},
er:function(){return Math.random()<0.5}}
P.iN.prototype={}
P.hE.prototype={}
P.Q.prototype={}
P.dO.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dP.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dQ.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dR.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dS.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dT.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dU.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dV.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dW.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dX.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dY.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dZ.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e_.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e0.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gB:function(a){return a.z}}
P.e1.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e2.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gB:function(a){return a.z}}
P.e3.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e4.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e9.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ec.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.X.prototype={}
P.a3.prototype={}
P.el.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ex.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return this.V(a,b)},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
V:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.iH]},
$asl:function(){return[P.iH]},
$isi:1,
$asi:function(){return[P.iH]},
$asm:function(){return[P.iH]}}
P.eI.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eX.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return this.V(a,b)},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
V:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.iL]},
$asl:function(){return[P.iL]},
$isi:1,
$asi:function(){return[P.iL]},
$asm:function(){return[P.iL]}}
P.f3.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.f7.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.f8.prototype={
gk:function(a){return a.length}}
P.fb.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fc.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fz.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return this.V(a,b)},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
V:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.w]},
$asl:function(){return[P.w]},
$isi:1,
$asi:function(){return[P.w]},
$asm:function(){return[P.w]}}
P.t.prototype={}
P.fA.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bm.prototype={}
P.bn.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fL.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return this.V(a,b)},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
V:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.iS]},
$asl:function(){return[P.iS]},
$isi:1,
$asi:function(){return[P.iS]},
$asm:function(){return[P.iS]}}
P.fT.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.cG.prototype={}
P.cH.prototype={}
P.cN.prototype={}
P.cO.prototype={}
P.cX.prototype={}
P.cY.prototype={}
P.d2.prototype={}
P.d3.prototype={}
P.dp.prototype={
gk:function(a){return a.length}}
P.dq.prototype={
gk:function(a){return a.length}}
P.aL.prototype={}
P.eY.prototype={
gk:function(a){return a.length}}
P.fg.prototype={
bH:function(a,b){return a.activeTexture(b)},
bK:function(a,b,c){return a.attachShader(b,c)},
bL:function(a,b,c){return a.bindBuffer(b,c)},
bM:function(a,b,c){return a.bindFramebuffer(b,c)},
bN:function(a,b,c){return a.bindTexture(b,c)},
bO:function(a,b){return a.blendEquation(b)},
bP:function(a,b,c){return a.blendFunc(b,c)},
bQ:function(a,b,c,d){return a.bufferData(b,c,d)},
bR:function(a,b){return a.clear(b)},
bS:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bU:function(a,b){return a.compileShader(b)},
bV:function(a){return a.createBuffer()},
bW:function(a){return a.createProgram()},
bY:function(a,b){return a.createShader(b)},
bZ:function(a){return a.createTexture()},
c0:function(a,b){return a.depthMask(b)},
c1:function(a,b){return a.disable(b)},
c2:function(a,b,c,d){return a.drawArrays(b,c,d)},
c3:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c4:function(a,b){return a.enable(b)},
c5:function(a,b){return a.enableVertexAttribArray(b)},
aw:function(a){return P.hT(a.getContextAttributes())},
b1:function(a){return a.getError()},
b2:function(a,b){return a.getProgramInfoLog(b)},
b3:function(a,b,c){return a.getProgramParameter(b,c)},
b4:function(a,b){return a.getShaderInfoLog(b)},
b5:function(a,b,c){return a.getShaderParameter(b,c)},
b6:function(a,b,c){return a.getUniformLocation(b,c)},
c9:function(a,b){return a.linkProgram(b)},
ce:function(a,b,c){return a.pixelStorei(b,c)},
ba:function(a,b,c){return a.shaderSource(b,c)},
bb:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aW:function(a,b,c,d,e,f,g,h,i,j){this.aP(a,b,c,d,e,f,g)
return},
ck:function(a,b,c,d,e,f,g){return this.aW(a,b,c,d,e,f,g,null,null,null)},
aP:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cl:function(a,b,c,d){return a.texParameterf(b,c,d)},
cm:function(a,b,c,d){return a.texParameteri(b,c,d)},
co:function(a,b,c){return a.uniform1f(b,c)},
cp:function(a,b,c){return a.uniform1fv(b,c)},
cq:function(a,b,c){return a.uniform1i(b,c)},
cr:function(a,b,c){return a.uniform1iv(b,c)},
cs:function(a,b,c){return a.uniform2fv(b,c)},
ct:function(a,b,c){return a.uniform3fv(b,c)},
cu:function(a,b,c){return a.uniform4fv(b,c)},
cv:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cw:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cA:function(a,b){return a.useProgram(b)},
cC:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cE:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fh.prototype={
dQ:function(a,b){return a.beginTransformFeedback(b)},
dT:function(a,b){return a.bindVertexArray(b)},
dZ:function(a){return a.createVertexArray()},
e5:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
e6:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
e7:function(a){return a.endTransformFeedback()},
eE:function(a,b,c,d){this.dM(a,b,c,d)
return},
dM:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
eG:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bH:function(a,b){return a.activeTexture(b)},
bK:function(a,b,c){return a.attachShader(b,c)},
bL:function(a,b,c){return a.bindBuffer(b,c)},
bM:function(a,b,c){return a.bindFramebuffer(b,c)},
bN:function(a,b,c){return a.bindTexture(b,c)},
bO:function(a,b){return a.blendEquation(b)},
bP:function(a,b,c){return a.blendFunc(b,c)},
bQ:function(a,b,c,d){return a.bufferData(b,c,d)},
bR:function(a,b){return a.clear(b)},
bS:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bU:function(a,b){return a.compileShader(b)},
bV:function(a){return a.createBuffer()},
bW:function(a){return a.createProgram()},
bY:function(a,b){return a.createShader(b)},
bZ:function(a){return a.createTexture()},
c0:function(a,b){return a.depthMask(b)},
c1:function(a,b){return a.disable(b)},
c2:function(a,b,c,d){return a.drawArrays(b,c,d)},
c3:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c4:function(a,b){return a.enable(b)},
c5:function(a,b){return a.enableVertexAttribArray(b)},
aw:function(a){return P.hT(a.getContextAttributes())},
b1:function(a){return a.getError()},
b2:function(a,b){return a.getProgramInfoLog(b)},
b3:function(a,b,c){return a.getProgramParameter(b,c)},
b4:function(a,b){return a.getShaderInfoLog(b)},
b5:function(a,b,c){return a.getShaderParameter(b,c)},
b6:function(a,b,c){return a.getUniformLocation(b,c)},
c9:function(a,b){return a.linkProgram(b)},
ce:function(a,b,c){return a.pixelStorei(b,c)},
ba:function(a,b,c){return a.shaderSource(b,c)},
bb:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aW:function(a,b,c,d,e,f,g,h,i,j){this.aP(a,b,c,d,e,f,g)
return},
ck:function(a,b,c,d,e,f,g){return this.aW(a,b,c,d,e,f,g,null,null,null)},
aP:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cl:function(a,b,c,d){return a.texParameterf(b,c,d)},
cm:function(a,b,c,d){return a.texParameteri(b,c,d)},
co:function(a,b,c){return a.uniform1f(b,c)},
cp:function(a,b,c){return a.uniform1fv(b,c)},
cq:function(a,b,c){return a.uniform1i(b,c)},
cr:function(a,b,c){return a.uniform1iv(b,c)},
cs:function(a,b,c){return a.uniform2fv(b,c)},
ct:function(a,b,c){return a.uniform3fv(b,c)},
cu:function(a,b,c){return a.uniform4fv(b,c)},
cv:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cw:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cA:function(a,b){return a.useProgram(b)},
cC:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cE:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fr.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return P.hT(this.dF(a,b))},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
dF:function(a,b){return a.item(b)},
$isj:1,
$asj:function(){return[P.aR]},
$asl:function(){return[P.aR]},
$isi:1,
$asi:function(){return[P.aR]},
$asm:function(){return[P.aR]}}
P.cT.prototype={}
P.cU.prototype={}
B.ig.prototype={
$1:function(a){$.$get$hU().i(0,a.which,!0)},
$S:function(a){return{func:1,args:[W.aw]}}}
B.ih.prototype={
$1:function(a){$.$get$hU().i(0,a.which,null)},
$S:function(a){return{func:1,args:[W.aw]}}}
B.ii.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.mt=t
$.mu=C.b.Z(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.j9=s-C.b.I(window.innerWidth,2)
$.kx=-(t-C.b.I(window.innerHeight,2))},
$S:function(a){return{func:1,args:[W.K]}}}
B.ij.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.bF=t-C.b.I(window.innerWidth,2)
$.bG=-(s-C.b.I(window.innerHeight,2))
if(a.button===2)$.$get$bE().i(0,"right",!0)
else $.$get$bE().i(0,"left",!0)},
$S:function(a){return{func:1,args:[W.K]}}}
B.ik.prototype={
$1:function(a){if(a.button===2)$.$get$bE().i(0,"right",null)
else $.$get$bE().i(0,"left",null)},
$S:function(a){return{func:1,args:[W.K]}}}
B.eZ.prototype={
dc:function(a,b,c,d){var t
d.toString
W.U(d,W.lw(d),new B.f_(this),!1,W.aD)
W.U(d,"mousemove",new B.f0(this),!1,W.K)
t=W.aA
W.U(d,"touchstart",new B.f1(),!1,t)
W.U(d,"touchmove",new B.f2(this),!1,t)
B.mP(null)}}
B.f_.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.ak.ge_(a)*r.k3
if(C.c.Z(r.fy,t)>0)r.fy=C.c.Z(r.fy,t)}catch(q){s=H.a0(q)
P.P(s)}},
$S:function(a){return{func:1,args:[W.aD]}}}
B.f0.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=t.go+C.b.Z($.j9,$.bF)*0.01
s=t.id
r=$.bG
q=$.kx
t.id=s+(r-q)*0.01
$.bF=$.j9
$.bG=q}},
$S:function(a){return{func:1,args:[W.K]}}}
B.f1.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.a2(t.clientX)
C.c.a2(t.clientY)
$.bF=s
C.c.a2(t.clientX)
$.bG=C.c.a2(t.clientY)},
$S:function(a){return{func:1,args:[W.aA]}}}
B.f2.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.a2(t.clientX)
t=C.c.a2(t.clientY)
r=this.a
r.go=r.go+C.b.Z(s,$.bF)*0.01
r.id=r.id+($.bG-t)*0.01
$.bF=s
$.bG=t},
$S:function(a){return{func:1,args:[W.aA]}}}
G.eN.prototype={}
G.ct.prototype={
L:function(a,b){var t=this.d
if(H.ac(!t.C(0,a)))H.ai("uniform "+a+" already set")
t.i(0,a,b)},
bi:function(){return this.d},
j:function(a){var t,s,r,q
t=H.F(["{"+new H.ag(H.hZ(this),null).j(0)+"}["+this.a+"]"],[P.w])
for(s=this.d,r=s.gG(s),r=r.gA(r);r.q();){q=r.gt(r)
C.a.l(t,H.e(q)+": "+H.e(s.h(0,q)))}return C.a.ae(t,"\n")}}
G.dr.prototype={}
G.dt.prototype={
c6:function(a,b,c){J.kZ(this.a,b)
if(c>0)J.lk(this.a,b,c)},
cD:function(a,b,c,d,e,f,g,h){J.ip(this.a,34962,b)
J.ll(this.a,c,d,e,!1,g,h)}}
G.ef.prototype={}
G.e5.prototype={}
G.e6.prototype={}
G.ei.prototype={
bg:function(a){var t=this.e
H.b(!t.C(0,a))
H.b(C.h.cT(a,"a"))
switch($.$get$O().h(0,a).a){case"vec2":t.i(0,a,H.F([],[T.aa]))
break
case"vec3":t.i(0,a,H.F([],[T.o]))
break
case"vec4":t.i(0,a,H.F([],[T.ah]))
break
case"float":t.i(0,a,H.F([],[P.R]))
break
case"uvec4":t.i(0,a,H.F([],[[P.i,P.x]]))
break
default:if(H.ac(!1))H.ai("unknown type for "+a)}},
d0:function(a){var t,s,r,q,p,o
H.b(a.length===3)
t=this.d
s=t.length
C.a.l(this.b,new G.e5(s,s+1,s+2))
for(r=a.length,q=0;q<a.length;a.length===r||(0,H.C)(a),++q){p=a[q]
o=new T.o(new Float32Array(3))
o.J(p)
C.a.l(t,o)}},
cZ:function(a,b){var t,s,r,q,p,o,n
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.C)(b),++q){p=b[q]
o=new Float32Array(2)
n=p.a
o[1]=n[1]
o[0]=n[0]
r.l(t,new T.aa(o))}},
d_:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.C)(b),++q){p=b[q]
o=new T.o(new Float32Array(3))
o.J(p)
r.l(t,o)}},
d1:function(a){var t,s,r,q,p,o
H.b(a.length===4)
t=this.d
s=t.length
C.a.l(this.c,new G.e6(s,s+1,s+2,s+3))
for(r=a.length,q=0;q<a.length;a.length===r||(0,H.C)(a),++q){p=a[q]
o=new T.o(new Float32Array(3))
o.J(p)
C.a.l(t,o)}},
d7:function(){var t,s,r,q,p,o,n,m,l
t=this.b
H.b(t.length>0||this.c.length>0)
s=this.c
r=new Array(t.length*3+s.length*6)
r.fixed$length=Array
q=H.F(r,[P.x])
for(r=t.length,p=0,o=0;o<r;++o){n=t[o]
q[p]=n.a
q[p+1]=n.b
q[p+2]=n.c
p+=3}for(t=s.length,o=0;o<t;++o){m=s[o]
r=m.a
q[p]=r
q[p+1]=m.b
l=m.c
q[p+2]=l
q[p+3]=r
q[p+4]=l
q[p+5]=m.d
p+=6}H.b(p===q.length)
return q},
j:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gG(s),r=r.gA(r);r.q();){q=r.gt(r)
p=$.$get$O().h(0,q).a
C.a.l(t,H.e(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.ae(t," ")}}
G.cr.prototype={}
G.cq.prototype={}
G.c6.prototype={}
G.eK.prototype={
bf:function(a,b,c){var t,s
if(C.h.a6(a,0)===105){if(H.ac(C.b.az(b.length,c)===this.z))H.ai("ChangeAttribute "+this.z)}else{t=C.b.az(b.length,c)
if(H.ac(t===(this.ch.length/3|0)))H.ai("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.ip(t.a,34962,s)
J.je(t.a,34962,b,35048)},
d8:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
a5:function(a,b,c){var t,s,r,q,p,o
t=J.jb(a,0)===105
if(t&&this.z===0)this.z=C.b.az(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.iq(r.a))
this.bf(a,b,c)
q=$.$get$O().h(0,a)
if(q==null)throw H.c("Unknown canonical "+a)
p=this.x
if(H.ac(p.C(0,a)))H.ai("unexpected attribute "+a)
o=p.h(0,a)
J.di(r.a,this.e)
r.c6(0,o,t?1:0)
r.cD(0,s.h(0,a),o,q.bh(),5126,!1,0,0)},
be:function(a){var t,s,r,q,p
t=this.r
s=this.d
t.i(0,"aPosition",J.iq(s.a))
this.ch=a
this.bf("aPosition",a,3)
r=$.$get$O().h(0,"aPosition")
if(r==null)throw H.c("Unknown canonical aPosition")
q=this.x
H.b(q.C(0,"aPosition"))
p=q.h(0,"aPosition")
J.di(s.a,this.e)
s.c6(0,p,0)
s.cD(0,t.h(0,"aPosition"),p,r.bh(),5126,!1,0,0)},
j:function(a){var t,s,r,q
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,r=t.gG(t),r=r.gA(r);r.q();){q=r.gt(r)
C.a.l(s,H.e(q)+":"+t.h(0,q).length)}return"MESH["+this.a+"] "+C.a.ae(s,"  ")},
saI:function(a){this.cx=a}}
G.f4.prototype={
d2:function(a,b){var t=C.b.cG(a,b)
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
o=new T.o(new Float32Array(3))
o.W(r,q,p)
p=this.d
p.i(0,"uEyePosition",o)
o=this.cy
o.J(t)
t=o.a
t[12]=0
t[13]=0
t[14]=0
t[15]=1
n=-s[12]
m=-s[13]
l=-s[14]
s=J.r(n)
r=!!s.$isah
k=r?s.gaj(n):1
if(!!s.$iso){j=s.gm(n)
m=s.gn(n)
l=s.gB(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
l=s.gB(n)
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
a3.J(this.db)
a3.cd(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.ff.prototype={
de:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.C)(t),++o){n=t[o]
r.i(0,n,J.jh(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.C)(t),++o){n=t[o]
r.i(0,n,J.jh(q.a,p,n))}},
dh:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gk(t)===s.gk(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gG(s),s=s.gA(s);s.q();){q=s.gt(s)
if(!t.C(0,q))C.a.l(r,q)}for(t=this.x,s=new P.bq(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.q();){q=s.d
if(!t.a0(0,q))C.a.l(r,q)}return r},
di:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gG(b),s=s.gA(s),r=this.d,q=this.y,p=this.z,o=0;s.q();){n=s.gt(s)
switch(J.jb(n,0)){case 117:if(q.C(0,n)){m=b.h(0,n)
if(p.C(0,n))H.b4("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$O().h(0,n)
if(l==null)H.D("unknown "+n)
H.b(q.C(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.iu(r.a,k,m)
else if(!!J.r(m).$isjA)J.li(r.a,k,m)
break
case"float":if(l.c===0)J.lg(r.a,k,m)
else if(!!J.r(m).$iseb)J.lh(r.a,k,m)
break
case"mat4":if(l.c===0){n=H.al(m,"$isH").a
J.jn(r.a,k,!1,n)}else if(!!J.r(m).$iseb)J.jn(r.a,k,!1,m)
else if(H.ac(!1))H.ai("bad unform: "+n)
break
case"mat3":if(l.c===0){n=H.al(m,"$isY").a
J.jm(r.a,k,!1,n)}else if(!!J.r(m).$iseb)J.jm(r.a,k,!1,m)
else if(H.ac(!1))H.ai("bad unform: "+n)
break
case"vec4":n=l.c
j=r.a
if(n===0)J.jl(j,k,H.al(m,"$isah").a)
else J.jl(j,k,m)
break
case"vec3":n=l.c
j=r.a
if(n===0)J.jk(j,k,H.al(m,"$iso").a)
else J.jk(j,k,m)
break
case"vec2":n=l.c
j=r.a
if(n===0)J.jj(j,k,H.al(m,"$isaa").a)
else J.jj(j,k,m)
break
case"sampler2D":case"sampler2DShadow":n=C.b.Y(33984,this.ch)
J.jc(r.a,n)
n=H.al(m,"$isbo").b
J.bH(r.a,3553,n)
n=this.ch
J.iu(r.a,k,n)
this.ch=this.ch+1
break
case"samplerCube":H.b(n==="uCubeTexture")
n=C.b.Y(33984,this.ch)
J.jc(r.a,n)
n=H.al(m,"$isbo").b
J.bH(r.a,34067,n)
n=this.ch
J.iu(r.a,k,n)
this.ch=this.ch+1
break
default:H.b4("Error: unknow uniform type: "+j)
H.b(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":n=J.y(m,!0)
j=r.a
if(n)J.dj(j,2929)
else J.ir(j,2929)
break
case"cStencilFunc":H.al(m,"$iscr")
n=m.a
j=r.a
if(n===1281)J.ir(j,2960)
else{J.dj(j,2960)
j=m.b
i=m.c
J.lb(r.a,n,j,i)}break
case"cDepthWrite":J.kT(r.a,m)
break
case"cBlendEquation":H.al(m,"$iscq")
n=m.a
j=r.a
if(n===1281)J.ir(j,3042)
else{J.dj(j,3042)
j=m.b
i=m.c
J.kM(r.a,j,i)
J.kL(r.a,n)}break}++o
break}}h=P.jx(0,0,0,Date.now()-new P.aq(t,!1).a,0,0)
""+o
h.j(0)},
d6:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
Date.now()
t=this.d
J.lj(t.a,this.r)
this.ch=0
this.z.T(0)
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.C)(b),++r){q=b[r]
this.di(q.a,q.bi())}s=this.Q
s.T(0)
for(p=a.cy,p=p.gG(p),p=p.gA(p);p.q();)s.l(0,p.gt(p))
o=this.dh()
if(o.length!==0)P.P("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(o)))
s=a.d
p=a.e
J.di(s.a,p)
n=this.e.f.length>0
p=a.f
s=a.d8()
m=a.Q
l=a.z
if(n)J.kJ(t.a,p)
if(m!==-1){k=t.a
if(l>1)J.kX(k,p,s,m,0,l)
else J.kW(k,p,s,m,0)}else{m=t.a
if(l>1)J.kV(m,p,0,s,l)
else J.kU(m,p,0,s)}if(n)J.l_(t.a)}}
G.v.prototype={
bh:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.b(!1)
return-1}}}
G.fm.prototype={
bc:function(a){var t,s,r,q
H.b(this.b==null)
for(t=this.c,s=this.x,r=0;r<1;++r){q=a[r]
H.b($.$get$O().C(0,q))
H.b(!C.a.a0(t,q))
C.a.l(t,q)
s.i(0,q,this.r);++this.r}C.a.ax(t)},
aA:function(a){var t,s,r,q
H.b(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.C)(a),++r){q=a[r]
if(H.ac($.$get$O().C(0,q)))H.ai("missing uniform "+q)
H.b(!C.a.a0(s,q))
C.a.l(s,q)}C.a.ax(s)},
bd:function(a){var t,s,r
H.b(this.b==null)
for(t=this.e,s=0;s<1;++s){r=a[s]
H.b($.$get$O().C(0,r))
H.b(!C.a.a0(t,r))
C.a.l(t,r)}C.a.ax(t)},
bj:function(a,b){H.b(this.b==null)
this.b=this.dj(!0,a,b)},
aB:function(a){return this.bj(a,null)},
dj:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.b(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.C)(t),++o){n=t[o]
m=$.$get$O().h(0,n)
C.a.l(q,"layout (location="+H.e(p.h(0,n))+") in "+m.a+" "+H.e(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.C)(t),++o){k=t[o]
m=$.$get$O().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.e(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.C)(t),++o){k=t[o]
m=$.$get$O().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.e(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.C)(t),++o){k=t[o]
m=$.$get$O().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.e(k)+j+";")}C.a.l(q,"")
if(c!=null)C.a.bI(q,c)
C.a.l(q,"void main(void) {")
C.a.bI(q,b)
C.a.l(q,"}")
return C.a.ae(q,"\n")}}
G.fp.prototype={
en:function(a0,a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
t=this.d.a
s=t[12]
r=t[13]
q=t[14]
a1=new T.o(new Float32Array(3))
a1.W(0,1,0)
p=this.e
o=p.a
o[0]=t[12]
o[1]=t[13]
o[2]=t[14]
o=new Float32Array(3)
n=new T.o(o)
n.J(p)
m=a0.a
o[0]=o[0]-m[0]
o[1]=o[1]-m[1]
o[2]=o[2]-m[2]
n.av(0)
l=a1.c_(n)
l.av(0)
k=n.c_(l)
k.av(0)
j=l.aT(p)
i=k.aT(p)
p=n.aT(p)
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
ca:function(a){return this.en(a,null)}}
G.fE.prototype={
d9:function(a,b){var t=this.e
if(t!==1)J.ld(a.a,b,34046,t)
J.ji(a.a,b,10240,this.r)
J.ji(a.a,b,10241,this.f)}}
G.bo.prototype={
j:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.em.prototype={
df:function(a){var t,s
t=this.d
s=this.c
J.bH(t.a,s,this.b)
J.lc(t.a,s,0,6408,6408,5121,a)}}
R.ch.prototype={
cg:function(a){var t,s,r
t=this.db
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.P("size change "+H.e(s)+" "+H.e(r))
this.dx.d2(s,r)
this.z=s
this.Q=r}}
A.bg.prototype={
j:function(a){return"NODE["+this.a+"]"}}
A.bj.prototype={}
A.fe.prototype={
dd:function(a,b,c){if(this.d==null)this.d=new G.ef(this.e,null,null,null,null)},
d5:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.d
s=this.r
r=this.z
q=this.Q
p=t.a
t=t.b
J.kK(p.a,36160,t)
H.b(r>0&&q>0)
J.lm(p.a,this.x,this.y,r,q)
if(s!==0)J.kN(p.a,s)
for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.C)(t),++o){n=t[o]
m=n.e
C.a.l(m,new G.ct(P.M(),"transforms",!1,!0))
l=new T.H(new Float32Array(16))
l.K()
for(r=n.f,q=r.length,p=n.d,k=0;k<r.length;r.length===q||(0,H.C)(r),++k)A.kq(p,r[k],l,a,m)
m.pop()}},
d4:function(){return this.d5(null)}}
D.eC.prototype={
$1:function(a){this.a.aq(0,W.mg(this.b.response))},
$S:function(a){return{func:1,args:[,]}}}
A.i_.prototype={
$2:function(a,b){var t=536870911&a+J.b6(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(a,b){return{func:1,args:[P.x,P.B]}}}
T.Y.prototype={
J:function(a){var t,s
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
j:function(a){return"[0] "+this.O(0).j(0)+"\n[1] "+this.O(1).j(0)+"\n[2] "+this.O(2).j(0)+"\n"},
h:function(a,b){return this.a[b]},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.Y){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gu:function(a){return A.df(this.a)},
O:function(a){var t,s
t=new Float32Array(3)
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.o(t)},
dY:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
if(g===0){this.J(a)
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
T.H.prototype={
a4:function(a,b,c){H.b(a<4)
H.b(b<4)
this.a[b*4+a]=c},
J:function(a){var t,s
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
j:function(a){return"[0] "+this.O(0).j(0)+"\n[1] "+this.O(1).j(0)+"\n[2] "+this.O(2).j(0)+"\n[3] "+this.O(3).j(0)+"\n"},
h:function(a,b){return this.a[b]},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.H){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gu:function(a){return A.df(this.a)},
O:function(a){var t,s
t=new Float32Array(4)
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.ah(t)},
K:function(){var t=this.a
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
aS:function(a){var t,s
t=a.a
s=this.a
t[0]=s[0]
t[1]=s[1]
t[2]=s[2]
t[3]=s[4]
t[4]=s[5]
t[5]=s[6]
t[6]=s[8]
t[7]=s[9]
t[8]=s[10]},
cd:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.ce.prototype={
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gB:function(a){return this.a[2]},
gaj:function(a){return this.a[3]},
cQ:function(a,b,c,d){var t=this.a
t[0]=a
t[1]=b
t[2]=c
t[3]=d},
b7:function(a,b){var t,s,r,q,p
t=Math.sqrt(a.gX())
if(t===0)return
s=b*0.5
r=Math.sin(s)/t
q=a.a
p=this.a
p[0]=q[0]*r
p[1]=q[1]*r
p[2]=q[2]*r
p[3]=Math.cos(s)},
b8:function(a){var t,s,r,q,p,o,n,m,l,k
t=a.a
s=t[0]
r=t[4]
q=t[8]
p=0+s+r+q
if(p>0){o=Math.sqrt(p+1)
s=this.a
s[3]=o*0.5
o=0.5/o
s[0]=(t[5]-t[7])*o
s[1]=(t[6]-t[2])*o
s[2]=(t[1]-t[3])*o}else{if(s<r)n=r<q?2:1
else n=s<q?2:0
m=(n+1)%3
l=(n+2)%3
s=n*3
r=m*3
q=l*3
o=Math.sqrt(t[s+n]-t[r+m]-t[q+l]+1)
k=this.a
k[n]=o*0.5
o=0.5/o
k[3]=(t[r+l]-t[q+m])*o
k[m]=(t[s+m]+t[r+n])*o
k[l]=(t[s+l]+t[q+n])*o}},
gX:function(){var t,s,r,q,p
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=t[3]
return s*s+r*r+q*q+p*p},
gk:function(a){return Math.sqrt(this.gX())},
h:function(a,b){return this.a[b]},
j:function(a){var t=this.a
return H.e(t[0])+", "+H.e(t[1])+", "+H.e(t[2])+" @ "+H.e(t[3])}}
T.aa.prototype={
j:function(a){var t=this.a
return"["+H.e(t[0])+","+H.e(t[1])+"]"},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aa){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gu:function(a){return A.df(this.a)},
h:function(a,b){return this.a[b]},
gk:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.o.prototype={
W:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
J:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
j:function(a){var t=this.a
return"["+H.e(t[0])+","+H.e(t[1])+","+H.e(t[2])+"]"},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.o){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gu:function(a){return A.df(this.a)},
h:function(a,b){return this.a[b]},
gk:function(a){return Math.sqrt(this.gX())},
gX:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
av:function(a){var t,s,r
t=Math.sqrt(this.gX())
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
c_:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.o(new Float32Array(3))
t.W(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gB:function(a){return this.a[2]}}
T.ah.prototype={
j:function(a){var t=this.a
return H.e(t[0])+","+H.e(t[1])+","+H.e(t[2])+","+H.e(t[3])},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.ah){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gu:function(a){return A.df(this.a)},
h:function(a,b){return this.a[b]},
gk:function(a){var t,s,r,q
t=this.a
s=t[0]
r=t[1]
q=t[2]
t=t[3]
return Math.sqrt(s*s+r*r+q*q+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gB:function(a){return this.a[2]},
gaj:function(a){return this.a[3]}}
F.ia.prototype={
$1:function(a8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
t={}
s=Y.lD(J.aJ(a8,0))
r=this.a
q=r.d
p=G.jJ("",q.d,4,q.e.x)
p.be(G.jz(s.d,null))
q=s.d7()
o=p.d
p.y=J.iq(o.a)
H.b(p.ch!=null)
n=p.ch.length
if(n<768){p.saI(new Uint8Array(H.hN(q)))
p.Q=5121}else if(n<196608){p.saI(new Uint16Array(H.hN(q)))
p.Q=5123}else{p.saI(new Uint32Array(H.hN(q)))
p.Q=5125}J.di(o.a,p.e)
q=p.y
n=p.cx
m=J.r(n)
H.b(!!m.$isk7||!!m.$isk8||!!m.$isk9)
J.ip(o.a,34963,q)
J.je(o.a,34963,n,35048)
G.mc(s,p)
q=new Float32Array(9)
o=new T.H(new Float32Array(16))
o.K()
n=new Float32Array(16)
m=new T.H(n)
m.K()
l=new Float32Array(3)
k=new Float32Array(3)
j=new Float32Array(3)
i=new Float32Array(3)
h=Math.cos(1.57)
g=Math.sin(1.57)
f=n[4]
e=n[8]
d=n[5]
c=n[9]
b=n[6]
a=n[10]
a0=n[7]
a1=n[11]
a2=-g
n[4]=f*h+e*g
n[5]=d*h+c*g
n[6]=b*h+a*g
n[7]=a0*h+a1*g
n[8]=f*a2+e*h
n[9]=d*a2+c*h
n[10]=b*a2+a*h
n[11]=a0*a2+a1*h
h=Math.cos(3.14)
g=Math.sin(3.14)
a1=n[0]
a2=n[4]
a0=n[1]
a=n[5]
b=n[2]
c=n[6]
d=n[3]
e=n[7]
f=-g
n[0]=a1*h+a2*g
n[1]=a0*h+a*g
n[2]=b*h+c*g
n[3]=d*h+e*g
n[4]=a1*f+a2*h
n[5]=a0*f+a*h
n[6]=b*f+c*h
n[7]=d*f+e*h
e=[]
n=new Float32Array(9)
f=new T.H(new Float32Array(16))
f.K()
d=new T.H(new Float32Array(16))
d.K()
c=new Float32Array(3)
b=new Float32Array(3)
a=new Float32Array(3)
a3=new A.bg(null,null,e,new T.Y(n),f,d,new T.o(c),new T.o(b),new T.o(a),new T.o(new Float32Array(3)),"wrapper",!1,!0)
C.a.l(e,new A.bg(this.b,p,[],new T.Y(q),o,m,new T.o(l),new T.o(k),new T.o(j),new T.o(i),p.a,!1,!0))
q=new T.o(new Float32Array(3))
q.W(100,0,-100)
a3.ca(q)
a4=new T.o(new Float32Array(3))
a4.W(0,0,1)
a5=T.jQ()
a6=new T.Y(new Float32Array(9))
d.aS(a6)
a5.b8(a6)
a7=T.jQ()
a7.b7(a4,3.14)
t.a=0
H.b(!0)
C.a.l(r.f,a3)
t.b=0
new F.ib(t,this.d,new F.ic(t,a5,a7,a3,this.c,a4),this.e).$1(0)},
$S:function(a){return{func:1,args:[P.i]}}}
F.ic.prototype={
$1:function(b7){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
t=this.a
s=t.a
if(s<1){r=s+0.2*b7/1000
t.a=r
t=this.b.a
q=t[0]
p=t[1]
o=t[2]
n=t[3]
t=this.c.a
m=t[0]
l=t[1]
k=t[2]
j=t[3]
i=q*m+p*l+o*k+n*j
if(i<0){i=-i
m=-m
l=-l
k=-k
j=-j}h=1-r
if(1-i>0.000001){g=Math.acos(i)
f=Math.sin(g)
h=Math.sin(h*g)/f
e=Math.sin(r*g)/f}else e=r
t=new Float32Array(4)
d=new T.ce(t)
d.cQ(h*q+e*m,h*p+e*l,h*o+e*k,h*n+e*j)
s=new Float32Array(9)
c=d.gX()
H.b(c!==0)
b=2/c
a=t[0]
a0=t[1]
a1=t[2]
a2=t[3]
a3=a*b
a4=a0*b
a5=a1*b
a6=a2*a3
a7=a2*a4
a8=a2*a5
a9=a*a3
b0=a*a4
b1=a*a5
b2=a0*a4
b3=a0*a5
b4=a1*a5
s[0]=1-(b2+b4)
s[1]=b0+a8
s[2]=b1-a7
s[3]=b0-a8
s[4]=1-(a9+b4)
s[5]=b3+a6
s[6]=b1+a7
s[7]=b3-a6
s[8]=1-(a9+b2)
t=this.d.d.a
t[0]=s[0]
t[1]=s[1]
t[2]=s[2]
t[4]=s[3]
t[5]=s[4]
t[6]=s[5]
t[8]=s[6]
t[9]=s[7]
t[10]=s[8]
return}else{P.P("new rotation")
t.a=0
t=this.e
s=this.f
if(t.er()){s.W(t.af(),t.af(),t.af())
s.av(0)
b5=6.283185307179586*t.af()}else{s.W(1,0,0)
b5=0}P.P("new rotation axis: "+s.j(0))
b6=new T.Y(new Float32Array(9))
this.d.d.aS(b6)
this.b.b8(b6)
this.c.b7(s,b5)}},
$S:function(a){return{func:1,v:true,args:[P.R]}}}
F.ib.prototype={
$1:function(b1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
t=this.a
s=t.b
t.b=b1+0
t=this.b
t.go+=0.001
r=t.k4
if(r.h(0,37)!=null)t.go+=0.03
else if(r.h(0,39)!=null)t.go-=0.03
if(r.h(0,38)!=null)t.id+=0.03
else if(r.h(0,40)!=null)t.id-=0.03
if(r.h(0,33)!=null)t.fy*=0.99
else if(r.h(0,34)!=null)t.fy*=1.01
if(r.h(0,32)!=null){t.go=0
t.id=0}r=C.c.dU(t.id,-1.4707963267948965,1.4707963267948965)
t.id=r
q=t.fy
p=t.go
o=q*Math.cos(r)
n=Math.cos(p)
r=Math.sin(r)
p=Math.sin(p)
m=t.d.a
m[12]=o*n
m[13]=q*r
m[14]=o*p
p=t.k2
r=p.a
m[12]=m[12]+r[0]
m[13]=m[13]+r[1]
m[14]=m[14]+r[2]
t.ca(p)
p=t.f
r=p.a
r[0]=m[2]
r[1]=m[6]
r[2]=m[10]
t=-t.k1
l=Math.sqrt(p.gX())
k=r[0]/l
j=r[1]/l
i=r[2]/l
h=Math.cos(t)
g=Math.sin(t)
f=1-h
e=k*k*f+h
t=i*g
d=k*j*f-t
r=j*g
c=k*i*f+r
b=j*k*f+t
a=j*j*f+h
t=k*g
a0=j*i*f-t
a1=i*k*f-r
a2=i*j*f+t
a3=i*i*f+h
t=m[0]
r=m[4]
p=m[8]
q=m[1]
n=m[5]
a4=m[9]
a5=m[2]
a6=m[6]
a7=m[10]
a8=m[3]
a9=m[7]
b0=m[11]
m[0]=t*e+r*b+p*a1
m[1]=q*e+n*b+a4*a1
m[2]=a5*e+a6*b+a7*a1
m[3]=a8*e+a9*b+b0*a1
m[4]=t*d+r*a+p*a2
m[5]=q*d+n*a+a4*a2
m[6]=a5*d+a6*a+a7*a2
m[7]=a8*d+a9*a+b0*a2
m[8]=t*c+r*a0+p*a3
m[9]=q*c+n*a0+a4*a3
m[10]=a5*c+a6*a0+a7*a3
m[11]=a8*c+a9*a0+b0*a3
this.c.$1(b1-s)
this.d.d4()
C.al.gdP(window).aX(this)},
$S:function(a){return{func:1,v:true,args:[P.a_]}}}
J.a.prototype.cW=J.a.prototype.j
J.bc.prototype.cX=J.bc.prototype.j;(function installTearOffs(){installTearOff(H.aW.prototype,"gel",0,0,0,null,["$0"],["at"],0)
installTearOff(H.Z.prototype,"gcI",0,0,0,null,["$1"],["H"],2)
installTearOff(H.aE.prototype,"ge1",0,0,0,null,["$1"],["U"],2)
installTearOff(P,"mp",1,0,0,null,["$1"],["m9"],1)
installTearOff(P,"mq",1,0,0,null,["$1"],["ma"],1)
installTearOff(P,"mr",1,0,0,null,["$1"],["mb"],1)
installTearOff(P,"kn",1,0,0,null,["$0"],["mn"],0)
installTearOff(P.I.prototype,"gdu",0,0,0,null,["$2","$1"],["F","dv"],3)
installTearOff(P,"mx",1,0,0,null,["$2"],["lt"],5)
installTearOff(R.ch.prototype,"gey",0,0,0,null,["$1"],["cg"],4)
installTearOff(F,"kD",1,0,0,null,["$0"],["mJ"],0)})();(function inheritance(){inherit(P.B,null)
var t=P.B
inherit(H.iE,t)
inherit(J.a,t)
inherit(J.dn,t)
inherit(P.a4,t)
inherit(H.c3,t)
inherit(P.c0,t)
inherit(H.aO,t)
inherit(H.ao,t)
inherit(H.hB,t)
inherit(H.aW,t)
inherit(H.h9,t)
inherit(H.aF,t)
inherit(H.hA,t)
inherit(H.h5,t)
inherit(H.cg,t)
inherit(H.fG,t)
inherit(H.am,t)
inherit(H.Z,t)
inherit(H.aE,t)
inherit(H.fd,t)
inherit(H.fM,t)
inherit(P.aN,t)
inherit(H.cV,t)
inherit(H.ag,t)
inherit(P.bd,t)
inherit(H.ey,t)
inherit(H.eA,t)
inherit(H.eu,t)
inherit(H.hC,t)
inherit(P.W,t)
inherit(P.iy,t)
inherit(P.h6,t)
inherit(P.cD,t)
inherit(P.I,t)
inherit(P.cu,t)
inherit(P.fv,t)
inherit(P.fw,t)
inherit(P.iQ,t)
inherit(P.aK,t)
inherit(P.hM,t)
inherit(P.fl,t)
inherit(P.hx,t)
inherit(P.bq,t)
inherit(P.iI,t)
inherit(P.l,t)
inherit(P.hz,t)
inherit(P.aH,t)
inherit(P.E,t)
inherit(P.aq,t)
inherit(P.a_,t)
inherit(P.as,t)
inherit(P.cm,t)
inherit(P.iz,t)
inherit(P.he,t)
inherit(P.ee,t)
inherit(P.dN,t)
inherit(P.i,t)
inherit(P.aR,t)
inherit(P.L,t)
inherit(P.iO,t)
inherit(P.aU,t)
inherit(P.w,t)
inherit(P.bl,t)
inherit(P.iT,t)
inherit(W.dz,t)
inherit(W.m,t)
inherit(W.ea,t)
inherit(P.fY,t)
inherit(P.hv,t)
inherit(P.iN,t)
inherit(P.hE,t)
inherit(G.eN,t)
inherit(G.dt,t)
inherit(G.ef,t)
inherit(G.e5,t)
inherit(G.e6,t)
inherit(G.ei,t)
inherit(G.cr,t)
inherit(G.cq,t)
inherit(G.v,t)
inherit(G.fm,t)
inherit(G.fE,t)
inherit(G.bo,t)
inherit(T.Y,t)
inherit(T.H,t)
inherit(T.ce,t)
inherit(T.aa,t)
inherit(T.o,t)
inherit(T.ah,t)
t=J.a
inherit(J.er,t)
inherit(J.et,t)
inherit(J.bc,t)
inherit(J.at,t)
inherit(J.aP,t)
inherit(J.au,t)
inherit(H.bf,t)
inherit(H.aS,t)
inherit(W.d,t)
inherit(W.dk,t)
inherit(W.bN,t)
inherit(W.bO,t)
inherit(W.aM,t)
inherit(W.V,t)
inherit(W.cw,t)
inherit(W.dE,t)
inherit(W.dF,t)
inherit(W.dG,t)
inherit(W.bR,t)
inherit(W.cx,t)
inherit(W.bT,t)
inherit(W.cz,t)
inherit(W.dJ,t)
inherit(W.f,t)
inherit(W.cB,t)
inherit(W.ek,t)
inherit(W.cE,t)
inherit(W.eD,t)
inherit(W.eJ,t)
inherit(W.cI,t)
inherit(W.cL,t)
inherit(W.a6,t)
inherit(W.cP,t)
inherit(W.cR,t)
inherit(W.a7,t)
inherit(W.cW,t)
inherit(W.cZ,t)
inherit(W.fF,t)
inherit(W.d0,t)
inherit(W.fK,t)
inherit(W.fS,t)
inherit(W.fU,t)
inherit(W.d4,t)
inherit(W.d6,t)
inherit(W.d8,t)
inherit(W.da,t)
inherit(W.dc,t)
inherit(P.cG,t)
inherit(P.cN,t)
inherit(P.f7,t)
inherit(P.f8,t)
inherit(P.fb,t)
inherit(P.cX,t)
inherit(P.d2,t)
inherit(P.dp,t)
inherit(P.fg,t)
inherit(P.fh,t)
inherit(P.cT,t)
t=J.bc
inherit(J.f5,t)
inherit(J.aC,t)
inherit(J.av,t)
inherit(J.iD,J.at)
t=J.aP
inherit(J.c1,t)
inherit(J.es,t)
t=P.a4
inherit(H.j,t)
inherit(H.c4,t)
t=H.j
inherit(H.aQ,t)
inherit(H.ez,t)
inherit(H.dM,H.c4)
inherit(H.eH,P.c0)
t=H.aQ
inherit(H.c5,t)
inherit(P.eB,t)
t=H.ao
inherit(H.il,t)
inherit(H.im,t)
inherit(H.hu,t)
inherit(H.ha,t)
inherit(H.eo,t)
inherit(H.ep,t)
inherit(H.hD,t)
inherit(H.fH,t)
inherit(H.fI,t)
inherit(H.io,t)
inherit(H.i4,t)
inherit(H.i5,t)
inherit(H.i6,t)
inherit(H.i7,t)
inherit(H.i8,t)
inherit(H.fB,t)
inherit(H.ev,t)
inherit(H.i0,t)
inherit(H.i1,t)
inherit(H.i2,t)
inherit(P.h2,t)
inherit(P.h1,t)
inherit(P.h3,t)
inherit(P.h4,t)
inherit(P.eh,t)
inherit(P.eg,t)
inherit(P.hf,t)
inherit(P.hn,t)
inherit(P.hj,t)
inherit(P.hk,t)
inherit(P.hl,t)
inherit(P.hh,t)
inherit(P.hm,t)
inherit(P.hg,t)
inherit(P.hq,t)
inherit(P.hr,t)
inherit(P.hp,t)
inherit(P.ho,t)
inherit(P.fx,t)
inherit(P.fy,t)
inherit(P.hP,t)
inherit(P.hH,t)
inherit(P.hG,t)
inherit(P.hI,t)
inherit(P.eG,t)
inherit(P.dK,t)
inherit(P.dL,t)
inherit(W.fu,t)
inherit(W.fX,t)
inherit(W.hd,t)
inherit(P.h_,t)
inherit(P.hQ,t)
inherit(P.hR,t)
inherit(P.hS,t)
inherit(B.ig,t)
inherit(B.ih,t)
inherit(B.ii,t)
inherit(B.ij,t)
inherit(B.ik,t)
inherit(B.f_,t)
inherit(B.f0,t)
inherit(B.f1,t)
inherit(B.f2,t)
inherit(D.eC,t)
inherit(A.i_,t)
inherit(F.ia,t)
inherit(F.ic,t)
inherit(F.ib,t)
t=H.h5
inherit(H.aY,t)
inherit(H.bz,t)
t=P.aN
inherit(H.eW,t)
inherit(H.ew,t)
inherit(H.fQ,t)
inherit(H.fO,t)
inherit(H.ds,t)
inherit(H.fi,t)
inherit(P.bL,t)
inherit(P.aT,t)
inherit(P.a2,t)
inherit(P.fR,t)
inherit(P.fP,t)
inherit(P.bk,t)
inherit(P.du,t)
inherit(P.dD,t)
t=H.fB
inherit(H.fs,t)
inherit(H.b8,t)
inherit(H.h0,P.bL)
inherit(P.eF,P.bd)
inherit(H.a5,P.eF)
t=H.aS
inherit(H.eO,t)
inherit(H.c9,t)
t=H.c9
inherit(H.br,t)
inherit(H.bt,t)
inherit(H.bs,H.br)
inherit(H.ca,H.bs)
inherit(H.bu,H.bt)
inherit(H.cb,H.bu)
t=H.ca
inherit(H.c8,t)
inherit(H.eP,t)
t=H.cb
inherit(H.eQ,t)
inherit(H.eR,t)
inherit(H.eS,t)
inherit(H.eT,t)
inherit(H.eU,t)
inherit(H.cc,t)
inherit(H.eV,t)
t=P.h6
inherit(P.cv,t)
inherit(P.hL,t)
inherit(P.hF,P.hM)
inherit(P.hy,H.a5)
inherit(P.fk,P.fl)
inherit(P.ht,P.fk)
inherit(P.hw,P.ht)
t=P.a_
inherit(P.R,t)
inherit(P.x,t)
t=P.a2
inherit(P.cf,t)
inherit(P.en,t)
t=W.d
inherit(W.z,t)
inherit(W.af,t)
inherit(W.e8,t)
inherit(W.bb,t)
inherit(W.be,t)
inherit(W.f9,t)
inherit(W.ci,t)
inherit(W.bv,t)
inherit(W.bx,t)
inherit(W.fV,t)
inherit(W.fW,t)
inherit(W.bp,t)
inherit(W.iV,t)
inherit(P.dq,t)
inherit(P.aL,t)
t=W.z
inherit(W.bU,t)
inherit(W.an,t)
inherit(W.ar,t)
t=W.bU
inherit(W.h,t)
inherit(P.t,t)
t=W.af
inherit(W.bK,t)
inherit(W.ej,t)
inherit(W.eE,t)
t=W.h
inherit(W.dl,t)
inherit(W.dm,t)
inherit(W.bM,t)
inherit(W.ed,t)
inherit(W.fj,t)
t=W.aM
inherit(W.dv,t)
inherit(W.dx,t)
inherit(W.dy,t)
inherit(W.dB,t)
t=W.V
inherit(W.dw,t)
inherit(W.dA,t)
inherit(W.dC,t)
inherit(W.b9,W.cw)
inherit(W.dH,W.bR)
inherit(W.cy,W.cx)
inherit(W.bS,W.cy)
inherit(W.cA,W.cz)
inherit(W.dI,W.cA)
inherit(W.cC,W.cB)
inherit(W.e7,W.cC)
inherit(W.cF,W.cE)
inherit(W.ba,W.cF)
inherit(W.bZ,W.ar)
inherit(W.c_,W.bb)
inherit(W.aB,W.f)
t=W.aB
inherit(W.aw,t)
inherit(W.K,t)
inherit(W.aA,t)
inherit(W.eL,W.be)
inherit(W.cJ,W.cI)
inherit(W.eM,W.cJ)
inherit(W.cM,W.cL)
inherit(W.cd,W.cM)
inherit(W.cQ,W.cP)
inherit(W.f6,W.cQ)
inherit(W.bw,W.bv)
inherit(W.fo,W.bw)
inherit(W.cS,W.cR)
inherit(W.fq,W.cS)
inherit(W.ft,W.cW)
inherit(W.d_,W.cZ)
inherit(W.fC,W.d_)
inherit(W.by,W.bx)
inherit(W.fD,W.by)
inherit(W.d1,W.d0)
inherit(W.fJ,W.d1)
inherit(W.aD,W.K)
inherit(W.d5,W.d4)
inherit(W.h7,W.d5)
inherit(W.h8,W.bT)
inherit(W.d7,W.d6)
inherit(W.hs,W.d7)
inherit(W.d9,W.d8)
inherit(W.cK,W.d9)
inherit(W.db,W.da)
inherit(W.hJ,W.db)
inherit(W.dd,W.dc)
inherit(W.hK,W.dd)
inherit(W.hb,P.fv)
inherit(W.iY,W.hb)
inherit(W.hc,P.fw)
inherit(P.fZ,P.fY)
inherit(P.Q,P.hE)
t=P.t
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
inherit(P.e3,t)
inherit(P.e4,t)
inherit(P.e9,t)
inherit(P.a3,t)
inherit(P.eI,t)
inherit(P.f3,t)
t=P.a3
inherit(P.ec,t)
inherit(P.X,t)
inherit(P.el,t)
inherit(P.fA,t)
inherit(P.bm,t)
inherit(P.fT,t)
inherit(P.cH,P.cG)
inherit(P.ex,P.cH)
inherit(P.cO,P.cN)
inherit(P.eX,P.cO)
inherit(P.fc,P.X)
inherit(P.cY,P.cX)
inherit(P.fz,P.cY)
inherit(P.bn,P.bm)
inherit(P.d3,P.d2)
inherit(P.fL,P.d3)
inherit(P.eY,P.aL)
inherit(P.cU,P.cT)
inherit(P.fr,P.cU)
t=G.eN
inherit(G.fp,t)
inherit(G.ct,t)
inherit(G.eK,t)
inherit(G.ff,t)
inherit(A.fe,t)
inherit(A.bj,t)
t=G.fp
inherit(G.dr,t)
inherit(A.bg,t)
inherit(B.eZ,G.dr)
t=G.ct
inherit(G.c6,t)
inherit(G.f4,t)
inherit(G.em,G.bo)
inherit(R.ch,A.fe)
mixin(H.br,P.l)
mixin(H.bs,H.aO)
mixin(H.bt,P.l)
mixin(H.bu,H.aO)
mixin(W.cw,W.dz)
mixin(W.cx,P.l)
mixin(W.cy,W.m)
mixin(W.cz,P.l)
mixin(W.cA,W.m)
mixin(W.cB,P.l)
mixin(W.cC,W.m)
mixin(W.cE,P.l)
mixin(W.cF,W.m)
mixin(W.cI,P.l)
mixin(W.cJ,W.m)
mixin(W.cL,P.l)
mixin(W.cM,W.m)
mixin(W.cP,P.l)
mixin(W.cQ,W.m)
mixin(W.bv,P.l)
mixin(W.bw,W.m)
mixin(W.cR,P.l)
mixin(W.cS,W.m)
mixin(W.cW,P.bd)
mixin(W.cZ,P.l)
mixin(W.d_,W.m)
mixin(W.bx,P.l)
mixin(W.by,W.m)
mixin(W.d0,P.l)
mixin(W.d1,W.m)
mixin(W.d4,P.l)
mixin(W.d5,W.m)
mixin(W.d6,P.l)
mixin(W.d7,W.m)
mixin(W.d8,P.l)
mixin(W.d9,W.m)
mixin(W.da,P.l)
mixin(W.db,W.m)
mixin(W.dc,P.l)
mixin(W.dd,W.m)
mixin(P.cG,P.l)
mixin(P.cH,W.m)
mixin(P.cN,P.l)
mixin(P.cO,W.m)
mixin(P.cX,P.l)
mixin(P.cY,W.m)
mixin(P.d2,P.l)
mixin(P.d3,W.m)
mixin(P.cT,P.l)
mixin(P.cU,W.m)})();(function constants(){C.r=W.bM.prototype
C.m=W.bN.prototype
C.o=W.bO.prototype
C.C=W.bZ.prototype
C.u=W.c_.prototype
C.D=J.a.prototype
C.a=J.at.prototype
C.b=J.c1.prototype
C.c=J.aP.prototype
C.h=J.au.prototype
C.K=J.av.prototype
C.M=H.c8.prototype
C.x=J.f5.prototype
C.p=J.aC.prototype
C.ak=W.aD.prototype
C.al=W.bp.prototype
C.q=new P.hv()
C.d=new P.hF()
C.t=new P.as(0)
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
C.v=function(hooks) { return hooks; }

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
C.w=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.L=makeConstList([])
C.N=new G.v("vec3","vertex btangents",0)
C.e=new G.v("vec3","",0)
C.O=new G.v("vec4","delta from light",0)
C.n=new G.v("","",0)
C.y=new G.v("vec3","vertex coordinates",0)
C.P=new G.v("vec3","vertex binormals",0)
C.z=new G.v("vec4","for wireframe",0)
C.Q=new G.v("vec4","per vertex color",0)
C.R=new G.v("float","for normal maps",0)
C.j=new G.v("mat4","",0)
C.T=new G.v("mat4","",4)
C.S=new G.v("mat4","",128)
C.f=new G.v("float","",0)
C.U=new G.v("float","",4)
C.V=new G.v("float","depth for shadowmaps",0)
C.i=new G.v("sampler2D","",0)
C.W=new G.v("float","for bump maps",0)
C.X=new G.v("vec2","texture uvs",0)
C.Y=new G.v("float","time since program start in sec",0)
C.k=new G.v("vec2","",0)
C.Z=new G.v("samplerCube","",0)
C.l=new G.v("vec4","",0)
C.a_=new G.v("vec3","vertex normals",0)
C.a0=new G.v("sampler2DShadow","",0)
C.A=new G.v("vec3","per vertex color",0)
C.B=new G.v("mat3","",0)
C.a1=new G.v("vec3","vertex tangents",0)
C.a2=H.G("mW")
C.a3=H.G("mX")
C.a4=H.G("eb")
C.a5=H.G("mY")
C.a6=H.G("mZ")
C.a7=H.G("jA")
C.a8=H.G("n_")
C.a9=H.G("jD")
C.aa=H.G("L")
C.ab=H.G("w")
C.ac=H.G("k7")
C.ad=H.G("k8")
C.ae=H.G("n1")
C.af=H.G("k9")
C.ag=H.G("aH")
C.ah=H.G("R")
C.ai=H.G("x")
C.aj=H.G("a_")})();(function staticFields(){$.jO="$cachedFunction"
$.jP="$cachedInvocation"
$.jt=null
$.jr=null
$.j_=!1
$.j5=null
$.kk=null
$.kB=null
$.hV=null
$.i3=null
$.j6=null
$.aZ=null
$.bA=null
$.bB=null
$.j0=!1
$.u=C.d
$.jy=0
$.mt=0
$.mu=0
$.j9=0
$.kx=0
$.bF=0
$.bG=0
$.mQ=!1
$.kr=0})();(function lazyInitializers(){lazy($,"jw","$get$jw",function(){return H.kt("_$dart_dartClosure")})
lazy($,"iF","$get$iF",function(){return H.kt("_$dart_js")})
lazy($,"jB","$get$jB",function(){return H.lI()})
lazy($,"jC","$get$jC",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.jy
$.jy=t+1
t="expando$key$"+t}return new P.dN(t,null,[P.x])})
lazy($,"jX","$get$jX",function(){return H.a8(H.fN({
toString:function(){return"$receiver$"}}))})
lazy($,"jY","$get$jY",function(){return H.a8(H.fN({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"jZ","$get$jZ",function(){return H.a8(H.fN(null))})
lazy($,"k_","$get$k_",function(){return H.a8(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"k3","$get$k3",function(){return H.a8(H.fN(void 0))})
lazy($,"k4","$get$k4",function(){return H.a8(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"k1","$get$k1",function(){return H.a8(H.k2(null))})
lazy($,"k0","$get$k0",function(){return H.a8(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"k6","$get$k6",function(){return H.a8(H.k2(void 0))})
lazy($,"k5","$get$k5",function(){return H.a8(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"iX","$get$iX",function(){return P.m8()})
lazy($,"bC","$get$bC",function(){return[]})
lazy($,"hU","$get$hU",function(){return P.jG(P.x,P.aH)})
lazy($,"bE","$get$bE",function(){return P.jG(P.w,P.aH)})
lazy($,"jU","$get$jU",function(){return new G.cr(1281,0,4294967295)})
lazy($,"jp","$get$jp",function(){return G.jW(1281,1281,1281)})
lazy($,"jo","$get$jo",function(){return G.jW(32774,770,769)})
lazy($,"O","$get$O",function(){return P.ax(["cBlendEquation",C.n,"cDepthWrite",C.n,"cDepthTest",C.n,"cStencilFunc",C.n,"tPosition",C.e,"tSpeed",C.e,"tForce",C.e,"aColors",C.A,"aColorAlpha",C.Q,"aPosition",C.y,"aTexUV",C.X,"aNormal",C.a_,"aBinormal",C.P,"aCenter",C.z,"aPointSize",C.f,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.a1,"aBitangent",C.N,"iaRotation",C.l,"iaTranslation",C.e,"iaScale",C.e,"vColor",C.A,"vTexUV",C.k,"vLightWeighting",C.e,"vNormal",C.e,"vPosition",C.y,"vPositionFromLight",C.O,"vCenter",C.z,"vDepth",C.V,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.B,"uConvolutionMatrix",C.B,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a0,"uTexture",C.i,"uTexture2",C.i,"uTexture3",C.i,"uTexture4",C.i,"uSpecularMap",C.i,"uNormalMap",C.i,"uBumpMap",C.i,"uDepthMap",C.i,"uCubeTexture",C.Z,"uAnimationTable",C.i,"uTime",C.Y,"uCameraNear",C.f,"uCameraFar",C.f,"uFogNear",C.f,"uFogFar",C.f,"uPointSize",C.f,"uScale",C.f,"uAngle",C.f,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.f,"uShininess",C.f,"uShadowBias",C.f,"uOpacity",C.f,"uColor",C.e,"uAmbientDiffuse",C.e,"uColorEmissive",C.e,"uColorSpecular",C.e,"uColorDiffuse",C.e,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.e,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.S,"uLightDescs",C.T,"uLightCount",C.f,"uLightTypes",C.U,"uBumpScale",C.W,"uNormalScale",C.R])})
lazy($,"ka","$get$ka",function(){return P.lY(null)})
lazy($,"kA","$get$kA",function(){var t=G.fn("PointSpritesV")
t.bc(["aPosition"])
t.aA(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"])
t.aB(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"])
return t})
lazy($,"kz","$get$kz",function(){var t=G.fn("PointSpritesF")
t.aA(["uTexture"])
t.aB(["oFragColor = texture( uTexture,  gl_PointCoord);"])
return t})
lazy($,"kp","$get$kp",function(){var t=G.fn("FixedVertexColorV")
t.bc(["aPosition"])
t.aA(["uPerspectiveViewMatrix","uModelMatrix"])
t.bd(["vColor"])
t.bj(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vColor = ColorFromPosition(aPosition);"],["// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"])
return t})
lazy($,"ko","$get$ko",function(){var t=G.fn("FixedVertexColorF")
t.bd(["vColor"])
t.aB(["oFragColor = vec4( vColor, 1.0 );"])
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
mangledGlobalNames:{x:"int",R:"double",a_:"num",w:"String",aH:"bool",L:"Null",i:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,v:true,args:[P.B],opt:[P.aU]},{func:1,v:true,args:[W.f]},{func:1,ret:P.x,args:[P.E,P.E]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,Blob:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSCharsetRule:J.a,CSSConditionRule:J.a,CSSFontFaceRule:J.a,CSSGroupingRule:J.a,CSSImportRule:J.a,CSSKeyframeRule:J.a,MozCSSKeyframeRule:J.a,WebKitCSSKeyframeRule:J.a,CSSKeyframesRule:J.a,MozCSSKeyframesRule:J.a,WebKitCSSKeyframesRule:J.a,CSSMediaRule:J.a,CSSNamespaceRule:J.a,CSSPageRule:J.a,CSSRule:J.a,CSSStyleRule:J.a,CSSStyleSheet:J.a,CSSSupportsRule:J.a,CSSVariableReferenceValue:J.a,CSSViewportRule:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,File:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,Gamepad:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MimeType:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechGrammar:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,StyleSheet:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,Touch:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGLength:J.a,SVGMatrix:J.a,SVGNumber:J.a,SVGPreserveAspectRatio:J.a,SVGTransform:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioParamMap:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bf,ArrayBufferView:H.aS,DataView:H.eO,Float32Array:H.c8,Float64Array:H.eP,Int16Array:H.eQ,Int32Array:H.eR,Int8Array:H.eS,Uint16Array:H.eT,Uint32Array:H.eU,Uint8ClampedArray:H.cc,CanvasPixelArray:H.cc,Uint8Array:H.eV,HTMLAudioElement:W.h,HTMLBRElement:W.h,HTMLBaseElement:W.h,HTMLBodyElement:W.h,HTMLButtonElement:W.h,HTMLContentElement:W.h,HTMLDListElement:W.h,HTMLDataElement:W.h,HTMLDataListElement:W.h,HTMLDetailsElement:W.h,HTMLDialogElement:W.h,HTMLDivElement:W.h,HTMLEmbedElement:W.h,HTMLFieldSetElement:W.h,HTMLHRElement:W.h,HTMLHeadElement:W.h,HTMLHeadingElement:W.h,HTMLHtmlElement:W.h,HTMLIFrameElement:W.h,HTMLImageElement:W.h,HTMLInputElement:W.h,HTMLLIElement:W.h,HTMLLabelElement:W.h,HTMLLegendElement:W.h,HTMLLinkElement:W.h,HTMLMapElement:W.h,HTMLMediaElement:W.h,HTMLMenuElement:W.h,HTMLMetaElement:W.h,HTMLMeterElement:W.h,HTMLModElement:W.h,HTMLOListElement:W.h,HTMLObjectElement:W.h,HTMLOptGroupElement:W.h,HTMLOptionElement:W.h,HTMLOutputElement:W.h,HTMLParagraphElement:W.h,HTMLParamElement:W.h,HTMLPictureElement:W.h,HTMLPreElement:W.h,HTMLProgressElement:W.h,HTMLQuoteElement:W.h,HTMLScriptElement:W.h,HTMLShadowElement:W.h,HTMLSlotElement:W.h,HTMLSourceElement:W.h,HTMLSpanElement:W.h,HTMLStyleElement:W.h,HTMLTableCaptionElement:W.h,HTMLTableCellElement:W.h,HTMLTableDataCellElement:W.h,HTMLTableHeaderCellElement:W.h,HTMLTableColElement:W.h,HTMLTableElement:W.h,HTMLTableRowElement:W.h,HTMLTableSectionElement:W.h,HTMLTemplateElement:W.h,HTMLTextAreaElement:W.h,HTMLTimeElement:W.h,HTMLTitleElement:W.h,HTMLTrackElement:W.h,HTMLUListElement:W.h,HTMLUnknownElement:W.h,HTMLVideoElement:W.h,HTMLDirectoryElement:W.h,HTMLFontElement:W.h,HTMLFrameElement:W.h,HTMLFrameSetElement:W.h,HTMLMarqueeElement:W.h,HTMLElement:W.h,Accelerometer:W.bK,LinearAccelerationSensor:W.bK,AccessibleNodeList:W.dk,HTMLAnchorElement:W.dl,HTMLAreaElement:W.dm,HTMLCanvasElement:W.bM,CanvasGradient:W.bN,CanvasRenderingContext2D:W.bO,CDATASection:W.an,CharacterData:W.an,Comment:W.an,ProcessingInstruction:W.an,Text:W.an,CSSPerspective:W.dv,CSSPositionValue:W.dw,CSSRotation:W.dx,CSSScale:W.dy,CSSStyleDeclaration:W.b9,MSStyleCSSProperties:W.b9,CSS2Properties:W.b9,CSSImageValue:W.V,CSSKeywordValue:W.V,CSSNumericValue:W.V,CSSResourceValue:W.V,CSSUnitValue:W.V,CSSURLImageValue:W.V,CSSStyleValue:W.V,CSSMatrixComponent:W.aM,CSSSkew:W.aM,CSSTransformComponent:W.aM,CSSTransformValue:W.dA,CSSTranslation:W.dB,CSSUnparsedValue:W.dC,DataTransferItemList:W.dE,DeviceAcceleration:W.dF,XMLDocument:W.ar,Document:W.ar,DOMException:W.dG,DOMPoint:W.dH,DOMPointReadOnly:W.bR,ClientRectList:W.bS,DOMRectList:W.bS,DOMRectReadOnly:W.bT,DOMStringList:W.dI,DOMTokenList:W.dJ,Element:W.bU,AbortPaymentEvent:W.f,AnimationEvent:W.f,AnimationPlaybackEvent:W.f,ApplicationCacheErrorEvent:W.f,BackgroundFetchClickEvent:W.f,BackgroundFetchEvent:W.f,BackgroundFetchFailEvent:W.f,BackgroundFetchedEvent:W.f,BeforeInstallPromptEvent:W.f,BeforeUnloadEvent:W.f,BlobEvent:W.f,CanMakePaymentEvent:W.f,ClipboardEvent:W.f,CloseEvent:W.f,CustomEvent:W.f,DeviceMotionEvent:W.f,DeviceOrientationEvent:W.f,ErrorEvent:W.f,ExtendableEvent:W.f,ExtendableMessageEvent:W.f,FetchEvent:W.f,FontFaceSetLoadEvent:W.f,ForeignFetchEvent:W.f,GamepadEvent:W.f,HashChangeEvent:W.f,InstallEvent:W.f,MediaEncryptedEvent:W.f,MediaKeyMessageEvent:W.f,MediaQueryListEvent:W.f,MediaStreamEvent:W.f,MediaStreamTrackEvent:W.f,MessageEvent:W.f,MIDIConnectionEvent:W.f,MIDIMessageEvent:W.f,MutationEvent:W.f,NotificationEvent:W.f,PageTransitionEvent:W.f,PaymentRequestEvent:W.f,PaymentRequestUpdateEvent:W.f,PopStateEvent:W.f,PresentationConnectionAvailableEvent:W.f,PresentationConnectionCloseEvent:W.f,ProgressEvent:W.f,PromiseRejectionEvent:W.f,PushEvent:W.f,RTCDataChannelEvent:W.f,RTCDTMFToneChangeEvent:W.f,RTCPeerConnectionIceEvent:W.f,RTCTrackEvent:W.f,SecurityPolicyViolationEvent:W.f,SensorErrorEvent:W.f,SpeechRecognitionError:W.f,SpeechRecognitionEvent:W.f,SpeechSynthesisEvent:W.f,StorageEvent:W.f,SyncEvent:W.f,TrackEvent:W.f,TransitionEvent:W.f,WebKitTransitionEvent:W.f,VRDeviceEvent:W.f,VRDisplayEvent:W.f,VRSessionEvent:W.f,MojoInterfaceRequestEvent:W.f,ResourceProgressEvent:W.f,USBConnectionEvent:W.f,IDBVersionChangeEvent:W.f,AudioProcessingEvent:W.f,OfflineAudioCompletionEvent:W.f,WebGLContextEvent:W.f,Event:W.f,InputEvent:W.f,AccessibleNode:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RemotePlayback:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SourceBuffer:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,TextTrack:W.d,TextTrackCue:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,VTTCue:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,ServiceWorker:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,FileList:W.e7,FileWriter:W.e8,HTMLFormElement:W.ed,Gyroscope:W.ej,History:W.ek,HTMLCollection:W.ba,HTMLFormControlsCollection:W.ba,HTMLOptionsCollection:W.ba,HTMLDocument:W.bZ,XMLHttpRequest:W.c_,XMLHttpRequestUpload:W.bb,XMLHttpRequestEventTarget:W.bb,KeyboardEvent:W.aw,Location:W.eD,Magnetometer:W.eE,MediaList:W.eJ,MIDIOutput:W.eL,MIDIInput:W.be,MIDIPort:W.be,MimeTypeArray:W.eM,PointerEvent:W.K,MouseEvent:W.K,DragEvent:W.K,DocumentFragment:W.z,ShadowRoot:W.z,Attr:W.z,DocumentType:W.z,Node:W.z,NodeList:W.cd,RadioNodeList:W.cd,Plugin:W.a6,PluginArray:W.f6,PresentationConnection:W.f9,RTCDataChannel:W.ci,DataChannel:W.ci,HTMLSelectElement:W.fj,AbsoluteOrientationSensor:W.af,AmbientLightSensor:W.af,OrientationSensor:W.af,RelativeOrientationSensor:W.af,Sensor:W.af,SourceBufferList:W.fo,SpeechGrammarList:W.fq,SpeechRecognitionResult:W.a7,Storage:W.ft,TextTrackCueList:W.fC,TextTrackList:W.fD,TimeRanges:W.fF,TouchEvent:W.aA,TouchList:W.fJ,TrackDefaultList:W.fK,CompositionEvent:W.aB,FocusEvent:W.aB,TextEvent:W.aB,UIEvent:W.aB,URL:W.fS,VRStageBoundsPoint:W.fU,VideoTrackList:W.fV,WebSocket:W.fW,WheelEvent:W.aD,Window:W.bp,DOMWindow:W.bp,CSSRuleList:W.h7,DOMRect:W.h8,GamepadList:W.hs,NamedNodeMap:W.cK,MozNamedAttrMap:W.cK,SpeechRecognitionResultList:W.hJ,StyleSheetList:W.hK,SVGFEBlendElement:P.dO,SVGFEColorMatrixElement:P.dP,SVGFEComponentTransferElement:P.dQ,SVGFECompositeElement:P.dR,SVGFEConvolveMatrixElement:P.dS,SVGFEDiffuseLightingElement:P.dT,SVGFEDisplacementMapElement:P.dU,SVGFEFloodElement:P.dV,SVGFEGaussianBlurElement:P.dW,SVGFEImageElement:P.dX,SVGFEMergeElement:P.dY,SVGFEMorphologyElement:P.dZ,SVGFEOffsetElement:P.e_,SVGFEPointLightElement:P.e0,SVGFESpecularLightingElement:P.e1,SVGFESpotLightElement:P.e2,SVGFETileElement:P.e3,SVGFETurbulenceElement:P.e4,SVGFilterElement:P.e9,SVGForeignObjectElement:P.ec,SVGCircleElement:P.X,SVGEllipseElement:P.X,SVGLineElement:P.X,SVGPathElement:P.X,SVGPolygonElement:P.X,SVGPolylineElement:P.X,SVGGeometryElement:P.X,SVGAElement:P.a3,SVGClipPathElement:P.a3,SVGDefsElement:P.a3,SVGGElement:P.a3,SVGSwitchElement:P.a3,SVGGraphicsElement:P.a3,SVGImageElement:P.el,SVGLengthList:P.ex,SVGMaskElement:P.eI,SVGNumberList:P.eX,SVGPatternElement:P.f3,SVGPoint:P.f7,SVGPointList:P.f8,SVGRect:P.fb,SVGRectElement:P.fc,SVGStringList:P.fz,SVGAnimateElement:P.t,SVGAnimateMotionElement:P.t,SVGAnimateTransformElement:P.t,SVGAnimationElement:P.t,SVGDescElement:P.t,SVGDiscardElement:P.t,SVGFEDistantLightElement:P.t,SVGFEFuncAElement:P.t,SVGFEFuncBElement:P.t,SVGFEFuncGElement:P.t,SVGFEFuncRElement:P.t,SVGFEMergeNodeElement:P.t,SVGLinearGradientElement:P.t,SVGMarkerElement:P.t,SVGMetadataElement:P.t,SVGRadialGradientElement:P.t,SVGScriptElement:P.t,SVGSetElement:P.t,SVGStopElement:P.t,SVGStyleElement:P.t,SVGSymbolElement:P.t,SVGTitleElement:P.t,SVGViewElement:P.t,SVGGradientElement:P.t,SVGComponentTransferFunctionElement:P.t,SVGFEDropShadowElement:P.t,SVGMPathElement:P.t,SVGElement:P.t,SVGSVGElement:P.fA,SVGTextPathElement:P.bm,SVGTextContentElement:P.bm,SVGTSpanElement:P.bn,SVGTextElement:P.bn,SVGTextPositioningElement:P.bn,SVGTransformList:P.fL,SVGUseElement:P.fT,AudioBuffer:P.dp,AudioTrackList:P.dq,AudioContext:P.aL,webkitAudioContext:P.aL,BaseAudioContext:P.aL,OfflineAudioContext:P.eY,WebGLRenderingContext:P.fg,WebGL2RenderingContext:P.fh,SQLResultSetRowList:P.fr})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,Blob:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSStyleSheet:true,CSSSupportsRule:true,CSSVariableReferenceValue:true,CSSViewportRule:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,File:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,Gamepad:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechGrammar:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,StyleSheet:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,Touch:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGLength:true,SVGMatrix:true,SVGNumber:true,SVGPreserveAspectRatio:true,SVGTransform:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioParamMap:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,Accelerometer:true,LinearAccelerationSensor:true,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CanvasGradient:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSPositionValue:true,CSSRotation:true,CSSScale:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSSkew:true,CSSTransformComponent:false,CSSTransformValue:true,CSSTranslation:true,CSSUnparsedValue:true,DataTransferItemList:true,DeviceAcceleration:true,XMLDocument:true,Document:false,DOMException:true,DOMPoint:true,DOMPointReadOnly:false,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AccessibleNode:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnectionList:true,PresentationRequest:true,RemotePlayback:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SourceBuffer:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,TextTrack:true,TextTrackCue:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,VTTCue:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,ServiceWorker:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,FileList:true,FileWriter:true,HTMLFormElement:true,Gyroscope:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,KeyboardEvent:true,Location:true,Magnetometer:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,PresentationConnection:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,AbsoluteOrientationSensor:true,AmbientLightSensor:true,OrientationSensor:true,RelativeOrientationSensor:true,Sensor:false,SourceBufferList:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VRStageBoundsPoint:true,VideoTrackList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGAElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLengthList:true,SVGMaskElement:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGStringList:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMetadataElement:true,SVGRadialGradientElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSymbolElement:true,SVGTitleElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGSVGElement:true,SVGTextPathElement:true,SVGTextContentElement:false,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransformList:true,SVGUseElement:true,AudioBuffer:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.c9.$nativeSuperclassTag="ArrayBufferView"
H.br.$nativeSuperclassTag="ArrayBufferView"
H.bs.$nativeSuperclassTag="ArrayBufferView"
H.ca.$nativeSuperclassTag="ArrayBufferView"
H.bt.$nativeSuperclassTag="ArrayBufferView"
H.bu.$nativeSuperclassTag="ArrayBufferView"
H.cb.$nativeSuperclassTag="ArrayBufferView"
W.bv.$nativeSuperclassTag="EventTarget"
W.bw.$nativeSuperclassTag="EventTarget"
W.bx.$nativeSuperclassTag="EventTarget"
W.by.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.kE(F.kD(),b)},[])
else (function(b){H.kE(F.kD(),b)})([])})})()