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
a[c]=function(){a[c]=function(){H.nd(b)}
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
return d?function(e){if(t===null)t=H.jj(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.jj(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.jj(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={iT:function iT(a){this.a=a},
j_:function(a,b,c,d){if(!!a.$isk)return new H.dZ(a,b,[c,d])
return new H.cc(a,b,[c,d])},
eB:function(){return new P.aZ("No element")},
m7:function(){return new P.aZ("Too many elements")},
m6:function(){return new P.aZ("Too few elements")},
mm:function(a,b){H.cs(a,0,J.b9(a)-1,b)},
cs:function(a,b,c,d){if(c-b<=32)H.ml(a,b,c,d)
else H.mk(a,b,c,d)},
ml:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.T(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.a5(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
mk:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.b(t>32)
s=C.b.L(t+1,6)
r=a3+s
q=a4-s
p=C.b.L(a3+a4,2)
o=p-s
n=p+s
t=J.T(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.a5(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.a5(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.a5(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.a5(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.a5(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.a5(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.a5(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.a5(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.a5(a5.$2(j,i),0)){h=i
i=j
j=h}t.i(a2,r,m)
t.i(a2,p,k)
t.i(a2,q,i)
t.i(a2,o,t.h(a2,a3))
t.i(a2,n,t.h(a2,a4))
g=a3+1
f=a4-1
if(J.C(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=t.h(a2,e)
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
H.cs(a2,a3,g-2,a5)
H.cs(a2,f+2,a4,a5)
if(a0)return
if(g<r&&f>q){for(;J.C(a5.$2(t.h(a2,g),l),0);)++g
for(;J.C(a5.$2(t.h(a2,f),j),0);)--f
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
break}}H.cs(a2,g,f,a5)}else H.cs(a2,g,f,a5)},
k:function k(){},
aU:function aU(){},
ca:function ca(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cc:function cc(a,b,c){this.a=a
this.b=b
this.$ti=c},
dZ:function dZ(a,b,c){this.a=a
this.b=b
this.$ti=c},
eO:function eO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bi:function bi(a,b,c){this.a=a
this.b=b
this.$ti=c},
cF:function cF(a,b,c){this.a=a
this.b=b
this.$ti=c},
h8:function h8(a,b,c){this.a=a
this.b=b
this.$ti=c},
aS:function aS(){},
dr:function(a,b){var t=a.ai(b)
if(!u.globalState.d.cy)u.globalState.f.ap()
return t},
i8:function(){++u.globalState.f.b},
io:function(){--u.globalState.f.b
H.b(u.globalState.f.b>=0)},
l0:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.v(s).$isi)throw H.c(P.jG("Arguments to main must be a List: "+H.e(s)))
u.globalState=new H.hI(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$k3()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.hl(P.iZ(null,H.aK),0)
q=P.y
s.ses(new H.a7(0,null,null,null,null,null,0,[q,H.b_]))
s.sew(new H.a7(0,null,null,null,null,null,0,[q,null]))
if(s.x){r=new H.hH()
s.Q=r
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.m1,r)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.mA)}if(u.globalState.x)return
o=H.kC()
u.globalState.e=o
u.globalState.z.i(0,o.a,o)
u.globalState.d=o
if(H.b5(a,{func:1,args:[P.K]}))o.ai(new H.iz(t,a))
else if(H.b5(a,{func:1,args:[P.K,P.K]}))o.ai(new H.iA(t,a))
else o.ai(a)
u.globalState.f.ap()},
mA:function(a){var t=P.aA(["command","print","msg",a])
return new H.a1(!0,P.b0(null,P.y)).M(t)},
kC:function(){var t,s
t=u.globalState.a++
s=P.y
t=new H.b_(t,new H.a7(0,null,null,null,null,null,0,[s,H.cp]),P.aB(null,null,null,s),u.createNewIsolate(),new H.cp(0,null,!1),new H.as(H.kY()),new H.as(H.kY()),!1,!1,[],P.aB(null,null,null,null),null,null,!1,!0,P.aB(null,null,null,null))
t.dj()
return t},
m3:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.m4()
return},
m4:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.c(P.u("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.c(P.u('Cannot extract URI from "'+t+'"'))},
m1:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=new H.aJ(!0,[]).Y(b.data)
s=J.T(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.n0(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.aJ(!0,[]).Y(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.aJ(!0,[]).Y(s.h(t,"replyTo"))
k=H.kC()
u.globalState.f.a.V(0,new H.aK(k,new H.ey(q,p,o,n,m,l),"worker-start"))
u.globalState.d=k
u.globalState.f.ap()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.lx(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.ap()
break
case"close":u.globalState.ch.ao(0,$.$get$k4().h(0,a))
a.terminate()
u.globalState.f.ap()
break
case"log":H.m0(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
j=P.aA(["command","print","msg",t])
j=new H.a1(!0,P.b0(null,P.y)).M(j)
s.toString
self.postMessage(j)}else P.a4(s.h(t,"msg"))
break
case"error":throw H.c(s.h(t,"msg"))}},
m0:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aA(["command","log","msg",a])
r=new H.a1(!0,P.b0(null,P.y)).M(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.L(q)
t=H.ao(q)
s=P.c_(t)
throw H.c(s)}},
m2:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.kc=$.kc+("_"+s)
$.kd=$.kd+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.K(0,["spawned",new H.b1(s,r),q,t.r])
r=new H.ez(t,d,a,c,b)
if(e){t.bI(q,q)
u.globalState.f.a.V(0,new H.aK(t,r,"start isolate"))}else r.$0()},
mo:function(a,b){var t=new H.fS(!0,!1,null,0)
t.dc(a,b)
return t},
mB:function(a){return new H.aJ(!0,[]).Y(new H.a1(!1,P.b0(null,P.y)).M(a))},
iz:function iz(a,b){this.a=a
this.b=b},
iA:function iA(a,b){this.a=a
this.b=b},
hI:function hI(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
b_:function b_(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
hC:function hC(a,b){this.a=a
this.b=b},
hl:function hl(a,b){this.a=a
this.b=b},
hm:function hm(a){this.a=a},
aK:function aK(a,b,c){this.a=a
this.b=b
this.c=c},
hH:function hH(){},
ey:function ey(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ez:function ez(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hg:function hg(){},
b1:function b1(a,b){this.b=a
this.a=b},
hJ:function hJ(a,b){this.a=a
this.b=b},
bG:function bG(a,b,c){this.b=a
this.c=b
this.a=c},
cp:function cp(a,b,c){this.a=a
this.b=b
this.c=c},
fS:function fS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fT:function fT(a,b){this.a=a
this.b=b},
fU:function fU(a,b){this.a=a
this.b=b},
as:function as(a){this.a=a},
a1:function a1(a,b){this.a=a
this.b=b},
aJ:function aJ(a,b){this.a=a
this.b=b},
mV:function(a){return u.types[a]},
n2:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.v(a).$ist},
e:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.ba(a)
if(typeof t!=="string")throw H.c(H.O(a))
return t},
mh:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t=J.ai(t)
s=t[0]
r=t[1]
return new H.fn(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aD:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
bm:function(a){var t,s,r,q,p,o,n,m,l
t=J.v(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.K||!!J.v(a).$isaH){p=C.y(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.i.aK(q,0)===36)q=C.i.cP(q,1)
l=H.dt(H.ia(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+l,u.mangledGlobalNames)},
M:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mf:function(a){return a.b?H.M(a).getUTCFullYear()+0:H.M(a).getFullYear()+0},
md:function(a){return a.b?H.M(a).getUTCMonth()+1:H.M(a).getMonth()+1},
m9:function(a){return a.b?H.M(a).getUTCDate()+0:H.M(a).getDate()+0},
ma:function(a){return a.b?H.M(a).getUTCHours()+0:H.M(a).getHours()+0},
mc:function(a){return a.b?H.M(a).getUTCMinutes()+0:H.M(a).getMinutes()+0},
me:function(a){return a.b?H.M(a).getUTCSeconds()+0:H.M(a).getSeconds()+0},
mb:function(a){return a.b?H.M(a).getUTCMilliseconds()+0:H.M(a).getMilliseconds()+0},
kb:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.c(H.O(a))
return a[b]},
b4:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.W(!0,b,"index",null)
t=J.b9(a)
if(b<0||C.b.b4(b,t))return P.A(b,a,"index",null,t)
return P.fk(b,"index",null)},
O:function(a){return new P.W(!0,a,null,null)},
c:function(a){var t
if(a==null)a=new P.cm()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.l1})
t.name=""}else t.toString=H.l1
return t},
l1:function(){return J.ba(this.dartException)},
H:function(a){throw H.c(a)},
I:function(a){throw H.c(P.ag(a))},
aa:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.fY(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
fZ:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
ko:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
ka:function(a,b){return new H.f5(a,b==null?null:b.method)},
iV:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.eF(a,s,t?null:b.receiver)},
L:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.iB(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aW(r,16)&8191)===10)switch(q){case 438:return t.$1(H.iV(H.e(s)+" (Error "+q+")",null))
case 445:case 5007:return t.$1(H.ka(H.e(s)+" (Error "+q+")",null))}}if(a instanceof TypeError){p=$.$get$ki()
o=$.$get$kj()
n=$.$get$kk()
m=$.$get$kl()
l=$.$get$kp()
k=$.$get$kq()
j=$.$get$kn()
$.$get$km()
i=$.$get$ks()
h=$.$get$kr()
g=p.P(s)
if(g!=null)return t.$1(H.iV(s,g))
else{g=o.P(s)
if(g!=null){g.method="call"
return t.$1(H.iV(s,g))}else{g=n.P(s)
if(g==null){g=m.P(s)
if(g==null){g=l.P(s)
if(g==null){g=k.P(s)
if(g==null){g=j.P(s)
if(g==null){g=m.P(s)
if(g==null){g=i.P(s)
if(g==null){g=h.P(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return t.$1(H.ka(s,g))}}return t.$1(new H.h1(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.cv()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.W(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.cv()
return a},
ao:function(a){var t
if(a==null)return new H.d5(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.d5(a,null)},
n6:function(a){if(a==null||typeof a!='object')return J.b8(a)
else return H.aD(a)},
mT:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=a.length
for(r=0;r<s;){q=r+1
H.b(t)
p=a[r]
r=q+1
H.b(t)
b.i(0,p,a[q])}return b},
n1:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dr(b,new H.ii(a))
case 1:return H.dr(b,new H.ij(a,d))
case 2:return H.dr(b,new H.ik(a,d,e))
case 3:return H.dr(b,new H.il(a,d,e,f))
case 4:return H.dr(b,new H.im(a,d,e,f,g))}throw H.c(P.c_("Unsupported number of arguments for wrapped closure"))},
bK:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.n1)
a.$identity=t
return t},
lN:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.v(c).$isi){t.$reflectionInfo=c
r=H.mh(t).r}else r=c
q=d?Object.create(new H.fB().constructor.prototype):Object.create(new H.bb(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.jN(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.mV,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.jK:H.iN
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.c("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.jN(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
lK:function(a,b,c,d){var t=H.iN
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
jN:function(a,b,c){var t,s,r,q
if(c)return H.lM(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.lK(s,b==null?r!=null:b!==r,t,b)
return q},
lL:function(a,b,c,d){var t,s
t=H.iN
s=H.jK
switch(b?-1:a){case 0:throw H.c(H.mj("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
lM:function(a,b){var t,s,r,q
t=$.jL
if(t==null){t=H.jI("self")
$.jL=t}t=$.jJ
if(t==null){t=H.jI("receiver")
$.jJ=t}s=b.$stubName
r=b.length
q=a[s]
t=H.lL(r,b==null?q!=null:b!==q,s,b)
return t},
jj:function(a,b,c,d,e,f){var t,s
t=J.ai(b)
s=!!J.v(c).$isi?J.ai(c):c
return H.lN(a,t,s,!!d,e,f)},
iN:function(a){return a.a},
jK:function(a){return a.c},
jI:function(a){var t,s,r,q,p
t=new H.bb("self","target","receiver","name")
s=J.ai(Object.getOwnPropertyNames(t))
for(r=s.length,q=0;q<r;++q){p=s[q]
if(t[p]===a)return p}},
ns:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.ab(a,"String"))},
nn:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.ab(a,"double"))},
nr:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.ab(a,"num"))},
mN:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.ab(a,"bool"))},
n0:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.ab(a,"int"))},
n8:function(a,b){throw H.c(H.ab(a,b.substring(3)))},
n7:function(a,b){var t=J.T(b)
throw H.c(H.jM(a,t.bg(b,3,t.gj(b))))},
jn:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.v(a)[b])return a
H.n8(a,b)},
aq:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.v(a)[b]
else t=!0
if(t)return a
H.n7(a,b)},
nq:function(a){if(a==null)return a
if(!!J.v(a).$isi)return a
throw H.c(H.ab(a,"List"))},
jk:function(a){var t=J.v(a)
return"$S" in t?t.$S():null},
b5:function(a,b){var t,s
if(a==null)return!1
t=H.jk(a)
if(t==null)s=!1
else s=H.kU(t,b)
return s},
no:function(a,b){var t,s
if(a==null)return a
if($.jg)return a
$.jg=!0
try{if(H.b5(a,b))return a
t=H.it(b,null)
s=H.ab(a,t)
throw H.c(s)}finally{$.jg=!1}},
ab:function(a,b){return new H.h_("TypeError: "+H.e(P.bZ(a))+": type '"+H.kI(a)+"' is not a subtype of type '"+b+"'")},
jM:function(a,b){return new H.dF("CastError: "+H.e(P.bZ(a))+": type '"+H.kI(a)+"' is not a subtype of type '"+b+"'")},
kI:function(a){var t
if(a instanceof H.au){t=H.jk(a)
if(t!=null)return H.it(t,null)
return"Closure"}return H.bm(a)},
ae:function(a){if(!0===a)return!1
if(!!J.v(a).$isiR)a=a.$0()
if(typeof a==="boolean")return!a
throw H.c(H.ab(a,"bool"))},
an:function(a){throw H.c(new H.ha(a))},
b:function(a){if(H.ae(a))throw H.c(P.lJ(null))},
nd:function(a){throw H.c(new P.dQ(a))},
mj:function(a){return new H.fs(a)},
kY:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
kS:function(a){return u.getIsolateTag(a)},
G:function(a){return new H.ak(a,null)},
z:function(a,b){H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
ia:function(a){if(a==null)return
return a.$ti},
kT:function(a,b){return H.jr(a["$as"+H.e(b)],H.ia(a))},
a2:function(a,b,c){var t,s
t=H.kT(a,b)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
ap:function(a,b){var t,s
t=H.ia(a)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
it:function(a,b){var t=H.b6(a,b)
return t},
b6:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.b(!0)
H.b(!0)
return a[0].name+H.dt(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.e(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.b6(t,b)
return H.mC(a,b)}return"unknown-reified-type"},
mC:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.b6(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.b6(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.b6(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.mS(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.b6(l[j],b)+(" "+H.e(j))}q+="}"}return"("+q+") => "+t},
dt:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=new P.bo("")
for(r=b,q=!0,p=!0;H.b(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.b(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.b6(o,c)}return p?"":"<"+s.k(0)+">"},
ib:function(a){var t,s,r
if(a instanceof H.au){t=H.jk(a)
if(t!=null)return H.it(t,null)}s=J.v(a).constructor.name
if(a==null)return s
r=H.dt(a.$ti,0,null)
return s+r},
jr:function(a,b){if(a==null)return b
H.b(typeof a=="function")
H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.jo(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.jo(a,null,b)
return b},
i3:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.ia(a)
s=J.v(a)
if(s[b]==null)return!1
return H.kM(H.jr(s[d],t),c)},
du:function(a,b,c,d){var t,s
if(a==null)return a
t=H.i3(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.dt(c,0,null)
throw H.c(H.jM(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
nk:function(a,b,c,d){var t,s
if(a==null)return a
t=H.i3(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.dt(c,0,null)
throw H.c(H.ab(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
kM:function(a,b){var t,s,r,q,p
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
if(!H.U(r,b[p]))return!1}return!0},
nl:function(a,b,c){return H.jo(a,b,H.kT(b,c))},
U:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.name==="K")return!0
if('func' in b)return H.kU(a,b)
if('func' in a)return b.name==="iR"||b.name==="D"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.b(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.b(!0)
q=b[0]}else q=b
if(q!==s){p=H.it(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.kM(H.jr(o,t),r)},
kL:function(a,b,c){var t,s,r,q,p,o,n
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
if(!(H.U(o,n)||H.U(n,o)))return!1}return!0},
mJ:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
H.b(typeof a=='object')
H.b(typeof b=='object')
t=J.ai(Object.getOwnPropertyNames(b))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.U(p,o)||H.U(o,p)))return!1}return!0},
kU:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.b('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.U(t,s)||H.U(s,t)))return!1}r=a.args
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
if(n===m){if(!H.kL(r,q,!1))return!1
if(!H.kL(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.b(j)
g=r[h]
H.b(i)
f=q[h]
if(!(H.U(g,f)||H.U(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=q[e]
if(!(H.U(g,f)||H.U(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=o[e]
if(!(H.U(g,f)||H.U(f,g)))return!1}}return H.mJ(a.named,b.named)},
jo:function(a,b,c){H.b(typeof a=="function")
H.b(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
nt:function(a){var t=$.jl
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
np:function(a){return H.aD(a)},
nm:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
n3:function(a){var t,s,r,q,p,o
H.b(!(a instanceof P.D))
t=$.jl.$1(a)
s=$.i7[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.ih[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.kK.$2(a,t)
if(t!=null){s=$.i7[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.ih[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.ir(r)
$.i7[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.ih[t]=r
return r}if(p==="-"){o=H.ir(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.kW(a,r)
if(p==="*")throw H.c(P.kw(t))
if(u.leafTags[t]===true){o=H.ir(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.kW(a,r)},
kW:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.jp(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
ir:function(a){return J.jp(a,!1,null,!!a.$ist)},
n5:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return H.ir(t)
else return J.jp(t,c,null,null)},
mZ:function(){if(!0===$.jm)return
$.jm=!0
H.n_()},
n_:function(){var t,s,r,q,p,o,n,m
$.i7=Object.create(null)
$.ih=Object.create(null)
H.mY()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.kX.$1(p)
if(o!=null){n=H.n5(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
mY:function(){var t,s,r,q,p,o,n
t=C.O()
t=H.b3(C.L,H.b3(C.Q,H.b3(C.x,H.b3(C.x,H.b3(C.P,H.b3(C.M,H.b3(C.N(C.y),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.jl=new H.id(p)
$.kK=new H.ie(o)
$.kX=new H.ig(n)},
b3:function(a,b){return a(b)||b},
nc:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
fn:function fn(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fY:function fY(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
f5:function f5(a,b){this.a=a
this.b=b},
eF:function eF(a,b,c){this.a=a
this.b=b
this.c=c},
h1:function h1(a){this.a=a},
iB:function iB(a){this.a=a},
d5:function d5(a,b){this.a=a
this.b=b},
ii:function ii(a){this.a=a},
ij:function ij(a,b){this.a=a
this.b=b},
ik:function ik(a,b,c){this.a=a
this.b=b
this.c=c},
il:function il(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
im:function im(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
au:function au(){},
fO:function fO(){},
fB:function fB(){},
bb:function bb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h_:function h_(a){this.a=a},
dF:function dF(a){this.a=a},
fs:function fs(a){this.a=a},
ha:function ha(a){this.a=a},
ak:function ak(a,b){this.a=a
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
eE:function eE(a){this.a=a},
eH:function eH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eI:function eI(a,b){this.a=a
this.$ti=b},
eJ:function eJ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
id:function id(a){this.a=a},
ie:function ie(a){this.a=a},
ig:function ig(a){this.a=a},
i_:function(a){var t,s,r
if(!!J.v(a).$isq)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
ad:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.b4(b,a))},
bk:function bk(){},
aX:function aX(){},
eW:function eW(){},
cf:function cf(){},
cg:function cg(){},
ch:function ch(){},
ce:function ce(){},
eX:function eX(){},
eY:function eY(){},
eZ:function eZ(){},
f_:function f_(){},
f0:function f0(){},
f1:function f1(){},
ci:function ci(){},
f2:function f2(){},
bx:function bx(){},
by:function by(){},
bz:function bz(){},
bA:function bA(){},
mS:function(a){return J.ai(H.z(a?Object.keys(a):[],[null]))},
is:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
v:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.c8.prototype
return J.c7.prototype}if(typeof a=="string")return J.ax.prototype
if(a==null)return J.eD.prototype
if(typeof a=="boolean")return J.eC.prototype
if(a.constructor==Array)return J.aw.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ay.prototype
return a}if(a instanceof P.D)return a
return J.i9(a)},
jp:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
i9:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.jm==null){H.mZ()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.c(P.kw("Return interceptor for "+H.e(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$iU()]
if(p!=null)return p
p=H.n3(a)
if(p!=null)return p
if(typeof a=="function")return C.R
s=Object.getPrototypeOf(a)
if(s==null)return C.A
if(s===Object.prototype)return C.A
if(typeof q=="function"){Object.defineProperty(q,$.$get$iU(),{value:C.t,enumerable:false,writable:true,configurable:true})
return C.t}return C.t},
ai:function(a){a.fixed$length=Array
return a},
T:function(a){if(typeof a=="string")return J.ax.prototype
if(a==null)return a
if(a.constructor==Array)return J.aw.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ay.prototype
return a}if(a instanceof P.D)return a
return J.i9(a)},
bM:function(a){if(a==null)return a
if(a.constructor==Array)return J.aw.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ay.prototype
return a}if(a instanceof P.D)return a
return J.i9(a)},
kQ:function(a){if(typeof a=="number")return J.aT.prototype
if(a==null)return a
if(!(a instanceof P.D))return J.aH.prototype
return a},
mU:function(a){if(typeof a=="number")return J.aT.prototype
if(typeof a=="string")return J.ax.prototype
if(a==null)return a
if(!(a instanceof P.D))return J.aH.prototype
return a},
kR:function(a){if(typeof a=="string")return J.ax.prototype
if(a==null)return a
if(!(a instanceof P.D))return J.aH.prototype
return a},
l:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ay.prototype
return a}if(a instanceof P.D)return a
return J.i9(a)},
C:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.v(a).A(a,b)},
a5:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.kQ(a).U(a,b)},
l3:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kQ(a).a_(a,b)},
b7:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.n2(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.T(a).h(a,b)},
l4:function(a,b,c,d){return J.l(a).dn(a,b,c,d)},
js:function(a,b){return J.kR(a).aK(a,b)},
iC:function(a,b){return J.l(a).dH(a,b)},
l5:function(a,b,c){return J.l(a).dI(a,b,c)},
jt:function(a,b){return J.l(a).bH(a,b)},
iD:function(a,b){return J.l(a).R(a,b)},
ju:function(a,b,c){return J.l(a).bK(a,b,c)},
l6:function(a,b){return J.l(a).dW(a,b)},
iE:function(a,b,c){return J.l(a).bL(a,b,c)},
l7:function(a,b,c){return J.l(a).bM(a,b,c)},
jv:function(a,b,c){return J.l(a).bN(a,b,c)},
dv:function(a,b){return J.l(a).dZ(a,b)},
l8:function(a,b){return J.l(a).bO(a,b)},
l9:function(a,b,c){return J.l(a).bP(a,b,c)},
jw:function(a,b,c,d){return J.l(a).bQ(a,b,c,d)},
la:function(a,b){return J.bM(a).bR(a,b)},
lb:function(a,b,c,d,e){return J.l(a).bS(a,b,c,d,e)},
lc:function(a,b){return J.mU(a).S(a,b)},
iF:function(a,b,c){return J.T(a).e2(a,b,c)},
iG:function(a){return J.l(a).bU(a)},
ld:function(a){return J.l(a).bV(a)},
le:function(a){return J.l(a).e8(a)},
lf:function(a,b){return J.l(a).bY(a,b)},
iH:function(a,b){return J.l(a).bZ(a,b)},
lg:function(a,b,c,d){return J.l(a).c_(a,b,c,d)},
lh:function(a,b,c,d,e){return J.l(a).ef(a,b,c,d,e)},
li:function(a,b,c,d,e){return J.l(a).c0(a,b,c,d,e)},
lj:function(a,b,c,d,e,f){return J.l(a).eg(a,b,c,d,e,f)},
lk:function(a,b){return J.bM(a).v(a,b)},
dw:function(a,b){return J.l(a).c1(a,b)},
ll:function(a,b){return J.l(a).c2(a,b)},
lm:function(a){return J.l(a).eh(a)},
jx:function(a,b){return J.bM(a).aj(a,b)},
ln:function(a){return J.l(a).gdV(a)},
b8:function(a){return J.v(a).gw(a)},
aM:function(a){return J.bM(a).gB(a)},
b9:function(a){return J.T(a).gj(a)},
lo:function(a){return J.l(a).gb1(a)},
lp:function(a){return J.v(a).gC(a)},
lq:function(a){return J.l(a).geG(a)},
lr:function(a){return J.l(a).gaB(a)},
iI:function(a){return J.l(a).gm(a)},
iJ:function(a){return J.l(a).gn(a)},
jy:function(a){return J.l(a).gG(a)},
iK:function(a,b){return J.l(a).aa(a,b)},
ls:function(a){return J.l(a).aD(a)},
lt:function(a,b){return J.l(a).b5(a,b)},
lu:function(a,b,c){return J.l(a).b6(a,b,c)},
jz:function(a,b,c){return J.l(a).b9(a,b,c)},
lv:function(a,b){return J.l(a).c5(a,b)},
lw:function(a,b){return J.bM(a).c7(a,b)},
jA:function(a){return J.bM(a).eA(a)},
lx:function(a,b){return J.l(a).K(a,b)},
ly:function(a,b,c,d){return J.l(a).bf(a,b,c,d)},
lz:function(a){return J.kR(a).eJ(a)},
ba:function(a){return J.v(a).k(a)},
lA:function(a,b,c,d){return J.l(a).eL(a,b,c,d)},
lB:function(a,b,c){return J.l(a).cf(a,b,c)},
lC:function(a,b,c){return J.l(a).cg(a,b,c)},
iL:function(a,b,c){return J.l(a).ci(a,b,c)},
lD:function(a,b,c){return J.l(a).cj(a,b,c)},
jB:function(a,b,c){return J.l(a).ck(a,b,c)},
jC:function(a,b,c){return J.l(a).cl(a,b,c)},
jD:function(a,b,c){return J.l(a).cm(a,b,c)},
jE:function(a,b,c,d){return J.l(a).cn(a,b,c,d)},
jF:function(a,b,c,d){return J.l(a).co(a,b,c,d)},
lE:function(a,b){return J.l(a).cq(a,b)},
lF:function(a,b,c){return J.l(a).eM(a,b,c)},
lG:function(a,b,c,d,e,f,g){return J.l(a).cs(a,b,c,d,e,f,g)},
lH:function(a,b,c,d,e){return J.l(a).cu(a,b,c,d,e)},
a:function a(){},
eC:function eC(){},
eD:function eD(){},
bh:function bh(){},
ff:function ff(){},
aH:function aH(){},
ay:function ay(){},
aw:function aw(a){this.$ti=a},
iS:function iS(a){this.$ti=a},
dA:function dA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aT:function aT(){},
c8:function c8(){},
c7:function c7(){},
ax:function ax(){}},P={
mr:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.mK()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.bK(new P.hc(t),1)).observe(s,{childList:true})
return new P.hb(t,s,r)}else if(self.setImmediate!=null)return P.mL()
return P.mM()},
ms:function(a){H.i8()
self.scheduleImmediate(H.bK(new P.hd(a),0))},
mt:function(a){H.i8()
self.setImmediate(H.bK(new P.he(a),0))},
mu:function(a){P.j6(C.v,a)},
j6:function(a,b){var t=C.b.L(a.a,1000)
return H.mo(t<0?0:t,b)},
mF:function(a,b){if(H.b5(a,{func:1,args:[P.K,P.K]})){b.toString
return a}else{b.toString
return a}},
mw:function(a,b){var t,s,r
H.b(b.a<4)
H.b(!(a instanceof P.ac))
H.b(b.a===0)
b.a=1
try{a.cd(new P.hs(b),new P.ht(b))}catch(r){t=H.L(r)
s=H.ao(r)
P.n9(new P.hu(b,t,s))}},
kz:function(a,b){var t,s,r
H.b(b.a<=1)
for(;t=a.a,s=t===2,s;){H.b(s)
a=a.c}if(t>=4){r=b.aU()
b.aJ(a)
P.bt(b,r)}else{r=b.c
H.b(b.a<=1)
b.a=2
b.c=a
a.bB(r)}},
bt:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.i0(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bt(t.a,b)}s=t.a
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
P.i0(null,null,p,o,s)
return}s=$.B
if(s==null?l!=null:s!==l){H.b(l!=null)
s=$.B
H.b(l==null?s!=null:l!==s)
j=$.B
$.B=l
i=j}else i=null
s=b.c
if(s===8)new P.hy(t,r,b,q).$0()
else if(p){if((s&1)!==0)new P.hx(r,b,m).$0()}else if((s&2)!==0)new P.hw(t,r,b).$0()
if(i!=null){H.b(!0)
$.B=i}s=r.b
if(!!J.v(s).$ises){if(s.a>=4){H.b(o.a<4)
h=o.c
o.c=null
b=o.aw(h)
H.b(o.a<4)
H.b(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.kz(s,o)
return}}g=b.b
H.b(g.a<4)
h=g.c
g.c=null
b=g.aw(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.b(!o)
g.a=4
g.c=p}else{H.b(!o)
g.a=8
g.c=p}t.a=g
s=g}},
mE:function(){var t,s
for(;t=$.b2,t!=null;){$.bI=null
s=t.b
$.b2=s
if(s==null)$.bH=null
t.a.$0()}},
mI:function(){$.jh=!0
try{P.mE()}finally{$.bI=null
$.jh=!1
if($.b2!=null)$.$get$jc().$1(P.kN())}},
kH:function(a){var t=new P.cG(a,null)
if($.b2==null){$.bH=t
$.b2=t
if(!$.jh)$.$get$jc().$1(P.kN())}else{$.bH.b=t
$.bH=t}},
mH:function(a){var t,s,r
t=$.b2
if(t==null){P.kH(a)
$.bI=$.bH
return}s=new P.cG(a,null)
r=$.bI
if(r==null){s.b=t
$.bI=s
$.b2=s}else{s.b=r.b
r.b=s
$.bI=s
if(s.b==null)$.bH=s}},
n9:function(a){var t=$.B
if(C.f===t){P.i2(null,null,C.f,a)
return}t.toString
P.i2(null,null,t,t.aZ(a))},
mp:function(a,b){var t=$.B
if(t===C.f){t.toString
return P.j6(a,b)}return P.j6(a,t.aZ(b))},
jb:function(a){var t,s
H.b(a!=null)
t=$.B
H.b(a==null?t!=null:a!==t)
s=$.B
$.B=a
return s},
i0:function(a,b,c,d,e){var t={}
t.a=d
P.mH(new P.i1(t,e))},
kF:function(a,b,c,d){var t,s
if($.B===c)return d.$0()
t=P.jb(c)
try{s=d.$0()
return s}finally{s=t
H.b(s!=null)
$.B=s}},
kG:function(a,b,c,d,e){var t,s
if($.B===c)return d.$1(e)
t=P.jb(c)
try{s=d.$1(e)
return s}finally{s=t
H.b(s!=null)
$.B=s}},
mG:function(a,b,c,d,e,f){var t,s
if($.B===c)return d.$2(e,f)
t=P.jb(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.b(s!=null)
$.B=s}},
i2:function(a,b,c,d){var t=C.f!==c
if(t)d=!(!t||!1)?c.aZ(d):c.dX(d)
P.kH(d)},
hc:function hc(a){this.a=a},
hb:function hb(a,b,c){this.a=a
this.b=b
this.c=c},
hd:function hd(a){this.a=a},
he:function he(a){this.a=a},
iO:function iO(){},
hh:function hh(){},
hV:function hV(a,b){this.a=a
this.$ti=b},
cO:function cO(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
ac:function ac(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hr:function hr(a,b){this.a=a
this.b=b},
hv:function hv(a,b){this.a=a
this.b=b},
hs:function hs(a){this.a=a},
ht:function ht(a){this.a=a},
hu:function hu(a,b,c){this.a=a
this.b=b
this.c=c},
hy:function hy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hz:function hz(a){this.a=a},
hx:function hx(a,b,c){this.a=a
this.b=b
this.c=c},
hw:function hw(a,b,c){this.a=a
this.b=b
this.c=c},
cG:function cG(a,b){this.a=a
this.b=b},
fG:function fG(){},
fI:function fI(a){this.a=a},
fJ:function fJ(a,b){this.a=a
this.b=b},
fH:function fH(){},
j5:function j5(){},
aN:function aN(a,b){this.a=a
this.b=b},
hZ:function hZ(){},
i1:function i1(a,b){this.a=a
this.b=b},
hL:function hL(){},
hN:function hN(a,b){this.a=a
this.b=b},
hM:function hM(a,b){this.a=a
this.b=b},
hO:function hO(a,b){this.a=a
this.b=b},
k6:function(a,b){return new H.a7(0,null,null,null,null,null,0,[a,b])},
Q:function(){return new H.a7(0,null,null,null,null,null,0,[null,null])},
aA:function(a){return H.mT(a,new H.a7(0,null,null,null,null,null,0,[null,null]))},
b0:function(a,b){return new P.hF(0,null,null,null,null,null,0,[a,b])},
aB:function(a,b,c,d){return new P.hD(0,null,null,null,null,null,0,[d])},
jf:function(){var t=Object.create(null)
H.b(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
m5:function(a,b,c){var t,s
if(P.ji(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$bJ()
C.a.l(s,a)
try{P.mD(a,t)}finally{H.b(C.a.gaz(s)===a)
s.pop()}s=P.kh(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eA:function(a,b,c){var t,s,r
if(P.ji(a))return b+"..."+c
t=new P.bo(b)
s=$.$get$bJ()
C.a.l(s,a)
try{r=t
r.a=P.kh(r.ga5(),a,", ")}finally{H.b(C.a.gaz(s)===a)
s.pop()}s=t
s.a=s.ga5()+c
s=t.ga5()
return s.charCodeAt(0)==0?s:s},
ji:function(a){var t,s
for(t=0;s=$.$get$bJ(),t<s.length;++t)if(a===s[t])return!0
return!1},
mD:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gB(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.t())return
q=H.e(t.gu(t))
C.a.l(b,q)
s+=q.length+2;++r}if(!t.t()){if(r<=5)return
p=b.pop()
o=b.pop()}else{n=t.gu(t);++r
if(!t.t()){if(r<=4){C.a.l(b,H.e(n))
return}p=H.e(n)
o=b.pop()
s+=p.length+2}else{m=t.gu(t);++r
H.b(r<100)
for(;t.t();n=m,m=l){l=t.gu(t);++r
if(r>100){while(!0){if(!(s>75&&r>3))break
s-=b.pop().length+2;--r}C.a.l(b,"...")
return}}o=H.e(n)
p=H.e(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)C.a.l(b,k)
C.a.l(b,o)
C.a.l(b,p)},
iY:function(a,b){var t,s
t=P.aB(null,null,null,b)
for(s=J.aM(a);s.t();)t.l(0,s.gu(s))
return t},
k8:function(a){var t,s,r
t={}
if(P.ji(a))return"{...}"
s=new P.bo("")
try{C.a.l($.$get$bJ(),a)
r=s
r.a=r.ga5()+"{"
t.a=!0
J.jx(a,new P.eN(t,s))
t=s
t.a=t.ga5()+"}"}finally{t=$.$get$bJ()
H.b(C.a.gaz(t)===a)
t.pop()}t=s.ga5()
return t.charCodeAt(0)==0?t:t},
iZ:function(a,b){var t=new P.eK(null,0,0,0,[b])
t.d5(a,b)
return t},
hF:function hF(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hD:function hD(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hE:function hE(a,b,c){this.a=a
this.b=b
this.c=c},
bv:function bv(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hB:function hB(){},
iX:function iX(){},
c9:function c9(){},
m:function m(){},
cb:function cb(){},
eN:function eN(a,b){this.a=a
this.b=b},
aW:function aW(){},
eK:function eK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hG:function hG(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fv:function fv(){},
fu:function fu(){},
bw:function bw(){},
lW:function(a){var t=J.v(a)
if(!!t.$isau)return t.k(a)
return"Instance of '"+H.bm(a)+"'"},
k7:function(a,b,c){var t,s
t=H.z([],[c])
for(s=J.aM(a);s.t();)C.a.l(t,s.gu(s))
if(b)return t
return J.ai(t)},
kh:function(a,b,c){var t=J.aM(b)
if(!t.t())return a
if(c.length===0){do a+=H.e(t.gu(t))
while(t.t())}else{a+=H.e(t.gu(t))
for(;t.t();)a=a+c+H.e(t.gu(t))}return a},
lO:function(a,b){return J.lc(a,b)},
lQ:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+t
if(t>=10)return s+"00"+t
return s+"000"+t},
lR:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bT:function(a){if(a>=10)return""+a
return"0"+a},
lT:function(a,b,c,d,e,f){return new P.av(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
bZ:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ba(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lW(a)},
lJ:function(a){return new P.bQ(a)},
jG:function(a){return new P.W(!1,null,null,a)},
iM:function(a,b,c){return new P.W(!0,a,b,c)},
lI:function(a){return new P.W(!1,null,a,"Must not be null")},
fk:function(a,b,c){return new P.co(null,null,!0,a,b,"Value not in range")},
aE:function(a,b,c,d,e){return new P.co(b,c,!0,a,d,"Invalid value")},
ke:function(a,b,c,d,e,f){if(C.b.U(0,a)||C.b.U(a,c))throw H.c(P.aE(a,0,c,"start",f))
if(b!=null){if(a>b||C.b.U(b,c))throw H.c(P.aE(b,a,c,"end",f))
return b}return c},
A:function(a,b,c,d,e){var t=e!=null?e:J.b9(b)
return new P.ex(b,t,!0,a,c,"Index out of range")},
u:function(a){return new P.h2(a)},
kw:function(a){return new P.h0(a)},
j4:function(a){return new P.aZ(a)},
ag:function(a){return new P.dH(a)},
c_:function(a){return new P.hq(a)},
a4:function(a){H.is(H.e(a))},
af:function af(){},
F:function F(){},
bc:function bc(a,b){this.a=a
this.b=b},
V:function V(){},
av:function av(a){this.a=a},
dX:function dX(){},
dY:function dY(){},
aR:function aR(){},
bQ:function bQ(a){this.a=a},
cm:function cm(){},
W:function W(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
co:function co(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ex:function ex(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
h2:function h2(a){this.a=a},
h0:function h0(a){this.a=a},
aZ:function aZ(a){this.a=a},
dH:function dH(a){this.a=a},
cv:function cv(){},
dQ:function dQ(a){this.a=a},
iQ:function iQ(){},
hq:function hq(a){this.a=a},
e0:function e0(a,b,c){this.a=a
this.b=b
this.$ti=c},
y:function y(){},
P:function P(){},
c6:function c6(){},
i:function i(){},
aV:function aV(){},
K:function K(){},
a3:function a3(){},
D:function D(){},
aY:function aY(){},
p:function p(){},
bo:function bo(a){this.a=a},
j8:function j8(){},
i5:function(a){var t,s,r,q,p
if(a==null)return
t=P.Q()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.I)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
mQ:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.jx(a,new P.i4(t))
return t},
jX:function(){var t=$.jW
if(t==null){t=J.iF(window.navigator.userAgent,"Opera",0)
$.jW=t}return t},
lS:function(){var t,s
t=$.jT
if(t!=null)return t
s=$.jU
if(s==null){s=J.iF(window.navigator.userAgent,"Firefox",0)
$.jU=s}if(s)t="-moz-"
else{s=$.jV
if(s==null){s=!P.jX()&&J.iF(window.navigator.userAgent,"Trident/",0)
$.jV=s}if(s)t="-ms-"
else t=P.jX()?"-o-":"-webkit-"}$.jT=t
return t},
i4:function i4(a){this.a=a},
hK:function hK(){},
R:function R(){},
e1:function e1(){},
e2:function e2(){},
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
en:function en(){},
ep:function ep(){},
Z:function Z(){},
a6:function a6(){},
ew:function ew(){},
eG:function eG(){},
eP:function eP(){},
f6:function f6(){},
fe:function fe(){},
fh:function fh(){},
fi:function fi(){},
fl:function fl(){},
fm:function fm(){},
bn:function bn(){},
fK:function fK(){},
w:function w(){},
fL:function fL(){},
bq:function bq(){},
br:function br(){},
fX:function fX(){},
h4:function h4(){},
cR:function cR(){},
cS:function cS(){},
cY:function cY(){},
cZ:function cZ(){},
d7:function d7(){},
d8:function d8(){},
dd:function dd(){},
de:function de(){},
dB:function dB(){},
dC:function dC(){},
aO:function aO(){},
f7:function f7(){},
fq:function fq(){},
fr:function fr(){},
fA:function fA(){},
d3:function d3(){},
d4:function d4(){}},W={
lU:function(a,b,c){var t,s
t=document.body
s=(t&&C.n).O(t,a,b,c)
s.toString
t=new H.cF(new W.N(s),new W.e_(),[W.r])
return t.ga3(t)},
lV:function(a){return"wheel"},
be:function(a){var t,s,r
t="element tag unavailable"
try{s=J.lq(a)
if(typeof s==="string")t=a.tagName}catch(r){H.L(r)}return t},
mv:function(a,b){return document.createElement(a)},
aL:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kD:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
a0:function(a,b,c,d,e){var t=c==null?null:W.kJ(new W.hp(c))
t=new W.ho(0,a,b,t,!1,[e])
t.dh(a,b,c,!1,e)
return t},
kA:function(a){var t,s
t=document.createElement("a")
s=new W.hP(t,window.location)
s=new W.bu(s)
s.di(a)
return s},
my:function(a,b,c,d){return!0},
mz:function(a,b,c,d){var t,s,r,q,p
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
kE:function(){var t=P.p
t=new W.hW(P.iY(C.q,t),P.aB(null,null,null,t),P.aB(null,null,null,t),P.aB(null,null,null,t),null)
t.dl(null,new H.bi(C.q,new W.hX(),[H.ap(C.q,0),null]),["TEMPLATE"],null)
return t},
kJ:function(a){var t=$.B
if(t===C.f)return a
return t.dY(a)},
j:function j(){},
bP:function bP(){},
dx:function dx(){},
dy:function dy(){},
dz:function dz(){},
ar:function ar(){},
bR:function bR(){},
dE:function dE(){},
at:function at(){},
dI:function dI(){},
dJ:function dJ(){},
dK:function dK(){},
dL:function dL(){},
aP:function aP(){},
dM:function dM(){},
X:function X(){},
aQ:function aQ(){},
dN:function dN(){},
dO:function dO(){},
dP:function dP(){},
dR:function dR(){},
dS:function dS(){},
bU:function bU(){},
bd:function bd(){},
dT:function dT(){},
bV:function bV(){},
dU:function dU(){},
bW:function bW(){},
bX:function bX(){},
bY:function bY(){},
dV:function dV(){},
dW:function dW(){},
Y:function Y(){},
e_:function e_(){},
h:function h(){},
d:function d(){},
el:function el(){},
em:function em(){},
eq:function eq(){},
et:function et(){},
c4:function c4(){},
eu:function eu(){},
bf:function bf(){},
c5:function c5(){},
ev:function ev(){},
bg:function bg(){},
az:function az(){},
eL:function eL(){},
eM:function eM(){},
eR:function eR(){},
eT:function eT(){},
bj:function bj(){},
eU:function eU(){},
J:function J(){},
N:function N(a){this.a=a},
r:function r(){},
cj:function cj(){},
bl:function bl(){},
a8:function a8(){},
fg:function fg(){},
fj:function fj(){},
cn:function cn(){},
cq:function cq(){},
ft:function ft(){},
aj:function aj(){},
fx:function fx(){},
fz:function fz(){},
a9:function a9(){},
fE:function fE(){},
fF:function fF(a){this.a=a},
cx:function cx(){},
fM:function fM(){},
fN:function fN(){},
bp:function bp(){},
fP:function fP(){},
fQ:function fQ(){},
fR:function fR(){},
aF:function aF(){},
fV:function fV(){},
fW:function fW(){},
cD:function cD(){},
aG:function aG(){},
h3:function h3(){},
h5:function h5(){},
h6:function h6(){},
h7:function h7(){},
aI:function aI(){},
bs:function bs(){},
h9:function h9(a){this.a=a},
ja:function ja(){},
hi:function hi(){},
hj:function hj(){},
hA:function hA(){},
cV:function cV(){},
hS:function hS(){},
hT:function hT(){},
hf:function hf(){},
hk:function hk(a){this.a=a},
hn:function hn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jd:function jd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ho:function ho(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
hp:function hp(a){this.a=a},
bu:function bu(a){this.a=a},
o:function o(){},
cl:function cl(a){this.a=a},
f4:function f4(a){this.a=a},
f3:function f3(a,b,c){this.a=a
this.b=b
this.c=c},
bB:function bB(){},
hQ:function hQ(){},
hR:function hR(){},
hW:function hW(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
hX:function hX(){},
hU:function hU(){},
c1:function c1(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ck:function ck(){},
j1:function j1(){},
j9:function j9(){},
hP:function hP(a,b){this.a=a
this.b=b},
df:function df(a){this.a=a},
hY:function hY(a){this.a=a},
cH:function cH(){},
cI:function cI(){},
cJ:function cJ(){},
cK:function cK(){},
cL:function cL(){},
cM:function cM(){},
cN:function cN(){},
cP:function cP(){},
cQ:function cQ(){},
cT:function cT(){},
cU:function cU(){},
cW:function cW(){},
cX:function cX(){},
d_:function d_(){},
d0:function d0(){},
bC:function bC(){},
bD:function bD(){},
d1:function d1(){},
d2:function d2(){},
d6:function d6(){},
d9:function d9(){},
da:function da(){},
bE:function bE(){},
bF:function bF(){},
db:function db(){},
dc:function dc(){},
dg:function dg(){},
dh:function dh(){},
di:function di(){},
dj:function dj(){},
dk:function dk(){},
dl:function dl(){},
dm:function dm(){},
dn:function dn(){},
dp:function dp(){},
dq:function dq(){}},B={
na:function(a){var t,s
t=document
s=W.az
W.a0(t,"keydown",new B.iu(),!1,s)
W.a0(t,"keyup",new B.iv(),!1,s)
if(!$.nb)W.a0(t,"mousemove",new B.iw(),!1,W.J)
s=W.J
W.a0(t,"mousedown",new B.ix(),!1,s)
W.a0(t,"mouseup",new B.iy(),!1,s)},
m8:function(a,b,c,d){var t,s,r,q,p,o,n
t=new Float32Array(3)
s=$.$get$i6()
r=$.$get$bL()
q=new T.E(new Float32Array(16))
q.H()
p=new Float32Array(3)
o=new Float32Array(3)
n=new Float32Array(3)
t=new B.f8(a,b,c,0,new T.f(t),-0.02,s,r,q,new T.f(p),new T.f(o),new T.f(n),new T.f(new Float32Array(3)),"camera:orbit",!1,!0)
t.d7(a,b,c,d)
return t},
iu:function iu(){},
iv:function iv(){},
iw:function iw(){},
ix:function ix(){},
iy:function iy(){},
f8:function f8(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
f9:function f9(a){this.a=a},
fa:function fa(a){this.a=a},
fb:function fb(){},
fc:function fc(a){this.a=a},
lP:function(d1,d2,d3,d4,d5,d6,d7,d8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0
t=-d6
s=-d7
r=new T.f(new Float32Array(3))
r.p(t,s,d8)
q=new T.f(new Float32Array(3))
q.p(d6,s,d8)
p=new T.f(new Float32Array(3))
p.p(d6,d7,d8)
o=new T.f(new Float32Array(3))
o.p(t,d7,d8)
n=-d8
m=new T.f(new Float32Array(3))
m.p(t,s,n)
l=new T.f(new Float32Array(3))
l.p(t,d7,n)
k=new T.f(new Float32Array(3))
k.p(d6,d7,n)
j=new T.f(new Float32Array(3))
j.p(d6,s,n)
i=new T.f(new Float32Array(3))
i.p(t,d7,n)
h=new T.f(new Float32Array(3))
h.p(t,d7,d8)
g=new T.f(new Float32Array(3))
g.p(d6,d7,d8)
f=new T.f(new Float32Array(3))
f.p(d6,d7,n)
e=new T.f(new Float32Array(3))
e.p(d6,s,d8)
d=new T.f(new Float32Array(3))
d.p(t,s,d8)
c=new T.f(new Float32Array(3))
c.p(t,s,n)
b=new T.f(new Float32Array(3))
b.p(d6,s,n)
a=new T.f(new Float32Array(3))
a.p(d6,s,n)
a0=new T.f(new Float32Array(3))
a0.p(d6,d7,n)
a1=new T.f(new Float32Array(3))
a1.p(d6,d7,d8)
a2=new T.f(new Float32Array(3))
a2.p(d6,s,d8)
a3=new T.f(new Float32Array(3))
a3.p(t,s,n)
a4=new T.f(new Float32Array(3))
a4.p(t,s,d8)
s=new T.f(new Float32Array(3))
s.p(t,d7,d8)
a5=new T.f(new Float32Array(3))
a5.p(t,d7,n)
t=new T.n(new Float32Array(2))
t.q(d3,d5)
n=new T.n(new Float32Array(2))
n.q(d2,d5)
a6=new T.n(new Float32Array(2))
a6.q(d2,d4)
a7=new T.n(new Float32Array(2))
a7.q(d3,d4)
a8=new T.n(new Float32Array(2))
a8.q(d2,d5)
a9=new T.n(new Float32Array(2))
a9.q(d2,d4)
b0=new T.n(new Float32Array(2))
b0.q(d3,d4)
b1=new T.n(new Float32Array(2))
b1.q(d3,d5)
b2=new T.n(new Float32Array(2))
b2.q(d3,d4)
b3=new T.n(new Float32Array(2))
b3.q(d3,d5)
b4=new T.n(new Float32Array(2))
b4.q(d2,d5)
b5=new T.n(new Float32Array(2))
b5.q(d2,d4)
b6=new T.n(new Float32Array(2))
b6.q(d2,d4)
b7=new T.n(new Float32Array(2))
b7.q(d3,d4)
b8=new T.n(new Float32Array(2))
b8.q(d3,d5)
b9=new T.n(new Float32Array(2))
b9.q(d2,d5)
c0=new T.n(new Float32Array(2))
c0.q(d2,d5)
c1=new T.n(new Float32Array(2))
c1.q(d2,d4)
c2=new T.n(new Float32Array(2))
c2.q(d3,d4)
c3=new T.n(new Float32Array(2))
c3.q(d3,d5)
c4=new T.n(new Float32Array(2))
c4.q(d3,d5)
c5=new T.n(new Float32Array(2))
c5.q(d2,d5)
c6=new T.n(new Float32Array(2))
c6.q(d2,d4)
c7=new T.n(new Float32Array(2))
c7.q(d3,d4)
c8=new G.c3(!1,[],[],[],P.Q())
c8.ar("aTexUV")
c8.ar("aNormal")
c8.bh(6)
c8.aI([r,q,p,o,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,s,a5])
c8.aH("aTexUV",[t,n,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7])
for(c9=0;t=$.$get$ky(),c9<6;++c9){d0=t[c9]
c8.cW("aNormal",[d0,d0,d0,d0])}return c8}},G={
mq:function(a){var t,s,r
t=H.z(a.split("\n"),[P.p])
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.e(t[s])}return C.a.an(t,"\n")},
kx:function(a,b,c){var t,s,r,q
t=J.l(a)
s=t.bW(a,b)
t.bc(a,s,c)
t.bT(a,s)
r=t.b8(a,s,35713)
if(r!=null&&!r){q=t.b7(a,s)
P.a4("E:Compilation failed:")
P.a4("E:"+G.mq(c))
P.a4("E:Failure:")
P.a4(C.i.a2("E:",q))
throw H.c(q)}return s},
k9:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
d.D(b)
d.aE(0,a)
e.D(c)
e.aE(0,a)
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
l=Math.sqrt(e.gaA())
if(l===0)return!1
e.cB(0,-1/l)
return!0},
j0:function(a){var t=new G.eQ(P.Q(),a,!1,!0)
t.d6(a)
return t},
k0:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.iI(a[s])
b[t+1]=J.iJ(a[s])
b[t+2]=J.jy(a[s])}return b},
lY:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.iI(a[s])
b[t+1]=J.iJ(a[s])}return b},
lZ:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.iI(a[s])
b[t+1]=J.iJ(a[s])
b[t+2]=J.jy(a[s])
b[t+3]=J.lr(a[s])}return b},
lX:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.b7(a[s],0)
b[t+1]=J.b7(a[s],1)
b[t+2]=J.b7(a[s],2)
b[t+3]=J.b7(a[s],3)}return b},
mx:function(a,b){var t,s,r,q,p,o,n,m,l,k
for(t=a.e,s=t.gF(t),s=s.gB(s),r=b.x,q=[[P.i,P.y]],p=[P.V],o=[T.am],n=[T.f],m=[T.n];s.t();){l=s.gu(s)
if(!r.I(0,l)){l="Dropping unnecessary attribute: "+H.e(l)
if($.kP>0)H.is("I: "+l)
continue}k=t.h(0,l)
switch($.$get$S().h(0,l).a){case"vec2":b.ac(l,G.lY(H.du(k,"$isi",m,"$asi"),null),2)
break
case"vec3":b.ac(l,G.k0(H.du(k,"$isi",n,"$asi"),null),3)
break
case"vec4":b.ac(l,G.lZ(H.du(k,"$isi",o,"$asi"),null),4)
break
case"float":b.ac(l,new Float32Array(H.i_(H.du(k,"$isi",p,"$asi"))),1)
break
case"uvec4":b.ac(l,G.lX(H.du(k,"$isi",q,"$asi"),null),4)
break
default:if(H.ae(!1))H.an("unknown type for "+H.e(l)+" ["+J.lp(k[0]).k(0)+"] ["+new H.ak(H.ib(k),null).k(0)+"] "+H.e(k))}}},
k1:function(a,b,c){var t,s,r,q,p,o,n,m
t=b.d
s=b.e.x
r=P.Q()
q=J.le(t.a)
p=new G.eS(t,q,4,r,s,null,0,-1,null,null,P.Q(),"meshdata:"+a,!1,!0)
o=G.k0(c.d,null)
r.i(0,"aPosition",J.iG(t.a))
p.ch=o
p.bj("aPosition",o,3)
n=$.$get$S().h(0,"aPosition")
if(n==null)H.H("Unknown canonical aPosition")
H.b(s.I(0,"aPosition"))
m=s.h(0,"aPosition")
J.dv(t.a,q)
t.c3(0,m,0)
t.ct(0,r.h(0,"aPosition"),m,n.bk(),5126,!1,0,0)
s=c.d1()
p.y=J.iG(t.a)
H.b(p.ch!=null)
r=p.ch.length
if(r<768){p.saQ(new Uint8Array(H.i_(s)))
p.Q=5121}else if(r<196608){p.saQ(new Uint16Array(H.i_(s)))
p.Q=5123}else{p.saQ(new Uint32Array(H.i_(s)))
p.Q=5125}J.dv(t.a,q)
s=p.y
r=p.cx
q=J.v(r)
H.b(!!q.$iskt||!!q.$isku||!!q.$iskv)
J.iE(t.a,34963,s)
J.jw(t.a,34963,r,35048)
G.mx(c,p)
return p},
mi:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.aB(null,null,null,P.p)
s=c.b
r=d.b
q=c.f
p=J.ld(b.a)
o=G.kx(b.a,35633,s)
J.ju(b.a,p,o)
n=G.kx(b.a,35632,r)
J.ju(b.a,p,n)
if(q.length>0)J.lA(b.a,p,q,35980)
J.lv(b.a,p)
if(!J.lu(b.a,p,35714))H.H(J.lt(b.a,p))
t=new G.fp(b,c,d,p,P.iY(c.c,null),P.Q(),P.Q(),t,null,a,!1,!0)
t.d8(a,b,c,d)
return t},
kf:function(a){return new G.fw(a,null,[],[],[],[],0,P.Q())},
eV:function eV(){},
cE:function cE(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dD:function dD(){},
dG:function dG(a,b){this.a=a
this.b=b},
er:function er(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ej:function ej(a,b,c){this.a=a
this.b=b
this.c=c},
ek:function ek(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c3:function c3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cB:function cB(a,b,c){this.a=a
this.b=b
this.c=c},
cA:function cA(a,b,c){this.a=a
this.b=b
this.c=c},
eQ:function eQ(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
eS:function eS(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
fd:function fd(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.d=k
_.a=l
_.b=m
_.c=n},
fp:function fp(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
x:function x(a,b,c){this.a=a
this.b=b
this.c=c},
fw:function fw(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fy:function fy(){}},R={
j3:function(a,b,c,d,e,f,g,h){return G.k1("cube",a,B.lP(!0,b,c,d,e,f,g,h))},
fC:function fC(){},
fD:function fD(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},A={
kO:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=b.dx
t.D(c)
s=b.d
t.c8(0,s)
r=b.ch
if(r!=null&&b.cx!=null){H.e(b)
q=C.a.gaz(e)
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
p.e4(new T.a_(o))
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
a.d0(b.cx,e,d)
e.pop()}for(s=b.cy,r=s.length,l=0;l<s.length;s.length===r||(0,H.I)(s),++l)A.kO(a,s[l],t,d,e)},
aC:function aC(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
cr:function cr(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.a=d
_.b=e
_.c=f},
fo:function fo(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
ds:function(a){var t,s
t=C.V.ej(a,0,new A.ic())
s=536870911&t+(C.b.cv(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
ic:function ic(){}},T={
al:function(a,b,c){var t=new T.f(new Float32Array(3))
t.p(a,b,c)
return t},
a_:function a_(a){this.a=a},
E:function E(a){this.a=a},
n:function n(a){this.a=a},
f:function f(a){this.a=a},
am:function am(a){this.a=a}},F={
n4:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4
t={}
s=document
r=new R.fD(0,0,null,null,null,null)
r.da(C.p.cA(s,"stats"),"blue","gray")
q=C.p.ez(s,"#webgl-canvas")
p=new G.dG(null,q)
s=(q&&C.H).cz(q,"webgl2",P.aA(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
p.a=s
if(s==null)H.H(P.c_('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
o="ChronosGL Config: "+H.e(J.ls(s))
if($.kP>0)P.a4("I: "+o)
J.lb(s,0,0,0,1)
J.dw(s,2929)
n=B.m8(20,0,0,q)
s=new Float32Array(16)
o=new Float32Array(16)
m=new T.E(new Float32Array(16))
m.H()
l=new G.fd(n,new T.E(s),new T.E(o),m,1,-40,40,-40,-40,100,P.Q(),"othrogrpahic",!1,!0)
l.bn()
m=H.z([],[A.cr])
k=new A.fo(null,p,m,17664,0,0,0,0,"shadow",!1,!0)
k.d=new G.er(p,null,null,null,null)
s=G.mi("textured",p,$.$get$l_(),$.$get$kZ())
o=[]
H.b(!0)
C.a.l(m,new A.cr(s,[l],o,"objects",!1,!0))
j=G.j0("mat1")
j.a1("uColor",$.$get$jO())
i=G.j0("mat2")
i.a1("uColor",$.$get$jQ())
h=G.j0("mat3")
h.a1("uColor",$.$get$jP())
m=R.j3(s,1,0,1,0,15,3,3)
g=new Float32Array(9)
f=new T.E(new Float32Array(16))
f.H()
e=new T.E(new Float32Array(16))
e.H()
d=new Float32Array(3)
c=new Float32Array(3)
b=new Float32Array(3)
a=new A.aC(j,m,[],new T.a_(g),f,e,new T.f(d),new T.f(c),new T.f(b),new T.f(new Float32Array(3)),"side1",!1,!0)
a.ab(-3,0,0)
m=R.j3(s,1,0,1,0,3,3,15)
g=new Float32Array(9)
f=new T.E(new Float32Array(16))
f.H()
e=new T.E(new Float32Array(16))
e.H()
d=new Float32Array(3)
c=new Float32Array(3)
b=new Float32Array(3)
a0=new A.aC(i,m,[],new T.a_(g),f,e,new T.f(d),new T.f(c),new T.f(b),new T.f(new Float32Array(3)),"side2",!1,!0)
a0.ab(-15,0,18)
m=R.j3(s,1,0,1,0,3,12,3)
g=new Float32Array(9)
f=new T.E(new Float32Array(16))
f.H()
e=new T.E(new Float32Array(16))
e.H()
d=new Float32Array(3)
c=new Float32Array(3)
b=new Float32Array(3)
a1=new A.aC(h,m,[],new T.a_(g),f,e,new T.f(d),new T.f(c),new T.f(b),new T.f(new Float32Array(3)),"side3a",!1,!0)
a1.ab(15,9,0)
m=new T.f(new Float32Array(3))
m.p(-3,-3,3)
g=new T.f(new Float32Array(3))
g.p(3,-3,3)
f=new T.f(new Float32Array(3))
f.p(-3,3,3)
e=new T.f(new Float32Array(3))
e.p(-3,-3,-3)
d=new T.f(new Float32Array(3))
d.p(-3,3,-3)
c=new T.f(new Float32Array(3))
c.p(3,-3,-3)
b=new T.f(new Float32Array(3))
b.p(-3,3,-3)
a2=new T.f(new Float32Array(3))
a2.p(-3,3,3)
a3=new T.f(new Float32Array(3))
a3.p(3,-3,3)
a4=new T.f(new Float32Array(3))
a4.p(3,-3,-3)
a5=new T.f(new Float32Array(3))
a5.p(3,-3,3)
a6=new T.f(new Float32Array(3))
a6.p(-3,-3,3)
a7=new T.f(new Float32Array(3))
a7.p(-3,-3,-3)
a8=new T.f(new Float32Array(3))
a8.p(3,-3,-3)
a9=new T.f(new Float32Array(3))
a9.p(-3,-3,-3)
b0=new T.f(new Float32Array(3))
b0.p(-3,-3,3)
b1=new T.f(new Float32Array(3))
b1.p(-3,3,3)
b2=new T.f(new Float32Array(3))
b2.p(-3,3,-3)
b3=new T.n(new Float32Array(2))
b3.q(0,0)
b4=new T.n(new Float32Array(2))
b4.q(1,0)
b5=new T.n(new Float32Array(2))
b5.q(1,1)
b6=new T.n(new Float32Array(2))
b6.q(1,0)
b7=new T.n(new Float32Array(2))
b7.q(1,1)
b8=new T.n(new Float32Array(2))
b8.q(0,1)
b9=new T.n(new Float32Array(2))
b9.q(0,1)
c0=new T.n(new Float32Array(2))
c0.q(0,0)
c1=new T.n(new Float32Array(2))
c1.q(1,0)
c2=new T.n(new Float32Array(2))
c2.q(1,1)
c3=new T.n(new Float32Array(2))
c3.q(1,1)
c4=new T.n(new Float32Array(2))
c4.q(0,1)
c5=new T.n(new Float32Array(2))
c5.q(0,0)
c6=new T.n(new Float32Array(2))
c6.q(1,0)
c7=new T.n(new Float32Array(2))
c7.q(0,0)
c8=new T.n(new Float32Array(2))
c8.q(1,0)
c9=new T.n(new Float32Array(2))
c9.q(1,1)
d0=new T.n(new Float32Array(2))
d0.q(0,1)
d1=new G.c3(!1,[],[],[],P.Q())
d1.ar("aTexUV")
d1.ar("aNormal")
d1.cX(2)
d1.aI([m,g,f,e,d,c])
d1.aH("aTexUV",[b3,b4,b5,b6,b7,b8])
d1.bh(3)
d1.aI([b,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2])
d1.aH("aTexUV",[b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0])
d1.d2()
s=G.k1("wedge",s,d1)
m=new Float32Array(9)
g=new T.E(new Float32Array(16))
g.H()
f=new Float32Array(16)
e=new T.E(f)
e.H()
d=new Float32Array(3)
c=new Float32Array(3)
b=new Float32Array(3)
d2=new A.aC(h,s,[],new T.a_(m),g,e,new T.f(d),new T.f(c),new T.f(b),new T.f(new Float32Array(3)),"side3b",!1,!0)
d3=Math.cos(3.141592653589793)
d4=Math.sin(3.141592653589793)
s=f[0]
m=f[8]
g=-d4
e=f[1]
d=f[9]
c=f[2]
b=f[10]
a2=f[3]
a3=f[11]
f[0]=s*d3+m*g
f[1]=e*d3+d*g
f[2]=c*d3+b*g
f[3]=a2*d3+a3*g
f[8]=s*d4+m*d3
f[9]=e*d4+d*d3
f[10]=c*d4+b*d3
f[11]=a2*d4+a3*d3
d2.ab(15,24,0)
a3=[]
s=new Float32Array(9)
m=new T.E(new Float32Array(16))
m.H()
g=new Float32Array(16)
f=new T.E(g)
f.H()
e=new Float32Array(3)
d=new Float32Array(3)
c=new Float32Array(3)
b=new Float32Array(3)
C.a.l(a3,a)
C.a.l(a3,a0)
C.a.l(a3,a1)
C.a.l(a3,d2)
g[12]=g[12]+g[1]*-20
g[13]=g[13]+g[5]*-20
g[14]=g[14]+g[9]*-20
H.b(!0)
C.a.l(o,new A.aC(null,null,a3,new T.a_(s),m,f,new T.f(e),new T.f(d),new T.f(c),new T.f(b),"triangle",!1,!0))
s=new F.iq(q,l,k)
s.$1(null)
W.a0(window,"resize",s,!1,W.h)
n.id=0.6108652381980153
n.go=-0.7853981633974483
t.a=0
new F.ip(t,n,k,r).$1(0)},
iq:function iq(a,b,c){this.a=a
this.b=b
this.c=c},
ip:function ip(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}}
var v=[C,H,J,P,W,B,G,R,A,T,F]
setFunctionNamesIfNecessary(v)
var $={}
H.iT.prototype={}
J.a.prototype={
A:function(a,b){return a===b},
gw:function(a){return H.aD(a)},
k:function(a){return"Instance of '"+H.bm(a)+"'"},
gC:function(a){return new H.ak(H.ib(a),null)}}
J.eC.prototype={
k:function(a){return String(a)},
gw:function(a){return a?519018:218159},
gC:function(a){return C.ap},
$isaf:1}
J.eD.prototype={
A:function(a,b){return null==b},
k:function(a){return"null"},
gw:function(a){return 0},
gC:function(a){return C.aj},
$isK:1}
J.bh.prototype={
gw:function(a){return 0},
gC:function(a){return C.ai},
k:function(a){return String(a)},
$isk5:1}
J.ff.prototype={}
J.aH.prototype={}
J.ay.prototype={
k:function(a){var t=a[$.$get$jS()]
return t==null?this.cS(a):J.ba(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isiR:1}
J.aw.prototype={
l:function(a,b){if(!!a.fixed$length)H.H(P.u("add"))
a.push(b)},
N:function(a,b){var t,s,r,q
t=a.length
if(!!a.fixed$length)H.H(P.u("addAll"))
for(s=0;s<1;++s,t=q){r=b[s]
q=t+1
H.b(t===a.length||H.H(P.ag(a)))
a.push(r)}},
c7:function(a,b){return new H.bi(a,b,[H.ap(a,0),null])},
an:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.e(a[s])
return t.join(b)},
v:function(a,b){return this.h(a,b)},
gei:function(a){if(a.length>0)return a[0]
throw H.c(H.eB())},
gaz:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.c(H.eB())},
bb:function(a,b,c,d,e){var t,s,r
if(!!a.immutable$list)H.H(P.u("setRange"))
P.ke(b,c,a.length,null,null,null)
t=C.b.a4(c,b)
if(t===0)return
if(e<0)H.H(P.aE(e,0,null,"skipCount",null))
s=J.T(d)
if(C.b.U(e+t,s.gj(d)))throw H.c(H.m6())
if(C.b.a_(e,b))for(r=t-1;r>=0;--r)a[b+r]=s.h(d,e+r)
else for(r=0;r<t;++r)a[b+r]=s.h(d,e+r)},
bJ:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.c(P.ag(a))}return!1},
cN:function(a,b){if(!!a.immutable$list)H.H(P.u("sort"))
H.mm(a,P.mR())},
bd:function(a){return this.cN(a,null)},
E:function(a,b){var t
for(t=0;t<a.length;++t)if(J.C(a[t],b))return!0
return!1},
k:function(a){return P.eA(a,"[","]")},
gB:function(a){return new J.dA(a,a.length,0,null,[H.ap(a,0)])},
gw:function(a){return H.aD(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.H(P.u("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.iM(b,"newLength",null))
if(b<0)throw H.c(P.aE(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.b4(a,b))
if(b>=a.length||b<0)throw H.c(H.b4(a,b))
return a[b]},
i:function(a,b,c){if(!!a.immutable$list)H.H(P.u("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.b4(a,b))
if(b>=a.length||b<0)throw H.c(H.b4(a,b))
a[b]=c},
$isq:1,
$asq:function(){},
$isk:1,
$isi:1}
J.iS.prototype={}
J.dA.prototype={
gu:function(a){return this.d},
t:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.c(H.I(t))
r=this.c
if(r>=s){this.sbo(null)
return!1}this.sbo(t[r]);++this.c
return!0},
sbo:function(a){this.d=a}}
J.aT.prototype={
S:function(a,b){var t
if(typeof b!=="number")throw H.c(H.O(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gax(b)
if(this.gax(a)===t)return 0
if(this.gax(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gax:function(a){return a===0?1/a<0:a<0},
e_:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.c(P.u(""+a+".ceil()"))},
a8:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.u(""+a+".round()"))},
e0:function(a,b,c){if(this.S(b,c)>0)throw H.c(H.O(b))
if(this.S(a,b)<0)return b
if(this.S(a,c)>0)return c
return a},
eK:function(a,b){var t
if(b>20)throw H.c(P.aE(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gax(a))return"-"+t
return t},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gw:function(a){return a&0x1FFFFFFF},
a2:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return a+b},
a4:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return a-b},
cw:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return a/b},
J:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return a*b},
aG:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bF(a,b)},
L:function(a,b){return(a|0)===a?a/b|0:this.bF(a,b)},
bF:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.c(P.u("Result of truncating division is "+H.e(t)+": "+H.e(a)+" ~/ "+b))},
aW:function(a,b){var t
if(a>0)t=this.dN(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
dN:function(a,b){return b>31?0:a>>>b},
cv:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return(a&b)>>>0},
cU:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return(a^b)>>>0},
a_:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return a<b},
U:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return a>b},
b4:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return a>=b},
gC:function(a){return C.as},
$isF:1,
$asF:function(){return[P.a3]},
$isV:1,
$isa3:1}
J.c8.prototype={
gC:function(a){return C.ar},
$isy:1}
J.c7.prototype={
gC:function(a){return C.aq}}
J.ax.prototype={
aK:function(a,b){if(b>=a.length)throw H.c(H.b4(a,b))
return a.charCodeAt(b)},
a2:function(a,b){if(typeof b!=="string")throw H.c(P.iM(b,null,null))
return a+b},
cO:function(a,b,c){var t
if(c>a.length)throw H.c(P.aE(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
be:function(a,b){return this.cO(a,b,0)},
bg:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.fk(b,null,null))
if(b>c)throw H.c(P.fk(b,null,null))
if(c>a.length)throw H.c(P.fk(c,null,null))
return a.substring(b,c)},
cP:function(a,b){return this.bg(a,b,null)},
eJ:function(a){return a.toLowerCase()},
e2:function(a,b,c){if(c>a.length)throw H.c(P.aE(c,0,a.length,null,null))
return H.nc(a,b,c)},
S:function(a,b){var t
if(typeof b!=="string")throw H.c(H.O(b))
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
gC:function(a){return C.ak},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.c(H.b4(a,b))
return a[b]},
$isq:1,
$asq:function(){},
$isF:1,
$asF:function(){return[P.p]},
$isp:1}
H.k.prototype={}
H.aU.prototype={
gB:function(a){return new H.ca(this,this.gj(this),0,null,[H.a2(this,"aU",0)])},
aC:function(a,b){return this.cR(0,b)},
eI:function(a,b){var t,s
t=H.z([],[H.a2(this,"aU",0)])
C.a.sj(t,this.gj(this))
for(s=0;C.b.a_(s,this.gj(this));++s)t[s]=this.v(0,s)
return t},
eH:function(a){return this.eI(a,!0)}}
H.ca.prototype={
gu:function(a){return this.d},
t:function(){var t,s,r,q
t=this.a
s=J.T(t)
r=s.gj(t)
q=this.b
if(q==null?r!=null:q!==r)throw H.c(P.ag(t))
if(C.b.b4(this.c,r)){this.sae(null)
return!1}this.sae(s.v(t,this.c));++this.c
return!0},
sae:function(a){this.d=a}}
H.cc.prototype={
gB:function(a){return new H.eO(null,J.aM(this.a),this.b,this.$ti)},
gj:function(a){return J.b9(this.a)},
$asP:function(a,b){return[b]}}
H.dZ.prototype={$isk:1,
$ask:function(a,b){return[b]}}
H.eO.prototype={
t:function(){var t=this.b
if(t.t()){this.sae(this.c.$1(t.gu(t)))
return!0}this.sae(null)
return!1},
gu:function(a){return this.a},
sae:function(a){this.a=a},
$asc6:function(a,b){return[b]}}
H.bi.prototype={
gj:function(a){return J.b9(this.a)},
v:function(a,b){return this.b.$1(J.lk(this.a,b))},
$ask:function(a,b){return[b]},
$asaU:function(a,b){return[b]},
$asP:function(a,b){return[b]}}
H.cF.prototype={
gB:function(a){return new H.h8(J.aM(this.a),this.b,this.$ti)}}
H.h8.prototype={
t:function(){var t,s
for(t=this.a,s=this.b;t.t();)if(s.$1(t.gu(t)))return!0
return!1},
gu:function(a){var t=this.a
return t.gu(t)}}
H.aS.prototype={}
H.iz.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.iA.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.hI.prototype={
ses:function(a){this.z=a},
sew:function(a){this.ch=a}}
H.b_.prototype={
dj:function(){var t,s
t=this.e
s=t.a
this.c.l(0,s)
this.dq(s,t)},
bI:function(a,b){if(!this.f.A(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.aY()},
eC:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.ao(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.bz();++r.d}this.y=!1}this.aY()},
dR:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.v(a),s=0;r=this.ch,s<r.length;s+=2)if(t.A(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
eB:function(a){var t,s,r
if(this.ch==null)return
for(t=J.v(a),s=0;r=this.ch,s<r.length;s+=2)if(t.A(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.H(P.u("removeRange"))
P.ke(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
cK:function(a,b){if(!this.r.A(0,a))return
this.db=b},
em:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.K(0,c)
return}H.b(b===1)
t=this.cx
if(t==null){t=P.iZ(null,null)
this.cx=t}t.V(0,new H.hC(a,c))},
el:function(a,b){var t
if(!this.r.A(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.ay()
return}H.b(b===1)
t=this.cx
if(t==null){t=P.iZ(null,null)
this.cx=t}t.V(0,this.geu())},
en:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.a4(a)
if(b!=null)P.a4(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.ba(a)
s[1]=b==null?null:b.k(0)
for(r=new P.bv(t,t.r,null,null,[null]),r.c=t.e;r.t();)r.d.K(0,s)},
ai:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.L(o)
p=H.ao(o)
this.en(q,p)
if(this.db){this.ay()
if(this===u.globalState.e)throw o}}finally{this.cy=H.mN(r)
u.globalState.d=H.jn(t,"$isb_")
if(t!=null)$=t.ger()
if(this.cx!=null)for(;n=this.cx,!n.gam(n);)this.cx.c9().$0()}return s},
c6:function(a){return this.b.h(0,a)},
dq:function(a,b){var t=this.b
if(t.I(0,a))throw H.c(P.c_("Registry: ports must be registered only once."))
t.i(0,a,b)},
aY:function(){var t=this.b
if(t.gj(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.ay()},
ay:function(){var t,s,r
t=this.cx
if(t!=null)t.X(0)
for(t=this.b,s=t.gcr(t),s=s.gB(s);s.t();)s.gu(s).dr()
t.X(0)
this.c.X(0)
u.globalState.z.ao(0,this.a)
this.dx.X(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].K(0,t[r+1])
this.ch=null}},
ger:function(){return this.d},
ge3:function(){return this.e}}
H.hC.prototype={
$0:function(){this.a.K(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.hl.prototype={
ea:function(){var t=this.a
if(t.b===t.c)return
return t.c9()},
cb:function(){var t,s,r
t=this.ea()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.I(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gam(s)}else s=!1
else s=!1
else s=!1
if(s)H.H(P.c_("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gam(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aA(["command","close"])
r=new H.a1(!0,P.b0(null,P.y)).M(r)
s.toString
self.postMessage(r)}return!1}t.ey()
return!0},
bD:function(){if(self.window!=null)new H.hm(this).$0()
else for(;this.cb(););},
ap:function(){var t,s,r,q,p
if(!u.globalState.x)this.bD()
else try{this.bD()}catch(r){t=H.L(r)
s=H.ao(r)
q=u.globalState.Q
p=P.aA(["command","error","msg",H.e(t)+"\n"+H.e(s)])
p=new H.a1(!0,P.b0(null,P.y)).M(p)
q.toString
self.postMessage(p)}}}
H.hm.prototype={
$0:function(){if(!this.a.cb())return
P.mp(C.v,this)},
$S:function(){return{func:1,v:true}}}
H.aK.prototype={
ey:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.ai(this.b)}}
H.hH.prototype={}
H.ey.prototype={
$0:function(){H.m2(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.ez.prototype={
$0:function(){var t,s
t=this.a
t.x=!0
if(!this.b)this.c.$1(this.d)
else{s=this.c
if(H.b5(s,{func:1,args:[P.K,P.K]}))s.$2(this.e,this.d)
else if(H.b5(s,{func:1,args:[P.K]}))s.$1(this.e)
else s.$0()}t.aY()},
$S:function(){return{func:1,v:true}}}
H.hg.prototype={}
H.b1.prototype={
K:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.mB(b)
if(t.ge3()===s){s=J.T(r)
switch(s.h(r,0)){case"pause":t.bI(s.h(r,1),s.h(r,2))
break
case"resume":t.eC(s.h(r,1))
break
case"add-ondone":t.dR(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.eB(s.h(r,1))
break
case"set-errors-fatal":t.cK(s.h(r,1),s.h(r,2))
break
case"ping":t.em(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.el(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.ao(0,s)
break}return}u.globalState.f.a.V(0,new H.aK(t,new H.hJ(this,r),"receive"))},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.b1){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gw:function(a){return this.b.a}}
H.hJ.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dm(0,this.b)},
$S:function(){return{func:1}}}
H.bG.prototype={
K:function(a,b){var t,s,r
t=P.aA(["command","message","port",this,"msg",b])
s=new H.a1(!0,P.b0(null,P.y)).M(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bG){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gw:function(a){return C.b.cU((this.b<<16^this.a<<8)>>>0,this.c)}}
H.cp.prototype={
dr:function(){this.c=!0
this.b=null},
dm:function(a,b){if(this.c)return
this.b.$1(b)},
$ismg:1}
H.fS.prototype={
dc:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.V(0,new H.aK(s,new H.fT(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){H.i8()
this.c=self.setTimeout(H.bK(new H.fU(this,b),0),a)}else{H.b(a>0)
throw H.c(P.u("Timer greater than 0."))}}}
H.fT.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.fU.prototype={
$0:function(){var t=this.a
t.c=null
H.io()
t.d=1
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.as.prototype={
gw:function(a){var t=this.a
t=C.b.aW(t,0)^C.b.L(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
A:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.as){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.a1.prototype={
M:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gj(t))
t=J.v(a)
if(!!t.$isbk)return["buffer",a]
if(!!t.$isaX)return["typed",a]
if(!!t.$isq)return this.cG(a)
if(!!t.$ism_){r=this.gcD()
q=t.gF(a)
q=H.j_(q,r,H.a2(q,"P",0),null)
q=P.k7(q,!0,H.a2(q,"P",0))
t=t.gcr(a)
t=H.j_(t,r,H.a2(t,"P",0),null)
return["map",q,P.k7(t,!0,H.a2(t,"P",0))]}if(!!t.$isk5)return this.cH(a)
if(!!t.$isa)this.cp(a)
if(!!t.$ismg)this.aq(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isb1)return this.cI(a)
if(!!t.$isbG)return this.cJ(a)
if(!!t.$isau){p=a.$static_name
if(p==null)this.aq(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isas)return["capability",a.a]
if(!(a instanceof P.D))this.cp(a)
return["dart",u.classIdExtractor(a),this.cF(u.classFieldsExtractor(a))]},
aq:function(a,b){throw H.c(P.u((b==null?"Can't transmit:":b)+" "+H.e(a)))},
cp:function(a){return this.aq(a,null)},
cG:function(a){var t
H.b(typeof a!=="string")
t=this.cE(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.aq(a,"Can't serialize indexable: ")},
cE:function(a){var t,s
t=[]
C.a.sj(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.M(a[s])
return t},
cF:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.M(a[t]))
return a},
cH:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.aq(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sj(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.M(a[t[r]])
return["js-object",t,s]},
cJ:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cI:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.aJ.prototype={
Y:function(a){var t,s,r,q
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.c(P.jG("Bad serialized message: "+H.e(a)))
switch(C.a.gei(a)){case"ref":H.b(J.C(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.b(J.C(a[0],"buffer"))
t=a[1]
C.a.l(this.b,t)
return t
case"typed":H.b(J.C(a[0],"typed"))
t=a[1]
C.a.l(this.b,t)
return t
case"fixed":H.b(J.C(a[0],"fixed"))
t=a[1]
C.a.l(this.b,t)
return J.ai(H.z(this.ah(t),[null]))
case"extendable":H.b(J.C(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.z(this.ah(t),[null])
case"mutable":H.b(J.C(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.ah(t)
case"const":H.b(J.C(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
return J.ai(H.z(this.ah(t),[null]))
case"map":return this.ed(a)
case"sendport":return this.ee(a)
case"raw sendport":H.b(J.C(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.ec(a)
case"function":H.b(J.C(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.b(J.C(a[0],"capability"))
return new H.as(a[1])
case"dart":H.b(J.C(a[0],"dart"))
s=a[1]
r=a[2]
q=u.instanceFromClassId(s)
C.a.l(this.b,q)
this.ah(r)
return u.initializeEmptyInstance(s,q,r)
default:throw H.c("couldn't deserialize: "+H.e(a))}},
ah:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.Y(a[t]))
return a},
ed:function(a){var t,s,r,q,p
H.b(J.C(a[0],"map"))
t=a[1]
s=a[2]
r=P.Q()
C.a.l(this.b,r)
t=J.lw(t,this.geb()).eH(0)
for(q=J.T(s),p=0;p<t.length;++p)r.i(0,t[p],this.Y(q.h(s,p)))
return r},
ee:function(a){var t,s,r,q,p,o,n
H.b(J.C(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.c6(r)
if(o==null)return
n=new H.b1(o,s)}else n=new H.bG(t,r,s)
C.a.l(this.b,n)
return n},
ec:function(a){var t,s,r,q,p,o
H.b(J.C(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.T(t),p=J.T(s),o=0;C.b.a_(o,q.gj(t));++o)r[q.h(t,o)]=this.Y(p.h(s,o))
return r}}
H.fn.prototype={}
H.fY.prototype={
P:function(a){var t,s,r
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
H.f5.prototype={
k:function(a){var t=this.b
if(t==null)return"NullError: "+H.e(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.eF.prototype={
k:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.e(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.e(this.a)+")"}}
H.h1.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.iB.prototype={
$1:function(a){if(!!J.v(a).$isaR)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(a){return{func:1,args:[,]}}}
H.d5.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t},
$isaY:1}
H.ii.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.ij.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.ik.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.il.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.im.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.au.prototype={
k:function(a){return"Closure '"+H.bm(this).trim()+"'"},
$isiR:1,
geN:function(){return this},
$D:null}
H.fO.prototype={}
H.fB.prototype={
k:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bb.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bb))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gw:function(a){var t,s
t=this.c
if(t==null)s=H.aD(this.a)
else s=typeof t!=="object"?J.b8(t):H.aD(t)
return(s^H.aD(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.bm(t)+"'")}}
H.h_.prototype={
k:function(a){return this.a}}
H.dF.prototype={
k:function(a){return this.a}}
H.fs.prototype={
k:function(a){return"RuntimeError: "+H.e(this.a)}}
H.ha.prototype={
k:function(a){return C.i.a2("Assertion failed: ",P.bZ(this.a))}}
H.ak.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gw:function(a){return J.b8(this.a)},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.ak){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.a7.prototype={
gj:function(a){return this.a},
gam:function(a){return this.a===0},
gF:function(a){return new H.eI(this,[H.ap(this,0)])},
gcr:function(a){return H.j_(this.gF(this),new H.eE(this),H.ap(this,0),H.ap(this,1))},
I:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bw(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bw(s,b)}else return this.eo(b)},
eo:function(a){var t=this.d
if(t==null)return!1
return this.al(this.av(t,this.ak(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.af(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.af(r,b)
return s==null?null:s.b}else return this.ep(b)},
ep:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.av(t,this.ak(a))
r=this.al(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aS()
this.b=t}this.bq(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aS()
this.c=s}this.bq(s,b,c)}else{r=this.d
if(r==null){r=this.aS()
this.d=r}q=this.ak(b)
p=this.av(r,q)
if(p==null)this.aV(r,q,[this.aT(b,c)])
else{o=this.al(p,b)
if(o>=0)p[o].b=c
else p.push(this.aT(b,c))}}},
ao:function(a,b){if(typeof b==="string")return this.bC(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bC(this.c,b)
else return this.eq(b)},
eq:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.av(t,this.ak(a))
r=this.al(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bG(q)
return q.b},
X:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aR()}},
aj:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.c(P.ag(this))
t=t.c}},
bq:function(a,b,c){var t=this.af(a,b)
if(t==null)this.aV(a,b,this.aT(b,c))
else t.b=c},
bC:function(a,b){var t
if(a==null)return
t=this.af(a,b)
if(t==null)return
this.bG(t)
this.bx(a,b)
return t.b},
aR:function(){this.r=this.r+1&67108863},
aT:function(a,b){var t,s
t=new H.eH(a,b,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.aR()
return t},
bG:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.aR()},
ak:function(a){return J.b8(a)&0x3ffffff},
al:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.C(a[s].a,b))return s
return-1},
k:function(a){return P.k8(this)},
af:function(a,b){return a[b]},
av:function(a,b){return a[b]},
aV:function(a,b,c){H.b(c!=null)
a[b]=c},
bx:function(a,b){delete a[b]},
bw:function(a,b){return this.af(a,b)!=null},
aS:function(){var t=Object.create(null)
this.aV(t,"<non-identifier-key>",t)
this.bx(t,"<non-identifier-key>")
return t},
$ism_:1}
H.eE.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(a){return{func:1,args:[,]}}}
H.eH.prototype={}
H.eI.prototype={
gj:function(a){return this.a.a},
gB:function(a){var t,s
t=this.a
s=new H.eJ(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.eJ.prototype={
gu:function(a){return this.d},
t:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.ag(t))
else{t=this.c
if(t==null){this.sbp(null)
return!1}else{this.sbp(t.a)
this.c=this.c.c
return!0}}},
sbp:function(a){this.d=a}}
H.id.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[,]}}}
H.ie.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(a,b){return{func:1,args:[,P.p]}}}
H.ig.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[P.p]}}}
H.bk.prototype={
gC:function(a){return C.ab},
$isbk:1}
H.aX.prototype={$isaX:1}
H.eW.prototype={
gC:function(a){return C.ac}}
H.cf.prototype={
gj:function(a){return a.length},
$isq:1,
$asq:function(){},
$ist:1,
$ast:function(){}}
H.cg.prototype={
h:function(a,b){H.ad(b,a,a.length)
return a[b]},
i:function(a,b,c){H.ad(b,a,a.length)
a[b]=c},
$isk:1,
$ask:function(){return[P.V]},
$asaS:function(){return[P.V]},
$asm:function(){return[P.V]},
$isi:1,
$asi:function(){return[P.V]}}
H.ch.prototype={
i:function(a,b,c){H.ad(b,a,a.length)
a[b]=c},
$isk:1,
$ask:function(){return[P.y]},
$asaS:function(){return[P.y]},
$asm:function(){return[P.y]},
$isi:1,
$asi:function(){return[P.y]}}
H.ce.prototype={
gC:function(a){return C.ad},
$iseo:1}
H.eX.prototype={
gC:function(a){return C.ae}}
H.eY.prototype={
gC:function(a){return C.af},
h:function(a,b){H.ad(b,a,a.length)
return a[b]}}
H.eZ.prototype={
gC:function(a){return C.ag},
h:function(a,b){H.ad(b,a,a.length)
return a[b]},
$isk2:1}
H.f_.prototype={
gC:function(a){return C.ah},
h:function(a,b){H.ad(b,a,a.length)
return a[b]}}
H.f0.prototype={
gC:function(a){return C.al},
h:function(a,b){H.ad(b,a,a.length)
return a[b]},
$iskt:1}
H.f1.prototype={
gC:function(a){return C.am},
h:function(a,b){H.ad(b,a,a.length)
return a[b]},
$isku:1}
H.ci.prototype={
gC:function(a){return C.an},
gj:function(a){return a.length},
h:function(a,b){H.ad(b,a,a.length)
return a[b]}}
H.f2.prototype={
gC:function(a){return C.ao},
gj:function(a){return a.length},
h:function(a,b){H.ad(b,a,a.length)
return a[b]},
$iskv:1}
H.bx.prototype={}
H.by.prototype={}
H.bz.prototype={}
H.bA.prototype={}
P.hc.prototype={
$1:function(a){var t,s
H.io()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(a){return{func:1,args:[,]}}}
P.hb.prototype={
$1:function(a){var t,s
t=this.a
H.b(t.a==null)
H.i8()
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(a){return{func:1,args:[{func:1,v:true}]}}}
P.hd.prototype={
$0:function(){H.io()
this.a.$0()},
$S:function(){return{func:1}}}
P.he.prototype={
$0:function(){H.io()
this.a.$0()},
$S:function(){return{func:1}}}
P.iO.prototype={}
P.hh.prototype={}
P.hV.prototype={
e1:function(a,b){var t=this.a
if(t.a!==0)throw H.c(P.j4("Future already completed"))
t.aN(b)}}
P.cO.prototype={
ex:function(a){if(this.c!==6)return!0
H.b(!0)
return this.b.b.b3(this.d,a.a)},
ek:function(a){var t,s
t=(this.c&2)!==0
if(t){H.b(t)
t=this.e!=null}else t=!1
H.b(t)
s=this.e
t=this.b.b
if(H.b5(s,{func:1,args:[P.D,P.aY]}))return t.eD(s,a.a,a.b)
else return t.b3(s,a.a)}}
P.ac.prototype={
cd:function(a,b){var t,s,r
t=$.B
if(t!==C.f){t.toString
if(b!=null)b=P.mF(b,t)}s=new P.ac(0,t,null,[null])
r=b==null?1:3
this.br(new P.cO(null,s,r,a,b,[H.ap(this,0),null]))
return s},
cc:function(a){return this.cd(a,null)},
aJ:function(a){H.b(this.a<4)
H.b(a.a>=4)
this.a=a.a
this.c=a.c},
br:function(a){var t
H.b(a.a==null)
t=this.a
if(t<=1){a.a=H.jn(this.c,"$iscO")
this.c=a}else{if(t===2){H.b(!0)
t=this.c
if(t.a<4){t.br(a)
return}this.aJ(t)}H.b(this.a>=4)
t=this.b
t.toString
P.i2(null,null,t,new P.hr(this,a))}},
bB:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.b(!0)
s=this.c
if(s.a<4){s.bB(a)
return}this.aJ(s)}H.b(this.a>=4)
t.a=this.aw(a)
s=this.b
s.toString
P.i2(null,null,s,new P.hv(t,this))}},
aU:function(){H.b(this.a<4)
var t=this.c
this.c=null
return this.aw(t)},
aw:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aN:function(a){var t,s,r
H.b(this.a<4)
t=this.$ti
s=H.i3(a,"$ises",t,"$ases")
if(s){t=H.i3(a,"$isac",t,null)
if(t)P.kz(a,this)
else P.mw(a,this)}else{r=this.aU()
H.b(this.a<4)
this.a=4
this.c=a
P.bt(this,r)}},
as:function(a,b){var t
H.b(this.a<4)
t=this.aU()
H.b(this.a<4)
this.a=8
this.c=new P.aN(a,b)
P.bt(this,t)},
dt:function(a){return this.as(a,null)},
$ises:1,
gaX:function(){return this.a},
gdK:function(){return this.c}}
P.hr.prototype={
$0:function(){P.bt(this.a,this.b)},
$S:function(){return{func:1}}}
P.hv.prototype={
$0:function(){P.bt(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.hs.prototype={
$1:function(a){var t=this.a
H.b(t.a===1)
H.b(t.a===1)
t.a=0
t.aN(a)},
$S:function(a){return{func:1,args:[,]}}}
P.ht.prototype={
$2:function(a,b){var t=this.a
H.b(t.a===1)
t.as(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(a,b){return{func:1,args:[,],opt:[,]}}}
P.hu.prototype={
$0:function(){this.a.as(this.b,this.c)},
$S:function(){return{func:1}}}
P.hy.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.c
p=q.c
H.b((p&1)===0)
o=(p&2)===0
H.b(o)
t=null
try{H.b(o)
H.b(p===8)
t=q.b.b.ca(q.d)}catch(n){s=H.L(n)
r=H.ao(n)
if(this.d){q=this.a.a
H.b(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.b(q.a===8)
p.b=q.c}else p.b=new P.aN(s,r)
p.a=!0
return}if(!!J.v(t).$ises){if(t instanceof P.ac&&t.gaX()>=4){if(t.gaX()===8){q=t
H.b(q.gaX()===8)
p=this.b
p.b=q.gdK()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.cc(new P.hz(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.hz.prototype={
$1:function(a){return this.a},
$S:function(a){return{func:1,args:[,]}}}
P.hx.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.b((r.c&1)!==0)
this.a.b=r.b.b.b3(r.d,this.c)}catch(q){t=H.L(q)
s=H.ao(q)
r=this.a
r.b=new P.aN(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.hw.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.b(q.a===8)
t=q.c
q=this.c
if(q.ex(t)){H.b((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.ek(t)
p.a=!1}}catch(o){s=H.L(o)
r=H.ao(o)
q=this.a
p=q.a
H.b(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.b(q.a===8)
m.b=q.c}else m.b=new P.aN(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.cG.prototype={}
P.fG.prototype={
gj:function(a){var t,s
t={}
s=new P.ac(0,$.B,null,[P.y])
t.a=0
this.ev(new P.fI(t),!0,new P.fJ(t,s),s.gds())
return s}}
P.fI.prototype={
$1:function(a){++this.a.a},
$S:function(a){return{func:1,args:[,]}}}
P.fJ.prototype={
$0:function(){this.b.aN(this.a.a)},
$S:function(){return{func:1}}}
P.fH.prototype={}
P.j5.prototype={}
P.aN.prototype={
k:function(a){return H.e(this.a)},
$isaR:1}
P.hZ.prototype={}
P.i1.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.cm()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.c(t)
r=H.c(t)
r.stack=s.k(0)
throw r},
$S:function(){return{func:1}}}
P.hL.prototype={
eE:function(a){var t,s,r
try{if(C.f===$.B){a.$0()
return}P.kF(null,null,this,a)}catch(r){t=H.L(r)
s=H.ao(r)
P.i0(null,null,this,t,s)}},
eF:function(a,b){var t,s,r
try{if(C.f===$.B){a.$1(b)
return}P.kG(null,null,this,a,b)}catch(r){t=H.L(r)
s=H.ao(r)
P.i0(null,null,this,t,s)}},
dX:function(a){return new P.hN(this,a)},
aZ:function(a){return new P.hM(this,a)},
dY:function(a){return new P.hO(this,a)},
h:function(a,b){return},
ca:function(a){if($.B===C.f)return a.$0()
return P.kF(null,null,this,a)},
b3:function(a,b){if($.B===C.f)return a.$1(b)
return P.kG(null,null,this,a,b)},
eD:function(a,b,c){if($.B===C.f)return a.$2(b,c)
return P.mG(null,null,this,a,b,c)}}
P.hN.prototype={
$0:function(){return this.a.ca(this.b)},
$S:function(){return{func:1}}}
P.hM.prototype={
$0:function(){return this.a.eE(this.b)},
$S:function(){return{func:1}}}
P.hO.prototype={
$1:function(a){return this.a.eF(this.b,a)},
$S:function(a){return{func:1,args:[,]}}}
P.hF.prototype={
ak:function(a){return H.n6(a)&0x3ffffff},
al:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.hD.prototype={
gB:function(a){var t=new P.bv(this,this.r,null,null,[null])
t.c=this.e
return t},
gj:function(a){return this.a},
E:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.du(b)},
du:function(a){var t=this.d
if(t==null)return!1
return this.au(t[this.at(a)],a)>=0},
c6:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.E(0,a)?a:null
else return this.dE(a)},
dE:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.at(a)]
r=this.au(s,a)
if(r<0)return
return J.b7(s,r).gdw()},
l:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.jf()
this.b=t}return this.bt(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.jf()
this.c=s}return this.bt(s,b)}else return this.V(0,b)},
V:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.jf()
this.d=t}s=this.at(b)
r=t[s]
if(r==null){q=[this.aM(b)]
H.b(q!=null)
t[s]=q}else{if(this.au(r,b)>=0)return!1
r.push(this.aM(b))}return!0},
ao:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bu(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bu(this.c,b)
else return this.dF(0,b)},
dF:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.at(b)]
r=this.au(s,b)
if(r<0)return!1
this.bv(s.splice(r,1)[0])
return!0},
X:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aL()}},
bt:function(a,b){var t
if(a[b]!=null)return!1
t=this.aM(b)
H.b(!0)
a[b]=t
return!0},
bu:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bv(t)
delete a[b]
return!0},
aL:function(){this.r=this.r+1&67108863},
aM:function(a){var t,s
t=new P.hE(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.aL()
return t},
bv:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.aL()},
at:function(a){return J.b8(a)&0x3ffffff},
au:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.C(a[s].a,b))return s
return-1}}
P.hE.prototype={
gdw:function(){return this.a}}
P.bv.prototype={
gu:function(a){return this.d},
t:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.ag(t))
else{t=this.c
if(t==null){this.sad(null)
return!1}else{this.sad(t.a)
this.c=this.c.b
return!0}}},
sad:function(a){this.d=a}}
P.hB.prototype={}
P.iX.prototype={$isk:1}
P.c9.prototype={$isk:1,$isi:1}
P.m.prototype={
gB:function(a){return new H.ca(a,this.gj(a),0,null,[H.a2(a,"m",0)])},
v:function(a,b){return this.h(a,b)},
c7:function(a,b){return new H.bi(a,b,[H.a2(a,"m",0),null])},
ej:function(a,b,c){var t,s,r,q
t=this.gj(a)
for(s=b,r=0;C.b.a_(r,t);++r){s=c.$2(s,this.h(a,r))
q=this.gj(a)
if(t==null?q!=null:t!==q)throw H.c(P.ag(a))}return s},
k:function(a){return P.eA(a,"[","]")}}
P.cb.prototype={}
P.eN.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.e(a)
t.a=s+": "
t.a+=H.e(b)},
$S:function(a,b){return{func:1,args:[,,]}}}
P.aW.prototype={
aj:function(a,b){var t,s
for(t=J.aM(this.gF(a));t.t();){s=t.gu(t)
b.$2(s,this.h(a,s))}},
gj:function(a){return J.b9(this.gF(a))},
k:function(a){return P.k8(a)}}
P.eK.prototype={
d5:function(a,b){var t
H.b(!0)
t=new Array(8)
t.fixed$length=Array
this.sbE(H.z(t,[b]))},
gB:function(a){return new P.hG(this,this.c,this.d,this.b,null,this.$ti)},
gam:function(a){return this.b===this.c},
gj:function(a){return(this.c-this.b&this.a.length-1)>>>0},
v:function(a,b){var t=this.gj(this)
if(C.b.U(0,b)||b>=t)H.H(P.A(b,this,"index",null,t))
return this.a[(C.b.a2(this.b,b)&this.a.length-1)>>>0]},
X:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
k:function(a){return P.eA(this,"{","}")},
c9:function(){var t,s,r
t=this.b
if(t===this.c)throw H.c(H.eB());++this.d
s=this.a
r=s[t]
s[t]=null
this.b=(t+1&s.length-1)>>>0
return r},
V:function(a,b){var t,s
t=this.a
s=this.c
t[s]=b
t=(s+1&t.length-1)>>>0
this.c=t
if(this.b===t)this.bz();++this.d},
bz:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.z(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.bb(s,0,q,t,r)
C.a.bb(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbE(s)},
sbE:function(a){this.a=a}}
P.hG.prototype={
gu:function(a){return this.e},
t:function(){var t,s
t=this.a
if(this.c!==t.d)H.H(P.ag(t))
s=this.d
if(s===this.b){this.sad(null)
return!1}this.sad(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sad:function(a){this.e=a}}
P.fv.prototype={
N:function(a,b){var t
for(t=J.aM(b);t.t();)this.l(0,t.gu(t))},
k:function(a){return P.eA(this,"{","}")},
$isk:1}
P.fu.prototype={}
P.bw.prototype={}
P.af.prototype={}
P.F.prototype={}
P.bc.prototype={
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.bc))return!1
return this.a===b.a&&this.b===b.b},
S:function(a,b){return C.b.S(this.a,b.a)},
gw:function(a){var t=this.a
return(t^C.b.aW(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.lQ(H.mf(this))
s=P.bT(H.md(this))
r=P.bT(H.m9(this))
q=P.bT(H.ma(this))
p=P.bT(H.mc(this))
o=P.bT(H.me(this))
n=P.lR(H.mb(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isF:1,
$asF:function(){return[P.bc]}}
P.V.prototype={}
P.av.prototype={
a_:function(a,b){return C.b.a_(this.a,b.gdv())},
U:function(a,b){return C.b.U(this.a,b.gdv())},
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.av))return!1
return this.a===b.a},
gw:function(a){return this.a&0x1FFFFFFF},
S:function(a,b){return C.b.S(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.dY()
s=this.a
if(s<0)return"-"+new P.av(0-s).k(0)
r=t.$1(C.b.L(s,6e7)%60)
q=t.$1(C.b.L(s,1e6)%60)
p=new P.dX().$1(s%1e6)
return""+C.b.L(s,36e8)+":"+H.e(r)+":"+H.e(q)+"."+H.e(p)},
$isF:1,
$asF:function(){return[P.av]}}
P.dX.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(a){return{func:1,ret:P.p,args:[P.y]}}}
P.dY.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(a){return{func:1,ret:P.p,args:[P.y]}}}
P.aR.prototype={}
P.bQ.prototype={
k:function(a){return"Assertion failed"}}
P.cm.prototype={
k:function(a){return"Throw of null."}}
P.W.prototype={
gaP:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaO:function(){return""},
k:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.e(t)
q=this.gaP()+s+r
if(!this.a)return q
p=this.gaO()
o=P.bZ(this.b)
return q+p+": "+H.e(o)}}
P.co.prototype={
gaP:function(){return"RangeError"},
gaO:function(){var t,s,r
H.b(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.e(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.e(t)
else if(r>t)s=": Not in range "+H.e(t)+".."+H.e(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.e(t)}return s}}
P.ex.prototype={
gaP:function(){return"RangeError"},
gaO:function(){H.b(this.a)
if(J.l3(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.e(t)},
gj:function(a){return this.f}}
P.h2.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.h0.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.aZ.prototype={
k:function(a){return"Bad state: "+this.a}}
P.dH.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.e(P.bZ(t))+"."}}
P.cv.prototype={
k:function(a){return"Stack Overflow"},
$isaR:1}
P.dQ.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.iQ.prototype={}
P.hq.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.e(t)}}
P.e0.prototype={
h:function(a,b){var t,s
t=this.a
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.H(P.iM(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.kb(b,"expando$values")
return s==null?null:H.kb(s,t)},
k:function(a){return"Expando:"+H.e(this.b)}}
P.y.prototype={}
P.P.prototype={
aC:function(a,b){return new H.cF(this,b,[H.a2(this,"P",0)])},
gj:function(a){var t,s
H.b(!this.$isk)
t=this.gB(this)
for(s=0;t.t();)++s
return s},
ga3:function(a){var t,s
t=this.gB(this)
if(!t.t())throw H.c(H.eB())
s=t.gu(t)
if(t.t())throw H.c(H.m7())
return s},
v:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.lI("index"))
if(b<0)H.H(P.aE(b,0,null,"index",null))
for(t=this.gB(this),s=0;t.t();){r=t.gu(t)
if(b===s)return r;++s}throw H.c(P.A(b,this,"index",null,s))},
k:function(a){return P.m5(this,"(",")")}}
P.c6.prototype={}
P.i.prototype={$isk:1}
P.aV.prototype={}
P.K.prototype={
gw:function(a){return P.D.prototype.gw.call(this,this)},
k:function(a){return"null"}}
P.a3.prototype={$isF:1,
$asF:function(){return[P.a3]}}
P.D.prototype={constructor:P.D,$isD:1,
A:function(a,b){return this===b},
gw:function(a){return H.aD(this)},
k:function(a){return"Instance of '"+H.bm(this)+"'"},
gC:function(a){return new H.ak(H.ib(this),null)},
toString:function(){return this.k(this)}}
P.aY.prototype={}
P.p.prototype={$isF:1,
$asF:function(){return[P.p]}}
P.bo.prototype={
gj:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga5:function(){return this.a}}
P.j8.prototype={}
W.j.prototype={}
W.bP.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
W.dx.prototype={
gj:function(a){return a.length}}
W.dy.prototype={
k:function(a){return String(a)}}
W.dz.prototype={
k:function(a){return String(a)}}
W.ar.prototype={$isar:1}
W.bR.prototype={
cz:function(a,b,c){var t=this.dA(a,b,P.mQ(c,null))
return t},
dA:function(a,b,c){return a.getContext(b,c)}}
W.dE.prototype={
aD:function(a){return P.i5(a.getContextAttributes())}}
W.at.prototype={
gj:function(a){return a.length}}
W.dI.prototype={
gj:function(a){return a.length}}
W.dJ.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.dK.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
W.dL.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
W.aP.prototype={
bs:function(a,b){var t,s
t=$.$get$jR()
s=t[b]
if(typeof s==="string")return s
s=this.dO(a,b)
t[b]=s
return s},
dO:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.lS()+b
if(t in a)return t
return b},
gj:function(a){return a.length}}
W.dM.prototype={}
W.X.prototype={}
W.aQ.prototype={}
W.dN.prototype={
gj:function(a){return a.length}}
W.dO.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
W.dP.prototype={
gj:function(a){return a.length}}
W.dR.prototype={
h:function(a,b){return a[b]},
gj:function(a){return a.length}}
W.dS.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
W.bU.prototype={}
W.bd.prototype={
dS:function(a,b){return a.adoptNode(b)},
cA:function(a,b){return a.getElementById(b)},
ez:function(a,b){return a.querySelector(b)}}
W.dT.prototype={
k:function(a){return String(a)}}
W.bV.prototype={
e7:function(a,b){return a.createHTMLDocument(b)}}
W.dU.prototype={
gaB:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
W.bW.prototype={
gaB:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
W.bX.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[P.R]},
$isk:1,
$ask:function(){return[P.R]},
$ist:1,
$ast:function(){return[P.R]},
$asm:function(){return[P.R]},
$isi:1,
$asi:function(){return[P.R]},
$aso:function(){return[P.R]}}
W.bY.prototype={
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.ga9(a))+" x "+H.e(this.ga7(a))},
A:function(a,b){var t
if(b==null)return!1
t=J.v(b)
if(!t.$isR)return!1
return a.left===t.gc4(b)&&a.top===t.gce(b)&&this.ga9(a)===t.ga9(b)&&this.ga7(a)===t.ga7(b)},
gw:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.ga9(a)
q=this.ga7(a)
return W.kD(W.aL(W.aL(W.aL(W.aL(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga7:function(a){return a.height},
gc4:function(a){return a.left},
gce:function(a){return a.top},
ga9:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isR:1,
$asR:function(){}}
W.dV.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[P.p]},
$isk:1,
$ask:function(){return[P.p]},
$ist:1,
$ast:function(){return[P.p]},
$asm:function(){return[P.p]},
$isi:1,
$asi:function(){return[P.p]},
$aso:function(){return[P.p]}}
W.dW.prototype={
gj:function(a){return a.length}}
W.Y.prototype={
gdV:function(a){return new W.hk(a)},
k:function(a){return a.localName},
O:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.jZ
if(t==null){t=H.z([],[W.ck])
s=new W.cl(t)
C.a.l(t,W.kA(null))
C.a.l(t,W.kE())
$.jZ=s
d=s}else d=t
t=$.jY
if(t==null){t=new W.df(d)
$.jY=t
c=t}else{t.a=d
c=t}}if($.ah==null){t=document
s=t.implementation
s=(s&&C.I).e7(s,"")
$.ah=s
$.iP=s.createRange()
s=$.ah
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.ah.head;(t&&C.J).R(t,r)}t=$.ah
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.jn(s,"$isar")}t=$.ah
if(!!this.$isar)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.ah.body;(t&&C.n).R(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.E(C.T,a.tagName)){t=$.iP;(t&&C.B).cC(t,q)
t=$.iP
p=(t&&C.B).e5(t,b)}else{q.innerHTML=b
p=$.ah.createDocumentFragment()
for(t=J.l(p);s=q.firstChild,s!=null;)t.R(p,s)}t=$.ah.body
if(q==null?t!=null:q!==t)J.jA(q)
c.ba(p)
C.p.dS(document,p)
return p},
e6:function(a,b,c){return this.O(a,b,c,null)},
cM:function(a,b,c,d){a.textContent=null
this.R(a,this.O(a,b,c,d))},
cL:function(a,b){return this.cM(a,b,null,null)},
aa:function(a,b){return a.getAttribute(b)},
dG:function(a,b){return a.removeAttribute(b)},
$isY:1,
geG:function(a){return a.tagName}}
W.e_.prototype={
$1:function(a){return!!J.v(a).$isY},
$S:function(a){return{func:1,args:[,]}}}
W.h.prototype={$ish:1}
W.d.prototype={
dn:function(a,b,c,d){return a.addEventListener(b,H.bK(c,1),!1)}}
W.el.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.c0]},
$isk:1,
$ask:function(){return[W.c0]},
$ist:1,
$ast:function(){return[W.c0]},
$asm:function(){return[W.c0]},
$isi:1,
$asi:function(){return[W.c0]},
$aso:function(){return[W.c0]}}
W.em.prototype={
gj:function(a){return a.length}}
W.eq.prototype={
gj:function(a){return a.length}}
W.et.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
W.c4.prototype={}
W.eu.prototype={
gj:function(a){return a.length}}
W.bf.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.r]},
$isk:1,
$ask:function(){return[W.r]},
$ist:1,
$ast:function(){return[W.r]},
$asm:function(){return[W.r]},
$isi:1,
$asi:function(){return[W.r]},
$aso:function(){return[W.r]}}
W.c5.prototype={}
W.ev.prototype={
K:function(a,b){return a.send(b)}}
W.bg.prototype={}
W.az.prototype={$isaz:1}
W.eL.prototype={
k:function(a){return String(a)}}
W.eM.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
W.eR.prototype={
gj:function(a){return a.length}}
W.eT.prototype={
eO:function(a,b,c){return a.send(b,c)},
K:function(a,b){return a.send(b)}}
W.bj.prototype={}
W.eU.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cd]},
$isk:1,
$ask:function(){return[W.cd]},
$ist:1,
$ast:function(){return[W.cd]},
$asm:function(){return[W.cd]},
$isi:1,
$asi:function(){return[W.cd]},
$aso:function(){return[W.cd]}}
W.J.prototype={$isJ:1}
W.N.prototype={
ga3:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.c(P.j4("No elements"))
if(s>1)throw H.c(P.j4("More than one element"))
return t.firstChild},
N:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.l(s),p=0;p<r;++p)q.R(s,t.firstChild)
return},
i:function(a,b,c){var t=this.a
J.l5(t,c,C.z.h(t.childNodes,b))},
gB:function(a){var t=this.a.childNodes
return new W.c1(t,t.length,-1,null,[H.a2(t,"o",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){return C.z.h(this.a.childNodes,b)},
$ask:function(){return[W.r]},
$asc9:function(){return[W.r]},
$asm:function(){return[W.r]},
$asi:function(){return[W.r]},
$asbw:function(){return[W.r]}}
W.r.prototype={
eA:function(a){var t=a.parentNode
if(t!=null)J.iC(t,a)},
k:function(a){var t=a.nodeValue
return t==null?this.cQ(a):t},
R:function(a,b){return a.appendChild(b)},
dH:function(a,b){return a.removeChild(b)},
dI:function(a,b,c){return a.replaceChild(b,c)},
$isr:1,
gb1:function(a){return a.previousSibling}}
W.cj.prototype={
b2:function(a){return a.previousNode()}}
W.bl.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.r]},
$isk:1,
$ask:function(){return[W.r]},
$ist:1,
$ast:function(){return[W.r]},
$asm:function(){return[W.r]},
$isi:1,
$asi:function(){return[W.r]},
$aso:function(){return[W.r]}}
W.a8.prototype={
gj:function(a){return a.length}}
W.fg.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.a8]},
$isk:1,
$ask:function(){return[W.a8]},
$ist:1,
$ast:function(){return[W.a8]},
$asm:function(){return[W.a8]},
$isi:1,
$asi:function(){return[W.a8]},
$aso:function(){return[W.a8]}}
W.fj.prototype={
K:function(a,b){return a.send(b)}}
W.cn.prototype={
e5:function(a,b){return a.createContextualFragment(b)},
cC:function(a,b){return a.selectNodeContents(b)}}
W.cq.prototype={
K:function(a,b){return a.send(b)}}
W.ft.prototype={
gj:function(a){return a.length}}
W.aj.prototype={}
W.fx.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.ct]},
$isk:1,
$ask:function(){return[W.ct]},
$ist:1,
$ast:function(){return[W.ct]},
$asm:function(){return[W.ct]},
$isi:1,
$asi:function(){return[W.ct]},
$aso:function(){return[W.ct]}}
W.fz.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cu]},
$isk:1,
$ask:function(){return[W.cu]},
$ist:1,
$ast:function(){return[W.cu]},
$asm:function(){return[W.cu]},
$isi:1,
$asi:function(){return[W.cu]},
$aso:function(){return[W.cu]}}
W.a9.prototype={
gj:function(a){return a.length}}
W.fE.prototype={
h:function(a,b){return this.by(a,b)},
aj:function(a,b){var t,s
for(t=0;!0;++t){s=this.dD(a,t)
if(s==null)return
b.$2(s,this.by(a,s))}},
gF:function(a){var t=H.z([],[P.p])
this.aj(a,new W.fF(t))
return t},
gj:function(a){return a.length},
by:function(a,b){return a.getItem(b)},
dD:function(a,b){return a.key(b)},
$asaW:function(){return[P.p,P.p]}}
W.fF.prototype={
$2:function(a,b){return C.a.l(this.a,a)},
$S:function(a,b){return{func:1,args:[,,]}}}
W.cx.prototype={
O:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aF(a,b,c,d)
t=W.lU("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.N(s).N(0,new W.N(t))
return s}}
W.fM.prototype={
O:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aF(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.G.O(t.createElement("table"),b,c,d)
t.toString
t=new W.N(t)
r=t.ga3(t)
r.toString
t=new W.N(r)
q=t.ga3(t)
s.toString
q.toString
new W.N(s).N(0,new W.N(q))
return s}}
W.fN.prototype={
O:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aF(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.G.O(t.createElement("table"),b,c,d)
t.toString
t=new W.N(t)
r=t.ga3(t)
s.toString
r.toString
new W.N(s).N(0,new W.N(r))
return s}}
W.bp.prototype={$isbp:1}
W.fP.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cz]},
$isk:1,
$ask:function(){return[W.cz]},
$ist:1,
$ast:function(){return[W.cz]},
$asm:function(){return[W.cz]},
$isi:1,
$asi:function(){return[W.cz]},
$aso:function(){return[W.cz]}}
W.fQ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cy]},
$isk:1,
$ask:function(){return[W.cy]},
$ist:1,
$ast:function(){return[W.cy]},
$asm:function(){return[W.cy]},
$isi:1,
$asi:function(){return[W.cy]},
$aso:function(){return[W.cy]}}
W.fR.prototype={
gj:function(a){return a.length}}
W.aF.prototype={$isaF:1}
W.fV.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cC]},
$isk:1,
$ask:function(){return[W.cC]},
$ist:1,
$ast:function(){return[W.cC]},
$asm:function(){return[W.cC]},
$isi:1,
$asi:function(){return[W.cC]},
$aso:function(){return[W.cC]}}
W.fW.prototype={
gj:function(a){return a.length}}
W.cD.prototype={
b2:function(a){return a.previousNode()}}
W.aG.prototype={}
W.h3.prototype={
k:function(a){return String(a)}}
W.h5.prototype={
gm:function(a){return a.x},
gG:function(a){return a.z}}
W.h6.prototype={
gj:function(a){return a.length}}
W.h7.prototype={
K:function(a,b){return a.send(b)}}
W.aI.prototype={
ge9:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.u("deltaY is not supported"))},
$isaI:1}
W.bs.prototype={
gdU:function(a){var t,s
t=P.a3
s=new P.ac(0,$.B,null,[t])
this.dz(a)
this.dJ(a,W.kJ(new W.h9(new P.hV(s,[t]))))
return s},
dJ:function(a,b){return a.requestAnimationFrame(H.bK(b,1))},
dz:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.h9.prototype={
$1:function(a){this.a.e1(0,a)},
$S:function(a){return{func:1,args:[,]}}}
W.ja.prototype={}
W.hi.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.bS]},
$isk:1,
$ask:function(){return[W.bS]},
$ist:1,
$ast:function(){return[W.bS]},
$asm:function(){return[W.bS]},
$isi:1,
$asi:function(){return[W.bS]},
$aso:function(){return[W.bS]}}
W.hj.prototype={
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
A:function(a,b){var t
if(b==null)return!1
t=J.v(b)
if(!t.$isR)return!1
return a.left===t.gc4(b)&&a.top===t.gce(b)&&a.width===t.ga9(b)&&a.height===t.ga7(b)},
gw:function(a){var t,s,r,q
t=a.left
s=a.top
r=a.width
q=a.height
return W.kD(W.aL(W.aL(W.aL(W.aL(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga7:function(a){return a.height},
ga9:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.hA.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.c2]},
$isk:1,
$ask:function(){return[W.c2]},
$ist:1,
$ast:function(){return[W.c2]},
$asm:function(){return[W.c2]},
$isi:1,
$asi:function(){return[W.c2]},
$aso:function(){return[W.c2]}}
W.cV.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.r]},
$isk:1,
$ask:function(){return[W.r]},
$ist:1,
$ast:function(){return[W.r]},
$asm:function(){return[W.r]},
$isi:1,
$asi:function(){return[W.r]},
$aso:function(){return[W.r]}}
W.hS.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.a9]},
$isk:1,
$ask:function(){return[W.a9]},
$ist:1,
$ast:function(){return[W.a9]},
$asm:function(){return[W.a9]},
$isi:1,
$asi:function(){return[W.a9]},
$aso:function(){return[W.a9]}}
W.hT.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cw]},
$isk:1,
$ask:function(){return[W.cw]},
$ist:1,
$ast:function(){return[W.cw]},
$asm:function(){return[W.cw]},
$isi:1,
$asi:function(){return[W.cw]},
$aso:function(){return[W.cw]}}
W.hf.prototype={
aj:function(a,b){var t,s,r,q,p,o
for(t=this.gF(this),s=t.length,r=this.a,q=J.l(r),p=0;p<t.length;t.length===s||(0,H.I)(t),++p){o=t[p]
b.$2(o,q.aa(r,o))}},
gF:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.z([],[P.p])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.l(s,p.name)}return s},
$ascb:function(){return[P.p,P.p]},
$asaW:function(){return[P.p,P.p]},
gdB:function(){return this.a}}
W.hk.prototype={
h:function(a,b){return J.iK(this.a,b)},
gj:function(a){return this.gF(this).length}}
W.hn.prototype={
ev:function(a,b,c,d){return W.a0(this.a,this.b,a,!1,H.ap(this,0))}}
W.jd.prototype={}
W.ho.prototype={
dh:function(a,b,c,d,e){this.dQ()},
dQ:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.l4(r,this.c,t,!1)}}}
W.hp.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(a){return{func:1,args:[,]}}}
W.bu.prototype={
di:function(a){var t,s
t=$.$get$je()
if(t.gam(t)){for(s=0;s<262;++s)t.i(0,C.S[s],W.mW())
for(s=0;s<12;++s)t.i(0,C.r[s],W.mX())}},
a6:function(a){return $.$get$kB().E(0,W.be(a))},
W:function(a,b,c){var t,s,r
t=W.be(a)
s=$.$get$je()
r=s.h(0,H.e(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)}}
W.o.prototype={
gB:function(a){return new W.c1(a,this.gj(a),-1,null,[H.a2(a,"o",0)])}}
W.cl.prototype={
a6:function(a){return C.a.bJ(this.a,new W.f4(a))},
W:function(a,b,c){return C.a.bJ(this.a,new W.f3(a,b,c))}}
W.f4.prototype={
$1:function(a){return a.a6(this.a)},
$S:function(a){return{func:1,args:[,]}}}
W.f3.prototype={
$1:function(a){return a.W(this.a,this.b,this.c)},
$S:function(a){return{func:1,args:[,]}}}
W.bB.prototype={
dl:function(a,b,c,d){var t,s,r
this.a.N(0,c)
t=b.aC(0,new W.hQ())
s=b.aC(0,new W.hR())
this.b.N(0,t)
r=this.c
r.N(0,C.U)
r.N(0,s)},
a6:function(a){return this.a.E(0,W.be(a))},
W:function(a,b,c){var t,s
t=W.be(a)
s=this.c
if(s.E(0,H.e(t)+"::"+b))return this.d.dT(c)
else if(s.E(0,"*::"+b))return this.d.dT(c)
else{s=this.b
if(s.E(0,H.e(t)+"::"+b))return!0
else if(s.E(0,"*::"+b))return!0
else if(s.E(0,H.e(t)+"::*"))return!0
else if(s.E(0,"*::*"))return!0}return!1}}
W.hQ.prototype={
$1:function(a){return!C.a.E(C.r,a)},
$S:function(a){return{func:1,args:[,]}}}
W.hR.prototype={
$1:function(a){return C.a.E(C.r,a)},
$S:function(a){return{func:1,args:[,]}}}
W.hW.prototype={
W:function(a,b,c){if(this.cT(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.iK(a,"template")==="")return this.e.E(0,b)
return!1}}
W.hX.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)},
$S:function(a){return{func:1,args:[,]}}}
W.hU.prototype={
a6:function(a){var t=J.v(a)
if(!!t.$isbn)return!1
t=!!t.$isw
if(t&&W.be(a)==="foreignObject")return!1
if(t)return!0
return!1},
W:function(a,b,c){if(b==="is"||C.i.be(b,"on"))return!1
return this.a6(a)}}
W.c1.prototype={
t:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbA(J.b7(this.a,t))
this.c=t
return!0}this.sbA(null)
this.c=s
return!1},
gu:function(a){return this.d},
sbA:function(a){this.d=a}}
W.ck.prototype={}
W.j1.prototype={}
W.j9.prototype={}
W.hP.prototype={}
W.df.prototype={
ba:function(a){new W.hY(this).$2(a,null)},
ag:function(a,b){if(b==null)J.jA(a)
else J.iC(b,a)},
dM:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.ln(a)
r=J.iK(s.gdB(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.L(n)}p="element unprintable"
try{p=J.ba(a)}catch(n){H.L(n)}try{o=W.be(a)
this.dL(a,b,t,p,o,s,r)}catch(n){if(H.L(n) instanceof P.W)throw n
else{this.ag(a,b)
window
m="Removing corrupted element "+H.e(p)
if(typeof console!="undefined")window.console.warn(m)}}},
dL:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.ag(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(t)
return}if(!this.a.a6(a)){this.ag(a,b)
window
t="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(t)
return}if(g!=null)if(!this.a.W(a,"is",g)){this.ag(a,b)
window
t="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(t)
return}t=f.gF(f)
s=H.z(t.slice(0),[H.ap(t,0)])
for(r=f.gF(f).length-1,t=f.a,q=J.l(t);r>=0;--r){p=s[r]
if(!this.a.W(a,J.lz(p),q.aa(t,p))){window
o="Removing disallowed attribute <"+H.e(e)+" "+p+'="'+H.e(q.aa(t,p))+'">'
if(typeof console!="undefined")window.console.warn(o)
q.aa(t,p)
q.dG(t,p)}}if(!!J.v(a).$isbp)this.ba(a.content)}}
W.hY.prototype={
$2:function(a,b){var t,s,r,q
r=this.a
switch(a.nodeType){case 1:r.dM(a,b)
break
case 8:case 11:case 3:case 4:break
default:r.ag(a,b)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.lo(t)}catch(q){H.L(q)
r=t
J.iC(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(a,b){return{func:1,v:true,args:[W.r,W.r]}}}
W.cH.prototype={}
W.cI.prototype={}
W.cJ.prototype={}
W.cK.prototype={}
W.cL.prototype={}
W.cM.prototype={}
W.cN.prototype={}
W.cP.prototype={}
W.cQ.prototype={}
W.cT.prototype={}
W.cU.prototype={}
W.cW.prototype={}
W.cX.prototype={}
W.d_.prototype={}
W.d0.prototype={}
W.bC.prototype={}
W.bD.prototype={}
W.d1.prototype={}
W.d2.prototype={}
W.d6.prototype={}
W.d9.prototype={}
W.da.prototype={}
W.bE.prototype={}
W.bF.prototype={}
W.db.prototype={}
W.dc.prototype={}
W.dg.prototype={}
W.dh.prototype={}
W.di.prototype={}
W.dj.prototype={}
W.dk.prototype={}
W.dl.prototype={}
W.dm.prototype={}
W.dn.prototype={}
W.dp.prototype={}
W.dq.prototype={}
P.i4.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(a,b){return{func:1,args:[,,]}}}
P.hK.prototype={}
P.R.prototype={}
P.e1.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e2.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e3.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e4.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e5.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e6.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e7.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e8.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e9.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ea.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eb.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ec.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ed.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ee.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
P.ef.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eg.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
P.eh.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ei.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.en.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ep.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.Z.prototype={}
P.a6.prototype={}
P.ew.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eG.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return this.Z(a,b)},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
Z:function(a,b){return a.getItem(b)},
$isk:1,
$ask:function(){return[P.iW]},
$asm:function(){return[P.iW]},
$isi:1,
$asi:function(){return[P.iW]},
$aso:function(){return[P.iW]}}
P.eP.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.f6.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return this.Z(a,b)},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
Z:function(a,b){return a.getItem(b)},
$isk:1,
$ask:function(){return[P.j2]},
$asm:function(){return[P.j2]},
$isi:1,
$asi:function(){return[P.j2]},
$aso:function(){return[P.j2]}}
P.fe.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fh.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fi.prototype={
gj:function(a){return a.length}}
P.fl.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fm.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bn.prototype={$isbn:1}
P.fK.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return this.Z(a,b)},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
Z:function(a,b){return a.getItem(b)},
$isk:1,
$ask:function(){return[P.p]},
$asm:function(){return[P.p]},
$isi:1,
$asi:function(){return[P.p]},
$aso:function(){return[P.p]}}
P.w.prototype={
O:function(a,b,c,d){var t,s,r,q,p,o
t=H.z([],[W.ck])
C.a.l(t,W.kA(null))
C.a.l(t,W.kE())
C.a.l(t,new W.hU())
c=new W.df(new W.cl(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.n).e6(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.N(q)
o=t.ga3(t)
for(t=J.l(p);r=o.firstChild,r!=null;)t.R(p,r)
return p},
$isw:1}
P.fL.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bq.prototype={}
P.br.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fX.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return this.Z(a,b)},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
Z:function(a,b){return a.getItem(b)},
$isk:1,
$ask:function(){return[P.j7]},
$asm:function(){return[P.j7]},
$isi:1,
$asi:function(){return[P.j7]},
$aso:function(){return[P.j7]}}
P.h4.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.cR.prototype={}
P.cS.prototype={}
P.cY.prototype={}
P.cZ.prototype={}
P.d7.prototype={}
P.d8.prototype={}
P.dd.prototype={}
P.de.prototype={}
P.dB.prototype={
gj:function(a){return a.length}}
P.dC.prototype={
gj:function(a){return a.length}}
P.aO.prototype={}
P.f7.prototype={
gj:function(a){return a.length}}
P.fq.prototype={
bH:function(a,b){return a.activeTexture(b)},
bK:function(a,b,c){return a.attachShader(b,c)},
bL:function(a,b,c){return a.bindBuffer(b,c)},
bM:function(a,b,c){return a.bindFramebuffer(b,c)},
bN:function(a,b,c){return a.bindTexture(b,c)},
bO:function(a,b){return a.blendEquation(b)},
bP:function(a,b,c){return a.blendFunc(b,c)},
bQ:function(a,b,c,d){return a.bufferData(b,c,d)},
bR:function(a,b){return a.clear(b)},
bS:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bT:function(a,b){return a.compileShader(b)},
bU:function(a){return a.createBuffer()},
bV:function(a){return a.createProgram()},
bW:function(a,b){return a.createShader(b)},
bY:function(a,b){return a.depthMask(b)},
bZ:function(a,b){return a.disable(b)},
c_:function(a,b,c,d){return a.drawArrays(b,c,d)},
c0:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c1:function(a,b){return a.enable(b)},
c2:function(a,b){return a.enableVertexAttribArray(b)},
aD:function(a){return P.i5(a.getContextAttributes())},
b5:function(a,b){return a.getProgramInfoLog(b)},
b6:function(a,b,c){return a.getProgramParameter(b,c)},
b7:function(a,b){return a.getShaderInfoLog(b)},
b8:function(a,b,c){return a.getShaderParameter(b,c)},
b9:function(a,b,c){return a.getUniformLocation(b,c)},
c5:function(a,b){return a.linkProgram(b)},
bc:function(a,b,c){return a.shaderSource(b,c)},
bf:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cf:function(a,b,c){return a.uniform1f(b,c)},
cg:function(a,b,c){return a.uniform1fv(b,c)},
ci:function(a,b,c){return a.uniform1i(b,c)},
cj:function(a,b,c){return a.uniform1iv(b,c)},
ck:function(a,b,c){return a.uniform2fv(b,c)},
cl:function(a,b,c){return a.uniform3fv(b,c)},
cm:function(a,b,c){return a.uniform4fv(b,c)},
cn:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
co:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cq:function(a,b){return a.useProgram(b)},
cs:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cu:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fr.prototype={
dW:function(a,b){return a.beginTransformFeedback(b)},
dZ:function(a,b){return a.bindVertexArray(b)},
e8:function(a){return a.createVertexArray()},
ef:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
eg:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
eh:function(a){return a.endTransformFeedback()},
eL:function(a,b,c,d){this.dP(a,b,c,d)
return},
dP:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
eM:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bH:function(a,b){return a.activeTexture(b)},
bK:function(a,b,c){return a.attachShader(b,c)},
bL:function(a,b,c){return a.bindBuffer(b,c)},
bM:function(a,b,c){return a.bindFramebuffer(b,c)},
bN:function(a,b,c){return a.bindTexture(b,c)},
bO:function(a,b){return a.blendEquation(b)},
bP:function(a,b,c){return a.blendFunc(b,c)},
bQ:function(a,b,c,d){return a.bufferData(b,c,d)},
bR:function(a,b){return a.clear(b)},
bS:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bT:function(a,b){return a.compileShader(b)},
bU:function(a){return a.createBuffer()},
bV:function(a){return a.createProgram()},
bW:function(a,b){return a.createShader(b)},
bY:function(a,b){return a.depthMask(b)},
bZ:function(a,b){return a.disable(b)},
c_:function(a,b,c,d){return a.drawArrays(b,c,d)},
c0:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c1:function(a,b){return a.enable(b)},
c2:function(a,b){return a.enableVertexAttribArray(b)},
aD:function(a){return P.i5(a.getContextAttributes())},
b5:function(a,b){return a.getProgramInfoLog(b)},
b6:function(a,b,c){return a.getProgramParameter(b,c)},
b7:function(a,b){return a.getShaderInfoLog(b)},
b8:function(a,b,c){return a.getShaderParameter(b,c)},
b9:function(a,b,c){return a.getUniformLocation(b,c)},
c5:function(a,b){return a.linkProgram(b)},
bc:function(a,b,c){return a.shaderSource(b,c)},
bf:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cf:function(a,b,c){return a.uniform1f(b,c)},
cg:function(a,b,c){return a.uniform1fv(b,c)},
ci:function(a,b,c){return a.uniform1i(b,c)},
cj:function(a,b,c){return a.uniform1iv(b,c)},
ck:function(a,b,c){return a.uniform2fv(b,c)},
cl:function(a,b,c){return a.uniform3fv(b,c)},
cm:function(a,b,c){return a.uniform4fv(b,c)},
cn:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
co:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cq:function(a,b){return a.useProgram(b)},
cs:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cu:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fA.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return P.i5(this.dC(a,b))},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
dC:function(a,b){return a.item(b)},
$isk:1,
$ask:function(){return[P.aV]},
$asm:function(){return[P.aV]},
$isi:1,
$asi:function(){return[P.aV]},
$aso:function(){return[P.aV]}}
P.d3.prototype={}
P.d4.prototype={}
B.iu.prototype={
$1:function(a){$.$get$i6().i(0,a.which,!0)},
$S:function(a){return{func:1,args:[W.az]}}}
B.iv.prototype={
$1:function(a){$.$get$i6().i(0,a.which,null)},
$S:function(a){return{func:1,args:[W.az]}}}
B.iw.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.mO=t
$.mP=C.b.a4(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.jq=s-C.b.L(window.innerWidth,2)
$.kV=-(t-C.b.L(window.innerHeight,2))},
$S:function(a){return{func:1,args:[W.J]}}}
B.ix.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.bN=t-C.b.L(window.innerWidth,2)
$.bO=-(s-C.b.L(window.innerHeight,2))
if(a.button===2)$.$get$bL().i(0,"right",!0)
else $.$get$bL().i(0,"left",!0)},
$S:function(a){return{func:1,args:[W.J]}}}
B.iy.prototype={
$1:function(a){if(a.button===2)$.$get$bL().i(0,"right",null)
else $.$get$bL().i(0,"left",null)},
$S:function(a){return{func:1,args:[W.J]}}}
B.f8.prototype={
d7:function(a,b,c,d){var t
d.toString
W.a0(d,W.lV(d),new B.f9(this),!1,W.aI)
W.a0(d,"mousemove",new B.fa(this),!1,W.J)
t=W.aF
W.a0(d,"touchstart",new B.fb(),!1,t)
W.a0(d,"touchmove",new B.fc(this),!1,t)
B.na(null)}}
B.f9.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.at.ge9(a)*r.k3
if(C.c.a4(r.fy,t)>0)r.fy=C.c.a4(r.fy,t)}catch(q){s=H.L(q)
P.a4(s)}},
$S:function(a){return{func:1,args:[W.aI]}}}
B.fa.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=t.go+C.b.a4($.jq,$.bN)*0.01
s=t.id
r=$.bO
q=$.kV
t.id=s+(r-q)*0.01
$.bN=$.jq
$.bO=q}},
$S:function(a){return{func:1,args:[W.J]}}}
B.fb.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.a8(t.clientX)
C.c.a8(t.clientY)
$.bN=s
C.c.a8(t.clientX)
$.bO=C.c.a8(t.clientY)},
$S:function(a){return{func:1,args:[W.aF]}}}
B.fc.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.a8(t.clientX)
t=C.c.a8(t.clientY)
r=this.a
r.go=r.go+C.b.a4(s,$.bN)*0.01
r.id=r.id+($.bO-t)*0.01
$.bN=s
$.bO=t},
$S:function(a){return{func:1,args:[W.aF]}}}
G.eV.prototype={}
G.cE.prototype={
a1:function(a,b){var t=this.d
if(H.ae(!t.I(0,a)))H.an("uniform "+a+" already set")
t.i(0,a,b)},
bl:function(){return this.d},
k:function(a){var t,s,r,q
t=H.z(["{"+new H.ak(H.ib(this),null).k(0)+"}["+this.a+"]"],[P.p])
for(s=this.d,r=s.gF(s),r=r.gB(r);r.t();){q=r.gu(r)
C.a.l(t,H.e(q)+": "+H.e(s.h(0,q)))}return C.a.an(t,"\n")}}
G.dD.prototype={}
G.dG.prototype={
c3:function(a,b,c){J.ll(this.a,b)
if(c>0)J.lF(this.a,b,c)},
ct:function(a,b,c,d,e,f,g,h){J.iE(this.a,34962,b)
J.lG(this.a,c,d,e,!1,g,h)}}
G.er.prototype={}
G.ej.prototype={}
G.ek.prototype={}
G.c3.prototype={
ar:function(a){var t=this.e
H.b(!t.I(0,a))
H.b(C.i.be(a,"a"))
switch($.$get$S().h(0,a).a){case"vec2":t.i(0,a,H.z([],[T.n]))
break
case"vec3":t.i(0,a,H.z([],[T.f]))
break
case"vec4":t.i(0,a,H.z([],[T.am]))
break
case"float":t.i(0,a,H.z([],[P.V]))
break
case"uvec4":t.i(0,a,H.z([],[[P.i,P.y]]))
break
default:if(H.ae(!1))H.an("unknown type for "+a)}},
cX:function(a){var t,s,r
H.b(!0)
t=this.d.length
for(s=this.b,r=0;r<a;++r,t+=3)C.a.l(s,new G.ej(t,t+1,t+2))},
bh:function(a){var t,s,r
H.b(!0)
t=this.d.length
for(s=this.c,r=0;r<a;++r,t+=4)C.a.l(s,new G.ek(t,t+1,t+2,t+3))},
aI:function(a){var t,s,r,q,p
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.I)(a),++r){q=a[r]
p=new T.f(new Float32Array(3))
p.D(q)
C.a.l(s,p)}},
aH:function(a,b){var t,s,r,q,p,o,n
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.I)(b),++q){p=b[q]
o=new Float32Array(2)
n=p.a
o[1]=n[1]
o[0]=n[0]
r.l(t,new T.n(o))}},
cW:function(a,b){var t,s,r,q,p
t=this.e.h(0,a)
for(s=t&&C.a,r=0;r<4;++r){q=b[r]
p=new T.f(new Float32Array(3))
p.D(q)
s.l(t,p)}},
d1:function(){var t,s,r,q,p,o,n,m,l
t=this.b
H.b(t.length>0||this.c.length>0)
s=this.c
r=new Array(t.length*3+s.length*6)
r.fixed$length=Array
q=H.z(r,[P.y])
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
d2:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=this.d
s=new Array(t.length)
s.fixed$length=Array
r=H.z(s,[T.f])
q=new T.f(new Float32Array(3))
p=new T.f(new Float32Array(3))
for(s=this.b,o=s.length,n=0;n<s.length;s.length===o||(0,H.I)(s),++n){m=s[n]
l=m.a
k=m.b
j=m.c
G.k9(t[l],t[k],t[j],q,p)
i=new T.f(new Float32Array(3))
i.D(p)
r[l]=i
l=new T.f(new Float32Array(3))
l.D(p)
r[k]=l
l=new T.f(new Float32Array(3))
l.D(p)
r[j]=l}for(s=this.c,o=s.length,n=0;n<s.length;s.length===o||(0,H.I)(s),++n){h=s[n]
l=h.a
k=h.b
j=h.c
G.k9(t[l],t[k],t[j],q,p)
i=new T.f(new Float32Array(3))
i.D(p)
r[l]=i
l=new T.f(new Float32Array(3))
l.D(p)
r[k]=l
l=new T.f(new Float32Array(3))
l.D(p)
r[j]=l
l=new T.f(new Float32Array(3))
l.D(p)
r[h.d]=l}this.e.i(0,"aNormal",r)},
k:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gF(s),r=r.gB(r);r.t();){q=r.gu(r)
p=$.$get$S().h(0,q).a
C.a.l(t,H.e(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.an(t," ")}}
G.cB.prototype={}
G.cA.prototype={}
G.eQ.prototype={
d6:function(a){this.a1("cDepthTest",!0)
this.a1("cDepthWrite",!0)
this.a1("cBlendEquation",$.$get$jH())
this.a1("cStencilFunc",$.$get$kg())}}
G.eS.prototype={
bj:function(a,b,c){var t,s
if(C.i.aK(a,0)===105){if(H.ae(C.b.aG(b.length,c)===this.z))H.an("ChangeAttribute "+this.z)}else{t=C.b.aG(b.length,c)
if(H.ae(t===(this.ch.length/3|0)))H.an("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.iE(t.a,34962,s)
J.jw(t.a,34962,b,35048)},
d3:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
ac:function(a,b,c){var t,s,r,q,p,o
t=J.js(a,0)===105
if(t&&this.z===0)this.z=C.b.aG(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.iG(r.a))
this.bj(a,b,c)
q=$.$get$S().h(0,a)
if(q==null)throw H.c("Unknown canonical "+a)
p=this.x
if(H.ae(p.I(0,a)))H.an("unexpected attribute "+a)
o=p.h(0,a)
J.dv(r.a,this.e)
r.c3(0,o,t?1:0)
r.ct(0,s.h(0,a),o,q.bk(),5126,!1,0,0)},
k:function(a){var t,s,r,q
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,r=t.gF(t),r=r.gB(r);r.t();){q=r.gu(r)
C.a.l(s,H.e(q)+":"+t.h(0,q).length)}return"MESH["+this.a+"] "+C.a.an(s,"  ")},
saQ:function(a){this.cx=a}}
G.fd.prototype={
bl:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
t=this.z
s=this.x.d
t.D(s)
r=t.a
r[12]=0
r[13]=0
r[14]=0
r[15]=1
s=s.a
q=-s[12]
p=-s[13]
o=-s[14]
s=J.v(q)
n=!!s.$isam
m=n?s.gaB(q):1
if(!!s.$isf){l=s.gm(q)
p=s.gn(q)
o=s.gG(q)
q=l}else if(n){l=s.gm(q)
p=s.gn(q)
o=s.gG(q)
q=l}else if(!(typeof q==="number")){q=null
p=null
o=null}s=C.c.J(r[0],q)
n=C.c.J(r[4],p)
k=C.c.J(r[8],o)
j=r[12]
i=C.c.J(r[1],q)
h=C.c.J(r[5],p)
g=C.c.J(r[9],o)
f=r[13]
e=C.c.J(r[2],q)
d=C.c.J(r[6],p)
c=C.c.J(r[10],o)
b=r[14]
a=C.c.J(r[3],q)
a0=C.c.J(r[7],p)
a1=C.c.J(r[11],o)
a2=r[15]
r[12]=s+n+k+j*m
r[13]=i+h+g+f*m
r[14]=e+d+c+b*m
r[15]=a+a0+a1+a2*m
a2=this.Q
a2.D(this.y)
a2.c8(0,t)
t=this.d
t.i(0,"uPerspectiveViewMatrix",a2)
return t},
bn:function(){var t,s,r,q,p,o,n,m,l,k,j
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
q.a0(0,0,2/r)
q.a0(1,1,2/l)
q.a0(2,2,-2/k)
q.a0(0,3,-(t+s)/r)
q.a0(1,3,-(o+p)/l)
q.a0(2,3,-(m+n)/k)
q.a0(3,3,1)},
cY:function(a,b){var t=C.b.cw(a,b)
if(this.ch===t)return
this.ch=t
this.bn()}}
G.fp.prototype={
d8:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.I)(t),++o){n=t[o]
r.i(0,n,J.jz(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.I)(t),++o){n=t[o]
r.i(0,n,J.jz(q.a,p,n))}},
dd:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gj(t)===s.gj(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gF(s),s=s.gB(s);s.t();){q=s.gu(s)
if(!t.I(0,q))C.a.l(r,q)}for(t=this.x,s=new P.bv(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.t();){q=s.d
if(!t.E(0,q))C.a.l(r,q)}return r},
df:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gF(b),s=s.gB(s),r=this.d,q=this.y,p=this.z,o=0;s.t();){n=s.gu(s)
switch(J.js(n,0)){case 117:if(q.I(0,n)){m=b.h(0,n)
if(p.I(0,n))H.is("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$S().h(0,n)
if(l==null)H.H("unknown "+n)
H.b(q.I(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.iL(r.a,k,m)
else if(!!J.v(m).$isk2)J.lD(r.a,k,m)
break
case"float":if(l.c===0)J.lB(r.a,k,m)
else if(!!J.v(m).$iseo)J.lC(r.a,k,m)
break
case"mat4":if(l.c===0){n=H.aq(m,"$isE").a
J.jF(r.a,k,!1,n)}else if(!!J.v(m).$iseo)J.jF(r.a,k,!1,m)
else if(H.ae(!1))H.an("bad unform: "+n)
break
case"mat3":if(l.c===0){n=H.aq(m,"$isa_").a
J.jE(r.a,k,!1,n)}else if(!!J.v(m).$iseo)J.jE(r.a,k,!1,m)
else if(H.ae(!1))H.an("bad unform: "+n)
break
case"vec4":n=l.c
j=r.a
if(n===0)J.jD(j,k,H.aq(m,"$isam").a)
else J.jD(j,k,m)
break
case"vec3":n=l.c
j=r.a
if(n===0)J.jC(j,k,H.aq(m,"$isf").a)
else J.jC(j,k,m)
break
case"vec2":n=l.c
j=r.a
if(n===0)J.jB(j,k,H.aq(m,"$isn").a)
else J.jB(j,k,m)
break
case"sampler2D":case"sampler2DShadow":n=C.b.a2(33984,this.ch)
J.jt(r.a,n)
n=H.aq(m,"$ismn").d4()
J.jv(r.a,3553,n)
n=this.ch
J.iL(r.a,k,n)
this.ch=this.ch+1
break
case"samplerCube":H.b(n==="uCubeTexture")
n=C.b.a2(33984,this.ch)
J.jt(r.a,n)
n=H.aq(m,"$ismn").d4()
J.jv(r.a,34067,n)
n=this.ch
J.iL(r.a,k,n)
this.ch=this.ch+1
break
default:H.is("Error: unknow uniform type: "+j)
H.b(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":n=J.C(m,!0)
j=r.a
if(n)J.dw(j,2929)
else J.iH(j,2929)
break
case"cStencilFunc":H.aq(m,"$iscB")
n=m.a
j=r.a
if(n===1281)J.iH(j,2960)
else{J.dw(j,2960)
j=m.b
i=m.c
J.ly(r.a,n,j,i)}break
case"cDepthWrite":J.lf(r.a,m)
break
case"cBlendEquation":H.aq(m,"$iscA")
n=m.a
j=r.a
if(n===1281)J.iH(j,3042)
else{J.dw(j,3042)
j=m.b
i=m.c
J.l9(r.a,j,i)
J.l8(r.a,n)}break}++o
break}}h=P.lT(0,0,0,Date.now()-new P.bc(t,!1).a,0,0)
""+o
h.k(0)},
d0:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
Date.now()
t=this.d
J.lE(t.a,this.r)
this.ch=0
this.z.X(0)
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.I)(b),++r){q=b[r]
this.df(q.a,q.bl())}s=this.Q
s.X(0)
for(p=a.cy,p=p.gF(p),p=p.gB(p);p.t();)s.l(0,p.gu(p))
o=this.dd()
if(o.length!==0)P.a4("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(o)))
s=a.d
p=a.e
J.dv(s.a,p)
n=this.e.f.length>0
p=a.f
s=a.d3()
m=a.Q
l=a.z
if(n)J.l6(t.a,p)
if(m!==-1){k=t.a
if(l>1)J.lj(k,p,s,m,0,l)
else J.li(k,p,s,m,0)}else{m=t.a
if(l>1)J.lh(m,p,0,s,l)
else J.lg(m,p,0,s)}if(n)J.lm(t.a)}}
G.x.prototype={
bk:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.b(!1)
return-1}}}
G.fw.prototype={
cV:function(a){var t,s,r,q
H.b(this.b==null)
for(t=this.c,s=this.x,r=0;r<1;++r){q=a[r]
H.b($.$get$S().I(0,q))
H.b(!C.a.E(t,q))
C.a.l(t,q)
s.i(0,q,this.r);++this.r}C.a.bd(t)},
bi:function(a){var t,s,r,q
H.b(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.I)(a),++r){q=a[r]
if(H.ae($.$get$S().I(0,q)))H.an("missing uniform "+q)
H.b(!C.a.E(s,q))
C.a.l(s,q)}C.a.bd(s)},
d9:function(a,b){H.b(this.b==null)
this.b=this.dg(!0,a,b)},
bm:function(a){return this.d9(a,null)},
dg:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.b(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.I)(t),++o){n=t[o]
m=$.$get$S().h(0,n)
C.a.l(q,"layout (location="+H.e(p.h(0,n))+") in "+m.a+" "+H.e(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,o=0;!1;++o){k=t[o]
m=$.$get$S().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.e(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.I)(t),++o){k=t[o]
m=$.$get$S().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.e(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.I)(t),++o){k=t[o]
m=$.$get$S().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.e(k)+j+";")}C.a.l(q,"")
C.a.l(q,"void main(void) {")
C.a.N(q,b)
C.a.l(q,"}")
return C.a.an(q,"\n")}}
G.fy.prototype={
ab:function(a,b,c){var t=this.d.a
t[12]=a
t[13]=b
t[14]=c}}
R.fC.prototype={
da:function(a,b,c){var t,s,r
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
J.iD(this.a,s)
r=this.dk(b,c,90,30)
this.d=r
J.iD(this.a,r)
t=t.createElement("div")
this.c=t
J.iD(this.a,t)},
dk:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.mv("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.u).bs(r,"float")
r.setProperty(p,"left","")
p=C.u.bs(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.o.R(t,s)}return t}}
R.fD.prototype={
de:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.w.eK(s,2)+" fps"
t=this.c;(t&&C.o).cL(t,b)
r=C.b.L(30*C.w.e_(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.o).R(t,q)}}
A.aC.prototype={
k:function(a){return"NODE["+this.a+"]"}}
A.cr.prototype={}
A.fo.prototype={
d_:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.d
s=this.r
r=this.z
q=this.Q
p=t.a
t=t.b
J.l7(p.a,36160,t)
H.b(r>0&&q>0)
J.lH(p.a,this.x,this.y,r,q)
if(s!==0)J.la(p.a,s)
for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.I)(t),++o){n=t[o]
m=n.e
C.a.l(m,new G.cE(P.Q(),"transforms",!1,!0))
l=new T.E(new Float32Array(16))
l.H()
for(r=n.f,q=r.length,p=n.d,k=0;k<r.length;r.length===q||(0,H.I)(r),++k)A.kO(p,r[k],l,a,m)
m.pop()}},
cZ:function(){return this.d_(null)}}
A.ic.prototype={
$2:function(a,b){var t=536870911&a+J.b8(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(a,b){return{func:1,args:[P.y,P.D]}}}
T.a_.prototype={
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
k:function(a){return"[0] "+this.T(0).k(0)+"\n[1] "+this.T(1).k(0)+"\n[2] "+this.T(2).k(0)+"\n"},
h:function(a,b){return this.a[b]},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.a_){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gw:function(a){return A.ds(this.a)},
T:function(a){var t,s
t=new Float32Array(3)
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.f(t)},
e4:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
T.E.prototype={
a0:function(a,b,c){H.b(a<4)
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
k:function(a){return"[0] "+this.T(0).k(0)+"\n[1] "+this.T(1).k(0)+"\n[2] "+this.T(2).k(0)+"\n[3] "+this.T(3).k(0)+"\n"},
h:function(a,b){return this.a[b]},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.E){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gw:function(a){return A.ds(this.a)},
T:function(a){var t,s
t=new Float32Array(4)
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.am(t)},
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
q:function(a,b){var t=this.a
t[0]=a
t[1]=b},
k:function(a){var t=this.a
return"["+H.e(t[0])+","+H.e(t[1])+"]"},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.n){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gw:function(a){return A.ds(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.f.prototype={
p:function(a,b,c){var t=this.a
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
return"["+H.e(t[0])+","+H.e(t[1])+","+H.e(t[2])+"]"},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.f){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gw:function(a){return A.ds(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){return Math.sqrt(this.gaA())},
gaA:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
b0:function(a){var t,s,r
t=Math.sqrt(this.gaA())
if(t===0)return 0
s=1/t
r=this.a
r[0]=r[0]*s
r[1]=r[1]*s
r[2]=r[2]*s
return t},
b_:function(a){var t,s
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
t=new T.f(new Float32Array(3))
t.p(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
aE:function(a,b){var t,s
t=b.a
s=this.a
s[0]=s[0]-t[0]
s[1]=s[1]-t[1]
s[2]=s[2]-t[2]},
cB:function(a,b){var t=this.a
t[2]=t[2]*b
t[1]=t[1]*b
t[0]=t[0]*b},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gG:function(a){return this.a[2]}}
T.am.prototype={
k:function(a){var t=this.a
return H.e(t[0])+","+H.e(t[1])+","+H.e(t[2])+","+H.e(t[3])},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.am){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gw:function(a){return A.ds(this.a)},
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
gG:function(a){return this.a[2]},
gaB:function(a){return this.a[3]}}
F.iq.prototype={
$1:function(a){var t,s,r
t=this.a
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.a4("size change "+H.e(s)+" "+H.e(r))
this.b.cY(s,r)
t=this.c
t.z=s
t.Q=r},
$S:function(a){return{func:1,v:true,args:[W.h]}}}
F.ip.prototype={
$1:function(b6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
t=this.a
t.a=b6+0
s=this.b
r=s.k4
if(r.h(0,37)!=null)s.go+=0.03
else if(r.h(0,39)!=null)s.go-=0.03
if(r.h(0,38)!=null)s.id+=0.03
else if(r.h(0,40)!=null)s.id-=0.03
if(r.h(0,33)!=null)s.fy*=0.99
else if(r.h(0,34)!=null)s.fy*=1.01
if(r.h(0,32)!=null){s.go=0
s.id=0}r=C.c.e0(s.id,-1.4707963267948965,1.4707963267948965)
s.id=r
q=s.fy
p=s.go
o=q*Math.cos(r)
s.ab(o*Math.cos(p),q*Math.sin(r),o*Math.sin(p))
p=s.k2
r=s.d.a
q=p.a
r[12]=r[12]+q[0]
r[13]=r[13]+q[1]
r[14]=r[14]+q[2]
n=r[12]
m=r[13]
l=r[14]
k=new T.f(new Float32Array(3))
k.p(0,1,0)
q=s.e
j=q.a
j[0]=r[12]
j[1]=r[13]
j[2]=r[14]
j=new Float32Array(3)
i=new T.f(j)
i.D(q)
i.aE(0,p)
i.b0(0)
h=k.bX(i)
h.b0(0)
g=i.bX(h)
g.b0(0)
p=h.b_(q)
f=g.b_(q)
q=i.b_(q)
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
d=s.k1
b=s.f
a=b.a
a[0]=r[2]
a[1]=r[6]
a[2]=r[10]
d=-d
a3=Math.sqrt(b.gaA())
n=a[0]/a3
m=a[1]/a3
l=a[2]/a3
a4=Math.cos(d)
a5=Math.sin(d)
a6=1-a4
a7=n*n*a6+a4
d=l*a5
a8=n*m*a6-d
a=m*a5
a9=n*l*a6+a
b0=m*n*a6+d
b1=m*m*a6+a4
d=n*a5
b2=m*l*a6-d
b3=l*n*a6-a
b4=l*m*a6+d
b5=l*l*a6+a4
d=r[0]
a=r[4]
b=r[8]
a0=r[1]
a1=r[5]
a2=r[9]
e=r[2]
c=r[6]
j=r[10]
p=r[3]
f=r[7]
q=r[11]
r[0]=d*a7+a*b0+b*b3
r[1]=a0*a7+a1*b0+a2*b3
r[2]=e*a7+c*b0+j*b3
r[3]=p*a7+f*b0+q*b3
r[4]=d*a8+a*b1+b*b4
r[5]=a0*a8+a1*b1+a2*b4
r[6]=e*a8+c*b1+j*b4
r[7]=p*a8+f*b1+q*b4
r[8]=d*a9+a*b2+b*b5
r[9]=a0*a9+a1*b2+a2*b5
r[10]=e*a9+c*b2+j*b5
r[11]=p*a9+f*b2+q*b5
s.k1+=0.01
q=s.id
s=s.go
this.c.cZ()
C.au.gdU(window).cc(this)
this.d.de(t.a,H.e(q*180/3.141592653589793)+"<br>"+H.e(s*180/3.141592653589793))},
$S:function(a){return{func:1,v:true,args:[P.a3]}}}
J.a.prototype.cQ=J.a.prototype.k
J.bh.prototype.cS=J.bh.prototype.k
P.P.prototype.cR=P.P.prototype.aC
W.Y.prototype.aF=W.Y.prototype.O
W.bB.prototype.cT=W.bB.prototype.W;(function installTearOffs(){installTearOff(H.b_.prototype,"geu",0,0,0,null,["$0"],["ay"],0)
installTearOff(H.a1.prototype,"gcD",0,0,0,null,["$1"],["M"],2)
installTearOff(H.aJ.prototype,"geb",0,0,0,null,["$1"],["Y"],2)
installTearOff(P,"mK",1,0,0,null,["$1"],["ms"],1)
installTearOff(P,"mL",1,0,0,null,["$1"],["mt"],1)
installTearOff(P,"mM",1,0,0,null,["$1"],["mu"],1)
installTearOff(P,"kN",1,0,0,null,["$0"],["mI"],0)
installTearOff(P.ac.prototype,"gds",0,0,0,null,["$2","$1"],["as","dt"],5)
installTearOff(P,"mR",1,0,0,null,["$2"],["lO"],6)
installTearOff(W,"mW",1,0,0,null,["$4"],["my"],4)
installTearOff(W,"mX",1,0,0,null,["$4"],["mz"],4)
installTearOff(W.cj.prototype,"gb1",0,1,0,null,["$0"],["b2"],3)
installTearOff(W.cD.prototype,"gb1",0,1,0,null,["$0"],["b2"],3)
installTearOff(F,"l2",1,0,0,null,["$0"],["n4"],0)})();(function inheritance(){inherit(P.D,null)
var t=P.D
inherit(H.iT,t)
inherit(J.a,t)
inherit(J.dA,t)
inherit(P.P,t)
inherit(H.ca,t)
inherit(P.c6,t)
inherit(H.aS,t)
inherit(H.au,t)
inherit(H.hI,t)
inherit(H.b_,t)
inherit(H.hl,t)
inherit(H.aK,t)
inherit(H.hH,t)
inherit(H.hg,t)
inherit(H.cp,t)
inherit(H.fS,t)
inherit(H.as,t)
inherit(H.a1,t)
inherit(H.aJ,t)
inherit(H.fn,t)
inherit(H.fY,t)
inherit(P.aR,t)
inherit(H.d5,t)
inherit(H.ak,t)
inherit(P.aW,t)
inherit(H.eH,t)
inherit(H.eJ,t)
inherit(P.iO,t)
inherit(P.hh,t)
inherit(P.cO,t)
inherit(P.ac,t)
inherit(P.cG,t)
inherit(P.fG,t)
inherit(P.fH,t)
inherit(P.j5,t)
inherit(P.aN,t)
inherit(P.hZ,t)
inherit(P.fv,t)
inherit(P.hE,t)
inherit(P.bv,t)
inherit(P.iX,t)
inherit(P.bw,t)
inherit(P.m,t)
inherit(P.hG,t)
inherit(P.af,t)
inherit(P.F,t)
inherit(P.bc,t)
inherit(P.a3,t)
inherit(P.av,t)
inherit(P.cv,t)
inherit(P.iQ,t)
inherit(P.hq,t)
inherit(P.e0,t)
inherit(P.i,t)
inherit(P.aV,t)
inherit(P.K,t)
inherit(P.aY,t)
inherit(P.p,t)
inherit(P.bo,t)
inherit(P.j8,t)
inherit(W.dM,t)
inherit(W.bu,t)
inherit(W.o,t)
inherit(W.cl,t)
inherit(W.bB,t)
inherit(W.hU,t)
inherit(W.c1,t)
inherit(W.ck,t)
inherit(W.j1,t)
inherit(W.j9,t)
inherit(W.hP,t)
inherit(W.df,t)
inherit(P.hK,t)
inherit(G.eV,t)
inherit(G.dG,t)
inherit(G.er,t)
inherit(G.ej,t)
inherit(G.ek,t)
inherit(G.c3,t)
inherit(G.cB,t)
inherit(G.cA,t)
inherit(G.x,t)
inherit(G.fw,t)
inherit(R.fC,t)
inherit(T.a_,t)
inherit(T.E,t)
inherit(T.n,t)
inherit(T.f,t)
inherit(T.am,t)
t=J.a
inherit(J.eC,t)
inherit(J.eD,t)
inherit(J.bh,t)
inherit(J.aw,t)
inherit(J.aT,t)
inherit(J.ax,t)
inherit(H.bk,t)
inherit(H.aX,t)
inherit(W.d,t)
inherit(W.dx,t)
inherit(W.dE,t)
inherit(W.aQ,t)
inherit(W.X,t)
inherit(W.cH,t)
inherit(W.dR,t)
inherit(W.dS,t)
inherit(W.dT,t)
inherit(W.bV,t)
inherit(W.bW,t)
inherit(W.cI,t)
inherit(W.bY,t)
inherit(W.cK,t)
inherit(W.dW,t)
inherit(W.h,t)
inherit(W.cM,t)
inherit(W.eu,t)
inherit(W.cP,t)
inherit(W.eL,t)
inherit(W.eR,t)
inherit(W.cT,t)
inherit(W.cj,t)
inherit(W.cW,t)
inherit(W.a8,t)
inherit(W.d_,t)
inherit(W.cn,t)
inherit(W.d1,t)
inherit(W.a9,t)
inherit(W.d6,t)
inherit(W.d9,t)
inherit(W.fR,t)
inherit(W.db,t)
inherit(W.fW,t)
inherit(W.cD,t)
inherit(W.h3,t)
inherit(W.h5,t)
inherit(W.dg,t)
inherit(W.di,t)
inherit(W.dk,t)
inherit(W.dm,t)
inherit(W.dp,t)
inherit(P.cR,t)
inherit(P.cY,t)
inherit(P.fh,t)
inherit(P.fi,t)
inherit(P.fl,t)
inherit(P.d7,t)
inherit(P.dd,t)
inherit(P.dB,t)
inherit(P.fq,t)
inherit(P.fr,t)
inherit(P.d3,t)
t=J.bh
inherit(J.ff,t)
inherit(J.aH,t)
inherit(J.ay,t)
inherit(J.iS,J.aw)
t=J.aT
inherit(J.c8,t)
inherit(J.c7,t)
t=P.P
inherit(H.k,t)
inherit(H.cc,t)
inherit(H.cF,t)
t=H.k
inherit(H.aU,t)
inherit(H.eI,t)
inherit(H.dZ,H.cc)
t=P.c6
inherit(H.eO,t)
inherit(H.h8,t)
t=H.aU
inherit(H.bi,t)
inherit(P.eK,t)
t=H.au
inherit(H.iz,t)
inherit(H.iA,t)
inherit(H.hC,t)
inherit(H.hm,t)
inherit(H.ey,t)
inherit(H.ez,t)
inherit(H.hJ,t)
inherit(H.fT,t)
inherit(H.fU,t)
inherit(H.iB,t)
inherit(H.ii,t)
inherit(H.ij,t)
inherit(H.ik,t)
inherit(H.il,t)
inherit(H.im,t)
inherit(H.fO,t)
inherit(H.eE,t)
inherit(H.id,t)
inherit(H.ie,t)
inherit(H.ig,t)
inherit(P.hc,t)
inherit(P.hb,t)
inherit(P.hd,t)
inherit(P.he,t)
inherit(P.hr,t)
inherit(P.hv,t)
inherit(P.hs,t)
inherit(P.ht,t)
inherit(P.hu,t)
inherit(P.hy,t)
inherit(P.hz,t)
inherit(P.hx,t)
inherit(P.hw,t)
inherit(P.fI,t)
inherit(P.fJ,t)
inherit(P.i1,t)
inherit(P.hN,t)
inherit(P.hM,t)
inherit(P.hO,t)
inherit(P.eN,t)
inherit(P.dX,t)
inherit(P.dY,t)
inherit(W.e_,t)
inherit(W.fF,t)
inherit(W.h9,t)
inherit(W.hp,t)
inherit(W.f4,t)
inherit(W.f3,t)
inherit(W.hQ,t)
inherit(W.hR,t)
inherit(W.hX,t)
inherit(W.hY,t)
inherit(P.i4,t)
inherit(B.iu,t)
inherit(B.iv,t)
inherit(B.iw,t)
inherit(B.ix,t)
inherit(B.iy,t)
inherit(B.f9,t)
inherit(B.fa,t)
inherit(B.fb,t)
inherit(B.fc,t)
inherit(A.ic,t)
inherit(F.iq,t)
inherit(F.ip,t)
t=H.hg
inherit(H.b1,t)
inherit(H.bG,t)
t=P.aR
inherit(H.f5,t)
inherit(H.eF,t)
inherit(H.h1,t)
inherit(H.h_,t)
inherit(H.dF,t)
inherit(H.fs,t)
inherit(P.bQ,t)
inherit(P.cm,t)
inherit(P.W,t)
inherit(P.h2,t)
inherit(P.h0,t)
inherit(P.aZ,t)
inherit(P.dH,t)
inherit(P.dQ,t)
t=H.fO
inherit(H.fB,t)
inherit(H.bb,t)
inherit(H.ha,P.bQ)
inherit(P.cb,P.aW)
t=P.cb
inherit(H.a7,t)
inherit(W.hf,t)
t=H.aX
inherit(H.eW,t)
inherit(H.cf,t)
t=H.cf
inherit(H.bx,t)
inherit(H.bz,t)
inherit(H.by,H.bx)
inherit(H.cg,H.by)
inherit(H.bA,H.bz)
inherit(H.ch,H.bA)
t=H.cg
inherit(H.ce,t)
inherit(H.eX,t)
t=H.ch
inherit(H.eY,t)
inherit(H.eZ,t)
inherit(H.f_,t)
inherit(H.f0,t)
inherit(H.f1,t)
inherit(H.ci,t)
inherit(H.f2,t)
inherit(P.hV,P.hh)
inherit(P.hL,P.hZ)
inherit(P.hF,H.a7)
inherit(P.fu,P.fv)
inherit(P.hB,P.fu)
inherit(P.hD,P.hB)
inherit(P.c9,P.bw)
t=P.a3
inherit(P.V,t)
inherit(P.y,t)
t=P.W
inherit(P.co,t)
inherit(P.ex,t)
t=W.d
inherit(W.r,t)
inherit(W.aj,t)
inherit(W.em,t)
inherit(W.bg,t)
inherit(W.bj,t)
inherit(W.fj,t)
inherit(W.cq,t)
inherit(W.bC,t)
inherit(W.bE,t)
inherit(W.h6,t)
inherit(W.h7,t)
inherit(W.bs,t)
inherit(W.ja,t)
inherit(P.dC,t)
inherit(P.aO,t)
t=W.r
inherit(W.Y,t)
inherit(W.at,t)
inherit(W.bd,t)
t=W.Y
inherit(W.j,t)
inherit(P.w,t)
t=W.aj
inherit(W.bP,t)
inherit(W.et,t)
inherit(W.eM,t)
t=W.j
inherit(W.dy,t)
inherit(W.dz,t)
inherit(W.ar,t)
inherit(W.bR,t)
inherit(W.bU,t)
inherit(W.eq,t)
inherit(W.c4,t)
inherit(W.ft,t)
inherit(W.cx,t)
inherit(W.fM,t)
inherit(W.fN,t)
inherit(W.bp,t)
t=W.aQ
inherit(W.dI,t)
inherit(W.dK,t)
inherit(W.dL,t)
inherit(W.dO,t)
t=W.X
inherit(W.dJ,t)
inherit(W.dN,t)
inherit(W.dP,t)
inherit(W.aP,W.cH)
inherit(W.dU,W.bW)
inherit(W.cJ,W.cI)
inherit(W.bX,W.cJ)
inherit(W.cL,W.cK)
inherit(W.dV,W.cL)
inherit(W.cN,W.cM)
inherit(W.el,W.cN)
inherit(W.cQ,W.cP)
inherit(W.bf,W.cQ)
inherit(W.c5,W.bd)
inherit(W.ev,W.bg)
inherit(W.aG,W.h)
t=W.aG
inherit(W.az,t)
inherit(W.J,t)
inherit(W.aF,t)
inherit(W.eT,W.bj)
inherit(W.cU,W.cT)
inherit(W.eU,W.cU)
inherit(W.N,P.c9)
inherit(W.cX,W.cW)
inherit(W.bl,W.cX)
inherit(W.d0,W.d_)
inherit(W.fg,W.d0)
inherit(W.bD,W.bC)
inherit(W.fx,W.bD)
inherit(W.d2,W.d1)
inherit(W.fz,W.d2)
inherit(W.fE,W.d6)
inherit(W.da,W.d9)
inherit(W.fP,W.da)
inherit(W.bF,W.bE)
inherit(W.fQ,W.bF)
inherit(W.dc,W.db)
inherit(W.fV,W.dc)
inherit(W.aI,W.J)
inherit(W.dh,W.dg)
inherit(W.hi,W.dh)
inherit(W.hj,W.bY)
inherit(W.dj,W.di)
inherit(W.hA,W.dj)
inherit(W.dl,W.dk)
inherit(W.cV,W.dl)
inherit(W.dn,W.dm)
inherit(W.hS,W.dn)
inherit(W.dq,W.dp)
inherit(W.hT,W.dq)
inherit(W.hk,W.hf)
inherit(W.hn,P.fG)
inherit(W.jd,W.hn)
inherit(W.ho,P.fH)
inherit(W.hW,W.bB)
inherit(P.R,P.hK)
t=P.w
inherit(P.e1,t)
inherit(P.e2,t)
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
inherit(P.en,t)
inherit(P.a6,t)
inherit(P.eP,t)
inherit(P.fe,t)
inherit(P.bn,t)
t=P.a6
inherit(P.ep,t)
inherit(P.Z,t)
inherit(P.ew,t)
inherit(P.fL,t)
inherit(P.bq,t)
inherit(P.h4,t)
inherit(P.cS,P.cR)
inherit(P.eG,P.cS)
inherit(P.cZ,P.cY)
inherit(P.f6,P.cZ)
inherit(P.fm,P.Z)
inherit(P.d8,P.d7)
inherit(P.fK,P.d8)
inherit(P.br,P.bq)
inherit(P.de,P.dd)
inherit(P.fX,P.de)
inherit(P.f7,P.aO)
inherit(P.d4,P.d3)
inherit(P.fA,P.d4)
t=G.eV
inherit(G.fy,t)
inherit(G.cE,t)
inherit(G.eS,t)
inherit(G.fp,t)
inherit(A.cr,t)
inherit(A.fo,t)
t=G.fy
inherit(G.dD,t)
inherit(A.aC,t)
inherit(B.f8,G.dD)
t=G.cE
inherit(G.eQ,t)
inherit(G.fd,t)
inherit(R.fD,R.fC)
mixin(H.bx,P.m)
mixin(H.by,H.aS)
mixin(H.bz,P.m)
mixin(H.bA,H.aS)
mixin(P.bw,P.m)
mixin(W.cH,W.dM)
mixin(W.cI,P.m)
mixin(W.cJ,W.o)
mixin(W.cK,P.m)
mixin(W.cL,W.o)
mixin(W.cM,P.m)
mixin(W.cN,W.o)
mixin(W.cP,P.m)
mixin(W.cQ,W.o)
mixin(W.cT,P.m)
mixin(W.cU,W.o)
mixin(W.cW,P.m)
mixin(W.cX,W.o)
mixin(W.d_,P.m)
mixin(W.d0,W.o)
mixin(W.bC,P.m)
mixin(W.bD,W.o)
mixin(W.d1,P.m)
mixin(W.d2,W.o)
mixin(W.d6,P.aW)
mixin(W.d9,P.m)
mixin(W.da,W.o)
mixin(W.bE,P.m)
mixin(W.bF,W.o)
mixin(W.db,P.m)
mixin(W.dc,W.o)
mixin(W.dg,P.m)
mixin(W.dh,W.o)
mixin(W.di,P.m)
mixin(W.dj,W.o)
mixin(W.dk,P.m)
mixin(W.dl,W.o)
mixin(W.dm,P.m)
mixin(W.dn,W.o)
mixin(W.dp,P.m)
mixin(W.dq,W.o)
mixin(P.cR,P.m)
mixin(P.cS,W.o)
mixin(P.cY,P.m)
mixin(P.cZ,W.o)
mixin(P.d7,P.m)
mixin(P.d8,W.o)
mixin(P.dd,P.m)
mixin(P.de,W.o)
mixin(P.d3,P.m)
mixin(P.d4,W.o)})();(function constants(){C.n=W.ar.prototype
C.H=W.bR.prototype
C.u=W.aP.prototype
C.o=W.bU.prototype
C.I=W.bV.prototype
C.J=W.c4.prototype
C.p=W.c5.prototype
C.K=J.a.prototype
C.a=J.aw.prototype
C.w=J.c7.prototype
C.b=J.c8.prototype
C.c=J.aT.prototype
C.i=J.ax.prototype
C.R=J.ay.prototype
C.V=H.ce.prototype
C.z=W.bl.prototype
C.A=J.ff.prototype
C.B=W.cn.prototype
C.G=W.cx.prototype
C.t=J.aH.prototype
C.at=W.aI.prototype
C.au=W.bs.prototype
C.f=new P.hL()
C.v=new P.av(0)
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
C.S=H.z(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.p])
C.T=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.U=makeConstList([])
C.q=H.z(makeConstList(["bind","if","ref","repeat","syntax"]),[P.p])
C.r=H.z(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.p])
C.W=new G.x("vec3","vertex btangents",0)
C.d=new G.x("vec3","",0)
C.X=new G.x("vec4","delta from light",0)
C.m=new G.x("","",0)
C.C=new G.x("vec3","vertex coordinates",0)
C.Y=new G.x("vec3","vertex binormals",0)
C.D=new G.x("vec4","for wireframe",0)
C.Z=new G.x("vec4","per vertex color",0)
C.a_=new G.x("float","for normal maps",0)
C.j=new G.x("mat4","",0)
C.a1=new G.x("mat4","",4)
C.a0=new G.x("mat4","",128)
C.e=new G.x("float","",0)
C.a2=new G.x("float","",4)
C.a3=new G.x("float","depth for shadowmaps",0)
C.h=new G.x("sampler2D","",0)
C.a4=new G.x("float","for bump maps",0)
C.a5=new G.x("vec2","texture uvs",0)
C.a6=new G.x("float","time since program start in sec",0)
C.k=new G.x("vec2","",0)
C.a7=new G.x("samplerCube","",0)
C.l=new G.x("vec4","",0)
C.a8=new G.x("vec3","vertex normals",0)
C.a9=new G.x("sampler2DShadow","",0)
C.E=new G.x("vec3","per vertex color",0)
C.F=new G.x("mat3","",0)
C.aa=new G.x("vec3","vertex tangents",0)
C.ab=H.G("ne")
C.ac=H.G("nf")
C.ad=H.G("eo")
C.ae=H.G("ng")
C.af=H.G("nh")
C.ag=H.G("k2")
C.ah=H.G("ni")
C.ai=H.G("k5")
C.aj=H.G("K")
C.ak=H.G("p")
C.al=H.G("kt")
C.am=H.G("ku")
C.an=H.G("nj")
C.ao=H.G("kv")
C.ap=H.G("af")
C.aq=H.G("V")
C.ar=H.G("y")
C.as=H.G("a3")})();(function staticFields(){$.kc="$cachedFunction"
$.kd="$cachedInvocation"
$.jL=null
$.jJ=null
$.jg=!1
$.jl=null
$.kK=null
$.kX=null
$.i7=null
$.ih=null
$.jm=null
$.b2=null
$.bH=null
$.bI=null
$.jh=!1
$.B=C.f
$.k_=0
$.ah=null
$.iP=null
$.jZ=null
$.jY=null
$.jW=null
$.jV=null
$.jU=null
$.jT=null
$.mO=0
$.mP=0
$.jq=0
$.kV=0
$.bN=0
$.bO=0
$.nb=!1
$.kP=0})();(function lazyInitializers(){lazy($,"jS","$get$jS",function(){return H.kS("_$dart_dartClosure")})
lazy($,"iU","$get$iU",function(){return H.kS("_$dart_js")})
lazy($,"k3","$get$k3",function(){return H.m3()})
lazy($,"k4","$get$k4",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.k_
$.k_=t+1
t="expando$key$"+t}return new P.e0(t,null,[P.y])})
lazy($,"ki","$get$ki",function(){return H.aa(H.fZ({
toString:function(){return"$receiver$"}}))})
lazy($,"kj","$get$kj",function(){return H.aa(H.fZ({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"kk","$get$kk",function(){return H.aa(H.fZ(null))})
lazy($,"kl","$get$kl",function(){return H.aa(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kp","$get$kp",function(){return H.aa(H.fZ(void 0))})
lazy($,"kq","$get$kq",function(){return H.aa(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kn","$get$kn",function(){return H.aa(H.ko(null))})
lazy($,"km","$get$km",function(){return H.aa(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"ks","$get$ks",function(){return H.aa(H.ko(void 0))})
lazy($,"kr","$get$kr",function(){return H.aa(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"jc","$get$jc",function(){return P.mr()})
lazy($,"bJ","$get$bJ",function(){return[]})
lazy($,"jR","$get$jR",function(){return{}})
lazy($,"kB","$get$kB",function(){return P.iY(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"je","$get$je",function(){return P.Q()})
lazy($,"i6","$get$i6",function(){return P.k6(P.y,P.af)})
lazy($,"bL","$get$bL",function(){return P.k6(P.p,P.af)})
lazy($,"kg","$get$kg",function(){return new G.cB(1281,0,4294967295)})
lazy($,"jH","$get$jH",function(){return new G.cA(1281,1281,1281)})
lazy($,"S","$get$S",function(){return P.aA(["cBlendEquation",C.m,"cDepthWrite",C.m,"cDepthTest",C.m,"cStencilFunc",C.m,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColors",C.E,"aColorAlpha",C.Z,"aPosition",C.C,"aTexUV",C.a5,"aNormal",C.a8,"aBinormal",C.Y,"aCenter",C.D,"aPointSize",C.e,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.aa,"aBitangent",C.W,"iaRotation",C.l,"iaTranslation",C.d,"iaScale",C.d,"vColor",C.E,"vTexUV",C.k,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.C,"vPositionFromLight",C.X,"vCenter",C.D,"vDepth",C.a3,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.F,"uConvolutionMatrix",C.F,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a9,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a7,"uAnimationTable",C.h,"uTime",C.a6,"uCameraNear",C.e,"uCameraFar",C.e,"uFogNear",C.e,"uFogFar",C.e,"uPointSize",C.e,"uScale",C.e,"uAngle",C.e,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.e,"uShininess",C.e,"uShadowBias",C.e,"uOpacity",C.e,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.d,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a0,"uLightDescs",C.a1,"uLightCount",C.e,"uLightTypes",C.a2,"uBumpScale",C.a4,"uNormalScale",C.a_])})
lazy($,"jO","$get$jO",function(){return T.al(0,0,1)})
lazy($,"jQ","$get$jQ",function(){return T.al(1,0,0)})
lazy($,"jP","$get$jP",function(){return T.al(0,1,0)})
lazy($,"l_","$get$l_",function(){var t=G.kf("SolidColor")
t.cV(["aPosition"])
t.bi(["uPerspectiveViewMatrix","uModelMatrix"])
t.bm(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"])
return t})
lazy($,"kZ","$get$kZ",function(){var t=G.kf("SolidColorF")
t.bi(["uColor"])
t.bm(["oFragColor = vec4( uColor, 1.0 );"])
return t})
lazy($,"ky","$get$ky",function(){return[T.al(0,0,1),T.al(0,0,-1),T.al(0,1,0),T.al(0,-1,0),T.al(1,0,0),T.al(-1,0,0)]})})()
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
mangledGlobalNames:{y:"int",V:"double",a3:"num",p:"String",af:"bool",K:"Null",i:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.r},{func:1,ret:P.af,args:[W.Y,P.p,P.p,W.bu]},{func:1,v:true,args:[P.D],opt:[P.aY]},{func:1,ret:P.y,args:[P.F,P.F]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,Blob:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSCharsetRule:J.a,CSSConditionRule:J.a,CSSFontFaceRule:J.a,CSSGroupingRule:J.a,CSSImportRule:J.a,CSSKeyframeRule:J.a,MozCSSKeyframeRule:J.a,WebKitCSSKeyframeRule:J.a,CSSKeyframesRule:J.a,MozCSSKeyframesRule:J.a,WebKitCSSKeyframesRule:J.a,CSSMediaRule:J.a,CSSNamespaceRule:J.a,CSSPageRule:J.a,CSSRule:J.a,CSSStyleRule:J.a,CSSStyleSheet:J.a,CSSSupportsRule:J.a,CSSVariableReferenceValue:J.a,CSSViewportRule:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,File:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,Gamepad:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MimeType:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechGrammar:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,StyleSheet:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,Touch:J.a,TrackDefault:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGLength:J.a,SVGMatrix:J.a,SVGNumber:J.a,SVGPreserveAspectRatio:J.a,SVGTransform:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioParamMap:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bk,ArrayBufferView:H.aX,DataView:H.eW,Float32Array:H.ce,Float64Array:H.eX,Int16Array:H.eY,Int32Array:H.eZ,Int8Array:H.f_,Uint16Array:H.f0,Uint32Array:H.f1,Uint8ClampedArray:H.ci,CanvasPixelArray:H.ci,Uint8Array:H.f2,HTMLAudioElement:W.j,HTMLBRElement:W.j,HTMLBaseElement:W.j,HTMLButtonElement:W.j,HTMLContentElement:W.j,HTMLDListElement:W.j,HTMLDataElement:W.j,HTMLDataListElement:W.j,HTMLDetailsElement:W.j,HTMLDialogElement:W.j,HTMLEmbedElement:W.j,HTMLFieldSetElement:W.j,HTMLHRElement:W.j,HTMLHeadingElement:W.j,HTMLHtmlElement:W.j,HTMLIFrameElement:W.j,HTMLImageElement:W.j,HTMLInputElement:W.j,HTMLLIElement:W.j,HTMLLabelElement:W.j,HTMLLegendElement:W.j,HTMLLinkElement:W.j,HTMLMapElement:W.j,HTMLMediaElement:W.j,HTMLMenuElement:W.j,HTMLMetaElement:W.j,HTMLMeterElement:W.j,HTMLModElement:W.j,HTMLOListElement:W.j,HTMLObjectElement:W.j,HTMLOptGroupElement:W.j,HTMLOptionElement:W.j,HTMLOutputElement:W.j,HTMLParagraphElement:W.j,HTMLParamElement:W.j,HTMLPictureElement:W.j,HTMLPreElement:W.j,HTMLProgressElement:W.j,HTMLQuoteElement:W.j,HTMLScriptElement:W.j,HTMLShadowElement:W.j,HTMLSlotElement:W.j,HTMLSourceElement:W.j,HTMLSpanElement:W.j,HTMLStyleElement:W.j,HTMLTableCaptionElement:W.j,HTMLTableCellElement:W.j,HTMLTableDataCellElement:W.j,HTMLTableHeaderCellElement:W.j,HTMLTableColElement:W.j,HTMLTextAreaElement:W.j,HTMLTimeElement:W.j,HTMLTitleElement:W.j,HTMLTrackElement:W.j,HTMLUListElement:W.j,HTMLUnknownElement:W.j,HTMLVideoElement:W.j,HTMLDirectoryElement:W.j,HTMLFontElement:W.j,HTMLFrameElement:W.j,HTMLFrameSetElement:W.j,HTMLMarqueeElement:W.j,HTMLElement:W.j,Accelerometer:W.bP,LinearAccelerationSensor:W.bP,AccessibleNodeList:W.dx,HTMLAnchorElement:W.dy,HTMLAreaElement:W.dz,HTMLBodyElement:W.ar,HTMLCanvasElement:W.bR,CanvasRenderingContext2D:W.dE,CDATASection:W.at,CharacterData:W.at,Comment:W.at,ProcessingInstruction:W.at,Text:W.at,CSSPerspective:W.dI,CSSPositionValue:W.dJ,CSSRotation:W.dK,CSSScale:W.dL,CSSStyleDeclaration:W.aP,MSStyleCSSProperties:W.aP,CSS2Properties:W.aP,CSSImageValue:W.X,CSSKeywordValue:W.X,CSSNumericValue:W.X,CSSResourceValue:W.X,CSSUnitValue:W.X,CSSURLImageValue:W.X,CSSStyleValue:W.X,CSSMatrixComponent:W.aQ,CSSSkew:W.aQ,CSSTransformComponent:W.aQ,CSSTransformValue:W.dN,CSSTranslation:W.dO,CSSUnparsedValue:W.dP,DataTransferItemList:W.dR,DeviceAcceleration:W.dS,HTMLDivElement:W.bU,XMLDocument:W.bd,Document:W.bd,DOMException:W.dT,DOMImplementation:W.bV,DOMPoint:W.dU,DOMPointReadOnly:W.bW,ClientRectList:W.bX,DOMRectList:W.bX,DOMRectReadOnly:W.bY,DOMStringList:W.dV,DOMTokenList:W.dW,Element:W.Y,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,AccessibleNode:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RemotePlayback:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SourceBuffer:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,TextTrack:W.d,TextTrackCue:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,VTTCue:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,ServiceWorker:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,FileList:W.el,FileWriter:W.em,HTMLFormElement:W.eq,Gyroscope:W.et,HTMLHeadElement:W.c4,History:W.eu,HTMLCollection:W.bf,HTMLFormControlsCollection:W.bf,HTMLOptionsCollection:W.bf,HTMLDocument:W.c5,XMLHttpRequest:W.ev,XMLHttpRequestUpload:W.bg,XMLHttpRequestEventTarget:W.bg,KeyboardEvent:W.az,Location:W.eL,Magnetometer:W.eM,MediaList:W.eR,MIDIOutput:W.eT,MIDIInput:W.bj,MIDIPort:W.bj,MimeTypeArray:W.eU,PointerEvent:W.J,MouseEvent:W.J,DragEvent:W.J,DocumentFragment:W.r,ShadowRoot:W.r,Attr:W.r,DocumentType:W.r,Node:W.r,NodeIterator:W.cj,NodeList:W.bl,RadioNodeList:W.bl,Plugin:W.a8,PluginArray:W.fg,PresentationConnection:W.fj,Range:W.cn,RTCDataChannel:W.cq,DataChannel:W.cq,HTMLSelectElement:W.ft,AbsoluteOrientationSensor:W.aj,AmbientLightSensor:W.aj,OrientationSensor:W.aj,RelativeOrientationSensor:W.aj,Sensor:W.aj,SourceBufferList:W.fx,SpeechGrammarList:W.fz,SpeechRecognitionResult:W.a9,Storage:W.fE,HTMLTableElement:W.cx,HTMLTableRowElement:W.fM,HTMLTableSectionElement:W.fN,HTMLTemplateElement:W.bp,TextTrackCueList:W.fP,TextTrackList:W.fQ,TimeRanges:W.fR,TouchEvent:W.aF,TouchList:W.fV,TrackDefaultList:W.fW,TreeWalker:W.cD,CompositionEvent:W.aG,FocusEvent:W.aG,TextEvent:W.aG,UIEvent:W.aG,URL:W.h3,VRStageBoundsPoint:W.h5,VideoTrackList:W.h6,WebSocket:W.h7,WheelEvent:W.aI,Window:W.bs,DOMWindow:W.bs,CSSRuleList:W.hi,DOMRect:W.hj,GamepadList:W.hA,NamedNodeMap:W.cV,MozNamedAttrMap:W.cV,SpeechRecognitionResultList:W.hS,StyleSheetList:W.hT,SVGFEBlendElement:P.e1,SVGFEColorMatrixElement:P.e2,SVGFEComponentTransferElement:P.e3,SVGFECompositeElement:P.e4,SVGFEConvolveMatrixElement:P.e5,SVGFEDiffuseLightingElement:P.e6,SVGFEDisplacementMapElement:P.e7,SVGFEFloodElement:P.e8,SVGFEGaussianBlurElement:P.e9,SVGFEImageElement:P.ea,SVGFEMergeElement:P.eb,SVGFEMorphologyElement:P.ec,SVGFEOffsetElement:P.ed,SVGFEPointLightElement:P.ee,SVGFESpecularLightingElement:P.ef,SVGFESpotLightElement:P.eg,SVGFETileElement:P.eh,SVGFETurbulenceElement:P.ei,SVGFilterElement:P.en,SVGForeignObjectElement:P.ep,SVGCircleElement:P.Z,SVGEllipseElement:P.Z,SVGLineElement:P.Z,SVGPathElement:P.Z,SVGPolygonElement:P.Z,SVGPolylineElement:P.Z,SVGGeometryElement:P.Z,SVGAElement:P.a6,SVGClipPathElement:P.a6,SVGDefsElement:P.a6,SVGGElement:P.a6,SVGSwitchElement:P.a6,SVGGraphicsElement:P.a6,SVGImageElement:P.ew,SVGLengthList:P.eG,SVGMaskElement:P.eP,SVGNumberList:P.f6,SVGPatternElement:P.fe,SVGPoint:P.fh,SVGPointList:P.fi,SVGRect:P.fl,SVGRectElement:P.fm,SVGScriptElement:P.bn,SVGStringList:P.fK,SVGAnimateElement:P.w,SVGAnimateMotionElement:P.w,SVGAnimateTransformElement:P.w,SVGAnimationElement:P.w,SVGDescElement:P.w,SVGDiscardElement:P.w,SVGFEDistantLightElement:P.w,SVGFEFuncAElement:P.w,SVGFEFuncBElement:P.w,SVGFEFuncGElement:P.w,SVGFEFuncRElement:P.w,SVGFEMergeNodeElement:P.w,SVGLinearGradientElement:P.w,SVGMarkerElement:P.w,SVGMetadataElement:P.w,SVGRadialGradientElement:P.w,SVGSetElement:P.w,SVGStopElement:P.w,SVGStyleElement:P.w,SVGSymbolElement:P.w,SVGTitleElement:P.w,SVGViewElement:P.w,SVGGradientElement:P.w,SVGComponentTransferFunctionElement:P.w,SVGFEDropShadowElement:P.w,SVGMPathElement:P.w,SVGElement:P.w,SVGSVGElement:P.fL,SVGTextPathElement:P.bq,SVGTextContentElement:P.bq,SVGTSpanElement:P.br,SVGTextElement:P.br,SVGTextPositioningElement:P.br,SVGTransformList:P.fX,SVGUseElement:P.h4,AudioBuffer:P.dB,AudioTrackList:P.dC,AudioContext:P.aO,webkitAudioContext:P.aO,BaseAudioContext:P.aO,OfflineAudioContext:P.f7,WebGLRenderingContext:P.fq,WebGL2RenderingContext:P.fr,SQLResultSetRowList:P.fA})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,Blob:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSStyleSheet:true,CSSSupportsRule:true,CSSVariableReferenceValue:true,CSSViewportRule:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,File:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,Gamepad:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechGrammar:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,StyleSheet:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,Touch:true,TrackDefault:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGLength:true,SVGMatrix:true,SVGNumber:true,SVGPreserveAspectRatio:true,SVGTransform:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioParamMap:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,Accelerometer:true,LinearAccelerationSensor:true,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSPositionValue:true,CSSRotation:true,CSSScale:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSSkew:true,CSSTransformComponent:false,CSSTransformValue:true,CSSTranslation:true,CSSUnparsedValue:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMPoint:true,DOMPointReadOnly:false,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AccessibleNode:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnectionList:true,PresentationRequest:true,RemotePlayback:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SourceBuffer:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,TextTrack:true,TextTrackCue:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,VTTCue:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,ServiceWorker:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,FileList:true,FileWriter:true,HTMLFormElement:true,Gyroscope:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,KeyboardEvent:true,Location:true,Magnetometer:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,PresentationConnection:true,Range:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,AbsoluteOrientationSensor:true,AmbientLightSensor:true,OrientationSensor:true,RelativeOrientationSensor:true,Sensor:false,SourceBufferList:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VRStageBoundsPoint:true,VideoTrackList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGAElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLengthList:true,SVGMaskElement:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMetadataElement:true,SVGRadialGradientElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSymbolElement:true,SVGTitleElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGSVGElement:true,SVGTextPathElement:true,SVGTextContentElement:false,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransformList:true,SVGUseElement:true,AudioBuffer:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cf.$nativeSuperclassTag="ArrayBufferView"
H.bx.$nativeSuperclassTag="ArrayBufferView"
H.by.$nativeSuperclassTag="ArrayBufferView"
H.cg.$nativeSuperclassTag="ArrayBufferView"
H.bz.$nativeSuperclassTag="ArrayBufferView"
H.bA.$nativeSuperclassTag="ArrayBufferView"
H.ch.$nativeSuperclassTag="ArrayBufferView"
W.bC.$nativeSuperclassTag="EventTarget"
W.bD.$nativeSuperclassTag="EventTarget"
W.bE.$nativeSuperclassTag="EventTarget"
W.bF.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.l0(F.l2(),b)},[])
else (function(b){H.l0(F.l2(),b)})([])})})()