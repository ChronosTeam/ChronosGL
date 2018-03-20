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
a[c]=function(){a[c]=function(){H.nR(b)}
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
return d?function(e){if(t===null)t=H.jH(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.jH(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.jH(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={jr:function jr(a){this.a=a},
jw:function(a,b,c,d){if(!!a.$isc)return new H.eb(a,b,[c,d])
return new H.da(a,b,[c,d])},
eO:function(){return new P.aj("No element")},
mA:function(){return new P.aj("Too many elements")},
mz:function(){return new P.aj("Too few elements")},
du:function(a,b,c,d){if(c-b<=32)H.mR(a,b,c,d)
else H.mQ(a,b,c,d)},
mR:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.a0(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.ao(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
mQ:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.d(t>32)
s=C.b.E(t+1,6)
r=a3+s
q=a4-s
p=C.b.E(a3+a4,2)
o=p-s
n=p+s
t=J.a0(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.ao(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.ao(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.ao(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.ao(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.ao(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.ao(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.ao(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.ao(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.ao(a5.$2(j,i),0)){h=i
i=j
j=h}t.i(a2,r,m)
t.i(a2,p,k)
t.i(a2,q,i)
t.i(a2,o,t.h(a2,a3))
t.i(a2,n,t.h(a2,a4))
g=a3+1
f=a4-1
if(J.z(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=t.h(a2,e)
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
H.du(a2,a3,g-2,a5)
H.du(a2,f+2,a4,a5)
if(a0)return
if(g<r&&f>q){for(;J.z(a5.$2(t.h(a2,g),l),0);)++g
for(;J.z(a5.$2(t.h(a2,f),j),0);)--f
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
break}}H.du(a2,g,f,a5)}else H.du(a2,g,f,a5)},
c:function c(){},
bi:function bi(){},
d9:function d9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
da:function da(a,b,c){this.a=a
this.b=b
this.$ti=c},
eb:function eb(a,b,c){this.a=a
this.b=b
this.$ti=c},
f0:function f0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bH:function bH(a,b,c){this.a=a
this.b=b
this.$ti=c},
dC:function dC(a,b,c){this.a=a
this.b=b
this.$ti=c},
ht:function ht(a,b,c){this.a=a
this.b=b
this.$ti=c},
cm:function cm(){},
dL:function(a,b){var t=a.ag(b)
if(!u.globalState.d.cy)u.globalState.f.an()
return t},
j1:function(){--u.globalState.f.b
H.d(u.globalState.f.b>=0)},
ln:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.r(s).$isb)throw H.e(P.jl("Arguments to main must be a List: "+H.f(s)))
u.globalState=new H.ic(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$ko()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.hM(P.jv(null,H.b6),0)
r=P.m
s.seH(new H.ah(0,null,null,null,null,null,0,[r,H.b5]))
s.seL(new H.ah(0,null,null,null,null,null,0,[r,null]))
if(s.x){q=new H.ib()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.mu,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.n5)}if(u.globalState.x)return
s=u.globalState.a++
q=P.ai(null,null,null,r)
p=new H.bl(0,null,!1)
o=new H.b5(s,new H.ah(0,null,null,null,null,null,0,[r,H.bl]),q,u.createNewIsolate(),p,new H.aq(H.j5()),new H.aq(H.j5()),!1,!1,[],P.ai(null,null,null,null),null,null,!1,!0,P.ai(null,null,null,null))
q.l(0,0)
o.bt(0,p)
u.globalState.e=o
u.globalState.z.i(0,s,o)
u.globalState.d=o
if(H.bs(a,{func:1,args:[,]}))o.ag(new H.jb(t,a))
else if(H.bs(a,{func:1,args:[,,]}))o.ag(new H.jc(t,a))
else o.ag(a)
u.globalState.f.an()},
n5:function(a){var t=P.aV(["command","print","msg",a])
return new H.al(!0,P.c_(null,P.m)).I(t)},
mw:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.mx()
return},
mx:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.e(new P.t("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.e(new P.t('Cannot extract URI from "'+t+'"'))},
mu:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.b4(!0,[]).W(b.data)
s=J.a0(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.nA(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.b4(!0,[]).W(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.b4(!0,[]).W(s.h(t,"replyTo"))
s=u.globalState.a++
k=P.m
j=P.ai(null,null,null,k)
i=new H.bl(0,null,!1)
h=new H.b5(s,new H.ah(0,null,null,null,null,null,0,[k,H.bl]),j,u.createNewIsolate(),i,new H.aq(H.j5()),new H.aq(H.j5()),!1,!1,[],P.ai(null,null,null,null),null,null,!1,!0,P.ai(null,null,null,null))
j.l(0,0)
h.bt(0,i)
u.globalState.f.a.T(0,new H.b6(h,new H.eL(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.an()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.lW(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.an()
break
case"close":u.globalState.ch.am(0,$.$get$kp().h(0,a))
a.terminate()
u.globalState.f.an()
break
case"log":H.mt(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
k=P.aV(["command","print","msg",t])
k=new H.al(!0,P.c_(null,P.m)).I(k)
s.toString
self.postMessage(k)}else P.V(s.h(t,"msg"))
break
case"error":throw H.e(s.h(t,"msg"))}},
mt:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aV(["command","log","msg",a])
r=new H.al(!0,P.c_(null,P.m)).I(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.Q(q)
t=H.az(q)
s=P.cl(t)
throw H.e(s)}},
mv:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.ky=$.ky+("_"+s)
$.kz=$.kz+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.D(0,["spawned",new H.bo(s,r),q,t.r])
r=new H.eM(a,b,c,d,t)
if(e){t.bP(q,q)
u.globalState.f.a.T(0,new H.b6(t,r,"start isolate"))}else r.$0()},
mT:function(a,b){var t=new H.hb(!0,!1,null)
t.dm(a,b)
return t},
n7:function(a){return new H.b4(!0,[]).W(new H.al(!1,P.c_(null,P.m)).I(a))},
jb:function jb(a,b){this.a=a
this.b=b},
jc:function jc(a,b){this.a=a
this.b=b},
ic:function ic(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
i7:function i7(a,b){this.a=a
this.b=b},
hM:function hM(a,b){this.a=a
this.b=b},
hN:function hN(a){this.a=a},
b6:function b6(a,b,c){this.a=a
this.b=b
this.c=c},
ib:function ib(){},
eL:function eL(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eM:function eM(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hF:function hF(){},
bo:function bo(a,b){this.b=a
this.a=b},
ie:function ie(a,b){this.a=a
this.b=b},
c1:function c1(a,b,c){this.b=a
this.c=b
this.a=c},
bl:function bl(a,b,c){this.a=a
this.b=b
this.c=c},
hb:function hb(a,b,c){this.a=a
this.b=b
this.c=c},
hc:function hc(a,b){this.a=a
this.b=b},
hd:function hd(a,b){this.a=a
this.b=b},
aq:function aq(a){this.a=a},
al:function al(a,b){this.a=a
this.b=b},
b4:function b4(a,b){this.a=a
this.b=b},
nt:function(a){return u.types[a]},
nC:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.r(a).$iso},
f:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aA(a)
if(typeof t!=="string")throw H.e(H.P(a))
return t},
mO:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.fE(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aY:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
kx:function(a,b){throw H.e(new P.bD(a,null,null))},
jy:function(a,b,c){var t,s
H.l7(a)
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return H.kx(a,c)
s=t[3]
if(s!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return H.kx(a,c)},
kw:function(a,b){throw H.e(new P.bD("Invalid double",a,null))},
aZ:function(a,b){var t,s
H.l7(a)
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return H.kw(a,b)
t=parseFloat(a)
if(isNaN(t)){s=J.m1(a)
if(s==="NaN"||s==="+NaN"||s==="-NaN")return t
return H.kw(a,b)}return t},
dm:function(a){var t,s,r,q,p,o,n,m
t=J.r(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.N||!!J.r(a).$isb1){p=C.A(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.i.aa(q,0)===36)q=C.i.cW(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.dN(H.iQ(a),0,null),u.mangledGlobalNames)},
fA:function(a){return"Instance of '"+H.dm(a)+"'"},
S:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mM:function(a){return a.b?H.S(a).getUTCFullYear()+0:H.S(a).getFullYear()+0},
mK:function(a){return a.b?H.S(a).getUTCMonth()+1:H.S(a).getMonth()+1},
mG:function(a){return a.b?H.S(a).getUTCDate()+0:H.S(a).getDate()+0},
mH:function(a){return a.b?H.S(a).getUTCHours()+0:H.S(a).getHours()+0},
mJ:function(a){return a.b?H.S(a).getUTCMinutes()+0:H.S(a).getMinutes()+0},
mL:function(a){return a.b?H.S(a).getUTCSeconds()+0:H.S(a).getSeconds()+0},
mI:function(a){return a.b?H.S(a).getUTCMilliseconds()+0:H.S(a).getMilliseconds()+0},
jx:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.P(a))
return a[b]},
kA:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.P(a))
a[b]=c},
I:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.af(!0,b,"index",null)
t=J.cb(a)
if(b<0||C.b.cE(b,t))return P.C(b,a,"index",null,t)
return P.fB(b,"index",null)},
P:function(a){return new P.af(!0,a,null,null)},
l7:function(a){if(typeof a!=="string")throw H.e(H.P(a))
return a},
e:function(a){var t
if(a==null)a=new P.bk()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.lo})
t.name=""}else t.toString=H.lo
return t},
lo:function(){return J.aA(this.dartException)},
E:function(a){throw H.e(a)},
F:function(a){throw H.e(new P.a3(a))},
au:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.hi(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
hj:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
kL:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
jt:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.eT(a,s,t?null:b.receiver)},
Q:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.jd(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aO(r,16)&8191)===10)switch(q){case 438:return t.$1(H.jt(H.f(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.f(s)+" (Error "+q+")"
return t.$1(new H.dl(p,null))}}if(a instanceof TypeError){o=$.$get$kF()
n=$.$get$kG()
m=$.$get$kH()
l=$.$get$kI()
k=$.$get$kM()
j=$.$get$kN()
i=$.$get$kK()
$.$get$kJ()
h=$.$get$kP()
g=$.$get$kO()
f=o.N(s)
if(f!=null)return t.$1(H.jt(s,f))
else{f=n.N(s)
if(f!=null){f.method="call"
return t.$1(H.jt(s,f))}else{f=m.N(s)
if(f==null){f=l.N(s)
if(f==null){f=k.N(s)
if(f==null){f=j.N(s)
if(f==null){f=i.N(s)
if(f==null){f=l.N(s)
if(f==null){f=h.N(s)
if(f==null){f=g.N(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.dl(s,f==null?null:f.method))}}return t.$1(new H.hl(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.dv()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.af(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.dv()
return a},
az:function(a){var t
if(a==null)return new H.dJ(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dJ(a,null)},
nG:function(a){if(a==null||typeof a!='object')return J.ap(a)
else return H.aY(a)},
nr:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=a.length
for(r=0;r<s;){q=r+1
H.d(t)
p=a[r]
r=q+1
H.d(t)
b.i(0,p,a[q])}return b},
nB:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dL(b,new H.iX(a))
case 1:return H.dL(b,new H.iY(a,d))
case 2:return H.dL(b,new H.iZ(a,d,e))
case 3:return H.dL(b,new H.j_(a,d,e,f))
case 4:return H.dL(b,new H.j0(a,d,e,f,g))}throw H.e(P.cl("Unsupported number of arguments for wrapped closure"))},
b8:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.nB)
a.$identity=t
return t},
md:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.r(c).$isb){t.$reflectionInfo=c
r=H.mO(t).r}else r=c
q=d?Object.create(new H.fT().constructor.prototype):Object.create(new H.bv(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.ka(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.nt,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.k7:H.jm
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.e("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.ka(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
ma:function(a,b,c,d){var t=H.jm
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
ka:function(a,b,c){var t,s,r,q
if(c)return H.mc(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.ma(s,b==null?r!=null:b!==r,t,b)
return q},
mb:function(a,b,c,d){var t,s
t=H.jm
s=H.k7
switch(b?-1:a){case 0:throw H.e(new H.fK("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
mc:function(a,b){var t,s,r,q
H.m9()
t=$.k6
if(t==null){t=H.k5("receiver")
$.k6=t}s=b.$stubName
r=b.length
q=a[s]
t=H.mb(r,b==null?q!=null:b!==q,s,b)
return t},
jH:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.r(c).$isb){c.fixed$length=Array
t=c}else t=c
return H.md(a,b,t,!!d,e,f)},
jm:function(a){return a.a},
k7:function(a){return a.c},
m9:function(){var t=$.k8
if(t==null){t=H.k5("self")
$.k8=t}return t},
k5:function(a){var t,s,r,q,p
t=new H.bv("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
o5:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.av(a,"String"))},
a_:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.av(a,"double"))},
o4:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.av(a,"num"))},
nk:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.av(a,"bool"))},
nA:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.av(a,"int"))},
nI:function(a,b){throw H.e(H.av(a,b.substring(3)))},
nH:function(a,b){var t=J.a0(b)
throw H.e(H.k9(H.dm(a),t.aC(b,3,t.gk(b))))},
jK:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.r(a)[b])return a
H.nI(a,b)},
an:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.r(a)[b]
else t=!0
if(t)return a
H.nH(a,b)},
o3:function(a){if(a==null)return a
if(!!J.r(a).$isb)return a
throw H.e(H.av(a,"List"))},
la:function(a){var t=J.r(a)
return"$S" in t?t.$S():null},
bs:function(a,b){var t
if(a==null)return!1
t=H.la(a)
return t==null?!1:H.lh(t,b)},
o1:function(a,b){var t,s
if(a==null)return a
if($.jE)return a
$.jE=!0
try{if(H.bs(a,b))return a
t=H.aK(b,null)
s=H.av(a,t)
throw H.e(s)}finally{$.jE=!1}},
av:function(a,b){return new H.hk("type '"+H.dm(a)+"' is not a subtype of type '"+b+"'")},
k9:function(a,b){return new H.dZ("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
ax:function(a){if(!0===a)return!1
if(!!J.r(a).$isjp)a=a.$0()
if(typeof a==="boolean")return!a
throw H.e(H.av(a,"bool"))},
aI:function(a){throw H.e(new H.hz(a))},
d:function(a){if(H.ax(a))throw H.e(new P.cc(null))},
nR:function(a){throw H.e(new P.e2(a))},
j5:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
lf:function(a){return u.getIsolateTag(a)},
K:function(a){return new H.aF(a,null)},
D:function(a,b){H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
iQ:function(a){if(a==null)return
return a.$ti},
lg:function(a,b){return H.jO(a["$as"+H.f(b)],H.iQ(a))},
am:function(a,b,c){var t,s
t=H.lg(a,b)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
aJ:function(a,b){var t,s
t=H.iQ(a)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
aK:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.d(!0)
H.d(!0)
return a[0].name+H.dN(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.f(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aK(t,b)
return H.n9(a,b)}return"unknown-reified-type"},
n9:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aK(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aK(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aK(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.nq(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aK(l[j],b)+(" "+H.f(j))}q+="}"}return"("+q+") => "+t},
dN:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=new P.bS("")
for(r=b,q=!0,p=!0;H.d(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.d(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aK(o,c)}return p?"":"<"+s.j(0)+">"},
iR:function(a){var t,s
if(a instanceof H.bc){t=H.la(a)
if(t!=null)return H.aK(t,null)}s=J.r(a).constructor.name
if(a==null)return s
return s+H.dN(a.$ti,0,null)},
jO:function(a,b){if(a==null)return b
H.d(typeof a=="function")
H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.jL(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.jL(a,null,b)
return b},
c5:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.iQ(a)
s=J.r(a)
if(s[b]==null)return!1
return H.l5(H.jO(s[d],t),c)},
c9:function(a,b,c,d){if(a==null)return a
if(H.c5(a,b,c,d))return a
throw H.e(H.k9(H.dm(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dN(c,0,null),u.mangledGlobalNames)))},
nZ:function(a,b,c,d){if(a==null)return a
if(H.c5(a,b,c,d))return a
throw H.e(H.av(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dN(c,0,null),u.mangledGlobalNames)))},
l5:function(a,b){var t,s,r,q,p
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
if(!H.a1(r,b[p]))return!1}return!0},
o_:function(a,b,c){return H.jL(a,b,H.lg(b,c))},
a1:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.name==="aX")return!0
if('func' in b)return H.lh(a,b)
if('func' in a)return b.name==="jp"||b.name==="n"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.d(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.d(!0)
q=b[0]}else q=b
if(q!==s){p=H.aK(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.l5(H.jO(o,t),r)},
l4:function(a,b,c){var t,s,r,q,p,o,n
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
if(!(H.a1(o,n)||H.a1(n,o)))return!1}return!0},
ng:function(a,b){var t,s,r,q,p,o
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
if(!(H.a1(p,o)||H.a1(o,p)))return!1}return!0},
lh:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.d('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.a1(t,s)||H.a1(s,t)))return!1}r=a.args
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
if(n===m){if(!H.l4(r,q,!1))return!1
if(!H.l4(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.d(j)
g=r[h]
H.d(i)
f=q[h]
if(!(H.a1(g,f)||H.a1(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.d(j)
g=p[d]
H.d(i)
f=q[e]
if(!(H.a1(g,f)||H.a1(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.d(j)
g=p[d]
H.d(i)
f=o[e]
if(!(H.a1(g,f)||H.a1(f,g)))return!1}}return H.ng(a.named,b.named)},
jL:function(a,b,c){H.d(typeof a=="function")
H.d(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
o6:function(a){var t=$.jI
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
o2:function(a){return H.aY(a)},
o0:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nD:function(a){var t,s,r,q,p,o
H.d(!(a instanceof P.n))
t=$.jI.$1(a)
s=$.iN[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iW[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.l3.$2(a,t)
if(t!=null){s=$.iN[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iW[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.jM(r)
$.iN[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.iW[t]=r
return r}if(p==="-"){o=H.jM(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.lj(a,r)
if(p==="*")throw H.e(new P.bV(t))
if(u.leafTags[t]===true){o=H.jM(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.lj(a,r)},
lj:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.j4(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
jM:function(a){return J.j4(a,!1,null,!!a.$iso)},
nF:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.j4(t,!1,null,!!t.$iso)
else return J.j4(t,c,null,null)},
ny:function(){if(!0===$.jJ)return
$.jJ=!0
H.nz()},
nz:function(){var t,s,r,q,p,o,n,m
$.iN=Object.create(null)
$.iW=Object.create(null)
H.nx()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.lk.$1(p)
if(o!=null){n=H.nF(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
nx:function(){var t,s,r,q,p,o,n
t=C.R()
t=H.br(C.O,H.br(C.T,H.br(C.z,H.br(C.z,H.br(C.S,H.br(C.P,H.br(C.Q(C.A),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.jI=new H.iT(p)
$.l3=new H.iU(o)
$.lk=new H.iV(n)},
br:function(a,b){return a(b)||b},
ks:function(a,b,c,d){var t,s,r,q
t=b?"m":""
s=c?"":"i"
r=d?"g":""
q=function(e,f){try{return new RegExp(e,f)}catch(p){return p}}(a,t+s+r)
if(q instanceof RegExp)return q
throw H.e(new P.bD("Illegal RegExp pattern ("+String(q)+")",a,null))},
n6:function(a,b){var t=new H.id(a,b)
t.dz(a,b)
return t},
nM:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
nO:function(a,b,c,d){var t,s,r
t=b.dL(a,d)
if(t==null)return a
s=t.b
r=s.index
return H.nQ(a,r,r+s[0].length,c)},
nN:function(a,b,c){var t,s
t=b.gbH()
t.lastIndex=0
s=a.replace(t,c.replace(/\$/g,"$$$$"))
return s},
nP:function(a,b,c,d){return d===0?a.replace(b.b,c.replace(/\$/g,"$$$$")):H.nO(a,b,c,d)},
nQ:function(a,b,c,d){var t,s
t=a.substring(0,b)
s=a.substring(c)
return t+d+s},
fE:function fE(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
hi:function hi(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dl:function dl(a,b){this.a=a
this.b=b},
eT:function eT(a,b,c){this.a=a
this.b=b
this.c=c},
hl:function hl(a){this.a=a},
jd:function jd(a){this.a=a},
dJ:function dJ(a,b){this.a=a
this.b=b},
iX:function iX(a){this.a=a},
iY:function iY(a,b){this.a=a
this.b=b},
iZ:function iZ(a,b,c){this.a=a
this.b=b
this.c=c},
j_:function j_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j0:function j0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bc:function bc(){},
h6:function h6(){},
fT:function fT(){},
bv:function bv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hk:function hk(a){this.a=a},
dZ:function dZ(a){this.a=a},
fK:function fK(a){this.a=a},
hz:function hz(a){this.a=a},
aF:function aF(a,b){this.a=a
this.b=b},
ah:function ah(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
eS:function eS(a){this.a=a},
eV:function eV(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
eW:function eW(a,b){this.a=a
this.$ti=b},
eX:function eX(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
iT:function iT(a){this.a=a},
iU:function iU(a){this.a=a},
iV:function iV(a){this.a=a},
eR:function eR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
id:function id(a,b){this.a=a
this.b=b},
v:function(a){return a},
iE:function(a){var t,s,r
if(!!J.r(a).$isl)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
bJ:function bJ(){},
bj:function bj(){},
f9:function f9(){},
dd:function dd(){},
de:function de(){},
df:function df(){},
dc:function dc(){},
fa:function fa(){},
fb:function fb(){},
fc:function fc(){},
fd:function fd(){},
fe:function fe(){},
ff:function ff(){},
dg:function dg(){},
fg:function fg(){},
bK:function bK(){},
bL:function bL(){},
bM:function bM(){},
bN:function bN(){},
nq:function(a){var t=H.D(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
bt:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
r:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d7.prototype
return J.d6.prototype}if(typeof a=="string")return J.aS.prototype
if(a==null)return J.eQ.prototype
if(typeof a=="boolean")return J.eP.prototype
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aT.prototype
return a}if(a instanceof P.n)return a
return J.iP(a)},
j4:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iP:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.jJ==null){H.ny()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.e(new P.bV("Return interceptor for "+H.f(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$js()]
if(p!=null)return p
p=H.nD(a)
if(p!=null)return p
if(typeof a=="function")return C.U
s=Object.getPrototypeOf(a)
if(s==null)return C.D
if(s===Object.prototype)return C.D
if(typeof q=="function"){Object.defineProperty(q,$.$get$js(),{value:C.u,enumerable:false,writable:true,configurable:true})
return C.u}return C.u},
kr:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
mB:function(a,b){var t,s
for(t=a.length;b<t;){s=C.i.aa(a,b)
if(s!==32&&s!==13&&!J.kr(s))break;++b}return b},
mC:function(a,b){var t,s
for(;b>0;b=t){t=b-1
s=C.i.c_(a,t)
if(s!==32&&s!==13&&!J.kr(s))break}return b},
a0:function(a){if(typeof a=="string")return J.aS.prototype
if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aT.prototype
return a}if(a instanceof P.n)return a
return J.iP(a)},
b9:function(a){if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aT.prototype
return a}if(a instanceof P.n)return a
return J.iP(a)},
le:function(a){if(typeof a=="number")return J.bh.prototype
if(a==null)return a
if(!(a instanceof P.n))return J.b1.prototype
return a},
ns:function(a){if(typeof a=="number")return J.bh.prototype
if(typeof a=="string")return J.aS.prototype
if(a==null)return a
if(!(a instanceof P.n))return J.b1.prototype
return a},
iO:function(a){if(typeof a=="string")return J.aS.prototype
if(a==null)return a
if(!(a instanceof P.n))return J.b1.prototype
return a},
k:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aT.prototype
return a}if(a instanceof P.n)return a
return J.iP(a)},
z:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.r(a).v(a,b)},
ao:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.le(a).ap(a,b)},
lq:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.le(a).aq(a,b)},
ba:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nC(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.a0(a).h(a,b)},
jP:function(a,b,c){return J.b9(a).i(a,b,c)},
lr:function(a,b,c,d){return J.k(a).dC(a,b,c,d)},
jQ:function(a,b){return J.iO(a).aa(a,b)},
bu:function(a,b){return J.k(a).dT(a,b)},
ls:function(a,b,c){return J.k(a).dU(a,b,c)},
jR:function(a,b){return J.k(a).bO(a,b)},
je:function(a,b){return J.k(a).O(a,b)},
jS:function(a,b,c){return J.k(a).bR(a,b,c)},
lt:function(a,b){return J.k(a).e7(a,b)},
dO:function(a,b,c){return J.k(a).bS(a,b,c)},
lu:function(a,b,c){return J.k(a).bT(a,b,c)},
jT:function(a,b,c){return J.k(a).bU(a,b,c)},
dP:function(a,b){return J.k(a).ea(a,b)},
lv:function(a,b){return J.k(a).bV(a,b)},
lw:function(a,b,c){return J.k(a).bW(a,b,c)},
jU:function(a,b,c,d){return J.k(a).bX(a,b,c,d)},
lx:function(a,b){return J.b9(a).bY(a,b)},
ly:function(a,b,c,d,e){return J.k(a).bZ(a,b,c,d,e)},
lz:function(a,b){return J.ns(a).P(a,b)},
jf:function(a,b,c){return J.a0(a).ef(a,b,c)},
dQ:function(a){return J.k(a).c1(a)},
lA:function(a){return J.k(a).c2(a)},
jV:function(a){return J.k(a).el(a)},
lB:function(a,b){return J.k(a).c5(a,b)},
jg:function(a,b){return J.k(a).c6(a,b)},
lC:function(a,b,c,d){return J.k(a).c7(a,b,c,d)},
lD:function(a,b,c,d,e){return J.k(a).es(a,b,c,d,e)},
lE:function(a,b,c,d,e){return J.k(a).c8(a,b,c,d,e)},
lF:function(a,b,c,d,e,f){return J.k(a).eu(a,b,c,d,e,f)},
lG:function(a,b){return J.b9(a).t(a,b)},
ca:function(a,b){return J.k(a).c9(a,b)},
lH:function(a,b){return J.k(a).ca(a,b)},
lI:function(a){return J.k(a).ev(a)},
lJ:function(a,b){return J.b9(a).ah(a,b)},
lK:function(a){return J.k(a).ge6(a)},
ap:function(a){return J.r(a).gu(a)},
aL:function(a){return J.b9(a).gw(a)},
lL:function(a){return J.k(a).gC(a)},
cb:function(a){return J.a0(a).gk(a)},
lM:function(a){return J.k(a).gaY(a)},
lN:function(a){return J.r(a).gA(a)},
lO:function(a){return J.k(a).geX(a)},
lP:function(a){return J.k(a).gaz(a)},
jh:function(a){return J.k(a).gm(a)},
ji:function(a){return J.k(a).gn(a)},
jW:function(a){return J.k(a).gJ(a)},
jj:function(a,b){return J.k(a).a5(a,b)},
lQ:function(a){return J.k(a).aB(a)},
lR:function(a,b){return J.k(a).b5(a,b)},
lS:function(a,b,c){return J.k(a).b6(a,b,c)},
jX:function(a,b,c){return J.k(a).b9(a,b,c)},
lT:function(a,b){return J.k(a).cd(a,b)},
lU:function(a,b){return J.b9(a).cf(a,b)},
lV:function(a){return J.b9(a).eQ(a)},
lW:function(a,b){return J.k(a).D(a,b)},
lX:function(a,b,c){return J.k(a).cP(a,b,c)},
lY:function(a,b){return J.iO(a).cU(a,b)},
lZ:function(a,b,c,d){return J.k(a).bf(a,b,c,d)},
m_:function(a){return J.iO(a).f_(a)},
aA:function(a){return J.r(a).j(a)},
m0:function(a,b,c,d){return J.k(a).f1(a,b,c,d)},
m1:function(a){return J.iO(a).f2(a)},
m2:function(a,b,c){return J.k(a).cm(a,b,c)},
m3:function(a,b,c){return J.k(a).cn(a,b,c)},
jk:function(a,b,c){return J.k(a).co(a,b,c)},
m4:function(a,b,c){return J.k(a).cp(a,b,c)},
jY:function(a,b,c){return J.k(a).cq(a,b,c)},
jZ:function(a,b,c){return J.k(a).cr(a,b,c)},
k_:function(a,b,c){return J.k(a).cs(a,b,c)},
k0:function(a,b,c,d){return J.k(a).ct(a,b,c,d)},
k1:function(a,b,c,d){return J.k(a).cu(a,b,c,d)},
m5:function(a,b){return J.k(a).cw(a,b)},
m6:function(a,b,c){return J.k(a).f3(a,b,c)},
k2:function(a,b,c,d,e,f,g){return J.k(a).cA(a,b,c,d,e,f,g)},
m7:function(a,b,c,d,e){return J.k(a).cB(a,b,c,d,e)},
a:function a(){},
eP:function eP(){},
eQ:function eQ(){},
bG:function bG(){},
fu:function fu(){},
b1:function b1(){},
aT:function aT(){},
aR:function aR(a){this.$ti=a},
jq:function jq(a){this.$ti=a},
dU:function dU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bh:function bh(){},
d7:function d7(){},
d6:function d6(){},
aS:function aS(){}},P={
mW:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.nh()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.b8(new P.hB(t),1)).observe(s,{childList:true})
return new P.hA(t,s,r)}else if(self.setImmediate!=null)return P.ni()
return P.nj()},
mX:function(a){++u.globalState.f.b
self.scheduleImmediate(H.b8(new P.hC(a),0))},
mY:function(a){++u.globalState.f.b
self.setImmediate(H.b8(new P.hD(a),0))},
mZ:function(a){P.jz(C.w,a)},
nc:function(a,b){if(H.bs(a,{func:1,args:[P.aX,P.aX]})){b.toString
return a}else{b.toString
return a}},
mp:function(a,b,c){var t
if(a==null)a=new P.bk()
t=$.x
if(t!==C.d)t.toString
t=new P.O(0,t,null,[c])
t.bv(a,b)
return t},
mq:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.O(0,$.x,null,[P.b])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.eG(t,!1,b,s)
try{for(m=0,l=0;m<1;++m){q=a[m]
p=l
q.b2(new P.eF(t,!1,b,s,p),r)
l=++t.b}if(l===0){l=new P.O(0,$.x,null,[null])
l.bu(C.B)
return l}k=new Array(l)
k.fixed$length=Array
t.a=k}catch(j){o=H.Q(j)
n=H.az(j)
if(t.b===0||!1)return P.mp(o,n,null)
else{t.c=o
t.d=n}}return s},
kV:function(a,b){var t,s,r
H.d(b.a<4)
H.d(!(a instanceof P.O))
H.d(b.a===0)
b.a=1
try{a.b2(new P.hW(b),new P.hX(b))}catch(r){t=H.Q(r)
s=H.az(r)
P.nJ(new P.hY(b,t,s))}},
hV:function(a,b){var t,s,r,q
H.d(b.a<=1)
for(;t=a.a,s=t===2,s;){H.d(s)
a=a.c}s=b.a
if(t>=4){H.d(s<4)
r=b.c
b.c=null
q=b.ae(r)
H.d(b.a<4)
H.d(a.a>=4)
b.a=a.a
b.c=a.c
P.bn(b,q)}else{q=b.c
H.d(s<=1)
b.a=2
b.c=a
a.bI(q)}},
bn:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.iF(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bn(t.a,b)}s=t.a
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
P.iF(null,null,p,o,s)
return}s=$.x
if(s==null?l!=null:s!==l){H.d(l!=null)
s=$.x
H.d(l==null?s!=null:l!==s)
j=$.x
$.x=l
i=j}else i=null
s=b.c
if(s===8)new P.i2(t,r,q,b).$0()
else if(p){if((s&1)!==0)new P.i1(r,b,m).$0()}else if((s&2)!==0)new P.i0(t,r,b).$0()
if(i!=null){H.d(!0)
$.x=i}s=r.b
if(!!J.r(s).$isbf){if(s.a>=4){H.d(o.a<4)
h=o.c
o.c=null
b=o.ae(h)
H.d(o.a<4)
H.d(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.hV(s,o)
return}}g=b.b
H.d(g.a<4)
h=g.c
g.c=null
b=g.ae(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.d(!o)
g.a=4
g.c=p}else{H.d(!o)
g.a=8
g.c=p}t.a=g
s=g}},
nb:function(){var t,s
for(;t=$.bp,t!=null;){$.c3=null
s=t.b
$.bp=s
if(s==null)$.c2=null
t.a.$0()}},
nf:function(){$.jF=!0
try{P.nb()}finally{$.c3=null
$.jF=!1
if($.bp!=null)$.$get$jB().$1(P.l6())}},
l1:function(a){var t=new P.dD(a,null)
if($.bp==null){$.c2=t
$.bp=t
if(!$.jF)$.$get$jB().$1(P.l6())}else{$.c2.b=t
$.c2=t}},
ne:function(a){var t,s,r
t=$.bp
if(t==null){P.l1(a)
$.c3=$.c2
return}s=new P.dD(a,null)
r=$.c3
if(r==null){s.b=t
$.c3=s
$.bp=s}else{s.b=r.b
r.b=s
$.c3=s
if(s.b==null)$.c2=s}},
nJ:function(a){var t=$.x
if(C.d===t){P.bq(null,null,C.d,a)
return}t.toString
P.bq(null,null,t,t.aR(a))},
mU:function(a,b){var t=$.x
if(t===C.d){t.toString
return P.jz(a,b)}return P.jz(a,t.aR(b))},
jz:function(a,b){var t=C.b.E(a.a,1000)
return H.mT(t<0?0:t,b)},
jA:function(a){var t,s
H.d(a!=null)
t=$.x
H.d(a==null?t!=null:a!==t)
s=$.x
$.x=a
return s},
iF:function(a,b,c,d,e){var t={}
t.a=d
P.ne(new P.iG(t,e))},
l_:function(a,b,c,d){var t,s
if($.x===c)return d.$0()
t=P.jA(c)
try{s=d.$0()
return s}finally{s=t
H.d(s!=null)
$.x=s}},
l0:function(a,b,c,d,e){var t,s
if($.x===c)return d.$1(e)
t=P.jA(c)
try{s=d.$1(e)
return s}finally{s=t
H.d(s!=null)
$.x=s}},
nd:function(a,b,c,d,e,f){var t,s
if($.x===c)return d.$2(e,f)
t=P.jA(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.d(s!=null)
$.x=s}},
bq:function(a,b,c,d){var t=C.d!==c
if(t)d=!(!t||!1)?c.aR(d):c.e8(d)
P.l1(d)},
hB:function hB(a){this.a=a},
hA:function hA(a,b,c){this.a=a
this.b=b
this.c=c},
hC:function hC(a){this.a=a},
hD:function hD(a){this.a=a},
eG:function eG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eF:function eF(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hH:function hH(){},
dE:function dE(a,b){this.a=a
this.$ti=b},
iw:function iw(a,b){this.a=a
this.$ti=b},
dG:function dG(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
O:function O(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hS:function hS(a,b){this.a=a
this.b=b},
i_:function i_(a,b){this.a=a
this.b=b},
hW:function hW(a){this.a=a},
hX:function hX(a){this.a=a},
hY:function hY(a,b,c){this.a=a
this.b=b
this.c=c},
hU:function hU(a,b){this.a=a
this.b=b},
hZ:function hZ(a,b){this.a=a
this.b=b},
hT:function hT(a,b,c){this.a=a
this.b=b
this.c=c},
i2:function i2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i3:function i3(a){this.a=a},
i1:function i1(a,b,c){this.a=a
this.b=b
this.c=c},
i0:function i0(a,b,c){this.a=a
this.b=b
this.c=c},
dD:function dD(a,b){this.a=a
this.b=b},
fY:function fY(){},
h_:function h_(a){this.a=a},
h0:function h0(a,b){this.a=a
this.b=b},
fZ:function fZ(){},
bb:function bb(a,b){this.a=a
this.b=b},
iD:function iD(){},
iG:function iG(a,b){this.a=a
this.b=b},
ih:function ih(){},
ij:function ij(a,b){this.a=a
this.b=b},
ii:function ii(a,b){this.a=a
this.b=b},
ik:function ik(a,b){this.a=a
this.b=b},
kt:function(a,b){return new H.ah(0,null,null,null,null,null,0,[a,b])},
L:function(){return new H.ah(0,null,null,null,null,null,0,[null,null])},
aV:function(a){return H.nr(a,new H.ah(0,null,null,null,null,null,0,[null,null]))},
c_:function(a,b){return new P.dH(0,null,null,null,null,null,0,[a,b])},
n4:function(){var t=Object.create(null)
H.d(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
my:function(a,b,c){var t,s
if(P.jG(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$c4()
C.a.l(s,a)
try{P.na(a,t)}finally{H.d(C.a.gay(s)===a)
s.pop()}s=P.kE(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eN:function(a,b,c){var t,s,r
if(P.jG(a))return b+"..."+c
t=new P.bS(b)
s=$.$get$c4()
C.a.l(s,a)
try{r=t
r.a=P.kE(r.ga2(),a,", ")}finally{H.d(C.a.gay(s)===a)
s.pop()}s=t
s.a=s.ga2()+c
s=t.ga2()
return s.charCodeAt(0)==0?s:s},
jG:function(a){var t,s
for(t=0;s=$.$get$c4(),t<s.length;++t)if(a===s[t])return!0
return!1},
na:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gw(a)
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
ai:function(a,b,c,d){return new P.i8(0,null,null,null,null,null,0,[d])},
ju:function(a,b){var t,s
t=P.ai(null,null,null,b)
for(s=J.aL(a);s.p();)t.l(0,s.gq())
return t},
mE:function(a){var t,s,r
t={}
if(P.jG(a))return"{...}"
s=new P.bS("")
try{C.a.l($.$get$c4(),a)
r=s
r.a=r.ga2()+"{"
t.a=!0
a.ah(0,new P.f1(t,s))
t=s
t.a=t.ga2()+"}"}finally{t=$.$get$c4()
H.d(C.a.gay(t)===a)
t.pop()}t=s.ga2()
return t.charCodeAt(0)==0?t:t},
jv:function(a,b){var t=new P.eY(null,0,0,0,[b])
t.df(a,b)
return t},
dH:function dH(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
i8:function i8(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
i9:function i9(a,b,c){this.a=a
this.b=b
this.c=c},
bZ:function bZ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
i6:function i6(){},
d8:function d8(){},
w:function w(){},
f1:function f1(a,b){this.a=a
this.b=b},
eY:function eY(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ia:function ia(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fN:function fN(){},
fM:function fM(){},
bP:function bP(){},
kE:function(a,b,c){var t=J.aL(b)
if(!t.p())return a
if(c.length===0){do a+=H.f(t.gq())
while(t.p())}else{a+=H.f(t.gq())
for(;t.p();)a=a+c+H.f(t.gq())}return a},
me:function(a,b){return J.lz(a,b)},
mf:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.f(t)
if(t>=10)return s+"00"+H.f(t)
return s+"000"+H.f(t)},
mg:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cf:function(a){if(a>=10)return""+a
return"0"+a},
mi:function(a,b,c,d,e,f){return new P.aB(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
jo:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aA(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ml(a)},
ml:function(a){var t=J.r(a)
if(!!t.$isbc)return t.j(a)
return H.fA(a)},
jl:function(a){return new P.af(!1,null,null,a)},
k3:function(a,b,c){return new P.af(!0,a,b,c)},
m8:function(a){return new P.af(!1,null,a,"Must not be null")},
fB:function(a,b,c){return new P.dp(null,null,!0,a,b,"Value not in range")},
b_:function(a,b,c,d,e){return new P.dp(b,c,!0,a,d,"Invalid value")},
kB:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.b_(a,0,c,"start",f))
if(a>b||b>c)throw H.e(P.b_(b,a,c,"end",f))
return b},
C:function(a,b,c,d,e){var t=e!=null?e:J.cb(b)
return new P.eK(b,t,!0,a,c,"Index out of range")},
cl:function(a){return new P.hR(a)},
ku:function(a,b,c){var t,s
t=H.D([],[c])
for(s=J.aL(a);s.p();)C.a.l(t,s.gq())
if(b)return t
t.fixed$length=Array
return t},
V:function(a){H.bt(H.f(a))},
kC:function(a,b,c){return new H.eR(a,H.ks(a,!1,!0,!1),null,null)},
ay:function ay(){},
H:function H(){},
aP:function aP(a,b){this.a=a
this.b=b},
M:function M(){},
aB:function aB(a){this.a=a},
e9:function e9(){},
ea:function ea(){},
be:function be(){},
cc:function cc(a){this.a=a},
bk:function bk(){},
af:function af(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dp:function dp(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eK:function eK(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
t:function t(a){this.a=a},
bV:function bV(a){this.a=a},
aj:function aj(a){this.a=a},
a3:function a3(a){this.a=a},
dv:function dv(){},
e2:function e2(a){this.a=a},
hR:function hR(a){this.a=a},
bD:function bD(a,b,c){this.a=a
this.b=b
this.c=c},
ec:function ec(a,b,c){this.a=a
this.b=b
this.$ti=c},
m:function m(){},
W:function W(){},
d5:function d5(){},
b:function b(){},
aE:function aE(){},
aX:function aX(){},
U:function U(){},
n:function n(){},
bR:function bR(){},
q:function q(){},
bS:function bS(a){this.a=a},
iL:function(a){var t,s,r,q,p
if(a==null)return
t=P.L()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.F)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
nn:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.lJ(a,new P.iI(t))
return t},
no:function(a){var t,s
t=new P.O(0,$.x,null,[null])
s=new P.dE(t,[null])
a.then(H.b8(new P.iJ(s),1))["catch"](H.b8(new P.iK(s),1))
return t},
kj:function(){var t=$.ki
if(t==null){t=J.jf(window.navigator.userAgent,"Opera",0)
$.ki=t}return t},
mh:function(){var t,s
t=$.kf
if(t!=null)return t
s=$.kg
if(s==null){s=J.jf(window.navigator.userAgent,"Firefox",0)
$.kg=s}if(s)t="-moz-"
else{s=$.kh
if(s==null){s=!P.kj()&&J.jf(window.navigator.userAgent,"Trident/",0)
$.kh=s}if(s)t="-ms-"
else t=P.kj()?"-o-":"-webkit-"}$.kf=t
return t},
hw:function hw(){},
hy:function hy(a,b){this.a=a
this.b=b},
iI:function iI(a){this.a=a},
hx:function hx(a,b,c){this.a=a
this.b=b
this.c=c},
iJ:function iJ(a){this.a=a},
iK:function iK(a){this.a=a},
ig:function ig(){},
J:function J(){},
dR:function dR(){},
aM:function aM(){},
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
eu:function eu(){},
ez:function ez(){},
eC:function eC(){},
ag:function ag(){},
aD:function aD(){},
eJ:function eJ(){},
ar:function ar(){},
eU:function eU(){},
f2:function f2(){},
f3:function f3(){},
as:function as(){},
fk:function fk(){},
fr:function fr(){},
fw:function fw(){},
fx:function fx(){},
fC:function fC(){},
fD:function fD(){},
bQ:function bQ(){},
h1:function h1(){},
G:function G(){},
h2:function h2(){},
h3:function h3(){},
dx:function dx(){},
h7:function h7(){},
bU:function bU(){},
at:function at(){},
hg:function hg(){},
hn:function hn(){},
hp:function hp(){},
hq:function hq(){},
bX:function bX(){},
il:function il(){},
im:function im(){},
io:function io(){},
cu:function cu(){},
cs:function cs(){},
cz:function cz(){},
cD:function cD(){},
cO:function cO(){},
cW:function cW(){},
cS:function cS(){},
cU:function cU(){},
dV:function dV(){},
fH:function fH(){},
fI:function fI(){},
iA:function iA(){},
fS:function fS(){},
ct:function ct(){},
cY:function cY(){}},W={
l8:function(){return document},
mj:function(a,b,c){var t,s
t=document.body
s=(t&&C.p).M(t,a,b,c)
s.toString
t=new H.dC(new W.T(s),new W.iH(),[W.p])
return t.ga0(t)},
mk:function(a){return"wheel"},
bw:function(a){var t,s,r
t="element tag unavailable"
try{s=J.lO(a)
if(typeof s==="string")t=a.tagName}catch(r){H.Q(r)}return t},
n_:function(a,b){return document.createElement(a)},
b7:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kY:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ae:function(a,b,c,d,e){var t=c==null?null:W.l2(new W.hQ(c))
t=new W.hP(0,a,b,t,!1,[e])
t.du(a,b,c,!1,e)
return t},
kW:function(a){var t,s
t=document.createElement("a")
s=new W.ip(t,window.location)
s=new W.bY(s)
s.dv(a)
return s},
n2:function(a,b,c,d){return!0},
n3:function(a,b,c,d){var t,s,r,q,p
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
kZ:function(){var t=P.q
t=new W.ix(P.ju(C.r,t),P.ai(null,null,null,t),P.ai(null,null,null,t),P.ai(null,null,null,t),null)
t.dA(null,new H.bH(C.r,new W.iy(),[H.aJ(C.r,0),null]),["TEMPLATE"],null)
return t},
n8:function(a){var t
if(!!J.r(a).$isaQ)return a
t=new P.hx([],[],!1)
t.c=!0
return t.b4(a)},
l2:function(a){var t=$.x
if(t===C.d)return a
return t.e9(a)},
j:function j(){},
dS:function dS(){},
dT:function dT(){},
a2:function a2(){},
dW:function dW(){},
cd:function cd(){},
aN:function aN(){},
ce:function ce(){},
dY:function dY(){},
aO:function aO(){},
e0:function e0(){},
A:function A(){},
bd:function bd(){},
e1:function e1(){},
e3:function e3(){},
e4:function e4(){},
cg:function cg(){},
aQ:function aQ(){},
ch:function ch(){},
e5:function e5(){},
ci:function ci(){},
e6:function e6(){},
cj:function cj(){},
ck:function ck(){},
e7:function e7(){},
e8:function e8(){},
a4:function a4(){},
iH:function iH(){},
i:function i(){},
h:function h(){},
a5:function a5(){},
ex:function ex(){},
ey:function ey(){},
eD:function eD(){},
a6:function a6(){},
co:function co(){},
eI:function eI(){},
bE:function bE(){},
cp:function cp(){},
cq:function cq(){},
bF:function bF(){},
bg:function bg(){},
aU:function aU(){},
f_:function f_(){},
f5:function f5(){},
f6:function f6(){},
bI:function bI(){},
a7:function a7(){},
f7:function f7(){},
N:function N(){},
fh:function fh(){},
T:function T(a){this.a=a},
p:function p(){},
di:function di(){},
bO:function bO(){},
fq:function fq(){},
ft:function ft(){},
a8:function a8(){},
fv:function fv(){},
fy:function fy(){},
fz:function fz(){},
dn:function dn(){},
fJ:function fJ(){},
dr:function dr(){},
fL:function fL(){},
fO:function fO(){},
a9:function a9(){},
fP:function fP(){},
aa:function aa(){},
fR:function fR(){},
ab:function ab(){},
fW:function fW(){},
fX:function fX(a){this.a=a},
X:function X(){},
ak:function ak(){},
dw:function dw(){},
h4:function h4(){},
h5:function h5(){},
bT:function bT(){},
ac:function ac(){},
Y:function Y(){},
h8:function h8(){},
h9:function h9(){},
ha:function ha(){},
ad:function ad(){},
b0:function b0(){},
he:function he(){},
hf:function hf(){},
bm:function bm(){},
hh:function hh(){},
dA:function dA(){},
aG:function aG(){},
hm:function hm(){},
ho:function ho(){},
hr:function hr(){},
hs:function hs(){},
b2:function b2(){},
bW:function bW(){},
hu:function hu(a){this.a=a},
hv:function hv(){},
b3:function b3(){},
hG:function hG(){},
dF:function dF(){},
hI:function hI(){},
hJ:function hJ(){},
hK:function hK(){},
i4:function i4(){},
i5:function i5(){},
dI:function dI(){},
iq:function iq(){},
it:function it(){},
iu:function iu(){},
iB:function iB(){},
iC:function iC(){},
hE:function hE(){},
hL:function hL(a){this.a=a},
hO:function hO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jC:function jC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hP:function hP(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
hQ:function hQ(a){this.a=a},
bY:function bY(a){this.a=a},
B:function B(){},
dk:function dk(a){this.a=a},
fj:function fj(a){this.a=a},
fi:function fi(a,b,c){this.a=a
this.b=b
this.c=c},
c0:function c0(){},
ir:function ir(){},
is:function is(){},
ix:function ix(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iy:function iy(){},
iv:function iv(){},
cn:function cn(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
dj:function dj(){},
ip:function ip(a,b){this.a=a
this.b=b},
dK:function dK(a){this.a=a},
iz:function iz(a){this.a=a},
bx:function bx(){},
by:function by(){},
bz:function bz(){},
bA:function bA(){},
bB:function bB(){},
bC:function bC(){},
cr:function cr(){},
cL:function cL(){},
cx:function cx(){},
cE:function cE(){},
cF:function cF(){},
cG:function cG(){},
cH:function cH(){},
cI:function cI(){},
cJ:function cJ(){},
cK:function cK(){},
cv:function cv(){},
cw:function cw(){},
cy:function cy(){},
cA:function cA(){},
cB:function cB(){},
cC:function cC(){},
cM:function cM(){},
cN:function cN(){},
cZ:function cZ(){},
cX:function cX(){},
d1:function d1(){},
d2:function d2(){},
d3:function d3(){},
d4:function d4(){},
cP:function cP(){},
cQ:function cQ(){},
cR:function cR(){},
cT:function cT(){},
cV:function cV(){},
d_:function d_(){},
d0:function d0(){}},B={
nK:function(a){var t,s
t=document
s=W.aU
W.ae(t,"keydown",new B.j6(),!1,s)
W.ae(t,"keyup",new B.j7(),!1,s)
if(!$.nL)W.ae(t,"mousemove",new B.j8(),!1,W.N)
s=W.N
W.ae(t,"mousedown",new B.j9(),!1,s)
W.ae(t,"mouseup",new B.ja(),!1,s)},
mF:function(a,b,c,d){var t,s,r,q
t=new Float32Array(H.v(3))
s=$.$get$iM()
r=$.$get$c6()
q=new T.R(new Float32Array(H.v(16)))
q.S()
q=new B.fl(a,b,c,0,new T.u(t),-0.02,s,r,q,new T.u(new Float32Array(H.v(3))),new T.u(new Float32Array(H.v(3))),new T.u(new Float32Array(H.v(3))),new T.u(new Float32Array(H.v(3))),"camera:orbit",!1,!0)
q.dh(a,b,c,d)
return q},
j6:function j6(){},
j7:function j7(){},
j8:function j8(){},
j9:function j9(){},
ja:function ja(){},
fl:function fl(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
fm:function fm(a){this.a=a},
fn:function fn(a){this.a=a},
fo:function fo(){},
fp:function fp(a){this.a=a}},G={
mV:function(a){var t,s,r
t=a.split("\n")
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.f(t[s])}return C.a.al(t,"\n")},
kU:function(a,b,c){var t,s,r,q
t=J.k(a)
s=t.c3(a,b)
t.bc(a,s,c)
t.c0(a,s)
r=t.b8(a,s,35713)
if(r!=null&&!r){q=t.b7(a,s)
P.V("E:Compilation failed:")
P.V("E:"+G.mV(c))
P.V("E:Failure:")
P.V(C.i.a_("E:",q))
throw H.e(q)}return s},
kv:function(a){var t=new G.f4(P.L(),a,!1,!0)
t.dg(a)
return t},
eA:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.jh(a[s])
b[t+1]=J.ji(a[s])
b[t+2]=J.jW(a[s])}return b},
mn:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.jh(a[s])
b[t+1]=J.ji(a[s])}return b},
mo:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.jh(a[s])
b[t+1]=J.ji(a[s])
b[t+2]=J.jW(a[s])
b[t+3]=J.lP(a[s])}return b},
mm:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.ba(a[s],0)
b[t+1]=J.ba(a[s],1)
b[t+2]=J.ba(a[s],2)
b[t+3]=J.ba(a[s],3)}return b},
n1:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
for(t=a.e,s=t.gC(t),s=s.gw(s),r=b.x,q=[[P.b,P.m]],p=[P.M],o=[T.aH],n=[T.u],m=[T.aw];s.p();){l=s.gq()
if(!r.F(0,l)){k="Dropping unnecessary attribute: "+H.f(l)
if($.lb>0)H.bt("I: "+k)
continue}j=t.h(0,l)
switch($.$get$Z().h(0,l).a){case"vec2":b.a9(l,G.mn(H.c9(j,"$isb",m,"$asb"),null),2)
break
case"vec3":b.a9(l,G.eA(H.c9(j,"$isb",n,"$asb"),null),3)
break
case"vec4":b.a9(l,G.mo(H.c9(j,"$isb",o,"$asb"),null),4)
break
case"float":b.a9(l,new Float32Array(H.iE(H.c9(j,"$isb",p,"$asb"))),1)
break
case"uvec4":b.a9(l,G.mm(H.c9(j,"$isb",q,"$asb"),null),4)
break
default:if(H.ax(!1))H.aI("unknown type for "+H.f(l)+" ["+J.lN(j[0]).j(0)+"] ["+new H.aF(H.iR(j),null).j(0)+"] "+H.f(j))}}},
n0:function(a,b,c,d){var t,s,r,q,p,o,n,m,l
t=b.length
H.d(t===c.length)
s=2*t
r=new Float32Array(H.v(s))
for(q=0;q<t;q+=3){p=2*q
r[p]=b[q]
o=q+1
r[p+1]=b[o]
n=q+2
r[p+2]=b[n]
r[p+3]=b[q]+d*c[q]
r[p+4]=b[o]+d*c[o]
r[p+5]=b[n]+d*c[n]}a.bh(r)
m=C.b.E(s,3)
t=new Array(m)
t.fixed$length=Array
l=H.D(t,[P.m])
for(q=0;q<m;++q)l[q]=q
a.y=J.dQ(a.d.a)
a.bj(l)
return a},
mP:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.ai(null,null,null,P.q)
s=c.b
r=d.b
q=c.f
p=J.lA(b.a)
o=G.kU(b.a,35633,s)
J.jS(b.a,p,o)
n=G.kU(b.a,35632,r)
J.jS(b.a,p,n)
if(q.length>0)J.m0(b.a,p,q,35980)
J.lT(b.a,p)
if(!J.lS(b.a,p,35714))H.E(J.lR(b.a,p))
t=new G.fG(b,c,d,p,P.ju(c.c,null),P.L(),P.L(),t,null,a,!1,!0)
t.dj(a,b,c,d)
return t},
f8:function f8(){},
dB:function dB(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dX:function dX(){},
e_:function e_(a,b){this.a=a
this.b=b},
eE:function eE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ev:function ev(a,b,c){this.a=a
this.b=b
this.c=c},
ew:function ew(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eH:function eH(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dz:function dz(a,b,c){this.a=a
this.b=b
this.c=c},
dy:function dy(a,b,c){this.a=a
this.b=b
this.c=c},
f4:function f4(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
db:function db(a,b,c,d,e,f,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
fs:function fs(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
fG:function fG(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
y:function y(a,b,c){this.a=a
this.b=b
this.c=c},
dt:function dt(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fQ:function fQ(){}},R={dq:function dq(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
_.db=a
_.dx=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=a0
_.z=a1
_.Q=a2
_.a=a3
_.b=a4
_.c=a5},fU:function fU(){},fV:function fV(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},A={
l9:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
if(!b.c)return
t=b.dx
t.K(c)
s=b.d
t.cg(0,s)
r=b.cx
J.aA(b)
q=C.a.gay(e)
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
p.eh(new T.aW(o))
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
C.a.l(e,b.ch)
a.da(r,e,d)
e.pop()
for(s=b.cy,r=s.length,l=0;l<s.length;s.length===r||(0,H.F)(s),++l)A.l9(a,s[l],t,d,e)},
dh:function dh(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
ds:function ds(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.a=d
_.b=e
_.c=f},
fF:function fF(){},
dM:function(a){var t,s
t=C.h.ex(a,0,new A.iS())
s=536870911&t+(C.b.cC(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
iS:function iS(){}},D={
mD:function(a){var t,s
t=new P.O(0,$.x,null,[null])
s=new XMLHttpRequest()
C.x.eO(s,"GET",a)
W.ae(s,"loadend",new D.eZ(new P.dE(t,[null]),s),!1,W.nX)
C.x.D(s,"")
return t},
eZ:function eZ(a,b){this.a=a
this.b=b}},T={
kT:function(a,b,c){var t=new Float32Array(3)
t[0]=a
t[1]=b
t[2]=c
return new T.u(t)},
aW:function aW(a){this.a=a},
R:function R(a){this.a=a},
aw:function aw(a){this.a=a},
u:function u(a){this.a=a},
aH:function aH(a){this.a=a}},V={
nE:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t={}
s=document
r=new R.fV(0,0,null,null,null,null)
r.dl(C.k.cG(s,"stats"),"blue","gray")
q=C.k.b_(s,"#webgl-canvas")
p=new G.e_(null,q)
s=(q&&C.K).cF(q,"webgl2",P.aV(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
p.a=s
if(s==null)H.E(P.cl('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
o="ChronosGL Config: "+J.aA(J.lQ(s))
if($.lb>0)P.V("I: "+o)
J.ly(s,0,0,0,1)
J.ca(s,2929)
J.ca(s,2884)
n=B.mF(25,10,0,q)
s=new T.R(new Float32Array(H.v(16)))
s.S()
o=new T.R(new Float32Array(H.v(16)))
o.S()
m=new G.fs(n,50,1,0.1,1000,s,o,new T.R(new Float32Array(H.v(16))),P.L(),"perspective",!1,!0)
m.bo()
o=H.D([],[A.ds])
l=new R.dq(q,m,null,p,o,17664,0,0,0,0,"main",!1,!0)
l.di("main",p,null)
l.cj(null)
W.ae(window,"resize",l.geT(),!1,W.i)
s=G.mP("solid",p,$.$get$lm(),$.$get$ll())
k=new A.ds(s,[m],[],"solid",!1,!0)
H.d(!0)
C.a.l(o,k)
j=G.kv("wire")
j.a1("uColor",$.$get$kc())
i=G.kv("normal")
i.a1("uColor",$.$get$kb())
t.a=null
t.b=null
t.c=0
P.mq([D.mD("../asset/dragon/dragon.obj")],null,!1).b1(new V.j3(t,k,j,i,new V.j2(t,r,n,l)))},
j2:function j2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j3:function j3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e}},Y={
mr:function(a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
t=new G.eH(!1,[],[],[],P.L())
t.bk("aTexUV")
t.bk("aNormal")
s=P.L()
r=a6.split("\n")
q=[]
p=[]
o=[]
n=Date.now()
m=P.kC("\\s+",!0,!1)
l=P.kC("\\s\\s*\\$",!0,!1)
for(k=r.length,j=0;j<r.length;r.length===k||(0,H.F)(r),++j){i=r[j]
i.toString
h=H.nN(i,m," ")
g=H.nP(h,l,"",0)
if(g.length===0||g[0]==="#")continue
f=g.split(" ")
if(J.z(f[0],"g"))s.i(0,f[1],q.length)
else if(J.z(f[0],"v")){h=H.aZ(f[1],null)
e=H.aZ(f[2],null)
d=H.aZ(f[3],null)
c=new Float32Array(3)
c[0]=h
c[1]=e
c[2]=d
C.a.l(q,new T.u(c))}else if(J.z(f[0],"vt")){h=H.aZ(f[1],null)
e=H.aZ(f[2],null)
d=new Float32Array(2)
d[0]=h
d[1]=e
C.a.l(o,new T.aw(d))}else if(J.z(f[0],"vn")){h=H.aZ(f[1],null)
e=H.aZ(f[2],null)
d=H.aZ(f[3],null)
c=new Float32Array(3)
c[0]=h
c[1]=e
c[2]=d
C.a.l(p,new T.u(c))}else if(J.z(f[0],"f")){h=f.length
if(h!==4&&h!==5){H.bt("*** Error: face '"+g+"' not handled")
continue}b=[]
a=[]
a0=[]
for(a1=1;h=f.length,a1<h;++a1){a2=J.lY(f[a1],"/")
H.d(a2.length>0)
for(;a2.length<3;)C.a.l(a2,"")
a3=H.jy(a2[0],null,null)-1
a4=J.z(a2[1],"")?-1:H.jy(a2[1],null,null)-1
a5=J.z(a2[2],"")?-1:H.jy(a2[2],null,null)-1
if(a3<q.length)C.a.l(b,q[a3])
else C.a.l(b,new T.u(new Float32Array(3)))
if(a4!==-1&&a4<o.length)C.a.l(a0,o[a4])
else{H.bt("problem uv "+a1+" "+a4)
C.a.l(a0,new T.aw(new Float32Array(2)))}if(a5!==-1&&a5<p.length)C.a.l(a,p[a5])
else{H.bt("problem normals "+a1+" "+a5)
C.a.l(a,new T.u(new Float32Array(3)))}}if(h===4)t.d4(b)
else t.d5(b)
t.d3("aNormal",a)
t.d2("aTexUV",a0)}}P.V("loaded ("+P.mi(0,0,0,Date.now()-new P.aP(n,!1).a,0,0).j(0)+") "+t.j(0))
return t}}
var v=[C,H,J,P,W,B,G,R,A,D,T,V,Y]
setFunctionNamesIfNecessary(v)
var $={}
H.jr.prototype={}
J.a.prototype={
v:function(a,b){return a===b},
gu:function(a){return H.aY(a)},
j:function(a){return H.fA(a)},
gA:function(a){return new H.aF(H.iR(a),null)}}
J.eP.prototype={
j:function(a){return String(a)},
gu:function(a){return a?519018:218159},
gA:function(a){return C.aq},
$isay:1}
J.eQ.prototype={
v:function(a,b){return null==b},
j:function(a){return"null"},
gu:function(a){return 0},
gA:function(a){return C.ak}}
J.bG.prototype={
gu:function(a){return 0},
gA:function(a){return C.aj},
j:function(a){return String(a)},
$iskq:1}
J.fu.prototype={}
J.b1.prototype={}
J.aT.prototype={
j:function(a){var t=a[$.$get$ke()]
return t==null?this.cZ(a):J.aA(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isjp:1}
J.aR.prototype={
aT:function(a,b){if(!!a.immutable$list)throw H.e(new P.t(b))},
aS:function(a,b){if(!!a.fixed$length)throw H.e(new P.t(b))},
l:function(a,b){this.aS(a,"add")
a.push(b)},
L:function(a,b){var t,s,r,q
t=a.length
this.aS(a,"addAll")
for(s=0;s<1;++s,t=q){r=b[s]
q=t+1
H.d(t===a.length||H.E(new P.a3(a)))
a.push(r)}},
cf:function(a,b){return new H.bH(a,b,[H.aJ(a,0),null])},
al:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.f(a[s])
return t.join(b)},
t:function(a,b){return this.h(a,b)},
gew:function(a){if(a.length>0)return a[0]
throw H.e(H.eO())},
gay:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.e(H.eO())},
bb:function(a,b,c,d,e){var t,s
this.aT(a,"setRange")
P.kB(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.E(P.b_(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.e(H.mz())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=d[e+s]
else for(s=0;s<t;++s)a[b+s]=d[e+s]},
bQ:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.e(new P.a3(a))}return!1},
cT:function(a,b){this.aT(a,"sort")
H.du(a,0,a.length-1,P.np())},
bd:function(a){return this.cT(a,null)},
B:function(a,b){var t
for(t=0;t<a.length;++t)if(J.z(a[t],b))return!0
return!1},
j:function(a){return P.eN(a,"[","]")},
gw:function(a){return new J.dU(a,a.length,0,null,[H.aJ(a,0)])},
gu:function(a){return H.aY(a)},
gk:function(a){return a.length},
sk:function(a,b){this.aS(a,"set length")
if(b<0)throw H.e(P.b_(b,0,null,"newLength",null))
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
J.jq.prototype={}
J.dU.prototype={
gq:function(){return this.d},
p:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.e(H.F(t))
r=this.c
if(r>=s){this.sbp(null)
return!1}this.sbp(t[r]);++this.c
return!0},
sbp:function(a){this.d=a}}
J.bh.prototype={
P:function(a,b){var t
if(typeof b!=="number")throw H.e(H.P(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaw(b)
if(this.gaw(a)===t)return 0
if(this.gaw(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaw:function(a){return a===0?1/a<0:a<0},
eb:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.e(new P.t(""+a+".ceil()"))},
a4:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(new P.t(""+a+".round()"))},
ec:function(a,b,c){if(this.P(b,c)>0)throw H.e(H.P(b))
if(this.P(a,b)<0)return b
if(this.P(a,c)>0)return c
return a},
f0:function(a,b){var t
if(b>20)throw H.e(P.b_(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gaw(a))return"-"+t
return t},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu:function(a){return a&0x1FFFFFFF},
a_:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a+b},
a8:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a-b},
cD:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a/b},
G:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a*b},
aE:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bM(a,b)},
E:function(a,b){return(a|0)===a?a/b|0:this.bM(a,b)},
bM:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.e(new P.t("Result of truncating division is "+H.f(t)+": "+H.f(a)+" ~/ "+b))},
aO:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
cC:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return(a&b)>>>0},
d0:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return(a^b)>>>0},
aq:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a<b},
ap:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a>b},
cE:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a>=b},
gA:function(a){return C.at},
$isU:1}
J.d7.prototype={
gA:function(a){return C.as},
$isM:1,
$ism:1,
$isU:1}
J.d6.prototype={
gA:function(a){return C.ar},
$isM:1,
$isU:1}
J.aS.prototype={
c_:function(a,b){if(b<0)throw H.e(H.I(a,b))
if(b>=a.length)H.E(H.I(a,b))
return a.charCodeAt(b)},
aa:function(a,b){if(b>=a.length)throw H.e(H.I(a,b))
return a.charCodeAt(b)},
a_:function(a,b){if(typeof b!=="string")throw H.e(P.k3(b,null,null))
return a+b},
cU:function(a,b){var t=a.split(b)
return t},
cV:function(a,b,c){var t
if(c>a.length)throw H.e(P.b_(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
be:function(a,b){return this.cV(a,b,0)},
aC:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.fB(b,null,null))
if(b>c)throw H.e(P.fB(b,null,null))
if(c>a.length)throw H.e(P.fB(c,null,null))
return a.substring(b,c)},
cW:function(a,b){return this.aC(a,b,null)},
f_:function(a){return a.toLowerCase()},
f2:function(a){var t,s,r,q,p
t=a.trim()
s=t.length
if(s===0)return t
if(this.aa(t,0)===133){r=J.mB(t,1)
if(r===s)return""}else r=0
q=s-1
p=this.c_(t,q)===133?J.mC(t,q):s
if(r===0&&p===s)return t
return t.substring(r,p)},
ef:function(a,b,c){if(c>a.length)throw H.e(P.b_(c,0,a.length,null,null))
return H.nM(a,b,c)},
P:function(a,b){var t
if(typeof b!=="string")throw H.e(H.P(b))
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
gA:function(a){return C.al},
gk:function(a){return a.length},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.I(a,b))
if(b>=a.length||!1)throw H.e(H.I(a,b))
return a[b]},
$isl:1,
$asl:function(){},
$isq:1}
H.c.prototype={$asc:null}
H.bi.prototype={
gw:function(a){return new H.d9(this,this.gk(this),0,null,[H.am(this,"bi",0)])},
aA:function(a,b){return this.cY(0,b)},
eZ:function(a,b){var t,s
t=H.D([],[H.am(this,"bi",0)])
C.a.sk(t,this.gk(this))
for(s=0;s<this.gk(this);++s)t[s]=this.t(0,s)
return t},
eY:function(a){return this.eZ(a,!0)}}
H.d9.prototype={
gq:function(){return this.d},
p:function(){var t,s,r,q
t=this.a
s=J.a0(t)
r=s.gk(t)
if(this.b!==r)throw H.e(new P.a3(t))
q=this.c
if(q>=r){this.sac(null)
return!1}this.sac(s.t(t,q));++this.c
return!0},
sac:function(a){this.d=a}}
H.da.prototype={
gw:function(a){return new H.f0(null,J.aL(this.a),this.b,this.$ti)},
gk:function(a){return J.cb(this.a)},
$asW:function(a,b){return[b]}}
H.eb.prototype={$isc:1,
$asc:function(a,b){return[b]}}
H.f0.prototype={
p:function(){var t=this.b
if(t.p()){this.sac(this.c.$1(t.gq()))
return!0}this.sac(null)
return!1},
gq:function(){return this.a},
sac:function(a){this.a=a},
$asd5:function(a,b){return[b]}}
H.bH.prototype={
gk:function(a){return J.cb(this.a)},
t:function(a,b){return this.b.$1(J.lG(this.a,b))},
$asc:function(a,b){return[b]},
$asbi:function(a,b){return[b]},
$asW:function(a,b){return[b]}}
H.dC.prototype={
gw:function(a){return new H.ht(J.aL(this.a),this.b,this.$ti)}}
H.ht.prototype={
p:function(){var t,s
for(t=this.a,s=this.b;t.p();)if(s.$1(t.gq()))return!0
return!1},
gq:function(){return this.a.gq()}}
H.cm.prototype={}
H.jb.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.jc.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.ic.prototype={
seH:function(a){this.z=a},
seL:function(a){this.ch=a}}
H.b5.prototype={
bP:function(a,b){if(!this.f.v(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.aQ()},
eS:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.am(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.bF();++r.d}this.y=!1}this.aQ()},
e2:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.r(a),s=0;r=this.ch,s<r.length;s+=2)if(t.v(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
eR:function(a){var t,s,r
if(this.ch==null)return
for(t=J.r(a),s=0;r=this.ch,s<r.length;s+=2)if(t.v(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.E(new P.t("removeRange"))
P.kB(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
cQ:function(a,b){if(!this.r.v(0,a))return
this.db=b},
eB:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.D(0,c)
return}H.d(b===1)
t=this.cx
if(t==null){t=P.jv(null,null)
this.cx=t}t.T(0,new H.i7(a,c))},
eA:function(a,b){var t
if(!this.r.v(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.ax()
return}H.d(b===1)
t=this.cx
if(t==null){t=P.jv(null,null)
this.cx=t}t.T(0,this.geI())},
eC:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.V(a)
if(b!=null)P.V(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.aA(a)
s[1]=b==null?null:b.j(0)
for(r=new P.bZ(t,t.r,null,null,[null]),r.c=t.e;r.p();)r.d.D(0,s)},
ag:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.Q(o)
p=H.az(o)
this.eC(q,p)
if(this.db){this.ax()
if(this===u.globalState.e)throw o}}finally{this.cy=H.nk(r)
u.globalState.d=H.jK(t,"$isb5")
if(t!=null)$=t.geG()
if(this.cx!=null)for(;n=this.cx,!n.gak(n);)this.cx.ci().$0()}return s},
ce:function(a){return this.b.h(0,a)},
bt:function(a,b){var t=this.b
if(t.F(0,a))throw H.e(P.cl("Registry: ports must be registered only once."))
t.i(0,a,b)},
aQ:function(){var t=this.b
if(t.gk(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.ax()},
ax:function(){var t,s,r
t=this.cx
if(t!=null)t.V(0)
for(t=this.b,s=t.gcz(t),s=s.gw(s);s.p();)s.gq().dE()
t.V(0)
this.c.V(0)
u.globalState.z.am(0,this.a)
this.dx.V(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].D(0,t[r+1])
this.ch=null}},
geG:function(){return this.d},
geg:function(){return this.e}}
H.i7.prototype={
$0:function(){this.a.D(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.hM.prototype={
en:function(){var t=this.a
if(t.b===t.c)return
return t.ci()},
cl:function(){var t,s,r
t=this.en()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.F(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gak(s)}else s=!1
else s=!1
else s=!1
if(s)H.E(P.cl("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gak(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aV(["command","close"])
r=new H.al(!0,new P.dH(0,null,null,null,null,null,0,[null,P.m])).I(r)
s.toString
self.postMessage(r)}return!1}t.eP()
return!0},
bK:function(){if(self.window!=null)new H.hN(this).$0()
else for(;this.cl(););},
an:function(){var t,s,r,q,p
if(!u.globalState.x)this.bK()
else try{this.bK()}catch(r){t=H.Q(r)
s=H.az(r)
q=u.globalState.Q
p=P.aV(["command","error","msg",H.f(t)+"\n"+H.f(s)])
p=new H.al(!0,P.c_(null,P.m)).I(p)
q.toString
self.postMessage(p)}}}
H.hN.prototype={
$0:function(){if(!this.a.cl())return
P.mU(C.w,this)},
$S:function(){return{func:1,v:true}}}
H.b6.prototype={
eP:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.ag(this.b)}}
H.ib.prototype={}
H.eL.prototype={
$0:function(){H.mv(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.eM.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(!this.d)this.a.$1(this.c)
else{s=this.a
if(H.bs(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.bs(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.aQ()},
$S:function(){return{func:1,v:true}}}
H.hF.prototype={}
H.bo.prototype={
D:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.n7(b)
if(t.geg()===s){s=J.a0(r)
switch(s.h(r,0)){case"pause":t.bP(s.h(r,1),s.h(r,2))
break
case"resume":t.eS(s.h(r,1))
break
case"add-ondone":t.e2(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.eR(s.h(r,1))
break
case"set-errors-fatal":t.cQ(s.h(r,1),s.h(r,2))
break
case"ping":t.eB(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.eA(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.am(0,s)
break}return}u.globalState.f.a.T(0,new H.b6(t,new H.ie(this,r),"receive"))},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bo){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gu:function(a){return this.b.a}}
H.ie.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dB(0,this.b)},
$S:function(){return{func:1}}}
H.c1.prototype={
D:function(a,b){var t,s,r
t=P.aV(["command","message","port",this,"msg",b])
s=new H.al(!0,P.c_(null,P.m)).I(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.c1){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gu:function(a){return C.b.d0((this.b<<16^this.a<<8)>>>0,this.c)}}
H.bl.prototype={
dE:function(){this.c=!0
this.b=null},
dB:function(a,b){if(this.c)return
this.b.$1(b)},
$ismN:1}
H.hb.prototype={
dm:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.T(0,new H.b6(s,new H.hc(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.b8(new H.hd(this,b),0),a)}else{H.d(a>0)
throw H.e(new P.t("Timer greater than 0."))}}}
H.hc.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.hd.prototype={
$0:function(){this.a.c=null
H.j1()
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.aq.prototype={
gu:function(a){var t=this.a
t=C.b.aO(t,0)^C.b.E(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
v:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.aq){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.al.prototype={
I:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gk(t))
t=J.r(a)
if(!!t.$isbJ)return["buffer",a]
if(!!t.$isbj)return["typed",a]
if(!!t.$isl)return this.cL(a)
if(!!t.$isms){r=this.gcI()
q=t.gC(a)
q=H.jw(q,r,H.am(q,"W",0),null)
q=P.ku(q,!0,H.am(q,"W",0))
t=t.gcz(a)
t=H.jw(t,r,H.am(t,"W",0),null)
return["map",q,P.ku(t,!0,H.am(t,"W",0))]}if(!!t.$iskq)return this.cM(a)
if(!!t.$isa)this.cv(a)
if(!!t.$ismN)this.ao(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isbo)return this.cN(a)
if(!!t.$isc1)return this.cO(a)
if(!!t.$isbc){p=a.$static_name
if(p==null)this.ao(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isaq)return["capability",a.a]
if(!(a instanceof P.n))this.cv(a)
return["dart",u.classIdExtractor(a),this.cK(u.classFieldsExtractor(a))]},
ao:function(a,b){throw H.e(new P.t((b==null?"Can't transmit:":b)+" "+H.f(a)))},
cv:function(a){return this.ao(a,null)},
cL:function(a){var t
H.d(typeof a!=="string")
t=this.cJ(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.ao(a,"Can't serialize indexable: ")},
cJ:function(a){var t,s
t=[]
C.a.sk(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.I(a[s])
return t},
cK:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.I(a[t]))
return a},
cM:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.ao(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sk(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.I(a[t[r]])
return["js-object",t,s]},
cO:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cN:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.b4.prototype={
W:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.e(P.jl("Bad serialized message: "+H.f(a)))
switch(C.a.gew(a)){case"ref":H.d(J.z(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.d(J.z(a[0],"buffer"))
t=a[1]
C.a.l(this.b,t)
return t
case"typed":H.d(J.z(a[0],"typed"))
t=a[1]
C.a.l(this.b,t)
return t
case"fixed":H.d(J.z(a[0],"fixed"))
t=a[1]
C.a.l(this.b,t)
s=H.D(this.af(t),[null])
s.fixed$length=Array
return s
case"extendable":H.d(J.z(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.D(this.af(t),[null])
case"mutable":H.d(J.z(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.af(t)
case"const":H.d(J.z(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
s=H.D(this.af(t),[null])
s.fixed$length=Array
return s
case"map":return this.eq(a)
case"sendport":return this.er(a)
case"raw sendport":H.d(J.z(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.ep(a)
case"function":H.d(J.z(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.d(J.z(a[0],"capability"))
return new H.aq(a[1])
case"dart":H.d(J.z(a[0],"dart"))
r=a[1]
q=a[2]
p=u.instanceFromClassId(r)
C.a.l(this.b,p)
this.af(q)
return u.initializeEmptyInstance(r,p,q)
default:throw H.e("couldn't deserialize: "+H.f(a))}},
af:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.W(a[t]))
return a},
eq:function(a){var t,s,r,q,p
H.d(J.z(a[0],"map"))
t=a[1]
s=a[2]
r=P.L()
C.a.l(this.b,r)
t=J.lU(t,this.geo()).eY(0)
for(q=J.a0(s),p=0;p<t.length;++p)r.i(0,t[p],this.W(q.h(s,p)))
return r},
er:function(a){var t,s,r,q,p,o,n
H.d(J.z(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.ce(r)
if(o==null)return
n=new H.bo(o,s)}else n=new H.c1(t,r,s)
C.a.l(this.b,n)
return n},
ep:function(a){var t,s,r,q,p,o
H.d(J.z(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.a0(t),p=J.a0(s),o=0;o<q.gk(t);++o)r[q.h(t,o)]=this.W(p.h(s,o))
return r}}
H.fE.prototype={}
H.hi.prototype={
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
H.dl.prototype={
j:function(a){var t=this.b
if(t==null)return"NullError: "+H.f(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.eT.prototype={
j:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.f(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.f(this.a)+")"}}
H.hl.prototype={
j:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.jd.prototype={
$1:function(a){if(!!J.r(a).$isbe)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.dJ.prototype={
j:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.iX.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.iY.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.iZ.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.j_.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.j0.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.bc.prototype={
j:function(a){return"Closure '"+H.dm(this).trim()+"'"},
$isjp:1,
gf4:function(){return this},
$D:null}
H.h6.prototype={}
H.fT.prototype={
j:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bv.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bv))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gu:function(a){var t,s
t=this.c
if(t==null)s=H.aY(this.a)
else s=typeof t!=="object"?J.ap(t):H.aY(t)
return(s^H.aY(this.b))>>>0},
j:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.f(this.d)+"' of "+H.fA(t)}}
H.hk.prototype={
j:function(a){return this.a}}
H.dZ.prototype={
j:function(a){return this.a}}
H.fK.prototype={
j:function(a){return"RuntimeError: "+H.f(this.a)}}
H.hz.prototype={
j:function(a){return C.i.a_("Assertion failed: ",P.jo(this.a))}}
H.aF.prototype={
j:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gu:function(a){return J.ap(this.a)},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.aF){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.ah.prototype={
gk:function(a){return this.a},
gak:function(a){return this.a===0},
gC:function(a){return new H.eW(this,[H.aJ(this,0)])},
gcz:function(a){return H.jw(this.gC(this),new H.eS(this),H.aJ(this,0),H.aJ(this,1))},
F:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bC(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bC(s,b)}else return this.eD(b)},
eD:function(a){var t=this.d
if(t==null)return!1
return this.aj(this.at(t,this.ai(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.ad(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.ad(r,b)
return s==null?null:s.b}else return this.eE(b)},
eE:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.at(t,this.ai(a))
r=this.aj(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aK()
this.b=t}this.br(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aK()
this.c=s}this.br(s,b,c)}else{r=this.d
if(r==null){r=this.aK()
this.d=r}q=this.ai(b)
p=this.at(r,q)
if(p==null)this.aN(r,q,[this.aL(b,c)])
else{o=this.aj(p,b)
if(o>=0)p[o].b=c
else p.push(this.aL(b,c))}}},
am:function(a,b){if(typeof b==="string")return this.bJ(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bJ(this.c,b)
else return this.eF(b)},
eF:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.at(t,this.ai(a))
r=this.aj(s,a)
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
ah:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.e(new P.a3(this))
t=t.c}},
br:function(a,b,c){var t=this.ad(a,b)
if(t==null)this.aN(a,b,this.aL(b,c))
else t.b=c},
bJ:function(a,b){var t
if(a==null)return
t=this.ad(a,b)
if(t==null)return
this.bN(t)
this.bD(a,b)
return t.b},
aL:function(a,b){var t,s
t=new H.eV(a,b,null,null,[null,null])
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
ai:function(a){return J.ap(a)&0x3ffffff},
aj:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.z(a[s].a,b))return s
return-1},
j:function(a){return P.mE(this)},
ad:function(a,b){return a[b]},
at:function(a,b){return a[b]},
aN:function(a,b,c){H.d(c!=null)
a[b]=c},
bD:function(a,b){delete a[b]},
bC:function(a,b){return this.ad(a,b)!=null},
aK:function(){var t=Object.create(null)
this.aN(t,"<non-identifier-key>",t)
this.bD(t,"<non-identifier-key>")
return t},
$isms:1}
H.eS.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.eV.prototype={}
H.eW.prototype={
gk:function(a){return this.a.a},
gw:function(a){var t,s
t=this.a
s=new H.eX(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.eX.prototype={
gq:function(){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a3(t))
else{t=this.c
if(t==null){this.sbq(null)
return!1}else{this.sbq(t.a)
this.c=this.c.c
return!0}}},
sbq:function(a){this.d=a}}
H.iT.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.iU.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.q]}}}
H.iV.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.q]}}}
H.eR.prototype={
j:function(a){return"RegExp/"+this.a+"/"},
gbH:function(){var t=this.c
if(t!=null)return t
t=this.b
t=H.ks(this.a,t.multiline,!t.ignoreCase,!0)
this.c=t
return t},
dL:function(a,b){var t,s
t=this.gbH()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
return H.n6(this,s)}}
H.id.prototype={
h:function(a,b){var t=this.b
return(t&&C.a).h(t,b)},
dz:function(a,b){var t,s
t=this.b
s=t.input
H.d(typeof s==="string")
t=t.index
H.d(typeof t==="number"&&Math.floor(t)===t)}}
H.bJ.prototype={
gA:function(a){return C.ac},
$isbJ:1}
H.bj.prototype={$isbj:1}
H.f9.prototype={
gA:function(a){return C.ad}}
H.dd.prototype={
gk:function(a){return a.length},
$isl:1,
$asl:function(){},
$iso:1,
$aso:function(){}}
H.de.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.I(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.E(H.I(a,b))
a[b]=c}}
H.df.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.E(H.I(a,b))
a[b]=c},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]}}
H.dc.prototype={
gA:function(a){return C.ae},
$isc:1,
$asc:function(){return[P.M]},
$isb:1,
$asb:function(){return[P.M]},
$iseB:1}
H.fa.prototype={
gA:function(a){return C.af},
$isc:1,
$asc:function(){return[P.M]},
$isb:1,
$asb:function(){return[P.M]}}
H.fb.prototype={
gA:function(a){return C.ag},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.I(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]}}
H.fc.prototype={
gA:function(a){return C.ah},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.I(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]},
$iskn:1}
H.fd.prototype={
gA:function(a){return C.ai},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.I(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]}}
H.fe.prototype={
gA:function(a){return C.am},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.I(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]},
$iskQ:1}
H.ff.prototype={
gA:function(a){return C.an},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.I(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]},
$iskR:1}
H.dg.prototype={
gA:function(a){return C.ao},
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.I(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]}}
H.fg.prototype={
gA:function(a){return C.ap},
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.I(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]},
$iskS:1}
H.bK.prototype={
$asl:function(){},
$isc:1,
$asc:function(){return[P.m]},
$aso:function(){},
$isb:1,
$asb:function(){return[P.m]}}
H.bL.prototype={
$asl:function(){},
$isc:1,
$asc:function(){return[P.M]},
$aso:function(){},
$isb:1,
$asb:function(){return[P.M]}}
H.bM.prototype={
$asl:function(){},
$asc:function(){return[P.M]},
$aso:function(){},
$asb:function(){return[P.M]}}
H.bN.prototype={
$asl:function(){},
$asc:function(){return[P.m]},
$aso:function(){},
$asb:function(){return[P.m]}}
P.hB.prototype={
$1:function(a){var t,s
H.j1()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.hA.prototype={
$1:function(a){var t,s
t=this.a
H.d(t.a==null);++u.globalState.f.b
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.hC.prototype={
$0:function(){H.j1()
this.a.$0()},
$S:function(){return{func:1}}}
P.hD.prototype={
$0:function(){H.j1()
this.a.$0()},
$S:function(){return{func:1}}}
P.eG.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.b)this.d.H(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.b)this.d.H(t.c,t.d)},
$S:function(){return{func:1,args:[,,]}}}
P.eF.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){r[this.e]=a
if(s===0)this.d.bB(r)}else if(t.b===0&&!this.b)this.d.H(t.c,t.d)},
$S:function(){return{func:1,args:[,]}}}
P.hH.prototype={
ee:function(a,b){if(a==null)a=new P.bk()
if(this.a.a!==0)throw H.e(new P.aj("Future already completed"))
$.x.toString
this.H(a,b)},
ed:function(a){return this.ee(a,null)}}
P.dE.prototype={
av:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.aj("Future already completed"))
t.bu(b)},
H:function(a,b){this.a.bv(a,b)}}
P.iw.prototype={
av:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.aj("Future already completed"))
t.aG(b)},
H:function(a,b){this.a.H(a,b)}}
P.dG.prototype={
eM:function(a){if(this.c!==6)return!0
H.d(!0)
return this.b.b.b0(this.d,a.a)},
ez:function(a){var t,s
t=(this.c&2)!==0
if(t){H.d(t)
t=this.e!=null}else t=!1
H.d(t)
s=this.e
t=this.b.b
if(H.bs(s,{func:1,args:[P.n,P.bR]}))return t.eU(s,a.a,a.b)
else return t.b0(s,a.a)}}
P.O.prototype={
b2:function(a,b){var t,s,r
t=$.x
if(t!==C.d){t.toString
if(b!=null)b=P.nc(b,t)}s=new P.O(0,t,null,[null])
r=b==null?1:3
this.bs(new P.dG(null,s,r,a,b,[H.aJ(this,0),null]))
return s},
b1:function(a){return this.b2(a,null)},
bx:function(a){H.d(this.a<4)
H.d(a.a>=4)
this.a=a.a
this.c=a.c},
bs:function(a){var t
H.d(a.a==null)
t=this.a
if(t<=1){a.a=H.jK(this.c,"$isdG")
this.c=a}else{if(t===2){H.d(!0)
t=this.c
if(t.a<4){t.bs(a)
return}this.bx(t)}H.d(this.a>=4)
t=this.b
t.toString
P.bq(null,null,t,new P.hS(this,a))}},
bI:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.d(!0)
s=this.c
if(s.a<4){s.bI(a)
return}this.bx(s)}H.d(this.a>=4)
t.a=this.ae(a)
s=this.b
s.toString
P.bq(null,null,s,new P.i_(t,this))}},
aM:function(){H.d(this.a<4)
var t=this.c
this.c=null
return this.ae(t)},
ae:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aG:function(a){var t,s
H.d(this.a<4)
t=this.$ti
if(H.c5(a,"$isbf",t,"$asbf"))if(H.c5(a,"$isO",t,null))P.hV(a,this)
else P.kV(a,this)
else{s=this.aM()
H.d(this.a<4)
this.a=4
this.c=a
P.bn(this,s)}},
bB:function(a){var t
H.d(this.a<4)
H.d(!J.r(a).$isbf)
t=this.aM()
H.d(this.a<4)
this.a=4
this.c=a
P.bn(this,t)},
H:function(a,b){var t
H.d(this.a<4)
t=this.aM()
H.d(this.a<4)
this.a=8
this.c=new P.bb(a,b)
P.bn(this,t)},
dG:function(a){return this.H(a,null)},
bu:function(a){var t
H.d(this.a<4)
if(H.c5(a,"$isbf",this.$ti,"$asbf")){this.dD(a)
return}H.d(this.a===0)
this.a=1
t=this.b
t.toString
P.bq(null,null,t,new P.hU(this,a))},
dD:function(a){var t
if(H.c5(a,"$isO",this.$ti,null)){if(a.a===8){H.d(this.a===0)
this.a=1
t=this.b
t.toString
P.bq(null,null,t,new P.hZ(this,a))}else P.hV(a,this)
return}P.kV(a,this)},
bv:function(a,b){var t
H.d(this.a<4)
H.d(this.a===0)
this.a=1
t=this.b
t.toString
P.bq(null,null,t,new P.hT(this,a,b))},
$isbf:1,
gaP:function(){return this.a},
gdW:function(){return this.c}}
P.hS.prototype={
$0:function(){P.bn(this.a,this.b)},
$S:function(){return{func:1}}}
P.i_.prototype={
$0:function(){P.bn(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.hW.prototype={
$1:function(a){var t=this.a
H.d(t.a===1)
H.d(t.a===1)
t.a=0
t.aG(a)},
$S:function(){return{func:1,args:[,]}}}
P.hX.prototype={
$2:function(a,b){var t=this.a
H.d(t.a===1)
t.H(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.hY.prototype={
$0:function(){this.a.H(this.b,this.c)},
$S:function(){return{func:1}}}
P.hU.prototype={
$0:function(){this.a.bB(this.b)},
$S:function(){return{func:1}}}
P.hZ.prototype={
$0:function(){P.hV(this.b,this.a)},
$S:function(){return{func:1}}}
P.hT.prototype={
$0:function(){this.a.H(this.b,this.c)},
$S:function(){return{func:1}}}
P.i2.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.d
p=q.c
H.d((p&1)===0)
o=(p&2)===0
H.d(o)
t=null
try{H.d(o)
H.d(p===8)
t=q.b.b.ck(q.d)}catch(n){s=H.Q(n)
r=H.az(n)
if(this.c){q=this.a.a
H.d(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.d(q.a===8)
p.b=q.c}else p.b=new P.bb(s,r)
p.a=!0
return}if(!!J.r(t).$isbf){if(t instanceof P.O&&t.gaP()>=4){if(t.gaP()===8){q=t
H.d(q.gaP()===8)
p=this.b
p.b=q.gdW()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.b1(new P.i3(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.i3.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.i1.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.d((r.c&1)!==0)
this.a.b=r.b.b.b0(r.d,this.c)}catch(q){t=H.Q(q)
s=H.az(q)
r=this.a
r.b=new P.bb(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.i0.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.d(q.a===8)
t=q.c
q=this.c
if(q.eM(t)){H.d((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.ez(t)
p.a=!1}}catch(o){s=H.Q(o)
r=H.az(o)
q=this.a
p=q.a
H.d(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.d(q.a===8)
m.b=q.c}else m.b=new P.bb(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.dD.prototype={}
P.fY.prototype={
gk:function(a){var t,s
t={}
s=new P.O(0,$.x,null,[P.m])
t.a=0
this.eJ(new P.h_(t),!0,new P.h0(t,s),s.gdF())
return s}}
P.h_.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.h0.prototype={
$0:function(){this.b.aG(this.a.a)},
$S:function(){return{func:1}}}
P.fZ.prototype={}
P.bb.prototype={
j:function(a){return H.f(this.a)},
$isbe:1}
P.iD.prototype={}
P.iG.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.bk()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.e(t)
r=H.e(t)
r.stack=s.j(0)
throw r},
$S:function(){return{func:1}}}
P.ih.prototype={
eV:function(a){var t,s,r
try{if(C.d===$.x){a.$0()
return}P.l_(null,null,this,a)}catch(r){t=H.Q(r)
s=H.az(r)
P.iF(null,null,this,t,s)}},
eW:function(a,b){var t,s,r
try{if(C.d===$.x){a.$1(b)
return}P.l0(null,null,this,a,b)}catch(r){t=H.Q(r)
s=H.az(r)
P.iF(null,null,this,t,s)}},
e8:function(a){return new P.ij(this,a)},
aR:function(a){return new P.ii(this,a)},
e9:function(a){return new P.ik(this,a)},
h:function(a,b){return},
ck:function(a){if($.x===C.d)return a.$0()
return P.l_(null,null,this,a)},
b0:function(a,b){if($.x===C.d)return a.$1(b)
return P.l0(null,null,this,a,b)},
eU:function(a,b,c){if($.x===C.d)return a.$2(b,c)
return P.nd(null,null,this,a,b,c)}}
P.ij.prototype={
$0:function(){return this.a.ck(this.b)},
$S:function(){return{func:1}}}
P.ii.prototype={
$0:function(){return this.a.eV(this.b)},
$S:function(){return{func:1}}}
P.ik.prototype={
$1:function(a){return this.a.eW(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.dH.prototype={
ai:function(a){return H.nG(a)&0x3ffffff},
aj:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.i8.prototype={
gw:function(a){var t=new P.bZ(this,this.r,null,null,[null])
t.c=this.e
return t},
gk:function(a){return this.a},
B:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dH(b)},
dH:function(a){var t=this.d
if(t==null)return!1
return this.as(t[this.ar(a)],a)>=0},
ce:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.B(0,a)?a:null
else return this.dQ(a)},
dQ:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.ar(a)]
r=this.as(s,a)
if(r<0)return
return J.ba(s,r).gdJ()},
l:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.by(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.by(r,b)}else return this.T(0,b)},
T:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.n4()
this.d=t}s=this.ar(b)
r=t[s]
if(r==null){q=[this.aF(b)]
H.d(q!=null)
t[s]=q}else{if(this.as(r,b)>=0)return!1
r.push(this.aF(b))}return!0},
am:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bz(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bz(this.c,b)
else return this.dR(0,b)},
dR:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.ar(b)]
r=this.as(s,b)
if(r<0)return!1
this.bA(s.splice(r,1)[0])
return!0},
V:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
by:function(a,b){var t
if(a[b]!=null)return!1
t=this.aF(b)
H.d(!0)
a[b]=t
return!0},
bz:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bA(t)
delete a[b]
return!0},
aF:function(a){var t,s
t=new P.i9(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bA:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.r=this.r+1&67108863},
ar:function(a){return J.ap(a)&0x3ffffff},
as:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.z(a[s].a,b))return s
return-1},
$isc:1,
$asc:null}
P.i9.prototype={
gdJ:function(){return this.a}}
P.bZ.prototype={
gq:function(){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a3(t))
else{t=this.c
if(t==null){this.sab(null)
return!1}else{this.sab(t.a)
this.c=this.c.b
return!0}}},
sab:function(a){this.d=a}}
P.i6.prototype={}
P.d8.prototype={}
P.w.prototype={
gw:function(a){return new H.d9(a,this.gk(a),0,null,[H.am(a,"w",0)])},
t:function(a,b){return this.h(a,b)},
cf:function(a,b){return new H.bH(a,b,[H.am(a,"w",0),null])},
ex:function(a,b,c){var t,s,r
t=this.gk(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gk(a))throw H.e(new P.a3(a))}return s},
j:function(a){return P.eN(a,"[","]")},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
P.f1.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.f(a)
t.a=s+": "
t.a+=H.f(b)},
$S:function(){return{func:1,args:[,,]}}}
P.eY.prototype={
gw:function(a){return new P.ia(this,this.c,this.d,this.b,null,this.$ti)},
gak:function(a){return this.b===this.c},
gk:function(a){return(this.c-this.b&this.a.length-1)>>>0},
t:function(a,b){var t=(this.c-this.b&this.a.length-1)>>>0
if(C.b.ap(0,b)||b>=t)H.E(P.C(b,this,"index",null,t))
return this.a[(C.b.a_(this.b,b)&this.a.length-1)>>>0]},
V:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
j:function(a){return P.eN(this,"{","}")},
ci:function(){var t,s,r
t=this.b
if(t===this.c)throw H.e(H.eO());++this.d
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
C.a.bb(s,0,q,t,r)
C.a.bb(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbL(s)},
df:function(a,b){var t
H.d(!0)
t=new Array(8)
t.fixed$length=Array
this.sbL(H.D(t,[b]))},
sbL:function(a){this.a=a},
$asc:null}
P.ia.prototype={
gq:function(){return this.e},
p:function(){var t,s
t=this.a
if(this.c!==t.d)H.E(new P.a3(t))
s=this.d
if(s===this.b){this.sab(null)
return!1}this.sab(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sab:function(a){this.e=a}}
P.fN.prototype={
L:function(a,b){var t
for(t=J.aL(b);t.p();)this.l(0,t.gq())},
j:function(a){return P.eN(this,"{","}")},
$isc:1,
$asc:null}
P.fM.prototype={}
P.bP.prototype={$isc:1,$asc:null,$isb:1,$asb:null}
P.ay.prototype={}
P.H.prototype={}
P.aP.prototype={
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.aP))return!1
return this.a===b.a&&this.b===b.b},
P:function(a,b){return C.b.P(this.a,b.a)},
gu:function(a){var t=this.a
return(t^C.b.aO(t,30))&1073741823},
j:function(a){var t,s,r,q,p,o,n
t=P.mf(H.mM(this))
s=P.cf(H.mK(this))
r=P.cf(H.mG(this))
q=P.cf(H.mH(this))
p=P.cf(H.mJ(this))
o=P.cf(H.mL(this))
n=P.mg(H.mI(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
geN:function(){return this.a},
d7:function(a,b){var t
if(!(Math.abs(this.a)>864e13))t=!1
else t=!0
if(t)throw H.e(P.jl("DateTime is outside valid range: "+this.geN()))},
$isH:1,
$asH:function(){return[P.aP]}}
P.M.prototype={$isH:1,
$asH:function(){return[P.U]}}
P.aB.prototype={
aq:function(a,b){return C.b.aq(this.a,b.gdI())},
ap:function(a,b){return C.b.ap(this.a,b.gdI())},
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.aB))return!1
return this.a===b.a},
gu:function(a){return this.a&0x1FFFFFFF},
P:function(a,b){return C.b.P(this.a,b.a)},
j:function(a){var t,s,r,q,p
t=new P.ea()
s=this.a
if(s<0)return"-"+new P.aB(0-s).j(0)
r=t.$1(C.b.E(s,6e7)%60)
q=t.$1(C.b.E(s,1e6)%60)
p=new P.e9().$1(s%1e6)
return""+C.b.E(s,36e8)+":"+H.f(r)+":"+H.f(q)+"."+H.f(p)},
$isH:1,
$asH:function(){return[P.aB]}}
P.e9.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.q,args:[P.m]}}}
P.ea.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.q,args:[P.m]}}}
P.be.prototype={}
P.cc.prototype={
j:function(a){return"Assertion failed"}}
P.bk.prototype={
j:function(a){return"Throw of null."}}
P.af.prototype={
gaI:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaH:function(){return""},
j:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.f(t)
q=this.gaI()+s+r
if(!this.a)return q
p=this.gaH()
o=P.jo(this.b)
return q+p+": "+H.f(o)}}
P.dp.prototype={
gaI:function(){return"RangeError"},
gaH:function(){var t,s,r
H.d(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.f(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.f(t)
else if(r>t)s=": Not in range "+H.f(t)+".."+H.f(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.f(t)}return s}}
P.eK.prototype={
gaI:function(){return"RangeError"},
gaH:function(){H.d(this.a)
if(J.lq(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.f(t)},
gk:function(a){return this.f}}
P.t.prototype={
j:function(a){return"Unsupported operation: "+this.a}}
P.bV.prototype={
j:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.aj.prototype={
j:function(a){return"Bad state: "+this.a}}
P.a3.prototype={
j:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.f(P.jo(t))+"."}}
P.dv.prototype={
j:function(a){return"Stack Overflow"},
$isbe:1}
P.e2.prototype={
j:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.hR.prototype={
j:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.f(t)}}
P.bD.prototype={
j:function(a){var t,s,r
t=this.a
s=t!=null&&""!==t?"FormatException: "+H.f(t):"FormatException"
r=this.b
if(typeof r!=="string")return s
if(r.length>78)r=C.i.aC(r,0,75)+"..."
return s+"\n"+r}}
P.ec.prototype={
j:function(a){return"Expando:"+H.f(this.a)},
h:function(a,b){var t,s
t=this.b
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.E(P.k3(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.jx(b,"expando$values")
return s==null?null:H.jx(s,t)},
i:function(a,b,c){var t,s
t=this.b
if(typeof t!=="string")t.set(b,c)
else{s=H.jx(b,"expando$values")
if(s==null){s=new P.n()
H.kA(b,"expando$values",s)}H.kA(s,t,c)}}}
P.m.prototype={$isH:1,
$asH:function(){return[P.U]}}
P.W.prototype={
aA:function(a,b){return new H.dC(this,b,[H.am(this,"W",0)])},
gk:function(a){var t,s
H.d(!this.$isc)
t=this.gw(this)
for(s=0;t.p();)++s
return s},
ga0:function(a){var t,s
t=this.gw(this)
if(!t.p())throw H.e(H.eO())
s=t.gq()
if(t.p())throw H.e(H.mA())
return s},
t:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(P.m8("index"))
if(b<0)H.E(P.b_(b,0,null,"index",null))
for(t=this.gw(this),s=0;t.p();){r=t.gq()
if(b===s)return r;++s}throw H.e(P.C(b,this,"index",null,s))},
j:function(a){return P.my(this,"(",")")}}
P.d5.prototype={}
P.b.prototype={$isc:1,$asc:null,$asb:null}
P.aE.prototype={}
P.aX.prototype={
gu:function(a){return P.n.prototype.gu.call(this,this)},
j:function(a){return"null"}}
P.U.prototype={$isH:1,
$asH:function(){return[P.U]}}
P.n.prototype={constructor:P.n,$isn:1,
v:function(a,b){return this===b},
gu:function(a){return H.aY(this)},
j:function(a){return H.fA(this)},
gA:function(a){return new H.aF(H.iR(this),null)},
toString:function(){return this.j(this)}}
P.bR.prototype={}
P.q.prototype={$isH:1,
$asH:function(){return[P.q]}}
P.bS.prototype={
gk:function(a){return this.a.length},
j:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga2:function(){return this.a}}
W.j.prototype={}
W.dS.prototype={
j:function(a){return String(a)},
$isa:1}
W.dT.prototype={
j:function(a){return String(a)},
$isa:1}
W.a2.prototype={$isn:1}
W.dW.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isl:1,
$asl:function(){return[W.a2]},
$isc:1,
$asc:function(){return[W.a2]},
$iso:1,
$aso:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.cd.prototype={}
W.aN.prototype={$isa:1,$isaN:1}
W.ce.prototype={
cF:function(a,b,c){var t=this.dM(a,b,P.nn(c,null))
return t},
dM:function(a,b,c){return a.getContext(b,c)}}
W.dY.prototype={
aB:function(a){return P.iL(a.getContextAttributes())}}
W.aO.prototype={$isa:1,
gk:function(a){return a.length}}
W.e0.prototype={$isa:1}
W.A.prototype={$isn:1}
W.bd.prototype={
bw:function(a,b){var t,s
t=$.$get$kd()
s=t[b]
if(typeof s==="string")return s
s=this.e_(a,b)
t[b]=s
return s},
e_:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.mh()+b
if(t in a)return t
return b},
gk:function(a){return a.length}}
W.e1.prototype={}
W.e3.prototype={
h:function(a,b){return a[b]},
gk:function(a){return a.length}}
W.e4.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gJ:function(a){return a.z}}
W.cg.prototype={}
W.aQ.prototype={
e3:function(a,b){return a.adoptNode(b)},
cG:function(a,b){return a.getElementById(b)},
b_:function(a,b){return a.querySelector(b)},
$isaQ:1}
W.ch.prototype={$isa:1}
W.e5.prototype={
j:function(a){return String(a)}}
W.ci.prototype={
ek:function(a,b){return a.createHTMLDocument(b)}}
W.e6.prototype={
gaz:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gJ:function(a){return a.z}}
W.cj.prototype={
gaz:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gJ:function(a){return a.z}}
W.ck.prototype={
j:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gZ(a))+" x "+H.f(this.gY(a))},
v:function(a,b){var t
if(b==null)return!1
t=J.r(b)
if(!t.$isJ)return!1
return a.left===t.gaV(b)&&a.top===t.gb3(b)&&this.gZ(a)===t.gZ(b)&&this.gY(a)===t.gY(b)},
gu:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gZ(a)
q=this.gY(a)
return W.kY(W.b7(W.b7(W.b7(W.b7(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gY:function(a){return a.height},
gaV:function(a){return a.left},
gb3:function(a){return a.top},
gZ:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isJ:1,
$asJ:function(){}}
W.e7.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isl:1,
$asl:function(){return[P.q]},
$isc:1,
$asc:function(){return[P.q]},
$iso:1,
$aso:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]}}
W.e8.prototype={
gk:function(a){return a.length}}
W.a4.prototype={
ge6:function(a){return new W.hL(a)},
j:function(a){return a.localName},
M:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.kl
if(t==null){t=H.D([],[W.dj])
s=new W.dk(t)
C.a.l(t,W.kW(null))
C.a.l(t,W.kZ())
$.kl=s
d=s}else d=t
t=$.kk
if(t==null){t=new W.dK(d)
$.kk=t
c=t}else{t.a=d
c=t}}if($.aC==null){t=document
s=t.implementation
s=(s&&C.L).ek(s,"")
$.aC=s
$.jn=s.createRange()
s=$.aC
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.aC.head;(t&&C.M).O(t,r)}t=$.aC
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.jK(s,"$isaN")}t=$.aC
if(!!this.$isaN)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.aC.body;(t&&C.p).O(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.B(C.W,a.tagName)){t=$.jn;(t&&C.E).cH(t,q)
t=$.jn
p=(t&&C.E).ei(t,b)}else{q.innerHTML=b
p=$.aC.createDocumentFragment()
for(t=J.k(p);s=q.firstChild,s!=null;)t.O(p,s)}t=$.aC.body
if(q==null?t!=null:q!==t)J.lV(q)
c.ba(p)
C.k.e3(document,p)
return p},
ej:function(a,b,c){return this.M(a,b,c,null)},
cS:function(a,b,c,d){a.textContent=null
this.O(a,this.M(a,b,c,d))},
cR:function(a,b){return this.cS(a,b,null,null)},
a5:function(a,b){return a.getAttribute(b)},
dS:function(a,b){return a.removeAttribute(b)},
cP:function(a,b,c){return a.setAttribute(b,c)},
$isa:1,
$isn:1,
$isa4:1,
$ish:1,
$isp:1,
geX:function(a){return a.tagName}}
W.iH.prototype={
$1:function(a){return!!J.r(a).$isa4},
$S:function(){return{func:1,args:[,]}}}
W.i.prototype={$isn:1,$isi:1}
W.h.prototype={
dC:function(a,b,c,d){return a.addEventListener(b,H.b8(c,1),!1)},
$isn:1,
$ish:1}
W.a5.prototype={$isn:1}
W.ex.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isl:1,
$asl:function(){return[W.a5]},
$isc:1,
$asc:function(){return[W.a5]},
$iso:1,
$aso:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.ey.prototype={
gk:function(a){return a.length}}
W.eD.prototype={
gk:function(a){return a.length}}
W.a6.prototype={$isn:1}
W.co.prototype={}
W.eI.prototype={
gk:function(a){return a.length}}
W.bE.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isl:1,
$asl:function(){return[W.p]},
$isc:1,
$asc:function(){return[W.p]},
$iso:1,
$aso:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.cp.prototype={}
W.cq.prototype={
f6:function(a,b,c,d,e,f){return a.open(b,c,d,f,e)},
eO:function(a,b,c){return a.open(b,c)},
D:function(a,b){return a.send(b)}}
W.bF.prototype={}
W.bg.prototype={$isa:1,$isa4:1,$isbg:1}
W.aU.prototype={$isn:1,$isi:1,$isaU:1}
W.f_.prototype={
j:function(a){return String(a)}}
W.f5.prototype={
gk:function(a){return a.length}}
W.f6.prototype={
f5:function(a,b,c){return a.send(b,c)},
D:function(a,b){return a.send(b)}}
W.bI.prototype={}
W.a7.prototype={$isn:1}
W.f7.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isl:1,
$asl:function(){return[W.a7]},
$isc:1,
$asc:function(){return[W.a7]},
$iso:1,
$aso:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.N.prototype={$isn:1,$isi:1,$isN:1}
W.fh.prototype={$isa:1}
W.T.prototype={
ga0:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.e(new P.aj("No elements"))
if(s>1)throw H.e(new P.aj("More than one element"))
return t.firstChild},
L:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.k(s),p=0;p<r;++p)q.O(s,t.firstChild)
return},
i:function(a,b,c){var t=this.a
J.ls(t,c,C.C.h(t.childNodes,b))},
gw:function(a){var t=this.a.childNodes
return new W.cn(t,t.length,-1,null,[H.am(t,"B",0)])},
gk:function(a){return this.a.childNodes.length},
h:function(a,b){return C.C.h(this.a.childNodes,b)},
$asc:function(){return[W.p]},
$asd8:function(){return[W.p]},
$asb:function(){return[W.p]},
$asbP:function(){return[W.p]}}
W.p.prototype={
eQ:function(a){var t=a.parentNode
if(t!=null)J.bu(t,a)},
j:function(a){var t=a.nodeValue
return t==null?this.cX(a):t},
O:function(a,b){return a.appendChild(b)},
dT:function(a,b){return a.removeChild(b)},
dU:function(a,b,c){return a.replaceChild(b,c)},
$isn:1,
$ish:1,
$isp:1,
gaY:function(a){return a.previousSibling}}
W.di.prototype={
aZ:function(a){return a.previousNode()}}
W.bO.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isl:1,
$asl:function(){return[W.p]},
$isc:1,
$asc:function(){return[W.p]},
$iso:1,
$aso:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.fq.prototype={$isa:1}
W.ft.prototype={
gk:function(a){return a.length}}
W.a8.prototype={$isn:1,
gk:function(a){return a.length}}
W.fv.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isl:1,
$asl:function(){return[W.a8]},
$isc:1,
$asc:function(){return[W.a8]},
$iso:1,
$aso:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.fy.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.fz.prototype={
D:function(a,b){return a.send(b)}}
W.dn.prototype={
ei:function(a,b){return a.createContextualFragment(b)},
cH:function(a,b){return a.selectNodeContents(b)}}
W.fJ.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gJ:function(a){return a.z}}
W.dr.prototype={
D:function(a,b){return a.send(b)}}
W.fL.prototype={
gk:function(a){return a.length}}
W.fO.prototype={$isa:1}
W.a9.prototype={$isn:1,$ish:1}
W.fP.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isl:1,
$asl:function(){return[W.a9]},
$isc:1,
$asc:function(){return[W.a9]},
$iso:1,
$aso:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.aa.prototype={$isn:1}
W.fR.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isl:1,
$asl:function(){return[W.aa]},
$isc:1,
$asc:function(){return[W.aa]},
$iso:1,
$aso:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.ab.prototype={$isn:1,
gk:function(a){return a.length}}
W.fW.prototype={
h:function(a,b){return this.bE(a,b)},
i:function(a,b,c){this.dZ(a,b,c)},
ah:function(a,b){var t,s
for(t=0;!0;++t){s=this.dP(a,t)
if(s==null)return
b.$2(s,this.bE(a,s))}},
gC:function(a){var t=H.D([],[P.q])
this.ah(a,new W.fX(t))
return t},
gk:function(a){return a.length},
bE:function(a,b){return a.getItem(b)},
dP:function(a,b){return a.key(b)},
dZ:function(a,b,c){return a.setItem(b,c)}}
W.fX.prototype={
$2:function(a,b){return C.a.l(this.a,a)},
$S:function(){return{func:1,args:[,,]}}}
W.X.prototype={$isn:1}
W.ak.prototype={}
W.dw.prototype={
M:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aD(a,b,c,d)
t=W.mj("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.T(s).L(0,new W.T(t))
return s}}
W.h4.prototype={
M:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aD(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.J.M(t.createElement("table"),b,c,d)
t.toString
t=new W.T(t)
r=t.ga0(t)
r.toString
t=new W.T(r)
q=t.ga0(t)
s.toString
q.toString
new W.T(s).L(0,new W.T(q))
return s}}
W.h5.prototype={
M:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aD(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.J.M(t.createElement("table"),b,c,d)
t.toString
t=new W.T(t)
r=t.ga0(t)
s.toString
r.toString
new W.T(s).L(0,new W.T(r))
return s}}
W.bT.prototype={$isbT:1}
W.ac.prototype={$isn:1,$ish:1}
W.Y.prototype={$isn:1,$ish:1}
W.h8.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isl:1,
$asl:function(){return[W.Y]},
$isc:1,
$asc:function(){return[W.Y]},
$iso:1,
$aso:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.h9.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isl:1,
$asl:function(){return[W.ac]},
$isc:1,
$asc:function(){return[W.ac]},
$iso:1,
$aso:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
W.ha.prototype={
gk:function(a){return a.length}}
W.ad.prototype={$isn:1}
W.b0.prototype={$isn:1,$isi:1,$isb0:1}
W.he.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isl:1,
$asl:function(){return[W.ad]},
$isc:1,
$asc:function(){return[W.ad]},
$iso:1,
$aso:function(){return[W.ad]},
$isb:1,
$asb:function(){return[W.ad]}}
W.hf.prototype={
gk:function(a){return a.length}}
W.bm.prototype={}
W.hh.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gJ:function(a){return a.z}}
W.dA.prototype={
aZ:function(a){return a.previousNode()}}
W.aG.prototype={}
W.hm.prototype={
j:function(a){return String(a)},
$isa:1}
W.ho.prototype={
gk:function(a){return a.length}}
W.hr.prototype={
gk:function(a){return a.length}}
W.hs.prototype={
D:function(a,b){return a.send(b)}}
W.b2.prototype={
gem:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(new P.t("deltaY is not supported"))},
$isn:1,
$isi:1,
$isN:1,
$isb2:1}
W.bW.prototype={
ge5:function(a){var t,s
t=P.U
s=new P.O(0,$.x,null,[t])
this.dK(a)
this.dV(a,W.l2(new W.hu(new P.iw(s,[t]))))
return s},
dV:function(a,b){return a.requestAnimationFrame(H.b8(b,1))},
dK:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isa:1}
W.hu.prototype={
$1:function(a){this.a.av(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.hv.prototype={$isa:1}
W.b3.prototype={$isa:1}
W.hG.prototype={
j:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
v:function(a,b){var t,s,r
if(b==null)return!1
t=J.r(b)
if(!t.$isJ)return!1
s=a.left
r=t.gaV(b)
if(s==null?r==null:s===r){s=a.top
r=t.gb3(b)
if(s==null?r==null:s===r){s=a.width
r=t.gZ(b)
if(s==null?r==null:s===r){s=a.height
t=t.gY(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gu:function(a){var t,s,r,q
t=J.ap(a.left)
s=J.ap(a.top)
r=J.ap(a.width)
q=J.ap(a.height)
return W.kY(W.b7(W.b7(W.b7(W.b7(0,t),s),r),q))},
$isJ:1,
$asJ:function(){},
gY:function(a){return a.height},
gaV:function(a){return a.left},
gb3:function(a){return a.top},
gZ:function(a){return a.width}}
W.dF.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isl:1,
$asl:function(){return[P.J]},
$isc:1,
$asc:function(){return[P.J]},
$iso:1,
$aso:function(){return[P.J]},
$isb:1,
$asb:function(){return[P.J]}}
W.hI.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isl:1,
$asl:function(){return[W.A]},
$isc:1,
$asc:function(){return[W.A]},
$iso:1,
$aso:function(){return[W.A]},
$isb:1,
$asb:function(){return[W.A]}}
W.hJ.prototype={$isa:1}
W.hK.prototype={
gY:function(a){return a.height},
gZ:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.i4.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isl:1,
$asl:function(){return[W.a6]},
$isc:1,
$asc:function(){return[W.a6]},
$iso:1,
$aso:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.i5.prototype={$isa:1}
W.dI.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isl:1,
$asl:function(){return[W.p]},
$isc:1,
$asc:function(){return[W.p]},
$iso:1,
$aso:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.iq.prototype={$isa:1}
W.it.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isl:1,
$asl:function(){return[W.ab]},
$isc:1,
$asc:function(){return[W.ab]},
$iso:1,
$aso:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.iu.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isl:1,
$asl:function(){return[W.X]},
$isc:1,
$asc:function(){return[W.X]},
$iso:1,
$aso:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.iB.prototype={$isa:1}
W.iC.prototype={$isa:1}
W.hE.prototype={
ah:function(a,b){var t,s,r,q,p,o
for(t=this.gC(this),s=t.length,r=this.a,q=J.k(r),p=0;p<t.length;t.length===s||(0,H.F)(t),++p){o=t[p]
b.$2(o,q.a5(r,o))}},
gC:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.D([],[P.q])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.l(s,p.name)}return s},
gdN:function(){return this.a}}
W.hL.prototype={
h:function(a,b){return J.jj(this.a,b)},
i:function(a,b,c){J.lX(this.a,b,c)},
gk:function(a){return this.gC(this).length}}
W.hO.prototype={
eJ:function(a,b,c,d){return W.ae(this.a,this.b,a,!1,H.aJ(this,0))}}
W.jC.prototype={}
W.hP.prototype={
e1:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.lr(r,this.c,t,!1)}},
du:function(a,b,c,d,e){this.e1()}}
W.hQ.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.bY.prototype={
a3:function(a){return $.$get$kX().B(0,W.bw(a))},
U:function(a,b,c){var t,s,r
t=W.bw(a)
s=$.$get$jD()
r=s.h(0,H.f(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
dv:function(a){var t,s
t=$.$get$jD()
if(t.gak(t)){for(s=0;s<262;++s)t.i(0,C.V[s],W.nv())
for(s=0;s<12;++s)t.i(0,C.t[s],W.nw())}}}
W.B.prototype={
gw:function(a){return new W.cn(a,this.gk(a),-1,null,[H.am(a,"B",0)])},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
W.dk.prototype={
a3:function(a){return C.a.bQ(this.a,new W.fj(a))},
U:function(a,b,c){return C.a.bQ(this.a,new W.fi(a,b,c))}}
W.fj.prototype={
$1:function(a){return a.a3(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.fi.prototype={
$1:function(a){return a.U(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.c0.prototype={
a3:function(a){return this.a.B(0,W.bw(a))},
U:function(a,b,c){var t,s
t=W.bw(a)
s=this.c
if(s.B(0,H.f(t)+"::"+b))return this.d.e4(c)
else if(s.B(0,"*::"+b))return this.d.e4(c)
else{s=this.b
if(s.B(0,H.f(t)+"::"+b))return!0
else if(s.B(0,"*::"+b))return!0
else if(s.B(0,H.f(t)+"::*"))return!0
else if(s.B(0,"*::*"))return!0}return!1},
dA:function(a,b,c,d){var t,s,r
this.a.L(0,c)
t=b.aA(0,new W.ir())
s=b.aA(0,new W.is())
this.b.L(0,t)
r=this.c
r.L(0,C.B)
r.L(0,s)}}
W.ir.prototype={
$1:function(a){return!C.a.B(C.t,a)},
$S:function(){return{func:1,args:[,]}}}
W.is.prototype={
$1:function(a){return C.a.B(C.t,a)},
$S:function(){return{func:1,args:[,]}}}
W.ix.prototype={
U:function(a,b,c){if(this.d_(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.jj(a,"template")==="")return this.e.B(0,b)
return!1}}
W.iy.prototype={
$1:function(a){return"TEMPLATE::"+H.f(a)},
$S:function(){return{func:1,args:[,]}}}
W.iv.prototype={
a3:function(a){var t=J.r(a)
if(!!t.$isbQ)return!1
t=!!t.$isG
if(t&&W.bw(a)==="foreignObject")return!1
if(t)return!0
return!1},
U:function(a,b,c){if(b==="is"||C.i.be(b,"on"))return!1
return this.a3(a)}}
W.cn.prototype={
p:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbG(J.ba(this.a,t))
this.c=t
return!0}this.sbG(null)
this.c=s
return!1},
gq:function(){return this.d},
sbG:function(a){this.d=a}}
W.dj.prototype={}
W.ip.prototype={}
W.dK.prototype={
ba:function(a){new W.iz(this).$2(a,null)},
au:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)J.bu(t,a)}else J.bu(b,a)},
dY:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.lK(a)
r=J.jj(s.gdN(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.Q(n)}p="element unprintable"
try{p=J.aA(a)}catch(n){H.Q(n)}try{o=W.bw(a)
this.dX(a,b,t,p,o,s,r)}catch(n){if(H.Q(n) instanceof P.af)throw n
else{this.au(a,b)
window
m="Removing corrupted element "+H.f(p)
if(typeof console!="undefined")console.warn(m)}}},
dX:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.au(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.a3(a)){this.au(a,b)
window
t="Removing disallowed element <"+H.f(e)+"> from "+J.aA(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.U(a,"is",g)){this.au(a,b)
window
t="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gC(f)
s=H.D(t.slice(0),[H.aJ(t,0)])
for(r=f.gC(f).length-1,t=f.a,q=J.k(t);r>=0;--r){p=s[r]
if(!this.a.U(a,J.m_(p),q.a5(t,p))){window
o="Removing disallowed attribute <"+H.f(e)+" "+p+'="'+H.f(q.a5(t,p))+'">'
if(typeof console!="undefined")console.warn(o)
q.a5(t,p)
q.dS(t,p)}}if(!!J.r(a).$isbT)this.ba(a.content)}}
W.iz.prototype={
$2:function(a,b){var t,s,r,q
switch(a.nodeType){case 1:this.a.dY(a,b)
break
case 8:case 11:case 3:case 4:break
default:if(b==null){r=a.parentNode
if(r!=null)J.bu(r,a)}else J.bu(b,a)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.lM(t)}catch(q){H.Q(q)
r=t
J.bu(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.p,W.p]}}}
W.bx.prototype={$isc:1,
$asc:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
W.by.prototype={$isc:1,
$asc:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.bz.prototype={$isc:1,
$asc:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.bA.prototype={$isc:1,
$asc:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
W.bB.prototype={$isc:1,
$asc:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.bC.prototype={$isc:1,
$asc:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.cr.prototype={}
W.cL.prototype={$isc:1,
$asc:function(){return[W.A]},
$isb:1,
$asb:function(){return[W.A]}}
W.cx.prototype={$isc:1,
$asc:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.cE.prototype={$isc:1,
$asc:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.cF.prototype={$isc:1,
$asc:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.cG.prototype={$isc:1,
$asc:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.cH.prototype={$isc:1,
$asc:function(){return[W.ad]},
$isb:1,
$asb:function(){return[W.ad]}}
W.cI.prototype={$isc:1,
$asc:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.cJ.prototype={$isc:1,
$asc:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.cK.prototype={$isc:1,
$asc:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.cv.prototype={$isc:1,
$asc:function(){return[P.J]},
$isb:1,
$asb:function(){return[P.J]}}
W.cw.prototype={$isc:1,
$asc:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.cy.prototype={$isc:1,
$asc:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.cA.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.cB.prototype={$isc:1,
$asc:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.cC.prototype={$isc:1,
$asc:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]}}
W.cM.prototype={$isc:1,
$asc:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.cN.prototype={$isc:1,
$asc:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.cZ.prototype={$isc:1,
$asc:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.cX.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.d1.prototype={$isc:1,
$asc:function(){return[P.J]},
$isb:1,
$asb:function(){return[P.J]}}
W.d2.prototype={$isc:1,
$asc:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.d3.prototype={$isc:1,
$asc:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.d4.prototype={$isc:1,
$asc:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]}}
W.cP.prototype={$isc:1,
$asc:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.cQ.prototype={$isc:1,
$asc:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.cR.prototype={$isc:1,
$asc:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.cT.prototype={$isc:1,
$asc:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.cV.prototype={$isc:1,
$asc:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.d_.prototype={$isc:1,
$asc:function(){return[W.A]},
$isb:1,
$asb:function(){return[W.A]}}
W.d0.prototype={$isc:1,
$asc:function(){return[W.ad]},
$isb:1,
$asb:function(){return[W.ad]}}
P.hw.prototype={
cc:function(a){var t,s,r,q
t=this.a
s=t.length
for(r=0;r<s;++r){q=t[r]
if(q==null?a==null:q===a)return r}C.a.l(t,a)
C.a.l(this.b,null)
return s},
b4:function(a){var t,s,r,q,p,o,n,m,l
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){s=a.getTime()
r=new P.aP(s,!0)
r.d7(s,!0)
return r}if(a instanceof RegExp)throw H.e(new P.bV("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.no(a)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=this.cc(a)
r=this.b
o=r[p]
t.a=o
if(o!=null)return o
o=P.L()
t.a=o
r[p]=o
this.ey(a,new P.hy(t,this))
return t.a}if(a instanceof Array){p=this.cc(a)
r=this.b
o=r[p]
if(o!=null)return o
n=J.a0(a)
m=n.gk(a)
o=this.c?new Array(m):a
r[p]=o
for(r=J.b9(o),l=0;C.b.aq(l,m);++l)r.i(o,l,this.b4(n.h(a,l)))
return o}return a}}
P.hy.prototype={
$2:function(a,b){var t,s
t=this.a.a
s=this.b.b4(b)
J.jP(t,a,s)
return s},
$S:function(){return{func:1,args:[,,]}}}
P.iI.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.q,,]}}}
P.hx.prototype={
ey:function(a,b){var t,s,r,q
for(t=Object.keys(a),s=t.length,r=0;r<t.length;t.length===s||(0,H.F)(t),++r){q=t[r]
b.$2(q,a[q])}}}
P.iJ.prototype={
$1:function(a){return this.a.av(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.iK.prototype={
$1:function(a){return this.a.ed(a)},
$S:function(){return{func:1,args:[,]}}}
P.ig.prototype={}
P.J.prototype={$asJ:null}
P.dR.prototype={$isa:1}
P.aM.prototype={$isa:1}
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
P.ep.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eq.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gJ:function(a){return a.z}}
P.er.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.es.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gJ:function(a){return a.z}}
P.et.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eu.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ez.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eC.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ag.prototype={}
P.aD.prototype={$isa:1}
P.eJ.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ar.prototype={$isn:1}
P.eU.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.X(a,b)},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
X:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.ar]},
$isb:1,
$asb:function(){return[P.ar]}}
P.f2.prototype={$isa:1}
P.f3.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.as.prototype={$isn:1}
P.fk.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.X(a,b)},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
X:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.as]},
$isb:1,
$asb:function(){return[P.as]}}
P.fr.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fw.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fx.prototype={
gk:function(a){return a.length}}
P.fC.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fD.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bQ.prototype={$isa:1,$isbQ:1}
P.h1.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.X(a,b)},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
X:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]}}
P.G.prototype={
M:function(a,b,c,d){var t,s,r,q,p,o
t=H.D([],[W.dj])
C.a.l(t,W.kW(null))
C.a.l(t,W.kZ())
C.a.l(t,new W.iv())
c=new W.dK(new W.dk(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.p).ej(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.T(q)
o=t.ga0(t)
for(t=J.k(p);r=o.firstChild,r!=null;)t.O(p,r)
return p},
$isa:1,
$isG:1}
P.h2.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.h3.prototype={$isa:1}
P.dx.prototype={}
P.h7.prototype={$isa:1}
P.bU.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.at.prototype={$isn:1}
P.hg.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.X(a,b)},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
X:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.at]},
$isb:1,
$asb:function(){return[P.at]}}
P.hn.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.hp.prototype={$isa:1}
P.hq.prototype={$isa:1}
P.bX.prototype={$isa:1}
P.il.prototype={$isa:1}
P.im.prototype={$isa:1}
P.io.prototype={$isa:1}
P.cu.prototype={$isc:1,
$asc:function(){return[P.ar]},
$isb:1,
$asb:function(){return[P.ar]}}
P.cs.prototype={$isc:1,
$asc:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]}}
P.cz.prototype={$isc:1,
$asc:function(){return[P.as]},
$isb:1,
$asb:function(){return[P.as]}}
P.cD.prototype={$isc:1,
$asc:function(){return[P.at]},
$isb:1,
$asb:function(){return[P.at]}}
P.cO.prototype={$isc:1,
$asc:function(){return[P.ar]},
$isb:1,
$asb:function(){return[P.ar]}}
P.cW.prototype={$isc:1,
$asc:function(){return[P.as]},
$isb:1,
$asb:function(){return[P.as]}}
P.cS.prototype={$isc:1,
$asc:function(){return[P.at]},
$isb:1,
$asb:function(){return[P.at]}}
P.cU.prototype={$isc:1,
$asc:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]}}
P.dV.prototype={
gk:function(a){return a.length}}
P.fH.prototype={
bO:function(a,b){return a.activeTexture(b)},
bR:function(a,b,c){return a.attachShader(b,c)},
bS:function(a,b,c){return a.bindBuffer(b,c)},
bT:function(a,b,c){return a.bindFramebuffer(b,c)},
bU:function(a,b,c){return a.bindTexture(b,c)},
bV:function(a,b){return a.blendEquation(b)},
bW:function(a,b,c){return a.blendFunc(b,c)},
bX:function(a,b,c,d){return a.bufferData(b,c,d)},
bY:function(a,b){return a.clear(b)},
bZ:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c0:function(a,b){return a.compileShader(b)},
c1:function(a){return a.createBuffer()},
c2:function(a){return a.createProgram()},
c3:function(a,b){return a.createShader(b)},
c5:function(a,b){return a.depthMask(b)},
c6:function(a,b){return a.disable(b)},
c7:function(a,b,c,d){return a.drawArrays(b,c,d)},
c8:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c9:function(a,b){return a.enable(b)},
ca:function(a,b){return a.enableVertexAttribArray(b)},
aB:function(a){return P.iL(a.getContextAttributes())},
b5:function(a,b){return a.getProgramInfoLog(b)},
b6:function(a,b,c){return a.getProgramParameter(b,c)},
b7:function(a,b){return a.getShaderInfoLog(b)},
b8:function(a,b,c){return a.getShaderParameter(b,c)},
b9:function(a,b,c){return a.getUniformLocation(b,c)},
cd:function(a,b){return a.linkProgram(b)},
bc:function(a,b,c){return a.shaderSource(b,c)},
bf:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cm:function(a,b,c){return a.uniform1f(b,c)},
cn:function(a,b,c){return a.uniform1fv(b,c)},
co:function(a,b,c){return a.uniform1i(b,c)},
cp:function(a,b,c){return a.uniform1iv(b,c)},
cq:function(a,b,c){return a.uniform2fv(b,c)},
cr:function(a,b,c){return a.uniform3fv(b,c)},
cs:function(a,b,c){return a.uniform4fv(b,c)},
ct:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cu:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cw:function(a,b){return a.useProgram(b)},
cA:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cB:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fI.prototype={
e7:function(a,b){return a.beginTransformFeedback(b)},
ea:function(a,b){return a.bindVertexArray(b)},
el:function(a){return a.createVertexArray()},
es:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
eu:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
ev:function(a){return a.endTransformFeedback()},
f1:function(a,b,c,d){this.e0(a,b,c,d)
return},
e0:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
f3:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bO:function(a,b){return a.activeTexture(b)},
bR:function(a,b,c){return a.attachShader(b,c)},
bS:function(a,b,c){return a.bindBuffer(b,c)},
bT:function(a,b,c){return a.bindFramebuffer(b,c)},
bU:function(a,b,c){return a.bindTexture(b,c)},
bV:function(a,b){return a.blendEquation(b)},
bW:function(a,b,c){return a.blendFunc(b,c)},
bX:function(a,b,c,d){return a.bufferData(b,c,d)},
bY:function(a,b){return a.clear(b)},
bZ:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c0:function(a,b){return a.compileShader(b)},
c1:function(a){return a.createBuffer()},
c2:function(a){return a.createProgram()},
c3:function(a,b){return a.createShader(b)},
c5:function(a,b){return a.depthMask(b)},
c6:function(a,b){return a.disable(b)},
c7:function(a,b,c,d){return a.drawArrays(b,c,d)},
c8:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c9:function(a,b){return a.enable(b)},
ca:function(a,b){return a.enableVertexAttribArray(b)},
aB:function(a){return P.iL(a.getContextAttributes())},
b5:function(a,b){return a.getProgramInfoLog(b)},
b6:function(a,b,c){return a.getProgramParameter(b,c)},
b7:function(a,b){return a.getShaderInfoLog(b)},
b8:function(a,b,c){return a.getShaderParameter(b,c)},
b9:function(a,b,c){return a.getUniformLocation(b,c)},
cd:function(a,b){return a.linkProgram(b)},
bc:function(a,b,c){return a.shaderSource(b,c)},
bf:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cm:function(a,b,c){return a.uniform1f(b,c)},
cn:function(a,b,c){return a.uniform1fv(b,c)},
co:function(a,b,c){return a.uniform1i(b,c)},
cp:function(a,b,c){return a.uniform1iv(b,c)},
cq:function(a,b,c){return a.uniform2fv(b,c)},
cr:function(a,b,c){return a.uniform3fv(b,c)},
cs:function(a,b,c){return a.uniform4fv(b,c)},
ct:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cu:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cw:function(a,b){return a.useProgram(b)},
cA:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cB:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isa:1}
P.iA.prototype={$isa:1}
P.fS.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return P.iL(this.dO(a,b))},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
dO:function(a,b){return a.item(b)},
$isc:1,
$asc:function(){return[P.aE]},
$isb:1,
$asb:function(){return[P.aE]}}
P.ct.prototype={$isc:1,
$asc:function(){return[P.aE]},
$isb:1,
$asb:function(){return[P.aE]}}
P.cY.prototype={$isc:1,
$asc:function(){return[P.aE]},
$isb:1,
$asb:function(){return[P.aE]}}
B.j6.prototype={
$1:function(a){$.$get$iM().i(0,a.which,!0)},
$S:function(){return{func:1,args:[W.aU]}}}
B.j7.prototype={
$1:function(a){$.$get$iM().i(0,a.which,null)},
$S:function(){return{func:1,args:[W.aU]}}}
B.j8.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.nl=t
$.nm=C.b.a8(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.jN=s-C.b.E(window.innerWidth,2)
$.li=-(t-C.b.E(window.innerHeight,2))},
$S:function(){return{func:1,args:[W.N]}}}
B.j9.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.c7=t-C.b.E(window.innerWidth,2)
$.c8=-(s-C.b.E(window.innerHeight,2))
if(a.button===2)$.$get$c6().i(0,"right",!0)
else $.$get$c6().i(0,"left",!0)},
$S:function(){return{func:1,args:[W.N]}}}
B.ja.prototype={
$1:function(a){if(a.button===2)$.$get$c6().i(0,"right",null)
else $.$get$c6().i(0,"left",null)},
$S:function(){return{func:1,args:[W.N]}}}
B.fl.prototype={
dh:function(a,b,c,d){var t
d.toString
W.ae(d,W.nu().$1(d),new B.fm(this),!1,W.b2)
W.ae(d,"mousemove",new B.fn(this),!1,W.N)
t=W.b0
W.ae(d,"touchstart",new B.fo(),!1,t)
W.ae(d,"touchmove",new B.fp(this),!1,t)
B.nK(null)}}
B.fm.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.au.gem(a)*r.k3
if(C.c.a8(r.fy,t)>0)r.fy=H.a_(C.c.a8(r.fy,t))}catch(q){s=H.Q(q)
P.V(s)}},
$S:function(){return{func:1,args:[W.b2]}}}
B.fn.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=H.a_(t.go+C.b.a8($.jN,$.c7)*0.01)
s=t.id
r=$.c8
q=$.li
t.id=H.a_(s+(r-q)*0.01)
$.c7=$.jN
$.c8=q}},
$S:function(){return{func:1,args:[W.N]}}}
B.fo.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.a4(t.clientX)
C.c.a4(t.clientY)
$.c7=s
C.c.a4(t.clientX)
$.c8=C.c.a4(t.clientY)},
$S:function(){return{func:1,args:[W.b0]}}}
B.fp.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.a4(t.clientX)
t=C.c.a4(t.clientY)
r=this.a
r.go=H.a_(r.go+C.b.a8(s,$.c7)*0.01)
r.id=H.a_(r.id+($.c8-t)*0.01)
$.c7=s
$.c8=t},
$S:function(){return{func:1,args:[W.b0]}}}
G.f8.prototype={}
G.dB.prototype={
a1:function(a,b){var t=this.d
if(H.ax(!t.F(0,a)))H.aI("uniform "+a+" already set")
t.i(0,a,b)},
bm:function(){return this.d},
j:function(a){var t,s,r,q
t=H.D(["{"+new H.aF(H.iR(this),null).j(0)+"}["+this.a+"]"],[P.q])
for(s=this.d,r=s.gC(s),r=r.gw(r);r.p();){q=r.gq()
C.a.l(t,H.f(q)+": "+H.f(s.h(0,q)))}return C.a.al(t,"\n")}}
G.dX.prototype={}
G.e_.prototype={
cb:function(a,b,c){J.lH(this.a,b)
if(c>0)J.m6(this.a,b,c)}}
G.eE.prototype={}
G.ev.prototype={}
G.ew.prototype={}
G.eH.prototype={
bk:function(a){var t=this.e
H.d(!t.F(0,a))
H.d(C.i.be(a,"a"))
switch($.$get$Z().h(0,a).a){case"vec2":t.i(0,a,H.D([],[T.aw]))
break
case"vec3":t.i(0,a,H.D([],[T.u]))
break
case"vec4":t.i(0,a,H.D([],[T.aH]))
break
case"float":t.i(0,a,H.D([],[P.M]))
break
case"uvec4":t.i(0,a,H.D([],[[P.b,P.m]]))
break
default:if(H.ax(!1))H.aI("unknown type for "+a)}},
d4:function(a){var t,s,r,q,p,o
H.d(a.length===3)
t=this.d
s=t.length
C.a.l(this.b,new G.ev(s,s+1,s+2))
for(r=a.length,q=0;q<a.length;a.length===r||(0,H.F)(a),++q){p=a[q]
o=new T.u(new Float32Array(3))
o.K(p)
C.a.l(t,o)}},
d2:function(a,b){var t,s,r,q,p,o,n
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.F)(b),++q){p=b[q]
o=new Float32Array(2)
n=p.a
o[1]=n[1]
o[0]=n[0]
r.l(t,new T.aw(o))}},
d3:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.F)(b),++q){p=b[q]
o=new T.u(new Float32Array(3))
o.K(p)
r.l(t,o)}},
d5:function(a){var t,s,r,q,p,o
H.d(a.length===4)
t=this.d
s=t.length
C.a.l(this.c,new G.ew(s,s+1,s+2,s+3))
for(r=a.length,q=0;q<a.length;a.length===r||(0,H.F)(a),++q){p=a[q]
o=new T.u(new Float32Array(3))
o.K(p)
C.a.l(t,o)}},
dc:function(){var t,s,r,q,p,o,n,m,l,k,j
t=this.b
s=this.c
r=new Array(t.length*6+s.length*8)
r.fixed$length=Array
q=H.D(r,[P.m])
for(r=t.length,p=0,o=0;n=t.length,o<n;n===r||(0,H.F)(t),++o){m=t[o]
l=m.a
q[p]=l
k=m.b
q[p+1]=k
q[p+2]=k
k=m.c
q[p+3]=k
q[p+4]=k
q[p+5]=l
p+=6}for(t=s.length,o=0;r=s.length,o<r;r===t||(0,H.F)(s),++o){j=s[o]
n=j.a
q[p]=n
l=j.b
q[p+1]=l
q[p+2]=l
l=j.c
q[p+3]=l
q[p+4]=l
l=j.d
q[p+5]=l
q[p+6]=l
q[p+7]=n
p+=8}H.d(p===q.length)
return q},
j:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gC(s),r=r.gw(r);r.p();){q=r.gq()
p=$.$get$Z().h(0,q).a
C.a.l(t,H.f(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.al(t," ")}}
G.dz.prototype={}
G.dy.prototype={}
G.f4.prototype={
dg:function(a){this.a1("cDepthTest",!0)
this.a1("cDepthWrite",!0)
this.a1("cBlendEquation",$.$get$k4())
this.a1("cStencilFunc",$.$get$kD())}}
G.db.prototype={
bi:function(a,b,c){var t,s
if(C.i.aa(a,0)===105){if(H.ax(C.b.aE(b.length,c)===this.z))H.aI("ChangeAttribute "+this.z)}else{t=C.b.aE(b.length,c)
if(H.ax(t===(this.ch.length/3|0)))H.aI("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}J.jP(this.cy,a,b)
t=this.d
s=this.r.h(0,a)
J.dO(t.a,34962,s)
J.jU(t.a,34962,b,35048)},
dd:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
a9:function(a,b,c){var t,s,r,q,p,o
t=J.jQ(a,0)===105
if(t&&this.z===0)this.z=C.b.aE(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.dQ(r.a))
this.bi(a,b,c)
q=$.$get$Z().h(0,a)
if(q==null)throw H.e("Unknown canonical "+a)
p=this.x
if(H.ax(p.F(0,a)))H.aI("unexpected attribute "+a)
o=p.h(0,a)
J.dP(r.a,this.e)
r.cb(0,o,t?1:0)
s=s.h(0,a)
p=q.bl()
J.dO(r.a,34962,s)
J.k2(r.a,o,p,5126,!1,0,0)},
bh:function(a){var t,s,r,q,p
t=this.r
s=this.d
t.i(0,"aPosition",J.dQ(s.a))
this.ch=a
this.bi("aPosition",a,3)
r=$.$get$Z().h(0,"aPosition")
if(r==null)throw H.e("Unknown canonical aPosition")
q=this.x
H.d(q.F(0,"aPosition"))
p=q.h(0,"aPosition")
J.dP(s.a,this.e)
s.cb(0,p,0)
t=t.h(0,"aPosition")
q=r.bl()
J.dO(s.a,34962,t)
J.k2(s.a,p,q,5126,!1,0,0)},
bj:function(a){var t,s,r,q
H.d(this.ch!=null)
t=this.ch.length
if(t<768){this.saJ(new Uint8Array(H.iE(a)))
this.Q=5121}else if(t<196608){this.saJ(new Uint16Array(H.iE(a)))
this.Q=5123}else{this.saJ(new Uint32Array(H.iE(a)))
this.Q=5125}t=this.d
J.dP(t.a,this.e)
s=this.y
r=this.cx
q=J.r(r)
H.d(!!q.$iskQ||!!q.$iskR||!!q.$iskS)
J.dO(t.a,34963,s)
J.jU(t.a,34963,r,35048)},
j:function(a){var t,s,r,q,p
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,r=J.k(t),q=J.aL(r.gC(t));q.p();){p=q.gq()
C.a.l(s,H.f(p)+":"+H.f(J.cb(r.h(t,p))))}return"MESH["+this.a+"] "+C.a.al(s,"  ")},
saJ:function(a){this.cx=a}}
G.fs.prototype={
d6:function(a,b){var t=C.b.cD(a,b)
if(this.z===t)return
this.z=t
this.bo()},
bo:function(){var t,s,r,q,p,o,n
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
bm:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.u(new Float32Array(H.v(3)))
o.a7(r,q,p)
p=this.d
p.i(0,"uEyePosition",o)
o=this.cy
o.K(t)
t=o.a
t[12]=0
t[13]=0
t[14]=0
t[15]=1
n=-s[12]
m=-s[13]
l=-s[14]
s=J.r(n)
r=!!s.$isaH
k=r?s.gaz(n):1
if(!!s.$isu){j=s.gm(n)
m=s.gn(n)
l=s.gJ(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
l=s.gJ(n)
n=j}else if(!(typeof n==="number")){n=null
m=null
l=null}s=C.c.G(t[0],n)
r=C.c.G(t[4],m)
q=C.c.G(t[8],l)
i=t[12]
h=C.c.G(t[1],n)
g=C.c.G(t[5],m)
f=C.c.G(t[9],l)
e=t[13]
d=C.c.G(t[2],n)
c=C.c.G(t[6],m)
b=C.c.G(t[10],l)
a=t[14]
a0=C.c.G(t[3],n)
a1=C.c.G(t[7],m)
a2=C.c.G(t[11],l)
a3=t[15]
t[12]=s+r+q+i*k
t[13]=h+g+f+e*k
t[14]=d+c+b+a*k
t[15]=a0+a1+a2+a3*k
a3=this.cx
a3.K(this.db)
a3.cg(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.fG.prototype={
dn:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gk(t)===s.gk(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gC(s),s=s.gw(s);s.p();){q=s.gq()
if(!t.F(0,q))C.a.l(r,q)}for(t=this.x,s=new P.bZ(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.p();){q=s.d
if(!t.B(0,q))C.a.l(r,q)}return r},
ds:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gC(b),s=s.gw(s),r=this.d,q=this.y,p=this.z,o=0;s.p();){n=s.gq()
switch(J.jQ(n,0)){case 117:if(q.F(0,n)){m=b.h(0,n)
if(p.F(0,n))H.bt("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$Z().h(0,n)
if(l==null)H.E("unknown "+n)
H.d(q.F(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.jk(r.a,k,m)
else if(!!J.r(m).$iskn)J.m4(r.a,k,m)
break
case"float":if(l.c===0)J.m2(r.a,k,m)
else if(!!J.r(m).$iseB)J.m3(r.a,k,m)
break
case"mat4":if(l.c===0){j=H.an(m,"$isR").a
J.k1(r.a,k,!1,j)}else if(!!J.r(m).$iseB)J.k1(r.a,k,!1,m)
else if(H.ax(!1))H.aI("bad unform: "+n)
break
case"mat3":if(l.c===0){j=H.an(m,"$isaW").a
J.k0(r.a,k,!1,j)}else if(!!J.r(m).$iseB)J.k0(r.a,k,!1,m)
else if(H.ax(!1))H.aI("bad unform: "+n)
break
case"vec4":j=l.c
i=r.a
if(j===0)J.k_(i,k,H.an(m,"$isaH").a)
else J.k_(i,k,m)
break
case"vec3":j=l.c
i=r.a
if(j===0)J.jZ(i,k,H.an(m,"$isu").a)
else J.jZ(i,k,m)
break
case"vec2":j=l.c
i=r.a
if(j===0)J.jY(i,k,H.an(m,"$isaw").a)
else J.jY(i,k,m)
break
case"sampler2D":case"sampler2DShadow":j=C.b.a_(33984,this.ch)
J.jR(r.a,j)
j=H.an(m,"$ismS").de()
J.jT(r.a,3553,j)
j=this.ch
J.jk(r.a,k,j)
this.ch=this.ch+1
break
case"samplerCube":H.d(n==="uCubeTexture")
j=C.b.a_(33984,this.ch)
J.jR(r.a,j)
j=H.an(m,"$ismS").de()
J.jT(r.a,34067,j)
j=this.ch
J.jk(r.a,k,j)
this.ch=this.ch+1
break
default:H.bt("Error: unknow uniform type: "+j)
H.d(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":j=J.z(m,!0)
i=r.a
if(j)J.ca(i,2929)
else J.jg(i,2929)
break
case"cStencilFunc":H.an(m,"$isdz")
j=m.a
i=r.a
if(j===1281)J.jg(i,2960)
else{J.ca(i,2960)
i=m.b
h=m.c
J.lZ(r.a,j,i,h)}break
case"cDepthWrite":J.lB(r.a,m)
break
case"cBlendEquation":H.an(m,"$isdy")
j=m.a
i=r.a
if(j===1281)J.jg(i,3042)
else{J.ca(i,3042)
i=m.b
h=m.c
J.lw(r.a,i,h)
J.lv(r.a,j)}break}++o
break}}s=Date.now()
""+o
new P.aB(1000*(s-new P.aP(t,!1).a)).j(0)},
da:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
Date.now()
t=this.d
J.m5(t.a,this.r)
this.ch=0
this.z.V(0)
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.F)(b),++r){q=b[r]
this.ds(q.a,q.bm())}s=this.Q
s.V(0)
for(p=J.aL(J.lL(a.cy));p.p();)s.l(0,p.gq())
o=this.dn()
if(o.length!==0)P.V("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.f(o)))
J.dP(a.d.a,a.e)
n=this.e.f.length>0
s=a.f
p=a.dd()
m=a.Q
l=a.z
if(n)J.lt(t.a,s)
if(m!==-1){k=t.a
if(l>1)J.lF(k,s,p,m,0,l)
else J.lE(k,s,p,m,0)}else{m=t.a
if(l>1)J.lD(m,s,0,p,l)
else J.lC(m,s,0,p)}if(n)J.lI(t.a)},
dj:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.F)(t),++o){n=t[o]
r.i(0,n,J.jX(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.F)(t),++o){n=t[o]
r.i(0,n,J.jX(q.a,p,n))}}}
G.y.prototype={
bl:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.d(!1)
return-1}}}
G.dt.prototype={
d1:function(a){var t,s,r,q
H.d(this.b==null)
for(t=this.c,s=this.x,r=0;r<1;++r){q=a[r]
H.d($.$get$Z().F(0,q))
H.d(!C.a.B(t,q))
C.a.l(t,q)
s.i(0,q,this.r);++this.r}C.a.bd(t)},
bg:function(a){var t,s,r,q
H.d(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.F)(a),++r){q=a[r]
if(H.ax($.$get$Z().F(0,q)))H.aI("missing uniform "+q)
H.d(!C.a.B(s,q))
C.a.l(s,q)}C.a.bd(s)},
dk:function(a,b){H.d(this.b==null)
this.b=this.dt(!0,a,b)},
bn:function(a){return this.dk(a,null)},
dt:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.d(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.F)(t),++o){n=t[o]
m=$.$get$Z().h(0,n)
C.a.l(q,"layout (location="+H.f(p.h(0,n))+") in "+m.a+" "+H.f(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,o=0;!1;++o){k=t[o]
m=$.$get$Z().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.f(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.F)(t),++o){k=t[o]
m=$.$get$Z().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.f(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.F)(t),++o){k=t[o]
m=$.$get$Z().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.f(k)+j+";")}C.a.l(q,"")
C.a.l(q,"void main(void) {")
C.a.L(q,b)
C.a.l(q,"}")
return C.a.al(q,"\n")}}
G.fQ.prototype={
eK:function(a0,a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
t=this.d.a
s=t[12]
r=t[13]
q=t[14]
a1=new T.u(new Float32Array(H.v(3)))
a1.a7(0,1,0)
p=this.e
o=p.a
o[0]=t[12]
o[1]=t[13]
o[2]=t[14]
o=new Float32Array(H.v(3))
n=new T.u(o)
n.K(p)
m=a0.a
o[0]=o[0]-m[0]
o[1]=o[1]-m[1]
o[2]=o[2]-m[2]
n.aX(0)
l=a1.c4(n)
l.aX(0)
k=n.c4(l)
k.aX(0)
j=l.aU(p)
i=k.aU(p)
p=n.aU(p)
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
aW:function(a){return this.eK(a,null)}}
R.dq.prototype={
cj:function(a){var t,s,r
t=this.db
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.V("size change "+H.f(s)+" "+H.f(r))
this.dx.d6(s,r)
this.z=s
this.Q=r}}
R.fU.prototype={
dw:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.n_("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.v).bw(r,"float")
r.setProperty(p,"left","")
p=C.v.bw(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.q.O(t,s)}return t},
dl:function(a,b,c){var t,s,r
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
J.je(this.a,s)
r=this.dw(b,c,90,30)
this.d=r
J.je(this.a,r)
t=t.createElement("div")
this.c=t
J.je(this.a,t)}}
R.fV.prototype={
dr:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.y.f0(s,2)+" fps"
t=this.c;(t&&C.q).cR(t,b)
r=C.b.E(30*C.y.eb(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.q).O(t,q)},
dq:function(a){return this.dr(a,"")}}
A.dh.prototype={
j:function(a){return"NODE["+this.a+"]"}}
A.ds.prototype={}
A.fF.prototype={
d9:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.d
s=this.r
r=this.z
q=this.Q
p=t.a
t=t.b
J.lu(p.a,36160,t)
H.d(r>0&&q>0)
J.m7(p.a,this.x,this.y,r,q)
if(s!==0)J.lx(p.a,s)
for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.F)(t),++o){n=t[o]
if(!n.c)continue
r=n.d
if(!r.c)continue
m=n.e
C.a.l(m,new G.dB(P.L(),"transforms",!1,!0))
l=new T.R(new Float32Array(16))
l.S()
for(q=n.f,p=q.length,k=0;k<q.length;q.length===p||(0,H.F)(q),++k)A.l9(r,q[k],l,a,m)
m.pop()}},
d8:function(){return this.d9(null)},
di:function(a,b,c){if(this.d==null)this.d=new G.eE(this.e,null,null,null,null)}}
D.eZ.prototype={
$1:function(a){this.a.av(0,W.n8(this.b.response))},
$S:function(){return{func:1,args:[,]}}}
A.iS.prototype={
$2:function(a,b){var t=536870911&a+J.ap(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(){return{func:1,args:[P.m,P.n]}}}
T.aW.prototype={
K:function(a){var t,s
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
j:function(a){return"[0] "+this.R(0).j(0)+"\n[1] "+this.R(1).j(0)+"\n[2] "+this.R(2).j(0)+"\n"},
h:function(a,b){return C.h.h(this.a,b)},
i:function(a,b,c){C.h.i(this.a,b,c)},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aW){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gu:function(a){return A.dM(this.a)},
R:function(a){var t,s
t=new Float32Array(H.v(3))
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.u(t)},
eh:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
if(g===0){this.K(a)
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
T.R.prototype={
a6:function(a,b,c){H.d(a<4)
H.d(b<4)
this.a[b*4+a]=c},
K:function(a){var t,s
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
j:function(a){return"[0] "+this.R(0).j(0)+"\n[1] "+this.R(1).j(0)+"\n[2] "+this.R(2).j(0)+"\n[3] "+this.R(3).j(0)+"\n"},
h:function(a,b){return C.h.h(this.a,b)},
i:function(a,b,c){C.h.i(this.a,b,c)},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.R){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gu:function(a){return A.dM(this.a)},
R:function(a){var t,s
t=new Float32Array(H.v(4))
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.aH(t)},
S:function(){var t=this.a
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
cg:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.aw.prototype={
j:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+"]"},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aw){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gu:function(a){return A.dM(this.a)},
h:function(a,b){return C.h.h(this.a,b)},
i:function(a,b,c){C.h.i(this.a,b,c)},
gk:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.u.prototype={
a7:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
K:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
j:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+"]"},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.u){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gu:function(a){return A.dM(this.a)},
h:function(a,b){return C.h.h(this.a,b)},
i:function(a,b,c){C.h.i(this.a,b,c)},
gk:function(a){var t,s,r
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
c4:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.u(new Float32Array(H.v(3)))
t.a7(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gJ:function(a){return this.a[2]}}
T.aH.prototype={
j:function(a){var t=this.a
return H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+","+H.f(t[3])},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aH){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gu:function(a){return A.dM(this.a)},
h:function(a,b){return C.h.h(this.a,b)},
i:function(a,b,c){C.h.i(this.a,b,c)},
gk:function(a){var t,s,r,q
t=this.a
s=t[0]
r=t[1]
q=t[2]
t=t[3]
return Math.sqrt(s*s+r*r+q*q+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gJ:function(a){return this.a[2]},
gaz:function(a){return this.a[3]}}
V.j2.prototype={
$1:function(a8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
t=this.a
t.c=a8+0
s=this.c
s.go=H.a_(s.go+0.001)
r=s.k4
if(r.h(0,37)!=null)s.go=H.a_(s.go+0.03)
else if(r.h(0,39)!=null)s.go=H.a_(s.go-0.03)
if(r.h(0,38)!=null)s.id=H.a_(s.id+0.03)
else if(r.h(0,40)!=null)s.id=H.a_(s.id-0.03)
if(r.h(0,33)!=null)s.fy=H.a_(s.fy*0.99)
else if(r.h(0,34)!=null)s.fy=H.a_(s.fy*1.01)
if(r.h(0,32)!=null){s.go=0
s.id=0}r=H.a_(C.c.ec(s.id,-1.4707963267948965,1.4707963267948965))
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
s.aW(p)
p=s.f.a
p[0]=m[2]
p[1]=m[6]
p[2]=m[10]
s=-s.k1
r=p[0]
q=p[1]
n=p[2]
n=Math.sqrt(r*r+q*q+n*n)
l=p[0]/n
k=p[1]/n
j=p[2]/n
n=Math.cos(s)
s=Math.sin(s)
i=1-n
h=l*l*i+n
p=j*s
g=l*k*i-p
q=k*s
f=l*j*i+q
e=k*l*i+p
d=k*k*i+n
s=l*s
c=k*j*i-s
b=j*l*i-q
a=j*k*i+s
a0=j*j*i+n
n=m[0]
s=m[4]
q=m[8]
p=m[1]
r=m[5]
a1=m[9]
a2=m[2]
a3=m[6]
a4=m[10]
a5=m[3]
a6=m[7]
a7=m[11]
m[0]=n*h+s*e+q*b
m[1]=p*h+r*e+a1*b
m[2]=a2*h+a3*e+a4*b
m[3]=a5*h+a6*e+a7*b
m[4]=n*g+s*d+q*a
m[5]=p*g+r*d+a1*a
m[6]=a2*g+a3*d+a4*a
m[7]=a5*g+a6*d+a7*a
m[8]=n*f+s*c+q*a0
m[9]=p*f+r*c+a1*a0
m[10]=a2*f+a3*c+a4*a0
m[11]=a5*f+a6*c+a7*a0
t.b.c=$.$get$lc().checked
t.a.c=$.$get$ld().checked
this.d.d8()
C.av.ge5(window).b1(this)
this.b.dq(t.c)},
$S:function(){return{func:1,v:true,args:[P.U]}}}
V.j3.prototype={
$1:function(a){var t,s,r,q,p,o,n,m,l,k,j,i
t=Y.mr(J.ba(a,0))
P.V(t)
s=this.b
r=s.d
q=r.d
r=r.e.x
p=new G.db(q,J.jV(q.a),1,P.L(),r,null,0,-1,null,null,P.L(),"meshdata:../asset/dragon/dragon.obj",!1,!0)
o=t.d
p.bh(G.eA(o,null))
n=t.dc()
p.y=J.dQ(q.a)
p.bj(n)
G.n1(t,p)
P.V(p)
n=new Float32Array(H.v(9))
m=new T.R(new Float32Array(H.v(16)))
m.S()
l=new T.R(new Float32Array(H.v(16)))
l.S()
k=new A.dh(this.c,p,[],new T.aW(n),m,l,new T.u(new Float32Array(H.v(3))),new T.u(new Float32Array(H.v(3))),new T.u(new Float32Array(H.v(3))),new T.u(new Float32Array(H.v(3))),"meshdata:../asset/dragon/dragon.obj",!1,!0)
l=this.a
l.a=k
m=new T.u(new Float32Array(H.v(3)))
m.a7(100,0,0)
k.aW(m)
m=l.a
H.d(m!=null)
s=s.f
C.a.l(s,m)
j=G.n0(new G.db(q,J.jV(q.a),1,P.L(),r,null,0,-1,null,null,P.L(),"meshdata:norm",!1,!0),G.eA(o,null),G.eA(H.c9(t.e.h(0,"aNormal"),"$isb",[T.u],"$asb"),null),0.05)
o=new Float32Array(H.v(9))
r=new T.R(new Float32Array(H.v(16)))
r.S()
q=new T.R(new Float32Array(H.v(16)))
q.S()
i=new A.dh(this.d,j,[],new T.aW(o),r,q,new T.u(new Float32Array(H.v(3))),new T.u(new Float32Array(H.v(3))),new T.u(new Float32Array(H.v(3))),new T.u(new Float32Array(H.v(3))),j.a,!1,!0)
l.b=i
q=new T.u(new Float32Array(H.v(3)))
q.a7(100,0,0)
i.aW(q)
l=l.b
H.d(l!=null)
C.a.l(s,l)
this.e.$1(0)},
$S:function(){return{func:1,args:[P.b]}}}
J.a.prototype.cX=J.a.prototype.j
J.bG.prototype.cZ=J.bG.prototype.j
P.W.prototype.cY=P.W.prototype.aA
W.a4.prototype.aD=W.a4.prototype.M
W.c0.prototype.d_=W.c0.prototype.U;(function installTearOffs(){installTearOff(H.b5.prototype,"geI",0,0,0,null,["$0"],["ax"],0)
installTearOff(H.al.prototype,"gcI",0,0,0,null,["$1"],["I"],2)
installTearOff(H.b4.prototype,"geo",0,0,0,null,["$1"],["W"],2)
installTearOff(P,"nh",1,0,0,null,["$1"],["mX"],1)
installTearOff(P,"ni",1,0,0,null,["$1"],["mY"],1)
installTearOff(P,"nj",1,0,0,null,["$1"],["mZ"],1)
installTearOff(P,"l6",1,0,0,null,["$0"],["nf"],0)
installTearOff(P.O.prototype,"gdF",0,0,0,null,["$2","$1"],["H","dG"],5)
installTearOff(P,"np",1,0,0,null,["$2"],["me"],7)
installTearOff(W,"nu",1,0,0,null,["$1"],["mk"],8)
installTearOff(W,"nv",1,0,0,null,["$4"],["n2"],4)
installTearOff(W,"nw",1,0,0,null,["$4"],["n3"],4)
installTearOff(W.di.prototype,"gaY",0,1,0,null,["$0"],["aZ"],3)
installTearOff(W.dA.prototype,"gaY",0,1,0,null,["$0"],["aZ"],3)
installTearOff(R.dq.prototype,"geT",0,0,0,null,["$1"],["cj"],6)
installTearOff(V,"lp",1,0,0,null,["$0"],["nE"],0)})();(function inheritance(){inherit(P.n,null)
var t=P.n
inherit(H.jr,t)
inherit(J.a,t)
inherit(J.dU,t)
inherit(P.W,t)
inherit(H.d9,t)
inherit(P.d5,t)
inherit(H.cm,t)
inherit(H.bc,t)
inherit(H.ic,t)
inherit(H.b5,t)
inherit(H.hM,t)
inherit(H.b6,t)
inherit(H.ib,t)
inherit(H.hF,t)
inherit(H.bl,t)
inherit(H.hb,t)
inherit(H.aq,t)
inherit(H.al,t)
inherit(H.b4,t)
inherit(H.fE,t)
inherit(H.hi,t)
inherit(P.be,t)
inherit(H.dJ,t)
inherit(H.aF,t)
inherit(H.ah,t)
inherit(H.eV,t)
inherit(H.eX,t)
inherit(H.eR,t)
inherit(H.id,t)
inherit(P.hH,t)
inherit(P.dG,t)
inherit(P.O,t)
inherit(P.dD,t)
inherit(P.fY,t)
inherit(P.fZ,t)
inherit(P.bb,t)
inherit(P.iD,t)
inherit(P.fN,t)
inherit(P.i9,t)
inherit(P.bZ,t)
inherit(P.bP,t)
inherit(P.w,t)
inherit(P.ia,t)
inherit(P.ay,t)
inherit(P.H,t)
inherit(P.aP,t)
inherit(P.U,t)
inherit(P.aB,t)
inherit(P.dv,t)
inherit(P.hR,t)
inherit(P.bD,t)
inherit(P.ec,t)
inherit(P.b,t)
inherit(P.aE,t)
inherit(P.aX,t)
inherit(P.bR,t)
inherit(P.q,t)
inherit(P.bS,t)
inherit(W.e1,t)
inherit(W.hE,t)
inherit(W.bY,t)
inherit(W.B,t)
inherit(W.dk,t)
inherit(W.c0,t)
inherit(W.iv,t)
inherit(W.cn,t)
inherit(W.dj,t)
inherit(W.ip,t)
inherit(W.dK,t)
inherit(P.hw,t)
inherit(P.ig,t)
inherit(G.f8,t)
inherit(G.e_,t)
inherit(G.eE,t)
inherit(G.ev,t)
inherit(G.ew,t)
inherit(G.eH,t)
inherit(G.dz,t)
inherit(G.dy,t)
inherit(G.y,t)
inherit(G.dt,t)
inherit(R.fU,t)
inherit(T.aW,t)
inherit(T.R,t)
inherit(T.aw,t)
inherit(T.u,t)
inherit(T.aH,t)
t=J.a
inherit(J.eP,t)
inherit(J.eQ,t)
inherit(J.bG,t)
inherit(J.aR,t)
inherit(J.bh,t)
inherit(J.aS,t)
inherit(H.bJ,t)
inherit(H.bj,t)
inherit(W.h,t)
inherit(W.a2,t)
inherit(W.cd,t)
inherit(W.dY,t)
inherit(W.A,t)
inherit(W.cr,t)
inherit(W.e3,t)
inherit(W.e4,t)
inherit(W.e5,t)
inherit(W.ci,t)
inherit(W.cj,t)
inherit(W.ck,t)
inherit(W.cC,t)
inherit(W.e8,t)
inherit(W.i,t)
inherit(W.cB,t)
inherit(W.a6,t)
inherit(W.eI,t)
inherit(W.cE,t)
inherit(W.f_,t)
inherit(W.f5,t)
inherit(W.a7,t)
inherit(W.cA,t)
inherit(W.fh,t)
inherit(W.di,t)
inherit(W.cG,t)
inherit(W.fq,t)
inherit(W.bm,t)
inherit(W.a8,t)
inherit(W.cy,t)
inherit(W.ak,t)
inherit(W.dn,t)
inherit(W.aa,t)
inherit(W.cx,t)
inherit(W.ab,t)
inherit(W.fW,t)
inherit(W.X,t)
inherit(W.cw,t)
inherit(W.ha,t)
inherit(W.ad,t)
inherit(W.cH,t)
inherit(W.hf,t)
inherit(W.dA,t)
inherit(W.hm,t)
inherit(W.hr,t)
inherit(W.hG,t)
inherit(W.cv,t)
inherit(W.cL,t)
inherit(W.cK,t)
inherit(W.cF,t)
inherit(W.cJ,t)
inherit(W.cI,t)
inherit(W.iB,t)
inherit(W.iC,t)
inherit(P.ar,t)
inherit(P.cu,t)
inherit(P.as,t)
inherit(P.cz,t)
inherit(P.fw,t)
inherit(P.fx,t)
inherit(P.fC,t)
inherit(P.cs,t)
inherit(P.at,t)
inherit(P.cD,t)
inherit(P.hq,t)
inherit(P.dV,t)
inherit(P.fH,t)
inherit(P.fI,t)
inherit(P.iA,t)
inherit(P.ct,t)
t=J.bG
inherit(J.fu,t)
inherit(J.b1,t)
inherit(J.aT,t)
inherit(J.jq,J.aR)
t=J.bh
inherit(J.d7,t)
inherit(J.d6,t)
t=P.W
inherit(H.c,t)
inherit(H.da,t)
inherit(H.dC,t)
t=H.c
inherit(H.bi,t)
inherit(H.eW,t)
inherit(H.eb,H.da)
t=P.d5
inherit(H.f0,t)
inherit(H.ht,t)
t=H.bi
inherit(H.bH,t)
inherit(P.eY,t)
t=H.bc
inherit(H.jb,t)
inherit(H.jc,t)
inherit(H.i7,t)
inherit(H.hN,t)
inherit(H.eL,t)
inherit(H.eM,t)
inherit(H.ie,t)
inherit(H.hc,t)
inherit(H.hd,t)
inherit(H.jd,t)
inherit(H.iX,t)
inherit(H.iY,t)
inherit(H.iZ,t)
inherit(H.j_,t)
inherit(H.j0,t)
inherit(H.h6,t)
inherit(H.eS,t)
inherit(H.iT,t)
inherit(H.iU,t)
inherit(H.iV,t)
inherit(P.hB,t)
inherit(P.hA,t)
inherit(P.hC,t)
inherit(P.hD,t)
inherit(P.eG,t)
inherit(P.eF,t)
inherit(P.hS,t)
inherit(P.i_,t)
inherit(P.hW,t)
inherit(P.hX,t)
inherit(P.hY,t)
inherit(P.hU,t)
inherit(P.hZ,t)
inherit(P.hT,t)
inherit(P.i2,t)
inherit(P.i3,t)
inherit(P.i1,t)
inherit(P.i0,t)
inherit(P.h_,t)
inherit(P.h0,t)
inherit(P.iG,t)
inherit(P.ij,t)
inherit(P.ii,t)
inherit(P.ik,t)
inherit(P.f1,t)
inherit(P.e9,t)
inherit(P.ea,t)
inherit(W.iH,t)
inherit(W.fX,t)
inherit(W.hu,t)
inherit(W.hQ,t)
inherit(W.fj,t)
inherit(W.fi,t)
inherit(W.ir,t)
inherit(W.is,t)
inherit(W.iy,t)
inherit(W.iz,t)
inherit(P.hy,t)
inherit(P.iI,t)
inherit(P.iJ,t)
inherit(P.iK,t)
inherit(B.j6,t)
inherit(B.j7,t)
inherit(B.j8,t)
inherit(B.j9,t)
inherit(B.ja,t)
inherit(B.fm,t)
inherit(B.fn,t)
inherit(B.fo,t)
inherit(B.fp,t)
inherit(D.eZ,t)
inherit(A.iS,t)
inherit(V.j2,t)
inherit(V.j3,t)
t=H.hF
inherit(H.bo,t)
inherit(H.c1,t)
t=P.be
inherit(H.dl,t)
inherit(H.eT,t)
inherit(H.hl,t)
inherit(H.hk,t)
inherit(H.dZ,t)
inherit(H.fK,t)
inherit(P.cc,t)
inherit(P.bk,t)
inherit(P.af,t)
inherit(P.t,t)
inherit(P.bV,t)
inherit(P.aj,t)
inherit(P.a3,t)
inherit(P.e2,t)
t=H.h6
inherit(H.fT,t)
inherit(H.bv,t)
inherit(H.hz,P.cc)
t=H.bj
inherit(H.f9,t)
inherit(H.dd,t)
t=H.dd
inherit(H.bL,t)
inherit(H.bK,t)
inherit(H.bM,H.bL)
inherit(H.de,H.bM)
inherit(H.bN,H.bK)
inherit(H.df,H.bN)
t=H.de
inherit(H.dc,t)
inherit(H.fa,t)
t=H.df
inherit(H.fb,t)
inherit(H.fc,t)
inherit(H.fd,t)
inherit(H.fe,t)
inherit(H.ff,t)
inherit(H.dg,t)
inherit(H.fg,t)
t=P.hH
inherit(P.dE,t)
inherit(P.iw,t)
inherit(P.ih,P.iD)
inherit(P.dH,H.ah)
inherit(P.fM,P.fN)
inherit(P.i6,P.fM)
inherit(P.i8,P.i6)
inherit(P.d8,P.bP)
t=P.U
inherit(P.M,t)
inherit(P.m,t)
t=P.af
inherit(P.dp,t)
inherit(P.eK,t)
t=W.h
inherit(W.p,t)
inherit(W.bz,t)
inherit(W.e0,t)
inherit(W.ey,t)
inherit(W.bF,t)
inherit(W.bI,t)
inherit(W.fz,t)
inherit(W.dr,t)
inherit(W.fO,t)
inherit(W.a9,t)
inherit(W.by,t)
inherit(W.ac,t)
inherit(W.Y,t)
inherit(W.bx,t)
inherit(W.ho,t)
inherit(W.hs,t)
inherit(W.bW,t)
inherit(W.hv,t)
inherit(W.b3,t)
inherit(W.iq,t)
t=W.p
inherit(W.a4,t)
inherit(W.aO,t)
inherit(W.aQ,t)
inherit(W.ch,t)
inherit(W.hJ,t)
t=W.a4
inherit(W.j,t)
inherit(P.G,t)
t=W.j
inherit(W.dS,t)
inherit(W.dT,t)
inherit(W.aN,t)
inherit(W.ce,t)
inherit(W.cg,t)
inherit(W.eD,t)
inherit(W.co,t)
inherit(W.bg,t)
inherit(W.fL,t)
inherit(W.dw,t)
inherit(W.h4,t)
inherit(W.h5,t)
inherit(W.bT,t)
inherit(W.i5,t)
inherit(W.bC,W.bz)
inherit(W.dW,W.bC)
inherit(W.bd,W.cr)
inherit(W.e6,W.cj)
inherit(W.d4,W.cC)
inherit(W.e7,W.d4)
inherit(W.a5,W.cd)
inherit(W.d2,W.cB)
inherit(W.ex,W.d2)
inherit(W.cQ,W.cE)
inherit(W.bE,W.cQ)
inherit(W.cp,W.aQ)
inherit(W.cq,W.bF)
inherit(W.aG,W.i)
t=W.aG
inherit(W.aU,t)
inherit(W.N,t)
inherit(W.b0,t)
inherit(W.f6,W.bI)
inherit(W.cX,W.cA)
inherit(W.f7,W.cX)
inherit(W.T,P.d8)
inherit(W.cN,W.cG)
inherit(W.bO,W.cN)
t=W.bm
inherit(W.ft,t)
inherit(W.fJ,t)
inherit(W.hh,t)
inherit(W.cZ,W.cy)
inherit(W.fv,W.cZ)
inherit(W.fy,W.ak)
inherit(W.bB,W.by)
inherit(W.fP,W.bB)
inherit(W.cV,W.cx)
inherit(W.fR,W.cV)
inherit(W.cR,W.cw)
inherit(W.h8,W.cR)
inherit(W.bA,W.bx)
inherit(W.h9,W.bA)
inherit(W.d0,W.cH)
inherit(W.he,W.d0)
inherit(W.b2,W.N)
inherit(W.d1,W.cv)
inherit(W.dF,W.d1)
inherit(W.d_,W.cL)
inherit(W.hI,W.d_)
inherit(W.hK,W.ck)
inherit(W.cM,W.cK)
inherit(W.i4,W.cM)
inherit(W.d3,W.cF)
inherit(W.dI,W.d3)
inherit(W.cT,W.cJ)
inherit(W.it,W.cT)
inherit(W.cP,W.cI)
inherit(W.iu,W.cP)
inherit(W.hL,W.hE)
inherit(W.hO,P.fY)
inherit(W.jC,W.hO)
inherit(W.hP,P.fZ)
inherit(W.ix,W.c0)
inherit(P.hx,P.hw)
inherit(P.J,P.ig)
t=P.G
inherit(P.aD,t)
inherit(P.aM,t)
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
inherit(P.eu,t)
inherit(P.ez,t)
inherit(P.f2,t)
inherit(P.f3,t)
inherit(P.fr,t)
inherit(P.bQ,t)
inherit(P.h3,t)
inherit(P.hp,t)
inherit(P.bX,t)
inherit(P.il,t)
inherit(P.im,t)
inherit(P.io,t)
t=P.aD
inherit(P.dR,t)
inherit(P.eC,t)
inherit(P.ag,t)
inherit(P.eJ,t)
inherit(P.h2,t)
inherit(P.dx,t)
inherit(P.hn,t)
inherit(P.cO,P.cu)
inherit(P.eU,P.cO)
inherit(P.cW,P.cz)
inherit(P.fk,P.cW)
inherit(P.fD,P.ag)
inherit(P.cU,P.cs)
inherit(P.h1,P.cU)
t=P.dx
inherit(P.h7,t)
inherit(P.bU,t)
inherit(P.cS,P.cD)
inherit(P.hg,P.cS)
inherit(P.cY,P.ct)
inherit(P.fS,P.cY)
t=G.f8
inherit(G.fQ,t)
inherit(G.dB,t)
inherit(G.db,t)
inherit(G.fG,t)
inherit(A.fF,t)
inherit(A.ds,t)
t=G.fQ
inherit(G.dX,t)
inherit(A.dh,t)
inherit(B.fl,G.dX)
t=G.dB
inherit(G.f4,t)
inherit(G.fs,t)
inherit(R.dq,A.fF)
inherit(R.fV,R.fU)
mixin(H.bK,P.w)
mixin(H.bL,P.w)
mixin(H.bM,H.cm)
mixin(H.bN,H.cm)
mixin(P.bP,P.w)
mixin(W.bx,P.w)
mixin(W.by,P.w)
mixin(W.bz,P.w)
mixin(W.bA,W.B)
mixin(W.bB,W.B)
mixin(W.bC,W.B)
mixin(W.cr,W.e1)
mixin(W.cL,P.w)
mixin(W.cx,P.w)
mixin(W.cE,P.w)
mixin(W.cF,P.w)
mixin(W.cG,P.w)
mixin(W.cH,P.w)
mixin(W.cI,P.w)
mixin(W.cJ,P.w)
mixin(W.cK,P.w)
mixin(W.cv,P.w)
mixin(W.cw,P.w)
mixin(W.cy,P.w)
mixin(W.cA,P.w)
mixin(W.cB,P.w)
mixin(W.cC,P.w)
mixin(W.cM,W.B)
mixin(W.cN,W.B)
mixin(W.cZ,W.B)
mixin(W.cX,W.B)
mixin(W.d1,W.B)
mixin(W.d2,W.B)
mixin(W.d3,W.B)
mixin(W.d4,W.B)
mixin(W.cP,W.B)
mixin(W.cQ,W.B)
mixin(W.cR,W.B)
mixin(W.cT,W.B)
mixin(W.cV,W.B)
mixin(W.d_,W.B)
mixin(W.d0,W.B)
mixin(P.cu,P.w)
mixin(P.cs,P.w)
mixin(P.cz,P.w)
mixin(P.cD,P.w)
mixin(P.cO,W.B)
mixin(P.cW,W.B)
mixin(P.cS,W.B)
mixin(P.cU,W.B)
mixin(P.ct,P.w)
mixin(P.cY,W.B)})();(function constants(){C.p=W.aN.prototype
C.K=W.ce.prototype
C.v=W.bd.prototype
C.q=W.cg.prototype
C.L=W.ci.prototype
C.M=W.co.prototype
C.k=W.cp.prototype
C.x=W.cq.prototype
C.N=J.a.prototype
C.a=J.aR.prototype
C.y=J.d6.prototype
C.b=J.d7.prototype
C.c=J.bh.prototype
C.i=J.aS.prototype
C.U=J.aT.prototype
C.h=H.dc.prototype
C.C=W.bO.prototype
C.D=J.fu.prototype
C.E=W.dn.prototype
C.J=W.dw.prototype
C.u=J.b1.prototype
C.au=W.b2.prototype
C.av=W.bW.prototype
C.d=new P.ih()
C.w=new P.aB(0)
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
C.z=function(hooks) { return hooks; }

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
C.A=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.V=H.D(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.q])
C.W=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.B=makeConstList([])
C.r=H.D(makeConstList(["bind","if","ref","repeat","syntax"]),[P.q])
C.t=H.D(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.q])
C.X=new G.y("vec3","vertex btangents",0)
C.e=new G.y("vec3","",0)
C.Y=new G.y("vec4","delta from light",0)
C.o=new G.y("","",0)
C.F=new G.y("vec3","vertex coordinates",0)
C.Z=new G.y("vec3","vertex binormals",0)
C.G=new G.y("vec4","for wireframe",0)
C.a_=new G.y("vec4","per vertex color",0)
C.a0=new G.y("float","for normal maps",0)
C.l=new G.y("mat4","",0)
C.a2=new G.y("mat4","",4)
C.a1=new G.y("mat4","",128)
C.f=new G.y("float","",0)
C.a3=new G.y("float","",4)
C.a4=new G.y("float","depth for shadowmaps",0)
C.j=new G.y("sampler2D","",0)
C.a5=new G.y("float","for bump maps",0)
C.a6=new G.y("vec2","texture uvs",0)
C.a7=new G.y("float","time since program start in sec",0)
C.m=new G.y("vec2","",0)
C.a8=new G.y("samplerCube","",0)
C.n=new G.y("vec4","",0)
C.a9=new G.y("vec3","vertex normals",0)
C.aa=new G.y("sampler2DShadow","",0)
C.H=new G.y("vec3","per vertex color",0)
C.I=new G.y("mat3","",0)
C.ab=new G.y("vec3","vertex tangents",0)
C.ac=H.K("nS")
C.ad=H.K("nT")
C.ae=H.K("eB")
C.af=H.K("nU")
C.ag=H.K("nV")
C.ah=H.K("kn")
C.ai=H.K("nW")
C.aj=H.K("kq")
C.ak=H.K("aX")
C.al=H.K("q")
C.am=H.K("kQ")
C.an=H.K("kR")
C.ao=H.K("nY")
C.ap=H.K("kS")
C.aq=H.K("ay")
C.ar=H.K("M")
C.as=H.K("m")
C.at=H.K("U")})();(function staticFields(){$.ky="$cachedFunction"
$.kz="$cachedInvocation"
$.k8=null
$.k6=null
$.jE=!1
$.jI=null
$.l3=null
$.lk=null
$.iN=null
$.iW=null
$.jJ=null
$.bp=null
$.c2=null
$.c3=null
$.jF=!1
$.x=C.d
$.km=0
$.aC=null
$.jn=null
$.kl=null
$.kk=null
$.ki=null
$.kh=null
$.kg=null
$.kf=null
$.nl=0
$.nm=0
$.jN=0
$.li=0
$.c7=0
$.c8=0
$.nL=!1
$.lb=0})();(function lazyInitializers(){lazy($,"ke","$get$ke",function(){return H.lf("_$dart_dartClosure")})
lazy($,"js","$get$js",function(){return H.lf("_$dart_js")})
lazy($,"ko","$get$ko",function(){return H.mw()})
lazy($,"kp","$get$kp",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.km
$.km=t+1
t="expando$key$"+t}return new P.ec(null,t,[P.m])})
lazy($,"kF","$get$kF",function(){return H.au(H.hj({
toString:function(){return"$receiver$"}}))})
lazy($,"kG","$get$kG",function(){return H.au(H.hj({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"kH","$get$kH",function(){return H.au(H.hj(null))})
lazy($,"kI","$get$kI",function(){return H.au(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kM","$get$kM",function(){return H.au(H.hj(void 0))})
lazy($,"kN","$get$kN",function(){return H.au(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kK","$get$kK",function(){return H.au(H.kL(null))})
lazy($,"kJ","$get$kJ",function(){return H.au(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"kP","$get$kP",function(){return H.au(H.kL(void 0))})
lazy($,"kO","$get$kO",function(){return H.au(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"jB","$get$jB",function(){return P.mW()})
lazy($,"c4","$get$c4",function(){return[]})
lazy($,"kd","$get$kd",function(){return{}})
lazy($,"kX","$get$kX",function(){return P.ju(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"jD","$get$jD",function(){return P.L()})
lazy($,"iM","$get$iM",function(){return P.kt(P.m,P.ay)})
lazy($,"c6","$get$c6",function(){return P.kt(P.q,P.ay)})
lazy($,"kD","$get$kD",function(){return new G.dz(1281,0,4294967295)})
lazy($,"k4","$get$k4",function(){return new G.dy(1281,1281,1281)})
lazy($,"Z","$get$Z",function(){return P.aV(["cBlendEquation",C.o,"cDepthWrite",C.o,"cDepthTest",C.o,"cStencilFunc",C.o,"tPosition",C.e,"tSpeed",C.e,"tForce",C.e,"aColors",C.H,"aColorAlpha",C.a_,"aPosition",C.F,"aTexUV",C.a6,"aNormal",C.a9,"aBinormal",C.Z,"aCenter",C.G,"aPointSize",C.f,"aBoneIndex",C.n,"aBoneWeight",C.n,"aTangent",C.ab,"aBitangent",C.X,"iaRotation",C.n,"iaTranslation",C.e,"iaScale",C.e,"vColor",C.H,"vTexUV",C.m,"vLightWeighting",C.e,"vNormal",C.e,"vPosition",C.F,"vPositionFromLight",C.Y,"vCenter",C.G,"vDepth",C.a4,"uTransformationMatrix",C.l,"uModelMatrix",C.l,"uNormalMatrix",C.I,"uConvolutionMatrix",C.I,"uPerspectiveViewMatrix",C.l,"uLightPerspectiveViewMatrix",C.l,"uShadowMap",C.aa,"uTexture",C.j,"uTexture2",C.j,"uTexture3",C.j,"uTexture4",C.j,"uSpecularMap",C.j,"uNormalMap",C.j,"uBumpMap",C.j,"uDepthMap",C.j,"uCubeTexture",C.a8,"uAnimationTable",C.j,"uTime",C.a7,"uCameraNear",C.f,"uCameraFar",C.f,"uFogNear",C.f,"uFogFar",C.f,"uPointSize",C.f,"uScale",C.f,"uAngle",C.f,"uCanvasSize",C.m,"uCenter2",C.m,"uCutOff",C.f,"uShininess",C.f,"uShadowBias",C.f,"uOpacity",C.f,"uColor",C.e,"uAmbientDiffuse",C.e,"uColorEmissive",C.e,"uColorSpecular",C.e,"uColorDiffuse",C.e,"uColorAlpha",C.n,"uColorAlpha2",C.n,"uEyePosition",C.e,"uMaterial",C.l,"uRange",C.m,"uDirection",C.m,"uBoneMatrices",C.a1,"uLightDescs",C.a2,"uLightCount",C.f,"uLightTypes",C.a3,"uBumpScale",C.a5,"uNormalScale",C.a0])})
lazy($,"kb","$get$kb",function(){return T.kT(0,0,1)})
lazy($,"kc","$get$kc",function(){return T.kT(1,1,0)})
lazy($,"lm","$get$lm",function(){var t=new G.dt("SolidColor",null,[],[],[],[],0,P.L())
t.d1(["aPosition"])
t.bg(["uPerspectiveViewMatrix","uModelMatrix"])
t.bn(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"])
return t})
lazy($,"ll","$get$ll",function(){var t=new G.dt("SolidColorF",null,[],[],[],[],0,P.L())
t.bg(["uColor"])
t.bn(["oFragColor = vec4( uColor, 1.0 );"])
return t})
lazy($,"lc","$get$lc",function(){return H.an(C.k.b_(W.l8(),"#normals"),"$isbg")})
lazy($,"ld","$get$ld",function(){return H.an(C.k.b_(W.l8(),"#wires"),"$isbg")})})()
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
mangledGlobalNames:{m:"int",M:"double",U:"num",q:"String",ay:"bool",aX:"Null",b:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.p},{func:1,ret:P.ay,args:[W.a4,P.q,P.q,W.bY]},{func:1,v:true,args:[P.n],opt:[P.bR]},{func:1,v:true,args:[W.i]},{func:1,ret:P.m,args:[P.H,P.H]},{func:1,ret:P.q,args:[W.h]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationTimeline:J.a,AppBannerPromptResult:J.a,BarProp:J.a,Body:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CHROMIUMValuebuffer:J.a,CircularGeofencingRegion:J.a,Client:J.a,Clients:J.a,CompositorProxy:J.a,ConsoleBase:J.a,Coordinates:J.a,Credential:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMStringMap:J.a,EffectModel:J.a,Entry:J.a,FederatedCredential:J.a,FileEntry:J.a,FileError:J.a,Stream:J.a,DOMFileSystem:J.a,FontFace:J.a,FormData:J.a,GamepadButton:J.a,Geofencing:J.a,GeofencingRegion:J.a,Geolocation:J.a,Geoposition:J.a,Headers:J.a,HMDVRDevice:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageData:J.a,InjectedScriptHost:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,KeyframeEffect:J.a,MediaDeviceInfo:J.a,MediaDevices:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaMetadata:J.a,MediaSession:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigatorStorageUtils:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,OffscreenCanvas:J.a,PasswordCredential:J.a,PerformanceCompositeTiming:J.a,PerformanceEntry:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformanceRenderTiming:J.a,PerformanceResourceTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PositionError:J.a,PositionSensorVRDevice:J.a,Presentation:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,ReadableByteStream:J.a,ReadableByteStreamReader:J.a,ReadableStreamReader:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,Selection:J.a,ServicePort:J.a,SharedArrayBuffer:J.a,SourceInfo:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StorageInfo:J.a,StorageManager:J.a,StorageQuota:J.a,StyleMedia:J.a,StylePropertyMap:J.a,SyncManager:J.a,TextMetrics:J.a,TrackDefault:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRDevice:J.a,VREyeParameters:J.a,VRFieldOfView:J.a,VRPositionState:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkerConsole:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothAdvertisingData:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,NFC:J.a,PagePopupController:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WebKitCSSMatrix:J.a,Worklet:J.a,WorkletGlobalScope:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPreserveAspectRatio:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,CHROMIUMSubscribeUniform:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTDisjointTimerQuery:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bJ,ArrayBufferView:H.bj,DataView:H.f9,Float32Array:H.dc,Float64Array:H.fa,Int16Array:H.fb,Int32Array:H.fc,Int8Array:H.fd,Uint16Array:H.fe,Uint32Array:H.ff,Uint8ClampedArray:H.dg,CanvasPixelArray:H.dg,Uint8Array:H.fg,HTMLAudioElement:W.j,HTMLBRElement:W.j,HTMLBaseElement:W.j,HTMLButtonElement:W.j,HTMLContentElement:W.j,HTMLDListElement:W.j,HTMLDataListElement:W.j,HTMLDetailsElement:W.j,HTMLDialogElement:W.j,HTMLEmbedElement:W.j,HTMLFieldSetElement:W.j,HTMLHRElement:W.j,HTMLHeadingElement:W.j,HTMLHtmlElement:W.j,HTMLIFrameElement:W.j,HTMLImageElement:W.j,HTMLKeygenElement:W.j,HTMLLIElement:W.j,HTMLLabelElement:W.j,HTMLLegendElement:W.j,HTMLLinkElement:W.j,HTMLMapElement:W.j,HTMLMediaElement:W.j,HTMLMenuElement:W.j,HTMLMenuItemElement:W.j,HTMLMetaElement:W.j,HTMLMeterElement:W.j,HTMLModElement:W.j,HTMLOListElement:W.j,HTMLObjectElement:W.j,HTMLOptGroupElement:W.j,HTMLOptionElement:W.j,HTMLOutputElement:W.j,HTMLParagraphElement:W.j,HTMLParamElement:W.j,HTMLPictureElement:W.j,HTMLPreElement:W.j,HTMLProgressElement:W.j,HTMLQuoteElement:W.j,HTMLScriptElement:W.j,HTMLShadowElement:W.j,HTMLSlotElement:W.j,HTMLSourceElement:W.j,HTMLSpanElement:W.j,HTMLStyleElement:W.j,HTMLTableCaptionElement:W.j,HTMLTableCellElement:W.j,HTMLTableDataCellElement:W.j,HTMLTableHeaderCellElement:W.j,HTMLTableColElement:W.j,HTMLTextAreaElement:W.j,HTMLTitleElement:W.j,HTMLTrackElement:W.j,HTMLUListElement:W.j,HTMLUnknownElement:W.j,HTMLVideoElement:W.j,HTMLDirectoryElement:W.j,HTMLFontElement:W.j,HTMLFrameElement:W.j,HTMLMarqueeElement:W.j,HTMLElement:W.j,HTMLAnchorElement:W.dS,HTMLAreaElement:W.dT,AudioTrack:W.a2,AudioTrackList:W.dW,Blob:W.cd,HTMLBodyElement:W.aN,HTMLCanvasElement:W.ce,CanvasRenderingContext2D:W.dY,CDATASection:W.aO,CharacterData:W.aO,Comment:W.aO,ProcessingInstruction:W.aO,Text:W.aO,CompositorWorker:W.e0,CSSCharsetRule:W.A,CSSFontFaceRule:W.A,CSSGroupingRule:W.A,CSSImportRule:W.A,CSSKeyframeRule:W.A,MozCSSKeyframeRule:W.A,WebKitCSSKeyframeRule:W.A,CSSKeyframesRule:W.A,MozCSSKeyframesRule:W.A,WebKitCSSKeyframesRule:W.A,CSSMediaRule:W.A,CSSNamespaceRule:W.A,CSSPageRule:W.A,CSSRule:W.A,CSSStyleRule:W.A,CSSSupportsRule:W.A,CSSViewportRule:W.A,CSSStyleDeclaration:W.bd,MSStyleCSSProperties:W.bd,CSS2Properties:W.bd,DataTransferItemList:W.e3,DeviceAcceleration:W.e4,HTMLDivElement:W.cg,XMLDocument:W.aQ,Document:W.aQ,DocumentFragment:W.ch,ShadowRoot:W.ch,DOMException:W.e5,DOMImplementation:W.ci,DOMPoint:W.e6,DOMPointReadOnly:W.cj,DOMRectReadOnly:W.ck,DOMStringList:W.e7,DOMTokenList:W.e8,Element:W.a4,AnimationEvent:W.i,AnimationPlayerEvent:W.i,ApplicationCacheErrorEvent:W.i,AutocompleteErrorEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceLightEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,GamepadEvent:W.i,GeofencingEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RelatedEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCIceCandidateEvent:W.i,RTCPeerConnectionIceEvent:W.i,SecurityPolicyViolationEvent:W.i,ServicePortConnectEvent:W.i,ServiceWorkerMessageEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,Animation:W.h,ApplicationCache:W.h,DOMApplicationCache:W.h,OfflineResourceList:W.h,BatteryManager:W.h,CanvasCaptureMediaStreamTrack:W.h,CrossOriginServiceWorkerClient:W.h,EventSource:W.h,FileReader:W.h,FontFaceSet:W.h,MediaKeySession:W.h,MediaQueryList:W.h,MediaRecorder:W.h,MediaSource:W.h,MediaStream:W.h,MediaStreamTrack:W.h,MessagePort:W.h,MIDIAccess:W.h,NetworkInformation:W.h,Notification:W.h,Performance:W.h,PermissionStatus:W.h,PresentationAvailability:W.h,PresentationReceiver:W.h,PresentationRequest:W.h,RTCDTMFSender:W.h,RTCPeerConnection:W.h,webkitRTCPeerConnection:W.h,mozRTCPeerConnection:W.h,ScreenOrientation:W.h,ServicePortCollection:W.h,ServiceWorkerContainer:W.h,ServiceWorkerRegistration:W.h,SpeechRecognition:W.h,SpeechSynthesis:W.h,SpeechSynthesisUtterance:W.h,WorkerPerformance:W.h,BluetoothDevice:W.h,BluetoothRemoteGATTCharacteristic:W.h,USB:W.h,IDBDatabase:W.h,IDBOpenDBRequest:W.h,IDBVersionChangeRequest:W.h,IDBRequest:W.h,IDBTransaction:W.h,AnalyserNode:W.h,RealtimeAnalyserNode:W.h,AudioBufferSourceNode:W.h,AudioContext:W.h,webkitAudioContext:W.h,AudioDestinationNode:W.h,AudioNode:W.h,AudioSourceNode:W.h,BiquadFilterNode:W.h,ChannelMergerNode:W.h,AudioChannelMerger:W.h,ChannelSplitterNode:W.h,AudioChannelSplitter:W.h,ConvolverNode:W.h,DelayNode:W.h,DynamicsCompressorNode:W.h,GainNode:W.h,AudioGainNode:W.h,IIRFilterNode:W.h,MediaElementAudioSourceNode:W.h,MediaStreamAudioDestinationNode:W.h,MediaStreamAudioSourceNode:W.h,OfflineAudioContext:W.h,OscillatorNode:W.h,Oscillator:W.h,PannerNode:W.h,AudioPannerNode:W.h,webkitAudioPannerNode:W.h,ScriptProcessorNode:W.h,JavaScriptAudioNode:W.h,StereoPannerNode:W.h,WaveShaperNode:W.h,EventTarget:W.h,File:W.a5,FileList:W.ex,FileWriter:W.ey,HTMLFormElement:W.eD,Gamepad:W.a6,HTMLHeadElement:W.co,History:W.eI,HTMLCollection:W.bE,HTMLFormControlsCollection:W.bE,HTMLOptionsCollection:W.bE,HTMLDocument:W.cp,XMLHttpRequest:W.cq,XMLHttpRequestUpload:W.bF,XMLHttpRequestEventTarget:W.bF,HTMLInputElement:W.bg,KeyboardEvent:W.aU,Location:W.f_,MediaList:W.f5,MIDIOutput:W.f6,MIDIInput:W.bI,MIDIPort:W.bI,MimeType:W.a7,MimeTypeArray:W.f7,PointerEvent:W.N,MouseEvent:W.N,DragEvent:W.N,Navigator:W.fh,Attr:W.p,Node:W.p,NodeIterator:W.di,NodeList:W.bO,RadioNodeList:W.bO,Path2D:W.fq,Perspective:W.ft,Plugin:W.a8,PluginArray:W.fv,PositionValue:W.fy,PresentationConnection:W.fz,Range:W.dn,Rotation:W.fJ,RTCDataChannel:W.dr,DataChannel:W.dr,HTMLSelectElement:W.fL,SharedWorker:W.fO,SourceBuffer:W.a9,SourceBufferList:W.fP,SpeechGrammar:W.aa,SpeechGrammarList:W.fR,SpeechRecognitionResult:W.ab,Storage:W.fW,CSSStyleSheet:W.X,StyleSheet:W.X,CalcLength:W.ak,KeywordValue:W.ak,LengthValue:W.ak,NumberValue:W.ak,SimpleLength:W.ak,TransformValue:W.ak,StyleValue:W.ak,HTMLTableElement:W.dw,HTMLTableRowElement:W.h4,HTMLTableSectionElement:W.h5,HTMLTemplateElement:W.bT,TextTrack:W.ac,TextTrackCue:W.Y,VTTCue:W.Y,TextTrackCueList:W.h8,TextTrackList:W.h9,TimeRanges:W.ha,Touch:W.ad,TouchEvent:W.b0,TouchList:W.he,TrackDefaultList:W.hf,Matrix:W.bm,Skew:W.bm,TransformComponent:W.bm,Translation:W.hh,TreeWalker:W.dA,CompositionEvent:W.aG,FocusEvent:W.aG,TextEvent:W.aG,SVGZoomEvent:W.aG,UIEvent:W.aG,URL:W.hm,VideoTrackList:W.ho,VTTRegionList:W.hr,WebSocket:W.hs,WheelEvent:W.b2,Window:W.bW,DOMWindow:W.bW,Worker:W.hv,CompositorWorkerGlobalScope:W.b3,DedicatedWorkerGlobalScope:W.b3,ServiceWorkerGlobalScope:W.b3,SharedWorkerGlobalScope:W.b3,WorkerGlobalScope:W.b3,ClientRect:W.hG,ClientRectList:W.dF,DOMRectList:W.dF,CSSRuleList:W.hI,DocumentType:W.hJ,DOMRect:W.hK,GamepadList:W.i4,HTMLFrameSetElement:W.i5,NamedNodeMap:W.dI,MozNamedAttrMap:W.dI,ServiceWorker:W.iq,SpeechRecognitionResultList:W.it,StyleSheetList:W.iu,WorkerLocation:W.iB,WorkerNavigator:W.iC,SVGAElement:P.dR,SVGAnimateElement:P.aM,SVGAnimateMotionElement:P.aM,SVGAnimateTransformElement:P.aM,SVGAnimationElement:P.aM,SVGSetElement:P.aM,SVGFEBlendElement:P.ed,SVGFEColorMatrixElement:P.ee,SVGFEComponentTransferElement:P.ef,SVGFECompositeElement:P.eg,SVGFEConvolveMatrixElement:P.eh,SVGFEDiffuseLightingElement:P.ei,SVGFEDisplacementMapElement:P.ej,SVGFEFloodElement:P.ek,SVGFEGaussianBlurElement:P.el,SVGFEImageElement:P.em,SVGFEMergeElement:P.en,SVGFEMorphologyElement:P.eo,SVGFEOffsetElement:P.ep,SVGFEPointLightElement:P.eq,SVGFESpecularLightingElement:P.er,SVGFESpotLightElement:P.es,SVGFETileElement:P.et,SVGFETurbulenceElement:P.eu,SVGFilterElement:P.ez,SVGForeignObjectElement:P.eC,SVGCircleElement:P.ag,SVGEllipseElement:P.ag,SVGLineElement:P.ag,SVGPathElement:P.ag,SVGPolygonElement:P.ag,SVGPolylineElement:P.ag,SVGGeometryElement:P.ag,SVGClipPathElement:P.aD,SVGDefsElement:P.aD,SVGGElement:P.aD,SVGSwitchElement:P.aD,SVGGraphicsElement:P.aD,SVGImageElement:P.eJ,SVGLength:P.ar,SVGLengthList:P.eU,SVGMarkerElement:P.f2,SVGMaskElement:P.f3,SVGNumber:P.as,SVGNumberList:P.fk,SVGPatternElement:P.fr,SVGPoint:P.fw,SVGPointList:P.fx,SVGRect:P.fC,SVGRectElement:P.fD,SVGScriptElement:P.bQ,SVGStringList:P.h1,SVGDescElement:P.G,SVGDiscardElement:P.G,SVGFEDistantLightElement:P.G,SVGFEFuncAElement:P.G,SVGFEFuncBElement:P.G,SVGFEFuncGElement:P.G,SVGFEFuncRElement:P.G,SVGFEMergeNodeElement:P.G,SVGMetadataElement:P.G,SVGStopElement:P.G,SVGStyleElement:P.G,SVGTitleElement:P.G,SVGComponentTransferFunctionElement:P.G,SVGElement:P.G,SVGSVGElement:P.h2,SVGSymbolElement:P.h3,SVGTextContentElement:P.dx,SVGTextPathElement:P.h7,SVGTSpanElement:P.bU,SVGTextElement:P.bU,SVGTextPositioningElement:P.bU,SVGTransform:P.at,SVGTransformList:P.hg,SVGUseElement:P.hn,SVGViewElement:P.hp,SVGViewSpec:P.hq,SVGLinearGradientElement:P.bX,SVGRadialGradientElement:P.bX,SVGGradientElement:P.bX,SVGCursorElement:P.il,SVGFEDropShadowElement:P.im,SVGMPathElement:P.io,AudioBuffer:P.dV,WebGLRenderingContext:P.fH,WebGL2RenderingContext:P.fI,WebGL2RenderingContextBase:P.iA,SQLResultSetRowList:P.fS})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,Credential:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMStringMap:true,EffectModel:true,Entry:true,FederatedCredential:true,FileEntry:true,FileError:true,Stream:true,DOMFileSystem:true,FontFace:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageData:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PasswordCredential:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,ServicePort:true,SharedArrayBuffer:true,SourceInfo:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,TrackDefault:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPreserveAspectRatio:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,AudioTrack:true,AudioTrackList:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,CSSCharsetRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DocumentFragment:true,ShadowRoot:true,DOMException:true,DOMImplementation:true,DOMPoint:true,DOMPointReadOnly:false,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AudioDestinationNode:true,AudioNode:true,AudioSourceNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OfflineAudioContext:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Navigator:true,Attr:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Path2D:true,Perspective:true,Plugin:true,PluginArray:true,PositionValue:true,PresentationConnection:true,Range:true,Rotation:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,SharedWorker:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,CalcLength:true,KeywordValue:true,LengthValue:true,NumberValue:true,SimpleLength:true,TransformValue:true,StyleValue:false,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,Matrix:true,Skew:true,TransformComponent:false,Translation:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,SVGZoomEvent:true,UIEvent:false,URL:true,VideoTrackList:true,VTTRegionList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.dd.$nativeSuperclassTag="ArrayBufferView"
H.bL.$nativeSuperclassTag="ArrayBufferView"
H.bM.$nativeSuperclassTag="ArrayBufferView"
H.de.$nativeSuperclassTag="ArrayBufferView"
H.bK.$nativeSuperclassTag="ArrayBufferView"
H.bN.$nativeSuperclassTag="ArrayBufferView"
H.df.$nativeSuperclassTag="ArrayBufferView"
W.bz.$nativeSuperclassTag="EventTarget"
W.bC.$nativeSuperclassTag="EventTarget"
W.by.$nativeSuperclassTag="EventTarget"
W.bB.$nativeSuperclassTag="EventTarget"
W.bx.$nativeSuperclassTag="EventTarget"
W.bA.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.ln(V.lp(),b)},[])
else (function(b){H.ln(V.lp(),b)})([])})})()