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
a[c]=function(){a[c]=function(){H.lS(b)}
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
return d?function(e){if(t===null)t=H.ik(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.ik(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.ik(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={hY:function hY(a){this.a=a},
i3:function(a,b,c,d){if(!!a.$isj)return new H.dv(a,b,[c,d])
return new H.bN(a,b,[c,d])},
hW:function(){return new P.b5("No element")},
kR:function(){return new P.b5("Too few elements")},
l6:function(a,b){H.c1(a,0,J.aS(a)-1,b)},
c1:function(a,b,c,d){if(c-b<=32)H.l5(a,b,c,d)
else H.l4(a,b,c,d)},
l5:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.P(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.V(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
l4:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.b(t>32)
s=C.b.U(t+1,6)
r=a3+s
q=a4-s
p=C.b.U(a3+a4,2)
o=p-s
n=p+s
t=J.P(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.V(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.V(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.V(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.V(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.V(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.V(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.V(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.V(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.V(a5.$2(j,i),0)){h=i
i=j
j=h}t.i(a2,r,m)
t.i(a2,p,k)
t.i(a2,q,i)
t.i(a2,o,t.h(a2,a3))
t.i(a2,n,t.h(a2,a4))
g=a3+1
f=a4-1
if(J.A(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=t.h(a2,e)
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
H.c1(a2,a3,g-2,a5)
H.c1(a2,f+2,a4,a5)
if(a0)return
if(g<r&&f>q){for(;J.A(a5.$2(t.h(a2,g),l),0);)++g
for(;J.A(a5.$2(t.h(a2,f),j),0);)--f
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
break}}H.c1(a2,g,f,a5)}else H.c1(a2,g,f,a5)},
j:function j(){},
aD:function aD(){},
bM:function bM(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bN:function bN(a,b,c){this.a=a
this.b=b
this.$ti=c},
dv:function dv(a,b,c){this.a=a
this.b=b
this.$ti=c},
em:function em(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bO:function bO(a,b,c){this.a=a
this.b=b
this.$ti=c},
aB:function aB(){},
cW:function(a,b){var t=a.a7(b)
if(!u.globalState.d.cy)u.globalState.f.ac()
return t},
hp:function(){++u.globalState.f.b},
hD:function(){--u.globalState.f.b
H.b(u.globalState.f.b>=0)},
jM:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.q(s).$isi)throw H.c(P.d5("Arguments to main must be a List: "+H.f(s)))
u.globalState=new H.h6(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$iR()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.fK(P.i2(null,H.av),0)
q=P.v
s.sdX(new H.a7(0,null,null,null,null,null,0,[q,H.aH]))
s.se_(new H.a7(0,null,null,null,null,null,0,[q,null]))
if(s.x){r=new H.h5()
s.Q=r
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.kM,r)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.lk)}if(u.globalState.x)return
o=H.jp()
u.globalState.e=o
u.globalState.z.i(0,o.a,o)
u.globalState.d=o
if(H.aN(a,{func:1,args:[P.H]}))o.a7(new H.hI(t,a))
else if(H.aN(a,{func:1,args:[P.H,P.H]}))o.a7(new H.hJ(t,a))
else o.a7(a)
u.globalState.f.ac()},
lk:function(a){var t=P.aq(["command","print","msg",a])
return new H.T(!0,P.aI(null,P.v)).H(t)},
jp:function(){var t,s
t=u.globalState.a++
s=P.v
t=new H.aH(t,new H.a7(0,null,null,null,null,null,0,[s,H.bZ]),P.bL(null,null,null,s),u.createNewIsolate(),new H.bZ(0,null,!1),new H.ai(H.jL()),new H.ai(H.jL()),!1,!1,[],P.bL(null,null,null,null),null,null,!1,!0,P.bL(null,null,null,null))
t.d1()
return t},
kO:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.kP()
return},
kP:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.c(P.r("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.c(P.r('Cannot extract URI from "'+t+'"'))},
kM:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=new H.au(!0,[]).R(b.data)
s=J.P(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.lI(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.au(!0,[]).R(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.au(!0,[]).R(s.h(t,"replyTo"))
k=H.jp()
u.globalState.f.a.O(0,new H.av(k,new H.e5(q,p,o,n,m,l),"worker-start"))
u.globalState.d=k
u.globalState.f.ac()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.kk(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.ac()
break
case"close":u.globalState.ch.ab(0,$.$get$iS().h(0,a))
a.terminate()
u.globalState.f.ac()
break
case"log":H.kL(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
j=P.aq(["command","print","msg",t])
j=new H.T(!0,P.aI(null,P.v)).H(j)
s.toString
self.postMessage(j)}else P.a5(s.h(t,"msg"))
break
case"error":throw H.c(s.h(t,"msg"))}},
kL:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aq(["command","log","msg",a])
r=new H.T(!0,P.aI(null,P.v)).H(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.ag(q)
t=H.ae(q)
s=P.bF(t)
throw H.c(s)}},
kN:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.j_=$.j_+("_"+s)
$.j0=$.j0+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.F(0,["spawned",new H.aJ(s,r),q,t.r])
r=new H.e6(t,d,a,c,b)
if(e){t.bv(q,q)
u.globalState.f.a.O(0,new H.av(t,r,"start isolate"))}else r.$0()},
l8:function(a,b){var t=new H.fi(!0,!1,null,0)
t.cX(a,b)
return t},
ll:function(a){return new H.au(!0,[]).R(new H.T(!1,P.aI(null,P.v)).H(a))},
hI:function hI(a,b){this.a=a
this.b=b},
hJ:function hJ(a,b){this.a=a
this.b=b},
h6:function h6(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
aH:function aH(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
h_:function h_(a,b){this.a=a
this.b=b},
fK:function fK(a,b){this.a=a
this.b=b},
fL:function fL(a){this.a=a},
av:function av(a,b,c){this.a=a
this.b=b
this.c=c},
h5:function h5(){},
e5:function e5(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
e6:function e6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fG:function fG(){},
aJ:function aJ(a,b){this.b=a
this.a=b},
h7:function h7(a,b){this.a=a
this.b=b},
bl:function bl(a,b,c){this.b=a
this.c=b
this.a=c},
bZ:function bZ(a,b,c){this.a=a
this.b=b
this.c=c},
fi:function fi(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fj:function fj(a,b){this.a=a
this.b=b},
fk:function fk(a,b){this.a=a
this.b=b},
ai:function ai(a){this.a=a},
T:function T(a,b){this.a=a
this.b=b},
au:function au(a,b){this.a=a
this.b=b},
lE:function(a){return u.types[a]},
lK:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.q(a).$isp},
f:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.bt(a)
if(typeof t!=="string")throw H.c(H.M(a))
return t},
l1:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t=J.a6(t)
s=t[0]
r=t[1]
return new H.eP(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
as:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
b2:function(a){var t,s,r,q,p,o,n,m,l
t=J.q(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.C||!!J.q(a).$isat){p=C.v(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.j.av(q,0)===36)q=C.j.cE(q,1)
l=H.cZ(H.hr(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+l,u.mangledGlobalNames)},
J:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
l_:function(a){return a.b?H.J(a).getUTCFullYear()+0:H.J(a).getFullYear()+0},
kY:function(a){return a.b?H.J(a).getUTCMonth()+1:H.J(a).getMonth()+1},
kU:function(a){return a.b?H.J(a).getUTCDate()+0:H.J(a).getDate()+0},
kV:function(a){return a.b?H.J(a).getUTCHours()+0:H.J(a).getHours()+0},
kX:function(a){return a.b?H.J(a).getUTCMinutes()+0:H.J(a).getMinutes()+0},
kZ:function(a){return a.b?H.J(a).getUTCSeconds()+0:H.J(a).getSeconds()+0},
kW:function(a){return a.b?H.J(a).getUTCMilliseconds()+0:H.J(a).getMilliseconds()+0},
iZ:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.c(H.M(a))
return a[b]},
aM:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.W(!0,b,"index",null)
t=J.aS(a)
if(b<0||C.b.aQ(b,t))return P.y(b,a,"index",null,t)
return P.eM(b,"index",null)},
M:function(a){return new P.W(!0,a,null,null)},
c:function(a){var t
if(a==null)a=new P.bX()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.jP})
t.name=""}else t.toString=H.jP
return t},
jP:function(){return J.bt(this.dartException)},
G:function(a){throw H.c(a)},
F:function(a){throw H.c(P.al(a))},
a0:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.fp(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
fq:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
jc:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
iY:function(a,b){return new H.eC(a,b==null?null:b.method)},
i_:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.ec(a,s,t?null:b.receiver)},
ag:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.hK(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aH(r,16)&8191)===10)switch(q){case 438:return t.$1(H.i_(H.f(s)+" (Error "+q+")",null))
case 445:case 5007:return t.$1(H.iY(H.f(s)+" (Error "+q+")",null))}}if(a instanceof TypeError){p=$.$get$j6()
o=$.$get$j7()
n=$.$get$j8()
m=$.$get$j9()
l=$.$get$jd()
k=$.$get$je()
j=$.$get$jb()
$.$get$ja()
i=$.$get$jg()
h=$.$get$jf()
g=p.J(s)
if(g!=null)return t.$1(H.i_(s,g))
else{g=o.J(s)
if(g!=null){g.method="call"
return t.$1(H.i_(s,g))}else{g=n.J(s)
if(g==null){g=m.J(s)
if(g==null){g=l.J(s)
if(g==null){g=k.J(s)
if(g==null){g=j.J(s)
if(g==null){g=m.J(s)
if(g==null){g=i.J(s)
if(g==null){g=h.J(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return t.$1(H.iY(s,g))}}return t.$1(new H.ft(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.c4()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.W(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.c4()
return a},
ae:function(a){var t
if(a==null)return new H.cC(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.cC(a,null)},
lO:function(a){if(a==null||typeof a!='object')return J.aR(a)
else return H.as(a)},
lB:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=a.length
for(r=0;r<s;){q=r+1
H.b(t)
p=a[r]
r=q+1
H.b(t)
b.i(0,p,a[q])}return b},
lJ:function(a,b,c,d,e,f,g){switch(c){case 0:return H.cW(b,new H.hy(a))
case 1:return H.cW(b,new H.hz(a,d))
case 2:return H.cW(b,new H.hA(a,d,e))
case 3:return H.cW(b,new H.hB(a,d,e,f))
case 4:return H.cW(b,new H.hC(a,d,e,f,g))}throw H.c(P.bF("Unsupported number of arguments for wrapped closure"))},
bq:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.lJ)
a.$identity=t
return t},
kB:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.q(c).$isi){t.$reflectionInfo=c
r=H.l1(t).r}else r=c
q=d?Object.create(new H.f4().constructor.prototype):Object.create(new H.aT(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.iL(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.lE,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.iI:H.hS
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.c("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.iL(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
ky:function(a,b,c,d){var t=H.hS
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
iL:function(a,b,c){var t,s,r,q
if(c)return H.kA(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.ky(s,b==null?r!=null:b!==r,t,b)
return q},
kz:function(a,b,c,d){var t,s
t=H.hS
s=H.iI
switch(b?-1:a){case 0:throw H.c(H.l2("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
kA:function(a,b){var t,s,r,q
t=$.iJ
if(t==null){t=H.iG("self")
$.iJ=t}t=$.iH
if(t==null){t=H.iG("receiver")
$.iH=t}s=b.$stubName
r=b.length
q=a[s]
t=H.kz(r,b==null?q!=null:b!==q,s,b)
return t},
ik:function(a,b,c,d,e,f){var t,s
t=J.a6(b)
s=!!J.q(c).$isi?J.a6(c):c
return H.kB(a,t,s,!!d,e,f)},
hS:function(a){return a.a},
iI:function(a){return a.c},
iG:function(a){var t,s,r,q,p
t=new H.aT("self","target","receiver","name")
s=J.a6(Object.getOwnPropertyNames(t))
for(r=s.length,q=0;q<r;++q){p=s[q]
if(t[p]===a)return p}},
m6:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.a1(a,"String"))},
m1:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a1(a,"double"))},
m5:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a1(a,"num"))},
lx:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.a1(a,"bool"))},
lI:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.a1(a,"int"))},
lQ:function(a,b){throw H.c(H.a1(a,b.substring(3)))},
lP:function(a,b){var t=J.P(b)
throw H.c(H.iK(a,t.b3(b,3,t.gj(b))))},
jF:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.q(a)[b])return a
H.lQ(a,b)},
af:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.q(a)[b]
else t=!0
if(t)return a
H.lP(a,b)},
m4:function(a){if(a==null)return a
if(!!J.q(a).$isi)return a
throw H.c(H.a1(a,"List"))},
il:function(a){var t=J.q(a)
return"$S" in t?t.$S():null},
aN:function(a,b){var t,s
if(a==null)return!1
t=H.il(a)
if(t==null)s=!1
else s=H.jG(t,b)
return s},
m2:function(a,b){var t,s
if(a==null)return a
if($.ih)return a
$.ih=!0
try{if(H.aN(a,b))return a
t=H.hH(b,null)
s=H.a1(a,t)
throw H.c(s)}finally{$.ih=!1}},
a1:function(a,b){return new H.fr("TypeError: "+H.f(P.bE(a))+": type '"+H.ju(a)+"' is not a subtype of type '"+b+"'")},
iK:function(a,b){return new H.da("CastError: "+H.f(P.bE(a))+": type '"+H.ju(a)+"' is not a subtype of type '"+b+"'")},
ju:function(a){var t
if(a instanceof H.ak){t=H.il(a)
if(t!=null)return H.hH(t,null)
return"Closure"}return H.b2(a)},
a4:function(a){if(!0===a)return!1
if(!!J.q(a).$ishV)a=a.$0()
if(typeof a==="boolean")return!a
throw H.c(H.a1(a,"bool"))},
ac:function(a){throw H.c(new H.fB(a))},
b:function(a){if(H.a4(a))throw H.c(P.kx(null))},
lS:function(a){throw H.c(new P.dl(a))},
l2:function(a){return new H.eU(a)},
jL:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
jD:function(a){return u.getIsolateTag(a)},
D:function(a){return new H.a9(a,null)},
E:function(a,b){H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
hr:function(a){if(a==null)return
return a.$ti},
jE:function(a,b){return H.ir(a["$as"+H.f(b)],H.hr(a))},
ad:function(a,b,c){var t,s
t=H.jE(a,b)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
aO:function(a,b){var t,s
t=H.hr(a)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
hH:function(a,b){var t=H.aP(a,b)
return t},
aP:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.b(!0)
H.b(!0)
return a[0].name+H.cZ(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.f(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aP(t,b)
return H.lm(a,b)}return"unknown-reified-type"},
lm:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aP(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aP(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aP(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.lA(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aP(l[j],b)+(" "+H.f(j))}q+="}"}return"("+q+") => "+t},
cZ:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=new P.b6("")
for(r=b,q=!0,p=!0;H.b(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.b(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aP(o,c)}return p?"":"<"+s.k(0)+">"},
hs:function(a){var t,s,r
if(a instanceof H.ak){t=H.il(a)
if(t!=null)return H.hH(t,null)}s=J.q(a).constructor.name
if(a==null)return s
r=H.cZ(a.$ti,0,null)
return s+r},
ir:function(a,b){if(a==null)return b
H.b(typeof a=="function")
H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.ip(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.ip(a,null,b)
return b},
hl:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.hr(a)
s=J.q(a)
if(s[b]==null)return!1
return H.jy(H.ir(s[d],t),c)},
d_:function(a,b,c,d){var t,s
if(a==null)return a
t=H.hl(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.cZ(c,0,null)
throw H.c(H.iK(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
lZ:function(a,b,c,d){var t,s
if(a==null)return a
t=H.hl(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.cZ(c,0,null)
throw H.c(H.a1(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
jy:function(a,b){var t,s,r,q,p
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
if(!H.O(r,b[p]))return!1}return!0},
m_:function(a,b,c){return H.ip(a,b,H.jE(b,c))},
O:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.name==="H")return!0
if('func' in b)return H.jG(a,b)
if('func' in a)return b.name==="hV"||b.name==="B"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.b(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.b(!0)
q=b[0]}else q=b
if(q!==s){p=H.hH(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.jy(H.ir(o,t),r)},
jx:function(a,b,c){var t,s,r,q,p,o,n
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
if(!(H.O(o,n)||H.O(n,o)))return!1}return!0},
lt:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
H.b(typeof a=='object')
H.b(typeof b=='object')
t=J.a6(Object.getOwnPropertyNames(b))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.O(p,o)||H.O(o,p)))return!1}return!0},
jG:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.b('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.O(t,s)||H.O(s,t)))return!1}r=a.args
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
if(n===m){if(!H.jx(r,q,!1))return!1
if(!H.jx(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.b(j)
g=r[h]
H.b(i)
f=q[h]
if(!(H.O(g,f)||H.O(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=q[e]
if(!(H.O(g,f)||H.O(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=o[e]
if(!(H.O(g,f)||H.O(f,g)))return!1}}return H.lt(a.named,b.named)},
ip:function(a,b,c){H.b(typeof a=="function")
H.b(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
m7:function(a){var t=$.im
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
m3:function(a){return H.as(a)},
m0:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
lL:function(a){var t,s,r,q,p,o
H.b(!(a instanceof P.B))
t=$.im.$1(a)
s=$.ho[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.hx[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.jw.$2(a,t)
if(t!=null){s=$.ho[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.hx[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.hF(r)
$.ho[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.hx[t]=r
return r}if(p==="-"){o=H.hF(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.jH(a,r)
if(p==="*")throw H.c(P.jk(t))
if(u.leafTags[t]===true){o=H.hF(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.jH(a,r)},
jH:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.iq(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
hF:function(a){return J.iq(a,!1,null,!!a.$isp)},
lN:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return H.hF(t)
else return J.iq(t,c,null,null)},
lG:function(){if(!0===$.io)return
$.io=!0
H.lH()},
lH:function(){var t,s,r,q,p,o,n,m
$.ho=Object.create(null)
$.hx=Object.create(null)
H.lF()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.jK.$1(p)
if(o!=null){n=H.lN(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
lF:function(){var t,s,r,q,p,o,n
t=C.G()
t=H.aL(C.D,H.aL(C.I,H.aL(C.u,H.aL(C.u,H.aL(C.H,H.aL(C.E,H.aL(C.F(C.v),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.im=new H.hu(p)
$.jw=new H.hv(o)
$.jK=new H.hw(n)},
aL:function(a,b){return a(b)||b},
eP:function eP(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fp:function fp(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eC:function eC(a,b){this.a=a
this.b=b},
ec:function ec(a,b,c){this.a=a
this.b=b
this.c=c},
ft:function ft(a){this.a=a},
hK:function hK(a){this.a=a},
cC:function cC(a,b){this.a=a
this.b=b},
hy:function hy(a){this.a=a},
hz:function hz(a,b){this.a=a
this.b=b},
hA:function hA(a,b,c){this.a=a
this.b=b
this.c=c},
hB:function hB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hC:function hC(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ak:function ak(){},
fd:function fd(){},
f4:function f4(){},
aT:function aT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fr:function fr(a){this.a=a},
da:function da(a){this.a=a},
eU:function eU(a){this.a=a},
fB:function fB(a){this.a=a},
a9:function a9(a,b){this.a=a
this.b=b},
a7:function a7(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
eb:function eb(a){this.a=a},
ee:function ee(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ef:function ef(a,b){this.a=a
this.$ti=b},
eg:function eg(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hu:function hu(a){this.a=a},
hv:function hv(a){this.a=a},
hw:function hw(a){this.a=a},
hh:function(a){var t,s,r
if(!!J.q(a).$isn)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
a3:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.aM(b,a))},
b1:function b1(){},
aF:function aF(){},
eu:function eu(){},
bR:function bR(){},
bS:function bS(){},
bT:function bT(){},
bQ:function bQ(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(){},
ey:function ey(){},
ez:function ez(){},
eA:function eA(){},
bU:function bU(){},
eB:function eB(){},
bd:function bd(){},
be:function be(){},
bf:function bf(){},
bg:function bg(){},
lA:function(a){return J.a6(H.E(a?Object.keys(a):[],[null]))},
hG:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
q:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.bK.prototype
return J.e9.prototype}if(typeof a=="string")return J.ao.prototype
if(a==null)return J.ea.prototype
if(typeof a=="boolean")return J.e8.prototype
if(a.constructor==Array)return J.an.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ap.prototype
return a}if(a instanceof P.B)return a
return J.hq(a)},
iq:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hq:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.io==null){H.lG()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.c(P.jk("Return interceptor for "+H.f(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$hZ()]
if(p!=null)return p
p=H.lL(a)
if(p!=null)return p
if(typeof a=="function")return C.J
s=Object.getPrototypeOf(a)
if(s==null)return C.w
if(s===Object.prototype)return C.w
if(typeof q=="function"){Object.defineProperty(q,$.$get$hZ(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
a6:function(a){a.fixed$length=Array
return a},
P:function(a){if(typeof a=="string")return J.ao.prototype
if(a==null)return a
if(a.constructor==Array)return J.an.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ap.prototype
return a}if(a instanceof P.B)return a
return J.hq(a)},
cX:function(a){if(a==null)return a
if(a.constructor==Array)return J.an.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ap.prototype
return a}if(a instanceof P.B)return a
return J.hq(a)},
jC:function(a){if(typeof a=="number")return J.aC.prototype
if(a==null)return a
if(!(a instanceof P.B))return J.at.prototype
return a},
lC:function(a){if(typeof a=="number")return J.aC.prototype
if(typeof a=="string")return J.ao.prototype
if(a==null)return a
if(!(a instanceof P.B))return J.at.prototype
return a},
lD:function(a){if(typeof a=="string")return J.ao.prototype
if(a==null)return a
if(!(a instanceof P.B))return J.at.prototype
return a},
k:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ap.prototype
return a}if(a instanceof P.B)return a
return J.hq(a)},
A:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.q(a).v(a,b)},
V:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.jC(a).L(a,b)},
jS:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.jC(a).T(a,b)},
aQ:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lK(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.P(a).h(a,b)},
jT:function(a,b,c,d){return J.k(a).d3(a,b,c,d)},
is:function(a,b){return J.lD(a).av(a,b)},
it:function(a,b){return J.k(a).bu(a,b)},
iu:function(a,b,c){return J.k(a).bw(a,b,c)},
jU:function(a,b){return J.k(a).dt(a,b)},
hL:function(a,b,c){return J.k(a).bx(a,b,c)},
jV:function(a,b,c){return J.k(a).by(a,b,c)},
br:function(a,b,c){return J.k(a).bz(a,b,c)},
d0:function(a,b){return J.k(a).dw(a,b)},
jW:function(a,b){return J.k(a).bA(a,b)},
jX:function(a,b,c){return J.k(a).bB(a,b,c)},
iv:function(a,b,c,d){return J.k(a).bC(a,b,c,d)},
jY:function(a,b){return J.cX(a).bD(a,b)},
jZ:function(a,b,c,d,e){return J.k(a).bE(a,b,c,d,e)},
k_:function(a,b){return J.lC(a).X(a,b)},
hM:function(a){return J.k(a).bG(a)},
k0:function(a){return J.k(a).bH(a)},
k1:function(a){return J.k(a).bK(a)},
k2:function(a){return J.k(a).dD(a)},
k3:function(a,b){return J.k(a).bM(a,b)},
hN:function(a,b){return J.k(a).bN(a,b)},
k4:function(a,b,c,d){return J.k(a).bO(a,b,c,d)},
k5:function(a,b,c,d,e){return J.k(a).dJ(a,b,c,d,e)},
k6:function(a,b,c,d,e){return J.k(a).bP(a,b,c,d,e)},
k7:function(a,b,c,d,e,f){return J.k(a).dK(a,b,c,d,e,f)},
k8:function(a,b){return J.cX(a).p(a,b)},
d1:function(a,b){return J.k(a).bQ(a,b)},
k9:function(a,b){return J.k(a).bR(a,b)},
ka:function(a){return J.k(a).dL(a)},
iw:function(a,b){return J.cX(a).am(a,b)},
aR:function(a){return J.q(a).gu(a)},
bs:function(a){return J.cX(a).gA(a)},
aS:function(a){return J.P(a).gj(a)},
kb:function(a){return J.q(a).gw(a)},
kc:function(a){return J.k(a).gaq(a)},
hO:function(a){return J.k(a).gm(a)},
hP:function(a){return J.k(a).gn(a)},
ix:function(a){return J.k(a).gB(a)},
kd:function(a){return J.k(a).ar(a)},
ke:function(a){return J.k(a).aT(a)},
kf:function(a,b){return J.k(a).aU(a,b)},
kg:function(a,b,c){return J.k(a).aV(a,b,c)},
iy:function(a,b,c){return J.k(a).aY(a,b,c)},
kh:function(a,b){return J.k(a).bU(a,b)},
ki:function(a,b){return J.cX(a).bW(a,b)},
kj:function(a,b,c){return J.k(a).bY(a,b,c)},
kk:function(a,b){return J.k(a).F(a,b)},
kl:function(a,b,c,d){return J.k(a).b1(a,b,c,d)},
km:function(a,b,c,d,e,f,g){return J.k(a).c3(a,b,c,d,e,f,g)},
kn:function(a,b,c,d){return J.k(a).c4(a,b,c,d)},
iz:function(a,b,c,d){return J.k(a).c5(a,b,c,d)},
bt:function(a){return J.q(a).k(a)},
ko:function(a,b,c,d){return J.k(a).ec(a,b,c,d)},
kp:function(a,b,c){return J.k(a).c8(a,b,c)},
kq:function(a,b,c){return J.k(a).c9(a,b,c)},
hQ:function(a,b,c){return J.k(a).ca(a,b,c)},
kr:function(a,b,c){return J.k(a).cb(a,b,c)},
iA:function(a,b,c){return J.k(a).cc(a,b,c)},
iB:function(a,b,c){return J.k(a).cd(a,b,c)},
iC:function(a,b,c){return J.k(a).ce(a,b,c)},
iD:function(a,b,c,d){return J.k(a).cf(a,b,c,d)},
iE:function(a,b,c,d){return J.k(a).cg(a,b,c,d)},
ks:function(a,b){return J.k(a).cj(a,b)},
kt:function(a,b,c){return J.k(a).ed(a,b,c)},
ku:function(a,b,c,d,e,f,g){return J.k(a).cl(a,b,c,d,e,f,g)},
kv:function(a,b,c,d,e){return J.k(a).cn(a,b,c,d,e)},
a:function a(){},
e8:function e8(){},
ea:function ea(){},
aZ:function aZ(){},
eH:function eH(){},
at:function at(){},
ap:function ap(){},
an:function an(a){this.$ti=a},
hX:function hX(a){this.$ti=a},
d6:function d6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aC:function aC(){},
bK:function bK(){},
e9:function e9(){},
ao:function ao(){}},P={
le:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.lu()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.bq(new P.fD(t),1)).observe(s,{childList:true})
return new P.fC(t,s,r)}else if(self.setImmediate!=null)return P.lv()
return P.lw()},
lf:function(a){H.hp()
self.scheduleImmediate(H.bq(new P.fE(a),0))},
lg:function(a){H.hp()
self.setImmediate(H.bq(new P.fF(a),0))},
lh:function(a){P.i6(C.r,a)},
i6:function(a,b){var t=C.b.U(a.a,1000)
return H.l8(t<0?0:t,b)},
lp:function(a,b){if(H.aN(a,{func:1,args:[P.H,P.H]})){b.toString
return a}else{b.toString
return a}},
li:function(a,b){var t,s,r
H.b(b.a<4)
H.b(!(a instanceof P.a2))
H.b(b.a===0)
b.a=1
try{a.c7(new P.fQ(b),new P.fR(b))}catch(r){t=H.ag(r)
s=H.ae(r)
P.lR(new P.fS(b,t,s))}},
jo:function(a,b){var t,s,r
H.b(b.a<=1)
for(;t=a.a,s=t===2,s;){H.b(s)
a=a.c}if(t>=4){r=b.aF()
b.au(a)
P.bb(b,r)}else{r=b.c
H.b(b.a<=1)
b.a=2
b.c=a
a.bo(r)}},
bb:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.hi(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bb(t.a,b)}s=t.a
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
P.hi(null,null,p,o,s)
return}s=$.z
if(s==null?l!=null:s!==l){H.b(l!=null)
s=$.z
H.b(l==null?s!=null:l!==s)
j=$.z
$.z=l
i=j}else i=null
s=b.c
if(s===8)new P.fW(t,r,b,q).$0()
else if(p){if((s&1)!==0)new P.fV(r,b,m).$0()}else if((s&2)!==0)new P.fU(t,r,b).$0()
if(i!=null){H.b(!0)
$.z=i}s=r.b
if(!!J.q(s).$isdY){if(s.a>=4){H.b(o.a<4)
h=o.c
o.c=null
b=o.ak(h)
H.b(o.a<4)
H.b(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.jo(s,o)
return}}g=b.b
H.b(g.a<4)
h=g.c
g.c=null
b=g.ak(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.b(!o)
g.a=4
g.c=p}else{H.b(!o)
g.a=8
g.c=p}t.a=g
s=g}},
lo:function(){var t,s
for(;t=$.aK,t!=null;){$.bn=null
s=t.b
$.aK=s
if(s==null)$.bm=null
t.a.$0()}},
ls:function(){$.ii=!0
try{P.lo()}finally{$.bn=null
$.ii=!1
if($.aK!=null)$.$get$id().$1(P.jz())}},
jt:function(a){var t=new P.cc(a,null)
if($.aK==null){$.bm=t
$.aK=t
if(!$.ii)$.$get$id().$1(P.jz())}else{$.bm.b=t
$.bm=t}},
lr:function(a){var t,s,r
t=$.aK
if(t==null){P.jt(a)
$.bn=$.bm
return}s=new P.cc(a,null)
r=$.bn
if(r==null){s.b=t
$.bn=s
$.aK=s}else{s.b=r.b
r.b=s
$.bn=s
if(s.b==null)$.bm=s}},
lR:function(a){var t=$.z
if(C.e===t){P.hk(null,null,C.e,a)
return}t.toString
P.hk(null,null,t,t.aL(a))},
l9:function(a,b){var t=$.z
if(t===C.e){t.toString
return P.i6(a,b)}return P.i6(a,t.aL(b))},
ic:function(a){var t,s
H.b(a!=null)
t=$.z
H.b(a==null?t!=null:a!==t)
s=$.z
$.z=a
return s},
hi:function(a,b,c,d,e){var t={}
t.a=d
P.lr(new P.hj(t,e))},
jr:function(a,b,c,d){var t,s
if($.z===c)return d.$0()
t=P.ic(c)
try{s=d.$0()
return s}finally{s=t
H.b(s!=null)
$.z=s}},
js:function(a,b,c,d,e){var t,s
if($.z===c)return d.$1(e)
t=P.ic(c)
try{s=d.$1(e)
return s}finally{s=t
H.b(s!=null)
$.z=s}},
lq:function(a,b,c,d,e,f){var t,s
if($.z===c)return d.$2(e,f)
t=P.ic(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.b(s!=null)
$.z=s}},
hk:function(a,b,c,d){var t=C.e!==c
if(t)d=!(!t||!1)?c.aL(d):c.du(d)
P.jt(d)},
fD:function fD(a){this.a=a},
fC:function fC(a,b,c){this.a=a
this.b=b
this.c=c},
fE:function fE(a){this.a=a},
fF:function fF(a){this.a=a},
hT:function hT(){},
fH:function fH(){},
hf:function hf(a,b){this.a=a
this.$ti=b},
ck:function ck(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
a2:function a2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
fP:function fP(a,b){this.a=a
this.b=b},
fT:function fT(a,b){this.a=a
this.b=b},
fQ:function fQ(a){this.a=a},
fR:function fR(a){this.a=a},
fS:function fS(a,b,c){this.a=a
this.b=b
this.c=c},
fW:function fW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fX:function fX(a){this.a=a},
fV:function fV(a,b,c){this.a=a
this.b=b
this.c=c},
fU:function fU(a,b,c){this.a=a
this.b=b
this.c=c},
cc:function cc(a,b){this.a=a
this.b=b},
f7:function f7(){},
f9:function f9(a){this.a=a},
fa:function fa(a,b){this.a=a
this.b=b},
f8:function f8(){},
i5:function i5(){},
ax:function ax(a,b){this.a=a
this.b=b},
hg:function hg(){},
hj:function hj(a,b){this.a=a
this.b=b},
h9:function h9(){},
hb:function hb(a,b){this.a=a
this.b=b},
ha:function ha(a,b){this.a=a
this.b=b},
hc:function hc(a,b){this.a=a
this.b=b},
S:function(){return new H.a7(0,null,null,null,null,null,0,[null,null])},
aq:function(a){return H.lB(a,new H.a7(0,null,null,null,null,null,0,[null,null]))},
aI:function(a,b){return new P.h3(0,null,null,null,null,null,0,[a,b])},
bL:function(a,b,c,d){return new P.h1(0,null,null,null,null,null,0,[d])},
ig:function(){var t=Object.create(null)
H.b(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
kQ:function(a,b,c){var t,s
if(P.ij(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$bo()
C.a.l(s,a)
try{P.ln(a,t)}finally{H.b(C.a.gap(s)===a)
s.pop()}s=P.j4(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
e7:function(a,b,c){var t,s,r
if(P.ij(a))return b+"..."+c
t=new P.b6(b)
s=$.$get$bo()
C.a.l(s,a)
try{r=t
r.a=P.j4(r.gW(),a,", ")}finally{H.b(C.a.gap(s)===a)
s.pop()}s=t
s.a=s.gW()+c
s=t.gW()
return s.charCodeAt(0)==0?s:s},
ij:function(a){var t,s
for(t=0;s=$.$get$bo(),t<s.length;++t)if(a===s[t])return!0
return!1},
ln:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gA(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.q())return
q=H.f(t.gt(t))
C.a.l(b,q)
s+=q.length+2;++r}if(!t.q()){if(r<=5)return
p=b.pop()
o=b.pop()}else{n=t.gt(t);++r
if(!t.q()){if(r<=4){C.a.l(b,H.f(n))
return}p=H.f(n)
o=b.pop()
s+=p.length+2}else{m=t.gt(t);++r
H.b(r<100)
for(;t.q();n=m,m=l){l=t.gt(t);++r
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
kS:function(a,b){var t,s
t=P.bL(null,null,null,b)
for(s=J.bs(a);s.q();)t.l(0,s.gt(s))
return t},
iV:function(a){var t,s,r
t={}
if(P.ij(a))return"{...}"
s=new P.b6("")
try{C.a.l($.$get$bo(),a)
r=s
r.a=r.gW()+"{"
t.a=!0
J.iw(a,new P.el(t,s))
t=s
t.a=t.gW()+"}"}finally{t=$.$get$bo()
H.b(C.a.gap(t)===a)
t.pop()}t=s.gW()
return t.charCodeAt(0)==0?t:t},
i2:function(a,b){var t=new P.eh(null,0,0,0,[b])
t.cS(a,b)
return t},
h3:function h3(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
h1:function h1(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
h2:function h2(a,b,c){this.a=a
this.b=b
this.c=c},
bc:function bc(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
fZ:function fZ(){},
i1:function i1(){},
l:function l(){},
ek:function ek(){},
el:function el(a,b){this.a=a
this.b=b},
b_:function b_(){},
eh:function eh(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
h4:function h4(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
eX:function eX(){},
eW:function eW(){},
kG:function(a){var t=J.q(a)
if(!!t.$isak)return t.k(a)
return"Instance of '"+H.b2(a)+"'"},
iU:function(a,b,c){var t,s
t=H.E([],[c])
for(s=J.bs(a);s.q();)C.a.l(t,s.gt(s))
if(b)return t
return J.a6(t)},
j4:function(a,b,c){var t=J.bs(b)
if(!t.q())return a
if(c.length===0){do a+=H.f(t.gt(t))
while(t.q())}else{a+=H.f(t.gt(t))
for(;t.q();)a=a+c+H.f(t.gt(t))}return a},
kC:function(a,b){return J.k_(a,b)},
kD:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+t
if(t>=10)return s+"00"+t
return s+"000"+t},
kE:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bz:function(a){if(a>=10)return""+a
return"0"+a},
kF:function(a,b,c,d,e,f){return new P.am(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
bE:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bt(a)
if(typeof a==="string")return JSON.stringify(a)
return P.kG(a)},
kx:function(a){return new P.bv(a)},
d5:function(a){return new P.W(!1,null,null,a)},
hR:function(a,b,c){return new P.W(!0,a,b,c)},
kw:function(a){return new P.W(!1,null,a,"Must not be null")},
eM:function(a,b,c){return new P.bY(null,null,!0,a,b,"Value not in range")},
b3:function(a,b,c,d,e){return new P.bY(b,c,!0,a,d,"Invalid value")},
j1:function(a,b,c,d,e,f){if(C.b.L(0,a)||C.b.L(a,c))throw H.c(P.b3(a,0,c,"start",f))
if(b!=null){if(a>b||C.b.L(b,c))throw H.c(P.b3(b,a,c,"end",f))
return b}return c},
y:function(a,b,c,d,e){var t=e!=null?e:J.aS(b)
return new P.e4(b,t,!0,a,c,"Index out of range")},
r:function(a){return new P.fu(a)},
jk:function(a){return new P.fs(a)},
l7:function(a){return new P.b5(a)},
al:function(a){return new P.dc(a)},
bF:function(a){return new P.fO(a)},
a5:function(a){H.hG(H.f(a))},
bp:function bp(){},
C:function C(){},
aV:function aV(a,b){this.a=a
this.b=b},
N:function N(){},
am:function am(a){this.a=a},
dt:function dt(){},
du:function du(){},
aA:function aA(){},
bv:function bv(a){this.a=a},
bX:function bX(){},
W:function W(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bY:function bY(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
e4:function e4(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fu:function fu(a){this.a=a},
fs:function fs(a){this.a=a},
b5:function b5(a){this.a=a},
dc:function dc(a){this.a=a},
c4:function c4(){},
dl:function dl(a){this.a=a},
hU:function hU(){},
fO:function fO(a){this.a=a},
dw:function dw(a,b,c){this.a=a
this.b=b
this.$ti=c},
v:function v(){},
Y:function Y(){},
bJ:function bJ(){},
i:function i(){},
aE:function aE(){},
H:function H(){},
U:function U(){},
B:function B(){},
aG:function aG(){},
w:function w(){},
b6:function b6(a){this.a=a},
i9:function i9(){},
hn:function(a){var t,s,r,q,p
if(a==null)return
t=P.S()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.F)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
ly:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.iw(a,new P.hm(t))
return t},
hm:function hm(a){this.a=a},
h0:function h0(){},
h8:function h8(){},
L:function L(){},
dx:function dx(){},
dy:function dy(){},
dz:function dz(){},
dA:function dA(){},
dB:function dB(){},
dC:function dC(){},
dD:function dD(){},
dE:function dE(){},
dF:function dF(){},
dG:function dG(){},
dH:function dH(){},
dI:function dI(){},
dJ:function dJ(){},
dK:function dK(){},
dL:function dL(){},
dM:function dM(){},
dN:function dN(){},
dO:function dO(){},
dS:function dS(){},
dV:function dV(){},
R:function R(){},
X:function X(){},
e2:function e2(){},
ed:function ed(){},
en:function en(){},
eD:function eD(){},
eF:function eF(){},
eJ:function eJ(){},
eK:function eK(){},
eN:function eN(){},
eO:function eO(){},
fb:function fb(){},
t:function t(){},
fc:function fc(){},
b7:function b7(){},
b8:function b8(){},
fo:function fo(){},
fw:function fw(){},
cn:function cn(){},
co:function co(){},
cu:function cu(){},
cv:function cv(){},
cE:function cE(){},
cF:function cF(){},
cK:function cK(){},
cL:function cL(){},
d7:function d7(){},
d8:function d8(){},
ay:function ay(){},
eE:function eE(){},
eS:function eS(){},
eT:function eT(){},
f3:function f3(){},
cA:function cA(){},
cB:function cB(){}},W={
aw:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jq:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jn:function(a,b,c,d,e){var t=c==null?null:W.jv(new W.fN(c))
t=new W.fM(0,a,b,t,!1,[e])
t.d0(a,b,c,!1,e)
return t},
jv:function(a){var t=$.z
if(t===C.e)return a
return t.dv(a)},
h:function h(){},
bu:function bu(){},
d2:function d2(){},
d3:function d3(){},
d4:function d4(){},
ah:function ah(){},
bw:function bw(){},
bx:function bx(){},
aj:function aj(){},
dd:function dd(){},
de:function de(){},
df:function df(){},
dg:function dg(){},
aU:function aU(){},
dh:function dh(){},
Q:function Q(){},
az:function az(){},
di:function di(){},
dj:function dj(){},
dk:function dk(){},
dm:function dm(){},
dn:function dn(){},
aW:function aW(){},
dp:function dp(){},
dq:function dq(){},
bA:function bA(){},
bB:function bB(){},
bC:function bC(){},
dr:function dr(){},
ds:function ds(){},
bD:function bD(){},
e:function e(){},
d:function d(){},
dQ:function dQ(){},
dR:function dR(){},
dW:function dW(){},
e_:function e_(){},
e0:function e0(){},
aX:function aX(){},
bI:function bI(){},
e1:function e1(){},
aY:function aY(){},
ei:function ei(){},
ej:function ej(){},
ep:function ep(){},
er:function er(){},
b0:function b0(){},
es:function es(){},
x:function x(){},
bW:function bW(){},
Z:function Z(){},
eI:function eI(){},
eL:function eL(){},
c0:function c0(){},
eV:function eV(){},
a8:function a8(){},
f0:function f0(){},
f2:function f2(){},
a_:function a_(){},
f5:function f5(){},
f6:function f6(a){this.a=a},
fe:function fe(){},
ff:function ff(){},
fh:function fh(){},
fm:function fm(){},
fn:function fn(){},
fv:function fv(){},
fx:function fx(){},
fy:function fy(){},
fz:function fz(){},
ba:function ba(){},
fA:function fA(a){this.a=a},
ib:function ib(){},
fI:function fI(){},
fJ:function fJ(){},
fY:function fY(){},
cr:function cr(){},
hd:function hd(){},
he:function he(){},
ie:function ie(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
fM:function fM(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fN:function fN(a){this.a=a},
m:function m(){},
dT:function dT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cd:function cd(){},
ce:function ce(){},
cf:function cf(){},
cg:function cg(){},
ch:function ch(){},
ci:function ci(){},
cj:function cj(){},
cl:function cl(){},
cm:function cm(){},
cp:function cp(){},
cq:function cq(){},
cs:function cs(){},
ct:function ct(){},
cw:function cw(){},
cx:function cx(){},
bh:function bh(){},
bi:function bi(){},
cy:function cy(){},
cz:function cz(){},
cD:function cD(){},
cG:function cG(){},
cH:function cH(){},
bj:function bj(){},
bk:function bk(){},
cI:function cI(){},
cJ:function cJ(){},
cM:function cM(){},
cN:function cN(){},
cO:function cO(){},
cP:function cP(){},
cQ:function cQ(){},
cR:function cR(){},
cS:function cS(){},
cT:function cT(){},
cU:function cU(){},
cV:function cV(){}},G={
ld:function(a){var t,s,r
t=H.E(a.split("\n"),[P.w])
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.f(t[s])}return C.a.aa(t,"\n")},
jm:function(a,b,c){var t,s,r,q
t=J.k(a)
s=t.bJ(a,b)
t.b0(a,s,c)
t.bF(a,s)
r=t.aX(a,s,35713)
if(r!=null&&!r){q=t.aW(a,s)
P.a5("E:Compilation failed:")
P.a5("E:"+G.ld(c))
P.a5("E:Failure:")
P.a5(C.j.V("E:",q))
throw H.c(q)}return s},
iW:function(a,b){var t=new G.eo(P.S(),a,!1,!0)
t.cT(a,b)
return t},
iO:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.hO(a[s])
b[t+1]=J.hP(a[s])
b[t+2]=J.ix(a[s])}return b},
kI:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.hO(a[s])
b[t+1]=J.hP(a[s])}return b},
kJ:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.hO(a[s])
b[t+1]=J.hP(a[s])
b[t+2]=J.ix(a[s])
b[t+3]=J.kc(a[s])}return b},
kH:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.aQ(a[s],0)
b[t+1]=J.aQ(a[s],1)
b[t+2]=J.aQ(a[s],2)
b[t+3]=J.aQ(a[s],3)}return b},
iX:function(a,b,c,d){return new G.eq(b,J.k2(b.a),c,P.S(),d,null,0,-1,null,null,P.S(),"meshdata:"+a,!1,!0)},
lj:function(a,b){var t,s,r,q,p,o,n,m,l,k
for(t=a.e,s=t.gG(t),s=s.gA(s),r=b.x,q=[[P.i,P.v]],p=[P.N],o=[T.ab],n=[T.o],m=[T.aa];s.q();){l=s.gt(s)
if(!r.C(0,l)){l="Dropping unnecessary attribute: "+H.f(l)
if($.jB>0)H.hG("I: "+l)
continue}k=t.h(0,l)
switch($.$get$K().h(0,l).a){case"vec2":b.a2(l,G.kI(H.d_(k,"$isi",m,"$asi"),null),2)
break
case"vec3":b.a2(l,G.iO(H.d_(k,"$isi",n,"$asi"),null),3)
break
case"vec4":b.a2(l,G.kJ(H.d_(k,"$isi",o,"$asi"),null),4)
break
case"float":b.a2(l,new Float32Array(H.hh(H.d_(k,"$isi",p,"$asi"))),1)
break
case"uvec4":b.a2(l,G.kH(H.d_(k,"$isi",q,"$asi"),null),4)
break
default:if(H.a4(!1))H.ac("unknown type for "+H.f(l)+" ["+J.kb(k[0]).k(0)+"] ["+new H.a9(H.hs(k),null).k(0)+"] "+H.f(k))}}},
j2:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.bL(null,null,null,P.w)
s=c.b
r=d.b
q=c.f
p=J.k0(b.a)
o=G.jm(b.a,35633,s)
J.iu(b.a,p,o)
n=G.jm(b.a,35632,r)
J.iu(b.a,p,n)
if(q.length>0)J.ko(b.a,p,q,35980)
J.kh(b.a,p)
if(!J.kg(b.a,p,35714))H.G(J.kf(b.a,p))
t=new G.eR(b,c,d,p,P.kS(c.c,null),P.S(),P.S(),t,null,a,!1,!0)
t.cV(a,b,c,d)
return t},
eZ:function(a){return new G.eY(a,null,[],[],[],[],0,P.S())},
iP:function(a,b,c,d,e){var t=new G.e3(c,b,J.k1(a.a),e,a,new G.fg(!1,!1,!1,!0,1,9729,9729))
t.cR(a,b,c,d,e)
return t},
et:function et(){},
cb:function cb(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
d9:function d9(){},
db:function db(a,b){this.a=a
this.b=b},
dX:function dX(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dP:function dP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dZ:function dZ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
c9:function c9(a,b,c){this.a=a
this.b=b
this.c=c},
c8:function c8(a,b,c){this.a=a
this.b=b
this.c=c},
eo:function eo(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
eq:function eq(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
eG:function eG(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
eR:function eR(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
u:function u(a,b,c){this.a=a
this.b=b
this.c=c},
eY:function eY(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
f1:function f1(){},
fg:function fg(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
b9:function b9(){},
e3:function e3(a,b,c,d,e,f){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f}},R={
lc:function(a,b,c){var t,s,r,q
t="stars_"+b
s=b*3
r=new Float32Array(s)
for(q=0;q<s;++q)r[q]=($.$get$jl().e1()-0.5)*c
s=G.iX(t,a.d,0,a.e.x)
s.b6(r)
return s},
c_:function c_(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
_.c=m}},A={
jA:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=b.dx
t.D(c)
s=b.d
t.bX(0,s)
r=b.cx
H.f(b)
q=C.a.gap(e)
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
p.dB(new T.ar(o))
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
a.cM(r,e,d)
e.pop()
for(s=b.cy,r=s.length,l=0;l<s.length;s.length===r||(0,H.F)(s),++l)A.jA(a,s[l],t,d,e)},
bV:function bV(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
b4:function b4(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.a=d
_.b=e
_.c=f},
eQ:function eQ(){},
cY:function(a){var t,s
t=C.K.dO(a,0,new A.ht())
s=536870911&t+(C.b.co(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
ht:function ht(){}},B={
i7:function(a,b,c,d,e,f){var t,s,r,q,p
t=b*a
s=Math.cos(t)
r=Math.sin(t)
t=c*a
q=Math.cos(t)
p=Math.sin(t)
t=d*(2+s)*0.5
f.sm(0,t*q)
f.sn(0,t*p)
f.sB(0,e*d*0.5*r)},
l3:function(a,b,c,d,e,f,g,h,i,j){var t,s,r,q,p,o,n,m,l,k
t=B.kT(new B.f_(e,d,f,c),0,6.283185307179586,g,!0,0.001)
H.b(t.length===2*g)
s=B.lb(t,h,i,!0)
H.b(s.length===g)
H.b(s[0].length===2*h)
r=[]
q=new G.dZ(!1,[],[],r,P.S())
for(p=s.length,o=0;o<s.length;s.length===p||(0,H.F)(s),++o){n=s[o]
for(m=0;m<n.length;m+=2){l=n[m]
l.toString
k=new T.o(new Float32Array(3))
k.D(l)
C.a.l(r,k)}}H.b(r.length===h*g)
q.cP(h,g,!0)
return q},
lb:function(a0,a1,a2,a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
t=[]
s=new Float32Array(3)
r=new T.o(s)
q=new Float32Array(3)
p=new T.o(q)
o=new Float32Array(3)
n=new T.o(o)
for(m=0;m<a0.length;m+=2){l=a0[m]
k=a0[m+1]
j=[]
C.a.l(t,j)
i=k.a
h=i[2]
if(Math.abs(h)>0.7071067811865476){g=i[1]
f=g*g+h*h
e=1/Math.sqrt(f)
q[0]=0
q[1]=-i[2]*e
q[2]=i[1]*e
o[0]=f*e
o[1]=-i[0]*(i[1]*e)
o[2]=i[0]*(-i[2]*e)}else{h=i[0]
g=i[1]
f=h*h+g*g
e=1/Math.sqrt(f)
q[0]=-i[1]*e
q[1]=i[0]*e
q[2]=0
o[0]=-i[2]*(i[0]*e)
o[1]=i[2]*(-i[1]*e)
o[2]=f*e}p.a_(0)
n.a_(0)
for(d=0;d<a1;++d){c=d/a1*2*3.141592653589793
b=a2*Math.cos(c)
a=a2*Math.sin(c)
r.D(l)
r.al(p,b)
r.al(n,a)
i=new T.o(new Float32Array(3))
i.D(r)
C.a.l(j,i)
s[2]=0
s[1]=0
s[0]=0
r.al(p,b)
r.al(n,a)
r.a_(0)
i=new T.o(new Float32Array(3))
i.D(r)
C.a.l(j,i)}}return t},
kT:function(a,b,c,d,e,f){var t,s,r,q,p,o,n
H.b(d>=2)
t=[]
s=new T.o(new Float32Array(3))
r=new T.o(new Float32Array(3))
for(q=(c-b)/(d-0),p=0;p<d;++p){o=q*p+b
a.$2(o,s)
a.$2(o+f,r)
r.b2(0,s)
n=new T.o(new Float32Array(3))
n.D(s)
C.a.l(t,n)
n=new T.o(new Float32Array(3))
n.D(r)
C.a.l(t,n)}return t},
f_:function f_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fl:function fl(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
_.fy=a
_.go=b
_.id=c
_.k1=d
_.k2=e
_.k3=f
_.d=g
_.e=h
_.f=i
_.r=j
_.x=k
_.a=l
_.b=m
_.c=n}},T={
ia:function(a,b){var t=new Float32Array(2)
t[0]=a
t[1]=b
return new T.aa(t)},
ar:function ar(a){this.a=a},
I:function I(a){this.a=a},
aa:function aa(a){this.a=a},
o:function o(a){this.a=a},
ab:function ab(a){this.a=a}},M={
jR:function(a,b){var t,s,r,q,p
t=(b&&C.p).aR(b,"2d")
s=(Math.sin(a)+1)/2;(t&&C.k).e3(t,0,0,b.width,b.height)
r=C.k.dC(t,0,0,b.width*s,b.height)
q=Math.floor(360*s)
p=Math.floor(90*s);(r&&C.h).I(r,0,"hsla("+H.f(q)+", 100%, 40%, 1)")
C.h.I(r,0.2,"black")
C.h.I(r,0.3,"black")
C.h.I(r,0.5,"hsla("+H.f(p)+", 100%, 40%, 1)")
C.h.I(r,0.7,"black")
C.h.I(r,0.9,"black")
C.h.I(r,1,"hsla("+H.f(q)+", 100%, 40%, 1)")
t.fillStyle=r
t.fill("nonzero")},
la:function(a){var t,s,r,q,p,o,n,m
t=B.l3(!1,!1,1,2,3,20,128,17,4,!0)
t.cN("aTexUV")
s=[]
for(r=t.d,q=0;q<r.length;++q)C.a.l(s,$.$get$j5()[q%3])
t.cI("aTexUV",s)
p=G.iX("torusknot",a.d,4,a.e.x)
p.b6(G.iO(r,null))
r=t.cO()
o=p.d
p.y=J.hM(o.a)
H.b(p.ch!=null)
n=p.ch.length
if(n<768){p.saB(new Uint8Array(H.hh(r)))
p.Q=5121}else if(n<196608){p.saB(new Uint16Array(H.hh(r)))
p.Q=5123}else{p.saB(new Uint32Array(H.hh(r)))
p.Q=5125}J.d0(o.a,p.e)
r=p.y
n=p.cx
m=J.q(n)
H.b(!!m.$isjh||!!m.$isji||!!m.$isjj)
J.hL(o.a,34963,r)
J.iv(o.a,34963,n,35048)
G.lj(t,p)
return p},
lM:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
t={}
s=document
r=C.t.bZ(s,"#webgl-canvas")
q=new G.db(null,r)
p=(r&&C.p).aS(r,"webgl2",P.aq(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
q.a=p
if(p==null)H.G(P.bF('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
o="ChronosGL Config: "+H.f(J.kd(p))
if($.jB>0)P.a5("I: "+o)
J.jZ(p,0,0,0,1)
J.d1(p,2929)
p=new Float32Array(3)
o=new Float32Array(3)
n=new T.I(new Float32Array(16))
n.M()
m=new Float32Array(3)
l=new Float32Array(3)
k=new Float32Array(3)
j=new B.fl(20,2,3,1,new T.o(p),new T.o(o),n,new T.o(m),new T.o(l),new T.o(k),new T.o(new Float32Array(3)),"camera:torusknot",!1,!0)
p=new T.I(new Float32Array(16))
p.M()
o=new T.I(new Float32Array(16))
o.M()
i=new G.eG(j,50,1,0.1,1000,p,o,new T.I(new Float32Array(16)),P.S(),"perspective",!1,!0)
i.bb()
p=G.j2("textured",q,$.$get$jO(),$.$get$jN())
o=[]
n=H.E([],[A.b4])
h=new R.c_(r,i,null,q,n,17664,0,0,0,0,"main",!1,!0)
h.cU("main",q,null)
h.c0(null)
W.jn(window,"resize",h.ge6(),!1,W.e)
m=G.j2("stars",q,$.$get$jJ(),$.$get$jI())
l=[]
k=$.$get$iF()
g=G.iW("stars",k)
f=s.createElement("canvas")
f.width=64
f.height=64
e=C.p.aR(f,"2d")
d=(e&&C.k).bI(e,32,32,1,32,32,22);(d&&C.h).I(d,0,"gray")
C.h.I(d,1,"black")
e.fillStyle=d
C.k.dM(e,0,0,64,64)
d=C.k.bI(e,32,32,1,32,32,6);(d&&C.h).I(d,0,"white")
C.h.I(d,1,"gray")
e.globalAlpha=0.9
e.fillStyle=d
e.arc(32,32,4,0,6.283185307179586,!1)
e.fill("nonzero")
g.N("uTexture",G.iP(m.d,"Utils::Particles",f,null,3553))
g.N("uPointSize",1000)
c=R.lc(m,2000,100)
b=new Float32Array(9)
a=new T.I(new Float32Array(16))
a.M()
a0=new T.I(new Float32Array(16))
a0.M()
a1=new Float32Array(3)
a2=new Float32Array(3)
a3=new Float32Array(3)
a4=new Float32Array(3)
H.b(!0)
C.a.l(l,new A.bV(g,c,[],new T.ar(b),a,a0,new T.o(a1),new T.o(a2),new T.o(a3),new T.o(a4),c.a,!1,!0))
H.b(!0)
C.a.l(n,new A.b4(m,[i],l,"stars",!1,!0))
H.b(!0)
C.a.l(n,new A.b4(p,[i],o,"objects",!1,!0))
a5=C.t.bZ(s,"#texture")
M.jR(0,a5)
a6=G.iP(q,"gen",a5,null,3553)
g=G.iW("torus",k)
g.N("uTexture",a6)
g.N("uColor",new T.o(new Float32Array(3)))
s=M.la(p)
p=new Float32Array(9)
n=new T.I(new Float32Array(16))
n.M()
m=new T.I(new Float32Array(16))
m.M()
l=new Float32Array(3)
k=new Float32Array(3)
b=new Float32Array(3)
a=new Float32Array(3)
H.b(!0)
C.a.l(o,new A.bV(g,s,[],new T.ar(p),n,m,new T.o(l),new T.o(k),new T.o(b),new T.o(a),"torus",!1,!0))
t.a=0
new M.hE(t,j,a5,a6,h).$1(0)},
hE:function hE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e}}
var v=[C,H,J,P,W,G,R,A,B,T,M]
setFunctionNamesIfNecessary(v)
var $={}
H.hY.prototype={}
J.a.prototype={
v:function(a,b){return a===b},
gu:function(a){return H.as(a)},
k:function(a){return"Instance of '"+H.b2(a)+"'"},
gw:function(a){return new H.a9(H.hs(a),null)}}
J.e8.prototype={
k:function(a){return String(a)},
gu:function(a){return a?519018:218159},
gw:function(a){return C.ae},
$isbp:1}
J.ea.prototype={
v:function(a,b){return null==b},
k:function(a){return"null"},
gu:function(a){return 0},
gw:function(a){return C.a8},
$isH:1}
J.aZ.prototype={
gu:function(a){return 0},
gw:function(a){return C.a7},
k:function(a){return String(a)},
$isiT:1}
J.eH.prototype={}
J.at.prototype={}
J.ap.prototype={
k:function(a){var t=a[$.$get$iM()]
return t==null?this.cG(a):J.bt(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ishV:1}
J.an.prototype={
l:function(a,b){if(!!a.fixed$length)H.G(P.r("add"))
a.push(b)},
dq:function(a,b){var t,s,r,q,p
t=a.length
if(!!a.fixed$length)H.G(P.r("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.F)(b),++r,t=p){q=b[r]
p=t+1
H.b(t===a.length||H.G(P.al(a)))
a.push(q)}},
bW:function(a,b){return new H.bO(a,b,[H.aO(a,0),null])},
aa:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.f(a[s])
return t.join(b)},
p:function(a,b){return this.h(a,b)},
gdN:function(a){if(a.length>0)return a[0]
throw H.c(H.hW())},
gap:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.c(H.hW())},
aZ:function(a,b,c,d,e){var t,s,r
if(!!a.immutable$list)H.G(P.r("setRange"))
P.j1(b,c,a.length,null,null,null)
t=C.b.cD(c,b)
if(t===0)return
if(e<0)H.G(P.b3(e,0,null,"skipCount",null))
s=J.P(d)
if(C.b.L(e+t,s.gj(d)))throw H.c(H.kR())
if(C.b.T(e,b))for(r=t-1;r>=0;--r)a[b+r]=s.h(d,e+r)
else for(r=0;r<t;++r)a[b+r]=s.h(d,e+r)},
cA:function(a,b){if(!!a.immutable$list)H.G(P.r("sort"))
H.l6(a,P.lz())},
as:function(a){return this.cA(a,null)},
Y:function(a,b){var t
for(t=0;t<a.length;++t)if(J.A(a[t],b))return!0
return!1},
k:function(a){return P.e7(a,"[","]")},
gA:function(a){return new J.d6(a,a.length,0,null,[H.aO(a,0)])},
gu:function(a){return H.as(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.G(P.r("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.hR(b,"newLength",null))
if(b<0)throw H.c(P.b3(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.aM(a,b))
if(b>=a.length||b<0)throw H.c(H.aM(a,b))
return a[b]},
i:function(a,b,c){if(!!a.immutable$list)H.G(P.r("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.aM(a,b))
if(b>=a.length||b<0)throw H.c(H.aM(a,b))
a[b]=c},
$isn:1,
$asn:function(){},
$isj:1,
$isi:1}
J.hX.prototype={}
J.d6.prototype={
gt:function(a){return this.d},
q:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.c(H.F(t))
r=this.c
if(r>=s){this.sbc(null)
return!1}this.sbc(t[r]);++this.c
return!0},
sbc:function(a){this.d=a}}
J.aC.prototype={
X:function(a,b){var t
if(typeof b!=="number")throw H.c(H.M(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaN(b)
if(this.gaN(a)===t)return 0
if(this.gaN(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaN:function(a){return a===0?1/a<0:a<0},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu:function(a){return a&0x1FFFFFFF},
V:function(a,b){if(typeof b!=="number")throw H.c(H.M(b))
return a+b},
cD:function(a,b){if(typeof b!=="number")throw H.c(H.M(b))
return a-b},
cp:function(a,b){if(typeof b!=="number")throw H.c(H.M(b))
return a/b},
E:function(a,b){if(typeof b!=="number")throw H.c(H.M(b))
return a*b},
at:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bs(a,b)},
U:function(a,b){return(a|0)===a?a/b|0:this.bs(a,b)},
bs:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.c(P.r("Result of truncating division is "+H.f(t)+": "+H.f(a)+" ~/ "+b))},
aH:function(a,b){var t
if(a>0)t=this.dl(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
dl:function(a,b){return b>31?0:a>>>b},
co:function(a,b){if(typeof b!=="number")throw H.c(H.M(b))
return(a&b)>>>0},
cH:function(a,b){if(typeof b!=="number")throw H.c(H.M(b))
return(a^b)>>>0},
T:function(a,b){if(typeof b!=="number")throw H.c(H.M(b))
return a<b},
L:function(a,b){if(typeof b!=="number")throw H.c(H.M(b))
return a>b},
aQ:function(a,b){if(typeof b!=="number")throw H.c(H.M(b))
return a>=b},
gw:function(a){return C.ah},
$isC:1,
$asC:function(){return[P.U]},
$isN:1,
$isU:1}
J.bK.prototype={
gw:function(a){return C.ag},
$isv:1}
J.e9.prototype={
gw:function(a){return C.af}}
J.ao.prototype={
av:function(a,b){if(b>=a.length)throw H.c(H.aM(a,b))
return a.charCodeAt(b)},
V:function(a,b){if(typeof b!=="string")throw H.c(P.hR(b,null,null))
return a+b},
cC:function(a,b,c){var t
if(c>a.length)throw H.c(P.b3(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
cB:function(a,b){return this.cC(a,b,0)},
b3:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.eM(b,null,null))
if(b>c)throw H.c(P.eM(b,null,null))
if(c>a.length)throw H.c(P.eM(c,null,null))
return a.substring(b,c)},
cE:function(a,b){return this.b3(a,b,null)},
X:function(a,b){var t
if(typeof b!=="string")throw H.c(H.M(b))
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
gw:function(a){return C.a9},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.c(H.aM(a,b))
return a[b]},
$isn:1,
$asn:function(){},
$isC:1,
$asC:function(){return[P.w]},
$isw:1}
H.j.prototype={}
H.aD.prototype={
gA:function(a){return new H.bM(this,this.gj(this),0,null,[H.ad(this,"aD",0)])},
eb:function(a,b){var t,s
t=H.E([],[H.ad(this,"aD",0)])
C.a.sj(t,this.gj(this))
for(s=0;C.b.T(s,this.gj(this));++s)t[s]=this.p(0,s)
return t},
ea:function(a){return this.eb(a,!0)}}
H.bM.prototype={
gt:function(a){return this.d},
q:function(){var t,s,r,q
t=this.a
s=J.P(t)
r=s.gj(t)
q=this.b
if(q==null?r!=null:q!==r)throw H.c(P.al(t))
if(C.b.aQ(this.c,r)){this.sa4(null)
return!1}this.sa4(s.p(t,this.c));++this.c
return!0},
sa4:function(a){this.d=a}}
H.bN.prototype={
gA:function(a){return new H.em(null,J.bs(this.a),this.b,this.$ti)},
gj:function(a){return J.aS(this.a)},
$asY:function(a,b){return[b]}}
H.dv.prototype={$isj:1,
$asj:function(a,b){return[b]}}
H.em.prototype={
q:function(){var t=this.b
if(t.q()){this.sa4(this.c.$1(t.gt(t)))
return!0}this.sa4(null)
return!1},
gt:function(a){return this.a},
sa4:function(a){this.a=a},
$asbJ:function(a,b){return[b]}}
H.bO.prototype={
gj:function(a){return J.aS(this.a)},
p:function(a,b){return this.b.$1(J.k8(this.a,b))},
$asj:function(a,b){return[b]},
$asaD:function(a,b){return[b]},
$asY:function(a,b){return[b]}}
H.aB.prototype={}
H.hI.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.hJ.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.h6.prototype={
sdX:function(a){this.z=a},
se_:function(a){this.ch=a}}
H.aH.prototype={
d1:function(){var t,s
t=this.e
s=t.a
this.c.l(0,s)
this.d4(s,t)},
bv:function(a,b){if(!this.f.v(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.aK()},
e5:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.ab(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.bm();++r.d}this.y=!1}this.aK()},
dr:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.q(a),s=0;r=this.ch,s<r.length;s+=2)if(t.v(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
e4:function(a){var t,s,r
if(this.ch==null)return
for(t=J.q(a),s=0;r=this.ch,s<r.length;s+=2)if(t.v(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.G(P.r("removeRange"))
P.j1(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
cz:function(a,b){if(!this.r.v(0,a))return
this.db=b},
dR:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.F(0,c)
return}H.b(b===1)
t=this.cx
if(t==null){t=P.i2(null,null)
this.cx=t}t.O(0,new H.h_(a,c))},
dQ:function(a,b){var t
if(!this.r.v(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.ao()
return}H.b(b===1)
t=this.cx
if(t==null){t=P.i2(null,null)
this.cx=t}t.O(0,this.gdY())},
dS:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.a5(a)
if(b!=null)P.a5(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.bt(a)
s[1]=b==null?null:b.k(0)
for(r=new P.bc(t,t.r,null,null,[null]),r.c=t.e;r.q();)r.d.F(0,s)},
a7:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.ag(o)
p=H.ae(o)
this.dS(q,p)
if(this.db){this.ao()
if(this===u.globalState.e)throw o}}finally{this.cy=H.lx(r)
u.globalState.d=H.jF(t,"$isaH")
if(t!=null)$=t.gdW()
if(this.cx!=null)for(;n=this.cx,!n.gan(n);)this.cx.c_().$0()}return s},
bV:function(a){return this.b.h(0,a)},
d4:function(a,b){var t=this.b
if(t.C(0,a))throw H.c(P.bF("Registry: ports must be registered only once."))
t.i(0,a,b)},
aK:function(){var t=this.b
if(t.gj(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.ao()},
ao:function(){var t,s,r
t=this.cx
if(t!=null)t.P(0)
for(t=this.b,s=t.gck(t),s=s.gA(s);s.q();)s.gt(s).d5()
t.P(0)
this.c.P(0)
u.globalState.z.ab(0,this.a)
this.dx.P(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].F(0,t[r+1])
this.ch=null}},
gdW:function(){return this.d},
gdA:function(){return this.e}}
H.h_.prototype={
$0:function(){this.a.F(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.fK.prototype={
dE:function(){var t=this.a
if(t.b===t.c)return
return t.c_()},
c2:function(){var t,s,r
t=this.dE()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.C(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gan(s)}else s=!1
else s=!1
else s=!1
if(s)H.G(P.bF("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gan(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aq(["command","close"])
r=new H.T(!0,P.aI(null,P.v)).H(r)
s.toString
self.postMessage(r)}return!1}t.e2()
return!0},
bq:function(){if(self.window!=null)new H.fL(this).$0()
else for(;this.c2(););},
ac:function(){var t,s,r,q,p
if(!u.globalState.x)this.bq()
else try{this.bq()}catch(r){t=H.ag(r)
s=H.ae(r)
q=u.globalState.Q
p=P.aq(["command","error","msg",H.f(t)+"\n"+H.f(s)])
p=new H.T(!0,P.aI(null,P.v)).H(p)
q.toString
self.postMessage(p)}}}
H.fL.prototype={
$0:function(){if(!this.a.c2())return
P.l9(C.r,this)},
$S:function(){return{func:1,v:true}}}
H.av.prototype={
e2:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.a7(this.b)}}
H.h5.prototype={}
H.e5.prototype={
$0:function(){H.kN(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.e6.prototype={
$0:function(){var t,s
t=this.a
t.x=!0
if(!this.b)this.c.$1(this.d)
else{s=this.c
if(H.aN(s,{func:1,args:[P.H,P.H]}))s.$2(this.e,this.d)
else if(H.aN(s,{func:1,args:[P.H]}))s.$1(this.e)
else s.$0()}t.aK()},
$S:function(){return{func:1,v:true}}}
H.fG.prototype={}
H.aJ.prototype={
F:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.ll(b)
if(t.gdA()===s){s=J.P(r)
switch(s.h(r,0)){case"pause":t.bv(s.h(r,1),s.h(r,2))
break
case"resume":t.e5(s.h(r,1))
break
case"add-ondone":t.dr(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.e4(s.h(r,1))
break
case"set-errors-fatal":t.cz(s.h(r,1),s.h(r,2))
break
case"ping":t.dR(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.dQ(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.ab(0,s)
break}return}u.globalState.f.a.O(0,new H.av(t,new H.h7(this,r),"receive"))},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.aJ){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gu:function(a){return this.b.a}}
H.h7.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.d2(0,this.b)},
$S:function(){return{func:1}}}
H.bl.prototype={
F:function(a,b){var t,s,r
t=P.aq(["command","message","port",this,"msg",b])
s=new H.T(!0,P.aI(null,P.v)).H(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bl){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gu:function(a){return C.b.cH((this.b<<16^this.a<<8)>>>0,this.c)}}
H.bZ.prototype={
d5:function(){this.c=!0
this.b=null},
d2:function(a,b){if(this.c)return
this.b.$1(b)},
$isl0:1}
H.fi.prototype={
cX:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.O(0,new H.av(s,new H.fj(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){H.hp()
this.c=self.setTimeout(H.bq(new H.fk(this,b),0),a)}else{H.b(a>0)
throw H.c(P.r("Timer greater than 0."))}}}
H.fj.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.fk.prototype={
$0:function(){var t=this.a
t.c=null
H.hD()
t.d=1
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.ai.prototype={
gu:function(a){var t=this.a
t=C.b.aH(t,0)^C.b.U(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
v:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.ai){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.T.prototype={
H:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gj(t))
t=J.q(a)
if(!!t.$isb1)return["buffer",a]
if(!!t.$isaF)return["typed",a]
if(!!t.$isn)return this.ct(a)
if(!!t.$iskK){r=this.gcq()
q=t.gG(a)
q=H.i3(q,r,H.ad(q,"Y",0),null)
q=P.iU(q,!0,H.ad(q,"Y",0))
t=t.gck(a)
t=H.i3(t,r,H.ad(t,"Y",0),null)
return["map",q,P.iU(t,!0,H.ad(t,"Y",0))]}if(!!t.$isiT)return this.cu(a)
if(!!t.$isa)this.ci(a)
if(!!t.$isl0)this.ad(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isaJ)return this.cv(a)
if(!!t.$isbl)return this.cw(a)
if(!!t.$isak){p=a.$static_name
if(p==null)this.ad(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isai)return["capability",a.a]
if(!(a instanceof P.B))this.ci(a)
return["dart",u.classIdExtractor(a),this.cs(u.classFieldsExtractor(a))]},
ad:function(a,b){throw H.c(P.r((b==null?"Can't transmit:":b)+" "+H.f(a)))},
ci:function(a){return this.ad(a,null)},
ct:function(a){var t
H.b(typeof a!=="string")
t=this.cr(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.ad(a,"Can't serialize indexable: ")},
cr:function(a){var t,s
t=[]
C.a.sj(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.H(a[s])
return t},
cs:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.H(a[t]))
return a},
cu:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.ad(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sj(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.H(a[t[r]])
return["js-object",t,s]},
cw:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cv:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.au.prototype={
R:function(a){var t,s,r,q
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.c(P.d5("Bad serialized message: "+H.f(a)))
switch(C.a.gdN(a)){case"ref":H.b(J.A(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.b(J.A(a[0],"buffer"))
t=a[1]
C.a.l(this.b,t)
return t
case"typed":H.b(J.A(a[0],"typed"))
t=a[1]
C.a.l(this.b,t)
return t
case"fixed":H.b(J.A(a[0],"fixed"))
t=a[1]
C.a.l(this.b,t)
return J.a6(H.E(this.a6(t),[null]))
case"extendable":H.b(J.A(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.E(this.a6(t),[null])
case"mutable":H.b(J.A(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.a6(t)
case"const":H.b(J.A(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
return J.a6(H.E(this.a6(t),[null]))
case"map":return this.dH(a)
case"sendport":return this.dI(a)
case"raw sendport":H.b(J.A(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.dG(a)
case"function":H.b(J.A(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.b(J.A(a[0],"capability"))
return new H.ai(a[1])
case"dart":H.b(J.A(a[0],"dart"))
s=a[1]
r=a[2]
q=u.instanceFromClassId(s)
C.a.l(this.b,q)
this.a6(r)
return u.initializeEmptyInstance(s,q,r)
default:throw H.c("couldn't deserialize: "+H.f(a))}},
a6:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.R(a[t]))
return a},
dH:function(a){var t,s,r,q,p
H.b(J.A(a[0],"map"))
t=a[1]
s=a[2]
r=P.S()
C.a.l(this.b,r)
t=J.ki(t,this.gdF()).ea(0)
for(q=J.P(s),p=0;p<t.length;++p)r.i(0,t[p],this.R(q.h(s,p)))
return r},
dI:function(a){var t,s,r,q,p,o,n
H.b(J.A(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.bV(r)
if(o==null)return
n=new H.aJ(o,s)}else n=new H.bl(t,r,s)
C.a.l(this.b,n)
return n},
dG:function(a){var t,s,r,q,p,o
H.b(J.A(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.P(t),p=J.P(s),o=0;C.b.T(o,q.gj(t));++o)r[q.h(t,o)]=this.R(p.h(s,o))
return r}}
H.eP.prototype={}
H.fp.prototype={
J:function(a){var t,s,r
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
H.eC.prototype={
k:function(a){var t=this.b
if(t==null)return"NullError: "+H.f(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.ec.prototype={
k:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.f(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.f(this.a)+")"}}
H.ft.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.hK.prototype={
$1:function(a){if(!!J.q(a).$isaA)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(a){return{func:1,args:[,]}}}
H.cC.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t},
$isaG:1}
H.hy.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.hz.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.hA.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.hB.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.hC.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.ak.prototype={
k:function(a){return"Closure '"+H.b2(this).trim()+"'"},
$ishV:1,
gee:function(){return this},
$D:null}
H.fd.prototype={}
H.f4.prototype={
k:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.aT.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.aT))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gu:function(a){var t,s
t=this.c
if(t==null)s=H.as(this.a)
else s=typeof t!=="object"?J.aR(t):H.as(t)
return(s^H.as(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.b2(t)+"'")}}
H.fr.prototype={
k:function(a){return this.a}}
H.da.prototype={
k:function(a){return this.a}}
H.eU.prototype={
k:function(a){return"RuntimeError: "+H.f(this.a)}}
H.fB.prototype={
k:function(a){return C.j.V("Assertion failed: ",P.bE(this.a))}}
H.a9.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gu:function(a){return J.aR(this.a)},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.a9){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.a7.prototype={
gj:function(a){return this.a},
gan:function(a){return this.a===0},
gG:function(a){return new H.ef(this,[H.aO(this,0)])},
gck:function(a){return H.i3(this.gG(this),new H.eb(this),H.aO(this,0),H.aO(this,1))},
C:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bj(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bj(s,b)}else return this.dT(b)},
dT:function(a){var t=this.d
if(t==null)return!1
return this.a9(this.aj(t,this.a8(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.a5(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.a5(r,b)
return s==null?null:s.b}else return this.dU(b)},
dU:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.aj(t,this.a8(a))
r=this.a9(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aD()
this.b=t}this.be(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aD()
this.c=s}this.be(s,b,c)}else{r=this.d
if(r==null){r=this.aD()
this.d=r}q=this.a8(b)
p=this.aj(r,q)
if(p==null)this.aG(r,q,[this.aE(b,c)])
else{o=this.a9(p,b)
if(o>=0)p[o].b=c
else p.push(this.aE(b,c))}}},
ab:function(a,b){if(typeof b==="string")return this.bp(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bp(this.c,b)
else return this.dV(b)},
dV:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.aj(t,this.a8(a))
r=this.a9(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bt(q)
return q.b},
P:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aC()}},
am:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.c(P.al(this))
t=t.c}},
be:function(a,b,c){var t=this.a5(a,b)
if(t==null)this.aG(a,b,this.aE(b,c))
else t.b=c},
bp:function(a,b){var t
if(a==null)return
t=this.a5(a,b)
if(t==null)return
this.bt(t)
this.bk(a,b)
return t.b},
aC:function(){this.r=this.r+1&67108863},
aE:function(a,b){var t,s
t=new H.ee(a,b,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.aC()
return t},
bt:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.aC()},
a8:function(a){return J.aR(a)&0x3ffffff},
a9:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.A(a[s].a,b))return s
return-1},
k:function(a){return P.iV(this)},
a5:function(a,b){return a[b]},
aj:function(a,b){return a[b]},
aG:function(a,b,c){H.b(c!=null)
a[b]=c},
bk:function(a,b){delete a[b]},
bj:function(a,b){return this.a5(a,b)!=null},
aD:function(){var t=Object.create(null)
this.aG(t,"<non-identifier-key>",t)
this.bk(t,"<non-identifier-key>")
return t},
$iskK:1}
H.eb.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(a){return{func:1,args:[,]}}}
H.ee.prototype={}
H.ef.prototype={
gj:function(a){return this.a.a},
gA:function(a){var t,s
t=this.a
s=new H.eg(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.eg.prototype={
gt:function(a){return this.d},
q:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.al(t))
else{t=this.c
if(t==null){this.sbd(null)
return!1}else{this.sbd(t.a)
this.c=this.c.c
return!0}}},
sbd:function(a){this.d=a}}
H.hu.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[,]}}}
H.hv.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(a,b){return{func:1,args:[,P.w]}}}
H.hw.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[P.w]}}}
H.b1.prototype={
gw:function(a){return C.a0},
$isb1:1}
H.aF.prototype={$isaF:1}
H.eu.prototype={
gw:function(a){return C.a1}}
H.bR.prototype={
gj:function(a){return a.length},
$isn:1,
$asn:function(){},
$isp:1,
$asp:function(){}}
H.bS.prototype={
h:function(a,b){H.a3(b,a,a.length)
return a[b]},
i:function(a,b,c){H.a3(b,a,a.length)
a[b]=c},
$isj:1,
$asj:function(){return[P.N]},
$asaB:function(){return[P.N]},
$asl:function(){return[P.N]},
$isi:1,
$asi:function(){return[P.N]}}
H.bT.prototype={
i:function(a,b,c){H.a3(b,a,a.length)
a[b]=c},
$isj:1,
$asj:function(){return[P.v]},
$asaB:function(){return[P.v]},
$asl:function(){return[P.v]},
$isi:1,
$asi:function(){return[P.v]}}
H.bQ.prototype={
gw:function(a){return C.a2},
$isdU:1}
H.ev.prototype={
gw:function(a){return C.a3}}
H.ew.prototype={
gw:function(a){return C.a4},
h:function(a,b){H.a3(b,a,a.length)
return a[b]}}
H.ex.prototype={
gw:function(a){return C.a5},
h:function(a,b){H.a3(b,a,a.length)
return a[b]},
$isiQ:1}
H.ey.prototype={
gw:function(a){return C.a6},
h:function(a,b){H.a3(b,a,a.length)
return a[b]}}
H.ez.prototype={
gw:function(a){return C.aa},
h:function(a,b){H.a3(b,a,a.length)
return a[b]},
$isjh:1}
H.eA.prototype={
gw:function(a){return C.ab},
h:function(a,b){H.a3(b,a,a.length)
return a[b]},
$isji:1}
H.bU.prototype={
gw:function(a){return C.ac},
gj:function(a){return a.length},
h:function(a,b){H.a3(b,a,a.length)
return a[b]}}
H.eB.prototype={
gw:function(a){return C.ad},
gj:function(a){return a.length},
h:function(a,b){H.a3(b,a,a.length)
return a[b]},
$isjj:1}
H.bd.prototype={}
H.be.prototype={}
H.bf.prototype={}
H.bg.prototype={}
P.fD.prototype={
$1:function(a){var t,s
H.hD()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(a){return{func:1,args:[,]}}}
P.fC.prototype={
$1:function(a){var t,s
t=this.a
H.b(t.a==null)
H.hp()
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(a){return{func:1,args:[{func:1,v:true}]}}}
P.fE.prototype={
$0:function(){H.hD()
this.a.$0()},
$S:function(){return{func:1}}}
P.fF.prototype={
$0:function(){H.hD()
this.a.$0()},
$S:function(){return{func:1}}}
P.hT.prototype={}
P.fH.prototype={}
P.hf.prototype={
dz:function(a,b){var t=this.a
if(t.a!==0)throw H.c(P.l7("Future already completed"))
t.ay(b)}}
P.ck.prototype={
e0:function(a){if(this.c!==6)return!0
H.b(!0)
return this.b.b.aO(this.d,a.a)},
dP:function(a){var t,s
t=(this.c&2)!==0
if(t){H.b(t)
t=this.e!=null}else t=!1
H.b(t)
s=this.e
t=this.b.b
if(H.aN(s,{func:1,args:[P.B,P.aG]}))return t.e7(s,a.a,a.b)
else return t.aO(s,a.a)}}
P.a2.prototype={
c7:function(a,b){var t,s,r
t=$.z
if(t!==C.e){t.toString
if(b!=null)b=P.lp(b,t)}s=new P.a2(0,t,null,[null])
r=b==null?1:3
this.bf(new P.ck(null,s,r,a,b,[H.aO(this,0),null]))
return s},
c6:function(a){return this.c7(a,null)},
au:function(a){H.b(this.a<4)
H.b(a.a>=4)
this.a=a.a
this.c=a.c},
bf:function(a){var t
H.b(a.a==null)
t=this.a
if(t<=1){a.a=H.jF(this.c,"$isck")
this.c=a}else{if(t===2){H.b(!0)
t=this.c
if(t.a<4){t.bf(a)
return}this.au(t)}H.b(this.a>=4)
t=this.b
t.toString
P.hk(null,null,t,new P.fP(this,a))}},
bo:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.b(!0)
s=this.c
if(s.a<4){s.bo(a)
return}this.au(s)}H.b(this.a>=4)
t.a=this.ak(a)
s=this.b
s.toString
P.hk(null,null,s,new P.fT(t,this))}},
aF:function(){H.b(this.a<4)
var t=this.c
this.c=null
return this.ak(t)},
ak:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
ay:function(a){var t,s,r
H.b(this.a<4)
t=this.$ti
s=H.hl(a,"$isdY",t,"$asdY")
if(s){t=H.hl(a,"$isa2",t,null)
if(t)P.jo(a,this)
else P.li(a,this)}else{r=this.aF()
H.b(this.a<4)
this.a=4
this.c=a
P.bb(this,r)}},
ag:function(a,b){var t
H.b(this.a<4)
t=this.aF()
H.b(this.a<4)
this.a=8
this.c=new P.ax(a,b)
P.bb(this,t)},
d7:function(a){return this.ag(a,null)},
$isdY:1,
gaI:function(){return this.a},
gdk:function(){return this.c}}
P.fP.prototype={
$0:function(){P.bb(this.a,this.b)},
$S:function(){return{func:1}}}
P.fT.prototype={
$0:function(){P.bb(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.fQ.prototype={
$1:function(a){var t=this.a
H.b(t.a===1)
H.b(t.a===1)
t.a=0
t.ay(a)},
$S:function(a){return{func:1,args:[,]}}}
P.fR.prototype={
$2:function(a,b){var t=this.a
H.b(t.a===1)
t.ag(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(a,b){return{func:1,args:[,],opt:[,]}}}
P.fS.prototype={
$0:function(){this.a.ag(this.b,this.c)},
$S:function(){return{func:1}}}
P.fW.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.c
p=q.c
H.b((p&1)===0)
o=(p&2)===0
H.b(o)
t=null
try{H.b(o)
H.b(p===8)
t=q.b.b.c1(q.d)}catch(n){s=H.ag(n)
r=H.ae(n)
if(this.d){q=this.a.a
H.b(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.b(q.a===8)
p.b=q.c}else p.b=new P.ax(s,r)
p.a=!0
return}if(!!J.q(t).$isdY){if(t instanceof P.a2&&t.gaI()>=4){if(t.gaI()===8){q=t
H.b(q.gaI()===8)
p=this.b
p.b=q.gdk()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.c6(new P.fX(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.fX.prototype={
$1:function(a){return this.a},
$S:function(a){return{func:1,args:[,]}}}
P.fV.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.b((r.c&1)!==0)
this.a.b=r.b.b.aO(r.d,this.c)}catch(q){t=H.ag(q)
s=H.ae(q)
r=this.a
r.b=new P.ax(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.fU.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.b(q.a===8)
t=q.c
q=this.c
if(q.e0(t)){H.b((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.dP(t)
p.a=!1}}catch(o){s=H.ag(o)
r=H.ae(o)
q=this.a
p=q.a
H.b(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.b(q.a===8)
m.b=q.c}else m.b=new P.ax(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.cc.prototype={}
P.f7.prototype={
gj:function(a){var t,s
t={}
s=new P.a2(0,$.z,null,[P.v])
t.a=0
this.dZ(new P.f9(t),!0,new P.fa(t,s),s.gd6())
return s}}
P.f9.prototype={
$1:function(a){++this.a.a},
$S:function(a){return{func:1,args:[,]}}}
P.fa.prototype={
$0:function(){this.b.ay(this.a.a)},
$S:function(){return{func:1}}}
P.f8.prototype={}
P.i5.prototype={}
P.ax.prototype={
k:function(a){return H.f(this.a)},
$isaA:1}
P.hg.prototype={}
P.hj.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.bX()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.c(t)
r=H.c(t)
r.stack=s.k(0)
throw r},
$S:function(){return{func:1}}}
P.h9.prototype={
e8:function(a){var t,s,r
try{if(C.e===$.z){a.$0()
return}P.jr(null,null,this,a)}catch(r){t=H.ag(r)
s=H.ae(r)
P.hi(null,null,this,t,s)}},
e9:function(a,b){var t,s,r
try{if(C.e===$.z){a.$1(b)
return}P.js(null,null,this,a,b)}catch(r){t=H.ag(r)
s=H.ae(r)
P.hi(null,null,this,t,s)}},
du:function(a){return new P.hb(this,a)},
aL:function(a){return new P.ha(this,a)},
dv:function(a){return new P.hc(this,a)},
h:function(a,b){return},
c1:function(a){if($.z===C.e)return a.$0()
return P.jr(null,null,this,a)},
aO:function(a,b){if($.z===C.e)return a.$1(b)
return P.js(null,null,this,a,b)},
e7:function(a,b,c){if($.z===C.e)return a.$2(b,c)
return P.lq(null,null,this,a,b,c)}}
P.hb.prototype={
$0:function(){return this.a.c1(this.b)},
$S:function(){return{func:1}}}
P.ha.prototype={
$0:function(){return this.a.e8(this.b)},
$S:function(){return{func:1}}}
P.hc.prototype={
$1:function(a){return this.a.e9(this.b,a)},
$S:function(a){return{func:1,args:[,]}}}
P.h3.prototype={
a8:function(a){return H.lO(a)&0x3ffffff},
a9:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.h1.prototype={
gA:function(a){var t=new P.bc(this,this.r,null,null,[null])
t.c=this.e
return t},
gj:function(a){return this.a},
Y:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.d8(b)},
d8:function(a){var t=this.d
if(t==null)return!1
return this.ai(t[this.ah(a)],a)>=0},
bV:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.Y(0,a)?a:null
else return this.dh(a)},
dh:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.ah(a)]
r=this.ai(s,a)
if(r<0)return
return J.aQ(s,r).gda()},
l:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.ig()
this.b=t}return this.bg(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.ig()
this.c=s}return this.bg(s,b)}else return this.O(0,b)},
O:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.ig()
this.d=t}s=this.ah(b)
r=t[s]
if(r==null){q=[this.ax(b)]
H.b(q!=null)
t[s]=q}else{if(this.ai(r,b)>=0)return!1
r.push(this.ax(b))}return!0},
ab:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bh(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bh(this.c,b)
else return this.di(0,b)},
di:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.ah(b)]
r=this.ai(s,b)
if(r<0)return!1
this.bi(s.splice(r,1)[0])
return!0},
P:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aw()}},
bg:function(a,b){var t
if(a[b]!=null)return!1
t=this.ax(b)
H.b(!0)
a[b]=t
return!0},
bh:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bi(t)
delete a[b]
return!0},
aw:function(){this.r=this.r+1&67108863},
ax:function(a){var t,s
t=new P.h2(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.aw()
return t},
bi:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.aw()},
ah:function(a){return J.aR(a)&0x3ffffff},
ai:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.A(a[s].a,b))return s
return-1}}
P.h2.prototype={
gda:function(){return this.a}}
P.bc.prototype={
gt:function(a){return this.d},
q:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.al(t))
else{t=this.c
if(t==null){this.sa3(null)
return!1}else{this.sa3(t.a)
this.c=this.c.b
return!0}}},
sa3:function(a){this.d=a}}
P.fZ.prototype={}
P.i1.prototype={$isj:1}
P.l.prototype={
gA:function(a){return new H.bM(a,this.gj(a),0,null,[H.ad(a,"l",0)])},
p:function(a,b){return this.h(a,b)},
bW:function(a,b){return new H.bO(a,b,[H.ad(a,"l",0),null])},
dO:function(a,b,c){var t,s,r,q
t=this.gj(a)
for(s=b,r=0;C.b.T(r,t);++r){s=c.$2(s,this.h(a,r))
q=this.gj(a)
if(t==null?q!=null:t!==q)throw H.c(P.al(a))}return s},
k:function(a){return P.e7(a,"[","]")}}
P.ek.prototype={}
P.el.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.f(a)
t.a=s+": "
t.a+=H.f(b)},
$S:function(a,b){return{func:1,args:[,,]}}}
P.b_.prototype={
am:function(a,b){var t,s
for(t=J.bs(this.gG(a));t.q();){s=t.gt(t)
b.$2(s,this.h(a,s))}},
gj:function(a){return J.aS(this.gG(a))},
k:function(a){return P.iV(a)}}
P.eh.prototype={
cS:function(a,b){var t
H.b(!0)
t=new Array(8)
t.fixed$length=Array
this.sbr(H.E(t,[b]))},
gA:function(a){return new P.h4(this,this.c,this.d,this.b,null,this.$ti)},
gan:function(a){return this.b===this.c},
gj:function(a){return(this.c-this.b&this.a.length-1)>>>0},
p:function(a,b){var t=this.gj(this)
if(C.b.L(0,b)||b>=t)H.G(P.y(b,this,"index",null,t))
return this.a[(C.b.V(this.b,b)&this.a.length-1)>>>0]},
P:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
k:function(a){return P.e7(this,"{","}")},
c_:function(){var t,s,r
t=this.b
if(t===this.c)throw H.c(H.hW());++this.d
s=this.a
r=s[t]
s[t]=null
this.b=(t+1&s.length-1)>>>0
return r},
O:function(a,b){var t,s
t=this.a
s=this.c
t[s]=b
t=(s+1&t.length-1)>>>0
this.c=t
if(this.b===t)this.bm();++this.d},
bm:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.E(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.aZ(s,0,q,t,r)
C.a.aZ(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbr(s)},
sbr:function(a){this.a=a}}
P.h4.prototype={
gt:function(a){return this.e},
q:function(){var t,s
t=this.a
if(this.c!==t.d)H.G(P.al(t))
s=this.d
if(s===this.b){this.sa3(null)
return!1}this.sa3(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sa3:function(a){this.e=a}}
P.eX.prototype={
k:function(a){return P.e7(this,"{","}")},
$isj:1}
P.eW.prototype={}
P.bp.prototype={}
P.C.prototype={}
P.aV.prototype={
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.aV))return!1
return this.a===b.a&&this.b===b.b},
X:function(a,b){return C.b.X(this.a,b.a)},
gu:function(a){var t=this.a
return(t^C.b.aH(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.kD(H.l_(this))
s=P.bz(H.kY(this))
r=P.bz(H.kU(this))
q=P.bz(H.kV(this))
p=P.bz(H.kX(this))
o=P.bz(H.kZ(this))
n=P.kE(H.kW(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isC:1,
$asC:function(){return[P.aV]}}
P.N.prototype={}
P.am.prototype={
T:function(a,b){return C.b.T(this.a,b.gd9())},
L:function(a,b){return C.b.L(this.a,b.gd9())},
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.am))return!1
return this.a===b.a},
gu:function(a){return this.a&0x1FFFFFFF},
X:function(a,b){return C.b.X(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.du()
s=this.a
if(s<0)return"-"+new P.am(0-s).k(0)
r=t.$1(C.b.U(s,6e7)%60)
q=t.$1(C.b.U(s,1e6)%60)
p=new P.dt().$1(s%1e6)
return""+C.b.U(s,36e8)+":"+H.f(r)+":"+H.f(q)+"."+H.f(p)},
$isC:1,
$asC:function(){return[P.am]}}
P.dt.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(a){return{func:1,ret:P.w,args:[P.v]}}}
P.du.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(a){return{func:1,ret:P.w,args:[P.v]}}}
P.aA.prototype={}
P.bv.prototype={
k:function(a){return"Assertion failed"}}
P.bX.prototype={
k:function(a){return"Throw of null."}}
P.W.prototype={
gaA:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaz:function(){return""},
k:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.f(t)
q=this.gaA()+s+r
if(!this.a)return q
p=this.gaz()
o=P.bE(this.b)
return q+p+": "+H.f(o)}}
P.bY.prototype={
gaA:function(){return"RangeError"},
gaz:function(){var t,s,r
H.b(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.f(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.f(t)
else if(r>t)s=": Not in range "+H.f(t)+".."+H.f(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.f(t)}return s}}
P.e4.prototype={
gaA:function(){return"RangeError"},
gaz:function(){H.b(this.a)
if(J.jS(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.f(t)},
gj:function(a){return this.f}}
P.fu.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.fs.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.b5.prototype={
k:function(a){return"Bad state: "+this.a}}
P.dc.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.f(P.bE(t))+"."}}
P.c4.prototype={
k:function(a){return"Stack Overflow"},
$isaA:1}
P.dl.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.hU.prototype={}
P.fO.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.f(t)}}
P.dw.prototype={
h:function(a,b){var t,s
t=this.a
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.G(P.hR(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.iZ(b,"expando$values")
return s==null?null:H.iZ(s,t)},
k:function(a){return"Expando:"+H.f(this.b)}}
P.v.prototype={}
P.Y.prototype={
gj:function(a){var t,s
H.b(!this.$isj)
t=this.gA(this)
for(s=0;t.q();)++s
return s},
p:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.kw("index"))
if(b<0)H.G(P.b3(b,0,null,"index",null))
for(t=this.gA(this),s=0;t.q();){r=t.gt(t)
if(b===s)return r;++s}throw H.c(P.y(b,this,"index",null,s))},
k:function(a){return P.kQ(this,"(",")")}}
P.bJ.prototype={}
P.i.prototype={$isj:1}
P.aE.prototype={}
P.H.prototype={
gu:function(a){return P.B.prototype.gu.call(this,this)},
k:function(a){return"null"}}
P.U.prototype={$isC:1,
$asC:function(){return[P.U]}}
P.B.prototype={constructor:P.B,$isB:1,
v:function(a,b){return this===b},
gu:function(a){return H.as(this)},
k:function(a){return"Instance of '"+H.b2(this)+"'"},
gw:function(a){return new H.a9(H.hs(this),null)},
toString:function(){return this.k(this)}}
P.aG.prototype={}
P.w.prototype={$isC:1,
$asC:function(){return[P.w]}}
P.b6.prototype={
gj:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
gW:function(){return this.a}}
P.i9.prototype={}
W.h.prototype={}
W.bu.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gB:function(a){return a.z}}
W.d2.prototype={
gj:function(a){return a.length}}
W.d3.prototype={
k:function(a){return String(a)}}
W.d4.prototype={
k:function(a){return String(a)}}
W.ah.prototype={
aS:function(a,b,c){if(c!=null)return this.dd(a,b,P.ly(c,null))
return this.de(a,b)},
aR:function(a,b){return this.aS(a,b,null)},
dd:function(a,b,c){return a.getContext(b,c)},
de:function(a,b){return a.getContext(b)},
$isah:1}
W.bw.prototype={
I:function(a,b,c){return a.addColorStop(b,c)}}
W.bx.prototype={
dC:function(a,b,c,d,e){return a.createLinearGradient(b,c,d,e)},
bI:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
dM:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
ar:function(a){return P.hn(a.getContextAttributes())},
e3:function(a,b,c,d,e){return a.rect(b,c,d,e)}}
W.aj.prototype={
gj:function(a){return a.length}}
W.dd.prototype={
gj:function(a){return a.length}}
W.de.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.df.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gB:function(a){return a.z}}
W.dg.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gB:function(a){return a.z}}
W.aU.prototype={
gj:function(a){return a.length}}
W.dh.prototype={}
W.Q.prototype={}
W.az.prototype={}
W.di.prototype={
gj:function(a){return a.length}}
W.dj.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gB:function(a){return a.z}}
W.dk.prototype={
gj:function(a){return a.length}}
W.dm.prototype={
h:function(a,b){return a[b]},
gj:function(a){return a.length}}
W.dn.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gB:function(a){return a.z}}
W.aW.prototype={
bZ:function(a,b){return a.querySelector(b)}}
W.dp.prototype={
k:function(a){return String(a)}}
W.dq.prototype={
gaq:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gB:function(a){return a.z}}
W.bA.prototype={
gaq:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gB:function(a){return a.z}}
W.bB.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[P.L]},
$isj:1,
$asj:function(){return[P.L]},
$isp:1,
$asp:function(){return[P.L]},
$asl:function(){return[P.L]},
$isi:1,
$asi:function(){return[P.L]},
$asm:function(){return[P.L]}}
W.bC.prototype={
k:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.ga0(a))+" x "+H.f(this.gZ(a))},
v:function(a,b){var t
if(b==null)return!1
t=J.q(b)
if(!t.$isL)return!1
return a.left===b.left&&a.top===b.top&&this.ga0(a)===t.ga0(b)&&this.gZ(a)===t.gZ(b)},
gu:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.ga0(a)
q=this.gZ(a)
return W.jq(W.aw(W.aw(W.aw(W.aw(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gZ:function(a){return a.height},
ga0:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isL:1,
$asL:function(){}}
W.dr.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[P.w]},
$isj:1,
$asj:function(){return[P.w]},
$isp:1,
$asp:function(){return[P.w]},
$asl:function(){return[P.w]},
$isi:1,
$asi:function(){return[P.w]},
$asm:function(){return[P.w]}}
W.ds.prototype={
gj:function(a){return a.length}}
W.bD.prototype={
k:function(a){return a.localName}}
W.e.prototype={$ise:1}
W.d.prototype={
d3:function(a,b,c,d){return a.addEventListener(b,H.bq(c,1),!1)}}
W.dQ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.bG]},
$isj:1,
$asj:function(){return[W.bG]},
$isp:1,
$asp:function(){return[W.bG]},
$asl:function(){return[W.bG]},
$isi:1,
$asi:function(){return[W.bG]},
$asm:function(){return[W.bG]}}
W.dR.prototype={
gj:function(a){return a.length}}
W.dW.prototype={
gj:function(a){return a.length}}
W.e_.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gB:function(a){return a.z}}
W.e0.prototype={
gj:function(a){return a.length}}
W.aX.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.x]},
$isj:1,
$asj:function(){return[W.x]},
$isp:1,
$asp:function(){return[W.x]},
$asl:function(){return[W.x]},
$isi:1,
$asi:function(){return[W.x]},
$asm:function(){return[W.x]}}
W.bI.prototype={}
W.e1.prototype={
F:function(a,b){return a.send(b)}}
W.aY.prototype={}
W.ei.prototype={
k:function(a){return String(a)}}
W.ej.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gB:function(a){return a.z}}
W.ep.prototype={
gj:function(a){return a.length}}
W.er.prototype={
ef:function(a,b,c){return a.send(b,c)},
F:function(a,b){return a.send(b)}}
W.b0.prototype={}
W.es.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.bP]},
$isj:1,
$asj:function(){return[W.bP]},
$isp:1,
$asp:function(){return[W.bP]},
$asl:function(){return[W.bP]},
$isi:1,
$asi:function(){return[W.bP]},
$asm:function(){return[W.bP]}}
W.x.prototype={
k:function(a){var t=a.nodeValue
return t==null?this.cF(a):t}}
W.bW.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.x]},
$isj:1,
$asj:function(){return[W.x]},
$isp:1,
$asp:function(){return[W.x]},
$asl:function(){return[W.x]},
$isi:1,
$asi:function(){return[W.x]},
$asm:function(){return[W.x]}}
W.Z.prototype={
gj:function(a){return a.length}}
W.eI.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.Z]},
$isj:1,
$asj:function(){return[W.Z]},
$isp:1,
$asp:function(){return[W.Z]},
$asl:function(){return[W.Z]},
$isi:1,
$asi:function(){return[W.Z]},
$asm:function(){return[W.Z]}}
W.eL.prototype={
F:function(a,b){return a.send(b)}}
W.c0.prototype={
F:function(a,b){return a.send(b)}}
W.eV.prototype={
gj:function(a){return a.length}}
W.a8.prototype={}
W.f0.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.c2]},
$isj:1,
$asj:function(){return[W.c2]},
$isp:1,
$asp:function(){return[W.c2]},
$asl:function(){return[W.c2]},
$isi:1,
$asi:function(){return[W.c2]},
$asm:function(){return[W.c2]}}
W.f2.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.c3]},
$isj:1,
$asj:function(){return[W.c3]},
$isp:1,
$asp:function(){return[W.c3]},
$asl:function(){return[W.c3]},
$isi:1,
$asi:function(){return[W.c3]},
$asm:function(){return[W.c3]}}
W.a_.prototype={
gj:function(a){return a.length}}
W.f5.prototype={
h:function(a,b){return this.bl(a,b)},
am:function(a,b){var t,s
for(t=0;!0;++t){s=this.dg(a,t)
if(s==null)return
b.$2(s,this.bl(a,s))}},
gG:function(a){var t=H.E([],[P.w])
this.am(a,new W.f6(t))
return t},
gj:function(a){return a.length},
bl:function(a,b){return a.getItem(b)},
dg:function(a,b){return a.key(b)},
$asb_:function(){return[P.w,P.w]}}
W.f6.prototype={
$2:function(a,b){return C.a.l(this.a,a)},
$S:function(a,b){return{func:1,args:[,,]}}}
W.fe.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.c7]},
$isj:1,
$asj:function(){return[W.c7]},
$isp:1,
$asp:function(){return[W.c7]},
$asl:function(){return[W.c7]},
$isi:1,
$asi:function(){return[W.c7]},
$asm:function(){return[W.c7]}}
W.ff.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.c6]},
$isj:1,
$asj:function(){return[W.c6]},
$isp:1,
$asp:function(){return[W.c6]},
$asl:function(){return[W.c6]},
$isi:1,
$asi:function(){return[W.c6]},
$asm:function(){return[W.c6]}}
W.fh.prototype={
gj:function(a){return a.length}}
W.fm.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.ca]},
$isj:1,
$asj:function(){return[W.ca]},
$isp:1,
$asp:function(){return[W.ca]},
$asl:function(){return[W.ca]},
$isi:1,
$asi:function(){return[W.ca]},
$asm:function(){return[W.ca]}}
W.fn.prototype={
gj:function(a){return a.length}}
W.fv.prototype={
k:function(a){return String(a)}}
W.fx.prototype={
gm:function(a){return a.x},
gB:function(a){return a.z}}
W.fy.prototype={
gj:function(a){return a.length}}
W.fz.prototype={
F:function(a,b){return a.send(b)}}
W.ba.prototype={
gds:function(a){var t,s
t=P.U
s=new P.a2(0,$.z,null,[t])
this.dc(a)
this.dj(a,W.jv(new W.fA(new P.hf(s,[t]))))
return s},
dj:function(a,b){return a.requestAnimationFrame(H.bq(b,1))},
dc:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.fA.prototype={
$1:function(a){this.a.dz(0,a)},
$S:function(a){return{func:1,args:[,]}}}
W.ib.prototype={}
W.fI.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.by]},
$isj:1,
$asj:function(){return[W.by]},
$isp:1,
$asp:function(){return[W.by]},
$asl:function(){return[W.by]},
$isi:1,
$asi:function(){return[W.by]},
$asm:function(){return[W.by]}}
W.fJ.prototype={
k:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
v:function(a,b){var t
if(b==null)return!1
t=J.q(b)
if(!t.$isL)return!1
return a.left===b.left&&a.top===b.top&&a.width===t.ga0(b)&&a.height===t.gZ(b)},
gu:function(a){var t,s,r,q
t=a.left
s=a.top
r=a.width
q=a.height
return W.jq(W.aw(W.aw(W.aw(W.aw(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gZ:function(a){return a.height},
ga0:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.fY.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.bH]},
$isj:1,
$asj:function(){return[W.bH]},
$isp:1,
$asp:function(){return[W.bH]},
$asl:function(){return[W.bH]},
$isi:1,
$asi:function(){return[W.bH]},
$asm:function(){return[W.bH]}}
W.cr.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.x]},
$isj:1,
$asj:function(){return[W.x]},
$isp:1,
$asp:function(){return[W.x]},
$asl:function(){return[W.x]},
$isi:1,
$asi:function(){return[W.x]},
$asm:function(){return[W.x]}}
W.hd.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a_]},
$isj:1,
$asj:function(){return[W.a_]},
$isp:1,
$asp:function(){return[W.a_]},
$asl:function(){return[W.a_]},
$isi:1,
$asi:function(){return[W.a_]},
$asm:function(){return[W.a_]}}
W.he.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.c5]},
$isj:1,
$asj:function(){return[W.c5]},
$isp:1,
$asp:function(){return[W.c5]},
$asl:function(){return[W.c5]},
$isi:1,
$asi:function(){return[W.c5]},
$asm:function(){return[W.c5]}}
W.ie.prototype={
dZ:function(a,b,c,d){return W.jn(this.a,this.b,a,!1,H.aO(this,0))}}
W.fM.prototype={
d0:function(a,b,c,d,e){this.dn()},
dn:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.jT(r,this.c,t,!1)}}}
W.fN.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(a){return{func:1,args:[,]}}}
W.m.prototype={
gA:function(a){return new W.dT(a,this.gj(a),-1,null,[H.ad(a,"m",0)])}}
W.dT.prototype={
q:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbn(J.aQ(this.a,t))
this.c=t
return!0}this.sbn(null)
this.c=s
return!1},
gt:function(a){return this.d},
sbn:function(a){this.d=a}}
W.cd.prototype={}
W.ce.prototype={}
W.cf.prototype={}
W.cg.prototype={}
W.ch.prototype={}
W.ci.prototype={}
W.cj.prototype={}
W.cl.prototype={}
W.cm.prototype={}
W.cp.prototype={}
W.cq.prototype={}
W.cs.prototype={}
W.ct.prototype={}
W.cw.prototype={}
W.cx.prototype={}
W.bh.prototype={}
W.bi.prototype={}
W.cy.prototype={}
W.cz.prototype={}
W.cD.prototype={}
W.cG.prototype={}
W.cH.prototype={}
W.bj.prototype={}
W.bk.prototype={}
W.cI.prototype={}
W.cJ.prototype={}
W.cM.prototype={}
W.cN.prototype={}
W.cO.prototype={}
W.cP.prototype={}
W.cQ.prototype={}
W.cR.prototype={}
W.cS.prototype={}
W.cT.prototype={}
W.cU.prototype={}
W.cV.prototype={}
P.hm.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(a,b){return{func:1,args:[,,]}}}
P.h0.prototype={
e1:function(){return Math.random()}}
P.h8.prototype={}
P.L.prototype={}
P.dx.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dy.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dz.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dA.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dB.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dC.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dD.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dE.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dF.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dG.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dH.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dI.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dJ.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dK.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gB:function(a){return a.z}}
P.dL.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dM.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gB:function(a){return a.z}}
P.dN.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dO.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dS.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dV.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.R.prototype={}
P.X.prototype={}
P.e2.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ed.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return this.S(a,b)},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
S:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.i0]},
$asl:function(){return[P.i0]},
$isi:1,
$asi:function(){return[P.i0]},
$asm:function(){return[P.i0]}}
P.en.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eD.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return this.S(a,b)},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
S:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.i4]},
$asl:function(){return[P.i4]},
$isi:1,
$asi:function(){return[P.i4]},
$asm:function(){return[P.i4]}}
P.eF.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eJ.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eK.prototype={
gj:function(a){return a.length}}
P.eN.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eO.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fb.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return this.S(a,b)},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
S:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.w]},
$asl:function(){return[P.w]},
$isi:1,
$asi:function(){return[P.w]},
$asm:function(){return[P.w]}}
P.t.prototype={}
P.fc.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.b7.prototype={}
P.b8.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fo.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return this.S(a,b)},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
S:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.i8]},
$asl:function(){return[P.i8]},
$isi:1,
$asi:function(){return[P.i8]},
$asm:function(){return[P.i8]}}
P.fw.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.cn.prototype={}
P.co.prototype={}
P.cu.prototype={}
P.cv.prototype={}
P.cE.prototype={}
P.cF.prototype={}
P.cK.prototype={}
P.cL.prototype={}
P.d7.prototype={
gj:function(a){return a.length}}
P.d8.prototype={
gj:function(a){return a.length}}
P.ay.prototype={}
P.eE.prototype={
gj:function(a){return a.length}}
P.eS.prototype={
bu:function(a,b){return a.activeTexture(b)},
bw:function(a,b,c){return a.attachShader(b,c)},
bx:function(a,b,c){return a.bindBuffer(b,c)},
by:function(a,b,c){return a.bindFramebuffer(b,c)},
bz:function(a,b,c){return a.bindTexture(b,c)},
bA:function(a,b){return a.blendEquation(b)},
bB:function(a,b,c){return a.blendFunc(b,c)},
bC:function(a,b,c,d){return a.bufferData(b,c,d)},
bD:function(a,b){return a.clear(b)},
bE:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bF:function(a,b){return a.compileShader(b)},
bG:function(a){return a.createBuffer()},
bH:function(a){return a.createProgram()},
bJ:function(a,b){return a.createShader(b)},
bK:function(a){return a.createTexture()},
bM:function(a,b){return a.depthMask(b)},
bN:function(a,b){return a.disable(b)},
bO:function(a,b,c,d){return a.drawArrays(b,c,d)},
bP:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bQ:function(a,b){return a.enable(b)},
bR:function(a,b){return a.enableVertexAttribArray(b)},
ar:function(a){return P.hn(a.getContextAttributes())},
aT:function(a){return a.getError()},
aU:function(a,b){return a.getProgramInfoLog(b)},
aV:function(a,b,c){return a.getProgramParameter(b,c)},
aW:function(a,b){return a.getShaderInfoLog(b)},
aX:function(a,b,c){return a.getShaderParameter(b,c)},
aY:function(a,b,c){return a.getUniformLocation(b,c)},
bU:function(a,b){return a.linkProgram(b)},
bY:function(a,b,c){return a.pixelStorei(b,c)},
b0:function(a,b,c){return a.shaderSource(b,c)},
b1:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aP:function(a,b,c,d,e,f,g,h,i,j){var t
if(!!J.q(g).$isah)t=!0
else t=!1
if(t){this.aJ(a,b,c,d,e,f,g)
return}throw H.c(P.d5("Incorrect number or type of arguments"))},
c3:function(a,b,c,d,e,f,g){return this.aP(a,b,c,d,e,f,g,null,null,null)},
aJ:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
c4:function(a,b,c,d){return a.texParameterf(b,c,d)},
c5:function(a,b,c,d){return a.texParameteri(b,c,d)},
c8:function(a,b,c){return a.uniform1f(b,c)},
c9:function(a,b,c){return a.uniform1fv(b,c)},
ca:function(a,b,c){return a.uniform1i(b,c)},
cb:function(a,b,c){return a.uniform1iv(b,c)},
cc:function(a,b,c){return a.uniform2fv(b,c)},
cd:function(a,b,c){return a.uniform3fv(b,c)},
ce:function(a,b,c){return a.uniform4fv(b,c)},
cf:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cg:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cj:function(a,b){return a.useProgram(b)},
cl:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cn:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.eT.prototype={
dt:function(a,b){return a.beginTransformFeedback(b)},
dw:function(a,b){return a.bindVertexArray(b)},
dD:function(a){return a.createVertexArray()},
dJ:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dK:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dL:function(a){return a.endTransformFeedback()},
ec:function(a,b,c,d){this.dm(a,b,c,d)
return},
dm:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
ed:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bu:function(a,b){return a.activeTexture(b)},
bw:function(a,b,c){return a.attachShader(b,c)},
bx:function(a,b,c){return a.bindBuffer(b,c)},
by:function(a,b,c){return a.bindFramebuffer(b,c)},
bz:function(a,b,c){return a.bindTexture(b,c)},
bA:function(a,b){return a.blendEquation(b)},
bB:function(a,b,c){return a.blendFunc(b,c)},
bC:function(a,b,c,d){return a.bufferData(b,c,d)},
bD:function(a,b){return a.clear(b)},
bE:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bF:function(a,b){return a.compileShader(b)},
bG:function(a){return a.createBuffer()},
bH:function(a){return a.createProgram()},
bJ:function(a,b){return a.createShader(b)},
bK:function(a){return a.createTexture()},
bM:function(a,b){return a.depthMask(b)},
bN:function(a,b){return a.disable(b)},
bO:function(a,b,c,d){return a.drawArrays(b,c,d)},
bP:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bQ:function(a,b){return a.enable(b)},
bR:function(a,b){return a.enableVertexAttribArray(b)},
ar:function(a){return P.hn(a.getContextAttributes())},
aT:function(a){return a.getError()},
aU:function(a,b){return a.getProgramInfoLog(b)},
aV:function(a,b,c){return a.getProgramParameter(b,c)},
aW:function(a,b){return a.getShaderInfoLog(b)},
aX:function(a,b,c){return a.getShaderParameter(b,c)},
aY:function(a,b,c){return a.getUniformLocation(b,c)},
bU:function(a,b){return a.linkProgram(b)},
bY:function(a,b,c){return a.pixelStorei(b,c)},
b0:function(a,b,c){return a.shaderSource(b,c)},
b1:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aP:function(a,b,c,d,e,f,g,h,i,j){var t
if(!!J.q(g).$isah)t=!0
else t=!1
if(t){this.aJ(a,b,c,d,e,f,g)
return}throw H.c(P.d5("Incorrect number or type of arguments"))},
c3:function(a,b,c,d,e,f,g){return this.aP(a,b,c,d,e,f,g,null,null,null)},
aJ:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
c4:function(a,b,c,d){return a.texParameterf(b,c,d)},
c5:function(a,b,c,d){return a.texParameteri(b,c,d)},
c8:function(a,b,c){return a.uniform1f(b,c)},
c9:function(a,b,c){return a.uniform1fv(b,c)},
ca:function(a,b,c){return a.uniform1i(b,c)},
cb:function(a,b,c){return a.uniform1iv(b,c)},
cc:function(a,b,c){return a.uniform2fv(b,c)},
cd:function(a,b,c){return a.uniform3fv(b,c)},
ce:function(a,b,c){return a.uniform4fv(b,c)},
cf:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cg:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cj:function(a,b){return a.useProgram(b)},
cl:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cn:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.f3.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return P.hn(this.df(a,b))},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
df:function(a,b){return a.item(b)},
$isj:1,
$asj:function(){return[P.aE]},
$asl:function(){return[P.aE]},
$isi:1,
$asi:function(){return[P.aE]},
$asm:function(){return[P.aE]}}
P.cA.prototype={}
P.cB.prototype={}
G.et.prototype={}
G.cb.prototype={
N:function(a,b){var t=this.d
if(H.a4(!t.C(0,a)))H.ac("uniform "+a+" already set")
t.i(0,a,b)},
b9:function(){return this.d},
k:function(a){var t,s,r,q
t=H.E(["{"+new H.a9(H.hs(this),null).k(0)+"}["+this.a+"]"],[P.w])
for(s=this.d,r=s.gG(s),r=r.gA(r);r.q();){q=r.gt(r)
C.a.l(t,H.f(q)+": "+H.f(s.h(0,q)))}return C.a.aa(t,"\n")}}
G.d9.prototype={}
G.db.prototype={
bS:function(a,b,c){J.k9(this.a,b)
if(c>0)J.kt(this.a,b,c)},
cm:function(a,b,c,d,e,f,g,h){J.hL(this.a,34962,b)
J.ku(this.a,c,d,e,!1,g,h)}}
G.dX.prototype={}
G.dP.prototype={}
G.dZ.prototype={
cN:function(a){var t=this.e
H.b(!t.C(0,a))
H.b(C.j.cB(a,"a"))
switch($.$get$K().h(0,a).a){case"vec2":t.i(0,a,H.E([],[T.aa]))
break
case"vec3":t.i(0,a,H.E([],[T.o]))
break
case"vec4":t.i(0,a,H.E([],[T.ab]))
break
case"float":t.i(0,a,H.E([],[P.N]))
break
case"uvec4":t.i(0,a,H.E([],[[P.i,P.v]]))
break
default:if(H.a4(!1))H.ac("unknown type for "+a)}},
cI:function(a,b){var t,s,r,q,p,o,n
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.F)(b),++q){p=b[q]
o=new Float32Array(2)
n=p.a
o[1]=n[1]
o[0]=n[0]
r.l(t,new T.aa(o))}},
cO:function(){var t,s,r,q,p,o,n,m,l
t=this.c
s=t.length
H.b(s>0)
s=new Array(t.length*6)
s.fixed$length=Array
r=H.E(s,[P.v])
for(s=this.b,q=0,p=0;!1;++p){o=s[p]
r[q]=o.geg(o)
r[q+1]=o.geh(o)
r[q+2]=o.gei(o)
q+=3}for(s=t.length,p=0;p<s;++p){n=t[p]
m=n.a
r[q]=m
r[q+1]=n.b
l=n.c
r[q+2]=l
r[q+3]=m
r[q+4]=l
r[q+5]=n.d
q+=6}H.b(q===r.length)
return r},
cP:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t=a*b
H.b(this.d.length===t)
s=this.c
r=a-0
q=b-0
p=0
while(!0){if(!(p<q))break
o=p*a
n=p+1
m=0
while(!0){if(!(m<r))break
l=m+1
k=l%a
j=n%b*a
H.b(!0)
C.a.l(s,new G.dP(o+k,j+k,j+m,o+m))
m=l}p=n}H.b(s.length===t)},
k:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gG(s),r=r.gA(r);r.q();){q=r.gt(r)
p=$.$get$K().h(0,q).a
C.a.l(t,H.f(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.aa(t," ")}}
G.c9.prototype={}
G.c8.prototype={}
G.eo.prototype={
cT:function(a,b){this.N("cDepthTest",!0)
this.N("cDepthWrite",!1)
this.N("cBlendEquation",b)
this.N("cStencilFunc",$.$get$j3())}}
G.eq.prototype={
b7:function(a,b,c){var t,s
if(C.j.av(a,0)===105){if(H.a4(C.b.at(b.length,c)===this.z))H.ac("ChangeAttribute "+this.z)}else{t=C.b.at(b.length,c)
if(H.a4(t===(this.ch.length/3|0)))H.ac("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.hL(t.a,34962,s)
J.iv(t.a,34962,b,35048)},
cQ:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
a2:function(a,b,c){var t,s,r,q,p,o
t=J.is(a,0)===105
if(t&&this.z===0)this.z=C.b.at(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.hM(r.a))
this.b7(a,b,c)
q=$.$get$K().h(0,a)
if(q==null)throw H.c("Unknown canonical "+a)
p=this.x
if(H.a4(p.C(0,a)))H.ac("unexpected attribute "+a)
o=p.h(0,a)
J.d0(r.a,this.e)
r.bS(0,o,t?1:0)
r.cm(0,s.h(0,a),o,q.b8(),5126,!1,0,0)},
b6:function(a){var t,s,r,q,p
t=this.r
s=this.d
t.i(0,"aPosition",J.hM(s.a))
this.ch=a
this.b7("aPosition",a,3)
r=$.$get$K().h(0,"aPosition")
if(r==null)throw H.c("Unknown canonical aPosition")
q=this.x
H.b(q.C(0,"aPosition"))
p=q.h(0,"aPosition")
J.d0(s.a,this.e)
s.bS(0,p,0)
s.cm(0,t.h(0,"aPosition"),p,r.b8(),5126,!1,0,0)},
k:function(a){var t,s,r,q
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,r=t.gG(t),r=r.gA(r);r.q();){q=r.gt(r)
C.a.l(s,H.f(q)+":"+t.h(0,q).length)}return"MESH["+this.a+"] "+C.a.aa(s,"  ")},
saB:function(a){this.cx=a}}
G.eG.prototype={
cJ:function(a,b){var t=C.b.cp(a,b)
if(this.z===t)return
this.z=t
this.bb()},
bb:function(){var t,s,r,q,p,o,n
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
b9:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.o(new Float32Array(3))
o.b_(r,q,p)
p=this.d
p.i(0,"uEyePosition",o)
o=this.cy
o.D(t)
t=o.a
t[12]=0
t[13]=0
t[14]=0
t[15]=1
n=-s[12]
m=-s[13]
l=-s[14]
s=J.q(n)
r=!!s.$isab
k=r?s.gaq(n):1
if(!!s.$iso){j=s.gm(n)
m=s.gn(n)
l=s.gB(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
l=s.gB(n)
n=j}else if(!(typeof n==="number")){n=null
m=null
l=null}s=C.f.E(t[0],n)
r=C.f.E(t[4],m)
q=C.f.E(t[8],l)
i=t[12]
h=C.f.E(t[1],n)
g=C.f.E(t[5],m)
f=C.f.E(t[9],l)
e=t[13]
d=C.f.E(t[2],n)
c=C.f.E(t[6],m)
b=C.f.E(t[10],l)
a=t[14]
a0=C.f.E(t[3],n)
a1=C.f.E(t[7],m)
a2=C.f.E(t[11],l)
a3=t[15]
t[12]=s+r+q+i*k
t[13]=h+g+f+e*k
t[14]=d+c+b+a*k
t[15]=a0+a1+a2+a3*k
a3=this.cx
a3.D(this.db)
a3.bX(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.eR.prototype={
cV:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.F)(t),++o){n=t[o]
r.i(0,n,J.iy(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.F)(t),++o){n=t[o]
r.i(0,n,J.iy(q.a,p,n))}},
cY:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gj(t)===s.gj(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gG(s),s=s.gA(s);s.q();){q=s.gt(s)
if(!t.C(0,q))C.a.l(r,q)}for(t=this.x,s=new P.bc(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.q();){q=s.d
if(!t.Y(0,q))C.a.l(r,q)}return r},
cZ:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gG(b),s=s.gA(s),r=this.d,q=this.y,p=this.z,o=0;s.q();){n=s.gt(s)
switch(J.is(n,0)){case 117:if(q.C(0,n)){m=b.h(0,n)
if(p.C(0,n))H.hG("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$K().h(0,n)
if(l==null)H.G("unknown "+n)
H.b(q.C(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.hQ(r.a,k,m)
else if(!!J.q(m).$isiQ)J.kr(r.a,k,m)
break
case"float":if(l.c===0)J.kp(r.a,k,m)
else if(!!J.q(m).$isdU)J.kq(r.a,k,m)
break
case"mat4":if(l.c===0){n=H.af(m,"$isI").a
J.iE(r.a,k,!1,n)}else if(!!J.q(m).$isdU)J.iE(r.a,k,!1,m)
else if(H.a4(!1))H.ac("bad unform: "+n)
break
case"mat3":if(l.c===0){n=H.af(m,"$isar").a
J.iD(r.a,k,!1,n)}else if(!!J.q(m).$isdU)J.iD(r.a,k,!1,m)
else if(H.a4(!1))H.ac("bad unform: "+n)
break
case"vec4":n=l.c
j=r.a
if(n===0)J.iC(j,k,H.af(m,"$isab").a)
else J.iC(j,k,m)
break
case"vec3":n=l.c
j=r.a
if(n===0)J.iB(j,k,H.af(m,"$iso").a)
else J.iB(j,k,m)
break
case"vec2":n=l.c
j=r.a
if(n===0)J.iA(j,k,H.af(m,"$isaa").a)
else J.iA(j,k,m)
break
case"sampler2D":case"sampler2DShadow":n=C.b.V(33984,this.ch)
J.it(r.a,n)
n=H.af(m,"$isb9").b
J.br(r.a,3553,n)
n=this.ch
J.hQ(r.a,k,n)
this.ch=this.ch+1
break
case"samplerCube":H.b(n==="uCubeTexture")
n=C.b.V(33984,this.ch)
J.it(r.a,n)
n=H.af(m,"$isb9").b
J.br(r.a,34067,n)
n=this.ch
J.hQ(r.a,k,n)
this.ch=this.ch+1
break
default:H.hG("Error: unknow uniform type: "+j)
H.b(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":n=J.A(m,!0)
j=r.a
if(n)J.d1(j,2929)
else J.hN(j,2929)
break
case"cStencilFunc":H.af(m,"$isc9")
n=m.a
j=r.a
if(n===1281)J.hN(j,2960)
else{J.d1(j,2960)
j=m.b
i=m.c
J.kl(r.a,n,j,i)}break
case"cDepthWrite":J.k3(r.a,m)
break
case"cBlendEquation":H.af(m,"$isc8")
n=m.a
j=r.a
if(n===1281)J.hN(j,3042)
else{J.d1(j,3042)
j=m.b
i=m.c
J.jX(r.a,j,i)
J.jW(r.a,n)}break}++o
break}}h=P.kF(0,0,0,Date.now()-new P.aV(t,!1).a,0,0)
""+o
h.k(0)},
cM:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
Date.now()
t=this.d
J.ks(t.a,this.r)
this.ch=0
this.z.P(0)
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.F)(b),++r){q=b[r]
this.cZ(q.a,q.b9())}s=this.Q
s.P(0)
for(p=a.cy,p=p.gG(p),p=p.gA(p);p.q();)s.l(0,p.gt(p))
o=this.cY()
if(o.length!==0)P.a5("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.f(o)))
J.d0(a.d.a,a.e)
n=this.e.f.length>0
s=a.f
p=a.cQ()
m=a.Q
l=a.z
if(n)J.jU(t.a,s)
if(m!==-1){k=t.a
if(l>1)J.k7(k,s,p,m,0,l)
else J.k6(k,s,p,m,0)}else{m=t.a
if(l>1)J.k5(m,s,0,p,l)
else J.k4(m,s,0,p)}if(n)J.ka(t.a)}}
G.u.prototype={
b8:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.b(!1)
return-1}}}
G.eY.prototype={
b4:function(a){var t,s,r,q,p
H.b(this.b==null)
for(t=a.length,s=this.c,r=this.x,q=0;q<a.length;a.length===t||(0,H.F)(a),++q){p=a[q]
H.b($.$get$K().C(0,p))
H.b(!C.a.Y(s,p))
C.a.l(s,p)
r.i(0,p,this.r);++this.r}C.a.as(s)},
ae:function(a){var t,s,r,q
H.b(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.F)(a),++r){q=a[r]
if(H.a4($.$get$K().C(0,q)))H.ac("missing uniform "+q)
H.b(!C.a.Y(s,q))
C.a.l(s,q)}C.a.as(s)},
b5:function(a){var t,s,r
H.b(this.b==null)
for(t=this.e,s=0;s<1;++s){r=a[s]
H.b($.$get$K().C(0,r))
H.b(!C.a.Y(t,r))
C.a.l(t,r)}C.a.as(t)},
cW:function(a,b){H.b(this.b==null)
this.b=this.d_(!0,a,b)},
af:function(a){return this.cW(a,null)},
d_:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.b(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.F)(t),++o){n=t[o]
m=$.$get$K().h(0,n)
C.a.l(q,"layout (location="+H.f(p.h(0,n))+") in "+m.a+" "+H.f(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.F)(t),++o){k=t[o]
m=$.$get$K().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.f(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.F)(t),++o){k=t[o]
m=$.$get$K().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.f(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.F)(t),++o){k=t[o]
m=$.$get$K().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.f(k)+j+";")}C.a.l(q,"")
C.a.l(q,"void main(void) {")
C.a.dq(q,b)
C.a.l(q,"}")
return C.a.aa(q,"\n")}}
G.f1.prototype={}
G.fg.prototype={}
G.b9.prototype={
k:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.e3.prototype={
cR:function(a,b,c,d,e){var t,s,r,q
t=this.d
s=this.c
J.br(t.a,s,this.b)
J.kj(t.a,37440,1)
this.ba(this.f)
r=this.e
q=r.e
if(q!==1)J.kn(t.a,s,34046,q)
J.iz(t.a,s,10240,r.r)
J.iz(t.a,s,10241,r.f)
H.b(J.ke(t.a)===0)
J.br(t.a,s,null)},
ba:function(a){var t,s
t=this.d
s=this.c
J.br(t.a,s,this.b)
J.km(t.a,s,0,6408,6408,5121,a)}}
R.c_.prototype={
c0:function(a){var t,s,r
t=this.db
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.a5("size change "+H.f(s)+" "+H.f(r))
this.dx.cJ(s,r)
this.z=s
this.Q=r}}
A.bV.prototype={
k:function(a){return"NODE["+this.a+"]"}}
A.b4.prototype={}
A.eQ.prototype={
cU:function(a,b,c){if(this.d==null)this.d=new G.dX(this.e,null,null,null,null)},
cL:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.d
s=this.r
r=this.z
q=this.Q
p=t.a
t=t.b
J.jV(p.a,36160,t)
H.b(r>0&&q>0)
J.kv(p.a,this.x,this.y,r,q)
if(s!==0)J.jY(p.a,s)
for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.F)(t),++o){n=t[o]
m=n.e
C.a.l(m,new G.cb(P.S(),"transforms",!1,!0))
l=new T.I(new Float32Array(16))
l.M()
for(r=n.f,q=r.length,p=n.d,k=0;k<r.length;r.length===q||(0,H.F)(r),++k)A.jA(p,r[k],l,a,m)
m.pop()}},
cK:function(){return this.cL(null)}}
B.f_.prototype={
$2:function(a,b){B.i7(a,this.a,this.b,this.c,this.d,b)},
$S:function(a,b){return{func:1,v:true,args:[P.N,T.o]}}}
B.fl.prototype={}
A.ht.prototype={
$2:function(a,b){var t=536870911&a+J.aR(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(a,b){return{func:1,args:[P.v,P.B]}}}
T.ar.prototype={
D:function(a){var t,s
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
k:function(a){return"[0] "+this.K(0).k(0)+"\n[1] "+this.K(1).k(0)+"\n[2] "+this.K(2).k(0)+"\n"},
h:function(a,b){return this.a[b]},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.ar){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gu:function(a){return A.cY(this.a)},
K:function(a){var t,s
t=new Float32Array(3)
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.o(t)},
dB:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
if(g===0){this.D(a)
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
T.I.prototype={
a1:function(a,b,c){H.b(a<4)
H.b(b<4)
this.a[b*4+a]=c},
D:function(a){var t,s
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
k:function(a){return"[0] "+this.K(0).k(0)+"\n[1] "+this.K(1).k(0)+"\n[2] "+this.K(2).k(0)+"\n[3] "+this.K(3).k(0)+"\n"},
h:function(a,b){return this.a[b]},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.I){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gu:function(a){return A.cY(this.a)},
K:function(a){var t,s
t=new Float32Array(4)
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.ab(t)},
M:function(){var t=this.a
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
bX:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.aa.prototype={
k:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+"]"},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aa){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gu:function(a){return A.cY(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.o.prototype={
b_:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
D:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
k:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+"]"},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.o){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gu:function(a){return A.cY(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){return Math.sqrt(this.gbT())},
gbT:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
a_:function(a){var t,s,r
t=Math.sqrt(this.gbT())
if(t===0)return 0
s=1/t
r=this.a
r[0]=r[0]*s
r[1]=r[1]*s
r[2]=r[2]*s
return t},
aM:function(a){var t,s
t=a.a
s=this.a
return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]},
bL:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.o(new Float32Array(3))
t.b_(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
al:function(a,b){var t,s
t=a.a
s=this.a
s[0]=s[0]+t[0]*b
s[1]=s[1]+t[1]*b
s[2]=s[2]+t[2]*b},
b2:function(a,b){var t,s
t=b.a
s=this.a
s[0]=s[0]-t[0]
s[1]=s[1]-t[1]
s[2]=s[2]-t[2]},
sm:function(a,b){this.a[0]=b
return b},
sn:function(a,b){this.a[1]=b
return b},
sB:function(a,b){this.a[2]=b
return b},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gB:function(a){return this.a[2]}}
T.ab.prototype={
k:function(a){var t=this.a
return H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+","+H.f(t[3])},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.ab){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gu:function(a){return A.cY(this.a)},
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
gB:function(a){return this.a[2]},
gaq:function(a){return this.a[3]}}
M.hE.prototype={
$1:function(a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
t=a1+0
this.a.a=t
s=this.b
r=t/3000
q=s.id
p=s.go
o=s.fy
n=s.k1
m=s.k2
B.i7(r,q,p,o,n,m)
l=s.k3
B.i7(r+0.01,q,p,o,n,l)
n=m.a
o=s.d.a
o[12]=n[0]
o[13]=n[1]
o[14]=n[2]
k=o[12]
j=o[13]
i=o[14]
s=s.e
q=s.a
q[0]=k
q[1]=o[13]
q[2]=o[14]
q=new Float32Array(3)
h=new T.o(q)
h.D(s)
h.b2(0,l)
h.a_(0)
g=m.bL(h)
g.a_(0)
f=h.bL(g)
f.a_(0)
m=g.aM(s)
l=f.aM(s)
s=h.aM(s)
p=g.a
n=p[0]
e=f.a
d=e[0]
c=q[0]
b=p[1]
a=e[1]
a0=q[1]
p=p[2]
e=e[2]
q=q[2]
o[15]=1
o[14]=-s
o[13]=-l
o[12]=-m
o[11]=0
o[10]=q
o[9]=e
o[8]=p
o[7]=0
o[6]=a0
o[5]=a
o[4]=b
o[3]=0
o[2]=c
o[1]=d
o[0]=n
o[12]=k
o[13]=j
o[14]=i
o=this.c
M.jR(a1/1000,o)
this.d.ba(o)
this.e.cK()
C.ai.gds(window).c6(this)},
$S:function(a){return{func:1,v:true,args:[P.U]}}}
J.a.prototype.cF=J.a.prototype.k
J.aZ.prototype.cG=J.aZ.prototype.k;(function installTearOffs(){installTearOff(H.aH.prototype,"gdY",0,0,0,null,["$0"],["ao"],0)
installTearOff(H.T.prototype,"gcq",0,0,0,null,["$1"],["H"],2)
installTearOff(H.au.prototype,"gdF",0,0,0,null,["$1"],["R"],2)
installTearOff(P,"lu",1,0,0,null,["$1"],["lf"],1)
installTearOff(P,"lv",1,0,0,null,["$1"],["lg"],1)
installTearOff(P,"lw",1,0,0,null,["$1"],["lh"],1)
installTearOff(P,"jz",1,0,0,null,["$0"],["ls"],0)
installTearOff(P.a2.prototype,"gd6",0,0,0,null,["$2","$1"],["ag","d7"],3)
installTearOff(P,"lz",1,0,0,null,["$2"],["kC"],5)
installTearOff(R.c_.prototype,"ge6",0,0,0,null,["$1"],["c0"],4)
installTearOff(M,"jQ",1,0,0,null,["$0"],["lM"],0)})();(function inheritance(){inherit(P.B,null)
var t=P.B
inherit(H.hY,t)
inherit(J.a,t)
inherit(J.d6,t)
inherit(P.Y,t)
inherit(H.bM,t)
inherit(P.bJ,t)
inherit(H.aB,t)
inherit(H.ak,t)
inherit(H.h6,t)
inherit(H.aH,t)
inherit(H.fK,t)
inherit(H.av,t)
inherit(H.h5,t)
inherit(H.fG,t)
inherit(H.bZ,t)
inherit(H.fi,t)
inherit(H.ai,t)
inherit(H.T,t)
inherit(H.au,t)
inherit(H.eP,t)
inherit(H.fp,t)
inherit(P.aA,t)
inherit(H.cC,t)
inherit(H.a9,t)
inherit(P.b_,t)
inherit(H.ee,t)
inherit(H.eg,t)
inherit(P.hT,t)
inherit(P.fH,t)
inherit(P.ck,t)
inherit(P.a2,t)
inherit(P.cc,t)
inherit(P.f7,t)
inherit(P.f8,t)
inherit(P.i5,t)
inherit(P.ax,t)
inherit(P.hg,t)
inherit(P.eX,t)
inherit(P.h2,t)
inherit(P.bc,t)
inherit(P.i1,t)
inherit(P.l,t)
inherit(P.h4,t)
inherit(P.bp,t)
inherit(P.C,t)
inherit(P.aV,t)
inherit(P.U,t)
inherit(P.am,t)
inherit(P.c4,t)
inherit(P.hU,t)
inherit(P.fO,t)
inherit(P.dw,t)
inherit(P.i,t)
inherit(P.aE,t)
inherit(P.H,t)
inherit(P.aG,t)
inherit(P.w,t)
inherit(P.b6,t)
inherit(P.i9,t)
inherit(W.dh,t)
inherit(W.m,t)
inherit(W.dT,t)
inherit(P.h0,t)
inherit(P.h8,t)
inherit(G.et,t)
inherit(G.db,t)
inherit(G.dX,t)
inherit(G.dP,t)
inherit(G.dZ,t)
inherit(G.c9,t)
inherit(G.c8,t)
inherit(G.u,t)
inherit(G.eY,t)
inherit(G.fg,t)
inherit(G.b9,t)
inherit(T.ar,t)
inherit(T.I,t)
inherit(T.aa,t)
inherit(T.o,t)
inherit(T.ab,t)
t=J.a
inherit(J.e8,t)
inherit(J.ea,t)
inherit(J.aZ,t)
inherit(J.an,t)
inherit(J.aC,t)
inherit(J.ao,t)
inherit(H.b1,t)
inherit(H.aF,t)
inherit(W.d,t)
inherit(W.d2,t)
inherit(W.bw,t)
inherit(W.bx,t)
inherit(W.az,t)
inherit(W.Q,t)
inherit(W.cd,t)
inherit(W.dm,t)
inherit(W.dn,t)
inherit(W.dp,t)
inherit(W.bA,t)
inherit(W.ce,t)
inherit(W.bC,t)
inherit(W.cg,t)
inherit(W.ds,t)
inherit(W.e,t)
inherit(W.ci,t)
inherit(W.e0,t)
inherit(W.cl,t)
inherit(W.ei,t)
inherit(W.ep,t)
inherit(W.cp,t)
inherit(W.cs,t)
inherit(W.Z,t)
inherit(W.cw,t)
inherit(W.cy,t)
inherit(W.a_,t)
inherit(W.cD,t)
inherit(W.cG,t)
inherit(W.fh,t)
inherit(W.cI,t)
inherit(W.fn,t)
inherit(W.fv,t)
inherit(W.fx,t)
inherit(W.cM,t)
inherit(W.cO,t)
inherit(W.cQ,t)
inherit(W.cS,t)
inherit(W.cU,t)
inherit(P.cn,t)
inherit(P.cu,t)
inherit(P.eJ,t)
inherit(P.eK,t)
inherit(P.eN,t)
inherit(P.cE,t)
inherit(P.cK,t)
inherit(P.d7,t)
inherit(P.eS,t)
inherit(P.eT,t)
inherit(P.cA,t)
t=J.aZ
inherit(J.eH,t)
inherit(J.at,t)
inherit(J.ap,t)
inherit(J.hX,J.an)
t=J.aC
inherit(J.bK,t)
inherit(J.e9,t)
t=P.Y
inherit(H.j,t)
inherit(H.bN,t)
t=H.j
inherit(H.aD,t)
inherit(H.ef,t)
inherit(H.dv,H.bN)
inherit(H.em,P.bJ)
t=H.aD
inherit(H.bO,t)
inherit(P.eh,t)
t=H.ak
inherit(H.hI,t)
inherit(H.hJ,t)
inherit(H.h_,t)
inherit(H.fL,t)
inherit(H.e5,t)
inherit(H.e6,t)
inherit(H.h7,t)
inherit(H.fj,t)
inherit(H.fk,t)
inherit(H.hK,t)
inherit(H.hy,t)
inherit(H.hz,t)
inherit(H.hA,t)
inherit(H.hB,t)
inherit(H.hC,t)
inherit(H.fd,t)
inherit(H.eb,t)
inherit(H.hu,t)
inherit(H.hv,t)
inherit(H.hw,t)
inherit(P.fD,t)
inherit(P.fC,t)
inherit(P.fE,t)
inherit(P.fF,t)
inherit(P.fP,t)
inherit(P.fT,t)
inherit(P.fQ,t)
inherit(P.fR,t)
inherit(P.fS,t)
inherit(P.fW,t)
inherit(P.fX,t)
inherit(P.fV,t)
inherit(P.fU,t)
inherit(P.f9,t)
inherit(P.fa,t)
inherit(P.hj,t)
inherit(P.hb,t)
inherit(P.ha,t)
inherit(P.hc,t)
inherit(P.el,t)
inherit(P.dt,t)
inherit(P.du,t)
inherit(W.f6,t)
inherit(W.fA,t)
inherit(W.fN,t)
inherit(P.hm,t)
inherit(B.f_,t)
inherit(A.ht,t)
inherit(M.hE,t)
t=H.fG
inherit(H.aJ,t)
inherit(H.bl,t)
t=P.aA
inherit(H.eC,t)
inherit(H.ec,t)
inherit(H.ft,t)
inherit(H.fr,t)
inherit(H.da,t)
inherit(H.eU,t)
inherit(P.bv,t)
inherit(P.bX,t)
inherit(P.W,t)
inherit(P.fu,t)
inherit(P.fs,t)
inherit(P.b5,t)
inherit(P.dc,t)
inherit(P.dl,t)
t=H.fd
inherit(H.f4,t)
inherit(H.aT,t)
inherit(H.fB,P.bv)
inherit(P.ek,P.b_)
inherit(H.a7,P.ek)
t=H.aF
inherit(H.eu,t)
inherit(H.bR,t)
t=H.bR
inherit(H.bd,t)
inherit(H.bf,t)
inherit(H.be,H.bd)
inherit(H.bS,H.be)
inherit(H.bg,H.bf)
inherit(H.bT,H.bg)
t=H.bS
inherit(H.bQ,t)
inherit(H.ev,t)
t=H.bT
inherit(H.ew,t)
inherit(H.ex,t)
inherit(H.ey,t)
inherit(H.ez,t)
inherit(H.eA,t)
inherit(H.bU,t)
inherit(H.eB,t)
inherit(P.hf,P.fH)
inherit(P.h9,P.hg)
inherit(P.h3,H.a7)
inherit(P.eW,P.eX)
inherit(P.fZ,P.eW)
inherit(P.h1,P.fZ)
t=P.U
inherit(P.N,t)
inherit(P.v,t)
t=P.W
inherit(P.bY,t)
inherit(P.e4,t)
t=W.d
inherit(W.x,t)
inherit(W.a8,t)
inherit(W.dR,t)
inherit(W.aY,t)
inherit(W.b0,t)
inherit(W.eL,t)
inherit(W.c0,t)
inherit(W.bh,t)
inherit(W.bj,t)
inherit(W.fy,t)
inherit(W.fz,t)
inherit(W.ba,t)
inherit(W.ib,t)
inherit(P.d8,t)
inherit(P.ay,t)
t=W.x
inherit(W.bD,t)
inherit(W.aj,t)
inherit(W.aW,t)
t=W.bD
inherit(W.h,t)
inherit(P.t,t)
t=W.a8
inherit(W.bu,t)
inherit(W.e_,t)
inherit(W.ej,t)
t=W.h
inherit(W.d3,t)
inherit(W.d4,t)
inherit(W.ah,t)
inherit(W.dW,t)
inherit(W.eV,t)
t=W.az
inherit(W.dd,t)
inherit(W.df,t)
inherit(W.dg,t)
inherit(W.dj,t)
t=W.Q
inherit(W.de,t)
inherit(W.di,t)
inherit(W.dk,t)
inherit(W.aU,W.cd)
inherit(W.dq,W.bA)
inherit(W.cf,W.ce)
inherit(W.bB,W.cf)
inherit(W.ch,W.cg)
inherit(W.dr,W.ch)
inherit(W.cj,W.ci)
inherit(W.dQ,W.cj)
inherit(W.cm,W.cl)
inherit(W.aX,W.cm)
inherit(W.bI,W.aW)
inherit(W.e1,W.aY)
inherit(W.er,W.b0)
inherit(W.cq,W.cp)
inherit(W.es,W.cq)
inherit(W.ct,W.cs)
inherit(W.bW,W.ct)
inherit(W.cx,W.cw)
inherit(W.eI,W.cx)
inherit(W.bi,W.bh)
inherit(W.f0,W.bi)
inherit(W.cz,W.cy)
inherit(W.f2,W.cz)
inherit(W.f5,W.cD)
inherit(W.cH,W.cG)
inherit(W.fe,W.cH)
inherit(W.bk,W.bj)
inherit(W.ff,W.bk)
inherit(W.cJ,W.cI)
inherit(W.fm,W.cJ)
inherit(W.cN,W.cM)
inherit(W.fI,W.cN)
inherit(W.fJ,W.bC)
inherit(W.cP,W.cO)
inherit(W.fY,W.cP)
inherit(W.cR,W.cQ)
inherit(W.cr,W.cR)
inherit(W.cT,W.cS)
inherit(W.hd,W.cT)
inherit(W.cV,W.cU)
inherit(W.he,W.cV)
inherit(W.ie,P.f7)
inherit(W.fM,P.f8)
inherit(P.L,P.h8)
t=P.t
inherit(P.dx,t)
inherit(P.dy,t)
inherit(P.dz,t)
inherit(P.dA,t)
inherit(P.dB,t)
inherit(P.dC,t)
inherit(P.dD,t)
inherit(P.dE,t)
inherit(P.dF,t)
inherit(P.dG,t)
inherit(P.dH,t)
inherit(P.dI,t)
inherit(P.dJ,t)
inherit(P.dK,t)
inherit(P.dL,t)
inherit(P.dM,t)
inherit(P.dN,t)
inherit(P.dO,t)
inherit(P.dS,t)
inherit(P.X,t)
inherit(P.en,t)
inherit(P.eF,t)
t=P.X
inherit(P.dV,t)
inherit(P.R,t)
inherit(P.e2,t)
inherit(P.fc,t)
inherit(P.b7,t)
inherit(P.fw,t)
inherit(P.co,P.cn)
inherit(P.ed,P.co)
inherit(P.cv,P.cu)
inherit(P.eD,P.cv)
inherit(P.eO,P.R)
inherit(P.cF,P.cE)
inherit(P.fb,P.cF)
inherit(P.b8,P.b7)
inherit(P.cL,P.cK)
inherit(P.fo,P.cL)
inherit(P.eE,P.ay)
inherit(P.cB,P.cA)
inherit(P.f3,P.cB)
t=G.et
inherit(G.cb,t)
inherit(G.f1,t)
inherit(G.eq,t)
inherit(G.eR,t)
inherit(A.eQ,t)
inherit(A.b4,t)
t=G.f1
inherit(G.d9,t)
inherit(A.bV,t)
t=G.cb
inherit(G.eo,t)
inherit(G.eG,t)
inherit(G.e3,G.b9)
inherit(R.c_,A.eQ)
inherit(B.fl,G.d9)
mixin(H.bd,P.l)
mixin(H.be,H.aB)
mixin(H.bf,P.l)
mixin(H.bg,H.aB)
mixin(W.cd,W.dh)
mixin(W.ce,P.l)
mixin(W.cf,W.m)
mixin(W.cg,P.l)
mixin(W.ch,W.m)
mixin(W.ci,P.l)
mixin(W.cj,W.m)
mixin(W.cl,P.l)
mixin(W.cm,W.m)
mixin(W.cp,P.l)
mixin(W.cq,W.m)
mixin(W.cs,P.l)
mixin(W.ct,W.m)
mixin(W.cw,P.l)
mixin(W.cx,W.m)
mixin(W.bh,P.l)
mixin(W.bi,W.m)
mixin(W.cy,P.l)
mixin(W.cz,W.m)
mixin(W.cD,P.b_)
mixin(W.cG,P.l)
mixin(W.cH,W.m)
mixin(W.bj,P.l)
mixin(W.bk,W.m)
mixin(W.cI,P.l)
mixin(W.cJ,W.m)
mixin(W.cM,P.l)
mixin(W.cN,W.m)
mixin(W.cO,P.l)
mixin(W.cP,W.m)
mixin(W.cQ,P.l)
mixin(W.cR,W.m)
mixin(W.cS,P.l)
mixin(W.cT,W.m)
mixin(W.cU,P.l)
mixin(W.cV,W.m)
mixin(P.cn,P.l)
mixin(P.co,W.m)
mixin(P.cu,P.l)
mixin(P.cv,W.m)
mixin(P.cE,P.l)
mixin(P.cF,W.m)
mixin(P.cK,P.l)
mixin(P.cL,W.m)
mixin(P.cA,P.l)
mixin(P.cB,W.m)})();(function constants(){C.p=W.ah.prototype
C.h=W.bw.prototype
C.k=W.bx.prototype
C.t=W.bI.prototype
C.C=J.a.prototype
C.a=J.an.prototype
C.b=J.bK.prototype
C.f=J.aC.prototype
C.j=J.ao.prototype
C.J=J.ap.prototype
C.K=H.bQ.prototype
C.w=J.eH.prototype
C.q=J.at.prototype
C.ai=W.ba.prototype
C.B=new P.h0()
C.e=new P.h9()
C.r=new P.am(0)
C.D=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.E=function(hooks) {
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

C.F=function(getTagFallback) {
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
C.G=function() {
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
C.H=function(hooks) {
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
C.I=function(hooks) {
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
C.L=new G.u("vec3","vertex btangents",0)
C.c=new G.u("vec3","",0)
C.M=new G.u("vec4","delta from light",0)
C.o=new G.u("","",0)
C.x=new G.u("vec3","vertex coordinates",0)
C.N=new G.u("vec3","vertex binormals",0)
C.y=new G.u("vec4","for wireframe",0)
C.O=new G.u("vec4","per vertex color",0)
C.P=new G.u("float","for normal maps",0)
C.l=new G.u("mat4","",0)
C.R=new G.u("mat4","",4)
C.Q=new G.u("mat4","",128)
C.d=new G.u("float","",0)
C.S=new G.u("float","",4)
C.T=new G.u("float","depth for shadowmaps",0)
C.i=new G.u("sampler2D","",0)
C.U=new G.u("float","for bump maps",0)
C.V=new G.u("vec2","texture uvs",0)
C.W=new G.u("float","time since program start in sec",0)
C.m=new G.u("vec2","",0)
C.X=new G.u("samplerCube","",0)
C.n=new G.u("vec4","",0)
C.Y=new G.u("vec3","vertex normals",0)
C.Z=new G.u("sampler2DShadow","",0)
C.z=new G.u("vec3","per vertex color",0)
C.A=new G.u("mat3","",0)
C.a_=new G.u("vec3","vertex tangents",0)
C.a0=H.D("lT")
C.a1=H.D("lU")
C.a2=H.D("dU")
C.a3=H.D("lV")
C.a4=H.D("lW")
C.a5=H.D("iQ")
C.a6=H.D("lX")
C.a7=H.D("iT")
C.a8=H.D("H")
C.a9=H.D("w")
C.aa=H.D("jh")
C.ab=H.D("ji")
C.ac=H.D("lY")
C.ad=H.D("jj")
C.ae=H.D("bp")
C.af=H.D("N")
C.ag=H.D("v")
C.ah=H.D("U")})();(function staticFields(){$.j_="$cachedFunction"
$.j0="$cachedInvocation"
$.iJ=null
$.iH=null
$.ih=!1
$.im=null
$.jw=null
$.jK=null
$.ho=null
$.hx=null
$.io=null
$.aK=null
$.bm=null
$.bn=null
$.ii=!1
$.z=C.e
$.iN=0
$.jB=0})();(function lazyInitializers(){lazy($,"iM","$get$iM",function(){return H.jD("_$dart_dartClosure")})
lazy($,"hZ","$get$hZ",function(){return H.jD("_$dart_js")})
lazy($,"iR","$get$iR",function(){return H.kO()})
lazy($,"iS","$get$iS",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.iN
$.iN=t+1
t="expando$key$"+t}return new P.dw(t,null,[P.v])})
lazy($,"j6","$get$j6",function(){return H.a0(H.fq({
toString:function(){return"$receiver$"}}))})
lazy($,"j7","$get$j7",function(){return H.a0(H.fq({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"j8","$get$j8",function(){return H.a0(H.fq(null))})
lazy($,"j9","$get$j9",function(){return H.a0(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"jd","$get$jd",function(){return H.a0(H.fq(void 0))})
lazy($,"je","$get$je",function(){return H.a0(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"jb","$get$jb",function(){return H.a0(H.jc(null))})
lazy($,"ja","$get$ja",function(){return H.a0(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"jg","$get$jg",function(){return H.a0(H.jc(void 0))})
lazy($,"jf","$get$jf",function(){return H.a0(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"id","$get$id",function(){return P.le()})
lazy($,"bo","$get$bo",function(){return[]})
lazy($,"j3","$get$j3",function(){return new G.c9(1281,0,4294967295)})
lazy($,"iF","$get$iF",function(){return new G.c8(32774,770,769)})
lazy($,"K","$get$K",function(){return P.aq(["cBlendEquation",C.o,"cDepthWrite",C.o,"cDepthTest",C.o,"cStencilFunc",C.o,"tPosition",C.c,"tSpeed",C.c,"tForce",C.c,"aColors",C.z,"aColorAlpha",C.O,"aPosition",C.x,"aTexUV",C.V,"aNormal",C.Y,"aBinormal",C.N,"aCenter",C.y,"aPointSize",C.d,"aBoneIndex",C.n,"aBoneWeight",C.n,"aTangent",C.a_,"aBitangent",C.L,"iaRotation",C.n,"iaTranslation",C.c,"iaScale",C.c,"vColor",C.z,"vTexUV",C.m,"vLightWeighting",C.c,"vNormal",C.c,"vPosition",C.x,"vPositionFromLight",C.M,"vCenter",C.y,"vDepth",C.T,"uTransformationMatrix",C.l,"uModelMatrix",C.l,"uNormalMatrix",C.A,"uConvolutionMatrix",C.A,"uPerspectiveViewMatrix",C.l,"uLightPerspectiveViewMatrix",C.l,"uShadowMap",C.Z,"uTexture",C.i,"uTexture2",C.i,"uTexture3",C.i,"uTexture4",C.i,"uSpecularMap",C.i,"uNormalMap",C.i,"uBumpMap",C.i,"uDepthMap",C.i,"uCubeTexture",C.X,"uAnimationTable",C.i,"uTime",C.W,"uCameraNear",C.d,"uCameraFar",C.d,"uFogNear",C.d,"uFogFar",C.d,"uPointSize",C.d,"uScale",C.d,"uAngle",C.d,"uCanvasSize",C.m,"uCenter2",C.m,"uCutOff",C.d,"uShininess",C.d,"uShadowBias",C.d,"uOpacity",C.d,"uColor",C.c,"uAmbientDiffuse",C.c,"uColorEmissive",C.c,"uColorSpecular",C.c,"uColorDiffuse",C.c,"uColorAlpha",C.n,"uColorAlpha2",C.n,"uEyePosition",C.c,"uMaterial",C.l,"uRange",C.m,"uDirection",C.m,"uBoneMatrices",C.Q,"uLightDescs",C.R,"uLightCount",C.d,"uLightTypes",C.S,"uBumpScale",C.U,"uNormalScale",C.P])})
lazy($,"jl","$get$jl",function(){return C.B})
lazy($,"jO","$get$jO",function(){var t=G.eZ("Textured")
t.b4(["aPosition","aTexUV"])
t.ae(["uPerspectiveViewMatrix","uModelMatrix"])
t.b5(["vTexUV"])
t.af(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vTexUV = aTexUV;"])
return t})
lazy($,"jN","$get$jN",function(){var t=G.eZ("TexturedF")
t.b5(["vTexUV"])
t.ae(["uColor","uTexture"])
t.af(["oFragColor = texture(uTexture, vTexUV) + vec4( uColor, 0.0 );"])
return t})
lazy($,"jJ","$get$jJ",function(){var t=G.eZ("PointSpritesV")
t.b4(["aPosition"])
t.ae(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"])
t.af(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"])
return t})
lazy($,"jI","$get$jI",function(){var t=G.eZ("PointSpritesF")
t.ae(["uTexture"])
t.af(["oFragColor = texture( uTexture,  gl_PointCoord);"])
return t})
lazy($,"j5","$get$j5",function(){return[T.ia(1,0.2),T.ia(0,0.7),T.ia(0,0.7)]})})()
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
mangledGlobalNames:{v:"int",N:"double",U:"num",w:"String",bp:"bool",H:"Null",i:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,v:true,args:[P.B],opt:[P.aG]},{func:1,v:true,args:[W.e]},{func:1,ret:P.v,args:[P.C,P.C]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,Blob:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSCharsetRule:J.a,CSSConditionRule:J.a,CSSFontFaceRule:J.a,CSSGroupingRule:J.a,CSSImportRule:J.a,CSSKeyframeRule:J.a,MozCSSKeyframeRule:J.a,WebKitCSSKeyframeRule:J.a,CSSKeyframesRule:J.a,MozCSSKeyframesRule:J.a,WebKitCSSKeyframesRule:J.a,CSSMediaRule:J.a,CSSNamespaceRule:J.a,CSSPageRule:J.a,CSSRule:J.a,CSSStyleRule:J.a,CSSStyleSheet:J.a,CSSSupportsRule:J.a,CSSVariableReferenceValue:J.a,CSSViewportRule:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,File:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,Gamepad:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MimeType:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechGrammar:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,StyleSheet:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,Touch:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGLength:J.a,SVGMatrix:J.a,SVGNumber:J.a,SVGPreserveAspectRatio:J.a,SVGTransform:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioParamMap:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.b1,ArrayBufferView:H.aF,DataView:H.eu,Float32Array:H.bQ,Float64Array:H.ev,Int16Array:H.ew,Int32Array:H.ex,Int8Array:H.ey,Uint16Array:H.ez,Uint32Array:H.eA,Uint8ClampedArray:H.bU,CanvasPixelArray:H.bU,Uint8Array:H.eB,HTMLAudioElement:W.h,HTMLBRElement:W.h,HTMLBaseElement:W.h,HTMLBodyElement:W.h,HTMLButtonElement:W.h,HTMLContentElement:W.h,HTMLDListElement:W.h,HTMLDataElement:W.h,HTMLDataListElement:W.h,HTMLDetailsElement:W.h,HTMLDialogElement:W.h,HTMLDivElement:W.h,HTMLEmbedElement:W.h,HTMLFieldSetElement:W.h,HTMLHRElement:W.h,HTMLHeadElement:W.h,HTMLHeadingElement:W.h,HTMLHtmlElement:W.h,HTMLIFrameElement:W.h,HTMLImageElement:W.h,HTMLInputElement:W.h,HTMLLIElement:W.h,HTMLLabelElement:W.h,HTMLLegendElement:W.h,HTMLLinkElement:W.h,HTMLMapElement:W.h,HTMLMediaElement:W.h,HTMLMenuElement:W.h,HTMLMetaElement:W.h,HTMLMeterElement:W.h,HTMLModElement:W.h,HTMLOListElement:W.h,HTMLObjectElement:W.h,HTMLOptGroupElement:W.h,HTMLOptionElement:W.h,HTMLOutputElement:W.h,HTMLParagraphElement:W.h,HTMLParamElement:W.h,HTMLPictureElement:W.h,HTMLPreElement:W.h,HTMLProgressElement:W.h,HTMLQuoteElement:W.h,HTMLScriptElement:W.h,HTMLShadowElement:W.h,HTMLSlotElement:W.h,HTMLSourceElement:W.h,HTMLSpanElement:W.h,HTMLStyleElement:W.h,HTMLTableCaptionElement:W.h,HTMLTableCellElement:W.h,HTMLTableDataCellElement:W.h,HTMLTableHeaderCellElement:W.h,HTMLTableColElement:W.h,HTMLTableElement:W.h,HTMLTableRowElement:W.h,HTMLTableSectionElement:W.h,HTMLTemplateElement:W.h,HTMLTextAreaElement:W.h,HTMLTimeElement:W.h,HTMLTitleElement:W.h,HTMLTrackElement:W.h,HTMLUListElement:W.h,HTMLUnknownElement:W.h,HTMLVideoElement:W.h,HTMLDirectoryElement:W.h,HTMLFontElement:W.h,HTMLFrameElement:W.h,HTMLFrameSetElement:W.h,HTMLMarqueeElement:W.h,HTMLElement:W.h,Accelerometer:W.bu,LinearAccelerationSensor:W.bu,AccessibleNodeList:W.d2,HTMLAnchorElement:W.d3,HTMLAreaElement:W.d4,HTMLCanvasElement:W.ah,CanvasGradient:W.bw,CanvasRenderingContext2D:W.bx,CDATASection:W.aj,CharacterData:W.aj,Comment:W.aj,ProcessingInstruction:W.aj,Text:W.aj,CSSPerspective:W.dd,CSSPositionValue:W.de,CSSRotation:W.df,CSSScale:W.dg,CSSStyleDeclaration:W.aU,MSStyleCSSProperties:W.aU,CSS2Properties:W.aU,CSSImageValue:W.Q,CSSKeywordValue:W.Q,CSSNumericValue:W.Q,CSSResourceValue:W.Q,CSSUnitValue:W.Q,CSSURLImageValue:W.Q,CSSStyleValue:W.Q,CSSMatrixComponent:W.az,CSSSkew:W.az,CSSTransformComponent:W.az,CSSTransformValue:W.di,CSSTranslation:W.dj,CSSUnparsedValue:W.dk,DataTransferItemList:W.dm,DeviceAcceleration:W.dn,XMLDocument:W.aW,Document:W.aW,DOMException:W.dp,DOMPoint:W.dq,DOMPointReadOnly:W.bA,ClientRectList:W.bB,DOMRectList:W.bB,DOMRectReadOnly:W.bC,DOMStringList:W.dr,DOMTokenList:W.ds,Element:W.bD,AbortPaymentEvent:W.e,AnimationEvent:W.e,AnimationPlaybackEvent:W.e,ApplicationCacheErrorEvent:W.e,BackgroundFetchClickEvent:W.e,BackgroundFetchEvent:W.e,BackgroundFetchFailEvent:W.e,BackgroundFetchedEvent:W.e,BeforeInstallPromptEvent:W.e,BeforeUnloadEvent:W.e,BlobEvent:W.e,CanMakePaymentEvent:W.e,ClipboardEvent:W.e,CloseEvent:W.e,CompositionEvent:W.e,CustomEvent:W.e,DeviceMotionEvent:W.e,DeviceOrientationEvent:W.e,ErrorEvent:W.e,Event:W.e,InputEvent:W.e,ExtendableEvent:W.e,ExtendableMessageEvent:W.e,FetchEvent:W.e,FocusEvent:W.e,FontFaceSetLoadEvent:W.e,ForeignFetchEvent:W.e,GamepadEvent:W.e,HashChangeEvent:W.e,InstallEvent:W.e,KeyboardEvent:W.e,MediaEncryptedEvent:W.e,MediaKeyMessageEvent:W.e,MediaQueryListEvent:W.e,MediaStreamEvent:W.e,MediaStreamTrackEvent:W.e,MessageEvent:W.e,MIDIConnectionEvent:W.e,MIDIMessageEvent:W.e,MouseEvent:W.e,DragEvent:W.e,MutationEvent:W.e,NotificationEvent:W.e,PageTransitionEvent:W.e,PaymentRequestEvent:W.e,PaymentRequestUpdateEvent:W.e,PointerEvent:W.e,PopStateEvent:W.e,PresentationConnectionAvailableEvent:W.e,PresentationConnectionCloseEvent:W.e,ProgressEvent:W.e,PromiseRejectionEvent:W.e,PushEvent:W.e,RTCDataChannelEvent:W.e,RTCDTMFToneChangeEvent:W.e,RTCPeerConnectionIceEvent:W.e,RTCTrackEvent:W.e,SecurityPolicyViolationEvent:W.e,SensorErrorEvent:W.e,SpeechRecognitionError:W.e,SpeechRecognitionEvent:W.e,SpeechSynthesisEvent:W.e,StorageEvent:W.e,SyncEvent:W.e,TextEvent:W.e,TouchEvent:W.e,TrackEvent:W.e,TransitionEvent:W.e,WebKitTransitionEvent:W.e,UIEvent:W.e,VRDeviceEvent:W.e,VRDisplayEvent:W.e,VRSessionEvent:W.e,WheelEvent:W.e,MojoInterfaceRequestEvent:W.e,ResourceProgressEvent:W.e,USBConnectionEvent:W.e,IDBVersionChangeEvent:W.e,AudioProcessingEvent:W.e,OfflineAudioCompletionEvent:W.e,WebGLContextEvent:W.e,AccessibleNode:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RemotePlayback:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SourceBuffer:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,TextTrack:W.d,TextTrackCue:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,VTTCue:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,ServiceWorker:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,FileList:W.dQ,FileWriter:W.dR,HTMLFormElement:W.dW,Gyroscope:W.e_,History:W.e0,HTMLCollection:W.aX,HTMLFormControlsCollection:W.aX,HTMLOptionsCollection:W.aX,HTMLDocument:W.bI,XMLHttpRequest:W.e1,XMLHttpRequestUpload:W.aY,XMLHttpRequestEventTarget:W.aY,Location:W.ei,Magnetometer:W.ej,MediaList:W.ep,MIDIOutput:W.er,MIDIInput:W.b0,MIDIPort:W.b0,MimeTypeArray:W.es,DocumentFragment:W.x,ShadowRoot:W.x,Attr:W.x,DocumentType:W.x,Node:W.x,NodeList:W.bW,RadioNodeList:W.bW,Plugin:W.Z,PluginArray:W.eI,PresentationConnection:W.eL,RTCDataChannel:W.c0,DataChannel:W.c0,HTMLSelectElement:W.eV,AbsoluteOrientationSensor:W.a8,AmbientLightSensor:W.a8,OrientationSensor:W.a8,RelativeOrientationSensor:W.a8,Sensor:W.a8,SourceBufferList:W.f0,SpeechGrammarList:W.f2,SpeechRecognitionResult:W.a_,Storage:W.f5,TextTrackCueList:W.fe,TextTrackList:W.ff,TimeRanges:W.fh,TouchList:W.fm,TrackDefaultList:W.fn,URL:W.fv,VRStageBoundsPoint:W.fx,VideoTrackList:W.fy,WebSocket:W.fz,Window:W.ba,DOMWindow:W.ba,CSSRuleList:W.fI,DOMRect:W.fJ,GamepadList:W.fY,NamedNodeMap:W.cr,MozNamedAttrMap:W.cr,SpeechRecognitionResultList:W.hd,StyleSheetList:W.he,SVGFEBlendElement:P.dx,SVGFEColorMatrixElement:P.dy,SVGFEComponentTransferElement:P.dz,SVGFECompositeElement:P.dA,SVGFEConvolveMatrixElement:P.dB,SVGFEDiffuseLightingElement:P.dC,SVGFEDisplacementMapElement:P.dD,SVGFEFloodElement:P.dE,SVGFEGaussianBlurElement:P.dF,SVGFEImageElement:P.dG,SVGFEMergeElement:P.dH,SVGFEMorphologyElement:P.dI,SVGFEOffsetElement:P.dJ,SVGFEPointLightElement:P.dK,SVGFESpecularLightingElement:P.dL,SVGFESpotLightElement:P.dM,SVGFETileElement:P.dN,SVGFETurbulenceElement:P.dO,SVGFilterElement:P.dS,SVGForeignObjectElement:P.dV,SVGCircleElement:P.R,SVGEllipseElement:P.R,SVGLineElement:P.R,SVGPathElement:P.R,SVGPolygonElement:P.R,SVGPolylineElement:P.R,SVGGeometryElement:P.R,SVGAElement:P.X,SVGClipPathElement:P.X,SVGDefsElement:P.X,SVGGElement:P.X,SVGSwitchElement:P.X,SVGGraphicsElement:P.X,SVGImageElement:P.e2,SVGLengthList:P.ed,SVGMaskElement:P.en,SVGNumberList:P.eD,SVGPatternElement:P.eF,SVGPoint:P.eJ,SVGPointList:P.eK,SVGRect:P.eN,SVGRectElement:P.eO,SVGStringList:P.fb,SVGAnimateElement:P.t,SVGAnimateMotionElement:P.t,SVGAnimateTransformElement:P.t,SVGAnimationElement:P.t,SVGDescElement:P.t,SVGDiscardElement:P.t,SVGFEDistantLightElement:P.t,SVGFEFuncAElement:P.t,SVGFEFuncBElement:P.t,SVGFEFuncGElement:P.t,SVGFEFuncRElement:P.t,SVGFEMergeNodeElement:P.t,SVGLinearGradientElement:P.t,SVGMarkerElement:P.t,SVGMetadataElement:P.t,SVGRadialGradientElement:P.t,SVGScriptElement:P.t,SVGSetElement:P.t,SVGStopElement:P.t,SVGStyleElement:P.t,SVGSymbolElement:P.t,SVGTitleElement:P.t,SVGViewElement:P.t,SVGGradientElement:P.t,SVGComponentTransferFunctionElement:P.t,SVGFEDropShadowElement:P.t,SVGMPathElement:P.t,SVGElement:P.t,SVGSVGElement:P.fc,SVGTextPathElement:P.b7,SVGTextContentElement:P.b7,SVGTSpanElement:P.b8,SVGTextElement:P.b8,SVGTextPositioningElement:P.b8,SVGTransformList:P.fo,SVGUseElement:P.fw,AudioBuffer:P.d7,AudioTrackList:P.d8,AudioContext:P.ay,webkitAudioContext:P.ay,BaseAudioContext:P.ay,OfflineAudioContext:P.eE,WebGLRenderingContext:P.eS,WebGL2RenderingContext:P.eT,SQLResultSetRowList:P.f3})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,Blob:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSStyleSheet:true,CSSSupportsRule:true,CSSVariableReferenceValue:true,CSSViewportRule:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,File:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,Gamepad:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechGrammar:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,StyleSheet:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,Touch:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGLength:true,SVGMatrix:true,SVGNumber:true,SVGPreserveAspectRatio:true,SVGTransform:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioParamMap:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,Accelerometer:true,LinearAccelerationSensor:true,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CanvasGradient:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSPositionValue:true,CSSRotation:true,CSSScale:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSSkew:true,CSSTransformComponent:false,CSSTransformValue:true,CSSTranslation:true,CSSUnparsedValue:true,DataTransferItemList:true,DeviceAcceleration:true,XMLDocument:true,Document:false,DOMException:true,DOMPoint:true,DOMPointReadOnly:false,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,Event:true,InputEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,WheelEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,AccessibleNode:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnectionList:true,PresentationRequest:true,RemotePlayback:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SourceBuffer:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,TextTrack:true,TextTrackCue:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,VTTCue:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,ServiceWorker:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,FileList:true,FileWriter:true,HTMLFormElement:true,Gyroscope:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,Location:true,Magnetometer:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeTypeArray:true,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,PresentationConnection:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,AbsoluteOrientationSensor:true,AmbientLightSensor:true,OrientationSensor:true,RelativeOrientationSensor:true,Sensor:false,SourceBufferList:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,TouchList:true,TrackDefaultList:true,URL:true,VRStageBoundsPoint:true,VideoTrackList:true,WebSocket:true,Window:true,DOMWindow:true,CSSRuleList:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGAElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLengthList:true,SVGMaskElement:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGStringList:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMetadataElement:true,SVGRadialGradientElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSymbolElement:true,SVGTitleElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGSVGElement:true,SVGTextPathElement:true,SVGTextContentElement:false,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransformList:true,SVGUseElement:true,AudioBuffer:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.bR.$nativeSuperclassTag="ArrayBufferView"
H.bd.$nativeSuperclassTag="ArrayBufferView"
H.be.$nativeSuperclassTag="ArrayBufferView"
H.bS.$nativeSuperclassTag="ArrayBufferView"
H.bf.$nativeSuperclassTag="ArrayBufferView"
H.bg.$nativeSuperclassTag="ArrayBufferView"
H.bT.$nativeSuperclassTag="ArrayBufferView"
W.bh.$nativeSuperclassTag="EventTarget"
W.bi.$nativeSuperclassTag="EventTarget"
W.bj.$nativeSuperclassTag="EventTarget"
W.bk.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.jM(M.jQ(),b)},[])
else (function(b){H.jM(M.jQ(),b)})([])})})()