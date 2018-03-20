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
a[c]=function(){a[c]=function(){H.mF(b)}
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
return d?function(e){if(t===null)t=H.iV(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.iV(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.iV(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={iG:function iG(a){this.a=a},
iL:function(a,b,c,d){if(!!a.$isb)return new H.dN(a,b,[c,d])
return new H.cW(a,b,[c,d])},
ek:function(){return new P.au("No element")},
lu:function(){return new P.au("Too many elements")},
lt:function(){return new P.au("Too few elements")},
d9:function(a,b,c,d){if(c-b<=32)H.lK(a,b,c,d)
else H.lJ(a,b,c,d)},
lK:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.aa(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.af(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
lJ:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.d(t>32)
s=C.b.v(t+1,6)
r=a3+s
q=a4-s
p=C.b.v(a3+a4,2)
o=p-s
n=p+s
t=J.aa(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.af(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.af(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.af(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.af(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.af(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.af(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.af(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.af(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.af(a5.$2(j,i),0)){h=i
i=j
j=h}t.i(a2,r,m)
t.i(a2,p,k)
t.i(a2,q,i)
t.i(a2,o,t.h(a2,a3))
t.i(a2,n,t.h(a2,a4))
g=a3+1
f=a4-1
if(J.E(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=t.h(a2,e)
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
H.d9(a2,a3,g-2,a5)
H.d9(a2,f+2,a4,a5)
if(a0)return
if(g<r&&f>q){for(;J.E(a5.$2(t.h(a2,g),l),0);)++g
for(;J.E(a5.$2(t.h(a2,f),j),0);)--f
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
break}}H.d9(a2,g,f,a5)}else H.d9(a2,g,f,a5)},
b:function b(){},
b4:function b4(){},
cV:function cV(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cW:function cW(a,b,c){this.a=a
this.b=b
this.$ti=c},
dN:function dN(a,b,c){this.a=a
this.b=b
this.$ti=c},
eu:function eu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
br:function br(a,b,c){this.a=a
this.b=b
this.$ti=c},
dh:function dh(a,b,c){this.a=a
this.b=b
this.$ti=c},
fT:function fT(a,b,c){this.a=a
this.b=b
this.$ti=c},
c7:function c7(){},
dq:function(a,b){var t=a.aa(b)
if(!u.globalState.d.cy)u.globalState.f.ah()
return t},
ig:function(){--u.globalState.f.b
H.d(u.globalState.f.b>=0)},
kn:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.u(s).$isc)throw H.e(P.jg("Arguments to main must be a List: "+H.f(s)))
u.globalState=new H.hv(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$jz()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.h8(P.iK(null,H.aX),0)
r=P.o
s.ses(new H.ab(0,null,null,null,null,null,0,[r,H.aW]))
s.sew(new H.ab(0,null,null,null,null,null,0,[r,null]))
if(s.x){q=new H.hu()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.lo,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.lY)}if(u.globalState.x)return
s=u.globalState.a++
q=P.ac(null,null,null,r)
p=new H.b6(0,null,!1)
o=new H.aW(s,new H.ab(0,null,null,null,null,null,0,[r,H.b6]),q,u.createNewIsolate(),p,new H.ai(H.ij()),new H.ai(H.ij()),!1,!1,[],P.ac(null,null,null,null),null,null,!1,!0,P.ac(null,null,null,null))
q.l(0,0)
o.bp(0,p)
u.globalState.e=o
u.globalState.z.i(0,s,o)
u.globalState.d=o
if(H.bb(a,{func:1,args:[,]}))o.aa(new H.iq(t,a))
else if(H.bb(a,{func:1,args:[,,]}))o.aa(new H.ir(t,a))
else o.aa(a)
u.globalState.f.ah()},
lY:function(a){var t=P.aM(["command","print","msg",a])
return new H.ad(!0,P.bL(null,P.o)).F(t)},
lq:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.lr()
return},
lr:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.e(new P.t("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.e(new P.t('Cannot extract URI from "'+t+'"'))},
lo:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.aV(!0,[]).P(b.data)
s=J.aa(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.ms(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.aV(!0,[]).P(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.aV(!0,[]).P(s.h(t,"replyTo"))
s=u.globalState.a++
k=P.o
j=P.ac(null,null,null,k)
i=new H.b6(0,null,!1)
h=new H.aW(s,new H.ab(0,null,null,null,null,null,0,[k,H.b6]),j,u.createNewIsolate(),i,new H.ai(H.ij()),new H.ai(H.ij()),!1,!1,[],P.ac(null,null,null,null),null,null,!1,!0,P.ac(null,null,null,null))
j.l(0,0)
h.bp(0,i)
u.globalState.f.a.L(0,new H.aX(h,new H.eh(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.ah()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.kV(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.ah()
break
case"close":u.globalState.ch.ag(0,$.$get$jA().h(0,a))
a.terminate()
u.globalState.f.ah()
break
case"log":H.ln(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
k=P.aM(["command","print","msg",t])
k=new H.ad(!0,P.bL(null,P.o)).F(k)
s.toString
self.postMessage(k)}else P.ar(s.h(t,"msg"))
break
case"error":throw H.e(s.h(t,"msg"))}},
ln:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aM(["command","log","msg",a])
r=new H.ad(!0,P.bL(null,P.o)).F(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.L(q)
t=H.az(q)
s=P.c6(t)
throw H.e(s)}},
lp:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.jF=$.jF+("_"+s)
$.jG=$.jG+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.D(0,["spawned",new H.b8(s,r),q,t.r])
r=new H.ei(a,b,c,d,t)
if(e){t.bI(q,q)
u.globalState.f.a.L(0,new H.aX(t,r,"start isolate"))}else r.$0()},
lL:function(a,b){var t=new H.fB(!0,!1,null)
t.da(a,b)
return t},
m_:function(a){return new H.aV(!0,[]).P(new H.ad(!1,P.bL(null,P.o)).F(a))},
iq:function iq(a,b){this.a=a
this.b=b},
ir:function ir(a,b){this.a=a
this.b=b},
hv:function hv(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
hq:function hq(a,b){this.a=a
this.b=b},
h8:function h8(a,b){this.a=a
this.b=b},
h9:function h9(a){this.a=a},
aX:function aX(a,b,c){this.a=a
this.b=b
this.c=c},
hu:function hu(){},
eh:function eh(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ei:function ei(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
h1:function h1(){},
b8:function b8(a,b){this.b=a
this.a=b},
hw:function hw(a,b){this.a=a
this.b=b},
bN:function bN(a,b,c){this.b=a
this.c=b
this.a=c},
b6:function b6(a,b,c){this.a=a
this.b=b
this.c=c},
fB:function fB(a,b,c){this.a=a
this.b=b
this.c=c},
fC:function fC(a,b){this.a=a
this.b=b},
fD:function fD(a,b){this.a=a
this.b=b},
ai:function ai(a){this.a=a},
ad:function ad(a,b){this.a=a
this.b=b},
aV:function aV(a,b){this.a=a
this.b=b},
ml:function(a){return u.types[a]},
mu:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.u(a).$ism},
f:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aD(a)
if(typeof t!=="string")throw H.e(H.O(a))
return t},
lH:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.f5(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aO:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
f3:function(a){var t,s,r,q,p,o,n,m
t=J.u(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.N||!!J.u(a).$isaS){p=C.C(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.j.aC(q,0)===36)q=C.j.cT(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.ie(H.i3(a),0,null),u.mangledGlobalNames)},
f2:function(a){return"Instance of '"+H.f3(a)+"'"},
M:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lE:function(a){return a.b?H.M(a).getUTCFullYear()+0:H.M(a).getFullYear()+0},
lC:function(a){return a.b?H.M(a).getUTCMonth()+1:H.M(a).getMonth()+1},
ly:function(a){return a.b?H.M(a).getUTCDate()+0:H.M(a).getDate()+0},
lz:function(a){return a.b?H.M(a).getUTCHours()+0:H.M(a).getHours()+0},
lB:function(a){return a.b?H.M(a).getUTCMinutes()+0:H.M(a).getMinutes()+0},
lD:function(a){return a.b?H.M(a).getUTCSeconds()+0:H.M(a).getSeconds()+0},
lA:function(a){return a.b?H.M(a).getUTCMilliseconds()+0:H.M(a).getMilliseconds()+0},
jE:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.O(a))
return a[b]},
J:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ah(!0,b,"index",null)
t=J.dt(a)
if(b<0||C.b.cB(b,t))return P.z(b,a,"index",null,t)
return P.f4(b,"index",null)},
O:function(a){return new P.ah(!0,a,null,null)},
e:function(a){var t
if(a==null)a=new P.d5()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.ko})
t.name=""}else t.toString=H.ko
return t},
ko:function(){return J.aD(this.dartException)},
D:function(a){throw H.e(a)},
W:function(a){throw H.e(new P.Y(a))},
an:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.fH(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
fI:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
jR:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
iI:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.en(a,s,t?null:b.receiver)},
L:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.is(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aK(r,16)&8191)===10)switch(q){case 438:return t.$1(H.iI(H.f(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.f(s)+" (Error "+q+")"
return t.$1(new H.d4(p,null))}}if(a instanceof TypeError){o=$.$get$jL()
n=$.$get$jM()
m=$.$get$jN()
l=$.$get$jO()
k=$.$get$jS()
j=$.$get$jT()
i=$.$get$jQ()
$.$get$jP()
h=$.$get$jV()
g=$.$get$jU()
f=o.I(s)
if(f!=null)return t.$1(H.iI(s,f))
else{f=n.I(s)
if(f!=null){f.method="call"
return t.$1(H.iI(s,f))}else{f=m.I(s)
if(f==null){f=l.I(s)
if(f==null){f=k.I(s)
if(f==null){f=j.I(s)
if(f==null){f=i.I(s)
if(f==null){f=l.I(s)
if(f==null){f=h.I(s)
if(f==null){f=g.I(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.d4(s,f==null?null:f.method))}}return t.$1(new H.fL(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.da()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.ah(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.da()
return a},
az:function(a){var t
if(a==null)return new H.dn(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dn(a,null)},
my:function(a){if(a==null||typeof a!='object')return J.ag(a)
else return H.aO(a)},
mi:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=a.length
for(r=0;r<s;){q=r+1
H.d(t)
p=a[r]
r=q+1
H.d(t)
b.i(0,p,a[q])}return b},
mt:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dq(b,new H.i9(a))
case 1:return H.dq(b,new H.ia(a,d))
case 2:return H.dq(b,new H.ib(a,d,e))
case 3:return H.dq(b,new H.ic(a,d,e,f))
case 4:return H.dq(b,new H.id(a,d,e,f,g))}throw H.e(P.c6("Unsupported number of arguments for wrapped closure"))},
bR:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.mt)
a.$identity=t
return t},
la:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.u(c).$isc){t.$reflectionInfo=c
r=H.lH(t).r}else r=c
q=d?Object.create(new H.fi().constructor.prototype):Object.create(new H.be(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.jn(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.ml,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.jl:H.iA
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.e("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.jn(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
l7:function(a,b,c,d){var t=H.iA
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
jn:function(a,b,c){var t,s,r,q
if(c)return H.l9(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.l7(s,b==null?r!=null:b!==r,t,b)
return q},
l8:function(a,b,c,d){var t,s
t=H.iA
s=H.jl
switch(b?-1:a){case 0:throw H.e(new H.f9("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
l9:function(a,b){var t,s,r,q
H.l5()
t=$.jk
if(t==null){t=H.jj("receiver")
$.jk=t}s=b.$stubName
r=b.length
q=a[s]
t=H.l8(r,b==null?q!=null:b!==q,s,b)
return t},
iV:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.u(c).$isc){c.fixed$length=Array
t=c}else t=c
return H.la(a,b,t,!!d,e,f)},
iA:function(a){return a.a},
jl:function(a){return a.c},
l5:function(){var t=$.jm
if(t==null){t=H.jj("self")
$.jm=t}return t},
jj:function(a){var t,s,r,q,p
t=new H.be("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
mP:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.ao(a,"String"))},
T:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.ao(a,"double"))},
mO:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.ao(a,"num"))},
mc:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.ao(a,"bool"))},
ms:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.ao(a,"int"))},
mA:function(a,b){throw H.e(H.ao(a,b.substring(3)))},
mz:function(a,b){var t=J.aa(b)
throw H.e(H.l6(H.f3(a),t.bd(b,3,t.gj(b))))},
iZ:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.u(a)[b])return a
H.mA(a,b)},
aB:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.u(a)[b]
else t=!0
if(t)return a
H.mz(a,b)},
mN:function(a){if(a==null)return a
if(!!J.u(a).$isc)return a
throw H.e(H.ao(a,"List"))},
ka:function(a){var t=J.u(a)
return"$S" in t?t.$S():null},
bb:function(a,b){var t
if(a==null)return!1
t=H.ka(a)
return t==null?!1:H.kh(t,b)},
mL:function(a,b){var t,s
if(a==null)return a
if($.iR)return a
$.iR=!0
try{if(H.bb(a,b))return a
t=H.aC(b,null)
s=H.ao(a,t)
throw H.e(s)}finally{$.iR=!1}},
ao:function(a,b){return new H.fJ("type '"+H.f3(a)+"' is not a subtype of type '"+b+"'")},
l6:function(a,b){return new H.dB("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
ax:function(a){if(!0===a)return!1
if(!!J.u(a).$isiE)a=a.$0()
if(typeof a==="boolean")return!a
throw H.e(H.ao(a,"bool"))},
aZ:function(a){throw H.e(new H.fW(a))},
d:function(a){if(H.ax(a))throw H.e(new P.bX(null))},
mF:function(a){throw H.e(new P.dF(a))},
ij:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
kf:function(a){return u.getIsolateTag(a)},
K:function(a,b){H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
i3:function(a){if(a==null)return
return a.$ti},
kg:function(a,b){return H.j2(a["$as"+H.f(b)],H.i3(a))},
ae:function(a,b,c){var t,s
t=H.kg(a,b)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
aA:function(a,b){var t,s
t=H.i3(a)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
aC:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.d(!0)
H.d(!0)
return a[0].name+H.ie(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.f(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aC(t,b)
return H.m1(a,b)}return"unknown-reified-type"},
m1:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aC(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aC(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aC(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.mh(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aC(l[j],b)+(" "+H.f(j))}q+="}"}return"("+q+") => "+t},
ie:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=new P.bD("")
for(r=b,q=!0,p=!0;H.d(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.d(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aC(o,c)}return p?"":"<"+s.k(0)+">"},
mk:function(a){var t,s
if(a instanceof H.b0){t=H.ka(a)
if(t!=null)return H.aC(t,null)}s=J.u(a).constructor.name
if(a==null)return s
return s+H.ie(a.$ti,0,null)},
j2:function(a,b){if(a==null)return b
H.d(typeof a=="function")
H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.j_(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.j_(a,null,b)
return b},
iU:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.i3(a)
s=J.u(a)
if(s[b]==null)return!1
return H.k8(H.j2(s[d],t),c)},
mI:function(a,b,c,d){if(a==null)return a
if(H.iU(a,b,c,d))return a
throw H.e(H.ao(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.ie(c,0,null),u.mangledGlobalNames)))},
k8:function(a,b){var t,s,r,q,p
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
if(!H.U(r,b[p]))return!1}return!0},
mJ:function(a,b,c){return H.j_(a,b,H.kg(b,c))},
U:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.name==="b5")return!0
if('func' in b)return H.kh(a,b)
if('func' in a)return b.name==="iE"||b.name==="n"
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
return H.k8(H.j2(o,t),r)},
k7:function(a,b,c){var t,s,r,q,p,o,n
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
if(!(H.U(o,n)||H.U(n,o)))return!1}return!0},
m8:function(a,b){var t,s,r,q,p,o
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
if(!(H.U(p,o)||H.U(o,p)))return!1}return!0},
kh:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.d('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.U(t,s)||H.U(s,t)))return!1}r=a.args
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
if(n===m){if(!H.k7(r,q,!1))return!1
if(!H.k7(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.d(j)
g=r[h]
H.d(i)
f=q[h]
if(!(H.U(g,f)||H.U(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.d(j)
g=p[d]
H.d(i)
f=q[e]
if(!(H.U(g,f)||H.U(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.d(j)
g=p[d]
H.d(i)
f=o[e]
if(!(H.U(g,f)||H.U(f,g)))return!1}}return H.m8(a.named,b.named)},
j_:function(a,b,c){H.d(typeof a=="function")
H.d(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
mQ:function(a){var t=$.iW
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
mM:function(a){return H.aO(a)},
mK:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
mv:function(a){var t,s,r,q,p,o
H.d(!(a instanceof P.n))
t=$.iW.$1(a)
s=$.i1[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.i8[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.k6.$2(a,t)
if(t!=null){s=$.i1[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.i8[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.j0(r)
$.i1[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.i8[t]=r
return r}if(p==="-"){o=H.j0(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.kj(a,r)
if(p==="*")throw H.e(new P.dg(t))
if(u.leafTags[t]===true){o=H.j0(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.kj(a,r)},
kj:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.ii(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
j0:function(a){return J.ii(a,!1,null,!!a.$ism)},
mx:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.ii(t,!1,null,!!t.$ism)
else return J.ii(t,c,null,null)},
mq:function(){if(!0===$.iY)return
$.iY=!0
H.mr()},
mr:function(){var t,s,r,q,p,o,n,m
$.i1=Object.create(null)
$.i8=Object.create(null)
H.mp()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.km.$1(p)
if(o!=null){n=H.mx(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
mp:function(){var t,s,r,q,p,o,n
t=C.R()
t=H.ba(C.O,H.ba(C.T,H.ba(C.B,H.ba(C.B,H.ba(C.S,H.ba(C.P,H.ba(C.Q(C.C),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.iW=new H.i5(p)
$.k6=new H.i6(o)
$.km=new H.i7(n)},
ba:function(a,b){return a(b)||b},
mE:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
f5:function f5(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fH:function fH(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
d4:function d4(a,b){this.a=a
this.b=b},
en:function en(a,b,c){this.a=a
this.b=b
this.c=c},
fL:function fL(a){this.a=a},
is:function is(a){this.a=a},
dn:function dn(a,b){this.a=a
this.b=b},
i9:function i9(a){this.a=a},
ia:function ia(a,b){this.a=a
this.b=b},
ib:function ib(a,b,c){this.a=a
this.b=b
this.c=c},
ic:function ic(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
id:function id(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
b0:function b0(){},
fv:function fv(){},
fi:function fi(){},
be:function be(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fJ:function fJ(a){this.a=a},
dB:function dB(a){this.a=a},
f9:function f9(a){this.a=a},
fW:function fW(a){this.a=a},
df:function df(a,b){this.a=a
this.b=b},
ab:function ab(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
em:function em(a){this.a=a},
ep:function ep(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
eq:function eq(a,b){this.a=a
this.$ti=b},
er:function er(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
i5:function i5(a){this.a=a},
i6:function i6(a){this.a=a},
i7:function i7(a){this.a=a},
C:function(a){return a},
m0:function(a){var t,s,r
if(!!J.u(a).$isl)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
bt:function bt(){},
aN:function aN(){},
cY:function cY(){},
cZ:function cZ(){},
d_:function d_(){},
cX:function cX(){},
eE:function eE(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
d0:function d0(){},
eK:function eK(){},
bu:function bu(){},
bv:function bv(){},
bw:function bw(){},
bx:function bx(){},
mh:function(a){var t=H.K(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
bV:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
u:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cS.prototype
return J.cR.prototype}if(typeof a=="string")return J.aJ.prototype
if(a==null)return J.cT.prototype
if(typeof a=="boolean")return J.el.prototype
if(a.constructor==Array)return J.aI.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aK.prototype
return a}if(a instanceof P.n)return a
return J.i2(a)},
ii:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
i2:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.iY==null){H.mq()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.e(new P.dg("Return interceptor for "+H.f(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$iH()]
if(p!=null)return p
p=H.mv(a)
if(p!=null)return p
if(typeof a=="function")return C.U
s=Object.getPrototypeOf(a)
if(s==null)return C.E
if(s===Object.prototype)return C.E
if(typeof q=="function"){Object.defineProperty(q,$.$get$iH(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
aa:function(a){if(typeof a=="string")return J.aJ.prototype
if(a==null)return a
if(a.constructor==Array)return J.aI.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aK.prototype
return a}if(a instanceof P.n)return a
return J.i2(a)},
dr:function(a){if(a==null)return a
if(a.constructor==Array)return J.aI.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aK.prototype
return a}if(a instanceof P.n)return a
return J.i2(a)},
kd:function(a){if(typeof a=="number")return J.b3.prototype
if(a==null)return a
if(!(a instanceof P.n))return J.aS.prototype
return a},
mj:function(a){if(typeof a=="number")return J.b3.prototype
if(typeof a=="string")return J.aJ.prototype
if(a==null)return a
if(!(a instanceof P.n))return J.aS.prototype
return a},
ke:function(a){if(typeof a=="string")return J.aJ.prototype
if(a==null)return a
if(!(a instanceof P.n))return J.aS.prototype
return a},
k:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aK.prototype
return a}if(a instanceof P.n)return a
return J.i2(a)},
E:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.u(a).u(a,b)},
af:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.kd(a).ax(a,b)},
kp:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kd(a).V(a,b)},
j3:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mu(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aa(a).h(a,b)},
kq:function(a,b,c,d){return J.k(a).dq(a,b,c,d)},
j4:function(a,b){return J.ke(a).aC(a,b)},
bc:function(a,b){return J.k(a).dI(a,b)},
kr:function(a,b,c){return J.k(a).dJ(a,b,c)},
j5:function(a,b){return J.k(a).bH(a,b)},
it:function(a,b){return J.k(a).J(a,b)},
j6:function(a,b,c){return J.k(a).bK(a,b,c)},
ks:function(a,b){return J.k(a).dW(a,b)},
iu:function(a,b,c){return J.k(a).bL(a,b,c)},
bW:function(a,b,c){return J.k(a).bM(a,b,c)},
iv:function(a,b){return J.k(a).dZ(a,b)},
kt:function(a,b){return J.k(a).bN(a,b)},
ku:function(a,b,c){return J.k(a).bO(a,b,c)},
kv:function(a,b,c,d){return J.k(a).bP(a,b,c,d)},
kw:function(a,b,c,d,e){return J.k(a).bQ(a,b,c,d,e)},
kx:function(a,b){return J.mj(a).K(a,b)},
iw:function(a,b,c){return J.aa(a).e2(a,b,c)},
j7:function(a){return J.k(a).bS(a)},
ky:function(a){return J.k(a).bT(a)},
kz:function(a){return J.k(a).bW(a)},
kA:function(a){return J.k(a).e7(a)},
kB:function(a,b){return J.k(a).bY(a,b)},
ix:function(a,b){return J.k(a).bZ(a,b)},
kC:function(a,b,c,d){return J.k(a).c_(a,b,c,d)},
kD:function(a,b,c,d,e){return J.k(a).ee(a,b,c,d,e)},
kE:function(a,b,c,d,e){return J.k(a).c0(a,b,c,d,e)},
kF:function(a,b,c,d,e,f){return J.k(a).ef(a,b,c,d,e,f)},
kG:function(a,b){return J.dr(a).p(a,b)},
ds:function(a,b){return J.k(a).c1(a,b)},
kH:function(a,b){return J.k(a).c2(a,b)},
kI:function(a){return J.k(a).eg(a)},
kJ:function(a,b){return J.dr(a).ar(a,b)},
kK:function(a){return J.k(a).gdV(a)},
ag:function(a){return J.u(a).gq(a)},
bd:function(a){return J.dr(a).gt(a)},
dt:function(a){return J.aa(a).gj(a)},
kL:function(a){return J.k(a).gaV(a)},
kM:function(a){return J.k(a).geI(a)},
iy:function(a,b){return J.k(a).a0(a,b)},
kN:function(a){return J.k(a).aw(a)},
kO:function(a){return J.k(a).b2(a)},
kP:function(a,b){return J.k(a).b3(a,b)},
kQ:function(a,b,c){return J.k(a).b4(a,b,c)},
j8:function(a,b,c){return J.k(a).b7(a,b,c)},
kR:function(a,b){return J.k(a).c4(a,b)},
kS:function(a,b){return J.dr(a).c6(a,b)},
kT:function(a,b,c){return J.k(a).c8(a,b,c)},
kU:function(a){return J.dr(a).eB(a)},
kV:function(a,b){return J.k(a).D(a,b)},
kW:function(a,b,c,d){return J.k(a).bc(a,b,c,d)},
kX:function(a,b,c,d,e,f,g){return J.k(a).cc(a,b,c,d,e,f,g)},
kY:function(a,b,c,d){return J.k(a).cd(a,b,c,d)},
j9:function(a,b,c,d){return J.k(a).ce(a,b,c,d)},
kZ:function(a){return J.ke(a).eL(a)},
aD:function(a){return J.u(a).k(a)},
l_:function(a,b,c,d){return J.k(a).eN(a,b,c,d)},
l0:function(a,b,c){return J.k(a).ci(a,b,c)},
l1:function(a,b,c){return J.k(a).cj(a,b,c)},
iz:function(a,b,c){return J.k(a).ck(a,b,c)},
l2:function(a,b,c){return J.k(a).cl(a,b,c)},
ja:function(a,b,c){return J.k(a).cm(a,b,c)},
jb:function(a,b,c){return J.k(a).cn(a,b,c)},
jc:function(a,b,c){return J.k(a).co(a,b,c)},
jd:function(a,b,c,d){return J.k(a).cp(a,b,c,d)},
je:function(a,b,c,d){return J.k(a).cq(a,b,c,d)},
l3:function(a,b){return J.k(a).cs(a,b)},
l4:function(a,b,c){return J.k(a).eO(a,b,c)},
jf:function(a,b,c,d,e,f,g){return J.k(a).cu(a,b,c,d,e,f,g)},
a:function a(){},
el:function el(){},
cT:function cT(){},
bq:function bq(){},
eY:function eY(){},
aS:function aS(){},
aK:function aK(){},
aI:function aI(a){this.$ti=a},
iF:function iF(a){this.$ti=a},
dx:function dx(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b3:function b3(){},
cS:function cS(){},
cR:function cR(){},
aJ:function aJ(){}},P={
lO:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.m9()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.bR(new P.fY(t),1)).observe(s,{childList:true})
return new P.fX(t,s,r)}else if(self.setImmediate!=null)return P.ma()
return P.mb()},
lP:function(a){++u.globalState.f.b
self.scheduleImmediate(H.bR(new P.fZ(a),0))},
lQ:function(a){++u.globalState.f.b
self.setImmediate(H.bR(new P.h_(a),0))},
lR:function(a){P.iM(C.z,a)},
m4:function(a,b){if(H.bb(a,{func:1,args:[P.b5,P.b5]})){b.toString
return a}else{b.toString
return a}},
lT:function(a,b){var t,s,r
H.d(b.a<4)
H.d(!(a instanceof P.aq))
H.d(b.a===0)
b.a=1
try{a.cg(new P.hf(b),new P.hg(b))}catch(r){t=H.L(r)
s=H.az(r)
P.mB(new P.hh(b,t,s))}},
jY:function(a,b){var t,s,r,q
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
P.bH(b,q)}else{q=b.c
H.d(s<=1)
b.a=2
b.c=a
a.bA(q)}},
bH:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.hV(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bH(t.a,b)}s=t.a
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
P.hV(null,null,p,o,s)
return}s=$.A
if(s==null?l!=null:s!==l){H.d(l!=null)
s=$.A
H.d(l==null?s!=null:l!==s)
j=$.A
$.A=l
i=j}else i=null
s=b.c
if(s===8)new P.hl(t,r,q,b).$0()
else if(p){if((s&1)!==0)new P.hk(r,b,m).$0()}else if((s&2)!==0)new P.hj(t,r,b).$0()
if(i!=null){H.d(!0)
$.A=i}s=r.b
if(!!J.u(s).$ise8){if(s.a>=4){H.d(o.a<4)
h=o.c
o.c=null
b=o.a8(h)
H.d(o.a<4)
H.d(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.jY(s,o)
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
m3:function(){var t,s
for(;t=$.b9,t!=null;){$.bP=null
s=t.b
$.b9=s
if(s==null)$.bO=null
t.a.$0()}},
m7:function(){$.iS=!0
try{P.m3()}finally{$.bP=null
$.iS=!1
if($.b9!=null)$.$get$iO().$1(P.k9())}},
k4:function(a){var t=new P.di(a,null)
if($.b9==null){$.bO=t
$.b9=t
if(!$.iS)$.$get$iO().$1(P.k9())}else{$.bO.b=t
$.bO=t}},
m6:function(a){var t,s,r
t=$.b9
if(t==null){P.k4(a)
$.bP=$.bO
return}s=new P.di(a,null)
r=$.bP
if(r==null){s.b=t
$.bP=s
$.b9=s}else{s.b=r.b
r.b=s
$.bP=s
if(s.b==null)$.bO=s}},
mB:function(a){var t=$.A
if(C.h===t){P.hX(null,null,C.h,a)
return}t.toString
P.hX(null,null,t,t.aO(a))},
lM:function(a,b){var t=$.A
if(t===C.h){t.toString
return P.iM(a,b)}return P.iM(a,t.aO(b))},
iM:function(a,b){var t=C.b.v(a.a,1000)
return H.lL(t<0?0:t,b)},
iN:function(a){var t,s
H.d(a!=null)
t=$.A
H.d(a==null?t!=null:a!==t)
s=$.A
$.A=a
return s},
hV:function(a,b,c,d,e){var t={}
t.a=d
P.m6(new P.hW(t,e))},
k2:function(a,b,c,d){var t,s
if($.A===c)return d.$0()
t=P.iN(c)
try{s=d.$0()
return s}finally{s=t
H.d(s!=null)
$.A=s}},
k3:function(a,b,c,d,e){var t,s
if($.A===c)return d.$1(e)
t=P.iN(c)
try{s=d.$1(e)
return s}finally{s=t
H.d(s!=null)
$.A=s}},
m5:function(a,b,c,d,e,f){var t,s
if($.A===c)return d.$2(e,f)
t=P.iN(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.d(s!=null)
$.A=s}},
hX:function(a,b,c,d){var t=C.h!==c
if(t)d=!(!t||!1)?c.aO(d):c.dX(d)
P.k4(d)},
fY:function fY(a){this.a=a},
fX:function fX(a,b,c){this.a=a
this.b=b
this.c=c},
fZ:function fZ(a){this.a=a},
h_:function h_(a){this.a=a},
h3:function h3(){},
hN:function hN(a,b){this.a=a
this.$ti=b},
dk:function dk(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
aq:function aq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
he:function he(a,b){this.a=a
this.b=b},
hi:function hi(a,b){this.a=a
this.b=b},
hf:function hf(a){this.a=a},
hg:function hg(a){this.a=a},
hh:function hh(a,b,c){this.a=a
this.b=b
this.c=c},
hl:function hl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hm:function hm(a){this.a=a},
hk:function hk(a,b,c){this.a=a
this.b=b
this.c=c},
hj:function hj(a,b,c){this.a=a
this.b=b
this.c=c},
di:function di(a,b){this.a=a
this.b=b},
fm:function fm(){},
fo:function fo(a){this.a=a},
fp:function fp(a,b){this.a=a
this.b=b},
fn:function fn(){},
b_:function b_(a,b){this.a=a
this.b=b},
hU:function hU(){},
hW:function hW(a,b){this.a=a
this.b=b},
hz:function hz(){},
hB:function hB(a,b){this.a=a
this.b=b},
hA:function hA(a,b){this.a=a
this.b=b},
hC:function hC(a,b){this.a=a
this.b=b},
jB:function(a,b){return new H.ab(0,null,null,null,null,null,0,[a,b])},
a1:function(){return new H.ab(0,null,null,null,null,null,0,[null,null])},
aM:function(a){return H.mi(a,new H.ab(0,null,null,null,null,null,0,[null,null]))},
bL:function(a,b){return new P.dl(0,null,null,null,null,null,0,[a,b])},
lX:function(){var t=Object.create(null)
H.d(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
ls:function(a,b,c){var t,s
if(P.iT(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$bQ()
C.a.l(s,a)
try{P.m2(a,t)}finally{H.d(C.a.gaS(s)===a)
s.pop()}s=P.jK(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
ej:function(a,b,c){var t,s,r
if(P.iT(a))return b+"..."+c
t=new P.bD(b)
s=$.$get$bQ()
C.a.l(s,a)
try{r=t
r.a=P.jK(r.gX(),a,", ")}finally{H.d(C.a.gaS(s)===a)
s.pop()}s=t
s.a=s.gX()+c
s=t.gX()
return s.charCodeAt(0)==0?s:s},
iT:function(a){var t,s
for(t=0;s=$.$get$bQ(),t<s.length;++t)if(a===s[t])return!0
return!1},
m2:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gt(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.m())return
q=H.f(t.gn())
C.a.l(b,q)
s+=q.length+2;++r}if(!t.m()){if(r<=5)return
p=b.pop()
o=b.pop()}else{n=t.gn();++r
if(!t.m()){if(r<=4){C.a.l(b,H.f(n))
return}p=H.f(n)
o=b.pop()
s+=p.length+2}else{m=t.gn();++r
H.d(r<100)
for(;t.m();n=m,m=l){l=t.gn();++r
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
ac:function(a,b,c,d){return new P.hr(0,null,null,null,null,null,0,[d])},
iJ:function(a,b){var t,s
t=P.ac(null,null,null,b)
for(s=J.bd(a);s.m();)t.l(0,s.gn())
return t},
lw:function(a){var t,s,r
t={}
if(P.iT(a))return"{...}"
s=new P.bD("")
try{C.a.l($.$get$bQ(),a)
r=s
r.a=r.gX()+"{"
t.a=!0
a.ar(0,new P.ev(t,s))
t=s
t.a=t.gX()+"}"}finally{t=$.$get$bQ()
H.d(C.a.gaS(t)===a)
t.pop()}t=s.gX()
return t.charCodeAt(0)==0?t:t},
iK:function(a,b){var t=new P.es(null,0,0,0,[b])
t.d4(a,b)
return t},
dl:function dl(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hr:function hr(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hs:function hs(a,b,c){this.a=a
this.b=b
this.c=c},
bK:function bK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hp:function hp(){},
cU:function cU(){},
v:function v(){},
ev:function ev(a,b){this.a=a
this.b=b},
es:function es(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ht:function ht(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fc:function fc(){},
fb:function fb(){},
bz:function bz(){},
jK:function(a,b,c){var t=J.bd(b)
if(!t.m())return a
if(c.length===0){do a+=H.f(t.gn())
while(t.m())}else{a+=H.f(t.gn())
for(;t.m();)a=a+c+H.f(t.gn())}return a},
lb:function(a,b){return J.kx(a,b)},
lc:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.f(t)
if(t>=10)return s+"00"+H.f(t)
return s+"000"+H.f(t)},
ld:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c1:function(a){if(a>=10)return""+a
return"0"+a},
iC:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aD(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lh(a)},
lh:function(a){var t=J.u(a)
if(!!t.$isb0)return t.k(a)
return H.f2(a)},
jg:function(a){return new P.ah(!1,null,null,a)},
jh:function(a,b,c){return new P.ah(!0,a,b,c)},
lF:function(a){return new P.bA(null,null,!1,null,null,a)},
f4:function(a,b,c){return new P.bA(null,null,!0,a,b,"Value not in range")},
aP:function(a,b,c,d,e){return new P.bA(b,c,!0,a,d,"Invalid value")},
jI:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.aP(a,0,c,"start",f))
if(a>b||b>c)throw H.e(P.aP(b,a,c,"end",f))
return b},
z:function(a,b,c,d,e){var t=e!=null?e:J.dt(b)
return new P.ee(b,t,!0,a,c,"Index out of range")},
c6:function(a){return new P.hd(a)},
jC:function(a,b,c){var t,s
t=H.K([],[c])
for(s=J.bd(a);s.m();)C.a.l(t,s.gn())
return t},
ar:function(a){H.bV(H.f(a))},
ay:function ay(){},
F:function F(){},
bf:function bf(a,b){this.a=a
this.b=b},
P:function P(){},
aH:function aH(a){this.a=a},
dL:function dL(){},
dM:function dM(){},
b2:function b2(){},
bX:function bX(a){this.a=a},
d5:function d5(){},
ah:function ah(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bA:function bA(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ee:function ee(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
t:function t(a){this.a=a},
dg:function dg(a){this.a=a},
au:function au(a){this.a=a},
Y:function Y(a){this.a=a},
da:function da(){},
dF:function dF(a){this.a=a},
hd:function hd(a){this.a=a},
dO:function dO(a,b,c){this.a=a
this.b=b
this.$ti=c},
o:function o(){},
Q:function Q(){},
cQ:function cQ(){},
c:function c(){},
at:function at(){},
b5:function b5(){},
V:function V(){},
n:function n(){},
bC:function bC(){},
r:function r(){},
bD:function bD(a){this.a=a},
i_:function(a){var t,s,r,q,p
if(a==null)return
t=P.a1()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.W)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
mf:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.kJ(a,new P.hZ(t))
return t},
ju:function(){var t=$.jt
if(t==null){t=J.iw(window.navigator.userAgent,"Opera",0)
$.jt=t}return t},
le:function(){var t,s
t=$.jq
if(t!=null)return t
s=$.jr
if(s==null){s=J.iw(window.navigator.userAgent,"Firefox",0)
$.jr=s}if(s)t="-moz-"
else{s=$.js
if(s==null){s=!P.ju()&&J.iw(window.navigator.userAgent,"Trident/",0)
$.js=s}if(s)t="-ms-"
else t=P.ju()?"-o-":"-webkit-"}$.jq=t
return t},
hZ:function hZ(a){this.a=a},
lZ:function(a){var t=new P.hx(0,0)
t.dl(a)
return t},
hx:function hx(a,b){this.a=a
this.b=b},
hy:function hy(){},
H:function H(){},
du:function du(){},
aE:function aE(){},
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
e6:function e6(){},
G:function G(){},
ec:function ec(){},
aj:function aj(){},
eo:function eo(){},
ew:function ew(){},
ex:function ex(){},
al:function al(){},
eO:function eO(){},
eV:function eV(){},
f_:function f_(){},
bB:function bB(){},
fq:function fq(){},
B:function B(){},
fr:function fr(){},
fs:function fs(){},
aQ:function aQ(){},
fw:function fw(){},
am:function am(){},
fG:function fG(){},
fN:function fN(){},
fP:function fP(){},
fQ:function fQ(){},
bI:function bI(){},
hD:function hD(){},
hE:function hE(){},
hF:function hF(){},
ce:function ce(){},
cc:function cc(){},
cj:function cj(){},
cn:function cn(){},
cx:function cx(){},
cG:function cG(){},
cC:function cC(){},
cE:function cE(){},
dy:function dy(){},
f7:function f7(){},
f8:function f8(){},
hR:function hR(){},
fh:function fh(){},
cd:function cd(){},
cA:function cA(){}},W={
lf:function(a,b,c){var t,s
t=document.body
s=(t&&C.p).H(t,a,b,c)
s.toString
t=new H.dh(new W.N(s),new W.hY(),[W.p])
return t.gW(t)},
lg:function(a){return"wheel"},
bh:function(a){var t,s,r
t="element tag unavailable"
try{s=J.kM(a)
if(typeof s==="string")t=a.tagName}catch(r){H.L(r)}return t},
lS:function(a,b){return document.createElement(a)},
aY:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
k0:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ap:function(a,b,c,d,e){var t=W.k5(new W.hc(c))
t=new W.hb(0,a,b,t,!1,[e])
t.di(a,b,c,!1,e)
return t},
jZ:function(a){var t,s
t=document.createElement("a")
s=new W.hG(t,window.location)
s=new W.bJ(s)
s.dj(a)
return s},
lV:function(a,b,c,d){return!0},
lW:function(a,b,c,d){var t,s,r,q,p
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
k1:function(){var t=P.r
t=new W.hO(P.iJ(C.u,t),P.ac(null,null,null,t),P.ac(null,null,null,t),P.ac(null,null,null,t),null)
t.dm(null,new H.br(C.u,new W.hP(),[H.aA(C.u,0),null]),["TEMPLATE"],null)
return t},
k5:function(a){var t=$.A
if(t===C.h)return a
return t.dY(a)},
j:function j(){},
dv:function dv(){},
dw:function dw(){},
X:function X(){},
dz:function dz(){},
bY:function bY(){},
aF:function aF(){},
bZ:function bZ(){},
c_:function c_(){},
c0:function c0(){},
aG:function aG(){},
dD:function dD(){},
x:function x(){},
b1:function b1(){},
dE:function dE(){},
dG:function dG(){},
c2:function c2(){},
bg:function bg(){},
c3:function c3(){},
dH:function dH(){},
c4:function c4(){},
c5:function c5(){},
dI:function dI(){},
dJ:function dJ(){},
Z:function Z(){},
hY:function hY(){},
i:function i(){},
h:function h(){},
a_:function a_(){},
e4:function e4(){},
e5:function e5(){},
e7:function e7(){},
a0:function a0(){},
c9:function c9(){},
ea:function ea(){},
bo:function bo(){},
ca:function ca(){},
eb:function eb(){},
bp:function bp(){},
ef:function ef(){},
aL:function aL(){},
et:function et(){},
ez:function ez(){},
eB:function eB(){},
bs:function bs(){},
a2:function a2(){},
eC:function eC(){},
I:function I(){},
eL:function eL(){},
N:function N(a){this.a=a},
p:function p(){},
d1:function d1(){},
by:function by(){},
eU:function eU(){},
eX:function eX(){},
a3:function a3(){},
eZ:function eZ(){},
f1:function f1(){},
d6:function d6(){},
d7:function d7(){},
fa:function fa(){},
fd:function fd(){},
a4:function a4(){},
fe:function fe(){},
a5:function a5(){},
fg:function fg(){},
a6:function a6(){},
fl:function fl(){},
R:function R(){},
db:function db(){},
ft:function ft(){},
fu:function fu(){},
bE:function bE(){},
a7:function a7(){},
S:function S(){},
fx:function fx(){},
fy:function fy(){},
fA:function fA(){},
a8:function a8(){},
aR:function aR(){},
fE:function fE(){},
fF:function fF(){},
av:function av(){},
de:function de(){},
aw:function aw(){},
fM:function fM(){},
fO:function fO(){},
fR:function fR(){},
fS:function fS(){},
aT:function aT(){},
bG:function bG(){},
fU:function fU(a){this.a=a},
fV:function fV(){},
aU:function aU(){},
h2:function h2(){},
dj:function dj(){},
h4:function h4(){},
h5:function h5(){},
h6:function h6(){},
hn:function hn(){},
ho:function ho(){},
dm:function dm(){},
hH:function hH(){},
hK:function hK(){},
hL:function hL(){},
hS:function hS(){},
hT:function hT(){},
h0:function h0(){},
h7:function h7(a){this.a=a},
ha:function ha(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iP:function iP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hb:function hb(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
hc:function hc(a){this.a=a},
bJ:function bJ(a){this.a=a},
y:function y(){},
d3:function d3(a){this.a=a},
eN:function eN(a){this.a=a},
eM:function eM(a,b,c){this.a=a
this.b=b
this.c=c},
bM:function bM(){},
hI:function hI(){},
hJ:function hJ(){},
hO:function hO(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
hP:function hP(){},
hM:function hM(){},
c8:function c8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
d2:function d2(){},
hG:function hG(a,b){this.a=a
this.b=b},
dp:function dp(a){this.a=a},
hQ:function hQ(a){this.a=a},
bi:function bi(){},
bj:function bj(){},
bk:function bk(){},
bl:function bl(){},
bm:function bm(){},
bn:function bn(){},
cb:function cb(){},
cv:function cv(){},
ch:function ch(){},
co:function co(){},
cp:function cp(){},
cq:function cq(){},
cr:function cr(){},
cs:function cs(){},
ct:function ct(){},
cu:function cu(){},
cf:function cf(){},
cg:function cg(){},
ci:function ci(){},
ck:function ck(){},
cl:function cl(){},
cm:function cm(){},
cw:function cw(){},
cy:function cy(){},
cI:function cI(){},
cJ:function cJ(){},
cH:function cH(){},
cM:function cM(){},
cN:function cN(){},
cO:function cO(){},
cP:function cP(){},
cz:function cz(){},
cB:function cB(){},
cD:function cD(){},
cF:function cF(){},
cK:function cK(){},
cL:function cL(){}},B={
mC:function(a){var t,s
t=document
s=W.aL
W.ap(t,"keydown",new B.ik(),!1,s)
W.ap(t,"keyup",new B.il(),!1,s)
if(!$.mD)W.ap(t,"mousemove",new B.im(),!1,W.I)
s=W.I
W.ap(t,"mousedown",new B.io(),!1,s)
W.ap(t,"mouseup",new B.ip(),!1,s)},
lx:function(a,b,c,d){var t,s,r,q
t=new Float32Array(H.C(3))
s=$.$get$i0()
r=$.$get$bS()
q=new T.ak(new Float32Array(H.C(16)))
q.ak()
q=new B.eP(a,b,c,0,new T.q(t),-0.02,s,r,q,new T.q(new Float32Array(H.C(3))),new T.q(new Float32Array(H.C(3))),new T.q(new Float32Array(H.C(3))),new T.q(new Float32Array(H.C(3))),"camera:orbit",!1,!0)
q.d5(a,b,c,d)
return q},
ik:function ik(){},
il:function il(){},
im:function im(){},
io:function io(){},
ip:function ip(){},
eP:function eP(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
eQ:function eQ(a){this.a=a},
eR:function eR(a){this.a=a},
eS:function eS(){},
eT:function eT(a){this.a=a}},G={
lN:function(a){var t,s,r
t=a.split("\n")
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.f(t[s])}return C.a.ae(t,"\n")},
jX:function(a,b,c){var t,s,r,q
t=J.k(a)
s=t.bV(a,b)
t.ba(a,s,c)
t.bR(a,s)
r=t.b6(a,s,35713)
if(r!=null&&!r){q=t.b5(a,s)
P.ar("E:Compilation failed:")
P.ar("E:"+G.lN(c))
P.ar("E:Failure:")
P.ar(C.j.a_("E:",q))
throw H.e(q)}return s},
jy:function(a,b){var t,s,r
t=a.length
b=new Float32Array(t*3)
for(t=a.length,s=0;s<t;++s){r=s*3
b[r]=a[s].a[0]
b[r+1]=a[s].a[1]
b[r+2]=a[s].a[2]}return b},
lj:function(a,b){var t,s,r
t=C.c.gj(a).B(0,2)
b=new Float32Array(t)
for(s=0;C.b.V(s,C.c.gj(a));++s){t=s*2
r=C.c.h(a,s)
b[t]=r.gb_(r)
r=C.c.h(a,s)
b[t+1]=r.gb0(r)}return b},
lk:function(a,b){var t,s,r
t=C.c.gj(a).B(0,4)
b=new Float32Array(t)
for(s=0;C.b.V(s,C.c.gj(a));++s){t=s*4
r=C.c.h(a,s)
b[t]=r.gb_(r)
r=C.c.h(a,s)
b[t+1]=r.gb0(r)
r=C.c.h(a,s)
b[t+2]=r.gcw(r)
r=C.c.h(a,s)
b[t+3]=r.geP(r)}return b},
li:function(a,b){var t,s
t=C.c.gj(a).B(0,4)
b=new Uint32Array(t)
for(s=0;C.b.V(s,C.c.gj(a));++s){t=s*4
b[t]=C.c.h(a,s).h(0,0)
b[t+1]=C.c.h(a,s).h(0,1)
b[t+2]=C.c.h(a,s).h(0,2)
b[t+3]=C.c.h(a,s).h(0,3)}return b},
lU:function(a,b){var t,s,r,q,p,o,n
for(t=a.e,s=t.gC(t),s=s.gt(s),r=b.x;s.m();){q=s.gn()
if(!r.E(0,q)){p="Dropping unnecessary attribute: "+H.f(q)
if($.kc>0)H.bV("I: "+p)
continue}o=t.h(0,q)
switch($.$get$a9().h(0,q).a){case"vec2":b.a4(q,G.lj(o,null),2)
break
case"vec3":b.a4(q,G.jy(o,null),3)
break
case"vec4":b.a4(q,G.lk(o,null),4)
break
case"float":b.a4(q,new Float32Array(H.m0(o)),1)
break
case"uvec4":b.a4(q,G.li(o,null),4)
break
default:if(H.ax(!1)){p="unknown type for "+H.f(q)+" ["
n=C.c.h(o,0)
H.aZ(p+H.f(n.geH(n))+"] ["+H.f(C.c.geH(o))+"] "+H.f(o))}}}},
lI:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.ac(null,null,null,P.r)
s=c.b
r=d.b
q=c.f
p=J.ky(b.a)
o=G.jX(b.a,35633,s)
J.j6(b.a,p,o)
n=G.jX(b.a,35632,r)
J.j6(b.a,p,n)
if(q.length>0)J.l_(b.a,p,q,35980)
J.kR(b.a,p)
if(!J.kQ(b.a,p,35714))H.D(J.kP(b.a,p))
t=new G.f6(b,c,d,p,P.iJ(c.c,null),P.a1(),P.a1(),t,null,a,!1,!0)
t.d6(a,b,c,d)
return t},
eD:function eD(){},
fK:function fK(){},
dA:function dA(){},
dC:function dC(a,b){this.a=a
this.b=b},
e9:function e9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dd:function dd(a,b,c){this.a=a
this.b=b
this.c=c},
dc:function dc(a,b,c){this.a=a
this.b=b
this.c=c},
ey:function ey(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
eA:function eA(a,b,c,d,e,f,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
eW:function eW(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
f6:function f6(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
d8:function d8(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
ff:function ff(){},
fz:function fz(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bF:function bF(){},
ed:function ed(a,b,c,d,e,f){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f}},R={fj:function fj(){},fk:function fk(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dK:function(a){var t=a.a
return H.f(t[0])+" "+H.f(t[1])+" "+H.f(t[2])},
jH:function(a,b){var t,s,r,q
t=a.aU()
s=a.aU()
r=a.aU()
q=new Float32Array(3)
q[0]=(t-0.5)*b
q[1]=(s-0.5)*b
q[2]=(r-0.5)*b
return new T.q(q)},
jD:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j,i
t=[]
for(s=0;s<5;++s){r=a[s]
q=new Float32Array(3)
q[0]=r
q[1]=b
q[2]=c
p=new Float32Array(3)
o=new T.q(p)
o.w(new T.q(q))
o.a1(0,d)
q=new Float32Array(3)
o=new T.q(q)
n=new T.q(new Float32Array(3))
m=new T.q(new Float32Array(3))
l=new R.f0(o,n,m,0)
k=p[0]
j=p[1]
p=p[2]
i=new Float32Array(3)
i[0]=k
i[1]=j
i[2]=p
m.scv(new T.q(i))
i=q[0]
p=q[1]
q=q[2]
k=new Float32Array(3)
k[0]=i
k[1]=p
k[2]=q
n.scv(new T.q(k))
T.jW(n,m,0,o)
l.d=1
T.jW(n,m,1,o)
C.a.l(t,l)}return t},
mw:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
t={}
s=document
r=new R.fk(0,0,null,null,null,null)
r.d9(C.t.cD(s,"stats"),"blue","gray")
q=P.lZ(0)
p=C.t.eA(s,"#webgl-canvas")
o=p.clientWidth
n=p.clientHeight
p.width=o
p.height=n
m=new G.dC(null,p)
l=(p&&C.x).b1(p,"webgl2",P.aM(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
m.a=l
if(l==null)H.D(P.c6('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
k="ChronosGL Config: "+J.aD(J.kN(l))
if($.kc>0)P.ar("I: "+k)
J.kw(l,0,0,0,1)
J.ds(l,2929)
j=B.lx(15,0.5,0.5,p)
l=new T.ak(new Float32Array(H.C(16)))
l.ak()
k=new T.ak(new Float32Array(H.C(16)))
k.ak()
i=new G.eW(j,50,1,0.1,1000,l,k,new T.ak(new Float32Array(H.C(16))),P.a1(),"perspective",!1,!0)
i.bk()
i.d_(o,n)
h=G.lI("CPU",m,$.$get$kl(),$.$get$kk())
g=R.jD([2,1,0,-1,-2],0,2,3)
f=R.jD([2,1,0,-1,-2],0,-2,3)
k=new Float32Array(H.C(3))
e=new T.q(k)
k[2]=10010
k[1]=10010
k[0]=10010
d=[]
for(c=0;c<1e4;++c){b=new R.eg(null,2)
l=new T.q(new Float32Array(3))
l.w(e)
b.a=l
C.a.l(d,b)}a=new Float32Array(H.C(3e4))
l=$.$get$ji()
a0=new G.ey(P.a1(),"stars",!1,!0)
a0.S("cDepthTest",!0)
a0.S("cDepthWrite",!1)
a0.S("cBlendEquation",l)
a0.S("cStencilFunc",$.$get$jJ())
a1=s.createElement("canvas")
a1.width=64
a1.height=64
a2=C.x.cC(a1,"2d")
a3=(a2&&C.q).bU(a2,32,32,1,32,32,22);(a3&&C.n).aq(a3,0,"gray")
C.n.aq(a3,1,"black")
a2.fillStyle=a3
C.q.eh(a2,0,0,64,64)
a3=C.q.bU(a2,32,32,1,32,32,6);(a3&&C.n).aq(a3,0,"white")
C.n.aq(a3,1,"gray")
a2.globalAlpha=0.9
a2.fillStyle=a3
a2.arc(32,32,4,0,6.283185307179586,!1)
a2.fill("nonzero")
s=new G.fz(!1,!1,!1,!0,1,9729,9729)
l=J.kz(m.a)
k=new G.ed(a1,"Utils::Particles",l,3553,m,s)
J.bW(m.a,3553,l)
J.kT(m.a,37440,1)
k.d8(a1)
s.d3(m,3553)
H.d(J.kO(m.a)===0)
J.bW(m.a,3553,null)
a0.S("uTexture",k)
a0.S("uPointSize",200)
s=new T.ak(new Float32Array(H.C(16)))
s.ak()
a0.S("uModelMatrix",s)
s=[]
for(c=0;c<1e4;++c){l=new Float32Array(3)
k=new T.q(new Float32Array(3))
k.w(new T.q(l))
C.a.l(s,k)}l=h.d
k=h.e.x
a4=P.a1()
a5=J.kA(l.a)
a6=new G.eA(l,a5,0,a4,k,null,0,-1,null,null,P.a1(),"meshdata:",!1,!0)
a7=G.jy(s,null)
a4.i(0,"aPosition",J.j7(l.a))
a6.bg(a7)
a8=$.$get$a9().h(0,"aPosition")
if(a8==null)H.D("Unknown canonical aPosition")
H.d(k.E(0,"aPosition"))
a9=k.h(0,"aPosition")
J.iv(l.a,a5)
l.c3(0,a9,0)
k=a4.h(0,"aPosition")
a4=a8.bh()
J.iu(l.a,34962,k)
J.jf(l.a,a9,a4,5126,!1,0,0)
G.lU(new G.e9(!0,[],[],s,P.a1()),a6)
t.a=0
new R.ih(t,r,q,j,i,h,g,f,d,a,a0,a6).$1(0)},
f0:function f0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eg:function eg(a,b){this.a=a
this.b=b},
ih:function ih(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=a0
_.z=a1
_.Q=a2
_.ch=a3}},A={
iX:function(a){var t,s
t=C.Y.ej(a,0,new A.i4())
s=536870911&t+(C.b.cz(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
i4:function i4(){}},T={
jW:function(a,b,c,d){var t,s,r,q
t=a.a
s=t[0]
r=b.a
q=d.a
q[0]=s+c*(r[0]-s)
s=t[1]
q[1]=s+c*(r[1]-s)
t=t[2]
q[2]=t+c*(r[2]-t)},
ak:function ak(a){this.a=a},
q:function q(a){this.a=a},
b7:function b7(a){this.a=a}}
var v=[C,H,J,P,W,B,G,R,A,T]
setFunctionNamesIfNecessary(v)
var $={}
H.iG.prototype={}
J.a.prototype={
u:function(a,b){return a===b},
gq:function(a){return H.aO(a)},
k:function(a){return H.f2(a)}}
J.el.prototype={
k:function(a){return String(a)},
gq:function(a){return a?519018:218159},
$isay:1}
J.cT.prototype={
u:function(a,b){return null==b},
k:function(a){return"null"},
gq:function(a){return 0}}
J.bq.prototype={
gq:function(a){return 0},
k:function(a){return String(a)},
$islv:1}
J.eY.prototype={}
J.aS.prototype={}
J.aK.prototype={
k:function(a){var t=a[$.$get$jp()]
return t==null?this.cW(a):J.aD(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isiE:1}
J.aI.prototype={
aQ:function(a,b){if(!!a.immutable$list)throw H.e(new P.t(b))},
aP:function(a,b){if(!!a.fixed$length)throw H.e(new P.t(b))},
l:function(a,b){this.aP(a,"add")
a.push(b)},
G:function(a,b){var t,s,r,q,p
t=a.length
this.aP(a,"addAll")
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.W)(b),++r,t=p){q=b[r]
p=t+1
H.d(t===a.length||H.D(new P.Y(a)))
a.push(q)}},
c6:function(a,b){return new H.br(a,b,[H.aA(a,0),null])},
ae:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.f(a[s])
return t.join(b)},
p:function(a,b){return a[b]},
gei:function(a){if(a.length>0)return a[0]
throw H.e(H.ek())},
gaS:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.e(H.ek())},
b9:function(a,b,c,d,e){var t,s
this.aQ(a,"setRange")
P.jI(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.D(P.aP(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.e(H.lt())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=d[e+s]
else for(s=0;s<t;++s)a[b+s]=d[e+s]},
bJ:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.e(new P.Y(a))}return!1},
cP:function(a,b){this.aQ(a,"sort")
H.d9(a,0,a.length-1,P.mg())},
bb:function(a){return this.cP(a,null)},
A:function(a,b){var t
for(t=0;t<a.length;++t)if(J.E(a[t],b))return!0
return!1},
k:function(a){return P.ej(a,"[","]")},
gt:function(a){return new J.dx(a,a.length,0,null,[H.aA(a,0)])},
gq:function(a){return H.aO(a)},
gj:function(a){return a.length},
sj:function(a,b){this.aP(a,"set length")
if(b<0)throw H.e(P.aP(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.J(a,b))
if(b>=a.length||b<0)throw H.e(H.J(a,b))
return a[b]},
i:function(a,b,c){this.aQ(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.J(a,b))
if(b>=a.length||b<0)throw H.e(H.J(a,b))
a[b]=c},
$isl:1,
$asl:function(){},
$isb:1,
$asb:null,
$isc:1,
$asc:null}
J.iF.prototype={}
J.dx.prototype={
gn:function(){return this.d},
m:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.e(H.W(t))
r=this.c
if(r>=s){this.sbl(null)
return!1}this.sbl(t[r]);++this.c
return!0},
sbl:function(a){this.d=a}}
J.b3.prototype={
K:function(a,b){var t
if(typeof b!=="number")throw H.e(H.O(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gas(b)
if(this.gas(a)===t)return 0
if(this.gas(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gas:function(a){return a===0?1/a<0:a<0},
e_:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.e(new P.t(""+a+".ceil()"))},
Z:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(new P.t(""+a+".round()"))},
e0:function(a,b,c){if(this.K(b,c)>0)throw H.e(H.O(b))
if(this.K(a,b)<0)return b
if(this.K(a,c)>0)return c
return a},
eM:function(a,b){var t
if(b>20)throw H.e(P.aP(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gas(a))return"-"+t
return t},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gq:function(a){return a&0x1FFFFFFF},
a_:function(a,b){if(typeof b!=="number")throw H.e(H.O(b))
return a+b},
a3:function(a,b){if(typeof b!=="number")throw H.e(H.O(b))
return a-b},
cA:function(a,b){if(typeof b!=="number")throw H.e(H.O(b))
return a/b},
B:function(a,b){if(typeof b!=="number")throw H.e(H.O(b))
return a*b},
aB:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bF(a,b)},
v:function(a,b){return(a|0)===a?a/b|0:this.bF(a,b)},
bF:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.e(new P.t("Result of truncating division is "+H.f(t)+": "+H.f(a)+" ~/ "+b))},
aK:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
cz:function(a,b){if(typeof b!=="number")throw H.e(H.O(b))
return(a&b)>>>0},
cY:function(a,b){if(typeof b!=="number")throw H.e(H.O(b))
return(a^b)>>>0},
V:function(a,b){if(typeof b!=="number")throw H.e(H.O(b))
return a<b},
ax:function(a,b){if(typeof b!=="number")throw H.e(H.O(b))
return a>b},
cB:function(a,b){if(typeof b!=="number")throw H.e(H.O(b))
return a>=b},
$isV:1}
J.cS.prototype={$isP:1,$iso:1,$isV:1}
J.cR.prototype={$isP:1,$isV:1}
J.aJ.prototype={
aC:function(a,b){if(b>=a.length)throw H.e(H.J(a,b))
return a.charCodeAt(b)},
a_:function(a,b){if(typeof b!=="string")throw H.e(P.jh(b,null,null))
return a+b},
cR:function(a,b,c){var t
if(c>a.length)throw H.e(P.aP(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
cQ:function(a,b){return this.cR(a,b,0)},
bd:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.f4(b,null,null))
if(b>c)throw H.e(P.f4(b,null,null))
if(c>a.length)throw H.e(P.f4(c,null,null))
return a.substring(b,c)},
cT:function(a,b){return this.bd(a,b,null)},
eL:function(a){return a.toLowerCase()},
e2:function(a,b,c){if(c>a.length)throw H.e(P.aP(c,0,a.length,null,null))
return H.mE(a,b,c)},
K:function(a,b){var t
if(typeof b!=="string")throw H.e(H.O(b))
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
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.e(H.J(a,b))
return a[b]},
$isl:1,
$asl:function(){},
$isr:1}
H.b.prototype={$asb:null}
H.b4.prototype={
gt:function(a){return new H.cV(this,this.gj(this),0,null,[H.ae(this,"b4",0)])},
av:function(a,b){return this.cV(0,b)},
eK:function(a,b){var t,s
t=H.K([],[H.ae(this,"b4",0)])
C.a.sj(t,this.gj(this))
for(s=0;s<this.gj(this);++s)t[s]=this.p(0,s)
return t},
eJ:function(a){return this.eK(a,!0)}}
H.cV.prototype={
gn:function(){return this.d},
m:function(){var t,s,r,q
t=this.a
s=J.aa(t)
r=s.gj(t)
if(this.b!==r)throw H.e(new P.Y(t))
q=this.c
if(q>=r){this.sa6(null)
return!1}this.sa6(s.p(t,q));++this.c
return!0},
sa6:function(a){this.d=a}}
H.cW.prototype={
gt:function(a){return new H.eu(null,J.bd(this.a),this.b,this.$ti)},
gj:function(a){return J.dt(this.a)},
$asQ:function(a,b){return[b]}}
H.dN.prototype={$isb:1,
$asb:function(a,b){return[b]}}
H.eu.prototype={
m:function(){var t=this.b
if(t.m()){this.sa6(this.c.$1(t.gn()))
return!0}this.sa6(null)
return!1},
gn:function(){return this.a},
sa6:function(a){this.a=a},
$ascQ:function(a,b){return[b]}}
H.br.prototype={
gj:function(a){return J.dt(this.a)},
p:function(a,b){return this.b.$1(J.kG(this.a,b))},
$asb:function(a,b){return[b]},
$asb4:function(a,b){return[b]},
$asQ:function(a,b){return[b]}}
H.dh.prototype={
gt:function(a){return new H.fT(J.bd(this.a),this.b,this.$ti)}}
H.fT.prototype={
m:function(){var t,s
for(t=this.a,s=this.b;t.m();)if(s.$1(t.gn()))return!0
return!1},
gn:function(){return this.a.gn()}}
H.c7.prototype={}
H.iq.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.ir.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.hv.prototype={
ses:function(a){this.z=a},
sew:function(a){this.ch=a}}
H.aW.prototype={
bI:function(a,b){if(!this.f.u(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.aN()},
eD:function(a){var t,s,r,q,p
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
if(q===r.c)r.by();++r.d}this.y=!1}this.aN()},
dR:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.u(a),s=0;r=this.ch,s<r.length;s+=2)if(t.u(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
eC:function(a){var t,s,r
if(this.ch==null)return
for(t=J.u(a),s=0;r=this.ch,s<r.length;s+=2)if(t.u(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.D(new P.t("removeRange"))
P.jI(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
cM:function(a,b){if(!this.r.u(0,a))return
this.db=b},
em:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.D(0,c)
return}H.d(b===1)
t=this.cx
if(t==null){t=P.iK(null,null)
this.cx=t}t.L(0,new H.hq(a,c))},
el:function(a,b){var t
if(!this.r.u(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.at()
return}H.d(b===1)
t=this.cx
if(t==null){t=P.iK(null,null)
this.cx=t}t.L(0,this.geu())},
en:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.ar(a)
if(b!=null)P.ar(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.aD(a)
s[1]=b==null?null:b.k(0)
for(r=new P.bK(t,t.r,null,null,[null]),r.c=t.e;r.m();)r.d.D(0,s)},
aa:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.L(o)
p=H.az(o)
this.en(q,p)
if(this.db){this.at()
if(this===u.globalState.e)throw o}}finally{this.cy=H.mc(r)
u.globalState.d=H.iZ(t,"$isaW")
if(t!=null)$=t.ger()
if(this.cx!=null)for(;n=this.cx,!n.gad(n);)this.cx.c9().$0()}return s},
c5:function(a){return this.b.h(0,a)},
bp:function(a,b){var t=this.b
if(t.E(0,a))throw H.e(P.c6("Registry: ports must be registered only once."))
t.i(0,a,b)},
aN:function(){var t=this.b
if(t.gj(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.at()},
at:function(){var t,s,r
t=this.cx
if(t!=null)t.O(0)
for(t=this.b,s=t.gct(t),s=s.gt(s);s.m();)s.gn().dr()
t.O(0)
this.c.O(0)
u.globalState.z.ag(0,this.a)
this.dx.O(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].D(0,t[r+1])
this.ch=null}},
ger:function(){return this.d},
ge3:function(){return this.e}}
H.hq.prototype={
$0:function(){this.a.D(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.h8.prototype={
e9:function(){var t=this.a
if(t.b===t.c)return
return t.c9()},
cb:function(){var t,s,r
t=this.e9()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.E(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gad(s)}else s=!1
else s=!1
else s=!1
if(s)H.D(P.c6("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gad(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aM(["command","close"])
r=new H.ad(!0,new P.dl(0,null,null,null,null,null,0,[null,P.o])).F(r)
s.toString
self.postMessage(r)}return!1}t.ez()
return!0},
bD:function(){if(self.window!=null)new H.h9(this).$0()
else for(;this.cb(););},
ah:function(){var t,s,r,q,p
if(!u.globalState.x)this.bD()
else try{this.bD()}catch(r){t=H.L(r)
s=H.az(r)
q=u.globalState.Q
p=P.aM(["command","error","msg",H.f(t)+"\n"+H.f(s)])
p=new H.ad(!0,P.bL(null,P.o)).F(p)
q.toString
self.postMessage(p)}}}
H.h9.prototype={
$0:function(){if(!this.a.cb())return
P.lM(C.z,this)},
$S:function(){return{func:1,v:true}}}
H.aX.prototype={
ez:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.aa(this.b)}}
H.hu.prototype={}
H.eh.prototype={
$0:function(){H.lp(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.ei.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(!this.d)this.a.$1(this.c)
else{s=this.a
if(H.bb(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.bb(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.aN()},
$S:function(){return{func:1,v:true}}}
H.h1.prototype={}
H.b8.prototype={
D:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.m_(b)
if(t.ge3()===s){s=J.aa(r)
switch(s.h(r,0)){case"pause":t.bI(s.h(r,1),s.h(r,2))
break
case"resume":t.eD(s.h(r,1))
break
case"add-ondone":t.dR(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.eC(s.h(r,1))
break
case"set-errors-fatal":t.cM(s.h(r,1),s.h(r,2))
break
case"ping":t.em(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.el(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.ag(0,s)
break}return}u.globalState.f.a.L(0,new H.aX(t,new H.hw(this,r),"receive"))},
u:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.b8){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gq:function(a){return this.b.a}}
H.hw.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dn(0,this.b)},
$S:function(){return{func:1}}}
H.bN.prototype={
D:function(a,b){var t,s,r
t=P.aM(["command","message","port",this,"msg",b])
s=new H.ad(!0,P.bL(null,P.o)).F(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
u:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bN){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gq:function(a){return C.b.cY((this.b<<16^this.a<<8)>>>0,this.c)}}
H.b6.prototype={
dr:function(){this.c=!0
this.b=null},
dn:function(a,b){if(this.c)return
this.b.$1(b)},
$islG:1}
H.fB.prototype={
da:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.L(0,new H.aX(s,new H.fC(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.bR(new H.fD(this,b),0),a)}else{H.d(a>0)
throw H.e(new P.t("Timer greater than 0."))}}}
H.fC.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.fD.prototype={
$0:function(){this.a.c=null
H.ig()
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.ai.prototype={
gq:function(a){var t=this.a
t=C.b.aK(t,0)^C.b.v(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
u:function(a,b){var t,s
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
t=J.u(a)
if(!!t.$isbt)return["buffer",a]
if(!!t.$isaN)return["typed",a]
if(!!t.$isl)return this.cI(a)
if(!!t.$islm){r=this.gcF()
q=t.gC(a)
q=H.iL(q,r,H.ae(q,"Q",0),null)
q=P.jC(q,!0,H.ae(q,"Q",0))
t=t.gct(a)
t=H.iL(t,r,H.ae(t,"Q",0),null)
return["map",q,P.jC(t,!0,H.ae(t,"Q",0))]}if(!!t.$islv)return this.cJ(a)
if(!!t.$isa)this.cr(a)
if(!!t.$islG)this.ai(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isb8)return this.cK(a)
if(!!t.$isbN)return this.cL(a)
if(!!t.$isb0){p=a.$static_name
if(p==null)this.ai(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isai)return["capability",a.a]
if(!(a instanceof P.n))this.cr(a)
return["dart",u.classIdExtractor(a),this.cH(u.classFieldsExtractor(a))]},
ai:function(a,b){throw H.e(new P.t((b==null?"Can't transmit:":b)+" "+H.f(a)))},
cr:function(a){return this.ai(a,null)},
cI:function(a){var t
H.d(typeof a!=="string")
t=this.cG(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.ai(a,"Can't serialize indexable: ")},
cG:function(a){var t,s
t=[]
C.a.sj(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.F(a[s])
return t},
cH:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.F(a[t]))
return a},
cJ:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.ai(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sj(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.F(a[t[r]])
return["js-object",t,s]},
cL:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cK:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.aV.prototype={
P:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.e(P.jg("Bad serialized message: "+H.f(a)))
switch(C.a.gei(a)){case"ref":H.d(J.E(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.d(J.E(a[0],"buffer"))
t=a[1]
C.a.l(this.b,t)
return t
case"typed":H.d(J.E(a[0],"typed"))
t=a[1]
C.a.l(this.b,t)
return t
case"fixed":H.d(J.E(a[0],"fixed"))
t=a[1]
C.a.l(this.b,t)
s=H.K(this.a9(t),[null])
s.fixed$length=Array
return s
case"extendable":H.d(J.E(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.K(this.a9(t),[null])
case"mutable":H.d(J.E(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.a9(t)
case"const":H.d(J.E(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
s=H.K(this.a9(t),[null])
s.fixed$length=Array
return s
case"map":return this.ec(a)
case"sendport":return this.ed(a)
case"raw sendport":H.d(J.E(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.eb(a)
case"function":H.d(J.E(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.d(J.E(a[0],"capability"))
return new H.ai(a[1])
case"dart":H.d(J.E(a[0],"dart"))
r=a[1]
q=a[2]
p=u.instanceFromClassId(r)
C.a.l(this.b,p)
this.a9(q)
return u.initializeEmptyInstance(r,p,q)
default:throw H.e("couldn't deserialize: "+H.f(a))}},
a9:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.P(a[t]))
return a},
ec:function(a){var t,s,r,q,p
H.d(J.E(a[0],"map"))
t=a[1]
s=a[2]
r=P.a1()
C.a.l(this.b,r)
t=J.kS(t,this.gea()).eJ(0)
for(q=J.aa(s),p=0;p<t.length;++p)r.i(0,t[p],this.P(q.h(s,p)))
return r},
ed:function(a){var t,s,r,q,p,o,n
H.d(J.E(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.c5(r)
if(o==null)return
n=new H.b8(o,s)}else n=new H.bN(t,r,s)
C.a.l(this.b,n)
return n},
eb:function(a){var t,s,r,q,p,o
H.d(J.E(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.aa(t),p=J.aa(s),o=0;o<q.gj(t);++o)r[q.h(t,o)]=this.P(p.h(s,o))
return r}}
H.f5.prototype={}
H.fH.prototype={
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
H.d4.prototype={
k:function(a){var t=this.b
if(t==null)return"NullError: "+H.f(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.en.prototype={
k:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.f(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.f(this.a)+")"}}
H.fL.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.is.prototype={
$1:function(a){if(!!J.u(a).$isb2)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.dn.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.i9.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.ia.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.ib.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.ic.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.id.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.b0.prototype={
k:function(a){return"Closure '"+H.f3(this).trim()+"'"},
$isiE:1,
geQ:function(){return this},
$D:null}
H.fv.prototype={}
H.fi.prototype={
k:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.be.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.be))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gq:function(a){var t,s
t=this.c
if(t==null)s=H.aO(this.a)
else s=typeof t!=="object"?J.ag(t):H.aO(t)
return(s^H.aO(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.f(this.d)+"' of "+H.f2(t)}}
H.fJ.prototype={
k:function(a){return this.a}}
H.dB.prototype={
k:function(a){return this.a}}
H.f9.prototype={
k:function(a){return"RuntimeError: "+H.f(this.a)}}
H.fW.prototype={
k:function(a){return C.j.a_("Assertion failed: ",P.iC(this.a))}}
H.df.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gq:function(a){return J.ag(this.a)},
u:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.df){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.ab.prototype={
gj:function(a){return this.a},
gad:function(a){return this.a===0},
gC:function(a){return new H.eq(this,[H.aA(this,0)])},
gct:function(a){return H.iL(this.gC(this),new H.em(this),H.aA(this,0),H.aA(this,1))},
E:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bv(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bv(s,b)}else return this.eo(b)},
eo:function(a){var t=this.d
if(t==null)return!1
return this.ac(this.ao(t,this.ab(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.a7(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.a7(r,b)
return s==null?null:s.b}else return this.ep(b)},
ep:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.ao(t,this.ab(a))
r=this.ac(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aH()
this.b=t}this.bn(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aH()
this.c=s}this.bn(s,b,c)}else{r=this.d
if(r==null){r=this.aH()
this.d=r}q=this.ab(b)
p=this.ao(r,q)
if(p==null)this.aJ(r,q,[this.aI(b,c)])
else{o=this.ac(p,b)
if(o>=0)p[o].b=c
else p.push(this.aI(b,c))}}},
ag:function(a,b){if(typeof b==="string")return this.bB(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bB(this.c,b)
else return this.eq(b)},
eq:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.ao(t,this.ab(a))
r=this.ac(s,a)
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
ar:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.e(new P.Y(this))
t=t.c}},
bn:function(a,b,c){var t=this.a7(a,b)
if(t==null)this.aJ(a,b,this.aI(b,c))
else t.b=c},
bB:function(a,b){var t
if(a==null)return
t=this.a7(a,b)
if(t==null)return
this.bG(t)
this.bw(a,b)
return t.b},
aI:function(a,b){var t,s
t=new H.ep(a,b,null,null,[null,null])
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
ab:function(a){return J.ag(a)&0x3ffffff},
ac:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.E(a[s].a,b))return s
return-1},
k:function(a){return P.lw(this)},
a7:function(a,b){return a[b]},
ao:function(a,b){return a[b]},
aJ:function(a,b,c){H.d(c!=null)
a[b]=c},
bw:function(a,b){delete a[b]},
bv:function(a,b){return this.a7(a,b)!=null},
aH:function(){var t=Object.create(null)
this.aJ(t,"<non-identifier-key>",t)
this.bw(t,"<non-identifier-key>")
return t},
$islm:1}
H.em.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.ep.prototype={}
H.eq.prototype={
gj:function(a){return this.a.a},
gt:function(a){var t,s
t=this.a
s=new H.er(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.er.prototype={
gn:function(){return this.d},
m:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.Y(t))
else{t=this.c
if(t==null){this.sbm(null)
return!1}else{this.sbm(t.a)
this.c=this.c.c
return!0}}},
sbm:function(a){this.d=a}}
H.i5.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.i6.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.r]}}}
H.i7.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.r]}}}
H.bt.prototype={$isbt:1}
H.aN.prototype={$isaN:1}
H.cY.prototype={
gj:function(a){return a.length},
$isl:1,
$asl:function(){},
$ism:1,
$asm:function(){}}
H.cZ.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.J(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.D(H.J(a,b))
a[b]=c}}
H.d_.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.D(H.J(a,b))
a[b]=c},
$isb:1,
$asb:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]}}
H.cX.prototype={$isb:1,
$asb:function(){return[P.P]},
$isc:1,
$asc:function(){return[P.P]},
$isiD:1}
H.eE.prototype={$isb:1,
$asb:function(){return[P.P]},
$isc:1,
$asc:function(){return[P.P]}}
H.eF.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.J(a,b))
return a[b]},
$isb:1,
$asb:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]}}
H.eG.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.J(a,b))
return a[b]},
$isb:1,
$asb:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]},
$isll:1}
H.eH.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.J(a,b))
return a[b]},
$isb:1,
$asb:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]}}
H.eI.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.J(a,b))
return a[b]},
$isb:1,
$asb:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]}}
H.eJ.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.J(a,b))
return a[b]},
$isb:1,
$asb:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]}}
H.d0.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.J(a,b))
return a[b]},
$isb:1,
$asb:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]}}
H.eK.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.J(a,b))
return a[b]},
$isb:1,
$asb:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]}}
H.bu.prototype={
$asl:function(){},
$isb:1,
$asb:function(){return[P.P]},
$asm:function(){},
$isc:1,
$asc:function(){return[P.P]}}
H.bv.prototype={
$asl:function(){},
$isb:1,
$asb:function(){return[P.o]},
$asm:function(){},
$isc:1,
$asc:function(){return[P.o]}}
H.bw.prototype={
$asl:function(){},
$asb:function(){return[P.o]},
$asm:function(){},
$asc:function(){return[P.o]}}
H.bx.prototype={
$asl:function(){},
$asb:function(){return[P.P]},
$asm:function(){},
$asc:function(){return[P.P]}}
P.fY.prototype={
$1:function(a){var t,s
H.ig()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.fX.prototype={
$1:function(a){var t,s
t=this.a
H.d(t.a==null);++u.globalState.f.b
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.fZ.prototype={
$0:function(){H.ig()
this.a.$0()},
$S:function(){return{func:1}}}
P.h_.prototype={
$0:function(){H.ig()
this.a.$0()},
$S:function(){return{func:1}}}
P.h3.prototype={}
P.hN.prototype={
e1:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.au("Future already completed"))
t.aE(b)}}
P.dk.prototype={
ex:function(a){if(this.c!==6)return!0
H.d(!0)
return this.b.b.aX(this.d,a.a)},
ek:function(a){var t,s
t=(this.c&2)!==0
if(t){H.d(t)
t=this.e!=null}else t=!1
H.d(t)
s=this.e
t=this.b.b
if(H.bb(s,{func:1,args:[P.n,P.bC]}))return t.eE(s,a.a,a.b)
else return t.aX(s,a.a)}}
P.aq.prototype={
cg:function(a,b){var t,s,r
t=$.A
if(t!==C.h){t.toString
if(b!=null)b=P.m4(b,t)}s=new P.aq(0,t,null,[null])
r=b==null?1:3
this.bo(new P.dk(null,s,r,a,b,[H.aA(this,0),null]))
return s},
cf:function(a){return this.cg(a,null)},
br:function(a){H.d(this.a<4)
H.d(a.a>=4)
this.a=a.a
this.c=a.c},
bo:function(a){var t
H.d(a.a==null)
t=this.a
if(t<=1){a.a=H.iZ(this.c,"$isdk")
this.c=a}else{if(t===2){H.d(!0)
t=this.c
if(t.a<4){t.bo(a)
return}this.br(t)}H.d(this.a>=4)
t=this.b
t.toString
P.hX(null,null,t,new P.he(this,a))}},
bA:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.d(!0)
s=this.c
if(s.a<4){s.bA(a)
return}this.br(s)}H.d(this.a>=4)
t.a=this.a8(a)
s=this.b
s.toString
P.hX(null,null,s,new P.hi(t,this))}},
bC:function(){H.d(this.a<4)
var t=this.c
this.c=null
return this.a8(t)},
a8:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aE:function(a){var t,s
H.d(this.a<4)
t=this.$ti
if(H.iU(a,"$ise8",t,"$ase8"))if(H.iU(a,"$isaq",t,null))P.jY(a,this)
else P.lT(a,this)
else{s=this.bC()
H.d(this.a<4)
this.a=4
this.c=a
P.bH(this,s)}},
al:function(a,b){var t
H.d(this.a<4)
t=this.bC()
H.d(this.a<4)
this.a=8
this.c=new P.b_(a,b)
P.bH(this,t)},
dt:function(a){return this.al(a,null)},
$ise8:1,
gaL:function(){return this.a},
gdL:function(){return this.c}}
P.he.prototype={
$0:function(){P.bH(this.a,this.b)},
$S:function(){return{func:1}}}
P.hi.prototype={
$0:function(){P.bH(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.hf.prototype={
$1:function(a){var t=this.a
H.d(t.a===1)
H.d(t.a===1)
t.a=0
t.aE(a)},
$S:function(){return{func:1,args:[,]}}}
P.hg.prototype={
$2:function(a,b){var t=this.a
H.d(t.a===1)
t.al(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.hh.prototype={
$0:function(){this.a.al(this.b,this.c)},
$S:function(){return{func:1}}}
P.hl.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.d
p=q.c
H.d((p&1)===0)
o=(p&2)===0
H.d(o)
t=null
try{H.d(o)
H.d(p===8)
t=q.b.b.ca(q.d)}catch(n){s=H.L(n)
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
p.b=q.c}else p.b=new P.b_(s,r)
p.a=!0
return}if(!!J.u(t).$ise8){if(t instanceof P.aq&&t.gaL()>=4){if(t.gaL()===8){q=t
H.d(q.gaL()===8)
p=this.b
p.b=q.gdL()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.cf(new P.hm(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.hm.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.hk.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.d((r.c&1)!==0)
this.a.b=r.b.b.aX(r.d,this.c)}catch(q){t=H.L(q)
s=H.az(q)
r=this.a
r.b=new P.b_(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.hj.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.d(q.a===8)
t=q.c
q=this.c
if(q.ex(t)){H.d((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.ek(t)
p.a=!1}}catch(o){s=H.L(o)
r=H.az(o)
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
P.di.prototype={}
P.fm.prototype={
gj:function(a){var t,s
t={}
s=new P.aq(0,$.A,null,[P.o])
t.a=0
this.ev(new P.fo(t),!0,new P.fp(t,s),s.gds())
return s}}
P.fo.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.fp.prototype={
$0:function(){this.b.aE(this.a.a)},
$S:function(){return{func:1}}}
P.fn.prototype={}
P.b_.prototype={
k:function(a){return H.f(this.a)},
$isb2:1}
P.hU.prototype={}
P.hW.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.d5()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.e(t)
r=H.e(t)
r.stack=s.k(0)
throw r},
$S:function(){return{func:1}}}
P.hz.prototype={
eF:function(a){var t,s,r
try{if(C.h===$.A){a.$0()
return}P.k2(null,null,this,a)}catch(r){t=H.L(r)
s=H.az(r)
P.hV(null,null,this,t,s)}},
eG:function(a,b){var t,s,r
try{if(C.h===$.A){a.$1(b)
return}P.k3(null,null,this,a,b)}catch(r){t=H.L(r)
s=H.az(r)
P.hV(null,null,this,t,s)}},
dX:function(a){return new P.hB(this,a)},
aO:function(a){return new P.hA(this,a)},
dY:function(a){return new P.hC(this,a)},
h:function(a,b){return},
ca:function(a){if($.A===C.h)return a.$0()
return P.k2(null,null,this,a)},
aX:function(a,b){if($.A===C.h)return a.$1(b)
return P.k3(null,null,this,a,b)},
eE:function(a,b,c){if($.A===C.h)return a.$2(b,c)
return P.m5(null,null,this,a,b,c)}}
P.hB.prototype={
$0:function(){return this.a.ca(this.b)},
$S:function(){return{func:1}}}
P.hA.prototype={
$0:function(){return this.a.eF(this.b)},
$S:function(){return{func:1}}}
P.hC.prototype={
$1:function(a){return this.a.eG(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.dl.prototype={
ab:function(a){return H.my(a)&0x3ffffff},
ac:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.hr.prototype={
gt:function(a){var t=new P.bK(this,this.r,null,null,[null])
t.c=this.e
return t},
gj:function(a){return this.a},
A:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.du(b)},
du:function(a){var t=this.d
if(t==null)return!1
return this.an(t[this.am(a)],a)>=0},
c5:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.A(0,a)?a:null
else return this.dF(a)},
dF:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.am(a)]
r=this.an(s,a)
if(r<0)return
return J.j3(s,r).gdw()},
l:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.bs(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.bs(r,b)}else return this.L(0,b)},
L:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.lX()
this.d=t}s=this.am(b)
r=t[s]
if(r==null){q=[this.aD(b)]
H.d(q!=null)
t[s]=q}else{if(this.an(r,b)>=0)return!1
r.push(this.aD(b))}return!0},
ag:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bt(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bt(this.c,b)
else return this.dG(0,b)},
dG:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.am(b)]
r=this.an(s,b)
if(r<0)return!1
this.bu(s.splice(r,1)[0])
return!0},
O:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
bs:function(a,b){var t
if(a[b]!=null)return!1
t=this.aD(b)
H.d(!0)
a[b]=t
return!0},
bt:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bu(t)
delete a[b]
return!0},
aD:function(a){var t,s
t=new P.hs(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bu:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.r=this.r+1&67108863},
am:function(a){return J.ag(a)&0x3ffffff},
an:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.E(a[s].a,b))return s
return-1},
$isb:1,
$asb:null}
P.hs.prototype={
gdw:function(){return this.a}}
P.bK.prototype={
gn:function(){return this.d},
m:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.Y(t))
else{t=this.c
if(t==null){this.sa5(null)
return!1}else{this.sa5(t.a)
this.c=this.c.b
return!0}}},
sa5:function(a){this.d=a}}
P.hp.prototype={}
P.cU.prototype={}
P.v.prototype={
gt:function(a){return new H.cV(a,this.gj(a),0,null,[H.ae(a,"v",0)])},
p:function(a,b){return this.h(a,b)},
c6:function(a,b){return new H.br(a,b,[H.ae(a,"v",0),null])},
ej:function(a,b,c){var t,s,r
t=this.gj(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gj(a))throw H.e(new P.Y(a))}return s},
k:function(a){return P.ej(a,"[","]")},
$isb:1,
$asb:null,
$isc:1,
$asc:null}
P.ev.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.f(a)
t.a=s+": "
t.a+=H.f(b)},
$S:function(){return{func:1,args:[,,]}}}
P.es.prototype={
gt:function(a){return new P.ht(this,this.c,this.d,this.b,null,this.$ti)},
gad:function(a){return this.b===this.c},
gj:function(a){return(this.c-this.b&this.a.length-1)>>>0},
p:function(a,b){var t,s
t=(this.c-this.b&this.a.length-1)>>>0
if(0>b||b>=t)H.D(P.z(b,this,"index",null,t))
s=this.a
return s[(this.b+b&s.length-1)>>>0]},
O:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
k:function(a){return P.ej(this,"{","}")},
c9:function(){var t,s,r
t=this.b
if(t===this.c)throw H.e(H.ek());++this.d
s=this.a
r=s[t]
s[t]=null
this.b=(t+1&s.length-1)>>>0
return r},
L:function(a,b){var t,s
t=this.a
s=this.c
t[s]=b
t=(s+1&t.length-1)>>>0
this.c=t
if(this.b===t)this.by();++this.d},
by:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.K(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.b9(s,0,q,t,r)
C.a.b9(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbE(s)},
d4:function(a,b){var t
H.d(!0)
t=new Array(8)
t.fixed$length=Array
this.sbE(H.K(t,[b]))},
sbE:function(a){this.a=a},
$asb:null}
P.ht.prototype={
gn:function(){return this.e},
m:function(){var t,s
t=this.a
if(this.c!==t.d)H.D(new P.Y(t))
s=this.d
if(s===this.b){this.sa5(null)
return!1}this.sa5(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sa5:function(a){this.e=a}}
P.fc.prototype={
G:function(a,b){var t
for(t=J.bd(b);t.m();)this.l(0,t.gn())},
k:function(a){return P.ej(this,"{","}")},
$isb:1,
$asb:null}
P.fb.prototype={}
P.bz.prototype={$isb:1,$asb:null,$isc:1,$asc:null}
P.ay.prototype={}
P.F.prototype={}
P.bf.prototype={
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.bf))return!1
return this.a===b.a&&this.b===b.b},
K:function(a,b){return C.b.K(this.a,b.a)},
gq:function(a){var t=this.a
return(t^C.b.aK(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.lc(H.lE(this))
s=P.c1(H.lC(this))
r=P.c1(H.ly(this))
q=P.c1(H.lz(this))
p=P.c1(H.lB(this))
o=P.c1(H.lD(this))
n=P.ld(H.lA(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isF:1,
$asF:function(){return[P.bf]}}
P.P.prototype={$isF:1,
$asF:function(){return[P.V]}}
P.aH.prototype={
V:function(a,b){return C.b.V(this.a,b.gdv())},
ax:function(a,b){return C.b.ax(this.a,b.gdv())},
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.aH))return!1
return this.a===b.a},
gq:function(a){return this.a&0x1FFFFFFF},
K:function(a,b){return C.b.K(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.dM()
s=this.a
if(s<0)return"-"+new P.aH(0-s).k(0)
r=t.$1(C.b.v(s,6e7)%60)
q=t.$1(C.b.v(s,1e6)%60)
p=new P.dL().$1(s%1e6)
return""+C.b.v(s,36e8)+":"+H.f(r)+":"+H.f(q)+"."+H.f(p)},
$isF:1,
$asF:function(){return[P.aH]}}
P.dL.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.r,args:[P.o]}}}
P.dM.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.r,args:[P.o]}}}
P.b2.prototype={}
P.bX.prototype={
k:function(a){return"Assertion failed"}}
P.d5.prototype={
k:function(a){return"Throw of null."}}
P.ah.prototype={
gaG:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaF:function(){return""},
k:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+t
q=this.gaG()+s+r
if(!this.a)return q
p=this.gaF()
o=P.iC(this.b)
return q+p+": "+H.f(o)}}
P.bA.prototype={
gaG:function(){return"RangeError"},
gaF:function(){var t,s,r
H.d(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.f(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.f(t)
else if(r>t)s=": Not in range "+H.f(t)+".."+H.f(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.f(t)}return s}}
P.ee.prototype={
gaG:function(){return"RangeError"},
gaF:function(){H.d(this.a)
if(J.kp(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.f(t)},
gj:function(a){return this.f}}
P.t.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.dg.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.au.prototype={
k:function(a){return"Bad state: "+this.a}}
P.Y.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.f(P.iC(t))+"."}}
P.da.prototype={
k:function(a){return"Stack Overflow"},
$isb2:1}
P.dF.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.hd.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.f(t)}}
P.dO.prototype={
k:function(a){return"Expando:"+H.f(this.a)},
h:function(a,b){var t,s
t=this.b
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.D(P.jh(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.jE(b,"expando$values")
return s==null?null:H.jE(s,t)}}
P.o.prototype={$isF:1,
$asF:function(){return[P.V]}}
P.Q.prototype={
av:function(a,b){return new H.dh(this,b,[H.ae(this,"Q",0)])},
gj:function(a){var t,s
H.d(!this.$isb)
t=this.gt(this)
for(s=0;t.m();)++s
return s},
gW:function(a){var t,s
t=this.gt(this)
if(!t.m())throw H.e(H.ek())
s=t.gn()
if(t.m())throw H.e(H.lu())
return s},
p:function(a,b){var t,s,r
if(b<0)H.D(P.aP(b,0,null,"index",null))
for(t=this.gt(this),s=0;t.m();){r=t.gn()
if(b===s)return r;++s}throw H.e(P.z(b,this,"index",null,s))},
k:function(a){return P.ls(this,"(",")")}}
P.cQ.prototype={}
P.c.prototype={$isb:1,$asb:null,$asc:null}
P.at.prototype={}
P.b5.prototype={
gq:function(a){return P.n.prototype.gq.call(this,this)},
k:function(a){return"null"}}
P.V.prototype={$isF:1,
$asF:function(){return[P.V]}}
P.n.prototype={constructor:P.n,$isn:1,
u:function(a,b){return this===b},
gq:function(a){return H.aO(this)},
k:function(a){return H.f2(this)},
toString:function(){return this.k(this)}}
P.bC.prototype={}
P.r.prototype={$isF:1,
$asF:function(){return[P.r]}}
P.bD.prototype={
gj:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
gX:function(){return this.a}}
W.j.prototype={}
W.dv.prototype={
k:function(a){return String(a)},
$isa:1}
W.dw.prototype={
k:function(a){return String(a)},
$isa:1}
W.X.prototype={$isn:1}
W.dz.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]},
$ism:1,
$asm:function(){return[W.X]},
$isc:1,
$asc:function(){return[W.X]}}
W.bY.prototype={}
W.aF.prototype={$isa:1,$isaF:1}
W.bZ.prototype={
b1:function(a,b,c){if(c!=null)return this.dA(a,b,P.mf(c,null))
return this.dB(a,b)},
cC:function(a,b){return this.b1(a,b,null)},
dA:function(a,b,c){return a.getContext(b,c)},
dB:function(a,b){return a.getContext(b)}}
W.c_.prototype={
aq:function(a,b,c){return a.addColorStop(b,c)}}
W.c0.prototype={
bU:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
eh:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
aw:function(a){return P.i_(a.getContextAttributes())}}
W.aG.prototype={$isa:1,
gj:function(a){return a.length}}
W.dD.prototype={$isa:1}
W.x.prototype={$isn:1}
W.b1.prototype={
bq:function(a,b){var t,s
t=$.$get$jo()
s=t[b]
if(typeof s==="string")return s
s=this.dO(a,b)
t[b]=s
return s},
dO:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.le()+b
if(t in a)return t
return b},
gj:function(a){return a.length}}
W.dE.prototype={}
W.dG.prototype={
h:function(a,b){return a[b]},
gj:function(a){return a.length}}
W.c2.prototype={}
W.bg.prototype={
dS:function(a,b){return a.adoptNode(b)},
cD:function(a,b){return a.getElementById(b)},
eA:function(a,b){return a.querySelector(b)}}
W.c3.prototype={$isa:1}
W.dH.prototype={
k:function(a){return String(a)}}
W.c4.prototype={
e6:function(a,b){return a.createHTMLDocument(b)}}
W.c5.prototype={
k:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gU(a))+" x "+H.f(this.gT(a))},
u:function(a,b){var t
if(b==null)return!1
t=J.u(b)
if(!t.$isH)return!1
return a.left===t.gaT(b)&&a.top===t.gaZ(b)&&this.gU(a)===t.gU(b)&&this.gT(a)===t.gT(b)},
gq:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gU(a)
q=this.gT(a)
return W.k0(W.aY(W.aY(W.aY(W.aY(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gT:function(a){return a.height},
gaT:function(a){return a.left},
gaZ:function(a){return a.top},
gU:function(a){return a.width},
$isH:1,
$asH:function(){}}
W.dI.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[P.r]},
$isb:1,
$asb:function(){return[P.r]},
$ism:1,
$asm:function(){return[P.r]},
$isc:1,
$asc:function(){return[P.r]}}
W.dJ.prototype={
gj:function(a){return a.length}}
W.Z.prototype={
gdV:function(a){return new W.h7(a)},
k:function(a){return a.localName},
H:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.jw
if(t==null){t=H.K([],[W.d2])
s=new W.d3(t)
C.a.l(t,W.jZ(null))
C.a.l(t,W.k1())
$.jw=s
d=s}else d=t
t=$.jv
if(t==null){t=new W.dp(d)
$.jv=t
c=t}else{t.a=d
c=t}}if($.as==null){t=document
s=t.implementation
s=(s&&C.L).e6(s,"")
$.as=s
$.iB=s.createRange()
s=$.as
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.as.head;(t&&C.M).J(t,r)}t=$.as
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.iZ(s,"$isaF")}t=$.as
if(!!this.$isaF)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.as.body;(t&&C.p).J(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.A(C.W,a.tagName)){t=$.iB;(t&&C.F).cE(t,q)
t=$.iB
p=(t&&C.F).e4(t,b)}else{q.innerHTML=b
p=$.as.createDocumentFragment()
for(t=J.k(p);s=q.firstChild,s!=null;)t.J(p,s)}t=$.as.body
if(q==null?t!=null:q!==t)J.kU(q)
c.b8(p)
C.t.dS(document,p)
return p},
e5:function(a,b,c){return this.H(a,b,c,null)},
cO:function(a,b,c,d){a.textContent=null
this.J(a,this.H(a,b,c,d))},
cN:function(a,b){return this.cO(a,b,null,null)},
a0:function(a,b){return a.getAttribute(b)},
dH:function(a,b){return a.removeAttribute(b)},
$isa:1,
$isn:1,
$isZ:1,
$ish:1,
$isp:1,
geI:function(a){return a.tagName}}
W.hY.prototype={
$1:function(a){return!!J.u(a).$isZ},
$S:function(){return{func:1,args:[,]}}}
W.i.prototype={}
W.h.prototype={
dq:function(a,b,c,d){return a.addEventListener(b,H.bR(c,1),!1)},
$isn:1,
$ish:1}
W.a_.prototype={$isn:1}
W.e4.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]},
$ism:1,
$asm:function(){return[W.a_]},
$isc:1,
$asc:function(){return[W.a_]}}
W.e5.prototype={
gj:function(a){return a.length}}
W.e7.prototype={
gj:function(a){return a.length}}
W.a0.prototype={$isn:1}
W.c9.prototype={}
W.ea.prototype={
gj:function(a){return a.length}}
W.bo.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]},
$ism:1,
$asm:function(){return[W.p]},
$isc:1,
$asc:function(){return[W.p]}}
W.ca.prototype={}
W.eb.prototype={
D:function(a,b){return a.send(b)}}
W.bp.prototype={}
W.ef.prototype={$isa:1,$isZ:1}
W.aL.prototype={$isn:1,$isaL:1}
W.et.prototype={
k:function(a){return String(a)}}
W.ez.prototype={
gj:function(a){return a.length}}
W.eB.prototype={
eR:function(a,b,c){return a.send(b,c)},
D:function(a,b){return a.send(b)}}
W.bs.prototype={}
W.a2.prototype={$isn:1}
W.eC.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]},
$ism:1,
$asm:function(){return[W.a2]},
$isc:1,
$asc:function(){return[W.a2]}}
W.I.prototype={$isn:1,$isI:1}
W.eL.prototype={$isa:1}
W.N.prototype={
gW:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.e(new P.au("No elements"))
if(s>1)throw H.e(new P.au("More than one element"))
return t.firstChild},
G:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.k(s),p=0;p<r;++p)q.J(s,t.firstChild)
return},
i:function(a,b,c){var t=this.a
J.kr(t,c,C.D.h(t.childNodes,b))},
gt:function(a){var t=this.a.childNodes
return new W.c8(t,t.length,-1,null,[H.ae(t,"y",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){return C.D.h(this.a.childNodes,b)},
$asb:function(){return[W.p]},
$ascU:function(){return[W.p]},
$asc:function(){return[W.p]},
$asbz:function(){return[W.p]}}
W.p.prototype={
eB:function(a){var t=a.parentNode
if(t!=null)J.bc(t,a)},
k:function(a){var t=a.nodeValue
return t==null?this.cU(a):t},
J:function(a,b){return a.appendChild(b)},
dI:function(a,b){return a.removeChild(b)},
dJ:function(a,b,c){return a.replaceChild(b,c)},
$isn:1,
$ish:1,
$isp:1,
gaV:function(a){return a.previousSibling}}
W.d1.prototype={
aW:function(a){return a.previousNode()}}
W.by.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]},
$ism:1,
$asm:function(){return[W.p]},
$isc:1,
$asc:function(){return[W.p]}}
W.eU.prototype={$isa:1}
W.eX.prototype={
gj:function(a){return a.length}}
W.a3.prototype={$isn:1,
gj:function(a){return a.length}}
W.eZ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]},
$ism:1,
$asm:function(){return[W.a3]},
$isc:1,
$asc:function(){return[W.a3]}}
W.f1.prototype={
D:function(a,b){return a.send(b)}}
W.d6.prototype={
e4:function(a,b){return a.createContextualFragment(b)},
cE:function(a,b){return a.selectNodeContents(b)}}
W.d7.prototype={
D:function(a,b){return a.send(b)}}
W.fa.prototype={
gj:function(a){return a.length}}
W.fd.prototype={$isa:1}
W.a4.prototype={$isn:1,$ish:1}
W.fe.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]},
$ism:1,
$asm:function(){return[W.a4]},
$isc:1,
$asc:function(){return[W.a4]}}
W.a5.prototype={$isn:1}
W.fg.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]},
$ism:1,
$asm:function(){return[W.a5]},
$isc:1,
$asc:function(){return[W.a5]}}
W.a6.prototype={$isn:1,
gj:function(a){return a.length}}
W.fl.prototype={
h:function(a,b){return this.bx(a,b)},
ar:function(a,b){var t,s
for(t=0;!0;++t){s=this.dE(a,t)
if(s==null)return
b.$2(s,this.bx(a,s))}},
gj:function(a){return a.length},
bx:function(a,b){return a.getItem(b)},
dE:function(a,b){return a.key(b)}}
W.R.prototype={$isn:1}
W.db.prototype={
H:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aA(a,b,c,d)
t=W.lf("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.N(s).G(0,new W.N(t))
return s}}
W.ft.prototype={
H:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aA(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.K.H(t.createElement("table"),b,c,d)
t.toString
t=new W.N(t)
r=t.gW(t)
r.toString
t=new W.N(r)
q=t.gW(t)
s.toString
q.toString
new W.N(s).G(0,new W.N(q))
return s}}
W.fu.prototype={
H:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aA(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.K.H(t.createElement("table"),b,c,d)
t.toString
t=new W.N(t)
r=t.gW(t)
s.toString
r.toString
new W.N(s).G(0,new W.N(r))
return s}}
W.bE.prototype={$isbE:1}
W.a7.prototype={$isn:1,$ish:1}
W.S.prototype={$isn:1,$ish:1}
W.fx.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.S]},
$isb:1,
$asb:function(){return[W.S]},
$ism:1,
$asm:function(){return[W.S]},
$isc:1,
$asc:function(){return[W.S]}}
W.fy.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]},
$ism:1,
$asm:function(){return[W.a7]},
$isc:1,
$asc:function(){return[W.a7]}}
W.fA.prototype={
gj:function(a){return a.length}}
W.a8.prototype={$isn:1}
W.aR.prototype={$isn:1,$isaR:1}
W.fE.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]},
$ism:1,
$asm:function(){return[W.a8]},
$isc:1,
$asc:function(){return[W.a8]}}
W.fF.prototype={
gj:function(a){return a.length}}
W.av.prototype={}
W.de.prototype={
aW:function(a){return a.previousNode()}}
W.aw.prototype={}
W.fM.prototype={
k:function(a){return String(a)},
$isa:1}
W.fO.prototype={
gj:function(a){return a.length}}
W.fR.prototype={
gj:function(a){return a.length}}
W.fS.prototype={
D:function(a,b){return a.send(b)}}
W.aT.prototype={
ge8:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(new P.t("deltaY is not supported"))},
$isn:1,
$isI:1,
$isaT:1}
W.bG.prototype={
gdU:function(a){var t,s
t=P.V
s=new P.aq(0,$.A,null,[t])
this.dz(a)
this.dK(a,W.k5(new W.fU(new P.hN(s,[t]))))
return s},
dK:function(a,b){return a.requestAnimationFrame(H.bR(b,1))},
dz:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isa:1}
W.fU.prototype={
$1:function(a){this.a.e1(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.fV.prototype={$isa:1}
W.aU.prototype={$isa:1}
W.h2.prototype={
k:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
u:function(a,b){var t,s,r
if(b==null)return!1
t=J.u(b)
if(!t.$isH)return!1
s=a.left
r=t.gaT(b)
if(s==null?r==null:s===r){s=a.top
r=t.gaZ(b)
if(s==null?r==null:s===r){s=a.width
r=t.gU(b)
if(s==null?r==null:s===r){s=a.height
t=t.gT(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gq:function(a){var t,s,r,q
t=J.ag(a.left)
s=J.ag(a.top)
r=J.ag(a.width)
q=J.ag(a.height)
return W.k0(W.aY(W.aY(W.aY(W.aY(0,t),s),r),q))},
$isH:1,
$asH:function(){},
gT:function(a){return a.height},
gaT:function(a){return a.left},
gaZ:function(a){return a.top},
gU:function(a){return a.width}}
W.dj.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[P.H]},
$isb:1,
$asb:function(){return[P.H]},
$ism:1,
$asm:function(){return[P.H]},
$isc:1,
$asc:function(){return[P.H]}}
W.h4.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.x]},
$isb:1,
$asb:function(){return[W.x]},
$ism:1,
$asm:function(){return[W.x]},
$isc:1,
$asc:function(){return[W.x]}}
W.h5.prototype={$isa:1}
W.h6.prototype={
gT:function(a){return a.height},
gU:function(a){return a.width}}
W.hn.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]},
$ism:1,
$asm:function(){return[W.a0]},
$isc:1,
$asc:function(){return[W.a0]}}
W.ho.prototype={$isa:1}
W.dm.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]},
$ism:1,
$asm:function(){return[W.p]},
$isc:1,
$asc:function(){return[W.p]}}
W.hH.prototype={$isa:1}
W.hK.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]},
$ism:1,
$asm:function(){return[W.a6]},
$isc:1,
$asc:function(){return[W.a6]}}
W.hL.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.R]},
$isb:1,
$asb:function(){return[W.R]},
$ism:1,
$asm:function(){return[W.R]},
$isc:1,
$asc:function(){return[W.R]}}
W.hS.prototype={$isa:1}
W.hT.prototype={$isa:1}
W.h0.prototype={
ar:function(a,b){var t,s,r,q,p,o
for(t=this.gC(this),s=t.length,r=this.a,q=J.k(r),p=0;p<t.length;t.length===s||(0,H.W)(t),++p){o=t[p]
b.$2(o,q.a0(r,o))}},
gC:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.K([],[P.r])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.l(s,p.name)}return s},
gdC:function(){return this.a}}
W.h7.prototype={
h:function(a,b){return J.iy(this.a,b)},
gj:function(a){return this.gC(this).length}}
W.ha.prototype={
ev:function(a,b,c,d){return W.ap(this.a,this.b,a,!1,H.aA(this,0))}}
W.iP.prototype={}
W.hb.prototype={
dQ:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.kq(r,this.c,t,!1)}},
di:function(a,b,c,d,e){this.dQ()}}
W.hc.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.bJ.prototype={
Y:function(a){return $.$get$k_().A(0,W.bh(a))},
N:function(a,b,c){var t,s,r
t=W.bh(a)
s=$.$get$iQ()
r=s.h(0,H.f(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
dj:function(a){var t,s
t=$.$get$iQ()
if(t.gad(t)){for(s=0;s<262;++s)t.i(0,C.V[s],W.mn())
for(s=0;s<12;++s)t.i(0,C.v[s],W.mo())}}}
W.y.prototype={
gt:function(a){return new W.c8(a,this.gj(a),-1,null,[H.ae(a,"y",0)])},
$isb:1,
$asb:null,
$isc:1,
$asc:null}
W.d3.prototype={
Y:function(a){return C.a.bJ(this.a,new W.eN(a))},
N:function(a,b,c){return C.a.bJ(this.a,new W.eM(a,b,c))}}
W.eN.prototype={
$1:function(a){return a.Y(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.eM.prototype={
$1:function(a){return a.N(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.bM.prototype={
Y:function(a){return this.a.A(0,W.bh(a))},
N:function(a,b,c){var t,s
t=W.bh(a)
s=this.c
if(s.A(0,H.f(t)+"::"+b))return this.d.dT(c)
else if(s.A(0,"*::"+b))return this.d.dT(c)
else{s=this.b
if(s.A(0,H.f(t)+"::"+b))return!0
else if(s.A(0,"*::"+b))return!0
else if(s.A(0,H.f(t)+"::*"))return!0
else if(s.A(0,"*::*"))return!0}return!1},
dm:function(a,b,c,d){var t,s,r
this.a.G(0,c)
t=b.av(0,new W.hI())
s=b.av(0,new W.hJ())
this.b.G(0,t)
r=this.c
r.G(0,C.X)
r.G(0,s)}}
W.hI.prototype={
$1:function(a){return!C.a.A(C.v,a)},
$S:function(){return{func:1,args:[,]}}}
W.hJ.prototype={
$1:function(a){return C.a.A(C.v,a)},
$S:function(){return{func:1,args:[,]}}}
W.hO.prototype={
N:function(a,b,c){if(this.cX(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.iy(a,"template")==="")return this.e.A(0,b)
return!1}}
W.hP.prototype={
$1:function(a){return"TEMPLATE::"+H.f(a)},
$S:function(){return{func:1,args:[,]}}}
W.hM.prototype={
Y:function(a){var t=J.u(a)
if(!!t.$isbB)return!1
t=!!t.$isB
if(t&&W.bh(a)==="foreignObject")return!1
if(t)return!0
return!1},
N:function(a,b,c){if(b==="is"||C.j.cQ(b,"on"))return!1
return this.Y(a)}}
W.c8.prototype={
m:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbz(J.j3(this.a,t))
this.c=t
return!0}this.sbz(null)
this.c=s
return!1},
gn:function(){return this.d},
sbz:function(a){this.d=a}}
W.d2.prototype={}
W.hG.prototype={}
W.dp.prototype={
b8:function(a){new W.hQ(this).$2(a,null)},
ap:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)J.bc(t,a)}else J.bc(b,a)},
dN:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.kK(a)
r=J.iy(s.gdC(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.L(n)}p="element unprintable"
try{p=J.aD(a)}catch(n){H.L(n)}try{o=W.bh(a)
this.dM(a,b,t,p,o,s,r)}catch(n){if(H.L(n) instanceof P.ah)throw n
else{this.ap(a,b)
window
m="Removing corrupted element "+H.f(p)
if(typeof console!="undefined")console.warn(m)}}},
dM:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.ap(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.Y(a)){this.ap(a,b)
window
t="Removing disallowed element <"+H.f(e)+"> from "+J.aD(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.N(a,"is",g)){this.ap(a,b)
window
t="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gC(f)
s=H.K(t.slice(0),[H.aA(t,0)])
for(r=f.gC(f).length-1,t=f.a,q=J.k(t);r>=0;--r){p=s[r]
if(!this.a.N(a,J.kZ(p),q.a0(t,p))){window
o="Removing disallowed attribute <"+H.f(e)+" "+p+'="'+H.f(q.a0(t,p))+'">'
if(typeof console!="undefined")console.warn(o)
q.a0(t,p)
q.dH(t,p)}}if(!!J.u(a).$isbE)this.b8(a.content)}}
W.hQ.prototype={
$2:function(a,b){var t,s,r,q
switch(a.nodeType){case 1:this.a.dN(a,b)
break
case 8:case 11:case 3:case 4:break
default:if(b==null){r=a.parentNode
if(r!=null)J.bc(r,a)}else J.bc(b,a)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.kL(t)}catch(q){H.L(q)
r=t
J.bc(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.p,W.p]}}}
W.bi.prototype={$isb:1,
$asb:function(){return[W.a7]},
$isc:1,
$asc:function(){return[W.a7]}}
W.bj.prototype={$isb:1,
$asb:function(){return[W.a4]},
$isc:1,
$asc:function(){return[W.a4]}}
W.bk.prototype={$isb:1,
$asb:function(){return[W.X]},
$isc:1,
$asc:function(){return[W.X]}}
W.bl.prototype={$isb:1,
$asb:function(){return[W.a7]},
$isc:1,
$asc:function(){return[W.a7]}}
W.bm.prototype={$isb:1,
$asb:function(){return[W.a4]},
$isc:1,
$asc:function(){return[W.a4]}}
W.bn.prototype={$isb:1,
$asb:function(){return[W.X]},
$isc:1,
$asc:function(){return[W.X]}}
W.cb.prototype={}
W.cv.prototype={$isb:1,
$asb:function(){return[W.a8]},
$isc:1,
$asc:function(){return[W.a8]}}
W.ch.prototype={$isb:1,
$asb:function(){return[W.a3]},
$isc:1,
$asc:function(){return[W.a3]}}
W.co.prototype={$isb:1,
$asb:function(){return[W.p]},
$isc:1,
$asc:function(){return[W.p]}}
W.cp.prototype={$isb:1,
$asb:function(){return[W.p]},
$isc:1,
$asc:function(){return[W.p]}}
W.cq.prototype={$isb:1,
$asb:function(){return[W.R]},
$isc:1,
$asc:function(){return[W.R]}}
W.cr.prototype={$isb:1,
$asb:function(){return[W.a6]},
$isc:1,
$asc:function(){return[W.a6]}}
W.cs.prototype={$isb:1,
$asb:function(){return[W.a0]},
$isc:1,
$asc:function(){return[W.a0]}}
W.ct.prototype={$isb:1,
$asb:function(){return[W.x]},
$isc:1,
$asc:function(){return[W.x]}}
W.cu.prototype={$isb:1,
$asb:function(){return[P.H]},
$isc:1,
$asc:function(){return[P.H]}}
W.cf.prototype={$isb:1,
$asb:function(){return[W.S]},
$isc:1,
$asc:function(){return[W.S]}}
W.cg.prototype={$isb:1,
$asb:function(){return[W.a5]},
$isc:1,
$asc:function(){return[W.a5]}}
W.ci.prototype={$isb:1,
$asb:function(){return[W.a2]},
$isc:1,
$asc:function(){return[W.a2]}}
W.ck.prototype={$isb:1,
$asb:function(){return[W.p]},
$isc:1,
$asc:function(){return[W.p]}}
W.cl.prototype={$isb:1,
$asb:function(){return[W.a_]},
$isc:1,
$asc:function(){return[W.a_]}}
W.cm.prototype={$isb:1,
$asb:function(){return[P.r]},
$isc:1,
$asc:function(){return[P.r]}}
W.cw.prototype={$isb:1,
$asb:function(){return[P.H]},
$isc:1,
$asc:function(){return[P.H]}}
W.cy.prototype={$isb:1,
$asb:function(){return[W.a3]},
$isc:1,
$asc:function(){return[W.a3]}}
W.cI.prototype={$isb:1,
$asb:function(){return[W.p]},
$isc:1,
$asc:function(){return[W.p]}}
W.cJ.prototype={$isb:1,
$asb:function(){return[W.a2]},
$isc:1,
$asc:function(){return[W.a2]}}
W.cH.prototype={$isb:1,
$asb:function(){return[W.p]},
$isc:1,
$asc:function(){return[W.p]}}
W.cM.prototype={$isb:1,
$asb:function(){return[W.p]},
$isc:1,
$asc:function(){return[W.p]}}
W.cN.prototype={$isb:1,
$asb:function(){return[W.a_]},
$isc:1,
$asc:function(){return[W.a_]}}
W.cO.prototype={$isb:1,
$asb:function(){return[W.a0]},
$isc:1,
$asc:function(){return[W.a0]}}
W.cP.prototype={$isb:1,
$asb:function(){return[P.r]},
$isc:1,
$asc:function(){return[P.r]}}
W.cz.prototype={$isb:1,
$asb:function(){return[W.S]},
$isc:1,
$asc:function(){return[W.S]}}
W.cB.prototype={$isb:1,
$asb:function(){return[W.a5]},
$isc:1,
$asc:function(){return[W.a5]}}
W.cD.prototype={$isb:1,
$asb:function(){return[W.x]},
$isc:1,
$asc:function(){return[W.x]}}
W.cF.prototype={$isb:1,
$asb:function(){return[W.R]},
$isc:1,
$asc:function(){return[W.R]}}
W.cK.prototype={$isb:1,
$asb:function(){return[W.a8]},
$isc:1,
$asc:function(){return[W.a8]}}
W.cL.prototype={$isb:1,
$asb:function(){return[W.a6]},
$isc:1,
$asc:function(){return[W.a6]}}
P.hZ.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.r,,]}}}
P.hx.prototype={
M:function(){var t,s,r,q,p,o
t=this.a
s=4294901760*t
r=(s&4294967295)>>>0
q=55905*t
p=(q&4294967295)>>>0
o=p+r+this.b
t=(o&4294967295)>>>0
this.a=t
this.b=(C.b.v(q-p+(s-r)+(o-t),4294967296)&4294967295)>>>0
H.d(!0)
H.d(this.b<4294967296)},
c7:function(a){var t,s,r
if(a<=0||a>4294967296)throw H.e(P.lF("max must be in range 0 < max \u2264 2^32, was "+a))
t=a-1
if((a&t)>>>0===0){this.M()
return(this.a&t)>>>0}do{this.M()
s=this.a
r=s%a}while(s-r+a>=4294967296)
return r},
aU:function(){this.M()
var t=this.a
this.M()
return((t&67108863)*134217728+(this.a&134217727))/9007199254740992},
dl:function(a){var t,s,r,q,p,o,n
do{t=(a&4294967295)>>>0
a=C.b.v(a-t,4294967296)
s=(a&4294967295)>>>0
a=C.b.v(a-s,4294967296)
r=((~t&4294967295)>>>0)+(t<<21>>>0)
q=(r&4294967295)>>>0
s=(~s>>>0)+((s<<21|t>>>11)>>>0)+C.b.v(r-q,4294967296)&4294967295
r=((q^(q>>>24|s<<8))>>>0)*265
t=(r&4294967295)>>>0
s=((s^s>>>24)>>>0)*265+C.b.v(r-t,4294967296)&4294967295
r=((t^(t>>>14|s<<18))>>>0)*21
t=(r&4294967295)>>>0
s=((s^s>>>14)>>>0)*21+C.b.v(r-t,4294967296)&4294967295
t=(t^(t>>>28|s<<4))>>>0
s=(s^s>>>28)>>>0
r=(t<<31>>>0)+t
q=(r&4294967295)>>>0
p=C.b.v(r-q,4294967296)
r=this.a*1037
o=(r&4294967295)>>>0
this.a=o
n=(this.b*1037+C.b.v(r-o,4294967296)&4294967295)>>>0
this.b=n
o=(o^q)>>>0
this.a=o
p=(n^s+((s<<31|t>>>1)>>>0)+p&4294967295)>>>0
this.b=p}while(a!==0)
if(p===0&&o===0)this.a=23063
this.M()
this.M()
this.M()
this.M()}}
P.hy.prototype={}
P.H.prototype={$asH:null}
P.du.prototype={$isa:1}
P.aE.prototype={$isa:1}
P.dP.prototype={$isa:1}
P.dQ.prototype={$isa:1}
P.dR.prototype={$isa:1}
P.dS.prototype={$isa:1}
P.dT.prototype={$isa:1}
P.dU.prototype={$isa:1}
P.dV.prototype={$isa:1}
P.dW.prototype={$isa:1}
P.dX.prototype={$isa:1}
P.dY.prototype={$isa:1}
P.dZ.prototype={$isa:1}
P.e_.prototype={$isa:1}
P.e0.prototype={$isa:1}
P.e1.prototype={$isa:1}
P.e2.prototype={$isa:1}
P.e3.prototype={$isa:1}
P.e6.prototype={$isa:1}
P.G.prototype={$isa:1}
P.ec.prototype={$isa:1}
P.aj.prototype={$isn:1}
P.eo.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return this.R(a,b)},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
R:function(a,b){return a.getItem(b)},
$isb:1,
$asb:function(){return[P.aj]},
$isc:1,
$asc:function(){return[P.aj]}}
P.ew.prototype={$isa:1}
P.ex.prototype={$isa:1}
P.al.prototype={$isn:1}
P.eO.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return this.R(a,b)},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
R:function(a,b){return a.getItem(b)},
$isb:1,
$asb:function(){return[P.al]},
$isc:1,
$asc:function(){return[P.al]}}
P.eV.prototype={$isa:1}
P.f_.prototype={
gj:function(a){return a.length}}
P.bB.prototype={$isa:1,$isbB:1}
P.fq.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return this.R(a,b)},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
R:function(a,b){return a.getItem(b)},
$isb:1,
$asb:function(){return[P.r]},
$isc:1,
$asc:function(){return[P.r]}}
P.B.prototype={
H:function(a,b,c,d){var t,s,r,q,p,o
t=H.K([],[W.d2])
C.a.l(t,W.jZ(null))
C.a.l(t,W.k1())
C.a.l(t,new W.hM())
c=new W.dp(new W.d3(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.p).e5(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.N(q)
o=t.gW(t)
for(t=J.k(p);r=o.firstChild,r!=null;)t.J(p,r)
return p},
$isa:1,
$isB:1}
P.fr.prototype={$isa:1}
P.fs.prototype={$isa:1}
P.aQ.prototype={}
P.fw.prototype={$isa:1}
P.am.prototype={$isn:1}
P.fG.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return this.R(a,b)},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
R:function(a,b){return a.getItem(b)},
$isb:1,
$asb:function(){return[P.am]},
$isc:1,
$asc:function(){return[P.am]}}
P.fN.prototype={$isa:1}
P.fP.prototype={$isa:1}
P.fQ.prototype={$isa:1}
P.bI.prototype={$isa:1}
P.hD.prototype={$isa:1}
P.hE.prototype={$isa:1}
P.hF.prototype={$isa:1}
P.ce.prototype={$isb:1,
$asb:function(){return[P.aj]},
$isc:1,
$asc:function(){return[P.aj]}}
P.cc.prototype={$isb:1,
$asb:function(){return[P.r]},
$isc:1,
$asc:function(){return[P.r]}}
P.cj.prototype={$isb:1,
$asb:function(){return[P.al]},
$isc:1,
$asc:function(){return[P.al]}}
P.cn.prototype={$isb:1,
$asb:function(){return[P.am]},
$isc:1,
$asc:function(){return[P.am]}}
P.cx.prototype={$isb:1,
$asb:function(){return[P.aj]},
$isc:1,
$asc:function(){return[P.aj]}}
P.cG.prototype={$isb:1,
$asb:function(){return[P.al]},
$isc:1,
$asc:function(){return[P.al]}}
P.cC.prototype={$isb:1,
$asb:function(){return[P.am]},
$isc:1,
$asc:function(){return[P.am]}}
P.cE.prototype={$isb:1,
$asb:function(){return[P.r]},
$isc:1,
$asc:function(){return[P.r]}}
P.dy.prototype={
gj:function(a){return a.length}}
P.f7.prototype={
bH:function(a,b){return a.activeTexture(b)},
bK:function(a,b,c){return a.attachShader(b,c)},
bL:function(a,b,c){return a.bindBuffer(b,c)},
bM:function(a,b,c){return a.bindTexture(b,c)},
bN:function(a,b){return a.blendEquation(b)},
bO:function(a,b,c){return a.blendFunc(b,c)},
bP:function(a,b,c,d){return a.bufferData(b,c,d)},
bQ:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bR:function(a,b){return a.compileShader(b)},
bS:function(a){return a.createBuffer()},
bT:function(a){return a.createProgram()},
bV:function(a,b){return a.createShader(b)},
bW:function(a){return a.createTexture()},
bY:function(a,b){return a.depthMask(b)},
bZ:function(a,b){return a.disable(b)},
c_:function(a,b,c,d){return a.drawArrays(b,c,d)},
c0:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c1:function(a,b){return a.enable(b)},
c2:function(a,b){return a.enableVertexAttribArray(b)},
aw:function(a){return P.i_(a.getContextAttributes())},
b2:function(a){return a.getError()},
b3:function(a,b){return a.getProgramInfoLog(b)},
b4:function(a,b,c){return a.getProgramParameter(b,c)},
b5:function(a,b){return a.getShaderInfoLog(b)},
b6:function(a,b,c){return a.getShaderParameter(b,c)},
b7:function(a,b,c){return a.getUniformLocation(b,c)},
c4:function(a,b){return a.linkProgram(b)},
c8:function(a,b,c){return a.pixelStorei(b,c)},
ba:function(a,b,c){return a.shaderSource(b,c)},
bc:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aY:function(a,b,c,d,e,f,g,h,i,j){this.aM(a,b,c,d,e,f,g)
return},
cc:function(a,b,c,d,e,f,g){return this.aY(a,b,c,d,e,f,g,null,null,null)},
aM:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cd:function(a,b,c,d){return a.texParameterf(b,c,d)},
ce:function(a,b,c,d){return a.texParameteri(b,c,d)},
ci:function(a,b,c){return a.uniform1f(b,c)},
cj:function(a,b,c){return a.uniform1fv(b,c)},
ck:function(a,b,c){return a.uniform1i(b,c)},
cl:function(a,b,c){return a.uniform1iv(b,c)},
cm:function(a,b,c){return a.uniform2fv(b,c)},
cn:function(a,b,c){return a.uniform3fv(b,c)},
co:function(a,b,c){return a.uniform4fv(b,c)},
cp:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cq:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cs:function(a,b){return a.useProgram(b)},
cu:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)}}
P.f8.prototype={
dW:function(a,b){return a.beginTransformFeedback(b)},
dZ:function(a,b){return a.bindVertexArray(b)},
e7:function(a){return a.createVertexArray()},
ee:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
ef:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
eg:function(a){return a.endTransformFeedback()},
eN:function(a,b,c,d){this.dP(a,b,c,d)
return},
dP:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
eO:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bH:function(a,b){return a.activeTexture(b)},
bK:function(a,b,c){return a.attachShader(b,c)},
bL:function(a,b,c){return a.bindBuffer(b,c)},
bM:function(a,b,c){return a.bindTexture(b,c)},
bN:function(a,b){return a.blendEquation(b)},
bO:function(a,b,c){return a.blendFunc(b,c)},
bP:function(a,b,c,d){return a.bufferData(b,c,d)},
bQ:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bR:function(a,b){return a.compileShader(b)},
bS:function(a){return a.createBuffer()},
bT:function(a){return a.createProgram()},
bV:function(a,b){return a.createShader(b)},
bW:function(a){return a.createTexture()},
bY:function(a,b){return a.depthMask(b)},
bZ:function(a,b){return a.disable(b)},
c_:function(a,b,c,d){return a.drawArrays(b,c,d)},
c0:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c1:function(a,b){return a.enable(b)},
c2:function(a,b){return a.enableVertexAttribArray(b)},
aw:function(a){return P.i_(a.getContextAttributes())},
b2:function(a){return a.getError()},
b3:function(a,b){return a.getProgramInfoLog(b)},
b4:function(a,b,c){return a.getProgramParameter(b,c)},
b5:function(a,b){return a.getShaderInfoLog(b)},
b6:function(a,b,c){return a.getShaderParameter(b,c)},
b7:function(a,b,c){return a.getUniformLocation(b,c)},
c4:function(a,b){return a.linkProgram(b)},
c8:function(a,b,c){return a.pixelStorei(b,c)},
ba:function(a,b,c){return a.shaderSource(b,c)},
bc:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aY:function(a,b,c,d,e,f,g,h,i,j){this.aM(a,b,c,d,e,f,g)
return},
cc:function(a,b,c,d,e,f,g){return this.aY(a,b,c,d,e,f,g,null,null,null)},
aM:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cd:function(a,b,c,d){return a.texParameterf(b,c,d)},
ce:function(a,b,c,d){return a.texParameteri(b,c,d)},
ci:function(a,b,c){return a.uniform1f(b,c)},
cj:function(a,b,c){return a.uniform1fv(b,c)},
ck:function(a,b,c){return a.uniform1i(b,c)},
cl:function(a,b,c){return a.uniform1iv(b,c)},
cm:function(a,b,c){return a.uniform2fv(b,c)},
cn:function(a,b,c){return a.uniform3fv(b,c)},
co:function(a,b,c){return a.uniform4fv(b,c)},
cp:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cq:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cs:function(a,b){return a.useProgram(b)},
cu:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
$isa:1}
P.hR.prototype={$isa:1}
P.fh.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return P.i_(this.dD(a,b))},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
dD:function(a,b){return a.item(b)},
$isb:1,
$asb:function(){return[P.at]},
$isc:1,
$asc:function(){return[P.at]}}
P.cd.prototype={$isb:1,
$asb:function(){return[P.at]},
$isc:1,
$asc:function(){return[P.at]}}
P.cA.prototype={$isb:1,
$asb:function(){return[P.at]},
$isc:1,
$asc:function(){return[P.at]}}
B.ik.prototype={
$1:function(a){$.$get$i0().i(0,a.which,!0)},
$S:function(){return{func:1,args:[W.aL]}}}
B.il.prototype={
$1:function(a){$.$get$i0().i(0,a.which,null)},
$S:function(){return{func:1,args:[W.aL]}}}
B.im.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.md=t
$.me=C.b.a3(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.j1=s-C.b.v(window.innerWidth,2)
$.ki=-(t-C.b.v(window.innerHeight,2))},
$S:function(){return{func:1,args:[W.I]}}}
B.io.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.bT=t-C.b.v(window.innerWidth,2)
$.bU=-(s-C.b.v(window.innerHeight,2))
if(a.button===2)$.$get$bS().i(0,"right",!0)
else $.$get$bS().i(0,"left",!0)},
$S:function(){return{func:1,args:[W.I]}}}
B.ip.prototype={
$1:function(a){if(a.button===2)$.$get$bS().i(0,"right",null)
else $.$get$bS().i(0,"left",null)},
$S:function(){return{func:1,args:[W.I]}}}
B.eP.prototype={
d5:function(a,b,c,d){var t
W.ap(d,W.mm().$1(d),new B.eQ(this),!1,W.aT)
W.ap(d,"mousemove",new B.eR(this),!1,W.I)
t=W.aR
W.ap(d,"touchstart",new B.eS(),!1,t)
W.ap(d,"touchmove",new B.eT(this),!1,t)
B.mC(null)}}
B.eQ.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.ae.ge8(a)*r.k3
if(C.d.a3(r.fy,t)>0)r.fy=H.T(C.d.a3(r.fy,t))}catch(q){s=H.L(q)
P.ar(s)}},
$S:function(){return{func:1,args:[W.aT]}}}
B.eR.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=H.T(t.go+C.b.a3($.j1,$.bT)*0.01)
s=t.id
r=$.bU
q=$.ki
t.id=H.T(s+(r-q)*0.01)
$.bT=$.j1
$.bU=q}},
$S:function(){return{func:1,args:[W.I]}}}
B.eS.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.d.Z(t.clientX)
C.d.Z(t.clientY)
$.bT=s
C.d.Z(t.clientX)
$.bU=C.d.Z(t.clientY)},
$S:function(){return{func:1,args:[W.aR]}}}
B.eT.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.d.Z(t.clientX)
t=C.d.Z(t.clientY)
r=this.a
r.go=H.T(r.go+C.b.a3(s,$.bT)*0.01)
r.id=H.T(r.id+($.bU-t)*0.01)
$.bT=s
$.bU=t},
$S:function(){return{func:1,args:[W.aR]}}}
G.eD.prototype={}
G.fK.prototype={
S:function(a,b){var t=this.d
if(H.ax(!t.E(0,a)))H.aZ("uniform "+a+" already set")
t.i(0,a,b)},
bi:function(){return this.d},
k:function(a){var t,s,r,q
t=H.K(["{"+new H.df(H.mk(this),null).k(0)+"}["+this.a+"]"],[P.r])
for(s=this.d,r=s.gC(s),r=r.gt(r);r.m();){q=r.gn()
C.a.l(t,H.f(q)+": "+H.f(s.h(0,q)))}return C.a.ae(t,"\n")}}
G.dA.prototype={}
G.dC.prototype={
c3:function(a,b,c){J.kH(this.a,b)
if(c>0)J.l4(this.a,b,c)}}
G.e9.prototype={
k:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3[0]","f4[0]"]
for(s=this.e,r=s.gC(s),r=r.gt(r);r.m();){q=r.gn()
p=$.$get$a9().h(0,q).a
C.a.l(t,H.f(q)+"["+p+","+H.f(C.c.gj(s.h(0,q)))+"]")}return C.a.ae(t," ")}}
G.dd.prototype={}
G.dc.prototype={}
G.ey.prototype={}
G.eA.prototype={
bf:function(a,b,c){var t,s
if(C.j.aC(a,0)===105){if(H.ax(C.b.aB(b.length,c)===this.z))H.aZ("ChangeAttribute "+this.z)}else{t=C.b.aB(b.length,c)
if(H.ax(t===(this.ch.length/3|0)))H.aZ("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.iu(t.a,34962,s)
J.kv(t.a,34962,b,35048)},
bg:function(a){this.ch=a
this.bf("aPosition",a,3)},
d2:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
a4:function(a,b,c){var t,s,r,q,p,o
t=J.j4(a,0)===105
if(t&&this.z===0)this.z=C.b.aB(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.j7(r.a))
this.bf(a,b,c)
q=$.$get$a9().h(0,a)
if(q==null)throw H.e("Unknown canonical "+a)
p=this.x
if(H.ax(p.E(0,a)))H.aZ("unexpected attribute "+a)
o=p.h(0,a)
J.iv(r.a,this.e)
r.c3(0,o,t?1:0)
s=s.h(0,a)
p=q.bh()
J.iu(r.a,34962,s)
J.jf(r.a,o,p,5126,!1,0,0)},
k:function(a){var t,s,r,q
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,r=t.gC(t),r=r.gt(r);r.m();){q=r.gn()
C.a.l(s,H.f(q)+":"+t.h(0,q).length)}return"MESH["+this.a+"] "+C.a.ae(s,"  ")}}
G.eW.prototype={
d_:function(a,b){var t=C.b.cA(a,b)
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
t.a2(0,0,1/(p*s))
t.a2(1,1,1/p)
t.a2(2,2,(q+r)/o)
t.a2(3,2,-1)
t.a2(2,3,2*r*q/o)},
bi:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.q(new Float32Array(H.C(3)))
o.ay(r,q,p)
p=this.d
p.i(0,"uEyePosition",o)
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
s=J.u(n)
r=!!s.$isb7
k=r?s.geP(n):1
if(!!s.$isq){j=s.gb_(n)
m=s.gb0(n)
l=s.gcw(n)
n=j}else if(r){j=s.gb_(n)
m=s.gb0(n)
l=s.gcw(n)
n=j}else if(!(typeof n==="number")){n=null
m=null
l=null}s=C.d.B(t[0],n)
r=C.d.B(t[4],m)
q=C.d.B(t[8],l)
i=t[12]
h=C.d.B(t[1],n)
g=C.d.B(t[5],m)
f=C.d.B(t[9],l)
e=t[13]
d=C.d.B(t[2],n)
c=C.d.B(t[6],m)
b=C.d.B(t[10],l)
a=t[14]
a0=C.d.B(t[3],n)
a1=C.d.B(t[7],m)
a2=C.d.B(t[11],l)
a3=t[15]
t[12]=s+r+q+i*k
t[13]=h+g+f+e*k
t[14]=d+c+b+a*k
t[15]=a0+a1+a2+a3*k
a3=this.cx
a3.w(this.db)
a3.ey(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.f6.prototype={
dc:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gj(t)===s.gj(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gC(s),s=s.gt(s);s.m();){q=s.gn()
if(!t.E(0,q))C.a.l(r,q)}for(t=this.x,s=new P.bK(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.m();){q=s.d
if(!t.A(0,q))C.a.l(r,q)}return r},
dg:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gC(b),s=s.gt(s),r=this.d,q=this.y,p=this.z,o=0;s.m();){n=s.gn()
switch(J.j4(n,0)){case 117:if(q.E(0,n)){m=b.h(0,n)
if(p.E(0,n))H.bV("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$a9().h(0,n)
if(l==null)H.D("unknown "+n)
H.d(q.E(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.iz(r.a,k,m)
else if(!!J.u(m).$isll)J.l2(r.a,k,m)
break
case"float":if(l.c===0)J.l0(r.a,k,m)
else if(!!J.u(m).$isiD)J.l1(r.a,k,m)
break
case"mat4":if(l.c===0){j=H.aB(m,"$isak").a
J.je(r.a,k,!1,j)}else if(!!J.u(m).$isiD)J.je(r.a,k,!1,m)
else if(H.ax(!1))H.aZ("bad unform: "+n)
break
case"mat3":if(l.c===0){j=C.c.gcS(H.aB(m,"$ismG"))
J.jd(r.a,k,!1,j)}else if(!!J.u(m).$isiD)J.jd(r.a,k,!1,m)
else if(H.ax(!1))H.aZ("bad unform: "+n)
break
case"vec4":j=l.c
i=r.a
if(j===0)J.jc(i,k,H.aB(m,"$isb7").a)
else J.jc(i,k,m)
break
case"vec3":j=l.c
i=r.a
if(j===0)J.jb(i,k,H.aB(m,"$isq").a)
else J.jb(i,k,m)
break
case"vec2":if(l.c===0){j=C.c.gcS(H.aB(m,"$ismH"))
J.ja(r.a,k,j)}else J.ja(r.a,k,m)
break
case"sampler2D":case"sampler2DShadow":j=C.b.a_(33984,this.ch)
J.j5(r.a,j)
j=H.aB(m,"$isbF").b
J.bW(r.a,3553,j)
j=this.ch
J.iz(r.a,k,j)
this.ch=this.ch+1
break
case"samplerCube":H.d(n==="uCubeTexture")
j=C.b.a_(33984,this.ch)
J.j5(r.a,j)
j=H.aB(m,"$isbF").b
J.bW(r.a,34067,j)
j=this.ch
J.iz(r.a,k,j)
this.ch=this.ch+1
break
default:H.bV("Error: unknow uniform type: "+j)
H.d(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":j=J.E(m,!0)
i=r.a
if(j)J.ds(i,2929)
else J.ix(i,2929)
break
case"cStencilFunc":H.aB(m,"$isdd")
j=m.a
i=r.a
if(j===1281)J.ix(i,2960)
else{J.ds(i,2960)
i=m.b
h=m.c
J.kW(r.a,j,i,h)}break
case"cDepthWrite":J.kB(r.a,m)
break
case"cBlendEquation":H.aB(m,"$isdc")
j=m.a
i=r.a
if(j===1281)J.ix(i,3042)
else{J.ds(i,3042)
i=m.b
h=m.c
J.ku(r.a,i,h)
J.kt(r.a,j)}break}++o
break}}s=Date.now()
""+o
new P.aH(1000*(s-new P.bf(t,!1).a)).k(0)},
d1:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
Date.now()
t=this.d
J.l3(t.a,this.r)
this.ch=0
this.z.O(0)
for(s=0;s<2;++s){r=b[s]
this.dg(r.a,r.bi())}q=this.Q
q.O(0)
for(p=a.cy,p=p.gC(p),p=p.gt(p);p.m();)q.l(0,p.gn())
o=this.dc()
if(o.length!==0)P.ar("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.f(o)))
J.iv(a.d.a,a.e)
n=this.e.f.length>0
q=a.f
p=a.d2()
m=a.Q
l=a.z
if(n)J.ks(t.a,q)
if(m!==-1){k=t.a
if(l>1)J.kF(k,q,p,m,0,l)
else J.kE(k,q,p,m,0)}else{m=t.a
if(l>1)J.kD(m,q,0,p,l)
else J.kC(m,q,0,p)}if(n)J.kI(t.a)},
d0:function(a,b){return this.d1(a,b,null)},
d6:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.W)(t),++o){n=t[o]
r.i(0,n,J.j8(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.W)(t),++o){n=t[o]
r.i(0,n,J.j8(q.a,p,n))}}}
G.w.prototype={
bh:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.d(!1)
return-1}}}
G.d8.prototype={
cZ:function(a){var t,s,r,q
H.d(this.b==null)
for(t=this.c,s=this.x,r=0;r<1;++r){q=a[r]
H.d($.$get$a9().E(0,q))
H.d(!C.a.A(t,q))
C.a.l(t,q)
s.i(0,q,this.r);++this.r}C.a.bb(t)},
be:function(a){var t,s,r,q
H.d(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.W)(a),++r){q=a[r]
if(H.ax($.$get$a9().E(0,q)))H.aZ("missing uniform "+q)
H.d(!C.a.A(s,q))
C.a.l(s,q)}C.a.bb(s)},
d7:function(a,b){H.d(this.b==null)
this.b=this.dh(!0,a,b)},
bj:function(a){return this.d7(a,null)},
dh:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.d(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.W)(t),++o){n=t[o]
m=$.$get$a9().h(0,n)
C.a.l(q,"layout (location="+H.f(p.h(0,n))+") in "+m.a+" "+H.f(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,o=0;!1;++o){k=t[o]
m=$.$get$a9().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.f(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.W)(t),++o){k=t[o]
m=$.$get$a9().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.f(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.W)(t),++o){k=t[o]
m=$.$get$a9().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.f(k)+j+";")}C.a.l(q,"")
C.a.l(q,"void main(void) {")
C.a.G(q,b)
C.a.l(q,"}")
return C.a.ae(q,"\n")}}
G.ff.prototype={}
G.fz.prototype={
d3:function(a,b){var t=this.e
if(t!==1)J.kY(a.a,b,34046,t)
J.j9(a.a,b,10240,this.r)
J.j9(a.a,b,10241,this.f)}}
G.bF.prototype={
k:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.ed.prototype={
d8:function(a){var t,s
t=this.d
s=this.c
J.bW(t.a,s,this.b)
J.kX(t.a,s,0,6408,6408,5121,a)}}
R.fj.prototype={
dk:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.lS("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.y).bq(r,"float")
r.setProperty(p,"left","")
p=C.y.bq(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.r.J(t,s)}return t},
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
J.it(this.a,s)
r=this.dk(b,c,90,30)
this.d=r
J.it(this.a,r)
t=t.createElement("div")
this.c=t
J.it(this.a,t)}}
R.fk.prototype={
df:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.A.eM(s,2)+" fps"
t=this.c;(t&&C.r).cN(t,b)
r=C.b.v(30*C.A.e_(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.r).J(t,q)},
de:function(a){return this.df(a,"")}}
A.i4.prototype={
$2:function(a,b){var t=536870911&a+J.ag(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(){return{func:1,args:[P.o,P.n]}}}
T.ak.prototype={
a2:function(a,b,c){H.d(a<4)
H.d(b<4)
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
k:function(a){return"[0] "+this.aj(0).k(0)+"\n[1] "+this.aj(1).k(0)+"\n[2] "+this.aj(2).k(0)+"\n[3] "+this.aj(3).k(0)+"\n"},
h:function(a,b){return this.a[b]},
u:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.ak){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gq:function(a){return A.iX(this.a)},
aj:function(a){var t,s
t=new Float32Array(H.C(4))
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.b7(t)},
ak:function(){var t=this.a
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
ey:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.q.prototype={
ay:function(a,b,c){var t=this.a
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
return"["+H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+"]"},
u:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.q){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gq:function(a){return A.iX(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){return Math.sqrt(this.gaf())},
gaf:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
au:function(a){var t,s,r
t=Math.sqrt(this.gaf())
if(t===0)return 0
s=1/t
r=this.a
r[0]=r[0]*s
r[1]=r[1]*s
r[2]=r[2]*s
return t},
aR:function(a){var t,s
t=a.a
s=this.a
return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]},
bX:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.q(new Float32Array(H.C(3)))
t.ay(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
l:function(a,b){var t,s
t=b.a
s=this.a
s[0]=s[0]+t[0]
s[1]=s[1]+t[1]
s[2]=s[2]+t[2]},
az:function(a){var t,s
t=a.a
s=this.a
s[0]=s[0]-t[0]
s[1]=s[1]-t[1]
s[2]=s[2]-t[2]},
a1:function(a,b){var t=this.a
t[2]=t[2]*b
t[1]=t[1]*b
t[0]=t[0]*b},
scv:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]}}
T.b7.prototype={
k:function(a){var t=this.a
return H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+","+H.f(t[3])},
u:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.b7){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gq:function(a){return A.iX(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){var t,s,r,q
t=this.a
s=t[0]
r=t[1]
q=t[2]
t=t[3]
return Math.sqrt(s*s+r*r+q*q+t*t)}}
R.f0.prototype={
k:function(a){return"POLE: "+R.dK(this.a)+" time "+this.d+" ["+R.dK(this.b)+"] => ["+R.dK(this.c)+"]"}}
R.eg.prototype={
k:function(a){return"ION: "+R.dK(this.a)+" speed: "+this.b},
dd:function(a,b,c,d){var t,s,r,q,p,o,n,m,l
t=new T.q(new Float32Array(H.C(3)))
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.W)(a),++r){q=a[r]
p=this.a
o=q.a
n=new T.q(new Float32Array(3))
n.w(p)
n.az(o)
p=Math.sqrt(n.gaf())
if(p<=0.2)continue
if(p>100.1){s=a[c.c7(a.length)].a
o=R.jH(c,20*d)
m=new T.q(new Float32Array(3))
m.w(s)
m.l(0,o)
this.a=m
H.bV("too far "+H.f(p))
return}o=new T.q(new Float32Array(3))
o.w(n)
o.a1(0,1/(p*p))
l=new T.q(new Float32Array(3))
l.w(t)
l.l(0,o)
t=l}for(s=b.length,r=0;r<b.length;b.length===s||(0,H.W)(b),++r,t=l){p=b[r].a
o=this.a
n=new T.q(new Float32Array(3))
n.w(p)
n.az(o)
p=Math.sqrt(n.gaf())
if(p<=0.2){s=a[c.c7(a.length)].a
o=R.jH(c,20*d)
m=new T.q(new Float32Array(3))
m.w(s)
m.l(0,o)
this.a=m
H.bV("too close: "+H.f(p))
return}o=new T.q(new Float32Array(3))
o.w(n)
o.a1(0,1/(p*p))
l=new T.q(new Float32Array(3))
l.w(t)
l.l(0,o)}s=this.a
p=new T.q(new Float32Array(H.C(3)))
p.w(t)
p.au(0)
o=new T.q(new Float32Array(H.C(3)))
o.w(p)
o.a1(0,d)
p=new T.q(new Float32Array(H.C(3)))
p.w(o)
p.a1(0,this.b)
o=new T.q(new Float32Array(H.C(3)))
o.w(s)
o.l(0,p)
this.a=o}}
R.ih.prototype={
$1:function(b6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
t=this.a
s=b6-t.a
t.a=b6+0
t=this.d
t.go=H.T(t.go+0.001)
if(s>0){for(r=this.y,q=r.length,p=this.r,o=this.x,n=this.c,m=s/1000,l=this.z,k=0,j=0;j<r.length;r.length===q||(0,H.W)(r),++j){i=r[j]
i.dd(p,o,n,m)
h=i.a.a
l[k]=h[0]
l[k+1]=h[1]
l[k+2]=h[2]
k+=3}this.ch.bg(l)}r=t.k4
if(r.h(0,37)!=null)t.go=H.T(t.go+0.03)
else if(r.h(0,39)!=null)t.go=H.T(t.go-0.03)
if(r.h(0,38)!=null)t.id=H.T(t.id+0.03)
else if(r.h(0,40)!=null)t.id=H.T(t.id-0.03)
if(r.h(0,33)!=null)t.fy=H.T(t.fy*0.99)
else if(r.h(0,34)!=null)t.fy=H.T(t.fy*1.01)
if(r.h(0,32)!=null){t.go=0
t.id=0}r=H.T(C.d.e0(t.id,-1.4707963267948965,1.4707963267948965))
t.id=r
q=t.fy
p=t.go
g=q*Math.cos(r)
o=Math.cos(p)
r=Math.sin(r)
p=Math.sin(p)
n=t.d.a
n[12]=g*o
n[13]=q*r
n[14]=g*p
p=t.k2
r=p.a
n[12]=n[12]+r[0]
n[13]=n[13]+r[1]
n[14]=n[14]+r[2]
r=n[12]
q=n[13]
o=n[14]
f=new T.q(new Float32Array(H.C(3)))
f.ay(0,1,0)
m=t.e
l=m.a
l[0]=n[12]
l[1]=n[13]
l[2]=n[14]
l=new Float32Array(H.C(3))
e=new T.q(l)
e.w(m)
e.az(p)
e.au(0)
d=f.bX(e)
d.au(0)
c=e.bX(d)
c.au(0)
p=d.aR(m)
h=c.aR(m)
m=e.aR(m)
b=d.a
a=b[0]
a0=c.a
a1=a0[0]
a2=l[0]
a3=b[1]
a4=a0[1]
a5=l[1]
b=b[2]
a0=a0[2]
l=l[2]
n[15]=1
n[14]=-m
n[13]=-h
n[12]=-p
n[11]=0
n[10]=l
n[9]=a0
n[8]=b
n[7]=0
n[6]=a5
n[5]=a4
n[4]=a3
n[3]=0
n[2]=a2
n[1]=a1
n[0]=a
n[12]=r
n[13]=q
n[14]=o
o=t.f
q=o.a
q[0]=n[2]
q[1]=n[6]
q[2]=n[10]
t=-t.k1
o=Math.sqrt(o.gaf())
d=q[0]/o
c=q[1]/o
e=q[2]/o
o=Math.cos(t)
t=Math.sin(t)
a6=1-o
a7=d*d*a6+o
q=e*t
a8=d*c*a6-q
r=c*t
a9=d*e*a6+r
b0=c*d*a6+q
b1=c*c*a6+o
t=d*t
b2=c*e*a6-t
b3=e*d*a6-r
b4=e*c*a6+t
b5=e*e*a6+o
o=n[0]
t=n[4]
r=n[8]
q=n[1]
a=n[5]
a1=n[9]
a2=n[2]
a3=n[6]
a4=n[10]
a5=n[3]
b=n[7]
a0=n[11]
n[0]=o*a7+t*b0+r*b3
n[1]=q*a7+a*b0+a1*b3
n[2]=a2*a7+a3*b0+a4*b3
n[3]=a5*a7+b*b0+a0*b3
n[4]=o*a8+t*b1+r*b4
n[5]=q*a8+a*b1+a1*b4
n[6]=a2*a8+a3*b1+a4*b4
n[7]=a5*a8+b*b1+a0*b4
n[8]=o*a9+t*b2+r*b5
n[9]=q*a9+a*b2+a1*b5
n[10]=a2*a9+a3*b2+a4*b5
n[11]=a5*a9+b*b2+a0*b5
this.f.d0(this.ch,[this.e,this.Q])
C.af.gdU(window).cf(this)
this.b.de(b6)},
$S:function(){return{func:1,v:true,args:[P.V]}}}
J.a.prototype.cU=J.a.prototype.k
J.bq.prototype.cW=J.bq.prototype.k
P.Q.prototype.cV=P.Q.prototype.av
W.Z.prototype.aA=W.Z.prototype.H
W.bM.prototype.cX=W.bM.prototype.N;(function installTearOffs(){installTearOff(H.aW.prototype,"geu",0,0,0,null,["$0"],["at"],0)
installTearOff(H.ad.prototype,"gcF",0,0,0,null,["$1"],["F"],2)
installTearOff(H.aV.prototype,"gea",0,0,0,null,["$1"],["P"],2)
installTearOff(P,"m9",1,0,0,null,["$1"],["lP"],1)
installTearOff(P,"ma",1,0,0,null,["$1"],["lQ"],1)
installTearOff(P,"mb",1,0,0,null,["$1"],["lR"],1)
installTearOff(P,"k9",1,0,0,null,["$0"],["m7"],0)
installTearOff(P.aq.prototype,"gds",0,0,0,null,["$2","$1"],["al","dt"],5)
installTearOff(P,"mg",1,0,0,null,["$2"],["lb"],6)
installTearOff(W,"mm",1,0,0,null,["$1"],["lg"],7)
installTearOff(W,"mn",1,0,0,null,["$4"],["lV"],4)
installTearOff(W,"mo",1,0,0,null,["$4"],["lW"],4)
installTearOff(W.d1.prototype,"gaV",0,1,0,null,["$0"],["aW"],3)
installTearOff(W.de.prototype,"gaV",0,1,0,null,["$0"],["aW"],3)
installTearOff(R,"kb",1,0,0,null,["$0"],["mw"],0)})();(function inheritance(){inherit(P.n,null)
var t=P.n
inherit(H.iG,t)
inherit(J.a,t)
inherit(J.dx,t)
inherit(P.Q,t)
inherit(H.cV,t)
inherit(P.cQ,t)
inherit(H.c7,t)
inherit(H.b0,t)
inherit(H.hv,t)
inherit(H.aW,t)
inherit(H.h8,t)
inherit(H.aX,t)
inherit(H.hu,t)
inherit(H.h1,t)
inherit(H.b6,t)
inherit(H.fB,t)
inherit(H.ai,t)
inherit(H.ad,t)
inherit(H.aV,t)
inherit(H.f5,t)
inherit(H.fH,t)
inherit(P.b2,t)
inherit(H.dn,t)
inherit(H.df,t)
inherit(H.ab,t)
inherit(H.ep,t)
inherit(H.er,t)
inherit(P.h3,t)
inherit(P.dk,t)
inherit(P.aq,t)
inherit(P.di,t)
inherit(P.fm,t)
inherit(P.fn,t)
inherit(P.b_,t)
inherit(P.hU,t)
inherit(P.fc,t)
inherit(P.hs,t)
inherit(P.bK,t)
inherit(P.bz,t)
inherit(P.v,t)
inherit(P.ht,t)
inherit(P.ay,t)
inherit(P.F,t)
inherit(P.bf,t)
inherit(P.V,t)
inherit(P.aH,t)
inherit(P.da,t)
inherit(P.hd,t)
inherit(P.dO,t)
inherit(P.c,t)
inherit(P.at,t)
inherit(P.b5,t)
inherit(P.bC,t)
inherit(P.r,t)
inherit(P.bD,t)
inherit(W.dE,t)
inherit(W.h0,t)
inherit(W.bJ,t)
inherit(W.y,t)
inherit(W.d3,t)
inherit(W.bM,t)
inherit(W.hM,t)
inherit(W.c8,t)
inherit(W.d2,t)
inherit(W.hG,t)
inherit(W.dp,t)
inherit(P.hx,t)
inherit(P.hy,t)
inherit(G.eD,t)
inherit(G.dC,t)
inherit(G.e9,t)
inherit(G.dd,t)
inherit(G.dc,t)
inherit(G.w,t)
inherit(G.d8,t)
inherit(G.fz,t)
inherit(G.bF,t)
inherit(R.fj,t)
inherit(T.ak,t)
inherit(T.q,t)
inherit(T.b7,t)
inherit(R.f0,t)
inherit(R.eg,t)
t=J.a
inherit(J.el,t)
inherit(J.cT,t)
inherit(J.bq,t)
inherit(J.aI,t)
inherit(J.b3,t)
inherit(J.aJ,t)
inherit(H.bt,t)
inherit(H.aN,t)
inherit(W.h,t)
inherit(W.X,t)
inherit(W.bY,t)
inherit(W.c_,t)
inherit(W.c0,t)
inherit(W.x,t)
inherit(W.cb,t)
inherit(W.dG,t)
inherit(W.dH,t)
inherit(W.c4,t)
inherit(W.c5,t)
inherit(W.cm,t)
inherit(W.dJ,t)
inherit(W.i,t)
inherit(W.cl,t)
inherit(W.a0,t)
inherit(W.ea,t)
inherit(W.ck,t)
inherit(W.et,t)
inherit(W.ez,t)
inherit(W.a2,t)
inherit(W.ci,t)
inherit(W.eL,t)
inherit(W.d1,t)
inherit(W.co,t)
inherit(W.eU,t)
inherit(W.av,t)
inherit(W.a3,t)
inherit(W.ch,t)
inherit(W.d6,t)
inherit(W.a5,t)
inherit(W.cg,t)
inherit(W.a6,t)
inherit(W.fl,t)
inherit(W.R,t)
inherit(W.cf,t)
inherit(W.fA,t)
inherit(W.a8,t)
inherit(W.cv,t)
inherit(W.fF,t)
inherit(W.de,t)
inherit(W.fM,t)
inherit(W.fR,t)
inherit(W.h2,t)
inherit(W.cu,t)
inherit(W.ct,t)
inherit(W.cs,t)
inherit(W.cp,t)
inherit(W.cr,t)
inherit(W.cq,t)
inherit(W.hS,t)
inherit(W.hT,t)
inherit(P.aj,t)
inherit(P.ce,t)
inherit(P.al,t)
inherit(P.cj,t)
inherit(P.f_,t)
inherit(P.cc,t)
inherit(P.am,t)
inherit(P.cn,t)
inherit(P.fQ,t)
inherit(P.dy,t)
inherit(P.f7,t)
inherit(P.f8,t)
inherit(P.hR,t)
inherit(P.cd,t)
t=J.bq
inherit(J.eY,t)
inherit(J.aS,t)
inherit(J.aK,t)
inherit(J.iF,J.aI)
t=J.b3
inherit(J.cS,t)
inherit(J.cR,t)
t=P.Q
inherit(H.b,t)
inherit(H.cW,t)
inherit(H.dh,t)
t=H.b
inherit(H.b4,t)
inherit(H.eq,t)
inherit(H.dN,H.cW)
t=P.cQ
inherit(H.eu,t)
inherit(H.fT,t)
t=H.b4
inherit(H.br,t)
inherit(P.es,t)
t=H.b0
inherit(H.iq,t)
inherit(H.ir,t)
inherit(H.hq,t)
inherit(H.h9,t)
inherit(H.eh,t)
inherit(H.ei,t)
inherit(H.hw,t)
inherit(H.fC,t)
inherit(H.fD,t)
inherit(H.is,t)
inherit(H.i9,t)
inherit(H.ia,t)
inherit(H.ib,t)
inherit(H.ic,t)
inherit(H.id,t)
inherit(H.fv,t)
inherit(H.em,t)
inherit(H.i5,t)
inherit(H.i6,t)
inherit(H.i7,t)
inherit(P.fY,t)
inherit(P.fX,t)
inherit(P.fZ,t)
inherit(P.h_,t)
inherit(P.he,t)
inherit(P.hi,t)
inherit(P.hf,t)
inherit(P.hg,t)
inherit(P.hh,t)
inherit(P.hl,t)
inherit(P.hm,t)
inherit(P.hk,t)
inherit(P.hj,t)
inherit(P.fo,t)
inherit(P.fp,t)
inherit(P.hW,t)
inherit(P.hB,t)
inherit(P.hA,t)
inherit(P.hC,t)
inherit(P.ev,t)
inherit(P.dL,t)
inherit(P.dM,t)
inherit(W.hY,t)
inherit(W.fU,t)
inherit(W.hc,t)
inherit(W.eN,t)
inherit(W.eM,t)
inherit(W.hI,t)
inherit(W.hJ,t)
inherit(W.hP,t)
inherit(W.hQ,t)
inherit(P.hZ,t)
inherit(B.ik,t)
inherit(B.il,t)
inherit(B.im,t)
inherit(B.io,t)
inherit(B.ip,t)
inherit(B.eQ,t)
inherit(B.eR,t)
inherit(B.eS,t)
inherit(B.eT,t)
inherit(A.i4,t)
inherit(R.ih,t)
t=H.h1
inherit(H.b8,t)
inherit(H.bN,t)
t=P.b2
inherit(H.d4,t)
inherit(H.en,t)
inherit(H.fL,t)
inherit(H.fJ,t)
inherit(H.dB,t)
inherit(H.f9,t)
inherit(P.bX,t)
inherit(P.d5,t)
inherit(P.ah,t)
inherit(P.t,t)
inherit(P.dg,t)
inherit(P.au,t)
inherit(P.Y,t)
inherit(P.dF,t)
t=H.fv
inherit(H.fi,t)
inherit(H.be,t)
inherit(H.fW,P.bX)
inherit(H.cY,H.aN)
t=H.cY
inherit(H.bu,t)
inherit(H.bv,t)
inherit(H.bx,H.bu)
inherit(H.cZ,H.bx)
inherit(H.bw,H.bv)
inherit(H.d_,H.bw)
t=H.cZ
inherit(H.cX,t)
inherit(H.eE,t)
t=H.d_
inherit(H.eF,t)
inherit(H.eG,t)
inherit(H.eH,t)
inherit(H.eI,t)
inherit(H.eJ,t)
inherit(H.d0,t)
inherit(H.eK,t)
inherit(P.hN,P.h3)
inherit(P.hz,P.hU)
inherit(P.dl,H.ab)
inherit(P.fb,P.fc)
inherit(P.hp,P.fb)
inherit(P.hr,P.hp)
inherit(P.cU,P.bz)
t=P.V
inherit(P.P,t)
inherit(P.o,t)
t=P.ah
inherit(P.bA,t)
inherit(P.ee,t)
t=W.h
inherit(W.p,t)
inherit(W.bk,t)
inherit(W.dD,t)
inherit(W.e5,t)
inherit(W.bp,t)
inherit(W.bs,t)
inherit(W.f1,t)
inherit(W.d7,t)
inherit(W.fd,t)
inherit(W.a4,t)
inherit(W.bj,t)
inherit(W.a7,t)
inherit(W.S,t)
inherit(W.bi,t)
inherit(W.fO,t)
inherit(W.fS,t)
inherit(W.bG,t)
inherit(W.fV,t)
inherit(W.aU,t)
inherit(W.hH,t)
t=W.p
inherit(W.Z,t)
inherit(W.aG,t)
inherit(W.bg,t)
inherit(W.c3,t)
inherit(W.h5,t)
t=W.Z
inherit(W.j,t)
inherit(P.B,t)
t=W.j
inherit(W.dv,t)
inherit(W.dw,t)
inherit(W.aF,t)
inherit(W.bZ,t)
inherit(W.c2,t)
inherit(W.e7,t)
inherit(W.c9,t)
inherit(W.ef,t)
inherit(W.fa,t)
inherit(W.db,t)
inherit(W.ft,t)
inherit(W.fu,t)
inherit(W.bE,t)
inherit(W.ho,t)
inherit(W.bn,W.bk)
inherit(W.dz,W.bn)
inherit(W.b1,W.cb)
inherit(W.cP,W.cm)
inherit(W.dI,W.cP)
inherit(W.a_,W.bY)
inherit(W.cN,W.cl)
inherit(W.e4,W.cN)
inherit(W.cH,W.ck)
inherit(W.bo,W.cH)
inherit(W.ca,W.bg)
inherit(W.eb,W.bp)
inherit(W.aw,W.i)
t=W.aw
inherit(W.aL,t)
inherit(W.I,t)
inherit(W.aR,t)
inherit(W.eB,W.bs)
inherit(W.cJ,W.ci)
inherit(W.eC,W.cJ)
inherit(W.N,P.cU)
inherit(W.cI,W.co)
inherit(W.by,W.cI)
inherit(W.eX,W.av)
inherit(W.cy,W.ch)
inherit(W.eZ,W.cy)
inherit(W.bm,W.bj)
inherit(W.fe,W.bm)
inherit(W.cB,W.cg)
inherit(W.fg,W.cB)
inherit(W.cz,W.cf)
inherit(W.fx,W.cz)
inherit(W.bl,W.bi)
inherit(W.fy,W.bl)
inherit(W.cK,W.cv)
inherit(W.fE,W.cK)
inherit(W.aT,W.I)
inherit(W.cw,W.cu)
inherit(W.dj,W.cw)
inherit(W.cD,W.ct)
inherit(W.h4,W.cD)
inherit(W.h6,W.c5)
inherit(W.cO,W.cs)
inherit(W.hn,W.cO)
inherit(W.cM,W.cp)
inherit(W.dm,W.cM)
inherit(W.cL,W.cr)
inherit(W.hK,W.cL)
inherit(W.cF,W.cq)
inherit(W.hL,W.cF)
inherit(W.h7,W.h0)
inherit(W.ha,P.fm)
inherit(W.iP,W.ha)
inherit(W.hb,P.fn)
inherit(W.hO,W.bM)
inherit(P.H,P.hy)
t=P.B
inherit(P.G,t)
inherit(P.aE,t)
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
inherit(P.e6,t)
inherit(P.ew,t)
inherit(P.ex,t)
inherit(P.eV,t)
inherit(P.bB,t)
inherit(P.fs,t)
inherit(P.fP,t)
inherit(P.bI,t)
inherit(P.hD,t)
inherit(P.hE,t)
inherit(P.hF,t)
t=P.G
inherit(P.du,t)
inherit(P.ec,t)
inherit(P.fr,t)
inherit(P.aQ,t)
inherit(P.fN,t)
inherit(P.cx,P.ce)
inherit(P.eo,P.cx)
inherit(P.cG,P.cj)
inherit(P.eO,P.cG)
inherit(P.cE,P.cc)
inherit(P.fq,P.cE)
inherit(P.fw,P.aQ)
inherit(P.cC,P.cn)
inherit(P.fG,P.cC)
inherit(P.cA,P.cd)
inherit(P.fh,P.cA)
t=G.eD
inherit(G.ff,t)
inherit(G.fK,t)
inherit(G.eA,t)
inherit(G.f6,t)
inherit(G.dA,G.ff)
inherit(B.eP,G.dA)
t=G.fK
inherit(G.ey,t)
inherit(G.eW,t)
inherit(G.ed,G.bF)
inherit(R.fk,R.fj)
mixin(H.bu,P.v)
mixin(H.bv,P.v)
mixin(H.bw,H.c7)
mixin(H.bx,H.c7)
mixin(P.bz,P.v)
mixin(W.bi,P.v)
mixin(W.bj,P.v)
mixin(W.bk,P.v)
mixin(W.bl,W.y)
mixin(W.bm,W.y)
mixin(W.bn,W.y)
mixin(W.cb,W.dE)
mixin(W.cv,P.v)
mixin(W.ch,P.v)
mixin(W.co,P.v)
mixin(W.cp,P.v)
mixin(W.cq,P.v)
mixin(W.cr,P.v)
mixin(W.cs,P.v)
mixin(W.ct,P.v)
mixin(W.cu,P.v)
mixin(W.cf,P.v)
mixin(W.cg,P.v)
mixin(W.ci,P.v)
mixin(W.ck,P.v)
mixin(W.cl,P.v)
mixin(W.cm,P.v)
mixin(W.cw,W.y)
mixin(W.cy,W.y)
mixin(W.cI,W.y)
mixin(W.cJ,W.y)
mixin(W.cH,W.y)
mixin(W.cM,W.y)
mixin(W.cN,W.y)
mixin(W.cO,W.y)
mixin(W.cP,W.y)
mixin(W.cz,W.y)
mixin(W.cB,W.y)
mixin(W.cD,W.y)
mixin(W.cF,W.y)
mixin(W.cK,W.y)
mixin(W.cL,W.y)
mixin(P.ce,P.v)
mixin(P.cc,P.v)
mixin(P.cj,P.v)
mixin(P.cn,P.v)
mixin(P.cx,W.y)
mixin(P.cG,W.y)
mixin(P.cC,W.y)
mixin(P.cE,W.y)
mixin(P.cd,P.v)
mixin(P.cA,W.y)})();(function constants(){C.p=W.aF.prototype
C.x=W.bZ.prototype
C.n=W.c_.prototype
C.q=W.c0.prototype
C.y=W.b1.prototype
C.r=W.c2.prototype
C.L=W.c4.prototype
C.M=W.c9.prototype
C.t=W.ca.prototype
C.N=J.a.prototype
C.a=J.aI.prototype
C.A=J.cR.prototype
C.b=J.cS.prototype
C.c=J.cT.prototype
C.d=J.b3.prototype
C.j=J.aJ.prototype
C.U=J.aK.prototype
C.Y=H.cX.prototype
C.D=W.by.prototype
C.E=J.eY.prototype
C.F=W.d6.prototype
C.K=W.db.prototype
C.w=J.aS.prototype
C.ae=W.aT.prototype
C.af=W.bG.prototype
C.h=new P.hz()
C.z=new P.aH(0)
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
C.V=H.K(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.r])
C.W=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.X=makeConstList([])
C.u=H.K(makeConstList(["bind","if","ref","repeat","syntax"]),[P.r])
C.v=H.K(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.r])
C.Z=new G.w("vec3","vertex btangents",0)
C.e=new G.w("vec3","",0)
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
C.f=new G.w("float","",0)
C.a5=new G.w("float","",4)
C.a6=new G.w("float","depth for shadowmaps",0)
C.i=new G.w("sampler2D","",0)
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
C.ad=new G.w("vec3","vertex tangents",0)})();(function staticFields(){$.jF="$cachedFunction"
$.jG="$cachedInvocation"
$.jm=null
$.jk=null
$.iR=!1
$.iW=null
$.k6=null
$.km=null
$.i1=null
$.i8=null
$.iY=null
$.b9=null
$.bO=null
$.bP=null
$.iS=!1
$.A=C.h
$.jx=0
$.as=null
$.iB=null
$.jw=null
$.jv=null
$.jt=null
$.js=null
$.jr=null
$.jq=null
$.md=0
$.me=0
$.j1=0
$.ki=0
$.bT=0
$.bU=0
$.mD=!1
$.kc=0})();(function lazyInitializers(){lazy($,"jp","$get$jp",function(){return H.kf("_$dart_dartClosure")})
lazy($,"iH","$get$iH",function(){return H.kf("_$dart_js")})
lazy($,"jz","$get$jz",function(){return H.lq()})
lazy($,"jA","$get$jA",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.jx
$.jx=t+1
t="expando$key$"+t}return new P.dO(null,t,[P.o])})
lazy($,"jL","$get$jL",function(){return H.an(H.fI({
toString:function(){return"$receiver$"}}))})
lazy($,"jM","$get$jM",function(){return H.an(H.fI({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"jN","$get$jN",function(){return H.an(H.fI(null))})
lazy($,"jO","$get$jO",function(){return H.an(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"jS","$get$jS",function(){return H.an(H.fI(void 0))})
lazy($,"jT","$get$jT",function(){return H.an(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"jQ","$get$jQ",function(){return H.an(H.jR(null))})
lazy($,"jP","$get$jP",function(){return H.an(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"jV","$get$jV",function(){return H.an(H.jR(void 0))})
lazy($,"jU","$get$jU",function(){return H.an(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"iO","$get$iO",function(){return P.lO()})
lazy($,"bQ","$get$bQ",function(){return[]})
lazy($,"jo","$get$jo",function(){return{}})
lazy($,"k_","$get$k_",function(){return P.iJ(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"iQ","$get$iQ",function(){return P.a1()})
lazy($,"i0","$get$i0",function(){return P.jB(P.o,P.ay)})
lazy($,"bS","$get$bS",function(){return P.jB(P.r,P.ay)})
lazy($,"jJ","$get$jJ",function(){return new G.dd(1281,0,4294967295)})
lazy($,"ji","$get$ji",function(){return new G.dc(32774,770,769)})
lazy($,"a9","$get$a9",function(){return P.aM(["cBlendEquation",C.o,"cDepthWrite",C.o,"cDepthTest",C.o,"cStencilFunc",C.o,"tPosition",C.e,"tSpeed",C.e,"tForce",C.e,"aColors",C.I,"aColorAlpha",C.a1,"aPosition",C.G,"aTexUV",C.a8,"aNormal",C.ab,"aBinormal",C.a0,"aCenter",C.H,"aPointSize",C.f,"aBoneIndex",C.m,"aBoneWeight",C.m,"aTangent",C.ad,"aBitangent",C.Z,"iaRotation",C.m,"iaTranslation",C.e,"iaScale",C.e,"vColor",C.I,"vTexUV",C.l,"vLightWeighting",C.e,"vNormal",C.e,"vPosition",C.G,"vPositionFromLight",C.a_,"vCenter",C.H,"vDepth",C.a6,"uTransformationMatrix",C.k,"uModelMatrix",C.k,"uNormalMatrix",C.J,"uConvolutionMatrix",C.J,"uPerspectiveViewMatrix",C.k,"uLightPerspectiveViewMatrix",C.k,"uShadowMap",C.ac,"uTexture",C.i,"uTexture2",C.i,"uTexture3",C.i,"uTexture4",C.i,"uSpecularMap",C.i,"uNormalMap",C.i,"uBumpMap",C.i,"uDepthMap",C.i,"uCubeTexture",C.aa,"uAnimationTable",C.i,"uTime",C.a9,"uCameraNear",C.f,"uCameraFar",C.f,"uFogNear",C.f,"uFogFar",C.f,"uPointSize",C.f,"uScale",C.f,"uAngle",C.f,"uCanvasSize",C.l,"uCenter2",C.l,"uCutOff",C.f,"uShininess",C.f,"uShadowBias",C.f,"uOpacity",C.f,"uColor",C.e,"uAmbientDiffuse",C.e,"uColorEmissive",C.e,"uColorSpecular",C.e,"uColorDiffuse",C.e,"uColorAlpha",C.m,"uColorAlpha2",C.m,"uEyePosition",C.e,"uMaterial",C.k,"uRange",C.l,"uDirection",C.l,"uBoneMatrices",C.a3,"uLightDescs",C.a4,"uLightCount",C.f,"uLightTypes",C.a5,"uBumpScale",C.a7,"uNormalScale",C.a2])})
lazy($,"kl","$get$kl",function(){var t=new G.d8("PointSpritesV",null,[],[],[],[],0,P.a1())
t.cZ(["aPosition"])
t.be(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"])
t.bj(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"])
return t})
lazy($,"kk","$get$kk",function(){var t=new G.d8("PointSpritesF",null,[],[],[],[],0,P.a1())
t.be(["uTexture"])
t.bj(["oFragColor = texture( uTexture,  gl_PointCoord);"])
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
mangledGlobalNames:{o:"int",P:"double",V:"num",r:"String",ay:"bool",b5:"Null",c:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.p},{func:1,ret:P.ay,args:[W.Z,P.r,P.r,W.bJ]},{func:1,v:true,args:[P.n],opt:[P.bC]},{func:1,ret:P.o,args:[P.F,P.F]},{func:1,ret:P.r,args:[W.h]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationTimeline:J.a,AppBannerPromptResult:J.a,BarProp:J.a,Body:J.a,CacheStorage:J.a,CalcLength:J.a,CanvasPattern:J.a,CHROMIUMValuebuffer:J.a,CircularGeofencingRegion:J.a,Client:J.a,Clients:J.a,CompositorProxy:J.a,ConsoleBase:J.a,Coordinates:J.a,Credential:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMStringMap:J.a,EffectModel:J.a,Entry:J.a,FederatedCredential:J.a,FileEntry:J.a,FileError:J.a,Stream:J.a,DOMFileSystem:J.a,FontFace:J.a,FormData:J.a,GamepadButton:J.a,Geofencing:J.a,GeofencingRegion:J.a,Geolocation:J.a,Geoposition:J.a,Headers:J.a,HMDVRDevice:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageData:J.a,InjectedScriptHost:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,KeyframeEffect:J.a,KeywordValue:J.a,LengthValue:J.a,MediaDeviceInfo:J.a,MediaDevices:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaMetadata:J.a,MediaSession:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigatorStorageUtils:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NumberValue:J.a,OffscreenCanvas:J.a,PasswordCredential:J.a,PerformanceCompositeTiming:J.a,PerformanceEntry:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformanceRenderTiming:J.a,PerformanceResourceTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PositionError:J.a,PositionSensorVRDevice:J.a,PositionValue:J.a,Presentation:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,ReadableByteStream:J.a,ReadableByteStreamReader:J.a,ReadableStreamReader:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,Selection:J.a,ServicePort:J.a,SharedArrayBuffer:J.a,SimpleLength:J.a,SourceInfo:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StorageInfo:J.a,StorageManager:J.a,StorageQuota:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StyleValue:J.a,SyncManager:J.a,TextMetrics:J.a,TrackDefault:J.a,TransformValue:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRDevice:J.a,VREyeParameters:J.a,VRFieldOfView:J.a,VRPositionState:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkerConsole:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothAdvertisingData:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,NFC:J.a,PagePopupController:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WebKitCSSMatrix:J.a,Worklet:J.a,WorkletGlobalScope:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,CHROMIUMSubscribeUniform:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTDisjointTimerQuery:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bt,DataView:H.aN,ArrayBufferView:H.aN,Float32Array:H.cX,Float64Array:H.eE,Int16Array:H.eF,Int32Array:H.eG,Int8Array:H.eH,Uint16Array:H.eI,Uint32Array:H.eJ,Uint8ClampedArray:H.d0,CanvasPixelArray:H.d0,Uint8Array:H.eK,HTMLAudioElement:W.j,HTMLBRElement:W.j,HTMLBaseElement:W.j,HTMLButtonElement:W.j,HTMLContentElement:W.j,HTMLDListElement:W.j,HTMLDataListElement:W.j,HTMLDetailsElement:W.j,HTMLDialogElement:W.j,HTMLEmbedElement:W.j,HTMLFieldSetElement:W.j,HTMLHRElement:W.j,HTMLHeadingElement:W.j,HTMLHtmlElement:W.j,HTMLIFrameElement:W.j,HTMLImageElement:W.j,HTMLKeygenElement:W.j,HTMLLIElement:W.j,HTMLLabelElement:W.j,HTMLLegendElement:W.j,HTMLLinkElement:W.j,HTMLMapElement:W.j,HTMLMediaElement:W.j,HTMLMenuElement:W.j,HTMLMenuItemElement:W.j,HTMLMetaElement:W.j,HTMLMeterElement:W.j,HTMLModElement:W.j,HTMLOListElement:W.j,HTMLObjectElement:W.j,HTMLOptGroupElement:W.j,HTMLOptionElement:W.j,HTMLOutputElement:W.j,HTMLParagraphElement:W.j,HTMLParamElement:W.j,HTMLPictureElement:W.j,HTMLPreElement:W.j,HTMLProgressElement:W.j,HTMLQuoteElement:W.j,HTMLScriptElement:W.j,HTMLShadowElement:W.j,HTMLSlotElement:W.j,HTMLSourceElement:W.j,HTMLSpanElement:W.j,HTMLStyleElement:W.j,HTMLTableCaptionElement:W.j,HTMLTableCellElement:W.j,HTMLTableDataCellElement:W.j,HTMLTableHeaderCellElement:W.j,HTMLTableColElement:W.j,HTMLTextAreaElement:W.j,HTMLTitleElement:W.j,HTMLTrackElement:W.j,HTMLUListElement:W.j,HTMLUnknownElement:W.j,HTMLVideoElement:W.j,HTMLDirectoryElement:W.j,HTMLFontElement:W.j,HTMLFrameElement:W.j,HTMLMarqueeElement:W.j,HTMLElement:W.j,HTMLAnchorElement:W.dv,HTMLAreaElement:W.dw,AudioTrack:W.X,AudioTrackList:W.dz,Blob:W.bY,HTMLBodyElement:W.aF,HTMLCanvasElement:W.bZ,CanvasGradient:W.c_,CanvasRenderingContext2D:W.c0,CDATASection:W.aG,CharacterData:W.aG,Comment:W.aG,ProcessingInstruction:W.aG,Text:W.aG,CompositorWorker:W.dD,CSSCharsetRule:W.x,CSSFontFaceRule:W.x,CSSGroupingRule:W.x,CSSImportRule:W.x,CSSKeyframeRule:W.x,MozCSSKeyframeRule:W.x,WebKitCSSKeyframeRule:W.x,CSSKeyframesRule:W.x,MozCSSKeyframesRule:W.x,WebKitCSSKeyframesRule:W.x,CSSMediaRule:W.x,CSSNamespaceRule:W.x,CSSPageRule:W.x,CSSRule:W.x,CSSStyleRule:W.x,CSSSupportsRule:W.x,CSSViewportRule:W.x,CSSStyleDeclaration:W.b1,MSStyleCSSProperties:W.b1,CSS2Properties:W.b1,DataTransferItemList:W.dG,HTMLDivElement:W.c2,XMLDocument:W.bg,Document:W.bg,DocumentFragment:W.c3,ShadowRoot:W.c3,DOMException:W.dH,DOMImplementation:W.c4,DOMRectReadOnly:W.c5,DOMStringList:W.dI,DOMTokenList:W.dJ,Element:W.Z,AnimationEvent:W.i,AnimationPlayerEvent:W.i,ApplicationCacheErrorEvent:W.i,AutocompleteErrorEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceLightEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,GamepadEvent:W.i,GeofencingEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RelatedEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCIceCandidateEvent:W.i,RTCPeerConnectionIceEvent:W.i,SecurityPolicyViolationEvent:W.i,ServicePortConnectEvent:W.i,ServiceWorkerMessageEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,Animation:W.h,ApplicationCache:W.h,DOMApplicationCache:W.h,OfflineResourceList:W.h,BatteryManager:W.h,CanvasCaptureMediaStreamTrack:W.h,CrossOriginServiceWorkerClient:W.h,EventSource:W.h,FileReader:W.h,FontFaceSet:W.h,MediaKeySession:W.h,MediaQueryList:W.h,MediaRecorder:W.h,MediaSource:W.h,MediaStream:W.h,MediaStreamTrack:W.h,MessagePort:W.h,MIDIAccess:W.h,NetworkInformation:W.h,Notification:W.h,Performance:W.h,PermissionStatus:W.h,PresentationAvailability:W.h,PresentationReceiver:W.h,PresentationRequest:W.h,RTCDTMFSender:W.h,RTCPeerConnection:W.h,webkitRTCPeerConnection:W.h,mozRTCPeerConnection:W.h,ScreenOrientation:W.h,ServicePortCollection:W.h,ServiceWorkerContainer:W.h,ServiceWorkerRegistration:W.h,SpeechRecognition:W.h,SpeechSynthesis:W.h,SpeechSynthesisUtterance:W.h,WorkerPerformance:W.h,BluetoothDevice:W.h,BluetoothRemoteGATTCharacteristic:W.h,USB:W.h,IDBDatabase:W.h,IDBOpenDBRequest:W.h,IDBVersionChangeRequest:W.h,IDBRequest:W.h,IDBTransaction:W.h,AnalyserNode:W.h,RealtimeAnalyserNode:W.h,AudioBufferSourceNode:W.h,AudioContext:W.h,webkitAudioContext:W.h,AudioDestinationNode:W.h,AudioNode:W.h,AudioSourceNode:W.h,BiquadFilterNode:W.h,ChannelMergerNode:W.h,AudioChannelMerger:W.h,ChannelSplitterNode:W.h,AudioChannelSplitter:W.h,ConvolverNode:W.h,DelayNode:W.h,DynamicsCompressorNode:W.h,GainNode:W.h,AudioGainNode:W.h,IIRFilterNode:W.h,MediaElementAudioSourceNode:W.h,MediaStreamAudioDestinationNode:W.h,MediaStreamAudioSourceNode:W.h,OfflineAudioContext:W.h,OscillatorNode:W.h,Oscillator:W.h,PannerNode:W.h,AudioPannerNode:W.h,webkitAudioPannerNode:W.h,ScriptProcessorNode:W.h,JavaScriptAudioNode:W.h,StereoPannerNode:W.h,WaveShaperNode:W.h,EventTarget:W.h,File:W.a_,FileList:W.e4,FileWriter:W.e5,HTMLFormElement:W.e7,Gamepad:W.a0,HTMLHeadElement:W.c9,History:W.ea,HTMLCollection:W.bo,HTMLFormControlsCollection:W.bo,HTMLOptionsCollection:W.bo,HTMLDocument:W.ca,XMLHttpRequest:W.eb,XMLHttpRequestUpload:W.bp,XMLHttpRequestEventTarget:W.bp,HTMLInputElement:W.ef,KeyboardEvent:W.aL,Location:W.et,MediaList:W.ez,MIDIOutput:W.eB,MIDIInput:W.bs,MIDIPort:W.bs,MimeType:W.a2,MimeTypeArray:W.eC,PointerEvent:W.I,MouseEvent:W.I,DragEvent:W.I,Navigator:W.eL,Attr:W.p,Node:W.p,NodeIterator:W.d1,NodeList:W.by,RadioNodeList:W.by,Path2D:W.eU,Perspective:W.eX,Plugin:W.a3,PluginArray:W.eZ,PresentationConnection:W.f1,Range:W.d6,RTCDataChannel:W.d7,DataChannel:W.d7,HTMLSelectElement:W.fa,SharedWorker:W.fd,SourceBuffer:W.a4,SourceBufferList:W.fe,SpeechGrammar:W.a5,SpeechGrammarList:W.fg,SpeechRecognitionResult:W.a6,Storage:W.fl,CSSStyleSheet:W.R,StyleSheet:W.R,HTMLTableElement:W.db,HTMLTableRowElement:W.ft,HTMLTableSectionElement:W.fu,HTMLTemplateElement:W.bE,TextTrack:W.a7,TextTrackCue:W.S,VTTCue:W.S,TextTrackCueList:W.fx,TextTrackList:W.fy,TimeRanges:W.fA,Touch:W.a8,TouchEvent:W.aR,TouchList:W.fE,TrackDefaultList:W.fF,Matrix:W.av,Rotation:W.av,Skew:W.av,Translation:W.av,TransformComponent:W.av,TreeWalker:W.de,CompositionEvent:W.aw,FocusEvent:W.aw,TextEvent:W.aw,SVGZoomEvent:W.aw,UIEvent:W.aw,URL:W.fM,VideoTrackList:W.fO,VTTRegionList:W.fR,WebSocket:W.fS,WheelEvent:W.aT,Window:W.bG,DOMWindow:W.bG,Worker:W.fV,CompositorWorkerGlobalScope:W.aU,DedicatedWorkerGlobalScope:W.aU,ServiceWorkerGlobalScope:W.aU,SharedWorkerGlobalScope:W.aU,WorkerGlobalScope:W.aU,ClientRect:W.h2,ClientRectList:W.dj,DOMRectList:W.dj,CSSRuleList:W.h4,DocumentType:W.h5,DOMRect:W.h6,GamepadList:W.hn,HTMLFrameSetElement:W.ho,NamedNodeMap:W.dm,MozNamedAttrMap:W.dm,ServiceWorker:W.hH,SpeechRecognitionResultList:W.hK,StyleSheetList:W.hL,WorkerLocation:W.hS,WorkerNavigator:W.hT,SVGAElement:P.du,SVGAnimateElement:P.aE,SVGAnimateMotionElement:P.aE,SVGAnimateTransformElement:P.aE,SVGAnimationElement:P.aE,SVGSetElement:P.aE,SVGFEBlendElement:P.dP,SVGFEColorMatrixElement:P.dQ,SVGFEComponentTransferElement:P.dR,SVGFECompositeElement:P.dS,SVGFEConvolveMatrixElement:P.dT,SVGFEDiffuseLightingElement:P.dU,SVGFEDisplacementMapElement:P.dV,SVGFEFloodElement:P.dW,SVGFEGaussianBlurElement:P.dX,SVGFEImageElement:P.dY,SVGFEMergeElement:P.dZ,SVGFEMorphologyElement:P.e_,SVGFEOffsetElement:P.e0,SVGFESpecularLightingElement:P.e1,SVGFETileElement:P.e2,SVGFETurbulenceElement:P.e3,SVGFilterElement:P.e6,SVGCircleElement:P.G,SVGClipPathElement:P.G,SVGDefsElement:P.G,SVGEllipseElement:P.G,SVGForeignObjectElement:P.G,SVGGElement:P.G,SVGGeometryElement:P.G,SVGLineElement:P.G,SVGPathElement:P.G,SVGPolygonElement:P.G,SVGPolylineElement:P.G,SVGRectElement:P.G,SVGSwitchElement:P.G,SVGGraphicsElement:P.G,SVGImageElement:P.ec,SVGLength:P.aj,SVGLengthList:P.eo,SVGMarkerElement:P.ew,SVGMaskElement:P.ex,SVGNumber:P.al,SVGNumberList:P.eO,SVGPatternElement:P.eV,SVGPointList:P.f_,SVGScriptElement:P.bB,SVGStringList:P.fq,SVGDescElement:P.B,SVGDiscardElement:P.B,SVGFEDistantLightElement:P.B,SVGFEFuncAElement:P.B,SVGFEFuncBElement:P.B,SVGFEFuncGElement:P.B,SVGFEFuncRElement:P.B,SVGFEMergeNodeElement:P.B,SVGFEPointLightElement:P.B,SVGFESpotLightElement:P.B,SVGMetadataElement:P.B,SVGStopElement:P.B,SVGStyleElement:P.B,SVGTitleElement:P.B,SVGComponentTransferFunctionElement:P.B,SVGElement:P.B,SVGSVGElement:P.fr,SVGSymbolElement:P.fs,SVGTSpanElement:P.aQ,SVGTextElement:P.aQ,SVGTextPositioningElement:P.aQ,SVGTextContentElement:P.aQ,SVGTextPathElement:P.fw,SVGTransform:P.am,SVGTransformList:P.fG,SVGUseElement:P.fN,SVGViewElement:P.fP,SVGViewSpec:P.fQ,SVGLinearGradientElement:P.bI,SVGRadialGradientElement:P.bI,SVGGradientElement:P.bI,SVGCursorElement:P.hD,SVGFEDropShadowElement:P.hE,SVGMPathElement:P.hF,AudioBuffer:P.dy,WebGLRenderingContext:P.f7,WebGL2RenderingContext:P.f8,WebGL2RenderingContextBase:P.hR,SQLResultSetRowList:P.fh})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CalcLength:true,CanvasPattern:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,Credential:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMStringMap:true,EffectModel:true,Entry:true,FederatedCredential:true,FileEntry:true,FileError:true,Stream:true,DOMFileSystem:true,FontFace:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageData:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,KeywordValue:true,LengthValue:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NumberValue:true,OffscreenCanvas:true,PasswordCredential:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,PositionValue:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,ServicePort:true,SharedArrayBuffer:true,SimpleLength:true,SourceInfo:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,StyleValue:true,SyncManager:true,TextMetrics:true,TrackDefault:true,TransformValue:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,AudioTrack:true,AudioTrackList:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasGradient:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,CSSCharsetRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DocumentFragment:true,ShadowRoot:true,DOMException:true,DOMImplementation:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AudioDestinationNode:true,AudioNode:true,AudioSourceNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OfflineAudioContext:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Navigator:true,Attr:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Path2D:true,Perspective:true,Plugin:true,PluginArray:true,PresentationConnection:true,Range:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,SharedWorker:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,Matrix:true,Rotation:true,Skew:true,Translation:true,TransformComponent:false,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,SVGZoomEvent:true,UIEvent:false,URL:true,VideoTrackList:true,VTTRegionList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFESpecularLightingElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGEllipseElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRectElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGFEPointLightElement:true,SVGFESpotLightElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.cY.$nativeSuperclassTag="ArrayBufferView"
H.bu.$nativeSuperclassTag="ArrayBufferView"
H.bx.$nativeSuperclassTag="ArrayBufferView"
H.cZ.$nativeSuperclassTag="ArrayBufferView"
H.bv.$nativeSuperclassTag="ArrayBufferView"
H.bw.$nativeSuperclassTag="ArrayBufferView"
H.d_.$nativeSuperclassTag="ArrayBufferView"
W.bk.$nativeSuperclassTag="EventTarget"
W.bn.$nativeSuperclassTag="EventTarget"
W.bj.$nativeSuperclassTag="EventTarget"
W.bm.$nativeSuperclassTag="EventTarget"
W.bi.$nativeSuperclassTag="EventTarget"
W.bl.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.kn(R.kb(),b)},[])
else (function(b){H.kn(R.kb(),b)})([])})})()