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
a[c]=function(){a[c]=function(){H.o7(b)}
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
return d?function(e){if(t===null)t=H.jK(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.jK(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.jK(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={jk:function jk(a){this.a=a},
jr:function(a,b,c,d){if(!!a.$isl)return new H.ei(a,b,[c,d])
return new H.cq(a,b,[c,d])},
eW:function(){return new P.b1("No element")},
mW:function(){return new P.b1("Too many elements")},
mV:function(){return new P.b1("Too few elements")},
nb:function(a,b){H.cI(a,0,J.bc(a)-1,b)},
cI:function(a,b,c,d){if(c-b<=32)H.na(a,b,c,d)
else H.n9(a,b,c,d)},
na:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.V(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.a8(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.j(a,q,s.h(a,p))
q=p}s.j(a,q,r)}},
n9:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.b(t>32)
s=C.b.O(t+1,6)
r=a3+s
q=a4-s
p=C.b.O(a3+a4,2)
o=p-s
n=p+s
t=J.V(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.a8(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.a8(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.a8(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.a8(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.a8(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.a8(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.a8(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.a8(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.a8(a5.$2(j,i),0)){h=i
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
H.cI(a2,a3,g-2,a5)
H.cI(a2,f+2,a4,a5)
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
break}}H.cI(a2,g,f,a5)}else H.cI(a2,g,f,a5)},
l:function l(){},
aV:function aV(){},
co:function co(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cq:function cq(a,b,c){this.a=a
this.b=b
this.$ti=c},
ei:function ei(a,b,c){this.a=a
this.b=b
this.$ti=c},
fa:function fa(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bn:function bn(a,b,c){this.a=a
this.b=b
this.$ti=c},
cW:function cW(a,b,c){this.a=a
this.b=b
this.$ti=c},
hy:function hy(a,b,c){this.a=a
this.b=b
this.$ti=c},
aT:function aT(){},
dK:function(a,b){var t=a.ar(b)
if(!u.globalState.d.cy)u.globalState.f.az()
return t},
iA:function(){++u.globalState.f.b},
iP:function(){--u.globalState.f.b
H.b(u.globalState.f.b>=0)},
lE:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.t(s).$isj)throw H.c(P.k7("Arguments to main must be a List: "+H.d(s)))
u.globalState=new H.i7(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$kA()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.hM(P.jq(null,H.aL),0)
q=P.w
s.sf5(new H.aa(0,null,null,null,null,null,0,[q,H.b2]))
s.sf8(new H.aa(0,null,null,null,null,null,0,[q,null]))
if(s.x){r=new H.i6()
s.Q=r
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.mQ,r)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.ns)}if(u.globalState.x)return
o=H.l6()
u.globalState.e=o
u.globalState.z.j(0,o.a,o)
u.globalState.d=o
if(H.b8(a,{func:1,args:[P.N]}))o.ar(new H.j_(t,a))
else if(H.b8(a,{func:1,args:[P.N,P.N]}))o.ar(new H.j0(t,a))
else o.ar(a)
u.globalState.f.az()},
ns:function(a){var t=P.ap(["command","print","msg",a])
return new H.a3(!0,P.b3(null,P.w)).P(t)},
l6:function(){var t,s
t=u.globalState.a++
s=P.w
t=new H.b2(t,new H.aa(0,null,null,null,null,null,0,[s,H.cG]),P.aD(null,null,null,s),u.createNewIsolate(),new H.cG(0,null,!1),new H.av(H.lA()),new H.av(H.lA()),!1,!1,[],P.aD(null,null,null,null),null,null,!1,!0,P.aD(null,null,null,null))
t.dT()
return t},
mS:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.mT()
return},
mT:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.c(P.r("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.c(P.r('Cannot extract URI from "'+t+'"'))},
mQ:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=new H.aK(!0,[]).a7(b.data)
s=J.V(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.nU(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.aK(!0,[]).a7(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.aK(!0,[]).a7(s.h(t,"replyTo"))
k=H.l6()
u.globalState.f.a.a3(0,new H.aL(k,new H.eT(q,p,o,n,m,l),"worker-start"))
u.globalState.d=k
u.globalState.f.az()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.mf(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.az()
break
case"close":u.globalState.ch.ax(0,$.$get$kB().h(0,a))
a.terminate()
u.globalState.f.az()
break
case"log":H.mP(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
j=P.ap(["command","print","msg",t])
j=new H.a3(!0,P.b3(null,P.w)).P(j)
s.toString
self.postMessage(j)}else P.Z(s.h(t,"msg"))
break
case"error":throw H.c(s.h(t,"msg"))}},
mP:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.ap(["command","log","msg",a])
r=new H.a3(!0,P.b3(null,P.w)).P(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.P(q)
t=H.at(q)
s=P.cc(t)
throw H.c(s)}},
mR:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.kI=$.kI+("_"+s)
$.kJ=$.kJ+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.M(0,["spawned",new H.b4(s,r),q,t.r])
r=new H.eU(t,d,a,c,b)
if(e){t.c4(q,q)
u.globalState.f.a.a3(0,new H.aL(t,r,"start isolate"))}else r.$0()},
nc:function(a,b){var t=new H.hg(!0,!1,null,0)
t.dM(a,b)
return t},
nt:function(a){return new H.aK(!0,[]).a7(new H.a3(!1,P.b3(null,P.w)).P(a))},
j_:function j_(a,b){this.a=a
this.b=b},
j0:function j0(a,b){this.a=a
this.b=b},
i7:function i7(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
b2:function b2(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
i1:function i1(a,b){this.a=a
this.b=b},
hM:function hM(a,b){this.a=a
this.b=b},
hN:function hN(a){this.a=a},
aL:function aL(a,b,c){this.a=a
this.b=b
this.c=c},
i6:function i6(){},
eT:function eT(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eU:function eU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hG:function hG(){},
b4:function b4(a,b){this.b=a
this.a=b},
i8:function i8(a,b){this.a=a
this.b=b},
bO:function bO(a,b,c){this.b=a
this.c=b
this.a=c},
cG:function cG(a,b,c){this.a=a
this.b=b
this.c=c},
hg:function hg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hh:function hh(a,b){this.a=a
this.b=b},
hi:function hi(a,b){this.a=a
this.b=b},
av:function av(a){this.a=a},
a3:function a3(a,b){this.a=a
this.b=b},
aK:function aK(a,b){this.a=a
this.b=b},
nO:function(a){return u.types[a]},
nW:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.t(a).$isu},
d:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.bd(a)
if(typeof t!=="string")throw H.c(H.O(a))
return t},
n7:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t=J.ao(t)
s=t[0]
r=t[1]
return new H.fM(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aE:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
br:function(a){var t,s,r,q,p,o,n,m,l
t=J.t(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.M||!!J.t(a).$isaI){p=C.A(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.j.b0(q,0)===36)q=C.j.dj(q,1)
l=H.dM(H.iD(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+l,u.mangledGlobalNames)},
Q:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
n5:function(a){return a.b?H.Q(a).getUTCFullYear()+0:H.Q(a).getFullYear()+0},
n3:function(a){return a.b?H.Q(a).getUTCMonth()+1:H.Q(a).getMonth()+1},
n_:function(a){return a.b?H.Q(a).getUTCDate()+0:H.Q(a).getDate()+0},
n0:function(a){return a.b?H.Q(a).getUTCHours()+0:H.Q(a).getHours()+0},
n2:function(a){return a.b?H.Q(a).getUTCMinutes()+0:H.Q(a).getMinutes()+0},
n4:function(a){return a.b?H.Q(a).getUTCSeconds()+0:H.Q(a).getSeconds()+0},
n1:function(a){return a.b?H.Q(a).getUTCMilliseconds()+0:H.Q(a).getMilliseconds()+0},
kH:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.c(H.O(a))
return a[b]},
b7:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a_(!0,b,"index",null)
t=J.bc(a)
if(b<0||C.b.bn(b,t))return P.C(b,a,"index",null,t)
return P.fJ(b,"index",null)},
O:function(a){return new P.a_(!0,a,null,null)},
li:function(a){if(typeof a!=="number")throw H.c(H.O(a))
return a},
c:function(a){var t
if(a==null)a=new P.cC()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.lG})
t.name=""}else t.toString=H.lG
return t},
lG:function(){return J.bd(this.dartException)},
L:function(a){throw H.c(a)},
B:function(a){throw H.c(P.al(a))},
ae:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.hm(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
hn:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
kT:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
kG:function(a,b){return new H.ft(a,b==null?null:b.method)},
jm:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.f_(a,s,t?null:b.receiver)},
P:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.j1(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.bc(r,16)&8191)===10)switch(q){case 438:return t.$1(H.jm(H.d(s)+" (Error "+q+")",null))
case 445:case 5007:return t.$1(H.kG(H.d(s)+" (Error "+q+")",null))}}if(a instanceof TypeError){p=$.$get$kN()
o=$.$get$kO()
n=$.$get$kP()
m=$.$get$kQ()
l=$.$get$kU()
k=$.$get$kV()
j=$.$get$kS()
$.$get$kR()
i=$.$get$kX()
h=$.$get$kW()
g=p.U(s)
if(g!=null)return t.$1(H.jm(s,g))
else{g=o.U(s)
if(g!=null){g.method="call"
return t.$1(H.jm(s,g))}else{g=n.U(s)
if(g==null){g=m.U(s)
if(g==null){g=l.U(s)
if(g==null){g=k.U(s)
if(g==null){g=j.U(s)
if(g==null){g=m.U(s)
if(g==null){g=i.U(s)
if(g==null){g=h.U(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return t.$1(H.kG(s,g))}}return t.$1(new H.hq(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.cM()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.a_(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.cM()
return a},
at:function(a){var t
if(a==null)return new H.dp(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dp(a,null)},
o_:function(a){if(a==null||typeof a!='object')return J.bb(a)
else return H.aE(a)},
nM:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=a.length
for(r=0;r<s;){q=r+1
H.b(t)
p=a[r]
r=q+1
H.b(t)
b.j(0,p,a[q])}return b},
nV:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dK(b,new H.iK(a))
case 1:return H.dK(b,new H.iL(a,d))
case 2:return H.dK(b,new H.iM(a,d,e))
case 3:return H.dK(b,new H.iN(a,d,e,f))
case 4:return H.dK(b,new H.iO(a,d,e,f,g))}throw H.c(P.cc("Unsupported number of arguments for wrapped closure"))},
bS:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.nV)
a.$identity=t
return t},
mx:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.t(c).$isj){t.$reflectionInfo=c
r=H.n7(t).r}else r=c
q=d?Object.create(new H.fZ().constructor.prototype):Object.create(new H.be(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.ke(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.nO,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.kb:H.jc
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.c("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.ke(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
mu:function(a,b,c,d){var t=H.jc
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
ke:function(a,b,c){var t,s,r,q
if(c)return H.mw(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.mu(s,b==null?r!=null:b!==r,t,b)
return q},
mv:function(a,b,c,d){var t,s
t=H.jc
s=H.kb
switch(b?-1:a){case 0:throw H.c(H.n8("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
mw:function(a,b){var t,s,r,q
t=$.kc
if(t==null){t=H.k9("self")
$.kc=t}t=$.ka
if(t==null){t=H.k9("receiver")
$.ka=t}s=b.$stubName
r=b.length
q=a[s]
t=H.mv(r,b==null?q!=null:b!==q,s,b)
return t},
jK:function(a,b,c,d,e,f){var t,s
t=J.ao(b)
s=!!J.t(c).$isj?J.ao(c):c
return H.mx(a,t,s,!!d,e,f)},
jc:function(a){return a.a},
kb:function(a){return a.c},
k9:function(a){var t,s,r,q,p
t=new H.be("self","target","receiver","name")
s=J.ao(Object.getOwnPropertyNames(t))
for(r=s.length,q=0;q<r;++q){p=s[q]
if(t[p]===a)return p}},
om:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.af(a,"String"))},
oh:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.af(a,"double"))},
ol:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.af(a,"num"))},
nG:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.af(a,"bool"))},
nU:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.af(a,"int"))},
o1:function(a,b){throw H.c(H.af(a,b.substring(3)))},
o0:function(a,b){var t=J.V(b)
throw H.c(H.kd(a,t.bE(b,3,t.gk(b))))},
jO:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.t(a)[b])return a
H.o1(a,b)},
a6:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.t(a)[b]
else t=!0
if(t)return a
H.o0(a,b)},
ok:function(a){if(a==null)return a
if(!!J.t(a).$isj)return a
throw H.c(H.af(a,"List"))},
jL:function(a){var t=J.t(a)
return"$S" in t?t.$S():null},
b8:function(a,b){var t,s
if(a==null)return!1
t=H.jL(a)
if(t==null)s=!1
else s=H.lq(t,b)
return s},
oi:function(a,b){var t,s
if(a==null)return a
if($.jH)return a
$.jH=!0
try{if(H.b8(a,b))return a
t=H.iU(b,null)
s=H.af(a,t)
throw H.c(s)}finally{$.jH=!1}},
af:function(a,b){return new H.ho("TypeError: "+H.d(P.cb(a))+": type '"+H.lc(a)+"' is not a subtype of type '"+b+"'")},
kd:function(a,b){return new H.dY("CastError: "+H.d(P.cb(a))+": type '"+H.lc(a)+"' is not a subtype of type '"+b+"'")},
lc:function(a){var t
if(a instanceof H.ax){t=H.jL(a)
if(t!=null)return H.iU(t,null)
return"Closure"}return H.br(a)},
a4:function(a){if(!0===a)return!1
if(!!J.t(a).$isjg)a=a.$0()
if(typeof a==="boolean")return!a
throw H.c(H.af(a,"bool"))},
ai:function(a){throw H.c(new H.hA(a))},
b:function(a){if(H.a4(a))throw H.c(P.mt(null))},
o7:function(a){throw H.c(new P.e8(a))},
n8:function(a){return new H.fR(a)},
lA:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
lo:function(a){return u.getIsolateTag(a)},
K:function(a){return new H.ar(a,null)},
A:function(a,b){H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
iD:function(a){if(a==null)return
return a.$ti},
lp:function(a,b){return H.jS(a["$as"+H.d(b)],H.iD(a))},
a5:function(a,b,c){var t,s
t=H.lp(a,b)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
ak:function(a,b){var t,s
t=H.iD(a)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
iU:function(a,b){var t=H.b9(a,b)
return t},
b9:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.b(!0)
H.b(!0)
return a[0].name+H.dM(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.d(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.b9(t,b)
return H.nv(a,b)}return"unknown-reified-type"},
nv:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.b9(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.b9(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.b9(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.nL(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.b9(l[j],b)+(" "+H.d(j))}q+="}"}return"("+q+") => "+t},
dM:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=new P.bv("")
for(r=b,q=!0,p=!0;H.b(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.b(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.b9(o,c)}return p?"":"<"+s.l(0)+">"},
iE:function(a){var t,s,r
if(a instanceof H.ax){t=H.jL(a)
if(t!=null)return H.iU(t,null)}s=J.t(a).constructor.name
if(a==null)return s
r=H.dM(a.$ti,0,null)
return s+r},
jS:function(a,b){if(a==null)return b
H.b(typeof a=="function")
H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.jP(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.jP(a,null,b)
return b},
iv:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.iD(a)
s=J.t(a)
if(s[b]==null)return!1
return H.lg(H.jS(s[d],t),c)},
dO:function(a,b,c,d){var t,s
if(a==null)return a
t=H.iv(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.dM(c,0,null)
throw H.c(H.kd(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
oe:function(a,b,c,d){var t,s
if(a==null)return a
t=H.iv(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.dM(c,0,null)
throw H.c(H.af(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
lg:function(a,b){var t,s,r,q,p
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
if(!H.W(r,b[p]))return!1}return!0},
of:function(a,b,c){return H.jP(a,b,H.lp(b,c))},
W:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.name==="N")return!0
if('func' in b)return H.lq(a,b)
if('func' in a)return b.name==="jg"||b.name==="F"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.b(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.b(!0)
q=b[0]}else q=b
if(q!==s){p=H.iU(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.lg(H.jS(o,t),r)},
lf:function(a,b,c){var t,s,r,q,p,o,n
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
if(!(H.W(o,n)||H.W(n,o)))return!1}return!0},
nC:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
H.b(typeof a=='object')
H.b(typeof b=='object')
t=J.ao(Object.getOwnPropertyNames(b))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.W(p,o)||H.W(o,p)))return!1}return!0},
lq:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.b('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.W(t,s)||H.W(s,t)))return!1}r=a.args
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
if(n===m){if(!H.lf(r,q,!1))return!1
if(!H.lf(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.b(j)
g=r[h]
H.b(i)
f=q[h]
if(!(H.W(g,f)||H.W(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=q[e]
if(!(H.W(g,f)||H.W(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=o[e]
if(!(H.W(g,f)||H.W(f,g)))return!1}}return H.nC(a.named,b.named)},
jP:function(a,b,c){H.b(typeof a=="function")
H.b(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
on:function(a){var t=$.jM
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
oj:function(a){return H.aE(a)},
og:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nX:function(a){var t,s,r,q,p,o
H.b(!(a instanceof P.F))
t=$.jM.$1(a)
s=$.iz[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iJ[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.le.$2(a,t)
if(t!=null){s=$.iz[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iJ[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.iT(r)
$.iz[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.iJ[t]=r
return r}if(p==="-"){o=H.iT(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.lx(a,r)
if(p==="*")throw H.c(P.l0(t))
if(u.leafTags[t]===true){o=H.iT(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.lx(a,r)},
lx:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.jQ(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
iT:function(a){return J.jQ(a,!1,null,!!a.$isu)},
nZ:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return H.iT(t)
else return J.jQ(t,c,null,null)},
nS:function(){if(!0===$.jN)return
$.jN=!0
H.nT()},
nT:function(){var t,s,r,q,p,o,n,m
$.iz=Object.create(null)
$.iJ=Object.create(null)
H.nR()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.lz.$1(p)
if(o!=null){n=H.nZ(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
nR:function(){var t,s,r,q,p,o,n
t=C.Q()
t=H.b6(C.N,H.b6(C.S,H.b6(C.z,H.b6(C.z,H.b6(C.R,H.b6(C.O,H.b6(C.P(C.A),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.jM=new H.iG(p)
$.le=new H.iH(o)
$.lz=new H.iI(n)},
b6:function(a,b){return a(b)||b},
o6:function(a,b,c){var t=a.indexOf(b,c)
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
hm:function hm(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ft:function ft(a,b){this.a=a
this.b=b},
f_:function f_(a,b,c){this.a=a
this.b=b
this.c=c},
hq:function hq(a){this.a=a},
j1:function j1(a){this.a=a},
dp:function dp(a,b){this.a=a
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
ax:function ax(){},
hb:function hb(){},
fZ:function fZ(){},
be:function be(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ho:function ho(a){this.a=a},
dY:function dY(a){this.a=a},
fR:function fR(a){this.a=a},
hA:function hA(a){this.a=a},
ar:function ar(a,b){this.a=a
this.b=b},
aa:function aa(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
eZ:function eZ(a){this.a=a},
f2:function f2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f3:function f3(a,b){this.a=a
this.$ti=b},
f4:function f4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
iG:function iG(a){this.a=a},
iH:function iH(a){this.a=a},
iI:function iI(a){this.a=a},
ir:function(a){var t,s,r
if(!!J.t(a).$isp)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
ah:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.b7(b,a))},
bp:function bp(){},
aY:function aY(){},
fj:function fj(){},
cv:function cv(){},
cw:function cw(){},
cx:function cx(){},
cu:function cu(){},
fk:function fk(){},
fl:function fl(){},
fm:function fm(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){},
cy:function cy(){},
fq:function fq(){},
bF:function bF(){},
bG:function bG(){},
bH:function bH(){},
bI:function bI(){},
nL:function(a){return J.ao(H.A(a?Object.keys(a):[],[null]))},
dN:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
t:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cm.prototype
return J.cl.prototype}if(typeof a=="string")return J.aA.prototype
if(a==null)return J.eY.prototype
if(typeof a=="boolean")return J.eX.prototype
if(a.constructor==Array)return J.az.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aB.prototype
return a}if(a instanceof P.F)return a
return J.iC(a)},
jQ:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iC:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.jN==null){H.nS()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.c(P.l0("Return interceptor for "+H.d(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$jl()]
if(p!=null)return p
p=H.nX(a)
if(p!=null)return p
if(typeof a=="function")return C.T
s=Object.getPrototypeOf(a)
if(s==null)return C.C
if(s===Object.prototype)return C.C
if(typeof q=="function"){Object.defineProperty(q,$.$get$jl(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
ao:function(a){a.fixed$length=Array
return a},
V:function(a){if(typeof a=="string")return J.aA.prototype
if(a==null)return a
if(a.constructor==Array)return J.az.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aB.prototype
return a}if(a instanceof P.F)return a
return J.iC(a)},
bU:function(a){if(a==null)return a
if(a.constructor==Array)return J.az.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aB.prototype
return a}if(a instanceof P.F)return a
return J.iC(a)},
lm:function(a){if(typeof a=="number")return J.aU.prototype
if(a==null)return a
if(!(a instanceof P.F))return J.aI.prototype
return a},
nN:function(a){if(typeof a=="number")return J.aU.prototype
if(typeof a=="string")return J.aA.prototype
if(a==null)return a
if(!(a instanceof P.F))return J.aI.prototype
return a},
ln:function(a){if(typeof a=="string")return J.aA.prototype
if(a==null)return a
if(!(a instanceof P.F))return J.aI.prototype
return a},
i:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aB.prototype
return a}if(a instanceof P.F)return a
return J.iC(a)},
E:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.t(a).B(a,b)},
a8:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.lm(a).a1(a,b)},
lH:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.lm(a).a9(a,b)},
ba:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nW(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.V(a).h(a,b)},
lI:function(a,b,c,d){return J.i(a).dX(a,b,c,d)},
jT:function(a,b){return J.ln(a).b0(a,b)},
lJ:function(a,b,c,d){return J.i(a).e9(a,b,c,d)},
j2:function(a,b){return J.i(a).ef(a,b)},
lK:function(a,b,c){return J.i(a).eg(a,b,c)},
jU:function(a,b){return J.i(a).c3(a,b)},
j3:function(a,b){return J.i(a).X(a,b)},
jV:function(a,b,c){return J.i(a).c6(a,b,c)},
lL:function(a,b){return J.i(a).ev(a,b)},
j4:function(a,b,c){return J.i(a).c7(a,b,c)},
lM:function(a,b,c){return J.i(a).c8(a,b,c)},
bX:function(a,b,c){return J.i(a).c9(a,b,c)},
dP:function(a,b){return J.i(a).ey(a,b)},
lN:function(a,b){return J.i(a).ca(a,b)},
lO:function(a,b,c){return J.i(a).cb(a,b,c)},
jW:function(a,b,c,d){return J.i(a).cc(a,b,c,d)},
lP:function(a,b){return J.bU(a).cd(a,b)},
lQ:function(a,b,c,d,e){return J.i(a).ce(a,b,c,d,e)},
lR:function(a,b){return J.nN(a).Y(a,b)},
j5:function(a,b,c){return J.V(a).eC(a,b,c)},
dQ:function(a){return J.i(a).cg(a)},
lS:function(a){return J.i(a).ci(a)},
lT:function(a){return J.i(a).ck(a)},
jX:function(a){return J.i(a).eI(a)},
lU:function(a,b){return J.i(a).cm(a,b)},
j6:function(a,b){return J.i(a).cn(a,b)},
lV:function(a,b,c,d){return J.i(a).co(a,b,c,d)},
lW:function(a,b,c,d,e){return J.i(a).eQ(a,b,c,d,e)},
lX:function(a,b,c,d,e){return J.i(a).cp(a,b,c,d,e)},
lY:function(a,b,c,d,e,f){return J.i(a).eR(a,b,c,d,e,f)},
lZ:function(a,b){return J.bU(a).u(a,b)},
bY:function(a,b){return J.i(a).cq(a,b)},
m_:function(a,b){return J.i(a).cr(a,b)},
m0:function(a){return J.i(a).eS(a)},
jY:function(a,b){return J.bU(a).as(a,b)},
m1:function(a){return J.i(a).geu(a)},
bb:function(a){return J.t(a).gA(a)},
aN:function(a){return J.bU(a).gv(a)},
bc:function(a){return J.V(a).gk(a)},
m2:function(a){return J.i(a).gbi(a)},
m3:function(a){return J.i(a).gbj(a)},
m4:function(a){return J.t(a).gD(a)},
m5:function(a){return J.i(a).gfh(a)},
m6:function(a){return J.i(a).gcG(a)},
m7:function(a){return J.i(a).gaB(a)},
j7:function(a){return J.i(a).gm(a)},
j8:function(a){return J.i(a).gn(a)},
jZ:function(a){return J.i(a).gH(a)},
j9:function(a,b){return J.i(a).ah(a,b)},
m8:function(a){return J.i(a).aO(a)},
m9:function(a){return J.i(a).br(a)},
ma:function(a,b){return J.i(a).bs(a,b)},
mb:function(a,b,c){return J.i(a).bt(a,b,c)},
k_:function(a,b,c){return J.i(a).bw(a,b,c)},
mc:function(a,b){return J.i(a).cv(a,b)},
md:function(a,b){return J.bU(a).cz(a,b)},
me:function(a,b,c){return J.i(a).cB(a,b,c)},
k0:function(a){return J.bU(a).fb(a)},
mf:function(a,b){return J.i(a).M(a,b)},
mg:function(a,b,c,d){return J.i(a).bC(a,b,c,d)},
mh:function(a,b,c,d,e,f,g){return J.i(a).cH(a,b,c,d,e,f,g)},
mi:function(a,b,c,d){return J.i(a).cI(a,b,c,d)},
k1:function(a,b,c,d){return J.i(a).cJ(a,b,c,d)},
mj:function(a){return J.ln(a).fk(a)},
bd:function(a){return J.t(a).l(a)},
mk:function(a,b,c,d){return J.i(a).fm(a,b,c,d)},
ml:function(a,b,c){return J.i(a).cN(a,b,c)},
mm:function(a,b,c){return J.i(a).cO(a,b,c)},
ja:function(a,b,c){return J.i(a).cP(a,b,c)},
mn:function(a,b,c){return J.i(a).cQ(a,b,c)},
k2:function(a,b,c){return J.i(a).cR(a,b,c)},
k3:function(a,b,c){return J.i(a).cS(a,b,c)},
k4:function(a,b,c){return J.i(a).cT(a,b,c)},
k5:function(a,b,c,d){return J.i(a).cU(a,b,c,d)},
k6:function(a,b,c,d){return J.i(a).cV(a,b,c,d)},
mo:function(a,b){return J.i(a).cX(a,b)},
mp:function(a,b,c){return J.i(a).fn(a,b,c)},
mq:function(a,b,c,d,e,f,g){return J.i(a).cY(a,b,c,d,e,f,g)},
mr:function(a,b,c,d,e){return J.i(a).d_(a,b,c,d,e)},
a:function a(){},
eX:function eX(){},
eY:function eY(){},
bm:function bm(){},
fD:function fD(){},
aI:function aI(){},
aB:function aB(){},
az:function az(a){this.$ti=a},
jj:function jj(a){this.$ti=a},
dU:function dU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aU:function aU(){},
cm:function cm(){},
cl:function cl(){},
aA:function aA(){}},P={
ni:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.nD()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.bS(new P.hC(t),1)).observe(s,{childList:true})
return new P.hB(t,s,r)}else if(self.setImmediate!=null)return P.nE()
return P.nF()},
nj:function(a){H.iA()
self.scheduleImmediate(H.bS(new P.hD(a),0))},
nk:function(a){H.iA()
self.setImmediate(H.bS(new P.hE(a),0))},
nl:function(a){P.jy(C.y,a)},
jy:function(a,b){var t=C.b.O(a.a,1000)
return H.nc(t<0?0:t,b)},
ny:function(a,b){if(H.b8(a,{func:1,args:[P.N,P.N]})){b.toString
return a}else{b.toString
return a}},
no:function(a,b){var t,s,r
H.b(b.a<4)
H.b(!(a instanceof P.ag))
H.b(b.a===0)
b.a=1
try{a.cL(new P.hS(b),new P.hT(b))}catch(r){t=H.P(r)
s=H.at(r)
P.o2(new P.hU(b,t,s))}},
l3:function(a,b){var t,s,r
H.b(b.a<=1)
for(;t=a.a,s=t===2,s;){H.b(s)
a=a.c}if(t>=4){r=b.ba()
b.b_(a)
P.bB(b,r)}else{r=b.c
H.b(b.a<=1)
b.a=2
b.c=a
a.bY(r)}},
bB:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.is(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bB(t.a,b)}s=t.a
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
P.is(null,null,p,o,s)
return}s=$.D
if(s==null?l!=null:s!==l){H.b(l!=null)
s=$.D
H.b(l==null?s!=null:l!==s)
j=$.D
$.D=l
i=j}else i=null
s=b.c
if(s===8)new P.hY(t,r,b,q).$0()
else if(p){if((s&1)!==0)new P.hX(r,b,m).$0()}else if((s&2)!==0)new P.hW(t,r,b).$0()
if(i!=null){H.b(!0)
$.D=i}s=r.b
if(!!J.t(s).$iseK){if(s.a>=4){H.b(o.a<4)
h=o.c
o.c=null
b=o.aI(h)
H.b(o.a<4)
H.b(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.l3(s,o)
return}}g=b.b
H.b(g.a<4)
h=g.c
g.c=null
b=g.aI(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.b(!o)
g.a=4
g.c=p}else{H.b(!o)
g.a=8
g.c=p}t.a=g
s=g}},
nx:function(){var t,s
for(;t=$.b5,t!=null;){$.bQ=null
s=t.b
$.b5=s
if(s==null)$.bP=null
t.a.$0()}},
nB:function(){$.jI=!0
try{P.nx()}finally{$.bQ=null
$.jI=!1
if($.b5!=null)$.$get$jE().$1(P.lh())}},
lb:function(a){var t=new P.cX(a,null)
if($.b5==null){$.bP=t
$.b5=t
if(!$.jI)$.$get$jE().$1(P.lh())}else{$.bP.b=t
$.bP=t}},
nA:function(a){var t,s,r
t=$.b5
if(t==null){P.lb(a)
$.bQ=$.bP
return}s=new P.cX(a,null)
r=$.bQ
if(r==null){s.b=t
$.bQ=s
$.b5=s}else{s.b=r.b
r.b=s
$.bQ=s
if(s.b==null)$.bP=s}},
o2:function(a){var t=$.D
if(C.f===t){P.iu(null,null,C.f,a)
return}t.toString
P.iu(null,null,t,t.bg(a))},
nd:function(a,b){var t=$.D
if(t===C.f){t.toString
return P.jy(a,b)}return P.jy(a,t.bg(b))},
jD:function(a){var t,s
H.b(a!=null)
t=$.D
H.b(a==null?t!=null:a!==t)
s=$.D
$.D=a
return s},
is:function(a,b,c,d,e){var t={}
t.a=d
P.nA(new P.it(t,e))},
l9:function(a,b,c,d){var t,s
if($.D===c)return d.$0()
t=P.jD(c)
try{s=d.$0()
return s}finally{s=t
H.b(s!=null)
$.D=s}},
la:function(a,b,c,d,e){var t,s
if($.D===c)return d.$1(e)
t=P.jD(c)
try{s=d.$1(e)
return s}finally{s=t
H.b(s!=null)
$.D=s}},
nz:function(a,b,c,d,e,f){var t,s
if($.D===c)return d.$2(e,f)
t=P.jD(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.b(s!=null)
$.D=s}},
iu:function(a,b,c,d){var t=C.f!==c
if(t)d=!(!t||!1)?c.bg(d):c.ew(d)
P.lb(d)},
hC:function hC(a){this.a=a},
hB:function hB(a,b,c){this.a=a
this.b=b
this.c=c},
hD:function hD(a){this.a=a},
hE:function hE(a){this.a=a},
jd:function jd(){},
hH:function hH(){},
il:function il(a,b){this.a=a
this.$ti=b},
d6:function d6(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
ag:function ag(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hR:function hR(a,b){this.a=a
this.b=b},
hV:function hV(a,b){this.a=a
this.b=b},
hS:function hS(a){this.a=a},
hT:function hT(a){this.a=a},
hU:function hU(a,b,c){this.a=a
this.b=b
this.c=c},
hY:function hY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hZ:function hZ(a){this.a=a},
hX:function hX(a,b,c){this.a=a
this.b=b
this.c=c},
hW:function hW(a,b,c){this.a=a
this.b=b
this.c=c},
cX:function cX(a,b){this.a=a
this.b=b},
h3:function h3(){},
h5:function h5(a){this.a=a},
h6:function h6(a,b){this.a=a
this.b=b},
h4:function h4(){},
jx:function jx(){},
aO:function aO(a,b){this.a=a
this.b=b},
iq:function iq(){},
it:function it(a,b){this.a=a
this.b=b},
ia:function ia(){},
ic:function ic(a,b){this.a=a
this.b=b},
ib:function ib(a,b){this.a=a
this.b=b},
id:function id(a,b){this.a=a
this.b=b},
kD:function(a,b){return new H.aa(0,null,null,null,null,null,0,[a,b])},
J:function(){return new H.aa(0,null,null,null,null,null,0,[null,null])},
ap:function(a){return H.nM(a,new H.aa(0,null,null,null,null,null,0,[null,null]))},
b3:function(a,b){return new P.i4(0,null,null,null,null,null,0,[a,b])},
aD:function(a,b,c,d){return new P.i2(0,null,null,null,null,null,0,[d])},
jG:function(){var t=Object.create(null)
H.b(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
mU:function(a,b,c){var t,s
if(P.jJ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$bR()
C.a.i(s,a)
try{P.nw(a,t)}finally{H.b(C.a.gaL(s)===a)
s.pop()}s=P.kM(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eV:function(a,b,c){var t,s,r
if(P.jJ(a))return b+"..."+c
t=new P.bv(b)
s=$.$get$bR()
C.a.i(s,a)
try{r=t
r.a=P.kM(r.gad(),a,", ")}finally{H.b(C.a.gaL(s)===a)
s.pop()}s=t
s.a=s.gad()+c
s=t.gad()
return s.charCodeAt(0)==0?s:s},
jJ:function(a){var t,s
for(t=0;s=$.$get$bR(),t<s.length;++t)if(a===s[t])return!0
return!1},
nw:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gv(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.p())return
q=H.d(t.gt(t))
C.a.i(b,q)
s+=q.length+2;++r}if(!t.p()){if(r<=5)return
p=b.pop()
o=b.pop()}else{n=t.gt(t);++r
if(!t.p()){if(r<=4){C.a.i(b,H.d(n))
return}p=H.d(n)
o=b.pop()
s+=p.length+2}else{m=t.gt(t);++r
H.b(r<100)
for(;t.p();n=m,m=l){l=t.gt(t);++r
if(r>100){while(!0){if(!(s>75&&r>3))break
s-=b.pop().length+2;--r}C.a.i(b,"...")
return}}o=H.d(n)
p=H.d(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)C.a.i(b,k)
C.a.i(b,o)
C.a.i(b,p)},
jp:function(a,b){var t,s
t=P.aD(null,null,null,b)
for(s=J.aN(a);s.p();)t.i(0,s.gt(s))
return t},
kF:function(a){var t,s,r
t={}
if(P.jJ(a))return"{...}"
s=new P.bv("")
try{C.a.i($.$get$bR(),a)
r=s
r.a=r.gad()+"{"
t.a=!0
J.jY(a,new P.f9(t,s))
t=s
t.a=t.gad()+"}"}finally{t=$.$get$bR()
H.b(C.a.gaL(t)===a)
t.pop()}t=s.gad()
return t.charCodeAt(0)==0?t:t},
jq:function(a,b){var t=new P.f5(null,0,0,0,[b])
t.dE(a,b)
return t},
i4:function i4(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
i2:function i2(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
i3:function i3(a,b,c){this.a=a
this.b=b
this.c=c},
bD:function bD(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
i0:function i0(){},
jo:function jo(){},
cn:function cn(){},
m:function m(){},
cp:function cp(){},
f9:function f9(a,b){this.a=a
this.b=b},
aX:function aX(){},
f5:function f5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
i5:function i5(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fT:function fT(){},
fS:function fS(){},
bE:function bE(){},
mG:function(a){var t=J.t(a)
if(!!t.$isax)return t.l(a)
return"Instance of '"+H.br(a)+"'"},
kE:function(a,b,c){var t,s
t=H.A([],[c])
for(s=J.aN(a);s.p();)C.a.i(t,s.gt(s))
if(b)return t
return J.ao(t)},
kM:function(a,b,c){var t=J.aN(b)
if(!t.p())return a
if(c.length===0){do a+=H.d(t.gt(t))
while(t.p())}else{a+=H.d(t.gt(t))
for(;t.p();)a=a+c+H.d(t.gt(t))}return a},
my:function(a,b){return J.lR(a,b)},
mA:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+t
if(t>=10)return s+"00"+t
return s+"000"+t},
mB:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c3:function(a){if(a>=10)return""+a
return"0"+a},
mD:function(a,b,c,d,e,f){return new P.ay(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
cb:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bd(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mG(a)},
mt:function(a){return new P.c_(a)},
k7:function(a){return new P.a_(!1,null,null,a)},
jb:function(a,b,c){return new P.a_(!0,a,b,c)},
ms:function(a){return new P.a_(!1,null,a,"Must not be null")},
fJ:function(a,b,c){return new P.cF(null,null,!0,a,b,"Value not in range")},
aF:function(a,b,c,d,e){return new P.cF(b,c,!0,a,d,"Invalid value")},
ju:function(a,b,c,d,e,f){if(C.b.a1(0,a)||C.b.a1(a,c))throw H.c(P.aF(a,0,c,"start",f))
if(b!=null){if(a>b||C.b.a1(b,c))throw H.c(P.aF(b,a,c,"end",f))
return b}return c},
C:function(a,b,c,d,e){var t=e!=null?e:J.bc(b)
return new P.eS(b,t,!0,a,c,"Index out of range")},
r:function(a){return new P.hr(a)},
l0:function(a){return new P.hp(a)},
jw:function(a){return new P.b1(a)},
al:function(a){return new P.e_(a)},
cc:function(a){return new P.hQ(a)},
Z:function(a){H.dN(H.d(a))},
aj:function aj(){},
H:function H(){},
bf:function bf(a,b){this.a=a
this.b=b},
Y:function Y(){},
ay:function ay(a){this.a=a},
eg:function eg(){},
eh:function eh(){},
aS:function aS(){},
c_:function c_(a){this.a=a},
cC:function cC(){},
a_:function a_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cF:function cF(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eS:function eS(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hr:function hr(a){this.a=a},
hp:function hp(a){this.a=a},
b1:function b1(a){this.a=a},
e_:function e_(a){this.a=a},
cM:function cM(){},
e8:function e8(a){this.a=a},
jf:function jf(){},
hQ:function hQ(a){this.a=a},
ek:function ek(a,b,c){this.a=a
this.b=b
this.$ti=c},
w:function w(){},
T:function T(){},
ck:function ck(){},
j:function j(){},
aW:function aW(){},
N:function N(){},
a7:function a7(){},
F:function F(){},
b0:function b0(){},
o:function o(){},
bv:function bv(a){this.a=a},
jA:function jA(){},
ix:function(a){var t,s,r,q,p
if(a==null)return
t=P.J()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.B)(s),++q){p=s[q]
t.j(0,p,a[p])}return t},
nJ:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.jY(a,new P.iw(t))
return t},
ku:function(){var t=$.kt
if(t==null){t=J.j5(window.navigator.userAgent,"Opera",0)
$.kt=t}return t},
mC:function(){var t,s
t=$.kq
if(t!=null)return t
s=$.kr
if(s==null){s=J.j5(window.navigator.userAgent,"Firefox",0)
$.kr=s}if(s)t="-moz-"
else{s=$.ks
if(s==null){s=!P.ku()&&J.j5(window.navigator.userAgent,"Trident/",0)
$.ks=s}if(s)t="-ms-"
else t=P.ku()?"-o-":"-webkit-"}$.kq=t
return t},
iw:function iw(a){this.a=a},
hv:function hv(){},
o5:function(a){return Math.sqrt(a)},
i9:function i9(){},
U:function U(){},
el:function el(){},
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
eF:function eF(){},
eH:function eH(){},
a2:function a2(){},
a9:function a9(){},
eQ:function eQ(){},
f0:function f0(){},
fb:function fb(){},
fd:function fd(){},
fu:function fu(){},
fB:function fB(){},
fF:function fF(){},
fG:function fG(){},
fK:function fK(){},
fL:function fL(){},
bs:function bs(){},
h7:function h7(){},
x:function x(){},
h8:function h8(){},
bx:function bx(){},
by:function by(){},
hl:function hl(){},
ht:function ht(){},
d9:function d9(){},
da:function da(){},
dg:function dg(){},
dh:function dh(){},
dr:function dr(){},
ds:function ds(){},
dx:function dx(){},
dy:function dy(){},
dV:function dV(){},
dW:function dW(){},
aP:function aP(){},
fv:function fv(){},
fP:function fP(){},
fQ:function fQ(){},
fY:function fY(){},
dm:function dm(){},
dn:function dn(){}},W={
mE:function(a,b,c){var t,s
t=document.body
s=(t&&C.o).S(t,a,b,c)
s.toString
t=new H.cW(new W.R(s),new W.ej(),[W.q])
return t.gaa(t)},
mF:function(a){return"wheel"},
bh:function(a){var t,s,r
t="element tag unavailable"
try{s=J.m5(a)
if(typeof s==="string")t=a.tagName}catch(r){H.P(r)}return t},
nn:function(a,b){return document.createElement(a)},
aM:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
l7:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
X:function(a,b,c,d,e){var t=c==null?null:W.ld(new W.hP(c))
t=new W.hO(0,a,b,t,!1,[e])
t.dR(a,b,c,!1,e)
return t},
l4:function(a){var t,s
t=document.createElement("a")
s=new W.ie(t,window.location)
s=new W.bC(s)
s.dS(a)
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
l8:function(){var t=P.o
t=new W.im(P.jp(C.r,t),P.aD(null,null,null,t),P.aD(null,null,null,t),P.aD(null,null,null,t),null)
t.dV(null,new H.bn(C.r,new W.io(),[H.ak(C.r,0),null]),["TEMPLATE"],null)
return t},
nu:function(a){var t
if(a==null)return
if("postMessage" in a){t=W.nm(a)
if(!!J.t(t).$ise)return t
return}else return a},
nm:function(a){if(a===window)return a
else return new W.hJ(a)},
ld:function(a){var t=$.D
if(t===C.f)return a
return t.ex(a)},
k:function k(){},
bZ:function bZ(){},
dR:function dR(){},
dS:function dS(){},
dT:function dT(){},
au:function au(){},
c0:function c0(){},
c1:function c1(){},
aw:function aw(){},
e0:function e0(){},
e1:function e1(){},
e2:function e2(){},
e3:function e3(){},
aQ:function aQ(){},
e4:function e4(){},
a0:function a0(){},
aR:function aR(){},
e5:function e5(){},
e6:function e6(){},
e7:function e7(){},
e9:function e9(){},
ea:function ea(){},
c5:function c5(){},
bg:function bg(){},
eb:function eb(){},
c6:function c6(){},
ec:function ec(){},
c7:function c7(){},
ed:function ed(){},
c8:function c8(){},
c9:function c9(){},
ca:function ca(){},
ee:function ee(){},
ef:function ef(){},
a1:function a1(){},
ej:function ej(){},
h:function h(){},
e:function e(){},
eD:function eD(){},
eE:function eE(){},
eI:function eI(){},
eM:function eM(){},
ci:function ci(){},
eN:function eN(){},
bj:function bj(){},
cj:function cj(){},
eO:function eO(){},
bk:function bk(){},
bl:function bl(){},
aC:function aC(){},
f6:function f6(){},
f7:function f7(){},
ff:function ff(){},
fg:function fg(){},
bo:function bo(){},
fh:function fh(){},
M:function M(){},
R:function R(a){this.a=a},
q:function q(){},
cz:function cz(){},
bq:function bq(){},
ac:function ac(){},
fE:function fE(){},
fH:function fH(){},
cE:function cE(){},
cH:function cH(){},
bt:function bt(){},
aq:function aq(){},
fV:function fV(){},
fX:function fX(){},
ad:function ad(){},
h1:function h1(){},
h2:function h2(a){this.a=a},
cO:function cO(){},
h9:function h9(){},
ha:function ha(){},
bw:function bw(){},
hc:function hc(){},
hd:function hd(){},
hf:function hf(){},
aG:function aG(){},
hj:function hj(){},
hk:function hk(){},
cU:function cU(){},
aH:function aH(){},
hs:function hs(){},
hu:function hu(){},
hw:function hw(){},
hx:function hx(){},
aJ:function aJ(){},
bA:function bA(){},
hz:function hz(a){this.a=a},
jC:function jC(){},
hI:function hI(){},
hK:function hK(){},
i_:function i_(){},
dd:function dd(){},
ii:function ii(){},
ij:function ij(){},
hF:function hF(){},
hL:function hL(a){this.a=a},
d3:function d3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
d2:function d2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hO:function hO(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
hP:function hP(a){this.a=a},
bC:function bC(a){this.a=a},
n:function n(){},
cB:function cB(a){this.a=a},
fs:function fs(a){this.a=a},
fr:function fr(a,b,c){this.a=a
this.b=b
this.c=c},
bJ:function bJ(){},
ig:function ig(){},
ih:function ih(){},
im:function im(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
io:function io(){},
ik:function ik(){},
cf:function cf(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hJ:function hJ(a){this.a=a},
cA:function cA(){},
js:function js(){},
jB:function jB(){},
ie:function ie(a,b){this.a=a
this.b=b},
dz:function dz(a){this.a=a},
ip:function ip(a){this.a=a},
cY:function cY(){},
cZ:function cZ(){},
d_:function d_(){},
d0:function d0(){},
d1:function d1(){},
d4:function d4(){},
d5:function d5(){},
d7:function d7(){},
d8:function d8(){},
db:function db(){},
dc:function dc(){},
de:function de(){},
df:function df(){},
di:function di(){},
dj:function dj(){},
bK:function bK(){},
bL:function bL(){},
dk:function dk(){},
dl:function dl(){},
dq:function dq(){},
dt:function dt(){},
du:function du(){},
bM:function bM(){},
bN:function bN(){},
dv:function dv(){},
dw:function dw(){},
dA:function dA(){},
dB:function dB(){},
dC:function dC(){},
dD:function dD(){},
dE:function dE(){},
dF:function dF(){},
dG:function dG(){},
dH:function dH(){},
dI:function dI(){},
dJ:function dJ(){}},B={
o3:function(a){var t,s
t=document
s=W.aC
W.X(t,"keydown",new B.iV(),!1,s)
W.X(t,"keyup",new B.iW(),!1,s)
if(!$.o4)W.X(t,"mousemove",new B.iX(),!1,W.M)
s=W.M
W.X(t,"mousedown",new B.iY(),!1,s)
W.X(t,"mouseup",new B.iZ(),!1,s)},
mZ:function(a,b,c,d){var t,s,r,q,p,o,n
t=new Float32Array(3)
s=$.$get$iy()
r=$.$get$bT()
q=new T.I(new Float32Array(16))
q.N()
p=new Float32Array(3)
o=new Float32Array(3)
n=new Float32Array(3)
t=new B.fw(a,b,c,0,new T.f(t),-0.02,s,r,q,new T.f(p),new T.f(o),new T.f(n),new T.f(new Float32Array(3)),"camera:orbit",!1,!0)
t.dG(a,b,c,d)
return t},
iV:function iV(){},
iW:function iW(){},
iX:function iX(){},
iY:function iY(){},
iZ:function iZ(){},
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
mz:function(d1,d2,d3,d4,d5,d6,d7,d8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0
t=-d6
s=-d7
r=new T.f(new Float32Array(3))
r.q(t,s,d8)
q=new T.f(new Float32Array(3))
q.q(d6,s,d8)
p=new T.f(new Float32Array(3))
p.q(d6,d7,d8)
o=new T.f(new Float32Array(3))
o.q(t,d7,d8)
n=-d8
m=new T.f(new Float32Array(3))
m.q(t,s,n)
l=new T.f(new Float32Array(3))
l.q(t,d7,n)
k=new T.f(new Float32Array(3))
k.q(d6,d7,n)
j=new T.f(new Float32Array(3))
j.q(d6,s,n)
i=new T.f(new Float32Array(3))
i.q(t,d7,n)
h=new T.f(new Float32Array(3))
h.q(t,d7,d8)
g=new T.f(new Float32Array(3))
g.q(d6,d7,d8)
f=new T.f(new Float32Array(3))
f.q(d6,d7,n)
e=new T.f(new Float32Array(3))
e.q(d6,s,d8)
d=new T.f(new Float32Array(3))
d.q(t,s,d8)
c=new T.f(new Float32Array(3))
c.q(t,s,n)
b=new T.f(new Float32Array(3))
b.q(d6,s,n)
a=new T.f(new Float32Array(3))
a.q(d6,s,n)
a0=new T.f(new Float32Array(3))
a0.q(d6,d7,n)
a1=new T.f(new Float32Array(3))
a1.q(d6,d7,d8)
a2=new T.f(new Float32Array(3))
a2.q(d6,s,d8)
a3=new T.f(new Float32Array(3))
a3.q(t,s,n)
a4=new T.f(new Float32Array(3))
a4.q(t,s,d8)
s=new T.f(new Float32Array(3))
s.q(t,d7,d8)
a5=new T.f(new Float32Array(3))
a5.q(t,d7,n)
t=new T.v(new Float32Array(2))
t.w(d3,d5)
n=new T.v(new Float32Array(2))
n.w(d2,d5)
a6=new T.v(new Float32Array(2))
a6.w(d2,d4)
a7=new T.v(new Float32Array(2))
a7.w(d3,d4)
a8=new T.v(new Float32Array(2))
a8.w(d2,d5)
a9=new T.v(new Float32Array(2))
a9.w(d2,d4)
b0=new T.v(new Float32Array(2))
b0.w(d3,d4)
b1=new T.v(new Float32Array(2))
b1.w(d3,d5)
b2=new T.v(new Float32Array(2))
b2.w(d3,d4)
b3=new T.v(new Float32Array(2))
b3.w(d3,d5)
b4=new T.v(new Float32Array(2))
b4.w(d2,d5)
b5=new T.v(new Float32Array(2))
b5.w(d2,d4)
b6=new T.v(new Float32Array(2))
b6.w(d2,d4)
b7=new T.v(new Float32Array(2))
b7.w(d3,d4)
b8=new T.v(new Float32Array(2))
b8.w(d3,d5)
b9=new T.v(new Float32Array(2))
b9.w(d2,d5)
c0=new T.v(new Float32Array(2))
c0.w(d2,d5)
c1=new T.v(new Float32Array(2))
c1.w(d2,d4)
c2=new T.v(new Float32Array(2))
c2.w(d3,d4)
c3=new T.v(new Float32Array(2))
c3.w(d3,d5)
c4=new T.v(new Float32Array(2))
c4.w(d3,d5)
c5=new T.v(new Float32Array(2))
c5.w(d2,d5)
c6=new T.v(new Float32Array(2))
c6.w(d2,d4)
c7=new T.v(new Float32Array(2))
c7.w(d3,d4)
c8=new G.bi(!1,[],[],[],P.J())
c8.ac("aTexUV")
c8.ac("aNormal")
c8.ds(6)
c8.ak([r,q,p,o,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,s,a5])
c8.aV("aTexUV",[t,n,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7])
for(c9=0;t=$.$get$l2(),c9<6;++c9){d0=t[c9]
c8.aW("aNormal",[d0,d0,d0,d0])}return c8},
mM:function(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
t=[]
s=[]
C.a.K(t,$.$get$ky())
C.a.K(s,$.$get$ji())
for(r=0;r<a3;++r,t=q){q=[]
for(p=t.length,o=0;o<t.length;t.length===p||(0,H.B)(t),++o){n=t[o]
m=J.i(n)
l=C.a.h(s,m.gW(n))
k=new T.f(new Float32Array(3))
k.C(l)
k.i(0,C.a.h(s,m.gR(n)))
k.V(0,0.5)
k.E(0)
l=C.a.h(s,m.gR(n))
j=new T.f(new Float32Array(3))
j.C(l)
j.i(0,C.a.h(s,m.ga5(n)))
j.V(0,0.5)
j.E(0)
l=C.a.h(s,m.ga5(n))
i=new T.f(new Float32Array(3))
i.C(l)
i.i(0,C.a.h(s,m.gW(n)))
i.V(0,0.5)
i.E(0)
h=s.length
C.a.i(s,k)
g=s.length
C.a.i(s,j)
f=s.length
C.a.i(s,i)
C.a.i(q,new G.an(m.gW(n),h,f))
C.a.i(q,new G.an(m.gR(n),g,h))
C.a.i(q,new G.an(m.ga5(n),f,g))
C.a.i(q,new G.an(h,g,f))}}e=new G.bi(!1,[],[],[],P.J())
e.ac("aTexUV")
e.ac("aNormal")
for(p=t.length,o=0;o<t.length;t.length===p||(0,H.B)(t),++o){n=t[o]
m=J.i(n)
d=C.a.h(s,m.gW(n))
H.b(Math.sqrt(d.gT())<1.01&&Math.sqrt(d.gT())>0.99)
c=C.a.h(s,m.gR(n))
H.b(Math.sqrt(c.gT())<1.01&&Math.sqrt(c.gT())>0.99)
b=C.a.h(s,m.ga5(n))
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
e.aW("aNormal",[d,c,b])
m=new T.f(new Float32Array(3))
m.C(d)
m.V(0,a4)
l=new T.f(new Float32Array(3))
l.C(c)
l.V(0,a4)
a2=new T.f(new Float32Array(3))
a2.C(b)
a2.V(0,a4)
e.dt([m,l,a2])
e.aV("aTexUV",[new T.v(a),new T.v(a0),new T.v(a1)])}return e},
mL:function(a,a0,a1,a2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
t=a1*0.5
s=a2*0.5
r=a1/a
q=a1/a0
p=new T.f(new Float32Array(3))
p.q(0,0,1)
o=(a+1)*(a0+1)
n=new Array(o)
n.fixed$length=Array
m=[T.f]
l=H.A(n,m)
n=new Array(o)
n.fixed$length=Array
k=H.A(n,m)
o=new Array(o)
o.fixed$length=Array
j=H.A(o,[T.v])
i=new B.eL(a)
for(h=0;h<=a;++h)for(o=h/a,n=h*r-t,g=0;g<=a0;++g){f=i.$2(h,g)
m=new Float32Array(3)
m[0]=n
m[1]=g*q-s
m[2]=0
C.a.j(l,f,new T.f(m))
C.a.j(k,f,p)
m=new Float32Array(2)
m[0]=o
m[1]=g/a0
C.a.j(j,f,new T.v(m))}o=[]
e=new G.bi(!1,[],o,[],P.J())
e.ak(l)
for(h=0;h<a;h=d)for(d=h+1,g=0;g<a0;){n=i.$2(h,g)
m=i.$2(d,g);++g
c=i.$2(d,g)
b=i.$2(h,g)
H.b(!0)
C.a.i(o,new G.cd(n,m,c,b))}e.ac("aTexUV")
e.aV("aTexUV",j)
e.ac("aNormal")
e.aW("aNormal",k)
return e},
eL:function eL(a){this.a=a}},G={
nh:function(a){var t,s,r
t=H.A(a.split("\n"),[P.o])
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.d(t[s])}return C.a.aw(t,"\n")},
l1:function(a,b,c){var t,s,r,q
t=J.i(a)
s=t.cj(a,b)
t.bA(a,s,c)
t.cf(a,s)
r=t.bv(a,s,35713)
if(r!=null&&!r){q=t.bu(a,s)
P.Z("E:Compilation failed:")
P.Z("E:"+G.nh(c))
P.Z("E:Failure:")
P.Z(C.j.a_("E:",q))
throw H.c(q)}return s},
G:function(a,b,c){return new G.an(a,b,c)},
mN:function(a,b,c){var t,s,r,q
C.u.ct(a,0,a.length,0)
C.u.ct(b,0,4,0)
for(t=c.length,s=0,r=0;r<c.length;c.length===t||(0,H.B)(c),++r){q=c[r]
if(q.c){q.aX(a,s*16)
b[s]=q.d;++s}}},
cr:function(a){var t=new G.fc(P.J(),a,!1,!0)
t.dF(a)
return t},
cg:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.j7(a[s])
b[t+1]=J.j8(a[s])
b[t+2]=J.jZ(a[s])}return b},
mI:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.j7(a[s])
b[t+1]=J.j8(a[s])}return b},
mJ:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.j7(a[s])
b[t+1]=J.j8(a[s])
b[t+2]=J.jZ(a[s])
b[t+3]=J.m7(a[s])}return b},
mH:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.ba(a[s],0)
b[t+1]=J.ba(a[s],1)
b[t+2]=J.ba(a[s],2)
b[t+3]=J.ba(a[s],3)}return b},
mY:function(a,b,c,d){return new G.cs(b,J.jX(b.a),c,P.J(),d,null,0,-1,null,null,P.J(),"meshdata:"+a,!1,!0)},
np:function(a,b){var t,s,r,q,p,o,n,m,l,k
for(t=a.e,s=t.gF(t),s=s.gv(s),r=b.x,q=[[P.j,P.w]],p=[P.Y],o=[T.as],n=[T.f],m=[T.v];s.p();){l=s.gt(s)
if(!r.I(0,l)){l="Dropping unnecessary attribute: "+H.d(l)
if($.ll>0)H.dN("I: "+l)
continue}k=t.h(0,l)
switch($.$get$S().h(0,l).a){case"vec2":b.aj(l,G.mI(H.dO(k,"$isj",m,"$asj"),null),2)
break
case"vec3":b.aj(l,G.cg(H.dO(k,"$isj",n,"$asj"),null),3)
break
case"vec4":b.aj(l,G.mJ(H.dO(k,"$isj",o,"$asj"),null),4)
break
case"float":b.aj(l,new Float32Array(H.ir(H.dO(k,"$isj",p,"$asj"))),1)
break
case"uvec4":b.aj(l,G.mH(H.dO(k,"$isj",q,"$asj"),null),4)
break
default:if(H.a4(!1))H.ai("unknown type for "+H.d(l)+" ["+J.m4(k[0]).l(0)+"] ["+new H.ar(H.iE(k),null).l(0)+"] "+H.d(k))}}},
jh:function(a,b,c){var t=G.mY(a,b.d,4,b.e.x)
t.ak(G.cg(c.d,null))
t.dr(c.dA())
G.np(c,t)
return t},
jv:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.aD(null,null,null,P.o)
s=c.b
r=d.b
q=c.f
p=J.lS(b.a)
o=G.l1(b.a,35633,s)
J.jV(b.a,p,o)
n=G.l1(b.a,35632,r)
J.jV(b.a,p,n)
if(q.length>0)J.mk(b.a,p,q,35980)
J.mc(b.a,p)
if(!J.mb(b.a,p,35714))H.L(J.ma(b.a,p))
t=new G.fO(b,c,d,p,P.jp(c.c,null),P.J(),P.J(),t,null,a,!1,!0)
t.dI(a,b,c,d)
return t},
bu:function(a){return new G.fU(a,null,[],[],[],[],0,P.J())},
fi:function fi(){},
cV:function cV(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dX:function dX(){},
dZ:function dZ(a,b){this.a=a
this.b=b},
eJ:function eJ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
an:function an(a,b,c){this.a=a
this.b=b
this.c=c},
cd:function cd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bi:function bi(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
f1:function f1(){},
cD:function cD(a,b,c,d,e,f,g,h){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.d=e
_.a=f
_.b=g
_.c=h},
c4:function c4(a,b,c,d,e,f,g,h,i,j){var _=this
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
cL:function cL(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cS:function cS(a,b,c){this.a=a
this.b=b
this.c=c},
cR:function cR(a,b,c){this.a=a
this.b=b
this.c=c},
fc:function fc(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
cs:function cs(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
fU:function fU(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fW:function fW(){},
he:function he(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bz:function bz(){},
eR:function eR(a,b,c,d,e,f){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f}},R={
ne:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=d.a
if(t[1]===0)return
s=b*0.5
r=c*C.q.eV(s/c)
q=-r
p=d.aP(s).aP(1/t[1])
o=[]
for(n=q;n<=r;n+=c)for(m=q;m<=r;m+=c){t=new Float32Array(3)
l=new T.f(t)
t[0]=n
t[1]=0
t[2]=m
l.i(0,p)
C.a.i(o,l)
t=new Float32Array(3)
l=new T.f(t)
t[0]=n
t[1]=0
t[2]=m
l.bD(0,p)
C.a.i(o,l)}for(k=0;k<8;++k){n=(k&1)===1?1:-1
j=(k&2)===2?1:-1
m=(k&4)===4?1:-1
if(n>0){t=j*s
l=m*s
i=new Float32Array(3)
i[0]=n*s
i[1]=t
i[2]=l
C.a.i(o,new T.f(i))
i=new Float32Array(3)
i[0]=-n*s
i[1]=t
i[2]=l
C.a.i(o,new T.f(i))}if(j>0){t=n*s
l=m*s
i=new Float32Array(3)
i[0]=t
i[1]=j*s
i[2]=l
C.a.i(o,new T.f(i))
i=new Float32Array(3)
i[0]=t
i[1]=-j*s
i[2]=l
C.a.i(o,new T.f(i))}if(m>0){t=n*s
l=j*s
i=new Float32Array(3)
i[0]=t
i[1]=l
i[2]=m*s
C.a.i(o,new T.f(i))
i=new Float32Array(3)
i[0]=t
i[1]=l
i[2]=-m*s
C.a.i(o,new T.f(i))}}a.aD(G.cg(o,null))
t=new Array(o.length)
t.fixed$length=Array
h=H.A(t,[P.w])
for(t=o.length,k=0;k<t;++k)h[k]=k
a.al(h)},
mK:function(a){var t,s,r
t=a.a
s=t[0]
if(s!==0){r=t[1]
if(r!==0){t=new T.f(new Float32Array(3))
t.q(-r,s,0)
return t}t=t[2]
if(t!==0){r=new T.f(new Float32Array(3))
r.q(-t,0,s)
return r}t=new T.f(new Float32Array(3))
t.q(0,1,1)
return t}else{s=t[1]
if(s===0){t=new T.f(new Float32Array(3))
t.q(1,1,0)
return t}t=t[2]
if(t===0){t=new T.f(new Float32Array(3))
t.q(1,0,1)
return t}r=new T.f(new Float32Array(3))
r.q(0,-t,s)
return r}},
ng:function(a1,a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
a3.toString
t=new T.f(new Float32Array(3))
t.C(a3)
t.E(0)
s=a2.a_(0,t.aP(a4))
r=[a2,s]
q=R.mK(a3)
q.E(0)
q.V(0,Math.tan(H.li(a5))*a4)
for(p=0;p<8;++p){t=new Float32Array(3)
o=new T.f(t)
o.C(q)
n=new Float32Array(4)
new T.fI(n).dd(a3,p*2*3.141592653589793/8)
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
C.a.i(a0,p)}a1.aD(G.cg(r,null))
a1.al(a0)},
nf:function(a,b,c){var t,s,r,q,p,o,n
t=[]
s=[]
for(r=$.$get$ji(),q=0;q<12;++q){p=r[q]
C.a.i(s,t.length)
C.a.i(s,12)
o=new T.f(new Float32Array(3))
o.C(p)
o.V(0,c)
b.toString
n=new T.f(new Float32Array(3))
n.C(b)
n.i(0,o)
C.a.i(t,n)}C.a.i(t,b)
a.aD(G.cg(t,null))
a.al(s)},
h_:function h_(){},
h0:function h0(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},A={
lk:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
if(!b.c)return
t=b.dx
t.C(c)
s=b.d
t.cA(0,s)
r=b.ch
if(r!=null&&b.cx!=null){H.d(b)
q=C.a.gaL(e)
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
p.eE(new T.ab(o))
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
a.dz(b.cx,e,d)
e.pop()}for(s=b.cy,r=s.length,l=0;l<s.length;s.length===r||(0,H.B)(s),++l)A.lk(a,s[l],t,d,e)},
kK:function(a,b,c){var t=new A.fN(c,b,H.A([],[A.b_]),17664,0,0,0,0,a,!1,!0)
t.dH(a,b,c)
return t},
aZ:function aZ(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
b_:function b_(a,b,c,d,e,f){var _=this
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
dL:function(a){var t,s
t=C.u.eW(a,0,new A.iF())
s=536870911&t+(C.b.d0(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
iF:function iF(){}},T={
fe:function(){return new T.I(new Float32Array(16))},
z:function(a,b,c){var t=new T.f(new Float32Array(3))
t.q(a,b,c)
return t},
ab:function ab(a){this.a=a},
I:function I(a){this.a=a},
fI:function fI(a){this.a=a},
v:function v(a){this.a=a},
f:function f(a){this.a=a},
as:function as(a){this.a=a}},K={
mX:function(a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=G.jh("cube",a3,B.mz(!0,1,0,1,0,2,2,2))
s=G.jh("icosahedron-4",a3,B.mM(4,1,!0))
r=G.cr("mat0")
r.J("uTexture",D.f8(a2,"gray",$.$get$kh()))
r.J("uShininess",10)
q=G.cr("mat1")
q.J("uTexture",D.f8(a2,"red",$.$get$kl()))
q.J("uShininess",10)
p=G.cr("mat2")
p.J("uTexture",D.f8(a2,"red",$.$get$kg()))
p.J("uShininess",10)
o=G.cr("mat3")
o.J("uTexture",D.f8(a2,"red",$.$get$ki()))
o.J("uShininess",10)
n=[r,q,p,o]
for(r=a4.cy,m=0;m<8;++m){l=(m&1)===0?-10:10
k=(m&2)===0?-10:10
j=(m&4)===0?-10:10
q=m%2===0?t:s
p=n[m%4]
o=new Float32Array(9)
i=new T.I(new Float32Array(16))
i.N()
h=new Float32Array(16)
g=new T.I(h)
g.N()
f=new Float32Array(3)
e=new Float32Array(3)
d=new Float32Array(3)
c=new Float32Array(3)
b=new T.f(c)
d=new A.aZ(p,q,[],new T.ab(o),i,g,new T.f(f),new T.f(e),new T.f(d),b,"mesh",!1,!0)
h[12]=l
h[13]=k
h[14]=j
c[0]=h[0]
c[1]=h[4]
c[2]=h[8]
g.ay(0,b,-1)
g.ay(0,d.bx(),-0.7)
C.a.i(r,d)}q=G.jh("strips",a3,B.mL(20,20,80,80))
p=n[0]
o=new Float32Array(9)
i=new T.I(new Float32Array(16))
i.N()
h=new Float32Array(16)
g=new T.I(h)
g.N()
f=new Float32Array(3)
e=new Float32Array(3)
d=new Float32Array(3)
a=new A.aZ(p,q,[],new T.ab(o),i,g,new T.f(f),new T.f(e),new T.f(d),new T.f(new Float32Array(3)),"grid",!1,!0)
a0=Math.cos(-1.5079644737231006)
a1=Math.sin(-1.5079644737231006)
q=h[4]
p=h[8]
o=h[5]
i=h[9]
g=h[6]
f=h[10]
e=h[7]
d=h[11]
c=-a1
h[4]=q*a0+p*a1
h[5]=o*a0+i*a1
h[6]=g*a0+f*a1
h[7]=e*a0+d*a1
h[8]=q*c+p*a0
h[9]=o*c+i*a0
h[10]=g*c+f*a0
h[11]=e*c+d*a0
a.aQ(0,-20,20)
C.a.i(r,a)},
nY:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
t={}
s=document
r=new R.h0(0,0,null,null,null,null)
r.dL(C.i.d3(s,"stats"),"blue","gray")
q=C.i.cC(s,"#webgl-canvas")
p=new G.dZ(null,q)
o=(q&&C.w).bp(q,"webgl2",P.ap(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
p.a=o
if(o==null)H.L(P.cc('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
n="ChronosGL Config: "+H.d(J.m8(o))
if($.ll>0)P.Z("I: "+n)
J.lQ(o,0,0,0,1)
J.bY(o,2929)
J.bY(o,2884)
m=B.mZ(50,10,0,q)
m.aQ(0,0,56)
o=new T.I(new Float32Array(16))
o.N()
n=new T.I(new Float32Array(16))
n.N()
l=new G.fC(m,50,1,0.1,1e4,o,n,new T.I(new Float32Array(16)),P.J(),"perspective",!1,!0)
l.bJ()
o=[]
n=new Float32Array(64)
k=new G.eP(o,n,new Float32Array(4),P.J(),"illumination",!1,!0)
for(n=$.$get$iB(),n=n.gaM(n),n=n.gv(n);n.p();)C.a.i(o,n.gt(n))
o=G.jv("BlinnPhong",p,$.$get$lt(),$.$get$lr())
j=new A.b_(o,[l,k],[],"BlinnPhong",!1,!0)
n=G.jv("Gourad",p,$.$get$lu(),$.$get$ls())
i=new A.b_(n,[l,k],[],"Gourad",!1,!0)
H.b(o.dC(n))
n=G.jv("Fixed",p,$.$get$lC(),$.$get$lB())
h=new A.b_(n,[l],[],"Fixed",!1,!0)
g=A.kK("BlinnPhong",p,null)
H.b(!0)
f=g.f
C.a.i(f,j)
H.b(!0)
C.a.i(f,h)
e=A.kK("Gourad",p,null)
H.b(!0)
f=e.f
C.a.i(f,i)
H.b(!0)
C.a.i(f,h)
d=G.cr("light")
d.J("uColor",$.$get$kn())
c=P.J()
for(f=$.$get$iB(),b=f.gF(f),b=b.gv(b),a=n.d,n=n.e;b.p();){a0=b.gt(b)
a1=f.h(0,a0)
a2=n.x
a3=new G.cs(a,J.jX(a.a),1,P.J(),a2,null,0,-1,null,null,P.J(),"meshdata:dirLightViz",!1,!0)
a3.ak(new Float32Array(3))
a3.y=J.dQ(a.a)
a3.al([0,0])
a2=J.t(a1)
if(!!a2.$isc4){a2=a1.Q
R.ne(a3,a2,a2/4,a1.x)}else if(!!a2.$iscL)R.ng(a3,a1.x,a1.y,a1.ch,a1.cx)
else if(!!a2.$iscD)R.nf(a3,a1.x,a1.Q)
else if(H.a4(!1))H.ai("unknown light: "+a2.gD(a1).l(0))
a2=new Float32Array(9)
a4=new T.I(new Float32Array(16))
a4.N()
a5=new T.I(new Float32Array(16))
a5.N()
a6=new Float32Array(3)
a7=new Float32Array(3)
a8=new Float32Array(3)
c.j(0,a0,new A.aZ(d,a3,[],new T.ab(a2),a4,a5,new T.f(a6),new T.f(a7),new T.f(a8),new T.f(new Float32Array(3)),a0,!1,!0))}for(n=c.gaM(c),n=n.gv(n),f=h.f;n.p();){b=n.gt(n)
H.b(b!=null)
C.a.i(f,b)}n=new Float32Array(9)
f=new T.I(new Float32Array(16))
f.N()
b=new T.I(new Float32Array(16))
b.N()
a=new Float32Array(3)
a0=new Float32Array(3)
a2=new Float32Array(3)
a9=new A.aZ(null,null,[],new T.ab(n),f,b,new T.f(a),new T.f(a0),new T.f(a2),new T.f(new Float32Array(3)),"scene",!1,!0)
K.mX(p,o,a9)
H.b(!0)
C.a.i(i.f,a9)
H.b(!0)
C.a.i(j.f,a9)
b0=H.a6(C.i.cC(s,"#phase"),"$isbt")
H.b(b0!=null)
b0.selectedIndex=0
for(o=C.i.bq(s,"input"),n=o.length,b1=0;b1<o.length;o.length===n||(0,H.B)(o),++b1){f=J.m2(o[b1])
W.X(f.a,f.b,new K.iR(c),!1,H.ak(f,0))}for(o=C.i.bq(s,"input"),n=o.length,b1=0;b1<o.length;o.length===n||(0,H.B)(o),++b1){b2=o[b1]
f=J.i(b2)
H.dN("initialize inputs "+H.d(f.gf0(b2)))
b3=C.i.e2(s,"Event")
J.lJ(b3,"change",!0,!0)
f.eP(b2,b3)}s=new K.iS(q,l,e,g)
s.$1(null)
W.X(window,"resize",s,!1,W.h)
t.a=0
new K.iQ(t,m,a9,b0,g,e,r).$1(0)},
iR:function iR(a){this.a=a},
iS:function iS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iQ:function iQ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},D={
f8:function(a,b,c){var t,s,r,q,p,o,n,m
t=c.a
s=C.c.Z(255*t[0])
r=C.c.Z(255*t[1])
q=C.c.Z(255*t[2])
t="rgb("+s+", "+r+", "+q+")"
p=document.createElement("canvas")
p.width=2
p.height=2
o=C.w.d2(p,"2d")
o.fillStyle=t;(o&&C.J).eT(o,0,0,p.width,p.height)
t=new G.he(!1,!1,!1,!0,1,9729,9729)
n=J.lT(a.a)
m=new G.eR(p,b,n,3553,a,t)
J.bX(a.a,3553,n)
J.me(a.a,37440,1)
m.dK(p)
t.dD(a,3553)
H.b(J.m9(a.a)===0)
J.bX(a.a,3553,null)
return m}}
var v=[C,H,J,P,W,B,G,R,A,T,K,D]
setFunctionNamesIfNecessary(v)
var $={}
H.jk.prototype={}
J.a.prototype={
B:function(a,b){return a===b},
gA:function(a){return H.aE(a)},
l:function(a){return"Instance of '"+H.br(a)+"'"},
gD:function(a){return new H.ar(H.iE(a),null)}}
J.eX.prototype={
l:function(a){return String(a)},
gA:function(a){return a?519018:218159},
gD:function(a){return C.aq},
$isaj:1}
J.eY.prototype={
B:function(a,b){return null==b},
l:function(a){return"null"},
gA:function(a){return 0},
gD:function(a){return C.ak},
$isN:1}
J.bm.prototype={
gA:function(a){return 0},
gD:function(a){return C.aj},
l:function(a){return String(a)},
$iskC:1}
J.fD.prototype={}
J.aI.prototype={}
J.aB.prototype={
l:function(a){var t=a[$.$get$kp()]
return t==null?this.dm(a):J.bd(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isjg:1}
J.az.prototype={
i:function(a,b){if(!!a.fixed$length)H.L(P.r("add"))
a.push(b)},
K:function(a,b){var t,s,r,q,p
t=a.length
if(!!a.fixed$length)H.L(P.r("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.B)(b),++r,t=p){q=b[r]
p=t+1
H.b(t===a.length||H.L(P.al(a)))
a.push(q)}},
cz:function(a,b){return new H.bn(a,b,[H.ak(a,0),null])},
aw:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.d(a[s])
return t.join(b)},
u:function(a,b){return this.h(a,b)},
geU:function(a){if(a.length>0)return a[0]
throw H.c(H.eW())},
gaL:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.c(H.eW())},
bz:function(a,b,c,d,e){var t,s,r
if(!!a.immutable$list)H.L(P.r("setRange"))
P.ju(b,c,a.length,null,null,null)
t=C.b.ab(c,b)
if(t===0)return
if(e<0)H.L(P.aF(e,0,null,"skipCount",null))
s=J.V(d)
if(C.b.a1(e+t,s.gk(d)))throw H.c(H.mV())
if(C.b.a9(e,b))for(r=t-1;r>=0;--r)a[b+r]=s.h(d,e+r)
else for(r=0;r<t;++r)a[b+r]=s.h(d,e+r)},
c5:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.c(P.al(a))}return!1},
dh:function(a,b){if(!!a.immutable$list)H.L(P.r("sort"))
H.nb(a,P.nK())},
aR:function(a){return this.dh(a,null)},
G:function(a,b){var t
for(t=0;t<a.length;++t)if(J.E(a[t],b))return!0
return!1},
l:function(a){return P.eV(a,"[","]")},
gv:function(a){return new J.dU(a,a.length,0,null,[H.ak(a,0)])},
gA:function(a){return H.aE(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.L(P.r("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.jb(b,"newLength",null))
if(b<0)throw H.c(P.aF(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.b7(a,b))
if(b>=a.length||b<0)throw H.c(H.b7(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.L(P.r("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.b7(a,b))
if(b>=a.length||b<0)throw H.c(H.b7(a,b))
a[b]=c},
$isp:1,
$asp:function(){},
$isl:1,
$isj:1}
J.jj.prototype={}
J.dU.prototype={
gt:function(a){return this.d},
p:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.c(H.B(t))
r=this.c
if(r>=s){this.sbL(null)
return!1}this.sbL(t[r]);++this.c
return!0},
sbL:function(a){this.d=a}}
J.aU.prototype={
Y:function(a,b){var t
if(typeof b!=="number")throw H.c(H.O(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaJ(b)
if(this.gaJ(a)===t)return 0
if(this.gaJ(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaJ:function(a){return a===0?1/a<0:a<0},
ez:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.c(P.r(""+a+".ceil()"))},
eV:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.c(P.r(""+a+".floor()"))},
Z:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.r(""+a+".round()"))},
eA:function(a,b,c){if(this.Y(b,c)>0)throw H.c(H.O(b))
if(this.Y(a,b)<0)return b
if(this.Y(a,c)>0)return c
return a},
fl:function(a,b){var t
if(b>20)throw H.c(P.aF(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gaJ(a))return"-"+t
return t},
l:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gA:function(a){return a&0x1FFFFFFF},
a_:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return a+b},
ab:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return a-b},
d1:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return a/b},
L:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return a*b},
aT:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.c1(a,b)},
O:function(a,b){return(a|0)===a?a/b|0:this.c1(a,b)},
c1:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.c(P.r("Result of truncating division is "+H.d(t)+": "+H.d(a)+" ~/ "+b))},
bc:function(a,b){var t
if(a>0)t=this.el(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
el:function(a,b){return b>31?0:a>>>b},
d0:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return(a&b)>>>0},
dq:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return(a^b)>>>0},
a9:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return a<b},
a1:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return a>b},
bn:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return a>=b},
gD:function(a){return C.at},
$isH:1,
$asH:function(){return[P.a7]},
$isY:1,
$isa7:1}
J.cm.prototype={
gD:function(a){return C.as},
$isw:1}
J.cl.prototype={
gD:function(a){return C.ar}}
J.aA.prototype={
b0:function(a,b){if(b>=a.length)throw H.c(H.b7(a,b))
return a.charCodeAt(b)},
a_:function(a,b){if(typeof b!=="string")throw H.c(P.jb(b,null,null))
return a+b},
di:function(a,b,c){var t
if(c>a.length)throw H.c(P.aF(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bB:function(a,b){return this.di(a,b,0)},
bE:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.fJ(b,null,null))
if(b>c)throw H.c(P.fJ(b,null,null))
if(c>a.length)throw H.c(P.fJ(c,null,null))
return a.substring(b,c)},
dj:function(a,b){return this.bE(a,b,null)},
fk:function(a){return a.toLowerCase()},
eC:function(a,b,c){if(c>a.length)throw H.c(P.aF(c,0,a.length,null,null))
return H.o6(a,b,c)},
Y:function(a,b){var t
if(typeof b!=="string")throw H.c(H.O(b))
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
gD:function(a){return C.al},
gk:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.c(H.b7(a,b))
return a[b]},
$isp:1,
$asp:function(){},
$isH:1,
$asH:function(){return[P.o]},
$iso:1}
H.l.prototype={}
H.aV.prototype={
gv:function(a){return new H.co(this,this.gk(this),0,null,[H.a5(this,"aV",0)])},
aN:function(a,b){return this.dl(0,b)},
fj:function(a,b){var t,s
t=H.A([],[H.a5(this,"aV",0)])
C.a.sk(t,this.gk(this))
for(s=0;C.b.a9(s,this.gk(this));++s)t[s]=this.u(0,s)
return t},
fi:function(a){return this.fj(a,!0)}}
H.co.prototype={
gt:function(a){return this.d},
p:function(){var t,s,r,q
t=this.a
s=J.V(t)
r=s.gk(t)
q=this.b
if(q==null?r!=null:q!==r)throw H.c(P.al(t))
if(C.b.bn(this.c,r)){this.san(null)
return!1}this.san(s.u(t,this.c));++this.c
return!0},
san:function(a){this.d=a}}
H.cq.prototype={
gv:function(a){return new H.fa(null,J.aN(this.a),this.b,this.$ti)},
gk:function(a){return J.bc(this.a)},
$asT:function(a,b){return[b]}}
H.ei.prototype={$isl:1,
$asl:function(a,b){return[b]}}
H.fa.prototype={
p:function(){var t=this.b
if(t.p()){this.san(this.c.$1(t.gt(t)))
return!0}this.san(null)
return!1},
gt:function(a){return this.a},
san:function(a){this.a=a},
$asck:function(a,b){return[b]}}
H.bn.prototype={
gk:function(a){return J.bc(this.a)},
u:function(a,b){return this.b.$1(J.lZ(this.a,b))},
$asl:function(a,b){return[b]},
$asaV:function(a,b){return[b]},
$asT:function(a,b){return[b]}}
H.cW.prototype={
gv:function(a){return new H.hy(J.aN(this.a),this.b,this.$ti)}}
H.hy.prototype={
p:function(){var t,s
for(t=this.a,s=this.b;t.p();)if(s.$1(t.gt(t)))return!0
return!1},
gt:function(a){var t=this.a
return t.gt(t)}}
H.aT.prototype={}
H.j_.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.j0.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.i7.prototype={
sf5:function(a){this.z=a},
sf8:function(a){this.ch=a}}
H.b2.prototype={
dT:function(){var t,s
t=this.e
s=t.a
this.c.i(0,s)
this.dY(s,t)},
c4:function(a,b){if(!this.f.B(0,a))return
if(this.Q.i(0,b)&&!this.y)this.y=!0
this.bf()},
fd:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.ax(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.bW();++r.d}this.y=!1}this.bf()},
ep:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.t(a),s=0;r=this.ch,s<r.length;s+=2)if(t.B(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).i(r,a)
t=this.ch;(t&&C.a).i(t,b)},
fc:function(a){var t,s,r
if(this.ch==null)return
for(t=J.t(a),s=0;r=this.ch,s<r.length;s+=2)if(t.B(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.L(P.r("removeRange"))
P.ju(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
de:function(a,b){if(!this.r.B(0,a))return
this.db=b},
eZ:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.M(0,c)
return}H.b(b===1)
t=this.cx
if(t==null){t=P.jq(null,null)
this.cx=t}t.a3(0,new H.i1(a,c))},
eY:function(a,b){var t
if(!this.r.B(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.aK()
return}H.b(b===1)
t=this.cx
if(t==null){t=P.jq(null,null)
this.cx=t}t.a3(0,this.gf6())},
f_:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.Z(a)
if(b!=null)P.Z(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.bd(a)
s[1]=b==null?null:b.l(0)
for(r=new P.bD(t,t.r,null,null,[null]),r.c=t.e;r.p();)r.d.M(0,s)},
ar:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.P(o)
p=H.at(o)
this.f_(q,p)
if(this.db){this.aK()
if(this===u.globalState.e)throw o}}finally{this.cy=H.nG(r)
u.globalState.d=H.jO(t,"$isb2")
if(t!=null)$=t.gf4()
if(this.cx!=null)for(;n=this.cx,!n.gav(n);)this.cx.cD().$0()}return s},
cw:function(a){return this.b.h(0,a)},
dY:function(a,b){var t=this.b
if(t.I(0,a))throw H.c(P.cc("Registry: ports must be registered only once."))
t.j(0,a,b)},
bf:function(){var t=this.b
if(t.gk(t)-this.c.a>0||this.y||!this.x)u.globalState.z.j(0,this.a,this)
else this.aK()},
aK:function(){var t,s,r
t=this.cx
if(t!=null)t.a6(0)
for(t=this.b,s=t.gaM(t),s=s.gv(s);s.p();)s.gt(s).dZ()
t.a6(0)
this.c.a6(0)
u.globalState.z.ax(0,this.a)
this.dx.a6(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].M(0,t[r+1])
this.ch=null}},
gf4:function(){return this.d},
geD:function(){return this.e}}
H.i1.prototype={
$0:function(){this.a.M(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.hM.prototype={
eK:function(){var t=this.a
if(t.b===t.c)return
return t.cD()},
cF:function(){var t,s,r
t=this.eK()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.I(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gav(s)}else s=!1
else s=!1
else s=!1
if(s)H.L(P.cc("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gav(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.ap(["command","close"])
r=new H.a3(!0,P.b3(null,P.w)).P(r)
s.toString
self.postMessage(r)}return!1}t.fa()
return!0},
c_:function(){if(self.window!=null)new H.hN(this).$0()
else for(;this.cF(););},
az:function(){var t,s,r,q,p
if(!u.globalState.x)this.c_()
else try{this.c_()}catch(r){t=H.P(r)
s=H.at(r)
q=u.globalState.Q
p=P.ap(["command","error","msg",H.d(t)+"\n"+H.d(s)])
p=new H.a3(!0,P.b3(null,P.w)).P(p)
q.toString
self.postMessage(p)}}}
H.hN.prototype={
$0:function(){if(!this.a.cF())return
P.nd(C.y,this)},
$S:function(){return{func:1,v:true}}}
H.aL.prototype={
fa:function(){var t=this.a
if(t.y){C.a.i(t.z,this)
return}t.ar(this.b)}}
H.i6.prototype={}
H.eT.prototype={
$0:function(){H.mR(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.eU.prototype={
$0:function(){var t,s
t=this.a
t.x=!0
if(!this.b)this.c.$1(this.d)
else{s=this.c
if(H.b8(s,{func:1,args:[P.N,P.N]}))s.$2(this.e,this.d)
else if(H.b8(s,{func:1,args:[P.N]}))s.$1(this.e)
else s.$0()}t.bf()},
$S:function(){return{func:1,v:true}}}
H.hG.prototype={}
H.b4.prototype={
M:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.nt(b)
if(t.geD()===s){s=J.V(r)
switch(s.h(r,0)){case"pause":t.c4(s.h(r,1),s.h(r,2))
break
case"resume":t.fd(s.h(r,1))
break
case"add-ondone":t.ep(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.fc(s.h(r,1))
break
case"set-errors-fatal":t.de(s.h(r,1),s.h(r,2))
break
case"ping":t.eZ(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.eY(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.i(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.ax(0,s)
break}return}u.globalState.f.a.a3(0,new H.aL(t,new H.i8(this,r),"receive"))},
B:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.b4){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gA:function(a){return this.b.a}}
H.i8.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dW(0,this.b)},
$S:function(){return{func:1}}}
H.bO.prototype={
M:function(a,b){var t,s,r
t=P.ap(["command","message","port",this,"msg",b])
s=new H.a3(!0,P.b3(null,P.w)).P(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
B:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bO){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gA:function(a){return C.b.dq((this.b<<16^this.a<<8)>>>0,this.c)}}
H.cG.prototype={
dZ:function(){this.c=!0
this.b=null},
dW:function(a,b){if(this.c)return
this.b.$1(b)},
$isn6:1}
H.hg.prototype={
dM:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.a3(0,new H.aL(s,new H.hh(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){H.iA()
this.c=self.setTimeout(H.bS(new H.hi(this,b),0),a)}else{H.b(a>0)
throw H.c(P.r("Timer greater than 0."))}}}
H.hh.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.hi.prototype={
$0:function(){var t=this.a
t.c=null
H.iP()
t.d=1
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.av.prototype={
gA:function(a){var t=this.a
t=C.b.bc(t,0)^C.b.O(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
B:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.av){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.a3.prototype={
P:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.j(0,a,t.gk(t))
t=J.t(a)
if(!!t.$isbp)return["buffer",a]
if(!!t.$isaY)return["typed",a]
if(!!t.$isp)return this.d8(a)
if(!!t.$ismO){r=this.gd5()
q=t.gF(a)
q=H.jr(q,r,H.a5(q,"T",0),null)
q=P.kE(q,!0,H.a5(q,"T",0))
t=t.gaM(a)
t=H.jr(t,r,H.a5(t,"T",0),null)
return["map",q,P.kE(t,!0,H.a5(t,"T",0))]}if(!!t.$iskC)return this.d9(a)
if(!!t.$isa)this.cW(a)
if(!!t.$isn6)this.aA(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isb4)return this.da(a)
if(!!t.$isbO)return this.dc(a)
if(!!t.$isax){p=a.$static_name
if(p==null)this.aA(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isav)return["capability",a.a]
if(!(a instanceof P.F))this.cW(a)
return["dart",u.classIdExtractor(a),this.d7(u.classFieldsExtractor(a))]},
aA:function(a,b){throw H.c(P.r((b==null?"Can't transmit:":b)+" "+H.d(a)))},
cW:function(a){return this.aA(a,null)},
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
H.aK.prototype={
a7:function(a){var t,s,r,q
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.c(P.k7("Bad serialized message: "+H.d(a)))
switch(C.a.geU(a)){case"ref":H.b(J.E(a[0],"ref"))
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
return J.ao(H.A(this.aq(t),[null]))
case"extendable":H.b(J.E(a[0],"extendable"))
t=a[1]
C.a.i(this.b,t)
return H.A(this.aq(t),[null])
case"mutable":H.b(J.E(a[0],"mutable"))
t=a[1]
C.a.i(this.b,t)
return this.aq(t)
case"const":H.b(J.E(a[0],"const"))
t=a[1]
C.a.i(this.b,t)
return J.ao(H.A(this.aq(t),[null]))
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
return new H.av(a[1])
case"dart":H.b(J.E(a[0],"dart"))
s=a[1]
r=a[2]
q=u.instanceFromClassId(s)
C.a.i(this.b,q)
this.aq(r)
return u.initializeEmptyInstance(s,q,r)
default:throw H.c("couldn't deserialize: "+H.d(a))}},
aq:function(a){var t
for(t=0;t<a.length;++t)C.a.j(a,t,this.a7(a[t]))
return a},
eN:function(a){var t,s,r,q,p
H.b(J.E(a[0],"map"))
t=a[1]
s=a[2]
r=P.J()
C.a.i(this.b,r)
t=J.md(t,this.geL()).fi(0)
for(q=J.V(s),p=0;p<t.length;++p)r.j(0,t[p],this.a7(q.h(s,p)))
return r},
eO:function(a){var t,s,r,q,p,o,n
H.b(J.E(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.cw(r)
if(o==null)return
n=new H.b4(o,s)}else n=new H.bO(t,r,s)
C.a.i(this.b,n)
return n},
eM:function(a){var t,s,r,q,p,o
H.b(J.E(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.i(this.b,r)
for(q=J.V(t),p=J.V(s),o=0;C.b.a9(o,q.gk(t));++o)r[q.h(t,o)]=this.a7(p.h(s,o))
return r}}
H.fM.prototype={}
H.hm.prototype={
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
if(t==null)return"NullError: "+H.d(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.f_.prototype={
l:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.d(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.d(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.d(this.a)+")"}}
H.hq.prototype={
l:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.j1.prototype={
$1:function(a){if(!!J.t(a).$isaS)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(a){return{func:1,args:[,]}}}
H.dp.prototype={
l:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t},
$isb0:1}
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
H.ax.prototype={
l:function(a){return"Closure '"+H.br(this).trim()+"'"},
$isjg:1,
gfo:function(){return this},
$D:null}
H.hb.prototype={}
H.fZ.prototype={
l:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.be.prototype={
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.be))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gA:function(a){var t,s
t=this.c
if(t==null)s=H.aE(this.a)
else s=typeof t!=="object"?J.bb(t):H.aE(t)
return(s^H.aE(this.b))>>>0},
l:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.br(t)+"'")}}
H.ho.prototype={
l:function(a){return this.a}}
H.dY.prototype={
l:function(a){return this.a}}
H.fR.prototype={
l:function(a){return"RuntimeError: "+H.d(this.a)}}
H.hA.prototype={
l:function(a){return C.j.a_("Assertion failed: ",P.cb(this.a))}}
H.ar.prototype={
l:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gA:function(a){return J.bb(this.a)},
B:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.ar){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.aa.prototype={
gk:function(a){return this.a},
gav:function(a){return this.a===0},
gF:function(a){return new H.f3(this,[H.ak(this,0)])},
gaM:function(a){return H.jr(this.gF(this),new H.eZ(this),H.ak(this,0),H.ak(this,1))},
I:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bT(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bT(s,b)}else return this.f1(b)},
f1:function(a){var t=this.d
if(t==null)return!1
return this.au(this.aH(t,this.at(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.ao(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.ao(r,b)
return s==null?null:s.b}else return this.f2(b)},
f2:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.aH(t,this.at(a))
r=this.au(s,a)
if(r<0)return
return s[r].b},
j:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.b8()
this.b=t}this.bN(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.b8()
this.c=s}this.bN(s,b,c)}else{r=this.d
if(r==null){r=this.b8()
this.d=r}q=this.at(b)
p=this.aH(r,q)
if(p==null)this.bb(r,q,[this.b9(b,c)])
else{o=this.au(p,b)
if(o>=0)p[o].b=c
else p.push(this.b9(b,c))}}},
ax:function(a,b){if(typeof b==="string")return this.bZ(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bZ(this.c,b)
else return this.f3(b)},
f3:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.aH(t,this.at(a))
r=this.au(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.c2(q)
return q.b},
a6:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.b7()}},
as:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.c(P.al(this))
t=t.c}},
bN:function(a,b,c){var t=this.ao(a,b)
if(t==null)this.bb(a,b,this.b9(b,c))
else t.b=c},
bZ:function(a,b){var t
if(a==null)return
t=this.ao(a,b)
if(t==null)return
this.c2(t)
this.bU(a,b)
return t.b},
b7:function(){this.r=this.r+1&67108863},
b9:function(a,b){var t,s
t=new H.f2(a,b,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.b7()
return t},
c2:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.b7()},
at:function(a){return J.bb(a)&0x3ffffff},
au:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.E(a[s].a,b))return s
return-1},
l:function(a){return P.kF(this)},
ao:function(a,b){return a[b]},
aH:function(a,b){return a[b]},
bb:function(a,b,c){H.b(c!=null)
a[b]=c},
bU:function(a,b){delete a[b]},
bT:function(a,b){return this.ao(a,b)!=null},
b8:function(){var t=Object.create(null)
this.bb(t,"<non-identifier-key>",t)
this.bU(t,"<non-identifier-key>")
return t},
$ismO:1}
H.eZ.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(a){return{func:1,args:[,]}}}
H.f2.prototype={}
H.f3.prototype={
gk:function(a){return this.a.a},
gv:function(a){var t,s
t=this.a
s=new H.f4(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.f4.prototype={
gt:function(a){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.al(t))
else{t=this.c
if(t==null){this.sbM(null)
return!1}else{this.sbM(t.a)
this.c=this.c.c
return!0}}},
sbM:function(a){this.d=a}}
H.iG.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[,]}}}
H.iH.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(a,b){return{func:1,args:[,P.o]}}}
H.iI.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[P.o]}}}
H.bp.prototype={
gD:function(a){return C.ac},
$isbp:1}
H.aY.prototype={$isaY:1}
H.fj.prototype={
gD:function(a){return C.ad}}
H.cv.prototype={
gk:function(a){return a.length},
$isp:1,
$asp:function(){},
$isu:1,
$asu:function(){}}
H.cw.prototype={
h:function(a,b){H.ah(b,a,a.length)
return a[b]},
j:function(a,b,c){H.ah(b,a,a.length)
a[b]=c},
$isl:1,
$asl:function(){return[P.Y]},
$asaT:function(){return[P.Y]},
$asm:function(){return[P.Y]},
$isj:1,
$asj:function(){return[P.Y]}}
H.cx.prototype={
j:function(a,b,c){H.ah(b,a,a.length)
a[b]=c},
$isl:1,
$asl:function(){return[P.w]},
$asaT:function(){return[P.w]},
$asm:function(){return[P.w]},
$isj:1,
$asj:function(){return[P.w]}}
H.cu.prototype={
gD:function(a){return C.ae},
$iseG:1}
H.fk.prototype={
gD:function(a){return C.af}}
H.fl.prototype={
gD:function(a){return C.ag},
h:function(a,b){H.ah(b,a,a.length)
return a[b]}}
H.fm.prototype={
gD:function(a){return C.ah},
h:function(a,b){H.ah(b,a,a.length)
return a[b]},
$iskz:1}
H.fn.prototype={
gD:function(a){return C.ai},
h:function(a,b){H.ah(b,a,a.length)
return a[b]}}
H.fo.prototype={
gD:function(a){return C.am},
h:function(a,b){H.ah(b,a,a.length)
return a[b]},
$iskY:1}
H.fp.prototype={
gD:function(a){return C.an},
h:function(a,b){H.ah(b,a,a.length)
return a[b]},
$iskZ:1}
H.cy.prototype={
gD:function(a){return C.ao},
gk:function(a){return a.length},
h:function(a,b){H.ah(b,a,a.length)
return a[b]}}
H.fq.prototype={
gD:function(a){return C.ap},
gk:function(a){return a.length},
h:function(a,b){H.ah(b,a,a.length)
return a[b]},
$isl_:1}
H.bF.prototype={}
H.bG.prototype={}
H.bH.prototype={}
H.bI.prototype={}
P.hC.prototype={
$1:function(a){var t,s
H.iP()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(a){return{func:1,args:[,]}}}
P.hB.prototype={
$1:function(a){var t,s
t=this.a
H.b(t.a==null)
H.iA()
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(a){return{func:1,args:[{func:1,v:true}]}}}
P.hD.prototype={
$0:function(){H.iP()
this.a.$0()},
$S:function(){return{func:1}}}
P.hE.prototype={
$0:function(){H.iP()
this.a.$0()},
$S:function(){return{func:1}}}
P.jd.prototype={}
P.hH.prototype={}
P.il.prototype={
eB:function(a,b){var t=this.a
if(t.a!==0)throw H.c(P.jw("Future already completed"))
t.b3(b)}}
P.d6.prototype={
f9:function(a){if(this.c!==6)return!0
H.b(!0)
return this.b.b.bl(this.d,a.a)},
eX:function(a){var t,s
t=(this.c&2)!==0
if(t){H.b(t)
t=this.e!=null}else t=!1
H.b(t)
s=this.e
t=this.b.b
if(H.b8(s,{func:1,args:[P.F,P.b0]}))return t.fe(s,a.a,a.b)
else return t.bl(s,a.a)}}
P.ag.prototype={
cL:function(a,b){var t,s,r
t=$.D
if(t!==C.f){t.toString
if(b!=null)b=P.ny(b,t)}s=new P.ag(0,t,null,[null])
r=b==null?1:3
this.bO(new P.d6(null,s,r,a,b,[H.ak(this,0),null]))
return s},
cK:function(a){return this.cL(a,null)},
b_:function(a){H.b(this.a<4)
H.b(a.a>=4)
this.a=a.a
this.c=a.c},
bO:function(a){var t
H.b(a.a==null)
t=this.a
if(t<=1){a.a=H.jO(this.c,"$isd6")
this.c=a}else{if(t===2){H.b(!0)
t=this.c
if(t.a<4){t.bO(a)
return}this.b_(t)}H.b(this.a>=4)
t=this.b
t.toString
P.iu(null,null,t,new P.hR(this,a))}},
bY:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.b(!0)
s=this.c
if(s.a<4){s.bY(a)
return}this.b_(s)}H.b(this.a>=4)
t.a=this.aI(a)
s=this.b
s.toString
P.iu(null,null,s,new P.hV(t,this))}},
ba:function(){H.b(this.a<4)
var t=this.c
this.c=null
return this.aI(t)},
aI:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
b3:function(a){var t,s,r
H.b(this.a<4)
t=this.$ti
s=H.iv(a,"$iseK",t,"$aseK")
if(s){t=H.iv(a,"$isag",t,null)
if(t)P.l3(a,this)
else P.no(a,this)}else{r=this.ba()
H.b(this.a<4)
this.a=4
this.c=a
P.bB(this,r)}},
aE:function(a,b){var t
H.b(this.a<4)
t=this.ba()
H.b(this.a<4)
this.a=8
this.c=new P.aO(a,b)
P.bB(this,t)},
e0:function(a){return this.aE(a,null)},
$iseK:1,
gbd:function(){return this.a},
gei:function(){return this.c}}
P.hR.prototype={
$0:function(){P.bB(this.a,this.b)},
$S:function(){return{func:1}}}
P.hV.prototype={
$0:function(){P.bB(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.hS.prototype={
$1:function(a){var t=this.a
H.b(t.a===1)
H.b(t.a===1)
t.a=0
t.b3(a)},
$S:function(a){return{func:1,args:[,]}}}
P.hT.prototype={
$2:function(a,b){var t=this.a
H.b(t.a===1)
t.aE(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(a,b){return{func:1,args:[,],opt:[,]}}}
P.hU.prototype={
$0:function(){this.a.aE(this.b,this.c)},
$S:function(){return{func:1}}}
P.hY.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.c
p=q.c
H.b((p&1)===0)
o=(p&2)===0
H.b(o)
t=null
try{H.b(o)
H.b(p===8)
t=q.b.b.cE(q.d)}catch(n){s=H.P(n)
r=H.at(n)
if(this.d){q=this.a.a
H.b(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.b(q.a===8)
p.b=q.c}else p.b=new P.aO(s,r)
p.a=!0
return}if(!!J.t(t).$iseK){if(t instanceof P.ag&&t.gbd()>=4){if(t.gbd()===8){q=t
H.b(q.gbd()===8)
p=this.b
p.b=q.gei()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.cK(new P.hZ(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.hZ.prototype={
$1:function(a){return this.a},
$S:function(a){return{func:1,args:[,]}}}
P.hX.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.b((r.c&1)!==0)
this.a.b=r.b.b.bl(r.d,this.c)}catch(q){t=H.P(q)
s=H.at(q)
r=this.a
r.b=new P.aO(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.hW.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.b(q.a===8)
t=q.c
q=this.c
if(q.f9(t)){H.b((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.eX(t)
p.a=!1}}catch(o){s=H.P(o)
r=H.at(o)
q=this.a
p=q.a
H.b(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.b(q.a===8)
m.b=q.c}else m.b=new P.aO(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.cX.prototype={}
P.h3.prototype={
gk:function(a){var t,s
t={}
s=new P.ag(0,$.D,null,[P.w])
t.a=0
this.f7(new P.h5(t),!0,new P.h6(t,s),s.ge_())
return s}}
P.h5.prototype={
$1:function(a){++this.a.a},
$S:function(a){return{func:1,args:[,]}}}
P.h6.prototype={
$0:function(){this.b.b3(this.a.a)},
$S:function(){return{func:1}}}
P.h4.prototype={}
P.jx.prototype={}
P.aO.prototype={
l:function(a){return H.d(this.a)},
$isaS:1}
P.iq.prototype={}
P.it.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.cC()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.c(t)
r=H.c(t)
r.stack=s.l(0)
throw r},
$S:function(){return{func:1}}}
P.ia.prototype={
ff:function(a){var t,s,r
try{if(C.f===$.D){a.$0()
return}P.l9(null,null,this,a)}catch(r){t=H.P(r)
s=H.at(r)
P.is(null,null,this,t,s)}},
fg:function(a,b){var t,s,r
try{if(C.f===$.D){a.$1(b)
return}P.la(null,null,this,a,b)}catch(r){t=H.P(r)
s=H.at(r)
P.is(null,null,this,t,s)}},
ew:function(a){return new P.ic(this,a)},
bg:function(a){return new P.ib(this,a)},
ex:function(a){return new P.id(this,a)},
h:function(a,b){return},
cE:function(a){if($.D===C.f)return a.$0()
return P.l9(null,null,this,a)},
bl:function(a,b){if($.D===C.f)return a.$1(b)
return P.la(null,null,this,a,b)},
fe:function(a,b,c){if($.D===C.f)return a.$2(b,c)
return P.nz(null,null,this,a,b,c)}}
P.ic.prototype={
$0:function(){return this.a.cE(this.b)},
$S:function(){return{func:1}}}
P.ib.prototype={
$0:function(){return this.a.ff(this.b)},
$S:function(){return{func:1}}}
P.id.prototype={
$1:function(a){return this.a.fg(this.b,a)},
$S:function(a){return{func:1,args:[,]}}}
P.i4.prototype={
at:function(a){return H.o_(a)&0x3ffffff},
au:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.i2.prototype={
gv:function(a){var t=new P.bD(this,this.r,null,null,[null])
t.c=this.e
return t},
gk:function(a){return this.a},
G:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.e1(b)},
e1:function(a){var t=this.d
if(t==null)return!1
return this.aG(t[this.aF(a)],a)>=0},
cw:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.G(0,a)?a:null
else return this.ec(a)},
ec:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.aF(a)]
r=this.aG(s,a)
if(r<0)return
return J.ba(s,r).ge4()},
i:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.jG()
this.b=t}return this.bQ(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.jG()
this.c=s}return this.bQ(s,b)}else return this.a3(0,b)},
a3:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.jG()
this.d=t}s=this.aF(b)
r=t[s]
if(r==null){q=[this.b2(b)]
H.b(q!=null)
t[s]=q}else{if(this.aG(r,b)>=0)return!1
r.push(this.b2(b))}return!0},
ax:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bR(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bR(this.c,b)
else return this.ed(0,b)},
ed:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.aF(b)]
r=this.aG(s,b)
if(r<0)return!1
this.bS(s.splice(r,1)[0])
return!0},
a6:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.b1()}},
bQ:function(a,b){var t
if(a[b]!=null)return!1
t=this.b2(b)
H.b(!0)
a[b]=t
return!0},
bR:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bS(t)
delete a[b]
return!0},
b1:function(){this.r=this.r+1&67108863},
b2:function(a){var t,s
t=new P.i3(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.b1()
return t},
bS:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.b1()},
aF:function(a){return J.bb(a)&0x3ffffff},
aG:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.E(a[s].a,b))return s
return-1}}
P.i3.prototype={
ge4:function(){return this.a}}
P.bD.prototype={
gt:function(a){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.al(t))
else{t=this.c
if(t==null){this.sam(null)
return!1}else{this.sam(t.a)
this.c=this.c.b
return!0}}},
sam:function(a){this.d=a}}
P.i0.prototype={}
P.jo.prototype={$isl:1}
P.cn.prototype={$isl:1,$isj:1}
P.m.prototype={
gv:function(a){return new H.co(a,this.gk(a),0,null,[H.a5(a,"m",0)])},
u:function(a,b){return this.h(a,b)},
cz:function(a,b){return new H.bn(a,b,[H.a5(a,"m",0),null])},
eW:function(a,b,c){var t,s,r,q
t=this.gk(a)
for(s=b,r=0;C.b.a9(r,t);++r){s=c.$2(s,this.h(a,r))
q=this.gk(a)
if(t==null?q!=null:t!==q)throw H.c(P.al(a))}return s},
ct:function(a,b,c,d){var t
P.ju(b,c,this.gk(a),null,null,null)
for(t=b;t<c;++t)this.j(a,t,d)},
l:function(a){return P.eV(a,"[","]")}}
P.cp.prototype={}
P.f9.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.d(a)
t.a=s+": "
t.a+=H.d(b)},
$S:function(a,b){return{func:1,args:[,,]}}}
P.aX.prototype={
as:function(a,b){var t,s
for(t=J.aN(this.gF(a));t.p();){s=t.gt(t)
b.$2(s,this.h(a,s))}},
gk:function(a){return J.bc(this.gF(a))},
l:function(a){return P.kF(a)}}
P.f5.prototype={
dE:function(a,b){var t
H.b(!0)
t=new Array(8)
t.fixed$length=Array
this.sc0(H.A(t,[b]))},
gv:function(a){return new P.i5(this,this.c,this.d,this.b,null,this.$ti)},
gav:function(a){return this.b===this.c},
gk:function(a){return(this.c-this.b&this.a.length-1)>>>0},
u:function(a,b){var t=this.gk(this)
if(C.b.a1(0,b)||b>=t)H.L(P.C(b,this,"index",null,t))
return this.a[(C.b.a_(this.b,b)&this.a.length-1)>>>0]},
a6:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
l:function(a){return P.eV(this,"{","}")},
cD:function(){var t,s,r
t=this.b
if(t===this.c)throw H.c(H.eW());++this.d
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
if(this.b===t)this.bW();++this.d},
bW:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.A(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.bz(s,0,q,t,r)
C.a.bz(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sc0(s)},
sc0:function(a){this.a=a}}
P.i5.prototype={
gt:function(a){return this.e},
p:function(){var t,s
t=this.a
if(this.c!==t.d)H.L(P.al(t))
s=this.d
if(s===this.b){this.sam(null)
return!1}this.sam(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sam:function(a){this.e=a}}
P.fT.prototype={
K:function(a,b){var t
for(t=J.aN(b);t.p();)this.i(0,t.gt(t))},
l:function(a){return P.eV(this,"{","}")},
$isl:1}
P.fS.prototype={}
P.bE.prototype={}
P.aj.prototype={}
P.H.prototype={}
P.bf.prototype={
B:function(a,b){if(b==null)return!1
if(!(b instanceof P.bf))return!1
return this.a===b.a&&this.b===b.b},
Y:function(a,b){return C.b.Y(this.a,b.a)},
gA:function(a){var t=this.a
return(t^C.b.bc(t,30))&1073741823},
l:function(a){var t,s,r,q,p,o,n
t=P.mA(H.n5(this))
s=P.c3(H.n3(this))
r=P.c3(H.n_(this))
q=P.c3(H.n0(this))
p=P.c3(H.n2(this))
o=P.c3(H.n4(this))
n=P.mB(H.n1(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isH:1,
$asH:function(){return[P.bf]}}
P.Y.prototype={}
P.ay.prototype={
a9:function(a,b){return C.b.a9(this.a,b.ge3())},
a1:function(a,b){return C.b.a1(this.a,b.ge3())},
B:function(a,b){if(b==null)return!1
if(!(b instanceof P.ay))return!1
return this.a===b.a},
gA:function(a){return this.a&0x1FFFFFFF},
Y:function(a,b){return C.b.Y(this.a,b.a)},
l:function(a){var t,s,r,q,p
t=new P.eh()
s=this.a
if(s<0)return"-"+new P.ay(0-s).l(0)
r=t.$1(C.b.O(s,6e7)%60)
q=t.$1(C.b.O(s,1e6)%60)
p=new P.eg().$1(s%1e6)
return""+C.b.O(s,36e8)+":"+H.d(r)+":"+H.d(q)+"."+H.d(p)},
$isH:1,
$asH:function(){return[P.ay]}}
P.eg.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(a){return{func:1,ret:P.o,args:[P.w]}}}
P.eh.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(a){return{func:1,ret:P.o,args:[P.w]}}}
P.aS.prototype={}
P.c_.prototype={
l:function(a){return"Assertion failed"}}
P.cC.prototype={
l:function(a){return"Throw of null."}}
P.a_.prototype={
gb5:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gb4:function(){return""},
l:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.d(t)
q=this.gb5()+s+r
if(!this.a)return q
p=this.gb4()
o=P.cb(this.b)
return q+p+": "+H.d(o)}}
P.cF.prototype={
gb5:function(){return"RangeError"},
gb4:function(){var t,s,r
H.b(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.d(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.d(t)
else if(r>t)s=": Not in range "+H.d(t)+".."+H.d(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.d(t)}return s}}
P.eS.prototype={
gb5:function(){return"RangeError"},
gb4:function(){H.b(this.a)
if(J.lH(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.d(t)},
gk:function(a){return this.f}}
P.hr.prototype={
l:function(a){return"Unsupported operation: "+this.a}}
P.hp.prototype={
l:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.b1.prototype={
l:function(a){return"Bad state: "+this.a}}
P.e_.prototype={
l:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.d(P.cb(t))+"."}}
P.cM.prototype={
l:function(a){return"Stack Overflow"},
$isaS:1}
P.e8.prototype={
l:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.jf.prototype={}
P.hQ.prototype={
l:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.d(t)}}
P.ek.prototype={
h:function(a,b){var t,s
t=this.a
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.L(P.jb(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.kH(b,"expando$values")
return s==null?null:H.kH(s,t)},
l:function(a){return"Expando:"+H.d(this.b)}}
P.w.prototype={}
P.T.prototype={
aN:function(a,b){return new H.cW(this,b,[H.a5(this,"T",0)])},
gk:function(a){var t,s
H.b(!this.$isl)
t=this.gv(this)
for(s=0;t.p();)++s
return s},
gaa:function(a){var t,s
t=this.gv(this)
if(!t.p())throw H.c(H.eW())
s=t.gt(t)
if(t.p())throw H.c(H.mW())
return s},
u:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.ms("index"))
if(b<0)H.L(P.aF(b,0,null,"index",null))
for(t=this.gv(this),s=0;t.p();){r=t.gt(t)
if(b===s)return r;++s}throw H.c(P.C(b,this,"index",null,s))},
l:function(a){return P.mU(this,"(",")")}}
P.ck.prototype={}
P.j.prototype={$isl:1}
P.aW.prototype={}
P.N.prototype={
gA:function(a){return P.F.prototype.gA.call(this,this)},
l:function(a){return"null"}}
P.a7.prototype={$isH:1,
$asH:function(){return[P.a7]}}
P.F.prototype={constructor:P.F,$isF:1,
B:function(a,b){return this===b},
gA:function(a){return H.aE(this)},
l:function(a){return"Instance of '"+H.br(this)+"'"},
gD:function(a){return new H.ar(H.iE(this),null)},
toString:function(){return this.l(this)}}
P.b0.prototype={}
P.o.prototype={$isH:1,
$asH:function(){return[P.o]}}
P.bv.prototype={
gk:function(a){return this.a.length},
l:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
gad:function(){return this.a}}
P.jA.prototype={}
W.k.prototype={}
W.bZ.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gH:function(a){return a.z}}
W.dR.prototype={
gk:function(a){return a.length}}
W.dS.prototype={
l:function(a){return String(a)}}
W.dT.prototype={
l:function(a){return String(a)}}
W.au.prototype={$isau:1}
W.c0.prototype={
bp:function(a,b,c){if(c!=null)return this.e6(a,b,P.nJ(c,null))
return this.e7(a,b)},
d2:function(a,b){return this.bp(a,b,null)},
e6:function(a,b,c){return a.getContext(b,c)},
e7:function(a,b){return a.getContext(b)}}
W.c1.prototype={
eT:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
aO:function(a){return P.ix(a.getContextAttributes())}}
W.aw.prototype={
gk:function(a){return a.length}}
W.e0.prototype={
gk:function(a){return a.length}}
W.e1.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.e2.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gH:function(a){return a.z}}
W.e3.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gH:function(a){return a.z}}
W.aQ.prototype={
bP:function(a,b){var t,s
t=$.$get$ko()
s=t[b]
if(typeof s==="string")return s
s=this.em(a,b)
t[b]=s
return s},
em:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.mC()+b
if(t in a)return t
return b},
gk:function(a){return a.length}}
W.e4.prototype={}
W.a0.prototype={}
W.aR.prototype={}
W.e5.prototype={
gk:function(a){return a.length}}
W.e6.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gH:function(a){return a.z}}
W.e7.prototype={
gk:function(a){return a.length}}
W.e9.prototype={
h:function(a,b){return a[b]},
gk:function(a){return a.length}}
W.ea.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gH:function(a){return a.z}}
W.c5.prototype={}
W.bg.prototype={
eq:function(a,b){return a.adoptNode(b)},
e2:function(a,b){return a.createEvent(b)},
bq:function(a,b){return a.getElementsByTagName(b)},
d3:function(a,b){return a.getElementById(b)},
cC:function(a,b){return a.querySelector(b)},
gbi:function(a){return new W.d3(a,"change",!1,[W.h])}}
W.eb.prototype={
l:function(a){return String(a)}}
W.c6.prototype={
eH:function(a,b){return a.createHTMLDocument(b)}}
W.ec.prototype={
gW:function(a){return a.a},
gR:function(a){return a.b},
ga5:function(a){return a.c}}
W.c7.prototype={
gW:function(a){return a.a},
gR:function(a){return a.b},
ga5:function(a){return a.c}}
W.ed.prototype={
gaB:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gH:function(a){return a.z}}
W.c8.prototype={
gaB:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gH:function(a){return a.z}}
W.c9.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[P.U]},
$isl:1,
$asl:function(){return[P.U]},
$isu:1,
$asu:function(){return[P.U]},
$asm:function(){return[P.U]},
$isj:1,
$asj:function(){return[P.U]},
$asn:function(){return[P.U]}}
W.ca.prototype={
l:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.gag(a))+" x "+H.d(this.gaf(a))},
B:function(a,b){var t
if(b==null)return!1
t=J.t(b)
if(!t.$isU)return!1
return a.left===t.gcu(b)&&a.top===t.gcM(b)&&this.gag(a)===t.gag(b)&&this.gaf(a)===t.gaf(b)},
gA:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gag(a)
q=this.gaf(a)
return W.l7(W.aM(W.aM(W.aM(W.aM(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gaf:function(a){return a.height},
gcu:function(a){return a.left},
gcM:function(a){return a.top},
gag:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isU:1,
$asU:function(){}}
W.ee.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[P.o]},
$isl:1,
$asl:function(){return[P.o]},
$isu:1,
$asu:function(){return[P.o]},
$asm:function(){return[P.o]},
$isj:1,
$asj:function(){return[P.o]},
$asn:function(){return[P.o]}}
W.ef.prototype={
gk:function(a){return a.length}}
W.a1.prototype={
geu:function(a){return new W.hL(a)},
l:function(a){return a.localName},
S:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.kw
if(t==null){t=H.A([],[W.cA])
s=new W.cB(t)
C.a.i(t,W.l4(null))
C.a.i(t,W.l8())
$.kw=s
d=s}else d=t
t=$.kv
if(t==null){t=new W.dz(d)
$.kv=t
c=t}else{t.a=d
c=t}}if($.am==null){t=document
s=t.implementation
s=(s&&C.K).eH(s,"")
$.am=s
$.je=s.createRange()
s=$.am
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.am.head;(t&&C.L).X(t,r)}t=$.am
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.jO(s,"$isau")}t=$.am
if(!!this.$isau)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.am.body;(t&&C.o).X(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.G(C.V,a.tagName)){t=$.je;(t&&C.D).d4(t,q)
t=$.je
p=(t&&C.D).eF(t,b)}else{q.innerHTML=b
p=$.am.createDocumentFragment()
for(t=J.i(p);s=q.firstChild,s!=null;)t.X(p,s)}t=$.am.body
if(q==null?t!=null:q!==t)J.k0(q)
c.by(p)
C.i.eq(document,p)
return p},
eG:function(a,b,c){return this.S(a,b,c,null)},
dg:function(a,b,c,d){a.textContent=null
this.X(a,this.S(a,b,c,d))},
df:function(a,b){return this.dg(a,b,null,null)},
ah:function(a,b){return a.getAttribute(b)},
ee:function(a,b){return a.removeAttribute(b)},
gbi:function(a){return new W.d2(a,"change",!1,[W.h])},
$isa1:1,
gf0:function(a){return a.id},
gfh:function(a){return a.tagName}}
W.ej.prototype={
$1:function(a){return!!J.t(a).$isa1},
$S:function(a){return{func:1,args:[,]}}}
W.h.prototype={
gcG:function(a){return W.nu(a.target)},
e9:function(a,b,c,d){return a.initEvent(b,!0,!0)},
$ish:1}
W.e.prototype={
dX:function(a,b,c,d){return a.addEventListener(b,H.bS(c,1),!1)},
eP:function(a,b){return a.dispatchEvent(b)},
$ise:1}
W.eD.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.ce]},
$isl:1,
$asl:function(){return[W.ce]},
$isu:1,
$asu:function(){return[W.ce]},
$asm:function(){return[W.ce]},
$isj:1,
$asj:function(){return[W.ce]},
$asn:function(){return[W.ce]}}
W.eE.prototype={
gk:function(a){return a.length}}
W.eI.prototype={
gk:function(a){return a.length}}
W.eM.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gH:function(a){return a.z}}
W.ci.prototype={}
W.eN.prototype={
gk:function(a){return a.length}}
W.bj.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.q]},
$isl:1,
$asl:function(){return[W.q]},
$isu:1,
$asu:function(){return[W.q]},
$asm:function(){return[W.q]},
$isj:1,
$asj:function(){return[W.q]},
$asn:function(){return[W.q]}}
W.cj.prototype={}
W.eO.prototype={
M:function(a,b){return a.send(b)}}
W.bk.prototype={}
W.bl.prototype={$isbl:1}
W.aC.prototype={$isaC:1}
W.f6.prototype={
l:function(a){return String(a)}}
W.f7.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gH:function(a){return a.z}}
W.ff.prototype={
gk:function(a){return a.length}}
W.fg.prototype={
fp:function(a,b,c){return a.send(b,c)},
M:function(a,b){return a.send(b)}}
W.bo.prototype={}
W.fh.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.ct]},
$isl:1,
$asl:function(){return[W.ct]},
$isu:1,
$asu:function(){return[W.ct]},
$asm:function(){return[W.ct]},
$isj:1,
$asj:function(){return[W.ct]},
$asn:function(){return[W.ct]}}
W.M.prototype={$isM:1}
W.R.prototype={
gaa:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.c(P.jw("No elements"))
if(s>1)throw H.c(P.jw("More than one element"))
return t.firstChild},
K:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.i(s),p=0;p<r;++p)q.X(s,t.firstChild)
return},
j:function(a,b,c){var t=this.a
J.lK(t,c,C.B.h(t.childNodes,b))},
gv:function(a){var t=this.a.childNodes
return new W.cf(t,t.length,-1,null,[H.a5(t,"n",0)])},
gk:function(a){return this.a.childNodes.length},
h:function(a,b){return C.B.h(this.a.childNodes,b)},
$asl:function(){return[W.q]},
$ascn:function(){return[W.q]},
$asm:function(){return[W.q]},
$asj:function(){return[W.q]},
$asbE:function(){return[W.q]}}
W.q.prototype={
fb:function(a){var t=a.parentNode
if(t!=null)J.j2(t,a)},
l:function(a){var t=a.nodeValue
return t==null?this.dk(a):t},
X:function(a,b){return a.appendChild(b)},
ef:function(a,b){return a.removeChild(b)},
eg:function(a,b,c){return a.replaceChild(b,c)},
$isq:1,
gbj:function(a){return a.previousSibling}}
W.cz.prototype={
bk:function(a){return a.previousNode()}}
W.bq.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.q]},
$isl:1,
$asl:function(){return[W.q]},
$isu:1,
$asu:function(){return[W.q]},
$asm:function(){return[W.q]},
$isj:1,
$asj:function(){return[W.q]},
$asn:function(){return[W.q]}}
W.ac.prototype={
gk:function(a){return a.length}}
W.fE.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.ac]},
$isl:1,
$asl:function(){return[W.ac]},
$isu:1,
$asu:function(){return[W.ac]},
$asm:function(){return[W.ac]},
$isj:1,
$asj:function(){return[W.ac]},
$asn:function(){return[W.ac]}}
W.fH.prototype={
M:function(a,b){return a.send(b)}}
W.cE.prototype={
eF:function(a,b){return a.createContextualFragment(b)},
d4:function(a,b){return a.selectNodeContents(b)}}
W.cH.prototype={
M:function(a,b){return a.send(b)}}
W.bt.prototype={$isbt:1,
gk:function(a){return a.length}}
W.aq.prototype={}
W.fV.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.cJ]},
$isl:1,
$asl:function(){return[W.cJ]},
$isu:1,
$asu:function(){return[W.cJ]},
$asm:function(){return[W.cJ]},
$isj:1,
$asj:function(){return[W.cJ]},
$asn:function(){return[W.cJ]}}
W.fX.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.cK]},
$isl:1,
$asl:function(){return[W.cK]},
$isu:1,
$asu:function(){return[W.cK]},
$asm:function(){return[W.cK]},
$isj:1,
$asj:function(){return[W.cK]},
$asn:function(){return[W.cK]}}
W.ad.prototype={
gk:function(a){return a.length}}
W.h1.prototype={
h:function(a,b){return this.bV(a,b)},
as:function(a,b){var t,s
for(t=0;!0;++t){s=this.eb(a,t)
if(s==null)return
b.$2(s,this.bV(a,s))}},
gF:function(a){var t=H.A([],[P.o])
this.as(a,new W.h2(t))
return t},
gk:function(a){return a.length},
bV:function(a,b){return a.getItem(b)},
eb:function(a,b){return a.key(b)},
$asaX:function(){return[P.o,P.o]}}
W.h2.prototype={
$2:function(a,b){return C.a.i(this.a,a)},
$S:function(a,b){return{func:1,args:[,,]}}}
W.cO.prototype={
S:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aS(a,b,c,d)
t=W.mE("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.R(s).K(0,new W.R(t))
return s}}
W.h9.prototype={
S:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aS(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.I.S(t.createElement("table"),b,c,d)
t.toString
t=new W.R(t)
r=t.gaa(t)
r.toString
t=new W.R(r)
q=t.gaa(t)
s.toString
q.toString
new W.R(s).K(0,new W.R(q))
return s}}
W.ha.prototype={
S:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aS(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.I.S(t.createElement("table"),b,c,d)
t.toString
t=new W.R(t)
r=t.gaa(t)
s.toString
r.toString
new W.R(s).K(0,new W.R(r))
return s}}
W.bw.prototype={$isbw:1}
W.hc.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.cQ]},
$isl:1,
$asl:function(){return[W.cQ]},
$isu:1,
$asu:function(){return[W.cQ]},
$asm:function(){return[W.cQ]},
$isj:1,
$asj:function(){return[W.cQ]},
$asn:function(){return[W.cQ]}}
W.hd.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.cP]},
$isl:1,
$asl:function(){return[W.cP]},
$isu:1,
$asu:function(){return[W.cP]},
$asm:function(){return[W.cP]},
$isj:1,
$asj:function(){return[W.cP]},
$asn:function(){return[W.cP]}}
W.hf.prototype={
gk:function(a){return a.length}}
W.aG.prototype={$isaG:1}
W.hj.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.cT]},
$isl:1,
$asl:function(){return[W.cT]},
$isu:1,
$asu:function(){return[W.cT]},
$asm:function(){return[W.cT]},
$isj:1,
$asj:function(){return[W.cT]},
$asn:function(){return[W.cT]}}
W.hk.prototype={
gk:function(a){return a.length}}
W.cU.prototype={
bk:function(a){return a.previousNode()}}
W.aH.prototype={}
W.hs.prototype={
l:function(a){return String(a)}}
W.hu.prototype={
gm:function(a){return a.x},
gH:function(a){return a.z}}
W.hw.prototype={
gk:function(a){return a.length}}
W.hx.prototype={
M:function(a,b){return a.send(b)}}
W.aJ.prototype={
geJ:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.r("deltaY is not supported"))},
$isaJ:1}
W.bA.prototype={
ges:function(a){var t,s
t=P.a7
s=new P.ag(0,$.D,null,[t])
this.e5(a)
this.eh(a,W.ld(new W.hz(new P.il(s,[t]))))
return s},
eh:function(a,b){return a.requestAnimationFrame(H.bS(b,1))},
e5:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.hz.prototype={
$1:function(a){this.a.eB(0,a)},
$S:function(a){return{func:1,args:[,]}}}
W.jC.prototype={}
W.hI.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.c2]},
$isl:1,
$asl:function(){return[W.c2]},
$isu:1,
$asu:function(){return[W.c2]},
$asm:function(){return[W.c2]},
$isj:1,
$asj:function(){return[W.c2]},
$asn:function(){return[W.c2]}}
W.hK.prototype={
l:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
B:function(a,b){var t
if(b==null)return!1
t=J.t(b)
if(!t.$isU)return!1
return a.left===t.gcu(b)&&a.top===t.gcM(b)&&a.width===t.gag(b)&&a.height===t.gaf(b)},
gA:function(a){var t,s,r,q
t=a.left
s=a.top
r=a.width
q=a.height
return W.l7(W.aM(W.aM(W.aM(W.aM(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gaf:function(a){return a.height},
gag:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.i_.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.ch]},
$isl:1,
$asl:function(){return[W.ch]},
$isu:1,
$asu:function(){return[W.ch]},
$asm:function(){return[W.ch]},
$isj:1,
$asj:function(){return[W.ch]},
$asn:function(){return[W.ch]}}
W.dd.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.q]},
$isl:1,
$asl:function(){return[W.q]},
$isu:1,
$asu:function(){return[W.q]},
$asm:function(){return[W.q]},
$isj:1,
$asj:function(){return[W.q]},
$asn:function(){return[W.q]}}
W.ii.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.ad]},
$isl:1,
$asl:function(){return[W.ad]},
$isu:1,
$asu:function(){return[W.ad]},
$asm:function(){return[W.ad]},
$isj:1,
$asj:function(){return[W.ad]},
$asn:function(){return[W.ad]}}
W.ij.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.cN]},
$isl:1,
$asl:function(){return[W.cN]},
$isu:1,
$asu:function(){return[W.cN]},
$asm:function(){return[W.cN]},
$isj:1,
$asj:function(){return[W.cN]},
$asn:function(){return[W.cN]}}
W.hF.prototype={
as:function(a,b){var t,s,r,q,p,o
for(t=this.gF(this),s=t.length,r=this.a,q=J.i(r),p=0;p<t.length;t.length===s||(0,H.B)(t),++p){o=t[p]
b.$2(o,q.ah(r,o))}},
gF:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.A([],[P.o])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.i(s,p.name)}return s},
$ascp:function(){return[P.o,P.o]},
$asaX:function(){return[P.o,P.o]},
ge8:function(){return this.a}}
W.hL.prototype={
h:function(a,b){return J.j9(this.a,b)},
gk:function(a){return this.gF(this).length}}
W.d3.prototype={
f7:function(a,b,c,d){return W.X(this.a,this.b,a,!1,H.ak(this,0))}}
W.d2.prototype={}
W.hO.prototype={
dR:function(a,b,c,d,e){this.eo()},
eo:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.lI(r,this.c,t,!1)}}}
W.hP.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(a){return{func:1,args:[,]}}}
W.bC.prototype={
dS:function(a){var t,s
t=$.$get$jF()
if(t.gav(t)){for(s=0;s<262;++s)t.j(0,C.U[s],W.nP())
for(s=0;s<12;++s)t.j(0,C.t[s],W.nQ())}},
ae:function(a){return $.$get$l5().G(0,W.bh(a))},
a4:function(a,b,c){var t,s,r
t=W.bh(a)
s=$.$get$jF()
r=s.h(0,H.d(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)}}
W.n.prototype={
gv:function(a){return new W.cf(a,this.gk(a),-1,null,[H.a5(a,"n",0)])}}
W.cB.prototype={
ae:function(a){return C.a.c5(this.a,new W.fs(a))},
a4:function(a,b,c){return C.a.c5(this.a,new W.fr(a,b,c))}}
W.fs.prototype={
$1:function(a){return a.ae(this.a)},
$S:function(a){return{func:1,args:[,]}}}
W.fr.prototype={
$1:function(a){return a.a4(this.a,this.b,this.c)},
$S:function(a){return{func:1,args:[,]}}}
W.bJ.prototype={
dV:function(a,b,c,d){var t,s,r
this.a.K(0,c)
t=b.aN(0,new W.ig())
s=b.aN(0,new W.ih())
this.b.K(0,t)
r=this.c
r.K(0,C.W)
r.K(0,s)},
ae:function(a){return this.a.G(0,W.bh(a))},
a4:function(a,b,c){var t,s
t=W.bh(a)
s=this.c
if(s.G(0,H.d(t)+"::"+b))return this.d.er(c)
else if(s.G(0,"*::"+b))return this.d.er(c)
else{s=this.b
if(s.G(0,H.d(t)+"::"+b))return!0
else if(s.G(0,"*::"+b))return!0
else if(s.G(0,H.d(t)+"::*"))return!0
else if(s.G(0,"*::*"))return!0}return!1}}
W.ig.prototype={
$1:function(a){return!C.a.G(C.t,a)},
$S:function(a){return{func:1,args:[,]}}}
W.ih.prototype={
$1:function(a){return C.a.G(C.t,a)},
$S:function(a){return{func:1,args:[,]}}}
W.im.prototype={
a4:function(a,b,c){if(this.dn(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.j9(a,"template")==="")return this.e.G(0,b)
return!1}}
W.io.prototype={
$1:function(a){return"TEMPLATE::"+H.d(a)},
$S:function(a){return{func:1,args:[,]}}}
W.ik.prototype={
ae:function(a){var t=J.t(a)
if(!!t.$isbs)return!1
t=!!t.$isx
if(t&&W.bh(a)==="foreignObject")return!1
if(t)return!0
return!1},
a4:function(a,b,c){if(b==="is"||C.j.bB(b,"on"))return!1
return this.ae(a)}}
W.cf.prototype={
p:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbX(J.ba(this.a,t))
this.c=t
return!0}this.sbX(null)
this.c=s
return!1},
gt:function(a){return this.d},
sbX:function(a){this.d=a}}
W.hJ.prototype={$isa:1,$ise:1}
W.cA.prototype={}
W.js.prototype={}
W.jB.prototype={}
W.ie.prototype={}
W.dz.prototype={
by:function(a){new W.ip(this).$2(a,null)},
ap:function(a,b){if(b==null)J.k0(a)
else J.j2(b,a)},
ek:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.m1(a)
r=J.j9(s.ge8(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.P(n)}p="element unprintable"
try{p=J.bd(a)}catch(n){H.P(n)}try{o=W.bh(a)
this.ej(a,b,t,p,o,s,r)}catch(n){if(H.P(n) instanceof P.a_)throw n
else{this.ap(a,b)
window
m="Removing corrupted element "+H.d(p)
if(typeof console!="undefined")window.console.warn(m)}}},
ej:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.ap(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(t)
return}if(!this.a.ae(a)){this.ap(a,b)
window
t="Removing disallowed element <"+H.d(e)+"> from "+H.d(b)
if(typeof console!="undefined")window.console.warn(t)
return}if(g!=null)if(!this.a.a4(a,"is",g)){this.ap(a,b)
window
t="Removing disallowed type extension <"+H.d(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(t)
return}t=f.gF(f)
s=H.A(t.slice(0),[H.ak(t,0)])
for(r=f.gF(f).length-1,t=f.a,q=J.i(t);r>=0;--r){p=s[r]
if(!this.a.a4(a,J.mj(p),q.ah(t,p))){window
o="Removing disallowed attribute <"+H.d(e)+" "+p+'="'+H.d(q.ah(t,p))+'">'
if(typeof console!="undefined")window.console.warn(o)
q.ah(t,p)
q.ee(t,p)}}if(!!J.t(a).$isbw)this.by(a.content)}}
W.ip.prototype={
$2:function(a,b){var t,s,r,q
r=this.a
switch(a.nodeType){case 1:r.ek(a,b)
break
case 8:case 11:case 3:case 4:break
default:r.ap(a,b)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.m3(t)}catch(q){H.P(q)
r=t
J.j2(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(a,b){return{func:1,v:true,args:[W.q,W.q]}}}
W.cY.prototype={}
W.cZ.prototype={}
W.d_.prototype={}
W.d0.prototype={}
W.d1.prototype={}
W.d4.prototype={}
W.d5.prototype={}
W.d7.prototype={}
W.d8.prototype={}
W.db.prototype={}
W.dc.prototype={}
W.de.prototype={}
W.df.prototype={}
W.di.prototype={}
W.dj.prototype={}
W.bK.prototype={}
W.bL.prototype={}
W.dk.prototype={}
W.dl.prototype={}
W.dq.prototype={}
W.dt.prototype={}
W.du.prototype={}
W.bM.prototype={}
W.bN.prototype={}
W.dv.prototype={}
W.dw.prototype={}
W.dA.prototype={}
W.dB.prototype={}
W.dC.prototype={}
W.dD.prototype={}
W.dE.prototype={}
W.dF.prototype={}
W.dG.prototype={}
W.dH.prototype={}
W.dI.prototype={}
W.dJ.prototype={}
P.iw.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(a,b){return{func:1,args:[,,]}}}
P.hv.prototype={
gcG:function(a){return a.target}}
P.i9.prototype={}
P.U.prototype={}
P.el.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
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
gn:function(a){return a.y},
gH:function(a){return a.z}}
P.ez.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eA.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gH:function(a){return a.z}}
P.eB.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eC.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eF.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eH.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.a2.prototype={}
P.a9.prototype={}
P.eQ.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.f0.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return this.a8(a,b)},
j:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
a8:function(a,b){return a.getItem(b)},
$isl:1,
$asl:function(){return[P.jn]},
$asm:function(){return[P.jn]},
$isj:1,
$asj:function(){return[P.jn]},
$asn:function(){return[P.jn]}}
P.fb.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fd.prototype={
gW:function(a){return a.a},
gR:function(a){return a.b},
ga5:function(a){return a.c}}
P.fu.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return this.a8(a,b)},
j:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
a8:function(a,b){return a.getItem(b)},
$isl:1,
$asl:function(){return[P.jt]},
$asm:function(){return[P.jt]},
$isj:1,
$asj:function(){return[P.jt]},
$asn:function(){return[P.jt]}}
P.fB.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fF.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fG.prototype={
gk:function(a){return a.length}}
P.fK.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fL.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bs.prototype={$isbs:1}
P.h7.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return this.a8(a,b)},
j:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
a8:function(a,b){return a.getItem(b)},
$isl:1,
$asl:function(){return[P.o]},
$asm:function(){return[P.o]},
$isj:1,
$asj:function(){return[P.o]},
$asn:function(){return[P.o]}}
P.x.prototype={
S:function(a,b,c,d){var t,s,r,q,p,o
t=H.A([],[W.cA])
C.a.i(t,W.l4(null))
C.a.i(t,W.l8())
C.a.i(t,new W.ik())
c=new W.dz(new W.cB(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.o).eG(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.R(q)
o=t.gaa(t)
for(t=J.i(p);r=o.firstChild,r!=null;)t.X(p,r)
return p},
gbi:function(a){return new W.d2(a,"change",!1,[W.h])},
$isx:1}
P.h8.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bx.prototype={}
P.by.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.hl.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return this.a8(a,b)},
j:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
a8:function(a,b){return a.getItem(b)},
$isl:1,
$asl:function(){return[P.jz]},
$asm:function(){return[P.jz]},
$isj:1,
$asj:function(){return[P.jz]},
$asn:function(){return[P.jz]}}
P.ht.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.d9.prototype={}
P.da.prototype={}
P.dg.prototype={}
P.dh.prototype={}
P.dr.prototype={}
P.ds.prototype={}
P.dx.prototype={}
P.dy.prototype={}
P.dV.prototype={
gk:function(a){return a.length}}
P.dW.prototype={
gk:function(a){return a.length}}
P.aP.prototype={}
P.fv.prototype={
gk:function(a){return a.length}}
P.fP.prototype={
c3:function(a,b){return a.activeTexture(b)},
c6:function(a,b,c){return a.attachShader(b,c)},
c7:function(a,b,c){return a.bindBuffer(b,c)},
c8:function(a,b,c){return a.bindFramebuffer(b,c)},
c9:function(a,b,c){return a.bindTexture(b,c)},
ca:function(a,b){return a.blendEquation(b)},
cb:function(a,b,c){return a.blendFunc(b,c)},
cc:function(a,b,c,d){return a.bufferData(b,c,d)},
cd:function(a,b){return a.clear(b)},
ce:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
cf:function(a,b){return a.compileShader(b)},
cg:function(a){return a.createBuffer()},
ci:function(a){return a.createProgram()},
cj:function(a,b){return a.createShader(b)},
ck:function(a){return a.createTexture()},
cm:function(a,b){return a.depthMask(b)},
cn:function(a,b){return a.disable(b)},
co:function(a,b,c,d){return a.drawArrays(b,c,d)},
cp:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cq:function(a,b){return a.enable(b)},
cr:function(a,b){return a.enableVertexAttribArray(b)},
aO:function(a){return P.ix(a.getContextAttributes())},
br:function(a){return a.getError()},
bs:function(a,b){return a.getProgramInfoLog(b)},
bt:function(a,b,c){return a.getProgramParameter(b,c)},
bu:function(a,b){return a.getShaderInfoLog(b)},
bv:function(a,b,c){return a.getShaderParameter(b,c)},
bw:function(a,b,c){return a.getUniformLocation(b,c)},
cv:function(a,b){return a.linkProgram(b)},
cB:function(a,b,c){return a.pixelStorei(b,c)},
bA:function(a,b,c){return a.shaderSource(b,c)},
bC:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bm:function(a,b,c,d,e,f,g,h,i,j){this.be(a,b,c,d,e,f,g)
return},
cH:function(a,b,c,d,e,f,g){return this.bm(a,b,c,d,e,f,g,null,null,null)},
be:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cI:function(a,b,c,d){return a.texParameterf(b,c,d)},
cJ:function(a,b,c,d){return a.texParameteri(b,c,d)},
cN:function(a,b,c){return a.uniform1f(b,c)},
cO:function(a,b,c){return a.uniform1fv(b,c)},
cP:function(a,b,c){return a.uniform1i(b,c)},
cQ:function(a,b,c){return a.uniform1iv(b,c)},
cR:function(a,b,c){return a.uniform2fv(b,c)},
cS:function(a,b,c){return a.uniform3fv(b,c)},
cT:function(a,b,c){return a.uniform4fv(b,c)},
cU:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cV:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cX:function(a,b){return a.useProgram(b)},
cY:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
d_:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fQ.prototype={
ev:function(a,b){return a.beginTransformFeedback(b)},
ey:function(a,b){return a.bindVertexArray(b)},
eI:function(a){return a.createVertexArray()},
eQ:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
eR:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
eS:function(a){return a.endTransformFeedback()},
fm:function(a,b,c,d){this.en(a,b,c,d)
return},
en:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
fn:function(a,b,c){return a.vertexAttribDivisor(b,c)},
c3:function(a,b){return a.activeTexture(b)},
c6:function(a,b,c){return a.attachShader(b,c)},
c7:function(a,b,c){return a.bindBuffer(b,c)},
c8:function(a,b,c){return a.bindFramebuffer(b,c)},
c9:function(a,b,c){return a.bindTexture(b,c)},
ca:function(a,b){return a.blendEquation(b)},
cb:function(a,b,c){return a.blendFunc(b,c)},
cc:function(a,b,c,d){return a.bufferData(b,c,d)},
cd:function(a,b){return a.clear(b)},
ce:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
cf:function(a,b){return a.compileShader(b)},
cg:function(a){return a.createBuffer()},
ci:function(a){return a.createProgram()},
cj:function(a,b){return a.createShader(b)},
ck:function(a){return a.createTexture()},
cm:function(a,b){return a.depthMask(b)},
cn:function(a,b){return a.disable(b)},
co:function(a,b,c,d){return a.drawArrays(b,c,d)},
cp:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cq:function(a,b){return a.enable(b)},
cr:function(a,b){return a.enableVertexAttribArray(b)},
aO:function(a){return P.ix(a.getContextAttributes())},
br:function(a){return a.getError()},
bs:function(a,b){return a.getProgramInfoLog(b)},
bt:function(a,b,c){return a.getProgramParameter(b,c)},
bu:function(a,b){return a.getShaderInfoLog(b)},
bv:function(a,b,c){return a.getShaderParameter(b,c)},
bw:function(a,b,c){return a.getUniformLocation(b,c)},
cv:function(a,b){return a.linkProgram(b)},
cB:function(a,b,c){return a.pixelStorei(b,c)},
bA:function(a,b,c){return a.shaderSource(b,c)},
bC:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bm:function(a,b,c,d,e,f,g,h,i,j){this.be(a,b,c,d,e,f,g)
return},
cH:function(a,b,c,d,e,f,g){return this.bm(a,b,c,d,e,f,g,null,null,null)},
be:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cI:function(a,b,c,d){return a.texParameterf(b,c,d)},
cJ:function(a,b,c,d){return a.texParameteri(b,c,d)},
cN:function(a,b,c){return a.uniform1f(b,c)},
cO:function(a,b,c){return a.uniform1fv(b,c)},
cP:function(a,b,c){return a.uniform1i(b,c)},
cQ:function(a,b,c){return a.uniform1iv(b,c)},
cR:function(a,b,c){return a.uniform2fv(b,c)},
cS:function(a,b,c){return a.uniform3fv(b,c)},
cT:function(a,b,c){return a.uniform4fv(b,c)},
cU:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cV:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cX:function(a,b){return a.useProgram(b)},
cY:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
d_:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fY.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return P.ix(this.ea(a,b))},
j:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
ea:function(a,b){return a.item(b)},
$isl:1,
$asl:function(){return[P.aW]},
$asm:function(){return[P.aW]},
$isj:1,
$asj:function(){return[P.aW]},
$asn:function(){return[P.aW]}}
P.dm.prototype={}
P.dn.prototype={}
B.iV.prototype={
$1:function(a){$.$get$iy().j(0,a.which,!0)},
$S:function(a){return{func:1,args:[W.aC]}}}
B.iW.prototype={
$1:function(a){$.$get$iy().j(0,a.which,null)},
$S:function(a){return{func:1,args:[W.aC]}}}
B.iX.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.nH=t
$.nI=C.b.ab(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.jR=s-C.b.O(window.innerWidth,2)
$.lw=-(t-C.b.O(window.innerHeight,2))},
$S:function(a){return{func:1,args:[W.M]}}}
B.iY.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.bV=t-C.b.O(window.innerWidth,2)
$.bW=-(s-C.b.O(window.innerHeight,2))
if(a.button===2)$.$get$bT().j(0,"right",!0)
else $.$get$bT().j(0,"left",!0)},
$S:function(a){return{func:1,args:[W.M]}}}
B.iZ.prototype={
$1:function(a){if(a.button===2)$.$get$bT().j(0,"right",null)
else $.$get$bT().j(0,"left",null)},
$S:function(a){return{func:1,args:[W.M]}}}
B.fw.prototype={
dG:function(a,b,c,d){var t
d.toString
W.X(d,W.mF(d),new B.fx(this),!1,W.aJ)
W.X(d,"mousemove",new B.fy(this),!1,W.M)
t=W.aG
W.X(d,"touchstart",new B.fz(),!1,t)
W.X(d,"touchmove",new B.fA(this),!1,t)
B.o3(null)}}
B.fx.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.au.geJ(a)*r.k3
if(C.c.ab(r.fy,t)>0)r.fy=C.c.ab(r.fy,t)}catch(q){s=H.P(q)
P.Z(s)}},
$S:function(a){return{func:1,args:[W.aJ]}}}
B.fy.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=t.go+C.b.ab($.jR,$.bV)*0.01
s=t.id
r=$.bW
q=$.lw
t.id=s+(r-q)*0.01
$.bV=$.jR
$.bW=q}},
$S:function(a){return{func:1,args:[W.M]}}}
B.fz.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.Z(t.clientX)
C.c.Z(t.clientY)
$.bV=s
C.c.Z(t.clientX)
$.bW=C.c.Z(t.clientY)},
$S:function(a){return{func:1,args:[W.aG]}}}
B.fA.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.Z(t.clientX)
t=C.c.Z(t.clientY)
r=this.a
r.go=r.go+C.b.ab(s,$.bV)*0.01
r.id=r.id+($.bW-t)*0.01
$.bV=s
$.bW=t},
$S:function(a){return{func:1,args:[W.aG]}}}
G.fi.prototype={}
G.cV.prototype={
J:function(a,b){var t=this.d
if(H.a4(!t.I(0,a)))H.ai("uniform "+a+" already set")
t.j(0,a,b)},
aY:function(){return this.d},
l:function(a){var t,s,r,q
t=H.A(["{"+new H.ar(H.iE(this),null).l(0)+"}["+H.d(this.a)+"]"],[P.o])
for(s=this.d,r=s.gF(s),r=r.gv(r);r.p();){q=r.gt(r)
C.a.i(t,H.d(q)+": "+H.d(s.h(0,q)))}return C.a.aw(t,"\n")}}
G.dX.prototype={}
G.dZ.prototype={
cs:function(a,b,c){J.m_(this.a,b)
if(c>0)J.mp(this.a,b,c)},
cZ:function(a,b,c,d,e,f,g,h){J.j4(this.a,34962,b)
J.mq(this.a,c,d,e,!1,g,h)}}
G.eJ.prototype={}
G.an.prototype={
gW:function(a){return this.a},
gR:function(a){return this.b},
ga5:function(a){return this.c}}
G.cd.prototype={
gW:function(a){return this.a},
gR:function(a){return this.b},
ga5:function(a){return this.c}}
G.bi.prototype={
ac:function(a){var t=this.e
H.b(!t.I(0,a))
H.b(C.j.bB(a,"a"))
switch($.$get$S().h(0,a).a){case"vec2":t.j(0,a,H.A([],[T.v]))
break
case"vec3":t.j(0,a,H.A([],[T.f]))
break
case"vec4":t.j(0,a,H.A([],[T.as]))
break
case"float":t.j(0,a,H.A([],[P.Y]))
break
case"uvec4":t.j(0,a,H.A([],[[P.j,P.w]]))
break
default:if(H.a4(!1))H.ai("unknown type for "+a)}},
ds:function(a){var t,s,r
H.b(!0)
t=this.d.length
for(s=this.c,r=0;r<a;++r,t+=4)C.a.i(s,new G.cd(t,t+1,t+2,t+3))},
ak:function(a){var t,s,r,q,p
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.B)(a),++r){q=a[r]
q.toString
p=new T.f(new Float32Array(3))
p.C(q)
C.a.i(s,p)}},
dt:function(a){var t,s,r,q,p
H.b(!0)
t=this.d
s=t.length
C.a.i(this.b,new G.an(s,s+1,s+2))
for(r=0;r<3;++r){q=a[r]
p=new T.f(new Float32Array(3))
p.C(q)
C.a.i(t,p)}},
aV:function(a,b){var t,s,r,q,p,o,n
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.B)(b),++q){p=b[q]
p.toString
o=new Float32Array(2)
n=p.a
o[1]=n[1]
o[0]=n[0]
r.i(t,new T.v(o))}},
aW:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.B)(b),++q){p=b[q]
p.toString
o=new T.f(new Float32Array(3))
o.C(p)
r.i(t,o)}},
dA:function(){var t,s,r,q,p,o,n,m,l
t=this.b
H.b(t.length>0||this.c.length>0)
s=this.c
r=new Array(t.length*3+s.length*6)
r.fixed$length=Array
q=H.A(r,[P.w])
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
l:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gF(s),r=r.gv(r);r.p();){q=r.gt(r)
p=$.$get$S().h(0,q).a
C.a.i(t,H.d(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.aw(t," ")}}
G.f1.prototype={}
G.cD.prototype={
aX:function(a,b){var t=this.x.a
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
l:function(a){return"PL: p:"+H.d(this.x)+"  r:"+this.Q}}
G.c4.prototype={
aX:function(a,b){var t=this.x.a
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
l:function(a){return"DL: p:"+H.d(this.x)}}
G.cL.prototype={
aX:function(a,b){var t=this.x.a
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
a[b+11]=Math.cos(H.li(this.cx))
a[b+15]=this.cy},
l:function(a){return"SL: p:"+H.d(this.x)+"  d:"+H.d(this.y)+"  r:"+this.ch+"  a:"+H.d(this.cx)}}
G.eP.prototype={
aY:function(){var t,s,r
t=this.y
s=this.z
G.mN(t,s,this.x)
r=this.d
r.j(0,"uLightDescs",t)
r.j(0,"uLightTypes",s)
return r}}
G.cS.prototype={}
G.cR.prototype={}
G.fc.prototype={
dF:function(a){this.J("cDepthTest",!0)
this.J("cDepthWrite",!0)
this.J("cBlendEquation",$.$get$k8())
this.J("cStencilFunc",$.$get$kL())}}
G.cs.prototype={
bF:function(a,b,c){var t,s
if(C.j.b0(a,0)===105){if(H.a4(C.b.aT(b.length,c)===this.z))H.ai("ChangeAttribute "+this.z)}else{t=C.b.aT(b.length,c)
if(H.a4(t===(this.ch.length/3|0)))H.ai("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}this.cy.j(0,a,b)
t=this.d
s=this.r.h(0,a)
J.j4(t.a,34962,s)
J.jW(t.a,34962,b,35048)},
aD:function(a){this.ch=a
this.bF("aPosition",a,3)},
dB:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
aj:function(a,b,c){var t,s,r,q,p,o
t=J.jT(a,0)===105
if(t&&this.z===0)this.z=C.b.aT(b.length,c)
s=this.r
r=this.d
s.j(0,a,J.dQ(r.a))
this.bF(a,b,c)
q=$.$get$S().h(0,a)
if(q==null)throw H.c("Unknown canonical "+a)
p=this.x
if(H.a4(p.I(0,a)))H.ai("unexpected attribute "+a)
o=p.h(0,a)
J.dP(r.a,this.e)
r.cs(0,o,t?1:0)
r.cZ(0,s.h(0,a),o,q.bG(),5126,!1,0,0)},
ak:function(a){var t,s,r,q,p
t=this.r
s=this.d
t.j(0,"aPosition",J.dQ(s.a))
this.aD(a)
r=$.$get$S().h(0,"aPosition")
if(r==null)throw H.c("Unknown canonical aPosition")
q=this.x
H.b(q.I(0,"aPosition"))
p=q.h(0,"aPosition")
J.dP(s.a,this.e)
s.cs(0,p,0)
s.cZ(0,t.h(0,"aPosition"),p,r.bG(),5126,!1,0,0)},
al:function(a){var t,s,r,q
H.b(this.ch!=null)
t=this.ch.length
if(t<768){this.sb6(new Uint8Array(H.ir(a)))
this.Q=5121}else if(t<196608){this.sb6(new Uint16Array(H.ir(a)))
this.Q=5123}else{this.sb6(new Uint32Array(H.ir(a)))
this.Q=5125}t=this.d
J.dP(t.a,this.e)
s=this.y
r=this.cx
q=J.t(r)
H.b(!!q.$iskY||!!q.$iskZ||!!q.$isl_)
J.j4(t.a,34963,s)
J.jW(t.a,34963,r,35048)},
dr:function(a){this.y=J.dQ(this.d.a)
this.al(a)},
l:function(a){var t,s,r,q
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,r=t.gF(t),r=r.gv(r);r.p();){q=r.gt(r)
C.a.i(s,H.d(q)+":"+t.h(0,q).length)}return"MESH["+H.d(this.a)+"] "+C.a.aw(s,"  ")},
sb6:function(a){this.cx=a}}
G.fC.prototype={
du:function(a,b){var t=C.b.d1(a,b)
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
t.ai(0,0,1/(p*s))
t.ai(1,1,1/p)
t.ai(2,2,(q+r)/o)
t.ai(3,2,-1)
t.ai(2,3,2*r*q/o)},
aY:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.f(new Float32Array(3))
o.q(r,q,p)
p=this.d
p.j(0,"uEyePosition",o)
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
s=J.t(n)
r=!!s.$isas
k=r?s.gaB(n):1
if(!!s.$isf){j=s.gm(n)
m=s.gn(n)
l=s.gH(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
l=s.gH(n)
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
a3.C(this.db)
a3.cA(0,o)
p.j(0,"uPerspectiveViewMatrix",a3)
return p}}
G.fO.prototype={
dI:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.B)(t),++o){n=t[o]
r.j(0,n,J.k_(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.B)(t),++o){n=t[o]
r.j(0,n,J.k_(q.a,p,n))}},
dC:function(a){var t,s,r,q,p
t=this.e.x
s=a.e.x
if(t.gk(t)!==s.gk(s))return!1
for(r=t.gF(t),r=r.gv(r);r.p();){q=r.gt(r)
p=t.h(0,q)
q=s.h(0,q)
if(p==null?q!=null:p!==q)return!1}return!0},
dN:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gk(t)===s.gk(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gF(s),s=s.gv(s);s.p();){q=s.gt(s)
if(!t.I(0,q))C.a.i(r,q)}for(t=this.x,s=new P.bD(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.p();){q=s.d
if(!t.G(0,q))C.a.i(r,q)}return r},
dQ:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gF(b),s=s.gv(s),r=this.d,q=this.y,p=this.z,o=0;s.p();){n=s.gt(s)
switch(J.jT(n,0)){case 117:if(q.I(0,n)){m=b.h(0,n)
if(p.I(0,n))H.dN("E:"+(n+" : group ["+H.d(a)+"] overwrites ["+n+"]"))
p.j(0,n,a)
l=$.$get$S().h(0,n)
if(l==null)H.L("unknown "+n)
H.b(q.I(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.ja(r.a,k,m)
else if(!!J.t(m).$iskz)J.mn(r.a,k,m)
break
case"float":if(l.c===0)J.ml(r.a,k,m)
else if(!!J.t(m).$iseG)J.mm(r.a,k,m)
break
case"mat4":if(l.c===0){n=H.a6(m,"$isI").a
J.k6(r.a,k,!1,n)}else if(!!J.t(m).$iseG)J.k6(r.a,k,!1,m)
else if(H.a4(!1))H.ai("bad unform: "+n)
break
case"mat3":if(l.c===0){n=H.a6(m,"$isab").a
J.k5(r.a,k,!1,n)}else if(!!J.t(m).$iseG)J.k5(r.a,k,!1,m)
else if(H.a4(!1))H.ai("bad unform: "+n)
break
case"vec4":n=l.c
j=r.a
if(n===0)J.k4(j,k,H.a6(m,"$isas").a)
else J.k4(j,k,m)
break
case"vec3":n=l.c
j=r.a
if(n===0)J.k3(j,k,H.a6(m,"$isf").a)
else J.k3(j,k,m)
break
case"vec2":n=l.c
j=r.a
if(n===0)J.k2(j,k,H.a6(m,"$isv").a)
else J.k2(j,k,m)
break
case"sampler2D":case"sampler2DShadow":n=C.b.a_(33984,this.ch)
J.jU(r.a,n)
n=H.a6(m,"$isbz").b
J.bX(r.a,3553,n)
n=this.ch
J.ja(r.a,k,n)
this.ch=this.ch+1
break
case"samplerCube":H.b(n==="uCubeTexture")
n=C.b.a_(33984,this.ch)
J.jU(r.a,n)
n=H.a6(m,"$isbz").b
J.bX(r.a,34067,n)
n=this.ch
J.ja(r.a,k,n)
this.ch=this.ch+1
break
default:H.dN("Error: unknow uniform type: "+j)
H.b(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":n=J.E(m,!0)
j=r.a
if(n)J.bY(j,2929)
else J.j6(j,2929)
break
case"cStencilFunc":H.a6(m,"$iscS")
n=m.a
j=r.a
if(n===1281)J.j6(j,2960)
else{J.bY(j,2960)
j=m.b
i=m.c
J.mg(r.a,n,j,i)}break
case"cDepthWrite":J.lU(r.a,m)
break
case"cBlendEquation":H.a6(m,"$iscR")
n=m.a
j=r.a
if(n===1281)J.j6(j,3042)
else{J.bY(j,3042)
j=m.b
i=m.c
J.lO(r.a,j,i)
J.lN(r.a,n)}break}++o
break}}h=P.mD(0,0,0,Date.now()-new P.bf(t,!1).a,0,0)
""+o
h.l(0)},
dz:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
Date.now()
t=this.d
J.mo(t.a,this.r)
this.ch=0
this.z.a6(0)
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.B)(b),++r){q=b[r]
this.dQ(q.a,q.aY())}s=this.Q
s.a6(0)
for(p=a.cy,p=p.gF(p),p=p.gv(p);p.p();)s.i(0,p.gt(p))
o=this.dN()
if(o.length!==0)P.Z("E:"+(H.d(this.a)+" "+a.f+": uninitialized inputs: "+H.d(o)))
s=a.d
p=a.e
J.dP(s.a,p)
n=this.e.f.length>0
p=a.f
s=a.dB()
m=a.Q
l=a.z
if(n)J.lL(t.a,p)
if(m!==-1){k=t.a
if(l>1)J.lY(k,p,s,m,0,l)
else J.lX(k,p,s,m,0)}else{m=t.a
if(l>1)J.lW(m,p,0,s,l)
else J.lV(m,p,0,s)}if(n)J.m0(t.a)}}
G.y.prototype={
bG:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.b(!1)
return-1}}}
G.fU.prototype={
aU:function(a){var t,s,r,q,p
H.b(this.b==null)
for(t=a.length,s=this.c,r=this.x,q=0;q<a.length;a.length===t||(0,H.B)(a),++q){p=a[q]
H.b($.$get$S().I(0,p))
H.b(!C.a.G(s,p))
C.a.i(s,p)
r.j(0,p,this.r);++this.r}C.a.aR(s)},
a2:function(a){var t,s,r,q
H.b(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.B)(a),++r){q=a[r]
if(H.a4($.$get$S().I(0,q)))H.ai("missing uniform "+q)
H.b(!C.a.G(s,q))
C.a.i(s,q)}C.a.aR(s)},
aC:function(a){var t,s,r,q
H.b(this.b==null)
for(t=a.length,s=this.e,r=0;r<a.length;a.length===t||(0,H.B)(a),++r){q=a[r]
H.b($.$get$S().I(0,q))
H.b(!C.a.G(s,q))
C.a.i(s,q)}C.a.aR(s)},
bI:function(a,b){H.b(this.b==null)
this.b=this.bK(!0,a,b)},
aZ:function(a){return this.bI(a,null)},
bH:function(a,b){H.b(this.b==null)
this.b=this.bK(!1,a,b)},
dJ:function(a){return this.bH(a,null)},
bK:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.b(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.B)(t),++o){n=t[o]
m=$.$get$S().h(0,n)
C.a.i(q,"layout (location="+H.d(p.h(0,n))+") in "+m.a+" "+H.d(n)+";")}C.a.i(q,"")
l=r?"in":"out"
if(r)C.a.i(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.B)(t),++o){k=t[o]
m=$.$get$S().h(0,k)
C.a.i(q,l+" "+m.a+" "+H.d(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.B)(t),++o){k=t[o]
m=$.$get$S().h(0,k)
C.a.i(q,l+" "+m.a+" "+H.d(k)+";")}C.a.i(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.B)(t),++o){k=t[o]
m=$.$get$S().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.i(q,"uniform "+m.a+" "+H.d(k)+j+";")}C.a.i(q,"")
if(c!=null)C.a.K(q,c)
if(a)C.a.i(q,"void main(void) {")
C.a.K(q,b)
if(a)C.a.i(q,"}")
return C.a.aw(q,"\n")}}
G.fW.prototype={
bo:function(){var t,s,r
t=this.f
s=this.d.a
r=t.a
r[0]=s[2]
r[1]=s[6]
r[2]=s[10]
return t},
bx:function(){var t,s,r
t=this.r
s=this.d.a
r=t.a
r[0]=s[1]
r[1]=s[5]
r[2]=s[9]
return t},
aQ:function(a,b,c){var t=this.d.a
t[12]=a
t[13]=b
t[14]=c}}
G.he.prototype={
dD:function(a,b){var t=this.e
if(t!==1)J.mi(a.a,b,34046,t)
J.k1(a.a,b,10240,this.r)
J.k1(a.a,b,10241,this.f)}}
G.bz.prototype={
l:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.eR.prototype={
dK:function(a){var t,s
t=this.d
s=this.c
J.bX(t.a,s,this.b)
J.mh(t.a,s,0,6408,6408,5121,a)}}
R.h_.prototype={
dL:function(a,b,c){var t,s,r
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
J.j3(this.a,s)
r=this.dU(b,c,90,30)
this.d=r
J.j3(this.a,r)
t=t.createElement("div")
this.c=t
J.j3(this.a,t)},
dU:function(a,b,c,d){var t,s,r,q,p
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
p=(r&&C.x).bP(r,"float")
r.setProperty(p,"left","")
p=C.x.bP(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.p.X(t,s)}return t}}
R.h0.prototype={
dP:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.q.fl(s,2)+" fps"
t=this.c;(t&&C.p).df(t,b)
r=C.b.O(30*C.q.ez(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.p).X(t,q)},
dO:function(a){return this.dP(a,"")}}
A.aZ.prototype={
l:function(a){return"NODE["+H.d(this.a)+"]"}}
A.b_.prototype={}
A.fN.prototype={
dH:function(a,b,c){if(this.d==null)this.d=new G.eJ(this.e,null,null,null,null)},
dw:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.d
s=this.r
r=this.z
q=this.Q
p=t.a
t=t.b
J.lM(p.a,36160,t)
H.b(r>0&&q>0)
J.mr(p.a,this.x,this.y,r,q)
if(s!==0)J.lP(p.a,s)
for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.B)(t),++o){n=t[o]
if(!n.c)continue
r=n.d
if(!r.c)continue
m=n.e
C.a.i(m,new G.cV(P.J(),"transforms",!1,!0))
l=new T.I(new Float32Array(16))
l.N()
for(q=n.f,p=q.length,k=0;k<q.length;q.length===p||(0,H.B)(q),++k)A.lk(r,q[k],l,a,m)
m.pop()}},
dv:function(){return this.dw(null)}}
B.eL.prototype={
$2:function(a,b){return a*(this.a+1)+b},
$S:function(a,b){return{func:1,ret:P.w,args:[P.w,P.w]}}}
A.iF.prototype={
$2:function(a,b){var t=536870911&a+J.bb(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(a,b){return{func:1,args:[P.w,P.F]}}}
T.ab.prototype={
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
l:function(a){return"[0] "+this.a0(0).l(0)+"\n[1] "+this.a0(1).l(0)+"\n[2] "+this.a0(2).l(0)+"\n"},
h:function(a,b){return this.a[b]},
B:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.ab){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gA:function(a){return A.dL(this.a)},
a0:function(a){var t,s
t=new Float32Array(3)
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.f(t)},
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
T.I.prototype={
ai:function(a,b,c){H.b(a<4)
H.b(b<4)
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
l:function(a){return"[0] "+this.a0(0).l(0)+"\n[1] "+this.a0(1).l(0)+"\n[2] "+this.a0(2).l(0)+"\n[3] "+this.a0(3).l(0)+"\n"},
h:function(a,b){return this.a[b]},
B:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.I){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gA:function(a){return A.dL(this.a)},
a0:function(a){var t,s
t=new Float32Array(4)
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.as(t)},
ay:function(b0,b1,b2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
t=Math.sqrt(b1.gT())
s=b1.a
r=s[0]/t
q=s[1]/t
p=s[2]/t
o=Math.cos(b2)
n=Math.sin(b2)
m=1-o
l=r*r*m+o
k=p*n
j=r*q*m-k
i=q*n
h=r*p*m+i
g=q*r*m+k
f=q*q*m+o
k=r*n
e=q*p*m-k
d=p*r*m-i
c=p*q*m+k
b=p*p*m+o
k=this.a
i=k[0]
a=k[4]
a0=k[8]
a1=k[1]
a2=k[5]
a3=k[9]
a4=k[2]
a5=k[6]
a6=k[10]
a7=k[3]
a8=k[7]
a9=k[11]
k[0]=i*l+a*g+a0*d
k[1]=a1*l+a2*g+a3*d
k[2]=a4*l+a5*g+a6*d
k[3]=a7*l+a8*g+a9*d
k[4]=i*j+a*f+a0*c
k[5]=a1*j+a2*f+a3*c
k[6]=a4*j+a5*f+a6*c
k[7]=a7*j+a8*f+a9*c
k[8]=i*h+a*e+a0*b
k[9]=a1*h+a2*e+a3*b
k[10]=a4*h+a5*e+a6*b
k[11]=a7*h+a8*e+a9*b},
N:function(){var t=this.a
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
cA:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
gH:function(a){return this.a[2]},
gaB:function(a){return this.a[3]},
dd:function(a,b){var t,s,r,q,p
t=Math.sqrt(a.gT())
if(t===0)return
s=b*0.5
r=Math.sin(s)/t
q=a.a
p=this.a
p[0]=q[0]*r
p[1]=q[1]*r
p[2]=q[2]*r
p[3]=Math.cos(s)},
gk:function(a){var t,s,r,q,p
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=t[3]
return Math.sqrt(s*s+r*r+q*q+p*p)},
h:function(a,b){return this.a[b]},
l:function(a){var t=this.a
return H.d(t[0])+", "+H.d(t[1])+", "+H.d(t[2])+" @ "+H.d(t[3])}}
T.v.prototype={
w:function(a,b){var t=this.a
t[0]=a
t[1]=b},
l:function(a){var t=this.a
return"["+H.d(t[0])+","+H.d(t[1])+"]"},
B:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.v){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gA:function(a){return A.dL(this.a)},
h:function(a,b){return this.a[b]},
gk:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.f.prototype={
q:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
C:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
l:function(a){var t=this.a
return"["+H.d(t[0])+","+H.d(t[1])+","+H.d(t[2])+"]"},
B:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.f){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gA:function(a){return A.dL(this.a)},
a_:function(a,b){var t=new T.f(new Float32Array(3))
t.C(this)
t.i(0,b)
return t},
h:function(a,b){return this.a[b]},
gk:function(a){return Math.sqrt(this.gT())},
gT:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
E:function(a){var t,s,r
t=Math.sqrt(this.gT())
if(t===0)return 0
s=1/t
r=this.a
r[0]=r[0]*s
r[1]=r[1]*s
r[2]=r[2]*s
return t},
bh:function(a){var t,s
t=a.a
s=this.a
return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]},
cl:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.f(new Float32Array(3))
t.q(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
i:function(a,b){var t,s
t=b.a
s=this.a
s[0]=s[0]+t[0]
s[1]=s[1]+t[1]
s[2]=s[2]+t[2]},
bD:function(a,b){var t,s
t=b.a
s=this.a
s[0]=s[0]-t[0]
s[1]=s[1]-t[1]
s[2]=s[2]-t[2]},
V:function(a,b){var t=this.a
t[2]=t[2]*b
t[1]=t[1]*b
t[0]=t[0]*b},
aP:function(a){var t=new T.f(new Float32Array(3))
t.C(this)
t.V(0,a)
return t},
gR:function(a){return this.a[2]},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gH:function(a){return this.a[2]}}
T.as.prototype={
l:function(a){var t=this.a
return H.d(t[0])+","+H.d(t[1])+","+H.d(t[2])+","+H.d(t[3])},
B:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.as){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gA:function(a){return A.dL(this.a)},
h:function(a,b){return this.a[b]},
gk:function(a){var t,s,r,q
t=this.a
s=t[0]
r=t[1]
q=t[2]
t=t[3]
return Math.sqrt(s*s+r*r+q*q+t*t)},
gR:function(a){return this.a[2]},
gW:function(a){return this.a[3]},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gH:function(a){return this.a[2]},
gaB:function(a){return this.a[3]}}
K.iR.prototype={
$1:function(a){var t=H.a6(J.m6(a),"$isbl")
P.Z(H.d(t.id)+" toggle "+H.d(t.checked))
$.$get$iB().h(0,t.id).c=t.checked
this.a.h(0,t.id).c=t.checked},
$S:function(a){return{func:1,args:[W.h]}}}
K.iS.prototype={
$1:function(a){var t,s,r
t=this.a
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.Z("size change "+H.d(s)+" "+H.d(r))
this.b.du(s,r)
t=this.c
t.z=s
t.Q=r
t=this.d
t.z=s
t.Q=r},
$S:function(a){return{func:1,v:true,args:[W.h]}}}
K.iQ.prototype={
$1:function(a7){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
t=this.a
s=t.a
t.a=a7+0
r=this.b
r.go+=0.001
q=r.k4
if(q.h(0,37)!=null)r.go+=0.03
else if(q.h(0,39)!=null)r.go-=0.03
if(q.h(0,38)!=null)r.id+=0.03
else if(q.h(0,40)!=null)r.id-=0.03
if(q.h(0,33)!=null)r.fy*=0.99
else if(q.h(0,34)!=null)r.fy*=1.01
if(q.h(0,32)!=null){r.go=0
r.id=0}q=C.c.eA(r.id,-1.4707963267948965,1.4707963267948965)
r.id=q
p=r.fy
o=r.go
n=p*Math.cos(q)
r.aQ(n*Math.cos(o),p*Math.sin(q),n*Math.sin(o))
o=r.k2
q=r.d
p=q.a
m=o.a
p[12]=p[12]+m[0]
p[13]=p[13]+m[1]
p[14]=p[14]+m[2]
l=p[12]
k=p[13]
j=p[14]
i=new T.f(new Float32Array(3))
i.q(0,1,0)
m=r.e
h=m.a
h[0]=p[12]
h[1]=p[13]
h[2]=p[14]
h=new Float32Array(3)
g=new T.f(h)
g.C(m)
g.bD(0,o)
g.E(0)
f=i.cl(g)
f.E(0)
e=g.cl(f)
e.E(0)
o=f.bh(m)
d=e.bh(m)
m=g.bh(m)
c=f.a
b=c[0]
a=e.a
a0=a[0]
a1=h[0]
a2=c[1]
a3=a[1]
a4=h[1]
c=c[2]
a=a[2]
h=h[2]
p[15]=1
p[14]=-m
p[13]=-d
p[12]=-o
p[11]=0
p[10]=h
p[9]=a
p[8]=c
p[7]=0
p[6]=a4
p[5]=a3
p[4]=a2
p[3]=0
p[2]=a1
p[1]=a0
p[0]=b
p[12]=l
p[13]=k
p[14]=j
q.ay(0,r.bo(),-r.k1)
for(r=this.c.cy,q=r.length,s=-((a7-s)*0.0003),a5=0;a5<r.length;r.length===q||(0,H.B)(r),++a5){a6=r[a5]
if(a6.a!=="grid"){p=a6.d
p.ay(0,a6.bo(),s)
p.ay(0,a6.bx(),s)}}(this.d.selectedIndex===0?this.e:this.f).dv()
C.av.ges(window).cK(this)
this.r.dO(t.a)},
$S:function(a){return{func:1,v:true,args:[P.a7]}}}
J.a.prototype.dk=J.a.prototype.l
J.bm.prototype.dm=J.bm.prototype.l
P.T.prototype.dl=P.T.prototype.aN
W.a1.prototype.aS=W.a1.prototype.S
W.bJ.prototype.dn=W.bJ.prototype.a4;(function installTearOffs(){installTearOff(H.b2.prototype,"gf6",0,0,0,null,["$0"],["aK"],0)
installTearOff(H.a3.prototype,"gd5",0,0,0,null,["$1"],["P"],2)
installTearOff(H.aK.prototype,"geL",0,0,0,null,["$1"],["a7"],2)
installTearOff(P,"nD",1,0,0,null,["$1"],["nj"],1)
installTearOff(P,"nE",1,0,0,null,["$1"],["nk"],1)
installTearOff(P,"nF",1,0,0,null,["$1"],["nl"],1)
installTearOff(P,"lh",1,0,0,null,["$0"],["nB"],0)
installTearOff(P.ag.prototype,"ge_",0,0,0,null,["$2","$1"],["aE","e0"],5)
installTearOff(P,"nK",1,0,0,null,["$2"],["my"],6)
installTearOff(W,"nP",1,0,0,null,["$4"],["nq"],4)
installTearOff(W,"nQ",1,0,0,null,["$4"],["nr"],4)
installTearOff(W.cz.prototype,"gbj",0,1,0,null,["$0"],["bk"],3)
installTearOff(W.cU.prototype,"gbj",0,1,0,null,["$0"],["bk"],3)
installTearOff(K,"lv",1,0,0,null,["$0"],["nY"],0)})();(function inheritance(){inherit(P.F,null)
var t=P.F
inherit(H.jk,t)
inherit(J.a,t)
inherit(J.dU,t)
inherit(P.T,t)
inherit(H.co,t)
inherit(P.ck,t)
inherit(H.aT,t)
inherit(H.ax,t)
inherit(H.i7,t)
inherit(H.b2,t)
inherit(H.hM,t)
inherit(H.aL,t)
inherit(H.i6,t)
inherit(H.hG,t)
inherit(H.cG,t)
inherit(H.hg,t)
inherit(H.av,t)
inherit(H.a3,t)
inherit(H.aK,t)
inherit(H.fM,t)
inherit(H.hm,t)
inherit(P.aS,t)
inherit(H.dp,t)
inherit(H.ar,t)
inherit(P.aX,t)
inherit(H.f2,t)
inherit(H.f4,t)
inherit(P.jd,t)
inherit(P.hH,t)
inherit(P.d6,t)
inherit(P.ag,t)
inherit(P.cX,t)
inherit(P.h3,t)
inherit(P.h4,t)
inherit(P.jx,t)
inherit(P.aO,t)
inherit(P.iq,t)
inherit(P.fT,t)
inherit(P.i3,t)
inherit(P.bD,t)
inherit(P.jo,t)
inherit(P.bE,t)
inherit(P.m,t)
inherit(P.i5,t)
inherit(P.aj,t)
inherit(P.H,t)
inherit(P.bf,t)
inherit(P.a7,t)
inherit(P.ay,t)
inherit(P.cM,t)
inherit(P.jf,t)
inherit(P.hQ,t)
inherit(P.ek,t)
inherit(P.j,t)
inherit(P.aW,t)
inherit(P.N,t)
inherit(P.b0,t)
inherit(P.o,t)
inherit(P.bv,t)
inherit(P.jA,t)
inherit(W.e4,t)
inherit(W.bC,t)
inherit(W.n,t)
inherit(W.cB,t)
inherit(W.bJ,t)
inherit(W.ik,t)
inherit(W.cf,t)
inherit(W.hJ,t)
inherit(W.cA,t)
inherit(W.js,t)
inherit(W.jB,t)
inherit(W.ie,t)
inherit(W.dz,t)
inherit(P.i9,t)
inherit(G.fi,t)
inherit(G.dZ,t)
inherit(G.eJ,t)
inherit(G.an,t)
inherit(G.cd,t)
inherit(G.bi,t)
inherit(G.cS,t)
inherit(G.cR,t)
inherit(G.y,t)
inherit(G.fU,t)
inherit(G.he,t)
inherit(G.bz,t)
inherit(R.h_,t)
inherit(T.ab,t)
inherit(T.I,t)
inherit(T.fI,t)
inherit(T.v,t)
inherit(T.f,t)
inherit(T.as,t)
t=J.a
inherit(J.eX,t)
inherit(J.eY,t)
inherit(J.bm,t)
inherit(J.az,t)
inherit(J.aU,t)
inherit(J.aA,t)
inherit(H.bp,t)
inherit(H.aY,t)
inherit(W.e,t)
inherit(W.dR,t)
inherit(W.c1,t)
inherit(W.aR,t)
inherit(W.a0,t)
inherit(W.cY,t)
inherit(W.e9,t)
inherit(W.ea,t)
inherit(W.eb,t)
inherit(W.c6,t)
inherit(W.c7,t)
inherit(W.c8,t)
inherit(W.cZ,t)
inherit(W.ca,t)
inherit(W.d0,t)
inherit(W.ef,t)
inherit(W.h,t)
inherit(W.d4,t)
inherit(W.eN,t)
inherit(W.d7,t)
inherit(W.f6,t)
inherit(W.ff,t)
inherit(W.db,t)
inherit(W.cz,t)
inherit(W.de,t)
inherit(W.ac,t)
inherit(W.di,t)
inherit(W.cE,t)
inherit(W.dk,t)
inherit(W.ad,t)
inherit(W.dq,t)
inherit(W.dt,t)
inherit(W.hf,t)
inherit(W.dv,t)
inherit(W.hk,t)
inherit(W.cU,t)
inherit(W.hs,t)
inherit(W.hu,t)
inherit(W.dA,t)
inherit(W.dC,t)
inherit(W.dE,t)
inherit(W.dG,t)
inherit(W.dI,t)
inherit(P.d9,t)
inherit(P.fd,t)
inherit(P.dg,t)
inherit(P.fF,t)
inherit(P.fG,t)
inherit(P.fK,t)
inherit(P.dr,t)
inherit(P.dx,t)
inherit(P.dV,t)
inherit(P.fP,t)
inherit(P.fQ,t)
inherit(P.dm,t)
t=J.bm
inherit(J.fD,t)
inherit(J.aI,t)
inherit(J.aB,t)
inherit(J.jj,J.az)
t=J.aU
inherit(J.cm,t)
inherit(J.cl,t)
t=P.T
inherit(H.l,t)
inherit(H.cq,t)
inherit(H.cW,t)
t=H.l
inherit(H.aV,t)
inherit(H.f3,t)
inherit(H.ei,H.cq)
t=P.ck
inherit(H.fa,t)
inherit(H.hy,t)
t=H.aV
inherit(H.bn,t)
inherit(P.f5,t)
t=H.ax
inherit(H.j_,t)
inherit(H.j0,t)
inherit(H.i1,t)
inherit(H.hN,t)
inherit(H.eT,t)
inherit(H.eU,t)
inherit(H.i8,t)
inherit(H.hh,t)
inherit(H.hi,t)
inherit(H.j1,t)
inherit(H.iK,t)
inherit(H.iL,t)
inherit(H.iM,t)
inherit(H.iN,t)
inherit(H.iO,t)
inherit(H.hb,t)
inherit(H.eZ,t)
inherit(H.iG,t)
inherit(H.iH,t)
inherit(H.iI,t)
inherit(P.hC,t)
inherit(P.hB,t)
inherit(P.hD,t)
inherit(P.hE,t)
inherit(P.hR,t)
inherit(P.hV,t)
inherit(P.hS,t)
inherit(P.hT,t)
inherit(P.hU,t)
inherit(P.hY,t)
inherit(P.hZ,t)
inherit(P.hX,t)
inherit(P.hW,t)
inherit(P.h5,t)
inherit(P.h6,t)
inherit(P.it,t)
inherit(P.ic,t)
inherit(P.ib,t)
inherit(P.id,t)
inherit(P.f9,t)
inherit(P.eg,t)
inherit(P.eh,t)
inherit(W.ej,t)
inherit(W.h2,t)
inherit(W.hz,t)
inherit(W.hP,t)
inherit(W.fs,t)
inherit(W.fr,t)
inherit(W.ig,t)
inherit(W.ih,t)
inherit(W.io,t)
inherit(W.ip,t)
inherit(P.iw,t)
inherit(B.iV,t)
inherit(B.iW,t)
inherit(B.iX,t)
inherit(B.iY,t)
inherit(B.iZ,t)
inherit(B.fx,t)
inherit(B.fy,t)
inherit(B.fz,t)
inherit(B.fA,t)
inherit(B.eL,t)
inherit(A.iF,t)
inherit(K.iR,t)
inherit(K.iS,t)
inherit(K.iQ,t)
t=H.hG
inherit(H.b4,t)
inherit(H.bO,t)
t=P.aS
inherit(H.ft,t)
inherit(H.f_,t)
inherit(H.hq,t)
inherit(H.ho,t)
inherit(H.dY,t)
inherit(H.fR,t)
inherit(P.c_,t)
inherit(P.cC,t)
inherit(P.a_,t)
inherit(P.hr,t)
inherit(P.hp,t)
inherit(P.b1,t)
inherit(P.e_,t)
inherit(P.e8,t)
t=H.hb
inherit(H.fZ,t)
inherit(H.be,t)
inherit(H.hA,P.c_)
inherit(P.cp,P.aX)
t=P.cp
inherit(H.aa,t)
inherit(W.hF,t)
t=H.aY
inherit(H.fj,t)
inherit(H.cv,t)
t=H.cv
inherit(H.bF,t)
inherit(H.bH,t)
inherit(H.bG,H.bF)
inherit(H.cw,H.bG)
inherit(H.bI,H.bH)
inherit(H.cx,H.bI)
t=H.cw
inherit(H.cu,t)
inherit(H.fk,t)
t=H.cx
inherit(H.fl,t)
inherit(H.fm,t)
inherit(H.fn,t)
inherit(H.fo,t)
inherit(H.fp,t)
inherit(H.cy,t)
inherit(H.fq,t)
inherit(P.il,P.hH)
inherit(P.ia,P.iq)
inherit(P.i4,H.aa)
inherit(P.fS,P.fT)
inherit(P.i0,P.fS)
inherit(P.i2,P.i0)
inherit(P.cn,P.bE)
t=P.a7
inherit(P.Y,t)
inherit(P.w,t)
t=P.a_
inherit(P.cF,t)
inherit(P.eS,t)
t=W.e
inherit(W.q,t)
inherit(W.aq,t)
inherit(W.eE,t)
inherit(W.bk,t)
inherit(W.bo,t)
inherit(W.fH,t)
inherit(W.cH,t)
inherit(W.bK,t)
inherit(W.bM,t)
inherit(W.hw,t)
inherit(W.hx,t)
inherit(W.bA,t)
inherit(W.jC,t)
inherit(P.dW,t)
inherit(P.aP,t)
t=W.q
inherit(W.a1,t)
inherit(W.aw,t)
inherit(W.bg,t)
t=W.a1
inherit(W.k,t)
inherit(P.x,t)
t=W.aq
inherit(W.bZ,t)
inherit(W.eM,t)
inherit(W.f7,t)
t=W.k
inherit(W.dS,t)
inherit(W.dT,t)
inherit(W.au,t)
inherit(W.c0,t)
inherit(W.c5,t)
inherit(W.eI,t)
inherit(W.ci,t)
inherit(W.bl,t)
inherit(W.bt,t)
inherit(W.cO,t)
inherit(W.h9,t)
inherit(W.ha,t)
inherit(W.bw,t)
t=W.aR
inherit(W.e0,t)
inherit(W.e2,t)
inherit(W.e3,t)
inherit(W.e6,t)
t=W.a0
inherit(W.e1,t)
inherit(W.e5,t)
inherit(W.e7,t)
inherit(W.aQ,W.cY)
inherit(W.ec,W.c7)
inherit(W.ed,W.c8)
inherit(W.d_,W.cZ)
inherit(W.c9,W.d_)
inherit(W.d1,W.d0)
inherit(W.ee,W.d1)
inherit(W.d5,W.d4)
inherit(W.eD,W.d5)
inherit(W.d8,W.d7)
inherit(W.bj,W.d8)
inherit(W.cj,W.bg)
inherit(W.eO,W.bk)
t=W.h
inherit(W.aH,t)
inherit(P.hv,t)
t=W.aH
inherit(W.aC,t)
inherit(W.M,t)
inherit(W.aG,t)
inherit(W.fg,W.bo)
inherit(W.dc,W.db)
inherit(W.fh,W.dc)
inherit(W.R,P.cn)
inherit(W.df,W.de)
inherit(W.bq,W.df)
inherit(W.dj,W.di)
inherit(W.fE,W.dj)
inherit(W.bL,W.bK)
inherit(W.fV,W.bL)
inherit(W.dl,W.dk)
inherit(W.fX,W.dl)
inherit(W.h1,W.dq)
inherit(W.du,W.dt)
inherit(W.hc,W.du)
inherit(W.bN,W.bM)
inherit(W.hd,W.bN)
inherit(W.dw,W.dv)
inherit(W.hj,W.dw)
inherit(W.aJ,W.M)
inherit(W.dB,W.dA)
inherit(W.hI,W.dB)
inherit(W.hK,W.ca)
inherit(W.dD,W.dC)
inherit(W.i_,W.dD)
inherit(W.dF,W.dE)
inherit(W.dd,W.dF)
inherit(W.dH,W.dG)
inherit(W.ii,W.dH)
inherit(W.dJ,W.dI)
inherit(W.ij,W.dJ)
inherit(W.hL,W.hF)
inherit(W.d3,P.h3)
inherit(W.d2,W.d3)
inherit(W.hO,P.h4)
inherit(W.im,W.bJ)
inherit(P.U,P.i9)
t=P.x
inherit(P.el,t)
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
inherit(P.eF,t)
inherit(P.a9,t)
inherit(P.fb,t)
inherit(P.fB,t)
inherit(P.bs,t)
t=P.a9
inherit(P.eH,t)
inherit(P.a2,t)
inherit(P.eQ,t)
inherit(P.h8,t)
inherit(P.bx,t)
inherit(P.ht,t)
inherit(P.da,P.d9)
inherit(P.f0,P.da)
inherit(P.dh,P.dg)
inherit(P.fu,P.dh)
inherit(P.fL,P.a2)
inherit(P.ds,P.dr)
inherit(P.h7,P.ds)
inherit(P.by,P.bx)
inherit(P.dy,P.dx)
inherit(P.hl,P.dy)
inherit(P.fv,P.aP)
inherit(P.dn,P.dm)
inherit(P.fY,P.dn)
t=G.fi
inherit(G.fW,t)
inherit(G.cV,t)
inherit(G.f1,t)
inherit(G.cs,t)
inherit(G.fO,t)
inherit(A.b_,t)
inherit(A.fN,t)
t=G.fW
inherit(G.dX,t)
inherit(A.aZ,t)
inherit(B.fw,G.dX)
t=G.f1
inherit(G.cD,t)
inherit(G.c4,t)
inherit(G.cL,t)
t=G.cV
inherit(G.eP,t)
inherit(G.fc,t)
inherit(G.fC,t)
inherit(G.eR,G.bz)
inherit(R.h0,R.h_)
mixin(H.bF,P.m)
mixin(H.bG,H.aT)
mixin(H.bH,P.m)
mixin(H.bI,H.aT)
mixin(P.bE,P.m)
mixin(W.cY,W.e4)
mixin(W.cZ,P.m)
mixin(W.d_,W.n)
mixin(W.d0,P.m)
mixin(W.d1,W.n)
mixin(W.d4,P.m)
mixin(W.d5,W.n)
mixin(W.d7,P.m)
mixin(W.d8,W.n)
mixin(W.db,P.m)
mixin(W.dc,W.n)
mixin(W.de,P.m)
mixin(W.df,W.n)
mixin(W.di,P.m)
mixin(W.dj,W.n)
mixin(W.bK,P.m)
mixin(W.bL,W.n)
mixin(W.dk,P.m)
mixin(W.dl,W.n)
mixin(W.dq,P.aX)
mixin(W.dt,P.m)
mixin(W.du,W.n)
mixin(W.bM,P.m)
mixin(W.bN,W.n)
mixin(W.dv,P.m)
mixin(W.dw,W.n)
mixin(W.dA,P.m)
mixin(W.dB,W.n)
mixin(W.dC,P.m)
mixin(W.dD,W.n)
mixin(W.dE,P.m)
mixin(W.dF,W.n)
mixin(W.dG,P.m)
mixin(W.dH,W.n)
mixin(W.dI,P.m)
mixin(W.dJ,W.n)
mixin(P.d9,P.m)
mixin(P.da,W.n)
mixin(P.dg,P.m)
mixin(P.dh,W.n)
mixin(P.dr,P.m)
mixin(P.ds,W.n)
mixin(P.dx,P.m)
mixin(P.dy,W.n)
mixin(P.dm,P.m)
mixin(P.dn,W.n)})();(function constants(){C.o=W.au.prototype
C.w=W.c0.prototype
C.J=W.c1.prototype
C.x=W.aQ.prototype
C.p=W.c5.prototype
C.K=W.c6.prototype
C.L=W.ci.prototype
C.i=W.cj.prototype
C.M=J.a.prototype
C.a=J.az.prototype
C.q=J.cl.prototype
C.b=J.cm.prototype
C.c=J.aU.prototype
C.j=J.aA.prototype
C.T=J.aB.prototype
C.u=H.cu.prototype
C.B=W.bq.prototype
C.C=J.fD.prototype
C.D=W.cE.prototype
C.I=W.cO.prototype
C.v=J.aI.prototype
C.au=W.aJ.prototype
C.av=W.bA.prototype
C.f=new P.ia()
C.y=new P.ay(0)
C.N=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.O=function(hooks) {
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
C.z=function(hooks) { return hooks; }

C.P=function(getTagFallback) {
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
C.Q=function() {
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
C.R=function(hooks) {
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
C.S=function(hooks) {
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
C.A=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.U=H.A(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.o])
C.V=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.W=makeConstList([])
C.r=H.A(makeConstList(["bind","if","ref","repeat","syntax"]),[P.o])
C.t=H.A(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.o])
C.X=new G.y("vec3","vertex btangents",0)
C.d=new G.y("vec3","",0)
C.Y=new G.y("vec4","delta from light",0)
C.n=new G.y("","",0)
C.E=new G.y("vec3","vertex coordinates",0)
C.Z=new G.y("vec3","vertex binormals",0)
C.F=new G.y("vec4","for wireframe",0)
C.a_=new G.y("vec4","per vertex color",0)
C.a0=new G.y("float","for normal maps",0)
C.k=new G.y("mat4","",0)
C.a2=new G.y("mat4","",4)
C.a1=new G.y("mat4","",128)
C.e=new G.y("float","",0)
C.a3=new G.y("float","",4)
C.a4=new G.y("float","depth for shadowmaps",0)
C.h=new G.y("sampler2D","",0)
C.a5=new G.y("float","for bump maps",0)
C.a6=new G.y("vec2","texture uvs",0)
C.a7=new G.y("float","time since program start in sec",0)
C.l=new G.y("vec2","",0)
C.a8=new G.y("samplerCube","",0)
C.m=new G.y("vec4","",0)
C.a9=new G.y("vec3","vertex normals",0)
C.aa=new G.y("sampler2DShadow","",0)
C.G=new G.y("vec3","per vertex color",0)
C.H=new G.y("mat3","",0)
C.ab=new G.y("vec3","vertex tangents",0)
C.ac=H.K("o8")
C.ad=H.K("o9")
C.ae=H.K("eG")
C.af=H.K("oa")
C.ag=H.K("ob")
C.ah=H.K("kz")
C.ai=H.K("oc")
C.aj=H.K("kC")
C.ak=H.K("N")
C.al=H.K("o")
C.am=H.K("kY")
C.an=H.K("kZ")
C.ao=H.K("od")
C.ap=H.K("l_")
C.aq=H.K("aj")
C.ar=H.K("Y")
C.as=H.K("w")
C.at=H.K("a7")})();(function staticFields(){$.kI="$cachedFunction"
$.kJ="$cachedInvocation"
$.kc=null
$.ka=null
$.jH=!1
$.jM=null
$.le=null
$.lz=null
$.iz=null
$.iJ=null
$.jN=null
$.b5=null
$.bP=null
$.bQ=null
$.jI=!1
$.D=C.f
$.kx=0
$.am=null
$.je=null
$.kw=null
$.kv=null
$.kt=null
$.ks=null
$.kr=null
$.kq=null
$.nH=0
$.nI=0
$.jR=0
$.lw=0
$.bV=0
$.bW=0
$.o4=!1
$.ll=0})();(function lazyInitializers(){lazy($,"kp","$get$kp",function(){return H.lo("_$dart_dartClosure")})
lazy($,"jl","$get$jl",function(){return H.lo("_$dart_js")})
lazy($,"kA","$get$kA",function(){return H.mS()})
lazy($,"kB","$get$kB",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.kx
$.kx=t+1
t="expando$key$"+t}return new P.ek(t,null,[P.w])})
lazy($,"kN","$get$kN",function(){return H.ae(H.hn({
toString:function(){return"$receiver$"}}))})
lazy($,"kO","$get$kO",function(){return H.ae(H.hn({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"kP","$get$kP",function(){return H.ae(H.hn(null))})
lazy($,"kQ","$get$kQ",function(){return H.ae(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kU","$get$kU",function(){return H.ae(H.hn(void 0))})
lazy($,"kV","$get$kV",function(){return H.ae(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kS","$get$kS",function(){return H.ae(H.kT(null))})
lazy($,"kR","$get$kR",function(){return H.ae(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"kX","$get$kX",function(){return H.ae(H.kT(void 0))})
lazy($,"kW","$get$kW",function(){return H.ae(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"jE","$get$jE",function(){return P.ni()})
lazy($,"bR","$get$bR",function(){return[]})
lazy($,"ko","$get$ko",function(){return{}})
lazy($,"l5","$get$l5",function(){return P.jp(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"jF","$get$jF",function(){return P.J()})
lazy($,"iy","$get$iy",function(){return P.kD(P.w,P.aj)})
lazy($,"bT","$get$bT",function(){return P.kD(P.o,P.aj)})
lazy($,"kL","$get$kL",function(){return new G.cS(1281,0,4294967295)})
lazy($,"k8","$get$k8",function(){return new G.cR(1281,1281,1281)})
lazy($,"S","$get$S",function(){return P.ap(["cBlendEquation",C.n,"cDepthWrite",C.n,"cDepthTest",C.n,"cStencilFunc",C.n,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColors",C.G,"aColorAlpha",C.a_,"aPosition",C.E,"aTexUV",C.a6,"aNormal",C.a9,"aBinormal",C.Z,"aCenter",C.F,"aPointSize",C.e,"aBoneIndex",C.m,"aBoneWeight",C.m,"aTangent",C.ab,"aBitangent",C.X,"iaRotation",C.m,"iaTranslation",C.d,"iaScale",C.d,"vColor",C.G,"vTexUV",C.l,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.E,"vPositionFromLight",C.Y,"vCenter",C.F,"vDepth",C.a4,"uTransformationMatrix",C.k,"uModelMatrix",C.k,"uNormalMatrix",C.H,"uConvolutionMatrix",C.H,"uPerspectiveViewMatrix",C.k,"uLightPerspectiveViewMatrix",C.k,"uShadowMap",C.aa,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a8,"uAnimationTable",C.h,"uTime",C.a7,"uCameraNear",C.e,"uCameraFar",C.e,"uFogNear",C.e,"uFogFar",C.e,"uPointSize",C.e,"uScale",C.e,"uAngle",C.e,"uCanvasSize",C.l,"uCenter2",C.l,"uCutOff",C.e,"uShininess",C.e,"uShadowBias",C.e,"uOpacity",C.e,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.m,"uColorAlpha2",C.m,"uEyePosition",C.d,"uMaterial",C.k,"uRange",C.l,"uDirection",C.l,"uBoneMatrices",C.a1,"uLightDescs",C.a2,"uLightCount",C.e,"uLightTypes",C.a3,"uBumpScale",C.a5,"uNormalScale",C.a0])})
lazy($,"km","$get$km",function(){return T.z(1,1,1)})
lazy($,"kh","$get$kh",function(){return T.z(0.4,0.4,0.4)})
lazy($,"kf","$get$kf",function(){return T.z(0,0,0)})
lazy($,"kg","$get$kg",function(){return T.z(0,0,1)})
lazy($,"kj","$get$kj",function(){return T.z(0,0,0.5)})
lazy($,"kl","$get$kl",function(){return T.z(1,0,0)})
lazy($,"ki","$get$ki",function(){return T.z(0,1,0)})
lazy($,"kk","$get$kk",function(){return T.z(0,0.5,0)})
lazy($,"kn","$get$kn",function(){return T.z(1,1,0)})
lazy($,"lu","$get$lu",function(){var t=G.bu("LightGouradV")
t.aU(["aPosition","aNormal","aTexUV"])
t.aC(["vColor"])
t.a2(["uPerspectiveViewMatrix","uModelMatrix","uNormalMatrix"])
t.a2(["uLightDescs","uLightTypes","uShininess"])
t.a2(["uEyePosition","uTexture"])
t.bH(["void main() {\n    vec4 pos = uModelMatrix * vec4(aPosition, 1.0);\n    gl_Position = uPerspectiveViewMatrix * pos;\n    vec3 normal = uNormalMatrix * aNormal;\n\n    ColorComponents acc = CombinedLight(pos.xyz, normal, uEyePosition,\n                  uLightDescs,\n                  uLightTypes,\n                  uShininess);\n\n     vColor = acc.diffuse +\n                 acc.specular +\n                 texture(uTexture, aTexUV).rgb;\n}\n        "],["// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"])
return t})
lazy($,"ls","$get$ls",function(){var t=G.bu("LightGrouradV")
t.aC(["vColor"])
t.aZ(["oFragColor = vec4(vColor, 1.0 );"])
return t})
lazy($,"lt","$get$lt",function(){var t=G.bu("LightBlinnPhongV")
t.aU(["aPosition","aNormal","aTexUV"])
t.aC(["vPosition","vNormal","vTexUV"])
t.a2(["uPerspectiveViewMatrix","uModelMatrix","uNormalMatrix"])
t.dJ(["void main() {\n    vec4 pos = uModelMatrix * vec4(aPosition, 1.0);\n    gl_Position = uPerspectiveViewMatrix * pos;\n    vPosition = pos.xyz;\n    vTexUV = aTexUV;\n    vNormal = uNormalMatrix * aNormal;\n}\n"])
return t})
lazy($,"lr","$get$lr",function(){var t=G.bu("LightBlinnPhongF")
t.aC(["vPosition","vNormal","vTexUV"])
t.a2(["uLightDescs","uLightTypes","uShininess"])
t.a2(["uEyePosition","uTexture"])
t.bI(["ColorComponents acc = CombinedLight(vPosition,\n                                    vNormal,\n                                    uEyePosition,\n                                    uLightDescs,\n                                    uLightTypes,\n                                    uShininess);\n\noFragColor.rgb = acc.diffuse +\n                    acc.specular +\n                    texture(uTexture, vTexUV).rgb;\noFragColor.a = 1.0;\n"],["// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"])
return t})
lazy($,"lC","$get$lC",function(){var t=G.bu("SolidColor")
t.aU(["aPosition"])
t.a2(["uPerspectiveViewMatrix","uModelMatrix"])
t.aZ(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"])
return t})
lazy($,"lB","$get$lB",function(){var t=G.bu("SolidColorF")
t.a2(["uColor"])
t.aZ(["oFragColor = vec4( uColor, 1.0 );"])
return t})
lazy($,"l2","$get$l2",function(){return[T.z(0,0,1),T.z(0,0,-1),T.z(0,1,0),T.z(0,-1,0),T.z(1,0,0),T.z(-1,0,0)]})
lazy($,"ky","$get$ky",function(){return[G.G(0,11,5),G.G(0,5,1),G.G(0,1,7),G.G(0,7,10),G.G(0,10,11),G.G(1,5,9),G.G(5,11,4),G.G(11,10,2),G.G(10,7,6),G.G(7,1,8),G.G(3,9,4),G.G(3,4,2),G.G(3,2,6),G.G(3,6,8),G.G(3,8,9),G.G(4,9,5),G.G(2,4,11),G.G(6,2,10),G.G(8,6,7),G.G(9,8,1)]})
lazy($,"lF","$get$lF",function(){return(1+P.o5(5))/2})
lazy($,"ji","$get$ji",function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=$.$get$lF()
s=T.z(-1,t,0)
s.E(0)
r=T.z(1,t,0)
r.E(0)
q=T.z(-1,-t,0)
q.E(0)
p=T.z(1,-t,0)
p.E(0)
o=T.z(0,-1,t)
o.E(0)
n=T.z(0,1,t)
n.E(0)
m=T.z(0,-1,-t)
m.E(0)
l=T.z(0,1,-t)
l.E(0)
k=T.z(t,0,-1)
k.E(0)
j=T.z(t,0,1)
j.E(0)
i=T.z(-t,0,-1)
i.E(0)
t=T.z(-t,0,1)
t.E(0)
return[s,r,q,p,o,n,m,l,k,j,i,t]})
lazy($,"ly","$get$ly",function(){return T.z(11,20,0)})
lazy($,"lj","$get$lj",function(){return T.z(0,-50,0)})
lazy($,"lD","$get$lD",function(){return T.z(-11,-30,0)})
lazy($,"iB","$get$iB",function(){var t,s,r,q,p,o
t=$.$get$lj()
s=$.$get$kf()
r=$.$get$km()
q=T.fe()
p=T.fe()
o=$.$get$ly()
return P.ap(["idDirectional",new G.c4(t,s,r,40,q,p,1,"dir",!1,!0),"idPoint",new G.cD(o,$.$get$kj(),r,50,3,"point",!1,!0),"idSpot",new G.cL(o,$.$get$lD(),$.$get$kk(),r,50,0.4487989505128276,2,1,1,40,T.fe(),T.fe(),2,"spot",!1,!0)])})})()
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
mangledGlobalNames:{w:"int",Y:"double",a7:"num",o:"String",aj:"bool",N:"Null",j:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.q},{func:1,ret:P.aj,args:[W.a1,P.o,P.o,W.bC]},{func:1,v:true,args:[P.F],opt:[P.b0]},{func:1,ret:P.w,args:[P.H,P.H]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,Blob:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSCharsetRule:J.a,CSSConditionRule:J.a,CSSFontFaceRule:J.a,CSSGroupingRule:J.a,CSSImportRule:J.a,CSSKeyframeRule:J.a,MozCSSKeyframeRule:J.a,WebKitCSSKeyframeRule:J.a,CSSKeyframesRule:J.a,MozCSSKeyframesRule:J.a,WebKitCSSKeyframesRule:J.a,CSSMediaRule:J.a,CSSNamespaceRule:J.a,CSSPageRule:J.a,CSSRule:J.a,CSSStyleRule:J.a,CSSStyleSheet:J.a,CSSSupportsRule:J.a,CSSVariableReferenceValue:J.a,CSSViewportRule:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMParser:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,File:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,Gamepad:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MimeType:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechGrammar:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,StyleSheet:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,Touch:J.a,TrackDefault:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGLength:J.a,SVGNumber:J.a,SVGPreserveAspectRatio:J.a,SVGTransform:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioParamMap:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bp,ArrayBufferView:H.aY,DataView:H.fj,Float32Array:H.cu,Float64Array:H.fk,Int16Array:H.fl,Int32Array:H.fm,Int8Array:H.fn,Uint16Array:H.fo,Uint32Array:H.fp,Uint8ClampedArray:H.cy,CanvasPixelArray:H.cy,Uint8Array:H.fq,HTMLAudioElement:W.k,HTMLBRElement:W.k,HTMLBaseElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLImageElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMediaElement:W.k,HTMLMenuElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTextAreaElement:W.k,HTMLTimeElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLVideoElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLFrameSetElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,Accelerometer:W.bZ,LinearAccelerationSensor:W.bZ,AccessibleNodeList:W.dR,HTMLAnchorElement:W.dS,HTMLAreaElement:W.dT,HTMLBodyElement:W.au,HTMLCanvasElement:W.c0,CanvasRenderingContext2D:W.c1,CDATASection:W.aw,CharacterData:W.aw,Comment:W.aw,ProcessingInstruction:W.aw,Text:W.aw,CSSPerspective:W.e0,CSSPositionValue:W.e1,CSSRotation:W.e2,CSSScale:W.e3,CSSStyleDeclaration:W.aQ,MSStyleCSSProperties:W.aQ,CSS2Properties:W.aQ,CSSImageValue:W.a0,CSSKeywordValue:W.a0,CSSNumericValue:W.a0,CSSResourceValue:W.a0,CSSUnitValue:W.a0,CSSURLImageValue:W.a0,CSSStyleValue:W.a0,CSSMatrixComponent:W.aR,CSSSkew:W.aR,CSSTransformComponent:W.aR,CSSTransformValue:W.e5,CSSTranslation:W.e6,CSSUnparsedValue:W.e7,DataTransferItemList:W.e9,DeviceAcceleration:W.ea,HTMLDivElement:W.c5,XMLDocument:W.bg,Document:W.bg,DOMException:W.eb,DOMImplementation:W.c6,DOMMatrix:W.ec,DOMMatrixReadOnly:W.c7,DOMPoint:W.ed,DOMPointReadOnly:W.c8,ClientRectList:W.c9,DOMRectList:W.c9,DOMRectReadOnly:W.ca,DOMStringList:W.ee,DOMTokenList:W.ef,Element:W.a1,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,AccessibleNode:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MessagePort:W.e,MIDIAccess:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RemotePlayback:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SourceBuffer:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,TextTrack:W.e,TextTrackCue:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,VTTCue:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,ServiceWorker:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,FileList:W.eD,FileWriter:W.eE,HTMLFormElement:W.eI,Gyroscope:W.eM,HTMLHeadElement:W.ci,History:W.eN,HTMLCollection:W.bj,HTMLFormControlsCollection:W.bj,HTMLOptionsCollection:W.bj,HTMLDocument:W.cj,XMLHttpRequest:W.eO,XMLHttpRequestUpload:W.bk,XMLHttpRequestEventTarget:W.bk,HTMLInputElement:W.bl,KeyboardEvent:W.aC,Location:W.f6,Magnetometer:W.f7,MediaList:W.ff,MIDIOutput:W.fg,MIDIInput:W.bo,MIDIPort:W.bo,MimeTypeArray:W.fh,PointerEvent:W.M,MouseEvent:W.M,DragEvent:W.M,DocumentFragment:W.q,ShadowRoot:W.q,Attr:W.q,DocumentType:W.q,Node:W.q,NodeIterator:W.cz,NodeList:W.bq,RadioNodeList:W.bq,Plugin:W.ac,PluginArray:W.fE,PresentationConnection:W.fH,Range:W.cE,RTCDataChannel:W.cH,DataChannel:W.cH,HTMLSelectElement:W.bt,AbsoluteOrientationSensor:W.aq,AmbientLightSensor:W.aq,OrientationSensor:W.aq,RelativeOrientationSensor:W.aq,Sensor:W.aq,SourceBufferList:W.fV,SpeechGrammarList:W.fX,SpeechRecognitionResult:W.ad,Storage:W.h1,HTMLTableElement:W.cO,HTMLTableRowElement:W.h9,HTMLTableSectionElement:W.ha,HTMLTemplateElement:W.bw,TextTrackCueList:W.hc,TextTrackList:W.hd,TimeRanges:W.hf,TouchEvent:W.aG,TouchList:W.hj,TrackDefaultList:W.hk,TreeWalker:W.cU,CompositionEvent:W.aH,FocusEvent:W.aH,TextEvent:W.aH,UIEvent:W.aH,URL:W.hs,VRStageBoundsPoint:W.hu,VideoTrackList:W.hw,WebSocket:W.hx,WheelEvent:W.aJ,Window:W.bA,DOMWindow:W.bA,CSSRuleList:W.hI,DOMRect:W.hK,GamepadList:W.i_,NamedNodeMap:W.dd,MozNamedAttrMap:W.dd,SpeechRecognitionResultList:W.ii,StyleSheetList:W.ij,IDBVersionChangeEvent:P.hv,SVGFEBlendElement:P.el,SVGFEColorMatrixElement:P.em,SVGFEComponentTransferElement:P.en,SVGFECompositeElement:P.eo,SVGFEConvolveMatrixElement:P.ep,SVGFEDiffuseLightingElement:P.eq,SVGFEDisplacementMapElement:P.er,SVGFEFloodElement:P.es,SVGFEGaussianBlurElement:P.et,SVGFEImageElement:P.eu,SVGFEMergeElement:P.ev,SVGFEMorphologyElement:P.ew,SVGFEOffsetElement:P.ex,SVGFEPointLightElement:P.ey,SVGFESpecularLightingElement:P.ez,SVGFESpotLightElement:P.eA,SVGFETileElement:P.eB,SVGFETurbulenceElement:P.eC,SVGFilterElement:P.eF,SVGForeignObjectElement:P.eH,SVGCircleElement:P.a2,SVGEllipseElement:P.a2,SVGLineElement:P.a2,SVGPathElement:P.a2,SVGPolygonElement:P.a2,SVGPolylineElement:P.a2,SVGGeometryElement:P.a2,SVGAElement:P.a9,SVGClipPathElement:P.a9,SVGDefsElement:P.a9,SVGGElement:P.a9,SVGSwitchElement:P.a9,SVGGraphicsElement:P.a9,SVGImageElement:P.eQ,SVGLengthList:P.f0,SVGMaskElement:P.fb,SVGMatrix:P.fd,SVGNumberList:P.fu,SVGPatternElement:P.fB,SVGPoint:P.fF,SVGPointList:P.fG,SVGRect:P.fK,SVGRectElement:P.fL,SVGScriptElement:P.bs,SVGStringList:P.h7,SVGAnimateElement:P.x,SVGAnimateMotionElement:P.x,SVGAnimateTransformElement:P.x,SVGAnimationElement:P.x,SVGDescElement:P.x,SVGDiscardElement:P.x,SVGFEDistantLightElement:P.x,SVGFEFuncAElement:P.x,SVGFEFuncBElement:P.x,SVGFEFuncGElement:P.x,SVGFEFuncRElement:P.x,SVGFEMergeNodeElement:P.x,SVGLinearGradientElement:P.x,SVGMarkerElement:P.x,SVGMetadataElement:P.x,SVGRadialGradientElement:P.x,SVGSetElement:P.x,SVGStopElement:P.x,SVGStyleElement:P.x,SVGSymbolElement:P.x,SVGTitleElement:P.x,SVGViewElement:P.x,SVGGradientElement:P.x,SVGComponentTransferFunctionElement:P.x,SVGFEDropShadowElement:P.x,SVGMPathElement:P.x,SVGElement:P.x,SVGSVGElement:P.h8,SVGTextPathElement:P.bx,SVGTextContentElement:P.bx,SVGTSpanElement:P.by,SVGTextElement:P.by,SVGTextPositioningElement:P.by,SVGTransformList:P.hl,SVGUseElement:P.ht,AudioBuffer:P.dV,AudioTrackList:P.dW,AudioContext:P.aP,webkitAudioContext:P.aP,BaseAudioContext:P.aP,OfflineAudioContext:P.fv,WebGLRenderingContext:P.fP,WebGL2RenderingContext:P.fQ,SQLResultSetRowList:P.fY})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,Blob:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSStyleSheet:true,CSSSupportsRule:true,CSSVariableReferenceValue:true,CSSViewportRule:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMParser:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,File:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,Gamepad:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechGrammar:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,StyleSheet:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,Touch:true,TrackDefault:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGLength:true,SVGNumber:true,SVGPreserveAspectRatio:true,SVGTransform:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioParamMap:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,Accelerometer:true,LinearAccelerationSensor:true,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSPositionValue:true,CSSRotation:true,CSSScale:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSSkew:true,CSSTransformComponent:false,CSSTransformValue:true,CSSTranslation:true,CSSUnparsedValue:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMMatrix:true,DOMMatrixReadOnly:false,DOMPoint:true,DOMPointReadOnly:false,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AccessibleNode:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnectionList:true,PresentationRequest:true,RemotePlayback:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SourceBuffer:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,TextTrack:true,TextTrackCue:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,VTTCue:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,ServiceWorker:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,FileList:true,FileWriter:true,HTMLFormElement:true,Gyroscope:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLInputElement:true,KeyboardEvent:true,Location:true,Magnetometer:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,PresentationConnection:true,Range:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,AbsoluteOrientationSensor:true,AmbientLightSensor:true,OrientationSensor:true,RelativeOrientationSensor:true,Sensor:false,SourceBufferList:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VRStageBoundsPoint:true,VideoTrackList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,IDBVersionChangeEvent:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGAElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLengthList:true,SVGMaskElement:true,SVGMatrix:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMetadataElement:true,SVGRadialGradientElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSymbolElement:true,SVGTitleElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGSVGElement:true,SVGTextPathElement:true,SVGTextContentElement:false,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransformList:true,SVGUseElement:true,AudioBuffer:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cv.$nativeSuperclassTag="ArrayBufferView"
H.bF.$nativeSuperclassTag="ArrayBufferView"
H.bG.$nativeSuperclassTag="ArrayBufferView"
H.cw.$nativeSuperclassTag="ArrayBufferView"
H.bH.$nativeSuperclassTag="ArrayBufferView"
H.bI.$nativeSuperclassTag="ArrayBufferView"
H.cx.$nativeSuperclassTag="ArrayBufferView"
W.bK.$nativeSuperclassTag="EventTarget"
W.bL.$nativeSuperclassTag="EventTarget"
W.bM.$nativeSuperclassTag="EventTarget"
W.bN.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.lE(K.lv(),b)},[])
else (function(b){H.lE(K.lv(),b)})([])})})()