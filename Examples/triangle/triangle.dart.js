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
a[c]=function(){a[c]=function(){H.na(b)}
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
return d?function(e){if(t===null)t=H.jm(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.jm(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.jm(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={j6:function j6(a){this.a=a},
jb:function(a,b,c,d){if(!!a.$isc)return new H.e1(a,b,[c,d])
return new H.d0(a,b,[c,d])},
eD:function(){return new P.aC("No element")},
m3:function(){return new P.aC("Too many elements")},
m2:function(){return new P.aC("Too few elements")},
dh:function(a,b,c,d){if(c-b<=32)H.mh(a,b,c,d)
else H.mg(a,b,c,d)},
mh:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.ac(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.an(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
mg:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.d(t>32)
s=C.b.J(t+1,6)
r=a3+s
q=a4-s
p=C.b.J(a3+a4,2)
o=p-s
n=p+s
t=J.ac(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.an(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.an(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.an(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.an(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.an(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.an(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.an(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.an(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.an(a5.$2(j,i),0)){h=i
i=j
j=h}t.i(a2,r,m)
t.i(a2,p,k)
t.i(a2,q,i)
t.i(a2,o,t.h(a2,a3))
t.i(a2,n,t.h(a2,a4))
g=a3+1
f=a4-1
if(J.F(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=t.h(a2,e)
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
H.dh(a2,a3,g-2,a5)
H.dh(a2,f+2,a4,a5)
if(a0)return
if(g<r&&f>q){for(;J.F(a5.$2(t.h(a2,g),l),0);)++g
for(;J.F(a5.$2(t.h(a2,f),j),0);)--f
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
break}}H.dh(a2,g,f,a5)}else H.dh(a2,g,f,a5)},
c:function c(){},
bb:function bb(){},
d_:function d_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
d0:function d0(a,b,c){this.a=a
this.b=b
this.$ti=c},
e1:function e1(a,b,c){this.a=a
this.b=b
this.$ti=c},
eO:function eO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bz:function bz(a,b,c){this.a=a
this.b=b
this.$ti=c},
dr:function dr(a,b,c){this.a=a
this.b=b
this.$ti=c},
hg:function hg(a,b,c){this.a=a
this.b=b
this.$ti=c},
cc:function cc(){},
dz:function(a,b){var t=a.af(b)
if(!u.globalState.d.cy)u.globalState.f.al()
return t},
iG:function(){--u.globalState.f.b
H.d(u.globalState.f.b>=0)},
kX:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.w(s).$isb)throw H.e(P.jH("Arguments to main must be a List: "+H.h(s)))
u.globalState=new H.hT(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$k5()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.hw(P.ja(null,H.b4),0)
r=P.p
s.seo(new H.af(0,null,null,null,null,null,0,[r,H.b3]))
s.ser(new H.af(0,null,null,null,null,null,0,[r,null]))
if(s.x){q=new H.hS()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.lY,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.mw)}if(u.globalState.x)return
s=u.globalState.a++
q=P.ag(null,null,null,r)
p=new H.bd(0,null,!1)
o=new H.b3(s,new H.af(0,null,null,null,null,null,0,[r,H.bd]),q,u.createNewIsolate(),p,new H.ap(H.iL()),new H.ap(H.iL()),!1,!1,[],P.ag(null,null,null,null),null,null,!1,!0,P.ag(null,null,null,null))
q.l(0,0)
o.bq(0,p)
u.globalState.e=o
u.globalState.z.i(0,s,o)
u.globalState.d=o
if(H.bi(a,{func:1,args:[,]}))o.af(new H.iR(t,a))
else if(H.bi(a,{func:1,args:[,,]}))o.af(new H.iS(t,a))
else o.af(a)
u.globalState.f.al()},
mw:function(a){var t=P.aU(["command","print","msg",a])
return new H.ak(!0,P.bS(null,P.p)).K(t)},
m_:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.m0()
return},
m0:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.e(new P.v("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.e(new P.v('Cannot extract URI from "'+t+'"'))},
lY:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.b2(!0,[]).W(b.data)
s=J.ac(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.mY(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.b2(!0,[]).W(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.b2(!0,[]).W(s.h(t,"replyTo"))
s=u.globalState.a++
k=P.p
j=P.ag(null,null,null,k)
i=new H.bd(0,null,!1)
h=new H.b3(s,new H.af(0,null,null,null,null,null,0,[k,H.bd]),j,u.createNewIsolate(),i,new H.ap(H.iL()),new H.ap(H.iL()),!1,!1,[],P.ag(null,null,null,null),null,null,!1,!0,P.ag(null,null,null,null))
j.l(0,0)
h.bq(0,i)
u.globalState.f.a.T(0,new H.b4(h,new H.eA(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.al()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.lv(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.al()
break
case"close":u.globalState.ch.ak(0,$.$get$k6().h(0,a))
a.terminate()
u.globalState.f.al()
break
case"log":H.lX(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
k=P.aU(["command","print","msg",t])
k=new H.ak(!0,P.bS(null,P.p)).K(k)
s.toString
self.postMessage(k)}else P.am(s.h(t,"msg"))
break
case"error":throw H.e(s.h(t,"msg"))}},
lX:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aU(["command","log","msg",a])
r=new H.ak(!0,P.bS(null,P.p)).K(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.P(q)
t=H.aI(q)
s=P.cb(t)
throw H.e(s)}},
lZ:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.kc=$.kc+("_"+s)
$.kd=$.kd+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.I(0,["spawned",new H.bf(s,r),q,t.r])
r=new H.eB(a,b,c,d,t)
if(e){t.bJ(q,q)
u.globalState.f.a.T(0,new H.b4(t,r,"start isolate"))}else r.$0()},
mj:function(a,b){var t=new H.fZ(!0,!1,null)
t.da(a,b)
return t},
mx:function(a){return new H.b2(!0,[]).W(new H.ak(!1,P.bS(null,P.p)).K(a))},
iR:function iR(a,b){this.a=a
this.b=b},
iS:function iS(a,b){this.a=a
this.b=b},
hT:function hT(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
hO:function hO(a,b){this.a=a
this.b=b},
hw:function hw(a,b){this.a=a
this.b=b},
hx:function hx(a){this.a=a},
b4:function b4(a,b,c){this.a=a
this.b=b
this.c=c},
hS:function hS(){},
eA:function eA(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eB:function eB(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hp:function hp(){},
bf:function bf(a,b){this.b=a
this.a=b},
hU:function hU(a,b){this.a=a
this.b=b},
bU:function bU(a,b,c){this.b=a
this.c=b
this.a=c},
bd:function bd(a,b,c){this.a=a
this.b=b
this.c=c},
fZ:function fZ(a,b,c){this.a=a
this.b=b
this.c=c},
h_:function h_(a,b){this.a=a
this.b=b},
h0:function h0(a,b){this.a=a
this.b=b},
ap:function ap(a){this.a=a},
ak:function ak(a,b){this.a=a
this.b=b},
b2:function b2(a,b){this.a=a
this.b=b},
mR:function(a){return u.types[a]},
n_:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.w(a).$isr},
h:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.ay(a)
if(typeof t!=="string")throw H.e(H.T(a))
return t},
me:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.fs(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aX:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
db:function(a){var t,s,r,q,p,o,n,m
t=J.w(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.K||!!J.w(a).$isb_){p=C.y(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.i.aI(q,0)===36)q=C.i.cO(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.dB(H.iu(a),0,null),u.mangledGlobalNames)},
fo:function(a){return"Instance of '"+H.db(a)+"'"},
R:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mc:function(a){return a.b?H.R(a).getUTCFullYear()+0:H.R(a).getFullYear()+0},
ma:function(a){return a.b?H.R(a).getUTCMonth()+1:H.R(a).getMonth()+1},
m6:function(a){return a.b?H.R(a).getUTCDate()+0:H.R(a).getDate()+0},
m7:function(a){return a.b?H.R(a).getUTCHours()+0:H.R(a).getHours()+0},
m9:function(a){return a.b?H.R(a).getUTCMinutes()+0:H.R(a).getMinutes()+0},
mb:function(a){return a.b?H.R(a).getUTCSeconds()+0:H.R(a).getSeconds()+0},
m8:function(a){return a.b?H.R(a).getUTCMilliseconds()+0:H.R(a).getMilliseconds()+0},
kb:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.T(a))
return a[b]},
O:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ad(!0,b,"index",null)
t=J.dG(a)
if(b<0||C.b.cv(b,t))return P.B(b,a,"index",null,t)
return P.fp(b,"index",null)},
T:function(a){return new P.ad(!0,a,null,null)},
e:function(a){var t
if(a==null)a=new P.da()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.kY})
t.name=""}else t.toString=H.kY
return t},
kY:function(){return J.ay(this.dartException)},
E:function(a){throw H.e(a)},
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
return new H.h5(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
h6:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
kn:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
j8:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.eH(a,s,t?null:b.receiver)},
P:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.iT(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aR(r,16)&8191)===10)switch(q){case 438:return t.$1(H.j8(H.h(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.h(s)+" (Error "+q+")"
return t.$1(new H.d9(p,null))}}if(a instanceof TypeError){o=$.$get$kh()
n=$.$get$ki()
m=$.$get$kj()
l=$.$get$kk()
k=$.$get$ko()
j=$.$get$kp()
i=$.$get$km()
$.$get$kl()
h=$.$get$kr()
g=$.$get$kq()
f=o.O(s)
if(f!=null)return t.$1(H.j8(s,f))
else{f=n.O(s)
if(f!=null){f.method="call"
return t.$1(H.j8(s,f))}else{f=m.O(s)
if(f==null){f=l.O(s)
if(f==null){f=k.O(s)
if(f==null){f=j.O(s)
if(f==null){f=i.O(s)
if(f==null){f=l.O(s)
if(f==null){f=h.O(s)
if(f==null){f=g.O(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.d9(s,f==null?null:f.method))}}return t.$1(new H.h8(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.di()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.ad(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.di()
return a},
aI:function(a){var t
if(a==null)return new H.dx(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dx(a,null)},
n3:function(a){if(a==null||typeof a!='object')return J.ao(a)
else return H.aX(a)},
mP:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=a.length
for(r=0;r<s;){q=r+1
H.d(t)
p=a[r]
r=q+1
H.d(t)
b.i(0,p,a[q])}return b},
mZ:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dz(b,new H.iB(a))
case 1:return H.dz(b,new H.iC(a,d))
case 2:return H.dz(b,new H.iD(a,d,e))
case 3:return H.dz(b,new H.iE(a,d,e,f))
case 4:return H.dz(b,new H.iF(a,d,e,f,g))}throw H.e(P.cb("Unsupported number of arguments for wrapped closure"))},
bY:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.mZ)
a.$identity=t
return t},
lK:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.w(c).$isb){t.$reflectionInfo=c
r=H.me(t).r}else r=c
q=d?Object.create(new H.fH().constructor.prototype):Object.create(new H.bm(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.jP(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.mR,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.jM:H.j1
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.e("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.jP(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
lH:function(a,b,c,d){var t=H.j1
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
jP:function(a,b,c){var t,s,r,q
if(c)return H.lJ(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.lH(s,b==null?r!=null:b!==r,t,b)
return q},
lI:function(a,b,c,d){var t,s
t=H.j1
s=H.jM
switch(b?-1:a){case 0:throw H.e(new H.fy("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
lJ:function(a,b){var t,s,r,q
H.lG()
t=$.jL
if(t==null){t=H.jK("receiver")
$.jL=t}s=b.$stubName
r=b.length
q=a[s]
t=H.lI(r,b==null?q!=null:b!==q,s,b)
return t},
jm:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.w(c).$isb){c.fixed$length=Array
t=c}else t=c
return H.lK(a,b,t,!!d,e,f)},
j1:function(a){return a.a},
jM:function(a){return a.c},
lG:function(){var t=$.jN
if(t==null){t=H.jK("self")
$.jN=t}return t},
jK:function(a){var t,s,r,q,p
t=new H.bm("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
no:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.au(a,"String"))},
Z:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.au(a,"double"))},
nn:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.au(a,"num"))},
mJ:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.au(a,"bool"))},
mY:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.au(a,"int"))},
n5:function(a,b){throw H.e(H.au(a,b.substring(3)))},
n4:function(a,b){var t=J.ac(b)
throw H.e(H.jO(H.db(a),t.be(b,3,t.gj(b))))},
jp:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.w(a)[b])return a
H.n5(a,b)},
aK:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.w(a)[b]
else t=!0
if(t)return a
H.n4(a,b)},
nm:function(a){if(a==null)return a
if(!!J.w(a).$isb)return a
throw H.e(H.au(a,"List"))},
kL:function(a){var t=J.w(a)
return"$S" in t?t.$S():null},
bi:function(a,b){var t
if(a==null)return!1
t=H.kL(a)
return t==null?!1:H.kR(t,b)},
nk:function(a,b){var t,s
if(a==null)return a
if($.jj)return a
$.jj=!0
try{if(H.bi(a,b))return a
t=H.aL(b,null)
s=H.au(a,t)
throw H.e(s)}finally{$.jj=!1}},
au:function(a,b){return new H.h7("type '"+H.db(a)+"' is not a subtype of type '"+b+"'")},
jO:function(a,b){return new H.dP("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
aw:function(a){if(!0===a)return!1
if(!!J.w(a).$isj4)a=a.$0()
if(typeof a==="boolean")return!a
throw H.e(H.au(a,"bool"))},
aH:function(a){throw H.e(new H.hj(a))},
d:function(a){if(H.aw(a))throw H.e(new P.c2(null))},
na:function(a){throw H.e(new P.dT(a))},
iL:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
kP:function(a){return u.getIsolateTag(a)},
L:function(a){return new H.aD(a,null)},
D:function(a,b){H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
iu:function(a){if(a==null)return
return a.$ti},
kQ:function(a,b){return H.jt(a["$as"+H.h(b)],H.iu(a))},
al:function(a,b,c){var t,s
t=H.kQ(a,b)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
aJ:function(a,b){var t,s
t=H.iu(a)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
aL:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.d(!0)
H.d(!0)
return a[0].name+H.dB(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.h(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aL(t,b)
return H.my(a,b)}return"unknown-reified-type"},
my:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aL(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aL(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aL(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.mO(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aL(l[j],b)+(" "+H.h(j))}q+="}"}return"("+q+") => "+t},
dB:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=new P.bK("")
for(r=b,q=!0,p=!0;H.d(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.d(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aL(o,c)}return p?"":"<"+s.k(0)+">"},
iv:function(a){var t,s
if(a instanceof H.b7){t=H.kL(a)
if(t!=null)return H.aL(t,null)}s=J.w(a).constructor.name
if(a==null)return s
return s+H.dB(a.$ti,0,null)},
jt:function(a,b){if(a==null)return b
H.d(typeof a=="function")
H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.jq(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.jq(a,null,b)
return b},
im:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.iu(a)
s=J.w(a)
if(s[b]==null)return!1
return H.kI(H.jt(s[d],t),c)},
dC:function(a,b,c,d){if(a==null)return a
if(H.im(a,b,c,d))return a
throw H.e(H.jO(H.db(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dB(c,0,null),u.mangledGlobalNames)))},
nh:function(a,b,c,d){if(a==null)return a
if(H.im(a,b,c,d))return a
throw H.e(H.au(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dB(c,0,null),u.mangledGlobalNames)))},
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
ni:function(a,b,c){return H.jq(a,b,H.kQ(b,c))},
a_:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.name==="aW")return!0
if('func' in b)return H.kR(a,b)
if('func' in a)return b.name==="j4"||b.name==="q"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.d(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.d(!0)
q=b[0]}else q=b
if(q!==s){p=H.aL(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.kI(H.jt(o,t),r)},
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
mF:function(a,b){var t,s,r,q,p,o
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
kR:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
if(!(H.a_(g,f)||H.a_(f,g)))return!1}}return H.mF(a.named,b.named)},
jq:function(a,b,c){H.d(typeof a=="function")
H.d(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
np:function(a){var t=$.jn
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
nl:function(a){return H.aX(a)},
nj:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
n0:function(a){var t,s,r,q,p,o
H.d(!(a instanceof P.q))
t=$.jn.$1(a)
s=$.is[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iA[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.kG.$2(a,t)
if(t!=null){s=$.is[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iA[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.jr(r)
$.is[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.iA[t]=r
return r}if(p==="-"){o=H.jr(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.kT(a,r)
if(p==="*")throw H.e(new P.dq(t))
if(u.leafTags[t]===true){o=H.jr(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.kT(a,r)},
kT:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.iJ(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
jr:function(a){return J.iJ(a,!1,null,!!a.$isr)},
n2:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.iJ(t,!1,null,!!t.$isr)
else return J.iJ(t,c,null,null)},
mW:function(){if(!0===$.jo)return
$.jo=!0
H.mX()},
mX:function(){var t,s,r,q,p,o,n,m
$.is=Object.create(null)
$.iA=Object.create(null)
H.mV()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.kU.$1(p)
if(o!=null){n=H.n2(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
mV:function(){var t,s,r,q,p,o,n
t=C.O()
t=H.bh(C.L,H.bh(C.Q,H.bh(C.x,H.bh(C.x,H.bh(C.P,H.bh(C.M,H.bh(C.N(C.y),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.jn=new H.ix(p)
$.kG=new H.iy(o)
$.kU=new H.iz(n)},
bh:function(a,b){return a(b)||b},
n9:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
fs:function fs(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
h5:function h5(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
d9:function d9(a,b){this.a=a
this.b=b},
eH:function eH(a,b,c){this.a=a
this.b=b
this.c=c},
h8:function h8(a){this.a=a},
iT:function iT(a){this.a=a},
dx:function dx(a,b){this.a=a
this.b=b},
iB:function iB(a){this.a=a},
iC:function iC(a,b){this.a=a
this.b=b},
iD:function iD(a,b,c){this.a=a
this.b=b
this.c=c},
iE:function iE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iF:function iF(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
b7:function b7(){},
fU:function fU(){},
fH:function fH(){},
bm:function bm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h7:function h7(a){this.a=a},
dP:function dP(a){this.a=a},
fy:function fy(a){this.a=a},
hj:function hj(a){this.a=a},
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
ix:function ix(a){this.a=a},
iy:function iy(a){this.a=a},
iz:function iz(a){this.a=a},
f:function(a){return a},
ii:function(a){var t,s,r
if(!!J.w(a).$iso)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
bB:function bB(){},
bc:function bc(){},
eY:function eY(){},
d2:function d2(){},
d3:function d3(){},
d4:function d4(){},
d1:function d1(){},
eZ:function eZ(){},
f_:function f_(){},
f0:function f0(){},
f1:function f1(){},
f2:function f2(){},
f3:function f3(){},
d5:function d5(){},
f4:function f4(){},
bC:function bC(){},
bD:function bD(){},
bE:function bE(){},
bF:function bF(){},
mO:function(a){var t=H.D(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
iK:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
w:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cY.prototype
return J.cX.prototype}if(typeof a=="string")return J.aR.prototype
if(a==null)return J.eF.prototype
if(typeof a=="boolean")return J.eE.prototype
if(a.constructor==Array)return J.aQ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aS.prototype
return a}if(a instanceof P.q)return a
return J.it(a)},
iJ:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
it:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.jo==null){H.mW()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.e(new P.dq("Return interceptor for "+H.h(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$j7()]
if(p!=null)return p
p=H.n0(a)
if(p!=null)return p
if(typeof a=="function")return C.R
s=Object.getPrototypeOf(a)
if(s==null)return C.A
if(s===Object.prototype)return C.A
if(typeof q=="function"){Object.defineProperty(q,$.$get$j7(),{value:C.t,enumerable:false,writable:true,configurable:true})
return C.t}return C.t},
ac:function(a){if(typeof a=="string")return J.aR.prototype
if(a==null)return a
if(a.constructor==Array)return J.aQ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aS.prototype
return a}if(a instanceof P.q)return a
return J.it(a)},
c_:function(a){if(a==null)return a
if(a.constructor==Array)return J.aQ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aS.prototype
return a}if(a instanceof P.q)return a
return J.it(a)},
kN:function(a){if(typeof a=="number")return J.ba.prototype
if(a==null)return a
if(!(a instanceof P.q))return J.b_.prototype
return a},
mQ:function(a){if(typeof a=="number")return J.ba.prototype
if(typeof a=="string")return J.aR.prototype
if(a==null)return a
if(!(a instanceof P.q))return J.b_.prototype
return a},
kO:function(a){if(typeof a=="string")return J.aR.prototype
if(a==null)return a
if(!(a instanceof P.q))return J.b_.prototype
return a},
m:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aS.prototype
return a}if(a instanceof P.q)return a
return J.it(a)},
F:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.w(a).w(a,b)},
an:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.kN(a).an(a,b)},
l_:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kN(a).aC(a,b)},
bj:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.n_(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ac(a).h(a,b)},
l0:function(a,b,c,d){return J.m(a).dl(a,b,c,d)},
ju:function(a,b){return J.kO(a).aI(a,b)},
bk:function(a,b){return J.m(a).dE(a,b)},
l1:function(a,b,c){return J.m(a).dF(a,b,c)},
jv:function(a,b){return J.m(a).bI(a,b)},
iU:function(a,b){return J.m(a).P(a,b)},
jw:function(a,b,c){return J.m(a).bL(a,b,c)},
l2:function(a,b){return J.m(a).dS(a,b)},
dD:function(a,b,c){return J.m(a).bM(a,b,c)},
l3:function(a,b,c){return J.m(a).bN(a,b,c)},
jx:function(a,b,c){return J.m(a).bO(a,b,c)},
dE:function(a,b){return J.m(a).dV(a,b)},
l4:function(a,b){return J.m(a).bP(a,b)},
l5:function(a,b,c){return J.m(a).bQ(a,b,c)},
jy:function(a,b,c,d){return J.m(a).bR(a,b,c,d)},
l6:function(a,b){return J.c_(a).bS(a,b)},
l7:function(a,b,c,d,e){return J.m(a).bT(a,b,c,d,e)},
l8:function(a,b){return J.mQ(a).R(a,b)},
iV:function(a,b,c){return J.ac(a).dZ(a,b,c)},
iW:function(a){return J.m(a).bV(a)},
l9:function(a){return J.m(a).bW(a)},
la:function(a){return J.m(a).e4(a)},
lb:function(a,b){return J.m(a).bZ(a,b)},
iX:function(a,b){return J.m(a).c_(a,b)},
lc:function(a,b,c,d){return J.m(a).c0(a,b,c,d)},
ld:function(a,b,c,d,e){return J.m(a).eb(a,b,c,d,e)},
le:function(a,b,c,d,e){return J.m(a).c1(a,b,c,d,e)},
lf:function(a,b,c,d,e,f){return J.m(a).ec(a,b,c,d,e,f)},
lg:function(a,b){return J.c_(a).u(a,b)},
dF:function(a,b){return J.m(a).c2(a,b)},
lh:function(a,b){return J.m(a).c3(a,b)},
li:function(a){return J.m(a).ed(a)},
lj:function(a,b){return J.c_(a).au(a,b)},
lk:function(a){return J.m(a).gdR(a)},
ao:function(a){return J.w(a).gv(a)},
bl:function(a){return J.c_(a).gA(a)},
dG:function(a){return J.ac(a).gj(a)},
ll:function(a){return J.m(a).gb_(a)},
lm:function(a){return J.w(a).gB(a)},
ln:function(a){return J.m(a).geC(a)},
lo:function(a){return J.m(a).gaz(a)},
iY:function(a){return J.m(a).gn(a)},
iZ:function(a){return J.m(a).gp(a)},
jz:function(a){return J.m(a).gL(a)},
j_:function(a,b){return J.m(a).a6(a,b)},
lp:function(a){return J.m(a).aB(a)},
lq:function(a,b){return J.m(a).b3(a,b)},
lr:function(a,b,c){return J.m(a).b4(a,b,c)},
jA:function(a,b,c){return J.m(a).b7(a,b,c)},
ls:function(a,b){return J.m(a).c5(a,b)},
lt:function(a,b){return J.c_(a).c7(a,b)},
lu:function(a){return J.c_(a).ew(a)},
lv:function(a,b){return J.m(a).I(a,b)},
lw:function(a,b,c,d){return J.m(a).bd(a,b,c,d)},
lx:function(a){return J.kO(a).eF(a)},
ay:function(a){return J.w(a).k(a)},
ly:function(a,b,c,d){return J.m(a).eH(a,b,c,d)},
lz:function(a,b,c){return J.m(a).ce(a,b,c)},
lA:function(a,b,c){return J.m(a).cf(a,b,c)},
j0:function(a,b,c){return J.m(a).cg(a,b,c)},
lB:function(a,b,c){return J.m(a).ci(a,b,c)},
jB:function(a,b,c){return J.m(a).cj(a,b,c)},
jC:function(a,b,c){return J.m(a).ck(a,b,c)},
jD:function(a,b,c){return J.m(a).cl(a,b,c)},
jE:function(a,b,c,d){return J.m(a).cm(a,b,c,d)},
jF:function(a,b,c,d){return J.m(a).cn(a,b,c,d)},
lC:function(a,b){return J.m(a).cp(a,b)},
lD:function(a,b,c){return J.m(a).eI(a,b,c)},
jG:function(a,b,c,d,e,f,g){return J.m(a).cr(a,b,c,d,e,f,g)},
lE:function(a,b,c,d,e){return J.m(a).cs(a,b,c,d,e)},
a:function a(){},
eE:function eE(){},
eF:function eF(){},
by:function by(){},
fi:function fi(){},
b_:function b_(){},
aS:function aS(){},
aQ:function aQ(a){this.$ti=a},
j5:function j5(a){this.$ti=a},
dK:function dK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ba:function ba(){},
cY:function cY(){},
cX:function cX(){},
aR:function aR(){}},P={
mm:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.mG()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.bY(new P.hl(t),1)).observe(s,{childList:true})
return new P.hk(t,s,r)}else if(self.setImmediate!=null)return P.mH()
return P.mI()},
mn:function(a){++u.globalState.f.b
self.scheduleImmediate(H.bY(new P.hm(a),0))},
mo:function(a){++u.globalState.f.b
self.setImmediate(H.bY(new P.hn(a),0))},
mp:function(a){P.je(C.v,a)},
mB:function(a,b){if(H.bi(a,{func:1,args:[P.aW,P.aW]})){b.toString
return a}else{b.toString
return a}},
mr:function(a,b){var t,s,r
H.d(b.a<4)
H.d(!(a instanceof P.av))
H.d(b.a===0)
b.a=1
try{a.cd(new P.hD(b),new P.hE(b))}catch(r){t=H.P(r)
s=H.aI(r)
P.n6(new P.hF(b,t,s))}},
kx:function(a,b){var t,s,r,q
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
P.bO(b,q)}else{q=b.c
H.d(s<=1)
b.a=2
b.c=a
a.bB(q)}},
bO:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.ij(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bO(t.a,b)}s=t.a
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
P.ij(null,null,p,o,s)
return}s=$.C
if(s==null?l!=null:s!==l){H.d(l!=null)
s=$.C
H.d(l==null?s!=null:l!==s)
j=$.C
$.C=l
i=j}else i=null
s=b.c
if(s===8)new P.hJ(t,r,q,b).$0()
else if(p){if((s&1)!==0)new P.hI(r,b,m).$0()}else if((s&2)!==0)new P.hH(t,r,b).$0()
if(i!=null){H.d(!0)
$.C=i}s=r.b
if(!!J.w(s).$iseu){if(s.a>=4){H.d(o.a<4)
h=o.c
o.c=null
b=o.ad(h)
H.d(o.a<4)
H.d(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.kx(s,o)
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
mA:function(){var t,s
for(;t=$.bg,t!=null;){$.bW=null
s=t.b
$.bg=s
if(s==null)$.bV=null
t.a.$0()}},
mE:function(){$.jk=!0
try{P.mA()}finally{$.bW=null
$.jk=!1
if($.bg!=null)$.$get$jg().$1(P.kJ())}},
kE:function(a){var t=new P.ds(a,null)
if($.bg==null){$.bV=t
$.bg=t
if(!$.jk)$.$get$jg().$1(P.kJ())}else{$.bV.b=t
$.bV=t}},
mD:function(a){var t,s,r
t=$.bg
if(t==null){P.kE(a)
$.bW=$.bV
return}s=new P.ds(a,null)
r=$.bW
if(r==null){s.b=t
$.bW=s
$.bg=s}else{s.b=r.b
r.b=s
$.bW=s
if(s.b==null)$.bV=s}},
n6:function(a){var t=$.C
if(C.f===t){P.il(null,null,C.f,a)
return}t.toString
P.il(null,null,t,t.aU(a))},
mk:function(a,b){var t=$.C
if(t===C.f){t.toString
return P.je(a,b)}return P.je(a,t.aU(b))},
je:function(a,b){var t=C.b.J(a.a,1000)
return H.mj(t<0?0:t,b)},
jf:function(a){var t,s
H.d(a!=null)
t=$.C
H.d(a==null?t!=null:a!==t)
s=$.C
$.C=a
return s},
ij:function(a,b,c,d,e){var t={}
t.a=d
P.mD(new P.ik(t,e))},
kC:function(a,b,c,d){var t,s
if($.C===c)return d.$0()
t=P.jf(c)
try{s=d.$0()
return s}finally{s=t
H.d(s!=null)
$.C=s}},
kD:function(a,b,c,d,e){var t,s
if($.C===c)return d.$1(e)
t=P.jf(c)
try{s=d.$1(e)
return s}finally{s=t
H.d(s!=null)
$.C=s}},
mC:function(a,b,c,d,e,f){var t,s
if($.C===c)return d.$2(e,f)
t=P.jf(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.d(s!=null)
$.C=s}},
il:function(a,b,c,d){var t=C.f!==c
if(t)d=!(!t||!1)?c.aU(d):c.dT(d)
P.kE(d)},
hl:function hl(a){this.a=a},
hk:function hk(a,b,c){this.a=a
this.b=b
this.c=c},
hm:function hm(a){this.a=a},
hn:function hn(a){this.a=a},
hr:function hr(){},
i9:function i9(a,b){this.a=a
this.$ti=b},
du:function du(a,b,c,d,e,f){var _=this
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
hC:function hC(a,b){this.a=a
this.b=b},
hG:function hG(a,b){this.a=a
this.b=b},
hD:function hD(a){this.a=a},
hE:function hE(a){this.a=a},
hF:function hF(a,b,c){this.a=a
this.b=b
this.c=c},
hJ:function hJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hK:function hK(a){this.a=a},
hI:function hI(a,b,c){this.a=a
this.b=b
this.c=c},
hH:function hH(a,b,c){this.a=a
this.b=b
this.c=c},
ds:function ds(a,b){this.a=a
this.b=b},
fL:function fL(){},
fN:function fN(a){this.a=a},
fO:function fO(a,b){this.a=a
this.b=b},
fM:function fM(){},
b6:function b6(a,b){this.a=a
this.b=b},
ih:function ih(){},
ik:function ik(a,b){this.a=a
this.b=b},
hW:function hW(){},
hY:function hY(a,b){this.a=a
this.b=b},
hX:function hX(a,b){this.a=a
this.b=b},
hZ:function hZ(a,b){this.a=a
this.b=b},
k8:function(a,b){return new H.af(0,null,null,null,null,null,0,[a,b])},
Q:function(){return new H.af(0,null,null,null,null,null,0,[null,null])},
aU:function(a){return H.mP(a,new H.af(0,null,null,null,null,null,0,[null,null]))},
bS:function(a,b){return new P.dv(0,null,null,null,null,null,0,[a,b])},
mv:function(){var t=Object.create(null)
H.d(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
m1:function(a,b,c){var t,s
if(P.jl(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$bX()
C.a.l(s,a)
try{P.mz(a,t)}finally{H.d(C.a.gax(s)===a)
s.pop()}s=P.kg(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eC:function(a,b,c){var t,s,r
if(P.jl(a))return b+"..."+c
t=new P.bK(b)
s=$.$get$bX()
C.a.l(s,a)
try{r=t
r.a=P.kg(r.ga3(),a,", ")}finally{H.d(C.a.gax(s)===a)
s.pop()}s=t
s.a=s.ga3()+c
s=t.ga3()
return s.charCodeAt(0)==0?s:s},
jl:function(a){var t,s
for(t=0;s=$.$get$bX(),t<s.length;++t)if(a===s[t])return!0
return!1},
mz:function(a,b){var t,s,r,q,p,o,n,m,l,k
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
ag:function(a,b,c,d){return new P.hP(0,null,null,null,null,null,0,[d])},
j9:function(a,b){var t,s
t=P.ag(null,null,null,b)
for(s=J.bl(a);s.q();)t.l(0,s.gt())
return t},
m4:function(a){var t,s,r
t={}
if(P.jl(a))return"{...}"
s=new P.bK("")
try{C.a.l($.$get$bX(),a)
r=s
r.a=r.ga3()+"{"
t.a=!0
a.au(0,new P.eP(t,s))
t=s
t.a=t.ga3()+"}"}finally{t=$.$get$bX()
H.d(C.a.gax(t)===a)
t.pop()}t=s.ga3()
return t.charCodeAt(0)==0?t:t},
ja:function(a,b){var t=new P.eM(null,0,0,0,[b])
t.d4(a,b)
return t},
dv:function dv(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hP:function hP(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hQ:function hQ(a,b,c){this.a=a
this.b=b
this.c=c},
bR:function bR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hN:function hN(){},
cZ:function cZ(){},
x:function x(){},
eP:function eP(a,b){this.a=a
this.b=b},
eM:function eM(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hR:function hR(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fB:function fB(){},
fA:function fA(){},
bH:function bH(){},
kg:function(a,b,c){var t=J.bl(b)
if(!t.q())return a
if(c.length===0){do a+=H.h(t.gt())
while(t.q())}else{a+=H.h(t.gt())
for(;t.q();)a=a+c+H.h(t.gt())}return a},
lL:function(a,b){return J.l8(a,b)},
lN:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.h(t)
if(t>=10)return s+"00"+H.h(t)
return s+"000"+H.h(t)},
lO:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c5:function(a){if(a>=10)return""+a
return"0"+a},
j3:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ay(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lS(a)},
lS:function(a){var t=J.w(a)
if(!!t.$isb7)return t.k(a)
return H.fo(a)},
jH:function(a){return new P.ad(!1,null,null,a)},
jI:function(a,b,c){return new P.ad(!0,a,b,c)},
lF:function(a){return new P.ad(!1,null,a,"Must not be null")},
fp:function(a,b,c){return new P.dd(null,null,!0,a,b,"Value not in range")},
aY:function(a,b,c,d,e){return new P.dd(b,c,!0,a,d,"Invalid value")},
ke:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.aY(a,0,c,"start",f))
if(a>b||b>c)throw H.e(P.aY(b,a,c,"end",f))
return b},
B:function(a,b,c,d,e){var t=e!=null?e:J.dG(b)
return new P.ey(b,t,!0,a,c,"Index out of range")},
cb:function(a){return new P.hB(a)},
k9:function(a,b,c){var t,s
t=H.D([],[c])
for(s=J.bl(a);s.q();)C.a.l(t,s.gt())
if(b)return t
t.fixed$length=Array
return t},
am:function(a){H.iK(H.h(a))},
ax:function ax(){},
I:function I(){},
bn:function bn(a,b){this.a=a
this.b=b},
M:function M(){},
aP:function aP(a){this.a=a},
e_:function e_(){},
e0:function e0(){},
b9:function b9(){},
c2:function c2(a){this.a=a},
da:function da(){},
ad:function ad(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dd:function dd(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ey:function ey(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
v:function v(a){this.a=a},
dq:function dq(a){this.a=a},
aC:function aC(a){this.a=a},
a1:function a1(a){this.a=a},
di:function di(){},
dT:function dT(a){this.a=a},
hB:function hB(a){this.a=a},
e2:function e2(a,b,c){this.a=a
this.b=b
this.$ti=c},
p:function p(){},
V:function V(){},
cW:function cW(){},
b:function b(){},
aB:function aB(){},
aW:function aW(){},
U:function U(){},
q:function q(){},
bJ:function bJ(){},
u:function u(){},
bK:function bK(a){this.a=a},
iq:function(a){var t,s,r,q,p
if(a==null)return
t=P.Q()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.J)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
mM:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.lj(a,new P.ip(t))
return t},
jZ:function(){var t=$.jY
if(t==null){t=J.iV(window.navigator.userAgent,"Opera",0)
$.jY=t}return t},
lP:function(){var t,s
t=$.jV
if(t!=null)return t
s=$.jW
if(s==null){s=J.iV(window.navigator.userAgent,"Firefox",0)
$.jW=s}if(s)t="-moz-"
else{s=$.jX
if(s==null){s=!P.jZ()&&J.iV(window.navigator.userAgent,"Trident/",0)
$.jX=s}if(s)t="-ms-"
else t=P.jZ()?"-o-":"-webkit-"}$.jV=t
return t},
ip:function ip(a){this.a=a},
hV:function hV(){},
K:function K(){},
dH:function dH(){},
aM:function aM(){},
e3:function e3(){},
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
ep:function ep(){},
er:function er(){},
ae:function ae(){},
aA:function aA(){},
ex:function ex(){},
aq:function aq(){},
eI:function eI(){},
eQ:function eQ(){},
eR:function eR(){},
ar:function ar(){},
f8:function f8(){},
fg:function fg(){},
fk:function fk(){},
fl:function fl(){},
fq:function fq(){},
fr:function fr(){},
bI:function bI(){},
fP:function fP(){},
H:function H(){},
fQ:function fQ(){},
fR:function fR(){},
dk:function dk(){},
fV:function fV(){},
bM:function bM(){},
as:function as(){},
h3:function h3(){},
ha:function ha(){},
hc:function hc(){},
hd:function hd(){},
bP:function bP(){},
i_:function i_(){},
i0:function i0(){},
i1:function i1(){},
cx:function cx(){},
cj:function cj(){},
co:function co(){},
ct:function ct(){},
cH:function cH(){},
cI:function cI(){},
cK:function cK(){},
cQ:function cQ(){},
dL:function dL(){},
fv:function fv(){},
fw:function fw(){},
id:function id(){},
fG:function fG(){},
cy:function cy(){},
cL:function cL(){}},W={
lQ:function(a,b,c){var t,s
t=document.body
s=(t&&C.n).N(t,a,b,c)
s.toString
t=new H.dr(new W.S(s),new W.io(),[W.t])
return t.ga2(t)},
lR:function(a){return"wheel"},
bp:function(a){var t,s,r
t="element tag unavailable"
try{s=J.ln(a)
if(typeof s==="string")t=a.tagName}catch(r){H.P(r)}return t},
mq:function(a,b){return document.createElement(a)},
b5:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kA:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
aj:function(a,b,c,d,e){var t=c==null?null:W.kF(new W.hA(c))
t=new W.hz(0,a,b,t,!1,[e])
t.dg(a,b,c,!1,e)
return t},
ky:function(a){var t,s
t=document.createElement("a")
s=new W.i2(t,window.location)
s=new W.bQ(s)
s.dh(a)
return s},
mt:function(a,b,c,d){return!0},
mu:function(a,b,c,d){var t,s,r,q,p
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
kB:function(){var t=P.u
t=new W.ia(P.j9(C.q,t),P.ag(null,null,null,t),P.ag(null,null,null,t),P.ag(null,null,null,t),null)
t.dj(null,new H.bz(C.q,new W.ib(),[H.aJ(C.q,0),null]),["TEMPLATE"],null)
return t},
kF:function(a){var t=$.C
if(t===C.f)return a
return t.dU(a)},
l:function l(){},
dI:function dI(){},
dJ:function dJ(){},
a0:function a0(){},
dM:function dM(){},
c3:function c3(){},
aN:function aN(){},
c4:function c4(){},
dO:function dO(){},
aO:function aO(){},
dR:function dR(){},
z:function z(){},
b8:function b8(){},
dS:function dS(){},
dU:function dU(){},
dV:function dV(){},
c6:function c6(){},
bo:function bo(){},
c7:function c7(){},
dW:function dW(){},
c8:function c8(){},
dX:function dX(){},
c9:function c9(){},
ca:function ca(){},
dY:function dY(){},
dZ:function dZ(){},
a2:function a2(){},
io:function io(){},
k:function k(){},
j:function j(){},
a3:function a3(){},
en:function en(){},
eo:function eo(){},
es:function es(){},
a4:function a4(){},
cf:function cf(){},
ev:function ev(){},
bw:function bw(){},
cg:function cg(){},
ew:function ew(){},
bx:function bx(){},
ez:function ez(){},
aT:function aT(){},
eN:function eN(){},
eT:function eT(){},
eV:function eV(){},
bA:function bA(){},
a5:function a5(){},
eW:function eW(){},
N:function N(){},
f5:function f5(){},
S:function S(a){this.a=a},
t:function t(){},
d6:function d6(){},
bG:function bG(){},
ff:function ff(){},
fh:function fh(){},
a6:function a6(){},
fj:function fj(){},
fm:function fm(){},
fn:function fn(){},
dc:function dc(){},
fx:function fx(){},
de:function de(){},
fz:function fz(){},
fC:function fC(){},
a7:function a7(){},
fD:function fD(){},
a8:function a8(){},
fF:function fF(){},
a9:function a9(){},
fK:function fK(){},
W:function W(){},
ai:function ai(){},
dj:function dj(){},
fS:function fS(){},
fT:function fT(){},
bL:function bL(){},
aa:function aa(){},
X:function X(){},
fW:function fW(){},
fX:function fX(){},
fY:function fY(){},
ab:function ab(){},
aZ:function aZ(){},
h1:function h1(){},
h2:function h2(){},
be:function be(){},
h4:function h4(){},
dn:function dn(){},
aE:function aE(){},
h9:function h9(){},
hb:function hb(){},
he:function he(){},
hf:function hf(){},
b0:function b0(){},
bN:function bN(){},
hh:function hh(a){this.a=a},
hi:function hi(){},
b1:function b1(){},
hq:function hq(){},
dt:function dt(){},
hs:function hs(){},
ht:function ht(){},
hu:function hu(){},
hL:function hL(){},
hM:function hM(){},
dw:function dw(){},
i3:function i3(){},
i6:function i6(){},
i7:function i7(){},
ie:function ie(){},
ig:function ig(){},
ho:function ho(){},
hv:function hv(a){this.a=a},
hy:function hy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jh:function jh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hz:function hz(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
hA:function hA(a){this.a=a},
bQ:function bQ(a){this.a=a},
A:function A(){},
d8:function d8(a){this.a=a},
f7:function f7(a){this.a=a},
f6:function f6(a,b,c){this.a=a
this.b=b
this.c=c},
bT:function bT(){},
i4:function i4(){},
i5:function i5(){},
ia:function ia(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
ib:function ib(){},
i8:function i8(){},
cd:function cd(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
d7:function d7(){},
i2:function i2(a,b){this.a=a
this.b=b},
dy:function dy(a){this.a=a},
ic:function ic(a){this.a=a},
bq:function bq(){},
br:function br(){},
bs:function bs(){},
bt:function bt(){},
bu:function bu(){},
bv:function bv(){},
ch:function ch(){},
cB:function cB(){},
cn:function cn(){},
ck:function ck(){},
cu:function cu(){},
cv:function cv(){},
cw:function cw(){},
cz:function cz(){},
cA:function cA(){},
ci:function ci(){},
cl:function cl(){},
cm:function cm(){},
cp:function cp(){},
cq:function cq(){},
cr:function cr(){},
cs:function cs(){},
cC:function cC(){},
cD:function cD(){},
cE:function cE(){},
cO:function cO(){},
cP:function cP(){},
cM:function cM(){},
cN:function cN(){},
cS:function cS(){},
cT:function cT(){},
cU:function cU(){},
cV:function cV(){},
cF:function cF(){},
cG:function cG(){},
cJ:function cJ(){},
cR:function cR(){}},B={
n7:function(a){var t,s
t=document
s=W.aT
W.aj(t,"keydown",new B.iM(),!1,s)
W.aj(t,"keyup",new B.iN(),!1,s)
if(!$.n8)W.aj(t,"mousemove",new B.iO(),!1,W.N)
s=W.N
W.aj(t,"mousedown",new B.iP(),!1,s)
W.aj(t,"mouseup",new B.iQ(),!1,s)},
m5:function(a,b,c,d){var t,s,r,q
t=new Float32Array(H.f(3))
s=$.$get$ir()
r=$.$get$bZ()
q=new T.G(new Float32Array(H.f(16)))
q.F()
q=new B.f9(a,b,c,0,new T.i(t),-0.02,s,r,q,new T.i(new Float32Array(H.f(3))),new T.i(new Float32Array(H.f(3))),new T.i(new Float32Array(H.f(3))),new T.i(new Float32Array(H.f(3))),"camera:orbit",!1,!0)
q.d6(a,b,c,d)
return q},
iM:function iM(){},
iN:function iN(){},
iO:function iO(){},
iP:function iP(){},
iQ:function iQ(){},
f9:function f9(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
fa:function fa(a){this.a=a},
fb:function fb(a){this.a=a},
fc:function fc(){},
fd:function fd(a){this.a=a},
lM:function(d1,d2,d3,d4,d5,d6,d7,d8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0
t=-d6
s=-d7
r=new T.i(new Float32Array(H.f(3)))
r.m(t,s,d8)
q=new T.i(new Float32Array(H.f(3)))
q.m(d6,s,d8)
p=new T.i(new Float32Array(H.f(3)))
p.m(d6,d7,d8)
o=new T.i(new Float32Array(H.f(3)))
o.m(t,d7,d8)
n=-d8
m=new T.i(new Float32Array(H.f(3)))
m.m(t,s,n)
l=new T.i(new Float32Array(H.f(3)))
l.m(t,d7,n)
k=new T.i(new Float32Array(H.f(3)))
k.m(d6,d7,n)
j=new T.i(new Float32Array(H.f(3)))
j.m(d6,s,n)
i=new T.i(new Float32Array(H.f(3)))
i.m(t,d7,n)
h=new T.i(new Float32Array(H.f(3)))
h.m(t,d7,d8)
g=new T.i(new Float32Array(H.f(3)))
g.m(d6,d7,d8)
f=new T.i(new Float32Array(H.f(3)))
f.m(d6,d7,n)
e=new T.i(new Float32Array(H.f(3)))
e.m(d6,s,d8)
d=new T.i(new Float32Array(H.f(3)))
d.m(t,s,d8)
c=new T.i(new Float32Array(H.f(3)))
c.m(t,s,n)
b=new T.i(new Float32Array(H.f(3)))
b.m(d6,s,n)
a=new T.i(new Float32Array(H.f(3)))
a.m(d6,s,n)
a0=new T.i(new Float32Array(H.f(3)))
a0.m(d6,d7,n)
a1=new T.i(new Float32Array(H.f(3)))
a1.m(d6,d7,d8)
a2=new T.i(new Float32Array(H.f(3)))
a2.m(d6,s,d8)
a3=new T.i(new Float32Array(H.f(3)))
a3.m(t,s,n)
a4=new T.i(new Float32Array(H.f(3)))
a4.m(t,s,d8)
s=new T.i(new Float32Array(H.f(3)))
s.m(t,d7,d8)
a5=new T.i(new Float32Array(H.f(3)))
a5.m(t,d7,n)
n=new Float32Array(H.f(2))
n[0]=d3
n[1]=d5
t=new Float32Array(H.f(2))
t[0]=d2
t[1]=d5
a6=new Float32Array(H.f(2))
a6[0]=d2
a6[1]=d4
a7=new Float32Array(H.f(2))
a7[0]=d3
a7[1]=d4
a8=new Float32Array(H.f(2))
a8[0]=d2
a8[1]=d5
a9=new Float32Array(H.f(2))
a9[0]=d2
a9[1]=d4
b0=new Float32Array(H.f(2))
b0[0]=d3
b0[1]=d4
b1=new Float32Array(H.f(2))
b1[0]=d3
b1[1]=d5
b2=new Float32Array(H.f(2))
b2[0]=d3
b2[1]=d4
b3=new Float32Array(H.f(2))
b3[0]=d3
b3[1]=d5
b4=new Float32Array(H.f(2))
b4[0]=d2
b4[1]=d5
b5=new Float32Array(H.f(2))
b5[0]=d2
b5[1]=d4
b6=new Float32Array(H.f(2))
b6[0]=d2
b6[1]=d4
b7=new Float32Array(H.f(2))
b7[0]=d3
b7[1]=d4
b8=new Float32Array(H.f(2))
b8[0]=d3
b8[1]=d5
b9=new Float32Array(H.f(2))
b9[0]=d2
b9[1]=d5
c0=new Float32Array(H.f(2))
c0[0]=d2
c0[1]=d5
c1=new Float32Array(H.f(2))
c1[0]=d2
c1[1]=d4
c2=new Float32Array(H.f(2))
c2[0]=d3
c2[1]=d4
c3=new Float32Array(H.f(2))
c3[0]=d3
c3[1]=d5
c4=new Float32Array(H.f(2))
c4[0]=d3
c4[1]=d5
c5=new Float32Array(H.f(2))
c5[0]=d2
c5[1]=d5
c6=new Float32Array(H.f(2))
c6[0]=d2
c6[1]=d4
c7=new Float32Array(H.f(2))
c7[0]=d3
c7[1]=d4
c8=new G.ce(!1,[],[],[],P.Q())
c8.ao("aTexUV")
c8.ao("aNormal")
c8.bf(6)
c8.aH([r,q,p,o,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,s,a5])
c8.aG("aTexUV",[new T.n(n),new T.n(t),new T.n(a6),new T.n(a7),new T.n(a8),new T.n(a9),new T.n(b0),new T.n(b1),new T.n(b2),new T.n(b3),new T.n(b4),new T.n(b5),new T.n(b6),new T.n(b7),new T.n(b8),new T.n(b9),new T.n(c0),new T.n(c1),new T.n(c2),new T.n(c3),new T.n(c4),new T.n(c5),new T.n(c6),new T.n(c7)])
for(c9=0;t=$.$get$kw(),c9<6;++c9){d0=t[c9]
c8.cV("aNormal",[d0,d0,d0,d0])}return c8}},G={
ml:function(a){var t,s,r
t=a.split("\n")
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.h(t[s])}return C.a.aj(t,"\n")},
kv:function(a,b,c){var t,s,r,q
t=J.m(a)
s=t.bX(a,b)
t.ba(a,s,c)
t.bU(a,s)
r=t.b6(a,s,35713)
if(r!=null&&!r){q=t.b5(a,s)
P.am("E:Compilation failed:")
P.am("E:"+G.ml(c))
P.am("E:Failure:")
P.am(C.i.a1("E:",q))
throw H.e(q)}return s},
ka:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
d.C(b)
d.aD(a)
e.C(c)
e.aD(a)
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
t=Math.sqrt(e.gay())
if(t===0)return!1
e.cA(0,-1/t)
return!0},
jc:function(a){var t=new G.eS(P.Q(),a,!1,!0)
t.d5(a)
return t},
k2:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.iY(a[s])
b[t+1]=J.iZ(a[s])
b[t+2]=J.jz(a[s])}return b},
lU:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.iY(a[s])
b[t+1]=J.iZ(a[s])}return b},
lV:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.iY(a[s])
b[t+1]=J.iZ(a[s])
b[t+2]=J.jz(a[s])
b[t+3]=J.lo(a[s])}return b},
lT:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.bj(a[s],0)
b[t+1]=J.bj(a[s],1)
b[t+2]=J.bj(a[s],2)
b[t+3]=J.bj(a[s],3)}return b},
ms:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
for(t=a.e,s=t.gE(t),s=s.gA(s),r=b.x,q=[[P.b,P.p]],p=[P.M],o=[T.aG],n=[T.i],m=[T.n];s.q();){l=s.gt()
if(!r.G(0,l)){k="Dropping unnecessary attribute: "+H.h(l)
if($.kM>0)H.iK("I: "+k)
continue}j=t.h(0,l)
switch($.$get$Y().h(0,l).a){case"vec2":b.a9(l,G.lU(H.dC(j,"$isb",m,"$asb"),null),2)
break
case"vec3":b.a9(l,G.k2(H.dC(j,"$isb",n,"$asb"),null),3)
break
case"vec4":b.a9(l,G.lV(H.dC(j,"$isb",o,"$asb"),null),4)
break
case"float":b.a9(l,new Float32Array(H.ii(H.dC(j,"$isb",p,"$asb"))),1)
break
case"uvec4":b.a9(l,G.lT(H.dC(j,"$isb",q,"$asb"),null),4)
break
default:if(H.aw(!1))H.aH("unknown type for "+H.h(l)+" ["+J.lm(j[0]).k(0)+"] ["+new H.aD(H.iv(j),null).k(0)+"] "+H.h(j))}}},
k3:function(a,b,c){var t,s,r,q,p,o,n,m
t=b.d
s=b.e.x
r=P.Q()
q=J.la(t.a)
p=new G.eU(t,q,4,r,s,null,0,-1,null,null,P.Q(),"meshdata:"+a,!1,!0)
o=G.k2(c.d,null)
r.i(0,"aPosition",J.iW(t.a))
p.ch=o
p.bh("aPosition",o,3)
n=$.$get$Y().h(0,"aPosition")
if(n==null)H.E("Unknown canonical aPosition")
H.d(s.G(0,"aPosition"))
m=s.h(0,"aPosition")
J.dE(t.a,q)
t.c4(0,m,0)
s=r.h(0,"aPosition")
r=n.bi()
J.dD(t.a,34962,s)
J.jG(t.a,m,r,5126,!1,0,0)
s=c.d0()
p.y=J.iW(t.a)
H.d(p.ch!=null)
r=p.ch.length
if(r<768){p.saN(new Uint8Array(H.ii(s)))
p.Q=5121}else if(r<196608){p.saN(new Uint16Array(H.ii(s)))
p.Q=5123}else{p.saN(new Uint32Array(H.ii(s)))
p.Q=5125}J.dE(t.a,q)
s=p.y
r=p.cx
q=J.w(r)
H.d(!!q.$isks||!!q.$iskt||!!q.$isku)
J.dD(t.a,34963,s)
J.jy(t.a,34963,r,35048)
G.ms(c,p)
return p},
mf:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.ag(null,null,null,P.u)
s=c.b
r=d.b
q=c.f
p=J.l9(b.a)
o=G.kv(b.a,35633,s)
J.jw(b.a,p,o)
n=G.kv(b.a,35632,r)
J.jw(b.a,p,n)
if(q.length>0)J.ly(b.a,p,q,35980)
J.ls(b.a,p)
if(!J.lr(b.a,p,35714))H.E(J.lq(b.a,p))
t=new G.fu(b,c,d,p,P.j9(c.c,null),P.Q(),P.Q(),t,null,a,!1,!0)
t.d7(a,b,c,d)
return t},
eX:function eX(){},
dp:function dp(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dN:function dN(){},
dQ:function dQ(a,b){this.a=a
this.b=b},
et:function et(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
el:function el(a,b,c){this.a=a
this.b=b
this.c=c},
em:function em(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ce:function ce(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dm:function dm(a,b,c){this.a=a
this.b=b
this.c=c},
dl:function dl(a,b,c){this.a=a
this.b=b
this.c=c},
eS:function eS(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
eU:function eU(a,b,c,d,e,f,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
fe:function fe(a,b,c,d,e,f,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.cx=f
_.cy=a0
_.db=a1
_.dx=a2
_.dy=a3
_.d=a4
_.a=a5
_.b=a6
_.c=a7},
fu:function fu(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
dg:function dg(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fE:function fE(){}},R={
jd:function(a,b,c,d,e,f,g,h){return G.k3("cube",a,B.lM(!0,b,c,d,e,f,g,h))},
fI:function fI(){},
fJ:function fJ(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},A={
kK:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=b.dx
t.C(c)
s=b.d
t.c8(0,s)
r=b.ch
if(r!=null&&b.cx!=null){J.ay(b)
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
p.e0(new T.ah(o))
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
C.a.l(e,r)
a.d_(b.cx,e,d)
e.pop()}for(s=b.cy,r=s.length,l=0;l<s.length;s.length===r||(0,H.J)(s),++l)A.kK(a,s[l],t,d,e)},
aV:function aV(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
df:function df(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.a=d
_.b=e
_.c=f},
ft:function ft(a,b,c,d,e,f,g,h,i,a0,a1){var _=this
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
dA:function(a){var t,s
t=C.V.ef(a,0,new A.iw())
s=536870911&t+(C.b.ct(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
iw:function iw(){}},T={
aF:function(a,b,c){var t=new T.i(new Float32Array(H.f(3)))
t.m(a,b,c)
return t},
ah:function ah(a){this.a=a},
G:function G(a){this.a=a},
n:function n(a){this.a=a},
i:function i(a){this.a=a},
aG:function aG(a){this.a=a}},F={
n1:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0
t={}
s=document
r=new R.fJ(0,0,null,null,null,null)
r.d9(C.p.cz(s,"stats"),"blue","gray")
q=C.p.ev(s,"#webgl-canvas")
p=new G.dQ(null,q)
s=(q&&C.H).cw(q,"webgl2",P.aU(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
p.a=s
if(s==null)H.E(P.cb('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
o="ChronosGL Config: "+J.ay(J.lp(s))
if($.kM>0)P.am("I: "+o)
J.l7(s,0,0,0,1)
J.dF(s,2929)
n=B.m5(20,0,0,q)
s=new Float32Array(H.f(16))
o=new Float32Array(H.f(16))
m=new T.G(new Float32Array(H.f(16)))
m.F()
l=new G.fe(n,new T.G(s),new T.G(o),m,1,-40,40,-40,-40,100,P.Q(),"othrogrpahic",!1,!0)
l.bl()
m=H.D([],[A.df])
k=new A.ft(null,p,m,17664,0,0,0,0,"shadow",!1,!0)
k.d=new G.et(p,null,null,null,null)
s=G.mf("textured",p,$.$get$kW(),$.$get$kV())
o=[]
H.d(!0)
C.a.l(m,new A.df(s,[l],o,"objects",!1,!0))
j=G.jc("mat1")
j.Z("uColor",$.$get$jQ())
i=G.jc("mat2")
i.Z("uColor",$.$get$jS())
h=G.jc("mat3")
h.Z("uColor",$.$get$jR())
m=R.jd(s,1,0,1,0,15,3,3)
g=new Float32Array(H.f(9))
f=new T.G(new Float32Array(H.f(16)))
f.F()
e=new T.G(new Float32Array(H.f(16)))
e.F()
d=new A.aV(j,m,[],new T.ah(g),f,e,new T.i(new Float32Array(H.f(3))),new T.i(new Float32Array(H.f(3))),new T.i(new Float32Array(H.f(3))),new T.i(new Float32Array(H.f(3))),"side1",!1,!0)
d.a7(-3,0,0)
e=R.jd(s,1,0,1,0,3,3,15)
f=new Float32Array(H.f(9))
g=new T.G(new Float32Array(H.f(16)))
g.F()
m=new T.G(new Float32Array(H.f(16)))
m.F()
c=new A.aV(i,e,[],new T.ah(f),g,m,new T.i(new Float32Array(H.f(3))),new T.i(new Float32Array(H.f(3))),new T.i(new Float32Array(H.f(3))),new T.i(new Float32Array(H.f(3))),"side2",!1,!0)
c.a7(-15,0,18)
m=R.jd(s,1,0,1,0,3,12,3)
g=new Float32Array(H.f(9))
f=new T.G(new Float32Array(H.f(16)))
f.F()
e=new T.G(new Float32Array(H.f(16)))
e.F()
b=new A.aV(h,m,[],new T.ah(g),f,e,new T.i(new Float32Array(H.f(3))),new T.i(new Float32Array(H.f(3))),new T.i(new Float32Array(H.f(3))),new T.i(new Float32Array(H.f(3))),"side3a",!1,!0)
b.a7(15,9,0)
e=new T.i(new Float32Array(H.f(3)))
e.m(-3,-3,3)
f=new T.i(new Float32Array(H.f(3)))
f.m(3,-3,3)
g=new T.i(new Float32Array(H.f(3)))
g.m(-3,3,3)
m=new T.i(new Float32Array(H.f(3)))
m.m(-3,-3,-3)
i=new T.i(new Float32Array(H.f(3)))
i.m(-3,3,-3)
j=new T.i(new Float32Array(H.f(3)))
j.m(3,-3,-3)
a=new T.i(new Float32Array(H.f(3)))
a.m(-3,3,-3)
a0=new T.i(new Float32Array(H.f(3)))
a0.m(-3,3,3)
a1=new T.i(new Float32Array(H.f(3)))
a1.m(3,-3,3)
a2=new T.i(new Float32Array(H.f(3)))
a2.m(3,-3,-3)
a3=new T.i(new Float32Array(H.f(3)))
a3.m(3,-3,3)
a4=new T.i(new Float32Array(H.f(3)))
a4.m(-3,-3,3)
a5=new T.i(new Float32Array(H.f(3)))
a5.m(-3,-3,-3)
a6=new T.i(new Float32Array(H.f(3)))
a6.m(3,-3,-3)
a7=new T.i(new Float32Array(H.f(3)))
a7.m(-3,-3,-3)
a8=new T.i(new Float32Array(H.f(3)))
a8.m(-3,-3,3)
a9=new T.i(new Float32Array(H.f(3)))
a9.m(-3,3,3)
b0=new T.i(new Float32Array(H.f(3)))
b0.m(-3,3,-3)
b1=new Float32Array(H.f(2))
b1[0]=0
b1[1]=0
b2=new Float32Array(H.f(2))
b2[0]=1
b2[1]=0
b3=new Float32Array(H.f(2))
b3[0]=1
b3[1]=1
b4=new Float32Array(H.f(2))
b4[0]=1
b4[1]=0
b5=new Float32Array(H.f(2))
b5[0]=1
b5[1]=1
b6=new Float32Array(H.f(2))
b6[0]=0
b6[1]=1
b7=new Float32Array(H.f(2))
b7[0]=0
b7[1]=1
b8=new Float32Array(H.f(2))
b8[0]=0
b8[1]=0
b9=new Float32Array(H.f(2))
b9[0]=1
b9[1]=0
c0=new Float32Array(H.f(2))
c0[0]=1
c0[1]=1
c1=new Float32Array(H.f(2))
c1[0]=1
c1[1]=1
c2=new Float32Array(H.f(2))
c2[0]=0
c2[1]=1
c3=new Float32Array(H.f(2))
c3[0]=0
c3[1]=0
c4=new Float32Array(H.f(2))
c4[0]=1
c4[1]=0
c5=new Float32Array(H.f(2))
c5[0]=0
c5[1]=0
c6=new Float32Array(H.f(2))
c6[0]=1
c6[1]=0
c7=new Float32Array(H.f(2))
c7[0]=1
c7[1]=1
c8=new Float32Array(H.f(2))
c8[0]=0
c8[1]=1
c9=new G.ce(!1,[],[],[],P.Q())
c9.ao("aTexUV")
c9.ao("aNormal")
c9.cW(2)
c9.aH([e,f,g,m,i,j])
c9.aG("aTexUV",[new T.n(b1),new T.n(b2),new T.n(b3),new T.n(b4),new T.n(b5),new T.n(b6)])
c9.bf(3)
c9.aH([a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0])
c9.aG("aTexUV",[new T.n(b7),new T.n(b8),new T.n(b9),new T.n(c0),new T.n(c1),new T.n(c2),new T.n(c3),new T.n(c4),new T.n(c5),new T.n(c6),new T.n(c7),new T.n(c8)])
c9.d1()
s=G.k3("wedge",s,c9)
m=new Float32Array(H.f(9))
g=new T.G(new Float32Array(H.f(16)))
g.F()
f=new Float32Array(H.f(16))
e=new T.G(f)
e.F()
d0=new A.aV(h,s,[],new T.ah(m),g,e,new T.i(new Float32Array(H.f(3))),new T.i(new Float32Array(H.f(3))),new T.i(new Float32Array(H.f(3))),new T.i(new Float32Array(H.f(3))),"side3b",!1,!0)
e=Math.cos(3.141592653589793)
g=Math.sin(3.141592653589793)
m=f[0]
s=f[8]
h=-g
a=f[1]
a0=f[9]
a1=f[2]
a2=f[10]
a3=f[3]
a4=f[11]
f[0]=m*e+s*h
f[1]=a*e+a0*h
f[2]=a1*e+a2*h
f[3]=a3*e+a4*h
f[8]=m*g+s*e
f[9]=a*g+a0*e
f[10]=a1*g+a2*e
f[11]=a3*g+a4*e
d0.a7(15,24,0)
e=[]
a4=new Float32Array(H.f(9))
g=new T.G(new Float32Array(H.f(16)))
g.F()
a3=new Float32Array(H.f(16))
f=new T.G(a3)
f.F()
a2=new Float32Array(H.f(3))
a1=new Float32Array(H.f(3))
a0=new Float32Array(H.f(3))
a=new Float32Array(H.f(3))
C.a.l(e,d)
C.a.l(e,c)
C.a.l(e,b)
C.a.l(e,d0)
a3[12]=a3[12]+a3[1]*-20
a3[13]=a3[13]+a3[5]*-20
a3[14]=a3[14]+a3[9]*-20
H.d(!0)
C.a.l(o,new A.aV(null,null,e,new T.ah(a4),g,f,new T.i(a2),new T.i(a1),new T.i(a0),new T.i(a),"triangle",!1,!0))
s=new F.iI(q,l,k)
s.$1(null)
W.aj(window,"resize",s,!1,W.k)
n.id=0.6108652381980153
n.go=-0.7853981633974483
t.a=0
new F.iH(t,r,n,k).$1(0)},
iI:function iI(a,b,c){this.a=a
this.b=b
this.c=c},
iH:function iH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}}
var v=[C,H,J,P,W,B,G,R,A,T,F]
setFunctionNamesIfNecessary(v)
var $={}
H.j6.prototype={}
J.a.prototype={
w:function(a,b){return a===b},
gv:function(a){return H.aX(a)},
k:function(a){return H.fo(a)},
gB:function(a){return new H.aD(H.iv(a),null)}}
J.eE.prototype={
k:function(a){return String(a)},
gv:function(a){return a?519018:218159},
gB:function(a){return C.ap},
$isax:1}
J.eF.prototype={
w:function(a,b){return null==b},
k:function(a){return"null"},
gv:function(a){return 0},
gB:function(a){return C.aj}}
J.by.prototype={
gv:function(a){return 0},
gB:function(a){return C.ai},
k:function(a){return String(a)},
$isk7:1}
J.fi.prototype={}
J.b_.prototype={}
J.aS.prototype={
k:function(a){var t=a[$.$get$jU()]
return t==null?this.cR(a):J.ay(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isj4:1}
J.aQ.prototype={
aW:function(a,b){if(!!a.immutable$list)throw H.e(new P.v(b))},
aV:function(a,b){if(!!a.fixed$length)throw H.e(new P.v(b))},
l:function(a,b){this.aV(a,"add")
a.push(b)},
M:function(a,b){var t,s,r,q
t=a.length
this.aV(a,"addAll")
for(s=0;s<1;++s,t=q){r=b[s]
q=t+1
H.d(t===a.length||H.E(new P.a1(a)))
a.push(r)}},
c7:function(a,b){return new H.bz(a,b,[H.aJ(a,0),null])},
aj:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.h(a[s])
return t.join(b)},
u:function(a,b){return this.h(a,b)},
gee:function(a){if(a.length>0)return a[0]
throw H.e(H.eD())},
gax:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.e(H.eD())},
b9:function(a,b,c,d,e){var t,s
this.aW(a,"setRange")
P.ke(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.E(P.aY(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.e(H.m2())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=d[e+s]
else for(s=0;s<t;++s)a[b+s]=d[e+s]},
bK:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.e(new P.a1(a))}return!1},
cM:function(a,b){this.aW(a,"sort")
H.dh(a,0,a.length-1,P.mN())},
bb:function(a){return this.cM(a,null)},
D:function(a,b){var t
for(t=0;t<a.length;++t)if(J.F(a[t],b))return!0
return!1},
k:function(a){return P.eC(a,"[","]")},
gA:function(a){return new J.dK(a,a.length,0,null,[H.aJ(a,0)])},
gv:function(a){return H.aX(a)},
gj:function(a){return a.length},
sj:function(a,b){this.aV(a,"set length")
if(b<0)throw H.e(P.aY(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.O(a,b))
if(b>=a.length||b<0)throw H.e(H.O(a,b))
return a[b]},
i:function(a,b,c){this.aW(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.O(a,b))
if(b>=a.length||b<0)throw H.e(H.O(a,b))
a[b]=c},
$iso:1,
$aso:function(){},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
J.j5.prototype={}
J.dK.prototype={
gt:function(){return this.d},
q:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.e(H.J(t))
r=this.c
if(r>=s){this.sbm(null)
return!1}this.sbm(t[r]);++this.c
return!0},
sbm:function(a){this.d=a}}
J.ba.prototype={
R:function(a,b){var t
if(typeof b!=="number")throw H.e(H.T(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gav(b)
if(this.gav(a)===t)return 0
if(this.gav(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gav:function(a){return a===0?1/a<0:a<0},
dW:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.e(new P.v(""+a+".ceil()"))},
a5:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(new P.v(""+a+".round()"))},
dX:function(a,b,c){if(this.R(b,c)>0)throw H.e(H.T(b))
if(this.R(a,b)<0)return b
if(this.R(a,c)>0)return c
return a},
eG:function(a,b){var t
if(b>20)throw H.e(P.aY(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gav(a))return"-"+t
return t},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv:function(a){return a&0x1FFFFFFF},
a1:function(a,b){if(typeof b!=="number")throw H.e(H.T(b))
return a+b},
a8:function(a,b){if(typeof b!=="number")throw H.e(H.T(b))
return a-b},
cu:function(a,b){if(typeof b!=="number")throw H.e(H.T(b))
return a/b},
H:function(a,b){if(typeof b!=="number")throw H.e(H.T(b))
return a*b},
aF:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bG(a,b)},
J:function(a,b){return(a|0)===a?a/b|0:this.bG(a,b)},
bG:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.e(new P.v("Result of truncating division is "+H.h(t)+": "+H.h(a)+" ~/ "+b))},
aR:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
ct:function(a,b){if(typeof b!=="number")throw H.e(H.T(b))
return(a&b)>>>0},
cT:function(a,b){if(typeof b!=="number")throw H.e(H.T(b))
return(a^b)>>>0},
aC:function(a,b){if(typeof b!=="number")throw H.e(H.T(b))
return a<b},
an:function(a,b){if(typeof b!=="number")throw H.e(H.T(b))
return a>b},
cv:function(a,b){if(typeof b!=="number")throw H.e(H.T(b))
return a>=b},
gB:function(a){return C.as},
$isU:1}
J.cY.prototype={
gB:function(a){return C.ar},
$isM:1,
$isp:1,
$isU:1}
J.cX.prototype={
gB:function(a){return C.aq},
$isM:1,
$isU:1}
J.aR.prototype={
aI:function(a,b){if(b>=a.length)throw H.e(H.O(a,b))
return a.charCodeAt(b)},
a1:function(a,b){if(typeof b!=="string")throw H.e(P.jI(b,null,null))
return a+b},
cN:function(a,b,c){var t
if(c>a.length)throw H.e(P.aY(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bc:function(a,b){return this.cN(a,b,0)},
be:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.fp(b,null,null))
if(b>c)throw H.e(P.fp(b,null,null))
if(c>a.length)throw H.e(P.fp(c,null,null))
return a.substring(b,c)},
cO:function(a,b){return this.be(a,b,null)},
eF:function(a){return a.toLowerCase()},
dZ:function(a,b,c){if(c>a.length)throw H.e(P.aY(c,0,a.length,null,null))
return H.n9(a,b,c)},
R:function(a,b){var t
if(typeof b!=="string")throw H.e(H.T(b))
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
gB:function(a){return C.ak},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.e(H.O(a,b))
return a[b]},
$iso:1,
$aso:function(){},
$isu:1}
H.c.prototype={$asc:null}
H.bb.prototype={
gA:function(a){return new H.d_(this,this.gj(this),0,null,[H.al(this,"bb",0)])},
aA:function(a,b){return this.cQ(0,b)},
eE:function(a,b){var t,s
t=H.D([],[H.al(this,"bb",0)])
C.a.sj(t,this.gj(this))
for(s=0;s<this.gj(this);++s)t[s]=this.u(0,s)
return t},
eD:function(a){return this.eE(a,!0)}}
H.d_.prototype={
gt:function(){return this.d},
q:function(){var t,s,r,q
t=this.a
s=J.ac(t)
r=s.gj(t)
if(this.b!==r)throw H.e(new P.a1(t))
q=this.c
if(q>=r){this.sab(null)
return!1}this.sab(s.u(t,q));++this.c
return!0},
sab:function(a){this.d=a}}
H.d0.prototype={
gA:function(a){return new H.eO(null,J.bl(this.a),this.b,this.$ti)},
gj:function(a){return J.dG(this.a)},
$asV:function(a,b){return[b]}}
H.e1.prototype={$isc:1,
$asc:function(a,b){return[b]}}
H.eO.prototype={
q:function(){var t=this.b
if(t.q()){this.sab(this.c.$1(t.gt()))
return!0}this.sab(null)
return!1},
gt:function(){return this.a},
sab:function(a){this.a=a},
$ascW:function(a,b){return[b]}}
H.bz.prototype={
gj:function(a){return J.dG(this.a)},
u:function(a,b){return this.b.$1(J.lg(this.a,b))},
$asc:function(a,b){return[b]},
$asbb:function(a,b){return[b]},
$asV:function(a,b){return[b]}}
H.dr.prototype={
gA:function(a){return new H.hg(J.bl(this.a),this.b,this.$ti)}}
H.hg.prototype={
q:function(){var t,s
for(t=this.a,s=this.b;t.q();)if(s.$1(t.gt()))return!0
return!1},
gt:function(){return this.a.gt()}}
H.cc.prototype={}
H.iR.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.iS.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.hT.prototype={
seo:function(a){this.z=a},
ser:function(a){this.ch=a}}
H.b3.prototype={
bJ:function(a,b){if(!this.f.w(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.aT()},
ey:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.ak(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.bz();++r.d}this.y=!1}this.aT()},
dN:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.w(a),s=0;r=this.ch,s<r.length;s+=2)if(t.w(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
ex:function(a){var t,s,r
if(this.ch==null)return
for(t=J.w(a),s=0;r=this.ch,s<r.length;s+=2)if(t.w(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.E(new P.v("removeRange"))
P.ke(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
cJ:function(a,b){if(!this.r.w(0,a))return
this.db=b},
ei:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.I(0,c)
return}H.d(b===1)
t=this.cx
if(t==null){t=P.ja(null,null)
this.cx=t}t.T(0,new H.hO(a,c))},
eh:function(a,b){var t
if(!this.r.w(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.aw()
return}H.d(b===1)
t=this.cx
if(t==null){t=P.ja(null,null)
this.cx=t}t.T(0,this.gep())},
ej:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.am(a)
if(b!=null)P.am(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.ay(a)
s[1]=b==null?null:b.k(0)
for(r=new P.bR(t,t.r,null,null,[null]),r.c=t.e;r.q();)r.d.I(0,s)},
af:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.P(o)
p=H.aI(o)
this.ej(q,p)
if(this.db){this.aw()
if(this===u.globalState.e)throw o}}finally{this.cy=H.mJ(r)
u.globalState.d=H.jp(t,"$isb3")
if(t!=null)$=t.gen()
if(this.cx!=null)for(;n=this.cx,!n.gai(n);)this.cx.c9().$0()}return s},
c6:function(a){return this.b.h(0,a)},
bq:function(a,b){var t=this.b
if(t.G(0,a))throw H.e(P.cb("Registry: ports must be registered only once."))
t.i(0,a,b)},
aT:function(){var t=this.b
if(t.gj(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.aw()},
aw:function(){var t,s,r
t=this.cx
if(t!=null)t.V(0)
for(t=this.b,s=t.gcq(t),s=s.gA(s);s.q();)s.gt().dm()
t.V(0)
this.c.V(0)
u.globalState.z.ak(0,this.a)
this.dx.V(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].I(0,t[r+1])
this.ch=null}},
gen:function(){return this.d},
ge_:function(){return this.e}}
H.hO.prototype={
$0:function(){this.a.I(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.hw.prototype={
e6:function(){var t=this.a
if(t.b===t.c)return
return t.c9()},
cb:function(){var t,s,r
t=this.e6()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.G(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gai(s)}else s=!1
else s=!1
else s=!1
if(s)H.E(P.cb("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gai(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aU(["command","close"])
r=new H.ak(!0,new P.dv(0,null,null,null,null,null,0,[null,P.p])).K(r)
s.toString
self.postMessage(r)}return!1}t.eu()
return!0},
bE:function(){if(self.window!=null)new H.hx(this).$0()
else for(;this.cb(););},
al:function(){var t,s,r,q,p
if(!u.globalState.x)this.bE()
else try{this.bE()}catch(r){t=H.P(r)
s=H.aI(r)
q=u.globalState.Q
p=P.aU(["command","error","msg",H.h(t)+"\n"+H.h(s)])
p=new H.ak(!0,P.bS(null,P.p)).K(p)
q.toString
self.postMessage(p)}}}
H.hx.prototype={
$0:function(){if(!this.a.cb())return
P.mk(C.v,this)},
$S:function(){return{func:1,v:true}}}
H.b4.prototype={
eu:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.af(this.b)}}
H.hS.prototype={}
H.eA.prototype={
$0:function(){H.lZ(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.eB.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(!this.d)this.a.$1(this.c)
else{s=this.a
if(H.bi(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.bi(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.aT()},
$S:function(){return{func:1,v:true}}}
H.hp.prototype={}
H.bf.prototype={
I:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.mx(b)
if(t.ge_()===s){s=J.ac(r)
switch(s.h(r,0)){case"pause":t.bJ(s.h(r,1),s.h(r,2))
break
case"resume":t.ey(s.h(r,1))
break
case"add-ondone":t.dN(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.ex(s.h(r,1))
break
case"set-errors-fatal":t.cJ(s.h(r,1),s.h(r,2))
break
case"ping":t.ei(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.eh(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.ak(0,s)
break}return}u.globalState.f.a.T(0,new H.b4(t,new H.hU(this,r),"receive"))},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bf){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gv:function(a){return this.b.a}}
H.hU.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dk(0,this.b)},
$S:function(){return{func:1}}}
H.bU.prototype={
I:function(a,b){var t,s,r
t=P.aU(["command","message","port",this,"msg",b])
s=new H.ak(!0,P.bS(null,P.p)).K(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bU){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gv:function(a){return C.b.cT((this.b<<16^this.a<<8)>>>0,this.c)}}
H.bd.prototype={
dm:function(){this.c=!0
this.b=null},
dk:function(a,b){if(this.c)return
this.b.$1(b)},
$ismd:1}
H.fZ.prototype={
da:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.T(0,new H.b4(s,new H.h_(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.bY(new H.h0(this,b),0),a)}else{H.d(a>0)
throw H.e(new P.v("Timer greater than 0."))}}}
H.h_.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.h0.prototype={
$0:function(){this.a.c=null
H.iG()
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.ap.prototype={
gv:function(a){var t=this.a
t=C.b.aR(t,0)^C.b.J(t,4294967296)
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
H.ak.prototype={
K:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gj(t))
t=J.w(a)
if(!!t.$isbB)return["buffer",a]
if(!!t.$isbc)return["typed",a]
if(!!t.$iso)return this.cF(a)
if(!!t.$islW){r=this.gcC()
q=t.gE(a)
q=H.jb(q,r,H.al(q,"V",0),null)
q=P.k9(q,!0,H.al(q,"V",0))
t=t.gcq(a)
t=H.jb(t,r,H.al(t,"V",0),null)
return["map",q,P.k9(t,!0,H.al(t,"V",0))]}if(!!t.$isk7)return this.cG(a)
if(!!t.$isa)this.co(a)
if(!!t.$ismd)this.am(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isbf)return this.cH(a)
if(!!t.$isbU)return this.cI(a)
if(!!t.$isb7){p=a.$static_name
if(p==null)this.am(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isap)return["capability",a.a]
if(!(a instanceof P.q))this.co(a)
return["dart",u.classIdExtractor(a),this.cE(u.classFieldsExtractor(a))]},
am:function(a,b){throw H.e(new P.v((b==null?"Can't transmit:":b)+" "+H.h(a)))},
co:function(a){return this.am(a,null)},
cF:function(a){var t
H.d(typeof a!=="string")
t=this.cD(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.am(a,"Can't serialize indexable: ")},
cD:function(a){var t,s
t=[]
C.a.sj(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.K(a[s])
return t},
cE:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.K(a[t]))
return a},
cG:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.am(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sj(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.K(a[t[r]])
return["js-object",t,s]},
cI:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cH:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.b2.prototype={
W:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.e(P.jH("Bad serialized message: "+H.h(a)))
switch(C.a.gee(a)){case"ref":H.d(J.F(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.d(J.F(a[0],"buffer"))
t=a[1]
C.a.l(this.b,t)
return t
case"typed":H.d(J.F(a[0],"typed"))
t=a[1]
C.a.l(this.b,t)
return t
case"fixed":H.d(J.F(a[0],"fixed"))
t=a[1]
C.a.l(this.b,t)
s=H.D(this.ae(t),[null])
s.fixed$length=Array
return s
case"extendable":H.d(J.F(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.D(this.ae(t),[null])
case"mutable":H.d(J.F(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.ae(t)
case"const":H.d(J.F(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
s=H.D(this.ae(t),[null])
s.fixed$length=Array
return s
case"map":return this.e9(a)
case"sendport":return this.ea(a)
case"raw sendport":H.d(J.F(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.e8(a)
case"function":H.d(J.F(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.d(J.F(a[0],"capability"))
return new H.ap(a[1])
case"dart":H.d(J.F(a[0],"dart"))
r=a[1]
q=a[2]
p=u.instanceFromClassId(r)
C.a.l(this.b,p)
this.ae(q)
return u.initializeEmptyInstance(r,p,q)
default:throw H.e("couldn't deserialize: "+H.h(a))}},
ae:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.W(a[t]))
return a},
e9:function(a){var t,s,r,q,p
H.d(J.F(a[0],"map"))
t=a[1]
s=a[2]
r=P.Q()
C.a.l(this.b,r)
t=J.lt(t,this.ge7()).eD(0)
for(q=J.ac(s),p=0;p<t.length;++p)r.i(0,t[p],this.W(q.h(s,p)))
return r},
ea:function(a){var t,s,r,q,p,o,n
H.d(J.F(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.c6(r)
if(o==null)return
n=new H.bf(o,s)}else n=new H.bU(t,r,s)
C.a.l(this.b,n)
return n},
e8:function(a){var t,s,r,q,p,o
H.d(J.F(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.ac(t),p=J.ac(s),o=0;o<q.gj(t);++o)r[q.h(t,o)]=this.W(p.h(s,o))
return r}}
H.fs.prototype={}
H.h5.prototype={
O:function(a){var t,s,r
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
H.d9.prototype={
k:function(a){var t=this.b
if(t==null)return"NullError: "+H.h(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.eH.prototype={
k:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.h(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.h(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.h(this.a)+")"}}
H.h8.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.iT.prototype={
$1:function(a){if(!!J.w(a).$isb9)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.dx.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.iB.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.iC.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.iD.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.iE.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.iF.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.b7.prototype={
k:function(a){return"Closure '"+H.db(this).trim()+"'"},
$isj4:1,
geJ:function(){return this},
$D:null}
H.fU.prototype={}
H.fH.prototype={
k:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bm.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bm))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gv:function(a){var t,s
t=this.c
if(t==null)s=H.aX(this.a)
else s=typeof t!=="object"?J.ao(t):H.aX(t)
return(s^H.aX(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.h(this.d)+"' of "+H.fo(t)}}
H.h7.prototype={
k:function(a){return this.a}}
H.dP.prototype={
k:function(a){return this.a}}
H.fy.prototype={
k:function(a){return"RuntimeError: "+H.h(this.a)}}
H.hj.prototype={
k:function(a){return C.i.a1("Assertion failed: ",P.j3(this.a))}}
H.aD.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gv:function(a){return J.ao(this.a)},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.aD){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.af.prototype={
gj:function(a){return this.a},
gai:function(a){return this.a===0},
gE:function(a){return new H.eK(this,[H.aJ(this,0)])},
gcq:function(a){return H.jb(this.gE(this),new H.eG(this),H.aJ(this,0),H.aJ(this,1))},
G:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bw(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bw(s,b)}else return this.ek(b)},
ek:function(a){var t=this.d
if(t==null)return!1
return this.ah(this.as(t,this.ag(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.ac(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.ac(r,b)
return s==null?null:s.b}else return this.el(b)},
el:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.as(t,this.ag(a))
r=this.ah(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aO()
this.b=t}this.bo(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aO()
this.c=s}this.bo(s,b,c)}else{r=this.d
if(r==null){r=this.aO()
this.d=r}q=this.ag(b)
p=this.as(r,q)
if(p==null)this.aQ(r,q,[this.aP(b,c)])
else{o=this.ah(p,b)
if(o>=0)p[o].b=c
else p.push(this.aP(b,c))}}},
ak:function(a,b){if(typeof b==="string")return this.bC(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bC(this.c,b)
else return this.em(b)},
em:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.as(t,this.ag(a))
r=this.ah(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bH(q)
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
if(s!==this.r)throw H.e(new P.a1(this))
t=t.c}},
bo:function(a,b,c){var t=this.ac(a,b)
if(t==null)this.aQ(a,b,this.aP(b,c))
else t.b=c},
bC:function(a,b){var t
if(a==null)return
t=this.ac(a,b)
if(t==null)return
this.bH(t)
this.bx(a,b)
return t.b},
aP:function(a,b){var t,s
t=new H.eJ(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bH:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.r=this.r+1&67108863},
ag:function(a){return J.ao(a)&0x3ffffff},
ah:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.F(a[s].a,b))return s
return-1},
k:function(a){return P.m4(this)},
ac:function(a,b){return a[b]},
as:function(a,b){return a[b]},
aQ:function(a,b,c){H.d(c!=null)
a[b]=c},
bx:function(a,b){delete a[b]},
bw:function(a,b){return this.ac(a,b)!=null},
aO:function(){var t=Object.create(null)
this.aQ(t,"<non-identifier-key>",t)
this.bx(t,"<non-identifier-key>")
return t},
$islW:1}
H.eG.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.eJ.prototype={}
H.eK.prototype={
gj:function(a){return this.a.a},
gA:function(a){var t,s
t=this.a
s=new H.eL(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.eL.prototype={
gt:function(){return this.d},
q:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a1(t))
else{t=this.c
if(t==null){this.sbn(null)
return!1}else{this.sbn(t.a)
this.c=this.c.c
return!0}}},
sbn:function(a){this.d=a}}
H.ix.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.iy.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.u]}}}
H.iz.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.u]}}}
H.bB.prototype={
gB:function(a){return C.ab},
$isbB:1}
H.bc.prototype={$isbc:1}
H.eY.prototype={
gB:function(a){return C.ac}}
H.d2.prototype={
gj:function(a){return a.length},
$iso:1,
$aso:function(){},
$isr:1,
$asr:function(){}}
H.d3.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.O(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.E(H.O(a,b))
a[b]=c}}
H.d4.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.E(H.O(a,b))
a[b]=c},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]}}
H.d1.prototype={
gB:function(a){return C.ad},
$isc:1,
$asc:function(){return[P.M]},
$isb:1,
$asb:function(){return[P.M]},
$iseq:1}
H.eZ.prototype={
gB:function(a){return C.ae},
$isc:1,
$asc:function(){return[P.M]},
$isb:1,
$asb:function(){return[P.M]}}
H.f_.prototype={
gB:function(a){return C.af},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.O(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]}}
H.f0.prototype={
gB:function(a){return C.ag},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.O(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]},
$isk4:1}
H.f1.prototype={
gB:function(a){return C.ah},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.O(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]}}
H.f2.prototype={
gB:function(a){return C.al},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.O(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]},
$isks:1}
H.f3.prototype={
gB:function(a){return C.am},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.O(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]},
$iskt:1}
H.d5.prototype={
gB:function(a){return C.an},
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.O(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]}}
H.f4.prototype={
gB:function(a){return C.ao},
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.O(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]},
$isku:1}
H.bC.prototype={
$aso:function(){},
$isc:1,
$asc:function(){return[P.p]},
$asr:function(){},
$isb:1,
$asb:function(){return[P.p]}}
H.bD.prototype={
$aso:function(){},
$isc:1,
$asc:function(){return[P.M]},
$asr:function(){},
$isb:1,
$asb:function(){return[P.M]}}
H.bE.prototype={
$aso:function(){},
$asc:function(){return[P.M]},
$asr:function(){},
$asb:function(){return[P.M]}}
H.bF.prototype={
$aso:function(){},
$asc:function(){return[P.p]},
$asr:function(){},
$asb:function(){return[P.p]}}
P.hl.prototype={
$1:function(a){var t,s
H.iG()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.hk.prototype={
$1:function(a){var t,s
t=this.a
H.d(t.a==null);++u.globalState.f.b
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.hm.prototype={
$0:function(){H.iG()
this.a.$0()},
$S:function(){return{func:1}}}
P.hn.prototype={
$0:function(){H.iG()
this.a.$0()},
$S:function(){return{func:1}}}
P.hr.prototype={}
P.i9.prototype={
dY:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.aC("Future already completed"))
t.aK(b)}}
P.du.prototype={
es:function(a){if(this.c!==6)return!0
H.d(!0)
return this.b.b.b1(this.d,a.a)},
eg:function(a){var t,s
t=(this.c&2)!==0
if(t){H.d(t)
t=this.e!=null}else t=!1
H.d(t)
s=this.e
t=this.b.b
if(H.bi(s,{func:1,args:[P.q,P.bJ]}))return t.ez(s,a.a,a.b)
else return t.b1(s,a.a)}}
P.av.prototype={
cd:function(a,b){var t,s,r
t=$.C
if(t!==C.f){t.toString
if(b!=null)b=P.mB(b,t)}s=new P.av(0,t,null,[null])
r=b==null?1:3
this.bp(new P.du(null,s,r,a,b,[H.aJ(this,0),null]))
return s},
cc:function(a){return this.cd(a,null)},
bs:function(a){H.d(this.a<4)
H.d(a.a>=4)
this.a=a.a
this.c=a.c},
bp:function(a){var t
H.d(a.a==null)
t=this.a
if(t<=1){a.a=H.jp(this.c,"$isdu")
this.c=a}else{if(t===2){H.d(!0)
t=this.c
if(t.a<4){t.bp(a)
return}this.bs(t)}H.d(this.a>=4)
t=this.b
t.toString
P.il(null,null,t,new P.hC(this,a))}},
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
return}this.bs(s)}H.d(this.a>=4)
t.a=this.ad(a)
s=this.b
s.toString
P.il(null,null,s,new P.hG(t,this))}},
bD:function(){H.d(this.a<4)
var t=this.c
this.c=null
return this.ad(t)},
ad:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aK:function(a){var t,s
H.d(this.a<4)
t=this.$ti
if(H.im(a,"$iseu",t,"$aseu"))if(H.im(a,"$isav",t,null))P.kx(a,this)
else P.mr(a,this)
else{s=this.bD()
H.d(this.a<4)
this.a=4
this.c=a
P.bO(this,s)}},
ap:function(a,b){var t
H.d(this.a<4)
t=this.bD()
H.d(this.a<4)
this.a=8
this.c=new P.b6(a,b)
P.bO(this,t)},
dq:function(a){return this.ap(a,null)},
$iseu:1,
gaS:function(){return this.a},
gdH:function(){return this.c}}
P.hC.prototype={
$0:function(){P.bO(this.a,this.b)},
$S:function(){return{func:1}}}
P.hG.prototype={
$0:function(){P.bO(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.hD.prototype={
$1:function(a){var t=this.a
H.d(t.a===1)
H.d(t.a===1)
t.a=0
t.aK(a)},
$S:function(){return{func:1,args:[,]}}}
P.hE.prototype={
$2:function(a,b){var t=this.a
H.d(t.a===1)
t.ap(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.hF.prototype={
$0:function(){this.a.ap(this.b,this.c)},
$S:function(){return{func:1}}}
P.hJ.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.d
p=q.c
H.d((p&1)===0)
o=(p&2)===0
H.d(o)
t=null
try{H.d(o)
H.d(p===8)
t=q.b.b.ca(q.d)}catch(n){s=H.P(n)
r=H.aI(n)
if(this.c){q=this.a.a
H.d(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.d(q.a===8)
p.b=q.c}else p.b=new P.b6(s,r)
p.a=!0
return}if(!!J.w(t).$iseu){if(t instanceof P.av&&t.gaS()>=4){if(t.gaS()===8){q=t
H.d(q.gaS()===8)
p=this.b
p.b=q.gdH()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.cc(new P.hK(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.hK.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.hI.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.d((r.c&1)!==0)
this.a.b=r.b.b.b1(r.d,this.c)}catch(q){t=H.P(q)
s=H.aI(q)
r=this.a
r.b=new P.b6(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.hH.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.d(q.a===8)
t=q.c
q=this.c
if(q.es(t)){H.d((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.eg(t)
p.a=!1}}catch(o){s=H.P(o)
r=H.aI(o)
q=this.a
p=q.a
H.d(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.d(q.a===8)
m.b=q.c}else m.b=new P.b6(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.ds.prototype={}
P.fL.prototype={
gj:function(a){var t,s
t={}
s=new P.av(0,$.C,null,[P.p])
t.a=0
this.eq(new P.fN(t),!0,new P.fO(t,s),s.gdn())
return s}}
P.fN.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.fO.prototype={
$0:function(){this.b.aK(this.a.a)},
$S:function(){return{func:1}}}
P.fM.prototype={}
P.b6.prototype={
k:function(a){return H.h(this.a)},
$isb9:1}
P.ih.prototype={}
P.ik.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.da()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.e(t)
r=H.e(t)
r.stack=s.k(0)
throw r},
$S:function(){return{func:1}}}
P.hW.prototype={
eA:function(a){var t,s,r
try{if(C.f===$.C){a.$0()
return}P.kC(null,null,this,a)}catch(r){t=H.P(r)
s=H.aI(r)
P.ij(null,null,this,t,s)}},
eB:function(a,b){var t,s,r
try{if(C.f===$.C){a.$1(b)
return}P.kD(null,null,this,a,b)}catch(r){t=H.P(r)
s=H.aI(r)
P.ij(null,null,this,t,s)}},
dT:function(a){return new P.hY(this,a)},
aU:function(a){return new P.hX(this,a)},
dU:function(a){return new P.hZ(this,a)},
h:function(a,b){return},
ca:function(a){if($.C===C.f)return a.$0()
return P.kC(null,null,this,a)},
b1:function(a,b){if($.C===C.f)return a.$1(b)
return P.kD(null,null,this,a,b)},
ez:function(a,b,c){if($.C===C.f)return a.$2(b,c)
return P.mC(null,null,this,a,b,c)}}
P.hY.prototype={
$0:function(){return this.a.ca(this.b)},
$S:function(){return{func:1}}}
P.hX.prototype={
$0:function(){return this.a.eA(this.b)},
$S:function(){return{func:1}}}
P.hZ.prototype={
$1:function(a){return this.a.eB(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.dv.prototype={
ag:function(a){return H.n3(a)&0x3ffffff},
ah:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.hP.prototype={
gA:function(a){var t=new P.bR(this,this.r,null,null,[null])
t.c=this.e
return t},
gj:function(a){return this.a},
D:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dr(b)},
dr:function(a){var t=this.d
if(t==null)return!1
return this.ar(t[this.aq(a)],a)>=0},
c6:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.D(0,a)?a:null
else return this.dB(a)},
dB:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.aq(a)]
r=this.ar(s,a)
if(r<0)return
return J.bj(s,r).gdt()},
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
r=s}return this.bt(r,b)}else return this.T(0,b)},
T:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.mv()
this.d=t}s=this.aq(b)
r=t[s]
if(r==null){q=[this.aJ(b)]
H.d(q!=null)
t[s]=q}else{if(this.ar(r,b)>=0)return!1
r.push(this.aJ(b))}return!0},
ak:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bu(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bu(this.c,b)
else return this.dC(0,b)},
dC:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.aq(b)]
r=this.ar(s,b)
if(r<0)return!1
this.bv(s.splice(r,1)[0])
return!0},
V:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
bt:function(a,b){var t
if(a[b]!=null)return!1
t=this.aJ(b)
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
aJ:function(a){var t,s
t=new P.hQ(a,null,null)
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
aq:function(a){return J.ao(a)&0x3ffffff},
ar:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.F(a[s].a,b))return s
return-1},
$isc:1,
$asc:null}
P.hQ.prototype={
gdt:function(){return this.a}}
P.bR.prototype={
gt:function(){return this.d},
q:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a1(t))
else{t=this.c
if(t==null){this.saa(null)
return!1}else{this.saa(t.a)
this.c=this.c.b
return!0}}},
saa:function(a){this.d=a}}
P.hN.prototype={}
P.cZ.prototype={}
P.x.prototype={
gA:function(a){return new H.d_(a,this.gj(a),0,null,[H.al(a,"x",0)])},
u:function(a,b){return this.h(a,b)},
c7:function(a,b){return new H.bz(a,b,[H.al(a,"x",0),null])},
ef:function(a,b,c){var t,s,r
t=this.gj(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gj(a))throw H.e(new P.a1(a))}return s},
k:function(a){return P.eC(a,"[","]")},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
P.eP.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.h(a)
t.a=s+": "
t.a+=H.h(b)},
$S:function(){return{func:1,args:[,,]}}}
P.eM.prototype={
gA:function(a){return new P.hR(this,this.c,this.d,this.b,null,this.$ti)},
gai:function(a){return this.b===this.c},
gj:function(a){return(this.c-this.b&this.a.length-1)>>>0},
u:function(a,b){var t=(this.c-this.b&this.a.length-1)>>>0
if(C.b.an(0,b)||b>=t)H.E(P.B(b,this,"index",null,t))
return this.a[(C.b.a1(this.b,b)&this.a.length-1)>>>0]},
V:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
k:function(a){return P.eC(this,"{","}")},
c9:function(){var t,s,r
t=this.b
if(t===this.c)throw H.e(H.eD());++this.d
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
if(this.b===t)this.bz();++this.d},
bz:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.D(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.b9(s,0,q,t,r)
C.a.b9(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbF(s)},
d4:function(a,b){var t
H.d(!0)
t=new Array(8)
t.fixed$length=Array
this.sbF(H.D(t,[b]))},
sbF:function(a){this.a=a},
$asc:null}
P.hR.prototype={
gt:function(){return this.e},
q:function(){var t,s
t=this.a
if(this.c!==t.d)H.E(new P.a1(t))
s=this.d
if(s===this.b){this.saa(null)
return!1}this.saa(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
saa:function(a){this.e=a}}
P.fB.prototype={
M:function(a,b){var t
for(t=J.bl(b);t.q();)this.l(0,t.gt())},
k:function(a){return P.eC(this,"{","}")},
$isc:1,
$asc:null}
P.fA.prototype={}
P.bH.prototype={$isc:1,$asc:null,$isb:1,$asb:null}
P.ax.prototype={}
P.I.prototype={}
P.bn.prototype={
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.bn))return!1
return this.a===b.a&&this.b===b.b},
R:function(a,b){return C.b.R(this.a,b.a)},
gv:function(a){var t=this.a
return(t^C.b.aR(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.lN(H.mc(this))
s=P.c5(H.ma(this))
r=P.c5(H.m6(this))
q=P.c5(H.m7(this))
p=P.c5(H.m9(this))
o=P.c5(H.mb(this))
n=P.lO(H.m8(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isI:1,
$asI:function(){return[P.bn]}}
P.M.prototype={$isI:1,
$asI:function(){return[P.U]}}
P.aP.prototype={
aC:function(a,b){return C.b.aC(this.a,b.gds())},
an:function(a,b){return C.b.an(this.a,b.gds())},
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.aP))return!1
return this.a===b.a},
gv:function(a){return this.a&0x1FFFFFFF},
R:function(a,b){return C.b.R(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.e0()
s=this.a
if(s<0)return"-"+new P.aP(0-s).k(0)
r=t.$1(C.b.J(s,6e7)%60)
q=t.$1(C.b.J(s,1e6)%60)
p=new P.e_().$1(s%1e6)
return""+C.b.J(s,36e8)+":"+H.h(r)+":"+H.h(q)+"."+H.h(p)},
$isI:1,
$asI:function(){return[P.aP]}}
P.e_.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.u,args:[P.p]}}}
P.e0.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.u,args:[P.p]}}}
P.b9.prototype={}
P.c2.prototype={
k:function(a){return"Assertion failed"}}
P.da.prototype={
k:function(a){return"Throw of null."}}
P.ad.prototype={
gaM:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaL:function(){return""},
k:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.h(t)
q=this.gaM()+s+r
if(!this.a)return q
p=this.gaL()
o=P.j3(this.b)
return q+p+": "+H.h(o)}}
P.dd.prototype={
gaM:function(){return"RangeError"},
gaL:function(){var t,s,r
H.d(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.h(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.h(t)
else if(r>t)s=": Not in range "+H.h(t)+".."+H.h(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.h(t)}return s}}
P.ey.prototype={
gaM:function(){return"RangeError"},
gaL:function(){H.d(this.a)
if(J.l_(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.h(t)},
gj:function(a){return this.f}}
P.v.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.dq.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.aC.prototype={
k:function(a){return"Bad state: "+this.a}}
P.a1.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.h(P.j3(t))+"."}}
P.di.prototype={
k:function(a){return"Stack Overflow"},
$isb9:1}
P.dT.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.hB.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.h(t)}}
P.e2.prototype={
k:function(a){return"Expando:"+H.h(this.a)},
h:function(a,b){var t,s
t=this.b
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.E(P.jI(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.kb(b,"expando$values")
return s==null?null:H.kb(s,t)}}
P.p.prototype={$isI:1,
$asI:function(){return[P.U]}}
P.V.prototype={
aA:function(a,b){return new H.dr(this,b,[H.al(this,"V",0)])},
gj:function(a){var t,s
H.d(!this.$isc)
t=this.gA(this)
for(s=0;t.q();)++s
return s},
ga2:function(a){var t,s
t=this.gA(this)
if(!t.q())throw H.e(H.eD())
s=t.gt()
if(t.q())throw H.e(H.m3())
return s},
u:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(P.lF("index"))
if(b<0)H.E(P.aY(b,0,null,"index",null))
for(t=this.gA(this),s=0;t.q();){r=t.gt()
if(b===s)return r;++s}throw H.e(P.B(b,this,"index",null,s))},
k:function(a){return P.m1(this,"(",")")}}
P.cW.prototype={}
P.b.prototype={$isc:1,$asc:null,$asb:null}
P.aB.prototype={}
P.aW.prototype={
gv:function(a){return P.q.prototype.gv.call(this,this)},
k:function(a){return"null"}}
P.U.prototype={$isI:1,
$asI:function(){return[P.U]}}
P.q.prototype={constructor:P.q,$isq:1,
w:function(a,b){return this===b},
gv:function(a){return H.aX(this)},
k:function(a){return H.fo(this)},
gB:function(a){return new H.aD(H.iv(this),null)},
toString:function(){return this.k(this)}}
P.bJ.prototype={}
P.u.prototype={$isI:1,
$asI:function(){return[P.u]}}
P.bK.prototype={
gj:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga3:function(){return this.a}}
W.l.prototype={}
W.dI.prototype={
k:function(a){return String(a)},
$isa:1}
W.dJ.prototype={
k:function(a){return String(a)},
$isa:1}
W.a0.prototype={$isq:1}
W.dM.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.a0]},
$isc:1,
$asc:function(){return[W.a0]},
$isr:1,
$asr:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.c3.prototype={}
W.aN.prototype={$isa:1,$isaN:1}
W.c4.prototype={
cw:function(a,b,c){var t=this.dv(a,b,P.mM(c,null))
return t},
dv:function(a,b,c){return a.getContext(b,c)}}
W.dO.prototype={
aB:function(a){return P.iq(a.getContextAttributes())}}
W.aO.prototype={$isa:1,
gj:function(a){return a.length}}
W.dR.prototype={$isa:1}
W.z.prototype={$isq:1}
W.b8.prototype={
br:function(a,b){var t,s
t=$.$get$jT()
s=t[b]
if(typeof s==="string")return s
s=this.dK(a,b)
t[b]=s
return s},
dK:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.lP()+b
if(t in a)return t
return b},
gj:function(a){return a.length}}
W.dS.prototype={}
W.dU.prototype={
h:function(a,b){return a[b]},
gj:function(a){return a.length}}
W.dV.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y},
gL:function(a){return a.z}}
W.c6.prototype={}
W.bo.prototype={
dO:function(a,b){return a.adoptNode(b)},
cz:function(a,b){return a.getElementById(b)},
ev:function(a,b){return a.querySelector(b)}}
W.c7.prototype={$isa:1}
W.dW.prototype={
k:function(a){return String(a)}}
W.c8.prototype={
e3:function(a,b){return a.createHTMLDocument(b)}}
W.dX.prototype={
gaz:function(a){return a.w},
gn:function(a){return a.x},
gp:function(a){return a.y},
gL:function(a){return a.z}}
W.c9.prototype={
gaz:function(a){return a.w},
gn:function(a){return a.x},
gp:function(a){return a.y},
gL:function(a){return a.z}}
W.ca.prototype={
k:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(this.ga0(a))+" x "+H.h(this.ga_(a))},
w:function(a,b){var t
if(b==null)return!1
t=J.w(b)
if(!t.$isK)return!1
return a.left===t.gaY(b)&&a.top===t.gb2(b)&&this.ga0(a)===t.ga0(b)&&this.ga_(a)===t.ga_(b)},
gv:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.ga0(a)
q=this.ga_(a)
return W.kA(W.b5(W.b5(W.b5(W.b5(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga_:function(a){return a.height},
gaY:function(a){return a.left},
gb2:function(a){return a.top},
ga0:function(a){return a.width},
gn:function(a){return a.x},
gp:function(a){return a.y},
$isK:1,
$asK:function(){}}
W.dY.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[P.u]},
$isc:1,
$asc:function(){return[P.u]},
$isr:1,
$asr:function(){return[P.u]},
$isb:1,
$asb:function(){return[P.u]}}
W.dZ.prototype={
gj:function(a){return a.length}}
W.a2.prototype={
gdR:function(a){return new W.hv(a)},
k:function(a){return a.localName},
N:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.k0
if(t==null){t=H.D([],[W.d7])
s=new W.d8(t)
C.a.l(t,W.ky(null))
C.a.l(t,W.kB())
$.k0=s
d=s}else d=t
t=$.k_
if(t==null){t=new W.dy(d)
$.k_=t
c=t}else{t.a=d
c=t}}if($.az==null){t=document
s=t.implementation
s=(s&&C.I).e3(s,"")
$.az=s
$.j2=s.createRange()
s=$.az
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.az.head;(t&&C.J).P(t,r)}t=$.az
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.jp(s,"$isaN")}t=$.az
if(!!this.$isaN)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.az.body;(t&&C.n).P(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.D(C.T,a.tagName)){t=$.j2;(t&&C.B).cB(t,q)
t=$.j2
p=(t&&C.B).e1(t,b)}else{q.innerHTML=b
p=$.az.createDocumentFragment()
for(t=J.m(p);s=q.firstChild,s!=null;)t.P(p,s)}t=$.az.body
if(q==null?t!=null:q!==t)J.lu(q)
c.b8(p)
C.p.dO(document,p)
return p},
e2:function(a,b,c){return this.N(a,b,c,null)},
cL:function(a,b,c,d){a.textContent=null
this.P(a,this.N(a,b,c,d))},
cK:function(a,b){return this.cL(a,b,null,null)},
a6:function(a,b){return a.getAttribute(b)},
dD:function(a,b){return a.removeAttribute(b)},
$isa:1,
$isq:1,
$isa2:1,
$isj:1,
$ist:1,
geC:function(a){return a.tagName}}
W.io.prototype={
$1:function(a){return!!J.w(a).$isa2},
$S:function(){return{func:1,args:[,]}}}
W.k.prototype={$isq:1,$isk:1}
W.j.prototype={
dl:function(a,b,c,d){return a.addEventListener(b,H.bY(c,1),!1)},
$isq:1,
$isj:1}
W.a3.prototype={$isq:1}
W.en.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.a3]},
$isc:1,
$asc:function(){return[W.a3]},
$isr:1,
$asr:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.eo.prototype={
gj:function(a){return a.length}}
W.es.prototype={
gj:function(a){return a.length}}
W.a4.prototype={$isq:1}
W.cf.prototype={}
W.ev.prototype={
gj:function(a){return a.length}}
W.bw.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]},
$isr:1,
$asr:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.cg.prototype={}
W.ew.prototype={
I:function(a,b){return a.send(b)}}
W.bx.prototype={}
W.ez.prototype={$isa:1,$isa2:1}
W.aT.prototype={$isq:1,$isk:1,$isaT:1}
W.eN.prototype={
k:function(a){return String(a)}}
W.eT.prototype={
gj:function(a){return a.length}}
W.eV.prototype={
eK:function(a,b,c){return a.send(b,c)},
I:function(a,b){return a.send(b)}}
W.bA.prototype={}
W.a5.prototype={$isq:1}
W.eW.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.a5]},
$isc:1,
$asc:function(){return[W.a5]},
$isr:1,
$asr:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.N.prototype={$isq:1,$isk:1,$isN:1}
W.f5.prototype={$isa:1}
W.S.prototype={
ga2:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.e(new P.aC("No elements"))
if(s>1)throw H.e(new P.aC("More than one element"))
return t.firstChild},
M:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.m(s),p=0;p<r;++p)q.P(s,t.firstChild)
return},
i:function(a,b,c){var t=this.a
J.l1(t,c,C.z.h(t.childNodes,b))},
gA:function(a){var t=this.a.childNodes
return new W.cd(t,t.length,-1,null,[H.al(t,"A",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){return C.z.h(this.a.childNodes,b)},
$asc:function(){return[W.t]},
$ascZ:function(){return[W.t]},
$asb:function(){return[W.t]},
$asbH:function(){return[W.t]}}
W.t.prototype={
ew:function(a){var t=a.parentNode
if(t!=null)J.bk(t,a)},
k:function(a){var t=a.nodeValue
return t==null?this.cP(a):t},
P:function(a,b){return a.appendChild(b)},
dE:function(a,b){return a.removeChild(b)},
dF:function(a,b,c){return a.replaceChild(b,c)},
$isq:1,
$isj:1,
$ist:1,
gb_:function(a){return a.previousSibling}}
W.d6.prototype={
b0:function(a){return a.previousNode()}}
W.bG.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]},
$isr:1,
$asr:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.ff.prototype={$isa:1}
W.fh.prototype={
gj:function(a){return a.length}}
W.a6.prototype={$isq:1,
gj:function(a){return a.length}}
W.fj.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.a6]},
$isc:1,
$asc:function(){return[W.a6]},
$isr:1,
$asr:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.fm.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
W.fn.prototype={
I:function(a,b){return a.send(b)}}
W.dc.prototype={
e1:function(a,b){return a.createContextualFragment(b)},
cB:function(a,b){return a.selectNodeContents(b)}}
W.fx.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y},
gL:function(a){return a.z}}
W.de.prototype={
I:function(a,b){return a.send(b)}}
W.fz.prototype={
gj:function(a){return a.length}}
W.fC.prototype={$isa:1}
W.a7.prototype={$isq:1,$isj:1}
W.fD.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.a7]},
$isc:1,
$asc:function(){return[W.a7]},
$isr:1,
$asr:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.a8.prototype={$isq:1}
W.fF.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.a8]},
$isc:1,
$asc:function(){return[W.a8]},
$isr:1,
$asr:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.a9.prototype={$isq:1,
gj:function(a){return a.length}}
W.fK.prototype={
h:function(a,b){return this.by(a,b)},
au:function(a,b){var t,s
for(t=0;!0;++t){s=this.dA(a,t)
if(s==null)return
b.$2(s,this.by(a,s))}},
gj:function(a){return a.length},
by:function(a,b){return a.getItem(b)},
dA:function(a,b){return a.key(b)}}
W.W.prototype={$isq:1}
W.ai.prototype={}
W.dj.prototype={
N:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aE(a,b,c,d)
t=W.lQ("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.S(s).M(0,new W.S(t))
return s}}
W.fS.prototype={
N:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aE(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.G.N(t.createElement("table"),b,c,d)
t.toString
t=new W.S(t)
r=t.ga2(t)
r.toString
t=new W.S(r)
q=t.ga2(t)
s.toString
q.toString
new W.S(s).M(0,new W.S(q))
return s}}
W.fT.prototype={
N:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aE(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.G.N(t.createElement("table"),b,c,d)
t.toString
t=new W.S(t)
r=t.ga2(t)
s.toString
r.toString
new W.S(s).M(0,new W.S(r))
return s}}
W.bL.prototype={$isbL:1}
W.aa.prototype={$isq:1,$isj:1}
W.X.prototype={$isq:1,$isj:1}
W.fW.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.X]},
$isc:1,
$asc:function(){return[W.X]},
$isr:1,
$asr:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.fX.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.aa]},
$isc:1,
$asc:function(){return[W.aa]},
$isr:1,
$asr:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.fY.prototype={
gj:function(a){return a.length}}
W.ab.prototype={$isq:1}
W.aZ.prototype={$isq:1,$isk:1,$isaZ:1}
W.h1.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.ab]},
$isc:1,
$asc:function(){return[W.ab]},
$isr:1,
$asr:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.h2.prototype={
gj:function(a){return a.length}}
W.be.prototype={}
W.h4.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y},
gL:function(a){return a.z}}
W.dn.prototype={
b0:function(a){return a.previousNode()}}
W.aE.prototype={}
W.h9.prototype={
k:function(a){return String(a)},
$isa:1}
W.hb.prototype={
gj:function(a){return a.length}}
W.he.prototype={
gj:function(a){return a.length}}
W.hf.prototype={
I:function(a,b){return a.send(b)}}
W.b0.prototype={
ge5:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(new P.v("deltaY is not supported"))},
$isq:1,
$isk:1,
$isN:1,
$isb0:1}
W.bN.prototype={
gdQ:function(a){var t,s
t=P.U
s=new P.av(0,$.C,null,[t])
this.du(a)
this.dG(a,W.kF(new W.hh(new P.i9(s,[t]))))
return s},
dG:function(a,b){return a.requestAnimationFrame(H.bY(b,1))},
du:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isa:1}
W.hh.prototype={
$1:function(a){this.a.dY(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.hi.prototype={$isa:1}
W.b1.prototype={$isa:1}
W.hq.prototype={
k:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(a.width)+" x "+H.h(a.height)},
w:function(a,b){var t,s,r
if(b==null)return!1
t=J.w(b)
if(!t.$isK)return!1
s=a.left
r=t.gaY(b)
if(s==null?r==null:s===r){s=a.top
r=t.gb2(b)
if(s==null?r==null:s===r){s=a.width
r=t.ga0(b)
if(s==null?r==null:s===r){s=a.height
t=t.ga_(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gv:function(a){var t,s,r,q
t=J.ao(a.left)
s=J.ao(a.top)
r=J.ao(a.width)
q=J.ao(a.height)
return W.kA(W.b5(W.b5(W.b5(W.b5(0,t),s),r),q))},
$isK:1,
$asK:function(){},
ga_:function(a){return a.height},
gaY:function(a){return a.left},
gb2:function(a){return a.top},
ga0:function(a){return a.width}}
W.dt.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[P.K]},
$isc:1,
$asc:function(){return[P.K]},
$isr:1,
$asr:function(){return[P.K]},
$isb:1,
$asb:function(){return[P.K]}}
W.hs.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.z]},
$isc:1,
$asc:function(){return[W.z]},
$isr:1,
$asr:function(){return[W.z]},
$isb:1,
$asb:function(){return[W.z]}}
W.ht.prototype={$isa:1}
W.hu.prototype={
ga_:function(a){return a.height},
ga0:function(a){return a.width},
gn:function(a){return a.x},
gp:function(a){return a.y}}
W.hL.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.a4]},
$isc:1,
$asc:function(){return[W.a4]},
$isr:1,
$asr:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.hM.prototype={$isa:1}
W.dw.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]},
$isr:1,
$asr:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.i3.prototype={$isa:1}
W.i6.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.a9]},
$isc:1,
$asc:function(){return[W.a9]},
$isr:1,
$asr:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.i7.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.W]},
$isc:1,
$asc:function(){return[W.W]},
$isr:1,
$asr:function(){return[W.W]},
$isb:1,
$asb:function(){return[W.W]}}
W.ie.prototype={$isa:1}
W.ig.prototype={$isa:1}
W.ho.prototype={
au:function(a,b){var t,s,r,q,p,o
for(t=this.gE(this),s=t.length,r=this.a,q=J.m(r),p=0;p<t.length;t.length===s||(0,H.J)(t),++p){o=t[p]
b.$2(o,q.a6(r,o))}},
gE:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.D([],[P.u])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.l(s,p.name)}return s},
gdw:function(){return this.a}}
W.hv.prototype={
h:function(a,b){return J.j_(this.a,b)},
gj:function(a){return this.gE(this).length}}
W.hy.prototype={
eq:function(a,b,c,d){return W.aj(this.a,this.b,a,!1,H.aJ(this,0))}}
W.jh.prototype={}
W.hz.prototype={
dM:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.l0(r,this.c,t,!1)}},
dg:function(a,b,c,d,e){this.dM()}}
W.hA.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.bQ.prototype={
a4:function(a){return $.$get$kz().D(0,W.bp(a))},
U:function(a,b,c){var t,s,r
t=W.bp(a)
s=$.$get$ji()
r=s.h(0,H.h(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
dh:function(a){var t,s
t=$.$get$ji()
if(t.gai(t)){for(s=0;s<262;++s)t.i(0,C.S[s],W.mT())
for(s=0;s<12;++s)t.i(0,C.r[s],W.mU())}}}
W.A.prototype={
gA:function(a){return new W.cd(a,this.gj(a),-1,null,[H.al(a,"A",0)])},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
W.d8.prototype={
a4:function(a){return C.a.bK(this.a,new W.f7(a))},
U:function(a,b,c){return C.a.bK(this.a,new W.f6(a,b,c))}}
W.f7.prototype={
$1:function(a){return a.a4(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.f6.prototype={
$1:function(a){return a.U(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.bT.prototype={
a4:function(a){return this.a.D(0,W.bp(a))},
U:function(a,b,c){var t,s
t=W.bp(a)
s=this.c
if(s.D(0,H.h(t)+"::"+b))return this.d.dP(c)
else if(s.D(0,"*::"+b))return this.d.dP(c)
else{s=this.b
if(s.D(0,H.h(t)+"::"+b))return!0
else if(s.D(0,"*::"+b))return!0
else if(s.D(0,H.h(t)+"::*"))return!0
else if(s.D(0,"*::*"))return!0}return!1},
dj:function(a,b,c,d){var t,s,r
this.a.M(0,c)
t=b.aA(0,new W.i4())
s=b.aA(0,new W.i5())
this.b.M(0,t)
r=this.c
r.M(0,C.U)
r.M(0,s)}}
W.i4.prototype={
$1:function(a){return!C.a.D(C.r,a)},
$S:function(){return{func:1,args:[,]}}}
W.i5.prototype={
$1:function(a){return C.a.D(C.r,a)},
$S:function(){return{func:1,args:[,]}}}
W.ia.prototype={
U:function(a,b,c){if(this.cS(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.j_(a,"template")==="")return this.e.D(0,b)
return!1}}
W.ib.prototype={
$1:function(a){return"TEMPLATE::"+H.h(a)},
$S:function(){return{func:1,args:[,]}}}
W.i8.prototype={
a4:function(a){var t=J.w(a)
if(!!t.$isbI)return!1
t=!!t.$isH
if(t&&W.bp(a)==="foreignObject")return!1
if(t)return!0
return!1},
U:function(a,b,c){if(b==="is"||C.i.bc(b,"on"))return!1
return this.a4(a)}}
W.cd.prototype={
q:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbA(J.bj(this.a,t))
this.c=t
return!0}this.sbA(null)
this.c=s
return!1},
gt:function(){return this.d},
sbA:function(a){this.d=a}}
W.d7.prototype={}
W.i2.prototype={}
W.dy.prototype={
b8:function(a){new W.ic(this).$2(a,null)},
at:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)J.bk(t,a)}else J.bk(b,a)},
dJ:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.lk(a)
r=J.j_(s.gdw(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.P(n)}p="element unprintable"
try{p=J.ay(a)}catch(n){H.P(n)}try{o=W.bp(a)
this.dI(a,b,t,p,o,s,r)}catch(n){if(H.P(n) instanceof P.ad)throw n
else{this.at(a,b)
window
m="Removing corrupted element "+H.h(p)
if(typeof console!="undefined")console.warn(m)}}},
dI:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.at(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.a4(a)){this.at(a,b)
window
t="Removing disallowed element <"+H.h(e)+"> from "+J.ay(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.U(a,"is",g)){this.at(a,b)
window
t="Removing disallowed type extension <"+H.h(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gE(f)
s=H.D(t.slice(0),[H.aJ(t,0)])
for(r=f.gE(f).length-1,t=f.a,q=J.m(t);r>=0;--r){p=s[r]
if(!this.a.U(a,J.lx(p),q.a6(t,p))){window
o="Removing disallowed attribute <"+H.h(e)+" "+p+'="'+H.h(q.a6(t,p))+'">'
if(typeof console!="undefined")console.warn(o)
q.a6(t,p)
q.dD(t,p)}}if(!!J.w(a).$isbL)this.b8(a.content)}}
W.ic.prototype={
$2:function(a,b){var t,s,r,q
switch(a.nodeType){case 1:this.a.dJ(a,b)
break
case 8:case 11:case 3:case 4:break
default:if(b==null){r=a.parentNode
if(r!=null)J.bk(r,a)}else J.bk(b,a)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.ll(t)}catch(q){H.P(q)
r=t
J.bk(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.t,W.t]}}}
W.bq.prototype={$isc:1,
$asc:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.br.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.bs.prototype={$isc:1,
$asc:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.bt.prototype={$isc:1,
$asc:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.bu.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.bv.prototype={$isc:1,
$asc:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.ch.prototype={}
W.cB.prototype={$isc:1,
$asc:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.cn.prototype={$isc:1,
$asc:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.ck.prototype={$isc:1,
$asc:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.cu.prototype={$isc:1,
$asc:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.cv.prototype={$isc:1,
$asc:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.cw.prototype={$isc:1,
$asc:function(){return[W.z]},
$isb:1,
$asb:function(){return[W.z]}}
W.cz.prototype={$isc:1,
$asc:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.cA.prototype={$isc:1,
$asc:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.ci.prototype={$isc:1,
$asc:function(){return[P.K]},
$isb:1,
$asb:function(){return[P.K]}}
W.cl.prototype={$isc:1,
$asc:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.cm.prototype={$isc:1,
$asc:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.cp.prototype={$isc:1,
$asc:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.cq.prototype={$isc:1,
$asc:function(){return[P.u]},
$isb:1,
$asb:function(){return[P.u]}}
W.cr.prototype={$isc:1,
$asc:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.cs.prototype={$isc:1,
$asc:function(){return[W.W]},
$isb:1,
$asb:function(){return[W.W]}}
W.cC.prototype={$isc:1,
$asc:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.cD.prototype={$isc:1,
$asc:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.cE.prototype={$isc:1,
$asc:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.cO.prototype={$isc:1,
$asc:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.cP.prototype={$isc:1,
$asc:function(){return[W.z]},
$isb:1,
$asb:function(){return[W.z]}}
W.cM.prototype={$isc:1,
$asc:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.cN.prototype={$isc:1,
$asc:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.cS.prototype={$isc:1,
$asc:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.cT.prototype={$isc:1,
$asc:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.cU.prototype={$isc:1,
$asc:function(){return[P.u]},
$isb:1,
$asb:function(){return[P.u]}}
W.cV.prototype={$isc:1,
$asc:function(){return[P.K]},
$isb:1,
$asb:function(){return[P.K]}}
W.cF.prototype={$isc:1,
$asc:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.cG.prototype={$isc:1,
$asc:function(){return[W.W]},
$isb:1,
$asb:function(){return[W.W]}}
W.cJ.prototype={$isc:1,
$asc:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.cR.prototype={$isc:1,
$asc:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
P.ip.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.u,,]}}}
P.hV.prototype={}
P.K.prototype={$asK:null}
P.dH.prototype={$isa:1}
P.aM.prototype={$isa:1}
P.e3.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.e4.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.e5.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.e6.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.e7.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.e8.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.e9.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.ea.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.eb.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.ec.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.ed.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.ee.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.ef.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.eg.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y},
gL:function(a){return a.z}}
P.eh.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.ei.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y},
gL:function(a){return a.z}}
P.ej.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.ek.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.ep.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.er.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.ae.prototype={}
P.aA.prototype={$isa:1}
P.ex.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.aq.prototype={$isq:1}
P.eI.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return this.X(a,b)},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
X:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.aq]},
$isb:1,
$asb:function(){return[P.aq]}}
P.eQ.prototype={$isa:1}
P.eR.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.ar.prototype={$isq:1}
P.f8.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return this.X(a,b)},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
X:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.ar]},
$isb:1,
$asb:function(){return[P.ar]}}
P.fg.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.fk.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.fl.prototype={
gj:function(a){return a.length}}
P.fq.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.fr.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.bI.prototype={$isa:1,$isbI:1}
P.fP.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return this.X(a,b)},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
X:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.u]},
$isb:1,
$asb:function(){return[P.u]}}
P.H.prototype={
N:function(a,b,c,d){var t,s,r,q,p,o
t=H.D([],[W.d7])
C.a.l(t,W.ky(null))
C.a.l(t,W.kB())
C.a.l(t,new W.i8())
c=new W.dy(new W.d8(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.n).e2(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.S(q)
o=t.ga2(t)
for(t=J.m(p);r=o.firstChild,r!=null;)t.P(p,r)
return p},
$isa:1,
$isH:1}
P.fQ.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.fR.prototype={$isa:1}
P.dk.prototype={}
P.fV.prototype={$isa:1}
P.bM.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.as.prototype={$isq:1}
P.h3.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return this.X(a,b)},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
X:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.as]},
$isb:1,
$asb:function(){return[P.as]}}
P.ha.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.hc.prototype={$isa:1}
P.hd.prototype={$isa:1}
P.bP.prototype={$isa:1}
P.i_.prototype={$isa:1}
P.i0.prototype={$isa:1}
P.i1.prototype={$isa:1}
P.cx.prototype={$isc:1,
$asc:function(){return[P.aq]},
$isb:1,
$asb:function(){return[P.aq]}}
P.cj.prototype={$isc:1,
$asc:function(){return[P.u]},
$isb:1,
$asb:function(){return[P.u]}}
P.co.prototype={$isc:1,
$asc:function(){return[P.ar]},
$isb:1,
$asb:function(){return[P.ar]}}
P.ct.prototype={$isc:1,
$asc:function(){return[P.as]},
$isb:1,
$asb:function(){return[P.as]}}
P.cH.prototype={$isc:1,
$asc:function(){return[P.aq]},
$isb:1,
$asb:function(){return[P.aq]}}
P.cI.prototype={$isc:1,
$asc:function(){return[P.as]},
$isb:1,
$asb:function(){return[P.as]}}
P.cK.prototype={$isc:1,
$asc:function(){return[P.u]},
$isb:1,
$asb:function(){return[P.u]}}
P.cQ.prototype={$isc:1,
$asc:function(){return[P.ar]},
$isb:1,
$asb:function(){return[P.ar]}}
P.dL.prototype={
gj:function(a){return a.length}}
P.fv.prototype={
bI:function(a,b){return a.activeTexture(b)},
bL:function(a,b,c){return a.attachShader(b,c)},
bM:function(a,b,c){return a.bindBuffer(b,c)},
bN:function(a,b,c){return a.bindFramebuffer(b,c)},
bO:function(a,b,c){return a.bindTexture(b,c)},
bP:function(a,b){return a.blendEquation(b)},
bQ:function(a,b,c){return a.blendFunc(b,c)},
bR:function(a,b,c,d){return a.bufferData(b,c,d)},
bS:function(a,b){return a.clear(b)},
bT:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bU:function(a,b){return a.compileShader(b)},
bV:function(a){return a.createBuffer()},
bW:function(a){return a.createProgram()},
bX:function(a,b){return a.createShader(b)},
bZ:function(a,b){return a.depthMask(b)},
c_:function(a,b){return a.disable(b)},
c0:function(a,b,c,d){return a.drawArrays(b,c,d)},
c1:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c2:function(a,b){return a.enable(b)},
c3:function(a,b){return a.enableVertexAttribArray(b)},
aB:function(a){return P.iq(a.getContextAttributes())},
b3:function(a,b){return a.getProgramInfoLog(b)},
b4:function(a,b,c){return a.getProgramParameter(b,c)},
b5:function(a,b){return a.getShaderInfoLog(b)},
b6:function(a,b,c){return a.getShaderParameter(b,c)},
b7:function(a,b,c){return a.getUniformLocation(b,c)},
c5:function(a,b){return a.linkProgram(b)},
ba:function(a,b,c){return a.shaderSource(b,c)},
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
P.fw.prototype={
dS:function(a,b){return a.beginTransformFeedback(b)},
dV:function(a,b){return a.bindVertexArray(b)},
e4:function(a){return a.createVertexArray()},
eb:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
ec:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
ed:function(a){return a.endTransformFeedback()},
eH:function(a,b,c,d){this.dL(a,b,c,d)
return},
dL:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
eI:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bI:function(a,b){return a.activeTexture(b)},
bL:function(a,b,c){return a.attachShader(b,c)},
bM:function(a,b,c){return a.bindBuffer(b,c)},
bN:function(a,b,c){return a.bindFramebuffer(b,c)},
bO:function(a,b,c){return a.bindTexture(b,c)},
bP:function(a,b){return a.blendEquation(b)},
bQ:function(a,b,c){return a.blendFunc(b,c)},
bR:function(a,b,c,d){return a.bufferData(b,c,d)},
bS:function(a,b){return a.clear(b)},
bT:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bU:function(a,b){return a.compileShader(b)},
bV:function(a){return a.createBuffer()},
bW:function(a){return a.createProgram()},
bX:function(a,b){return a.createShader(b)},
bZ:function(a,b){return a.depthMask(b)},
c_:function(a,b){return a.disable(b)},
c0:function(a,b,c,d){return a.drawArrays(b,c,d)},
c1:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c2:function(a,b){return a.enable(b)},
c3:function(a,b){return a.enableVertexAttribArray(b)},
aB:function(a){return P.iq(a.getContextAttributes())},
b3:function(a,b){return a.getProgramInfoLog(b)},
b4:function(a,b,c){return a.getProgramParameter(b,c)},
b5:function(a,b){return a.getShaderInfoLog(b)},
b6:function(a,b,c){return a.getShaderParameter(b,c)},
b7:function(a,b,c){return a.getUniformLocation(b,c)},
c5:function(a,b){return a.linkProgram(b)},
ba:function(a,b,c){return a.shaderSource(b,c)},
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
P.id.prototype={$isa:1}
P.fG.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return P.iq(this.dz(a,b))},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
dz:function(a,b){return a.item(b)},
$isc:1,
$asc:function(){return[P.aB]},
$isb:1,
$asb:function(){return[P.aB]}}
P.cy.prototype={$isc:1,
$asc:function(){return[P.aB]},
$isb:1,
$asb:function(){return[P.aB]}}
P.cL.prototype={$isc:1,
$asc:function(){return[P.aB]},
$isb:1,
$asb:function(){return[P.aB]}}
B.iM.prototype={
$1:function(a){$.$get$ir().i(0,a.which,!0)},
$S:function(){return{func:1,args:[W.aT]}}}
B.iN.prototype={
$1:function(a){$.$get$ir().i(0,a.which,null)},
$S:function(){return{func:1,args:[W.aT]}}}
B.iO.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.mK=t
$.mL=C.b.a8(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.js=s-C.b.J(window.innerWidth,2)
$.kS=-(t-C.b.J(window.innerHeight,2))},
$S:function(){return{func:1,args:[W.N]}}}
B.iP.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.c0=t-C.b.J(window.innerWidth,2)
$.c1=-(s-C.b.J(window.innerHeight,2))
if(a.button===2)$.$get$bZ().i(0,"right",!0)
else $.$get$bZ().i(0,"left",!0)},
$S:function(){return{func:1,args:[W.N]}}}
B.iQ.prototype={
$1:function(a){if(a.button===2)$.$get$bZ().i(0,"right",null)
else $.$get$bZ().i(0,"left",null)},
$S:function(){return{func:1,args:[W.N]}}}
B.f9.prototype={
d6:function(a,b,c,d){var t
d.toString
W.aj(d,W.mS().$1(d),new B.fa(this),!1,W.b0)
W.aj(d,"mousemove",new B.fb(this),!1,W.N)
t=W.aZ
W.aj(d,"touchstart",new B.fc(),!1,t)
W.aj(d,"touchmove",new B.fd(this),!1,t)
B.n7(null)}}
B.fa.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.at.ge5(a)*r.k3
if(C.c.a8(r.fy,t)>0)r.fy=H.Z(C.c.a8(r.fy,t))}catch(q){s=H.P(q)
P.am(s)}},
$S:function(){return{func:1,args:[W.b0]}}}
B.fb.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=H.Z(t.go+C.b.a8($.js,$.c0)*0.01)
s=t.id
r=$.c1
q=$.kS
t.id=H.Z(s+(r-q)*0.01)
$.c0=$.js
$.c1=q}},
$S:function(){return{func:1,args:[W.N]}}}
B.fc.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.a5(t.clientX)
C.c.a5(t.clientY)
$.c0=s
C.c.a5(t.clientX)
$.c1=C.c.a5(t.clientY)},
$S:function(){return{func:1,args:[W.aZ]}}}
B.fd.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.a5(t.clientX)
t=C.c.a5(t.clientY)
r=this.a
r.go=H.Z(r.go+C.b.a8(s,$.c0)*0.01)
r.id=H.Z(r.id+($.c1-t)*0.01)
$.c0=s
$.c1=t},
$S:function(){return{func:1,args:[W.aZ]}}}
G.eX.prototype={}
G.dp.prototype={
Z:function(a,b){var t=this.d
if(H.aw(!t.G(0,a)))H.aH("uniform "+a+" already set")
t.i(0,a,b)},
bj:function(){return this.d},
k:function(a){var t,s,r,q
t=H.D(["{"+new H.aD(H.iv(this),null).k(0)+"}["+this.a+"]"],[P.u])
for(s=this.d,r=s.gE(s),r=r.gA(r);r.q();){q=r.gt()
C.a.l(t,H.h(q)+": "+H.h(s.h(0,q)))}return C.a.aj(t,"\n")}}
G.dN.prototype={}
G.dQ.prototype={
c4:function(a,b,c){J.lh(this.a,b)
if(c>0)J.lD(this.a,b,c)}}
G.et.prototype={}
G.el.prototype={}
G.em.prototype={}
G.ce.prototype={
ao:function(a){var t=this.e
H.d(!t.G(0,a))
H.d(C.i.bc(a,"a"))
switch($.$get$Y().h(0,a).a){case"vec2":t.i(0,a,H.D([],[T.n]))
break
case"vec3":t.i(0,a,H.D([],[T.i]))
break
case"vec4":t.i(0,a,H.D([],[T.aG]))
break
case"float":t.i(0,a,H.D([],[P.M]))
break
case"uvec4":t.i(0,a,H.D([],[[P.b,P.p]]))
break
default:if(H.aw(!1))H.aH("unknown type for "+a)}},
cW:function(a){var t,s,r
H.d(!0)
t=this.d.length
for(s=this.b,r=0;r<a;++r,t+=3)C.a.l(s,new G.el(t,t+1,t+2))},
bf:function(a){var t,s,r
H.d(!0)
t=this.d.length
for(s=this.c,r=0;r<a;++r,t+=4)C.a.l(s,new G.em(t,t+1,t+2,t+3))},
aH:function(a){var t,s,r,q,p
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.J)(a),++r){q=a[r]
p=new T.i(new Float32Array(3))
p.C(q)
C.a.l(s,p)}},
aG:function(a,b){var t,s,r,q,p,o,n
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.J)(b),++q){p=b[q]
o=new Float32Array(2)
n=p.a
o[1]=n[1]
o[0]=n[0]
r.l(t,new T.n(o))}},
cV:function(a,b){var t,s,r,q,p
t=this.e.h(0,a)
for(s=t&&C.a,r=0;r<4;++r){q=b[r]
p=new T.i(new Float32Array(3))
p.C(q)
s.l(t,p)}},
d0:function(){var t,s,r,q,p,o,n,m,l,k
t=this.b
H.d(t.length>0||this.c.length>0)
s=this.c
r=new Array(t.length*3+s.length*6)
r.fixed$length=Array
q=H.D(r,[P.p])
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
d1:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=this.d
s=new Array(t.length)
s.fixed$length=Array
r=H.D(s,[T.i])
q=new T.i(new Float32Array(H.f(3)))
p=new T.i(new Float32Array(H.f(3)))
for(s=this.b,o=s.length,n=0;n<s.length;s.length===o||(0,H.J)(s),++n){m=s[n]
l=m.a
k=m.b
j=m.c
G.ka(t[l],t[k],t[j],q,p)
i=new T.i(new Float32Array(3))
i.C(p)
r[l]=i
l=new T.i(new Float32Array(3))
l.C(p)
r[k]=l
l=new T.i(new Float32Array(3))
l.C(p)
r[j]=l}for(s=this.c,o=s.length,n=0;n<s.length;s.length===o||(0,H.J)(s),++n){h=s[n]
l=h.a
k=h.b
j=h.c
G.ka(t[l],t[k],t[j],q,p)
i=new T.i(new Float32Array(3))
i.C(p)
r[l]=i
l=new T.i(new Float32Array(3))
l.C(p)
r[k]=l
l=new T.i(new Float32Array(3))
l.C(p)
r[j]=l
l=new T.i(new Float32Array(3))
l.C(p)
r[h.d]=l}this.e.i(0,"aNormal",r)},
k:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gE(s),r=r.gA(r);r.q();){q=r.gt()
p=$.$get$Y().h(0,q).a
C.a.l(t,H.h(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.aj(t," ")}}
G.dm.prototype={}
G.dl.prototype={}
G.eS.prototype={
d5:function(a){this.Z("cDepthTest",!0)
this.Z("cDepthWrite",!0)
this.Z("cBlendEquation",$.$get$jJ())
this.Z("cStencilFunc",$.$get$kf())}}
G.eU.prototype={
bh:function(a,b,c){var t,s
if(C.i.aI(a,0)===105){if(H.aw(C.b.aF(b.length,c)===this.z))H.aH("ChangeAttribute "+this.z)}else{t=C.b.aF(b.length,c)
if(H.aw(t===(this.ch.length/3|0)))H.aH("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.dD(t.a,34962,s)
J.jy(t.a,34962,b,35048)},
d2:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
a9:function(a,b,c){var t,s,r,q,p,o
t=J.ju(a,0)===105
if(t&&this.z===0)this.z=C.b.aF(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.iW(r.a))
this.bh(a,b,c)
q=$.$get$Y().h(0,a)
if(q==null)throw H.e("Unknown canonical "+a)
p=this.x
if(H.aw(p.G(0,a)))H.aH("unexpected attribute "+a)
o=p.h(0,a)
J.dE(r.a,this.e)
r.c4(0,o,t?1:0)
s=s.h(0,a)
p=q.bi()
J.dD(r.a,34962,s)
J.jG(r.a,o,p,5126,!1,0,0)},
k:function(a){var t,s,r,q
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,r=t.gE(t),r=r.gA(r);r.q();){q=r.gt()
C.a.l(s,H.h(q)+":"+t.h(0,q).length)}return"MESH["+this.a+"] "+C.a.aj(s,"  ")},
saN:function(a){this.cx=a}}
G.fe.prototype={
bj:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
t=this.z
s=this.x.d
t.C(s)
r=t.a
r[12]=0
r[13]=0
r[14]=0
r[15]=1
s=s.a
q=-s[12]
p=-s[13]
o=-s[14]
s=J.w(q)
n=!!s.$isaG
m=n?s.gaz(q):1
if(!!s.$isi){l=s.gn(q)
p=s.gp(q)
o=s.gL(q)
q=l}else if(n){l=s.gn(q)
p=s.gp(q)
o=s.gL(q)
q=l}else if(!(typeof q==="number")){q=null
p=null
o=null}s=C.c.H(r[0],q)
n=C.c.H(r[4],p)
k=C.c.H(r[8],o)
j=r[12]
i=C.c.H(r[1],q)
h=C.c.H(r[5],p)
g=C.c.H(r[9],o)
f=r[13]
e=C.c.H(r[2],q)
d=C.c.H(r[6],p)
c=C.c.H(r[10],o)
b=r[14]
a=C.c.H(r[3],q)
a0=C.c.H(r[7],p)
a1=C.c.H(r[11],o)
a2=r[15]
r[12]=s+n+k+j*m
r[13]=i+h+g+f*m
r[14]=e+d+c+b*m
r[15]=a+a0+a1+a2*m
a2=this.Q
a2.C(this.y)
a2.c8(0,t)
t=this.d
t.i(0,"uPerspectiveViewMatrix",a2)
return t},
bl:function(){var t,s,r,q,p,o,n,m,l,k,j
t=this.cy
s=this.cx
r=t-s
q=this.y
p=this.db
o=p+r/this.ch
n=this.dx
m=this.dy
l=o-p
k=m-n
j=q.a
j[0]=0
j[1]=0
j[2]=0
j[3]=0
j[4]=0
j[5]=0
j[6]=0
j[7]=0
j[8]=0
j[9]=0
j[10]=0
j[11]=0
j[12]=0
j[13]=0
j[14]=0
j[15]=0
q.Y(0,0,2/r)
q.Y(1,1,2/l)
q.Y(2,2,-2/k)
q.Y(0,3,-(t+s)/r)
q.Y(1,3,-(o+p)/l)
q.Y(2,3,-(m+n)/k)
q.Y(3,3,1)},
cX:function(a,b){var t=C.b.cu(a,b)
if(this.ch===t)return
this.ch=t
this.bl()}}
G.fu.prototype={
dc:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gj(t)===s.gj(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gE(s),s=s.gA(s);s.q();){q=s.gt()
if(!t.G(0,q))C.a.l(r,q)}for(t=this.x,s=new P.bR(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.q();){q=s.d
if(!t.D(0,q))C.a.l(r,q)}return r},
de:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gE(b),s=s.gA(s),r=this.d,q=this.y,p=this.z,o=0;s.q();){n=s.gt()
switch(J.ju(n,0)){case 117:if(q.G(0,n)){m=b.h(0,n)
if(p.G(0,n))H.iK("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$Y().h(0,n)
if(l==null)H.E("unknown "+n)
H.d(q.G(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.j0(r.a,k,m)
else if(!!J.w(m).$isk4)J.lB(r.a,k,m)
break
case"float":if(l.c===0)J.lz(r.a,k,m)
else if(!!J.w(m).$iseq)J.lA(r.a,k,m)
break
case"mat4":if(l.c===0){j=H.aK(m,"$isG").a
J.jF(r.a,k,!1,j)}else if(!!J.w(m).$iseq)J.jF(r.a,k,!1,m)
else if(H.aw(!1))H.aH("bad unform: "+n)
break
case"mat3":if(l.c===0){j=H.aK(m,"$isah").a
J.jE(r.a,k,!1,j)}else if(!!J.w(m).$iseq)J.jE(r.a,k,!1,m)
else if(H.aw(!1))H.aH("bad unform: "+n)
break
case"vec4":j=l.c
i=r.a
if(j===0)J.jD(i,k,H.aK(m,"$isaG").a)
else J.jD(i,k,m)
break
case"vec3":j=l.c
i=r.a
if(j===0)J.jC(i,k,H.aK(m,"$isi").a)
else J.jC(i,k,m)
break
case"vec2":j=l.c
i=r.a
if(j===0)J.jB(i,k,H.aK(m,"$isn").a)
else J.jB(i,k,m)
break
case"sampler2D":case"sampler2DShadow":j=C.b.a1(33984,this.ch)
J.jv(r.a,j)
j=H.aK(m,"$ismi").d3()
J.jx(r.a,3553,j)
j=this.ch
J.j0(r.a,k,j)
this.ch=this.ch+1
break
case"samplerCube":H.d(n==="uCubeTexture")
j=C.b.a1(33984,this.ch)
J.jv(r.a,j)
j=H.aK(m,"$ismi").d3()
J.jx(r.a,34067,j)
j=this.ch
J.j0(r.a,k,j)
this.ch=this.ch+1
break
default:H.iK("Error: unknow uniform type: "+j)
H.d(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":j=J.F(m,!0)
i=r.a
if(j)J.dF(i,2929)
else J.iX(i,2929)
break
case"cStencilFunc":H.aK(m,"$isdm")
j=m.a
i=r.a
if(j===1281)J.iX(i,2960)
else{J.dF(i,2960)
i=m.b
h=m.c
J.lw(r.a,j,i,h)}break
case"cDepthWrite":J.lb(r.a,m)
break
case"cBlendEquation":H.aK(m,"$isdl")
j=m.a
i=r.a
if(j===1281)J.iX(i,3042)
else{J.dF(i,3042)
i=m.b
h=m.c
J.l5(r.a,i,h)
J.l4(r.a,j)}break}++o
break}}s=Date.now()
""+o
new P.aP(1000*(s-new P.bn(t,!1).a)).k(0)},
d_:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
Date.now()
t=this.d
J.lC(t.a,this.r)
this.ch=0
this.z.V(0)
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.J)(b),++r){q=b[r]
this.de(q.a,q.bj())}s=this.Q
s.V(0)
for(p=a.cy,p=p.gE(p),p=p.gA(p);p.q();)s.l(0,p.gt())
o=this.dc()
if(o.length!==0)P.am("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.h(o)))
s=a.d
p=a.e
J.dE(s.a,p)
n=this.e.f.length>0
p=a.f
s=a.d2()
m=a.Q
l=a.z
if(n)J.l2(t.a,p)
if(m!==-1){k=t.a
if(l>1)J.lf(k,p,s,m,0,l)
else J.le(k,p,s,m,0)}else{m=t.a
if(l>1)J.ld(m,p,0,s,l)
else J.lc(m,p,0,s)}if(n)J.li(t.a)},
d7:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.J)(t),++o){n=t[o]
r.i(0,n,J.jA(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.J)(t),++o){n=t[o]
r.i(0,n,J.jA(q.a,p,n))}}}
G.y.prototype={
bi:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.d(!1)
return-1}}}
G.dg.prototype={
cU:function(a){var t,s,r,q
H.d(this.b==null)
for(t=this.c,s=this.x,r=0;r<1;++r){q=a[r]
H.d($.$get$Y().G(0,q))
H.d(!C.a.D(t,q))
C.a.l(t,q)
s.i(0,q,this.r);++this.r}C.a.bb(t)},
bg:function(a){var t,s,r,q
H.d(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.J)(a),++r){q=a[r]
if(H.aw($.$get$Y().G(0,q)))H.aH("missing uniform "+q)
H.d(!C.a.D(s,q))
C.a.l(s,q)}C.a.bb(s)},
d8:function(a,b){H.d(this.b==null)
this.b=this.df(!0,a,b)},
bk:function(a){return this.d8(a,null)},
df:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.d(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.J)(t),++o){n=t[o]
m=$.$get$Y().h(0,n)
C.a.l(q,"layout (location="+H.h(p.h(0,n))+") in "+m.a+" "+H.h(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,o=0;!1;++o){k=t[o]
m=$.$get$Y().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.h(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.J)(t),++o){k=t[o]
m=$.$get$Y().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.h(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.J)(t),++o){k=t[o]
m=$.$get$Y().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.h(k)+j+";")}C.a.l(q,"")
C.a.l(q,"void main(void) {")
C.a.M(q,b)
C.a.l(q,"}")
return C.a.aj(q,"\n")}}
G.fE.prototype={
a7:function(a,b,c){var t=this.d.a
t[12]=a
t[13]=b
t[14]=c}}
R.fI.prototype={
di:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.mq("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.u).br(r,"float")
r.setProperty(p,"left","")
p=C.u.br(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.o.P(t,s)}return t},
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
J.iU(this.a,s)
r=this.di(b,c,90,30)
this.d=r
J.iU(this.a,r)
t=t.createElement("div")
this.c=t
J.iU(this.a,t)}}
R.fJ.prototype={
dd:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.w.eG(s,2)+" fps"
t=this.c;(t&&C.o).cK(t,b)
r=C.b.J(30*C.w.dW(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.o).P(t,q)}}
A.aV.prototype={
k:function(a){return"NODE["+this.a+"]"}}
A.df.prototype={}
A.ft.prototype={
cZ:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.d
s=this.r
r=this.z
q=this.Q
p=t.a
t=t.b
J.l3(p.a,36160,t)
H.d(r>0&&q>0)
J.lE(p.a,this.x,this.y,r,q)
if(s!==0)J.l6(p.a,s)
for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.J)(t),++o){n=t[o]
m=n.e
C.a.l(m,new G.dp(P.Q(),"transforms",!1,!0))
l=new T.G(new Float32Array(16))
l.F()
for(r=n.f,q=r.length,p=n.d,k=0;k<r.length;r.length===q||(0,H.J)(r),++k)A.kK(p,r[k],l,a,m)
m.pop()}},
cY:function(){return this.cZ(null)}}
A.iw.prototype={
$2:function(a,b){var t=536870911&a+J.ao(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(){return{func:1,args:[P.p,P.q]}}}
T.ah.prototype={
C:function(a){var t,s
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
k:function(a){return"[0] "+this.S(0).k(0)+"\n[1] "+this.S(1).k(0)+"\n[2] "+this.S(2).k(0)+"\n"},
h:function(a,b){return this.a[b]},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.ah){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gv:function(a){return A.dA(this.a)},
S:function(a){var t,s
t=new Float32Array(H.f(3))
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.i(t)},
e0:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
if(g===0){this.C(a)
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
T.G.prototype={
Y:function(a,b,c){H.d(a<4)
H.d(b<4)
this.a[b*4+a]=c},
C:function(a){var t,s
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
k:function(a){return"[0] "+this.S(0).k(0)+"\n[1] "+this.S(1).k(0)+"\n[2] "+this.S(2).k(0)+"\n[3] "+this.S(3).k(0)+"\n"},
h:function(a,b){return this.a[b]},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.G){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gv:function(a){return A.dA(this.a)},
S:function(a){var t,s
t=new Float32Array(H.f(4))
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.aG(t)},
F:function(){var t=this.a
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
c8:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.n.prototype={
k:function(a){var t=this.a
return"["+H.h(t[0])+","+H.h(t[1])+"]"},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.n){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gv:function(a){return A.dA(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gn:function(a){return this.a[0]},
gp:function(a){return this.a[1]}}
T.i.prototype={
m:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
C:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
k:function(a){var t=this.a
return"["+H.h(t[0])+","+H.h(t[1])+","+H.h(t[2])+"]"},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.i){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gv:function(a){return A.dA(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){return Math.sqrt(this.gay())},
gay:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
aZ:function(a){var t,s,r
t=Math.sqrt(this.gay())
if(t===0)return 0
s=1/t
r=this.a
r[0]=r[0]*s
r[1]=r[1]*s
r[2]=r[2]*s
return t},
aX:function(a){var t,s
t=a.a
s=this.a
return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]},
bY:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.i(new Float32Array(H.f(3)))
t.m(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
aD:function(a){var t,s
t=a.a
s=this.a
s[0]=s[0]-t[0]
s[1]=s[1]-t[1]
s[2]=s[2]-t[2]},
cA:function(a,b){var t=this.a
t[2]=t[2]*b
t[1]=t[1]*b
t[0]=t[0]*b},
gn:function(a){return this.a[0]},
gp:function(a){return this.a[1]},
gL:function(a){return this.a[2]}}
T.aG.prototype={
k:function(a){var t=this.a
return H.h(t[0])+","+H.h(t[1])+","+H.h(t[2])+","+H.h(t[3])},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aG){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gv:function(a){return A.dA(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){var t,s,r,q
t=this.a
s=t[0]
r=t[1]
q=t[2]
t=t[3]
return Math.sqrt(s*s+r*r+q*q+t*t)},
gn:function(a){return this.a[0]},
gp:function(a){return this.a[1]},
gL:function(a){return this.a[2]},
gaz:function(a){return this.a[3]}}
F.iI.prototype={
$1:function(a){var t,s,r
t=this.a
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.am("size change "+H.h(s)+" "+H.h(r))
this.b.cX(s,r)
t=this.c
t.z=s
t.Q=r},
$S:function(){return{func:1,v:true,args:[W.k]}}}
F.iH.prototype={
$1:function(b3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
t=this.a
t.a=b3+0
s=this.c
r=s.k4
if(r.h(0,37)!=null)s.go=H.Z(s.go+0.03)
else if(r.h(0,39)!=null)s.go=H.Z(s.go-0.03)
if(r.h(0,38)!=null)s.id=H.Z(s.id+0.03)
else if(r.h(0,40)!=null)s.id=H.Z(s.id-0.03)
if(r.h(0,33)!=null)s.fy=H.Z(s.fy*0.99)
else if(r.h(0,34)!=null)s.fy=H.Z(s.fy*1.01)
if(r.h(0,32)!=null){s.go=0
s.id=0}r=H.Z(C.c.dX(s.id,-1.4707963267948965,1.4707963267948965))
s.id=r
q=s.fy
p=s.go
o=q*Math.cos(r)
s.a7(o*Math.cos(p),q*Math.sin(r),o*Math.sin(p))
p=s.k2
r=s.d.a
q=p.a
r[12]=r[12]+q[0]
r[13]=r[13]+q[1]
r[14]=r[14]+q[2]
q=r[12]
n=r[13]
m=r[14]
l=new T.i(new Float32Array(H.f(3)))
l.m(0,1,0)
k=s.e
j=k.a
j[0]=r[12]
j[1]=r[13]
j[2]=r[14]
j=new Float32Array(H.f(3))
i=new T.i(j)
i.C(k)
i.aD(p)
i.aZ(0)
h=l.bY(i)
h.aZ(0)
g=i.bY(h)
g.aZ(0)
p=h.aX(k)
f=g.aX(k)
k=i.aX(k)
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
r[15]=1
r[14]=-k
r[13]=-f
r[12]=-p
r[11]=0
r[10]=j
r[9]=c
r[8]=e
r[7]=0
r[6]=a2
r[5]=a1
r[4]=a0
r[3]=0
r[2]=a
r[1]=b
r[0]=d
r[12]=q
r[13]=n
r[14]=m
m=s.k1
n=s.f
q=n.a
q[0]=r[2]
q[1]=r[6]
q[2]=r[10]
m=-m
n=Math.sqrt(n.gay())
h=q[0]/n
g=q[1]/n
i=q[2]/n
n=Math.cos(m)
m=Math.sin(m)
a3=1-n
a4=h*h*a3+n
q=i*m
a5=h*g*a3-q
d=g*m
a6=h*i*a3+d
a7=g*h*a3+q
a8=g*g*a3+n
m=h*m
a9=g*i*a3-m
b0=i*h*a3-d
b1=i*g*a3+m
b2=i*i*a3+n
n=r[0]
m=r[4]
d=r[8]
q=r[1]
b=r[5]
a=r[9]
a0=r[2]
a1=r[6]
a2=r[10]
e=r[3]
c=r[7]
j=r[11]
r[0]=n*a4+m*a7+d*b0
r[1]=q*a4+b*a7+a*b0
r[2]=a0*a4+a1*a7+a2*b0
r[3]=e*a4+c*a7+j*b0
r[4]=n*a5+m*a8+d*b1
r[5]=q*a5+b*a8+a*b1
r[6]=a0*a5+a1*a8+a2*b1
r[7]=e*a5+c*a8+j*b1
r[8]=n*a6+m*a9+d*b2
r[9]=q*a6+b*a9+a*b2
r[10]=a0*a6+a1*a9+a2*b2
r[11]=e*a6+c*a9+j*b2
s.k1=H.Z(s.k1+0.01)
j=s.id
s=s.go
this.d.cY()
C.au.gdQ(window).cc(this)
this.b.dd(t.a,H.h(j*180/3.141592653589793)+"<br>"+H.h(s*180/3.141592653589793))},
$S:function(){return{func:1,v:true,args:[P.U]}}}
J.a.prototype.cP=J.a.prototype.k
J.by.prototype.cR=J.by.prototype.k
P.V.prototype.cQ=P.V.prototype.aA
W.a2.prototype.aE=W.a2.prototype.N
W.bT.prototype.cS=W.bT.prototype.U;(function installTearOffs(){installTearOff(H.b3.prototype,"gep",0,0,0,null,["$0"],["aw"],0)
installTearOff(H.ak.prototype,"gcC",0,0,0,null,["$1"],["K"],2)
installTearOff(H.b2.prototype,"ge7",0,0,0,null,["$1"],["W"],2)
installTearOff(P,"mG",1,0,0,null,["$1"],["mn"],1)
installTearOff(P,"mH",1,0,0,null,["$1"],["mo"],1)
installTearOff(P,"mI",1,0,0,null,["$1"],["mp"],1)
installTearOff(P,"kJ",1,0,0,null,["$0"],["mE"],0)
installTearOff(P.av.prototype,"gdn",0,0,0,null,["$2","$1"],["ap","dq"],5)
installTearOff(P,"mN",1,0,0,null,["$2"],["lL"],6)
installTearOff(W,"mS",1,0,0,null,["$1"],["lR"],7)
installTearOff(W,"mT",1,0,0,null,["$4"],["mt"],4)
installTearOff(W,"mU",1,0,0,null,["$4"],["mu"],4)
installTearOff(W.d6.prototype,"gb_",0,1,0,null,["$0"],["b0"],3)
installTearOff(W.dn.prototype,"gb_",0,1,0,null,["$0"],["b0"],3)
installTearOff(F,"kZ",1,0,0,null,["$0"],["n1"],0)})();(function inheritance(){inherit(P.q,null)
var t=P.q
inherit(H.j6,t)
inherit(J.a,t)
inherit(J.dK,t)
inherit(P.V,t)
inherit(H.d_,t)
inherit(P.cW,t)
inherit(H.cc,t)
inherit(H.b7,t)
inherit(H.hT,t)
inherit(H.b3,t)
inherit(H.hw,t)
inherit(H.b4,t)
inherit(H.hS,t)
inherit(H.hp,t)
inherit(H.bd,t)
inherit(H.fZ,t)
inherit(H.ap,t)
inherit(H.ak,t)
inherit(H.b2,t)
inherit(H.fs,t)
inherit(H.h5,t)
inherit(P.b9,t)
inherit(H.dx,t)
inherit(H.aD,t)
inherit(H.af,t)
inherit(H.eJ,t)
inherit(H.eL,t)
inherit(P.hr,t)
inherit(P.du,t)
inherit(P.av,t)
inherit(P.ds,t)
inherit(P.fL,t)
inherit(P.fM,t)
inherit(P.b6,t)
inherit(P.ih,t)
inherit(P.fB,t)
inherit(P.hQ,t)
inherit(P.bR,t)
inherit(P.bH,t)
inherit(P.x,t)
inherit(P.hR,t)
inherit(P.ax,t)
inherit(P.I,t)
inherit(P.bn,t)
inherit(P.U,t)
inherit(P.aP,t)
inherit(P.di,t)
inherit(P.hB,t)
inherit(P.e2,t)
inherit(P.b,t)
inherit(P.aB,t)
inherit(P.aW,t)
inherit(P.bJ,t)
inherit(P.u,t)
inherit(P.bK,t)
inherit(W.dS,t)
inherit(W.ho,t)
inherit(W.bQ,t)
inherit(W.A,t)
inherit(W.d8,t)
inherit(W.bT,t)
inherit(W.i8,t)
inherit(W.cd,t)
inherit(W.d7,t)
inherit(W.i2,t)
inherit(W.dy,t)
inherit(P.hV,t)
inherit(G.eX,t)
inherit(G.dQ,t)
inherit(G.et,t)
inherit(G.el,t)
inherit(G.em,t)
inherit(G.ce,t)
inherit(G.dm,t)
inherit(G.dl,t)
inherit(G.y,t)
inherit(G.dg,t)
inherit(R.fI,t)
inherit(T.ah,t)
inherit(T.G,t)
inherit(T.n,t)
inherit(T.i,t)
inherit(T.aG,t)
t=J.a
inherit(J.eE,t)
inherit(J.eF,t)
inherit(J.by,t)
inherit(J.aQ,t)
inherit(J.ba,t)
inherit(J.aR,t)
inherit(H.bB,t)
inherit(H.bc,t)
inherit(W.j,t)
inherit(W.a0,t)
inherit(W.c3,t)
inherit(W.dO,t)
inherit(W.z,t)
inherit(W.ch,t)
inherit(W.dU,t)
inherit(W.dV,t)
inherit(W.dW,t)
inherit(W.c8,t)
inherit(W.c9,t)
inherit(W.ca,t)
inherit(W.cq,t)
inherit(W.dZ,t)
inherit(W.k,t)
inherit(W.cp,t)
inherit(W.a4,t)
inherit(W.ev,t)
inherit(W.cB,t)
inherit(W.eN,t)
inherit(W.eT,t)
inherit(W.a5,t)
inherit(W.cn,t)
inherit(W.f5,t)
inherit(W.d6,t)
inherit(W.cm,t)
inherit(W.ff,t)
inherit(W.be,t)
inherit(W.a6,t)
inherit(W.cl,t)
inherit(W.ai,t)
inherit(W.dc,t)
inherit(W.a8,t)
inherit(W.cA,t)
inherit(W.a9,t)
inherit(W.fK,t)
inherit(W.W,t)
inherit(W.cz,t)
inherit(W.fY,t)
inherit(W.ab,t)
inherit(W.cr,t)
inherit(W.h2,t)
inherit(W.dn,t)
inherit(W.h9,t)
inherit(W.he,t)
inherit(W.hq,t)
inherit(W.ci,t)
inherit(W.cw,t)
inherit(W.cv,t)
inherit(W.cu,t)
inherit(W.ck,t)
inherit(W.cs,t)
inherit(W.ie,t)
inherit(W.ig,t)
inherit(P.aq,t)
inherit(P.cx,t)
inherit(P.ar,t)
inherit(P.co,t)
inherit(P.fk,t)
inherit(P.fl,t)
inherit(P.fq,t)
inherit(P.cj,t)
inherit(P.as,t)
inherit(P.ct,t)
inherit(P.hd,t)
inherit(P.dL,t)
inherit(P.fv,t)
inherit(P.fw,t)
inherit(P.id,t)
inherit(P.cy,t)
t=J.by
inherit(J.fi,t)
inherit(J.b_,t)
inherit(J.aS,t)
inherit(J.j5,J.aQ)
t=J.ba
inherit(J.cY,t)
inherit(J.cX,t)
t=P.V
inherit(H.c,t)
inherit(H.d0,t)
inherit(H.dr,t)
t=H.c
inherit(H.bb,t)
inherit(H.eK,t)
inherit(H.e1,H.d0)
t=P.cW
inherit(H.eO,t)
inherit(H.hg,t)
t=H.bb
inherit(H.bz,t)
inherit(P.eM,t)
t=H.b7
inherit(H.iR,t)
inherit(H.iS,t)
inherit(H.hO,t)
inherit(H.hx,t)
inherit(H.eA,t)
inherit(H.eB,t)
inherit(H.hU,t)
inherit(H.h_,t)
inherit(H.h0,t)
inherit(H.iT,t)
inherit(H.iB,t)
inherit(H.iC,t)
inherit(H.iD,t)
inherit(H.iE,t)
inherit(H.iF,t)
inherit(H.fU,t)
inherit(H.eG,t)
inherit(H.ix,t)
inherit(H.iy,t)
inherit(H.iz,t)
inherit(P.hl,t)
inherit(P.hk,t)
inherit(P.hm,t)
inherit(P.hn,t)
inherit(P.hC,t)
inherit(P.hG,t)
inherit(P.hD,t)
inherit(P.hE,t)
inherit(P.hF,t)
inherit(P.hJ,t)
inherit(P.hK,t)
inherit(P.hI,t)
inherit(P.hH,t)
inherit(P.fN,t)
inherit(P.fO,t)
inherit(P.ik,t)
inherit(P.hY,t)
inherit(P.hX,t)
inherit(P.hZ,t)
inherit(P.eP,t)
inherit(P.e_,t)
inherit(P.e0,t)
inherit(W.io,t)
inherit(W.hh,t)
inherit(W.hA,t)
inherit(W.f7,t)
inherit(W.f6,t)
inherit(W.i4,t)
inherit(W.i5,t)
inherit(W.ib,t)
inherit(W.ic,t)
inherit(P.ip,t)
inherit(B.iM,t)
inherit(B.iN,t)
inherit(B.iO,t)
inherit(B.iP,t)
inherit(B.iQ,t)
inherit(B.fa,t)
inherit(B.fb,t)
inherit(B.fc,t)
inherit(B.fd,t)
inherit(A.iw,t)
inherit(F.iI,t)
inherit(F.iH,t)
t=H.hp
inherit(H.bf,t)
inherit(H.bU,t)
t=P.b9
inherit(H.d9,t)
inherit(H.eH,t)
inherit(H.h8,t)
inherit(H.h7,t)
inherit(H.dP,t)
inherit(H.fy,t)
inherit(P.c2,t)
inherit(P.da,t)
inherit(P.ad,t)
inherit(P.v,t)
inherit(P.dq,t)
inherit(P.aC,t)
inherit(P.a1,t)
inherit(P.dT,t)
t=H.fU
inherit(H.fH,t)
inherit(H.bm,t)
inherit(H.hj,P.c2)
t=H.bc
inherit(H.eY,t)
inherit(H.d2,t)
t=H.d2
inherit(H.bD,t)
inherit(H.bC,t)
inherit(H.bE,H.bD)
inherit(H.d3,H.bE)
inherit(H.bF,H.bC)
inherit(H.d4,H.bF)
t=H.d3
inherit(H.d1,t)
inherit(H.eZ,t)
t=H.d4
inherit(H.f_,t)
inherit(H.f0,t)
inherit(H.f1,t)
inherit(H.f2,t)
inherit(H.f3,t)
inherit(H.d5,t)
inherit(H.f4,t)
inherit(P.i9,P.hr)
inherit(P.hW,P.ih)
inherit(P.dv,H.af)
inherit(P.fA,P.fB)
inherit(P.hN,P.fA)
inherit(P.hP,P.hN)
inherit(P.cZ,P.bH)
t=P.U
inherit(P.M,t)
inherit(P.p,t)
t=P.ad
inherit(P.dd,t)
inherit(P.ey,t)
t=W.j
inherit(W.t,t)
inherit(W.bq,t)
inherit(W.dR,t)
inherit(W.eo,t)
inherit(W.bx,t)
inherit(W.bA,t)
inherit(W.fn,t)
inherit(W.de,t)
inherit(W.fC,t)
inherit(W.a7,t)
inherit(W.br,t)
inherit(W.aa,t)
inherit(W.X,t)
inherit(W.bs,t)
inherit(W.hb,t)
inherit(W.hf,t)
inherit(W.bN,t)
inherit(W.hi,t)
inherit(W.b1,t)
inherit(W.i3,t)
t=W.t
inherit(W.a2,t)
inherit(W.aO,t)
inherit(W.bo,t)
inherit(W.c7,t)
inherit(W.ht,t)
t=W.a2
inherit(W.l,t)
inherit(P.H,t)
t=W.l
inherit(W.dI,t)
inherit(W.dJ,t)
inherit(W.aN,t)
inherit(W.c4,t)
inherit(W.c6,t)
inherit(W.es,t)
inherit(W.cf,t)
inherit(W.ez,t)
inherit(W.fz,t)
inherit(W.dj,t)
inherit(W.fS,t)
inherit(W.fT,t)
inherit(W.bL,t)
inherit(W.hM,t)
inherit(W.bv,W.bq)
inherit(W.dM,W.bv)
inherit(W.b8,W.ch)
inherit(W.dX,W.c9)
inherit(W.cU,W.cq)
inherit(W.dY,W.cU)
inherit(W.a3,W.c3)
inherit(W.cS,W.cp)
inherit(W.en,W.cS)
inherit(W.cM,W.cB)
inherit(W.bw,W.cM)
inherit(W.cg,W.bo)
inherit(W.ew,W.bx)
inherit(W.aE,W.k)
t=W.aE
inherit(W.aT,t)
inherit(W.N,t)
inherit(W.aZ,t)
inherit(W.eV,W.bA)
inherit(W.cO,W.cn)
inherit(W.eW,W.cO)
inherit(W.S,P.cZ)
inherit(W.cD,W.cm)
inherit(W.bG,W.cD)
t=W.be
inherit(W.fh,t)
inherit(W.fx,t)
inherit(W.h4,t)
inherit(W.cJ,W.cl)
inherit(W.fj,W.cJ)
inherit(W.fm,W.ai)
inherit(W.bu,W.br)
inherit(W.fD,W.bu)
inherit(W.cT,W.cA)
inherit(W.fF,W.cT)
inherit(W.cC,W.cz)
inherit(W.fW,W.cC)
inherit(W.bt,W.bs)
inherit(W.fX,W.bt)
inherit(W.cF,W.cr)
inherit(W.h1,W.cF)
inherit(W.b0,W.N)
inherit(W.cV,W.ci)
inherit(W.dt,W.cV)
inherit(W.cP,W.cw)
inherit(W.hs,W.cP)
inherit(W.hu,W.ca)
inherit(W.cR,W.cv)
inherit(W.hL,W.cR)
inherit(W.cE,W.cu)
inherit(W.dw,W.cE)
inherit(W.cN,W.ck)
inherit(W.i6,W.cN)
inherit(W.cG,W.cs)
inherit(W.i7,W.cG)
inherit(W.hv,W.ho)
inherit(W.hy,P.fL)
inherit(W.jh,W.hy)
inherit(W.hz,P.fM)
inherit(W.ia,W.bT)
inherit(P.K,P.hV)
t=P.H
inherit(P.aA,t)
inherit(P.aM,t)
inherit(P.e3,t)
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
inherit(P.ep,t)
inherit(P.eQ,t)
inherit(P.eR,t)
inherit(P.fg,t)
inherit(P.bI,t)
inherit(P.fR,t)
inherit(P.hc,t)
inherit(P.bP,t)
inherit(P.i_,t)
inherit(P.i0,t)
inherit(P.i1,t)
t=P.aA
inherit(P.dH,t)
inherit(P.er,t)
inherit(P.ae,t)
inherit(P.ex,t)
inherit(P.fQ,t)
inherit(P.dk,t)
inherit(P.ha,t)
inherit(P.cH,P.cx)
inherit(P.eI,P.cH)
inherit(P.cQ,P.co)
inherit(P.f8,P.cQ)
inherit(P.fr,P.ae)
inherit(P.cK,P.cj)
inherit(P.fP,P.cK)
t=P.dk
inherit(P.fV,t)
inherit(P.bM,t)
inherit(P.cI,P.ct)
inherit(P.h3,P.cI)
inherit(P.cL,P.cy)
inherit(P.fG,P.cL)
t=G.eX
inherit(G.fE,t)
inherit(G.dp,t)
inherit(G.eU,t)
inherit(G.fu,t)
inherit(A.df,t)
inherit(A.ft,t)
t=G.fE
inherit(G.dN,t)
inherit(A.aV,t)
inherit(B.f9,G.dN)
t=G.dp
inherit(G.eS,t)
inherit(G.fe,t)
inherit(R.fJ,R.fI)
mixin(H.bC,P.x)
mixin(H.bD,P.x)
mixin(H.bE,H.cc)
mixin(H.bF,H.cc)
mixin(P.bH,P.x)
mixin(W.bq,P.x)
mixin(W.br,P.x)
mixin(W.bs,P.x)
mixin(W.bt,W.A)
mixin(W.bu,W.A)
mixin(W.bv,W.A)
mixin(W.ch,W.dS)
mixin(W.cB,P.x)
mixin(W.cn,P.x)
mixin(W.ck,P.x)
mixin(W.cu,P.x)
mixin(W.cv,P.x)
mixin(W.cw,P.x)
mixin(W.cz,P.x)
mixin(W.cA,P.x)
mixin(W.ci,P.x)
mixin(W.cl,P.x)
mixin(W.cm,P.x)
mixin(W.cp,P.x)
mixin(W.cq,P.x)
mixin(W.cr,P.x)
mixin(W.cs,P.x)
mixin(W.cC,W.A)
mixin(W.cD,W.A)
mixin(W.cE,W.A)
mixin(W.cO,W.A)
mixin(W.cP,W.A)
mixin(W.cM,W.A)
mixin(W.cN,W.A)
mixin(W.cS,W.A)
mixin(W.cT,W.A)
mixin(W.cU,W.A)
mixin(W.cV,W.A)
mixin(W.cF,W.A)
mixin(W.cG,W.A)
mixin(W.cJ,W.A)
mixin(W.cR,W.A)
mixin(P.cx,P.x)
mixin(P.cj,P.x)
mixin(P.co,P.x)
mixin(P.ct,P.x)
mixin(P.cH,W.A)
mixin(P.cI,W.A)
mixin(P.cK,W.A)
mixin(P.cQ,W.A)
mixin(P.cy,P.x)
mixin(P.cL,W.A)})();(function constants(){C.n=W.aN.prototype
C.H=W.c4.prototype
C.u=W.b8.prototype
C.o=W.c6.prototype
C.I=W.c8.prototype
C.J=W.cf.prototype
C.p=W.cg.prototype
C.K=J.a.prototype
C.a=J.aQ.prototype
C.w=J.cX.prototype
C.b=J.cY.prototype
C.c=J.ba.prototype
C.i=J.aR.prototype
C.R=J.aS.prototype
C.V=H.d1.prototype
C.z=W.bG.prototype
C.A=J.fi.prototype
C.B=W.dc.prototype
C.G=W.dj.prototype
C.t=J.b_.prototype
C.at=W.b0.prototype
C.au=W.bN.prototype
C.f=new P.hW()
C.v=new P.aP(0)
C.L=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.M=function(hooks) {
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

C.N=function(getTagFallback) {
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
C.O=function() {
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
C.P=function(hooks) {
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
C.Q=function(hooks) {
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
C.S=H.D(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.u])
C.T=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.U=makeConstList([])
C.q=H.D(makeConstList(["bind","if","ref","repeat","syntax"]),[P.u])
C.r=H.D(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.u])
C.W=new G.y("vec3","vertex btangents",0)
C.d=new G.y("vec3","",0)
C.X=new G.y("vec4","delta from light",0)
C.m=new G.y("","",0)
C.C=new G.y("vec3","vertex coordinates",0)
C.Y=new G.y("vec3","vertex binormals",0)
C.D=new G.y("vec4","for wireframe",0)
C.Z=new G.y("vec4","per vertex color",0)
C.a_=new G.y("float","for normal maps",0)
C.j=new G.y("mat4","",0)
C.a1=new G.y("mat4","",4)
C.a0=new G.y("mat4","",128)
C.e=new G.y("float","",0)
C.a2=new G.y("float","",4)
C.a3=new G.y("float","depth for shadowmaps",0)
C.h=new G.y("sampler2D","",0)
C.a4=new G.y("float","for bump maps",0)
C.a5=new G.y("vec2","texture uvs",0)
C.a6=new G.y("float","time since program start in sec",0)
C.k=new G.y("vec2","",0)
C.a7=new G.y("samplerCube","",0)
C.l=new G.y("vec4","",0)
C.a8=new G.y("vec3","vertex normals",0)
C.a9=new G.y("sampler2DShadow","",0)
C.E=new G.y("vec3","per vertex color",0)
C.F=new G.y("mat3","",0)
C.aa=new G.y("vec3","vertex tangents",0)
C.ab=H.L("nb")
C.ac=H.L("nc")
C.ad=H.L("eq")
C.ae=H.L("nd")
C.af=H.L("ne")
C.ag=H.L("k4")
C.ah=H.L("nf")
C.ai=H.L("k7")
C.aj=H.L("aW")
C.ak=H.L("u")
C.al=H.L("ks")
C.am=H.L("kt")
C.an=H.L("ng")
C.ao=H.L("ku")
C.ap=H.L("ax")
C.aq=H.L("M")
C.ar=H.L("p")
C.as=H.L("U")})();(function staticFields(){$.kc="$cachedFunction"
$.kd="$cachedInvocation"
$.jN=null
$.jL=null
$.jj=!1
$.jn=null
$.kG=null
$.kU=null
$.is=null
$.iA=null
$.jo=null
$.bg=null
$.bV=null
$.bW=null
$.jk=!1
$.C=C.f
$.k1=0
$.az=null
$.j2=null
$.k0=null
$.k_=null
$.jY=null
$.jX=null
$.jW=null
$.jV=null
$.mK=0
$.mL=0
$.js=0
$.kS=0
$.c0=0
$.c1=0
$.n8=!1
$.kM=0})();(function lazyInitializers(){lazy($,"jU","$get$jU",function(){return H.kP("_$dart_dartClosure")})
lazy($,"j7","$get$j7",function(){return H.kP("_$dart_js")})
lazy($,"k5","$get$k5",function(){return H.m_()})
lazy($,"k6","$get$k6",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.k1
$.k1=t+1
t="expando$key$"+t}return new P.e2(null,t,[P.p])})
lazy($,"kh","$get$kh",function(){return H.at(H.h6({
toString:function(){return"$receiver$"}}))})
lazy($,"ki","$get$ki",function(){return H.at(H.h6({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"kj","$get$kj",function(){return H.at(H.h6(null))})
lazy($,"kk","$get$kk",function(){return H.at(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"ko","$get$ko",function(){return H.at(H.h6(void 0))})
lazy($,"kp","$get$kp",function(){return H.at(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"km","$get$km",function(){return H.at(H.kn(null))})
lazy($,"kl","$get$kl",function(){return H.at(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"kr","$get$kr",function(){return H.at(H.kn(void 0))})
lazy($,"kq","$get$kq",function(){return H.at(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"jg","$get$jg",function(){return P.mm()})
lazy($,"bX","$get$bX",function(){return[]})
lazy($,"jT","$get$jT",function(){return{}})
lazy($,"kz","$get$kz",function(){return P.j9(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"ji","$get$ji",function(){return P.Q()})
lazy($,"ir","$get$ir",function(){return P.k8(P.p,P.ax)})
lazy($,"bZ","$get$bZ",function(){return P.k8(P.u,P.ax)})
lazy($,"kf","$get$kf",function(){return new G.dm(1281,0,4294967295)})
lazy($,"jJ","$get$jJ",function(){return new G.dl(1281,1281,1281)})
lazy($,"Y","$get$Y",function(){return P.aU(["cBlendEquation",C.m,"cDepthWrite",C.m,"cDepthTest",C.m,"cStencilFunc",C.m,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColors",C.E,"aColorAlpha",C.Z,"aPosition",C.C,"aTexUV",C.a5,"aNormal",C.a8,"aBinormal",C.Y,"aCenter",C.D,"aPointSize",C.e,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.aa,"aBitangent",C.W,"iaRotation",C.l,"iaTranslation",C.d,"iaScale",C.d,"vColor",C.E,"vTexUV",C.k,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.C,"vPositionFromLight",C.X,"vCenter",C.D,"vDepth",C.a3,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.F,"uConvolutionMatrix",C.F,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a9,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a7,"uAnimationTable",C.h,"uTime",C.a6,"uCameraNear",C.e,"uCameraFar",C.e,"uFogNear",C.e,"uFogFar",C.e,"uPointSize",C.e,"uScale",C.e,"uAngle",C.e,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.e,"uShininess",C.e,"uShadowBias",C.e,"uOpacity",C.e,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.d,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a0,"uLightDescs",C.a1,"uLightCount",C.e,"uLightTypes",C.a2,"uBumpScale",C.a4,"uNormalScale",C.a_])})
lazy($,"jQ","$get$jQ",function(){return T.aF(0,0,1)})
lazy($,"jS","$get$jS",function(){return T.aF(1,0,0)})
lazy($,"jR","$get$jR",function(){return T.aF(0,1,0)})
lazy($,"kW","$get$kW",function(){var t=new G.dg("SolidColor",null,[],[],[],[],0,P.Q())
t.cU(["aPosition"])
t.bg(["uPerspectiveViewMatrix","uModelMatrix"])
t.bk(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"])
return t})
lazy($,"kV","$get$kV",function(){var t=new G.dg("SolidColorF",null,[],[],[],[],0,P.Q())
t.bg(["uColor"])
t.bk(["oFragColor = vec4( uColor, 1.0 );"])
return t})
lazy($,"kw","$get$kw",function(){return[T.aF(0,0,1),T.aF(0,0,-1),T.aF(0,1,0),T.aF(0,-1,0),T.aF(1,0,0),T.aF(-1,0,0)]})})()
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
mangledGlobalNames:{p:"int",M:"double",U:"num",u:"String",ax:"bool",aW:"Null",b:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.t},{func:1,ret:P.ax,args:[W.a2,P.u,P.u,W.bQ]},{func:1,v:true,args:[P.q],opt:[P.bJ]},{func:1,ret:P.p,args:[P.I,P.I]},{func:1,ret:P.u,args:[W.j]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationTimeline:J.a,AppBannerPromptResult:J.a,BarProp:J.a,Body:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CHROMIUMValuebuffer:J.a,CircularGeofencingRegion:J.a,Client:J.a,Clients:J.a,CompositorProxy:J.a,ConsoleBase:J.a,Coordinates:J.a,Credential:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMStringMap:J.a,EffectModel:J.a,Entry:J.a,FederatedCredential:J.a,FileEntry:J.a,FileError:J.a,Stream:J.a,DOMFileSystem:J.a,FontFace:J.a,FormData:J.a,GamepadButton:J.a,Geofencing:J.a,GeofencingRegion:J.a,Geolocation:J.a,Geoposition:J.a,Headers:J.a,HMDVRDevice:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageData:J.a,InjectedScriptHost:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,KeyframeEffect:J.a,MediaDeviceInfo:J.a,MediaDevices:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaMetadata:J.a,MediaSession:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigatorStorageUtils:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,OffscreenCanvas:J.a,PasswordCredential:J.a,PerformanceCompositeTiming:J.a,PerformanceEntry:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformanceRenderTiming:J.a,PerformanceResourceTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PositionError:J.a,PositionSensorVRDevice:J.a,Presentation:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,ReadableByteStream:J.a,ReadableByteStreamReader:J.a,ReadableStreamReader:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,Selection:J.a,ServicePort:J.a,SharedArrayBuffer:J.a,SourceInfo:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StorageInfo:J.a,StorageManager:J.a,StorageQuota:J.a,StyleMedia:J.a,StylePropertyMap:J.a,SyncManager:J.a,TextMetrics:J.a,TrackDefault:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRDevice:J.a,VREyeParameters:J.a,VRFieldOfView:J.a,VRPositionState:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkerConsole:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothAdvertisingData:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,NFC:J.a,PagePopupController:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WebKitCSSMatrix:J.a,Worklet:J.a,WorkletGlobalScope:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPreserveAspectRatio:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,CHROMIUMSubscribeUniform:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTDisjointTimerQuery:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bB,ArrayBufferView:H.bc,DataView:H.eY,Float32Array:H.d1,Float64Array:H.eZ,Int16Array:H.f_,Int32Array:H.f0,Int8Array:H.f1,Uint16Array:H.f2,Uint32Array:H.f3,Uint8ClampedArray:H.d5,CanvasPixelArray:H.d5,Uint8Array:H.f4,HTMLAudioElement:W.l,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLImageElement:W.l,HTMLKeygenElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMediaElement:W.l,HTMLMenuElement:W.l,HTMLMenuItemElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTextAreaElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLVideoElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,HTMLAnchorElement:W.dI,HTMLAreaElement:W.dJ,AudioTrack:W.a0,AudioTrackList:W.dM,Blob:W.c3,HTMLBodyElement:W.aN,HTMLCanvasElement:W.c4,CanvasRenderingContext2D:W.dO,CDATASection:W.aO,CharacterData:W.aO,Comment:W.aO,ProcessingInstruction:W.aO,Text:W.aO,CompositorWorker:W.dR,CSSCharsetRule:W.z,CSSFontFaceRule:W.z,CSSGroupingRule:W.z,CSSImportRule:W.z,CSSKeyframeRule:W.z,MozCSSKeyframeRule:W.z,WebKitCSSKeyframeRule:W.z,CSSKeyframesRule:W.z,MozCSSKeyframesRule:W.z,WebKitCSSKeyframesRule:W.z,CSSMediaRule:W.z,CSSNamespaceRule:W.z,CSSPageRule:W.z,CSSRule:W.z,CSSStyleRule:W.z,CSSSupportsRule:W.z,CSSViewportRule:W.z,CSSStyleDeclaration:W.b8,MSStyleCSSProperties:W.b8,CSS2Properties:W.b8,DataTransferItemList:W.dU,DeviceAcceleration:W.dV,HTMLDivElement:W.c6,XMLDocument:W.bo,Document:W.bo,DocumentFragment:W.c7,ShadowRoot:W.c7,DOMException:W.dW,DOMImplementation:W.c8,DOMPoint:W.dX,DOMPointReadOnly:W.c9,DOMRectReadOnly:W.ca,DOMStringList:W.dY,DOMTokenList:W.dZ,Element:W.a2,AnimationEvent:W.k,AnimationPlayerEvent:W.k,ApplicationCacheErrorEvent:W.k,AutocompleteErrorEvent:W.k,BeforeInstallPromptEvent:W.k,BeforeUnloadEvent:W.k,BlobEvent:W.k,ClipboardEvent:W.k,CloseEvent:W.k,CustomEvent:W.k,DeviceLightEvent:W.k,DeviceMotionEvent:W.k,DeviceOrientationEvent:W.k,ErrorEvent:W.k,ExtendableEvent:W.k,ExtendableMessageEvent:W.k,FetchEvent:W.k,FontFaceSetLoadEvent:W.k,GamepadEvent:W.k,GeofencingEvent:W.k,HashChangeEvent:W.k,InstallEvent:W.k,MediaEncryptedEvent:W.k,MediaKeyMessageEvent:W.k,MediaQueryListEvent:W.k,MediaStreamEvent:W.k,MediaStreamTrackEvent:W.k,MessageEvent:W.k,MIDIConnectionEvent:W.k,MIDIMessageEvent:W.k,NotificationEvent:W.k,PageTransitionEvent:W.k,PopStateEvent:W.k,PresentationConnectionAvailableEvent:W.k,PresentationConnectionCloseEvent:W.k,ProgressEvent:W.k,PromiseRejectionEvent:W.k,PushEvent:W.k,RelatedEvent:W.k,RTCDataChannelEvent:W.k,RTCDTMFToneChangeEvent:W.k,RTCIceCandidateEvent:W.k,RTCPeerConnectionIceEvent:W.k,SecurityPolicyViolationEvent:W.k,ServicePortConnectEvent:W.k,ServiceWorkerMessageEvent:W.k,SpeechRecognitionError:W.k,SpeechRecognitionEvent:W.k,SpeechSynthesisEvent:W.k,StorageEvent:W.k,SyncEvent:W.k,TrackEvent:W.k,TransitionEvent:W.k,WebKitTransitionEvent:W.k,ResourceProgressEvent:W.k,USBConnectionEvent:W.k,IDBVersionChangeEvent:W.k,AudioProcessingEvent:W.k,OfflineAudioCompletionEvent:W.k,WebGLContextEvent:W.k,Event:W.k,InputEvent:W.k,Animation:W.j,ApplicationCache:W.j,DOMApplicationCache:W.j,OfflineResourceList:W.j,BatteryManager:W.j,CanvasCaptureMediaStreamTrack:W.j,CrossOriginServiceWorkerClient:W.j,EventSource:W.j,FileReader:W.j,FontFaceSet:W.j,MediaKeySession:W.j,MediaQueryList:W.j,MediaRecorder:W.j,MediaSource:W.j,MediaStream:W.j,MediaStreamTrack:W.j,MessagePort:W.j,MIDIAccess:W.j,NetworkInformation:W.j,Notification:W.j,Performance:W.j,PermissionStatus:W.j,PresentationAvailability:W.j,PresentationReceiver:W.j,PresentationRequest:W.j,RTCDTMFSender:W.j,RTCPeerConnection:W.j,webkitRTCPeerConnection:W.j,mozRTCPeerConnection:W.j,ScreenOrientation:W.j,ServicePortCollection:W.j,ServiceWorkerContainer:W.j,ServiceWorkerRegistration:W.j,SpeechRecognition:W.j,SpeechSynthesis:W.j,SpeechSynthesisUtterance:W.j,WorkerPerformance:W.j,BluetoothDevice:W.j,BluetoothRemoteGATTCharacteristic:W.j,USB:W.j,IDBDatabase:W.j,IDBOpenDBRequest:W.j,IDBVersionChangeRequest:W.j,IDBRequest:W.j,IDBTransaction:W.j,AnalyserNode:W.j,RealtimeAnalyserNode:W.j,AudioBufferSourceNode:W.j,AudioContext:W.j,webkitAudioContext:W.j,AudioDestinationNode:W.j,AudioNode:W.j,AudioSourceNode:W.j,BiquadFilterNode:W.j,ChannelMergerNode:W.j,AudioChannelMerger:W.j,ChannelSplitterNode:W.j,AudioChannelSplitter:W.j,ConvolverNode:W.j,DelayNode:W.j,DynamicsCompressorNode:W.j,GainNode:W.j,AudioGainNode:W.j,IIRFilterNode:W.j,MediaElementAudioSourceNode:W.j,MediaStreamAudioDestinationNode:W.j,MediaStreamAudioSourceNode:W.j,OfflineAudioContext:W.j,OscillatorNode:W.j,Oscillator:W.j,PannerNode:W.j,AudioPannerNode:W.j,webkitAudioPannerNode:W.j,ScriptProcessorNode:W.j,JavaScriptAudioNode:W.j,StereoPannerNode:W.j,WaveShaperNode:W.j,EventTarget:W.j,File:W.a3,FileList:W.en,FileWriter:W.eo,HTMLFormElement:W.es,Gamepad:W.a4,HTMLHeadElement:W.cf,History:W.ev,HTMLCollection:W.bw,HTMLFormControlsCollection:W.bw,HTMLOptionsCollection:W.bw,HTMLDocument:W.cg,XMLHttpRequest:W.ew,XMLHttpRequestUpload:W.bx,XMLHttpRequestEventTarget:W.bx,HTMLInputElement:W.ez,KeyboardEvent:W.aT,Location:W.eN,MediaList:W.eT,MIDIOutput:W.eV,MIDIInput:W.bA,MIDIPort:W.bA,MimeType:W.a5,MimeTypeArray:W.eW,PointerEvent:W.N,MouseEvent:W.N,DragEvent:W.N,Navigator:W.f5,Attr:W.t,Node:W.t,NodeIterator:W.d6,NodeList:W.bG,RadioNodeList:W.bG,Path2D:W.ff,Perspective:W.fh,Plugin:W.a6,PluginArray:W.fj,PositionValue:W.fm,PresentationConnection:W.fn,Range:W.dc,Rotation:W.fx,RTCDataChannel:W.de,DataChannel:W.de,HTMLSelectElement:W.fz,SharedWorker:W.fC,SourceBuffer:W.a7,SourceBufferList:W.fD,SpeechGrammar:W.a8,SpeechGrammarList:W.fF,SpeechRecognitionResult:W.a9,Storage:W.fK,CSSStyleSheet:W.W,StyleSheet:W.W,CalcLength:W.ai,KeywordValue:W.ai,LengthValue:W.ai,NumberValue:W.ai,SimpleLength:W.ai,TransformValue:W.ai,StyleValue:W.ai,HTMLTableElement:W.dj,HTMLTableRowElement:W.fS,HTMLTableSectionElement:W.fT,HTMLTemplateElement:W.bL,TextTrack:W.aa,TextTrackCue:W.X,VTTCue:W.X,TextTrackCueList:W.fW,TextTrackList:W.fX,TimeRanges:W.fY,Touch:W.ab,TouchEvent:W.aZ,TouchList:W.h1,TrackDefaultList:W.h2,Matrix:W.be,Skew:W.be,TransformComponent:W.be,Translation:W.h4,TreeWalker:W.dn,CompositionEvent:W.aE,FocusEvent:W.aE,TextEvent:W.aE,SVGZoomEvent:W.aE,UIEvent:W.aE,URL:W.h9,VideoTrackList:W.hb,VTTRegionList:W.he,WebSocket:W.hf,WheelEvent:W.b0,Window:W.bN,DOMWindow:W.bN,Worker:W.hi,CompositorWorkerGlobalScope:W.b1,DedicatedWorkerGlobalScope:W.b1,ServiceWorkerGlobalScope:W.b1,SharedWorkerGlobalScope:W.b1,WorkerGlobalScope:W.b1,ClientRect:W.hq,ClientRectList:W.dt,DOMRectList:W.dt,CSSRuleList:W.hs,DocumentType:W.ht,DOMRect:W.hu,GamepadList:W.hL,HTMLFrameSetElement:W.hM,NamedNodeMap:W.dw,MozNamedAttrMap:W.dw,ServiceWorker:W.i3,SpeechRecognitionResultList:W.i6,StyleSheetList:W.i7,WorkerLocation:W.ie,WorkerNavigator:W.ig,SVGAElement:P.dH,SVGAnimateElement:P.aM,SVGAnimateMotionElement:P.aM,SVGAnimateTransformElement:P.aM,SVGAnimationElement:P.aM,SVGSetElement:P.aM,SVGFEBlendElement:P.e3,SVGFEColorMatrixElement:P.e4,SVGFEComponentTransferElement:P.e5,SVGFECompositeElement:P.e6,SVGFEConvolveMatrixElement:P.e7,SVGFEDiffuseLightingElement:P.e8,SVGFEDisplacementMapElement:P.e9,SVGFEFloodElement:P.ea,SVGFEGaussianBlurElement:P.eb,SVGFEImageElement:P.ec,SVGFEMergeElement:P.ed,SVGFEMorphologyElement:P.ee,SVGFEOffsetElement:P.ef,SVGFEPointLightElement:P.eg,SVGFESpecularLightingElement:P.eh,SVGFESpotLightElement:P.ei,SVGFETileElement:P.ej,SVGFETurbulenceElement:P.ek,SVGFilterElement:P.ep,SVGForeignObjectElement:P.er,SVGCircleElement:P.ae,SVGEllipseElement:P.ae,SVGLineElement:P.ae,SVGPathElement:P.ae,SVGPolygonElement:P.ae,SVGPolylineElement:P.ae,SVGGeometryElement:P.ae,SVGClipPathElement:P.aA,SVGDefsElement:P.aA,SVGGElement:P.aA,SVGSwitchElement:P.aA,SVGGraphicsElement:P.aA,SVGImageElement:P.ex,SVGLength:P.aq,SVGLengthList:P.eI,SVGMarkerElement:P.eQ,SVGMaskElement:P.eR,SVGNumber:P.ar,SVGNumberList:P.f8,SVGPatternElement:P.fg,SVGPoint:P.fk,SVGPointList:P.fl,SVGRect:P.fq,SVGRectElement:P.fr,SVGScriptElement:P.bI,SVGStringList:P.fP,SVGDescElement:P.H,SVGDiscardElement:P.H,SVGFEDistantLightElement:P.H,SVGFEFuncAElement:P.H,SVGFEFuncBElement:P.H,SVGFEFuncGElement:P.H,SVGFEFuncRElement:P.H,SVGFEMergeNodeElement:P.H,SVGMetadataElement:P.H,SVGStopElement:P.H,SVGStyleElement:P.H,SVGTitleElement:P.H,SVGComponentTransferFunctionElement:P.H,SVGElement:P.H,SVGSVGElement:P.fQ,SVGSymbolElement:P.fR,SVGTextContentElement:P.dk,SVGTextPathElement:P.fV,SVGTSpanElement:P.bM,SVGTextElement:P.bM,SVGTextPositioningElement:P.bM,SVGTransform:P.as,SVGTransformList:P.h3,SVGUseElement:P.ha,SVGViewElement:P.hc,SVGViewSpec:P.hd,SVGLinearGradientElement:P.bP,SVGRadialGradientElement:P.bP,SVGGradientElement:P.bP,SVGCursorElement:P.i_,SVGFEDropShadowElement:P.i0,SVGMPathElement:P.i1,AudioBuffer:P.dL,WebGLRenderingContext:P.fv,WebGL2RenderingContext:P.fw,WebGL2RenderingContextBase:P.id,SQLResultSetRowList:P.fG})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,Credential:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMStringMap:true,EffectModel:true,Entry:true,FederatedCredential:true,FileEntry:true,FileError:true,Stream:true,DOMFileSystem:true,FontFace:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageData:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PasswordCredential:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,ServicePort:true,SharedArrayBuffer:true,SourceInfo:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,TrackDefault:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPreserveAspectRatio:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,AudioTrack:true,AudioTrackList:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,CSSCharsetRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DocumentFragment:true,ShadowRoot:true,DOMException:true,DOMImplementation:true,DOMPoint:true,DOMPointReadOnly:false,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AudioDestinationNode:true,AudioNode:true,AudioSourceNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OfflineAudioContext:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Navigator:true,Attr:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Path2D:true,Perspective:true,Plugin:true,PluginArray:true,PositionValue:true,PresentationConnection:true,Range:true,Rotation:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,SharedWorker:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,CalcLength:true,KeywordValue:true,LengthValue:true,NumberValue:true,SimpleLength:true,TransformValue:true,StyleValue:false,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,Matrix:true,Skew:true,TransformComponent:false,Translation:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,SVGZoomEvent:true,UIEvent:false,URL:true,VideoTrackList:true,VTTRegionList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.d2.$nativeSuperclassTag="ArrayBufferView"
H.bD.$nativeSuperclassTag="ArrayBufferView"
H.bE.$nativeSuperclassTag="ArrayBufferView"
H.d3.$nativeSuperclassTag="ArrayBufferView"
H.bC.$nativeSuperclassTag="ArrayBufferView"
H.bF.$nativeSuperclassTag="ArrayBufferView"
H.d4.$nativeSuperclassTag="ArrayBufferView"
W.bq.$nativeSuperclassTag="EventTarget"
W.bv.$nativeSuperclassTag="EventTarget"
W.br.$nativeSuperclassTag="EventTarget"
W.bu.$nativeSuperclassTag="EventTarget"
W.bs.$nativeSuperclassTag="EventTarget"
W.bt.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.kX(F.kZ(),b)},[])
else (function(b){H.kX(F.kZ(),b)})([])})})()