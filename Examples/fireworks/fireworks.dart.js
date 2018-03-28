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
a[c]=function(){a[c]=function(){H.l_(b)}
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
return d?function(e){if(t===null)t=H.hu(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.hu(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.hu(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={h9:function h9(a){this.a=a},
hf:function(a,b,c,d){if(!!a.$isj)return new H.dc(a,b,[c,d])
return new H.bJ(a,b,[c,d])},
h7:function(){return new P.b2("No element")},
jT:function(){return new P.b2("Too few elements")},
k9:function(a,b){H.bW(a,0,J.aQ(a)-1,b)},
bW:function(a,b,c,d){if(c-b<=32)H.k8(a,b,c,d)
else H.k7(a,b,c,d)},
k8:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.L(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.O(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
k7:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.b(t>32)
s=C.b.B(t+1,6)
r=a3+s
q=a4-s
p=C.b.B(a3+a4,2)
o=p-s
n=p+s
t=J.L(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.O(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.O(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.O(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.O(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.O(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.O(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.O(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.O(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.O(a5.$2(j,i),0)){h=i
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
H.bW(a2,a3,g-2,a5)
H.bW(a2,f+2,a4,a5)
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
break}}H.bW(a2,g,f,a5)}else H.bW(a2,g,f,a5)},
j:function j(){},
aA:function aA(){},
bI:function bI(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bJ:function bJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
dc:function dc(a,b,c){this.a=a
this.b=b
this.$ti=c},
dD:function dD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bK:function bK(a,b,c){this.a=a
this.b=b
this.$ti=c},
ay:function ay(){},
cQ:function(a,b){var t=a.Y(b)
if(!u.globalState.d.cy)u.globalState.f.a1()
return t},
fz:function(){++u.globalState.f.b},
fO:function(){--u.globalState.f.b
H.b(u.globalState.f.b>=0)},
iW:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.t(s).$isk)throw H.c(P.hR("Arguments to main must be a List: "+H.i(s)))
u.globalState=new H.fh(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$i2()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.eU(P.he(null,H.as),0)
q=P.w
s.sdE(new H.R(0,null,null,null,null,null,0,[q,H.aE]))
s.sdH(new H.R(0,null,null,null,null,null,0,[q,null]))
if(s.x){r=new H.fg()
s.Q=r
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.jO,r)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.kl)}if(u.globalState.x)return
o=H.ix()
u.globalState.e=o
u.globalState.z.i(0,o.a,o)
u.globalState.d=o
if(H.aM(a,{func:1,args:[P.F]}))o.Y(new H.fX(t,a))
else if(H.aM(a,{func:1,args:[P.F,P.F]}))o.Y(new H.fY(t,a))
else o.Y(a)
u.globalState.f.a1()},
kl:function(a){var t=P.ak(["command","print","msg",a])
return new H.M(!0,P.aF(null,P.w)).A(t)},
ix:function(){var t,s
t=u.globalState.a++
s=P.w
t=new H.aE(t,new H.R(0,null,null,null,null,null,0,[s,H.bU]),P.bH(null,null,null,s),u.createNewIsolate(),new H.bU(0,null,!1),new H.aa(H.iV()),new H.aa(H.iV()),!1,!1,[],P.bH(null,null,null,null),null,null,!1,!0,P.bH(null,null,null,null))
t.cJ()
return t},
jQ:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.jR()
return},
jR:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.c(P.q("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.c(P.q('Cannot extract URI from "'+t+'"'))},
jO:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=new H.ar(!0,[]).J(b.data)
s=J.L(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.kO(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.ar(!0,[]).J(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.ar(!0,[]).J(s.h(t,"replyTo"))
k=H.ix()
u.globalState.f.a.H(0,new H.as(k,new H.dn(q,p,o,n,m,l),"worker-start"))
u.globalState.d=k
u.globalState.f.a1()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.jo(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.a1()
break
case"close":u.globalState.ch.a0(0,$.$get$i3().h(0,a))
a.terminate()
u.globalState.f.a1()
break
case"log":H.jN(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
j=P.ak(["command","print","msg",t])
j=new H.M(!0,P.aF(null,P.w)).A(j)
s.toString
self.postMessage(j)}else P.a1(s.h(t,"msg"))
break
case"error":throw H.c(s.h(t,"msg"))}},
jN:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.ak(["command","log","msg",a])
r=new H.M(!0,P.aF(null,P.w)).A(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.a3(q)
t=H.a8(q)
s=P.bA(t)
throw H.c(s)}},
jP:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.ia=$.ia+("_"+s)
$.ib=$.ib+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.w(0,["spawned",new H.aG(s,r),q,t.r])
r=new H.dp(t,d,a,c,b)
if(e){t.bn(q,q)
u.globalState.f.a.H(0,new H.as(t,r,"start isolate"))}else r.$0()},
kb:function(a,b){var t=new H.eu(!0,!1,null,0)
t.cE(a,b)
return t},
km:function(a){return new H.ar(!0,[]).J(new H.M(!1,P.aF(null,P.w)).A(a))},
fX:function fX(a,b){this.a=a
this.b=b},
fY:function fY(a,b){this.a=a
this.b=b},
fh:function fh(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
aE:function aE(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
fa:function fa(a,b){this.a=a
this.b=b},
eU:function eU(a,b){this.a=a
this.b=b},
eV:function eV(a){this.a=a},
as:function as(a,b,c){this.a=a
this.b=b
this.c=c},
fg:function fg(){},
dn:function dn(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dp:function dp(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eQ:function eQ(){},
aG:function aG(a,b){this.b=a
this.a=b},
fi:function fi(a,b){this.a=a
this.b=b},
bg:function bg(a,b,c){this.b=a
this.c=b
this.a=c},
bU:function bU(a,b,c){this.a=a
this.b=b
this.c=c},
eu:function eu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ev:function ev(a,b){this.a=a
this.b=b},
ew:function ew(a,b){this.a=a
this.b=b},
aa:function aa(a){this.a=a},
M:function M(a,b){this.a=a
this.b=b},
ar:function ar(a,b){this.a=a
this.b=b},
kK:function(a){return u.types[a]},
kQ:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.t(a).$isp},
i:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.bq(a)
if(typeof t!=="string")throw H.c(H.H(a))
return t},
k5:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t=J.ag(t)
s=t[0]
r=t[1]
return new H.e3(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
am:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
b1:function(a){var t,s,r,q,p,o,n,m,l
t=J.t(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.D||!!J.t(a).$isap){p=C.w(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.i.ao(q,0)===36)q=C.i.cp(q,1)
l=H.fN(H.fC(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+l,u.mangledGlobalNames)},
G:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
k2:function(a){return a.b?H.G(a).getUTCFullYear()+0:H.G(a).getFullYear()+0},
k0:function(a){return a.b?H.G(a).getUTCMonth()+1:H.G(a).getMonth()+1},
jX:function(a){return a.b?H.G(a).getUTCDate()+0:H.G(a).getDate()+0},
jY:function(a){return a.b?H.G(a).getUTCHours()+0:H.G(a).getHours()+0},
k_:function(a){return a.b?H.G(a).getUTCMinutes()+0:H.G(a).getMinutes()+0},
k1:function(a){return a.b?H.G(a).getUTCSeconds()+0:H.G(a).getSeconds()+0},
jZ:function(a){return a.b?H.G(a).getUTCMilliseconds()+0:H.G(a).getMilliseconds()+0},
i9:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.c(H.H(a))
return a[b]},
aL:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a4(!0,b,"index",null)
t=J.aQ(a)
if(b<0||C.b.cc(b,t))return P.x(b,a,"index",null,t)
return P.e2(b,"index",null)},
H:function(a){return new P.a4(!0,a,null,null)},
c:function(a){var t
if(a==null)a=new P.bR()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.iX})
t.name=""}else t.toString=H.iX
return t},
iX:function(){return J.bq(this.dartException)},
D:function(a){throw H.c(a)},
a2:function(a){throw H.c(P.ad(a))},
V:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.eA(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
eB:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
io:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
i8:function(a,b){return new H.dQ(a,b==null?null:b.method)},
hb:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.du(a,s,t?null:b.receiver)},
a3:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.fZ(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.az(r,16)&8191)===10)switch(q){case 438:return t.$1(H.hb(H.i(s)+" (Error "+q+")",null))
case 445:case 5007:return t.$1(H.i8(H.i(s)+" (Error "+q+")",null))}}if(a instanceof TypeError){p=$.$get$ih()
o=$.$get$ii()
n=$.$get$ij()
m=$.$get$ik()
l=$.$get$ip()
k=$.$get$iq()
j=$.$get$im()
$.$get$il()
i=$.$get$is()
h=$.$get$ir()
g=p.E(s)
if(g!=null)return t.$1(H.hb(s,g))
else{g=o.E(s)
if(g!=null){g.method="call"
return t.$1(H.hb(s,g))}else{g=n.E(s)
if(g==null){g=m.E(s)
if(g==null){g=l.E(s)
if(g==null){g=k.E(s)
if(g==null){g=j.E(s)
if(g==null){g=m.E(s)
if(g==null){g=i.E(s)
if(g==null){g=h.E(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return t.$1(H.i8(s,g))}}return t.$1(new H.eF(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.bZ()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.a4(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.bZ()
return a},
a8:function(a){var t
if(a==null)return new H.cw(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.cw(a,null)},
kU:function(a){if(a==null||typeof a!='object')return J.aP(a)
else return H.am(a)},
kE:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=a.length
for(r=0;r<s;){q=r+1
H.b(t)
p=a[r]
r=q+1
H.b(t)
b.i(0,p,a[q])}return b},
kP:function(a,b,c,d,e,f,g){switch(c){case 0:return H.cQ(b,new H.fI(a))
case 1:return H.cQ(b,new H.fJ(a,d))
case 2:return H.cQ(b,new H.fK(a,d,e))
case 3:return H.cQ(b,new H.fL(a,d,e,f))
case 4:return H.cQ(b,new H.fM(a,d,e,f,g))}throw H.c(P.bA("Unsupported number of arguments for wrapped closure"))},
bk:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.kP)
a.$identity=t
return t},
jE:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.t(c).$isk){t.$reflectionInfo=c
r=H.k5(t).r}else r=c
q=d?Object.create(new H.eh().constructor.prototype):Object.create(new H.aR(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.hY(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.kK,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.hW:H.h2
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.c("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.hY(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
jB:function(a,b,c,d){var t=H.h2
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
hY:function(a,b,c){var t,s,r,q
if(c)return H.jD(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.jB(s,b==null?r!=null:b!==r,t,b)
return q},
jC:function(a,b,c,d){var t,s
t=H.h2
s=H.hW
switch(b?-1:a){case 0:throw H.c(H.k6("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
jD:function(a,b){var t,s,r,q
t=$.hX
if(t==null){t=H.hU("self")
$.hX=t}t=$.hV
if(t==null){t=H.hU("receiver")
$.hV=t}s=b.$stubName
r=b.length
q=a[s]
t=H.jC(r,b==null?q!=null:b!==q,s,b)
return t},
hu:function(a,b,c,d,e,f){var t,s
t=J.ag(b)
s=!!J.t(c).$isk?J.ag(c):c
return H.jE(a,t,s,!!d,e,f)},
h2:function(a){return a.a},
hW:function(a){return a.c},
hU:function(a){var t,s,r,q,p
t=new H.aR("self","target","receiver","name")
s=J.ag(Object.getOwnPropertyNames(t))
for(r=s.length,q=0;q<r;++q){p=s[q]
if(t[p]===a)return p}},
la:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.W(a,"String"))},
l5:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.W(a,"double"))},
l9:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.W(a,"num"))},
ky:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.W(a,"bool"))},
kO:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.W(a,"int"))},
kW:function(a,b){throw H.c(H.W(a,b.substring(3)))},
kV:function(a,b){var t=J.L(b)
throw H.c(H.jA(a,t.aW(b,3,t.gj(b))))},
iO:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.t(a)[b])return a
H.kW(a,b)},
a9:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.t(a)[b]
else t=!0
if(t)return a
H.kV(a,b)},
l8:function(a){if(a==null)return a
if(!!J.t(a).$isk)return a
throw H.c(H.W(a,"List"))},
hv:function(a){var t=J.t(a)
return"$S" in t?t.$S():null},
aM:function(a,b){var t,s
if(a==null)return!1
t=H.hv(a)
if(t==null)s=!1
else s=H.iP(t,b)
return s},
l6:function(a,b){var t,s
if(a==null)return a
if($.hq)return a
$.hq=!0
try{if(H.aM(a,b))return a
t=H.fR(b,null)
s=H.W(a,t)
throw H.c(s)}finally{$.hq=!1}},
W:function(a,b){return new H.eC("TypeError: "+H.i(P.bz(a))+": type '"+H.iC(a)+"' is not a subtype of type '"+b+"'")},
jA:function(a,b){return new H.cZ("CastError: "+H.i(P.bz(a))+": type '"+H.iC(a)+"' is not a subtype of type '"+b+"'")},
iC:function(a){var t
if(a instanceof H.ac){t=H.hv(a)
if(t!=null)return H.fR(t,null)
return"Closure"}return H.b1(a)},
au:function(a){if(!0===a)return!1
if(!!J.t(a).$ish6)a=a.$0()
if(typeof a==="boolean")return!a
throw H.c(H.W(a,"bool"))},
aJ:function(a){throw H.c(new H.eL(a))},
b:function(a){if(H.au(a))throw H.c(P.jz(null))},
l_:function(a){throw H.c(new P.d5(a))},
k6:function(a){return new H.e7(a)},
iV:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
iM:function(a){return u.getIsolateTag(a)},
N:function(a,b){H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
fC:function(a){if(a==null)return
return a.$ti},
iN:function(a,b){return H.hD(a["$as"+H.i(b)],H.fC(a))},
a7:function(a,b,c){var t,s
t=H.iN(a,b)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
aN:function(a,b){var t,s
t=H.fC(a)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
fR:function(a,b){var t=H.aO(a,b)
return t},
aO:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.b(!0)
H.b(!0)
return a[0].name+H.fN(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.i(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aO(t,b)
return H.kn(a,b)}return"unknown-reified-type"},
kn:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aO(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aO(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aO(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.kD(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aO(l[j],b)+(" "+H.i(j))}q+="}"}return"("+q+") => "+t},
fN:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=new P.b3("")
for(r=b,q=!0,p=!0;H.b(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.b(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aO(o,c)}return p?"":"<"+s.k(0)+">"},
kJ:function(a){var t,s,r
if(a instanceof H.ac){t=H.hv(a)
if(t!=null)return H.fR(t,null)}s=J.t(a).constructor.name
if(a==null)return s
r=H.fN(a.$ti,0,null)
return s+r},
hD:function(a,b){if(a==null)return b
H.b(typeof a=="function")
H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.hz(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.hz(a,null,b)
return b},
ht:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.fC(a)
s=J.t(a)
if(s[b]==null)return!1
return H.iG(H.hD(s[d],t),c)},
l2:function(a,b,c,d){var t,s
if(a==null)return a
t=H.ht(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.fN(c,0,null)
throw H.c(H.W(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
iG:function(a,b){var t,s,r,q,p
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
if(!H.J(r,b[p]))return!1}return!0},
l3:function(a,b,c){return H.hz(a,b,H.iN(b,c))},
J:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.name==="F")return!0
if('func' in b)return H.iP(a,b)
if('func' in a)return b.name==="h6"||b.name==="A"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.b(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.b(!0)
q=b[0]}else q=b
if(q!==s){p=H.fR(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.iG(H.hD(o,t),r)},
iF:function(a,b,c){var t,s,r,q,p,o,n
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
if(!(H.J(o,n)||H.J(n,o)))return!1}return!0},
ku:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
H.b(typeof a=='object')
H.b(typeof b=='object')
t=J.ag(Object.getOwnPropertyNames(b))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.J(p,o)||H.J(o,p)))return!1}return!0},
iP:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.b('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.J(t,s)||H.J(s,t)))return!1}r=a.args
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
if(n===m){if(!H.iF(r,q,!1))return!1
if(!H.iF(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.b(j)
g=r[h]
H.b(i)
f=q[h]
if(!(H.J(g,f)||H.J(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=q[e]
if(!(H.J(g,f)||H.J(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=o[e]
if(!(H.J(g,f)||H.J(f,g)))return!1}}return H.ku(a.named,b.named)},
hz:function(a,b,c){H.b(typeof a=="function")
H.b(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
lb:function(a){var t=$.hw
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
l7:function(a){return H.am(a)},
l4:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
kR:function(a){var t,s,r,q,p,o
H.b(!(a instanceof P.A))
t=$.hw.$1(a)
s=$.fy[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.fH[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.iE.$2(a,t)
if(t!=null){s=$.fy[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.fH[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.fQ(r)
$.fy[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.fH[t]=r
return r}if(p==="-"){o=H.fQ(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.iR(a,r)
if(p==="*")throw H.c(P.it(t))
if(u.leafTags[t]===true){o=H.fQ(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.iR(a,r)},
iR:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.hA(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
fQ:function(a){return J.hA(a,!1,null,!!a.$isp)},
kT:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return H.fQ(t)
else return J.hA(t,c,null,null)},
kM:function(){if(!0===$.hy)return
$.hy=!0
H.kN()},
kN:function(){var t,s,r,q,p,o,n,m
$.fy=Object.create(null)
$.fH=Object.create(null)
H.kL()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.iU.$1(p)
if(o!=null){n=H.kT(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
kL:function(){var t,s,r,q,p,o,n
t=C.H()
t=H.aI(C.E,H.aI(C.J,H.aI(C.v,H.aI(C.v,H.aI(C.I,H.aI(C.F,H.aI(C.G(C.w),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.hw=new H.fE(p)
$.iE=new H.fF(o)
$.iU=new H.fG(n)},
aI:function(a,b){return a(b)||b},
e3:function e3(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
eA:function eA(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dQ:function dQ(a,b){this.a=a
this.b=b},
du:function du(a,b,c){this.a=a
this.b=b
this.c=c},
eF:function eF(a){this.a=a},
fZ:function fZ(a){this.a=a},
cw:function cw(a,b){this.a=a
this.b=b},
fI:function fI(a){this.a=a},
fJ:function fJ(a,b){this.a=a
this.b=b},
fK:function fK(a,b,c){this.a=a
this.b=b
this.c=c},
fL:function fL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fM:function fM(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ac:function ac(){},
ep:function ep(){},
eh:function eh(){},
aR:function aR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eC:function eC(a){this.a=a},
cZ:function cZ(a){this.a=a},
e7:function e7(a){this.a=a},
eL:function eL(a){this.a=a},
c5:function c5(a,b){this.a=a
this.b=b},
R:function R(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
dt:function dt(a){this.a=a},
dw:function dw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dx:function dx(a,b){this.a=a
this.$ti=b},
dy:function dy(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
fE:function fE(a){this.a=a},
fF:function fF(a){this.a=a},
fG:function fG(a){this.a=a},
a_:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.aL(b,a))},
b_:function b_(){},
al:function al(){},
bN:function bN(){},
b0:function b0(){},
bO:function bO(){},
bM:function bM(){},
dK:function dK(){},
dL:function dL(){},
dM:function dM(){},
dN:function dN(){},
dO:function dO(){},
bP:function bP(){},
dP:function dP(){},
b8:function b8(){},
b9:function b9(){},
ba:function ba(){},
bb:function bb(){},
kD:function(a){return J.ag(H.N(a?Object.keys(a):[],[null]))},
hC:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
t:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.bF.prototype
return J.ds.prototype}if(typeof a=="string")return J.ah.prototype
if(a==null)return J.bG.prototype
if(typeof a=="boolean")return J.dr.prototype
if(a.constructor==Array)return J.af.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ai.prototype
return a}if(a instanceof P.A)return a
return J.fB(a)},
hA:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fB:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.hy==null){H.kM()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.c(P.it("Return interceptor for "+H.i(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$ha()]
if(p!=null)return p
p=H.kR(a)
if(p!=null)return p
if(typeof a=="function")return C.K
s=Object.getPrototypeOf(a)
if(s==null)return C.x
if(s===Object.prototype)return C.x
if(typeof q=="function"){Object.defineProperty(q,$.$get$ha(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
ag:function(a){a.fixed$length=Array
return a},
L:function(a){if(typeof a=="string")return J.ah.prototype
if(a==null)return a
if(a.constructor==Array)return J.af.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ai.prototype
return a}if(a instanceof P.A)return a
return J.fB(a)},
fA:function(a){if(a==null)return a
if(a.constructor==Array)return J.af.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ai.prototype
return a}if(a instanceof P.A)return a
return J.fB(a)},
iL:function(a){if(typeof a=="number")return J.az.prototype
if(a==null)return a
if(!(a instanceof P.A))return J.ap.prototype
return a},
kG:function(a){if(typeof a=="number")return J.az.prototype
if(typeof a=="string")return J.ah.prototype
if(a==null)return a
if(!(a instanceof P.A))return J.ap.prototype
return a},
kH:function(a){if(typeof a=="string")return J.ah.prototype
if(a==null)return a
if(!(a instanceof P.A))return J.ap.prototype
return a},
m:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ai.prototype
return a}if(a instanceof P.A)return a
return J.fB(a)},
z:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.t(a).t(a,b)},
O:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.iL(a).al(a,b)},
iY:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.iL(a).am(a,b)},
hE:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kQ(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.L(a).h(a,b)},
iZ:function(a,b,c,d){return J.m(a).cL(a,b,c,d)},
j_:function(a,b){return J.kH(a).ao(a,b)},
hF:function(a,b){return J.m(a).bm(a,b)},
hG:function(a,b,c){return J.m(a).bo(a,b,c)},
j0:function(a,b){return J.m(a).d7(a,b)},
hH:function(a,b,c){return J.m(a).bp(a,b,c)},
bo:function(a,b,c){return J.m(a).bq(a,b,c)},
h_:function(a,b){return J.m(a).da(a,b)},
j1:function(a,b){return J.m(a).br(a,b)},
j2:function(a,b,c){return J.m(a).bs(a,b,c)},
j3:function(a,b,c,d){return J.m(a).bt(a,b,c,d)},
j4:function(a,b,c,d,e){return J.m(a).bu(a,b,c,d,e)},
j5:function(a,b){return J.kG(a).F(a,b)},
hI:function(a){return J.m(a).bw(a)},
j6:function(a){return J.m(a).bx(a)},
j7:function(a){return J.m(a).bA(a)},
j8:function(a){return J.m(a).df(a)},
j9:function(a,b){return J.m(a).bC(a,b)},
h0:function(a,b){return J.m(a).bD(a,b)},
ja:function(a,b,c,d){return J.m(a).bE(a,b,c,d)},
jb:function(a,b,c,d,e){return J.m(a).dm(a,b,c,d,e)},
jc:function(a,b,c,d,e){return J.m(a).bF(a,b,c,d,e)},
jd:function(a,b,c,d,e,f){return J.m(a).dn(a,b,c,d,e,f)},
je:function(a,b){return J.fA(a).m(a,b)},
cR:function(a,b){return J.m(a).bG(a,b)},
jf:function(a,b){return J.m(a).bH(a,b)},
jg:function(a){return J.m(a).dq(a)},
hJ:function(a,b){return J.fA(a).af(a,b)},
aP:function(a){return J.t(a).gq(a)},
bp:function(a){return J.fA(a).gu(a)},
aQ:function(a){return J.L(a).gj(a)},
jh:function(a){return J.m(a).ak(a)},
ji:function(a){return J.m(a).aM(a)},
jj:function(a,b){return J.m(a).aN(a,b)},
jk:function(a,b,c){return J.m(a).aO(a,b,c)},
hK:function(a,b,c){return J.m(a).aR(a,b,c)},
jl:function(a,b){return J.m(a).bK(a,b)},
jm:function(a,b){return J.fA(a).bM(a,b)},
jn:function(a,b,c){return J.m(a).bN(a,b,c)},
jo:function(a,b){return J.m(a).w(a,b)},
jp:function(a,b,c,d){return J.m(a).aV(a,b,c,d)},
jq:function(a,b,c,d,e,f,g){return J.m(a).bR(a,b,c,d,e,f,g)},
jr:function(a,b,c,d){return J.m(a).bS(a,b,c,d)},
hL:function(a,b,c,d){return J.m(a).bT(a,b,c,d)},
bq:function(a){return J.t(a).k(a)},
js:function(a,b,c,d){return J.m(a).dT(a,b,c,d)},
jt:function(a,b,c){return J.m(a).bX(a,b,c)},
ju:function(a,b,c){return J.m(a).bY(a,b,c)},
h1:function(a,b,c){return J.m(a).bZ(a,b,c)},
jv:function(a,b,c){return J.m(a).c_(a,b,c)},
hM:function(a,b,c){return J.m(a).c0(a,b,c)},
hN:function(a,b,c){return J.m(a).c1(a,b,c)},
hO:function(a,b,c){return J.m(a).c2(a,b,c)},
hP:function(a,b,c,d){return J.m(a).c3(a,b,c,d)},
hQ:function(a,b,c,d){return J.m(a).c4(a,b,c,d)},
jw:function(a,b){return J.m(a).c6(a,b)},
jx:function(a,b,c){return J.m(a).dU(a,b,c)},
jy:function(a,b,c,d,e,f,g){return J.m(a).c8(a,b,c,d,e,f,g)},
a:function a(){},
dr:function dr(){},
bG:function bG(){},
aX:function aX(){},
dZ:function dZ(){},
ap:function ap(){},
ai:function ai(){},
af:function af(a){this.$ti=a},
h8:function h8(a){this.$ti=a},
cV:function cV(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
az:function az(){},
bF:function bF(){},
ds:function ds(){},
ah:function ah(){}},P={
kg:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.kv()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.bk(new P.eN(t),1)).observe(s,{childList:true})
return new P.eM(t,s,r)}else if(self.setImmediate!=null)return P.kw()
return P.kx()},
kh:function(a){H.fz()
self.scheduleImmediate(H.bk(new P.eO(a),0))},
ki:function(a){H.fz()
self.setImmediate(H.bk(new P.eP(a),0))},
kj:function(a){P.hj(C.t,a)},
hj:function(a,b){var t=C.b.B(a.a,1000)
return H.kb(t<0?0:t,b)},
kq:function(a,b){if(H.aM(a,{func:1,args:[P.F,P.F]})){b.toString
return a}else{b.toString
return a}},
kk:function(a,b){var t,s,r
H.b(b.a<4)
H.b(!(a instanceof P.Y))
H.b(b.a===0)
b.a=1
try{a.bV(new P.f0(b),new P.f1(b))}catch(r){t=H.a3(r)
s=H.a8(r)
P.kX(new P.f2(b,t,s))}},
iw:function(a,b){var t,s,r
H.b(b.a<=1)
for(;t=a.a,s=t===2,s;){H.b(s)
a=a.c}if(t>=4){r=b.ax()
b.an(a)
P.b6(b,r)}else{r=b.c
H.b(b.a<=1)
b.a=2
b.c=a
a.bg(r)}},
b6:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.fs(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.b6(t.a,b)}s=t.a
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
P.fs(null,null,p,o,s)
return}s=$.y
if(s==null?l!=null:s!==l){H.b(l!=null)
s=$.y
H.b(l==null?s!=null:l!==s)
j=$.y
$.y=l
i=j}else i=null
s=b.c
if(s===8)new P.f6(t,r,b,q).$0()
else if(p){if((s&1)!==0)new P.f5(r,b,m).$0()}else if((s&2)!==0)new P.f4(t,r,b).$0()
if(i!=null){H.b(!0)
$.y=i}s=r.b
if(!!J.t(s).$isdi){if(s.a>=4){H.b(o.a<4)
h=o.c
o.c=null
b=o.ad(h)
H.b(o.a<4)
H.b(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.iw(s,o)
return}}g=b.b
H.b(g.a<4)
h=g.c
g.c=null
b=g.ad(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.b(!o)
g.a=4
g.c=p}else{H.b(!o)
g.a=8
g.c=p}t.a=g
s=g}},
kp:function(){var t,s
for(;t=$.aH,t!=null;){$.bi=null
s=t.b
$.aH=s
if(s==null)$.bh=null
t.a.$0()}},
kt:function(){$.hr=!0
try{P.kp()}finally{$.bi=null
$.hr=!1
if($.aH!=null)$.$get$hn().$1(P.iH())}},
iB:function(a){var t=new P.c6(a,null)
if($.aH==null){$.bh=t
$.aH=t
if(!$.hr)$.$get$hn().$1(P.iH())}else{$.bh.b=t
$.bh=t}},
ks:function(a){var t,s,r
t=$.aH
if(t==null){P.iB(a)
$.bi=$.bh
return}s=new P.c6(a,null)
r=$.bi
if(r==null){s.b=t
$.bi=s
$.aH=s}else{s.b=r.b
r.b=s
$.bi=s
if(s.b==null)$.bh=s}},
kX:function(a){var t=$.y
if(C.f===t){P.fu(null,null,C.f,a)
return}t.toString
P.fu(null,null,t,t.aD(a))},
kc:function(a,b){var t=$.y
if(t===C.f){t.toString
return P.hj(a,b)}return P.hj(a,t.aD(b))},
hm:function(a){var t,s
H.b(a!=null)
t=$.y
H.b(a==null?t!=null:a!==t)
s=$.y
$.y=a
return s},
fs:function(a,b,c,d,e){var t={}
t.a=d
P.ks(new P.ft(t,e))},
iz:function(a,b,c,d){var t,s
if($.y===c)return d.$0()
t=P.hm(c)
try{s=d.$0()
return s}finally{s=t
H.b(s!=null)
$.y=s}},
iA:function(a,b,c,d,e){var t,s
if($.y===c)return d.$1(e)
t=P.hm(c)
try{s=d.$1(e)
return s}finally{s=t
H.b(s!=null)
$.y=s}},
kr:function(a,b,c,d,e,f){var t,s
if($.y===c)return d.$2(e,f)
t=P.hm(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.b(s!=null)
$.y=s}},
fu:function(a,b,c,d){var t=C.f!==c
if(t)d=!(!t||!1)?c.aD(d):c.d8(d)
P.iB(d)},
eN:function eN(a){this.a=a},
eM:function eM(a,b,c){this.a=a
this.b=b
this.c=c},
eO:function eO(a){this.a=a},
eP:function eP(a){this.a=a},
h3:function h3(){},
eR:function eR(){},
fq:function fq(a,b){this.a=a
this.$ti=b},
ce:function ce(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
Y:function Y(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
f_:function f_(a,b){this.a=a
this.b=b},
f3:function f3(a,b){this.a=a
this.b=b},
f0:function f0(a){this.a=a},
f1:function f1(a){this.a=a},
f2:function f2(a,b,c){this.a=a
this.b=b
this.c=c},
f6:function f6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f7:function f7(a){this.a=a},
f5:function f5(a,b,c){this.a=a
this.b=b
this.c=c},
f4:function f4(a,b,c){this.a=a
this.b=b
this.c=c},
c6:function c6(a,b){this.a=a
this.b=b},
ek:function ek(){},
em:function em(a){this.a=a},
en:function en(a,b){this.a=a
this.b=b},
el:function el(){},
hi:function hi(){},
av:function av(a,b){this.a=a
this.b=b},
fr:function fr(){},
ft:function ft(a,b){this.a=a
this.b=b},
fk:function fk(){},
fm:function fm(a,b){this.a=a
this.b=b},
fl:function fl(a,b){this.a=a
this.b=b},
fn:function fn(a,b){this.a=a
this.b=b},
i4:function(a,b){return new H.R(0,null,null,null,null,null,0,[a,b])},
a5:function(){return new H.R(0,null,null,null,null,null,0,[null,null])},
ak:function(a){return H.kE(a,new H.R(0,null,null,null,null,null,0,[null,null]))},
aF:function(a,b){return new P.fe(0,null,null,null,null,null,0,[a,b])},
bH:function(a,b,c,d){return new P.fc(0,null,null,null,null,null,0,[d])},
hp:function(){var t=Object.create(null)
H.b(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
jS:function(a,b,c){var t,s
if(P.hs(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$bj()
C.a.l(s,a)
try{P.ko(a,t)}finally{H.b(C.a.gaG(s)===a)
s.pop()}s=P.ig(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
dq:function(a,b,c){var t,s,r
if(P.hs(a))return b+"..."+c
t=new P.b3(b)
s=$.$get$bj()
C.a.l(s,a)
try{r=t
r.a=P.ig(r.gL(),a,", ")}finally{H.b(C.a.gaG(s)===a)
s.pop()}s=t
s.a=s.gL()+c
s=t.gL()
return s.charCodeAt(0)==0?s:s},
hs:function(a){var t,s
for(t=0;s=$.$get$bj(),t<s.length;++t)if(a===s[t])return!0
return!1},
ko:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gu(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.n())return
q=H.i(t.gp(t))
C.a.l(b,q)
s+=q.length+2;++r}if(!t.n()){if(r<=5)return
p=b.pop()
o=b.pop()}else{n=t.gp(t);++r
if(!t.n()){if(r<=4){C.a.l(b,H.i(n))
return}p=H.i(n)
o=b.pop()
s+=p.length+2}else{m=t.gp(t);++r
H.b(r<100)
for(;t.n();n=m,m=l){l=t.gp(t);++r
if(r>100){while(!0){if(!(s>75&&r>3))break
s-=b.pop().length+2;--r}C.a.l(b,"...")
return}}o=H.i(n)
p=H.i(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)C.a.l(b,k)
C.a.l(b,o)
C.a.l(b,p)},
jV:function(a,b){var t,s
t=P.bH(null,null,null,b)
for(s=J.bp(a);s.n();)t.l(0,s.gp(s))
return t},
i6:function(a){var t,s,r
t={}
if(P.hs(a))return"{...}"
s=new P.b3("")
try{C.a.l($.$get$bj(),a)
r=s
r.a=r.gL()+"{"
t.a=!0
J.hJ(a,new P.dC(t,s))
t=s
t.a=t.gL()+"}"}finally{t=$.$get$bj()
H.b(C.a.gaG(t)===a)
t.pop()}t=s.gL()
return t.charCodeAt(0)==0?t:t},
he:function(a,b){var t=new P.dz(null,0,0,0,[b])
t.cz(a,b)
return t},
fe:function fe(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
fc:function fc(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
fd:function fd(a,b,c){this.a=a
this.b=b
this.c=c},
b7:function b7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
f9:function f9(){},
hd:function hd(){},
l:function l(){},
dB:function dB(){},
dC:function dC(a,b){this.a=a
this.b=b},
aY:function aY(){},
dz:function dz(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ff:function ff(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
ea:function ea(){},
e9:function e9(){},
jK:function(a){var t=J.t(a)
if(!!t.$isac)return t.k(a)
return"Instance of '"+H.b1(a)+"'"},
i5:function(a,b,c){var t,s
t=H.N([],[c])
for(s=J.bp(a);s.n();)C.a.l(t,s.gp(s))
return t},
ig:function(a,b,c){var t=J.bp(b)
if(!t.n())return a
if(c.length===0){do a+=H.i(t.gp(t))
while(t.n())}else{a+=H.i(t.gp(t))
for(;t.n();)a=a+c+H.i(t.gp(t))}return a},
jF:function(a,b){return J.j5(a,b)},
jG:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+t
if(t>=10)return s+"00"+t
return s+"000"+t},
jH:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bw:function(a){if(a>=10)return""+a
return"0"+a},
jI:function(a,b,c,d,e,f){return new P.ae(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
bz:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bq(a)
if(typeof a==="string")return JSON.stringify(a)
return P.jK(a)},
jz:function(a){return new P.br(a)},
hR:function(a){return new P.a4(!1,null,null,a)},
hS:function(a,b,c){return new P.a4(!0,a,b,c)},
e2:function(a,b,c){return new P.bS(null,null,!0,a,b,"Value not in range")},
bT:function(a,b,c,d,e){return new P.bS(b,c,!0,a,d,"Invalid value")},
ic:function(a,b,c,d,e,f){if(0>a||a>c)throw H.c(P.bT(a,0,c,"start",f))
if(a>b||b>c)throw H.c(P.bT(b,a,c,"end",f))
return b},
x:function(a,b,c,d,e){var t=e!=null?e:J.aQ(b)
return new P.dm(b,t,!0,a,c,"Index out of range")},
q:function(a){return new P.eG(a)},
it:function(a){return new P.eE(a)},
ka:function(a){return new P.b2(a)},
ad:function(a){return new P.d0(a)},
bA:function(a){return new P.eZ(a)},
a1:function(a){H.hC(H.i(a))},
aK:function aK(){},
B:function B(){},
aT:function aT(a,b){this.a=a
this.b=b},
a6:function a6(){},
ae:function ae(a){this.a=a},
da:function da(){},
db:function db(){},
ax:function ax(){},
br:function br(a){this.a=a},
bR:function bR(){},
a4:function a4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bS:function bS(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dm:function dm(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eG:function eG(a){this.a=a},
eE:function eE(a){this.a=a},
b2:function b2(a){this.a=a},
d0:function d0(a){this.a=a},
bZ:function bZ(){},
d5:function d5(a){this.a=a},
h4:function h4(){},
eZ:function eZ(a){this.a=a},
dd:function dd(a,b,c){this.a=a
this.b=b
this.$ti=c},
w:function w(){},
Q:function Q(){},
bE:function bE(){},
k:function k(){},
aB:function aB(){},
F:function F(){},
a0:function a0(){},
A:function A(){},
aC:function aC(){},
u:function u(){},
b3:function b3(a){this.a=a},
fw:function(a){var t,s,r,q,p
if(a==null)return
t=P.a5()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.a2)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
kB:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.hJ(a,new P.fv(t))
return t},
fv:function fv(a){this.a=a},
k3:function(a){return C.m},
fb:function fb(){},
hh:function hh(){},
fj:function fj(){},
I:function I(){},
dv:function dv(){},
dR:function dR(){},
e0:function e0(){},
eo:function eo(){},
ez:function ez(){},
ch:function ch(){},
ci:function ci(){},
co:function co(){},
cp:function cp(){},
cy:function cy(){},
cz:function cz(){},
cE:function cE(){},
cF:function cF(){},
cW:function cW(){},
cX:function cX(){},
aw:function aw(){},
dS:function dS(){},
e5:function e5(){},
e6:function e6(){},
eg:function eg(){},
cu:function cu(){},
cv:function cv(){}},W={
jJ:function(a){return"wheel"},
at:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
iy:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
X:function(a,b,c,d,e){var t=W.iD(new W.eY(c))
t=new W.eX(0,a,b,t,!1,[e])
t.cI(a,b,c,!1,e)
return t},
iD:function(a){var t=$.y
if(t===C.f)return a
return t.d9(a)},
h:function h(){},
cS:function cS(){},
cT:function cT(){},
cU:function cU(){},
bs:function bs(){},
bt:function bt(){},
bu:function bu(){},
ab:function ab(){},
d1:function d1(){},
aS:function aS(){},
d2:function d2(){},
K:function K(){},
P:function P(){},
d3:function d3(){},
d4:function d4(){},
d6:function d6(){},
aU:function aU(){},
d7:function d7(){},
bx:function bx(){},
by:function by(){},
d8:function d8(){},
d9:function d9(){},
e:function e(){},
f:function f(){},
d:function d(){},
de:function de(){},
df:function df(){},
dh:function dh(){},
dj:function dj(){},
aV:function aV(){},
bD:function bD(){},
dk:function dk(){},
aW:function aW(){},
aj:function aj(){},
dA:function dA(){},
dF:function dF(){},
dH:function dH(){},
aZ:function aZ(){},
dI:function dI(){},
E:function E(){},
v:function v(){},
bQ:function bQ(){},
T:function T(){},
e_:function e_(){},
e1:function e1(){},
bV:function bV(){},
e8:function e8(){},
ed:function ed(){},
ef:function ef(){},
U:function U(){},
ei:function ei(){},
ej:function ej(a){this.a=a},
eq:function eq(){},
er:function er(){},
et:function et(){},
an:function an(){},
ex:function ex(){},
ey:function ey(){},
ao:function ao(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
aq:function aq(){},
b5:function b5(){},
eK:function eK(a){this.a=a},
hl:function hl(){},
eS:function eS(){},
eT:function eT(){},
f8:function f8(){},
cl:function cl(){},
fo:function fo(){},
fp:function fp(){},
eW:function eW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ho:function ho(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
eX:function eX(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
eY:function eY(a){this.a=a},
n:function n(){},
dg:function dg(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
c7:function c7(){},
c8:function c8(){},
c9:function c9(){},
ca:function ca(){},
cb:function cb(){},
cc:function cc(){},
cd:function cd(){},
cf:function cf(){},
cg:function cg(){},
cj:function cj(){},
ck:function ck(){},
cm:function cm(){},
cn:function cn(){},
cq:function cq(){},
cr:function cr(){},
bc:function bc(){},
bd:function bd(){},
cs:function cs(){},
ct:function ct(){},
cx:function cx(){},
cA:function cA(){},
cB:function cB(){},
be:function be(){},
bf:function bf(){},
cC:function cC(){},
cD:function cD(){},
cG:function cG(){},
cH:function cH(){},
cI:function cI(){},
cJ:function cJ(){},
cK:function cK(){},
cL:function cL(){},
cM:function cM(){},
cN:function cN(){},
cO:function cO(){},
cP:function cP(){}},B={
kY:function(a){var t,s
t=document
s=W.aj
W.X(t,"keydown",new B.fS(),!1,s)
W.X(t,"keyup",new B.fT(),!1,s)
if(!$.kZ)W.X(t,"mousemove",new B.fU(),!1,W.E)
s=W.E
W.X(t,"mousedown",new B.fV(),!1,s)
W.X(t,"mouseup",new B.fW(),!1,s)},
jW:function(a,b,c,d){var t,s,r,q,p,o,n
t=new Float32Array(3)
s=$.$get$fx()
r=$.$get$bl()
q=new T.S(new Float32Array(16))
q.a5()
p=new Float32Array(3)
o=new Float32Array(3)
n=new Float32Array(3)
t=new B.dT(a,b,c,0,new T.C(t),-0.02,s,r,q,new T.C(p),new T.C(o),new T.C(n),new T.C(new Float32Array(3)),"camera:orbit",!1,!0)
t.cA(a,b,c,d)
return t},
fS:function fS(){},
fT:function fT(){},
fU:function fU(){},
fV:function fV(){},
fW:function fW(){},
dT:function dT(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dU:function dU(a){this.a=a},
dV:function dV(a){this.a=a},
dW:function dW(){},
dX:function dX(a){this.a=a}},G={
kf:function(a){var t,s,r
t=H.N(a.split("\n"),[P.u])
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.i(t[s])}return C.a.ah(t,"\n")},
iv:function(a,b,c){var t,s,r,q
t=J.m(a)
s=t.bz(a,b)
t.aT(a,s,c)
t.bv(a,s)
r=t.aQ(a,s,35713)
if(r!=null&&!r){q=t.aP(a,s)
P.a1("E:Compilation failed:")
P.a1("E:"+G.kf(c))
P.a1("E:Failure:")
P.a1(C.i.P("E:",q))
throw H.c(q)}return s},
i1:function(a,b){var t,s,r,q
t=a.length
b=new Float32Array(t*3)
for(t=a.length,s=0;s<t;++s){r=s*3
q=a[s].a
b[r]=q[0]
b[r+1]=q[1]
b[r+2]=q[2]}return b},
i7:function(a,b,c,d){return new G.dG(b,J.j8(b.a),c,P.a5(),d,null,0,-1,null,null,P.a5(),"meshdata:"+a,!1,!0)},
id:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.bH(null,null,null,P.u)
s=c.b
r=d.b
q=c.f
p=J.j6(b.a)
o=G.iv(b.a,35633,s)
J.hG(b.a,p,o)
n=G.iv(b.a,35632,r)
J.hG(b.a,p,n)
if(q.length>0)J.js(b.a,p,q,35980)
J.jl(b.a,p)
if(!J.jk(b.a,p,35714))H.D(J.jj(b.a,p))
t=new G.e4(b,c,d,p,P.jV(c.c,null),P.a5(),P.a5(),t,null,a,!1,!0)
t.cB(a,b,c,d)
return t},
ec:function(a){return new G.eb(a,null,[],[],[],[],0,P.a5())},
dJ:function dJ(){},
eD:function eD(){},
cY:function cY(){},
d_:function d_(a,b){this.a=a
this.b=b},
c3:function c3(a,b,c){this.a=a
this.b=b
this.c=c},
c2:function c2(a,b,c){this.a=a
this.b=b
this.c=c},
dE:function dE(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dG:function dG(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dY:function dY(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
e4:function e4(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
r:function r(a,b,c){this.a=a
this.b=b
this.c=c},
eb:function eb(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
ee:function ee(){},
es:function es(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
b4:function b4(){},
dl:function dl(a,b,c,d,e,f){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f}},A={
hx:function(a){var t,s
t=C.L.dt(a,0,new A.fD())
s=536870911&t+(C.b.ca(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
fD:function fD(){}},T={
ke:function(a,b,c){var t=new T.C(new Float32Array(3))
t.a6(a,b,c)
return t},
S:function S(a){this.a=a},
C:function C(a){this.a=a},
aD:function aD(a){this.a=a}},R={
kI:function(a){var t,s,r,q,p,o,n,m,l
t=[]
s=[]
for(r=0;r<200;++r){q=new Float32Array(3)
q[0]=0
q[1]=0
q[2]=0
C.a.l(t,new T.C(q))
q=C.m.aj()
p=C.m.aj()
o=C.m.aj()
n=new Float32Array(3)
n[0]=q-0.5
n[1]=p-0.5
n[2]=o-0.5
C.a.l(s,new T.C(n))}q=G.i7("firefwork-particles",a.d,0,a.e.x)
q.aZ(G.i1(t,null))
p=G.i1(s,null)
o=q.r
n=q.d
o.i(0,"aNormal",J.hI(n.a))
q.b_("aNormal",p,3)
m=$.$get$Z().h(0,"aNormal")
if(m==null)H.D("Unknown canonical aNormal")
p=q.x
if(H.au(p.C(0,"aNormal")))H.aJ("unexpected attribute aNormal")
l=p.h(0,"aNormal")
J.h_(n.a,q.e)
n.bI(0,l,0)
n.c9(0,o.h(0,"aNormal"),l,m.b1(),5126,!1,0,0)
return q},
kS:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
t={}
s=document
r=C.C.dL(s,"#webgl-canvas")
q=r.clientWidth
p=r.clientHeight
r.width=q
r.height=p
o=new G.d_(null,r)
n=(r&&C.r).aL(r,"webgl2",P.ak(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
o.a=n
if(n==null)H.D(P.bA('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
m="ChronosGL Config: "+H.i(J.jh(n))
if($.kF>0)P.a1("I: "+m)
J.j4(n,0,0,0,1)
J.cR(n,2929)
l=B.jW(15,0,0,r)
n=new T.S(new Float32Array(16))
n.a5()
m=new T.S(new Float32Array(16))
m.a5()
k=new G.dY(l,50,1,0.1,1000,n,m,new T.S(new Float32Array(16)),P.a5(),"perspective",!1,!0)
k.b3()
k.ct(q,p)
j=G.id("basic",o,$.$get$iT(),$.$get$iS())
i=G.id("fireworks",o,$.$get$iJ(),$.$get$iI())
n=$.$get$hT()
h=new G.dE(P.a5(),"stars",!1,!0)
h.G("cDepthTest",!0)
h.G("cDepthWrite",!1)
h.G("cBlendEquation",n)
h.G("cStencilFunc",$.$get$ie())
g=s.createElement("canvas")
g.width=64
g.height=64
f=C.r.cd(g,"2d")
e=(f&&C.p).by(f,32,32,1,32,32,22);(e&&C.n).ae(e,0,"gray")
C.n.ae(e,1,"black")
f.fillStyle=e
C.p.dr(f,0,0,64,64)
e=C.p.by(f,32,32,1,32,32,6);(e&&C.n).ae(e,0,"white")
C.n.ae(e,1,"gray")
f.globalAlpha=0.9
f.fillStyle=e
f.arc(32,32,4,0,6.283185307179586,!1)
f.fill("nonzero")
s=new G.es(!1,!1,!1,!0,1,9729,9729)
n=J.j7(o.a)
m=new G.dl(g,"Utils::Particles",n,3553,o,s)
J.bo(o.a,3553,n)
J.jn(o.a,37440,1)
m.cD(g)
s.cw(o,3553)
H.b(J.ji(o.a)===0)
J.bo(o.a,3553,null)
h.G("uTexture",m)
h.G("uPointSize",1000)
s=new T.S(new Float32Array(16))
s.a5()
h.G("uModelMatrix",s)
h.G("uColor",$.$get$hZ())
d=R.kd(j,2000,100)
c=R.kI(i)
t.a=0
new R.fP(t,l,h,j,d,k,i,c).$1(0)},
fP:function fP(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
kd:function(a,b,c){var t,s,r,q
t="stars_"+b
s=b*3
r=new Float32Array(s)
for(q=0;q<s;++q)r[q]=($.$get$iu().aj()-0.5)*c
s=G.i7(t,a.d,0,a.e.x)
s.aZ(r)
return s}}
var v=[C,H,J,P,W,B,G,A,T,R]
setFunctionNamesIfNecessary(v)
var $={}
H.h9.prototype={}
J.a.prototype={
t:function(a,b){return a===b},
gq:function(a){return H.am(a)},
k:function(a){return"Instance of '"+H.b1(a)+"'"}}
J.dr.prototype={
k:function(a){return String(a)},
gq:function(a){return a?519018:218159},
$isaK:1}
J.bG.prototype={
t:function(a,b){return null==b},
k:function(a){return"null"},
gq:function(a){return 0},
$isF:1}
J.aX.prototype={
gq:function(a){return 0},
k:function(a){return String(a)},
$isjU:1}
J.dZ.prototype={}
J.ap.prototype={}
J.ai.prototype={
k:function(a){var t=a[$.$get$i_()]
return t==null?this.cr(a):J.bq(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ish6:1}
J.af.prototype={
l:function(a,b){if(!!a.fixed$length)H.D(P.q("add"))
a.push(b)},
d4:function(a,b){var t,s,r,q,p
t=a.length
if(!!a.fixed$length)H.D(P.q("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.a2)(b),++r,t=p){q=b[r]
p=t+1
H.b(t===a.length||H.D(P.ad(a)))
a.push(q)}},
bM:function(a,b){return new H.bK(a,b,[H.aN(a,0),null])},
ah:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.i(a[s])
return t.join(b)},
m:function(a,b){return a[b]},
gds:function(a){if(a.length>0)return a[0]
throw H.c(H.h7())},
gaG:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.c(H.h7())},
aS:function(a,b,c,d,e){var t,s,r
if(!!a.immutable$list)H.D(P.q("setRange"))
P.ic(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.D(P.bT(e,0,null,"skipCount",null))
s=J.L(d)
if(e+t>s.gj(d))throw H.c(H.jT())
if(e<b)for(r=t-1;r>=0;--r)a[b+r]=s.h(d,e+r)
else for(r=0;r<t;++r)a[b+r]=s.h(d,e+r)},
cn:function(a,b){if(!!a.immutable$list)H.D(P.q("sort"))
H.k9(a,P.kC())},
aU:function(a){return this.cn(a,null)},
W:function(a,b){var t
for(t=0;t<a.length;++t)if(J.z(a[t],b))return!0
return!1},
k:function(a){return P.dq(a,"[","]")},
gu:function(a){return new J.cV(a,a.length,0,null,[H.aN(a,0)])},
gq:function(a){return H.am(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.D(P.q("set length"))
if(b<0)throw H.c(P.bT(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.aL(a,b))
if(b>=a.length||b<0)throw H.c(H.aL(a,b))
return a[b]},
i:function(a,b,c){if(!!a.immutable$list)H.D(P.q("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.aL(a,b))
if(b>=a.length||b<0)throw H.c(H.aL(a,b))
a[b]=c},
$iso:1,
$aso:function(){},
$isj:1,
$isk:1}
J.h8.prototype={}
J.cV.prototype={
gp:function(a){return this.d},
n:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.c(H.a2(t))
r=this.c
if(r>=s){this.sb4(null)
return!1}this.sb4(t[r]);++this.c
return!0},
sb4:function(a){this.d=a}}
J.az.prototype={
F:function(a,b){var t
if(typeof b!=="number")throw H.c(H.H(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaF(b)
if(this.gaF(a)===t)return 0
if(this.gaF(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaF:function(a){return a===0?1/a<0:a<0},
N:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.q(""+a+".round()"))},
dc:function(a,b,c){if(this.F(b,c)>0)throw H.c(H.H(b))
if(this.F(a,b)<0)return b
if(this.F(a,c)>0)return c
return a},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gq:function(a){return a&0x1FFFFFFF},
P:function(a,b){if(typeof b!=="number")throw H.c(H.H(b))
return a+b},
S:function(a,b){if(typeof b!=="number")throw H.c(H.H(b))
return a-b},
cb:function(a,b){if(typeof b!=="number")throw H.c(H.H(b))
return a/b},
v:function(a,b){if(typeof b!=="number")throw H.c(H.H(b))
return a*b},
aX:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bk(a,b)},
B:function(a,b){return(a|0)===a?a/b|0:this.bk(a,b)},
bk:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.c(P.q("Result of truncating division is "+H.i(t)+": "+H.i(a)+" ~/ "+b))},
az:function(a,b){var t
if(a>0)t=this.d1(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
d1:function(a,b){return b>31?0:a>>>b},
ca:function(a,b){if(typeof b!=="number")throw H.c(H.H(b))
return(a&b)>>>0},
cs:function(a,b){if(typeof b!=="number")throw H.c(H.H(b))
return(a^b)>>>0},
am:function(a,b){if(typeof b!=="number")throw H.c(H.H(b))
return a<b},
al:function(a,b){if(typeof b!=="number")throw H.c(H.H(b))
return a>b},
cc:function(a,b){if(typeof b!=="number")throw H.c(H.H(b))
return a>=b},
$isB:1,
$asB:function(){return[P.a0]},
$isa6:1,
$isa0:1}
J.bF.prototype={$isw:1}
J.ds.prototype={}
J.ah.prototype={
ao:function(a,b){if(b>=a.length)throw H.c(H.aL(a,b))
return a.charCodeAt(b)},
P:function(a,b){if(typeof b!=="string")throw H.c(P.hS(b,null,null))
return a+b},
aW:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.e2(b,null,null))
if(b>c)throw H.c(P.e2(b,null,null))
if(c>a.length)throw H.c(P.e2(c,null,null))
return a.substring(b,c)},
cp:function(a,b){return this.aW(a,b,null)},
F:function(a,b){var t
if(typeof b!=="string")throw H.c(H.H(b))
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
h:function(a,b){if(b>=a.length||!1)throw H.c(H.aL(a,b))
return a[b]},
$iso:1,
$aso:function(){},
$isB:1,
$asB:function(){return[P.u]},
$isu:1}
H.j.prototype={}
H.aA.prototype={
gu:function(a){return new H.bI(this,this.gj(this),0,null,[H.a7(this,"aA",0)])},
dS:function(a,b){var t,s
t=H.N([],[H.a7(this,"aA",0)])
C.a.sj(t,this.gj(this))
for(s=0;s<this.gj(this);++s)t[s]=this.m(0,s)
return t},
dR:function(a){return this.dS(a,!0)}}
H.bI.prototype={
gp:function(a){return this.d},
n:function(){var t,s,r,q
t=this.a
s=J.L(t)
r=s.gj(t)
if(this.b!==r)throw H.c(P.ad(t))
q=this.c
if(q>=r){this.sU(null)
return!1}this.sU(s.m(t,q));++this.c
return!0},
sU:function(a){this.d=a}}
H.bJ.prototype={
gu:function(a){return new H.dD(null,J.bp(this.a),this.b,this.$ti)},
gj:function(a){return J.aQ(this.a)},
$asQ:function(a,b){return[b]}}
H.dc.prototype={$isj:1,
$asj:function(a,b){return[b]}}
H.dD.prototype={
n:function(){var t=this.b
if(t.n()){this.sU(this.c.$1(t.gp(t)))
return!0}this.sU(null)
return!1},
gp:function(a){return this.a},
sU:function(a){this.a=a},
$asbE:function(a,b){return[b]}}
H.bK.prototype={
gj:function(a){return J.aQ(this.a)},
m:function(a,b){return this.b.$1(J.je(this.a,b))},
$asj:function(a,b){return[b]},
$asaA:function(a,b){return[b]},
$asQ:function(a,b){return[b]}}
H.ay.prototype={}
H.fX.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.fY.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.fh.prototype={
sdE:function(a){this.z=a},
sdH:function(a){this.ch=a}}
H.aE.prototype={
cJ:function(){var t,s
t=this.e
s=t.a
this.c.l(0,s)
this.cM(s,t)},
bn:function(a,b){if(!this.f.t(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.aC()},
dN:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.a0(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.be();++r.d}this.y=!1}this.aC()},
d5:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.t(a),s=0;r=this.ch,s<r.length;s+=2)if(t.t(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
dM:function(a){var t,s,r
if(this.ch==null)return
for(t=J.t(a),s=0;r=this.ch,s<r.length;s+=2)if(t.t(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.D(P.q("removeRange"))
P.ic(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
cm:function(a,b){if(!this.r.t(0,a))return
this.db=b},
dw:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.w(0,c)
return}H.b(b===1)
t=this.cx
if(t==null){t=P.he(null,null)
this.cx=t}t.H(0,new H.fa(a,c))},
dv:function(a,b){var t
if(!this.r.t(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.ai()
return}H.b(b===1)
t=this.cx
if(t==null){t=P.he(null,null)
this.cx=t}t.H(0,this.gdF())},
dz:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.a1(a)
if(b!=null)P.a1(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.bq(a)
s[1]=b==null?null:b.k(0)
for(r=new P.b7(t,t.r,null,null,[null]),r.c=t.e;r.n();)r.d.w(0,s)},
Y:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.a3(o)
p=H.a8(o)
this.dz(q,p)
if(this.db){this.ai()
if(this===u.globalState.e)throw o}}finally{this.cy=H.ky(r)
u.globalState.d=H.iO(t,"$isaE")
if(t!=null)$=t.gdD()
if(this.cx!=null)for(;n=this.cx,!n.gag(n);)this.cx.bO().$0()}return s},
bL:function(a){return this.b.h(0,a)},
cM:function(a,b){var t=this.b
if(t.C(0,a))throw H.c(P.bA("Registry: ports must be registered only once."))
t.i(0,a,b)},
aC:function(){var t=this.b
if(t.gj(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.ai()},
ai:function(){var t,s,r
t=this.cx
if(t!=null)t.I(0)
for(t=this.b,s=t.gc7(t),s=s.gu(s);s.n();)s.gp(s).cN()
t.I(0)
this.c.I(0)
u.globalState.z.a0(0,this.a)
this.dx.I(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].w(0,t[r+1])
this.ch=null}},
gdD:function(){return this.d},
gde:function(){return this.e}}
H.fa.prototype={
$0:function(){this.a.w(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.eU.prototype={
dh:function(){var t=this.a
if(t.b===t.c)return
return t.bO()},
bQ:function(){var t,s,r
t=this.dh()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.C(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gag(s)}else s=!1
else s=!1
else s=!1
if(s)H.D(P.bA("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gag(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.ak(["command","close"])
r=new H.M(!0,P.aF(null,P.w)).A(r)
s.toString
self.postMessage(r)}return!1}t.dK()
return!0},
bi:function(){if(self.window!=null)new H.eV(this).$0()
else for(;this.bQ(););},
a1:function(){var t,s,r,q,p
if(!u.globalState.x)this.bi()
else try{this.bi()}catch(r){t=H.a3(r)
s=H.a8(r)
q=u.globalState.Q
p=P.ak(["command","error","msg",H.i(t)+"\n"+H.i(s)])
p=new H.M(!0,P.aF(null,P.w)).A(p)
q.toString
self.postMessage(p)}}}
H.eV.prototype={
$0:function(){if(!this.a.bQ())return
P.kc(C.t,this)},
$S:function(){return{func:1,v:true}}}
H.as.prototype={
dK:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.Y(this.b)}}
H.fg.prototype={}
H.dn.prototype={
$0:function(){H.jP(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.dp.prototype={
$0:function(){var t,s
t=this.a
t.x=!0
if(!this.b)this.c.$1(this.d)
else{s=this.c
if(H.aM(s,{func:1,args:[P.F,P.F]}))s.$2(this.e,this.d)
else if(H.aM(s,{func:1,args:[P.F]}))s.$1(this.e)
else s.$0()}t.aC()},
$S:function(){return{func:1,v:true}}}
H.eQ.prototype={}
H.aG.prototype={
w:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.km(b)
if(t.gde()===s){s=J.L(r)
switch(s.h(r,0)){case"pause":t.bn(s.h(r,1),s.h(r,2))
break
case"resume":t.dN(s.h(r,1))
break
case"add-ondone":t.d5(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.dM(s.h(r,1))
break
case"set-errors-fatal":t.cm(s.h(r,1),s.h(r,2))
break
case"ping":t.dw(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.dv(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.a0(0,s)
break}return}u.globalState.f.a.H(0,new H.as(t,new H.fi(this,r),"receive"))},
t:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.aG){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gq:function(a){return this.b.a}}
H.fi.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.cK(0,this.b)},
$S:function(){return{func:1}}}
H.bg.prototype={
w:function(a,b){var t,s,r
t=P.ak(["command","message","port",this,"msg",b])
s=new H.M(!0,P.aF(null,P.w)).A(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
t:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bg){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gq:function(a){return C.b.cs((this.b<<16^this.a<<8)>>>0,this.c)}}
H.bU.prototype={
cN:function(){this.c=!0
this.b=null},
cK:function(a,b){if(this.c)return
this.b.$1(b)},
$isk4:1}
H.eu.prototype={
cE:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.H(0,new H.as(s,new H.ev(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){H.fz()
this.c=self.setTimeout(H.bk(new H.ew(this,b),0),a)}else{H.b(a>0)
throw H.c(P.q("Timer greater than 0."))}}}
H.ev.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.ew.prototype={
$0:function(){var t=this.a
t.c=null
H.fO()
t.d=1
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.aa.prototype={
gq:function(a){var t=this.a
t=C.b.az(t,0)^C.b.B(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
t:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.aa){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.M.prototype={
A:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gj(t))
t=J.t(a)
if(!!t.$isb_)return["buffer",a]
if(!!t.$isal)return["typed",a]
if(!!t.$iso)return this.ci(a)
if(!!t.$isjM){r=this.gce()
q=t.gD(a)
q=H.hf(q,r,H.a7(q,"Q",0),null)
q=P.i5(q,!0,H.a7(q,"Q",0))
t=t.gc7(a)
t=H.hf(t,r,H.a7(t,"Q",0),null)
return["map",q,P.i5(t,!0,H.a7(t,"Q",0))]}if(!!t.$isjU)return this.cj(a)
if(!!t.$isa)this.c5(a)
if(!!t.$isk4)this.a2(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isaG)return this.ck(a)
if(!!t.$isbg)return this.cl(a)
if(!!t.$isac){p=a.$static_name
if(p==null)this.a2(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isaa)return["capability",a.a]
if(!(a instanceof P.A))this.c5(a)
return["dart",u.classIdExtractor(a),this.cg(u.classFieldsExtractor(a))]},
a2:function(a,b){throw H.c(P.q((b==null?"Can't transmit:":b)+" "+H.i(a)))},
c5:function(a){return this.a2(a,null)},
ci:function(a){var t
H.b(typeof a!=="string")
t=this.cf(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.a2(a,"Can't serialize indexable: ")},
cf:function(a){var t,s
t=[]
C.a.sj(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.A(a[s])
return t},
cg:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.A(a[t]))
return a},
cj:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.a2(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sj(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.A(a[t[r]])
return["js-object",t,s]},
cl:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
ck:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.ar.prototype={
J:function(a){var t,s,r,q
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.c(P.hR("Bad serialized message: "+H.i(a)))
switch(C.a.gds(a)){case"ref":H.b(J.z(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.b(J.z(a[0],"buffer"))
t=a[1]
C.a.l(this.b,t)
return t
case"typed":H.b(J.z(a[0],"typed"))
t=a[1]
C.a.l(this.b,t)
return t
case"fixed":H.b(J.z(a[0],"fixed"))
t=a[1]
C.a.l(this.b,t)
return J.ag(H.N(this.X(t),[null]))
case"extendable":H.b(J.z(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.N(this.X(t),[null])
case"mutable":H.b(J.z(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.X(t)
case"const":H.b(J.z(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
return J.ag(H.N(this.X(t),[null]))
case"map":return this.dk(a)
case"sendport":return this.dl(a)
case"raw sendport":H.b(J.z(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.dj(a)
case"function":H.b(J.z(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.b(J.z(a[0],"capability"))
return new H.aa(a[1])
case"dart":H.b(J.z(a[0],"dart"))
s=a[1]
r=a[2]
q=u.instanceFromClassId(s)
C.a.l(this.b,q)
this.X(r)
return u.initializeEmptyInstance(s,q,r)
default:throw H.c("couldn't deserialize: "+H.i(a))}},
X:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.J(a[t]))
return a},
dk:function(a){var t,s,r,q,p
H.b(J.z(a[0],"map"))
t=a[1]
s=a[2]
r=P.a5()
C.a.l(this.b,r)
t=J.jm(t,this.gdi()).dR(0)
for(q=J.L(s),p=0;p<t.length;++p)r.i(0,t[p],this.J(q.h(s,p)))
return r},
dl:function(a){var t,s,r,q,p,o,n
H.b(J.z(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.bL(r)
if(o==null)return
n=new H.aG(o,s)}else n=new H.bg(t,r,s)
C.a.l(this.b,n)
return n},
dj:function(a){var t,s,r,q,p,o
H.b(J.z(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.L(t),p=J.L(s),o=0;o<q.gj(t);++o)r[q.h(t,o)]=this.J(p.h(s,o))
return r}}
H.e3.prototype={}
H.eA.prototype={
E:function(a){var t,s,r
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
H.dQ.prototype={
k:function(a){var t=this.b
if(t==null)return"NullError: "+H.i(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.du.prototype={
k:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.i(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.i(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.i(this.a)+")"}}
H.eF.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.fZ.prototype={
$1:function(a){if(!!J.t(a).$isax)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(a){return{func:1,args:[,]}}}
H.cw.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t},
$isaC:1}
H.fI.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.fJ.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.fK.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.fL.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.fM.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.ac.prototype={
k:function(a){return"Closure '"+H.b1(this).trim()+"'"},
$ish6:1,
gdY:function(){return this},
$D:null}
H.ep.prototype={}
H.eh.prototype={
k:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.aR.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.aR))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gq:function(a){var t,s
t=this.c
if(t==null)s=H.am(this.a)
else s=typeof t!=="object"?J.aP(t):H.am(t)
return(s^H.am(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.b1(t)+"'")}}
H.eC.prototype={
k:function(a){return this.a}}
H.cZ.prototype={
k:function(a){return this.a}}
H.e7.prototype={
k:function(a){return"RuntimeError: "+H.i(this.a)}}
H.eL.prototype={
k:function(a){return C.i.P("Assertion failed: ",P.bz(this.a))}}
H.c5.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gq:function(a){return J.aP(this.a)},
t:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.c5){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.R.prototype={
gj:function(a){return this.a},
gag:function(a){return this.a===0},
gD:function(a){return new H.dx(this,[H.aN(this,0)])},
gc7:function(a){return H.hf(this.gD(this),new H.dt(this),H.aN(this,0),H.aN(this,1))},
C:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bb(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bb(s,b)}else return this.dA(b)},
dA:function(a){var t=this.d
if(t==null)return!1
return this.a_(this.ac(t,this.Z(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.V(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.V(r,b)
return s==null?null:s.b}else return this.dB(b)},
dB:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.ac(t,this.Z(a))
r=this.a_(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.av()
this.b=t}this.b6(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.av()
this.c=s}this.b6(s,b,c)}else{r=this.d
if(r==null){r=this.av()
this.d=r}q=this.Z(b)
p=this.ac(r,q)
if(p==null)this.ay(r,q,[this.aw(b,c)])
else{o=this.a_(p,b)
if(o>=0)p[o].b=c
else p.push(this.aw(b,c))}}},
a0:function(a,b){if(typeof b==="string")return this.bh(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bh(this.c,b)
else return this.dC(b)},
dC:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.ac(t,this.Z(a))
r=this.a_(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bl(q)
return q.b},
I:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.au()}},
af:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.c(P.ad(this))
t=t.c}},
b6:function(a,b,c){var t=this.V(a,b)
if(t==null)this.ay(a,b,this.aw(b,c))
else t.b=c},
bh:function(a,b){var t
if(a==null)return
t=this.V(a,b)
if(t==null)return
this.bl(t)
this.bc(a,b)
return t.b},
au:function(){this.r=this.r+1&67108863},
aw:function(a,b){var t,s
t=new H.dw(a,b,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.au()
return t},
bl:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.au()},
Z:function(a){return J.aP(a)&0x3ffffff},
a_:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.z(a[s].a,b))return s
return-1},
k:function(a){return P.i6(this)},
V:function(a,b){return a[b]},
ac:function(a,b){return a[b]},
ay:function(a,b,c){H.b(c!=null)
a[b]=c},
bc:function(a,b){delete a[b]},
bb:function(a,b){return this.V(a,b)!=null},
av:function(){var t=Object.create(null)
this.ay(t,"<non-identifier-key>",t)
this.bc(t,"<non-identifier-key>")
return t},
$isjM:1}
H.dt.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(a){return{func:1,args:[,]}}}
H.dw.prototype={}
H.dx.prototype={
gj:function(a){return this.a.a},
gu:function(a){var t,s
t=this.a
s=new H.dy(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.dy.prototype={
gp:function(a){return this.d},
n:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.ad(t))
else{t=this.c
if(t==null){this.sb5(null)
return!1}else{this.sb5(t.a)
this.c=this.c.c
return!0}}},
sb5:function(a){this.d=a}}
H.fE.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[,]}}}
H.fF.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(a,b){return{func:1,args:[,P.u]}}}
H.fG.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[P.u]}}}
H.b_.prototype={$isb_:1}
H.al.prototype={$isal:1}
H.bN.prototype={
gj:function(a){return a.length},
$iso:1,
$aso:function(){},
$isp:1,
$asp:function(){}}
H.b0.prototype={
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
i:function(a,b,c){H.a_(b,a,a.length)
a[b]=c},
$isj:1,
$asj:function(){return[P.a6]},
$asay:function(){return[P.a6]},
$asl:function(){return[P.a6]},
$isk:1,
$ask:function(){return[P.a6]}}
H.bO.prototype={
i:function(a,b,c){H.a_(b,a,a.length)
a[b]=c},
$isj:1,
$asj:function(){return[P.w]},
$asay:function(){return[P.w]},
$asl:function(){return[P.w]},
$isk:1,
$ask:function(){return[P.w]}}
H.bM.prototype={$ish5:1}
H.dK.prototype={
h:function(a,b){H.a_(b,a,a.length)
return a[b]}}
H.dL.prototype={
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
$isjL:1}
H.dM.prototype={
h:function(a,b){H.a_(b,a,a.length)
return a[b]}}
H.dN.prototype={
h:function(a,b){H.a_(b,a,a.length)
return a[b]}}
H.dO.prototype={
h:function(a,b){H.a_(b,a,a.length)
return a[b]}}
H.bP.prototype={
gj:function(a){return a.length},
h:function(a,b){H.a_(b,a,a.length)
return a[b]}}
H.dP.prototype={
gj:function(a){return a.length},
h:function(a,b){H.a_(b,a,a.length)
return a[b]}}
H.b8.prototype={}
H.b9.prototype={}
H.ba.prototype={}
H.bb.prototype={}
P.eN.prototype={
$1:function(a){var t,s
H.fO()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(a){return{func:1,args:[,]}}}
P.eM.prototype={
$1:function(a){var t,s
t=this.a
H.b(t.a==null)
H.fz()
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(a){return{func:1,args:[{func:1,v:true}]}}}
P.eO.prototype={
$0:function(){H.fO()
this.a.$0()},
$S:function(){return{func:1}}}
P.eP.prototype={
$0:function(){H.fO()
this.a.$0()},
$S:function(){return{func:1}}}
P.h3.prototype={}
P.eR.prototype={}
P.fq.prototype={
dd:function(a,b){var t=this.a
if(t.a!==0)throw H.c(P.ka("Future already completed"))
t.ar(b)}}
P.ce.prototype={
dI:function(a){if(this.c!==6)return!0
H.b(!0)
return this.b.b.aJ(this.d,a.a)},
du:function(a){var t,s
t=(this.c&2)!==0
if(t){H.b(t)
t=this.e!=null}else t=!1
H.b(t)
s=this.e
t=this.b.b
if(H.aM(s,{func:1,args:[P.A,P.aC]}))return t.dO(s,a.a,a.b)
else return t.aJ(s,a.a)}}
P.Y.prototype={
bV:function(a,b){var t,s,r
t=$.y
if(t!==C.f){t.toString
if(b!=null)b=P.kq(b,t)}s=new P.Y(0,t,null,[null])
r=b==null?1:3
this.b7(new P.ce(null,s,r,a,b,[H.aN(this,0),null]))
return s},
bU:function(a){return this.bV(a,null)},
an:function(a){H.b(this.a<4)
H.b(a.a>=4)
this.a=a.a
this.c=a.c},
b7:function(a){var t
H.b(a.a==null)
t=this.a
if(t<=1){a.a=H.iO(this.c,"$isce")
this.c=a}else{if(t===2){H.b(!0)
t=this.c
if(t.a<4){t.b7(a)
return}this.an(t)}H.b(this.a>=4)
t=this.b
t.toString
P.fu(null,null,t,new P.f_(this,a))}},
bg:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.b(!0)
s=this.c
if(s.a<4){s.bg(a)
return}this.an(s)}H.b(this.a>=4)
t.a=this.ad(a)
s=this.b
s.toString
P.fu(null,null,s,new P.f3(t,this))}},
ax:function(){H.b(this.a<4)
var t=this.c
this.c=null
return this.ad(t)},
ad:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
ar:function(a){var t,s,r
H.b(this.a<4)
t=this.$ti
s=H.ht(a,"$isdi",t,"$asdi")
if(s){t=H.ht(a,"$isY",t,null)
if(t)P.iw(a,this)
else P.kk(a,this)}else{r=this.ax()
H.b(this.a<4)
this.a=4
this.c=a
P.b6(this,r)}},
a9:function(a,b){var t
H.b(this.a<4)
t=this.ax()
H.b(this.a<4)
this.a=8
this.c=new P.av(a,b)
P.b6(this,t)},
cP:function(a){return this.a9(a,null)},
$isdi:1,
gaA:function(){return this.a},
gd0:function(){return this.c}}
P.f_.prototype={
$0:function(){P.b6(this.a,this.b)},
$S:function(){return{func:1}}}
P.f3.prototype={
$0:function(){P.b6(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.f0.prototype={
$1:function(a){var t=this.a
H.b(t.a===1)
H.b(t.a===1)
t.a=0
t.ar(a)},
$S:function(a){return{func:1,args:[,]}}}
P.f1.prototype={
$2:function(a,b){var t=this.a
H.b(t.a===1)
t.a9(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(a,b){return{func:1,args:[,],opt:[,]}}}
P.f2.prototype={
$0:function(){this.a.a9(this.b,this.c)},
$S:function(){return{func:1}}}
P.f6.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.c
p=q.c
H.b((p&1)===0)
o=(p&2)===0
H.b(o)
t=null
try{H.b(o)
H.b(p===8)
t=q.b.b.bP(q.d)}catch(n){s=H.a3(n)
r=H.a8(n)
if(this.d){q=this.a.a
H.b(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.b(q.a===8)
p.b=q.c}else p.b=new P.av(s,r)
p.a=!0
return}if(!!J.t(t).$isdi){if(t instanceof P.Y&&t.gaA()>=4){if(t.gaA()===8){q=t
H.b(q.gaA()===8)
p=this.b
p.b=q.gd0()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.bU(new P.f7(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.f7.prototype={
$1:function(a){return this.a},
$S:function(a){return{func:1,args:[,]}}}
P.f5.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.b((r.c&1)!==0)
this.a.b=r.b.b.aJ(r.d,this.c)}catch(q){t=H.a3(q)
s=H.a8(q)
r=this.a
r.b=new P.av(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.f4.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.b(q.a===8)
t=q.c
q=this.c
if(q.dI(t)){H.b((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.du(t)
p.a=!1}}catch(o){s=H.a3(o)
r=H.a8(o)
q=this.a
p=q.a
H.b(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.b(q.a===8)
m.b=q.c}else m.b=new P.av(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.c6.prototype={}
P.ek.prototype={
gj:function(a){var t,s
t={}
s=new P.Y(0,$.y,null,[P.w])
t.a=0
this.dG(new P.em(t),!0,new P.en(t,s),s.gcO())
return s}}
P.em.prototype={
$1:function(a){++this.a.a},
$S:function(a){return{func:1,args:[,]}}}
P.en.prototype={
$0:function(){this.b.ar(this.a.a)},
$S:function(){return{func:1}}}
P.el.prototype={}
P.hi.prototype={}
P.av.prototype={
k:function(a){return H.i(this.a)},
$isax:1}
P.fr.prototype={}
P.ft.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.bR()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.c(t)
r=H.c(t)
r.stack=s.k(0)
throw r},
$S:function(){return{func:1}}}
P.fk.prototype={
dP:function(a){var t,s,r
try{if(C.f===$.y){a.$0()
return}P.iz(null,null,this,a)}catch(r){t=H.a3(r)
s=H.a8(r)
P.fs(null,null,this,t,s)}},
dQ:function(a,b){var t,s,r
try{if(C.f===$.y){a.$1(b)
return}P.iA(null,null,this,a,b)}catch(r){t=H.a3(r)
s=H.a8(r)
P.fs(null,null,this,t,s)}},
d8:function(a){return new P.fm(this,a)},
aD:function(a){return new P.fl(this,a)},
d9:function(a){return new P.fn(this,a)},
h:function(a,b){return},
bP:function(a){if($.y===C.f)return a.$0()
return P.iz(null,null,this,a)},
aJ:function(a,b){if($.y===C.f)return a.$1(b)
return P.iA(null,null,this,a,b)},
dO:function(a,b,c){if($.y===C.f)return a.$2(b,c)
return P.kr(null,null,this,a,b,c)}}
P.fm.prototype={
$0:function(){return this.a.bP(this.b)},
$S:function(){return{func:1}}}
P.fl.prototype={
$0:function(){return this.a.dP(this.b)},
$S:function(){return{func:1}}}
P.fn.prototype={
$1:function(a){return this.a.dQ(this.b,a)},
$S:function(a){return{func:1,args:[,]}}}
P.fe.prototype={
Z:function(a){return H.kU(a)&0x3ffffff},
a_:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.fc.prototype={
gu:function(a){var t=new P.b7(this,this.r,null,null,[null])
t.c=this.e
return t},
gj:function(a){return this.a},
W:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.cQ(b)},
cQ:function(a){var t=this.d
if(t==null)return!1
return this.ab(t[this.aa(a)],a)>=0},
bL:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.W(0,a)?a:null
else return this.cY(a)},
cY:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.aa(a)]
r=this.ab(s,a)
if(r<0)return
return J.hE(s,r).gcS()},
l:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.hp()
this.b=t}return this.b8(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.hp()
this.c=s}return this.b8(s,b)}else return this.H(0,b)},
H:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.hp()
this.d=t}s=this.aa(b)
r=t[s]
if(r==null){q=[this.aq(b)]
H.b(q!=null)
t[s]=q}else{if(this.ab(r,b)>=0)return!1
r.push(this.aq(b))}return!0},
a0:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.b9(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.b9(this.c,b)
else return this.cZ(0,b)},
cZ:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.aa(b)]
r=this.ab(s,b)
if(r<0)return!1
this.ba(s.splice(r,1)[0])
return!0},
I:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.ap()}},
b8:function(a,b){var t
if(a[b]!=null)return!1
t=this.aq(b)
H.b(!0)
a[b]=t
return!0},
b9:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.ba(t)
delete a[b]
return!0},
ap:function(){this.r=this.r+1&67108863},
aq:function(a){var t,s
t=new P.fd(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.ap()
return t},
ba:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.ap()},
aa:function(a){return J.aP(a)&0x3ffffff},
ab:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.z(a[s].a,b))return s
return-1}}
P.fd.prototype={
gcS:function(){return this.a}}
P.b7.prototype={
gp:function(a){return this.d},
n:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.ad(t))
else{t=this.c
if(t==null){this.sT(null)
return!1}else{this.sT(t.a)
this.c=this.c.b
return!0}}},
sT:function(a){this.d=a}}
P.f9.prototype={}
P.hd.prototype={$isj:1}
P.l.prototype={
gu:function(a){return new H.bI(a,this.gj(a),0,null,[H.a7(a,"l",0)])},
m:function(a,b){return this.h(a,b)},
bM:function(a,b){return new H.bK(a,b,[H.a7(a,"l",0),null])},
dt:function(a,b,c){var t,s,r
t=this.gj(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gj(a))throw H.c(P.ad(a))}return s},
k:function(a){return P.dq(a,"[","]")}}
P.dB.prototype={}
P.dC.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.i(a)
t.a=s+": "
t.a+=H.i(b)},
$S:function(a,b){return{func:1,args:[,,]}}}
P.aY.prototype={
af:function(a,b){var t,s
for(t=J.bp(this.gD(a));t.n();){s=t.gp(t)
b.$2(s,this.h(a,s))}},
gj:function(a){return J.aQ(this.gD(a))},
k:function(a){return P.i6(a)}}
P.dz.prototype={
cz:function(a,b){var t
H.b(!0)
t=new Array(8)
t.fixed$length=Array
this.sbj(H.N(t,[b]))},
gu:function(a){return new P.ff(this,this.c,this.d,this.b,null,this.$ti)},
gag:function(a){return this.b===this.c},
gj:function(a){return(this.c-this.b&this.a.length-1)>>>0},
m:function(a,b){var t,s
t=this.gj(this)
if(0>b||b>=t)H.D(P.x(b,this,"index",null,t))
s=this.a
return s[(this.b+b&s.length-1)>>>0]},
I:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
k:function(a){return P.dq(this,"{","}")},
bO:function(){var t,s,r
t=this.b
if(t===this.c)throw H.c(H.h7());++this.d
s=this.a
r=s[t]
s[t]=null
this.b=(t+1&s.length-1)>>>0
return r},
H:function(a,b){var t,s
t=this.a
s=this.c
t[s]=b
t=(s+1&t.length-1)>>>0
this.c=t
if(this.b===t)this.be();++this.d},
be:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.N(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.aS(s,0,q,t,r)
C.a.aS(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbj(s)},
sbj:function(a){this.a=a}}
P.ff.prototype={
gp:function(a){return this.e},
n:function(){var t,s
t=this.a
if(this.c!==t.d)H.D(P.ad(t))
s=this.d
if(s===this.b){this.sT(null)
return!1}this.sT(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sT:function(a){this.e=a}}
P.ea.prototype={
k:function(a){return P.dq(this,"{","}")},
$isj:1}
P.e9.prototype={}
P.aK.prototype={}
P.B.prototype={}
P.aT.prototype={
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.aT))return!1
return this.a===b.a&&this.b===b.b},
F:function(a,b){return C.b.F(this.a,b.a)},
gq:function(a){var t=this.a
return(t^C.b.az(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.jG(H.k2(this))
s=P.bw(H.k0(this))
r=P.bw(H.jX(this))
q=P.bw(H.jY(this))
p=P.bw(H.k_(this))
o=P.bw(H.k1(this))
n=P.jH(H.jZ(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isB:1,
$asB:function(){return[P.aT]}}
P.a6.prototype={}
P.ae.prototype={
am:function(a,b){return C.b.am(this.a,b.gcR())},
al:function(a,b){return C.b.al(this.a,b.gcR())},
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.ae))return!1
return this.a===b.a},
gq:function(a){return this.a&0x1FFFFFFF},
F:function(a,b){return C.b.F(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.db()
s=this.a
if(s<0)return"-"+new P.ae(0-s).k(0)
r=t.$1(C.b.B(s,6e7)%60)
q=t.$1(C.b.B(s,1e6)%60)
p=new P.da().$1(s%1e6)
return""+C.b.B(s,36e8)+":"+H.i(r)+":"+H.i(q)+"."+H.i(p)},
$isB:1,
$asB:function(){return[P.ae]}}
P.da.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(a){return{func:1,ret:P.u,args:[P.w]}}}
P.db.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(a){return{func:1,ret:P.u,args:[P.w]}}}
P.ax.prototype={}
P.br.prototype={
k:function(a){return"Assertion failed"}}
P.bR.prototype={
k:function(a){return"Throw of null."}}
P.a4.prototype={
gat:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gas:function(){return""},
k:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+t
q=this.gat()+s+r
if(!this.a)return q
p=this.gas()
o=P.bz(this.b)
return q+p+": "+H.i(o)}}
P.bS.prototype={
gat:function(){return"RangeError"},
gas:function(){var t,s,r
H.b(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.i(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.i(t)
else if(r>t)s=": Not in range "+H.i(t)+".."+H.i(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.i(t)}return s}}
P.dm.prototype={
gat:function(){return"RangeError"},
gas:function(){H.b(this.a)
if(J.iY(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.i(t)},
gj:function(a){return this.f}}
P.eG.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.eE.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.b2.prototype={
k:function(a){return"Bad state: "+this.a}}
P.d0.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.i(P.bz(t))+"."}}
P.bZ.prototype={
k:function(a){return"Stack Overflow"},
$isax:1}
P.d5.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.h4.prototype={}
P.eZ.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.i(t)}}
P.dd.prototype={
h:function(a,b){var t,s
t=this.a
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.D(P.hS(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.i9(b,"expando$values")
return s==null?null:H.i9(s,t)},
k:function(a){return"Expando:"+H.i(this.b)}}
P.w.prototype={}
P.Q.prototype={
gj:function(a){var t,s
H.b(!this.$isj)
t=this.gu(this)
for(s=0;t.n();)++s
return s},
m:function(a,b){var t,s,r
if(b<0)H.D(P.bT(b,0,null,"index",null))
for(t=this.gu(this),s=0;t.n();){r=t.gp(t)
if(b===s)return r;++s}throw H.c(P.x(b,this,"index",null,s))},
k:function(a){return P.jS(this,"(",")")}}
P.bE.prototype={}
P.k.prototype={$isj:1}
P.aB.prototype={}
P.F.prototype={
gq:function(a){return P.A.prototype.gq.call(this,this)},
k:function(a){return"null"}}
P.a0.prototype={$isB:1,
$asB:function(){return[P.a0]}}
P.A.prototype={constructor:P.A,$isA:1,
t:function(a,b){return this===b},
gq:function(a){return H.am(this)},
k:function(a){return"Instance of '"+H.b1(this)+"'"},
toString:function(){return this.k(this)}}
P.aC.prototype={}
P.u.prototype={$isB:1,
$asB:function(){return[P.u]}}
P.b3.prototype={
gj:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
gL:function(){return this.a}}
W.h.prototype={}
W.cS.prototype={
gj:function(a){return a.length}}
W.cT.prototype={
k:function(a){return String(a)}}
W.cU.prototype={
k:function(a){return String(a)}}
W.bs.prototype={
aL:function(a,b,c){if(c!=null)return this.cU(a,b,P.kB(c,null))
return this.cV(a,b)},
cd:function(a,b){return this.aL(a,b,null)},
cU:function(a,b,c){return a.getContext(b,c)},
cV:function(a,b){return a.getContext(b)}}
W.bt.prototype={
ae:function(a,b,c){return a.addColorStop(b,c)}}
W.bu.prototype={
by:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
dr:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
ak:function(a){return P.fw(a.getContextAttributes())}}
W.ab.prototype={
gj:function(a){return a.length}}
W.d1.prototype={
gj:function(a){return a.length}}
W.aS.prototype={
gj:function(a){return a.length}}
W.d2.prototype={}
W.K.prototype={}
W.P.prototype={}
W.d3.prototype={
gj:function(a){return a.length}}
W.d4.prototype={
gj:function(a){return a.length}}
W.d6.prototype={
h:function(a,b){return a[b]},
gj:function(a){return a.length}}
W.aU.prototype={
dL:function(a,b){return a.querySelector(b)}}
W.d7.prototype={
k:function(a){return String(a)}}
W.bx.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
m:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[P.I]},
$isj:1,
$asj:function(){return[P.I]},
$isp:1,
$asp:function(){return[P.I]},
$asl:function(){return[P.I]},
$isk:1,
$ask:function(){return[P.I]},
$asn:function(){return[P.I]}}
W.by.prototype={
k:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.gO(a))+" x "+H.i(this.gM(a))},
t:function(a,b){var t
if(b==null)return!1
t=J.t(b)
if(!t.$isI)return!1
return a.left===t.gbJ(b)&&a.top===t.gbW(b)&&this.gO(a)===t.gO(b)&&this.gM(a)===t.gM(b)},
gq:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gO(a)
q=this.gM(a)
return W.iy(W.at(W.at(W.at(W.at(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gM:function(a){return a.height},
gbJ:function(a){return a.left},
gbW:function(a){return a.top},
gO:function(a){return a.width},
$isI:1,
$asI:function(){}}
W.d8.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
m:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[P.u]},
$isj:1,
$asj:function(){return[P.u]},
$isp:1,
$asp:function(){return[P.u]},
$asl:function(){return[P.u]},
$isk:1,
$ask:function(){return[P.u]},
$asn:function(){return[P.u]}}
W.d9.prototype={
gj:function(a){return a.length}}
W.e.prototype={
k:function(a){return a.localName}}
W.f.prototype={}
W.d.prototype={
cL:function(a,b,c,d){return a.addEventListener(b,H.bk(c,1),!1)}}
W.de.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
m:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.bB]},
$isj:1,
$asj:function(){return[W.bB]},
$isp:1,
$asp:function(){return[W.bB]},
$asl:function(){return[W.bB]},
$isk:1,
$ask:function(){return[W.bB]},
$asn:function(){return[W.bB]}}
W.df.prototype={
gj:function(a){return a.length}}
W.dh.prototype={
gj:function(a){return a.length}}
W.dj.prototype={
gj:function(a){return a.length}}
W.aV.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
m:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.v]},
$isj:1,
$asj:function(){return[W.v]},
$isp:1,
$asp:function(){return[W.v]},
$asl:function(){return[W.v]},
$isk:1,
$ask:function(){return[W.v]},
$asn:function(){return[W.v]}}
W.bD.prototype={}
W.dk.prototype={
w:function(a,b){return a.send(b)}}
W.aW.prototype={}
W.aj.prototype={$isaj:1}
W.dA.prototype={
k:function(a){return String(a)}}
W.dF.prototype={
gj:function(a){return a.length}}
W.dH.prototype={
dZ:function(a,b,c){return a.send(b,c)},
w:function(a,b){return a.send(b)}}
W.aZ.prototype={}
W.dI.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
m:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.bL]},
$isj:1,
$asj:function(){return[W.bL]},
$isp:1,
$asp:function(){return[W.bL]},
$asl:function(){return[W.bL]},
$isk:1,
$ask:function(){return[W.bL]},
$asn:function(){return[W.bL]}}
W.E.prototype={$isE:1}
W.v.prototype={
k:function(a){var t=a.nodeValue
return t==null?this.cq(a):t}}
W.bQ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
m:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.v]},
$isj:1,
$asj:function(){return[W.v]},
$isp:1,
$asp:function(){return[W.v]},
$asl:function(){return[W.v]},
$isk:1,
$ask:function(){return[W.v]},
$asn:function(){return[W.v]}}
W.T.prototype={
gj:function(a){return a.length}}
W.e_.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
m:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.T]},
$isj:1,
$asj:function(){return[W.T]},
$isp:1,
$asp:function(){return[W.T]},
$asl:function(){return[W.T]},
$isk:1,
$ask:function(){return[W.T]},
$asn:function(){return[W.T]}}
W.e1.prototype={
w:function(a,b){return a.send(b)}}
W.bV.prototype={
w:function(a,b){return a.send(b)}}
W.e8.prototype={
gj:function(a){return a.length}}
W.ed.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
m:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.bX]},
$isj:1,
$asj:function(){return[W.bX]},
$isp:1,
$asp:function(){return[W.bX]},
$asl:function(){return[W.bX]},
$isk:1,
$ask:function(){return[W.bX]},
$asn:function(){return[W.bX]}}
W.ef.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
m:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.bY]},
$isj:1,
$asj:function(){return[W.bY]},
$isp:1,
$asp:function(){return[W.bY]},
$asl:function(){return[W.bY]},
$isk:1,
$ask:function(){return[W.bY]},
$asn:function(){return[W.bY]}}
W.U.prototype={
gj:function(a){return a.length}}
W.ei.prototype={
h:function(a,b){return this.bd(a,b)},
af:function(a,b){var t,s
for(t=0;!0;++t){s=this.cX(a,t)
if(s==null)return
b.$2(s,this.bd(a,s))}},
gD:function(a){var t=H.N([],[P.u])
this.af(a,new W.ej(t))
return t},
gj:function(a){return a.length},
bd:function(a,b){return a.getItem(b)},
cX:function(a,b){return a.key(b)},
$asaY:function(){return[P.u,P.u]}}
W.ej.prototype={
$2:function(a,b){return C.a.l(this.a,a)},
$S:function(a,b){return{func:1,args:[,,]}}}
W.eq.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
m:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.c1]},
$isj:1,
$asj:function(){return[W.c1]},
$isp:1,
$asp:function(){return[W.c1]},
$asl:function(){return[W.c1]},
$isk:1,
$ask:function(){return[W.c1]},
$asn:function(){return[W.c1]}}
W.er.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
m:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.c0]},
$isj:1,
$asj:function(){return[W.c0]},
$isp:1,
$asp:function(){return[W.c0]},
$asl:function(){return[W.c0]},
$isk:1,
$ask:function(){return[W.c0]},
$asn:function(){return[W.c0]}}
W.et.prototype={
gj:function(a){return a.length}}
W.an.prototype={$isan:1}
W.ex.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
m:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.c4]},
$isj:1,
$asj:function(){return[W.c4]},
$isp:1,
$asp:function(){return[W.c4]},
$asl:function(){return[W.c4]},
$isk:1,
$ask:function(){return[W.c4]},
$asn:function(){return[W.c4]}}
W.ey.prototype={
gj:function(a){return a.length}}
W.ao.prototype={}
W.eH.prototype={
k:function(a){return String(a)}}
W.eI.prototype={
gj:function(a){return a.length}}
W.eJ.prototype={
w:function(a,b){return a.send(b)}}
W.aq.prototype={
gdg:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.q("deltaY is not supported"))},
$isaq:1}
W.b5.prototype={
gd6:function(a){var t,s
t=P.a0
s=new P.Y(0,$.y,null,[t])
this.cT(a)
this.d_(a,W.iD(new W.eK(new P.fq(s,[t]))))
return s},
d_:function(a,b){return a.requestAnimationFrame(H.bk(b,1))},
cT:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.eK.prototype={
$1:function(a){this.a.dd(0,a)},
$S:function(a){return{func:1,args:[,]}}}
W.hl.prototype={}
W.eS.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
m:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.bv]},
$isj:1,
$asj:function(){return[W.bv]},
$isp:1,
$asp:function(){return[W.bv]},
$asl:function(){return[W.bv]},
$isk:1,
$ask:function(){return[W.bv]},
$asn:function(){return[W.bv]}}
W.eT.prototype={
k:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
t:function(a,b){var t
if(b==null)return!1
t=J.t(b)
if(!t.$isI)return!1
return a.left===t.gbJ(b)&&a.top===t.gbW(b)&&a.width===t.gO(b)&&a.height===t.gM(b)},
gq:function(a){var t,s,r,q
t=a.left
s=a.top
r=a.width
q=a.height
return W.iy(W.at(W.at(W.at(W.at(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gM:function(a){return a.height},
gO:function(a){return a.width}}
W.f8.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
m:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.bC]},
$isj:1,
$asj:function(){return[W.bC]},
$isp:1,
$asp:function(){return[W.bC]},
$asl:function(){return[W.bC]},
$isk:1,
$ask:function(){return[W.bC]},
$asn:function(){return[W.bC]}}
W.cl.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
m:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.v]},
$isj:1,
$asj:function(){return[W.v]},
$isp:1,
$asp:function(){return[W.v]},
$asl:function(){return[W.v]},
$isk:1,
$ask:function(){return[W.v]},
$asn:function(){return[W.v]}}
W.fo.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
m:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.U]},
$isj:1,
$asj:function(){return[W.U]},
$isp:1,
$asp:function(){return[W.U]},
$asl:function(){return[W.U]},
$isk:1,
$ask:function(){return[W.U]},
$asn:function(){return[W.U]}}
W.fp.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
m:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.c_]},
$isj:1,
$asj:function(){return[W.c_]},
$isp:1,
$asp:function(){return[W.c_]},
$asl:function(){return[W.c_]},
$isk:1,
$ask:function(){return[W.c_]},
$asn:function(){return[W.c_]}}
W.eW.prototype={
dG:function(a,b,c,d){return W.X(this.a,this.b,a,!1,H.aN(this,0))}}
W.ho.prototype={}
W.eX.prototype={
cI:function(a,b,c,d,e){this.d3()},
d3:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.iZ(r,this.c,t,!1)}}}
W.eY.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(a){return{func:1,args:[,]}}}
W.n.prototype={
gu:function(a){return new W.dg(a,this.gj(a),-1,null,[H.a7(a,"n",0)])}}
W.dg.prototype={
n:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbf(J.hE(this.a,t))
this.c=t
return!0}this.sbf(null)
this.c=s
return!1},
gp:function(a){return this.d},
sbf:function(a){this.d=a}}
W.c7.prototype={}
W.c8.prototype={}
W.c9.prototype={}
W.ca.prototype={}
W.cb.prototype={}
W.cc.prototype={}
W.cd.prototype={}
W.cf.prototype={}
W.cg.prototype={}
W.cj.prototype={}
W.ck.prototype={}
W.cm.prototype={}
W.cn.prototype={}
W.cq.prototype={}
W.cr.prototype={}
W.bc.prototype={}
W.bd.prototype={}
W.cs.prototype={}
W.ct.prototype={}
W.cx.prototype={}
W.cA.prototype={}
W.cB.prototype={}
W.be.prototype={}
W.bf.prototype={}
W.cC.prototype={}
W.cD.prototype={}
W.cG.prototype={}
W.cH.prototype={}
W.cI.prototype={}
W.cJ.prototype={}
W.cK.prototype={}
W.cL.prototype={}
W.cM.prototype={}
W.cN.prototype={}
W.cO.prototype={}
W.cP.prototype={}
P.fv.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(a,b){return{func:1,args:[,,]}}}
P.fb.prototype={
aj:function(){return Math.random()}}
P.hh.prototype={}
P.fj.prototype={}
P.I.prototype={}
P.dv.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return this.K(a,b)},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
m:function(a,b){return this.h(a,b)},
K:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.hc]},
$asl:function(){return[P.hc]},
$isk:1,
$ask:function(){return[P.hc]},
$asn:function(){return[P.hc]}}
P.dR.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return this.K(a,b)},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
m:function(a,b){return this.h(a,b)},
K:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.hg]},
$asl:function(){return[P.hg]},
$isk:1,
$ask:function(){return[P.hg]},
$asn:function(){return[P.hg]}}
P.e0.prototype={
gj:function(a){return a.length}}
P.eo.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return this.K(a,b)},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
m:function(a,b){return this.h(a,b)},
K:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.u]},
$asl:function(){return[P.u]},
$isk:1,
$ask:function(){return[P.u]},
$asn:function(){return[P.u]}}
P.ez.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return this.K(a,b)},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
m:function(a,b){return this.h(a,b)},
K:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.hk]},
$asl:function(){return[P.hk]},
$isk:1,
$ask:function(){return[P.hk]},
$asn:function(){return[P.hk]}}
P.ch.prototype={}
P.ci.prototype={}
P.co.prototype={}
P.cp.prototype={}
P.cy.prototype={}
P.cz.prototype={}
P.cE.prototype={}
P.cF.prototype={}
P.cW.prototype={
gj:function(a){return a.length}}
P.cX.prototype={
gj:function(a){return a.length}}
P.aw.prototype={}
P.dS.prototype={
gj:function(a){return a.length}}
P.e5.prototype={
bm:function(a,b){return a.activeTexture(b)},
bo:function(a,b,c){return a.attachShader(b,c)},
bp:function(a,b,c){return a.bindBuffer(b,c)},
bq:function(a,b,c){return a.bindTexture(b,c)},
br:function(a,b){return a.blendEquation(b)},
bs:function(a,b,c){return a.blendFunc(b,c)},
bt:function(a,b,c,d){return a.bufferData(b,c,d)},
bu:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bv:function(a,b){return a.compileShader(b)},
bw:function(a){return a.createBuffer()},
bx:function(a){return a.createProgram()},
bz:function(a,b){return a.createShader(b)},
bA:function(a){return a.createTexture()},
bC:function(a,b){return a.depthMask(b)},
bD:function(a,b){return a.disable(b)},
bE:function(a,b,c,d){return a.drawArrays(b,c,d)},
bF:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bG:function(a,b){return a.enable(b)},
bH:function(a,b){return a.enableVertexAttribArray(b)},
ak:function(a){return P.fw(a.getContextAttributes())},
aM:function(a){return a.getError()},
aN:function(a,b){return a.getProgramInfoLog(b)},
aO:function(a,b,c){return a.getProgramParameter(b,c)},
aP:function(a,b){return a.getShaderInfoLog(b)},
aQ:function(a,b,c){return a.getShaderParameter(b,c)},
aR:function(a,b,c){return a.getUniformLocation(b,c)},
bK:function(a,b){return a.linkProgram(b)},
bN:function(a,b,c){return a.pixelStorei(b,c)},
aT:function(a,b,c){return a.shaderSource(b,c)},
aV:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aK:function(a,b,c,d,e,f,g,h,i,j){this.aB(a,b,c,d,e,f,g)
return},
bR:function(a,b,c,d,e,f,g){return this.aK(a,b,c,d,e,f,g,null,null,null)},
aB:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bS:function(a,b,c,d){return a.texParameterf(b,c,d)},
bT:function(a,b,c,d){return a.texParameteri(b,c,d)},
bX:function(a,b,c){return a.uniform1f(b,c)},
bY:function(a,b,c){return a.uniform1fv(b,c)},
bZ:function(a,b,c){return a.uniform1i(b,c)},
c_:function(a,b,c){return a.uniform1iv(b,c)},
c0:function(a,b,c){return a.uniform2fv(b,c)},
c1:function(a,b,c){return a.uniform3fv(b,c)},
c2:function(a,b,c){return a.uniform4fv(b,c)},
c3:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
c4:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
c6:function(a,b){return a.useProgram(b)},
c8:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)}}
P.e6.prototype={
d7:function(a,b){return a.beginTransformFeedback(b)},
da:function(a,b){return a.bindVertexArray(b)},
df:function(a){return a.createVertexArray()},
dm:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dn:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dq:function(a){return a.endTransformFeedback()},
dT:function(a,b,c,d){this.d2(a,b,c,d)
return},
d2:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
dU:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bm:function(a,b){return a.activeTexture(b)},
bo:function(a,b,c){return a.attachShader(b,c)},
bp:function(a,b,c){return a.bindBuffer(b,c)},
bq:function(a,b,c){return a.bindTexture(b,c)},
br:function(a,b){return a.blendEquation(b)},
bs:function(a,b,c){return a.blendFunc(b,c)},
bt:function(a,b,c,d){return a.bufferData(b,c,d)},
bu:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bv:function(a,b){return a.compileShader(b)},
bw:function(a){return a.createBuffer()},
bx:function(a){return a.createProgram()},
bz:function(a,b){return a.createShader(b)},
bA:function(a){return a.createTexture()},
bC:function(a,b){return a.depthMask(b)},
bD:function(a,b){return a.disable(b)},
bE:function(a,b,c,d){return a.drawArrays(b,c,d)},
bF:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bG:function(a,b){return a.enable(b)},
bH:function(a,b){return a.enableVertexAttribArray(b)},
ak:function(a){return P.fw(a.getContextAttributes())},
aM:function(a){return a.getError()},
aN:function(a,b){return a.getProgramInfoLog(b)},
aO:function(a,b,c){return a.getProgramParameter(b,c)},
aP:function(a,b){return a.getShaderInfoLog(b)},
aQ:function(a,b,c){return a.getShaderParameter(b,c)},
aR:function(a,b,c){return a.getUniformLocation(b,c)},
bK:function(a,b){return a.linkProgram(b)},
bN:function(a,b,c){return a.pixelStorei(b,c)},
aT:function(a,b,c){return a.shaderSource(b,c)},
aV:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aK:function(a,b,c,d,e,f,g,h,i,j){this.aB(a,b,c,d,e,f,g)
return},
bR:function(a,b,c,d,e,f,g){return this.aK(a,b,c,d,e,f,g,null,null,null)},
aB:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bS:function(a,b,c,d){return a.texParameterf(b,c,d)},
bT:function(a,b,c,d){return a.texParameteri(b,c,d)},
bX:function(a,b,c){return a.uniform1f(b,c)},
bY:function(a,b,c){return a.uniform1fv(b,c)},
bZ:function(a,b,c){return a.uniform1i(b,c)},
c_:function(a,b,c){return a.uniform1iv(b,c)},
c0:function(a,b,c){return a.uniform2fv(b,c)},
c1:function(a,b,c){return a.uniform3fv(b,c)},
c2:function(a,b,c){return a.uniform4fv(b,c)},
c3:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
c4:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
c6:function(a,b){return a.useProgram(b)},
c8:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)}}
P.eg.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return P.fw(this.cW(a,b))},
i:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
m:function(a,b){return this.h(a,b)},
cW:function(a,b){return a.item(b)},
$isj:1,
$asj:function(){return[P.aB]},
$asl:function(){return[P.aB]},
$isk:1,
$ask:function(){return[P.aB]},
$asn:function(){return[P.aB]}}
P.cu.prototype={}
P.cv.prototype={}
B.fS.prototype={
$1:function(a){$.$get$fx().i(0,a.which,!0)},
$S:function(a){return{func:1,args:[W.aj]}}}
B.fT.prototype={
$1:function(a){$.$get$fx().i(0,a.which,null)},
$S:function(a){return{func:1,args:[W.aj]}}}
B.fU.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.kz=t
$.kA=C.b.S(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.hB=s-C.b.B(window.innerWidth,2)
$.iQ=-(t-C.b.B(window.innerHeight,2))},
$S:function(a){return{func:1,args:[W.E]}}}
B.fV.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.bm=t-C.b.B(window.innerWidth,2)
$.bn=-(s-C.b.B(window.innerHeight,2))
if(a.button===2)$.$get$bl().i(0,"right",!0)
else $.$get$bl().i(0,"left",!0)},
$S:function(a){return{func:1,args:[W.E]}}}
B.fW.prototype={
$1:function(a){if(a.button===2)$.$get$bl().i(0,"right",null)
else $.$get$bl().i(0,"left",null)},
$S:function(a){return{func:1,args:[W.E]}}}
B.dT.prototype={
cA:function(a,b,c,d){var t
W.X(d,W.jJ(d),new B.dU(this),!1,W.aq)
W.X(d,"mousemove",new B.dV(this),!1,W.E)
t=W.an
W.X(d,"touchstart",new B.dW(),!1,t)
W.X(d,"touchmove",new B.dX(this),!1,t)
B.kY(null)}}
B.dU.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.a1.gdg(a)*r.k3
if(C.c.S(r.fy,t)>0)r.fy=C.c.S(r.fy,t)}catch(q){s=H.a3(q)
P.a1(s)}},
$S:function(a){return{func:1,args:[W.aq]}}}
B.dV.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=t.go+C.b.S($.hB,$.bm)*0.01
s=t.id
r=$.bn
q=$.iQ
t.id=s+(r-q)*0.01
$.bm=$.hB
$.bn=q}},
$S:function(a){return{func:1,args:[W.E]}}}
B.dW.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.N(t.clientX)
C.c.N(t.clientY)
$.bm=s
C.c.N(t.clientX)
$.bn=C.c.N(t.clientY)},
$S:function(a){return{func:1,args:[W.an]}}}
B.dX.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.N(t.clientX)
t=C.c.N(t.clientY)
r=this.a
r.go=r.go+C.b.S(s,$.bm)*0.01
r.id=r.id+($.bn-t)*0.01
$.bm=s
$.bn=t},
$S:function(a){return{func:1,args:[W.an]}}}
G.dJ.prototype={}
G.eD.prototype={
G:function(a,b){var t=this.d
if(H.au(!t.C(0,a)))H.aJ("uniform "+a+" already set")
t.i(0,a,b)},
b2:function(){return this.d},
k:function(a){var t,s,r,q
t=H.N(["{"+new H.c5(H.kJ(this),null).k(0)+"}["+this.a+"]"],[P.u])
for(s=this.d,r=s.gD(s),r=r.gu(r);r.n();){q=r.gp(r)
C.a.l(t,H.i(q)+": "+H.i(s.h(0,q)))}return C.a.ah(t,"\n")}}
G.cY.prototype={}
G.d_.prototype={
bI:function(a,b,c){J.jf(this.a,b)
if(c>0)J.jx(this.a,b,c)},
c9:function(a,b,c,d,e,f,g,h){J.hH(this.a,34962,b)
J.jy(this.a,c,d,e,!1,g,h)}}
G.c3.prototype={}
G.c2.prototype={}
G.dE.prototype={}
G.dG.prototype={
b_:function(a,b,c){var t,s
if(C.i.ao(a,0)===105){if(H.au(C.b.aX(b.length,c)===this.z))H.aJ("ChangeAttribute "+this.z)}else{t=C.b.aX(b.length,c)
if(H.au(t===(this.ch.length/3|0)))H.aJ("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.hH(t.a,34962,s)
J.j3(t.a,34962,b,35048)},
cv:function(){return this.ch.length/3|0},
aZ:function(a){var t,s,r,q,p
t=this.r
s=this.d
t.i(0,"aPosition",J.hI(s.a))
this.ch=a
this.b_("aPosition",a,3)
r=$.$get$Z().h(0,"aPosition")
if(r==null)throw H.c("Unknown canonical aPosition")
q=this.x
H.b(q.C(0,"aPosition"))
p=q.h(0,"aPosition")
J.h_(s.a,this.e)
s.bI(0,p,0)
s.c9(0,t.h(0,"aPosition"),p,r.b1(),5126,!1,0,0)},
k:function(a){var t,s,r,q
t=["Faces:0"]
for(s=this.cy,r=s.gD(s),r=r.gu(r);r.n();){q=r.gp(r)
C.a.l(t,H.i(q)+":"+s.h(0,q).length)}return"MESH["+this.a+"] "+C.a.ah(t,"  ")}}
G.dY.prototype={
ct:function(a,b){var t=C.b.cb(a,b)
if(this.z===t)return
this.z=t
this.b3()},
b3:function(){var t,s,r,q,p,o,n
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
t.R(0,0,1/(p*s))
t.R(1,1,1/p)
t.R(2,2,(q+r)/o)
t.R(3,2,-1)
t.R(2,3,2*r*q/o)},
b2:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.C(new Float32Array(3))
o.a6(r,q,p)
p=this.d
p.i(0,"uEyePosition",o)
o=this.cy
o.a4(t)
t=o.a
t[12]=0
t[13]=0
t[14]=0
t[15]=1
n=-s[12]
m=-s[13]
l=-s[14]
s=J.t(n)
r=!!s.$isaD
k=r?s.ge_(n):1
if(!!s.$isC){j=s.gdV(n)
m=s.gdW(n)
l=s.gdX(n)
n=j}else if(r){j=s.gdV(n)
m=s.gdW(n)
l=s.gdX(n)
n=j}else if(!(typeof n==="number")){n=null
m=null
l=null}s=C.c.v(t[0],n)
r=C.c.v(t[4],m)
q=C.c.v(t[8],l)
i=t[12]
h=C.c.v(t[1],n)
g=C.c.v(t[5],m)
f=C.c.v(t[9],l)
e=t[13]
d=C.c.v(t[2],n)
c=C.c.v(t[6],m)
b=C.c.v(t[10],l)
a=t[14]
a0=C.c.v(t[3],n)
a1=C.c.v(t[7],m)
a2=C.c.v(t[11],l)
a3=t[15]
t[12]=s+r+q+i*k
t[13]=h+g+f+e*k
t[14]=d+c+b+a*k
t[15]=a0+a1+a2+a3*k
a3=this.cx
a3.a4(this.db)
a3.dJ(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.e4.prototype={
cB:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.a2)(t),++o){n=t[o]
r.i(0,n,J.hK(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.a2)(t),++o){n=t[o]
r.i(0,n,J.hK(q.a,p,n))}},
cF:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gj(t)===s.gj(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gD(s),s=s.gu(s);s.n();){q=s.gp(s)
if(!t.C(0,q))C.a.l(r,q)}for(t=this.x,s=new P.b7(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.n();){q=s.d
if(!t.W(0,q))C.a.l(r,q)}return r},
cG:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gD(b),s=s.gu(s),r=this.d,q=this.y,p=this.z,o=0;s.n();){n=s.gp(s)
switch(J.j_(n,0)){case 117:if(q.C(0,n)){m=b.h(0,n)
if(p.C(0,n))H.hC("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$Z().h(0,n)
if(l==null)H.D("unknown "+n)
H.b(q.C(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.h1(r.a,k,m)
else if(!!J.t(m).$isjL)J.jv(r.a,k,m)
break
case"float":if(l.c===0)J.jt(r.a,k,m)
else if(!!J.t(m).$ish5)J.ju(r.a,k,m)
break
case"mat4":if(l.c===0){n=H.a9(m,"$isS").a
J.hQ(r.a,k,!1,n)}else if(!!J.t(m).$ish5)J.hQ(r.a,k,!1,m)
else if(H.au(!1))H.aJ("bad unform: "+n)
break
case"mat3":if(l.c===0){n=C.u.gco(H.a9(m,"$isl0"))
J.hP(r.a,k,!1,n)}else if(!!J.t(m).$ish5)J.hP(r.a,k,!1,m)
else if(H.au(!1))H.aJ("bad unform: "+n)
break
case"vec4":n=l.c
j=r.a
if(n===0)J.hO(j,k,H.a9(m,"$isaD").a)
else J.hO(j,k,m)
break
case"vec3":n=l.c
j=r.a
if(n===0)J.hN(j,k,H.a9(m,"$isC").a)
else J.hN(j,k,m)
break
case"vec2":if(l.c===0){n=C.u.gco(H.a9(m,"$isl1"))
J.hM(r.a,k,n)}else J.hM(r.a,k,m)
break
case"sampler2D":case"sampler2DShadow":n=C.b.P(33984,this.ch)
J.hF(r.a,n)
n=H.a9(m,"$isb4").b
J.bo(r.a,3553,n)
n=this.ch
J.h1(r.a,k,n)
this.ch=this.ch+1
break
case"samplerCube":H.b(n==="uCubeTexture")
n=C.b.P(33984,this.ch)
J.hF(r.a,n)
n=H.a9(m,"$isb4").b
J.bo(r.a,34067,n)
n=this.ch
J.h1(r.a,k,n)
this.ch=this.ch+1
break
default:H.hC("Error: unknow uniform type: "+j)
H.b(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":n=J.z(m,!0)
j=r.a
if(n)J.cR(j,2929)
else J.h0(j,2929)
break
case"cStencilFunc":H.a9(m,"$isc3")
n=m.a
j=r.a
if(n===1281)J.h0(j,2960)
else{J.cR(j,2960)
j=m.b
i=m.c
J.jp(r.a,n,j,i)}break
case"cDepthWrite":J.j9(r.a,m)
break
case"cBlendEquation":H.a9(m,"$isc2")
n=m.a
j=r.a
if(n===1281)J.h0(j,3042)
else{J.cR(j,3042)
j=m.b
i=m.c
J.j2(r.a,j,i)
J.j1(r.a,n)}break}++o
break}}h=P.jI(0,0,0,Date.now()-new P.aT(t,!1).a,0,0)
""+o
h.k(0)},
cu:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
Date.now()
t=this.d
J.jw(t.a,this.r)
this.ch=0
this.z.I(0)
for(s=0;s<2;++s){r=b[s]
this.cG(r.a,r.b2())}q=this.Q
q.I(0)
for(p=a.cy,p=p.gD(p),p=p.gu(p);p.n();)q.l(0,p.gp(p))
o=this.cF()
if(o.length!==0)P.a1("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.i(o)))
J.h_(a.d.a,a.e)
n=this.e.f.length>0
q=a.f
p=a.cv()
m=a.Q
l=a.z
if(n)J.j0(t.a,q)
if(m!==-1){k=t.a
if(l>1)J.jd(k,q,p,m,0,l)
else J.jc(k,q,p,m,0)}else{m=t.a
if(l>1)J.jb(m,q,0,p,l)
else J.ja(m,q,0,p)}if(n)J.jg(t.a)},
b0:function(a,b){return this.cu(a,b,null)}}
G.r.prototype={
b1:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.b(!1)
return-1}}}
G.eb.prototype={
aY:function(a){var t,s,r,q,p
H.b(this.b==null)
for(t=a.length,s=this.c,r=this.x,q=0;q<a.length;a.length===t||(0,H.a2)(a),++q){p=a[q]
H.b($.$get$Z().C(0,p))
H.b(!C.a.W(s,p))
C.a.l(s,p)
r.i(0,p,this.r);++this.r}C.a.aU(s)},
a7:function(a){var t,s,r,q
H.b(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.a2)(a),++r){q=a[r]
if(H.au($.$get$Z().C(0,q)))H.aJ("missing uniform "+q)
H.b(!C.a.W(s,q))
C.a.l(s,q)}C.a.aU(s)},
cC:function(a,b){H.b(this.b==null)
this.b=this.cH(!0,a,b)},
a8:function(a){return this.cC(a,null)},
cH:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.b(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.a2)(t),++o){n=t[o]
m=$.$get$Z().h(0,n)
C.a.l(q,"layout (location="+H.i(p.h(0,n))+") in "+m.a+" "+H.i(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,o=0;!1;++o){k=t[o]
m=$.$get$Z().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.i(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.a2)(t),++o){k=t[o]
m=$.$get$Z().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.i(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.a2)(t),++o){k=t[o]
m=$.$get$Z().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.i(k)+j+";")}C.a.l(q,"")
C.a.l(q,"void main(void) {")
C.a.d4(q,b)
C.a.l(q,"}")
return C.a.ah(q,"\n")}}
G.ee.prototype={}
G.es.prototype={
cw:function(a,b){var t=this.e
if(t!==1)J.jr(a.a,b,34046,t)
J.hL(a.a,b,10240,this.r)
J.hL(a.a,b,10241,this.f)}}
G.b4.prototype={
k:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.dl.prototype={
cD:function(a){var t,s
t=this.d
s=this.c
J.bo(t.a,s,this.b)
J.jq(t.a,s,0,6408,6408,5121,a)}}
A.fD.prototype={
$2:function(a,b){var t=536870911&a+J.aP(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(a,b){return{func:1,args:[P.w,P.A]}}}
T.S.prototype={
R:function(a,b,c){H.b(a<4)
H.b(b<4)
this.a[b*4+a]=c},
a4:function(a){var t,s
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
k:function(a){return"[0] "+this.a3(0).k(0)+"\n[1] "+this.a3(1).k(0)+"\n[2] "+this.a3(2).k(0)+"\n[3] "+this.a3(3).k(0)+"\n"},
h:function(a,b){return this.a[b]},
t:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.S){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gq:function(a){return A.hx(this.a)},
a3:function(a){var t,s
t=new Float32Array(4)
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.aD(t)},
a5:function(){var t=this.a
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
dJ:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.C.prototype={
a6:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
a4:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
k:function(a){var t=this.a
return"["+H.i(t[0])+","+H.i(t[1])+","+H.i(t[2])+"]"},
t:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.C){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gq:function(a){return A.hx(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){return Math.sqrt(this.gaH())},
gaH:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
aI:function(a){var t,s,r
t=Math.sqrt(this.gaH())
if(t===0)return 0
s=1/t
r=this.a
r[0]=r[0]*s
r[1]=r[1]*s
r[2]=r[2]*s
return t},
aE:function(a){var t,s
t=a.a
s=this.a
return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]},
bB:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.C(new Float32Array(3))
t.a6(r*m-q*n,q*o-s*m,s*n-r*o)
return t}}
T.aD.prototype={
k:function(a){var t=this.a
return H.i(t[0])+","+H.i(t[1])+","+H.i(t[2])+","+H.i(t[3])},
t:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aD){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gq:function(a){return A.hx(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){var t,s,r,q
t=this.a
s=t[0]
r=t[1]
q=t[2]
t=t[3]
return Math.sqrt(s*s+r*r+q*q+t*t)}}
R.fP.prototype={
$1:function(b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
this.a.a=b5+0
t=this.b
t.go+=0.001
s=t.k4
if(s.h(0,37)!=null)t.go+=0.03
else if(s.h(0,39)!=null)t.go-=0.03
if(s.h(0,38)!=null)t.id+=0.03
else if(s.h(0,40)!=null)t.id-=0.03
if(s.h(0,33)!=null)t.fy*=0.99
else if(s.h(0,34)!=null)t.fy*=1.01
if(s.h(0,32)!=null){t.go=0
t.id=0}s=C.c.dc(t.id,-1.4707963267948965,1.4707963267948965)
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
q=t.k2.a
n[12]=n[12]+q[0]
n[13]=n[13]+q[1]
n[14]=n[14]+q[2]
m=n[12]
l=n[13]
k=n[14]
j=new T.C(new Float32Array(3))
j.a6(0,1,0)
s=t.e
r=s.a
r[0]=n[12]
r[1]=n[13]
r[2]=n[14]
r=new Float32Array(3)
i=new T.C(r)
i.a4(s)
r[0]=r[0]-q[0]
r[1]=r[1]-q[1]
r[2]=r[2]-q[2]
i.aI(0)
h=j.bB(i)
h.aI(0)
g=i.bB(h)
g.aI(0)
q=h.aE(s)
o=g.aE(s)
s=i.aE(s)
f=h.a
e=f[0]
d=g.a
c=d[0]
b=r[0]
a=f[1]
a0=d[1]
a1=r[1]
f=f[2]
d=d[2]
r=r[2]
n[15]=1
n[14]=-s
n[13]=-o
n[12]=-q
n[11]=0
n[10]=r
n[9]=d
n[8]=f
n[7]=0
n[6]=a1
n[5]=a0
n[4]=a
n[3]=0
n[2]=b
n[1]=c
n[0]=e
n[12]=m
n[13]=l
n[14]=k
e=t.f
c=e.a
c[0]=n[2]
c[1]=n[6]
c[2]=n[10]
t=-t.k1
a2=Math.sqrt(e.gaH())
m=c[0]/a2
l=c[1]/a2
k=c[2]/a2
a3=Math.cos(t)
a4=Math.sin(t)
a5=1-a3
a6=m*m*a5+a3
t=k*a4
a7=m*l*a5-t
c=l*a4
a8=m*k*a5+c
a9=l*m*a5+t
b0=l*l*a5+a3
t=m*a4
b1=l*k*a5-t
b2=k*m*a5-c
b3=k*l*a5+t
b4=k*k*a5+a3
t=n[0]
c=n[4]
e=n[8]
b=n[1]
a=n[5]
a0=n[9]
a1=n[2]
f=n[6]
d=n[10]
r=n[3]
q=n[7]
o=n[11]
n[0]=t*a6+c*a9+e*b2
n[1]=b*a6+a*a9+a0*b2
n[2]=a1*a6+f*a9+d*b2
n[3]=r*a6+q*a9+o*b2
n[4]=t*a7+c*b0+e*b3
n[5]=b*a7+a*b0+a0*b3
n[6]=a1*a7+f*b0+d*b3
n[7]=r*a7+q*b0+o*b3
n[8]=t*a8+c*b1+e*b4
n[9]=b*a8+a*b1+a0*b4
n[10]=a1*a8+f*b1+d*b4
n[11]=r*a8+q*b1+o*b4
o=this.c
o.d.i(0,"uTime",b5/1000)
q=this.f
this.d.b0(this.e,[q,o])
this.r.b0(this.x,[q,o])
C.a2.gd6(window).bU(this)},
$S:function(a){return{func:1,v:true,args:[P.a0]}}}
J.a.prototype.cq=J.a.prototype.k
J.aX.prototype.cr=J.aX.prototype.k;(function installTearOffs(){installTearOff(H.aE.prototype,"gdF",0,0,0,null,["$0"],["ai"],0)
installTearOff(H.M.prototype,"gce",0,0,0,null,["$1"],["A"],2)
installTearOff(H.ar.prototype,"gdi",0,0,0,null,["$1"],["J"],2)
installTearOff(P,"kv",1,0,0,null,["$1"],["kh"],1)
installTearOff(P,"kw",1,0,0,null,["$1"],["ki"],1)
installTearOff(P,"kx",1,0,0,null,["$1"],["kj"],1)
installTearOff(P,"iH",1,0,0,null,["$0"],["kt"],0)
installTearOff(P.Y.prototype,"gcO",0,0,0,null,["$2","$1"],["a9","cP"],3)
installTearOff(P,"kC",1,0,0,null,["$2"],["jF"],4)
installTearOff(R,"iK",1,0,0,null,["$0"],["kS"],0)})();(function inheritance(){inherit(P.A,null)
var t=P.A
inherit(H.h9,t)
inherit(J.a,t)
inherit(J.cV,t)
inherit(P.Q,t)
inherit(H.bI,t)
inherit(P.bE,t)
inherit(H.ay,t)
inherit(H.ac,t)
inherit(H.fh,t)
inherit(H.aE,t)
inherit(H.eU,t)
inherit(H.as,t)
inherit(H.fg,t)
inherit(H.eQ,t)
inherit(H.bU,t)
inherit(H.eu,t)
inherit(H.aa,t)
inherit(H.M,t)
inherit(H.ar,t)
inherit(H.e3,t)
inherit(H.eA,t)
inherit(P.ax,t)
inherit(H.cw,t)
inherit(H.c5,t)
inherit(P.aY,t)
inherit(H.dw,t)
inherit(H.dy,t)
inherit(P.h3,t)
inherit(P.eR,t)
inherit(P.ce,t)
inherit(P.Y,t)
inherit(P.c6,t)
inherit(P.ek,t)
inherit(P.el,t)
inherit(P.hi,t)
inherit(P.av,t)
inherit(P.fr,t)
inherit(P.ea,t)
inherit(P.fd,t)
inherit(P.b7,t)
inherit(P.hd,t)
inherit(P.l,t)
inherit(P.ff,t)
inherit(P.aK,t)
inherit(P.B,t)
inherit(P.aT,t)
inherit(P.a0,t)
inherit(P.ae,t)
inherit(P.bZ,t)
inherit(P.h4,t)
inherit(P.eZ,t)
inherit(P.dd,t)
inherit(P.k,t)
inherit(P.aB,t)
inherit(P.F,t)
inherit(P.aC,t)
inherit(P.u,t)
inherit(P.b3,t)
inherit(W.d2,t)
inherit(W.n,t)
inherit(W.dg,t)
inherit(P.fb,t)
inherit(P.hh,t)
inherit(P.fj,t)
inherit(G.dJ,t)
inherit(G.d_,t)
inherit(G.c3,t)
inherit(G.c2,t)
inherit(G.r,t)
inherit(G.eb,t)
inherit(G.es,t)
inherit(G.b4,t)
inherit(T.S,t)
inherit(T.C,t)
inherit(T.aD,t)
t=J.a
inherit(J.dr,t)
inherit(J.bG,t)
inherit(J.aX,t)
inherit(J.af,t)
inherit(J.az,t)
inherit(J.ah,t)
inherit(H.b_,t)
inherit(H.al,t)
inherit(W.d,t)
inherit(W.cS,t)
inherit(W.bt,t)
inherit(W.bu,t)
inherit(W.P,t)
inherit(W.c7,t)
inherit(W.K,t)
inherit(W.d6,t)
inherit(W.d7,t)
inherit(W.c8,t)
inherit(W.by,t)
inherit(W.ca,t)
inherit(W.d9,t)
inherit(W.f,t)
inherit(W.cc,t)
inherit(W.dj,t)
inherit(W.cf,t)
inherit(W.dA,t)
inherit(W.dF,t)
inherit(W.cj,t)
inherit(W.cm,t)
inherit(W.T,t)
inherit(W.cq,t)
inherit(W.cs,t)
inherit(W.U,t)
inherit(W.cx,t)
inherit(W.cA,t)
inherit(W.et,t)
inherit(W.cC,t)
inherit(W.ey,t)
inherit(W.eH,t)
inherit(W.cG,t)
inherit(W.cI,t)
inherit(W.cK,t)
inherit(W.cM,t)
inherit(W.cO,t)
inherit(P.ch,t)
inherit(P.co,t)
inherit(P.e0,t)
inherit(P.cy,t)
inherit(P.cE,t)
inherit(P.cW,t)
inherit(P.e5,t)
inherit(P.e6,t)
inherit(P.cu,t)
t=J.aX
inherit(J.dZ,t)
inherit(J.ap,t)
inherit(J.ai,t)
inherit(J.h8,J.af)
t=J.az
inherit(J.bF,t)
inherit(J.ds,t)
t=P.Q
inherit(H.j,t)
inherit(H.bJ,t)
t=H.j
inherit(H.aA,t)
inherit(H.dx,t)
inherit(H.dc,H.bJ)
inherit(H.dD,P.bE)
t=H.aA
inherit(H.bK,t)
inherit(P.dz,t)
t=H.ac
inherit(H.fX,t)
inherit(H.fY,t)
inherit(H.fa,t)
inherit(H.eV,t)
inherit(H.dn,t)
inherit(H.dp,t)
inherit(H.fi,t)
inherit(H.ev,t)
inherit(H.ew,t)
inherit(H.fZ,t)
inherit(H.fI,t)
inherit(H.fJ,t)
inherit(H.fK,t)
inherit(H.fL,t)
inherit(H.fM,t)
inherit(H.ep,t)
inherit(H.dt,t)
inherit(H.fE,t)
inherit(H.fF,t)
inherit(H.fG,t)
inherit(P.eN,t)
inherit(P.eM,t)
inherit(P.eO,t)
inherit(P.eP,t)
inherit(P.f_,t)
inherit(P.f3,t)
inherit(P.f0,t)
inherit(P.f1,t)
inherit(P.f2,t)
inherit(P.f6,t)
inherit(P.f7,t)
inherit(P.f5,t)
inherit(P.f4,t)
inherit(P.em,t)
inherit(P.en,t)
inherit(P.ft,t)
inherit(P.fm,t)
inherit(P.fl,t)
inherit(P.fn,t)
inherit(P.dC,t)
inherit(P.da,t)
inherit(P.db,t)
inherit(W.ej,t)
inherit(W.eK,t)
inherit(W.eY,t)
inherit(P.fv,t)
inherit(B.fS,t)
inherit(B.fT,t)
inherit(B.fU,t)
inherit(B.fV,t)
inherit(B.fW,t)
inherit(B.dU,t)
inherit(B.dV,t)
inherit(B.dW,t)
inherit(B.dX,t)
inherit(A.fD,t)
inherit(R.fP,t)
t=H.eQ
inherit(H.aG,t)
inherit(H.bg,t)
t=P.ax
inherit(H.dQ,t)
inherit(H.du,t)
inherit(H.eF,t)
inherit(H.eC,t)
inherit(H.cZ,t)
inherit(H.e7,t)
inherit(P.br,t)
inherit(P.bR,t)
inherit(P.a4,t)
inherit(P.eG,t)
inherit(P.eE,t)
inherit(P.b2,t)
inherit(P.d0,t)
inherit(P.d5,t)
t=H.ep
inherit(H.eh,t)
inherit(H.aR,t)
inherit(H.eL,P.br)
inherit(P.dB,P.aY)
inherit(H.R,P.dB)
inherit(H.bN,H.al)
t=H.bN
inherit(H.b8,t)
inherit(H.ba,t)
inherit(H.b9,H.b8)
inherit(H.b0,H.b9)
inherit(H.bb,H.ba)
inherit(H.bO,H.bb)
inherit(H.bM,H.b0)
t=H.bO
inherit(H.dK,t)
inherit(H.dL,t)
inherit(H.dM,t)
inherit(H.dN,t)
inherit(H.dO,t)
inherit(H.bP,t)
inherit(H.dP,t)
inherit(P.fq,P.eR)
inherit(P.fk,P.fr)
inherit(P.fe,H.R)
inherit(P.e9,P.ea)
inherit(P.f9,P.e9)
inherit(P.fc,P.f9)
t=P.a0
inherit(P.a6,t)
inherit(P.w,t)
t=P.a4
inherit(P.bS,t)
inherit(P.dm,t)
t=W.d
inherit(W.v,t)
inherit(W.df,t)
inherit(W.aW,t)
inherit(W.aZ,t)
inherit(W.e1,t)
inherit(W.bV,t)
inherit(W.bc,t)
inherit(W.be,t)
inherit(W.eI,t)
inherit(W.eJ,t)
inherit(W.b5,t)
inherit(W.hl,t)
inherit(P.cX,t)
inherit(P.aw,t)
t=W.v
inherit(W.e,t)
inherit(W.ab,t)
inherit(W.aU,t)
inherit(W.h,W.e)
t=W.h
inherit(W.cT,t)
inherit(W.cU,t)
inherit(W.bs,t)
inherit(W.dh,t)
inherit(W.e8,t)
inherit(W.d1,W.P)
inherit(W.aS,W.c7)
t=W.K
inherit(W.d3,t)
inherit(W.d4,t)
inherit(W.c9,W.c8)
inherit(W.bx,W.c9)
inherit(W.cb,W.ca)
inherit(W.d8,W.cb)
inherit(W.cd,W.cc)
inherit(W.de,W.cd)
inherit(W.cg,W.cf)
inherit(W.aV,W.cg)
inherit(W.bD,W.aU)
inherit(W.dk,W.aW)
inherit(W.ao,W.f)
t=W.ao
inherit(W.aj,t)
inherit(W.E,t)
inherit(W.an,t)
inherit(W.dH,W.aZ)
inherit(W.ck,W.cj)
inherit(W.dI,W.ck)
inherit(W.cn,W.cm)
inherit(W.bQ,W.cn)
inherit(W.cr,W.cq)
inherit(W.e_,W.cr)
inherit(W.bd,W.bc)
inherit(W.ed,W.bd)
inherit(W.ct,W.cs)
inherit(W.ef,W.ct)
inherit(W.ei,W.cx)
inherit(W.cB,W.cA)
inherit(W.eq,W.cB)
inherit(W.bf,W.be)
inherit(W.er,W.bf)
inherit(W.cD,W.cC)
inherit(W.ex,W.cD)
inherit(W.aq,W.E)
inherit(W.cH,W.cG)
inherit(W.eS,W.cH)
inherit(W.eT,W.by)
inherit(W.cJ,W.cI)
inherit(W.f8,W.cJ)
inherit(W.cL,W.cK)
inherit(W.cl,W.cL)
inherit(W.cN,W.cM)
inherit(W.fo,W.cN)
inherit(W.cP,W.cO)
inherit(W.fp,W.cP)
inherit(W.eW,P.ek)
inherit(W.ho,W.eW)
inherit(W.eX,P.el)
inherit(P.I,P.fj)
inherit(P.ci,P.ch)
inherit(P.dv,P.ci)
inherit(P.cp,P.co)
inherit(P.dR,P.cp)
inherit(P.cz,P.cy)
inherit(P.eo,P.cz)
inherit(P.cF,P.cE)
inherit(P.ez,P.cF)
inherit(P.dS,P.aw)
inherit(P.cv,P.cu)
inherit(P.eg,P.cv)
t=G.dJ
inherit(G.ee,t)
inherit(G.eD,t)
inherit(G.dG,t)
inherit(G.e4,t)
inherit(G.cY,G.ee)
inherit(B.dT,G.cY)
t=G.eD
inherit(G.dE,t)
inherit(G.dY,t)
inherit(G.dl,G.b4)
mixin(H.b8,P.l)
mixin(H.b9,H.ay)
mixin(H.ba,P.l)
mixin(H.bb,H.ay)
mixin(W.c7,W.d2)
mixin(W.c8,P.l)
mixin(W.c9,W.n)
mixin(W.ca,P.l)
mixin(W.cb,W.n)
mixin(W.cc,P.l)
mixin(W.cd,W.n)
mixin(W.cf,P.l)
mixin(W.cg,W.n)
mixin(W.cj,P.l)
mixin(W.ck,W.n)
mixin(W.cm,P.l)
mixin(W.cn,W.n)
mixin(W.cq,P.l)
mixin(W.cr,W.n)
mixin(W.bc,P.l)
mixin(W.bd,W.n)
mixin(W.cs,P.l)
mixin(W.ct,W.n)
mixin(W.cx,P.aY)
mixin(W.cA,P.l)
mixin(W.cB,W.n)
mixin(W.be,P.l)
mixin(W.bf,W.n)
mixin(W.cC,P.l)
mixin(W.cD,W.n)
mixin(W.cG,P.l)
mixin(W.cH,W.n)
mixin(W.cI,P.l)
mixin(W.cJ,W.n)
mixin(W.cK,P.l)
mixin(W.cL,W.n)
mixin(W.cM,P.l)
mixin(W.cN,W.n)
mixin(W.cO,P.l)
mixin(W.cP,W.n)
mixin(P.ch,P.l)
mixin(P.ci,W.n)
mixin(P.co,P.l)
mixin(P.cp,W.n)
mixin(P.cy,P.l)
mixin(P.cz,W.n)
mixin(P.cE,P.l)
mixin(P.cF,W.n)
mixin(P.cu,P.l)
mixin(P.cv,W.n)})();(function constants(){C.r=W.bs.prototype
C.n=W.bt.prototype
C.p=W.bu.prototype
C.C=W.bD.prototype
C.D=J.a.prototype
C.a=J.af.prototype
C.b=J.bF.prototype
C.u=J.bG.prototype
C.c=J.az.prototype
C.i=J.ah.prototype
C.K=J.ai.prototype
C.L=H.bM.prototype
C.x=J.dZ.prototype
C.q=J.ap.prototype
C.a1=W.aq.prototype
C.a2=W.b5.prototype
C.m=new P.fb()
C.f=new P.fk()
C.t=new P.ae(0)
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
C.M=new G.r("vec3","vertex btangents",0)
C.d=new G.r("vec3","",0)
C.N=new G.r("vec4","delta from light",0)
C.o=new G.r("","",0)
C.y=new G.r("vec3","vertex coordinates",0)
C.O=new G.r("vec3","vertex binormals",0)
C.z=new G.r("vec4","for wireframe",0)
C.P=new G.r("vec4","per vertex color",0)
C.Q=new G.r("float","for normal maps",0)
C.j=new G.r("mat4","",0)
C.S=new G.r("mat4","",4)
C.R=new G.r("mat4","",128)
C.e=new G.r("float","",0)
C.T=new G.r("float","",4)
C.U=new G.r("float","depth for shadowmaps",0)
C.h=new G.r("sampler2D","",0)
C.V=new G.r("float","for bump maps",0)
C.W=new G.r("vec2","texture uvs",0)
C.X=new G.r("float","time since program start in sec",0)
C.k=new G.r("vec2","",0)
C.Y=new G.r("samplerCube","",0)
C.l=new G.r("vec4","",0)
C.Z=new G.r("vec3","vertex normals",0)
C.a_=new G.r("sampler2DShadow","",0)
C.A=new G.r("vec3","per vertex color",0)
C.B=new G.r("mat3","",0)
C.a0=new G.r("vec3","vertex tangents",0)})();(function staticFields(){$.ia="$cachedFunction"
$.ib="$cachedInvocation"
$.hX=null
$.hV=null
$.hq=!1
$.hw=null
$.iE=null
$.iU=null
$.fy=null
$.fH=null
$.hy=null
$.aH=null
$.bh=null
$.bi=null
$.hr=!1
$.y=C.f
$.i0=0
$.kz=0
$.kA=0
$.hB=0
$.iQ=0
$.bm=0
$.bn=0
$.kZ=!1
$.kF=0})();(function lazyInitializers(){lazy($,"i_","$get$i_",function(){return H.iM("_$dart_dartClosure")})
lazy($,"ha","$get$ha",function(){return H.iM("_$dart_js")})
lazy($,"i2","$get$i2",function(){return H.jQ()})
lazy($,"i3","$get$i3",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.i0
$.i0=t+1
t="expando$key$"+t}return new P.dd(t,null,[P.w])})
lazy($,"ih","$get$ih",function(){return H.V(H.eB({
toString:function(){return"$receiver$"}}))})
lazy($,"ii","$get$ii",function(){return H.V(H.eB({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"ij","$get$ij",function(){return H.V(H.eB(null))})
lazy($,"ik","$get$ik",function(){return H.V(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"ip","$get$ip",function(){return H.V(H.eB(void 0))})
lazy($,"iq","$get$iq",function(){return H.V(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"im","$get$im",function(){return H.V(H.io(null))})
lazy($,"il","$get$il",function(){return H.V(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"is","$get$is",function(){return H.V(H.io(void 0))})
lazy($,"ir","$get$ir",function(){return H.V(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"hn","$get$hn",function(){return P.kg()})
lazy($,"bj","$get$bj",function(){return[]})
lazy($,"fx","$get$fx",function(){return P.i4(P.w,P.aK)})
lazy($,"bl","$get$bl",function(){return P.i4(P.u,P.aK)})
lazy($,"ie","$get$ie",function(){return new G.c3(1281,0,4294967295)})
lazy($,"hT","$get$hT",function(){return new G.c2(32774,770,769)})
lazy($,"Z","$get$Z",function(){return P.ak(["cBlendEquation",C.o,"cDepthWrite",C.o,"cDepthTest",C.o,"cStencilFunc",C.o,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColors",C.A,"aColorAlpha",C.P,"aPosition",C.y,"aTexUV",C.W,"aNormal",C.Z,"aBinormal",C.O,"aCenter",C.z,"aPointSize",C.e,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.a0,"aBitangent",C.M,"iaRotation",C.l,"iaTranslation",C.d,"iaScale",C.d,"vColor",C.A,"vTexUV",C.k,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.y,"vPositionFromLight",C.N,"vCenter",C.z,"vDepth",C.U,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.B,"uConvolutionMatrix",C.B,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a_,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.Y,"uAnimationTable",C.h,"uTime",C.X,"uCameraNear",C.e,"uCameraFar",C.e,"uFogNear",C.e,"uFogFar",C.e,"uPointSize",C.e,"uScale",C.e,"uAngle",C.e,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.e,"uShininess",C.e,"uShadowBias",C.e,"uOpacity",C.e,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.d,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.R,"uLightDescs",C.S,"uLightCount",C.e,"uLightTypes",C.T,"uBumpScale",C.V,"uNormalScale",C.Q])})
lazy($,"iu","$get$iu",function(){return P.k3(null)})
lazy($,"hZ","$get$hZ",function(){return T.ke(1,0,0)})
lazy($,"iT","$get$iT",function(){var t=G.ec("PointSpritesV")
t.aY(["aPosition"])
t.a7(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"])
t.a8(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"])
return t})
lazy($,"iS","$get$iS",function(){var t=G.ec("PointSpritesF")
t.a7(["uTexture"])
t.a8(["oFragColor = texture( uTexture,  gl_PointCoord);"])
return t})
lazy($,"iJ","$get$iJ",function(){var t=G.ec("FireWorksV")
t.aY(["aPosition","aNormal"])
t.a7(["uPerspectiveViewMatrix","uModelMatrix","uTime"])
t.a8(["      float t = mod(uTime, 5.0);\n      vec3 vp = aPosition;\n      if( t < 3.0) {\n       vp.y = t;\n      } else {\n       vp.y = 3.0;\n       vp += normalize(aNormal)*(t-3.0);\n      }\n      gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(vp, 1.0);\n      gl_PointSize = 100.0/gl_Position.z;\n"])
return t})
lazy($,"iI","$get$iI",function(){var t=G.ec("FireWorksF")
t.a7(["uTime","uColor","uTexture"])
t.a8(["      oFragColor = texture(uTexture, gl_PointCoord);\n      float t = mod(uTime, 5.0);\n      if( t < 3.0) {\n         //gl_FragColor.x = 1.0;\n      } else {\n         //gl_FragColor.rgb = uColor;\n         oFragColor.a -= (t-3.0);\n      }\n"])
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
mangledGlobalNames:{w:"int",a6:"double",a0:"num",u:"String",aK:"bool",F:"Null",k:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,v:true,args:[P.A],opt:[P.aC]},{func:1,ret:P.w,args:[P.B,P.B]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,Blob:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSCharsetRule:J.a,CSSConditionRule:J.a,CSSFontFaceRule:J.a,CSSGroupingRule:J.a,CSSImportRule:J.a,CSSKeyframeRule:J.a,MozCSSKeyframeRule:J.a,WebKitCSSKeyframeRule:J.a,CSSKeyframesRule:J.a,MozCSSKeyframesRule:J.a,WebKitCSSKeyframesRule:J.a,CSSMediaRule:J.a,CSSNamespaceRule:J.a,CSSPageRule:J.a,CSSRule:J.a,CSSStyleRule:J.a,CSSStyleSheet:J.a,CSSSupportsRule:J.a,CSSVariableReferenceValue:J.a,CSSViewportRule:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,File:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,Gamepad:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MimeType:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechGrammar:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,StyleSheet:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,Touch:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGLength:J.a,SVGMatrix:J.a,SVGNumber:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGTransform:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioParamMap:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.b_,DataView:H.al,ArrayBufferView:H.al,Float64Array:H.b0,Float32Array:H.bM,Int16Array:H.dK,Int32Array:H.dL,Int8Array:H.dM,Uint16Array:H.dN,Uint32Array:H.dO,Uint8ClampedArray:H.bP,CanvasPixelArray:H.bP,Uint8Array:H.dP,HTMLAudioElement:W.h,HTMLBRElement:W.h,HTMLBaseElement:W.h,HTMLBodyElement:W.h,HTMLButtonElement:W.h,HTMLContentElement:W.h,HTMLDListElement:W.h,HTMLDataElement:W.h,HTMLDataListElement:W.h,HTMLDetailsElement:W.h,HTMLDialogElement:W.h,HTMLDivElement:W.h,HTMLEmbedElement:W.h,HTMLFieldSetElement:W.h,HTMLHRElement:W.h,HTMLHeadElement:W.h,HTMLHeadingElement:W.h,HTMLHtmlElement:W.h,HTMLIFrameElement:W.h,HTMLImageElement:W.h,HTMLInputElement:W.h,HTMLLIElement:W.h,HTMLLabelElement:W.h,HTMLLegendElement:W.h,HTMLLinkElement:W.h,HTMLMapElement:W.h,HTMLMediaElement:W.h,HTMLMenuElement:W.h,HTMLMetaElement:W.h,HTMLMeterElement:W.h,HTMLModElement:W.h,HTMLOListElement:W.h,HTMLObjectElement:W.h,HTMLOptGroupElement:W.h,HTMLOptionElement:W.h,HTMLOutputElement:W.h,HTMLParagraphElement:W.h,HTMLParamElement:W.h,HTMLPictureElement:W.h,HTMLPreElement:W.h,HTMLProgressElement:W.h,HTMLQuoteElement:W.h,HTMLScriptElement:W.h,HTMLShadowElement:W.h,HTMLSlotElement:W.h,HTMLSourceElement:W.h,HTMLSpanElement:W.h,HTMLStyleElement:W.h,HTMLTableCaptionElement:W.h,HTMLTableCellElement:W.h,HTMLTableDataCellElement:W.h,HTMLTableHeaderCellElement:W.h,HTMLTableColElement:W.h,HTMLTableElement:W.h,HTMLTableRowElement:W.h,HTMLTableSectionElement:W.h,HTMLTemplateElement:W.h,HTMLTextAreaElement:W.h,HTMLTimeElement:W.h,HTMLTitleElement:W.h,HTMLTrackElement:W.h,HTMLUListElement:W.h,HTMLUnknownElement:W.h,HTMLVideoElement:W.h,HTMLDirectoryElement:W.h,HTMLFontElement:W.h,HTMLFrameElement:W.h,HTMLFrameSetElement:W.h,HTMLMarqueeElement:W.h,HTMLElement:W.h,AccessibleNodeList:W.cS,HTMLAnchorElement:W.cT,HTMLAreaElement:W.cU,HTMLCanvasElement:W.bs,CanvasGradient:W.bt,CanvasRenderingContext2D:W.bu,CDATASection:W.ab,CharacterData:W.ab,Comment:W.ab,ProcessingInstruction:W.ab,Text:W.ab,CSSPerspective:W.d1,CSSStyleDeclaration:W.aS,MSStyleCSSProperties:W.aS,CSS2Properties:W.aS,CSSImageValue:W.K,CSSKeywordValue:W.K,CSSNumericValue:W.K,CSSPositionValue:W.K,CSSResourceValue:W.K,CSSUnitValue:W.K,CSSURLImageValue:W.K,CSSStyleValue:W.K,CSSMatrixComponent:W.P,CSSRotation:W.P,CSSScale:W.P,CSSSkew:W.P,CSSTranslation:W.P,CSSTransformComponent:W.P,CSSTransformValue:W.d3,CSSUnparsedValue:W.d4,DataTransferItemList:W.d6,XMLDocument:W.aU,Document:W.aU,DOMException:W.d7,ClientRectList:W.bx,DOMRectList:W.bx,DOMRectReadOnly:W.by,DOMStringList:W.d8,DOMTokenList:W.d9,SVGAElement:W.e,SVGAnimateElement:W.e,SVGAnimateMotionElement:W.e,SVGAnimateTransformElement:W.e,SVGAnimationElement:W.e,SVGCircleElement:W.e,SVGClipPathElement:W.e,SVGDefsElement:W.e,SVGDescElement:W.e,SVGDiscardElement:W.e,SVGEllipseElement:W.e,SVGFEBlendElement:W.e,SVGFEColorMatrixElement:W.e,SVGFEComponentTransferElement:W.e,SVGFECompositeElement:W.e,SVGFEConvolveMatrixElement:W.e,SVGFEDiffuseLightingElement:W.e,SVGFEDisplacementMapElement:W.e,SVGFEDistantLightElement:W.e,SVGFEFloodElement:W.e,SVGFEFuncAElement:W.e,SVGFEFuncBElement:W.e,SVGFEFuncGElement:W.e,SVGFEFuncRElement:W.e,SVGFEGaussianBlurElement:W.e,SVGFEImageElement:W.e,SVGFEMergeElement:W.e,SVGFEMergeNodeElement:W.e,SVGFEMorphologyElement:W.e,SVGFEOffsetElement:W.e,SVGFEPointLightElement:W.e,SVGFESpecularLightingElement:W.e,SVGFESpotLightElement:W.e,SVGFETileElement:W.e,SVGFETurbulenceElement:W.e,SVGFilterElement:W.e,SVGForeignObjectElement:W.e,SVGGElement:W.e,SVGGeometryElement:W.e,SVGGraphicsElement:W.e,SVGImageElement:W.e,SVGLineElement:W.e,SVGLinearGradientElement:W.e,SVGMarkerElement:W.e,SVGMaskElement:W.e,SVGMetadataElement:W.e,SVGPathElement:W.e,SVGPatternElement:W.e,SVGPolygonElement:W.e,SVGPolylineElement:W.e,SVGRadialGradientElement:W.e,SVGRectElement:W.e,SVGScriptElement:W.e,SVGSetElement:W.e,SVGStopElement:W.e,SVGStyleElement:W.e,SVGElement:W.e,SVGSVGElement:W.e,SVGSwitchElement:W.e,SVGSymbolElement:W.e,SVGTSpanElement:W.e,SVGTextContentElement:W.e,SVGTextElement:W.e,SVGTextPathElement:W.e,SVGTextPositioningElement:W.e,SVGTitleElement:W.e,SVGUseElement:W.e,SVGViewElement:W.e,SVGGradientElement:W.e,SVGComponentTransferFunctionElement:W.e,SVGFEDropShadowElement:W.e,SVGMPathElement:W.e,Element:W.e,AbortPaymentEvent:W.f,AnimationEvent:W.f,AnimationPlaybackEvent:W.f,ApplicationCacheErrorEvent:W.f,BackgroundFetchClickEvent:W.f,BackgroundFetchEvent:W.f,BackgroundFetchFailEvent:W.f,BackgroundFetchedEvent:W.f,BeforeInstallPromptEvent:W.f,BeforeUnloadEvent:W.f,BlobEvent:W.f,CanMakePaymentEvent:W.f,ClipboardEvent:W.f,CloseEvent:W.f,CustomEvent:W.f,DeviceMotionEvent:W.f,DeviceOrientationEvent:W.f,ErrorEvent:W.f,ExtendableEvent:W.f,ExtendableMessageEvent:W.f,FetchEvent:W.f,FontFaceSetLoadEvent:W.f,ForeignFetchEvent:W.f,GamepadEvent:W.f,HashChangeEvent:W.f,InstallEvent:W.f,MediaEncryptedEvent:W.f,MediaKeyMessageEvent:W.f,MediaQueryListEvent:W.f,MediaStreamEvent:W.f,MediaStreamTrackEvent:W.f,MessageEvent:W.f,MIDIConnectionEvent:W.f,MIDIMessageEvent:W.f,MutationEvent:W.f,NotificationEvent:W.f,PageTransitionEvent:W.f,PaymentRequestEvent:W.f,PaymentRequestUpdateEvent:W.f,PopStateEvent:W.f,PresentationConnectionAvailableEvent:W.f,PresentationConnectionCloseEvent:W.f,ProgressEvent:W.f,PromiseRejectionEvent:W.f,PushEvent:W.f,RTCDataChannelEvent:W.f,RTCDTMFToneChangeEvent:W.f,RTCPeerConnectionIceEvent:W.f,RTCTrackEvent:W.f,SecurityPolicyViolationEvent:W.f,SensorErrorEvent:W.f,SpeechRecognitionError:W.f,SpeechRecognitionEvent:W.f,SpeechSynthesisEvent:W.f,StorageEvent:W.f,SyncEvent:W.f,TrackEvent:W.f,TransitionEvent:W.f,WebKitTransitionEvent:W.f,VRDeviceEvent:W.f,VRDisplayEvent:W.f,VRSessionEvent:W.f,MojoInterfaceRequestEvent:W.f,ResourceProgressEvent:W.f,USBConnectionEvent:W.f,IDBVersionChangeEvent:W.f,AudioProcessingEvent:W.f,OfflineAudioCompletionEvent:W.f,WebGLContextEvent:W.f,Event:W.f,InputEvent:W.f,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SourceBuffer:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,TextTrack:W.d,TextTrackCue:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,VTTCue:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,ServiceWorker:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,FileList:W.de,FileWriter:W.df,HTMLFormElement:W.dh,History:W.dj,HTMLCollection:W.aV,HTMLFormControlsCollection:W.aV,HTMLOptionsCollection:W.aV,HTMLDocument:W.bD,XMLHttpRequest:W.dk,XMLHttpRequestUpload:W.aW,XMLHttpRequestEventTarget:W.aW,KeyboardEvent:W.aj,Location:W.dA,MediaList:W.dF,MIDIOutput:W.dH,MIDIInput:W.aZ,MIDIPort:W.aZ,MimeTypeArray:W.dI,PointerEvent:W.E,MouseEvent:W.E,DragEvent:W.E,DocumentFragment:W.v,ShadowRoot:W.v,Attr:W.v,DocumentType:W.v,Node:W.v,NodeList:W.bQ,RadioNodeList:W.bQ,Plugin:W.T,PluginArray:W.e_,PresentationConnection:W.e1,RTCDataChannel:W.bV,DataChannel:W.bV,HTMLSelectElement:W.e8,SourceBufferList:W.ed,SpeechGrammarList:W.ef,SpeechRecognitionResult:W.U,Storage:W.ei,TextTrackCueList:W.eq,TextTrackList:W.er,TimeRanges:W.et,TouchEvent:W.an,TouchList:W.ex,TrackDefaultList:W.ey,CompositionEvent:W.ao,FocusEvent:W.ao,TextEvent:W.ao,UIEvent:W.ao,URL:W.eH,VideoTrackList:W.eI,WebSocket:W.eJ,WheelEvent:W.aq,Window:W.b5,DOMWindow:W.b5,CSSRuleList:W.eS,DOMRect:W.eT,GamepadList:W.f8,NamedNodeMap:W.cl,MozNamedAttrMap:W.cl,SpeechRecognitionResultList:W.fo,StyleSheetList:W.fp,SVGLengthList:P.dv,SVGNumberList:P.dR,SVGPointList:P.e0,SVGStringList:P.eo,SVGTransformList:P.ez,AudioBuffer:P.cW,AudioTrackList:P.cX,AudioContext:P.aw,webkitAudioContext:P.aw,BaseAudioContext:P.aw,OfflineAudioContext:P.dS,WebGLRenderingContext:P.e5,WebGL2RenderingContext:P.e6,SQLResultSetRowList:P.eg})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,Blob:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSStyleSheet:true,CSSSupportsRule:true,CSSVariableReferenceValue:true,CSSViewportRule:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,File:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,Gamepad:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechGrammar:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,StyleSheet:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,Touch:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGLength:true,SVGMatrix:true,SVGNumber:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGTransform:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioParamMap:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float64Array:true,Float32Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CanvasGradient:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,XMLDocument:true,Document:false,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SourceBuffer:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,TextTrack:true,TextTrackCue:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,VTTCue:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,ServiceWorker:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,FileList:true,FileWriter:true,HTMLFormElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,KeyboardEvent:true,Location:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,PresentationConnection:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,SourceBufferList:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLengthList:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGTransformList:true,AudioBuffer:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.bN.$nativeSuperclassTag="ArrayBufferView"
H.b8.$nativeSuperclassTag="ArrayBufferView"
H.b9.$nativeSuperclassTag="ArrayBufferView"
H.b0.$nativeSuperclassTag="ArrayBufferView"
H.ba.$nativeSuperclassTag="ArrayBufferView"
H.bb.$nativeSuperclassTag="ArrayBufferView"
H.bO.$nativeSuperclassTag="ArrayBufferView"
W.bc.$nativeSuperclassTag="EventTarget"
W.bd.$nativeSuperclassTag="EventTarget"
W.be.$nativeSuperclassTag="EventTarget"
W.bf.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.iW(R.iK(),b)},[])
else (function(b){H.iW(R.iK(),b)})([])})})()