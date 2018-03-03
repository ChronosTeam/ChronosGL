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
a[c]=function(){a[c]=function(){H.nF(b)}
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
return d?function(e){if(t===null)t=H.jx(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.jx(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.jx(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={jg:function jg(a){this.a=a},
jl:function(a,b,c,d){if(!!a.$isc)return new H.ea(a,b,[c,d])
return new H.dc(a,b,[c,d])},
eI:function(){return new P.aH("No element")},
mw:function(){return new P.aH("Too many elements")},
mv:function(){return new P.aH("Too few elements")},
ds:function(a,b,c,d){if(c-b<=32)H.mL(a,b,c,d)
else H.mK(a,b,c,d)},
mL:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.af(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.ap(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.j(a,q,s.h(a,p))
q=p}s.j(a,q,r)}},
mK:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.d(t>32)
s=C.b.K(t+1,6)
r=a3+s
q=a4-s
p=C.b.K(a3+a4,2)
o=p-s
n=p+s
t=J.af(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.ap(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.ap(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.ap(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.ap(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.ap(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.ap(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.ap(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.ap(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.ap(a5.$2(j,i),0)){h=i
i=j
j=h}t.j(a2,r,m)
t.j(a2,p,k)
t.j(a2,q,i)
t.j(a2,o,t.h(a2,a3))
t.j(a2,n,t.h(a2,a4))
g=a3+1
f=a4-1
if(J.H(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=t.h(a2,e)
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
H.ds(a2,a3,g-2,a5)
H.ds(a2,f+2,a4,a5)
if(a0)return
if(g<r&&f>q){for(;J.H(a5.$2(t.h(a2,g),l),0);)++g
for(;J.H(a5.$2(t.h(a2,f),j),0);)--f
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
break}}H.ds(a2,g,f,a5)}else H.ds(a2,g,f,a5)},
c:function c(){},
be:function be(){},
db:function db(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
dc:function dc(a,b,c){this.a=a
this.b=b
this.$ti=c},
ea:function ea(a,b,c){this.a=a
this.b=b
this.$ti=c},
eT:function eT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bF:function bF(a,b,c){this.a=a
this.b=b
this.$ti=c},
dz:function dz(a,b,c){this.a=a
this.b=b
this.$ti=c},
hp:function hp(a,b,c){this.a=a
this.b=b
this.$ti=c},
cn:function cn(){},
dH:function(a,b){var t=a.al(b)
if(!u.globalState.d.cy)u.globalState.f.aq()
return t},
iP:function(){--u.globalState.f.b
H.d(u.globalState.f.b>=0)},
lh:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.x(s).$isb)throw H.e(P.jV("Arguments to main must be a List: "+H.i(s)))
u.globalState=new H.i1(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$kk()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.hF(P.jk(null,H.b6),0)
r=P.p
s.seC(new H.ai(0,null,null,null,null,null,0,[r,H.b5]))
s.seF(new H.ai(0,null,null,null,null,null,0,[r,null]))
if(s.x){q=new H.i0()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.mq,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.mZ)}if(u.globalState.x)return
s=u.globalState.a++
q=P.aj(null,null,null,r)
p=new H.bg(0,null,!1)
o=new H.b5(s,new H.ai(0,null,null,null,null,null,0,[r,H.bg]),q,u.createNewIsolate(),p,new H.ar(H.iU()),new H.ar(H.iU()),!1,!1,[],P.aj(null,null,null,null),null,null,!1,!0,P.aj(null,null,null,null))
q.i(0,0)
o.bA(0,p)
u.globalState.e=o
u.globalState.z.j(0,s,o)
u.globalState.d=o
if(H.bm(a,{func:1,args:[,]}))o.al(new H.j_(t,a))
else if(H.bm(a,{func:1,args:[,,]}))o.al(new H.j0(t,a))
else o.al(a)
u.globalState.f.aq()},
mZ:function(a){var t=P.aW(["command","print","msg",a])
return new H.am(!0,P.c1(null,P.p)).M(t)},
ms:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.mt()
return},
mt:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.e(new P.w("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.e(new P.w('Cannot extract URI from "'+t+'"'))},
mq:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.b4(!0,[]).a0(b.data)
s=J.af(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.nr(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.b4(!0,[]).a0(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.b4(!0,[]).a0(s.h(t,"replyTo"))
s=u.globalState.a++
k=P.p
j=P.aj(null,null,null,k)
i=new H.bg(0,null,!1)
h=new H.b5(s,new H.ai(0,null,null,null,null,null,0,[k,H.bg]),j,u.createNewIsolate(),i,new H.ar(H.iU()),new H.ar(H.iU()),!1,!1,[],P.aj(null,null,null,null),null,null,!1,!0,P.aj(null,null,null,null))
j.i(0,0)
h.bA(0,i)
u.globalState.f.a.Y(0,new H.b6(h,new H.eF(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.aq()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.lS(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.aq()
break
case"close":u.globalState.ch.ap(0,$.$get$kl().h(0,a))
a.terminate()
u.globalState.f.aq()
break
case"log":H.mp(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
k=P.aW(["command","print","msg",t])
k=new H.am(!0,P.c1(null,P.p)).M(k)
s.toString
self.postMessage(k)}else P.aB(s.h(t,"msg"))
break
case"error":throw H.e(s.h(t,"msg"))}},
mp:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aW(["command","log","msg",a])
r=new H.am(!0,P.c1(null,P.p)).M(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.S(q)
t=H.aL(q)
s=P.cm(t)
throw H.e(s)}},
mr:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.kq=$.kq+("_"+s)
$.kr=$.kr+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.J(0,["spawned",new H.bj(s,r),q,t.r])
r=new H.eG(a,b,c,d,t)
if(e){t.bT(q,q)
u.globalState.f.a.Y(0,new H.b6(t,r,"start isolate"))}else r.$0()},
mM:function(a,b){var t=new H.h5(!0,!1,null)
t.dn(a,b)
return t},
n_:function(a){return new H.b4(!0,[]).a0(new H.am(!1,P.c1(null,P.p)).M(a))},
j_:function j_(a,b){this.a=a
this.b=b},
j0:function j0(a,b){this.a=a
this.b=b},
i1:function i1(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
hX:function hX(a,b){this.a=a
this.b=b},
hF:function hF(a,b){this.a=a
this.b=b},
hG:function hG(a){this.a=a},
b6:function b6(a,b,c){this.a=a
this.b=b
this.c=c},
i0:function i0(){},
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
hy:function hy(){},
bj:function bj(a,b){this.b=a
this.a=b},
i2:function i2(a,b){this.a=a
this.b=b},
c3:function c3(a,b,c){this.b=a
this.c=b
this.a=c},
bg:function bg(a,b,c){this.a=a
this.b=b
this.c=c},
h5:function h5(a,b,c){this.a=a
this.b=b
this.c=c},
h6:function h6(a,b){this.a=a
this.b=b},
h7:function h7(a,b){this.a=a
this.b=b},
ar:function ar(a){this.a=a},
am:function am(a,b){this.a=a
this.b=b},
b4:function b4(a,b){this.a=a
this.b=b},
nk:function(a){return u.types[a]},
nt:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.x(a).$isr},
i:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aC(a)
if(typeof t!=="string")throw H.e(H.W(a))
return t},
mI:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.fx(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aZ:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
dn:function(a){var t,s,r,q,p,o,n,m
t=J.x(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.z||!!J.x(a).$isb1){p=C.q(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.e.aP(q,0)===36)q=C.e.d3(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.dJ(H.iD(a),0,null),u.mangledGlobalNames)},
ft:function(a){return"Instance of '"+H.dn(a)+"'"},
T:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mG:function(a){return a.b?H.T(a).getUTCFullYear()+0:H.T(a).getFullYear()+0},
mE:function(a){return a.b?H.T(a).getUTCMonth()+1:H.T(a).getMonth()+1},
mA:function(a){return a.b?H.T(a).getUTCDate()+0:H.T(a).getDate()+0},
mB:function(a){return a.b?H.T(a).getUTCHours()+0:H.T(a).getHours()+0},
mD:function(a){return a.b?H.T(a).getUTCMinutes()+0:H.T(a).getMinutes()+0},
mF:function(a){return a.b?H.T(a).getUTCSeconds()+0:H.T(a).getSeconds()+0},
mC:function(a){return a.b?H.T(a).getUTCMilliseconds()+0:H.T(a).getMilliseconds()+0},
kp:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.W(a))
return a[b]},
R:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ag(!0,b,"index",null)
t=J.dN(a)
if(b<0||C.b.cO(b,t))return P.C(b,a,"index",null,t)
return P.fu(b,"index",null)},
W:function(a){return new P.ag(!0,a,null,null)},
e:function(a){var t
if(a==null)a=new P.dm()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.lk})
t.name=""}else t.toString=H.lk
return t},
lk:function(){return J.aC(this.dartException)},
G:function(a){throw H.e(a)},
E:function(a){throw H.e(new P.a3(a))},
av:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.hc(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
hd:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
kC:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
ji:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.eM(a,s,t?null:b.receiver)},
S:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.j1(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aY(r,16)&8191)===10)switch(q){case 438:return t.$1(H.ji(H.i(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.i(s)+" (Error "+q+")"
return t.$1(new H.dl(p,null))}}if(a instanceof TypeError){o=$.$get$kw()
n=$.$get$kx()
m=$.$get$ky()
l=$.$get$kz()
k=$.$get$kD()
j=$.$get$kE()
i=$.$get$kB()
$.$get$kA()
h=$.$get$kG()
g=$.$get$kF()
f=o.R(s)
if(f!=null)return t.$1(H.ji(s,f))
else{f=n.R(s)
if(f!=null){f.method="call"
return t.$1(H.ji(s,f))}else{f=m.R(s)
if(f==null){f=l.R(s)
if(f==null){f=k.R(s)
if(f==null){f=j.R(s)
if(f==null){f=i.R(s)
if(f==null){f=l.R(s)
if(f==null){f=h.R(s)
if(f==null){f=g.R(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.dl(s,f==null?null:f.method))}}return t.$1(new H.hh(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.dt()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.ag(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.dt()
return a},
aL:function(a){var t
if(a==null)return new H.dF(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dF(a,null)},
nx:function(a){if(a==null||typeof a!='object')return J.aq(a)
else return H.aZ(a)},
ni:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=a.length
for(r=0;r<s;){q=r+1
H.d(t)
p=a[r]
r=q+1
H.d(t)
b.j(0,p,a[q])}return b},
ns:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dH(b,new H.iK(a))
case 1:return H.dH(b,new H.iL(a,d))
case 2:return H.dH(b,new H.iM(a,d,e))
case 3:return H.dH(b,new H.iN(a,d,e,f))
case 4:return H.dH(b,new H.iO(a,d,e,f,g))}throw H.e(P.cm("Unsupported number of arguments for wrapped closure"))},
c7:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.ns)
a.$identity=t
return t},
m9:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.x(c).$isb){t.$reflectionInfo=c
r=H.mI(t).r}else r=c
q=d?Object.create(new H.fM().constructor.prototype):Object.create(new H.br(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.k2(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.nk,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.k_:H.jb
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.e("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.k2(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
m6:function(a,b,c,d){var t=H.jb
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
k2:function(a,b,c){var t,s,r,q
if(c)return H.m8(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.m6(s,b==null?r!=null:b!==r,t,b)
return q},
m7:function(a,b,c,d){var t,s
t=H.jb
s=H.k_
switch(b?-1:a){case 0:throw H.e(new H.fD("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
m8:function(a,b){var t,s,r,q
H.m5()
t=$.jZ
if(t==null){t=H.jY("receiver")
$.jZ=t}s=b.$stubName
r=b.length
q=a[s]
t=H.m7(r,b==null?q!=null:b!==q,s,b)
return t},
jx:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.x(c).$isb){c.fixed$length=Array
t=c}else t=c
return H.m9(a,b,t,!!d,e,f)},
jb:function(a){return a.a},
k_:function(a){return a.c},
m5:function(){var t=$.k0
if(t==null){t=H.jY("self")
$.k0=t}return t},
jY:function(a){var t,s,r,q,p
t=new H.br("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
nT:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.aw(a,"String"))},
a0:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aw(a,"double"))},
nS:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aw(a,"num"))},
nb:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.aw(a,"bool"))},
nr:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.aw(a,"int"))},
nz:function(a,b){throw H.e(H.aw(a,b.substring(3)))},
ny:function(a,b){var t=J.af(b)
throw H.e(H.k1(H.dn(a),t.bl(b,3,t.gl(b))))},
jA:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.x(a)[b])return a
H.nz(a,b)},
aA:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.x(a)[b]
else t=!0
if(t)return a
H.ny(a,b)},
nR:function(a){if(a==null)return a
if(!!J.x(a).$isb)return a
throw H.e(H.aw(a,"List"))},
l3:function(a){var t=J.x(a)
return"$S" in t?t.$S():null},
bm:function(a,b){var t
if(a==null)return!1
t=H.l3(a)
return t==null?!1:H.lb(t,b)},
nP:function(a,b){var t,s
if(a==null)return a
if($.ju)return a
$.ju=!0
try{if(H.bm(a,b))return a
t=H.aN(b,null)
s=H.aw(a,t)
throw H.e(s)}finally{$.ju=!1}},
aw:function(a,b){return new H.he("type '"+H.dn(a)+"' is not a subtype of type '"+b+"'")},
k1:function(a,b){return new H.dX("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
ae:function(a){if(!0===a)return!1
if(!!J.x(a).$isje)a=a.$0()
if(typeof a==="boolean")return!a
throw H.e(H.aw(a,"bool"))},
an:function(a){throw H.e(new H.hs(a))},
d:function(a){if(H.ae(a))throw H.e(new P.cd(null))},
nF:function(a){throw H.e(new P.e0(a))},
iU:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
l8:function(a){return u.getIsolateTag(a)},
O:function(a){return new H.aI(a,null)},
D:function(a,b){H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
iD:function(a){if(a==null)return
return a.$ti},
l9:function(a,b){return H.jF(a["$as"+H.i(b)],H.iD(a))},
ao:function(a,b,c){var t,s
t=H.l9(a,b)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
aM:function(a,b){var t,s
t=H.iD(a)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
aN:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.d(!0)
H.d(!0)
return a[0].name+H.dJ(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.i(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aN(t,b)
return H.n0(a,b)}return"unknown-reified-type"},
n0:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aN(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aN(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aN(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.nh(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aN(l[j],b)+(" "+H.i(j))}q+="}"}return"("+q+") => "+t},
dJ:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=new P.bR("")
for(r=b,q=!0,p=!0;H.d(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.d(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aN(o,c)}return p?"":"<"+s.k(0)+">"},
iE:function(a){var t,s
if(a instanceof H.b9){t=H.l3(a)
if(t!=null)return H.aN(t,null)}s=J.x(a).constructor.name
if(a==null)return s
return s+H.dJ(a.$ti,0,null)},
jF:function(a,b){if(a==null)return b
H.d(typeof a=="function")
H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.jB(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.jB(a,null,b)
return b},
iw:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.iD(a)
s=J.x(a)
if(s[b]==null)return!1
return H.kY(H.jF(s[d],t),c)},
dK:function(a,b,c,d){if(a==null)return a
if(H.iw(a,b,c,d))return a
throw H.e(H.k1(H.dn(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dJ(c,0,null),u.mangledGlobalNames)))},
nM:function(a,b,c,d){if(a==null)return a
if(H.iw(a,b,c,d))return a
throw H.e(H.aw(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dJ(c,0,null),u.mangledGlobalNames)))},
kY:function(a,b){var t,s,r,q,p
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
nN:function(a,b,c){return H.jB(a,b,H.l9(b,c))},
a1:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.name==="aY")return!0
if('func' in b)return H.lb(a,b)
if('func' in a)return b.name==="je"||b.name==="t"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.d(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.d(!0)
q=b[0]}else q=b
if(q!==s){p=H.aN(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.kY(H.jF(o,t),r)},
kX:function(a,b,c){var t,s,r,q,p,o,n
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
n7:function(a,b){var t,s,r,q,p,o
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
lb:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
if(n===m){if(!H.kX(r,q,!1))return!1
if(!H.kX(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.d(j)
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
if(!(H.a1(g,f)||H.a1(f,g)))return!1}}return H.n7(a.named,b.named)},
jB:function(a,b,c){H.d(typeof a=="function")
H.d(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
nU:function(a){var t=$.jy
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
nQ:function(a){return H.aZ(a)},
nO:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nu:function(a){var t,s,r,q,p,o
H.d(!(a instanceof P.t))
t=$.jy.$1(a)
s=$.iB[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iJ[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.kW.$2(a,t)
if(t!=null){s=$.iB[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iJ[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.jC(r)
$.iB[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.iJ[t]=r
return r}if(p==="-"){o=H.jC(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.ld(a,r)
if(p==="*")throw H.e(new P.dy(t))
if(u.leafTags[t]===true){o=H.jC(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.ld(a,r)},
ld:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.iR(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
jC:function(a){return J.iR(a,!1,null,!!a.$isr)},
nw:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.iR(t,!1,null,!!t.$isr)
else return J.iR(t,c,null,null)},
np:function(){if(!0===$.jz)return
$.jz=!0
H.nq()},
nq:function(){var t,s,r,q,p,o,n,m
$.iB=Object.create(null)
$.iJ=Object.create(null)
H.no()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.le.$1(p)
if(o!=null){n=H.nw(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
no:function(){var t,s,r,q,p,o,n
t=C.D()
t=H.bl(C.A,H.bl(C.F,H.bl(C.p,H.bl(C.p,H.bl(C.E,H.bl(C.B,H.bl(C.C(C.q),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.jy=new H.iG(p)
$.kW=new H.iH(o)
$.le=new H.iI(n)},
bl:function(a,b){return a(b)||b},
nE:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
fx:function fx(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
hc:function hc(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dl:function dl(a,b){this.a=a
this.b=b},
eM:function eM(a,b,c){this.a=a
this.b=b
this.c=c},
hh:function hh(a){this.a=a},
j1:function j1(a){this.a=a},
dF:function dF(a,b){this.a=a
this.b=b},
iK:function iK(a){this.a=a},
iL:function iL(a,b){this.a=a
this.b=b},
iM:function iM(a,b,c){this.a=a
this.b=b
this.c=c},
iN:function iN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iO:function iO(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
b9:function b9(){},
h_:function h_(){},
fM:function fM(){},
br:function br(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
he:function he(a){this.a=a},
dX:function dX(a){this.a=a},
fD:function fD(a){this.a=a},
hs:function hs(a){this.a=a},
aI:function aI(a,b){this.a=a
this.b=b},
ai:function ai(a,b,c,d,e,f,g,h){var _=this
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
iG:function iG(a){this.a=a},
iH:function iH(a){this.a=a},
iI:function iI(a){this.a=a},
f:function(a){return a},
is:function(a){var t,s,r
if(!!J.x(a).$isq)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
bH:function bH(){},
bf:function bf(){},
f2:function f2(){},
de:function de(){},
df:function df(){},
dg:function dg(){},
dd:function dd(){},
f3:function f3(){},
f4:function f4(){},
f5:function f5(){},
f6:function f6(){},
f7:function f7(){},
f8:function f8(){},
dh:function dh(){},
f9:function f9(){},
bI:function bI(){},
bJ:function bJ(){},
bK:function bK(){},
bL:function bL(){},
nh:function(a){var t=H.D(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
iT:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
x:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d9.prototype
return J.d8.prototype}if(typeof a=="string")return J.aT.prototype
if(a==null)return J.eK.prototype
if(typeof a=="boolean")return J.eJ.prototype
if(a.constructor==Array)return J.aS.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.t)return a
return J.iC(a)},
iR:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iC:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.jz==null){H.np()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.e(new P.dy("Return interceptor for "+H.i(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$jh()]
if(p!=null)return p
p=H.nu(a)
if(p!=null)return p
if(typeof a=="function")return C.G
s=Object.getPrototypeOf(a)
if(s==null)return C.t
if(s===Object.prototype)return C.t
if(typeof q=="function"){Object.defineProperty(q,$.$get$jh(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
af:function(a){if(typeof a=="string")return J.aT.prototype
if(a==null)return a
if(a.constructor==Array)return J.aS.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.t)return a
return J.iC(a)},
c9:function(a){if(a==null)return a
if(a.constructor==Array)return J.aS.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.t)return a
return J.iC(a)},
l6:function(a){if(typeof a=="number")return J.bd.prototype
if(a==null)return a
if(!(a instanceof P.t))return J.b1.prototype
return a},
nj:function(a){if(typeof a=="number")return J.bd.prototype
if(typeof a=="string")return J.aT.prototype
if(a==null)return a
if(!(a instanceof P.t))return J.b1.prototype
return a},
l7:function(a){if(typeof a=="string")return J.aT.prototype
if(a==null)return a
if(!(a instanceof P.t))return J.b1.prototype
return a},
l:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.t)return a
return J.iC(a)},
H:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.x(a).A(a,b)},
ap:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.l6(a).as(a,b)},
ll:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.l6(a).at(a,b)},
bn:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nt(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.af(a).h(a,b)},
lm:function(a,b,c,d){return J.l(a).dB(a,b,c,d)},
jG:function(a,b){return J.l7(a).aP(a,b)},
bo:function(a,b){return J.l(a).dR(a,b)},
ln:function(a,b,c){return J.l(a).dS(a,b,c)},
jH:function(a,b){return J.l(a).bS(a,b)},
j2:function(a,b){return J.l(a).T(a,b)},
jI:function(a,b,c){return J.l(a).bV(a,b,c)},
lo:function(a,b){return J.l(a).e4(a,b)},
dL:function(a,b,c){return J.l(a).bW(a,b,c)},
j3:function(a,b,c){return J.l(a).bX(a,b,c)},
bp:function(a,b,c){return J.l(a).bY(a,b,c)},
dM:function(a,b){return J.l(a).e7(a,b)},
lp:function(a,b){return J.l(a).bZ(a,b)},
lq:function(a,b,c){return J.l(a).c_(a,b,c)},
jJ:function(a,b,c,d){return J.l(a).c0(a,b,c,d)},
lr:function(a,b){return J.l(a).c1(a,b)},
ls:function(a,b){return J.c9(a).c2(a,b)},
lt:function(a,b,c,d,e){return J.l(a).c3(a,b,c,d,e)},
lu:function(a,b){return J.nj(a).U(a,b)},
j4:function(a,b,c){return J.af(a).eb(a,b,c)},
j5:function(a){return J.l(a).c5(a)},
lv:function(a){return J.l(a).c6(a)},
lw:function(a){return J.l(a).c7(a)},
jK:function(a){return J.l(a).c9(a)},
lx:function(a){return J.l(a).eh(a)},
ly:function(a,b){return J.l(a).ca(a,b)},
j6:function(a,b){return J.l(a).cb(a,b)},
lz:function(a,b,c,d){return J.l(a).cc(a,b,c,d)},
lA:function(a,b,c,d,e){return J.l(a).eo(a,b,c,d,e)},
lB:function(a,b,c,d,e){return J.l(a).cd(a,b,c,d,e)},
lC:function(a,b,c,d,e,f){return J.l(a).ep(a,b,c,d,e,f)},
lD:function(a,b){return J.c9(a).u(a,b)},
cc:function(a,b){return J.l(a).ce(a,b)},
lE:function(a,b){return J.l(a).cf(a,b)},
lF:function(a){return J.l(a).eq(a)},
lG:function(a,b){return J.c9(a).aC(a,b)},
jL:function(a,b,c,d,e,f){return J.l(a).ci(a,b,c,d,e,f)},
lH:function(a){return J.l(a).ge3(a)},
aq:function(a){return J.x(a).gw(a)},
bq:function(a){return J.c9(a).gB(a)},
dN:function(a){return J.af(a).gl(a)},
lI:function(a){return J.l(a).gb6(a)},
lJ:function(a){return J.x(a).gD(a)},
lK:function(a){return J.l(a).geO(a)},
lL:function(a){return J.l(a).gaG(a)},
j7:function(a){return J.l(a).gm(a)},
j8:function(a){return J.l(a).gn(a)},
jM:function(a){return J.l(a).gN(a)},
j9:function(a,b){return J.l(a).aa(a,b)},
lM:function(a){return J.l(a).aI(a)},
jN:function(a){return J.l(a).ba(a)},
lN:function(a,b){return J.l(a).bb(a,b)},
lO:function(a,b,c){return J.l(a).bc(a,b,c)},
jO:function(a,b,c){return J.l(a).bf(a,b,c)},
lP:function(a,b){return J.l(a).cj(a,b)},
lQ:function(a,b){return J.c9(a).cl(a,b)},
lR:function(a){return J.c9(a).eI(a)},
lS:function(a,b){return J.l(a).J(a,b)},
lT:function(a,b,c,d){return J.l(a).bk(a,b,c,d)},
lU:function(a,b,c,d,e,f,g,h,i,j){return J.l(a).cr(a,b,c,d,e,f,g,h,i,j)},
lV:function(a,b,c,d){return J.l(a).cs(a,b,c,d)},
dO:function(a,b,c,d){return J.l(a).ct(a,b,c,d)},
lW:function(a,b,c,d,e,f){return J.l(a).eP(a,b,c,d,e,f)},
lX:function(a){return J.l7(a).eS(a)},
aC:function(a){return J.x(a).k(a)},
lY:function(a,b,c,d){return J.l(a).eU(a,b,c,d)},
lZ:function(a,b,c){return J.l(a).cw(a,b,c)},
m_:function(a,b,c){return J.l(a).cz(a,b,c)},
ja:function(a,b,c){return J.l(a).cA(a,b,c)},
m0:function(a,b,c){return J.l(a).cB(a,b,c)},
jP:function(a,b,c){return J.l(a).cC(a,b,c)},
jQ:function(a,b,c){return J.l(a).cD(a,b,c)},
jR:function(a,b,c){return J.l(a).cE(a,b,c)},
jS:function(a,b,c,d){return J.l(a).cF(a,b,c,d)},
jT:function(a,b,c,d){return J.l(a).cG(a,b,c,d)},
m1:function(a,b){return J.l(a).cI(a,b)},
m2:function(a,b,c){return J.l(a).eV(a,b,c)},
jU:function(a,b,c,d,e,f,g){return J.l(a).cK(a,b,c,d,e,f,g)},
m3:function(a,b,c,d,e){return J.l(a).cL(a,b,c,d,e)},
a:function a(){},
eJ:function eJ(){},
eK:function eK(){},
bE:function bE(){},
fn:function fn(){},
b1:function b1(){},
aU:function aU(){},
aS:function aS(a){this.$ti=a},
jf:function jf(a){this.$ti=a},
dS:function dS(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bd:function bd(){},
d9:function d9(){},
d8:function d8(){},
aT:function aT(){}},P={
mP:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.n8()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.c7(new P.hu(t),1)).observe(s,{childList:true})
return new P.ht(t,s,r)}else if(self.setImmediate!=null)return P.n9()
return P.na()},
mQ:function(a){++u.globalState.f.b
self.scheduleImmediate(H.c7(new P.hv(a),0))},
mR:function(a){++u.globalState.f.b
self.setImmediate(H.c7(new P.hw(a),0))},
mS:function(a){P.jp(C.n,a)},
n3:function(a,b){if(H.bm(a,{func:1,args:[P.aY,P.aY]})){b.toString
return a}else{b.toString
return a}},
mU:function(a,b){var t,s,r
H.d(b.a<4)
H.d(!(a instanceof P.ay))
H.d(b.a===0)
b.a=1
try{a.cv(new P.hM(b),new P.hN(b))}catch(r){t=H.S(r)
s=H.aL(r)
P.nA(new P.hO(b,t,s))}},
kN:function(a,b){var t,s,r,q
H.d(b.a<=1)
for(;t=a.a,s=t===2,s;){H.d(s)
a=a.c}s=b.a
if(t>=4){H.d(s<4)
r=b.c
b.c=null
q=b.aj(r)
H.d(b.a<4)
H.d(a.a>=4)
b.a=a.a
b.c=a.c
P.bY(b,q)}else{q=b.c
H.d(s<=1)
b.a=2
b.c=a
a.bL(q)}},
bY:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.it(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bY(t.a,b)}s=t.a
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
P.it(null,null,p,o,s)
return}s=$.F
if(s==null?l!=null:s!==l){H.d(l!=null)
s=$.F
H.d(l==null?s!=null:l!==s)
j=$.F
$.F=l
i=j}else i=null
s=b.c
if(s===8)new P.hS(t,r,q,b).$0()
else if(p){if((s&1)!==0)new P.hR(r,b,m).$0()}else if((s&2)!==0)new P.hQ(t,r,b).$0()
if(i!=null){H.d(!0)
$.F=i}s=r.b
if(!!J.x(s).$iseA){if(s.a>=4){H.d(o.a<4)
h=o.c
o.c=null
b=o.aj(h)
H.d(o.a<4)
H.d(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.kN(s,o)
return}}g=b.b
H.d(g.a<4)
h=g.c
g.c=null
b=g.aj(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.d(!o)
g.a=4
g.c=p}else{H.d(!o)
g.a=8
g.c=p}t.a=g
s=g}},
n2:function(){var t,s
for(;t=$.bk,t!=null;){$.c5=null
s=t.b
$.bk=s
if(s==null)$.c4=null
t.a.$0()}},
n6:function(){$.jv=!0
try{P.n2()}finally{$.c5=null
$.jv=!1
if($.bk!=null)$.$get$jr().$1(P.kZ())}},
kU:function(a){var t=new P.dA(a,null)
if($.bk==null){$.c4=t
$.bk=t
if(!$.jv)$.$get$jr().$1(P.kZ())}else{$.c4.b=t
$.c4=t}},
n5:function(a){var t,s,r
t=$.bk
if(t==null){P.kU(a)
$.c5=$.c4
return}s=new P.dA(a,null)
r=$.c5
if(r==null){s.b=t
$.c5=s
$.bk=s}else{s.b=r.b
r.b=s
$.c5=s
if(s.b==null)$.c4=s}},
nA:function(a){var t=$.F
if(C.d===t){P.iv(null,null,C.d,a)
return}t.toString
P.iv(null,null,t,t.b1(a))},
mN:function(a,b){var t=$.F
if(t===C.d){t.toString
return P.jp(a,b)}return P.jp(a,t.b1(b))},
jp:function(a,b){var t=C.b.K(a.a,1000)
return H.mM(t<0?0:t,b)},
jq:function(a){var t,s
H.d(a!=null)
t=$.F
H.d(a==null?t!=null:a!==t)
s=$.F
$.F=a
return s},
it:function(a,b,c,d,e){var t={}
t.a=d
P.n5(new P.iu(t,e))},
kS:function(a,b,c,d){var t,s
if($.F===c)return d.$0()
t=P.jq(c)
try{s=d.$0()
return s}finally{s=t
H.d(s!=null)
$.F=s}},
kT:function(a,b,c,d,e){var t,s
if($.F===c)return d.$1(e)
t=P.jq(c)
try{s=d.$1(e)
return s}finally{s=t
H.d(s!=null)
$.F=s}},
n4:function(a,b,c,d,e,f){var t,s
if($.F===c)return d.$2(e,f)
t=P.jq(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.d(s!=null)
$.F=s}},
iv:function(a,b,c,d){var t=C.d!==c
if(t)d=!(!t||!1)?c.b1(d):c.e5(d)
P.kU(d)},
hu:function hu(a){this.a=a},
ht:function ht(a,b,c){this.a=a
this.b=b
this.c=c},
hv:function hv(a){this.a=a},
hw:function hw(a){this.a=a},
hA:function hA(){},
ij:function ij(a,b){this.a=a
this.$ti=b},
dC:function dC(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
ay:function ay(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hL:function hL(a,b){this.a=a
this.b=b},
hP:function hP(a,b){this.a=a
this.b=b},
hM:function hM(a){this.a=a},
hN:function hN(a){this.a=a},
hO:function hO(a,b,c){this.a=a
this.b=b
this.c=c},
hS:function hS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hT:function hT(a){this.a=a},
hR:function hR(a,b,c){this.a=a
this.b=b
this.c=c},
hQ:function hQ(a,b,c){this.a=a
this.b=b
this.c=c},
dA:function dA(a,b){this.a=a
this.b=b},
fR:function fR(){},
fT:function fT(a){this.a=a},
fU:function fU(a,b){this.a=a
this.b=b},
fS:function fS(){},
b8:function b8(a,b){this.a=a
this.b=b},
ir:function ir(){},
iu:function iu(a,b){this.a=a
this.b=b},
i4:function i4(){},
i6:function i6(a,b){this.a=a
this.b=b},
i5:function i5(a,b){this.a=a
this.b=b},
i7:function i7(a,b){this.a=a
this.b=b},
kn:function(a,b){return new H.ai(0,null,null,null,null,null,0,[a,b])},
I:function(){return new H.ai(0,null,null,null,null,null,0,[null,null])},
aW:function(a){return H.ni(a,new H.ai(0,null,null,null,null,null,0,[null,null]))},
c1:function(a,b){return new P.dD(0,null,null,null,null,null,0,[a,b])},
mY:function(){var t=Object.create(null)
H.d(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
mu:function(a,b,c){var t,s
if(P.jw(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$c6()
C.a.i(s,a)
try{P.n1(a,t)}finally{H.d(C.a.gaF(s)===a)
s.pop()}s=P.kv(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eH:function(a,b,c){var t,s,r
if(P.jw(a))return b+"..."+c
t=new P.bR(b)
s=$.$get$c6()
C.a.i(s,a)
try{r=t
r.a=P.kv(r.ga6(),a,", ")}finally{H.d(C.a.gaF(s)===a)
s.pop()}s=t
s.a=s.ga6()+c
s=t.ga6()
return s.charCodeAt(0)==0?s:s},
jw:function(a){var t,s
for(t=0;s=$.$get$c6(),t<s.length;++t)if(a===s[t])return!0
return!1},
n1:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gB(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.q())return
q=H.i(t.gt())
C.a.i(b,q)
s+=q.length+2;++r}if(!t.q()){if(r<=5)return
p=b.pop()
o=b.pop()}else{n=t.gt();++r
if(!t.q()){if(r<=4){C.a.i(b,H.i(n))
return}p=H.i(n)
o=b.pop()
s+=p.length+2}else{m=t.gt();++r
H.d(r<100)
for(;t.q();n=m,m=l){l=t.gt();++r
if(r>100){while(!0){if(!(s>75&&r>3))break
s-=b.pop().length+2;--r}C.a.i(b,"...")
return}}o=H.i(n)
p=H.i(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)C.a.i(b,k)
C.a.i(b,o)
C.a.i(b,p)},
aj:function(a,b,c,d){return new P.hY(0,null,null,null,null,null,0,[d])},
jj:function(a,b){var t,s
t=P.aj(null,null,null,b)
for(s=J.bq(a);s.q();)t.i(0,s.gt())
return t},
my:function(a){var t,s,r
t={}
if(P.jw(a))return"{...}"
s=new P.bR("")
try{C.a.i($.$get$c6(),a)
r=s
r.a=r.ga6()+"{"
t.a=!0
a.aC(0,new P.eU(t,s))
t=s
t.a=t.ga6()+"}"}finally{t=$.$get$c6()
H.d(C.a.gaF(t)===a)
t.pop()}t=s.ga6()
return t.charCodeAt(0)==0?t:t},
jk:function(a,b){var t=new P.eR(null,0,0,0,[b])
t.dg(a,b)
return t},
dD:function dD(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hY:function hY(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hZ:function hZ(a,b,c){this.a=a
this.b=b
this.c=c},
c0:function c0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hW:function hW(){},
da:function da(){},
y:function y(){},
eU:function eU(a,b){this.a=a
this.b=b},
eR:function eR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
i_:function i_(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fG:function fG(){},
fF:function fF(){},
bN:function bN(){},
kv:function(a,b,c){var t=J.bq(b)
if(!t.q())return a
if(c.length===0){do a+=H.i(t.gt())
while(t.q())}else{a+=H.i(t.gt())
for(;t.q();)a=a+c+H.i(t.gt())}return a},
ma:function(a,b){return J.lu(a,b)},
md:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.i(t)
if(t>=10)return s+"00"+H.i(t)
return s+"000"+H.i(t)},
me:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cg:function(a){if(a>=10)return""+a
return"0"+a},
mg:function(a,b,c,d,e,f){return new P.aD(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
jd:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aC(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mj(a)},
mj:function(a){var t=J.x(a)
if(!!t.$isb9)return t.k(a)
return H.ft(a)},
jV:function(a){return new P.ag(!1,null,null,a)},
jW:function(a,b,c){return new P.ag(!0,a,b,c)},
m4:function(a){return new P.ag(!1,null,a,"Must not be null")},
fu:function(a,b,c){return new P.dq(null,null,!0,a,b,"Value not in range")},
b_:function(a,b,c,d,e){return new P.dq(b,c,!0,a,d,"Invalid value")},
ks:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.b_(a,0,c,"start",f))
if(a>b||b>c)throw H.e(P.b_(b,a,c,"end",f))
return b},
C:function(a,b,c,d,e){var t=e!=null?e:J.dN(b)
return new P.eE(b,t,!0,a,c,"Index out of range")},
cm:function(a){return new P.hK(a)},
ko:function(a,b,c){var t,s
t=H.D([],[c])
for(s=J.bq(a);s.q();)C.a.i(t,s.gt())
if(b)return t
t.fixed$length=Array
return t},
aB:function(a){H.iT(H.i(a))},
az:function az(){},
M:function M(){},
bb:function bb(a,b){this.a=a
this.b=b},
P:function P(){},
aD:function aD(a){this.a=a},
e8:function e8(){},
e9:function e9(){},
bc:function bc(){},
cd:function cd(a){this.a=a},
dm:function dm(){},
ag:function ag(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dq:function dq(a,b,c,d,e,f){var _=this
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
w:function w(a){this.a=a},
dy:function dy(a){this.a=a},
aH:function aH(a){this.a=a},
a3:function a3(a){this.a=a},
dt:function dt(){},
e0:function e0(a){this.a=a},
hK:function hK(a){this.a=a},
eb:function eb(a,b,c){this.a=a
this.b=b
this.$ti=c},
p:function p(){},
Y:function Y(){},
d7:function d7(){},
b:function b(){},
aG:function aG(){},
aY:function aY(){},
X:function X(){},
t:function t(){},
bQ:function bQ(){},
v:function v(){},
bR:function bR(a){this.a=a},
iz:function(a){var t,s,r,q,p
if(a==null)return
t=P.I()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.E)(s),++q){p=s[q]
t.j(0,p,a[p])}return t},
ne:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.lG(a,new P.iy(t))
return t},
kb:function(){var t=$.ka
if(t==null){t=J.j4(window.navigator.userAgent,"Opera",0)
$.ka=t}return t},
mf:function(){var t,s
t=$.k7
if(t!=null)return t
s=$.k8
if(s==null){s=J.j4(window.navigator.userAgent,"Firefox",0)
$.k8=s}if(s)t="-moz-"
else{s=$.k9
if(s==null){s=!P.kb()&&J.j4(window.navigator.userAgent,"Trident/",0)
$.k9=s}if(s)t="-ms-"
else t=P.kb()?"-o-":"-webkit-"}$.k7=t
return t},
iy:function iy(a){this.a=a},
nD:function(a){return Math.sqrt(a)},
i3:function i3(){},
N:function N(){},
dP:function dP(){},
aO:function aO(){},
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
eq:function eq(){},
er:function er(){},
es:function es(){},
et:function et(){},
ew:function ew(){},
ey:function ey(){},
ah:function ah(){},
aF:function aF(){},
eD:function eD(){},
as:function as(){},
eN:function eN(){},
eV:function eV(){},
eW:function eW(){},
at:function at(){},
fd:function fd(){},
fk:function fk(){},
fp:function fp(){},
fq:function fq(){},
fv:function fv(){},
fw:function fw(){},
bP:function bP(){},
fV:function fV(){},
K:function K(){},
fW:function fW(){},
fX:function fX(){},
dv:function dv(){},
h0:function h0(){},
bT:function bT(){},
au:function au(){},
ha:function ha(){},
hj:function hj(){},
hl:function hl(){},
hm:function hm(){},
bZ:function bZ(){},
i8:function i8(){},
i9:function i9(){},
ia:function ia(){},
cJ:function cJ(){},
cv:function cv(){},
cA:function cA(){},
cF:function cF(){},
cT:function cT(){},
cU:function cU(){},
cW:function cW(){},
d1:function d1(){},
dT:function dT(){},
fA:function fA(){},
fB:function fB(){},
io:function io(){},
fL:function fL(){},
cK:function cK(){},
cX:function cX(){}},W={
ng:function(){return document},
mh:function(a,b,c){var t,s
t=document.body
s=(t&&C.h).O(t,a,b,c)
s.toString
t=new H.dz(new W.U(s),new W.ix(),[W.u])
return t.ga5(t)},
mi:function(a){return"wheel"},
bt:function(a){var t,s,r
t="element tag unavailable"
try{s=J.lK(a)
if(typeof s==="string")t=a.tagName}catch(r){H.S(r)}return t},
mT:function(a,b){return document.createElement(a)},
b7:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kQ:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ax:function(a,b,c,d,e){var t=c==null?null:W.kV(new W.hJ(c))
t=new W.hI(0,a,b,t,!1,[e])
t.du(a,b,c,!1,e)
return t},
kO:function(a){var t,s
t=document.createElement("a")
s=new W.ib(t,window.location)
s=new W.c_(s)
s.dv(a)
return s},
mW:function(a,b,c,d){return!0},
mX:function(a,b,c,d){var t,s,r,q,p
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
kR:function(){var t=P.v
t=new W.ik(P.jj(C.j,t),P.aj(null,null,null,t),P.aj(null,null,null,t),P.aj(null,null,null,t),null)
t.dz(null,new H.bF(C.j,new W.il(),[H.aM(C.j,0),null]),["TEMPLATE"],null)
return t},
kV:function(a){var t=$.F
if(t===C.d)return a
return t.e6(a)},
n:function n(){},
dQ:function dQ(){},
dR:function dR(){},
a2:function a2(){},
dU:function dU(){},
ce:function ce(){},
aP:function aP(){},
cf:function cf(){},
dW:function dW(){},
aQ:function aQ(){},
dZ:function dZ(){},
A:function A(){},
ba:function ba(){},
e_:function e_(){},
e1:function e1(){},
e2:function e2(){},
ch:function ch(){},
bs:function bs(){},
ci:function ci(){},
e3:function e3(){},
cj:function cj(){},
e4:function e4(){},
ck:function ck(){},
cl:function cl(){},
e5:function e5(){},
e6:function e6(){},
a4:function a4(){},
ix:function ix(){},
m:function m(){},
j:function j(){},
a5:function a5(){},
eu:function eu(){},
ev:function ev(){},
ez:function ez(){},
a6:function a6(){},
cr:function cr(){},
eB:function eB(){},
bB:function bB(){},
cs:function cs(){},
eC:function eC(){},
bC:function bC(){},
bD:function bD(){},
aV:function aV(){},
eS:function eS(){},
eY:function eY(){},
f_:function f_(){},
bG:function bG(){},
a7:function a7(){},
f0:function f0(){},
Q:function Q(){},
fa:function fa(){},
U:function U(a){this.a=a},
u:function u(){},
di:function di(){},
bM:function bM(){},
fj:function fj(){},
fm:function fm(){},
a8:function a8(){},
fo:function fo(){},
fr:function fr(){},
fs:function fs(){},
dp:function dp(){},
fC:function fC(){},
dr:function dr(){},
fE:function fE(){},
fH:function fH(){},
a9:function a9(){},
fI:function fI(){},
aa:function aa(){},
fK:function fK(){},
ab:function ab(){},
fQ:function fQ(){},
Z:function Z(){},
al:function al(){},
du:function du(){},
fY:function fY(){},
fZ:function fZ(){},
bS:function bS(){},
ac:function ac(){},
a_:function a_(){},
h1:function h1(){},
h2:function h2(){},
h4:function h4(){},
ad:function ad(){},
b0:function b0(){},
h8:function h8(){},
h9:function h9(){},
bi:function bi(){},
hb:function hb(){},
dx:function dx(){},
aJ:function aJ(){},
hi:function hi(){},
hk:function hk(){},
hn:function hn(){},
ho:function ho(){},
b2:function b2(){},
bX:function bX(){},
hq:function hq(a){this.a=a},
hr:function hr(){},
b3:function b3(){},
hz:function hz(){},
dB:function dB(){},
hB:function hB(){},
hC:function hC(){},
hD:function hD(){},
hU:function hU(){},
hV:function hV(){},
dE:function dE(){},
ic:function ic(){},
ig:function ig(){},
ih:function ih(){},
ip:function ip(){},
iq:function iq(){},
hx:function hx(){},
hE:function hE(a){this.a=a},
hH:function hH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
js:function js(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hI:function hI(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
hJ:function hJ(a){this.a=a},
c_:function c_(a){this.a=a},
B:function B(){},
dk:function dk(a){this.a=a},
fc:function fc(a){this.a=a},
fb:function fb(a,b,c){this.a=a
this.b=b
this.c=c},
c2:function c2(){},
id:function id(){},
ie:function ie(){},
ik:function ik(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
il:function il(){},
ii:function ii(){},
co:function co(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
dj:function dj(){},
ib:function ib(a,b){this.a=a
this.b=b},
dG:function dG(a){this.a=a},
im:function im(a){this.a=a},
bu:function bu(){},
bv:function bv(){},
bw:function bw(){},
bx:function bx(){},
by:function by(){},
bz:function bz(){},
ct:function ct(){},
cN:function cN(){},
cz:function cz(){},
cw:function cw(){},
cG:function cG(){},
cH:function cH(){},
cI:function cI(){},
cL:function cL(){},
cM:function cM(){},
cu:function cu(){},
cx:function cx(){},
cy:function cy(){},
cB:function cB(){},
cC:function cC(){},
cD:function cD(){},
cE:function cE(){},
cO:function cO(){},
cP:function cP(){},
cQ:function cQ(){},
d_:function d_(){},
d0:function d0(){},
cY:function cY(){},
cZ:function cZ(){},
d3:function d3(){},
d4:function d4(){},
d5:function d5(){},
d6:function d6(){},
cR:function cR(){},
cS:function cS(){},
cV:function cV(){},
d2:function d2(){}},B={
nB:function(a){var t,s
t=document
s=W.aV
W.ax(t,"keydown",new B.iV(),!1,s)
W.ax(t,"keyup",new B.iW(),!1,s)
if(!$.nC)W.ax(t,"mousemove",new B.iX(),!1,W.Q)
s=W.Q
W.ax(t,"mousedown",new B.iY(),!1,s)
W.ax(t,"mouseup",new B.iZ(),!1,s)},
mz:function(a,b,c,d){var t,s,r,q
t=new Float32Array(H.f(3))
s=$.$get$iA()
r=$.$get$c8()
q=new T.J(new Float32Array(H.f(16)))
q.F()
q=new B.fe(a,b,c,0,new T.h(t),-0.02,s,r,q,new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),"camera:orbit",!1,!0)
q.di(a,b,c,d)
return q},
iV:function iV(){},
iW:function iW(){},
iX:function iX(){},
iY:function iY(){},
iZ:function iZ(){},
fe:function fe(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
ff:function ff(a){this.a=a},
fg:function fg(a){this.a=a},
fh:function fh(){},
fi:function fi(a){this.a=a},
mb:function(d1,d2,d3,d4,d5,d6,d7,d8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0
t=-d6
s=-d7
r=new T.h(new Float32Array(H.f(3)))
r.p(t,s,d8)
q=new T.h(new Float32Array(H.f(3)))
q.p(d6,s,d8)
p=new T.h(new Float32Array(H.f(3)))
p.p(d6,d7,d8)
o=new T.h(new Float32Array(H.f(3)))
o.p(t,d7,d8)
n=-d8
m=new T.h(new Float32Array(H.f(3)))
m.p(t,s,n)
l=new T.h(new Float32Array(H.f(3)))
l.p(t,d7,n)
k=new T.h(new Float32Array(H.f(3)))
k.p(d6,d7,n)
j=new T.h(new Float32Array(H.f(3)))
j.p(d6,s,n)
i=new T.h(new Float32Array(H.f(3)))
i.p(t,d7,n)
h=new T.h(new Float32Array(H.f(3)))
h.p(t,d7,d8)
g=new T.h(new Float32Array(H.f(3)))
g.p(d6,d7,d8)
f=new T.h(new Float32Array(H.f(3)))
f.p(d6,d7,n)
e=new T.h(new Float32Array(H.f(3)))
e.p(d6,s,d8)
d=new T.h(new Float32Array(H.f(3)))
d.p(t,s,d8)
c=new T.h(new Float32Array(H.f(3)))
c.p(t,s,n)
b=new T.h(new Float32Array(H.f(3)))
b.p(d6,s,n)
a=new T.h(new Float32Array(H.f(3)))
a.p(d6,s,n)
a0=new T.h(new Float32Array(H.f(3)))
a0.p(d6,d7,n)
a1=new T.h(new Float32Array(H.f(3)))
a1.p(d6,d7,d8)
a2=new T.h(new Float32Array(H.f(3)))
a2.p(d6,s,d8)
a3=new T.h(new Float32Array(H.f(3)))
a3.p(t,s,n)
a4=new T.h(new Float32Array(H.f(3)))
a4.p(t,s,d8)
s=new T.h(new Float32Array(H.f(3)))
s.p(t,d7,d8)
a5=new T.h(new Float32Array(H.f(3)))
a5.p(t,d7,n)
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
c8=new G.aR(!1,[],[],[],P.I())
c8.S("aTexUV")
c8.S("aNormal")
c8.bn(6)
c8.aO([r,q,p,o,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,s,a5])
c8.af("aTexUV",[new T.o(n),new T.o(t),new T.o(a6),new T.o(a7),new T.o(a8),new T.o(a9),new T.o(b0),new T.o(b1),new T.o(b2),new T.o(b3),new T.o(b4),new T.o(b5),new T.o(b6),new T.o(b7),new T.o(b8),new T.o(b9),new T.o(c0),new T.o(c1),new T.o(c2),new T.o(c3),new T.o(c4),new T.o(c5),new T.o(c6),new T.o(c7)])
for(c9=0;t=$.$get$kM(),c9<6;++c9){d0=t[c9]
c8.au("aNormal",[d0,d0,d0,d0])}return c8},
mc:function(a1,a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
t=a3/2
s=[]
r=[]
q=[]
p=new T.h(new Float32Array(H.f(3)))
p.p(0,t,0)
C.a.i(s,p)
p=new Float32Array(H.f(2))
p[0]=0
p[1]=0
C.a.i(r,new T.o(p))
p=new T.h(new Float32Array(H.f(3)))
p.p(0,1,0)
C.a.i(q,p)
p=-t
o=new T.h(new Float32Array(H.f(3)))
o.p(0,p,0)
C.a.i(s,o)
o=new Float32Array(H.f(2))
o[0]=1
o[1]=1
C.a.i(r,new T.o(o))
o=new T.h(new Float32Array(H.f(3)))
o.p(0,-1,0)
C.a.i(q,o)
for(n=0;n<a4;++n){m=n/a4
o=m*3.141592653589793*2
l=Math.sin(o)
o=Math.cos(o)
k=new Float32Array(3)
k[0]=l*a1
k[1]=t
k[2]=o*a1
C.a.i(s,new T.h(k))
k=new Float32Array(2)
k[0]=m
k[1]=1
C.a.i(r,new T.o(k))
k=new Float32Array(3)
k[0]=0
k[1]=1
k[2]=0
C.a.i(q,new T.h(k))
k=new Float32Array(3)
k[0]=l*a2
k[1]=p
k[2]=o*a2
C.a.i(s,new T.h(k))
o=new Float32Array(2)
o[0]=m
o[1]=0
C.a.i(r,new T.o(o))
o=new Float32Array(3)
o[0]=0
o[1]=-1
o[2]=0
C.a.i(q,new T.h(o))}p=2*a4
o=2+p
H.d(s.length===o)
H.d(r.length===o)
for(n=0;n<p;n=j){j=n+2
C.a.i(s,s[j])
o=n+3
C.a.i(s,s[o])
C.a.i(r,r[j])
C.a.i(r,r[o])
i=s[j]
h=s[o]
g=s[n+4]
o=new Float32Array(3)
f=new T.h(new Float32Array(3))
G.jn(i,h,g,new T.h(o),f)
C.a.i(q,f)
C.a.i(q,f)}H.d(s.length===2+4*a4)
p=[]
o=[]
e=new G.aR(!1,p,o,[],P.I())
e.S("aTexUV")
e.aO(s)
e.af("aTexUV",r)
e.S("aNormal")
e.au("aNormal",q)
for(d=a4*2,n=0;n<a4;n=b){c=n*2+2
h=c+1
b=n+1
a=(b===a4?0:b)*2+2
a0=a+1
H.d(!0)
C.a.i(p,new G.z(0,c,a))
H.d(!0)
C.a.i(p,new G.z(1,a0,h))
H.d(!0)
C.a.i(o,new G.bA(d+a,d+c,d+h,d+a0))}return e},
mn:function(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
t=[]
s=[]
C.a.L(t,$.$get$kh())
C.a.L(s,$.$get$ki())
for(r=0;r<a3;++r,t=q){q=[]
for(p=t.length,o=0;o<t.length;t.length===p||(0,H.E)(t),++o){n=t[o]
m=n.a
l=s[m]
k=new T.h(new Float32Array(3))
k.v(l)
l=n.b
k.i(0,s[l])
k.a2(0,0.5)
k.C(0)
j=s[l]
i=new T.h(new Float32Array(3))
i.v(j)
j=n.c
i.i(0,s[j])
i.a2(0,0.5)
i.C(0)
h=s[j]
g=new T.h(new Float32Array(3))
g.v(h)
g.i(0,s[m])
g.a2(0,0.5)
g.C(0)
f=s.length
C.a.i(s,k)
e=s.length
C.a.i(s,i)
d=s.length
C.a.i(s,g)
C.a.i(q,new G.z(m,f,d))
C.a.i(q,new G.z(l,e,f))
C.a.i(q,new G.z(j,d,e))
C.a.i(q,new G.z(f,e,d))}}c=new G.aR(!1,[],[],[],P.I())
c.S("aTexUV")
c.S("aNormal")
for(p=t.length,o=0;o<t.length;t.length===p||(0,H.E)(t),++o){n=t[o]
b=s[n.a]
H.d(Math.sqrt(b.gP())<1.01&&Math.sqrt(b.gP())>0.99)
a=s[n.b]
H.d(Math.sqrt(a.gP())<1.01&&Math.sqrt(a.gP())>0.99)
a0=s[n.c]
H.d(Math.sqrt(a0.gP())<1.01&&Math.sqrt(a0.gP())>0.99)
m=b.a
l=Math.atan2(m[2],m[0])
m=Math.acos(m[1])
j=new Float32Array(2)
j[0]=0.5*(1+l*0.3183098861837907)
j[1]=m*0.3183098861837907
m=a.a
l=Math.atan2(m[2],m[0])
m=Math.acos(m[1])
h=new Float32Array(2)
h[0]=0.5*(1+l*0.3183098861837907)
h[1]=m*0.3183098861837907
m=a0.a
l=Math.atan2(m[2],m[0])
m=Math.acos(m[1])
a1=new Float32Array(2)
a1[0]=0.5*(1+l*0.3183098861837907)
a1[1]=m*0.3183098861837907
c.au("aNormal",[b,a,a0])
m=new T.h(new Float32Array(3))
m.v(b)
m.a2(0,a4)
l=new T.h(new Float32Array(3))
l.v(a)
l.a2(0,a4)
a2=new T.h(new Float32Array(3))
a2.v(a0)
a2.a2(0,a4)
c.d9([m,l,a2])
c.af("aTexUV",[new T.o(j),new T.o(h),new T.o(a1)])}return c},
mJ:function(b4,b5,b6,b7,b8,b9,c0,c1,c2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
t=[]
s=new Float32Array(H.f(3))
r=new T.h(s)
q=new T.h(new Float32Array(H.f(3)))
new Float32Array(H.f(3))
p=H.D(new Array(b9),[[P.b,P.p]])
for(o=[P.p],n=0;n<b9;++n){p[n]=H.D(new Array(c0),o)
m=n/b9*2*b6*3.141592653589793
B.la(m,b7,b6,b8,b5,$.$get$iS())
B.la(m+0.02,b7,b6,b8,b5,$.$get$jE())
l=$.$get$jE().a
k=l[0]
j=$.$get$iS().a
s[0]=k-j[0]
s[1]=l[1]-j[1]
s[2]=l[2]-j[2]
k=q.a
k[0]=l[0]+j[0]
k[1]=l[1]+j[1]
k[2]=l[2]+j[2]
i=r.aB(q)
i.C(0)
q=i.aB(r)
q.C(0)
for(l=q.a,k=i.a,h=0;h<c0;++h){g=h/c0*2*3.141592653589793
f=c1*Math.cos(g)
e=c1*Math.sin(g)
j=$.$get$iS().a
d=j[0]
c=l[0]
b=k[0]
a=j[1]
a0=l[1]
a1=k[1]
j=j[2]
a2=l[2]
a3=k[2]
a4=new Float32Array(3)
a4[0]=d+f*c+e*b
a4[1]=a+f*a0+e*a1
a4[2]=j+f*a2+e*a3
C.a.i(t,new T.h(a4))
p[n][h]=t.length-1}}a5=new G.aR(!1,[],[],[],P.I())
a5.S("aTexUV")
for(n=0;n<b9;n=a6)for(a6=n+1,a7=a6%b9,h=0;h<c0;h=a8){a8=h+1
a9=a8%c0
s=p[n]
b0=s[h]
o=p[a7]
b1=o[h]
b2=o[a9]
b3=s[a9]
s=h/c0
o=new Float32Array(2)
o[0]=0
o[1]=s
l=new Float32Array(2)
l[0]=1
l[1]=s
s=a8/c0
k=new Float32Array(2)
k[0]=1
k[1]=s
j=new Float32Array(2)
j[0]=0
j[1]=s
a5.bn(1)
a5.aO([C.a.h(t,b3),C.a.h(t,b2),C.a.h(t,b1),C.a.h(t,b0)])
a5.af("aTexUV",[new T.o(o),new T.o(l),new T.o(k),new T.o(j)])}a5.df()
return a5},
la:function(a,b,c,d,e,f){var t,s,r,q,p
t=Math.cos(a)
s=Math.sin(a)
r=b/c*a
q=d*(2+Math.cos(r))
p=f.a
p[0]=q*0.5*t
p[1]=q*s*0.5
p[2]=e*d*Math.sin(r)*0.5
return f}},G={
mO:function(a){var t,s,r
t=a.split("\n")
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.i(t[s])}return C.a.a8(t,"\n")},
kL:function(a,b,c){var t,s,r,q
t=J.l(a)
s=t.c8(a,b)
t.bi(a,s,c)
t.c4(a,s)
r=t.be(a,s,35713)
if(r!=null&&!r){q=t.bd(a,s)
P.aB("E:Compilation failed:")
P.aB("E:"+G.mO(c))
P.aB("E:Failure:")
P.aB(C.e.V("E:",q))
throw H.e(q)}return s},
jn:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
d.v(b)
d.aK(a)
e.v(c)
e.aK(a)
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
t=Math.sqrt(e.gP())
if(t===0)return!1
e.a2(0,-1/t)
return!0},
jm:function(a){var t=new G.eX(P.I(),a,!1,!0)
t.dh(a)
return t},
kg:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.j7(a[s])
b[t+1]=J.j8(a[s])
b[t+2]=J.jM(a[s])}return b},
ml:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.j7(a[s])
b[t+1]=J.j8(a[s])}return b},
mm:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.j7(a[s])
b[t+1]=J.j8(a[s])
b[t+2]=J.jM(a[s])
b[t+3]=J.lL(a[s])}return b},
mk:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.bn(a[s],0)
b[t+1]=J.bn(a[s],1)
b[t+2]=J.bn(a[s],2)
b[t+3]=J.bn(a[s],3)}return b},
mV:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
for(t=a.e,s=t.gH(t),s=s.gB(s),r=b.x,q=[[P.b,P.p]],p=[P.P],o=[T.aK],n=[T.h],m=[T.o];s.q();){l=s.gt()
if(!r.G(0,l)){k="Dropping unnecessary attribute: "+H.i(l)
if($.l4>0)H.iT("I: "+k)
continue}j=t.h(0,l)
switch($.$get$V().h(0,l).a){case"vec2":b.ae(l,G.ml(H.dK(j,"$isb",m,"$asb"),null),2)
break
case"vec3":b.ae(l,G.kg(H.dK(j,"$isb",n,"$asb"),null),3)
break
case"vec4":b.ae(l,G.mm(H.dK(j,"$isb",o,"$asb"),null),4)
break
case"float":b.ae(l,new Float32Array(H.is(H.dK(j,"$isb",p,"$asb"))),1)
break
case"uvec4":b.ae(l,G.mk(H.dK(j,"$isb",q,"$asb"),null),4)
break
default:if(H.ae(!1))H.an("unknown type for "+H.i(l)+" ["+J.lJ(j[0]).k(0)+"] ["+new H.aI(H.iE(j),null).k(0)+"] "+H.i(j))}}},
cq:function(a,b,c){var t,s,r,q,p,o,n,m
t=b.d
s=b.e.x
r=P.I()
q=J.lx(t.a)
p=new G.eZ(t,q,4,r,s,null,0,-1,null,null,P.I(),"meshdata:"+a,!1,!0)
o=G.kg(c.d,null)
r.j(0,"aPosition",J.j5(t.a))
p.ch=o
p.bp("aPosition",o,3)
n=$.$get$V().h(0,"aPosition")
if(n==null)H.G("Unknown canonical aPosition")
H.d(s.G(0,"aPosition"))
m=s.h(0,"aPosition")
J.dM(t.a,q)
t.cg(0,m,0)
s=r.h(0,"aPosition")
r=n.bs()
J.dL(t.a,34962,s)
J.jU(t.a,m,r,5126,!1,0,0)
s=c.de()
p.y=J.j5(t.a)
H.d(p.ch!=null)
r=p.ch.length
if(r<768){p.saU(new Uint8Array(H.is(s)))
p.Q=5121}else if(r<196608){p.saU(new Uint16Array(H.is(s)))
p.Q=5123}else{p.saU(new Uint32Array(H.is(s)))
p.Q=5125}J.dM(t.a,q)
s=p.y
r=p.cx
q=J.x(r)
H.d(!!q.$iskH||!!q.$iskI||!!q.$iskJ)
J.dL(t.a,34963,s)
J.jJ(t.a,34963,r,35048)
G.mV(c,p)
return p},
ku:function(a,b,c,d){var t=new G.fz(b,c,d,null,null,P.I(),P.I(),P.aj(null,null,null,P.v),null,a,!1,!0)
t.dk(a,b,c,d)
return t},
f1:function f1(){},
bW:function bW(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dV:function dV(){},
dY:function dY(a,b){this.a=a
this.b=b},
cp:function cp(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
z:function z(a,b,c){this.a=a
this.b=b
this.c=c},
bA:function bA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aR:function aR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bV:function bV(a,b,c){this.a=a
this.b=b
this.c=c},
dw:function dw(a,b,c){this.a=a
this.b=b
this.c=c},
eX:function eX(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
eZ:function eZ(a,b,c,d,e,f,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
fl:function fl(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
e7:function e7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fz:function fz(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
k:function k(a,b,c){this.a=a
this.b=b
this.c=c},
bh:function bh(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fJ:function fJ(){},
h3:function h3(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bU:function bU(){},
hf:function hf(a,b,c,d,e,f,g,h){var _=this
_.f=a
_.r=b
_.x=c
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
hg:function hg(a,b,c,d,e,f,g,h){var _=this
_.f=a
_.r=b
_.x=c
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h}},R={fN:function fN(){},fO:function fO(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},A={
l1:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=b.dx
t.v(c)
s=b.d
t.cm(0,s)
r=b.ch
if(r!=null){b.cx
q=!0}else q=!1
if(q){J.aC(b)
q=C.a.gaF(e)
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
p.ed(new T.ak(o))
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
q.j(0,"uTransformationMatrix",s)
q.j(0,"uModelMatrix",t)
q.j(0,"uNormalMatrix",p)
C.a.i(e,r)
a.dd(b.cx,e,d)
e.pop()}for(s=b.cy,r=s.length,l=0;l<s.length;s.length===r||(0,H.E)(s),++l)A.l1(a,s[l],t,d,e)},
kt:function(a,b,c){var t=new A.fy(c,b,H.D([],[A.bO]),17664,0,0,0,0,a,!1,!0)
t.dj(a,b,c)
return t},
aX:function aX(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
bO:function bO(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.a=d
_.b=e
_.c=f},
fy:function fy(a,b,c,d,e,f,g,h,i,a0,a1){var _=this
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
t=C.K.es(a,0,new A.iF())
s=536870911&t+(C.b.cM(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
iF:function iF(){}},T={
L:function(a,b,c){var t=new Float32Array(3)
t[0]=a
t[1]=b
t[2]=c
return new T.h(t)},
kK:function(){return new T.h(new Float32Array(H.f(3)))},
ak:function ak(a){this.a=a},
J:function J(a){this.a=a},
o:function o(a){this.a=a},
h:function h(a){this.a=a},
aK:function aK(a){this.a=a}},V={
mx:function(a,b,c,d){var t,s,r,q,p,o,n
t=new Uint32Array(H.f(C.b.I(b,c)))
for(s=2*d,r=0;r<b;++r)for(q=r%s<d,p=0;C.b.at(p,c);++p){o=q?0:1
t[p*b+r]=o}s=$.$get$jo()
q=J.jK(a.a)
J.bp(a.a,3553,q)
J.lU(a.a,3553,0,35056,b,c,0,34041,34042,t)
s.bu(a,3553)
n=J.jN(a.a)
if(H.ae(n===0))H.an("texture error "+H.i(n))
J.bp(a.a,3553,null)
return new G.hg(b,c,35056,"frame::depth.stencil",q,3553,a,s)},
nv:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
t={}
s=document
r=new R.fO(0,0,null,null,null,null)
r.dm(C.f.cQ(s,"stats"),"blue","gray")
q=C.f.cn(s,"#webgl-canvas")
p=new G.dY(null,q)
s=(q&&C.w).cP(q,"webgl2",P.aW(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
p.a=s
if(s==null)H.G(P.cm('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
o="ChronosGL Config: "+J.aC(J.lM(s))
if($.l4>0)P.aB("I: "+o)
J.lt(s,0,0,0,1)
J.cc(s,2929)
J.cc(s,2884)
n=B.mz(25,10,0,q)
o=new T.J(new Float32Array(H.f(16)))
o.F()
m=new T.J(new Float32Array(H.f(16)))
m.F()
l=new G.fl(n,50,1,0.1,1000,o,m,new T.J(new Float32Array(H.f(16))),P.I(),"perspective",!1,!0)
l.bv()
k=q.clientWidth
j=q.clientHeight
q.width=k
q.height=j
l.dc(k,j)
m=$.$get$jo()
o=J.jK(s)
i=new G.hf(k,j,32856,"frame::color",o,3553,p,m)
J.bp(s,3553,o)
J.lW(p.a,3553,1,32856,k,j)
m.bu(p,3553)
h=J.jN(p.a)
if(H.ae(h===0))H.an("texture error "+H.i(h))
J.bp(p.a,3553,null)
g=V.mx(p,k,j,8)
f=new G.cp(p,null,i,g,null)
s=J.lv(p.a)
f.b=s
J.j3(p.a,36160,s)
J.jL(p.a,36160,36064,3553,o,0)
J.jL(p.a,36160,33306,3553,g.b,0)
h=J.lr(p.a,36160)
s=h===36053
if(H.ae(s))H.an("framebuffer error: "+H.i(h))
if(!s)H.G("Error Incomplete Framebuffer: "+H.i(h))
J.j3(p.a,36160,null)
e=A.kt("main",p,f)
e.z=k
e.Q=j
e.r&=4294966271
s=G.ku("solid",p,$.$get$lg(),$.$get$lf())
o=[]
H.d(!0)
C.a.i(e.f,new A.bO(s,[l],o,"solid",!1,!0))
d=G.jm("red")
d.X("uColor",$.$get$k4())
d.d.j(0,"cStencilFunc",$.$get$fP())
c=new G.bV(514,1,255)
b=G.jm("blue")
b.X("uColor",$.$get$k3())
b.d.j(0,"cStencilFunc",c)
m=G.cq("icosahedron-3",s,B.mn(3,1,!0))
a=new Float32Array(H.f(9))
a0=new T.J(new Float32Array(H.f(16)))
a0.F()
a1=new T.J(new Float32Array(H.f(16)))
a1.F()
a1=new A.aX(d,m,[],new T.ak(a),a0,a1,new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),"sphere",!1,!0)
a1.ac(0,0,0)
H.d(!0)
C.a.i(o,a1)
a1=G.cq("cube",s,B.mb(!0,1,0,1,0,1,1,1))
a0=new Float32Array(H.f(9))
a=new T.J(new Float32Array(H.f(16)))
a.F()
m=new T.J(new Float32Array(H.f(16)))
m.F()
m=new A.aX(b,a1,[],new T.ak(a0),a,m,new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),"cube",!1,!0)
m.ac(-5,0,-5)
H.d(!0)
C.a.i(o,m)
m=G.cq("cylinder-32",s,B.mc(1,3,2,32,!0))
a=new Float32Array(H.f(9))
a0=new T.J(new Float32Array(H.f(16)))
a0.F()
a1=new T.J(new Float32Array(H.f(16)))
a1.F()
a1=new A.aX(d,m,[],new T.ak(a),a0,a1,new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),"cylinder",!1,!0)
a1.ac(5,0,-5)
H.d(!0)
C.a.i(o,a1)
s=G.cq("torusknot",s,B.mJ(!0,1,2,3,1,128,16,0.4,!0))
a1=new Float32Array(H.f(9))
a0=new T.J(new Float32Array(H.f(16)))
a0.F()
a=new T.J(new Float32Array(H.f(16)))
a.F()
a=new A.aX(b,s,[],new T.ak(a1),a0,a,new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),new T.h(new Float32Array(H.f(3))),"torus",!1,!0)
a.ac(5,0,5)
H.d(!0)
C.a.i(o,a)
a2=A.kt("copy",p,null)
a2.z=k
a2.Q=j
a3=new G.bW(P.I(),"plain",!1,!0)
a=C.b.V(0,k)
o=C.b.V(0,j)
a0=new Float32Array(H.f(2))
a0[0]=a
a0[1]=o
a3.X("uCanvasSize",new T.o(a0))
a3.X("uTexture",i)
a0=G.ku("postproc",p,$.$get$l0(),$.$get$l_())
o=[]
H.d(!0)
C.a.i(a2.f,new A.bO(a0,[a3],o,"postproc",!1,!0))
s=new T.h(new Float32Array(H.f(3)))
s.p(-1,-1,0)
m=new T.h(new Float32Array(H.f(3)))
m.p(1,-1,0)
a=new T.h(new Float32Array(H.f(3)))
a.p(1,1,0)
a1=new T.h(new Float32Array(H.f(3)))
a1.p(-1,1,0)
a4=new Float32Array(H.f(2))
a4[0]=0
a4[1]=0
a5=new Float32Array(H.f(2))
a5[0]=1
a5[1]=0
a6=new Float32Array(H.f(2))
a6[0]=1
a6[1]=1
a7=new Float32Array(H.f(2))
a7[0]=0
a7[1]=1
a8=new T.h(new Float32Array(H.f(3)))
a8.p(0,0,1)
a9=new G.aR(!1,[],[],[],P.I())
a9.S("aTexUV")
a9.da([s,m,a,a1])
a9.af("aTexUV",[new T.o(a4),new T.o(a5),new T.o(a6),new T.o(a7)])
a9.S("aNormal")
a9.au("aNormal",[a8,a8,a8,a8])
b0=G.cq("quad",a0,a9)
a0=$.$get$ke()
a7=new Float32Array(H.f(9))
a6=new T.J(new Float32Array(H.f(16)))
a6.F()
a5=new T.J(new Float32Array(H.f(16)))
a5.F()
a4=new Float32Array(H.f(3))
a1=new Float32Array(H.f(3))
a=new Float32Array(H.f(3))
m=new Float32Array(H.f(3))
H.d(!0)
C.a.i(o,new A.aX(a0,b0,[],new T.ak(a7),a6,a5,new T.h(a4),new T.h(a1),new T.h(a),new T.h(m),"unit-mesh",!1,!0))
t.a=0
new V.iQ(t,r,n,e,c,b,a2).$1(0)},
iQ:function iQ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}}
var v=[C,H,J,P,W,B,G,R,A,T,V]
setFunctionNamesIfNecessary(v)
var $={}
H.jg.prototype={}
J.a.prototype={
A:function(a,b){return a===b},
gw:function(a){return H.aZ(a)},
k:function(a){return H.ft(a)},
gD:function(a){return new H.aI(H.iE(a),null)}}
J.eJ.prototype={
k:function(a){return String(a)},
gw:function(a){return a?519018:218159},
gD:function(a){return C.Z},
$isaz:1}
J.eK.prototype={
A:function(a,b){return null==b},
k:function(a){return"null"},
gw:function(a){return 0},
gD:function(a){return C.T}}
J.bE.prototype={
gw:function(a){return 0},
gD:function(a){return C.S},
k:function(a){return String(a)},
$iskm:1}
J.fn.prototype={}
J.b1.prototype={}
J.aU.prototype={
k:function(a){var t=a[$.$get$k6()]
return t==null?this.d6(a):J.aC(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isje:1}
J.aS.prototype={
b3:function(a,b){if(!!a.immutable$list)throw H.e(new P.w(b))},
b2:function(a,b){if(!!a.fixed$length)throw H.e(new P.w(b))},
i:function(a,b){this.b2(a,"add")
a.push(b)},
L:function(a,b){var t,s,r,q,p
t=a.length
this.b2(a,"addAll")
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.E)(b),++r,t=p){q=b[r]
p=t+1
H.d(t===a.length||H.G(new P.a3(a)))
a.push(q)}},
cl:function(a,b){return new H.bF(a,b,[H.aM(a,0),null])},
a8:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.i(a[s])
return t.join(b)},
u:function(a,b){return this.h(a,b)},
ger:function(a){if(a.length>0)return a[0]
throw H.e(H.eI())},
gaF:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.e(H.eI())},
bh:function(a,b,c,d,e){var t,s
this.b3(a,"setRange")
P.ks(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.G(P.b_(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.e(H.mv())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=d[e+s]
else for(s=0;s<t;++s)a[b+s]=d[e+s]},
bU:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.e(new P.a3(a))}return!1},
d1:function(a,b){this.b3(a,"sort")
H.ds(a,0,a.length-1,P.nf())},
aJ:function(a){return this.d1(a,null)},
E:function(a,b){var t
for(t=0;t<a.length;++t)if(J.H(a[t],b))return!0
return!1},
k:function(a){return P.eH(a,"[","]")},
gB:function(a){return new J.dS(a,a.length,0,null,[H.aM(a,0)])},
gw:function(a){return H.aZ(a)},
gl:function(a){return a.length},
sl:function(a,b){this.b2(a,"set length")
if(b<0)throw H.e(P.b_(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.R(a,b))
if(b>=a.length||b<0)throw H.e(H.R(a,b))
return a[b]},
j:function(a,b,c){this.b3(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.R(a,b))
if(b>=a.length||b<0)throw H.e(H.R(a,b))
a[b]=c},
$isq:1,
$asq:function(){},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
J.jf.prototype={}
J.dS.prototype={
gt:function(){return this.d},
q:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.e(H.E(t))
r=this.c
if(r>=s){this.sbw(null)
return!1}this.sbw(t[r]);++this.c
return!0},
sbw:function(a){this.d=a}}
J.bd.prototype={
U:function(a,b){var t
if(typeof b!=="number")throw H.e(H.W(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaD(b)
if(this.gaD(a)===t)return 0
if(this.gaD(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaD:function(a){return a===0?1/a<0:a<0},
e8:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.e(new P.w(""+a+".ceil()"))},
a9:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(new P.w(""+a+".round()"))},
e9:function(a,b,c){if(this.U(b,c)>0)throw H.e(H.W(b))
if(this.U(a,b)<0)return b
if(this.U(a,c)>0)return c
return a},
eT:function(a,b){var t
if(b>20)throw H.e(P.b_(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gaD(a))return"-"+t
return t},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gw:function(a){return a&0x1FFFFFFF},
V:function(a,b){if(typeof b!=="number")throw H.e(H.W(b))
return a+b},
ad:function(a,b){if(typeof b!=="number")throw H.e(H.W(b))
return a-b},
cN:function(a,b){if(typeof b!=="number")throw H.e(H.W(b))
return a/b},
I:function(a,b){if(typeof b!=="number")throw H.e(H.W(b))
return a*b},
aM:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bQ(a,b)},
K:function(a,b){return(a|0)===a?a/b|0:this.bQ(a,b)},
bQ:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.e(new P.w("Result of truncating division is "+H.i(t)+": "+H.i(a)+" ~/ "+b))},
aY:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
cM:function(a,b){if(typeof b!=="number")throw H.e(H.W(b))
return(a&b)>>>0},
d8:function(a,b){if(typeof b!=="number")throw H.e(H.W(b))
return(a^b)>>>0},
at:function(a,b){if(typeof b!=="number")throw H.e(H.W(b))
return a<b},
as:function(a,b){if(typeof b!=="number")throw H.e(H.W(b))
return a>b},
cO:function(a,b){if(typeof b!=="number")throw H.e(H.W(b))
return a>=b},
gD:function(a){return C.a1},
$isX:1}
J.d9.prototype={
gD:function(a){return C.a0},
$isP:1,
$isp:1,
$isX:1}
J.d8.prototype={
gD:function(a){return C.a_},
$isP:1,
$isX:1}
J.aT.prototype={
aP:function(a,b){if(b>=a.length)throw H.e(H.R(a,b))
return a.charCodeAt(b)},
V:function(a,b){if(typeof b!=="string")throw H.e(P.jW(b,null,null))
return a+b},
d2:function(a,b,c){var t
if(c>a.length)throw H.e(P.b_(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bj:function(a,b){return this.d2(a,b,0)},
bl:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.fu(b,null,null))
if(b>c)throw H.e(P.fu(b,null,null))
if(c>a.length)throw H.e(P.fu(c,null,null))
return a.substring(b,c)},
d3:function(a,b){return this.bl(a,b,null)},
eS:function(a){return a.toLowerCase()},
eb:function(a,b,c){if(c>a.length)throw H.e(P.b_(c,0,a.length,null,null))
return H.nE(a,b,c)},
U:function(a,b){var t
if(typeof b!=="string")throw H.e(H.W(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
k:function(a){return a},
gw:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gD:function(a){return C.U},
gl:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.e(H.R(a,b))
return a[b]},
$isq:1,
$asq:function(){},
$isv:1}
H.c.prototype={$asc:null}
H.be.prototype={
gB:function(a){return new H.db(this,this.gl(this),0,null,[H.ao(this,"be",0)])},
aH:function(a,b){return this.d5(0,b)},
eR:function(a,b){var t,s
t=H.D([],[H.ao(this,"be",0)])
C.a.sl(t,this.gl(this))
for(s=0;s<this.gl(this);++s)t[s]=this.u(0,s)
return t},
eQ:function(a){return this.eR(a,!0)}}
H.db.prototype={
gt:function(){return this.d},
q:function(){var t,s,r,q
t=this.a
s=J.af(t)
r=s.gl(t)
if(this.b!==r)throw H.e(new P.a3(t))
q=this.c
if(q>=r){this.sah(null)
return!1}this.sah(s.u(t,q));++this.c
return!0},
sah:function(a){this.d=a}}
H.dc.prototype={
gB:function(a){return new H.eT(null,J.bq(this.a),this.b,this.$ti)},
gl:function(a){return J.dN(this.a)},
$asY:function(a,b){return[b]}}
H.ea.prototype={$isc:1,
$asc:function(a,b){return[b]}}
H.eT.prototype={
q:function(){var t=this.b
if(t.q()){this.sah(this.c.$1(t.gt()))
return!0}this.sah(null)
return!1},
gt:function(){return this.a},
sah:function(a){this.a=a},
$asd7:function(a,b){return[b]}}
H.bF.prototype={
gl:function(a){return J.dN(this.a)},
u:function(a,b){return this.b.$1(J.lD(this.a,b))},
$asc:function(a,b){return[b]},
$asbe:function(a,b){return[b]},
$asY:function(a,b){return[b]}}
H.dz.prototype={
gB:function(a){return new H.hp(J.bq(this.a),this.b,this.$ti)}}
H.hp.prototype={
q:function(){var t,s
for(t=this.a,s=this.b;t.q();)if(s.$1(t.gt()))return!0
return!1},
gt:function(){return this.a.gt()}}
H.cn.prototype={}
H.j_.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.j0.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.i1.prototype={
seC:function(a){this.z=a},
seF:function(a){this.ch=a}}
H.b5.prototype={
bT:function(a,b){if(!this.f.A(0,a))return
if(this.Q.i(0,b)&&!this.y)this.y=!0
this.b0()},
eK:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.ap(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.bJ();++r.d}this.y=!1}this.b0()},
e_:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.x(a),s=0;r=this.ch,s<r.length;s+=2)if(t.A(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).i(r,a)
t=this.ch;(t&&C.a).i(t,b)},
eJ:function(a){var t,s,r
if(this.ch==null)return
for(t=J.x(a),s=0;r=this.ch,s<r.length;s+=2)if(t.A(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.G(new P.w("removeRange"))
P.ks(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
cZ:function(a,b){if(!this.r.A(0,a))return
this.db=b},
ew:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.J(0,c)
return}H.d(b===1)
t=this.cx
if(t==null){t=P.jk(null,null)
this.cx=t}t.Y(0,new H.hX(a,c))},
ev:function(a,b){var t
if(!this.r.A(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.aE()
return}H.d(b===1)
t=this.cx
if(t==null){t=P.jk(null,null)
this.cx=t}t.Y(0,this.geD())},
ex:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.aB(a)
if(b!=null)P.aB(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.aC(a)
s[1]=b==null?null:b.k(0)
for(r=new P.c0(t,t.r,null,null,[null]),r.c=t.e;r.q();)r.d.J(0,s)},
al:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.S(o)
p=H.aL(o)
this.ex(q,p)
if(this.db){this.aE()
if(this===u.globalState.e)throw o}}finally{this.cy=H.nb(r)
u.globalState.d=H.jA(t,"$isb5")
if(t!=null)$=t.geB()
if(this.cx!=null)for(;n=this.cx,!n.gao(n);)this.cx.co().$0()}return s},
ck:function(a){return this.b.h(0,a)},
bA:function(a,b){var t=this.b
if(t.G(0,a))throw H.e(P.cm("Registry: ports must be registered only once."))
t.j(0,a,b)},
b0:function(){var t=this.b
if(t.gl(t)-this.c.a>0||this.y||!this.x)u.globalState.z.j(0,this.a,this)
else this.aE()},
aE:function(){var t,s,r
t=this.cx
if(t!=null)t.a_(0)
for(t=this.b,s=t.gcJ(t),s=s.gB(s);s.q();)s.gt().dD()
t.a_(0)
this.c.a_(0)
u.globalState.z.ap(0,this.a)
this.dx.a_(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].J(0,t[r+1])
this.ch=null}},
geB:function(){return this.d},
gec:function(){return this.e}}
H.hX.prototype={
$0:function(){this.a.J(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.hF.prototype={
ej:function(){var t=this.a
if(t.b===t.c)return
return t.co()},
cq:function(){var t,s,r
t=this.ej()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.G(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gao(s)}else s=!1
else s=!1
else s=!1
if(s)H.G(P.cm("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gao(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aW(["command","close"])
r=new H.am(!0,new P.dD(0,null,null,null,null,null,0,[null,P.p])).M(r)
s.toString
self.postMessage(r)}return!1}t.eH()
return!0},
bO:function(){if(self.window!=null)new H.hG(this).$0()
else for(;this.cq(););},
aq:function(){var t,s,r,q,p
if(!u.globalState.x)this.bO()
else try{this.bO()}catch(r){t=H.S(r)
s=H.aL(r)
q=u.globalState.Q
p=P.aW(["command","error","msg",H.i(t)+"\n"+H.i(s)])
p=new H.am(!0,P.c1(null,P.p)).M(p)
q.toString
self.postMessage(p)}}}
H.hG.prototype={
$0:function(){if(!this.a.cq())return
P.mN(C.n,this)},
$S:function(){return{func:1,v:true}}}
H.b6.prototype={
eH:function(){var t=this.a
if(t.y){C.a.i(t.z,this)
return}t.al(this.b)}}
H.i0.prototype={}
H.eF.prototype={
$0:function(){H.mr(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.eG.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(!this.d)this.a.$1(this.c)
else{s=this.a
if(H.bm(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.bm(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.b0()},
$S:function(){return{func:1,v:true}}}
H.hy.prototype={}
H.bj.prototype={
J:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.n_(b)
if(t.gec()===s){s=J.af(r)
switch(s.h(r,0)){case"pause":t.bT(s.h(r,1),s.h(r,2))
break
case"resume":t.eK(s.h(r,1))
break
case"add-ondone":t.e_(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.eJ(s.h(r,1))
break
case"set-errors-fatal":t.cZ(s.h(r,1),s.h(r,2))
break
case"ping":t.ew(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.ev(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.i(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.ap(0,s)
break}return}u.globalState.f.a.Y(0,new H.b6(t,new H.i2(this,r),"receive"))},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bj){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gw:function(a){return this.b.a}}
H.i2.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dA(0,this.b)},
$S:function(){return{func:1}}}
H.c3.prototype={
J:function(a,b){var t,s,r
t=P.aW(["command","message","port",this,"msg",b])
s=new H.am(!0,P.c1(null,P.p)).M(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.c3){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gw:function(a){return C.b.d8((this.b<<16^this.a<<8)>>>0,this.c)}}
H.bg.prototype={
dD:function(){this.c=!0
this.b=null},
dA:function(a,b){if(this.c)return
this.b.$1(b)},
$ismH:1}
H.h5.prototype={
dn:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.Y(0,new H.b6(s,new H.h6(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.c7(new H.h7(this,b),0),a)}else{H.d(a>0)
throw H.e(new P.w("Timer greater than 0."))}}}
H.h6.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.h7.prototype={
$0:function(){this.a.c=null
H.iP()
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.ar.prototype={
gw:function(a){var t=this.a
t=C.b.aY(t,0)^C.b.K(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
A:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.ar){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.am.prototype={
M:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.j(0,a,t.gl(t))
t=J.x(a)
if(!!t.$isbH)return["buffer",a]
if(!!t.$isbf)return["typed",a]
if(!!t.$isq)return this.cV(a)
if(!!t.$ismo){r=this.gcS()
q=t.gH(a)
q=H.jl(q,r,H.ao(q,"Y",0),null)
q=P.ko(q,!0,H.ao(q,"Y",0))
t=t.gcJ(a)
t=H.jl(t,r,H.ao(t,"Y",0),null)
return["map",q,P.ko(t,!0,H.ao(t,"Y",0))]}if(!!t.$iskm)return this.cW(a)
if(!!t.$isa)this.cH(a)
if(!!t.$ismH)this.ar(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isbj)return this.cX(a)
if(!!t.$isc3)return this.cY(a)
if(!!t.$isb9){p=a.$static_name
if(p==null)this.ar(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isar)return["capability",a.a]
if(!(a instanceof P.t))this.cH(a)
return["dart",u.classIdExtractor(a),this.cU(u.classFieldsExtractor(a))]},
ar:function(a,b){throw H.e(new P.w((b==null?"Can't transmit:":b)+" "+H.i(a)))},
cH:function(a){return this.ar(a,null)},
cV:function(a){var t
H.d(typeof a!=="string")
t=this.cT(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.ar(a,"Can't serialize indexable: ")},
cT:function(a){var t,s
t=[]
C.a.sl(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.M(a[s])
return t},
cU:function(a){var t
for(t=0;t<a.length;++t)C.a.j(a,t,this.M(a[t]))
return a},
cW:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.ar(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sl(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.M(a[t[r]])
return["js-object",t,s]},
cY:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cX:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.b4.prototype={
a0:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.e(P.jV("Bad serialized message: "+H.i(a)))
switch(C.a.ger(a)){case"ref":H.d(J.H(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.d(J.H(a[0],"buffer"))
t=a[1]
C.a.i(this.b,t)
return t
case"typed":H.d(J.H(a[0],"typed"))
t=a[1]
C.a.i(this.b,t)
return t
case"fixed":H.d(J.H(a[0],"fixed"))
t=a[1]
C.a.i(this.b,t)
s=H.D(this.ak(t),[null])
s.fixed$length=Array
return s
case"extendable":H.d(J.H(a[0],"extendable"))
t=a[1]
C.a.i(this.b,t)
return H.D(this.ak(t),[null])
case"mutable":H.d(J.H(a[0],"mutable"))
t=a[1]
C.a.i(this.b,t)
return this.ak(t)
case"const":H.d(J.H(a[0],"const"))
t=a[1]
C.a.i(this.b,t)
s=H.D(this.ak(t),[null])
s.fixed$length=Array
return s
case"map":return this.em(a)
case"sendport":return this.en(a)
case"raw sendport":H.d(J.H(a[0],"raw sendport"))
t=a[1]
C.a.i(this.b,t)
return t
case"js-object":return this.el(a)
case"function":H.d(J.H(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.i(this.b,t)
return t
case"capability":H.d(J.H(a[0],"capability"))
return new H.ar(a[1])
case"dart":H.d(J.H(a[0],"dart"))
r=a[1]
q=a[2]
p=u.instanceFromClassId(r)
C.a.i(this.b,p)
this.ak(q)
return u.initializeEmptyInstance(r,p,q)
default:throw H.e("couldn't deserialize: "+H.i(a))}},
ak:function(a){var t
for(t=0;t<a.length;++t)C.a.j(a,t,this.a0(a[t]))
return a},
em:function(a){var t,s,r,q,p
H.d(J.H(a[0],"map"))
t=a[1]
s=a[2]
r=P.I()
C.a.i(this.b,r)
t=J.lQ(t,this.gek()).eQ(0)
for(q=J.af(s),p=0;p<t.length;++p)r.j(0,t[p],this.a0(q.h(s,p)))
return r},
en:function(a){var t,s,r,q,p,o,n
H.d(J.H(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.ck(r)
if(o==null)return
n=new H.bj(o,s)}else n=new H.c3(t,r,s)
C.a.i(this.b,n)
return n},
el:function(a){var t,s,r,q,p,o
H.d(J.H(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.i(this.b,r)
for(q=J.af(t),p=J.af(s),o=0;o<q.gl(t);++o)r[q.h(t,o)]=this.a0(p.h(s,o))
return r}}
H.fx.prototype={}
H.hc.prototype={
R:function(a){var t,s,r
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
k:function(a){var t=this.b
if(t==null)return"NullError: "+H.i(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.eM.prototype={
k:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.i(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.i(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.i(this.a)+")"}}
H.hh.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.j1.prototype={
$1:function(a){if(!!J.x(a).$isbc)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.dF.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.iK.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.iL.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.iM.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.iN.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.iO.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.b9.prototype={
k:function(a){return"Closure '"+H.dn(this).trim()+"'"},
$isje:1,
geW:function(){return this},
$D:null}
H.h_.prototype={}
H.fM.prototype={
k:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.br.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.br))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gw:function(a){var t,s
t=this.c
if(t==null)s=H.aZ(this.a)
else s=typeof t!=="object"?J.aq(t):H.aZ(t)
return(s^H.aZ(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.i(this.d)+"' of "+H.ft(t)}}
H.he.prototype={
k:function(a){return this.a}}
H.dX.prototype={
k:function(a){return this.a}}
H.fD.prototype={
k:function(a){return"RuntimeError: "+H.i(this.a)}}
H.hs.prototype={
k:function(a){return C.e.V("Assertion failed: ",P.jd(this.a))}}
H.aI.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gw:function(a){return J.aq(this.a)},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.aI){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.ai.prototype={
gl:function(a){return this.a},
gao:function(a){return this.a===0},
gH:function(a){return new H.eP(this,[H.aM(this,0)])},
gcJ:function(a){return H.jl(this.gH(this),new H.eL(this),H.aM(this,0),H.aM(this,1))},
G:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bG(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bG(s,b)}else return this.ey(b)},
ey:function(a){var t=this.d
if(t==null)return!1
return this.an(this.az(t,this.am(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.ai(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.ai(r,b)
return s==null?null:s.b}else return this.ez(b)},
ez:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.az(t,this.am(a))
r=this.an(s,a)
if(r<0)return
return s[r].b},
j:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aV()
this.b=t}this.by(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aV()
this.c=s}this.by(s,b,c)}else{r=this.d
if(r==null){r=this.aV()
this.d=r}q=this.am(b)
p=this.az(r,q)
if(p==null)this.aX(r,q,[this.aW(b,c)])
else{o=this.an(p,b)
if(o>=0)p[o].b=c
else p.push(this.aW(b,c))}}},
ap:function(a,b){if(typeof b==="string")return this.bM(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bM(this.c,b)
else return this.eA(b)},
eA:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.az(t,this.am(a))
r=this.an(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bR(q)
return q.b},
a_:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
aC:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.e(new P.a3(this))
t=t.c}},
by:function(a,b,c){var t=this.ai(a,b)
if(t==null)this.aX(a,b,this.aW(b,c))
else t.b=c},
bM:function(a,b){var t
if(a==null)return
t=this.ai(a,b)
if(t==null)return
this.bR(t)
this.bH(a,b)
return t.b},
aW:function(a,b){var t,s
t=new H.eO(a,b,null,null,[null,null])
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
am:function(a){return J.aq(a)&0x3ffffff},
an:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.H(a[s].a,b))return s
return-1},
k:function(a){return P.my(this)},
ai:function(a,b){return a[b]},
az:function(a,b){return a[b]},
aX:function(a,b,c){H.d(c!=null)
a[b]=c},
bH:function(a,b){delete a[b]},
bG:function(a,b){return this.ai(a,b)!=null},
aV:function(){var t=Object.create(null)
this.aX(t,"<non-identifier-key>",t)
this.bH(t,"<non-identifier-key>")
return t},
$ismo:1}
H.eL.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.eO.prototype={}
H.eP.prototype={
gl:function(a){return this.a.a},
gB:function(a){var t,s
t=this.a
s=new H.eQ(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.eQ.prototype={
gt:function(){return this.d},
q:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a3(t))
else{t=this.c
if(t==null){this.sbx(null)
return!1}else{this.sbx(t.a)
this.c=this.c.c
return!0}}},
sbx:function(a){this.d=a}}
H.iG.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.iH.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.v]}}}
H.iI.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.v]}}}
H.bH.prototype={
gD:function(a){return C.L},
$isbH:1}
H.bf.prototype={$isbf:1}
H.f2.prototype={
gD:function(a){return C.M}}
H.de.prototype={
gl:function(a){return a.length},
$isq:1,
$asq:function(){},
$isr:1,
$asr:function(){}}
H.df.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.R(a,b))
return a[b]},
j:function(a,b,c){if(b>>>0!==b||b>=a.length)H.G(H.R(a,b))
a[b]=c}}
H.dg.prototype={
j:function(a,b,c){if(b>>>0!==b||b>=a.length)H.G(H.R(a,b))
a[b]=c},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]}}
H.dd.prototype={
gD:function(a){return C.N},
$isc:1,
$asc:function(){return[P.P]},
$isb:1,
$asb:function(){return[P.P]},
$isex:1}
H.f3.prototype={
gD:function(a){return C.O},
$isc:1,
$asc:function(){return[P.P]},
$isb:1,
$asb:function(){return[P.P]}}
H.f4.prototype={
gD:function(a){return C.P},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.R(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]}}
H.f5.prototype={
gD:function(a){return C.Q},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.R(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]},
$iskj:1}
H.f6.prototype={
gD:function(a){return C.R},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.R(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]}}
H.f7.prototype={
gD:function(a){return C.V},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.R(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]},
$iskH:1}
H.f8.prototype={
gD:function(a){return C.W},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.R(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]},
$iskI:1}
H.dh.prototype={
gD:function(a){return C.X},
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.R(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]}}
H.f9.prototype={
gD:function(a){return C.Y},
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.R(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]},
$iskJ:1}
H.bI.prototype={
$asq:function(){},
$isc:1,
$asc:function(){return[P.p]},
$asr:function(){},
$isb:1,
$asb:function(){return[P.p]}}
H.bJ.prototype={
$asq:function(){},
$isc:1,
$asc:function(){return[P.P]},
$asr:function(){},
$isb:1,
$asb:function(){return[P.P]}}
H.bK.prototype={
$asq:function(){},
$asc:function(){return[P.P]},
$asr:function(){},
$asb:function(){return[P.P]}}
H.bL.prototype={
$asq:function(){},
$asc:function(){return[P.p]},
$asr:function(){},
$asb:function(){return[P.p]}}
P.hu.prototype={
$1:function(a){var t,s
H.iP()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.ht.prototype={
$1:function(a){var t,s
t=this.a
H.d(t.a==null);++u.globalState.f.b
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.hv.prototype={
$0:function(){H.iP()
this.a.$0()},
$S:function(){return{func:1}}}
P.hw.prototype={
$0:function(){H.iP()
this.a.$0()},
$S:function(){return{func:1}}}
P.hA.prototype={}
P.ij.prototype={
ea:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.aH("Future already completed"))
t.aR(b)}}
P.dC.prototype={
eG:function(a){if(this.c!==6)return!0
H.d(!0)
return this.b.b.b8(this.d,a.a)},
eu:function(a){var t,s
t=(this.c&2)!==0
if(t){H.d(t)
t=this.e!=null}else t=!1
H.d(t)
s=this.e
t=this.b.b
if(H.bm(s,{func:1,args:[P.t,P.bQ]}))return t.eL(s,a.a,a.b)
else return t.b8(s,a.a)}}
P.ay.prototype={
cv:function(a,b){var t,s,r
t=$.F
if(t!==C.d){t.toString
if(b!=null)b=P.n3(b,t)}s=new P.ay(0,t,null,[null])
r=b==null?1:3
this.bz(new P.dC(null,s,r,a,b,[H.aM(this,0),null]))
return s},
cu:function(a){return this.cv(a,null)},
bC:function(a){H.d(this.a<4)
H.d(a.a>=4)
this.a=a.a
this.c=a.c},
bz:function(a){var t
H.d(a.a==null)
t=this.a
if(t<=1){a.a=H.jA(this.c,"$isdC")
this.c=a}else{if(t===2){H.d(!0)
t=this.c
if(t.a<4){t.bz(a)
return}this.bC(t)}H.d(this.a>=4)
t=this.b
t.toString
P.iv(null,null,t,new P.hL(this,a))}},
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
t.a=this.aj(a)
s=this.b
s.toString
P.iv(null,null,s,new P.hP(t,this))}},
bN:function(){H.d(this.a<4)
var t=this.c
this.c=null
return this.aj(t)},
aj:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aR:function(a){var t,s
H.d(this.a<4)
t=this.$ti
if(H.iw(a,"$iseA",t,"$aseA"))if(H.iw(a,"$isay",t,null))P.kN(a,this)
else P.mU(a,this)
else{s=this.bN()
H.d(this.a<4)
this.a=4
this.c=a
P.bY(this,s)}},
aw:function(a,b){var t
H.d(this.a<4)
t=this.bN()
H.d(this.a<4)
this.a=8
this.c=new P.b8(a,b)
P.bY(this,t)},
dF:function(a){return this.aw(a,null)},
$iseA:1,
gaZ:function(){return this.a},
gdU:function(){return this.c}}
P.hL.prototype={
$0:function(){P.bY(this.a,this.b)},
$S:function(){return{func:1}}}
P.hP.prototype={
$0:function(){P.bY(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.hM.prototype={
$1:function(a){var t=this.a
H.d(t.a===1)
H.d(t.a===1)
t.a=0
t.aR(a)},
$S:function(){return{func:1,args:[,]}}}
P.hN.prototype={
$2:function(a,b){var t=this.a
H.d(t.a===1)
t.aw(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.hO.prototype={
$0:function(){this.a.aw(this.b,this.c)},
$S:function(){return{func:1}}}
P.hS.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.d
p=q.c
H.d((p&1)===0)
o=(p&2)===0
H.d(o)
t=null
try{H.d(o)
H.d(p===8)
t=q.b.b.cp(q.d)}catch(n){s=H.S(n)
r=H.aL(n)
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
return}if(!!J.x(t).$iseA){if(t instanceof P.ay&&t.gaZ()>=4){if(t.gaZ()===8){q=t
H.d(q.gaZ()===8)
p=this.b
p.b=q.gdU()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.cu(new P.hT(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.hT.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.hR.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.d((r.c&1)!==0)
this.a.b=r.b.b.b8(r.d,this.c)}catch(q){t=H.S(q)
s=H.aL(q)
r=this.a
r.b=new P.b8(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.hQ.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.d(q.a===8)
t=q.c
q=this.c
if(q.eG(t)){H.d((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.eu(t)
p.a=!1}}catch(o){s=H.S(o)
r=H.aL(o)
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
P.dA.prototype={}
P.fR.prototype={
gl:function(a){var t,s
t={}
s=new P.ay(0,$.F,null,[P.p])
t.a=0
this.eE(new P.fT(t),!0,new P.fU(t,s),s.gdE())
return s}}
P.fT.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.fU.prototype={
$0:function(){this.b.aR(this.a.a)},
$S:function(){return{func:1}}}
P.fS.prototype={}
P.b8.prototype={
k:function(a){return H.i(this.a)},
$isbc:1}
P.ir.prototype={}
P.iu.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.dm()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.e(t)
r=H.e(t)
r.stack=s.k(0)
throw r},
$S:function(){return{func:1}}}
P.i4.prototype={
eM:function(a){var t,s,r
try{if(C.d===$.F){a.$0()
return}P.kS(null,null,this,a)}catch(r){t=H.S(r)
s=H.aL(r)
P.it(null,null,this,t,s)}},
eN:function(a,b){var t,s,r
try{if(C.d===$.F){a.$1(b)
return}P.kT(null,null,this,a,b)}catch(r){t=H.S(r)
s=H.aL(r)
P.it(null,null,this,t,s)}},
e5:function(a){return new P.i6(this,a)},
b1:function(a){return new P.i5(this,a)},
e6:function(a){return new P.i7(this,a)},
h:function(a,b){return},
cp:function(a){if($.F===C.d)return a.$0()
return P.kS(null,null,this,a)},
b8:function(a,b){if($.F===C.d)return a.$1(b)
return P.kT(null,null,this,a,b)},
eL:function(a,b,c){if($.F===C.d)return a.$2(b,c)
return P.n4(null,null,this,a,b,c)}}
P.i6.prototype={
$0:function(){return this.a.cp(this.b)},
$S:function(){return{func:1}}}
P.i5.prototype={
$0:function(){return this.a.eM(this.b)},
$S:function(){return{func:1}}}
P.i7.prototype={
$1:function(a){return this.a.eN(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.dD.prototype={
am:function(a){return H.nx(a)&0x3ffffff},
an:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.hY.prototype={
gB:function(a){var t=new P.c0(this,this.r,null,null,[null])
t.c=this.e
return t},
gl:function(a){return this.a},
E:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dG(b)},
dG:function(a){var t=this.d
if(t==null)return!1
return this.ay(t[this.ax(a)],a)>=0},
ck:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.E(0,a)?a:null
else return this.dO(a)},
dO:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.ax(a)]
r=this.ay(s,a)
if(r<0)return
return J.bn(s,r).gdI()},
i:function(a,b){var t,s,r
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
r=s}return this.bD(r,b)}else return this.Y(0,b)},
Y:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.mY()
this.d=t}s=this.ax(b)
r=t[s]
if(r==null){q=[this.aQ(b)]
H.d(q!=null)
t[s]=q}else{if(this.ay(r,b)>=0)return!1
r.push(this.aQ(b))}return!0},
ap:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bE(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bE(this.c,b)
else return this.dP(0,b)},
dP:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.ax(b)]
r=this.ay(s,b)
if(r<0)return!1
this.bF(s.splice(r,1)[0])
return!0},
a_:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
bD:function(a,b){var t
if(a[b]!=null)return!1
t=this.aQ(b)
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
aQ:function(a){var t,s
t=new P.hZ(a,null,null)
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
ax:function(a){return J.aq(a)&0x3ffffff},
ay:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.H(a[s].a,b))return s
return-1},
$isc:1,
$asc:null}
P.hZ.prototype={
gdI:function(){return this.a}}
P.c0.prototype={
gt:function(){return this.d},
q:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a3(t))
else{t=this.c
if(t==null){this.sag(null)
return!1}else{this.sag(t.a)
this.c=this.c.b
return!0}}},
sag:function(a){this.d=a}}
P.hW.prototype={}
P.da.prototype={}
P.y.prototype={
gB:function(a){return new H.db(a,this.gl(a),0,null,[H.ao(a,"y",0)])},
u:function(a,b){return this.h(a,b)},
cl:function(a,b){return new H.bF(a,b,[H.ao(a,"y",0),null])},
es:function(a,b,c){var t,s,r
t=this.gl(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gl(a))throw H.e(new P.a3(a))}return s},
k:function(a){return P.eH(a,"[","]")},
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
s=t.a+=H.i(a)
t.a=s+": "
t.a+=H.i(b)},
$S:function(){return{func:1,args:[,,]}}}
P.eR.prototype={
gB:function(a){return new P.i_(this,this.c,this.d,this.b,null,this.$ti)},
gao:function(a){return this.b===this.c},
gl:function(a){return(this.c-this.b&this.a.length-1)>>>0},
u:function(a,b){var t=(this.c-this.b&this.a.length-1)>>>0
if(C.b.as(0,b)||b>=t)H.G(P.C(b,this,"index",null,t))
return this.a[(C.b.V(this.b,b)&this.a.length-1)>>>0]},
a_:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
k:function(a){return P.eH(this,"{","}")},
co:function(){var t,s,r
t=this.b
if(t===this.c)throw H.e(H.eI());++this.d
s=this.a
r=s[t]
s[t]=null
this.b=(t+1&s.length-1)>>>0
return r},
Y:function(a,b){var t,s
t=this.a
s=this.c
t[s]=b
t=(s+1&t.length-1)>>>0
this.c=t
if(this.b===t)this.bJ();++this.d},
bJ:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.D(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.bh(s,0,q,t,r)
C.a.bh(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbP(s)},
dg:function(a,b){var t
H.d(!0)
t=new Array(8)
t.fixed$length=Array
this.sbP(H.D(t,[b]))},
sbP:function(a){this.a=a},
$asc:null}
P.i_.prototype={
gt:function(){return this.e},
q:function(){var t,s
t=this.a
if(this.c!==t.d)H.G(new P.a3(t))
s=this.d
if(s===this.b){this.sag(null)
return!1}this.sag(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sag:function(a){this.e=a}}
P.fG.prototype={
L:function(a,b){var t
for(t=J.bq(b);t.q();)this.i(0,t.gt())},
k:function(a){return P.eH(this,"{","}")},
$isc:1,
$asc:null}
P.fF.prototype={}
P.bN.prototype={$isc:1,$asc:null,$isb:1,$asb:null}
P.az.prototype={}
P.M.prototype={}
P.bb.prototype={
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.bb))return!1
return this.a===b.a&&this.b===b.b},
U:function(a,b){return C.b.U(this.a,b.a)},
gw:function(a){var t=this.a
return(t^C.b.aY(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.md(H.mG(this))
s=P.cg(H.mE(this))
r=P.cg(H.mA(this))
q=P.cg(H.mB(this))
p=P.cg(H.mD(this))
o=P.cg(H.mF(this))
n=P.me(H.mC(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isM:1,
$asM:function(){return[P.bb]}}
P.P.prototype={$isM:1,
$asM:function(){return[P.X]}}
P.aD.prototype={
at:function(a,b){return C.b.at(this.a,b.gdH())},
as:function(a,b){return C.b.as(this.a,b.gdH())},
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.aD))return!1
return this.a===b.a},
gw:function(a){return this.a&0x1FFFFFFF},
U:function(a,b){return C.b.U(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.e9()
s=this.a
if(s<0)return"-"+new P.aD(0-s).k(0)
r=t.$1(C.b.K(s,6e7)%60)
q=t.$1(C.b.K(s,1e6)%60)
p=new P.e8().$1(s%1e6)
return""+C.b.K(s,36e8)+":"+H.i(r)+":"+H.i(q)+"."+H.i(p)},
$isM:1,
$asM:function(){return[P.aD]}}
P.e8.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.v,args:[P.p]}}}
P.e9.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.v,args:[P.p]}}}
P.bc.prototype={}
P.cd.prototype={
k:function(a){return"Assertion failed"}}
P.dm.prototype={
k:function(a){return"Throw of null."}}
P.ag.prototype={
gaT:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaS:function(){return""},
k:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.i(t)
q=this.gaT()+s+r
if(!this.a)return q
p=this.gaS()
o=P.jd(this.b)
return q+p+": "+H.i(o)}}
P.dq.prototype={
gaT:function(){return"RangeError"},
gaS:function(){var t,s,r
H.d(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.i(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.i(t)
else if(r>t)s=": Not in range "+H.i(t)+".."+H.i(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.i(t)}return s}}
P.eE.prototype={
gaT:function(){return"RangeError"},
gaS:function(){H.d(this.a)
if(J.ll(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.i(t)},
gl:function(a){return this.f}}
P.w.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.dy.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.aH.prototype={
k:function(a){return"Bad state: "+this.a}}
P.a3.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.i(P.jd(t))+"."}}
P.dt.prototype={
k:function(a){return"Stack Overflow"},
$isbc:1}
P.e0.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.hK.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.i(t)}}
P.eb.prototype={
k:function(a){return"Expando:"+H.i(this.a)},
h:function(a,b){var t,s
t=this.b
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.G(P.jW(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.kp(b,"expando$values")
return s==null?null:H.kp(s,t)}}
P.p.prototype={$isM:1,
$asM:function(){return[P.X]}}
P.Y.prototype={
aH:function(a,b){return new H.dz(this,b,[H.ao(this,"Y",0)])},
gl:function(a){var t,s
H.d(!this.$isc)
t=this.gB(this)
for(s=0;t.q();)++s
return s},
ga5:function(a){var t,s
t=this.gB(this)
if(!t.q())throw H.e(H.eI())
s=t.gt()
if(t.q())throw H.e(H.mw())
return s},
u:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(P.m4("index"))
if(b<0)H.G(P.b_(b,0,null,"index",null))
for(t=this.gB(this),s=0;t.q();){r=t.gt()
if(b===s)return r;++s}throw H.e(P.C(b,this,"index",null,s))},
k:function(a){return P.mu(this,"(",")")}}
P.d7.prototype={}
P.b.prototype={$isc:1,$asc:null,$asb:null}
P.aG.prototype={}
P.aY.prototype={
gw:function(a){return P.t.prototype.gw.call(this,this)},
k:function(a){return"null"}}
P.X.prototype={$isM:1,
$asM:function(){return[P.X]}}
P.t.prototype={constructor:P.t,$ist:1,
A:function(a,b){return this===b},
gw:function(a){return H.aZ(this)},
k:function(a){return H.ft(this)},
gD:function(a){return new H.aI(H.iE(this),null)},
toString:function(){return this.k(this)}}
P.bQ.prototype={}
P.v.prototype={$isM:1,
$asM:function(){return[P.v]}}
P.bR.prototype={
gl:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga6:function(){return this.a}}
W.n.prototype={}
W.dQ.prototype={
k:function(a){return String(a)},
$isa:1}
W.dR.prototype={
k:function(a){return String(a)},
$isa:1}
W.a2.prototype={$ist:1}
W.dU.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.a2]},
$isc:1,
$asc:function(){return[W.a2]},
$isr:1,
$asr:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.ce.prototype={}
W.aP.prototype={$isa:1,$isaP:1}
W.cf.prototype={
cP:function(a,b,c){var t=this.dK(a,b,P.ne(c,null))
return t},
dK:function(a,b,c){return a.getContext(b,c)}}
W.dW.prototype={
aI:function(a){return P.iz(a.getContextAttributes())}}
W.aQ.prototype={$isa:1,
gl:function(a){return a.length}}
W.dZ.prototype={$isa:1}
W.A.prototype={$ist:1}
W.ba.prototype={
bB:function(a,b){var t,s
t=$.$get$k5()
s=t[b]
if(typeof s==="string")return s
s=this.dX(a,b)
t[b]=s
return s},
dX:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.mf()+b
if(t in a)return t
return b},
gl:function(a){return a.length}}
W.e_.prototype={}
W.e1.prototype={
h:function(a,b){return a[b]},
gl:function(a){return a.length}}
W.e2.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gN:function(a){return a.z}}
W.ch.prototype={}
W.bs.prototype={
e0:function(a,b){return a.adoptNode(b)},
cQ:function(a,b){return a.getElementById(b)},
cn:function(a,b){return a.querySelector(b)}}
W.ci.prototype={$isa:1}
W.e3.prototype={
k:function(a){return String(a)}}
W.cj.prototype={
eg:function(a,b){return a.createHTMLDocument(b)}}
W.e4.prototype={
gaG:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gN:function(a){return a.z}}
W.ck.prototype={
gaG:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gN:function(a){return a.z}}
W.cl.prototype={
k:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.ga4(a))+" x "+H.i(this.ga3(a))},
A:function(a,b){var t
if(b==null)return!1
t=J.x(b)
if(!t.$isN)return!1
return a.left===t.gb5(b)&&a.top===t.gb9(b)&&this.ga4(a)===t.ga4(b)&&this.ga3(a)===t.ga3(b)},
gw:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.ga4(a)
q=this.ga3(a)
return W.kQ(W.b7(W.b7(W.b7(W.b7(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga3:function(a){return a.height},
gb5:function(a){return a.left},
gb9:function(a){return a.top},
ga4:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isN:1,
$asN:function(){}}
W.e5.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[P.v]},
$isc:1,
$asc:function(){return[P.v]},
$isr:1,
$asr:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]}}
W.e6.prototype={
gl:function(a){return a.length}}
W.a4.prototype={
ge3:function(a){return new W.hE(a)},
k:function(a){return a.localName},
O:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.kd
if(t==null){t=H.D([],[W.dj])
s=new W.dk(t)
C.a.i(t,W.kO(null))
C.a.i(t,W.kR())
$.kd=s
d=s}else d=t
t=$.kc
if(t==null){t=new W.dG(d)
$.kc=t
c=t}else{t.a=d
c=t}}if($.aE==null){t=document
s=t.implementation
s=(s&&C.x).eg(s,"")
$.aE=s
$.jc=s.createRange()
s=$.aE
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.aE.head;(t&&C.y).T(t,r)}t=$.aE
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.jA(s,"$isaP")}t=$.aE
if(!!this.$isaP)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.aE.body;(t&&C.h).T(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.E(C.I,a.tagName)){t=$.jc;(t&&C.u).cR(t,q)
t=$.jc
p=(t&&C.u).ee(t,b)}else{q.innerHTML=b
p=$.aE.createDocumentFragment()
for(t=J.l(p);s=q.firstChild,s!=null;)t.T(p,s)}t=$.aE.body
if(q==null?t!=null:q!==t)J.lR(q)
c.bg(p)
C.f.e0(document,p)
return p},
ef:function(a,b,c){return this.O(a,b,c,null)},
d0:function(a,b,c,d){a.textContent=null
this.T(a,this.O(a,b,c,d))},
d_:function(a,b){return this.d0(a,b,null,null)},
aa:function(a,b){return a.getAttribute(b)},
dQ:function(a,b){return a.removeAttribute(b)},
$isa:1,
$ist:1,
$isa4:1,
$isj:1,
$isu:1,
geO:function(a){return a.tagName}}
W.ix.prototype={
$1:function(a){return!!J.x(a).$isa4},
$S:function(){return{func:1,args:[,]}}}
W.m.prototype={}
W.j.prototype={
dB:function(a,b,c,d){return a.addEventListener(b,H.c7(c,1),!1)},
$ist:1,
$isj:1}
W.a5.prototype={$ist:1}
W.eu.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.a5]},
$isc:1,
$asc:function(){return[W.a5]},
$isr:1,
$asr:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.ev.prototype={
gl:function(a){return a.length}}
W.ez.prototype={
gl:function(a){return a.length}}
W.a6.prototype={$ist:1}
W.cr.prototype={}
W.eB.prototype={
gl:function(a){return a.length}}
W.bB.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.u]},
$isc:1,
$asc:function(){return[W.u]},
$isr:1,
$asr:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.cs.prototype={}
W.eC.prototype={
J:function(a,b){return a.send(b)}}
W.bC.prototype={}
W.bD.prototype={$isa:1,$isa4:1,$isbD:1}
W.aV.prototype={$ist:1,$isaV:1}
W.eS.prototype={
k:function(a){return String(a)}}
W.eY.prototype={
gl:function(a){return a.length}}
W.f_.prototype={
eX:function(a,b,c){return a.send(b,c)},
J:function(a,b){return a.send(b)}}
W.bG.prototype={}
W.a7.prototype={$ist:1}
W.f0.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.a7]},
$isc:1,
$asc:function(){return[W.a7]},
$isr:1,
$asr:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.Q.prototype={$ist:1,$isQ:1}
W.fa.prototype={$isa:1}
W.U.prototype={
ga5:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.e(new P.aH("No elements"))
if(s>1)throw H.e(new P.aH("More than one element"))
return t.firstChild},
L:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.l(s),p=0;p<r;++p)q.T(s,t.firstChild)
return},
j:function(a,b,c){var t=this.a
J.ln(t,c,C.r.h(t.childNodes,b))},
gB:function(a){var t=this.a.childNodes
return new W.co(t,t.length,-1,null,[H.ao(t,"B",0)])},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){return C.r.h(this.a.childNodes,b)},
$asc:function(){return[W.u]},
$asda:function(){return[W.u]},
$asb:function(){return[W.u]},
$asbN:function(){return[W.u]}}
W.u.prototype={
eI:function(a){var t=a.parentNode
if(t!=null)J.bo(t,a)},
k:function(a){var t=a.nodeValue
return t==null?this.d4(a):t},
T:function(a,b){return a.appendChild(b)},
dR:function(a,b){return a.removeChild(b)},
dS:function(a,b,c){return a.replaceChild(b,c)},
$ist:1,
$isj:1,
$isu:1,
gb6:function(a){return a.previousSibling}}
W.di.prototype={
b7:function(a){return a.previousNode()}}
W.bM.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.u]},
$isc:1,
$asc:function(){return[W.u]},
$isr:1,
$asr:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.fj.prototype={$isa:1}
W.fm.prototype={
gl:function(a){return a.length}}
W.a8.prototype={$ist:1,
gl:function(a){return a.length}}
W.fo.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.a8]},
$isc:1,
$asc:function(){return[W.a8]},
$isr:1,
$asr:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.fr.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.fs.prototype={
J:function(a,b){return a.send(b)}}
W.dp.prototype={
ee:function(a,b){return a.createContextualFragment(b)},
cR:function(a,b){return a.selectNodeContents(b)}}
W.fC.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gN:function(a){return a.z}}
W.dr.prototype={
J:function(a,b){return a.send(b)}}
W.fE.prototype={
gl:function(a){return a.length}}
W.fH.prototype={$isa:1}
W.a9.prototype={$ist:1,$isj:1}
W.fI.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.a9]},
$isc:1,
$asc:function(){return[W.a9]},
$isr:1,
$asr:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.aa.prototype={$ist:1}
W.fK.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.aa]},
$isc:1,
$asc:function(){return[W.aa]},
$isr:1,
$asr:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.ab.prototype={$ist:1,
gl:function(a){return a.length}}
W.fQ.prototype={
h:function(a,b){return this.bI(a,b)},
aC:function(a,b){var t,s
for(t=0;!0;++t){s=this.dN(a,t)
if(s==null)return
b.$2(s,this.bI(a,s))}},
gl:function(a){return a.length},
bI:function(a,b){return a.getItem(b)},
dN:function(a,b){return a.key(b)}}
W.Z.prototype={$ist:1}
W.al.prototype={}
W.du.prototype={
O:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aL(a,b,c,d)
t=W.mh("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.U(s).L(0,new W.U(t))
return s}}
W.fY.prototype={
O:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aL(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.v.O(t.createElement("table"),b,c,d)
t.toString
t=new W.U(t)
r=t.ga5(t)
r.toString
t=new W.U(r)
q=t.ga5(t)
s.toString
q.toString
new W.U(s).L(0,new W.U(q))
return s}}
W.fZ.prototype={
O:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aL(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.v.O(t.createElement("table"),b,c,d)
t.toString
t=new W.U(t)
r=t.ga5(t)
s.toString
r.toString
new W.U(s).L(0,new W.U(r))
return s}}
W.bS.prototype={$isbS:1}
W.ac.prototype={$ist:1,$isj:1}
W.a_.prototype={$ist:1,$isj:1}
W.h1.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.a_]},
$isc:1,
$asc:function(){return[W.a_]},
$isr:1,
$asr:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.h2.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.ac]},
$isc:1,
$asc:function(){return[W.ac]},
$isr:1,
$asr:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
W.h4.prototype={
gl:function(a){return a.length}}
W.ad.prototype={$ist:1}
W.b0.prototype={$ist:1,$isb0:1}
W.h8.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.ad]},
$isc:1,
$asc:function(){return[W.ad]},
$isr:1,
$asr:function(){return[W.ad]},
$isb:1,
$asb:function(){return[W.ad]}}
W.h9.prototype={
gl:function(a){return a.length}}
W.bi.prototype={}
W.hb.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gN:function(a){return a.z}}
W.dx.prototype={
b7:function(a){return a.previousNode()}}
W.aJ.prototype={}
W.hi.prototype={
k:function(a){return String(a)},
$isa:1}
W.hk.prototype={
gl:function(a){return a.length}}
W.hn.prototype={
gl:function(a){return a.length}}
W.ho.prototype={
J:function(a,b){return a.send(b)}}
W.b2.prototype={
gei:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(new P.w("deltaY is not supported"))},
$ist:1,
$isQ:1,
$isb2:1}
W.bX.prototype={
ge2:function(a){var t,s
t=P.X
s=new P.ay(0,$.F,null,[t])
this.dJ(a)
this.dT(a,W.kV(new W.hq(new P.ij(s,[t]))))
return s},
dT:function(a,b){return a.requestAnimationFrame(H.c7(b,1))},
dJ:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isa:1}
W.hq.prototype={
$1:function(a){this.a.ea(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.hr.prototype={$isa:1}
W.b3.prototype={$isa:1}
W.hz.prototype={
k:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
A:function(a,b){var t,s,r
if(b==null)return!1
t=J.x(b)
if(!t.$isN)return!1
s=a.left
r=t.gb5(b)
if(s==null?r==null:s===r){s=a.top
r=t.gb9(b)
if(s==null?r==null:s===r){s=a.width
r=t.ga4(b)
if(s==null?r==null:s===r){s=a.height
t=t.ga3(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gw:function(a){var t,s,r,q
t=J.aq(a.left)
s=J.aq(a.top)
r=J.aq(a.width)
q=J.aq(a.height)
return W.kQ(W.b7(W.b7(W.b7(W.b7(0,t),s),r),q))},
$isN:1,
$asN:function(){},
ga3:function(a){return a.height},
gb5:function(a){return a.left},
gb9:function(a){return a.top},
ga4:function(a){return a.width}}
W.dB.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[P.N]},
$isc:1,
$asc:function(){return[P.N]},
$isr:1,
$asr:function(){return[P.N]},
$isb:1,
$asb:function(){return[P.N]}}
W.hB.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.A]},
$isc:1,
$asc:function(){return[W.A]},
$isr:1,
$asr:function(){return[W.A]},
$isb:1,
$asb:function(){return[W.A]}}
W.hC.prototype={$isa:1}
W.hD.prototype={
ga3:function(a){return a.height},
ga4:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.hU.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.a6]},
$isc:1,
$asc:function(){return[W.a6]},
$isr:1,
$asr:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.hV.prototype={$isa:1}
W.dE.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.u]},
$isc:1,
$asc:function(){return[W.u]},
$isr:1,
$asr:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.ic.prototype={$isa:1}
W.ig.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.ab]},
$isc:1,
$asc:function(){return[W.ab]},
$isr:1,
$asr:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.ih.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.Z]},
$isc:1,
$asc:function(){return[W.Z]},
$isr:1,
$asr:function(){return[W.Z]},
$isb:1,
$asb:function(){return[W.Z]}}
W.ip.prototype={$isa:1}
W.iq.prototype={$isa:1}
W.hx.prototype={
aC:function(a,b){var t,s,r,q,p,o
for(t=this.gH(this),s=t.length,r=this.a,q=J.l(r),p=0;p<t.length;t.length===s||(0,H.E)(t),++p){o=t[p]
b.$2(o,q.aa(r,o))}},
gH:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.D([],[P.v])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.i(s,p.name)}return s},
gdL:function(){return this.a}}
W.hE.prototype={
h:function(a,b){return J.j9(this.a,b)},
gl:function(a){return this.gH(this).length}}
W.hH.prototype={
eE:function(a,b,c,d){return W.ax(this.a,this.b,a,!1,H.aM(this,0))}}
W.js.prototype={}
W.hI.prototype={
dZ:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.lm(r,this.c,t,!1)}},
du:function(a,b,c,d,e){this.dZ()}}
W.hJ.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.c_.prototype={
a7:function(a){return $.$get$kP().E(0,W.bt(a))},
Z:function(a,b,c){var t,s,r
t=W.bt(a)
s=$.$get$jt()
r=s.h(0,H.i(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
dv:function(a){var t,s
t=$.$get$jt()
if(t.gao(t)){for(s=0;s<262;++s)t.j(0,C.H[s],W.nm())
for(s=0;s<12;++s)t.j(0,C.k[s],W.nn())}}}
W.B.prototype={
gB:function(a){return new W.co(a,this.gl(a),-1,null,[H.ao(a,"B",0)])},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
W.dk.prototype={
a7:function(a){return C.a.bU(this.a,new W.fc(a))},
Z:function(a,b,c){return C.a.bU(this.a,new W.fb(a,b,c))}}
W.fc.prototype={
$1:function(a){return a.a7(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.fb.prototype={
$1:function(a){return a.Z(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.c2.prototype={
a7:function(a){return this.a.E(0,W.bt(a))},
Z:function(a,b,c){var t,s
t=W.bt(a)
s=this.c
if(s.E(0,H.i(t)+"::"+b))return this.d.e1(c)
else if(s.E(0,"*::"+b))return this.d.e1(c)
else{s=this.b
if(s.E(0,H.i(t)+"::"+b))return!0
else if(s.E(0,"*::"+b))return!0
else if(s.E(0,H.i(t)+"::*"))return!0
else if(s.E(0,"*::*"))return!0}return!1},
dz:function(a,b,c,d){var t,s,r
this.a.L(0,c)
t=b.aH(0,new W.id())
s=b.aH(0,new W.ie())
this.b.L(0,t)
r=this.c
r.L(0,C.J)
r.L(0,s)}}
W.id.prototype={
$1:function(a){return!C.a.E(C.k,a)},
$S:function(){return{func:1,args:[,]}}}
W.ie.prototype={
$1:function(a){return C.a.E(C.k,a)},
$S:function(){return{func:1,args:[,]}}}
W.ik.prototype={
Z:function(a,b,c){if(this.d7(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.j9(a,"template")==="")return this.e.E(0,b)
return!1}}
W.il.prototype={
$1:function(a){return"TEMPLATE::"+H.i(a)},
$S:function(){return{func:1,args:[,]}}}
W.ii.prototype={
a7:function(a){var t=J.x(a)
if(!!t.$isbP)return!1
t=!!t.$isK
if(t&&W.bt(a)==="foreignObject")return!1
if(t)return!0
return!1},
Z:function(a,b,c){if(b==="is"||C.e.bj(b,"on"))return!1
return this.a7(a)}}
W.co.prototype={
q:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbK(J.bn(this.a,t))
this.c=t
return!0}this.sbK(null)
this.c=s
return!1},
gt:function(){return this.d},
sbK:function(a){this.d=a}}
W.dj.prototype={}
W.ib.prototype={}
W.dG.prototype={
bg:function(a){new W.im(this).$2(a,null)},
aA:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)J.bo(t,a)}else J.bo(b,a)},
dW:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.lH(a)
r=J.j9(s.gdL(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.S(n)}p="element unprintable"
try{p=J.aC(a)}catch(n){H.S(n)}try{o=W.bt(a)
this.dV(a,b,t,p,o,s,r)}catch(n){if(H.S(n) instanceof P.ag)throw n
else{this.aA(a,b)
window
m="Removing corrupted element "+H.i(p)
if(typeof console!="undefined")console.warn(m)}}},
dV:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.aA(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.a7(a)){this.aA(a,b)
window
t="Removing disallowed element <"+H.i(e)+"> from "+J.aC(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.Z(a,"is",g)){this.aA(a,b)
window
t="Removing disallowed type extension <"+H.i(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gH(f)
s=H.D(t.slice(0),[H.aM(t,0)])
for(r=f.gH(f).length-1,t=f.a,q=J.l(t);r>=0;--r){p=s[r]
if(!this.a.Z(a,J.lX(p),q.aa(t,p))){window
o="Removing disallowed attribute <"+H.i(e)+" "+p+'="'+H.i(q.aa(t,p))+'">'
if(typeof console!="undefined")console.warn(o)
q.aa(t,p)
q.dQ(t,p)}}if(!!J.x(a).$isbS)this.bg(a.content)}}
W.im.prototype={
$2:function(a,b){var t,s,r,q
switch(a.nodeType){case 1:this.a.dW(a,b)
break
case 8:case 11:case 3:case 4:break
default:if(b==null){r=a.parentNode
if(r!=null)J.bo(r,a)}else J.bo(b,a)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.lI(t)}catch(q){H.S(q)
r=t
J.bo(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.u,W.u]}}}
W.bu.prototype={$isc:1,
$asc:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.bv.prototype={$isc:1,
$asc:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.bw.prototype={$isc:1,
$asc:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
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
W.ct.prototype={}
W.cN.prototype={$isc:1,
$asc:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.cz.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.cw.prototype={$isc:1,
$asc:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.cG.prototype={$isc:1,
$asc:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.cH.prototype={$isc:1,
$asc:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.cI.prototype={$isc:1,
$asc:function(){return[W.A]},
$isb:1,
$asb:function(){return[W.A]}}
W.cL.prototype={$isc:1,
$asc:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.cM.prototype={$isc:1,
$asc:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.cu.prototype={$isc:1,
$asc:function(){return[P.N]},
$isb:1,
$asb:function(){return[P.N]}}
W.cx.prototype={$isc:1,
$asc:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.cy.prototype={$isc:1,
$asc:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.cB.prototype={$isc:1,
$asc:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.cC.prototype={$isc:1,
$asc:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]}}
W.cD.prototype={$isc:1,
$asc:function(){return[W.ad]},
$isb:1,
$asb:function(){return[W.ad]}}
W.cE.prototype={$isc:1,
$asc:function(){return[W.Z]},
$isb:1,
$asb:function(){return[W.Z]}}
W.cO.prototype={$isc:1,
$asc:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.cP.prototype={$isc:1,
$asc:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.cQ.prototype={$isc:1,
$asc:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.d_.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.d0.prototype={$isc:1,
$asc:function(){return[W.A]},
$isb:1,
$asb:function(){return[W.A]}}
W.cY.prototype={$isc:1,
$asc:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.cZ.prototype={$isc:1,
$asc:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.d3.prototype={$isc:1,
$asc:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.d4.prototype={$isc:1,
$asc:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.d5.prototype={$isc:1,
$asc:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]}}
W.d6.prototype={$isc:1,
$asc:function(){return[P.N]},
$isb:1,
$asb:function(){return[P.N]}}
W.cR.prototype={$isc:1,
$asc:function(){return[W.ad]},
$isb:1,
$asb:function(){return[W.ad]}}
W.cS.prototype={$isc:1,
$asc:function(){return[W.Z]},
$isb:1,
$asb:function(){return[W.Z]}}
W.cV.prototype={$isc:1,
$asc:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.d2.prototype={$isc:1,
$asc:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
P.iy.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.v,,]}}}
P.i3.prototype={}
P.N.prototype={$asN:null}
P.dP.prototype={$isa:1}
P.aO.prototype={$isa:1}
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
P.ep.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gN:function(a){return a.z}}
P.eq.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.er.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gN:function(a){return a.z}}
P.es.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.et.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ew.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ey.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ah.prototype={}
P.aF.prototype={$isa:1}
P.eD.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.as.prototype={$ist:1}
P.eN.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.a1(a,b)},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
a1:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.as]},
$isb:1,
$asb:function(){return[P.as]}}
P.eV.prototype={$isa:1}
P.eW.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.at.prototype={$ist:1}
P.fd.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.a1(a,b)},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
a1:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.at]},
$isb:1,
$asb:function(){return[P.at]}}
P.fk.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fp.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fq.prototype={
gl:function(a){return a.length}}
P.fv.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fw.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bP.prototype={$isa:1,$isbP:1}
P.fV.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.a1(a,b)},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
a1:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]}}
P.K.prototype={
O:function(a,b,c,d){var t,s,r,q,p,o
t=H.D([],[W.dj])
C.a.i(t,W.kO(null))
C.a.i(t,W.kR())
C.a.i(t,new W.ii())
c=new W.dG(new W.dk(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.h).ef(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.U(q)
o=t.ga5(t)
for(t=J.l(p);r=o.firstChild,r!=null;)t.T(p,r)
return p},
$isa:1,
$isK:1}
P.fW.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fX.prototype={$isa:1}
P.dv.prototype={}
P.h0.prototype={$isa:1}
P.bT.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.au.prototype={$ist:1}
P.ha.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.a1(a,b)},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
a1:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.au]},
$isb:1,
$asb:function(){return[P.au]}}
P.hj.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.hl.prototype={$isa:1}
P.hm.prototype={$isa:1}
P.bZ.prototype={$isa:1}
P.i8.prototype={$isa:1}
P.i9.prototype={$isa:1}
P.ia.prototype={$isa:1}
P.cJ.prototype={$isc:1,
$asc:function(){return[P.as]},
$isb:1,
$asb:function(){return[P.as]}}
P.cv.prototype={$isc:1,
$asc:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]}}
P.cA.prototype={$isc:1,
$asc:function(){return[P.at]},
$isb:1,
$asb:function(){return[P.at]}}
P.cF.prototype={$isc:1,
$asc:function(){return[P.au]},
$isb:1,
$asb:function(){return[P.au]}}
P.cT.prototype={$isc:1,
$asc:function(){return[P.as]},
$isb:1,
$asb:function(){return[P.as]}}
P.cU.prototype={$isc:1,
$asc:function(){return[P.au]},
$isb:1,
$asb:function(){return[P.au]}}
P.cW.prototype={$isc:1,
$asc:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]}}
P.d1.prototype={$isc:1,
$asc:function(){return[P.at]},
$isb:1,
$asb:function(){return[P.at]}}
P.dT.prototype={
gl:function(a){return a.length}}
P.fA.prototype={
bS:function(a,b){return a.activeTexture(b)},
bV:function(a,b,c){return a.attachShader(b,c)},
bW:function(a,b,c){return a.bindBuffer(b,c)},
bX:function(a,b,c){return a.bindFramebuffer(b,c)},
bY:function(a,b,c){return a.bindTexture(b,c)},
bZ:function(a,b){return a.blendEquation(b)},
c_:function(a,b,c){return a.blendFunc(b,c)},
c0:function(a,b,c,d){return a.bufferData(b,c,d)},
c1:function(a,b){return a.checkFramebufferStatus(b)},
c2:function(a,b){return a.clear(b)},
c3:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c4:function(a,b){return a.compileShader(b)},
c5:function(a){return a.createBuffer()},
c6:function(a){return a.createFramebuffer()},
c7:function(a){return a.createProgram()},
c8:function(a,b){return a.createShader(b)},
c9:function(a){return a.createTexture()},
ca:function(a,b){return a.depthMask(b)},
cb:function(a,b){return a.disable(b)},
cc:function(a,b,c,d){return a.drawArrays(b,c,d)},
cd:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
ce:function(a,b){return a.enable(b)},
cf:function(a,b){return a.enableVertexAttribArray(b)},
ci:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
aI:function(a){return P.iz(a.getContextAttributes())},
ba:function(a){return a.getError()},
bb:function(a,b){return a.getProgramInfoLog(b)},
bc:function(a,b,c){return a.getProgramParameter(b,c)},
bd:function(a,b){return a.getShaderInfoLog(b)},
be:function(a,b,c){return a.getShaderParameter(b,c)},
bf:function(a,b,c){return a.getUniformLocation(b,c)},
cj:function(a,b){return a.linkProgram(b)},
bi:function(a,b,c){return a.shaderSource(b,c)},
bk:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cr:function(a,b,c,d,e,f,g,h,i,j){this.b_(a,b,c,d,e,f,g,h,i,j)
return},
b_:function(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
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
P.fB.prototype={
e4:function(a,b){return a.beginTransformFeedback(b)},
e7:function(a,b){return a.bindVertexArray(b)},
eh:function(a){return a.createVertexArray()},
eo:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
ep:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
eq:function(a){return a.endTransformFeedback()},
eP:function(a,b,c,d,e,f){return a.texStorage2D(b,c,d,e,f)},
eU:function(a,b,c,d){this.dY(a,b,c,d)
return},
dY:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
eV:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bS:function(a,b){return a.activeTexture(b)},
bV:function(a,b,c){return a.attachShader(b,c)},
bW:function(a,b,c){return a.bindBuffer(b,c)},
bX:function(a,b,c){return a.bindFramebuffer(b,c)},
bY:function(a,b,c){return a.bindTexture(b,c)},
bZ:function(a,b){return a.blendEquation(b)},
c_:function(a,b,c){return a.blendFunc(b,c)},
c0:function(a,b,c,d){return a.bufferData(b,c,d)},
c1:function(a,b){return a.checkFramebufferStatus(b)},
c2:function(a,b){return a.clear(b)},
c3:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c4:function(a,b){return a.compileShader(b)},
c5:function(a){return a.createBuffer()},
c6:function(a){return a.createFramebuffer()},
c7:function(a){return a.createProgram()},
c8:function(a,b){return a.createShader(b)},
c9:function(a){return a.createTexture()},
ca:function(a,b){return a.depthMask(b)},
cb:function(a,b){return a.disable(b)},
cc:function(a,b,c,d){return a.drawArrays(b,c,d)},
cd:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
ce:function(a,b){return a.enable(b)},
cf:function(a,b){return a.enableVertexAttribArray(b)},
ci:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
aI:function(a){return P.iz(a.getContextAttributes())},
ba:function(a){return a.getError()},
bb:function(a,b){return a.getProgramInfoLog(b)},
bc:function(a,b,c){return a.getProgramParameter(b,c)},
bd:function(a,b){return a.getShaderInfoLog(b)},
be:function(a,b,c){return a.getShaderParameter(b,c)},
bf:function(a,b,c){return a.getUniformLocation(b,c)},
cj:function(a,b){return a.linkProgram(b)},
bi:function(a,b,c){return a.shaderSource(b,c)},
bk:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cr:function(a,b,c,d,e,f,g,h,i,j){this.b_(a,b,c,d,e,f,g,h,i,j)
return},
b_:function(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
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
P.io.prototype={$isa:1}
P.fL.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return P.iz(this.dM(a,b))},
j:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
dM:function(a,b){return a.item(b)},
$isc:1,
$asc:function(){return[P.aG]},
$isb:1,
$asb:function(){return[P.aG]}}
P.cK.prototype={$isc:1,
$asc:function(){return[P.aG]},
$isb:1,
$asb:function(){return[P.aG]}}
P.cX.prototype={$isc:1,
$asc:function(){return[P.aG]},
$isb:1,
$asb:function(){return[P.aG]}}
B.iV.prototype={
$1:function(a){$.$get$iA().j(0,a.which,!0)},
$S:function(){return{func:1,args:[W.aV]}}}
B.iW.prototype={
$1:function(a){$.$get$iA().j(0,a.which,null)},
$S:function(){return{func:1,args:[W.aV]}}}
B.iX.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.nc=t
$.nd=C.b.ad(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.jD=s-C.b.K(window.innerWidth,2)
$.lc=-(t-C.b.K(window.innerHeight,2))},
$S:function(){return{func:1,args:[W.Q]}}}
B.iY.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.ca=t-C.b.K(window.innerWidth,2)
$.cb=-(s-C.b.K(window.innerHeight,2))
if(a.button===2)$.$get$c8().j(0,"right",!0)
else $.$get$c8().j(0,"left",!0)},
$S:function(){return{func:1,args:[W.Q]}}}
B.iZ.prototype={
$1:function(a){if(a.button===2)$.$get$c8().j(0,"right",null)
else $.$get$c8().j(0,"left",null)},
$S:function(){return{func:1,args:[W.Q]}}}
B.fe.prototype={
di:function(a,b,c,d){var t
d.toString
W.ax(d,W.nl().$1(d),new B.ff(this),!1,W.b2)
W.ax(d,"mousemove",new B.fg(this),!1,W.Q)
t=W.b0
W.ax(d,"touchstart",new B.fh(),!1,t)
W.ax(d,"touchmove",new B.fi(this),!1,t)
B.nB(null)}}
B.ff.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.a2.gei(a)*r.k3
if(C.c.ad(r.fy,t)>0)r.fy=H.a0(C.c.ad(r.fy,t))}catch(q){s=H.S(q)
P.aB(s)}},
$S:function(){return{func:1,args:[W.b2]}}}
B.fg.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=H.a0(t.go+C.b.ad($.jD,$.ca)*0.01)
s=t.id
r=$.cb
q=$.lc
t.id=H.a0(s+(r-q)*0.01)
$.ca=$.jD
$.cb=q}},
$S:function(){return{func:1,args:[W.Q]}}}
B.fh.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.a9(t.clientX)
C.c.a9(t.clientY)
$.ca=s
C.c.a9(t.clientX)
$.cb=C.c.a9(t.clientY)},
$S:function(){return{func:1,args:[W.b0]}}}
B.fi.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.a9(t.clientX)
t=C.c.a9(t.clientY)
r=this.a
r.go=H.a0(r.go+C.b.ad(s,$.ca)*0.01)
r.id=H.a0(r.id+($.cb-t)*0.01)
$.ca=s
$.cb=t},
$S:function(){return{func:1,args:[W.b0]}}}
G.f1.prototype={}
G.bW.prototype={
X:function(a,b){var t=this.d
if(H.ae(!t.G(0,a)))H.an("uniform "+a+" already set")
t.j(0,a,b)},
bt:function(){return this.d},
k:function(a){var t,s,r,q
t=H.D(["{"+new H.aI(H.iE(this),null).k(0)+"}["+this.a+"]"],[P.v])
for(s=this.d,r=s.gH(s),r=r.gB(r);r.q();){q=r.gt()
C.a.i(t,H.i(q)+": "+H.i(s.h(0,q)))}return C.a.a8(t,"\n")}}
G.dV.prototype={}
G.dY.prototype={
cg:function(a,b,c){J.lE(this.a,b)
if(c>0)J.m2(this.a,b,c)}}
G.cp.prototype={}
G.z.prototype={}
G.bA.prototype={}
G.aR.prototype={
S:function(a){var t=this.e
H.d(!t.G(0,a))
H.d(C.e.bj(a,"a"))
switch($.$get$V().h(0,a).a){case"vec2":t.j(0,a,H.D([],[T.o]))
break
case"vec3":t.j(0,a,H.D([],[T.h]))
break
case"vec4":t.j(0,a,H.D([],[T.aK]))
break
case"float":t.j(0,a,H.D([],[P.P]))
break
case"uvec4":t.j(0,a,H.D([],[[P.b,P.p]]))
break
default:if(H.ae(!1))H.an("unknown type for "+a)}},
bn:function(a){var t,s,r
H.d(!0)
t=this.d.length
for(s=this.c,r=0;r<a;++r,t+=4)C.a.i(s,new G.bA(t,t+1,t+2,t+3))},
aO:function(a){var t,s,r,q,p
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.E)(a),++r){q=a[r]
p=new T.h(new Float32Array(3))
p.v(q)
C.a.i(s,p)}},
d9:function(a){var t,s,r,q,p
H.d(!0)
t=this.d
s=t.length
C.a.i(this.b,new G.z(s,s+1,s+2))
for(r=0;r<3;++r){q=a[r]
p=new T.h(new Float32Array(3))
p.v(q)
C.a.i(t,p)}},
af:function(a,b){var t,s,r,q,p,o,n
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.E)(b),++q){p=b[q]
o=new Float32Array(2)
n=p.a
o[1]=n[1]
o[0]=n[0]
r.i(t,new T.o(o))}},
au:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.E)(b),++q){p=b[q]
o=new T.h(new Float32Array(3))
o.v(p)
r.i(t,o)}},
da:function(a){var t,s,r,q,p
H.d(!0)
t=this.d
s=t.length
C.a.i(this.c,new G.bA(s,s+1,s+2,s+3))
for(r=0;r<4;++r){q=a[r]
p=new T.h(new Float32Array(3))
p.v(q)
C.a.i(t,p)}},
de:function(){var t,s,r,q,p,o,n,m,l,k
t=this.b
H.d(t.length>0||this.c.length>0)
s=this.c
r=new Array(t.length*3+s.length*6)
r.fixed$length=Array
q=H.D(r,[P.p])
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
df:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=this.d
s=new Array(t.length)
s.fixed$length=Array
r=H.D(s,[T.h])
q=new T.h(new Float32Array(H.f(3)))
p=new T.h(new Float32Array(H.f(3)))
for(s=this.b,o=s.length,n=0;n<s.length;s.length===o||(0,H.E)(s),++n){m=s[n]
l=m.a
k=m.b
j=m.c
G.jn(t[l],t[k],t[j],q,p)
i=new T.h(new Float32Array(3))
i.v(p)
r[l]=i
l=new T.h(new Float32Array(3))
l.v(p)
r[k]=l
l=new T.h(new Float32Array(3))
l.v(p)
r[j]=l}for(s=this.c,o=s.length,n=0;n<s.length;s.length===o||(0,H.E)(s),++n){h=s[n]
l=h.a
k=h.b
j=h.c
G.jn(t[l],t[k],t[j],q,p)
i=new T.h(new Float32Array(3))
i.v(p)
r[l]=i
l=new T.h(new Float32Array(3))
l.v(p)
r[k]=l
l=new T.h(new Float32Array(3))
l.v(p)
r[j]=l
l=new T.h(new Float32Array(3))
l.v(p)
r[h.d]=l}this.e.j(0,"aNormal",r)},
k:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gH(s),r=r.gB(r);r.q();){q=r.gt()
p=$.$get$V().h(0,q).a
C.a.i(t,H.i(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.a8(t," ")}}
G.bV.prototype={}
G.dw.prototype={}
G.eX.prototype={
dh:function(a){this.X("cDepthTest",!0)
this.X("cDepthWrite",!0)
this.X("cBlendEquation",$.$get$jX())
this.X("cStencilFunc",$.$get$fP())}}
G.eZ.prototype={
bp:function(a,b,c){var t,s
if(C.e.aP(a,0)===105){if(H.ae(C.b.aM(b.length,c)===this.z))H.an("ChangeAttribute "+this.z)}else H.d(C.b.aM(b.length,c)===(this.ch.length/3|0))
this.cy.j(0,a,b)
t=this.d
s=this.r.h(0,a)
J.dL(t.a,34962,s)
J.jJ(t.a,34962,b,35048)},
br:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
ae:function(a,b,c){var t,s,r,q,p,o
t=J.jG(a,0)===105
if(t&&this.z===0)this.z=C.b.aM(b.length,c)
s=this.r
r=this.d
s.j(0,a,J.j5(r.a))
this.bp(a,b,c)
q=$.$get$V().h(0,a)
if(q==null)throw H.e("Unknown canonical "+a)
p=this.x
if(H.ae(p.G(0,a)))H.an("unexpected attribute "+a)
o=p.h(0,a)
J.dM(r.a,this.e)
r.cg(0,o,t?1:0)
s=s.h(0,a)
p=q.bs()
J.dL(r.a,34962,s)
J.jU(r.a,o,p,5126,!1,0,0)},
k:function(a){var t,s,r
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,t=t.gH(t),t=t.gB(t);t.q();){r=t.gt()
C.a.i(s,H.i(r)+":"+this.cy.h(0,r).length)}return"MESH["+this.a+"] "+C.a.a8(s,"  ")},
saU:function(a){this.cx=a}}
G.fl.prototype={
dc:function(a,b){var t=C.b.cN(a,b)
if(this.z===t)return
this.z=t
this.bv()},
bv:function(){var t,s,r,q,p,o,n
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
t.ab(0,0,1/(p*s))
t.ab(1,1,1/p)
t.ab(2,2,(q+r)/o)
t.ab(3,2,-1)
t.ab(2,3,2*r*q/o)},
bt:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.h(new Float32Array(H.f(3)))
o.p(r,q,p)
p=this.d
p.j(0,"uEyePosition",o)
o=this.cy
o.v(t)
t=o.a
t[12]=0
t[13]=0
t[14]=0
t[15]=1
n=-s[12]
m=-s[13]
l=-s[14]
s=J.x(n)
r=!!s.$isaK
k=r?s.gaG(n):1
if(!!s.$ish){j=s.gm(n)
m=s.gn(n)
l=s.gN(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
l=s.gN(n)
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
a3.v(this.db)
a3.cm(0,o)
p.j(0,"uPerspectiveViewMatrix",a3)
return p}}
G.e7.prototype={
k:function(a){return"["+this.a+"] "+this.b+" "+this.c+" mode:"+this.d+" ["+this.e.a+"usec]"}}
G.fz.prototype={
dq:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gl(t)===s.gl(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gH(s),s=s.gB(s);s.q();){q=s.gt()
if(!t.G(0,q))C.a.i(r,q)}for(t=this.x,s=new P.c0(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.q();){q=s.d
if(!t.E(0,q))C.a.i(r,q)}return r},
ds:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gH(b),s=s.gB(s),r=this.d,q=this.y,p=this.z,o=0;s.q();){n=s.gt()
switch(J.jG(n,0)){case 117:if(q.G(0,n)){m=b.h(0,n)
if(p.G(0,n))H.iT("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.j(0,n,a)
l=$.$get$V().h(0,n)
if(l==null)H.G("unknown "+n)
H.d(q.G(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.ja(r.a,k,m)
else if(!!J.x(m).$iskj)J.m0(r.a,k,m)
break
case"float":if(l.c===0)J.lZ(r.a,k,m)
else if(!!J.x(m).$isex)J.m_(r.a,k,m)
break
case"mat4":if(l.c===0){j=H.aA(m,"$isJ").a
J.jT(r.a,k,!1,j)}else if(!!J.x(m).$isex)J.jT(r.a,k,!1,m)
else if(H.ae(!1))H.an("bad unform: "+n)
break
case"mat3":if(l.c===0){j=H.aA(m,"$isak").a
J.jS(r.a,k,!1,j)}else if(!!J.x(m).$isex)J.jS(r.a,k,!1,m)
else if(H.ae(!1))H.an("bad unform: "+n)
break
case"vec4":if(l.c===0){j=H.aA(m,"$isaK").a
J.jR(r.a,k,j)}else J.jR(r.a,k,m)
break
case"vec3":if(l.c===0){j=H.aA(m,"$ish").a
J.jQ(r.a,k,j)}else J.jQ(r.a,k,m)
break
case"vec2":if(l.c===0){j=H.aA(m,"$iso").a
J.jP(r.a,k,j)}else J.jP(r.a,k,m)
break
case"sampler2D":case"sampler2DShadow":j=C.b.V(33984,this.ch)
J.jH(r.a,j)
j=H.aA(m,"$isbU").b
J.bp(r.a,3553,j)
j=this.ch
J.ja(r.a,k,j)
this.ch=this.ch+1
break
case"samplerCube":H.d(n==="uCubeTexture")
j=C.b.V(33984,this.ch)
J.jH(r.a,j)
j=H.aA(m,"$isbU").b
J.bp(r.a,34067,j)
j=this.ch
J.ja(r.a,k,j)
this.ch=this.ch+1
break
default:H.iT("Error: unknow uniform type: "+j)
H.d(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":if(J.H(m,!0))J.cc(r.a,2929)
else J.j6(r.a,2929)
break
case"cStencilFunc":H.aA(m,"$isbV")
j=m.a
if(j===1281)J.j6(r.a,2960)
else{J.cc(r.a,2960)
i=m.b
h=m.c
J.lT(r.a,j,i,h)}break
case"cDepthWrite":J.ly(r.a,m)
break
case"cBlendEquation":H.aA(m,"$isdw")
j=m.a
if(j===1281)J.j6(r.a,3042)
else{J.cc(r.a,3042)
i=m.b
h=m.c
J.lq(r.a,i,h)
J.lp(r.a,j)}break}++o
break}}s=Date.now()
""+o
new P.aD(1000*(s-new P.bb(t,!1).a)).k(0)},
dd:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
t=Date.now()
s=this.d
r=this.r
J.m1(s.a,r)
this.ch=0
this.z.a_(0)
for(r=b.length,q=0;q<b.length;b.length===r||(0,H.E)(b),++q){p=b[q]
this.ds(p.a,p.bt())}r=this.Q
r.a_(0)
for(o=a.cy,o=o.gH(o),o=o.gB(o);o.q();)r.i(0,o.gt())
n=this.dq()
if(n.length!==0)P.aB("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.i(n)))
J.dM(a.d.a,a.e)
m=this.e.f.length>0
r=a.f
o=a.br()
l=a.Q
k=a.z
s.toString
if(m)J.lo(s.a,r)
if(l!==-1)if(k>1)J.lC(s.a,r,o,l,0,k)
else J.lB(s.a,r,o,l,0)
else if(k>1)J.lA(s.a,r,0,o,k)
else J.lz(s.a,r,0,o)
if(m)J.lF(s.a)
C.a.i(c,new G.e7(this.a,a.z,a.br(),r,P.mg(0,0,0,Date.now()-new P.bb(t,!1).a,0,0)))},
dk:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j
t=this.d
s=this.e
r=s.b
q=this.f
p=q.b
o=s.f
n=J.lw(t.a)
m=G.kL(t.a,35633,r)
J.jI(t.a,n,m)
l=G.kL(t.a,35632,p)
J.jI(t.a,n,l)
if(o.length>0)J.lY(t.a,n,o,35980)
J.lP(t.a,n)
if(!J.lO(t.a,n,35714))H.G(J.lN(t.a,n))
this.r=n
this.sdC(0,P.jj(s.c,null))
for(s=s.d,r=s.length,p=this.y,k=0;k<s.length;s.length===r||(0,H.E)(s),++k){j=s[k]
o=this.r
p.j(0,j,J.jO(t.a,o,j))}for(s=q.d,r=s.length,k=0;k<s.length;s.length===r||(0,H.E)(s),++k){j=s[k]
q=this.r
p.j(0,j,J.jO(t.a,q,j))}},
sdC:function(a,b){this.x=b}}
G.k.prototype={
bs:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.d(!1)
return-1}}}
G.bh.prototype={
bm:function(a){var t,s,r,q,p
H.d(this.b==null)
for(t=a.length,s=this.c,r=this.x,q=0;q<a.length;a.length===t||(0,H.E)(a),++q){p=a[q]
H.d($.$get$V().G(0,p))
H.d(!C.a.E(s,p))
C.a.i(s,p)
r.j(0,p,this.r);++this.r}C.a.aJ(s)},
aN:function(a){var t,s,r,q
H.d(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.E)(a),++r){q=a[r]
if(H.ae($.$get$V().G(0,q)))H.an("missing uniform "+q)
H.d(!C.a.E(s,q))
C.a.i(s,q)}C.a.aJ(s)},
bo:function(a){var t,s,r
H.d(this.b==null)
for(t=this.e,s=0;s<1;++s){r=a[s]
H.d($.$get$V().G(0,r))
H.d(!C.a.E(t,r))
C.a.i(t,r)}C.a.aJ(t)},
dl:function(a,b){H.d(this.b==null)
this.b=this.dt(!0,a,b)},
av:function(a){return this.dl(a,null)},
dt:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.d(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.E)(t),++o){n=t[o]
m=$.$get$V().h(0,n)
C.a.i(q,"layout (location="+H.i(p.h(0,n))+") in "+m.a+" "+H.i(n)+";")}C.a.i(q,"")
l=r?"in":"out"
if(r)C.a.i(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.E)(t),++o){k=t[o]
m=$.$get$V().h(0,k)
C.a.i(q,l+" "+m.a+" "+H.i(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.E)(t),++o){k=t[o]
m=$.$get$V().h(0,k)
C.a.i(q,l+" "+m.a+" "+H.i(k)+";")}C.a.i(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.E)(t),++o){k=t[o]
m=$.$get$V().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.i(q,"uniform "+m.a+" "+H.i(k)+j+";")}C.a.i(q,"")
C.a.i(q,"void main(void) {")
C.a.L(q,b)
C.a.i(q,"}")
return C.a.a8(q,"\n")}}
G.fJ.prototype={
ac:function(a,b,c){var t=this.d.a
t[12]=a
t[13]=b
t[14]=c}}
G.h3.prototype={
bu:function(a,b){var t=this.e
if(t!==1)J.lV(a.a,b,34046,t)
t=this.r
J.dO(a.a,b,10240,t)
t=this.f
J.dO(a.a,b,10241,t)
if(this.b){J.dO(a.a,b,10242,33071)
J.dO(a.a,b,10243,33071)}}}
G.bU.prototype={
k:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.hf.prototype={
k:function(a){return"TypedTexture["+this.a+", "+this.x+", "+H.i(this.f)+" X "+H.i(this.r)+"]"}}
G.hg.prototype={
k:function(a){return"TypedTextureMutable["+this.a+", "+this.x+", "+this.f+" X "+H.i(this.r)+"]"}}
R.fN.prototype={
dw:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.mT("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.m).bB(r,"float")
r.setProperty(p,"left","")
p=C.m.bB(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.i.T(t,s)}return t},
dm:function(a,b,c){var t,s,r
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
J.j2(this.a,s)
r=this.dw(b,c,90,30)
this.d=r
J.j2(this.a,r)
t=t.createElement("div")
this.c=t
J.j2(this.a,t)}}
R.fO.prototype={
dr:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.o.eT(s,2)+" fps"
t=this.c;(t&&C.i).d_(t,b)
r=C.b.K(30*C.o.e8(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.i).T(t,q)}}
A.aX.prototype={
k:function(a){return"NODE["+this.a+"]"}}
A.bO.prototype={}
A.fy.prototype={
bq:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.d
s=this.r
r=this.z
q=this.Q
p=t.a
t=t.b
J.j3(p.a,36160,t)
H.d(r>0&&q>0)
J.m3(p.a,this.x,this.y,r,q)
if(s!==0)J.ls(p.a,s)
for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.E)(t),++o){n=t[o]
m=n.e
C.a.i(m,new G.bW(P.I(),"transforms",!1,!0))
l=new T.J(new Float32Array(16))
l.F()
for(r=n.f,q=r.length,p=n.d,k=0;k<r.length;r.length===q||(0,H.E)(r),++k)A.l1(p,r[k],l,a,m)
m.pop()}},
dj:function(a,b,c){if(this.d==null)this.d=new G.cp(this.e,null,null,null,null)}}
A.iF.prototype={
$2:function(a,b){var t=536870911&a+J.aq(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(){return{func:1,args:[P.p,P.t]}}}
T.ak.prototype={
v:function(a){var t,s
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
k:function(a){return"[0] "+this.W(0).k(0)+"\n[1] "+this.W(1).k(0)+"\n[2] "+this.W(2).k(0)+"\n"},
h:function(a,b){return this.a[b]},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.ak){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gw:function(a){return A.dI(this.a)},
W:function(a){var t,s
t=new Float32Array(H.f(3))
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.h(t)},
ed:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
if(g===0){this.v(a)
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
T.J.prototype={
ab:function(a,b,c){H.d(a<4)
H.d(b<4)
this.a[b*4+a]=c},
v:function(a){var t,s
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
k:function(a){return"[0] "+this.W(0).k(0)+"\n[1] "+this.W(1).k(0)+"\n[2] "+this.W(2).k(0)+"\n[3] "+this.W(3).k(0)+"\n"},
h:function(a,b){return this.a[b]},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.J){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gw:function(a){return A.dI(this.a)},
W:function(a){var t,s
t=new Float32Array(H.f(4))
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.aK(t)},
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
T.o.prototype={
k:function(a){var t=this.a
return"["+H.i(t[0])+","+H.i(t[1])+"]"},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.o){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gw:function(a){return A.dI(this.a)},
h:function(a,b){return this.a[b]},
gl:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.h.prototype={
p:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
v:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
k:function(a){var t=this.a
return"["+H.i(t[0])+","+H.i(t[1])+","+H.i(t[2])+"]"},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.h){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gw:function(a){return A.dI(this.a)},
h:function(a,b){return this.a[b]},
gl:function(a){return Math.sqrt(this.gP())},
gP:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
C:function(a){var t,s,r
t=Math.sqrt(this.gP())
if(t===0)return 0
s=1/t
r=this.a
r[0]=r[0]*s
r[1]=r[1]*s
r[2]=r[2]*s
return t},
b4:function(a){var t,s
t=a.a
s=this.a
return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]},
aB:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.h(new Float32Array(H.f(3)))
t.p(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
i:function(a,b){var t,s
t=b.a
s=this.a
s[0]=s[0]+t[0]
s[1]=s[1]+t[1]
s[2]=s[2]+t[2]},
aK:function(a){var t,s
t=a.a
s=this.a
s[0]=s[0]-t[0]
s[1]=s[1]-t[1]
s[2]=s[2]-t[2]},
a2:function(a,b){var t=this.a
t[2]=t[2]*b
t[1]=t[1]*b
t[0]=t[0]*b},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gN:function(a){return this.a[2]}}
T.aK.prototype={
k:function(a){var t=this.a
return H.i(t[0])+","+H.i(t[1])+","+H.i(t[2])+","+H.i(t[3])},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aK){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gw:function(a){return A.dI(this.a)},
h:function(a,b){return this.a[b]},
gl:function(a){var t,s,r,q
t=this.a
s=t[0]
r=t[1]
q=t[2]
t=t[3]
return Math.sqrt(s*s+r*r+q*q+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gN:function(a){return this.a[2]},
gaG:function(a){return this.a[3]}}
V.iQ.prototype={
$1:function(b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
this.a.a=b5+0
t=this.c
t.go=H.a0(t.go+0.001)
s=t.k4
if(s.h(0,37)!=null)t.go=H.a0(t.go+0.03)
else if(s.h(0,39)!=null)t.go=H.a0(t.go-0.03)
if(s.h(0,38)!=null)t.id=H.a0(t.id+0.03)
else if(s.h(0,40)!=null)t.id=H.a0(t.id-0.03)
if(s.h(0,33)!=null)t.fy=H.a0(t.fy*0.99)
else if(s.h(0,34)!=null)t.fy=H.a0(t.fy*1.01)
if(s.h(0,32)!=null){t.go=0
t.id=0}s=H.a0(C.c.e9(t.id,-1.4707963267948965,1.4707963267948965))
t.id=s
r=t.fy
q=t.go
p=r*Math.cos(s)
t.ac(p*Math.cos(q),r*Math.sin(s),p*Math.sin(q))
q=t.k2
s=t.d.a
r=q.a
s[12]=s[12]+r[0]
s[13]=s[13]+r[1]
s[14]=s[14]+r[2]
r=s[12]
o=s[13]
n=s[14]
m=new T.h(new Float32Array(H.f(3)))
m.p(0,1,0)
l=t.e
k=l.a
k[0]=s[12]
k[1]=s[13]
k[2]=s[14]
k=new Float32Array(H.f(3))
j=new T.h(k)
j.v(l)
j.aK(q)
j.C(0)
i=m.aB(j)
i.C(0)
h=j.aB(i)
h.C(0)
q=i.b4(l)
g=h.b4(l)
l=j.b4(l)
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
n=Math.sqrt(n.gP())
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
t=$.$get$l5().checked?this.e:$.$get$fP()
this.f.d.j(0,"cStencilFunc",t)
b2=[]
this.d.bq(b2)
this.r.bq(b2)
b3=[]
for(t=b2.length,b4=0;b4<b2.length;b2.length===t||(0,H.E)(b2),++b4)C.a.i(b3,b2[b4].k(0))
C.a3.ge2(window).cu(this)
this.b.dr(b5,C.a.a8(b3,"<br>"))},
$S:function(){return{func:1,v:true,args:[P.X]}}}
J.a.prototype.d4=J.a.prototype.k
J.bE.prototype.d6=J.bE.prototype.k
P.Y.prototype.d5=P.Y.prototype.aH
W.a4.prototype.aL=W.a4.prototype.O
W.c2.prototype.d7=W.c2.prototype.Z;(function installTearOffs(){installTearOff(H.b5.prototype,"geD",0,0,0,null,["$0"],["aE"],0)
installTearOff(H.am.prototype,"gcS",0,0,0,null,["$1"],["M"],2)
installTearOff(H.b4.prototype,"gek",0,0,0,null,["$1"],["a0"],2)
installTearOff(P,"n8",1,0,0,null,["$1"],["mQ"],1)
installTearOff(P,"n9",1,0,0,null,["$1"],["mR"],1)
installTearOff(P,"na",1,0,0,null,["$1"],["mS"],1)
installTearOff(P,"kZ",1,0,0,null,["$0"],["n6"],0)
installTearOff(P.ay.prototype,"gdE",0,0,0,null,["$2","$1"],["aw","dF"],5)
installTearOff(P,"nf",1,0,0,null,["$2"],["ma"],6)
installTearOff(W,"nl",1,0,0,null,["$1"],["mi"],7)
installTearOff(W,"nm",1,0,0,null,["$4"],["mW"],4)
installTearOff(W,"nn",1,0,0,null,["$4"],["mX"],4)
installTearOff(W.di.prototype,"gb6",0,1,0,null,["$0"],["b7"],3)
installTearOff(W.dx.prototype,"gb6",0,1,0,null,["$0"],["b7"],3)
installTearOff(V,"li",1,0,0,null,["$0"],["nv"],0)})();(function inheritance(){inherit(P.t,null)
var t=P.t
inherit(H.jg,t)
inherit(J.a,t)
inherit(J.dS,t)
inherit(P.Y,t)
inherit(H.db,t)
inherit(P.d7,t)
inherit(H.cn,t)
inherit(H.b9,t)
inherit(H.i1,t)
inherit(H.b5,t)
inherit(H.hF,t)
inherit(H.b6,t)
inherit(H.i0,t)
inherit(H.hy,t)
inherit(H.bg,t)
inherit(H.h5,t)
inherit(H.ar,t)
inherit(H.am,t)
inherit(H.b4,t)
inherit(H.fx,t)
inherit(H.hc,t)
inherit(P.bc,t)
inherit(H.dF,t)
inherit(H.aI,t)
inherit(H.ai,t)
inherit(H.eO,t)
inherit(H.eQ,t)
inherit(P.hA,t)
inherit(P.dC,t)
inherit(P.ay,t)
inherit(P.dA,t)
inherit(P.fR,t)
inherit(P.fS,t)
inherit(P.b8,t)
inherit(P.ir,t)
inherit(P.fG,t)
inherit(P.hZ,t)
inherit(P.c0,t)
inherit(P.bN,t)
inherit(P.y,t)
inherit(P.i_,t)
inherit(P.az,t)
inherit(P.M,t)
inherit(P.bb,t)
inherit(P.X,t)
inherit(P.aD,t)
inherit(P.dt,t)
inherit(P.hK,t)
inherit(P.eb,t)
inherit(P.b,t)
inherit(P.aG,t)
inherit(P.aY,t)
inherit(P.bQ,t)
inherit(P.v,t)
inherit(P.bR,t)
inherit(W.e_,t)
inherit(W.hx,t)
inherit(W.c_,t)
inherit(W.B,t)
inherit(W.dk,t)
inherit(W.c2,t)
inherit(W.ii,t)
inherit(W.co,t)
inherit(W.dj,t)
inherit(W.ib,t)
inherit(W.dG,t)
inherit(P.i3,t)
inherit(G.f1,t)
inherit(G.dY,t)
inherit(G.cp,t)
inherit(G.z,t)
inherit(G.bA,t)
inherit(G.aR,t)
inherit(G.bV,t)
inherit(G.dw,t)
inherit(G.e7,t)
inherit(G.k,t)
inherit(G.bh,t)
inherit(G.h3,t)
inherit(G.bU,t)
inherit(R.fN,t)
inherit(T.ak,t)
inherit(T.J,t)
inherit(T.o,t)
inherit(T.h,t)
inherit(T.aK,t)
t=J.a
inherit(J.eJ,t)
inherit(J.eK,t)
inherit(J.bE,t)
inherit(J.aS,t)
inherit(J.bd,t)
inherit(J.aT,t)
inherit(H.bH,t)
inherit(H.bf,t)
inherit(W.j,t)
inherit(W.a2,t)
inherit(W.ce,t)
inherit(W.dW,t)
inherit(W.A,t)
inherit(W.ct,t)
inherit(W.e1,t)
inherit(W.e2,t)
inherit(W.e3,t)
inherit(W.cj,t)
inherit(W.ck,t)
inherit(W.cl,t)
inherit(W.cC,t)
inherit(W.e6,t)
inherit(W.m,t)
inherit(W.cB,t)
inherit(W.a6,t)
inherit(W.eB,t)
inherit(W.cN,t)
inherit(W.eS,t)
inherit(W.eY,t)
inherit(W.a7,t)
inherit(W.cz,t)
inherit(W.fa,t)
inherit(W.di,t)
inherit(W.cy,t)
inherit(W.fj,t)
inherit(W.bi,t)
inherit(W.a8,t)
inherit(W.cx,t)
inherit(W.al,t)
inherit(W.dp,t)
inherit(W.aa,t)
inherit(W.cM,t)
inherit(W.ab,t)
inherit(W.fQ,t)
inherit(W.Z,t)
inherit(W.cL,t)
inherit(W.h4,t)
inherit(W.ad,t)
inherit(W.cD,t)
inherit(W.h9,t)
inherit(W.dx,t)
inherit(W.hi,t)
inherit(W.hn,t)
inherit(W.hz,t)
inherit(W.cu,t)
inherit(W.cI,t)
inherit(W.cH,t)
inherit(W.cG,t)
inherit(W.cw,t)
inherit(W.cE,t)
inherit(W.ip,t)
inherit(W.iq,t)
inherit(P.as,t)
inherit(P.cJ,t)
inherit(P.at,t)
inherit(P.cA,t)
inherit(P.fp,t)
inherit(P.fq,t)
inherit(P.fv,t)
inherit(P.cv,t)
inherit(P.au,t)
inherit(P.cF,t)
inherit(P.hm,t)
inherit(P.dT,t)
inherit(P.fA,t)
inherit(P.fB,t)
inherit(P.io,t)
inherit(P.cK,t)
t=J.bE
inherit(J.fn,t)
inherit(J.b1,t)
inherit(J.aU,t)
inherit(J.jf,J.aS)
t=J.bd
inherit(J.d9,t)
inherit(J.d8,t)
t=P.Y
inherit(H.c,t)
inherit(H.dc,t)
inherit(H.dz,t)
t=H.c
inherit(H.be,t)
inherit(H.eP,t)
inherit(H.ea,H.dc)
t=P.d7
inherit(H.eT,t)
inherit(H.hp,t)
t=H.be
inherit(H.bF,t)
inherit(P.eR,t)
t=H.b9
inherit(H.j_,t)
inherit(H.j0,t)
inherit(H.hX,t)
inherit(H.hG,t)
inherit(H.eF,t)
inherit(H.eG,t)
inherit(H.i2,t)
inherit(H.h6,t)
inherit(H.h7,t)
inherit(H.j1,t)
inherit(H.iK,t)
inherit(H.iL,t)
inherit(H.iM,t)
inherit(H.iN,t)
inherit(H.iO,t)
inherit(H.h_,t)
inherit(H.eL,t)
inherit(H.iG,t)
inherit(H.iH,t)
inherit(H.iI,t)
inherit(P.hu,t)
inherit(P.ht,t)
inherit(P.hv,t)
inherit(P.hw,t)
inherit(P.hL,t)
inherit(P.hP,t)
inherit(P.hM,t)
inherit(P.hN,t)
inherit(P.hO,t)
inherit(P.hS,t)
inherit(P.hT,t)
inherit(P.hR,t)
inherit(P.hQ,t)
inherit(P.fT,t)
inherit(P.fU,t)
inherit(P.iu,t)
inherit(P.i6,t)
inherit(P.i5,t)
inherit(P.i7,t)
inherit(P.eU,t)
inherit(P.e8,t)
inherit(P.e9,t)
inherit(W.ix,t)
inherit(W.hq,t)
inherit(W.hJ,t)
inherit(W.fc,t)
inherit(W.fb,t)
inherit(W.id,t)
inherit(W.ie,t)
inherit(W.il,t)
inherit(W.im,t)
inherit(P.iy,t)
inherit(B.iV,t)
inherit(B.iW,t)
inherit(B.iX,t)
inherit(B.iY,t)
inherit(B.iZ,t)
inherit(B.ff,t)
inherit(B.fg,t)
inherit(B.fh,t)
inherit(B.fi,t)
inherit(A.iF,t)
inherit(V.iQ,t)
t=H.hy
inherit(H.bj,t)
inherit(H.c3,t)
t=P.bc
inherit(H.dl,t)
inherit(H.eM,t)
inherit(H.hh,t)
inherit(H.he,t)
inherit(H.dX,t)
inherit(H.fD,t)
inherit(P.cd,t)
inherit(P.dm,t)
inherit(P.ag,t)
inherit(P.w,t)
inherit(P.dy,t)
inherit(P.aH,t)
inherit(P.a3,t)
inherit(P.e0,t)
t=H.h_
inherit(H.fM,t)
inherit(H.br,t)
inherit(H.hs,P.cd)
t=H.bf
inherit(H.f2,t)
inherit(H.de,t)
t=H.de
inherit(H.bJ,t)
inherit(H.bI,t)
inherit(H.bK,H.bJ)
inherit(H.df,H.bK)
inherit(H.bL,H.bI)
inherit(H.dg,H.bL)
t=H.df
inherit(H.dd,t)
inherit(H.f3,t)
t=H.dg
inherit(H.f4,t)
inherit(H.f5,t)
inherit(H.f6,t)
inherit(H.f7,t)
inherit(H.f8,t)
inherit(H.dh,t)
inherit(H.f9,t)
inherit(P.ij,P.hA)
inherit(P.i4,P.ir)
inherit(P.dD,H.ai)
inherit(P.fF,P.fG)
inherit(P.hW,P.fF)
inherit(P.hY,P.hW)
inherit(P.da,P.bN)
t=P.X
inherit(P.P,t)
inherit(P.p,t)
t=P.ag
inherit(P.dq,t)
inherit(P.eE,t)
t=W.j
inherit(W.u,t)
inherit(W.bu,t)
inherit(W.dZ,t)
inherit(W.ev,t)
inherit(W.bC,t)
inherit(W.bG,t)
inherit(W.fs,t)
inherit(W.dr,t)
inherit(W.fH,t)
inherit(W.a9,t)
inherit(W.bv,t)
inherit(W.ac,t)
inherit(W.a_,t)
inherit(W.bw,t)
inherit(W.hk,t)
inherit(W.ho,t)
inherit(W.bX,t)
inherit(W.hr,t)
inherit(W.b3,t)
inherit(W.ic,t)
t=W.u
inherit(W.a4,t)
inherit(W.aQ,t)
inherit(W.bs,t)
inherit(W.ci,t)
inherit(W.hC,t)
t=W.a4
inherit(W.n,t)
inherit(P.K,t)
t=W.n
inherit(W.dQ,t)
inherit(W.dR,t)
inherit(W.aP,t)
inherit(W.cf,t)
inherit(W.ch,t)
inherit(W.ez,t)
inherit(W.cr,t)
inherit(W.bD,t)
inherit(W.fE,t)
inherit(W.du,t)
inherit(W.fY,t)
inherit(W.fZ,t)
inherit(W.bS,t)
inherit(W.hV,t)
inherit(W.bz,W.bu)
inherit(W.dU,W.bz)
inherit(W.ba,W.ct)
inherit(W.e4,W.ck)
inherit(W.d5,W.cC)
inherit(W.e5,W.d5)
inherit(W.a5,W.ce)
inherit(W.d3,W.cB)
inherit(W.eu,W.d3)
inherit(W.cY,W.cN)
inherit(W.bB,W.cY)
inherit(W.cs,W.bs)
inherit(W.eC,W.bC)
inherit(W.aJ,W.m)
t=W.aJ
inherit(W.aV,t)
inherit(W.Q,t)
inherit(W.b0,t)
inherit(W.f_,W.bG)
inherit(W.d_,W.cz)
inherit(W.f0,W.d_)
inherit(W.U,P.da)
inherit(W.cP,W.cy)
inherit(W.bM,W.cP)
t=W.bi
inherit(W.fm,t)
inherit(W.fC,t)
inherit(W.hb,t)
inherit(W.cV,W.cx)
inherit(W.fo,W.cV)
inherit(W.fr,W.al)
inherit(W.by,W.bv)
inherit(W.fI,W.by)
inherit(W.d4,W.cM)
inherit(W.fK,W.d4)
inherit(W.cO,W.cL)
inherit(W.h1,W.cO)
inherit(W.bx,W.bw)
inherit(W.h2,W.bx)
inherit(W.cR,W.cD)
inherit(W.h8,W.cR)
inherit(W.b2,W.Q)
inherit(W.d6,W.cu)
inherit(W.dB,W.d6)
inherit(W.d0,W.cI)
inherit(W.hB,W.d0)
inherit(W.hD,W.cl)
inherit(W.d2,W.cH)
inherit(W.hU,W.d2)
inherit(W.cQ,W.cG)
inherit(W.dE,W.cQ)
inherit(W.cZ,W.cw)
inherit(W.ig,W.cZ)
inherit(W.cS,W.cE)
inherit(W.ih,W.cS)
inherit(W.hE,W.hx)
inherit(W.hH,P.fR)
inherit(W.js,W.hH)
inherit(W.hI,P.fS)
inherit(W.ik,W.c2)
inherit(P.N,P.i3)
t=P.K
inherit(P.aF,t)
inherit(P.aO,t)
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
inherit(P.eq,t)
inherit(P.er,t)
inherit(P.es,t)
inherit(P.et,t)
inherit(P.ew,t)
inherit(P.eV,t)
inherit(P.eW,t)
inherit(P.fk,t)
inherit(P.bP,t)
inherit(P.fX,t)
inherit(P.hl,t)
inherit(P.bZ,t)
inherit(P.i8,t)
inherit(P.i9,t)
inherit(P.ia,t)
t=P.aF
inherit(P.dP,t)
inherit(P.ey,t)
inherit(P.ah,t)
inherit(P.eD,t)
inherit(P.fW,t)
inherit(P.dv,t)
inherit(P.hj,t)
inherit(P.cT,P.cJ)
inherit(P.eN,P.cT)
inherit(P.d1,P.cA)
inherit(P.fd,P.d1)
inherit(P.fw,P.ah)
inherit(P.cW,P.cv)
inherit(P.fV,P.cW)
t=P.dv
inherit(P.h0,t)
inherit(P.bT,t)
inherit(P.cU,P.cF)
inherit(P.ha,P.cU)
inherit(P.cX,P.cK)
inherit(P.fL,P.cX)
t=G.f1
inherit(G.fJ,t)
inherit(G.bW,t)
inherit(G.eZ,t)
inherit(G.fz,t)
inherit(A.bO,t)
inherit(A.fy,t)
t=G.fJ
inherit(G.dV,t)
inherit(A.aX,t)
inherit(B.fe,G.dV)
t=G.bW
inherit(G.eX,t)
inherit(G.fl,t)
t=G.bU
inherit(G.hf,t)
inherit(G.hg,t)
inherit(R.fO,R.fN)
mixin(H.bI,P.y)
mixin(H.bJ,P.y)
mixin(H.bK,H.cn)
mixin(H.bL,H.cn)
mixin(P.bN,P.y)
mixin(W.bu,P.y)
mixin(W.bv,P.y)
mixin(W.bw,P.y)
mixin(W.bx,W.B)
mixin(W.by,W.B)
mixin(W.bz,W.B)
mixin(W.ct,W.e_)
mixin(W.cN,P.y)
mixin(W.cz,P.y)
mixin(W.cw,P.y)
mixin(W.cG,P.y)
mixin(W.cH,P.y)
mixin(W.cI,P.y)
mixin(W.cL,P.y)
mixin(W.cM,P.y)
mixin(W.cu,P.y)
mixin(W.cx,P.y)
mixin(W.cy,P.y)
mixin(W.cB,P.y)
mixin(W.cC,P.y)
mixin(W.cD,P.y)
mixin(W.cE,P.y)
mixin(W.cO,W.B)
mixin(W.cP,W.B)
mixin(W.cQ,W.B)
mixin(W.d_,W.B)
mixin(W.d0,W.B)
mixin(W.cY,W.B)
mixin(W.cZ,W.B)
mixin(W.d3,W.B)
mixin(W.d4,W.B)
mixin(W.d5,W.B)
mixin(W.d6,W.B)
mixin(W.cR,W.B)
mixin(W.cS,W.B)
mixin(W.cV,W.B)
mixin(W.d2,W.B)
mixin(P.cJ,P.y)
mixin(P.cv,P.y)
mixin(P.cA,P.y)
mixin(P.cF,P.y)
mixin(P.cT,W.B)
mixin(P.cU,W.B)
mixin(P.cW,W.B)
mixin(P.d1,W.B)
mixin(P.cK,P.y)
mixin(P.cX,W.B)})();(function constants(){C.h=W.aP.prototype
C.w=W.cf.prototype
C.m=W.ba.prototype
C.i=W.ch.prototype
C.x=W.cj.prototype
C.y=W.cr.prototype
C.f=W.cs.prototype
C.z=J.a.prototype
C.a=J.aS.prototype
C.o=J.d8.prototype
C.b=J.d9.prototype
C.c=J.bd.prototype
C.e=J.aT.prototype
C.G=J.aU.prototype
C.K=H.dd.prototype
C.r=W.bM.prototype
C.t=J.fn.prototype
C.u=W.dp.prototype
C.v=W.du.prototype
C.l=J.b1.prototype
C.a2=W.b2.prototype
C.a3=W.bX.prototype
C.d=new P.i4()
C.n=new P.aD(0)
C.A=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.B=function(hooks) {
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
C.p=function(hooks) { return hooks; }

C.C=function(getTagFallback) {
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
C.D=function() {
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
C.E=function(hooks) {
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
C.F=function(hooks) {
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
C.q=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.H=H.D(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.v])
C.I=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.J=makeConstList([])
C.j=H.D(makeConstList(["bind","if","ref","repeat","syntax"]),[P.v])
C.k=H.D(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.v])
C.L=H.O("nG")
C.M=H.O("nH")
C.N=H.O("ex")
C.O=H.O("nI")
C.P=H.O("nJ")
C.Q=H.O("kj")
C.R=H.O("nK")
C.S=H.O("km")
C.T=H.O("aY")
C.U=H.O("v")
C.V=H.O("kH")
C.W=H.O("kI")
C.X=H.O("nL")
C.Y=H.O("kJ")
C.Z=H.O("az")
C.a_=H.O("P")
C.a0=H.O("p")
C.a1=H.O("X")})();(function staticFields(){$.kq="$cachedFunction"
$.kr="$cachedInvocation"
$.k0=null
$.jZ=null
$.ju=!1
$.jy=null
$.kW=null
$.le=null
$.iB=null
$.iJ=null
$.jz=null
$.bk=null
$.c4=null
$.c5=null
$.jv=!1
$.F=C.d
$.kf=0
$.aE=null
$.jc=null
$.kd=null
$.kc=null
$.ka=null
$.k9=null
$.k8=null
$.k7=null
$.nc=0
$.nd=0
$.jD=0
$.lc=0
$.ca=0
$.cb=0
$.nC=!1
$.l4=0})();(function lazyInitializers(){lazy($,"k6","$get$k6",function(){return H.l8("_$dart_dartClosure")})
lazy($,"jh","$get$jh",function(){return H.l8("_$dart_js")})
lazy($,"kk","$get$kk",function(){return H.ms()})
lazy($,"kl","$get$kl",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.kf
$.kf=t+1
t="expando$key$"+t}return new P.eb(null,t,[P.p])})
lazy($,"kw","$get$kw",function(){return H.av(H.hd({
toString:function(){return"$receiver$"}}))})
lazy($,"kx","$get$kx",function(){return H.av(H.hd({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"ky","$get$ky",function(){return H.av(H.hd(null))})
lazy($,"kz","$get$kz",function(){return H.av(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kD","$get$kD",function(){return H.av(H.hd(void 0))})
lazy($,"kE","$get$kE",function(){return H.av(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kB","$get$kB",function(){return H.av(H.kC(null))})
lazy($,"kA","$get$kA",function(){return H.av(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"kG","$get$kG",function(){return H.av(H.kC(void 0))})
lazy($,"kF","$get$kF",function(){return H.av(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"jr","$get$jr",function(){return P.mP()})
lazy($,"c6","$get$c6",function(){return[]})
lazy($,"k5","$get$k5",function(){return{}})
lazy($,"kP","$get$kP",function(){return P.jj(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"jt","$get$jt",function(){return P.I()})
lazy($,"iA","$get$iA",function(){return P.kn(P.p,P.az)})
lazy($,"c8","$get$c8",function(){return P.kn(P.v,P.az)})
lazy($,"fP","$get$fP",function(){return new G.bV(1281,0,4294967295)})
lazy($,"jX","$get$jX",function(){return new G.dw(1281,1281,1281)})
lazy($,"V","$get$V",function(){return P.aW(["cBlendEquation",new G.k("","",0),"cDepthWrite",new G.k("","",0),"cDepthTest",new G.k("","",0),"cStencilFunc",new G.k("","",0),"tPosition",new G.k("vec3","",0),"tSpeed",new G.k("vec3","",0),"tForce",new G.k("vec3","",0),"aColors",new G.k("vec3","per vertex color",0),"aColorAlpha",new G.k("vec4","per vertex color",0),"aPosition",new G.k("vec3","vertex coordinates",0),"aTexUV",new G.k("vec2","texture uvs",0),"aNormal",new G.k("vec3","vertex normals",0),"aBinormal",new G.k("vec3","vertex binormals",0),"aCenter",new G.k("vec4","for wireframe",0),"aPointSize",new G.k("float","",0),"aBoneIndex",new G.k("vec4","",0),"aBoneWeight",new G.k("vec4","",0),"aTangent",new G.k("vec3","vertex tangents",0),"aBitangent",new G.k("vec3","vertex btangents",0),"iaRotation",new G.k("vec4","",0),"iaTranslation",new G.k("vec3","",0),"iaScale",new G.k("vec3","",0),"vColor",new G.k("vec3","per vertex color",0),"vTexUV",new G.k("vec2","",0),"vLightWeighting",new G.k("vec3","",0),"vNormal",new G.k("vec3","",0),"vPosition",new G.k("vec3","vertex coordinates",0),"vPositionFromLight",new G.k("vec4","delta from light",0),"vCenter",new G.k("vec4","for wireframe",0),"vDepth",new G.k("float","depth for shadowmaps",0),"uTransformationMatrix",new G.k("mat4","",0),"uModelMatrix",new G.k("mat4","",0),"uNormalMatrix",new G.k("mat3","",0),"uConvolutionMatrix",new G.k("mat3","",0),"uPerspectiveViewMatrix",new G.k("mat4","",0),"uLightPerspectiveViewMatrix",new G.k("mat4","",0),"uShadowMap",new G.k("sampler2DShadow","",0),"uTexture",new G.k("sampler2D","",0),"uTexture2",new G.k("sampler2D","",0),"uTexture3",new G.k("sampler2D","",0),"uTexture4",new G.k("sampler2D","",0),"uSpecularMap",new G.k("sampler2D","",0),"uNormalMap",new G.k("sampler2D","",0),"uBumpMap",new G.k("sampler2D","",0),"uDepthMap",new G.k("sampler2D","",0),"uCubeTexture",new G.k("samplerCube","",0),"uAnimationTable",new G.k("sampler2D","",0),"uTime",new G.k("float","time since program start in sec",0),"uCameraNear",new G.k("float","",0),"uCameraFar",new G.k("float","",0),"uFogNear",new G.k("float","",0),"uFogFar",new G.k("float","",0),"uPointSize",new G.k("float","",0),"uScale",new G.k("float","",0),"uAngle",new G.k("float","",0),"uCanvasSize",new G.k("vec2","",0),"uCenter2",new G.k("vec2","",0),"uCutOff",new G.k("float","",0),"uShininess",new G.k("float","",0),"uShadowBias",new G.k("float","",0),"uOpacity",new G.k("float","",0),"uColor",new G.k("vec3","",0),"uAmbientDiffuse",new G.k("vec3","",0),"uColorEmissive",new G.k("vec3","",0),"uColorSpecular",new G.k("vec3","",0),"uColorDiffuse",new G.k("vec3","",0),"uColorAlpha",new G.k("vec4","",0),"uColorAlpha2",new G.k("vec4","",0),"uEyePosition",new G.k("vec3","",0),"uMaterial",new G.k("mat4","",0),"uRange",new G.k("vec2","",0),"uDirection",new G.k("vec2","",0),"uBoneMatrices",new G.k("mat4","",128),"uLightDescs",new G.k("mat4","",4),"uLightCount",new G.k("float","",0),"uLightTypes",new G.k("float","",4),"uBumpScale",new G.k("float","for bump maps",0),"uNormalScale",new G.k("float","for normal maps",0)])})
lazy($,"jo","$get$jo",function(){var t=new G.h3(!1,!1,!1,!0,1,9729,9729)
t.d=!1
t.b=!0
t.f=9728
t.r=9728
return t})
lazy($,"ke","$get$ke",function(){return G.jm("empty-mat")})
lazy($,"k3","$get$k3",function(){return T.L(0,0,1)})
lazy($,"k4","$get$k4",function(){return T.L(1,0,0)})
lazy($,"l2","$get$l2",function(){var t=new G.bh("uv-passthru",null,[],[],[],[],0,P.I())
t.bm(["aPosition","aTexUV"])
t.bo(["vTexUV"])
t.av(["gl_Position = vec4(aPosition, 1.0);","vTexUV = aTexUV;"])
return t})
lazy($,"l0","$get$l0",function(){return $.$get$l2()})
lazy($,"l_","$get$l_",function(){var t=new G.bh("copyF",null,[],[],[],[],0,P.I())
t.bo(["vTexUV"])
t.aN(["uTexture"])
t.av(["oFragColor = texture(uTexture, vTexUV);"])
return t})
lazy($,"lg","$get$lg",function(){var t=new G.bh("SolidColor",null,[],[],[],[],0,P.I())
t.bm(["aPosition"])
t.aN(["uPerspectiveViewMatrix","uModelMatrix"])
t.av(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"])
return t})
lazy($,"lf","$get$lf",function(){var t=new G.bh("SolidColorF",null,[],[],[],[],0,P.I())
t.aN(["uColor"])
t.av(["oFragColor = vec4( uColor, 1.0 );"])
return t})
lazy($,"kM","$get$kM",function(){return[T.L(0,0,1),T.L(0,0,-1),T.L(0,1,0),T.L(0,-1,0),T.L(1,0,0),T.L(-1,0,0)]})
lazy($,"kh","$get$kh",function(){return[new G.z(0,11,5),new G.z(0,5,1),new G.z(0,1,7),new G.z(0,7,10),new G.z(0,10,11),new G.z(1,5,9),new G.z(5,11,4),new G.z(11,10,2),new G.z(10,7,6),new G.z(7,1,8),new G.z(3,9,4),new G.z(3,4,2),new G.z(3,2,6),new G.z(3,6,8),new G.z(3,8,9),new G.z(4,9,5),new G.z(2,4,11),new G.z(6,2,10),new G.z(8,6,7),new G.z(9,8,1)]})
lazy($,"lj","$get$lj",function(){return(1+P.nD(5))/2})
lazy($,"ki","$get$ki",function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=$.$get$lj()
s=T.L(-1,t,0)
s.C(0)
r=T.L(1,t,0)
r.C(0)
q=T.L(-1,-t,0)
q.C(0)
p=T.L(1,-t,0)
p.C(0)
o=T.L(0,-1,t)
o.C(0)
n=T.L(0,1,t)
n.C(0)
m=T.L(0,-1,-t)
m.C(0)
l=T.L(0,1,-t)
l.C(0)
k=T.L(t,0,-1)
k.C(0)
j=T.L(t,0,1)
j.C(0)
i=T.L(-t,0,-1)
i.C(0)
t=T.L(-t,0,1)
t.C(0)
return[s,r,q,p,o,n,m,l,k,j,i,t]})
lazy($,"iS","$get$iS",function(){return T.kK()})
lazy($,"jE","$get$jE",function(){return T.kK()})
lazy($,"l5","$get$l5",function(){return H.aA(C.f.cn(W.ng(),"#stencil"),"$isbD")})})()
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
mangledGlobalNames:{p:"int",P:"double",X:"num",v:"String",az:"bool",aY:"Null",b:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.u},{func:1,ret:P.az,args:[W.a4,P.v,P.v,W.c_]},{func:1,v:true,args:[P.t],opt:[P.bQ]},{func:1,ret:P.p,args:[P.M,P.M]},{func:1,ret:P.v,args:[W.j]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationTimeline:J.a,AppBannerPromptResult:J.a,BarProp:J.a,Body:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CHROMIUMValuebuffer:J.a,CircularGeofencingRegion:J.a,Client:J.a,Clients:J.a,CompositorProxy:J.a,ConsoleBase:J.a,Coordinates:J.a,Credential:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMStringMap:J.a,EffectModel:J.a,Entry:J.a,FederatedCredential:J.a,FileEntry:J.a,FileError:J.a,Stream:J.a,DOMFileSystem:J.a,FontFace:J.a,FormData:J.a,GamepadButton:J.a,Geofencing:J.a,GeofencingRegion:J.a,Geolocation:J.a,Geoposition:J.a,Headers:J.a,HMDVRDevice:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageData:J.a,InjectedScriptHost:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,KeyframeEffect:J.a,MediaDeviceInfo:J.a,MediaDevices:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaMetadata:J.a,MediaSession:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigatorStorageUtils:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,OffscreenCanvas:J.a,PasswordCredential:J.a,PerformanceCompositeTiming:J.a,PerformanceEntry:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformanceRenderTiming:J.a,PerformanceResourceTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PositionError:J.a,PositionSensorVRDevice:J.a,Presentation:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,ReadableByteStream:J.a,ReadableByteStreamReader:J.a,ReadableStreamReader:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,Selection:J.a,ServicePort:J.a,SharedArrayBuffer:J.a,SourceInfo:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StorageInfo:J.a,StorageManager:J.a,StorageQuota:J.a,StyleMedia:J.a,StylePropertyMap:J.a,SyncManager:J.a,TextMetrics:J.a,TrackDefault:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRDevice:J.a,VREyeParameters:J.a,VRFieldOfView:J.a,VRPositionState:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkerConsole:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothAdvertisingData:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,NFC:J.a,PagePopupController:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WebKitCSSMatrix:J.a,Worklet:J.a,WorkletGlobalScope:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPreserveAspectRatio:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,CHROMIUMSubscribeUniform:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTDisjointTimerQuery:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bH,ArrayBufferView:H.bf,DataView:H.f2,Float32Array:H.dd,Float64Array:H.f3,Int16Array:H.f4,Int32Array:H.f5,Int8Array:H.f6,Uint16Array:H.f7,Uint32Array:H.f8,Uint8ClampedArray:H.dh,CanvasPixelArray:H.dh,Uint8Array:H.f9,HTMLAudioElement:W.n,HTMLBRElement:W.n,HTMLBaseElement:W.n,HTMLButtonElement:W.n,HTMLContentElement:W.n,HTMLDListElement:W.n,HTMLDataListElement:W.n,HTMLDetailsElement:W.n,HTMLDialogElement:W.n,HTMLEmbedElement:W.n,HTMLFieldSetElement:W.n,HTMLHRElement:W.n,HTMLHeadingElement:W.n,HTMLHtmlElement:W.n,HTMLIFrameElement:W.n,HTMLImageElement:W.n,HTMLKeygenElement:W.n,HTMLLIElement:W.n,HTMLLabelElement:W.n,HTMLLegendElement:W.n,HTMLLinkElement:W.n,HTMLMapElement:W.n,HTMLMediaElement:W.n,HTMLMenuElement:W.n,HTMLMenuItemElement:W.n,HTMLMetaElement:W.n,HTMLMeterElement:W.n,HTMLModElement:W.n,HTMLOListElement:W.n,HTMLObjectElement:W.n,HTMLOptGroupElement:W.n,HTMLOptionElement:W.n,HTMLOutputElement:W.n,HTMLParagraphElement:W.n,HTMLParamElement:W.n,HTMLPictureElement:W.n,HTMLPreElement:W.n,HTMLProgressElement:W.n,HTMLQuoteElement:W.n,HTMLScriptElement:W.n,HTMLShadowElement:W.n,HTMLSlotElement:W.n,HTMLSourceElement:W.n,HTMLSpanElement:W.n,HTMLStyleElement:W.n,HTMLTableCaptionElement:W.n,HTMLTableCellElement:W.n,HTMLTableDataCellElement:W.n,HTMLTableHeaderCellElement:W.n,HTMLTableColElement:W.n,HTMLTextAreaElement:W.n,HTMLTitleElement:W.n,HTMLTrackElement:W.n,HTMLUListElement:W.n,HTMLUnknownElement:W.n,HTMLVideoElement:W.n,HTMLDirectoryElement:W.n,HTMLFontElement:W.n,HTMLFrameElement:W.n,HTMLMarqueeElement:W.n,HTMLElement:W.n,HTMLAnchorElement:W.dQ,HTMLAreaElement:W.dR,AudioTrack:W.a2,AudioTrackList:W.dU,Blob:W.ce,HTMLBodyElement:W.aP,HTMLCanvasElement:W.cf,CanvasRenderingContext2D:W.dW,CDATASection:W.aQ,CharacterData:W.aQ,Comment:W.aQ,ProcessingInstruction:W.aQ,Text:W.aQ,CompositorWorker:W.dZ,CSSCharsetRule:W.A,CSSFontFaceRule:W.A,CSSGroupingRule:W.A,CSSImportRule:W.A,CSSKeyframeRule:W.A,MozCSSKeyframeRule:W.A,WebKitCSSKeyframeRule:W.A,CSSKeyframesRule:W.A,MozCSSKeyframesRule:W.A,WebKitCSSKeyframesRule:W.A,CSSMediaRule:W.A,CSSNamespaceRule:W.A,CSSPageRule:W.A,CSSRule:W.A,CSSStyleRule:W.A,CSSSupportsRule:W.A,CSSViewportRule:W.A,CSSStyleDeclaration:W.ba,MSStyleCSSProperties:W.ba,CSS2Properties:W.ba,DataTransferItemList:W.e1,DeviceAcceleration:W.e2,HTMLDivElement:W.ch,XMLDocument:W.bs,Document:W.bs,DocumentFragment:W.ci,ShadowRoot:W.ci,DOMException:W.e3,DOMImplementation:W.cj,DOMPoint:W.e4,DOMPointReadOnly:W.ck,DOMRectReadOnly:W.cl,DOMStringList:W.e5,DOMTokenList:W.e6,Element:W.a4,AnimationEvent:W.m,AnimationPlayerEvent:W.m,ApplicationCacheErrorEvent:W.m,AutocompleteErrorEvent:W.m,BeforeInstallPromptEvent:W.m,BeforeUnloadEvent:W.m,BlobEvent:W.m,ClipboardEvent:W.m,CloseEvent:W.m,CustomEvent:W.m,DeviceLightEvent:W.m,DeviceMotionEvent:W.m,DeviceOrientationEvent:W.m,ErrorEvent:W.m,ExtendableEvent:W.m,ExtendableMessageEvent:W.m,FetchEvent:W.m,FontFaceSetLoadEvent:W.m,GamepadEvent:W.m,GeofencingEvent:W.m,HashChangeEvent:W.m,InstallEvent:W.m,MediaEncryptedEvent:W.m,MediaKeyMessageEvent:W.m,MediaQueryListEvent:W.m,MediaStreamEvent:W.m,MediaStreamTrackEvent:W.m,MessageEvent:W.m,MIDIConnectionEvent:W.m,MIDIMessageEvent:W.m,NotificationEvent:W.m,PageTransitionEvent:W.m,PopStateEvent:W.m,PresentationConnectionAvailableEvent:W.m,PresentationConnectionCloseEvent:W.m,ProgressEvent:W.m,PromiseRejectionEvent:W.m,PushEvent:W.m,RelatedEvent:W.m,RTCDataChannelEvent:W.m,RTCDTMFToneChangeEvent:W.m,RTCIceCandidateEvent:W.m,RTCPeerConnectionIceEvent:W.m,SecurityPolicyViolationEvent:W.m,ServicePortConnectEvent:W.m,ServiceWorkerMessageEvent:W.m,SpeechRecognitionError:W.m,SpeechRecognitionEvent:W.m,SpeechSynthesisEvent:W.m,StorageEvent:W.m,SyncEvent:W.m,TrackEvent:W.m,TransitionEvent:W.m,WebKitTransitionEvent:W.m,ResourceProgressEvent:W.m,USBConnectionEvent:W.m,IDBVersionChangeEvent:W.m,AudioProcessingEvent:W.m,OfflineAudioCompletionEvent:W.m,WebGLContextEvent:W.m,Event:W.m,InputEvent:W.m,Animation:W.j,ApplicationCache:W.j,DOMApplicationCache:W.j,OfflineResourceList:W.j,BatteryManager:W.j,CanvasCaptureMediaStreamTrack:W.j,CrossOriginServiceWorkerClient:W.j,EventSource:W.j,FileReader:W.j,FontFaceSet:W.j,MediaKeySession:W.j,MediaQueryList:W.j,MediaRecorder:W.j,MediaSource:W.j,MediaStream:W.j,MediaStreamTrack:W.j,MessagePort:W.j,MIDIAccess:W.j,NetworkInformation:W.j,Notification:W.j,Performance:W.j,PermissionStatus:W.j,PresentationAvailability:W.j,PresentationReceiver:W.j,PresentationRequest:W.j,RTCDTMFSender:W.j,RTCPeerConnection:W.j,webkitRTCPeerConnection:W.j,mozRTCPeerConnection:W.j,ScreenOrientation:W.j,ServicePortCollection:W.j,ServiceWorkerContainer:W.j,ServiceWorkerRegistration:W.j,SpeechRecognition:W.j,SpeechSynthesis:W.j,SpeechSynthesisUtterance:W.j,WorkerPerformance:W.j,BluetoothDevice:W.j,BluetoothRemoteGATTCharacteristic:W.j,USB:W.j,IDBDatabase:W.j,IDBOpenDBRequest:W.j,IDBVersionChangeRequest:W.j,IDBRequest:W.j,IDBTransaction:W.j,AnalyserNode:W.j,RealtimeAnalyserNode:W.j,AudioBufferSourceNode:W.j,AudioContext:W.j,webkitAudioContext:W.j,AudioDestinationNode:W.j,AudioNode:W.j,AudioSourceNode:W.j,BiquadFilterNode:W.j,ChannelMergerNode:W.j,AudioChannelMerger:W.j,ChannelSplitterNode:W.j,AudioChannelSplitter:W.j,ConvolverNode:W.j,DelayNode:W.j,DynamicsCompressorNode:W.j,GainNode:W.j,AudioGainNode:W.j,IIRFilterNode:W.j,MediaElementAudioSourceNode:W.j,MediaStreamAudioDestinationNode:W.j,MediaStreamAudioSourceNode:W.j,OfflineAudioContext:W.j,OscillatorNode:W.j,Oscillator:W.j,PannerNode:W.j,AudioPannerNode:W.j,webkitAudioPannerNode:W.j,ScriptProcessorNode:W.j,JavaScriptAudioNode:W.j,StereoPannerNode:W.j,WaveShaperNode:W.j,EventTarget:W.j,File:W.a5,FileList:W.eu,FileWriter:W.ev,HTMLFormElement:W.ez,Gamepad:W.a6,HTMLHeadElement:W.cr,History:W.eB,HTMLCollection:W.bB,HTMLFormControlsCollection:W.bB,HTMLOptionsCollection:W.bB,HTMLDocument:W.cs,XMLHttpRequest:W.eC,XMLHttpRequestUpload:W.bC,XMLHttpRequestEventTarget:W.bC,HTMLInputElement:W.bD,KeyboardEvent:W.aV,Location:W.eS,MediaList:W.eY,MIDIOutput:W.f_,MIDIInput:W.bG,MIDIPort:W.bG,MimeType:W.a7,MimeTypeArray:W.f0,PointerEvent:W.Q,MouseEvent:W.Q,DragEvent:W.Q,Navigator:W.fa,Attr:W.u,Node:W.u,NodeIterator:W.di,NodeList:W.bM,RadioNodeList:W.bM,Path2D:W.fj,Perspective:W.fm,Plugin:W.a8,PluginArray:W.fo,PositionValue:W.fr,PresentationConnection:W.fs,Range:W.dp,Rotation:W.fC,RTCDataChannel:W.dr,DataChannel:W.dr,HTMLSelectElement:W.fE,SharedWorker:W.fH,SourceBuffer:W.a9,SourceBufferList:W.fI,SpeechGrammar:W.aa,SpeechGrammarList:W.fK,SpeechRecognitionResult:W.ab,Storage:W.fQ,CSSStyleSheet:W.Z,StyleSheet:W.Z,CalcLength:W.al,KeywordValue:W.al,LengthValue:W.al,NumberValue:W.al,SimpleLength:W.al,TransformValue:W.al,StyleValue:W.al,HTMLTableElement:W.du,HTMLTableRowElement:W.fY,HTMLTableSectionElement:W.fZ,HTMLTemplateElement:W.bS,TextTrack:W.ac,TextTrackCue:W.a_,VTTCue:W.a_,TextTrackCueList:W.h1,TextTrackList:W.h2,TimeRanges:W.h4,Touch:W.ad,TouchEvent:W.b0,TouchList:W.h8,TrackDefaultList:W.h9,Matrix:W.bi,Skew:W.bi,TransformComponent:W.bi,Translation:W.hb,TreeWalker:W.dx,CompositionEvent:W.aJ,FocusEvent:W.aJ,TextEvent:W.aJ,SVGZoomEvent:W.aJ,UIEvent:W.aJ,URL:W.hi,VideoTrackList:W.hk,VTTRegionList:W.hn,WebSocket:W.ho,WheelEvent:W.b2,Window:W.bX,DOMWindow:W.bX,Worker:W.hr,CompositorWorkerGlobalScope:W.b3,DedicatedWorkerGlobalScope:W.b3,ServiceWorkerGlobalScope:W.b3,SharedWorkerGlobalScope:W.b3,WorkerGlobalScope:W.b3,ClientRect:W.hz,ClientRectList:W.dB,DOMRectList:W.dB,CSSRuleList:W.hB,DocumentType:W.hC,DOMRect:W.hD,GamepadList:W.hU,HTMLFrameSetElement:W.hV,NamedNodeMap:W.dE,MozNamedAttrMap:W.dE,ServiceWorker:W.ic,SpeechRecognitionResultList:W.ig,StyleSheetList:W.ih,WorkerLocation:W.ip,WorkerNavigator:W.iq,SVGAElement:P.dP,SVGAnimateElement:P.aO,SVGAnimateMotionElement:P.aO,SVGAnimateTransformElement:P.aO,SVGAnimationElement:P.aO,SVGSetElement:P.aO,SVGFEBlendElement:P.ec,SVGFEColorMatrixElement:P.ed,SVGFEComponentTransferElement:P.ee,SVGFECompositeElement:P.ef,SVGFEConvolveMatrixElement:P.eg,SVGFEDiffuseLightingElement:P.eh,SVGFEDisplacementMapElement:P.ei,SVGFEFloodElement:P.ej,SVGFEGaussianBlurElement:P.ek,SVGFEImageElement:P.el,SVGFEMergeElement:P.em,SVGFEMorphologyElement:P.en,SVGFEOffsetElement:P.eo,SVGFEPointLightElement:P.ep,SVGFESpecularLightingElement:P.eq,SVGFESpotLightElement:P.er,SVGFETileElement:P.es,SVGFETurbulenceElement:P.et,SVGFilterElement:P.ew,SVGForeignObjectElement:P.ey,SVGCircleElement:P.ah,SVGEllipseElement:P.ah,SVGLineElement:P.ah,SVGPathElement:P.ah,SVGPolygonElement:P.ah,SVGPolylineElement:P.ah,SVGGeometryElement:P.ah,SVGClipPathElement:P.aF,SVGDefsElement:P.aF,SVGGElement:P.aF,SVGSwitchElement:P.aF,SVGGraphicsElement:P.aF,SVGImageElement:P.eD,SVGLength:P.as,SVGLengthList:P.eN,SVGMarkerElement:P.eV,SVGMaskElement:P.eW,SVGNumber:P.at,SVGNumberList:P.fd,SVGPatternElement:P.fk,SVGPoint:P.fp,SVGPointList:P.fq,SVGRect:P.fv,SVGRectElement:P.fw,SVGScriptElement:P.bP,SVGStringList:P.fV,SVGDescElement:P.K,SVGDiscardElement:P.K,SVGFEDistantLightElement:P.K,SVGFEFuncAElement:P.K,SVGFEFuncBElement:P.K,SVGFEFuncGElement:P.K,SVGFEFuncRElement:P.K,SVGFEMergeNodeElement:P.K,SVGMetadataElement:P.K,SVGStopElement:P.K,SVGStyleElement:P.K,SVGTitleElement:P.K,SVGComponentTransferFunctionElement:P.K,SVGElement:P.K,SVGSVGElement:P.fW,SVGSymbolElement:P.fX,SVGTextContentElement:P.dv,SVGTextPathElement:P.h0,SVGTSpanElement:P.bT,SVGTextElement:P.bT,SVGTextPositioningElement:P.bT,SVGTransform:P.au,SVGTransformList:P.ha,SVGUseElement:P.hj,SVGViewElement:P.hl,SVGViewSpec:P.hm,SVGLinearGradientElement:P.bZ,SVGRadialGradientElement:P.bZ,SVGGradientElement:P.bZ,SVGCursorElement:P.i8,SVGFEDropShadowElement:P.i9,SVGMPathElement:P.ia,AudioBuffer:P.dT,WebGLRenderingContext:P.fA,WebGL2RenderingContext:P.fB,WebGL2RenderingContextBase:P.io,SQLResultSetRowList:P.fL})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,Credential:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMStringMap:true,EffectModel:true,Entry:true,FederatedCredential:true,FileEntry:true,FileError:true,Stream:true,DOMFileSystem:true,FontFace:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageData:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PasswordCredential:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,ServicePort:true,SharedArrayBuffer:true,SourceInfo:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,TrackDefault:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPreserveAspectRatio:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,AudioTrack:true,AudioTrackList:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,CSSCharsetRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DocumentFragment:true,ShadowRoot:true,DOMException:true,DOMImplementation:true,DOMPoint:true,DOMPointReadOnly:false,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AudioDestinationNode:true,AudioNode:true,AudioSourceNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OfflineAudioContext:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Navigator:true,Attr:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Path2D:true,Perspective:true,Plugin:true,PluginArray:true,PositionValue:true,PresentationConnection:true,Range:true,Rotation:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,SharedWorker:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,CalcLength:true,KeywordValue:true,LengthValue:true,NumberValue:true,SimpleLength:true,TransformValue:true,StyleValue:false,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,Matrix:true,Skew:true,TransformComponent:false,Translation:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,SVGZoomEvent:true,UIEvent:false,URL:true,VideoTrackList:true,VTTRegionList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.de.$nativeSuperclassTag="ArrayBufferView"
H.bJ.$nativeSuperclassTag="ArrayBufferView"
H.bK.$nativeSuperclassTag="ArrayBufferView"
H.df.$nativeSuperclassTag="ArrayBufferView"
H.bI.$nativeSuperclassTag="ArrayBufferView"
H.bL.$nativeSuperclassTag="ArrayBufferView"
H.dg.$nativeSuperclassTag="ArrayBufferView"
W.bu.$nativeSuperclassTag="EventTarget"
W.bz.$nativeSuperclassTag="EventTarget"
W.bv.$nativeSuperclassTag="EventTarget"
W.by.$nativeSuperclassTag="EventTarget"
W.bw.$nativeSuperclassTag="EventTarget"
W.bx.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.lh(V.li(),b)},[])
else (function(b){H.lh(V.li(),b)})([])})})()