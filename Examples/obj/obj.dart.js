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
a[c]=function(){a[c]=function(){H.nB(b)}
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
return d?function(e){if(t===null)t=H.jA(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.jA(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.jA(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={jk:function jk(a){this.a=a},
jp:function(a,b,c,d){if(!!a.$isc)return new H.e4(a,b,[c,d])
return new H.d6(a,b,[c,d])},
eG:function(){return new P.ah("No element")},
mk:function(){return new P.ah("Too many elements")},
mj:function(){return new P.ah("Too few elements")},
dm:function(a,b,c,d){if(c-b<=32)H.mB(a,b,c,d)
else H.mA(a,b,c,d)},
mB:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.Z(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.al(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
mA:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
H.dm(a2,a3,g-2,a5)
H.dm(a2,f+2,a4,a5)
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
break}}H.dm(a2,g,f,a5)}else H.dm(a2,g,f,a5)},
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
e4:function e4(a,b,c){this.a=a
this.b=b
this.$ti=c},
eS:function eS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bF:function bF(a,b,c){this.a=a
this.b=b
this.$ti=c},
du:function du(a,b,c){this.a=a
this.b=b
this.$ti=c},
hk:function hk(a,b,c){this.a=a
this.b=b
this.$ti=c},
ch:function ch(){},
dD:function(a,b){var t=a.ad(b)
if(!u.globalState.d.cy)u.globalState.f.aj()
return t},
iU:function(){--u.globalState.f.b
H.d(u.globalState.f.b>=0)},
la:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.r(s).$isb)throw H.e(P.je("Arguments to main must be a List: "+H.f(s)))
u.globalState=new H.i3(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$kf()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.hD(P.jo(null,H.b4),0)
r=P.n
s.sex(new H.af(0,null,null,null,null,null,0,[r,H.b3]))
s.seA(new H.af(0,null,null,null,null,null,0,[r,null]))
if(s.x){q=new H.i2()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.me,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.mQ)}if(u.globalState.x)return
s=u.globalState.a++
q=P.ag(null,null,null,r)
p=new H.bh(0,null,!1)
o=new H.b3(s,new H.af(0,null,null,null,null,null,0,[r,H.bh]),q,u.createNewIsolate(),p,new H.ao(H.iY()),new H.ao(H.iY()),!1,!1,[],P.ag(null,null,null,null),null,null,!1,!0,P.ag(null,null,null,null))
q.l(0,0)
o.bp(0,p)
u.globalState.e=o
u.globalState.z.i(0,s,o)
u.globalState.d=o
if(H.bo(a,{func:1,args:[,]}))o.ad(new H.j3(t,a))
else if(H.bo(a,{func:1,args:[,,]}))o.ad(new H.j4(t,a))
else o.ad(a)
u.globalState.f.aj()},
mQ:function(a){var t=P.aU(["command","print","msg",a])
return new H.aj(!0,P.bY(null,P.n)).I(t)},
mg:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.mh()
return},
mh:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.e(new P.t("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.e(new P.t('Cannot extract URI from "'+t+'"'))},
me:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.b2(!0,[]).T(b.data)
s=J.Z(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.nk(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.b2(!0,[]).T(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.b2(!0,[]).T(s.h(t,"replyTo"))
s=u.globalState.a++
k=P.n
j=P.ag(null,null,null,k)
i=new H.bh(0,null,!1)
h=new H.b3(s,new H.af(0,null,null,null,null,null,0,[k,H.bh]),j,u.createNewIsolate(),i,new H.ao(H.iY()),new H.ao(H.iY()),!1,!1,[],P.ag(null,null,null,null),null,null,!1,!0,P.ag(null,null,null,null))
j.l(0,0)
h.bp(0,i)
u.globalState.f.a.P(0,new H.b4(h,new H.eD(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.aj()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.lH(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.aj()
break
case"close":u.globalState.ch.ai(0,$.$get$kg().h(0,a))
a.terminate()
u.globalState.f.aj()
break
case"log":H.md(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
k=P.aU(["command","print","msg",t])
k=new H.aj(!0,P.bY(null,P.n)).I(k)
s.toString
self.postMessage(k)}else P.ad(s.h(t,"msg"))
break
case"error":throw H.e(s.h(t,"msg"))}},
md:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aU(["command","log","msg",a])
r=new H.aj(!0,P.bY(null,P.n)).I(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.O(q)
t=H.ay(q)
s=P.cg(t)
throw H.e(s)}},
mf:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.ko=$.ko+("_"+s)
$.kp=$.kp+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.E(0,["spawned",new H.bk(s,r),q,t.r])
r=new H.eE(a,b,c,d,t)
if(e){t.bL(q,q)
u.globalState.f.a.P(0,new H.b4(t,r,"start isolate"))}else r.$0()},
mD:function(a,b){var t=new H.h1(!0,!1,null)
t.dd(a,b)
return t},
mS:function(a){return new H.b2(!0,[]).T(new H.aj(!1,P.bY(null,P.n)).I(a))},
j3:function j3(a,b){this.a=a
this.b=b},
j4:function j4(a,b){this.a=a
this.b=b},
i3:function i3(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
b3:function b3(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
hZ:function hZ(a,b){this.a=a
this.b=b},
hD:function hD(a,b){this.a=a
this.b=b},
hE:function hE(a){this.a=a},
b4:function b4(a,b,c){this.a=a
this.b=b
this.c=c},
i2:function i2(){},
eD:function eD(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eE:function eE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hw:function hw(){},
bk:function bk(a,b){this.b=a
this.a=b},
i5:function i5(a,b){this.a=a
this.b=b},
c_:function c_(a,b,c){this.b=a
this.c=b
this.a=c},
bh:function bh(a,b,c){this.a=a
this.b=b
this.c=c},
h1:function h1(a,b,c){this.a=a
this.b=b
this.c=c},
h2:function h2(a,b){this.a=a
this.b=b},
h3:function h3(a,b){this.a=a
this.b=b},
ao:function ao(a){this.a=a},
aj:function aj(a,b){this.a=a
this.b=b},
b2:function b2(a,b){this.a=a
this.b=b},
nd:function(a){return u.types[a]},
nm:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.r(a).$iso},
f:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aK(a)
if(typeof t!=="string")throw H.e(H.N(a))
return t},
my:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.fw(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aW:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
kn:function(a,b){throw H.e(new P.bB(a,null,null))},
jr:function(a,b,c){var t,s
H.kX(a)
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return H.kn(a,c)
s=t[3]
if(s!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return H.kn(a,c)},
km:function(a,b){throw H.e(new P.bB("Invalid double",a,null))},
aX:function(a,b){var t,s
H.kX(a)
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return H.km(a,b)
t=parseFloat(a)
if(isNaN(t)){s=J.lN(a)
if(s==="NaN"||s==="+NaN"||s==="-NaN")return t
return H.km(a,b)}return t},
dh:function(a){var t,s,r,q,p,o,n,m
t=J.r(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.N||!!J.r(a).$isb_){p=C.A(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.h.a7(q,0)===36)q=C.h.cP(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.dE(H.iH(a),0,null),u.mangledGlobalNames)},
fs:function(a){return"Instance of '"+H.dh(a)+"'"},
R:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mw:function(a){return a.b?H.R(a).getUTCFullYear()+0:H.R(a).getFullYear()+0},
mu:function(a){return a.b?H.R(a).getUTCMonth()+1:H.R(a).getMonth()+1},
mq:function(a){return a.b?H.R(a).getUTCDate()+0:H.R(a).getDate()+0},
mr:function(a){return a.b?H.R(a).getUTCHours()+0:H.R(a).getHours()+0},
mt:function(a){return a.b?H.R(a).getUTCMinutes()+0:H.R(a).getMinutes()+0},
mv:function(a){return a.b?H.R(a).getUTCSeconds()+0:H.R(a).getSeconds()+0},
ms:function(a){return a.b?H.R(a).getUTCMilliseconds()+0:H.R(a).getMilliseconds()+0},
jq:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.N(a))
return a[b]},
kq:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.N(a))
a[b]=c},
I:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.an(!0,b,"index",null)
t=J.dJ(a)
if(b<0||C.b.cv(b,t))return P.A(b,a,"index",null,t)
return P.ft(b,"index",null)},
N:function(a){return new P.an(!0,a,null,null)},
kX:function(a){if(typeof a!=="string")throw H.e(H.N(a))
return a},
e:function(a){var t
if(a==null)a=new P.bg()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.lb})
t.name=""}else t.toString=H.lb
return t},
lb:function(){return J.aK(this.dartException)},
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
return new H.h8(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
h9:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
kB:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
jm:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.eK(a,s,t?null:b.receiver)},
O:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.j5(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aO(r,16)&8191)===10)switch(q){case 438:return t.$1(H.jm(H.f(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.f(s)+" (Error "+q+")"
return t.$1(new H.df(p,null))}}if(a instanceof TypeError){o=$.$get$kv()
n=$.$get$kw()
m=$.$get$kx()
l=$.$get$ky()
k=$.$get$kC()
j=$.$get$kD()
i=$.$get$kA()
$.$get$kz()
h=$.$get$kF()
g=$.$get$kE()
f=o.M(s)
if(f!=null)return t.$1(H.jm(s,f))
else{f=n.M(s)
if(f!=null){f.method="call"
return t.$1(H.jm(s,f))}else{f=m.M(s)
if(f==null){f=l.M(s)
if(f==null){f=k.M(s)
if(f==null){f=j.M(s)
if(f==null){f=i.M(s)
if(f==null){f=l.M(s)
if(f==null){f=h.M(s)
if(f==null){f=g.M(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.df(s,f==null?null:f.method))}}return t.$1(new H.hc(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.dn()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.an(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.dn()
return a},
ay:function(a){var t
if(a==null)return new H.dB(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dB(a,null)},
nq:function(a){if(a==null||typeof a!='object')return J.am(a)
else return H.aW(a)},
nb:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=a.length
for(r=0;r<s;){q=r+1
H.d(t)
p=a[r]
r=q+1
H.d(t)
b.i(0,p,a[q])}return b},
nl:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dD(b,new H.iP(a))
case 1:return H.dD(b,new H.iQ(a,d))
case 2:return H.dD(b,new H.iR(a,d,e))
case 3:return H.dD(b,new H.iS(a,d,e,f))
case 4:return H.dD(b,new H.iT(a,d,e,f,g))}throw H.e(P.cg("Unsupported number of arguments for wrapped closure"))},
b6:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.nl)
a.$identity=t
return t},
lY:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.r(c).$isb){t.$reflectionInfo=c
r=H.my(t).r}else r=c
q=d?Object.create(new H.fK().constructor.prototype):Object.create(new H.bt(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.k1(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.nd,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.jZ:H.jf
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.e("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.k1(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
lV:function(a,b,c,d){var t=H.jf
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
k1:function(a,b,c){var t,s,r,q
if(c)return H.lX(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.lV(s,b==null?r!=null:b!==r,t,b)
return q},
lW:function(a,b,c,d){var t,s
t=H.jf
s=H.jZ
switch(b?-1:a){case 0:throw H.e(new H.fB("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
lX:function(a,b){var t,s,r,q
H.lU()
t=$.jY
if(t==null){t=H.jX("receiver")
$.jY=t}s=b.$stubName
r=b.length
q=a[s]
t=H.lW(r,b==null?q!=null:b!==q,s,b)
return t},
jA:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.r(c).$isb){c.fixed$length=Array
t=c}else t=c
return H.lY(a,b,t,!!d,e,f)},
jf:function(a){return a.a},
jZ:function(a){return a.c},
lU:function(){var t=$.k_
if(t==null){t=H.jX("self")
$.k_=t}return t},
jX:function(a){var t,s,r,q,p
t=new H.bt("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
nR:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.au(a,"String"))},
Y:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.au(a,"double"))},
nQ:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.au(a,"num"))},
n4:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.au(a,"bool"))},
nk:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.au(a,"int"))},
ns:function(a,b){throw H.e(H.au(a,b.substring(3)))},
nr:function(a,b){var t=J.Z(b)
throw H.e(H.k0(H.dh(a),t.aC(b,3,t.gj(b))))},
jD:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.r(a)[b])return a
H.ns(a,b)},
aI:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.r(a)[b]
else t=!0
if(t)return a
H.nr(a,b)},
nP:function(a){if(a==null)return a
if(!!J.r(a).$isb)return a
throw H.e(H.au(a,"List"))},
l_:function(a){var t=J.r(a)
return"$S" in t?t.$S():null},
bo:function(a,b){var t
if(a==null)return!1
t=H.l_(a)
return t==null?!1:H.l4(t,b)},
nN:function(a,b){var t,s
if(a==null)return a
if($.jx)return a
$.jx=!0
try{if(H.bo(a,b))return a
t=H.aJ(b,null)
s=H.au(a,t)
throw H.e(s)}finally{$.jx=!1}},
au:function(a,b){return new H.ha("type '"+H.dh(a)+"' is not a subtype of type '"+b+"'")},
k0:function(a,b){return new H.dS("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
aw:function(a){if(!0===a)return!1
if(!!J.r(a).$isji)a=a.$0()
if(typeof a==="boolean")return!a
throw H.e(H.au(a,"bool"))},
aG:function(a){throw H.e(new H.hq(a))},
d:function(a){if(H.aw(a))throw H.e(new P.c7(null))},
nB:function(a){throw H.e(new P.dW(a))},
iY:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
l2:function(a){return u.getIsolateTag(a)},
H:function(a){return new H.aD(a,null)},
D:function(a,b){H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
iH:function(a){if(a==null)return
return a.$ti},
l3:function(a,b){return H.jH(a["$as"+H.f(b)],H.iH(a))},
ak:function(a,b,c){var t,s
t=H.l3(a,b)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
aH:function(a,b){var t,s
t=H.iH(a)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
aJ:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.d(!0)
H.d(!0)
return a[0].name+H.dE(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.f(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aJ(t,b)
return H.mU(a,b)}return"unknown-reified-type"},
mU:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aJ(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aJ(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aJ(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.na(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aJ(l[j],b)+(" "+H.f(j))}q+="}"}return"("+q+") => "+t},
dE:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=new P.bQ("")
for(r=b,q=!0,p=!0;H.d(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.d(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aJ(o,c)}return p?"":"<"+s.k(0)+">"},
iI:function(a){var t,s
if(a instanceof H.b9){t=H.l_(a)
if(t!=null)return H.aJ(t,null)}s=J.r(a).constructor.name
if(a==null)return s
return s+H.dE(a.$ti,0,null)},
jH:function(a,b){if(a==null)return b
H.d(typeof a=="function")
H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.jE(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.jE(a,null,b)
return b},
c3:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.iH(a)
s=J.r(a)
if(s[b]==null)return!1
return H.kV(H.jH(s[d],t),c)},
dF:function(a,b,c,d){if(a==null)return a
if(H.c3(a,b,c,d))return a
throw H.e(H.k0(H.dh(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dE(c,0,null),u.mangledGlobalNames)))},
nK:function(a,b,c,d){if(a==null)return a
if(H.c3(a,b,c,d))return a
throw H.e(H.au(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dE(c,0,null),u.mangledGlobalNames)))},
kV:function(a,b){var t,s,r,q,p
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
nL:function(a,b,c){return H.jE(a,b,H.l3(b,c))},
a_:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.name==="aV")return!0
if('func' in b)return H.l4(a,b)
if('func' in a)return b.name==="ji"||b.name==="m"
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
return H.kV(H.jH(o,t),r)},
kU:function(a,b,c){var t,s,r,q,p,o,n
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
n0:function(a,b){var t,s,r,q,p,o
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
l4:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
if(n===m){if(!H.kU(r,q,!1))return!1
if(!H.kU(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.d(j)
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
if(!(H.a_(g,f)||H.a_(f,g)))return!1}}return H.n0(a.named,b.named)},
jE:function(a,b,c){H.d(typeof a=="function")
H.d(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
nS:function(a){var t=$.jB
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
nO:function(a){return H.aW(a)},
nM:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nn:function(a){var t,s,r,q,p,o
H.d(!(a instanceof P.m))
t=$.jB.$1(a)
s=$.iE[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iO[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.kT.$2(a,t)
if(t!=null){s=$.iE[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iO[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.jF(r)
$.iE[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.iO[t]=r
return r}if(p==="-"){o=H.jF(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.l8(a,r)
if(p==="*")throw H.e(new P.bT(t))
if(u.leafTags[t]===true){o=H.jF(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.l8(a,r)},
l8:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.iX(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
jF:function(a){return J.iX(a,!1,null,!!a.$iso)},
np:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.iX(t,!1,null,!!t.$iso)
else return J.iX(t,c,null,null)},
ni:function(){if(!0===$.jC)return
$.jC=!0
H.nj()},
nj:function(){var t,s,r,q,p,o,n,m
$.iE=Object.create(null)
$.iO=Object.create(null)
H.nh()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.l9.$1(p)
if(o!=null){n=H.np(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
nh:function(){var t,s,r,q,p,o,n
t=C.S()
t=H.bn(C.P,H.bn(C.U,H.bn(C.z,H.bn(C.z,H.bn(C.T,H.bn(C.Q,H.bn(C.R(C.A),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.jB=new H.iL(p)
$.kT=new H.iM(o)
$.l9=new H.iN(n)},
bn:function(a,b){return a(b)||b},
kj:function(a,b,c,d){var t,s,r,q
t=b?"m":""
s=c?"":"i"
r=d?"g":""
q=function(e,f){try{return new RegExp(e,f)}catch(p){return p}}(a,t+s+r)
if(q instanceof RegExp)return q
throw H.e(new P.bB("Illegal RegExp pattern ("+String(q)+")",a,null))},
mR:function(a,b){var t=new H.i4(a,b)
t.dm(a,b)
return t},
nw:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
ny:function(a,b,c,d){var t,s,r
t=b.dC(a,d)
if(t==null)return a
s=t.b
r=s.index
return H.nA(a,r,r+s[0].length,c)},
nx:function(a,b,c){var t,s
t=b.gbD()
t.lastIndex=0
s=a.replace(t,c.replace(/\$/g,"$$$$"))
return s},
nz:function(a,b,c,d){return d===0?a.replace(b.b,c.replace(/\$/g,"$$$$")):H.ny(a,b,c,d)},
nA:function(a,b,c,d){var t,s
t=a.substring(0,b)
s=a.substring(c)
return t+d+s},
fw:function fw(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
h8:function h8(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
df:function df(a,b){this.a=a
this.b=b},
eK:function eK(a,b,c){this.a=a
this.b=b
this.c=c},
hc:function hc(a){this.a=a},
j5:function j5(a){this.a=a},
dB:function dB(a,b){this.a=a
this.b=b},
iP:function iP(a){this.a=a},
iQ:function iQ(a,b){this.a=a
this.b=b},
iR:function iR(a,b,c){this.a=a
this.b=b
this.c=c},
iS:function iS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iT:function iT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
b9:function b9(){},
fX:function fX(){},
fK:function fK(){},
bt:function bt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ha:function ha(a){this.a=a},
dS:function dS(a){this.a=a},
fB:function fB(a){this.a=a},
hq:function hq(a){this.a=a},
aD:function aD(a,b){this.a=a
this.b=b},
af:function af(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
eJ:function eJ(a){this.a=a},
eM:function eM(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
eN:function eN(a,b){this.a=a
this.$ti=b},
eO:function eO(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
iL:function iL(a){this.a=a},
iM:function iM(a){this.a=a},
iN:function iN(a){this.a=a},
eI:function eI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i4:function i4(a,b){this.a=a
this.b=b},
P:function(a){return a},
iv:function(a){var t,s,r
if(!!J.r(a).$isl)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
bH:function bH(){},
bf:function bf(){},
f1:function f1(){},
d8:function d8(){},
d9:function d9(){},
da:function da(){},
d7:function d7(){},
f2:function f2(){},
f3:function f3(){},
f4:function f4(){},
f5:function f5(){},
f6:function f6(){},
f7:function f7(){},
db:function db(){},
f8:function f8(){},
bI:function bI(){},
bJ:function bJ(){},
bK:function bK(){},
bL:function bL(){},
na:function(a){var t=H.D(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
bq:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
r:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d2.prototype
return J.d1.prototype}if(typeof a=="string")return J.aR.prototype
if(a==null)return J.d3.prototype
if(typeof a=="boolean")return J.eH.prototype
if(a.constructor==Array)return J.aQ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aS.prototype
return a}if(a instanceof P.m)return a
return J.iG(a)},
iX:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iG:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.jC==null){H.ni()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.e(new P.bT("Return interceptor for "+H.f(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$jl()]
if(p!=null)return p
p=H.nn(a)
if(p!=null)return p
if(typeof a=="function")return C.V
s=Object.getPrototypeOf(a)
if(s==null)return C.D
if(s===Object.prototype)return C.D
if(typeof q=="function"){Object.defineProperty(q,$.$get$jl(),{value:C.u,enumerable:false,writable:true,configurable:true})
return C.u}return C.u},
ki:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
ml:function(a,b){var t,s
for(t=a.length;b<t;){s=C.h.a7(a,b)
if(s!==32&&s!==13&&!J.ki(s))break;++b}return b},
mm:function(a,b){var t,s
for(;b>0;b=t){t=b-1
s=C.h.bU(a,t)
if(s!==32&&s!==13&&!J.ki(s))break}return b},
Z:function(a){if(typeof a=="string")return J.aR.prototype
if(a==null)return a
if(a.constructor==Array)return J.aQ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aS.prototype
return a}if(a instanceof P.m)return a
return J.iG(a)},
bp:function(a){if(a==null)return a
if(a.constructor==Array)return J.aQ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aS.prototype
return a}if(a instanceof P.m)return a
return J.iG(a)},
l1:function(a){if(typeof a=="number")return J.bd.prototype
if(a==null)return a
if(!(a instanceof P.m))return J.b_.prototype
return a},
nc:function(a){if(typeof a=="number")return J.bd.prototype
if(typeof a=="string")return J.aR.prototype
if(a==null)return a
if(!(a instanceof P.m))return J.b_.prototype
return a},
iF:function(a){if(typeof a=="string")return J.aR.prototype
if(a==null)return a
if(!(a instanceof P.m))return J.b_.prototype
return a},
k:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aS.prototype
return a}if(a instanceof P.m)return a
return J.iG(a)},
x:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.r(a).w(a,b)},
al:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.l1(a).az(a,b)},
lc:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.l1(a).am(a,b)},
b7:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nm(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.Z(a).h(a,b)},
ld:function(a,b,c){return J.bp(a).i(a,b,c)},
le:function(a,b,c,d){return J.k(a).dr(a,b,c,d)},
jI:function(a,b){return J.iF(a).a7(a,b)},
br:function(a,b){return J.k(a).dK(a,b)},
lf:function(a,b,c){return J.k(a).dL(a,b,c)},
jJ:function(a,b){return J.k(a).bK(a,b)},
j6:function(a,b){return J.k(a).N(a,b)},
jK:function(a,b,c){return J.k(a).bN(a,b,c)},
lg:function(a,b){return J.k(a).dZ(a,b)},
dG:function(a,b,c){return J.k(a).bO(a,b,c)},
jL:function(a,b,c){return J.k(a).bP(a,b,c)},
dH:function(a,b){return J.k(a).e1(a,b)},
lh:function(a,b){return J.k(a).bQ(a,b)},
li:function(a,b,c){return J.k(a).bR(a,b,c)},
jM:function(a,b,c,d){return J.k(a).bS(a,b,c,d)},
lj:function(a,b,c,d,e){return J.k(a).bT(a,b,c,d,e)},
lk:function(a,b){return J.nc(a).O(a,b)},
j7:function(a,b,c){return J.Z(a).e6(a,b,c)},
j8:function(a){return J.k(a).bW(a)},
ll:function(a){return J.k(a).bX(a)},
lm:function(a){return J.k(a).eb(a)},
ln:function(a,b){return J.k(a).c_(a,b)},
j9:function(a,b){return J.k(a).c0(a,b)},
lo:function(a,b,c,d){return J.k(a).c1(a,b,c,d)},
lp:function(a,b,c,d,e){return J.k(a).ei(a,b,c,d,e)},
lq:function(a,b,c,d,e){return J.k(a).c2(a,b,c,d,e)},
lr:function(a,b,c,d,e,f){return J.k(a).ej(a,b,c,d,e,f)},
ls:function(a,b){return J.bp(a).t(a,b)},
dI:function(a,b){return J.k(a).c3(a,b)},
lt:function(a,b){return J.k(a).c4(a,b)},
lu:function(a){return J.k(a).ek(a)},
lv:function(a,b){return J.bp(a).at(a,b)},
lw:function(a){return J.k(a).gdY(a)},
am:function(a){return J.r(a).gu(a)},
bs:function(a){return J.bp(a).gv(a)},
dJ:function(a){return J.Z(a).gj(a)},
lx:function(a){return J.k(a).gaY(a)},
ly:function(a){return J.r(a).gA(a)},
lz:function(a){return J.k(a).geO(a)},
lA:function(a){return J.k(a).gaw(a)},
ja:function(a){return J.k(a).gm(a)},
jb:function(a){return J.k(a).gn(a)},
jN:function(a){return J.k(a).gK(a)},
jc:function(a,b){return J.k(a).a3(a,b)},
lB:function(a){return J.k(a).ay(a)},
lC:function(a,b){return J.k(a).b4(a,b)},
lD:function(a,b,c){return J.k(a).b5(a,b,c)},
jO:function(a,b,c){return J.k(a).b8(a,b,c)},
lE:function(a,b){return J.k(a).c7(a,b)},
lF:function(a,b){return J.bp(a).c9(a,b)},
lG:function(a){return J.bp(a).eH(a)},
lH:function(a,b){return J.k(a).E(a,b)},
lI:function(a,b,c){return J.k(a).cI(a,b,c)},
lJ:function(a,b){return J.iF(a).cN(a,b)},
lK:function(a,b,c,d){return J.k(a).bd(a,b,c,d)},
lL:function(a){return J.iF(a).eR(a)},
aK:function(a){return J.r(a).k(a)},
lM:function(a,b,c,d){return J.k(a).eT(a,b,c,d)},
lN:function(a){return J.iF(a).eU(a)},
lO:function(a,b,c){return J.k(a).ce(a,b,c)},
lP:function(a,b,c){return J.k(a).cf(a,b,c)},
jd:function(a,b,c){return J.k(a).cg(a,b,c)},
lQ:function(a,b,c){return J.k(a).ci(a,b,c)},
jP:function(a,b,c){return J.k(a).cj(a,b,c)},
jQ:function(a,b,c){return J.k(a).ck(a,b,c)},
jR:function(a,b,c){return J.k(a).cl(a,b,c)},
jS:function(a,b,c,d){return J.k(a).cm(a,b,c,d)},
jT:function(a,b,c,d){return J.k(a).cn(a,b,c,d)},
lR:function(a,b){return J.k(a).cp(a,b)},
lS:function(a,b,c){return J.k(a).eV(a,b,c)},
jU:function(a,b,c,d,e,f,g){return J.k(a).cr(a,b,c,d,e,f,g)},
lT:function(a,b,c,d,e){return J.k(a).cs(a,b,c,d,e)},
a:function a(){},
eH:function eH(){},
d3:function d3(){},
bE:function bE(){},
fm:function fm(){},
b_:function b_(){},
aS:function aS(){},
aQ:function aQ(a){this.$ti=a},
jj:function jj(a){this.$ti=a},
dN:function dN(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bd:function bd(){},
d2:function d2(){},
d1:function d1(){},
aR:function aR(){}},P={
mH:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.n1()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.b6(new P.hs(t),1)).observe(s,{childList:true})
return new P.hr(t,s,r)}else if(self.setImmediate!=null)return P.n2()
return P.n3()},
mI:function(a){++u.globalState.f.b
self.scheduleImmediate(H.b6(new P.ht(a),0))},
mJ:function(a){++u.globalState.f.b
self.setImmediate(H.b6(new P.hu(a),0))},
mK:function(a){P.js(C.w,a)},
mX:function(a,b){if(H.bo(a,{func:1,args:[P.aV,P.aV]})){b.toString
return a}else{b.toString
return a}},
m9:function(a,b,c){var t
if(a==null)a=new P.bg()
t=$.v
if(t!==C.d)t.toString
t=new P.M(0,t,null,[c])
t.br(a,b)
return t},
ma:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.M(0,$.v,null,[P.b])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.ex(t,!1,b,s)
try{for(m=0,l=0;m<1;++m){q=a[m]
p=l
q.b1(new P.ew(t,!1,b,s,p),r)
l=++t.b}if(l===0){l=new P.M(0,$.v,null,[null])
l.bq(C.B)
return l}k=new Array(l)
k.fixed$length=Array
t.a=k}catch(j){o=H.O(j)
n=H.ay(j)
if(t.b===0||!1)return P.m9(o,n,null)
else{t.c=o
t.d=n}}return s},
kK:function(a,b){var t,s,r
H.d(b.a<4)
H.d(!(a instanceof P.M))
H.d(b.a===0)
b.a=1
try{a.b1(new P.hN(b),new P.hO(b))}catch(r){t=H.O(r)
s=H.ay(r)
P.nt(new P.hP(b,t,s))}},
hM:function(a,b){var t,s,r,q
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
P.iw(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
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
P.iw(null,null,p,o,s)
return}s=$.v
if(s==null?l!=null:s!==l){H.d(l!=null)
s=$.v
H.d(l==null?s!=null:l!==s)
j=$.v
$.v=l
i=j}else i=null
s=b.c
if(s===8)new P.hU(t,r,q,b).$0()
else if(p){if((s&1)!==0)new P.hT(r,b,m).$0()}else if((s&2)!==0)new P.hS(t,r,b).$0()
if(i!=null){H.d(!0)
$.v=i}s=r.b
if(!!J.r(s).$isbc){if(s.a>=4){H.d(o.a<4)
h=o.c
o.c=null
b=o.ab(h)
H.d(o.a<4)
H.d(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.hM(s,o)
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
mW:function(){var t,s
for(;t=$.bl,t!=null;){$.c1=null
s=t.b
$.bl=s
if(s==null)$.c0=null
t.a.$0()}},
n_:function(){$.jy=!0
try{P.mW()}finally{$.c1=null
$.jy=!1
if($.bl!=null)$.$get$ju().$1(P.kW())}},
kR:function(a){var t=new P.dv(a,null)
if($.bl==null){$.c0=t
$.bl=t
if(!$.jy)$.$get$ju().$1(P.kW())}else{$.c0.b=t
$.c0=t}},
mZ:function(a){var t,s,r
t=$.bl
if(t==null){P.kR(a)
$.c1=$.c0
return}s=new P.dv(a,null)
r=$.c1
if(r==null){s.b=t
$.c1=s
$.bl=s}else{s.b=r.b
r.b=s
$.c1=s
if(s.b==null)$.c0=s}},
nt:function(a){var t=$.v
if(C.d===t){P.bm(null,null,C.d,a)
return}t.toString
P.bm(null,null,t,t.aR(a))},
mE:function(a,b){var t=$.v
if(t===C.d){t.toString
return P.js(a,b)}return P.js(a,t.aR(b))},
js:function(a,b){var t=C.b.H(a.a,1000)
return H.mD(t<0?0:t,b)},
jt:function(a){var t,s
H.d(a!=null)
t=$.v
H.d(a==null?t!=null:a!==t)
s=$.v
$.v=a
return s},
iw:function(a,b,c,d,e){var t={}
t.a=d
P.mZ(new P.ix(t,e))},
kP:function(a,b,c,d){var t,s
if($.v===c)return d.$0()
t=P.jt(c)
try{s=d.$0()
return s}finally{s=t
H.d(s!=null)
$.v=s}},
kQ:function(a,b,c,d,e){var t,s
if($.v===c)return d.$1(e)
t=P.jt(c)
try{s=d.$1(e)
return s}finally{s=t
H.d(s!=null)
$.v=s}},
mY:function(a,b,c,d,e,f){var t,s
if($.v===c)return d.$2(e,f)
t=P.jt(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.d(s!=null)
$.v=s}},
bm:function(a,b,c,d){var t=C.d!==c
if(t)d=!(!t||!1)?c.aR(d):c.e_(d)
P.kR(d)},
hs:function hs(a){this.a=a},
hr:function hr(a,b,c){this.a=a
this.b=b
this.c=c},
ht:function ht(a){this.a=a},
hu:function hu(a){this.a=a},
ex:function ex(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ew:function ew(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hy:function hy(){},
dw:function dw(a,b){this.a=a
this.$ti=b},
im:function im(a,b){this.a=a
this.$ti=b},
dy:function dy(a,b,c,d,e,f){var _=this
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
hJ:function hJ(a,b){this.a=a
this.b=b},
hR:function hR(a,b){this.a=a
this.b=b},
hN:function hN(a){this.a=a},
hO:function hO(a){this.a=a},
hP:function hP(a,b,c){this.a=a
this.b=b
this.c=c},
hL:function hL(a,b){this.a=a
this.b=b},
hQ:function hQ(a,b){this.a=a
this.b=b},
hK:function hK(a,b,c){this.a=a
this.b=b
this.c=c},
hU:function hU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hV:function hV(a){this.a=a},
hT:function hT(a,b,c){this.a=a
this.b=b
this.c=c},
hS:function hS(a,b,c){this.a=a
this.b=b
this.c=c},
dv:function dv(a,b){this.a=a
this.b=b},
fO:function fO(){},
fQ:function fQ(a){this.a=a},
fR:function fR(a,b){this.a=a
this.b=b},
fP:function fP(){},
b8:function b8(a,b){this.a=a
this.b=b},
iu:function iu(){},
ix:function ix(a,b){this.a=a
this.b=b},
i7:function i7(){},
i9:function i9(a,b){this.a=a
this.b=b},
i8:function i8(a,b){this.a=a
this.b=b},
ia:function ia(a,b){this.a=a
this.b=b},
kk:function(a,b){return new H.af(0,null,null,null,null,null,0,[a,b])},
Q:function(){return new H.af(0,null,null,null,null,null,0,[null,null])},
aU:function(a){return H.nb(a,new H.af(0,null,null,null,null,null,0,[null,null]))},
bY:function(a,b){return new P.dz(0,null,null,null,null,null,0,[a,b])},
mP:function(){var t=Object.create(null)
H.d(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
mi:function(a,b,c){var t,s
if(P.jz(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$c2()
C.a.l(s,a)
try{P.mV(a,t)}finally{H.d(C.a.gaV(s)===a)
s.pop()}s=P.ku(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eF:function(a,b,c){var t,s,r
if(P.jz(a))return b+"..."+c
t=new P.bQ(b)
s=$.$get$c2()
C.a.l(s,a)
try{r=t
r.a=P.ku(r.ga_(),a,", ")}finally{H.d(C.a.gaV(s)===a)
s.pop()}s=t
s.a=s.ga_()+c
s=t.ga_()
return s.charCodeAt(0)==0?s:s},
jz:function(a){var t,s
for(t=0;s=$.$get$c2(),t<s.length;++t)if(a===s[t])return!0
return!1},
mV:function(a,b){var t,s,r,q,p,o,n,m,l,k
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
ag:function(a,b,c,d){return new P.i_(0,null,null,null,null,null,0,[d])},
jn:function(a,b){var t,s
t=P.ag(null,null,null,b)
for(s=J.bs(a);s.p();)t.l(0,s.gq())
return t},
mo:function(a){var t,s,r
t={}
if(P.jz(a))return"{...}"
s=new P.bQ("")
try{C.a.l($.$get$c2(),a)
r=s
r.a=r.ga_()+"{"
t.a=!0
a.at(0,new P.eT(t,s))
t=s
t.a=t.ga_()+"}"}finally{t=$.$get$c2()
H.d(C.a.gaV(t)===a)
t.pop()}t=s.ga_()
return t.charCodeAt(0)==0?t:t},
jo:function(a,b){var t=new P.eP(null,0,0,0,[b])
t.d7(a,b)
return t},
dz:function dz(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
i_:function i_(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
i0:function i0(a,b,c){this.a=a
this.b=b
this.c=c},
bX:function bX(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hY:function hY(){},
d4:function d4(){},
u:function u(){},
eT:function eT(a,b){this.a=a
this.b=b},
eP:function eP(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
i1:function i1(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fE:function fE(){},
fD:function fD(){},
bN:function bN(){},
ku:function(a,b,c){var t=J.bs(b)
if(!t.p())return a
if(c.length===0){do a+=H.f(t.gq())
while(t.p())}else{a+=H.f(t.gq())
for(;t.p();)a=a+c+H.f(t.gq())}return a},
lZ:function(a,b){return J.lk(a,b)},
m_:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.f(t)
if(t>=10)return s+"00"+H.f(t)
return s+"000"+H.f(t)},
m0:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ca:function(a){if(a>=10)return""+a
return"0"+a},
m2:function(a,b,c,d,e,f){return new P.az(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
jh:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aK(a)
if(typeof a==="string")return JSON.stringify(a)
return P.m5(a)},
m5:function(a){var t=J.r(a)
if(!!t.$isb9)return t.k(a)
return H.fs(a)},
je:function(a){return new P.an(!1,null,null,a)},
jV:function(a,b,c){return new P.an(!0,a,b,c)},
ft:function(a,b,c){return new P.dj(null,null,!0,a,b,"Value not in range")},
aY:function(a,b,c,d,e){return new P.dj(b,c,!0,a,d,"Invalid value")},
kr:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.aY(a,0,c,"start",f))
if(a>b||b>c)throw H.e(P.aY(b,a,c,"end",f))
return b},
A:function(a,b,c,d,e){var t=e!=null?e:J.dJ(b)
return new P.eB(b,t,!0,a,c,"Index out of range")},
cg:function(a){return new P.hI(a)},
kl:function(a,b,c){var t,s
t=H.D([],[c])
for(s=J.bs(a);s.p();)C.a.l(t,s.gq())
return t},
ad:function(a){H.bq(H.f(a))},
ks:function(a,b,c){return new H.eI(a,H.kj(a,!1,!0,!1),null,null)},
ax:function ax(){},
F:function F(){},
aO:function aO(a,b){this.a=a
this.b=b},
K:function K(){},
az:function az(a){this.a=a},
e2:function e2(){},
e3:function e3(){},
bb:function bb(){},
c7:function c7(a){this.a=a},
bg:function bg(){},
an:function an(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dj:function dj(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eB:function eB(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
t:function t(a){this.a=a},
bT:function bT(a){this.a=a},
ah:function ah(a){this.a=a},
a1:function a1(a){this.a=a},
dn:function dn(){},
dW:function dW(a){this.a=a},
hI:function hI(a){this.a=a},
bB:function bB(a,b,c){this.a=a
this.b=b
this.c=c},
e5:function e5(a,b,c){this.a=a
this.b=b
this.$ti=c},
n:function n(){},
V:function V(){},
d0:function d0(){},
b:function b(){},
aC:function aC(){},
aV:function aV(){},
U:function U(){},
m:function m(){},
bP:function bP(){},
q:function q(){},
bQ:function bQ(a){this.a=a},
iC:function(a){var t,s,r,q,p
if(a==null)return
t=P.Q()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.J)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
n7:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.lv(a,new P.iz(t))
return t},
n8:function(a){var t,s
t=new P.M(0,$.v,null,[null])
s=new P.dw(t,[null])
a.then(H.b6(new P.iA(s),1))["catch"](H.b6(new P.iB(s),1))
return t},
k9:function(){var t=$.k8
if(t==null){t=J.j7(window.navigator.userAgent,"Opera",0)
$.k8=t}return t},
m1:function(){var t,s
t=$.k5
if(t!=null)return t
s=$.k6
if(s==null){s=J.j7(window.navigator.userAgent,"Firefox",0)
$.k6=s}if(s)t="-moz-"
else{s=$.k7
if(s==null){s=!P.k9()&&J.j7(window.navigator.userAgent,"Trident/",0)
$.k7=s}if(s)t="-ms-"
else t=P.k9()?"-o-":"-webkit-"}$.k5=t
return t},
hn:function hn(){},
hp:function hp(a,b){this.a=a
this.b=b},
iz:function iz(a){this.a=a},
ho:function ho(a,b,c){this.a=a
this.b=b
this.c=c},
iA:function iA(a){this.a=a},
iB:function iB(a){this.a=a},
i6:function i6(){},
G:function G(){},
dK:function dK(){},
aL:function aL(){},
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
en:function en(){},
es:function es(){},
eu:function eu(){},
ae:function ae(){},
aB:function aB(){},
eA:function eA(){},
ap:function ap(){},
eL:function eL(){},
eU:function eU(){},
eV:function eV(){},
ar:function ar(){},
fc:function fc(){},
fj:function fj(){},
fo:function fo(){},
fp:function fp(){},
fu:function fu(){},
fv:function fv(){},
bO:function bO(){},
fS:function fS(){},
E:function E(){},
fT:function fT(){},
fU:function fU(){},
dq:function dq(){},
fY:function fY(){},
bS:function bS(){},
as:function as(){},
h6:function h6(){},
he:function he(){},
hg:function hg(){},
hh:function hh(){},
bV:function bV(){},
ib:function ib(){},
ic:function ic(){},
id:function id(){},
cp:function cp(){},
cn:function cn(){},
cu:function cu(){},
cy:function cy(){},
cI:function cI(){},
cR:function cR(){},
cN:function cN(){},
cP:function cP(){},
dO:function dO(){},
fy:function fy(){},
fz:function fz(){},
ir:function ir(){},
fJ:function fJ(){},
co:function co(){},
cL:function cL(){}},W={
m3:function(a,b,c){var t,s
t=document.body
s=(t&&C.o).L(t,a,b,c)
s.toString
t=new H.du(new W.S(s),new W.iy(),[W.p])
return t.gY(t)},
m4:function(a){return"wheel"},
bu:function(a){var t,s,r
t="element tag unavailable"
try{s=J.lz(a)
if(typeof s==="string")t=a.tagName}catch(r){H.O(r)}return t},
mL:function(a,b){return document.createElement(a)},
b5:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kN:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ac:function(a,b,c,d,e){var t=W.kS(new W.hH(c))
t=new W.hG(0,a,b,t,!1,[e])
t.dj(a,b,c,!1,e)
return t},
kL:function(a){var t,s
t=document.createElement("a")
s=new W.ie(t,window.location)
s=new W.bW(s)
s.dk(a)
return s},
mN:function(a,b,c,d){return!0},
mO:function(a,b,c,d){var t,s,r,q,p
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
kO:function(){var t=P.q
t=new W.io(P.jn(C.r,t),P.ag(null,null,null,t),P.ag(null,null,null,t),P.ag(null,null,null,t),null)
t.dn(null,new H.bF(C.r,new W.ip(),[H.aH(C.r,0),null]),["TEMPLATE"],null)
return t},
mT:function(a){var t
if(!!J.r(a).$isaP)return a
t=new P.ho([],[],!1)
t.c=!0
return t.b3(a)},
kS:function(a){var t=$.v
if(t===C.d)return a
return t.e0(a)},
j:function j(){},
dL:function dL(){},
dM:function dM(){},
a0:function a0(){},
dP:function dP(){},
c8:function c8(){},
aM:function aM(){},
c9:function c9(){},
dR:function dR(){},
aN:function aN(){},
dU:function dU(){},
y:function y(){},
ba:function ba(){},
dV:function dV(){},
dX:function dX(){},
dY:function dY(){},
cb:function cb(){},
aP:function aP(){},
cc:function cc(){},
dZ:function dZ(){},
cd:function cd(){},
e_:function e_(){},
ce:function ce(){},
cf:function cf(){},
e0:function e0(){},
e1:function e1(){},
a2:function a2(){},
iy:function iy(){},
i:function i(){},
h:function h(){},
a3:function a3(){},
eq:function eq(){},
er:function er(){},
ev:function ev(){},
a4:function a4(){},
cj:function cj(){},
ez:function ez(){},
bC:function bC(){},
ck:function ck(){},
cl:function cl(){},
bD:function bD(){},
eC:function eC(){},
aT:function aT(){},
eR:function eR(){},
eX:function eX(){},
eZ:function eZ(){},
bG:function bG(){},
a5:function a5(){},
f_:function f_(){},
L:function L(){},
f9:function f9(){},
S:function S(a){this.a=a},
p:function p(){},
dc:function dc(){},
bM:function bM(){},
fi:function fi(){},
fk:function fk(){},
a6:function a6(){},
fn:function fn(){},
fq:function fq(){},
fr:function fr(){},
di:function di(){},
fA:function fA(){},
dk:function dk(){},
fC:function fC(){},
fF:function fF(){},
a7:function a7(){},
fG:function fG(){},
a8:function a8(){},
fI:function fI(){},
a9:function a9(){},
fN:function fN(){},
W:function W(){},
ai:function ai(){},
dp:function dp(){},
fV:function fV(){},
fW:function fW(){},
bR:function bR(){},
aa:function aa(){},
X:function X(){},
fZ:function fZ(){},
h_:function h_(){},
h0:function h0(){},
ab:function ab(){},
aZ:function aZ(){},
h4:function h4(){},
h5:function h5(){},
bi:function bi(){},
h7:function h7(){},
dt:function dt(){},
aE:function aE(){},
hd:function hd(){},
hf:function hf(){},
hi:function hi(){},
hj:function hj(){},
b0:function b0(){},
bU:function bU(){},
hl:function hl(a){this.a=a},
hm:function hm(){},
b1:function b1(){},
hx:function hx(){},
dx:function dx(){},
hz:function hz(){},
hA:function hA(){},
hB:function hB(){},
hW:function hW(){},
hX:function hX(){},
dA:function dA(){},
ig:function ig(){},
ij:function ij(){},
ik:function ik(){},
is:function is(){},
it:function it(){},
hv:function hv(){},
hC:function hC(a){this.a=a},
hF:function hF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jv:function jv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hG:function hG(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
hH:function hH(a){this.a=a},
bW:function bW(a){this.a=a},
z:function z(){},
de:function de(a){this.a=a},
fb:function fb(a){this.a=a},
fa:function fa(a,b,c){this.a=a
this.b=b
this.c=c},
bZ:function bZ(){},
ih:function ih(){},
ii:function ii(){},
io:function io(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
ip:function ip(){},
il:function il(){},
ci:function ci(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
dd:function dd(){},
ie:function ie(a,b){this.a=a
this.b=b},
dC:function dC(a){this.a=a},
iq:function iq(a){this.a=a},
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
nu:function(a){var t,s
t=document
s=W.aT
W.ac(t,"keydown",new B.iZ(),!1,s)
W.ac(t,"keyup",new B.j_(),!1,s)
if(!$.nv)W.ac(t,"mousemove",new B.j0(),!1,W.L)
s=W.L
W.ac(t,"mousedown",new B.j1(),!1,s)
W.ac(t,"mouseup",new B.j2(),!1,s)},
mp:function(a,b,c,d){var t,s,r,q
t=new Float32Array(H.P(3))
s=$.$get$iD()
r=$.$get$c4()
q=new T.aq(new Float32Array(H.P(16)))
q.an()
q=new B.fd(a,b,c,0,new T.B(t),-0.02,s,r,q,new T.B(new Float32Array(H.P(3))),new T.B(new Float32Array(H.P(3))),new T.B(new Float32Array(H.P(3))),new T.B(new Float32Array(H.P(3))),"camera:orbit",!1,!0)
q.d8(a,b,c,d)
return q},
iZ:function iZ(){},
j_:function j_(){},
j0:function j0(){},
j1:function j1(){},
j2:function j2(){},
fd:function fd(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
fe:function fe(a){this.a=a},
ff:function ff(a){this.a=a},
fg:function fg(){},
fh:function fh(a){this.a=a}},G={
mG:function(a){var t,s,r
t=a.split("\n")
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.f(t[s])}return C.a.ah(t,"\n")},
kJ:function(a,b,c){var t,s,r,q
t=J.k(a)
s=t.bY(a,b)
t.bb(a,s,c)
t.bV(a,s)
r=t.b7(a,s,35713)
if(r!=null&&!r){q=t.b6(a,s)
P.ad("E:Compilation failed:")
P.ad("E:"+G.mG(c))
P.ad("E:Failure:")
P.ad(C.h.a2("E:",q))
throw H.e(q)}return s},
kd:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.ja(a[s])
b[t+1]=J.jb(a[s])
b[t+2]=J.jN(a[s])}return b},
m7:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.ja(a[s])
b[t+1]=J.jb(a[s])}return b},
m8:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.ja(a[s])
b[t+1]=J.jb(a[s])
b[t+2]=J.jN(a[s])
b[t+3]=J.lA(a[s])}return b},
m6:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.b7(a[s],0)
b[t+1]=J.b7(a[s],1)
b[t+2]=J.b7(a[s],2)
b[t+3]=J.b7(a[s],3)}return b},
mM:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
for(t=a.e,s=t.gD(t),s=s.gv(s),r=b.x,q=[[P.b,P.n]],p=[P.K],o=[T.aF],n=[T.B],m=[T.av];s.p();){l=s.gq()
if(!r.C(0,l)){k="Dropping unnecessary attribute: "+H.f(l)
if($.l0>0)H.bq("I: "+k)
continue}j=t.h(0,l)
switch($.$get$T().h(0,l).a){case"vec2":b.a6(l,G.m7(H.dF(j,"$isb",m,"$asb"),null),2)
break
case"vec3":b.a6(l,G.kd(H.dF(j,"$isb",n,"$asb"),null),3)
break
case"vec4":b.a6(l,G.m8(H.dF(j,"$isb",o,"$asb"),null),4)
break
case"float":b.a6(l,new Float32Array(H.iv(H.dF(j,"$isb",p,"$asb"))),1)
break
case"uvec4":b.a6(l,G.m6(H.dF(j,"$isb",q,"$asb"),null),4)
break
default:if(H.aw(!1))H.aG("unknown type for "+H.f(l)+" ["+J.ly(j[0]).k(0)+"] ["+new H.aD(H.iI(j),null).k(0)+"] "+H.f(j))}}},
mz:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.ag(null,null,null,P.q)
s=c.b
r=d.b
q=c.f
p=J.ll(b.a)
o=G.kJ(b.a,35633,s)
J.jK(b.a,p,o)
n=G.kJ(b.a,35632,r)
J.jK(b.a,p,n)
if(q.length>0)J.lM(b.a,p,q,35980)
J.lE(b.a,p)
if(!J.lD(b.a,p,35714))H.C(J.lC(b.a,p))
t=new G.fx(b,c,d,p,P.jn(c.c,null),P.Q(),P.Q(),t,null,a,!1,!0)
t.d9(a,b,c,d)
return t},
f0:function f0(){},
hb:function hb(){},
dQ:function dQ(){},
dT:function dT(a,b){this.a=a
this.b=b},
eo:function eo(a,b,c){this.a=a
this.b=b
this.c=c},
ep:function ep(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ey:function ey(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ds:function ds(a,b,c){this.a=a
this.b=b
this.c=c},
dr:function dr(a,b,c){this.a=a
this.b=b
this.c=c},
eW:function eW(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
eY:function eY(a,b,c,d,e,f,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
fl:function fl(){},
fx:function fx(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
w:function w(a,b,c){this.a=a
this.b=b
this.c=c},
dl:function dl(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fH:function fH(){}},R={dg:function dg(a,b,c,d,e,f,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
_.fy=a
_.go=b
_.x=c
_.y=d
_.z=e
_.Q=f
_.ch=a0
_.cx=a1
_.cy=a2
_.db=a3
_.d=a4
_.a=a5
_.b=a6
_.c=a7},fL:function fL(){},fM:function fM(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},D={
mn:function(a){var t,s
t=new P.M(0,$.v,null,[null])
s=new XMLHttpRequest()
C.x.eE(s,"GET",a)
W.ac(s,"loadend",new D.eQ(new P.dw(t,[null]),s),!1,W.nI)
C.x.E(s,"")
return t},
eQ:function eQ(a,b){this.a=a
this.b=b}},A={
iJ:function(a){var t,s
t=C.j.em(a,0,new A.iK())
s=536870911&t+(C.b.ct(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
iK:function iK(){}},T={
mF:function(a,b,c){var t=new Float32Array(3)
t[0]=a
t[1]=b
t[2]=c
return new T.B(t)},
aq:function aq(a){this.a=a},
av:function av(a){this.a=a},
B:function B(a){this.a=a},
aF:function aF(a){this.a=a},
no:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
t={}
s=document
r=new R.fM(0,0,null,null,null,null)
r.dc(C.q.cz(s,"stats"),"blue","gray")
q=C.q.eG(s,"#webgl-canvas")
p=new G.dT(null,q)
s=(q&&C.K).cw(q,"webgl2",P.aU(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
p.a=s
if(s==null)H.C(P.cg('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
o="ChronosGL Config: "+J.aK(J.lB(s))
if($.l0>0)P.ad("I: "+o)
J.lj(s,0,0,0,1)
J.dI(s,2929)
n=B.mp(25,0,0,q)
s=new T.aq(new Float32Array(H.P(16)))
s.an()
o=new T.aq(new Float32Array(H.P(16)))
o.an()
m=new R.dg(q,p,n,50,1,0.1,1000,s,o,new T.aq(new Float32Array(H.P(16))),P.Q(),"perspective",!1,!0)
m.bk()
m.cb(null)
W.ac(window,"resize",m.geK(),!1,W.i)
l=G.mz("demo",p,$.$get$kZ(),$.$get$kY())
t.a=null
k=new G.eW(P.Q(),"mat",!1,!0)
k.Z("cDepthTest",!0)
k.Z("cDepthWrite",!0)
k.Z("cBlendEquation",$.$get$jW())
k.Z("cStencilFunc",$.$get$kt())
k.Z("uColor",$.$get$k2())
o=new Float32Array(H.P(16))
s=new T.aq(o)
s.an()
j=Math.cos(1.5707963267948966)
i=Math.sin(1.5707963267948966)
h=o[4]
g=o[8]
f=o[5]
e=o[9]
d=o[6]
c=o[10]
b=o[7]
a=o[11]
a0=-i
o[4]=h*j+g*i
o[5]=f*j+e*i
o[6]=d*j+c*i
o[7]=b*j+a*i
o[8]=h*a0+g*j
o[9]=f*a0+e*j
o[10]=d*a0+c*j
o[11]=b*a0+a*j
k.Z("uModelMatrix",s)
t.b=0
P.ma([D.mn($.l5)],null,!1).b0(new T.iW(t,l,new T.iV(t,r,n,m,l,k)))},
iV:function iV(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iW:function iW(a,b,c){this.a=a
this.b=b
this.c=c}},Y={
mb:function(a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
t=new G.ey(!1,[],[],[],P.Q())
t.bg("aTexUV")
t.bg("aNormal")
s=P.Q()
r=a6.split("\n")
q=[]
p=[]
o=[]
n=Date.now()
m=P.ks("\\s+",!0,!1)
l=P.ks("\\s\\s*\\$",!0,!1)
for(k=r.length,j=0;j<r.length;r.length===k||(0,H.J)(r),++j){i=r[j]
i.toString
h=H.nx(i,m," ")
g=H.nz(h,l,"",0)
if(g.length===0||g[0]==="#")continue
f=g.split(" ")
if(J.x(f[0],"g"))s.i(0,f[1],q.length)
else if(J.x(f[0],"v")){h=H.aX(f[1],null)
e=H.aX(f[2],null)
d=H.aX(f[3],null)
c=new Float32Array(3)
c[0]=h
c[1]=e
c[2]=d
C.a.l(q,new T.B(c))}else if(J.x(f[0],"vt")){h=H.aX(f[1],null)
e=H.aX(f[2],null)
d=new Float32Array(2)
d[0]=h
d[1]=e
C.a.l(o,new T.av(d))}else if(J.x(f[0],"vn")){h=H.aX(f[1],null)
e=H.aX(f[2],null)
d=H.aX(f[3],null)
c=new Float32Array(3)
c[0]=h
c[1]=e
c[2]=d
C.a.l(p,new T.B(c))}else if(J.x(f[0],"f")){h=f.length
if(h!==4&&h!==5){H.bq("*** Error: face '"+g+"' not handled")
continue}b=[]
a=[]
a0=[]
for(a1=1;h=f.length,a1<h;++a1){a2=J.lJ(f[a1],"/")
H.d(a2.length>0)
for(;a2.length<3;)C.a.l(a2,"")
a3=H.jr(a2[0],null,null)-1
a4=J.x(a2[1],"")?-1:H.jr(a2[1],null,null)-1
a5=J.x(a2[2],"")?-1:H.jr(a2[2],null,null)-1
if(a3<q.length)C.a.l(b,q[a3])
else C.a.l(b,new T.B(new Float32Array(3)))
if(a4!==-1&&a4<o.length)C.a.l(a0,o[a4])
else{H.bq("problem uv "+a1+" "+a4)
C.a.l(a0,new T.av(new Float32Array(2)))}if(a5!==-1&&a5<p.length)C.a.l(a,p[a5])
else{H.bq("problem normals "+a1+" "+a5)
C.a.l(a,new T.B(new Float32Array(3)))}}if(h===4)t.cZ(b)
else t.d_(b)
t.cX("aNormal",a)
t.cW("aTexUV",a0)}}P.ad("loaded ("+P.m2(0,0,0,Date.now()-new P.aO(n,!1).a,0,0).k(0)+") "+t.k(0))
return t}}
var v=[C,H,J,P,W,B,G,R,D,A,T,Y]
setFunctionNamesIfNecessary(v)
var $={}
H.jk.prototype={}
J.a.prototype={
w:function(a,b){return a===b},
gu:function(a){return H.aW(a)},
k:function(a){return H.fs(a)},
gA:function(a){return new H.aD(H.iI(a),null)}}
J.eH.prototype={
k:function(a){return String(a)},
gu:function(a){return a?519018:218159},
gA:function(a){return C.ar},
$isax:1}
J.d3.prototype={
w:function(a,b){return null==b},
k:function(a){return"null"},
gu:function(a){return 0},
gA:function(a){return C.al}}
J.bE.prototype={
gu:function(a){return 0},
gA:function(a){return C.ak},
k:function(a){return String(a)},
$iskh:1}
J.fm.prototype={}
J.b_.prototype={}
J.aS.prototype={
k:function(a){var t=a[$.$get$k4()]
return t==null?this.cS(a):J.aK(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isji:1}
J.aQ.prototype={
aT:function(a,b){if(!!a.immutable$list)throw H.e(new P.t(b))},
aS:function(a,b){if(!!a.fixed$length)throw H.e(new P.t(b))},
l:function(a,b){this.aS(a,"add")
a.push(b)},
J:function(a,b){var t,s,r,q,p
t=a.length
this.aS(a,"addAll")
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.J)(b),++r,t=p){q=b[r]
p=t+1
H.d(t===a.length||H.C(new P.a1(a)))
a.push(q)}},
c9:function(a,b){return new H.bF(a,b,[H.aH(a,0),null])},
ah:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.f(a[s])
return t.join(b)},
t:function(a,b){return a[b]},
gel:function(a){if(a.length>0)return a[0]
throw H.e(H.eG())},
gaV:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.e(H.eG())},
ba:function(a,b,c,d,e){var t,s
this.aT(a,"setRange")
P.kr(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.C(P.aY(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.e(H.mj())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=d[e+s]
else for(s=0;s<t;++s)a[b+s]=d[e+s]},
bM:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.e(new P.a1(a))}return!1},
cM:function(a,b){this.aT(a,"sort")
H.dm(a,0,a.length-1,P.n9())},
aB:function(a){return this.cM(a,null)},
B:function(a,b){var t
for(t=0;t<a.length;++t)if(J.x(a[t],b))return!0
return!1},
k:function(a){return P.eF(a,"[","]")},
gv:function(a){return new J.dN(a,a.length,0,null,[H.aH(a,0)])},
gu:function(a){return H.aW(a)},
gj:function(a){return a.length},
sj:function(a,b){this.aS(a,"set length")
if(b<0)throw H.e(P.aY(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.I(a,b))
if(b>=a.length||b<0)throw H.e(H.I(a,b))
return a[b]},
i:function(a,b,c){this.aT(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.I(a,b))
if(b>=a.length||b<0)throw H.e(H.I(a,b))
a[b]=c},
$isl:1,
$asl:function(){},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
J.jj.prototype={}
J.dN.prototype={
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
e2:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.e(new P.t(""+a+".ceil()"))},
a1:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(new P.t(""+a+".round()"))},
e3:function(a,b,c){if(this.O(b,c)>0)throw H.e(H.N(b))
if(this.O(a,b)<0)return b
if(this.O(a,c)>0)return c
return a},
eS:function(a,b){var t
if(b>20)throw H.e(P.aY(b,0,20,"fractionDigits",null))
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
cu:function(a,b){if(typeof b!=="number")throw H.e(H.N(b))
return a/b},
F:function(a,b){if(typeof b!=="number")throw H.e(H.N(b))
return a*b},
aE:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bI(a,b)},
H:function(a,b){return(a|0)===a?a/b|0:this.bI(a,b)},
bI:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.e(new P.t("Result of truncating division is "+H.f(t)+": "+H.f(a)+" ~/ "+b))},
aO:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
ct:function(a,b){if(typeof b!=="number")throw H.e(H.N(b))
return(a&b)>>>0},
cU:function(a,b){if(typeof b!=="number")throw H.e(H.N(b))
return(a^b)>>>0},
am:function(a,b){if(typeof b!=="number")throw H.e(H.N(b))
return a<b},
az:function(a,b){if(typeof b!=="number")throw H.e(H.N(b))
return a>b},
cv:function(a,b){if(typeof b!=="number")throw H.e(H.N(b))
return a>=b},
gA:function(a){return C.au},
$isU:1}
J.d2.prototype={
gA:function(a){return C.at},
$isK:1,
$isn:1,
$isU:1}
J.d1.prototype={
gA:function(a){return C.as},
$isK:1,
$isU:1}
J.aR.prototype={
bU:function(a,b){if(b<0)throw H.e(H.I(a,b))
if(b>=a.length)H.C(H.I(a,b))
return a.charCodeAt(b)},
a7:function(a,b){if(b>=a.length)throw H.e(H.I(a,b))
return a.charCodeAt(b)},
a2:function(a,b){if(typeof b!=="string")throw H.e(P.jV(b,null,null))
return a+b},
cN:function(a,b){var t=a.split(b)
return t},
cO:function(a,b,c){var t
if(c>a.length)throw H.e(P.aY(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bc:function(a,b){return this.cO(a,b,0)},
aC:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.ft(b,null,null))
if(b>c)throw H.e(P.ft(b,null,null))
if(c>a.length)throw H.e(P.ft(c,null,null))
return a.substring(b,c)},
cP:function(a,b){return this.aC(a,b,null)},
eR:function(a){return a.toLowerCase()},
eU:function(a){var t,s,r,q,p
t=a.trim()
s=t.length
if(s===0)return t
if(this.a7(t,0)===133){r=J.ml(t,1)
if(r===s)return""}else r=0
q=s-1
p=this.bU(t,q)===133?J.mm(t,q):s
if(r===0&&p===s)return t
return t.substring(r,p)},
e6:function(a,b,c){if(c>a.length)throw H.e(P.aY(c,0,a.length,null,null))
return H.nw(a,b,c)},
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
gA:function(a){return C.am},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.e(H.I(a,b))
return a[b]},
$isl:1,
$asl:function(){},
$isq:1}
H.c.prototype={$asc:null}
H.be.prototype={
gv:function(a){return new H.d5(this,this.gj(this),0,null,[H.ak(this,"be",0)])},
ax:function(a,b){return this.cR(0,b)},
eQ:function(a,b){var t,s
t=H.D([],[H.ak(this,"be",0)])
C.a.sj(t,this.gj(this))
for(s=0;s<this.gj(this);++s)t[s]=this.t(0,s)
return t},
eP:function(a){return this.eQ(a,!0)}}
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
gv:function(a){return new H.eS(null,J.bs(this.a),this.b,this.$ti)},
gj:function(a){return J.dJ(this.a)},
$asV:function(a,b){return[b]}}
H.e4.prototype={$isc:1,
$asc:function(a,b){return[b]}}
H.eS.prototype={
p:function(){var t=this.b
if(t.p()){this.sa9(this.c.$1(t.gq()))
return!0}this.sa9(null)
return!1},
gq:function(){return this.a},
sa9:function(a){this.a=a},
$asd0:function(a,b){return[b]}}
H.bF.prototype={
gj:function(a){return J.dJ(this.a)},
t:function(a,b){return this.b.$1(J.ls(this.a,b))},
$asc:function(a,b){return[b]},
$asbe:function(a,b){return[b]},
$asV:function(a,b){return[b]}}
H.du.prototype={
gv:function(a){return new H.hk(J.bs(this.a),this.b,this.$ti)}}
H.hk.prototype={
p:function(){var t,s
for(t=this.a,s=this.b;t.p();)if(s.$1(t.gq()))return!0
return!1},
gq:function(){return this.a.gq()}}
H.ch.prototype={}
H.j3.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.j4.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.i3.prototype={
sex:function(a){this.z=a},
seA:function(a){this.ch=a}}
H.b3.prototype={
bL:function(a,b){if(!this.f.w(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.aQ()},
eJ:function(a){var t,s,r,q,p
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
dU:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.r(a),s=0;r=this.ch,s<r.length;s+=2)if(t.w(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
eI:function(a){var t,s,r
if(this.ch==null)return
for(t=J.r(a),s=0;r=this.ch,s<r.length;s+=2)if(t.w(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.C(new P.t("removeRange"))
P.kr(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
cJ:function(a,b){if(!this.r.w(0,a))return
this.db=b},
eq:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.E(0,c)
return}H.d(b===1)
t=this.cx
if(t==null){t=P.jo(null,null)
this.cx=t}t.P(0,new H.hZ(a,c))},
ep:function(a,b){var t
if(!this.r.w(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.av()
return}H.d(b===1)
t=this.cx
if(t==null){t=P.jo(null,null)
this.cx=t}t.P(0,this.gey())},
er:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.ad(a)
if(b!=null)P.ad(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.aK(a)
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
p=H.ay(o)
this.er(q,p)
if(this.db){this.av()
if(this===u.globalState.e)throw o}}finally{this.cy=H.n4(r)
u.globalState.d=H.jD(t,"$isb3")
if(t!=null)$=t.gew()
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
for(t=this.b,s=t.gcq(t),s=s.gv(s);s.p();)s.gq().dt()
t.S(0)
this.c.S(0)
u.globalState.z.ai(0,this.a)
this.dx.S(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].E(0,t[r+1])
this.ch=null}},
gew:function(){return this.d},
ge7:function(){return this.e}}
H.hZ.prototype={
$0:function(){this.a.E(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.hD.prototype={
ed:function(){var t=this.a
if(t.b===t.c)return
return t.ca()},
cd:function(){var t,s,r
t=this.ed()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.C(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gag(s)}else s=!1
else s=!1
else s=!1
if(s)H.C(P.cg("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gag(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aU(["command","close"])
r=new H.aj(!0,new P.dz(0,null,null,null,null,null,0,[null,P.n])).I(r)
s.toString
self.postMessage(r)}return!1}t.eF()
return!0},
bG:function(){if(self.window!=null)new H.hE(this).$0()
else for(;this.cd(););},
aj:function(){var t,s,r,q,p
if(!u.globalState.x)this.bG()
else try{this.bG()}catch(r){t=H.O(r)
s=H.ay(r)
q=u.globalState.Q
p=P.aU(["command","error","msg",H.f(t)+"\n"+H.f(s)])
p=new H.aj(!0,P.bY(null,P.n)).I(p)
q.toString
self.postMessage(p)}}}
H.hE.prototype={
$0:function(){if(!this.a.cd())return
P.mE(C.w,this)},
$S:function(){return{func:1,v:true}}}
H.b4.prototype={
eF:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.ad(this.b)}}
H.i2.prototype={}
H.eD.prototype={
$0:function(){H.mf(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.eE.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(!this.d)this.a.$1(this.c)
else{s=this.a
if(H.bo(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.bo(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.aQ()},
$S:function(){return{func:1,v:true}}}
H.hw.prototype={}
H.bk.prototype={
E:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.mS(b)
if(t.ge7()===s){s=J.Z(r)
switch(s.h(r,0)){case"pause":t.bL(s.h(r,1),s.h(r,2))
break
case"resume":t.eJ(s.h(r,1))
break
case"add-ondone":t.dU(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.eI(s.h(r,1))
break
case"set-errors-fatal":t.cJ(s.h(r,1),s.h(r,2))
break
case"ping":t.eq(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.ep(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.ai(0,s)
break}return}u.globalState.f.a.P(0,new H.b4(t,new H.i5(this,r),"receive"))},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bk){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gu:function(a){return this.b.a}}
H.i5.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dq(0,this.b)},
$S:function(){return{func:1}}}
H.c_.prototype={
E:function(a,b){var t,s,r
t=P.aU(["command","message","port",this,"msg",b])
s=new H.aj(!0,P.bY(null,P.n)).I(t)
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
gu:function(a){return C.b.cU((this.b<<16^this.a<<8)>>>0,this.c)}}
H.bh.prototype={
dt:function(){this.c=!0
this.b=null},
dq:function(a,b){if(this.c)return
this.b.$1(b)},
$ismx:1}
H.h1.prototype={
dd:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.P(0,new H.b4(s,new H.h2(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.b6(new H.h3(this,b),0),a)}else{H.d(a>0)
throw H.e(new P.t("Timer greater than 0."))}}}
H.h2.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.h3.prototype={
$0:function(){this.a.c=null
H.iU()
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
H.aj.prototype={
I:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gj(t))
t=J.r(a)
if(!!t.$isbH)return["buffer",a]
if(!!t.$isbf)return["typed",a]
if(!!t.$isl)return this.cE(a)
if(!!t.$ismc){r=this.gcB()
q=t.gD(a)
q=H.jp(q,r,H.ak(q,"V",0),null)
q=P.kl(q,!0,H.ak(q,"V",0))
t=t.gcq(a)
t=H.jp(t,r,H.ak(t,"V",0),null)
return["map",q,P.kl(t,!0,H.ak(t,"V",0))]}if(!!t.$iskh)return this.cF(a)
if(!!t.$isa)this.co(a)
if(!!t.$ismx)this.ak(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isbk)return this.cG(a)
if(!!t.$isc_)return this.cH(a)
if(!!t.$isb9){p=a.$static_name
if(p==null)this.ak(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isao)return["capability",a.a]
if(!(a instanceof P.m))this.co(a)
return["dart",u.classIdExtractor(a),this.cD(u.classFieldsExtractor(a))]},
ak:function(a,b){throw H.e(new P.t((b==null?"Can't transmit:":b)+" "+H.f(a)))},
co:function(a){return this.ak(a,null)},
cE:function(a){var t
H.d(typeof a!=="string")
t=this.cC(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.ak(a,"Can't serialize indexable: ")},
cC:function(a){var t,s
t=[]
C.a.sj(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.I(a[s])
return t},
cD:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.I(a[t]))
return a},
cF:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.ak(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sj(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.I(a[t[r]])
return["js-object",t,s]},
cH:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cG:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.b2.prototype={
T:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.e(P.je("Bad serialized message: "+H.f(a)))
switch(C.a.gel(a)){case"ref":H.d(J.x(a[0],"ref"))
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
case"map":return this.eg(a)
case"sendport":return this.eh(a)
case"raw sendport":H.d(J.x(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.ef(a)
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
eg:function(a){var t,s,r,q,p
H.d(J.x(a[0],"map"))
t=a[1]
s=a[2]
r=P.Q()
C.a.l(this.b,r)
t=J.lF(t,this.gee()).eP(0)
for(q=J.Z(s),p=0;p<t.length;++p)r.i(0,t[p],this.T(q.h(s,p)))
return r},
eh:function(a){var t,s,r,q,p,o,n
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
ef:function(a){var t,s,r,q,p,o
H.d(J.x(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.Z(t),p=J.Z(s),o=0;o<q.gj(t);++o)r[q.h(t,o)]=this.T(p.h(s,o))
return r}}
H.fw.prototype={}
H.h8.prototype={
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
H.eK.prototype={
k:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.f(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.f(this.a)+")"}}
H.hc.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.j5.prototype={
$1:function(a){if(!!J.r(a).$isbb)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.dB.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.iP.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.iQ.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.iR.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.iS.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.iT.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.b9.prototype={
k:function(a){return"Closure '"+H.dh(this).trim()+"'"},
$isji:1,
geW:function(){return this},
$D:null}
H.fX.prototype={}
H.fK.prototype={
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
if(t==null)s=H.aW(this.a)
else s=typeof t!=="object"?J.am(t):H.aW(t)
return(s^H.aW(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.f(this.d)+"' of "+H.fs(t)}}
H.ha.prototype={
k:function(a){return this.a}}
H.dS.prototype={
k:function(a){return this.a}}
H.fB.prototype={
k:function(a){return"RuntimeError: "+H.f(this.a)}}
H.hq.prototype={
k:function(a){return C.h.a2("Assertion failed: ",P.jh(this.a))}}
H.aD.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gu:function(a){return J.am(this.a)},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.aD){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.af.prototype={
gj:function(a){return this.a},
gag:function(a){return this.a===0},
gD:function(a){return new H.eN(this,[H.aH(this,0)])},
gcq:function(a){return H.jp(this.gD(this),new H.eJ(this),H.aH(this,0),H.aH(this,1))},
C:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.by(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.by(s,b)}else return this.es(b)},
es:function(a){var t=this.d
if(t==null)return!1
return this.af(this.aq(t,this.ae(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.aa(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.aa(r,b)
return s==null?null:s.b}else return this.eu(b)},
eu:function(a){var t,s,r
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
else return this.ev(b)},
ev:function(a){var t,s,r,q
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
t=new H.eM(a,b,null,null,[null,null])
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
k:function(a){return P.mo(this)},
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
$ismc:1}
H.eJ.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.eM.prototype={}
H.eN.prototype={
gj:function(a){return this.a.a},
gv:function(a){var t,s
t=this.a
s=new H.eO(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.eO.prototype={
gq:function(){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a1(t))
else{t=this.c
if(t==null){this.sbm(null)
return!1}else{this.sbm(t.a)
this.c=this.c.c
return!0}}},
sbm:function(a){this.d=a}}
H.iL.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.iM.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.q]}}}
H.iN.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.q]}}}
H.eI.prototype={
k:function(a){return"RegExp/"+this.a+"/"},
gbD:function(){var t=this.c
if(t!=null)return t
t=this.b
t=H.kj(this.a,t.multiline,!t.ignoreCase,!0)
this.c=t
return t},
dC:function(a,b){var t,s
t=this.gbD()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
return H.mR(this,s)}}
H.i4.prototype={
h:function(a,b){return this.b[b]},
dm:function(a,b){var t,s
t=this.b
s=t.input
H.d(typeof s==="string")
t=t.index
H.d(typeof t==="number"&&Math.floor(t)===t)}}
H.bH.prototype={
gA:function(a){return C.ad},
$isbH:1}
H.bf.prototype={$isbf:1}
H.f1.prototype={
gA:function(a){return C.ae}}
H.d8.prototype={
gj:function(a){return a.length},
$isl:1,
$asl:function(){},
$iso:1,
$aso:function(){}}
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
gA:function(a){return C.af},
$isc:1,
$asc:function(){return[P.K]},
$isb:1,
$asb:function(){return[P.K]},
$iset:1}
H.f2.prototype={
gA:function(a){return C.ag},
$isc:1,
$asc:function(){return[P.K]},
$isb:1,
$asb:function(){return[P.K]}}
H.f3.prototype={
gA:function(a){return C.ah},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.C(H.I(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]}}
H.f4.prototype={
gA:function(a){return C.ai},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.C(H.I(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]},
$iske:1}
H.f5.prototype={
gA:function(a){return C.aj},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.C(H.I(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]}}
H.f6.prototype={
gA:function(a){return C.an},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.C(H.I(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]},
$iskG:1}
H.f7.prototype={
gA:function(a){return C.ao},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.C(H.I(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]},
$iskH:1}
H.db.prototype={
gA:function(a){return C.ap},
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.C(H.I(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]}}
H.f8.prototype={
gA:function(a){return C.aq},
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.C(H.I(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]},
$iskI:1}
H.bI.prototype={
$asl:function(){},
$isc:1,
$asc:function(){return[P.n]},
$aso:function(){},
$isb:1,
$asb:function(){return[P.n]}}
H.bJ.prototype={
$asl:function(){},
$isc:1,
$asc:function(){return[P.K]},
$aso:function(){},
$isb:1,
$asb:function(){return[P.K]}}
H.bK.prototype={
$asl:function(){},
$asc:function(){return[P.K]},
$aso:function(){},
$asb:function(){return[P.K]}}
H.bL.prototype={
$asl:function(){},
$asc:function(){return[P.n]},
$aso:function(){},
$asb:function(){return[P.n]}}
P.hs.prototype={
$1:function(a){var t,s
H.iU()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.hr.prototype={
$1:function(a){var t,s
t=this.a
H.d(t.a==null);++u.globalState.f.b
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.ht.prototype={
$0:function(){H.iU()
this.a.$0()},
$S:function(){return{func:1}}}
P.hu.prototype={
$0:function(){H.iU()
this.a.$0()},
$S:function(){return{func:1}}}
P.ex.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.b)this.d.G(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.b)this.d.G(t.c,t.d)},
$S:function(){return{func:1,args:[,,]}}}
P.ew.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){r[this.e]=a
if(s===0)this.d.bx(r)}else if(t.b===0&&!this.b)this.d.G(t.c,t.d)},
$S:function(){return{func:1,args:[,]}}}
P.hy.prototype={
e5:function(a,b){if(a==null)a=new P.bg()
if(this.a.a!==0)throw H.e(new P.ah("Future already completed"))
$.v.toString
this.G(a,b)},
e4:function(a){return this.e5(a,null)}}
P.dw.prototype={
as:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.ah("Future already completed"))
t.bq(b)},
G:function(a,b){this.a.br(a,b)}}
P.im.prototype={
as:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.ah("Future already completed"))
t.aG(b)},
G:function(a,b){this.a.G(a,b)}}
P.dy.prototype={
eB:function(a){if(this.c!==6)return!0
H.d(!0)
return this.b.b.b_(this.d,a.a)},
eo:function(a){var t,s
t=(this.c&2)!==0
if(t){H.d(t)
t=this.e!=null}else t=!1
H.d(t)
s=this.e
t=this.b.b
if(H.bo(s,{func:1,args:[P.m,P.bP]}))return t.eL(s,a.a,a.b)
else return t.b_(s,a.a)}}
P.M.prototype={
b1:function(a,b){var t,s,r
t=$.v
if(t!==C.d){t.toString
if(b!=null)b=P.mX(b,t)}s=new P.M(0,t,null,[null])
r=b==null?1:3
this.bo(new P.dy(null,s,r,a,b,[H.aH(this,0),null]))
return s},
b0:function(a){return this.b1(a,null)},
bt:function(a){H.d(this.a<4)
H.d(a.a>=4)
this.a=a.a
this.c=a.c},
bo:function(a){var t
H.d(a.a==null)
t=this.a
if(t<=1){a.a=H.jD(this.c,"$isdy")
this.c=a}else{if(t===2){H.d(!0)
t=this.c
if(t.a<4){t.bo(a)
return}this.bt(t)}H.d(this.a>=4)
t=this.b
t.toString
P.bm(null,null,t,new P.hJ(this,a))}},
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
P.bm(null,null,s,new P.hR(t,this))}},
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
if(H.c3(a,"$isbc",t,"$asbc"))if(H.c3(a,"$isM",t,null))P.hM(a,this)
else P.kK(a,this)
else{s=this.aM()
H.d(this.a<4)
this.a=4
this.c=a
P.bj(this,s)}},
bx:function(a){var t
H.d(this.a<4)
H.d(!J.r(a).$isbc)
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
dv:function(a){return this.G(a,null)},
bq:function(a){var t
H.d(this.a<4)
if(H.c3(a,"$isbc",this.$ti,"$asbc")){this.ds(a)
return}H.d(this.a===0)
this.a=1
t=this.b
t.toString
P.bm(null,null,t,new P.hL(this,a))},
ds:function(a){var t
if(H.c3(a,"$isM",this.$ti,null)){if(a.a===8){H.d(this.a===0)
this.a=1
t=this.b
t.toString
P.bm(null,null,t,new P.hQ(this,a))}else P.hM(a,this)
return}P.kK(a,this)},
br:function(a,b){var t
H.d(this.a<4)
H.d(this.a===0)
this.a=1
t=this.b
t.toString
P.bm(null,null,t,new P.hK(this,a,b))},
$isbc:1,
gaP:function(){return this.a},
gdN:function(){return this.c}}
P.hJ.prototype={
$0:function(){P.bj(this.a,this.b)},
$S:function(){return{func:1}}}
P.hR.prototype={
$0:function(){P.bj(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.hN.prototype={
$1:function(a){var t=this.a
H.d(t.a===1)
H.d(t.a===1)
t.a=0
t.aG(a)},
$S:function(){return{func:1,args:[,]}}}
P.hO.prototype={
$2:function(a,b){var t=this.a
H.d(t.a===1)
t.G(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.hP.prototype={
$0:function(){this.a.G(this.b,this.c)},
$S:function(){return{func:1}}}
P.hL.prototype={
$0:function(){this.a.bx(this.b)},
$S:function(){return{func:1}}}
P.hQ.prototype={
$0:function(){P.hM(this.b,this.a)},
$S:function(){return{func:1}}}
P.hK.prototype={
$0:function(){this.a.G(this.b,this.c)},
$S:function(){return{func:1}}}
P.hU.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.d
p=q.c
H.d((p&1)===0)
o=(p&2)===0
H.d(o)
t=null
try{H.d(o)
H.d(p===8)
t=q.b.b.cc(q.d)}catch(n){s=H.O(n)
r=H.ay(n)
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
return}if(!!J.r(t).$isbc){if(t instanceof P.M&&t.gaP()>=4){if(t.gaP()===8){q=t
H.d(q.gaP()===8)
p=this.b
p.b=q.gdN()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.b0(new P.hV(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.hV.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.hT.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.d((r.c&1)!==0)
this.a.b=r.b.b.b_(r.d,this.c)}catch(q){t=H.O(q)
s=H.ay(q)
r=this.a
r.b=new P.b8(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.hS.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.d(q.a===8)
t=q.c
q=this.c
if(q.eB(t)){H.d((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.eo(t)
p.a=!1}}catch(o){s=H.O(o)
r=H.ay(o)
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
P.dv.prototype={}
P.fO.prototype={
gj:function(a){var t,s
t={}
s=new P.M(0,$.v,null,[P.n])
t.a=0
this.ez(new P.fQ(t),!0,new P.fR(t,s),s.gdu())
return s}}
P.fQ.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.fR.prototype={
$0:function(){this.b.aG(this.a.a)},
$S:function(){return{func:1}}}
P.fP.prototype={}
P.b8.prototype={
k:function(a){return H.f(this.a)},
$isbb:1}
P.iu.prototype={}
P.ix.prototype={
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
P.i7.prototype={
eM:function(a){var t,s,r
try{if(C.d===$.v){a.$0()
return}P.kP(null,null,this,a)}catch(r){t=H.O(r)
s=H.ay(r)
P.iw(null,null,this,t,s)}},
eN:function(a,b){var t,s,r
try{if(C.d===$.v){a.$1(b)
return}P.kQ(null,null,this,a,b)}catch(r){t=H.O(r)
s=H.ay(r)
P.iw(null,null,this,t,s)}},
e_:function(a){return new P.i9(this,a)},
aR:function(a){return new P.i8(this,a)},
e0:function(a){return new P.ia(this,a)},
h:function(a,b){return},
cc:function(a){if($.v===C.d)return a.$0()
return P.kP(null,null,this,a)},
b_:function(a,b){if($.v===C.d)return a.$1(b)
return P.kQ(null,null,this,a,b)},
eL:function(a,b,c){if($.v===C.d)return a.$2(b,c)
return P.mY(null,null,this,a,b,c)}}
P.i9.prototype={
$0:function(){return this.a.cc(this.b)},
$S:function(){return{func:1}}}
P.i8.prototype={
$0:function(){return this.a.eM(this.b)},
$S:function(){return{func:1}}}
P.ia.prototype={
$1:function(a){return this.a.eN(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.dz.prototype={
ae:function(a){return H.nq(a)&0x3ffffff},
af:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.i_.prototype={
gv:function(a){var t=new P.bX(this,this.r,null,null,[null])
t.c=this.e
return t},
gj:function(a){return this.a},
B:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dw(b)},
dw:function(a){var t=this.d
if(t==null)return!1
return this.ap(t[this.ao(a)],a)>=0},
c8:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.B(0,a)?a:null
else return this.dH(a)},
dH:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.ao(a)]
r=this.ap(s,a)
if(r<0)return
return J.b7(s,r).gdA()},
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
if(t==null){t=P.mP()
this.d=t}s=this.ao(b)
r=t[s]
if(r==null){q=[this.aF(b)]
H.d(q!=null)
t[s]=q}else{if(this.ap(r,b)>=0)return!1
r.push(this.aF(b))}return!0},
ai:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bv(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bv(this.c,b)
else return this.dI(0,b)},
dI:function(a,b){var t,s,r
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
t=new P.i0(a,null,null)
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
P.i0.prototype={
gdA:function(){return this.a}}
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
P.hY.prototype={}
P.d4.prototype={}
P.u.prototype={
gv:function(a){return new H.d5(a,this.gj(a),0,null,[H.ak(a,"u",0)])},
t:function(a,b){return this.h(a,b)},
c9:function(a,b){return new H.bF(a,b,[H.ak(a,"u",0),null])},
em:function(a,b,c){var t,s,r
t=this.gj(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gj(a))throw H.e(new P.a1(a))}return s},
k:function(a){return P.eF(a,"[","]")},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
P.eT.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.f(a)
t.a=s+": "
t.a+=H.f(b)},
$S:function(){return{func:1,args:[,,]}}}
P.eP.prototype={
gv:function(a){return new P.i1(this,this.c,this.d,this.b,null,this.$ti)},
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
k:function(a){return P.eF(this,"{","}")},
ca:function(){var t,s,r
t=this.b
if(t===this.c)throw H.e(H.eG());++this.d
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
d7:function(a,b){var t
H.d(!0)
t=new Array(8)
t.fixed$length=Array
this.sbH(H.D(t,[b]))},
sbH:function(a){this.a=a},
$asc:null}
P.i1.prototype={
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
P.fE.prototype={
J:function(a,b){var t
for(t=J.bs(b);t.p();)this.l(0,t.gq())},
k:function(a){return P.eF(this,"{","}")},
$isc:1,
$asc:null}
P.fD.prototype={}
P.bN.prototype={$isc:1,$asc:null,$isb:1,$asb:null}
P.ax.prototype={}
P.F.prototype={}
P.aO.prototype={
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.aO))return!1
return this.a===b.a&&this.b===b.b},
O:function(a,b){return C.b.O(this.a,b.a)},
gu:function(a){var t=this.a
return(t^C.b.aO(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.m_(H.mw(this))
s=P.ca(H.mu(this))
r=P.ca(H.mq(this))
q=P.ca(H.mr(this))
p=P.ca(H.mt(this))
o=P.ca(H.mv(this))
n=P.m0(H.ms(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
geC:function(){return this.a},
d1:function(a,b){var t
if(!(Math.abs(this.a)>864e13))t=!1
else t=!0
if(t)throw H.e(P.je("DateTime is outside valid range: "+this.geC()))},
$isF:1,
$asF:function(){return[P.aO]}}
P.K.prototype={$isF:1,
$asF:function(){return[P.U]}}
P.az.prototype={
am:function(a,b){return C.b.am(this.a,b.gdz())},
az:function(a,b){return C.b.az(this.a,b.gdz())},
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.az))return!1
return this.a===b.a},
gu:function(a){return this.a&0x1FFFFFFF},
O:function(a,b){return C.b.O(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.e3()
s=this.a
if(s<0)return"-"+new P.az(0-s).k(0)
r=t.$1(C.b.H(s,6e7)%60)
q=t.$1(C.b.H(s,1e6)%60)
p=new P.e2().$1(s%1e6)
return""+C.b.H(s,36e8)+":"+H.f(r)+":"+H.f(q)+"."+H.f(p)},
$isF:1,
$asF:function(){return[P.az]}}
P.e2.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.q,args:[P.n]}}}
P.e3.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.q,args:[P.n]}}}
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
o=P.jh(this.b)
return q+p+": "+H.f(o)}}
P.dj.prototype={
gaI:function(){return"RangeError"},
gaH:function(){var t,s,r
H.d(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.f(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.f(t)
else if(r>t)s=": Not in range "+H.f(t)+".."+H.f(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.f(t)}return s}}
P.eB.prototype={
gaI:function(){return"RangeError"},
gaH:function(){H.d(this.a)
if(J.lc(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.f(t)},
gj:function(a){return this.f}}
P.t.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.bT.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.ah.prototype={
k:function(a){return"Bad state: "+this.a}}
P.a1.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.f(P.jh(t))+"."}}
P.dn.prototype={
k:function(a){return"Stack Overflow"},
$isbb:1}
P.dW.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.hI.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.f(t)}}
P.bB.prototype={
k:function(a){var t,s,r
t=this.a
s=t!=null&&""!==t?"FormatException: "+H.f(t):"FormatException"
r=this.b
if(typeof r!=="string")return s
if(r.length>78)r=C.h.aC(r,0,75)+"..."
return s+"\n"+r}}
P.e5.prototype={
k:function(a){return"Expando:"+H.f(this.a)},
h:function(a,b){var t,s
t=this.b
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.C(P.jV(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.jq(b,"expando$values")
return s==null?null:H.jq(s,t)},
i:function(a,b,c){var t,s
t=this.b
if(typeof t!=="string")t.set(b,c)
else{s=H.jq(b,"expando$values")
if(s==null){s=new P.m()
H.kq(b,"expando$values",s)}H.kq(s,t,c)}}}
P.n.prototype={$isF:1,
$asF:function(){return[P.U]}}
P.V.prototype={
ax:function(a,b){return new H.du(this,b,[H.ak(this,"V",0)])},
gj:function(a){var t,s
H.d(!this.$isc)
t=this.gv(this)
for(s=0;t.p();)++s
return s},
gY:function(a){var t,s
t=this.gv(this)
if(!t.p())throw H.e(H.eG())
s=t.gq()
if(t.p())throw H.e(H.mk())
return s},
t:function(a,b){var t,s,r
if(b<0)H.C(P.aY(b,0,null,"index",null))
for(t=this.gv(this),s=0;t.p();){r=t.gq()
if(b===s)return r;++s}throw H.e(P.A(b,this,"index",null,s))},
k:function(a){return P.mi(this,"(",")")}}
P.d0.prototype={}
P.b.prototype={$isc:1,$asc:null,$asb:null}
P.aC.prototype={}
P.aV.prototype={
gu:function(a){return P.m.prototype.gu.call(this,this)},
k:function(a){return"null"}}
P.U.prototype={$isF:1,
$asF:function(){return[P.U]}}
P.m.prototype={constructor:P.m,$ism:1,
w:function(a,b){return this===b},
gu:function(a){return H.aW(this)},
k:function(a){return H.fs(this)},
gA:function(a){return new H.aD(H.iI(this),null)},
toString:function(){return this.k(this)}}
P.bP.prototype={}
P.q.prototype={$isF:1,
$asF:function(){return[P.q]}}
P.bQ.prototype={
gj:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga_:function(){return this.a}}
W.j.prototype={}
W.dL.prototype={
k:function(a){return String(a)},
$isa:1}
W.dM.prototype={
k:function(a){return String(a)},
$isa:1}
W.a0.prototype={$ism:1}
W.dP.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a0]},
$isc:1,
$asc:function(){return[W.a0]},
$iso:1,
$aso:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.c8.prototype={}
W.aM.prototype={$isa:1,$isaM:1}
W.c9.prototype={
cw:function(a,b,c){var t=this.dD(a,b,P.n7(c,null))
return t},
dD:function(a,b,c){return a.getContext(b,c)}}
W.dR.prototype={
ay:function(a){return P.iC(a.getContextAttributes())}}
W.aN.prototype={$isa:1,
gj:function(a){return a.length}}
W.dU.prototype={$isa:1}
W.y.prototype={$ism:1}
W.ba.prototype={
bs:function(a,b){var t,s
t=$.$get$k3()
s=t[b]
if(typeof s==="string")return s
s=this.dR(a,b)
t[b]=s
return s},
dR:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.m1()+b
if(t in a)return t
return b},
gj:function(a){return a.length}}
W.dV.prototype={}
W.dX.prototype={
h:function(a,b){return a[b]},
gj:function(a){return a.length}}
W.dY.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.cb.prototype={}
W.aP.prototype={
dV:function(a,b){return a.adoptNode(b)},
cz:function(a,b){return a.getElementById(b)},
eG:function(a,b){return a.querySelector(b)},
$isaP:1}
W.cc.prototype={$isa:1}
W.dZ.prototype={
k:function(a){return String(a)}}
W.cd.prototype={
ea:function(a,b){return a.createHTMLDocument(b)}}
W.e_.prototype={
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
t=J.r(b)
if(!t.$isG)return!1
return a.left===t.gaW(b)&&a.top===t.gb2(b)&&this.gX(a)===t.gX(b)&&this.gW(a)===t.gW(b)},
gu:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gX(a)
q=this.gW(a)
return W.kN(W.b5(W.b5(W.b5(W.b5(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gW:function(a){return a.height},
gaW:function(a){return a.left},
gb2:function(a){return a.top},
gX:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isG:1,
$asG:function(){}}
W.e0.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[P.q]},
$isc:1,
$asc:function(){return[P.q]},
$iso:1,
$aso:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]}}
W.e1.prototype={
gj:function(a){return a.length}}
W.a2.prototype={
gdY:function(a){return new W.hC(a)},
k:function(a){return a.localName},
L:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.kb
if(t==null){t=H.D([],[W.dd])
s=new W.de(t)
C.a.l(t,W.kL(null))
C.a.l(t,W.kO())
$.kb=s
d=s}else d=t
t=$.ka
if(t==null){t=new W.dC(d)
$.ka=t
c=t}else{t.a=d
c=t}}if($.aA==null){t=document
s=t.implementation
s=(s&&C.L).ea(s,"")
$.aA=s
$.jg=s.createRange()
s=$.aA
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.aA.head;(t&&C.M).N(t,r)}t=$.aA
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.jD(s,"$isaM")}t=$.aA
if(!!this.$isaM)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.aA.body;(t&&C.o).N(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.B(C.X,a.tagName)){t=$.jg;(t&&C.E).cA(t,q)
t=$.jg
p=(t&&C.E).e8(t,b)}else{q.innerHTML=b
p=$.aA.createDocumentFragment()
for(t=J.k(p);s=q.firstChild,s!=null;)t.N(p,s)}t=$.aA.body
if(q==null?t!=null:q!==t)J.lG(q)
c.b9(p)
C.q.dV(document,p)
return p},
e9:function(a,b,c){return this.L(a,b,c,null)},
cL:function(a,b,c,d){a.textContent=null
this.N(a,this.L(a,b,c,d))},
cK:function(a,b){return this.cL(a,b,null,null)},
a3:function(a,b){return a.getAttribute(b)},
dJ:function(a,b){return a.removeAttribute(b)},
cI:function(a,b,c){return a.setAttribute(b,c)},
$isa:1,
$ism:1,
$isa2:1,
$ish:1,
$isp:1,
geO:function(a){return a.tagName}}
W.iy.prototype={
$1:function(a){return!!J.r(a).$isa2},
$S:function(){return{func:1,args:[,]}}}
W.i.prototype={$ism:1,$isi:1}
W.h.prototype={
dr:function(a,b,c,d){return a.addEventListener(b,H.b6(c,1),!1)},
$ism:1,
$ish:1}
W.a3.prototype={$ism:1}
W.eq.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a3]},
$isc:1,
$asc:function(){return[W.a3]},
$iso:1,
$aso:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.er.prototype={
gj:function(a){return a.length}}
W.ev.prototype={
gj:function(a){return a.length}}
W.a4.prototype={$ism:1}
W.cj.prototype={}
W.ez.prototype={
gj:function(a){return a.length}}
W.bC.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.p]},
$isc:1,
$asc:function(){return[W.p]},
$iso:1,
$aso:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.ck.prototype={}
W.cl.prototype={
eZ:function(a,b,c,d,e,f){return a.open(b,c,d,f,e)},
eE:function(a,b,c){return a.open(b,c)},
E:function(a,b){return a.send(b)}}
W.bD.prototype={}
W.eC.prototype={$isa:1,$isa2:1}
W.aT.prototype={$ism:1,$isi:1,$isaT:1}
W.eR.prototype={
k:function(a){return String(a)}}
W.eX.prototype={
gj:function(a){return a.length}}
W.eZ.prototype={
eX:function(a,b,c){return a.send(b,c)},
E:function(a,b){return a.send(b)}}
W.bG.prototype={}
W.a5.prototype={$ism:1}
W.f_.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a5]},
$isc:1,
$asc:function(){return[W.a5]},
$iso:1,
$aso:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.L.prototype={$ism:1,$isi:1,$isL:1}
W.f9.prototype={$isa:1}
W.S.prototype={
gY:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.e(new P.ah("No elements"))
if(s>1)throw H.e(new P.ah("More than one element"))
return t.firstChild},
J:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.k(s),p=0;p<r;++p)q.N(s,t.firstChild)
return},
i:function(a,b,c){var t=this.a
J.lf(t,c,C.C.h(t.childNodes,b))},
gv:function(a){var t=this.a.childNodes
return new W.ci(t,t.length,-1,null,[H.ak(t,"z",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){return C.C.h(this.a.childNodes,b)},
$asc:function(){return[W.p]},
$asd4:function(){return[W.p]},
$asb:function(){return[W.p]},
$asbN:function(){return[W.p]}}
W.p.prototype={
eH:function(a){var t=a.parentNode
if(t!=null)J.br(t,a)},
k:function(a){var t=a.nodeValue
return t==null?this.cQ(a):t},
N:function(a,b){return a.appendChild(b)},
dK:function(a,b){return a.removeChild(b)},
dL:function(a,b,c){return a.replaceChild(b,c)},
$ism:1,
$ish:1,
$isp:1,
gaY:function(a){return a.previousSibling}}
W.dc.prototype={
aZ:function(a){return a.previousNode()}}
W.bM.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.p]},
$isc:1,
$asc:function(){return[W.p]},
$iso:1,
$aso:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.fi.prototype={$isa:1}
W.fk.prototype={
gj:function(a){return a.length}}
W.a6.prototype={$ism:1,
gj:function(a){return a.length}}
W.fn.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a6]},
$isc:1,
$asc:function(){return[W.a6]},
$iso:1,
$aso:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.fq.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.fr.prototype={
E:function(a,b){return a.send(b)}}
W.di.prototype={
e8:function(a,b){return a.createContextualFragment(b)},
cA:function(a,b){return a.selectNodeContents(b)}}
W.fA.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.dk.prototype={
E:function(a,b){return a.send(b)}}
W.fC.prototype={
gj:function(a){return a.length}}
W.fF.prototype={$isa:1}
W.a7.prototype={$ism:1,$ish:1}
W.fG.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a7]},
$isc:1,
$asc:function(){return[W.a7]},
$iso:1,
$aso:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.a8.prototype={$ism:1}
W.fI.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a8]},
$isc:1,
$asc:function(){return[W.a8]},
$iso:1,
$aso:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.a9.prototype={$ism:1,
gj:function(a){return a.length}}
W.fN.prototype={
h:function(a,b){return this.bA(a,b)},
i:function(a,b,c){this.dQ(a,b,c)},
at:function(a,b){var t,s
for(t=0;!0;++t){s=this.dG(a,t)
if(s==null)return
b.$2(s,this.bA(a,s))}},
gj:function(a){return a.length},
bA:function(a,b){return a.getItem(b)},
dG:function(a,b){return a.key(b)},
dQ:function(a,b,c){return a.setItem(b,c)}}
W.W.prototype={$ism:1}
W.ai.prototype={}
W.dp.prototype={
L:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aD(a,b,c,d)
t=W.m3("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.S(s).J(0,new W.S(t))
return s}}
W.fV.prototype={
L:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aD(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.J.L(t.createElement("table"),b,c,d)
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
W.fW.prototype={
L:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aD(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.J.L(t.createElement("table"),b,c,d)
t.toString
t=new W.S(t)
r=t.gY(t)
s.toString
r.toString
new W.S(s).J(0,new W.S(r))
return s}}
W.bR.prototype={$isbR:1}
W.aa.prototype={$ism:1,$ish:1}
W.X.prototype={$ism:1,$ish:1}
W.fZ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.X]},
$isc:1,
$asc:function(){return[W.X]},
$iso:1,
$aso:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.h_.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.aa]},
$isc:1,
$asc:function(){return[W.aa]},
$iso:1,
$aso:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.h0.prototype={
gj:function(a){return a.length}}
W.ab.prototype={$ism:1}
W.aZ.prototype={$ism:1,$isi:1,$isaZ:1}
W.h4.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.ab]},
$isc:1,
$asc:function(){return[W.ab]},
$iso:1,
$aso:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.h5.prototype={
gj:function(a){return a.length}}
W.bi.prototype={}
W.h7.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.dt.prototype={
aZ:function(a){return a.previousNode()}}
W.aE.prototype={}
W.hd.prototype={
k:function(a){return String(a)},
$isa:1}
W.hf.prototype={
gj:function(a){return a.length}}
W.hi.prototype={
gj:function(a){return a.length}}
W.hj.prototype={
E:function(a,b){return a.send(b)}}
W.b0.prototype={
gec:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(new P.t("deltaY is not supported"))},
$ism:1,
$isi:1,
$isL:1,
$isb0:1}
W.bU.prototype={
gdX:function(a){var t,s
t=P.U
s=new P.M(0,$.v,null,[t])
this.dB(a)
this.dM(a,W.kS(new W.hl(new P.im(s,[t]))))
return s},
dM:function(a,b){return a.requestAnimationFrame(H.b6(b,1))},
dB:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isa:1}
W.hl.prototype={
$1:function(a){this.a.as(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.hm.prototype={$isa:1}
W.b1.prototype={$isa:1}
W.hx.prototype={
k:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
w:function(a,b){var t,s,r
if(b==null)return!1
t=J.r(b)
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
return W.kN(W.b5(W.b5(W.b5(W.b5(0,t),s),r),q))},
$isG:1,
$asG:function(){},
gW:function(a){return a.height},
gaW:function(a){return a.left},
gb2:function(a){return a.top},
gX:function(a){return a.width}}
W.dx.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[P.G]},
$isc:1,
$asc:function(){return[P.G]},
$iso:1,
$aso:function(){return[P.G]},
$isb:1,
$asb:function(){return[P.G]}}
W.hz.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.y]},
$isc:1,
$asc:function(){return[W.y]},
$iso:1,
$aso:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.hA.prototype={$isa:1}
W.hB.prototype={
gW:function(a){return a.height},
gX:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.hW.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a4]},
$isc:1,
$asc:function(){return[W.a4]},
$iso:1,
$aso:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.hX.prototype={$isa:1}
W.dA.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.p]},
$isc:1,
$asc:function(){return[W.p]},
$iso:1,
$aso:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.ig.prototype={$isa:1}
W.ij.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a9]},
$isc:1,
$asc:function(){return[W.a9]},
$iso:1,
$aso:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.ik.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.W]},
$isc:1,
$asc:function(){return[W.W]},
$iso:1,
$aso:function(){return[W.W]},
$isb:1,
$asb:function(){return[W.W]}}
W.is.prototype={$isa:1}
W.it.prototype={$isa:1}
W.hv.prototype={
at:function(a,b){var t,s,r,q,p,o
for(t=this.gD(this),s=t.length,r=this.a,q=J.k(r),p=0;p<t.length;t.length===s||(0,H.J)(t),++p){o=t[p]
b.$2(o,q.a3(r,o))}},
gD:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.D([],[P.q])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.l(s,p.name)}return s},
gdE:function(){return this.a}}
W.hC.prototype={
h:function(a,b){return J.jc(this.a,b)},
i:function(a,b,c){J.lI(this.a,b,c)},
gj:function(a){return this.gD(this).length}}
W.hF.prototype={
ez:function(a,b,c,d){return W.ac(this.a,this.b,a,!1,H.aH(this,0))}}
W.jv.prototype={}
W.hG.prototype={
dT:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.le(r,this.c,t,!1)}},
dj:function(a,b,c,d,e){this.dT()}}
W.hH.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.bW.prototype={
a0:function(a){return $.$get$kM().B(0,W.bu(a))},
R:function(a,b,c){var t,s,r
t=W.bu(a)
s=$.$get$jw()
r=s.h(0,H.f(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
dk:function(a){var t,s
t=$.$get$jw()
if(t.gag(t)){for(s=0;s<262;++s)t.i(0,C.W[s],W.nf())
for(s=0;s<12;++s)t.i(0,C.t[s],W.ng())}}}
W.z.prototype={
gv:function(a){return new W.ci(a,this.gj(a),-1,null,[H.ak(a,"z",0)])},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
W.de.prototype={
a0:function(a){return C.a.bM(this.a,new W.fb(a))},
R:function(a,b,c){return C.a.bM(this.a,new W.fa(a,b,c))}}
W.fb.prototype={
$1:function(a){return a.a0(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.fa.prototype={
$1:function(a){return a.R(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.bZ.prototype={
a0:function(a){return this.a.B(0,W.bu(a))},
R:function(a,b,c){var t,s
t=W.bu(a)
s=this.c
if(s.B(0,H.f(t)+"::"+b))return this.d.dW(c)
else if(s.B(0,"*::"+b))return this.d.dW(c)
else{s=this.b
if(s.B(0,H.f(t)+"::"+b))return!0
else if(s.B(0,"*::"+b))return!0
else if(s.B(0,H.f(t)+"::*"))return!0
else if(s.B(0,"*::*"))return!0}return!1},
dn:function(a,b,c,d){var t,s,r
this.a.J(0,c)
t=b.ax(0,new W.ih())
s=b.ax(0,new W.ii())
this.b.J(0,t)
r=this.c
r.J(0,C.B)
r.J(0,s)}}
W.ih.prototype={
$1:function(a){return!C.a.B(C.t,a)},
$S:function(){return{func:1,args:[,]}}}
W.ii.prototype={
$1:function(a){return C.a.B(C.t,a)},
$S:function(){return{func:1,args:[,]}}}
W.io.prototype={
R:function(a,b,c){if(this.cT(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.jc(a,"template")==="")return this.e.B(0,b)
return!1}}
W.ip.prototype={
$1:function(a){return"TEMPLATE::"+H.f(a)},
$S:function(){return{func:1,args:[,]}}}
W.il.prototype={
a0:function(a){var t=J.r(a)
if(!!t.$isbO)return!1
t=!!t.$isE
if(t&&W.bu(a)==="foreignObject")return!1
if(t)return!0
return!1},
R:function(a,b,c){if(b==="is"||C.h.bc(b,"on"))return!1
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
W.ie.prototype={}
W.dC.prototype={
b9:function(a){new W.iq(this).$2(a,null)},
ar:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)J.br(t,a)}else J.br(b,a)},
dP:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.lw(a)
r=J.jc(s.gdE(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.O(n)}p="element unprintable"
try{p=J.aK(a)}catch(n){H.O(n)}try{o=W.bu(a)
this.dO(a,b,t,p,o,s,r)}catch(n){if(H.O(n) instanceof P.an)throw n
else{this.ar(a,b)
window
m="Removing corrupted element "+H.f(p)
if(typeof console!="undefined")console.warn(m)}}},
dO:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.ar(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.a0(a)){this.ar(a,b)
window
t="Removing disallowed element <"+H.f(e)+"> from "+J.aK(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.R(a,"is",g)){this.ar(a,b)
window
t="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gD(f)
s=H.D(t.slice(0),[H.aH(t,0)])
for(r=f.gD(f).length-1,t=f.a,q=J.k(t);r>=0;--r){p=s[r]
if(!this.a.R(a,J.lL(p),q.a3(t,p))){window
o="Removing disallowed attribute <"+H.f(e)+" "+p+'="'+H.f(q.a3(t,p))+'">'
if(typeof console!="undefined")console.warn(o)
q.a3(t,p)
q.dJ(t,p)}}if(!!J.r(a).$isbR)this.b9(a.content)}}
W.iq.prototype={
$2:function(a,b){var t,s,r,q
switch(a.nodeType){case 1:this.a.dP(a,b)
break
case 8:case 11:case 3:case 4:break
default:if(b==null){r=a.parentNode
if(r!=null)J.br(r,a)}else J.br(b,a)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.lx(t)}catch(q){H.O(q)
r=t
J.br(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.p,W.p]}}}
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
$asc:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.cA.prototype={$isc:1,
$asc:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
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
$asc:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.cw.prototype={$isc:1,
$asc:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.cx.prototype={$isc:1,
$asc:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]}}
W.cH.prototype={$isc:1,
$asc:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.cJ.prototype={$isc:1,
$asc:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.cT.prototype={$isc:1,
$asc:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.cU.prototype={$isc:1,
$asc:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.cS.prototype={$isc:1,
$asc:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.cX.prototype={$isc:1,
$asc:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.cY.prototype={$isc:1,
$asc:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.cZ.prototype={$isc:1,
$asc:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.d_.prototype={$isc:1,
$asc:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]}}
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
P.hn.prototype={
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
r=new P.aO(s,!0)
r.d1(s,!0)
return r}if(a instanceof RegExp)throw H.e(new P.bT("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.n8(a)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=this.c6(a)
r=this.b
o=r[p]
t.a=o
if(o!=null)return o
o=P.Q()
t.a=o
r[p]=o
this.en(a,new P.hp(t,this))
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
P.hp.prototype={
$2:function(a,b){var t,s
t=this.a.a
s=this.b.b3(b)
J.ld(t,a,s)
return s},
$S:function(){return{func:1,args:[,,]}}}
P.iz.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.q,,]}}}
P.ho.prototype={
en:function(a,b){var t,s,r,q
for(t=Object.keys(a),s=t.length,r=0;r<t.length;t.length===s||(0,H.J)(t),++r){q=t[r]
b.$2(q,a[q])}}}
P.iA.prototype={
$1:function(a){return this.a.as(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.iB.prototype={
$1:function(a){return this.a.e4(a)},
$S:function(){return{func:1,args:[,]}}}
P.i6.prototype={}
P.G.prototype={$asG:null}
P.dK.prototype={$isa:1}
P.aL.prototype={$isa:1}
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
P.el.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
P.em.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.en.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.es.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eu.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ae.prototype={}
P.aB.prototype={$isa:1}
P.eA.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ap.prototype={$ism:1}
P.eL.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return this.U(a,b)},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
U:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.ap]},
$isb:1,
$asb:function(){return[P.ap]}}
P.eU.prototype={$isa:1}
P.eV.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ar.prototype={$ism:1}
P.fc.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return this.U(a,b)},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
U:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.ar]},
$isb:1,
$asb:function(){return[P.ar]}}
P.fj.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fo.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fp.prototype={
gj:function(a){return a.length}}
P.fu.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fv.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bO.prototype={$isa:1,$isbO:1}
P.fS.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return this.U(a,b)},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
U:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]}}
P.E.prototype={
L:function(a,b,c,d){var t,s,r,q,p,o
t=H.D([],[W.dd])
C.a.l(t,W.kL(null))
C.a.l(t,W.kO())
C.a.l(t,new W.il())
c=new W.dC(new W.de(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.o).e9(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.S(q)
o=t.gY(t)
for(t=J.k(p);r=o.firstChild,r!=null;)t.N(p,r)
return p},
$isa:1,
$isE:1}
P.fT.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fU.prototype={$isa:1}
P.dq.prototype={}
P.fY.prototype={$isa:1}
P.bS.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.as.prototype={$ism:1}
P.h6.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return this.U(a,b)},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
U:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.as]},
$isb:1,
$asb:function(){return[P.as]}}
P.he.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.hg.prototype={$isa:1}
P.hh.prototype={$isa:1}
P.bV.prototype={$isa:1}
P.ib.prototype={$isa:1}
P.ic.prototype={$isa:1}
P.id.prototype={$isa:1}
P.cp.prototype={$isc:1,
$asc:function(){return[P.ap]},
$isb:1,
$asb:function(){return[P.ap]}}
P.cn.prototype={$isc:1,
$asc:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]}}
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
$asc:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]}}
P.dO.prototype={
gj:function(a){return a.length}}
P.fy.prototype={
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
ay:function(a){return P.iC(a.getContextAttributes())},
b4:function(a,b){return a.getProgramInfoLog(b)},
b5:function(a,b,c){return a.getProgramParameter(b,c)},
b6:function(a,b){return a.getShaderInfoLog(b)},
b7:function(a,b,c){return a.getShaderParameter(b,c)},
b8:function(a,b,c){return a.getUniformLocation(b,c)},
c7:function(a,b){return a.linkProgram(b)},
bb:function(a,b,c){return a.shaderSource(b,c)},
bd:function(a,b,c,d){return a.stencilFunc(b,c,d)},
ce:function(a,b,c){return a.uniform1f(b,c)},
cf:function(a,b,c){return a.uniform1fv(b,c)},
cg:function(a,b,c){return a.uniform1i(b,c)},
ci:function(a,b,c){return a.uniform1iv(b,c)},
cj:function(a,b,c){return a.uniform2fv(b,c)},
ck:function(a,b,c){return a.uniform3fv(b,c)},
cl:function(a,b,c){return a.uniform4fv(b,c)},
cm:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cn:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cp:function(a,b){return a.useProgram(b)},
cr:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cs:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fz.prototype={
dZ:function(a,b){return a.beginTransformFeedback(b)},
e1:function(a,b){return a.bindVertexArray(b)},
eb:function(a){return a.createVertexArray()},
ei:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
ej:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
ek:function(a){return a.endTransformFeedback()},
eT:function(a,b,c,d){this.dS(a,b,c,d)
return},
dS:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
eV:function(a,b,c){return a.vertexAttribDivisor(b,c)},
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
ay:function(a){return P.iC(a.getContextAttributes())},
b4:function(a,b){return a.getProgramInfoLog(b)},
b5:function(a,b,c){return a.getProgramParameter(b,c)},
b6:function(a,b){return a.getShaderInfoLog(b)},
b7:function(a,b,c){return a.getShaderParameter(b,c)},
b8:function(a,b,c){return a.getUniformLocation(b,c)},
c7:function(a,b){return a.linkProgram(b)},
bb:function(a,b,c){return a.shaderSource(b,c)},
bd:function(a,b,c,d){return a.stencilFunc(b,c,d)},
ce:function(a,b,c){return a.uniform1f(b,c)},
cf:function(a,b,c){return a.uniform1fv(b,c)},
cg:function(a,b,c){return a.uniform1i(b,c)},
ci:function(a,b,c){return a.uniform1iv(b,c)},
cj:function(a,b,c){return a.uniform2fv(b,c)},
ck:function(a,b,c){return a.uniform3fv(b,c)},
cl:function(a,b,c){return a.uniform4fv(b,c)},
cm:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cn:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cp:function(a,b){return a.useProgram(b)},
cr:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cs:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isa:1}
P.ir.prototype={$isa:1}
P.fJ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return P.iC(this.dF(a,b))},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
dF:function(a,b){return a.item(b)},
$isc:1,
$asc:function(){return[P.aC]},
$isb:1,
$asb:function(){return[P.aC]}}
P.co.prototype={$isc:1,
$asc:function(){return[P.aC]},
$isb:1,
$asb:function(){return[P.aC]}}
P.cL.prototype={$isc:1,
$asc:function(){return[P.aC]},
$isb:1,
$asb:function(){return[P.aC]}}
B.iZ.prototype={
$1:function(a){$.$get$iD().i(0,a.which,!0)},
$S:function(){return{func:1,args:[W.aT]}}}
B.j_.prototype={
$1:function(a){$.$get$iD().i(0,a.which,null)},
$S:function(){return{func:1,args:[W.aT]}}}
B.j0.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.n5=t
$.n6=C.b.a5(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.jG=s-C.b.H(window.innerWidth,2)
$.l6=-(t-C.b.H(window.innerHeight,2))},
$S:function(){return{func:1,args:[W.L]}}}
B.j1.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.c5=t-C.b.H(window.innerWidth,2)
$.c6=-(s-C.b.H(window.innerHeight,2))
if(a.button===2)$.$get$c4().i(0,"right",!0)
else $.$get$c4().i(0,"left",!0)},
$S:function(){return{func:1,args:[W.L]}}}
B.j2.prototype={
$1:function(a){if(a.button===2)$.$get$c4().i(0,"right",null)
else $.$get$c4().i(0,"left",null)},
$S:function(){return{func:1,args:[W.L]}}}
B.fd.prototype={
d8:function(a,b,c,d){var t
d.toString
W.ac(d,W.ne().$1(d),new B.fe(this),!1,W.b0)
W.ac(d,"mousemove",new B.ff(this),!1,W.L)
t=W.aZ
W.ac(d,"touchstart",new B.fg(),!1,t)
W.ac(d,"touchmove",new B.fh(this),!1,t)
B.nu(null)}}
B.fe.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.av.gec(a)*r.k3
if(C.c.a5(r.fy,t)>0)r.fy=H.Y(C.c.a5(r.fy,t))}catch(q){s=H.O(q)
P.ad(s)}},
$S:function(){return{func:1,args:[W.b0]}}}
B.ff.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=H.Y(t.go+C.b.a5($.jG,$.c5)*0.01)
s=t.id
r=$.c6
q=$.l6
t.id=H.Y(s+(r-q)*0.01)
$.c5=$.jG
$.c6=q}},
$S:function(){return{func:1,args:[W.L]}}}
B.fg.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.a1(t.clientX)
C.c.a1(t.clientY)
$.c5=s
C.c.a1(t.clientX)
$.c6=C.c.a1(t.clientY)},
$S:function(){return{func:1,args:[W.aZ]}}}
B.fh.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.a1(t.clientX)
t=C.c.a1(t.clientY)
r=this.a
r.go=H.Y(r.go+C.b.a5(s,$.c5)*0.01)
r.id=H.Y(r.id+($.c6-t)*0.01)
$.c5=s
$.c6=t},
$S:function(){return{func:1,args:[W.aZ]}}}
G.f0.prototype={}
G.hb.prototype={
Z:function(a,b){var t=this.d
if(H.aw(!t.C(0,a)))H.aG("uniform "+a+" already set")
t.i(0,a,b)},
bi:function(){return this.d},
k:function(a){var t,s,r,q
t=H.D(["{"+new H.aD(H.iI(this),null).k(0)+"}["+this.a+"]"],[P.q])
for(s=this.d,r=s.gD(s),r=r.gv(r);r.p();){q=r.gq()
C.a.l(t,H.f(q)+": "+H.f(s.h(0,q)))}return C.a.ah(t,"\n")}}
G.dQ.prototype={}
G.dT.prototype={
c5:function(a,b,c){J.lt(this.a,b)
if(c>0)J.lS(this.a,b,c)}}
G.eo.prototype={}
G.ep.prototype={}
G.ey.prototype={
bg:function(a){var t=this.e
H.d(!t.C(0,a))
H.d(C.h.bc(a,"a"))
switch($.$get$T().h(0,a).a){case"vec2":t.i(0,a,H.D([],[T.av]))
break
case"vec3":t.i(0,a,H.D([],[T.B]))
break
case"vec4":t.i(0,a,H.D([],[T.aF]))
break
case"float":t.i(0,a,H.D([],[P.K]))
break
case"uvec4":t.i(0,a,H.D([],[[P.b,P.n]]))
break
default:if(H.aw(!1))H.aG("unknown type for "+a)}},
cZ:function(a){var t,s,r,q,p,o
H.d(a.length===3)
t=this.d
s=t.length
C.a.l(this.b,new G.eo(s,s+1,s+2))
for(r=a.length,q=0;q<a.length;a.length===r||(0,H.J)(a),++q){p=a[q]
o=new T.B(new Float32Array(3))
o.V(p)
C.a.l(t,o)}},
cW:function(a,b){var t,s,r,q,p,o,n
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.J)(b),++q){p=b[q]
o=new Float32Array(2)
n=p.a
o[1]=n[1]
o[0]=n[0]
r.l(t,new T.av(o))}},
cX:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.J)(b),++q){p=b[q]
o=new T.B(new Float32Array(3))
o.V(p)
r.l(t,o)}},
d_:function(a){var t,s,r,q,p,o
H.d(a.length===4)
t=this.d
s=t.length
C.a.l(this.c,new G.ep(s,s+1,s+2,s+3))
for(r=a.length,q=0;q<a.length;a.length===r||(0,H.J)(a),++q){p=a[q]
o=new T.B(new Float32Array(3))
o.V(p)
C.a.l(t,o)}},
d4:function(){var t,s,r,q,p,o,n,m,l,k
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
G.ds.prototype={}
G.dr.prototype={}
G.eW.prototype={}
G.eY.prototype={
bf:function(a,b,c){var t,s
if(C.h.a7(a,0)===105){if(H.aw(C.b.aE(b.length,c)===this.z))H.aG("ChangeAttribute "+this.z)}else{t=C.b.aE(b.length,c)
if(H.aw(t===(this.ch.length/3|0)))H.aG("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.dG(t.a,34962,s)
J.jM(t.a,34962,b,35048)},
d5:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
a6:function(a,b,c){var t,s,r,q,p,o
t=J.jI(a,0)===105
if(t&&this.z===0)this.z=C.b.aE(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.j8(r.a))
this.bf(a,b,c)
q=$.$get$T().h(0,a)
if(q==null)throw H.e("Unknown canonical "+a)
p=this.x
if(H.aw(p.C(0,a)))H.aG("unexpected attribute "+a)
o=p.h(0,a)
J.dH(r.a,this.e)
r.c5(0,o,t?1:0)
s=s.h(0,a)
p=q.bh()
J.dG(r.a,34962,s)
J.jU(r.a,o,p,5126,!1,0,0)},
k:function(a){var t,s,r,q
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,r=t.gD(t),r=r.gv(r);r.p();){q=r.gq()
C.a.l(s,H.f(q)+":"+t.h(0,q).length)}return"MESH["+this.a+"] "+C.a.ah(s,"  ")},
saJ:function(a){this.cx=a}}
G.fl.prototype={
d0:function(a,b){var t=C.b.cu(a,b)
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
s=J.r(n)
r=!!s.$isaF
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
a3.eD(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.fx.prototype={
de:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gj(t)===s.gj(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gD(s),s=s.gv(s);s.p();){q=s.gq()
if(!t.C(0,q))C.a.l(r,q)}for(t=this.x,s=new P.bX(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.p();){q=s.d
if(!t.B(0,q))C.a.l(r,q)}return r},
dh:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gD(b),s=s.gv(s),r=this.d,q=this.y,p=this.z,o=0;s.p();){n=s.gq()
switch(J.jI(n,0)){case 117:if(q.C(0,n)){m=b.h(0,n)
if(p.C(0,n))H.bq("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$T().h(0,n)
if(l==null)H.C("unknown "+n)
H.d(q.C(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.jd(r.a,k,m)
else if(!!J.r(m).$iske)J.lQ(r.a,k,m)
break
case"float":if(l.c===0)J.lO(r.a,k,m)
else if(!!J.r(m).$iset)J.lP(r.a,k,m)
break
case"mat4":if(l.c===0){j=H.aI(m,"$isaq").a
J.jT(r.a,k,!1,j)}else if(!!J.r(m).$iset)J.jT(r.a,k,!1,m)
else if(H.aw(!1))H.aG("bad unform: "+n)
break
case"mat3":if(l.c===0){j=C.O.geY(H.aI(m,"$isnH"))
J.jS(r.a,k,!1,j)}else if(!!J.r(m).$iset)J.jS(r.a,k,!1,m)
else if(H.aw(!1))H.aG("bad unform: "+n)
break
case"vec4":j=l.c
i=r.a
if(j===0)J.jR(i,k,H.aI(m,"$isaF").a)
else J.jR(i,k,m)
break
case"vec3":j=l.c
i=r.a
if(j===0)J.jQ(i,k,H.aI(m,"$isB").a)
else J.jQ(i,k,m)
break
case"vec2":j=l.c
i=r.a
if(j===0)J.jP(i,k,H.aI(m,"$isav").a)
else J.jP(i,k,m)
break
case"sampler2D":case"sampler2DShadow":j=C.b.a2(33984,this.ch)
J.jJ(r.a,j)
j=H.aI(m,"$ismC").d6()
J.jL(r.a,3553,j)
j=this.ch
J.jd(r.a,k,j)
this.ch=this.ch+1
break
case"samplerCube":H.d(n==="uCubeTexture")
j=C.b.a2(33984,this.ch)
J.jJ(r.a,j)
j=H.aI(m,"$ismC").d6()
J.jL(r.a,34067,j)
j=this.ch
J.jd(r.a,k,j)
this.ch=this.ch+1
break
default:H.bq("Error: unknow uniform type: "+j)
H.d(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":j=J.x(m,!0)
i=r.a
if(j)J.dI(i,2929)
else J.j9(i,2929)
break
case"cStencilFunc":H.aI(m,"$isds")
j=m.a
i=r.a
if(j===1281)J.j9(i,2960)
else{J.dI(i,2960)
i=m.b
h=m.c
J.lK(r.a,j,i,h)}break
case"cDepthWrite":J.ln(r.a,m)
break
case"cBlendEquation":H.aI(m,"$isdr")
j=m.a
i=r.a
if(j===1281)J.j9(i,3042)
else{J.dI(i,3042)
i=m.b
h=m.c
J.li(r.a,i,h)
J.lh(r.a,j)}break}++o
break}}s=Date.now()
""+o
new P.az(1000*(s-new P.aO(t,!1).a)).k(0)},
d3:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
Date.now()
t=this.d
J.lR(t.a,this.r)
this.ch=0
this.z.S(0)
for(s=0;s<2;++s){r=b[s]
this.dh(r.a,r.bi())}q=this.Q
q.S(0)
for(p=a.cy,p=p.gD(p),p=p.gv(p);p.p();)q.l(0,p.gq())
o=this.de()
if(o.length!==0)P.ad("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.f(o)))
q=a.d
p=a.e
J.dH(q.a,p)
n=this.e.f.length>0
p=a.f
q=a.d5()
m=a.Q
l=a.z
if(n)J.lg(t.a,p)
if(m!==-1){k=t.a
if(l>1)J.lr(k,p,q,m,0,l)
else J.lq(k,p,q,m,0)}else{m=t.a
if(l>1)J.lp(m,p,0,q,l)
else J.lo(m,p,0,q)}if(n)J.lu(t.a)},
d2:function(a,b){return this.d3(a,b,null)},
d9:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.J)(t),++o){n=t[o]
r.i(0,n,J.jO(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.J)(t),++o){n=t[o]
r.i(0,n,J.jO(q.a,p,n))}}}
G.w.prototype={
bh:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.d(!1)
return-1}}}
G.dl.prototype={
cV:function(a){var t,s,r,q
H.d(this.b==null)
for(t=this.c,s=this.x,r=0;r<1;++r){q=a[r]
H.d($.$get$T().C(0,q))
H.d(!C.a.B(t,q))
C.a.l(t,q)
s.i(0,q,this.r);++this.r}C.a.aB(t)},
cY:function(a){var t,s,r
H.d(this.b==null)
for(t=this.d,s=0;s<2;++s){r=a[s]
if(H.aw($.$get$T().C(0,r)))H.aG("missing uniform "+r)
H.d(!C.a.B(t,r))
C.a.l(t,r)}C.a.aB(t)},
be:function(a){var t,s,r
H.d(this.b==null)
for(t=this.e,s=0;s<1;++s){r=a[s]
H.d($.$get$T().C(0,r))
H.d(!C.a.B(t,r))
C.a.l(t,r)}C.a.aB(t)},
bj:function(a,b){H.d(this.b==null)
this.b=this.di(!0,a,b)},
da:function(a){return this.bj(a,null)},
di:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
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
G.fH.prototype={}
R.dg.prototype={
cb:function(a){var t,s,r
t=this.fy
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.ad("size change "+H.f(s)+" "+H.f(r))
this.d0(s,r)
J.lT(this.go.a,0,0,s,r)}}
R.fL.prototype={
dl:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.mL("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.v).bs(r,"float")
r.setProperty(p,"left","")
p=C.v.bs(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.p.N(t,s)}return t},
dc:function(a,b,c){var t,s,r
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
J.j6(this.a,s)
r=this.dl(b,c,90,30)
this.d=r
J.j6(this.a,r)
t=t.createElement("div")
this.c=t
J.j6(this.a,t)}}
R.fM.prototype={
dg:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.y.eS(s,2)+" fps"
t=this.c;(t&&C.p).cK(t,b)
r=C.b.H(30*C.y.e2(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.p).N(t,q)},
df:function(a){return this.dg(a,"")}}
D.eQ.prototype={
$1:function(a){this.a.as(0,W.mT(this.b.response))},
$S:function(){return{func:1,args:[,]}}}
A.iK.prototype={
$2:function(a,b){var t=536870911&a+J.am(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(){return{func:1,args:[P.n,P.m]}}}
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
i:function(a,b,c){C.j.i(this.a,b,c)},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aq){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gu:function(a){return A.iJ(this.a)},
al:function(a){var t,s
t=new Float32Array(H.P(4))
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.aF(t)},
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
gu:function(a){return A.iJ(this.a)},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.j.i(this.a,b,c)},
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
gu:function(a){return A.iJ(this.a)},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.j.i(this.a,b,c)},
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
T.aF.prototype={
k:function(a){var t=this.a
return H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+","+H.f(t[3])},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aF){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gu:function(a){return A.iJ(this.a)},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.j.i(this.a,b,c)},
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
T.iV.prototype={
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
s.id=0}r=H.Y(C.c.e3(s.id,-1.4707963267948965,1.4707963267948965))
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
this.e.d2(t.a,[this.d,this.f])
C.aw.gdX(window).b0(this)
this.b.df(t.b)},
$S:function(){return{func:1,v:true,args:[P.U]}}}
T.iW.prototype={
$1:function(a){var t,s,r,q,p,o,n,m,l
t=Y.mb(J.b7(a,0))
s=$.l5
r=this.b
q=r.d
r=r.e.x
p=P.Q()
o=J.lm(q.a)
n=new G.eY(q,o,4,p,r,null,0,-1,null,null,P.Q(),"meshdata:"+s,!1,!0)
s=G.kd(t.d,null)
p.i(0,"aPosition",J.j8(q.a))
n.ch=s
n.bf("aPosition",s,3)
m=$.$get$T().h(0,"aPosition")
if(m==null)H.C("Unknown canonical aPosition")
H.d(r.C(0,"aPosition"))
l=r.h(0,"aPosition")
J.dH(q.a,o)
q.c5(0,l,0)
s=p.h(0,"aPosition")
r=m.bh()
J.dG(q.a,34962,s)
J.jU(q.a,l,r,5126,!1,0,0)
s=t.d4()
n.y=J.j8(q.a)
H.d(n.ch!=null)
r=n.ch.length
if(r<768){n.saJ(new Uint8Array(H.iv(s)))
n.Q=5121}else if(r<196608){n.saJ(new Uint16Array(H.iv(s)))
n.Q=5123}else{n.saJ(new Uint32Array(H.iv(s)))
n.Q=5125}J.dH(q.a,o)
s=n.y
r=n.cx
p=J.r(r)
H.d(!!p.$iskG||!!p.$iskH||!!p.$iskI)
J.dG(q.a,34963,s)
J.jM(q.a,34963,r,35048)
G.mM(t,n)
this.a.a=n
this.c.$1(0)},
$S:function(){return{func:1,args:[P.b]}}}
J.a.prototype.cQ=J.a.prototype.k
J.bE.prototype.cS=J.bE.prototype.k
P.V.prototype.cR=P.V.prototype.ax
W.a2.prototype.aD=W.a2.prototype.L
W.bZ.prototype.cT=W.bZ.prototype.R;(function installTearOffs(){installTearOff(H.b3.prototype,"gey",0,0,0,null,["$0"],["av"],0)
installTearOff(H.aj.prototype,"gcB",0,0,0,null,["$1"],["I"],2)
installTearOff(H.b2.prototype,"gee",0,0,0,null,["$1"],["T"],2)
installTearOff(P,"n1",1,0,0,null,["$1"],["mI"],1)
installTearOff(P,"n2",1,0,0,null,["$1"],["mJ"],1)
installTearOff(P,"n3",1,0,0,null,["$1"],["mK"],1)
installTearOff(P,"kW",1,0,0,null,["$0"],["n_"],0)
installTearOff(P.M.prototype,"gdu",0,0,0,null,["$2","$1"],["G","dv"],5)
installTearOff(P,"n9",1,0,0,null,["$2"],["lZ"],7)
installTearOff(W,"ne",1,0,0,null,["$1"],["m4"],8)
installTearOff(W,"nf",1,0,0,null,["$4"],["mN"],4)
installTearOff(W,"ng",1,0,0,null,["$4"],["mO"],4)
installTearOff(W.dc.prototype,"gaY",0,1,0,null,["$0"],["aZ"],3)
installTearOff(W.dt.prototype,"gaY",0,1,0,null,["$0"],["aZ"],3)
installTearOff(R.dg.prototype,"geK",0,0,0,null,["$1"],["cb"],6)
installTearOff(T,"l7",1,0,0,null,["$0"],["no"],0)})();(function inheritance(){inherit(P.m,null)
var t=P.m
inherit(H.jk,t)
inherit(J.a,t)
inherit(J.dN,t)
inherit(P.V,t)
inherit(H.d5,t)
inherit(P.d0,t)
inherit(H.ch,t)
inherit(H.b9,t)
inherit(H.i3,t)
inherit(H.b3,t)
inherit(H.hD,t)
inherit(H.b4,t)
inherit(H.i2,t)
inherit(H.hw,t)
inherit(H.bh,t)
inherit(H.h1,t)
inherit(H.ao,t)
inherit(H.aj,t)
inherit(H.b2,t)
inherit(H.fw,t)
inherit(H.h8,t)
inherit(P.bb,t)
inherit(H.dB,t)
inherit(H.aD,t)
inherit(H.af,t)
inherit(H.eM,t)
inherit(H.eO,t)
inherit(H.eI,t)
inherit(H.i4,t)
inherit(P.hy,t)
inherit(P.dy,t)
inherit(P.M,t)
inherit(P.dv,t)
inherit(P.fO,t)
inherit(P.fP,t)
inherit(P.b8,t)
inherit(P.iu,t)
inherit(P.fE,t)
inherit(P.i0,t)
inherit(P.bX,t)
inherit(P.bN,t)
inherit(P.u,t)
inherit(P.i1,t)
inherit(P.ax,t)
inherit(P.F,t)
inherit(P.aO,t)
inherit(P.U,t)
inherit(P.az,t)
inherit(P.dn,t)
inherit(P.hI,t)
inherit(P.bB,t)
inherit(P.e5,t)
inherit(P.b,t)
inherit(P.aC,t)
inherit(P.aV,t)
inherit(P.bP,t)
inherit(P.q,t)
inherit(P.bQ,t)
inherit(W.dV,t)
inherit(W.hv,t)
inherit(W.bW,t)
inherit(W.z,t)
inherit(W.de,t)
inherit(W.bZ,t)
inherit(W.il,t)
inherit(W.ci,t)
inherit(W.dd,t)
inherit(W.ie,t)
inherit(W.dC,t)
inherit(P.hn,t)
inherit(P.i6,t)
inherit(G.f0,t)
inherit(G.dT,t)
inherit(G.eo,t)
inherit(G.ep,t)
inherit(G.ey,t)
inherit(G.ds,t)
inherit(G.dr,t)
inherit(G.w,t)
inherit(G.dl,t)
inherit(R.fL,t)
inherit(T.aq,t)
inherit(T.av,t)
inherit(T.B,t)
inherit(T.aF,t)
t=J.a
inherit(J.eH,t)
inherit(J.d3,t)
inherit(J.bE,t)
inherit(J.aQ,t)
inherit(J.bd,t)
inherit(J.aR,t)
inherit(H.bH,t)
inherit(H.bf,t)
inherit(W.h,t)
inherit(W.a0,t)
inherit(W.c8,t)
inherit(W.dR,t)
inherit(W.y,t)
inherit(W.cm,t)
inherit(W.dX,t)
inherit(W.dY,t)
inherit(W.dZ,t)
inherit(W.cd,t)
inherit(W.ce,t)
inherit(W.cf,t)
inherit(W.cx,t)
inherit(W.e1,t)
inherit(W.i,t)
inherit(W.cw,t)
inherit(W.a4,t)
inherit(W.ez,t)
inherit(W.cv,t)
inherit(W.eR,t)
inherit(W.eX,t)
inherit(W.a5,t)
inherit(W.ct,t)
inherit(W.f9,t)
inherit(W.dc,t)
inherit(W.cz,t)
inherit(W.fi,t)
inherit(W.bi,t)
inherit(W.a6,t)
inherit(W.cs,t)
inherit(W.ai,t)
inherit(W.di,t)
inherit(W.a8,t)
inherit(W.cr,t)
inherit(W.a9,t)
inherit(W.fN,t)
inherit(W.W,t)
inherit(W.cq,t)
inherit(W.h0,t)
inherit(W.ab,t)
inherit(W.cB,t)
inherit(W.h5,t)
inherit(W.dt,t)
inherit(W.hd,t)
inherit(W.hi,t)
inherit(W.hx,t)
inherit(W.cG,t)
inherit(W.cF,t)
inherit(W.cE,t)
inherit(W.cA,t)
inherit(W.cD,t)
inherit(W.cC,t)
inherit(W.is,t)
inherit(W.it,t)
inherit(P.ap,t)
inherit(P.cp,t)
inherit(P.ar,t)
inherit(P.cu,t)
inherit(P.fo,t)
inherit(P.fp,t)
inherit(P.fu,t)
inherit(P.cn,t)
inherit(P.as,t)
inherit(P.cy,t)
inherit(P.hh,t)
inherit(P.dO,t)
inherit(P.fy,t)
inherit(P.fz,t)
inherit(P.ir,t)
inherit(P.co,t)
t=J.bE
inherit(J.fm,t)
inherit(J.b_,t)
inherit(J.aS,t)
inherit(J.jj,J.aQ)
t=J.bd
inherit(J.d2,t)
inherit(J.d1,t)
t=P.V
inherit(H.c,t)
inherit(H.d6,t)
inherit(H.du,t)
t=H.c
inherit(H.be,t)
inherit(H.eN,t)
inherit(H.e4,H.d6)
t=P.d0
inherit(H.eS,t)
inherit(H.hk,t)
t=H.be
inherit(H.bF,t)
inherit(P.eP,t)
t=H.b9
inherit(H.j3,t)
inherit(H.j4,t)
inherit(H.hZ,t)
inherit(H.hE,t)
inherit(H.eD,t)
inherit(H.eE,t)
inherit(H.i5,t)
inherit(H.h2,t)
inherit(H.h3,t)
inherit(H.j5,t)
inherit(H.iP,t)
inherit(H.iQ,t)
inherit(H.iR,t)
inherit(H.iS,t)
inherit(H.iT,t)
inherit(H.fX,t)
inherit(H.eJ,t)
inherit(H.iL,t)
inherit(H.iM,t)
inherit(H.iN,t)
inherit(P.hs,t)
inherit(P.hr,t)
inherit(P.ht,t)
inherit(P.hu,t)
inherit(P.ex,t)
inherit(P.ew,t)
inherit(P.hJ,t)
inherit(P.hR,t)
inherit(P.hN,t)
inherit(P.hO,t)
inherit(P.hP,t)
inherit(P.hL,t)
inherit(P.hQ,t)
inherit(P.hK,t)
inherit(P.hU,t)
inherit(P.hV,t)
inherit(P.hT,t)
inherit(P.hS,t)
inherit(P.fQ,t)
inherit(P.fR,t)
inherit(P.ix,t)
inherit(P.i9,t)
inherit(P.i8,t)
inherit(P.ia,t)
inherit(P.eT,t)
inherit(P.e2,t)
inherit(P.e3,t)
inherit(W.iy,t)
inherit(W.hl,t)
inherit(W.hH,t)
inherit(W.fb,t)
inherit(W.fa,t)
inherit(W.ih,t)
inherit(W.ii,t)
inherit(W.ip,t)
inherit(W.iq,t)
inherit(P.hp,t)
inherit(P.iz,t)
inherit(P.iA,t)
inherit(P.iB,t)
inherit(B.iZ,t)
inherit(B.j_,t)
inherit(B.j0,t)
inherit(B.j1,t)
inherit(B.j2,t)
inherit(B.fe,t)
inherit(B.ff,t)
inherit(B.fg,t)
inherit(B.fh,t)
inherit(D.eQ,t)
inherit(A.iK,t)
inherit(T.iV,t)
inherit(T.iW,t)
t=H.hw
inherit(H.bk,t)
inherit(H.c_,t)
t=P.bb
inherit(H.df,t)
inherit(H.eK,t)
inherit(H.hc,t)
inherit(H.ha,t)
inherit(H.dS,t)
inherit(H.fB,t)
inherit(P.c7,t)
inherit(P.bg,t)
inherit(P.an,t)
inherit(P.t,t)
inherit(P.bT,t)
inherit(P.ah,t)
inherit(P.a1,t)
inherit(P.dW,t)
t=H.fX
inherit(H.fK,t)
inherit(H.bt,t)
inherit(H.hq,P.c7)
t=H.bf
inherit(H.f1,t)
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
inherit(H.f2,t)
t=H.da
inherit(H.f3,t)
inherit(H.f4,t)
inherit(H.f5,t)
inherit(H.f6,t)
inherit(H.f7,t)
inherit(H.db,t)
inherit(H.f8,t)
t=P.hy
inherit(P.dw,t)
inherit(P.im,t)
inherit(P.i7,P.iu)
inherit(P.dz,H.af)
inherit(P.fD,P.fE)
inherit(P.hY,P.fD)
inherit(P.i_,P.hY)
inherit(P.d4,P.bN)
t=P.U
inherit(P.K,t)
inherit(P.n,t)
t=P.an
inherit(P.dj,t)
inherit(P.eB,t)
t=W.h
inherit(W.p,t)
inherit(W.bx,t)
inherit(W.dU,t)
inherit(W.er,t)
inherit(W.bD,t)
inherit(W.bG,t)
inherit(W.fr,t)
inherit(W.dk,t)
inherit(W.fF,t)
inherit(W.a7,t)
inherit(W.bw,t)
inherit(W.aa,t)
inherit(W.X,t)
inherit(W.bv,t)
inherit(W.hf,t)
inherit(W.hj,t)
inherit(W.bU,t)
inherit(W.hm,t)
inherit(W.b1,t)
inherit(W.ig,t)
t=W.p
inherit(W.a2,t)
inherit(W.aN,t)
inherit(W.aP,t)
inherit(W.cc,t)
inherit(W.hA,t)
t=W.a2
inherit(W.j,t)
inherit(P.E,t)
t=W.j
inherit(W.dL,t)
inherit(W.dM,t)
inherit(W.aM,t)
inherit(W.c9,t)
inherit(W.cb,t)
inherit(W.ev,t)
inherit(W.cj,t)
inherit(W.eC,t)
inherit(W.fC,t)
inherit(W.dp,t)
inherit(W.fV,t)
inherit(W.fW,t)
inherit(W.bR,t)
inherit(W.hX,t)
inherit(W.bA,W.bx)
inherit(W.dP,W.bA)
inherit(W.ba,W.cm)
inherit(W.e_,W.ce)
inherit(W.d_,W.cx)
inherit(W.e0,W.d_)
inherit(W.a3,W.c8)
inherit(W.cY,W.cw)
inherit(W.eq,W.cY)
inherit(W.cS,W.cv)
inherit(W.bC,W.cS)
inherit(W.ck,W.aP)
inherit(W.cl,W.bD)
inherit(W.aE,W.i)
t=W.aE
inherit(W.aT,t)
inherit(W.L,t)
inherit(W.aZ,t)
inherit(W.eZ,W.bG)
inherit(W.cU,W.ct)
inherit(W.f_,W.cU)
inherit(W.S,P.d4)
inherit(W.cT,W.cz)
inherit(W.bM,W.cT)
t=W.bi
inherit(W.fk,t)
inherit(W.fA,t)
inherit(W.h7,t)
inherit(W.cJ,W.cs)
inherit(W.fn,W.cJ)
inherit(W.fq,W.ai)
inherit(W.bz,W.bw)
inherit(W.fG,W.bz)
inherit(W.cM,W.cr)
inherit(W.fI,W.cM)
inherit(W.cK,W.cq)
inherit(W.fZ,W.cK)
inherit(W.by,W.bv)
inherit(W.h_,W.by)
inherit(W.cQ,W.cB)
inherit(W.h4,W.cQ)
inherit(W.b0,W.L)
inherit(W.cV,W.cG)
inherit(W.dx,W.cV)
inherit(W.cH,W.cF)
inherit(W.hz,W.cH)
inherit(W.hB,W.cf)
inherit(W.cO,W.cE)
inherit(W.hW,W.cO)
inherit(W.cX,W.cA)
inherit(W.dA,W.cX)
inherit(W.cZ,W.cD)
inherit(W.ij,W.cZ)
inherit(W.cW,W.cC)
inherit(W.ik,W.cW)
inherit(W.hC,W.hv)
inherit(W.hF,P.fO)
inherit(W.jv,W.hF)
inherit(W.hG,P.fP)
inherit(W.io,W.bZ)
inherit(P.ho,P.hn)
inherit(P.G,P.i6)
t=P.E
inherit(P.aB,t)
inherit(P.aL,t)
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
inherit(P.en,t)
inherit(P.es,t)
inherit(P.eU,t)
inherit(P.eV,t)
inherit(P.fj,t)
inherit(P.bO,t)
inherit(P.fU,t)
inherit(P.hg,t)
inherit(P.bV,t)
inherit(P.ib,t)
inherit(P.ic,t)
inherit(P.id,t)
t=P.aB
inherit(P.dK,t)
inherit(P.eu,t)
inherit(P.ae,t)
inherit(P.eA,t)
inherit(P.fT,t)
inherit(P.dq,t)
inherit(P.he,t)
inherit(P.cI,P.cp)
inherit(P.eL,P.cI)
inherit(P.cR,P.cu)
inherit(P.fc,P.cR)
inherit(P.fv,P.ae)
inherit(P.cP,P.cn)
inherit(P.fS,P.cP)
t=P.dq
inherit(P.fY,t)
inherit(P.bS,t)
inherit(P.cN,P.cy)
inherit(P.h6,P.cN)
inherit(P.cL,P.co)
inherit(P.fJ,P.cL)
t=G.f0
inherit(G.fH,t)
inherit(G.hb,t)
inherit(G.eY,t)
inherit(G.fx,t)
inherit(G.dQ,G.fH)
inherit(B.fd,G.dQ)
t=G.hb
inherit(G.eW,t)
inherit(G.fl,t)
inherit(R.dg,G.fl)
inherit(R.fM,R.fL)
mixin(H.bI,P.u)
mixin(H.bJ,P.u)
mixin(H.bK,H.ch)
mixin(H.bL,H.ch)
mixin(P.bN,P.u)
mixin(W.bv,P.u)
mixin(W.bw,P.u)
mixin(W.bx,P.u)
mixin(W.by,W.z)
mixin(W.bz,W.z)
mixin(W.bA,W.z)
mixin(W.cm,W.dV)
mixin(W.cG,P.u)
mixin(W.cs,P.u)
mixin(W.cz,P.u)
mixin(W.cA,P.u)
mixin(W.cB,P.u)
mixin(W.cC,P.u)
mixin(W.cD,P.u)
mixin(W.cE,P.u)
mixin(W.cF,P.u)
mixin(W.cq,P.u)
mixin(W.cr,P.u)
mixin(W.ct,P.u)
mixin(W.cv,P.u)
mixin(W.cw,P.u)
mixin(W.cx,P.u)
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
mixin(P.cp,P.u)
mixin(P.cn,P.u)
mixin(P.cu,P.u)
mixin(P.cy,P.u)
mixin(P.cI,W.z)
mixin(P.cR,W.z)
mixin(P.cN,W.z)
mixin(P.cP,W.z)
mixin(P.co,P.u)
mixin(P.cL,W.z)})();(function constants(){C.o=W.aM.prototype
C.K=W.c9.prototype
C.v=W.ba.prototype
C.p=W.cb.prototype
C.L=W.cd.prototype
C.M=W.cj.prototype
C.q=W.ck.prototype
C.x=W.cl.prototype
C.N=J.a.prototype
C.a=J.aQ.prototype
C.y=J.d1.prototype
C.b=J.d2.prototype
C.O=J.d3.prototype
C.c=J.bd.prototype
C.h=J.aR.prototype
C.V=J.aS.prototype
C.j=H.d7.prototype
C.C=W.bM.prototype
C.D=J.fm.prototype
C.E=W.di.prototype
C.J=W.dp.prototype
C.u=J.b_.prototype
C.av=W.b0.prototype
C.aw=W.bU.prototype
C.d=new P.i7()
C.w=new P.az(0)
C.P=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.Q=function(hooks) {
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
C.z=function(hooks) { return hooks; }

C.R=function(getTagFallback) {
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
C.S=function() {
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
C.T=function(hooks) {
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
C.U=function(hooks) {
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
C.A=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.W=H.D(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.q])
C.X=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.B=makeConstList([])
C.r=H.D(makeConstList(["bind","if","ref","repeat","syntax"]),[P.q])
C.t=H.D(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.q])
C.Y=new G.w("vec3","vertex btangents",0)
C.e=new G.w("vec3","",0)
C.Z=new G.w("vec4","delta from light",0)
C.n=new G.w("","",0)
C.F=new G.w("vec3","vertex coordinates",0)
C.a_=new G.w("vec3","vertex binormals",0)
C.G=new G.w("vec4","for wireframe",0)
C.a0=new G.w("vec4","per vertex color",0)
C.a1=new G.w("float","for normal maps",0)
C.k=new G.w("mat4","",0)
C.a3=new G.w("mat4","",4)
C.a2=new G.w("mat4","",128)
C.f=new G.w("float","",0)
C.a4=new G.w("float","",4)
C.a5=new G.w("float","depth for shadowmaps",0)
C.i=new G.w("sampler2D","",0)
C.a6=new G.w("float","for bump maps",0)
C.a7=new G.w("vec2","texture uvs",0)
C.a8=new G.w("float","time since program start in sec",0)
C.l=new G.w("vec2","",0)
C.a9=new G.w("samplerCube","",0)
C.m=new G.w("vec4","",0)
C.aa=new G.w("vec3","vertex normals",0)
C.ab=new G.w("sampler2DShadow","",0)
C.H=new G.w("vec3","per vertex color",0)
C.I=new G.w("mat3","",0)
C.ac=new G.w("vec3","vertex tangents",0)
C.ad=H.H("nC")
C.ae=H.H("nD")
C.af=H.H("et")
C.ag=H.H("nE")
C.ah=H.H("nF")
C.ai=H.H("ke")
C.aj=H.H("nG")
C.ak=H.H("kh")
C.al=H.H("aV")
C.am=H.H("q")
C.an=H.H("kG")
C.ao=H.H("kH")
C.ap=H.H("nJ")
C.aq=H.H("kI")
C.ar=H.H("ax")
C.as=H.H("K")
C.at=H.H("n")
C.au=H.H("U")})();(function staticFields(){$.ko="$cachedFunction"
$.kp="$cachedInvocation"
$.k_=null
$.jY=null
$.jx=!1
$.jB=null
$.kT=null
$.l9=null
$.iE=null
$.iO=null
$.jC=null
$.bl=null
$.c0=null
$.c1=null
$.jy=!1
$.v=C.d
$.kc=0
$.aA=null
$.jg=null
$.kb=null
$.ka=null
$.k8=null
$.k7=null
$.k6=null
$.k5=null
$.n5=0
$.n6=0
$.jG=0
$.l6=0
$.c5=0
$.c6=0
$.nv=!1
$.l0=0
$.l5="../ct_logo.obj"})();(function lazyInitializers(){lazy($,"k4","$get$k4",function(){return H.l2("_$dart_dartClosure")})
lazy($,"jl","$get$jl",function(){return H.l2("_$dart_js")})
lazy($,"kf","$get$kf",function(){return H.mg()})
lazy($,"kg","$get$kg",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.kc
$.kc=t+1
t="expando$key$"+t}return new P.e5(null,t,[P.n])})
lazy($,"kv","$get$kv",function(){return H.at(H.h9({
toString:function(){return"$receiver$"}}))})
lazy($,"kw","$get$kw",function(){return H.at(H.h9({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"kx","$get$kx",function(){return H.at(H.h9(null))})
lazy($,"ky","$get$ky",function(){return H.at(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kC","$get$kC",function(){return H.at(H.h9(void 0))})
lazy($,"kD","$get$kD",function(){return H.at(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kA","$get$kA",function(){return H.at(H.kB(null))})
lazy($,"kz","$get$kz",function(){return H.at(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"kF","$get$kF",function(){return H.at(H.kB(void 0))})
lazy($,"kE","$get$kE",function(){return H.at(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"ju","$get$ju",function(){return P.mH()})
lazy($,"c2","$get$c2",function(){return[]})
lazy($,"k3","$get$k3",function(){return{}})
lazy($,"kM","$get$kM",function(){return P.jn(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"jw","$get$jw",function(){return P.Q()})
lazy($,"iD","$get$iD",function(){return P.kk(P.n,P.ax)})
lazy($,"c4","$get$c4",function(){return P.kk(P.q,P.ax)})
lazy($,"kt","$get$kt",function(){return new G.ds(1281,0,4294967295)})
lazy($,"jW","$get$jW",function(){return new G.dr(1281,1281,1281)})
lazy($,"T","$get$T",function(){return P.aU(["cBlendEquation",C.n,"cDepthWrite",C.n,"cDepthTest",C.n,"cStencilFunc",C.n,"tPosition",C.e,"tSpeed",C.e,"tForce",C.e,"aColors",C.H,"aColorAlpha",C.a0,"aPosition",C.F,"aTexUV",C.a7,"aNormal",C.aa,"aBinormal",C.a_,"aCenter",C.G,"aPointSize",C.f,"aBoneIndex",C.m,"aBoneWeight",C.m,"aTangent",C.ac,"aBitangent",C.Y,"iaRotation",C.m,"iaTranslation",C.e,"iaScale",C.e,"vColor",C.H,"vTexUV",C.l,"vLightWeighting",C.e,"vNormal",C.e,"vPosition",C.F,"vPositionFromLight",C.Z,"vCenter",C.G,"vDepth",C.a5,"uTransformationMatrix",C.k,"uModelMatrix",C.k,"uNormalMatrix",C.I,"uConvolutionMatrix",C.I,"uPerspectiveViewMatrix",C.k,"uLightPerspectiveViewMatrix",C.k,"uShadowMap",C.ab,"uTexture",C.i,"uTexture2",C.i,"uTexture3",C.i,"uTexture4",C.i,"uSpecularMap",C.i,"uNormalMap",C.i,"uBumpMap",C.i,"uDepthMap",C.i,"uCubeTexture",C.a9,"uAnimationTable",C.i,"uTime",C.a8,"uCameraNear",C.f,"uCameraFar",C.f,"uFogNear",C.f,"uFogFar",C.f,"uPointSize",C.f,"uScale",C.f,"uAngle",C.f,"uCanvasSize",C.l,"uCenter2",C.l,"uCutOff",C.f,"uShininess",C.f,"uShadowBias",C.f,"uOpacity",C.f,"uColor",C.e,"uAmbientDiffuse",C.e,"uColorEmissive",C.e,"uColorSpecular",C.e,"uColorDiffuse",C.e,"uColorAlpha",C.m,"uColorAlpha2",C.m,"uEyePosition",C.e,"uMaterial",C.k,"uRange",C.l,"uDirection",C.l,"uBoneMatrices",C.a2,"uLightDescs",C.a3,"uLightCount",C.f,"uLightTypes",C.a4,"uBumpScale",C.a6,"uNormalScale",C.a1])})
lazy($,"k2","$get$k2",function(){return T.mF(0.8,0.8,0.8)})
lazy($,"kZ","$get$kZ",function(){var t=new G.dl("FixedVertexColorV",null,[],[],[],[],0,P.Q())
t.cV(["aPosition"])
t.cY(["uPerspectiveViewMatrix","uModelMatrix"])
t.be(["vColor"])
t.bj(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vColor = ColorFromPosition(aPosition);"],["// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"])
return t})
lazy($,"kY","$get$kY",function(){var t=new G.dl("FixedVertexColorF",null,[],[],[],[],0,P.Q())
t.be(["vColor"])
t.da(["oFragColor = vec4( vColor, 1.0 );"])
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
mangledGlobalNames:{n:"int",K:"double",U:"num",q:"String",ax:"bool",aV:"Null",b:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.p},{func:1,ret:P.ax,args:[W.a2,P.q,P.q,W.bW]},{func:1,v:true,args:[P.m],opt:[P.bP]},{func:1,v:true,args:[W.i]},{func:1,ret:P.n,args:[P.F,P.F]},{func:1,ret:P.q,args:[W.h]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationTimeline:J.a,AppBannerPromptResult:J.a,BarProp:J.a,Body:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CHROMIUMValuebuffer:J.a,CircularGeofencingRegion:J.a,Client:J.a,Clients:J.a,CompositorProxy:J.a,ConsoleBase:J.a,Coordinates:J.a,Credential:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMStringMap:J.a,EffectModel:J.a,Entry:J.a,FederatedCredential:J.a,FileEntry:J.a,FileError:J.a,Stream:J.a,DOMFileSystem:J.a,FontFace:J.a,FormData:J.a,GamepadButton:J.a,Geofencing:J.a,GeofencingRegion:J.a,Geolocation:J.a,Geoposition:J.a,Headers:J.a,HMDVRDevice:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageData:J.a,InjectedScriptHost:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,KeyframeEffect:J.a,MediaDeviceInfo:J.a,MediaDevices:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaMetadata:J.a,MediaSession:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigatorStorageUtils:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,OffscreenCanvas:J.a,PasswordCredential:J.a,PerformanceCompositeTiming:J.a,PerformanceEntry:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformanceRenderTiming:J.a,PerformanceResourceTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PositionError:J.a,PositionSensorVRDevice:J.a,Presentation:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,ReadableByteStream:J.a,ReadableByteStreamReader:J.a,ReadableStreamReader:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,Selection:J.a,ServicePort:J.a,SharedArrayBuffer:J.a,SourceInfo:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StorageInfo:J.a,StorageManager:J.a,StorageQuota:J.a,StyleMedia:J.a,StylePropertyMap:J.a,SyncManager:J.a,TextMetrics:J.a,TrackDefault:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRDevice:J.a,VREyeParameters:J.a,VRFieldOfView:J.a,VRPositionState:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkerConsole:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothAdvertisingData:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,NFC:J.a,PagePopupController:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WebKitCSSMatrix:J.a,Worklet:J.a,WorkletGlobalScope:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPreserveAspectRatio:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,CHROMIUMSubscribeUniform:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTDisjointTimerQuery:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bH,ArrayBufferView:H.bf,DataView:H.f1,Float32Array:H.d7,Float64Array:H.f2,Int16Array:H.f3,Int32Array:H.f4,Int8Array:H.f5,Uint16Array:H.f6,Uint32Array:H.f7,Uint8ClampedArray:H.db,CanvasPixelArray:H.db,Uint8Array:H.f8,HTMLAudioElement:W.j,HTMLBRElement:W.j,HTMLBaseElement:W.j,HTMLButtonElement:W.j,HTMLContentElement:W.j,HTMLDListElement:W.j,HTMLDataListElement:W.j,HTMLDetailsElement:W.j,HTMLDialogElement:W.j,HTMLEmbedElement:W.j,HTMLFieldSetElement:W.j,HTMLHRElement:W.j,HTMLHeadingElement:W.j,HTMLHtmlElement:W.j,HTMLIFrameElement:W.j,HTMLImageElement:W.j,HTMLKeygenElement:W.j,HTMLLIElement:W.j,HTMLLabelElement:W.j,HTMLLegendElement:W.j,HTMLLinkElement:W.j,HTMLMapElement:W.j,HTMLMediaElement:W.j,HTMLMenuElement:W.j,HTMLMenuItemElement:W.j,HTMLMetaElement:W.j,HTMLMeterElement:W.j,HTMLModElement:W.j,HTMLOListElement:W.j,HTMLObjectElement:W.j,HTMLOptGroupElement:W.j,HTMLOptionElement:W.j,HTMLOutputElement:W.j,HTMLParagraphElement:W.j,HTMLParamElement:W.j,HTMLPictureElement:W.j,HTMLPreElement:W.j,HTMLProgressElement:W.j,HTMLQuoteElement:W.j,HTMLScriptElement:W.j,HTMLShadowElement:W.j,HTMLSlotElement:W.j,HTMLSourceElement:W.j,HTMLSpanElement:W.j,HTMLStyleElement:W.j,HTMLTableCaptionElement:W.j,HTMLTableCellElement:W.j,HTMLTableDataCellElement:W.j,HTMLTableHeaderCellElement:W.j,HTMLTableColElement:W.j,HTMLTextAreaElement:W.j,HTMLTitleElement:W.j,HTMLTrackElement:W.j,HTMLUListElement:W.j,HTMLUnknownElement:W.j,HTMLVideoElement:W.j,HTMLDirectoryElement:W.j,HTMLFontElement:W.j,HTMLFrameElement:W.j,HTMLMarqueeElement:W.j,HTMLElement:W.j,HTMLAnchorElement:W.dL,HTMLAreaElement:W.dM,AudioTrack:W.a0,AudioTrackList:W.dP,Blob:W.c8,HTMLBodyElement:W.aM,HTMLCanvasElement:W.c9,CanvasRenderingContext2D:W.dR,CDATASection:W.aN,CharacterData:W.aN,Comment:W.aN,ProcessingInstruction:W.aN,Text:W.aN,CompositorWorker:W.dU,CSSCharsetRule:W.y,CSSFontFaceRule:W.y,CSSGroupingRule:W.y,CSSImportRule:W.y,CSSKeyframeRule:W.y,MozCSSKeyframeRule:W.y,WebKitCSSKeyframeRule:W.y,CSSKeyframesRule:W.y,MozCSSKeyframesRule:W.y,WebKitCSSKeyframesRule:W.y,CSSMediaRule:W.y,CSSNamespaceRule:W.y,CSSPageRule:W.y,CSSRule:W.y,CSSStyleRule:W.y,CSSSupportsRule:W.y,CSSViewportRule:W.y,CSSStyleDeclaration:W.ba,MSStyleCSSProperties:W.ba,CSS2Properties:W.ba,DataTransferItemList:W.dX,DeviceAcceleration:W.dY,HTMLDivElement:W.cb,XMLDocument:W.aP,Document:W.aP,DocumentFragment:W.cc,ShadowRoot:W.cc,DOMException:W.dZ,DOMImplementation:W.cd,DOMPoint:W.e_,DOMPointReadOnly:W.ce,DOMRectReadOnly:W.cf,DOMStringList:W.e0,DOMTokenList:W.e1,Element:W.a2,AnimationEvent:W.i,AnimationPlayerEvent:W.i,ApplicationCacheErrorEvent:W.i,AutocompleteErrorEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceLightEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,GamepadEvent:W.i,GeofencingEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RelatedEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCIceCandidateEvent:W.i,RTCPeerConnectionIceEvent:W.i,SecurityPolicyViolationEvent:W.i,ServicePortConnectEvent:W.i,ServiceWorkerMessageEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,Animation:W.h,ApplicationCache:W.h,DOMApplicationCache:W.h,OfflineResourceList:W.h,BatteryManager:W.h,CanvasCaptureMediaStreamTrack:W.h,CrossOriginServiceWorkerClient:W.h,EventSource:W.h,FileReader:W.h,FontFaceSet:W.h,MediaKeySession:W.h,MediaQueryList:W.h,MediaRecorder:W.h,MediaSource:W.h,MediaStream:W.h,MediaStreamTrack:W.h,MessagePort:W.h,MIDIAccess:W.h,NetworkInformation:W.h,Notification:W.h,Performance:W.h,PermissionStatus:W.h,PresentationAvailability:W.h,PresentationReceiver:W.h,PresentationRequest:W.h,RTCDTMFSender:W.h,RTCPeerConnection:W.h,webkitRTCPeerConnection:W.h,mozRTCPeerConnection:W.h,ScreenOrientation:W.h,ServicePortCollection:W.h,ServiceWorkerContainer:W.h,ServiceWorkerRegistration:W.h,SpeechRecognition:W.h,SpeechSynthesis:W.h,SpeechSynthesisUtterance:W.h,WorkerPerformance:W.h,BluetoothDevice:W.h,BluetoothRemoteGATTCharacteristic:W.h,USB:W.h,IDBDatabase:W.h,IDBOpenDBRequest:W.h,IDBVersionChangeRequest:W.h,IDBRequest:W.h,IDBTransaction:W.h,AnalyserNode:W.h,RealtimeAnalyserNode:W.h,AudioBufferSourceNode:W.h,AudioContext:W.h,webkitAudioContext:W.h,AudioDestinationNode:W.h,AudioNode:W.h,AudioSourceNode:W.h,BiquadFilterNode:W.h,ChannelMergerNode:W.h,AudioChannelMerger:W.h,ChannelSplitterNode:W.h,AudioChannelSplitter:W.h,ConvolverNode:W.h,DelayNode:W.h,DynamicsCompressorNode:W.h,GainNode:W.h,AudioGainNode:W.h,IIRFilterNode:W.h,MediaElementAudioSourceNode:W.h,MediaStreamAudioDestinationNode:W.h,MediaStreamAudioSourceNode:W.h,OfflineAudioContext:W.h,OscillatorNode:W.h,Oscillator:W.h,PannerNode:W.h,AudioPannerNode:W.h,webkitAudioPannerNode:W.h,ScriptProcessorNode:W.h,JavaScriptAudioNode:W.h,StereoPannerNode:W.h,WaveShaperNode:W.h,EventTarget:W.h,File:W.a3,FileList:W.eq,FileWriter:W.er,HTMLFormElement:W.ev,Gamepad:W.a4,HTMLHeadElement:W.cj,History:W.ez,HTMLCollection:W.bC,HTMLFormControlsCollection:W.bC,HTMLOptionsCollection:W.bC,HTMLDocument:W.ck,XMLHttpRequest:W.cl,XMLHttpRequestUpload:W.bD,XMLHttpRequestEventTarget:W.bD,HTMLInputElement:W.eC,KeyboardEvent:W.aT,Location:W.eR,MediaList:W.eX,MIDIOutput:W.eZ,MIDIInput:W.bG,MIDIPort:W.bG,MimeType:W.a5,MimeTypeArray:W.f_,PointerEvent:W.L,MouseEvent:W.L,DragEvent:W.L,Navigator:W.f9,Attr:W.p,Node:W.p,NodeIterator:W.dc,NodeList:W.bM,RadioNodeList:W.bM,Path2D:W.fi,Perspective:W.fk,Plugin:W.a6,PluginArray:W.fn,PositionValue:W.fq,PresentationConnection:W.fr,Range:W.di,Rotation:W.fA,RTCDataChannel:W.dk,DataChannel:W.dk,HTMLSelectElement:W.fC,SharedWorker:W.fF,SourceBuffer:W.a7,SourceBufferList:W.fG,SpeechGrammar:W.a8,SpeechGrammarList:W.fI,SpeechRecognitionResult:W.a9,Storage:W.fN,CSSStyleSheet:W.W,StyleSheet:W.W,CalcLength:W.ai,KeywordValue:W.ai,LengthValue:W.ai,NumberValue:W.ai,SimpleLength:W.ai,TransformValue:W.ai,StyleValue:W.ai,HTMLTableElement:W.dp,HTMLTableRowElement:W.fV,HTMLTableSectionElement:W.fW,HTMLTemplateElement:W.bR,TextTrack:W.aa,TextTrackCue:W.X,VTTCue:W.X,TextTrackCueList:W.fZ,TextTrackList:W.h_,TimeRanges:W.h0,Touch:W.ab,TouchEvent:W.aZ,TouchList:W.h4,TrackDefaultList:W.h5,Matrix:W.bi,Skew:W.bi,TransformComponent:W.bi,Translation:W.h7,TreeWalker:W.dt,CompositionEvent:W.aE,FocusEvent:W.aE,TextEvent:W.aE,SVGZoomEvent:W.aE,UIEvent:W.aE,URL:W.hd,VideoTrackList:W.hf,VTTRegionList:W.hi,WebSocket:W.hj,WheelEvent:W.b0,Window:W.bU,DOMWindow:W.bU,Worker:W.hm,CompositorWorkerGlobalScope:W.b1,DedicatedWorkerGlobalScope:W.b1,ServiceWorkerGlobalScope:W.b1,SharedWorkerGlobalScope:W.b1,WorkerGlobalScope:W.b1,ClientRect:W.hx,ClientRectList:W.dx,DOMRectList:W.dx,CSSRuleList:W.hz,DocumentType:W.hA,DOMRect:W.hB,GamepadList:W.hW,HTMLFrameSetElement:W.hX,NamedNodeMap:W.dA,MozNamedAttrMap:W.dA,ServiceWorker:W.ig,SpeechRecognitionResultList:W.ij,StyleSheetList:W.ik,WorkerLocation:W.is,WorkerNavigator:W.it,SVGAElement:P.dK,SVGAnimateElement:P.aL,SVGAnimateMotionElement:P.aL,SVGAnimateTransformElement:P.aL,SVGAnimationElement:P.aL,SVGSetElement:P.aL,SVGFEBlendElement:P.e6,SVGFEColorMatrixElement:P.e7,SVGFEComponentTransferElement:P.e8,SVGFECompositeElement:P.e9,SVGFEConvolveMatrixElement:P.ea,SVGFEDiffuseLightingElement:P.eb,SVGFEDisplacementMapElement:P.ec,SVGFEFloodElement:P.ed,SVGFEGaussianBlurElement:P.ee,SVGFEImageElement:P.ef,SVGFEMergeElement:P.eg,SVGFEMorphologyElement:P.eh,SVGFEOffsetElement:P.ei,SVGFEPointLightElement:P.ej,SVGFESpecularLightingElement:P.ek,SVGFESpotLightElement:P.el,SVGFETileElement:P.em,SVGFETurbulenceElement:P.en,SVGFilterElement:P.es,SVGForeignObjectElement:P.eu,SVGCircleElement:P.ae,SVGEllipseElement:P.ae,SVGLineElement:P.ae,SVGPathElement:P.ae,SVGPolygonElement:P.ae,SVGPolylineElement:P.ae,SVGGeometryElement:P.ae,SVGClipPathElement:P.aB,SVGDefsElement:P.aB,SVGGElement:P.aB,SVGSwitchElement:P.aB,SVGGraphicsElement:P.aB,SVGImageElement:P.eA,SVGLength:P.ap,SVGLengthList:P.eL,SVGMarkerElement:P.eU,SVGMaskElement:P.eV,SVGNumber:P.ar,SVGNumberList:P.fc,SVGPatternElement:P.fj,SVGPoint:P.fo,SVGPointList:P.fp,SVGRect:P.fu,SVGRectElement:P.fv,SVGScriptElement:P.bO,SVGStringList:P.fS,SVGDescElement:P.E,SVGDiscardElement:P.E,SVGFEDistantLightElement:P.E,SVGFEFuncAElement:P.E,SVGFEFuncBElement:P.E,SVGFEFuncGElement:P.E,SVGFEFuncRElement:P.E,SVGFEMergeNodeElement:P.E,SVGMetadataElement:P.E,SVGStopElement:P.E,SVGStyleElement:P.E,SVGTitleElement:P.E,SVGComponentTransferFunctionElement:P.E,SVGElement:P.E,SVGSVGElement:P.fT,SVGSymbolElement:P.fU,SVGTextContentElement:P.dq,SVGTextPathElement:P.fY,SVGTSpanElement:P.bS,SVGTextElement:P.bS,SVGTextPositioningElement:P.bS,SVGTransform:P.as,SVGTransformList:P.h6,SVGUseElement:P.he,SVGViewElement:P.hg,SVGViewSpec:P.hh,SVGLinearGradientElement:P.bV,SVGRadialGradientElement:P.bV,SVGGradientElement:P.bV,SVGCursorElement:P.ib,SVGFEDropShadowElement:P.ic,SVGMPathElement:P.id,AudioBuffer:P.dO,WebGLRenderingContext:P.fy,WebGL2RenderingContext:P.fz,WebGL2RenderingContextBase:P.ir,SQLResultSetRowList:P.fJ})
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
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.la(T.l7(),b)},[])
else (function(b){H.la(T.l7(),b)})([])})})()