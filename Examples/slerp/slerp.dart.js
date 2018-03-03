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
a[c]=function(){a[c]=function(){H.mT(b)}
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
return d?function(e){if(t===null)t=H.j5(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.j5(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.j5(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={iS:function iS(a){this.a=a},
iW:function(a,b,c,d){if(!!a.$isc)return new H.dR(a,b,[c,d])
return new H.cX(a,b,[c,d])},
iQ:function(){return new P.aQ("No element")},
lI:function(){return new P.aQ("Too few elements")},
da:function(a,b,c,d){if(c-b<=32)H.m_(a,b,c,d)
else H.lZ(a,b,c,d)},
m_:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.a9(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.ag(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
lZ:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.d(t>32)
s=C.b.H(t+1,6)
r=a3+s
q=a4-s
p=C.b.H(a3+a4,2)
o=p-s
n=p+s
t=J.a9(a2)
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
H.da(a2,a3,g-2,a5)
H.da(a2,f+2,a4,a5)
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
break}}H.da(a2,g,f,a5)}else H.da(a2,g,f,a5)},
c:function c(){},
b8:function b8(){},
cW:function cW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cX:function cX(a,b,c){this.a=a
this.b=b
this.$ti=c},
dR:function dR(a,b,c){this.a=a
this.b=b
this.$ti=c},
eI:function eI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cY:function cY(a,b,c){this.a=a
this.b=b
this.$ti=c},
cc:function cc(){},
dm:function(a,b){var t=a.aa(b)
if(!u.globalState.d.cy)u.globalState.f.ag()
return t},
is:function(){--u.globalState.f.b
H.d(u.globalState.f.b>=0)},
kB:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.u(s).$isb)throw H.e(P.iM("Arguments to main must be a List: "+H.h(s)))
u.globalState=new H.hM(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$jE()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.hk(P.iV(null,H.aX),0)
r=P.n
s.sei(new H.ac(0,null,null,null,null,null,0,[r,H.aW]))
s.sem(new H.ac(0,null,null,null,null,null,0,[r,null]))
if(s.x){q=new H.hL()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.lD,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.ma)}if(u.globalState.x)return
s=u.globalState.a++
q=P.aM(null,null,null,r)
p=new H.bb(0,null,!1)
o=new H.aW(s,new H.ac(0,null,null,null,null,null,0,[r,H.bb]),q,u.createNewIsolate(),p,new H.aj(H.iy()),new H.aj(H.iy()),!1,!1,[],P.aM(null,null,null,null),null,null,!1,!0,P.aM(null,null,null,null))
q.l(0,0)
o.bp(0,p)
u.globalState.e=o
u.globalState.z.i(0,s,o)
u.globalState.d=o
if(H.bj(a,{func:1,args:[,]}))o.aa(new H.iE(t,a))
else if(H.bj(a,{func:1,args:[,,]}))o.aa(new H.iF(t,a))
else o.aa(a)
u.globalState.f.ag()},
ma:function(a){var t=P.aL(["command","print","msg",a])
return new H.ae(!0,P.bS(null,P.n)).G(t)},
lF:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.lG()
return},
lG:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.e(new P.t("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.e(new P.t('Cannot extract URI from "'+t+'"'))},
lD:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.aV(!0,[]).S(b.data)
s=J.a9(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.mD(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.aV(!0,[]).S(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.aV(!0,[]).S(s.h(t,"replyTo"))
s=u.globalState.a++
k=P.n
j=P.aM(null,null,null,k)
i=new H.bb(0,null,!1)
h=new H.aW(s,new H.ac(0,null,null,null,null,null,0,[k,H.bb]),j,u.createNewIsolate(),i,new H.aj(H.iy()),new H.aj(H.iy()),!1,!1,[],P.aM(null,null,null,null),null,null,!1,!0,P.aM(null,null,null,null))
j.l(0,0)
h.bp(0,i)
u.globalState.f.a.P(0,new H.aX(h,new H.es(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.ag()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.l6(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.ag()
break
case"close":u.globalState.ch.af(0,$.$get$jF().h(0,a))
a.terminate()
u.globalState.f.ag()
break
case"log":H.lC(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
k=P.aL(["command","print","msg",t])
k=new H.ae(!0,P.bS(null,P.n)).G(k)
s.toString
self.postMessage(k)}else P.U(s.h(t,"msg"))
break
case"error":throw H.e(s.h(t,"msg"))}},
lC:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aL(["command","log","msg",a])
r=new H.ae(!0,P.bS(null,P.n)).G(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.af(q)
t=H.as(q)
s=P.cb(t)
throw H.e(s)}},
lE:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.jN=$.jN+("_"+s)
$.jO=$.jO+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.C(0,["spawned",new H.bf(s,r),q,t.r])
r=new H.et(a,b,c,d,t)
if(e){t.bL(q,q)
u.globalState.f.a.P(0,new H.aX(t,r,"start isolate"))}else r.$0()},
m0:function(a,b){var t=new H.fN(!0,!1,null)
t.df(a,b)
return t},
mc:function(a){return new H.aV(!0,[]).S(new H.ae(!1,P.bS(null,P.n)).G(a))},
iE:function iE(a,b){this.a=a
this.b=b},
iF:function iF(a,b){this.a=a
this.b=b},
hM:function hM(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
aW:function aW(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
hG:function hG(a,b){this.a=a
this.b=b},
hk:function hk(a,b){this.a=a
this.b=b},
hl:function hl(a){this.a=a},
aX:function aX(a,b,c){this.a=a
this.b=b
this.c=c},
hL:function hL(){},
es:function es(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
et:function et(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
he:function he(){},
bf:function bf(a,b){this.b=a
this.a=b},
hO:function hO(a,b){this.a=a
this.b=b},
bT:function bT(a,b,c){this.b=a
this.c=b
this.a=c},
bb:function bb(a,b,c){this.a=a
this.b=b
this.c=c},
fN:function fN(a,b,c){this.a=a
this.b=b
this.c=c},
fO:function fO(a,b){this.a=a
this.b=b},
fP:function fP(a,b){this.a=a
this.b=b},
aj:function aj(a){this.a=a},
ae:function ae(a,b){this.a=a
this.b=b},
aV:function aV(a,b){this.a=a
this.b=b},
my:function(a){return u.types[a]},
mF:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.u(a).$isp},
h:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.b2(a)
if(typeof t!=="string")throw H.e(H.P(a))
return t},
lY:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.fi(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aO:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
jM:function(a,b){throw H.e(new P.bv(a,null,null))},
iY:function(a,b,c){var t,s
H.kk(a)
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return H.jM(a,c)
s=t[3]
if(s!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return H.jM(a,c)},
jL:function(a,b){throw H.e(new P.bv("Invalid double",a,null))},
aP:function(a,b){var t,s
H.kk(a)
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return H.jL(a,b)
t=parseFloat(a)
if(isNaN(t)){s=J.lc(a)
if(s==="NaN"||s==="+NaN"||s==="-NaN")return t
return H.jL(a,b)}return t},
d7:function(a){var t,s,r,q,p,o,n,m
t=J.u(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.t||!!J.u(a).$isaS){p=C.p(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.e.a4(q,0)===36)q=C.e.cV(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.dp(H.ie(a),0,null),u.mangledGlobalNames)},
fe:function(a){return"Instance of '"+H.d7(a)+"'"},
R:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lV:function(a){return a.b?H.R(a).getUTCFullYear()+0:H.R(a).getFullYear()+0},
lT:function(a){return a.b?H.R(a).getUTCMonth()+1:H.R(a).getMonth()+1},
lP:function(a){return a.b?H.R(a).getUTCDate()+0:H.R(a).getDate()+0},
lQ:function(a){return a.b?H.R(a).getUTCHours()+0:H.R(a).getHours()+0},
lS:function(a){return a.b?H.R(a).getUTCMinutes()+0:H.R(a).getMinutes()+0},
lU:function(a){return a.b?H.R(a).getUTCSeconds()+0:H.R(a).getSeconds()+0},
lR:function(a){return a.b?H.R(a).getUTCMilliseconds()+0:H.R(a).getMilliseconds()+0},
iX:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.P(a))
return a[b]},
jP:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.P(a))
a[b]=c},
K:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ai(!0,b,"index",null)
t=J.dv(a)
if(b<0||C.b.cG(b,t))return P.C(b,a,"index",null,t)
return P.ff(b,"index",null)},
P:function(a){return new P.ai(!0,a,null,null)},
kk:function(a){if(typeof a!=="string")throw H.e(H.P(a))
return a},
e:function(a){var t
if(a==null)a=new P.ba()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.kC})
t.name=""}else t.toString=H.kC
return t},
kC:function(){return J.b2(this.dartException)},
E:function(a){throw H.e(a)},
D:function(a){throw H.e(new P.aa(a))},
ap:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.fU(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
fV:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
k0:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
iU:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.eA(a,s,t?null:b.receiver)},
af:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.iG(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aJ(r,16)&8191)===10)switch(q){case 438:return t.$1(H.iU(H.h(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.h(s)+" (Error "+q+")"
return t.$1(new H.d6(p,null))}}if(a instanceof TypeError){o=$.$get$jV()
n=$.$get$jW()
m=$.$get$jX()
l=$.$get$jY()
k=$.$get$k1()
j=$.$get$k2()
i=$.$get$k_()
$.$get$jZ()
h=$.$get$k4()
g=$.$get$k3()
f=o.L(s)
if(f!=null)return t.$1(H.iU(s,f))
else{f=n.L(s)
if(f!=null){f.method="call"
return t.$1(H.iU(s,f))}else{f=m.L(s)
if(f==null){f=l.L(s)
if(f==null){f=k.L(s)
if(f==null){f=j.L(s)
if(f==null){f=i.L(s)
if(f==null){f=l.L(s)
if(f==null){f=h.L(s)
if(f==null){f=g.L(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.d6(s,f==null?null:f.method))}}return t.$1(new H.fX(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.db()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.ai(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.db()
return a},
as:function(a){var t
if(a==null)return new H.dl(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dl(a,null)},
mJ:function(a){if(a==null||typeof a!='object')return J.ah(a)
else return H.aO(a)},
mw:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=a.length
for(r=0;r<s;){q=r+1
H.d(t)
p=a[r]
r=q+1
H.d(t)
b.i(0,p,a[q])}return b},
mE:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dm(b,new H.im(a))
case 1:return H.dm(b,new H.io(a,d))
case 2:return H.dm(b,new H.ip(a,d,e))
case 3:return H.dm(b,new H.iq(a,d,e,f))
case 4:return H.dm(b,new H.ir(a,d,e,f,g))}throw H.e(P.cb("Unsupported number of arguments for wrapped closure"))},
b0:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.mE)
a.$identity=t
return t},
lo:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.u(c).$isb){t.$reflectionInfo=c
r=H.lY(t).r}else r=c
q=d?Object.create(new H.fy().constructor.prototype):Object.create(new H.bn(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.jz(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.my,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.jw:H.iN
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.e("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.jz(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
ll:function(a,b,c,d){var t=H.iN
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
jz:function(a,b,c){var t,s,r,q
if(c)return H.ln(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.ll(s,b==null?r!=null:b!==r,t,b)
return q},
lm:function(a,b,c,d){var t,s
t=H.iN
s=H.jw
switch(b?-1:a){case 0:throw H.e(new H.fo("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
ln:function(a,b){var t,s,r,q
H.lk()
t=$.jv
if(t==null){t=H.ju("receiver")
$.jv=t}s=b.$stubName
r=b.length
q=a[s]
t=H.lm(r,b==null?q!=null:b!==q,s,b)
return t},
j5:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.u(c).$isb){c.fixed$length=Array
t=c}else t=c
return H.lo(a,b,t,!!d,e,f)},
iN:function(a){return a.a},
jw:function(a){return a.c},
lk:function(){var t=$.jx
if(t==null){t=H.ju("self")
$.jx=t}return t},
ju:function(a){var t,s,r,q,p
t=new H.bn("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
n7:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.aq(a,"String"))},
X:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aq(a,"double"))},
n6:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aq(a,"num"))},
mp:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.aq(a,"bool"))},
mD:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.aq(a,"int"))},
mL:function(a,b){throw H.e(H.aq(a,b.substring(3)))},
mK:function(a,b){var t=J.a9(b)
throw H.e(H.jy(H.d7(a),t.aw(b,3,t.gk(b))))},
kt:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.u(a)[b])return a
H.mL(a,b)},
aB:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.u(a)[b]
else t=!0
if(t)return a
H.mK(a,b)},
n5:function(a){if(a==null)return a
if(!!J.u(a).$isb)return a
throw H.e(H.aq(a,"List"))},
ko:function(a){var t=J.u(a)
return"$S" in t?t.$S():null},
bj:function(a,b){var t
if(a==null)return!1
t=H.ko(a)
return t==null?!1:H.ku(t,b)},
n3:function(a,b){var t,s
if(a==null)return a
if($.j2)return a
$.j2=!0
try{if(H.bj(a,b))return a
t=H.aC(b,null)
s=H.aq(a,t)
throw H.e(s)}finally{$.j2=!1}},
aq:function(a,b){return new H.fW("type '"+H.d7(a)+"' is not a subtype of type '"+b+"'")},
jy:function(a,b){return new H.dE("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
az:function(a){if(!0===a)return!1
if(!!J.u(a).$isiP)a=a.$0()
if(typeof a==="boolean")return!a
throw H.e(H.aq(a,"bool"))},
aZ:function(a){throw H.e(new H.h9(a))},
d:function(a){if(H.az(a))throw H.e(new P.c1(null))},
mT:function(a){throw H.e(new P.dI(a))},
iy:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
kr:function(a){return u.getIsolateTag(a)},
J:function(a){return new H.aw(a,null)},
Q:function(a,b){H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
ie:function(a){if(a==null)return
return a.$ti},
ks:function(a,b){return H.jc(a["$as"+H.h(b)],H.ie(a))},
aA:function(a,b,c){var t,s
t=H.ks(a,b)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
bl:function(a,b){var t,s
t=H.ie(a)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
aC:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.d(!0)
H.d(!0)
return a[0].name+H.dp(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.h(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aC(t,b)
return H.me(a,b)}return"unknown-reified-type"},
me:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aC(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aC(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aC(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.mv(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aC(l[j],b)+(" "+H.h(j))}q+="}"}return"("+q+") => "+t},
dp:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=new P.bK("")
for(r=b,q=!0,p=!0;H.d(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.d(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aC(o,c)}return p?"":"<"+s.j(0)+">"},
ig:function(a){var t,s
if(a instanceof H.b4){t=H.ko(a)
if(t!=null)return H.aC(t,null)}s=J.u(a).constructor.name
if(a==null)return s
return s+H.dp(a.$ti,0,null)},
jc:function(a,b){if(a==null)return b
H.d(typeof a=="function")
H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.j9(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.j9(a,null,b)
return b},
bX:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.ie(a)
s=J.u(a)
if(s[b]==null)return!1
return H.ki(H.jc(s[d],t),c)},
dq:function(a,b,c,d){if(a==null)return a
if(H.bX(a,b,c,d))return a
throw H.e(H.jy(H.d7(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dp(c,0,null),u.mangledGlobalNames)))},
n0:function(a,b,c,d){if(a==null)return a
if(H.bX(a,b,c,d))return a
throw H.e(H.aq(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dp(c,0,null),u.mangledGlobalNames)))},
ki:function(a,b){var t,s,r,q,p
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
if(!H.Y(r,b[p]))return!1}return!0},
n1:function(a,b,c){return H.j9(a,b,H.ks(b,c))},
Y:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.name==="aN")return!0
if('func' in b)return H.ku(a,b)
if('func' in a)return b.name==="iP"||b.name==="o"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.d(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.d(!0)
q=b[0]}else q=b
if(q!==s){p=H.aC(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.ki(H.jc(o,t),r)},
kh:function(a,b,c){var t,s,r,q,p,o,n
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
if(!(H.Y(o,n)||H.Y(n,o)))return!1}return!0},
ml:function(a,b){var t,s,r,q,p,o
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
if(!(H.Y(p,o)||H.Y(o,p)))return!1}return!0},
ku:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.d('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.Y(t,s)||H.Y(s,t)))return!1}r=a.args
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
if(n===m){if(!H.kh(r,q,!1))return!1
if(!H.kh(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.d(j)
g=r[h]
H.d(i)
f=q[h]
if(!(H.Y(g,f)||H.Y(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.d(j)
g=p[d]
H.d(i)
f=q[e]
if(!(H.Y(g,f)||H.Y(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.d(j)
g=p[d]
H.d(i)
f=o[e]
if(!(H.Y(g,f)||H.Y(f,g)))return!1}}return H.ml(a.named,b.named)},
j9:function(a,b,c){H.d(typeof a=="function")
H.d(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
n8:function(a){var t=$.j7
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
n4:function(a){return H.aO(a)},
n2:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
mG:function(a){var t,s,r,q,p,o
H.d(!(a instanceof P.o))
t=$.j7.$1(a)
s=$.ic[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.il[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.kg.$2(a,t)
if(t!=null){s=$.ic[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.il[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.ja(r)
$.ic[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.il[t]=r
return r}if(p==="-"){o=H.ja(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.kw(a,r)
if(p==="*")throw H.e(new P.bO(t))
if(u.leafTags[t]===true){o=H.ja(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.kw(a,r)},
kw:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.ix(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
ja:function(a){return J.ix(a,!1,null,!!a.$isp)},
mI:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.ix(t,!1,null,!!t.$isp)
else return J.ix(t,c,null,null)},
mB:function(){if(!0===$.j8)return
$.j8=!0
H.mC()},
mC:function(){var t,s,r,q,p,o,n,m
$.ic=Object.create(null)
$.il=Object.create(null)
H.mA()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.kz.$1(p)
if(o!=null){n=H.mI(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
mA:function(){var t,s,r,q,p,o,n
t=C.x()
t=H.bi(C.u,H.bi(C.z,H.bi(C.o,H.bi(C.o,H.bi(C.y,H.bi(C.v,H.bi(C.w(C.p),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.j7=new H.ii(p)
$.kg=new H.ij(o)
$.kz=new H.ik(n)},
bi:function(a,b){return a(b)||b},
jI:function(a,b,c,d){var t,s,r,q
t=b?"m":""
s=c?"":"i"
r=d?"g":""
q=function(e,f){try{return new RegExp(e,f)}catch(p){return p}}(a,t+s+r)
if(q instanceof RegExp)return q
throw H.e(new P.bv("Illegal RegExp pattern ("+String(q)+")",a,null))},
mb:function(a,b){var t=new H.hN(a,b)
t.dk(a,b)
return t},
mQ:function(a,b,c,d){var t,s,r
t=b.dA(a,d)
if(t==null)return a
s=t.b
r=s.index
return H.mS(a,r,r+s[0].length,c)},
mP:function(a,b,c){var t,s
t=b.gbC()
t.lastIndex=0
s=a.replace(t,c.replace(/\$/g,"$$$$"))
return s},
mR:function(a,b,c,d){return d===0?a.replace(b.b,c.replace(/\$/g,"$$$$")):H.mQ(a,b,c,d)},
mS:function(a,b,c,d){var t,s
t=a.substring(0,b)
s=a.substring(c)
return t+d+s},
fi:function fi(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fU:function fU(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
d6:function d6(a,b){this.a=a
this.b=b},
eA:function eA(a,b,c){this.a=a
this.b=b
this.c=c},
fX:function fX(a){this.a=a},
iG:function iG(a){this.a=a},
dl:function dl(a,b){this.a=a
this.b=b},
im:function im(a){this.a=a},
io:function io(a,b){this.a=a
this.b=b},
ip:function ip(a,b,c){this.a=a
this.b=b
this.c=c},
iq:function iq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ir:function ir(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
b4:function b4(){},
fH:function fH(){},
fy:function fy(){},
bn:function bn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fW:function fW(a){this.a=a},
dE:function dE(a){this.a=a},
fo:function fo(a){this.a=a},
h9:function h9(a){this.a=a},
aw:function aw(a,b){this.a=a
this.b=b},
ac:function ac(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
ez:function ez(a){this.a=a},
eC:function eC(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
eD:function eD(a,b){this.a=a
this.$ti=b},
eE:function eE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ii:function ii(a){this.a=a},
ij:function ij(a){this.a=a},
ik:function ik(a){this.a=a},
ey:function ey(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hN:function hN(a,b){this.a=a
this.b=b},
q:function(a){return a},
i4:function(a){var t,s,r
if(!!J.u(a).$ism)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
bA:function bA(){},
b9:function b9(){},
eQ:function eQ(){},
d1:function d1(){},
d2:function d2(){},
d3:function d3(){},
d0:function d0(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(){},
eU:function eU(){},
eV:function eV(){},
eW:function eW(){},
d4:function d4(){},
eX:function eX(){},
bB:function bB(){},
bC:function bC(){},
bD:function bD(){},
bE:function bE(){},
mv:function(a){var t=H.Q(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
bm:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
u:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cV.prototype
return J.ew.prototype}if(typeof a=="string")return J.aI.prototype
if(a==null)return J.ex.prototype
if(typeof a=="boolean")return J.ev.prototype
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aJ.prototype
return a}if(a instanceof P.o)return a
return J.id(a)},
ix:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
id:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.j8==null){H.mB()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.e(new P.bO("Return interceptor for "+H.h(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$iT()]
if(p!=null)return p
p=H.mG(a)
if(p!=null)return p
if(typeof a=="function")return C.A
s=Object.getPrototypeOf(a)
if(s==null)return C.q
if(s===Object.prototype)return C.q
if(typeof q=="function"){Object.defineProperty(q,$.$get$iT(),{value:C.j,enumerable:false,writable:true,configurable:true})
return C.j}return C.j},
jH:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
lJ:function(a,b){var t,s
for(t=a.length;b<t;){s=C.e.a4(a,b)
if(s!==32&&s!==13&&!J.jH(s))break;++b}return b},
lK:function(a,b){var t,s
for(;b>0;b=t){t=b-1
s=C.e.bV(a,t)
if(s!==32&&s!==13&&!J.jH(s))break}return b},
a9:function(a){if(typeof a=="string")return J.aI.prototype
if(a==null)return a
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aJ.prototype
return a}if(a instanceof P.o)return a
return J.id(a)},
bk:function(a){if(a==null)return a
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aJ.prototype
return a}if(a instanceof P.o)return a
return J.id(a)},
kq:function(a){if(typeof a=="number")return J.b7.prototype
if(a==null)return a
if(!(a instanceof P.o))return J.aS.prototype
return a},
mx:function(a){if(typeof a=="number")return J.b7.prototype
if(typeof a=="string")return J.aI.prototype
if(a==null)return a
if(!(a instanceof P.o))return J.aS.prototype
return a},
j6:function(a){if(typeof a=="string")return J.aI.prototype
if(a==null)return a
if(!(a instanceof P.o))return J.aS.prototype
return a},
l:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aJ.prototype
return a}if(a instanceof P.o)return a
return J.id(a)},
z:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.u(a).v(a,b)},
ag:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.kq(a).aj(a,b)},
kD:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kq(a).ak(a,b)},
b1:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mF(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.a9(a).h(a,b)},
kE:function(a,b,c){return J.bk(a).i(a,b,c)},
kF:function(a,b,c,d){return J.l(a).dm(a,b,c,d)},
jd:function(a,b){return J.j6(a).a4(a,b)},
je:function(a,b){return J.l(a).bJ(a,b)},
jf:function(a,b,c){return J.l(a).bM(a,b,c)},
kG:function(a,b){return J.l(a).dO(a,b)},
dr:function(a,b,c){return J.l(a).bN(a,b,c)},
kH:function(a,b,c){return J.l(a).bO(a,b,c)},
c0:function(a,b,c){return J.l(a).bP(a,b,c)},
ds:function(a,b){return J.l(a).dR(a,b)},
kI:function(a,b){return J.l(a).bQ(a,b)},
kJ:function(a,b,c){return J.l(a).bR(a,b,c)},
jg:function(a,b,c,d){return J.l(a).bS(a,b,c,d)},
kK:function(a,b){return J.bk(a).bT(a,b)},
kL:function(a,b,c,d,e){return J.l(a).bU(a,b,c,d,e)},
kM:function(a,b){return J.mx(a).M(a,b)},
iH:function(a){return J.l(a).bY(a)},
kN:function(a){return J.l(a).bZ(a)},
kO:function(a){return J.l(a).c1(a)},
jh:function(a){return J.l(a).dX(a)},
kP:function(a,b){return J.l(a).c3(a,b)},
iI:function(a,b){return J.l(a).c4(a,b)},
kQ:function(a,b,c,d){return J.l(a).c5(a,b,c,d)},
kR:function(a,b,c,d,e){return J.l(a).e3(a,b,c,d,e)},
kS:function(a,b,c,d,e){return J.l(a).c6(a,b,c,d,e)},
kT:function(a,b,c,d,e,f){return J.l(a).e4(a,b,c,d,e,f)},
kU:function(a,b){return J.bk(a).p(a,b)},
dt:function(a,b){return J.l(a).c7(a,b)},
kV:function(a,b){return J.l(a).c8(a,b)},
kW:function(a){return J.l(a).e5(a)},
kX:function(a,b){return J.bk(a).aR(a,b)},
ah:function(a){return J.u(a).gu(a)},
du:function(a){return J.bk(a).gA(a)},
dv:function(a){return J.a9(a).gk(a)},
kY:function(a){return J.u(a).gw(a)},
kZ:function(a){return J.l(a).gai(a)},
iJ:function(a){return J.l(a).gm(a)},
iK:function(a){return J.l(a).gn(a)},
ji:function(a){return J.l(a).gF(a)},
l_:function(a){return J.l(a).au(a)},
l0:function(a){return J.l(a).b0(a)},
l1:function(a,b){return J.l(a).b1(a,b)},
l2:function(a,b,c){return J.l(a).b2(a,b,c)},
jj:function(a,b,c){return J.l(a).b6(a,b,c)},
l3:function(a,b){return J.l(a).cb(a,b)},
l4:function(a,b){return J.bk(a).ce(a,b)},
l5:function(a,b,c){return J.l(a).cg(a,b,c)},
l6:function(a,b){return J.l(a).C(a,b)},
l7:function(a,b){return J.j6(a).cS(a,b)},
l8:function(a,b,c,d){return J.l(a).bb(a,b,c,d)},
l9:function(a,b,c,d,e,f,g){return J.l(a).cl(a,b,c,d,e,f,g)},
la:function(a,b,c,d){return J.l(a).cm(a,b,c,d)},
jk:function(a,b,c,d){return J.l(a).cn(a,b,c,d)},
b2:function(a){return J.u(a).j(a)},
lb:function(a,b,c,d){return J.l(a).eB(a,b,c,d)},
lc:function(a){return J.j6(a).eC(a)},
ld:function(a,b,c){return J.l(a).co(a,b,c)},
le:function(a,b,c){return J.l(a).cp(a,b,c)},
iL:function(a,b,c){return J.l(a).cq(a,b,c)},
lf:function(a,b,c){return J.l(a).cr(a,b,c)},
jl:function(a,b,c){return J.l(a).cs(a,b,c)},
jm:function(a,b,c){return J.l(a).ct(a,b,c)},
jn:function(a,b,c){return J.l(a).cu(a,b,c)},
jo:function(a,b,c,d){return J.l(a).cv(a,b,c,d)},
jp:function(a,b,c,d){return J.l(a).cw(a,b,c,d)},
lg:function(a,b){return J.l(a).cA(a,b)},
lh:function(a,b,c){return J.l(a).eD(a,b,c)},
jq:function(a,b,c,d,e,f,g){return J.l(a).cC(a,b,c,d,e,f,g)},
li:function(a,b,c,d,e){return J.l(a).cD(a,b,c,d,e)},
a:function a(){},
ev:function ev(){},
ex:function ex(){},
by:function by(){},
f8:function f8(){},
aS:function aS(){},
aJ:function aJ(){},
aH:function aH(a){this.$ti=a},
iR:function iR(a){this.$ti=a},
dz:function dz(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b7:function b7(){},
cV:function cV(){},
ew:function ew(){},
aI:function aI(){}},P={
m4:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.mm()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.b0(new P.hb(t),1)).observe(s,{childList:true})
return new P.ha(t,s,r)}else if(self.setImmediate!=null)return P.mn()
return P.mo()},
m5:function(a){++u.globalState.f.b
self.scheduleImmediate(H.b0(new P.hc(a),0))},
m6:function(a){++u.globalState.f.b
self.setImmediate(H.b0(new P.hd(a),0))},
m7:function(a){P.iZ(C.m,a)},
mh:function(a,b){if(H.bj(a,{func:1,args:[P.aN,P.aN]})){b.toString
return a}else{b.toString
return a}},
ly:function(a,b,c){var t
if(a==null)a=new P.ba()
t=$.w
if(t!==C.d)t.toString
t=new P.O(0,t,null,[c])
t.br(a,b)
return t},
lz:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.O(0,$.w,null,[P.b])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.el(t,!1,b,s)
try{for(m=0,l=0;m<1;++m){q=a[m]
p=l
q.aX(new P.ek(t,!1,b,s,p),r)
l=++t.b}if(l===0){l=new P.O(0,$.w,null,[null])
l.bq(C.B)
return l}k=new Array(l)
k.fixed$length=Array
t.a=k}catch(j){o=H.af(j)
n=H.as(j)
if(t.b===0||!1)return P.ly(o,n,null)
else{t.c=o
t.d=n}}return s},
ka:function(a,b){var t,s,r
H.d(b.a<4)
H.d(!(a instanceof P.O))
H.d(b.a===0)
b.a=1
try{a.aX(new P.hu(b),new P.hv(b))}catch(r){t=H.af(r)
s=H.as(r)
P.mM(new P.hw(b,t,s))}},
ht:function(a,b){var t,s,r,q
H.d(b.a<=1)
for(;t=a.a,s=t===2,s;){H.d(s)
a=a.c}s=b.a
if(t>=4){H.d(s<4)
r=b.c
b.c=null
q=b.a8(r)
H.d(b.a<4)
H.d(a.a>=4)
b.a=a.a
b.c=a.c
P.be(b,q)}else{q=b.c
H.d(s<=1)
b.a=2
b.c=a
a.bD(q)}},
be:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.i5(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.be(t.a,b)}s=t.a
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
P.i5(null,null,p,o,s)
return}s=$.w
if(s==null?l!=null:s!==l){H.d(l!=null)
s=$.w
H.d(l==null?s!=null:l!==s)
j=$.w
$.w=l
i=j}else i=null
s=b.c
if(s===8)new P.hB(t,r,q,b).$0()
else if(p){if((s&1)!==0)new P.hA(r,b,m).$0()}else if((s&2)!==0)new P.hz(t,r,b).$0()
if(i!=null){H.d(!0)
$.w=i}s=r.b
if(!!J.u(s).$isb6){if(s.a>=4){H.d(o.a<4)
h=o.c
o.c=null
b=o.a8(h)
H.d(o.a<4)
H.d(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.ht(s,o)
return}}g=b.b
H.d(g.a<4)
h=g.c
g.c=null
b=g.a8(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.d(!o)
g.a=4
g.c=p}else{H.d(!o)
g.a=8
g.c=p}t.a=g
s=g}},
mg:function(){var t,s
for(;t=$.bg,t!=null;){$.bV=null
s=t.b
$.bg=s
if(s==null)$.bU=null
t.a.$0()}},
mk:function(){$.j3=!0
try{P.mg()}finally{$.bV=null
$.j3=!1
if($.bg!=null)$.$get$j0().$1(P.kj())}},
ke:function(a){var t=new P.df(a,null)
if($.bg==null){$.bU=t
$.bg=t
if(!$.j3)$.$get$j0().$1(P.kj())}else{$.bU.b=t
$.bU=t}},
mj:function(a){var t,s,r
t=$.bg
if(t==null){P.ke(a)
$.bV=$.bU
return}s=new P.df(a,null)
r=$.bV
if(r==null){s.b=t
$.bV=s
$.bg=s}else{s.b=r.b
r.b=s
$.bV=s
if(s.b==null)$.bU=s}},
mM:function(a){var t=$.w
if(C.d===t){P.bh(null,null,C.d,a)
return}t.toString
P.bh(null,null,t,t.aN(a))},
m1:function(a,b){var t=$.w
if(t===C.d){t.toString
return P.iZ(a,b)}return P.iZ(a,t.aN(b))},
iZ:function(a,b){var t=C.b.H(a.a,1000)
return H.m0(t<0?0:t,b)},
j_:function(a){var t,s
H.d(a!=null)
t=$.w
H.d(a==null?t!=null:a!==t)
s=$.w
$.w=a
return s},
i5:function(a,b,c,d,e){var t={}
t.a=d
P.mj(new P.i6(t,e))},
kc:function(a,b,c,d){var t,s
if($.w===c)return d.$0()
t=P.j_(c)
try{s=d.$0()
return s}finally{s=t
H.d(s!=null)
$.w=s}},
kd:function(a,b,c,d,e){var t,s
if($.w===c)return d.$1(e)
t=P.j_(c)
try{s=d.$1(e)
return s}finally{s=t
H.d(s!=null)
$.w=s}},
mi:function(a,b,c,d,e,f){var t,s
if($.w===c)return d.$2(e,f)
t=P.j_(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.d(s!=null)
$.w=s}},
bh:function(a,b,c,d){var t=C.d!==c
if(t)d=!(!t||!1)?c.aN(d):c.dP(d)
P.ke(d)},
hb:function hb(a){this.a=a},
ha:function ha(a,b,c){this.a=a
this.b=b
this.c=c},
hc:function hc(a){this.a=a},
hd:function hd(a){this.a=a},
el:function el(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ek:function ek(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hg:function hg(){},
dg:function dg(a,b){this.a=a
this.$ti=b},
i_:function i_(a,b){this.a=a
this.$ti=b},
di:function di(a,b,c,d,e,f){var _=this
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
hq:function hq(a,b){this.a=a
this.b=b},
hy:function hy(a,b){this.a=a
this.b=b},
hu:function hu(a){this.a=a},
hv:function hv(a){this.a=a},
hw:function hw(a,b,c){this.a=a
this.b=b
this.c=c},
hs:function hs(a,b){this.a=a
this.b=b},
hx:function hx(a,b){this.a=a
this.b=b},
hr:function hr(a,b,c){this.a=a
this.b=b
this.c=c},
hB:function hB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hC:function hC(a){this.a=a},
hA:function hA(a,b,c){this.a=a
this.b=b
this.c=c},
hz:function hz(a,b,c){this.a=a
this.b=b
this.c=c},
df:function df(a,b){this.a=a
this.b=b},
fA:function fA(){},
fC:function fC(a){this.a=a},
fD:function fD(a,b){this.a=a
this.b=b},
fB:function fB(){},
b3:function b3(a,b){this.a=a
this.b=b},
i3:function i3(){},
i6:function i6(a,b){this.a=a
this.b=b},
hQ:function hQ(){},
hS:function hS(a,b){this.a=a
this.b=b},
hR:function hR(a,b){this.a=a
this.b=b},
hT:function hT(a,b){this.a=a
this.b=b},
jJ:function(a,b){return new H.ac(0,null,null,null,null,null,0,[a,b])},
G:function(){return new H.ac(0,null,null,null,null,null,0,[null,null])},
aL:function(a){return H.mw(a,new H.ac(0,null,null,null,null,null,0,[null,null]))},
bS:function(a,b){return new P.dj(0,null,null,null,null,null,0,[a,b])},
m9:function(){var t=Object.create(null)
H.d(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
lH:function(a,b,c){var t,s
if(P.j4(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$bW()
C.a.l(s,a)
try{P.mf(a,t)}finally{H.d(C.a.gas(s)===a)
s.pop()}s=P.jU(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eu:function(a,b,c){var t,s,r
if(P.j4(a))return b+"..."+c
t=new P.bK(b)
s=$.$get$bW()
C.a.l(s,a)
try{r=t
r.a=P.jU(r.gZ(),a,", ")}finally{H.d(C.a.gas(s)===a)
s.pop()}s=t
s.a=s.gZ()+c
s=t.gZ()
return s.charCodeAt(0)==0?s:s},
j4:function(a){var t,s
for(t=0;s=$.$get$bW(),t<s.length;++t)if(a===s[t])return!0
return!1},
mf:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gA(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.q())return
q=H.h(t.gt())
C.a.l(b,q)
s+=q.length+2;++r}if(!t.q()){if(r<=5)return
p=b.pop()
o=b.pop()}else{n=t.gt();++r
if(!t.q()){if(r<=4){C.a.l(b,H.h(n))
return}p=H.h(n)
o=b.pop()
s+=p.length+2}else{m=t.gt();++r
H.d(r<100)
for(;t.q();n=m,m=l){l=t.gt();++r
if(r>100){while(!0){if(!(s>75&&r>3))break
s-=b.pop().length+2;--r}C.a.l(b,"...")
return}}o=H.h(n)
p=H.h(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)C.a.l(b,k)
C.a.l(b,o)
C.a.l(b,p)},
aM:function(a,b,c,d){return new P.hI(0,null,null,null,null,null,0,[d])},
lL:function(a,b){var t,s
t=P.aM(null,null,null,b)
for(s=J.du(a);s.q();)t.l(0,s.gt())
return t},
lN:function(a){var t,s,r
t={}
if(P.j4(a))return"{...}"
s=new P.bK("")
try{C.a.l($.$get$bW(),a)
r=s
r.a=r.gZ()+"{"
t.a=!0
a.aR(0,new P.eJ(t,s))
t=s
t.a=t.gZ()+"}"}finally{t=$.$get$bW()
H.d(C.a.gas(t)===a)
t.pop()}t=s.gZ()
return t.charCodeAt(0)==0?t:t},
iV:function(a,b){var t=new P.eF(null,0,0,0,[b])
t.da(a,b)
return t},
dj:function dj(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hI:function hI(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hJ:function hJ(a,b,c){this.a=a
this.b=b
this.c=c},
bR:function bR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hF:function hF(){},
x:function x(){},
eJ:function eJ(a,b){this.a=a
this.b=b},
eF:function eF(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hK:function hK(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fs:function fs(){},
fr:function fr(){},
jU:function(a,b,c){var t=J.du(b)
if(!t.q())return a
if(c.length===0){do a+=H.h(t.gt())
while(t.q())}else{a+=H.h(t.gt())
for(;t.q();)a=a+c+H.h(t.gt())}return a},
lp:function(a,b){return J.kM(a,b)},
lq:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.h(t)
if(t>=10)return s+"00"+H.h(t)
return s+"000"+H.h(t)},
lr:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c6:function(a){if(a>=10)return""+a
return"0"+a},
ls:function(a,b,c,d,e,f){return new P.at(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
iO:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.b2(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lu(a)},
lu:function(a){var t=J.u(a)
if(!!t.$isb4)return t.j(a)
return H.fe(a)},
iM:function(a){return new P.ai(!1,null,null,a)},
jr:function(a,b,c){return new P.ai(!0,a,b,c)},
lj:function(a){return new P.ai(!1,null,a,"Must not be null")},
ff:function(a,b,c){return new P.d8(null,null,!0,a,b,"Value not in range")},
bH:function(a,b,c,d,e){return new P.d8(b,c,!0,a,d,"Invalid value")},
jQ:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.bH(a,0,c,"start",f))
if(a>b||b>c)throw H.e(P.bH(b,a,c,"end",f))
return b},
C:function(a,b,c,d,e){var t=e!=null?e:J.dv(b)
return new P.eq(b,t,!0,a,c,"Index out of range")},
cb:function(a){return new P.hp(a)},
jK:function(a,b,c){var t,s
t=H.Q([],[c])
for(s=J.du(a);s.q();)C.a.l(t,s.gt())
if(b)return t
t.fixed$length=Array
return t},
U:function(a){H.bm(H.h(a))},
jR:function(a,b,c){return new H.ey(a,H.jI(a,!1,!0,!1),null,null)},
b_:function b_(){},
F:function F(){},
aF:function aF(a,b){this.a=a
this.b=b},
L:function L(){},
at:function at(a){this.a=a},
dP:function dP(){},
dQ:function dQ(){},
b5:function b5(){},
c1:function c1(a){this.a=a},
ba:function ba(){},
ai:function ai(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d8:function d8(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eq:function eq(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
t:function t(a){this.a=a},
bO:function bO(a){this.a=a},
aQ:function aQ(a){this.a=a},
aa:function aa(a){this.a=a},
db:function db(){},
dI:function dI(a){this.a=a},
hp:function hp(a){this.a=a},
bv:function bv(a,b,c){this.a=a
this.b=b
this.c=c},
dS:function dS(a,b,c){this.a=a
this.b=b
this.$ti=c},
n:function n(){},
ak:function ak(){},
cU:function cU(){},
b:function b(){},
av:function av(){},
aN:function aN(){},
T:function T(){},
o:function o(){},
bJ:function bJ(){},
v:function v(){},
bK:function bK(a){this.a=a},
ia:function(a){var t,s,r,q,p
if(a==null)return
t=P.G()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.D)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
ms:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.kX(a,new P.i7(t))
return t},
mt:function(a){var t,s
t=new P.O(0,$.w,null,[null])
s=new P.dg(t,[null])
a.then(H.b0(new P.i8(s),1))["catch"](H.b0(new P.i9(s),1))
return t},
h6:function h6(){},
h8:function h8(a,b){this.a=a
this.b=b},
i7:function i7(a){this.a=a},
h7:function h7(a,b,c){this.a=a
this.b=b
this.c=c},
i8:function i8(a){this.a=a},
i9:function i9(a){this.a=a},
lW:function(a){return C.k},
hH:function hH(){},
hP:function hP(){},
H:function H(){},
dw:function dw(){},
aD:function aD(){},
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
e5:function e5(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(){},
e9:function e9(){},
ee:function ee(){},
eh:function eh(){},
ab:function ab(){},
au:function au(){},
eo:function eo(){},
al:function al(){},
eB:function eB(){},
eK:function eK(){},
eL:function eL(){},
an:function an(){},
eZ:function eZ(){},
f5:function f5(){},
fa:function fa(){},
fb:function fb(){},
fg:function fg(){},
fh:function fh(){},
fp:function fp(){},
fE:function fE(){},
I:function I(){},
fF:function fF(){},
fG:function fG(){},
dc:function dc(){},
fI:function fI(){},
bL:function bL(){},
ao:function ao(){},
fS:function fS(){},
fZ:function fZ(){},
h0:function h0(){},
h1:function h1(){},
bQ:function bQ(){},
hU:function hU(){},
hV:function hV(){},
hW:function hW(){},
cs:function cs(){},
cj:function cj(){},
cn:function cn(){},
cq:function cq(){},
cF:function cF(){},
cH:function cH(){},
cI:function cI(){},
cJ:function cJ(){},
dA:function dA(){},
fl:function fl(){},
fm:function fm(){},
i0:function i0(){},
fx:function fx(){},
cy:function cy(){},
cK:function cK(){}},W={
lt:function(a){return"wheel"},
aY:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kb:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
a8:function(a,b,c,d,e){var t=c==null?null:W.kf(new W.ho(c))
t=new W.hn(0,a,b,t,!1,[e])
t.dj(a,b,c,!1,e)
return t},
md:function(a){var t
if(!!J.u(a).$isaG)return a
t=new P.h7([],[],!1)
t.c=!0
return t.aZ(a)},
kf:function(a){var t=$.w
if(t===C.d)return a
return t.dQ(a)},
k:function k(){},
dx:function dx(){},
dy:function dy(){},
Z:function Z(){},
dB:function dB(){},
c2:function c2(){},
dC:function dC(){},
c3:function c3(){},
c4:function c4(){},
c5:function c5(){},
aE:function aE(){},
dG:function dG(){},
A:function A(){},
bo:function bo(){},
dH:function dH(){},
dJ:function dJ(){},
dK:function dK(){},
aG:function aG(){},
c7:function c7(){},
dL:function dL(){},
dM:function dM(){},
c8:function c8(){},
c9:function c9(){},
dN:function dN(){},
dO:function dO(){},
ca:function ca(){},
j:function j(){},
f:function f(){},
a_:function a_(){},
ec:function ec(){},
ed:function ed(){},
ei:function ei(){},
a0:function a0(){},
en:function en(){},
bw:function bw(){},
cd:function cd(){},
ce:function ce(){},
bx:function bx(){},
er:function er(){},
aK:function aK(){},
eH:function eH(){},
eM:function eM(){},
eN:function eN(){},
bz:function bz(){},
a1:function a1(){},
eO:function eO(){},
N:function N(){},
eY:function eY(){},
y:function y(){},
d5:function d5(){},
f4:function f4(){},
f7:function f7(){},
a2:function a2(){},
f9:function f9(){},
fc:function fc(){},
fd:function fd(){},
fn:function fn(){},
d9:function d9(){},
fq:function fq(){},
ft:function ft(){},
a3:function a3(){},
fu:function fu(){},
a4:function a4(){},
fw:function fw(){},
a5:function a5(){},
fz:function fz(){},
V:function V(){},
ad:function ad(){},
a6:function a6(){},
W:function W(){},
fJ:function fJ(){},
fK:function fK(){},
fM:function fM(){},
a7:function a7(){},
aR:function aR(){},
fQ:function fQ(){},
fR:function fR(){},
bd:function bd(){},
fT:function fT(){},
ax:function ax(){},
fY:function fY(){},
h_:function h_(){},
h2:function h2(){},
h3:function h3(){},
aT:function aT(){},
bP:function bP(){},
h4:function h4(a){this.a=a},
h5:function h5(){},
aU:function aU(){},
hf:function hf(){},
dh:function dh(){},
hh:function hh(){},
hi:function hi(){},
hj:function hj(){},
hD:function hD(){},
hE:function hE(){},
dk:function dk(){},
hX:function hX(){},
hY:function hY(){},
hZ:function hZ(){},
i1:function i1(){},
i2:function i2(){},
hm:function hm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
j1:function j1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hn:function hn(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
ho:function ho(a){this.a=a},
B:function B(){},
ef:function ef(a,b,c,d,e){var _=this
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
cf:function cf(){},
cz:function cz(){},
cl:function cl(){},
ci:function ci(){},
ct:function ct(){},
cu:function cu(){},
cv:function cv(){},
cw:function cw(){},
cx:function cx(){},
cg:function cg(){},
ck:function ck(){},
ch:function ch(){},
cm:function cm(){},
co:function co(){},
cp:function cp(){},
cr:function cr(){},
cA:function cA(){},
cB:function cB(){},
cC:function cC(){},
cM:function cM(){},
cN:function cN(){},
cL:function cL(){},
cQ:function cQ(){},
cR:function cR(){},
cS:function cS(){},
cT:function cT(){},
cD:function cD(){},
cE:function cE(){},
cG:function cG(){},
cO:function cO(){},
cP:function cP(){}},B={
mN:function(a){var t,s
t=document
s=W.aK
W.a8(t,"keydown",new B.iz(),!1,s)
W.a8(t,"keyup",new B.iA(),!1,s)
if(!$.mO)W.a8(t,"mousemove",new B.iB(),!1,W.N)
s=W.N
W.a8(t,"mousedown",new B.iC(),!1,s)
W.a8(t,"mouseup",new B.iD(),!1,s)},
lO:function(a,b,c,d){var t,s,r,q
t=new Float32Array(H.q(3))
s=$.$get$ib()
r=$.$get$bY()
q=new T.M(new Float32Array(H.q(16)))
q.J()
q=new B.f_(a,b,c,0,new T.r(t),-0.02,s,r,q,new T.r(new Float32Array(H.q(3))),new T.r(new Float32Array(H.q(3))),new T.r(new Float32Array(H.q(3))),new T.r(new Float32Array(H.q(3))),"camera:orbit",!1,!0)
q.dc(a,b,c,d)
return q},
iz:function iz(){},
iA:function iA(){},
iB:function iB(){},
iC:function iC(){},
iD:function iD(){},
f_:function f_(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
f0:function f0(a){this.a=a},
f1:function f1(a){this.a=a},
f2:function f2(){},
f3:function f3(a){this.a=a}},G={
m3:function(a){var t,s,r
t=a.split("\n")
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.h(t[s])}return C.a.ad(t,"\n")},
k9:function(a,b,c){var t,s,r,q
t=J.l(a)
s=t.c0(a,b)
t.ba(a,s,c)
t.bW(a,s)
r=t.b5(a,s,35713)
if(r!=null&&!r){q=t.b4(a,s)
P.U("E:Compilation failed:")
P.U("E:"+G.m3(c))
P.U("E:Failure:")
P.U(C.e.Y("E:",q))
throw H.e(q)}return s},
jC:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.iJ(a[s])
b[t+1]=J.iK(a[s])
b[t+2]=J.ji(a[s])}return b},
lw:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.iJ(a[s])
b[t+1]=J.iK(a[s])}return b},
lx:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.iJ(a[s])
b[t+1]=J.iK(a[s])
b[t+2]=J.ji(a[s])
b[t+3]=J.kZ(a[s])}return b},
lv:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.b1(a[s],0)
b[t+1]=J.b1(a[s],1)
b[t+2]=J.b1(a[s],2)
b[t+3]=J.b1(a[s],3)}return b},
m8:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
for(t=a.e,s=t.gN(t),s=s.gA(s),r=b.x,q=[[P.b,P.n]],p=[P.L],o=[T.ay],n=[T.r],m=[T.ar];s.q();){l=s.gt()
if(!r.B(0,l)){k="Dropping unnecessary attribute: "+H.h(l)
if($.kp>0)H.bm("I: "+k)
continue}j=t.h(0,l)
switch($.$get$S().h(0,l).a){case"vec2":b.a3(l,G.lw(H.dq(j,"$isb",m,"$asb"),null),2)
break
case"vec3":b.a3(l,G.jC(H.dq(j,"$isb",n,"$asb"),null),3)
break
case"vec4":b.a3(l,G.lx(H.dq(j,"$isb",o,"$asb"),null),4)
break
case"float":b.a3(l,new Float32Array(H.i4(H.dq(j,"$isb",p,"$asb"))),1)
break
case"uvec4":b.a3(l,G.lv(H.dq(j,"$isb",q,"$asb"),null),4)
break
default:if(H.az(!1))H.aZ("unknown type for "+H.h(l)+" ["+J.kY(j[0]).j(0)+"] ["+new H.aw(H.ig(j),null).j(0)+"] "+H.h(j))}}},
jS:function(a,b,c,d){var t=new G.fk(b,c,d,null,null,P.G(),P.G(),P.aM(null,null,null,P.v),null,a,!1,!0)
t.dd(a,b,c,d)
return t},
eP:function eP(){},
de:function de(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dD:function dD(){},
dF:function dF(a,b){this.a=a
this.b=b},
ej:function ej(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ea:function ea(a,b,c){this.a=a
this.b=b
this.c=c},
eb:function eb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
em:function em(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dd:function dd(a,b,c){this.a=a
this.b=b
this.c=c},
bN:function bN(a,b,c){this.a=a
this.b=b
this.c=c},
cZ:function cZ(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
d_:function d_(a,b,c,d,e,f,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
f6:function f6(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
fk:function fk(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
bc:function bc(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fv:function fv(){},
fL:function fL(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bM:function bM(){},
ep:function ep(a,b,c,d,e,f){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f}},A={
kn:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=b.dx
t.I(c)
s=b.d
t.cf(0,s)
r=b.ch
if(r!=null&&b.cx!=null){J.b2(b)
q=C.a.gas(e)
p=b.db
o=new T.am(new Float32Array(9))
t.bX(o)
p.dW(o)
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
e.pop()}for(s=b.cy,r=s.length,l=0;l<s.length;s.length===r||(0,H.D)(s),++l)A.kn(a,s[l],t,d,e)},
bF:function bF(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
bI:function bI(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.a=d
_.b=e
_.c=f},
fj:function fj(a,b,c,d,e,f,g,h,i,a0,a1){var _=this
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
dn:function(a){var t,s
t=C.f.e8(a,0,new A.ih())
s=536870911&t+(C.b.cE(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
ih:function ih(){}},D={
lM:function(a){var t,s
t=new P.O(0,$.w,null,[null])
s=new XMLHttpRequest()
C.n.eq(s,"GET",a)
W.a8(s,"loadend",new D.eG(new P.dg(t,[null]),s),!1,W.mZ)
C.n.C(s,"")
return t},
eG:function eG(a,b){this.a=a
this.b=b}},T={am:function am(a){this.a=a},M:function M(a){this.a=a},bG:function bG(a){this.a=a},ar:function ar(a){this.a=a},r:function r(a){this.a=a},ay:function ay(a){this.a=a}},F={
mH:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=document
s=C.r.es(t,"#webgl-canvas")
r=new G.dF(null,s)
q=(s&&C.l).b_(s,"webgl2",P.aL(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
r.a=q
if(q==null)H.E(P.cb('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
p="ChronosGL Config: "+J.b2(J.l_(q))
if($.kp>0)P.U("I: "+p)
J.kL(q,0,0,0,1)
J.dt(q,2929)
o=B.lO(15,-45,0.3,s)
q=new T.M(new Float32Array(H.q(16)))
q.J()
p=new T.M(new Float32Array(H.q(16)))
p.J()
n=new G.f6(o,50,1,1,1000,q,p,new T.M(new Float32Array(H.q(16))),P.G(),"perspective",!1,!0)
n.bk()
p=H.Q([],[A.bI])
m=new A.fj(null,r,p,17664,0,0,0,0,"main",!1,!0)
m.d=new G.ej(r,null,null,null,null)
q=G.jS("demo",r,$.$get$km(),$.$get$kl())
l=new A.bI(q,[n],[],"demo",!1,!0)
H.d(!0)
C.a.l(p,l)
q=G.jS("stars",r,$.$get$ky(),$.$get$kx())
k=[]
j=q.d
i=$.$get$js()
h=new G.cZ(P.G(),"stars",!1,!0)
h.K("cDepthTest",!0)
h.K("cDepthWrite",!1)
h.K("cBlendEquation",i)
i=$.$get$jT()
h.K("cStencilFunc",i)
g=t.createElement("canvas")
g.width=64
g.height=64
f=C.l.cH(g,"2d")
e=(f&&C.i).c_(f,32,32,1,32,32,22);(e&&C.h).ao(e,0,"gray")
C.h.ao(e,1,"black")
f.fillStyle=e
C.i.e6(f,0,0,64,64)
e=C.i.c_(f,32,32,1,32,32,6);(e&&C.h).ao(e,0,"white")
C.h.ao(e,1,"gray")
f.globalAlpha=0.9
f.fillStyle=e
f.arc(32,32,4,0,6.283185307179586,!1)
f.fill("nonzero")
t=new G.fL(!1,!1,!1,!0,1,9729,9729)
d=J.kO(j.a)
c=new G.ep(g,"Utils::Particles",d,3553,j,t)
J.c0(j.a,3553,d)
J.l5(j.a,37440,1)
c.de(g)
t.d9(j,3553)
H.d(J.l0(j.a)===0)
J.c0(j.a,3553,null)
h.K("uTexture",c)
h.K("uPointSize",1000)
b=R.m2(q,2000,100)
t=new Float32Array(H.q(9))
j=new T.M(new Float32Array(H.q(16)))
j.J()
d=new T.M(new Float32Array(H.q(16)))
d.J()
c=new Float32Array(H.q(3))
a=new Float32Array(H.q(3))
a0=new Float32Array(H.q(3))
a1=new Float32Array(H.q(3))
H.d(!0)
C.a.l(k,new A.bF(h,b,[],new T.am(t),j,d,new T.r(c),new T.r(a),new T.r(a0),new T.r(a1),b.a,!1,!0))
H.d(!0)
C.a.l(p,new A.bI(q,[n],k,"stars",!1,!0))
k=new F.iw(s,n,m)
k.$1(null)
W.a8(window,"resize",k,!1,W.j)
h=new G.cZ(P.G(),"mat",!1,!0)
h.K("cDepthTest",!0)
h.K("cDepthWrite",!0)
h.K("cBlendEquation",$.$get$jt())
h.K("cStencilFunc",i)
P.lz([D.lM("../ct_logo.obj")],null,!1).aW(new F.iv(o,m,l,h,C.k))},
iw:function iw(a,b,c){this.a=a
this.b=b
this.c=c},
iv:function iv(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iu:function iu(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
it:function it(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},Y={
lA:function(a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
t=new G.em(!1,[],[],[],P.G())
t.bg("aTexUV")
t.bg("aNormal")
s=P.G()
r=a6.split("\n")
q=[]
p=[]
o=[]
n=Date.now()
m=P.jR("\\s+",!0,!1)
l=P.jR("\\s\\s*\\$",!0,!1)
for(k=r.length,j=0;j<r.length;r.length===k||(0,H.D)(r),++j){i=r[j]
i.toString
h=H.mP(i,m," ")
g=H.mR(h,l,"",0)
if(g.length===0||g[0]==="#")continue
f=g.split(" ")
if(J.z(f[0],"g"))s.i(0,f[1],q.length)
else if(J.z(f[0],"v")){h=H.aP(f[1],null)
e=H.aP(f[2],null)
d=H.aP(f[3],null)
c=new Float32Array(3)
c[0]=h
c[1]=e
c[2]=d
C.a.l(q,new T.r(c))}else if(J.z(f[0],"vt")){h=H.aP(f[1],null)
e=H.aP(f[2],null)
d=new Float32Array(2)
d[0]=h
d[1]=e
C.a.l(o,new T.ar(d))}else if(J.z(f[0],"vn")){h=H.aP(f[1],null)
e=H.aP(f[2],null)
d=H.aP(f[3],null)
c=new Float32Array(3)
c[0]=h
c[1]=e
c[2]=d
C.a.l(p,new T.r(c))}else if(J.z(f[0],"f")){h=f.length
if(h!==4&&h!==5){H.bm("*** Error: face '"+g+"' not handled")
continue}b=[]
a=[]
a0=[]
for(a1=1;h=f.length,a1<h;++a1){a2=J.l7(f[a1],"/")
H.d(a2.length>0)
for(;a2.length<3;)C.a.l(a2,"")
a3=H.iY(a2[0],null,null)-1
a4=J.z(a2[1],"")?-1:H.iY(a2[1],null,null)-1
a5=J.z(a2[2],"")?-1:H.iY(a2[2],null,null)-1
if(a3<q.length)C.a.l(b,q[a3])
else C.a.l(b,new T.r(new Float32Array(3)))
if(a4!==-1&&a4<o.length)C.a.l(a0,o[a4])
else{H.bm("problem uv "+a1+" "+a4)
C.a.l(a0,new T.ar(new Float32Array(2)))}if(a5!==-1&&a5<p.length)C.a.l(a,p[a5])
else{H.bm("problem normals "+a1+" "+a5)
C.a.l(a,new T.r(new Float32Array(3)))}}if(h===4)t.d0(b)
else t.d1(b)
t.d_("aNormal",a)
t.cZ("aTexUV",a0)}}P.U("loaded ("+P.ls(0,0,0,Date.now()-new P.aF(n,!1).a,0,0).j(0)+") "+t.j(0))
return t}},R={
m2:function(a,b,c){var t,s,r,q
t="stars_"+b
s=b*3
r=new Float32Array(H.q(s))
for(q=0;q<s;++q)r[q]=($.$get$k8().ae()-0.5)*c
s=a.d
s=new G.d_(s,J.jh(s.a),0,P.G(),a.e.x,null,0,-1,null,null,P.G(),"meshdata:"+t,!1,!0)
s.be(r)
return s}}
var v=[C,H,J,P,W,B,G,A,D,T,F,Y,R]
setFunctionNamesIfNecessary(v)
var $={}
H.iS.prototype={}
J.a.prototype={
v:function(a,b){return a===b},
gu:function(a){return H.aO(a)},
j:function(a){return H.fe(a)},
gw:function(a){return new H.aw(H.ig(a),null)}}
J.ev.prototype={
j:function(a){return String(a)},
gu:function(a){return a?519018:218159},
gw:function(a){return C.Q},
$isb_:1}
J.ex.prototype={
v:function(a,b){return null==b},
j:function(a){return"null"},
gu:function(a){return 0},
gw:function(a){return C.K}}
J.by.prototype={
gu:function(a){return 0},
gw:function(a){return C.J},
j:function(a){return String(a)},
$isjG:1}
J.f8.prototype={}
J.aS.prototype={}
J.aJ.prototype={
j:function(a){var t=a[$.$get$jA()]
return t==null?this.cX(a):J.b2(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isiP:1}
J.aH.prototype={
aP:function(a,b){if(!!a.immutable$list)throw H.e(new P.t(b))},
aO:function(a,b){if(!!a.fixed$length)throw H.e(new P.t(b))},
l:function(a,b){this.aO(a,"add")
a.push(b)},
bK:function(a,b){var t,s,r,q,p
t=a.length
this.aO(a,"addAll")
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.D)(b),++r,t=p){q=b[r]
p=t+1
H.d(t===a.length||H.E(new P.aa(a)))
a.push(q)}},
ce:function(a,b){return new H.cY(a,b,[H.bl(a,0),null])},
ad:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.h(a[s])
return t.join(b)},
p:function(a,b){return this.h(a,b)},
ge7:function(a){if(a.length>0)return a[0]
throw H.e(H.iQ())},
gas:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.e(H.iQ())},
b9:function(a,b,c,d,e){var t,s
this.aP(a,"setRange")
P.jQ(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.E(P.bH(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.e(H.lI())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=d[e+s]
else for(s=0;s<t;++s)a[b+s]=d[e+s]},
cR:function(a,b){this.aP(a,"sort")
H.da(a,0,a.length-1,P.mu())},
av:function(a){return this.cR(a,null)},
a_:function(a,b){var t
for(t=0;t<a.length;++t)if(J.z(a[t],b))return!0
return!1},
j:function(a){return P.eu(a,"[","]")},
gA:function(a){return new J.dz(a,a.length,0,null,[H.bl(a,0)])},
gu:function(a){return H.aO(a)},
gk:function(a){return a.length},
sk:function(a,b){this.aO(a,"set length")
if(b<0)throw H.e(P.bH(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.K(a,b))
if(b>=a.length||b<0)throw H.e(H.K(a,b))
return a[b]},
i:function(a,b,c){this.aP(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.K(a,b))
if(b>=a.length||b<0)throw H.e(H.K(a,b))
a[b]=c},
$ism:1,
$asm:function(){},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
J.iR.prototype={}
J.dz.prototype={
gt:function(){return this.d},
q:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.e(H.D(t))
r=this.c
if(r>=s){this.sbl(null)
return!1}this.sbl(t[r]);++this.c
return!0},
sbl:function(a){this.d=a}}
J.b7.prototype={
M:function(a,b){var t
if(typeof b!=="number")throw H.e(H.P(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaS(b)
if(this.gaS(a)===t)return 0
if(this.gaS(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaS:function(a){return a===0?1/a<0:a<0},
a0:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(new P.t(""+a+".round()"))},
dS:function(a,b,c){if(this.M(b,c)>0)throw H.e(H.P(b))
if(this.M(a,b)<0)return b
if(this.M(a,c)>0)return c
return a},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu:function(a){return a&0x1FFFFFFF},
Y:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a+b},
a2:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a-b},
cF:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a/b},
D:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a*b},
ax:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bH(a,b)},
H:function(a,b){return(a|0)===a?a/b|0:this.bH(a,b)},
bH:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.e(new P.t("Result of truncating division is "+H.h(t)+": "+H.h(a)+" ~/ "+b))},
aJ:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
cE:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return(a&b)>>>0},
cY:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return(a^b)>>>0},
ak:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a<b},
aj:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a>b},
cG:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a>=b},
gw:function(a){return C.T},
$isT:1}
J.cV.prototype={
gw:function(a){return C.S},
$isL:1,
$isn:1,
$isT:1}
J.ew.prototype={
gw:function(a){return C.R},
$isL:1,
$isT:1}
J.aI.prototype={
bV:function(a,b){if(b<0)throw H.e(H.K(a,b))
if(b>=a.length)H.E(H.K(a,b))
return a.charCodeAt(b)},
a4:function(a,b){if(b>=a.length)throw H.e(H.K(a,b))
return a.charCodeAt(b)},
Y:function(a,b){if(typeof b!=="string")throw H.e(P.jr(b,null,null))
return a+b},
cS:function(a,b){var t=a.split(b)
return t},
cU:function(a,b,c){var t
if(c>a.length)throw H.e(P.bH(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
cT:function(a,b){return this.cU(a,b,0)},
aw:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.ff(b,null,null))
if(b>c)throw H.e(P.ff(b,null,null))
if(c>a.length)throw H.e(P.ff(c,null,null))
return a.substring(b,c)},
cV:function(a,b){return this.aw(a,b,null)},
eC:function(a){var t,s,r,q,p
t=a.trim()
s=t.length
if(s===0)return t
if(this.a4(t,0)===133){r=J.lJ(t,1)
if(r===s)return""}else r=0
q=s-1
p=this.bV(t,q)===133?J.lK(t,q):s
if(r===0&&p===s)return t
return t.substring(r,p)},
M:function(a,b){var t
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
gw:function(a){return C.L},
gk:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.e(H.K(a,b))
return a[b]},
$ism:1,
$asm:function(){},
$isv:1}
H.c.prototype={$asc:null}
H.b8.prototype={
gA:function(a){return new H.cW(this,this.gk(this),0,null,[H.aA(this,"b8",0)])},
eA:function(a,b){var t,s
t=H.Q([],[H.aA(this,"b8",0)])
C.a.sk(t,this.gk(this))
for(s=0;s<this.gk(this);++s)t[s]=this.p(0,s)
return t},
ez:function(a){return this.eA(a,!0)}}
H.cW.prototype={
gt:function(){return this.d},
q:function(){var t,s,r,q
t=this.a
s=J.a9(t)
r=s.gk(t)
if(this.b!==r)throw H.e(new P.aa(t))
q=this.c
if(q>=r){this.sa6(null)
return!1}this.sa6(s.p(t,q));++this.c
return!0},
sa6:function(a){this.d=a}}
H.cX.prototype={
gA:function(a){return new H.eI(null,J.du(this.a),this.b,this.$ti)},
gk:function(a){return J.dv(this.a)},
$asak:function(a,b){return[b]}}
H.dR.prototype={$isc:1,
$asc:function(a,b){return[b]}}
H.eI.prototype={
q:function(){var t=this.b
if(t.q()){this.sa6(this.c.$1(t.gt()))
return!0}this.sa6(null)
return!1},
gt:function(){return this.a},
sa6:function(a){this.a=a},
$ascU:function(a,b){return[b]}}
H.cY.prototype={
gk:function(a){return J.dv(this.a)},
p:function(a,b){return this.b.$1(J.kU(this.a,b))},
$asc:function(a,b){return[b]},
$asb8:function(a,b){return[b]},
$asak:function(a,b){return[b]}}
H.cc.prototype={}
H.iE.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.iF.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.hM.prototype={
sei:function(a){this.z=a},
sem:function(a){this.ch=a}}
H.aW.prototype={
bL:function(a,b){if(!this.f.v(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.aM()},
ev:function(a){var t,s,r,q,p
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
if(q===r.c)r.bA();++r.d}this.y=!1}this.aM()},
dM:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.u(a),s=0;r=this.ch,s<r.length;s+=2)if(t.v(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
eu:function(a){var t,s,r
if(this.ch==null)return
for(t=J.u(a),s=0;r=this.ch,s<r.length;s+=2)if(t.v(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.E(new P.t("removeRange"))
P.jQ(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
cP:function(a,b){if(!this.r.v(0,a))return
this.db=b},
ec:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.C(0,c)
return}H.d(b===1)
t=this.cx
if(t==null){t=P.iV(null,null)
this.cx=t}t.P(0,new H.hG(a,c))},
eb:function(a,b){var t
if(!this.r.v(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.ar()
return}H.d(b===1)
t=this.cx
if(t==null){t=P.iV(null,null)
this.cx=t}t.P(0,this.gej())},
ed:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.U(a)
if(b!=null)P.U(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.b2(a)
s[1]=b==null?null:b.j(0)
for(r=new P.bR(t,t.r,null,null,[null]),r.c=t.e;r.q();)r.d.C(0,s)},
aa:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.af(o)
p=H.as(o)
this.ed(q,p)
if(this.db){this.ar()
if(this===u.globalState.e)throw o}}finally{this.cy=H.mp(r)
u.globalState.d=H.kt(t,"$isaW")
if(t!=null)$=t.geh()
if(this.cx!=null)for(;n=this.cx,!n.gaq(n);)this.cx.ci().$0()}return s},
cd:function(a){return this.b.h(0,a)},
bp:function(a,b){var t=this.b
if(t.B(0,a))throw H.e(P.cb("Registry: ports must be registered only once."))
t.i(0,a,b)},
aM:function(){var t=this.b
if(t.gk(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.ar()},
ar:function(){var t,s,r
t=this.cx
if(t!=null)t.R(0)
for(t=this.b,s=t.gcB(t),s=s.gA(s);s.q();)s.gt().dr()
t.R(0)
this.c.R(0)
u.globalState.z.af(0,this.a)
this.dx.R(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].C(0,t[r+1])
this.ch=null}},
geh:function(){return this.d},
gdV:function(){return this.e}}
H.hG.prototype={
$0:function(){this.a.C(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.hk.prototype={
dZ:function(){var t=this.a
if(t.b===t.c)return
return t.ci()},
ck:function(){var t,s,r
t=this.dZ()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.B(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gaq(s)}else s=!1
else s=!1
else s=!1
if(s)H.E(P.cb("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gaq(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aL(["command","close"])
r=new H.ae(!0,new P.dj(0,null,null,null,null,null,0,[null,P.n])).G(r)
s.toString
self.postMessage(r)}return!1}t.er()
return!0},
bF:function(){if(self.window!=null)new H.hl(this).$0()
else for(;this.ck(););},
ag:function(){var t,s,r,q,p
if(!u.globalState.x)this.bF()
else try{this.bF()}catch(r){t=H.af(r)
s=H.as(r)
q=u.globalState.Q
p=P.aL(["command","error","msg",H.h(t)+"\n"+H.h(s)])
p=new H.ae(!0,P.bS(null,P.n)).G(p)
q.toString
self.postMessage(p)}}}
H.hl.prototype={
$0:function(){if(!this.a.ck())return
P.m1(C.m,this)},
$S:function(){return{func:1,v:true}}}
H.aX.prototype={
er:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.aa(this.b)}}
H.hL.prototype={}
H.es.prototype={
$0:function(){H.lE(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.et.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(!this.d)this.a.$1(this.c)
else{s=this.a
if(H.bj(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.bj(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.aM()},
$S:function(){return{func:1,v:true}}}
H.he.prototype={}
H.bf.prototype={
C:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.mc(b)
if(t.gdV()===s){s=J.a9(r)
switch(s.h(r,0)){case"pause":t.bL(s.h(r,1),s.h(r,2))
break
case"resume":t.ev(s.h(r,1))
break
case"add-ondone":t.dM(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.eu(s.h(r,1))
break
case"set-errors-fatal":t.cP(s.h(r,1),s.h(r,2))
break
case"ping":t.ec(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.eb(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.af(0,s)
break}return}u.globalState.f.a.P(0,new H.aX(t,new H.hO(this,r),"receive"))},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bf){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gu:function(a){return this.b.a}}
H.hO.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dl(0,this.b)},
$S:function(){return{func:1}}}
H.bT.prototype={
C:function(a,b){var t,s,r
t=P.aL(["command","message","port",this,"msg",b])
s=new H.ae(!0,P.bS(null,P.n)).G(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bT){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gu:function(a){return C.b.cY((this.b<<16^this.a<<8)>>>0,this.c)}}
H.bb.prototype={
dr:function(){this.c=!0
this.b=null},
dl:function(a,b){if(this.c)return
this.b.$1(b)},
$islX:1}
H.fN.prototype={
df:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.P(0,new H.aX(s,new H.fO(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.b0(new H.fP(this,b),0),a)}else{H.d(a>0)
throw H.e(new P.t("Timer greater than 0."))}}}
H.fO.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.fP.prototype={
$0:function(){this.a.c=null
H.is()
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.aj.prototype={
gu:function(a){var t=this.a
t=C.b.aJ(t,0)^C.b.H(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
v:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.aj){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.ae.prototype={
G:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gk(t))
t=J.u(a)
if(!!t.$isbA)return["buffer",a]
if(!!t.$isb9)return["typed",a]
if(!!t.$ism)return this.cL(a)
if(!!t.$islB){r=this.gcI()
q=t.gN(a)
q=H.iW(q,r,H.aA(q,"ak",0),null)
q=P.jK(q,!0,H.aA(q,"ak",0))
t=t.gcB(a)
t=H.iW(t,r,H.aA(t,"ak",0),null)
return["map",q,P.jK(t,!0,H.aA(t,"ak",0))]}if(!!t.$isjG)return this.cM(a)
if(!!t.$isa)this.cz(a)
if(!!t.$islX)this.ah(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isbf)return this.cN(a)
if(!!t.$isbT)return this.cO(a)
if(!!t.$isb4){p=a.$static_name
if(p==null)this.ah(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isaj)return["capability",a.a]
if(!(a instanceof P.o))this.cz(a)
return["dart",u.classIdExtractor(a),this.cK(u.classFieldsExtractor(a))]},
ah:function(a,b){throw H.e(new P.t((b==null?"Can't transmit:":b)+" "+H.h(a)))},
cz:function(a){return this.ah(a,null)},
cL:function(a){var t
H.d(typeof a!=="string")
t=this.cJ(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.ah(a,"Can't serialize indexable: ")},
cJ:function(a){var t,s
t=[]
C.a.sk(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.G(a[s])
return t},
cK:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.G(a[t]))
return a},
cM:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.ah(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sk(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.G(a[t[r]])
return["js-object",t,s]},
cO:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cN:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.aV.prototype={
S:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.e(P.iM("Bad serialized message: "+H.h(a)))
switch(C.a.ge7(a)){case"ref":H.d(J.z(a[0],"ref"))
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
s=H.Q(this.a9(t),[null])
s.fixed$length=Array
return s
case"extendable":H.d(J.z(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.Q(this.a9(t),[null])
case"mutable":H.d(J.z(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.a9(t)
case"const":H.d(J.z(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
s=H.Q(this.a9(t),[null])
s.fixed$length=Array
return s
case"map":return this.e1(a)
case"sendport":return this.e2(a)
case"raw sendport":H.d(J.z(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.e0(a)
case"function":H.d(J.z(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.d(J.z(a[0],"capability"))
return new H.aj(a[1])
case"dart":H.d(J.z(a[0],"dart"))
r=a[1]
q=a[2]
p=u.instanceFromClassId(r)
C.a.l(this.b,p)
this.a9(q)
return u.initializeEmptyInstance(r,p,q)
default:throw H.e("couldn't deserialize: "+H.h(a))}},
a9:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.S(a[t]))
return a},
e1:function(a){var t,s,r,q,p
H.d(J.z(a[0],"map"))
t=a[1]
s=a[2]
r=P.G()
C.a.l(this.b,r)
t=J.l4(t,this.ge_()).ez(0)
for(q=J.a9(s),p=0;p<t.length;++p)r.i(0,t[p],this.S(q.h(s,p)))
return r},
e2:function(a){var t,s,r,q,p,o,n
H.d(J.z(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.cd(r)
if(o==null)return
n=new H.bf(o,s)}else n=new H.bT(t,r,s)
C.a.l(this.b,n)
return n},
e0:function(a){var t,s,r,q,p,o
H.d(J.z(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.a9(t),p=J.a9(s),o=0;o<q.gk(t);++o)r[q.h(t,o)]=this.S(p.h(s,o))
return r}}
H.fi.prototype={}
H.fU.prototype={
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
H.d6.prototype={
j:function(a){var t=this.b
if(t==null)return"NullError: "+H.h(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.eA.prototype={
j:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.h(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.h(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.h(this.a)+")"}}
H.fX.prototype={
j:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.iG.prototype={
$1:function(a){if(!!J.u(a).$isb5)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.dl.prototype={
j:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.im.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.io.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.ip.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.iq.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.ir.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.b4.prototype={
j:function(a){return"Closure '"+H.d7(this).trim()+"'"},
$isiP:1,
geE:function(){return this},
$D:null}
H.fH.prototype={}
H.fy.prototype={
j:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bn.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bn))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gu:function(a){var t,s
t=this.c
if(t==null)s=H.aO(this.a)
else s=typeof t!=="object"?J.ah(t):H.aO(t)
return(s^H.aO(this.b))>>>0},
j:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.h(this.d)+"' of "+H.fe(t)}}
H.fW.prototype={
j:function(a){return this.a}}
H.dE.prototype={
j:function(a){return this.a}}
H.fo.prototype={
j:function(a){return"RuntimeError: "+H.h(this.a)}}
H.h9.prototype={
j:function(a){return C.e.Y("Assertion failed: ",P.iO(this.a))}}
H.aw.prototype={
j:function(a){var t,s
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
H.ac.prototype={
gk:function(a){return this.a},
gaq:function(a){return this.a===0},
gN:function(a){return new H.eD(this,[H.bl(this,0)])},
gcB:function(a){return H.iW(this.gN(this),new H.ez(this),H.bl(this,0),H.bl(this,1))},
B:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bx(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bx(s,b)}else return this.ee(b)},
ee:function(a){var t=this.d
if(t==null)return!1
return this.ac(this.an(t,this.ab(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.a7(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.a7(r,b)
return s==null?null:s.b}else return this.ef(b)},
ef:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.an(t,this.ab(a))
r=this.ac(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aF()
this.b=t}this.bn(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aF()
this.c=s}this.bn(s,b,c)}else{r=this.d
if(r==null){r=this.aF()
this.d=r}q=this.ab(b)
p=this.an(r,q)
if(p==null)this.aI(r,q,[this.aG(b,c)])
else{o=this.ac(p,b)
if(o>=0)p[o].b=c
else p.push(this.aG(b,c))}}},
af:function(a,b){if(typeof b==="string")return this.bE(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bE(this.c,b)
else return this.eg(b)},
eg:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.an(t,this.ab(a))
r=this.ac(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bI(q)
return q.b},
R:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
aR:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.e(new P.aa(this))
t=t.c}},
bn:function(a,b,c){var t=this.a7(a,b)
if(t==null)this.aI(a,b,this.aG(b,c))
else t.b=c},
bE:function(a,b){var t
if(a==null)return
t=this.a7(a,b)
if(t==null)return
this.bI(t)
this.by(a,b)
return t.b},
aG:function(a,b){var t,s
t=new H.eC(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bI:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.r=this.r+1&67108863},
ab:function(a){return J.ah(a)&0x3ffffff},
ac:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.z(a[s].a,b))return s
return-1},
j:function(a){return P.lN(this)},
a7:function(a,b){return a[b]},
an:function(a,b){return a[b]},
aI:function(a,b,c){H.d(c!=null)
a[b]=c},
by:function(a,b){delete a[b]},
bx:function(a,b){return this.a7(a,b)!=null},
aF:function(){var t=Object.create(null)
this.aI(t,"<non-identifier-key>",t)
this.by(t,"<non-identifier-key>")
return t},
$islB:1}
H.ez.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.eC.prototype={}
H.eD.prototype={
gk:function(a){return this.a.a},
gA:function(a){var t,s
t=this.a
s=new H.eE(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.eE.prototype={
gt:function(){return this.d},
q:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.aa(t))
else{t=this.c
if(t==null){this.sbm(null)
return!1}else{this.sbm(t.a)
this.c=this.c.c
return!0}}},
sbm:function(a){this.d=a}}
H.ii.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.ij.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.v]}}}
H.ik.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.v]}}}
H.ey.prototype={
j:function(a){return"RegExp/"+this.a+"/"},
gbC:function(){var t=this.c
if(t!=null)return t
t=this.b
t=H.jI(this.a,t.multiline,!t.ignoreCase,!0)
this.c=t
return t},
dA:function(a,b){var t,s
t=this.gbC()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
return H.mb(this,s)}}
H.hN.prototype={
h:function(a,b){return this.b[b]},
dk:function(a,b){var t,s
t=this.b
s=t.input
H.d(typeof s==="string")
t=t.index
H.d(typeof t==="number"&&Math.floor(t)===t)}}
H.bA.prototype={
gw:function(a){return C.C},
$isbA:1}
H.b9.prototype={$isb9:1}
H.eQ.prototype={
gw:function(a){return C.D}}
H.d1.prototype={
gk:function(a){return a.length},
$ism:1,
$asm:function(){},
$isp:1,
$asp:function(){}}
H.d2.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.K(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.E(H.K(a,b))
a[b]=c}}
H.d3.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.E(H.K(a,b))
a[b]=c},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]}}
H.d0.prototype={
gw:function(a){return C.E},
$isc:1,
$asc:function(){return[P.L]},
$isb:1,
$asb:function(){return[P.L]},
$iseg:1}
H.eR.prototype={
gw:function(a){return C.F},
$isc:1,
$asc:function(){return[P.L]},
$isb:1,
$asb:function(){return[P.L]}}
H.eS.prototype={
gw:function(a){return C.G},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.K(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]}}
H.eT.prototype={
gw:function(a){return C.H},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.K(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]},
$isjD:1}
H.eU.prototype={
gw:function(a){return C.I},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.K(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]}}
H.eV.prototype={
gw:function(a){return C.M},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.K(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]},
$isk5:1}
H.eW.prototype={
gw:function(a){return C.N},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.K(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]},
$isk6:1}
H.d4.prototype={
gw:function(a){return C.O},
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.K(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]}}
H.eX.prototype={
gw:function(a){return C.P},
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.K(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]},
$isk7:1}
H.bB.prototype={
$asm:function(){},
$isc:1,
$asc:function(){return[P.n]},
$asp:function(){},
$isb:1,
$asb:function(){return[P.n]}}
H.bC.prototype={
$asm:function(){},
$isc:1,
$asc:function(){return[P.L]},
$asp:function(){},
$isb:1,
$asb:function(){return[P.L]}}
H.bD.prototype={
$asm:function(){},
$asc:function(){return[P.L]},
$asp:function(){},
$asb:function(){return[P.L]}}
H.bE.prototype={
$asm:function(){},
$asc:function(){return[P.n]},
$asp:function(){},
$asb:function(){return[P.n]}}
P.hb.prototype={
$1:function(a){var t,s
H.is()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.ha.prototype={
$1:function(a){var t,s
t=this.a
H.d(t.a==null);++u.globalState.f.b
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.hc.prototype={
$0:function(){H.is()
this.a.$0()},
$S:function(){return{func:1}}}
P.hd.prototype={
$0:function(){H.is()
this.a.$0()},
$S:function(){return{func:1}}}
P.el.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.b)this.d.E(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.b)this.d.E(t.c,t.d)},
$S:function(){return{func:1,args:[,,]}}}
P.ek.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){r[this.e]=a
if(s===0)this.d.bw(r)}else if(t.b===0&&!this.b)this.d.E(t.c,t.d)},
$S:function(){return{func:1,args:[,]}}}
P.hg.prototype={
dU:function(a,b){if(a==null)a=new P.ba()
if(this.a.a!==0)throw H.e(new P.aQ("Future already completed"))
$.w.toString
this.E(a,b)},
dT:function(a){return this.dU(a,null)}}
P.dg.prototype={
ap:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.aQ("Future already completed"))
t.bq(b)},
E:function(a,b){this.a.br(a,b)}}
P.i_.prototype={
ap:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.aQ("Future already completed"))
t.aB(b)},
E:function(a,b){this.a.E(a,b)}}
P.di.prototype={
en:function(a){if(this.c!==6)return!0
H.d(!0)
return this.b.b.aU(this.d,a.a)},
ea:function(a){var t,s
t=(this.c&2)!==0
if(t){H.d(t)
t=this.e!=null}else t=!1
H.d(t)
s=this.e
t=this.b.b
if(H.bj(s,{func:1,args:[P.o,P.bJ]}))return t.ew(s,a.a,a.b)
else return t.aU(s,a.a)}}
P.O.prototype={
aX:function(a,b){var t,s,r
t=$.w
if(t!==C.d){t.toString
if(b!=null)b=P.mh(b,t)}s=new P.O(0,t,null,[null])
r=b==null?1:3
this.bo(new P.di(null,s,r,a,b,[H.bl(this,0),null]))
return s},
aW:function(a){return this.aX(a,null)},
bs:function(a){H.d(this.a<4)
H.d(a.a>=4)
this.a=a.a
this.c=a.c},
bo:function(a){var t
H.d(a.a==null)
t=this.a
if(t<=1){a.a=H.kt(this.c,"$isdi")
this.c=a}else{if(t===2){H.d(!0)
t=this.c
if(t.a<4){t.bo(a)
return}this.bs(t)}H.d(this.a>=4)
t=this.b
t.toString
P.bh(null,null,t,new P.hq(this,a))}},
bD:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.d(!0)
s=this.c
if(s.a<4){s.bD(a)
return}this.bs(s)}H.d(this.a>=4)
t.a=this.a8(a)
s=this.b
s.toString
P.bh(null,null,s,new P.hy(t,this))}},
aH:function(){H.d(this.a<4)
var t=this.c
this.c=null
return this.a8(t)},
a8:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aB:function(a){var t,s
H.d(this.a<4)
t=this.$ti
if(H.bX(a,"$isb6",t,"$asb6"))if(H.bX(a,"$isO",t,null))P.ht(a,this)
else P.ka(a,this)
else{s=this.aH()
H.d(this.a<4)
this.a=4
this.c=a
P.be(this,s)}},
bw:function(a){var t
H.d(this.a<4)
H.d(!J.u(a).$isb6)
t=this.aH()
H.d(this.a<4)
this.a=4
this.c=a
P.be(this,t)},
E:function(a,b){var t
H.d(this.a<4)
t=this.aH()
H.d(this.a<4)
this.a=8
this.c=new P.b3(a,b)
P.be(this,t)},
dt:function(a){return this.E(a,null)},
bq:function(a){var t
H.d(this.a<4)
if(H.bX(a,"$isb6",this.$ti,"$asb6")){this.dq(a)
return}H.d(this.a===0)
this.a=1
t=this.b
t.toString
P.bh(null,null,t,new P.hs(this,a))},
dq:function(a){var t
if(H.bX(a,"$isO",this.$ti,null)){if(a.a===8){H.d(this.a===0)
this.a=1
t=this.b
t.toString
P.bh(null,null,t,new P.hx(this,a))}else P.ht(a,this)
return}P.ka(a,this)},
br:function(a,b){var t
H.d(this.a<4)
H.d(this.a===0)
this.a=1
t=this.b
t.toString
P.bh(null,null,t,new P.hr(this,a,b))},
$isb6:1,
gaK:function(){return this.a},
gdI:function(){return this.c}}
P.hq.prototype={
$0:function(){P.be(this.a,this.b)},
$S:function(){return{func:1}}}
P.hy.prototype={
$0:function(){P.be(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.hu.prototype={
$1:function(a){var t=this.a
H.d(t.a===1)
H.d(t.a===1)
t.a=0
t.aB(a)},
$S:function(){return{func:1,args:[,]}}}
P.hv.prototype={
$2:function(a,b){var t=this.a
H.d(t.a===1)
t.E(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.hw.prototype={
$0:function(){this.a.E(this.b,this.c)},
$S:function(){return{func:1}}}
P.hs.prototype={
$0:function(){this.a.bw(this.b)},
$S:function(){return{func:1}}}
P.hx.prototype={
$0:function(){P.ht(this.b,this.a)},
$S:function(){return{func:1}}}
P.hr.prototype={
$0:function(){this.a.E(this.b,this.c)},
$S:function(){return{func:1}}}
P.hB.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.d
p=q.c
H.d((p&1)===0)
o=(p&2)===0
H.d(o)
t=null
try{H.d(o)
H.d(p===8)
t=q.b.b.cj(q.d)}catch(n){s=H.af(n)
r=H.as(n)
if(this.c){q=this.a.a
H.d(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.d(q.a===8)
p.b=q.c}else p.b=new P.b3(s,r)
p.a=!0
return}if(!!J.u(t).$isb6){if(t instanceof P.O&&t.gaK()>=4){if(t.gaK()===8){q=t
H.d(q.gaK()===8)
p=this.b
p.b=q.gdI()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.aW(new P.hC(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.hC.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.hA.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.d((r.c&1)!==0)
this.a.b=r.b.b.aU(r.d,this.c)}catch(q){t=H.af(q)
s=H.as(q)
r=this.a
r.b=new P.b3(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.hz.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.d(q.a===8)
t=q.c
q=this.c
if(q.en(t)){H.d((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.ea(t)
p.a=!1}}catch(o){s=H.af(o)
r=H.as(o)
q=this.a
p=q.a
H.d(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.d(q.a===8)
m.b=q.c}else m.b=new P.b3(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.df.prototype={}
P.fA.prototype={
gk:function(a){var t,s
t={}
s=new P.O(0,$.w,null,[P.n])
t.a=0
this.ek(new P.fC(t),!0,new P.fD(t,s),s.gds())
return s}}
P.fC.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.fD.prototype={
$0:function(){this.b.aB(this.a.a)},
$S:function(){return{func:1}}}
P.fB.prototype={}
P.b3.prototype={
j:function(a){return H.h(this.a)},
$isb5:1}
P.i3.prototype={}
P.i6.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.ba()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.e(t)
r=H.e(t)
r.stack=s.j(0)
throw r},
$S:function(){return{func:1}}}
P.hQ.prototype={
ex:function(a){var t,s,r
try{if(C.d===$.w){a.$0()
return}P.kc(null,null,this,a)}catch(r){t=H.af(r)
s=H.as(r)
P.i5(null,null,this,t,s)}},
ey:function(a,b){var t,s,r
try{if(C.d===$.w){a.$1(b)
return}P.kd(null,null,this,a,b)}catch(r){t=H.af(r)
s=H.as(r)
P.i5(null,null,this,t,s)}},
dP:function(a){return new P.hS(this,a)},
aN:function(a){return new P.hR(this,a)},
dQ:function(a){return new P.hT(this,a)},
h:function(a,b){return},
cj:function(a){if($.w===C.d)return a.$0()
return P.kc(null,null,this,a)},
aU:function(a,b){if($.w===C.d)return a.$1(b)
return P.kd(null,null,this,a,b)},
ew:function(a,b,c){if($.w===C.d)return a.$2(b,c)
return P.mi(null,null,this,a,b,c)}}
P.hS.prototype={
$0:function(){return this.a.cj(this.b)},
$S:function(){return{func:1}}}
P.hR.prototype={
$0:function(){return this.a.ex(this.b)},
$S:function(){return{func:1}}}
P.hT.prototype={
$1:function(a){return this.a.ey(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.dj.prototype={
ab:function(a){return H.mJ(a)&0x3ffffff},
ac:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.hI.prototype={
gA:function(a){var t=new P.bR(this,this.r,null,null,[null])
t.c=this.e
return t},
gk:function(a){return this.a},
a_:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.du(b)},
du:function(a){var t=this.d
if(t==null)return!1
return this.am(t[this.al(a)],a)>=0},
cd:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.a_(0,a)?a:null
else return this.dF(a)},
dF:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.al(a)]
r=this.am(s,a)
if(r<0)return
return J.b1(s,r).gdw()},
l:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.bt(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.bt(r,b)}else return this.P(0,b)},
P:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.m9()
this.d=t}s=this.al(b)
r=t[s]
if(r==null){q=[this.aA(b)]
H.d(q!=null)
t[s]=q}else{if(this.am(r,b)>=0)return!1
r.push(this.aA(b))}return!0},
af:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bu(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bu(this.c,b)
else return this.dG(0,b)},
dG:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.al(b)]
r=this.am(s,b)
if(r<0)return!1
this.bv(s.splice(r,1)[0])
return!0},
R:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
bt:function(a,b){var t
if(a[b]!=null)return!1
t=this.aA(b)
H.d(!0)
a[b]=t
return!0},
bu:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bv(t)
delete a[b]
return!0},
aA:function(a){var t,s
t=new P.hJ(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bv:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.r=this.r+1&67108863},
al:function(a){return J.ah(a)&0x3ffffff},
am:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.z(a[s].a,b))return s
return-1},
$isc:1,
$asc:null}
P.hJ.prototype={
gdw:function(){return this.a}}
P.bR.prototype={
gt:function(){return this.d},
q:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.aa(t))
else{t=this.c
if(t==null){this.sa5(null)
return!1}else{this.sa5(t.a)
this.c=this.c.b
return!0}}},
sa5:function(a){this.d=a}}
P.hF.prototype={}
P.x.prototype={
gA:function(a){return new H.cW(a,this.gk(a),0,null,[H.aA(a,"x",0)])},
p:function(a,b){return this.h(a,b)},
ce:function(a,b){return new H.cY(a,b,[H.aA(a,"x",0),null])},
e8:function(a,b,c){var t,s,r
t=this.gk(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gk(a))throw H.e(new P.aa(a))}return s},
j:function(a){return P.eu(a,"[","]")},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
P.eJ.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.h(a)
t.a=s+": "
t.a+=H.h(b)},
$S:function(){return{func:1,args:[,,]}}}
P.eF.prototype={
gA:function(a){return new P.hK(this,this.c,this.d,this.b,null,this.$ti)},
gaq:function(a){return this.b===this.c},
gk:function(a){return(this.c-this.b&this.a.length-1)>>>0},
p:function(a,b){var t=(this.c-this.b&this.a.length-1)>>>0
if(C.b.aj(0,b)||b>=t)H.E(P.C(b,this,"index",null,t))
return this.a[(C.b.Y(this.b,b)&this.a.length-1)>>>0]},
R:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
j:function(a){return P.eu(this,"{","}")},
ci:function(){var t,s,r
t=this.b
if(t===this.c)throw H.e(H.iQ());++this.d
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
if(this.b===t)this.bA();++this.d},
bA:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.Q(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.b9(s,0,q,t,r)
C.a.b9(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbG(s)},
da:function(a,b){var t
H.d(!0)
t=new Array(8)
t.fixed$length=Array
this.sbG(H.Q(t,[b]))},
sbG:function(a){this.a=a},
$asc:null}
P.hK.prototype={
gt:function(){return this.e},
q:function(){var t,s
t=this.a
if(this.c!==t.d)H.E(new P.aa(t))
s=this.d
if(s===this.b){this.sa5(null)
return!1}this.sa5(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sa5:function(a){this.e=a}}
P.fs.prototype={
j:function(a){return P.eu(this,"{","}")},
$isc:1,
$asc:null}
P.fr.prototype={}
P.b_.prototype={}
P.F.prototype={}
P.aF.prototype={
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.aF))return!1
return this.a===b.a&&this.b===b.b},
M:function(a,b){return C.b.M(this.a,b.a)},
gu:function(a){var t=this.a
return(t^C.b.aJ(t,30))&1073741823},
j:function(a){var t,s,r,q,p,o,n
t=P.lq(H.lV(this))
s=P.c6(H.lT(this))
r=P.c6(H.lP(this))
q=P.c6(H.lQ(this))
p=P.c6(H.lS(this))
o=P.c6(H.lU(this))
n=P.lr(H.lR(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
geo:function(){return this.a},
d3:function(a,b){var t
if(!(Math.abs(this.a)>864e13))t=!1
else t=!0
if(t)throw H.e(P.iM("DateTime is outside valid range: "+this.geo()))},
$isF:1,
$asF:function(){return[P.aF]}}
P.L.prototype={$isF:1,
$asF:function(){return[P.T]}}
P.at.prototype={
ak:function(a,b){return C.b.ak(this.a,b.gdv())},
aj:function(a,b){return C.b.aj(this.a,b.gdv())},
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.at))return!1
return this.a===b.a},
gu:function(a){return this.a&0x1FFFFFFF},
M:function(a,b){return C.b.M(this.a,b.a)},
j:function(a){var t,s,r,q,p
t=new P.dQ()
s=this.a
if(s<0)return"-"+new P.at(0-s).j(0)
r=t.$1(C.b.H(s,6e7)%60)
q=t.$1(C.b.H(s,1e6)%60)
p=new P.dP().$1(s%1e6)
return""+C.b.H(s,36e8)+":"+H.h(r)+":"+H.h(q)+"."+H.h(p)},
$isF:1,
$asF:function(){return[P.at]}}
P.dP.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.v,args:[P.n]}}}
P.dQ.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.v,args:[P.n]}}}
P.b5.prototype={}
P.c1.prototype={
j:function(a){return"Assertion failed"}}
P.ba.prototype={
j:function(a){return"Throw of null."}}
P.ai.prototype={
gaD:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaC:function(){return""},
j:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.h(t)
q=this.gaD()+s+r
if(!this.a)return q
p=this.gaC()
o=P.iO(this.b)
return q+p+": "+H.h(o)}}
P.d8.prototype={
gaD:function(){return"RangeError"},
gaC:function(){var t,s,r
H.d(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.h(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.h(t)
else if(r>t)s=": Not in range "+H.h(t)+".."+H.h(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.h(t)}return s}}
P.eq.prototype={
gaD:function(){return"RangeError"},
gaC:function(){H.d(this.a)
if(J.kD(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.h(t)},
gk:function(a){return this.f}}
P.t.prototype={
j:function(a){return"Unsupported operation: "+this.a}}
P.bO.prototype={
j:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.aQ.prototype={
j:function(a){return"Bad state: "+this.a}}
P.aa.prototype={
j:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.h(P.iO(t))+"."}}
P.db.prototype={
j:function(a){return"Stack Overflow"},
$isb5:1}
P.dI.prototype={
j:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.hp.prototype={
j:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.h(t)}}
P.bv.prototype={
j:function(a){var t,s,r
t=this.a
s=t!=null&&""!==t?"FormatException: "+H.h(t):"FormatException"
r=this.b
if(typeof r!=="string")return s
if(r.length>78)r=C.e.aw(r,0,75)+"..."
return s+"\n"+r}}
P.dS.prototype={
j:function(a){return"Expando:"+H.h(this.a)},
h:function(a,b){var t,s
t=this.b
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.E(P.jr(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.iX(b,"expando$values")
return s==null?null:H.iX(s,t)},
i:function(a,b,c){var t,s
t=this.b
if(typeof t!=="string")t.set(b,c)
else{s=H.iX(b,"expando$values")
if(s==null){s=new P.o()
H.jP(b,"expando$values",s)}H.jP(s,t,c)}}}
P.n.prototype={$isF:1,
$asF:function(){return[P.T]}}
P.ak.prototype={
gk:function(a){var t,s
H.d(!this.$isc)
t=this.gA(this)
for(s=0;t.q();)++s
return s},
p:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(P.lj("index"))
if(b<0)H.E(P.bH(b,0,null,"index",null))
for(t=this.gA(this),s=0;t.q();){r=t.gt()
if(b===s)return r;++s}throw H.e(P.C(b,this,"index",null,s))},
j:function(a){return P.lH(this,"(",")")}}
P.cU.prototype={}
P.b.prototype={$isc:1,$asc:null,$asb:null}
P.av.prototype={}
P.aN.prototype={
gu:function(a){return P.o.prototype.gu.call(this,this)},
j:function(a){return"null"}}
P.T.prototype={$isF:1,
$asF:function(){return[P.T]}}
P.o.prototype={constructor:P.o,$iso:1,
v:function(a,b){return this===b},
gu:function(a){return H.aO(this)},
j:function(a){return H.fe(this)},
gw:function(a){return new H.aw(H.ig(this),null)},
toString:function(){return this.j(this)}}
P.bJ.prototype={}
P.v.prototype={$isF:1,
$asF:function(){return[P.v]}}
P.bK.prototype={
gk:function(a){return this.a.length},
j:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
gZ:function(){return this.a}}
W.k.prototype={}
W.dx.prototype={
j:function(a){return String(a)},
$isa:1}
W.dy.prototype={
j:function(a){return String(a)},
$isa:1}
W.Z.prototype={$iso:1}
W.dB.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.Z]},
$isc:1,
$asc:function(){return[W.Z]},
$isp:1,
$asp:function(){return[W.Z]},
$isb:1,
$asb:function(){return[W.Z]}}
W.c2.prototype={}
W.dC.prototype={$isa:1}
W.c3.prototype={
b_:function(a,b,c){if(c!=null)return this.dB(a,b,P.ms(c,null))
return this.dC(a,b)},
cH:function(a,b){return this.b_(a,b,null)},
dB:function(a,b,c){return a.getContext(b,c)},
dC:function(a,b){return a.getContext(b)}}
W.c4.prototype={
ao:function(a,b,c){return a.addColorStop(b,c)}}
W.c5.prototype={
c_:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
e6:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
au:function(a){return P.ia(a.getContextAttributes())}}
W.aE.prototype={$isa:1,
gk:function(a){return a.length}}
W.dG.prototype={$isa:1}
W.A.prototype={$iso:1}
W.bo.prototype={
gk:function(a){return a.length}}
W.dH.prototype={}
W.dJ.prototype={
h:function(a,b){return a[b]},
gk:function(a){return a.length}}
W.dK.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
W.aG.prototype={
es:function(a,b){return a.querySelector(b)},
$isaG:1}
W.c7.prototype={$isa:1}
W.dL.prototype={
j:function(a){return String(a)}}
W.dM.prototype={
gai:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
W.c8.prototype={
gai:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
W.c9.prototype={
j:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(this.gX(a))+" x "+H.h(this.gV(a))},
v:function(a,b){var t
if(b==null)return!1
t=J.u(b)
if(!t.$isH)return!1
return a.left===t.gaT(b)&&a.top===t.gaY(b)&&this.gX(a)===t.gX(b)&&this.gV(a)===t.gV(b)},
gu:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gX(a)
q=this.gV(a)
return W.kb(W.aY(W.aY(W.aY(W.aY(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gV:function(a){return a.height},
gaT:function(a){return a.left},
gaY:function(a){return a.top},
gX:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isH:1,
$asH:function(){}}
W.dN.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[P.v]},
$isc:1,
$asc:function(){return[P.v]},
$isp:1,
$asp:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]}}
W.dO.prototype={
gk:function(a){return a.length}}
W.ca.prototype={
j:function(a){return a.localName},
$isa:1}
W.j.prototype={$iso:1,$isj:1}
W.f.prototype={
dm:function(a,b,c,d){return a.addEventListener(b,H.b0(c,1),!1)},
$iso:1,
$isf:1}
W.a_.prototype={$iso:1}
W.ec.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.a_]},
$isc:1,
$asc:function(){return[W.a_]},
$isp:1,
$asp:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.ed.prototype={
gk:function(a){return a.length}}
W.ei.prototype={
gk:function(a){return a.length}}
W.a0.prototype={$iso:1}
W.en.prototype={
gk:function(a){return a.length}}
W.bw.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.y]},
$isc:1,
$asc:function(){return[W.y]},
$isp:1,
$asp:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.cd.prototype={}
W.ce.prototype={
eG:function(a,b,c,d,e,f){return a.open(b,c,d,f,e)},
eq:function(a,b,c){return a.open(b,c)},
C:function(a,b){return a.send(b)}}
W.bx.prototype={}
W.er.prototype={$isa:1}
W.aK.prototype={$iso:1,$isj:1,$isaK:1}
W.eH.prototype={
j:function(a){return String(a)}}
W.eM.prototype={
gk:function(a){return a.length}}
W.eN.prototype={
eF:function(a,b,c){return a.send(b,c)},
C:function(a,b){return a.send(b)}}
W.bz.prototype={}
W.a1.prototype={$iso:1}
W.eO.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.a1]},
$isc:1,
$asc:function(){return[W.a1]},
$isp:1,
$asp:function(){return[W.a1]},
$isb:1,
$asb:function(){return[W.a1]}}
W.N.prototype={$iso:1,$isj:1,$isN:1}
W.eY.prototype={$isa:1}
W.y.prototype={
j:function(a){var t=a.nodeValue
return t==null?this.cW(a):t},
$iso:1,
$isf:1}
W.d5.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.y]},
$isc:1,
$asc:function(){return[W.y]},
$isp:1,
$asp:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.f4.prototype={$isa:1}
W.f7.prototype={
gk:function(a){return a.length}}
W.a2.prototype={$iso:1,
gk:function(a){return a.length}}
W.f9.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.a2]},
$isc:1,
$asc:function(){return[W.a2]},
$isp:1,
$asp:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.fc.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.fd.prototype={
C:function(a,b){return a.send(b)}}
W.fn.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
W.d9.prototype={
C:function(a,b){return a.send(b)}}
W.fq.prototype={
gk:function(a){return a.length}}
W.ft.prototype={$isa:1}
W.a3.prototype={$iso:1,$isf:1}
W.fu.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.a3]},
$isc:1,
$asc:function(){return[W.a3]},
$isp:1,
$asp:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.a4.prototype={$iso:1}
W.fw.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.a4]},
$isc:1,
$asc:function(){return[W.a4]},
$isp:1,
$asp:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.a5.prototype={$iso:1,
gk:function(a){return a.length}}
W.fz.prototype={
h:function(a,b){return this.bz(a,b)},
i:function(a,b,c){this.dJ(a,b,c)},
aR:function(a,b){var t,s
for(t=0;!0;++t){s=this.dE(a,t)
if(s==null)return
b.$2(s,this.bz(a,s))}},
gk:function(a){return a.length},
bz:function(a,b){return a.getItem(b)},
dE:function(a,b){return a.key(b)},
dJ:function(a,b,c){return a.setItem(b,c)}}
W.V.prototype={$iso:1}
W.ad.prototype={}
W.a6.prototype={$iso:1,$isf:1}
W.W.prototype={$iso:1,$isf:1}
W.fJ.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.W]},
$isc:1,
$asc:function(){return[W.W]},
$isp:1,
$asp:function(){return[W.W]},
$isb:1,
$asb:function(){return[W.W]}}
W.fK.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.a6]},
$isc:1,
$asc:function(){return[W.a6]},
$isp:1,
$asp:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.fM.prototype={
gk:function(a){return a.length}}
W.a7.prototype={$iso:1}
W.aR.prototype={$iso:1,$isj:1,$isaR:1}
W.fQ.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.a7]},
$isc:1,
$asc:function(){return[W.a7]},
$isp:1,
$asp:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.fR.prototype={
gk:function(a){return a.length}}
W.bd.prototype={}
W.fT.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
W.ax.prototype={}
W.fY.prototype={
j:function(a){return String(a)},
$isa:1}
W.h_.prototype={
gk:function(a){return a.length}}
W.h2.prototype={
gk:function(a){return a.length}}
W.h3.prototype={
C:function(a,b){return a.send(b)}}
W.aT.prototype={
gdY:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(new P.t("deltaY is not supported"))},
$iso:1,
$isj:1,
$isN:1,
$isaT:1}
W.bP.prototype={
gdN:function(a){var t,s
t=P.T
s=new P.O(0,$.w,null,[t])
this.dz(a)
this.dH(a,W.kf(new W.h4(new P.i_(s,[t]))))
return s},
dH:function(a,b){return a.requestAnimationFrame(H.b0(b,1))},
dz:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isa:1}
W.h4.prototype={
$1:function(a){this.a.ap(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.h5.prototype={$isa:1}
W.aU.prototype={$isa:1}
W.hf.prototype={
j:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(a.width)+" x "+H.h(a.height)},
v:function(a,b){var t,s,r
if(b==null)return!1
t=J.u(b)
if(!t.$isH)return!1
s=a.left
r=t.gaT(b)
if(s==null?r==null:s===r){s=a.top
r=t.gaY(b)
if(s==null?r==null:s===r){s=a.width
r=t.gX(b)
if(s==null?r==null:s===r){s=a.height
t=t.gV(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gu:function(a){var t,s,r,q
t=J.ah(a.left)
s=J.ah(a.top)
r=J.ah(a.width)
q=J.ah(a.height)
return W.kb(W.aY(W.aY(W.aY(W.aY(0,t),s),r),q))},
$isH:1,
$asH:function(){},
gV:function(a){return a.height},
gaT:function(a){return a.left},
gaY:function(a){return a.top},
gX:function(a){return a.width}}
W.dh.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[P.H]},
$isc:1,
$asc:function(){return[P.H]},
$isp:1,
$asp:function(){return[P.H]},
$isb:1,
$asb:function(){return[P.H]}}
W.hh.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.A]},
$isc:1,
$asc:function(){return[W.A]},
$isp:1,
$asp:function(){return[W.A]},
$isb:1,
$asb:function(){return[W.A]}}
W.hi.prototype={$isa:1}
W.hj.prototype={
gV:function(a){return a.height},
gX:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.hD.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.a0]},
$isc:1,
$asc:function(){return[W.a0]},
$isp:1,
$asp:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.hE.prototype={$isa:1}
W.dk.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.y]},
$isc:1,
$asc:function(){return[W.y]},
$isp:1,
$asp:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.hX.prototype={$isa:1}
W.hY.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.a5]},
$isc:1,
$asc:function(){return[W.a5]},
$isp:1,
$asp:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.hZ.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.V]},
$isc:1,
$asc:function(){return[W.V]},
$isp:1,
$asp:function(){return[W.V]},
$isb:1,
$asb:function(){return[W.V]}}
W.i1.prototype={$isa:1}
W.i2.prototype={$isa:1}
W.hm.prototype={
ek:function(a,b,c,d){return W.a8(this.a,this.b,a,!1,H.bl(this,0))}}
W.j1.prototype={}
W.hn.prototype={
dL:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.kF(r,this.c,t,!1)}},
dj:function(a,b,c,d,e){this.dL()}}
W.ho.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.B.prototype={
gA:function(a){return new W.ef(a,this.gk(a),-1,null,[H.aA(a,"B",0)])},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
W.ef.prototype={
q:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbB(J.b1(this.a,t))
this.c=t
return!0}this.sbB(null)
this.c=s
return!1},
gt:function(){return this.d},
sbB:function(a){this.d=a}}
W.bp.prototype={$isc:1,
$asc:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.bq.prototype={$isc:1,
$asc:function(){return[W.Z]},
$isb:1,
$asb:function(){return[W.Z]}}
W.br.prototype={$isc:1,
$asc:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.bs.prototype={$isc:1,
$asc:function(){return[W.Z]},
$isb:1,
$asb:function(){return[W.Z]}}
W.bt.prototype={$isc:1,
$asc:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.bu.prototype={$isc:1,
$asc:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.cf.prototype={}
W.cz.prototype={$isc:1,
$asc:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.cl.prototype={$isc:1,
$asc:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.ci.prototype={$isc:1,
$asc:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.ct.prototype={$isc:1,
$asc:function(){return[W.V]},
$isb:1,
$asb:function(){return[W.V]}}
W.cu.prototype={$isc:1,
$asc:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]}}
W.cv.prototype={$isc:1,
$asc:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.cw.prototype={$isc:1,
$asc:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.cx.prototype={$isc:1,
$asc:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.cg.prototype={$isc:1,
$asc:function(){return[W.W]},
$isb:1,
$asb:function(){return[W.W]}}
W.ck.prototype={$isc:1,
$asc:function(){return[P.H]},
$isb:1,
$asb:function(){return[P.H]}}
W.ch.prototype={$isc:1,
$asc:function(){return[W.A]},
$isb:1,
$asb:function(){return[W.A]}}
W.cm.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.co.prototype={$isc:1,
$asc:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.cp.prototype={$isc:1,
$asc:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.cr.prototype={$isc:1,
$asc:function(){return[W.a1]},
$isb:1,
$asb:function(){return[W.a1]}}
W.cA.prototype={$isc:1,
$asc:function(){return[W.W]},
$isb:1,
$asb:function(){return[W.W]}}
W.cB.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.cC.prototype={$isc:1,
$asc:function(){return[P.H]},
$isb:1,
$asb:function(){return[P.H]}}
W.cM.prototype={$isc:1,
$asc:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.cN.prototype={$isc:1,
$asc:function(){return[W.a1]},
$isb:1,
$asb:function(){return[W.a1]}}
W.cL.prototype={$isc:1,
$asc:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.cQ.prototype={$isc:1,
$asc:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.cR.prototype={$isc:1,
$asc:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]}}
W.cS.prototype={$isc:1,
$asc:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.cT.prototype={$isc:1,
$asc:function(){return[W.V]},
$isb:1,
$asb:function(){return[W.V]}}
W.cD.prototype={$isc:1,
$asc:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.cE.prototype={$isc:1,
$asc:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.cG.prototype={$isc:1,
$asc:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.cO.prototype={$isc:1,
$asc:function(){return[W.A]},
$isb:1,
$asb:function(){return[W.A]}}
W.cP.prototype={$isc:1,
$asc:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
P.h6.prototype={
ca:function(a){var t,s,r,q
t=this.a
s=t.length
for(r=0;r<s;++r){q=t[r]
if(q==null?a==null:q===a)return r}C.a.l(t,a)
C.a.l(this.b,null)
return s},
aZ:function(a){var t,s,r,q,p,o,n,m,l
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){s=a.getTime()
r=new P.aF(s,!0)
r.d3(s,!0)
return r}if(a instanceof RegExp)throw H.e(new P.bO("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.mt(a)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=this.ca(a)
r=this.b
o=r[p]
t.a=o
if(o!=null)return o
o=P.G()
t.a=o
r[p]=o
this.e9(a,new P.h8(t,this))
return t.a}if(a instanceof Array){p=this.ca(a)
r=this.b
o=r[p]
if(o!=null)return o
n=J.a9(a)
m=n.gk(a)
o=this.c?new Array(m):a
r[p]=o
for(r=J.bk(o),l=0;C.b.ak(l,m);++l)r.i(o,l,this.aZ(n.h(a,l)))
return o}return a}}
P.h8.prototype={
$2:function(a,b){var t,s
t=this.a.a
s=this.b.aZ(b)
J.kE(t,a,s)
return s},
$S:function(){return{func:1,args:[,,]}}}
P.i7.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.v,,]}}}
P.h7.prototype={
e9:function(a,b){var t,s,r,q
for(t=Object.keys(a),s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r){q=t[r]
b.$2(q,a[q])}}}
P.i8.prototype={
$1:function(a){return this.a.ap(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.i9.prototype={
$1:function(a){return this.a.dT(a)},
$S:function(){return{func:1,args:[,]}}}
P.hH.prototype={
ae:function(){return Math.random()},
ep:function(){return Math.random()<0.5}}
P.hP.prototype={}
P.H.prototype={$asH:null}
P.dw.prototype={$isa:1}
P.aD.prototype={$isa:1}
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
P.dZ.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e_.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e0.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e1.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e2.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e3.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e4.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e5.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
P.e6.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e7.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
P.e8.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e9.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ee.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eh.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ab.prototype={}
P.au.prototype={$isa:1}
P.eo.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.al.prototype={$iso:1}
P.eB.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.T(a,b)},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
T:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.al]},
$isb:1,
$asb:function(){return[P.al]}}
P.eK.prototype={$isa:1}
P.eL.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.an.prototype={$iso:1}
P.eZ.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.T(a,b)},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
T:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.an]},
$isb:1,
$asb:function(){return[P.an]}}
P.f5.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fa.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fb.prototype={
gk:function(a){return a.length}}
P.fg.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fh.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fp.prototype={$isa:1}
P.fE.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.T(a,b)},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
T:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]}}
P.I.prototype={$isa:1}
P.fF.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fG.prototype={$isa:1}
P.dc.prototype={}
P.fI.prototype={$isa:1}
P.bL.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ao.prototype={$iso:1}
P.fS.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.T(a,b)},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
T:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.ao]},
$isb:1,
$asb:function(){return[P.ao]}}
P.fZ.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.h0.prototype={$isa:1}
P.h1.prototype={$isa:1}
P.bQ.prototype={$isa:1}
P.hU.prototype={$isa:1}
P.hV.prototype={$isa:1}
P.hW.prototype={$isa:1}
P.cs.prototype={$isc:1,
$asc:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]}}
P.cj.prototype={$isc:1,
$asc:function(){return[P.al]},
$isb:1,
$asb:function(){return[P.al]}}
P.cn.prototype={$isc:1,
$asc:function(){return[P.an]},
$isb:1,
$asb:function(){return[P.an]}}
P.cq.prototype={$isc:1,
$asc:function(){return[P.ao]},
$isb:1,
$asb:function(){return[P.ao]}}
P.cF.prototype={$isc:1,
$asc:function(){return[P.ao]},
$isb:1,
$asb:function(){return[P.ao]}}
P.cH.prototype={$isc:1,
$asc:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]}}
P.cI.prototype={$isc:1,
$asc:function(){return[P.an]},
$isb:1,
$asb:function(){return[P.an]}}
P.cJ.prototype={$isc:1,
$asc:function(){return[P.al]},
$isb:1,
$asb:function(){return[P.al]}}
P.dA.prototype={
gk:function(a){return a.length}}
P.fl.prototype={
bJ:function(a,b){return a.activeTexture(b)},
bM:function(a,b,c){return a.attachShader(b,c)},
bN:function(a,b,c){return a.bindBuffer(b,c)},
bO:function(a,b,c){return a.bindFramebuffer(b,c)},
bP:function(a,b,c){return a.bindTexture(b,c)},
bQ:function(a,b){return a.blendEquation(b)},
bR:function(a,b,c){return a.blendFunc(b,c)},
bS:function(a,b,c,d){return a.bufferData(b,c,d)},
bT:function(a,b){return a.clear(b)},
bU:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bW:function(a,b){return a.compileShader(b)},
bY:function(a){return a.createBuffer()},
bZ:function(a){return a.createProgram()},
c0:function(a,b){return a.createShader(b)},
c1:function(a){return a.createTexture()},
c3:function(a,b){return a.depthMask(b)},
c4:function(a,b){return a.disable(b)},
c5:function(a,b,c,d){return a.drawArrays(b,c,d)},
c6:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c7:function(a,b){return a.enable(b)},
c8:function(a,b){return a.enableVertexAttribArray(b)},
au:function(a){return P.ia(a.getContextAttributes())},
b0:function(a){return a.getError()},
b1:function(a,b){return a.getProgramInfoLog(b)},
b2:function(a,b,c){return a.getProgramParameter(b,c)},
b4:function(a,b){return a.getShaderInfoLog(b)},
b5:function(a,b,c){return a.getShaderParameter(b,c)},
b6:function(a,b,c){return a.getUniformLocation(b,c)},
cb:function(a,b){return a.linkProgram(b)},
cg:function(a,b,c){return a.pixelStorei(b,c)},
ba:function(a,b,c){return a.shaderSource(b,c)},
bb:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aV:function(a,b,c,d,e,f,g,h,i,j){this.aL(a,b,c,d,e,f,g)
return},
cl:function(a,b,c,d,e,f,g){return this.aV(a,b,c,d,e,f,g,null,null,null)},
aL:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cm:function(a,b,c,d){return a.texParameterf(b,c,d)},
cn:function(a,b,c,d){return a.texParameteri(b,c,d)},
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
cD:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fm.prototype={
dO:function(a,b){return a.beginTransformFeedback(b)},
dR:function(a,b){return a.bindVertexArray(b)},
dX:function(a){return a.createVertexArray()},
e3:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
e4:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
e5:function(a){return a.endTransformFeedback()},
eB:function(a,b,c,d){this.dK(a,b,c,d)
return},
dK:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
eD:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bJ:function(a,b){return a.activeTexture(b)},
bM:function(a,b,c){return a.attachShader(b,c)},
bN:function(a,b,c){return a.bindBuffer(b,c)},
bO:function(a,b,c){return a.bindFramebuffer(b,c)},
bP:function(a,b,c){return a.bindTexture(b,c)},
bQ:function(a,b){return a.blendEquation(b)},
bR:function(a,b,c){return a.blendFunc(b,c)},
bS:function(a,b,c,d){return a.bufferData(b,c,d)},
bT:function(a,b){return a.clear(b)},
bU:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bW:function(a,b){return a.compileShader(b)},
bY:function(a){return a.createBuffer()},
bZ:function(a){return a.createProgram()},
c0:function(a,b){return a.createShader(b)},
c1:function(a){return a.createTexture()},
c3:function(a,b){return a.depthMask(b)},
c4:function(a,b){return a.disable(b)},
c5:function(a,b,c,d){return a.drawArrays(b,c,d)},
c6:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c7:function(a,b){return a.enable(b)},
c8:function(a,b){return a.enableVertexAttribArray(b)},
au:function(a){return P.ia(a.getContextAttributes())},
b0:function(a){return a.getError()},
b1:function(a,b){return a.getProgramInfoLog(b)},
b2:function(a,b,c){return a.getProgramParameter(b,c)},
b4:function(a,b){return a.getShaderInfoLog(b)},
b5:function(a,b,c){return a.getShaderParameter(b,c)},
b6:function(a,b,c){return a.getUniformLocation(b,c)},
cb:function(a,b){return a.linkProgram(b)},
cg:function(a,b,c){return a.pixelStorei(b,c)},
ba:function(a,b,c){return a.shaderSource(b,c)},
bb:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aV:function(a,b,c,d,e,f,g,h,i,j){this.aL(a,b,c,d,e,f,g)
return},
cl:function(a,b,c,d,e,f,g){return this.aV(a,b,c,d,e,f,g,null,null,null)},
aL:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cm:function(a,b,c,d){return a.texParameterf(b,c,d)},
cn:function(a,b,c,d){return a.texParameteri(b,c,d)},
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
cD:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isa:1}
P.i0.prototype={$isa:1}
P.fx.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return P.ia(this.dD(a,b))},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
dD:function(a,b){return a.item(b)},
$isc:1,
$asc:function(){return[P.av]},
$isb:1,
$asb:function(){return[P.av]}}
P.cy.prototype={$isc:1,
$asc:function(){return[P.av]},
$isb:1,
$asb:function(){return[P.av]}}
P.cK.prototype={$isc:1,
$asc:function(){return[P.av]},
$isb:1,
$asb:function(){return[P.av]}}
B.iz.prototype={
$1:function(a){$.$get$ib().i(0,a.which,!0)},
$S:function(){return{func:1,args:[W.aK]}}}
B.iA.prototype={
$1:function(a){$.$get$ib().i(0,a.which,null)},
$S:function(){return{func:1,args:[W.aK]}}}
B.iB.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.mq=t
$.mr=C.b.a2(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.jb=s-C.b.H(window.innerWidth,2)
$.kv=-(t-C.b.H(window.innerHeight,2))},
$S:function(){return{func:1,args:[W.N]}}}
B.iC.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.bZ=t-C.b.H(window.innerWidth,2)
$.c_=-(s-C.b.H(window.innerHeight,2))
if(a.button===2)$.$get$bY().i(0,"right",!0)
else $.$get$bY().i(0,"left",!0)},
$S:function(){return{func:1,args:[W.N]}}}
B.iD.prototype={
$1:function(a){if(a.button===2)$.$get$bY().i(0,"right",null)
else $.$get$bY().i(0,"left",null)},
$S:function(){return{func:1,args:[W.N]}}}
B.f_.prototype={
dc:function(a,b,c,d){var t
d.toString
W.a8(d,W.mz().$1(d),new B.f0(this),!1,W.aT)
W.a8(d,"mousemove",new B.f1(this),!1,W.N)
t=W.aR
W.a8(d,"touchstart",new B.f2(),!1,t)
W.a8(d,"touchmove",new B.f3(this),!1,t)
B.mN(null)}}
B.f0.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.U.gdY(a)*r.k3
if(C.c.a2(r.fy,t)>0)r.fy=H.X(C.c.a2(r.fy,t))}catch(q){s=H.af(q)
P.U(s)}},
$S:function(){return{func:1,args:[W.aT]}}}
B.f1.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=H.X(t.go+C.b.a2($.jb,$.bZ)*0.01)
s=t.id
r=$.c_
q=$.kv
t.id=H.X(s+(r-q)*0.01)
$.bZ=$.jb
$.c_=q}},
$S:function(){return{func:1,args:[W.N]}}}
B.f2.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.a0(t.clientX)
C.c.a0(t.clientY)
$.bZ=s
C.c.a0(t.clientX)
$.c_=C.c.a0(t.clientY)},
$S:function(){return{func:1,args:[W.aR]}}}
B.f3.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.a0(t.clientX)
t=C.c.a0(t.clientY)
r=this.a
r.go=H.X(r.go+C.b.a2(s,$.bZ)*0.01)
r.id=H.X(r.id+($.c_-t)*0.01)
$.bZ=s
$.c_=t},
$S:function(){return{func:1,args:[W.aR]}}}
G.eP.prototype={}
G.de.prototype={
K:function(a,b){var t=this.d
if(H.az(!t.B(0,a)))H.aZ("uniform "+a+" already set")
t.i(0,a,b)},
bi:function(){return this.d},
j:function(a){var t,s,r,q
t=H.Q(["{"+new H.aw(H.ig(this),null).j(0)+"}["+this.a+"]"],[P.v])
for(s=this.d,r=s.gN(s),r=r.gA(r);r.q();){q=r.gt()
C.a.l(t,H.h(q)+": "+H.h(s.h(0,q)))}return C.a.ad(t,"\n")}}
G.dD.prototype={}
G.dF.prototype={
c9:function(a,b,c){J.kV(this.a,b)
if(c>0)J.lh(this.a,b,c)}}
G.ej.prototype={}
G.ea.prototype={}
G.eb.prototype={}
G.em.prototype={
bg:function(a){var t=this.e
H.d(!t.B(0,a))
H.d(C.e.cT(a,"a"))
switch($.$get$S().h(0,a).a){case"vec2":t.i(0,a,H.Q([],[T.ar]))
break
case"vec3":t.i(0,a,H.Q([],[T.r]))
break
case"vec4":t.i(0,a,H.Q([],[T.ay]))
break
case"float":t.i(0,a,H.Q([],[P.L]))
break
case"uvec4":t.i(0,a,H.Q([],[[P.b,P.n]]))
break
default:if(H.az(!1))H.aZ("unknown type for "+a)}},
d0:function(a){var t,s,r,q,p,o
H.d(a.length===3)
t=this.d
s=t.length
C.a.l(this.b,new G.ea(s,s+1,s+2))
for(r=a.length,q=0;q<a.length;a.length===r||(0,H.D)(a),++q){p=a[q]
o=new T.r(new Float32Array(3))
o.I(p)
C.a.l(t,o)}},
cZ:function(a,b){var t,s,r,q,p,o,n
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.D)(b),++q){p=b[q]
o=new Float32Array(2)
n=p.a
o[1]=n[1]
o[0]=n[0]
r.l(t,new T.ar(o))}},
d_:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.D)(b),++q){p=b[q]
o=new T.r(new Float32Array(3))
o.I(p)
r.l(t,o)}},
d1:function(a){var t,s,r,q,p,o
H.d(a.length===4)
t=this.d
s=t.length
C.a.l(this.c,new G.eb(s,s+1,s+2,s+3))
for(r=a.length,q=0;q<a.length;a.length===r||(0,H.D)(a),++q){p=a[q]
o=new T.r(new Float32Array(3))
o.I(p)
C.a.l(t,o)}},
d7:function(){var t,s,r,q,p,o,n,m,l,k
t=this.b
H.d(t.length>0||this.c.length>0)
s=this.c
r=new Array(t.length*3+s.length*6)
r.fixed$length=Array
q=H.Q(r,[P.n])
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
p+=6}H.d(p===q.length)
return q},
j:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gN(s),r=r.gA(r);r.q();){q=r.gt()
p=$.$get$S().h(0,q).a
C.a.l(t,H.h(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.ad(t," ")}}
G.dd.prototype={}
G.bN.prototype={}
G.cZ.prototype={}
G.d_.prototype={
bf:function(a,b,c){var t,s
if(C.e.a4(a,0)===105){if(H.az(C.b.ax(b.length,c)===this.z))H.aZ("ChangeAttribute "+this.z)}else H.d(C.b.ax(b.length,c)===(this.ch.length/3|0))
this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.dr(t.a,34962,s)
J.jg(t.a,34962,b,35048)},
d8:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
a3:function(a,b,c){var t,s,r,q,p,o
t=J.jd(a,0)===105
if(t&&this.z===0)this.z=C.b.ax(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.iH(r.a))
this.bf(a,b,c)
q=$.$get$S().h(0,a)
if(q==null)throw H.e("Unknown canonical "+a)
p=this.x
if(H.az(p.B(0,a)))H.aZ("unexpected attribute "+a)
o=p.h(0,a)
J.ds(r.a,this.e)
r.c9(0,o,t?1:0)
s=s.h(0,a)
p=q.bh()
J.dr(r.a,34962,s)
J.jq(r.a,o,p,5126,!1,0,0)},
be:function(a){var t,s,r,q,p
t=this.r
s=this.d
t.i(0,"aPosition",J.iH(s.a))
this.ch=a
this.bf("aPosition",a,3)
r=$.$get$S().h(0,"aPosition")
if(r==null)throw H.e("Unknown canonical aPosition")
q=this.x
H.d(q.B(0,"aPosition"))
p=q.h(0,"aPosition")
J.ds(s.a,this.e)
s.c9(0,p,0)
t=t.h(0,"aPosition")
q=r.bh()
J.dr(s.a,34962,t)
J.jq(s.a,p,q,5126,!1,0,0)},
j:function(a){var t,s,r
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,t=t.gN(t),t=t.gA(t);t.q();){r=t.gt()
C.a.l(s,H.h(r)+":"+this.cy.h(0,r).length)}return"MESH["+this.a+"] "+C.a.ad(s,"  ")},
saE:function(a){this.cx=a}}
G.f6.prototype={
d2:function(a,b){var t=C.b.cF(a,b)
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
t.a1(0,0,1/(p*s))
t.a1(1,1,1/p)
t.a1(2,2,(q+r)/o)
t.a1(3,2,-1)
t.a1(2,3,2*r*q/o)},
bi:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.r(new Float32Array(H.q(3)))
o.U(r,q,p)
p=this.d
p.i(0,"uEyePosition",o)
o=this.cy
o.I(t)
t=o.a
t[12]=0
t[13]=0
t[14]=0
t[15]=1
n=-s[12]
m=-s[13]
l=-s[14]
s=J.u(n)
r=!!s.$isay
k=r?s.gai(n):1
if(!!s.$isr){j=s.gm(n)
m=s.gn(n)
l=s.gF(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
l=s.gF(n)
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
a3.I(this.db)
a3.cf(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.fk.prototype={
dg:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gk(t)===s.gk(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gN(s),s=s.gA(s);s.q();){q=s.gt()
if(!t.B(0,q))C.a.l(r,q)}for(t=this.x,s=new P.bR(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.q();){q=s.d
if(!t.a_(0,q))C.a.l(r,q)}return r},
dh:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gN(b),s=s.gA(s),r=this.d,q=this.y,p=this.z,o=0;s.q();){n=s.gt()
switch(J.jd(n,0)){case 117:if(q.B(0,n)){m=b.h(0,n)
if(p.B(0,n))H.bm("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$S().h(0,n)
if(l==null)H.E("unknown "+n)
H.d(q.B(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.iL(r.a,k,m)
else if(!!J.u(m).$isjD)J.lf(r.a,k,m)
break
case"float":if(l.c===0)J.ld(r.a,k,m)
else if(!!J.u(m).$iseg)J.le(r.a,k,m)
break
case"mat4":if(l.c===0){j=H.aB(m,"$isM").a
J.jp(r.a,k,!1,j)}else if(!!J.u(m).$iseg)J.jp(r.a,k,!1,m)
else if(H.az(!1))H.aZ("bad unform: "+n)
break
case"mat3":if(l.c===0){j=H.aB(m,"$isam").a
J.jo(r.a,k,!1,j)}else if(!!J.u(m).$iseg)J.jo(r.a,k,!1,m)
else if(H.az(!1))H.aZ("bad unform: "+n)
break
case"vec4":if(l.c===0){j=H.aB(m,"$isay").a
J.jn(r.a,k,j)}else J.jn(r.a,k,m)
break
case"vec3":if(l.c===0){j=H.aB(m,"$isr").a
J.jm(r.a,k,j)}else J.jm(r.a,k,m)
break
case"vec2":if(l.c===0){j=H.aB(m,"$isar").a
J.jl(r.a,k,j)}else J.jl(r.a,k,m)
break
case"sampler2D":case"sampler2DShadow":j=C.b.Y(33984,this.ch)
J.je(r.a,j)
j=H.aB(m,"$isbM").b
J.c0(r.a,3553,j)
j=this.ch
J.iL(r.a,k,j)
this.ch=this.ch+1
break
case"samplerCube":H.d(n==="uCubeTexture")
j=C.b.Y(33984,this.ch)
J.je(r.a,j)
j=H.aB(m,"$isbM").b
J.c0(r.a,34067,j)
j=this.ch
J.iL(r.a,k,j)
this.ch=this.ch+1
break
default:H.bm("Error: unknow uniform type: "+j)
H.d(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":if(J.z(m,!0))J.dt(r.a,2929)
else J.iI(r.a,2929)
break
case"cStencilFunc":H.aB(m,"$isdd")
j=m.a
if(j===1281)J.iI(r.a,2960)
else{J.dt(r.a,2960)
i=m.b
h=m.c
J.l8(r.a,j,i,h)}break
case"cDepthWrite":J.kP(r.a,m)
break
case"cBlendEquation":H.aB(m,"$isbN")
j=m.a
if(j===1281)J.iI(r.a,3042)
else{J.dt(r.a,3042)
i=m.b
h=m.c
J.kJ(r.a,i,h)
J.kI(r.a,j)}break}++o
break}}s=Date.now()
""+o
new P.at(1000*(s-new P.aF(t,!1).a)).j(0)},
d6:function(a,b,c){var t,s,r,q,p,o,n,m,l
Date.now()
t=this.d
s=this.r
J.lg(t.a,s)
this.ch=0
this.z.R(0)
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.D)(b),++r){q=b[r]
this.dh(q.a,q.bi())}s=this.Q
s.R(0)
for(p=a.cy,p=p.gN(p),p=p.gA(p);p.q();)s.l(0,p.gt())
o=this.dg()
if(o.length!==0)P.U("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.h(o)))
s=a.d
p=a.e
J.ds(s.a,p)
n=this.e.f.length>0
p=a.f
s=a.d8()
m=a.Q
l=a.z
t.toString
if(n)J.kG(t.a,p)
if(m!==-1)if(l>1)J.kT(t.a,p,s,m,0,l)
else J.kS(t.a,p,s,m,0)
else if(l>1)J.kR(t.a,p,0,s,l)
else J.kQ(t.a,p,0,s)
if(n)J.kW(t.a)},
dd:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j
t=this.d
s=this.e
r=s.b
q=this.f
p=q.b
o=s.f
n=J.kN(t.a)
m=G.k9(t.a,35633,r)
J.jf(t.a,n,m)
l=G.k9(t.a,35632,p)
J.jf(t.a,n,l)
if(o.length>0)J.lb(t.a,n,o,35980)
J.l3(t.a,n)
if(!J.l2(t.a,n,35714))H.E(J.l1(t.a,n))
this.r=n
this.sdn(0,P.lL(s.c,null))
for(s=s.d,r=s.length,p=this.y,k=0;k<s.length;s.length===r||(0,H.D)(s),++k){j=s[k]
o=this.r
p.i(0,j,J.jj(t.a,o,j))}for(s=q.d,r=s.length,k=0;k<s.length;s.length===r||(0,H.D)(s),++k){j=s[k]
q=this.r
p.i(0,j,J.jj(t.a,q,j))}},
sdn:function(a,b){this.x=b}}
G.i.prototype={
bh:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.d(!1)
return-1}}}
G.bc.prototype={
bc:function(a){var t,s,r,q
H.d(this.b==null)
for(t=this.c,s=this.x,r=0;r<1;++r){q=a[r]
H.d($.$get$S().B(0,q))
H.d(!C.a.a_(t,q))
C.a.l(t,q)
s.i(0,q,this.r);++this.r}C.a.av(t)},
ay:function(a){var t,s,r,q
H.d(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.D)(a),++r){q=a[r]
if(H.az($.$get$S().B(0,q)))H.aZ("missing uniform "+q)
H.d(!C.a.a_(s,q))
C.a.l(s,q)}C.a.av(s)},
bd:function(a){var t,s,r
H.d(this.b==null)
for(t=this.e,s=0;s<1;++s){r=a[s]
H.d($.$get$S().B(0,r))
H.d(!C.a.a_(t,r))
C.a.l(t,r)}C.a.av(t)},
bj:function(a,b){H.d(this.b==null)
this.b=this.di(!0,a,b)},
az:function(a){return this.bj(a,null)},
di:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.d(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.D)(t),++o){n=t[o]
m=$.$get$S().h(0,n)
C.a.l(q,"layout (location="+H.h(p.h(0,n))+") in "+m.a+" "+H.h(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.D)(t),++o){k=t[o]
m=$.$get$S().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.h(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.D)(t),++o){k=t[o]
m=$.$get$S().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.h(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.D)(t),++o){k=t[o]
m=$.$get$S().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.h(k)+j+";")}C.a.l(q,"")
if(c!=null)C.a.bK(q,c)
C.a.l(q,"void main(void) {")
C.a.bK(q,b)
C.a.l(q,"}")
return C.a.ad(q,"\n")}}
G.fv.prototype={
el:function(a0,a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
t=this.d.a
s=t[12]
r=t[13]
q=t[14]
a1=new T.r(new Float32Array(H.q(3)))
a1.U(0,1,0)
p=this.e
o=p.a
o[0]=t[12]
o[1]=t[13]
o[2]=t[14]
o=new Float32Array(H.q(3))
n=new T.r(o)
n.I(p)
m=a0.a
o[0]=o[0]-m[0]
o[1]=o[1]-m[1]
o[2]=o[2]-m[2]
n.at(0)
l=a1.c2(n)
l.at(0)
k=n.c2(l)
k.at(0)
j=l.aQ(p)
i=k.aQ(p)
p=n.aQ(p)
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
cc:function(a){return this.el(a,null)}}
G.fL.prototype={
d9:function(a,b){var t=this.e
if(t!==1)J.la(a.a,b,34046,t)
J.jk(a.a,b,10240,this.r)
J.jk(a.a,b,10241,this.f)}}
G.bM.prototype={
j:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.ep.prototype={
de:function(a){var t,s
t=this.d
s=this.c
J.c0(t.a,s,this.b)
J.l9(t.a,s,0,6408,6408,5121,a)}}
A.bF.prototype={
j:function(a){return"NODE["+this.a+"]"}}
A.bI.prototype={}
A.fj.prototype={
d5:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.d
s=this.r
r=this.z
q=this.Q
p=t.a
t=t.b
J.kH(p.a,36160,t)
H.d(r>0&&q>0)
J.li(p.a,this.x,this.y,r,q)
if(s!==0)J.kK(p.a,s)
for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.D)(t),++o){n=t[o]
m=n.e
C.a.l(m,new G.de(P.G(),"transforms",!1,!0))
l=new T.M(new Float32Array(16))
l.J()
for(r=n.f,q=r.length,p=n.d,k=0;k<r.length;r.length===q||(0,H.D)(r),++k)A.kn(p,r[k],l,a,m)
m.pop()}},
d4:function(){return this.d5(null)}}
D.eG.prototype={
$1:function(a){this.a.ap(0,W.md(this.b.response))},
$S:function(){return{func:1,args:[,]}}}
A.ih.prototype={
$2:function(a,b){var t=536870911&a+J.ah(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(){return{func:1,args:[P.n,P.o]}}}
T.am.prototype={
I:function(a){var t,s
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
i:function(a,b,c){C.f.i(this.a,b,c)},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.am){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gu:function(a){return A.dn(this.a)},
O:function(a){var t,s
t=new Float32Array(H.q(3))
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.r(t)},
dW:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
if(g===0){this.I(a)
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
T.M.prototype={
a1:function(a,b,c){H.d(a<4)
H.d(b<4)
this.a[b*4+a]=c},
I:function(a){var t,s
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
i:function(a,b,c){C.f.i(this.a,b,c)},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.M){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gu:function(a){return A.dn(this.a)},
O:function(a){var t,s
t=new Float32Array(H.q(4))
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.ay(t)},
J:function(){var t=this.a
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
b3:function(){var t=new T.am(new Float32Array(H.q(9)))
this.bX(t)
return t},
bX:function(a){var t,s
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
cf:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.bG.prototype={
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gF:function(a){return this.a[2]},
gai:function(a){return this.a[3]},
cQ:function(a,b,c,d){var t=this.a
t[0]=a
t[1]=b
t[2]=c
t[3]=d},
b7:function(a,b){var t,s,r,q
t=Math.sqrt(a.gW())
if(t===0)return
s=b*0.5
r=Math.sin(s)/t
q=a.a
t=this.a
t[0]=q[0]*r
t[1]=q[1]*r
t[2]=q[2]*r
t[3]=Math.cos(s)},
b8:function(a){var t,s,r,q,p,o,n,m,l,k,j
t=a.a
s=t[0]
r=t[4]
q=t[8]
p=0+s+r+q
if(p>0){s=Math.sqrt(p+1)
r=this.a
r[3]=s*0.5
o=0.5/s
r[0]=(t[5]-t[7])*o
r[1]=(t[6]-t[2])*o
r[2]=(t[1]-t[3])*o}else{if(s<r)n=r<q?2:1
else n=s<q?2:0
m=(n+1)%3
l=(n+2)%3
s=n*3
r=m*3
q=l*3
k=Math.sqrt(t[s+n]-t[r+m]-t[q+l]+1)
j=this.a
j[n]=k*0.5
o=0.5/k
j[3]=(t[r+l]-t[q+m])*o
j[m]=(t[s+m]+t[r+n])*o
j[l]=(t[s+l]+t[q+n])*o}},
gW:function(){var t,s,r,q,p
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=t[3]
return s*s+r*r+q*q+p*p},
gk:function(a){return Math.sqrt(this.gW())},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.f.i(this.a,b,c)},
j:function(a){var t=this.a
return H.h(t[0])+", "+H.h(t[1])+", "+H.h(t[2])+" @ "+H.h(t[3])}}
T.ar.prototype={
j:function(a){var t=this.a
return"["+H.h(t[0])+","+H.h(t[1])+"]"},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.ar){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gu:function(a){return A.dn(this.a)},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.f.i(this.a,b,c)},
gk:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.r.prototype={
U:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
I:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
j:function(a){var t=this.a
return"["+H.h(t[0])+","+H.h(t[1])+","+H.h(t[2])+"]"},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.r){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gu:function(a){return A.dn(this.a)},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.f.i(this.a,b,c)},
gk:function(a){return Math.sqrt(this.gW())},
gW:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
at:function(a){var t,s,r
t=Math.sqrt(this.gW())
if(t===0)return 0
s=1/t
r=this.a
r[0]=r[0]*s
r[1]=r[1]*s
r[2]=r[2]*s
return t},
aQ:function(a){var t,s
t=a.a
s=this.a
return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]},
c2:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.r(new Float32Array(H.q(3)))
t.U(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gF:function(a){return this.a[2]}}
T.ay.prototype={
j:function(a){var t=this.a
return H.h(t[0])+","+H.h(t[1])+","+H.h(t[2])+","+H.h(t[3])},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.ay){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gu:function(a){return A.dn(this.a)},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.f.i(this.a,b,c)},
gk:function(a){var t,s,r,q
t=this.a
s=t[0]
r=t[1]
q=t[2]
t=t[3]
return Math.sqrt(s*s+r*r+q*q+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gF:function(a){return this.a[2]},
gai:function(a){return this.a[3]}}
F.iw.prototype={
$1:function(a){var t,s,r
t=this.a
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.U("size change "+H.h(s)+" "+H.h(r))
this.b.d2(s,r)
t=this.c
t.z=s
t.Q=r},
$S:function(){return{func:1,v:true,args:[W.j]}}}
F.iv.prototype={
$1:function(a7){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
t={}
s=Y.lA(J.b1(a7,0))
r=this.c
q=r.d
p=q.d
o=J.jh(p.a)
n=new G.d_(p,o,4,P.G(),q.e.x,null,0,-1,null,null,P.G(),"meshdata:",!1,!0)
n.be(G.jC(s.d,null))
q=s.d7()
n.y=J.iH(p.a)
H.d(n.ch!=null)
m=n.ch.length
if(m<768){n.saE(new Uint8Array(H.i4(q)))
n.Q=5121}else if(m<196608){n.saE(new Uint16Array(H.i4(q)))
n.Q=5123}else{n.saE(new Uint32Array(H.i4(q)))
n.Q=5125}J.ds(p.a,o)
q=n.y
o=n.cx
p.toString
m=J.u(o)
H.d(!!m.$isk5||!!m.$isk6||!!m.$isk7)
J.dr(p.a,34963,q)
J.jg(p.a,34963,o,35048)
G.m8(s,n)
q=new Float32Array(H.q(9))
p=new T.M(new Float32Array(H.q(16)))
p.J()
o=new Float32Array(H.q(16))
m=new T.M(o)
m.J()
l=new Float32Array(H.q(3))
k=new Float32Array(H.q(3))
j=new Float32Array(H.q(3))
i=new Float32Array(H.q(3))
h=Math.cos(1.57)
g=Math.sin(1.57)
f=o[4]
e=o[8]
d=o[5]
c=o[9]
b=o[6]
a=o[10]
a0=o[7]
a1=o[11]
a2=-g
o[4]=f*h+e*g
o[5]=d*h+c*g
o[6]=b*h+a*g
o[7]=a0*h+a1*g
o[8]=f*a2+e*h
o[9]=d*a2+c*h
o[10]=b*a2+a*h
o[11]=a0*a2+a1*h
h=Math.cos(3.14)
a1=Math.sin(3.14)
a2=o[0]
a0=o[4]
a=o[1]
b=o[5]
c=o[2]
d=o[6]
e=o[3]
f=o[7]
g=-a1
o[0]=a2*h+a0*a1
o[1]=a*h+b*a1
o[2]=c*h+d*a1
o[3]=e*h+f*a1
o[4]=a2*g+a0*h
o[5]=a*g+b*h
o[6]=c*g+d*h
o[7]=e*g+f*h
h=[]
f=new Float32Array(H.q(9))
g=new T.M(new Float32Array(H.q(16)))
g.J()
e=new T.M(new Float32Array(H.q(16)))
e.J()
a3=new A.bF(null,null,h,new T.am(f),g,e,new T.r(new Float32Array(H.q(3))),new T.r(new Float32Array(H.q(3))),new T.r(new Float32Array(H.q(3))),new T.r(new Float32Array(H.q(3))),"wrapper",!1,!0)
C.a.l(h,new A.bF(this.d,n,[],new T.am(q),p,m,new T.r(l),new T.r(k),new T.r(j),new T.r(i),"meshdata:",!1,!0))
q=new T.r(new Float32Array(H.q(3)))
q.U(100,0,-100)
a3.cc(q)
a4=new T.r(new Float32Array(H.q(3)))
a4.U(0,0,1)
q=new Float32Array(H.q(4))
a5=new T.bG(q)
q[3]=1
a5.b8(e.b3())
e=new Float32Array(H.q(4))
a6=new T.bG(e)
e[3]=1
a6.b7(a4,3.14)
t.a=0
H.d(!0)
C.a.l(r.f,a3)
t.b=0
new F.it(t,this.a,this.b,new F.iu(t,this.e,a3,a4,a5,a6)).$1(0)},
$S:function(){return{func:1,args:[P.b]}}}
F.iu.prototype={
$1:function(b4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
t=this.a
s=t.a
if(s<1){r=s+0.2*b4/1000
t.a=r
t=this.e.a
s=t[0]
q=t[1]
p=t[2]
t=t[3]
o=this.f.a
n=o[0]
m=o[1]
l=o[2]
k=o[3]
j=s*n+q*m+p*l+t*k
if(j<0){j=-j
n=-n
m=-m
l=-l
k=-k}i=1-r
if(1-j>0.000001){o=Math.acos(j)
h=Math.sin(o)
i=Math.sin(i*o)/h
g=Math.sin(r*o)/h}else g=r
o=new Float32Array(H.q(4))
f=new T.bG(o)
f.cQ(i*s+g*n,i*q+g*m,i*p+g*l,i*t+g*k)
t=new Float32Array(H.q(9))
e=f.gW()
H.d(e!==0)
d=2/e
c=o[0]
b=o[1]
a=o[2]
a0=o[3]
a1=c*d
a2=b*d
a3=a*d
a4=a0*a1
a5=a0*a2
a6=a0*a3
a7=c*a1
a8=c*a2
a9=c*a3
b0=b*a2
b1=b*a3
b2=a*a3
t[0]=1-(b0+b2)
t[1]=a8+a6
t[2]=a9-a5
t[3]=a8-a6
t[4]=1-(a7+b2)
t[5]=b1+a4
t[6]=a9+a5
t[7]=b1-a4
t[8]=1-(a7+b0)
o=this.c.d.a
o[0]=t[0]
o[1]=t[1]
o[2]=t[2]
o[4]=t[3]
o[5]=t[4]
o[6]=t[5]
o[8]=t[6]
o[9]=t[7]
o[10]=t[8]
return}else{P.U("new rotation")
t.a=0
t=this.b
s=this.d
if(t.ep()){s.U(t.ae(),t.ae(),t.ae())
s.at(0)
b3=6.283185307179586*t.ae()}else{s.U(1,0,0)
b3=0}P.U("new rotation axis: "+s.j(0))
this.e.b8(this.c.d.b3())
this.f.b7(s,b3)}},
$S:function(){return{func:1,v:true,args:[P.L]}}}
F.it.prototype={
$1:function(a8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
t=this.a
s=t.b
t.b=a8+0
t=this.b
t.go=H.X(t.go+0.001)
r=t.k4
if(r.h(0,37)!=null)t.go=H.X(t.go+0.03)
else if(r.h(0,39)!=null)t.go=H.X(t.go-0.03)
if(r.h(0,38)!=null)t.id=H.X(t.id+0.03)
else if(r.h(0,40)!=null)t.id=H.X(t.id-0.03)
if(r.h(0,33)!=null)t.fy=H.X(t.fy*0.99)
else if(r.h(0,34)!=null)t.fy=H.X(t.fy*1.01)
if(r.h(0,32)!=null){t.go=0
t.id=0}r=H.X(C.c.dS(t.id,-1.4707963267948965,1.4707963267948965))
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
t.cc(p)
p=t.f
r=p.a
r[0]=m[2]
r[1]=m[6]
r[2]=m[10]
t=-t.k1
p=Math.sqrt(p.gW())
l=r[0]/p
k=r[1]/p
j=r[2]/p
p=Math.cos(t)
t=Math.sin(t)
i=1-p
h=l*l*i+p
r=j*t
g=l*k*i-r
q=k*t
f=l*j*i+q
e=k*l*i+r
d=k*k*i+p
t=l*t
c=k*j*i-t
b=j*l*i-q
a=j*k*i+t
a0=j*j*i+p
p=m[0]
t=m[4]
q=m[8]
r=m[1]
n=m[5]
a1=m[9]
a2=m[2]
a3=m[6]
a4=m[10]
a5=m[3]
a6=m[7]
a7=m[11]
m[0]=p*h+t*e+q*b
m[1]=r*h+n*e+a1*b
m[2]=a2*h+a3*e+a4*b
m[3]=a5*h+a6*e+a7*b
m[4]=p*g+t*d+q*a
m[5]=r*g+n*d+a1*a
m[6]=a2*g+a3*d+a4*a
m[7]=a5*g+a6*d+a7*a
m[8]=p*f+t*c+q*a0
m[9]=r*f+n*c+a1*a0
m[10]=a2*f+a3*c+a4*a0
m[11]=a5*f+a6*c+a7*a0
this.d.$1(a8-s)
this.c.d4()
C.V.gdN(window).aW(this)},
$S:function(){return{func:1,v:true,args:[P.T]}}}
J.a.prototype.cW=J.a.prototype.j
J.by.prototype.cX=J.by.prototype.j;(function installTearOffs(){installTearOff(H.aW.prototype,"gej",0,0,0,null,["$0"],["ar"],0)
installTearOff(H.ae.prototype,"gcI",0,0,0,null,["$1"],["G"],2)
installTearOff(H.aV.prototype,"ge_",0,0,0,null,["$1"],["S"],2)
installTearOff(P,"mm",1,0,0,null,["$1"],["m5"],1)
installTearOff(P,"mn",1,0,0,null,["$1"],["m6"],1)
installTearOff(P,"mo",1,0,0,null,["$1"],["m7"],1)
installTearOff(P,"kj",1,0,0,null,["$0"],["mk"],0)
installTearOff(P.O.prototype,"gds",0,0,0,null,["$2","$1"],["E","dt"],3)
installTearOff(P,"mu",1,0,0,null,["$2"],["lp"],4)
installTearOff(W,"mz",1,0,0,null,["$1"],["lt"],5)
installTearOff(F,"kA",1,0,0,null,["$0"],["mH"],0)})();(function inheritance(){inherit(P.o,null)
var t=P.o
inherit(H.iS,t)
inherit(J.a,t)
inherit(J.dz,t)
inherit(P.ak,t)
inherit(H.cW,t)
inherit(P.cU,t)
inherit(H.cc,t)
inherit(H.b4,t)
inherit(H.hM,t)
inherit(H.aW,t)
inherit(H.hk,t)
inherit(H.aX,t)
inherit(H.hL,t)
inherit(H.he,t)
inherit(H.bb,t)
inherit(H.fN,t)
inherit(H.aj,t)
inherit(H.ae,t)
inherit(H.aV,t)
inherit(H.fi,t)
inherit(H.fU,t)
inherit(P.b5,t)
inherit(H.dl,t)
inherit(H.aw,t)
inherit(H.ac,t)
inherit(H.eC,t)
inherit(H.eE,t)
inherit(H.ey,t)
inherit(H.hN,t)
inherit(P.hg,t)
inherit(P.di,t)
inherit(P.O,t)
inherit(P.df,t)
inherit(P.fA,t)
inherit(P.fB,t)
inherit(P.b3,t)
inherit(P.i3,t)
inherit(P.fs,t)
inherit(P.hJ,t)
inherit(P.bR,t)
inherit(P.x,t)
inherit(P.hK,t)
inherit(P.b_,t)
inherit(P.F,t)
inherit(P.aF,t)
inherit(P.T,t)
inherit(P.at,t)
inherit(P.db,t)
inherit(P.hp,t)
inherit(P.bv,t)
inherit(P.dS,t)
inherit(P.b,t)
inherit(P.av,t)
inherit(P.aN,t)
inherit(P.bJ,t)
inherit(P.v,t)
inherit(P.bK,t)
inherit(W.dH,t)
inherit(W.B,t)
inherit(W.ef,t)
inherit(P.h6,t)
inherit(P.hH,t)
inherit(P.hP,t)
inherit(G.eP,t)
inherit(G.dF,t)
inherit(G.ej,t)
inherit(G.ea,t)
inherit(G.eb,t)
inherit(G.em,t)
inherit(G.dd,t)
inherit(G.bN,t)
inherit(G.i,t)
inherit(G.bc,t)
inherit(G.fL,t)
inherit(G.bM,t)
inherit(T.am,t)
inherit(T.M,t)
inherit(T.bG,t)
inherit(T.ar,t)
inherit(T.r,t)
inherit(T.ay,t)
t=J.a
inherit(J.ev,t)
inherit(J.ex,t)
inherit(J.by,t)
inherit(J.aH,t)
inherit(J.b7,t)
inherit(J.aI,t)
inherit(H.bA,t)
inherit(H.b9,t)
inherit(W.f,t)
inherit(W.Z,t)
inherit(W.c2,t)
inherit(W.c4,t)
inherit(W.c5,t)
inherit(W.A,t)
inherit(W.cf,t)
inherit(W.dJ,t)
inherit(W.dK,t)
inherit(W.dL,t)
inherit(W.c8,t)
inherit(W.c9,t)
inherit(W.cu,t)
inherit(W.dO,t)
inherit(W.j,t)
inherit(W.cw,t)
inherit(W.a0,t)
inherit(W.en,t)
inherit(W.cl,t)
inherit(W.eH,t)
inherit(W.eM,t)
inherit(W.a1,t)
inherit(W.cr,t)
inherit(W.eY,t)
inherit(W.ci,t)
inherit(W.f4,t)
inherit(W.bd,t)
inherit(W.a2,t)
inherit(W.cz,t)
inherit(W.ad,t)
inherit(W.a4,t)
inherit(W.cp,t)
inherit(W.a5,t)
inherit(W.fz,t)
inherit(W.V,t)
inherit(W.cg,t)
inherit(W.fM,t)
inherit(W.a7,t)
inherit(W.cm,t)
inherit(W.fR,t)
inherit(W.fY,t)
inherit(W.h2,t)
inherit(W.hf,t)
inherit(W.ck,t)
inherit(W.ch,t)
inherit(W.cx,t)
inherit(W.co,t)
inherit(W.cv,t)
inherit(W.ct,t)
inherit(W.i1,t)
inherit(W.i2,t)
inherit(P.al,t)
inherit(P.cj,t)
inherit(P.an,t)
inherit(P.cn,t)
inherit(P.fa,t)
inherit(P.fb,t)
inherit(P.fg,t)
inherit(P.cs,t)
inherit(P.ao,t)
inherit(P.cq,t)
inherit(P.h1,t)
inherit(P.dA,t)
inherit(P.fl,t)
inherit(P.fm,t)
inherit(P.i0,t)
inherit(P.cy,t)
t=J.by
inherit(J.f8,t)
inherit(J.aS,t)
inherit(J.aJ,t)
inherit(J.iR,J.aH)
t=J.b7
inherit(J.cV,t)
inherit(J.ew,t)
t=P.ak
inherit(H.c,t)
inherit(H.cX,t)
t=H.c
inherit(H.b8,t)
inherit(H.eD,t)
inherit(H.dR,H.cX)
inherit(H.eI,P.cU)
t=H.b8
inherit(H.cY,t)
inherit(P.eF,t)
t=H.b4
inherit(H.iE,t)
inherit(H.iF,t)
inherit(H.hG,t)
inherit(H.hl,t)
inherit(H.es,t)
inherit(H.et,t)
inherit(H.hO,t)
inherit(H.fO,t)
inherit(H.fP,t)
inherit(H.iG,t)
inherit(H.im,t)
inherit(H.io,t)
inherit(H.ip,t)
inherit(H.iq,t)
inherit(H.ir,t)
inherit(H.fH,t)
inherit(H.ez,t)
inherit(H.ii,t)
inherit(H.ij,t)
inherit(H.ik,t)
inherit(P.hb,t)
inherit(P.ha,t)
inherit(P.hc,t)
inherit(P.hd,t)
inherit(P.el,t)
inherit(P.ek,t)
inherit(P.hq,t)
inherit(P.hy,t)
inherit(P.hu,t)
inherit(P.hv,t)
inherit(P.hw,t)
inherit(P.hs,t)
inherit(P.hx,t)
inherit(P.hr,t)
inherit(P.hB,t)
inherit(P.hC,t)
inherit(P.hA,t)
inherit(P.hz,t)
inherit(P.fC,t)
inherit(P.fD,t)
inherit(P.i6,t)
inherit(P.hS,t)
inherit(P.hR,t)
inherit(P.hT,t)
inherit(P.eJ,t)
inherit(P.dP,t)
inherit(P.dQ,t)
inherit(W.h4,t)
inherit(W.ho,t)
inherit(P.h8,t)
inherit(P.i7,t)
inherit(P.i8,t)
inherit(P.i9,t)
inherit(B.iz,t)
inherit(B.iA,t)
inherit(B.iB,t)
inherit(B.iC,t)
inherit(B.iD,t)
inherit(B.f0,t)
inherit(B.f1,t)
inherit(B.f2,t)
inherit(B.f3,t)
inherit(D.eG,t)
inherit(A.ih,t)
inherit(F.iw,t)
inherit(F.iv,t)
inherit(F.iu,t)
inherit(F.it,t)
t=H.he
inherit(H.bf,t)
inherit(H.bT,t)
t=P.b5
inherit(H.d6,t)
inherit(H.eA,t)
inherit(H.fX,t)
inherit(H.fW,t)
inherit(H.dE,t)
inherit(H.fo,t)
inherit(P.c1,t)
inherit(P.ba,t)
inherit(P.ai,t)
inherit(P.t,t)
inherit(P.bO,t)
inherit(P.aQ,t)
inherit(P.aa,t)
inherit(P.dI,t)
t=H.fH
inherit(H.fy,t)
inherit(H.bn,t)
inherit(H.h9,P.c1)
t=H.b9
inherit(H.eQ,t)
inherit(H.d1,t)
t=H.d1
inherit(H.bC,t)
inherit(H.bB,t)
inherit(H.bD,H.bC)
inherit(H.d2,H.bD)
inherit(H.bE,H.bB)
inherit(H.d3,H.bE)
t=H.d2
inherit(H.d0,t)
inherit(H.eR,t)
t=H.d3
inherit(H.eS,t)
inherit(H.eT,t)
inherit(H.eU,t)
inherit(H.eV,t)
inherit(H.eW,t)
inherit(H.d4,t)
inherit(H.eX,t)
t=P.hg
inherit(P.dg,t)
inherit(P.i_,t)
inherit(P.hQ,P.i3)
inherit(P.dj,H.ac)
inherit(P.fr,P.fs)
inherit(P.hF,P.fr)
inherit(P.hI,P.hF)
t=P.T
inherit(P.L,t)
inherit(P.n,t)
t=P.ai
inherit(P.d8,t)
inherit(P.eq,t)
t=W.f
inherit(W.y,t)
inherit(W.bq,t)
inherit(W.dG,t)
inherit(W.ed,t)
inherit(W.bx,t)
inherit(W.bz,t)
inherit(W.fd,t)
inherit(W.d9,t)
inherit(W.ft,t)
inherit(W.a3,t)
inherit(W.br,t)
inherit(W.a6,t)
inherit(W.W,t)
inherit(W.bp,t)
inherit(W.h_,t)
inherit(W.h3,t)
inherit(W.bP,t)
inherit(W.h5,t)
inherit(W.aU,t)
inherit(W.hX,t)
t=W.y
inherit(W.ca,t)
inherit(W.aE,t)
inherit(W.aG,t)
inherit(W.c7,t)
inherit(W.hi,t)
t=W.ca
inherit(W.k,t)
inherit(P.I,t)
t=W.k
inherit(W.dx,t)
inherit(W.dy,t)
inherit(W.dC,t)
inherit(W.c3,t)
inherit(W.ei,t)
inherit(W.er,t)
inherit(W.fq,t)
inherit(W.hE,t)
inherit(W.bs,W.bq)
inherit(W.dB,W.bs)
inherit(W.bo,W.cf)
inherit(W.dM,W.c8)
inherit(W.cR,W.cu)
inherit(W.dN,W.cR)
inherit(W.a_,W.c2)
inherit(W.cP,W.cw)
inherit(W.ec,W.cP)
inherit(W.cE,W.cl)
inherit(W.bw,W.cE)
inherit(W.cd,W.aG)
inherit(W.ce,W.bx)
inherit(W.ax,W.j)
t=W.ax
inherit(W.aK,t)
inherit(W.N,t)
inherit(W.aR,t)
inherit(W.eN,W.bz)
inherit(W.cN,W.cr)
inherit(W.eO,W.cN)
inherit(W.cG,W.ci)
inherit(W.d5,W.cG)
t=W.bd
inherit(W.f7,t)
inherit(W.fn,t)
inherit(W.fT,t)
inherit(W.cM,W.cz)
inherit(W.f9,W.cM)
inherit(W.fc,W.ad)
inherit(W.bt,W.br)
inherit(W.fu,W.bt)
inherit(W.cL,W.cp)
inherit(W.fw,W.cL)
inherit(W.cA,W.cg)
inherit(W.fJ,W.cA)
inherit(W.bu,W.bp)
inherit(W.fK,W.bu)
inherit(W.cB,W.cm)
inherit(W.fQ,W.cB)
inherit(W.aT,W.N)
inherit(W.cC,W.ck)
inherit(W.dh,W.cC)
inherit(W.cO,W.ch)
inherit(W.hh,W.cO)
inherit(W.hj,W.c9)
inherit(W.cQ,W.cx)
inherit(W.hD,W.cQ)
inherit(W.cD,W.co)
inherit(W.dk,W.cD)
inherit(W.cS,W.cv)
inherit(W.hY,W.cS)
inherit(W.cT,W.ct)
inherit(W.hZ,W.cT)
inherit(W.hm,P.fA)
inherit(W.j1,W.hm)
inherit(W.hn,P.fB)
inherit(P.h7,P.h6)
inherit(P.H,P.hP)
t=P.I
inherit(P.au,t)
inherit(P.aD,t)
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
inherit(P.e5,t)
inherit(P.e6,t)
inherit(P.e7,t)
inherit(P.e8,t)
inherit(P.e9,t)
inherit(P.ee,t)
inherit(P.eK,t)
inherit(P.eL,t)
inherit(P.f5,t)
inherit(P.fp,t)
inherit(P.fG,t)
inherit(P.h0,t)
inherit(P.bQ,t)
inherit(P.hU,t)
inherit(P.hV,t)
inherit(P.hW,t)
t=P.au
inherit(P.dw,t)
inherit(P.eh,t)
inherit(P.ab,t)
inherit(P.eo,t)
inherit(P.fF,t)
inherit(P.dc,t)
inherit(P.fZ,t)
inherit(P.cJ,P.cj)
inherit(P.eB,P.cJ)
inherit(P.cI,P.cn)
inherit(P.eZ,P.cI)
inherit(P.fh,P.ab)
inherit(P.cH,P.cs)
inherit(P.fE,P.cH)
t=P.dc
inherit(P.fI,t)
inherit(P.bL,t)
inherit(P.cF,P.cq)
inherit(P.fS,P.cF)
inherit(P.cK,P.cy)
inherit(P.fx,P.cK)
t=G.eP
inherit(G.fv,t)
inherit(G.de,t)
inherit(G.d_,t)
inherit(G.fk,t)
inherit(A.bI,t)
inherit(A.fj,t)
t=G.fv
inherit(G.dD,t)
inherit(A.bF,t)
inherit(B.f_,G.dD)
t=G.de
inherit(G.cZ,t)
inherit(G.f6,t)
inherit(G.ep,G.bM)
mixin(H.bB,P.x)
mixin(H.bC,P.x)
mixin(H.bD,H.cc)
mixin(H.bE,H.cc)
mixin(W.bp,P.x)
mixin(W.bq,P.x)
mixin(W.br,P.x)
mixin(W.bs,W.B)
mixin(W.bt,W.B)
mixin(W.bu,W.B)
mixin(W.cf,W.dH)
mixin(W.cz,P.x)
mixin(W.cl,P.x)
mixin(W.ci,P.x)
mixin(W.ct,P.x)
mixin(W.cu,P.x)
mixin(W.cv,P.x)
mixin(W.cw,P.x)
mixin(W.cx,P.x)
mixin(W.cg,P.x)
mixin(W.ck,P.x)
mixin(W.ch,P.x)
mixin(W.cm,P.x)
mixin(W.co,P.x)
mixin(W.cp,P.x)
mixin(W.cr,P.x)
mixin(W.cA,W.B)
mixin(W.cB,W.B)
mixin(W.cC,W.B)
mixin(W.cM,W.B)
mixin(W.cN,W.B)
mixin(W.cL,W.B)
mixin(W.cQ,W.B)
mixin(W.cR,W.B)
mixin(W.cS,W.B)
mixin(W.cT,W.B)
mixin(W.cD,W.B)
mixin(W.cE,W.B)
mixin(W.cG,W.B)
mixin(W.cO,W.B)
mixin(W.cP,W.B)
mixin(P.cs,P.x)
mixin(P.cj,P.x)
mixin(P.cn,P.x)
mixin(P.cq,P.x)
mixin(P.cF,W.B)
mixin(P.cH,W.B)
mixin(P.cI,W.B)
mixin(P.cJ,W.B)
mixin(P.cy,P.x)
mixin(P.cK,W.B)})();(function constants(){C.l=W.c3.prototype
C.h=W.c4.prototype
C.i=W.c5.prototype
C.r=W.cd.prototype
C.n=W.ce.prototype
C.t=J.a.prototype
C.a=J.aH.prototype
C.b=J.cV.prototype
C.c=J.b7.prototype
C.e=J.aI.prototype
C.A=J.aJ.prototype
C.f=H.d0.prototype
C.q=J.f8.prototype
C.j=J.aS.prototype
C.U=W.aT.prototype
C.V=W.bP.prototype
C.k=new P.hH()
C.d=new P.hQ()
C.m=new P.at(0)
C.u=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.v=function(hooks) {
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
C.o=function(hooks) { return hooks; }

C.w=function(getTagFallback) {
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
C.x=function() {
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
C.y=function(hooks) {
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
C.z=function(hooks) {
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
C.p=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.B=makeConstList([])
C.C=H.J("mU")
C.D=H.J("mV")
C.E=H.J("eg")
C.F=H.J("mW")
C.G=H.J("mX")
C.H=H.J("jD")
C.I=H.J("mY")
C.J=H.J("jG")
C.K=H.J("aN")
C.L=H.J("v")
C.M=H.J("k5")
C.N=H.J("k6")
C.O=H.J("n_")
C.P=H.J("k7")
C.Q=H.J("b_")
C.R=H.J("L")
C.S=H.J("n")
C.T=H.J("T")})();(function staticFields(){$.jN="$cachedFunction"
$.jO="$cachedInvocation"
$.jx=null
$.jv=null
$.j2=!1
$.j7=null
$.kg=null
$.kz=null
$.ic=null
$.il=null
$.j8=null
$.bg=null
$.bU=null
$.bV=null
$.j3=!1
$.w=C.d
$.jB=0
$.mq=0
$.mr=0
$.jb=0
$.kv=0
$.bZ=0
$.c_=0
$.mO=!1
$.kp=0})();(function lazyInitializers(){lazy($,"jA","$get$jA",function(){return H.kr("_$dart_dartClosure")})
lazy($,"iT","$get$iT",function(){return H.kr("_$dart_js")})
lazy($,"jE","$get$jE",function(){return H.lF()})
lazy($,"jF","$get$jF",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.jB
$.jB=t+1
t="expando$key$"+t}return new P.dS(null,t,[P.n])})
lazy($,"jV","$get$jV",function(){return H.ap(H.fV({
toString:function(){return"$receiver$"}}))})
lazy($,"jW","$get$jW",function(){return H.ap(H.fV({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"jX","$get$jX",function(){return H.ap(H.fV(null))})
lazy($,"jY","$get$jY",function(){return H.ap(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"k1","$get$k1",function(){return H.ap(H.fV(void 0))})
lazy($,"k2","$get$k2",function(){return H.ap(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"k_","$get$k_",function(){return H.ap(H.k0(null))})
lazy($,"jZ","$get$jZ",function(){return H.ap(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"k4","$get$k4",function(){return H.ap(H.k0(void 0))})
lazy($,"k3","$get$k3",function(){return H.ap(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"j0","$get$j0",function(){return P.m4()})
lazy($,"bW","$get$bW",function(){return[]})
lazy($,"ib","$get$ib",function(){return P.jJ(P.n,P.b_)})
lazy($,"bY","$get$bY",function(){return P.jJ(P.v,P.b_)})
lazy($,"jT","$get$jT",function(){return new G.dd(1281,0,4294967295)})
lazy($,"jt","$get$jt",function(){return new G.bN(1281,1281,1281)})
lazy($,"js","$get$js",function(){return new G.bN(32774,770,769)})
lazy($,"S","$get$S",function(){return P.aL(["cBlendEquation",new G.i("","",0),"cDepthWrite",new G.i("","",0),"cDepthTest",new G.i("","",0),"cStencilFunc",new G.i("","",0),"tPosition",new G.i("vec3","",0),"tSpeed",new G.i("vec3","",0),"tForce",new G.i("vec3","",0),"aColors",new G.i("vec3","per vertex color",0),"aColorAlpha",new G.i("vec4","per vertex color",0),"aPosition",new G.i("vec3","vertex coordinates",0),"aTexUV",new G.i("vec2","texture uvs",0),"aNormal",new G.i("vec3","vertex normals",0),"aBinormal",new G.i("vec3","vertex binormals",0),"aCenter",new G.i("vec4","for wireframe",0),"aPointSize",new G.i("float","",0),"aBoneIndex",new G.i("vec4","",0),"aBoneWeight",new G.i("vec4","",0),"aTangent",new G.i("vec3","vertex tangents",0),"aBitangent",new G.i("vec3","vertex btangents",0),"iaRotation",new G.i("vec4","",0),"iaTranslation",new G.i("vec3","",0),"iaScale",new G.i("vec3","",0),"vColor",new G.i("vec3","per vertex color",0),"vTexUV",new G.i("vec2","",0),"vLightWeighting",new G.i("vec3","",0),"vNormal",new G.i("vec3","",0),"vPosition",new G.i("vec3","vertex coordinates",0),"vPositionFromLight",new G.i("vec4","delta from light",0),"vCenter",new G.i("vec4","for wireframe",0),"vDepth",new G.i("float","depth for shadowmaps",0),"uTransformationMatrix",new G.i("mat4","",0),"uModelMatrix",new G.i("mat4","",0),"uNormalMatrix",new G.i("mat3","",0),"uConvolutionMatrix",new G.i("mat3","",0),"uPerspectiveViewMatrix",new G.i("mat4","",0),"uLightPerspectiveViewMatrix",new G.i("mat4","",0),"uShadowMap",new G.i("sampler2DShadow","",0),"uTexture",new G.i("sampler2D","",0),"uTexture2",new G.i("sampler2D","",0),"uTexture3",new G.i("sampler2D","",0),"uTexture4",new G.i("sampler2D","",0),"uSpecularMap",new G.i("sampler2D","",0),"uNormalMap",new G.i("sampler2D","",0),"uBumpMap",new G.i("sampler2D","",0),"uDepthMap",new G.i("sampler2D","",0),"uCubeTexture",new G.i("samplerCube","",0),"uAnimationTable",new G.i("sampler2D","",0),"uTime",new G.i("float","time since program start in sec",0),"uCameraNear",new G.i("float","",0),"uCameraFar",new G.i("float","",0),"uFogNear",new G.i("float","",0),"uFogFar",new G.i("float","",0),"uPointSize",new G.i("float","",0),"uScale",new G.i("float","",0),"uAngle",new G.i("float","",0),"uCanvasSize",new G.i("vec2","",0),"uCenter2",new G.i("vec2","",0),"uCutOff",new G.i("float","",0),"uShininess",new G.i("float","",0),"uShadowBias",new G.i("float","",0),"uOpacity",new G.i("float","",0),"uColor",new G.i("vec3","",0),"uAmbientDiffuse",new G.i("vec3","",0),"uColorEmissive",new G.i("vec3","",0),"uColorSpecular",new G.i("vec3","",0),"uColorDiffuse",new G.i("vec3","",0),"uColorAlpha",new G.i("vec4","",0),"uColorAlpha2",new G.i("vec4","",0),"uEyePosition",new G.i("vec3","",0),"uMaterial",new G.i("mat4","",0),"uRange",new G.i("vec2","",0),"uDirection",new G.i("vec2","",0),"uBoneMatrices",new G.i("mat4","",128),"uLightDescs",new G.i("mat4","",4),"uLightCount",new G.i("float","",0),"uLightTypes",new G.i("float","",4),"uBumpScale",new G.i("float","for bump maps",0),"uNormalScale",new G.i("float","for normal maps",0)])})
lazy($,"k8","$get$k8",function(){return P.lW(null)})
lazy($,"ky","$get$ky",function(){var t=new G.bc("PointSpritesV",null,[],[],[],[],0,P.G())
t.bc(["aPosition"])
t.ay(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"])
t.az(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"])
return t})
lazy($,"kx","$get$kx",function(){var t=new G.bc("PointSpritesF",null,[],[],[],[],0,P.G())
t.ay(["uTexture"])
t.az(["oFragColor = texture( uTexture,  gl_PointCoord);"])
return t})
lazy($,"km","$get$km",function(){var t=new G.bc("FixedVertexColorV",null,[],[],[],[],0,P.G())
t.bc(["aPosition"])
t.ay(["uPerspectiveViewMatrix","uModelMatrix"])
t.bd(["vColor"])
t.bj(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vColor = ColorFromPosition(aPosition);"],["// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"])
return t})
lazy($,"kl","$get$kl",function(){var t=new G.bc("FixedVertexColorF",null,[],[],[],[],0,P.G())
t.bd(["vColor"])
t.az(["oFragColor = vec4( vColor, 1.0 );"])
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
mangledGlobalNames:{n:"int",L:"double",T:"num",v:"String",b_:"bool",aN:"Null",b:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,v:true,args:[P.o],opt:[P.bJ]},{func:1,ret:P.n,args:[P.F,P.F]},{func:1,ret:P.v,args:[W.f]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationTimeline:J.a,AppBannerPromptResult:J.a,BarProp:J.a,Body:J.a,CacheStorage:J.a,CanvasPattern:J.a,CHROMIUMValuebuffer:J.a,CircularGeofencingRegion:J.a,Client:J.a,Clients:J.a,CompositorProxy:J.a,ConsoleBase:J.a,Coordinates:J.a,Credential:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMStringMap:J.a,EffectModel:J.a,Entry:J.a,FederatedCredential:J.a,FileEntry:J.a,FileError:J.a,Stream:J.a,DOMFileSystem:J.a,FontFace:J.a,FormData:J.a,GamepadButton:J.a,Geofencing:J.a,GeofencingRegion:J.a,Geolocation:J.a,Geoposition:J.a,Headers:J.a,HMDVRDevice:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageData:J.a,InjectedScriptHost:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,KeyframeEffect:J.a,MediaDeviceInfo:J.a,MediaDevices:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaMetadata:J.a,MediaSession:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigatorStorageUtils:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,OffscreenCanvas:J.a,PasswordCredential:J.a,PerformanceCompositeTiming:J.a,PerformanceEntry:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformanceRenderTiming:J.a,PerformanceResourceTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PositionError:J.a,PositionSensorVRDevice:J.a,Presentation:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,Range:J.a,ReadableByteStream:J.a,ReadableByteStreamReader:J.a,ReadableStreamReader:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,Selection:J.a,ServicePort:J.a,SharedArrayBuffer:J.a,SourceInfo:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StorageInfo:J.a,StorageManager:J.a,StorageQuota:J.a,StyleMedia:J.a,StylePropertyMap:J.a,SyncManager:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRDevice:J.a,VREyeParameters:J.a,VRFieldOfView:J.a,VRPositionState:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkerConsole:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothAdvertisingData:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,NFC:J.a,PagePopupController:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WebKitCSSMatrix:J.a,Worklet:J.a,WorkletGlobalScope:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPreserveAspectRatio:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,CHROMIUMSubscribeUniform:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTDisjointTimerQuery:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bA,ArrayBufferView:H.b9,DataView:H.eQ,Float32Array:H.d0,Float64Array:H.eR,Int16Array:H.eS,Int32Array:H.eT,Int8Array:H.eU,Uint16Array:H.eV,Uint32Array:H.eW,Uint8ClampedArray:H.d4,CanvasPixelArray:H.d4,Uint8Array:H.eX,HTMLAudioElement:W.k,HTMLBRElement:W.k,HTMLBaseElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLDivElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLImageElement:W.k,HTMLKeygenElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMediaElement:W.k,HTMLMenuElement:W.k,HTMLMenuItemElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTableElement:W.k,HTMLTableRowElement:W.k,HTMLTableSectionElement:W.k,HTMLTemplateElement:W.k,HTMLTextAreaElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLVideoElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,HTMLAnchorElement:W.dx,HTMLAreaElement:W.dy,AudioTrack:W.Z,AudioTrackList:W.dB,Blob:W.c2,HTMLBodyElement:W.dC,HTMLCanvasElement:W.c3,CanvasGradient:W.c4,CanvasRenderingContext2D:W.c5,CDATASection:W.aE,CharacterData:W.aE,Comment:W.aE,ProcessingInstruction:W.aE,Text:W.aE,CompositorWorker:W.dG,CSSCharsetRule:W.A,CSSFontFaceRule:W.A,CSSGroupingRule:W.A,CSSImportRule:W.A,CSSKeyframeRule:W.A,MozCSSKeyframeRule:W.A,WebKitCSSKeyframeRule:W.A,CSSKeyframesRule:W.A,MozCSSKeyframesRule:W.A,WebKitCSSKeyframesRule:W.A,CSSMediaRule:W.A,CSSNamespaceRule:W.A,CSSPageRule:W.A,CSSRule:W.A,CSSStyleRule:W.A,CSSSupportsRule:W.A,CSSViewportRule:W.A,CSSStyleDeclaration:W.bo,MSStyleCSSProperties:W.bo,CSS2Properties:W.bo,DataTransferItemList:W.dJ,DeviceAcceleration:W.dK,XMLDocument:W.aG,Document:W.aG,DocumentFragment:W.c7,ShadowRoot:W.c7,DOMException:W.dL,DOMPoint:W.dM,DOMPointReadOnly:W.c8,DOMRectReadOnly:W.c9,DOMStringList:W.dN,DOMTokenList:W.dO,Element:W.ca,AnimationEvent:W.j,AnimationPlayerEvent:W.j,ApplicationCacheErrorEvent:W.j,AutocompleteErrorEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceLightEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,GamepadEvent:W.j,GeofencingEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RelatedEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCIceCandidateEvent:W.j,RTCPeerConnectionIceEvent:W.j,SecurityPolicyViolationEvent:W.j,ServicePortConnectEvent:W.j,ServiceWorkerMessageEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BatteryManager:W.f,CanvasCaptureMediaStreamTrack:W.f,CrossOriginServiceWorkerClient:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MessagePort:W.f,MIDIAccess:W.f,NetworkInformation:W.f,Notification:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationReceiver:W.f,PresentationRequest:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,ServicePortCollection:W.f,ServiceWorkerContainer:W.f,ServiceWorkerRegistration:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioContext:W.f,webkitAudioContext:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioSourceNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OfflineAudioContext:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.a_,FileList:W.ec,FileWriter:W.ed,HTMLFormElement:W.ei,Gamepad:W.a0,History:W.en,HTMLCollection:W.bw,HTMLFormControlsCollection:W.bw,HTMLOptionsCollection:W.bw,HTMLDocument:W.cd,XMLHttpRequest:W.ce,XMLHttpRequestUpload:W.bx,XMLHttpRequestEventTarget:W.bx,HTMLInputElement:W.er,KeyboardEvent:W.aK,Location:W.eH,MediaList:W.eM,MIDIOutput:W.eN,MIDIInput:W.bz,MIDIPort:W.bz,MimeType:W.a1,MimeTypeArray:W.eO,PointerEvent:W.N,MouseEvent:W.N,DragEvent:W.N,Navigator:W.eY,Attr:W.y,Node:W.y,NodeList:W.d5,RadioNodeList:W.d5,Path2D:W.f4,Perspective:W.f7,Plugin:W.a2,PluginArray:W.f9,PositionValue:W.fc,PresentationConnection:W.fd,Rotation:W.fn,RTCDataChannel:W.d9,DataChannel:W.d9,HTMLSelectElement:W.fq,SharedWorker:W.ft,SourceBuffer:W.a3,SourceBufferList:W.fu,SpeechGrammar:W.a4,SpeechGrammarList:W.fw,SpeechRecognitionResult:W.a5,Storage:W.fz,CSSStyleSheet:W.V,StyleSheet:W.V,CalcLength:W.ad,KeywordValue:W.ad,LengthValue:W.ad,NumberValue:W.ad,SimpleLength:W.ad,TransformValue:W.ad,StyleValue:W.ad,TextTrack:W.a6,TextTrackCue:W.W,VTTCue:W.W,TextTrackCueList:W.fJ,TextTrackList:W.fK,TimeRanges:W.fM,Touch:W.a7,TouchEvent:W.aR,TouchList:W.fQ,TrackDefaultList:W.fR,Matrix:W.bd,Skew:W.bd,TransformComponent:W.bd,Translation:W.fT,CompositionEvent:W.ax,FocusEvent:W.ax,TextEvent:W.ax,SVGZoomEvent:W.ax,UIEvent:W.ax,URL:W.fY,VideoTrackList:W.h_,VTTRegionList:W.h2,WebSocket:W.h3,WheelEvent:W.aT,Window:W.bP,DOMWindow:W.bP,Worker:W.h5,CompositorWorkerGlobalScope:W.aU,DedicatedWorkerGlobalScope:W.aU,ServiceWorkerGlobalScope:W.aU,SharedWorkerGlobalScope:W.aU,WorkerGlobalScope:W.aU,ClientRect:W.hf,ClientRectList:W.dh,DOMRectList:W.dh,CSSRuleList:W.hh,DocumentType:W.hi,DOMRect:W.hj,GamepadList:W.hD,HTMLFrameSetElement:W.hE,NamedNodeMap:W.dk,MozNamedAttrMap:W.dk,ServiceWorker:W.hX,SpeechRecognitionResultList:W.hY,StyleSheetList:W.hZ,WorkerLocation:W.i1,WorkerNavigator:W.i2,SVGAElement:P.dw,SVGAnimateElement:P.aD,SVGAnimateMotionElement:P.aD,SVGAnimateTransformElement:P.aD,SVGAnimationElement:P.aD,SVGSetElement:P.aD,SVGFEBlendElement:P.dT,SVGFEColorMatrixElement:P.dU,SVGFEComponentTransferElement:P.dV,SVGFECompositeElement:P.dW,SVGFEConvolveMatrixElement:P.dX,SVGFEDiffuseLightingElement:P.dY,SVGFEDisplacementMapElement:P.dZ,SVGFEFloodElement:P.e_,SVGFEGaussianBlurElement:P.e0,SVGFEImageElement:P.e1,SVGFEMergeElement:P.e2,SVGFEMorphologyElement:P.e3,SVGFEOffsetElement:P.e4,SVGFEPointLightElement:P.e5,SVGFESpecularLightingElement:P.e6,SVGFESpotLightElement:P.e7,SVGFETileElement:P.e8,SVGFETurbulenceElement:P.e9,SVGFilterElement:P.ee,SVGForeignObjectElement:P.eh,SVGCircleElement:P.ab,SVGEllipseElement:P.ab,SVGLineElement:P.ab,SVGPathElement:P.ab,SVGPolygonElement:P.ab,SVGPolylineElement:P.ab,SVGGeometryElement:P.ab,SVGClipPathElement:P.au,SVGDefsElement:P.au,SVGGElement:P.au,SVGSwitchElement:P.au,SVGGraphicsElement:P.au,SVGImageElement:P.eo,SVGLength:P.al,SVGLengthList:P.eB,SVGMarkerElement:P.eK,SVGMaskElement:P.eL,SVGNumber:P.an,SVGNumberList:P.eZ,SVGPatternElement:P.f5,SVGPoint:P.fa,SVGPointList:P.fb,SVGRect:P.fg,SVGRectElement:P.fh,SVGScriptElement:P.fp,SVGStringList:P.fE,SVGDescElement:P.I,SVGDiscardElement:P.I,SVGFEDistantLightElement:P.I,SVGFEFuncAElement:P.I,SVGFEFuncBElement:P.I,SVGFEFuncGElement:P.I,SVGFEFuncRElement:P.I,SVGFEMergeNodeElement:P.I,SVGMetadataElement:P.I,SVGStopElement:P.I,SVGStyleElement:P.I,SVGTitleElement:P.I,SVGComponentTransferFunctionElement:P.I,SVGElement:P.I,SVGSVGElement:P.fF,SVGSymbolElement:P.fG,SVGTextContentElement:P.dc,SVGTextPathElement:P.fI,SVGTSpanElement:P.bL,SVGTextElement:P.bL,SVGTextPositioningElement:P.bL,SVGTransform:P.ao,SVGTransformList:P.fS,SVGUseElement:P.fZ,SVGViewElement:P.h0,SVGViewSpec:P.h1,SVGLinearGradientElement:P.bQ,SVGRadialGradientElement:P.bQ,SVGGradientElement:P.bQ,SVGCursorElement:P.hU,SVGFEDropShadowElement:P.hV,SVGMPathElement:P.hW,AudioBuffer:P.dA,WebGLRenderingContext:P.fl,WebGL2RenderingContext:P.fm,WebGL2RenderingContextBase:P.i0,SQLResultSetRowList:P.fx})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasPattern:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,Credential:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMStringMap:true,EffectModel:true,Entry:true,FederatedCredential:true,FileEntry:true,FileError:true,Stream:true,DOMFileSystem:true,FontFace:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageData:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PasswordCredential:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,Range:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,ServicePort:true,SharedArrayBuffer:true,SourceInfo:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPreserveAspectRatio:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,AudioTrack:true,AudioTrackList:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasGradient:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,CSSCharsetRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DataTransferItemList:true,DeviceAcceleration:true,XMLDocument:true,Document:false,DocumentFragment:true,ShadowRoot:true,DOMException:true,DOMPoint:true,DOMPointReadOnly:false,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AudioDestinationNode:true,AudioNode:true,AudioSourceNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OfflineAudioContext:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Navigator:true,Attr:true,Node:false,NodeList:true,RadioNodeList:true,Path2D:true,Perspective:true,Plugin:true,PluginArray:true,PositionValue:true,PresentationConnection:true,Rotation:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,SharedWorker:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,CalcLength:true,KeywordValue:true,LengthValue:true,NumberValue:true,SimpleLength:true,TransformValue:true,StyleValue:false,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,Matrix:true,Skew:true,TransformComponent:false,Translation:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,SVGZoomEvent:true,UIEvent:false,URL:true,VideoTrackList:true,VTTRegionList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.d1.$nativeSuperclassTag="ArrayBufferView"
H.bC.$nativeSuperclassTag="ArrayBufferView"
H.bD.$nativeSuperclassTag="ArrayBufferView"
H.d2.$nativeSuperclassTag="ArrayBufferView"
H.bB.$nativeSuperclassTag="ArrayBufferView"
H.bE.$nativeSuperclassTag="ArrayBufferView"
H.d3.$nativeSuperclassTag="ArrayBufferView"
W.bq.$nativeSuperclassTag="EventTarget"
W.bs.$nativeSuperclassTag="EventTarget"
W.br.$nativeSuperclassTag="EventTarget"
W.bt.$nativeSuperclassTag="EventTarget"
W.bp.$nativeSuperclassTag="EventTarget"
W.bu.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.kB(F.kA(),b)},[])
else (function(b){H.kB(F.kA(),b)})([])})})()