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
a[c]=function(){a[c]=function(){H.o8(b)}
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
return d?function(e){if(t===null)t=H.jS(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.jS(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.jS(this,a,b,true,[],d).prototype
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
jz:function(a,b,c,d){if(!!a.$isk)return new H.el(a,b,[c,d])
return new H.cz(a,b,[c,d])},
cs:function(){return new P.b8("No element")},
mX:function(){return new P.b8("Too many elements")},
mW:function(){return new P.b8("Too few elements")},
nd:function(a,b){H.cP(a,0,J.bn(a)-1,b)},
cP:function(a,b,c,d){if(c-b<=32)H.nc(a,b,c,d)
else H.nb(a,b,c,d)},
nc:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.U(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.ab(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.j(a,q,s.h(a,p))
q=p}s.j(a,q,r)}},
nb:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.b(t>32)
s=C.b.N(t+1,6)
r=a3+s
q=a4-s
p=C.b.N(a3+a4,2)
o=p-s
n=p+s
t=J.U(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.ab(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.ab(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.ab(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.ab(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.ab(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.ab(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.ab(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.ab(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.ab(a5.$2(j,i),0)){h=i
i=j
j=h}t.j(a2,r,m)
t.j(a2,p,k)
t.j(a2,q,i)
t.j(a2,o,t.h(a2,a3))
t.j(a2,n,t.h(a2,a4))
g=a3+1
f=a4-1
if(J.E(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=t.h(a2,e)
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
H.cP(a2,a3,g-2,a5)
H.cP(a2,f+2,a4,a5)
if(a0)return
if(g<r&&f>q){for(;J.E(a5.$2(t.h(a2,g),l),0);)++g
for(;J.E(a5.$2(t.h(a2,f),j),0);)--f
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
break}}H.cP(a2,g,f,a5)}else H.cP(a2,g,f,a5)},
k:function k(){},
b3:function b3(){},
cx:function cx(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cz:function cz(a,b,c){this.a=a
this.b=b
this.$ti=c},
el:function el(a,b,c){this.a=a
this.b=b
this.$ti=c},
fb:function fb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bv:function bv(a,b,c){this.a=a
this.b=b
this.$ti=c},
d1:function d1(a,b,c){this.a=a
this.b=b
this.$ti=c},
hB:function hB(a,b,c){this.a=a
this.b=b
this.$ti=c},
aZ:function aZ(){},
dN:function(a,b){var t=a.at(b)
if(!u.globalState.d.cy)u.globalState.f.az()
return t},
iJ:function(){++u.globalState.f.b},
iX:function(){--u.globalState.f.b
H.b(u.globalState.f.b>=0)},
lF:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.r(s).$isi)throw H.c(P.dV("Arguments to main must be a List: "+H.f(s)))
u.globalState=new H.ii(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$kG()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.hQ(P.jx(null,H.aP),0)
q=P.z
s.sf1(new H.ad(0,null,null,null,null,null,0,[q,H.bb]))
s.sf3(new H.ad(0,null,null,null,null,null,0,[q,null]))
if(s.x){r=new H.ih()
s.Q=r
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.mR,r)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.ns)}if(u.globalState.x)return
o=H.le()
u.globalState.e=o
u.globalState.z.j(0,o.a,o)
u.globalState.d=o
if(H.bj(a,{func:1,args:[P.O]}))o.at(new H.j7(t,a))
else if(H.bj(a,{func:1,args:[P.O,P.O]}))o.at(new H.j8(t,a))
else o.at(a)
u.globalState.f.az()},
ns:function(a){var t=P.aG(["command","print","msg",a])
return new H.a7(!0,P.bc(null,P.z)).P(t)},
le:function(){var t,s
t=u.globalState.a++
s=P.z
t=new H.bb(t,new H.ad(0,null,null,null,null,null,0,[s,H.cM]),P.aH(null,null,null,s),u.createNewIsolate(),new H.cM(0,null,!1),new H.ax(H.lE()),new H.ax(H.lE()),!1,!1,[],P.aH(null,null,null,null),null,null,!1,!0,P.aH(null,null,null,null))
t.dR()
return t},
mT:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.mU()
return},
mU:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.c(P.v("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.c(P.v('Cannot extract URI from "'+t+'"'))},
mR:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=new H.aO(!0,[]).a5(b.data)
s=J.U(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.nV(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.aO(!0,[]).a5(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.aO(!0,[]).a5(s.h(t,"replyTo"))
k=H.le()
u.globalState.f.a.a1(0,new H.aP(k,new H.eW(q,p,o,n,m,l),"worker-start"))
u.globalState.d=k
u.globalState.f.az()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.mh(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.az()
break
case"close":u.globalState.ch.ay(0,$.$get$kH().h(0,a))
a.terminate()
u.globalState.f.az()
break
case"log":H.mQ(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
j=P.aG(["command","print","msg",t])
j=new H.a7(!0,P.bc(null,P.z)).P(j)
s.toString
self.postMessage(j)}else P.aa(s.h(t,"msg"))
break
case"error":throw H.c(s.h(t,"msg"))}},
mQ:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aG(["command","log","msg",a])
r=new H.a7(!0,P.bc(null,P.z)).P(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.N(q)
t=H.a8(q)
s=P.cl(t)
throw H.c(s)}},
mS:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.kP=$.kP+("_"+s)
$.kQ=$.kQ+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.M(0,["spawned",new H.bd(s,r),q,t.r])
r=new H.eX(t,d,a,c,b)
if(e){t.c5(q,q)
u.globalState.f.a.a1(0,new H.aP(t,r,"start isolate"))}else r.$0()},
ne:function(a,b){var t=new H.hk(!0,!1,null,0)
t.dK(a,b)
return t},
nu:function(a){return new H.aO(!0,[]).a5(new H.a7(!1,P.bc(null,P.z)).P(a))},
j7:function j7(a,b){this.a=a
this.b=b},
j8:function j8(a,b){this.a=a
this.b=b},
ii:function ii(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
bb:function bb(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ia:function ia(a,b){this.a=a
this.b=b},
hQ:function hQ(a,b){this.a=a
this.b=b},
hR:function hR(a){this.a=a},
aP:function aP(a,b,c){this.a=a
this.b=b
this.c=c},
ih:function ih(){},
eW:function eW(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eX:function eX(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hK:function hK(){},
bd:function bd(a,b){this.b=a
this.a=b},
ij:function ij(a,b){this.a=a
this.b=b},
bY:function bY(a,b,c){this.b=a
this.c=b
this.a=c},
cM:function cM(a,b,c){this.a=a
this.b=b
this.c=c},
hk:function hk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hl:function hl(a,b){this.a=a
this.b=b},
hm:function hm(a,b){this.a=a
this.b=b},
ax:function ax(a){this.a=a},
a7:function a7(a,b){this.a=a
this.b=b},
aO:function aO(a,b){this.a=a
this.b=b},
nP:function(a){return u.types[a]},
nX:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.r(a).$isu},
f:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.bo(a)
if(typeof t!=="string")throw H.c(H.T(a))
return t},
n8:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t=J.ao(t)
s=t[0]
r=t[1]
return new H.fL(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aI:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
bB:function(a){var t,s,r,q,p,o,n,m,l
t=J.r(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.O||!!J.r(a).$isaM){p=C.B(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.i.aZ(q,0)===36)q=C.i.di(q,1)
l=H.dP(H.iL(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+l,u.mangledGlobalNames)},
Q:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
n6:function(a){return a.b?H.Q(a).getUTCFullYear()+0:H.Q(a).getFullYear()+0},
n4:function(a){return a.b?H.Q(a).getUTCMonth()+1:H.Q(a).getMonth()+1},
n0:function(a){return a.b?H.Q(a).getUTCDate()+0:H.Q(a).getDate()+0},
n1:function(a){return a.b?H.Q(a).getUTCHours()+0:H.Q(a).getHours()+0},
n3:function(a){return a.b?H.Q(a).getUTCMinutes()+0:H.Q(a).getMinutes()+0},
n5:function(a){return a.b?H.Q(a).getUTCSeconds()+0:H.Q(a).getSeconds()+0},
n2:function(a){return a.b?H.Q(a).getUTCMilliseconds()+0:H.Q(a).getMilliseconds()+0},
kO:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.c(H.T(a))
return a[b]},
bi:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a1(!0,b,"index",null)
t=J.bn(a)
if(b<0||C.b.bp(b,t))return P.A(b,a,"index",null,t)
return P.fI(b,"index",null)},
T:function(a){return new P.a1(!0,a,null,null)},
c:function(a){var t
if(a==null)a=new P.bA()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.lJ})
t.name=""}else t.toString=H.lJ
return t},
lJ:function(){return J.bo(this.dartException)},
M:function(a){throw H.c(a)},
C:function(a){throw H.c(P.am(a))},
ag:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.hq(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
hr:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
l_:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
kN:function(a,b){return new H.ft(a,b==null?null:b.method)},
jt:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.f1(a,s,t?null:b.receiver)},
N:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.j9(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.b8(r,16)&8191)===10)switch(q){case 438:return t.$1(H.jt(H.f(s)+" (Error "+q+")",null))
case 445:case 5007:return t.$1(H.kN(H.f(s)+" (Error "+q+")",null))}}if(a instanceof TypeError){p=$.$get$kU()
o=$.$get$kV()
n=$.$get$kW()
m=$.$get$kX()
l=$.$get$l0()
k=$.$get$l1()
j=$.$get$kZ()
$.$get$kY()
i=$.$get$l3()
h=$.$get$l2()
g=p.U(s)
if(g!=null)return t.$1(H.jt(s,g))
else{g=o.U(s)
if(g!=null){g.method="call"
return t.$1(H.jt(s,g))}else{g=n.U(s)
if(g==null){g=m.U(s)
if(g==null){g=l.U(s)
if(g==null){g=k.U(s)
if(g==null){g=j.U(s)
if(g==null){g=m.U(s)
if(g==null){g=i.U(s)
if(g==null){g=h.U(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return t.$1(H.kN(s,g))}}return t.$1(new H.hu(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.cS()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.a1(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.cS()
return a},
a8:function(a){var t
if(a==null)return new H.ds(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.ds(a,null)},
o0:function(a){if(a==null||typeof a!='object')return J.bm(a)
else return H.aI(a)},
nN:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=a.length
for(r=0;r<s;){q=r+1
H.b(t)
p=a[r]
r=q+1
H.b(t)
b.j(0,p,a[q])}return b},
nW:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dN(b,new H.iS(a))
case 1:return H.dN(b,new H.iT(a,d))
case 2:return H.dN(b,new H.iU(a,d,e))
case 3:return H.dN(b,new H.iV(a,d,e,f))
case 4:return H.dN(b,new H.iW(a,d,e,f,g))}throw H.c(P.cl("Unsupported number of arguments for wrapped closure"))},
bh:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.nW)
a.$identity=t
return t},
mz:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.r(c).$isi){t.$reflectionInfo=c
r=H.n8(t).r}else r=c
q=d?Object.create(new H.h1().constructor.prototype):Object.create(new H.bp(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.km(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.nP,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.kj:H.jl
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.c("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.km(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
mw:function(a,b,c,d){var t=H.jl
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
km:function(a,b,c){var t,s,r,q
if(c)return H.my(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.mw(s,b==null?r!=null:b!==r,t,b)
return q},
mx:function(a,b,c,d){var t,s
t=H.jl
s=H.kj
switch(b?-1:a){case 0:throw H.c(H.n9("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
my:function(a,b){var t,s,r,q
t=$.kk
if(t==null){t=H.kh("self")
$.kk=t}t=$.ki
if(t==null){t=H.kh("receiver")
$.ki=t}s=b.$stubName
r=b.length
q=a[s]
t=H.mx(r,b==null?q!=null:b!==q,s,b)
return t},
jS:function(a,b,c,d,e,f){var t,s
t=J.ao(b)
s=!!J.r(c).$isi?J.ao(c):c
return H.mz(a,t,s,!!d,e,f)},
jl:function(a){return a.a},
kj:function(a){return a.c},
kh:function(a){var t,s,r,q,p
t=new H.bp("self","target","receiver","name")
s=J.ao(Object.getOwnPropertyNames(t))
for(r=s.length,q=0;q<r;++q){p=s[q]
if(t[p]===a)return p}},
on:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.ah(a,"String"))},
oi:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.ah(a,"double"))},
om:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.ah(a,"num"))},
nH:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.ah(a,"bool"))},
nV:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.ah(a,"int"))},
o2:function(a,b){throw H.c(H.ah(a,b.substring(3)))},
o1:function(a,b){var t=J.U(b)
throw H.c(H.kl(a,t.bC(b,3,t.gk(b))))},
jW:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.r(a)[b])return a
H.o2(a,b)},
au:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.r(a)[b]
else t=!0
if(t)return a
H.o1(a,b)},
ol:function(a){if(a==null)return a
if(!!J.r(a).$isi)return a
throw H.c(H.ah(a,"List"))},
jT:function(a){var t=J.r(a)
return"$S" in t?t.$S():null},
bj:function(a,b){var t,s
if(a==null)return!1
t=H.jT(a)
if(t==null)s=!1
else s=H.ly(t,b)
return s},
oj:function(a,b){var t,s
if(a==null)return a
if($.jP)return a
$.jP=!0
try{if(H.bj(a,b))return a
t=H.j1(b,null)
s=H.ah(a,t)
throw H.c(s)}finally{$.jP=!1}},
ah:function(a,b){return new H.hs("TypeError: "+H.f(P.ck(a))+": type '"+H.lk(a)+"' is not a subtype of type '"+b+"'")},
kl:function(a,b){return new H.e_("CastError: "+H.f(P.ck(a))+": type '"+H.lk(a)+"' is not a subtype of type '"+b+"'")},
lk:function(a){var t
if(a instanceof H.az){t=H.jT(a)
if(t!=null)return H.j1(t,null)
return"Closure"}return H.bB(a)},
aj:function(a){if(!0===a)return!1
if(!!J.r(a).$isjp)a=a.$0()
if(typeof a==="boolean")return!a
throw H.c(H.ah(a,"bool"))},
at:function(a){throw H.c(new H.hD(a))},
b:function(a){if(H.aj(a))throw H.c(P.mv(null))},
o8:function(a){throw H.c(new P.ea(a))},
n9:function(a){return new H.fQ(a)},
lE:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
lw:function(a){return u.getIsolateTag(a)},
K:function(a){return new H.ar(a,null)},
B:function(a,b){H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
iL:function(a){if(a==null)return
return a.$ti},
lx:function(a,b){return H.k_(a["$as"+H.f(b)],H.iL(a))},
Y:function(a,b,c){var t,s
t=H.lx(a,b)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
al:function(a,b){var t,s
t=H.iL(a)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
j1:function(a,b){var t=H.bk(a,b)
return t},
bk:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.b(!0)
H.b(!0)
return a[0].name+H.dP(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.f(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.bk(t,b)
return H.nw(a,b)}return"unknown-reified-type"},
nw:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.bk(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.bk(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.bk(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.nM(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.bk(l[j],b)+(" "+H.f(j))}q+="}"}return"("+q+") => "+t},
dP:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=new P.bF("")
for(r=b,q=!0,p=!0;H.b(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.b(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.bk(o,c)}return p?"":"<"+s.l(0)+">"},
iM:function(a){var t,s,r
if(a instanceof H.az){t=H.jT(a)
if(t!=null)return H.j1(t,null)}s=J.r(a).constructor.name
if(a==null)return s
r=H.dP(a.$ti,0,null)
return s+r},
k_:function(a,b){if(a==null)return b
H.b(typeof a=="function")
H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.jX(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.jX(a,null,b)
return b},
c1:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.iL(a)
s=J.r(a)
if(s[b]==null)return!1
return H.lo(H.k_(s[d],t),c)},
dQ:function(a,b,c,d){var t,s
if(a==null)return a
t=H.c1(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.dP(c,0,null)
throw H.c(H.kl(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
of:function(a,b,c,d){var t,s
if(a==null)return a
t=H.c1(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.dP(c,0,null)
throw H.c(H.ah(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
lo:function(a,b){var t,s,r,q,p
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
if(!H.Z(r,b[p]))return!1}return!0},
og:function(a,b,c){return H.jX(a,b,H.lx(b,c))},
Z:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.name==="O")return!0
if('func' in b)return H.ly(a,b)
if('func' in a)return b.name==="jp"||b.name==="F"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.b(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.b(!0)
q=b[0]}else q=b
if(q!==s){p=H.j1(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.lo(H.k_(o,t),r)},
ln:function(a,b,c){var t,s,r,q,p,o,n
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
if(!(H.Z(o,n)||H.Z(n,o)))return!1}return!0},
nD:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
H.b(typeof a=='object')
H.b(typeof b=='object')
t=J.ao(Object.getOwnPropertyNames(b))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.Z(p,o)||H.Z(o,p)))return!1}return!0},
ly:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.b('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.Z(t,s)||H.Z(s,t)))return!1}r=a.args
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
if(n===m){if(!H.ln(r,q,!1))return!1
if(!H.ln(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.b(j)
g=r[h]
H.b(i)
f=q[h]
if(!(H.Z(g,f)||H.Z(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=q[e]
if(!(H.Z(g,f)||H.Z(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=o[e]
if(!(H.Z(g,f)||H.Z(f,g)))return!1}}return H.nD(a.named,b.named)},
jX:function(a,b,c){H.b(typeof a=="function")
H.b(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
oo:function(a){var t=$.jU
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
ok:function(a){return H.aI(a)},
oh:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nY:function(a){var t,s,r,q,p,o
H.b(!(a instanceof P.F))
t=$.jU.$1(a)
s=$.iI[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iR[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.lm.$2(a,t)
if(t!=null){s=$.iI[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iR[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.j_(r)
$.iI[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.iR[t]=r
return r}if(p==="-"){o=H.j_(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.lA(a,r)
if(p==="*")throw H.c(P.l7(t))
if(u.leafTags[t]===true){o=H.j_(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.lA(a,r)},
lA:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.jY(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
j_:function(a){return J.jY(a,!1,null,!!a.$isu)},
o_:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return H.j_(t)
else return J.jY(t,c,null,null)},
nT:function(){if(!0===$.jV)return
$.jV=!0
H.nU()},
nU:function(){var t,s,r,q,p,o,n,m
$.iI=Object.create(null)
$.iR=Object.create(null)
H.nS()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.lD.$1(p)
if(o!=null){n=H.o_(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
nS:function(){var t,s,r,q,p,o,n
t=C.S()
t=H.bg(C.P,H.bg(C.U,H.bg(C.A,H.bg(C.A,H.bg(C.T,H.bg(C.Q,H.bg(C.R(C.B),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.jU=new H.iO(p)
$.lm=new H.iP(o)
$.lD=new H.iQ(n)},
bg:function(a,b){return a(b)||b},
o7:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
fL:function fL(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
hq:function hq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ft:function ft(a,b){this.a=a
this.b=b},
f1:function f1(a,b,c){this.a=a
this.b=b
this.c=c},
hu:function hu(a){this.a=a},
j9:function j9(a){this.a=a},
ds:function ds(a,b){this.a=a
this.b=b},
iS:function iS(a){this.a=a},
iT:function iT(a,b){this.a=a
this.b=b},
iU:function iU(a,b,c){this.a=a
this.b=b
this.c=c},
iV:function iV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iW:function iW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
az:function az(){},
hf:function hf(){},
h1:function h1(){},
bp:function bp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hs:function hs(a){this.a=a},
e_:function e_(a){this.a=a},
fQ:function fQ(a){this.a=a},
hD:function hD(a){this.a=a},
ar:function ar(a,b){this.a=a
this.b=b},
ad:function ad(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
f0:function f0(a){this.a=a},
f3:function f3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f4:function f4(a,b){this.a=a
this.$ti=b},
f5:function f5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
iO:function iO(a){this.a=a},
iP:function iP(a){this.a=a},
iQ:function iQ(a){this.a=a},
iC:function(a){var t,s,r
if(!!J.r(a).$isq)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
ai:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bi(b,a))},
by:function by(){},
b6:function b6(){},
fj:function fj(){},
cD:function cD(){},
cE:function cE(){},
cF:function cF(){},
cC:function cC(){},
fk:function fk(){},
fl:function fl(){},
fm:function fm(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){},
cG:function cG(){},
fq:function fq(){},
bP:function bP(){},
bQ:function bQ(){},
bR:function bR(){},
bS:function bS(){},
nM:function(a){return J.ao(H.B(a?Object.keys(a):[],[null]))},
j0:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
r:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cv.prototype
return J.cu.prototype}if(typeof a=="string")return J.aD.prototype
if(a==null)return J.f_.prototype
if(typeof a=="boolean")return J.eZ.prototype
if(a.constructor==Array)return J.aC.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aE.prototype
return a}if(a instanceof P.F)return a
return J.iK(a)},
jY:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iK:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.jV==null){H.nT()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.c(P.l7("Return interceptor for "+H.f(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$js()]
if(p!=null)return p
p=H.nY(a)
if(p!=null)return p
if(typeof a=="function")return C.V
s=Object.getPrototypeOf(a)
if(s==null)return C.E
if(s===Object.prototype)return C.E
if(typeof q=="function"){Object.defineProperty(q,$.$get$js(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
ao:function(a){a.fixed$length=Array
return a},
U:function(a){if(typeof a=="string")return J.aD.prototype
if(a==null)return a
if(a.constructor==Array)return J.aC.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aE.prototype
return a}if(a instanceof P.F)return a
return J.iK(a)},
c3:function(a){if(a==null)return a
if(a.constructor==Array)return J.aC.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aE.prototype
return a}if(a instanceof P.F)return a
return J.iK(a)},
lu:function(a){if(typeof a=="number")return J.b2.prototype
if(a==null)return a
if(!(a instanceof P.F))return J.aM.prototype
return a},
nO:function(a){if(typeof a=="number")return J.b2.prototype
if(typeof a=="string")return J.aD.prototype
if(a==null)return a
if(!(a instanceof P.F))return J.aM.prototype
return a},
lv:function(a){if(typeof a=="string")return J.aD.prototype
if(a==null)return a
if(!(a instanceof P.F))return J.aM.prototype
return a},
j:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aE.prototype
return a}if(a instanceof P.F)return a
return J.iK(a)},
E:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.r(a).B(a,b)},
ab:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.lu(a).a0(a,b)},
lK:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.lu(a).a7(a,b)},
bl:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nX(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.U(a).h(a,b)},
lL:function(a,b,c,d){return J.j(a).dV(a,b,c,d)},
k0:function(a,b){return J.lv(a).aZ(a,b)},
ja:function(a,b){return J.j(a).ed(a,b)},
lM:function(a,b,c,d){return J.j(a).ee(a,b,c,d)},
lN:function(a,b,c){return J.j(a).ef(a,b,c)},
k1:function(a,b){return J.j(a).c4(a,b)},
jb:function(a,b){return J.j(a).Y(a,b)},
k2:function(a,b,c){return J.j(a).c7(a,b,c)},
lO:function(a,b){return J.j(a).ev(a,b)},
jc:function(a,b,c){return J.j(a).c8(a,b,c)},
lP:function(a,b,c){return J.j(a).c9(a,b,c)},
c6:function(a,b,c){return J.j(a).ca(a,b,c)},
dR:function(a,b){return J.j(a).ey(a,b)},
lQ:function(a,b){return J.j(a).cb(a,b)},
lR:function(a,b,c){return J.j(a).cc(a,b,c)},
k3:function(a,b,c,d){return J.j(a).cd(a,b,c,d)},
lS:function(a,b){return J.c3(a).ce(a,b)},
lT:function(a,b,c,d,e){return J.j(a).cf(a,b,c,d,e)},
lU:function(a,b){return J.nO(a).Z(a,b)},
jd:function(a,b,c){return J.U(a).eC(a,b,c)},
je:function(a){return J.j(a).ci(a)},
lV:function(a){return J.j(a).cj(a)},
lW:function(a){return J.j(a).cm(a)},
lX:function(a){return J.j(a).eI(a)},
lY:function(a,b){return J.j(a).co(a,b)},
jf:function(a,b){return J.j(a).cp(a,b)},
lZ:function(a,b,c,d){return J.j(a).cq(a,b,c,d)},
m_:function(a,b,c,d,e){return J.j(a).eP(a,b,c,d,e)},
m0:function(a,b,c,d,e){return J.j(a).cr(a,b,c,d,e)},
m1:function(a,b,c,d,e,f){return J.j(a).eQ(a,b,c,d,e,f)},
m2:function(a,b){return J.c3(a).v(a,b)},
c7:function(a,b){return J.j(a).cs(a,b)},
m3:function(a,b){return J.j(a).ct(a,b)},
m4:function(a){return J.j(a).eR(a)},
k4:function(a,b){return J.c3(a).au(a,b)},
m5:function(a){return J.j(a).geu(a)},
bm:function(a){return J.r(a).gA(a)},
aR:function(a){return J.c3(a).gC(a)},
bn:function(a){return J.U(a).gk(a)},
m6:function(a){return J.j(a).gbk(a)},
m7:function(a){return J.r(a).gE(a)},
m8:function(a){return J.j(a).gff(a)},
m9:function(a){return J.j(a).gaR(a)},
jg:function(a){return J.j(a).gm(a)},
jh:function(a){return J.j(a).gn(a)},
k5:function(a){return J.j(a).gG(a)},
ji:function(a,b){return J.j(a).aj(a,b)},
ma:function(a){return J.j(a).aT(a)},
mb:function(a){return J.j(a).br(a)},
mc:function(a,b){return J.j(a).bs(a,b)},
md:function(a,b,c){return J.j(a).bt(a,b,c)},
k6:function(a,b,c){return J.j(a).bw(a,b,c)},
me:function(a,b){return J.j(a).cw(a,b)},
mf:function(a,b){return J.c3(a).cB(a,b)},
mg:function(a,b,c){return J.j(a).cD(a,b,c)},
k7:function(a){return J.c3(a).f8(a)},
mh:function(a,b){return J.j(a).M(a,b)},
mi:function(a,b,c,d){return J.j(a).bB(a,b,c,d)},
mj:function(a,b,c,d,e,f,g){return J.j(a).cI(a,b,c,d,e,f,g)},
mk:function(a,b,c,d){return J.j(a).cJ(a,b,c,d)},
k8:function(a,b,c,d){return J.j(a).cK(a,b,c,d)},
ml:function(a){return J.lv(a).fi(a)},
bo:function(a){return J.r(a).l(a)},
mm:function(a,b,c,d){return J.j(a).fk(a,b,c,d)},
mn:function(a,b,c){return J.j(a).cM(a,b,c)},
mo:function(a,b,c){return J.j(a).cN(a,b,c)},
jj:function(a,b,c){return J.j(a).cO(a,b,c)},
mp:function(a,b,c){return J.j(a).cP(a,b,c)},
k9:function(a,b,c){return J.j(a).cQ(a,b,c)},
ka:function(a,b,c){return J.j(a).cR(a,b,c)},
kb:function(a,b,c){return J.j(a).cS(a,b,c)},
kc:function(a,b,c,d){return J.j(a).cT(a,b,c,d)},
kd:function(a,b,c,d){return J.j(a).cU(a,b,c,d)},
mq:function(a,b){return J.j(a).cW(a,b)},
mr:function(a,b,c){return J.j(a).fl(a,b,c)},
ms:function(a,b,c,d,e,f,g){return J.j(a).cY(a,b,c,d,e,f,g)},
mt:function(a,b,c,d,e){return J.j(a).d_(a,b,c,d,e)},
a:function a(){},
eZ:function eZ(){},
f_:function f_(){},
bu:function bu(){},
fD:function fD(){},
aM:function aM(){},
aE:function aE(){},
aC:function aC(a){this.$ti=a},
jq:function jq(a){this.$ti=a},
dW:function dW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b2:function b2(){},
cv:function cv(){},
cu:function cu(){},
aD:function aD(){}},P={
nj:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.nE()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.bh(new P.hG(t),1)).observe(s,{childList:true})
return new P.hF(t,s,r)}else if(self.setImmediate!=null)return P.nF()
return P.nG()},
nk:function(a){H.iJ()
self.scheduleImmediate(H.bh(new P.hH(a),0))},
nl:function(a){H.iJ()
self.setImmediate(H.bh(new P.hI(a),0))},
nm:function(a){P.jG(C.y,a)},
jG:function(a,b){var t=C.b.N(a.a,1000)
return H.ne(t<0?0:t,b)},
nz:function(a,b){if(H.bj(a,{func:1,args:[P.O,P.O]})){b.toString
return a}else{b.toString
return a}},
mM:function(a,b,c){var t
if(a==null)a=new P.bA()
t=$.x
if(t!==C.d)t.toString
t=new P.J(0,t,null,[c])
t.dX(a,b)
return t},
mN:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.J(0,$.x,null,[P.i])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.eO(t,b,!1,s)
try{for(m=0,l=0;m<3;++m){q=a[m]
p=l
q.bo(new P.eN(t,p,s,b,!1),r)
l=++t.b}if(l===0){l=new P.J(0,$.x,null,[null])
l.bN(C.C)
return l}k=new Array(l)
k.fixed$length=Array
t.a=k}catch(j){o=H.N(j)
n=H.a8(j)
if(t.b===0||!1)return P.mM(o,n,null)
else{t.c=o
t.d=n}}return s},
nv:function(a,b,c){$.x.toString
a.W(b,c)},
no:function(a,b){var t=new P.J(0,$.x,null,[b])
H.b(!0)
t.a=4
t.c=a
return t},
lb:function(a,b){var t,s,r
H.b(b.a<4)
H.b(!(a instanceof P.J))
H.b(b.a===0)
b.a=1
try{a.bo(new P.i_(b),new P.i0(b))}catch(r){t=H.N(r)
s=H.a8(r)
P.o3(new P.i1(b,t,s))}},
hZ:function(a,b){var t,s,r
H.b(b.a<=1)
for(;t=a.a,s=t===2,s;){H.b(s)
a=a.c}if(t>=4){r=b.aJ()
b.aY(a)
P.ba(b,r)}else{r=b.c
H.b(b.a<=1)
b.a=2
b.c=a
a.bZ(r)}},
ba:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.iD(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.ba(t.a,b)}s=t.a
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
P.iD(null,null,p,o,s)
return}s=$.x
if(s==null?l!=null:s!==l){H.b(l!=null)
s=$.x
H.b(l==null?s!=null:l!==s)
j=$.x
$.x=l
i=j}else i=null
s=b.c
if(s===8)new P.i6(t,r,b,q).$0()
else if(p){if((s&1)!==0)new P.i5(r,b,m).$0()}else if((s&2)!==0)new P.i4(t,r,b).$0()
if(i!=null){H.b(!0)
$.x=i}s=r.b
if(!!J.r(s).$isa_){if(s.a>=4){H.b(o.a<4)
h=o.c
o.c=null
b=o.aK(h)
H.b(o.a<4)
H.b(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.hZ(s,o)
return}}g=b.b
H.b(g.a<4)
h=g.c
g.c=null
b=g.aK(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.b(!o)
g.a=4
g.c=p}else{H.b(!o)
g.a=8
g.c=p}t.a=g
s=g}},
ny:function(){var t,s
for(;t=$.be,t!=null;){$.c_=null
s=t.b
$.be=s
if(s==null)$.bZ=null
t.a.$0()}},
nC:function(){$.jQ=!0
try{P.ny()}finally{$.c_=null
$.jQ=!1
if($.be!=null)$.$get$jM().$1(P.lp())}},
lj:function(a){var t=new P.d2(a,null)
if($.be==null){$.bZ=t
$.be=t
if(!$.jQ)$.$get$jM().$1(P.lp())}else{$.bZ.b=t
$.bZ=t}},
nB:function(a){var t,s,r
t=$.be
if(t==null){P.lj(a)
$.c_=$.bZ
return}s=new P.d2(a,null)
r=$.c_
if(r==null){s.b=t
$.c_=s
$.be=s}else{s.b=r.b
r.b=s
$.c_=s
if(s.b==null)$.bZ=s}},
o3:function(a){var t=$.x
if(C.d===t){P.bf(null,null,C.d,a)
return}t.toString
P.bf(null,null,t,t.bg(a))},
nt:function(a,b,c){var t=a.ez(0)
if(!!J.r(t).$isa_&&t!==$.$get$kC())t.fm(new P.iB(b,c))
else b.ao(c)},
nf:function(a,b){var t=$.x
if(t===C.d){t.toString
return P.jG(a,b)}return P.jG(a,t.bg(b))},
jL:function(a){var t,s
H.b(a!=null)
t=$.x
H.b(a==null?t!=null:a!==t)
s=$.x
$.x=a
return s},
iD:function(a,b,c,d,e){var t={}
t.a=d
P.nB(new P.iE(t,e))},
lh:function(a,b,c,d){var t,s
if($.x===c)return d.$0()
t=P.jL(c)
try{s=d.$0()
return s}finally{s=t
H.b(s!=null)
$.x=s}},
li:function(a,b,c,d,e){var t,s
if($.x===c)return d.$1(e)
t=P.jL(c)
try{s=d.$1(e)
return s}finally{s=t
H.b(s!=null)
$.x=s}},
nA:function(a,b,c,d,e,f){var t,s
if($.x===c)return d.$2(e,f)
t=P.jL(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.b(s!=null)
$.x=s}},
bf:function(a,b,c,d){var t=C.d!==c
if(t)d=!(!t||!1)?c.bg(d):c.ew(d)
P.lj(d)},
hG:function hG(a){this.a=a},
hF:function hF(a,b,c){this.a=a
this.b=b
this.c=c},
hH:function hH(a){this.a=a},
hI:function hI(a){this.a=a},
a_:function a_(){},
eO:function eO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eN:function eN(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jm:function jm(){},
hL:function hL(){},
hE:function hE(a,b){this.a=a
this.$ti=b},
iw:function iw(a,b){this.a=a
this.$ti=b},
bL:function bL(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
J:function J(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hW:function hW(a,b){this.a=a
this.b=b},
i3:function i3(a,b){this.a=a
this.b=b},
i_:function i_(a){this.a=a},
i0:function i0(a){this.a=a},
i1:function i1(a,b,c){this.a=a
this.b=b
this.c=c},
hY:function hY(a,b){this.a=a
this.b=b},
i2:function i2(a,b){this.a=a
this.b=b},
hX:function hX(a,b,c){this.a=a
this.b=b
this.c=c},
i6:function i6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i7:function i7(a){this.a=a},
i5:function i5(a,b,c){this.a=a
this.b=b
this.c=c},
i4:function i4(a,b,c){this.a=a
this.b=b
this.c=c},
d2:function d2(a,b){this.a=a
this.b=b},
bE:function bE(){},
h9:function h9(a){this.a=a},
ha:function ha(a,b){this.a=a
this.b=b},
h7:function h7(a,b,c){this.a=a
this.b=b
this.c=c},
h8:function h8(a){this.a=a},
h6:function h6(){},
iB:function iB(a,b){this.a=a
this.b=b},
jF:function jF(){},
aS:function aS(a,b){this.a=a
this.b=b},
iA:function iA(){},
iE:function iE(a,b){this.a=a
this.b=b},
il:function il(){},
io:function io(a,b){this.a=a
this.b=b},
im:function im(a,b){this.a=a
this.b=b},
ip:function ip(a,b){this.a=a
this.b=b},
kJ:function(a,b){return new H.ad(0,null,null,null,null,null,0,[a,b])},
L:function(){return new H.ad(0,null,null,null,null,null,0,[null,null])},
aG:function(a){return H.nN(a,new H.ad(0,null,null,null,null,null,0,[null,null]))},
bc:function(a,b){return new P.ie(0,null,null,null,null,null,0,[a,b])},
aH:function(a,b,c,d){return new P.ic(0,null,null,null,null,null,0,[d])},
jO:function(){var t=Object.create(null)
H.b(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
mV:function(a,b,c){var t,s
if(P.jR(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$c0()
C.a.i(s,a)
try{P.nx(a,t)}finally{H.b(C.a.gaP(s)===a)
s.pop()}s=P.kT(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eY:function(a,b,c){var t,s,r
if(P.jR(a))return b+"..."+c
t=new P.bF(b)
s=$.$get$c0()
C.a.i(s,a)
try{r=t
r.a=P.kT(r.gad(),a,", ")}finally{H.b(C.a.gaP(s)===a)
s.pop()}s=t
s.a=s.gad()+c
s=t.gad()
return s.charCodeAt(0)==0?s:s},
jR:function(a){var t,s
for(t=0;s=$.$get$c0(),t<s.length;++t)if(a===s[t])return!0
return!1},
nx:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gC(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.q())return
q=H.f(t.gt(t))
C.a.i(b,q)
s+=q.length+2;++r}if(!t.q()){if(r<=5)return
p=b.pop()
o=b.pop()}else{n=t.gt(t);++r
if(!t.q()){if(r<=4){C.a.i(b,H.f(n))
return}p=H.f(n)
o=b.pop()
s+=p.length+2}else{m=t.gt(t);++r
H.b(r<100)
for(;t.q();n=m,m=l){l=t.gt(t);++r
if(r>100){while(!0){if(!(s>75&&r>3))break
s-=b.pop().length+2;--r}C.a.i(b,"...")
return}}o=H.f(n)
p=H.f(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)C.a.i(b,k)
C.a.i(b,o)
C.a.i(b,p)},
jw:function(a,b){var t,s
t=P.aH(null,null,null,b)
for(s=J.aR(a);s.q();)t.i(0,s.gt(s))
return t},
kL:function(a){var t,s,r
t={}
if(P.jR(a))return"{...}"
s=new P.bF("")
try{C.a.i($.$get$c0(),a)
r=s
r.a=r.gad()+"{"
t.a=!0
J.k4(a,new P.fa(t,s))
t=s
t.a=t.gad()+"}"}finally{t=$.$get$c0()
H.b(C.a.gaP(t)===a)
t.pop()}t=s.gad()
return t.charCodeAt(0)==0?t:t},
jx:function(a,b){var t=new P.f6(null,0,0,0,[b])
t.dC(a,b)
return t},
ie:function ie(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
ic:function ic(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
id:function id(a,b,c){this.a=a
this.b=b
this.c=c},
bN:function bN(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
i9:function i9(){},
jv:function jv(){},
cw:function cw(){},
m:function m(){},
cy:function cy(){},
fa:function fa(a,b){this.a=a
this.b=b},
b5:function b5(){},
f6:function f6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ig:function ig(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fT:function fT(){},
fS:function fS(){},
bO:function bO(){},
mI:function(a){var t=J.r(a)
if(!!t.$isaz)return t.l(a)
return"Instance of '"+H.bB(a)+"'"},
kK:function(a,b,c){var t,s
t=H.B([],[c])
for(s=J.aR(a);s.q();)C.a.i(t,s.gt(s))
if(b)return t
return J.ao(t)},
kT:function(a,b,c){var t=J.aR(b)
if(!t.q())return a
if(c.length===0){do a+=H.f(t.gt(t))
while(t.q())}else{a+=H.f(t.gt(t))
for(;t.q();)a=a+c+H.f(t.gt(t))}return a},
mA:function(a,b){return J.lU(a,b)},
mD:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+t
if(t>=10)return s+"00"+t
return s+"000"+t},
mE:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cd:function(a){if(a>=10)return""+a
return"0"+a},
kx:function(a,b,c,d,e,f){return new P.aA(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
ck:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bo(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mI(a)},
mv:function(a){return new P.c9(a)},
dV:function(a){return new P.a1(!1,null,null,a)},
jk:function(a,b,c){return new P.a1(!0,a,b,c)},
mu:function(a){return new P.a1(!1,null,a,"Must not be null")},
fI:function(a,b,c){return new P.cL(null,null,!0,a,b,"Value not in range")},
aJ:function(a,b,c,d,e){return new P.cL(b,c,!0,a,d,"Invalid value")},
kR:function(a,b,c,d,e,f){if(C.b.a0(0,a)||C.b.a0(a,c))throw H.c(P.aJ(a,0,c,"start",f))
if(b!=null){if(a>b||C.b.a0(b,c))throw H.c(P.aJ(b,a,c,"end",f))
return b}return c},
A:function(a,b,c,d,e){var t=e!=null?e:J.bn(b)
return new P.eV(b,t,!0,a,c,"Index out of range")},
v:function(a){return new P.hv(a)},
l7:function(a){return new P.ht(a)},
h0:function(a){return new P.b8(a)},
am:function(a){return new P.e1(a)},
cl:function(a){return new P.hV(a)},
aa:function(a){H.j0(H.f(a))},
ak:function ak(){},
I:function I(){},
aW:function aW(a,b){this.a=a
this.b=b},
X:function X(){},
aA:function aA(a){this.a=a},
ej:function ej(){},
ek:function ek(){},
aX:function aX(){},
c9:function c9(a){this.a=a},
bA:function bA(){},
a1:function a1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cL:function cL(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eV:function eV(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hv:function hv(a){this.a=a},
ht:function ht(a){this.a=a},
b8:function b8(a){this.a=a},
e1:function e1(a){this.a=a},
cS:function cS(){},
ea:function ea(a){this.a=a},
jo:function jo(){},
hV:function hV(a){this.a=a},
en:function en(a,b,c){this.a=a
this.b=b
this.$ti=c},
z:function z(){},
V:function V(){},
ct:function ct(){},
i:function i(){},
b4:function b4(){},
O:function O(){},
a9:function a9(){},
F:function F(){},
b7:function b7(){},
p:function p(){},
bF:function bF(a){this.a=a},
jI:function jI(){},
lr:function(a){return a},
iG:function(a){var t,s,r,q,p
if(a==null)return
t=P.L()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q){p=s[q]
t.j(0,p,a[p])}return t},
nK:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.k4(a,new P.iF(t))
return t},
kw:function(){var t=$.kv
if(t==null){t=J.jd(window.navigator.userAgent,"Opera",0)
$.kv=t}return t},
mF:function(){var t,s
t=$.ks
if(t!=null)return t
s=$.kt
if(s==null){s=J.jd(window.navigator.userAgent,"Firefox",0)
$.kt=s}if(s)t="-moz-"
else{s=$.ku
if(s==null){s=!P.kw()&&J.jd(window.navigator.userAgent,"Trident/",0)
$.ku=s}if(s)t="-ms-"
else t=P.kw()?"-o-":"-webkit-"}$.ks=t
return t},
iF:function iF(a){this.a=a},
o6:function(a){return Math.sqrt(a)},
ib:function ib(){},
ik:function ik(){},
W:function W(){},
eo:function eo(){},
ep:function ep(){},
eq:function eq(){},
er:function er(){},
es:function es(){},
et:function et(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(){},
ey:function ey(){},
ez:function ez(){},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
eI:function eI(){},
eK:function eK(){},
a5:function a5(){},
ac:function ac(){},
eS:function eS(){},
f2:function f2(){},
fc:function fc(){},
fd:function fd(){},
fu:function fu(){},
fB:function fB(){},
fF:function fF(){},
fG:function fG(){},
fJ:function fJ(){},
fK:function fK(){},
bD:function bD(){},
hb:function hb(){},
w:function w(){},
hc:function hc(){},
bH:function bH(){},
bI:function bI(){},
hp:function hp(){},
hx:function hx(){},
dc:function dc(){},
dd:function dd(){},
dj:function dj(){},
dk:function dk(){},
du:function du(){},
dv:function dv(){},
dA:function dA(){},
dB:function dB(){},
dX:function dX(){},
dY:function dY(){},
aT:function aT(){},
fv:function fv(){},
fO:function fO(){},
fP:function fP(){},
h_:function h_(){},
dq:function dq(){},
dr:function dr(){}},W={
mG:function(a,b,c){var t,s
t=document.body
s=(t&&C.o).S(t,a,b,c)
s.toString
t=new H.d1(new W.R(s),new W.em(),[W.t])
return t.gab(t)},
mH:function(a){return"wheel"},
br:function(a){var t,s,r
t="element tag unavailable"
try{s=J.m8(a)
if(typeof s==="string")t=a.tagName}catch(r){H.N(r)}return t},
nn:function(a,b){return document.createElement(a)},
aQ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lf:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
a6:function(a,b,c,d,e){var t=c==null?null:W.ll(new W.hU(c))
t=new W.hT(0,a,b,t,!1,[e])
t.dP(a,b,c,!1,e)
return t},
lc:function(a){var t,s
t=document.createElement("a")
s=new W.iq(t,window.location)
s=new W.bM(s)
s.dQ(a)
return s},
nq:function(a,b,c,d){return!0},
nr:function(a,b,c,d){var t,s,r,q,p
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
lg:function(){var t=P.p
t=new W.ix(P.jw(C.t,t),P.aH(null,null,null,t),P.aH(null,null,null,t),P.aH(null,null,null,t),null)
t.dT(null,new H.bv(C.t,new W.iy(),[H.al(C.t,0),null]),["TEMPLATE"],null)
return t},
ll:function(a){var t=$.x
if(t===C.d)return a
return t.ex(a)},
l:function l(){},
c8:function c8(){},
dS:function dS(){},
dT:function dT(){},
dU:function dU(){},
av:function av(){},
aw:function aw(){},
ca:function ca(){},
cb:function cb(){},
ay:function ay(){},
e2:function e2(){},
e3:function e3(){},
e4:function e4(){},
e5:function e5(){},
aU:function aU(){},
e6:function e6(){},
a2:function a2(){},
aV:function aV(){},
e7:function e7(){},
e8:function e8(){},
e9:function e9(){},
eb:function eb(){},
ec:function ec(){},
ce:function ce(){},
bq:function bq(){},
ed:function ed(){},
cf:function cf(){},
ee:function ee(){},
cg:function cg(){},
ef:function ef(){},
ch:function ch(){},
ci:function ci(){},
cj:function cj(){},
eg:function eg(){},
eh:function eh(){},
a3:function a3(){},
em:function em(){},
h:function h(){},
d:function d(){},
eG:function eG(){},
eH:function eH(){},
eL:function eL(){},
eP:function eP(){},
cq:function cq(){},
eQ:function eQ(){},
bs:function bs(){},
cr:function cr(){},
eR:function eR(){},
bt:function bt(){},
b_:function b_(){},
b0:function b0(){},
b1:function b1(){},
aF:function aF(){},
f8:function f8(){},
f9:function f9(){},
bw:function bw(){},
fe:function fe(){},
fg:function fg(){},
bx:function bx(){},
fh:function fh(){},
P:function P(){},
R:function R(a){this.a=a},
t:function t(){},
cH:function cH(){},
bz:function bz(){},
ae:function ae(){},
fE:function fE(){},
fH:function fH(){},
cK:function cK(){},
cO:function cO(){},
fR:function fR(){},
aq:function aq(){},
fX:function fX(){},
fZ:function fZ(){},
af:function af(){},
h4:function h4(){},
h5:function h5(a){this.a=a},
cU:function cU(){},
hd:function hd(){},
he:function he(){},
bG:function bG(){},
hg:function hg(){},
hh:function hh(){},
hj:function hj(){},
aK:function aK(){},
hn:function hn(){},
ho:function ho(){},
d_:function d_(){},
aL:function aL(){},
hw:function hw(){},
hy:function hy(){},
b9:function b9(){},
hz:function hz(){},
hA:function hA(){},
aN:function aN(){},
bK:function bK(){},
hC:function hC(a){this.a=a},
jK:function jK(){},
hM:function hM(){},
hN:function hN(){},
i8:function i8(){},
dg:function dg(){},
it:function it(){},
iu:function iu(){},
hJ:function hJ(){},
hO:function hO(a){this.a=a},
hS:function hS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hP:function hP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hT:function hT(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
hU:function hU(a){this.a=a},
bM:function bM(a){this.a=a},
n:function n(){},
cJ:function cJ(a){this.a=a},
fs:function fs(a){this.a=a},
fr:function fr(a,b,c){this.a=a
this.b=b
this.c=c},
bT:function bT(){},
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
cI:function cI(){},
jB:function jB(){},
jJ:function jJ(){},
iq:function iq(a,b){this.a=a
this.b=b},
dC:function dC(a){this.a=a},
iz:function iz(a){this.a=a},
d3:function d3(){},
d4:function d4(){},
d5:function d5(){},
d6:function d6(){},
d7:function d7(){},
d8:function d8(){},
d9:function d9(){},
da:function da(){},
db:function db(){},
de:function de(){},
df:function df(){},
dh:function dh(){},
di:function di(){},
dl:function dl(){},
dm:function dm(){},
bU:function bU(){},
bV:function bV(){},
dn:function dn(){},
dp:function dp(){},
dt:function dt(){},
dw:function dw(){},
dx:function dx(){},
bW:function bW(){},
bX:function bX(){},
dy:function dy(){},
dz:function dz(){},
dD:function dD(){},
dE:function dE(){},
dF:function dF(){},
dG:function dG(){},
dH:function dH(){},
dI:function dI(){},
dJ:function dJ(){},
dK:function dK(){},
dL:function dL(){},
dM:function dM(){}},B={
o4:function(a){var t,s
t=document
s=W.aF
W.a6(t,"keydown",new B.j2(),!1,s)
W.a6(t,"keyup",new B.j3(),!1,s)
if(!$.o5)W.a6(t,"mousemove",new B.j4(),!1,W.P)
s=W.P
W.a6(t,"mousedown",new B.j5(),!1,s)
W.a6(t,"mouseup",new B.j6(),!1,s)},
mZ:function(a,b,c,d){var t,s,r,q,p,o,n
t=new Float32Array(3)
s=$.$get$iH()
r=$.$get$c2()
q=new T.D(new Float32Array(16))
q.I()
p=new Float32Array(3)
o=new Float32Array(3)
n=new Float32Array(3)
t=new B.fw(a,b,c,0,new T.e(t),-0.02,s,r,q,new T.e(p),new T.e(o),new T.e(n),new T.e(new Float32Array(3)),"camera:orbit",!1,!0)
t.dE(a,b,c,d)
return t},
j2:function j2(){},
j3:function j3(){},
j4:function j4(){},
j5:function j5(){},
j6:function j6(){},
fw:function fw(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
fx:function fx(a){this.a=a},
fy:function fy(a){this.a=a},
fz:function fz(){},
fA:function fA(a){this.a=a},
mB:function(d1,d2,d3,d4,d5,d6,d7,d8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0
t=-d6
s=-d7
r=new T.e(new Float32Array(3))
r.p(t,s,d8)
q=new T.e(new Float32Array(3))
q.p(d6,s,d8)
p=new T.e(new Float32Array(3))
p.p(d6,d7,d8)
o=new T.e(new Float32Array(3))
o.p(t,d7,d8)
n=-d8
m=new T.e(new Float32Array(3))
m.p(t,s,n)
l=new T.e(new Float32Array(3))
l.p(t,d7,n)
k=new T.e(new Float32Array(3))
k.p(d6,d7,n)
j=new T.e(new Float32Array(3))
j.p(d6,s,n)
i=new T.e(new Float32Array(3))
i.p(t,d7,n)
h=new T.e(new Float32Array(3))
h.p(t,d7,d8)
g=new T.e(new Float32Array(3))
g.p(d6,d7,d8)
f=new T.e(new Float32Array(3))
f.p(d6,d7,n)
e=new T.e(new Float32Array(3))
e.p(d6,s,d8)
d=new T.e(new Float32Array(3))
d.p(t,s,d8)
c=new T.e(new Float32Array(3))
c.p(t,s,n)
b=new T.e(new Float32Array(3))
b.p(d6,s,n)
a=new T.e(new Float32Array(3))
a.p(d6,s,n)
a0=new T.e(new Float32Array(3))
a0.p(d6,d7,n)
a1=new T.e(new Float32Array(3))
a1.p(d6,d7,d8)
a2=new T.e(new Float32Array(3))
a2.p(d6,s,d8)
a3=new T.e(new Float32Array(3))
a3.p(t,s,n)
a4=new T.e(new Float32Array(3))
a4.p(t,s,d8)
s=new T.e(new Float32Array(3))
s.p(t,d7,d8)
a5=new T.e(new Float32Array(3))
a5.p(t,d7,n)
t=new T.o(new Float32Array(2))
t.u(d3,d5)
n=new T.o(new Float32Array(2))
n.u(d2,d5)
a6=new T.o(new Float32Array(2))
a6.u(d2,d4)
a7=new T.o(new Float32Array(2))
a7.u(d3,d4)
a8=new T.o(new Float32Array(2))
a8.u(d2,d5)
a9=new T.o(new Float32Array(2))
a9.u(d2,d4)
b0=new T.o(new Float32Array(2))
b0.u(d3,d4)
b1=new T.o(new Float32Array(2))
b1.u(d3,d5)
b2=new T.o(new Float32Array(2))
b2.u(d3,d4)
b3=new T.o(new Float32Array(2))
b3.u(d3,d5)
b4=new T.o(new Float32Array(2))
b4.u(d2,d5)
b5=new T.o(new Float32Array(2))
b5.u(d2,d4)
b6=new T.o(new Float32Array(2))
b6.u(d2,d4)
b7=new T.o(new Float32Array(2))
b7.u(d3,d4)
b8=new T.o(new Float32Array(2))
b8.u(d3,d5)
b9=new T.o(new Float32Array(2))
b9.u(d2,d5)
c0=new T.o(new Float32Array(2))
c0.u(d2,d5)
c1=new T.o(new Float32Array(2))
c1.u(d2,d4)
c2=new T.o(new Float32Array(2))
c2.u(d3,d4)
c3=new T.o(new Float32Array(2))
c3.u(d3,d5)
c4=new T.o(new Float32Array(2))
c4.u(d3,d5)
c5=new T.o(new Float32Array(2))
c5.u(d2,d5)
c6=new T.o(new Float32Array(2))
c6.u(d2,d4)
c7=new T.o(new Float32Array(2))
c7.u(d3,d4)
c8=new G.aB(!1,[],[],[],P.L())
c8.V("aTexUV")
c8.V("aNormal")
c8.dq(6)
c8.am([r,q,p,o,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,s,a5])
c8.aC("aTexUV",[t,n,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7])
for(c9=0;t=$.$get$la(),c9<6;++c9){d0=t[c9]
c8.aD("aNormal",[d0,d0,d0,d0])}return c8},
mC:function(a1,a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
t=a3/2
s=[]
r=[]
q=[]
p=new T.e(new Float32Array(3))
p.p(0,t,0)
C.a.i(s,p)
p=new T.o(new Float32Array(2))
p.u(0,0)
C.a.i(r,p)
p=new T.e(new Float32Array(3))
p.p(0,1,0)
C.a.i(q,p)
p=-t
o=new T.e(new Float32Array(3))
o.p(0,p,0)
C.a.i(s,o)
o=new T.o(new Float32Array(2))
o.u(1,1)
C.a.i(r,o)
o=new T.e(new Float32Array(3))
o.p(0,-1,0)
C.a.i(q,o)
for(n=0;n<a4;++n){m=n/a4
o=m*3.141592653589793*2
l=Math.sin(o)
k=Math.cos(o)
o=new Float32Array(3)
o[0]=l*a1
o[1]=t
o[2]=k*a1
C.a.i(s,new T.e(o))
o=new Float32Array(2)
o[0]=m
o[1]=1
C.a.i(r,new T.o(o))
o=new Float32Array(3)
o[0]=0
o[1]=1
o[2]=0
C.a.i(q,new T.e(o))
o=new Float32Array(3)
o[0]=l*a2
o[1]=p
o[2]=k*a2
C.a.i(s,new T.e(o))
o=new Float32Array(2)
o[0]=m
o[1]=0
C.a.i(r,new T.o(o))
o=new Float32Array(3)
o[0]=0
o[1]=-1
o[2]=0
C.a.i(q,new T.e(o))}p=2*a4
o=2+p
H.b(s.length===o)
H.b(r.length===o)
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
f=new T.e(new Float32Array(3))
G.mY(i,h,g,new T.e(o),f)
C.a.i(q,f)
C.a.i(q,f)}H.b(s.length===2+4*a4)
p=[]
o=[]
e=new G.aB(!1,p,o,[],P.L())
e.V("aTexUV")
e.am(s)
e.aC("aTexUV",r)
e.V("aNormal")
e.aD("aNormal",q)
for(d=a4*2,n=0;n<a4;n=b){c=n*2+2
h=c+1
b=n+1
a=(b===a4?0:b)*2+2
a0=a+1
H.b(!0)
C.a.i(p,new G.a4(0,c,a))
H.b(!0)
C.a.i(p,new G.a4(1,a0,h))
H.b(!0)
C.a.i(o,new G.aY(d+a,d+c,d+h,d+a0))}return e},
mO:function(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
t=[]
s=[]
C.a.O(t,$.$get$kD())
C.a.O(s,$.$get$kE())
for(r=0;r<a3;++r,t=q){q=[]
for(p=t.length,o=0;o<t.length;t.length===p||(0,H.C)(t),++o){n=t[o]
m=J.j(n)
l=C.a.h(s,m.gX(n))
k=new T.e(new Float32Array(3))
k.w(l)
k.i(0,C.a.h(s,m.gR(n)))
k.a8(0,0.5)
k.D(0)
l=C.a.h(s,m.gR(n))
j=new T.e(new Float32Array(3))
j.w(l)
j.i(0,C.a.h(s,m.ga3(n)))
j.a8(0,0.5)
j.D(0)
l=C.a.h(s,m.ga3(n))
i=new T.e(new Float32Array(3))
i.w(l)
i.i(0,C.a.h(s,m.gX(n)))
i.a8(0,0.5)
i.D(0)
h=s.length
C.a.i(s,k)
g=s.length
C.a.i(s,j)
f=s.length
C.a.i(s,i)
C.a.i(q,new G.a4(m.gX(n),h,f))
C.a.i(q,new G.a4(m.gR(n),g,h))
C.a.i(q,new G.a4(m.ga3(n),f,g))
C.a.i(q,new G.a4(h,g,f))}}e=new G.aB(!1,[],[],[],P.L())
e.V("aTexUV")
e.V("aNormal")
for(p=t.length,o=0;o<t.length;t.length===p||(0,H.C)(t),++o){n=t[o]
m=J.j(n)
d=C.a.h(s,m.gX(n))
H.b(Math.sqrt(d.gT())<1.01&&Math.sqrt(d.gT())>0.99)
c=C.a.h(s,m.gR(n))
H.b(Math.sqrt(c.gT())<1.01&&Math.sqrt(c.gT())>0.99)
b=C.a.h(s,m.ga3(n))
H.b(Math.sqrt(b.gT())<1.01&&Math.sqrt(b.gT())>0.99)
m=d.a
l=Math.atan2(m[2],m[0])
m=Math.acos(m[1])
a=new Float32Array(2)
a[0]=0.5*(1+l*0.3183098861837907)
a[1]=m*0.3183098861837907
m=c.a
l=Math.atan2(m[2],m[0])
m=Math.acos(m[1])
a0=new Float32Array(2)
a0[0]=0.5*(1+l*0.3183098861837907)
a0[1]=m*0.3183098861837907
m=b.a
l=Math.atan2(m[2],m[0])
m=Math.acos(m[1])
a1=new Float32Array(2)
a1[0]=0.5*(1+l*0.3183098861837907)
a1[1]=m*0.3183098861837907
e.aD("aNormal",[d,c,b])
m=new T.e(new Float32Array(3))
m.w(d)
m.a8(0,a4)
l=new T.e(new Float32Array(3))
l.w(c)
l.a8(0,a4)
a2=new T.e(new Float32Array(3))
a2.w(b)
a2.a8(0,a4)
e.dr([m,l,a2])
e.aC("aTexUV",[new T.o(a),new T.o(a0),new T.o(a1)])}return e},
na:function(a,b,c,d,e,f,a0,a1,a2,a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=a1+1
s=a0+1
r=B.n_(new B.fW(e,d,f,c),0,6.283185307179586,s,!1,0.001)
H.b(r.length===2*s)
q=B.ng(r,a1,a2,!1)
H.b(q.length===s)
H.b(q[0].length===2*t)
p=[]
o=new G.aB(!1,[],[],p,P.L())
for(n=q.length,m=0;m<q.length;q.length===n||(0,H.C)(q),++m){l=q[m]
for(k=0;k<l.length;k+=2){j=l[k]
j.toString
i=new T.e(new Float32Array(3))
i.w(j)
C.a.i(p,i)}}H.b(p.length===t*s)
o.dz(t,s,!1)
o.dA(t,s)
n=o.e
H.b(n.h(0,"aTexUV").length===p.length)
o.V("aNormal")
for(j=q.length,m=0;m<q.length;q.length===j||(0,H.C)(q),++m){l=q[m]
for(k=0;k<l.length;k+=2){i=l[k+1]
h=n.h(0,"aNormal")
i.toString
g=new T.e(new Float32Array(3))
g.w(i);(h&&C.a).i(h,g)}}H.b(n.h(0,"aNormal").length===p.length)
return o},
ng:function(a1,a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
t=[]
s=new Float32Array(3)
r=new T.e(s)
q=new Float32Array(3)
p=new T.e(q)
o=new Float32Array(3)
n=new T.e(o)
for(m=a2+1,l=0;l<a1.length;l+=2){k=a1[l]
j=a1[l+1]
i=[]
C.a.i(t,i)
h=j.a
g=h[2]
if(Math.abs(g)>0.7071067811865476){f=h[1]
e=f*f+g*g
d=1/Math.sqrt(e)
q[0]=0
q[1]=-h[2]*d
q[2]=h[1]*d
o[0]=e*d
o[1]=-h[0]*(h[1]*d)
o[2]=h[0]*(-h[2]*d)}else{g=h[0]
f=h[1]
e=g*g+f*f
d=1/Math.sqrt(e)
q[0]=-h[1]*d
q[1]=h[0]*d
q[2]=0
o[0]=-h[2]*(h[0]*d)
o[1]=h[2]*(-h[1]*d)
o[2]=e*d}p.D(0)
n.D(0)
for(c=0;c<m;++c){b=c/a2*2*3.141592653589793
a=a3*Math.cos(b)
a0=a3*Math.sin(b)
r.w(k)
r.aM(p,a)
r.aM(n,a0)
h=new T.e(new Float32Array(3))
h.w(r)
C.a.i(i,h)
s[2]=0
s[1]=0
s[0]=0
r.aM(p,a)
r.aM(n,a0)
r.D(0)
h=new T.e(new Float32Array(3))
h.w(r)
C.a.i(i,h)}}return t},
n_:function(a,b,c,d,e,f){var t,s,r,q,p,o,n
H.b(d>=2)
t=[]
s=new T.e(new Float32Array(3))
r=new T.e(new Float32Array(3))
for(q=(c-b)/(d-1),p=0;p<d;++p){o=q*p+b
a.$2(o,s)
a.$2(o+f,r)
r.aB(0,s)
n=new T.e(new Float32Array(3))
n.w(s)
C.a.i(t,n)
n=new T.e(new Float32Array(3))
n.w(r)
C.a.i(t,n)}return t},
fW:function fW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},G={
ni:function(a){var t,s,r
t=H.B(a.split("\n"),[P.p])
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.f(t[s])}return C.a.ag(t,"\n")},
l9:function(a,b,c){var t,s,r,q
t=J.j(a)
s=t.cl(a,b)
t.bz(a,s,c)
t.cg(a,s)
r=t.bv(a,s,35713)
if(r!=null&&!r){q=t.bu(a,s)
P.aa("E:Compilation failed:")
P.aa("E:"+G.ni(c))
P.aa("E:Failure:")
P.aa(C.i.a9("E:",q))
throw H.c(q)}return s},
H:function(a,b,c){return new G.a4(a,b,c)},
mY:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
d.w(b)
d.aB(0,a)
e.w(c)
e.aB(0,a)
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
l=Math.sqrt(e.gT())
if(l===0)return!1
e.a8(0,-1/l)
return!0},
jE:function(a,b,c){return new G.cX(a,b,c)},
jA:function(a){var t=new G.cA(P.L(),a,!1,!0)
t.dD(a)
return t},
kB:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.jg(a[s])
b[t+1]=J.jh(a[s])
b[t+2]=J.k5(a[s])}return b},
mK:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.jg(a[s])
b[t+1]=J.jh(a[s])}return b},
mL:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.jg(a[s])
b[t+1]=J.jh(a[s])
b[t+2]=J.k5(a[s])
b[t+3]=J.m9(a[s])}return b},
mJ:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.bl(a[s],0)
b[t+1]=J.bl(a[s],1)
b[t+2]=J.bl(a[s],2)
b[t+3]=J.bl(a[s],3)}return b},
kM:function(a,b,c,d){return new G.ff(b,J.lX(b.a),c,P.L(),d,null,0,-1,null,null,P.L(),"meshdata:"+a,!1,!0)},
np:function(a,b){var t,s,r,q,p,o,n,m,l,k
for(t=a.e,s=t.gH(t),s=s.gC(s),r=b.x,q=[[P.i,P.z]],p=[P.X],o=[T.as],n=[T.e],m=[T.o];s.q();){l=s.gt(s)
if(!r.K(0,l)){l="Dropping unnecessary attribute: "+H.f(l)
if($.lt>0)H.j0("I: "+l)
continue}k=t.h(0,l)
switch($.$get$S().h(0,l).a){case"vec2":b.al(l,G.mK(H.dQ(k,"$isi",m,"$asi"),null),2)
break
case"vec3":b.al(l,G.kB(H.dQ(k,"$isi",n,"$asi"),null),3)
break
case"vec4":b.al(l,G.mL(H.dQ(k,"$isi",o,"$asi"),null),4)
break
case"float":b.al(l,new Float32Array(H.iC(H.dQ(k,"$isi",p,"$asi"))),1)
break
case"uvec4":b.al(l,G.mJ(H.dQ(k,"$isi",q,"$asi"),null),4)
break
default:if(H.aj(!1))H.at("unknown type for "+H.f(l)+" ["+J.m7(k[0]).l(0)+"] ["+new H.ar(H.iM(k),null).l(0)+"] "+H.f(k))}}},
cp:function(a,b,c){var t,s,r,q,p
t=G.kM(a,b.d,4,b.e.x)
t.am(G.kB(c.d,null))
s=c.dw()
r=t.d
t.y=J.je(r.a)
H.b(t.ch!=null)
q=t.ch.length
if(q<768){t.sb3(new Uint8Array(H.iC(s)))
t.Q=5121}else if(q<196608){t.sb3(new Uint16Array(H.iC(s)))
t.Q=5123}else{t.sb3(new Uint32Array(H.iC(s)))
t.Q=5125}J.dR(r.a,t.e)
s=t.y
q=t.cx
p=J.r(q)
H.b(!!p.$isl4||!!p.$isl5||!!p.$isl6)
J.jc(r.a,34963,s)
J.k3(r.a,34963,q,35048)
G.np(c,t)
return t},
kS:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.aH(null,null,null,P.p)
s=c.b
r=d.b
q=c.f
p=J.lV(b.a)
o=G.l9(b.a,35633,s)
J.k2(b.a,p,o)
n=G.l9(b.a,35632,r)
J.k2(b.a,p,n)
if(q.length>0)J.mm(b.a,p,q,35980)
J.me(b.a,p)
if(!J.md(b.a,p,35714))H.M(J.mc(b.a,p))
t=new G.fN(b,c,d,p,P.jw(c.c,null),P.L(),P.L(),t,null,a,!1,!0)
t.dG(a,b,c,d)
return t},
fV:function(a){return new G.fU(a,null,[],[],[],[],0,P.L())},
eU:function(a,b,c,d,e){var t=new G.eT(c,b,J.lW(a.a),e,a,new G.hi(!1,!1,!1,!0,1,9729,9729))
t.dB(a,b,c,d,e)
return t},
fi:function fi(){},
d0:function d0(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dZ:function dZ(){},
e0:function e0(a,b){this.a=a
this.b=b},
eM:function eM(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
a4:function a4(a,b,c){this.a=a
this.b=b
this.c=c},
aY:function aY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aB:function aB(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cY:function cY(a,b,c){this.a=a
this.b=b
this.c=c},
cX:function cX(a,b,c){this.a=a
this.b=b
this.c=c},
cA:function cA(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
ff:function ff(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
fC:function fC(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
ei:function ei(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fN:function fN(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
y:function y(a,b,c){this.a=a
this.b=b
this.c=c},
fU:function fU(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fY:function fY(){},
hi:function hi(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bJ:function bJ(){},
eT:function eT(a,b,c,d,e,f){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f}},R={
nh:function(a,b,c){var t,s,r,q
t="stars_"+b
s=b*3
r=new Float32Array(s)
for(q=0;q<s;++q)r[q]=($.$get$l8().f5()-0.5)*c
s=G.kM(t,a.d,0,a.e.x)
s.am(r)
return s},
cN:function cN(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
_.c=m},
h2:function h2(){},
h3:function h3(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},A={
ls:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=b.dx
t.w(c)
s=b.d
t.cC(0,s)
r=b.cx
H.f(b)
q=C.a.gaP(e)
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
p.eE(new T.a0(o))
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
C.a.i(e,b.ch)
a.dv(r,e,d)
e.pop()
for(s=b.cy,r=s.length,l=0;l<s.length;s.length===r||(0,H.C)(s),++l)A.ls(a,s[l],t,d,e)},
ap:function ap(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
bC:function bC(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.a=d
_.b=e
_.c=f},
fM:function fM(){},
dO:function(a){var t,s
t=C.Y.eT(a,0,new A.iN())
s=536870911&t+(C.b.d0(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
iN:function iN(){}},D={
jy:function(a){var t,s,r
t=new P.J(0,$.x,null,[null])
s=document.createElement("img")
r=new W.hP(s,"load",!1,[W.h])
r.gbj(r).aQ(new D.f7(new P.hE(t,[null]),s))
s.src=a
return t},
f7:function f7(a,b){this.a=a
this.b=b}},T={
G:function(a,b,c){var t=new T.e(new Float32Array(3))
t.p(a,b,c)
return t},
a0:function a0(a){this.a=a},
D:function D(a){this.a=a},
o:function o(a){this.a=a},
e:function e(a){this.a=a},
as:function as(a){this.a=a}},V={
nZ:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
t={}
s=document
r=new R.h3(0,0,null,null,null,null)
r.dJ(C.r.d3(s,"stats"),"blue","gray")
q=C.r.f7(s,"#webgl-canvas")
p=new G.e0(null,q)
o=(q&&C.w).bq(q,"webgl2",P.aG(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
p.a=o
if(o==null)H.M(P.cl('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
n="ChronosGL Config: "+H.f(J.ma(o))
if($.lt>0)P.aa("I: "+n)
J.lT(o,0,0,0,1)
J.c7(o,2929)
J.c7(o,2884)
m=B.mZ(25,10,0,q)
o=new T.D(new Float32Array(16))
o.I()
n=new T.D(new Float32Array(16))
n.I()
l=new G.fC(m,50,1,0.1,1000,o,n,new T.D(new Float32Array(16)),P.L(),"perspective",!1,!0)
l.bJ()
o=H.B([],[A.bC])
k=new R.cN(q,l,null,p,o,17664,0,0,0,0,"main",!1,!0)
k.dF("main",p,null)
k.cF(null)
W.a6(window,"resize",k.gfb(),!1,W.h)
n=G.kS("textured",p,$.$get$lI(),$.$get$lH())
j=[]
H.b(!0)
C.a.i(o,new A.bC(n,[l],j,"objects",!1,!0))
i=G.jA("wood")
i.J("uColor",$.$get$kn())
h=G.jA("gradient")
h.J("uColor",$.$get$kp())
g=G.jA("trans")
g.J("uColor",$.$get$ko())
g.d.j(0,"cBlendEquation",$.$get$kg())
f=G.cp("icosahedron-3",n,B.mO(3,1,!0))
e=new Float32Array(9)
d=new T.D(new Float32Array(16))
d.I()
c=new T.D(new Float32Array(16))
c.I()
b=new Float32Array(3)
a=new Float32Array(3)
a0=new Float32Array(3)
a1=new A.ap(i,f,[],new T.a0(e),d,c,new T.e(b),new T.e(a),new T.e(a0),new T.e(new Float32Array(3)),"sphere",!1,!0)
a1.aa(0,0,0)
H.b(!0)
C.a.i(j,a1)
f=G.cp("cube",n,B.mB(!0,1,0,1,0,1,1,1))
e=new Float32Array(9)
d=new T.D(new Float32Array(16))
d.I()
c=new T.D(new Float32Array(16))
c.I()
b=new Float32Array(3)
a=new Float32Array(3)
a0=new Float32Array(3)
a2=new A.ap(h,f,[],new T.a0(e),d,c,new T.e(b),new T.e(a),new T.e(a0),new T.e(new Float32Array(3)),"cube",!1,!0)
a2.aa(-5,0,-5)
H.b(!0)
C.a.i(j,a2)
f=G.cp("cylinder-32",n,B.mC(3,6,2,32,!0))
e=new Float32Array(9)
d=new T.D(new Float32Array(16))
d.I()
c=new T.D(new Float32Array(16))
c.I()
b=new Float32Array(3)
a=new Float32Array(3)
a0=new Float32Array(3)
a3=new A.ap(g,f,[],new T.a0(e),d,c,new T.e(b),new T.e(a),new T.e(a0),new T.e(new Float32Array(3)),"cylinder",!1,!0)
a3.aa(5,0,-5)
H.b(!0)
C.a.i(j,a3)
f=new T.e(new Float32Array(3))
f.p(-2,-2,0)
e=new T.e(new Float32Array(3))
e.p(2,-2,0)
d=new T.e(new Float32Array(3))
d.p(2,2,0)
c=new T.e(new Float32Array(3))
c.p(-2,2,0)
b=new T.o(new Float32Array(2))
b.u(0,0)
a=new T.o(new Float32Array(2))
a.u(1,0)
a0=new T.o(new Float32Array(2))
a0.u(1,1)
a4=new T.o(new Float32Array(2))
a4.u(0,1)
a5=new T.e(new Float32Array(3))
a5.p(0,0,1)
a6=new G.aB(!1,[],[],[],P.L())
a6.V("aTexUV")
a6.ds([f,e,d,c])
a6.aC("aTexUV",[b,a,a0,a4])
a6.V("aNormal")
a6.aD("aNormal",[a5,a5,a5,a5])
f=G.cp("quad",n,a6)
e=new Float32Array(9)
d=new T.D(new Float32Array(16))
d.I()
c=new T.D(new Float32Array(16))
c.I()
b=new Float32Array(3)
a=new Float32Array(3)
a0=new Float32Array(3)
a7=new A.ap(g,f,[],new T.a0(e),d,c,new T.e(b),new T.e(a),new T.e(a0),new T.e(new Float32Array(3)),"quad",!1,!0)
a7.aa(-5,0,5)
H.b(!0)
C.a.i(j,a7)
n=G.cp("torusknot",n,B.na(!0,!0,1,2,3,1,128,16,0.4,!1))
f=new Float32Array(9)
e=new T.D(new Float32Array(16))
e.I()
d=new T.D(new Float32Array(16))
d.I()
c=new Float32Array(3)
b=new Float32Array(3)
a=new Float32Array(3)
a8=new A.ap(h,n,[],new T.a0(f),e,d,new T.e(c),new T.e(b),new T.e(a),new T.e(new Float32Array(3)),"torus",!1,!0)
a8.aa(5,0,5)
H.b(!0)
C.a.i(j,a8)
n=G.kS("stars",p,$.$get$lC(),$.$get$lB())
j=[]
f=$.$get$ke()
a9=new G.cA(P.L(),"stars",!1,!0)
a9.J("cDepthTest",!0)
a9.J("cDepthWrite",!1)
a9.J("cBlendEquation",f)
a9.J("cStencilFunc",$.$get$jD())
b0=s.createElement("canvas")
b0.width=64
b0.height=64
b1=C.w.d2(b0,"2d")
b2=(b1&&C.p).ck(b1,32,32,1,32,32,22);(b2&&C.m).aL(b2,0,"gray")
C.m.aL(b2,1,"black")
b1.fillStyle=b2
C.p.eS(b1,0,0,64,64)
b2=C.p.ck(b1,32,32,1,32,32,6);(b2&&C.m).aL(b2,0,"white")
C.m.aL(b2,1,"gray")
b1.globalAlpha=0.9
b1.fillStyle=b2
b1.arc(32,32,4,0,6.283185307179586,!1)
b1.fill("nonzero")
a9.J("uTexture",G.eU(n.d,"Utils::Particles",b0,null,3553))
a9.J("uPointSize",1000)
b3=R.nh(n,2000,100)
s=new Float32Array(9)
f=new T.D(new Float32Array(16))
f.I()
e=new T.D(new Float32Array(16))
e.I()
d=new Float32Array(3)
c=new Float32Array(3)
b=new Float32Array(3)
a=new Float32Array(3)
H.b(!0)
C.a.i(j,new A.ap(a9,b3,[],new T.a0(s),f,e,new T.e(d),new T.e(c),new T.e(b),new T.e(a),b3.a,!1,!0))
H.b(!0)
C.a.i(o,new A.bC(n,[l],j,"stars",!1,!0))
t.a=0
P.mN([D.jy("../gradient.jpg"),D.jy("../transparent.png"),D.jy("../wood.jpg")],null,!1).aQ(new V.iZ(p,h,g,i,new V.iY(t,m,k,r)))},
iY:function iY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iZ:function iZ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e}}
var v=[C,H,J,P,W,B,G,R,A,D,T,V]
setFunctionNamesIfNecessary(v)
var $={}
H.jr.prototype={}
J.a.prototype={
B:function(a,b){return a===b},
gA:function(a){return H.aI(a)},
l:function(a){return"Instance of '"+H.bB(a)+"'"},
gE:function(a){return new H.ar(H.iM(a),null)}}
J.eZ.prototype={
l:function(a){return String(a)},
gA:function(a){return a?519018:218159},
gE:function(a){return C.as},
$isak:1}
J.f_.prototype={
B:function(a,b){return null==b},
l:function(a){return"null"},
gA:function(a){return 0},
gE:function(a){return C.am},
$isO:1}
J.bu.prototype={
gA:function(a){return 0},
gE:function(a){return C.al},
l:function(a){return String(a)},
$iskI:1}
J.fD.prototype={}
J.aM.prototype={}
J.aE.prototype={
l:function(a){var t=a[$.$get$kr()]
return t==null?this.dl(a):J.bo(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isjp:1}
J.aC.prototype={
i:function(a,b){if(!!a.fixed$length)H.M(P.v("add"))
a.push(b)},
O:function(a,b){var t,s,r,q,p
t=a.length
if(!!a.fixed$length)H.M(P.v("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.C)(b),++r,t=p){q=b[r]
p=t+1
H.b(t===a.length||H.M(P.am(a)))
a.push(q)}},
cB:function(a,b){return new H.bv(a,b,[H.al(a,0),null])},
ag:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.f(a[s])
return t.join(b)},
v:function(a,b){return this.h(a,b)},
gbj:function(a){if(a.length>0)return a[0]
throw H.c(H.cs())},
gaP:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.c(H.cs())},
by:function(a,b,c,d,e){var t,s,r
if(!!a.immutable$list)H.M(P.v("setRange"))
P.kR(b,c,a.length,null,null,null)
t=C.b.ac(c,b)
if(t===0)return
if(e<0)H.M(P.aJ(e,0,null,"skipCount",null))
s=J.U(d)
if(C.b.a0(e+t,s.gk(d)))throw H.c(H.mW())
if(C.b.a7(e,b))for(r=t-1;r>=0;--r)a[b+r]=s.h(d,e+r)
else for(r=0;r<t;++r)a[b+r]=s.h(d,e+r)},
c6:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.c(P.am(a))}return!1},
dg:function(a,b){if(!!a.immutable$list)H.M(P.v("sort"))
H.nd(a,P.nL())},
aU:function(a){return this.dg(a,null)},
F:function(a,b){var t
for(t=0;t<a.length;++t)if(J.E(a[t],b))return!0
return!1},
l:function(a){return P.eY(a,"[","]")},
gC:function(a){return new J.dW(a,a.length,0,null,[H.al(a,0)])},
gA:function(a){return H.aI(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.M(P.v("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.jk(b,"newLength",null))
if(b<0)throw H.c(P.aJ(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.bi(a,b))
if(b>=a.length||b<0)throw H.c(H.bi(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.M(P.v("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.bi(a,b))
if(b>=a.length||b<0)throw H.c(H.bi(a,b))
a[b]=c},
$isq:1,
$asq:function(){},
$isk:1,
$isi:1}
J.jq.prototype={}
J.dW.prototype={
gt:function(a){return this.d},
q:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.c(H.C(t))
r=this.c
if(r>=s){this.sbK(null)
return!1}this.sbK(t[r]);++this.c
return!0},
sbK:function(a){this.d=a}}
J.b2.prototype={
Z:function(a,b){var t
if(typeof b!=="number")throw H.c(H.T(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaN(b)
if(this.gaN(a)===t)return 0
if(this.gaN(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaN:function(a){return a===0?1/a<0:a<0},
eA:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.c(P.v(""+a+".ceil()"))},
ah:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.v(""+a+".round()"))},
eB:function(a,b,c){if(this.Z(b,c)>0)throw H.c(H.T(b))
if(this.Z(a,b)<0)return b
if(this.Z(a,c)>0)return c
return a},
fj:function(a,b){var t
if(b>20)throw H.c(P.aJ(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gaN(a))return"-"+t
return t},
l:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gA:function(a){return a&0x1FFFFFFF},
a9:function(a,b){if(typeof b!=="number")throw H.c(H.T(b))
return a+b},
ac:function(a,b){if(typeof b!=="number")throw H.c(H.T(b))
return a-b},
d1:function(a,b){if(typeof b!=="number")throw H.c(H.T(b))
return a/b},
L:function(a,b){if(typeof b!=="number")throw H.c(H.T(b))
return a*b},
aW:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.c2(a,b)},
N:function(a,b){return(a|0)===a?a/b|0:this.c2(a,b)},
c2:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.c(P.v("Result of truncating division is "+H.f(t)+": "+H.f(a)+" ~/ "+b))},
b8:function(a,b){var t
if(a>0)t=this.ek(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
ek:function(a,b){return b>31?0:a>>>b},
d0:function(a,b){if(typeof b!=="number")throw H.c(H.T(b))
return(a&b)>>>0},
dn:function(a,b){if(typeof b!=="number")throw H.c(H.T(b))
return(a^b)>>>0},
a7:function(a,b){if(typeof b!=="number")throw H.c(H.T(b))
return a<b},
a0:function(a,b){if(typeof b!=="number")throw H.c(H.T(b))
return a>b},
bp:function(a,b){if(typeof b!=="number")throw H.c(H.T(b))
return a>=b},
gE:function(a){return C.av},
$isI:1,
$asI:function(){return[P.a9]},
$isX:1,
$isa9:1}
J.cv.prototype={
gE:function(a){return C.au},
$isz:1}
J.cu.prototype={
gE:function(a){return C.at}}
J.aD.prototype={
aZ:function(a,b){if(b>=a.length)throw H.c(H.bi(a,b))
return a.charCodeAt(b)},
a9:function(a,b){if(typeof b!=="string")throw H.c(P.jk(b,null,null))
return a+b},
dh:function(a,b,c){var t
if(c>a.length)throw H.c(P.aJ(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bA:function(a,b){return this.dh(a,b,0)},
bC:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.fI(b,null,null))
if(b>c)throw H.c(P.fI(b,null,null))
if(c>a.length)throw H.c(P.fI(c,null,null))
return a.substring(b,c)},
di:function(a,b){return this.bC(a,b,null)},
fi:function(a){return a.toLowerCase()},
eC:function(a,b,c){if(c>a.length)throw H.c(P.aJ(c,0,a.length,null,null))
return H.o7(a,b,c)},
Z:function(a,b){var t
if(typeof b!=="string")throw H.c(H.T(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
l:function(a){return a},
gA:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gE:function(a){return C.an},
gk:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.c(H.bi(a,b))
return a[b]},
$isq:1,
$asq:function(){},
$isI:1,
$asI:function(){return[P.p]},
$isp:1}
H.k.prototype={}
H.b3.prototype={
gC:function(a){return new H.cx(this,this.gk(this),0,null,[H.Y(this,"b3",0)])},
aS:function(a,b){return this.dk(0,b)},
fh:function(a,b){var t,s
t=H.B([],[H.Y(this,"b3",0)])
C.a.sk(t,this.gk(this))
for(s=0;C.b.a7(s,this.gk(this));++s)t[s]=this.v(0,s)
return t},
fg:function(a){return this.fh(a,!0)}}
H.cx.prototype={
gt:function(a){return this.d},
q:function(){var t,s,r,q
t=this.a
s=J.U(t)
r=s.gk(t)
q=this.b
if(q==null?r!=null:q!==r)throw H.c(P.am(t))
if(C.b.bp(this.c,r)){this.sap(null)
return!1}this.sap(s.v(t,this.c));++this.c
return!0},
sap:function(a){this.d=a}}
H.cz.prototype={
gC:function(a){return new H.fb(null,J.aR(this.a),this.b,this.$ti)},
gk:function(a){return J.bn(this.a)},
$asV:function(a,b){return[b]}}
H.el.prototype={$isk:1,
$ask:function(a,b){return[b]}}
H.fb.prototype={
q:function(){var t=this.b
if(t.q()){this.sap(this.c.$1(t.gt(t)))
return!0}this.sap(null)
return!1},
gt:function(a){return this.a},
sap:function(a){this.a=a},
$asct:function(a,b){return[b]}}
H.bv.prototype={
gk:function(a){return J.bn(this.a)},
v:function(a,b){return this.b.$1(J.m2(this.a,b))},
$ask:function(a,b){return[b]},
$asb3:function(a,b){return[b]},
$asV:function(a,b){return[b]}}
H.d1.prototype={
gC:function(a){return new H.hB(J.aR(this.a),this.b,this.$ti)}}
H.hB.prototype={
q:function(){var t,s
for(t=this.a,s=this.b;t.q();)if(s.$1(t.gt(t)))return!0
return!1},
gt:function(a){var t=this.a
return t.gt(t)}}
H.aZ.prototype={}
H.j7.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.j8.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.ii.prototype={
sf1:function(a){this.z=a},
sf3:function(a){this.ch=a}}
H.bb.prototype={
dR:function(){var t,s
t=this.e
s=t.a
this.c.i(0,s)
this.dW(s,t)},
c5:function(a,b){if(!this.f.B(0,a))return
if(this.Q.i(0,b)&&!this.y)this.y=!0
this.bf()},
fa:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.ay(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.bX();++r.d}this.y=!1}this.bf()},
ep:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.r(a),s=0;r=this.ch,s<r.length;s+=2)if(t.B(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).i(r,a)
t=this.ch;(t&&C.a).i(t,b)},
f9:function(a){var t,s,r
if(this.ch==null)return
for(t=J.r(a),s=0;r=this.ch,s<r.length;s+=2)if(t.B(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.M(P.v("removeRange"))
P.kR(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
dd:function(a,b){if(!this.r.B(0,a))return
this.db=b},
eW:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.M(0,c)
return}H.b(b===1)
t=this.cx
if(t==null){t=P.jx(null,null)
this.cx=t}t.a1(0,new H.ia(a,c))},
eV:function(a,b){var t
if(!this.r.B(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.aO()
return}H.b(b===1)
t=this.cx
if(t==null){t=P.jx(null,null)
this.cx=t}t.a1(0,this.gf2())},
eX:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.aa(a)
if(b!=null)P.aa(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.bo(a)
s[1]=b==null?null:b.l(0)
for(r=new P.bN(t,t.r,null,null,[null]),r.c=t.e;r.q();)r.d.M(0,s)},
at:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.N(o)
p=H.a8(o)
this.eX(q,p)
if(this.db){this.aO()
if(this===u.globalState.e)throw o}}finally{this.cy=H.nH(r)
u.globalState.d=H.jW(t,"$isbb")
if(t!=null)$=t.gf0()
if(this.cx!=null)for(;n=this.cx,!n.gax(n);)this.cx.cE().$0()}return s},
cA:function(a){return this.b.h(0,a)},
dW:function(a,b){var t=this.b
if(t.K(0,a))throw H.c(P.cl("Registry: ports must be registered only once."))
t.j(0,a,b)},
bf:function(){var t=this.b
if(t.gk(t)-this.c.a>0||this.y||!this.x)u.globalState.z.j(0,this.a,this)
else this.aO()},
aO:function(){var t,s,r
t=this.cx
if(t!=null)t.a4(0)
for(t=this.b,s=t.gcX(t),s=s.gC(s);s.q();)s.gt(s).dZ()
t.a4(0)
this.c.a4(0)
u.globalState.z.ay(0,this.a)
this.dx.a4(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].M(0,t[r+1])
this.ch=null}},
gf0:function(){return this.d},
geD:function(){return this.e}}
H.ia.prototype={
$0:function(){this.a.M(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.hQ.prototype={
eK:function(){var t=this.a
if(t.b===t.c)return
return t.cE()},
cH:function(){var t,s,r
t=this.eK()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.K(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gax(s)}else s=!1
else s=!1
else s=!1
if(s)H.M(P.cl("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gax(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aG(["command","close"])
r=new H.a7(!0,P.bc(null,P.z)).P(r)
s.toString
self.postMessage(r)}return!1}t.f6()
return!0},
c0:function(){if(self.window!=null)new H.hR(this).$0()
else for(;this.cH(););},
az:function(){var t,s,r,q,p
if(!u.globalState.x)this.c0()
else try{this.c0()}catch(r){t=H.N(r)
s=H.a8(r)
q=u.globalState.Q
p=P.aG(["command","error","msg",H.f(t)+"\n"+H.f(s)])
p=new H.a7(!0,P.bc(null,P.z)).P(p)
q.toString
self.postMessage(p)}}}
H.hR.prototype={
$0:function(){if(!this.a.cH())return
P.nf(C.y,this)},
$S:function(){return{func:1,v:true}}}
H.aP.prototype={
f6:function(){var t=this.a
if(t.y){C.a.i(t.z,this)
return}t.at(this.b)}}
H.ih.prototype={}
H.eW.prototype={
$0:function(){H.mS(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.eX.prototype={
$0:function(){var t,s
t=this.a
t.x=!0
if(!this.b)this.c.$1(this.d)
else{s=this.c
if(H.bj(s,{func:1,args:[P.O,P.O]}))s.$2(this.e,this.d)
else if(H.bj(s,{func:1,args:[P.O]}))s.$1(this.e)
else s.$0()}t.bf()},
$S:function(){return{func:1,v:true}}}
H.hK.prototype={}
H.bd.prototype={
M:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.nu(b)
if(t.geD()===s){s=J.U(r)
switch(s.h(r,0)){case"pause":t.c5(s.h(r,1),s.h(r,2))
break
case"resume":t.fa(s.h(r,1))
break
case"add-ondone":t.ep(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.f9(s.h(r,1))
break
case"set-errors-fatal":t.dd(s.h(r,1),s.h(r,2))
break
case"ping":t.eW(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.eV(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.i(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.ay(0,s)
break}return}u.globalState.f.a.a1(0,new H.aP(t,new H.ij(this,r),"receive"))},
B:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bd){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gA:function(a){return this.b.a}}
H.ij.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dU(0,this.b)},
$S:function(){return{func:1}}}
H.bY.prototype={
M:function(a,b){var t,s,r
t=P.aG(["command","message","port",this,"msg",b])
s=new H.a7(!0,P.bc(null,P.z)).P(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
B:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bY){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gA:function(a){return C.b.dn((this.b<<16^this.a<<8)>>>0,this.c)}}
H.cM.prototype={
dZ:function(){this.c=!0
this.b=null},
dU:function(a,b){if(this.c)return
this.b.$1(b)},
$isn7:1}
H.hk.prototype={
dK:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.a1(0,new H.aP(s,new H.hl(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){H.iJ()
this.c=self.setTimeout(H.bh(new H.hm(this,b),0),a)}else{H.b(a>0)
throw H.c(P.v("Timer greater than 0."))}}}
H.hl.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.hm.prototype={
$0:function(){var t=this.a
t.c=null
H.iX()
t.d=1
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.ax.prototype={
gA:function(a){var t=this.a
t=C.b.b8(t,0)^C.b.N(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
B:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.ax){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.a7.prototype={
P:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.j(0,a,t.gk(t))
t=J.r(a)
if(!!t.$isby)return["buffer",a]
if(!!t.$isb6)return["typed",a]
if(!!t.$isq)return this.d8(a)
if(!!t.$ismP){r=this.gd5()
q=t.gH(a)
q=H.jz(q,r,H.Y(q,"V",0),null)
q=P.kK(q,!0,H.Y(q,"V",0))
t=t.gcX(a)
t=H.jz(t,r,H.Y(t,"V",0),null)
return["map",q,P.kK(t,!0,H.Y(t,"V",0))]}if(!!t.$iskI)return this.d9(a)
if(!!t.$isa)this.cV(a)
if(!!t.$isn7)this.aA(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isbd)return this.da(a)
if(!!t.$isbY)return this.dc(a)
if(!!t.$isaz){p=a.$static_name
if(p==null)this.aA(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isax)return["capability",a.a]
if(!(a instanceof P.F))this.cV(a)
return["dart",u.classIdExtractor(a),this.d7(u.classFieldsExtractor(a))]},
aA:function(a,b){throw H.c(P.v((b==null?"Can't transmit:":b)+" "+H.f(a)))},
cV:function(a){return this.aA(a,null)},
d8:function(a){var t
H.b(typeof a!=="string")
t=this.d6(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.aA(a,"Can't serialize indexable: ")},
d6:function(a){var t,s
t=[]
C.a.sk(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.P(a[s])
return t},
d7:function(a){var t
for(t=0;t<a.length;++t)C.a.j(a,t,this.P(a[t]))
return a},
d9:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.aA(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sk(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.P(a[t[r]])
return["js-object",t,s]},
dc:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
da:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.aO.prototype={
a5:function(a){var t,s,r,q
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.c(P.dV("Bad serialized message: "+H.f(a)))
switch(C.a.gbj(a)){case"ref":H.b(J.E(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.b(J.E(a[0],"buffer"))
t=a[1]
C.a.i(this.b,t)
return t
case"typed":H.b(J.E(a[0],"typed"))
t=a[1]
C.a.i(this.b,t)
return t
case"fixed":H.b(J.E(a[0],"fixed"))
t=a[1]
C.a.i(this.b,t)
return J.ao(H.B(this.as(t),[null]))
case"extendable":H.b(J.E(a[0],"extendable"))
t=a[1]
C.a.i(this.b,t)
return H.B(this.as(t),[null])
case"mutable":H.b(J.E(a[0],"mutable"))
t=a[1]
C.a.i(this.b,t)
return this.as(t)
case"const":H.b(J.E(a[0],"const"))
t=a[1]
C.a.i(this.b,t)
return J.ao(H.B(this.as(t),[null]))
case"map":return this.eN(a)
case"sendport":return this.eO(a)
case"raw sendport":H.b(J.E(a[0],"raw sendport"))
t=a[1]
C.a.i(this.b,t)
return t
case"js-object":return this.eM(a)
case"function":H.b(J.E(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.i(this.b,t)
return t
case"capability":H.b(J.E(a[0],"capability"))
return new H.ax(a[1])
case"dart":H.b(J.E(a[0],"dart"))
s=a[1]
r=a[2]
q=u.instanceFromClassId(s)
C.a.i(this.b,q)
this.as(r)
return u.initializeEmptyInstance(s,q,r)
default:throw H.c("couldn't deserialize: "+H.f(a))}},
as:function(a){var t
for(t=0;t<a.length;++t)C.a.j(a,t,this.a5(a[t]))
return a},
eN:function(a){var t,s,r,q,p
H.b(J.E(a[0],"map"))
t=a[1]
s=a[2]
r=P.L()
C.a.i(this.b,r)
t=J.mf(t,this.geL()).fg(0)
for(q=J.U(s),p=0;p<t.length;++p)r.j(0,t[p],this.a5(q.h(s,p)))
return r},
eO:function(a){var t,s,r,q,p,o,n
H.b(J.E(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.cA(r)
if(o==null)return
n=new H.bd(o,s)}else n=new H.bY(t,r,s)
C.a.i(this.b,n)
return n},
eM:function(a){var t,s,r,q,p,o
H.b(J.E(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.i(this.b,r)
for(q=J.U(t),p=J.U(s),o=0;C.b.a7(o,q.gk(t));++o)r[q.h(t,o)]=this.a5(p.h(s,o))
return r}}
H.fL.prototype={}
H.hq.prototype={
U:function(a){var t,s,r
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
H.ft.prototype={
l:function(a){var t=this.b
if(t==null)return"NullError: "+H.f(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.f1.prototype={
l:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.f(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.f(this.a)+")"}}
H.hu.prototype={
l:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.j9.prototype={
$1:function(a){if(!!J.r(a).$isaX)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(a){return{func:1,args:[,]}}}
H.ds.prototype={
l:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t},
$isb7:1}
H.iS.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.iT.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.iU.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.iV.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.iW.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.az.prototype={
l:function(a){return"Closure '"+H.bB(this).trim()+"'"},
$isjp:1,
gfn:function(){return this},
$D:null}
H.hf.prototype={}
H.h1.prototype={
l:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bp.prototype={
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bp))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gA:function(a){var t,s
t=this.c
if(t==null)s=H.aI(this.a)
else s=typeof t!=="object"?J.bm(t):H.aI(t)
return(s^H.aI(this.b))>>>0},
l:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.bB(t)+"'")}}
H.hs.prototype={
l:function(a){return this.a}}
H.e_.prototype={
l:function(a){return this.a}}
H.fQ.prototype={
l:function(a){return"RuntimeError: "+H.f(this.a)}}
H.hD.prototype={
l:function(a){return C.i.a9("Assertion failed: ",P.ck(this.a))}}
H.ar.prototype={
l:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gA:function(a){return J.bm(this.a)},
B:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.ar){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.ad.prototype={
gk:function(a){return this.a},
gax:function(a){return this.a===0},
gH:function(a){return new H.f4(this,[H.al(this,0)])},
gcX:function(a){return H.jz(this.gH(this),new H.f0(this),H.al(this,0),H.al(this,1))},
K:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bU(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bU(s,b)}else return this.eY(b)},
eY:function(a){var t=this.d
if(t==null)return!1
return this.aw(this.aI(t,this.av(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.aq(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.aq(r,b)
return s==null?null:s.b}else return this.eZ(b)},
eZ:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.aI(t,this.av(a))
r=this.aw(s,a)
if(r<0)return
return s[r].b},
j:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.b5()
this.b=t}this.bM(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.b5()
this.c=s}this.bM(s,b,c)}else{r=this.d
if(r==null){r=this.b5()
this.d=r}q=this.av(b)
p=this.aI(r,q)
if(p==null)this.b7(r,q,[this.b6(b,c)])
else{o=this.aw(p,b)
if(o>=0)p[o].b=c
else p.push(this.b6(b,c))}}},
ay:function(a,b){if(typeof b==="string")return this.c_(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.c_(this.c,b)
else return this.f_(b)},
f_:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.aI(t,this.av(a))
r=this.aw(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.c3(q)
return q.b},
a4:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.b4()}},
au:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.c(P.am(this))
t=t.c}},
bM:function(a,b,c){var t=this.aq(a,b)
if(t==null)this.b7(a,b,this.b6(b,c))
else t.b=c},
c_:function(a,b){var t
if(a==null)return
t=this.aq(a,b)
if(t==null)return
this.c3(t)
this.bV(a,b)
return t.b},
b4:function(){this.r=this.r+1&67108863},
b6:function(a,b){var t,s
t=new H.f3(a,b,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.b4()
return t},
c3:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.b4()},
av:function(a){return J.bm(a)&0x3ffffff},
aw:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.E(a[s].a,b))return s
return-1},
l:function(a){return P.kL(this)},
aq:function(a,b){return a[b]},
aI:function(a,b){return a[b]},
b7:function(a,b,c){H.b(c!=null)
a[b]=c},
bV:function(a,b){delete a[b]},
bU:function(a,b){return this.aq(a,b)!=null},
b5:function(){var t=Object.create(null)
this.b7(t,"<non-identifier-key>",t)
this.bV(t,"<non-identifier-key>")
return t},
$ismP:1}
H.f0.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(a){return{func:1,args:[,]}}}
H.f3.prototype={}
H.f4.prototype={
gk:function(a){return this.a.a},
gC:function(a){var t,s
t=this.a
s=new H.f5(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.f5.prototype={
gt:function(a){return this.d},
q:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.am(t))
else{t=this.c
if(t==null){this.sbL(null)
return!1}else{this.sbL(t.a)
this.c=this.c.c
return!0}}},
sbL:function(a){this.d=a}}
H.iO.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[,]}}}
H.iP.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(a,b){return{func:1,args:[,P.p]}}}
H.iQ.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[P.p]}}}
H.by.prototype={
gE:function(a){return C.ae},
$isby:1}
H.b6.prototype={$isb6:1}
H.fj.prototype={
gE:function(a){return C.af}}
H.cD.prototype={
gk:function(a){return a.length},
$isq:1,
$asq:function(){},
$isu:1,
$asu:function(){}}
H.cE.prototype={
h:function(a,b){H.ai(b,a,a.length)
return a[b]},
j:function(a,b,c){H.ai(b,a,a.length)
a[b]=c},
$isk:1,
$ask:function(){return[P.X]},
$asaZ:function(){return[P.X]},
$asm:function(){return[P.X]},
$isi:1,
$asi:function(){return[P.X]}}
H.cF.prototype={
j:function(a,b,c){H.ai(b,a,a.length)
a[b]=c},
$isk:1,
$ask:function(){return[P.z]},
$asaZ:function(){return[P.z]},
$asm:function(){return[P.z]},
$isi:1,
$asi:function(){return[P.z]}}
H.cC.prototype={
gE:function(a){return C.ag},
$iseJ:1}
H.fk.prototype={
gE:function(a){return C.ah}}
H.fl.prototype={
gE:function(a){return C.ai},
h:function(a,b){H.ai(b,a,a.length)
return a[b]}}
H.fm.prototype={
gE:function(a){return C.aj},
h:function(a,b){H.ai(b,a,a.length)
return a[b]},
$iskF:1}
H.fn.prototype={
gE:function(a){return C.ak},
h:function(a,b){H.ai(b,a,a.length)
return a[b]}}
H.fo.prototype={
gE:function(a){return C.ao},
h:function(a,b){H.ai(b,a,a.length)
return a[b]},
$isl4:1}
H.fp.prototype={
gE:function(a){return C.ap},
h:function(a,b){H.ai(b,a,a.length)
return a[b]},
$isl5:1}
H.cG.prototype={
gE:function(a){return C.aq},
gk:function(a){return a.length},
h:function(a,b){H.ai(b,a,a.length)
return a[b]}}
H.fq.prototype={
gE:function(a){return C.ar},
gk:function(a){return a.length},
h:function(a,b){H.ai(b,a,a.length)
return a[b]},
$isl6:1}
H.bP.prototype={}
H.bQ.prototype={}
H.bR.prototype={}
H.bS.prototype={}
P.hG.prototype={
$1:function(a){var t,s
H.iX()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(a){return{func:1,args:[,]}}}
P.hF.prototype={
$1:function(a){var t,s
t=this.a
H.b(t.a==null)
H.iJ()
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(a){return{func:1,args:[{func:1,v:true}]}}}
P.hH.prototype={
$0:function(){H.iX()
this.a.$0()},
$S:function(){return{func:1}}}
P.hI.prototype={
$0:function(){H.iX()
this.a.$0()},
$S:function(){return{func:1}}}
P.a_.prototype={}
P.eO.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.c)this.d.W(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.c)this.d.W(t.c,t.d)},
$S:function(a,b){return{func:1,args:[,,]}}}
P.eN.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){r[this.b]=a
if(s===0)this.c.bT(r)}else if(t.b===0&&!this.e)this.c.W(t.c,t.d)},
$S:function(a){return{func:1,args:[,]}}}
P.jm.prototype={}
P.hL.prototype={}
P.hE.prototype={
bh:function(a,b){var t=this.a
if(t.a!==0)throw H.c(P.h0("Future already completed"))
t.bN(b)}}
P.iw.prototype={
bh:function(a,b){var t=this.a
if(t.a!==0)throw H.c(P.h0("Future already completed"))
t.ao(b)}}
P.bL.prototype={
f4:function(a){if(this.c!==6)return!0
H.b(!0)
return this.b.b.bm(this.d,a.a)},
eU:function(a){var t,s
t=(this.c&2)!==0
if(t){H.b(t)
t=this.e!=null}else t=!1
H.b(t)
s=this.e
t=this.b.b
if(H.bj(s,{func:1,args:[P.F,P.b7]}))return t.fc(s,a.a,a.b)
else return t.bm(s,a.a)}}
P.J.prototype={
bo:function(a,b){var t,s,r
t=$.x
if(t!==C.d){t.toString
if(b!=null)b=P.nz(b,t)}s=new P.J(0,t,null,[null])
r=b==null?1:3
this.aX(new P.bL(null,s,r,a,b,[H.al(this,0),null]))
return s},
aQ:function(a){return this.bo(a,null)},
fm:function(a){var t,s
t=$.x
s=new P.J(0,t,null,this.$ti)
if(t!==C.d)t.toString
t=H.al(this,0)
this.aX(new P.bL(null,s,8,a,null,[t,t]))
return s},
aY:function(a){H.b(this.a<4)
H.b(a.a>=4)
this.a=a.a
this.c=a.c},
aX:function(a){var t
H.b(a.a==null)
t=this.a
if(t<=1){a.a=H.jW(this.c,"$isbL")
this.c=a}else{if(t===2){H.b(!0)
t=this.c
if(t.a<4){t.aX(a)
return}this.aY(t)}H.b(this.a>=4)
t=this.b
t.toString
P.bf(null,null,t,new P.hW(this,a))}},
bZ:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.b(!0)
s=this.c
if(s.a<4){s.bZ(a)
return}this.aY(s)}H.b(this.a>=4)
t.a=this.aK(a)
s=this.b
s.toString
P.bf(null,null,s,new P.i3(t,this))}},
aJ:function(){H.b(this.a<4)
var t=this.c
this.c=null
return this.aK(t)},
aK:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
ao:function(a){var t,s,r
H.b(this.a<4)
t=this.$ti
s=H.c1(a,"$isa_",t,"$asa_")
if(s){t=H.c1(a,"$isJ",t,null)
if(t)P.hZ(a,this)
else P.lb(a,this)}else{r=this.aJ()
H.b(this.a<4)
this.a=4
this.c=a
P.ba(this,r)}},
bT:function(a){var t
H.b(this.a<4)
H.b(!J.r(a).$isa_)
t=this.aJ()
H.b(this.a<4)
this.a=4
this.c=a
P.ba(this,t)},
W:function(a,b){var t
H.b(this.a<4)
t=this.aJ()
H.b(this.a<4)
this.a=8
this.c=new P.aS(a,b)
P.ba(this,t)},
e_:function(a){return this.W(a,null)},
bN:function(a){var t
H.b(this.a<4)
t=H.c1(a,"$isa_",this.$ti,"$asa_")
if(t){this.dY(a)
return}H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.bf(null,null,t,new P.hY(this,a))},
dY:function(a){var t=H.c1(a,"$isJ",this.$ti,null)
if(t){if(a.a===8){H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.bf(null,null,t,new P.i2(this,a))}else P.hZ(a,this)
return}P.lb(a,this)},
dX:function(a,b){var t
H.b(this.a<4)
H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.bf(null,null,t,new P.hX(this,a,b))},
$isa_:1,
gb9:function(){return this.a},
geh:function(){return this.c}}
P.hW.prototype={
$0:function(){P.ba(this.a,this.b)},
$S:function(){return{func:1}}}
P.i3.prototype={
$0:function(){P.ba(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.i_.prototype={
$1:function(a){var t=this.a
H.b(t.a===1)
H.b(t.a===1)
t.a=0
t.ao(a)},
$S:function(a){return{func:1,args:[,]}}}
P.i0.prototype={
$2:function(a,b){var t=this.a
H.b(t.a===1)
t.W(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(a,b){return{func:1,args:[,],opt:[,]}}}
P.i1.prototype={
$0:function(){this.a.W(this.b,this.c)},
$S:function(){return{func:1}}}
P.hY.prototype={
$0:function(){this.a.bT(this.b)},
$S:function(){return{func:1}}}
P.i2.prototype={
$0:function(){P.hZ(this.b,this.a)},
$S:function(){return{func:1}}}
P.hX.prototype={
$0:function(){this.a.W(this.b,this.c)},
$S:function(){return{func:1}}}
P.i6.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.c
p=q.c
H.b((p&1)===0)
o=(p&2)===0
H.b(o)
t=null
try{H.b(o)
H.b(p===8)
t=q.b.b.cG(q.d)}catch(n){s=H.N(n)
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
p.b=q.c}else p.b=new P.aS(s,r)
p.a=!0
return}if(!!J.r(t).$isa_){if(t instanceof P.J&&t.gb9()>=4){if(t.gb9()===8){q=t
H.b(q.gb9()===8)
p=this.b
p.b=q.geh()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.aQ(new P.i7(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.i7.prototype={
$1:function(a){return this.a},
$S:function(a){return{func:1,args:[,]}}}
P.i5.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.b((r.c&1)!==0)
this.a.b=r.b.b.bm(r.d,this.c)}catch(q){t=H.N(q)
s=H.a8(q)
r=this.a
r.b=new P.aS(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.i4.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.b(q.a===8)
t=q.c
q=this.c
if(q.f4(t)){H.b((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.eU(t)
p.a=!1}}catch(o){s=H.N(o)
r=H.a8(o)
q=this.a
p=q.a
H.b(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.b(q.a===8)
m.b=q.c}else m.b=new P.aS(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.d2.prototype={}
P.bE.prototype={
gk:function(a){var t,s
t={}
s=new P.J(0,$.x,null,[P.z])
t.a=0
this.cz(new P.h9(t),!0,new P.ha(t,s),s.gbS())
return s},
gbj:function(a){var t,s
t={}
s=new P.J(0,$.x,null,[H.Y(this,"bE",0)])
t.a=null
t.a=this.cz(new P.h7(t,this,s),!0,new P.h8(s),s.gbS())
return s}}
P.h9.prototype={
$1:function(a){++this.a.a},
$S:function(a){return{func:1,args:[,]}}}
P.ha.prototype={
$0:function(){this.b.ao(this.a.a)},
$S:function(){return{func:1}}}
P.h7.prototype={
$1:function(a){P.nt(this.a.a,this.c,a)},
$S:function(a){return{func:1,args:[H.Y(this.b,"bE",0)]}}}
P.h8.prototype={
$0:function(){var t,s,r,q
try{r=H.cs()
throw H.c(r)}catch(q){t=H.N(q)
s=H.a8(q)
P.nv(this.a,t,s)}},
$S:function(){return{func:1}}}
P.h6.prototype={}
P.iB.prototype={
$0:function(){return this.a.ao(this.b)},
$S:function(){return{func:1}}}
P.jF.prototype={}
P.aS.prototype={
l:function(a){return H.f(this.a)},
$isaX:1}
P.iA.prototype={}
P.iE.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.bA()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.c(t)
r=H.c(t)
r.stack=s.l(0)
throw r},
$S:function(){return{func:1}}}
P.il.prototype={
fd:function(a){var t,s,r
try{if(C.d===$.x){a.$0()
return}P.lh(null,null,this,a)}catch(r){t=H.N(r)
s=H.a8(r)
P.iD(null,null,this,t,s)}},
fe:function(a,b){var t,s,r
try{if(C.d===$.x){a.$1(b)
return}P.li(null,null,this,a,b)}catch(r){t=H.N(r)
s=H.a8(r)
P.iD(null,null,this,t,s)}},
ew:function(a){return new P.io(this,a)},
bg:function(a){return new P.im(this,a)},
ex:function(a){return new P.ip(this,a)},
h:function(a,b){return},
cG:function(a){if($.x===C.d)return a.$0()
return P.lh(null,null,this,a)},
bm:function(a,b){if($.x===C.d)return a.$1(b)
return P.li(null,null,this,a,b)},
fc:function(a,b,c){if($.x===C.d)return a.$2(b,c)
return P.nA(null,null,this,a,b,c)}}
P.io.prototype={
$0:function(){return this.a.cG(this.b)},
$S:function(){return{func:1}}}
P.im.prototype={
$0:function(){return this.a.fd(this.b)},
$S:function(){return{func:1}}}
P.ip.prototype={
$1:function(a){return this.a.fe(this.b,a)},
$S:function(a){return{func:1,args:[,]}}}
P.ie.prototype={
av:function(a){return H.o0(a)&0x3ffffff},
aw:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.ic.prototype={
gC:function(a){var t=new P.bN(this,this.r,null,null,[null])
t.c=this.e
return t},
gk:function(a){return this.a},
F:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.e0(b)},
e0:function(a){var t=this.d
if(t==null)return!1
return this.aH(t[this.aG(a)],a)>=0},
cA:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.F(0,a)?a:null
else return this.e9(a)},
e9:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.aG(a)]
r=this.aH(s,a)
if(r<0)return
return J.bl(s,r).ge2()},
i:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.jO()
this.b=t}return this.bP(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.jO()
this.c=s}return this.bP(s,b)}else return this.a1(0,b)},
a1:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.jO()
this.d=t}s=this.aG(b)
r=t[s]
if(r==null){q=[this.b0(b)]
H.b(q!=null)
t[s]=q}else{if(this.aH(r,b)>=0)return!1
r.push(this.b0(b))}return!0},
ay:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bQ(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bQ(this.c,b)
else return this.eb(0,b)},
eb:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.aG(b)]
r=this.aH(s,b)
if(r<0)return!1
this.bR(s.splice(r,1)[0])
return!0},
a4:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.b_()}},
bP:function(a,b){var t
if(a[b]!=null)return!1
t=this.b0(b)
H.b(!0)
a[b]=t
return!0},
bQ:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bR(t)
delete a[b]
return!0},
b_:function(){this.r=this.r+1&67108863},
b0:function(a){var t,s
t=new P.id(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.b_()
return t},
bR:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.b_()},
aG:function(a){return J.bm(a)&0x3ffffff},
aH:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.E(a[s].a,b))return s
return-1}}
P.id.prototype={
ge2:function(){return this.a}}
P.bN.prototype={
gt:function(a){return this.d},
q:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.am(t))
else{t=this.c
if(t==null){this.san(null)
return!1}else{this.san(t.a)
this.c=this.c.b
return!0}}},
san:function(a){this.d=a}}
P.i9.prototype={}
P.jv.prototype={$isk:1}
P.cw.prototype={$isk:1,$isi:1}
P.m.prototype={
gC:function(a){return new H.cx(a,this.gk(a),0,null,[H.Y(a,"m",0)])},
v:function(a,b){return this.h(a,b)},
cB:function(a,b){return new H.bv(a,b,[H.Y(a,"m",0),null])},
eT:function(a,b,c){var t,s,r,q
t=this.gk(a)
for(s=b,r=0;C.b.a7(r,t);++r){s=c.$2(s,this.h(a,r))
q=this.gk(a)
if(t==null?q!=null:t!==q)throw H.c(P.am(a))}return s},
l:function(a){return P.eY(a,"[","]")}}
P.cy.prototype={}
P.fa.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.f(a)
t.a=s+": "
t.a+=H.f(b)},
$S:function(a,b){return{func:1,args:[,,]}}}
P.b5.prototype={
au:function(a,b){var t,s
for(t=J.aR(this.gH(a));t.q();){s=t.gt(t)
b.$2(s,this.h(a,s))}},
gk:function(a){return J.bn(this.gH(a))},
l:function(a){return P.kL(a)}}
P.f6.prototype={
dC:function(a,b){var t
H.b(!0)
t=new Array(8)
t.fixed$length=Array
this.sc1(H.B(t,[b]))},
gC:function(a){return new P.ig(this,this.c,this.d,this.b,null,this.$ti)},
gax:function(a){return this.b===this.c},
gk:function(a){return(this.c-this.b&this.a.length-1)>>>0},
v:function(a,b){var t=this.gk(this)
if(C.b.a0(0,b)||b>=t)H.M(P.A(b,this,"index",null,t))
return this.a[(C.b.a9(this.b,b)&this.a.length-1)>>>0]},
a4:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
l:function(a){return P.eY(this,"{","}")},
cE:function(){var t,s,r
t=this.b
if(t===this.c)throw H.c(H.cs());++this.d
s=this.a
r=s[t]
s[t]=null
this.b=(t+1&s.length-1)>>>0
return r},
a1:function(a,b){var t,s
t=this.a
s=this.c
t[s]=b
t=(s+1&t.length-1)>>>0
this.c=t
if(this.b===t)this.bX();++this.d},
bX:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.B(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.by(s,0,q,t,r)
C.a.by(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sc1(s)},
sc1:function(a){this.a=a}}
P.ig.prototype={
gt:function(a){return this.e},
q:function(){var t,s
t=this.a
if(this.c!==t.d)H.M(P.am(t))
s=this.d
if(s===this.b){this.san(null)
return!1}this.san(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
san:function(a){this.e=a}}
P.fT.prototype={
O:function(a,b){var t
for(t=J.aR(b);t.q();)this.i(0,t.gt(t))},
l:function(a){return P.eY(this,"{","}")},
$isk:1}
P.fS.prototype={}
P.bO.prototype={}
P.ak.prototype={}
P.I.prototype={}
P.aW.prototype={
B:function(a,b){if(b==null)return!1
if(!(b instanceof P.aW))return!1
return this.a===b.a&&this.b===b.b},
Z:function(a,b){return C.b.Z(this.a,b.a)},
gA:function(a){var t=this.a
return(t^C.b.b8(t,30))&1073741823},
l:function(a){var t,s,r,q,p,o,n
t=P.mD(H.n6(this))
s=P.cd(H.n4(this))
r=P.cd(H.n0(this))
q=P.cd(H.n1(this))
p=P.cd(H.n3(this))
o=P.cd(H.n5(this))
n=P.mE(H.n2(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isI:1,
$asI:function(){return[P.aW]}}
P.X.prototype={}
P.aA.prototype={
a7:function(a,b){return C.b.a7(this.a,b.ge1())},
a0:function(a,b){return C.b.a0(this.a,b.ge1())},
B:function(a,b){if(b==null)return!1
if(!(b instanceof P.aA))return!1
return this.a===b.a},
gA:function(a){return this.a&0x1FFFFFFF},
Z:function(a,b){return C.b.Z(this.a,b.a)},
l:function(a){var t,s,r,q,p
t=new P.ek()
s=this.a
if(s<0)return"-"+new P.aA(0-s).l(0)
r=t.$1(C.b.N(s,6e7)%60)
q=t.$1(C.b.N(s,1e6)%60)
p=new P.ej().$1(s%1e6)
return""+C.b.N(s,36e8)+":"+H.f(r)+":"+H.f(q)+"."+H.f(p)},
$isI:1,
$asI:function(){return[P.aA]}}
P.ej.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(a){return{func:1,ret:P.p,args:[P.z]}}}
P.ek.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(a){return{func:1,ret:P.p,args:[P.z]}}}
P.aX.prototype={}
P.c9.prototype={
l:function(a){return"Assertion failed"}}
P.bA.prototype={
l:function(a){return"Throw of null."}}
P.a1.prototype={
gb2:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gb1:function(){return""},
l:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.f(t)
q=this.gb2()+s+r
if(!this.a)return q
p=this.gb1()
o=P.ck(this.b)
return q+p+": "+H.f(o)}}
P.cL.prototype={
gb2:function(){return"RangeError"},
gb1:function(){var t,s,r
H.b(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.f(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.f(t)
else if(r>t)s=": Not in range "+H.f(t)+".."+H.f(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.f(t)}return s}}
P.eV.prototype={
gb2:function(){return"RangeError"},
gb1:function(){H.b(this.a)
if(J.lK(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.f(t)},
gk:function(a){return this.f}}
P.hv.prototype={
l:function(a){return"Unsupported operation: "+this.a}}
P.ht.prototype={
l:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.b8.prototype={
l:function(a){return"Bad state: "+this.a}}
P.e1.prototype={
l:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.f(P.ck(t))+"."}}
P.cS.prototype={
l:function(a){return"Stack Overflow"},
$isaX:1}
P.ea.prototype={
l:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.jo.prototype={}
P.hV.prototype={
l:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.f(t)}}
P.en.prototype={
h:function(a,b){var t,s
t=this.a
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.M(P.jk(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.kO(b,"expando$values")
return s==null?null:H.kO(s,t)},
l:function(a){return"Expando:"+H.f(this.b)}}
P.z.prototype={}
P.V.prototype={
aS:function(a,b){return new H.d1(this,b,[H.Y(this,"V",0)])},
gk:function(a){var t,s
H.b(!this.$isk)
t=this.gC(this)
for(s=0;t.q();)++s
return s},
gab:function(a){var t,s
t=this.gC(this)
if(!t.q())throw H.c(H.cs())
s=t.gt(t)
if(t.q())throw H.c(H.mX())
return s},
v:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.mu("index"))
if(b<0)H.M(P.aJ(b,0,null,"index",null))
for(t=this.gC(this),s=0;t.q();){r=t.gt(t)
if(b===s)return r;++s}throw H.c(P.A(b,this,"index",null,s))},
l:function(a){return P.mV(this,"(",")")}}
P.ct.prototype={}
P.i.prototype={$isk:1}
P.b4.prototype={}
P.O.prototype={
gA:function(a){return P.F.prototype.gA.call(this,this)},
l:function(a){return"null"}}
P.a9.prototype={$isI:1,
$asI:function(){return[P.a9]}}
P.F.prototype={constructor:P.F,$isF:1,
B:function(a,b){return this===b},
gA:function(a){return H.aI(this)},
l:function(a){return"Instance of '"+H.bB(this)+"'"},
gE:function(a){return new H.ar(H.iM(this),null)},
toString:function(){return this.l(this)}}
P.b7.prototype={}
P.p.prototype={$isI:1,
$asI:function(){return[P.p]}}
P.bF.prototype={
gk:function(a){return this.a.length},
l:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
gad:function(){return this.a}}
P.jI.prototype={}
W.l.prototype={}
W.c8.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
W.dS.prototype={
gk:function(a){return a.length}}
W.dT.prototype={
l:function(a){return String(a)}}
W.dU.prototype={
l:function(a){return String(a)}}
W.av.prototype={$isav:1}
W.aw.prototype={
bq:function(a,b,c){if(c!=null)return this.e4(a,b,P.nK(c,null))
return this.e5(a,b)},
d2:function(a,b){return this.bq(a,b,null)},
e4:function(a,b,c){return a.getContext(b,c)},
e5:function(a,b){return a.getContext(b)},
$isaw:1}
W.ca.prototype={
aL:function(a,b,c){return a.addColorStop(b,c)}}
W.cb.prototype={
ck:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
eS:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
aT:function(a){return P.iG(a.getContextAttributes())}}
W.ay.prototype={
gk:function(a){return a.length}}
W.e2.prototype={
gk:function(a){return a.length}}
W.e3.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.e4.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
W.e5.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
W.aU.prototype={
bO:function(a,b){var t,s
t=$.$get$kq()
s=t[b]
if(typeof s==="string")return s
s=this.el(a,b)
t[b]=s
return s},
el:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.mF()+b
if(t in a)return t
return b},
gk:function(a){return a.length}}
W.e6.prototype={}
W.a2.prototype={}
W.aV.prototype={}
W.e7.prototype={
gk:function(a){return a.length}}
W.e8.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
W.e9.prototype={
gk:function(a){return a.length}}
W.eb.prototype={
h:function(a,b){return a[b]},
gk:function(a){return a.length}}
W.ec.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
W.ce.prototype={}
W.bq.prototype={
eq:function(a,b){return a.adoptNode(b)},
d3:function(a,b){return a.getElementById(b)},
f7:function(a,b){return a.querySelector(b)}}
W.ed.prototype={
l:function(a){return String(a)}}
W.cf.prototype={
eH:function(a,b){return a.createHTMLDocument(b)}}
W.ee.prototype={
gX:function(a){return a.a},
gR:function(a){return a.b},
ga3:function(a){return a.c}}
W.cg.prototype={
gX:function(a){return a.a},
gR:function(a){return a.b},
ga3:function(a){return a.c}}
W.ef.prototype={
gaR:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
W.ch.prototype={
gaR:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
W.ci.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[P.W]},
$isk:1,
$ask:function(){return[P.W]},
$isu:1,
$asu:function(){return[P.W]},
$asm:function(){return[P.W]},
$isi:1,
$asi:function(){return[P.W]},
$asn:function(){return[P.W]}}
W.cj.prototype={
l:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gai(a))+" x "+H.f(this.gaf(a))},
B:function(a,b){var t
if(b==null)return!1
t=J.r(b)
if(!t.$isW)return!1
return a.left===t.gcv(b)&&a.top===t.gcL(b)&&this.gai(a)===t.gai(b)&&this.gaf(a)===t.gaf(b)},
gA:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gai(a)
q=this.gaf(a)
return W.lf(W.aQ(W.aQ(W.aQ(W.aQ(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gaf:function(a){return a.height},
gcv:function(a){return a.left},
gcL:function(a){return a.top},
gai:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isW:1,
$asW:function(){}}
W.eg.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[P.p]},
$isk:1,
$ask:function(){return[P.p]},
$isu:1,
$asu:function(){return[P.p]},
$asm:function(){return[P.p]},
$isi:1,
$asi:function(){return[P.p]},
$asn:function(){return[P.p]}}
W.eh.prototype={
gk:function(a){return a.length}}
W.a3.prototype={
geu:function(a){return new W.hO(a)},
l:function(a){return a.localName},
S:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.kz
if(t==null){t=H.B([],[W.cI])
s=new W.cJ(t)
C.a.i(t,W.lc(null))
C.a.i(t,W.lg())
$.kz=s
d=s}else d=t
t=$.ky
if(t==null){t=new W.dC(d)
$.ky=t
c=t}else{t.a=d
c=t}}if($.an==null){t=document
s=t.implementation
s=(s&&C.M).eH(s,"")
$.an=s
$.jn=s.createRange()
s=$.an
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.an.head;(t&&C.N).Y(t,r)}t=$.an
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.jW(s,"$isav")}t=$.an
if(!!this.$isav)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.an.body;(t&&C.o).Y(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.F(C.X,a.tagName)){t=$.jn;(t&&C.F).d4(t,q)
t=$.jn
p=(t&&C.F).eF(t,b)}else{q.innerHTML=b
p=$.an.createDocumentFragment()
for(t=J.j(p);s=q.firstChild,s!=null;)t.Y(p,s)}t=$.an.body
if(q==null?t!=null:q!==t)J.k7(q)
c.bx(p)
C.r.eq(document,p)
return p},
eG:function(a,b,c){return this.S(a,b,c,null)},
df:function(a,b,c,d){a.textContent=null
this.Y(a,this.S(a,b,c,d))},
de:function(a,b){return this.df(a,b,null,null)},
aj:function(a,b){return a.getAttribute(b)},
ec:function(a,b){return a.removeAttribute(b)},
$isa3:1,
gff:function(a){return a.tagName}}
W.em.prototype={
$1:function(a){return!!J.r(a).$isa3},
$S:function(a){return{func:1,args:[,]}}}
W.h.prototype={$ish:1}
W.d.prototype={
dV:function(a,b,c,d){return a.addEventListener(b,H.bh(c,1),!1)},
ee:function(a,b,c,d){return a.removeEventListener(b,H.bh(c,1),!1)}}
W.eG.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cm]},
$isk:1,
$ask:function(){return[W.cm]},
$isu:1,
$asu:function(){return[W.cm]},
$asm:function(){return[W.cm]},
$isi:1,
$asi:function(){return[W.cm]},
$asn:function(){return[W.cm]}}
W.eH.prototype={
gk:function(a){return a.length}}
W.eL.prototype={
gk:function(a){return a.length}}
W.eP.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
W.cq.prototype={}
W.eQ.prototype={
gk:function(a){return a.length}}
W.bs.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.t]},
$isk:1,
$ask:function(){return[W.t]},
$isu:1,
$asu:function(){return[W.t]},
$asm:function(){return[W.t]},
$isi:1,
$asi:function(){return[W.t]},
$asn:function(){return[W.t]}}
W.cr.prototype={}
W.eR.prototype={
M:function(a,b){return a.send(b)}}
W.bt.prototype={}
W.b_.prototype={$isb_:1}
W.b0.prototype={$isb0:1}
W.b1.prototype={$isb1:1}
W.aF.prototype={$isaF:1}
W.f8.prototype={
l:function(a){return String(a)}}
W.f9.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
W.bw.prototype={}
W.fe.prototype={
gk:function(a){return a.length}}
W.fg.prototype={
fo:function(a,b,c){return a.send(b,c)},
M:function(a,b){return a.send(b)}}
W.bx.prototype={}
W.fh.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cB]},
$isk:1,
$ask:function(){return[W.cB]},
$isu:1,
$asu:function(){return[W.cB]},
$asm:function(){return[W.cB]},
$isi:1,
$asi:function(){return[W.cB]},
$asn:function(){return[W.cB]}}
W.P.prototype={$isP:1}
W.R.prototype={
gab:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.c(P.h0("No elements"))
if(s>1)throw H.c(P.h0("More than one element"))
return t.firstChild},
O:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.j(s),p=0;p<r;++p)q.Y(s,t.firstChild)
return},
j:function(a,b,c){var t=this.a
J.lN(t,c,C.D.h(t.childNodes,b))},
gC:function(a){var t=this.a.childNodes
return new W.cn(t,t.length,-1,null,[H.Y(t,"n",0)])},
gk:function(a){return this.a.childNodes.length},
h:function(a,b){return C.D.h(this.a.childNodes,b)},
$ask:function(){return[W.t]},
$ascw:function(){return[W.t]},
$asm:function(){return[W.t]},
$asi:function(){return[W.t]},
$asbO:function(){return[W.t]}}
W.t.prototype={
f8:function(a){var t=a.parentNode
if(t!=null)J.ja(t,a)},
l:function(a){var t=a.nodeValue
return t==null?this.dj(a):t},
Y:function(a,b){return a.appendChild(b)},
ed:function(a,b){return a.removeChild(b)},
ef:function(a,b,c){return a.replaceChild(b,c)},
$ist:1,
gbk:function(a){return a.previousSibling}}
W.cH.prototype={
bl:function(a){return a.previousNode()}}
W.bz.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.t]},
$isk:1,
$ask:function(){return[W.t]},
$isu:1,
$asu:function(){return[W.t]},
$asm:function(){return[W.t]},
$isi:1,
$asi:function(){return[W.t]},
$asn:function(){return[W.t]}}
W.ae.prototype={
gk:function(a){return a.length}}
W.fE.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.ae]},
$isk:1,
$ask:function(){return[W.ae]},
$isu:1,
$asu:function(){return[W.ae]},
$asm:function(){return[W.ae]},
$isi:1,
$asi:function(){return[W.ae]},
$asn:function(){return[W.ae]}}
W.fH.prototype={
M:function(a,b){return a.send(b)}}
W.cK.prototype={
eF:function(a,b){return a.createContextualFragment(b)},
d4:function(a,b){return a.selectNodeContents(b)}}
W.cO.prototype={
M:function(a,b){return a.send(b)}}
W.fR.prototype={
gk:function(a){return a.length}}
W.aq.prototype={}
W.fX.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cQ]},
$isk:1,
$ask:function(){return[W.cQ]},
$isu:1,
$asu:function(){return[W.cQ]},
$asm:function(){return[W.cQ]},
$isi:1,
$asi:function(){return[W.cQ]},
$asn:function(){return[W.cQ]}}
W.fZ.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cR]},
$isk:1,
$ask:function(){return[W.cR]},
$isu:1,
$asu:function(){return[W.cR]},
$asm:function(){return[W.cR]},
$isi:1,
$asi:function(){return[W.cR]},
$asn:function(){return[W.cR]}}
W.af.prototype={
gk:function(a){return a.length}}
W.h4.prototype={
h:function(a,b){return this.bW(a,b)},
au:function(a,b){var t,s
for(t=0;!0;++t){s=this.e8(a,t)
if(s==null)return
b.$2(s,this.bW(a,s))}},
gH:function(a){var t=H.B([],[P.p])
this.au(a,new W.h5(t))
return t},
gk:function(a){return a.length},
bW:function(a,b){return a.getItem(b)},
e8:function(a,b){return a.key(b)},
$asb5:function(){return[P.p,P.p]}}
W.h5.prototype={
$2:function(a,b){return C.a.i(this.a,a)},
$S:function(a,b){return{func:1,args:[,,]}}}
W.cU.prototype={
S:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aV(a,b,c,d)
t=W.mG("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.R(s).O(0,new W.R(t))
return s}}
W.hd.prototype={
S:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aV(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.K.S(t.createElement("table"),b,c,d)
t.toString
t=new W.R(t)
r=t.gab(t)
r.toString
t=new W.R(r)
q=t.gab(t)
s.toString
q.toString
new W.R(s).O(0,new W.R(q))
return s}}
W.he.prototype={
S:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aV(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.K.S(t.createElement("table"),b,c,d)
t.toString
t=new W.R(t)
r=t.gab(t)
s.toString
r.toString
new W.R(s).O(0,new W.R(r))
return s}}
W.bG.prototype={$isbG:1}
W.hg.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cW]},
$isk:1,
$ask:function(){return[W.cW]},
$isu:1,
$asu:function(){return[W.cW]},
$asm:function(){return[W.cW]},
$isi:1,
$asi:function(){return[W.cW]},
$asn:function(){return[W.cW]}}
W.hh.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cV]},
$isk:1,
$ask:function(){return[W.cV]},
$isu:1,
$asu:function(){return[W.cV]},
$asm:function(){return[W.cV]},
$isi:1,
$asi:function(){return[W.cV]},
$asn:function(){return[W.cV]}}
W.hj.prototype={
gk:function(a){return a.length}}
W.aK.prototype={$isaK:1}
W.hn.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cZ]},
$isk:1,
$ask:function(){return[W.cZ]},
$isu:1,
$asu:function(){return[W.cZ]},
$asm:function(){return[W.cZ]},
$isi:1,
$asi:function(){return[W.cZ]},
$asn:function(){return[W.cZ]}}
W.ho.prototype={
gk:function(a){return a.length}}
W.d_.prototype={
bl:function(a){return a.previousNode()}}
W.aL.prototype={}
W.hw.prototype={
l:function(a){return String(a)}}
W.hy.prototype={
gm:function(a){return a.x},
gG:function(a){return a.z}}
W.b9.prototype={$isb9:1}
W.hz.prototype={
gk:function(a){return a.length}}
W.hA.prototype={
M:function(a,b){return a.send(b)}}
W.aN.prototype={
geJ:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.v("deltaY is not supported"))},
$isaN:1}
W.bK.prototype={
ges:function(a){var t,s
t=P.a9
s=new P.J(0,$.x,null,[t])
this.e3(a)
this.eg(a,W.ll(new W.hC(new P.iw(s,[t]))))
return s},
eg:function(a,b){return a.requestAnimationFrame(H.bh(b,1))},
e3:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.hC.prototype={
$1:function(a){this.a.bh(0,a)},
$S:function(a){return{func:1,args:[,]}}}
W.jK.prototype={}
W.hM.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cc]},
$isk:1,
$ask:function(){return[W.cc]},
$isu:1,
$asu:function(){return[W.cc]},
$asm:function(){return[W.cc]},
$isi:1,
$asi:function(){return[W.cc]},
$asn:function(){return[W.cc]}}
W.hN.prototype={
l:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
B:function(a,b){var t
if(b==null)return!1
t=J.r(b)
if(!t.$isW)return!1
return a.left===t.gcv(b)&&a.top===t.gcL(b)&&a.width===t.gai(b)&&a.height===t.gaf(b)},
gA:function(a){var t,s,r,q
t=a.left
s=a.top
r=a.width
q=a.height
return W.lf(W.aQ(W.aQ(W.aQ(W.aQ(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gaf:function(a){return a.height},
gai:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.i8.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.co]},
$isk:1,
$ask:function(){return[W.co]},
$isu:1,
$asu:function(){return[W.co]},
$asm:function(){return[W.co]},
$isi:1,
$asi:function(){return[W.co]},
$asn:function(){return[W.co]}}
W.dg.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.t]},
$isk:1,
$ask:function(){return[W.t]},
$isu:1,
$asu:function(){return[W.t]},
$asm:function(){return[W.t]},
$isi:1,
$asi:function(){return[W.t]},
$asn:function(){return[W.t]}}
W.it.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.af]},
$isk:1,
$ask:function(){return[W.af]},
$isu:1,
$asu:function(){return[W.af]},
$asm:function(){return[W.af]},
$isi:1,
$asi:function(){return[W.af]},
$asn:function(){return[W.af]}}
W.iu.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cT]},
$isk:1,
$ask:function(){return[W.cT]},
$isu:1,
$asu:function(){return[W.cT]},
$asm:function(){return[W.cT]},
$isi:1,
$asi:function(){return[W.cT]},
$asn:function(){return[W.cT]}}
W.hJ.prototype={
au:function(a,b){var t,s,r,q,p,o
for(t=this.gH(this),s=t.length,r=this.a,q=J.j(r),p=0;p<t.length;t.length===s||(0,H.C)(t),++p){o=t[p]
b.$2(o,q.aj(r,o))}},
gH:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.B([],[P.p])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.i(s,p.name)}return s},
$ascy:function(){return[P.p,P.p]},
$asb5:function(){return[P.p,P.p]},
ge6:function(){return this.a}}
W.hO.prototype={
h:function(a,b){return J.ji(this.a,b)},
gk:function(a){return this.gH(this).length}}
W.hS.prototype={
cz:function(a,b,c,d){return W.a6(this.a,this.b,a,!1,H.al(this,0))}}
W.hP.prototype={}
W.hT.prototype={
dP:function(a,b,c,d,e){this.en()},
ez:function(a){if(this.b==null)return
this.eo()
this.b=null
this.sea(null)
return},
en:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.lL(r,this.c,t,!1)}},
eo:function(){var t,s,r
t=this.d
s=t!=null
if(s){r=this.b
r.toString
if(s)J.lM(r,this.c,t,!1)}},
sea:function(a){this.d=a}}
W.hU.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(a){return{func:1,args:[,]}}}
W.bM.prototype={
dQ:function(a){var t,s
t=$.$get$jN()
if(t.gax(t)){for(s=0;s<262;++s)t.j(0,C.W[s],W.nQ())
for(s=0;s<12;++s)t.j(0,C.u[s],W.nR())}},
ae:function(a){return $.$get$ld().F(0,W.br(a))},
a2:function(a,b,c){var t,s,r
t=W.br(a)
s=$.$get$jN()
r=s.h(0,H.f(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)}}
W.n.prototype={
gC:function(a){return new W.cn(a,this.gk(a),-1,null,[H.Y(a,"n",0)])}}
W.cJ.prototype={
ae:function(a){return C.a.c6(this.a,new W.fs(a))},
a2:function(a,b,c){return C.a.c6(this.a,new W.fr(a,b,c))}}
W.fs.prototype={
$1:function(a){return a.ae(this.a)},
$S:function(a){return{func:1,args:[,]}}}
W.fr.prototype={
$1:function(a){return a.a2(this.a,this.b,this.c)},
$S:function(a){return{func:1,args:[,]}}}
W.bT.prototype={
dT:function(a,b,c,d){var t,s,r
this.a.O(0,c)
t=b.aS(0,new W.ir())
s=b.aS(0,new W.is())
this.b.O(0,t)
r=this.c
r.O(0,C.C)
r.O(0,s)},
ae:function(a){return this.a.F(0,W.br(a))},
a2:function(a,b,c){var t,s
t=W.br(a)
s=this.c
if(s.F(0,H.f(t)+"::"+b))return this.d.er(c)
else if(s.F(0,"*::"+b))return this.d.er(c)
else{s=this.b
if(s.F(0,H.f(t)+"::"+b))return!0
else if(s.F(0,"*::"+b))return!0
else if(s.F(0,H.f(t)+"::*"))return!0
else if(s.F(0,"*::*"))return!0}return!1}}
W.ir.prototype={
$1:function(a){return!C.a.F(C.u,a)},
$S:function(a){return{func:1,args:[,]}}}
W.is.prototype={
$1:function(a){return C.a.F(C.u,a)},
$S:function(a){return{func:1,args:[,]}}}
W.ix.prototype={
a2:function(a,b,c){if(this.dm(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.ji(a,"template")==="")return this.e.F(0,b)
return!1}}
W.iy.prototype={
$1:function(a){return"TEMPLATE::"+H.f(a)},
$S:function(a){return{func:1,args:[,]}}}
W.iv.prototype={
ae:function(a){var t=J.r(a)
if(!!t.$isbD)return!1
t=!!t.$isw
if(t&&W.br(a)==="foreignObject")return!1
if(t)return!0
return!1},
a2:function(a,b,c){if(b==="is"||C.i.bA(b,"on"))return!1
return this.ae(a)}}
W.cn.prototype={
q:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbY(J.bl(this.a,t))
this.c=t
return!0}this.sbY(null)
this.c=s
return!1},
gt:function(a){return this.d},
sbY:function(a){this.d=a}}
W.cI.prototype={}
W.jB.prototype={}
W.jJ.prototype={}
W.iq.prototype={}
W.dC.prototype={
bx:function(a){new W.iz(this).$2(a,null)},
ar:function(a,b){if(b==null)J.k7(a)
else J.ja(b,a)},
ej:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.m5(a)
r=J.ji(s.ge6(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.N(n)}p="element unprintable"
try{p=J.bo(a)}catch(n){H.N(n)}try{o=W.br(a)
this.ei(a,b,t,p,o,s,r)}catch(n){if(H.N(n) instanceof P.a1)throw n
else{this.ar(a,b)
window
m="Removing corrupted element "+H.f(p)
if(typeof console!="undefined")window.console.warn(m)}}},
ei:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.ar(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(t)
return}if(!this.a.ae(a)){this.ar(a,b)
window
t="Removing disallowed element <"+H.f(e)+"> from "+H.f(b)
if(typeof console!="undefined")window.console.warn(t)
return}if(g!=null)if(!this.a.a2(a,"is",g)){this.ar(a,b)
window
t="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(t)
return}t=f.gH(f)
s=H.B(t.slice(0),[H.al(t,0)])
for(r=f.gH(f).length-1,t=f.a,q=J.j(t);r>=0;--r){p=s[r]
if(!this.a.a2(a,J.ml(p),q.aj(t,p))){window
o="Removing disallowed attribute <"+H.f(e)+" "+p+'="'+H.f(q.aj(t,p))+'">'
if(typeof console!="undefined")window.console.warn(o)
q.aj(t,p)
q.ec(t,p)}}if(!!J.r(a).$isbG)this.bx(a.content)}}
W.iz.prototype={
$2:function(a,b){var t,s,r,q
r=this.a
switch(a.nodeType){case 1:r.ej(a,b)
break
case 8:case 11:case 3:case 4:break
default:r.ar(a,b)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.m6(t)}catch(q){H.N(q)
r=t
J.ja(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(a,b){return{func:1,v:true,args:[W.t,W.t]}}}
W.d3.prototype={}
W.d4.prototype={}
W.d5.prototype={}
W.d6.prototype={}
W.d7.prototype={}
W.d8.prototype={}
W.d9.prototype={}
W.da.prototype={}
W.db.prototype={}
W.de.prototype={}
W.df.prototype={}
W.dh.prototype={}
W.di.prototype={}
W.dl.prototype={}
W.dm.prototype={}
W.bU.prototype={}
W.bV.prototype={}
W.dn.prototype={}
W.dp.prototype={}
W.dt.prototype={}
W.dw.prototype={}
W.dx.prototype={}
W.bW.prototype={}
W.bX.prototype={}
W.dy.prototype={}
W.dz.prototype={}
W.dD.prototype={}
W.dE.prototype={}
W.dF.prototype={}
W.dG.prototype={}
W.dH.prototype={}
W.dI.prototype={}
W.dJ.prototype={}
W.dK.prototype={}
W.dL.prototype={}
W.dM.prototype={}
P.iF.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(a,b){return{func:1,args:[,,]}}}
P.ib.prototype={
f5:function(){return Math.random()}}
P.ik.prototype={}
P.W.prototype={}
P.eo.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ep.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eq.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.er.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.es.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.et.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eu.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ev.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ew.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ex.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ey.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ez.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eA.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eB.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
P.eC.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eD.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
P.eE.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eF.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eI.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eK.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.a5.prototype={}
P.ac.prototype={}
P.eS.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.f2.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return this.a6(a,b)},
j:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
a6:function(a,b){return a.getItem(b)},
$isk:1,
$ask:function(){return[P.ju]},
$asm:function(){return[P.ju]},
$isi:1,
$asi:function(){return[P.ju]},
$asn:function(){return[P.ju]}}
P.fc.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fd.prototype={
gX:function(a){return a.a},
gR:function(a){return a.b},
ga3:function(a){return a.c}}
P.fu.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return this.a6(a,b)},
j:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
a6:function(a,b){return a.getItem(b)},
$isk:1,
$ask:function(){return[P.jC]},
$asm:function(){return[P.jC]},
$isi:1,
$asi:function(){return[P.jC]},
$asn:function(){return[P.jC]}}
P.fB.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fF.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fG.prototype={
gk:function(a){return a.length}}
P.fJ.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fK.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bD.prototype={$isbD:1}
P.hb.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return this.a6(a,b)},
j:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
a6:function(a,b){return a.getItem(b)},
$isk:1,
$ask:function(){return[P.p]},
$asm:function(){return[P.p]},
$isi:1,
$asi:function(){return[P.p]},
$asn:function(){return[P.p]}}
P.w.prototype={
S:function(a,b,c,d){var t,s,r,q,p,o
t=H.B([],[W.cI])
C.a.i(t,W.lc(null))
C.a.i(t,W.lg())
C.a.i(t,new W.iv())
c=new W.dC(new W.cJ(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.o).eG(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.R(q)
o=t.gab(t)
for(t=J.j(p);r=o.firstChild,r!=null;)t.Y(p,r)
return p},
$isw:1}
P.hc.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bH.prototype={}
P.bI.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.hp.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return this.a6(a,b)},
j:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
a6:function(a,b){return a.getItem(b)},
$isk:1,
$ask:function(){return[P.jH]},
$asm:function(){return[P.jH]},
$isi:1,
$asi:function(){return[P.jH]},
$asn:function(){return[P.jH]}}
P.hx.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dc.prototype={}
P.dd.prototype={}
P.dj.prototype={}
P.dk.prototype={}
P.du.prototype={}
P.dv.prototype={}
P.dA.prototype={}
P.dB.prototype={}
P.dX.prototype={
gk:function(a){return a.length}}
P.dY.prototype={
gk:function(a){return a.length}}
P.aT.prototype={}
P.fv.prototype={
gk:function(a){return a.length}}
P.fO.prototype={
c4:function(a,b){return a.activeTexture(b)},
c7:function(a,b,c){return a.attachShader(b,c)},
c8:function(a,b,c){return a.bindBuffer(b,c)},
c9:function(a,b,c){return a.bindFramebuffer(b,c)},
ca:function(a,b,c){return a.bindTexture(b,c)},
cb:function(a,b){return a.blendEquation(b)},
cc:function(a,b,c){return a.blendFunc(b,c)},
cd:function(a,b,c,d){return a.bufferData(b,c,d)},
ce:function(a,b){return a.clear(b)},
cf:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
cg:function(a,b){return a.compileShader(b)},
ci:function(a){return a.createBuffer()},
cj:function(a){return a.createProgram()},
cl:function(a,b){return a.createShader(b)},
cm:function(a){return a.createTexture()},
co:function(a,b){return a.depthMask(b)},
cp:function(a,b){return a.disable(b)},
cq:function(a,b,c,d){return a.drawArrays(b,c,d)},
cr:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cs:function(a,b){return a.enable(b)},
ct:function(a,b){return a.enableVertexAttribArray(b)},
aT:function(a){return P.iG(a.getContextAttributes())},
br:function(a){return a.getError()},
bs:function(a,b){return a.getProgramInfoLog(b)},
bt:function(a,b,c){return a.getProgramParameter(b,c)},
bu:function(a,b){return a.getShaderInfoLog(b)},
bv:function(a,b,c){return a.getShaderParameter(b,c)},
bw:function(a,b,c){return a.getUniformLocation(b,c)},
cw:function(a,b){return a.linkProgram(b)},
cD:function(a,b,c){return a.pixelStorei(b,c)},
bz:function(a,b,c){return a.shaderSource(b,c)},
bB:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bn:function(a,b,c,d,e,f,g,h,i,j){var t,s
t=J.r(g)
if(!!t.$isb0)s=!0
else s=!1
if(s){this.ba(a,b,c,d,e,f,P.lr(g))
return}if(!!t.$isb1)s=!0
else s=!1
if(s){this.bb(a,b,c,d,e,f,g)
return}if(!!t.$isaw)s=!0
else s=!1
if(s){this.bc(a,b,c,d,e,f,g)
return}if(!!t.$isb9)s=!0
else s=!1
if(s){this.bd(a,b,c,d,e,f,g)
return}if(!!t.$isb_)t=!0
else t=!1
if(t){this.be(a,b,c,d,e,f,g)
return}throw H.c(P.dV("Incorrect number or type of arguments"))},
cI:function(a,b,c,d,e,f,g){return this.bn(a,b,c,d,e,f,g,null,null,null)},
ba:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bb:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bc:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bd:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
be:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cJ:function(a,b,c,d){return a.texParameterf(b,c,d)},
cK:function(a,b,c,d){return a.texParameteri(b,c,d)},
cM:function(a,b,c){return a.uniform1f(b,c)},
cN:function(a,b,c){return a.uniform1fv(b,c)},
cO:function(a,b,c){return a.uniform1i(b,c)},
cP:function(a,b,c){return a.uniform1iv(b,c)},
cQ:function(a,b,c){return a.uniform2fv(b,c)},
cR:function(a,b,c){return a.uniform3fv(b,c)},
cS:function(a,b,c){return a.uniform4fv(b,c)},
cT:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cU:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cW:function(a,b){return a.useProgram(b)},
cY:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
d_:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fP.prototype={
ev:function(a,b){return a.beginTransformFeedback(b)},
ey:function(a,b){return a.bindVertexArray(b)},
eI:function(a){return a.createVertexArray()},
eP:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
eQ:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
eR:function(a){return a.endTransformFeedback()},
fk:function(a,b,c,d){this.em(a,b,c,d)
return},
em:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
fl:function(a,b,c){return a.vertexAttribDivisor(b,c)},
c4:function(a,b){return a.activeTexture(b)},
c7:function(a,b,c){return a.attachShader(b,c)},
c8:function(a,b,c){return a.bindBuffer(b,c)},
c9:function(a,b,c){return a.bindFramebuffer(b,c)},
ca:function(a,b,c){return a.bindTexture(b,c)},
cb:function(a,b){return a.blendEquation(b)},
cc:function(a,b,c){return a.blendFunc(b,c)},
cd:function(a,b,c,d){return a.bufferData(b,c,d)},
ce:function(a,b){return a.clear(b)},
cf:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
cg:function(a,b){return a.compileShader(b)},
ci:function(a){return a.createBuffer()},
cj:function(a){return a.createProgram()},
cl:function(a,b){return a.createShader(b)},
cm:function(a){return a.createTexture()},
co:function(a,b){return a.depthMask(b)},
cp:function(a,b){return a.disable(b)},
cq:function(a,b,c,d){return a.drawArrays(b,c,d)},
cr:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cs:function(a,b){return a.enable(b)},
ct:function(a,b){return a.enableVertexAttribArray(b)},
aT:function(a){return P.iG(a.getContextAttributes())},
br:function(a){return a.getError()},
bs:function(a,b){return a.getProgramInfoLog(b)},
bt:function(a,b,c){return a.getProgramParameter(b,c)},
bu:function(a,b){return a.getShaderInfoLog(b)},
bv:function(a,b,c){return a.getShaderParameter(b,c)},
bw:function(a,b,c){return a.getUniformLocation(b,c)},
cw:function(a,b){return a.linkProgram(b)},
cD:function(a,b,c){return a.pixelStorei(b,c)},
bz:function(a,b,c){return a.shaderSource(b,c)},
bB:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bn:function(a,b,c,d,e,f,g,h,i,j){var t,s
t=J.r(g)
if(!!t.$isb0)s=!0
else s=!1
if(s){this.ba(a,b,c,d,e,f,P.lr(g))
return}if(!!t.$isb1)s=!0
else s=!1
if(s){this.bb(a,b,c,d,e,f,g)
return}if(!!t.$isaw)s=!0
else s=!1
if(s){this.bc(a,b,c,d,e,f,g)
return}if(!!t.$isb9)s=!0
else s=!1
if(s){this.bd(a,b,c,d,e,f,g)
return}if(!!t.$isb_)t=!0
else t=!1
if(t){this.be(a,b,c,d,e,f,g)
return}throw H.c(P.dV("Incorrect number or type of arguments"))},
cI:function(a,b,c,d,e,f,g){return this.bn(a,b,c,d,e,f,g,null,null,null)},
ba:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bb:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bc:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bd:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
be:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cJ:function(a,b,c,d){return a.texParameterf(b,c,d)},
cK:function(a,b,c,d){return a.texParameteri(b,c,d)},
cM:function(a,b,c){return a.uniform1f(b,c)},
cN:function(a,b,c){return a.uniform1fv(b,c)},
cO:function(a,b,c){return a.uniform1i(b,c)},
cP:function(a,b,c){return a.uniform1iv(b,c)},
cQ:function(a,b,c){return a.uniform2fv(b,c)},
cR:function(a,b,c){return a.uniform3fv(b,c)},
cS:function(a,b,c){return a.uniform4fv(b,c)},
cT:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cU:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cW:function(a,b){return a.useProgram(b)},
cY:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
d_:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.h_.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return P.iG(this.e7(a,b))},
j:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
e7:function(a,b){return a.item(b)},
$isk:1,
$ask:function(){return[P.b4]},
$asm:function(){return[P.b4]},
$isi:1,
$asi:function(){return[P.b4]},
$asn:function(){return[P.b4]}}
P.dq.prototype={}
P.dr.prototype={}
B.j2.prototype={
$1:function(a){$.$get$iH().j(0,a.which,!0)},
$S:function(a){return{func:1,args:[W.aF]}}}
B.j3.prototype={
$1:function(a){$.$get$iH().j(0,a.which,null)},
$S:function(a){return{func:1,args:[W.aF]}}}
B.j4.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.nI=t
$.nJ=C.b.ac(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.jZ=s-C.b.N(window.innerWidth,2)
$.lz=-(t-C.b.N(window.innerHeight,2))},
$S:function(a){return{func:1,args:[W.P]}}}
B.j5.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.c4=t-C.b.N(window.innerWidth,2)
$.c5=-(s-C.b.N(window.innerHeight,2))
if(a.button===2)$.$get$c2().j(0,"right",!0)
else $.$get$c2().j(0,"left",!0)},
$S:function(a){return{func:1,args:[W.P]}}}
B.j6.prototype={
$1:function(a){if(a.button===2)$.$get$c2().j(0,"right",null)
else $.$get$c2().j(0,"left",null)},
$S:function(a){return{func:1,args:[W.P]}}}
B.fw.prototype={
dE:function(a,b,c,d){var t
d.toString
W.a6(d,W.mH(d),new B.fx(this),!1,W.aN)
W.a6(d,"mousemove",new B.fy(this),!1,W.P)
t=W.aK
W.a6(d,"touchstart",new B.fz(),!1,t)
W.a6(d,"touchmove",new B.fA(this),!1,t)
B.o4(null)}}
B.fx.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.aw.geJ(a)*r.k3
if(C.c.ac(r.fy,t)>0)r.fy=C.c.ac(r.fy,t)}catch(q){s=H.N(q)
P.aa(s)}},
$S:function(a){return{func:1,args:[W.aN]}}}
B.fy.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=t.go+C.b.ac($.jZ,$.c4)*0.01
s=t.id
r=$.c5
q=$.lz
t.id=s+(r-q)*0.01
$.c4=$.jZ
$.c5=q}},
$S:function(a){return{func:1,args:[W.P]}}}
B.fz.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.ah(t.clientX)
C.c.ah(t.clientY)
$.c4=s
C.c.ah(t.clientX)
$.c5=C.c.ah(t.clientY)},
$S:function(a){return{func:1,args:[W.aK]}}}
B.fA.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.ah(t.clientX)
t=C.c.ah(t.clientY)
r=this.a
r.go=r.go+C.b.ac(s,$.c4)*0.01
r.id=r.id+($.c5-t)*0.01
$.c4=s
$.c5=t},
$S:function(a){return{func:1,args:[W.aK]}}}
G.fi.prototype={}
G.d0.prototype={
J:function(a,b){var t=this.d
if(H.aj(!t.K(0,a)))H.at("uniform "+a+" already set")
t.j(0,a,b)},
bI:function(){return this.d},
l:function(a){var t,s,r,q
t=H.B(["{"+new H.ar(H.iM(this),null).l(0)+"}["+this.a+"]"],[P.p])
for(s=this.d,r=s.gH(s),r=r.gC(r);r.q();){q=r.gt(r)
C.a.i(t,H.f(q)+": "+H.f(s.h(0,q)))}return C.a.ag(t,"\n")}}
G.dZ.prototype={}
G.e0.prototype={
cu:function(a,b,c){J.m3(this.a,b)
if(c>0)J.mr(this.a,b,c)},
cZ:function(a,b,c,d,e,f,g,h){J.jc(this.a,34962,b)
J.ms(this.a,c,d,e,!1,g,h)}}
G.eM.prototype={}
G.a4.prototype={
gX:function(a){return this.a},
gR:function(a){return this.b},
ga3:function(a){return this.c}}
G.aY.prototype={
gX:function(a){return this.a},
gR:function(a){return this.b},
ga3:function(a){return this.c}}
G.aB.prototype={
V:function(a){var t=this.e
H.b(!t.K(0,a))
H.b(C.i.bA(a,"a"))
switch($.$get$S().h(0,a).a){case"vec2":t.j(0,a,H.B([],[T.o]))
break
case"vec3":t.j(0,a,H.B([],[T.e]))
break
case"vec4":t.j(0,a,H.B([],[T.as]))
break
case"float":t.j(0,a,H.B([],[P.X]))
break
case"uvec4":t.j(0,a,H.B([],[[P.i,P.z]]))
break
default:if(H.aj(!1))H.at("unknown type for "+a)}},
dq:function(a){var t,s,r
H.b(!0)
t=this.d.length
for(s=this.c,r=0;r<a;++r,t+=4)C.a.i(s,new G.aY(t,t+1,t+2,t+3))},
am:function(a){var t,s,r,q,p
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.C)(a),++r){q=a[r]
p=new T.e(new Float32Array(3))
p.w(q)
C.a.i(s,p)}},
dr:function(a){var t,s,r,q,p
H.b(!0)
t=this.d
s=t.length
C.a.i(this.b,new G.a4(s,s+1,s+2))
for(r=0;r<3;++r){q=a[r]
p=new T.e(new Float32Array(3))
p.w(q)
C.a.i(t,p)}},
aC:function(a,b){var t,s,r,q,p,o,n
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.C)(b),++q){p=b[q]
o=new Float32Array(2)
n=p.a
o[1]=n[1]
o[0]=n[0]
r.i(t,new T.o(o))}},
aD:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.C)(b),++q){p=b[q]
o=new T.e(new Float32Array(3))
o.w(p)
r.i(t,o)}},
ds:function(a){var t,s,r,q,p
H.b(!0)
t=this.d
s=t.length
C.a.i(this.c,new G.aY(s,s+1,s+2,s+3))
for(r=0;r<4;++r){q=a[r]
p=new T.e(new Float32Array(3))
p.w(q)
C.a.i(t,p)}},
dw:function(){var t,s,r,q,p,o,n,m,l
t=this.b
H.b(t.length>0||this.c.length>0)
s=this.c
r=new Array(t.length*3+s.length*6)
r.fixed$length=Array
q=H.B(r,[P.z])
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
dA:function(a,b){var t,s,r,q,p,o,n,m
t=a*b
H.b(this.d.length===t)
s=[]
this.e.j(0,"aTexUV",s)
for(r=b-1,q=a-1,p=0;p<b;++p)for(o=p/r,n=0;n<a;++n){m=new Float32Array(2)
m[0]=o
m[1]=n/q
C.a.i(s,new T.o(m))}H.b(s.length===t)},
dz:function(a,b,c){var t,s,r,q,p,o,n,m,l
H.b(this.d.length===a*b)
t=this.c
s=a-1
r=b-1
q=0
while(!0){if(!(q<r))break
p=q*a
o=q+1
n=0
while(!0){if(!(n<s))break
m=n+1
l=o*a
H.b(!0)
C.a.i(t,new G.aY(p+m,l+m,l+n,p+n))
n=m}q=o}},
l:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gH(s),r=r.gC(r);r.q();){q=r.gt(r)
p=$.$get$S().h(0,q).a
C.a.i(t,H.f(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.ag(t," ")}}
G.cY.prototype={}
G.cX.prototype={}
G.cA.prototype={
dD:function(a){this.J("cDepthTest",!0)
this.J("cDepthWrite",!0)
this.J("cBlendEquation",$.$get$kf())
this.J("cStencilFunc",$.$get$jD())}}
G.ff.prototype={
bF:function(a,b,c){var t,s
if(C.i.aZ(a,0)===105){if(H.aj(C.b.aW(b.length,c)===this.z))H.at("ChangeAttribute "+this.z)}else{t=C.b.aW(b.length,c)
if(H.aj(t===(this.ch.length/3|0)))H.at("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}this.cy.j(0,a,b)
t=this.d
s=this.r.h(0,a)
J.jc(t.a,34962,s)
J.k3(t.a,34962,b,35048)},
bG:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
al:function(a,b,c){var t,s,r,q,p,o
t=J.k0(a,0)===105
if(t&&this.z===0)this.z=C.b.aW(b.length,c)
s=this.r
r=this.d
s.j(0,a,J.je(r.a))
this.bF(a,b,c)
q=$.$get$S().h(0,a)
if(q==null)throw H.c("Unknown canonical "+a)
p=this.x
if(H.aj(p.K(0,a)))H.at("unexpected attribute "+a)
o=p.h(0,a)
J.dR(r.a,this.e)
r.cu(0,o,t?1:0)
r.cZ(0,s.h(0,a),o,q.bH(),5126,!1,0,0)},
am:function(a){var t,s,r,q,p
t=this.r
s=this.d
t.j(0,"aPosition",J.je(s.a))
this.ch=a
this.bF("aPosition",a,3)
r=$.$get$S().h(0,"aPosition")
if(r==null)throw H.c("Unknown canonical aPosition")
q=this.x
H.b(q.K(0,"aPosition"))
p=q.h(0,"aPosition")
J.dR(s.a,this.e)
s.cu(0,p,0)
s.cZ(0,t.h(0,"aPosition"),p,r.bH(),5126,!1,0,0)},
l:function(a){var t,s,r,q
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,r=t.gH(t),r=r.gC(r);r.q();){q=r.gt(r)
C.a.i(s,H.f(q)+":"+t.h(0,q).length)}return"MESH["+this.a+"] "+C.a.ag(s,"  ")},
sb3:function(a){this.cx=a}}
G.fC.prototype={
dt:function(a,b){var t=C.b.d1(a,b)
if(this.z===t)return
this.z=t
this.bJ()},
bJ:function(){var t,s,r,q,p,o,n
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
t.ak(0,0,1/(p*s))
t.ak(1,1,1/p)
t.ak(2,2,(q+r)/o)
t.ak(3,2,-1)
t.ak(2,3,2*r*q/o)},
bI:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.e(new Float32Array(3))
o.p(r,q,p)
p=this.d
p.j(0,"uEyePosition",o)
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
s=J.r(n)
r=!!s.$isas
k=r?s.gaR(n):1
if(!!s.$ise){j=s.gm(n)
m=s.gn(n)
l=s.gG(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
l=s.gG(n)
n=j}else if(!(typeof n==="number")){n=null
m=null
l=null}s=C.c.L(t[0],n)
r=C.c.L(t[4],m)
q=C.c.L(t[8],l)
i=t[12]
h=C.c.L(t[1],n)
g=C.c.L(t[5],m)
f=C.c.L(t[9],l)
e=t[13]
d=C.c.L(t[2],n)
c=C.c.L(t[6],m)
b=C.c.L(t[10],l)
a=t[14]
a0=C.c.L(t[3],n)
a1=C.c.L(t[7],m)
a2=C.c.L(t[11],l)
a3=t[15]
t[12]=s+r+q+i*k
t[13]=h+g+f+e*k
t[14]=d+c+b+a*k
t[15]=a0+a1+a2+a3*k
a3=this.cx
a3.w(this.db)
a3.cC(0,o)
p.j(0,"uPerspectiveViewMatrix",a3)
return p}}
G.ei.prototype={
l:function(a){return"["+this.a+"] "+this.b+" "+this.c+" mode:"+this.d+" ["+this.e.a+"usec]"}}
G.fN.prototype={
dG:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.C)(t),++o){n=t[o]
r.j(0,n,J.k6(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.C)(t),++o){n=t[o]
r.j(0,n,J.k6(q.a,p,n))}},
dL:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gk(t)===s.gk(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gH(s),s=s.gC(s);s.q();){q=s.gt(s)
if(!t.K(0,q))C.a.i(r,q)}for(t=this.x,s=new P.bN(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.q();){q=s.d
if(!t.F(0,q))C.a.i(r,q)}return r},
dN:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gH(b),s=s.gC(s),r=this.d,q=this.y,p=this.z,o=0;s.q();){n=s.gt(s)
switch(J.k0(n,0)){case 117:if(q.K(0,n)){m=b.h(0,n)
if(p.K(0,n))H.j0("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.j(0,n,a)
l=$.$get$S().h(0,n)
if(l==null)H.M("unknown "+n)
H.b(q.K(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.jj(r.a,k,m)
else if(!!J.r(m).$iskF)J.mp(r.a,k,m)
break
case"float":if(l.c===0)J.mn(r.a,k,m)
else if(!!J.r(m).$iseJ)J.mo(r.a,k,m)
break
case"mat4":if(l.c===0){n=H.au(m,"$isD").a
J.kd(r.a,k,!1,n)}else if(!!J.r(m).$iseJ)J.kd(r.a,k,!1,m)
else if(H.aj(!1))H.at("bad unform: "+n)
break
case"mat3":if(l.c===0){n=H.au(m,"$isa0").a
J.kc(r.a,k,!1,n)}else if(!!J.r(m).$iseJ)J.kc(r.a,k,!1,m)
else if(H.aj(!1))H.at("bad unform: "+n)
break
case"vec4":n=l.c
j=r.a
if(n===0)J.kb(j,k,H.au(m,"$isas").a)
else J.kb(j,k,m)
break
case"vec3":n=l.c
j=r.a
if(n===0)J.ka(j,k,H.au(m,"$ise").a)
else J.ka(j,k,m)
break
case"vec2":n=l.c
j=r.a
if(n===0)J.k9(j,k,H.au(m,"$iso").a)
else J.k9(j,k,m)
break
case"sampler2D":case"sampler2DShadow":n=C.b.a9(33984,this.ch)
J.k1(r.a,n)
n=H.au(m,"$isbJ").b
J.c6(r.a,3553,n)
n=this.ch
J.jj(r.a,k,n)
this.ch=this.ch+1
break
case"samplerCube":H.b(n==="uCubeTexture")
n=C.b.a9(33984,this.ch)
J.k1(r.a,n)
n=H.au(m,"$isbJ").b
J.c6(r.a,34067,n)
n=this.ch
J.jj(r.a,k,n)
this.ch=this.ch+1
break
default:H.j0("Error: unknow uniform type: "+j)
H.b(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":n=J.E(m,!0)
j=r.a
if(n)J.c7(j,2929)
else J.jf(j,2929)
break
case"cStencilFunc":H.au(m,"$iscY")
n=m.a
j=r.a
if(n===1281)J.jf(j,2960)
else{J.c7(j,2960)
j=m.b
i=m.c
J.mi(r.a,n,j,i)}break
case"cDepthWrite":J.lY(r.a,m)
break
case"cBlendEquation":H.au(m,"$iscX")
n=m.a
j=r.a
if(n===1281)J.jf(j,3042)
else{J.c7(j,3042)
j=m.b
i=m.c
J.lR(r.a,j,i)
J.lQ(r.a,n)}break}++o
break}}h=P.kx(0,0,0,Date.now()-new P.aW(t,!1).a,0,0)
""+o
h.l(0)},
dv:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t=Date.now()
s=this.d
J.mq(s.a,this.r)
this.ch=0
this.z.a4(0)
for(r=b.length,q=0;q<b.length;b.length===r||(0,H.C)(b),++q){p=b[q]
this.dN(p.a,p.bI())}r=this.Q
r.a4(0)
for(o=a.cy,o=o.gH(o),o=o.gC(o);o.q();)r.i(0,o.gt(o))
n=this.dL()
if(n.length!==0)P.aa("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.f(n)))
J.dR(a.d.a,a.e)
m=this.e.f.length>0
r=a.f
o=a.bG()
l=a.Q
k=a.z
if(m)J.lO(s.a,r)
if(l!==-1){j=s.a
if(k>1)J.m1(j,r,o,l,0,k)
else J.m0(j,r,o,l,0)}else{l=s.a
if(k>1)J.m_(l,r,0,o,k)
else J.lZ(l,r,0,o)}if(m)J.m4(s.a)
C.a.i(c,new G.ei(this.a,a.z,a.bG(),r,P.kx(0,0,0,Date.now()-new P.aW(t,!1).a,0,0)))}}
G.y.prototype={
bH:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.b(!1)
return-1}}}
G.fU.prototype={
bD:function(a){var t,s,r,q,p
H.b(this.b==null)
for(t=a.length,s=this.c,r=this.x,q=0;q<a.length;a.length===t||(0,H.C)(a),++q){p=a[q]
H.b($.$get$S().K(0,p))
H.b(!C.a.F(s,p))
C.a.i(s,p)
r.j(0,p,this.r);++this.r}C.a.aU(s)},
aE:function(a){var t,s,r,q
H.b(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.C)(a),++r){q=a[r]
if(H.aj($.$get$S().K(0,q)))H.at("missing uniform "+q)
H.b(!C.a.F(s,q))
C.a.i(s,q)}C.a.aU(s)},
bE:function(a){var t,s,r
H.b(this.b==null)
for(t=this.e,s=0;s<1;++s){r=a[s]
H.b($.$get$S().K(0,r))
H.b(!C.a.F(t,r))
C.a.i(t,r)}C.a.aU(t)},
dH:function(a,b){H.b(this.b==null)
this.b=this.dO(!0,a,b)},
aF:function(a){return this.dH(a,null)},
dO:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.b(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.C)(t),++o){n=t[o]
m=$.$get$S().h(0,n)
C.a.i(q,"layout (location="+H.f(p.h(0,n))+") in "+m.a+" "+H.f(n)+";")}C.a.i(q,"")
l=r?"in":"out"
if(r)C.a.i(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.C)(t),++o){k=t[o]
m=$.$get$S().h(0,k)
C.a.i(q,l+" "+m.a+" "+H.f(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.C)(t),++o){k=t[o]
m=$.$get$S().h(0,k)
C.a.i(q,l+" "+m.a+" "+H.f(k)+";")}C.a.i(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.C)(t),++o){k=t[o]
m=$.$get$S().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.i(q,"uniform "+m.a+" "+H.f(k)+j+";")}C.a.i(q,"")
C.a.i(q,"void main(void) {")
C.a.O(q,b)
C.a.i(q,"}")
return C.a.ag(q,"\n")}}
G.fY.prototype={
aa:function(a,b,c){var t=this.d.a
t[12]=a
t[13]=b
t[14]=c}}
G.hi.prototype={}
G.bJ.prototype={
l:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.eT.prototype={
dB:function(a,b,c,d,e){var t,s,r,q
t=this.d
s=this.c
J.c6(t.a,s,this.b)
J.mg(t.a,37440,1)
this.dI(this.f)
r=this.e
q=r.e
if(q!==1)J.mk(t.a,s,34046,q)
J.k8(t.a,s,10240,r.r)
J.k8(t.a,s,10241,r.f)
H.b(J.mb(t.a)===0)
J.c6(t.a,s,null)},
dI:function(a){var t,s
t=this.d
s=this.c
J.c6(t.a,s,this.b)
J.mj(t.a,s,0,6408,6408,5121,a)}}
R.cN.prototype={
cF:function(a){var t,s,r
t=this.db
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.aa("size change "+H.f(s)+" "+H.f(r))
this.dx.dt(s,r)
this.z=s
this.Q=r}}
R.h2.prototype={
dJ:function(a,b,c){var t,s,r
if(a==null)throw H.c("no element provided")
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
J.jb(this.a,s)
r=this.dS(b,c,90,30)
this.d=r
J.jb(this.a,r)
t=t.createElement("div")
this.c=t
J.jb(this.a,t)},
dS:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.nn("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.x).bO(r,"float")
r.setProperty(p,"left","")
p=C.x.bO(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.q.Y(t,s)}return t}}
R.h3.prototype={
dM:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.z.fj(s,2)+" fps"
t=this.c;(t&&C.q).de(t,b)
r=C.b.N(30*C.z.eA(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.q).Y(t,q)}}
A.ap.prototype={
l:function(a){return"NODE["+this.a+"]"}}
A.bC.prototype={}
A.fM.prototype={
dF:function(a,b,c){if(this.d==null)this.d=new G.eM(this.e,null,null,null,null)},
du:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.d
s=this.r
r=this.z
q=this.Q
p=t.a
t=t.b
J.lP(p.a,36160,t)
H.b(r>0&&q>0)
J.mt(p.a,this.x,this.y,r,q)
if(s!==0)J.lS(p.a,s)
for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.C)(t),++o){n=t[o]
m=n.e
C.a.i(m,new G.d0(P.L(),"transforms",!1,!0))
l=new T.D(new Float32Array(16))
l.I()
for(r=n.f,q=r.length,p=n.d,k=0;k<r.length;r.length===q||(0,H.C)(r),++k)A.ls(p,r[k],l,a,m)
m.pop()}}}
B.fW.prototype={
$2:function(a,b){var t,s,r,q,p,o
t=this.c
s=this.a*a
r=Math.cos(s)
q=Math.sin(s)
s=this.b*a
p=Math.cos(s)
o=Math.sin(s)
s=t*(2+r)*0.5
b.sm(0,s*p)
b.sn(0,s*o)
b.sG(0,this.d*t*0.5*q)},
$S:function(a,b){return{func:1,v:true,args:[P.X,T.e]}}}
D.f7.prototype={
$1:function(a){return this.a.bh(0,this.b)},
$S:function(a){return{func:1,args:[,]}}}
A.iN.prototype={
$2:function(a,b){var t=536870911&a+J.bm(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(a,b){return{func:1,args:[P.z,P.F]}}}
T.a0.prototype={
w:function(a){var t,s
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
l:function(a){return"[0] "+this.a_(0).l(0)+"\n[1] "+this.a_(1).l(0)+"\n[2] "+this.a_(2).l(0)+"\n"},
h:function(a,b){return this.a[b]},
B:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.a0){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gA:function(a){return A.dO(this.a)},
a_:function(a){var t,s
t=new Float32Array(3)
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.e(t)},
eE:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
if(g===0){this.w(a)
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
T.D.prototype={
ak:function(a,b,c){H.b(a<4)
H.b(b<4)
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
l:function(a){return"[0] "+this.a_(0).l(0)+"\n[1] "+this.a_(1).l(0)+"\n[2] "+this.a_(2).l(0)+"\n[3] "+this.a_(3).l(0)+"\n"},
h:function(a,b){return this.a[b]},
B:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.D){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gA:function(a){return A.dO(this.a)},
a_:function(a){var t,s
t=new Float32Array(4)
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.as(t)},
I:function(){var t=this.a
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
cC:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
u:function(a,b){var t=this.a
t[0]=a
t[1]=b},
l:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+"]"},
B:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.o){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gA:function(a){return A.dO(this.a)},
h:function(a,b){return this.a[b]},
gk:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.e.prototype={
p:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
w:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
l:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+"]"},
B:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.e){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gA:function(a){return A.dO(this.a)},
h:function(a,b){return this.a[b]},
gk:function(a){return Math.sqrt(this.gT())},
gT:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
D:function(a){var t,s,r
t=Math.sqrt(this.gT())
if(t===0)return 0
s=1/t
r=this.a
r[0]=r[0]*s
r[1]=r[1]*s
r[2]=r[2]*s
return t},
bi:function(a){var t,s
t=a.a
s=this.a
return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]},
cn:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.e(new Float32Array(3))
t.p(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
i:function(a,b){var t,s
t=b.a
s=this.a
s[0]=s[0]+t[0]
s[1]=s[1]+t[1]
s[2]=s[2]+t[2]},
aM:function(a,b){var t,s
t=a.a
s=this.a
s[0]=s[0]+t[0]*b
s[1]=s[1]+t[1]*b
s[2]=s[2]+t[2]*b},
aB:function(a,b){var t,s
t=b.a
s=this.a
s[0]=s[0]-t[0]
s[1]=s[1]-t[1]
s[2]=s[2]-t[2]},
a8:function(a,b){var t=this.a
t[2]=t[2]*b
t[1]=t[1]*b
t[0]=t[0]*b},
sm:function(a,b){this.a[0]=b
return b},
sn:function(a,b){this.a[1]=b
return b},
sG:function(a,b){this.a[2]=b
return b},
gR:function(a){return this.a[2]},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gG:function(a){return this.a[2]}}
T.as.prototype={
l:function(a){var t=this.a
return H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+","+H.f(t[3])},
B:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.as){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gA:function(a){return A.dO(this.a)},
h:function(a,b){return this.a[b]},
gk:function(a){var t,s,r,q
t=this.a
s=t[0]
r=t[1]
q=t[2]
t=t[3]
return Math.sqrt(s*s+r*r+q*q+t*t)},
gR:function(a){return this.a[2]},
gX:function(a){return this.a[3]},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gG:function(a){return this.a[2]},
gaR:function(a){return this.a[3]}}
V.iY.prototype={
$1:function(b9){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
t=this.a
t.a=b9+0
s=this.b
s.go+=0.001
r=s.k4
if(r.h(0,37)!=null)s.go+=0.03
else if(r.h(0,39)!=null)s.go-=0.03
if(r.h(0,38)!=null)s.id+=0.03
else if(r.h(0,40)!=null)s.id-=0.03
if(r.h(0,33)!=null)s.fy*=0.99
else if(r.h(0,34)!=null)s.fy*=1.01
if(r.h(0,32)!=null){s.go=0
s.id=0}r=C.c.eB(s.id,-1.4707963267948965,1.4707963267948965)
s.id=r
q=s.fy
p=s.go
o=q*Math.cos(r)
s.aa(o*Math.cos(p),q*Math.sin(r),o*Math.sin(p))
p=s.k2
r=s.d.a
q=p.a
r[12]=r[12]+q[0]
r[13]=r[13]+q[1]
r[14]=r[14]+q[2]
n=r[12]
m=r[13]
l=r[14]
k=new T.e(new Float32Array(3))
k.p(0,1,0)
q=s.e
j=q.a
j[0]=r[12]
j[1]=r[13]
j[2]=r[14]
j=new Float32Array(3)
i=new T.e(j)
i.w(q)
i.aB(0,p)
i.D(0)
h=k.cn(i)
h.D(0)
g=i.cn(h)
g.D(0)
p=h.bi(q)
f=g.bi(q)
q=i.bi(q)
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
r[14]=-q
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
r[12]=n
r[13]=m
r[14]=l
d=s.f
b=d.a
b[0]=r[2]
b[1]=r[6]
b[2]=r[10]
s=-s.k1
a3=Math.sqrt(d.gT())
n=b[0]/a3
m=b[1]/a3
l=b[2]/a3
a4=Math.cos(s)
a5=Math.sin(s)
a6=1-a4
a7=n*n*a6+a4
s=l*a5
a8=n*m*a6-s
b=m*a5
a9=n*l*a6+b
b0=m*n*a6+s
b1=m*m*a6+a4
s=n*a5
b2=m*l*a6-s
b3=l*n*a6-b
b4=l*m*a6+s
b5=l*l*a6+a4
s=r[0]
b=r[4]
d=r[8]
a=r[1]
a0=r[5]
a1=r[9]
a2=r[2]
e=r[6]
c=r[10]
j=r[3]
p=r[7]
f=r[11]
r[0]=s*a7+b*b0+d*b3
r[1]=a*a7+a0*b0+a1*b3
r[2]=a2*a7+e*b0+c*b3
r[3]=j*a7+p*b0+f*b3
r[4]=s*a8+b*b1+d*b4
r[5]=a*a8+a0*b1+a1*b4
r[6]=a2*a8+e*b1+c*b4
r[7]=j*a8+p*b1+f*b4
r[8]=s*a9+b*b2+d*b5
r[9]=a*a9+a0*b2+a1*b5
r[10]=a2*a9+e*b2+c*b5
r[11]=j*a9+p*b2+f*b5
b6=[]
this.c.du(b6)
b7=[]
for(s=b6.length,b8=0;b8<b6.length;b6.length===s||(0,H.C)(b6),++b8)C.a.i(b7,b6[b8].l(0))
C.ax.ges(window).aQ(this)
this.d.dM(t.a,C.a.ag(b7,"<br>"))},
$S:function(a){return{func:1,v:true,args:[P.a9]}}}
V.iZ.prototype={
$1:function(a){var t,s
t=this.a
s=J.U(a)
this.b.J("uTexture",G.eU(t,"../gradient.jpg",s.h(a,0),null,3553))
this.c.J("uTexture",G.eU(t,"../transparent.png",s.h(a,1),null,3553))
this.d.J("uTexture",G.eU(t,"../wood.jpg",s.h(a,2),null,3553))
this.e.$1(0)},
$S:function(a){return{func:1,args:[P.i]}}}
J.a.prototype.dj=J.a.prototype.l
J.bu.prototype.dl=J.bu.prototype.l
P.V.prototype.dk=P.V.prototype.aS
W.a3.prototype.aV=W.a3.prototype.S
W.bT.prototype.dm=W.bT.prototype.a2;(function installTearOffs(){installTearOff(H.bb.prototype,"gf2",0,0,0,null,["$0"],["aO"],0)
installTearOff(H.a7.prototype,"gd5",0,0,0,null,["$1"],["P"],2)
installTearOff(H.aO.prototype,"geL",0,0,0,null,["$1"],["a5"],2)
installTearOff(P,"nE",1,0,0,null,["$1"],["nk"],1)
installTearOff(P,"nF",1,0,0,null,["$1"],["nl"],1)
installTearOff(P,"nG",1,0,0,null,["$1"],["nm"],1)
installTearOff(P,"lp",1,0,0,null,["$0"],["nC"],0)
installTearOff(P.J.prototype,"gbS",0,0,0,null,["$2","$1"],["W","e_"],5)
installTearOff(P,"nL",1,0,0,null,["$2"],["mA"],7)
installTearOff(W,"nQ",1,0,0,null,["$4"],["nq"],4)
installTearOff(W,"nR",1,0,0,null,["$4"],["nr"],4)
installTearOff(W.cH.prototype,"gbk",0,1,0,null,["$0"],["bl"],3)
installTearOff(W.d_.prototype,"gbk",0,1,0,null,["$0"],["bl"],3)
installTearOff(R.cN.prototype,"gfb",0,0,0,null,["$1"],["cF"],6)
installTearOff(V,"lq",1,0,0,null,["$0"],["nZ"],0)})();(function inheritance(){inherit(P.F,null)
var t=P.F
inherit(H.jr,t)
inherit(J.a,t)
inherit(J.dW,t)
inherit(P.V,t)
inherit(H.cx,t)
inherit(P.ct,t)
inherit(H.aZ,t)
inherit(H.az,t)
inherit(H.ii,t)
inherit(H.bb,t)
inherit(H.hQ,t)
inherit(H.aP,t)
inherit(H.ih,t)
inherit(H.hK,t)
inherit(H.cM,t)
inherit(H.hk,t)
inherit(H.ax,t)
inherit(H.a7,t)
inherit(H.aO,t)
inherit(H.fL,t)
inherit(H.hq,t)
inherit(P.aX,t)
inherit(H.ds,t)
inherit(H.ar,t)
inherit(P.b5,t)
inherit(H.f3,t)
inherit(H.f5,t)
inherit(P.a_,t)
inherit(P.jm,t)
inherit(P.hL,t)
inherit(P.bL,t)
inherit(P.J,t)
inherit(P.d2,t)
inherit(P.bE,t)
inherit(P.h6,t)
inherit(P.jF,t)
inherit(P.aS,t)
inherit(P.iA,t)
inherit(P.fT,t)
inherit(P.id,t)
inherit(P.bN,t)
inherit(P.jv,t)
inherit(P.bO,t)
inherit(P.m,t)
inherit(P.ig,t)
inherit(P.ak,t)
inherit(P.I,t)
inherit(P.aW,t)
inherit(P.a9,t)
inherit(P.aA,t)
inherit(P.cS,t)
inherit(P.jo,t)
inherit(P.hV,t)
inherit(P.en,t)
inherit(P.i,t)
inherit(P.b4,t)
inherit(P.O,t)
inherit(P.b7,t)
inherit(P.p,t)
inherit(P.bF,t)
inherit(P.jI,t)
inherit(W.e6,t)
inherit(W.bM,t)
inherit(W.n,t)
inherit(W.cJ,t)
inherit(W.bT,t)
inherit(W.iv,t)
inherit(W.cn,t)
inherit(W.cI,t)
inherit(W.jB,t)
inherit(W.jJ,t)
inherit(W.iq,t)
inherit(W.dC,t)
inherit(P.ib,t)
inherit(P.ik,t)
inherit(G.fi,t)
inherit(G.e0,t)
inherit(G.eM,t)
inherit(G.a4,t)
inherit(G.aY,t)
inherit(G.aB,t)
inherit(G.cY,t)
inherit(G.cX,t)
inherit(G.ei,t)
inherit(G.y,t)
inherit(G.fU,t)
inherit(G.hi,t)
inherit(G.bJ,t)
inherit(R.h2,t)
inherit(T.a0,t)
inherit(T.D,t)
inherit(T.o,t)
inherit(T.e,t)
inherit(T.as,t)
t=J.a
inherit(J.eZ,t)
inherit(J.f_,t)
inherit(J.bu,t)
inherit(J.aC,t)
inherit(J.b2,t)
inherit(J.aD,t)
inherit(H.by,t)
inherit(H.b6,t)
inherit(W.d,t)
inherit(W.dS,t)
inherit(W.ca,t)
inherit(W.cb,t)
inherit(W.aV,t)
inherit(W.a2,t)
inherit(W.d3,t)
inherit(W.eb,t)
inherit(W.ec,t)
inherit(W.ed,t)
inherit(W.cf,t)
inherit(W.cg,t)
inherit(W.ch,t)
inherit(W.d4,t)
inherit(W.cj,t)
inherit(W.d6,t)
inherit(W.eh,t)
inherit(W.h,t)
inherit(W.d8,t)
inherit(W.eQ,t)
inherit(W.da,t)
inherit(W.b_,t)
inherit(W.b0,t)
inherit(W.f8,t)
inherit(W.fe,t)
inherit(W.de,t)
inherit(W.cH,t)
inherit(W.dh,t)
inherit(W.ae,t)
inherit(W.dl,t)
inherit(W.cK,t)
inherit(W.dn,t)
inherit(W.af,t)
inherit(W.dt,t)
inherit(W.dw,t)
inherit(W.hj,t)
inherit(W.dy,t)
inherit(W.ho,t)
inherit(W.d_,t)
inherit(W.hw,t)
inherit(W.hy,t)
inherit(W.dD,t)
inherit(W.dF,t)
inherit(W.dH,t)
inherit(W.dJ,t)
inherit(W.dL,t)
inherit(P.dc,t)
inherit(P.fd,t)
inherit(P.dj,t)
inherit(P.fF,t)
inherit(P.fG,t)
inherit(P.fJ,t)
inherit(P.du,t)
inherit(P.dA,t)
inherit(P.dX,t)
inherit(P.fO,t)
inherit(P.fP,t)
inherit(P.dq,t)
t=J.bu
inherit(J.fD,t)
inherit(J.aM,t)
inherit(J.aE,t)
inherit(J.jq,J.aC)
t=J.b2
inherit(J.cv,t)
inherit(J.cu,t)
t=P.V
inherit(H.k,t)
inherit(H.cz,t)
inherit(H.d1,t)
t=H.k
inherit(H.b3,t)
inherit(H.f4,t)
inherit(H.el,H.cz)
t=P.ct
inherit(H.fb,t)
inherit(H.hB,t)
t=H.b3
inherit(H.bv,t)
inherit(P.f6,t)
t=H.az
inherit(H.j7,t)
inherit(H.j8,t)
inherit(H.ia,t)
inherit(H.hR,t)
inherit(H.eW,t)
inherit(H.eX,t)
inherit(H.ij,t)
inherit(H.hl,t)
inherit(H.hm,t)
inherit(H.j9,t)
inherit(H.iS,t)
inherit(H.iT,t)
inherit(H.iU,t)
inherit(H.iV,t)
inherit(H.iW,t)
inherit(H.hf,t)
inherit(H.f0,t)
inherit(H.iO,t)
inherit(H.iP,t)
inherit(H.iQ,t)
inherit(P.hG,t)
inherit(P.hF,t)
inherit(P.hH,t)
inherit(P.hI,t)
inherit(P.eO,t)
inherit(P.eN,t)
inherit(P.hW,t)
inherit(P.i3,t)
inherit(P.i_,t)
inherit(P.i0,t)
inherit(P.i1,t)
inherit(P.hY,t)
inherit(P.i2,t)
inherit(P.hX,t)
inherit(P.i6,t)
inherit(P.i7,t)
inherit(P.i5,t)
inherit(P.i4,t)
inherit(P.h9,t)
inherit(P.ha,t)
inherit(P.h7,t)
inherit(P.h8,t)
inherit(P.iB,t)
inherit(P.iE,t)
inherit(P.io,t)
inherit(P.im,t)
inherit(P.ip,t)
inherit(P.fa,t)
inherit(P.ej,t)
inherit(P.ek,t)
inherit(W.em,t)
inherit(W.h5,t)
inherit(W.hC,t)
inherit(W.hU,t)
inherit(W.fs,t)
inherit(W.fr,t)
inherit(W.ir,t)
inherit(W.is,t)
inherit(W.iy,t)
inherit(W.iz,t)
inherit(P.iF,t)
inherit(B.j2,t)
inherit(B.j3,t)
inherit(B.j4,t)
inherit(B.j5,t)
inherit(B.j6,t)
inherit(B.fx,t)
inherit(B.fy,t)
inherit(B.fz,t)
inherit(B.fA,t)
inherit(B.fW,t)
inherit(D.f7,t)
inherit(A.iN,t)
inherit(V.iY,t)
inherit(V.iZ,t)
t=H.hK
inherit(H.bd,t)
inherit(H.bY,t)
t=P.aX
inherit(H.ft,t)
inherit(H.f1,t)
inherit(H.hu,t)
inherit(H.hs,t)
inherit(H.e_,t)
inherit(H.fQ,t)
inherit(P.c9,t)
inherit(P.bA,t)
inherit(P.a1,t)
inherit(P.hv,t)
inherit(P.ht,t)
inherit(P.b8,t)
inherit(P.e1,t)
inherit(P.ea,t)
t=H.hf
inherit(H.h1,t)
inherit(H.bp,t)
inherit(H.hD,P.c9)
inherit(P.cy,P.b5)
t=P.cy
inherit(H.ad,t)
inherit(W.hJ,t)
t=H.b6
inherit(H.fj,t)
inherit(H.cD,t)
t=H.cD
inherit(H.bP,t)
inherit(H.bR,t)
inherit(H.bQ,H.bP)
inherit(H.cE,H.bQ)
inherit(H.bS,H.bR)
inherit(H.cF,H.bS)
t=H.cE
inherit(H.cC,t)
inherit(H.fk,t)
t=H.cF
inherit(H.fl,t)
inherit(H.fm,t)
inherit(H.fn,t)
inherit(H.fo,t)
inherit(H.fp,t)
inherit(H.cG,t)
inherit(H.fq,t)
t=P.hL
inherit(P.hE,t)
inherit(P.iw,t)
inherit(P.il,P.iA)
inherit(P.ie,H.ad)
inherit(P.fS,P.fT)
inherit(P.i9,P.fS)
inherit(P.ic,P.i9)
inherit(P.cw,P.bO)
t=P.a9
inherit(P.X,t)
inherit(P.z,t)
t=P.a1
inherit(P.cL,t)
inherit(P.eV,t)
t=W.d
inherit(W.t,t)
inherit(W.aq,t)
inherit(W.eH,t)
inherit(W.bt,t)
inherit(W.bx,t)
inherit(W.fH,t)
inherit(W.cO,t)
inherit(W.bU,t)
inherit(W.bW,t)
inherit(W.hz,t)
inherit(W.hA,t)
inherit(W.bK,t)
inherit(W.jK,t)
inherit(P.dY,t)
inherit(P.aT,t)
t=W.t
inherit(W.a3,t)
inherit(W.ay,t)
inherit(W.bq,t)
t=W.a3
inherit(W.l,t)
inherit(P.w,t)
t=W.aq
inherit(W.c8,t)
inherit(W.eP,t)
inherit(W.f9,t)
t=W.l
inherit(W.dT,t)
inherit(W.dU,t)
inherit(W.av,t)
inherit(W.aw,t)
inherit(W.ce,t)
inherit(W.eL,t)
inherit(W.cq,t)
inherit(W.b1,t)
inherit(W.bw,t)
inherit(W.fR,t)
inherit(W.cU,t)
inherit(W.hd,t)
inherit(W.he,t)
inherit(W.bG,t)
t=W.aV
inherit(W.e2,t)
inherit(W.e4,t)
inherit(W.e5,t)
inherit(W.e8,t)
t=W.a2
inherit(W.e3,t)
inherit(W.e7,t)
inherit(W.e9,t)
inherit(W.aU,W.d3)
inherit(W.ee,W.cg)
inherit(W.ef,W.ch)
inherit(W.d5,W.d4)
inherit(W.ci,W.d5)
inherit(W.d7,W.d6)
inherit(W.eg,W.d7)
inherit(W.d9,W.d8)
inherit(W.eG,W.d9)
inherit(W.db,W.da)
inherit(W.bs,W.db)
inherit(W.cr,W.bq)
inherit(W.eR,W.bt)
inherit(W.aL,W.h)
t=W.aL
inherit(W.aF,t)
inherit(W.P,t)
inherit(W.aK,t)
inherit(W.fg,W.bx)
inherit(W.df,W.de)
inherit(W.fh,W.df)
inherit(W.R,P.cw)
inherit(W.di,W.dh)
inherit(W.bz,W.di)
inherit(W.dm,W.dl)
inherit(W.fE,W.dm)
inherit(W.bV,W.bU)
inherit(W.fX,W.bV)
inherit(W.dp,W.dn)
inherit(W.fZ,W.dp)
inherit(W.h4,W.dt)
inherit(W.dx,W.dw)
inherit(W.hg,W.dx)
inherit(W.bX,W.bW)
inherit(W.hh,W.bX)
inherit(W.dz,W.dy)
inherit(W.hn,W.dz)
inherit(W.b9,W.bw)
inherit(W.aN,W.P)
inherit(W.dE,W.dD)
inherit(W.hM,W.dE)
inherit(W.hN,W.cj)
inherit(W.dG,W.dF)
inherit(W.i8,W.dG)
inherit(W.dI,W.dH)
inherit(W.dg,W.dI)
inherit(W.dK,W.dJ)
inherit(W.it,W.dK)
inherit(W.dM,W.dL)
inherit(W.iu,W.dM)
inherit(W.hO,W.hJ)
inherit(W.hS,P.bE)
inherit(W.hP,W.hS)
inherit(W.hT,P.h6)
inherit(W.ix,W.bT)
inherit(P.W,P.ik)
t=P.w
inherit(P.eo,t)
inherit(P.ep,t)
inherit(P.eq,t)
inherit(P.er,t)
inherit(P.es,t)
inherit(P.et,t)
inherit(P.eu,t)
inherit(P.ev,t)
inherit(P.ew,t)
inherit(P.ex,t)
inherit(P.ey,t)
inherit(P.ez,t)
inherit(P.eA,t)
inherit(P.eB,t)
inherit(P.eC,t)
inherit(P.eD,t)
inherit(P.eE,t)
inherit(P.eF,t)
inherit(P.eI,t)
inherit(P.ac,t)
inherit(P.fc,t)
inherit(P.fB,t)
inherit(P.bD,t)
t=P.ac
inherit(P.eK,t)
inherit(P.a5,t)
inherit(P.eS,t)
inherit(P.hc,t)
inherit(P.bH,t)
inherit(P.hx,t)
inherit(P.dd,P.dc)
inherit(P.f2,P.dd)
inherit(P.dk,P.dj)
inherit(P.fu,P.dk)
inherit(P.fK,P.a5)
inherit(P.dv,P.du)
inherit(P.hb,P.dv)
inherit(P.bI,P.bH)
inherit(P.dB,P.dA)
inherit(P.hp,P.dB)
inherit(P.fv,P.aT)
inherit(P.dr,P.dq)
inherit(P.h_,P.dr)
t=G.fi
inherit(G.fY,t)
inherit(G.d0,t)
inherit(G.ff,t)
inherit(G.fN,t)
inherit(A.fM,t)
inherit(A.bC,t)
t=G.fY
inherit(G.dZ,t)
inherit(A.ap,t)
inherit(B.fw,G.dZ)
t=G.d0
inherit(G.cA,t)
inherit(G.fC,t)
inherit(G.eT,G.bJ)
inherit(R.cN,A.fM)
inherit(R.h3,R.h2)
mixin(H.bP,P.m)
mixin(H.bQ,H.aZ)
mixin(H.bR,P.m)
mixin(H.bS,H.aZ)
mixin(P.bO,P.m)
mixin(W.d3,W.e6)
mixin(W.d4,P.m)
mixin(W.d5,W.n)
mixin(W.d6,P.m)
mixin(W.d7,W.n)
mixin(W.d8,P.m)
mixin(W.d9,W.n)
mixin(W.da,P.m)
mixin(W.db,W.n)
mixin(W.de,P.m)
mixin(W.df,W.n)
mixin(W.dh,P.m)
mixin(W.di,W.n)
mixin(W.dl,P.m)
mixin(W.dm,W.n)
mixin(W.bU,P.m)
mixin(W.bV,W.n)
mixin(W.dn,P.m)
mixin(W.dp,W.n)
mixin(W.dt,P.b5)
mixin(W.dw,P.m)
mixin(W.dx,W.n)
mixin(W.bW,P.m)
mixin(W.bX,W.n)
mixin(W.dy,P.m)
mixin(W.dz,W.n)
mixin(W.dD,P.m)
mixin(W.dE,W.n)
mixin(W.dF,P.m)
mixin(W.dG,W.n)
mixin(W.dH,P.m)
mixin(W.dI,W.n)
mixin(W.dJ,P.m)
mixin(W.dK,W.n)
mixin(W.dL,P.m)
mixin(W.dM,W.n)
mixin(P.dc,P.m)
mixin(P.dd,W.n)
mixin(P.dj,P.m)
mixin(P.dk,W.n)
mixin(P.du,P.m)
mixin(P.dv,W.n)
mixin(P.dA,P.m)
mixin(P.dB,W.n)
mixin(P.dq,P.m)
mixin(P.dr,W.n)})();(function constants(){C.o=W.av.prototype
C.w=W.aw.prototype
C.m=W.ca.prototype
C.p=W.cb.prototype
C.x=W.aU.prototype
C.q=W.ce.prototype
C.M=W.cf.prototype
C.N=W.cq.prototype
C.r=W.cr.prototype
C.O=J.a.prototype
C.a=J.aC.prototype
C.z=J.cu.prototype
C.b=J.cv.prototype
C.c=J.b2.prototype
C.i=J.aD.prototype
C.V=J.aE.prototype
C.Y=H.cC.prototype
C.D=W.bz.prototype
C.E=J.fD.prototype
C.F=W.cK.prototype
C.K=W.cU.prototype
C.v=J.aM.prototype
C.aw=W.aN.prototype
C.ax=W.bK.prototype
C.L=new P.ib()
C.d=new P.il()
C.y=new P.aA(0)
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
C.A=function(hooks) { return hooks; }

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
C.B=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.W=H.B(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.p])
C.X=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.C=makeConstList([])
C.t=H.B(makeConstList(["bind","if","ref","repeat","syntax"]),[P.p])
C.u=H.B(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.p])
C.Z=new G.y("vec3","vertex btangents",0)
C.e=new G.y("vec3","",0)
C.a_=new G.y("vec4","delta from light",0)
C.n=new G.y("","",0)
C.G=new G.y("vec3","vertex coordinates",0)
C.a0=new G.y("vec3","vertex binormals",0)
C.H=new G.y("vec4","for wireframe",0)
C.a1=new G.y("vec4","per vertex color",0)
C.a2=new G.y("float","for normal maps",0)
C.j=new G.y("mat4","",0)
C.a4=new G.y("mat4","",4)
C.a3=new G.y("mat4","",128)
C.f=new G.y("float","",0)
C.a5=new G.y("float","",4)
C.a6=new G.y("float","depth for shadowmaps",0)
C.h=new G.y("sampler2D","",0)
C.a7=new G.y("float","for bump maps",0)
C.a8=new G.y("vec2","texture uvs",0)
C.a9=new G.y("float","time since program start in sec",0)
C.k=new G.y("vec2","",0)
C.aa=new G.y("samplerCube","",0)
C.l=new G.y("vec4","",0)
C.ab=new G.y("vec3","vertex normals",0)
C.ac=new G.y("sampler2DShadow","",0)
C.I=new G.y("vec3","per vertex color",0)
C.J=new G.y("mat3","",0)
C.ad=new G.y("vec3","vertex tangents",0)
C.ae=H.K("o9")
C.af=H.K("oa")
C.ag=H.K("eJ")
C.ah=H.K("ob")
C.ai=H.K("oc")
C.aj=H.K("kF")
C.ak=H.K("od")
C.al=H.K("kI")
C.am=H.K("O")
C.an=H.K("p")
C.ao=H.K("l4")
C.ap=H.K("l5")
C.aq=H.K("oe")
C.ar=H.K("l6")
C.as=H.K("ak")
C.at=H.K("X")
C.au=H.K("z")
C.av=H.K("a9")})();(function staticFields(){$.kP="$cachedFunction"
$.kQ="$cachedInvocation"
$.kk=null
$.ki=null
$.jP=!1
$.jU=null
$.lm=null
$.lD=null
$.iI=null
$.iR=null
$.jV=null
$.be=null
$.bZ=null
$.c_=null
$.jQ=!1
$.x=C.d
$.kA=0
$.an=null
$.jn=null
$.kz=null
$.ky=null
$.kv=null
$.ku=null
$.kt=null
$.ks=null
$.nI=0
$.nJ=0
$.jZ=0
$.lz=0
$.c4=0
$.c5=0
$.o5=!1
$.lt=0})();(function lazyInitializers(){lazy($,"kr","$get$kr",function(){return H.lw("_$dart_dartClosure")})
lazy($,"js","$get$js",function(){return H.lw("_$dart_js")})
lazy($,"kG","$get$kG",function(){return H.mT()})
lazy($,"kH","$get$kH",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.kA
$.kA=t+1
t="expando$key$"+t}return new P.en(t,null,[P.z])})
lazy($,"kU","$get$kU",function(){return H.ag(H.hr({
toString:function(){return"$receiver$"}}))})
lazy($,"kV","$get$kV",function(){return H.ag(H.hr({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"kW","$get$kW",function(){return H.ag(H.hr(null))})
lazy($,"kX","$get$kX",function(){return H.ag(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"l0","$get$l0",function(){return H.ag(H.hr(void 0))})
lazy($,"l1","$get$l1",function(){return H.ag(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kZ","$get$kZ",function(){return H.ag(H.l_(null))})
lazy($,"kY","$get$kY",function(){return H.ag(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"l3","$get$l3",function(){return H.ag(H.l_(void 0))})
lazy($,"l2","$get$l2",function(){return H.ag(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"jM","$get$jM",function(){return P.nj()})
lazy($,"kC","$get$kC",function(){return P.no(null,P.O)})
lazy($,"c0","$get$c0",function(){return[]})
lazy($,"kq","$get$kq",function(){return{}})
lazy($,"ld","$get$ld",function(){return P.jw(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"jN","$get$jN",function(){return P.L()})
lazy($,"iH","$get$iH",function(){return P.kJ(P.z,P.ak)})
lazy($,"c2","$get$c2",function(){return P.kJ(P.p,P.ak)})
lazy($,"jD","$get$jD",function(){return new G.cY(1281,0,4294967295)})
lazy($,"kf","$get$kf",function(){return G.jE(1281,1281,1281)})
lazy($,"kg","$get$kg",function(){return G.jE(32774,770,771)})
lazy($,"ke","$get$ke",function(){return G.jE(32774,770,769)})
lazy($,"S","$get$S",function(){return P.aG(["cBlendEquation",C.n,"cDepthWrite",C.n,"cDepthTest",C.n,"cStencilFunc",C.n,"tPosition",C.e,"tSpeed",C.e,"tForce",C.e,"aColors",C.I,"aColorAlpha",C.a1,"aPosition",C.G,"aTexUV",C.a8,"aNormal",C.ab,"aBinormal",C.a0,"aCenter",C.H,"aPointSize",C.f,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.ad,"aBitangent",C.Z,"iaRotation",C.l,"iaTranslation",C.e,"iaScale",C.e,"vColor",C.I,"vTexUV",C.k,"vLightWeighting",C.e,"vNormal",C.e,"vPosition",C.G,"vPositionFromLight",C.a_,"vCenter",C.H,"vDepth",C.a6,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.J,"uConvolutionMatrix",C.J,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.ac,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.aa,"uAnimationTable",C.h,"uTime",C.a9,"uCameraNear",C.f,"uCameraFar",C.f,"uFogNear",C.f,"uFogFar",C.f,"uPointSize",C.f,"uScale",C.f,"uAngle",C.f,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.f,"uShininess",C.f,"uShadowBias",C.f,"uOpacity",C.f,"uColor",C.e,"uAmbientDiffuse",C.e,"uColorEmissive",C.e,"uColorSpecular",C.e,"uColorDiffuse",C.e,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.e,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a3,"uLightDescs",C.a4,"uLightCount",C.f,"uLightTypes",C.a5,"uBumpScale",C.a7,"uNormalScale",C.a2])})
lazy($,"l8","$get$l8",function(){return C.L})
lazy($,"ko","$get$ko",function(){return T.G(0.4,0.4,0.4)})
lazy($,"kn","$get$kn",function(){return T.G(0,0,0)})
lazy($,"kp","$get$kp",function(){return T.G(1,0,0)})
lazy($,"lI","$get$lI",function(){var t=G.fV("Textured")
t.bD(["aPosition","aTexUV"])
t.aE(["uPerspectiveViewMatrix","uModelMatrix"])
t.bE(["vTexUV"])
t.aF(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vTexUV = aTexUV;"])
return t})
lazy($,"lH","$get$lH",function(){var t=G.fV("TexturedF")
t.bE(["vTexUV"])
t.aE(["uColor","uTexture"])
t.aF(["oFragColor = texture(uTexture, vTexUV) + vec4( uColor, 0.0 );"])
return t})
lazy($,"lC","$get$lC",function(){var t=G.fV("PointSpritesV")
t.bD(["aPosition"])
t.aE(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"])
t.aF(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"])
return t})
lazy($,"lB","$get$lB",function(){var t=G.fV("PointSpritesF")
t.aE(["uTexture"])
t.aF(["oFragColor = texture( uTexture,  gl_PointCoord);"])
return t})
lazy($,"la","$get$la",function(){return[T.G(0,0,1),T.G(0,0,-1),T.G(0,1,0),T.G(0,-1,0),T.G(1,0,0),T.G(-1,0,0)]})
lazy($,"kD","$get$kD",function(){return[G.H(0,11,5),G.H(0,5,1),G.H(0,1,7),G.H(0,7,10),G.H(0,10,11),G.H(1,5,9),G.H(5,11,4),G.H(11,10,2),G.H(10,7,6),G.H(7,1,8),G.H(3,9,4),G.H(3,4,2),G.H(3,2,6),G.H(3,6,8),G.H(3,8,9),G.H(4,9,5),G.H(2,4,11),G.H(6,2,10),G.H(8,6,7),G.H(9,8,1)]})
lazy($,"lG","$get$lG",function(){return(1+P.o6(5))/2})
lazy($,"kE","$get$kE",function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=$.$get$lG()
s=T.G(-1,t,0)
s.D(0)
r=T.G(1,t,0)
r.D(0)
q=T.G(-1,-t,0)
q.D(0)
p=T.G(1,-t,0)
p.D(0)
o=T.G(0,-1,t)
o.D(0)
n=T.G(0,1,t)
n.D(0)
m=T.G(0,-1,-t)
m.D(0)
l=T.G(0,1,-t)
l.D(0)
k=T.G(t,0,-1)
k.D(0)
j=T.G(t,0,1)
j.D(0)
i=T.G(-t,0,-1)
i.D(0)
t=T.G(-t,0,1)
t.D(0)
return[s,r,q,p,o,n,m,l,k,j,i,t]})})()
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
mangledGlobalNames:{z:"int",X:"double",a9:"num",p:"String",ak:"bool",O:"Null",i:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.t},{func:1,ret:P.ak,args:[W.a3,P.p,P.p,W.bM]},{func:1,v:true,args:[P.F],opt:[P.b7]},{func:1,v:true,args:[W.h]},{func:1,ret:P.z,args:[P.I,P.I]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,Blob:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSCharsetRule:J.a,CSSConditionRule:J.a,CSSFontFaceRule:J.a,CSSGroupingRule:J.a,CSSImportRule:J.a,CSSKeyframeRule:J.a,MozCSSKeyframeRule:J.a,WebKitCSSKeyframeRule:J.a,CSSKeyframesRule:J.a,MozCSSKeyframesRule:J.a,WebKitCSSKeyframesRule:J.a,CSSMediaRule:J.a,CSSNamespaceRule:J.a,CSSPageRule:J.a,CSSRule:J.a,CSSStyleRule:J.a,CSSStyleSheet:J.a,CSSSupportsRule:J.a,CSSVariableReferenceValue:J.a,CSSViewportRule:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMParser:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,File:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,Gamepad:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MimeType:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechGrammar:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,StyleSheet:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,Touch:J.a,TrackDefault:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGLength:J.a,SVGNumber:J.a,SVGPreserveAspectRatio:J.a,SVGTransform:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioParamMap:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.by,ArrayBufferView:H.b6,DataView:H.fj,Float32Array:H.cC,Float64Array:H.fk,Int16Array:H.fl,Int32Array:H.fm,Int8Array:H.fn,Uint16Array:H.fo,Uint32Array:H.fp,Uint8ClampedArray:H.cG,CanvasPixelArray:H.cG,Uint8Array:H.fq,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLInputElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMenuElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTextAreaElement:W.l,HTMLTimeElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLFrameSetElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,Accelerometer:W.c8,LinearAccelerationSensor:W.c8,AccessibleNodeList:W.dS,HTMLAnchorElement:W.dT,HTMLAreaElement:W.dU,HTMLBodyElement:W.av,HTMLCanvasElement:W.aw,CanvasGradient:W.ca,CanvasRenderingContext2D:W.cb,CDATASection:W.ay,CharacterData:W.ay,Comment:W.ay,ProcessingInstruction:W.ay,Text:W.ay,CSSPerspective:W.e2,CSSPositionValue:W.e3,CSSRotation:W.e4,CSSScale:W.e5,CSSStyleDeclaration:W.aU,MSStyleCSSProperties:W.aU,CSS2Properties:W.aU,CSSImageValue:W.a2,CSSKeywordValue:W.a2,CSSNumericValue:W.a2,CSSResourceValue:W.a2,CSSUnitValue:W.a2,CSSURLImageValue:W.a2,CSSStyleValue:W.a2,CSSMatrixComponent:W.aV,CSSSkew:W.aV,CSSTransformComponent:W.aV,CSSTransformValue:W.e7,CSSTranslation:W.e8,CSSUnparsedValue:W.e9,DataTransferItemList:W.eb,DeviceAcceleration:W.ec,HTMLDivElement:W.ce,XMLDocument:W.bq,Document:W.bq,DOMException:W.ed,DOMImplementation:W.cf,DOMMatrix:W.ee,DOMMatrixReadOnly:W.cg,DOMPoint:W.ef,DOMPointReadOnly:W.ch,ClientRectList:W.ci,DOMRectList:W.ci,DOMRectReadOnly:W.cj,DOMStringList:W.eg,DOMTokenList:W.eh,Element:W.a3,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,AccessibleNode:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RemotePlayback:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SourceBuffer:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,TextTrack:W.d,TextTrackCue:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,VTTCue:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,ServiceWorker:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,FileList:W.eG,FileWriter:W.eH,HTMLFormElement:W.eL,Gyroscope:W.eP,HTMLHeadElement:W.cq,History:W.eQ,HTMLCollection:W.bs,HTMLFormControlsCollection:W.bs,HTMLOptionsCollection:W.bs,HTMLDocument:W.cr,XMLHttpRequest:W.eR,XMLHttpRequestUpload:W.bt,XMLHttpRequestEventTarget:W.bt,ImageBitmap:W.b_,ImageData:W.b0,HTMLImageElement:W.b1,KeyboardEvent:W.aF,Location:W.f8,Magnetometer:W.f9,HTMLAudioElement:W.bw,HTMLMediaElement:W.bw,MediaList:W.fe,MIDIOutput:W.fg,MIDIInput:W.bx,MIDIPort:W.bx,MimeTypeArray:W.fh,PointerEvent:W.P,MouseEvent:W.P,DragEvent:W.P,DocumentFragment:W.t,ShadowRoot:W.t,Attr:W.t,DocumentType:W.t,Node:W.t,NodeIterator:W.cH,NodeList:W.bz,RadioNodeList:W.bz,Plugin:W.ae,PluginArray:W.fE,PresentationConnection:W.fH,Range:W.cK,RTCDataChannel:W.cO,DataChannel:W.cO,HTMLSelectElement:W.fR,AbsoluteOrientationSensor:W.aq,AmbientLightSensor:W.aq,OrientationSensor:W.aq,RelativeOrientationSensor:W.aq,Sensor:W.aq,SourceBufferList:W.fX,SpeechGrammarList:W.fZ,SpeechRecognitionResult:W.af,Storage:W.h4,HTMLTableElement:W.cU,HTMLTableRowElement:W.hd,HTMLTableSectionElement:W.he,HTMLTemplateElement:W.bG,TextTrackCueList:W.hg,TextTrackList:W.hh,TimeRanges:W.hj,TouchEvent:W.aK,TouchList:W.hn,TrackDefaultList:W.ho,TreeWalker:W.d_,CompositionEvent:W.aL,FocusEvent:W.aL,TextEvent:W.aL,UIEvent:W.aL,URL:W.hw,VRStageBoundsPoint:W.hy,HTMLVideoElement:W.b9,VideoTrackList:W.hz,WebSocket:W.hA,WheelEvent:W.aN,Window:W.bK,DOMWindow:W.bK,CSSRuleList:W.hM,DOMRect:W.hN,GamepadList:W.i8,NamedNodeMap:W.dg,MozNamedAttrMap:W.dg,SpeechRecognitionResultList:W.it,StyleSheetList:W.iu,SVGFEBlendElement:P.eo,SVGFEColorMatrixElement:P.ep,SVGFEComponentTransferElement:P.eq,SVGFECompositeElement:P.er,SVGFEConvolveMatrixElement:P.es,SVGFEDiffuseLightingElement:P.et,SVGFEDisplacementMapElement:P.eu,SVGFEFloodElement:P.ev,SVGFEGaussianBlurElement:P.ew,SVGFEImageElement:P.ex,SVGFEMergeElement:P.ey,SVGFEMorphologyElement:P.ez,SVGFEOffsetElement:P.eA,SVGFEPointLightElement:P.eB,SVGFESpecularLightingElement:P.eC,SVGFESpotLightElement:P.eD,SVGFETileElement:P.eE,SVGFETurbulenceElement:P.eF,SVGFilterElement:P.eI,SVGForeignObjectElement:P.eK,SVGCircleElement:P.a5,SVGEllipseElement:P.a5,SVGLineElement:P.a5,SVGPathElement:P.a5,SVGPolygonElement:P.a5,SVGPolylineElement:P.a5,SVGGeometryElement:P.a5,SVGAElement:P.ac,SVGClipPathElement:P.ac,SVGDefsElement:P.ac,SVGGElement:P.ac,SVGSwitchElement:P.ac,SVGGraphicsElement:P.ac,SVGImageElement:P.eS,SVGLengthList:P.f2,SVGMaskElement:P.fc,SVGMatrix:P.fd,SVGNumberList:P.fu,SVGPatternElement:P.fB,SVGPoint:P.fF,SVGPointList:P.fG,SVGRect:P.fJ,SVGRectElement:P.fK,SVGScriptElement:P.bD,SVGStringList:P.hb,SVGAnimateElement:P.w,SVGAnimateMotionElement:P.w,SVGAnimateTransformElement:P.w,SVGAnimationElement:P.w,SVGDescElement:P.w,SVGDiscardElement:P.w,SVGFEDistantLightElement:P.w,SVGFEFuncAElement:P.w,SVGFEFuncBElement:P.w,SVGFEFuncGElement:P.w,SVGFEFuncRElement:P.w,SVGFEMergeNodeElement:P.w,SVGLinearGradientElement:P.w,SVGMarkerElement:P.w,SVGMetadataElement:P.w,SVGRadialGradientElement:P.w,SVGSetElement:P.w,SVGStopElement:P.w,SVGStyleElement:P.w,SVGSymbolElement:P.w,SVGTitleElement:P.w,SVGViewElement:P.w,SVGGradientElement:P.w,SVGComponentTransferFunctionElement:P.w,SVGFEDropShadowElement:P.w,SVGMPathElement:P.w,SVGElement:P.w,SVGSVGElement:P.hc,SVGTextPathElement:P.bH,SVGTextContentElement:P.bH,SVGTSpanElement:P.bI,SVGTextElement:P.bI,SVGTextPositioningElement:P.bI,SVGTransformList:P.hp,SVGUseElement:P.hx,AudioBuffer:P.dX,AudioTrackList:P.dY,AudioContext:P.aT,webkitAudioContext:P.aT,BaseAudioContext:P.aT,OfflineAudioContext:P.fv,WebGLRenderingContext:P.fO,WebGL2RenderingContext:P.fP,SQLResultSetRowList:P.h_})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,Blob:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSStyleSheet:true,CSSSupportsRule:true,CSSVariableReferenceValue:true,CSSViewportRule:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMParser:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,File:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,Gamepad:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechGrammar:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,StyleSheet:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,Touch:true,TrackDefault:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGLength:true,SVGNumber:true,SVGPreserveAspectRatio:true,SVGTransform:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioParamMap:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,Accelerometer:true,LinearAccelerationSensor:true,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasGradient:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSPositionValue:true,CSSRotation:true,CSSScale:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSSkew:true,CSSTransformComponent:false,CSSTransformValue:true,CSSTranslation:true,CSSUnparsedValue:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMMatrix:true,DOMMatrixReadOnly:false,DOMPoint:true,DOMPointReadOnly:false,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AccessibleNode:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnectionList:true,PresentationRequest:true,RemotePlayback:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SourceBuffer:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,TextTrack:true,TextTrackCue:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,VTTCue:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,ServiceWorker:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,FileList:true,FileWriter:true,HTMLFormElement:true,Gyroscope:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,ImageBitmap:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,Magnetometer:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,PresentationConnection:true,Range:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,AbsoluteOrientationSensor:true,AmbientLightSensor:true,OrientationSensor:true,RelativeOrientationSensor:true,Sensor:false,SourceBufferList:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VRStageBoundsPoint:true,HTMLVideoElement:true,VideoTrackList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGAElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLengthList:true,SVGMaskElement:true,SVGMatrix:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMetadataElement:true,SVGRadialGradientElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSymbolElement:true,SVGTitleElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGSVGElement:true,SVGTextPathElement:true,SVGTextContentElement:false,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransformList:true,SVGUseElement:true,AudioBuffer:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cD.$nativeSuperclassTag="ArrayBufferView"
H.bP.$nativeSuperclassTag="ArrayBufferView"
H.bQ.$nativeSuperclassTag="ArrayBufferView"
H.cE.$nativeSuperclassTag="ArrayBufferView"
H.bR.$nativeSuperclassTag="ArrayBufferView"
H.bS.$nativeSuperclassTag="ArrayBufferView"
H.cF.$nativeSuperclassTag="ArrayBufferView"
W.bU.$nativeSuperclassTag="EventTarget"
W.bV.$nativeSuperclassTag="EventTarget"
W.bW.$nativeSuperclassTag="EventTarget"
W.bX.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.lF(V.lq(),b)},[])
else (function(b){H.lF(V.lq(),b)})([])})})()