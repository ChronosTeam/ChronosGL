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
a[c]=function(){a[c]=function(){H.m4(b)}
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
return d?function(e){if(t===null)t=H.iE(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.iE(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.iE(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={is:function is(a){this.a=a},
iw:function(a,b,c,d){if(!!a.$isc)return new H.dE(a,b,[c,d])
return new H.cK(a,b,[c,d])},
iq:function(){return new P.bw("No element")},
l_:function(){return new P.bw("Too few elements")},
d_:function(a,b,c,d){if(c-b<=32)H.lf(a,b,c,d)
else H.le(a,b,c,d)},
lf:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.ac(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.ae(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
le:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.d(t>32)
s=C.b.H(t+1,6)
r=a3+s
q=a4-s
p=C.b.H(a3+a4,2)
o=p-s
n=p+s
t=J.ac(a2)
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
H.d_(a2,a3,g-2,a5)
H.d_(a2,f+2,a4,a5)
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
break}}H.d_(a2,g,f,a5)}else H.d_(a2,g,f,a5)},
c:function c(){},
b_:function b_(){},
cJ:function cJ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cK:function cK(a,b,c){this.a=a
this.b=b
this.$ti=c},
dE:function dE(a,b,c){this.a=a
this.b=b
this.$ti=c},
eq:function eq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cL:function cL(a,b,c){this.a=a
this.b=b
this.$ti=c},
c_:function c_(){},
da:function(a,b){var t=a.a6(b)
if(!u.globalState.d.cy)u.globalState.f.ab()
return t},
i3:function(){--u.globalState.f.b
H.d(u.globalState.f.b>=0)},
k2:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.q(s).$isb)throw H.e(P.j_("Arguments to main must be a List: "+H.h(s)))
u.globalState=new H.ho(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$jd()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.h0(P.iv(null,H.aT),0)
r=P.m
s.sdQ(new H.a7(0,null,null,null,null,null,0,[r,H.aS]))
s.sdT(new H.a7(0,null,null,null,null,null,0,[r,null]))
if(s.x){q=new H.hn()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.kV,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.ls)}if(u.globalState.x)return
s=u.globalState.a++
q=P.aJ(null,null,null,r)
p=new H.b1(0,null,!1)
o=new H.aS(s,new H.a7(0,null,null,null,null,null,0,[r,H.b1]),q,u.createNewIsolate(),p,new H.ag(H.i7()),new H.ag(H.i7()),!1,!1,[],P.aJ(null,null,null,null),null,null,!1,!0,P.aJ(null,null,null,null))
q.l(0,0)
o.bi(0,p)
u.globalState.e=o
u.globalState.z.i(0,s,o)
u.globalState.d=o
if(H.b7(a,{func:1,args:[,]}))o.a6(new H.id(t,a))
else if(H.b7(a,{func:1,args:[,,]}))o.a6(new H.ie(t,a))
else o.a6(a)
u.globalState.f.ab()},
ls:function(a){var t=P.aI(["command","print","msg",a])
return new H.ab(!0,P.bF(null,P.m)).F(t)},
kX:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.kY()
return},
kY:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.e(new P.p("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.e(new P.p('Cannot extract URI from "'+t+'"'))},
kV:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.aR(!0,[]).O(b.data)
s=J.ac(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.lT(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.aR(!0,[]).O(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.aR(!0,[]).O(s.h(t,"replyTo"))
s=u.globalState.a++
k=P.m
j=P.aJ(null,null,null,k)
i=new H.b1(0,null,!1)
h=new H.aS(s,new H.a7(0,null,null,null,null,null,0,[k,H.b1]),j,u.createNewIsolate(),i,new H.ag(H.i7()),new H.ag(H.i7()),!1,!1,[],P.aJ(null,null,null,null),null,null,!1,!0,P.aJ(null,null,null,null))
j.l(0,0)
h.bi(0,i)
u.globalState.f.a.M(0,new H.aT(h,new H.ed(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.ab()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.kv(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.ab()
break
case"close":u.globalState.ch.aa(0,$.$get$je().h(0,a))
a.terminate()
u.globalState.f.ab()
break
case"log":H.kU(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
k=P.aI(["command","print","msg",t])
k=new H.ab(!0,P.bF(null,P.m)).F(k)
s.toString
self.postMessage(k)}else P.ad(s.h(t,"msg"))
break
case"error":throw H.e(s.h(t,"msg"))}},
kU:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aI(["command","log","msg",a])
r=new H.ab(!0,P.bF(null,P.m)).F(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.ap(q)
t=H.ay(q)
s=P.bZ(t)
throw H.e(s)}},
kW:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.jj=$.jj+("_"+s)
$.jk=$.jk+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.D(0,["spawned",new H.b4(s,r),q,t.r])
r=new H.ee(a,b,c,d,t)
if(e){t.bA(q,q)
u.globalState.f.a.M(0,new H.aT(t,r,"start isolate"))}else r.$0()},
lg:function(a,b){var t=new H.fv(!0,!1,null)
t.cU(a,b)
return t},
lt:function(a){return new H.aR(!0,[]).O(new H.ab(!1,P.bF(null,P.m)).F(a))},
id:function id(a,b){this.a=a
this.b=b},
ie:function ie(a,b){this.a=a
this.b=b},
ho:function ho(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
aS:function aS(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
hi:function hi(a,b){this.a=a
this.b=b},
h0:function h0(a,b){this.a=a
this.b=b},
h1:function h1(a){this.a=a},
aT:function aT(a,b,c){this.a=a
this.b=b
this.c=c},
hn:function hn(){},
ed:function ed(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ee:function ee(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fV:function fV(){},
b4:function b4(a,b){this.b=a
this.a=b},
hp:function hp(a,b){this.a=a
this.b=b},
bG:function bG(a,b,c){this.b=a
this.c=b
this.a=c},
b1:function b1(a,b,c){this.a=a
this.b=b
this.c=c},
fv:function fv(a,b,c){this.a=a
this.b=b
this.c=c},
fw:function fw(a,b){this.a=a
this.b=b},
fx:function fx(a,b){this.a=a
this.b=b},
ag:function ag(a){this.a=a},
ab:function ab(a,b){this.a=a
this.b=b},
aR:function aR(a,b){this.a=a
this.b=b},
lO:function(a){return u.types[a]},
lV:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.q(a).$isn},
h:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.ba(a)
if(typeof t!=="string")throw H.e(H.P(a))
return t},
lc:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.f0(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aL:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
cX:function(a){var t,s,r,q,p,o,n,m
t=J.q(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.C||!!J.q(a).$isaN){p=C.u(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.i.av(q,0)===36)q=C.i.cE(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.db(H.hR(a),0,null),u.mangledGlobalNames)},
eX:function(a){return"Instance of '"+H.cX(a)+"'"},
N:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
la:function(a){return a.b?H.N(a).getUTCFullYear()+0:H.N(a).getFullYear()+0},
l8:function(a){return a.b?H.N(a).getUTCMonth()+1:H.N(a).getMonth()+1},
l4:function(a){return a.b?H.N(a).getUTCDate()+0:H.N(a).getDate()+0},
l5:function(a){return a.b?H.N(a).getUTCHours()+0:H.N(a).getHours()+0},
l7:function(a){return a.b?H.N(a).getUTCMinutes()+0:H.N(a).getMinutes()+0},
l9:function(a){return a.b?H.N(a).getUTCSeconds()+0:H.N(a).getSeconds()+0},
l6:function(a){return a.b?H.N(a).getUTCMilliseconds()+0:H.N(a).getMilliseconds()+0},
ji:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.P(a))
return a[b]},
L:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aq(!0,b,"index",null)
t=J.dh(a)
if(b<0||C.b.cp(b,t))return P.z(b,a,"index",null,t)
return P.eY(b,"index",null)},
P:function(a){return new P.aq(!0,a,null,null)},
e:function(a){var t
if(a==null)a=new P.cV()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.k3})
t.name=""}else t.toString=H.k3
return t},
k3:function(){return J.ba(this.dartException)},
D:function(a){throw H.e(a)},
V:function(a){throw H.e(new P.a5(a))},
al:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.fC(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
fD:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
jv:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
iu:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.ej(a,s,t?null:b.receiver)},
ap:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.ig(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aE(r,16)&8191)===10)switch(q){case 438:return t.$1(H.iu(H.h(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.h(s)+" (Error "+q+")"
return t.$1(new H.cU(p,null))}}if(a instanceof TypeError){o=$.$get$jp()
n=$.$get$jq()
m=$.$get$jr()
l=$.$get$js()
k=$.$get$jw()
j=$.$get$jx()
i=$.$get$ju()
$.$get$jt()
h=$.$get$jz()
g=$.$get$jy()
f=o.J(s)
if(f!=null)return t.$1(H.iu(s,f))
else{f=n.J(s)
if(f!=null){f.method="call"
return t.$1(H.iu(s,f))}else{f=m.J(s)
if(f==null){f=l.J(s)
if(f==null){f=k.J(s)
if(f==null){f=j.J(s)
if(f==null){f=i.J(s)
if(f==null){f=l.J(s)
if(f==null){f=h.J(s)
if(f==null){f=g.J(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.cU(s,f==null?null:f.method))}}return t.$1(new H.fG(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.d0()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.aq(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.d0()
return a},
ay:function(a){var t
if(a==null)return new H.d9(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.d9(a,null)},
lZ:function(a){if(a==null||typeof a!='object')return J.af(a)
else return H.aL(a)},
lL:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=a.length
for(r=0;r<s;){q=r+1
H.d(t)
p=a[r]
r=q+1
H.d(t)
b.i(0,p,a[q])}return b},
lU:function(a,b,c,d,e,f,g){switch(c){case 0:return H.da(b,new H.hZ(a))
case 1:return H.da(b,new H.i_(a,d))
case 2:return H.da(b,new H.i0(a,d,e))
case 3:return H.da(b,new H.i1(a,d,e,f))
case 4:return H.da(b,new H.i2(a,d,e,f,g))}throw H.e(P.bZ("Unsupported number of arguments for wrapped closure"))},
bK:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.lU)
a.$identity=t
return t},
kK:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.q(c).$isb){t.$reflectionInfo=c
r=H.lc(t).r}else r=c
q=d?Object.create(new H.fg().constructor.prototype):Object.create(new H.bb(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.j8(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.lO,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.j5:H.im
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.e("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.j8(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
kH:function(a,b,c,d){var t=H.im
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
j8:function(a,b,c){var t,s,r,q
if(c)return H.kJ(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.kH(s,b==null?r!=null:b!==r,t,b)
return q},
kI:function(a,b,c,d){var t,s
t=H.im
s=H.j5
switch(b?-1:a){case 0:throw H.e(new H.f5("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
kJ:function(a,b){var t,s,r,q
H.kG()
t=$.j4
if(t==null){t=H.j3("receiver")
$.j4=t}s=b.$stubName
r=b.length
q=a[s]
t=H.kI(r,b==null?q!=null:b!==q,s,b)
return t},
iE:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.q(c).$isb){c.fixed$length=Array
t=c}else t=c
return H.kK(a,b,t,!!d,e,f)},
im:function(a){return a.a},
j5:function(a){return a.c},
kG:function(){var t=$.j6
if(t==null){t=H.j3("self")
$.j6=t}return t},
j3:function(a){var t,s,r,q,p
t=new H.bb("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
mj:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.am(a,"String"))},
T:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.am(a,"double"))},
mi:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.am(a,"num"))},
lF:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.am(a,"bool"))},
lT:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.am(a,"int"))},
m0:function(a,b){throw H.e(H.am(a,b.substring(3)))},
m_:function(a,b){var t=J.ac(b)
throw H.e(H.j7(H.cX(a),t.b4(b,3,t.gj(b))))},
jV:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.q(a)[b])return a
H.m0(a,b)},
az:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.q(a)[b]
else t=!0
if(t)return a
H.m_(a,b)},
mh:function(a){if(a==null)return a
if(!!J.q(a).$isb)return a
throw H.e(H.am(a,"List"))},
jR:function(a){var t=J.q(a)
return"$S" in t?t.$S():null},
b7:function(a,b){var t
if(a==null)return!1
t=H.jR(a)
return t==null?!1:H.jW(t,b)},
mf:function(a,b){var t,s
if(a==null)return a
if($.iB)return a
$.iB=!0
try{if(H.b7(a,b))return a
t=H.aA(b,null)
s=H.am(a,t)
throw H.e(s)}finally{$.iB=!1}},
am:function(a,b){return new H.fE("type '"+H.cX(a)+"' is not a subtype of type '"+b+"'")},
j7:function(a,b){return new H.dr("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
ao:function(a){if(!0===a)return!1
if(!!J.q(a).$isip)a=a.$0()
if(typeof a==="boolean")return!a
throw H.e(H.am(a,"bool"))},
aw:function(a){throw H.e(new H.fQ(a))},
d:function(a){if(H.ao(a))throw H.e(new P.bP(null))},
m4:function(a){throw H.e(new P.dv(a))},
i7:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
jT:function(a){return u.getIsolateTag(a)},
H:function(a){return new H.at(a,null)},
M:function(a,b){H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
hR:function(a){if(a==null)return
return a.$ti},
jU:function(a,b){return H.iL(a["$as"+H.h(b)],H.hR(a))},
ax:function(a,b,c){var t,s
t=H.jU(a,b)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
b8:function(a,b){var t,s
t=H.hR(a)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
aA:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.d(!0)
H.d(!0)
return a[0].name+H.db(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.h(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aA(t,b)
return H.lu(a,b)}return"unknown-reified-type"},
lu:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aA(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aA(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aA(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.lK(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aA(l[j],b)+(" "+H.h(j))}q+="}"}return"("+q+") => "+t},
db:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=new P.bx("")
for(r=b,q=!0,p=!0;H.d(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.d(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aA(o,c)}return p?"":"<"+s.k(0)+">"},
hS:function(a){var t,s
if(a instanceof H.aX){t=H.jR(a)
if(t!=null)return H.aA(t,null)}s=J.q(a).constructor.name
if(a==null)return s
return s+H.db(a.$ti,0,null)},
iL:function(a,b){if(a==null)return b
H.d(typeof a=="function")
H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.iI(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.iI(a,null,b)
return b},
hK:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.hR(a)
s=J.q(a)
if(s[b]==null)return!1
return H.jN(H.iL(s[d],t),c)},
dc:function(a,b,c,d){if(a==null)return a
if(H.hK(a,b,c,d))return a
throw H.e(H.j7(H.cX(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.db(c,0,null),u.mangledGlobalNames)))},
mc:function(a,b,c,d){if(a==null)return a
if(H.hK(a,b,c,d))return a
throw H.e(H.am(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.db(c,0,null),u.mangledGlobalNames)))},
jN:function(a,b){var t,s,r,q,p
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
md:function(a,b,c){return H.iI(a,b,H.jU(b,c))},
U:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.name==="aK")return!0
if('func' in b)return H.jW(a,b)
if('func' in a)return b.name==="ip"||b.name==="o"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.d(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.d(!0)
q=b[0]}else q=b
if(q!==s){p=H.aA(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.jN(H.iL(o,t),r)},
jM:function(a,b,c){var t,s,r,q,p,o,n
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
lB:function(a,b){var t,s,r,q,p,o
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
jW:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
if(n===m){if(!H.jM(r,q,!1))return!1
if(!H.jM(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.d(j)
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
if(!(H.U(g,f)||H.U(f,g)))return!1}}return H.lB(a.named,b.named)},
iI:function(a,b,c){H.d(typeof a=="function")
H.d(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
mk:function(a){var t=$.iG
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
mg:function(a){return H.aL(a)},
me:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
lW:function(a){var t,s,r,q,p,o
H.d(!(a instanceof P.o))
t=$.iG.$1(a)
s=$.hO[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.hY[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.jL.$2(a,t)
if(t!=null){s=$.hO[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.hY[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.iJ(r)
$.hO[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.hY[t]=r
return r}if(p==="-"){o=H.iJ(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.jY(a,r)
if(p==="*")throw H.e(new P.d3(t))
if(u.leafTags[t]===true){o=H.iJ(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.jY(a,r)},
jY:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.i5(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
iJ:function(a){return J.i5(a,!1,null,!!a.$isn)},
lY:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.i5(t,!1,null,!!t.$isn)
else return J.i5(t,c,null,null)},
lR:function(){if(!0===$.iH)return
$.iH=!0
H.lS()},
lS:function(){var t,s,r,q,p,o,n,m
$.hO=Object.create(null)
$.hY=Object.create(null)
H.lQ()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.k0.$1(p)
if(o!=null){n=H.lY(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
lQ:function(){var t,s,r,q,p,o,n
t=C.H()
t=H.b6(C.E,H.b6(C.J,H.b6(C.t,H.b6(C.t,H.b6(C.I,H.b6(C.F,H.b6(C.G(C.u),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.iG=new H.hV(p)
$.jL=new H.hW(o)
$.k0=new H.hX(n)},
b6:function(a,b){return a(b)||b},
f0:function f0(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fC:function fC(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cU:function cU(a,b){this.a=a
this.b=b},
ej:function ej(a,b,c){this.a=a
this.b=b
this.c=c},
fG:function fG(a){this.a=a},
ig:function ig(a){this.a=a},
d9:function d9(a,b){this.a=a
this.b=b},
hZ:function hZ(a){this.a=a},
i_:function i_(a,b){this.a=a
this.b=b},
i0:function i0(a,b,c){this.a=a
this.b=b
this.c=c},
i1:function i1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i2:function i2(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
aX:function aX(){},
fp:function fp(){},
fg:function fg(){},
bb:function bb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fE:function fE(a){this.a=a},
dr:function dr(a){this.a=a},
f5:function f5(a){this.a=a},
fQ:function fQ(a){this.a=a},
at:function at(a,b){this.a=a
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
ei:function ei(a){this.a=a},
el:function el(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
em:function em(a,b){this.a=a
this.$ti=b},
en:function en(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hV:function hV(a){this.a=a},
hW:function hW(a){this.a=a},
hX:function hX(a){this.a=a},
B:function(a){return a},
hG:function(a){var t,s,r
if(!!J.q(a).$isl)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
bp:function bp(){},
b0:function b0(){},
ey:function ey(){},
cP:function cP(){},
cQ:function cQ(){},
cR:function cR(){},
cO:function cO(){},
ez:function ez(){},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
cS:function cS(){},
eF:function eF(){},
bq:function bq(){},
br:function br(){},
bs:function bs(){},
bt:function bt(){},
lK:function(a){var t=H.M(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
i6:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
q:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cH.prototype
return J.eh.prototype}if(typeof a=="string")return J.aF.prototype
if(a==null)return J.cI.prototype
if(typeof a=="boolean")return J.eg.prototype
if(a.constructor==Array)return J.aE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aG.prototype
return a}if(a instanceof P.o)return a
return J.hQ(a)},
i5:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hQ:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.iH==null){H.lR()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.e(new P.d3("Return interceptor for "+H.h(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$it()]
if(p!=null)return p
p=H.lW(a)
if(p!=null)return p
if(typeof a=="function")return C.K
s=Object.getPrototypeOf(a)
if(s==null)return C.v
if(s===Object.prototype)return C.v
if(typeof q=="function"){Object.defineProperty(q,$.$get$it(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
ac:function(a){if(typeof a=="string")return J.aF.prototype
if(a==null)return a
if(a.constructor==Array)return J.aE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aG.prototype
return a}if(a instanceof P.o)return a
return J.hQ(a)},
hP:function(a){if(a==null)return a
if(a.constructor==Array)return J.aE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aG.prototype
return a}if(a instanceof P.o)return a
return J.hQ(a)},
jS:function(a){if(typeof a=="number")return J.aZ.prototype
if(a==null)return a
if(!(a instanceof P.o))return J.aN.prototype
return a},
lM:function(a){if(typeof a=="number")return J.aZ.prototype
if(typeof a=="string")return J.aF.prototype
if(a==null)return a
if(!(a instanceof P.o))return J.aN.prototype
return a},
lN:function(a){if(typeof a=="string")return J.aF.prototype
if(a==null)return a
if(!(a instanceof P.o))return J.aN.prototype
return a},
k:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aG.prototype
return a}if(a instanceof P.o)return a
return J.hQ(a)},
C:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.q(a).v(a,b)},
ae:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.jS(a).ao(a,b)},
k4:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.jS(a).ap(a,b)},
b9:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lV(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ac(a).h(a,b)},
k5:function(a,b,c,d){return J.k(a).cZ(a,b,c,d)},
iM:function(a,b){return J.lN(a).av(a,b)},
iN:function(a,b){return J.k(a).bz(a,b)},
iO:function(a,b,c){return J.k(a).bB(a,b,c)},
k6:function(a,b){return J.k(a).dk(a,b)},
dd:function(a,b,c){return J.k(a).bC(a,b,c)},
bO:function(a,b,c){return J.k(a).bD(a,b,c)},
de:function(a,b){return J.k(a).dn(a,b)},
k7:function(a,b){return J.k(a).bE(a,b)},
k8:function(a,b,c){return J.k(a).bF(a,b,c)},
iP:function(a,b,c,d){return J.k(a).bG(a,b,c,d)},
k9:function(a,b,c,d,e){return J.k(a).bH(a,b,c,d,e)},
ka:function(a,b){return J.lM(a).K(a,b)},
ih:function(a){return J.k(a).bJ(a)},
kb:function(a){return J.k(a).bK(a)},
kc:function(a){return J.k(a).bN(a)},
iQ:function(a){return J.k(a).dt(a)},
kd:function(a,b){return J.k(a).bP(a,b)},
ii:function(a,b){return J.k(a).bQ(a,b)},
ke:function(a,b,c,d){return J.k(a).bR(a,b,c,d)},
kf:function(a,b,c,d,e){return J.k(a).dC(a,b,c,d,e)},
kg:function(a,b,c,d,e){return J.k(a).bS(a,b,c,d,e)},
kh:function(a,b,c,d,e,f){return J.k(a).dD(a,b,c,d,e,f)},
ki:function(a,b){return J.hP(a).p(a,b)},
df:function(a,b){return J.k(a).bT(a,b)},
kj:function(a,b){return J.k(a).bU(a,b)},
kk:function(a){return J.k(a).dE(a)},
kl:function(a,b){return J.hP(a).aM(a,b)},
af:function(a){return J.q(a).gu(a)},
dg:function(a){return J.hP(a).gA(a)},
dh:function(a){return J.ac(a).gj(a)},
km:function(a){return J.q(a).gw(a)},
kn:function(a){return J.k(a).gam(a)},
ij:function(a){return J.k(a).gm(a)},
ik:function(a){return J.k(a).gn(a)},
iR:function(a){return J.k(a).gI(a)},
ko:function(a){return J.k(a).an(a)},
kp:function(a){return J.k(a).aV(a)},
kq:function(a,b){return J.k(a).aW(a,b)},
kr:function(a,b,c){return J.k(a).aX(a,b,c)},
iS:function(a,b,c){return J.k(a).b_(a,b,c)},
ks:function(a,b){return J.k(a).bW(a,b)},
kt:function(a,b){return J.hP(a).bY(a,b)},
ku:function(a,b,c){return J.k(a).bZ(a,b,c)},
kv:function(a,b){return J.k(a).D(a,b)},
kw:function(a,b,c,d){return J.k(a).b2(a,b,c,d)},
kx:function(a,b,c,d,e,f,g){return J.k(a).c3(a,b,c,d,e,f,g)},
ky:function(a,b,c,d){return J.k(a).c4(a,b,c,d)},
iT:function(a,b,c,d){return J.k(a).c5(a,b,c,d)},
ba:function(a){return J.q(a).k(a)},
kz:function(a,b,c,d){return J.k(a).e6(a,b,c,d)},
kA:function(a,b,c){return J.k(a).c8(a,b,c)},
kB:function(a,b,c){return J.k(a).c9(a,b,c)},
il:function(a,b,c){return J.k(a).ca(a,b,c)},
kC:function(a,b,c){return J.k(a).cb(a,b,c)},
iU:function(a,b,c){return J.k(a).cc(a,b,c)},
iV:function(a,b,c){return J.k(a).cd(a,b,c)},
iW:function(a,b,c){return J.k(a).ce(a,b,c)},
iX:function(a,b,c,d){return J.k(a).cf(a,b,c,d)},
iY:function(a,b,c,d){return J.k(a).cg(a,b,c,d)},
kD:function(a,b){return J.k(a).cj(a,b)},
kE:function(a,b,c){return J.k(a).e7(a,b,c)},
iZ:function(a,b,c,d,e,f,g){return J.k(a).cl(a,b,c,d,e,f,g)},
kF:function(a,b,c,d,e){return J.k(a).cm(a,b,c,d,e)},
a:function a(){},
eg:function eg(){},
cI:function cI(){},
bn:function bn(){},
eR:function eR(){},
aN:function aN(){},
aG:function aG(){},
aE:function aE(a){this.$ti=a},
ir:function ir(a){this.$ti=a},
dl:function dl(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aZ:function aZ(){},
cH:function cH(){},
eh:function eh(){},
aF:function aF(){}},P={
ll:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.lC()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.bK(new P.fS(t),1)).observe(s,{childList:true})
return new P.fR(t,s,r)}else if(self.setImmediate!=null)return P.lD()
return P.lE()},
lm:function(a){++u.globalState.f.b
self.scheduleImmediate(H.bK(new P.fT(a),0))},
ln:function(a){++u.globalState.f.b
self.setImmediate(H.bK(new P.fU(a),0))},
lo:function(a){P.ix(C.r,a)},
lx:function(a,b){if(H.b7(a,{func:1,args:[P.aK,P.aK]})){b.toString
return a}else{b.toString
return a}},
lp:function(a,b){var t,s,r
H.d(b.a<4)
H.d(!(a instanceof P.an))
H.d(b.a===0)
b.a=1
try{a.c7(new P.h7(b),new P.h8(b))}catch(r){t=H.ap(r)
s=H.ay(r)
P.m1(new P.h9(b,t,s))}},
jF:function(a,b){var t,s,r,q
H.d(b.a<=1)
for(;t=a.a,s=t===2,s;){H.d(s)
a=a.c}s=b.a
if(t>=4){H.d(s<4)
r=b.c
b.c=null
q=b.a4(r)
H.d(b.a<4)
H.d(a.a>=4)
b.a=a.a
b.c=a.c
P.bC(b,q)}else{q=b.c
H.d(s<=1)
b.a=2
b.c=a
a.bs(q)}},
bC:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.hH(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bC(t.a,b)}s=t.a
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
P.hH(null,null,p,o,s)
return}s=$.A
if(s==null?l!=null:s!==l){H.d(l!=null)
s=$.A
H.d(l==null?s!=null:l!==s)
j=$.A
$.A=l
i=j}else i=null
s=b.c
if(s===8)new P.hd(t,r,q,b).$0()
else if(p){if((s&1)!==0)new P.hc(r,b,m).$0()}else if((s&2)!==0)new P.hb(t,r,b).$0()
if(i!=null){H.d(!0)
$.A=i}s=r.b
if(!!J.q(s).$ise5){if(s.a>=4){H.d(o.a<4)
h=o.c
o.c=null
b=o.a4(h)
H.d(o.a<4)
H.d(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.jF(s,o)
return}}g=b.b
H.d(g.a<4)
h=g.c
g.c=null
b=g.a4(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.d(!o)
g.a=4
g.c=p}else{H.d(!o)
g.a=8
g.c=p}t.a=g
s=g}},
lw:function(){var t,s
for(;t=$.b5,t!=null;){$.bI=null
s=t.b
$.b5=s
if(s==null)$.bH=null
t.a.$0()}},
lA:function(){$.iC=!0
try{P.lw()}finally{$.bI=null
$.iC=!1
if($.b5!=null)$.$get$iz().$1(P.jO())}},
jJ:function(a){var t=new P.d4(a,null)
if($.b5==null){$.bH=t
$.b5=t
if(!$.iC)$.$get$iz().$1(P.jO())}else{$.bH.b=t
$.bH=t}},
lz:function(a){var t,s,r
t=$.b5
if(t==null){P.jJ(a)
$.bI=$.bH
return}s=new P.d4(a,null)
r=$.bI
if(r==null){s.b=t
$.bI=s
$.b5=s}else{s.b=r.b
r.b=s
$.bI=s
if(s.b==null)$.bH=s}},
m1:function(a){var t=$.A
if(C.f===t){P.hJ(null,null,C.f,a)
return}t.toString
P.hJ(null,null,t,t.aI(a))},
lh:function(a,b){var t=$.A
if(t===C.f){t.toString
return P.ix(a,b)}return P.ix(a,t.aI(b))},
ix:function(a,b){var t=C.b.H(a.a,1000)
return H.lg(t<0?0:t,b)},
iy:function(a){var t,s
H.d(a!=null)
t=$.A
H.d(a==null?t!=null:a!==t)
s=$.A
$.A=a
return s},
hH:function(a,b,c,d,e){var t={}
t.a=d
P.lz(new P.hI(t,e))},
jH:function(a,b,c,d){var t,s
if($.A===c)return d.$0()
t=P.iy(c)
try{s=d.$0()
return s}finally{s=t
H.d(s!=null)
$.A=s}},
jI:function(a,b,c,d,e){var t,s
if($.A===c)return d.$1(e)
t=P.iy(c)
try{s=d.$1(e)
return s}finally{s=t
H.d(s!=null)
$.A=s}},
ly:function(a,b,c,d,e,f){var t,s
if($.A===c)return d.$2(e,f)
t=P.iy(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.d(s!=null)
$.A=s}},
hJ:function(a,b,c,d){var t=C.f!==c
if(t)d=!(!t||!1)?c.aI(d):c.dl(d)
P.jJ(d)},
fS:function fS(a){this.a=a},
fR:function fR(a,b,c){this.a=a
this.b=b
this.c=c},
fT:function fT(a){this.a=a},
fU:function fU(a){this.a=a},
fX:function fX(){},
hB:function hB(a,b){this.a=a
this.$ti=b},
d6:function d6(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
an:function an(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
h6:function h6(a,b){this.a=a
this.b=b},
ha:function ha(a,b){this.a=a
this.b=b},
h7:function h7(a){this.a=a},
h8:function h8(a){this.a=a},
h9:function h9(a,b,c){this.a=a
this.b=b
this.c=c},
hd:function hd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
he:function he(a){this.a=a},
hc:function hc(a,b,c){this.a=a
this.b=b
this.c=c},
hb:function hb(a,b,c){this.a=a
this.b=b
this.c=c},
d4:function d4(a,b){this.a=a
this.b=b},
fi:function fi(){},
fk:function fk(a){this.a=a},
fl:function fl(a,b){this.a=a
this.b=b},
fj:function fj(){},
aW:function aW(a,b){this.a=a
this.b=b},
hF:function hF(){},
hI:function hI(a,b){this.a=a
this.b=b},
hr:function hr(){},
ht:function ht(a,b){this.a=a
this.b=b},
hs:function hs(a,b){this.a=a
this.b=b},
hu:function hu(a,b){this.a=a
this.b=b},
jg:function(a,b){return new H.a7(0,null,null,null,null,null,0,[a,b])},
J:function(){return new H.a7(0,null,null,null,null,null,0,[null,null])},
aI:function(a){return H.lL(a,new H.a7(0,null,null,null,null,null,0,[null,null]))},
bF:function(a,b){return new P.d7(0,null,null,null,null,null,0,[a,b])},
lr:function(){var t=Object.create(null)
H.d(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
kZ:function(a,b,c){var t,s
if(P.iD(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$bJ()
C.a.l(s,a)
try{P.lv(a,t)}finally{H.d(C.a.gaO(s)===a)
s.pop()}s=P.jo(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
ef:function(a,b,c){var t,s,r
if(P.iD(a))return b+"..."+c
t=new P.bx(b)
s=$.$get$bJ()
C.a.l(s,a)
try{r=t
r.a=P.jo(r.gT(),a,", ")}finally{H.d(C.a.gaO(s)===a)
s.pop()}s=t
s.a=s.gT()+c
s=t.gT()
return s.charCodeAt(0)==0?s:s},
iD:function(a){var t,s
for(t=0;s=$.$get$bJ(),t<s.length;++t)if(a===s[t])return!0
return!1},
lv:function(a,b){var t,s,r,q,p,o,n,m,l,k
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
aJ:function(a,b,c,d){return new P.hk(0,null,null,null,null,null,0,[d])},
l0:function(a,b){var t,s
t=P.aJ(null,null,null,b)
for(s=J.dg(a);s.q();)t.l(0,s.gt())
return t},
l1:function(a){var t,s,r
t={}
if(P.iD(a))return"{...}"
s=new P.bx("")
try{C.a.l($.$get$bJ(),a)
r=s
r.a=r.gT()+"{"
t.a=!0
a.aM(0,new P.er(t,s))
t=s
t.a=t.gT()+"}"}finally{t=$.$get$bJ()
H.d(C.a.gaO(t)===a)
t.pop()}t=s.gT()
return t.charCodeAt(0)==0?t:t},
iv:function(a,b){var t=new P.eo(null,0,0,0,[b])
t.cP(a,b)
return t},
d7:function d7(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hk:function hk(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hl:function hl(a,b,c){this.a=a
this.b=b
this.c=c},
bE:function bE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hh:function hh(){},
t:function t(){},
er:function er(a,b){this.a=a
this.b=b},
eo:function eo(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hm:function hm(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
f9:function f9(){},
f8:function f8(){},
jo:function(a,b,c){var t=J.dg(b)
if(!t.q())return a
if(c.length===0){do a+=H.h(t.gt())
while(t.q())}else{a+=H.h(t.gt())
for(;t.q();)a=a+c+H.h(t.gt())}return a},
kL:function(a,b){return J.ka(a,b)},
kM:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.h(t)
if(t>=10)return s+"00"+H.h(t)
return s+"000"+H.h(t)},
kN:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bU:function(a){if(a>=10)return""+a
return"0"+a},
io:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ba(a)
if(typeof a==="string")return JSON.stringify(a)
return P.kP(a)},
kP:function(a){var t=J.q(a)
if(!!t.$isaX)return t.k(a)
return H.eX(a)},
j_:function(a){return new P.aq(!1,null,null,a)},
j0:function(a,b,c){return new P.aq(!0,a,b,c)},
eY:function(a,b,c){return new P.cY(null,null,!0,a,b,"Value not in range")},
bu:function(a,b,c,d,e){return new P.cY(b,c,!0,a,d,"Invalid value")},
jl:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.bu(a,0,c,"start",f))
if(a>b||b>c)throw H.e(P.bu(b,a,c,"end",f))
return b},
z:function(a,b,c,d,e){var t=e!=null?e:J.dh(b)
return new P.eb(b,t,!0,a,c,"Index out of range")},
bZ:function(a){return new P.h5(a)},
jh:function(a,b,c){var t,s
t=H.M([],[c])
for(s=J.dg(a);s.q();)C.a.l(t,s.gt())
return t},
ad:function(a){H.i6(H.h(a))},
aV:function aV(){},
E:function E(){},
bd:function bd(a,b){this.a=a
this.b=b},
I:function I(){},
aD:function aD(a){this.a=a},
dC:function dC(){},
dD:function dD(){},
aY:function aY(){},
bP:function bP(a){this.a=a},
cV:function cV(){},
aq:function aq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cY:function cY(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eb:function eb(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
p:function p(a){this.a=a},
d3:function d3(a){this.a=a},
bw:function bw(a){this.a=a},
a5:function a5(a){this.a=a},
d0:function d0(){},
dv:function dv(a){this.a=a},
h5:function h5(a){this.a=a},
dF:function dF(a,b,c){this.a=a
this.b=b
this.$ti=c},
m:function m(){},
ah:function ah(){},
cG:function cG(){},
b:function b(){},
as:function as(){},
aK:function aK(){},
Q:function Q(){},
o:function o(){},
bv:function bv(){},
r:function r(){},
bx:function bx(a){this.a=a},
hM:function(a){var t,s,r,q,p
if(a==null)return
t=P.J()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.V)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
lI:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.kl(a,new P.hL(t))
return t},
hL:function hL(a){this.a=a},
hj:function hj(){},
hq:function hq(){},
F:function F(){},
di:function di(){},
aB:function aB(){},
dG:function dG(){},
dH:function dH(){},
dI:function dI(){},
dJ:function dJ(){},
dK:function dK(){},
dL:function dL(){},
dM:function dM(){},
dN:function dN(){},
dO:function dO(){},
dP:function dP(){},
dQ:function dQ(){},
dR:function dR(){},
dS:function dS(){},
dT:function dT(){},
dU:function dU(){},
dV:function dV(){},
dW:function dW(){},
dX:function dX(){},
e0:function e0(){},
e3:function e3(){},
a6:function a6(){},
ar:function ar(){},
e9:function e9(){},
ai:function ai(){},
ek:function ek(){},
es:function es(){},
et:function et(){},
aj:function aj(){},
eH:function eH(){},
eO:function eO(){},
eT:function eT(){},
eU:function eU(){},
eZ:function eZ(){},
f_:function f_(){},
f6:function f6(){},
fm:function fm(){},
G:function G(){},
fn:function fn(){},
fo:function fo(){},
d1:function d1(){},
fq:function fq(){},
by:function by(){},
ak:function ak(){},
fA:function fA(){},
fI:function fI(){},
fK:function fK(){},
fL:function fL(){},
bD:function bD(){},
hv:function hv(){},
hw:function hw(){},
hx:function hx(){},
ce:function ce(){},
c6:function c6(){},
c3:function c3(){},
cc:function cc(){},
cr:function cr(){},
ct:function ct(){},
cu:function cu(){},
cv:function cv(){},
dm:function dm(){},
f2:function f2(){},
f3:function f3(){},
hC:function hC(){},
ff:function ff(){},
ck:function ck(){},
cw:function cw(){}},W={
kO:function(a){return"wheel"},
aU:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jG:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
aa:function(a,b,c,d,e){var t=W.jK(new W.h4(c))
t=new W.h3(0,a,b,t,!1,[e])
t.cX(a,b,c,!1,e)
return t},
jK:function(a){var t=$.A
if(t===C.f)return a
return t.dm(a)},
j:function j(){},
dj:function dj(){},
dk:function dk(){},
W:function W(){},
dn:function dn(){},
bQ:function bQ(){},
dp:function dp(){},
bR:function bR(){},
bS:function bS(){},
bT:function bT(){},
aC:function aC(){},
dt:function dt(){},
x:function x(){},
bc:function bc(){},
du:function du(){},
dw:function dw(){},
dx:function dx(){},
be:function be(){},
bV:function bV(){},
dy:function dy(){},
dz:function dz(){},
bW:function bW(){},
bX:function bX(){},
dA:function dA(){},
dB:function dB(){},
bY:function bY(){},
i:function i(){},
f:function f(){},
X:function X(){},
dZ:function dZ(){},
e_:function e_(){},
e4:function e4(){},
Y:function Y(){},
e7:function e7(){},
bl:function bl(){},
c0:function c0(){},
e8:function e8(){},
bm:function bm(){},
ec:function ec(){},
aH:function aH(){},
ep:function ep(){},
eu:function eu(){},
ev:function ev(){},
bo:function bo(){},
Z:function Z(){},
ew:function ew(){},
K:function K(){},
eG:function eG(){},
u:function u(){},
cT:function cT(){},
eN:function eN(){},
eP:function eP(){},
a_:function a_(){},
eS:function eS(){},
eV:function eV(){},
eW:function eW(){},
f4:function f4(){},
cZ:function cZ(){},
f7:function f7(){},
fb:function fb(){},
a0:function a0(){},
fc:function fc(){},
a1:function a1(){},
fe:function fe(){},
a2:function a2(){},
fh:function fh(){},
R:function R(){},
a9:function a9(){},
a3:function a3(){},
S:function S(){},
fr:function fr(){},
fs:function fs(){},
fu:function fu(){},
a4:function a4(){},
aM:function aM(){},
fy:function fy(){},
fz:function fz(){},
b3:function b3(){},
fB:function fB(){},
au:function au(){},
fH:function fH(){},
fJ:function fJ(){},
fM:function fM(){},
fN:function fN(){},
aP:function aP(){},
bB:function bB(){},
fO:function fO(a){this.a=a},
fP:function fP(){},
aQ:function aQ(){},
fW:function fW(){},
d5:function d5(){},
fY:function fY(){},
fZ:function fZ(){},
h_:function h_(){},
hf:function hf(){},
hg:function hg(){},
d8:function d8(){},
hy:function hy(){},
hz:function hz(){},
hA:function hA(){},
hD:function hD(){},
hE:function hE(){},
h2:function h2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iA:function iA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
h3:function h3(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
h4:function h4(a){this.a=a},
y:function y(){},
e1:function e1(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bf:function bf(){},
bg:function bg(){},
bh:function bh(){},
bi:function bi(){},
bj:function bj(){},
bk:function bk(){},
c1:function c1(){},
cl:function cl(){},
c7:function c7(){},
c4:function c4(){},
cf:function cf(){},
cg:function cg(){},
ch:function ch(){},
ci:function ci(){},
cj:function cj(){},
c2:function c2(){},
c5:function c5(){},
c8:function c8(){},
c9:function c9(){},
ca:function ca(){},
cb:function cb(){},
cd:function cd(){},
cm:function cm(){},
cn:function cn(){},
co:function co(){},
cy:function cy(){},
cz:function cz(){},
cx:function cx(){},
cC:function cC(){},
cD:function cD(){},
cE:function cE(){},
cF:function cF(){},
cp:function cp(){},
cq:function cq(){},
cs:function cs(){},
cA:function cA(){},
cB:function cB(){}},B={
m2:function(a){var t,s
t=document
s=W.aH
W.aa(t,"keydown",new B.i8(),!1,s)
W.aa(t,"keyup",new B.i9(),!1,s)
if(!$.m3)W.aa(t,"mousemove",new B.ia(),!1,W.K)
s=W.K
W.aa(t,"mousedown",new B.ib(),!1,s)
W.aa(t,"mouseup",new B.ic(),!1,s)},
l2:function(a,b,c,d){var t,s,r,q
t=new Float32Array(H.B(3))
s=$.$get$hN()
r=$.$get$bL()
q=new T.a8(new Float32Array(H.B(16)))
q.Z()
q=new B.eI(a,b,c,0,new T.w(t),-0.02,s,r,q,new T.w(new Float32Array(H.B(3))),new T.w(new Float32Array(H.B(3))),new T.w(new Float32Array(H.B(3))),new T.w(new Float32Array(H.B(3))),"camera:orbit",!1,!0)
q.cQ(a,b,c,d)
return q},
i8:function i8(){},
i9:function i9(){},
ia:function ia(){},
ib:function ib(){},
ic:function ic(){},
eI:function eI(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
eJ:function eJ(a){this.a=a},
eK:function eK(a){this.a=a},
eL:function eL(){},
eM:function eM(a){this.a=a},
ld:function(a,b,c,d,e,a0,a1,a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=a2+1
s=a1+1
r=B.l3(new B.fa(a0,d,e,c),0,6.283185307179586,s,!1,0.001)
H.d(r.length===2*s)
q=B.li(r,a2,a3,!1)
H.d(q.length===s)
H.d(q[0].length===2*t)
p=[]
o=new G.e6(!1,[],[],p,P.J())
for(n=q.length,m=0;m<q.length;q.length===n||(0,H.V)(q),++m){l=q[m]
for(k=0;k<l.length;k+=2){j=l[k]
j.toString
i=new T.w(new Float32Array(3))
i.G(j)
C.a.l(p,i)}}H.d(p.length===t*s)
o.cL(t,s,!1)
o.cM(t,s)
n=o.e
H.d(n.h(0,"aTexUV").length===p.length)
H.d(!n.B(0,"aNormal"))
H.d(C.i.cC("aNormal","a"))
h=$.$get$O().h(0,"aNormal")
switch(h.a){case"vec2":n.i(0,"aNormal",H.M([],[T.aO]))
break
case"vec3":n.i(0,"aNormal",H.M([],[T.w]))
break
case"vec4":n.i(0,"aNormal",H.M([],[T.av]))
break
case"float":n.i(0,"aNormal",H.M([],[P.I]))
break
case"uvec4":n.i(0,"aNormal",H.M([],[[P.b,P.m]]))
break
default:if(H.ao(!1))H.aw("unknown type for aNormal")}for(j=q.length,m=0;m<q.length;q.length===j||(0,H.V)(q),++m){l=q[m]
for(k=0;k<l.length;k+=2){i=l[k+1]
g=n.h(0,"aNormal")
i.toString
f=new T.w(new Float32Array(3))
f.G(i);(g&&C.a).l(g,f)}}H.d(n.h(0,"aNormal").length===p.length)
return o},
li:function(a1,a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
t=[]
s=new Float32Array(H.B(3))
r=new T.w(s)
q=new Float32Array(H.B(3))
p=new T.w(q)
o=new Float32Array(H.B(3))
n=new T.w(o)
for(m=a2+1,l=0;l<a1.length;l+=2){k=a1[l]
j=a1[l+1]
i=[]
C.a.l(t,i)
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
o[2]=e*d}p.V(0)
n.V(0)
for(c=0;c<m;++c){b=c/a2*2*3.141592653589793
a=a3*Math.cos(b)
a0=a3*Math.sin(b)
r.G(k)
r.aj(p,a)
r.aj(n,a0)
h=new T.w(new Float32Array(3))
h.G(r)
C.a.l(i,h)
s[2]=0
s[1]=0
s[0]=0
r.aj(p,a)
r.aj(n,a0)
r.V(0)
h=new T.w(new Float32Array(3))
h.G(r)
C.a.l(i,h)}}return t},
l3:function(a,b,c,d,e,f){var t,s,r,q,p,o,n
H.d(d>=2)
t=[]
s=new T.w(new Float32Array(H.B(3)))
r=new T.w(new Float32Array(H.B(3)))
for(q=(c-b)/(d-1),p=0;p<d;++p){o=q*p+b
a.$2(o,s)
a.$2(o+f,r)
r.b3(s)
n=new T.w(new Float32Array(3))
n.G(s)
C.a.l(t,n)
n=new T.w(new Float32Array(3))
n.G(r)
C.a.l(t,n)}return t},
fa:function fa(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},G={
lk:function(a){var t,s,r
t=a.split("\n")
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.h(t[s])}return C.a.a9(t,"\n")},
jE:function(a,b,c){var t,s,r,q
t=J.k(a)
s=t.bM(a,b)
t.b1(a,s,c)
t.bI(a,s)
r=t.aZ(a,s,35713)
if(r!=null&&!r){q=t.aY(a,s)
P.ad("E:Compilation failed:")
P.ad("E:"+G.lk(c))
P.ad("E:Failure:")
P.ad(C.i.X("E:",q))
throw H.e(q)}return s},
jb:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.ij(a[s])
b[t+1]=J.ik(a[s])
b[t+2]=J.iR(a[s])}return b},
kR:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.ij(a[s])
b[t+1]=J.ik(a[s])}return b},
kS:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.ij(a[s])
b[t+1]=J.ik(a[s])
b[t+2]=J.iR(a[s])
b[t+3]=J.kn(a[s])}return b},
kQ:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.b9(a[s],0)
b[t+1]=J.b9(a[s],1)
b[t+2]=J.b9(a[s],2)
b[t+3]=J.b9(a[s],3)}return b},
lq:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
for(t=a.e,s=t.gL(t),s=s.gA(s),r=b.x,q=[[P.b,P.m]],p=[P.I],o=[T.av],n=[T.w],m=[T.aO];s.q();){l=s.gt()
if(!r.B(0,l)){k="Dropping unnecessary attribute: "+H.h(l)
if($.iF>0)H.i6("I: "+k)
continue}j=t.h(0,l)
switch($.$get$O().h(0,l).a){case"vec2":b.a0(l,G.kR(H.dc(j,"$isb",m,"$asb"),null),2)
break
case"vec3":b.a0(l,G.jb(H.dc(j,"$isb",n,"$asb"),null),3)
break
case"vec4":b.a0(l,G.kS(H.dc(j,"$isb",o,"$asb"),null),4)
break
case"float":b.a0(l,new Float32Array(H.hG(H.dc(j,"$isb",p,"$asb"))),1)
break
case"uvec4":b.a0(l,G.kQ(H.dc(j,"$isb",q,"$asb"),null),4)
break
default:if(H.ao(!1))H.aw("unknown type for "+H.h(l)+" ["+J.km(j[0]).k(0)+"] ["+new H.at(H.hS(j),null).k(0)+"] "+H.h(j))}}},
jm:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.aJ(null,null,null,P.r)
s=c.b
r=d.b
q=c.f
p=J.kb(b.a)
o=G.jE(b.a,35633,s)
J.iO(b.a,p,o)
n=G.jE(b.a,35632,r)
J.iO(b.a,p,n)
if(q.length>0)J.kz(b.a,p,q,35980)
J.ks(b.a,p)
if(!J.kr(b.a,p,35714))H.D(J.kq(b.a,p))
t=new G.f1(b,c,d,p,P.l0(c.c,null),P.J(),P.J(),t,null,a,!1,!0)
t.cR(a,b,c,d)
return t},
ex:function ex(){},
fF:function fF(){},
dq:function dq(){},
ds:function ds(a,b){this.a=a
this.b=b},
dY:function dY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e6:function e6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
d2:function d2(a,b,c){this.a=a
this.b=b
this.c=c},
bA:function bA(a,b,c){this.a=a
this.b=b
this.c=c},
cM:function cM(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
cN:function cN(a,b,c,d,e,f,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
eQ:function eQ(){},
f1:function f1(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
v:function v(a,b,c){this.a=a
this.b=b
this.c=c},
b2:function b2(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fd:function fd(){},
ft:function ft(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bz:function bz(){},
ea:function ea(a,b,c,d,e,f){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f}},R={
lj:function(a,b,c){var t,s,r,q
t="stars_"+b
s=b*3
r=new Float32Array(H.B(s))
for(q=0;q<s;++q)r[q]=($.$get$jD().dW()-0.5)*c
s=a.d
s=new G.cN(s,J.iQ(s.a),0,P.J(),a.e.x,null,0,-1,null,null,P.J(),"meshdata:"+t,!1,!0)
s.b7(r)
return s},
cW:function cW(a,b,c,d,e,f,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
_.fy=a
_.go=b
_.x=c
_.y=d
_.z=e
_.Q=f
_.ch=a0
_.cx=a1
_.cy=a2
_.db=a3
_.d=a4
_.a=a5
_.b=a6
_.c=a7}},A={
hT:function(a){var t,s
t=C.L.dH(a,0,new A.hU())
s=536870911&t+(C.b.cn(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
hU:function hU(){}},T={a8:function a8(a){this.a=a},aO:function aO(a){this.a=a},w:function w(a){this.a=a},av:function av(a){this.a=a}},M={
lX:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
t={}
s=document
r=C.B.dY(s,"#webgl-canvas")
$.iF=1
q=new G.ds(null,r)
p=(r&&C.q).aU(r,"webgl2",P.aI(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
q.a=p
if(p==null)H.D(P.bZ('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
o="ChronosGL Config: "+J.ba(J.ko(p))
if($.iF>0)P.ad("I: "+o)
J.k9(p,0,0,0,1)
J.df(p,2929)
n=B.l2(5,0,0,s.body)
p=new T.a8(new Float32Array(H.B(16)))
p.Z()
o=new T.a8(new Float32Array(H.B(16)))
o.Z()
m=new R.cW(r,q,n,50,1,0.1,1000,p,o,new T.a8(new Float32Array(H.B(16))),P.J(),"perspective",!1,!0)
m.bc()
m.c0(null)
W.aa(window,"resize",m.ge0(),!1,W.i)
l=G.jm("basic",q,$.$get$jQ(),$.$get$jP())
k=new G.cM(P.J(),"torus-mat",!1,!0)
k.E("cDepthTest",!0)
k.E("cDepthWrite",!0)
k.E("cBlendEquation",$.$get$j2())
o=$.$get$jn()
k.E("cStencilFunc",o)
p=new T.a8(new Float32Array(H.B(16)))
p.Z()
k.E("uModelMatrix",p)
j=B.ld(!0,!0,1,2,3,1,128,16,0.4,!1)
p=l.d
i=J.iQ(p.a)
h=new G.cN(p,i,4,P.J(),l.e.x,null,0,-1,null,null,P.J(),"meshdata:torusknot",!1,!0)
h.b7(G.jb(j.d,null))
g=j.cK()
h.y=J.ih(p.a)
H.d(h.ch!=null)
f=h.ch.length
if(f<768){h.saA(new Uint8Array(H.hG(g)))
h.Q=5121}else if(f<196608){h.saA(new Uint16Array(H.hG(g)))
h.Q=5123}else{h.saA(new Uint32Array(H.hG(g)))
h.Q=5125}J.de(p.a,i)
i=h.y
g=h.cx
f=J.q(g)
H.d(!!f.$isjA||!!f.$isjB||!!f.$isjC)
J.dd(p.a,34963,i)
J.iP(p.a,34963,g,35048)
G.lq(j,h)
e=G.jm("basic",q,$.$get$k_(),$.$get$jZ())
p=$.$get$j1()
d=new G.cM(P.J(),"stars",!1,!0)
d.E("cDepthTest",!0)
d.E("cDepthWrite",!1)
d.E("cBlendEquation",p)
d.E("cStencilFunc",o)
c=s.createElement("canvas")
c.width=64
c.height=64
b=C.q.cq(c,"2d")
a=(b&&C.o).bL(b,32,32,1,32,32,22);(a&&C.m).ai(a,0,"gray")
C.m.ai(a,1,"black")
b.fillStyle=a
C.o.dF(b,0,0,64,64)
a=C.o.bL(b,32,32,1,32,32,6);(a&&C.m).ai(a,0,"white")
C.m.ai(a,1,"gray")
b.globalAlpha=0.9
b.fillStyle=a
b.arc(32,32,4,0,6.283185307179586,!1)
b.fill("nonzero")
s=new G.ft(!1,!1,!1,!0,1,9729,9729)
p=J.kc(q.a)
o=new G.ea(c,"Utils::Particles",p,3553,q,s)
J.bO(q.a,3553,p)
J.ku(q.a,37440,1)
o.cT(c)
s.cO(q,3553)
H.d(J.kp(q.a)===0)
J.bO(q.a,3553,null)
d.E("uTexture",o)
d.E("uPointSize",1000)
s=new T.a8(new Float32Array(H.B(16)))
s.Z()
d.E("uModelMatrix",s)
a0=R.lj(e,2000,100)
t.a=0
new M.i4(t,n,m,l,k,h,e,d,a0).$1(0)},
i4:function i4(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i}}
var v=[C,H,J,P,W,B,G,R,A,T,M]
setFunctionNamesIfNecessary(v)
var $={}
H.is.prototype={}
J.a.prototype={
v:function(a,b){return a===b},
gu:function(a){return H.aL(a)},
k:function(a){return H.eX(a)},
gw:function(a){return new H.at(H.hS(a),null)}}
J.eg.prototype={
k:function(a){return String(a)},
gu:function(a){return a?519018:218159},
gw:function(a){return C.af},
$isaV:1}
J.cI.prototype={
v:function(a,b){return null==b},
k:function(a){return"null"},
gu:function(a){return 0},
gw:function(a){return C.a9}}
J.bn.prototype={
gu:function(a){return 0},
gw:function(a){return C.a8},
k:function(a){return String(a)},
$isjf:1}
J.eR.prototype={}
J.aN.prototype={}
J.aG.prototype={
k:function(a){var t=a[$.$get$j9()]
return t==null?this.cG(a):J.ba(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isip:1}
J.aE.prototype={
aK:function(a,b){if(!!a.immutable$list)throw H.e(new P.p(b))},
aJ:function(a,b){if(!!a.fixed$length)throw H.e(new P.p(b))},
l:function(a,b){this.aJ(a,"add")
a.push(b)},
dh:function(a,b){var t,s,r,q,p
t=a.length
this.aJ(a,"addAll")
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.V)(b),++r,t=p){q=b[r]
p=t+1
H.d(t===a.length||H.D(new P.a5(a)))
a.push(q)}},
bY:function(a,b){return new H.cL(a,b,[H.b8(a,0),null])},
a9:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.h(a[s])
return t.join(b)},
p:function(a,b){return a[b]},
gdG:function(a){if(a.length>0)return a[0]
throw H.e(H.iq())},
gaO:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.e(H.iq())},
b0:function(a,b,c,d,e){var t,s
this.aK(a,"setRange")
P.jl(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.D(P.bu(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.e(H.l_())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=d[e+s]
else for(s=0;s<t;++s)a[b+s]=d[e+s]},
cB:function(a,b){this.aK(a,"sort")
H.d_(a,0,a.length-1,P.lJ())},
ar:function(a){return this.cB(a,null)},
U:function(a,b){var t
for(t=0;t<a.length;++t)if(J.C(a[t],b))return!0
return!1},
k:function(a){return P.ef(a,"[","]")},
gA:function(a){return new J.dl(a,a.length,0,null,[H.b8(a,0)])},
gu:function(a){return H.aL(a)},
gj:function(a){return a.length},
sj:function(a,b){this.aJ(a,"set length")
if(b<0)throw H.e(P.bu(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.L(a,b))
if(b>=a.length||b<0)throw H.e(H.L(a,b))
return a[b]},
i:function(a,b,c){this.aK(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.L(a,b))
if(b>=a.length||b<0)throw H.e(H.L(a,b))
a[b]=c},
$isl:1,
$asl:function(){},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
J.ir.prototype={}
J.dl.prototype={
gt:function(){return this.d},
q:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.e(H.V(t))
r=this.c
if(r>=s){this.sbe(null)
return!1}this.sbe(t[r]);++this.c
return!0},
sbe:function(a){this.d=a}}
J.aZ.prototype={
K:function(a,b){var t
if(typeof b!=="number")throw H.e(H.P(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaN(b)
if(this.gaN(a)===t)return 0
if(this.gaN(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaN:function(a){return a===0?1/a<0:a<0},
W:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(new P.p(""+a+".round()"))},
dq:function(a,b,c){if(this.K(b,c)>0)throw H.e(H.P(b))
if(this.K(a,b)<0)return b
if(this.K(a,c)>0)return c
return a},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu:function(a){return a&0x1FFFFFFF},
X:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a+b},
a_:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a-b},
co:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a/b},
C:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a*b},
as:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bx(a,b)},
H:function(a,b){return(a|0)===a?a/b|0:this.bx(a,b)},
bx:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.e(new P.p("Result of truncating division is "+H.h(t)+": "+H.h(a)+" ~/ "+b))},
aE:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
cn:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return(a&b)>>>0},
cH:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return(a^b)>>>0},
ap:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a<b},
ao:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a>b},
cp:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a>=b},
gw:function(a){return C.ai},
$isQ:1}
J.cH.prototype={
gw:function(a){return C.ah},
$isI:1,
$ism:1,
$isQ:1}
J.eh.prototype={
gw:function(a){return C.ag},
$isI:1,
$isQ:1}
J.aF.prototype={
av:function(a,b){if(b>=a.length)throw H.e(H.L(a,b))
return a.charCodeAt(b)},
X:function(a,b){if(typeof b!=="string")throw H.e(P.j0(b,null,null))
return a+b},
cD:function(a,b,c){var t
if(c>a.length)throw H.e(P.bu(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
cC:function(a,b){return this.cD(a,b,0)},
b4:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.eY(b,null,null))
if(b>c)throw H.e(P.eY(b,null,null))
if(c>a.length)throw H.e(P.eY(c,null,null))
return a.substring(b,c)},
cE:function(a,b){return this.b4(a,b,null)},
K:function(a,b){var t
if(typeof b!=="string")throw H.e(H.P(b))
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
gw:function(a){return C.aa},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.e(H.L(a,b))
return a[b]},
$isl:1,
$asl:function(){},
$isr:1}
H.c.prototype={$asc:null}
H.b_.prototype={
gA:function(a){return new H.cJ(this,this.gj(this),0,null,[H.ax(this,"b_",0)])},
e5:function(a,b){var t,s
t=H.M([],[H.ax(this,"b_",0)])
C.a.sj(t,this.gj(this))
for(s=0;s<this.gj(this);++s)t[s]=this.p(0,s)
return t},
e4:function(a){return this.e5(a,!0)}}
H.cJ.prototype={
gt:function(){return this.d},
q:function(){var t,s,r,q
t=this.a
s=J.ac(t)
r=s.gj(t)
if(this.b!==r)throw H.e(new P.a5(t))
q=this.c
if(q>=r){this.sa2(null)
return!1}this.sa2(s.p(t,q));++this.c
return!0},
sa2:function(a){this.d=a}}
H.cK.prototype={
gA:function(a){return new H.eq(null,J.dg(this.a),this.b,this.$ti)},
gj:function(a){return J.dh(this.a)},
$asah:function(a,b){return[b]}}
H.dE.prototype={$isc:1,
$asc:function(a,b){return[b]}}
H.eq.prototype={
q:function(){var t=this.b
if(t.q()){this.sa2(this.c.$1(t.gt()))
return!0}this.sa2(null)
return!1},
gt:function(){return this.a},
sa2:function(a){this.a=a},
$ascG:function(a,b){return[b]}}
H.cL.prototype={
gj:function(a){return J.dh(this.a)},
p:function(a,b){return this.b.$1(J.ki(this.a,b))},
$asc:function(a,b){return[b]},
$asb_:function(a,b){return[b]},
$asah:function(a,b){return[b]}}
H.c_.prototype={}
H.id.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.ie.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.ho.prototype={
sdQ:function(a){this.z=a},
sdT:function(a){this.ch=a}}
H.aS.prototype={
bA:function(a,b){if(!this.f.v(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.aH()},
e_:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.aa(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.bq();++r.d}this.y=!1}this.aH()},
di:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.q(a),s=0;r=this.ch,s<r.length;s+=2)if(t.v(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
dZ:function(a){var t,s,r
if(this.ch==null)return
for(t=J.q(a),s=0;r=this.ch,s<r.length;s+=2)if(t.v(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.D(new P.p("removeRange"))
P.jl(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
cA:function(a,b){if(!this.r.v(0,a))return
this.db=b},
dK:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.D(0,c)
return}H.d(b===1)
t=this.cx
if(t==null){t=P.iv(null,null)
this.cx=t}t.M(0,new H.hi(a,c))},
dJ:function(a,b){var t
if(!this.r.v(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.al()
return}H.d(b===1)
t=this.cx
if(t==null){t=P.iv(null,null)
this.cx=t}t.M(0,this.gdR())},
dL:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.ad(a)
if(b!=null)P.ad(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.ba(a)
s[1]=b==null?null:b.k(0)
for(r=new P.bE(t,t.r,null,null,[null]),r.c=t.e;r.q();)r.d.D(0,s)},
a6:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.ap(o)
p=H.ay(o)
this.dL(q,p)
if(this.db){this.al()
if(this===u.globalState.e)throw o}}finally{this.cy=H.lF(r)
u.globalState.d=H.jV(t,"$isaS")
if(t!=null)$=t.gdP()
if(this.cx!=null)for(;n=this.cx,!n.gak(n);)this.cx.c_().$0()}return s},
bX:function(a){return this.b.h(0,a)},
bi:function(a,b){var t=this.b
if(t.B(0,a))throw H.e(P.bZ("Registry: ports must be registered only once."))
t.i(0,a,b)},
aH:function(){var t=this.b
if(t.gj(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.al()},
al:function(){var t,s,r
t=this.cx
if(t!=null)t.N(0)
for(t=this.b,s=t.gck(t),s=s.gA(s);s.q();)s.gt().d_()
t.N(0)
this.c.N(0)
u.globalState.z.aa(0,this.a)
this.dx.N(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].D(0,t[r+1])
this.ch=null}},
gdP:function(){return this.d},
gds:function(){return this.e}}
H.hi.prototype={
$0:function(){this.a.D(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.h0.prototype={
dv:function(){var t=this.a
if(t.b===t.c)return
return t.c_()},
c2:function(){var t,s,r
t=this.dv()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.B(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gak(s)}else s=!1
else s=!1
else s=!1
if(s)H.D(P.bZ("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gak(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aI(["command","close"])
r=new H.ab(!0,new P.d7(0,null,null,null,null,null,0,[null,P.m])).F(r)
s.toString
self.postMessage(r)}return!1}t.dX()
return!0},
bv:function(){if(self.window!=null)new H.h1(this).$0()
else for(;this.c2(););},
ab:function(){var t,s,r,q,p
if(!u.globalState.x)this.bv()
else try{this.bv()}catch(r){t=H.ap(r)
s=H.ay(r)
q=u.globalState.Q
p=P.aI(["command","error","msg",H.h(t)+"\n"+H.h(s)])
p=new H.ab(!0,P.bF(null,P.m)).F(p)
q.toString
self.postMessage(p)}}}
H.h1.prototype={
$0:function(){if(!this.a.c2())return
P.lh(C.r,this)},
$S:function(){return{func:1,v:true}}}
H.aT.prototype={
dX:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.a6(this.b)}}
H.hn.prototype={}
H.ed.prototype={
$0:function(){H.kW(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.ee.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(!this.d)this.a.$1(this.c)
else{s=this.a
if(H.b7(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.b7(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.aH()},
$S:function(){return{func:1,v:true}}}
H.fV.prototype={}
H.b4.prototype={
D:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.lt(b)
if(t.gds()===s){s=J.ac(r)
switch(s.h(r,0)){case"pause":t.bA(s.h(r,1),s.h(r,2))
break
case"resume":t.e_(s.h(r,1))
break
case"add-ondone":t.di(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.dZ(s.h(r,1))
break
case"set-errors-fatal":t.cA(s.h(r,1),s.h(r,2))
break
case"ping":t.dK(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.dJ(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.aa(0,s)
break}return}u.globalState.f.a.M(0,new H.aT(t,new H.hp(this,r),"receive"))},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.b4){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gu:function(a){return this.b.a}}
H.hp.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.cY(0,this.b)},
$S:function(){return{func:1}}}
H.bG.prototype={
D:function(a,b){var t,s,r
t=P.aI(["command","message","port",this,"msg",b])
s=new H.ab(!0,P.bF(null,P.m)).F(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
v:function(a,b){var t,s
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
gu:function(a){return C.b.cH((this.b<<16^this.a<<8)>>>0,this.c)}}
H.b1.prototype={
d_:function(){this.c=!0
this.b=null},
cY:function(a,b){if(this.c)return
this.b.$1(b)},
$islb:1}
H.fv.prototype={
cU:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.M(0,new H.aT(s,new H.fw(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.bK(new H.fx(this,b),0),a)}else{H.d(a>0)
throw H.e(new P.p("Timer greater than 0."))}}}
H.fw.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.fx.prototype={
$0:function(){this.a.c=null
H.i3()
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.ag.prototype={
gu:function(a){var t=this.a
t=C.b.aE(t,0)^C.b.H(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
v:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.ag){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.ab.prototype={
F:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gj(t))
t=J.q(a)
if(!!t.$isbp)return["buffer",a]
if(!!t.$isb0)return["typed",a]
if(!!t.$isl)return this.cu(a)
if(!!t.$iskT){r=this.gcr()
q=t.gL(a)
q=H.iw(q,r,H.ax(q,"ah",0),null)
q=P.jh(q,!0,H.ax(q,"ah",0))
t=t.gck(a)
t=H.iw(t,r,H.ax(t,"ah",0),null)
return["map",q,P.jh(t,!0,H.ax(t,"ah",0))]}if(!!t.$isjf)return this.cv(a)
if(!!t.$isa)this.ci(a)
if(!!t.$islb)this.ac(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isb4)return this.cw(a)
if(!!t.$isbG)return this.cz(a)
if(!!t.$isaX){p=a.$static_name
if(p==null)this.ac(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isag)return["capability",a.a]
if(!(a instanceof P.o))this.ci(a)
return["dart",u.classIdExtractor(a),this.ct(u.classFieldsExtractor(a))]},
ac:function(a,b){throw H.e(new P.p((b==null?"Can't transmit:":b)+" "+H.h(a)))},
ci:function(a){return this.ac(a,null)},
cu:function(a){var t
H.d(typeof a!=="string")
t=this.cs(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.ac(a,"Can't serialize indexable: ")},
cs:function(a){var t,s
t=[]
C.a.sj(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.F(a[s])
return t},
ct:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.F(a[t]))
return a},
cv:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.ac(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sj(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.F(a[t[r]])
return["js-object",t,s]},
cz:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cw:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.aR.prototype={
O:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.e(P.j_("Bad serialized message: "+H.h(a)))
switch(C.a.gdG(a)){case"ref":H.d(J.C(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.d(J.C(a[0],"buffer"))
t=a[1]
C.a.l(this.b,t)
return t
case"typed":H.d(J.C(a[0],"typed"))
t=a[1]
C.a.l(this.b,t)
return t
case"fixed":H.d(J.C(a[0],"fixed"))
t=a[1]
C.a.l(this.b,t)
s=H.M(this.a5(t),[null])
s.fixed$length=Array
return s
case"extendable":H.d(J.C(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.M(this.a5(t),[null])
case"mutable":H.d(J.C(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.a5(t)
case"const":H.d(J.C(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
s=H.M(this.a5(t),[null])
s.fixed$length=Array
return s
case"map":return this.dA(a)
case"sendport":return this.dB(a)
case"raw sendport":H.d(J.C(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.dz(a)
case"function":H.d(J.C(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.d(J.C(a[0],"capability"))
return new H.ag(a[1])
case"dart":H.d(J.C(a[0],"dart"))
r=a[1]
q=a[2]
p=u.instanceFromClassId(r)
C.a.l(this.b,p)
this.a5(q)
return u.initializeEmptyInstance(r,p,q)
default:throw H.e("couldn't deserialize: "+H.h(a))}},
a5:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.O(a[t]))
return a},
dA:function(a){var t,s,r,q,p
H.d(J.C(a[0],"map"))
t=a[1]
s=a[2]
r=P.J()
C.a.l(this.b,r)
t=J.kt(t,this.gdw()).e4(0)
for(q=J.ac(s),p=0;p<t.length;++p)r.i(0,t[p],this.O(q.h(s,p)))
return r},
dB:function(a){var t,s,r,q,p,o,n
H.d(J.C(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.bX(r)
if(o==null)return
n=new H.b4(o,s)}else n=new H.bG(t,r,s)
C.a.l(this.b,n)
return n},
dz:function(a){var t,s,r,q,p,o
H.d(J.C(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.ac(t),p=J.ac(s),o=0;o<q.gj(t);++o)r[q.h(t,o)]=this.O(p.h(s,o))
return r}}
H.f0.prototype={}
H.fC.prototype={
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
H.cU.prototype={
k:function(a){var t=this.b
if(t==null)return"NullError: "+H.h(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.ej.prototype={
k:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.h(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.h(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.h(this.a)+")"}}
H.fG.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.ig.prototype={
$1:function(a){if(!!J.q(a).$isaY)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.d9.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.hZ.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.i_.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.i0.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.i1.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.i2.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.aX.prototype={
k:function(a){return"Closure '"+H.cX(this).trim()+"'"},
$isip:1,
ge8:function(){return this},
$D:null}
H.fp.prototype={}
H.fg.prototype={
k:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bb.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bb))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gu:function(a){var t,s
t=this.c
if(t==null)s=H.aL(this.a)
else s=typeof t!=="object"?J.af(t):H.aL(t)
return(s^H.aL(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.h(this.d)+"' of "+H.eX(t)}}
H.fE.prototype={
k:function(a){return this.a}}
H.dr.prototype={
k:function(a){return this.a}}
H.f5.prototype={
k:function(a){return"RuntimeError: "+H.h(this.a)}}
H.fQ.prototype={
k:function(a){return C.i.X("Assertion failed: ",P.io(this.a))}}
H.at.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gu:function(a){return J.af(this.a)},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.at){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.a7.prototype={
gj:function(a){return this.a},
gak:function(a){return this.a===0},
gL:function(a){return new H.em(this,[H.b8(this,0)])},
gck:function(a){return H.iw(this.gL(this),new H.ei(this),H.b8(this,0),H.b8(this,1))},
B:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bn(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bn(s,b)}else return this.dM(b)},
dM:function(a){var t=this.d
if(t==null)return!1
return this.a8(this.ah(t,this.a7(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.a3(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.a3(r,b)
return s==null?null:s.b}else return this.dN(b)},
dN:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.ah(t,this.a7(a))
r=this.a8(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aB()
this.b=t}this.bg(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aB()
this.c=s}this.bg(s,b,c)}else{r=this.d
if(r==null){r=this.aB()
this.d=r}q=this.a7(b)
p=this.ah(r,q)
if(p==null)this.aD(r,q,[this.aC(b,c)])
else{o=this.a8(p,b)
if(o>=0)p[o].b=c
else p.push(this.aC(b,c))}}},
aa:function(a,b){if(typeof b==="string")return this.bt(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bt(this.c,b)
else return this.dO(b)},
dO:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.ah(t,this.a7(a))
r=this.a8(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.by(q)
return q.b},
N:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
aM:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.e(new P.a5(this))
t=t.c}},
bg:function(a,b,c){var t=this.a3(a,b)
if(t==null)this.aD(a,b,this.aC(b,c))
else t.b=c},
bt:function(a,b){var t
if(a==null)return
t=this.a3(a,b)
if(t==null)return
this.by(t)
this.bo(a,b)
return t.b},
aC:function(a,b){var t,s
t=new H.el(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
by:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.r=this.r+1&67108863},
a7:function(a){return J.af(a)&0x3ffffff},
a8:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.C(a[s].a,b))return s
return-1},
k:function(a){return P.l1(this)},
a3:function(a,b){return a[b]},
ah:function(a,b){return a[b]},
aD:function(a,b,c){H.d(c!=null)
a[b]=c},
bo:function(a,b){delete a[b]},
bn:function(a,b){return this.a3(a,b)!=null},
aB:function(){var t=Object.create(null)
this.aD(t,"<non-identifier-key>",t)
this.bo(t,"<non-identifier-key>")
return t},
$iskT:1}
H.ei.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.el.prototype={}
H.em.prototype={
gj:function(a){return this.a.a},
gA:function(a){var t,s
t=this.a
s=new H.en(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.en.prototype={
gt:function(){return this.d},
q:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a5(t))
else{t=this.c
if(t==null){this.sbf(null)
return!1}else{this.sbf(t.a)
this.c=this.c.c
return!0}}},
sbf:function(a){this.d=a}}
H.hV.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.hW.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.r]}}}
H.hX.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.r]}}}
H.bp.prototype={
gw:function(a){return C.a1},
$isbp:1}
H.b0.prototype={$isb0:1}
H.ey.prototype={
gw:function(a){return C.a2}}
H.cP.prototype={
gj:function(a){return a.length},
$isl:1,
$asl:function(){},
$isn:1,
$asn:function(){}}
H.cQ.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.L(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.D(H.L(a,b))
a[b]=c}}
H.cR.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.D(H.L(a,b))
a[b]=c},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]}}
H.cO.prototype={
gw:function(a){return C.a3},
$isc:1,
$asc:function(){return[P.I]},
$isb:1,
$asb:function(){return[P.I]},
$ise2:1}
H.ez.prototype={
gw:function(a){return C.a4},
$isc:1,
$asc:function(){return[P.I]},
$isb:1,
$asb:function(){return[P.I]}}
H.eA.prototype={
gw:function(a){return C.a5},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.L(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]}}
H.eB.prototype={
gw:function(a){return C.a6},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.L(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]},
$isjc:1}
H.eC.prototype={
gw:function(a){return C.a7},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.L(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]}}
H.eD.prototype={
gw:function(a){return C.ab},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.L(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]},
$isjA:1}
H.eE.prototype={
gw:function(a){return C.ac},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.L(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]},
$isjB:1}
H.cS.prototype={
gw:function(a){return C.ad},
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.L(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]}}
H.eF.prototype={
gw:function(a){return C.ae},
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.L(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]},
$isjC:1}
H.bq.prototype={
$asl:function(){},
$isc:1,
$asc:function(){return[P.m]},
$asn:function(){},
$isb:1,
$asb:function(){return[P.m]}}
H.br.prototype={
$asl:function(){},
$isc:1,
$asc:function(){return[P.I]},
$asn:function(){},
$isb:1,
$asb:function(){return[P.I]}}
H.bs.prototype={
$asl:function(){},
$asc:function(){return[P.I]},
$asn:function(){},
$asb:function(){return[P.I]}}
H.bt.prototype={
$asl:function(){},
$asc:function(){return[P.m]},
$asn:function(){},
$asb:function(){return[P.m]}}
P.fS.prototype={
$1:function(a){var t,s
H.i3()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.fR.prototype={
$1:function(a){var t,s
t=this.a
H.d(t.a==null);++u.globalState.f.b
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.fT.prototype={
$0:function(){H.i3()
this.a.$0()},
$S:function(){return{func:1}}}
P.fU.prototype={
$0:function(){H.i3()
this.a.$0()},
$S:function(){return{func:1}}}
P.fX.prototype={}
P.hB.prototype={
dr:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.bw("Future already completed"))
t.ax(b)}}
P.d6.prototype={
dU:function(a){if(this.c!==6)return!0
H.d(!0)
return this.b.b.aR(this.d,a.a)},
dI:function(a){var t,s
t=(this.c&2)!==0
if(t){H.d(t)
t=this.e!=null}else t=!1
H.d(t)
s=this.e
t=this.b.b
if(H.b7(s,{func:1,args:[P.o,P.bv]}))return t.e1(s,a.a,a.b)
else return t.aR(s,a.a)}}
P.an.prototype={
c7:function(a,b){var t,s,r
t=$.A
if(t!==C.f){t.toString
if(b!=null)b=P.lx(b,t)}s=new P.an(0,t,null,[null])
r=b==null?1:3
this.bh(new P.d6(null,s,r,a,b,[H.b8(this,0),null]))
return s},
c6:function(a){return this.c7(a,null)},
bj:function(a){H.d(this.a<4)
H.d(a.a>=4)
this.a=a.a
this.c=a.c},
bh:function(a){var t
H.d(a.a==null)
t=this.a
if(t<=1){a.a=H.jV(this.c,"$isd6")
this.c=a}else{if(t===2){H.d(!0)
t=this.c
if(t.a<4){t.bh(a)
return}this.bj(t)}H.d(this.a>=4)
t=this.b
t.toString
P.hJ(null,null,t,new P.h6(this,a))}},
bs:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.d(!0)
s=this.c
if(s.a<4){s.bs(a)
return}this.bj(s)}H.d(this.a>=4)
t.a=this.a4(a)
s=this.b
s.toString
P.hJ(null,null,s,new P.ha(t,this))}},
bu:function(){H.d(this.a<4)
var t=this.c
this.c=null
return this.a4(t)},
a4:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
ax:function(a){var t,s
H.d(this.a<4)
t=this.$ti
if(H.hK(a,"$ise5",t,"$ase5"))if(H.hK(a,"$isan",t,null))P.jF(a,this)
else P.lp(a,this)
else{s=this.bu()
H.d(this.a<4)
this.a=4
this.c=a
P.bC(this,s)}},
ae:function(a,b){var t
H.d(this.a<4)
t=this.bu()
H.d(this.a<4)
this.a=8
this.c=new P.aW(a,b)
P.bC(this,t)},
d1:function(a){return this.ae(a,null)},
$ise5:1,
gaF:function(){return this.a},
gde:function(){return this.c}}
P.h6.prototype={
$0:function(){P.bC(this.a,this.b)},
$S:function(){return{func:1}}}
P.ha.prototype={
$0:function(){P.bC(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.h7.prototype={
$1:function(a){var t=this.a
H.d(t.a===1)
H.d(t.a===1)
t.a=0
t.ax(a)},
$S:function(){return{func:1,args:[,]}}}
P.h8.prototype={
$2:function(a,b){var t=this.a
H.d(t.a===1)
t.ae(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.h9.prototype={
$0:function(){this.a.ae(this.b,this.c)},
$S:function(){return{func:1}}}
P.hd.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.d
p=q.c
H.d((p&1)===0)
o=(p&2)===0
H.d(o)
t=null
try{H.d(o)
H.d(p===8)
t=q.b.b.c1(q.d)}catch(n){s=H.ap(n)
r=H.ay(n)
if(this.c){q=this.a.a
H.d(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.d(q.a===8)
p.b=q.c}else p.b=new P.aW(s,r)
p.a=!0
return}if(!!J.q(t).$ise5){if(t instanceof P.an&&t.gaF()>=4){if(t.gaF()===8){q=t
H.d(q.gaF()===8)
p=this.b
p.b=q.gde()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.c6(new P.he(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.he.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.hc.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.d((r.c&1)!==0)
this.a.b=r.b.b.aR(r.d,this.c)}catch(q){t=H.ap(q)
s=H.ay(q)
r=this.a
r.b=new P.aW(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.hb.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.d(q.a===8)
t=q.c
q=this.c
if(q.dU(t)){H.d((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.dI(t)
p.a=!1}}catch(o){s=H.ap(o)
r=H.ay(o)
q=this.a
p=q.a
H.d(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.d(q.a===8)
m.b=q.c}else m.b=new P.aW(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.d4.prototype={}
P.fi.prototype={
gj:function(a){var t,s
t={}
s=new P.an(0,$.A,null,[P.m])
t.a=0
this.dS(new P.fk(t),!0,new P.fl(t,s),s.gd0())
return s}}
P.fk.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.fl.prototype={
$0:function(){this.b.ax(this.a.a)},
$S:function(){return{func:1}}}
P.fj.prototype={}
P.aW.prototype={
k:function(a){return H.h(this.a)},
$isaY:1}
P.hF.prototype={}
P.hI.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.cV()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.e(t)
r=H.e(t)
r.stack=s.k(0)
throw r},
$S:function(){return{func:1}}}
P.hr.prototype={
e2:function(a){var t,s,r
try{if(C.f===$.A){a.$0()
return}P.jH(null,null,this,a)}catch(r){t=H.ap(r)
s=H.ay(r)
P.hH(null,null,this,t,s)}},
e3:function(a,b){var t,s,r
try{if(C.f===$.A){a.$1(b)
return}P.jI(null,null,this,a,b)}catch(r){t=H.ap(r)
s=H.ay(r)
P.hH(null,null,this,t,s)}},
dl:function(a){return new P.ht(this,a)},
aI:function(a){return new P.hs(this,a)},
dm:function(a){return new P.hu(this,a)},
h:function(a,b){return},
c1:function(a){if($.A===C.f)return a.$0()
return P.jH(null,null,this,a)},
aR:function(a,b){if($.A===C.f)return a.$1(b)
return P.jI(null,null,this,a,b)},
e1:function(a,b,c){if($.A===C.f)return a.$2(b,c)
return P.ly(null,null,this,a,b,c)}}
P.ht.prototype={
$0:function(){return this.a.c1(this.b)},
$S:function(){return{func:1}}}
P.hs.prototype={
$0:function(){return this.a.e2(this.b)},
$S:function(){return{func:1}}}
P.hu.prototype={
$1:function(a){return this.a.e3(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.d7.prototype={
a7:function(a){return H.lZ(a)&0x3ffffff},
a8:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.hk.prototype={
gA:function(a){var t=new P.bE(this,this.r,null,null,[null])
t.c=this.e
return t},
gj:function(a){return this.a},
U:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.d2(b)},
d2:function(a){var t=this.d
if(t==null)return!1
return this.ag(t[this.af(a)],a)>=0},
bX:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.U(0,a)?a:null
else return this.da(a)},
da:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.af(a)]
r=this.ag(s,a)
if(r<0)return
return J.b9(s,r).gd4()},
l:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.bk(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.bk(r,b)}else return this.M(0,b)},
M:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.lr()
this.d=t}s=this.af(b)
r=t[s]
if(r==null){q=[this.aw(b)]
H.d(q!=null)
t[s]=q}else{if(this.ag(r,b)>=0)return!1
r.push(this.aw(b))}return!0},
aa:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bl(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bl(this.c,b)
else return this.dc(0,b)},
dc:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.af(b)]
r=this.ag(s,b)
if(r<0)return!1
this.bm(s.splice(r,1)[0])
return!0},
N:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
bk:function(a,b){var t
if(a[b]!=null)return!1
t=this.aw(b)
H.d(!0)
a[b]=t
return!0},
bl:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bm(t)
delete a[b]
return!0},
aw:function(a){var t,s
t=new P.hl(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bm:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.r=this.r+1&67108863},
af:function(a){return J.af(a)&0x3ffffff},
ag:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.C(a[s].a,b))return s
return-1},
$isc:1,
$asc:null}
P.hl.prototype={
gd4:function(){return this.a}}
P.bE.prototype={
gt:function(){return this.d},
q:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a5(t))
else{t=this.c
if(t==null){this.sa1(null)
return!1}else{this.sa1(t.a)
this.c=this.c.b
return!0}}},
sa1:function(a){this.d=a}}
P.hh.prototype={}
P.t.prototype={
gA:function(a){return new H.cJ(a,this.gj(a),0,null,[H.ax(a,"t",0)])},
p:function(a,b){return this.h(a,b)},
bY:function(a,b){return new H.cL(a,b,[H.ax(a,"t",0),null])},
dH:function(a,b,c){var t,s,r
t=this.gj(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gj(a))throw H.e(new P.a5(a))}return s},
k:function(a){return P.ef(a,"[","]")},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
P.er.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.h(a)
t.a=s+": "
t.a+=H.h(b)},
$S:function(){return{func:1,args:[,,]}}}
P.eo.prototype={
gA:function(a){return new P.hm(this,this.c,this.d,this.b,null,this.$ti)},
gak:function(a){return this.b===this.c},
gj:function(a){return(this.c-this.b&this.a.length-1)>>>0},
p:function(a,b){var t,s
t=(this.c-this.b&this.a.length-1)>>>0
if(0>b||b>=t)H.D(P.z(b,this,"index",null,t))
s=this.a
return s[(this.b+b&s.length-1)>>>0]},
N:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
k:function(a){return P.ef(this,"{","}")},
c_:function(){var t,s,r
t=this.b
if(t===this.c)throw H.e(H.iq());++this.d
s=this.a
r=s[t]
s[t]=null
this.b=(t+1&s.length-1)>>>0
return r},
M:function(a,b){var t,s
t=this.a
s=this.c
t[s]=b
t=(s+1&t.length-1)>>>0
this.c=t
if(this.b===t)this.bq();++this.d},
bq:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.M(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.b0(s,0,q,t,r)
C.a.b0(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbw(s)},
cP:function(a,b){var t
H.d(!0)
t=new Array(8)
t.fixed$length=Array
this.sbw(H.M(t,[b]))},
sbw:function(a){this.a=a},
$asc:null}
P.hm.prototype={
gt:function(){return this.e},
q:function(){var t,s
t=this.a
if(this.c!==t.d)H.D(new P.a5(t))
s=this.d
if(s===this.b){this.sa1(null)
return!1}this.sa1(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sa1:function(a){this.e=a}}
P.f9.prototype={
k:function(a){return P.ef(this,"{","}")},
$isc:1,
$asc:null}
P.f8.prototype={}
P.aV.prototype={}
P.E.prototype={}
P.bd.prototype={
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.bd))return!1
return this.a===b.a&&this.b===b.b},
K:function(a,b){return C.b.K(this.a,b.a)},
gu:function(a){var t=this.a
return(t^C.b.aE(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.kM(H.la(this))
s=P.bU(H.l8(this))
r=P.bU(H.l4(this))
q=P.bU(H.l5(this))
p=P.bU(H.l7(this))
o=P.bU(H.l9(this))
n=P.kN(H.l6(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isE:1,
$asE:function(){return[P.bd]}}
P.I.prototype={$isE:1,
$asE:function(){return[P.Q]}}
P.aD.prototype={
ap:function(a,b){return C.b.ap(this.a,b.gd3())},
ao:function(a,b){return C.b.ao(this.a,b.gd3())},
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.aD))return!1
return this.a===b.a},
gu:function(a){return this.a&0x1FFFFFFF},
K:function(a,b){return C.b.K(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.dD()
s=this.a
if(s<0)return"-"+new P.aD(0-s).k(0)
r=t.$1(C.b.H(s,6e7)%60)
q=t.$1(C.b.H(s,1e6)%60)
p=new P.dC().$1(s%1e6)
return""+C.b.H(s,36e8)+":"+H.h(r)+":"+H.h(q)+"."+H.h(p)},
$isE:1,
$asE:function(){return[P.aD]}}
P.dC.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.r,args:[P.m]}}}
P.dD.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.r,args:[P.m]}}}
P.aY.prototype={}
P.bP.prototype={
k:function(a){return"Assertion failed"}}
P.cV.prototype={
k:function(a){return"Throw of null."}}
P.aq.prototype={
gaz:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gay:function(){return""},
k:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+t
q=this.gaz()+s+r
if(!this.a)return q
p=this.gay()
o=P.io(this.b)
return q+p+": "+H.h(o)}}
P.cY.prototype={
gaz:function(){return"RangeError"},
gay:function(){var t,s,r
H.d(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.h(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.h(t)
else if(r>t)s=": Not in range "+H.h(t)+".."+H.h(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.h(t)}return s}}
P.eb.prototype={
gaz:function(){return"RangeError"},
gay:function(){H.d(this.a)
if(J.k4(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.h(t)},
gj:function(a){return this.f}}
P.p.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.d3.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.bw.prototype={
k:function(a){return"Bad state: "+this.a}}
P.a5.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.h(P.io(t))+"."}}
P.d0.prototype={
k:function(a){return"Stack Overflow"},
$isaY:1}
P.dv.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.h5.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.h(t)}}
P.dF.prototype={
k:function(a){return"Expando:"+H.h(this.a)},
h:function(a,b){var t,s
t=this.b
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.D(P.j0(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.ji(b,"expando$values")
return s==null?null:H.ji(s,t)}}
P.m.prototype={$isE:1,
$asE:function(){return[P.Q]}}
P.ah.prototype={
gj:function(a){var t,s
H.d(!this.$isc)
t=this.gA(this)
for(s=0;t.q();)++s
return s},
p:function(a,b){var t,s,r
if(b<0)H.D(P.bu(b,0,null,"index",null))
for(t=this.gA(this),s=0;t.q();){r=t.gt()
if(b===s)return r;++s}throw H.e(P.z(b,this,"index",null,s))},
k:function(a){return P.kZ(this,"(",")")}}
P.cG.prototype={}
P.b.prototype={$isc:1,$asc:null,$asb:null}
P.as.prototype={}
P.aK.prototype={
gu:function(a){return P.o.prototype.gu.call(this,this)},
k:function(a){return"null"}}
P.Q.prototype={$isE:1,
$asE:function(){return[P.Q]}}
P.o.prototype={constructor:P.o,$iso:1,
v:function(a,b){return this===b},
gu:function(a){return H.aL(this)},
k:function(a){return H.eX(this)},
gw:function(a){return new H.at(H.hS(this),null)},
toString:function(){return this.k(this)}}
P.bv.prototype={}
P.r.prototype={$isE:1,
$asE:function(){return[P.r]}}
P.bx.prototype={
gj:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
gT:function(){return this.a}}
W.j.prototype={}
W.dj.prototype={
k:function(a){return String(a)},
$isa:1}
W.dk.prototype={
k:function(a){return String(a)},
$isa:1}
W.W.prototype={$iso:1}
W.dn.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.p("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.W]},
$isc:1,
$asc:function(){return[W.W]},
$isn:1,
$asn:function(){return[W.W]},
$isb:1,
$asb:function(){return[W.W]}}
W.bQ.prototype={}
W.dp.prototype={$isa:1}
W.bR.prototype={
aU:function(a,b,c){if(c!=null)return this.d6(a,b,P.lI(c,null))
return this.d7(a,b)},
cq:function(a,b){return this.aU(a,b,null)},
d6:function(a,b,c){return a.getContext(b,c)},
d7:function(a,b){return a.getContext(b)}}
W.bS.prototype={
ai:function(a,b,c){return a.addColorStop(b,c)}}
W.bT.prototype={
bL:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
dF:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
an:function(a){return P.hM(a.getContextAttributes())}}
W.aC.prototype={$isa:1,
gj:function(a){return a.length}}
W.dt.prototype={$isa:1}
W.x.prototype={$iso:1}
W.bc.prototype={
gj:function(a){return a.length}}
W.du.prototype={}
W.dw.prototype={
h:function(a,b){return a[b]},
gj:function(a){return a.length}}
W.dx.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gI:function(a){return a.z}}
W.be.prototype={
dY:function(a,b){return a.querySelector(b)}}
W.bV.prototype={$isa:1}
W.dy.prototype={
k:function(a){return String(a)}}
W.dz.prototype={
gam:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gI:function(a){return a.z}}
W.bW.prototype={
gam:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gI:function(a){return a.z}}
W.bX.prototype={
k:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(this.gS(a))+" x "+H.h(this.gR(a))},
v:function(a,b){var t
if(b==null)return!1
t=J.q(b)
if(!t.$isF)return!1
return a.left===t.gaP(b)&&a.top===t.gaT(b)&&this.gS(a)===t.gS(b)&&this.gR(a)===t.gR(b)},
gu:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gS(a)
q=this.gR(a)
return W.jG(W.aU(W.aU(W.aU(W.aU(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gR:function(a){return a.height},
gaP:function(a){return a.left},
gaT:function(a){return a.top},
gS:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isF:1,
$asF:function(){}}
W.dA.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.p("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[P.r]},
$isc:1,
$asc:function(){return[P.r]},
$isn:1,
$asn:function(){return[P.r]},
$isb:1,
$asb:function(){return[P.r]}}
W.dB.prototype={
gj:function(a){return a.length}}
W.bY.prototype={
k:function(a){return a.localName},
$isa:1}
W.i.prototype={$iso:1,$isi:1}
W.f.prototype={
cZ:function(a,b,c,d){return a.addEventListener(b,H.bK(c,1),!1)},
$iso:1,
$isf:1}
W.X.prototype={$iso:1}
W.dZ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.p("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.X]},
$isc:1,
$asc:function(){return[W.X]},
$isn:1,
$asn:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.e_.prototype={
gj:function(a){return a.length}}
W.e4.prototype={
gj:function(a){return a.length}}
W.Y.prototype={$iso:1}
W.e7.prototype={
gj:function(a){return a.length}}
W.bl.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.p("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.u]},
$isc:1,
$asc:function(){return[W.u]},
$isn:1,
$asn:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.c0.prototype={}
W.e8.prototype={
D:function(a,b){return a.send(b)}}
W.bm.prototype={}
W.ec.prototype={$isa:1}
W.aH.prototype={$iso:1,$isi:1,$isaH:1}
W.ep.prototype={
k:function(a){return String(a)}}
W.eu.prototype={
gj:function(a){return a.length}}
W.ev.prototype={
e9:function(a,b,c){return a.send(b,c)},
D:function(a,b){return a.send(b)}}
W.bo.prototype={}
W.Z.prototype={$iso:1}
W.ew.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.p("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.Z]},
$isc:1,
$asc:function(){return[W.Z]},
$isn:1,
$asn:function(){return[W.Z]},
$isb:1,
$asb:function(){return[W.Z]}}
W.K.prototype={$iso:1,$isi:1,$isK:1}
W.eG.prototype={$isa:1}
W.u.prototype={
k:function(a){var t=a.nodeValue
return t==null?this.cF(a):t},
$iso:1,
$isf:1}
W.cT.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.p("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.u]},
$isc:1,
$asc:function(){return[W.u]},
$isn:1,
$asn:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.eN.prototype={$isa:1}
W.eP.prototype={
gj:function(a){return a.length}}
W.a_.prototype={$iso:1,
gj:function(a){return a.length}}
W.eS.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.p("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a_]},
$isc:1,
$asc:function(){return[W.a_]},
$isn:1,
$asn:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.eV.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.eW.prototype={
D:function(a,b){return a.send(b)}}
W.f4.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gI:function(a){return a.z}}
W.cZ.prototype={
D:function(a,b){return a.send(b)}}
W.f7.prototype={
gj:function(a){return a.length}}
W.fb.prototype={$isa:1}
W.a0.prototype={$iso:1,$isf:1}
W.fc.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.p("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a0]},
$isc:1,
$asc:function(){return[W.a0]},
$isn:1,
$asn:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.a1.prototype={$iso:1}
W.fe.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.p("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a1]},
$isc:1,
$asc:function(){return[W.a1]},
$isn:1,
$asn:function(){return[W.a1]},
$isb:1,
$asb:function(){return[W.a1]}}
W.a2.prototype={$iso:1,
gj:function(a){return a.length}}
W.fh.prototype={
h:function(a,b){return this.bp(a,b)},
aM:function(a,b){var t,s
for(t=0;!0;++t){s=this.d9(a,t)
if(s==null)return
b.$2(s,this.bp(a,s))}},
gj:function(a){return a.length},
bp:function(a,b){return a.getItem(b)},
d9:function(a,b){return a.key(b)}}
W.R.prototype={$iso:1}
W.a9.prototype={}
W.a3.prototype={$iso:1,$isf:1}
W.S.prototype={$iso:1,$isf:1}
W.fr.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.p("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.S]},
$isc:1,
$asc:function(){return[W.S]},
$isn:1,
$asn:function(){return[W.S]},
$isb:1,
$asb:function(){return[W.S]}}
W.fs.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.p("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a3]},
$isc:1,
$asc:function(){return[W.a3]},
$isn:1,
$asn:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.fu.prototype={
gj:function(a){return a.length}}
W.a4.prototype={$iso:1}
W.aM.prototype={$iso:1,$isi:1,$isaM:1}
W.fy.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.p("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a4]},
$isc:1,
$asc:function(){return[W.a4]},
$isn:1,
$asn:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.fz.prototype={
gj:function(a){return a.length}}
W.b3.prototype={}
W.fB.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gI:function(a){return a.z}}
W.au.prototype={}
W.fH.prototype={
k:function(a){return String(a)},
$isa:1}
W.fJ.prototype={
gj:function(a){return a.length}}
W.fM.prototype={
gj:function(a){return a.length}}
W.fN.prototype={
D:function(a,b){return a.send(b)}}
W.aP.prototype={
gdu:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(new P.p("deltaY is not supported"))},
$iso:1,
$isi:1,
$isK:1,
$isaP:1}
W.bB.prototype={
gdj:function(a){var t,s
t=P.Q
s=new P.an(0,$.A,null,[t])
this.d5(a)
this.dd(a,W.jK(new W.fO(new P.hB(s,[t]))))
return s},
dd:function(a,b){return a.requestAnimationFrame(H.bK(b,1))},
d5:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isa:1}
W.fO.prototype={
$1:function(a){this.a.dr(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.fP.prototype={$isa:1}
W.aQ.prototype={$isa:1}
W.fW.prototype={
k:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(a.width)+" x "+H.h(a.height)},
v:function(a,b){var t,s,r
if(b==null)return!1
t=J.q(b)
if(!t.$isF)return!1
s=a.left
r=t.gaP(b)
if(s==null?r==null:s===r){s=a.top
r=t.gaT(b)
if(s==null?r==null:s===r){s=a.width
r=t.gS(b)
if(s==null?r==null:s===r){s=a.height
t=t.gR(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gu:function(a){var t,s,r,q
t=J.af(a.left)
s=J.af(a.top)
r=J.af(a.width)
q=J.af(a.height)
return W.jG(W.aU(W.aU(W.aU(W.aU(0,t),s),r),q))},
$isF:1,
$asF:function(){},
gR:function(a){return a.height},
gaP:function(a){return a.left},
gaT:function(a){return a.top},
gS:function(a){return a.width}}
W.d5.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.p("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[P.F]},
$isc:1,
$asc:function(){return[P.F]},
$isn:1,
$asn:function(){return[P.F]},
$isb:1,
$asb:function(){return[P.F]}}
W.fY.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.p("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.x]},
$isc:1,
$asc:function(){return[W.x]},
$isn:1,
$asn:function(){return[W.x]},
$isb:1,
$asb:function(){return[W.x]}}
W.fZ.prototype={$isa:1}
W.h_.prototype={
gR:function(a){return a.height},
gS:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.hf.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.p("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.Y]},
$isc:1,
$asc:function(){return[W.Y]},
$isn:1,
$asn:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.hg.prototype={$isa:1}
W.d8.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.p("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.u]},
$isc:1,
$asc:function(){return[W.u]},
$isn:1,
$asn:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.hy.prototype={$isa:1}
W.hz.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.p("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a2]},
$isc:1,
$asc:function(){return[W.a2]},
$isn:1,
$asn:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.hA.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.p("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.R]},
$isc:1,
$asc:function(){return[W.R]},
$isn:1,
$asn:function(){return[W.R]},
$isb:1,
$asb:function(){return[W.R]}}
W.hD.prototype={$isa:1}
W.hE.prototype={$isa:1}
W.h2.prototype={
dS:function(a,b,c,d){return W.aa(this.a,this.b,a,!1,H.b8(this,0))}}
W.iA.prototype={}
W.h3.prototype={
dg:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.k5(r,this.c,t,!1)}},
cX:function(a,b,c,d,e){this.dg()}}
W.h4.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.y.prototype={
gA:function(a){return new W.e1(a,this.gj(a),-1,null,[H.ax(a,"y",0)])},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
W.e1.prototype={
q:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbr(J.b9(this.a,t))
this.c=t
return!0}this.sbr(null)
this.c=s
return!1},
gt:function(){return this.d},
sbr:function(a){this.d=a}}
W.bf.prototype={$isc:1,
$asc:function(){return[W.W]},
$isb:1,
$asb:function(){return[W.W]}}
W.bg.prototype={$isc:1,
$asc:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.bh.prototype={$isc:1,
$asc:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.bi.prototype={$isc:1,
$asc:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.bj.prototype={$isc:1,
$asc:function(){return[W.W]},
$isb:1,
$asb:function(){return[W.W]}}
W.bk.prototype={$isc:1,
$asc:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.c1.prototype={}
W.cl.prototype={$isc:1,
$asc:function(){return[W.Z]},
$isb:1,
$asb:function(){return[W.Z]}}
W.c7.prototype={$isc:1,
$asc:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.c4.prototype={$isc:1,
$asc:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.cf.prototype={$isc:1,
$asc:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.cg.prototype={$isc:1,
$asc:function(){return[P.r]},
$isb:1,
$asb:function(){return[P.r]}}
W.ch.prototype={$isc:1,
$asc:function(){return[W.x]},
$isb:1,
$asb:function(){return[W.x]}}
W.ci.prototype={$isc:1,
$asc:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.cj.prototype={$isc:1,
$asc:function(){return[P.F]},
$isb:1,
$asb:function(){return[P.F]}}
W.c2.prototype={$isc:1,
$asc:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.c5.prototype={$isc:1,
$asc:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.c8.prototype={$isc:1,
$asc:function(){return[W.S]},
$isb:1,
$asb:function(){return[W.S]}}
W.c9.prototype={$isc:1,
$asc:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.ca.prototype={$isc:1,
$asc:function(){return[W.a1]},
$isb:1,
$asb:function(){return[W.a1]}}
W.cb.prototype={$isc:1,
$asc:function(){return[W.R]},
$isb:1,
$asb:function(){return[W.R]}}
W.cd.prototype={$isc:1,
$asc:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.cm.prototype={$isc:1,
$asc:function(){return[W.a1]},
$isb:1,
$asb:function(){return[W.a1]}}
W.cn.prototype={$isc:1,
$asc:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.co.prototype={$isc:1,
$asc:function(){return[W.S]},
$isb:1,
$asb:function(){return[W.S]}}
W.cy.prototype={$isc:1,
$asc:function(){return[W.Z]},
$isb:1,
$asb:function(){return[W.Z]}}
W.cz.prototype={$isc:1,
$asc:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.cx.prototype={$isc:1,
$asc:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.cC.prototype={$isc:1,
$asc:function(){return[P.F]},
$isb:1,
$asb:function(){return[P.F]}}
W.cD.prototype={$isc:1,
$asc:function(){return[P.r]},
$isb:1,
$asb:function(){return[P.r]}}
W.cE.prototype={$isc:1,
$asc:function(){return[W.x]},
$isb:1,
$asb:function(){return[W.x]}}
W.cF.prototype={$isc:1,
$asc:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.cp.prototype={$isc:1,
$asc:function(){return[W.R]},
$isb:1,
$asb:function(){return[W.R]}}
W.cq.prototype={$isc:1,
$asc:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.cs.prototype={$isc:1,
$asc:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.cA.prototype={$isc:1,
$asc:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.cB.prototype={$isc:1,
$asc:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
P.hL.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.r,,]}}}
P.hj.prototype={
dW:function(){return Math.random()}}
P.hq.prototype={}
P.F.prototype={$asF:null}
P.di.prototype={$isa:1}
P.aB.prototype={$isa:1}
P.dG.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dH.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dI.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dJ.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dK.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dL.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dM.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dN.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dO.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dP.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dQ.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dR.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dS.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dT.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gI:function(a){return a.z}}
P.dU.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dV.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gI:function(a){return a.z}}
P.dW.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dX.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e0.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e3.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.a6.prototype={}
P.ar.prototype={$isa:1}
P.e9.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ai.prototype={$iso:1}
P.ek.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return this.P(a,b)},
i:function(a,b,c){throw H.e(new P.p("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
P:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.ai]},
$isb:1,
$asb:function(){return[P.ai]}}
P.es.prototype={$isa:1}
P.et.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.aj.prototype={$iso:1}
P.eH.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return this.P(a,b)},
i:function(a,b,c){throw H.e(new P.p("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
P:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.aj]},
$isb:1,
$asb:function(){return[P.aj]}}
P.eO.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eT.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eU.prototype={
gj:function(a){return a.length}}
P.eZ.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.f_.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.f6.prototype={$isa:1}
P.fm.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return this.P(a,b)},
i:function(a,b,c){throw H.e(new P.p("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
P:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.r]},
$isb:1,
$asb:function(){return[P.r]}}
P.G.prototype={$isa:1}
P.fn.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fo.prototype={$isa:1}
P.d1.prototype={}
P.fq.prototype={$isa:1}
P.by.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ak.prototype={$iso:1}
P.fA.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return this.P(a,b)},
i:function(a,b,c){throw H.e(new P.p("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
P:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.ak]},
$isb:1,
$asb:function(){return[P.ak]}}
P.fI.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fK.prototype={$isa:1}
P.fL.prototype={$isa:1}
P.bD.prototype={$isa:1}
P.hv.prototype={$isa:1}
P.hw.prototype={$isa:1}
P.hx.prototype={$isa:1}
P.ce.prototype={$isc:1,
$asc:function(){return[P.ai]},
$isb:1,
$asb:function(){return[P.ai]}}
P.c6.prototype={$isc:1,
$asc:function(){return[P.aj]},
$isb:1,
$asb:function(){return[P.aj]}}
P.c3.prototype={$isc:1,
$asc:function(){return[P.r]},
$isb:1,
$asb:function(){return[P.r]}}
P.cc.prototype={$isc:1,
$asc:function(){return[P.ak]},
$isb:1,
$asb:function(){return[P.ak]}}
P.cr.prototype={$isc:1,
$asc:function(){return[P.ak]},
$isb:1,
$asb:function(){return[P.ak]}}
P.ct.prototype={$isc:1,
$asc:function(){return[P.r]},
$isb:1,
$asb:function(){return[P.r]}}
P.cu.prototype={$isc:1,
$asc:function(){return[P.aj]},
$isb:1,
$asb:function(){return[P.aj]}}
P.cv.prototype={$isc:1,
$asc:function(){return[P.ai]},
$isb:1,
$asb:function(){return[P.ai]}}
P.dm.prototype={
gj:function(a){return a.length}}
P.f2.prototype={
bz:function(a,b){return a.activeTexture(b)},
bB:function(a,b,c){return a.attachShader(b,c)},
bC:function(a,b,c){return a.bindBuffer(b,c)},
bD:function(a,b,c){return a.bindTexture(b,c)},
bE:function(a,b){return a.blendEquation(b)},
bF:function(a,b,c){return a.blendFunc(b,c)},
bG:function(a,b,c,d){return a.bufferData(b,c,d)},
bH:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bI:function(a,b){return a.compileShader(b)},
bJ:function(a){return a.createBuffer()},
bK:function(a){return a.createProgram()},
bM:function(a,b){return a.createShader(b)},
bN:function(a){return a.createTexture()},
bP:function(a,b){return a.depthMask(b)},
bQ:function(a,b){return a.disable(b)},
bR:function(a,b,c,d){return a.drawArrays(b,c,d)},
bS:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bT:function(a,b){return a.enable(b)},
bU:function(a,b){return a.enableVertexAttribArray(b)},
an:function(a){return P.hM(a.getContextAttributes())},
aV:function(a){return a.getError()},
aW:function(a,b){return a.getProgramInfoLog(b)},
aX:function(a,b,c){return a.getProgramParameter(b,c)},
aY:function(a,b){return a.getShaderInfoLog(b)},
aZ:function(a,b,c){return a.getShaderParameter(b,c)},
b_:function(a,b,c){return a.getUniformLocation(b,c)},
bW:function(a,b){return a.linkProgram(b)},
bZ:function(a,b,c){return a.pixelStorei(b,c)},
b1:function(a,b,c){return a.shaderSource(b,c)},
b2:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aS:function(a,b,c,d,e,f,g,h,i,j){this.aG(a,b,c,d,e,f,g)
return},
c3:function(a,b,c,d,e,f,g){return this.aS(a,b,c,d,e,f,g,null,null,null)},
aG:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
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
cm:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.f3.prototype={
dk:function(a,b){return a.beginTransformFeedback(b)},
dn:function(a,b){return a.bindVertexArray(b)},
dt:function(a){return a.createVertexArray()},
dC:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dD:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dE:function(a){return a.endTransformFeedback()},
e6:function(a,b,c,d){this.df(a,b,c,d)
return},
df:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
e7:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bz:function(a,b){return a.activeTexture(b)},
bB:function(a,b,c){return a.attachShader(b,c)},
bC:function(a,b,c){return a.bindBuffer(b,c)},
bD:function(a,b,c){return a.bindTexture(b,c)},
bE:function(a,b){return a.blendEquation(b)},
bF:function(a,b,c){return a.blendFunc(b,c)},
bG:function(a,b,c,d){return a.bufferData(b,c,d)},
bH:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bI:function(a,b){return a.compileShader(b)},
bJ:function(a){return a.createBuffer()},
bK:function(a){return a.createProgram()},
bM:function(a,b){return a.createShader(b)},
bN:function(a){return a.createTexture()},
bP:function(a,b){return a.depthMask(b)},
bQ:function(a,b){return a.disable(b)},
bR:function(a,b,c,d){return a.drawArrays(b,c,d)},
bS:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bT:function(a,b){return a.enable(b)},
bU:function(a,b){return a.enableVertexAttribArray(b)},
an:function(a){return P.hM(a.getContextAttributes())},
aV:function(a){return a.getError()},
aW:function(a,b){return a.getProgramInfoLog(b)},
aX:function(a,b,c){return a.getProgramParameter(b,c)},
aY:function(a,b){return a.getShaderInfoLog(b)},
aZ:function(a,b,c){return a.getShaderParameter(b,c)},
b_:function(a,b,c){return a.getUniformLocation(b,c)},
bW:function(a,b){return a.linkProgram(b)},
bZ:function(a,b,c){return a.pixelStorei(b,c)},
b1:function(a,b,c){return a.shaderSource(b,c)},
b2:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aS:function(a,b,c,d,e,f,g,h,i,j){this.aG(a,b,c,d,e,f,g)
return},
c3:function(a,b,c,d,e,f,g){return this.aS(a,b,c,d,e,f,g,null,null,null)},
aG:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
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
cm:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isa:1}
P.hC.prototype={$isa:1}
P.ff.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.z(b,a,null,null,null))
return P.hM(this.d8(a,b))},
i:function(a,b,c){throw H.e(new P.p("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
d8:function(a,b){return a.item(b)},
$isc:1,
$asc:function(){return[P.as]},
$isb:1,
$asb:function(){return[P.as]}}
P.ck.prototype={$isc:1,
$asc:function(){return[P.as]},
$isb:1,
$asb:function(){return[P.as]}}
P.cw.prototype={$isc:1,
$asc:function(){return[P.as]},
$isb:1,
$asb:function(){return[P.as]}}
B.i8.prototype={
$1:function(a){$.$get$hN().i(0,a.which,!0)},
$S:function(){return{func:1,args:[W.aH]}}}
B.i9.prototype={
$1:function(a){$.$get$hN().i(0,a.which,null)},
$S:function(){return{func:1,args:[W.aH]}}}
B.ia.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.lG=t
$.lH=C.b.a_(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.iK=s-C.b.H(window.innerWidth,2)
$.jX=-(t-C.b.H(window.innerHeight,2))},
$S:function(){return{func:1,args:[W.K]}}}
B.ib.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.bM=t-C.b.H(window.innerWidth,2)
$.bN=-(s-C.b.H(window.innerHeight,2))
if(a.button===2)$.$get$bL().i(0,"right",!0)
else $.$get$bL().i(0,"left",!0)},
$S:function(){return{func:1,args:[W.K]}}}
B.ic.prototype={
$1:function(a){if(a.button===2)$.$get$bL().i(0,"right",null)
else $.$get$bL().i(0,"left",null)},
$S:function(){return{func:1,args:[W.K]}}}
B.eI.prototype={
cQ:function(a,b,c,d){var t
d.toString
W.aa(d,W.lP().$1(d),new B.eJ(this),!1,W.aP)
W.aa(d,"mousemove",new B.eK(this),!1,W.K)
t=W.aM
W.aa(d,"touchstart",new B.eL(),!1,t)
W.aa(d,"touchmove",new B.eM(this),!1,t)
B.m2(null)}}
B.eJ.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.aj.gdu(a)*r.k3
if(C.c.a_(r.fy,t)>0)r.fy=H.T(C.c.a_(r.fy,t))}catch(q){s=H.ap(q)
P.ad(s)}},
$S:function(){return{func:1,args:[W.aP]}}}
B.eK.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=H.T(t.go+C.b.a_($.iK,$.bM)*0.01)
s=t.id
r=$.bN
q=$.jX
t.id=H.T(s+(r-q)*0.01)
$.bM=$.iK
$.bN=q}},
$S:function(){return{func:1,args:[W.K]}}}
B.eL.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.W(t.clientX)
C.c.W(t.clientY)
$.bM=s
C.c.W(t.clientX)
$.bN=C.c.W(t.clientY)},
$S:function(){return{func:1,args:[W.aM]}}}
B.eM.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.W(t.clientX)
t=C.c.W(t.clientY)
r=this.a
r.go=H.T(r.go+C.b.a_(s,$.bM)*0.01)
r.id=H.T(r.id+($.bN-t)*0.01)
$.bM=s
$.bN=t},
$S:function(){return{func:1,args:[W.aM]}}}
G.ex.prototype={}
G.fF.prototype={
E:function(a,b){var t=this.d
if(H.ao(!t.B(0,a)))H.aw("uniform "+a+" already set")
t.i(0,a,b)},
bb:function(){return this.d},
k:function(a){var t,s,r,q
t=H.M(["{"+new H.at(H.hS(this),null).k(0)+"}["+this.a+"]"],[P.r])
for(s=this.d,r=s.gL(s),r=r.gA(r);r.q();){q=r.gt()
C.a.l(t,H.h(q)+": "+H.h(s.h(0,q)))}return C.a.a9(t,"\n")}}
G.dq.prototype={}
G.ds.prototype={
bV:function(a,b,c){J.kj(this.a,b)
if(c>0)J.kE(this.a,b,c)}}
G.dY.prototype={}
G.e6.prototype={
cK:function(){var t,s,r,q,p,o,n,m,l,k
t=this.c
s=t.length
H.d(s>0)
s=new Array(t.length*6)
s.fixed$length=Array
r=H.M(s,[P.m])
for(s=this.b,q=0,p=0;!1;++p){o=s[p]
r[q]=o.geb(o)
r[q+1]=o.gec(o)
r[q+2]=o.ged(o)
q+=3}for(s=t.length,p=0;n=t.length,p<n;n===s||(0,H.V)(t),++p){m=t[p]
l=m.a
r[q]=l
r[q+1]=m.b
k=m.c
r[q+2]=k
r[q+3]=l
r[q+4]=k
r[q+5]=m.d
q+=6}H.d(q===r.length)
return r},
cM:function(a,b){var t,s,r,q,p,o,n,m
t=a*b
H.d(this.d.length===t)
s=[]
this.e.i(0,"aTexUV",s)
for(r=b-1,q=a-1,p=0;p<b;++p)for(o=p/r,n=0;n<a;++n){m=new Float32Array(2)
m[0]=o
m[1]=n/q
C.a.l(s,new T.aO(m))}H.d(s.length===t)},
cL:function(a,b,c){var t,s,r,q,p,o,n,m,l
H.d(this.d.length===a*b)
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
H.d(!0)
C.a.l(t,new G.dY(p+m,l+m,l+n,p+n))
n=m}q=o}},
k:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gL(s),r=r.gA(r);r.q();){q=r.gt()
p=$.$get$O().h(0,q).a
C.a.l(t,H.h(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.a9(t," ")}}
G.d2.prototype={}
G.bA.prototype={}
G.cM.prototype={}
G.cN.prototype={
b8:function(a,b,c){var t,s
if(C.i.av(a,0)===105){if(H.ao(C.b.as(b.length,c)===this.z))H.aw("ChangeAttribute "+this.z)}else{t=C.b.as(b.length,c)
if(H.ao(t===(this.ch.length/3|0)))H.aw("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.dd(t.a,34962,s)
J.iP(t.a,34962,b,35048)},
cN:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
a0:function(a,b,c){var t,s,r,q,p,o
t=J.iM(a,0)===105
if(t&&this.z===0)this.z=C.b.as(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.ih(r.a))
this.b8(a,b,c)
q=$.$get$O().h(0,a)
if(q==null)throw H.e("Unknown canonical "+a)
p=this.x
if(H.ao(p.B(0,a)))H.aw("unexpected attribute "+a)
o=p.h(0,a)
J.de(r.a,this.e)
r.bV(0,o,t?1:0)
s=s.h(0,a)
p=q.ba()
J.dd(r.a,34962,s)
J.iZ(r.a,o,p,5126,!1,0,0)},
b7:function(a){var t,s,r,q,p
t=this.r
s=this.d
t.i(0,"aPosition",J.ih(s.a))
this.ch=a
this.b8("aPosition",a,3)
r=$.$get$O().h(0,"aPosition")
if(r==null)throw H.e("Unknown canonical aPosition")
q=this.x
H.d(q.B(0,"aPosition"))
p=q.h(0,"aPosition")
J.de(s.a,this.e)
s.bV(0,p,0)
t=t.h(0,"aPosition")
q=r.ba()
J.dd(s.a,34962,t)
J.iZ(s.a,p,q,5126,!1,0,0)},
k:function(a){var t,s,r,q
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,r=t.gL(t),r=r.gA(r);r.q();){q=r.gt()
C.a.l(s,H.h(q)+":"+t.h(0,q).length)}return"MESH["+this.a+"] "+C.a.a9(s,"  ")},
saA:function(a){this.cx=a}}
G.eQ.prototype={
cI:function(a,b){var t=C.b.co(a,b)
if(this.z===t)return
this.z=t
this.bc()},
bc:function(){var t,s,r,q,p,o,n
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
t.Y(0,0,1/(p*s))
t.Y(1,1,1/p)
t.Y(2,2,(q+r)/o)
t.Y(3,2,-1)
t.Y(2,3,2*r*q/o)},
bb:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.w(new Float32Array(H.B(3)))
o.aq(r,q,p)
p=this.d
p.i(0,"uEyePosition",o)
o=this.cy
o.G(t)
t=o.a
t[12]=0
t[13]=0
t[14]=0
t[15]=1
n=-s[12]
m=-s[13]
l=-s[14]
s=J.q(n)
r=!!s.$isav
k=r?s.gam(n):1
if(!!s.$isw){j=s.gm(n)
m=s.gn(n)
l=s.gI(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
l=s.gI(n)
n=j}else if(!(typeof n==="number")){n=null
m=null
l=null}s=C.c.C(t[0],n)
r=C.c.C(t[4],m)
q=C.c.C(t[8],l)
i=t[12]
h=C.c.C(t[1],n)
g=C.c.C(t[5],m)
f=C.c.C(t[9],l)
e=t[13]
d=C.c.C(t[2],n)
c=C.c.C(t[6],m)
b=C.c.C(t[10],l)
a=t[14]
a0=C.c.C(t[3],n)
a1=C.c.C(t[7],m)
a2=C.c.C(t[11],l)
a3=t[15]
t[12]=s+r+q+i*k
t[13]=h+g+f+e*k
t[14]=d+c+b+a*k
t[15]=a0+a1+a2+a3*k
a3=this.cx
a3.G(this.db)
a3.dV(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.f1.prototype={
cV:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gj(t)===s.gj(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gL(s),s=s.gA(s);s.q();){q=s.gt()
if(!t.B(0,q))C.a.l(r,q)}for(t=this.x,s=new P.bE(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.q();){q=s.d
if(!t.U(0,q))C.a.l(r,q)}return r},
cW:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gL(b),s=s.gA(s),r=this.d,q=this.y,p=this.z,o=0;s.q();){n=s.gt()
switch(J.iM(n,0)){case 117:if(q.B(0,n)){m=b.h(0,n)
if(p.B(0,n))H.i6("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$O().h(0,n)
if(l==null)H.D("unknown "+n)
H.d(q.B(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.il(r.a,k,m)
else if(!!J.q(m).$isjc)J.kC(r.a,k,m)
break
case"float":if(l.c===0)J.kA(r.a,k,m)
else if(!!J.q(m).$ise2)J.kB(r.a,k,m)
break
case"mat4":if(l.c===0){j=H.az(m,"$isa8").a
J.iY(r.a,k,!1,j)}else if(!!J.q(m).$ise2)J.iY(r.a,k,!1,m)
else if(H.ao(!1))H.aw("bad unform: "+n)
break
case"mat3":if(l.c===0){j=C.D.gea(H.az(m,"$isma"))
J.iX(r.a,k,!1,j)}else if(!!J.q(m).$ise2)J.iX(r.a,k,!1,m)
else if(H.ao(!1))H.aw("bad unform: "+n)
break
case"vec4":j=l.c
i=r.a
if(j===0)J.iW(i,k,H.az(m,"$isav").a)
else J.iW(i,k,m)
break
case"vec3":j=l.c
i=r.a
if(j===0)J.iV(i,k,H.az(m,"$isw").a)
else J.iV(i,k,m)
break
case"vec2":j=l.c
i=r.a
if(j===0)J.iU(i,k,H.az(m,"$isaO").a)
else J.iU(i,k,m)
break
case"sampler2D":case"sampler2DShadow":j=C.b.X(33984,this.ch)
J.iN(r.a,j)
j=H.az(m,"$isbz").b
J.bO(r.a,3553,j)
j=this.ch
J.il(r.a,k,j)
this.ch=this.ch+1
break
case"samplerCube":H.d(n==="uCubeTexture")
j=C.b.X(33984,this.ch)
J.iN(r.a,j)
j=H.az(m,"$isbz").b
J.bO(r.a,34067,j)
j=this.ch
J.il(r.a,k,j)
this.ch=this.ch+1
break
default:H.i6("Error: unknow uniform type: "+j)
H.d(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":j=J.C(m,!0)
i=r.a
if(j)J.df(i,2929)
else J.ii(i,2929)
break
case"cStencilFunc":H.az(m,"$isd2")
j=m.a
i=r.a
if(j===1281)J.ii(i,2960)
else{J.df(i,2960)
i=m.b
h=m.c
J.kw(r.a,j,i,h)}break
case"cDepthWrite":J.kd(r.a,m)
break
case"cBlendEquation":H.az(m,"$isbA")
j=m.a
i=r.a
if(j===1281)J.ii(i,3042)
else{J.df(i,3042)
i=m.b
h=m.c
J.k8(r.a,i,h)
J.k7(r.a,j)}break}++o
break}}s=Date.now()
""+o
new P.aD(1000*(s-new P.bd(t,!1).a)).k(0)},
cJ:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
Date.now()
t=this.d
J.kD(t.a,this.r)
this.ch=0
this.z.N(0)
for(s=0;s<2;++s){r=b[s]
this.cW(r.a,r.bb())}q=this.Q
q.N(0)
for(p=a.cy,p=p.gL(p),p=p.gA(p);p.q();)q.l(0,p.gt())
o=this.cV()
if(o.length!==0)P.ad("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.h(o)))
J.de(a.d.a,a.e)
n=this.e.f.length>0
q=a.f
p=a.cN()
m=a.Q
l=a.z
if(n)J.k6(t.a,q)
if(m!==-1){k=t.a
if(l>1)J.kh(k,q,p,m,0,l)
else J.kg(k,q,p,m,0)}else{m=t.a
if(l>1)J.kf(m,q,0,p,l)
else J.ke(m,q,0,p)}if(n)J.kk(t.a)},
b9:function(a,b){return this.cJ(a,b,null)},
cR:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.V)(t),++o){n=t[o]
r.i(0,n,J.iS(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.V)(t),++o){n=t[o]
r.i(0,n,J.iS(q.a,p,n))}}}
G.v.prototype={
ba:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.d(!1)
return-1}}}
G.b2.prototype={
b5:function(a){var t,s,r,q
H.d(this.b==null)
for(t=this.c,s=this.x,r=0;r<1;++r){q=a[r]
H.d($.$get$O().B(0,q))
H.d(!C.a.U(t,q))
C.a.l(t,q)
s.i(0,q,this.r);++this.r}C.a.ar(t)},
at:function(a){var t,s,r,q
H.d(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.V)(a),++r){q=a[r]
if(H.ao($.$get$O().B(0,q)))H.aw("missing uniform "+q)
H.d(!C.a.U(s,q))
C.a.l(s,q)}C.a.ar(s)},
b6:function(a){var t,s,r
H.d(this.b==null)
for(t=this.e,s=0;s<1;++s){r=a[s]
H.d($.$get$O().B(0,r))
H.d(!C.a.U(t,r))
C.a.l(t,r)}C.a.ar(t)},
cS:function(a,b){H.d(this.b==null)
this.b=this.bd(!0,a,b)},
au:function(a){return this.cS(a,null)},
bd:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.d(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.V)(t),++o){n=t[o]
m=$.$get$O().h(0,n)
C.a.l(q,"layout (location="+H.h(p.h(0,n))+") in "+m.a+" "+H.h(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.V)(t),++o){k=t[o]
m=$.$get$O().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.h(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.V)(t),++o){k=t[o]
m=$.$get$O().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.h(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.V)(t),++o){k=t[o]
m=$.$get$O().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.h(k)+j+";")}C.a.l(q,"")
if(a)C.a.l(q,"void main(void) {")
C.a.dh(q,b)
if(a)C.a.l(q,"}")
return C.a.a9(q,"\n")}}
G.fd.prototype={}
G.ft.prototype={
cO:function(a,b){var t=this.e
if(t!==1)J.ky(a.a,b,34046,t)
J.iT(a.a,b,10240,this.r)
J.iT(a.a,b,10241,this.f)}}
G.bz.prototype={
k:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.ea.prototype={
cT:function(a){var t,s
t=this.d
s=this.c
J.bO(t.a,s,this.b)
J.kx(t.a,s,0,6408,6408,5121,a)}}
R.cW.prototype={
c0:function(a){var t,s,r
t=this.fy
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.ad("size change "+H.h(s)+" "+H.h(r))
this.cI(s,r)
J.kF(this.go.a,0,0,s,r)}}
B.fa.prototype={
$2:function(a,b){var t,s,r,q,p,o
t=this.a
s=this.c*a
r=Math.cos(s)
s=Math.sin(s)
q=this.b*a
p=Math.cos(q)
q=Math.sin(q)
r=t*(2+r)*0.5
o=b.a
o[0]=r*p
o[1]=r*q
o[2]=this.d*t*0.5*s},
$S:function(){return{func:1,v:true,args:[P.I,T.w]}}}
A.hU.prototype={
$2:function(a,b){var t=536870911&a+J.af(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(){return{func:1,args:[P.m,P.o]}}}
T.a8.prototype={
Y:function(a,b,c){H.d(a<4)
H.d(b<4)
this.a[b*4+a]=c},
G:function(a){var t,s
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
k:function(a){return"[0] "+this.ad(0).k(0)+"\n[1] "+this.ad(1).k(0)+"\n[2] "+this.ad(2).k(0)+"\n[3] "+this.ad(3).k(0)+"\n"},
h:function(a,b){return this.a[b]},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.a8){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gu:function(a){return A.hT(this.a)},
ad:function(a){var t,s
t=new Float32Array(H.B(4))
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.av(t)},
Z:function(){var t=this.a
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
dV:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.aO.prototype={
k:function(a){var t=this.a
return"["+H.h(t[0])+","+H.h(t[1])+"]"},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aO){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gu:function(a){return A.hT(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.w.prototype={
aq:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
G:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
k:function(a){var t=this.a
return"["+H.h(t[0])+","+H.h(t[1])+","+H.h(t[2])+"]"},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.w){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gu:function(a){return A.hT(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){return Math.sqrt(this.gaQ())},
gaQ:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
V:function(a){var t,s,r
t=Math.sqrt(this.gaQ())
if(t===0)return 0
s=1/t
r=this.a
r[0]=r[0]*s
r[1]=r[1]*s
r[2]=r[2]*s
return t},
aL:function(a){var t,s
t=a.a
s=this.a
return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]},
bO:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.w(new Float32Array(H.B(3)))
t.aq(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
aj:function(a,b){var t,s
t=a.a
s=this.a
s[0]=s[0]+t[0]*b
s[1]=s[1]+t[1]*b
s[2]=s[2]+t[2]*b},
b3:function(a){var t,s
t=a.a
s=this.a
s[0]=s[0]-t[0]
s[1]=s[1]-t[1]
s[2]=s[2]-t[2]},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gI:function(a){return this.a[2]}}
T.av.prototype={
k:function(a){var t=this.a
return H.h(t[0])+","+H.h(t[1])+","+H.h(t[2])+","+H.h(t[3])},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.av){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gu:function(a){return A.hT(this.a)},
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
gI:function(a){return this.a[2]},
gam:function(a){return this.a[3]}}
M.i4.prototype={
$1:function(b2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
this.a.a=b2+0
t=this.b
t.go=H.T(t.go+0.003)
s=t.k4
if(s.h(0,37)!=null)t.go=H.T(t.go+0.03)
else if(s.h(0,39)!=null)t.go=H.T(t.go-0.03)
if(s.h(0,38)!=null)t.id=H.T(t.id+0.03)
else if(s.h(0,40)!=null)t.id=H.T(t.id-0.03)
if(s.h(0,33)!=null)t.fy=H.T(t.fy*0.99)
else if(s.h(0,34)!=null)t.fy=H.T(t.fy*1.01)
if(s.h(0,32)!=null){t.go=0
t.id=0}s=H.T(C.c.dq(t.id,-1.4707963267948965,1.4707963267948965))
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
q=t.k2
s=q.a
n[12]=n[12]+s[0]
n[13]=n[13]+s[1]
n[14]=n[14]+s[2]
s=n[12]
r=n[13]
o=n[14]
m=new T.w(new Float32Array(H.B(3)))
m.aq(0,1,0)
l=t.e
k=l.a
k[0]=n[12]
k[1]=n[13]
k[2]=n[14]
k=new Float32Array(H.B(3))
j=new T.w(k)
j.G(l)
j.b3(q)
j.V(0)
i=m.bO(j)
i.V(0)
h=j.bO(i)
h.V(0)
q=i.aL(l)
g=h.aL(l)
l=j.aL(l)
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
n[15]=1
n[14]=-l
n[13]=-g
n[12]=-q
n[11]=0
n[10]=k
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
n[12]=s
n[13]=r
n[14]=o
o=t.f
r=o.a
r[0]=n[2]
r[1]=n[6]
r[2]=n[10]
t=-t.k1
o=Math.sqrt(o.gaQ())
i=r[0]/o
h=r[1]/o
j=r[2]/o
o=Math.cos(t)
t=Math.sin(t)
a2=1-o
a3=i*i*a2+o
r=j*t
a4=i*h*a2-r
s=h*t
a5=i*j*a2+s
a6=h*i*a2+r
a7=h*h*a2+o
t=i*t
a8=h*j*a2-t
a9=j*i*a2-s
b0=j*h*a2+t
b1=j*j*a2+o
o=n[0]
t=n[4]
s=n[8]
r=n[1]
e=n[5]
c=n[9]
b=n[2]
a=n[6]
a0=n[10]
a1=n[3]
f=n[7]
d=n[11]
n[0]=o*a3+t*a6+s*a9
n[1]=r*a3+e*a6+c*a9
n[2]=b*a3+a*a6+a0*a9
n[3]=a1*a3+f*a6+d*a9
n[4]=o*a4+t*a7+s*b0
n[5]=r*a4+e*a7+c*b0
n[6]=b*a4+a*a7+a0*b0
n[7]=a1*a4+f*a7+d*b0
n[8]=o*a5+t*a8+s*b1
n[9]=r*a5+e*a8+c*b1
n[10]=b*a5+a*a8+a0*b1
n[11]=a1*a5+f*a8+d*b1
d=this.c
this.d.b9(this.f,[d,this.e])
this.r.b9(this.y,[d,this.x])
C.ak.gdj(window).c6(this)},
$S:function(){return{func:1,v:true,args:[P.Q]}}}
J.a.prototype.cF=J.a.prototype.k
J.bn.prototype.cG=J.bn.prototype.k;(function installTearOffs(){installTearOff(H.aS.prototype,"gdR",0,0,0,null,["$0"],["al"],0)
installTearOff(H.ab.prototype,"gcr",0,0,0,null,["$1"],["F"],2)
installTearOff(H.aR.prototype,"gdw",0,0,0,null,["$1"],["O"],2)
installTearOff(P,"lC",1,0,0,null,["$1"],["lm"],1)
installTearOff(P,"lD",1,0,0,null,["$1"],["ln"],1)
installTearOff(P,"lE",1,0,0,null,["$1"],["lo"],1)
installTearOff(P,"jO",1,0,0,null,["$0"],["lA"],0)
installTearOff(P.an.prototype,"gd0",0,0,0,null,["$2","$1"],["ae","d1"],3)
installTearOff(P,"lJ",1,0,0,null,["$2"],["kL"],5)
installTearOff(W,"lP",1,0,0,null,["$1"],["kO"],6)
installTearOff(R.cW.prototype,"ge0",0,0,0,null,["$1"],["c0"],4)
installTearOff(M,"k1",1,0,0,null,["$0"],["lX"],0)})();(function inheritance(){inherit(P.o,null)
var t=P.o
inherit(H.is,t)
inherit(J.a,t)
inherit(J.dl,t)
inherit(P.ah,t)
inherit(H.cJ,t)
inherit(P.cG,t)
inherit(H.c_,t)
inherit(H.aX,t)
inherit(H.ho,t)
inherit(H.aS,t)
inherit(H.h0,t)
inherit(H.aT,t)
inherit(H.hn,t)
inherit(H.fV,t)
inherit(H.b1,t)
inherit(H.fv,t)
inherit(H.ag,t)
inherit(H.ab,t)
inherit(H.aR,t)
inherit(H.f0,t)
inherit(H.fC,t)
inherit(P.aY,t)
inherit(H.d9,t)
inherit(H.at,t)
inherit(H.a7,t)
inherit(H.el,t)
inherit(H.en,t)
inherit(P.fX,t)
inherit(P.d6,t)
inherit(P.an,t)
inherit(P.d4,t)
inherit(P.fi,t)
inherit(P.fj,t)
inherit(P.aW,t)
inherit(P.hF,t)
inherit(P.f9,t)
inherit(P.hl,t)
inherit(P.bE,t)
inherit(P.t,t)
inherit(P.hm,t)
inherit(P.aV,t)
inherit(P.E,t)
inherit(P.bd,t)
inherit(P.Q,t)
inherit(P.aD,t)
inherit(P.d0,t)
inherit(P.h5,t)
inherit(P.dF,t)
inherit(P.b,t)
inherit(P.as,t)
inherit(P.aK,t)
inherit(P.bv,t)
inherit(P.r,t)
inherit(P.bx,t)
inherit(W.du,t)
inherit(W.y,t)
inherit(W.e1,t)
inherit(P.hj,t)
inherit(P.hq,t)
inherit(G.ex,t)
inherit(G.ds,t)
inherit(G.dY,t)
inherit(G.e6,t)
inherit(G.d2,t)
inherit(G.bA,t)
inherit(G.v,t)
inherit(G.b2,t)
inherit(G.ft,t)
inherit(G.bz,t)
inherit(T.a8,t)
inherit(T.aO,t)
inherit(T.w,t)
inherit(T.av,t)
t=J.a
inherit(J.eg,t)
inherit(J.cI,t)
inherit(J.bn,t)
inherit(J.aE,t)
inherit(J.aZ,t)
inherit(J.aF,t)
inherit(H.bp,t)
inherit(H.b0,t)
inherit(W.f,t)
inherit(W.W,t)
inherit(W.bQ,t)
inherit(W.bS,t)
inherit(W.bT,t)
inherit(W.x,t)
inherit(W.c1,t)
inherit(W.dw,t)
inherit(W.dx,t)
inherit(W.dy,t)
inherit(W.bW,t)
inherit(W.bX,t)
inherit(W.cg,t)
inherit(W.dB,t)
inherit(W.i,t)
inherit(W.ci,t)
inherit(W.Y,t)
inherit(W.e7,t)
inherit(W.cd,t)
inherit(W.ep,t)
inherit(W.eu,t)
inherit(W.Z,t)
inherit(W.cl,t)
inherit(W.eG,t)
inherit(W.c7,t)
inherit(W.eN,t)
inherit(W.b3,t)
inherit(W.a_,t)
inherit(W.c9,t)
inherit(W.a9,t)
inherit(W.a1,t)
inherit(W.ca,t)
inherit(W.a2,t)
inherit(W.fh,t)
inherit(W.R,t)
inherit(W.c8,t)
inherit(W.fu,t)
inherit(W.a4,t)
inherit(W.c2,t)
inherit(W.fz,t)
inherit(W.fH,t)
inherit(W.fM,t)
inherit(W.fW,t)
inherit(W.cj,t)
inherit(W.ch,t)
inherit(W.cf,t)
inherit(W.c5,t)
inherit(W.c4,t)
inherit(W.cb,t)
inherit(W.hD,t)
inherit(W.hE,t)
inherit(P.ai,t)
inherit(P.ce,t)
inherit(P.aj,t)
inherit(P.c6,t)
inherit(P.eT,t)
inherit(P.eU,t)
inherit(P.eZ,t)
inherit(P.c3,t)
inherit(P.ak,t)
inherit(P.cc,t)
inherit(P.fL,t)
inherit(P.dm,t)
inherit(P.f2,t)
inherit(P.f3,t)
inherit(P.hC,t)
inherit(P.ck,t)
t=J.bn
inherit(J.eR,t)
inherit(J.aN,t)
inherit(J.aG,t)
inherit(J.ir,J.aE)
t=J.aZ
inherit(J.cH,t)
inherit(J.eh,t)
t=P.ah
inherit(H.c,t)
inherit(H.cK,t)
t=H.c
inherit(H.b_,t)
inherit(H.em,t)
inherit(H.dE,H.cK)
inherit(H.eq,P.cG)
t=H.b_
inherit(H.cL,t)
inherit(P.eo,t)
t=H.aX
inherit(H.id,t)
inherit(H.ie,t)
inherit(H.hi,t)
inherit(H.h1,t)
inherit(H.ed,t)
inherit(H.ee,t)
inherit(H.hp,t)
inherit(H.fw,t)
inherit(H.fx,t)
inherit(H.ig,t)
inherit(H.hZ,t)
inherit(H.i_,t)
inherit(H.i0,t)
inherit(H.i1,t)
inherit(H.i2,t)
inherit(H.fp,t)
inherit(H.ei,t)
inherit(H.hV,t)
inherit(H.hW,t)
inherit(H.hX,t)
inherit(P.fS,t)
inherit(P.fR,t)
inherit(P.fT,t)
inherit(P.fU,t)
inherit(P.h6,t)
inherit(P.ha,t)
inherit(P.h7,t)
inherit(P.h8,t)
inherit(P.h9,t)
inherit(P.hd,t)
inherit(P.he,t)
inherit(P.hc,t)
inherit(P.hb,t)
inherit(P.fk,t)
inherit(P.fl,t)
inherit(P.hI,t)
inherit(P.ht,t)
inherit(P.hs,t)
inherit(P.hu,t)
inherit(P.er,t)
inherit(P.dC,t)
inherit(P.dD,t)
inherit(W.fO,t)
inherit(W.h4,t)
inherit(P.hL,t)
inherit(B.i8,t)
inherit(B.i9,t)
inherit(B.ia,t)
inherit(B.ib,t)
inherit(B.ic,t)
inherit(B.eJ,t)
inherit(B.eK,t)
inherit(B.eL,t)
inherit(B.eM,t)
inherit(B.fa,t)
inherit(A.hU,t)
inherit(M.i4,t)
t=H.fV
inherit(H.b4,t)
inherit(H.bG,t)
t=P.aY
inherit(H.cU,t)
inherit(H.ej,t)
inherit(H.fG,t)
inherit(H.fE,t)
inherit(H.dr,t)
inherit(H.f5,t)
inherit(P.bP,t)
inherit(P.cV,t)
inherit(P.aq,t)
inherit(P.p,t)
inherit(P.d3,t)
inherit(P.bw,t)
inherit(P.a5,t)
inherit(P.dv,t)
t=H.fp
inherit(H.fg,t)
inherit(H.bb,t)
inherit(H.fQ,P.bP)
t=H.b0
inherit(H.ey,t)
inherit(H.cP,t)
t=H.cP
inherit(H.br,t)
inherit(H.bq,t)
inherit(H.bs,H.br)
inherit(H.cQ,H.bs)
inherit(H.bt,H.bq)
inherit(H.cR,H.bt)
t=H.cQ
inherit(H.cO,t)
inherit(H.ez,t)
t=H.cR
inherit(H.eA,t)
inherit(H.eB,t)
inherit(H.eC,t)
inherit(H.eD,t)
inherit(H.eE,t)
inherit(H.cS,t)
inherit(H.eF,t)
inherit(P.hB,P.fX)
inherit(P.hr,P.hF)
inherit(P.d7,H.a7)
inherit(P.f8,P.f9)
inherit(P.hh,P.f8)
inherit(P.hk,P.hh)
t=P.Q
inherit(P.I,t)
inherit(P.m,t)
t=P.aq
inherit(P.cY,t)
inherit(P.eb,t)
t=W.f
inherit(W.u,t)
inherit(W.bf,t)
inherit(W.dt,t)
inherit(W.e_,t)
inherit(W.bm,t)
inherit(W.bo,t)
inherit(W.eW,t)
inherit(W.cZ,t)
inherit(W.fb,t)
inherit(W.a0,t)
inherit(W.bg,t)
inherit(W.a3,t)
inherit(W.S,t)
inherit(W.bh,t)
inherit(W.fJ,t)
inherit(W.fN,t)
inherit(W.bB,t)
inherit(W.fP,t)
inherit(W.aQ,t)
inherit(W.hy,t)
t=W.u
inherit(W.bY,t)
inherit(W.aC,t)
inherit(W.be,t)
inherit(W.bV,t)
inherit(W.fZ,t)
t=W.bY
inherit(W.j,t)
inherit(P.G,t)
t=W.j
inherit(W.dj,t)
inherit(W.dk,t)
inherit(W.dp,t)
inherit(W.bR,t)
inherit(W.e4,t)
inherit(W.ec,t)
inherit(W.f7,t)
inherit(W.hg,t)
inherit(W.bj,W.bf)
inherit(W.dn,W.bj)
inherit(W.bc,W.c1)
inherit(W.dz,W.bW)
inherit(W.cD,W.cg)
inherit(W.dA,W.cD)
inherit(W.X,W.bQ)
inherit(W.cB,W.ci)
inherit(W.dZ,W.cB)
inherit(W.cz,W.cd)
inherit(W.bl,W.cz)
inherit(W.c0,W.be)
inherit(W.e8,W.bm)
inherit(W.au,W.i)
t=W.au
inherit(W.aH,t)
inherit(W.K,t)
inherit(W.aM,t)
inherit(W.ev,W.bo)
inherit(W.cy,W.cl)
inherit(W.ew,W.cy)
inherit(W.cn,W.c7)
inherit(W.cT,W.cn)
t=W.b3
inherit(W.eP,t)
inherit(W.f4,t)
inherit(W.fB,t)
inherit(W.cx,W.c9)
inherit(W.eS,W.cx)
inherit(W.eV,W.a9)
inherit(W.bi,W.bg)
inherit(W.fc,W.bi)
inherit(W.cm,W.ca)
inherit(W.fe,W.cm)
inherit(W.co,W.c8)
inherit(W.fr,W.co)
inherit(W.bk,W.bh)
inherit(W.fs,W.bk)
inherit(W.cA,W.c2)
inherit(W.fy,W.cA)
inherit(W.aP,W.K)
inherit(W.cC,W.cj)
inherit(W.d5,W.cC)
inherit(W.cE,W.ch)
inherit(W.fY,W.cE)
inherit(W.h_,W.bX)
inherit(W.cF,W.cf)
inherit(W.hf,W.cF)
inherit(W.cq,W.c5)
inherit(W.d8,W.cq)
inherit(W.cs,W.c4)
inherit(W.hz,W.cs)
inherit(W.cp,W.cb)
inherit(W.hA,W.cp)
inherit(W.h2,P.fi)
inherit(W.iA,W.h2)
inherit(W.h3,P.fj)
inherit(P.F,P.hq)
t=P.G
inherit(P.ar,t)
inherit(P.aB,t)
inherit(P.dG,t)
inherit(P.dH,t)
inherit(P.dI,t)
inherit(P.dJ,t)
inherit(P.dK,t)
inherit(P.dL,t)
inherit(P.dM,t)
inherit(P.dN,t)
inherit(P.dO,t)
inherit(P.dP,t)
inherit(P.dQ,t)
inherit(P.dR,t)
inherit(P.dS,t)
inherit(P.dT,t)
inherit(P.dU,t)
inherit(P.dV,t)
inherit(P.dW,t)
inherit(P.dX,t)
inherit(P.e0,t)
inherit(P.es,t)
inherit(P.et,t)
inherit(P.eO,t)
inherit(P.f6,t)
inherit(P.fo,t)
inherit(P.fK,t)
inherit(P.bD,t)
inherit(P.hv,t)
inherit(P.hw,t)
inherit(P.hx,t)
t=P.ar
inherit(P.di,t)
inherit(P.e3,t)
inherit(P.a6,t)
inherit(P.e9,t)
inherit(P.fn,t)
inherit(P.d1,t)
inherit(P.fI,t)
inherit(P.cv,P.ce)
inherit(P.ek,P.cv)
inherit(P.cu,P.c6)
inherit(P.eH,P.cu)
inherit(P.f_,P.a6)
inherit(P.ct,P.c3)
inherit(P.fm,P.ct)
t=P.d1
inherit(P.fq,t)
inherit(P.by,t)
inherit(P.cr,P.cc)
inherit(P.fA,P.cr)
inherit(P.cw,P.ck)
inherit(P.ff,P.cw)
t=G.ex
inherit(G.fd,t)
inherit(G.fF,t)
inherit(G.cN,t)
inherit(G.f1,t)
inherit(G.dq,G.fd)
inherit(B.eI,G.dq)
t=G.fF
inherit(G.cM,t)
inherit(G.eQ,t)
inherit(G.ea,G.bz)
inherit(R.cW,G.eQ)
mixin(H.bq,P.t)
mixin(H.br,P.t)
mixin(H.bs,H.c_)
mixin(H.bt,H.c_)
mixin(W.bf,P.t)
mixin(W.bg,P.t)
mixin(W.bh,P.t)
mixin(W.bi,W.y)
mixin(W.bj,W.y)
mixin(W.bk,W.y)
mixin(W.c1,W.du)
mixin(W.cl,P.t)
mixin(W.c7,P.t)
mixin(W.c4,P.t)
mixin(W.cf,P.t)
mixin(W.cg,P.t)
mixin(W.ch,P.t)
mixin(W.ci,P.t)
mixin(W.cj,P.t)
mixin(W.c2,P.t)
mixin(W.c5,P.t)
mixin(W.c8,P.t)
mixin(W.c9,P.t)
mixin(W.ca,P.t)
mixin(W.cb,P.t)
mixin(W.cd,P.t)
mixin(W.cm,W.y)
mixin(W.cn,W.y)
mixin(W.co,W.y)
mixin(W.cy,W.y)
mixin(W.cz,W.y)
mixin(W.cx,W.y)
mixin(W.cC,W.y)
mixin(W.cD,W.y)
mixin(W.cE,W.y)
mixin(W.cF,W.y)
mixin(W.cp,W.y)
mixin(W.cq,W.y)
mixin(W.cs,W.y)
mixin(W.cA,W.y)
mixin(W.cB,W.y)
mixin(P.ce,P.t)
mixin(P.c6,P.t)
mixin(P.c3,P.t)
mixin(P.cc,P.t)
mixin(P.cr,W.y)
mixin(P.ct,W.y)
mixin(P.cu,W.y)
mixin(P.cv,W.y)
mixin(P.ck,P.t)
mixin(P.cw,W.y)})();(function constants(){C.q=W.bR.prototype
C.m=W.bS.prototype
C.o=W.bT.prototype
C.B=W.c0.prototype
C.C=J.a.prototype
C.a=J.aE.prototype
C.b=J.cH.prototype
C.D=J.cI.prototype
C.c=J.aZ.prototype
C.i=J.aF.prototype
C.K=J.aG.prototype
C.L=H.cO.prototype
C.v=J.eR.prototype
C.p=J.aN.prototype
C.aj=W.aP.prototype
C.ak=W.bB.prototype
C.A=new P.hj()
C.f=new P.hr()
C.r=new P.aD(0)
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
C.t=function(hooks) { return hooks; }

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
C.u=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.M=new G.v("vec3","vertex btangents",0)
C.d=new G.v("vec3","",0)
C.N=new G.v("vec4","delta from light",0)
C.n=new G.v("","",0)
C.w=new G.v("vec3","vertex coordinates",0)
C.O=new G.v("vec3","vertex binormals",0)
C.x=new G.v("vec4","for wireframe",0)
C.P=new G.v("vec4","per vertex color",0)
C.Q=new G.v("float","for normal maps",0)
C.j=new G.v("mat4","",0)
C.S=new G.v("mat4","",4)
C.R=new G.v("mat4","",128)
C.e=new G.v("float","",0)
C.T=new G.v("float","",4)
C.U=new G.v("float","depth for shadowmaps",0)
C.h=new G.v("sampler2D","",0)
C.V=new G.v("float","for bump maps",0)
C.W=new G.v("vec2","texture uvs",0)
C.X=new G.v("float","time since program start in sec",0)
C.k=new G.v("vec2","",0)
C.Y=new G.v("samplerCube","",0)
C.l=new G.v("vec4","",0)
C.Z=new G.v("vec3","vertex normals",0)
C.a_=new G.v("sampler2DShadow","",0)
C.y=new G.v("vec3","per vertex color",0)
C.z=new G.v("mat3","",0)
C.a0=new G.v("vec3","vertex tangents",0)
C.a1=H.H("m5")
C.a2=H.H("m6")
C.a3=H.H("e2")
C.a4=H.H("m7")
C.a5=H.H("m8")
C.a6=H.H("jc")
C.a7=H.H("m9")
C.a8=H.H("jf")
C.a9=H.H("aK")
C.aa=H.H("r")
C.ab=H.H("jA")
C.ac=H.H("jB")
C.ad=H.H("mb")
C.ae=H.H("jC")
C.af=H.H("aV")
C.ag=H.H("I")
C.ah=H.H("m")
C.ai=H.H("Q")})();(function staticFields(){$.jj="$cachedFunction"
$.jk="$cachedInvocation"
$.j6=null
$.j4=null
$.iB=!1
$.iG=null
$.jL=null
$.k0=null
$.hO=null
$.hY=null
$.iH=null
$.b5=null
$.bH=null
$.bI=null
$.iC=!1
$.A=C.f
$.ja=0
$.lG=0
$.lH=0
$.iK=0
$.jX=0
$.bM=0
$.bN=0
$.m3=!1
$.iF=0})();(function lazyInitializers(){lazy($,"j9","$get$j9",function(){return H.jT("_$dart_dartClosure")})
lazy($,"it","$get$it",function(){return H.jT("_$dart_js")})
lazy($,"jd","$get$jd",function(){return H.kX()})
lazy($,"je","$get$je",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.ja
$.ja=t+1
t="expando$key$"+t}return new P.dF(null,t,[P.m])})
lazy($,"jp","$get$jp",function(){return H.al(H.fD({
toString:function(){return"$receiver$"}}))})
lazy($,"jq","$get$jq",function(){return H.al(H.fD({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"jr","$get$jr",function(){return H.al(H.fD(null))})
lazy($,"js","$get$js",function(){return H.al(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"jw","$get$jw",function(){return H.al(H.fD(void 0))})
lazy($,"jx","$get$jx",function(){return H.al(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"ju","$get$ju",function(){return H.al(H.jv(null))})
lazy($,"jt","$get$jt",function(){return H.al(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"jz","$get$jz",function(){return H.al(H.jv(void 0))})
lazy($,"jy","$get$jy",function(){return H.al(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"iz","$get$iz",function(){return P.ll()})
lazy($,"bJ","$get$bJ",function(){return[]})
lazy($,"hN","$get$hN",function(){return P.jg(P.m,P.aV)})
lazy($,"bL","$get$bL",function(){return P.jg(P.r,P.aV)})
lazy($,"jn","$get$jn",function(){return new G.d2(1281,0,4294967295)})
lazy($,"j2","$get$j2",function(){return new G.bA(1281,1281,1281)})
lazy($,"j1","$get$j1",function(){return new G.bA(32774,770,769)})
lazy($,"O","$get$O",function(){return P.aI(["cBlendEquation",C.n,"cDepthWrite",C.n,"cDepthTest",C.n,"cStencilFunc",C.n,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColors",C.y,"aColorAlpha",C.P,"aPosition",C.w,"aTexUV",C.W,"aNormal",C.Z,"aBinormal",C.O,"aCenter",C.x,"aPointSize",C.e,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.a0,"aBitangent",C.M,"iaRotation",C.l,"iaTranslation",C.d,"iaScale",C.d,"vColor",C.y,"vTexUV",C.k,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.w,"vPositionFromLight",C.N,"vCenter",C.x,"vDepth",C.U,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.z,"uConvolutionMatrix",C.z,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a_,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.Y,"uAnimationTable",C.h,"uTime",C.X,"uCameraNear",C.e,"uCameraFar",C.e,"uFogNear",C.e,"uFogFar",C.e,"uPointSize",C.e,"uScale",C.e,"uAngle",C.e,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.e,"uShininess",C.e,"uShadowBias",C.e,"uOpacity",C.e,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.d,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.R,"uLightDescs",C.S,"uLightCount",C.e,"uLightTypes",C.T,"uBumpScale",C.V,"uNormalScale",C.Q])})
lazy($,"jD","$get$jD",function(){return C.A})
lazy($,"k_","$get$k_",function(){var t=new G.b2("PointSpritesV",null,[],[],[],[],0,P.J())
t.b5(["aPosition"])
t.at(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"])
t.au(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"])
return t})
lazy($,"jZ","$get$jZ",function(){var t=new G.b2("PointSpritesF",null,[],[],[],[],0,P.J())
t.at(["uTexture"])
t.au(["oFragColor = texture( uTexture,  gl_PointCoord);"])
return t})
lazy($,"jQ","$get$jQ",function(){var t=new G.b2("demoVertexShader",null,[],[],[],[],0,P.J())
t.b5(["aPosition"])
t.b6(["vColor"])
t.at(["uPerspectiveViewMatrix","uModelMatrix"])
H.d(t.b==null)
t.b=t.bd(!1,["void main(void) {\n    gl_Position = uPerspectiveViewMatrix *\n                  uModelMatrix *\n                  vec4(aPosition, 1.0);\n    vColor.r = sin(aPosition.x)/2.0+0.5;\n    vColor.g = cos(aPosition.y)/2.0+0.5;\n    vColor.b = sin(aPosition.z)/2.0+0.5;\n}\n"],null)
return t})
lazy($,"jP","$get$jP",function(){var t=new G.b2("demoFragmentShader",null,[],[],[],[],0,P.J())
t.b6(["vColor"])
t.au(["oFragColor.rgb = vColor;"])
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
mangledGlobalNames:{m:"int",I:"double",Q:"num",r:"String",aV:"bool",aK:"Null",b:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,v:true,args:[P.o],opt:[P.bv]},{func:1,v:true,args:[W.i]},{func:1,ret:P.m,args:[P.E,P.E]},{func:1,ret:P.r,args:[W.f]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationTimeline:J.a,AppBannerPromptResult:J.a,BarProp:J.a,Body:J.a,CacheStorage:J.a,CanvasPattern:J.a,CHROMIUMValuebuffer:J.a,CircularGeofencingRegion:J.a,Client:J.a,Clients:J.a,CompositorProxy:J.a,ConsoleBase:J.a,Coordinates:J.a,Credential:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMStringMap:J.a,EffectModel:J.a,Entry:J.a,FederatedCredential:J.a,FileEntry:J.a,FileError:J.a,Stream:J.a,DOMFileSystem:J.a,FontFace:J.a,FormData:J.a,GamepadButton:J.a,Geofencing:J.a,GeofencingRegion:J.a,Geolocation:J.a,Geoposition:J.a,Headers:J.a,HMDVRDevice:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageData:J.a,InjectedScriptHost:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,KeyframeEffect:J.a,MediaDeviceInfo:J.a,MediaDevices:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaMetadata:J.a,MediaSession:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigatorStorageUtils:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,OffscreenCanvas:J.a,PasswordCredential:J.a,PerformanceCompositeTiming:J.a,PerformanceEntry:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformanceRenderTiming:J.a,PerformanceResourceTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PositionError:J.a,PositionSensorVRDevice:J.a,Presentation:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,Range:J.a,ReadableByteStream:J.a,ReadableByteStreamReader:J.a,ReadableStreamReader:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,Selection:J.a,ServicePort:J.a,SharedArrayBuffer:J.a,SourceInfo:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StorageInfo:J.a,StorageManager:J.a,StorageQuota:J.a,StyleMedia:J.a,StylePropertyMap:J.a,SyncManager:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRDevice:J.a,VREyeParameters:J.a,VRFieldOfView:J.a,VRPositionState:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkerConsole:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothAdvertisingData:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,NFC:J.a,PagePopupController:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WebKitCSSMatrix:J.a,Worklet:J.a,WorkletGlobalScope:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPreserveAspectRatio:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,CHROMIUMSubscribeUniform:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTDisjointTimerQuery:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bp,ArrayBufferView:H.b0,DataView:H.ey,Float32Array:H.cO,Float64Array:H.ez,Int16Array:H.eA,Int32Array:H.eB,Int8Array:H.eC,Uint16Array:H.eD,Uint32Array:H.eE,Uint8ClampedArray:H.cS,CanvasPixelArray:H.cS,Uint8Array:H.eF,HTMLAudioElement:W.j,HTMLBRElement:W.j,HTMLBaseElement:W.j,HTMLButtonElement:W.j,HTMLContentElement:W.j,HTMLDListElement:W.j,HTMLDataListElement:W.j,HTMLDetailsElement:W.j,HTMLDialogElement:W.j,HTMLDivElement:W.j,HTMLEmbedElement:W.j,HTMLFieldSetElement:W.j,HTMLHRElement:W.j,HTMLHeadElement:W.j,HTMLHeadingElement:W.j,HTMLHtmlElement:W.j,HTMLIFrameElement:W.j,HTMLImageElement:W.j,HTMLKeygenElement:W.j,HTMLLIElement:W.j,HTMLLabelElement:W.j,HTMLLegendElement:W.j,HTMLLinkElement:W.j,HTMLMapElement:W.j,HTMLMediaElement:W.j,HTMLMenuElement:W.j,HTMLMenuItemElement:W.j,HTMLMetaElement:W.j,HTMLMeterElement:W.j,HTMLModElement:W.j,HTMLOListElement:W.j,HTMLObjectElement:W.j,HTMLOptGroupElement:W.j,HTMLOptionElement:W.j,HTMLOutputElement:W.j,HTMLParagraphElement:W.j,HTMLParamElement:W.j,HTMLPictureElement:W.j,HTMLPreElement:W.j,HTMLProgressElement:W.j,HTMLQuoteElement:W.j,HTMLScriptElement:W.j,HTMLShadowElement:W.j,HTMLSlotElement:W.j,HTMLSourceElement:W.j,HTMLSpanElement:W.j,HTMLStyleElement:W.j,HTMLTableCaptionElement:W.j,HTMLTableCellElement:W.j,HTMLTableDataCellElement:W.j,HTMLTableHeaderCellElement:W.j,HTMLTableColElement:W.j,HTMLTableElement:W.j,HTMLTableRowElement:W.j,HTMLTableSectionElement:W.j,HTMLTemplateElement:W.j,HTMLTextAreaElement:W.j,HTMLTitleElement:W.j,HTMLTrackElement:W.j,HTMLUListElement:W.j,HTMLUnknownElement:W.j,HTMLVideoElement:W.j,HTMLDirectoryElement:W.j,HTMLFontElement:W.j,HTMLFrameElement:W.j,HTMLMarqueeElement:W.j,HTMLElement:W.j,HTMLAnchorElement:W.dj,HTMLAreaElement:W.dk,AudioTrack:W.W,AudioTrackList:W.dn,Blob:W.bQ,HTMLBodyElement:W.dp,HTMLCanvasElement:W.bR,CanvasGradient:W.bS,CanvasRenderingContext2D:W.bT,CDATASection:W.aC,CharacterData:W.aC,Comment:W.aC,ProcessingInstruction:W.aC,Text:W.aC,CompositorWorker:W.dt,CSSCharsetRule:W.x,CSSFontFaceRule:W.x,CSSGroupingRule:W.x,CSSImportRule:W.x,CSSKeyframeRule:W.x,MozCSSKeyframeRule:W.x,WebKitCSSKeyframeRule:W.x,CSSKeyframesRule:W.x,MozCSSKeyframesRule:W.x,WebKitCSSKeyframesRule:W.x,CSSMediaRule:W.x,CSSNamespaceRule:W.x,CSSPageRule:W.x,CSSRule:W.x,CSSStyleRule:W.x,CSSSupportsRule:W.x,CSSViewportRule:W.x,CSSStyleDeclaration:W.bc,MSStyleCSSProperties:W.bc,CSS2Properties:W.bc,DataTransferItemList:W.dw,DeviceAcceleration:W.dx,XMLDocument:W.be,Document:W.be,DocumentFragment:W.bV,ShadowRoot:W.bV,DOMException:W.dy,DOMPoint:W.dz,DOMPointReadOnly:W.bW,DOMRectReadOnly:W.bX,DOMStringList:W.dA,DOMTokenList:W.dB,Element:W.bY,AnimationEvent:W.i,AnimationPlayerEvent:W.i,ApplicationCacheErrorEvent:W.i,AutocompleteErrorEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceLightEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,GamepadEvent:W.i,GeofencingEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RelatedEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCIceCandidateEvent:W.i,RTCPeerConnectionIceEvent:W.i,SecurityPolicyViolationEvent:W.i,ServicePortConnectEvent:W.i,ServiceWorkerMessageEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BatteryManager:W.f,CanvasCaptureMediaStreamTrack:W.f,CrossOriginServiceWorkerClient:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MessagePort:W.f,MIDIAccess:W.f,NetworkInformation:W.f,Notification:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationReceiver:W.f,PresentationRequest:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,ServicePortCollection:W.f,ServiceWorkerContainer:W.f,ServiceWorkerRegistration:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioContext:W.f,webkitAudioContext:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioSourceNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OfflineAudioContext:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.X,FileList:W.dZ,FileWriter:W.e_,HTMLFormElement:W.e4,Gamepad:W.Y,History:W.e7,HTMLCollection:W.bl,HTMLFormControlsCollection:W.bl,HTMLOptionsCollection:W.bl,HTMLDocument:W.c0,XMLHttpRequest:W.e8,XMLHttpRequestUpload:W.bm,XMLHttpRequestEventTarget:W.bm,HTMLInputElement:W.ec,KeyboardEvent:W.aH,Location:W.ep,MediaList:W.eu,MIDIOutput:W.ev,MIDIInput:W.bo,MIDIPort:W.bo,MimeType:W.Z,MimeTypeArray:W.ew,PointerEvent:W.K,MouseEvent:W.K,DragEvent:W.K,Navigator:W.eG,Attr:W.u,Node:W.u,NodeList:W.cT,RadioNodeList:W.cT,Path2D:W.eN,Perspective:W.eP,Plugin:W.a_,PluginArray:W.eS,PositionValue:W.eV,PresentationConnection:W.eW,Rotation:W.f4,RTCDataChannel:W.cZ,DataChannel:W.cZ,HTMLSelectElement:W.f7,SharedWorker:W.fb,SourceBuffer:W.a0,SourceBufferList:W.fc,SpeechGrammar:W.a1,SpeechGrammarList:W.fe,SpeechRecognitionResult:W.a2,Storage:W.fh,CSSStyleSheet:W.R,StyleSheet:W.R,CalcLength:W.a9,KeywordValue:W.a9,LengthValue:W.a9,NumberValue:W.a9,SimpleLength:W.a9,TransformValue:W.a9,StyleValue:W.a9,TextTrack:W.a3,TextTrackCue:W.S,VTTCue:W.S,TextTrackCueList:W.fr,TextTrackList:W.fs,TimeRanges:W.fu,Touch:W.a4,TouchEvent:W.aM,TouchList:W.fy,TrackDefaultList:W.fz,Matrix:W.b3,Skew:W.b3,TransformComponent:W.b3,Translation:W.fB,CompositionEvent:W.au,FocusEvent:W.au,TextEvent:W.au,SVGZoomEvent:W.au,UIEvent:W.au,URL:W.fH,VideoTrackList:W.fJ,VTTRegionList:W.fM,WebSocket:W.fN,WheelEvent:W.aP,Window:W.bB,DOMWindow:W.bB,Worker:W.fP,CompositorWorkerGlobalScope:W.aQ,DedicatedWorkerGlobalScope:W.aQ,ServiceWorkerGlobalScope:W.aQ,SharedWorkerGlobalScope:W.aQ,WorkerGlobalScope:W.aQ,ClientRect:W.fW,ClientRectList:W.d5,DOMRectList:W.d5,CSSRuleList:W.fY,DocumentType:W.fZ,DOMRect:W.h_,GamepadList:W.hf,HTMLFrameSetElement:W.hg,NamedNodeMap:W.d8,MozNamedAttrMap:W.d8,ServiceWorker:W.hy,SpeechRecognitionResultList:W.hz,StyleSheetList:W.hA,WorkerLocation:W.hD,WorkerNavigator:W.hE,SVGAElement:P.di,SVGAnimateElement:P.aB,SVGAnimateMotionElement:P.aB,SVGAnimateTransformElement:P.aB,SVGAnimationElement:P.aB,SVGSetElement:P.aB,SVGFEBlendElement:P.dG,SVGFEColorMatrixElement:P.dH,SVGFEComponentTransferElement:P.dI,SVGFECompositeElement:P.dJ,SVGFEConvolveMatrixElement:P.dK,SVGFEDiffuseLightingElement:P.dL,SVGFEDisplacementMapElement:P.dM,SVGFEFloodElement:P.dN,SVGFEGaussianBlurElement:P.dO,SVGFEImageElement:P.dP,SVGFEMergeElement:P.dQ,SVGFEMorphologyElement:P.dR,SVGFEOffsetElement:P.dS,SVGFEPointLightElement:P.dT,SVGFESpecularLightingElement:P.dU,SVGFESpotLightElement:P.dV,SVGFETileElement:P.dW,SVGFETurbulenceElement:P.dX,SVGFilterElement:P.e0,SVGForeignObjectElement:P.e3,SVGCircleElement:P.a6,SVGEllipseElement:P.a6,SVGLineElement:P.a6,SVGPathElement:P.a6,SVGPolygonElement:P.a6,SVGPolylineElement:P.a6,SVGGeometryElement:P.a6,SVGClipPathElement:P.ar,SVGDefsElement:P.ar,SVGGElement:P.ar,SVGSwitchElement:P.ar,SVGGraphicsElement:P.ar,SVGImageElement:P.e9,SVGLength:P.ai,SVGLengthList:P.ek,SVGMarkerElement:P.es,SVGMaskElement:P.et,SVGNumber:P.aj,SVGNumberList:P.eH,SVGPatternElement:P.eO,SVGPoint:P.eT,SVGPointList:P.eU,SVGRect:P.eZ,SVGRectElement:P.f_,SVGScriptElement:P.f6,SVGStringList:P.fm,SVGDescElement:P.G,SVGDiscardElement:P.G,SVGFEDistantLightElement:P.G,SVGFEFuncAElement:P.G,SVGFEFuncBElement:P.G,SVGFEFuncGElement:P.G,SVGFEFuncRElement:P.G,SVGFEMergeNodeElement:P.G,SVGMetadataElement:P.G,SVGStopElement:P.G,SVGStyleElement:P.G,SVGTitleElement:P.G,SVGComponentTransferFunctionElement:P.G,SVGElement:P.G,SVGSVGElement:P.fn,SVGSymbolElement:P.fo,SVGTextContentElement:P.d1,SVGTextPathElement:P.fq,SVGTSpanElement:P.by,SVGTextElement:P.by,SVGTextPositioningElement:P.by,SVGTransform:P.ak,SVGTransformList:P.fA,SVGUseElement:P.fI,SVGViewElement:P.fK,SVGViewSpec:P.fL,SVGLinearGradientElement:P.bD,SVGRadialGradientElement:P.bD,SVGGradientElement:P.bD,SVGCursorElement:P.hv,SVGFEDropShadowElement:P.hw,SVGMPathElement:P.hx,AudioBuffer:P.dm,WebGLRenderingContext:P.f2,WebGL2RenderingContext:P.f3,WebGL2RenderingContextBase:P.hC,SQLResultSetRowList:P.ff})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasPattern:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,Credential:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMStringMap:true,EffectModel:true,Entry:true,FederatedCredential:true,FileEntry:true,FileError:true,Stream:true,DOMFileSystem:true,FontFace:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageData:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PasswordCredential:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,Range:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,ServicePort:true,SharedArrayBuffer:true,SourceInfo:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPreserveAspectRatio:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,AudioTrack:true,AudioTrackList:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasGradient:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,CSSCharsetRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DataTransferItemList:true,DeviceAcceleration:true,XMLDocument:true,Document:false,DocumentFragment:true,ShadowRoot:true,DOMException:true,DOMPoint:true,DOMPointReadOnly:false,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AudioDestinationNode:true,AudioNode:true,AudioSourceNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OfflineAudioContext:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Navigator:true,Attr:true,Node:false,NodeList:true,RadioNodeList:true,Path2D:true,Perspective:true,Plugin:true,PluginArray:true,PositionValue:true,PresentationConnection:true,Rotation:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,SharedWorker:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,CalcLength:true,KeywordValue:true,LengthValue:true,NumberValue:true,SimpleLength:true,TransformValue:true,StyleValue:false,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,Matrix:true,Skew:true,TransformComponent:false,Translation:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,SVGZoomEvent:true,UIEvent:false,URL:true,VideoTrackList:true,VTTRegionList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.cP.$nativeSuperclassTag="ArrayBufferView"
H.br.$nativeSuperclassTag="ArrayBufferView"
H.bs.$nativeSuperclassTag="ArrayBufferView"
H.cQ.$nativeSuperclassTag="ArrayBufferView"
H.bq.$nativeSuperclassTag="ArrayBufferView"
H.bt.$nativeSuperclassTag="ArrayBufferView"
H.cR.$nativeSuperclassTag="ArrayBufferView"
W.bf.$nativeSuperclassTag="EventTarget"
W.bj.$nativeSuperclassTag="EventTarget"
W.bg.$nativeSuperclassTag="EventTarget"
W.bi.$nativeSuperclassTag="EventTarget"
W.bh.$nativeSuperclassTag="EventTarget"
W.bk.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.k2(M.k1(),b)},[])
else (function(b){H.k2(M.k1(),b)})([])})})()