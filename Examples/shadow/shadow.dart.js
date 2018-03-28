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
a[c]=function(){a[c]=function(){H.oE(b)}
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
return d?function(e){if(t===null)t=H.jU(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.jU(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.jU(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={js:function js(a){this.a=a},
jz:function(a,b,c,d){if(!!a.$isl)return new H.ej(a,b,[c,d])
return new H.cw(a,b,[c,d])},
eV:function(){return new P.be("No element")},
ni:function(){return new P.be("Too many elements")},
nh:function(){return new P.be("Too few elements")},
nD:function(a,b){H.cL(a,0,J.bq(a)-1,b)},
cL:function(a,b,c,d){if(c-b<=32)H.nC(a,b,c,d)
else H.nB(a,b,c,d)},
nC:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.a1(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.ae(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.j(a,q,s.h(a,p))
q=p}s.j(a,q,r)}},
nB:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.b(t>32)
s=C.b.M(t+1,6)
r=a3+s
q=a4-s
p=C.b.M(a3+a4,2)
o=p-s
n=p+s
t=J.a1(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.ae(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.ae(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.ae(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.ae(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.ae(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.ae(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.ae(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.ae(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.ae(a5.$2(j,i),0)){h=i
i=j
j=h}t.j(a2,r,m)
t.j(a2,p,k)
t.j(a2,q,i)
t.j(a2,o,t.h(a2,a3))
t.j(a2,n,t.h(a2,a4))
g=a3+1
f=a4-1
if(J.G(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=t.h(a2,e)
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
H.cL(a2,a3,g-2,a5)
H.cL(a2,f+2,a4,a5)
if(a0)return
if(g<r&&f>q){for(;J.G(a5.$2(t.h(a2,g),l),0);)++g
for(;J.G(a5.$2(t.h(a2,f),j),0);)--f
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
break}}H.cL(a2,g,f,a5)}else H.cL(a2,g,f,a5)},
l:function l(){},
b9:function b9(){},
cu:function cu(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cw:function cw(a,b,c){this.a=a
this.b=b
this.$ti=c},
ej:function ej(a,b,c){this.a=a
this.b=b
this.$ti=c},
f8:function f8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
by:function by(a,b,c){this.a=a
this.b=b
this.$ti=c},
cX:function cX(a,b,c){this.a=a
this.b=b
this.$ti=c},
hD:function hD(a,b,c){this.a=a
this.b=b
this.$ti=c},
b6:function b6(){},
dJ:function(a,b){var t=a.au(b)
if(!u.globalState.d.cy)u.globalState.f.aB()
return t},
iF:function(){++u.globalState.f.b},
iV:function(){--u.globalState.f.b
H.b(u.globalState.f.b>=0)},
lY:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.u(s).$isj)throw H.c(P.kj("Arguments to main must be a List: "+H.e(s)))
u.globalState=new H.ic(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$kL()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.hR(P.jy(null,H.aX),0)
q=P.x
s.sf5(new H.ag(0,null,null,null,null,null,0,[q,H.bh]))
s.sf8(new H.ag(0,null,null,null,null,null,0,[q,null]))
if(s.x){r=new H.ib()
s.Q=r
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.nc,r)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.nW)}if(u.globalState.x)return
o=H.lo()
u.globalState.e=o
u.globalState.z.j(0,o.a,o)
u.globalState.d=o
if(H.bm(a,{func:1,args:[P.P]}))o.au(new H.j6(t,a))
else if(H.bm(a,{func:1,args:[P.P,P.P]}))o.au(new H.j7(t,a))
else o.au(a)
u.globalState.f.aB()},
nW:function(a){var t=P.at(["command","print","msg",a])
return new H.ab(!0,P.bi(null,P.x)).R(t)},
lo:function(){var t,s
t=u.globalState.a++
s=P.x
t=new H.bh(t,new H.ag(0,null,null,null,null,null,0,[s,H.cJ]),P.aM(null,null,null,s),u.createNewIsolate(),new H.cJ(0,null,!1),new H.aC(H.lR()),new H.aC(H.lR()),!1,!1,[],P.aM(null,null,null,null),null,null,!1,!0,P.aM(null,null,null,null))
t.dW()
return t},
ne:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.nf()
return},
nf:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.c(P.t("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.c(P.t('Cannot extract URI from "'+t+'"'))},
nc:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=new H.aW(!0,[]).a7(b.data)
s=J.a1(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.on(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.aW(!0,[]).a7(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.aW(!0,[]).a7(s.h(t,"replyTo"))
k=H.lo()
u.globalState.f.a.a3(0,new H.aX(k,new H.eS(q,p,o,n,m,l),"worker-start"))
u.globalState.d=k
u.globalState.f.aB()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.mz(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.aB()
break
case"close":u.globalState.ch.aA(0,$.$get$kM().h(0,a))
a.terminate()
u.globalState.f.aB()
break
case"log":H.nb(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
j=P.at(["command","print","msg",t])
j=new H.ab(!0,P.bi(null,P.x)).R(j)
s.toString
self.postMessage(j)}else P.Q(s.h(t,"msg"))
break
case"error":throw H.c(s.h(t,"msg"))}},
nb:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.at(["command","log","msg",a])
r=new H.ab(!0,P.bi(null,P.x)).R(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.R(q)
t=H.az(q)
s=P.ch(t)
throw H.c(s)}},
nd:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.kW=$.kW+("_"+s)
$.kX=$.kX+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.O(0,["spawned",new H.bj(s,r),q,t.r])
r=new H.eT(t,d,a,c,b)
if(e){t.c8(q,q)
u.globalState.f.a.a3(0,new H.aX(t,r,"start isolate"))}else r.$0()},
nF:function(a,b){var t=new H.hk(!0,!1,null,0)
t.dN(a,b)
return t},
nX:function(a){return new H.aW(!0,[]).a7(new H.ab(!1,P.bi(null,P.x)).R(a))},
j6:function j6(a,b){this.a=a
this.b=b},
j7:function j7(a,b){this.a=a
this.b=b},
ic:function ic(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
bh:function bh(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
i6:function i6(a,b){this.a=a
this.b=b},
hR:function hR(a,b){this.a=a
this.b=b},
hS:function hS(a){this.a=a},
aX:function aX(a,b,c){this.a=a
this.b=b
this.c=c},
ib:function ib(){},
eS:function eS(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eT:function eT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hL:function hL(){},
bj:function bj(a,b){this.b=a
this.a=b},
id:function id(a,b){this.a=a
this.b=b},
bX:function bX(a,b,c){this.b=a
this.c=b
this.a=c},
cJ:function cJ(a,b,c){this.a=a
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
aC:function aC(a){this.a=a},
ab:function ab(a,b){this.a=a
this.b=b},
aW:function aW(a,b){this.a=a
this.b=b},
oh:function(a){return u.types[a]},
op:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.u(a).$isv},
e:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.br(a)
if(typeof t!=="string")throw H.c(H.O(a))
return t},
ny:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t=J.as(t)
s=t[0]
r=t[1]
return new H.fM(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aO:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
kU:function(a,b){throw H.c(new P.eK("Invalid double",a,null))},
nv:function(a,b){var t,s
if(typeof a!=="string")H.L(H.O(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return H.kU(a,b)
t=parseFloat(a)
if(isNaN(t)){s=J.mG(a)
if(s==="NaN"||s==="+NaN"||s==="-NaN")return t
return H.kU(a,b)}return t},
bC:function(a){var t,s,r,q,p,o,n,m,l
t=J.u(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.L||!!J.u(a).$isaU){p=C.z(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.h.ao(q,0)===36)q=C.h.dn(q,1)
l=H.dL(H.iJ(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+l,u.mangledGlobalNames)},
S:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nu:function(a){return a.b?H.S(a).getUTCFullYear()+0:H.S(a).getFullYear()+0},
ns:function(a){return a.b?H.S(a).getUTCMonth()+1:H.S(a).getMonth()+1},
no:function(a){return a.b?H.S(a).getUTCDate()+0:H.S(a).getDate()+0},
np:function(a){return a.b?H.S(a).getUTCHours()+0:H.S(a).getHours()+0},
nr:function(a){return a.b?H.S(a).getUTCMinutes()+0:H.S(a).getMinutes()+0},
nt:function(a){return a.b?H.S(a).getUTCSeconds()+0:H.S(a).getSeconds()+0},
nq:function(a){return a.b?H.S(a).getUTCMilliseconds()+0:H.S(a).getMilliseconds()+0},
kV:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.c(H.O(a))
return a[b]},
ay:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a5(!0,b,"index",null)
t=J.bq(a)
if(b<0||C.b.bs(b,t))return P.D(b,a,"index",null,t)
return P.fJ(b,"index",null)},
O:function(a){return new P.a5(!0,a,null,null)},
lA:function(a){if(typeof a!=="number")throw H.c(H.O(a))
return a},
c:function(a){var t
if(a==null)a=new P.cG()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.m_})
t.name=""}else t.toString=H.m_
return t},
m_:function(){return J.br(this.dartException)},
L:function(a){throw H.c(a)},
A:function(a){throw H.c(P.aq(a))},
ak:function(a){var t,s,r,q,p,o
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
l9:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
kT:function(a,b){return new H.ft(a,b==null?null:b.method)},
ju:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.eZ(a,s,t?null:b.receiver)},
R:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.j8(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.bg(r,16)&8191)===10)switch(q){case 438:return t.$1(H.ju(H.e(s)+" (Error "+q+")",null))
case 445:case 5007:return t.$1(H.kT(H.e(s)+" (Error "+q+")",null))}}if(a instanceof TypeError){p=$.$get$l3()
o=$.$get$l4()
n=$.$get$l5()
m=$.$get$l6()
l=$.$get$la()
k=$.$get$lb()
j=$.$get$l8()
$.$get$l7()
i=$.$get$ld()
h=$.$get$lc()
g=p.W(s)
if(g!=null)return t.$1(H.ju(s,g))
else{g=o.W(s)
if(g!=null){g.method="call"
return t.$1(H.ju(s,g))}else{g=n.W(s)
if(g==null){g=m.W(s)
if(g==null){g=l.W(s)
if(g==null){g=k.W(s)
if(g==null){g=j.W(s)
if(g==null){g=m.W(s)
if(g==null){g=i.W(s)
if(g==null){g=h.W(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return t.$1(H.kT(s,g))}}return t.$1(new H.hv(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.cO()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.a5(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.cO()
return a},
az:function(a){var t
if(a==null)return new H.dn(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dn(a,null)},
ov:function(a){if(a==null||typeof a!='object')return J.bp(a)
else return H.aO(a)},
of:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=a.length
for(r=0;r<s;){q=r+1
H.b(t)
p=a[r]
r=q+1
H.b(t)
b.j(0,p,a[q])}return b},
oo:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dJ(b,new H.iQ(a))
case 1:return H.dJ(b,new H.iR(a,d))
case 2:return H.dJ(b,new H.iS(a,d,e))
case 3:return H.dJ(b,new H.iT(a,d,e,f))
case 4:return H.dJ(b,new H.iU(a,d,e,f,g))}throw H.c(P.ch("Unsupported number of arguments for wrapped closure"))},
c0:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.oo)
a.$identity=t
return t},
mT:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.u(c).$isj){t.$reflectionInfo=c
r=H.ny(t).r}else r=c
q=d?Object.create(new H.h2().constructor.prototype):Object.create(new H.bs(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.kq(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.oh,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.kn:H.jl
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.c("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.kq(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
mQ:function(a,b,c,d){var t=H.jl
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
kq:function(a,b,c){var t,s,r,q
if(c)return H.mS(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.mQ(s,b==null?r!=null:b!==r,t,b)
return q},
mR:function(a,b,c,d){var t,s
t=H.jl
s=H.kn
switch(b?-1:a){case 0:throw H.c(H.nz("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
mS:function(a,b){var t,s,r,q
t=$.ko
if(t==null){t=H.kl("self")
$.ko=t}t=$.km
if(t==null){t=H.kl("receiver")
$.km=t}s=b.$stubName
r=b.length
q=a[s]
t=H.mR(r,b==null?q!=null:b!==q,s,b)
return t},
jU:function(a,b,c,d,e,f){var t,s
t=J.as(b)
s=!!J.u(c).$isj?J.as(c):c
return H.mT(a,t,s,!!d,e,f)},
jl:function(a){return a.a},
kn:function(a){return a.c},
kl:function(a){var t,s,r,q,p
t=new H.bs("self","target","receiver","name")
s=J.as(Object.getOwnPropertyNames(t))
for(r=s.length,q=0;q<r;++q){p=s[q]
if(t[p]===a)return p}},
oT:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.al(a,"String"))},
oO:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.al(a,"double"))},
oS:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.al(a,"num"))},
o9:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.al(a,"bool"))},
on:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.al(a,"int"))},
ox:function(a,b){throw H.c(H.al(a,b.substring(3)))},
ow:function(a,b){var t=J.a1(b)
throw H.c(H.kp(a,t.aZ(b,3,t.gl(b))))},
jY:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.u(a)[b])return a
H.ox(a,b)},
F:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.u(a)[b]
else t=!0
if(t)return a
H.ow(a,b)},
oR:function(a){if(a==null)return a
if(!!J.u(a).$isj)return a
throw H.c(H.al(a,"List"))},
jV:function(a){var t=J.u(a)
return"$S" in t?t.$S():null},
bm:function(a,b){var t,s
if(a==null)return!1
t=H.jV(a)
if(t==null)s=!1
else s=H.lH(t,b)
return s},
oP:function(a,b){var t,s
if(a==null)return a
if($.jP)return a
$.jP=!0
try{if(H.bm(a,b))return a
t=H.j0(b,null)
s=H.al(a,t)
throw H.c(s)}finally{$.jP=!1}},
al:function(a,b){return new H.hs("TypeError: "+H.e(P.cg(a))+": type '"+H.lu(a)+"' is not a subtype of type '"+b+"'")},
kp:function(a,b){return new H.dY("CastError: "+H.e(P.cg(a))+": type '"+H.lu(a)+"' is not a subtype of type '"+b+"'")},
lu:function(a){var t
if(a instanceof H.aE){t=H.jV(a)
if(t!=null)return H.j0(t,null)
return"Closure"}return H.bC(a)},
W:function(a){if(!0===a)return!1
if(!!J.u(a).$isjp)a=a.$0()
if(typeof a==="boolean")return!a
throw H.c(H.al(a,"bool"))},
a_:function(a){throw H.c(new H.hF(a))},
b:function(a){if(H.W(a))throw H.c(P.mP(null))},
oE:function(a){throw H.c(new P.e8(a))},
nz:function(a){return new H.fS(a)},
lR:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
lF:function(a){return u.getIsolateTag(a)},
N:function(a){return new H.av(a,null)},
C:function(a,b){H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
iJ:function(a){if(a==null)return
return a.$ti},
lG:function(a,b){return H.k2(a["$as"+H.e(b)],H.iJ(a))},
ac:function(a,b,c){var t,s
t=H.lG(a,b)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
a3:function(a,b){var t,s
t=H.iJ(a)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
j0:function(a,b){var t=H.bn(a,b)
return t},
bn:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.b(!0)
H.b(!0)
return a[0].name+H.dL(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.e(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.bn(t,b)
return H.nZ(a,b)}return"unknown-reified-type"},
nZ:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.bn(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.bn(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.bn(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.oe(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.bn(l[j],b)+(" "+H.e(j))}q+="}"}return"("+q+") => "+t},
dL:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=new P.bE("")
for(r=b,q=!0,p=!0;H.b(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.b(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.bn(o,c)}return p?"":"<"+s.k(0)+">"},
iK:function(a){var t,s,r
if(a instanceof H.aE){t=H.jV(a)
if(t!=null)return H.j0(t,null)}s=J.u(a).constructor.name
if(a==null)return s
r=H.dL(a.$ti,0,null)
return s+r},
k2:function(a,b){if(a==null)return b
H.b(typeof a=="function")
H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.jZ(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.jZ(a,null,b)
return b},
iA:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.iJ(a)
s=J.u(a)
if(s[b]==null)return!1
return H.ly(H.k2(s[d],t),c)},
dN:function(a,b,c,d){var t,s
if(a==null)return a
t=H.iA(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.dL(c,0,null)
throw H.c(H.kp(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
oL:function(a,b,c,d){var t,s
if(a==null)return a
t=H.iA(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.dL(c,0,null)
throw H.c(H.al(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
ly:function(a,b){var t,s,r,q,p
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
if(!H.a2(r,b[p]))return!1}return!0},
oM:function(a,b,c){return H.jZ(a,b,H.lG(b,c))},
a2:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.name==="P")return!0
if('func' in b)return H.lH(a,b)
if('func' in a)return b.name==="jp"||b.name==="H"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.b(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.b(!0)
q=b[0]}else q=b
if(q!==s){p=H.j0(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.ly(H.k2(o,t),r)},
lx:function(a,b,c){var t,s,r,q,p,o,n
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
if(!(H.a2(o,n)||H.a2(n,o)))return!1}return!0},
o5:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
H.b(typeof a=='object')
H.b(typeof b=='object')
t=J.as(Object.getOwnPropertyNames(b))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.a2(p,o)||H.a2(o,p)))return!1}return!0},
lH:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.b('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.a2(t,s)||H.a2(s,t)))return!1}r=a.args
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
if(n===m){if(!H.lx(r,q,!1))return!1
if(!H.lx(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.b(j)
g=r[h]
H.b(i)
f=q[h]
if(!(H.a2(g,f)||H.a2(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=q[e]
if(!(H.a2(g,f)||H.a2(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=o[e]
if(!(H.a2(g,f)||H.a2(f,g)))return!1}}return H.o5(a.named,b.named)},
jZ:function(a,b,c){H.b(typeof a=="function")
H.b(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
oU:function(a){var t=$.jW
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
oQ:function(a){return H.aO(a)},
oN:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
os:function(a){var t,s,r,q,p,o
H.b(!(a instanceof P.H))
t=$.jW.$1(a)
s=$.iE[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iP[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.lw.$2(a,t)
if(t!=null){s=$.iE[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iP[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.j_(r)
$.iE[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.iP[t]=r
return r}if(p==="-"){o=H.j_(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.lO(a,r)
if(p==="*")throw H.c(P.li(t))
if(u.leafTags[t]===true){o=H.j_(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.lO(a,r)},
lO:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.k_(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
j_:function(a){return J.k_(a,!1,null,!!a.$isv)},
ou:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return H.j_(t)
else return J.k_(t,c,null,null)},
ol:function(){if(!0===$.jX)return
$.jX=!0
H.om()},
om:function(){var t,s,r,q,p,o,n,m
$.iE=Object.create(null)
$.iP=Object.create(null)
H.ok()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.lQ.$1(p)
if(o!=null){n=H.ou(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
ok:function(){var t,s,r,q,p,o,n
t=C.P()
t=H.bl(C.M,H.bl(C.R,H.bl(C.y,H.bl(C.y,H.bl(C.Q,H.bl(C.N,H.bl(C.O(C.z),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.jW=new H.iM(p)
$.lw=new H.iN(o)
$.lQ=new H.iO(n)},
bl:function(a,b){return a(b)||b},
oD:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
fM:function fM(a,b,c,d,e,f,g,h){var _=this
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
eZ:function eZ(a,b,c){this.a=a
this.b=b
this.c=c},
hv:function hv(a){this.a=a},
j8:function j8(a){this.a=a},
dn:function dn(a,b){this.a=a
this.b=b},
iQ:function iQ(a){this.a=a},
iR:function iR(a,b){this.a=a
this.b=b},
iS:function iS(a,b,c){this.a=a
this.b=b
this.c=c},
iT:function iT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iU:function iU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
aE:function aE(){},
hf:function hf(){},
h2:function h2(){},
bs:function bs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hs:function hs(a){this.a=a},
dY:function dY(a){this.a=a},
fS:function fS(a){this.a=a},
hF:function hF(a){this.a=a},
av:function av(a,b){this.a=a
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
eY:function eY(a){this.a=a},
f1:function f1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f2:function f2(a,b){this.a=a
this.$ti=b},
f3:function f3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
iM:function iM(a){this.a=a},
iN:function iN(a){this.a=a},
iO:function iO(a){this.a=a},
iw:function(a){var t,s,r
if(!!J.u(a).$isq)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
an:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.ay(b,a))},
bA:function bA(){},
bc:function bc(){},
fj:function fj(){},
cz:function cz(){},
cA:function cA(){},
cB:function cB(){},
cy:function cy(){},
fk:function fk(){},
fl:function fl(){},
fm:function fm(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){},
cC:function cC(){},
fq:function fq(){},
bO:function bO(){},
bP:function bP(){},
bQ:function bQ(){},
bR:function bR(){},
oe:function(a){return J.as(H.C(a?Object.keys(a):[],[null]))},
dM:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
u:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cs.prototype
return J.cr.prototype}if(typeof a=="string")return J.aJ.prototype
if(a==null)return J.eX.prototype
if(typeof a=="boolean")return J.eW.prototype
if(a.constructor==Array)return J.aI.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aK.prototype
return a}if(a instanceof P.H)return a
return J.iI(a)},
k_:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iI:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.jX==null){H.ol()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.c(P.li("Return interceptor for "+H.e(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$jt()]
if(p!=null)return p
p=H.os(a)
if(p!=null)return p
if(typeof a=="function")return C.S
s=Object.getPrototypeOf(a)
if(s==null)return C.B
if(s===Object.prototype)return C.B
if(typeof q=="function"){Object.defineProperty(q,$.$get$jt(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
as:function(a){a.fixed$length=Array
return a},
kO:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
nj:function(a,b){var t,s
for(t=a.length;b<t;){s=C.h.ao(a,b)
if(s!==32&&s!==13&&!J.kO(s))break;++b}return b},
nk:function(a,b){var t,s
for(;b>0;b=t){t=b-1
s=C.h.cl(a,t)
if(s!==32&&s!==13&&!J.kO(s))break}return b},
a1:function(a){if(typeof a=="string")return J.aJ.prototype
if(a==null)return a
if(a.constructor==Array)return J.aI.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aK.prototype
return a}if(a instanceof P.H)return a
return J.iI(a)},
c2:function(a){if(a==null)return a
if(a.constructor==Array)return J.aI.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aK.prototype
return a}if(a instanceof P.H)return a
return J.iI(a)},
lE:function(a){if(typeof a=="number")return J.b8.prototype
if(a==null)return a
if(!(a instanceof P.H))return J.aU.prototype
return a},
og:function(a){if(typeof a=="number")return J.b8.prototype
if(typeof a=="string")return J.aJ.prototype
if(a==null)return a
if(!(a instanceof P.H))return J.aU.prototype
return a},
iH:function(a){if(typeof a=="string")return J.aJ.prototype
if(a==null)return a
if(!(a instanceof P.H))return J.aU.prototype
return a},
i:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aK.prototype
return a}if(a instanceof P.H)return a
return J.iI(a)},
G:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.u(a).E(a,b)},
ae:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.lE(a).a2(a,b)},
m2:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.lE(a).a9(a,b)},
bo:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.op(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.a1(a).h(a,b)},
m3:function(a,b,c,d){return J.i(a).e_(a,b,c,d)},
k3:function(a,b){return J.iH(a).ao(a,b)},
k4:function(a,b,c,d){return J.i(a).ea(a,b,c,d)},
j9:function(a,b){return J.i(a).eg(a,b)},
m4:function(a,b,c){return J.i(a).eh(a,b,c)},
k5:function(a,b){return J.i(a).c7(a,b)},
ja:function(a,b){return J.i(a).a_(a,b)},
k6:function(a,b,c){return J.i(a).ca(a,b,c)},
m5:function(a,b){return J.i(a).ew(a,b)},
jb:function(a,b,c){return J.i(a).cb(a,b,c)},
jc:function(a,b,c){return J.i(a).cc(a,b,c)},
aA:function(a,b,c){return J.i(a).cd(a,b,c)},
dO:function(a,b){return J.i(a).ez(a,b)},
m6:function(a,b){return J.i(a).ce(a,b)},
m7:function(a,b,c){return J.i(a).cf(a,b,c)},
k7:function(a,b,c,d){return J.i(a).cg(a,b,c,d)},
m8:function(a,b){return J.i(a).ci(a,b)},
m9:function(a,b){return J.c2(a).cj(a,b)},
ma:function(a,b,c,d,e){return J.i(a).ck(a,b,c,d,e)},
mb:function(a,b){return J.og(a).a0(a,b)},
jd:function(a,b,c){return J.a1(a).eE(a,b,c)},
je:function(a){return J.i(a).cn(a)},
mc:function(a){return J.i(a).co(a)},
md:function(a){return J.i(a).cp(a)},
me:function(a){return J.i(a).cr(a)},
mf:function(a){return J.i(a).eK(a)},
mg:function(a,b){return J.i(a).ct(a,b)},
jf:function(a,b){return J.i(a).cu(a,b)},
mh:function(a,b,c,d){return J.i(a).cw(a,b,c,d)},
mi:function(a,b,c,d,e){return J.i(a).eR(a,b,c,d,e)},
mj:function(a,b,c,d,e){return J.i(a).cz(a,b,c,d,e)},
mk:function(a,b,c,d,e,f){return J.i(a).eS(a,b,c,d,e,f)},
ml:function(a,b){return J.c2(a).w(a,b)},
dP:function(a,b){return J.i(a).cA(a,b)},
mm:function(a,b){return J.i(a).cB(a,b)},
mn:function(a){return J.i(a).eT(a)},
k8:function(a,b){return J.c2(a).av(a,b)},
k9:function(a,b,c,d,e,f){return J.i(a).cE(a,b,c,d,e,f)},
mo:function(a){return J.i(a).gev(a)},
bp:function(a){return J.u(a).gB(a)},
aZ:function(a){return J.c2(a).gA(a)},
bq:function(a){return J.a1(a).gl(a)},
mp:function(a){return J.i(a).gbo(a)},
mq:function(a){return J.u(a).gF(a)},
mr:function(a){return J.i(a).gfi(a)},
ka:function(a){return J.i(a).gcM(a)},
ms:function(a){return J.i(a).gaD(a)},
jg:function(a){return J.i(a).gm(a)},
jh:function(a){return J.i(a).gn(a)},
kb:function(a){return J.i(a).gD(a)},
ji:function(a,b){return J.i(a).ak(a,b)},
mt:function(a){return J.i(a).aW(a)},
mu:function(a){return J.i(a).bu(a)},
mv:function(a,b){return J.i(a).bv(a,b)},
mw:function(a,b,c){return J.i(a).bw(a,b,c)},
kc:function(a,b,c){return J.i(a).bz(a,b,c)},
mx:function(a,b){return J.i(a).cG(a,b)},
my:function(a,b){return J.c2(a).cI(a,b)},
kd:function(a){return J.c2(a).fc(a)},
mz:function(a,b){return J.i(a).O(a,b)},
mA:function(a,b){return J.iH(a).aE(a,b)},
mB:function(a,b,c,d){return J.i(a).bF(a,b,c,d)},
mC:function(a,b,c,d){return J.i(a).cN(a,b,c,d)},
a4:function(a,b,c,d){return J.i(a).cO(a,b,c,d)},
mD:function(a,b,c,d,e,f){return J.i(a).fj(a,b,c,d,e,f)},
mE:function(a){return J.iH(a).fm(a)},
br:function(a){return J.u(a).k(a)},
mF:function(a,b,c,d){return J.i(a).fo(a,b,c,d)},
mG:function(a){return J.iH(a).fp(a)},
mH:function(a,b,c){return J.i(a).cS(a,b,c)},
mI:function(a,b,c){return J.i(a).cT(a,b,c)},
jj:function(a,b,c){return J.i(a).cU(a,b,c)},
mJ:function(a,b,c){return J.i(a).cV(a,b,c)},
ke:function(a,b,c){return J.i(a).cW(a,b,c)},
kf:function(a,b,c){return J.i(a).cX(a,b,c)},
kg:function(a,b,c){return J.i(a).cY(a,b,c)},
kh:function(a,b,c,d){return J.i(a).cZ(a,b,c,d)},
ki:function(a,b,c,d){return J.i(a).d_(a,b,c,d)},
mK:function(a,b){return J.i(a).d1(a,b)},
mL:function(a,b,c){return J.i(a).fq(a,b,c)},
mM:function(a,b,c,d,e,f,g){return J.i(a).d2(a,b,c,d,e,f,g)},
mN:function(a,b,c,d,e){return J.i(a).d4(a,b,c,d,e)},
a:function a(){},
eW:function eW(){},
eX:function eX(){},
bx:function bx(){},
fD:function fD(){},
aU:function aU(){},
aK:function aK(){},
aI:function aI(a){this.$ti=a},
jr:function jr(a){this.$ti=a},
dT:function dT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b8:function b8(){},
cs:function cs(){},
cr:function cr(){},
aJ:function aJ(){}},P={
nM:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.o6()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.c0(new P.hH(t),1)).observe(s,{childList:true})
return new P.hG(t,s,r)}else if(self.setImmediate!=null)return P.o7()
return P.o8()},
nN:function(a){H.iF()
self.scheduleImmediate(H.c0(new P.hI(a),0))},
nO:function(a){H.iF()
self.setImmediate(H.c0(new P.hJ(a),0))},
nP:function(a){P.jG(C.x,a)},
jG:function(a,b){var t=C.b.M(a.a,1000)
return H.nF(t<0?0:t,b)},
o1:function(a,b){if(H.bm(a,{func:1,args:[P.P,P.P]})){b.toString
return a}else{b.toString
return a}},
nS:function(a,b){var t,s,r
H.b(b.a<4)
H.b(!(a instanceof P.am))
H.b(b.a===0)
b.a=1
try{a.cQ(new P.hX(b),new P.hY(b))}catch(r){t=H.R(r)
s=H.az(r)
P.oy(new P.hZ(b,t,s))}},
ll:function(a,b){var t,s,r
H.b(b.a<=1)
for(;t=a.a,s=t===2,s;){H.b(s)
a=a.c}if(t>=4){r=b.be()
b.b4(a)
P.bK(b,r)}else{r=b.c
H.b(b.a<=1)
b.a=2
b.c=a
a.c1(r)}},
bK:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.ix(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bK(t.a,b)}s=t.a
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
P.ix(null,null,p,o,s)
return}s=$.E
if(s==null?l!=null:s!==l){H.b(l!=null)
s=$.E
H.b(l==null?s!=null:l!==s)
j=$.E
$.E=l
i=j}else i=null
s=b.c
if(s===8)new P.i2(t,r,b,q).$0()
else if(p){if((s&1)!==0)new P.i1(r,b,m).$0()}else if((s&2)!==0)new P.i0(t,r,b).$0()
if(i!=null){H.b(!0)
$.E=i}s=r.b
if(!!J.u(s).$iseL){if(s.a>=4){H.b(o.a<4)
h=o.c
o.c=null
b=o.aP(h)
H.b(o.a<4)
H.b(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.ll(s,o)
return}}g=b.b
H.b(g.a<4)
h=g.c
g.c=null
b=g.aP(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.b(!o)
g.a=4
g.c=p}else{H.b(!o)
g.a=8
g.c=p}t.a=g
s=g}},
o0:function(){var t,s
for(;t=$.bk,t!=null;){$.bZ=null
s=t.b
$.bk=s
if(s==null)$.bY=null
t.a.$0()}},
o4:function(){$.jQ=!0
try{P.o0()}finally{$.bZ=null
$.jQ=!1
if($.bk!=null)$.$get$jM().$1(P.lz())}},
lt:function(a){var t=new P.cY(a,null)
if($.bk==null){$.bY=t
$.bk=t
if(!$.jQ)$.$get$jM().$1(P.lz())}else{$.bY.b=t
$.bY=t}},
o3:function(a){var t,s,r
t=$.bk
if(t==null){P.lt(a)
$.bZ=$.bY
return}s=new P.cY(a,null)
r=$.bZ
if(r==null){s.b=t
$.bZ=s
$.bk=s}else{s.b=r.b
r.b=s
$.bZ=s
if(s.b==null)$.bY=s}},
oy:function(a){var t=$.E
if(C.f===t){P.iz(null,null,C.f,a)
return}t.toString
P.iz(null,null,t,t.bj(a))},
nG:function(a,b){var t=$.E
if(t===C.f){t.toString
return P.jG(a,b)}return P.jG(a,t.bj(b))},
jL:function(a){var t,s
H.b(a!=null)
t=$.E
H.b(a==null?t!=null:a!==t)
s=$.E
$.E=a
return s},
ix:function(a,b,c,d,e){var t={}
t.a=d
P.o3(new P.iy(t,e))},
lr:function(a,b,c,d){var t,s
if($.E===c)return d.$0()
t=P.jL(c)
try{s=d.$0()
return s}finally{s=t
H.b(s!=null)
$.E=s}},
ls:function(a,b,c,d,e){var t,s
if($.E===c)return d.$1(e)
t=P.jL(c)
try{s=d.$1(e)
return s}finally{s=t
H.b(s!=null)
$.E=s}},
o2:function(a,b,c,d,e,f){var t,s
if($.E===c)return d.$2(e,f)
t=P.jL(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.b(s!=null)
$.E=s}},
iz:function(a,b,c,d){var t=C.f!==c
if(t)d=!(!t||!1)?c.bj(d):c.ex(d)
P.lt(d)},
hH:function hH(a){this.a=a},
hG:function hG(a,b,c){this.a=a
this.b=b
this.c=c},
hI:function hI(a){this.a=a},
hJ:function hJ(a){this.a=a},
jm:function jm(){},
hM:function hM(){},
ir:function ir(a,b){this.a=a
this.$ti=b},
d5:function d5(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
am:function am(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hW:function hW(a,b){this.a=a
this.b=b},
i_:function i_(a,b){this.a=a
this.b=b},
hX:function hX(a){this.a=a},
hY:function hY(a){this.a=a},
hZ:function hZ(a,b,c){this.a=a
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
cY:function cY(a,b){this.a=a
this.b=b},
h7:function h7(){},
h9:function h9(a){this.a=a},
ha:function ha(a,b){this.a=a
this.b=b},
h8:function h8(){},
jF:function jF(){},
b_:function b_(a,b){this.a=a
this.b=b},
iv:function iv(){},
iy:function iy(a,b){this.a=a
this.b=b},
ig:function ig(){},
ii:function ii(a,b){this.a=a
this.b=b},
ih:function ih(a,b){this.a=a
this.b=b},
ij:function ij(a,b){this.a=a
this.b=b},
kP:function(a,b){return new H.ag(0,null,null,null,null,null,0,[a,b])},
K:function(){return new H.ag(0,null,null,null,null,null,0,[null,null])},
at:function(a){return H.of(a,new H.ag(0,null,null,null,null,null,0,[null,null]))},
bi:function(a,b){return new P.i9(0,null,null,null,null,null,0,[a,b])},
aM:function(a,b,c,d){return new P.i7(0,null,null,null,null,null,0,[d])},
jO:function(){var t=Object.create(null)
H.b(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
ng:function(a,b,c){var t,s
if(P.jR(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$c_()
C.a.i(s,a)
try{P.o_(a,t)}finally{H.b(C.a.gaT(s)===a)
s.pop()}s=P.l_(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eU:function(a,b,c){var t,s,r
if(P.jR(a))return b+"..."+c
t=new P.bE(b)
s=$.$get$c_()
C.a.i(s,a)
try{r=t
r.a=P.l_(r.gaf(),a,", ")}finally{H.b(C.a.gaT(s)===a)
s.pop()}s=t
s.a=s.gaf()+c
s=t.gaf()
return s.charCodeAt(0)==0?s:s},
jR:function(a){var t,s
for(t=0;s=$.$get$c_(),t<s.length;++t)if(a===s[t])return!0
return!1},
o_:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gA(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.q())return
q=H.e(t.gt(t))
C.a.i(b,q)
s+=q.length+2;++r}if(!t.q()){if(r<=5)return
p=b.pop()
o=b.pop()}else{n=t.gt(t);++r
if(!t.q()){if(r<=4){C.a.i(b,H.e(n))
return}p=H.e(n)
o=b.pop()
s+=p.length+2}else{m=t.gt(t);++r
H.b(r<100)
for(;t.q();n=m,m=l){l=t.gt(t);++r
if(r>100){while(!0){if(!(s>75&&r>3))break
s-=b.pop().length+2;--r}C.a.i(b,"...")
return}}o=H.e(n)
p=H.e(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)C.a.i(b,k)
C.a.i(b,o)
C.a.i(b,p)},
jx:function(a,b){var t,s
t=P.aM(null,null,null,b)
for(s=J.aZ(a);s.q();)t.i(0,s.gt(s))
return t},
kR:function(a){var t,s,r
t={}
if(P.jR(a))return"{...}"
s=new P.bE("")
try{C.a.i($.$get$c_(),a)
r=s
r.a=r.gaf()+"{"
t.a=!0
J.k8(a,new P.f7(t,s))
t=s
t.a=t.gaf()+"}"}finally{t=$.$get$c_()
H.b(C.a.gaT(t)===a)
t.pop()}t=s.gaf()
return t.charCodeAt(0)==0?t:t},
jy:function(a,b){var t=new P.f4(null,0,0,0,[b])
t.dH(a,b)
return t},
i9:function i9(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
i7:function i7(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
i8:function i8(a,b,c){this.a=a
this.b=b
this.c=c},
bM:function bM(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
i5:function i5(){},
jw:function jw(){},
ct:function ct(){},
m:function m(){},
cv:function cv(){},
f7:function f7(a,b){this.a=a
this.b=b},
bb:function bb(){},
f4:function f4(a,b,c,d,e){var _=this
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
fV:function fV(){},
fU:function fU(){},
bN:function bN(){},
n1:function(a){var t=J.u(a)
if(!!t.$isaE)return t.k(a)
return"Instance of '"+H.bC(a)+"'"},
kQ:function(a,b,c){var t,s
t=H.C([],[c])
for(s=J.aZ(a);s.q();)C.a.i(t,s.gt(s))
if(b)return t
return J.as(t)},
l_:function(a,b,c){var t=J.aZ(b)
if(!t.q())return a
if(c.length===0){do a+=H.e(t.gt(t))
while(t.q())}else{a+=H.e(t.gt(t))
for(;t.q();)a=a+c+H.e(t.gt(t))}return a},
mU:function(a,b){return J.mb(a,b)},
mX:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+t
if(t>=10)return s+"00"+t
return s+"000"+t},
mY:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c9:function(a){if(a>=10)return""+a
return"0"+a},
kE:function(a,b,c,d,e,f){return new P.aG(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
cg:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.br(a)
if(typeof a==="string")return JSON.stringify(a)
return P.n1(a)},
mP:function(a){return new P.c6(a)},
kj:function(a){return new P.a5(!1,null,null,a)},
jk:function(a,b,c){return new P.a5(!0,a,b,c)},
mO:function(a){return new P.a5(!1,null,a,"Must not be null")},
fJ:function(a,b,c){return new P.cI(null,null,!0,a,b,"Value not in range")},
aP:function(a,b,c,d,e){return new P.cI(b,c,!0,a,d,"Invalid value")},
jC:function(a,b,c,d,e,f){if(C.b.a2(0,a)||C.b.a2(a,c))throw H.c(P.aP(a,0,c,"start",f))
if(b!=null){if(a>b||C.b.a2(b,c))throw H.c(P.aP(b,a,c,"end",f))
return b}return c},
D:function(a,b,c,d,e){var t=e!=null?e:J.bq(b)
return new P.eR(b,t,!0,a,c,"Index out of range")},
t:function(a){return new P.hw(a)},
li:function(a){return new P.hu(a)},
jE:function(a){return new P.be(a)},
aq:function(a){return new P.e_(a)},
ch:function(a){return new P.hV(a)},
Q:function(a){H.dM(H.e(a))},
ao:function ao(){},
J:function J(){},
b3:function b3(a,b){this.a=a
this.b=b},
a0:function a0(){},
aG:function aG(a){this.a=a},
eh:function eh(){},
ei:function ei(){},
b4:function b4(){},
c6:function c6(a){this.a=a},
cG:function cG(){},
a5:function a5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cI:function cI(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eR:function eR(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hw:function hw(a){this.a=a},
hu:function hu(a){this.a=a},
be:function be(a){this.a=a},
e_:function e_(a){this.a=a},
cO:function cO(){},
e8:function e8(a){this.a=a},
jo:function jo(){},
hV:function hV(a){this.a=a},
eK:function eK(a,b,c){this.a=a
this.b=b
this.c=c},
el:function el(a,b,c){this.a=a
this.b=b
this.$ti=c},
x:function x(){},
X:function X(){},
cq:function cq(){},
j:function j(){},
ba:function ba(){},
P:function P(){},
ad:function ad(){},
H:function H(){},
bd:function bd(){},
p:function p(){},
bE:function bE(a){this.a=a},
jI:function jI(){},
iC:function(a){var t,s,r,q,p
if(a==null)return
t=P.K()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.A)(s),++q){p=s[q]
t.j(0,p,a[p])}return t},
oc:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.k8(a,new P.iB(t))
return t},
kD:function(){var t=$.kC
if(t==null){t=J.jd(window.navigator.userAgent,"Opera",0)
$.kC=t}return t},
mZ:function(){var t,s
t=$.kz
if(t!=null)return t
s=$.kA
if(s==null){s=J.jd(window.navigator.userAgent,"Firefox",0)
$.kA=s}if(s)t="-moz-"
else{s=$.kB
if(s==null){s=!P.kD()&&J.jd(window.navigator.userAgent,"Trident/",0)
$.kB=s}if(s)t="-ms-"
else t=P.kD()?"-o-":"-webkit-"}$.kz=t
return t},
iB:function iB(a){this.a=a},
hA:function hA(){},
oC:function(a){return Math.sqrt(a)},
ie:function ie(){},
Z:function Z(){},
em:function em(){},
en:function en(){},
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
eG:function eG(){},
eI:function eI(){},
a9:function a9(){},
af:function af(){},
eQ:function eQ(){},
f_:function f_(){},
f9:function f9(){},
fc:function fc(){},
fu:function fu(){},
fB:function fB(){},
fF:function fF(){},
fG:function fG(){},
fK:function fK(){},
fL:function fL(){},
bD:function bD(){},
hb:function hb(){},
w:function w(){},
hc:function hc(){},
bG:function bG(){},
bH:function bH(){},
hp:function hp(){},
hy:function hy(){},
d8:function d8(){},
d9:function d9(){},
df:function df(){},
dg:function dg(){},
dq:function dq(){},
dr:function dr(){},
dw:function dw(){},
dx:function dx(){},
dU:function dU(){},
dV:function dV(){},
b0:function b0(){},
fv:function fv(){},
fQ:function fQ(){},
fR:function fR(){},
h1:function h1(){},
dl:function dl(){},
dm:function dm(){}},W={
n_:function(a,b,c){var t,s
t=document.body
s=(t&&C.q).V(t,a,b,c)
s.toString
t=new H.cX(new W.T(s),new W.ek(),[W.r])
return t.gad(t)},
n0:function(a){return"wheel"},
bu:function(a){var t,s,r
t="element tag unavailable"
try{s=J.mr(a)
if(typeof s==="string")t=a.tagName}catch(r){H.R(r)}return t},
nR:function(a,b){return document.createElement(a)},
aY:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lp:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
U:function(a,b,c,d,e){var t=c==null?null:W.lv(new W.hU(c))
t=new W.hT(0,a,b,t,!1,[e])
t.dU(a,b,c,!1,e)
return t},
lm:function(a){var t,s
t=document.createElement("a")
s=new W.ik(t,window.location)
s=new W.bL(s)
s.dV(a)
return s},
nU:function(a,b,c,d){return!0},
nV:function(a,b,c,d){var t,s,r,q,p
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
lq:function(){var t=P.p
t=new W.is(P.jx(C.r,t),P.aM(null,null,null,t),P.aM(null,null,null,t),P.aM(null,null,null,t),null)
t.dY(null,new H.by(C.r,new W.it(),[H.a3(C.r,0),null]),["TEMPLATE"],null)
return t},
nY:function(a){var t
if(a==null)return
if("postMessage" in a){t=W.nQ(a)
if(!!J.u(t).$isf)return t
return}else return a},
nQ:function(a){if(a===window)return a
else return new W.hO(a)},
lv:function(a){var t=$.E
if(t===C.f)return a
return t.ey(a)},
k:function k(){},
c5:function c5(){},
dQ:function dQ(){},
dR:function dR(){},
dS:function dS(){},
aB:function aB(){},
c7:function c7(){},
dX:function dX(){},
aD:function aD(){},
e0:function e0(){},
e1:function e1(){},
e2:function e2(){},
e3:function e3(){},
b1:function b1(){},
e4:function e4(){},
a6:function a6(){},
b2:function b2(){},
e5:function e5(){},
e6:function e6(){},
e7:function e7(){},
e9:function e9(){},
ea:function ea(){},
ca:function ca(){},
bt:function bt(){},
eb:function eb(){},
cb:function cb(){},
ec:function ec(){},
cc:function cc(){},
ed:function ed(){},
cd:function cd(){},
ce:function ce(){},
cf:function cf(){},
ee:function ee(){},
ef:function ef(){},
a7:function a7(){},
ek:function ek(){},
h:function h(){},
f:function f(){},
eE:function eE(){},
eF:function eF(){},
eJ:function eJ(){},
eM:function eM(){},
co:function co(){},
eN:function eN(){},
bv:function bv(){},
cp:function cp(){},
eO:function eO(){},
bw:function bw(){},
b7:function b7(){},
aL:function aL(){},
f5:function f5(){},
f6:function f6(){},
fe:function fe(){},
fg:function fg(){},
bz:function bz(){},
fh:function fh(){},
M:function M(){},
T:function T(a){this.a=a},
r:function r(){},
cD:function cD(){},
bB:function bB(){},
ai:function ai(){},
fE:function fE(){},
fH:function fH(){},
cH:function cH(){},
cK:function cK(){},
fT:function fT(){},
au:function au(){},
fZ:function fZ(){},
h0:function h0(){},
aj:function aj(){},
h5:function h5(){},
h6:function h6(a){this.a=a},
cQ:function cQ(){},
hd:function hd(){},
he:function he(){},
bF:function bF(){},
hg:function hg(){},
hh:function hh(){},
hj:function hj(){},
aS:function aS(){},
hn:function hn(){},
ho:function ho(){},
cW:function cW(){},
aT:function aT(){},
hx:function hx(){},
hz:function hz(){},
hB:function hB(){},
hC:function hC(){},
aV:function aV(){},
bJ:function bJ(){},
hE:function hE(a){this.a=a},
jK:function jK(){},
hN:function hN(){},
hP:function hP(){},
i4:function i4(){},
dc:function dc(){},
io:function io(){},
ip:function ip(){},
hK:function hK(){},
hQ:function hQ(a){this.a=a},
bg:function bg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ax:function ax(a,b,c,d){var _=this
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
bL:function bL(a){this.a=a},
n:function n(){},
cF:function cF(a){this.a=a},
fs:function fs(a){this.a=a},
fr:function fr(a,b,c){this.a=a
this.b=b
this.c=c},
bS:function bS(){},
il:function il(){},
im:function im(){},
is:function is(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
it:function it(){},
iq:function iq(){},
cj:function cj(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hO:function hO(a){this.a=a},
cE:function cE(){},
jA:function jA(){},
jJ:function jJ(){},
ik:function ik(a,b){this.a=a
this.b=b},
dy:function dy(a){this.a=a},
iu:function iu(a){this.a=a},
cZ:function cZ(){},
d_:function d_(){},
d0:function d0(){},
d1:function d1(){},
d2:function d2(){},
d3:function d3(){},
d4:function d4(){},
d6:function d6(){},
d7:function d7(){},
da:function da(){},
db:function db(){},
dd:function dd(){},
de:function de(){},
dh:function dh(){},
di:function di(){},
bT:function bT(){},
bU:function bU(){},
dj:function dj(){},
dk:function dk(){},
dp:function dp(){},
ds:function ds(){},
dt:function dt(){},
bV:function bV(){},
bW:function bW(){},
du:function du(){},
dv:function dv(){},
dz:function dz(){},
dA:function dA(){},
dB:function dB(){},
dC:function dC(){},
dD:function dD(){},
dE:function dE(){},
dF:function dF(){},
dG:function dG(){},
dH:function dH(){},
dI:function dI(){}},B={
oz:function(a){var t,s
t=document
s=W.aL
W.U(t,"keydown",new B.j1(),!1,s)
W.U(t,"keyup",new B.j2(),!1,s)
if(!$.oB)W.U(t,"mousemove",new B.j3(),!1,W.M)
s=W.M
W.U(t,"mousedown",new B.j4(),!1,s)
W.U(t,"mouseup",new B.j5(),!1,s)},
nm:function(a,b,c,d){var t,s,r,q,p,o,n
t=new Float32Array(3)
s=$.$get$iD()
r=$.$get$c1()
q=new T.B(new Float32Array(16))
q.H()
p=new Float32Array(3)
o=new Float32Array(3)
n=new Float32Array(3)
t=new B.fw(a,b,c,0,new T.d(t),-0.02,s,r,q,new T.d(p),new T.d(o),new T.d(n),new T.d(new Float32Array(3)),"camera:orbit",!1,!0)
t.dJ(a,b,c,d)
return t},
j1:function j1(){},
j2:function j2(){},
j3:function j3(){},
j4:function j4(){},
j5:function j5(){},
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
mV:function(d1,d2,d3,d4,d5,d6,d7,d8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0
t=-d6
s=-d7
r=new T.d(new Float32Array(3))
r.p(t,s,d8)
q=new T.d(new Float32Array(3))
q.p(d6,s,d8)
p=new T.d(new Float32Array(3))
p.p(d6,d7,d8)
o=new T.d(new Float32Array(3))
o.p(t,d7,d8)
n=-d8
m=new T.d(new Float32Array(3))
m.p(t,s,n)
l=new T.d(new Float32Array(3))
l.p(t,d7,n)
k=new T.d(new Float32Array(3))
k.p(d6,d7,n)
j=new T.d(new Float32Array(3))
j.p(d6,s,n)
i=new T.d(new Float32Array(3))
i.p(t,d7,n)
h=new T.d(new Float32Array(3))
h.p(t,d7,d8)
g=new T.d(new Float32Array(3))
g.p(d6,d7,d8)
f=new T.d(new Float32Array(3))
f.p(d6,d7,n)
e=new T.d(new Float32Array(3))
e.p(d6,s,d8)
d=new T.d(new Float32Array(3))
d.p(t,s,d8)
c=new T.d(new Float32Array(3))
c.p(t,s,n)
b=new T.d(new Float32Array(3))
b.p(d6,s,n)
a=new T.d(new Float32Array(3))
a.p(d6,s,n)
a0=new T.d(new Float32Array(3))
a0.p(d6,d7,n)
a1=new T.d(new Float32Array(3))
a1.p(d6,d7,d8)
a2=new T.d(new Float32Array(3))
a2.p(d6,s,d8)
a3=new T.d(new Float32Array(3))
a3.p(t,s,n)
a4=new T.d(new Float32Array(3))
a4.p(t,s,d8)
s=new T.d(new Float32Array(3))
s.p(t,d7,d8)
a5=new T.d(new Float32Array(3))
a5.p(t,d7,n)
t=new T.o(new Float32Array(2))
t.v(d3,d5)
n=new T.o(new Float32Array(2))
n.v(d2,d5)
a6=new T.o(new Float32Array(2))
a6.v(d2,d4)
a7=new T.o(new Float32Array(2))
a7.v(d3,d4)
a8=new T.o(new Float32Array(2))
a8.v(d2,d5)
a9=new T.o(new Float32Array(2))
a9.v(d2,d4)
b0=new T.o(new Float32Array(2))
b0.v(d3,d4)
b1=new T.o(new Float32Array(2))
b1.v(d3,d5)
b2=new T.o(new Float32Array(2))
b2.v(d3,d4)
b3=new T.o(new Float32Array(2))
b3.v(d3,d5)
b4=new T.o(new Float32Array(2))
b4.v(d2,d5)
b5=new T.o(new Float32Array(2))
b5.v(d2,d4)
b6=new T.o(new Float32Array(2))
b6.v(d2,d4)
b7=new T.o(new Float32Array(2))
b7.v(d3,d4)
b8=new T.o(new Float32Array(2))
b8.v(d3,d5)
b9=new T.o(new Float32Array(2))
b9.v(d2,d5)
c0=new T.o(new Float32Array(2))
c0.v(d2,d5)
c1=new T.o(new Float32Array(2))
c1.v(d2,d4)
c2=new T.o(new Float32Array(2))
c2.v(d3,d4)
c3=new T.o(new Float32Array(2))
c3.v(d3,d5)
c4=new T.o(new Float32Array(2))
c4.v(d3,d5)
c5=new T.o(new Float32Array(2))
c5.v(d2,d5)
c6=new T.o(new Float32Array(2))
c6.v(d2,d4)
c7=new T.o(new Float32Array(2))
c7.v(d3,d4)
c8=new G.aH(!1,[],[],[],P.K())
c8.Y("aTexUV")
c8.Y("aNormal")
c8.dv(6)
c8.an([r,q,p,o,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,s,a5])
c8.aG("aTexUV",[t,n,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7])
for(c9=0;t=$.$get$lk(),c9<6;++c9){d0=t[c9]
c8.aH("aNormal",[d0,d0,d0,d0])}return c8},
mW:function(a1,a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
t=a3/2
s=[]
r=[]
q=[]
p=new T.d(new Float32Array(3))
p.p(0,t,0)
C.a.i(s,p)
p=new T.o(new Float32Array(2))
p.v(0,0)
C.a.i(r,p)
p=new T.d(new Float32Array(3))
p.p(0,1,0)
C.a.i(q,p)
p=-t
o=new T.d(new Float32Array(3))
o.p(0,p,0)
C.a.i(s,o)
o=new T.o(new Float32Array(2))
o.v(1,1)
C.a.i(r,o)
o=new T.d(new Float32Array(3))
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
C.a.i(s,new T.d(o))
o=new Float32Array(2)
o[0]=m
o[1]=1
C.a.i(r,new T.o(o))
o=new Float32Array(3)
o[0]=0
o[1]=1
o[2]=0
C.a.i(q,new T.d(o))
o=new Float32Array(3)
o[0]=l*a2
o[1]=p
o[2]=k*a2
C.a.i(s,new T.d(o))
o=new Float32Array(2)
o[0]=m
o[1]=0
C.a.i(r,new T.o(o))
o=new Float32Array(3)
o[0]=0
o[1]=-1
o[2]=0
C.a.i(q,new T.d(o))}p=2*a4
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
f=new T.d(new Float32Array(3))
G.nl(i,h,g,new T.d(o),f)
C.a.i(q,f)
C.a.i(q,f)}H.b(s.length===2+4*a4)
p=[]
o=[]
e=new G.aH(!1,p,o,[],P.K())
e.Y("aTexUV")
e.an(s)
e.aG("aTexUV",r)
e.Y("aNormal")
e.aH("aNormal",q)
for(d=a4*2,n=0;n<a4;n=b){c=n*2+2
h=c+1
b=n+1
a=(b===a4?0:b)*2+2
a0=a+1
H.b(!0)
C.a.i(p,new G.a8(0,c,a))
H.b(!0)
C.a.i(p,new G.a8(1,a0,h))
H.b(!0)
C.a.i(o,new G.b5(d+a,d+c,d+h,d+a0))}return e},
n8:function(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
t=[]
s=[]
C.a.N(t,$.$get$kJ())
C.a.N(s,$.$get$jq())
for(r=0;r<a3;++r,t=q){q=[]
for(p=t.length,o=0;o<t.length;t.length===p||(0,H.A)(t),++o){n=t[o]
m=J.i(n)
l=C.a.h(s,m.gZ(n))
k=new T.d(new Float32Array(3))
k.u(l)
k.i(0,C.a.h(s,m.gU(n)))
k.T(0,0.5)
k.C(0)
l=C.a.h(s,m.gU(n))
j=new T.d(new Float32Array(3))
j.u(l)
j.i(0,C.a.h(s,m.ga5(n)))
j.T(0,0.5)
j.C(0)
l=C.a.h(s,m.ga5(n))
i=new T.d(new Float32Array(3))
i.u(l)
i.i(0,C.a.h(s,m.gZ(n)))
i.T(0,0.5)
i.C(0)
h=s.length
C.a.i(s,k)
g=s.length
C.a.i(s,j)
f=s.length
C.a.i(s,i)
C.a.i(q,new G.a8(m.gZ(n),h,f))
C.a.i(q,new G.a8(m.gU(n),g,h))
C.a.i(q,new G.a8(m.ga5(n),f,g))
C.a.i(q,new G.a8(h,g,f))}}e=new G.aH(!1,[],[],[],P.K())
e.Y("aTexUV")
e.Y("aNormal")
for(p=t.length,o=0;o<t.length;t.length===p||(0,H.A)(t),++o){n=t[o]
m=J.i(n)
d=C.a.h(s,m.gZ(n))
H.b(Math.sqrt(d.gS())<1.01&&Math.sqrt(d.gS())>0.99)
c=C.a.h(s,m.gU(n))
H.b(Math.sqrt(c.gS())<1.01&&Math.sqrt(c.gS())>0.99)
b=C.a.h(s,m.ga5(n))
H.b(Math.sqrt(b.gS())<1.01&&Math.sqrt(b.gS())>0.99)
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
e.aH("aNormal",[d,c,b])
m=new T.d(new Float32Array(3))
m.u(d)
m.T(0,a4)
l=new T.d(new Float32Array(3))
l.u(c)
l.T(0,a4)
a2=new T.d(new Float32Array(3))
a2.u(b)
a2.T(0,a4)
e.dw([m,l,a2])
e.aG("aTexUV",[new T.o(a),new T.o(a0),new T.o(a1)])}return e},
nw:function(a){var t,s,r,q,p,o,n,m,l,k
t=-1*a
s=new T.d(new Float32Array(3))
s.p(t,t,0)
r=new T.d(new Float32Array(3))
r.p(a,t,0)
q=new T.d(new Float32Array(3))
q.p(a,a,0)
p=new T.d(new Float32Array(3))
p.p(t,a,0)
t=new T.o(new Float32Array(2))
t.v(0,0)
o=new T.o(new Float32Array(2))
o.v(1,0)
n=new T.o(new Float32Array(2))
n.v(1,1)
m=new T.o(new Float32Array(2))
m.v(0,1)
l=new T.d(new Float32Array(3))
l.p(0,0,1)
k=new G.aH(!1,[],[],[],P.K())
k.Y("aTexUV")
k.dz([s,r,q,p])
k.aG("aTexUV",[t,o,n,m])
k.Y("aNormal")
k.aH("aNormal",[l,l,l,l])
return k},
nA:function(a,b,c,d,e,f,a0,a1,a2,a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=a1+1
s=a0+1
r=B.nn(new B.fY(e,d,f,c),0,6.283185307179586,s,!1,0.001)
H.b(r.length===2*s)
q=B.nH(r,a1,a2,!1)
H.b(q.length===s)
H.b(q[0].length===2*t)
p=[]
o=new G.aH(!1,[],[],p,P.K())
for(n=q.length,m=0;m<q.length;q.length===n||(0,H.A)(q),++m){l=q[m]
for(k=0;k<l.length;k+=2){j=l[k]
j.toString
i=new T.d(new Float32Array(3))
i.u(j)
C.a.i(p,i)}}H.b(p.length===t*s)
o.dE(t,s,!1)
o.dF(t,s)
n=o.e
H.b(n.h(0,"aTexUV").length===p.length)
o.Y("aNormal")
for(j=q.length,m=0;m<q.length;q.length===j||(0,H.A)(q),++m){l=q[m]
for(k=0;k<l.length;k+=2){i=l[k+1]
h=n.h(0,"aNormal")
i.toString
g=new T.d(new Float32Array(3))
g.u(i);(h&&C.a).i(h,g)}}H.b(n.h(0,"aNormal").length===p.length)
return o},
nH:function(a1,a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
t=[]
s=new Float32Array(3)
r=new T.d(s)
q=new Float32Array(3)
p=new T.d(q)
o=new Float32Array(3)
n=new T.d(o)
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
o[2]=e*d}p.C(0)
n.C(0)
for(c=0;c<m;++c){b=c/a2*2*3.141592653589793
a=a3*Math.cos(b)
a0=a3*Math.sin(b)
r.u(k)
r.aQ(p,a)
r.aQ(n,a0)
h=new T.d(new Float32Array(3))
h.u(r)
C.a.i(i,h)
s[2]=0
s[1]=0
s[0]=0
r.aQ(p,a)
r.aQ(n,a0)
r.C(0)
h=new T.d(new Float32Array(3))
h.u(r)
C.a.i(i,h)}}return t},
nn:function(a,b,c,d,e,f){var t,s,r,q,p,o,n
H.b(d>=2)
t=[]
s=new T.d(new Float32Array(3))
r=new T.d(new Float32Array(3))
for(q=(c-b)/(d-1),p=0;p<d;++p){o=q*p+b
a.$2(o,s)
a.$2(o+f,r)
r.al(0,s)
n=new T.d(new Float32Array(3))
n.u(s)
C.a.i(t,n)
n=new T.d(new Float32Array(3))
n.u(r)
C.a.i(t,n)}return t},
fY:function fY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},G={
nL:function(a){var t,s,r
t=H.C(a.split("\n"),[P.p])
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.e(t[s])}return C.a.az(t,"\n")},
lj:function(a,b,c){var t,s,r,q
t=J.i(a)
s=t.cq(a,b)
t.bE(a,s,c)
t.cm(a,s)
r=t.by(a,s,35713)
if(r!=null&&!r){q=t.bx(a,s)
P.Q("E:Compilation failed:")
P.Q("E:"+G.nL(c))
P.Q("E:Failure:")
P.Q(C.h.X("E:",q))
throw H.c(q)}return s},
n6:function(a,b,c,d,e){var t=new G.cl(a,null,b,c,d)
t.dC(a,b,c,d,!1)
return t},
I:function(a,b,c){return new G.a8(a,b,c)},
nl:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
d.u(b)
d.al(0,a)
e.u(c)
e.al(0,a)
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
l=Math.sqrt(e.gS())
if(l===0)return!1
e.T(0,-1/l)
return!0},
n9:function(a,b,c){var t,s,r,q
C.u.cD(a,0,a.length,0)
C.u.cD(b,0,4,0)
for(t=c.length,s=0,r=0;r<c.length;c.length===t||(0,H.A)(c),++r){q=c[r]
if(q.c){q.b1(a,s*16)
b[s]=q.d;++s}}},
fb:function(a){var t=new G.fa(P.K(),a,!1,!0)
t.dI(a)
return t},
ck:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.jg(a[s])
b[t+1]=J.jh(a[s])
b[t+2]=J.kb(a[s])}return b},
n4:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.jg(a[s])
b[t+1]=J.jh(a[s])}return b},
n5:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.jg(a[s])
b[t+1]=J.jh(a[s])
b[t+2]=J.kb(a[s])
b[t+3]=J.ms(a[s])}return b},
n3:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.bo(a[s],0)
b[t+1]=J.bo(a[s],1)
b[t+2]=J.bo(a[s],2)
b[t+3]=J.bo(a[s],3)}return b},
kS:function(a,b,c,d){return new G.ff(b,J.mf(b.a),c,P.K(),d,null,0,-1,null,null,P.K(),"meshdata:"+a,!1,!0)},
nT:function(a,b){var t,s,r,q,p,o,n,m,l,k
for(t=a.e,s=t.gG(t),s=s.gA(s),r=b.x,q=[[P.j,P.x]],p=[P.a0],o=[T.aw],n=[T.d],m=[T.o];s.q();){l=s.gt(s)
if(!r.K(0,l)){l="Dropping unnecessary attribute: "+H.e(l)
if($.lD>0)H.dM("I: "+l)
continue}k=t.h(0,l)
switch($.$get$V().h(0,l).a){case"vec2":b.am(l,G.n4(H.dN(k,"$isj",m,"$asj"),null),2)
break
case"vec3":b.am(l,G.ck(H.dN(k,"$isj",n,"$asj"),null),3)
break
case"vec4":b.am(l,G.n5(H.dN(k,"$isj",o,"$asj"),null),4)
break
case"float":b.am(l,new Float32Array(H.iw(H.dN(k,"$isj",p,"$asj"))),1)
break
case"uvec4":b.am(l,G.n3(H.dN(k,"$isj",q,"$asj"),null),4)
break
default:if(H.W(!1))H.a_("unknown type for "+H.e(l)+" ["+J.mq(k[0]).k(0)+"] ["+new H.av(H.iK(k),null).k(0)+"] "+H.e(k))}}},
cn:function(a,b,c){var t=G.kS(a,b.d,4,b.e.x)
t.an(G.ck(c.d,null))
t.bG(c.dD())
G.nT(c,t)
return t},
fP:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.aM(null,null,null,P.p)
s=c.b
r=d.b
q=c.f
p=J.md(b.a)
o=G.lj(b.a,35633,s)
J.k6(b.a,p,o)
n=G.lj(b.a,35632,r)
J.k6(b.a,p,n)
if(q.length>0)J.mF(b.a,p,q,35980)
J.mx(b.a,p)
if(!J.mw(b.a,p,35714))H.L(J.mv(b.a,p))
t=new G.fO(b,c,d,p,P.jx(c.c,null),P.K(),P.K(),t,null,a,!1,!0)
t.dL(a,b,c,d)
return t},
aR:function(a){return new G.fW(a,null,[],[],[],[],0,P.K())},
l0:function(){return new G.hi(!1,!1,!1,!0,1,9729,9729)},
le:function(a,b,c,d,e,f){var t=new G.ht(c,d,e,b,J.me(a.a),3553,a,f)
t.dO(a,b,c,d,e,f)
return t},
fi:function fi(){},
bf:function bf(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dW:function dW(){},
dZ:function dZ(a,b){this.a=a
this.b=b},
cl:function cl(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
a8:function a8(a,b,c){this.a=a
this.b=b
this.c=c},
b5:function b5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aH:function aH(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
f0:function f0(){},
aN:function aN(a,b,c,d,e,f,g,h){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.d=e
_.a=f
_.b=g
_.c=h},
aF:function aF(a,b,c,d,e,f,g,h,i,j){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.cx=f
_.d=g
_.a=h
_.b=i
_.c=j},
aa:function aa(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.cx=f
_.cy=g
_.db=h
_.dx=i
_.dy=j
_.fr=k
_.fx=l
_.d=m
_.a=n
_.b=o
_.c=p},
eP:function eP(a,b,c,d,e,f,g){var _=this
_.x=a
_.y=b
_.z=c
_.d=d
_.a=e
_.b=f
_.c=g},
cU:function cU(a,b,c){this.a=a
this.b=b
this.c=c},
cT:function cT(a,b,c){this.a=a
this.b=b
this.c=c},
fa:function fa(a,b,c,d){var _=this
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
eg:function eg(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fO:function fO(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
fW:function fW(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
h_:function h_(){},
hi:function hi(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bI:function bI(){},
ht:function ht(a,b,c,d,e,f,g,h){var _=this
_.f=a
_.r=b
_.x=c
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h}},R={
kY:function(a,b,c,d,e,f,g,h){return G.cn("cube",a,B.mV(!0,b,c,d,e,f,g,h))},
nI:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=d.a
if(t[1]===0)return
s=b*0.5
r=c*C.o.eV(s/c)
q=-r
p=d.aX(s).aX(1/t[1])
o=[]
for(n=q;n<=r;n+=c)for(m=q;m<=r;m+=c){t=new Float32Array(3)
l=new T.d(t)
t[0]=n
t[1]=0
t[2]=m
l.i(0,p)
C.a.i(o,l)
t=new Float32Array(3)
l=new T.d(t)
t[0]=n
t[1]=0
t[2]=m
l.al(0,p)
C.a.i(o,l)}for(k=0;k<8;++k){n=(k&1)===1?1:-1
j=(k&2)===2?1:-1
m=(k&4)===4?1:-1
if(n>0){t=j*s
l=m*s
i=new Float32Array(3)
i[0]=n*s
i[1]=t
i[2]=l
C.a.i(o,new T.d(i))
i=new Float32Array(3)
i[0]=-n*s
i[1]=t
i[2]=l
C.a.i(o,new T.d(i))}if(j>0){t=n*s
l=m*s
i=new Float32Array(3)
i[0]=t
i[1]=j*s
i[2]=l
C.a.i(o,new T.d(i))
i=new Float32Array(3)
i[0]=t
i[1]=-j*s
i[2]=l
C.a.i(o,new T.d(i))}if(m>0){t=n*s
l=j*s
i=new Float32Array(3)
i[0]=t
i[1]=l
i[2]=m*s
C.a.i(o,new T.d(i))
i=new Float32Array(3)
i[0]=t
i[1]=l
i[2]=-m*s
C.a.i(o,new T.d(i))}}a.aK(G.ck(o,null))
t=new Array(o.length)
t.fixed$length=Array
h=H.C(t,[P.x])
for(t=o.length,k=0;k<t;++k)h[k]=k
a.aJ(h)},
n7:function(a){var t,s,r
t=a.a
s=t[0]
if(s!==0){r=t[1]
if(r!==0){t=new T.d(new Float32Array(3))
t.p(-r,s,0)
return t}t=t[2]
if(t!==0){r=new T.d(new Float32Array(3))
r.p(-t,0,s)
return r}t=new T.d(new Float32Array(3))
t.p(0,1,1)
return t}else{s=t[1]
if(s===0){t=new T.d(new Float32Array(3))
t.p(1,1,0)
return t}t=t[2]
if(t===0){t=new T.d(new Float32Array(3))
t.p(1,0,1)
return t}r=new T.d(new Float32Array(3))
r.p(0,-t,s)
return r}},
nK:function(a1,a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
a3.toString
t=new T.d(new Float32Array(3))
t.u(a3)
t.C(0)
s=a2.X(0,t.aX(a4))
r=[a2,s]
q=R.n7(a3)
q.C(0)
q.T(0,Math.tan(H.lA(a5))*a4)
for(p=0;p<8;++p){t=new Float32Array(3)
o=new T.d(t)
o.u(q)
n=new Float32Array(4)
new T.fI(n).di(a3,p*2*3.141592653589793/8)
m=t[0]
l=t[1]
k=t[2]
j=n[0]
i=n[1]
h=n[2]
g=n[3]
f=g*m+i*k-h*l
e=g*l+h*m-j*k
d=g*k+j*l-i*m
n=-j
c=n*m-i*l-h*k
b=-h
a=-i
t[0]=f*g+c*n+e*b-d*a
t[1]=e*g+c*a+d*n-f*b
t[2]=d*g+c*b+f*a-e*n
o.i(0,s)
C.a.i(r,o)}a0=[]
for(p=1;p<r.length;++p){C.a.i(a0,0)
C.a.i(a0,p)}for(p=3;t=r.length,p<t;++p){C.a.i(a0,p-1)
C.a.i(a0,p)}C.a.i(a0,t-1)
C.a.i(a0,2)
for(p=2;p<r.length;++p)if(p%2===0){C.a.i(a0,1)
C.a.i(a0,p)}a1.aK(G.ck(r,null))
a1.aJ(a0)},
nJ:function(a,b,c){var t,s,r,q,p,o,n
t=[]
s=[]
for(r=$.$get$jq(),q=0;q<12;++q){p=r[q]
C.a.i(s,t.length)
C.a.i(s,12)
o=new T.d(new Float32Array(3))
o.u(p)
o.T(0,c)
b.toString
n=new T.d(new Float32Array(3))
n.u(b)
n.i(0,o)
C.a.i(t,n)}C.a.i(t,b)
a.aK(G.ck(t,null))
a.aJ(s)},
h3:function h3(){},
h4:function h4(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fX:function fX(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i}},A={
lC:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
if(!b.c)return
t=b.dx
t.u(c)
s=b.d
t.aU(0,s)
r=b.ch
if(r!=null){b.cx
q=!0}else q=!1
if(q){H.e(b)
q=C.a.gaT(e)
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
p.eG(new T.Y(o))
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
a.dB(b.cx,e,d)
e.pop()}for(s=b.cy,r=s.length,l=0;l<s.length;s.length===r||(0,H.A)(s),++l)A.lC(a,s[l],t,d,e)},
jD:function(a,b,c){var t=new A.fN(c,b,H.C([],[A.aQ]),17664,0,0,0,0,a,!1,!0)
t.dK(a,b,c)
return t},
ah:function ah(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
aQ:function aQ(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.a=d
_.b=e
_.c=f},
fN:function fN(a,b,c,d,e,f,g,h,i,j,k){var _=this
_.d=a
_.e=b
_.f=c
_.r=d
_.x=e
_.y=f
_.z=g
_.Q=h
_.a=i
_.b=j
_.c=k},
dK:function(a){var t,s
t=C.u.eW(a,0,new A.iL())
s=536870911&t+(C.b.d5(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
iL:function iL(){}},T={
fd:function(){return new T.B(new Float32Array(16))},
k1:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
b.toString
t=new Float32Array(3)
s=new T.d(t)
s.u(b)
s.al(0,c)
s.C(0)
r=d.cs(s)
r.C(0)
q=s.cs(r)
q.C(0)
p=r.bk(b)
o=q.bk(b)
n=s.bk(b)
m=r.a
l=m[0]
k=q.a
j=k[0]
i=t[0]
h=m[1]
g=k[1]
f=t[1]
m=m[2]
k=k[2]
t=t[2]
e=a.a
e[15]=1
e[14]=-n
e[13]=-o
e[12]=-p
e[11]=0
e[10]=t
e[9]=k
e[8]=m
e[7]=0
e[6]=f
e[5]=g
e[4]=h
e[3]=0
e[2]=i
e[1]=j
e[0]=l},
lS:function(a,b,c,d,e){var t,s
t=Math.tan(b*0.5)
s=d-e
a.bD()
a.P(0,0,1/(t*c))
a.P(1,1,1/t)
a.P(2,2,(e+d)/s)
a.P(3,2,-1)
a.P(2,3,2*d*e/s)},
z:function(a,b,c){var t=new T.d(new Float32Array(3))
t.p(a,b,c)
return t},
Y:function Y(a){this.a=a},
B:function B(a){this.a=a},
fI:function fI(a){this.a=a},
o:function o(a){this.a=a},
d:function d(a){this.a=a},
aw:function aw(a){this.a=a}},L={
n2:function(a){var t,s
P.Q(H.e(a)+" toggle ")
t=$.$get$ap()
$.iG=t.h(0,a)
t.h(0,a).c=!0
for(t=t.gG(t),t=t.gA(t);t.q();){s=t.gt(t)
if(s==null?a!=null:s!==a)$.$get$ap().h(0,s).c=!1}},
nE:function(a){a.stopPropagation()},
ot:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
t={}
s=document
r=new R.h4(0,0,null,null,null,null)
r.dM(C.j.d8(s,"stats"),"blue","gray")
q=C.j.fb(s,"#webgl-canvas")
p=new G.dZ(null,q)
o=(q&&C.I).d7(q,"webgl2",P.at(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
p.a=o
if(o==null)H.L(P.ch('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
n="ChronosGL Config: "+H.e(J.mt(o))
if($.lD>0)P.Q("I: "+n)
J.ma(o,0,0,0,1)
J.dP(o,2929)
m=B.nm(25,10,0,q)
q.width=q.clientWidth
q.height=q.clientHeight
o=$.or
n=$.oq
l=new T.B(new Float32Array(16))
l.H()
k=new T.B(new Float32Array(16))
k.H()
j=new G.fC(m,50,1,o,n,l,k,new T.B(new Float32Array(16)),P.K(),"perspective",!1,!0)
j.bN()
o=[]
n=new Float32Array(64)
i=new G.eP(o,n,new Float32Array(4),P.K(),"illumination",!1,!0)
for(n=$.$get$ap(),n=n.gbr(n),n=n.gA(n);n.q();)C.a.i(o,n.gt(n))
o=new G.bf(P.K(),"uniforms",!1,!0)
h=new R.fX(p,null,null,null,null,null,o,null,null)
n=new T.o(new Float32Array(2))
n.v(512,512)
h.y=n
g=G.le(p,"frame::color",512,512,32856,$.$get$l1())
l=G.le(p,"frame::depth",512,512,33190,$.$get$l2())
h.b=l
k=G.n6(p,g,l,null,!1)
h.d=k
k=A.jD("compute-shadow",p,k)
k.z=512
k.Q=512
h.c=k
o.J("uTexture",l)
o.J("uCutOff",0)
o.J("uCameraNear",0.5)
o.J("uCameraFar",20)
f=G.fP("shadowCompute",p,$.$get$lU(),$.$get$lT())
f=new A.aQ(f,[o],[],"shadowCompute",!1,!0)
h.e=f
H.b(!0)
C.a.i(k.f,f)
f=A.jD("visualize-shadow",p,null)
f.seC(!1)
h.f=f
k=G.fP("shadowVisualize",p,$.$get$m1(),$.$get$m0())
e=[]
o=new A.aQ(k,[o],e,"shadowVisualize",!1,!0)
h.x=o
d=G.cn("quad",k,B.nw(1))
k=$.$get$kH()
c=new Float32Array(9)
b=new T.B(new Float32Array(16))
b.H()
a=new T.B(new Float32Array(16))
a.H()
a0=new Float32Array(3)
a1=new Float32Array(3)
a2=new Float32Array(3)
a3=new Float32Array(3)
H.b(!0)
C.a.i(e,new A.ah(k,d,[],new T.Y(c),b,a,new T.d(a0),new T.d(a1),new T.d(a2),new T.d(a3),"unit-mesh",!1,!0))
H.b(!0)
C.a.i(f.f,o)
a4=new G.bf(P.K(),"plain",!1,!0)
a4.J("uShadowMap",l)
a4.J("uCanvasSize",n)
a4.J("uShadowBias",0.03)
a5=A.jD("main",p,null)
n=G.fP("solid",p,$.$get$lK(),$.$get$lI())
l=[]
H.b(!0)
o=a5.f
C.a.i(o,new A.aQ(n,[j,i,a4],l,"solid",!1,!0))
k=G.fP("solid",p,$.$get$lX(),$.$get$lW())
a6=new A.aQ(k,[j,i],[],"solid",!1,!0)
H.b(!0)
C.a.i(o,a6)
H.b(k.dG(n))
o=G.cn("icosahedron-3",n,B.n8(3,1,!0))
f=$.$get$lM()
e=new Float32Array(9)
c=new T.B(new Float32Array(16))
c.H()
b=new T.B(new Float32Array(16))
b.H()
a=new Float32Array(3)
a0=new Float32Array(3)
a1=new Float32Array(3)
o=new A.ah(f,o,[],new T.Y(e),c,b,new T.d(a),new T.d(a0),new T.d(a1),new T.d(new Float32Array(3)),"sphere",!1,!0)
o.ac(0,0,0)
H.b(!0)
C.a.i(l,o)
o=R.kY(n,1,0,1,0,1,1,1)
e=new Float32Array(9)
c=new T.B(new Float32Array(16))
c.H()
b=new T.B(new Float32Array(16))
b.H()
a=new Float32Array(3)
a0=new Float32Array(3)
a1=new Float32Array(3)
o=new A.ah(f,o,[],new T.Y(e),c,b,new T.d(a),new T.d(a0),new T.d(a1),new T.d(new Float32Array(3)),"cube",!1,!0)
o.ac(-5,0,-5)
H.b(!0)
C.a.i(l,o)
o=G.cn("cylinder-32",n,B.mW(3,6,2,32,!0))
e=new Float32Array(9)
c=new T.B(new Float32Array(16))
c.H()
b=new T.B(new Float32Array(16))
b.H()
a=new Float32Array(3)
a0=new Float32Array(3)
a1=new Float32Array(3)
o=new A.ah(f,o,[],new T.Y(e),c,b,new T.d(a),new T.d(a0),new T.d(a1),new T.d(new Float32Array(3)),"cylinder",!1,!0)
o.ac(5,0,-5)
H.b(!0)
C.a.i(l,o)
o=G.cn("torusknot",n,B.nA(!0,!0,1,2,3,1,128,16,0.4,!1))
e=new Float32Array(9)
c=new T.B(new Float32Array(16))
c.H()
b=new T.B(new Float32Array(16))
b.H()
a=new Float32Array(3)
a0=new Float32Array(3)
a1=new Float32Array(3)
o=new A.ah(f,o,[],new T.Y(e),c,b,new T.d(a),new T.d(a0),new T.d(a1),new T.d(new Float32Array(3)),"torusknot",!1,!0)
o.ac(5,0,5)
H.b(!0)
C.a.i(l,o)
n=R.kY(n,1,0,1,0,30,0.1,30)
o=$.$get$lL()
f=new Float32Array(9)
e=new T.B(new Float32Array(16))
e.H()
c=new T.B(new Float32Array(16))
c.H()
b=new Float32Array(3)
a=new Float32Array(3)
a0=new Float32Array(3)
o=new A.ah(o,n,[],new T.Y(f),e,c,new T.d(b),new T.d(a),new T.d(a0),new T.d(new Float32Array(3)),"plane",!1,!0)
o.ac(0,-10,0)
H.b(!0)
C.a.i(l,o)
for(o=l.length,a7=0;a7<l.length;l.length===o||(0,H.A)(l),++a7){a8=l[a7]
n=h.e
n.toString
H.b(!0)
C.a.i(n.f,a8)}a9=G.kS("light",k.d,1,k.e.x)
a9.an(new Float32Array(3))
a9.bG([0,0])
o=$.$get$lJ()
n=new Float32Array(9)
l=new T.B(new Float32Array(16))
l.H()
k=new T.B(new Float32Array(16))
k.H()
f=new Float32Array(3)
e=new Float32Array(3)
c=new Float32Array(3)
b=new Float32Array(3)
H.b(!0)
C.a.i(a6.f,new A.ah(o,a9,[],new T.Y(n),l,k,new T.d(f),new T.d(e),new T.d(c),new T.d(b),"light",!1,!0))
for(o=C.j.bt(s,"input"),n=o.length,a7=0;a7<o.length;o.length===n||(0,H.A)(o),++a7){b0=o[a7]
l=J.i(b0)
k=l.gbl(b0)
W.U(k.a,k.b,new L.iX(),!1,H.a3(k,0))
k=l.gbm(b0)
W.U(k.a,k.b,new L.iY(),!1,H.a3(k,0))
l=l.gbn(b0)
W.U(l.a,l.b,L.oA(),!1,H.a3(l,0))}for(o=C.j.bt(s,"input"),n=o.length,a7=0;a7<o.length;o.length===n||(0,H.A)(o),++a7){b1=o[a7]
l=J.i(b1)
H.dM("initialize inputs "+H.e(l.gf0(b1)))
b2=C.j.bX(s,"Event")
J.k4(b2,"change",!0,!0)
l.cv(b1,b2)
b2=C.j.bX(s,"Event")
J.k4(b2,"input",!0,!0)
l.cv(b1,b2)}s=new L.iZ(q,j,a5,h)
s.$1(null)
W.U(window,"resize",s,!1,W.h)
t.a=0
new L.iW(t,m,a9,r,h,a4,a5).$1(0)},
iX:function iX(){},
iY:function iY(){},
iZ:function iZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iW:function iW(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}}
var v=[C,H,J,P,W,B,G,R,A,T,L]
setFunctionNamesIfNecessary(v)
var $={}
H.js.prototype={}
J.a.prototype={
E:function(a,b){return a===b},
gB:function(a){return H.aO(a)},
k:function(a){return"Instance of '"+H.bC(a)+"'"},
gF:function(a){return new H.av(H.iK(a),null)}}
J.eW.prototype={
k:function(a){return String(a)},
gB:function(a){return a?519018:218159},
gF:function(a){return C.ap},
$isao:1}
J.eX.prototype={
E:function(a,b){return null==b},
k:function(a){return"null"},
gB:function(a){return 0},
gF:function(a){return C.aj},
$isP:1}
J.bx.prototype={
gB:function(a){return 0},
gF:function(a){return C.ai},
k:function(a){return String(a)},
$iskN:1}
J.fD.prototype={}
J.aU.prototype={}
J.aK.prototype={
k:function(a){var t=a[$.$get$ky()]
return t==null?this.ds(a):J.br(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isjp:1}
J.aI.prototype={
i:function(a,b){if(!!a.fixed$length)H.L(P.t("add"))
a.push(b)},
N:function(a,b){var t,s,r,q,p
t=a.length
if(!!a.fixed$length)H.L(P.t("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.A)(b),++r,t=p){q=b[r]
p=t+1
H.b(t===a.length||H.L(P.aq(a)))
a.push(q)}},
cI:function(a,b){return new H.by(a,b,[H.a3(a,0),null])},
az:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.e(a[s])
return t.join(b)},
w:function(a,b){return this.h(a,b)},
geU:function(a){if(a.length>0)return a[0]
throw H.c(H.eV())},
gaT:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.c(H.eV())},
bC:function(a,b,c,d,e){var t,s,r
if(!!a.immutable$list)H.L(P.t("setRange"))
P.jC(b,c,a.length,null,null,null)
t=C.b.ae(c,b)
if(t===0)return
if(e<0)H.L(P.aP(e,0,null,"skipCount",null))
s=J.a1(d)
if(C.b.a2(e+t,s.gl(d)))throw H.c(H.nh())
if(C.b.a9(e,b))for(r=t-1;r>=0;--r)a[b+r]=s.h(d,e+r)
else for(r=0;r<t;++r)a[b+r]=s.h(d,e+r)},
c9:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.c(P.aq(a))}return!1},
dl:function(a,b){if(!!a.immutable$list)H.L(P.t("sort"))
H.nD(a,P.od())},
aY:function(a){return this.dl(a,null)},
I:function(a,b){var t
for(t=0;t<a.length;++t)if(J.G(a[t],b))return!0
return!1},
k:function(a){return P.eU(a,"[","]")},
gA:function(a){return new J.dT(a,a.length,0,null,[H.a3(a,0)])},
gB:function(a){return H.aO(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.L(P.t("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.jk(b,"newLength",null))
if(b<0)throw H.c(P.aP(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.ay(a,b))
if(b>=a.length||b<0)throw H.c(H.ay(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.L(P.t("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.ay(a,b))
if(b>=a.length||b<0)throw H.c(H.ay(a,b))
a[b]=c},
$isq:1,
$asq:function(){},
$isl:1,
$isj:1}
J.jr.prototype={}
J.dT.prototype={
gt:function(a){return this.d},
q:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.c(H.A(t))
r=this.c
if(r>=s){this.sbO(null)
return!1}this.sbO(t[r]);++this.c
return!0},
sbO:function(a){this.d=a}}
J.b8.prototype={
a0:function(a,b){var t
if(typeof b!=="number")throw H.c(H.O(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaR(b)
if(this.gaR(a)===t)return 0
if(this.gaR(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaR:function(a){return a===0?1/a<0:a<0},
eA:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.c(P.t(""+a+".ceil()"))},
eV:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.c(P.t(""+a+".floor()"))},
ai:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.t(""+a+".round()"))},
eB:function(a,b,c){if(this.a0(b,c)>0)throw H.c(H.O(b))
if(this.a0(a,b)<0)return b
if(this.a0(a,c)>0)return c
return a},
fn:function(a,b){var t
if(b>20)throw H.c(P.aP(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gaR(a))return"-"+t
return t},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gB:function(a){return a&0x1FFFFFFF},
X:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return a+b},
ae:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return a-b},
d6:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return a/b},
L:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return a*b},
b0:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.c5(a,b)},
M:function(a,b){return(a|0)===a?a/b|0:this.c5(a,b)},
c5:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.c(P.t("Result of truncating division is "+H.e(t)+": "+H.e(a)+" ~/ "+b))},
bg:function(a,b){var t
if(a>0)t=this.em(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
em:function(a,b){return b>31?0:a>>>b},
d5:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return(a&b)>>>0},
du:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return(a^b)>>>0},
a9:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return a<b},
a2:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return a>b},
bs:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return a>=b},
gF:function(a){return C.as},
$isJ:1,
$asJ:function(){return[P.ad]},
$isa0:1,
$isad:1}
J.cs.prototype={
gF:function(a){return C.ar},
$isx:1}
J.cr.prototype={
gF:function(a){return C.aq}}
J.aJ.prototype={
cl:function(a,b){if(b<0)throw H.c(H.ay(a,b))
if(b>=a.length)H.L(H.ay(a,b))
return a.charCodeAt(b)},
ao:function(a,b){if(b>=a.length)throw H.c(H.ay(a,b))
return a.charCodeAt(b)},
X:function(a,b){if(typeof b!=="string")throw H.c(P.jk(b,null,null))
return a+b},
dm:function(a,b,c){var t
if(c>a.length)throw H.c(P.aP(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
aE:function(a,b){return this.dm(a,b,0)},
aZ:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.fJ(b,null,null))
if(b>c)throw H.c(P.fJ(b,null,null))
if(c>a.length)throw H.c(P.fJ(c,null,null))
return a.substring(b,c)},
dn:function(a,b){return this.aZ(a,b,null)},
fm:function(a){return a.toLowerCase()},
fp:function(a){var t,s,r,q,p
t=a.trim()
s=t.length
if(s===0)return t
if(this.ao(t,0)===133){r=J.nj(t,1)
if(r===s)return""}else r=0
q=s-1
p=this.cl(t,q)===133?J.nk(t,q):s
if(r===0&&p===s)return t
return t.substring(r,p)},
eE:function(a,b,c){if(c>a.length)throw H.c(P.aP(c,0,a.length,null,null))
return H.oD(a,b,c)},
a0:function(a,b){var t
if(typeof b!=="string")throw H.c(H.O(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
k:function(a){return a},
gB:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gF:function(a){return C.ak},
gl:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.c(H.ay(a,b))
return a[b]},
$isq:1,
$asq:function(){},
$isJ:1,
$asJ:function(){return[P.p]},
$isp:1}
H.l.prototype={}
H.b9.prototype={
gA:function(a){return new H.cu(this,this.gl(this),0,null,[H.ac(this,"b9",0)])},
aV:function(a,b){return this.dr(0,b)},
fl:function(a,b){var t,s
t=H.C([],[H.ac(this,"b9",0)])
C.a.sl(t,this.gl(this))
for(s=0;C.b.a9(s,this.gl(this));++s)t[s]=this.w(0,s)
return t},
fk:function(a){return this.fl(a,!0)}}
H.cu.prototype={
gt:function(a){return this.d},
q:function(){var t,s,r,q
t=this.a
s=J.a1(t)
r=s.gl(t)
q=this.b
if(q==null?r!=null:q!==r)throw H.c(P.aq(t))
if(C.b.bs(this.c,r)){this.saq(null)
return!1}this.saq(s.w(t,this.c));++this.c
return!0},
saq:function(a){this.d=a}}
H.cw.prototype={
gA:function(a){return new H.f8(null,J.aZ(this.a),this.b,this.$ti)},
gl:function(a){return J.bq(this.a)},
$asX:function(a,b){return[b]}}
H.ej.prototype={$isl:1,
$asl:function(a,b){return[b]}}
H.f8.prototype={
q:function(){var t=this.b
if(t.q()){this.saq(this.c.$1(t.gt(t)))
return!0}this.saq(null)
return!1},
gt:function(a){return this.a},
saq:function(a){this.a=a},
$ascq:function(a,b){return[b]}}
H.by.prototype={
gl:function(a){return J.bq(this.a)},
w:function(a,b){return this.b.$1(J.ml(this.a,b))},
$asl:function(a,b){return[b]},
$asb9:function(a,b){return[b]},
$asX:function(a,b){return[b]}}
H.cX.prototype={
gA:function(a){return new H.hD(J.aZ(this.a),this.b,this.$ti)}}
H.hD.prototype={
q:function(){var t,s
for(t=this.a,s=this.b;t.q();)if(s.$1(t.gt(t)))return!0
return!1},
gt:function(a){var t=this.a
return t.gt(t)}}
H.b6.prototype={}
H.j6.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.j7.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.ic.prototype={
sf5:function(a){this.z=a},
sf8:function(a){this.ch=a}}
H.bh.prototype={
dW:function(){var t,s
t=this.e
s=t.a
this.c.i(0,s)
this.e0(s,t)},
c8:function(a,b){if(!this.f.E(0,a))return
if(this.Q.i(0,b)&&!this.y)this.y=!0
this.bi()},
fe:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.aA(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.c_();++r.d}this.y=!1}this.bi()},
eq:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.u(a),s=0;r=this.ch,s<r.length;s+=2)if(t.E(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).i(r,a)
t=this.ch;(t&&C.a).i(t,b)},
fd:function(a){var t,s,r
if(this.ch==null)return
for(t=J.u(a),s=0;r=this.ch,s<r.length;s+=2)if(t.E(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.L(P.t("removeRange"))
P.jC(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
dj:function(a,b){if(!this.r.E(0,a))return
this.db=b},
eZ:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.O(0,c)
return}H.b(b===1)
t=this.cx
if(t==null){t=P.jy(null,null)
this.cx=t}t.a3(0,new H.i6(a,c))},
eY:function(a,b){var t
if(!this.r.E(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.aS()
return}H.b(b===1)
t=this.cx
if(t==null){t=P.jy(null,null)
this.cx=t}t.a3(0,this.gf6())},
f_:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.Q(a)
if(b!=null)P.Q(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.br(a)
s[1]=b==null?null:b.k(0)
for(r=new P.bM(t,t.r,null,null,[null]),r.c=t.e;r.q();)r.d.O(0,s)},
au:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.R(o)
p=H.az(o)
this.f_(q,p)
if(this.db){this.aS()
if(this===u.globalState.e)throw o}}finally{this.cy=H.o9(r)
u.globalState.d=H.jY(t,"$isbh")
if(t!=null)$=t.gf4()
if(this.cx!=null)for(;n=this.cx,!n.gay(n);)this.cx.cJ().$0()}return s},
cH:function(a){return this.b.h(0,a)},
e0:function(a,b){var t=this.b
if(t.K(0,a))throw H.c(P.ch("Registry: ports must be registered only once."))
t.j(0,a,b)},
bi:function(){var t=this.b
if(t.gl(t)-this.c.a>0||this.y||!this.x)u.globalState.z.j(0,this.a,this)
else this.aS()},
aS:function(){var t,s,r
t=this.cx
if(t!=null)t.a6(0)
for(t=this.b,s=t.gbr(t),s=s.gA(s);s.q();)s.gt(s).e1()
t.a6(0)
this.c.a6(0)
u.globalState.z.aA(0,this.a)
this.dx.a6(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].O(0,t[r+1])
this.ch=null}},
gf4:function(){return this.d},
geF:function(){return this.e}}
H.i6.prototype={
$0:function(){this.a.O(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.hR.prototype={
eM:function(){var t=this.a
if(t.b===t.c)return
return t.cJ()},
cL:function(){var t,s,r
t=this.eM()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.K(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gay(s)}else s=!1
else s=!1
else s=!1
if(s)H.L(P.ch("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gay(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.at(["command","close"])
r=new H.ab(!0,P.bi(null,P.x)).R(r)
s.toString
self.postMessage(r)}return!1}t.fa()
return!0},
c3:function(){if(self.window!=null)new H.hS(this).$0()
else for(;this.cL(););},
aB:function(){var t,s,r,q,p
if(!u.globalState.x)this.c3()
else try{this.c3()}catch(r){t=H.R(r)
s=H.az(r)
q=u.globalState.Q
p=P.at(["command","error","msg",H.e(t)+"\n"+H.e(s)])
p=new H.ab(!0,P.bi(null,P.x)).R(p)
q.toString
self.postMessage(p)}}}
H.hS.prototype={
$0:function(){if(!this.a.cL())return
P.nG(C.x,this)},
$S:function(){return{func:1,v:true}}}
H.aX.prototype={
fa:function(){var t=this.a
if(t.y){C.a.i(t.z,this)
return}t.au(this.b)}}
H.ib.prototype={}
H.eS.prototype={
$0:function(){H.nd(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.eT.prototype={
$0:function(){var t,s
t=this.a
t.x=!0
if(!this.b)this.c.$1(this.d)
else{s=this.c
if(H.bm(s,{func:1,args:[P.P,P.P]}))s.$2(this.e,this.d)
else if(H.bm(s,{func:1,args:[P.P]}))s.$1(this.e)
else s.$0()}t.bi()},
$S:function(){return{func:1,v:true}}}
H.hL.prototype={}
H.bj.prototype={
O:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.nX(b)
if(t.geF()===s){s=J.a1(r)
switch(s.h(r,0)){case"pause":t.c8(s.h(r,1),s.h(r,2))
break
case"resume":t.fe(s.h(r,1))
break
case"add-ondone":t.eq(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.fd(s.h(r,1))
break
case"set-errors-fatal":t.dj(s.h(r,1),s.h(r,2))
break
case"ping":t.eZ(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.eY(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.i(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.aA(0,s)
break}return}u.globalState.f.a.a3(0,new H.aX(t,new H.id(this,r),"receive"))},
E:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bj){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gB:function(a){return this.b.a}}
H.id.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dZ(0,this.b)},
$S:function(){return{func:1}}}
H.bX.prototype={
O:function(a,b){var t,s,r
t=P.at(["command","message","port",this,"msg",b])
s=new H.ab(!0,P.bi(null,P.x)).R(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
E:function(a,b){var t,s
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
gB:function(a){return C.b.du((this.b<<16^this.a<<8)>>>0,this.c)}}
H.cJ.prototype={
e1:function(){this.c=!0
this.b=null},
dZ:function(a,b){if(this.c)return
this.b.$1(b)},
$isnx:1}
H.hk.prototype={
dN:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.a3(0,new H.aX(s,new H.hl(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){H.iF()
this.c=self.setTimeout(H.c0(new H.hm(this,b),0),a)}else{H.b(a>0)
throw H.c(P.t("Timer greater than 0."))}}}
H.hl.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.hm.prototype={
$0:function(){var t=this.a
t.c=null
H.iV()
t.d=1
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.aC.prototype={
gB:function(a){var t=this.a
t=C.b.bg(t,0)^C.b.M(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
E:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.aC){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.ab.prototype={
R:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.j(0,a,t.gl(t))
t=J.u(a)
if(!!t.$isbA)return["buffer",a]
if(!!t.$isbc)return["typed",a]
if(!!t.$isq)return this.de(a)
if(!!t.$isna){r=this.gda()
q=t.gG(a)
q=H.jz(q,r,H.ac(q,"X",0),null)
q=P.kQ(q,!0,H.ac(q,"X",0))
t=t.gbr(a)
t=H.jz(t,r,H.ac(t,"X",0),null)
return["map",q,P.kQ(t,!0,H.ac(t,"X",0))]}if(!!t.$iskN)return this.df(a)
if(!!t.$isa)this.d0(a)
if(!!t.$isnx)this.aC(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isbj)return this.dg(a)
if(!!t.$isbX)return this.dh(a)
if(!!t.$isaE){p=a.$static_name
if(p==null)this.aC(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isaC)return["capability",a.a]
if(!(a instanceof P.H))this.d0(a)
return["dart",u.classIdExtractor(a),this.dd(u.classFieldsExtractor(a))]},
aC:function(a,b){throw H.c(P.t((b==null?"Can't transmit:":b)+" "+H.e(a)))},
d0:function(a){return this.aC(a,null)},
de:function(a){var t
H.b(typeof a!=="string")
t=this.dc(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.aC(a,"Can't serialize indexable: ")},
dc:function(a){var t,s
t=[]
C.a.sl(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.R(a[s])
return t},
dd:function(a){var t
for(t=0;t<a.length;++t)C.a.j(a,t,this.R(a[t]))
return a},
df:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.aC(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sl(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.R(a[t[r]])
return["js-object",t,s]},
dh:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
dg:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.aW.prototype={
a7:function(a){var t,s,r,q
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.c(P.kj("Bad serialized message: "+H.e(a)))
switch(C.a.geU(a)){case"ref":H.b(J.G(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.b(J.G(a[0],"buffer"))
t=a[1]
C.a.i(this.b,t)
return t
case"typed":H.b(J.G(a[0],"typed"))
t=a[1]
C.a.i(this.b,t)
return t
case"fixed":H.b(J.G(a[0],"fixed"))
t=a[1]
C.a.i(this.b,t)
return J.as(H.C(this.at(t),[null]))
case"extendable":H.b(J.G(a[0],"extendable"))
t=a[1]
C.a.i(this.b,t)
return H.C(this.at(t),[null])
case"mutable":H.b(J.G(a[0],"mutable"))
t=a[1]
C.a.i(this.b,t)
return this.at(t)
case"const":H.b(J.G(a[0],"const"))
t=a[1]
C.a.i(this.b,t)
return J.as(H.C(this.at(t),[null]))
case"map":return this.eP(a)
case"sendport":return this.eQ(a)
case"raw sendport":H.b(J.G(a[0],"raw sendport"))
t=a[1]
C.a.i(this.b,t)
return t
case"js-object":return this.eO(a)
case"function":H.b(J.G(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.i(this.b,t)
return t
case"capability":H.b(J.G(a[0],"capability"))
return new H.aC(a[1])
case"dart":H.b(J.G(a[0],"dart"))
s=a[1]
r=a[2]
q=u.instanceFromClassId(s)
C.a.i(this.b,q)
this.at(r)
return u.initializeEmptyInstance(s,q,r)
default:throw H.c("couldn't deserialize: "+H.e(a))}},
at:function(a){var t
for(t=0;t<a.length;++t)C.a.j(a,t,this.a7(a[t]))
return a},
eP:function(a){var t,s,r,q,p
H.b(J.G(a[0],"map"))
t=a[1]
s=a[2]
r=P.K()
C.a.i(this.b,r)
t=J.my(t,this.geN()).fk(0)
for(q=J.a1(s),p=0;p<t.length;++p)r.j(0,t[p],this.a7(q.h(s,p)))
return r},
eQ:function(a){var t,s,r,q,p,o,n
H.b(J.G(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.cH(r)
if(o==null)return
n=new H.bj(o,s)}else n=new H.bX(t,r,s)
C.a.i(this.b,n)
return n},
eO:function(a){var t,s,r,q,p,o
H.b(J.G(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.i(this.b,r)
for(q=J.a1(t),p=J.a1(s),o=0;C.b.a9(o,q.gl(t));++o)r[q.h(t,o)]=this.a7(p.h(s,o))
return r}}
H.fM.prototype={}
H.hq.prototype={
W:function(a){var t,s,r
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
k:function(a){var t=this.b
if(t==null)return"NullError: "+H.e(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.eZ.prototype={
k:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.e(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.e(this.a)+")"}}
H.hv.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.j8.prototype={
$1:function(a){if(!!J.u(a).$isb4)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(a){return{func:1,args:[,]}}}
H.dn.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t},
$isbd:1}
H.iQ.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.iR.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.iS.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.iT.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.iU.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.aE.prototype={
k:function(a){return"Closure '"+H.bC(this).trim()+"'"},
$isjp:1,
gfs:function(){return this},
$D:null}
H.hf.prototype={}
H.h2.prototype={
k:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bs.prototype={
E:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bs))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gB:function(a){var t,s
t=this.c
if(t==null)s=H.aO(this.a)
else s=typeof t!=="object"?J.bp(t):H.aO(t)
return(s^H.aO(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.bC(t)+"'")}}
H.hs.prototype={
k:function(a){return this.a}}
H.dY.prototype={
k:function(a){return this.a}}
H.fS.prototype={
k:function(a){return"RuntimeError: "+H.e(this.a)}}
H.hF.prototype={
k:function(a){return C.h.X("Assertion failed: ",P.cg(this.a))}}
H.av.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gB:function(a){return J.bp(this.a)},
E:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.av){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.ag.prototype={
gl:function(a){return this.a},
gay:function(a){return this.a===0},
gG:function(a){return new H.f2(this,[H.a3(this,0)])},
gbr:function(a){return H.jz(this.gG(this),new H.eY(this),H.a3(this,0),H.a3(this,1))},
K:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bW(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bW(s,b)}else return this.f1(b)},
f1:function(a){var t=this.d
if(t==null)return!1
return this.ax(this.aO(t,this.aw(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.ar(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.ar(r,b)
return s==null?null:s.b}else return this.f2(b)},
f2:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.aO(t,this.aw(a))
r=this.ax(s,a)
if(r<0)return
return s[r].b},
j:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.bc()
this.b=t}this.bQ(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.bc()
this.c=s}this.bQ(s,b,c)}else{r=this.d
if(r==null){r=this.bc()
this.d=r}q=this.aw(b)
p=this.aO(r,q)
if(p==null)this.bf(r,q,[this.bd(b,c)])
else{o=this.ax(p,b)
if(o>=0)p[o].b=c
else p.push(this.bd(b,c))}}},
aA:function(a,b){if(typeof b==="string")return this.c2(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.c2(this.c,b)
else return this.f3(b)},
f3:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.aO(t,this.aw(a))
r=this.ax(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.c6(q)
return q.b},
a6:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.bb()}},
av:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.c(P.aq(this))
t=t.c}},
bQ:function(a,b,c){var t=this.ar(a,b)
if(t==null)this.bf(a,b,this.bd(b,c))
else t.b=c},
c2:function(a,b){var t
if(a==null)return
t=this.ar(a,b)
if(t==null)return
this.c6(t)
this.bY(a,b)
return t.b},
bb:function(){this.r=this.r+1&67108863},
bd:function(a,b){var t,s
t=new H.f1(a,b,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.bb()
return t},
c6:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.bb()},
aw:function(a){return J.bp(a)&0x3ffffff},
ax:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.G(a[s].a,b))return s
return-1},
k:function(a){return P.kR(this)},
ar:function(a,b){return a[b]},
aO:function(a,b){return a[b]},
bf:function(a,b,c){H.b(c!=null)
a[b]=c},
bY:function(a,b){delete a[b]},
bW:function(a,b){return this.ar(a,b)!=null},
bc:function(){var t=Object.create(null)
this.bf(t,"<non-identifier-key>",t)
this.bY(t,"<non-identifier-key>")
return t},
$isna:1}
H.eY.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(a){return{func:1,args:[,]}}}
H.f1.prototype={}
H.f2.prototype={
gl:function(a){return this.a.a},
gA:function(a){var t,s
t=this.a
s=new H.f3(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.f3.prototype={
gt:function(a){return this.d},
q:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.aq(t))
else{t=this.c
if(t==null){this.sbP(null)
return!1}else{this.sbP(t.a)
this.c=this.c.c
return!0}}},
sbP:function(a){this.d=a}}
H.iM.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[,]}}}
H.iN.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(a,b){return{func:1,args:[,P.p]}}}
H.iO.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[P.p]}}}
H.bA.prototype={
gF:function(a){return C.ab},
$isbA:1}
H.bc.prototype={$isbc:1}
H.fj.prototype={
gF:function(a){return C.ac}}
H.cz.prototype={
gl:function(a){return a.length},
$isq:1,
$asq:function(){},
$isv:1,
$asv:function(){}}
H.cA.prototype={
h:function(a,b){H.an(b,a,a.length)
return a[b]},
j:function(a,b,c){H.an(b,a,a.length)
a[b]=c},
$isl:1,
$asl:function(){return[P.a0]},
$asb6:function(){return[P.a0]},
$asm:function(){return[P.a0]},
$isj:1,
$asj:function(){return[P.a0]}}
H.cB.prototype={
j:function(a,b,c){H.an(b,a,a.length)
a[b]=c},
$isl:1,
$asl:function(){return[P.x]},
$asb6:function(){return[P.x]},
$asm:function(){return[P.x]},
$isj:1,
$asj:function(){return[P.x]}}
H.cy.prototype={
gF:function(a){return C.ad},
$iseH:1}
H.fk.prototype={
gF:function(a){return C.ae}}
H.fl.prototype={
gF:function(a){return C.af},
h:function(a,b){H.an(b,a,a.length)
return a[b]}}
H.fm.prototype={
gF:function(a){return C.ag},
h:function(a,b){H.an(b,a,a.length)
return a[b]},
$iskK:1}
H.fn.prototype={
gF:function(a){return C.ah},
h:function(a,b){H.an(b,a,a.length)
return a[b]}}
H.fo.prototype={
gF:function(a){return C.al},
h:function(a,b){H.an(b,a,a.length)
return a[b]},
$islf:1}
H.fp.prototype={
gF:function(a){return C.am},
h:function(a,b){H.an(b,a,a.length)
return a[b]},
$islg:1}
H.cC.prototype={
gF:function(a){return C.an},
gl:function(a){return a.length},
h:function(a,b){H.an(b,a,a.length)
return a[b]}}
H.fq.prototype={
gF:function(a){return C.ao},
gl:function(a){return a.length},
h:function(a,b){H.an(b,a,a.length)
return a[b]},
$islh:1}
H.bO.prototype={}
H.bP.prototype={}
H.bQ.prototype={}
H.bR.prototype={}
P.hH.prototype={
$1:function(a){var t,s
H.iV()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(a){return{func:1,args:[,]}}}
P.hG.prototype={
$1:function(a){var t,s
t=this.a
H.b(t.a==null)
H.iF()
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(a){return{func:1,args:[{func:1,v:true}]}}}
P.hI.prototype={
$0:function(){H.iV()
this.a.$0()},
$S:function(){return{func:1}}}
P.hJ.prototype={
$0:function(){H.iV()
this.a.$0()},
$S:function(){return{func:1}}}
P.jm.prototype={}
P.hM.prototype={}
P.ir.prototype={
eD:function(a,b){var t=this.a
if(t.a!==0)throw H.c(P.jE("Future already completed"))
t.b7(b)}}
P.d5.prototype={
f9:function(a){if(this.c!==6)return!0
H.b(!0)
return this.b.b.bq(this.d,a.a)},
eX:function(a){var t,s
t=(this.c&2)!==0
if(t){H.b(t)
t=this.e!=null}else t=!1
H.b(t)
s=this.e
t=this.b.b
if(H.bm(s,{func:1,args:[P.H,P.bd]}))return t.ff(s,a.a,a.b)
else return t.bq(s,a.a)}}
P.am.prototype={
cQ:function(a,b){var t,s,r
t=$.E
if(t!==C.f){t.toString
if(b!=null)b=P.o1(b,t)}s=new P.am(0,t,null,[null])
r=b==null?1:3
this.bR(new P.d5(null,s,r,a,b,[H.a3(this,0),null]))
return s},
cP:function(a){return this.cQ(a,null)},
b4:function(a){H.b(this.a<4)
H.b(a.a>=4)
this.a=a.a
this.c=a.c},
bR:function(a){var t
H.b(a.a==null)
t=this.a
if(t<=1){a.a=H.jY(this.c,"$isd5")
this.c=a}else{if(t===2){H.b(!0)
t=this.c
if(t.a<4){t.bR(a)
return}this.b4(t)}H.b(this.a>=4)
t=this.b
t.toString
P.iz(null,null,t,new P.hW(this,a))}},
c1:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.b(!0)
s=this.c
if(s.a<4){s.c1(a)
return}this.b4(s)}H.b(this.a>=4)
t.a=this.aP(a)
s=this.b
s.toString
P.iz(null,null,s,new P.i_(t,this))}},
be:function(){H.b(this.a<4)
var t=this.c
this.c=null
return this.aP(t)},
aP:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
b7:function(a){var t,s,r
H.b(this.a<4)
t=this.$ti
s=H.iA(a,"$iseL",t,"$aseL")
if(s){t=H.iA(a,"$isam",t,null)
if(t)P.ll(a,this)
else P.nS(a,this)}else{r=this.be()
H.b(this.a<4)
this.a=4
this.c=a
P.bK(this,r)}},
aL:function(a,b){var t
H.b(this.a<4)
t=this.be()
H.b(this.a<4)
this.a=8
this.c=new P.b_(a,b)
P.bK(this,t)},
e3:function(a){return this.aL(a,null)},
$iseL:1,
gbh:function(){return this.a},
gej:function(){return this.c}}
P.hW.prototype={
$0:function(){P.bK(this.a,this.b)},
$S:function(){return{func:1}}}
P.i_.prototype={
$0:function(){P.bK(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.hX.prototype={
$1:function(a){var t=this.a
H.b(t.a===1)
H.b(t.a===1)
t.a=0
t.b7(a)},
$S:function(a){return{func:1,args:[,]}}}
P.hY.prototype={
$2:function(a,b){var t=this.a
H.b(t.a===1)
t.aL(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(a,b){return{func:1,args:[,],opt:[,]}}}
P.hZ.prototype={
$0:function(){this.a.aL(this.b,this.c)},
$S:function(){return{func:1}}}
P.i2.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.c
p=q.c
H.b((p&1)===0)
o=(p&2)===0
H.b(o)
t=null
try{H.b(o)
H.b(p===8)
t=q.b.b.cK(q.d)}catch(n){s=H.R(n)
r=H.az(n)
if(this.d){q=this.a.a
H.b(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.b(q.a===8)
p.b=q.c}else p.b=new P.b_(s,r)
p.a=!0
return}if(!!J.u(t).$iseL){if(t instanceof P.am&&t.gbh()>=4){if(t.gbh()===8){q=t
H.b(q.gbh()===8)
p=this.b
p.b=q.gej()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.cP(new P.i3(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.i3.prototype={
$1:function(a){return this.a},
$S:function(a){return{func:1,args:[,]}}}
P.i1.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.b((r.c&1)!==0)
this.a.b=r.b.b.bq(r.d,this.c)}catch(q){t=H.R(q)
s=H.az(q)
r=this.a
r.b=new P.b_(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.i0.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.b(q.a===8)
t=q.c
q=this.c
if(q.f9(t)){H.b((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.eX(t)
p.a=!1}}catch(o){s=H.R(o)
r=H.az(o)
q=this.a
p=q.a
H.b(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.b(q.a===8)
m.b=q.c}else m.b=new P.b_(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.cY.prototype={}
P.h7.prototype={
gl:function(a){var t,s
t={}
s=new P.am(0,$.E,null,[P.x])
t.a=0
this.f7(new P.h9(t),!0,new P.ha(t,s),s.ge2())
return s}}
P.h9.prototype={
$1:function(a){++this.a.a},
$S:function(a){return{func:1,args:[,]}}}
P.ha.prototype={
$0:function(){this.b.b7(this.a.a)},
$S:function(){return{func:1}}}
P.h8.prototype={}
P.jF.prototype={}
P.b_.prototype={
k:function(a){return H.e(this.a)},
$isb4:1}
P.iv.prototype={}
P.iy.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.cG()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.c(t)
r=H.c(t)
r.stack=s.k(0)
throw r},
$S:function(){return{func:1}}}
P.ig.prototype={
fg:function(a){var t,s,r
try{if(C.f===$.E){a.$0()
return}P.lr(null,null,this,a)}catch(r){t=H.R(r)
s=H.az(r)
P.ix(null,null,this,t,s)}},
fh:function(a,b){var t,s,r
try{if(C.f===$.E){a.$1(b)
return}P.ls(null,null,this,a,b)}catch(r){t=H.R(r)
s=H.az(r)
P.ix(null,null,this,t,s)}},
ex:function(a){return new P.ii(this,a)},
bj:function(a){return new P.ih(this,a)},
ey:function(a){return new P.ij(this,a)},
h:function(a,b){return},
cK:function(a){if($.E===C.f)return a.$0()
return P.lr(null,null,this,a)},
bq:function(a,b){if($.E===C.f)return a.$1(b)
return P.ls(null,null,this,a,b)},
ff:function(a,b,c){if($.E===C.f)return a.$2(b,c)
return P.o2(null,null,this,a,b,c)}}
P.ii.prototype={
$0:function(){return this.a.cK(this.b)},
$S:function(){return{func:1}}}
P.ih.prototype={
$0:function(){return this.a.fg(this.b)},
$S:function(){return{func:1}}}
P.ij.prototype={
$1:function(a){return this.a.fh(this.b,a)},
$S:function(a){return{func:1,args:[,]}}}
P.i9.prototype={
aw:function(a){return H.ov(a)&0x3ffffff},
ax:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.i7.prototype={
gA:function(a){var t=new P.bM(this,this.r,null,null,[null])
t.c=this.e
return t},
gl:function(a){return this.a},
I:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.e4(b)},
e4:function(a){var t=this.d
if(t==null)return!1
return this.aN(t[this.aM(a)],a)>=0},
cH:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.I(0,a)?a:null
else return this.ed(a)},
ed:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.aM(a)]
r=this.aN(s,a)
if(r<0)return
return J.bo(s,r).ge6()},
i:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.jO()
this.b=t}return this.bT(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.jO()
this.c=s}return this.bT(s,b)}else return this.a3(0,b)},
a3:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.jO()
this.d=t}s=this.aM(b)
r=t[s]
if(r==null){q=[this.b6(b)]
H.b(q!=null)
t[s]=q}else{if(this.aN(r,b)>=0)return!1
r.push(this.b6(b))}return!0},
aA:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bU(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bU(this.c,b)
else return this.ee(0,b)},
ee:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.aM(b)]
r=this.aN(s,b)
if(r<0)return!1
this.bV(s.splice(r,1)[0])
return!0},
a6:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.b5()}},
bT:function(a,b){var t
if(a[b]!=null)return!1
t=this.b6(b)
H.b(!0)
a[b]=t
return!0},
bU:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bV(t)
delete a[b]
return!0},
b5:function(){this.r=this.r+1&67108863},
b6:function(a){var t,s
t=new P.i8(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.b5()
return t},
bV:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.b5()},
aM:function(a){return J.bp(a)&0x3ffffff},
aN:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.G(a[s].a,b))return s
return-1}}
P.i8.prototype={
ge6:function(){return this.a}}
P.bM.prototype={
gt:function(a){return this.d},
q:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.aq(t))
else{t=this.c
if(t==null){this.sap(null)
return!1}else{this.sap(t.a)
this.c=this.c.b
return!0}}},
sap:function(a){this.d=a}}
P.i5.prototype={}
P.jw.prototype={$isl:1}
P.ct.prototype={$isl:1,$isj:1}
P.m.prototype={
gA:function(a){return new H.cu(a,this.gl(a),0,null,[H.ac(a,"m",0)])},
w:function(a,b){return this.h(a,b)},
cI:function(a,b){return new H.by(a,b,[H.ac(a,"m",0),null])},
eW:function(a,b,c){var t,s,r,q
t=this.gl(a)
for(s=b,r=0;C.b.a9(r,t);++r){s=c.$2(s,this.h(a,r))
q=this.gl(a)
if(t==null?q!=null:t!==q)throw H.c(P.aq(a))}return s},
cD:function(a,b,c,d){var t
P.jC(b,c,this.gl(a),null,null,null)
for(t=b;t<c;++t)this.j(a,t,d)},
k:function(a){return P.eU(a,"[","]")}}
P.cv.prototype={}
P.f7.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.e(a)
t.a=s+": "
t.a+=H.e(b)},
$S:function(a,b){return{func:1,args:[,,]}}}
P.bb.prototype={
av:function(a,b){var t,s
for(t=J.aZ(this.gG(a));t.q();){s=t.gt(t)
b.$2(s,this.h(a,s))}},
gl:function(a){return J.bq(this.gG(a))},
k:function(a){return P.kR(a)}}
P.f4.prototype={
dH:function(a,b){var t
H.b(!0)
t=new Array(8)
t.fixed$length=Array
this.sc4(H.C(t,[b]))},
gA:function(a){return new P.ia(this,this.c,this.d,this.b,null,this.$ti)},
gay:function(a){return this.b===this.c},
gl:function(a){return(this.c-this.b&this.a.length-1)>>>0},
w:function(a,b){var t=this.gl(this)
if(C.b.a2(0,b)||b>=t)H.L(P.D(b,this,"index",null,t))
return this.a[(C.b.X(this.b,b)&this.a.length-1)>>>0]},
a6:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
k:function(a){return P.eU(this,"{","}")},
cJ:function(){var t,s,r
t=this.b
if(t===this.c)throw H.c(H.eV());++this.d
s=this.a
r=s[t]
s[t]=null
this.b=(t+1&s.length-1)>>>0
return r},
a3:function(a,b){var t,s
t=this.a
s=this.c
t[s]=b
t=(s+1&t.length-1)>>>0
this.c=t
if(this.b===t)this.c_();++this.d},
c_:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.C(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.bC(s,0,q,t,r)
C.a.bC(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sc4(s)},
sc4:function(a){this.a=a}}
P.ia.prototype={
gt:function(a){return this.e},
q:function(){var t,s
t=this.a
if(this.c!==t.d)H.L(P.aq(t))
s=this.d
if(s===this.b){this.sap(null)
return!1}this.sap(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sap:function(a){this.e=a}}
P.fV.prototype={
N:function(a,b){var t
for(t=J.aZ(b);t.q();)this.i(0,t.gt(t))},
k:function(a){return P.eU(this,"{","}")},
$isl:1}
P.fU.prototype={}
P.bN.prototype={}
P.ao.prototype={}
P.J.prototype={}
P.b3.prototype={
E:function(a,b){if(b==null)return!1
if(!(b instanceof P.b3))return!1
return this.a===b.a&&this.b===b.b},
a0:function(a,b){return C.b.a0(this.a,b.a)},
gB:function(a){var t=this.a
return(t^C.b.bg(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.mX(H.nu(this))
s=P.c9(H.ns(this))
r=P.c9(H.no(this))
q=P.c9(H.np(this))
p=P.c9(H.nr(this))
o=P.c9(H.nt(this))
n=P.mY(H.nq(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isJ:1,
$asJ:function(){return[P.b3]}}
P.a0.prototype={}
P.aG.prototype={
a9:function(a,b){return C.b.a9(this.a,b.ge5())},
a2:function(a,b){return C.b.a2(this.a,b.ge5())},
E:function(a,b){if(b==null)return!1
if(!(b instanceof P.aG))return!1
return this.a===b.a},
gB:function(a){return this.a&0x1FFFFFFF},
a0:function(a,b){return C.b.a0(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.ei()
s=this.a
if(s<0)return"-"+new P.aG(0-s).k(0)
r=t.$1(C.b.M(s,6e7)%60)
q=t.$1(C.b.M(s,1e6)%60)
p=new P.eh().$1(s%1e6)
return""+C.b.M(s,36e8)+":"+H.e(r)+":"+H.e(q)+"."+H.e(p)},
$isJ:1,
$asJ:function(){return[P.aG]}}
P.eh.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(a){return{func:1,ret:P.p,args:[P.x]}}}
P.ei.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(a){return{func:1,ret:P.p,args:[P.x]}}}
P.b4.prototype={}
P.c6.prototype={
k:function(a){return"Assertion failed"}}
P.cG.prototype={
k:function(a){return"Throw of null."}}
P.a5.prototype={
gb9:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gb8:function(){return""},
k:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.e(t)
q=this.gb9()+s+r
if(!this.a)return q
p=this.gb8()
o=P.cg(this.b)
return q+p+": "+H.e(o)}}
P.cI.prototype={
gb9:function(){return"RangeError"},
gb8:function(){var t,s,r
H.b(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.e(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.e(t)
else if(r>t)s=": Not in range "+H.e(t)+".."+H.e(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.e(t)}return s}}
P.eR.prototype={
gb9:function(){return"RangeError"},
gb8:function(){H.b(this.a)
if(J.m2(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.e(t)},
gl:function(a){return this.f}}
P.hw.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.hu.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.be.prototype={
k:function(a){return"Bad state: "+this.a}}
P.e_.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.e(P.cg(t))+"."}}
P.cO.prototype={
k:function(a){return"Stack Overflow"},
$isb4:1}
P.e8.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.jo.prototype={}
P.hV.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.e(t)}}
P.eK.prototype={
k:function(a){var t,s,r
t=this.a
s=""!==t?"FormatException: "+t:"FormatException"
r=this.b
if(typeof r!=="string")return s
if(r.length>78)r=C.h.aZ(r,0,75)+"..."
return s+"\n"+r}}
P.el.prototype={
h:function(a,b){var t,s
t=this.a
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.L(P.jk(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.kV(b,"expando$values")
return s==null?null:H.kV(s,t)},
k:function(a){return"Expando:"+H.e(this.b)}}
P.x.prototype={}
P.X.prototype={
aV:function(a,b){return new H.cX(this,b,[H.ac(this,"X",0)])},
gl:function(a){var t,s
H.b(!this.$isl)
t=this.gA(this)
for(s=0;t.q();)++s
return s},
gad:function(a){var t,s
t=this.gA(this)
if(!t.q())throw H.c(H.eV())
s=t.gt(t)
if(t.q())throw H.c(H.ni())
return s},
w:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.mO("index"))
if(b<0)H.L(P.aP(b,0,null,"index",null))
for(t=this.gA(this),s=0;t.q();){r=t.gt(t)
if(b===s)return r;++s}throw H.c(P.D(b,this,"index",null,s))},
k:function(a){return P.ng(this,"(",")")}}
P.cq.prototype={}
P.j.prototype={$isl:1}
P.ba.prototype={}
P.P.prototype={
gB:function(a){return P.H.prototype.gB.call(this,this)},
k:function(a){return"null"}}
P.ad.prototype={$isJ:1,
$asJ:function(){return[P.ad]}}
P.H.prototype={constructor:P.H,$isH:1,
E:function(a,b){return this===b},
gB:function(a){return H.aO(this)},
k:function(a){return"Instance of '"+H.bC(this)+"'"},
gF:function(a){return new H.av(H.iK(this),null)},
toString:function(){return this.k(this)}}
P.bd.prototype={}
P.p.prototype={$isJ:1,
$asJ:function(){return[P.p]}}
P.bE.prototype={
gl:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
gaf:function(){return this.a}}
P.jI.prototype={}
W.k.prototype={}
W.c5.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
W.dQ.prototype={
gl:function(a){return a.length}}
W.dR.prototype={
k:function(a){return String(a)}}
W.dS.prototype={
k:function(a){return String(a)}}
W.aB.prototype={$isaB:1}
W.c7.prototype={
d7:function(a,b,c){var t=this.e8(a,b,P.oc(c,null))
return t},
e8:function(a,b,c){return a.getContext(b,c)}}
W.dX.prototype={
aW:function(a){return P.iC(a.getContextAttributes())}}
W.aD.prototype={
gl:function(a){return a.length}}
W.e0.prototype={
gl:function(a){return a.length}}
W.e1.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.e2.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
W.e3.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
W.b1.prototype={
bS:function(a,b){var t,s
t=$.$get$kx()
s=t[b]
if(typeof s==="string")return s
s=this.en(a,b)
t[b]=s
return s},
en:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.mZ()+b
if(t in a)return t
return b},
gl:function(a){return a.length}}
W.e4.prototype={}
W.a6.prototype={}
W.b2.prototype={}
W.e5.prototype={
gl:function(a){return a.length}}
W.e6.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
W.e7.prototype={
gl:function(a){return a.length}}
W.e9.prototype={
h:function(a,b){return a[b]},
gl:function(a){return a.length}}
W.ea.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
W.ca.prototype={}
W.bt.prototype={
er:function(a,b){return a.adoptNode(b)},
bX:function(a,b){return a.createEvent(b)},
bt:function(a,b){return a.getElementsByTagName(b)},
d8:function(a,b){return a.getElementById(b)},
fb:function(a,b){return a.querySelector(b)},
gbl:function(a){return new W.bg(a,"change",!1,[W.h])},
gbm:function(a){return new W.bg(a,"input",!1,[W.h])},
gbn:function(a){return new W.bg(a,"mousemove",!1,[W.M])}}
W.eb.prototype={
k:function(a){return String(a)}}
W.cb.prototype={
eJ:function(a,b){return a.createHTMLDocument(b)}}
W.ec.prototype={
gZ:function(a){return a.a},
gU:function(a){return a.b},
ga5:function(a){return a.c}}
W.cc.prototype={
gZ:function(a){return a.a},
gU:function(a){return a.b},
ga5:function(a){return a.c}}
W.ed.prototype={
gaD:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
W.cd.prototype={
gaD:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
W.ce.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[P.Z]},
$isl:1,
$asl:function(){return[P.Z]},
$isv:1,
$asv:function(){return[P.Z]},
$asm:function(){return[P.Z]},
$isj:1,
$asj:function(){return[P.Z]},
$asn:function(){return[P.Z]}}
W.cf.prototype={
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gaj(a))+" x "+H.e(this.gah(a))},
E:function(a,b){var t
if(b==null)return!1
t=J.u(b)
if(!t.$isZ)return!1
return a.left===t.gcF(b)&&a.top===t.gcR(b)&&this.gaj(a)===t.gaj(b)&&this.gah(a)===t.gah(b)},
gB:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gaj(a)
q=this.gah(a)
return W.lp(W.aY(W.aY(W.aY(W.aY(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gah:function(a){return a.height},
gcF:function(a){return a.left},
gcR:function(a){return a.top},
gaj:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isZ:1,
$asZ:function(){}}
W.ee.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[P.p]},
$isl:1,
$asl:function(){return[P.p]},
$isv:1,
$asv:function(){return[P.p]},
$asm:function(){return[P.p]},
$isj:1,
$asj:function(){return[P.p]},
$asn:function(){return[P.p]}}
W.ef.prototype={
gl:function(a){return a.length}}
W.a7.prototype={
gev:function(a){return new W.hQ(a)},
k:function(a){return a.localName},
V:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.kG
if(t==null){t=H.C([],[W.cE])
s=new W.cF(t)
C.a.i(t,W.lm(null))
C.a.i(t,W.lq())
$.kG=s
d=s}else d=t
t=$.kF
if(t==null){t=new W.dy(d)
$.kF=t
c=t}else{t.a=d
c=t}}if($.ar==null){t=document
s=t.implementation
s=(s&&C.J).eJ(s,"")
$.ar=s
$.jn=s.createRange()
s=$.ar
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.ar.head;(t&&C.K).a_(t,r)}t=$.ar
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.jY(s,"$isaB")}t=$.ar
if(!!this.$isaB)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.ar.body;(t&&C.q).a_(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.I(C.U,a.tagName)){t=$.jn;(t&&C.C).d9(t,q)
t=$.jn
p=(t&&C.C).eH(t,b)}else{q.innerHTML=b
p=$.ar.createDocumentFragment()
for(t=J.i(p);s=q.firstChild,s!=null;)t.a_(p,s)}t=$.ar.body
if(q==null?t!=null:q!==t)J.kd(q)
c.bA(p)
C.j.er(document,p)
return p},
eI:function(a,b,c){return this.V(a,b,c,null)},
dk:function(a,b,c,d){a.textContent=null
this.a_(a,this.V(a,b,c,d))},
bB:function(a,b){return this.dk(a,b,null,null)},
ak:function(a,b){return a.getAttribute(b)},
ef:function(a,b){return a.removeAttribute(b)},
gbl:function(a){return new W.ax(a,"change",!1,[W.h])},
gbm:function(a){return new W.ax(a,"input",!1,[W.h])},
gbn:function(a){return new W.ax(a,"mousemove",!1,[W.M])},
$isa7:1,
gf0:function(a){return a.id},
gfi:function(a){return a.tagName}}
W.ek.prototype={
$1:function(a){return!!J.u(a).$isa7},
$S:function(a){return{func:1,args:[,]}}}
W.h.prototype={
gcM:function(a){return W.nY(a.target)},
ea:function(a,b,c,d){return a.initEvent(b,!0,!0)},
$ish:1}
W.f.prototype={
e_:function(a,b,c,d){return a.addEventListener(b,H.c0(c,1),!1)},
cv:function(a,b){return a.dispatchEvent(b)},
$isf:1}
W.eE.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.ci]},
$isl:1,
$asl:function(){return[W.ci]},
$isv:1,
$asv:function(){return[W.ci]},
$asm:function(){return[W.ci]},
$isj:1,
$asj:function(){return[W.ci]},
$asn:function(){return[W.ci]}}
W.eF.prototype={
gl:function(a){return a.length}}
W.eJ.prototype={
gl:function(a){return a.length}}
W.eM.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
W.co.prototype={}
W.eN.prototype={
gl:function(a){return a.length}}
W.bv.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.r]},
$isl:1,
$asl:function(){return[W.r]},
$isv:1,
$asv:function(){return[W.r]},
$asm:function(){return[W.r]},
$isj:1,
$asj:function(){return[W.r]},
$asn:function(){return[W.r]}}
W.cp.prototype={}
W.eO.prototype={
O:function(a,b){return a.send(b)}}
W.bw.prototype={}
W.b7.prototype={$isb7:1}
W.aL.prototype={$isaL:1}
W.f5.prototype={
k:function(a){return String(a)}}
W.f6.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
W.fe.prototype={
gl:function(a){return a.length}}
W.fg.prototype={
ft:function(a,b,c){return a.send(b,c)},
O:function(a,b){return a.send(b)}}
W.bz.prototype={}
W.fh.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cx]},
$isl:1,
$asl:function(){return[W.cx]},
$isv:1,
$asv:function(){return[W.cx]},
$asm:function(){return[W.cx]},
$isj:1,
$asj:function(){return[W.cx]},
$asn:function(){return[W.cx]}}
W.M.prototype={$isM:1}
W.T.prototype={
gad:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.c(P.jE("No elements"))
if(s>1)throw H.c(P.jE("More than one element"))
return t.firstChild},
N:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.i(s),p=0;p<r;++p)q.a_(s,t.firstChild)
return},
j:function(a,b,c){var t=this.a
J.m4(t,c,C.A.h(t.childNodes,b))},
gA:function(a){var t=this.a.childNodes
return new W.cj(t,t.length,-1,null,[H.ac(t,"n",0)])},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){return C.A.h(this.a.childNodes,b)},
$asl:function(){return[W.r]},
$asct:function(){return[W.r]},
$asm:function(){return[W.r]},
$asj:function(){return[W.r]},
$asbN:function(){return[W.r]}}
W.r.prototype={
fc:function(a){var t=a.parentNode
if(t!=null)J.j9(t,a)},
k:function(a){var t=a.nodeValue
return t==null?this.dq(a):t},
a_:function(a,b){return a.appendChild(b)},
eg:function(a,b){return a.removeChild(b)},
eh:function(a,b,c){return a.replaceChild(b,c)},
$isr:1,
gbo:function(a){return a.previousSibling}}
W.cD.prototype={
bp:function(a){return a.previousNode()}}
W.bB.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.r]},
$isl:1,
$asl:function(){return[W.r]},
$isv:1,
$asv:function(){return[W.r]},
$asm:function(){return[W.r]},
$isj:1,
$asj:function(){return[W.r]},
$asn:function(){return[W.r]}}
W.ai.prototype={
gl:function(a){return a.length}}
W.fE.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.ai]},
$isl:1,
$asl:function(){return[W.ai]},
$isv:1,
$asv:function(){return[W.ai]},
$asm:function(){return[W.ai]},
$isj:1,
$asj:function(){return[W.ai]},
$asn:function(){return[W.ai]}}
W.fH.prototype={
O:function(a,b){return a.send(b)}}
W.cH.prototype={
eH:function(a,b){return a.createContextualFragment(b)},
d9:function(a,b){return a.selectNodeContents(b)}}
W.cK.prototype={
O:function(a,b){return a.send(b)}}
W.fT.prototype={
gl:function(a){return a.length}}
W.au.prototype={}
W.fZ.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cM]},
$isl:1,
$asl:function(){return[W.cM]},
$isv:1,
$asv:function(){return[W.cM]},
$asm:function(){return[W.cM]},
$isj:1,
$asj:function(){return[W.cM]},
$asn:function(){return[W.cM]}}
W.h0.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cN]},
$isl:1,
$asl:function(){return[W.cN]},
$isv:1,
$asv:function(){return[W.cN]},
$asm:function(){return[W.cN]},
$isj:1,
$asj:function(){return[W.cN]},
$asn:function(){return[W.cN]}}
W.aj.prototype={
gl:function(a){return a.length}}
W.h5.prototype={
h:function(a,b){return this.bZ(a,b)},
av:function(a,b){var t,s
for(t=0;!0;++t){s=this.ec(a,t)
if(s==null)return
b.$2(s,this.bZ(a,s))}},
gG:function(a){var t=H.C([],[P.p])
this.av(a,new W.h6(t))
return t},
gl:function(a){return a.length},
bZ:function(a,b){return a.getItem(b)},
ec:function(a,b){return a.key(b)},
$asbb:function(){return[P.p,P.p]}}
W.h6.prototype={
$2:function(a,b){return C.a.i(this.a,a)},
$S:function(a,b){return{func:1,args:[,,]}}}
W.cQ.prototype={
V:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.b_(a,b,c,d)
t=W.n_("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.T(s).N(0,new W.T(t))
return s}}
W.hd.prototype={
V:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.b_(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.H.V(t.createElement("table"),b,c,d)
t.toString
t=new W.T(t)
r=t.gad(t)
r.toString
t=new W.T(r)
q=t.gad(t)
s.toString
q.toString
new W.T(s).N(0,new W.T(q))
return s}}
W.he.prototype={
V:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.b_(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.H.V(t.createElement("table"),b,c,d)
t.toString
t=new W.T(t)
r=t.gad(t)
s.toString
r.toString
new W.T(s).N(0,new W.T(r))
return s}}
W.bF.prototype={$isbF:1}
W.hg.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cS]},
$isl:1,
$asl:function(){return[W.cS]},
$isv:1,
$asv:function(){return[W.cS]},
$asm:function(){return[W.cS]},
$isj:1,
$asj:function(){return[W.cS]},
$asn:function(){return[W.cS]}}
W.hh.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cR]},
$isl:1,
$asl:function(){return[W.cR]},
$isv:1,
$asv:function(){return[W.cR]},
$asm:function(){return[W.cR]},
$isj:1,
$asj:function(){return[W.cR]},
$asn:function(){return[W.cR]}}
W.hj.prototype={
gl:function(a){return a.length}}
W.aS.prototype={$isaS:1}
W.hn.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cV]},
$isl:1,
$asl:function(){return[W.cV]},
$isv:1,
$asv:function(){return[W.cV]},
$asm:function(){return[W.cV]},
$isj:1,
$asj:function(){return[W.cV]},
$asn:function(){return[W.cV]}}
W.ho.prototype={
gl:function(a){return a.length}}
W.cW.prototype={
bp:function(a){return a.previousNode()}}
W.aT.prototype={}
W.hx.prototype={
k:function(a){return String(a)}}
W.hz.prototype={
gm:function(a){return a.x},
gD:function(a){return a.z}}
W.hB.prototype={
gl:function(a){return a.length}}
W.hC.prototype={
O:function(a,b){return a.send(b)}}
W.aV.prototype={
geL:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.t("deltaY is not supported"))},
$isaV:1}
W.bJ.prototype={
geu:function(a){var t,s
t=P.ad
s=new P.am(0,$.E,null,[t])
this.e7(a)
this.ei(a,W.lv(new W.hE(new P.ir(s,[t]))))
return s},
ei:function(a,b){return a.requestAnimationFrame(H.c0(b,1))},
e7:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.hE.prototype={
$1:function(a){this.a.eD(0,a)},
$S:function(a){return{func:1,args:[,]}}}
W.jK.prototype={}
W.hN.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.c8]},
$isl:1,
$asl:function(){return[W.c8]},
$isv:1,
$asv:function(){return[W.c8]},
$asm:function(){return[W.c8]},
$isj:1,
$asj:function(){return[W.c8]},
$asn:function(){return[W.c8]}}
W.hP.prototype={
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
E:function(a,b){var t
if(b==null)return!1
t=J.u(b)
if(!t.$isZ)return!1
return a.left===t.gcF(b)&&a.top===t.gcR(b)&&a.width===t.gaj(b)&&a.height===t.gah(b)},
gB:function(a){var t,s,r,q
t=a.left
s=a.top
r=a.width
q=a.height
return W.lp(W.aY(W.aY(W.aY(W.aY(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gah:function(a){return a.height},
gaj:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.i4.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cm]},
$isl:1,
$asl:function(){return[W.cm]},
$isv:1,
$asv:function(){return[W.cm]},
$asm:function(){return[W.cm]},
$isj:1,
$asj:function(){return[W.cm]},
$asn:function(){return[W.cm]}}
W.dc.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.r]},
$isl:1,
$asl:function(){return[W.r]},
$isv:1,
$asv:function(){return[W.r]},
$asm:function(){return[W.r]},
$isj:1,
$asj:function(){return[W.r]},
$asn:function(){return[W.r]}}
W.io.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.aj]},
$isl:1,
$asl:function(){return[W.aj]},
$isv:1,
$asv:function(){return[W.aj]},
$asm:function(){return[W.aj]},
$isj:1,
$asj:function(){return[W.aj]},
$asn:function(){return[W.aj]}}
W.ip.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cP]},
$isl:1,
$asl:function(){return[W.cP]},
$isv:1,
$asv:function(){return[W.cP]},
$asm:function(){return[W.cP]},
$isj:1,
$asj:function(){return[W.cP]},
$asn:function(){return[W.cP]}}
W.hK.prototype={
av:function(a,b){var t,s,r,q,p,o
for(t=this.gG(this),s=t.length,r=this.a,q=J.i(r),p=0;p<t.length;t.length===s||(0,H.A)(t),++p){o=t[p]
b.$2(o,q.ak(r,o))}},
gG:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.C([],[P.p])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.i(s,p.name)}return s},
$ascv:function(){return[P.p,P.p]},
$asbb:function(){return[P.p,P.p]},
ge9:function(){return this.a}}
W.hQ.prototype={
h:function(a,b){return J.ji(this.a,b)},
gl:function(a){return this.gG(this).length}}
W.bg.prototype={
f7:function(a,b,c,d){return W.U(this.a,this.b,a,!1,H.a3(this,0))}}
W.ax.prototype={}
W.hT.prototype={
dU:function(a,b,c,d,e){this.ep()},
ep:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.m3(r,this.c,t,!1)}}}
W.hU.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(a){return{func:1,args:[,]}}}
W.bL.prototype={
dV:function(a){var t,s
t=$.$get$jN()
if(t.gay(t)){for(s=0;s<262;++s)t.j(0,C.T[s],W.oi())
for(s=0;s<12;++s)t.j(0,C.t[s],W.oj())}},
ag:function(a){return $.$get$ln().I(0,W.bu(a))},
a4:function(a,b,c){var t,s,r
t=W.bu(a)
s=$.$get$jN()
r=s.h(0,H.e(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)}}
W.n.prototype={
gA:function(a){return new W.cj(a,this.gl(a),-1,null,[H.ac(a,"n",0)])}}
W.cF.prototype={
ag:function(a){return C.a.c9(this.a,new W.fs(a))},
a4:function(a,b,c){return C.a.c9(this.a,new W.fr(a,b,c))}}
W.fs.prototype={
$1:function(a){return a.ag(this.a)},
$S:function(a){return{func:1,args:[,]}}}
W.fr.prototype={
$1:function(a){return a.a4(this.a,this.b,this.c)},
$S:function(a){return{func:1,args:[,]}}}
W.bS.prototype={
dY:function(a,b,c,d){var t,s,r
this.a.N(0,c)
t=b.aV(0,new W.il())
s=b.aV(0,new W.im())
this.b.N(0,t)
r=this.c
r.N(0,C.V)
r.N(0,s)},
ag:function(a){return this.a.I(0,W.bu(a))},
a4:function(a,b,c){var t,s
t=W.bu(a)
s=this.c
if(s.I(0,H.e(t)+"::"+b))return this.d.es(c)
else if(s.I(0,"*::"+b))return this.d.es(c)
else{s=this.b
if(s.I(0,H.e(t)+"::"+b))return!0
else if(s.I(0,"*::"+b))return!0
else if(s.I(0,H.e(t)+"::*"))return!0
else if(s.I(0,"*::*"))return!0}return!1}}
W.il.prototype={
$1:function(a){return!C.a.I(C.t,a)},
$S:function(a){return{func:1,args:[,]}}}
W.im.prototype={
$1:function(a){return C.a.I(C.t,a)},
$S:function(a){return{func:1,args:[,]}}}
W.is.prototype={
a4:function(a,b,c){if(this.dt(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.ji(a,"template")==="")return this.e.I(0,b)
return!1}}
W.it.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)},
$S:function(a){return{func:1,args:[,]}}}
W.iq.prototype={
ag:function(a){var t=J.u(a)
if(!!t.$isbD)return!1
t=!!t.$isw
if(t&&W.bu(a)==="foreignObject")return!1
if(t)return!0
return!1},
a4:function(a,b,c){if(b==="is"||C.h.aE(b,"on"))return!1
return this.ag(a)}}
W.cj.prototype={
q:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sc0(J.bo(this.a,t))
this.c=t
return!0}this.sc0(null)
this.c=s
return!1},
gt:function(a){return this.d},
sc0:function(a){this.d=a}}
W.hO.prototype={$isa:1,$isf:1}
W.cE.prototype={}
W.jA.prototype={}
W.jJ.prototype={}
W.ik.prototype={}
W.dy.prototype={
bA:function(a){new W.iu(this).$2(a,null)},
as:function(a,b){if(b==null)J.kd(a)
else J.j9(b,a)},
el:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.mo(a)
r=J.ji(s.ge9(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.R(n)}p="element unprintable"
try{p=J.br(a)}catch(n){H.R(n)}try{o=W.bu(a)
this.ek(a,b,t,p,o,s,r)}catch(n){if(H.R(n) instanceof P.a5)throw n
else{this.as(a,b)
window
m="Removing corrupted element "+H.e(p)
if(typeof console!="undefined")window.console.warn(m)}}},
ek:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.as(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(t)
return}if(!this.a.ag(a)){this.as(a,b)
window
t="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(t)
return}if(g!=null)if(!this.a.a4(a,"is",g)){this.as(a,b)
window
t="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(t)
return}t=f.gG(f)
s=H.C(t.slice(0),[H.a3(t,0)])
for(r=f.gG(f).length-1,t=f.a,q=J.i(t);r>=0;--r){p=s[r]
if(!this.a.a4(a,J.mE(p),q.ak(t,p))){window
o="Removing disallowed attribute <"+H.e(e)+" "+p+'="'+H.e(q.ak(t,p))+'">'
if(typeof console!="undefined")window.console.warn(o)
q.ak(t,p)
q.ef(t,p)}}if(!!J.u(a).$isbF)this.bA(a.content)}}
W.iu.prototype={
$2:function(a,b){var t,s,r,q
r=this.a
switch(a.nodeType){case 1:r.el(a,b)
break
case 8:case 11:case 3:case 4:break
default:r.as(a,b)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.mp(t)}catch(q){H.R(q)
r=t
J.j9(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(a,b){return{func:1,v:true,args:[W.r,W.r]}}}
W.cZ.prototype={}
W.d_.prototype={}
W.d0.prototype={}
W.d1.prototype={}
W.d2.prototype={}
W.d3.prototype={}
W.d4.prototype={}
W.d6.prototype={}
W.d7.prototype={}
W.da.prototype={}
W.db.prototype={}
W.dd.prototype={}
W.de.prototype={}
W.dh.prototype={}
W.di.prototype={}
W.bT.prototype={}
W.bU.prototype={}
W.dj.prototype={}
W.dk.prototype={}
W.dp.prototype={}
W.ds.prototype={}
W.dt.prototype={}
W.bV.prototype={}
W.bW.prototype={}
W.du.prototype={}
W.dv.prototype={}
W.dz.prototype={}
W.dA.prototype={}
W.dB.prototype={}
W.dC.prototype={}
W.dD.prototype={}
W.dE.prototype={}
W.dF.prototype={}
W.dG.prototype={}
W.dH.prototype={}
W.dI.prototype={}
P.iB.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(a,b){return{func:1,args:[,,]}}}
P.hA.prototype={
gcM:function(a){return a.target}}
P.ie.prototype={}
P.Z.prototype={}
P.em.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.en.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
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
gn:function(a){return a.y},
gD:function(a){return a.z}}
P.eA.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eB.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
P.eC.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eD.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eG.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eI.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.a9.prototype={}
P.af.prototype={}
P.eQ.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.f_.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return this.a8(a,b)},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
a8:function(a,b){return a.getItem(b)},
$isl:1,
$asl:function(){return[P.jv]},
$asm:function(){return[P.jv]},
$isj:1,
$asj:function(){return[P.jv]},
$asn:function(){return[P.jv]}}
P.f9.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fc.prototype={
gZ:function(a){return a.a},
gU:function(a){return a.b},
ga5:function(a){return a.c}}
P.fu.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return this.a8(a,b)},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
a8:function(a,b){return a.getItem(b)},
$isl:1,
$asl:function(){return[P.jB]},
$asm:function(){return[P.jB]},
$isj:1,
$asj:function(){return[P.jB]},
$asn:function(){return[P.jB]}}
P.fB.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fF.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fG.prototype={
gl:function(a){return a.length}}
P.fK.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fL.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bD.prototype={$isbD:1}
P.hb.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return this.a8(a,b)},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
a8:function(a,b){return a.getItem(b)},
$isl:1,
$asl:function(){return[P.p]},
$asm:function(){return[P.p]},
$isj:1,
$asj:function(){return[P.p]},
$asn:function(){return[P.p]}}
P.w.prototype={
V:function(a,b,c,d){var t,s,r,q,p,o
t=H.C([],[W.cE])
C.a.i(t,W.lm(null))
C.a.i(t,W.lq())
C.a.i(t,new W.iq())
c=new W.dy(new W.cF(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.q).eI(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.T(q)
o=t.gad(t)
for(t=J.i(p);r=o.firstChild,r!=null;)t.a_(p,r)
return p},
gbl:function(a){return new W.ax(a,"change",!1,[W.h])},
gbm:function(a){return new W.ax(a,"input",!1,[W.h])},
gbn:function(a){return new W.ax(a,"mousemove",!1,[W.M])},
$isw:1}
P.hc.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bG.prototype={}
P.bH.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.hp.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return this.a8(a,b)},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
a8:function(a,b){return a.getItem(b)},
$isl:1,
$asl:function(){return[P.jH]},
$asm:function(){return[P.jH]},
$isj:1,
$asj:function(){return[P.jH]},
$asn:function(){return[P.jH]}}
P.hy.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.d8.prototype={}
P.d9.prototype={}
P.df.prototype={}
P.dg.prototype={}
P.dq.prototype={}
P.dr.prototype={}
P.dw.prototype={}
P.dx.prototype={}
P.dU.prototype={
gl:function(a){return a.length}}
P.dV.prototype={
gl:function(a){return a.length}}
P.b0.prototype={}
P.fv.prototype={
gl:function(a){return a.length}}
P.fQ.prototype={
c7:function(a,b){return a.activeTexture(b)},
ca:function(a,b,c){return a.attachShader(b,c)},
cb:function(a,b,c){return a.bindBuffer(b,c)},
cc:function(a,b,c){return a.bindFramebuffer(b,c)},
cd:function(a,b,c){return a.bindTexture(b,c)},
ce:function(a,b){return a.blendEquation(b)},
cf:function(a,b,c){return a.blendFunc(b,c)},
cg:function(a,b,c,d){return a.bufferData(b,c,d)},
ci:function(a,b){return a.checkFramebufferStatus(b)},
cj:function(a,b){return a.clear(b)},
ck:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
cm:function(a,b){return a.compileShader(b)},
cn:function(a){return a.createBuffer()},
co:function(a){return a.createFramebuffer()},
cp:function(a){return a.createProgram()},
cq:function(a,b){return a.createShader(b)},
cr:function(a){return a.createTexture()},
ct:function(a,b){return a.depthMask(b)},
cu:function(a,b){return a.disable(b)},
cw:function(a,b,c,d){return a.drawArrays(b,c,d)},
cz:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cA:function(a,b){return a.enable(b)},
cB:function(a,b){return a.enableVertexAttribArray(b)},
cE:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
aW:function(a){return P.iC(a.getContextAttributes())},
bu:function(a){return a.getError()},
bv:function(a,b){return a.getProgramInfoLog(b)},
bw:function(a,b,c){return a.getProgramParameter(b,c)},
bx:function(a,b){return a.getShaderInfoLog(b)},
by:function(a,b,c){return a.getShaderParameter(b,c)},
bz:function(a,b,c){return a.getUniformLocation(b,c)},
cG:function(a,b){return a.linkProgram(b)},
bE:function(a,b,c){return a.shaderSource(b,c)},
bF:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cN:function(a,b,c,d){return a.texParameterf(b,c,d)},
cO:function(a,b,c,d){return a.texParameteri(b,c,d)},
cS:function(a,b,c){return a.uniform1f(b,c)},
cT:function(a,b,c){return a.uniform1fv(b,c)},
cU:function(a,b,c){return a.uniform1i(b,c)},
cV:function(a,b,c){return a.uniform1iv(b,c)},
cW:function(a,b,c){return a.uniform2fv(b,c)},
cX:function(a,b,c){return a.uniform3fv(b,c)},
cY:function(a,b,c){return a.uniform4fv(b,c)},
cZ:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
d_:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
d1:function(a,b){return a.useProgram(b)},
d2:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
d4:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fR.prototype={
ew:function(a,b){return a.beginTransformFeedback(b)},
ez:function(a,b){return a.bindVertexArray(b)},
eK:function(a){return a.createVertexArray()},
eR:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
eS:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
eT:function(a){return a.endTransformFeedback()},
fj:function(a,b,c,d,e,f){return a.texStorage2D(b,c,d,e,f)},
fo:function(a,b,c,d){this.eo(a,b,c,d)
return},
eo:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
fq:function(a,b,c){return a.vertexAttribDivisor(b,c)},
c7:function(a,b){return a.activeTexture(b)},
ca:function(a,b,c){return a.attachShader(b,c)},
cb:function(a,b,c){return a.bindBuffer(b,c)},
cc:function(a,b,c){return a.bindFramebuffer(b,c)},
cd:function(a,b,c){return a.bindTexture(b,c)},
ce:function(a,b){return a.blendEquation(b)},
cf:function(a,b,c){return a.blendFunc(b,c)},
cg:function(a,b,c,d){return a.bufferData(b,c,d)},
ci:function(a,b){return a.checkFramebufferStatus(b)},
cj:function(a,b){return a.clear(b)},
ck:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
cm:function(a,b){return a.compileShader(b)},
cn:function(a){return a.createBuffer()},
co:function(a){return a.createFramebuffer()},
cp:function(a){return a.createProgram()},
cq:function(a,b){return a.createShader(b)},
cr:function(a){return a.createTexture()},
ct:function(a,b){return a.depthMask(b)},
cu:function(a,b){return a.disable(b)},
cw:function(a,b,c,d){return a.drawArrays(b,c,d)},
cz:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cA:function(a,b){return a.enable(b)},
cB:function(a,b){return a.enableVertexAttribArray(b)},
cE:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
aW:function(a){return P.iC(a.getContextAttributes())},
bu:function(a){return a.getError()},
bv:function(a,b){return a.getProgramInfoLog(b)},
bw:function(a,b,c){return a.getProgramParameter(b,c)},
bx:function(a,b){return a.getShaderInfoLog(b)},
by:function(a,b,c){return a.getShaderParameter(b,c)},
bz:function(a,b,c){return a.getUniformLocation(b,c)},
cG:function(a,b){return a.linkProgram(b)},
bE:function(a,b,c){return a.shaderSource(b,c)},
bF:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cN:function(a,b,c,d){return a.texParameterf(b,c,d)},
cO:function(a,b,c,d){return a.texParameteri(b,c,d)},
cS:function(a,b,c){return a.uniform1f(b,c)},
cT:function(a,b,c){return a.uniform1fv(b,c)},
cU:function(a,b,c){return a.uniform1i(b,c)},
cV:function(a,b,c){return a.uniform1iv(b,c)},
cW:function(a,b,c){return a.uniform2fv(b,c)},
cX:function(a,b,c){return a.uniform3fv(b,c)},
cY:function(a,b,c){return a.uniform4fv(b,c)},
cZ:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
d_:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
d1:function(a,b){return a.useProgram(b)},
d2:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
d4:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.h1.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return P.iC(this.eb(a,b))},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
eb:function(a,b){return a.item(b)},
$isl:1,
$asl:function(){return[P.ba]},
$asm:function(){return[P.ba]},
$isj:1,
$asj:function(){return[P.ba]},
$asn:function(){return[P.ba]}}
P.dl.prototype={}
P.dm.prototype={}
B.j1.prototype={
$1:function(a){$.$get$iD().j(0,a.which,!0)},
$S:function(a){return{func:1,args:[W.aL]}}}
B.j2.prototype={
$1:function(a){$.$get$iD().j(0,a.which,null)},
$S:function(a){return{func:1,args:[W.aL]}}}
B.j3.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.oa=t
$.ob=C.b.ae(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.k0=s-C.b.M(window.innerWidth,2)
$.lN=-(t-C.b.M(window.innerHeight,2))},
$S:function(a){return{func:1,args:[W.M]}}}
B.j4.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.c3=t-C.b.M(window.innerWidth,2)
$.c4=-(s-C.b.M(window.innerHeight,2))
if(a.button===2)$.$get$c1().j(0,"right",!0)
else $.$get$c1().j(0,"left",!0)},
$S:function(a){return{func:1,args:[W.M]}}}
B.j5.prototype={
$1:function(a){if(a.button===2)$.$get$c1().j(0,"right",null)
else $.$get$c1().j(0,"left",null)},
$S:function(a){return{func:1,args:[W.M]}}}
B.fw.prototype={
dJ:function(a,b,c,d){var t
d.toString
W.U(d,W.n0(d),new B.fx(this),!1,W.aV)
W.U(d,"mousemove",new B.fy(this),!1,W.M)
t=W.aS
W.U(d,"touchstart",new B.fz(),!1,t)
W.U(d,"touchmove",new B.fA(this),!1,t)
B.oz(null)}}
B.fx.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.at.geL(a)*r.k3
if(C.c.ae(r.fy,t)>0)r.fy=C.c.ae(r.fy,t)}catch(q){s=H.R(q)
P.Q(s)}},
$S:function(a){return{func:1,args:[W.aV]}}}
B.fy.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=t.go+C.b.ae($.k0,$.c3)*0.01
s=t.id
r=$.c4
q=$.lN
t.id=s+(r-q)*0.01
$.c3=$.k0
$.c4=q}},
$S:function(a){return{func:1,args:[W.M]}}}
B.fz.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.ai(t.clientX)
C.c.ai(t.clientY)
$.c3=s
C.c.ai(t.clientX)
$.c4=C.c.ai(t.clientY)},
$S:function(a){return{func:1,args:[W.aS]}}}
B.fA.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.ai(t.clientX)
t=C.c.ai(t.clientY)
r=this.a
r.go=r.go+C.b.ae(s,$.c3)*0.01
r.id=r.id+($.c4-t)*0.01
$.c3=s
$.c4=t},
$S:function(a){return{func:1,args:[W.aS]}}}
G.fi.prototype={}
G.bf.prototype={
J:function(a,b){var t=this.d
if(H.W(!t.K(0,a)))H.a_("uniform "+a+" already set")
t.j(0,a,b)},
b3:function(){return this.d},
k:function(a){var t,s,r,q
t=H.C(["{"+new H.av(H.iK(this),null).k(0)+"}["+this.a+"]"],[P.p])
for(s=this.d,r=s.gG(s),r=r.gA(r);r.q();){q=r.gt(r)
C.a.i(t,H.e(q)+": "+H.e(s.h(0,q)))}return C.a.az(t,"\n")}}
G.dW.prototype={}
G.dZ.prototype={
cC:function(a,b,c){J.mm(this.a,b)
if(c>0)J.mL(this.a,b,c)},
d3:function(a,b,c,d,e,f,g,h){J.jb(this.a,34962,b)
J.mM(this.a,c,d,e,!1,g,h)}}
G.cl.prototype={
dC:function(a,b,c,d,e){var t,s,r
t=this.a
s=J.mc(t.a)
this.b=s
J.jc(t.a,36160,s)
s=this.c
if(s!=null){s=s.b
J.k9(t.a,36160,36064,3553,s,0)}s=this.d
if(s!=null){s=s.b
J.k9(t.a,36160,36096,3553,s,0)}r=J.m8(t.a,36160)
s=r===36053
if(H.W(s))H.a_("framebuffer error: "+H.e(r))
if(!s)throw H.c("Error Incomplete Framebuffer: "+H.e(r))
J.jc(t.a,36160,null)}}
G.a8.prototype={
gZ:function(a){return this.a},
gU:function(a){return this.b},
ga5:function(a){return this.c}}
G.b5.prototype={
gZ:function(a){return this.a},
gU:function(a){return this.b},
ga5:function(a){return this.c}}
G.aH.prototype={
Y:function(a){var t=this.e
H.b(!t.K(0,a))
H.b(C.h.aE(a,"a"))
switch($.$get$V().h(0,a).a){case"vec2":t.j(0,a,H.C([],[T.o]))
break
case"vec3":t.j(0,a,H.C([],[T.d]))
break
case"vec4":t.j(0,a,H.C([],[T.aw]))
break
case"float":t.j(0,a,H.C([],[P.a0]))
break
case"uvec4":t.j(0,a,H.C([],[[P.j,P.x]]))
break
default:if(H.W(!1))H.a_("unknown type for "+a)}},
dv:function(a){var t,s,r
H.b(!0)
t=this.d.length
for(s=this.c,r=0;r<a;++r,t+=4)C.a.i(s,new G.b5(t,t+1,t+2,t+3))},
an:function(a){var t,s,r,q,p
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.A)(a),++r){q=a[r]
p=new T.d(new Float32Array(3))
p.u(q)
C.a.i(s,p)}},
dw:function(a){var t,s,r,q,p
H.b(!0)
t=this.d
s=t.length
C.a.i(this.b,new G.a8(s,s+1,s+2))
for(r=0;r<3;++r){q=a[r]
p=new T.d(new Float32Array(3))
p.u(q)
C.a.i(t,p)}},
aG:function(a,b){var t,s,r,q,p,o,n
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.A)(b),++q){p=b[q]
o=new Float32Array(2)
n=p.a
o[1]=n[1]
o[0]=n[0]
r.i(t,new T.o(o))}},
aH:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.A)(b),++q){p=b[q]
o=new T.d(new Float32Array(3))
o.u(p)
r.i(t,o)}},
dz:function(a){var t,s,r,q,p
H.b(!0)
t=this.d
s=t.length
C.a.i(this.c,new G.b5(s,s+1,s+2,s+3))
for(r=0;r<4;++r){q=a[r]
p=new T.d(new Float32Array(3))
p.u(q)
C.a.i(t,p)}},
dD:function(){var t,s,r,q,p,o,n,m,l
t=this.b
H.b(t.length>0||this.c.length>0)
s=this.c
r=new Array(t.length*3+s.length*6)
r.fixed$length=Array
q=H.C(r,[P.x])
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
dF:function(a,b){var t,s,r,q,p,o,n,m
t=a*b
H.b(this.d.length===t)
s=[]
this.e.j(0,"aTexUV",s)
for(r=b-1,q=a-1,p=0;p<b;++p)for(o=p/r,n=0;n<a;++n){m=new Float32Array(2)
m[0]=o
m[1]=n/q
C.a.i(s,new T.o(m))}H.b(s.length===t)},
dE:function(a,b,c){var t,s,r,q,p,o,n,m,l
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
C.a.i(t,new G.b5(p+m,l+m,l+n,p+n))
n=m}q=o}},
k:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gG(s),r=r.gA(r);r.q();){q=r.gt(r)
p=$.$get$V().h(0,q).a
C.a.i(t,H.e(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.az(t," ")}}
G.f0.prototype={}
G.aN.prototype={
b1:function(a,b){var t=this.x.a
a[b]=t[0]
a[b+1]=t[1]
a[b+2]=t[2]
t=this.y.a
a[b+8]=t[0]
a[b+9]=t[1]
a[b+10]=t[2]
t=this.z.a
a[b+12]=t[0]
a[b+13]=t[1]
a[b+14]=t[2]
a[b+7]=this.Q},
b2:function(){if(H.W(!1))H.a_("NYI")
return new T.B(new Float32Array(16))},
k:function(a){return"PL: p:"+H.e(this.x)+"  r:"+this.Q}}
G.aF.prototype={
b1:function(a,b){var t=this.x.a
a[b+4]=t[0]
a[b+5]=t[1]
a[b+6]=t[2]
t=this.y.a
a[b+8]=t[0]
a[b+9]=t[1]
a[b+10]=t[2]
t=this.z.a
a[b+12]=t[0]
a[b+13]=t[1]
a[b+14]=t[2]},
b2:function(){var t,s,r,q,p,o
t=this.ch
s=this.Q
r=-s
q=s-r
t.bD()
p=2/q
t.P(0,0,p)
t.P(1,1,p)
t.P(2,2,-2/q)
r=-(s+r)/q
t.P(0,3,r)
t.P(1,3,r)
t.P(2,3,r)
t.P(3,3,1)
s=this.x
r=s.a
o=r[0]===0&&r[2]===0?$.$get$jT():$.$get$jS()
r=this.cx
T.k1(r,new T.d(new Float32Array(3)),s,o)
t.aU(0,r)
return t},
k:function(a){return"DL: p:"+H.e(this.x)}}
G.aa.prototype={
b1:function(a,b){var t=this.x.a
a[b]=t[0]
a[b+1]=t[1]
a[b+2]=t[2]
t=this.y.a
a[b+4]=t[0]
a[b+5]=t[1]
a[b+6]=t[2]
t=this.z.a
a[b+8]=t[0]
a[b+9]=t[1]
a[b+10]=t[2]
t=this.Q.a
a[b+12]=t[0]
a[b+13]=t[1]
a[b+14]=t[2]
a[b+7]=this.ch
a[b+11]=Math.cos(H.lA(this.cx))
a[b+15]=this.cy},
b2:function(){var t,s,r,q
t=this.y
s=t.a
r=s[0]===0&&s[2]===0?$.$get$jT():$.$get$jS()
s=this.fr
q=this.x
T.k1(s,q,t.X(0,q),r)
q=this.fx
T.lS(q,C.o.L(2.1,this.cx),this.db,this.dx,this.dy)
q.aU(0,s)
return q},
k:function(a){return"SL: p:"+H.e(this.x)+"  d:"+H.e(this.y)+"  r:"+this.ch+"  a:"+H.e(this.cx)}}
G.eP.prototype={
b3:function(){var t,s,r
t=this.y
s=this.z
G.n9(t,s,this.x)
r=this.d
r.j(0,"uLightDescs",t)
r.j(0,"uLightTypes",s)
return r}}
G.cU.prototype={}
G.cT.prototype={}
G.fa.prototype={
dI:function(a){this.J("cDepthTest",!0)
this.J("cDepthWrite",!0)
this.J("cBlendEquation",$.$get$kk())
this.J("cStencilFunc",$.$get$kZ())}}
G.ff.prototype={
bH:function(a,b,c){var t,s
if(C.h.ao(a,0)===105){if(H.W(C.b.b0(b.length,c)===this.z))H.a_("ChangeAttribute "+this.z)}else{t=C.b.b0(b.length,c)
if(H.W(t===(this.ch.length/3|0)))H.a_("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}this.cy.j(0,a,b)
t=this.d
s=this.r.h(0,a)
J.jb(t.a,34962,s)
J.k7(t.a,34962,b,35048)},
aK:function(a){this.ch=a
this.bH("aPosition",a,3)},
bK:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
am:function(a,b,c){var t,s,r,q,p,o
t=J.k3(a,0)===105
if(t&&this.z===0)this.z=C.b.b0(b.length,c)
s=this.r
r=this.d
s.j(0,a,J.je(r.a))
this.bH(a,b,c)
q=$.$get$V().h(0,a)
if(q==null)throw H.c("Unknown canonical "+a)
p=this.x
if(H.W(p.K(0,a)))H.a_("unexpected attribute "+a)
o=p.h(0,a)
J.dO(r.a,this.e)
r.cC(0,o,t?1:0)
r.d3(0,s.h(0,a),o,q.bL(),5126,!1,0,0)},
an:function(a){var t,s,r,q,p
t=this.r
s=this.d
t.j(0,"aPosition",J.je(s.a))
this.aK(a)
r=$.$get$V().h(0,"aPosition")
if(r==null)throw H.c("Unknown canonical aPosition")
q=this.x
H.b(q.K(0,"aPosition"))
p=q.h(0,"aPosition")
J.dO(s.a,this.e)
s.cC(0,p,0)
s.d3(0,t.h(0,"aPosition"),p,r.bL(),5126,!1,0,0)},
aJ:function(a){var t,s,r,q
H.b(this.ch!=null)
t=this.ch.length
if(t<768){this.sba(new Uint8Array(H.iw(a)))
this.Q=5121}else if(t<196608){this.sba(new Uint16Array(H.iw(a)))
this.Q=5123}else{this.sba(new Uint32Array(H.iw(a)))
this.Q=5125}t=this.d
J.dO(t.a,this.e)
s=this.y
r=this.cx
q=J.u(r)
H.b(!!q.$islf||!!q.$islg||!!q.$islh)
J.jb(t.a,34963,s)
J.k7(t.a,34963,r,35048)},
bG:function(a){this.y=J.je(this.d.a)
this.aJ(a)},
k:function(a){var t,s,r,q
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,r=t.gG(t),r=r.gA(r);r.q();){q=r.gt(r)
C.a.i(s,H.e(q)+":"+t.h(0,q).length)}return"MESH["+this.a+"] "+C.a.az(s,"  ")},
sba:function(a){this.cx=a}}
G.fC.prototype={
dA:function(a,b){var t=C.b.d6(a,b)
if(this.z===t)return
this.z=t
this.bN()},
bN:function(){T.lS(this.db,this.y*3.141592653589793/180,this.z,this.Q,this.ch)},
b3:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.d(new Float32Array(3))
o.p(r,q,p)
p=this.d
p.j(0,"uEyePosition",o)
o=this.cy
o.u(t)
t=o.a
t[12]=0
t[13]=0
t[14]=0
t[15]=1
n=-s[12]
m=-s[13]
l=-s[14]
s=J.u(n)
r=!!s.$isaw
k=r?s.gaD(n):1
if(!!s.$isd){j=s.gm(n)
m=s.gn(n)
l=s.gD(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
l=s.gD(n)
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
a3.u(this.db)
a3.aU(0,o)
p.j(0,"uPerspectiveViewMatrix",a3)
return p}}
G.eg.prototype={
k:function(a){return"["+this.a+"] "+this.b+" "+this.c+" mode:"+this.d+" ["+this.e.a+"usec]"}}
G.fO.prototype={
dL:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.A)(t),++o){n=t[o]
r.j(0,n,J.kc(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.A)(t),++o){n=t[o]
r.j(0,n,J.kc(q.a,p,n))}},
dG:function(a){var t,s,r,q,p
t=this.e.x
s=a.e.x
for(r=t.gG(t),r=r.gA(r);r.q();){q=r.gt(r)
p=t.h(0,q)
q=s.h(0,q)
if(p==null?q!=null:p!==q)return!1}return!0},
dP:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gl(t)===s.gl(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gG(s),s=s.gA(s);s.q();){q=s.gt(s)
if(!t.K(0,q))C.a.i(r,q)}for(t=this.x,s=new P.bM(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.q();){q=s.d
if(!t.I(0,q))C.a.i(r,q)}return r},
dS:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gG(b),s=s.gA(s),r=this.d,q=this.y,p=this.z,o=0;s.q();){n=s.gt(s)
switch(J.k3(n,0)){case 117:if(q.K(0,n)){m=b.h(0,n)
if(p.K(0,n))H.dM("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.j(0,n,a)
l=$.$get$V().h(0,n)
if(l==null)H.L("unknown "+n)
H.b(q.K(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.jj(r.a,k,m)
else if(!!J.u(m).$iskK)J.mJ(r.a,k,m)
break
case"float":if(l.c===0)J.mH(r.a,k,m)
else if(!!J.u(m).$iseH)J.mI(r.a,k,m)
break
case"mat4":if(l.c===0){n=H.F(m,"$isB").a
J.ki(r.a,k,!1,n)}else if(!!J.u(m).$iseH)J.ki(r.a,k,!1,m)
else if(H.W(!1))H.a_("bad unform: "+n)
break
case"mat3":if(l.c===0){n=H.F(m,"$isY").a
J.kh(r.a,k,!1,n)}else if(!!J.u(m).$iseH)J.kh(r.a,k,!1,m)
else if(H.W(!1))H.a_("bad unform: "+n)
break
case"vec4":n=l.c
j=r.a
if(n===0)J.kg(j,k,H.F(m,"$isaw").a)
else J.kg(j,k,m)
break
case"vec3":n=l.c
j=r.a
if(n===0)J.kf(j,k,H.F(m,"$isd").a)
else J.kf(j,k,m)
break
case"vec2":n=l.c
j=r.a
if(n===0)J.ke(j,k,H.F(m,"$iso").a)
else J.ke(j,k,m)
break
case"sampler2D":case"sampler2DShadow":n=C.b.X(33984,this.ch)
J.k5(r.a,n)
n=H.F(m,"$isbI").b
J.aA(r.a,3553,n)
n=this.ch
J.jj(r.a,k,n)
this.ch=this.ch+1
break
case"samplerCube":H.b(n==="uCubeTexture")
n=C.b.X(33984,this.ch)
J.k5(r.a,n)
n=H.F(m,"$isbI").b
J.aA(r.a,34067,n)
n=this.ch
J.jj(r.a,k,n)
this.ch=this.ch+1
break
default:H.dM("Error: unknow uniform type: "+j)
H.b(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":n=J.G(m,!0)
j=r.a
if(n)J.dP(j,2929)
else J.jf(j,2929)
break
case"cStencilFunc":H.F(m,"$iscU")
n=m.a
j=r.a
if(n===1281)J.jf(j,2960)
else{J.dP(j,2960)
j=m.b
i=m.c
J.mB(r.a,n,j,i)}break
case"cDepthWrite":J.mg(r.a,m)
break
case"cBlendEquation":H.F(m,"$iscT")
n=m.a
j=r.a
if(n===1281)J.jf(j,3042)
else{J.dP(j,3042)
j=m.b
i=m.c
J.m7(r.a,j,i)
J.m6(r.a,n)}break}++o
break}}h=P.kE(0,0,0,Date.now()-new P.b3(t,!1).a,0,0)
""+o
h.k(0)},
dB:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t=Date.now()
s=this.d
J.mK(s.a,this.r)
this.ch=0
this.z.a6(0)
for(r=b.length,q=0;q<b.length;b.length===r||(0,H.A)(b),++q){p=b[q]
this.dS(p.a,p.b3())}r=this.Q
r.a6(0)
for(o=a.cy,o=o.gG(o),o=o.gA(o);o.q();)r.i(0,o.gt(o))
n=this.dP()
if(n.length!==0)P.Q("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(n)))
J.dO(a.d.a,a.e)
m=this.e.f.length>0
r=a.f
o=a.bK()
l=a.Q
k=a.z
if(m)J.m5(s.a,r)
if(l!==-1){j=s.a
if(k>1)J.mk(j,r,o,l,0,k)
else J.mj(j,r,o,l,0)}else{l=s.a
if(k>1)J.mi(l,r,0,o,k)
else J.mh(l,r,0,o)}if(m)J.mn(s.a)
if(c!=null)C.a.i(c,new G.eg(this.a,a.z,a.bK(),r,P.kE(0,0,0,Date.now()-new P.b3(t,!1).a,0,0)))}}
G.y.prototype={
bL:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.b(!1)
return-1}}}
G.fW.prototype={
aF:function(a){var t,s,r,q,p
H.b(this.b==null)
for(t=a.length,s=this.c,r=this.x,q=0;q<a.length;a.length===t||(0,H.A)(a),++q){p=a[q]
H.b($.$get$V().K(0,p))
H.b(!C.a.I(s,p))
C.a.i(s,p)
r.j(0,p,this.r);++this.r}C.a.aY(s)},
aa:function(a){var t,s,r,q
H.b(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.A)(a),++r){q=a[r]
if(H.W($.$get$V().K(0,q)))H.a_("missing uniform "+q)
H.b(!C.a.I(s,q))
C.a.i(s,q)}C.a.aY(s)},
aI:function(a){var t,s,r,q
H.b(this.b==null)
for(t=a.length,s=this.e,r=0;r<a.length;a.length===t||(0,H.A)(a),++r){q=a[r]
H.b($.$get$V().K(0,q))
H.b(!C.a.I(s,q))
C.a.i(s,q)}C.a.aY(s)},
bM:function(a,b){H.b(this.b==null)
this.b=this.dT(!0,a,b)},
ab:function(a){return this.bM(a,null)},
dT:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.b(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.A)(t),++o){n=t[o]
m=$.$get$V().h(0,n)
C.a.i(q,"layout (location="+H.e(p.h(0,n))+") in "+m.a+" "+H.e(n)+";")}C.a.i(q,"")
l=r?"in":"out"
if(r)C.a.i(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.A)(t),++o){k=t[o]
m=$.$get$V().h(0,k)
C.a.i(q,l+" "+m.a+" "+H.e(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.A)(t),++o){k=t[o]
m=$.$get$V().h(0,k)
C.a.i(q,l+" "+m.a+" "+H.e(k)+";")}C.a.i(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.A)(t),++o){k=t[o]
m=$.$get$V().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.i(q,"uniform "+m.a+" "+H.e(k)+j+";")}C.a.i(q,"")
if(c!=null)C.a.N(q,c)
C.a.i(q,"void main(void) {")
C.a.N(q,b)
C.a.i(q,"}")
return C.a.az(q,"\n")}}
G.h_.prototype={
ac:function(a,b,c){var t=this.d.a
t[12]=a
t[13]=b
t[14]=c}}
G.hi.prototype={}
G.bI.prototype={
k:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.ht.prototype={
dO:function(a,b,c,d,e,f){var t,s,r,q,p
t=this.d
s=this.c
J.aA(t.a,s,this.b)
J.mD(t.a,3553,1,this.x,this.f,this.r)
r=this.e
q=r.e
if(q!==1)J.mC(t.a,s,34046,q)
q=r.r
J.a4(t.a,s,10240,q)
q=r.f
J.a4(t.a,s,10241,q)
if(r.b){J.a4(t.a,s,10242,33071)
J.a4(t.a,s,10243,33071)}if(r.c)J.a4(t.a,s,34892,34894)
p=J.mu(t.a)
if(H.W(p===0))H.a_("texture error "+H.e(p))
J.aA(t.a,s,null)},
k:function(a){return"TypedTexture["+this.a+", "+this.x+", "+this.f+" X "+this.r+"]"}}
R.h3.prototype={
dM:function(a,b,c){var t,s,r
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
J.ja(this.a,s)
r=this.dX(b,c,90,30)
this.d=r
J.ja(this.a,r)
t=t.createElement("div")
this.c=t
J.ja(this.a,t)},
dX:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.nR("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.w).bS(r,"float")
r.setProperty(p,"left","")
p=C.w.bS(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.n.a_(t,s)}return t}}
R.h4.prototype={
dR:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.o.fn(s,2)+" fps"
t=this.c;(t&&C.n).bB(t,b)
r=C.b.M(30*C.o.eA(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.n).a_(t,q)},
dQ:function(a){return this.dR(a,"")}}
R.fX.prototype={}
A.ah.prototype={
k:function(a){return"NODE["+this.a+"]"}}
A.aQ.prototype={}
A.fN.prototype={
dK:function(a,b,c){if(this.d==null)this.d=new G.cl(this.e,null,null,null,null)},
seC:function(a){this.r&=4294950911},
bJ:function(a){var t,s,r,q,p,o,n,m,l,k,j,i
t=this.d
s=this.r
r=this.x
q=this.y
p=this.z
o=this.Q
n=t.a
t=t.b
J.jc(n.a,36160,t)
H.b(p>0&&o>0)
J.mN(n.a,r,q,p,o)
if(s!==0)J.m9(n.a,s)
for(t=this.f,s=t.length,m=0;m<t.length;t.length===s||(0,H.A)(t),++m){l=t[m]
if(!l.c)continue
r=l.d
if(!r.c)continue
k=l.e
C.a.i(k,new G.bf(P.K(),"transforms",!1,!0))
j=new T.B(new Float32Array(16))
j.H()
for(q=l.f,p=q.length,i=0;i<q.length;q.length===p||(0,H.A)(q),++i)A.lC(r,q[i],j,a,k)
k.pop()}},
bI:function(){return this.bJ(null)}}
B.fY.prototype={
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
b.sD(0,this.d*t*0.5*q)},
$S:function(a,b){return{func:1,v:true,args:[P.a0,T.d]}}}
A.iL.prototype={
$2:function(a,b){var t=536870911&a+J.bp(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(a,b){return{func:1,args:[P.x,P.H]}}}
T.Y.prototype={
u:function(a){var t,s
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
k:function(a){return"[0] "+this.a1(0).k(0)+"\n[1] "+this.a1(1).k(0)+"\n[2] "+this.a1(2).k(0)+"\n"},
h:function(a,b){return this.a[b]},
E:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.Y){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gB:function(a){return A.dK(this.a)},
a1:function(a){var t,s
t=new Float32Array(3)
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.d(t)},
eG:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
if(g===0){this.u(a)
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
T.B.prototype={
P:function(a,b,c){H.b(a<4)
H.b(b<4)
this.a[b*4+a]=c},
u:function(a){var t,s
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
k:function(a){return"[0] "+this.a1(0).k(0)+"\n[1] "+this.a1(1).k(0)+"\n[2] "+this.a1(2).k(0)+"\n[3] "+this.a1(3).k(0)+"\n"},
h:function(a,b){return this.a[b]},
E:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.B){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gB:function(a){return A.dK(this.a)},
a1:function(a){var t,s
t=new Float32Array(4)
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.aw(t)},
bD:function(){var t=this.a
t[0]=0
t[1]=0
t[2]=0
t[3]=0
t[4]=0
t[5]=0
t[6]=0
t[7]=0
t[8]=0
t[9]=0
t[10]=0
t[11]=0
t[12]=0
t[13]=0
t[14]=0
t[15]=0},
H:function(){var t=this.a
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
aU:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.fI.prototype={
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gD:function(a){return this.a[2]},
gaD:function(a){return this.a[3]},
di:function(a,b){var t,s,r,q,p
t=Math.sqrt(a.gS())
if(t===0)return
s=b*0.5
r=Math.sin(s)/t
q=a.a
p=this.a
p[0]=q[0]*r
p[1]=q[1]*r
p[2]=q[2]*r
p[3]=Math.cos(s)},
gl:function(a){var t,s,r,q,p
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=t[3]
return Math.sqrt(s*s+r*r+q*q+p*p)},
h:function(a,b){return this.a[b]},
k:function(a){var t=this.a
return H.e(t[0])+", "+H.e(t[1])+", "+H.e(t[2])+" @ "+H.e(t[3])}}
T.o.prototype={
v:function(a,b){var t=this.a
t[0]=a
t[1]=b},
k:function(a){var t=this.a
return"["+H.e(t[0])+","+H.e(t[1])+"]"},
E:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.o){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gB:function(a){return A.dK(this.a)},
h:function(a,b){return this.a[b]},
gl:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.d.prototype={
p:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
u:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
k:function(a){var t=this.a
return"["+H.e(t[0])+","+H.e(t[1])+","+H.e(t[2])+"]"},
E:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.d){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gB:function(a){return A.dK(this.a)},
X:function(a,b){var t=new T.d(new Float32Array(3))
t.u(this)
t.i(0,b)
return t},
h:function(a,b){return this.a[b]},
gl:function(a){return Math.sqrt(this.gS())},
gS:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
C:function(a){var t,s,r
t=Math.sqrt(this.gS())
if(t===0)return 0
s=1/t
r=this.a
r[0]=r[0]*s
r[1]=r[1]*s
r[2]=r[2]*s
return t},
bk:function(a){var t,s
t=a.a
s=this.a
return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]},
cs:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.d(new Float32Array(3))
t.p(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
i:function(a,b){var t,s
t=b.a
s=this.a
s[0]=s[0]+t[0]
s[1]=s[1]+t[1]
s[2]=s[2]+t[2]},
aQ:function(a,b){var t,s
t=a.a
s=this.a
s[0]=s[0]+t[0]*b
s[1]=s[1]+t[1]*b
s[2]=s[2]+t[2]*b},
al:function(a,b){var t,s
t=b.a
s=this.a
s[0]=s[0]-t[0]
s[1]=s[1]-t[1]
s[2]=s[2]-t[2]},
T:function(a,b){var t=this.a
t[2]=t[2]*b
t[1]=t[1]*b
t[0]=t[0]*b},
aX:function(a){var t=new T.d(new Float32Array(3))
t.u(this)
t.T(0,a)
return t},
sm:function(a,b){this.a[0]=b
return b},
sn:function(a,b){this.a[1]=b
return b},
sD:function(a,b){this.a[2]=b
return b},
gU:function(a){return this.a[2]},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gD:function(a){return this.a[2]}}
T.aw.prototype={
k:function(a){var t=this.a
return H.e(t[0])+","+H.e(t[1])+","+H.e(t[2])+","+H.e(t[3])},
E:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aw){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gB:function(a){return A.dK(this.a)},
h:function(a,b){return this.a[b]},
gl:function(a){var t,s,r,q
t=this.a
s=t[0]
r=t[1]
q=t[2]
t=t[3]
return Math.sqrt(s*s+r*r+q*q+t*t)},
gU:function(a){return this.a[2]},
gZ:function(a){return this.a[3]},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gD:function(a){return this.a[2]},
gaD:function(a){return this.a[3]}}
L.iX.prototype={
$1:function(a){var t=H.F(J.ka(a),"$isb7")
if(t.type==="radio")L.n2(t.id)},
$S:function(a){return{func:1,args:[W.h]}}}
L.iY.prototype={
$1:function(a){var t,s,r,q
t=H.F(J.ka(a),"$isb7")
if(t.type==="range"){s=t.id
r=H.nv(t.value,null)
if(J.mA(s,"pos")){P.Q("EventPositionChanged "+s+" "+H.e(r))
switch(s){case"posx":q=$.$get$ap()
H.F(q.h(0,"idSpot"),"$isaa").x.sm(0,r)
H.F(q.h(0,"idPoint"),"$isaN").x.sm(0,r)
break
case"posy":q=$.$get$ap()
H.F(q.h(0,"idSpot"),"$isaa").x.sn(0,r)
H.F(q.h(0,"idPoint"),"$isaN").x.sn(0,r)
break
case"posz":q=$.$get$ap()
H.F(q.h(0,"idSpot"),"$isaa").x.sD(0,r)
H.F(q.h(0,"idPoint"),"$isaN").x.sD(0,r)
break}}else if(C.h.aE(s,"dir")){P.Q("EventDirectionChanged "+s+" "+H.e(r))
switch(s){case"dirx":q=$.$get$ap()
H.F(q.h(0,"idSpot"),"$isaa").y.sm(0,r)
H.F(q.h(0,"idDirectional"),"$isaF").x.sm(0,r)
break
case"diry":q=$.$get$ap()
H.F(q.h(0,"idSpot"),"$isaa").y.sn(0,r)
H.F(q.h(0,"idDirectional"),"$isaF").x.sn(0,r)
break
case"dirz":q=$.$get$ap()
H.F(q.h(0,"idSpot"),"$isaa").y.sD(0,r)
H.F(q.h(0,"idDirectional"),"$isaF").x.sD(0,r)
break}}else if(s==="cutoff")P.Q("set cutoff "+H.e(r))}},
$S:function(a){return{func:1,args:[W.h]}}}
L.iZ.prototype={
$1:function(a){var t,s,r,q
t=this.a
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.Q("size change "+H.e(s)+" "+H.e(r))
t=C.b.M(s,2)
this.b.dA(t,r)
q=this.c
q.z=t
q.Q=r
q=this.d.f
q.x=t
q.y=0
q.z=t
q.Q=r},
$S:function(a){return{func:1,v:true,args:[W.h]}}}
L.iW.prototype={
$1:function(b4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
t=this.a
t.a=b4+0
s=this.b
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
s.ac(o*Math.cos(p),q*Math.sin(r),o*Math.sin(p))
p=s.k2
r=s.d
q=r.a
n=p.a
q[12]=q[12]+n[0]
q[13]=q[13]+n[1]
q[14]=q[14]+n[2]
m=q[12]
l=q[13]
k=q[14]
j=new T.d(new Float32Array(3))
j.p(0,1,0)
n=s.e
i=n.a
i[0]=q[12]
i[1]=q[13]
i[2]=q[14]
T.k1(r,n,p,j)
q[12]=m
q[13]=l
q[14]=k
p=s.f
n=p.a
n[0]=q[2]
n[1]=q[6]
n[2]=q[10]
s=-s.k1
h=Math.sqrt(p.gS())
m=n[0]/h
l=n[1]/h
k=n[2]/h
g=Math.cos(s)
f=Math.sin(s)
e=1-g
d=m*m*e+g
s=k*f
c=m*l*e-s
n=l*f
b=m*k*e+n
a=l*m*e+s
a0=l*l*e+g
s=m*f
a1=l*k*e-s
a2=k*m*e-n
a3=k*l*e+s
a4=k*k*e+g
s=q[0]
n=q[4]
p=q[8]
r=q[1]
i=q[5]
a5=q[9]
a6=q[2]
a7=q[6]
a8=q[10]
a9=q[3]
b0=q[7]
b1=q[11]
q[0]=s*d+n*a+p*a2
q[1]=r*d+i*a+a5*a2
q[2]=a6*d+a7*a+a8*a2
q[3]=a9*d+b0*a+b1*a2
q[4]=s*c+n*a0+p*a3
q[5]=r*c+i*a0+a5*a3
q[6]=a6*c+a7*a0+a8*a3
q[7]=a9*c+b0*a0+b1*a3
q[8]=s*b+n*a1+p*a4
q[9]=r*b+i*a1+a5*a4
q[10]=a6*b+a7*a1+a8*a4
q[11]=a9*b+b0*a1+b1*a4
b2=$.iG.b2()
b1=this.c
b3=$.iG
s=J.u(b3)
if(!!s.$isaF){s=b3.Q
R.nI(b1,s,s/4,b3.x)}else if(!!s.$isaa)R.nK(b1,b3.x,b3.y,b3.ch,b3.cx)
else if(!!s.$isaN)R.nJ(b1,b3.x,b3.Q)
else if(H.W(!1))H.a_("unknown light: "+s.gF(b3).k(0))
s=this.d
r=H.e($.iG)
q=s.c;(q&&C.n).bB(q,r)
r=this.e
r.r.d.j(0,"uLightPerspectiveViewMatrix",b2)
r.c.bI()
this.f.d.j(0,"uLightPerspectiveViewMatrix",b2)
this.r.bI()
q=r.a
p=r.b
J.aA(q.a,3553,p.b)
J.a4(q.a,3553,34892,0)
J.a4(q.a,3553,10240,9728)
J.a4(q.a,3553,10241,9728)
J.aA(q.a,3553,null)
r.f.bJ([])
r=r.b
J.aA(q.a,3553,r.b)
J.a4(q.a,3553,34892,34894)
J.a4(q.a,3553,10240,9729)
J.a4(q.a,3553,10241,9729)
J.aA(q.a,3553,null)
C.au.geu(window).cP(this)
s.dQ(t.a)},
$S:function(a){return{func:1,v:true,args:[P.ad]}}}
J.a.prototype.dq=J.a.prototype.k
J.bx.prototype.ds=J.bx.prototype.k
P.X.prototype.dr=P.X.prototype.aV
W.a7.prototype.b_=W.a7.prototype.V
W.bS.prototype.dt=W.bS.prototype.a4;(function installTearOffs(){installTearOff(H.bh.prototype,"gf6",0,0,0,null,["$0"],["aS"],0)
installTearOff(H.ab.prototype,"gda",0,0,0,null,["$1"],["R"],2)
installTearOff(H.aW.prototype,"geN",0,0,0,null,["$1"],["a7"],2)
installTearOff(P,"o6",1,0,0,null,["$1"],["nN"],1)
installTearOff(P,"o7",1,0,0,null,["$1"],["nO"],1)
installTearOff(P,"o8",1,0,0,null,["$1"],["nP"],1)
installTearOff(P,"lz",1,0,0,null,["$0"],["o4"],0)
installTearOff(P.am.prototype,"ge2",0,0,0,null,["$2","$1"],["aL","e3"],5)
installTearOff(P,"od",1,0,0,null,["$2"],["mU"],6)
installTearOff(W,"oi",1,0,0,null,["$4"],["nU"],4)
installTearOff(W,"oj",1,0,0,null,["$4"],["nV"],4)
installTearOff(W.cD.prototype,"gbo",0,1,0,null,["$0"],["bp"],3)
installTearOff(W.cW.prototype,"gbo",0,1,0,null,["$0"],["bp"],3)
installTearOff(L,"oA",1,0,0,null,["$1"],["nE"],7)
installTearOff(L,"lV",1,0,0,null,["$0"],["ot"],0)})();(function inheritance(){inherit(P.H,null)
var t=P.H
inherit(H.js,t)
inherit(J.a,t)
inherit(J.dT,t)
inherit(P.X,t)
inherit(H.cu,t)
inherit(P.cq,t)
inherit(H.b6,t)
inherit(H.aE,t)
inherit(H.ic,t)
inherit(H.bh,t)
inherit(H.hR,t)
inherit(H.aX,t)
inherit(H.ib,t)
inherit(H.hL,t)
inherit(H.cJ,t)
inherit(H.hk,t)
inherit(H.aC,t)
inherit(H.ab,t)
inherit(H.aW,t)
inherit(H.fM,t)
inherit(H.hq,t)
inherit(P.b4,t)
inherit(H.dn,t)
inherit(H.av,t)
inherit(P.bb,t)
inherit(H.f1,t)
inherit(H.f3,t)
inherit(P.jm,t)
inherit(P.hM,t)
inherit(P.d5,t)
inherit(P.am,t)
inherit(P.cY,t)
inherit(P.h7,t)
inherit(P.h8,t)
inherit(P.jF,t)
inherit(P.b_,t)
inherit(P.iv,t)
inherit(P.fV,t)
inherit(P.i8,t)
inherit(P.bM,t)
inherit(P.jw,t)
inherit(P.bN,t)
inherit(P.m,t)
inherit(P.ia,t)
inherit(P.ao,t)
inherit(P.J,t)
inherit(P.b3,t)
inherit(P.ad,t)
inherit(P.aG,t)
inherit(P.cO,t)
inherit(P.jo,t)
inherit(P.hV,t)
inherit(P.eK,t)
inherit(P.el,t)
inherit(P.j,t)
inherit(P.ba,t)
inherit(P.P,t)
inherit(P.bd,t)
inherit(P.p,t)
inherit(P.bE,t)
inherit(P.jI,t)
inherit(W.e4,t)
inherit(W.bL,t)
inherit(W.n,t)
inherit(W.cF,t)
inherit(W.bS,t)
inherit(W.iq,t)
inherit(W.cj,t)
inherit(W.hO,t)
inherit(W.cE,t)
inherit(W.jA,t)
inherit(W.jJ,t)
inherit(W.ik,t)
inherit(W.dy,t)
inherit(P.ie,t)
inherit(G.fi,t)
inherit(G.dZ,t)
inherit(G.cl,t)
inherit(G.a8,t)
inherit(G.b5,t)
inherit(G.aH,t)
inherit(G.cU,t)
inherit(G.cT,t)
inherit(G.eg,t)
inherit(G.y,t)
inherit(G.fW,t)
inherit(G.hi,t)
inherit(G.bI,t)
inherit(R.h3,t)
inherit(R.fX,t)
inherit(T.Y,t)
inherit(T.B,t)
inherit(T.fI,t)
inherit(T.o,t)
inherit(T.d,t)
inherit(T.aw,t)
t=J.a
inherit(J.eW,t)
inherit(J.eX,t)
inherit(J.bx,t)
inherit(J.aI,t)
inherit(J.b8,t)
inherit(J.aJ,t)
inherit(H.bA,t)
inherit(H.bc,t)
inherit(W.f,t)
inherit(W.dQ,t)
inherit(W.dX,t)
inherit(W.b2,t)
inherit(W.a6,t)
inherit(W.cZ,t)
inherit(W.e9,t)
inherit(W.ea,t)
inherit(W.eb,t)
inherit(W.cb,t)
inherit(W.cc,t)
inherit(W.cd,t)
inherit(W.d_,t)
inherit(W.cf,t)
inherit(W.d1,t)
inherit(W.ef,t)
inherit(W.h,t)
inherit(W.d3,t)
inherit(W.eN,t)
inherit(W.d6,t)
inherit(W.f5,t)
inherit(W.fe,t)
inherit(W.da,t)
inherit(W.cD,t)
inherit(W.dd,t)
inherit(W.ai,t)
inherit(W.dh,t)
inherit(W.cH,t)
inherit(W.dj,t)
inherit(W.aj,t)
inherit(W.dp,t)
inherit(W.ds,t)
inherit(W.hj,t)
inherit(W.du,t)
inherit(W.ho,t)
inherit(W.cW,t)
inherit(W.hx,t)
inherit(W.hz,t)
inherit(W.dz,t)
inherit(W.dB,t)
inherit(W.dD,t)
inherit(W.dF,t)
inherit(W.dH,t)
inherit(P.d8,t)
inherit(P.fc,t)
inherit(P.df,t)
inherit(P.fF,t)
inherit(P.fG,t)
inherit(P.fK,t)
inherit(P.dq,t)
inherit(P.dw,t)
inherit(P.dU,t)
inherit(P.fQ,t)
inherit(P.fR,t)
inherit(P.dl,t)
t=J.bx
inherit(J.fD,t)
inherit(J.aU,t)
inherit(J.aK,t)
inherit(J.jr,J.aI)
t=J.b8
inherit(J.cs,t)
inherit(J.cr,t)
t=P.X
inherit(H.l,t)
inherit(H.cw,t)
inherit(H.cX,t)
t=H.l
inherit(H.b9,t)
inherit(H.f2,t)
inherit(H.ej,H.cw)
t=P.cq
inherit(H.f8,t)
inherit(H.hD,t)
t=H.b9
inherit(H.by,t)
inherit(P.f4,t)
t=H.aE
inherit(H.j6,t)
inherit(H.j7,t)
inherit(H.i6,t)
inherit(H.hS,t)
inherit(H.eS,t)
inherit(H.eT,t)
inherit(H.id,t)
inherit(H.hl,t)
inherit(H.hm,t)
inherit(H.j8,t)
inherit(H.iQ,t)
inherit(H.iR,t)
inherit(H.iS,t)
inherit(H.iT,t)
inherit(H.iU,t)
inherit(H.hf,t)
inherit(H.eY,t)
inherit(H.iM,t)
inherit(H.iN,t)
inherit(H.iO,t)
inherit(P.hH,t)
inherit(P.hG,t)
inherit(P.hI,t)
inherit(P.hJ,t)
inherit(P.hW,t)
inherit(P.i_,t)
inherit(P.hX,t)
inherit(P.hY,t)
inherit(P.hZ,t)
inherit(P.i2,t)
inherit(P.i3,t)
inherit(P.i1,t)
inherit(P.i0,t)
inherit(P.h9,t)
inherit(P.ha,t)
inherit(P.iy,t)
inherit(P.ii,t)
inherit(P.ih,t)
inherit(P.ij,t)
inherit(P.f7,t)
inherit(P.eh,t)
inherit(P.ei,t)
inherit(W.ek,t)
inherit(W.h6,t)
inherit(W.hE,t)
inherit(W.hU,t)
inherit(W.fs,t)
inherit(W.fr,t)
inherit(W.il,t)
inherit(W.im,t)
inherit(W.it,t)
inherit(W.iu,t)
inherit(P.iB,t)
inherit(B.j1,t)
inherit(B.j2,t)
inherit(B.j3,t)
inherit(B.j4,t)
inherit(B.j5,t)
inherit(B.fx,t)
inherit(B.fy,t)
inherit(B.fz,t)
inherit(B.fA,t)
inherit(B.fY,t)
inherit(A.iL,t)
inherit(L.iX,t)
inherit(L.iY,t)
inherit(L.iZ,t)
inherit(L.iW,t)
t=H.hL
inherit(H.bj,t)
inherit(H.bX,t)
t=P.b4
inherit(H.ft,t)
inherit(H.eZ,t)
inherit(H.hv,t)
inherit(H.hs,t)
inherit(H.dY,t)
inherit(H.fS,t)
inherit(P.c6,t)
inherit(P.cG,t)
inherit(P.a5,t)
inherit(P.hw,t)
inherit(P.hu,t)
inherit(P.be,t)
inherit(P.e_,t)
inherit(P.e8,t)
t=H.hf
inherit(H.h2,t)
inherit(H.bs,t)
inherit(H.hF,P.c6)
inherit(P.cv,P.bb)
t=P.cv
inherit(H.ag,t)
inherit(W.hK,t)
t=H.bc
inherit(H.fj,t)
inherit(H.cz,t)
t=H.cz
inherit(H.bO,t)
inherit(H.bQ,t)
inherit(H.bP,H.bO)
inherit(H.cA,H.bP)
inherit(H.bR,H.bQ)
inherit(H.cB,H.bR)
t=H.cA
inherit(H.cy,t)
inherit(H.fk,t)
t=H.cB
inherit(H.fl,t)
inherit(H.fm,t)
inherit(H.fn,t)
inherit(H.fo,t)
inherit(H.fp,t)
inherit(H.cC,t)
inherit(H.fq,t)
inherit(P.ir,P.hM)
inherit(P.ig,P.iv)
inherit(P.i9,H.ag)
inherit(P.fU,P.fV)
inherit(P.i5,P.fU)
inherit(P.i7,P.i5)
inherit(P.ct,P.bN)
t=P.ad
inherit(P.a0,t)
inherit(P.x,t)
t=P.a5
inherit(P.cI,t)
inherit(P.eR,t)
t=W.f
inherit(W.r,t)
inherit(W.au,t)
inherit(W.eF,t)
inherit(W.bw,t)
inherit(W.bz,t)
inherit(W.fH,t)
inherit(W.cK,t)
inherit(W.bT,t)
inherit(W.bV,t)
inherit(W.hB,t)
inherit(W.hC,t)
inherit(W.bJ,t)
inherit(W.jK,t)
inherit(P.dV,t)
inherit(P.b0,t)
t=W.r
inherit(W.a7,t)
inherit(W.aD,t)
inherit(W.bt,t)
t=W.a7
inherit(W.k,t)
inherit(P.w,t)
t=W.au
inherit(W.c5,t)
inherit(W.eM,t)
inherit(W.f6,t)
t=W.k
inherit(W.dR,t)
inherit(W.dS,t)
inherit(W.aB,t)
inherit(W.c7,t)
inherit(W.ca,t)
inherit(W.eJ,t)
inherit(W.co,t)
inherit(W.b7,t)
inherit(W.fT,t)
inherit(W.cQ,t)
inherit(W.hd,t)
inherit(W.he,t)
inherit(W.bF,t)
t=W.b2
inherit(W.e0,t)
inherit(W.e2,t)
inherit(W.e3,t)
inherit(W.e6,t)
t=W.a6
inherit(W.e1,t)
inherit(W.e5,t)
inherit(W.e7,t)
inherit(W.b1,W.cZ)
inherit(W.ec,W.cc)
inherit(W.ed,W.cd)
inherit(W.d0,W.d_)
inherit(W.ce,W.d0)
inherit(W.d2,W.d1)
inherit(W.ee,W.d2)
inherit(W.d4,W.d3)
inherit(W.eE,W.d4)
inherit(W.d7,W.d6)
inherit(W.bv,W.d7)
inherit(W.cp,W.bt)
inherit(W.eO,W.bw)
t=W.h
inherit(W.aT,t)
inherit(P.hA,t)
t=W.aT
inherit(W.aL,t)
inherit(W.M,t)
inherit(W.aS,t)
inherit(W.fg,W.bz)
inherit(W.db,W.da)
inherit(W.fh,W.db)
inherit(W.T,P.ct)
inherit(W.de,W.dd)
inherit(W.bB,W.de)
inherit(W.di,W.dh)
inherit(W.fE,W.di)
inherit(W.bU,W.bT)
inherit(W.fZ,W.bU)
inherit(W.dk,W.dj)
inherit(W.h0,W.dk)
inherit(W.h5,W.dp)
inherit(W.dt,W.ds)
inherit(W.hg,W.dt)
inherit(W.bW,W.bV)
inherit(W.hh,W.bW)
inherit(W.dv,W.du)
inherit(W.hn,W.dv)
inherit(W.aV,W.M)
inherit(W.dA,W.dz)
inherit(W.hN,W.dA)
inherit(W.hP,W.cf)
inherit(W.dC,W.dB)
inherit(W.i4,W.dC)
inherit(W.dE,W.dD)
inherit(W.dc,W.dE)
inherit(W.dG,W.dF)
inherit(W.io,W.dG)
inherit(W.dI,W.dH)
inherit(W.ip,W.dI)
inherit(W.hQ,W.hK)
inherit(W.bg,P.h7)
inherit(W.ax,W.bg)
inherit(W.hT,P.h8)
inherit(W.is,W.bS)
inherit(P.Z,P.ie)
t=P.w
inherit(P.em,t)
inherit(P.en,t)
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
inherit(P.eG,t)
inherit(P.af,t)
inherit(P.f9,t)
inherit(P.fB,t)
inherit(P.bD,t)
t=P.af
inherit(P.eI,t)
inherit(P.a9,t)
inherit(P.eQ,t)
inherit(P.hc,t)
inherit(P.bG,t)
inherit(P.hy,t)
inherit(P.d9,P.d8)
inherit(P.f_,P.d9)
inherit(P.dg,P.df)
inherit(P.fu,P.dg)
inherit(P.fL,P.a9)
inherit(P.dr,P.dq)
inherit(P.hb,P.dr)
inherit(P.bH,P.bG)
inherit(P.dx,P.dw)
inherit(P.hp,P.dx)
inherit(P.fv,P.b0)
inherit(P.dm,P.dl)
inherit(P.h1,P.dm)
t=G.fi
inherit(G.h_,t)
inherit(G.bf,t)
inherit(G.f0,t)
inherit(G.ff,t)
inherit(G.fO,t)
inherit(A.aQ,t)
inherit(A.fN,t)
t=G.h_
inherit(G.dW,t)
inherit(A.ah,t)
inherit(B.fw,G.dW)
t=G.f0
inherit(G.aN,t)
inherit(G.aF,t)
inherit(G.aa,t)
t=G.bf
inherit(G.eP,t)
inherit(G.fa,t)
inherit(G.fC,t)
inherit(G.ht,G.bI)
inherit(R.h4,R.h3)
mixin(H.bO,P.m)
mixin(H.bP,H.b6)
mixin(H.bQ,P.m)
mixin(H.bR,H.b6)
mixin(P.bN,P.m)
mixin(W.cZ,W.e4)
mixin(W.d_,P.m)
mixin(W.d0,W.n)
mixin(W.d1,P.m)
mixin(W.d2,W.n)
mixin(W.d3,P.m)
mixin(W.d4,W.n)
mixin(W.d6,P.m)
mixin(W.d7,W.n)
mixin(W.da,P.m)
mixin(W.db,W.n)
mixin(W.dd,P.m)
mixin(W.de,W.n)
mixin(W.dh,P.m)
mixin(W.di,W.n)
mixin(W.bT,P.m)
mixin(W.bU,W.n)
mixin(W.dj,P.m)
mixin(W.dk,W.n)
mixin(W.dp,P.bb)
mixin(W.ds,P.m)
mixin(W.dt,W.n)
mixin(W.bV,P.m)
mixin(W.bW,W.n)
mixin(W.du,P.m)
mixin(W.dv,W.n)
mixin(W.dz,P.m)
mixin(W.dA,W.n)
mixin(W.dB,P.m)
mixin(W.dC,W.n)
mixin(W.dD,P.m)
mixin(W.dE,W.n)
mixin(W.dF,P.m)
mixin(W.dG,W.n)
mixin(W.dH,P.m)
mixin(W.dI,W.n)
mixin(P.d8,P.m)
mixin(P.d9,W.n)
mixin(P.df,P.m)
mixin(P.dg,W.n)
mixin(P.dq,P.m)
mixin(P.dr,W.n)
mixin(P.dw,P.m)
mixin(P.dx,W.n)
mixin(P.dl,P.m)
mixin(P.dm,W.n)})();(function constants(){C.q=W.aB.prototype
C.I=W.c7.prototype
C.w=W.b1.prototype
C.n=W.ca.prototype
C.J=W.cb.prototype
C.K=W.co.prototype
C.j=W.cp.prototype
C.L=J.a.prototype
C.a=J.aI.prototype
C.o=J.cr.prototype
C.b=J.cs.prototype
C.c=J.b8.prototype
C.h=J.aJ.prototype
C.S=J.aK.prototype
C.u=H.cy.prototype
C.A=W.bB.prototype
C.B=J.fD.prototype
C.C=W.cH.prototype
C.H=W.cQ.prototype
C.v=J.aU.prototype
C.at=W.aV.prototype
C.au=W.bJ.prototype
C.f=new P.ig()
C.x=new P.aG(0)
C.M=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.N=function(hooks) {
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
C.y=function(hooks) { return hooks; }

C.O=function(getTagFallback) {
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
C.P=function() {
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
C.Q=function(hooks) {
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
C.R=function(hooks) {
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
C.z=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.T=H.C(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.p])
C.U=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.V=makeConstList([])
C.r=H.C(makeConstList(["bind","if","ref","repeat","syntax"]),[P.p])
C.t=H.C(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.p])
C.W=new G.y("vec3","vertex btangents",0)
C.d=new G.y("vec3","",0)
C.X=new G.y("vec4","delta from light",0)
C.p=new G.y("","",0)
C.D=new G.y("vec3","vertex coordinates",0)
C.Y=new G.y("vec3","vertex binormals",0)
C.E=new G.y("vec4","for wireframe",0)
C.Z=new G.y("vec4","per vertex color",0)
C.a_=new G.y("float","for normal maps",0)
C.k=new G.y("mat4","",0)
C.a1=new G.y("mat4","",4)
C.a0=new G.y("mat4","",128)
C.e=new G.y("float","",0)
C.a2=new G.y("float","",4)
C.a3=new G.y("float","depth for shadowmaps",0)
C.i=new G.y("sampler2D","",0)
C.a4=new G.y("float","for bump maps",0)
C.a5=new G.y("vec2","texture uvs",0)
C.a6=new G.y("float","time since program start in sec",0)
C.l=new G.y("vec2","",0)
C.a7=new G.y("samplerCube","",0)
C.m=new G.y("vec4","",0)
C.a8=new G.y("vec3","vertex normals",0)
C.a9=new G.y("sampler2DShadow","",0)
C.F=new G.y("vec3","per vertex color",0)
C.G=new G.y("mat3","",0)
C.aa=new G.y("vec3","vertex tangents",0)
C.ab=H.N("oF")
C.ac=H.N("oG")
C.ad=H.N("eH")
C.ae=H.N("oH")
C.af=H.N("oI")
C.ag=H.N("kK")
C.ah=H.N("oJ")
C.ai=H.N("kN")
C.aj=H.N("P")
C.ak=H.N("p")
C.al=H.N("lf")
C.am=H.N("lg")
C.an=H.N("oK")
C.ao=H.N("lh")
C.ap=H.N("ao")
C.aq=H.N("a0")
C.ar=H.N("x")
C.as=H.N("ad")})();(function staticFields(){$.kW="$cachedFunction"
$.kX="$cachedInvocation"
$.ko=null
$.km=null
$.jP=!1
$.jW=null
$.lw=null
$.lQ=null
$.iE=null
$.iP=null
$.jX=null
$.bk=null
$.bY=null
$.bZ=null
$.jQ=!1
$.E=C.f
$.kI=0
$.ar=null
$.jn=null
$.kG=null
$.kF=null
$.kC=null
$.kB=null
$.kA=null
$.kz=null
$.oa=0
$.ob=0
$.k0=0
$.lN=0
$.c3=0
$.c4=0
$.oB=!1
$.lD=0
$.iG=null
$.or=0.1
$.oq=50})();(function lazyInitializers(){lazy($,"ky","$get$ky",function(){return H.lF("_$dart_dartClosure")})
lazy($,"jt","$get$jt",function(){return H.lF("_$dart_js")})
lazy($,"kL","$get$kL",function(){return H.ne()})
lazy($,"kM","$get$kM",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.kI
$.kI=t+1
t="expando$key$"+t}return new P.el(t,null,[P.x])})
lazy($,"l3","$get$l3",function(){return H.ak(H.hr({
toString:function(){return"$receiver$"}}))})
lazy($,"l4","$get$l4",function(){return H.ak(H.hr({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"l5","$get$l5",function(){return H.ak(H.hr(null))})
lazy($,"l6","$get$l6",function(){return H.ak(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"la","$get$la",function(){return H.ak(H.hr(void 0))})
lazy($,"lb","$get$lb",function(){return H.ak(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"l8","$get$l8",function(){return H.ak(H.l9(null))})
lazy($,"l7","$get$l7",function(){return H.ak(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"ld","$get$ld",function(){return H.ak(H.l9(void 0))})
lazy($,"lc","$get$lc",function(){return H.ak(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"jM","$get$jM",function(){return P.nM()})
lazy($,"c_","$get$c_",function(){return[]})
lazy($,"kx","$get$kx",function(){return{}})
lazy($,"ln","$get$ln",function(){return P.jx(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"jN","$get$jN",function(){return P.K()})
lazy($,"iD","$get$iD",function(){return P.kP(P.x,P.ao)})
lazy($,"c1","$get$c1",function(){return P.kP(P.p,P.ao)})
lazy($,"jS","$get$jS",function(){return T.z(0,1,0)})
lazy($,"jT","$get$jT",function(){return T.z(0,0,1)})
lazy($,"kZ","$get$kZ",function(){return new G.cU(1281,0,4294967295)})
lazy($,"kk","$get$kk",function(){return new G.cT(1281,1281,1281)})
lazy($,"V","$get$V",function(){return P.at(["cBlendEquation",C.p,"cDepthWrite",C.p,"cDepthTest",C.p,"cStencilFunc",C.p,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColors",C.F,"aColorAlpha",C.Z,"aPosition",C.D,"aTexUV",C.a5,"aNormal",C.a8,"aBinormal",C.Y,"aCenter",C.E,"aPointSize",C.e,"aBoneIndex",C.m,"aBoneWeight",C.m,"aTangent",C.aa,"aBitangent",C.W,"iaRotation",C.m,"iaTranslation",C.d,"iaScale",C.d,"vColor",C.F,"vTexUV",C.l,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.D,"vPositionFromLight",C.X,"vCenter",C.E,"vDepth",C.a3,"uTransformationMatrix",C.k,"uModelMatrix",C.k,"uNormalMatrix",C.G,"uConvolutionMatrix",C.G,"uPerspectiveViewMatrix",C.k,"uLightPerspectiveViewMatrix",C.k,"uShadowMap",C.a9,"uTexture",C.i,"uTexture2",C.i,"uTexture3",C.i,"uTexture4",C.i,"uSpecularMap",C.i,"uNormalMap",C.i,"uBumpMap",C.i,"uDepthMap",C.i,"uCubeTexture",C.a7,"uAnimationTable",C.i,"uTime",C.a6,"uCameraNear",C.e,"uCameraFar",C.e,"uFogNear",C.e,"uFogFar",C.e,"uPointSize",C.e,"uScale",C.e,"uAngle",C.e,"uCanvasSize",C.l,"uCenter2",C.l,"uCutOff",C.e,"uShininess",C.e,"uShadowBias",C.e,"uOpacity",C.e,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.m,"uColorAlpha2",C.m,"uEyePosition",C.d,"uMaterial",C.k,"uRange",C.l,"uDirection",C.l,"uBoneMatrices",C.a0,"uLightDescs",C.a1,"uLightCount",C.e,"uLightTypes",C.a2,"uBumpScale",C.a4,"uNormalScale",C.a_])})
lazy($,"l1","$get$l1",function(){var t=G.l0()
t.d=!1
t.b=!0
t.a=!1
t.f=9728
t.r=9728
return t})
lazy($,"l2","$get$l2",function(){var t=G.l0()
t.d=!1
t.b=!0
t.a=!1
t.c=!0
return t})
lazy($,"kH","$get$kH",function(){return G.fb("empty-mat")})
lazy($,"ku","$get$ku",function(){return T.z(0.4,0.4,0.4)})
lazy($,"kt","$get$kt",function(){return T.z(0.2,0.2,0.2)})
lazy($,"kr","$get$kr",function(){return T.z(0,0,0)})
lazy($,"ks","$get$ks",function(){return T.z(0,0,1)})
lazy($,"kv","$get$kv",function(){return T.z(0,0,0.5)})
lazy($,"kw","$get$kw",function(){return T.z(1,1,0)})
lazy($,"lU","$get$lU",function(){var t=G.aR("ShadowMapV")
t.aF(["aPosition"])
t.aa(["uLightPerspectiveViewMatrix","uModelMatrix"])
t.ab(["    gl_Position = uLightPerspectiveViewMatrix * uModelMatrix *\n                  vec4(aPosition, 1.0);\n    "])
return t})
lazy($,"lT","$get$lT",function(){var t=G.aR("ShadowMapF")
t.ab(["oFragColor.r = 1.0;"])
return t})
lazy($,"m1","$get$m1",function(){var t=G.aR("copyV")
t.aF(["aPosition","aTexUV"])
t.aI(["vTexUV"])
t.ab(["gl_Position = vec4(aPosition, 1.0);","vTexUV = aTexUV;"])
return t})
lazy($,"m0","$get$m0",function(){var t=G.aR("copyF")
t.aI(["vTexUV"])
t.aa(["uTexture","uCutOff","uCameraFar","uCameraNear"])
t.ab(["   float d = texture(uTexture,  vTexUV).x;\n   float near = uCameraNear;\n   float far = uCameraFar;\n   float gray = (2.0 * near) / (far + near - d * (far - near));\n   oFragColor.rgb = vec3(gray);\n   // oFragColor.rgb = vec3(d >= uCutOff ? d : 0.0);\n   // oFragColor.rgb = vec3(d);\n"])
return t})
lazy($,"lX","$get$lX",function(){var t=G.aR("SolidColor")
t.aF(["aPosition"])
t.aa(["uPerspectiveViewMatrix","uModelMatrix"])
t.ab(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"])
return t})
lazy($,"lW","$get$lW",function(){var t=G.aR("SolidColorF")
t.aa(["uColor"])
t.ab(["oFragColor = vec4( uColor, 1.0 );"])
return t})
lazy($,"lk","$get$lk",function(){return[T.z(0,0,1),T.z(0,0,-1),T.z(0,1,0),T.z(0,-1,0),T.z(1,0,0),T.z(-1,0,0)]})
lazy($,"kJ","$get$kJ",function(){return[G.I(0,11,5),G.I(0,5,1),G.I(0,1,7),G.I(0,7,10),G.I(0,10,11),G.I(1,5,9),G.I(5,11,4),G.I(11,10,2),G.I(10,7,6),G.I(7,1,8),G.I(3,9,4),G.I(3,4,2),G.I(3,2,6),G.I(3,6,8),G.I(3,8,9),G.I(4,9,5),G.I(2,4,11),G.I(6,2,10),G.I(8,6,7),G.I(9,8,1)]})
lazy($,"lZ","$get$lZ",function(){return(1+P.oC(5))/2})
lazy($,"jq","$get$jq",function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=$.$get$lZ()
s=T.z(-1,t,0)
s.C(0)
r=T.z(1,t,0)
r.C(0)
q=T.z(-1,-t,0)
q.C(0)
p=T.z(1,-t,0)
p.C(0)
o=T.z(0,-1,t)
o.C(0)
n=T.z(0,1,t)
n.C(0)
m=T.z(0,-1,-t)
m.C(0)
l=T.z(0,1,-t)
l.C(0)
k=T.z(t,0,-1)
k.C(0)
j=T.z(t,0,1)
j.C(0)
i=T.z(-t,0,-1)
i.C(0)
t=T.z(-t,0,1)
t.C(0)
return[s,r,q,p,o,n,m,l,k,j,i,t]})
lazy($,"lK","$get$lK",function(){var t=G.aR("LightBlinnPhongShadowV")
t.aF(["aPosition","aNormal"])
t.aI(["vPosition","vNormal","vPositionFromLight"])
t.aa(["uPerspectiveViewMatrix","uLightPerspectiveViewMatrix","uModelMatrix","uNormalMatrix"])
t.ab(["        vec4 pos = uModelMatrix * vec4(aPosition, 1.0);\n        vPositionFromLight = uLightPerspectiveViewMatrix * pos;\n        gl_Position = uPerspectiveViewMatrix * pos;\n        vPosition = pos.xyz;\n        vNormal = uNormalMatrix * aNormal;\n        "])
return t})
lazy($,"lI","$get$lI",function(){var t=G.aR("LightBlinnPhongShadowF")
t.aI(["vPosition","vNormal","vPositionFromLight"])
t.aa(["uLightDescs","uLightTypes","uShininess"])
t.aa(["uShadowMap","uEyePosition","uColor","uShadowBias"])
t.bM(["\n    vec3 depth = vPositionFromLight.xyz / vPositionFromLight.w;\n\t\t// depth is in [-1, 1] but we want [0, 1] for the texture lookup\n\t\tdepth = 0.5 * depth + vec3(0.5);\n\n    float shadow = GetShadow(depth, uShadowMap, 0.001, 0.001);\n\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n    if (shadow > 0.0) {\n        acc = CombinedLight(vPosition, vNormal, uEyePosition,\n                            uLightDescs, uLightTypes, uShininess);\n    }\n\n    oFragColor.rgb = shadow * acc.diffuse +\n                       shadow * acc.specular +\n                       uColor;\n    oFragColor.a = 1.0;\n    // if ( oFragColor.r != 66.0)  gl_FragColor.rgb = vec3(shadow);\n\n      "],["","// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n","\nfloat GetShadow(vec3 depth, sampler2DShadow shadowMap, float bias1, float bias2) {\n    depth.z = depth.z - bias1;\n    return texture(shadowMap, depth);\n    //return 1.0 - smoothstep(bias1, bias2, depth.z - d);\n}\n"])
return t})
lazy($,"lP","$get$lP",function(){return T.z(11,20,0)})
lazy($,"lB","$get$lB",function(){return T.z(0,-30,0)})
lazy($,"ap","$get$ap",function(){var t,s,r,q,p,o
t=$.$get$lB()
s=$.$get$ks()
r=$.$get$kr()
q=T.fd()
p=T.fd()
o=$.$get$lP()
return P.at(["idDirectional",new G.aF(t,s,r,40,q,p,1,"dir",!1,!0),"idSpot",new G.aa(o,t,s,r,40,0.5235987755982988,0.5,1,0.5,44,T.fd(),T.fd(),2,"spot",!1,!0),"idPoint",new G.aN(o,$.$get$kv(),s,40,3,"point",!1,!0)])})
lazy($,"lL","$get$lL",function(){var t=G.fb("matGray")
t.J("uColor",$.$get$ku())
t.J("uShininess",10)
return t})
lazy($,"lM","$get$lM",function(){var t=G.fb("objects")
t.J("uColor",$.$get$kt())
t.J("uShininess",10)
return t})
lazy($,"lJ","$get$lJ",function(){var t=G.fb("light")
t.J("uColor",$.$get$kw())
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
mangledGlobalNames:{x:"int",a0:"double",ad:"num",p:"String",ao:"bool",P:"Null",j:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.r},{func:1,ret:P.ao,args:[W.a7,P.p,P.p,W.bL]},{func:1,v:true,args:[P.H],opt:[P.bd]},{func:1,ret:P.x,args:[P.J,P.J]},{func:1,v:true,args:[W.h]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,Blob:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSCharsetRule:J.a,CSSConditionRule:J.a,CSSFontFaceRule:J.a,CSSGroupingRule:J.a,CSSImportRule:J.a,CSSKeyframeRule:J.a,MozCSSKeyframeRule:J.a,WebKitCSSKeyframeRule:J.a,CSSKeyframesRule:J.a,MozCSSKeyframesRule:J.a,WebKitCSSKeyframesRule:J.a,CSSMediaRule:J.a,CSSNamespaceRule:J.a,CSSPageRule:J.a,CSSRule:J.a,CSSStyleRule:J.a,CSSStyleSheet:J.a,CSSSupportsRule:J.a,CSSVariableReferenceValue:J.a,CSSViewportRule:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMParser:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,File:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,Gamepad:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MimeType:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechGrammar:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,StyleSheet:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,Touch:J.a,TrackDefault:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGLength:J.a,SVGNumber:J.a,SVGPreserveAspectRatio:J.a,SVGTransform:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioParamMap:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bA,ArrayBufferView:H.bc,DataView:H.fj,Float32Array:H.cy,Float64Array:H.fk,Int16Array:H.fl,Int32Array:H.fm,Int8Array:H.fn,Uint16Array:H.fo,Uint32Array:H.fp,Uint8ClampedArray:H.cC,CanvasPixelArray:H.cC,Uint8Array:H.fq,HTMLAudioElement:W.k,HTMLBRElement:W.k,HTMLBaseElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLImageElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMediaElement:W.k,HTMLMenuElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTextAreaElement:W.k,HTMLTimeElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLVideoElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLFrameSetElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,Accelerometer:W.c5,LinearAccelerationSensor:W.c5,AccessibleNodeList:W.dQ,HTMLAnchorElement:W.dR,HTMLAreaElement:W.dS,HTMLBodyElement:W.aB,HTMLCanvasElement:W.c7,CanvasRenderingContext2D:W.dX,CDATASection:W.aD,CharacterData:W.aD,Comment:W.aD,ProcessingInstruction:W.aD,Text:W.aD,CSSPerspective:W.e0,CSSPositionValue:W.e1,CSSRotation:W.e2,CSSScale:W.e3,CSSStyleDeclaration:W.b1,MSStyleCSSProperties:W.b1,CSS2Properties:W.b1,CSSImageValue:W.a6,CSSKeywordValue:W.a6,CSSNumericValue:W.a6,CSSResourceValue:W.a6,CSSUnitValue:W.a6,CSSURLImageValue:W.a6,CSSStyleValue:W.a6,CSSMatrixComponent:W.b2,CSSSkew:W.b2,CSSTransformComponent:W.b2,CSSTransformValue:W.e5,CSSTranslation:W.e6,CSSUnparsedValue:W.e7,DataTransferItemList:W.e9,DeviceAcceleration:W.ea,HTMLDivElement:W.ca,XMLDocument:W.bt,Document:W.bt,DOMException:W.eb,DOMImplementation:W.cb,DOMMatrix:W.ec,DOMMatrixReadOnly:W.cc,DOMPoint:W.ed,DOMPointReadOnly:W.cd,ClientRectList:W.ce,DOMRectList:W.ce,DOMRectReadOnly:W.cf,DOMStringList:W.ee,DOMTokenList:W.ef,Element:W.a7,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,AccessibleNode:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MessagePort:W.f,MIDIAccess:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RemotePlayback:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SourceBuffer:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,TextTrack:W.f,TextTrackCue:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,VTTCue:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,ServiceWorker:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,FileList:W.eE,FileWriter:W.eF,HTMLFormElement:W.eJ,Gyroscope:W.eM,HTMLHeadElement:W.co,History:W.eN,HTMLCollection:W.bv,HTMLFormControlsCollection:W.bv,HTMLOptionsCollection:W.bv,HTMLDocument:W.cp,XMLHttpRequest:W.eO,XMLHttpRequestUpload:W.bw,XMLHttpRequestEventTarget:W.bw,HTMLInputElement:W.b7,KeyboardEvent:W.aL,Location:W.f5,Magnetometer:W.f6,MediaList:W.fe,MIDIOutput:W.fg,MIDIInput:W.bz,MIDIPort:W.bz,MimeTypeArray:W.fh,PointerEvent:W.M,MouseEvent:W.M,DragEvent:W.M,DocumentFragment:W.r,ShadowRoot:W.r,Attr:W.r,DocumentType:W.r,Node:W.r,NodeIterator:W.cD,NodeList:W.bB,RadioNodeList:W.bB,Plugin:W.ai,PluginArray:W.fE,PresentationConnection:W.fH,Range:W.cH,RTCDataChannel:W.cK,DataChannel:W.cK,HTMLSelectElement:W.fT,AbsoluteOrientationSensor:W.au,AmbientLightSensor:W.au,OrientationSensor:W.au,RelativeOrientationSensor:W.au,Sensor:W.au,SourceBufferList:W.fZ,SpeechGrammarList:W.h0,SpeechRecognitionResult:W.aj,Storage:W.h5,HTMLTableElement:W.cQ,HTMLTableRowElement:W.hd,HTMLTableSectionElement:W.he,HTMLTemplateElement:W.bF,TextTrackCueList:W.hg,TextTrackList:W.hh,TimeRanges:W.hj,TouchEvent:W.aS,TouchList:W.hn,TrackDefaultList:W.ho,TreeWalker:W.cW,CompositionEvent:W.aT,FocusEvent:W.aT,TextEvent:W.aT,UIEvent:W.aT,URL:W.hx,VRStageBoundsPoint:W.hz,VideoTrackList:W.hB,WebSocket:W.hC,WheelEvent:W.aV,Window:W.bJ,DOMWindow:W.bJ,CSSRuleList:W.hN,DOMRect:W.hP,GamepadList:W.i4,NamedNodeMap:W.dc,MozNamedAttrMap:W.dc,SpeechRecognitionResultList:W.io,StyleSheetList:W.ip,IDBVersionChangeEvent:P.hA,SVGFEBlendElement:P.em,SVGFEColorMatrixElement:P.en,SVGFEComponentTransferElement:P.eo,SVGFECompositeElement:P.ep,SVGFEConvolveMatrixElement:P.eq,SVGFEDiffuseLightingElement:P.er,SVGFEDisplacementMapElement:P.es,SVGFEFloodElement:P.et,SVGFEGaussianBlurElement:P.eu,SVGFEImageElement:P.ev,SVGFEMergeElement:P.ew,SVGFEMorphologyElement:P.ex,SVGFEOffsetElement:P.ey,SVGFEPointLightElement:P.ez,SVGFESpecularLightingElement:P.eA,SVGFESpotLightElement:P.eB,SVGFETileElement:P.eC,SVGFETurbulenceElement:P.eD,SVGFilterElement:P.eG,SVGForeignObjectElement:P.eI,SVGCircleElement:P.a9,SVGEllipseElement:P.a9,SVGLineElement:P.a9,SVGPathElement:P.a9,SVGPolygonElement:P.a9,SVGPolylineElement:P.a9,SVGGeometryElement:P.a9,SVGAElement:P.af,SVGClipPathElement:P.af,SVGDefsElement:P.af,SVGGElement:P.af,SVGSwitchElement:P.af,SVGGraphicsElement:P.af,SVGImageElement:P.eQ,SVGLengthList:P.f_,SVGMaskElement:P.f9,SVGMatrix:P.fc,SVGNumberList:P.fu,SVGPatternElement:P.fB,SVGPoint:P.fF,SVGPointList:P.fG,SVGRect:P.fK,SVGRectElement:P.fL,SVGScriptElement:P.bD,SVGStringList:P.hb,SVGAnimateElement:P.w,SVGAnimateMotionElement:P.w,SVGAnimateTransformElement:P.w,SVGAnimationElement:P.w,SVGDescElement:P.w,SVGDiscardElement:P.w,SVGFEDistantLightElement:P.w,SVGFEFuncAElement:P.w,SVGFEFuncBElement:P.w,SVGFEFuncGElement:P.w,SVGFEFuncRElement:P.w,SVGFEMergeNodeElement:P.w,SVGLinearGradientElement:P.w,SVGMarkerElement:P.w,SVGMetadataElement:P.w,SVGRadialGradientElement:P.w,SVGSetElement:P.w,SVGStopElement:P.w,SVGStyleElement:P.w,SVGSymbolElement:P.w,SVGTitleElement:P.w,SVGViewElement:P.w,SVGGradientElement:P.w,SVGComponentTransferFunctionElement:P.w,SVGFEDropShadowElement:P.w,SVGMPathElement:P.w,SVGElement:P.w,SVGSVGElement:P.hc,SVGTextPathElement:P.bG,SVGTextContentElement:P.bG,SVGTSpanElement:P.bH,SVGTextElement:P.bH,SVGTextPositioningElement:P.bH,SVGTransformList:P.hp,SVGUseElement:P.hy,AudioBuffer:P.dU,AudioTrackList:P.dV,AudioContext:P.b0,webkitAudioContext:P.b0,BaseAudioContext:P.b0,OfflineAudioContext:P.fv,WebGLRenderingContext:P.fQ,WebGL2RenderingContext:P.fR,SQLResultSetRowList:P.h1})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,Blob:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSStyleSheet:true,CSSSupportsRule:true,CSSVariableReferenceValue:true,CSSViewportRule:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMParser:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,File:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,Gamepad:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechGrammar:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,StyleSheet:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,Touch:true,TrackDefault:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGLength:true,SVGNumber:true,SVGPreserveAspectRatio:true,SVGTransform:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioParamMap:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,Accelerometer:true,LinearAccelerationSensor:true,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSPositionValue:true,CSSRotation:true,CSSScale:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSSkew:true,CSSTransformComponent:false,CSSTransformValue:true,CSSTranslation:true,CSSUnparsedValue:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMMatrix:true,DOMMatrixReadOnly:false,DOMPoint:true,DOMPointReadOnly:false,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AccessibleNode:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnectionList:true,PresentationRequest:true,RemotePlayback:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SourceBuffer:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,TextTrack:true,TextTrackCue:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,VTTCue:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,ServiceWorker:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,FileList:true,FileWriter:true,HTMLFormElement:true,Gyroscope:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLInputElement:true,KeyboardEvent:true,Location:true,Magnetometer:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,PresentationConnection:true,Range:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,AbsoluteOrientationSensor:true,AmbientLightSensor:true,OrientationSensor:true,RelativeOrientationSensor:true,Sensor:false,SourceBufferList:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VRStageBoundsPoint:true,VideoTrackList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,IDBVersionChangeEvent:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGAElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLengthList:true,SVGMaskElement:true,SVGMatrix:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMetadataElement:true,SVGRadialGradientElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSymbolElement:true,SVGTitleElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGSVGElement:true,SVGTextPathElement:true,SVGTextContentElement:false,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransformList:true,SVGUseElement:true,AudioBuffer:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cz.$nativeSuperclassTag="ArrayBufferView"
H.bO.$nativeSuperclassTag="ArrayBufferView"
H.bP.$nativeSuperclassTag="ArrayBufferView"
H.cA.$nativeSuperclassTag="ArrayBufferView"
H.bQ.$nativeSuperclassTag="ArrayBufferView"
H.bR.$nativeSuperclassTag="ArrayBufferView"
H.cB.$nativeSuperclassTag="ArrayBufferView"
W.bT.$nativeSuperclassTag="EventTarget"
W.bU.$nativeSuperclassTag="EventTarget"
W.bV.$nativeSuperclassTag="EventTarget"
W.bW.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.lY(L.lV(),b)},[])
else (function(b){H.lY(L.lV(),b)})([])})})()