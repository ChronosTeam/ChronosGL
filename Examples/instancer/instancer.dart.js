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
a[c]=function(){a[c]=function(){H.nn(b)}
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
return d?function(e){if(t===null)t=H.jr(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.jr(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.jr(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={jc:function jc(a){this.a=a},
mu:function(a,b,c,d){var t=new H.fT(a,b,c,[d])
t.du(a,b,c,d)
return t},
jh:function(a,b,c,d){if(!!a.$isc)return new H.e6(a,b,[c,d])
return new H.d6(a,b,[c,d])},
eJ:function(){return new P.as("No element")},
mf:function(){return new P.as("Too many elements")},
kc:function(){return new P.as("Too few elements")},
dp:function(a,b,c,d){if(c-b<=32)H.mt(a,b,c,d)
else H.ms(a,b,c,d)},
mt:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.a_(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.an(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
ms:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.d(t>32)
s=C.b.I(t+1,6)
r=a3+s
q=a4-s
p=C.b.I(a3+a4,2)
o=p-s
n=p+s
t=J.a_(a2)
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
H.dp(a2,a3,g-2,a5)
H.dp(a2,f+2,a4,a5)
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
break}}H.dp(a2,g,f,a5)}else H.dp(a2,g,f,a5)},
c:function c(){},
ba:function ba(){},
fT:function fT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
d5:function d5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
d6:function d6(a,b,c){this.a=a
this.b=b
this.$ti=c},
e6:function e6(a,b,c){this.a=a
this.b=b
this.$ti=c},
eU:function eU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bz:function bz(a,b,c){this.a=a
this.b=b
this.$ti=c},
dy:function dy(a,b,c){this.a=a
this.b=b
this.$ti=c},
hl:function hl(a,b,c){this.a=a
this.b=b
this.$ti=c},
cj:function cj(){},
dG:function(a,b){var t=a.af(b)
if(!u.globalState.d.cy)u.globalState.f.am()
return t},
iL:function(){--u.globalState.f.b
H.d(u.globalState.f.b>=0)},
l7:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.w(s).$isb)throw H.e(P.jP("Arguments to main must be a List: "+H.f(s)))
u.globalState=new H.hZ(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$ka()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.hB(P.jg(null,H.b1),0)
r=P.n
s.seO(new H.ag(0,null,null,null,null,null,0,[r,H.b0]))
s.seR(new H.ag(0,null,null,null,null,null,0,[r,null]))
if(s.x){q=new H.hY()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.ma,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.mJ)}if(u.globalState.x)return
s=u.globalState.a++
q=P.ah(null,null,null,r)
p=new H.bc(0,null,!1)
o=new H.b0(s,new H.ag(0,null,null,null,null,null,0,[r,H.bc]),q,u.createNewIsolate(),p,new H.ap(H.iR()),new H.ap(H.iR()),!1,!1,[],P.ah(null,null,null,null),null,null,!1,!0,P.ah(null,null,null,null))
q.l(0,0)
o.bz(0,p)
u.globalState.e=o
u.globalState.z.i(0,s,o)
u.globalState.d=o
if(H.bi(a,{func:1,args:[,]}))o.af(new H.iX(t,a))
else if(H.bi(a,{func:1,args:[,,]}))o.af(new H.iY(t,a))
else o.af(a)
u.globalState.f.am()},
mJ:function(a){var t=P.aT(["command","print","msg",a])
return new H.al(!0,P.bV(null,P.n)).J(t)},
mc:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.md()
return},
md:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.e(new P.v("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.e(new P.v('Cannot extract URI from "'+t+'"'))},
ma:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.b_(!0,[]).X(b.data)
s=J.a_(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.na(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.b_(!0,[]).X(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.b_(!0,[]).X(s.h(t,"replyTo"))
s=u.globalState.a++
k=P.n
j=P.ah(null,null,null,k)
i=new H.bc(0,null,!1)
h=new H.b0(s,new H.ag(0,null,null,null,null,null,0,[k,H.bc]),j,u.createNewIsolate(),i,new H.ap(H.iR()),new H.ap(H.iR()),!1,!1,[],P.ah(null,null,null,null),null,null,!1,!0,P.ah(null,null,null,null))
j.l(0,0)
h.bz(0,i)
u.globalState.f.a.U(0,new H.b1(h,new H.eG(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.am()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.lG(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.am()
break
case"close":u.globalState.ch.al(0,$.$get$kb().h(0,a))
a.terminate()
u.globalState.f.am()
break
case"log":H.m9(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
k=P.aT(["command","print","msg",t])
k=new H.al(!0,P.bV(null,P.n)).J(k)
s.toString
self.postMessage(k)}else P.am(s.h(t,"msg"))
break
case"error":throw H.e(s.h(t,"msg"))}},
m9:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aT(["command","log","msg",a])
r=new H.al(!0,P.bV(null,P.n)).J(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.P(q)
t=H.aH(q)
s=P.ci(t)
throw H.e(s)}},
mb:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.ki=$.ki+("_"+s)
$.kj=$.kj+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.H(0,["spawned",new H.bf(s,r),q,t.r])
r=new H.eH(a,b,c,d,t)
if(e){t.bT(q,q)
u.globalState.f.a.U(0,new H.b1(t,r,"start isolate"))}else r.$0()},
mv:function(a,b){var t=new H.h3(!0,!1,null)
t.dv(a,b)
return t},
mK:function(a){return new H.b_(!0,[]).X(new H.al(!1,P.bV(null,P.n)).J(a))},
iX:function iX(a,b){this.a=a
this.b=b},
iY:function iY(a,b){this.a=a
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
b0:function b0(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
b1:function b1(a,b,c){this.a=a
this.b=b
this.c=c},
hY:function hY(){},
eG:function eG(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eH:function eH(a,b,c,d,e){var _=this
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
bX:function bX(a,b,c){this.b=a
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
ap:function ap(a){this.a=a},
al:function al(a,b){this.a=a
this.b=b},
b_:function b_(a,b){this.a=a
this.b=b},
n3:function(a){return u.types[a]},
nc:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.w(a).$isq},
f:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.ay(a)
if(typeof t!=="string")throw H.e(H.T(a))
return t},
mq:function(a){var t,s,r
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
dk:function(a){var t,s,r,q,p,o,n,m
t=J.w(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.D||!!J.w(a).$isaX){p=C.v(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.e.aO(q,0)===36)q=C.e.d4(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.dJ(H.iz(a),0,null),u.mangledGlobalNames)},
fs:function(a){return"Instance of '"+H.dk(a)+"'"},
Q:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mo:function(a){return a.b?H.Q(a).getUTCFullYear()+0:H.Q(a).getFullYear()+0},
mm:function(a){return a.b?H.Q(a).getUTCMonth()+1:H.Q(a).getMonth()+1},
mi:function(a){return a.b?H.Q(a).getUTCDate()+0:H.Q(a).getDate()+0},
mj:function(a){return a.b?H.Q(a).getUTCHours()+0:H.Q(a).getHours()+0},
ml:function(a){return a.b?H.Q(a).getUTCMinutes()+0:H.Q(a).getMinutes()+0},
mn:function(a){return a.b?H.Q(a).getUTCSeconds()+0:H.Q(a).getSeconds()+0},
mk:function(a){return a.b?H.Q(a).getUTCMilliseconds()+0:H.Q(a).getMilliseconds()+0},
kh:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.T(a))
return a[b]},
N:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ae(!0,b,"index",null)
t=J.b4(a)
if(b<0||C.b.ba(b,t))return P.A(b,a,"index",null,t)
return P.ft(b,"index",null)},
T:function(a){return new P.ae(!0,a,null,null)},
e:function(a){var t
if(a==null)a=new P.dj()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.l8})
t.name=""}else t.toString=H.l8
return t},
l8:function(){return J.ay(this.dartException)},
D:function(a){throw H.e(a)},
E:function(a){throw H.e(new P.V(a))},
au:function(a){var t,s,r,q,p,o
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
kt:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
je:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.eN(a,s,t?null:b.receiver)},
P:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.iZ(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aX(r,16)&8191)===10)switch(q){case 438:return t.$1(H.je(H.f(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.f(s)+" (Error "+q+")"
return t.$1(new H.di(p,null))}}if(a instanceof TypeError){o=$.$get$kn()
n=$.$get$ko()
m=$.$get$kp()
l=$.$get$kq()
k=$.$get$ku()
j=$.$get$kv()
i=$.$get$ks()
$.$get$kr()
h=$.$get$kx()
g=$.$get$kw()
f=o.O(s)
if(f!=null)return t.$1(H.je(s,f))
else{f=n.O(s)
if(f!=null){f.method="call"
return t.$1(H.je(s,f))}else{f=m.O(s)
if(f==null){f=l.O(s)
if(f==null){f=k.O(s)
if(f==null){f=j.O(s)
if(f==null){f=i.O(s)
if(f==null){f=l.O(s)
if(f==null){f=h.O(s)
if(f==null){f=g.O(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.di(s,f==null?null:f.method))}}return t.$1(new H.hd(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.dr()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.ae(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.dr()
return a},
aH:function(a){var t
if(a==null)return new H.dE(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dE(a,null)},
ng:function(a){if(a==null||typeof a!='object')return J.ao(a)
else return H.aV(a)},
n1:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=a.length
for(r=0;r<s;){q=r+1
H.d(t)
p=a[r]
r=q+1
H.d(t)
b.i(0,p,a[q])}return b},
nb:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dG(b,new H.iG(a))
case 1:return H.dG(b,new H.iH(a,d))
case 2:return H.dG(b,new H.iI(a,d,e))
case 3:return H.dG(b,new H.iJ(a,d,e,f))
case 4:return H.dG(b,new H.iK(a,d,e,f,g))}throw H.e(P.ci("Unsupported number of arguments for wrapped closure"))},
c0:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.nb)
a.$identity=t
return t},
lY:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.w(c).$isb){t.$reflectionInfo=c
r=H.mq(t).r}else r=c
q=d?Object.create(new H.fK().constructor.prototype):Object.create(new H.bm(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.jY(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.n3,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.jV:H.j7
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.e("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.jY(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
lV:function(a,b,c,d){var t=H.j7
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
jY:function(a,b,c){var t,s,r,q
if(c)return H.lX(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.lV(s,b==null?r!=null:b!==r,t,b)
return q},
lW:function(a,b,c,d){var t,s
t=H.j7
s=H.jV
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
lX:function(a,b){var t,s,r,q
H.lU()
t=$.jU
if(t==null){t=H.jT("receiver")
$.jU=t}s=b.$stubName
r=b.length
q=a[s]
t=H.lW(r,b==null?q!=null:b!==q,s,b)
return t},
jr:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.w(c).$isb){c.fixed$length=Array
t=c}else t=c
return H.lY(a,b,t,!!d,e,f)},
j7:function(a){return a.a},
jV:function(a){return a.c},
lU:function(){var t=$.jW
if(t==null){t=H.jT("self")
$.jW=t}return t},
jT:function(a){var t,s,r,q,p
t=new H.bm("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
nB:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.av(a,"String"))},
Z:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.av(a,"double"))},
nA:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.av(a,"num"))},
mW:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.av(a,"bool"))},
na:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.av(a,"int"))},
ni:function(a,b){throw H.e(H.av(a,b.substring(3)))},
nh:function(a,b){var t=J.a_(b)
throw H.e(H.jX(H.dk(a),t.bo(b,3,t.gj(b))))},
ju:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.w(a)[b])return a
H.ni(a,b)},
aJ:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.w(a)[b]
else t=!0
if(t)return a
H.nh(a,b)},
nz:function(a){if(a==null)return a
if(!!J.w(a).$isb)return a
throw H.e(H.av(a,"List"))},
kS:function(a){var t=J.w(a)
return"$S" in t?t.$S():null},
bi:function(a,b){var t
if(a==null)return!1
t=H.kS(a)
return t==null?!1:H.l1(t,b)},
nx:function(a,b){var t,s
if(a==null)return a
if($.jo)return a
$.jo=!0
try{if(H.bi(a,b))return a
t=H.aK(b,null)
s=H.av(a,t)
throw H.e(s)}finally{$.jo=!1}},
av:function(a,b){return new H.hc("type '"+H.dk(a)+"' is not a subtype of type '"+b+"'")},
jX:function(a,b){return new H.dU("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
aG:function(a){if(!0===a)return!1
if(!!J.w(a).$isja)a=a.$0()
if(typeof a==="boolean")return!a
throw H.e(H.av(a,"bool"))},
b3:function(a){throw H.e(new H.ho(a))},
d:function(a){if(H.aG(a))throw H.e(new P.c7(null))},
nn:function(a){throw H.e(new P.dY(a))},
iR:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
kW:function(a){return u.getIsolateTag(a)},
K:function(a){return new H.aD(a,null)},
B:function(a,b){H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
iz:function(a){if(a==null)return
return a.$ti},
kX:function(a,b){return H.jz(a["$as"+H.f(b)],H.iz(a))},
a0:function(a,b,c){var t,s
t=H.kX(a,b)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
aI:function(a,b){var t,s
t=H.iz(a)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
aK:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.d(!0)
H.d(!0)
return a[0].name+H.dJ(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.f(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aK(t,b)
return H.mL(a,b)}return"unknown-reified-type"},
mL:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aK(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aK(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aK(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.n0(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aK(l[j],b)+(" "+H.f(j))}q+="}"}return"("+q+") => "+t},
dJ:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=new P.bL("")
for(r=b,q=!0,p=!0;H.d(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.d(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aK(o,c)}return p?"":"<"+s.k(0)+">"},
iA:function(a){var t,s
if(a instanceof H.b6){t=H.kS(a)
if(t!=null)return H.aK(t,null)}s=J.w(a).constructor.name
if(a==null)return s
return s+H.dJ(a.$ti,0,null)},
jz:function(a,b){if(a==null)return b
H.d(typeof a=="function")
H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.jv(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.jv(a,null,b)
return b},
dH:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.iz(a)
s=J.w(a)
if(s[b]==null)return!1
return H.kP(H.jz(s[d],t),c)},
dK:function(a,b,c,d){if(a==null)return a
if(H.dH(a,b,c,d))return a
throw H.e(H.jX(H.dk(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dJ(c,0,null),u.mangledGlobalNames)))},
nu:function(a,b,c,d){if(a==null)return a
if(H.dH(a,b,c,d))return a
throw H.e(H.av(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dJ(c,0,null),u.mangledGlobalNames)))},
kP:function(a,b){var t,s,r,q,p
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
nv:function(a,b,c){return H.jv(a,b,H.kX(b,c))},
a1:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.name==="aU")return!0
if('func' in b)return H.l1(a,b)
if('func' in a)return b.name==="ja"||b.name==="o"
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
return H.kP(H.jz(o,t),r)},
kO:function(a,b,c){var t,s,r,q,p,o,n
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
mS:function(a,b){var t,s,r,q,p,o
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
l1:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
if(n===m){if(!H.kO(r,q,!1))return!1
if(!H.kO(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.d(j)
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
if(!(H.a1(g,f)||H.a1(f,g)))return!1}}return H.mS(a.named,b.named)},
jv:function(a,b,c){H.d(typeof a=="function")
H.d(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
nC:function(a){var t=$.js
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
ny:function(a){return H.aV(a)},
nw:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nd:function(a){var t,s,r,q,p,o
H.d(!(a instanceof P.o))
t=$.js.$1(a)
s=$.ix[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iF[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.kN.$2(a,t)
if(t!=null){s=$.ix[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iF[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.jw(r)
$.ix[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.iF[t]=r
return r}if(p==="-"){o=H.jw(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.l3(a,r)
if(p==="*")throw H.e(new P.dx(t))
if(u.leafTags[t]===true){o=H.jw(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.l3(a,r)},
l3:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.iO(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
jw:function(a){return J.iO(a,!1,null,!!a.$isq)},
nf:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.iO(t,!1,null,!!t.$isq)
else return J.iO(t,c,null,null)},
n8:function(){if(!0===$.jt)return
$.jt=!0
H.n9()},
n9:function(){var t,s,r,q,p,o,n,m
$.ix=Object.create(null)
$.iF=Object.create(null)
H.n7()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.l6.$1(p)
if(o!=null){n=H.nf(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
n7:function(){var t,s,r,q,p,o,n
t=C.H()
t=H.bh(C.E,H.bh(C.J,H.bh(C.u,H.bh(C.u,H.bh(C.I,H.bh(C.F,H.bh(C.G(C.v),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.js=new H.iC(p)
$.kN=new H.iD(o)
$.l6=new H.iE(n)},
bh:function(a,b){return a(b)||b},
nm:function(a,b,c){var t=a.indexOf(b,c)
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
di:function di(a,b){this.a=a
this.b=b},
eN:function eN(a,b,c){this.a=a
this.b=b
this.c=c},
hd:function hd(a){this.a=a},
iZ:function iZ(a){this.a=a},
dE:function dE(a,b){this.a=a
this.b=b},
iG:function iG(a){this.a=a},
iH:function iH(a,b){this.a=a
this.b=b},
iI:function iI(a,b,c){this.a=a
this.b=b
this.c=c},
iJ:function iJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iK:function iK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
b6:function b6(){},
fY:function fY(){},
fK:function fK(){},
bm:function bm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hc:function hc(a){this.a=a},
dU:function dU(a){this.a=a},
fC:function fC(a){this.a=a},
ho:function ho(a){this.a=a},
aD:function aD(a,b){this.a=a
this.b=b},
ag:function ag(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
eM:function eM(a){this.a=a},
eP:function eP(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
eQ:function eQ(a,b){this.a=a
this.$ti=b},
eR:function eR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
iC:function iC(a){this.a=a},
iD:function iD(a){this.a=a},
iE:function iE(a){this.a=a},
r:function(a){return a},
ip:function(a){var t,s,r
if(!!J.w(a).$ism)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
bB:function bB(){},
bb:function bb(){},
f1:function f1(){},
da:function da(){},
db:function db(){},
dc:function dc(){},
d9:function d9(){},
f2:function f2(){},
f3:function f3(){},
f4:function f4(){},
f5:function f5(){},
f6:function f6(){},
f7:function f7(){},
dd:function dd(){},
f8:function f8(){},
bC:function bC(){},
bD:function bD(){},
bE:function bE(){},
bF:function bF(){},
n0:function(a){var t=H.B(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
iQ:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
w:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d3.prototype
return J.d2.prototype}if(typeof a=="string")return J.aQ.prototype
if(a==null)return J.eL.prototype
if(typeof a=="boolean")return J.eK.prototype
if(a.constructor==Array)return J.aP.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aR.prototype
return a}if(a instanceof P.o)return a
return J.iy(a)},
iO:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iy:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.jt==null){H.n8()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.e(new P.dx("Return interceptor for "+H.f(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$jd()]
if(p!=null)return p
p=H.nd(a)
if(p!=null)return p
if(typeof a=="function")return C.K
s=Object.getPrototypeOf(a)
if(s==null)return C.x
if(s===Object.prototype)return C.x
if(typeof q=="function"){Object.defineProperty(q,$.$get$jd(),{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
a_:function(a){if(typeof a=="string")return J.aQ.prototype
if(a==null)return a
if(a.constructor==Array)return J.aP.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aR.prototype
return a}if(a instanceof P.o)return a
return J.iy(a)},
c2:function(a){if(a==null)return a
if(a.constructor==Array)return J.aP.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aR.prototype
return a}if(a instanceof P.o)return a
return J.iy(a)},
kU:function(a){if(typeof a=="number")return J.b9.prototype
if(a==null)return a
if(!(a instanceof P.o))return J.aX.prototype
return a},
n2:function(a){if(typeof a=="number")return J.b9.prototype
if(typeof a=="string")return J.aQ.prototype
if(a==null)return a
if(!(a instanceof P.o))return J.aX.prototype
return a},
kV:function(a){if(typeof a=="string")return J.aQ.prototype
if(a==null)return a
if(!(a instanceof P.o))return J.aX.prototype
return a},
k:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aR.prototype
return a}if(a instanceof P.o)return a
return J.iy(a)},
F:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.w(a).v(a,b)},
an:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.kU(a).ao(a,b)},
l9:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kU(a).aF(a,b)},
bj:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nc(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.a_(a).h(a,b)},
la:function(a,b,c,d){return J.k(a).dH(a,b,c,d)},
jA:function(a,b){return J.kV(a).aO(a,b)},
bk:function(a,b){return J.k(a).e_(a,b)},
lb:function(a,b,c){return J.k(a).e0(a,b,c)},
jB:function(a,b){return J.k(a).bS(a,b)},
j_:function(a,b){return J.k(a).R(a,b)},
jC:function(a,b,c){return J.k(a).bV(a,b,c)},
lc:function(a,b){return J.k(a).ef(a,b)},
dL:function(a,b,c){return J.k(a).bW(a,b,c)},
ld:function(a,b,c){return J.k(a).bX(a,b,c)},
c5:function(a,b,c){return J.k(a).bY(a,b,c)},
dM:function(a,b){return J.k(a).ei(a,b)},
le:function(a,b){return J.k(a).bZ(a,b)},
lf:function(a,b,c){return J.k(a).c_(a,b,c)},
jD:function(a,b,c,d){return J.k(a).c0(a,b,c,d)},
lg:function(a,b){return J.c2(a).c2(a,b)},
lh:function(a,b,c,d,e){return J.k(a).c3(a,b,c,d,e)},
li:function(a,b){return J.n2(a).S(a,b)},
j0:function(a,b,c){return J.a_(a).em(a,b,c)},
j1:function(a){return J.k(a).c6(a)},
lj:function(a){return J.k(a).c7(a)},
lk:function(a){return J.k(a).ca(a)},
jE:function(a){return J.k(a).es(a)},
ll:function(a,b){return J.k(a).cb(a,b)},
j2:function(a,b){return J.k(a).cc(a,b)},
lm:function(a,b,c,d){return J.k(a).cd(a,b,c,d)},
ln:function(a,b,c,d,e){return J.k(a).eA(a,b,c,d,e)},
lo:function(a,b,c,d,e){return J.k(a).ce(a,b,c,d,e)},
lp:function(a,b,c,d,e,f){return J.k(a).eB(a,b,c,d,e,f)},
jF:function(a,b){return J.c2(a).q(a,b)},
c6:function(a,b){return J.k(a).cf(a,b)},
lq:function(a,b){return J.k(a).cg(a,b)},
lr:function(a){return J.k(a).eC(a)},
ls:function(a,b){return J.c2(a).ax(a,b)},
lt:function(a){return J.k(a).gee(a)},
ao:function(a){return J.w(a).gu(a)},
bl:function(a){return J.c2(a).gw(a)},
b4:function(a){return J.a_(a).gj(a)},
lu:function(a){return J.k(a).gb4(a)},
lv:function(a){return J.w(a).gA(a)},
lw:function(a){return J.k(a).gf1(a)},
lx:function(a){return J.k(a).gaC(a)},
j3:function(a){return J.k(a).gm(a)},
j4:function(a){return J.k(a).gn(a)},
jG:function(a){return J.k(a).gK(a)},
j5:function(a,b){return J.k(a).a6(a,b)},
ly:function(a){return J.k(a).aE(a)},
lz:function(a){return J.k(a).bc(a)},
lA:function(a,b){return J.k(a).be(a,b)},
lB:function(a,b,c){return J.k(a).bf(a,b,c)},
jH:function(a,b,c){return J.k(a).bi(a,b,c)},
lC:function(a,b){return J.k(a).cj(a,b)},
lD:function(a,b){return J.c2(a).cl(a,b)},
lE:function(a,b,c){return J.k(a).cn(a,b,c)},
lF:function(a){return J.c2(a).eW(a)},
lG:function(a,b){return J.k(a).H(a,b)},
lH:function(a,b,c,d){return J.k(a).bn(a,b,c,d)},
lI:function(a,b,c,d,e,f,g){return J.k(a).cr(a,b,c,d,e,f,g)},
lJ:function(a,b,c,d){return J.k(a).cs(a,b,c,d)},
jI:function(a,b,c,d){return J.k(a).ct(a,b,c,d)},
lK:function(a){return J.kV(a).f3(a)},
ay:function(a){return J.w(a).k(a)},
lL:function(a,b,c,d){return J.k(a).f5(a,b,c,d)},
lM:function(a,b,c){return J.k(a).cw(a,b,c)},
lN:function(a,b,c){return J.k(a).cz(a,b,c)},
j6:function(a,b,c){return J.k(a).cA(a,b,c)},
lO:function(a,b,c){return J.k(a).cB(a,b,c)},
jJ:function(a,b,c){return J.k(a).cC(a,b,c)},
jK:function(a,b,c){return J.k(a).cD(a,b,c)},
jL:function(a,b,c){return J.k(a).cE(a,b,c)},
jM:function(a,b,c,d){return J.k(a).cF(a,b,c,d)},
jN:function(a,b,c,d){return J.k(a).cG(a,b,c,d)},
lP:function(a,b){return J.k(a).cI(a,b)},
lQ:function(a,b,c){return J.k(a).f6(a,b,c)},
jO:function(a,b,c,d,e,f,g){return J.k(a).cK(a,b,c,d,e,f,g)},
lR:function(a,b,c,d,e){return J.k(a).cL(a,b,c,d,e)},
a:function a(){},
eK:function eK(){},
eL:function eL(){},
by:function by(){},
fm:function fm(){},
aX:function aX(){},
aR:function aR(){},
aP:function aP(a){this.$ti=a},
jb:function jb(a){this.$ti=a},
dQ:function dQ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b9:function b9(){},
d3:function d3(){},
d2:function d2(){},
aQ:function aQ(){}},P={
mz:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.mT()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.c0(new P.hq(t),1)).observe(s,{childList:true})
return new P.hp(t,s,r)}else if(self.setImmediate!=null)return P.mU()
return P.mV()},
mA:function(a){++u.globalState.f.b
self.scheduleImmediate(H.c0(new P.hr(a),0))},
mB:function(a){++u.globalState.f.b
self.setImmediate(H.c0(new P.hs(a),0))},
mC:function(a){P.jj(C.r,a)},
mO:function(a,b){if(H.bi(a,{func:1,args:[P.aU,P.aU]})){b.toString
return a}else{b.toString
return a}},
mE:function(a,b){var t,s,r
H.d(b.a<4)
H.d(!(a instanceof P.aw))
H.d(b.a===0)
b.a=1
try{a.cv(new P.hI(b),new P.hJ(b))}catch(r){t=H.P(r)
s=H.aH(r)
P.nj(new P.hK(b,t,s))}},
kE:function(a,b){var t,s,r,q
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
P.bR(b,q)}else{q=b.c
H.d(s<=1)
b.a=2
b.c=a
a.bL(q)}},
bR:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.bR(t.a,b)}s=t.a
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
return}s=$.C
if(s==null?l!=null:s!==l){H.d(l!=null)
s=$.C
H.d(l==null?s!=null:l!==s)
j=$.C
$.C=l
i=j}else i=null
s=b.c
if(s===8)new P.hO(t,r,q,b).$0()
else if(p){if((s&1)!==0)new P.hN(r,b,m).$0()}else if((s&2)!==0)new P.hM(t,r,b).$0()
if(i!=null){H.d(!0)
$.C=i}s=r.b
if(!!J.w(s).$isey){if(s.a>=4){H.d(o.a<4)
h=o.c
o.c=null
b=o.ad(h)
H.d(o.a<4)
H.d(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.kE(s,o)
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
mN:function(){var t,s
for(;t=$.bg,t!=null;){$.bZ=null
s=t.b
$.bg=s
if(s==null)$.bY=null
t.a.$0()}},
mR:function(){$.jp=!0
try{P.mN()}finally{$.bZ=null
$.jp=!1
if($.bg!=null)$.$get$jl().$1(P.kQ())}},
kL:function(a){var t=new P.dz(a,null)
if($.bg==null){$.bY=t
$.bg=t
if(!$.jp)$.$get$jl().$1(P.kQ())}else{$.bY.b=t
$.bY=t}},
mQ:function(a){var t,s,r
t=$.bg
if(t==null){P.kL(a)
$.bZ=$.bY
return}s=new P.dz(a,null)
r=$.bZ
if(r==null){s.b=t
$.bZ=s
$.bg=s}else{s.b=r.b
r.b=s
$.bZ=s
if(s.b==null)$.bY=s}},
nj:function(a){var t=$.C
if(C.d===t){P.is(null,null,C.d,a)
return}t.toString
P.is(null,null,t,t.b0(a))},
mw:function(a,b){var t=$.C
if(t===C.d){t.toString
return P.jj(a,b)}return P.jj(a,t.b0(b))},
jj:function(a,b){var t=C.b.I(a.a,1000)
return H.mv(t<0?0:t,b)},
jk:function(a){var t,s
H.d(a!=null)
t=$.C
H.d(a==null?t!=null:a!==t)
s=$.C
$.C=a
return s},
iq:function(a,b,c,d,e){var t={}
t.a=d
P.mQ(new P.ir(t,e))},
kJ:function(a,b,c,d){var t,s
if($.C===c)return d.$0()
t=P.jk(c)
try{s=d.$0()
return s}finally{s=t
H.d(s!=null)
$.C=s}},
kK:function(a,b,c,d,e){var t,s
if($.C===c)return d.$1(e)
t=P.jk(c)
try{s=d.$1(e)
return s}finally{s=t
H.d(s!=null)
$.C=s}},
mP:function(a,b,c,d,e,f){var t,s
if($.C===c)return d.$2(e,f)
t=P.jk(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.d(s!=null)
$.C=s}},
is:function(a,b,c,d){var t=C.d!==c
if(t)d=!(!t||!1)?c.b0(d):c.eg(d)
P.kL(d)},
hq:function hq(a){this.a=a},
hp:function hp(a,b,c){this.a=a
this.b=b
this.c=c},
hr:function hr(a){this.a=a},
hs:function hs(a){this.a=a},
hw:function hw(){},
ig:function ig(a,b){this.a=a
this.$ti=b},
dB:function dB(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
aw:function aw(a,b,c,d){var _=this
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
dz:function dz(a,b){this.a=a
this.b=b},
fO:function fO(){},
fQ:function fQ(a){this.a=a},
fR:function fR(a,b){this.a=a
this.b=b},
fP:function fP(){},
b5:function b5(a,b){this.a=a
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
ke:function(a,b){return new H.ag(0,null,null,null,null,null,0,[a,b])},
I:function(){return new H.ag(0,null,null,null,null,null,0,[null,null])},
aT:function(a){return H.n1(a,new H.ag(0,null,null,null,null,null,0,[null,null]))},
bV:function(a,b){return new P.dC(0,null,null,null,null,null,0,[a,b])},
mI:function(){var t=Object.create(null)
H.d(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
me:function(a,b,c){var t,s
if(P.jq(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$c_()
C.a.l(s,a)
try{P.mM(a,t)}finally{H.d(C.a.gaA(s)===a)
s.pop()}s=P.km(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eI:function(a,b,c){var t,s,r
if(P.jq(a))return b+"..."+c
t=new P.bL(b)
s=$.$get$c_()
C.a.l(s,a)
try{r=t
r.a=P.km(r.ga3(),a,", ")}finally{H.d(C.a.gaA(s)===a)
s.pop()}s=t
s.a=s.ga3()+c
s=t.ga3()
return s.charCodeAt(0)==0?s:s},
jq:function(a){var t,s
for(t=0;s=$.$get$c_(),t<s.length;++t)if(a===s[t])return!0
return!1},
mM:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gw(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.p())return
q=H.f(t.gt())
C.a.l(b,q)
s+=q.length+2;++r}if(!t.p()){if(r<=5)return
p=b.pop()
o=b.pop()}else{n=t.gt();++r
if(!t.p()){if(r<=4){C.a.l(b,H.f(n))
return}p=H.f(n)
o=b.pop()
s+=p.length+2}else{m=t.gt();++r
H.d(r<100)
for(;t.p();n=m,m=l){l=t.gt();++r
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
ah:function(a,b,c,d){return new P.hV(0,null,null,null,null,null,0,[d])},
jf:function(a,b){var t,s
t=P.ah(null,null,null,b)
for(s=J.bl(a);s.p();)t.l(0,s.gt())
return t},
mg:function(a){var t,s,r
t={}
if(P.jq(a))return"{...}"
s=new P.bL("")
try{C.a.l($.$get$c_(),a)
r=s
r.a=r.ga3()+"{"
t.a=!0
a.ax(0,new P.eV(t,s))
t=s
t.a=t.ga3()+"}"}finally{t=$.$get$c_()
H.d(C.a.gaA(t)===a)
t.pop()}t=s.ga3()
return t.charCodeAt(0)==0?t:t},
jg:function(a,b){var t=new P.eS(null,0,0,0,[b])
t.dm(a,b)
return t},
dC:function dC(a,b,c,d,e,f,g,h){var _=this
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
bU:function bU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hS:function hS(){},
d4:function d4(){},
x:function x(){},
eV:function eV(a,b){this.a=a
this.b=b},
eS:function eS(a,b,c,d,e){var _=this
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
bH:function bH(){},
km:function(a,b,c){var t=J.bl(b)
if(!t.p())return a
if(c.length===0){do a+=H.f(t.gt())
while(t.p())}else{a+=H.f(t.gt())
for(;t.p();)a=a+c+H.f(t.gt())}return a},
lZ:function(a,b){return J.li(a,b)},
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
cc:function(a){if(a>=10)return""+a
return"0"+a},
j9:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ay(a)
if(typeof a==="string")return JSON.stringify(a)
return P.m4(a)},
m4:function(a){var t=J.w(a)
if(!!t.$isb6)return t.k(a)
return H.fs(a)},
jP:function(a){return new P.ae(!1,null,null,a)},
jQ:function(a,b,c){return new P.ae(!0,a,b,c)},
lT:function(a){return new P.ae(!1,null,a,"Must not be null")},
ft:function(a,b,c){return new P.dm(null,null,!0,a,b,"Value not in range")},
ai:function(a,b,c,d,e){return new P.dm(b,c,!0,a,d,"Invalid value")},
ji:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.ai(a,0,c,"start",f))
if(a>b||b>c)throw H.e(P.ai(b,a,c,"end",f))
return b},
A:function(a,b,c,d,e){var t=e!=null?e:J.b4(b)
return new P.eE(b,t,!0,a,c,"Index out of range")},
ci:function(a){return new P.hG(a)},
kf:function(a,b,c){var t,s
t=H.B([],[c])
for(s=J.bl(a);s.p();)C.a.l(t,s.gt())
if(b)return t
t.fixed$length=Array
return t},
am:function(a){H.iQ(H.f(a))},
ax:function ax(){},
H:function H(){},
bn:function bn(a,b){this.a=a
this.b=b},
L:function L(){},
aO:function aO(a){this.a=a},
e4:function e4(){},
e5:function e5(){},
b8:function b8(){},
c7:function c7(a){this.a=a},
dj:function dj(){},
ae:function ae(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dm:function dm(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eE:function eE(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
v:function v(a){this.a=a},
dx:function dx(a){this.a=a},
as:function as(a){this.a=a},
V:function V(a){this.a=a},
dr:function dr(){},
dY:function dY(a){this.a=a},
hG:function hG(a){this.a=a},
e7:function e7(a,b,c){this.a=a
this.b=b
this.$ti=c},
n:function n(){},
W:function W(){},
d1:function d1(){},
b:function b(){},
aB:function aB(){},
aU:function aU(){},
U:function U(){},
o:function o(){},
bK:function bK(){},
u:function u(){},
bL:function bL(a){this.a=a},
iv:function(a){var t,s,r,q,p
if(a==null)return
t=P.I()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.E)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
mZ:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.ls(a,new P.iu(t))
return t},
k4:function(){var t=$.k3
if(t==null){t=J.j0(window.navigator.userAgent,"Opera",0)
$.k3=t}return t},
m1:function(){var t,s
t=$.k0
if(t!=null)return t
s=$.k1
if(s==null){s=J.j0(window.navigator.userAgent,"Firefox",0)
$.k1=s}if(s)t="-moz-"
else{s=$.k2
if(s==null){s=!P.k4()&&J.j0(window.navigator.userAgent,"Trident/",0)
$.k2=s}if(s)t="-ms-"
else t=P.k4()?"-o-":"-webkit-"}$.k0=t
return t},
iu:function iu(a){this.a=a},
hU:function hU(){},
i0:function i0(){},
J:function J(){},
dN:function dN(){},
aL:function aL(){},
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
ep:function ep(){},
et:function et(){},
ev:function ev(){},
af:function af(){},
aA:function aA(){},
eC:function eC(){},
aq:function aq(){},
eO:function eO(){},
eW:function eW(){},
eX:function eX(){},
ar:function ar(){},
fc:function fc(){},
fj:function fj(){},
fo:function fo(){},
fp:function fp(){},
fu:function fu(){},
fv:function fv(){},
bJ:function bJ(){},
fS:function fS(){},
G:function G(){},
fU:function fU(){},
fV:function fV(){},
dt:function dt(){},
fZ:function fZ(){},
bN:function bN(){},
at:function at(){},
h8:function h8(){},
hf:function hf(){},
hh:function hh(){},
hi:function hi(){},
bS:function bS(){},
i5:function i5(){},
i6:function i6(){},
i7:function i7(){},
cq:function cq(){},
co:function co(){},
cv:function cv(){},
cz:function cz(){},
cK:function cK(){},
cS:function cS(){},
cO:function cO(){},
cQ:function cQ(){},
dR:function dR(){},
fz:function fz(){},
fA:function fA(){},
ik:function ik(){},
fJ:function fJ(){},
cp:function cp(){},
cM:function cM(){}},W={
m2:function(a,b,c){var t,s
t=document.body
s=(t&&C.h).N(t,a,b,c)
s.toString
t=new H.dy(new W.R(s),new W.it(),[W.t])
return t.ga2(t)},
m3:function(a){return"wheel"},
bp:function(a){var t,s,r
t="element tag unavailable"
try{s=J.lw(a)
if(typeof s==="string")t=a.tagName}catch(r){H.P(r)}return t},
mD:function(a,b){return document.createElement(a)},
b2:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kH:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ak:function(a,b,c,d,e){var t=c==null?null:W.kM(new W.hF(c))
t=new W.hE(0,a,b,t,!1,[e])
t.dC(a,b,c,!1,e)
return t},
kF:function(a){var t,s
t=document.createElement("a")
s=new W.i8(t,window.location)
s=new W.bT(s)
s.dD(a)
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
kI:function(){var t=P.u
t=new W.ih(P.jf(C.l,t),P.ah(null,null,null,t),P.ah(null,null,null,t),P.ah(null,null,null,t),null)
t.dF(null,new H.bz(C.l,new W.ii(),[H.aI(C.l,0),null]),["TEMPLATE"],null)
return t},
kM:function(a){var t=$.C
if(t===C.d)return a
return t.eh(a)},
l:function l(){},
dO:function dO(){},
dP:function dP(){},
a2:function a2(){},
dS:function dS(){},
c8:function c8(){},
aM:function aM(){},
c9:function c9(){},
ca:function ca(){},
cb:function cb(){},
aN:function aN(){},
dW:function dW(){},
y:function y(){},
b7:function b7(){},
dX:function dX(){},
dZ:function dZ(){},
e_:function e_(){},
cd:function cd(){},
bo:function bo(){},
ce:function ce(){},
e0:function e0(){},
cf:function cf(){},
e1:function e1(){},
cg:function cg(){},
ch:function ch(){},
e2:function e2(){},
e3:function e3(){},
a3:function a3(){},
it:function it(){},
j:function j(){},
h:function h(){},
a4:function a4(){},
er:function er(){},
es:function es(){},
ew:function ew(){},
a5:function a5(){},
cl:function cl(){},
eA:function eA(){},
bw:function bw(){},
cm:function cm(){},
eB:function eB(){},
bx:function bx(){},
eF:function eF(){},
aS:function aS(){},
eT:function eT(){},
eY:function eY(){},
eZ:function eZ(){},
bA:function bA(){},
a6:function a6(){},
f_:function f_(){},
M:function M(){},
f9:function f9(){},
R:function R(a){this.a=a},
t:function t(){},
df:function df(){},
bG:function bG(){},
fi:function fi(){},
fl:function fl(){},
a7:function a7(){},
fn:function fn(){},
fq:function fq(){},
fr:function fr(){},
dl:function dl(){},
fB:function fB(){},
dn:function dn(){},
fD:function fD(){},
fG:function fG(){},
a8:function a8(){},
fH:function fH(){},
a9:function a9(){},
fI:function fI(){},
aa:function aa(){},
fN:function fN(){},
X:function X(){},
aj:function aj(){},
ds:function ds(){},
fW:function fW(){},
fX:function fX(){},
bM:function bM(){},
ab:function ab(){},
Y:function Y(){},
h_:function h_(){},
h0:function h0(){},
h2:function h2(){},
ac:function ac(){},
aW:function aW(){},
h6:function h6(){},
h7:function h7(){},
be:function be(){},
h9:function h9(){},
dv:function dv(){},
aE:function aE(){},
he:function he(){},
hg:function hg(){},
hj:function hj(){},
hk:function hk(){},
aY:function aY(){},
bQ:function bQ(){},
hm:function hm(a){this.a=a},
hn:function hn(){},
aZ:function aZ(){},
hv:function hv(){},
dA:function dA(){},
hx:function hx(){},
hy:function hy(){},
hz:function hz(){},
hQ:function hQ(){},
hR:function hR(){},
dD:function dD(){},
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
jm:function jm(a,b,c,d){var _=this
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
bT:function bT(a){this.a=a},
z:function z(){},
dh:function dh(a){this.a=a},
fb:function fb(a){this.a=a},
fa:function fa(a,b,c){this.a=a
this.b=b
this.c=c},
bW:function bW(){},
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
ck:function ck(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
dg:function dg(){},
i8:function i8(a,b){this.a=a
this.b=b},
dF:function dF(a){this.a=a},
ij:function ij(a){this.a=a},
bq:function bq(){},
br:function br(){},
bs:function bs(){},
bt:function bt(){},
bu:function bu(){},
bv:function bv(){},
cn:function cn(){},
cH:function cH(){},
ct:function ct(){},
cA:function cA(){},
cB:function cB(){},
cC:function cC(){},
cD:function cD(){},
cE:function cE(){},
cF:function cF(){},
cG:function cG(){},
cr:function cr(){},
cs:function cs(){},
cu:function cu(){},
cw:function cw(){},
cx:function cx(){},
cy:function cy(){},
cI:function cI(){},
cJ:function cJ(){},
cU:function cU(){},
cV:function cV(){},
cT:function cT(){},
cY:function cY(){},
cZ:function cZ(){},
d_:function d_(){},
d0:function d0(){},
cL:function cL(){},
cN:function cN(){},
cP:function cP(){},
cR:function cR(){},
cW:function cW(){},
cX:function cX(){}},B={
nk:function(a){var t,s
t=document
s=W.aS
W.ak(t,"keydown",new B.iS(),!1,s)
W.ak(t,"keyup",new B.iT(),!1,s)
if(!$.nl)W.ak(t,"mousemove",new B.iU(),!1,W.M)
s=W.M
W.ak(t,"mousedown",new B.iV(),!1,s)
W.ak(t,"mouseup",new B.iW(),!1,s)},
mh:function(a,b,c,d){var t,s,r,q
t=new Float32Array(H.r(3))
s=$.$get$iw()
r=$.$get$c1()
q=new T.O(new Float32Array(H.r(16)))
q.P()
q=new B.fd(a,b,c,0,new T.p(t),-0.02,s,r,q,new T.p(new Float32Array(H.r(3))),new T.p(new Float32Array(H.r(3))),new T.p(new Float32Array(H.r(3))),new T.p(new Float32Array(H.r(3))),"camera:orbit",!1,!0)
q.dn(a,b,c,d)
return q},
iS:function iS(){},
iT:function iT(){},
iU:function iU(){},
iV:function iV(){},
iW:function iW(){},
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
fh:function fh(a){this.a=a},
mr:function(b5,b6,b7,b8,b9,c0,c1,c2,c3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
t=[]
s=new Float32Array(H.r(3))
r=new T.p(s)
q=new T.p(new Float32Array(H.r(3)))
new Float32Array(H.r(3))
p=[[P.b,P.n]]
o=H.B(new Array(c0),p)
for(n=[P.n],m=0;m<c0;++m){o[m]=H.B(new Array(c1),n)
l=m/c0*2*b7*3.141592653589793
B.kY(l,b8,b7,b9,b6,$.$get$iP())
B.kY(l+0.02,b8,b7,b9,b6,$.$get$jy())
k=$.$get$jy().a
j=k[0]
i=$.$get$iP().a
s[0]=j-i[0]
s[1]=k[1]-i[1]
s[2]=k[2]-i[2]
j=q.a
j[0]=k[0]+i[0]
j[1]=k[1]+i[1]
j[2]=k[2]+i[2]
h=r.aw(q)
h.ak(0)
q=h.aw(r)
q.ak(0)
for(k=q.a,j=h.a,g=0;g<c1;++g){f=g/c1*2*3.141592653589793
e=c2*Math.cos(f)
d=c2*Math.sin(f)
i=$.$get$iP().a
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
C.a.l(t,new T.p(a5))
o[m][g]=t.length-1}}s=P.I()
a6=new G.ez(!1,[],[],[],s)
H.d(!s.D(0,"aTexUV"))
H.d(C.e.bm("aTexUV","a"))
switch($.$get$S().h(0,"aTexUV").a){case"vec2":s.i(0,"aTexUV",H.B([],[T.ad]))
break
case"vec3":s.i(0,"aTexUV",H.B([],[T.p]))
break
case"vec4":s.i(0,"aTexUV",H.B([],[T.aF]))
break
case"float":s.i(0,"aTexUV",H.B([],[P.L]))
break
case"uvec4":s.i(0,"aTexUV",H.B([],p))
break
default:if(H.aG(!1))H.b3("unknown type for aTexUV")}for(m=0;m<c0;m=a7)for(a7=m+1,a8=a7%c0,g=0;g<c1;g=a9){a9=g+1
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
a6.dd(1)
a6.ap([C.a.h(t,b4),C.a.h(t,b3),C.a.h(t,b2),C.a.h(t,b1)])
a6.dc("aTexUV",[new T.ad(p),new T.ad(n),new T.ad(k),new T.ad(j)])}a6.dj()
return a6},
kY:function(a,b,c,d,e,f){var t,s,r,q,p
t=Math.cos(a)
s=Math.sin(a)
r=b/c*a
q=d*(2+Math.cos(r))
p=f.a
p[0]=q*0.5*t
p[1]=q*s*0.5
p[2]=e*d*Math.sin(r)*0.5
return f}},G={
my:function(a){var t,s,r
t=a.split("\n")
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.f(t[s])}return C.a.aj(t,"\n")},
kD:function(a,b,c){var t,s,r,q
t=J.k(a)
s=t.c9(a,b)
t.bl(a,s,c)
t.c4(a,s)
r=t.bh(a,s,35713)
if(r!=null&&!r){q=t.bg(a,s)
P.am("E:Compilation failed:")
P.am("E:"+G.my(c))
P.am("E:Failure:")
P.am(C.e.Y("E:",q))
throw H.e(q)}return s},
kg:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
d.C(b)
d.aI(a)
e.C(c)
e.aI(a)
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
t=Math.sqrt(e.gaB())
if(t===0)return!1
e.cQ(0,-1/t)
return!0},
k8:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.j3(a[s])
b[t+1]=J.j4(a[s])
b[t+2]=J.jG(a[s])}return b},
m6:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.j3(a[s])
b[t+1]=J.j4(a[s])}return b},
m7:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.j3(a[s])
b[t+1]=J.j4(a[s])
b[t+2]=J.jG(a[s])
b[t+3]=J.lx(a[s])}return b},
m5:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.bj(a[s],0)
b[t+1]=J.bj(a[s],1)
b[t+2]=J.bj(a[s],2)
b[t+3]=J.bj(a[s],3)}return b},
mF:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
for(t=a.e,s=t.gE(t),s=s.gw(s),r=b.x,q=[[P.b,P.n]],p=[P.L],o=[T.aF],n=[T.p],m=[T.ad];s.p();){l=s.gt()
if(!r.D(0,l)){k="Dropping unnecessary attribute: "+H.f(l)
if($.kT>0)H.iQ("I: "+k)
continue}j=t.h(0,l)
switch($.$get$S().h(0,l).a){case"vec2":b.a_(l,G.m6(H.dK(j,"$isb",m,"$asb"),null),2)
break
case"vec3":b.a_(l,G.k8(H.dK(j,"$isb",n,"$asb"),null),3)
break
case"vec4":b.a_(l,G.m7(H.dK(j,"$isb",o,"$asb"),null),4)
break
case"float":b.a_(l,new Float32Array(H.ip(H.dK(j,"$isb",p,"$asb"))),1)
break
case"uvec4":b.a_(l,G.m5(H.dK(j,"$isb",q,"$asb"),null),4)
break
default:if(H.aG(!1))H.b3("unknown type for "+H.f(l)+" ["+J.lv(j[0]).k(0)+"] ["+new H.aD(H.iA(j),null).k(0)+"] "+H.f(j))}}},
kk:function(a,b,c,d){var t=new G.fy(b,c,d,null,null,P.I(),P.I(),P.ah(null,null,null,P.u),null,a,!1,!0)
t.dq(a,b,c,d)
return t},
f0:function f0(){},
dw:function dw(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dT:function dT(){},
dV:function dV(a,b){this.a=a
this.b=b},
ex:function ex(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eq:function eq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ez:function ez(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
du:function du(a,b,c){this.a=a
this.b=b
this.c=c},
bP:function bP(a,b,c){this.a=a
this.b=b
this.c=c},
d7:function d7(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
d8:function d8(a,b,c,d,e,f,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
i:function i(a,b,c){this.a=a
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
dq:function dq(a,b,c,d,e,f,g,h){var _=this
_.d=a
_.e=b
_.f=c
_.r=d
_.x=e
_.a=f
_.b=g
_.c=h},
h1:function h1(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bO:function bO(){},
eD:function eD(a,b,c,d,e,f){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f}},R={
mx:function(a,b,c){var t,s,r,q
t="stars_"+b
s=b*3
r=new Float32Array(H.r(s))
for(q=0;q<s;++q)r[q]=($.$get$kB().eT()-0.5)*c
s=a.d
s=new G.d8(s,J.jE(s.a),0,P.I(),a.e.x,null,0,-1,null,null,P.I(),"meshdata:"+t,!1,!0)
s.ap(r)
return s},
fL:function fL(){},
fM:function fM(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},A={
kR:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=b.dx
t.C(c)
s=b.d
t.cm(0,s)
r=b.cx
J.ay(b)
q=C.a.gaA(e)
p=b.db
o=new T.aC(new Float32Array(9))
t.c5(o)
p.eo(o)
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
C.a.l(e,b.ch)
a.dh(r,e,d)
e.pop()
for(s=b.cy,r=s.length,l=0;l<s.length;s.length===r||(0,H.E)(s),++l)A.kR(a,s[l],t,d,e)},
de:function de(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
fx:function fx(a,b,c,d,e,f,g,h,i,a0,a1){var _=this
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
dI:function(a){var t,s
t=C.n.eF(a,0,new A.iB())
s=536870911&t+(C.b.cM(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
iB:function iB(){}},T={
kC:function(){return new T.p(new Float32Array(H.r(3)))},
aC:function aC(a){this.a=a},
O:function O(a){this.a=a},
ad:function ad(a){this.a=a},
p:function p(a){this.a=a},
aF:function aF(a){this.a=a}},U={
lS:function(a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
t=new Float32Array(H.r(3000))
s=new Float32Array(H.r(4000))
r=new Float32Array(H.r(16))
q=new T.O(r)
q.P()
p=new G.dq(q,new T.p(new Float32Array(H.r(3))),new T.p(new Float32Array(H.r(3))),new T.p(new Float32Array(H.r(3))),new T.p(new Float32Array(H.r(3))),"dummy",!1,!0)
for(o=0,n=-5;n<5;++n)for(m=n*40,l=-5;l<5;++l)for(k=l*40,j=-5;j<5;++j){r[12]=m
r[13]=k
r[14]=j*30
i=o*3
C.n.bk(t,i,p.bd().a)
h=new Float32Array(9)
q.c5(new T.aC(h))
g=new Float32Array(4)
f=h[0]
e=h[4]
d=h[8]
c=0+f+e+d
if(c>0){f=Math.sqrt(c+1)
g[3]=f*0.5
b=0.5/f
g[0]=(h[5]-h[7])*b
g[1]=(h[6]-h[2])*b
g[2]=(h[1]-h[3])*b}else{if(f<e)a=e<d?2:1
else a=f<d?2:0
a0=(a+1)%3
a1=(a+2)%3
f=a*3
e=a0*3
d=a1*3
a2=Math.sqrt(h[f+a]-h[e+a0]-h[d+a1]+1)
g[a]=a2*0.5
b=0.5/a2
g[3]=(h[e+a1]-h[d+a0])*b
g[a0]=(h[f+a0]+h[e+a])*b
g[a1]=(h[f+a1]+h[d+a])*b}C.n.bk(s,i,g);++o}a3.a_("iaRotation",s,4)
a3.a_("iaTranslation",t,3)},
ne:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t={}
s=document
r=new R.fM(0,0,null,null,null,null)
r.dt(C.k.cP(s,"stats"),"blue","gray")
q=C.k.eV(s,"#webgl-canvas")
p=new G.dV(null,q)
o=(q&&C.p).bb(q,"webgl2",P.aT(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
p.a=o
if(o==null)H.D(P.ci('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
n="ChronosGL Config: "+J.ay(J.ly(o))
if($.kT>0)P.am("I: "+n)
J.lh(o,0,0,0,1)
J.c6(o,2929)
J.c6(o,2884)
m=B.mh(265,0,0,q)
o=new T.O(new Float32Array(H.r(16)))
o.P()
n=new T.O(new Float32Array(H.r(16)))
n.P()
l=new G.fk(m,50,1,0.1,1000,o,n,new T.O(new Float32Array(H.r(16))),P.I(),"perspective",!1,!0)
l.bt()
n=H.B([],[A.bI])
k=new A.fx(null,p,n,17664,0,0,0,0,"main",!1,!0)
k.d=new G.ex(p,null,null,null,null)
o=G.kk("instanced",p,$.$get$l_(),$.$get$kZ())
j=[]
H.d(!0)
C.a.l(n,new A.bI(o,[l],j,"instanced",!1,!0))
i=new G.d7(P.I(),"mat",!1,!0)
i.L("cDepthTest",!0)
i.L("cDepthWrite",!0)
i.L("cBlendEquation",$.$get$jS())
h=$.$get$kl()
i.L("cStencilFunc",h)
g=B.mr(!0,1,2,3,12,128,16,4,!0)
f=o.d
e=J.jE(f.a)
d=new G.d8(f,e,4,P.I(),o.e.x,null,0,-1,null,null,P.I(),"meshdata:torusknot",!1,!0)
d.ap(G.k8(g.d,null))
o=g.di()
d.y=J.j1(f.a)
H.d(d.ch!=null)
c=d.ch.length
if(c<768){d.saT(new Uint8Array(H.ip(o)))
d.Q=5121}else if(c<196608){d.saT(new Uint16Array(H.ip(o)))
d.Q=5123}else{d.saT(new Uint32Array(H.ip(o)))
d.Q=5125}J.dM(f.a,e)
o=d.y
e=d.cx
f.toString
c=J.w(e)
H.d(!!c.$isky||!!c.$iskz||!!c.$iskA)
J.dL(f.a,34963,o)
J.jD(f.a,34963,e,35048)
G.mF(g,d)
U.lS(d)
o=new Float32Array(H.r(9))
f=new T.O(new Float32Array(H.r(16)))
f.P()
e=new T.O(new Float32Array(H.r(16)))
e.P()
c=new Float32Array(H.r(3))
b=new Float32Array(H.r(3))
a=new Float32Array(H.r(3))
a0=new Float32Array(H.r(3))
H.d(!0)
C.a.l(j,new A.de(i,d,[],new T.aC(o),f,e,new T.p(c),new T.p(b),new T.p(a),new T.p(a0),"torus",!1,!0))
a0=G.kk("stars",p,$.$get$l5(),$.$get$l4())
a=[]
o=a0.d
j=$.$get$jR()
i=new G.d7(P.I(),"stars",!1,!0)
i.L("cDepthTest",!0)
i.L("cDepthWrite",!1)
i.L("cBlendEquation",j)
i.L("cStencilFunc",h)
a1=s.createElement("canvas")
a1.width=64
a1.height=64
a2=C.p.cO(a1,"2d")
a3=(a2&&C.i).c8(a2,32,32,1,32,32,22);(a3&&C.f).av(a3,0,"gray")
C.f.av(a3,1,"black")
a2.fillStyle=a3
C.i.eD(a2,0,0,64,64)
a3=C.i.c8(a2,32,32,1,32,32,6);(a3&&C.f).av(a3,0,"white")
C.f.av(a3,1,"gray")
a2.globalAlpha=0.9
a2.fillStyle=a3
a2.arc(32,32,4,0,6.283185307179586,!1)
a2.fill("nonzero")
s=new G.h1(!1,!1,!1,!0,1,9729,9729)
j=J.lk(o.a)
h=new G.eD(a1,"Utils::Particles",j,3553,o,s)
J.c5(o.a,3553,j)
J.lE(o.a,37440,1)
h.ds(a1)
s.dl(o,3553)
H.d(J.lz(o.a)===0)
J.c5(o.a,3553,null)
i.L("uTexture",h)
i.L("uPointSize",1000)
d=R.mx(a0,2000,100)
s=new Float32Array(H.r(9))
o=new T.O(new Float32Array(H.r(16)))
o.P()
j=new T.O(new Float32Array(H.r(16)))
j.P()
h=new Float32Array(H.r(3))
f=new Float32Array(H.r(3))
e=new Float32Array(H.r(3))
c=new Float32Array(H.r(3))
H.d(!0)
C.a.l(a,new A.de(i,d,[],new T.aC(s),o,j,new T.p(h),new T.p(f),new T.p(e),new T.p(c),d.a,!1,!0))
H.d(!0)
C.a.l(n,new A.bI(a0,[l],a,"stars",!1,!0))
a=new U.iN(q,l,k)
a.$1(null)
W.ak(window,"resize",a,!1,W.j)
t.a=0
new U.iM(t,r,m,k).$1(0)},
iN:function iN(a,b,c){this.a=a
this.b=b
this.c=c},
iM:function iM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}}
var v=[C,H,J,P,W,B,G,R,A,T,U]
setFunctionNamesIfNecessary(v)
var $={}
H.jc.prototype={}
J.a.prototype={
v:function(a,b){return a===b},
gu:function(a){return H.aV(a)},
k:function(a){return H.fs(a)},
gA:function(a){return new H.aD(H.iA(a),null)}}
J.eK.prototype={
k:function(a){return String(a)},
gu:function(a){return a?519018:218159},
gA:function(a){return C.a1},
$isax:1}
J.eL.prototype={
v:function(a,b){return null==b},
k:function(a){return"null"},
gu:function(a){return 0},
gA:function(a){return C.W}}
J.by.prototype={
gu:function(a){return 0},
gA:function(a){return C.V},
k:function(a){return String(a)},
$iskd:1}
J.fm.prototype={}
J.aX.prototype={}
J.aR.prototype={
k:function(a){var t=a[$.$get$k_()]
return t==null?this.d7(a):J.ay(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isja:1}
J.aP.prototype={
c1:function(a,b){if(!!a.immutable$list)throw H.e(new P.v(b))},
b1:function(a,b){if(!!a.fixed$length)throw H.e(new P.v(b))},
l:function(a,b){this.b1(a,"add")
a.push(b)},
M:function(a,b){var t,s,r,q,p
t=a.length
this.b1(a,"addAll")
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.E)(b),++r,t=p){q=b[r]
p=t+1
H.d(t===a.length||H.D(new P.V(a)))
a.push(q)}},
cl:function(a,b){return new H.bz(a,b,[H.aI(a,0),null])},
aj:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.f(a[s])
return t.join(b)},
q:function(a,b){return this.h(a,b)},
geE:function(a){if(a.length>0)return a[0]
throw H.e(H.eJ())},
gaA:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.e(H.eJ())},
F:function(a,b,c,d,e){var t,s
this.c1(a,"setRange")
P.ji(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.D(P.ai(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.e(H.kc())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=d[e+s]
else for(s=0;s<t;++s)a[b+s]=d[e+s]},
bU:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.e(new P.V(a))}return!1},
d2:function(a,b){this.c1(a,"sort")
H.dp(a,0,a.length-1,P.n_())},
aH:function(a){return this.d2(a,null)},
B:function(a,b){var t
for(t=0;t<a.length;++t)if(J.F(a[t],b))return!0
return!1},
k:function(a){return P.eI(a,"[","]")},
gw:function(a){return new J.dQ(a,a.length,0,null,[H.aI(a,0)])},
gu:function(a){return H.aV(a)},
gj:function(a){return a.length},
sj:function(a,b){this.b1(a,"set length")
if(b<0)throw H.e(P.ai(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.N(a,b))
if(b>=a.length||b<0)throw H.e(H.N(a,b))
return a[b]},
i:function(a,b,c){if(!!a.immutable$list)H.D(new P.v("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.N(a,b))
if(b>=a.length||b<0)throw H.e(H.N(a,b))
a[b]=c},
$ism:1,
$asm:function(){},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
J.jb.prototype={}
J.dQ.prototype={
gt:function(){return this.d},
p:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.e(H.E(t))
r=this.c
if(r>=s){this.sbv(null)
return!1}this.sbv(t[r]);++this.c
return!0},
sbv:function(a){this.d=a}}
J.b9.prototype={
S:function(a,b){var t
if(typeof b!=="number")throw H.e(H.T(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gay(b)
if(this.gay(a)===t)return 0
if(this.gay(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gay:function(a){return a===0?1/a<0:a<0},
ej:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.e(new P.v(""+a+".ceil()"))},
a5:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(new P.v(""+a+".round()"))},
ek:function(a,b,c){if(this.S(b,c)>0)throw H.e(H.T(b))
if(this.S(a,b)<0)return b
if(this.S(a,c)>0)return c
return a},
f4:function(a,b){var t
if(b>20)throw H.e(P.ai(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gay(a))return"-"+t
return t},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu:function(a){return a&0x1FFFFFFF},
Y:function(a,b){if(typeof b!=="number")throw H.e(H.T(b))
return a+b},
a9:function(a,b){if(typeof b!=="number")throw H.e(H.T(b))
return a-b},
cN:function(a,b){if(typeof b!=="number")throw H.e(H.T(b))
return a/b},
G:function(a,b){if(typeof b!=="number")throw H.e(H.T(b))
return a*b},
aK:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bQ(a,b)},
I:function(a,b){return(a|0)===a?a/b|0:this.bQ(a,b)},
bQ:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.e(new P.v("Result of truncating division is "+H.f(t)+": "+H.f(a)+" ~/ "+b))},
aX:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
cM:function(a,b){if(typeof b!=="number")throw H.e(H.T(b))
return(a&b)>>>0},
da:function(a,b){if(typeof b!=="number")throw H.e(H.T(b))
return(a^b)>>>0},
aF:function(a,b){if(typeof b!=="number")throw H.e(H.T(b))
return a<b},
ao:function(a,b){if(typeof b!=="number")throw H.e(H.T(b))
return a>b},
ba:function(a,b){if(typeof b!=="number")throw H.e(H.T(b))
return a>=b},
gA:function(a){return C.a4},
$isU:1}
J.d3.prototype={
gA:function(a){return C.a3},
$isL:1,
$isn:1,
$isU:1}
J.d2.prototype={
gA:function(a){return C.a2},
$isL:1,
$isU:1}
J.aQ.prototype={
aO:function(a,b){if(b>=a.length)throw H.e(H.N(a,b))
return a.charCodeAt(b)},
Y:function(a,b){if(typeof b!=="string")throw H.e(P.jQ(b,null,null))
return a+b},
d3:function(a,b,c){var t
if(c>a.length)throw H.e(P.ai(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bm:function(a,b){return this.d3(a,b,0)},
bo:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.ft(b,null,null))
if(b>c)throw H.e(P.ft(b,null,null))
if(c>a.length)throw H.e(P.ft(c,null,null))
return a.substring(b,c)},
d4:function(a,b){return this.bo(a,b,null)},
f3:function(a){return a.toLowerCase()},
em:function(a,b,c){if(c>a.length)throw H.e(P.ai(c,0,a.length,null,null))
return H.nm(a,b,c)},
S:function(a,b){var t
if(typeof b!=="string")throw H.e(H.T(b))
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
gA:function(a){return C.X},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.e(H.N(a,b))
return a[b]},
$ism:1,
$asm:function(){},
$isu:1}
H.c.prototype={$asc:null}
H.ba.prototype={
gw:function(a){return new H.d5(this,this.gj(this),0,null,[H.a0(this,"ba",0)])},
aD:function(a,b){return this.d6(0,b)},
b8:function(a,b){var t,s
t=H.B([],[H.a0(this,"ba",0)])
C.a.sj(t,this.gj(this))
for(s=0;s<this.gj(this);++s)t[s]=this.q(0,s)
return t},
f2:function(a){return this.b8(a,!0)}}
H.fT.prototype={
gdP:function(){var t=J.b4(this.a)
return t},
ge6:function(){var t,s
t=J.b4(this.a)
s=this.b
if(s>t)return t
return s},
gj:function(a){var t,s
t=J.b4(this.a)
s=this.b
if(s>=t)return 0
return t-s},
q:function(a,b){var t=C.b.Y(this.ge6(),b)
if(b<0||C.b.ba(t,this.gdP()))throw H.e(P.A(b,this,"index",null,null))
return J.jF(this.a,t)},
b8:function(a,b){var t,s,r,q,p,o,n
t=this.b
s=this.a
r=J.a_(s)
q=r.gj(s)
p=q-t
if(p<0)p=0
o=H.B(new Array(p),this.$ti)
for(n=0;n<p;++n){o[n]=r.q(s,t+n)
if(r.gj(s)<q)throw H.e(new P.V(this))}return o},
du:function(a,b,c,d){var t=this.b
if(t<0)H.D(P.ai(t,0,null,"start",null))}}
H.d5.prototype={
gt:function(){return this.d},
p:function(){var t,s,r,q
t=this.a
s=J.a_(t)
r=s.gj(t)
if(this.b!==r)throw H.e(new P.V(t))
q=this.c
if(q>=r){this.sab(null)
return!1}this.sab(s.q(t,q));++this.c
return!0},
sab:function(a){this.d=a}}
H.d6.prototype={
gw:function(a){return new H.eU(null,J.bl(this.a),this.b,this.$ti)},
gj:function(a){return J.b4(this.a)},
$asW:function(a,b){return[b]}}
H.e6.prototype={$isc:1,
$asc:function(a,b){return[b]}}
H.eU.prototype={
p:function(){var t=this.b
if(t.p()){this.sab(this.c.$1(t.gt()))
return!0}this.sab(null)
return!1},
gt:function(){return this.a},
sab:function(a){this.a=a},
$asd1:function(a,b){return[b]}}
H.bz.prototype={
gj:function(a){return J.b4(this.a)},
q:function(a,b){return this.b.$1(J.jF(this.a,b))},
$asc:function(a,b){return[b]},
$asba:function(a,b){return[b]},
$asW:function(a,b){return[b]}}
H.dy.prototype={
gw:function(a){return new H.hl(J.bl(this.a),this.b,this.$ti)}}
H.hl.prototype={
p:function(){var t,s
for(t=this.a,s=this.b;t.p();)if(s.$1(t.gt()))return!0
return!1},
gt:function(){return this.a.gt()}}
H.cj.prototype={}
H.iX.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.iY.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.hZ.prototype={
seO:function(a){this.z=a},
seR:function(a){this.ch=a}}
H.b0.prototype={
bT:function(a,b){if(!this.f.v(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.b_()},
eY:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.al(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.bJ();++r.d}this.y=!1}this.b_()},
ea:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.w(a),s=0;r=this.ch,s<r.length;s+=2)if(t.v(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
eX:function(a){var t,s,r
if(this.ch==null)return
for(t=J.w(a),s=0;r=this.ch,s<r.length;s+=2)if(t.v(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.D(new P.v("removeRange"))
P.ji(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
cZ:function(a,b){if(!this.r.v(0,a))return
this.db=b},
eI:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.H(0,c)
return}H.d(b===1)
t=this.cx
if(t==null){t=P.jg(null,null)
this.cx=t}t.U(0,new H.hT(a,c))},
eH:function(a,b){var t
if(!this.r.v(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.az()
return}H.d(b===1)
t=this.cx
if(t==null){t=P.jg(null,null)
this.cx=t}t.U(0,this.geP())},
eJ:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.am(a)
if(b!=null)P.am(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.ay(a)
s[1]=b==null?null:b.k(0)
for(r=new P.bU(t,t.r,null,null,[null]),r.c=t.e;r.p();)r.d.H(0,s)},
af:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.P(o)
p=H.aH(o)
this.eJ(q,p)
if(this.db){this.az()
if(this===u.globalState.e)throw o}}finally{this.cy=H.mW(r)
u.globalState.d=H.ju(t,"$isb0")
if(t!=null)$=t.geN()
if(this.cx!=null)for(;n=this.cx,!n.gai(n);)this.cx.co().$0()}return s},
ck:function(a){return this.b.h(0,a)},
bz:function(a,b){var t=this.b
if(t.D(0,a))throw H.e(P.ci("Registry: ports must be registered only once."))
t.i(0,a,b)},
b_:function(){var t=this.b
if(t.gj(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.az()},
az:function(){var t,s,r
t=this.cx
if(t!=null)t.W(0)
for(t=this.b,s=t.gcJ(t),s=s.gw(s);s.p();)s.gt().dJ()
t.W(0)
this.c.W(0)
u.globalState.z.al(0,this.a)
this.dx.W(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].H(0,t[r+1])
this.ch=null}},
geN:function(){return this.d},
gen:function(){return this.e}}
H.hT.prototype={
$0:function(){this.a.H(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.hB.prototype={
ev:function(){var t=this.a
if(t.b===t.c)return
return t.co()},
cq:function(){var t,s,r
t=this.ev()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.D(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gai(s)}else s=!1
else s=!1
else s=!1
if(s)H.D(P.ci("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gai(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aT(["command","close"])
r=new H.al(!0,new P.dC(0,null,null,null,null,null,0,[null,P.n])).J(r)
s.toString
self.postMessage(r)}return!1}t.eU()
return!0},
bO:function(){if(self.window!=null)new H.hC(this).$0()
else for(;this.cq(););},
am:function(){var t,s,r,q,p
if(!u.globalState.x)this.bO()
else try{this.bO()}catch(r){t=H.P(r)
s=H.aH(r)
q=u.globalState.Q
p=P.aT(["command","error","msg",H.f(t)+"\n"+H.f(s)])
p=new H.al(!0,P.bV(null,P.n)).J(p)
q.toString
self.postMessage(p)}}}
H.hC.prototype={
$0:function(){if(!this.a.cq())return
P.mw(C.r,this)},
$S:function(){return{func:1,v:true}}}
H.b1.prototype={
eU:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.af(this.b)}}
H.hY.prototype={}
H.eG.prototype={
$0:function(){H.mb(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.eH.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(!this.d)this.a.$1(this.c)
else{s=this.a
if(H.bi(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.bi(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.b_()},
$S:function(){return{func:1,v:true}}}
H.hu.prototype={}
H.bf.prototype={
H:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.mK(b)
if(t.gen()===s){s=J.a_(r)
switch(s.h(r,0)){case"pause":t.bT(s.h(r,1),s.h(r,2))
break
case"resume":t.eY(s.h(r,1))
break
case"add-ondone":t.ea(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.eX(s.h(r,1))
break
case"set-errors-fatal":t.cZ(s.h(r,1),s.h(r,2))
break
case"ping":t.eI(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.eH(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.al(0,s)
break}return}u.globalState.f.a.U(0,new H.b1(t,new H.i_(this,r),"receive"))},
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
if(!t.c)t.dG(0,this.b)},
$S:function(){return{func:1}}}
H.bX.prototype={
H:function(a,b){var t,s,r
t=P.aT(["command","message","port",this,"msg",b])
s=new H.al(!0,P.bV(null,P.n)).J(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bX){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gu:function(a){return C.b.da((this.b<<16^this.a<<8)>>>0,this.c)}}
H.bc.prototype={
dJ:function(){this.c=!0
this.b=null},
dG:function(a,b){if(this.c)return
this.b.$1(b)},
$ismp:1}
H.h3.prototype={
dv:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.U(0,new H.b1(s,new H.h4(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.c0(new H.h5(this,b),0),a)}else{H.d(a>0)
throw H.e(new P.v("Timer greater than 0."))}}}
H.h4.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.h5.prototype={
$0:function(){this.a.c=null
H.iL()
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.ap.prototype={
gu:function(a){var t=this.a
t=C.b.aX(t,0)^C.b.I(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
v:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.ap){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.al.prototype={
J:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gj(t))
t=J.w(a)
if(!!t.$isbB)return["buffer",a]
if(!!t.$isbb)return["typed",a]
if(!!t.$ism)return this.cV(a)
if(!!t.$ism8){r=this.gcS()
q=t.gE(a)
q=H.jh(q,r,H.a0(q,"W",0),null)
q=P.kf(q,!0,H.a0(q,"W",0))
t=t.gcJ(a)
t=H.jh(t,r,H.a0(t,"W",0),null)
return["map",q,P.kf(t,!0,H.a0(t,"W",0))]}if(!!t.$iskd)return this.cW(a)
if(!!t.$isa)this.cH(a)
if(!!t.$ismp)this.an(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isbf)return this.cX(a)
if(!!t.$isbX)return this.cY(a)
if(!!t.$isb6){p=a.$static_name
if(p==null)this.an(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isap)return["capability",a.a]
if(!(a instanceof P.o))this.cH(a)
return["dart",u.classIdExtractor(a),this.cU(u.classFieldsExtractor(a))]},
an:function(a,b){throw H.e(new P.v((b==null?"Can't transmit:":b)+" "+H.f(a)))},
cH:function(a){return this.an(a,null)},
cV:function(a){var t
H.d(typeof a!=="string")
t=this.cT(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.an(a,"Can't serialize indexable: ")},
cT:function(a){var t,s
t=[]
C.a.sj(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.J(a[s])
return t},
cU:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.J(a[t]))
return a},
cW:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.an(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sj(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.J(a[t[r]])
return["js-object",t,s]},
cY:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cX:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.b_.prototype={
X:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.e(P.jP("Bad serialized message: "+H.f(a)))
switch(C.a.geE(a)){case"ref":H.d(J.F(a[0],"ref"))
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
s=H.B(this.ae(t),[null])
s.fixed$length=Array
return s
case"extendable":H.d(J.F(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.B(this.ae(t),[null])
case"mutable":H.d(J.F(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.ae(t)
case"const":H.d(J.F(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
s=H.B(this.ae(t),[null])
s.fixed$length=Array
return s
case"map":return this.ey(a)
case"sendport":return this.ez(a)
case"raw sendport":H.d(J.F(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.ex(a)
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
default:throw H.e("couldn't deserialize: "+H.f(a))}},
ae:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.X(a[t]))
return a},
ey:function(a){var t,s,r,q,p
H.d(J.F(a[0],"map"))
t=a[1]
s=a[2]
r=P.I()
C.a.l(this.b,r)
t=J.lD(t,this.gew()).f2(0)
for(q=J.a_(s),p=0;p<t.length;++p)r.i(0,t[p],this.X(q.h(s,p)))
return r},
ez:function(a){var t,s,r,q,p,o,n
H.d(J.F(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.ck(r)
if(o==null)return
n=new H.bf(o,s)}else n=new H.bX(t,r,s)
C.a.l(this.b,n)
return n},
ex:function(a){var t,s,r,q,p,o
H.d(J.F(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.a_(t),p=J.a_(s),o=0;o<q.gj(t);++o)r[q.h(t,o)]=this.X(p.h(s,o))
return r}}
H.fw.prototype={}
H.ha.prototype={
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
H.di.prototype={
k:function(a){var t=this.b
if(t==null)return"NullError: "+H.f(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.eN.prototype={
k:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.f(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.f(this.a)+")"}}
H.hd.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.iZ.prototype={
$1:function(a){if(!!J.w(a).$isb8)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.dE.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.iG.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.iH.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.iI.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.iJ.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.iK.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.b6.prototype={
k:function(a){return"Closure '"+H.dk(this).trim()+"'"},
$isja:1,
gf7:function(){return this},
$D:null}
H.fY.prototype={}
H.fK.prototype={
k:function(a){var t=this.$static_name
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
else s=typeof t!=="object"?J.ao(t):H.aV(t)
return(s^H.aV(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.f(this.d)+"' of "+H.fs(t)}}
H.hc.prototype={
k:function(a){return this.a}}
H.dU.prototype={
k:function(a){return this.a}}
H.fC.prototype={
k:function(a){return"RuntimeError: "+H.f(this.a)}}
H.ho.prototype={
k:function(a){return C.e.Y("Assertion failed: ",P.j9(this.a))}}
H.aD.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gu:function(a){return J.ao(this.a)},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.aD){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.ag.prototype={
gj:function(a){return this.a},
gai:function(a){return this.a===0},
gE:function(a){return new H.eQ(this,[H.aI(this,0)])},
gcJ:function(a){return H.jh(this.gE(this),new H.eM(this),H.aI(this,0),H.aI(this,1))},
D:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bG(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bG(s,b)}else return this.eK(b)},
eK:function(a){var t=this.d
if(t==null)return!1
return this.ah(this.at(t,this.ag(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.ac(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.ac(r,b)
return s==null?null:s.b}else return this.eL(b)},
eL:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.at(t,this.ag(a))
r=this.ah(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aU()
this.b=t}this.bx(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aU()
this.c=s}this.bx(s,b,c)}else{r=this.d
if(r==null){r=this.aU()
this.d=r}q=this.ag(b)
p=this.at(r,q)
if(p==null)this.aW(r,q,[this.aV(b,c)])
else{o=this.ah(p,b)
if(o>=0)p[o].b=c
else p.push(this.aV(b,c))}}},
al:function(a,b){if(typeof b==="string")return this.bM(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bM(this.c,b)
else return this.eM(b)},
eM:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.at(t,this.ag(a))
r=this.ah(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bR(q)
return q.b},
W:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
ax:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.e(new P.V(this))
t=t.c}},
bx:function(a,b,c){var t=this.ac(a,b)
if(t==null)this.aW(a,b,this.aV(b,c))
else t.b=c},
bM:function(a,b){var t
if(a==null)return
t=this.ac(a,b)
if(t==null)return
this.bR(t)
this.bH(a,b)
return t.b},
aV:function(a,b){var t,s
t=new H.eP(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bR:function(a){var t,s,r
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
k:function(a){return P.mg(this)},
ac:function(a,b){return a[b]},
at:function(a,b){return a[b]},
aW:function(a,b,c){H.d(c!=null)
a[b]=c},
bH:function(a,b){delete a[b]},
bG:function(a,b){return this.ac(a,b)!=null},
aU:function(){var t=Object.create(null)
this.aW(t,"<non-identifier-key>",t)
this.bH(t,"<non-identifier-key>")
return t},
$ism8:1}
H.eM.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.eP.prototype={}
H.eQ.prototype={
gj:function(a){return this.a.a},
gw:function(a){var t,s
t=this.a
s=new H.eR(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.eR.prototype={
gt:function(){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.V(t))
else{t=this.c
if(t==null){this.sbw(null)
return!1}else{this.sbw(t.a)
this.c=this.c.c
return!0}}},
sbw:function(a){this.d=a}}
H.iC.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.iD.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.u]}}}
H.iE.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.u]}}}
H.bB.prototype={
gA:function(a){return C.O},
$isbB:1}
H.bb.prototype={
dU:function(a,b,c,d){var t=P.ai(b,0,c,d,null)
throw H.e(t)},
bB:function(a,b,c,d){if(b>>>0!==b||b>c)this.dU(a,b,c,d)},
$isbb:1}
H.f1.prototype={
gA:function(a){return C.P}}
H.da.prototype={
gj:function(a){return a.length},
e5:function(a,b,c,d,e){var t,s,r
t=a.length
this.bB(a,b,t,"start")
this.bB(a,c,t,"end")
if(b>c)throw H.e(P.ai(b,0,c,null,null))
s=c-b
r=d.length
if(r-e<s)throw H.e(new P.as("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ism:1,
$asm:function(){},
$isq:1,
$asq:function(){}}
H.db.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.N(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.D(H.N(a,b))
a[b]=c},
F:function(a,b,c,d,e){this.e5(a,b,c,d,e)
return},
a8:function(a,b,c,d){return this.F(a,b,c,d,0)}}
H.dc.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.D(H.N(a,b))
a[b]=c},
F:function(a,b,c,d,e){this.d8(a,b,c,d,e)},
a8:function(a,b,c,d){return this.F(a,b,c,d,0)},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]}}
H.d9.prototype={
gA:function(a){return C.Q},
$isc:1,
$asc:function(){return[P.L]},
$isb:1,
$asb:function(){return[P.L]},
$iseu:1}
H.f2.prototype={
gA:function(a){return C.R},
$isc:1,
$asc:function(){return[P.L]},
$isb:1,
$asb:function(){return[P.L]}}
H.f3.prototype={
gA:function(a){return C.S},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.N(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]}}
H.f4.prototype={
gA:function(a){return C.T},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.N(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]},
$isk9:1}
H.f5.prototype={
gA:function(a){return C.U},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.N(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]}}
H.f6.prototype={
gA:function(a){return C.Y},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.N(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]},
$isky:1}
H.f7.prototype={
gA:function(a){return C.Z},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.N(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]},
$iskz:1}
H.dd.prototype={
gA:function(a){return C.a_},
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.N(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]}}
H.f8.prototype={
gA:function(a){return C.a0},
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.N(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]},
$iskA:1}
H.bC.prototype={
$asm:function(){},
$isc:1,
$asc:function(){return[P.n]},
$asq:function(){},
$isb:1,
$asb:function(){return[P.n]}}
H.bD.prototype={
$asm:function(){},
$isc:1,
$asc:function(){return[P.L]},
$asq:function(){},
$isb:1,
$asb:function(){return[P.L]}}
H.bE.prototype={
$asm:function(){},
$asc:function(){return[P.L]},
$asq:function(){},
$asb:function(){return[P.L]}}
H.bF.prototype={
$asm:function(){},
$asc:function(){return[P.n]},
$asq:function(){},
$asb:function(){return[P.n]}}
P.hq.prototype={
$1:function(a){var t,s
H.iL()
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
$0:function(){H.iL()
this.a.$0()},
$S:function(){return{func:1}}}
P.hs.prototype={
$0:function(){H.iL()
this.a.$0()},
$S:function(){return{func:1}}}
P.hw.prototype={}
P.ig.prototype={
el:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.as("Future already completed"))
t.aQ(b)}}
P.dB.prototype={
eS:function(a){if(this.c!==6)return!0
H.d(!0)
return this.b.b.b6(this.d,a.a)},
eG:function(a){var t,s
t=(this.c&2)!==0
if(t){H.d(t)
t=this.e!=null}else t=!1
H.d(t)
s=this.e
t=this.b.b
if(H.bi(s,{func:1,args:[P.o,P.bK]}))return t.eZ(s,a.a,a.b)
else return t.b6(s,a.a)}}
P.aw.prototype={
cv:function(a,b){var t,s,r
t=$.C
if(t!==C.d){t.toString
if(b!=null)b=P.mO(b,t)}s=new P.aw(0,t,null,[null])
r=b==null?1:3
this.by(new P.dB(null,s,r,a,b,[H.aI(this,0),null]))
return s},
cu:function(a){return this.cv(a,null)},
bC:function(a){H.d(this.a<4)
H.d(a.a>=4)
this.a=a.a
this.c=a.c},
by:function(a){var t
H.d(a.a==null)
t=this.a
if(t<=1){a.a=H.ju(this.c,"$isdB")
this.c=a}else{if(t===2){H.d(!0)
t=this.c
if(t.a<4){t.by(a)
return}this.bC(t)}H.d(this.a>=4)
t=this.b
t.toString
P.is(null,null,t,new P.hH(this,a))}},
bL:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.d(!0)
s=this.c
if(s.a<4){s.bL(a)
return}this.bC(s)}H.d(this.a>=4)
t.a=this.ad(a)
s=this.b
s.toString
P.is(null,null,s,new P.hL(t,this))}},
bN:function(){H.d(this.a<4)
var t=this.c
this.c=null
return this.ad(t)},
ad:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aQ:function(a){var t,s
H.d(this.a<4)
t=this.$ti
if(H.dH(a,"$isey",t,"$asey"))if(H.dH(a,"$isaw",t,null))P.kE(a,this)
else P.mE(a,this)
else{s=this.bN()
H.d(this.a<4)
this.a=4
this.c=a
P.bR(this,s)}},
aq:function(a,b){var t
H.d(this.a<4)
t=this.bN()
H.d(this.a<4)
this.a=8
this.c=new P.b5(a,b)
P.bR(this,t)},
dL:function(a){return this.aq(a,null)},
$isey:1,
gaY:function(){return this.a},
ge2:function(){return this.c}}
P.hH.prototype={
$0:function(){P.bR(this.a,this.b)},
$S:function(){return{func:1}}}
P.hL.prototype={
$0:function(){P.bR(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.hI.prototype={
$1:function(a){var t=this.a
H.d(t.a===1)
H.d(t.a===1)
t.a=0
t.aQ(a)},
$S:function(){return{func:1,args:[,]}}}
P.hJ.prototype={
$2:function(a,b){var t=this.a
H.d(t.a===1)
t.aq(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.hK.prototype={
$0:function(){this.a.aq(this.b,this.c)},
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
t=q.b.b.cp(q.d)}catch(n){s=H.P(n)
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
p.b=q.c}else p.b=new P.b5(s,r)
p.a=!0
return}if(!!J.w(t).$isey){if(t instanceof P.aw&&t.gaY()>=4){if(t.gaY()===8){q=t
H.d(q.gaY()===8)
p=this.b
p.b=q.ge2()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.cu(new P.hP(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.hP.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.hN.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.d((r.c&1)!==0)
this.a.b=r.b.b.b6(r.d,this.c)}catch(q){t=H.P(q)
s=H.aH(q)
r=this.a
r.b=new P.b5(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.hM.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.d(q.a===8)
t=q.c
q=this.c
if(q.eS(t)){H.d((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.eG(t)
p.a=!1}}catch(o){s=H.P(o)
r=H.aH(o)
q=this.a
p=q.a
H.d(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.d(q.a===8)
m.b=q.c}else m.b=new P.b5(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.dz.prototype={}
P.fO.prototype={
gj:function(a){var t,s
t={}
s=new P.aw(0,$.C,null,[P.n])
t.a=0
this.eQ(new P.fQ(t),!0,new P.fR(t,s),s.gdK())
return s}}
P.fQ.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.fR.prototype={
$0:function(){this.b.aQ(this.a.a)},
$S:function(){return{func:1}}}
P.fP.prototype={}
P.b5.prototype={
k:function(a){return H.f(this.a)},
$isb8:1}
P.io.prototype={}
P.ir.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.dj()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.e(t)
r=H.e(t)
r.stack=s.k(0)
throw r},
$S:function(){return{func:1}}}
P.i1.prototype={
f_:function(a){var t,s,r
try{if(C.d===$.C){a.$0()
return}P.kJ(null,null,this,a)}catch(r){t=H.P(r)
s=H.aH(r)
P.iq(null,null,this,t,s)}},
f0:function(a,b){var t,s,r
try{if(C.d===$.C){a.$1(b)
return}P.kK(null,null,this,a,b)}catch(r){t=H.P(r)
s=H.aH(r)
P.iq(null,null,this,t,s)}},
eg:function(a){return new P.i3(this,a)},
b0:function(a){return new P.i2(this,a)},
eh:function(a){return new P.i4(this,a)},
h:function(a,b){return},
cp:function(a){if($.C===C.d)return a.$0()
return P.kJ(null,null,this,a)},
b6:function(a,b){if($.C===C.d)return a.$1(b)
return P.kK(null,null,this,a,b)},
eZ:function(a,b,c){if($.C===C.d)return a.$2(b,c)
return P.mP(null,null,this,a,b,c)}}
P.i3.prototype={
$0:function(){return this.a.cp(this.b)},
$S:function(){return{func:1}}}
P.i2.prototype={
$0:function(){return this.a.f_(this.b)},
$S:function(){return{func:1}}}
P.i4.prototype={
$1:function(a){return this.a.f0(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.dC.prototype={
ag:function(a){return H.ng(a)&0x3ffffff},
ah:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.hV.prototype={
gw:function(a){var t=new P.bU(this,this.r,null,null,[null])
t.c=this.e
return t},
gj:function(a){return this.a},
B:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dM(b)},
dM:function(a){var t=this.d
if(t==null)return!1
return this.as(t[this.ar(a)],a)>=0},
ck:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.B(0,a)?a:null
else return this.dX(a)},
dX:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.ar(a)]
r=this.as(s,a)
if(r<0)return
return J.bj(s,r).gdO()},
l:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.bD(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.bD(r,b)}else return this.U(0,b)},
U:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.mI()
this.d=t}s=this.ar(b)
r=t[s]
if(r==null){q=[this.aP(b)]
H.d(q!=null)
t[s]=q}else{if(this.as(r,b)>=0)return!1
r.push(this.aP(b))}return!0},
al:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bE(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bE(this.c,b)
else return this.dY(0,b)},
dY:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.ar(b)]
r=this.as(s,b)
if(r<0)return!1
this.bF(s.splice(r,1)[0])
return!0},
W:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
bD:function(a,b){var t
if(a[b]!=null)return!1
t=this.aP(b)
H.d(!0)
a[b]=t
return!0},
bE:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bF(t)
delete a[b]
return!0},
aP:function(a){var t,s
t=new P.hW(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bF:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.r=this.r+1&67108863},
ar:function(a){return J.ao(a)&0x3ffffff},
as:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.F(a[s].a,b))return s
return-1},
$isc:1,
$asc:null}
P.hW.prototype={
gdO:function(){return this.a}}
P.bU.prototype={
gt:function(){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.V(t))
else{t=this.c
if(t==null){this.saa(null)
return!1}else{this.saa(t.a)
this.c=this.c.b
return!0}}},
saa:function(a){this.d=a}}
P.hS.prototype={}
P.d4.prototype={}
P.x.prototype={
gw:function(a){return new H.d5(a,this.gj(a),0,null,[H.a0(a,"x",0)])},
q:function(a,b){return this.h(a,b)},
cl:function(a,b){return new H.bz(a,b,[H.a0(a,"x",0),null])},
eF:function(a,b,c){var t,s,r
t=this.gj(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gj(a))throw H.e(new P.V(a))}return s},
F:function(a,b,c,d,e){var t,s,r,q
P.ji(b,c,this.gj(a),null,null,null)
t=c-b
if(t===0)return
if(H.dH(d,"$isb",[H.a0(a,"x",0)],"$asb")){s=e
r=d}else{r=H.mu(d,e,null,H.a0(d,"x",0)).b8(0,!1)
s=0}if(s+t>r.length)throw H.e(H.kc())
if(s<b)for(q=t-1;q>=0;--q)this.i(a,b+q,r[s+q])
else for(q=0;q<t;++q)this.i(a,b+q,r[s+q])},
a8:function(a,b,c,d){return this.F(a,b,c,d,0)},
bk:function(a,b,c){this.a8(a,b,b+c.length,c)},
k:function(a){return P.eI(a,"[","]")},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
P.eV.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.f(a)
t.a=s+": "
t.a+=H.f(b)},
$S:function(){return{func:1,args:[,,]}}}
P.eS.prototype={
gw:function(a){return new P.hX(this,this.c,this.d,this.b,null,this.$ti)},
gai:function(a){return this.b===this.c},
gj:function(a){return(this.c-this.b&this.a.length-1)>>>0},
q:function(a,b){var t=(this.c-this.b&this.a.length-1)>>>0
if(C.b.ao(0,b)||b>=t)H.D(P.A(b,this,"index",null,t))
return this.a[(C.b.Y(this.b,b)&this.a.length-1)>>>0]},
W:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
k:function(a){return P.eI(this,"{","}")},
co:function(){var t,s,r
t=this.b
if(t===this.c)throw H.e(H.eJ());++this.d
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
if(this.b===t)this.bJ();++this.d},
bJ:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.B(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.F(s,0,q,t,r)
C.a.F(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbP(s)},
dm:function(a,b){var t
H.d(!0)
t=new Array(8)
t.fixed$length=Array
this.sbP(H.B(t,[b]))},
sbP:function(a){this.a=a},
$asc:null}
P.hX.prototype={
gt:function(){return this.e},
p:function(){var t,s
t=this.a
if(this.c!==t.d)H.D(new P.V(t))
s=this.d
if(s===this.b){this.saa(null)
return!1}this.saa(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
saa:function(a){this.e=a}}
P.fF.prototype={
M:function(a,b){var t
for(t=J.bl(b);t.p();)this.l(0,t.gt())},
k:function(a){return P.eI(this,"{","}")},
$isc:1,
$asc:null}
P.fE.prototype={}
P.bH.prototype={$isc:1,$asc:null,$isb:1,$asb:null}
P.ax.prototype={}
P.H.prototype={}
P.bn.prototype={
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.bn))return!1
return this.a===b.a&&this.b===b.b},
S:function(a,b){return C.b.S(this.a,b.a)},
gu:function(a){var t=this.a
return(t^C.b.aX(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.m_(H.mo(this))
s=P.cc(H.mm(this))
r=P.cc(H.mi(this))
q=P.cc(H.mj(this))
p=P.cc(H.ml(this))
o=P.cc(H.mn(this))
n=P.m0(H.mk(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isH:1,
$asH:function(){return[P.bn]}}
P.L.prototype={$isH:1,
$asH:function(){return[P.U]}}
P.aO.prototype={
aF:function(a,b){return C.b.aF(this.a,b.gdN())},
ao:function(a,b){return C.b.ao(this.a,b.gdN())},
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.aO))return!1
return this.a===b.a},
gu:function(a){return this.a&0x1FFFFFFF},
S:function(a,b){return C.b.S(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.e5()
s=this.a
if(s<0)return"-"+new P.aO(0-s).k(0)
r=t.$1(C.b.I(s,6e7)%60)
q=t.$1(C.b.I(s,1e6)%60)
p=new P.e4().$1(s%1e6)
return""+C.b.I(s,36e8)+":"+H.f(r)+":"+H.f(q)+"."+H.f(p)},
$isH:1,
$asH:function(){return[P.aO]}}
P.e4.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.u,args:[P.n]}}}
P.e5.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.u,args:[P.n]}}}
P.b8.prototype={}
P.c7.prototype={
k:function(a){return"Assertion failed"}}
P.dj.prototype={
k:function(a){return"Throw of null."}}
P.ae.prototype={
gaS:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaR:function(){return""},
k:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.f(t)
q=this.gaS()+s+r
if(!this.a)return q
p=this.gaR()
o=P.j9(this.b)
return q+p+": "+H.f(o)}}
P.dm.prototype={
gaS:function(){return"RangeError"},
gaR:function(){var t,s,r
H.d(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.f(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.f(t)
else if(r>t)s=": Not in range "+H.f(t)+".."+H.f(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.f(t)}return s}}
P.eE.prototype={
gaS:function(){return"RangeError"},
gaR:function(){H.d(this.a)
if(J.l9(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.f(t)},
gj:function(a){return this.f}}
P.v.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.dx.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.as.prototype={
k:function(a){return"Bad state: "+this.a}}
P.V.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.f(P.j9(t))+"."}}
P.dr.prototype={
k:function(a){return"Stack Overflow"},
$isb8:1}
P.dY.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.hG.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.f(t)}}
P.e7.prototype={
k:function(a){return"Expando:"+H.f(this.a)},
h:function(a,b){var t,s
t=this.b
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.D(P.jQ(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.kh(b,"expando$values")
return s==null?null:H.kh(s,t)}}
P.n.prototype={$isH:1,
$asH:function(){return[P.U]}}
P.W.prototype={
aD:function(a,b){return new H.dy(this,b,[H.a0(this,"W",0)])},
gj:function(a){var t,s
H.d(!this.$isc)
t=this.gw(this)
for(s=0;t.p();)++s
return s},
ga2:function(a){var t,s
t=this.gw(this)
if(!t.p())throw H.e(H.eJ())
s=t.gt()
if(t.p())throw H.e(H.mf())
return s},
q:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(P.lT("index"))
if(b<0)H.D(P.ai(b,0,null,"index",null))
for(t=this.gw(this),s=0;t.p();){r=t.gt()
if(b===s)return r;++s}throw H.e(P.A(b,this,"index",null,s))},
k:function(a){return P.me(this,"(",")")}}
P.d1.prototype={}
P.b.prototype={$isc:1,$asc:null,$asb:null}
P.aB.prototype={}
P.aU.prototype={
gu:function(a){return P.o.prototype.gu.call(this,this)},
k:function(a){return"null"}}
P.U.prototype={$isH:1,
$asH:function(){return[P.U]}}
P.o.prototype={constructor:P.o,$iso:1,
v:function(a,b){return this===b},
gu:function(a){return H.aV(this)},
k:function(a){return H.fs(this)},
gA:function(a){return new H.aD(H.iA(this),null)},
toString:function(){return this.k(this)}}
P.bK.prototype={}
P.u.prototype={$isH:1,
$asH:function(){return[P.u]}}
P.bL.prototype={
gj:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga3:function(){return this.a}}
W.l.prototype={}
W.dO.prototype={
k:function(a){return String(a)},
$isa:1}
W.dP.prototype={
k:function(a){return String(a)},
$isa:1}
W.a2.prototype={$iso:1}
W.dS.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.a2]},
$isc:1,
$asc:function(){return[W.a2]},
$isq:1,
$asq:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.c8.prototype={}
W.aM.prototype={$isa:1,$isaM:1}
W.c9.prototype={
bb:function(a,b,c){if(c!=null)return this.dR(a,b,P.mZ(c,null))
return this.dS(a,b)},
cO:function(a,b){return this.bb(a,b,null)},
dR:function(a,b,c){return a.getContext(b,c)},
dS:function(a,b){return a.getContext(b)}}
W.ca.prototype={
av:function(a,b,c){return a.addColorStop(b,c)}}
W.cb.prototype={
c8:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
eD:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
aE:function(a){return P.iv(a.getContextAttributes())}}
W.aN.prototype={$isa:1,
gj:function(a){return a.length}}
W.dW.prototype={$isa:1}
W.y.prototype={$iso:1}
W.b7.prototype={
bA:function(a,b){var t,s
t=$.$get$jZ()
s=t[b]
if(typeof s==="string")return s
s=this.e7(a,b)
t[b]=s
return s},
e7:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.m1()+b
if(t in a)return t
return b},
gj:function(a){return a.length}}
W.dX.prototype={}
W.dZ.prototype={
h:function(a,b){return a[b]},
gj:function(a){return a.length}}
W.e_.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.cd.prototype={}
W.bo.prototype={
eb:function(a,b){return a.adoptNode(b)},
cP:function(a,b){return a.getElementById(b)},
eV:function(a,b){return a.querySelector(b)}}
W.ce.prototype={$isa:1}
W.e0.prototype={
k:function(a){return String(a)}}
W.cf.prototype={
er:function(a,b){return a.createHTMLDocument(b)}}
W.e1.prototype={
gaC:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.cg.prototype={
gaC:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.ch.prototype={
k:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.ga1(a))+" x "+H.f(this.ga0(a))},
v:function(a,b){var t
if(b==null)return!1
t=J.w(b)
if(!t.$isJ)return!1
return a.left===t.gb3(b)&&a.top===t.gb9(b)&&this.ga1(a)===t.ga1(b)&&this.ga0(a)===t.ga0(b)},
gu:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.ga1(a)
q=this.ga0(a)
return W.kH(W.b2(W.b2(W.b2(W.b2(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga0:function(a){return a.height},
gb3:function(a){return a.left},
gb9:function(a){return a.top},
ga1:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isJ:1,
$asJ:function(){}}
W.e2.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[P.u]},
$isc:1,
$asc:function(){return[P.u]},
$isq:1,
$asq:function(){return[P.u]},
$isb:1,
$asb:function(){return[P.u]}}
W.e3.prototype={
gj:function(a){return a.length}}
W.a3.prototype={
gee:function(a){return new W.hA(a)},
k:function(a){return a.localName},
N:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.k6
if(t==null){t=H.B([],[W.dg])
s=new W.dh(t)
C.a.l(t,W.kF(null))
C.a.l(t,W.kI())
$.k6=s
d=s}else d=t
t=$.k5
if(t==null){t=new W.dF(d)
$.k5=t
c=t}else{t.a=d
c=t}}if($.az==null){t=document
s=t.implementation
s=(s&&C.B).er(s,"")
$.az=s
$.j8=s.createRange()
s=$.az
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.az.head;(t&&C.C).R(t,r)}t=$.az
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.ju(s,"$isaM")}t=$.az
if(!!this.$isaM)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.az.body;(t&&C.h).R(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.B(C.M,a.tagName)){t=$.j8;(t&&C.y).cR(t,q)
t=$.j8
p=(t&&C.y).ep(t,b)}else{q.innerHTML=b
p=$.az.createDocumentFragment()
for(t=J.k(p);s=q.firstChild,s!=null;)t.R(p,s)}t=$.az.body
if(q==null?t!=null:q!==t)J.lF(q)
c.bj(p)
C.k.eb(document,p)
return p},
eq:function(a,b,c){return this.N(a,b,c,null)},
d0:function(a,b,c,d){a.textContent=null
this.R(a,this.N(a,b,c,d))},
d_:function(a,b){return this.d0(a,b,null,null)},
a6:function(a,b){return a.getAttribute(b)},
dZ:function(a,b){return a.removeAttribute(b)},
$isa:1,
$iso:1,
$isa3:1,
$ish:1,
$ist:1,
gf1:function(a){return a.tagName}}
W.it.prototype={
$1:function(a){return!!J.w(a).$isa3},
$S:function(){return{func:1,args:[,]}}}
W.j.prototype={$iso:1,$isj:1}
W.h.prototype={
dH:function(a,b,c,d){return a.addEventListener(b,H.c0(c,1),!1)},
$iso:1,
$ish:1}
W.a4.prototype={$iso:1}
W.er.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.a4]},
$isc:1,
$asc:function(){return[W.a4]},
$isq:1,
$asq:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.es.prototype={
gj:function(a){return a.length}}
W.ew.prototype={
gj:function(a){return a.length}}
W.a5.prototype={$iso:1}
W.cl.prototype={}
W.eA.prototype={
gj:function(a){return a.length}}
W.bw.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]},
$isq:1,
$asq:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.cm.prototype={}
W.eB.prototype={
H:function(a,b){return a.send(b)}}
W.bx.prototype={}
W.eF.prototype={$isa:1,$isa3:1}
W.aS.prototype={$iso:1,$isj:1,$isaS:1}
W.eT.prototype={
k:function(a){return String(a)}}
W.eY.prototype={
gj:function(a){return a.length}}
W.eZ.prototype={
f8:function(a,b,c){return a.send(b,c)},
H:function(a,b){return a.send(b)}}
W.bA.prototype={}
W.a6.prototype={$iso:1}
W.f_.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.a6]},
$isc:1,
$asc:function(){return[W.a6]},
$isq:1,
$asq:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.M.prototype={$iso:1,$isj:1,$isM:1}
W.f9.prototype={$isa:1}
W.R.prototype={
ga2:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.e(new P.as("No elements"))
if(s>1)throw H.e(new P.as("More than one element"))
return t.firstChild},
M:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.k(s),p=0;p<r;++p)q.R(s,t.firstChild)
return},
i:function(a,b,c){var t=this.a
J.lb(t,c,C.w.h(t.childNodes,b))},
gw:function(a){var t=this.a.childNodes
return new W.ck(t,t.length,-1,null,[H.a0(t,"z",0)])},
F:function(a,b,c,d,e){throw H.e(new P.v("Cannot setRange on Node list"))},
a8:function(a,b,c,d){return this.F(a,b,c,d,0)},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){return C.w.h(this.a.childNodes,b)},
$asc:function(){return[W.t]},
$asd4:function(){return[W.t]},
$asb:function(){return[W.t]},
$asbH:function(){return[W.t]}}
W.t.prototype={
eW:function(a){var t=a.parentNode
if(t!=null)J.bk(t,a)},
k:function(a){var t=a.nodeValue
return t==null?this.d5(a):t},
R:function(a,b){return a.appendChild(b)},
e_:function(a,b){return a.removeChild(b)},
e0:function(a,b,c){return a.replaceChild(b,c)},
$iso:1,
$ish:1,
$ist:1,
gb4:function(a){return a.previousSibling}}
W.df.prototype={
b5:function(a){return a.previousNode()}}
W.bG.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]},
$isq:1,
$asq:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.fi.prototype={$isa:1}
W.fl.prototype={
gj:function(a){return a.length}}
W.a7.prototype={$iso:1,
gj:function(a){return a.length}}
W.fn.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.a7]},
$isc:1,
$asc:function(){return[W.a7]},
$isq:1,
$asq:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.fq.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.fr.prototype={
H:function(a,b){return a.send(b)}}
W.dl.prototype={
ep:function(a,b){return a.createContextualFragment(b)},
cR:function(a,b){return a.selectNodeContents(b)}}
W.fB.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.dn.prototype={
H:function(a,b){return a.send(b)}}
W.fD.prototype={
gj:function(a){return a.length}}
W.fG.prototype={$isa:1}
W.a8.prototype={$iso:1,$ish:1}
W.fH.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.a8]},
$isc:1,
$asc:function(){return[W.a8]},
$isq:1,
$asq:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.a9.prototype={$iso:1}
W.fI.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.a9]},
$isc:1,
$asc:function(){return[W.a9]},
$isq:1,
$asq:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.aa.prototype={$iso:1,
gj:function(a){return a.length}}
W.fN.prototype={
h:function(a,b){return this.bI(a,b)},
ax:function(a,b){var t,s
for(t=0;!0;++t){s=this.dW(a,t)
if(s==null)return
b.$2(s,this.bI(a,s))}},
gj:function(a){return a.length},
bI:function(a,b){return a.getItem(b)},
dW:function(a,b){return a.key(b)}}
W.X.prototype={$iso:1}
W.aj.prototype={}
W.ds.prototype={
N:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aJ(a,b,c,d)
t=W.m2("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.R(s).M(0,new W.R(t))
return s}}
W.fW.prototype={
N:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aJ(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.z.N(t.createElement("table"),b,c,d)
t.toString
t=new W.R(t)
r=t.ga2(t)
r.toString
t=new W.R(r)
q=t.ga2(t)
s.toString
q.toString
new W.R(s).M(0,new W.R(q))
return s}}
W.fX.prototype={
N:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aJ(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.z.N(t.createElement("table"),b,c,d)
t.toString
t=new W.R(t)
r=t.ga2(t)
s.toString
r.toString
new W.R(s).M(0,new W.R(r))
return s}}
W.bM.prototype={$isbM:1}
W.ab.prototype={$iso:1,$ish:1}
W.Y.prototype={$iso:1,$ish:1}
W.h_.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.Y]},
$isc:1,
$asc:function(){return[W.Y]},
$isq:1,
$asq:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.h0.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.ab]},
$isc:1,
$asc:function(){return[W.ab]},
$isq:1,
$asq:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.h2.prototype={
gj:function(a){return a.length}}
W.ac.prototype={$iso:1}
W.aW.prototype={$iso:1,$isj:1,$isaW:1}
W.h6.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.ac]},
$isc:1,
$asc:function(){return[W.ac]},
$isq:1,
$asq:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
W.h7.prototype={
gj:function(a){return a.length}}
W.be.prototype={}
W.h9.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.dv.prototype={
b5:function(a){return a.previousNode()}}
W.aE.prototype={}
W.he.prototype={
k:function(a){return String(a)},
$isa:1}
W.hg.prototype={
gj:function(a){return a.length}}
W.hj.prototype={
gj:function(a){return a.length}}
W.hk.prototype={
H:function(a,b){return a.send(b)}}
W.aY.prototype={
geu:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(new P.v("deltaY is not supported"))},
$iso:1,
$isj:1,
$isM:1,
$isaY:1}
W.bQ.prototype={
ged:function(a){var t,s
t=P.U
s=new P.aw(0,$.C,null,[t])
this.dQ(a)
this.e1(a,W.kM(new W.hm(new P.ig(s,[t]))))
return s},
e1:function(a,b){return a.requestAnimationFrame(H.c0(b,1))},
dQ:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isa:1}
W.hm.prototype={
$1:function(a){this.a.el(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.hn.prototype={$isa:1}
W.aZ.prototype={$isa:1}
W.hv.prototype={
k:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
v:function(a,b){var t,s,r
if(b==null)return!1
t=J.w(b)
if(!t.$isJ)return!1
s=a.left
r=t.gb3(b)
if(s==null?r==null:s===r){s=a.top
r=t.gb9(b)
if(s==null?r==null:s===r){s=a.width
r=t.ga1(b)
if(s==null?r==null:s===r){s=a.height
t=t.ga0(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gu:function(a){var t,s,r,q
t=J.ao(a.left)
s=J.ao(a.top)
r=J.ao(a.width)
q=J.ao(a.height)
return W.kH(W.b2(W.b2(W.b2(W.b2(0,t),s),r),q))},
$isJ:1,
$asJ:function(){},
ga0:function(a){return a.height},
gb3:function(a){return a.left},
gb9:function(a){return a.top},
ga1:function(a){return a.width}}
W.dA.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[P.J]},
$isc:1,
$asc:function(){return[P.J]},
$isq:1,
$asq:function(){return[P.J]},
$isb:1,
$asb:function(){return[P.J]}}
W.hx.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.y]},
$isc:1,
$asc:function(){return[W.y]},
$isq:1,
$asq:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.hy.prototype={$isa:1}
W.hz.prototype={
ga0:function(a){return a.height},
ga1:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.hQ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.a5]},
$isc:1,
$asc:function(){return[W.a5]},
$isq:1,
$asq:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.hR.prototype={$isa:1}
W.dD.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]},
$isq:1,
$asq:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.i9.prototype={$isa:1}
W.ic.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.aa]},
$isc:1,
$asc:function(){return[W.aa]},
$isq:1,
$asq:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.id.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.X]},
$isc:1,
$asc:function(){return[W.X]},
$isq:1,
$asq:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.il.prototype={$isa:1}
W.im.prototype={$isa:1}
W.ht.prototype={
ax:function(a,b){var t,s,r,q,p,o
for(t=this.gE(this),s=t.length,r=this.a,q=J.k(r),p=0;p<t.length;t.length===s||(0,H.E)(t),++p){o=t[p]
b.$2(o,q.a6(r,o))}},
gE:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.B([],[P.u])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.l(s,p.name)}return s},
gdT:function(){return this.a}}
W.hA.prototype={
h:function(a,b){return J.j5(this.a,b)},
gj:function(a){return this.gE(this).length}}
W.hD.prototype={
eQ:function(a,b,c,d){return W.ak(this.a,this.b,a,!1,H.aI(this,0))}}
W.jm.prototype={}
W.hE.prototype={
e9:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.la(r,this.c,t,!1)}},
dC:function(a,b,c,d,e){this.e9()}}
W.hF.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.bT.prototype={
a4:function(a){return $.$get$kG().B(0,W.bp(a))},
V:function(a,b,c){var t,s,r
t=W.bp(a)
s=$.$get$jn()
r=s.h(0,H.f(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
dD:function(a){var t,s
t=$.$get$jn()
if(t.gai(t)){for(s=0;s<262;++s)t.i(0,C.L[s],W.n5())
for(s=0;s<12;++s)t.i(0,C.m[s],W.n6())}}}
W.z.prototype={
gw:function(a){return new W.ck(a,this.gj(a),-1,null,[H.a0(a,"z",0)])},
F:function(a,b,c,d,e){throw H.e(new P.v("Cannot setRange on immutable List."))},
a8:function(a,b,c,d){return this.F(a,b,c,d,0)},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
W.dh.prototype={
a4:function(a){return C.a.bU(this.a,new W.fb(a))},
V:function(a,b,c){return C.a.bU(this.a,new W.fa(a,b,c))}}
W.fb.prototype={
$1:function(a){return a.a4(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.fa.prototype={
$1:function(a){return a.V(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.bW.prototype={
a4:function(a){return this.a.B(0,W.bp(a))},
V:function(a,b,c){var t,s
t=W.bp(a)
s=this.c
if(s.B(0,H.f(t)+"::"+b))return this.d.ec(c)
else if(s.B(0,"*::"+b))return this.d.ec(c)
else{s=this.b
if(s.B(0,H.f(t)+"::"+b))return!0
else if(s.B(0,"*::"+b))return!0
else if(s.B(0,H.f(t)+"::*"))return!0
else if(s.B(0,"*::*"))return!0}return!1},
dF:function(a,b,c,d){var t,s,r
this.a.M(0,c)
t=b.aD(0,new W.ia())
s=b.aD(0,new W.ib())
this.b.M(0,t)
r=this.c
r.M(0,C.N)
r.M(0,s)}}
W.ia.prototype={
$1:function(a){return!C.a.B(C.m,a)},
$S:function(){return{func:1,args:[,]}}}
W.ib.prototype={
$1:function(a){return C.a.B(C.m,a)},
$S:function(){return{func:1,args:[,]}}}
W.ih.prototype={
V:function(a,b,c){if(this.d9(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.j5(a,"template")==="")return this.e.B(0,b)
return!1}}
W.ii.prototype={
$1:function(a){return"TEMPLATE::"+H.f(a)},
$S:function(){return{func:1,args:[,]}}}
W.ie.prototype={
a4:function(a){var t=J.w(a)
if(!!t.$isbJ)return!1
t=!!t.$isG
if(t&&W.bp(a)==="foreignObject")return!1
if(t)return!0
return!1},
V:function(a,b,c){if(b==="is"||C.e.bm(b,"on"))return!1
return this.a4(a)}}
W.ck.prototype={
p:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbK(J.bj(this.a,t))
this.c=t
return!0}this.sbK(null)
this.c=s
return!1},
gt:function(){return this.d},
sbK:function(a){this.d=a}}
W.dg.prototype={}
W.i8.prototype={}
W.dF.prototype={
bj:function(a){new W.ij(this).$2(a,null)},
au:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)J.bk(t,a)}else J.bk(b,a)},
e4:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.lt(a)
r=J.j5(s.gdT(),"is")
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
this.e3(a,b,t,p,o,s,r)}catch(n){if(H.P(n) instanceof P.ae)throw n
else{this.au(a,b)
window
m="Removing corrupted element "+H.f(p)
if(typeof console!="undefined")console.warn(m)}}},
e3:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.au(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.a4(a)){this.au(a,b)
window
t="Removing disallowed element <"+H.f(e)+"> from "+J.ay(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.V(a,"is",g)){this.au(a,b)
window
t="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gE(f)
s=H.B(t.slice(0),[H.aI(t,0)])
for(r=f.gE(f).length-1,t=f.a,q=J.k(t);r>=0;--r){p=s[r]
if(!this.a.V(a,J.lK(p),q.a6(t,p))){window
o="Removing disallowed attribute <"+H.f(e)+" "+p+'="'+H.f(q.a6(t,p))+'">'
if(typeof console!="undefined")console.warn(o)
q.a6(t,p)
q.dZ(t,p)}}if(!!J.w(a).$isbM)this.bj(a.content)}}
W.ij.prototype={
$2:function(a,b){var t,s,r,q
switch(a.nodeType){case 1:this.a.e4(a,b)
break
case 8:case 11:case 3:case 4:break
default:if(b==null){r=a.parentNode
if(r!=null)J.bk(r,a)}else J.bk(b,a)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.lu(t)}catch(q){H.P(q)
r=t
J.bk(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.t,W.t]}}}
W.bq.prototype={$isc:1,
$asc:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.br.prototype={$isc:1,
$asc:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.bs.prototype={$isc:1,
$asc:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.bt.prototype={$isc:1,
$asc:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.bu.prototype={$isc:1,
$asc:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.bv.prototype={$isc:1,
$asc:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.cn.prototype={}
W.cH.prototype={$isc:1,
$asc:function(){return[P.J]},
$isb:1,
$asb:function(){return[P.J]}}
W.ct.prototype={$isc:1,
$asc:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.cA.prototype={$isc:1,
$asc:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.cB.prototype={$isc:1,
$asc:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.cC.prototype={$isc:1,
$asc:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.cD.prototype={$isc:1,
$asc:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.cE.prototype={$isc:1,
$asc:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.cF.prototype={$isc:1,
$asc:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.cG.prototype={$isc:1,
$asc:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.cr.prototype={$isc:1,
$asc:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
W.cs.prototype={$isc:1,
$asc:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.cu.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.cw.prototype={$isc:1,
$asc:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.cx.prototype={$isc:1,
$asc:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.cy.prototype={$isc:1,
$asc:function(){return[P.u]},
$isb:1,
$asb:function(){return[P.u]}}
W.cI.prototype={$isc:1,
$asc:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.cJ.prototype={$isc:1,
$asc:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.cU.prototype={$isc:1,
$asc:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.cV.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.cT.prototype={$isc:1,
$asc:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.cY.prototype={$isc:1,
$asc:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
W.cZ.prototype={$isc:1,
$asc:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.d_.prototype={$isc:1,
$asc:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.d0.prototype={$isc:1,
$asc:function(){return[P.u]},
$isb:1,
$asb:function(){return[P.u]}}
W.cL.prototype={$isc:1,
$asc:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.cN.prototype={$isc:1,
$asc:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.cP.prototype={$isc:1,
$asc:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.cR.prototype={$isc:1,
$asc:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.cW.prototype={$isc:1,
$asc:function(){return[P.J]},
$isb:1,
$asb:function(){return[P.J]}}
W.cX.prototype={$isc:1,
$asc:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
P.iu.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.u,,]}}}
P.hU.prototype={
eT:function(){return Math.random()}}
P.i0.prototype={}
P.J.prototype={$asJ:null}
P.dN.prototype={$isa:1}
P.aL.prototype={$isa:1}
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
P.en.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
P.eo.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ep.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.et.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ev.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.af.prototype={}
P.aA.prototype={$isa:1}
P.eC.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.aq.prototype={$iso:1}
P.eO.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return this.Z(a,b)},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
Z:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.aq]},
$isb:1,
$asb:function(){return[P.aq]}}
P.eW.prototype={$isa:1}
P.eX.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ar.prototype={$iso:1}
P.fc.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return this.Z(a,b)},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
Z:function(a,b){return a.getItem(b)},
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
P.bJ.prototype={$isa:1,$isbJ:1}
P.fS.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return this.Z(a,b)},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
Z:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.u]},
$isb:1,
$asb:function(){return[P.u]}}
P.G.prototype={
N:function(a,b,c,d){var t,s,r,q,p,o
t=H.B([],[W.dg])
C.a.l(t,W.kF(null))
C.a.l(t,W.kI())
C.a.l(t,new W.ie())
c=new W.dF(new W.dh(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.h).eq(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.R(q)
o=t.ga2(t)
for(t=J.k(p);r=o.firstChild,r!=null;)t.R(p,r)
return p},
$isa:1,
$isG:1}
P.fU.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fV.prototype={$isa:1}
P.dt.prototype={}
P.fZ.prototype={$isa:1}
P.bN.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.at.prototype={$iso:1}
P.h8.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return this.Z(a,b)},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
Z:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.at]},
$isb:1,
$asb:function(){return[P.at]}}
P.hf.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.hh.prototype={$isa:1}
P.hi.prototype={$isa:1}
P.bS.prototype={$isa:1}
P.i5.prototype={$isa:1}
P.i6.prototype={$isa:1}
P.i7.prototype={$isa:1}
P.cq.prototype={$isc:1,
$asc:function(){return[P.aq]},
$isb:1,
$asb:function(){return[P.aq]}}
P.co.prototype={$isc:1,
$asc:function(){return[P.u]},
$isb:1,
$asb:function(){return[P.u]}}
P.cv.prototype={$isc:1,
$asc:function(){return[P.ar]},
$isb:1,
$asb:function(){return[P.ar]}}
P.cz.prototype={$isc:1,
$asc:function(){return[P.at]},
$isb:1,
$asb:function(){return[P.at]}}
P.cK.prototype={$isc:1,
$asc:function(){return[P.aq]},
$isb:1,
$asb:function(){return[P.aq]}}
P.cS.prototype={$isc:1,
$asc:function(){return[P.ar]},
$isb:1,
$asb:function(){return[P.ar]}}
P.cO.prototype={$isc:1,
$asc:function(){return[P.at]},
$isb:1,
$asb:function(){return[P.at]}}
P.cQ.prototype={$isc:1,
$asc:function(){return[P.u]},
$isb:1,
$asb:function(){return[P.u]}}
P.dR.prototype={
gj:function(a){return a.length}}
P.fz.prototype={
bS:function(a,b){return a.activeTexture(b)},
bV:function(a,b,c){return a.attachShader(b,c)},
bW:function(a,b,c){return a.bindBuffer(b,c)},
bX:function(a,b,c){return a.bindFramebuffer(b,c)},
bY:function(a,b,c){return a.bindTexture(b,c)},
bZ:function(a,b){return a.blendEquation(b)},
c_:function(a,b,c){return a.blendFunc(b,c)},
c0:function(a,b,c,d){return a.bufferData(b,c,d)},
c2:function(a,b){return a.clear(b)},
c3:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c4:function(a,b){return a.compileShader(b)},
c6:function(a){return a.createBuffer()},
c7:function(a){return a.createProgram()},
c9:function(a,b){return a.createShader(b)},
ca:function(a){return a.createTexture()},
cb:function(a,b){return a.depthMask(b)},
cc:function(a,b){return a.disable(b)},
cd:function(a,b,c,d){return a.drawArrays(b,c,d)},
ce:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cf:function(a,b){return a.enable(b)},
cg:function(a,b){return a.enableVertexAttribArray(b)},
aE:function(a){return P.iv(a.getContextAttributes())},
bc:function(a){return a.getError()},
be:function(a,b){return a.getProgramInfoLog(b)},
bf:function(a,b,c){return a.getProgramParameter(b,c)},
bg:function(a,b){return a.getShaderInfoLog(b)},
bh:function(a,b,c){return a.getShaderParameter(b,c)},
bi:function(a,b,c){return a.getUniformLocation(b,c)},
cj:function(a,b){return a.linkProgram(b)},
cn:function(a,b,c){return a.pixelStorei(b,c)},
bl:function(a,b,c){return a.shaderSource(b,c)},
bn:function(a,b,c,d){return a.stencilFunc(b,c,d)},
b7:function(a,b,c,d,e,f,g,h,i,j){this.aZ(a,b,c,d,e,f,g)
return},
cr:function(a,b,c,d,e,f,g){return this.b7(a,b,c,d,e,f,g,null,null,null)},
aZ:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cs:function(a,b,c,d){return a.texParameterf(b,c,d)},
ct:function(a,b,c,d){return a.texParameteri(b,c,d)},
cw:function(a,b,c){return a.uniform1f(b,c)},
cz:function(a,b,c){return a.uniform1fv(b,c)},
cA:function(a,b,c){return a.uniform1i(b,c)},
cB:function(a,b,c){return a.uniform1iv(b,c)},
cC:function(a,b,c){return a.uniform2fv(b,c)},
cD:function(a,b,c){return a.uniform3fv(b,c)},
cE:function(a,b,c){return a.uniform4fv(b,c)},
cF:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cG:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cI:function(a,b){return a.useProgram(b)},
cK:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cL:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fA.prototype={
ef:function(a,b){return a.beginTransformFeedback(b)},
ei:function(a,b){return a.bindVertexArray(b)},
es:function(a){return a.createVertexArray()},
eA:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
eB:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
eC:function(a){return a.endTransformFeedback()},
f5:function(a,b,c,d){this.e8(a,b,c,d)
return},
e8:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
f6:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bS:function(a,b){return a.activeTexture(b)},
bV:function(a,b,c){return a.attachShader(b,c)},
bW:function(a,b,c){return a.bindBuffer(b,c)},
bX:function(a,b,c){return a.bindFramebuffer(b,c)},
bY:function(a,b,c){return a.bindTexture(b,c)},
bZ:function(a,b){return a.blendEquation(b)},
c_:function(a,b,c){return a.blendFunc(b,c)},
c0:function(a,b,c,d){return a.bufferData(b,c,d)},
c2:function(a,b){return a.clear(b)},
c3:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c4:function(a,b){return a.compileShader(b)},
c6:function(a){return a.createBuffer()},
c7:function(a){return a.createProgram()},
c9:function(a,b){return a.createShader(b)},
ca:function(a){return a.createTexture()},
cb:function(a,b){return a.depthMask(b)},
cc:function(a,b){return a.disable(b)},
cd:function(a,b,c,d){return a.drawArrays(b,c,d)},
ce:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cf:function(a,b){return a.enable(b)},
cg:function(a,b){return a.enableVertexAttribArray(b)},
aE:function(a){return P.iv(a.getContextAttributes())},
bc:function(a){return a.getError()},
be:function(a,b){return a.getProgramInfoLog(b)},
bf:function(a,b,c){return a.getProgramParameter(b,c)},
bg:function(a,b){return a.getShaderInfoLog(b)},
bh:function(a,b,c){return a.getShaderParameter(b,c)},
bi:function(a,b,c){return a.getUniformLocation(b,c)},
cj:function(a,b){return a.linkProgram(b)},
cn:function(a,b,c){return a.pixelStorei(b,c)},
bl:function(a,b,c){return a.shaderSource(b,c)},
bn:function(a,b,c,d){return a.stencilFunc(b,c,d)},
b7:function(a,b,c,d,e,f,g,h,i,j){this.aZ(a,b,c,d,e,f,g)
return},
cr:function(a,b,c,d,e,f,g){return this.b7(a,b,c,d,e,f,g,null,null,null)},
aZ:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cs:function(a,b,c,d){return a.texParameterf(b,c,d)},
ct:function(a,b,c,d){return a.texParameteri(b,c,d)},
cw:function(a,b,c){return a.uniform1f(b,c)},
cz:function(a,b,c){return a.uniform1fv(b,c)},
cA:function(a,b,c){return a.uniform1i(b,c)},
cB:function(a,b,c){return a.uniform1iv(b,c)},
cC:function(a,b,c){return a.uniform2fv(b,c)},
cD:function(a,b,c){return a.uniform3fv(b,c)},
cE:function(a,b,c){return a.uniform4fv(b,c)},
cF:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cG:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cI:function(a,b){return a.useProgram(b)},
cK:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cL:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isa:1}
P.ik.prototype={$isa:1}
P.fJ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return P.iv(this.dV(a,b))},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
dV:function(a,b){return a.item(b)},
$isc:1,
$asc:function(){return[P.aB]},
$isb:1,
$asb:function(){return[P.aB]}}
P.cp.prototype={$isc:1,
$asc:function(){return[P.aB]},
$isb:1,
$asb:function(){return[P.aB]}}
P.cM.prototype={$isc:1,
$asc:function(){return[P.aB]},
$isb:1,
$asb:function(){return[P.aB]}}
B.iS.prototype={
$1:function(a){$.$get$iw().i(0,a.which,!0)},
$S:function(){return{func:1,args:[W.aS]}}}
B.iT.prototype={
$1:function(a){$.$get$iw().i(0,a.which,null)},
$S:function(){return{func:1,args:[W.aS]}}}
B.iU.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.mX=t
$.mY=C.b.a9(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.jx=s-C.b.I(window.innerWidth,2)
$.l2=-(t-C.b.I(window.innerHeight,2))},
$S:function(){return{func:1,args:[W.M]}}}
B.iV.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.c3=t-C.b.I(window.innerWidth,2)
$.c4=-(s-C.b.I(window.innerHeight,2))
if(a.button===2)$.$get$c1().i(0,"right",!0)
else $.$get$c1().i(0,"left",!0)},
$S:function(){return{func:1,args:[W.M]}}}
B.iW.prototype={
$1:function(a){if(a.button===2)$.$get$c1().i(0,"right",null)
else $.$get$c1().i(0,"left",null)},
$S:function(){return{func:1,args:[W.M]}}}
B.fd.prototype={
dn:function(a,b,c,d){var t
d.toString
W.ak(d,W.n4().$1(d),new B.fe(this),!1,W.aY)
W.ak(d,"mousemove",new B.ff(this),!1,W.M)
t=W.aW
W.ak(d,"touchstart",new B.fg(),!1,t)
W.ak(d,"touchmove",new B.fh(this),!1,t)
B.nk(null)}}
B.fe.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.a5.geu(a)*r.k3
if(C.c.a9(r.fy,t)>0)r.fy=H.Z(C.c.a9(r.fy,t))}catch(q){s=H.P(q)
P.am(s)}},
$S:function(){return{func:1,args:[W.aY]}}}
B.ff.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=H.Z(t.go+C.b.a9($.jx,$.c3)*0.01)
s=t.id
r=$.c4
q=$.l2
t.id=H.Z(s+(r-q)*0.01)
$.c3=$.jx
$.c4=q}},
$S:function(){return{func:1,args:[W.M]}}}
B.fg.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.a5(t.clientX)
C.c.a5(t.clientY)
$.c3=s
C.c.a5(t.clientX)
$.c4=C.c.a5(t.clientY)},
$S:function(){return{func:1,args:[W.aW]}}}
B.fh.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.a5(t.clientX)
t=C.c.a5(t.clientY)
r=this.a
r.go=H.Z(r.go+C.b.a9(s,$.c3)*0.01)
r.id=H.Z(r.id+($.c4-t)*0.01)
$.c3=s
$.c4=t},
$S:function(){return{func:1,args:[W.aW]}}}
G.f0.prototype={}
G.dw.prototype={
L:function(a,b){var t=this.d
if(H.aG(!t.D(0,a)))H.b3("uniform "+a+" already set")
t.i(0,a,b)},
bs:function(){return this.d},
k:function(a){var t,s,r,q
t=H.B(["{"+new H.aD(H.iA(this),null).k(0)+"}["+this.a+"]"],[P.u])
for(s=this.d,r=s.gE(s),r=r.gw(r);r.p();){q=r.gt()
C.a.l(t,H.f(q)+": "+H.f(s.h(0,q)))}return C.a.aj(t,"\n")}}
G.dT.prototype={}
G.dV.prototype={
ci:function(a,b,c){J.lq(this.a,b)
if(c>0)J.lQ(this.a,b,c)}}
G.ex.prototype={}
G.eq.prototype={}
G.ez.prototype={
dd:function(a){var t,s,r
H.d(!0)
t=this.d.length
for(s=this.c,r=0;r<a;++r,t+=4)C.a.l(s,new G.eq(t,t+1,t+2,t+3))},
ap:function(a){var t,s,r,q,p
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.E)(a),++r){q=a[r]
p=new T.p(new Float32Array(3))
p.C(q)
C.a.l(s,p)}},
dc:function(a,b){var t,s,r,q,p,o,n
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.E)(b),++q){p=b[q]
o=new Float32Array(2)
n=p.a
o[1]=n[1]
o[0]=n[0]
r.l(t,new T.ad(o))}},
di:function(){var t,s,r,q,p,o,n,m,l,k
t=this.b
H.d(t.length>0||this.c.length>0)
s=this.c
r=new Array(t.length*3+s.length*6)
r.fixed$length=Array
q=H.B(r,[P.n])
for(r=t.length,p=0,o=0;n=t.length,o<n;n===r||(0,H.E)(t),++o){m=t[o]
q[p]=m.a
q[p+1]=m.b
q[p+2]=m.c
p+=3}for(t=s.length,o=0;r=s.length,o<r;r===t||(0,H.E)(s),++o){l=s[o]
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
dj:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=this.d
s=new Array(t.length)
s.fixed$length=Array
r=H.B(s,[T.p])
q=new T.p(new Float32Array(H.r(3)))
p=new T.p(new Float32Array(H.r(3)))
for(s=this.b,o=s.length,n=0;n<s.length;s.length===o||(0,H.E)(s),++n){m=s[n]
l=m.a
k=m.b
j=m.c
G.kg(t[l],t[k],t[j],q,p)
i=new T.p(new Float32Array(3))
i.C(p)
r[l]=i
l=new T.p(new Float32Array(3))
l.C(p)
r[k]=l
l=new T.p(new Float32Array(3))
l.C(p)
r[j]=l}for(s=this.c,o=s.length,n=0;n<s.length;s.length===o||(0,H.E)(s),++n){h=s[n]
l=h.a
k=h.b
j=h.c
G.kg(t[l],t[k],t[j],q,p)
i=new T.p(new Float32Array(3))
i.C(p)
r[l]=i
l=new T.p(new Float32Array(3))
l.C(p)
r[k]=l
l=new T.p(new Float32Array(3))
l.C(p)
r[j]=l
l=new T.p(new Float32Array(3))
l.C(p)
r[h.d]=l}this.e.i(0,"aNormal",r)},
k:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gE(s),r=r.gw(r);r.p();){q=r.gt()
p=$.$get$S().h(0,q).a
C.a.l(t,H.f(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.aj(t," ")}}
G.du.prototype={}
G.bP.prototype={}
G.d7.prototype={}
G.d8.prototype={
bq:function(a,b,c){var t,s
if(C.e.aO(a,0)===105){if(H.aG(C.b.aK(b.length,c)===this.z))H.b3("ChangeAttribute "+this.z)}else H.d(C.b.aK(b.length,c)===(this.ch.length/3|0))
this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.dL(t.a,34962,s)
J.jD(t.a,34962,b,35048)},
dk:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
a_:function(a,b,c){var t,s,r,q,p,o
t=J.jA(a,0)===105
if(t&&this.z===0)this.z=C.b.aK(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.j1(r.a))
this.bq(a,b,c)
q=$.$get$S().h(0,a)
if(q==null)throw H.e("Unknown canonical "+a)
p=this.x
if(H.aG(p.D(0,a)))H.b3("unexpected attribute "+a)
o=p.h(0,a)
J.dM(r.a,this.e)
r.ci(0,o,t?1:0)
s=s.h(0,a)
p=q.br()
J.dL(r.a,34962,s)
J.jO(r.a,o,p,5126,!1,0,0)},
ap:function(a){var t,s,r,q,p
t=this.r
s=this.d
t.i(0,"aPosition",J.j1(s.a))
this.ch=a
this.bq("aPosition",a,3)
r=$.$get$S().h(0,"aPosition")
if(r==null)throw H.e("Unknown canonical aPosition")
q=this.x
H.d(q.D(0,"aPosition"))
p=q.h(0,"aPosition")
J.dM(s.a,this.e)
s.ci(0,p,0)
t=t.h(0,"aPosition")
q=r.br()
J.dL(s.a,34962,t)
J.jO(s.a,p,q,5126,!1,0,0)},
k:function(a){var t,s,r
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,t=t.gE(t),t=t.gw(t);t.p();){r=t.gt()
C.a.l(s,H.f(r)+":"+this.cy.h(0,r).length)}return"MESH["+this.a+"] "+C.a.aj(s,"  ")},
saT:function(a){this.cx=a}}
G.fk.prototype={
de:function(a,b){var t=C.b.cN(a,b)
if(this.z===t)return
this.z=t
this.bt()},
bt:function(){var t,s,r,q,p,o,n
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
bs:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.p(new Float32Array(H.r(3)))
o.aG(r,q,p)
p=this.d
p.i(0,"uEyePosition",o)
o=this.cy
o.C(t)
t=o.a
t[12]=0
t[13]=0
t[14]=0
t[15]=1
n=-s[12]
m=-s[13]
l=-s[14]
s=J.w(n)
r=!!s.$isaF
k=r?s.gaC(n):1
if(!!s.$isp){j=s.gm(n)
m=s.gn(n)
l=s.gK(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
l=s.gK(n)
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
a3.C(this.db)
a3.cm(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.fy.prototype={
dw:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gj(t)===s.gj(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gE(s),s=s.gw(s);s.p();){q=s.gt()
if(!t.D(0,q))C.a.l(r,q)}for(t=this.x,s=new P.bU(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.p();){q=s.d
if(!t.B(0,q))C.a.l(r,q)}return r},
dB:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gE(b),s=s.gw(s),r=this.d,q=this.y,p=this.z,o=0;s.p();){n=s.gt()
switch(J.jA(n,0)){case 117:if(q.D(0,n)){m=b.h(0,n)
if(p.D(0,n))H.iQ("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$S().h(0,n)
if(l==null)H.D("unknown "+n)
H.d(q.D(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.j6(r.a,k,m)
else if(!!J.w(m).$isk9)J.lO(r.a,k,m)
break
case"float":if(l.c===0)J.lM(r.a,k,m)
else if(!!J.w(m).$iseu)J.lN(r.a,k,m)
break
case"mat4":if(l.c===0){j=H.aJ(m,"$isO").a
J.jN(r.a,k,!1,j)}else if(!!J.w(m).$iseu)J.jN(r.a,k,!1,m)
else if(H.aG(!1))H.b3("bad unform: "+n)
break
case"mat3":if(l.c===0){j=H.aJ(m,"$isaC").a
J.jM(r.a,k,!1,j)}else if(!!J.w(m).$iseu)J.jM(r.a,k,!1,m)
else if(H.aG(!1))H.b3("bad unform: "+n)
break
case"vec4":if(l.c===0){j=H.aJ(m,"$isaF").a
J.jL(r.a,k,j)}else J.jL(r.a,k,m)
break
case"vec3":if(l.c===0){j=H.aJ(m,"$isp").a
J.jK(r.a,k,j)}else J.jK(r.a,k,m)
break
case"vec2":if(l.c===0){j=H.aJ(m,"$isad").a
J.jJ(r.a,k,j)}else J.jJ(r.a,k,m)
break
case"sampler2D":case"sampler2DShadow":j=C.b.Y(33984,this.ch)
J.jB(r.a,j)
j=H.aJ(m,"$isbO").b
J.c5(r.a,3553,j)
j=this.ch
J.j6(r.a,k,j)
this.ch=this.ch+1
break
case"samplerCube":H.d(n==="uCubeTexture")
j=C.b.Y(33984,this.ch)
J.jB(r.a,j)
j=H.aJ(m,"$isbO").b
J.c5(r.a,34067,j)
j=this.ch
J.j6(r.a,k,j)
this.ch=this.ch+1
break
default:H.iQ("Error: unknow uniform type: "+j)
H.d(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":if(J.F(m,!0))J.c6(r.a,2929)
else J.j2(r.a,2929)
break
case"cStencilFunc":H.aJ(m,"$isdu")
j=m.a
if(j===1281)J.j2(r.a,2960)
else{J.c6(r.a,2960)
i=m.b
h=m.c
J.lH(r.a,j,i,h)}break
case"cDepthWrite":J.ll(r.a,m)
break
case"cBlendEquation":H.aJ(m,"$isbP")
j=m.a
if(j===1281)J.j2(r.a,3042)
else{J.c6(r.a,3042)
i=m.b
h=m.c
J.lf(r.a,i,h)
J.le(r.a,j)}break}++o
break}}s=Date.now()
""+o
new P.aO(1000*(s-new P.bn(t,!1).a)).k(0)},
dh:function(a,b,c){var t,s,r,q,p,o,n,m,l
Date.now()
t=this.d
s=this.r
J.lP(t.a,s)
this.ch=0
this.z.W(0)
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.E)(b),++r){q=b[r]
this.dB(q.a,q.bs())}s=this.Q
s.W(0)
for(p=a.cy,p=p.gE(p),p=p.gw(p);p.p();)s.l(0,p.gt())
o=this.dw()
if(o.length!==0)P.am("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.f(o)))
J.dM(a.d.a,a.e)
n=this.e.f.length>0
s=a.f
p=a.dk()
m=a.Q
l=a.z
t.toString
if(n)J.lc(t.a,s)
if(m!==-1)if(l>1)J.lp(t.a,s,p,m,0,l)
else J.lo(t.a,s,p,m,0)
else if(l>1)J.ln(t.a,s,0,p,l)
else J.lm(t.a,s,0,p)
if(n)J.lr(t.a)},
dq:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j
t=this.d
s=this.e
r=s.b
q=this.f
p=q.b
o=s.f
n=J.lj(t.a)
m=G.kD(t.a,35633,r)
J.jC(t.a,n,m)
l=G.kD(t.a,35632,p)
J.jC(t.a,n,l)
if(o.length>0)J.lL(t.a,n,o,35980)
J.lC(t.a,n)
if(!J.lB(t.a,n,35714))H.D(J.lA(t.a,n))
this.r=n
this.sdI(0,P.jf(s.c,null))
for(s=s.d,r=s.length,p=this.y,k=0;k<s.length;s.length===r||(0,H.E)(s),++k){j=s[k]
o=this.r
p.i(0,j,J.jH(t.a,o,j))}for(s=q.d,r=s.length,k=0;k<s.length;s.length===r||(0,H.E)(s),++k){j=s[k]
q=this.r
p.i(0,j,J.jH(t.a,q,j))}},
sdI:function(a,b){this.x=b}}
G.i.prototype={
br:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.d(!1)
return-1}}}
G.bd.prototype={
aL:function(a){var t,s,r,q,p
H.d(this.b==null)
for(t=a.length,s=this.c,r=this.x,q=0;q<a.length;a.length===t||(0,H.E)(a),++q){p=a[q]
H.d($.$get$S().D(0,p))
H.d(!C.a.B(s,p))
C.a.l(s,p)
r.i(0,p,this.r);++this.r}C.a.aH(s)},
aM:function(a){var t,s,r,q
H.d(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.E)(a),++r){q=a[r]
if(H.aG($.$get$S().D(0,q)))H.b3("missing uniform "+q)
H.d(!C.a.B(s,q))
C.a.l(s,q)}C.a.aH(s)},
bp:function(a){var t,s,r
H.d(this.b==null)
for(t=this.e,s=0;s<1;++s){r=a[s]
H.d($.$get$S().D(0,r))
H.d(!C.a.B(t,r))
C.a.l(t,r)}C.a.aH(t)},
dr:function(a,b){H.d(this.b==null)
this.b=this.bu(!0,a,b)},
aN:function(a){return this.dr(a,null)},
bu:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.d(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.E)(t),++o){n=t[o]
m=$.$get$S().h(0,n)
C.a.l(q,"layout (location="+H.f(p.h(0,n))+") in "+m.a+" "+H.f(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.E)(t),++o){k=t[o]
m=$.$get$S().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.f(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.E)(t),++o){k=t[o]
m=$.$get$S().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.f(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.E)(t),++o){k=t[o]
m=$.$get$S().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.f(k)+j+";")}C.a.l(q,"")
if(a)C.a.l(q,"void main(void) {")
C.a.M(q,b)
if(a)C.a.l(q,"}")
return C.a.aj(q,"\n")}}
G.dq.prototype={
bd:function(){var t,s,r
t=this.e
s=this.d.a
r=t.a
r[0]=s[12]
r[1]=s[13]
r[2]=s[14]
return t},
d1:function(a,b,c){var t=this.d.a
t[12]=a
t[13]=b
t[14]=c}}
G.h1.prototype={
dl:function(a,b){var t=this.e
if(t!==1)J.lJ(a.a,b,34046,t)
J.jI(a.a,b,10240,this.r)
J.jI(a.a,b,10241,this.f)}}
G.bO.prototype={
k:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.eD.prototype={
ds:function(a){var t,s
t=this.d
s=this.c
J.c5(t.a,s,this.b)
J.lI(t.a,s,0,6408,6408,5121,a)}}
R.fL.prototype={
dE:function(a,b,c,d){var t,s,r,q,p
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
p=(r&&C.q).bA(r,"float")
r.setProperty(p,"left","")
p=C.q.bA(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.j.R(t,s)}return t},
dt:function(a,b,c){var t,s,r
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
J.j_(this.a,s)
r=this.dE(b,c,90,30)
this.d=r
J.j_(this.a,r)
t=t.createElement("div")
this.c=t
J.j_(this.a,t)}}
R.fM.prototype={
dA:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.t.f4(s,2)+" fps"
t=this.c;(t&&C.j).d_(t,b)
r=C.b.I(30*C.t.ej(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.j).R(t,q)},
dz:function(a){return this.dA(a,"")}}
A.de.prototype={
k:function(a){return"NODE["+this.a+"]"}}
A.bI.prototype={}
A.fx.prototype={
dg:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.d
s=this.r
r=this.z
q=this.Q
p=t.a
t=t.b
J.ld(p.a,36160,t)
H.d(r>0&&q>0)
J.lR(p.a,this.x,this.y,r,q)
if(s!==0)J.lg(p.a,s)
for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.E)(t),++o){n=t[o]
m=n.e
C.a.l(m,new G.dw(P.I(),"transforms",!1,!0))
l=new T.O(new Float32Array(16))
l.P()
for(r=n.f,q=r.length,p=n.d,k=0;k<r.length;r.length===q||(0,H.E)(r),++k)A.kR(p,r[k],l,a,m)
m.pop()}},
df:function(){return this.dg(null)}}
A.iB.prototype={
$2:function(a,b){var t=536870911&a+J.ao(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(){return{func:1,args:[P.n,P.o]}}}
T.aC.prototype={
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
k:function(a){return"[0] "+this.T(0).k(0)+"\n[1] "+this.T(1).k(0)+"\n[2] "+this.T(2).k(0)+"\n"},
h:function(a,b){return this.a[b]},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aC){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gu:function(a){return A.dI(this.a)},
T:function(a){var t,s
t=new Float32Array(H.r(3))
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.p(t)},
eo:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
T.O.prototype={
a7:function(a,b,c){H.d(a<4)
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
k:function(a){return"[0] "+this.T(0).k(0)+"\n[1] "+this.T(1).k(0)+"\n[2] "+this.T(2).k(0)+"\n[3] "+this.T(3).k(0)+"\n"},
h:function(a,b){return this.a[b]},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.O){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gu:function(a){return A.dI(this.a)},
T:function(a){var t,s
t=new Float32Array(H.r(4))
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.aF(t)},
P:function(){var t=this.a
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
c5:function(a){var t,s
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
cm:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.ad.prototype={
k:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+"]"},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.ad){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gu:function(a){return A.dI(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.p.prototype={
aG:function(a,b,c){var t=this.a
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
return"["+H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+"]"},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.p){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gu:function(a){return A.dI(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){return Math.sqrt(this.gaB())},
gaB:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
ak:function(a){var t,s,r
t=Math.sqrt(this.gaB())
if(t===0)return 0
s=1/t
r=this.a
r[0]=r[0]*s
r[1]=r[1]*s
r[2]=r[2]*s
return t},
b2:function(a){var t,s
t=a.a
s=this.a
return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]},
aw:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.p(new Float32Array(H.r(3)))
t.aG(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
aI:function(a){var t,s
t=a.a
s=this.a
s[0]=s[0]-t[0]
s[1]=s[1]-t[1]
s[2]=s[2]-t[2]},
cQ:function(a,b){var t=this.a
t[2]=t[2]*b
t[1]=t[1]*b
t[0]=t[0]*b},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gK:function(a){return this.a[2]}}
T.aF.prototype={
k:function(a){var t=this.a
return H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+","+H.f(t[3])},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aF){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gu:function(a){return A.dI(this.a)},
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
gK:function(a){return this.a[2]},
gaC:function(a){return this.a[3]}}
U.iN.prototype={
$1:function(a){var t,s,r
t=this.a
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.am("size change "+H.f(s)+" "+H.f(r))
this.b.de(s,r)
t=this.c
t.z=s
t.Q=r},
$S:function(){return{func:1,v:true,args:[W.j]}}}
U.iM.prototype={
$1:function(b2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
this.a.a=b2+0
t=this.c
t.go=H.Z(t.go+0.001)
s=t.k4
if(s.h(0,37)!=null)t.go=H.Z(t.go+0.03)
else if(s.h(0,39)!=null)t.go=H.Z(t.go-0.03)
if(s.h(0,38)!=null)t.id=H.Z(t.id+0.03)
else if(s.h(0,40)!=null)t.id=H.Z(t.id-0.03)
if(s.h(0,33)!=null)t.fy=H.Z(t.fy*0.99)
else if(s.h(0,34)!=null)t.fy=H.Z(t.fy*1.01)
if(s.h(0,32)!=null){t.go=0
t.id=0}s=H.Z(C.c.ek(t.id,-1.4707963267948965,1.4707963267948965))
t.id=s
r=t.fy
q=t.go
p=r*Math.cos(s)
t.d1(p*Math.cos(q),r*Math.sin(s),p*Math.sin(q))
q=t.k2
s=t.d.a
r=q.a
s[12]=s[12]+r[0]
s[13]=s[13]+r[1]
s[14]=s[14]+r[2]
r=s[12]
o=s[13]
n=s[14]
m=new T.p(new Float32Array(H.r(3)))
m.aG(0,1,0)
l=t.bd()
k=new Float32Array(H.r(3))
j=new T.p(k)
j.C(l)
j.aI(q)
j.ak(0)
i=m.aw(j)
i.ak(0)
h=j.aw(i)
h.ak(0)
q=i.b2(l)
g=h.b2(l)
l=j.b2(l)
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
s[15]=1
s[14]=-l
s[13]=-g
s[12]=-q
s[11]=0
s[10]=k
s[9]=d
s[8]=f
s[7]=0
s[6]=a1
s[5]=a0
s[4]=a
s[3]=0
s[2]=b
s[1]=c
s[0]=e
s[12]=r
s[13]=o
s[14]=n
n=t.f
o=n.a
o[0]=s[2]
o[1]=s[6]
o[2]=s[10]
t=-t.k1
n=Math.sqrt(n.gaB())
i=o[0]/n
h=o[1]/n
j=o[2]/n
n=Math.cos(t)
t=Math.sin(t)
a2=1-n
a3=i*i*a2+n
o=j*t
a4=i*h*a2-o
r=h*t
a5=i*j*a2+r
a6=h*i*a2+o
a7=h*h*a2+n
t=i*t
a8=h*j*a2-t
a9=j*i*a2-r
b0=j*h*a2+t
b1=j*j*a2+n
n=s[0]
t=s[4]
r=s[8]
o=s[1]
e=s[5]
c=s[9]
b=s[2]
a=s[6]
a0=s[10]
a1=s[3]
f=s[7]
d=s[11]
s[0]=n*a3+t*a6+r*a9
s[1]=o*a3+e*a6+c*a9
s[2]=b*a3+a*a6+a0*a9
s[3]=a1*a3+f*a6+d*a9
s[4]=n*a4+t*a7+r*b0
s[5]=o*a4+e*a7+c*b0
s[6]=b*a4+a*a7+a0*b0
s[7]=a1*a4+f*a7+d*b0
s[8]=n*a5+t*a8+r*b1
s[9]=o*a5+e*a8+c*b1
s[10]=b*a5+a*a8+a0*b1
s[11]=a1*a5+f*a8+d*b1
this.d.df()
C.a6.ged(window).cu(this)
this.b.dz(b2)},
$S:function(){return{func:1,v:true,args:[P.U]}}}
J.a.prototype.d5=J.a.prototype.k
J.by.prototype.d7=J.by.prototype.k
P.x.prototype.d8=P.x.prototype.F
P.W.prototype.d6=P.W.prototype.aD
W.a3.prototype.aJ=W.a3.prototype.N
W.bW.prototype.d9=W.bW.prototype.V;(function installTearOffs(){installTearOff(H.b0.prototype,"geP",0,0,0,null,["$0"],["az"],0)
installTearOff(H.al.prototype,"gcS",0,0,0,null,["$1"],["J"],2)
installTearOff(H.b_.prototype,"gew",0,0,0,null,["$1"],["X"],2)
installTearOff(P,"mT",1,0,0,null,["$1"],["mA"],1)
installTearOff(P,"mU",1,0,0,null,["$1"],["mB"],1)
installTearOff(P,"mV",1,0,0,null,["$1"],["mC"],1)
installTearOff(P,"kQ",1,0,0,null,["$0"],["mR"],0)
installTearOff(P.aw.prototype,"gdK",0,0,0,null,["$2","$1"],["aq","dL"],5)
installTearOff(P,"n_",1,0,0,null,["$2"],["lZ"],6)
installTearOff(W,"n4",1,0,0,null,["$1"],["m3"],7)
installTearOff(W,"n5",1,0,0,null,["$4"],["mG"],4)
installTearOff(W,"n6",1,0,0,null,["$4"],["mH"],4)
installTearOff(W.df.prototype,"gb4",0,1,0,null,["$0"],["b5"],3)
installTearOff(W.dv.prototype,"gb4",0,1,0,null,["$0"],["b5"],3)
installTearOff(U,"l0",1,0,0,null,["$0"],["ne"],0)})();(function inheritance(){inherit(P.o,null)
var t=P.o
inherit(H.jc,t)
inherit(J.a,t)
inherit(J.dQ,t)
inherit(P.W,t)
inherit(H.d5,t)
inherit(P.d1,t)
inherit(H.cj,t)
inherit(H.b6,t)
inherit(H.hZ,t)
inherit(H.b0,t)
inherit(H.hB,t)
inherit(H.b1,t)
inherit(H.hY,t)
inherit(H.hu,t)
inherit(H.bc,t)
inherit(H.h3,t)
inherit(H.ap,t)
inherit(H.al,t)
inherit(H.b_,t)
inherit(H.fw,t)
inherit(H.ha,t)
inherit(P.b8,t)
inherit(H.dE,t)
inherit(H.aD,t)
inherit(H.ag,t)
inherit(H.eP,t)
inherit(H.eR,t)
inherit(P.hw,t)
inherit(P.dB,t)
inherit(P.aw,t)
inherit(P.dz,t)
inherit(P.fO,t)
inherit(P.fP,t)
inherit(P.b5,t)
inherit(P.io,t)
inherit(P.fF,t)
inherit(P.hW,t)
inherit(P.bU,t)
inherit(P.bH,t)
inherit(P.x,t)
inherit(P.hX,t)
inherit(P.ax,t)
inherit(P.H,t)
inherit(P.bn,t)
inherit(P.U,t)
inherit(P.aO,t)
inherit(P.dr,t)
inherit(P.hG,t)
inherit(P.e7,t)
inherit(P.b,t)
inherit(P.aB,t)
inherit(P.aU,t)
inherit(P.bK,t)
inherit(P.u,t)
inherit(P.bL,t)
inherit(W.dX,t)
inherit(W.ht,t)
inherit(W.bT,t)
inherit(W.z,t)
inherit(W.dh,t)
inherit(W.bW,t)
inherit(W.ie,t)
inherit(W.ck,t)
inherit(W.dg,t)
inherit(W.i8,t)
inherit(W.dF,t)
inherit(P.hU,t)
inherit(P.i0,t)
inherit(G.f0,t)
inherit(G.dV,t)
inherit(G.ex,t)
inherit(G.eq,t)
inherit(G.ez,t)
inherit(G.du,t)
inherit(G.bP,t)
inherit(G.i,t)
inherit(G.bd,t)
inherit(G.h1,t)
inherit(G.bO,t)
inherit(R.fL,t)
inherit(T.aC,t)
inherit(T.O,t)
inherit(T.ad,t)
inherit(T.p,t)
inherit(T.aF,t)
t=J.a
inherit(J.eK,t)
inherit(J.eL,t)
inherit(J.by,t)
inherit(J.aP,t)
inherit(J.b9,t)
inherit(J.aQ,t)
inherit(H.bB,t)
inherit(H.bb,t)
inherit(W.h,t)
inherit(W.a2,t)
inherit(W.c8,t)
inherit(W.ca,t)
inherit(W.cb,t)
inherit(W.y,t)
inherit(W.cn,t)
inherit(W.dZ,t)
inherit(W.e_,t)
inherit(W.e0,t)
inherit(W.cf,t)
inherit(W.cg,t)
inherit(W.ch,t)
inherit(W.cy,t)
inherit(W.e3,t)
inherit(W.j,t)
inherit(W.cx,t)
inherit(W.a5,t)
inherit(W.eA,t)
inherit(W.cC,t)
inherit(W.eT,t)
inherit(W.eY,t)
inherit(W.a6,t)
inherit(W.cw,t)
inherit(W.f9,t)
inherit(W.df,t)
inherit(W.cB,t)
inherit(W.fi,t)
inherit(W.be,t)
inherit(W.a7,t)
inherit(W.cu,t)
inherit(W.aj,t)
inherit(W.dl,t)
inherit(W.a9,t)
inherit(W.ct,t)
inherit(W.aa,t)
inherit(W.fN,t)
inherit(W.X,t)
inherit(W.cs,t)
inherit(W.h2,t)
inherit(W.ac,t)
inherit(W.cr,t)
inherit(W.h7,t)
inherit(W.dv,t)
inherit(W.he,t)
inherit(W.hj,t)
inherit(W.hv,t)
inherit(W.cH,t)
inherit(W.cG,t)
inherit(W.cF,t)
inherit(W.cA,t)
inherit(W.cE,t)
inherit(W.cD,t)
inherit(W.il,t)
inherit(W.im,t)
inherit(P.aq,t)
inherit(P.cq,t)
inherit(P.ar,t)
inherit(P.cv,t)
inherit(P.fo,t)
inherit(P.fp,t)
inherit(P.fu,t)
inherit(P.co,t)
inherit(P.at,t)
inherit(P.cz,t)
inherit(P.hi,t)
inherit(P.dR,t)
inherit(P.fz,t)
inherit(P.fA,t)
inherit(P.ik,t)
inherit(P.cp,t)
t=J.by
inherit(J.fm,t)
inherit(J.aX,t)
inherit(J.aR,t)
inherit(J.jb,J.aP)
t=J.b9
inherit(J.d3,t)
inherit(J.d2,t)
t=P.W
inherit(H.c,t)
inherit(H.d6,t)
inherit(H.dy,t)
t=H.c
inherit(H.ba,t)
inherit(H.eQ,t)
t=H.ba
inherit(H.fT,t)
inherit(H.bz,t)
inherit(P.eS,t)
inherit(H.e6,H.d6)
t=P.d1
inherit(H.eU,t)
inherit(H.hl,t)
t=H.b6
inherit(H.iX,t)
inherit(H.iY,t)
inherit(H.hT,t)
inherit(H.hC,t)
inherit(H.eG,t)
inherit(H.eH,t)
inherit(H.i_,t)
inherit(H.h4,t)
inherit(H.h5,t)
inherit(H.iZ,t)
inherit(H.iG,t)
inherit(H.iH,t)
inherit(H.iI,t)
inherit(H.iJ,t)
inherit(H.iK,t)
inherit(H.fY,t)
inherit(H.eM,t)
inherit(H.iC,t)
inherit(H.iD,t)
inherit(H.iE,t)
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
inherit(P.fQ,t)
inherit(P.fR,t)
inherit(P.ir,t)
inherit(P.i3,t)
inherit(P.i2,t)
inherit(P.i4,t)
inherit(P.eV,t)
inherit(P.e4,t)
inherit(P.e5,t)
inherit(W.it,t)
inherit(W.hm,t)
inherit(W.hF,t)
inherit(W.fb,t)
inherit(W.fa,t)
inherit(W.ia,t)
inherit(W.ib,t)
inherit(W.ii,t)
inherit(W.ij,t)
inherit(P.iu,t)
inherit(B.iS,t)
inherit(B.iT,t)
inherit(B.iU,t)
inherit(B.iV,t)
inherit(B.iW,t)
inherit(B.fe,t)
inherit(B.ff,t)
inherit(B.fg,t)
inherit(B.fh,t)
inherit(A.iB,t)
inherit(U.iN,t)
inherit(U.iM,t)
t=H.hu
inherit(H.bf,t)
inherit(H.bX,t)
t=P.b8
inherit(H.di,t)
inherit(H.eN,t)
inherit(H.hd,t)
inherit(H.hc,t)
inherit(H.dU,t)
inherit(H.fC,t)
inherit(P.c7,t)
inherit(P.dj,t)
inherit(P.ae,t)
inherit(P.v,t)
inherit(P.dx,t)
inherit(P.as,t)
inherit(P.V,t)
inherit(P.dY,t)
t=H.fY
inherit(H.fK,t)
inherit(H.bm,t)
inherit(H.ho,P.c7)
t=H.bb
inherit(H.f1,t)
inherit(H.da,t)
t=H.da
inherit(H.bD,t)
inherit(H.bC,t)
inherit(H.bE,H.bD)
inherit(H.db,H.bE)
inherit(H.bF,H.bC)
inherit(H.dc,H.bF)
t=H.db
inherit(H.d9,t)
inherit(H.f2,t)
t=H.dc
inherit(H.f3,t)
inherit(H.f4,t)
inherit(H.f5,t)
inherit(H.f6,t)
inherit(H.f7,t)
inherit(H.dd,t)
inherit(H.f8,t)
inherit(P.ig,P.hw)
inherit(P.i1,P.io)
inherit(P.dC,H.ag)
inherit(P.fE,P.fF)
inherit(P.hS,P.fE)
inherit(P.hV,P.hS)
inherit(P.d4,P.bH)
t=P.U
inherit(P.L,t)
inherit(P.n,t)
t=P.ae
inherit(P.dm,t)
inherit(P.eE,t)
t=W.h
inherit(W.t,t)
inherit(W.bs,t)
inherit(W.dW,t)
inherit(W.es,t)
inherit(W.bx,t)
inherit(W.bA,t)
inherit(W.fr,t)
inherit(W.dn,t)
inherit(W.fG,t)
inherit(W.a8,t)
inherit(W.br,t)
inherit(W.ab,t)
inherit(W.Y,t)
inherit(W.bq,t)
inherit(W.hg,t)
inherit(W.hk,t)
inherit(W.bQ,t)
inherit(W.hn,t)
inherit(W.aZ,t)
inherit(W.i9,t)
t=W.t
inherit(W.a3,t)
inherit(W.aN,t)
inherit(W.bo,t)
inherit(W.ce,t)
inherit(W.hy,t)
t=W.a3
inherit(W.l,t)
inherit(P.G,t)
t=W.l
inherit(W.dO,t)
inherit(W.dP,t)
inherit(W.aM,t)
inherit(W.c9,t)
inherit(W.cd,t)
inherit(W.ew,t)
inherit(W.cl,t)
inherit(W.eF,t)
inherit(W.fD,t)
inherit(W.ds,t)
inherit(W.fW,t)
inherit(W.fX,t)
inherit(W.bM,t)
inherit(W.hR,t)
inherit(W.bv,W.bs)
inherit(W.dS,W.bv)
inherit(W.b7,W.cn)
inherit(W.e1,W.cg)
inherit(W.d0,W.cy)
inherit(W.e2,W.d0)
inherit(W.a4,W.c8)
inherit(W.cZ,W.cx)
inherit(W.er,W.cZ)
inherit(W.cJ,W.cC)
inherit(W.bw,W.cJ)
inherit(W.cm,W.bo)
inherit(W.eB,W.bx)
inherit(W.aE,W.j)
t=W.aE
inherit(W.aS,t)
inherit(W.M,t)
inherit(W.aW,t)
inherit(W.eZ,W.bA)
inherit(W.cT,W.cw)
inherit(W.f_,W.cT)
inherit(W.R,P.d4)
inherit(W.cU,W.cB)
inherit(W.bG,W.cU)
t=W.be
inherit(W.fl,t)
inherit(W.fB,t)
inherit(W.h9,t)
inherit(W.cV,W.cu)
inherit(W.fn,W.cV)
inherit(W.fq,W.aj)
inherit(W.bu,W.br)
inherit(W.fH,W.bu)
inherit(W.cR,W.ct)
inherit(W.fI,W.cR)
inherit(W.cN,W.cs)
inherit(W.h_,W.cN)
inherit(W.bt,W.bq)
inherit(W.h0,W.bt)
inherit(W.cY,W.cr)
inherit(W.h6,W.cY)
inherit(W.aY,W.M)
inherit(W.cW,W.cH)
inherit(W.dA,W.cW)
inherit(W.cI,W.cG)
inherit(W.hx,W.cI)
inherit(W.hz,W.ch)
inherit(W.cP,W.cF)
inherit(W.hQ,W.cP)
inherit(W.d_,W.cA)
inherit(W.dD,W.d_)
inherit(W.cL,W.cE)
inherit(W.ic,W.cL)
inherit(W.cX,W.cD)
inherit(W.id,W.cX)
inherit(W.hA,W.ht)
inherit(W.hD,P.fO)
inherit(W.jm,W.hD)
inherit(W.hE,P.fP)
inherit(W.ih,W.bW)
inherit(P.J,P.i0)
t=P.G
inherit(P.aA,t)
inherit(P.aL,t)
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
inherit(P.ep,t)
inherit(P.et,t)
inherit(P.eW,t)
inherit(P.eX,t)
inherit(P.fj,t)
inherit(P.bJ,t)
inherit(P.fV,t)
inherit(P.hh,t)
inherit(P.bS,t)
inherit(P.i5,t)
inherit(P.i6,t)
inherit(P.i7,t)
t=P.aA
inherit(P.dN,t)
inherit(P.ev,t)
inherit(P.af,t)
inherit(P.eC,t)
inherit(P.fU,t)
inherit(P.dt,t)
inherit(P.hf,t)
inherit(P.cK,P.cq)
inherit(P.eO,P.cK)
inherit(P.cS,P.cv)
inherit(P.fc,P.cS)
inherit(P.fv,P.af)
inherit(P.cQ,P.co)
inherit(P.fS,P.cQ)
t=P.dt
inherit(P.fZ,t)
inherit(P.bN,t)
inherit(P.cO,P.cz)
inherit(P.h8,P.cO)
inherit(P.cM,P.cp)
inherit(P.fJ,P.cM)
t=G.f0
inherit(G.dq,t)
inherit(G.dw,t)
inherit(G.d8,t)
inherit(G.fy,t)
inherit(A.bI,t)
inherit(A.fx,t)
t=G.dq
inherit(G.dT,t)
inherit(A.de,t)
inherit(B.fd,G.dT)
t=G.dw
inherit(G.d7,t)
inherit(G.fk,t)
inherit(G.eD,G.bO)
inherit(R.fM,R.fL)
mixin(H.bC,P.x)
mixin(H.bD,P.x)
mixin(H.bE,H.cj)
mixin(H.bF,H.cj)
mixin(P.bH,P.x)
mixin(W.bq,P.x)
mixin(W.br,P.x)
mixin(W.bs,P.x)
mixin(W.bt,W.z)
mixin(W.bu,W.z)
mixin(W.bv,W.z)
mixin(W.cn,W.dX)
mixin(W.cH,P.x)
mixin(W.ct,P.x)
mixin(W.cA,P.x)
mixin(W.cB,P.x)
mixin(W.cC,P.x)
mixin(W.cD,P.x)
mixin(W.cE,P.x)
mixin(W.cF,P.x)
mixin(W.cG,P.x)
mixin(W.cr,P.x)
mixin(W.cs,P.x)
mixin(W.cu,P.x)
mixin(W.cw,P.x)
mixin(W.cx,P.x)
mixin(W.cy,P.x)
mixin(W.cI,W.z)
mixin(W.cJ,W.z)
mixin(W.cU,W.z)
mixin(W.cV,W.z)
mixin(W.cT,W.z)
mixin(W.cY,W.z)
mixin(W.cZ,W.z)
mixin(W.d_,W.z)
mixin(W.d0,W.z)
mixin(W.cL,W.z)
mixin(W.cN,W.z)
mixin(W.cP,W.z)
mixin(W.cR,W.z)
mixin(W.cW,W.z)
mixin(W.cX,W.z)
mixin(P.cq,P.x)
mixin(P.co,P.x)
mixin(P.cv,P.x)
mixin(P.cz,P.x)
mixin(P.cK,W.z)
mixin(P.cS,W.z)
mixin(P.cO,W.z)
mixin(P.cQ,W.z)
mixin(P.cp,P.x)
mixin(P.cM,W.z)})();(function constants(){C.h=W.aM.prototype
C.p=W.c9.prototype
C.f=W.ca.prototype
C.i=W.cb.prototype
C.q=W.b7.prototype
C.j=W.cd.prototype
C.B=W.cf.prototype
C.C=W.cl.prototype
C.k=W.cm.prototype
C.D=J.a.prototype
C.a=J.aP.prototype
C.t=J.d2.prototype
C.b=J.d3.prototype
C.c=J.b9.prototype
C.e=J.aQ.prototype
C.K=J.aR.prototype
C.n=H.d9.prototype
C.w=W.bG.prototype
C.x=J.fm.prototype
C.y=W.dl.prototype
C.z=W.ds.prototype
C.o=J.aX.prototype
C.a5=W.aY.prototype
C.a6=W.bQ.prototype
C.A=new P.hU()
C.d=new P.i1()
C.r=new P.aO(0)
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
C.u=function(hooks) { return hooks; }

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
C.v=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.L=H.B(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.u])
C.M=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.N=makeConstList([])
C.l=H.B(makeConstList(["bind","if","ref","repeat","syntax"]),[P.u])
C.m=H.B(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.u])
C.O=H.K("no")
C.P=H.K("np")
C.Q=H.K("eu")
C.R=H.K("nq")
C.S=H.K("nr")
C.T=H.K("k9")
C.U=H.K("ns")
C.V=H.K("kd")
C.W=H.K("aU")
C.X=H.K("u")
C.Y=H.K("ky")
C.Z=H.K("kz")
C.a_=H.K("nt")
C.a0=H.K("kA")
C.a1=H.K("ax")
C.a2=H.K("L")
C.a3=H.K("n")
C.a4=H.K("U")})();(function staticFields(){$.ki="$cachedFunction"
$.kj="$cachedInvocation"
$.jW=null
$.jU=null
$.jo=!1
$.js=null
$.kN=null
$.l6=null
$.ix=null
$.iF=null
$.jt=null
$.bg=null
$.bY=null
$.bZ=null
$.jp=!1
$.C=C.d
$.k7=0
$.az=null
$.j8=null
$.k6=null
$.k5=null
$.k3=null
$.k2=null
$.k1=null
$.k0=null
$.mX=0
$.mY=0
$.jx=0
$.l2=0
$.c3=0
$.c4=0
$.nl=!1
$.kT=0})();(function lazyInitializers(){lazy($,"k_","$get$k_",function(){return H.kW("_$dart_dartClosure")})
lazy($,"jd","$get$jd",function(){return H.kW("_$dart_js")})
lazy($,"ka","$get$ka",function(){return H.mc()})
lazy($,"kb","$get$kb",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.k7
$.k7=t+1
t="expando$key$"+t}return new P.e7(null,t,[P.n])})
lazy($,"kn","$get$kn",function(){return H.au(H.hb({
toString:function(){return"$receiver$"}}))})
lazy($,"ko","$get$ko",function(){return H.au(H.hb({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"kp","$get$kp",function(){return H.au(H.hb(null))})
lazy($,"kq","$get$kq",function(){return H.au(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"ku","$get$ku",function(){return H.au(H.hb(void 0))})
lazy($,"kv","$get$kv",function(){return H.au(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"ks","$get$ks",function(){return H.au(H.kt(null))})
lazy($,"kr","$get$kr",function(){return H.au(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"kx","$get$kx",function(){return H.au(H.kt(void 0))})
lazy($,"kw","$get$kw",function(){return H.au(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"jl","$get$jl",function(){return P.mz()})
lazy($,"c_","$get$c_",function(){return[]})
lazy($,"jZ","$get$jZ",function(){return{}})
lazy($,"kG","$get$kG",function(){return P.jf(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"jn","$get$jn",function(){return P.I()})
lazy($,"iw","$get$iw",function(){return P.ke(P.n,P.ax)})
lazy($,"c1","$get$c1",function(){return P.ke(P.u,P.ax)})
lazy($,"kl","$get$kl",function(){return new G.du(1281,0,4294967295)})
lazy($,"jS","$get$jS",function(){return new G.bP(1281,1281,1281)})
lazy($,"jR","$get$jR",function(){return new G.bP(32774,770,769)})
lazy($,"S","$get$S",function(){return P.aT(["cBlendEquation",new G.i("","",0),"cDepthWrite",new G.i("","",0),"cDepthTest",new G.i("","",0),"cStencilFunc",new G.i("","",0),"tPosition",new G.i("vec3","",0),"tSpeed",new G.i("vec3","",0),"tForce",new G.i("vec3","",0),"aColors",new G.i("vec3","per vertex color",0),"aColorAlpha",new G.i("vec4","per vertex color",0),"aPosition",new G.i("vec3","vertex coordinates",0),"aTexUV",new G.i("vec2","texture uvs",0),"aNormal",new G.i("vec3","vertex normals",0),"aBinormal",new G.i("vec3","vertex binormals",0),"aCenter",new G.i("vec4","for wireframe",0),"aPointSize",new G.i("float","",0),"aBoneIndex",new G.i("vec4","",0),"aBoneWeight",new G.i("vec4","",0),"aTangent",new G.i("vec3","vertex tangents",0),"aBitangent",new G.i("vec3","vertex btangents",0),"iaRotation",new G.i("vec4","",0),"iaTranslation",new G.i("vec3","",0),"iaScale",new G.i("vec3","",0),"vColor",new G.i("vec3","per vertex color",0),"vTexUV",new G.i("vec2","",0),"vLightWeighting",new G.i("vec3","",0),"vNormal",new G.i("vec3","",0),"vPosition",new G.i("vec3","vertex coordinates",0),"vPositionFromLight",new G.i("vec4","delta from light",0),"vCenter",new G.i("vec4","for wireframe",0),"vDepth",new G.i("float","depth for shadowmaps",0),"uTransformationMatrix",new G.i("mat4","",0),"uModelMatrix",new G.i("mat4","",0),"uNormalMatrix",new G.i("mat3","",0),"uConvolutionMatrix",new G.i("mat3","",0),"uPerspectiveViewMatrix",new G.i("mat4","",0),"uLightPerspectiveViewMatrix",new G.i("mat4","",0),"uShadowMap",new G.i("sampler2DShadow","",0),"uTexture",new G.i("sampler2D","",0),"uTexture2",new G.i("sampler2D","",0),"uTexture3",new G.i("sampler2D","",0),"uTexture4",new G.i("sampler2D","",0),"uSpecularMap",new G.i("sampler2D","",0),"uNormalMap",new G.i("sampler2D","",0),"uBumpMap",new G.i("sampler2D","",0),"uDepthMap",new G.i("sampler2D","",0),"uCubeTexture",new G.i("samplerCube","",0),"uAnimationTable",new G.i("sampler2D","",0),"uTime",new G.i("float","time since program start in sec",0),"uCameraNear",new G.i("float","",0),"uCameraFar",new G.i("float","",0),"uFogNear",new G.i("float","",0),"uFogFar",new G.i("float","",0),"uPointSize",new G.i("float","",0),"uScale",new G.i("float","",0),"uAngle",new G.i("float","",0),"uCanvasSize",new G.i("vec2","",0),"uCenter2",new G.i("vec2","",0),"uCutOff",new G.i("float","",0),"uShininess",new G.i("float","",0),"uShadowBias",new G.i("float","",0),"uOpacity",new G.i("float","",0),"uColor",new G.i("vec3","",0),"uAmbientDiffuse",new G.i("vec3","",0),"uColorEmissive",new G.i("vec3","",0),"uColorSpecular",new G.i("vec3","",0),"uColorDiffuse",new G.i("vec3","",0),"uColorAlpha",new G.i("vec4","",0),"uColorAlpha2",new G.i("vec4","",0),"uEyePosition",new G.i("vec3","",0),"uMaterial",new G.i("mat4","",0),"uRange",new G.i("vec2","",0),"uDirection",new G.i("vec2","",0),"uBoneMatrices",new G.i("mat4","",128),"uLightDescs",new G.i("mat4","",4),"uLightCount",new G.i("float","",0),"uLightTypes",new G.i("float","",4),"uBumpScale",new G.i("float","for bump maps",0),"uNormalScale",new G.i("float","for normal maps",0)])})
lazy($,"kB","$get$kB",function(){return C.A})
lazy($,"l5","$get$l5",function(){var t=new G.bd("PointSpritesV",null,[],[],[],[],0,P.I())
t.aL(["aPosition"])
t.aM(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"])
t.aN(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"])
return t})
lazy($,"l4","$get$l4",function(){var t=new G.bd("PointSpritesF",null,[],[],[],[],0,P.I())
t.aM(["uTexture"])
t.aN(["oFragColor = texture( uTexture,  gl_PointCoord);"])
return t})
lazy($,"iP","$get$iP",function(){return T.kC()})
lazy($,"jy","$get$jy",function(){return T.kC()})
lazy($,"l_","$get$l_",function(){var t=new G.bd("InstancedV",null,[],[],[],[],0,P.I())
t.aL(["aPosition"])
t.aL(["iaRotation","iaTranslation"])
t.bp(["vColor"])
t.aM(["uPerspectiveViewMatrix","uModelMatrix"])
H.d(t.b==null)
t.b=t.bu(!1,["vec3 rotate_vertex_position(vec3 pos, vec4 rot) { \n    return pos + 2.0 * cross(rot.xyz, cross(rot.xyz, pos) + rot.w * pos);\n}\n\nvoid main(void) {\n    vec3 P = rotate_vertex_position(aPosition, iaRotation) +\n             iaTranslation;\n    gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(P, 1);\n    vColor = vec3(sin(aPosition.x)/2.0+0.5,\n                     cos(aPosition.y)/2.0+0.5, \n                     sin(aPosition.z)/2.0+0.5);\n}\n"],null)
return t})
lazy($,"kZ","$get$kZ",function(){var t=new G.bd("InstancedF",null,[],[],[],[],0,P.I())
t.bp(["vColor"])
t.aN(["oFragColor = vec4( vColor, 1. );"])
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
mangledGlobalNames:{n:"int",L:"double",U:"num",u:"String",ax:"bool",aU:"Null",b:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.t},{func:1,ret:P.ax,args:[W.a3,P.u,P.u,W.bT]},{func:1,v:true,args:[P.o],opt:[P.bK]},{func:1,ret:P.n,args:[P.H,P.H]},{func:1,ret:P.u,args:[W.h]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationTimeline:J.a,AppBannerPromptResult:J.a,BarProp:J.a,Body:J.a,CacheStorage:J.a,CanvasPattern:J.a,CHROMIUMValuebuffer:J.a,CircularGeofencingRegion:J.a,Client:J.a,Clients:J.a,CompositorProxy:J.a,ConsoleBase:J.a,Coordinates:J.a,Credential:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMStringMap:J.a,EffectModel:J.a,Entry:J.a,FederatedCredential:J.a,FileEntry:J.a,FileError:J.a,Stream:J.a,DOMFileSystem:J.a,FontFace:J.a,FormData:J.a,GamepadButton:J.a,Geofencing:J.a,GeofencingRegion:J.a,Geolocation:J.a,Geoposition:J.a,Headers:J.a,HMDVRDevice:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageData:J.a,InjectedScriptHost:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,KeyframeEffect:J.a,MediaDeviceInfo:J.a,MediaDevices:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaMetadata:J.a,MediaSession:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigatorStorageUtils:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,OffscreenCanvas:J.a,PasswordCredential:J.a,PerformanceCompositeTiming:J.a,PerformanceEntry:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformanceRenderTiming:J.a,PerformanceResourceTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PositionError:J.a,PositionSensorVRDevice:J.a,Presentation:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,ReadableByteStream:J.a,ReadableByteStreamReader:J.a,ReadableStreamReader:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,Selection:J.a,ServicePort:J.a,SharedArrayBuffer:J.a,SourceInfo:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StorageInfo:J.a,StorageManager:J.a,StorageQuota:J.a,StyleMedia:J.a,StylePropertyMap:J.a,SyncManager:J.a,TextMetrics:J.a,TrackDefault:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRDevice:J.a,VREyeParameters:J.a,VRFieldOfView:J.a,VRPositionState:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkerConsole:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothAdvertisingData:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,NFC:J.a,PagePopupController:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WebKitCSSMatrix:J.a,Worklet:J.a,WorkletGlobalScope:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPreserveAspectRatio:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,CHROMIUMSubscribeUniform:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTDisjointTimerQuery:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bB,ArrayBufferView:H.bb,DataView:H.f1,Float32Array:H.d9,Float64Array:H.f2,Int16Array:H.f3,Int32Array:H.f4,Int8Array:H.f5,Uint16Array:H.f6,Uint32Array:H.f7,Uint8ClampedArray:H.dd,CanvasPixelArray:H.dd,Uint8Array:H.f8,HTMLAudioElement:W.l,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLImageElement:W.l,HTMLKeygenElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMediaElement:W.l,HTMLMenuElement:W.l,HTMLMenuItemElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTextAreaElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLVideoElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,HTMLAnchorElement:W.dO,HTMLAreaElement:W.dP,AudioTrack:W.a2,AudioTrackList:W.dS,Blob:W.c8,HTMLBodyElement:W.aM,HTMLCanvasElement:W.c9,CanvasGradient:W.ca,CanvasRenderingContext2D:W.cb,CDATASection:W.aN,CharacterData:W.aN,Comment:W.aN,ProcessingInstruction:W.aN,Text:W.aN,CompositorWorker:W.dW,CSSCharsetRule:W.y,CSSFontFaceRule:W.y,CSSGroupingRule:W.y,CSSImportRule:W.y,CSSKeyframeRule:W.y,MozCSSKeyframeRule:W.y,WebKitCSSKeyframeRule:W.y,CSSKeyframesRule:W.y,MozCSSKeyframesRule:W.y,WebKitCSSKeyframesRule:W.y,CSSMediaRule:W.y,CSSNamespaceRule:W.y,CSSPageRule:W.y,CSSRule:W.y,CSSStyleRule:W.y,CSSSupportsRule:W.y,CSSViewportRule:W.y,CSSStyleDeclaration:W.b7,MSStyleCSSProperties:W.b7,CSS2Properties:W.b7,DataTransferItemList:W.dZ,DeviceAcceleration:W.e_,HTMLDivElement:W.cd,XMLDocument:W.bo,Document:W.bo,DocumentFragment:W.ce,ShadowRoot:W.ce,DOMException:W.e0,DOMImplementation:W.cf,DOMPoint:W.e1,DOMPointReadOnly:W.cg,DOMRectReadOnly:W.ch,DOMStringList:W.e2,DOMTokenList:W.e3,Element:W.a3,AnimationEvent:W.j,AnimationPlayerEvent:W.j,ApplicationCacheErrorEvent:W.j,AutocompleteErrorEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceLightEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,GamepadEvent:W.j,GeofencingEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RelatedEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCIceCandidateEvent:W.j,RTCPeerConnectionIceEvent:W.j,SecurityPolicyViolationEvent:W.j,ServicePortConnectEvent:W.j,ServiceWorkerMessageEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,Animation:W.h,ApplicationCache:W.h,DOMApplicationCache:W.h,OfflineResourceList:W.h,BatteryManager:W.h,CanvasCaptureMediaStreamTrack:W.h,CrossOriginServiceWorkerClient:W.h,EventSource:W.h,FileReader:W.h,FontFaceSet:W.h,MediaKeySession:W.h,MediaQueryList:W.h,MediaRecorder:W.h,MediaSource:W.h,MediaStream:W.h,MediaStreamTrack:W.h,MessagePort:W.h,MIDIAccess:W.h,NetworkInformation:W.h,Notification:W.h,Performance:W.h,PermissionStatus:W.h,PresentationAvailability:W.h,PresentationReceiver:W.h,PresentationRequest:W.h,RTCDTMFSender:W.h,RTCPeerConnection:W.h,webkitRTCPeerConnection:W.h,mozRTCPeerConnection:W.h,ScreenOrientation:W.h,ServicePortCollection:W.h,ServiceWorkerContainer:W.h,ServiceWorkerRegistration:W.h,SpeechRecognition:W.h,SpeechSynthesis:W.h,SpeechSynthesisUtterance:W.h,WorkerPerformance:W.h,BluetoothDevice:W.h,BluetoothRemoteGATTCharacteristic:W.h,USB:W.h,IDBDatabase:W.h,IDBOpenDBRequest:W.h,IDBVersionChangeRequest:W.h,IDBRequest:W.h,IDBTransaction:W.h,AnalyserNode:W.h,RealtimeAnalyserNode:W.h,AudioBufferSourceNode:W.h,AudioContext:W.h,webkitAudioContext:W.h,AudioDestinationNode:W.h,AudioNode:W.h,AudioSourceNode:W.h,BiquadFilterNode:W.h,ChannelMergerNode:W.h,AudioChannelMerger:W.h,ChannelSplitterNode:W.h,AudioChannelSplitter:W.h,ConvolverNode:W.h,DelayNode:W.h,DynamicsCompressorNode:W.h,GainNode:W.h,AudioGainNode:W.h,IIRFilterNode:W.h,MediaElementAudioSourceNode:W.h,MediaStreamAudioDestinationNode:W.h,MediaStreamAudioSourceNode:W.h,OfflineAudioContext:W.h,OscillatorNode:W.h,Oscillator:W.h,PannerNode:W.h,AudioPannerNode:W.h,webkitAudioPannerNode:W.h,ScriptProcessorNode:W.h,JavaScriptAudioNode:W.h,StereoPannerNode:W.h,WaveShaperNode:W.h,EventTarget:W.h,File:W.a4,FileList:W.er,FileWriter:W.es,HTMLFormElement:W.ew,Gamepad:W.a5,HTMLHeadElement:W.cl,History:W.eA,HTMLCollection:W.bw,HTMLFormControlsCollection:W.bw,HTMLOptionsCollection:W.bw,HTMLDocument:W.cm,XMLHttpRequest:W.eB,XMLHttpRequestUpload:W.bx,XMLHttpRequestEventTarget:W.bx,HTMLInputElement:W.eF,KeyboardEvent:W.aS,Location:W.eT,MediaList:W.eY,MIDIOutput:W.eZ,MIDIInput:W.bA,MIDIPort:W.bA,MimeType:W.a6,MimeTypeArray:W.f_,PointerEvent:W.M,MouseEvent:W.M,DragEvent:W.M,Navigator:W.f9,Attr:W.t,Node:W.t,NodeIterator:W.df,NodeList:W.bG,RadioNodeList:W.bG,Path2D:W.fi,Perspective:W.fl,Plugin:W.a7,PluginArray:W.fn,PositionValue:W.fq,PresentationConnection:W.fr,Range:W.dl,Rotation:W.fB,RTCDataChannel:W.dn,DataChannel:W.dn,HTMLSelectElement:W.fD,SharedWorker:W.fG,SourceBuffer:W.a8,SourceBufferList:W.fH,SpeechGrammar:W.a9,SpeechGrammarList:W.fI,SpeechRecognitionResult:W.aa,Storage:W.fN,CSSStyleSheet:W.X,StyleSheet:W.X,CalcLength:W.aj,KeywordValue:W.aj,LengthValue:W.aj,NumberValue:W.aj,SimpleLength:W.aj,TransformValue:W.aj,StyleValue:W.aj,HTMLTableElement:W.ds,HTMLTableRowElement:W.fW,HTMLTableSectionElement:W.fX,HTMLTemplateElement:W.bM,TextTrack:W.ab,TextTrackCue:W.Y,VTTCue:W.Y,TextTrackCueList:W.h_,TextTrackList:W.h0,TimeRanges:W.h2,Touch:W.ac,TouchEvent:W.aW,TouchList:W.h6,TrackDefaultList:W.h7,Matrix:W.be,Skew:W.be,TransformComponent:W.be,Translation:W.h9,TreeWalker:W.dv,CompositionEvent:W.aE,FocusEvent:W.aE,TextEvent:W.aE,SVGZoomEvent:W.aE,UIEvent:W.aE,URL:W.he,VideoTrackList:W.hg,VTTRegionList:W.hj,WebSocket:W.hk,WheelEvent:W.aY,Window:W.bQ,DOMWindow:W.bQ,Worker:W.hn,CompositorWorkerGlobalScope:W.aZ,DedicatedWorkerGlobalScope:W.aZ,ServiceWorkerGlobalScope:W.aZ,SharedWorkerGlobalScope:W.aZ,WorkerGlobalScope:W.aZ,ClientRect:W.hv,ClientRectList:W.dA,DOMRectList:W.dA,CSSRuleList:W.hx,DocumentType:W.hy,DOMRect:W.hz,GamepadList:W.hQ,HTMLFrameSetElement:W.hR,NamedNodeMap:W.dD,MozNamedAttrMap:W.dD,ServiceWorker:W.i9,SpeechRecognitionResultList:W.ic,StyleSheetList:W.id,WorkerLocation:W.il,WorkerNavigator:W.im,SVGAElement:P.dN,SVGAnimateElement:P.aL,SVGAnimateMotionElement:P.aL,SVGAnimateTransformElement:P.aL,SVGAnimationElement:P.aL,SVGSetElement:P.aL,SVGFEBlendElement:P.e8,SVGFEColorMatrixElement:P.e9,SVGFEComponentTransferElement:P.ea,SVGFECompositeElement:P.eb,SVGFEConvolveMatrixElement:P.ec,SVGFEDiffuseLightingElement:P.ed,SVGFEDisplacementMapElement:P.ee,SVGFEFloodElement:P.ef,SVGFEGaussianBlurElement:P.eg,SVGFEImageElement:P.eh,SVGFEMergeElement:P.ei,SVGFEMorphologyElement:P.ej,SVGFEOffsetElement:P.ek,SVGFEPointLightElement:P.el,SVGFESpecularLightingElement:P.em,SVGFESpotLightElement:P.en,SVGFETileElement:P.eo,SVGFETurbulenceElement:P.ep,SVGFilterElement:P.et,SVGForeignObjectElement:P.ev,SVGCircleElement:P.af,SVGEllipseElement:P.af,SVGLineElement:P.af,SVGPathElement:P.af,SVGPolygonElement:P.af,SVGPolylineElement:P.af,SVGGeometryElement:P.af,SVGClipPathElement:P.aA,SVGDefsElement:P.aA,SVGGElement:P.aA,SVGSwitchElement:P.aA,SVGGraphicsElement:P.aA,SVGImageElement:P.eC,SVGLength:P.aq,SVGLengthList:P.eO,SVGMarkerElement:P.eW,SVGMaskElement:P.eX,SVGNumber:P.ar,SVGNumberList:P.fc,SVGPatternElement:P.fj,SVGPoint:P.fo,SVGPointList:P.fp,SVGRect:P.fu,SVGRectElement:P.fv,SVGScriptElement:P.bJ,SVGStringList:P.fS,SVGDescElement:P.G,SVGDiscardElement:P.G,SVGFEDistantLightElement:P.G,SVGFEFuncAElement:P.G,SVGFEFuncBElement:P.G,SVGFEFuncGElement:P.G,SVGFEFuncRElement:P.G,SVGFEMergeNodeElement:P.G,SVGMetadataElement:P.G,SVGStopElement:P.G,SVGStyleElement:P.G,SVGTitleElement:P.G,SVGComponentTransferFunctionElement:P.G,SVGElement:P.G,SVGSVGElement:P.fU,SVGSymbolElement:P.fV,SVGTextContentElement:P.dt,SVGTextPathElement:P.fZ,SVGTSpanElement:P.bN,SVGTextElement:P.bN,SVGTextPositioningElement:P.bN,SVGTransform:P.at,SVGTransformList:P.h8,SVGUseElement:P.hf,SVGViewElement:P.hh,SVGViewSpec:P.hi,SVGLinearGradientElement:P.bS,SVGRadialGradientElement:P.bS,SVGGradientElement:P.bS,SVGCursorElement:P.i5,SVGFEDropShadowElement:P.i6,SVGMPathElement:P.i7,AudioBuffer:P.dR,WebGLRenderingContext:P.fz,WebGL2RenderingContext:P.fA,WebGL2RenderingContextBase:P.ik,SQLResultSetRowList:P.fJ})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasPattern:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,Credential:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMStringMap:true,EffectModel:true,Entry:true,FederatedCredential:true,FileEntry:true,FileError:true,Stream:true,DOMFileSystem:true,FontFace:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageData:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PasswordCredential:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,ServicePort:true,SharedArrayBuffer:true,SourceInfo:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,TrackDefault:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPreserveAspectRatio:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,AudioTrack:true,AudioTrackList:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasGradient:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,CSSCharsetRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DocumentFragment:true,ShadowRoot:true,DOMException:true,DOMImplementation:true,DOMPoint:true,DOMPointReadOnly:false,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AudioDestinationNode:true,AudioNode:true,AudioSourceNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OfflineAudioContext:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Navigator:true,Attr:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Path2D:true,Perspective:true,Plugin:true,PluginArray:true,PositionValue:true,PresentationConnection:true,Range:true,Rotation:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,SharedWorker:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,CalcLength:true,KeywordValue:true,LengthValue:true,NumberValue:true,SimpleLength:true,TransformValue:true,StyleValue:false,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,Matrix:true,Skew:true,TransformComponent:false,Translation:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,SVGZoomEvent:true,UIEvent:false,URL:true,VideoTrackList:true,VTTRegionList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.da.$nativeSuperclassTag="ArrayBufferView"
H.bD.$nativeSuperclassTag="ArrayBufferView"
H.bE.$nativeSuperclassTag="ArrayBufferView"
H.db.$nativeSuperclassTag="ArrayBufferView"
H.bC.$nativeSuperclassTag="ArrayBufferView"
H.bF.$nativeSuperclassTag="ArrayBufferView"
H.dc.$nativeSuperclassTag="ArrayBufferView"
W.bs.$nativeSuperclassTag="EventTarget"
W.bv.$nativeSuperclassTag="EventTarget"
W.br.$nativeSuperclassTag="EventTarget"
W.bu.$nativeSuperclassTag="EventTarget"
W.bq.$nativeSuperclassTag="EventTarget"
W.bt.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.l7(U.l0(),b)},[])
else (function(b){H.l7(U.l0(),b)})([])})})()