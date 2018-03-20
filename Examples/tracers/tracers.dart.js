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
a[c]=function(){a[c]=function(){H.nh(b)}
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
return d?function(e){if(t===null)t=H.jp(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.jp(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.jp(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={jb:function jb(a){this.a=a},
jg:function(a,b,c,d){if(!!a.$isc)return new H.e5(a,b,[c,d])
return new H.d4(a,b,[c,d])},
eI:function(){return new P.aD("No element")},
mb:function(){return new P.aD("Too many elements")},
ma:function(){return new P.aD("Too few elements")},
dm:function(a,b,c,d){if(c-b<=32)H.mo(a,b,c,d)
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
s=C.b.G(t+1,6)
r=a3+s
q=a4-s
p=C.b.G(a3+a4,2)
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
H.dm(a2,a3,g-2,a5)
H.dm(a2,f+2,a4,a5)
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
break}}H.dm(a2,g,f,a5)}else H.dm(a2,g,f,a5)},
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
e5:function e5(a,b,c){this.a=a
this.b=b
this.$ti=c},
eT:function eT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
by:function by(a,b,c){this.a=a
this.b=b
this.$ti=c},
dv:function dv(a,b,c){this.a=a
this.b=b
this.$ti=c},
hl:function hl(a,b,c){this.a=a
this.b=b
this.$ti=c},
ch:function ch(){},
dD:function(a,b){var t=a.af(b)
if(!u.globalState.d.cy)u.globalState.f.ak()
return t},
iM:function(){--u.globalState.f.b
H.d(u.globalState.f.b>=0)},
l0:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.u(s).$isb)throw H.e(P.jL("Arguments to main must be a List: "+H.f(s)))
u.globalState=new H.hZ(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$k6()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.hB(P.jf(null,H.b2),0)
r=P.m
s.sez(new H.af(0,null,null,null,null,null,0,[r,H.b1]))
s.seC(new H.af(0,null,null,null,null,null,0,[r,null]))
if(s.x){q=new H.hY()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.m5,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.mD)}if(u.globalState.x)return
s=u.globalState.a++
q=P.ag(null,null,null,r)
p=new H.bc(0,null,!1)
o=new H.b1(s,new H.af(0,null,null,null,null,null,0,[r,H.bc]),q,u.createNewIsolate(),p,new H.ao(H.iQ()),new H.ao(H.iQ()),!1,!1,[],P.ag(null,null,null,null),null,null,!1,!0,P.ag(null,null,null,null))
q.l(0,0)
o.bt(0,p)
u.globalState.e=o
u.globalState.z.i(0,s,o)
u.globalState.d=o
if(H.bi(a,{func:1,args:[,]}))o.af(new H.iW(t,a))
else if(H.bi(a,{func:1,args:[,,]}))o.af(new H.iX(t,a))
else o.af(a)
u.globalState.f.ak()},
mD:function(a){var t=P.aS(["command","print","msg",a])
return new H.aj(!0,P.bU(null,P.m)).H(t)},
m7:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.m8()
return},
m8:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.e(new P.t("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.e(new P.t('Cannot extract URI from "'+t+'"'))},
m5:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.b0(!0,[]).W(b.data)
s=J.ac(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.n4(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.b0(!0,[]).W(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.b0(!0,[]).W(s.h(t,"replyTo"))
s=u.globalState.a++
k=P.m
j=P.ag(null,null,null,k)
i=new H.bc(0,null,!1)
h=new H.b1(s,new H.af(0,null,null,null,null,null,0,[k,H.bc]),j,u.createNewIsolate(),i,new H.ao(H.iQ()),new H.ao(H.iQ()),!1,!1,[],P.ag(null,null,null,null),null,null,!1,!0,P.ag(null,null,null,null))
j.l(0,0)
h.bt(0,i)
u.globalState.f.a.T(0,new H.b2(h,new H.eF(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.ak()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.lB(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.ak()
break
case"close":u.globalState.ch.aj(0,$.$get$k7().h(0,a))
a.terminate()
u.globalState.f.ak()
break
case"log":H.m4(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
k=P.aS(["command","print","msg",t])
k=new H.aj(!0,P.bU(null,P.m)).H(k)
s.toString
self.postMessage(k)}else P.al(s.h(t,"msg"))
break
case"error":throw H.e(s.h(t,"msg"))}},
m4:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aS(["command","log","msg",a])
r=new H.aj(!0,P.bU(null,P.m)).H(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.O(q)
t=H.aH(q)
s=P.cg(t)
throw H.e(s)}},
m6:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.kd=$.kd+("_"+s)
$.ke=$.ke+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.F(0,["spawned",new H.bf(s,r),q,t.r])
r=new H.eG(a,b,c,d,t)
if(e){t.bM(q,q)
u.globalState.f.a.T(0,new H.b2(t,r,"start isolate"))}else r.$0()},
mp:function(a,b){var t=new H.h3(!0,!1,null)
t.dj(a,b)
return t},
mE:function(a){return new H.b0(!0,[]).W(new H.aj(!1,P.bU(null,P.m)).H(a))},
iW:function iW(a,b){this.a=a
this.b=b},
iX:function iX(a,b){this.a=a
this.b=b},
hZ:function hZ(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
b1:function b1(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
hT:function hT(a,b){this.a=a
this.b=b},
hB:function hB(a,b){this.a=a
this.b=b},
hC:function hC(a){this.a=a},
b2:function b2(a,b,c){this.a=a
this.b=b
this.c=c},
hY:function hY(){},
eF:function eF(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eG:function eG(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hu:function hu(){},
bf:function bf(a,b){this.b=a
this.a=b},
i_:function i_(a,b){this.a=a
this.b=b},
bW:function bW(a,b,c){this.b=a
this.c=b
this.a=c},
bc:function bc(a,b,c){this.a=a
this.b=b
this.c=c},
h3:function h3(a,b,c){this.a=a
this.b=b
this.c=c},
h4:function h4(a,b){this.a=a
this.b=b},
h5:function h5(a,b){this.a=a
this.b=b},
ao:function ao(a){this.a=a},
aj:function aj(a,b){this.a=a
this.b=b},
b0:function b0(a,b){this.a=a
this.b=b},
mY:function(a){return u.types[a]},
n6:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.u(a).$iso},
f:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.ay(a)
if(typeof t!=="string")throw H.e(H.S(a))
return t},
mm:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.fw(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aV:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
dh:function(a){var t,s,r,q,p,o,n,m
t=J.u(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.N||!!J.u(a).$isaY){p=C.B(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.i.aF(q,0)===36)q=C.i.cX(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.dF(H.iA(a),0,null),u.mangledGlobalNames)},
fs:function(a){return"Instance of '"+H.dh(a)+"'"},
Q:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mk:function(a){return a.b?H.Q(a).getUTCFullYear()+0:H.Q(a).getFullYear()+0},
mi:function(a){return a.b?H.Q(a).getUTCMonth()+1:H.Q(a).getMonth()+1},
me:function(a){return a.b?H.Q(a).getUTCDate()+0:H.Q(a).getDate()+0},
mf:function(a){return a.b?H.Q(a).getUTCHours()+0:H.Q(a).getHours()+0},
mh:function(a){return a.b?H.Q(a).getUTCMinutes()+0:H.Q(a).getMinutes()+0},
mj:function(a){return a.b?H.Q(a).getUTCSeconds()+0:H.Q(a).getSeconds()+0},
mg:function(a){return a.b?H.Q(a).getUTCMilliseconds()+0:H.Q(a).getMilliseconds()+0},
kc:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.S(a))
return a[b]},
M:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ad(!0,b,"index",null)
t=J.dK(a)
if(b<0||C.b.cH(b,t))return P.A(b,a,"index",null,t)
return P.ft(b,"index",null)},
S:function(a){return new P.ad(!0,a,null,null)},
e:function(a){var t
if(a==null)a=new P.dg()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.l1})
t.name=""}else t.toString=H.l1
return t},
l1:function(){return J.ay(this.dartException)},
E:function(a){throw H.e(a)},
N:function(a){throw H.e(new P.a0(a))},
as:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.ha(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
hb:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
kp:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
jd:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.eM(a,s,t?null:b.receiver)},
O:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.iY(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aO(r,16)&8191)===10)switch(q){case 438:return t.$1(H.jd(H.f(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.f(s)+" (Error "+q+")"
return t.$1(new H.df(p,null))}}if(a instanceof TypeError){o=$.$get$kj()
n=$.$get$kk()
m=$.$get$kl()
l=$.$get$km()
k=$.$get$kq()
j=$.$get$kr()
i=$.$get$ko()
$.$get$kn()
h=$.$get$kt()
g=$.$get$ks()
f=o.L(s)
if(f!=null)return t.$1(H.jd(s,f))
else{f=n.L(s)
if(f!=null){f.method="call"
return t.$1(H.jd(s,f))}else{f=m.L(s)
if(f==null){f=l.L(s)
if(f==null){f=k.L(s)
if(f==null){f=j.L(s)
if(f==null){f=i.L(s)
if(f==null){f=l.L(s)
if(f==null){f=h.L(s)
if(f==null){f=g.L(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.df(s,f==null?null:f.method))}}return t.$1(new H.hd(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.dn()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.ad(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.dn()
return a},
aH:function(a){var t
if(a==null)return new H.dB(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dB(a,null)},
na:function(a){if(a==null||typeof a!='object')return J.an(a)
else return H.aV(a)},
mW:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=a.length
for(r=0;r<s;){q=r+1
H.d(t)
p=a[r]
r=q+1
H.d(t)
b.i(0,p,a[q])}return b},
n5:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dD(b,new H.iH(a))
case 1:return H.dD(b,new H.iI(a,d))
case 2:return H.dD(b,new H.iJ(a,d,e))
case 3:return H.dD(b,new H.iK(a,d,e,f))
case 4:return H.dD(b,new H.iL(a,d,e,f,g))}throw H.e(P.cg("Unsupported number of arguments for wrapped closure"))},
c_:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.n5)
a.$identity=t
return t},
lS:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.u(c).$isb){t.$reflectionInfo=c
r=H.mm(t).r}else r=c
q=d?Object.create(new H.fL().constructor.prototype):Object.create(new H.bm(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.jU(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.mY,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.jR:H.j6
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.e("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.jU(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
lP:function(a,b,c,d){var t=H.j6
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
jU:function(a,b,c){var t,s,r,q
if(c)return H.lR(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.lP(s,b==null?r!=null:b!==r,t,b)
return q},
lQ:function(a,b,c,d){var t,s
t=H.j6
s=H.jR
switch(b?-1:a){case 0:throw H.e(new H.fC("Intercepted function with no arguments."))
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
t=$.jQ
if(t==null){t=H.jP("receiver")
$.jQ=t}s=b.$stubName
r=b.length
q=a[s]
t=H.lQ(r,b==null?q!=null:b!==q,s,b)
return t},
jp:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.u(c).$isb){c.fixed$length=Array
t=c}else t=c
return H.lS(a,b,t,!!d,e,f)},
j6:function(a){return a.a},
jR:function(a){return a.c},
lO:function(){var t=$.jS
if(t==null){t=H.jP("self")
$.jS=t}return t},
jP:function(a){var t,s,r,q,p
t=new H.bm("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
nv:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.at(a,"String"))},
Y:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.at(a,"double"))},
nu:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.at(a,"num"))},
mQ:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.at(a,"bool"))},
n4:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.at(a,"int"))},
nc:function(a,b){throw H.e(H.at(a,b.substring(3)))},
nb:function(a,b){var t=J.ac(b)
throw H.e(H.jT(H.dh(a),t.bg(b,3,t.gk(b))))},
js:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.u(a)[b])return a
H.nc(a,b)},
aJ:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.u(a)[b]
else t=!0
if(t)return a
H.nb(a,b)},
nt:function(a){if(a==null)return a
if(!!J.u(a).$isb)return a
throw H.e(H.at(a,"List"))},
kP:function(a){var t=J.u(a)
return"$S" in t?t.$S():null},
bi:function(a,b){var t
if(a==null)return!1
t=H.kP(a)
return t==null?!1:H.kV(t,b)},
nr:function(a,b){var t,s
if(a==null)return a
if($.jm)return a
$.jm=!0
try{if(H.bi(a,b))return a
t=H.aK(b,null)
s=H.at(a,t)
throw H.e(s)}finally{$.jm=!1}},
at:function(a,b){return new H.hc("type '"+H.dh(a)+"' is not a subtype of type '"+b+"'")},
jT:function(a,b){return new H.dS("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
aw:function(a){if(!0===a)return!1
if(!!J.u(a).$isj9)a=a.$0()
if(typeof a==="boolean")return!a
throw H.e(H.at(a,"bool"))},
aG:function(a){throw H.e(new H.ho(a))},
d:function(a){if(H.aw(a))throw H.e(new P.c5(null))},
nh:function(a){throw H.e(new P.dW(a))},
iQ:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
kT:function(a){return u.getIsolateTag(a)},
I:function(a){return new H.aE(a,null)},
C:function(a,b){H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
iA:function(a){if(a==null)return
return a.$ti},
kU:function(a,b){return H.jw(a["$as"+H.f(b)],H.iA(a))},
ak:function(a,b,c){var t,s
t=H.kU(a,b)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
aI:function(a,b){var t,s
t=H.iA(a)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
aK:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.d(!0)
H.d(!0)
return a[0].name+H.dF(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.f(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aK(t,b)
return H.mF(a,b)}return"unknown-reified-type"},
mF:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aK(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aK(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aK(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.mV(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aK(l[j],b)+(" "+H.f(j))}q+="}"}return"("+q+") => "+t},
dF:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=new P.bK("")
for(r=b,q=!0,p=!0;H.d(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.d(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aK(o,c)}return p?"":"<"+s.j(0)+">"},
iB:function(a){var t,s
if(a instanceof H.b5){t=H.kP(a)
if(t!=null)return H.aK(t,null)}s=J.u(a).constructor.name
if(a==null)return s
return s+H.dF(a.$ti,0,null)},
jw:function(a,b){if(a==null)return b
H.d(typeof a=="function")
H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.jt(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.jt(a,null,b)
return b},
it:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.iA(a)
s=J.u(a)
if(s[b]==null)return!1
return H.kK(H.jw(s[d],t),c)},
dG:function(a,b,c,d){if(a==null)return a
if(H.it(a,b,c,d))return a
throw H.e(H.jT(H.dh(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dF(c,0,null),u.mangledGlobalNames)))},
no:function(a,b,c,d){if(a==null)return a
if(H.it(a,b,c,d))return a
throw H.e(H.at(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dF(c,0,null),u.mangledGlobalNames)))},
kK:function(a,b){var t,s,r,q,p
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
np:function(a,b,c){return H.jt(a,b,H.kU(b,c))},
Z:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.name==="aU")return!0
if('func' in b)return H.kV(a,b)
if('func' in a)return b.name==="j9"||b.name==="n"
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
return H.kK(H.jw(o,t),r)},
kJ:function(a,b,c){var t,s,r,q,p,o,n
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
mM:function(a,b){var t,s,r,q,p,o
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
if(n===m){if(!H.kJ(r,q,!1))return!1
if(!H.kJ(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.d(j)
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
if(!(H.Z(g,f)||H.Z(f,g)))return!1}}return H.mM(a.named,b.named)},
jt:function(a,b,c){H.d(typeof a=="function")
H.d(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
nw:function(a){var t=$.jq
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
ns:function(a){return H.aV(a)},
nq:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
n7:function(a){var t,s,r,q,p,o
H.d(!(a instanceof P.n))
t=$.jq.$1(a)
s=$.iy[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iG[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.kI.$2(a,t)
if(t!=null){s=$.iy[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iG[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.ju(r)
$.iy[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.iG[t]=r
return r}if(p==="-"){o=H.ju(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.kX(a,r)
if(p==="*")throw H.e(new P.du(t))
if(u.leafTags[t]===true){o=H.ju(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.kX(a,r)},
kX:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.iO(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
ju:function(a){return J.iO(a,!1,null,!!a.$iso)},
n9:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.iO(t,!1,null,!!t.$iso)
else return J.iO(t,c,null,null)},
n2:function(){if(!0===$.jr)return
$.jr=!0
H.n3()},
n3:function(){var t,s,r,q,p,o,n,m
$.iy=Object.create(null)
$.iG=Object.create(null)
H.n1()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.l_.$1(p)
if(o!=null){n=H.n9(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
n1:function(){var t,s,r,q,p,o,n
t=C.R()
t=H.bh(C.O,H.bh(C.T,H.bh(C.A,H.bh(C.A,H.bh(C.S,H.bh(C.P,H.bh(C.Q(C.B),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.jq=new H.iD(p)
$.kI=new H.iE(o)
$.l_=new H.iF(n)},
bh:function(a,b){return a(b)||b},
ng:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
fw:function fw(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
ha:function ha(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
df:function df(a,b){this.a=a
this.b=b},
eM:function eM(a,b,c){this.a=a
this.b=b
this.c=c},
hd:function hd(a){this.a=a},
iY:function iY(a){this.a=a},
dB:function dB(a,b){this.a=a
this.b=b},
iH:function iH(a){this.a=a},
iI:function iI(a,b){this.a=a
this.b=b},
iJ:function iJ(a,b,c){this.a=a
this.b=b
this.c=c},
iK:function iK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iL:function iL(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
b5:function b5(){},
fY:function fY(){},
fL:function fL(){},
bm:function bm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hc:function hc(a){this.a=a},
dS:function dS(a){this.a=a},
fC:function fC(a){this.a=a},
ho:function ho(a){this.a=a},
aE:function aE(a,b){this.a=a
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
eL:function eL(a){this.a=a},
eO:function eO(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
eP:function eP(a,b){this.a=a
this.$ti=b},
eQ:function eQ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
iD:function iD(a){this.a=a},
iE:function iE(a){this.a=a},
iF:function iF(a){this.a=a},
r:function(a){return a},
ip:function(a){var t,s,r
if(!!J.u(a).$isl)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
bA:function bA(){},
bb:function bb(){},
f1:function f1(){},
d7:function d7(){},
d8:function d8(){},
d9:function d9(){},
d6:function d6(){},
f2:function f2(){},
f3:function f3(){},
f4:function f4(){},
f5:function f5(){},
f6:function f6(){},
f7:function f7(){},
da:function da(){},
f8:function f8(){},
bB:function bB(){},
bC:function bC(){},
bD:function bD(){},
bE:function bE(){},
mV:function(a){var t=H.C(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
iP:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
u:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d1.prototype
return J.d0.prototype}if(typeof a=="string")return J.aP.prototype
if(a==null)return J.eK.prototype
if(typeof a=="boolean")return J.eJ.prototype
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aQ.prototype
return a}if(a instanceof P.n)return a
return J.iz(a)},
iO:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iz:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.jr==null){H.n2()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.e(new P.du("Return interceptor for "+H.f(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$jc()]
if(p!=null)return p
p=H.n7(a)
if(p!=null)return p
if(typeof a=="function")return C.U
s=Object.getPrototypeOf(a)
if(s==null)return C.D
if(s===Object.prototype)return C.D
if(typeof q=="function"){Object.defineProperty(q,$.$get$jc(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
ac:function(a){if(typeof a=="string")return J.aP.prototype
if(a==null)return a
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aQ.prototype
return a}if(a instanceof P.n)return a
return J.iz(a)},
c1:function(a){if(a==null)return a
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aQ.prototype
return a}if(a instanceof P.n)return a
return J.iz(a)},
kR:function(a){if(typeof a=="number")return J.b9.prototype
if(a==null)return a
if(!(a instanceof P.n))return J.aY.prototype
return a},
mX:function(a){if(typeof a=="number")return J.b9.prototype
if(typeof a=="string")return J.aP.prototype
if(a==null)return a
if(!(a instanceof P.n))return J.aY.prototype
return a},
kS:function(a){if(typeof a=="string")return J.aP.prototype
if(a==null)return a
if(!(a instanceof P.n))return J.aY.prototype
return a},
j:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aQ.prototype
return a}if(a instanceof P.n)return a
return J.iz(a)},
D:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.u(a).v(a,b)},
am:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.kR(a).am(a,b)},
l3:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kR(a).aB(a,b)},
bj:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.n6(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ac(a).h(a,b)},
l4:function(a,b,c,d){return J.j(a).dv(a,b,c,d)},
jx:function(a,b){return J.kS(a).aF(a,b)},
bk:function(a,b){return J.j(a).dN(a,b)},
l5:function(a,b,c){return J.j(a).dO(a,b,c)},
jy:function(a,b){return J.j(a).bL(a,b)},
iZ:function(a,b){return J.j(a).N(a,b)},
jz:function(a,b,c){return J.j(a).bO(a,b,c)},
l6:function(a,b){return J.j(a).e0(a,b)},
dH:function(a,b,c){return J.j(a).bP(a,b,c)},
l7:function(a,b,c){return J.j(a).bQ(a,b,c)},
c4:function(a,b,c){return J.j(a).bR(a,b,c)},
dI:function(a,b){return J.j(a).e3(a,b)},
l8:function(a,b){return J.j(a).bS(a,b)},
l9:function(a,b,c){return J.j(a).bT(a,b,c)},
jA:function(a,b,c,d){return J.j(a).bU(a,b,c,d)},
la:function(a,b){return J.c1(a).bV(a,b)},
lb:function(a,b,c,d,e){return J.j(a).bW(a,b,c,d,e)},
lc:function(a,b){return J.mX(a).O(a,b)},
j_:function(a,b,c){return J.ac(a).e7(a,b,c)},
j0:function(a){return J.j(a).bY(a)},
ld:function(a){return J.j(a).bZ(a)},
le:function(a){return J.j(a).c1(a)},
jB:function(a){return J.j(a).ed(a)},
lf:function(a,b){return J.j(a).c3(a,b)},
j1:function(a,b){return J.j(a).c4(a,b)},
lg:function(a,b,c,d){return J.j(a).c5(a,b,c,d)},
lh:function(a,b,c,d,e){return J.j(a).ek(a,b,c,d,e)},
li:function(a,b,c,d,e){return J.j(a).c6(a,b,c,d,e)},
lj:function(a,b,c,d,e,f){return J.j(a).el(a,b,c,d,e,f)},
lk:function(a,b){return J.c1(a).t(a,b)},
dJ:function(a,b){return J.j(a).c7(a,b)},
ll:function(a,b){return J.j(a).c8(a,b)},
lm:function(a){return J.j(a).em(a)},
ln:function(a,b){return J.c1(a).au(a,b)},
lo:function(a){return J.j(a).ge_(a)},
an:function(a){return J.u(a).gu(a)},
bl:function(a){return J.c1(a).gw(a)},
dK:function(a){return J.ac(a).gk(a)},
lp:function(a){return J.j(a).gaZ(a)},
lq:function(a){return J.u(a).gA(a)},
lr:function(a){return J.j(a).geO(a)},
ls:function(a){return J.j(a).gay(a)},
j2:function(a){return J.j(a).gm(a)},
j3:function(a){return J.j(a).gn(a)},
jC:function(a){return J.j(a).gI(a)},
j4:function(a,b){return J.j(a).a6(a,b)},
lt:function(a){return J.j(a).aA(a)},
lu:function(a){return J.j(a).b4(a)},
lv:function(a,b){return J.j(a).b5(a,b)},
lw:function(a,b,c){return J.j(a).b6(a,b,c)},
jD:function(a,b,c){return J.j(a).b9(a,b,c)},
lx:function(a,b){return J.j(a).ca(a,b)},
ly:function(a,b){return J.c1(a).cc(a,b)},
lz:function(a,b,c){return J.j(a).ce(a,b,c)},
lA:function(a){return J.c1(a).eH(a)},
lB:function(a,b){return J.j(a).F(a,b)},
lC:function(a,b,c,d){return J.j(a).bf(a,b,c,d)},
lD:function(a,b,c,d,e,f,g){return J.j(a).ck(a,b,c,d,e,f,g)},
lE:function(a,b,c,d){return J.j(a).cl(a,b,c,d)},
jE:function(a,b,c,d){return J.j(a).cm(a,b,c,d)},
lF:function(a){return J.kS(a).eR(a)},
ay:function(a){return J.u(a).j(a)},
lG:function(a,b,c,d){return J.j(a).eT(a,b,c,d)},
lH:function(a,b,c){return J.j(a).cp(a,b,c)},
lI:function(a,b,c){return J.j(a).cq(a,b,c)},
j5:function(a,b,c){return J.j(a).cr(a,b,c)},
lJ:function(a,b,c){return J.j(a).cs(a,b,c)},
jF:function(a,b,c){return J.j(a).ct(a,b,c)},
jG:function(a,b,c){return J.j(a).cu(a,b,c)},
jH:function(a,b,c){return J.j(a).cv(a,b,c)},
jI:function(a,b,c,d){return J.j(a).cw(a,b,c,d)},
jJ:function(a,b,c,d){return J.j(a).cz(a,b,c,d)},
lK:function(a,b){return J.j(a).cB(a,b)},
lL:function(a,b,c){return J.j(a).eU(a,b,c)},
jK:function(a,b,c,d,e,f,g){return J.j(a).cD(a,b,c,d,e,f,g)},
lM:function(a,b,c,d,e){return J.j(a).cE(a,b,c,d,e)},
a:function a(){},
eJ:function eJ(){},
eK:function eK(){},
bx:function bx(){},
fm:function fm(){},
aY:function aY(){},
aQ:function aQ(){},
aO:function aO(a){this.$ti=a},
ja:function ja(a){this.$ti=a},
dO:function dO(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b9:function b9(){},
d1:function d1(){},
d0:function d0(){},
aP:function aP(){}},P={
mt:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.mN()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.c_(new P.hq(t),1)).observe(s,{childList:true})
return new P.hp(t,s,r)}else if(self.setImmediate!=null)return P.mO()
return P.mP()},
mu:function(a){++u.globalState.f.b
self.scheduleImmediate(H.c_(new P.hr(a),0))},
mv:function(a){++u.globalState.f.b
self.setImmediate(H.c_(new P.hs(a),0))},
mw:function(a){P.jh(C.y,a)},
mI:function(a,b){if(H.bi(a,{func:1,args:[P.aU,P.aU]})){b.toString
return a}else{b.toString
return a}},
my:function(a,b){var t,s,r
H.d(b.a<4)
H.d(!(a instanceof P.av))
H.d(b.a===0)
b.a=1
try{a.co(new P.hI(b),new P.hJ(b))}catch(r){t=H.O(r)
s=H.aH(r)
P.nd(new P.hK(b,t,s))}},
kz:function(a,b){var t,s,r,q
H.d(b.a<=1)
for(;t=a.a,s=t===2,s;){H.d(s)
a=a.c}s=b.a
if(t>=4){H.d(s<4)
r=b.c
b.c=null
q=b.ad(r)
H.d(b.a<4)
H.d(a.a>=4)
b.a=a.a
b.c=a.c
P.bQ(b,q)}else{q=b.c
H.d(s<=1)
b.a=2
b.c=a
a.bE(q)}},
bQ:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.iq(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bQ(t.a,b)}s=t.a
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
P.iq(null,null,p,o,s)
return}s=$.B
if(s==null?l!=null:s!==l){H.d(l!=null)
s=$.B
H.d(l==null?s!=null:l!==s)
j=$.B
$.B=l
i=j}else i=null
s=b.c
if(s===8)new P.hO(t,r,q,b).$0()
else if(p){if((s&1)!==0)new P.hN(r,b,m).$0()}else if((s&2)!==0)new P.hM(t,r,b).$0()
if(i!=null){H.d(!0)
$.B=i}s=r.b
if(!!J.u(s).$isex){if(s.a>=4){H.d(o.a<4)
h=o.c
o.c=null
b=o.ad(h)
H.d(o.a<4)
H.d(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.kz(s,o)
return}}g=b.b
H.d(g.a<4)
h=g.c
g.c=null
b=g.ad(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.d(!o)
g.a=4
g.c=p}else{H.d(!o)
g.a=8
g.c=p}t.a=g
s=g}},
mH:function(){var t,s
for(;t=$.bg,t!=null;){$.bY=null
s=t.b
$.bg=s
if(s==null)$.bX=null
t.a.$0()}},
mL:function(){$.jn=!0
try{P.mH()}finally{$.bY=null
$.jn=!1
if($.bg!=null)$.$get$jj().$1(P.kL())}},
kG:function(a){var t=new P.dw(a,null)
if($.bg==null){$.bX=t
$.bg=t
if(!$.jn)$.$get$jj().$1(P.kL())}else{$.bX.b=t
$.bX=t}},
mK:function(a){var t,s,r
t=$.bg
if(t==null){P.kG(a)
$.bY=$.bX
return}s=new P.dw(a,null)
r=$.bY
if(r==null){s.b=t
$.bY=s
$.bg=s}else{s.b=r.b
r.b=s
$.bY=s
if(s.b==null)$.bX=s}},
nd:function(a){var t=$.B
if(C.f===t){P.is(null,null,C.f,a)
return}t.toString
P.is(null,null,t,t.aS(a))},
mq:function(a,b){var t=$.B
if(t===C.f){t.toString
return P.jh(a,b)}return P.jh(a,t.aS(b))},
jh:function(a,b){var t=C.b.G(a.a,1000)
return H.mp(t<0?0:t,b)},
ji:function(a){var t,s
H.d(a!=null)
t=$.B
H.d(a==null?t!=null:a!==t)
s=$.B
$.B=a
return s},
iq:function(a,b,c,d,e){var t={}
t.a=d
P.mK(new P.ir(t,e))},
kE:function(a,b,c,d){var t,s
if($.B===c)return d.$0()
t=P.ji(c)
try{s=d.$0()
return s}finally{s=t
H.d(s!=null)
$.B=s}},
kF:function(a,b,c,d,e){var t,s
if($.B===c)return d.$1(e)
t=P.ji(c)
try{s=d.$1(e)
return s}finally{s=t
H.d(s!=null)
$.B=s}},
mJ:function(a,b,c,d,e,f){var t,s
if($.B===c)return d.$2(e,f)
t=P.ji(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.d(s!=null)
$.B=s}},
is:function(a,b,c,d){var t=C.f!==c
if(t)d=!(!t||!1)?c.aS(d):c.e1(d)
P.kG(d)},
hq:function hq(a){this.a=a},
hp:function hp(a,b,c){this.a=a
this.b=b
this.c=c},
hr:function hr(a){this.a=a},
hs:function hs(a){this.a=a},
hw:function hw(){},
ig:function ig(a,b){this.a=a
this.$ti=b},
dy:function dy(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
av:function av(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hH:function hH(a,b){this.a=a
this.b=b},
hL:function hL(a,b){this.a=a
this.b=b},
hI:function hI(a){this.a=a},
hJ:function hJ(a){this.a=a},
hK:function hK(a,b,c){this.a=a
this.b=b
this.c=c},
hO:function hO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hP:function hP(a){this.a=a},
hN:function hN(a,b,c){this.a=a
this.b=b
this.c=c},
hM:function hM(a,b,c){this.a=a
this.b=b
this.c=c},
dw:function dw(a,b){this.a=a
this.b=b},
fP:function fP(){},
fR:function fR(a){this.a=a},
fS:function fS(a,b){this.a=a
this.b=b},
fQ:function fQ(){},
b4:function b4(a,b){this.a=a
this.b=b},
io:function io(){},
ir:function ir(a,b){this.a=a
this.b=b},
i1:function i1(){},
i3:function i3(a,b){this.a=a
this.b=b},
i2:function i2(a,b){this.a=a
this.b=b},
i4:function i4(a,b){this.a=a
this.b=b},
k9:function(a,b){return new H.af(0,null,null,null,null,null,0,[a,b])},
J:function(){return new H.af(0,null,null,null,null,null,0,[null,null])},
aS:function(a){return H.mW(a,new H.af(0,null,null,null,null,null,0,[null,null]))},
bU:function(a,b){return new P.dz(0,null,null,null,null,null,0,[a,b])},
mC:function(){var t=Object.create(null)
H.d(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
m9:function(a,b,c){var t,s
if(P.jo(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$bZ()
C.a.l(s,a)
try{P.mG(a,t)}finally{H.d(C.a.gax(s)===a)
s.pop()}s=P.ki(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eH:function(a,b,c){var t,s,r
if(P.jo(a))return b+"..."+c
t=new P.bK(b)
s=$.$get$bZ()
C.a.l(s,a)
try{r=t
r.a=P.ki(r.ga2(),a,", ")}finally{H.d(C.a.gax(s)===a)
s.pop()}s=t
s.a=s.ga2()+c
s=t.ga2()
return s.charCodeAt(0)==0?s:s},
jo:function(a){var t,s
for(t=0;s=$.$get$bZ(),t<s.length;++t)if(a===s[t])return!0
return!1},
mG:function(a,b){var t,s,r,q,p,o,n,m,l,k
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
ag:function(a,b,c,d){return new P.hV(0,null,null,null,null,null,0,[d])},
je:function(a,b){var t,s
t=P.ag(null,null,null,b)
for(s=J.bl(a);s.p();)t.l(0,s.gq())
return t},
mc:function(a){var t,s,r
t={}
if(P.jo(a))return"{...}"
s=new P.bK("")
try{C.a.l($.$get$bZ(),a)
r=s
r.a=r.ga2()+"{"
t.a=!0
a.au(0,new P.eU(t,s))
t=s
t.a=t.ga2()+"}"}finally{t=$.$get$bZ()
H.d(C.a.gax(t)===a)
t.pop()}t=s.ga2()
return t.charCodeAt(0)==0?t:t},
jf:function(a,b){var t=new P.eR(null,0,0,0,[b])
t.da(a,b)
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
hV:function hV(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hW:function hW(a,b,c){this.a=a
this.b=b
this.c=c},
bT:function bT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hS:function hS(){},
d2:function d2(){},
w:function w(){},
eU:function eU(a,b){this.a=a
this.b=b},
eR:function eR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hX:function hX(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fF:function fF(){},
fE:function fE(){},
bG:function bG(){},
ki:function(a,b,c){var t=J.bl(b)
if(!t.p())return a
if(c.length===0){do a+=H.f(t.gq())
while(t.p())}else{a+=H.f(t.gq())
for(;t.p();)a=a+c+H.f(t.gq())}return a},
lT:function(a,b){return J.lc(a,b)},
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
ca:function(a){if(a>=10)return""+a
return"0"+a},
lX:function(a,b,c,d,e,f){return new P.az(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
j8:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ay(a)
if(typeof a==="string")return JSON.stringify(a)
return P.m_(a)},
m_:function(a){var t=J.u(a)
if(!!t.$isb5)return t.j(a)
return H.fs(a)},
jL:function(a){return new P.ad(!1,null,null,a)},
jM:function(a,b,c){return new P.ad(!0,a,b,c)},
lN:function(a){return new P.ad(!1,null,a,"Must not be null")},
ft:function(a,b,c){return new P.dj(null,null,!0,a,b,"Value not in range")},
aW:function(a,b,c,d,e){return new P.dj(b,c,!0,a,d,"Invalid value")},
kf:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.aW(a,0,c,"start",f))
if(a>b||b>c)throw H.e(P.aW(b,a,c,"end",f))
return b},
A:function(a,b,c,d,e){var t=e!=null?e:J.dK(b)
return new P.eD(b,t,!0,a,c,"Index out of range")},
cg:function(a){return new P.hG(a)},
ka:function(a,b,c){var t,s
t=H.C([],[c])
for(s=J.bl(a);s.p();)C.a.l(t,s.gq())
if(b)return t
t.fixed$length=Array
return t},
al:function(a){H.iP(H.f(a))},
ax:function ax(){},
G:function G(){},
b7:function b7(a,b){this.a=a
this.b=b},
K:function K(){},
az:function az(a){this.a=a},
e3:function e3(){},
e4:function e4(){},
b8:function b8(){},
c5:function c5(a){this.a=a},
dg:function dg(){},
ad:function ad(a,b,c,d){var _=this
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
eD:function eD(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
t:function t(a){this.a=a},
du:function du(a){this.a=a},
aD:function aD(a){this.a=a},
a0:function a0(a){this.a=a},
dn:function dn(){},
dW:function dW(a){this.a=a},
hG:function hG(a){this.a=a},
e6:function e6(a,b,c){this.a=a
this.b=b
this.$ti=c},
m:function m(){},
U:function U(){},
d_:function d_(){},
b:function b(){},
aC:function aC(){},
aU:function aU(){},
T:function T(){},
n:function n(){},
bJ:function bJ(){},
q:function q(){},
bK:function bK(a){this.a=a},
iw:function(a){var t,s,r,q,p
if(a==null)return
t=P.J()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.N)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
mT:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.ln(a,new P.iv(t))
return t},
k0:function(){var t=$.k_
if(t==null){t=J.j_(window.navigator.userAgent,"Opera",0)
$.k_=t}return t},
lW:function(){var t,s
t=$.jX
if(t!=null)return t
s=$.jY
if(s==null){s=J.j_(window.navigator.userAgent,"Firefox",0)
$.jY=s}if(s)t="-moz-"
else{s=$.jZ
if(s==null){s=!P.k0()&&J.j_(window.navigator.userAgent,"Trident/",0)
$.jZ=s}if(s)t="-ms-"
else t=P.k0()?"-o-":"-webkit-"}$.jX=t
return t},
iv:function iv(a){this.a=a},
hU:function hU(){},
i0:function i0(){},
H:function H(){},
dL:function dL(){},
aL:function aL(){},
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
eo:function eo(){},
es:function es(){},
eu:function eu(){},
ae:function ae(){},
aB:function aB(){},
eB:function eB(){},
ap:function ap(){},
eN:function eN(){},
eV:function eV(){},
eW:function eW(){},
aq:function aq(){},
fc:function fc(){},
fj:function fj(){},
fo:function fo(){},
fp:function fp(){},
fu:function fu(){},
fv:function fv(){},
bI:function bI(){},
fT:function fT(){},
F:function F(){},
fU:function fU(){},
fV:function fV(){},
dq:function dq(){},
fZ:function fZ(){},
bM:function bM(){},
ar:function ar(){},
h8:function h8(){},
hf:function hf(){},
hh:function hh(){},
hi:function hi(){},
bR:function bR(){},
i5:function i5(){},
i6:function i6(){},
i7:function i7(){},
co:function co(){},
cm:function cm(){},
ct:function ct(){},
cx:function cx(){},
cI:function cI(){},
cQ:function cQ(){},
cM:function cM(){},
cO:function cO(){},
dP:function dP(){},
fz:function fz(){},
fA:function fA(){},
ik:function ik(){},
fK:function fK(){},
cn:function cn(){},
cK:function cK(){}},W={
lY:function(a,b,c){var t,s
t=document.body
s=(t&&C.o).K(t,a,b,c)
s.toString
t=new H.dv(new W.R(s),new W.iu(),[W.p])
return t.ga1(t)},
lZ:function(a){return"wheel"},
bo:function(a){var t,s,r
t="element tag unavailable"
try{s=J.lr(a)
if(typeof s==="string")t=a.tagName}catch(r){H.O(r)}return t},
mx:function(a,b){return document.createElement(a)},
b3:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kC:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ai:function(a,b,c,d,e){var t=c==null?null:W.kH(new W.hF(c))
t=new W.hE(0,a,b,t,!1,[e])
t.dq(a,b,c,!1,e)
return t},
kA:function(a){var t,s
t=document.createElement("a")
s=new W.i8(t,window.location)
s=new W.bS(s)
s.dr(a)
return s},
mA:function(a,b,c,d){return!0},
mB:function(a,b,c,d){var t,s,r,q,p
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
kD:function(){var t=P.q
t=new W.ih(P.je(C.t,t),P.ag(null,null,null,t),P.ag(null,null,null,t),P.ag(null,null,null,t),null)
t.dt(null,new H.by(C.t,new W.ii(),[H.aI(C.t,0),null]),["TEMPLATE"],null)
return t},
kH:function(a){var t=$.B
if(t===C.f)return a
return t.e2(a)},
k:function k(){},
dM:function dM(){},
dN:function dN(){},
a_:function a_(){},
dQ:function dQ(){},
c6:function c6(){},
aM:function aM(){},
c7:function c7(){},
c8:function c8(){},
c9:function c9(){},
aN:function aN(){},
dU:function dU(){},
y:function y(){},
b6:function b6(){},
dV:function dV(){},
dX:function dX(){},
dY:function dY(){},
cb:function cb(){},
bn:function bn(){},
cc:function cc(){},
dZ:function dZ(){},
cd:function cd(){},
e_:function e_(){},
ce:function ce(){},
cf:function cf(){},
e0:function e0(){},
e1:function e1(){},
a1:function a1(){},
iu:function iu(){},
i:function i(){},
h:function h(){},
a2:function a2(){},
eq:function eq(){},
er:function er(){},
ev:function ev(){},
a3:function a3(){},
cj:function cj(){},
ez:function ez(){},
bv:function bv(){},
ck:function ck(){},
eA:function eA(){},
bw:function bw(){},
eE:function eE(){},
aR:function aR(){},
eS:function eS(){},
eY:function eY(){},
eZ:function eZ(){},
bz:function bz(){},
a4:function a4(){},
f_:function f_(){},
L:function L(){},
f9:function f9(){},
R:function R(a){this.a=a},
p:function p(){},
dc:function dc(){},
bF:function bF(){},
fi:function fi(){},
fl:function fl(){},
a5:function a5(){},
fn:function fn(){},
fq:function fq(){},
fr:function fr(){},
di:function di(){},
fB:function fB(){},
dl:function dl(){},
fD:function fD(){},
fG:function fG(){},
a6:function a6(){},
fH:function fH(){},
a7:function a7(){},
fJ:function fJ(){},
a8:function a8(){},
fO:function fO(){},
V:function V(){},
ah:function ah(){},
dp:function dp(){},
fW:function fW(){},
fX:function fX(){},
bL:function bL(){},
a9:function a9(){},
W:function W(){},
h_:function h_(){},
h0:function h0(){},
h2:function h2(){},
aa:function aa(){},
aX:function aX(){},
h6:function h6(){},
h7:function h7(){},
be:function be(){},
h9:function h9(){},
ds:function ds(){},
aF:function aF(){},
he:function he(){},
hg:function hg(){},
hj:function hj(){},
hk:function hk(){},
aZ:function aZ(){},
bP:function bP(){},
hm:function hm(a){this.a=a},
hn:function hn(){},
b_:function b_(){},
hv:function hv(){},
dx:function dx(){},
hx:function hx(){},
hy:function hy(){},
hz:function hz(){},
hQ:function hQ(){},
hR:function hR(){},
dA:function dA(){},
i9:function i9(){},
ic:function ic(){},
id:function id(){},
il:function il(){},
im:function im(){},
ht:function ht(){},
hA:function hA(a){this.a=a},
hD:function hD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jk:function jk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hE:function hE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
hF:function hF(a){this.a=a},
bS:function bS(a){this.a=a},
z:function z(){},
de:function de(a){this.a=a},
fb:function fb(a){this.a=a},
fa:function fa(a,b,c){this.a=a
this.b=b
this.c=c},
bV:function bV(){},
ia:function ia(){},
ib:function ib(){},
ih:function ih(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
ii:function ii(){},
ie:function ie(){},
ci:function ci(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
dd:function dd(){},
i8:function i8(a,b){this.a=a
this.b=b},
dC:function dC(a){this.a=a},
ij:function ij(a){this.a=a},
bp:function bp(){},
bq:function bq(){},
br:function br(){},
bs:function bs(){},
bt:function bt(){},
bu:function bu(){},
cl:function cl(){},
cF:function cF(){},
cr:function cr(){},
cy:function cy(){},
cz:function cz(){},
cA:function cA(){},
cB:function cB(){},
cC:function cC(){},
cD:function cD(){},
cE:function cE(){},
cp:function cp(){},
cq:function cq(){},
cs:function cs(){},
cu:function cu(){},
cv:function cv(){},
cw:function cw(){},
cG:function cG(){},
cH:function cH(){},
cS:function cS(){},
cT:function cT(){},
cR:function cR(){},
cW:function cW(){},
cX:function cX(){},
cY:function cY(){},
cZ:function cZ(){},
cJ:function cJ(){},
cL:function cL(){},
cN:function cN(){},
cP:function cP(){},
cU:function cU(){},
cV:function cV(){}},B={
ne:function(a){var t,s
t=document
s=W.aR
W.ai(t,"keydown",new B.iR(),!1,s)
W.ai(t,"keyup",new B.iS(),!1,s)
if(!$.nf)W.ai(t,"mousemove",new B.iT(),!1,W.L)
s=W.L
W.ai(t,"mousedown",new B.iU(),!1,s)
W.ai(t,"mouseup",new B.iV(),!1,s)},
md:function(a,b,c,d){var t,s,r,q
t=new Float32Array(H.r(3))
s=$.$get$ix()
r=$.$get$c0()
q=new T.P(new Float32Array(H.r(16)))
q.R()
q=new B.fd(a,b,c,0,new T.v(t),-0.02,s,r,q,new T.v(new Float32Array(H.r(3))),new T.v(new Float32Array(H.r(3))),new T.v(new Float32Array(H.r(3))),new T.v(new Float32Array(H.r(3))),"camera:orbit",!1,!0)
q.dd(a,b,c,d)
return q},
iR:function iR(){},
iS:function iS(){},
iT:function iT(){},
iU:function iU(){},
iV:function iV(){},
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
ms:function(a){var t,s,r
t=a.split("\n")
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.f(t[s])}return C.a.a4(t,"\n")},
ky:function(a,b,c){var t,s,r,q
t=J.j(a)
s=t.c0(a,b)
t.bc(a,s,c)
t.bX(a,s)
r=t.b8(a,s,35713)
if(r!=null&&!r){q=t.b7(a,s)
P.al("E:Compilation failed:")
P.al("E:"+G.ms(c))
P.al("E:Failure:")
P.al(C.i.a0("E:",q))
throw H.e(q)}return s},
kb:function(a,b){var t=new G.eX(P.J(),a,!1,!0)
t.dc(a,b)
return t},
k4:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.j2(a[s])
b[t+1]=J.j3(a[s])
b[t+2]=J.jC(a[s])}return b},
m1:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.j2(a[s])
b[t+1]=J.j3(a[s])}return b},
m2:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.j2(a[s])
b[t+1]=J.j3(a[s])
b[t+2]=J.jC(a[s])
b[t+3]=J.ls(a[s])}return b},
m0:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.bj(a[s],0)
b[t+1]=J.bj(a[s],1)
b[t+2]=J.bj(a[s],2)
b[t+3]=J.bj(a[s],3)}return b},
mz:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
for(t=a.e,s=t.gC(t),s=s.gw(s),r=b.x,q=[[P.b,P.m]],p=[P.K],o=[T.au],n=[T.v],m=[T.ab];s.p();){l=s.gq()
if(!r.D(0,l)){k="Dropping unnecessary attribute: "+H.f(l)
if($.kQ>0)H.iP("I: "+k)
continue}j=t.h(0,l)
switch($.$get$X().h(0,l).a){case"vec2":b.a9(l,G.m1(H.dG(j,"$isb",m,"$asb"),null),2)
break
case"vec3":b.a9(l,G.k4(H.dG(j,"$isb",n,"$asb"),null),3)
break
case"vec4":b.a9(l,G.m2(H.dG(j,"$isb",o,"$asb"),null),4)
break
case"float":b.a9(l,new Float32Array(H.ip(H.dG(j,"$isb",p,"$asb"))),1)
break
case"uvec4":b.a9(l,G.m0(H.dG(j,"$isb",q,"$asb"),null),4)
break
default:if(H.aw(!1))H.aG("unknown type for "+H.f(l)+" ["+J.lq(j[0]).j(0)+"] ["+new H.aE(H.iB(j),null).j(0)+"] "+H.f(j))}}},
kg:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.ag(null,null,null,P.q)
s=c.b
r=d.b
q=c.f
p=J.ld(b.a)
o=G.ky(b.a,35633,s)
J.jz(b.a,p,o)
n=G.ky(b.a,35632,r)
J.jz(b.a,p,n)
if(q.length>0)J.lG(b.a,p,q,35980)
J.lx(b.a,p)
if(!J.lw(b.a,p,35714))H.E(J.lv(b.a,p))
t=new G.fy(b,c,d,p,P.je(c.c,null),P.J(),P.J(),t,null,a,!1,!0)
t.df(a,b,c,d)
return t},
f0:function f0(){},
dt:function dt(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dR:function dR(){},
dT:function dT(a,b){this.a=a
this.b=b},
ew:function ew(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
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
dr:function dr(a,b,c){this.a=a
this.b=b
this.c=c},
bO:function bO(a,b,c){this.a=a
this.b=b
this.c=c},
eX:function eX(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
d5:function d5(a,b,c,d,e,f,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
fk:function fk(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
e2:function e2(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fy:function fy(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
bd:function bd(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fI:function fI(){},
h1:function h1(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bN:function bN(){},
eC:function eC(a,b,c,d,e,f){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f}},R={
mr:function(a,b,c){var t,s,r,q
t="stars_"+b
s=b*3
r=new Float32Array(H.r(s))
for(q=0;q<s;++q)r[q]=($.$get$kx().eE()-0.5)*c
s=a.d
s=new G.d5(s,J.jB(s.a),0,P.J(),a.e.x,null,0,-1,null,null,P.J(),"meshdata:"+t,!1,!0)
s.bi(r)
return s},
dk:function dk(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
_.c=a5},
fM:function fM(){},
fN:function fN(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},A={
kO:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=b.dx
t.M(c)
s=b.d
t.cd(0,s)
r=b.cx
J.ay(b)
q=C.a.gax(e)
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
p.e9(new T.aT(o))
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
a.d7(r,e,d)
e.pop()
for(s=b.cy,r=s.length,l=0;l<s.length;s.length===r||(0,H.N)(s),++l)A.kO(a,s[l],t,d,e)},
db:function db(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
bH:function bH(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.a=d
_.b=e
_.c=f},
fx:function fx(){},
dE:function(a){var t,s
t=C.Y.ep(a,0,new A.iC())
s=536870911&t+(C.b.cF(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
iC:function iC(){}},T={aT:function aT(a){this.a=a},P:function P(a){this.a=a},ab:function ab(a){this.a=a},v:function v(a){this.a=a},au:function au(a){this.a=a}},Y={
n8:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
t={}
s=document
r=new R.fN(0,0,null,null,null,null)
r.di(C.r.cJ(s,"stats"),"blue","gray")
q=C.r.eG(s,"#webgl-canvas")
p=new G.dT(null,q)
o=(q&&C.w).b3(q,"webgl2",P.aS(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!0,"failIfMajorPerformanceCaveat",!1]))
p.a=o
if(o==null)H.E(P.cg('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
n="ChronosGL Config: "+J.ay(J.lt(o))
if($.kQ>0)P.al("I: "+n)
J.lb(o,0,0,0,1)
J.dJ(o,2929)
m=B.md(25,10,0,q)
o=new T.P(new Float32Array(H.r(16)))
o.R()
n=new T.P(new Float32Array(H.r(16)))
n.R()
l=new G.fk(m,50,1,0.1,1000,o,n,new T.P(new Float32Array(H.r(16))),P.J(),"perspective",!1,!0)
l.bo()
n=H.C([],[A.bH])
k=new R.dk(q,l,null,p,n,17664,0,0,0,0,"main",!1,!0)
k.de("main",p,null)
k.cg(null)
W.ai(window,"resize",k.geK(),!1,W.i)
o=k.r|=256
k.r=o&4294950911
o=G.kg("blur",p,$.$get$kM(),$.$get$kN())
j=[]
H.d(!0)
C.a.l(n,new A.bH(o,[l],j,"blur",!1,!0))
i=G.kb("blur",$.$get$jO())
h=new Float32Array(H.r(4))
h[3]=0.04
h[2]=0
h[1]=0
h[0]=0
i.Y("uColorAlpha",new T.au(h))
h=new T.v(new Float32Array(H.r(3)))
h.S(-1,-1,0)
g=new T.v(new Float32Array(H.r(3)))
g.S(1,-1,0)
f=new T.v(new Float32Array(H.r(3)))
f.S(1,1,0)
e=new T.v(new Float32Array(H.r(3)))
e.S(-1,1,0)
d=new Float32Array(H.r(2))
d[0]=0
d[1]=0
c=new Float32Array(H.r(2))
c[0]=1
c[1]=0
b=new Float32Array(H.r(2))
b[0]=1
b[1]=1
a=new Float32Array(H.r(2))
a[0]=0
a[1]=1
a0=new T.v(new Float32Array(H.r(3)))
a0.S(0,0,1)
a1=[]
a2=new G.ey(!1,[],[],a1,P.J())
a2.bk("aTexUV")
a2.d4([h,g,f,e])
a2.d2("aTexUV",[new T.ab(d),new T.ab(c),new T.ab(b),new T.ab(a)])
a2.bk("aNormal")
a2.d3("aNormal",[a0,a0,a0,a0])
h=o.d
g=J.jB(h.a)
a3=new G.d5(h,g,4,P.J(),o.e.x,null,0,-1,null,null,P.J(),"meshdata:quad",!1,!0)
a3.bi(G.k4(a1,null))
o=a2.d8()
a3.y=J.j0(h.a)
H.d(a3.ch!=null)
f=a3.ch.length
if(f<768){a3.saK(new Uint8Array(H.ip(o)))
a3.Q=5121}else if(f<196608){a3.saK(new Uint16Array(H.ip(o)))
a3.Q=5123}else{a3.saK(new Uint32Array(H.ip(o)))
a3.Q=5125}J.dI(h.a,g)
o=a3.y
g=a3.cx
f=J.u(g)
H.d(!!f.$isku||!!f.$iskv||!!f.$iskw)
J.dH(h.a,34963,o)
J.jA(h.a,34963,g,35048)
G.mz(a2,a3)
o=new Float32Array(H.r(9))
h=new T.P(new Float32Array(H.r(16)))
h.R()
g=new T.P(new Float32Array(H.r(16)))
g.R()
f=new Float32Array(H.r(3))
e=new Float32Array(H.r(3))
d=new Float32Array(H.r(3))
c=new Float32Array(H.r(3))
H.d(!0)
C.a.l(j,new A.db(i,a3,[],new T.aT(o),h,g,new T.v(f),new T.v(e),new T.v(d),new T.v(c),"",!1,!0))
c=G.kg("stars",p,$.$get$kZ(),$.$get$kY())
d=[]
o=c.d
a4=G.kb("stars",$.$get$jN())
a5=s.createElement("canvas")
a5.width=64
a5.height=64
a6=C.w.cI(a5,"2d")
a7=(a6&&C.p).c_(a6,32,32,1,32,32,22);(a7&&C.m).at(a7,0,"gray")
C.m.at(a7,1,"black")
a6.fillStyle=a7
C.p.en(a6,0,0,64,64)
a7=C.p.c_(a6,32,32,1,32,32,6);(a7&&C.m).at(a7,0,"white")
C.m.at(a7,1,"gray")
a6.globalAlpha=0.9
a6.fillStyle=a7
a6.arc(32,32,4,0,6.283185307179586,!1)
a6.fill("nonzero")
s=new G.h1(!1,!1,!1,!0,1,9729,9729)
j=J.le(o.a)
h=new G.eC(a5,"Utils::Particles",j,3553,o,s)
J.c4(o.a,3553,j)
J.lz(o.a,37440,1)
h.dh(a5)
s.d9(o,3553)
H.d(J.lu(o.a)===0)
J.c4(o.a,3553,null)
a4.Y("uTexture",h)
a4.Y("uPointSize",1000)
a3=R.mr(c,2000,100)
s=new Float32Array(H.r(9))
o=new T.P(new Float32Array(H.r(16)))
o.R()
j=new T.P(new Float32Array(H.r(16)))
j.R()
h=new Float32Array(H.r(3))
g=new Float32Array(H.r(3))
f=new Float32Array(H.r(3))
e=new Float32Array(H.r(3))
H.d(!0)
C.a.l(d,new A.db(a4,a3,[],new T.aT(s),o,j,new T.v(h),new T.v(g),new T.v(f),new T.v(e),a3.a,!1,!0))
H.d(!0)
C.a.l(n,new A.bH(c,[l],d,"stars",!1,!0))
t.a=0
new Y.iN(t,r,m,k).$1(0)},
iN:function iN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}}
var v=[C,H,J,P,W,B,G,R,A,T,Y]
setFunctionNamesIfNecessary(v)
var $={}
H.jb.prototype={}
J.a.prototype={
v:function(a,b){return a===b},
gu:function(a){return H.aV(a)},
j:function(a){return H.fs(a)},
gA:function(a){return new H.aE(H.iB(a),null)}}
J.eJ.prototype={
j:function(a){return String(a)},
gu:function(a){return a?519018:218159},
gA:function(a){return C.as},
$isax:1}
J.eK.prototype={
v:function(a,b){return null==b},
j:function(a){return"null"},
gu:function(a){return 0},
gA:function(a){return C.am}}
J.bx.prototype={
gu:function(a){return 0},
gA:function(a){return C.al},
j:function(a){return String(a)},
$isk8:1}
J.fm.prototype={}
J.aY.prototype={}
J.aQ.prototype={
j:function(a){var t=a[$.$get$jW()]
return t==null?this.d_(a):J.ay(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isj9:1}
J.aO.prototype={
aU:function(a,b){if(!!a.immutable$list)throw H.e(new P.t(b))},
aT:function(a,b){if(!!a.fixed$length)throw H.e(new P.t(b))},
l:function(a,b){this.aT(a,"add")
a.push(b)},
J:function(a,b){var t,s,r,q,p
t=a.length
this.aT(a,"addAll")
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.N)(b),++r,t=p){q=b[r]
p=t+1
H.d(t===a.length||H.E(new P.a0(a)))
a.push(q)}},
cc:function(a,b){return new H.by(a,b,[H.aI(a,0),null])},
a4:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.f(a[s])
return t.join(b)},
t:function(a,b){return this.h(a,b)},
geo:function(a){if(a.length>0)return a[0]
throw H.e(H.eI())},
gax:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.e(H.eI())},
bb:function(a,b,c,d,e){var t,s
this.aU(a,"setRange")
P.kf(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.E(P.aW(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.e(H.ma())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=d[e+s]
else for(s=0;s<t;++s)a[b+s]=d[e+s]},
bN:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.e(new P.a0(a))}return!1},
cV:function(a,b){this.aU(a,"sort")
H.dm(a,0,a.length-1,P.mU())},
bd:function(a){return this.cV(a,null)},
B:function(a,b){var t
for(t=0;t<a.length;++t)if(J.D(a[t],b))return!0
return!1},
j:function(a){return P.eH(a,"[","]")},
gw:function(a){return new J.dO(a,a.length,0,null,[H.aI(a,0)])},
gu:function(a){return H.aV(a)},
gk:function(a){return a.length},
sk:function(a,b){this.aT(a,"set length")
if(b<0)throw H.e(P.aW(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.M(a,b))
if(b>=a.length||b<0)throw H.e(H.M(a,b))
return a[b]},
i:function(a,b,c){this.aU(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.M(a,b))
if(b>=a.length||b<0)throw H.e(H.M(a,b))
a[b]=c},
$isl:1,
$asl:function(){},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
J.ja.prototype={}
J.dO.prototype={
gq:function(){return this.d},
p:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.e(H.N(t))
r=this.c
if(r>=s){this.sbp(null)
return!1}this.sbp(t[r]);++this.c
return!0},
sbp:function(a){this.d=a}}
J.b9.prototype={
O:function(a,b){var t
if(typeof b!=="number")throw H.e(H.S(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gav(b)
if(this.gav(a)===t)return 0
if(this.gav(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gav:function(a){return a===0?1/a<0:a<0},
e4:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.e(new P.t(""+a+".ceil()"))},
a5:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(new P.t(""+a+".round()"))},
e5:function(a,b,c){if(this.O(b,c)>0)throw H.e(H.S(b))
if(this.O(a,b)<0)return b
if(this.O(a,c)>0)return c
return a},
eS:function(a,b){var t
if(b>20)throw H.e(P.aW(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gav(a))return"-"+t
return t},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu:function(a){return a&0x1FFFFFFF},
a0:function(a,b){if(typeof b!=="number")throw H.e(H.S(b))
return a+b},
a8:function(a,b){if(typeof b!=="number")throw H.e(H.S(b))
return a-b},
cG:function(a,b){if(typeof b!=="number")throw H.e(H.S(b))
return a/b},
E:function(a,b){if(typeof b!=="number")throw H.e(H.S(b))
return a*b},
aD:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bJ(a,b)},
G:function(a,b){return(a|0)===a?a/b|0:this.bJ(a,b)},
bJ:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.e(new P.t("Result of truncating division is "+H.f(t)+": "+H.f(a)+" ~/ "+b))},
aO:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
cF:function(a,b){if(typeof b!=="number")throw H.e(H.S(b))
return(a&b)>>>0},
d1:function(a,b){if(typeof b!=="number")throw H.e(H.S(b))
return(a^b)>>>0},
aB:function(a,b){if(typeof b!=="number")throw H.e(H.S(b))
return a<b},
am:function(a,b){if(typeof b!=="number")throw H.e(H.S(b))
return a>b},
cH:function(a,b){if(typeof b!=="number")throw H.e(H.S(b))
return a>=b},
gA:function(a){return C.av},
$isT:1}
J.d1.prototype={
gA:function(a){return C.au},
$isK:1,
$ism:1,
$isT:1}
J.d0.prototype={
gA:function(a){return C.at},
$isK:1,
$isT:1}
J.aP.prototype={
aF:function(a,b){if(b>=a.length)throw H.e(H.M(a,b))
return a.charCodeAt(b)},
a0:function(a,b){if(typeof b!=="string")throw H.e(P.jM(b,null,null))
return a+b},
cW:function(a,b,c){var t
if(c>a.length)throw H.e(P.aW(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
be:function(a,b){return this.cW(a,b,0)},
bg:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.ft(b,null,null))
if(b>c)throw H.e(P.ft(b,null,null))
if(c>a.length)throw H.e(P.ft(c,null,null))
return a.substring(b,c)},
cX:function(a,b){return this.bg(a,b,null)},
eR:function(a){return a.toLowerCase()},
e7:function(a,b,c){if(c>a.length)throw H.e(P.aW(c,0,a.length,null,null))
return H.ng(a,b,c)},
O:function(a,b){var t
if(typeof b!=="string")throw H.e(H.S(b))
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
gA:function(a){return C.an},
gk:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.e(H.M(a,b))
return a[b]},
$isl:1,
$asl:function(){},
$isq:1}
H.c.prototype={$asc:null}
H.ba.prototype={
gw:function(a){return new H.d3(this,this.gk(this),0,null,[H.ak(this,"ba",0)])},
az:function(a,b){return this.cZ(0,b)},
eQ:function(a,b){var t,s
t=H.C([],[H.ak(this,"ba",0)])
C.a.sk(t,this.gk(this))
for(s=0;s<this.gk(this);++s)t[s]=this.t(0,s)
return t},
eP:function(a){return this.eQ(a,!0)}}
H.d3.prototype={
gq:function(){return this.d},
p:function(){var t,s,r,q
t=this.a
s=J.ac(t)
r=s.gk(t)
if(this.b!==r)throw H.e(new P.a0(t))
q=this.c
if(q>=r){this.sab(null)
return!1}this.sab(s.t(t,q));++this.c
return!0},
sab:function(a){this.d=a}}
H.d4.prototype={
gw:function(a){return new H.eT(null,J.bl(this.a),this.b,this.$ti)},
gk:function(a){return J.dK(this.a)},
$asU:function(a,b){return[b]}}
H.e5.prototype={$isc:1,
$asc:function(a,b){return[b]}}
H.eT.prototype={
p:function(){var t=this.b
if(t.p()){this.sab(this.c.$1(t.gq()))
return!0}this.sab(null)
return!1},
gq:function(){return this.a},
sab:function(a){this.a=a},
$asd_:function(a,b){return[b]}}
H.by.prototype={
gk:function(a){return J.dK(this.a)},
t:function(a,b){return this.b.$1(J.lk(this.a,b))},
$asc:function(a,b){return[b]},
$asba:function(a,b){return[b]},
$asU:function(a,b){return[b]}}
H.dv.prototype={
gw:function(a){return new H.hl(J.bl(this.a),this.b,this.$ti)}}
H.hl.prototype={
p:function(){var t,s
for(t=this.a,s=this.b;t.p();)if(s.$1(t.gq()))return!0
return!1},
gq:function(){return this.a.gq()}}
H.ch.prototype={}
H.iW.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.iX.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.hZ.prototype={
sez:function(a){this.z=a},
seC:function(a){this.ch=a}}
H.b1.prototype={
bM:function(a,b){if(!this.f.v(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.aR()},
eJ:function(a){var t,s,r,q,p
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
if(q===r.c)r.bC();++r.d}this.y=!1}this.aR()},
dW:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.u(a),s=0;r=this.ch,s<r.length;s+=2)if(t.v(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
eI:function(a){var t,s,r
if(this.ch==null)return
for(t=J.u(a),s=0;r=this.ch,s<r.length;s+=2)if(t.v(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.E(new P.t("removeRange"))
P.kf(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
cS:function(a,b){if(!this.r.v(0,a))return
this.db=b},
es:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.F(0,c)
return}H.d(b===1)
t=this.cx
if(t==null){t=P.jf(null,null)
this.cx=t}t.T(0,new H.hT(a,c))},
er:function(a,b){var t
if(!this.r.v(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.aw()
return}H.d(b===1)
t=this.cx
if(t==null){t=P.jf(null,null)
this.cx=t}t.T(0,this.geA())},
eu:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.al(a)
if(b!=null)P.al(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.ay(a)
s[1]=b==null?null:b.j(0)
for(r=new P.bT(t,t.r,null,null,[null]),r.c=t.e;r.p();)r.d.F(0,s)},
af:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.O(o)
p=H.aH(o)
this.eu(q,p)
if(this.db){this.aw()
if(this===u.globalState.e)throw o}}finally{this.cy=H.mQ(r)
u.globalState.d=H.js(t,"$isb1")
if(t!=null)$=t.gey()
if(this.cx!=null)for(;n=this.cx,!n.gai(n);)this.cx.cf().$0()}return s},
cb:function(a){return this.b.h(0,a)},
bt:function(a,b){var t=this.b
if(t.D(0,a))throw H.e(P.cg("Registry: ports must be registered only once."))
t.i(0,a,b)},
aR:function(){var t=this.b
if(t.gk(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.aw()},
aw:function(){var t,s,r
t=this.cx
if(t!=null)t.V(0)
for(t=this.b,s=t.gcC(t),s=s.gw(s);s.p();)s.gq().dw()
t.V(0)
this.c.V(0)
u.globalState.z.aj(0,this.a)
this.dx.V(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].F(0,t[r+1])
this.ch=null}},
gey:function(){return this.d},
ge8:function(){return this.e}}
H.hT.prototype={
$0:function(){this.a.F(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.hB.prototype={
ef:function(){var t=this.a
if(t.b===t.c)return
return t.cf()},
cj:function(){var t,s,r
t=this.ef()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.D(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gai(s)}else s=!1
else s=!1
else s=!1
if(s)H.E(P.cg("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gai(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aS(["command","close"])
r=new H.aj(!0,new P.dz(0,null,null,null,null,null,0,[null,P.m])).H(r)
s.toString
self.postMessage(r)}return!1}t.eF()
return!0},
bH:function(){if(self.window!=null)new H.hC(this).$0()
else for(;this.cj(););},
ak:function(){var t,s,r,q,p
if(!u.globalState.x)this.bH()
else try{this.bH()}catch(r){t=H.O(r)
s=H.aH(r)
q=u.globalState.Q
p=P.aS(["command","error","msg",H.f(t)+"\n"+H.f(s)])
p=new H.aj(!0,P.bU(null,P.m)).H(p)
q.toString
self.postMessage(p)}}}
H.hC.prototype={
$0:function(){if(!this.a.cj())return
P.mq(C.y,this)},
$S:function(){return{func:1,v:true}}}
H.b2.prototype={
eF:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.af(this.b)}}
H.hY.prototype={}
H.eF.prototype={
$0:function(){H.m6(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.eG.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(!this.d)this.a.$1(this.c)
else{s=this.a
if(H.bi(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.bi(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.aR()},
$S:function(){return{func:1,v:true}}}
H.hu.prototype={}
H.bf.prototype={
F:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.mE(b)
if(t.ge8()===s){s=J.ac(r)
switch(s.h(r,0)){case"pause":t.bM(s.h(r,1),s.h(r,2))
break
case"resume":t.eJ(s.h(r,1))
break
case"add-ondone":t.dW(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.eI(s.h(r,1))
break
case"set-errors-fatal":t.cS(s.h(r,1),s.h(r,2))
break
case"ping":t.es(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.er(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.aj(0,s)
break}return}u.globalState.f.a.T(0,new H.b2(t,new H.i_(this,r),"receive"))},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bf){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gu:function(a){return this.b.a}}
H.i_.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.du(0,this.b)},
$S:function(){return{func:1}}}
H.bW.prototype={
F:function(a,b){var t,s,r
t=P.aS(["command","message","port",this,"msg",b])
s=new H.aj(!0,P.bU(null,P.m)).H(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bW){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gu:function(a){return C.b.d1((this.b<<16^this.a<<8)>>>0,this.c)}}
H.bc.prototype={
dw:function(){this.c=!0
this.b=null},
du:function(a,b){if(this.c)return
this.b.$1(b)},
$isml:1}
H.h3.prototype={
dj:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.T(0,new H.b2(s,new H.h4(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.c_(new H.h5(this,b),0),a)}else{H.d(a>0)
throw H.e(new P.t("Timer greater than 0."))}}}
H.h4.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.h5.prototype={
$0:function(){this.a.c=null
H.iM()
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.ao.prototype={
gu:function(a){var t=this.a
t=C.b.aO(t,0)^C.b.G(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
v:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.ao){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.aj.prototype={
H:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gk(t))
t=J.u(a)
if(!!t.$isbA)return["buffer",a]
if(!!t.$isbb)return["typed",a]
if(!!t.$isl)return this.cO(a)
if(!!t.$ism3){r=this.gcL()
q=t.gC(a)
q=H.jg(q,r,H.ak(q,"U",0),null)
q=P.ka(q,!0,H.ak(q,"U",0))
t=t.gcC(a)
t=H.jg(t,r,H.ak(t,"U",0),null)
return["map",q,P.ka(t,!0,H.ak(t,"U",0))]}if(!!t.$isk8)return this.cP(a)
if(!!t.$isa)this.cA(a)
if(!!t.$isml)this.al(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isbf)return this.cQ(a)
if(!!t.$isbW)return this.cR(a)
if(!!t.$isb5){p=a.$static_name
if(p==null)this.al(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isao)return["capability",a.a]
if(!(a instanceof P.n))this.cA(a)
return["dart",u.classIdExtractor(a),this.cN(u.classFieldsExtractor(a))]},
al:function(a,b){throw H.e(new P.t((b==null?"Can't transmit:":b)+" "+H.f(a)))},
cA:function(a){return this.al(a,null)},
cO:function(a){var t
H.d(typeof a!=="string")
t=this.cM(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.al(a,"Can't serialize indexable: ")},
cM:function(a){var t,s
t=[]
C.a.sk(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.H(a[s])
return t},
cN:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.H(a[t]))
return a},
cP:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.al(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sk(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.H(a[t[r]])
return["js-object",t,s]},
cR:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cQ:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.b0.prototype={
W:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.e(P.jL("Bad serialized message: "+H.f(a)))
switch(C.a.geo(a)){case"ref":H.d(J.D(a[0],"ref"))
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
s=H.C(this.ae(t),[null])
s.fixed$length=Array
return s
case"extendable":H.d(J.D(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.C(this.ae(t),[null])
case"mutable":H.d(J.D(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.ae(t)
case"const":H.d(J.D(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
s=H.C(this.ae(t),[null])
s.fixed$length=Array
return s
case"map":return this.ei(a)
case"sendport":return this.ej(a)
case"raw sendport":H.d(J.D(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.eh(a)
case"function":H.d(J.D(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.d(J.D(a[0],"capability"))
return new H.ao(a[1])
case"dart":H.d(J.D(a[0],"dart"))
r=a[1]
q=a[2]
p=u.instanceFromClassId(r)
C.a.l(this.b,p)
this.ae(q)
return u.initializeEmptyInstance(r,p,q)
default:throw H.e("couldn't deserialize: "+H.f(a))}},
ae:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.W(a[t]))
return a},
ei:function(a){var t,s,r,q,p
H.d(J.D(a[0],"map"))
t=a[1]
s=a[2]
r=P.J()
C.a.l(this.b,r)
t=J.ly(t,this.geg()).eP(0)
for(q=J.ac(s),p=0;p<t.length;++p)r.i(0,t[p],this.W(q.h(s,p)))
return r},
ej:function(a){var t,s,r,q,p,o,n
H.d(J.D(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.cb(r)
if(o==null)return
n=new H.bf(o,s)}else n=new H.bW(t,r,s)
C.a.l(this.b,n)
return n},
eh:function(a){var t,s,r,q,p,o
H.d(J.D(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.ac(t),p=J.ac(s),o=0;o<q.gk(t);++o)r[q.h(t,o)]=this.W(p.h(s,o))
return r}}
H.fw.prototype={}
H.ha.prototype={
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
H.df.prototype={
j:function(a){var t=this.b
if(t==null)return"NullError: "+H.f(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.eM.prototype={
j:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.f(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.f(this.a)+")"}}
H.hd.prototype={
j:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.iY.prototype={
$1:function(a){if(!!J.u(a).$isb8)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.dB.prototype={
j:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.iH.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.iI.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.iJ.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.iK.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.iL.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.b5.prototype={
j:function(a){return"Closure '"+H.dh(this).trim()+"'"},
$isj9:1,
geV:function(){return this},
$D:null}
H.fY.prototype={}
H.fL.prototype={
j:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bm.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bm))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gu:function(a){var t,s
t=this.c
if(t==null)s=H.aV(this.a)
else s=typeof t!=="object"?J.an(t):H.aV(t)
return(s^H.aV(this.b))>>>0},
j:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.f(this.d)+"' of "+H.fs(t)}}
H.hc.prototype={
j:function(a){return this.a}}
H.dS.prototype={
j:function(a){return this.a}}
H.fC.prototype={
j:function(a){return"RuntimeError: "+H.f(this.a)}}
H.ho.prototype={
j:function(a){return C.i.a0("Assertion failed: ",P.j8(this.a))}}
H.aE.prototype={
j:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gu:function(a){return J.an(this.a)},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.aE){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.af.prototype={
gk:function(a){return this.a},
gai:function(a){return this.a===0},
gC:function(a){return new H.eP(this,[H.aI(this,0)])},
gcC:function(a){return H.jg(this.gC(this),new H.eL(this),H.aI(this,0),H.aI(this,1))},
D:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bz(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bz(s,b)}else return this.ev(b)},
ev:function(a){var t=this.d
if(t==null)return!1
return this.ah(this.ar(t,this.ag(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.ac(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.ac(r,b)
return s==null?null:s.b}else return this.ew(b)},
ew:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.ar(t,this.ag(a))
r=this.ah(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aL()
this.b=t}this.br(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aL()
this.c=s}this.br(s,b,c)}else{r=this.d
if(r==null){r=this.aL()
this.d=r}q=this.ag(b)
p=this.ar(r,q)
if(p==null)this.aN(r,q,[this.aM(b,c)])
else{o=this.ah(p,b)
if(o>=0)p[o].b=c
else p.push(this.aM(b,c))}}},
aj:function(a,b){if(typeof b==="string")return this.bF(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bF(this.c,b)
else return this.ex(b)},
ex:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.ar(t,this.ag(a))
r=this.ah(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bK(q)
return q.b},
V:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
au:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.e(new P.a0(this))
t=t.c}},
br:function(a,b,c){var t=this.ac(a,b)
if(t==null)this.aN(a,b,this.aM(b,c))
else t.b=c},
bF:function(a,b){var t
if(a==null)return
t=this.ac(a,b)
if(t==null)return
this.bK(t)
this.bA(a,b)
return t.b},
aM:function(a,b){var t,s
t=new H.eO(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bK:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.r=this.r+1&67108863},
ag:function(a){return J.an(a)&0x3ffffff},
ah:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.D(a[s].a,b))return s
return-1},
j:function(a){return P.mc(this)},
ac:function(a,b){return a[b]},
ar:function(a,b){return a[b]},
aN:function(a,b,c){H.d(c!=null)
a[b]=c},
bA:function(a,b){delete a[b]},
bz:function(a,b){return this.ac(a,b)!=null},
aL:function(){var t=Object.create(null)
this.aN(t,"<non-identifier-key>",t)
this.bA(t,"<non-identifier-key>")
return t},
$ism3:1}
H.eL.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.eO.prototype={}
H.eP.prototype={
gk:function(a){return this.a.a},
gw:function(a){var t,s
t=this.a
s=new H.eQ(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.eQ.prototype={
gq:function(){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a0(t))
else{t=this.c
if(t==null){this.sbq(null)
return!1}else{this.sbq(t.a)
this.c=this.c.c
return!0}}},
sbq:function(a){this.d=a}}
H.iD.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.iE.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.q]}}}
H.iF.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.q]}}}
H.bA.prototype={
gA:function(a){return C.ae},
$isbA:1}
H.bb.prototype={$isbb:1}
H.f1.prototype={
gA:function(a){return C.af}}
H.d7.prototype={
gk:function(a){return a.length},
$isl:1,
$asl:function(){},
$iso:1,
$aso:function(){}}
H.d8.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.M(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.E(H.M(a,b))
a[b]=c}}
H.d9.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.E(H.M(a,b))
a[b]=c},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]}}
H.d6.prototype={
gA:function(a){return C.ag},
$isc:1,
$asc:function(){return[P.K]},
$isb:1,
$asb:function(){return[P.K]},
$iset:1}
H.f2.prototype={
gA:function(a){return C.ah},
$isc:1,
$asc:function(){return[P.K]},
$isb:1,
$asb:function(){return[P.K]}}
H.f3.prototype={
gA:function(a){return C.ai},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.M(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]}}
H.f4.prototype={
gA:function(a){return C.aj},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.M(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]},
$isk5:1}
H.f5.prototype={
gA:function(a){return C.ak},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.M(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]}}
H.f6.prototype={
gA:function(a){return C.ao},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.M(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]},
$isku:1}
H.f7.prototype={
gA:function(a){return C.ap},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.M(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]},
$iskv:1}
H.da.prototype={
gA:function(a){return C.aq},
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.M(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]}}
H.f8.prototype={
gA:function(a){return C.ar},
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.M(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]},
$iskw:1}
H.bB.prototype={
$asl:function(){},
$isc:1,
$asc:function(){return[P.m]},
$aso:function(){},
$isb:1,
$asb:function(){return[P.m]}}
H.bC.prototype={
$asl:function(){},
$isc:1,
$asc:function(){return[P.K]},
$aso:function(){},
$isb:1,
$asb:function(){return[P.K]}}
H.bD.prototype={
$asl:function(){},
$asc:function(){return[P.K]},
$aso:function(){},
$asb:function(){return[P.K]}}
H.bE.prototype={
$asl:function(){},
$asc:function(){return[P.m]},
$aso:function(){},
$asb:function(){return[P.m]}}
P.hq.prototype={
$1:function(a){var t,s
H.iM()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.hp.prototype={
$1:function(a){var t,s
t=this.a
H.d(t.a==null);++u.globalState.f.b
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.hr.prototype={
$0:function(){H.iM()
this.a.$0()},
$S:function(){return{func:1}}}
P.hs.prototype={
$0:function(){H.iM()
this.a.$0()},
$S:function(){return{func:1}}}
P.hw.prototype={}
P.ig.prototype={
e6:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.aD("Future already completed"))
t.aH(b)}}
P.dy.prototype={
eD:function(a){if(this.c!==6)return!0
H.d(!0)
return this.b.b.b0(this.d,a.a)},
eq:function(a){var t,s
t=(this.c&2)!==0
if(t){H.d(t)
t=this.e!=null}else t=!1
H.d(t)
s=this.e
t=this.b.b
if(H.bi(s,{func:1,args:[P.n,P.bJ]}))return t.eL(s,a.a,a.b)
else return t.b0(s,a.a)}}
P.av.prototype={
co:function(a,b){var t,s,r
t=$.B
if(t!==C.f){t.toString
if(b!=null)b=P.mI(b,t)}s=new P.av(0,t,null,[null])
r=b==null?1:3
this.bs(new P.dy(null,s,r,a,b,[H.aI(this,0),null]))
return s},
cn:function(a){return this.co(a,null)},
bv:function(a){H.d(this.a<4)
H.d(a.a>=4)
this.a=a.a
this.c=a.c},
bs:function(a){var t
H.d(a.a==null)
t=this.a
if(t<=1){a.a=H.js(this.c,"$isdy")
this.c=a}else{if(t===2){H.d(!0)
t=this.c
if(t.a<4){t.bs(a)
return}this.bv(t)}H.d(this.a>=4)
t=this.b
t.toString
P.is(null,null,t,new P.hH(this,a))}},
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
return}this.bv(s)}H.d(this.a>=4)
t.a=this.ad(a)
s=this.b
s.toString
P.is(null,null,s,new P.hL(t,this))}},
bG:function(){H.d(this.a<4)
var t=this.c
this.c=null
return this.ad(t)},
ad:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aH:function(a){var t,s
H.d(this.a<4)
t=this.$ti
if(H.it(a,"$isex",t,"$asex"))if(H.it(a,"$isav",t,null))P.kz(a,this)
else P.my(a,this)
else{s=this.bG()
H.d(this.a<4)
this.a=4
this.c=a
P.bQ(this,s)}},
ao:function(a,b){var t
H.d(this.a<4)
t=this.bG()
H.d(this.a<4)
this.a=8
this.c=new P.b4(a,b)
P.bQ(this,t)},
dA:function(a){return this.ao(a,null)},
$isex:1,
gaP:function(){return this.a},
gdQ:function(){return this.c}}
P.hH.prototype={
$0:function(){P.bQ(this.a,this.b)},
$S:function(){return{func:1}}}
P.hL.prototype={
$0:function(){P.bQ(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.hI.prototype={
$1:function(a){var t=this.a
H.d(t.a===1)
H.d(t.a===1)
t.a=0
t.aH(a)},
$S:function(){return{func:1,args:[,]}}}
P.hJ.prototype={
$2:function(a,b){var t=this.a
H.d(t.a===1)
t.ao(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.hK.prototype={
$0:function(){this.a.ao(this.b,this.c)},
$S:function(){return{func:1}}}
P.hO.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.d
p=q.c
H.d((p&1)===0)
o=(p&2)===0
H.d(o)
t=null
try{H.d(o)
H.d(p===8)
t=q.b.b.ci(q.d)}catch(n){s=H.O(n)
r=H.aH(n)
if(this.c){q=this.a.a
H.d(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.d(q.a===8)
p.b=q.c}else p.b=new P.b4(s,r)
p.a=!0
return}if(!!J.u(t).$isex){if(t instanceof P.av&&t.gaP()>=4){if(t.gaP()===8){q=t
H.d(q.gaP()===8)
p=this.b
p.b=q.gdQ()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.cn(new P.hP(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.hP.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.hN.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.d((r.c&1)!==0)
this.a.b=r.b.b.b0(r.d,this.c)}catch(q){t=H.O(q)
s=H.aH(q)
r=this.a
r.b=new P.b4(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.hM.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.d(q.a===8)
t=q.c
q=this.c
if(q.eD(t)){H.d((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.eq(t)
p.a=!1}}catch(o){s=H.O(o)
r=H.aH(o)
q=this.a
p=q.a
H.d(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.d(q.a===8)
m.b=q.c}else m.b=new P.b4(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.dw.prototype={}
P.fP.prototype={
gk:function(a){var t,s
t={}
s=new P.av(0,$.B,null,[P.m])
t.a=0
this.eB(new P.fR(t),!0,new P.fS(t,s),s.gdz())
return s}}
P.fR.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.fS.prototype={
$0:function(){this.b.aH(this.a.a)},
$S:function(){return{func:1}}}
P.fQ.prototype={}
P.b4.prototype={
j:function(a){return H.f(this.a)},
$isb8:1}
P.io.prototype={}
P.ir.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.dg()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.e(t)
r=H.e(t)
r.stack=s.j(0)
throw r},
$S:function(){return{func:1}}}
P.i1.prototype={
eM:function(a){var t,s,r
try{if(C.f===$.B){a.$0()
return}P.kE(null,null,this,a)}catch(r){t=H.O(r)
s=H.aH(r)
P.iq(null,null,this,t,s)}},
eN:function(a,b){var t,s,r
try{if(C.f===$.B){a.$1(b)
return}P.kF(null,null,this,a,b)}catch(r){t=H.O(r)
s=H.aH(r)
P.iq(null,null,this,t,s)}},
e1:function(a){return new P.i3(this,a)},
aS:function(a){return new P.i2(this,a)},
e2:function(a){return new P.i4(this,a)},
h:function(a,b){return},
ci:function(a){if($.B===C.f)return a.$0()
return P.kE(null,null,this,a)},
b0:function(a,b){if($.B===C.f)return a.$1(b)
return P.kF(null,null,this,a,b)},
eL:function(a,b,c){if($.B===C.f)return a.$2(b,c)
return P.mJ(null,null,this,a,b,c)}}
P.i3.prototype={
$0:function(){return this.a.ci(this.b)},
$S:function(){return{func:1}}}
P.i2.prototype={
$0:function(){return this.a.eM(this.b)},
$S:function(){return{func:1}}}
P.i4.prototype={
$1:function(a){return this.a.eN(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.dz.prototype={
ag:function(a){return H.na(a)&0x3ffffff},
ah:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.hV.prototype={
gw:function(a){var t=new P.bT(this,this.r,null,null,[null])
t.c=this.e
return t},
gk:function(a){return this.a},
B:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dB(b)},
dB:function(a){var t=this.d
if(t==null)return!1
return this.aq(t[this.ap(a)],a)>=0},
cb:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.B(0,a)?a:null
else return this.dK(a)},
dK:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.ap(a)]
r=this.aq(s,a)
if(r<0)return
return J.bj(s,r).gdD()},
l:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.bw(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.bw(r,b)}else return this.T(0,b)},
T:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.mC()
this.d=t}s=this.ap(b)
r=t[s]
if(r==null){q=[this.aG(b)]
H.d(q!=null)
t[s]=q}else{if(this.aq(r,b)>=0)return!1
r.push(this.aG(b))}return!0},
aj:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bx(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bx(this.c,b)
else return this.dL(0,b)},
dL:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.ap(b)]
r=this.aq(s,b)
if(r<0)return!1
this.by(s.splice(r,1)[0])
return!0},
V:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
bw:function(a,b){var t
if(a[b]!=null)return!1
t=this.aG(b)
H.d(!0)
a[b]=t
return!0},
bx:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.by(t)
delete a[b]
return!0},
aG:function(a){var t,s
t=new P.hW(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
by:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.r=this.r+1&67108863},
ap:function(a){return J.an(a)&0x3ffffff},
aq:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.D(a[s].a,b))return s
return-1},
$isc:1,
$asc:null}
P.hW.prototype={
gdD:function(){return this.a}}
P.bT.prototype={
gq:function(){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a0(t))
else{t=this.c
if(t==null){this.saa(null)
return!1}else{this.saa(t.a)
this.c=this.c.b
return!0}}},
saa:function(a){this.d=a}}
P.hS.prototype={}
P.d2.prototype={}
P.w.prototype={
gw:function(a){return new H.d3(a,this.gk(a),0,null,[H.ak(a,"w",0)])},
t:function(a,b){return this.h(a,b)},
cc:function(a,b){return new H.by(a,b,[H.ak(a,"w",0),null])},
ep:function(a,b,c){var t,s,r
t=this.gk(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gk(a))throw H.e(new P.a0(a))}return s},
j:function(a){return P.eH(a,"[","]")},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
P.eU.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.f(a)
t.a=s+": "
t.a+=H.f(b)},
$S:function(){return{func:1,args:[,,]}}}
P.eR.prototype={
gw:function(a){return new P.hX(this,this.c,this.d,this.b,null,this.$ti)},
gai:function(a){return this.b===this.c},
gk:function(a){return(this.c-this.b&this.a.length-1)>>>0},
t:function(a,b){var t=(this.c-this.b&this.a.length-1)>>>0
if(C.b.am(0,b)||b>=t)H.E(P.A(b,this,"index",null,t))
return this.a[(C.b.a0(this.b,b)&this.a.length-1)>>>0]},
V:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
j:function(a){return P.eH(this,"{","}")},
cf:function(){var t,s,r
t=this.b
if(t===this.c)throw H.e(H.eI());++this.d
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
if(this.b===t)this.bC();++this.d},
bC:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.C(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.bb(s,0,q,t,r)
C.a.bb(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbI(s)},
da:function(a,b){var t
H.d(!0)
t=new Array(8)
t.fixed$length=Array
this.sbI(H.C(t,[b]))},
sbI:function(a){this.a=a},
$asc:null}
P.hX.prototype={
gq:function(){return this.e},
p:function(){var t,s
t=this.a
if(this.c!==t.d)H.E(new P.a0(t))
s=this.d
if(s===this.b){this.saa(null)
return!1}this.saa(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
saa:function(a){this.e=a}}
P.fF.prototype={
J:function(a,b){var t
for(t=J.bl(b);t.p();)this.l(0,t.gq())},
j:function(a){return P.eH(this,"{","}")},
$isc:1,
$asc:null}
P.fE.prototype={}
P.bG.prototype={$isc:1,$asc:null,$isb:1,$asb:null}
P.ax.prototype={}
P.G.prototype={}
P.b7.prototype={
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.b7))return!1
return this.a===b.a&&this.b===b.b},
O:function(a,b){return C.b.O(this.a,b.a)},
gu:function(a){var t=this.a
return(t^C.b.aO(t,30))&1073741823},
j:function(a){var t,s,r,q,p,o,n
t=P.lU(H.mk(this))
s=P.ca(H.mi(this))
r=P.ca(H.me(this))
q=P.ca(H.mf(this))
p=P.ca(H.mh(this))
o=P.ca(H.mj(this))
n=P.lV(H.mg(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isG:1,
$asG:function(){return[P.b7]}}
P.K.prototype={$isG:1,
$asG:function(){return[P.T]}}
P.az.prototype={
aB:function(a,b){return C.b.aB(this.a,b.gdC())},
am:function(a,b){return C.b.am(this.a,b.gdC())},
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.az))return!1
return this.a===b.a},
gu:function(a){return this.a&0x1FFFFFFF},
O:function(a,b){return C.b.O(this.a,b.a)},
j:function(a){var t,s,r,q,p
t=new P.e4()
s=this.a
if(s<0)return"-"+new P.az(0-s).j(0)
r=t.$1(C.b.G(s,6e7)%60)
q=t.$1(C.b.G(s,1e6)%60)
p=new P.e3().$1(s%1e6)
return""+C.b.G(s,36e8)+":"+H.f(r)+":"+H.f(q)+"."+H.f(p)},
$isG:1,
$asG:function(){return[P.az]}}
P.e3.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.q,args:[P.m]}}}
P.e4.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.q,args:[P.m]}}}
P.b8.prototype={}
P.c5.prototype={
j:function(a){return"Assertion failed"}}
P.dg.prototype={
j:function(a){return"Throw of null."}}
P.ad.prototype={
gaJ:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaI:function(){return""},
j:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.f(t)
q=this.gaJ()+s+r
if(!this.a)return q
p=this.gaI()
o=P.j8(this.b)
return q+p+": "+H.f(o)}}
P.dj.prototype={
gaJ:function(){return"RangeError"},
gaI:function(){var t,s,r
H.d(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.f(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.f(t)
else if(r>t)s=": Not in range "+H.f(t)+".."+H.f(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.f(t)}return s}}
P.eD.prototype={
gaJ:function(){return"RangeError"},
gaI:function(){H.d(this.a)
if(J.l3(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.f(t)},
gk:function(a){return this.f}}
P.t.prototype={
j:function(a){return"Unsupported operation: "+this.a}}
P.du.prototype={
j:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.aD.prototype={
j:function(a){return"Bad state: "+this.a}}
P.a0.prototype={
j:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.f(P.j8(t))+"."}}
P.dn.prototype={
j:function(a){return"Stack Overflow"},
$isb8:1}
P.dW.prototype={
j:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.hG.prototype={
j:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.f(t)}}
P.e6.prototype={
j:function(a){return"Expando:"+H.f(this.a)},
h:function(a,b){var t,s
t=this.b
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.E(P.jM(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.kc(b,"expando$values")
return s==null?null:H.kc(s,t)}}
P.m.prototype={$isG:1,
$asG:function(){return[P.T]}}
P.U.prototype={
az:function(a,b){return new H.dv(this,b,[H.ak(this,"U",0)])},
gk:function(a){var t,s
H.d(!this.$isc)
t=this.gw(this)
for(s=0;t.p();)++s
return s},
ga1:function(a){var t,s
t=this.gw(this)
if(!t.p())throw H.e(H.eI())
s=t.gq()
if(t.p())throw H.e(H.mb())
return s},
t:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(P.lN("index"))
if(b<0)H.E(P.aW(b,0,null,"index",null))
for(t=this.gw(this),s=0;t.p();){r=t.gq()
if(b===s)return r;++s}throw H.e(P.A(b,this,"index",null,s))},
j:function(a){return P.m9(this,"(",")")}}
P.d_.prototype={}
P.b.prototype={$isc:1,$asc:null,$asb:null}
P.aC.prototype={}
P.aU.prototype={
gu:function(a){return P.n.prototype.gu.call(this,this)},
j:function(a){return"null"}}
P.T.prototype={$isG:1,
$asG:function(){return[P.T]}}
P.n.prototype={constructor:P.n,$isn:1,
v:function(a,b){return this===b},
gu:function(a){return H.aV(this)},
j:function(a){return H.fs(this)},
gA:function(a){return new H.aE(H.iB(this),null)},
toString:function(){return this.j(this)}}
P.bJ.prototype={}
P.q.prototype={$isG:1,
$asG:function(){return[P.q]}}
P.bK.prototype={
gk:function(a){return this.a.length},
j:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga2:function(){return this.a}}
W.k.prototype={}
W.dM.prototype={
j:function(a){return String(a)},
$isa:1}
W.dN.prototype={
j:function(a){return String(a)},
$isa:1}
W.a_.prototype={$isn:1}
W.dQ.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isl:1,
$asl:function(){return[W.a_]},
$isc:1,
$asc:function(){return[W.a_]},
$iso:1,
$aso:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.c6.prototype={}
W.aM.prototype={$isa:1,$isaM:1}
W.c7.prototype={
b3:function(a,b,c){if(c!=null)return this.dF(a,b,P.mT(c,null))
return this.dG(a,b)},
cI:function(a,b){return this.b3(a,b,null)},
dF:function(a,b,c){return a.getContext(b,c)},
dG:function(a,b){return a.getContext(b)}}
W.c8.prototype={
at:function(a,b,c){return a.addColorStop(b,c)}}
W.c9.prototype={
c_:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
en:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
aA:function(a){return P.iw(a.getContextAttributes())}}
W.aN.prototype={$isa:1,
gk:function(a){return a.length}}
W.dU.prototype={$isa:1}
W.y.prototype={$isn:1}
W.b6.prototype={
bu:function(a,b){var t,s
t=$.$get$jV()
s=t[b]
if(typeof s==="string")return s
s=this.dT(a,b)
t[b]=s
return s},
dT:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.lW()+b
if(t in a)return t
return b},
gk:function(a){return a.length}}
W.dV.prototype={}
W.dX.prototype={
h:function(a,b){return a[b]},
gk:function(a){return a.length}}
W.dY.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gI:function(a){return a.z}}
W.cb.prototype={}
W.bn.prototype={
dX:function(a,b){return a.adoptNode(b)},
cJ:function(a,b){return a.getElementById(b)},
eG:function(a,b){return a.querySelector(b)}}
W.cc.prototype={$isa:1}
W.dZ.prototype={
j:function(a){return String(a)}}
W.cd.prototype={
ec:function(a,b){return a.createHTMLDocument(b)}}
W.e_.prototype={
gay:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gI:function(a){return a.z}}
W.ce.prototype={
gay:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gI:function(a){return a.z}}
W.cf.prototype={
j:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.ga_(a))+" x "+H.f(this.gZ(a))},
v:function(a,b){var t
if(b==null)return!1
t=J.u(b)
if(!t.$isH)return!1
return a.left===t.gaW(b)&&a.top===t.gb2(b)&&this.ga_(a)===t.ga_(b)&&this.gZ(a)===t.gZ(b)},
gu:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.ga_(a)
q=this.gZ(a)
return W.kC(W.b3(W.b3(W.b3(W.b3(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gZ:function(a){return a.height},
gaW:function(a){return a.left},
gb2:function(a){return a.top},
ga_:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isH:1,
$asH:function(){}}
W.e0.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
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
W.e1.prototype={
gk:function(a){return a.length}}
W.a1.prototype={
ge_:function(a){return new W.hA(a)},
j:function(a){return a.localName},
K:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.k2
if(t==null){t=H.C([],[W.dd])
s=new W.de(t)
C.a.l(t,W.kA(null))
C.a.l(t,W.kD())
$.k2=s
d=s}else d=t
t=$.k1
if(t==null){t=new W.dC(d)
$.k1=t
c=t}else{t.a=d
c=t}}if($.aA==null){t=document
s=t.implementation
s=(s&&C.L).ec(s,"")
$.aA=s
$.j7=s.createRange()
s=$.aA
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.aA.head;(t&&C.M).N(t,r)}t=$.aA
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.js(s,"$isaM")}t=$.aA
if(!!this.$isaM)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.aA.body;(t&&C.o).N(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.B(C.W,a.tagName)){t=$.j7;(t&&C.E).cK(t,q)
t=$.j7
p=(t&&C.E).ea(t,b)}else{q.innerHTML=b
p=$.aA.createDocumentFragment()
for(t=J.j(p);s=q.firstChild,s!=null;)t.N(p,s)}t=$.aA.body
if(q==null?t!=null:q!==t)J.lA(q)
c.ba(p)
C.r.dX(document,p)
return p},
eb:function(a,b,c){return this.K(a,b,c,null)},
cU:function(a,b,c,d){a.textContent=null
this.N(a,this.K(a,b,c,d))},
cT:function(a,b){return this.cU(a,b,null,null)},
a6:function(a,b){return a.getAttribute(b)},
dM:function(a,b){return a.removeAttribute(b)},
$isa:1,
$isn:1,
$isa1:1,
$ish:1,
$isp:1,
geO:function(a){return a.tagName}}
W.iu.prototype={
$1:function(a){return!!J.u(a).$isa1},
$S:function(){return{func:1,args:[,]}}}
W.i.prototype={$isn:1,$isi:1}
W.h.prototype={
dv:function(a,b,c,d){return a.addEventListener(b,H.c_(c,1),!1)},
$isn:1,
$ish:1}
W.a2.prototype={$isn:1}
W.eq.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
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
W.er.prototype={
gk:function(a){return a.length}}
W.ev.prototype={
gk:function(a){return a.length}}
W.a3.prototype={$isn:1}
W.cj.prototype={}
W.ez.prototype={
gk:function(a){return a.length}}
W.bv.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
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
W.ck.prototype={}
W.eA.prototype={
F:function(a,b){return a.send(b)}}
W.bw.prototype={}
W.eE.prototype={$isa:1,$isa1:1}
W.aR.prototype={$isn:1,$isi:1,$isaR:1}
W.eS.prototype={
j:function(a){return String(a)}}
W.eY.prototype={
gk:function(a){return a.length}}
W.eZ.prototype={
eW:function(a,b,c){return a.send(b,c)},
F:function(a,b){return a.send(b)}}
W.bz.prototype={}
W.a4.prototype={$isn:1}
W.f_.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isl:1,
$asl:function(){return[W.a4]},
$isc:1,
$asc:function(){return[W.a4]},
$iso:1,
$aso:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.L.prototype={$isn:1,$isi:1,$isL:1}
W.f9.prototype={$isa:1}
W.R.prototype={
ga1:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.e(new P.aD("No elements"))
if(s>1)throw H.e(new P.aD("More than one element"))
return t.firstChild},
J:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.j(s),p=0;p<r;++p)q.N(s,t.firstChild)
return},
i:function(a,b,c){var t=this.a
J.l5(t,c,C.C.h(t.childNodes,b))},
gw:function(a){var t=this.a.childNodes
return new W.ci(t,t.length,-1,null,[H.ak(t,"z",0)])},
gk:function(a){return this.a.childNodes.length},
h:function(a,b){return C.C.h(this.a.childNodes,b)},
$asc:function(){return[W.p]},
$asd2:function(){return[W.p]},
$asb:function(){return[W.p]},
$asbG:function(){return[W.p]}}
W.p.prototype={
eH:function(a){var t=a.parentNode
if(t!=null)J.bk(t,a)},
j:function(a){var t=a.nodeValue
return t==null?this.cY(a):t},
N:function(a,b){return a.appendChild(b)},
dN:function(a,b){return a.removeChild(b)},
dO:function(a,b,c){return a.replaceChild(b,c)},
$isn:1,
$ish:1,
$isp:1,
gaZ:function(a){return a.previousSibling}}
W.dc.prototype={
b_:function(a){return a.previousNode()}}
W.bF.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
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
W.fi.prototype={$isa:1}
W.fl.prototype={
gk:function(a){return a.length}}
W.a5.prototype={$isn:1,
gk:function(a){return a.length}}
W.fn.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
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
W.fq.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.fr.prototype={
F:function(a,b){return a.send(b)}}
W.di.prototype={
ea:function(a,b){return a.createContextualFragment(b)},
cK:function(a,b){return a.selectNodeContents(b)}}
W.fB.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gI:function(a){return a.z}}
W.dl.prototype={
F:function(a,b){return a.send(b)}}
W.fD.prototype={
gk:function(a){return a.length}}
W.fG.prototype={$isa:1}
W.a6.prototype={$isn:1,$ish:1}
W.fH.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
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
W.a7.prototype={$isn:1}
W.fJ.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
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
W.a8.prototype={$isn:1,
gk:function(a){return a.length}}
W.fO.prototype={
h:function(a,b){return this.bB(a,b)},
au:function(a,b){var t,s
for(t=0;!0;++t){s=this.dJ(a,t)
if(s==null)return
b.$2(s,this.bB(a,s))}},
gk:function(a){return a.length},
bB:function(a,b){return a.getItem(b)},
dJ:function(a,b){return a.key(b)}}
W.V.prototype={$isn:1}
W.ah.prototype={}
W.dp.prototype={
K:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aC(a,b,c,d)
t=W.lY("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.R(s).J(0,new W.R(t))
return s}}
W.fW.prototype={
K:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aC(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.J.K(t.createElement("table"),b,c,d)
t.toString
t=new W.R(t)
r=t.ga1(t)
r.toString
t=new W.R(r)
q=t.ga1(t)
s.toString
q.toString
new W.R(s).J(0,new W.R(q))
return s}}
W.fX.prototype={
K:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aC(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.J.K(t.createElement("table"),b,c,d)
t.toString
t=new W.R(t)
r=t.ga1(t)
s.toString
r.toString
new W.R(s).J(0,new W.R(r))
return s}}
W.bL.prototype={$isbL:1}
W.a9.prototype={$isn:1,$ish:1}
W.W.prototype={$isn:1,$ish:1}
W.h_.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isl:1,
$asl:function(){return[W.W]},
$isc:1,
$asc:function(){return[W.W]},
$iso:1,
$aso:function(){return[W.W]},
$isb:1,
$asb:function(){return[W.W]}}
W.h0.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
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
W.h2.prototype={
gk:function(a){return a.length}}
W.aa.prototype={$isn:1}
W.aX.prototype={$isn:1,$isi:1,$isaX:1}
W.h6.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
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
W.h7.prototype={
gk:function(a){return a.length}}
W.be.prototype={}
W.h9.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gI:function(a){return a.z}}
W.ds.prototype={
b_:function(a){return a.previousNode()}}
W.aF.prototype={}
W.he.prototype={
j:function(a){return String(a)},
$isa:1}
W.hg.prototype={
gk:function(a){return a.length}}
W.hj.prototype={
gk:function(a){return a.length}}
W.hk.prototype={
F:function(a,b){return a.send(b)}}
W.aZ.prototype={
gee:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(new P.t("deltaY is not supported"))},
$isn:1,
$isi:1,
$isL:1,
$isaZ:1}
W.bP.prototype={
gdZ:function(a){var t,s
t=P.T
s=new P.av(0,$.B,null,[t])
this.dE(a)
this.dP(a,W.kH(new W.hm(new P.ig(s,[t]))))
return s},
dP:function(a,b){return a.requestAnimationFrame(H.c_(b,1))},
dE:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isa:1}
W.hm.prototype={
$1:function(a){this.a.e6(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.hn.prototype={$isa:1}
W.b_.prototype={$isa:1}
W.hv.prototype={
j:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
v:function(a,b){var t,s,r
if(b==null)return!1
t=J.u(b)
if(!t.$isH)return!1
s=a.left
r=t.gaW(b)
if(s==null?r==null:s===r){s=a.top
r=t.gb2(b)
if(s==null?r==null:s===r){s=a.width
r=t.ga_(b)
if(s==null?r==null:s===r){s=a.height
t=t.gZ(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gu:function(a){var t,s,r,q
t=J.an(a.left)
s=J.an(a.top)
r=J.an(a.width)
q=J.an(a.height)
return W.kC(W.b3(W.b3(W.b3(W.b3(0,t),s),r),q))},
$isH:1,
$asH:function(){},
gZ:function(a){return a.height},
gaW:function(a){return a.left},
gb2:function(a){return a.top},
ga_:function(a){return a.width}}
W.dx.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isl:1,
$asl:function(){return[P.H]},
$isc:1,
$asc:function(){return[P.H]},
$iso:1,
$aso:function(){return[P.H]},
$isb:1,
$asb:function(){return[P.H]}}
W.hx.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isl:1,
$asl:function(){return[W.y]},
$isc:1,
$asc:function(){return[W.y]},
$iso:1,
$aso:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.hy.prototype={$isa:1}
W.hz.prototype={
gZ:function(a){return a.height},
ga_:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.hQ.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isl:1,
$asl:function(){return[W.a3]},
$isc:1,
$asc:function(){return[W.a3]},
$iso:1,
$aso:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.hR.prototype={$isa:1}
W.dA.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
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
W.i9.prototype={$isa:1}
W.ic.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
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
W.id.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isl:1,
$asl:function(){return[W.V]},
$isc:1,
$asc:function(){return[W.V]},
$iso:1,
$aso:function(){return[W.V]},
$isb:1,
$asb:function(){return[W.V]}}
W.il.prototype={$isa:1}
W.im.prototype={$isa:1}
W.ht.prototype={
au:function(a,b){var t,s,r,q,p,o
for(t=this.gC(this),s=t.length,r=this.a,q=J.j(r),p=0;p<t.length;t.length===s||(0,H.N)(t),++p){o=t[p]
b.$2(o,q.a6(r,o))}},
gC:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.C([],[P.q])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.l(s,p.name)}return s},
gdH:function(){return this.a}}
W.hA.prototype={
h:function(a,b){return J.j4(this.a,b)},
gk:function(a){return this.gC(this).length}}
W.hD.prototype={
eB:function(a,b,c,d){return W.ai(this.a,this.b,a,!1,H.aI(this,0))}}
W.jk.prototype={}
W.hE.prototype={
dV:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.l4(r,this.c,t,!1)}},
dq:function(a,b,c,d,e){this.dV()}}
W.hF.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.bS.prototype={
a3:function(a){return $.$get$kB().B(0,W.bo(a))},
U:function(a,b,c){var t,s,r
t=W.bo(a)
s=$.$get$jl()
r=s.h(0,H.f(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
dr:function(a){var t,s
t=$.$get$jl()
if(t.gai(t)){for(s=0;s<262;++s)t.i(0,C.V[s],W.n_())
for(s=0;s<12;++s)t.i(0,C.u[s],W.n0())}}}
W.z.prototype={
gw:function(a){return new W.ci(a,this.gk(a),-1,null,[H.ak(a,"z",0)])},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
W.de.prototype={
a3:function(a){return C.a.bN(this.a,new W.fb(a))},
U:function(a,b,c){return C.a.bN(this.a,new W.fa(a,b,c))}}
W.fb.prototype={
$1:function(a){return a.a3(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.fa.prototype={
$1:function(a){return a.U(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.bV.prototype={
a3:function(a){return this.a.B(0,W.bo(a))},
U:function(a,b,c){var t,s
t=W.bo(a)
s=this.c
if(s.B(0,H.f(t)+"::"+b))return this.d.dY(c)
else if(s.B(0,"*::"+b))return this.d.dY(c)
else{s=this.b
if(s.B(0,H.f(t)+"::"+b))return!0
else if(s.B(0,"*::"+b))return!0
else if(s.B(0,H.f(t)+"::*"))return!0
else if(s.B(0,"*::*"))return!0}return!1},
dt:function(a,b,c,d){var t,s,r
this.a.J(0,c)
t=b.az(0,new W.ia())
s=b.az(0,new W.ib())
this.b.J(0,t)
r=this.c
r.J(0,C.X)
r.J(0,s)}}
W.ia.prototype={
$1:function(a){return!C.a.B(C.u,a)},
$S:function(){return{func:1,args:[,]}}}
W.ib.prototype={
$1:function(a){return C.a.B(C.u,a)},
$S:function(){return{func:1,args:[,]}}}
W.ih.prototype={
U:function(a,b,c){if(this.d0(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.j4(a,"template")==="")return this.e.B(0,b)
return!1}}
W.ii.prototype={
$1:function(a){return"TEMPLATE::"+H.f(a)},
$S:function(){return{func:1,args:[,]}}}
W.ie.prototype={
a3:function(a){var t=J.u(a)
if(!!t.$isbI)return!1
t=!!t.$isF
if(t&&W.bo(a)==="foreignObject")return!1
if(t)return!0
return!1},
U:function(a,b,c){if(b==="is"||C.i.be(b,"on"))return!1
return this.a3(a)}}
W.ci.prototype={
p:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbD(J.bj(this.a,t))
this.c=t
return!0}this.sbD(null)
this.c=s
return!1},
gq:function(){return this.d},
sbD:function(a){this.d=a}}
W.dd.prototype={}
W.i8.prototype={}
W.dC.prototype={
ba:function(a){new W.ij(this).$2(a,null)},
as:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)J.bk(t,a)}else J.bk(b,a)},
dS:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.lo(a)
r=J.j4(s.gdH(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.O(n)}p="element unprintable"
try{p=J.ay(a)}catch(n){H.O(n)}try{o=W.bo(a)
this.dR(a,b,t,p,o,s,r)}catch(n){if(H.O(n) instanceof P.ad)throw n
else{this.as(a,b)
window
m="Removing corrupted element "+H.f(p)
if(typeof console!="undefined")console.warn(m)}}},
dR:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.as(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.a3(a)){this.as(a,b)
window
t="Removing disallowed element <"+H.f(e)+"> from "+J.ay(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.U(a,"is",g)){this.as(a,b)
window
t="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gC(f)
s=H.C(t.slice(0),[H.aI(t,0)])
for(r=f.gC(f).length-1,t=f.a,q=J.j(t);r>=0;--r){p=s[r]
if(!this.a.U(a,J.lF(p),q.a6(t,p))){window
o="Removing disallowed attribute <"+H.f(e)+" "+p+'="'+H.f(q.a6(t,p))+'">'
if(typeof console!="undefined")console.warn(o)
q.a6(t,p)
q.dM(t,p)}}if(!!J.u(a).$isbL)this.ba(a.content)}}
W.ij.prototype={
$2:function(a,b){var t,s,r,q
switch(a.nodeType){case 1:this.a.dS(a,b)
break
case 8:case 11:case 3:case 4:break
default:if(b==null){r=a.parentNode
if(r!=null)J.bk(r,a)}else J.bk(b,a)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.lp(t)}catch(q){H.O(q)
r=t
J.bk(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.p,W.p]}}}
W.bp.prototype={$isc:1,
$asc:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.bq.prototype={$isc:1,
$asc:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.br.prototype={$isc:1,
$asc:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
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
W.cl.prototype={}
W.cF.prototype={$isc:1,
$asc:function(){return[P.H]},
$isb:1,
$asb:function(){return[P.H]}}
W.cr.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.cy.prototype={$isc:1,
$asc:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.cz.prototype={$isc:1,
$asc:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.cA.prototype={$isc:1,
$asc:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.cB.prototype={$isc:1,
$asc:function(){return[W.V]},
$isb:1,
$asb:function(){return[W.V]}}
W.cC.prototype={$isc:1,
$asc:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.cD.prototype={$isc:1,
$asc:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.cE.prototype={$isc:1,
$asc:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.cp.prototype={$isc:1,
$asc:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.cq.prototype={$isc:1,
$asc:function(){return[W.W]},
$isb:1,
$asb:function(){return[W.W]}}
W.cs.prototype={$isc:1,
$asc:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.cu.prototype={$isc:1,
$asc:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.cv.prototype={$isc:1,
$asc:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.cw.prototype={$isc:1,
$asc:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]}}
W.cG.prototype={$isc:1,
$asc:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.cH.prototype={$isc:1,
$asc:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.cS.prototype={$isc:1,
$asc:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.cT.prototype={$isc:1,
$asc:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.cR.prototype={$isc:1,
$asc:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.cW.prototype={$isc:1,
$asc:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.cX.prototype={$isc:1,
$asc:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.cY.prototype={$isc:1,
$asc:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.cZ.prototype={$isc:1,
$asc:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]}}
W.cJ.prototype={$isc:1,
$asc:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.cL.prototype={$isc:1,
$asc:function(){return[W.W]},
$isb:1,
$asb:function(){return[W.W]}}
W.cN.prototype={$isc:1,
$asc:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.cP.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.cU.prototype={$isc:1,
$asc:function(){return[P.H]},
$isb:1,
$asb:function(){return[P.H]}}
W.cV.prototype={$isc:1,
$asc:function(){return[W.V]},
$isb:1,
$asb:function(){return[W.V]}}
P.iv.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.q,,]}}}
P.hU.prototype={
eE:function(){return Math.random()}}
P.i0.prototype={}
P.H.prototype={$asH:null}
P.dL.prototype={$isa:1}
P.aL.prototype={$isa:1}
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
P.ej.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ek.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gI:function(a){return a.z}}
P.el.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.em.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gI:function(a){return a.z}}
P.en.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eo.prototype={$isa:1,
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
P.eB.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ap.prototype={$isn:1}
P.eN.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return this.X(a,b)},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
X:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.ap]},
$isb:1,
$asb:function(){return[P.ap]}}
P.eV.prototype={$isa:1}
P.eW.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.aq.prototype={$isn:1}
P.fc.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return this.X(a,b)},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
X:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.aq]},
$isb:1,
$asb:function(){return[P.aq]}}
P.fj.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fo.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fp.prototype={
gk:function(a){return a.length}}
P.fu.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fv.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bI.prototype={$isa:1,$isbI:1}
P.fT.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return this.X(a,b)},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
X:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]}}
P.F.prototype={
K:function(a,b,c,d){var t,s,r,q,p,o
t=H.C([],[W.dd])
C.a.l(t,W.kA(null))
C.a.l(t,W.kD())
C.a.l(t,new W.ie())
c=new W.dC(new W.de(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.o).eb(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.R(q)
o=t.ga1(t)
for(t=J.j(p);r=o.firstChild,r!=null;)t.N(p,r)
return p},
$isa:1,
$isF:1}
P.fU.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fV.prototype={$isa:1}
P.dq.prototype={}
P.fZ.prototype={$isa:1}
P.bM.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ar.prototype={$isn:1}
P.h8.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return this.X(a,b)},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
X:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.ar]},
$isb:1,
$asb:function(){return[P.ar]}}
P.hf.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.hh.prototype={$isa:1}
P.hi.prototype={$isa:1}
P.bR.prototype={$isa:1}
P.i5.prototype={$isa:1}
P.i6.prototype={$isa:1}
P.i7.prototype={$isa:1}
P.co.prototype={$isc:1,
$asc:function(){return[P.ap]},
$isb:1,
$asb:function(){return[P.ap]}}
P.cm.prototype={$isc:1,
$asc:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]}}
P.ct.prototype={$isc:1,
$asc:function(){return[P.aq]},
$isb:1,
$asb:function(){return[P.aq]}}
P.cx.prototype={$isc:1,
$asc:function(){return[P.ar]},
$isb:1,
$asb:function(){return[P.ar]}}
P.cI.prototype={$isc:1,
$asc:function(){return[P.ap]},
$isb:1,
$asb:function(){return[P.ap]}}
P.cQ.prototype={$isc:1,
$asc:function(){return[P.aq]},
$isb:1,
$asb:function(){return[P.aq]}}
P.cM.prototype={$isc:1,
$asc:function(){return[P.ar]},
$isb:1,
$asb:function(){return[P.ar]}}
P.cO.prototype={$isc:1,
$asc:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]}}
P.dP.prototype={
gk:function(a){return a.length}}
P.fz.prototype={
bL:function(a,b){return a.activeTexture(b)},
bO:function(a,b,c){return a.attachShader(b,c)},
bP:function(a,b,c){return a.bindBuffer(b,c)},
bQ:function(a,b,c){return a.bindFramebuffer(b,c)},
bR:function(a,b,c){return a.bindTexture(b,c)},
bS:function(a,b){return a.blendEquation(b)},
bT:function(a,b,c){return a.blendFunc(b,c)},
bU:function(a,b,c,d){return a.bufferData(b,c,d)},
bV:function(a,b){return a.clear(b)},
bW:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bX:function(a,b){return a.compileShader(b)},
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
aA:function(a){return P.iw(a.getContextAttributes())},
b4:function(a){return a.getError()},
b5:function(a,b){return a.getProgramInfoLog(b)},
b6:function(a,b,c){return a.getProgramParameter(b,c)},
b7:function(a,b){return a.getShaderInfoLog(b)},
b8:function(a,b,c){return a.getShaderParameter(b,c)},
b9:function(a,b,c){return a.getUniformLocation(b,c)},
ca:function(a,b){return a.linkProgram(b)},
ce:function(a,b,c){return a.pixelStorei(b,c)},
bc:function(a,b,c){return a.shaderSource(b,c)},
bf:function(a,b,c,d){return a.stencilFunc(b,c,d)},
b1:function(a,b,c,d,e,f,g,h,i,j){this.aQ(a,b,c,d,e,f,g)
return},
ck:function(a,b,c,d,e,f,g){return this.b1(a,b,c,d,e,f,g,null,null,null)},
aQ:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cl:function(a,b,c,d){return a.texParameterf(b,c,d)},
cm:function(a,b,c,d){return a.texParameteri(b,c,d)},
cp:function(a,b,c){return a.uniform1f(b,c)},
cq:function(a,b,c){return a.uniform1fv(b,c)},
cr:function(a,b,c){return a.uniform1i(b,c)},
cs:function(a,b,c){return a.uniform1iv(b,c)},
ct:function(a,b,c){return a.uniform2fv(b,c)},
cu:function(a,b,c){return a.uniform3fv(b,c)},
cv:function(a,b,c){return a.uniform4fv(b,c)},
cw:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cz:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cB:function(a,b){return a.useProgram(b)},
cD:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cE:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fA.prototype={
e0:function(a,b){return a.beginTransformFeedback(b)},
e3:function(a,b){return a.bindVertexArray(b)},
ed:function(a){return a.createVertexArray()},
ek:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
el:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
em:function(a){return a.endTransformFeedback()},
eT:function(a,b,c,d){this.dU(a,b,c,d)
return},
dU:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
eU:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bL:function(a,b){return a.activeTexture(b)},
bO:function(a,b,c){return a.attachShader(b,c)},
bP:function(a,b,c){return a.bindBuffer(b,c)},
bQ:function(a,b,c){return a.bindFramebuffer(b,c)},
bR:function(a,b,c){return a.bindTexture(b,c)},
bS:function(a,b){return a.blendEquation(b)},
bT:function(a,b,c){return a.blendFunc(b,c)},
bU:function(a,b,c,d){return a.bufferData(b,c,d)},
bV:function(a,b){return a.clear(b)},
bW:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bX:function(a,b){return a.compileShader(b)},
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
aA:function(a){return P.iw(a.getContextAttributes())},
b4:function(a){return a.getError()},
b5:function(a,b){return a.getProgramInfoLog(b)},
b6:function(a,b,c){return a.getProgramParameter(b,c)},
b7:function(a,b){return a.getShaderInfoLog(b)},
b8:function(a,b,c){return a.getShaderParameter(b,c)},
b9:function(a,b,c){return a.getUniformLocation(b,c)},
ca:function(a,b){return a.linkProgram(b)},
ce:function(a,b,c){return a.pixelStorei(b,c)},
bc:function(a,b,c){return a.shaderSource(b,c)},
bf:function(a,b,c,d){return a.stencilFunc(b,c,d)},
b1:function(a,b,c,d,e,f,g,h,i,j){this.aQ(a,b,c,d,e,f,g)
return},
ck:function(a,b,c,d,e,f,g){return this.b1(a,b,c,d,e,f,g,null,null,null)},
aQ:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cl:function(a,b,c,d){return a.texParameterf(b,c,d)},
cm:function(a,b,c,d){return a.texParameteri(b,c,d)},
cp:function(a,b,c){return a.uniform1f(b,c)},
cq:function(a,b,c){return a.uniform1fv(b,c)},
cr:function(a,b,c){return a.uniform1i(b,c)},
cs:function(a,b,c){return a.uniform1iv(b,c)},
ct:function(a,b,c){return a.uniform2fv(b,c)},
cu:function(a,b,c){return a.uniform3fv(b,c)},
cv:function(a,b,c){return a.uniform4fv(b,c)},
cw:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cz:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cB:function(a,b){return a.useProgram(b)},
cD:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cE:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isa:1}
P.ik.prototype={$isa:1}
P.fK.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return P.iw(this.dI(a,b))},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
dI:function(a,b){return a.item(b)},
$isc:1,
$asc:function(){return[P.aC]},
$isb:1,
$asb:function(){return[P.aC]}}
P.cn.prototype={$isc:1,
$asc:function(){return[P.aC]},
$isb:1,
$asb:function(){return[P.aC]}}
P.cK.prototype={$isc:1,
$asc:function(){return[P.aC]},
$isb:1,
$asb:function(){return[P.aC]}}
B.iR.prototype={
$1:function(a){$.$get$ix().i(0,a.which,!0)},
$S:function(){return{func:1,args:[W.aR]}}}
B.iS.prototype={
$1:function(a){$.$get$ix().i(0,a.which,null)},
$S:function(){return{func:1,args:[W.aR]}}}
B.iT.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.mR=t
$.mS=C.b.a8(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.jv=s-C.b.G(window.innerWidth,2)
$.kW=-(t-C.b.G(window.innerHeight,2))},
$S:function(){return{func:1,args:[W.L]}}}
B.iU.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.c2=t-C.b.G(window.innerWidth,2)
$.c3=-(s-C.b.G(window.innerHeight,2))
if(a.button===2)$.$get$c0().i(0,"right",!0)
else $.$get$c0().i(0,"left",!0)},
$S:function(){return{func:1,args:[W.L]}}}
B.iV.prototype={
$1:function(a){if(a.button===2)$.$get$c0().i(0,"right",null)
else $.$get$c0().i(0,"left",null)},
$S:function(){return{func:1,args:[W.L]}}}
B.fd.prototype={
dd:function(a,b,c,d){var t
d.toString
W.ai(d,W.mZ().$1(d),new B.fe(this),!1,W.aZ)
W.ai(d,"mousemove",new B.ff(this),!1,W.L)
t=W.aX
W.ai(d,"touchstart",new B.fg(),!1,t)
W.ai(d,"touchmove",new B.fh(this),!1,t)
B.ne(null)}}
B.fe.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.aw.gee(a)*r.k3
if(C.c.a8(r.fy,t)>0)r.fy=H.Y(C.c.a8(r.fy,t))}catch(q){s=H.O(q)
P.al(s)}},
$S:function(){return{func:1,args:[W.aZ]}}}
B.ff.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=H.Y(t.go+C.b.a8($.jv,$.c2)*0.01)
s=t.id
r=$.c3
q=$.kW
t.id=H.Y(s+(r-q)*0.01)
$.c2=$.jv
$.c3=q}},
$S:function(){return{func:1,args:[W.L]}}}
B.fg.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.a5(t.clientX)
C.c.a5(t.clientY)
$.c2=s
C.c.a5(t.clientX)
$.c3=C.c.a5(t.clientY)},
$S:function(){return{func:1,args:[W.aX]}}}
B.fh.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.a5(t.clientX)
t=C.c.a5(t.clientY)
r=this.a
r.go=H.Y(r.go+C.b.a8(s,$.c2)*0.01)
r.id=H.Y(r.id+($.c3-t)*0.01)
$.c2=s
$.c3=t},
$S:function(){return{func:1,args:[W.aX]}}}
G.f0.prototype={}
G.dt.prototype={
Y:function(a,b){var t=this.d
if(H.aw(!t.D(0,a)))H.aG("uniform "+a+" already set")
t.i(0,a,b)},
bn:function(){return this.d},
j:function(a){var t,s,r,q
t=H.C(["{"+new H.aE(H.iB(this),null).j(0)+"}["+this.a+"]"],[P.q])
for(s=this.d,r=s.gC(s),r=r.gw(r);r.p();){q=r.gq()
C.a.l(t,H.f(q)+": "+H.f(s.h(0,q)))}return C.a.a4(t,"\n")}}
G.dR.prototype={}
G.dT.prototype={
c9:function(a,b,c){J.ll(this.a,b)
if(c>0)J.lL(this.a,b,c)}}
G.ew.prototype={}
G.ep.prototype={}
G.ey.prototype={
bk:function(a){var t=this.e
H.d(!t.D(0,a))
H.d(C.i.be(a,"a"))
switch($.$get$X().h(0,a).a){case"vec2":t.i(0,a,H.C([],[T.ab]))
break
case"vec3":t.i(0,a,H.C([],[T.v]))
break
case"vec4":t.i(0,a,H.C([],[T.au]))
break
case"float":t.i(0,a,H.C([],[P.K]))
break
case"uvec4":t.i(0,a,H.C([],[[P.b,P.m]]))
break
default:if(H.aw(!1))H.aG("unknown type for "+a)}},
d2:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=t&&C.a,r=0;r<4;++r){q=b[r]
p=new Float32Array(2)
o=q.a
p[1]=o[1]
p[0]=o[0]
s.l(t,new T.ab(p))}},
d3:function(a,b){var t,s,r,q,p
t=this.e.h(0,a)
for(s=t&&C.a,r=0;r<4;++r){q=b[r]
p=new T.v(new Float32Array(3))
p.M(q)
s.l(t,p)}},
d4:function(a){var t,s,r,q,p
H.d(!0)
t=this.d
s=t.length
C.a.l(this.c,new G.ep(s,s+1,s+2,s+3))
for(r=0;r<4;++r){q=a[r]
p=new T.v(new Float32Array(3))
p.M(q)
C.a.l(t,p)}},
d8:function(){var t,s,r,q,p,o,n,m,l,k
t=this.c
s=t.length
H.d(s>0)
s=new Array(t.length*6)
s.fixed$length=Array
r=H.C(s,[P.m])
for(s=this.b,q=0,p=0;!1;++p){o=s[p]
r[q]=o.geX(o)
r[q+1]=o.geY(o)
r[q+2]=o.geZ(o)
q+=3}for(s=t.length,p=0;n=t.length,p<n;n===s||(0,H.N)(t),++p){m=t[p]
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
j:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gC(s),r=r.gw(r);r.p();){q=r.gq()
p=$.$get$X().h(0,q).a
C.a.l(t,H.f(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.a4(t," ")}}
G.dr.prototype={}
G.bO.prototype={}
G.eX.prototype={
dc:function(a,b){this.Y("cDepthTest",!0)
this.Y("cDepthWrite",!1)
this.Y("cBlendEquation",b)
this.Y("cStencilFunc",$.$get$kh())}}
G.d5.prototype={
bj:function(a,b,c){var t,s
if(C.i.aF(a,0)===105){if(H.aw(C.b.aD(b.length,c)===this.z))H.aG("ChangeAttribute "+this.z)}else{t=C.b.aD(b.length,c)
if(H.aw(t===(this.ch.length/3|0)))H.aG("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.dH(t.a,34962,s)
J.jA(t.a,34962,b,35048)},
bl:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
a9:function(a,b,c){var t,s,r,q,p,o
t=J.jx(a,0)===105
if(t&&this.z===0)this.z=C.b.aD(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.j0(r.a))
this.bj(a,b,c)
q=$.$get$X().h(0,a)
if(q==null)throw H.e("Unknown canonical "+a)
p=this.x
if(H.aw(p.D(0,a)))H.aG("unexpected attribute "+a)
o=p.h(0,a)
J.dI(r.a,this.e)
r.c9(0,o,t?1:0)
s=s.h(0,a)
p=q.bm()
J.dH(r.a,34962,s)
J.jK(r.a,o,p,5126,!1,0,0)},
bi:function(a){var t,s,r,q,p
t=this.r
s=this.d
t.i(0,"aPosition",J.j0(s.a))
this.ch=a
this.bj("aPosition",a,3)
r=$.$get$X().h(0,"aPosition")
if(r==null)throw H.e("Unknown canonical aPosition")
q=this.x
H.d(q.D(0,"aPosition"))
p=q.h(0,"aPosition")
J.dI(s.a,this.e)
s.c9(0,p,0)
t=t.h(0,"aPosition")
q=r.bm()
J.dH(s.a,34962,t)
J.jK(s.a,p,q,5126,!1,0,0)},
j:function(a){var t,s,r,q
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,r=t.gC(t),r=r.gw(r);r.p();){q=r.gq()
C.a.l(s,H.f(q)+":"+t.h(0,q).length)}return"MESH["+this.a+"] "+C.a.a4(s,"  ")},
saK:function(a){this.cx=a}}
G.fk.prototype={
d5:function(a,b){var t=C.b.cG(a,b)
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
t.a7(0,0,1/(p*s))
t.a7(1,1,1/p)
t.a7(2,2,(q+r)/o)
t.a7(3,2,-1)
t.a7(2,3,2*r*q/o)},
bn:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.v(new Float32Array(H.r(3)))
o.S(r,q,p)
p=this.d
p.i(0,"uEyePosition",o)
o=this.cy
o.M(t)
t=o.a
t[12]=0
t[13]=0
t[14]=0
t[15]=1
n=-s[12]
m=-s[13]
l=-s[14]
s=J.u(n)
r=!!s.$isau
k=r?s.gay(n):1
if(!!s.$isv){j=s.gm(n)
m=s.gn(n)
l=s.gI(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
l=s.gI(n)
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
a3.M(this.db)
a3.cd(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.e2.prototype={
j:function(a){return"["+this.a+"] "+this.b+" "+this.c+" mode:"+this.d+" ["+this.e.a+"usec]"}}
G.fy.prototype={
dk:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gk(t)===s.gk(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gC(s),s=s.gw(s);s.p();){q=s.gq()
if(!t.D(0,q))C.a.l(r,q)}for(t=this.x,s=new P.bT(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.p();){q=s.d
if(!t.B(0,q))C.a.l(r,q)}return r},
dm:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gC(b),s=s.gw(s),r=this.d,q=this.y,p=this.z,o=0;s.p();){n=s.gq()
switch(J.jx(n,0)){case 117:if(q.D(0,n)){m=b.h(0,n)
if(p.D(0,n))H.iP("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$X().h(0,n)
if(l==null)H.E("unknown "+n)
H.d(q.D(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.j5(r.a,k,m)
else if(!!J.u(m).$isk5)J.lJ(r.a,k,m)
break
case"float":if(l.c===0)J.lH(r.a,k,m)
else if(!!J.u(m).$iset)J.lI(r.a,k,m)
break
case"mat4":if(l.c===0){j=H.aJ(m,"$isP").a
J.jJ(r.a,k,!1,j)}else if(!!J.u(m).$iset)J.jJ(r.a,k,!1,m)
else if(H.aw(!1))H.aG("bad unform: "+n)
break
case"mat3":if(l.c===0){j=H.aJ(m,"$isaT").a
J.jI(r.a,k,!1,j)}else if(!!J.u(m).$iset)J.jI(r.a,k,!1,m)
else if(H.aw(!1))H.aG("bad unform: "+n)
break
case"vec4":j=l.c
i=r.a
if(j===0)J.jH(i,k,H.aJ(m,"$isau").a)
else J.jH(i,k,m)
break
case"vec3":j=l.c
i=r.a
if(j===0)J.jG(i,k,H.aJ(m,"$isv").a)
else J.jG(i,k,m)
break
case"vec2":j=l.c
i=r.a
if(j===0)J.jF(i,k,H.aJ(m,"$isab").a)
else J.jF(i,k,m)
break
case"sampler2D":case"sampler2DShadow":j=C.b.a0(33984,this.ch)
J.jy(r.a,j)
j=H.aJ(m,"$isbN").b
J.c4(r.a,3553,j)
j=this.ch
J.j5(r.a,k,j)
this.ch=this.ch+1
break
case"samplerCube":H.d(n==="uCubeTexture")
j=C.b.a0(33984,this.ch)
J.jy(r.a,j)
j=H.aJ(m,"$isbN").b
J.c4(r.a,34067,j)
j=this.ch
J.j5(r.a,k,j)
this.ch=this.ch+1
break
default:H.iP("Error: unknow uniform type: "+j)
H.d(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":j=J.D(m,!0)
i=r.a
if(j)J.dJ(i,2929)
else J.j1(i,2929)
break
case"cStencilFunc":H.aJ(m,"$isdr")
j=m.a
i=r.a
if(j===1281)J.j1(i,2960)
else{J.dJ(i,2960)
i=m.b
h=m.c
J.lC(r.a,j,i,h)}break
case"cDepthWrite":J.lf(r.a,m)
break
case"cBlendEquation":H.aJ(m,"$isbO")
j=m.a
i=r.a
if(j===1281)J.j1(i,3042)
else{J.dJ(i,3042)
i=m.b
h=m.c
J.l9(r.a,i,h)
J.l8(r.a,j)}break}++o
break}}s=Date.now()
""+o
new P.az(1000*(s-new P.b7(t,!1).a)).j(0)},
d7:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t=Date.now()
s=this.d
J.lK(s.a,this.r)
this.ch=0
this.z.V(0)
for(r=b.length,q=0;q<b.length;b.length===r||(0,H.N)(b),++q){p=b[q]
this.dm(p.a,p.bn())}r=this.Q
r.V(0)
for(o=a.cy,o=o.gC(o),o=o.gw(o);o.p();)r.l(0,o.gq())
n=this.dk()
if(n.length!==0)P.al("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.f(n)))
J.dI(a.d.a,a.e)
m=this.e.f.length>0
r=a.f
o=a.bl()
l=a.Q
k=a.z
if(m)J.l6(s.a,r)
if(l!==-1){j=s.a
if(k>1)J.lj(j,r,o,l,0,k)
else J.li(j,r,o,l,0)}else{l=s.a
if(k>1)J.lh(l,r,0,o,k)
else J.lg(l,r,0,o)}if(m)J.lm(s.a)
C.a.l(c,new G.e2(this.a,a.z,a.bl(),r,P.lX(0,0,0,Date.now()-new P.b7(t,!1).a,0,0)))},
df:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.N)(t),++o){n=t[o]
r.i(0,n,J.jD(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.N)(t),++o){n=t[o]
r.i(0,n,J.jD(q.a,p,n))}}}
G.x.prototype={
bm:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.d(!1)
return-1}}}
G.bd.prototype={
bh:function(a){var t,s,r,q
H.d(this.b==null)
for(t=this.c,s=this.x,r=0;r<1;++r){q=a[r]
H.d($.$get$X().D(0,q))
H.d(!C.a.B(t,q))
C.a.l(t,q)
s.i(0,q,this.r);++this.r}C.a.bd(t)},
aE:function(a){var t,s,r,q
H.d(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.N)(a),++r){q=a[r]
if(H.aw($.$get$X().D(0,q)))H.aG("missing uniform "+q)
H.d(!C.a.B(s,q))
C.a.l(s,q)}C.a.bd(s)},
dg:function(a,b){H.d(this.b==null)
this.b=this.dn(!0,a,b)},
an:function(a){return this.dg(a,null)},
dn:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.d(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.N)(t),++o){n=t[o]
m=$.$get$X().h(0,n)
C.a.l(q,"layout (location="+H.f(p.h(0,n))+") in "+m.a+" "+H.f(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,o=0;!1;++o){k=t[o]
m=$.$get$X().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.f(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.N)(t),++o){k=t[o]
m=$.$get$X().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.f(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.N)(t),++o){k=t[o]
m=$.$get$X().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.f(k)+j+";")}C.a.l(q,"")
C.a.l(q,"void main(void) {")
C.a.J(q,b)
C.a.l(q,"}")
return C.a.a4(q,"\n")}}
G.fI.prototype={}
G.h1.prototype={
d9:function(a,b){var t=this.e
if(t!==1)J.lE(a.a,b,34046,t)
J.jE(a.a,b,10240,this.r)
J.jE(a.a,b,10241,this.f)}}
G.bN.prototype={
j:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.eC.prototype={
dh:function(a){var t,s
t=this.d
s=this.c
J.c4(t.a,s,this.b)
J.lD(t.a,s,0,6408,6408,5121,a)}}
R.dk.prototype={
cg:function(a){var t,s,r
t=this.db
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.al("size change "+H.f(s)+" "+H.f(r))
this.dx.d5(s,r)
this.z=s
this.Q=r}}
R.fM.prototype={
ds:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.mx("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.x).bu(r,"float")
r.setProperty(p,"left","")
p=C.x.bu(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.q.N(t,s)}return t},
di:function(a,b,c){var t,s,r
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
J.iZ(this.a,s)
r=this.ds(b,c,90,30)
this.d=r
J.iZ(this.a,r)
t=t.createElement("div")
this.c=t
J.iZ(this.a,t)}}
R.fN.prototype={
dl:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.z.eS(s,2)+" fps"
t=this.c;(t&&C.q).cT(t,b)
r=C.b.G(30*C.z.e4(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.q).N(t,q)}}
A.db.prototype={
j:function(a){return"NODE["+this.a+"]"}}
A.bH.prototype={}
A.fx.prototype={
d6:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.d
s=this.r
r=this.z
q=this.Q
p=t.a
t=t.b
J.l7(p.a,36160,t)
H.d(r>0&&q>0)
J.lM(p.a,this.x,this.y,r,q)
if(s!==0)J.la(p.a,s)
for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.N)(t),++o){n=t[o]
m=n.e
C.a.l(m,new G.dt(P.J(),"transforms",!1,!0))
l=new T.P(new Float32Array(16))
l.R()
for(r=n.f,q=r.length,p=n.d,k=0;k<r.length;r.length===q||(0,H.N)(r),++k)A.kO(p,r[k],l,a,m)
m.pop()}},
de:function(a,b,c){if(this.d==null)this.d=new G.ew(this.e,null,null,null,null)}}
A.iC.prototype={
$2:function(a,b){var t=536870911&a+J.an(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(){return{func:1,args:[P.m,P.n]}}}
T.aT.prototype={
M:function(a){var t,s
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
j:function(a){return"[0] "+this.P(0).j(0)+"\n[1] "+this.P(1).j(0)+"\n[2] "+this.P(2).j(0)+"\n"},
h:function(a,b){return this.a[b]},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aT){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gu:function(a){return A.dE(this.a)},
P:function(a){var t,s
t=new Float32Array(H.r(3))
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.v(t)},
e9:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
if(g===0){this.M(a)
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
T.P.prototype={
a7:function(a,b,c){H.d(a<4)
H.d(b<4)
this.a[b*4+a]=c},
M:function(a){var t,s
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
j:function(a){return"[0] "+this.P(0).j(0)+"\n[1] "+this.P(1).j(0)+"\n[2] "+this.P(2).j(0)+"\n[3] "+this.P(3).j(0)+"\n"},
h:function(a,b){return this.a[b]},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.P){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gu:function(a){return A.dE(this.a)},
P:function(a){var t,s
t=new Float32Array(H.r(4))
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.au(t)},
R:function(){var t=this.a
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
T.ab.prototype={
j:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+"]"},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.ab){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gu:function(a){return A.dE(this.a)},
h:function(a,b){return this.a[b]},
gk:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.v.prototype={
S:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
M:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
j:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+"]"},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.v){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gu:function(a){return A.dE(this.a)},
h:function(a,b){return this.a[b]},
gk:function(a){return Math.sqrt(this.gaX())},
gaX:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
aY:function(a){var t,s,r
t=Math.sqrt(this.gaX())
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
c2:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.v(new Float32Array(H.r(3)))
t.S(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gI:function(a){return this.a[2]}}
T.au.prototype={
j:function(a){var t=this.a
return H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+","+H.f(t[3])},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.au){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gu:function(a){return A.dE(this.a)},
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
gI:function(a){return this.a[2]},
gay:function(a){return this.a[3]}}
Y.iN.prototype={
$1:function(b6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
t=this.a
t.a=b6+0
s=this.c
s.go=H.Y(s.go+0.005)
r=s.k4
if(r.h(0,37)!=null)s.go=H.Y(s.go+0.03)
else if(r.h(0,39)!=null)s.go=H.Y(s.go-0.03)
if(r.h(0,38)!=null)s.id=H.Y(s.id+0.03)
else if(r.h(0,40)!=null)s.id=H.Y(s.id-0.03)
if(r.h(0,33)!=null)s.fy=H.Y(s.fy*0.99)
else if(r.h(0,34)!=null)s.fy=H.Y(s.fy*1.01)
if(r.h(0,32)!=null){s.go=0
s.id=0}r=H.Y(C.c.e5(s.id,-1.4707963267948965,1.4707963267948965))
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
l=new T.v(new Float32Array(H.r(3)))
l.S(0,1,0)
k=s.e
j=k.a
j[0]=m[12]
j[1]=m[13]
j[2]=m[14]
j=new Float32Array(H.r(3))
i=new T.v(j)
i.M(k)
j[0]=j[0]-p[0]
j[1]=j[1]-p[1]
j[2]=j[2]-p[2]
i.aY(0)
h=l.c2(i)
h.aY(0)
g=i.c2(h)
g.aY(0)
p=h.aV(k)
f=g.aV(k)
k=i.aV(k)
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
n=Math.sqrt(n.gaX())
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
b3=[]
this.d.d6(b3)
b4=[]
for(s=b3.length,b5=0;b5<b3.length;b3.length===s||(0,H.N)(b3),++b5)C.a.l(b4,b3[b5].j(0))
C.ax.gdZ(window).cn(this)
this.b.dl(t.a,C.a.a4(b4,"<br>"))},
$S:function(){return{func:1,v:true,args:[P.T]}}}
J.a.prototype.cY=J.a.prototype.j
J.bx.prototype.d_=J.bx.prototype.j
P.U.prototype.cZ=P.U.prototype.az
W.a1.prototype.aC=W.a1.prototype.K
W.bV.prototype.d0=W.bV.prototype.U;(function installTearOffs(){installTearOff(H.b1.prototype,"geA",0,0,0,null,["$0"],["aw"],0)
installTearOff(H.aj.prototype,"gcL",0,0,0,null,["$1"],["H"],2)
installTearOff(H.b0.prototype,"geg",0,0,0,null,["$1"],["W"],2)
installTearOff(P,"mN",1,0,0,null,["$1"],["mu"],1)
installTearOff(P,"mO",1,0,0,null,["$1"],["mv"],1)
installTearOff(P,"mP",1,0,0,null,["$1"],["mw"],1)
installTearOff(P,"kL",1,0,0,null,["$0"],["mL"],0)
installTearOff(P.av.prototype,"gdz",0,0,0,null,["$2","$1"],["ao","dA"],5)
installTearOff(P,"mU",1,0,0,null,["$2"],["lT"],7)
installTearOff(W,"mZ",1,0,0,null,["$1"],["lZ"],8)
installTearOff(W,"n_",1,0,0,null,["$4"],["mA"],4)
installTearOff(W,"n0",1,0,0,null,["$4"],["mB"],4)
installTearOff(W.dc.prototype,"gaZ",0,1,0,null,["$0"],["b_"],3)
installTearOff(W.ds.prototype,"gaZ",0,1,0,null,["$0"],["b_"],3)
installTearOff(R.dk.prototype,"geK",0,0,0,null,["$1"],["cg"],6)
installTearOff(Y,"l2",1,0,0,null,["$0"],["n8"],0)})();(function inheritance(){inherit(P.n,null)
var t=P.n
inherit(H.jb,t)
inherit(J.a,t)
inherit(J.dO,t)
inherit(P.U,t)
inherit(H.d3,t)
inherit(P.d_,t)
inherit(H.ch,t)
inherit(H.b5,t)
inherit(H.hZ,t)
inherit(H.b1,t)
inherit(H.hB,t)
inherit(H.b2,t)
inherit(H.hY,t)
inherit(H.hu,t)
inherit(H.bc,t)
inherit(H.h3,t)
inherit(H.ao,t)
inherit(H.aj,t)
inherit(H.b0,t)
inherit(H.fw,t)
inherit(H.ha,t)
inherit(P.b8,t)
inherit(H.dB,t)
inherit(H.aE,t)
inherit(H.af,t)
inherit(H.eO,t)
inherit(H.eQ,t)
inherit(P.hw,t)
inherit(P.dy,t)
inherit(P.av,t)
inherit(P.dw,t)
inherit(P.fP,t)
inherit(P.fQ,t)
inherit(P.b4,t)
inherit(P.io,t)
inherit(P.fF,t)
inherit(P.hW,t)
inherit(P.bT,t)
inherit(P.bG,t)
inherit(P.w,t)
inherit(P.hX,t)
inherit(P.ax,t)
inherit(P.G,t)
inherit(P.b7,t)
inherit(P.T,t)
inherit(P.az,t)
inherit(P.dn,t)
inherit(P.hG,t)
inherit(P.e6,t)
inherit(P.b,t)
inherit(P.aC,t)
inherit(P.aU,t)
inherit(P.bJ,t)
inherit(P.q,t)
inherit(P.bK,t)
inherit(W.dV,t)
inherit(W.ht,t)
inherit(W.bS,t)
inherit(W.z,t)
inherit(W.de,t)
inherit(W.bV,t)
inherit(W.ie,t)
inherit(W.ci,t)
inherit(W.dd,t)
inherit(W.i8,t)
inherit(W.dC,t)
inherit(P.hU,t)
inherit(P.i0,t)
inherit(G.f0,t)
inherit(G.dT,t)
inherit(G.ew,t)
inherit(G.ep,t)
inherit(G.ey,t)
inherit(G.dr,t)
inherit(G.bO,t)
inherit(G.e2,t)
inherit(G.x,t)
inherit(G.bd,t)
inherit(G.h1,t)
inherit(G.bN,t)
inherit(R.fM,t)
inherit(T.aT,t)
inherit(T.P,t)
inherit(T.ab,t)
inherit(T.v,t)
inherit(T.au,t)
t=J.a
inherit(J.eJ,t)
inherit(J.eK,t)
inherit(J.bx,t)
inherit(J.aO,t)
inherit(J.b9,t)
inherit(J.aP,t)
inherit(H.bA,t)
inherit(H.bb,t)
inherit(W.h,t)
inherit(W.a_,t)
inherit(W.c6,t)
inherit(W.c8,t)
inherit(W.c9,t)
inherit(W.y,t)
inherit(W.cl,t)
inherit(W.dX,t)
inherit(W.dY,t)
inherit(W.dZ,t)
inherit(W.cd,t)
inherit(W.ce,t)
inherit(W.cf,t)
inherit(W.cw,t)
inherit(W.e1,t)
inherit(W.i,t)
inherit(W.cv,t)
inherit(W.a3,t)
inherit(W.ez,t)
inherit(W.cA,t)
inherit(W.eS,t)
inherit(W.eY,t)
inherit(W.a4,t)
inherit(W.cu,t)
inherit(W.f9,t)
inherit(W.dc,t)
inherit(W.cz,t)
inherit(W.fi,t)
inherit(W.be,t)
inherit(W.a5,t)
inherit(W.cs,t)
inherit(W.ah,t)
inherit(W.di,t)
inherit(W.a7,t)
inherit(W.cr,t)
inherit(W.a8,t)
inherit(W.fO,t)
inherit(W.V,t)
inherit(W.cq,t)
inherit(W.h2,t)
inherit(W.aa,t)
inherit(W.cp,t)
inherit(W.h7,t)
inherit(W.ds,t)
inherit(W.he,t)
inherit(W.hj,t)
inherit(W.hv,t)
inherit(W.cF,t)
inherit(W.cE,t)
inherit(W.cD,t)
inherit(W.cy,t)
inherit(W.cC,t)
inherit(W.cB,t)
inherit(W.il,t)
inherit(W.im,t)
inherit(P.ap,t)
inherit(P.co,t)
inherit(P.aq,t)
inherit(P.ct,t)
inherit(P.fo,t)
inherit(P.fp,t)
inherit(P.fu,t)
inherit(P.cm,t)
inherit(P.ar,t)
inherit(P.cx,t)
inherit(P.hi,t)
inherit(P.dP,t)
inherit(P.fz,t)
inherit(P.fA,t)
inherit(P.ik,t)
inherit(P.cn,t)
t=J.bx
inherit(J.fm,t)
inherit(J.aY,t)
inherit(J.aQ,t)
inherit(J.ja,J.aO)
t=J.b9
inherit(J.d1,t)
inherit(J.d0,t)
t=P.U
inherit(H.c,t)
inherit(H.d4,t)
inherit(H.dv,t)
t=H.c
inherit(H.ba,t)
inherit(H.eP,t)
inherit(H.e5,H.d4)
t=P.d_
inherit(H.eT,t)
inherit(H.hl,t)
t=H.ba
inherit(H.by,t)
inherit(P.eR,t)
t=H.b5
inherit(H.iW,t)
inherit(H.iX,t)
inherit(H.hT,t)
inherit(H.hC,t)
inherit(H.eF,t)
inherit(H.eG,t)
inherit(H.i_,t)
inherit(H.h4,t)
inherit(H.h5,t)
inherit(H.iY,t)
inherit(H.iH,t)
inherit(H.iI,t)
inherit(H.iJ,t)
inherit(H.iK,t)
inherit(H.iL,t)
inherit(H.fY,t)
inherit(H.eL,t)
inherit(H.iD,t)
inherit(H.iE,t)
inherit(H.iF,t)
inherit(P.hq,t)
inherit(P.hp,t)
inherit(P.hr,t)
inherit(P.hs,t)
inherit(P.hH,t)
inherit(P.hL,t)
inherit(P.hI,t)
inherit(P.hJ,t)
inherit(P.hK,t)
inherit(P.hO,t)
inherit(P.hP,t)
inherit(P.hN,t)
inherit(P.hM,t)
inherit(P.fR,t)
inherit(P.fS,t)
inherit(P.ir,t)
inherit(P.i3,t)
inherit(P.i2,t)
inherit(P.i4,t)
inherit(P.eU,t)
inherit(P.e3,t)
inherit(P.e4,t)
inherit(W.iu,t)
inherit(W.hm,t)
inherit(W.hF,t)
inherit(W.fb,t)
inherit(W.fa,t)
inherit(W.ia,t)
inherit(W.ib,t)
inherit(W.ii,t)
inherit(W.ij,t)
inherit(P.iv,t)
inherit(B.iR,t)
inherit(B.iS,t)
inherit(B.iT,t)
inherit(B.iU,t)
inherit(B.iV,t)
inherit(B.fe,t)
inherit(B.ff,t)
inherit(B.fg,t)
inherit(B.fh,t)
inherit(A.iC,t)
inherit(Y.iN,t)
t=H.hu
inherit(H.bf,t)
inherit(H.bW,t)
t=P.b8
inherit(H.df,t)
inherit(H.eM,t)
inherit(H.hd,t)
inherit(H.hc,t)
inherit(H.dS,t)
inherit(H.fC,t)
inherit(P.c5,t)
inherit(P.dg,t)
inherit(P.ad,t)
inherit(P.t,t)
inherit(P.du,t)
inherit(P.aD,t)
inherit(P.a0,t)
inherit(P.dW,t)
t=H.fY
inherit(H.fL,t)
inherit(H.bm,t)
inherit(H.ho,P.c5)
t=H.bb
inherit(H.f1,t)
inherit(H.d7,t)
t=H.d7
inherit(H.bC,t)
inherit(H.bB,t)
inherit(H.bD,H.bC)
inherit(H.d8,H.bD)
inherit(H.bE,H.bB)
inherit(H.d9,H.bE)
t=H.d8
inherit(H.d6,t)
inherit(H.f2,t)
t=H.d9
inherit(H.f3,t)
inherit(H.f4,t)
inherit(H.f5,t)
inherit(H.f6,t)
inherit(H.f7,t)
inherit(H.da,t)
inherit(H.f8,t)
inherit(P.ig,P.hw)
inherit(P.i1,P.io)
inherit(P.dz,H.af)
inherit(P.fE,P.fF)
inherit(P.hS,P.fE)
inherit(P.hV,P.hS)
inherit(P.d2,P.bG)
t=P.T
inherit(P.K,t)
inherit(P.m,t)
t=P.ad
inherit(P.dj,t)
inherit(P.eD,t)
t=W.h
inherit(W.p,t)
inherit(W.br,t)
inherit(W.dU,t)
inherit(W.er,t)
inherit(W.bw,t)
inherit(W.bz,t)
inherit(W.fr,t)
inherit(W.dl,t)
inherit(W.fG,t)
inherit(W.a6,t)
inherit(W.bq,t)
inherit(W.a9,t)
inherit(W.W,t)
inherit(W.bp,t)
inherit(W.hg,t)
inherit(W.hk,t)
inherit(W.bP,t)
inherit(W.hn,t)
inherit(W.b_,t)
inherit(W.i9,t)
t=W.p
inherit(W.a1,t)
inherit(W.aN,t)
inherit(W.bn,t)
inherit(W.cc,t)
inherit(W.hy,t)
t=W.a1
inherit(W.k,t)
inherit(P.F,t)
t=W.k
inherit(W.dM,t)
inherit(W.dN,t)
inherit(W.aM,t)
inherit(W.c7,t)
inherit(W.cb,t)
inherit(W.ev,t)
inherit(W.cj,t)
inherit(W.eE,t)
inherit(W.fD,t)
inherit(W.dp,t)
inherit(W.fW,t)
inherit(W.fX,t)
inherit(W.bL,t)
inherit(W.hR,t)
inherit(W.bu,W.br)
inherit(W.dQ,W.bu)
inherit(W.b6,W.cl)
inherit(W.e_,W.ce)
inherit(W.cZ,W.cw)
inherit(W.e0,W.cZ)
inherit(W.a2,W.c6)
inherit(W.cX,W.cv)
inherit(W.eq,W.cX)
inherit(W.cH,W.cA)
inherit(W.bv,W.cH)
inherit(W.ck,W.bn)
inherit(W.eA,W.bw)
inherit(W.aF,W.i)
t=W.aF
inherit(W.aR,t)
inherit(W.L,t)
inherit(W.aX,t)
inherit(W.eZ,W.bz)
inherit(W.cR,W.cu)
inherit(W.f_,W.cR)
inherit(W.R,P.d2)
inherit(W.cS,W.cz)
inherit(W.bF,W.cS)
t=W.be
inherit(W.fl,t)
inherit(W.fB,t)
inherit(W.h9,t)
inherit(W.cT,W.cs)
inherit(W.fn,W.cT)
inherit(W.fq,W.ah)
inherit(W.bt,W.bq)
inherit(W.fH,W.bt)
inherit(W.cP,W.cr)
inherit(W.fJ,W.cP)
inherit(W.cL,W.cq)
inherit(W.h_,W.cL)
inherit(W.bs,W.bp)
inherit(W.h0,W.bs)
inherit(W.cW,W.cp)
inherit(W.h6,W.cW)
inherit(W.aZ,W.L)
inherit(W.cU,W.cF)
inherit(W.dx,W.cU)
inherit(W.cG,W.cE)
inherit(W.hx,W.cG)
inherit(W.hz,W.cf)
inherit(W.cN,W.cD)
inherit(W.hQ,W.cN)
inherit(W.cY,W.cy)
inherit(W.dA,W.cY)
inherit(W.cJ,W.cC)
inherit(W.ic,W.cJ)
inherit(W.cV,W.cB)
inherit(W.id,W.cV)
inherit(W.hA,W.ht)
inherit(W.hD,P.fP)
inherit(W.jk,W.hD)
inherit(W.hE,P.fQ)
inherit(W.ih,W.bV)
inherit(P.H,P.i0)
t=P.F
inherit(P.aB,t)
inherit(P.aL,t)
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
inherit(P.eo,t)
inherit(P.es,t)
inherit(P.eV,t)
inherit(P.eW,t)
inherit(P.fj,t)
inherit(P.bI,t)
inherit(P.fV,t)
inherit(P.hh,t)
inherit(P.bR,t)
inherit(P.i5,t)
inherit(P.i6,t)
inherit(P.i7,t)
t=P.aB
inherit(P.dL,t)
inherit(P.eu,t)
inherit(P.ae,t)
inherit(P.eB,t)
inherit(P.fU,t)
inherit(P.dq,t)
inherit(P.hf,t)
inherit(P.cI,P.co)
inherit(P.eN,P.cI)
inherit(P.cQ,P.ct)
inherit(P.fc,P.cQ)
inherit(P.fv,P.ae)
inherit(P.cO,P.cm)
inherit(P.fT,P.cO)
t=P.dq
inherit(P.fZ,t)
inherit(P.bM,t)
inherit(P.cM,P.cx)
inherit(P.h8,P.cM)
inherit(P.cK,P.cn)
inherit(P.fK,P.cK)
t=G.f0
inherit(G.fI,t)
inherit(G.dt,t)
inherit(G.d5,t)
inherit(G.fy,t)
inherit(A.fx,t)
inherit(A.bH,t)
t=G.fI
inherit(G.dR,t)
inherit(A.db,t)
inherit(B.fd,G.dR)
t=G.dt
inherit(G.eX,t)
inherit(G.fk,t)
inherit(G.eC,G.bN)
inherit(R.dk,A.fx)
inherit(R.fN,R.fM)
mixin(H.bB,P.w)
mixin(H.bC,P.w)
mixin(H.bD,H.ch)
mixin(H.bE,H.ch)
mixin(P.bG,P.w)
mixin(W.bp,P.w)
mixin(W.bq,P.w)
mixin(W.br,P.w)
mixin(W.bs,W.z)
mixin(W.bt,W.z)
mixin(W.bu,W.z)
mixin(W.cl,W.dV)
mixin(W.cF,P.w)
mixin(W.cr,P.w)
mixin(W.cy,P.w)
mixin(W.cz,P.w)
mixin(W.cA,P.w)
mixin(W.cB,P.w)
mixin(W.cC,P.w)
mixin(W.cD,P.w)
mixin(W.cE,P.w)
mixin(W.cp,P.w)
mixin(W.cq,P.w)
mixin(W.cs,P.w)
mixin(W.cu,P.w)
mixin(W.cv,P.w)
mixin(W.cw,P.w)
mixin(W.cG,W.z)
mixin(W.cH,W.z)
mixin(W.cS,W.z)
mixin(W.cT,W.z)
mixin(W.cR,W.z)
mixin(W.cW,W.z)
mixin(W.cX,W.z)
mixin(W.cY,W.z)
mixin(W.cZ,W.z)
mixin(W.cJ,W.z)
mixin(W.cL,W.z)
mixin(W.cN,W.z)
mixin(W.cP,W.z)
mixin(W.cU,W.z)
mixin(W.cV,W.z)
mixin(P.co,P.w)
mixin(P.cm,P.w)
mixin(P.ct,P.w)
mixin(P.cx,P.w)
mixin(P.cI,W.z)
mixin(P.cQ,W.z)
mixin(P.cM,W.z)
mixin(P.cO,W.z)
mixin(P.cn,P.w)
mixin(P.cK,W.z)})();(function constants(){C.o=W.aM.prototype
C.w=W.c7.prototype
C.m=W.c8.prototype
C.p=W.c9.prototype
C.x=W.b6.prototype
C.q=W.cb.prototype
C.L=W.cd.prototype
C.M=W.cj.prototype
C.r=W.ck.prototype
C.N=J.a.prototype
C.a=J.aO.prototype
C.z=J.d0.prototype
C.b=J.d1.prototype
C.c=J.b9.prototype
C.i=J.aP.prototype
C.U=J.aQ.prototype
C.Y=H.d6.prototype
C.C=W.bF.prototype
C.D=J.fm.prototype
C.E=W.di.prototype
C.J=W.dp.prototype
C.v=J.aY.prototype
C.aw=W.aZ.prototype
C.ax=W.bP.prototype
C.K=new P.hU()
C.f=new P.i1()
C.y=new P.az(0)
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
C.A=function(hooks) { return hooks; }

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
C.B=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.V=H.C(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.q])
C.W=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.X=makeConstList([])
C.t=H.C(makeConstList(["bind","if","ref","repeat","syntax"]),[P.q])
C.u=H.C(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.q])
C.Z=new G.x("vec3","vertex btangents",0)
C.d=new G.x("vec3","",0)
C.a_=new G.x("vec4","delta from light",0)
C.n=new G.x("","",0)
C.F=new G.x("vec3","vertex coordinates",0)
C.a0=new G.x("vec3","vertex binormals",0)
C.G=new G.x("vec4","for wireframe",0)
C.a1=new G.x("vec4","per vertex color",0)
C.a2=new G.x("float","for normal maps",0)
C.j=new G.x("mat4","",0)
C.a4=new G.x("mat4","",4)
C.a3=new G.x("mat4","",128)
C.e=new G.x("float","",0)
C.a5=new G.x("float","",4)
C.a6=new G.x("float","depth for shadowmaps",0)
C.h=new G.x("sampler2D","",0)
C.a7=new G.x("float","for bump maps",0)
C.a8=new G.x("vec2","texture uvs",0)
C.a9=new G.x("float","time since program start in sec",0)
C.k=new G.x("vec2","",0)
C.aa=new G.x("samplerCube","",0)
C.l=new G.x("vec4","",0)
C.ab=new G.x("vec3","vertex normals",0)
C.ac=new G.x("sampler2DShadow","",0)
C.H=new G.x("vec3","per vertex color",0)
C.I=new G.x("mat3","",0)
C.ad=new G.x("vec3","vertex tangents",0)
C.ae=H.I("ni")
C.af=H.I("nj")
C.ag=H.I("et")
C.ah=H.I("nk")
C.ai=H.I("nl")
C.aj=H.I("k5")
C.ak=H.I("nm")
C.al=H.I("k8")
C.am=H.I("aU")
C.an=H.I("q")
C.ao=H.I("ku")
C.ap=H.I("kv")
C.aq=H.I("nn")
C.ar=H.I("kw")
C.as=H.I("ax")
C.at=H.I("K")
C.au=H.I("m")
C.av=H.I("T")})();(function staticFields(){$.kd="$cachedFunction"
$.ke="$cachedInvocation"
$.jS=null
$.jQ=null
$.jm=!1
$.jq=null
$.kI=null
$.l_=null
$.iy=null
$.iG=null
$.jr=null
$.bg=null
$.bX=null
$.bY=null
$.jn=!1
$.B=C.f
$.k3=0
$.aA=null
$.j7=null
$.k2=null
$.k1=null
$.k_=null
$.jZ=null
$.jY=null
$.jX=null
$.mR=0
$.mS=0
$.jv=0
$.kW=0
$.c2=0
$.c3=0
$.nf=!1
$.kQ=0})();(function lazyInitializers(){lazy($,"jW","$get$jW",function(){return H.kT("_$dart_dartClosure")})
lazy($,"jc","$get$jc",function(){return H.kT("_$dart_js")})
lazy($,"k6","$get$k6",function(){return H.m7()})
lazy($,"k7","$get$k7",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.k3
$.k3=t+1
t="expando$key$"+t}return new P.e6(null,t,[P.m])})
lazy($,"kj","$get$kj",function(){return H.as(H.hb({
toString:function(){return"$receiver$"}}))})
lazy($,"kk","$get$kk",function(){return H.as(H.hb({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"kl","$get$kl",function(){return H.as(H.hb(null))})
lazy($,"km","$get$km",function(){return H.as(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kq","$get$kq",function(){return H.as(H.hb(void 0))})
lazy($,"kr","$get$kr",function(){return H.as(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"ko","$get$ko",function(){return H.as(H.kp(null))})
lazy($,"kn","$get$kn",function(){return H.as(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"kt","$get$kt",function(){return H.as(H.kp(void 0))})
lazy($,"ks","$get$ks",function(){return H.as(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"jj","$get$jj",function(){return P.mt()})
lazy($,"bZ","$get$bZ",function(){return[]})
lazy($,"jV","$get$jV",function(){return{}})
lazy($,"kB","$get$kB",function(){return P.je(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"jl","$get$jl",function(){return P.J()})
lazy($,"ix","$get$ix",function(){return P.k9(P.m,P.ax)})
lazy($,"c0","$get$c0",function(){return P.k9(P.q,P.ax)})
lazy($,"kh","$get$kh",function(){return new G.dr(1281,0,4294967295)})
lazy($,"jO","$get$jO",function(){return new G.bO(32774,770,771)})
lazy($,"jN","$get$jN",function(){return new G.bO(32774,770,769)})
lazy($,"X","$get$X",function(){return P.aS(["cBlendEquation",C.n,"cDepthWrite",C.n,"cDepthTest",C.n,"cStencilFunc",C.n,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColors",C.H,"aColorAlpha",C.a1,"aPosition",C.F,"aTexUV",C.a8,"aNormal",C.ab,"aBinormal",C.a0,"aCenter",C.G,"aPointSize",C.e,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.ad,"aBitangent",C.Z,"iaRotation",C.l,"iaTranslation",C.d,"iaScale",C.d,"vColor",C.H,"vTexUV",C.k,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.F,"vPositionFromLight",C.a_,"vCenter",C.G,"vDepth",C.a6,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.I,"uConvolutionMatrix",C.I,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.ac,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.aa,"uAnimationTable",C.h,"uTime",C.a9,"uCameraNear",C.e,"uCameraFar",C.e,"uFogNear",C.e,"uFogFar",C.e,"uPointSize",C.e,"uScale",C.e,"uAngle",C.e,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.e,"uShininess",C.e,"uShadowBias",C.e,"uOpacity",C.e,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.d,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a3,"uLightDescs",C.a4,"uLightCount",C.e,"uLightTypes",C.a5,"uBumpScale",C.a7,"uNormalScale",C.a2])})
lazy($,"kx","$get$kx",function(){return C.K})
lazy($,"kZ","$get$kZ",function(){var t=new G.bd("PointSpritesV",null,[],[],[],[],0,P.J())
t.bh(["aPosition"])
t.aE(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"])
t.an(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"])
return t})
lazy($,"kY","$get$kY",function(){var t=new G.bd("PointSpritesF",null,[],[],[],[],0,P.J())
t.aE(["uTexture"])
t.an(["oFragColor = texture( uTexture,  gl_PointCoord);"])
return t})
lazy($,"kM","$get$kM",function(){var t=new G.bd("bluredV",null,[],[],[],[],0,P.J())
t.bh(["aPosition"])
t.an(["gl_Position = vec4(aPosition, 1.0);"])
return t})
lazy($,"kN","$get$kN",function(){var t=new G.bd("bluredF",null,[],[],[],[],0,P.J())
t.aE(["uColorAlpha"])
t.an(["oFragColor = uColorAlpha;"])
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
mangledGlobalNames:{m:"int",K:"double",T:"num",q:"String",ax:"bool",aU:"Null",b:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.p},{func:1,ret:P.ax,args:[W.a1,P.q,P.q,W.bS]},{func:1,v:true,args:[P.n],opt:[P.bJ]},{func:1,v:true,args:[W.i]},{func:1,ret:P.m,args:[P.G,P.G]},{func:1,ret:P.q,args:[W.h]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationTimeline:J.a,AppBannerPromptResult:J.a,BarProp:J.a,Body:J.a,CacheStorage:J.a,CanvasPattern:J.a,CHROMIUMValuebuffer:J.a,CircularGeofencingRegion:J.a,Client:J.a,Clients:J.a,CompositorProxy:J.a,ConsoleBase:J.a,Coordinates:J.a,Credential:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMStringMap:J.a,EffectModel:J.a,Entry:J.a,FederatedCredential:J.a,FileEntry:J.a,FileError:J.a,Stream:J.a,DOMFileSystem:J.a,FontFace:J.a,FormData:J.a,GamepadButton:J.a,Geofencing:J.a,GeofencingRegion:J.a,Geolocation:J.a,Geoposition:J.a,Headers:J.a,HMDVRDevice:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageData:J.a,InjectedScriptHost:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,KeyframeEffect:J.a,MediaDeviceInfo:J.a,MediaDevices:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaMetadata:J.a,MediaSession:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigatorStorageUtils:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,OffscreenCanvas:J.a,PasswordCredential:J.a,PerformanceCompositeTiming:J.a,PerformanceEntry:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformanceRenderTiming:J.a,PerformanceResourceTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PositionError:J.a,PositionSensorVRDevice:J.a,Presentation:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,ReadableByteStream:J.a,ReadableByteStreamReader:J.a,ReadableStreamReader:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,Selection:J.a,ServicePort:J.a,SharedArrayBuffer:J.a,SourceInfo:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StorageInfo:J.a,StorageManager:J.a,StorageQuota:J.a,StyleMedia:J.a,StylePropertyMap:J.a,SyncManager:J.a,TextMetrics:J.a,TrackDefault:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRDevice:J.a,VREyeParameters:J.a,VRFieldOfView:J.a,VRPositionState:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkerConsole:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothAdvertisingData:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,NFC:J.a,PagePopupController:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WebKitCSSMatrix:J.a,Worklet:J.a,WorkletGlobalScope:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPreserveAspectRatio:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,CHROMIUMSubscribeUniform:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTDisjointTimerQuery:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bA,ArrayBufferView:H.bb,DataView:H.f1,Float32Array:H.d6,Float64Array:H.f2,Int16Array:H.f3,Int32Array:H.f4,Int8Array:H.f5,Uint16Array:H.f6,Uint32Array:H.f7,Uint8ClampedArray:H.da,CanvasPixelArray:H.da,Uint8Array:H.f8,HTMLAudioElement:W.k,HTMLBRElement:W.k,HTMLBaseElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLImageElement:W.k,HTMLKeygenElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMediaElement:W.k,HTMLMenuElement:W.k,HTMLMenuItemElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTextAreaElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLVideoElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,HTMLAnchorElement:W.dM,HTMLAreaElement:W.dN,AudioTrack:W.a_,AudioTrackList:W.dQ,Blob:W.c6,HTMLBodyElement:W.aM,HTMLCanvasElement:W.c7,CanvasGradient:W.c8,CanvasRenderingContext2D:W.c9,CDATASection:W.aN,CharacterData:W.aN,Comment:W.aN,ProcessingInstruction:W.aN,Text:W.aN,CompositorWorker:W.dU,CSSCharsetRule:W.y,CSSFontFaceRule:W.y,CSSGroupingRule:W.y,CSSImportRule:W.y,CSSKeyframeRule:W.y,MozCSSKeyframeRule:W.y,WebKitCSSKeyframeRule:W.y,CSSKeyframesRule:W.y,MozCSSKeyframesRule:W.y,WebKitCSSKeyframesRule:W.y,CSSMediaRule:W.y,CSSNamespaceRule:W.y,CSSPageRule:W.y,CSSRule:W.y,CSSStyleRule:W.y,CSSSupportsRule:W.y,CSSViewportRule:W.y,CSSStyleDeclaration:W.b6,MSStyleCSSProperties:W.b6,CSS2Properties:W.b6,DataTransferItemList:W.dX,DeviceAcceleration:W.dY,HTMLDivElement:W.cb,XMLDocument:W.bn,Document:W.bn,DocumentFragment:W.cc,ShadowRoot:W.cc,DOMException:W.dZ,DOMImplementation:W.cd,DOMPoint:W.e_,DOMPointReadOnly:W.ce,DOMRectReadOnly:W.cf,DOMStringList:W.e0,DOMTokenList:W.e1,Element:W.a1,AnimationEvent:W.i,AnimationPlayerEvent:W.i,ApplicationCacheErrorEvent:W.i,AutocompleteErrorEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceLightEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,GamepadEvent:W.i,GeofencingEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RelatedEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCIceCandidateEvent:W.i,RTCPeerConnectionIceEvent:W.i,SecurityPolicyViolationEvent:W.i,ServicePortConnectEvent:W.i,ServiceWorkerMessageEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,Animation:W.h,ApplicationCache:W.h,DOMApplicationCache:W.h,OfflineResourceList:W.h,BatteryManager:W.h,CanvasCaptureMediaStreamTrack:W.h,CrossOriginServiceWorkerClient:W.h,EventSource:W.h,FileReader:W.h,FontFaceSet:W.h,MediaKeySession:W.h,MediaQueryList:W.h,MediaRecorder:W.h,MediaSource:W.h,MediaStream:W.h,MediaStreamTrack:W.h,MessagePort:W.h,MIDIAccess:W.h,NetworkInformation:W.h,Notification:W.h,Performance:W.h,PermissionStatus:W.h,PresentationAvailability:W.h,PresentationReceiver:W.h,PresentationRequest:W.h,RTCDTMFSender:W.h,RTCPeerConnection:W.h,webkitRTCPeerConnection:W.h,mozRTCPeerConnection:W.h,ScreenOrientation:W.h,ServicePortCollection:W.h,ServiceWorkerContainer:W.h,ServiceWorkerRegistration:W.h,SpeechRecognition:W.h,SpeechSynthesis:W.h,SpeechSynthesisUtterance:W.h,WorkerPerformance:W.h,BluetoothDevice:W.h,BluetoothRemoteGATTCharacteristic:W.h,USB:W.h,IDBDatabase:W.h,IDBOpenDBRequest:W.h,IDBVersionChangeRequest:W.h,IDBRequest:W.h,IDBTransaction:W.h,AnalyserNode:W.h,RealtimeAnalyserNode:W.h,AudioBufferSourceNode:W.h,AudioContext:W.h,webkitAudioContext:W.h,AudioDestinationNode:W.h,AudioNode:W.h,AudioSourceNode:W.h,BiquadFilterNode:W.h,ChannelMergerNode:W.h,AudioChannelMerger:W.h,ChannelSplitterNode:W.h,AudioChannelSplitter:W.h,ConvolverNode:W.h,DelayNode:W.h,DynamicsCompressorNode:W.h,GainNode:W.h,AudioGainNode:W.h,IIRFilterNode:W.h,MediaElementAudioSourceNode:W.h,MediaStreamAudioDestinationNode:W.h,MediaStreamAudioSourceNode:W.h,OfflineAudioContext:W.h,OscillatorNode:W.h,Oscillator:W.h,PannerNode:W.h,AudioPannerNode:W.h,webkitAudioPannerNode:W.h,ScriptProcessorNode:W.h,JavaScriptAudioNode:W.h,StereoPannerNode:W.h,WaveShaperNode:W.h,EventTarget:W.h,File:W.a2,FileList:W.eq,FileWriter:W.er,HTMLFormElement:W.ev,Gamepad:W.a3,HTMLHeadElement:W.cj,History:W.ez,HTMLCollection:W.bv,HTMLFormControlsCollection:W.bv,HTMLOptionsCollection:W.bv,HTMLDocument:W.ck,XMLHttpRequest:W.eA,XMLHttpRequestUpload:W.bw,XMLHttpRequestEventTarget:W.bw,HTMLInputElement:W.eE,KeyboardEvent:W.aR,Location:W.eS,MediaList:W.eY,MIDIOutput:W.eZ,MIDIInput:W.bz,MIDIPort:W.bz,MimeType:W.a4,MimeTypeArray:W.f_,PointerEvent:W.L,MouseEvent:W.L,DragEvent:W.L,Navigator:W.f9,Attr:W.p,Node:W.p,NodeIterator:W.dc,NodeList:W.bF,RadioNodeList:W.bF,Path2D:W.fi,Perspective:W.fl,Plugin:W.a5,PluginArray:W.fn,PositionValue:W.fq,PresentationConnection:W.fr,Range:W.di,Rotation:W.fB,RTCDataChannel:W.dl,DataChannel:W.dl,HTMLSelectElement:W.fD,SharedWorker:W.fG,SourceBuffer:W.a6,SourceBufferList:W.fH,SpeechGrammar:W.a7,SpeechGrammarList:W.fJ,SpeechRecognitionResult:W.a8,Storage:W.fO,CSSStyleSheet:W.V,StyleSheet:W.V,CalcLength:W.ah,KeywordValue:W.ah,LengthValue:W.ah,NumberValue:W.ah,SimpleLength:W.ah,TransformValue:W.ah,StyleValue:W.ah,HTMLTableElement:W.dp,HTMLTableRowElement:W.fW,HTMLTableSectionElement:W.fX,HTMLTemplateElement:W.bL,TextTrack:W.a9,TextTrackCue:W.W,VTTCue:W.W,TextTrackCueList:W.h_,TextTrackList:W.h0,TimeRanges:W.h2,Touch:W.aa,TouchEvent:W.aX,TouchList:W.h6,TrackDefaultList:W.h7,Matrix:W.be,Skew:W.be,TransformComponent:W.be,Translation:W.h9,TreeWalker:W.ds,CompositionEvent:W.aF,FocusEvent:W.aF,TextEvent:W.aF,SVGZoomEvent:W.aF,UIEvent:W.aF,URL:W.he,VideoTrackList:W.hg,VTTRegionList:W.hj,WebSocket:W.hk,WheelEvent:W.aZ,Window:W.bP,DOMWindow:W.bP,Worker:W.hn,CompositorWorkerGlobalScope:W.b_,DedicatedWorkerGlobalScope:W.b_,ServiceWorkerGlobalScope:W.b_,SharedWorkerGlobalScope:W.b_,WorkerGlobalScope:W.b_,ClientRect:W.hv,ClientRectList:W.dx,DOMRectList:W.dx,CSSRuleList:W.hx,DocumentType:W.hy,DOMRect:W.hz,GamepadList:W.hQ,HTMLFrameSetElement:W.hR,NamedNodeMap:W.dA,MozNamedAttrMap:W.dA,ServiceWorker:W.i9,SpeechRecognitionResultList:W.ic,StyleSheetList:W.id,WorkerLocation:W.il,WorkerNavigator:W.im,SVGAElement:P.dL,SVGAnimateElement:P.aL,SVGAnimateMotionElement:P.aL,SVGAnimateTransformElement:P.aL,SVGAnimationElement:P.aL,SVGSetElement:P.aL,SVGFEBlendElement:P.e7,SVGFEColorMatrixElement:P.e8,SVGFEComponentTransferElement:P.e9,SVGFECompositeElement:P.ea,SVGFEConvolveMatrixElement:P.eb,SVGFEDiffuseLightingElement:P.ec,SVGFEDisplacementMapElement:P.ed,SVGFEFloodElement:P.ee,SVGFEGaussianBlurElement:P.ef,SVGFEImageElement:P.eg,SVGFEMergeElement:P.eh,SVGFEMorphologyElement:P.ei,SVGFEOffsetElement:P.ej,SVGFEPointLightElement:P.ek,SVGFESpecularLightingElement:P.el,SVGFESpotLightElement:P.em,SVGFETileElement:P.en,SVGFETurbulenceElement:P.eo,SVGFilterElement:P.es,SVGForeignObjectElement:P.eu,SVGCircleElement:P.ae,SVGEllipseElement:P.ae,SVGLineElement:P.ae,SVGPathElement:P.ae,SVGPolygonElement:P.ae,SVGPolylineElement:P.ae,SVGGeometryElement:P.ae,SVGClipPathElement:P.aB,SVGDefsElement:P.aB,SVGGElement:P.aB,SVGSwitchElement:P.aB,SVGGraphicsElement:P.aB,SVGImageElement:P.eB,SVGLength:P.ap,SVGLengthList:P.eN,SVGMarkerElement:P.eV,SVGMaskElement:P.eW,SVGNumber:P.aq,SVGNumberList:P.fc,SVGPatternElement:P.fj,SVGPoint:P.fo,SVGPointList:P.fp,SVGRect:P.fu,SVGRectElement:P.fv,SVGScriptElement:P.bI,SVGStringList:P.fT,SVGDescElement:P.F,SVGDiscardElement:P.F,SVGFEDistantLightElement:P.F,SVGFEFuncAElement:P.F,SVGFEFuncBElement:P.F,SVGFEFuncGElement:P.F,SVGFEFuncRElement:P.F,SVGFEMergeNodeElement:P.F,SVGMetadataElement:P.F,SVGStopElement:P.F,SVGStyleElement:P.F,SVGTitleElement:P.F,SVGComponentTransferFunctionElement:P.F,SVGElement:P.F,SVGSVGElement:P.fU,SVGSymbolElement:P.fV,SVGTextContentElement:P.dq,SVGTextPathElement:P.fZ,SVGTSpanElement:P.bM,SVGTextElement:P.bM,SVGTextPositioningElement:P.bM,SVGTransform:P.ar,SVGTransformList:P.h8,SVGUseElement:P.hf,SVGViewElement:P.hh,SVGViewSpec:P.hi,SVGLinearGradientElement:P.bR,SVGRadialGradientElement:P.bR,SVGGradientElement:P.bR,SVGCursorElement:P.i5,SVGFEDropShadowElement:P.i6,SVGMPathElement:P.i7,AudioBuffer:P.dP,WebGLRenderingContext:P.fz,WebGL2RenderingContext:P.fA,WebGL2RenderingContextBase:P.ik,SQLResultSetRowList:P.fK})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasPattern:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,Credential:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMStringMap:true,EffectModel:true,Entry:true,FederatedCredential:true,FileEntry:true,FileError:true,Stream:true,DOMFileSystem:true,FontFace:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageData:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PasswordCredential:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,ServicePort:true,SharedArrayBuffer:true,SourceInfo:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,TrackDefault:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPreserveAspectRatio:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,AudioTrack:true,AudioTrackList:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasGradient:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,CSSCharsetRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DocumentFragment:true,ShadowRoot:true,DOMException:true,DOMImplementation:true,DOMPoint:true,DOMPointReadOnly:false,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AudioDestinationNode:true,AudioNode:true,AudioSourceNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OfflineAudioContext:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Navigator:true,Attr:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Path2D:true,Perspective:true,Plugin:true,PluginArray:true,PositionValue:true,PresentationConnection:true,Range:true,Rotation:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,SharedWorker:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,CalcLength:true,KeywordValue:true,LengthValue:true,NumberValue:true,SimpleLength:true,TransformValue:true,StyleValue:false,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,Matrix:true,Skew:true,TransformComponent:false,Translation:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,SVGZoomEvent:true,UIEvent:false,URL:true,VideoTrackList:true,VTTRegionList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.d7.$nativeSuperclassTag="ArrayBufferView"
H.bC.$nativeSuperclassTag="ArrayBufferView"
H.bD.$nativeSuperclassTag="ArrayBufferView"
H.d8.$nativeSuperclassTag="ArrayBufferView"
H.bB.$nativeSuperclassTag="ArrayBufferView"
H.bE.$nativeSuperclassTag="ArrayBufferView"
H.d9.$nativeSuperclassTag="ArrayBufferView"
W.br.$nativeSuperclassTag="EventTarget"
W.bu.$nativeSuperclassTag="EventTarget"
W.bq.$nativeSuperclassTag="EventTarget"
W.bt.$nativeSuperclassTag="EventTarget"
W.bp.$nativeSuperclassTag="EventTarget"
W.bs.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.l0(Y.l2(),b)},[])
else (function(b){H.l0(Y.l2(),b)})([])})})()