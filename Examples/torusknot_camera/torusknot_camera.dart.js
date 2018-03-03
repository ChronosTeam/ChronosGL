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
return d?function(e){if(t===null)t=H.iq(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.iq(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.iq(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={ib:function ib(a){this.a=a},
ig:function(a,b,c,d){if(!!a.$isc)return new H.dy(a,b,[c,d])
return new H.cB(a,b,[c,d])},
i9:function(){return new P.br("No element")},
kU:function(){return new P.br("Too few elements")},
cQ:function(a,b,c,d){if(c-b<=32)H.l7(a,b,c,d)
else H.l6(a,b,c,d)},
l7:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.a9(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.aa(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
l6:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.d(t>32)
s=C.b.S(t+1,6)
r=a3+s
q=a4-s
p=C.b.S(a3+a4,2)
o=p-s
n=p+s
t=J.a9(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.aa(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.aa(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.aa(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.aa(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.aa(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.aa(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.aa(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.aa(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.aa(a5.$2(j,i),0)){h=i
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
H.cQ(a2,a3,g-2,a5)
H.cQ(a2,f+2,a4,a5)
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
break}}H.cQ(a2,g,f,a5)}else H.cQ(a2,g,f,a5)},
c:function c(){},
aU:function aU(){},
cA:function cA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cB:function cB(a,b,c){this.a=a
this.b=b
this.$ti=c},
dy:function dy(a,b,c){this.a=a
this.b=b
this.$ti=c},
em:function em(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cC:function cC(a,b,c){this.a=a
this.b=b
this.$ti=c},
bS:function bS(){},
d1:function(a,b){var t=a.a7(b)
if(!u.globalState.d.cy)u.globalState.f.ac()
return t},
hS:function(){--u.globalState.f.b
H.d(u.globalState.f.b>=0)},
jS:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.u(s).$isb)throw H.e(P.iM("Arguments to main must be a List: "+H.f(s)))
u.globalState=new H.hf(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$j1()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.fT(P.ie(null,H.aM),0)
r=P.n
s.sdT(new H.af(0,null,null,null,null,null,0,[r,H.aL]))
s.sdW(new H.af(0,null,null,null,null,null,0,[r,null]))
if(s.x){q=new H.he()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.kP,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.lj)}if(u.globalState.x)return
s=u.globalState.a++
q=P.aE(null,null,null,r)
p=new H.aW(0,null,!1)
o=new H.aL(s,new H.af(0,null,null,null,null,null,0,[r,H.aW]),q,u.createNewIsolate(),p,new H.ad(H.hY()),new H.ad(H.hY()),!1,!1,[],P.aE(null,null,null,null),null,null,!1,!0,P.aE(null,null,null,null))
q.l(0,0)
o.bg(0,p)
u.globalState.e=o
u.globalState.z.i(0,s,o)
u.globalState.d=o
if(H.b1(a,{func:1,args:[,]}))o.a7(new H.hZ(t,a))
else if(H.b1(a,{func:1,args:[,,]}))o.a7(new H.i_(t,a))
else o.a7(a)
u.globalState.f.ac()},
lj:function(a){var t=P.aD(["command","print","msg",a])
return new H.a8(!0,P.bA(null,P.n)).F(t)},
kR:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.kS()
return},
kS:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.e(new P.t("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.e(new P.t('Cannot extract URI from "'+t+'"'))},
kP:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.aK(!0,[]).P(b.data)
s=J.a9(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.lI(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.aK(!0,[]).P(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.aK(!0,[]).P(s.h(t,"replyTo"))
s=u.globalState.a++
k=P.n
j=P.aE(null,null,null,k)
i=new H.aW(0,null,!1)
h=new H.aL(s,new H.af(0,null,null,null,null,null,0,[k,H.aW]),j,u.createNewIsolate(),i,new H.ad(H.hY()),new H.ad(H.hY()),!1,!1,[],P.aE(null,null,null,null),null,null,!1,!0,P.aE(null,null,null,null))
j.l(0,0)
h.bg(0,i)
u.globalState.f.a.N(0,new H.aM(h,new H.e8(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.ac()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.kq(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.ac()
break
case"close":u.globalState.ch.ab(0,$.$get$j2().h(0,a))
a.terminate()
u.globalState.f.ac()
break
case"log":H.kO(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
k=P.aD(["command","print","msg",t])
k=new H.a8(!0,P.bA(null,P.n)).F(k)
s.toString
self.postMessage(k)}else P.am(s.h(t,"msg"))
break
case"error":throw H.e(s.h(t,"msg"))}},
kO:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aD(["command","log","msg",a])
r=new H.a8(!0,P.bA(null,P.n)).F(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.aw(q)
t=H.at(q)
s=P.bR(t)
throw H.e(s)}},
kQ:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.j8=$.j8+("_"+s)
$.j9=$.j9+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.E(0,["spawned",new H.aZ(s,r),q,t.r])
r=new H.e9(a,b,c,d,t)
if(e){t.by(q,q)
u.globalState.f.a.N(0,new H.aM(t,r,"start isolate"))}else r.$0()},
l8:function(a,b){var t=new H.fn(!0,!1,null)
t.cV(a,b)
return t},
lk:function(a){return new H.aK(!0,[]).P(new H.a8(!1,P.bA(null,P.n)).F(a))},
hZ:function hZ(a,b){this.a=a
this.b=b},
i_:function i_(a,b){this.a=a
this.b=b},
hf:function hf(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
aL:function aL(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
h9:function h9(a,b){this.a=a
this.b=b},
fT:function fT(a,b){this.a=a
this.b=b},
fU:function fU(a){this.a=a},
aM:function aM(a,b,c){this.a=a
this.b=b
this.c=c},
he:function he(){},
e8:function e8(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
e9:function e9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fN:function fN(){},
aZ:function aZ(a,b){this.b=a
this.a=b},
hg:function hg(a,b){this.a=a
this.b=b},
bB:function bB(a,b,c){this.b=a
this.c=b
this.a=c},
aW:function aW(a,b,c){this.a=a
this.b=b
this.c=c},
fn:function fn(a,b,c){this.a=a
this.b=b
this.c=c},
fo:function fo(a,b){this.a=a
this.b=b},
fp:function fp(a,b){this.a=a
this.b=b},
ad:function ad(a){this.a=a},
a8:function a8(a,b){this.a=a
this.b=b},
aK:function aK(a,b){this.a=a
this.b=b},
lE:function(a){return u.types[a]},
lK:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.u(a).$iso},
f:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aP(a)
if(typeof t!=="string")throw H.e(H.a4(a))
return t},
l4:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.eT(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aH:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
cN:function(a){var t,s,r,q,p,o,n,m
t=J.u(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.q||!!J.u(a).$isaI){p=C.m(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.f.aw(q,0)===36)q=C.f.cD(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.d5(H.hG(a),0,null),u.mangledGlobalNames)},
eP:function(a){return"Instance of '"+H.cN(a)+"'"},
O:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
l2:function(a){return a.b?H.O(a).getUTCFullYear()+0:H.O(a).getFullYear()+0},
l0:function(a){return a.b?H.O(a).getUTCMonth()+1:H.O(a).getMonth()+1},
kX:function(a){return a.b?H.O(a).getUTCDate()+0:H.O(a).getDate()+0},
kY:function(a){return a.b?H.O(a).getUTCHours()+0:H.O(a).getHours()+0},
l_:function(a){return a.b?H.O(a).getUTCMinutes()+0:H.O(a).getMinutes()+0},
l1:function(a){return a.b?H.O(a).getUTCSeconds()+0:H.O(a).getSeconds()+0},
kZ:function(a){return a.b?H.O(a).getUTCMilliseconds()+0:H.O(a).getMilliseconds()+0},
j7:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.a4(a))
return a[b]},
M:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ac(!0,b,"index",null)
t=J.db(a)
if(b<0||C.b.co(b,t))return P.A(b,a,"index",null,t)
return P.eQ(b,"index",null)},
a4:function(a){return new P.ac(!0,a,null,null)},
e:function(a){var t
if(a==null)a=new P.cM()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.jV})
t.name=""}else t.toString=H.jV
return t},
jV:function(){return J.aP(this.dartException)},
E:function(a){throw H.e(a)},
D:function(a){throw H.e(new P.a5(a))},
aj:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.fv(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
fw:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
jk:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
id:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.ef(a,s,t?null:b.receiver)},
aw:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.i0(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aF(r,16)&8191)===10)switch(q){case 438:return t.$1(H.id(H.f(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.f(s)+" (Error "+q+")"
return t.$1(new H.cL(p,null))}}if(a instanceof TypeError){o=$.$get$je()
n=$.$get$jf()
m=$.$get$jg()
l=$.$get$jh()
k=$.$get$jl()
j=$.$get$jm()
i=$.$get$jj()
$.$get$ji()
h=$.$get$jo()
g=$.$get$jn()
f=o.I(s)
if(f!=null)return t.$1(H.id(s,f))
else{f=n.I(s)
if(f!=null){f.method="call"
return t.$1(H.id(s,f))}else{f=m.I(s)
if(f==null){f=l.I(s)
if(f==null){f=k.I(s)
if(f==null){f=j.I(s)
if(f==null){f=i.I(s)
if(f==null){f=l.I(s)
if(f==null){f=h.I(s)
if(f==null){f=g.I(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.cL(s,f==null?null:f.method))}}return t.$1(new H.fy(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.cR()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.ac(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.cR()
return a},
at:function(a){var t
if(a==null)return new H.d0(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.d0(a,null)},
lO:function(a){if(a==null||typeof a!='object')return J.ab(a)
else return H.aH(a)},
lB:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=a.length
for(r=0;r<s;){q=r+1
H.d(t)
p=a[r]
r=q+1
H.d(t)
b.i(0,p,a[q])}return b},
lJ:function(a,b,c,d,e,f,g){switch(c){case 0:return H.d1(b,new H.hN(a))
case 1:return H.d1(b,new H.hO(a,d))
case 2:return H.d1(b,new H.hP(a,d,e))
case 3:return H.d1(b,new H.hQ(a,d,e,f))
case 4:return H.d1(b,new H.hR(a,d,e,f,g))}throw H.e(P.bR("Unsupported number of arguments for wrapped closure"))},
bG:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.lJ)
a.$identity=t
return t},
kF:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.u(c).$isb){t.$reflectionInfo=c
r=H.l4(t).r}else r=c
q=d?Object.create(new H.f8().constructor.prototype):Object.create(new H.b5(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.iW(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.lE,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.iS:H.i6
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.e("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.iW(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
kC:function(a,b,c,d){var t=H.i6
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
iW:function(a,b,c){var t,s,r,q
if(c)return H.kE(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.kC(s,b==null?r!=null:b!==r,t,b)
return q},
kD:function(a,b,c,d){var t,s
t=H.i6
s=H.iS
switch(b?-1:a){case 0:throw H.e(new H.eZ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
kE:function(a,b){var t,s,r,q
H.kB()
t=$.iR
if(t==null){t=H.iQ("receiver")
$.iR=t}s=b.$stubName
r=b.length
q=a[s]
t=H.kD(r,b==null?q!=null:b!==q,s,b)
return t},
iq:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.u(c).$isb){c.fixed$length=Array
t=c}else t=c
return H.kF(a,b,t,!!d,e,f)},
i6:function(a){return a.a},
iS:function(a){return a.c},
kB:function(){var t=$.iT
if(t==null){t=H.iQ("self")
$.iT=t}return t},
iQ:function(a){var t,s,r,q,p
t=new H.b5("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
m5:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.ak(a,"String"))},
lz:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.ak(a,"double"))},
m4:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.ak(a,"num"))},
lw:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.ak(a,"bool"))},
lI:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.ak(a,"int"))},
lQ:function(a,b){throw H.e(H.ak(a,b.substring(3)))},
lP:function(a,b){var t=J.a9(b)
throw H.e(H.iV(H.cN(a),t.b4(b,3,t.gk(b))))},
jL:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.u(a)[b])return a
H.lQ(a,b)},
au:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.u(a)[b]
else t=!0
if(t)return a
H.lP(a,b)},
m3:function(a){if(a==null)return a
if(!!J.u(a).$isb)return a
throw H.e(H.ak(a,"List"))},
jG:function(a){var t=J.u(a)
return"$S" in t?t.$S():null},
b1:function(a,b){var t
if(a==null)return!1
t=H.jG(a)
return t==null?!1:H.jM(t,b)},
m1:function(a,b){var t,s
if(a==null)return a
if($.im)return a
$.im=!0
try{if(H.b1(a,b))return a
t=H.av(b,null)
s=H.ak(a,t)
throw H.e(s)}finally{$.im=!1}},
ak:function(a,b){return new H.fx("type '"+H.cN(a)+"' is not a subtype of type '"+b+"'")},
iV:function(a,b){return new H.dk("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
ar:function(a){if(!0===a)return!1
if(!!J.u(a).$isi8)a=a.$0()
if(typeof a==="boolean")return!a
throw H.e(H.ak(a,"bool"))},
aO:function(a){throw H.e(new H.fI(a))},
d:function(a){if(H.ar(a))throw H.e(new P.bH(null))},
lS:function(a){throw H.e(new P.dp(a))},
hY:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
jJ:function(a){return u.getIsolateTag(a)},
J:function(a){return new H.ap(a,null)},
G:function(a,b){H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
hG:function(a){if(a==null)return
return a.$ti},
jK:function(a,b){return H.iw(a["$as"+H.f(b)],H.hG(a))},
as:function(a,b,c){var t,s
t=H.jK(a,b)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
b2:function(a,b){var t,s
t=H.hG(a)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
av:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.d(!0)
H.d(!0)
return a[0].name+H.d5(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.f(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.av(t,b)
return H.ll(a,b)}return"unknown-reified-type"},
ll:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.av(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.av(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.av(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.lA(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.av(l[j],b)+(" "+H.f(j))}q+="}"}return"("+q+") => "+t},
d5:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=new P.bs("")
for(r=b,q=!0,p=!0;H.d(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.d(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.av(o,c)}return p?"":"<"+s.j(0)+">"},
hH:function(a){var t,s
if(a instanceof H.aR){t=H.jG(a)
if(t!=null)return H.av(t,null)}s=J.u(a).constructor.name
if(a==null)return s
return s+H.d5(a.$ti,0,null)},
iw:function(a,b){if(a==null)return b
H.d(typeof a=="function")
H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.it(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.it(a,null,b)
return b},
hB:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.hG(a)
s=J.u(a)
if(s[b]==null)return!1
return H.jD(H.iw(s[d],t),c)},
d6:function(a,b,c,d){if(a==null)return a
if(H.hB(a,b,c,d))return a
throw H.e(H.iV(H.cN(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.d5(c,0,null),u.mangledGlobalNames)))},
lZ:function(a,b,c,d){if(a==null)return a
if(H.hB(a,b,c,d))return a
throw H.e(H.ak(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.d5(c,0,null),u.mangledGlobalNames)))},
jD:function(a,b){var t,s,r,q,p
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
if(!H.T(r,b[p]))return!1}return!0},
m_:function(a,b,c){return H.it(a,b,H.jK(b,c))},
T:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.name==="aG")return!0
if('func' in b)return H.jM(a,b)
if('func' in a)return b.name==="i8"||b.name==="q"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.d(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.d(!0)
q=b[0]}else q=b
if(q!==s){p=H.av(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.jD(H.iw(o,t),r)},
jC:function(a,b,c){var t,s,r,q,p,o,n
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
if(!(H.T(o,n)||H.T(n,o)))return!1}return!0},
ls:function(a,b){var t,s,r,q,p,o
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
if(!(H.T(p,o)||H.T(o,p)))return!1}return!0},
jM:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.d('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.T(t,s)||H.T(s,t)))return!1}r=a.args
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
if(n===m){if(!H.jC(r,q,!1))return!1
if(!H.jC(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.d(j)
g=r[h]
H.d(i)
f=q[h]
if(!(H.T(g,f)||H.T(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.d(j)
g=p[d]
H.d(i)
f=q[e]
if(!(H.T(g,f)||H.T(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.d(j)
g=p[d]
H.d(i)
f=o[e]
if(!(H.T(g,f)||H.T(f,g)))return!1}}return H.ls(a.named,b.named)},
it:function(a,b,c){H.d(typeof a=="function")
H.d(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
m6:function(a){var t=$.ir
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
m2:function(a){return H.aH(a)},
m0:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
lL:function(a){var t,s,r,q,p,o
H.d(!(a instanceof P.q))
t=$.ir.$1(a)
s=$.hE[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.hM[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.jB.$2(a,t)
if(t!=null){s=$.hE[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.hM[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.iu(r)
$.hE[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.hM[t]=r
return r}if(p==="-"){o=H.iu(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.jO(a,r)
if(p==="*")throw H.e(new P.cV(t))
if(u.leafTags[t]===true){o=H.iu(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.jO(a,r)},
jO:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.hV(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
iu:function(a){return J.hV(a,!1,null,!!a.$iso)},
lN:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.hV(t,!1,null,!!t.$iso)
else return J.hV(t,c,null,null)},
lG:function(){if(!0===$.is)return
$.is=!0
H.lH()},
lH:function(){var t,s,r,q,p,o,n,m
$.hE=Object.create(null)
$.hM=Object.create(null)
H.lF()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.jR.$1(p)
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
t=C.v()
t=H.b0(C.r,H.b0(C.x,H.b0(C.l,H.b0(C.l,H.b0(C.w,H.b0(C.t,H.b0(C.u(C.m),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.ir=new H.hJ(p)
$.jB=new H.hK(o)
$.jR=new H.hL(n)},
b0:function(a,b){return a(b)||b},
eT:function eT(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fv:function fv(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cL:function cL(a,b){this.a=a
this.b=b},
ef:function ef(a,b,c){this.a=a
this.b=b
this.c=c},
fy:function fy(a){this.a=a},
i0:function i0(a){this.a=a},
d0:function d0(a,b){this.a=a
this.b=b},
hN:function hN(a){this.a=a},
hO:function hO(a,b){this.a=a
this.b=b},
hP:function hP(a,b,c){this.a=a
this.b=b
this.c=c},
hQ:function hQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hR:function hR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
aR:function aR(){},
fh:function fh(){},
f8:function f8(){},
b5:function b5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fx:function fx(a){this.a=a},
dk:function dk(a){this.a=a},
eZ:function eZ(a){this.a=a},
fI:function fI(a){this.a=a},
ap:function ap(a,b){this.a=a
this.b=b},
af:function af(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
ee:function ee(a){this.a=a},
eh:function eh(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ei:function ei(a,b){this.a=a
this.$ti=b},
ej:function ej(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hJ:function hJ(a){this.a=a},
hK:function hK(a){this.a=a},
hL:function hL(a){this.a=a},
r:function(a){return a},
hx:function(a){var t,s,r
if(!!J.u(a).$ism)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
bj:function bj(){},
aV:function aV(){},
ev:function ev(){},
cF:function cF(){},
cG:function cG(){},
cH:function cH(){},
cE:function cE(){},
ew:function ew(){},
ex:function ex(){},
ey:function ey(){},
ez:function ez(){},
eA:function eA(){},
eB:function eB(){},
cI:function cI(){},
eC:function eC(){},
bk:function bk(){},
bl:function bl(){},
bm:function bm(){},
bn:function bn(){},
lA:function(a){var t=H.G(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
hX:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
u:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cz.prototype
return J.ec.prototype}if(typeof a=="string")return J.aB.prototype
if(a==null)return J.ed.prototype
if(typeof a=="boolean")return J.eb.prototype
if(a.constructor==Array)return J.aA.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aC.prototype
return a}if(a instanceof P.q)return a
return J.hF(a)},
hV:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hF:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.is==null){H.lG()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.e(new P.cV("Return interceptor for "+H.f(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$ic()]
if(p!=null)return p
p=H.lL(a)
if(p!=null)return p
if(typeof a=="function")return C.y
s=Object.getPrototypeOf(a)
if(s==null)return C.n
if(s===Object.prototype)return C.n
if(typeof q=="function"){Object.defineProperty(q,$.$get$ic(),{value:C.j,enumerable:false,writable:true,configurable:true})
return C.j}return C.j},
a9:function(a){if(typeof a=="string")return J.aB.prototype
if(a==null)return a
if(a.constructor==Array)return J.aA.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aC.prototype
return a}if(a instanceof P.q)return a
return J.hF(a)},
d2:function(a){if(a==null)return a
if(a.constructor==Array)return J.aA.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aC.prototype
return a}if(a instanceof P.q)return a
return J.hF(a)},
jI:function(a){if(typeof a=="number")return J.aT.prototype
if(a==null)return a
if(!(a instanceof P.q))return J.aI.prototype
return a},
lC:function(a){if(typeof a=="number")return J.aT.prototype
if(typeof a=="string")return J.aB.prototype
if(a==null)return a
if(!(a instanceof P.q))return J.aI.prototype
return a},
lD:function(a){if(typeof a=="string")return J.aB.prototype
if(a==null)return a
if(!(a instanceof P.q))return J.aI.prototype
return a},
l:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aC.prototype
return a}if(a instanceof P.q)return a
return J.hF(a)},
C:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.u(a).v(a,b)},
aa:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.jI(a).ae(a,b)},
jY:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.jI(a).ar(a,b)},
b3:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lK(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.a9(a).h(a,b)},
jZ:function(a,b,c,d){return J.l(a).d0(a,b,c,d)},
ix:function(a,b){return J.lD(a).aw(a,b)},
iy:function(a,b){return J.l(a).bx(a,b)},
iz:function(a,b,c){return J.l(a).bz(a,b,c)},
k_:function(a,b){return J.l(a).dn(a,b)},
d7:function(a,b,c){return J.l(a).bA(a,b,c)},
k0:function(a,b,c){return J.l(a).bB(a,b,c)},
b4:function(a,b,c){return J.l(a).bC(a,b,c)},
d8:function(a,b){return J.l(a).ds(a,b)},
k1:function(a,b){return J.l(a).bD(a,b)},
k2:function(a,b,c){return J.l(a).bE(a,b,c)},
iA:function(a,b,c,d){return J.l(a).bF(a,b,c,d)},
k3:function(a,b){return J.d2(a).bG(a,b)},
k4:function(a,b,c,d,e){return J.l(a).bH(a,b,c,d,e)},
k5:function(a,b){return J.lC(a).X(a,b)},
i1:function(a){return J.l(a).bJ(a)},
k6:function(a){return J.l(a).bK(a)},
k7:function(a){return J.l(a).bN(a)},
iB:function(a){return J.l(a).dz(a)},
k8:function(a,b){return J.l(a).bO(a,b)},
i2:function(a,b){return J.l(a).bP(a,b)},
k9:function(a,b,c,d){return J.l(a).bQ(a,b,c,d)},
ka:function(a,b,c,d,e){return J.l(a).dF(a,b,c,d,e)},
kb:function(a,b,c,d,e){return J.l(a).bR(a,b,c,d,e)},
kc:function(a,b,c,d,e,f){return J.l(a).dG(a,b,c,d,e,f)},
kd:function(a,b){return J.d2(a).p(a,b)},
d9:function(a,b){return J.l(a).bS(a,b)},
ke:function(a,b){return J.l(a).bT(a,b)},
kf:function(a){return J.l(a).dH(a)},
kg:function(a,b){return J.d2(a).aN(a,b)},
ab:function(a){return J.u(a).gt(a)},
da:function(a){return J.d2(a).gA(a)},
db:function(a){return J.a9(a).gk(a)},
kh:function(a){return J.u(a).gw(a)},
ki:function(a){return J.l(a).gap(a)},
i3:function(a){return J.l(a).gm(a)},
i4:function(a){return J.l(a).gn(a)},
iC:function(a){return J.l(a).gH(a)},
kj:function(a){return J.l(a).aq(a)},
kk:function(a){return J.l(a).aW(a)},
kl:function(a,b){return J.l(a).aX(a,b)},
km:function(a,b,c){return J.l(a).aY(a,b,c)},
iD:function(a,b,c){return J.l(a).b0(a,b,c)},
kn:function(a,b){return J.l(a).bV(a,b)},
ko:function(a,b){return J.d2(a).bX(a,b)},
kp:function(a,b,c){return J.l(a).bZ(a,b,c)},
kq:function(a,b){return J.l(a).E(a,b)},
kr:function(a,b,c,d){return J.l(a).b3(a,b,c,d)},
iE:function(a,b,c,d,e,f,g){return J.l(a).c2(a,b,c,d,e,f,g)},
ks:function(a,b,c,d){return J.l(a).c3(a,b,c,d)},
iF:function(a,b,c,d){return J.l(a).c4(a,b,c,d)},
aP:function(a){return J.u(a).j(a)},
kt:function(a,b,c,d){return J.l(a).e8(a,b,c,d)},
ku:function(a,b,c){return J.l(a).c7(a,b,c)},
kv:function(a,b,c){return J.l(a).c8(a,b,c)},
i5:function(a,b,c){return J.l(a).c9(a,b,c)},
kw:function(a,b,c){return J.l(a).ca(a,b,c)},
iG:function(a,b,c){return J.l(a).cb(a,b,c)},
iH:function(a,b,c){return J.l(a).cc(a,b,c)},
iI:function(a,b,c){return J.l(a).cd(a,b,c)},
iJ:function(a,b,c,d){return J.l(a).ce(a,b,c,d)},
iK:function(a,b,c,d){return J.l(a).cf(a,b,c,d)},
kx:function(a,b){return J.l(a).ci(a,b)},
ky:function(a,b,c){return J.l(a).e9(a,b,c)},
iL:function(a,b,c,d,e,f,g){return J.l(a).ck(a,b,c,d,e,f,g)},
kz:function(a,b,c,d,e){return J.l(a).cl(a,b,c,d,e)},
a:function a(){},
eb:function eb(){},
ed:function ed(){},
bh:function bh(){},
eJ:function eJ(){},
aI:function aI(){},
aC:function aC(){},
aA:function aA(a){this.$ti=a},
ia:function ia(a){this.$ti=a},
df:function df(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aT:function aT(){},
cz:function cz(){},
ec:function ec(){},
aB:function aB(){}},P={
lc:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.lt()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.bG(new P.fK(t),1)).observe(s,{childList:true})
return new P.fJ(t,s,r)}else if(self.setImmediate!=null)return P.lu()
return P.lv()},
ld:function(a){++u.globalState.f.b
self.scheduleImmediate(H.bG(new P.fL(a),0))},
le:function(a){++u.globalState.f.b
self.setImmediate(H.bG(new P.fM(a),0))},
lf:function(a){P.ih(C.k,a)},
lo:function(a,b){if(H.b1(a,{func:1,args:[P.aG,P.aG]})){b.toString
return a}else{b.toString
return a}},
lg:function(a,b){var t,s,r
H.d(b.a<4)
H.d(!(a instanceof P.al))
H.d(b.a===0)
b.a=1
try{a.c6(new P.fZ(b),new P.h_(b))}catch(r){t=H.aw(r)
s=H.at(r)
P.lR(new P.h0(b,t,s))}},
jv:function(a,b){var t,s,r,q
H.d(b.a<=1)
for(;t=a.a,s=t===2,s;){H.d(s)
a=a.c}s=b.a
if(t>=4){H.d(s<4)
r=b.c
b.c=null
q=b.a5(r)
H.d(b.a<4)
H.d(a.a>=4)
b.a=a.a
b.c=a.c
P.bx(b,q)}else{q=b.c
H.d(s<=1)
b.a=2
b.c=a
a.bq(q)}},
bx:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.hy(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bx(t.a,b)}s=t.a
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
P.hy(null,null,p,o,s)
return}s=$.B
if(s==null?l!=null:s!==l){H.d(l!=null)
s=$.B
H.d(l==null?s!=null:l!==s)
j=$.B
$.B=l
i=j}else i=null
s=b.c
if(s===8)new P.h4(t,r,q,b).$0()
else if(p){if((s&1)!==0)new P.h3(r,b,m).$0()}else if((s&2)!==0)new P.h2(t,r,b).$0()
if(i!=null){H.d(!0)
$.B=i}s=r.b
if(!!J.u(s).$ise0){if(s.a>=4){H.d(o.a<4)
h=o.c
o.c=null
b=o.a5(h)
H.d(o.a<4)
H.d(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.jv(s,o)
return}}g=b.b
H.d(g.a<4)
h=g.c
g.c=null
b=g.a5(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.d(!o)
g.a=4
g.c=p}else{H.d(!o)
g.a=8
g.c=p}t.a=g
s=g}},
ln:function(){var t,s
for(;t=$.b_,t!=null;){$.bD=null
s=t.b
$.b_=s
if(s==null)$.bC=null
t.a.$0()}},
lr:function(){$.io=!0
try{P.ln()}finally{$.bD=null
$.io=!1
if($.b_!=null)$.$get$ik().$1(P.jE())}},
jz:function(a){var t=new P.cW(a,null)
if($.b_==null){$.bC=t
$.b_=t
if(!$.io)$.$get$ik().$1(P.jE())}else{$.bC.b=t
$.bC=t}},
lq:function(a){var t,s,r
t=$.b_
if(t==null){P.jz(a)
$.bD=$.bC
return}s=new P.cW(a,null)
r=$.bD
if(r==null){s.b=t
$.bD=s
$.b_=s}else{s.b=r.b
r.b=s
$.bD=s
if(s.b==null)$.bC=s}},
lR:function(a){var t=$.B
if(C.c===t){P.hA(null,null,C.c,a)
return}t.toString
P.hA(null,null,t,t.aJ(a))},
l9:function(a,b){var t=$.B
if(t===C.c){t.toString
return P.ih(a,b)}return P.ih(a,t.aJ(b))},
ih:function(a,b){var t=C.b.S(a.a,1000)
return H.l8(t<0?0:t,b)},
ij:function(a){var t,s
H.d(a!=null)
t=$.B
H.d(a==null?t!=null:a!==t)
s=$.B
$.B=a
return s},
hy:function(a,b,c,d,e){var t={}
t.a=d
P.lq(new P.hz(t,e))},
jx:function(a,b,c,d){var t,s
if($.B===c)return d.$0()
t=P.ij(c)
try{s=d.$0()
return s}finally{s=t
H.d(s!=null)
$.B=s}},
jy:function(a,b,c,d,e){var t,s
if($.B===c)return d.$1(e)
t=P.ij(c)
try{s=d.$1(e)
return s}finally{s=t
H.d(s!=null)
$.B=s}},
lp:function(a,b,c,d,e,f){var t,s
if($.B===c)return d.$2(e,f)
t=P.ij(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.d(s!=null)
$.B=s}},
hA:function(a,b,c,d){var t=C.c!==c
if(t)d=!(!t||!1)?c.aJ(d):c.dq(d)
P.jz(d)},
fK:function fK(a){this.a=a},
fJ:function fJ(a,b,c){this.a=a
this.b=b
this.c=c},
fL:function fL(a){this.a=a},
fM:function fM(a){this.a=a},
fP:function fP(){},
hs:function hs(a,b){this.a=a
this.$ti=b},
cY:function cY(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
al:function al(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
fY:function fY(a,b){this.a=a
this.b=b},
h1:function h1(a,b){this.a=a
this.b=b},
fZ:function fZ(a){this.a=a},
h_:function h_(a){this.a=a},
h0:function h0(a,b,c){this.a=a
this.b=b
this.c=c},
h4:function h4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h5:function h5(a){this.a=a},
h3:function h3(a,b,c){this.a=a
this.b=b
this.c=c},
h2:function h2(a,b,c){this.a=a
this.b=b
this.c=c},
cW:function cW(a,b){this.a=a
this.b=b},
fa:function fa(){},
fc:function fc(a){this.a=a},
fd:function fd(a,b){this.a=a
this.b=b},
fb:function fb(){},
aQ:function aQ(a,b){this.a=a
this.b=b},
hw:function hw(){},
hz:function hz(a,b){this.a=a
this.b=b},
hi:function hi(){},
hk:function hk(a,b){this.a=a
this.b=b},
hj:function hj(a,b){this.a=a
this.b=b},
hl:function hl(a,b){this.a=a
this.b=b},
L:function(){return new H.af(0,null,null,null,null,null,0,[null,null])},
aD:function(a){return H.lB(a,new H.af(0,null,null,null,null,null,0,[null,null]))},
bA:function(a,b){return new P.cZ(0,null,null,null,null,null,0,[a,b])},
li:function(){var t=Object.create(null)
H.d(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
kT:function(a,b,c){var t,s
if(P.ip(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$bE()
C.a.l(s,a)
try{P.lm(a,t)}finally{H.d(C.a.gao(s)===a)
s.pop()}s=P.jd(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
ea:function(a,b,c){var t,s,r
if(P.ip(a))return b+"..."+c
t=new P.bs(b)
s=$.$get$bE()
C.a.l(s,a)
try{r=t
r.a=P.jd(r.gW(),a,", ")}finally{H.d(C.a.gao(s)===a)
s.pop()}s=t
s.a=s.gW()+c
s=t.gW()
return s.charCodeAt(0)==0?s:s},
ip:function(a){var t,s
for(t=0;s=$.$get$bE(),t<s.length;++t)if(a===s[t])return!0
return!1},
lm:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gA(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.q())return
q=H.f(t.gu())
C.a.l(b,q)
s+=q.length+2;++r}if(!t.q()){if(r<=5)return
p=b.pop()
o=b.pop()}else{n=t.gu();++r
if(!t.q()){if(r<=4){C.a.l(b,H.f(n))
return}p=H.f(n)
o=b.pop()
s+=p.length+2}else{m=t.gu();++r
H.d(r<100)
for(;t.q();n=m,m=l){l=t.gu();++r
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
aE:function(a,b,c,d){return new P.hb(0,null,null,null,null,null,0,[d])},
kV:function(a,b){var t,s
t=P.aE(null,null,null,b)
for(s=J.da(a);s.q();)t.l(0,s.gu())
return t},
kW:function(a){var t,s,r
t={}
if(P.ip(a))return"{...}"
s=new P.bs("")
try{C.a.l($.$get$bE(),a)
r=s
r.a=r.gW()+"{"
t.a=!0
a.aN(0,new P.en(t,s))
t=s
t.a=t.gW()+"}"}finally{t=$.$get$bE()
H.d(C.a.gao(t)===a)
t.pop()}t=s.gW()
return t.charCodeAt(0)==0?t:t},
ie:function(a,b){var t=new P.ek(null,0,0,0,[b])
t.cQ(a,b)
return t},
cZ:function cZ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hb:function hb(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hc:function hc(a,b,c){this.a=a
this.b=b
this.c=c},
bz:function bz(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
h8:function h8(){},
v:function v(){},
en:function en(a,b){this.a=a
this.b=b},
ek:function ek(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hd:function hd(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
f2:function f2(){},
f1:function f1(){},
jd:function(a,b,c){var t=J.da(b)
if(!t.q())return a
if(c.length===0){do a+=H.f(t.gu())
while(t.q())}else{a+=H.f(t.gu())
for(;t.q();)a=a+c+H.f(t.gu())}return a},
kG:function(a,b){return J.k5(a,b)},
kH:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.f(t)
if(t>=10)return s+"00"+H.f(t)
return s+"000"+H.f(t)},
kI:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bM:function(a){if(a>=10)return""+a
return"0"+a},
i7:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aP(a)
if(typeof a==="string")return JSON.stringify(a)
return P.kJ(a)},
kJ:function(a){var t=J.u(a)
if(!!t.$isaR)return t.j(a)
return H.eP(a)},
iM:function(a){return new P.ac(!1,null,null,a)},
iN:function(a,b,c){return new P.ac(!0,a,b,c)},
kA:function(a){return new P.ac(!1,null,a,"Must not be null")},
eQ:function(a,b,c){return new P.cO(null,null,!0,a,b,"Value not in range")},
bo:function(a,b,c,d,e){return new P.cO(b,c,!0,a,d,"Invalid value")},
ja:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.bo(a,0,c,"start",f))
if(a>b||b>c)throw H.e(P.bo(b,a,c,"end",f))
return b},
A:function(a,b,c,d,e){var t=e!=null?e:J.db(b)
return new P.e6(b,t,!0,a,c,"Index out of range")},
bR:function(a){return new P.fX(a)},
j4:function(a,b,c){var t,s
t=H.G([],[c])
for(s=J.da(a);s.q();)C.a.l(t,s.gu())
if(b)return t
t.fixed$length=Array
return t},
am:function(a){H.hX(H.f(a))},
bF:function bF(){},
F:function F(){},
b7:function b7(a,b){this.a=a
this.b=b},
K:function K(){},
az:function az(a){this.a=a},
dw:function dw(){},
dx:function dx(){},
aS:function aS(){},
bH:function bH(a){this.a=a},
cM:function cM(){},
ac:function ac(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cO:function cO(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
e6:function e6(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
t:function t(a){this.a=a},
cV:function cV(a){this.a=a},
br:function br(a){this.a=a},
a5:function a5(a){this.a=a},
cR:function cR(){},
dp:function dp(a){this.a=a},
fX:function fX(a){this.a=a},
dz:function dz(a,b,c){this.a=a
this.b=b
this.$ti=c},
n:function n(){},
ae:function ae(){},
cy:function cy(){},
b:function b(){},
ao:function ao(){},
aG:function aG(){},
Q:function Q(){},
q:function q(){},
bq:function bq(){},
y:function y(){},
bs:function bs(a){this.a=a},
hD:function(a){var t,s,r,q,p
if(a==null)return
t=P.L()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.D)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
lx:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.kg(a,new P.hC(t))
return t},
hC:function hC(a){this.a=a},
ha:function ha(){},
hh:function hh(){},
H:function H(){},
dc:function dc(){},
ax:function ax(){},
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
dP:function dP(){},
dQ:function dQ(){},
dR:function dR(){},
dV:function dV(){},
dY:function dY(){},
a6:function a6(){},
an:function an(){},
e4:function e4(){},
ag:function ag(){},
eg:function eg(){},
eo:function eo(){},
ep:function ep(){},
ah:function ah(){},
eE:function eE(){},
eG:function eG(){},
eL:function eL(){},
eM:function eM(){},
eR:function eR(){},
eS:function eS(){},
f_:function f_(){},
fe:function fe(){},
I:function I(){},
ff:function ff(){},
fg:function fg(){},
cS:function cS(){},
fi:function fi(){},
bt:function bt(){},
ai:function ai(){},
ft:function ft(){},
fA:function fA(){},
fC:function fC(){},
fD:function fD(){},
by:function by(){},
hm:function hm(){},
hn:function hn(){},
ho:function ho(){},
c6:function c6(){},
bY:function bY(){},
c1:function c1(){},
c4:function c4(){},
cj:function cj(){},
cl:function cl(){},
cm:function cm(){},
cn:function cn(){},
dg:function dg(){},
eW:function eW(){},
eX:function eX(){},
ht:function ht(){},
f7:function f7(){},
cc:function cc(){},
co:function co(){}},W={
iU:function(a,b){var t=document.createElement("canvas")
t.width=b
t.height=a
return t},
aN:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jw:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ju:function(a,b,c,d,e){var t=c==null?null:W.jA(new W.fW(c))
t=new W.fV(0,a,b,t,!1,[e])
t.cZ(a,b,c,!1,e)
return t},
jA:function(a){var t=$.B
if(t===C.c)return a
return t.dr(a)},
k:function k(){},
dd:function dd(){},
de:function de(){},
U:function U(){},
dh:function dh(){},
bI:function bI(){},
di:function di(){},
bJ:function bJ(){},
bK:function bK(){},
bL:function bL(){},
ay:function ay(){},
dm:function dm(){},
x:function x(){},
b6:function b6(){},
dn:function dn(){},
dq:function dq(){},
dr:function dr(){},
b8:function b8(){},
bN:function bN(){},
ds:function ds(){},
dt:function dt(){},
bO:function bO(){},
bP:function bP(){},
du:function du(){},
dv:function dv(){},
bQ:function bQ(){},
j:function j(){},
h:function h(){},
V:function V(){},
dT:function dT(){},
dU:function dU(){},
dZ:function dZ(){},
W:function W(){},
e2:function e2(){},
bf:function bf(){},
bT:function bT(){},
e3:function e3(){},
bg:function bg(){},
e7:function e7(){},
el:function el(){},
er:function er(){},
es:function es(){},
bi:function bi(){},
X:function X(){},
et:function et(){},
eD:function eD(){},
w:function w(){},
cK:function cK(){},
eF:function eF(){},
eI:function eI(){},
Y:function Y(){},
eK:function eK(){},
eN:function eN(){},
eO:function eO(){},
eY:function eY(){},
cP:function cP(){},
f0:function f0(){},
f3:function f3(){},
Z:function Z(){},
f4:function f4(){},
a_:function a_(){},
f6:function f6(){},
a0:function a0(){},
f9:function f9(){},
R:function R(){},
a7:function a7(){},
a1:function a1(){},
S:function S(){},
fj:function fj(){},
fk:function fk(){},
fm:function fm(){},
a2:function a2(){},
fr:function fr(){},
fs:function fs(){},
aY:function aY(){},
fu:function fu(){},
fz:function fz(){},
fB:function fB(){},
fE:function fE(){},
fF:function fF(){},
bw:function bw(){},
fG:function fG(a){this.a=a},
fH:function fH(){},
aJ:function aJ(){},
fO:function fO(){},
cX:function cX(){},
fQ:function fQ(){},
fR:function fR(){},
fS:function fS(){},
h6:function h6(){},
h7:function h7(){},
d_:function d_(){},
hp:function hp(){},
hq:function hq(){},
hr:function hr(){},
hu:function hu(){},
hv:function hv(){},
il:function il(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
fV:function fV(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fW:function fW(a){this.a=a},
z:function z(){},
dW:function dW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b9:function b9(){},
ba:function ba(){},
bb:function bb(){},
bc:function bc(){},
bd:function bd(){},
be:function be(){},
bU:function bU(){},
cd:function cd(){},
c_:function c_(){},
bX:function bX(){},
c7:function c7(){},
c8:function c8(){},
c9:function c9(){},
ca:function ca(){},
cb:function cb(){},
bV:function bV(){},
bZ:function bZ(){},
bW:function bW(){},
c0:function c0(){},
c2:function c2(){},
c3:function c3(){},
c5:function c5(){},
ce:function ce(){},
cf:function cf(){},
cg:function cg(){},
cq:function cq(){},
cr:function cr(){},
cp:function cp(){},
cu:function cu(){},
cv:function cv(){},
cw:function cw(){},
cx:function cx(){},
ch:function ch(){},
ci:function ci(){},
ck:function ck(){},
cs:function cs(){},
ct:function ct(){}},G={
lb:function(a){var t,s,r
t=a.split("\n")
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.f(t[s])}return C.a.aa(t,"\n")},
jt:function(a,b,c){var t,s,r,q
t=J.l(a)
s=t.bM(a,b)
t.b2(a,s,c)
t.bI(a,s)
r=t.b_(a,s,35713)
if(r!=null&&!r){q=t.aZ(a,s)
P.am("E:Compilation failed:")
P.am("E:"+G.lb(c))
P.am("E:Failure:")
P.am(C.f.V("E:",q))
throw H.e(q)}return s},
j6:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
d.B(b)
d.au(a)
e.B(c)
e.au(a)
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
t=Math.sqrt(e.gaQ())
if(t===0)return!1
e.cp(0,-1/t)
return!0},
j5:function(a,b){var t=new G.eq(P.L(),a,!1,!0)
t.cR(a,b)
return t},
iZ:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.i3(a[s])
b[t+1]=J.i4(a[s])
b[t+2]=J.iC(a[s])}return b},
kL:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.i3(a[s])
b[t+1]=J.i4(a[s])}return b},
kM:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.i3(a[s])
b[t+1]=J.i4(a[s])
b[t+2]=J.iC(a[s])
b[t+3]=J.ki(a[s])}return b},
kK:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.b3(a[s],0)
b[t+1]=J.b3(a[s],1)
b[t+2]=J.b3(a[s],2)
b[t+3]=J.b3(a[s],3)}return b},
lh:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
for(t=a.e,s=t.gJ(t),s=s.gA(s),r=b.x,q=[[P.b,P.n]],p=[P.K],o=[T.aq],n=[T.p],m=[T.a3];s.q();){l=s.gu()
if(!r.C(0,l)){k="Dropping unnecessary attribute: "+H.f(l)
if($.jH>0)H.hX("I: "+k)
continue}j=t.h(0,l)
switch($.$get$P().h(0,l).a){case"vec2":b.a0(l,G.kL(H.d6(j,"$isb",m,"$asb"),null),2)
break
case"vec3":b.a0(l,G.iZ(H.d6(j,"$isb",n,"$asb"),null),3)
break
case"vec4":b.a0(l,G.kM(H.d6(j,"$isb",o,"$asb"),null),4)
break
case"float":b.a0(l,new Float32Array(H.hx(H.d6(j,"$isb",p,"$asb"))),1)
break
case"uvec4":b.a0(l,G.kK(H.d6(j,"$isb",q,"$asb"),null),4)
break
default:if(H.ar(!1))H.aO("unknown type for "+H.f(l)+" ["+J.kh(j[0]).j(0)+"] ["+new H.ap(H.hH(j),null).j(0)+"] "+H.f(j))}}},
jb:function(a,b,c,d){var t=new G.eV(b,c,d,null,null,P.L(),P.L(),P.aE(null,null,null,P.y),null,a,!1,!0)
t.cS(a,b,c,d)
return t},
j_:function(a,b,c,d,e){var t=new G.e5(c,b,J.k7(a.a),e,a,new G.fl(!1,!1,!1,!0,1,9729,9729))
t.cP(a,b,c,d,e)
return t},
eu:function eu(){},
cU:function cU(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dj:function dj(){},
dl:function dl(a,b){this.a=a
this.b=b},
e_:function e_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dS:function dS(a,b,c){this.a=a
this.b=b
this.c=c},
e1:function e1(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cT:function cT(a,b,c){this.a=a
this.b=b
this.c=c},
bv:function bv(a,b,c){this.a=a
this.b=b
this.c=c},
eq:function eq(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
cD:function cD(a,b,c,d,e,f,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
eH:function eH(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
eV:function eV(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
aX:function aX(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
f5:function f5(){},
fl:function fl(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bu:function bu(){},
e5:function e5(a,b,c,d,e,f){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f}},A={
jF:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=b.dx
t.B(c)
s=b.d
t.bY(0,s)
r=b.cx
J.aP(b)
q=C.a.gao(e)
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
p.dv(new T.aF(o))
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
a.cL(r,e,d)
e.pop()
for(s=b.cy,r=s.length,l=0;l<s.length;s.length===r||(0,H.D)(s),++l)A.jF(a,s[l],t,d,e)},
cJ:function cJ(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
bp:function bp(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.a=d
_.b=e
_.c=f},
eU:function eU(a,b,c,d,e,f,g,h,i,a0,a1){var _=this
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
d4:function(a){var t,s
t=C.z.dK(a,0,new A.hI())
s=536870911&t+(C.b.cm(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
hI:function hI(){}},B={
l5:function(b7,b8,b9,c0,c1,c2,c3,c4,c5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
t=[]
s=new Float32Array(H.r(3))
r=new T.p(s)
q=new T.p(new Float32Array(H.r(3)))
new Float32Array(H.r(3))
p=[[P.b,P.n]]
o=H.G(new Array(c2),p)
for(n=[P.n],m=0;m<c2;++m){o[m]=H.G(new Array(c3),n)
l=m/c2*2*b9*3.141592653589793
B.d3(l,c0,b9,c1,b8,$.$get$hW())
B.d3(l+0.02,c0,b9,c1,b8,$.$get$iv())
k=$.$get$iv().a
j=k[0]
i=$.$get$hW().a
s[0]=j-i[0]
s[1]=k[1]-i[1]
s[2]=k[2]-i[2]
j=q.a
j[0]=k[0]+i[0]
j[1]=k[1]+i[1]
j[2]=k[2]+i[2]
h=r.al(q)
h.Z(0)
q=h.al(r)
q.Z(0)
for(k=q.a,j=h.a,g=0;g<c3;++g){f=g/c3*2*3.141592653589793
e=c4*Math.cos(f)
d=c4*Math.sin(f)
i=$.$get$hW().a
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
o[m][g]=t.length-1}}s=P.L()
a6=new G.e1(!1,[],[],[],s)
H.d(!s.C(0,"aTexUV"))
H.d(C.f.cB("aTexUV","a"))
switch($.$get$P().h(0,"aTexUV").a){case"vec2":s.i(0,"aTexUV",H.G([],[T.a3]))
break
case"vec3":s.i(0,"aTexUV",H.G([],[T.p]))
break
case"vec4":s.i(0,"aTexUV",H.G([],[T.aq]))
break
case"float":s.i(0,"aTexUV",H.G([],[P.K]))
break
case"uvec4":s.i(0,"aTexUV",H.G([],p))
break
default:if(H.ar(!1))H.aO("unknown type for aTexUV")}for(m=0;m<c2;m=a7)for(a7=m+1,a8=a7%c2,g=0;g<c3;g=a9){a9=g+1
b0=a9%c3
s=o[m]
b1=s[g]
p=o[a8]
b2=p[g]
b3=p[b0]
b4=s[b0]
s=g/c3
p=new Float32Array(2)
p[0]=0
p[1]=s
n=new Float32Array(2)
b5=new T.a3(n)
n[0]=1
n[1]=s
s=a9/c3
n=new Float32Array(2)
b6=new T.a3(n)
n[0]=1
n[1]=s
n=new Float32Array(2)
n[0]=0
n[1]=s
a6.cH(2)
a6.a1([C.a.h(t,b1),C.a.h(t,b2),C.a.h(t,b3)])
a6.a1([C.a.h(t,b1),C.a.h(t,b3),C.a.h(t,b4)])
a6.b6("aTexUV",[new T.a3(p),b5,b6])
a6.b6("aTexUV",[new T.a3(n),b6,b5])}a6.cN()
return a6},
d3:function(a,b,c,d,e,f){var t,s,r,q,p
t=Math.cos(a)
s=Math.sin(a)
r=b/c*a
q=d*(2+Math.cos(r))
p=f.a
p[0]=q*0.5*t
p[1]=q*s*0.5
p[2]=e*d*Math.sin(r)*0.5
return f},
fq:function fq(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9){var _=this
_.fy=a
_.go=b
_.id=c
_.k1=d
_.k2=e
_.k3=a0
_.k4=a1
_.d=a2
_.e=a3
_.f=a4
_.r=a5
_.x=a6
_.a=a7
_.b=a8
_.c=a9}},T={
ii:function(){return new T.p(new Float32Array(H.r(3)))},
aF:function aF(a){this.a=a},
N:function N(a){this.a=a},
a3:function a3(a){this.a=a},
p:function p(a){this.a=a},
aq:function aq(a){this.a=a}},M={
jX:function(a,b){var t,s,r,q,p
t=C.i.aU(b,"2d")
s=(Math.sin(a)+1)/2;(t&&C.h).e0(t,0,0,b.width,b.height)
r=C.h.dw(t,0,0,b.width*s,b.height)
q=Math.floor(360*s)
p=Math.floor(90*s);(r&&C.e).G(r,0,"hsla("+H.f(q)+", 100%, 40%, 1)")
C.e.G(r,0.2,"black")
C.e.G(r,0.3,"black")
C.e.G(r,0.5,"hsla("+H.f(p)+", 100%, 40%, 1)")
C.e.G(r,0.7,"black")
C.e.G(r,0.9,"black")
C.e.G(r,1,"hsla("+H.f(q)+", 100%, 40%, 1)")
t.fillStyle=r
t.fill("nonzero")},
lM:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
t={}
s=C.p.e_(document,"#webgl-canvas")
r=new G.dl(null,s)
q=(s&&C.i).aV(s,"webgl2",P.aD(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
r.a=q
if(q==null)H.E(P.bR('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
p="ChronosGL Config: "+J.aP(J.kj(q))
if($.jH>0)P.am("I: "+p)
J.k4(q,0,0,0,1)
J.d9(q,2929)
q=new Float32Array(H.r(3))
p=new Float32Array(H.r(3))
o=new Float32Array(H.r(3))
n=new T.N(new Float32Array(H.r(16)))
n.L()
m=new B.fq(new T.p(q),new T.p(p),2,3,20,0,new T.p(o),n,new T.p(new Float32Array(H.r(3))),new T.p(new Float32Array(H.r(3))),new T.p(new Float32Array(H.r(3))),new T.p(new Float32Array(H.r(3))),"camera:torusknot",!1,!0)
n=new T.N(new Float32Array(H.r(16)))
n.L()
o=new T.N(new Float32Array(H.r(16)))
o.L()
l=new G.eH(m,50,1,0.1,1000,n,o,new T.N(new Float32Array(H.r(16))),P.L(),"perspective",!1,!0)
l.bb()
o=H.G([],[A.bp])
k=new A.eU(null,r,o,17664,0,0,0,0,"main",!1,!0)
k.d=new G.e_(r,null,null,null,null)
q=G.jb("textured",r,$.$get$jU(),$.$get$jT())
p=[]
H.d(!0)
C.a.l(o,new A.bp(q,[l],p,"objects",!1,!0))
j=W.iU(512,512)
M.jX(0,j)
i=G.j_(r,"gen",j,null,3553)
h=G.j5("torus",$.$get$iP())
h.M("uTexture",i)
h.M("uColor",new T.p(new Float32Array(H.r(3))))
g=B.l5(!0,1,2,3,20,128,16,4,!1)
n=q.d
f=J.iB(n.a)
e=new G.cD(n,f,4,P.L(),q.e.x,null,0,-1,null,null,P.L(),"meshdata:torusknot",!1,!0)
e.a1(G.iZ(g.d,null))
q=g.cM()
e.y=J.i1(n.a)
H.d(e.ch!=null)
d=e.ch.length
if(d<768){e.saB(new Uint8Array(H.hx(q)))
e.Q=5121}else if(d<196608){e.saB(new Uint16Array(H.hx(q)))
e.Q=5123}else{e.saB(new Uint32Array(H.hx(q)))
e.Q=5125}J.d8(n.a,f)
q=e.y
f=e.cx
n.toString
d=J.u(f)
H.d(!!d.$isjp||!!d.$isjq||!!d.$isjr)
J.d7(n.a,34963,q)
J.iA(n.a,34963,f,35048)
G.lh(g,e)
q=new Float32Array(H.r(9))
n=new T.N(new Float32Array(H.r(16)))
n.L()
f=new T.N(new Float32Array(H.r(16)))
f.L()
d=new Float32Array(H.r(3))
c=new Float32Array(H.r(3))
b=new Float32Array(H.r(3))
a=new Float32Array(H.r(3))
H.d(!0)
C.a.l(p,new A.cJ(h,e,[],new T.aF(q),n,f,new T.p(d),new T.p(c),new T.p(b),new T.p(a),"torus",!1,!0))
for(a0=0;a0<128;++a0)B.d3(a0/128*2*2*3.141592653589793,3,2,20,1,$.$get$jN())
q=G.jb("stars",r,$.$get$jQ(),$.$get$jP())
p=[]
h=G.j5("stars",$.$get$iO())
a1=W.iU(64,64)
a2=C.i.aU(a1,"2d")
a3=(a2&&C.h).bL(a2,32,32,1,32,32,22);(a3&&C.e).G(a3,0,"gray")
C.e.G(a3,1,"black")
a2.fillStyle=a3
C.h.dI(a2,0,0,64,64)
a3=C.h.bL(a2,32,32,1,32,32,6);(a3&&C.e).G(a3,0,"white")
C.e.G(a3,1,"gray")
a2.globalAlpha=0.9
a2.fillStyle=a3
a2.arc(32,32,4,0,6.283185307179586,!1)
a2.fill("nonzero")
h.M("uTexture",G.j_(q.d,"Utils::Particles",a1,null,3553))
h.M("uPointSize",1000)
e=R.la(q,2000,100)
n=new Float32Array(H.r(9))
f=new T.N(new Float32Array(H.r(16)))
f.L()
d=new T.N(new Float32Array(H.r(16)))
d.L()
c=new Float32Array(H.r(3))
b=new Float32Array(H.r(3))
a=new Float32Array(H.r(3))
a4=new Float32Array(H.r(3))
H.d(!0)
C.a.l(p,new A.cJ(h,e,[],new T.aF(n),f,d,new T.p(c),new T.p(b),new T.p(a),new T.p(a4),e.a,!1,!0))
H.d(!0)
C.a.l(o,new A.bp(q,[l],p,"stars",!1,!0))
p=new M.hU(s,l,k)
p.$1(null)
W.ju(window,"resize",p,!1,W.j)
t.a=0
new M.hT(t,r,m,k,j,i).$1(0)},
hU:function hU(a,b,c){this.a=a
this.b=b
this.c=c},
hT:function hT(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f}},R={
la:function(a,b,c){var t,s,r,q
t="stars_"+b
s=b*3
r=new Float32Array(H.r(s))
for(q=0;q<s;++q)r[q]=($.$get$js().dY()-0.5)*c
s=a.d
s=new G.cD(s,J.iB(s.a),0,P.L(),a.e.x,null,0,-1,null,null,P.L(),"meshdata:"+t,!1,!0)
s.a1(r)
return s}}
var v=[C,H,J,P,W,G,A,B,T,M,R]
setFunctionNamesIfNecessary(v)
var $={}
H.ib.prototype={}
J.a.prototype={
v:function(a,b){return a===b},
gt:function(a){return H.aH(a)},
j:function(a){return H.eP(a)},
gw:function(a){return new H.ap(H.hH(a),null)}}
J.eb.prototype={
j:function(a){return String(a)},
gt:function(a){return a?519018:218159},
gw:function(a){return C.O},
$isbF:1}
J.ed.prototype={
v:function(a,b){return null==b},
j:function(a){return"null"},
gt:function(a){return 0},
gw:function(a){return C.I}}
J.bh.prototype={
gt:function(a){return 0},
gw:function(a){return C.H},
j:function(a){return String(a)},
$isj3:1}
J.eJ.prototype={}
J.aI.prototype={}
J.aC.prototype={
j:function(a){var t=a[$.$get$iX()]
return t==null?this.cF(a):J.aP(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isi8:1}
J.aA.prototype={
aL:function(a,b){if(!!a.immutable$list)throw H.e(new P.t(b))},
aK:function(a,b){if(!!a.fixed$length)throw H.e(new P.t(b))},
l:function(a,b){this.aK(a,"add")
a.push(b)},
dk:function(a,b){var t,s,r,q,p
t=a.length
this.aK(a,"addAll")
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.D)(b),++r,t=p){q=b[r]
p=t+1
H.d(t===a.length||H.E(new P.a5(a)))
a.push(q)}},
bX:function(a,b){return new H.cC(a,b,[H.b2(a,0),null])},
aa:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.f(a[s])
return t.join(b)},
p:function(a,b){return this.h(a,b)},
gdJ:function(a){if(a.length>0)return a[0]
throw H.e(H.i9())},
gao:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.e(H.i9())},
b1:function(a,b,c,d,e){var t,s
this.aL(a,"setRange")
P.ja(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.E(P.bo(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.e(H.kU())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=d[e+s]
else for(s=0;s<t;++s)a[b+s]=d[e+s]},
cA:function(a,b){this.aL(a,"sort")
H.cQ(a,0,a.length-1,P.ly())},
at:function(a){return this.cA(a,null)},
Y:function(a,b){var t
for(t=0;t<a.length;++t)if(J.C(a[t],b))return!0
return!1},
j:function(a){return P.ea(a,"[","]")},
gA:function(a){return new J.df(a,a.length,0,null,[H.b2(a,0)])},
gt:function(a){return H.aH(a)},
gk:function(a){return a.length},
sk:function(a,b){this.aK(a,"set length")
if(b<0)throw H.e(P.bo(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.M(a,b))
if(b>=a.length||b<0)throw H.e(H.M(a,b))
return a[b]},
i:function(a,b,c){this.aL(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.M(a,b))
if(b>=a.length||b<0)throw H.e(H.M(a,b))
a[b]=c},
$ism:1,
$asm:function(){},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
J.ia.prototype={}
J.df.prototype={
gu:function(){return this.d},
q:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.e(H.D(t))
r=this.c
if(r>=s){this.sbc(null)
return!1}this.sbc(t[r]);++this.c
return!0},
sbc:function(a){this.d=a}}
J.aT.prototype={
X:function(a,b){var t
if(typeof b!=="number")throw H.e(H.a4(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaO(b)
if(this.gaO(a)===t)return 0
if(this.gaO(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaO:function(a){return a===0?1/a<0:a<0},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gt:function(a){return a&0x1FFFFFFF},
V:function(a,b){if(typeof b!=="number")throw H.e(H.a4(b))
return a+b},
cn:function(a,b){if(typeof b!=="number")throw H.e(H.a4(b))
return a/b},
D:function(a,b){if(typeof b!=="number")throw H.e(H.a4(b))
return a*b},
av:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bv(a,b)},
S:function(a,b){return(a|0)===a?a/b|0:this.bv(a,b)},
bv:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.e(new P.t("Result of truncating division is "+H.f(t)+": "+H.f(a)+" ~/ "+b))},
aF:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
cm:function(a,b){if(typeof b!=="number")throw H.e(H.a4(b))
return(a&b)>>>0},
cG:function(a,b){if(typeof b!=="number")throw H.e(H.a4(b))
return(a^b)>>>0},
ar:function(a,b){if(typeof b!=="number")throw H.e(H.a4(b))
return a<b},
ae:function(a,b){if(typeof b!=="number")throw H.e(H.a4(b))
return a>b},
co:function(a,b){if(typeof b!=="number")throw H.e(H.a4(b))
return a>=b},
gw:function(a){return C.R},
$isQ:1}
J.cz.prototype={
gw:function(a){return C.Q},
$isK:1,
$isn:1,
$isQ:1}
J.ec.prototype={
gw:function(a){return C.P},
$isK:1,
$isQ:1}
J.aB.prototype={
aw:function(a,b){if(b>=a.length)throw H.e(H.M(a,b))
return a.charCodeAt(b)},
V:function(a,b){if(typeof b!=="string")throw H.e(P.iN(b,null,null))
return a+b},
cC:function(a,b,c){var t
if(c>a.length)throw H.e(P.bo(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
cB:function(a,b){return this.cC(a,b,0)},
b4:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.eQ(b,null,null))
if(b>c)throw H.e(P.eQ(b,null,null))
if(c>a.length)throw H.e(P.eQ(c,null,null))
return a.substring(b,c)},
cD:function(a,b){return this.b4(a,b,null)},
X:function(a,b){var t
if(typeof b!=="string")throw H.e(H.a4(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
j:function(a){return a},
gt:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gw:function(a){return C.J},
gk:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.e(H.M(a,b))
return a[b]},
$ism:1,
$asm:function(){},
$isy:1}
H.c.prototype={$asc:null}
H.aU.prototype={
gA:function(a){return new H.cA(this,this.gk(this),0,null,[H.as(this,"aU",0)])},
e7:function(a,b){var t,s
t=H.G([],[H.as(this,"aU",0)])
C.a.sk(t,this.gk(this))
for(s=0;s<this.gk(this);++s)t[s]=this.p(0,s)
return t},
e6:function(a){return this.e7(a,!0)}}
H.cA.prototype={
gu:function(){return this.d},
q:function(){var t,s,r,q
t=this.a
s=J.a9(t)
r=s.gk(t)
if(this.b!==r)throw H.e(new P.a5(t))
q=this.c
if(q>=r){this.sa3(null)
return!1}this.sa3(s.p(t,q));++this.c
return!0},
sa3:function(a){this.d=a}}
H.cB.prototype={
gA:function(a){return new H.em(null,J.da(this.a),this.b,this.$ti)},
gk:function(a){return J.db(this.a)},
$asae:function(a,b){return[b]}}
H.dy.prototype={$isc:1,
$asc:function(a,b){return[b]}}
H.em.prototype={
q:function(){var t=this.b
if(t.q()){this.sa3(this.c.$1(t.gu()))
return!0}this.sa3(null)
return!1},
gu:function(){return this.a},
sa3:function(a){this.a=a},
$ascy:function(a,b){return[b]}}
H.cC.prototype={
gk:function(a){return J.db(this.a)},
p:function(a,b){return this.b.$1(J.kd(this.a,b))},
$asc:function(a,b){return[b]},
$asaU:function(a,b){return[b]},
$asae:function(a,b){return[b]}}
H.bS.prototype={}
H.hZ.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.i_.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.hf.prototype={
sdT:function(a){this.z=a},
sdW:function(a){this.ch=a}}
H.aL.prototype={
by:function(a,b){if(!this.f.v(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.aI()},
e2:function(a){var t,s,r,q,p
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
if(q===r.c)r.bo();++r.d}this.y=!1}this.aI()},
dl:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.u(a),s=0;r=this.ch,s<r.length;s+=2)if(t.v(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
e1:function(a){var t,s,r
if(this.ch==null)return
for(t=J.u(a),s=0;r=this.ch,s<r.length;s+=2)if(t.v(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.E(new P.t("removeRange"))
P.ja(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
cz:function(a,b){if(!this.r.v(0,a))return
this.db=b},
dN:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.E(0,c)
return}H.d(b===1)
t=this.cx
if(t==null){t=P.ie(null,null)
this.cx=t}t.N(0,new H.h9(a,c))},
dM:function(a,b){var t
if(!this.r.v(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.an()
return}H.d(b===1)
t=this.cx
if(t==null){t=P.ie(null,null)
this.cx=t}t.N(0,this.gdU())},
dO:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.am(a)
if(b!=null)P.am(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.aP(a)
s[1]=b==null?null:b.j(0)
for(r=new P.bz(t,t.r,null,null,[null]),r.c=t.e;r.q();)r.d.E(0,s)},
a7:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.aw(o)
p=H.at(o)
this.dO(q,p)
if(this.db){this.an()
if(this===u.globalState.e)throw o}}finally{this.cy=H.lw(r)
u.globalState.d=H.jL(t,"$isaL")
if(t!=null)$=t.gdS()
if(this.cx!=null)for(;n=this.cx,!n.gam(n);)this.cx.c_().$0()}return s},
bW:function(a){return this.b.h(0,a)},
bg:function(a,b){var t=this.b
if(t.C(0,a))throw H.e(P.bR("Registry: ports must be registered only once."))
t.i(0,a,b)},
aI:function(){var t=this.b
if(t.gk(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.an()},
an:function(){var t,s,r
t=this.cx
if(t!=null)t.O(0)
for(t=this.b,s=t.gcj(t),s=s.gA(s);s.q();)s.gu().d2()
t.O(0)
this.c.O(0)
u.globalState.z.ab(0,this.a)
this.dx.O(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].E(0,t[r+1])
this.ch=null}},
gdS:function(){return this.d},
gdu:function(){return this.e}}
H.h9.prototype={
$0:function(){this.a.E(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.fT.prototype={
dA:function(){var t=this.a
if(t.b===t.c)return
return t.c_()},
c1:function(){var t,s,r
t=this.dA()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.C(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gam(s)}else s=!1
else s=!1
else s=!1
if(s)H.E(P.bR("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gam(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aD(["command","close"])
r=new H.a8(!0,new P.cZ(0,null,null,null,null,null,0,[null,P.n])).F(r)
s.toString
self.postMessage(r)}return!1}t.dZ()
return!0},
bt:function(){if(self.window!=null)new H.fU(this).$0()
else for(;this.c1(););},
ac:function(){var t,s,r,q,p
if(!u.globalState.x)this.bt()
else try{this.bt()}catch(r){t=H.aw(r)
s=H.at(r)
q=u.globalState.Q
p=P.aD(["command","error","msg",H.f(t)+"\n"+H.f(s)])
p=new H.a8(!0,P.bA(null,P.n)).F(p)
q.toString
self.postMessage(p)}}}
H.fU.prototype={
$0:function(){if(!this.a.c1())return
P.l9(C.k,this)},
$S:function(){return{func:1,v:true}}}
H.aM.prototype={
dZ:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.a7(this.b)}}
H.he.prototype={}
H.e8.prototype={
$0:function(){H.kQ(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.e9.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(!this.d)this.a.$1(this.c)
else{s=this.a
if(H.b1(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.b1(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.aI()},
$S:function(){return{func:1,v:true}}}
H.fN.prototype={}
H.aZ.prototype={
E:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.lk(b)
if(t.gdu()===s){s=J.a9(r)
switch(s.h(r,0)){case"pause":t.by(s.h(r,1),s.h(r,2))
break
case"resume":t.e2(s.h(r,1))
break
case"add-ondone":t.dl(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.e1(s.h(r,1))
break
case"set-errors-fatal":t.cz(s.h(r,1),s.h(r,2))
break
case"ping":t.dN(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.dM(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.ab(0,s)
break}return}u.globalState.f.a.N(0,new H.aM(t,new H.hg(this,r),"receive"))},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.aZ){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gt:function(a){return this.b.a}}
H.hg.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.d_(0,this.b)},
$S:function(){return{func:1}}}
H.bB.prototype={
E:function(a,b){var t,s,r
t=P.aD(["command","message","port",this,"msg",b])
s=new H.a8(!0,P.bA(null,P.n)).F(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bB){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gt:function(a){return C.b.cG((this.b<<16^this.a<<8)>>>0,this.c)}}
H.aW.prototype={
d2:function(){this.c=!0
this.b=null},
d_:function(a,b){if(this.c)return
this.b.$1(b)},
$isl3:1}
H.fn.prototype={
cV:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.N(0,new H.aM(s,new H.fo(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.bG(new H.fp(this,b),0),a)}else{H.d(a>0)
throw H.e(new P.t("Timer greater than 0."))}}}
H.fo.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.fp.prototype={
$0:function(){this.a.c=null
H.hS()
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.ad.prototype={
gt:function(a){var t=this.a
t=C.b.aF(t,0)^C.b.S(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
v:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.ad){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.a8.prototype={
F:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gk(t))
t=J.u(a)
if(!!t.$isbj)return["buffer",a]
if(!!t.$isaV)return["typed",a]
if(!!t.$ism)return this.ct(a)
if(!!t.$iskN){r=this.gcq()
q=t.gJ(a)
q=H.ig(q,r,H.as(q,"ae",0),null)
q=P.j4(q,!0,H.as(q,"ae",0))
t=t.gcj(a)
t=H.ig(t,r,H.as(t,"ae",0),null)
return["map",q,P.j4(t,!0,H.as(t,"ae",0))]}if(!!t.$isj3)return this.cu(a)
if(!!t.$isa)this.cg(a)
if(!!t.$isl3)this.ad(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isaZ)return this.cv(a)
if(!!t.$isbB)return this.cw(a)
if(!!t.$isaR){p=a.$static_name
if(p==null)this.ad(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isad)return["capability",a.a]
if(!(a instanceof P.q))this.cg(a)
return["dart",u.classIdExtractor(a),this.cs(u.classFieldsExtractor(a))]},
ad:function(a,b){throw H.e(new P.t((b==null?"Can't transmit:":b)+" "+H.f(a)))},
cg:function(a){return this.ad(a,null)},
ct:function(a){var t
H.d(typeof a!=="string")
t=this.cr(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.ad(a,"Can't serialize indexable: ")},
cr:function(a){var t,s
t=[]
C.a.sk(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.F(a[s])
return t},
cs:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.F(a[t]))
return a},
cu:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.ad(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sk(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.F(a[t[r]])
return["js-object",t,s]},
cw:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cv:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.aK.prototype={
P:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.e(P.iM("Bad serialized message: "+H.f(a)))
switch(C.a.gdJ(a)){case"ref":H.d(J.C(a[0],"ref"))
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
s=H.G(this.a6(t),[null])
s.fixed$length=Array
return s
case"extendable":H.d(J.C(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.G(this.a6(t),[null])
case"mutable":H.d(J.C(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.a6(t)
case"const":H.d(J.C(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
s=H.G(this.a6(t),[null])
s.fixed$length=Array
return s
case"map":return this.dD(a)
case"sendport":return this.dE(a)
case"raw sendport":H.d(J.C(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.dC(a)
case"function":H.d(J.C(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.d(J.C(a[0],"capability"))
return new H.ad(a[1])
case"dart":H.d(J.C(a[0],"dart"))
r=a[1]
q=a[2]
p=u.instanceFromClassId(r)
C.a.l(this.b,p)
this.a6(q)
return u.initializeEmptyInstance(r,p,q)
default:throw H.e("couldn't deserialize: "+H.f(a))}},
a6:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.P(a[t]))
return a},
dD:function(a){var t,s,r,q,p
H.d(J.C(a[0],"map"))
t=a[1]
s=a[2]
r=P.L()
C.a.l(this.b,r)
t=J.ko(t,this.gdB()).e6(0)
for(q=J.a9(s),p=0;p<t.length;++p)r.i(0,t[p],this.P(q.h(s,p)))
return r},
dE:function(a){var t,s,r,q,p,o,n
H.d(J.C(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.bW(r)
if(o==null)return
n=new H.aZ(o,s)}else n=new H.bB(t,r,s)
C.a.l(this.b,n)
return n},
dC:function(a){var t,s,r,q,p,o
H.d(J.C(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.a9(t),p=J.a9(s),o=0;o<q.gk(t);++o)r[q.h(t,o)]=this.P(p.h(s,o))
return r}}
H.eT.prototype={}
H.fv.prototype={
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
H.cL.prototype={
j:function(a){var t=this.b
if(t==null)return"NullError: "+H.f(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.ef.prototype={
j:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.f(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.f(this.a)+")"}}
H.fy.prototype={
j:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.i0.prototype={
$1:function(a){if(!!J.u(a).$isaS)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.d0.prototype={
j:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.hN.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.hO.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.hP.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.hQ.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.hR.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.aR.prototype={
j:function(a){return"Closure '"+H.cN(this).trim()+"'"},
$isi8:1,
gea:function(){return this},
$D:null}
H.fh.prototype={}
H.f8.prototype={
j:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.b5.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.b5))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gt:function(a){var t,s
t=this.c
if(t==null)s=H.aH(this.a)
else s=typeof t!=="object"?J.ab(t):H.aH(t)
return(s^H.aH(this.b))>>>0},
j:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.f(this.d)+"' of "+H.eP(t)}}
H.fx.prototype={
j:function(a){return this.a}}
H.dk.prototype={
j:function(a){return this.a}}
H.eZ.prototype={
j:function(a){return"RuntimeError: "+H.f(this.a)}}
H.fI.prototype={
j:function(a){return C.f.V("Assertion failed: ",P.i7(this.a))}}
H.ap.prototype={
j:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gt:function(a){return J.ab(this.a)},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.ap){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.af.prototype={
gk:function(a){return this.a},
gam:function(a){return this.a===0},
gJ:function(a){return new H.ei(this,[H.b2(this,0)])},
gcj:function(a){return H.ig(this.gJ(this),new H.ee(this),H.b2(this,0),H.b2(this,1))},
C:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bl(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bl(s,b)}else return this.dP(b)},
dP:function(a){var t=this.d
if(t==null)return!1
return this.a9(this.ak(t,this.a8(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.a4(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.a4(r,b)
return s==null?null:s.b}else return this.dQ(b)},
dQ:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.ak(t,this.a8(a))
r=this.a9(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aC()
this.b=t}this.be(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aC()
this.c=s}this.be(s,b,c)}else{r=this.d
if(r==null){r=this.aC()
this.d=r}q=this.a8(b)
p=this.ak(r,q)
if(p==null)this.aE(r,q,[this.aD(b,c)])
else{o=this.a9(p,b)
if(o>=0)p[o].b=c
else p.push(this.aD(b,c))}}},
ab:function(a,b){if(typeof b==="string")return this.br(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.br(this.c,b)
else return this.dR(b)},
dR:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.ak(t,this.a8(a))
r=this.a9(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bw(q)
return q.b},
O:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
aN:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.e(new P.a5(this))
t=t.c}},
be:function(a,b,c){var t=this.a4(a,b)
if(t==null)this.aE(a,b,this.aD(b,c))
else t.b=c},
br:function(a,b){var t
if(a==null)return
t=this.a4(a,b)
if(t==null)return
this.bw(t)
this.bm(a,b)
return t.b},
aD:function(a,b){var t,s
t=new H.eh(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bw:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.r=this.r+1&67108863},
a8:function(a){return J.ab(a)&0x3ffffff},
a9:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.C(a[s].a,b))return s
return-1},
j:function(a){return P.kW(this)},
a4:function(a,b){return a[b]},
ak:function(a,b){return a[b]},
aE:function(a,b,c){H.d(c!=null)
a[b]=c},
bm:function(a,b){delete a[b]},
bl:function(a,b){return this.a4(a,b)!=null},
aC:function(){var t=Object.create(null)
this.aE(t,"<non-identifier-key>",t)
this.bm(t,"<non-identifier-key>")
return t},
$iskN:1}
H.ee.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.eh.prototype={}
H.ei.prototype={
gk:function(a){return this.a.a},
gA:function(a){var t,s
t=this.a
s=new H.ej(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.ej.prototype={
gu:function(){return this.d},
q:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a5(t))
else{t=this.c
if(t==null){this.sbd(null)
return!1}else{this.sbd(t.a)
this.c=this.c.c
return!0}}},
sbd:function(a){this.d=a}}
H.hJ.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.hK.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.y]}}}
H.hL.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.y]}}}
H.bj.prototype={
gw:function(a){return C.A},
$isbj:1}
H.aV.prototype={$isaV:1}
H.ev.prototype={
gw:function(a){return C.B}}
H.cF.prototype={
gk:function(a){return a.length},
$ism:1,
$asm:function(){},
$iso:1,
$aso:function(){}}
H.cG.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.M(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.E(H.M(a,b))
a[b]=c}}
H.cH.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.E(H.M(a,b))
a[b]=c},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]}}
H.cE.prototype={
gw:function(a){return C.C},
$isc:1,
$asc:function(){return[P.K]},
$isb:1,
$asb:function(){return[P.K]},
$isdX:1}
H.ew.prototype={
gw:function(a){return C.D},
$isc:1,
$asc:function(){return[P.K]},
$isb:1,
$asb:function(){return[P.K]}}
H.ex.prototype={
gw:function(a){return C.E},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.M(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]}}
H.ey.prototype={
gw:function(a){return C.F},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.M(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]},
$isj0:1}
H.ez.prototype={
gw:function(a){return C.G},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.M(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]}}
H.eA.prototype={
gw:function(a){return C.K},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.M(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]},
$isjp:1}
H.eB.prototype={
gw:function(a){return C.L},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.M(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]},
$isjq:1}
H.cI.prototype={
gw:function(a){return C.M},
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.M(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]}}
H.eC.prototype={
gw:function(a){return C.N},
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.M(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]},
$isjr:1}
H.bk.prototype={
$asm:function(){},
$isc:1,
$asc:function(){return[P.K]},
$aso:function(){},
$isb:1,
$asb:function(){return[P.K]}}
H.bl.prototype={
$asm:function(){},
$isc:1,
$asc:function(){return[P.n]},
$aso:function(){},
$isb:1,
$asb:function(){return[P.n]}}
H.bm.prototype={
$asm:function(){},
$asc:function(){return[P.n]},
$aso:function(){},
$asb:function(){return[P.n]}}
H.bn.prototype={
$asm:function(){},
$asc:function(){return[P.K]},
$aso:function(){},
$asb:function(){return[P.K]}}
P.fK.prototype={
$1:function(a){var t,s
H.hS()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.fJ.prototype={
$1:function(a){var t,s
t=this.a
H.d(t.a==null);++u.globalState.f.b
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.fL.prototype={
$0:function(){H.hS()
this.a.$0()},
$S:function(){return{func:1}}}
P.fM.prototype={
$0:function(){H.hS()
this.a.$0()},
$S:function(){return{func:1}}}
P.fP.prototype={}
P.hs.prototype={
dt:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.br("Future already completed"))
t.ay(b)}}
P.cY.prototype={
dX:function(a){if(this.c!==6)return!0
H.d(!0)
return this.b.b.aR(this.d,a.a)},
dL:function(a){var t,s
t=(this.c&2)!==0
if(t){H.d(t)
t=this.e!=null}else t=!1
H.d(t)
s=this.e
t=this.b.b
if(H.b1(s,{func:1,args:[P.q,P.bq]}))return t.e3(s,a.a,a.b)
else return t.aR(s,a.a)}}
P.al.prototype={
c6:function(a,b){var t,s,r
t=$.B
if(t!==C.c){t.toString
if(b!=null)b=P.lo(b,t)}s=new P.al(0,t,null,[null])
r=b==null?1:3
this.bf(new P.cY(null,s,r,a,b,[H.b2(this,0),null]))
return s},
c5:function(a){return this.c6(a,null)},
bh:function(a){H.d(this.a<4)
H.d(a.a>=4)
this.a=a.a
this.c=a.c},
bf:function(a){var t
H.d(a.a==null)
t=this.a
if(t<=1){a.a=H.jL(this.c,"$iscY")
this.c=a}else{if(t===2){H.d(!0)
t=this.c
if(t.a<4){t.bf(a)
return}this.bh(t)}H.d(this.a>=4)
t=this.b
t.toString
P.hA(null,null,t,new P.fY(this,a))}},
bq:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.d(!0)
s=this.c
if(s.a<4){s.bq(a)
return}this.bh(s)}H.d(this.a>=4)
t.a=this.a5(a)
s=this.b
s.toString
P.hA(null,null,s,new P.h1(t,this))}},
bs:function(){H.d(this.a<4)
var t=this.c
this.c=null
return this.a5(t)},
a5:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
ay:function(a){var t,s
H.d(this.a<4)
t=this.$ti
if(H.hB(a,"$ise0",t,"$ase0"))if(H.hB(a,"$isal",t,null))P.jv(a,this)
else P.lg(a,this)
else{s=this.bs()
H.d(this.a<4)
this.a=4
this.c=a
P.bx(this,s)}},
ah:function(a,b){var t
H.d(this.a<4)
t=this.bs()
H.d(this.a<4)
this.a=8
this.c=new P.aQ(a,b)
P.bx(this,t)},
d4:function(a){return this.ah(a,null)},
$ise0:1,
gaG:function(){return this.a},
gdh:function(){return this.c}}
P.fY.prototype={
$0:function(){P.bx(this.a,this.b)},
$S:function(){return{func:1}}}
P.h1.prototype={
$0:function(){P.bx(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.fZ.prototype={
$1:function(a){var t=this.a
H.d(t.a===1)
H.d(t.a===1)
t.a=0
t.ay(a)},
$S:function(){return{func:1,args:[,]}}}
P.h_.prototype={
$2:function(a,b){var t=this.a
H.d(t.a===1)
t.ah(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.h0.prototype={
$0:function(){this.a.ah(this.b,this.c)},
$S:function(){return{func:1}}}
P.h4.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.d
p=q.c
H.d((p&1)===0)
o=(p&2)===0
H.d(o)
t=null
try{H.d(o)
H.d(p===8)
t=q.b.b.c0(q.d)}catch(n){s=H.aw(n)
r=H.at(n)
if(this.c){q=this.a.a
H.d(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.d(q.a===8)
p.b=q.c}else p.b=new P.aQ(s,r)
p.a=!0
return}if(!!J.u(t).$ise0){if(t instanceof P.al&&t.gaG()>=4){if(t.gaG()===8){q=t
H.d(q.gaG()===8)
p=this.b
p.b=q.gdh()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.c5(new P.h5(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.h5.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.h3.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.d((r.c&1)!==0)
this.a.b=r.b.b.aR(r.d,this.c)}catch(q){t=H.aw(q)
s=H.at(q)
r=this.a
r.b=new P.aQ(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.h2.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.d(q.a===8)
t=q.c
q=this.c
if(q.dX(t)){H.d((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.dL(t)
p.a=!1}}catch(o){s=H.aw(o)
r=H.at(o)
q=this.a
p=q.a
H.d(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.d(q.a===8)
m.b=q.c}else m.b=new P.aQ(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.cW.prototype={}
P.fa.prototype={
gk:function(a){var t,s
t={}
s=new P.al(0,$.B,null,[P.n])
t.a=0
this.dV(new P.fc(t),!0,new P.fd(t,s),s.gd3())
return s}}
P.fc.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.fd.prototype={
$0:function(){this.b.ay(this.a.a)},
$S:function(){return{func:1}}}
P.fb.prototype={}
P.aQ.prototype={
j:function(a){return H.f(this.a)},
$isaS:1}
P.hw.prototype={}
P.hz.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.cM()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.e(t)
r=H.e(t)
r.stack=s.j(0)
throw r},
$S:function(){return{func:1}}}
P.hi.prototype={
e4:function(a){var t,s,r
try{if(C.c===$.B){a.$0()
return}P.jx(null,null,this,a)}catch(r){t=H.aw(r)
s=H.at(r)
P.hy(null,null,this,t,s)}},
e5:function(a,b){var t,s,r
try{if(C.c===$.B){a.$1(b)
return}P.jy(null,null,this,a,b)}catch(r){t=H.aw(r)
s=H.at(r)
P.hy(null,null,this,t,s)}},
dq:function(a){return new P.hk(this,a)},
aJ:function(a){return new P.hj(this,a)},
dr:function(a){return new P.hl(this,a)},
h:function(a,b){return},
c0:function(a){if($.B===C.c)return a.$0()
return P.jx(null,null,this,a)},
aR:function(a,b){if($.B===C.c)return a.$1(b)
return P.jy(null,null,this,a,b)},
e3:function(a,b,c){if($.B===C.c)return a.$2(b,c)
return P.lp(null,null,this,a,b,c)}}
P.hk.prototype={
$0:function(){return this.a.c0(this.b)},
$S:function(){return{func:1}}}
P.hj.prototype={
$0:function(){return this.a.e4(this.b)},
$S:function(){return{func:1}}}
P.hl.prototype={
$1:function(a){return this.a.e5(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.cZ.prototype={
a8:function(a){return H.lO(a)&0x3ffffff},
a9:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.hb.prototype={
gA:function(a){var t=new P.bz(this,this.r,null,null,[null])
t.c=this.e
return t},
gk:function(a){return this.a},
Y:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.d5(b)},
d5:function(a){var t=this.d
if(t==null)return!1
return this.aj(t[this.ai(a)],a)>=0},
bW:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.Y(0,a)?a:null
else return this.de(a)},
de:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.ai(a)]
r=this.aj(s,a)
if(r<0)return
return J.b3(s,r).gd7()},
l:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.bi(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.bi(r,b)}else return this.N(0,b)},
N:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.li()
this.d=t}s=this.ai(b)
r=t[s]
if(r==null){q=[this.ax(b)]
H.d(q!=null)
t[s]=q}else{if(this.aj(r,b)>=0)return!1
r.push(this.ax(b))}return!0},
ab:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bj(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bj(this.c,b)
else return this.df(0,b)},
df:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.ai(b)]
r=this.aj(s,b)
if(r<0)return!1
this.bk(s.splice(r,1)[0])
return!0},
O:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
bi:function(a,b){var t
if(a[b]!=null)return!1
t=this.ax(b)
H.d(!0)
a[b]=t
return!0},
bj:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bk(t)
delete a[b]
return!0},
ax:function(a){var t,s
t=new P.hc(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bk:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.r=this.r+1&67108863},
ai:function(a){return J.ab(a)&0x3ffffff},
aj:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.C(a[s].a,b))return s
return-1},
$isc:1,
$asc:null}
P.hc.prototype={
gd7:function(){return this.a}}
P.bz.prototype={
gu:function(){return this.d},
q:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a5(t))
else{t=this.c
if(t==null){this.sa2(null)
return!1}else{this.sa2(t.a)
this.c=this.c.b
return!0}}},
sa2:function(a){this.d=a}}
P.h8.prototype={}
P.v.prototype={
gA:function(a){return new H.cA(a,this.gk(a),0,null,[H.as(a,"v",0)])},
p:function(a,b){return this.h(a,b)},
bX:function(a,b){return new H.cC(a,b,[H.as(a,"v",0),null])},
dK:function(a,b,c){var t,s,r
t=this.gk(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gk(a))throw H.e(new P.a5(a))}return s},
j:function(a){return P.ea(a,"[","]")},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
P.en.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.f(a)
t.a=s+": "
t.a+=H.f(b)},
$S:function(){return{func:1,args:[,,]}}}
P.ek.prototype={
gA:function(a){return new P.hd(this,this.c,this.d,this.b,null,this.$ti)},
gam:function(a){return this.b===this.c},
gk:function(a){return(this.c-this.b&this.a.length-1)>>>0},
p:function(a,b){var t=(this.c-this.b&this.a.length-1)>>>0
if(C.b.ae(0,b)||b>=t)H.E(P.A(b,this,"index",null,t))
return this.a[(C.b.V(this.b,b)&this.a.length-1)>>>0]},
O:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
j:function(a){return P.ea(this,"{","}")},
c_:function(){var t,s,r
t=this.b
if(t===this.c)throw H.e(H.i9());++this.d
s=this.a
r=s[t]
s[t]=null
this.b=(t+1&s.length-1)>>>0
return r},
N:function(a,b){var t,s
t=this.a
s=this.c
t[s]=b
t=(s+1&t.length-1)>>>0
this.c=t
if(this.b===t)this.bo();++this.d},
bo:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.G(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.b1(s,0,q,t,r)
C.a.b1(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbu(s)},
cQ:function(a,b){var t
H.d(!0)
t=new Array(8)
t.fixed$length=Array
this.sbu(H.G(t,[b]))},
sbu:function(a){this.a=a},
$asc:null}
P.hd.prototype={
gu:function(){return this.e},
q:function(){var t,s
t=this.a
if(this.c!==t.d)H.E(new P.a5(t))
s=this.d
if(s===this.b){this.sa2(null)
return!1}this.sa2(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sa2:function(a){this.e=a}}
P.f2.prototype={
j:function(a){return P.ea(this,"{","}")},
$isc:1,
$asc:null}
P.f1.prototype={}
P.bF.prototype={
gt:function(a){return P.q.prototype.gt.call(this,this)},
j:function(a){return this?"true":"false"}}
P.F.prototype={}
P.b7.prototype={
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.b7))return!1
return this.a===b.a&&this.b===b.b},
X:function(a,b){return C.b.X(this.a,b.a)},
gt:function(a){var t=this.a
return(t^C.b.aF(t,30))&1073741823},
j:function(a){var t,s,r,q,p,o,n
t=P.kH(H.l2(this))
s=P.bM(H.l0(this))
r=P.bM(H.kX(this))
q=P.bM(H.kY(this))
p=P.bM(H.l_(this))
o=P.bM(H.l1(this))
n=P.kI(H.kZ(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isF:1,
$asF:function(){return[P.b7]}}
P.K.prototype={$isF:1,
$asF:function(){return[P.Q]}}
P.az.prototype={
ar:function(a,b){return C.b.ar(this.a,b.gd6())},
ae:function(a,b){return C.b.ae(this.a,b.gd6())},
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.az))return!1
return this.a===b.a},
gt:function(a){return this.a&0x1FFFFFFF},
X:function(a,b){return C.b.X(this.a,b.a)},
j:function(a){var t,s,r,q,p
t=new P.dx()
s=this.a
if(s<0)return"-"+new P.az(0-s).j(0)
r=t.$1(C.b.S(s,6e7)%60)
q=t.$1(C.b.S(s,1e6)%60)
p=new P.dw().$1(s%1e6)
return""+C.b.S(s,36e8)+":"+H.f(r)+":"+H.f(q)+"."+H.f(p)},
$isF:1,
$asF:function(){return[P.az]}}
P.dw.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.y,args:[P.n]}}}
P.dx.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.y,args:[P.n]}}}
P.aS.prototype={}
P.bH.prototype={
j:function(a){return"Assertion failed"}}
P.cM.prototype={
j:function(a){return"Throw of null."}}
P.ac.prototype={
gaA:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaz:function(){return""},
j:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.f(t)
q=this.gaA()+s+r
if(!this.a)return q
p=this.gaz()
o=P.i7(this.b)
return q+p+": "+H.f(o)}}
P.cO.prototype={
gaA:function(){return"RangeError"},
gaz:function(){var t,s,r
H.d(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.f(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.f(t)
else if(r>t)s=": Not in range "+H.f(t)+".."+H.f(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.f(t)}return s}}
P.e6.prototype={
gaA:function(){return"RangeError"},
gaz:function(){H.d(this.a)
if(J.jY(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.f(t)},
gk:function(a){return this.f}}
P.t.prototype={
j:function(a){return"Unsupported operation: "+this.a}}
P.cV.prototype={
j:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.br.prototype={
j:function(a){return"Bad state: "+this.a}}
P.a5.prototype={
j:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.f(P.i7(t))+"."}}
P.cR.prototype={
j:function(a){return"Stack Overflow"},
$isaS:1}
P.dp.prototype={
j:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.fX.prototype={
j:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.f(t)}}
P.dz.prototype={
j:function(a){return"Expando:"+H.f(this.a)},
h:function(a,b){var t,s
t=this.b
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.E(P.iN(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.j7(b,"expando$values")
return s==null?null:H.j7(s,t)}}
P.n.prototype={$isF:1,
$asF:function(){return[P.Q]}}
P.ae.prototype={
gk:function(a){var t,s
H.d(!this.$isc)
t=this.gA(this)
for(s=0;t.q();)++s
return s},
p:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(P.kA("index"))
if(b<0)H.E(P.bo(b,0,null,"index",null))
for(t=this.gA(this),s=0;t.q();){r=t.gu()
if(b===s)return r;++s}throw H.e(P.A(b,this,"index",null,s))},
j:function(a){return P.kT(this,"(",")")}}
P.cy.prototype={}
P.b.prototype={$isc:1,$asc:null,$asb:null}
P.ao.prototype={}
P.aG.prototype={
gt:function(a){return P.q.prototype.gt.call(this,this)},
j:function(a){return"null"}}
P.Q.prototype={$isF:1,
$asF:function(){return[P.Q]}}
P.q.prototype={constructor:P.q,$isq:1,
v:function(a,b){return this===b},
gt:function(a){return H.aH(this)},
j:function(a){return H.eP(this)},
gw:function(a){return new H.ap(H.hH(this),null)},
toString:function(){return this.j(this)}}
P.bq.prototype={}
P.y.prototype={$isF:1,
$asF:function(){return[P.y]}}
P.bs.prototype={
gk:function(a){return this.a.length},
j:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
gW:function(){return this.a}}
W.k.prototype={}
W.dd.prototype={
j:function(a){return String(a)},
$isa:1}
W.de.prototype={
j:function(a){return String(a)},
$isa:1}
W.U.prototype={$isq:1}
W.dh.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.U]},
$isc:1,
$asc:function(){return[W.U]},
$iso:1,
$aso:function(){return[W.U]},
$isb:1,
$asb:function(){return[W.U]}}
W.bI.prototype={}
W.di.prototype={$isa:1}
W.bJ.prototype={
aV:function(a,b,c){if(c!=null)return this.d9(a,b,P.lx(c,null))
return this.da(a,b)},
aU:function(a,b){return this.aV(a,b,null)},
d9:function(a,b,c){return a.getContext(b,c)},
da:function(a,b){return a.getContext(b)}}
W.bK.prototype={
G:function(a,b,c){return a.addColorStop(b,c)}}
W.bL.prototype={
dw:function(a,b,c,d,e){return a.createLinearGradient(b,c,d,e)},
bL:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
dI:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
aq:function(a){return P.hD(a.getContextAttributes())},
e0:function(a,b,c,d,e){return a.rect(b,c,d,e)}}
W.ay.prototype={$isa:1,
gk:function(a){return a.length}}
W.dm.prototype={$isa:1}
W.x.prototype={$isq:1}
W.b6.prototype={
gk:function(a){return a.length}}
W.dn.prototype={}
W.dq.prototype={
h:function(a,b){return a[b]},
gk:function(a){return a.length}}
W.dr.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gH:function(a){return a.z}}
W.b8.prototype={
e_:function(a,b){return a.querySelector(b)}}
W.bN.prototype={$isa:1}
W.ds.prototype={
j:function(a){return String(a)}}
W.dt.prototype={
gap:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gH:function(a){return a.z}}
W.bO.prototype={
gap:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gH:function(a){return a.z}}
W.bP.prototype={
j:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gU(a))+" x "+H.f(this.gT(a))},
v:function(a,b){var t
if(b==null)return!1
t=J.u(b)
if(!t.$isH)return!1
return a.left===t.gaP(b)&&a.top===t.gaT(b)&&this.gU(a)===t.gU(b)&&this.gT(a)===t.gT(b)},
gt:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gU(a)
q=this.gT(a)
return W.jw(W.aN(W.aN(W.aN(W.aN(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gT:function(a){return a.height},
gaP:function(a){return a.left},
gaT:function(a){return a.top},
gU:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isH:1,
$asH:function(){}}
W.du.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[P.y]},
$isc:1,
$asc:function(){return[P.y]},
$iso:1,
$aso:function(){return[P.y]},
$isb:1,
$asb:function(){return[P.y]}}
W.dv.prototype={
gk:function(a){return a.length}}
W.bQ.prototype={
j:function(a){return a.localName},
$isa:1}
W.j.prototype={$isq:1,$isj:1}
W.h.prototype={
d0:function(a,b,c,d){return a.addEventListener(b,H.bG(c,1),!1)}}
W.V.prototype={$isq:1}
W.dT.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.V]},
$isc:1,
$asc:function(){return[W.V]},
$iso:1,
$aso:function(){return[W.V]},
$isb:1,
$asb:function(){return[W.V]}}
W.dU.prototype={
gk:function(a){return a.length}}
W.dZ.prototype={
gk:function(a){return a.length}}
W.W.prototype={$isq:1}
W.e2.prototype={
gk:function(a){return a.length}}
W.bf.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.w]},
$isc:1,
$asc:function(){return[W.w]},
$iso:1,
$aso:function(){return[W.w]},
$isb:1,
$asb:function(){return[W.w]}}
W.bT.prototype={}
W.e3.prototype={
E:function(a,b){return a.send(b)}}
W.bg.prototype={}
W.e7.prototype={$isa:1}
W.el.prototype={
j:function(a){return String(a)}}
W.er.prototype={
gk:function(a){return a.length}}
W.es.prototype={
eb:function(a,b,c){return a.send(b,c)},
E:function(a,b){return a.send(b)}}
W.bi.prototype={}
W.X.prototype={$isq:1}
W.et.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.X]},
$isc:1,
$asc:function(){return[W.X]},
$iso:1,
$aso:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.eD.prototype={$isa:1}
W.w.prototype={
j:function(a){var t=a.nodeValue
return t==null?this.cE(a):t},
$isq:1}
W.cK.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.w]},
$isc:1,
$asc:function(){return[W.w]},
$iso:1,
$aso:function(){return[W.w]},
$isb:1,
$asb:function(){return[W.w]}}
W.eF.prototype={$isa:1}
W.eI.prototype={
gk:function(a){return a.length}}
W.Y.prototype={$isq:1,
gk:function(a){return a.length}}
W.eK.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.Y]},
$isc:1,
$asc:function(){return[W.Y]},
$iso:1,
$aso:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.eN.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.eO.prototype={
E:function(a,b){return a.send(b)}}
W.eY.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gH:function(a){return a.z}}
W.cP.prototype={
E:function(a,b){return a.send(b)}}
W.f0.prototype={
gk:function(a){return a.length}}
W.f3.prototype={$isa:1}
W.Z.prototype={$isq:1}
W.f4.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.Z]},
$isc:1,
$asc:function(){return[W.Z]},
$iso:1,
$aso:function(){return[W.Z]},
$isb:1,
$asb:function(){return[W.Z]}}
W.a_.prototype={$isq:1}
W.f6.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.a_]},
$isc:1,
$asc:function(){return[W.a_]},
$iso:1,
$aso:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.a0.prototype={$isq:1,
gk:function(a){return a.length}}
W.f9.prototype={
h:function(a,b){return this.bn(a,b)},
aN:function(a,b){var t,s
for(t=0;!0;++t){s=this.dd(a,t)
if(s==null)return
b.$2(s,this.bn(a,s))}},
gk:function(a){return a.length},
bn:function(a,b){return a.getItem(b)},
dd:function(a,b){return a.key(b)}}
W.R.prototype={$isq:1}
W.a7.prototype={}
W.a1.prototype={$isq:1}
W.S.prototype={$isq:1}
W.fj.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.S]},
$isc:1,
$asc:function(){return[W.S]},
$iso:1,
$aso:function(){return[W.S]},
$isb:1,
$asb:function(){return[W.S]}}
W.fk.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.a1]},
$isc:1,
$asc:function(){return[W.a1]},
$iso:1,
$aso:function(){return[W.a1]},
$isb:1,
$asb:function(){return[W.a1]}}
W.fm.prototype={
gk:function(a){return a.length}}
W.a2.prototype={$isq:1}
W.fr.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.a2]},
$isc:1,
$asc:function(){return[W.a2]},
$iso:1,
$aso:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.fs.prototype={
gk:function(a){return a.length}}
W.aY.prototype={}
W.fu.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gH:function(a){return a.z}}
W.fz.prototype={
j:function(a){return String(a)},
$isa:1}
W.fB.prototype={
gk:function(a){return a.length}}
W.fE.prototype={
gk:function(a){return a.length}}
W.fF.prototype={
E:function(a,b){return a.send(b)}}
W.bw.prototype={
gdm:function(a){var t,s
t=P.Q
s=new P.al(0,$.B,null,[t])
this.d8(a)
this.dg(a,W.jA(new W.fG(new P.hs(s,[t]))))
return s},
dg:function(a,b){return a.requestAnimationFrame(H.bG(b,1))},
d8:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isa:1}
W.fG.prototype={
$1:function(a){this.a.dt(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.fH.prototype={$isa:1}
W.aJ.prototype={$isa:1}
W.fO.prototype={
j:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
v:function(a,b){var t,s,r
if(b==null)return!1
t=J.u(b)
if(!t.$isH)return!1
s=a.left
r=t.gaP(b)
if(s==null?r==null:s===r){s=a.top
r=t.gaT(b)
if(s==null?r==null:s===r){s=a.width
r=t.gU(b)
if(s==null?r==null:s===r){s=a.height
t=t.gT(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gt:function(a){var t,s,r,q
t=J.ab(a.left)
s=J.ab(a.top)
r=J.ab(a.width)
q=J.ab(a.height)
return W.jw(W.aN(W.aN(W.aN(W.aN(0,t),s),r),q))},
$isH:1,
$asH:function(){},
gT:function(a){return a.height},
gaP:function(a){return a.left},
gaT:function(a){return a.top},
gU:function(a){return a.width}}
W.cX.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[P.H]},
$isc:1,
$asc:function(){return[P.H]},
$iso:1,
$aso:function(){return[P.H]},
$isb:1,
$asb:function(){return[P.H]}}
W.fQ.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.x]},
$isc:1,
$asc:function(){return[W.x]},
$iso:1,
$aso:function(){return[W.x]},
$isb:1,
$asb:function(){return[W.x]}}
W.fR.prototype={$isa:1}
W.fS.prototype={
gT:function(a){return a.height},
gU:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.h6.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.W]},
$isc:1,
$asc:function(){return[W.W]},
$iso:1,
$aso:function(){return[W.W]},
$isb:1,
$asb:function(){return[W.W]}}
W.h7.prototype={$isa:1}
W.d_.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.w]},
$isc:1,
$asc:function(){return[W.w]},
$iso:1,
$aso:function(){return[W.w]},
$isb:1,
$asb:function(){return[W.w]}}
W.hp.prototype={$isa:1}
W.hq.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.a0]},
$isc:1,
$asc:function(){return[W.a0]},
$iso:1,
$aso:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.hr.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.R]},
$isc:1,
$asc:function(){return[W.R]},
$iso:1,
$aso:function(){return[W.R]},
$isb:1,
$asb:function(){return[W.R]}}
W.hu.prototype={$isa:1}
W.hv.prototype={$isa:1}
W.il.prototype={
dV:function(a,b,c,d){return W.ju(this.a,this.b,a,!1,H.b2(this,0))}}
W.fV.prototype={
dj:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.jZ(r,this.c,t,!1)}},
cZ:function(a,b,c,d,e){this.dj()}}
W.fW.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.z.prototype={
gA:function(a){return new W.dW(a,this.gk(a),-1,null,[H.as(a,"z",0)])},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
W.dW.prototype={
q:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbp(J.b3(this.a,t))
this.c=t
return!0}this.sbp(null)
this.c=s
return!1},
gu:function(){return this.d},
sbp:function(a){this.d=a}}
W.b9.prototype={$isc:1,
$asc:function(){return[W.a1]},
$isb:1,
$asb:function(){return[W.a1]}}
W.ba.prototype={$isc:1,
$asc:function(){return[W.U]},
$isb:1,
$asb:function(){return[W.U]}}
W.bb.prototype={$isc:1,
$asc:function(){return[W.Z]},
$isb:1,
$asb:function(){return[W.Z]}}
W.bc.prototype={$isc:1,
$asc:function(){return[W.U]},
$isb:1,
$asb:function(){return[W.U]}}
W.bd.prototype={$isc:1,
$asc:function(){return[W.Z]},
$isb:1,
$asb:function(){return[W.Z]}}
W.be.prototype={$isc:1,
$asc:function(){return[W.a1]},
$isb:1,
$asb:function(){return[W.a1]}}
W.bU.prototype={}
W.cd.prototype={$isc:1,
$asc:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.c_.prototype={$isc:1,
$asc:function(){return[W.w]},
$isb:1,
$asb:function(){return[W.w]}}
W.bX.prototype={$isc:1,
$asc:function(){return[W.w]},
$isb:1,
$asb:function(){return[W.w]}}
W.c7.prototype={$isc:1,
$asc:function(){return[W.R]},
$isb:1,
$asb:function(){return[W.R]}}
W.c8.prototype={$isc:1,
$asc:function(){return[P.y]},
$isb:1,
$asb:function(){return[P.y]}}
W.c9.prototype={$isc:1,
$asc:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.ca.prototype={$isc:1,
$asc:function(){return[W.V]},
$isb:1,
$asb:function(){return[W.V]}}
W.cb.prototype={$isc:1,
$asc:function(){return[W.W]},
$isb:1,
$asb:function(){return[W.W]}}
W.bV.prototype={$isc:1,
$asc:function(){return[W.S]},
$isb:1,
$asb:function(){return[W.S]}}
W.bZ.prototype={$isc:1,
$asc:function(){return[P.H]},
$isb:1,
$asb:function(){return[P.H]}}
W.bW.prototype={$isc:1,
$asc:function(){return[W.x]},
$isb:1,
$asb:function(){return[W.x]}}
W.c0.prototype={$isc:1,
$asc:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.c2.prototype={$isc:1,
$asc:function(){return[W.w]},
$isb:1,
$asb:function(){return[W.w]}}
W.c3.prototype={$isc:1,
$asc:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.c5.prototype={$isc:1,
$asc:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.ce.prototype={$isc:1,
$asc:function(){return[W.S]},
$isb:1,
$asb:function(){return[W.S]}}
W.cf.prototype={$isc:1,
$asc:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.cg.prototype={$isc:1,
$asc:function(){return[P.H]},
$isb:1,
$asb:function(){return[P.H]}}
W.cq.prototype={$isc:1,
$asc:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.cr.prototype={$isc:1,
$asc:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.cp.prototype={$isc:1,
$asc:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.cu.prototype={$isc:1,
$asc:function(){return[W.W]},
$isb:1,
$asb:function(){return[W.W]}}
W.cv.prototype={$isc:1,
$asc:function(){return[P.y]},
$isb:1,
$asb:function(){return[P.y]}}
W.cw.prototype={$isc:1,
$asc:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.cx.prototype={$isc:1,
$asc:function(){return[W.R]},
$isb:1,
$asb:function(){return[W.R]}}
W.ch.prototype={$isc:1,
$asc:function(){return[W.w]},
$isb:1,
$asb:function(){return[W.w]}}
W.ci.prototype={$isc:1,
$asc:function(){return[W.w]},
$isb:1,
$asb:function(){return[W.w]}}
W.ck.prototype={$isc:1,
$asc:function(){return[W.w]},
$isb:1,
$asb:function(){return[W.w]}}
W.cs.prototype={$isc:1,
$asc:function(){return[W.x]},
$isb:1,
$asb:function(){return[W.x]}}
W.ct.prototype={$isc:1,
$asc:function(){return[W.V]},
$isb:1,
$asb:function(){return[W.V]}}
P.hC.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.y,,]}}}
P.ha.prototype={
dY:function(){return Math.random()}}
P.hh.prototype={}
P.H.prototype={$asH:null}
P.dc.prototype={$isa:1}
P.ax.prototype={$isa:1}
P.dA.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dB.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dC.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dD.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dE.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dF.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
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
P.dN.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gH:function(a){return a.z}}
P.dO.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dP.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gH:function(a){return a.z}}
P.dQ.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dR.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dV.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dY.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.a6.prototype={}
P.an.prototype={$isa:1}
P.e4.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ag.prototype={$isq:1}
P.eg.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return this.R(a,b)},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
R:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.ag]},
$isb:1,
$asb:function(){return[P.ag]}}
P.eo.prototype={$isa:1}
P.ep.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ah.prototype={$isq:1}
P.eE.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return this.R(a,b)},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
R:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.ah]},
$isb:1,
$asb:function(){return[P.ah]}}
P.eG.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eL.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eM.prototype={
gk:function(a){return a.length}}
P.eR.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eS.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.f_.prototype={$isa:1}
P.fe.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return this.R(a,b)},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
R:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.y]},
$isb:1,
$asb:function(){return[P.y]}}
P.I.prototype={$isa:1}
P.ff.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fg.prototype={$isa:1}
P.cS.prototype={}
P.fi.prototype={$isa:1}
P.bt.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ai.prototype={$isq:1}
P.ft.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return this.R(a,b)},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
R:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.ai]},
$isb:1,
$asb:function(){return[P.ai]}}
P.fA.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fC.prototype={$isa:1}
P.fD.prototype={$isa:1}
P.by.prototype={$isa:1}
P.hm.prototype={$isa:1}
P.hn.prototype={$isa:1}
P.ho.prototype={$isa:1}
P.c6.prototype={$isc:1,
$asc:function(){return[P.y]},
$isb:1,
$asb:function(){return[P.y]}}
P.bY.prototype={$isc:1,
$asc:function(){return[P.ag]},
$isb:1,
$asb:function(){return[P.ag]}}
P.c1.prototype={$isc:1,
$asc:function(){return[P.ah]},
$isb:1,
$asb:function(){return[P.ah]}}
P.c4.prototype={$isc:1,
$asc:function(){return[P.ai]},
$isb:1,
$asb:function(){return[P.ai]}}
P.cj.prototype={$isc:1,
$asc:function(){return[P.ai]},
$isb:1,
$asb:function(){return[P.ai]}}
P.cl.prototype={$isc:1,
$asc:function(){return[P.y]},
$isb:1,
$asb:function(){return[P.y]}}
P.cm.prototype={$isc:1,
$asc:function(){return[P.ah]},
$isb:1,
$asb:function(){return[P.ah]}}
P.cn.prototype={$isc:1,
$asc:function(){return[P.ag]},
$isb:1,
$asb:function(){return[P.ag]}}
P.dg.prototype={
gk:function(a){return a.length}}
P.eW.prototype={
bx:function(a,b){return a.activeTexture(b)},
bz:function(a,b,c){return a.attachShader(b,c)},
bA:function(a,b,c){return a.bindBuffer(b,c)},
bB:function(a,b,c){return a.bindFramebuffer(b,c)},
bC:function(a,b,c){return a.bindTexture(b,c)},
bD:function(a,b){return a.blendEquation(b)},
bE:function(a,b,c){return a.blendFunc(b,c)},
bF:function(a,b,c,d){return a.bufferData(b,c,d)},
bG:function(a,b){return a.clear(b)},
bH:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bI:function(a,b){return a.compileShader(b)},
bJ:function(a){return a.createBuffer()},
bK:function(a){return a.createProgram()},
bM:function(a,b){return a.createShader(b)},
bN:function(a){return a.createTexture()},
bO:function(a,b){return a.depthMask(b)},
bP:function(a,b){return a.disable(b)},
bQ:function(a,b,c,d){return a.drawArrays(b,c,d)},
bR:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bS:function(a,b){return a.enable(b)},
bT:function(a,b){return a.enableVertexAttribArray(b)},
aq:function(a){return P.hD(a.getContextAttributes())},
aW:function(a){return a.getError()},
aX:function(a,b){return a.getProgramInfoLog(b)},
aY:function(a,b,c){return a.getProgramParameter(b,c)},
aZ:function(a,b){return a.getShaderInfoLog(b)},
b_:function(a,b,c){return a.getShaderParameter(b,c)},
b0:function(a,b,c){return a.getUniformLocation(b,c)},
bV:function(a,b){return a.linkProgram(b)},
bZ:function(a,b,c){return a.pixelStorei(b,c)},
b2:function(a,b,c){return a.shaderSource(b,c)},
b3:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aS:function(a,b,c,d,e,f,g,h,i,j){this.aH(a,b,c,d,e,f,g)
return},
c2:function(a,b,c,d,e,f,g){return this.aS(a,b,c,d,e,f,g,null,null,null)},
aH:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
c3:function(a,b,c,d){return a.texParameterf(b,c,d)},
c4:function(a,b,c,d){return a.texParameteri(b,c,d)},
c7:function(a,b,c){return a.uniform1f(b,c)},
c8:function(a,b,c){return a.uniform1fv(b,c)},
c9:function(a,b,c){return a.uniform1i(b,c)},
ca:function(a,b,c){return a.uniform1iv(b,c)},
cb:function(a,b,c){return a.uniform2fv(b,c)},
cc:function(a,b,c){return a.uniform3fv(b,c)},
cd:function(a,b,c){return a.uniform4fv(b,c)},
ce:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cf:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
ci:function(a,b){return a.useProgram(b)},
ck:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cl:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.eX.prototype={
dn:function(a,b){return a.beginTransformFeedback(b)},
ds:function(a,b){return a.bindVertexArray(b)},
dz:function(a){return a.createVertexArray()},
dF:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dG:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dH:function(a){return a.endTransformFeedback()},
e8:function(a,b,c,d){this.di(a,b,c,d)
return},
di:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
e9:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bx:function(a,b){return a.activeTexture(b)},
bz:function(a,b,c){return a.attachShader(b,c)},
bA:function(a,b,c){return a.bindBuffer(b,c)},
bB:function(a,b,c){return a.bindFramebuffer(b,c)},
bC:function(a,b,c){return a.bindTexture(b,c)},
bD:function(a,b){return a.blendEquation(b)},
bE:function(a,b,c){return a.blendFunc(b,c)},
bF:function(a,b,c,d){return a.bufferData(b,c,d)},
bG:function(a,b){return a.clear(b)},
bH:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bI:function(a,b){return a.compileShader(b)},
bJ:function(a){return a.createBuffer()},
bK:function(a){return a.createProgram()},
bM:function(a,b){return a.createShader(b)},
bN:function(a){return a.createTexture()},
bO:function(a,b){return a.depthMask(b)},
bP:function(a,b){return a.disable(b)},
bQ:function(a,b,c,d){return a.drawArrays(b,c,d)},
bR:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bS:function(a,b){return a.enable(b)},
bT:function(a,b){return a.enableVertexAttribArray(b)},
aq:function(a){return P.hD(a.getContextAttributes())},
aW:function(a){return a.getError()},
aX:function(a,b){return a.getProgramInfoLog(b)},
aY:function(a,b,c){return a.getProgramParameter(b,c)},
aZ:function(a,b){return a.getShaderInfoLog(b)},
b_:function(a,b,c){return a.getShaderParameter(b,c)},
b0:function(a,b,c){return a.getUniformLocation(b,c)},
bV:function(a,b){return a.linkProgram(b)},
bZ:function(a,b,c){return a.pixelStorei(b,c)},
b2:function(a,b,c){return a.shaderSource(b,c)},
b3:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aS:function(a,b,c,d,e,f,g,h,i,j){this.aH(a,b,c,d,e,f,g)
return},
c2:function(a,b,c,d,e,f,g){return this.aS(a,b,c,d,e,f,g,null,null,null)},
aH:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
c3:function(a,b,c,d){return a.texParameterf(b,c,d)},
c4:function(a,b,c,d){return a.texParameteri(b,c,d)},
c7:function(a,b,c){return a.uniform1f(b,c)},
c8:function(a,b,c){return a.uniform1fv(b,c)},
c9:function(a,b,c){return a.uniform1i(b,c)},
ca:function(a,b,c){return a.uniform1iv(b,c)},
cb:function(a,b,c){return a.uniform2fv(b,c)},
cc:function(a,b,c){return a.uniform3fv(b,c)},
cd:function(a,b,c){return a.uniform4fv(b,c)},
ce:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cf:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
ci:function(a,b){return a.useProgram(b)},
ck:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cl:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isa:1}
P.ht.prototype={$isa:1}
P.f7.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return P.hD(this.dc(a,b))},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
dc:function(a,b){return a.item(b)},
$isc:1,
$asc:function(){return[P.ao]},
$isb:1,
$asb:function(){return[P.ao]}}
P.cc.prototype={$isc:1,
$asc:function(){return[P.ao]},
$isb:1,
$asb:function(){return[P.ao]}}
P.co.prototype={$isc:1,
$asc:function(){return[P.ao]},
$isb:1,
$asb:function(){return[P.ao]}}
G.eu.prototype={}
G.cU.prototype={
M:function(a,b){var t=this.d
if(H.ar(!t.C(0,a)))H.aO("uniform "+a+" already set")
t.i(0,a,b)},
ba:function(){return this.d},
j:function(a){var t,s,r,q
t=H.G(["{"+new H.ap(H.hH(this),null).j(0)+"}["+this.a+"]"],[P.y])
for(s=this.d,r=s.gJ(s),r=r.gA(r);r.q();){q=r.gu()
C.a.l(t,H.f(q)+": "+H.f(s.h(0,q)))}return C.a.aa(t,"\n")}}
G.dj.prototype={}
G.dl.prototype={
bU:function(a,b,c){J.ke(this.a,b)
if(c>0)J.ky(this.a,b,c)}}
G.e_.prototype={}
G.dS.prototype={}
G.e1.prototype={
cH:function(a){var t,s,r
H.d(!0)
t=this.d.length
for(s=this.b,r=0;r<a;++r,t+=3)C.a.l(s,new G.dS(t,t+1,t+2))},
a1:function(a){var t,s,r,q,p
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.D)(a),++r){q=a[r]
p=new T.p(new Float32Array(3))
p.B(q)
C.a.l(s,p)}},
b6:function(a,b){var t,s,r,q,p,o,n
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.D)(b),++q){p=b[q]
o=new Float32Array(2)
n=p.a
o[1]=n[1]
o[0]=n[0]
r.l(t,new T.a3(o))}},
cM:function(){var t,s,r,q,p,o,n,m,l,k
t=this.b
H.d(t.length>0||this.c.length>0)
s=this.c
r=new Array(t.length*3+s.length*6)
r.fixed$length=Array
q=H.G(r,[P.n])
for(r=t.length,p=0,o=0;n=t.length,o<n;n===r||(0,H.D)(t),++o){m=t[o]
q[p]=m.a
q[p+1]=m.b
q[p+2]=m.c
p+=3}for(t=s.length,o=0;r=s.length,o<r;r===t||(0,H.D)(s),++o){l=s[o]
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
cN:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=this.d
s=new Array(t.length)
s.fixed$length=Array
r=H.G(s,[T.p])
q=new T.p(new Float32Array(H.r(3)))
p=new T.p(new Float32Array(H.r(3)))
for(s=this.b,o=s.length,n=0;n<s.length;s.length===o||(0,H.D)(s),++n){m=s[n]
l=m.a
k=m.b
j=m.c
G.j6(t[l],t[k],t[j],q,p)
i=new T.p(new Float32Array(3))
i.B(p)
r[l]=i
l=new T.p(new Float32Array(3))
l.B(p)
r[k]=l
l=new T.p(new Float32Array(3))
l.B(p)
r[j]=l}for(s=this.c,o=s.length,n=0;n<s.length;s.length===o||(0,H.D)(s),++n){h=s[n]
l=h.a
k=h.b
j=h.c
G.j6(t[l],t[k],t[j],q,p)
i=new T.p(new Float32Array(3))
i.B(p)
r[l]=i
l=new T.p(new Float32Array(3))
l.B(p)
r[k]=l
l=new T.p(new Float32Array(3))
l.B(p)
r[j]=l
l=new T.p(new Float32Array(3))
l.B(p)
r[h.d]=l}this.e.i(0,"aNormal",r)},
j:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gJ(s),r=r.gA(r);r.q();){q=r.gu()
p=$.$get$P().h(0,q).a
C.a.l(t,H.f(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.aa(t," ")}}
G.cT.prototype={}
G.bv.prototype={}
G.eq.prototype={
cR:function(a,b){this.M("cDepthTest",!0)
this.M("cDepthWrite",!1)
this.M("cBlendEquation",b)
this.M("cStencilFunc",$.$get$jc())}}
G.cD.prototype={
b8:function(a,b,c){var t,s
if(C.f.aw(a,0)===105){if(H.ar(C.b.av(b.length,c)===this.z))H.aO("ChangeAttribute "+this.z)}else H.d(C.b.av(b.length,c)===(this.ch.length/3|0))
this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.d7(t.a,34962,s)
J.iA(t.a,34962,b,35048)},
cO:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
a0:function(a,b,c){var t,s,r,q,p,o
t=J.ix(a,0)===105
if(t&&this.z===0)this.z=C.b.av(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.i1(r.a))
this.b8(a,b,c)
q=$.$get$P().h(0,a)
if(q==null)throw H.e("Unknown canonical "+a)
p=this.x
if(H.ar(p.C(0,a)))H.aO("unexpected attribute "+a)
o=p.h(0,a)
J.d8(r.a,this.e)
r.bU(0,o,t?1:0)
s=s.h(0,a)
p=q.b9()
J.d7(r.a,34962,s)
J.iL(r.a,o,p,5126,!1,0,0)},
a1:function(a){var t,s,r,q,p
t=this.r
s=this.d
t.i(0,"aPosition",J.i1(s.a))
this.ch=a
this.b8("aPosition",a,3)
r=$.$get$P().h(0,"aPosition")
if(r==null)throw H.e("Unknown canonical aPosition")
q=this.x
H.d(q.C(0,"aPosition"))
p=q.h(0,"aPosition")
J.d8(s.a,this.e)
s.bU(0,p,0)
t=t.h(0,"aPosition")
q=r.b9()
J.d7(s.a,34962,t)
J.iL(s.a,p,q,5126,!1,0,0)},
j:function(a){var t,s,r
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,t=t.gJ(t),t=t.gA(t);t.q();){r=t.gu()
C.a.l(s,H.f(r)+":"+this.cy.h(0,r).length)}return"MESH["+this.a+"] "+C.a.aa(s,"  ")},
saB:function(a){this.cx=a}}
G.eH.prototype={
cI:function(a,b){var t=C.b.cn(a,b)
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
t.a_(0,0,1/(p*s))
t.a_(1,1,1/p)
t.a_(2,2,(q+r)/o)
t.a_(3,2,-1)
t.a_(2,3,2*r*q/o)},
ba:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.p(new Float32Array(H.r(3)))
o.as(r,q,p)
p=this.d
p.i(0,"uEyePosition",o)
o=this.cy
o.B(t)
t=o.a
t[12]=0
t[13]=0
t[14]=0
t[15]=1
n=-s[12]
m=-s[13]
l=-s[14]
s=J.u(n)
r=!!s.$isaq
k=r?s.gap(n):1
if(!!s.$isp){j=s.gm(n)
m=s.gn(n)
l=s.gH(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
l=s.gH(n)
n=j}else if(!(typeof n==="number")){n=null
m=null
l=null}s=C.d.D(t[0],n)
r=C.d.D(t[4],m)
q=C.d.D(t[8],l)
i=t[12]
h=C.d.D(t[1],n)
g=C.d.D(t[5],m)
f=C.d.D(t[9],l)
e=t[13]
d=C.d.D(t[2],n)
c=C.d.D(t[6],m)
b=C.d.D(t[10],l)
a=t[14]
a0=C.d.D(t[3],n)
a1=C.d.D(t[7],m)
a2=C.d.D(t[11],l)
a3=t[15]
t[12]=s+r+q+i*k
t[13]=h+g+f+e*k
t[14]=d+c+b+a*k
t[15]=a0+a1+a2+a3*k
a3=this.cx
a3.B(this.db)
a3.bY(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.eV.prototype={
cW:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gk(t)===s.gk(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gJ(s),s=s.gA(s);s.q();){q=s.gu()
if(!t.C(0,q))C.a.l(r,q)}for(t=this.x,s=new P.bz(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.q();){q=s.d
if(!t.Y(0,q))C.a.l(r,q)}return r},
cX:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gJ(b),s=s.gA(s),r=this.d,q=this.y,p=this.z,o=0;s.q();){n=s.gu()
switch(J.ix(n,0)){case 117:if(q.C(0,n)){m=b.h(0,n)
if(p.C(0,n))H.hX("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$P().h(0,n)
if(l==null)H.E("unknown "+n)
H.d(q.C(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.i5(r.a,k,m)
else if(!!J.u(m).$isj0)J.kw(r.a,k,m)
break
case"float":if(l.c===0)J.ku(r.a,k,m)
else if(!!J.u(m).$isdX)J.kv(r.a,k,m)
break
case"mat4":if(l.c===0){j=H.au(m,"$isN").a
J.iK(r.a,k,!1,j)}else if(!!J.u(m).$isdX)J.iK(r.a,k,!1,m)
else if(H.ar(!1))H.aO("bad unform: "+n)
break
case"mat3":if(l.c===0){j=H.au(m,"$isaF").a
J.iJ(r.a,k,!1,j)}else if(!!J.u(m).$isdX)J.iJ(r.a,k,!1,m)
else if(H.ar(!1))H.aO("bad unform: "+n)
break
case"vec4":if(l.c===0){j=H.au(m,"$isaq").a
J.iI(r.a,k,j)}else J.iI(r.a,k,m)
break
case"vec3":if(l.c===0){j=H.au(m,"$isp").a
J.iH(r.a,k,j)}else J.iH(r.a,k,m)
break
case"vec2":if(l.c===0){j=H.au(m,"$isa3").a
J.iG(r.a,k,j)}else J.iG(r.a,k,m)
break
case"sampler2D":case"sampler2DShadow":j=C.b.V(33984,this.ch)
J.iy(r.a,j)
j=H.au(m,"$isbu").b
J.b4(r.a,3553,j)
j=this.ch
J.i5(r.a,k,j)
this.ch=this.ch+1
break
case"samplerCube":H.d(n==="uCubeTexture")
j=C.b.V(33984,this.ch)
J.iy(r.a,j)
j=H.au(m,"$isbu").b
J.b4(r.a,34067,j)
j=this.ch
J.i5(r.a,k,j)
this.ch=this.ch+1
break
default:H.hX("Error: unknow uniform type: "+j)
H.d(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":if(J.C(m,!0))J.d9(r.a,2929)
else J.i2(r.a,2929)
break
case"cStencilFunc":H.au(m,"$iscT")
j=m.a
if(j===1281)J.i2(r.a,2960)
else{J.d9(r.a,2960)
i=m.b
h=m.c
J.kr(r.a,j,i,h)}break
case"cDepthWrite":J.k8(r.a,m)
break
case"cBlendEquation":H.au(m,"$isbv")
j=m.a
if(j===1281)J.i2(r.a,3042)
else{J.d9(r.a,3042)
i=m.b
h=m.c
J.k2(r.a,i,h)
J.k1(r.a,j)}break}++o
break}}s=Date.now()
""+o
new P.az(1000*(s-new P.b7(t,!1).a)).j(0)},
cL:function(a,b,c){var t,s,r,q,p,o,n,m,l
Date.now()
t=this.d
s=this.r
J.kx(t.a,s)
this.ch=0
this.z.O(0)
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.D)(b),++r){q=b[r]
this.cX(q.a,q.ba())}s=this.Q
s.O(0)
for(p=a.cy,p=p.gJ(p),p=p.gA(p);p.q();)s.l(0,p.gu())
o=this.cW()
if(o.length!==0)P.am("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.f(o)))
J.d8(a.d.a,a.e)
n=this.e.f.length>0
s=a.f
p=a.cO()
m=a.Q
l=a.z
t.toString
if(n)J.k_(t.a,s)
if(m!==-1)if(l>1)J.kc(t.a,s,p,m,0,l)
else J.kb(t.a,s,p,m,0)
else if(l>1)J.ka(t.a,s,0,p,l)
else J.k9(t.a,s,0,p)
if(n)J.kf(t.a)},
cS:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j
t=this.d
s=this.e
r=s.b
q=this.f
p=q.b
o=s.f
n=J.k6(t.a)
m=G.jt(t.a,35633,r)
J.iz(t.a,n,m)
l=G.jt(t.a,35632,p)
J.iz(t.a,n,l)
if(o.length>0)J.kt(t.a,n,o,35980)
J.kn(t.a,n)
if(!J.km(t.a,n,35714))H.E(J.kl(t.a,n))
this.r=n
this.sd1(0,P.kV(s.c,null))
for(s=s.d,r=s.length,p=this.y,k=0;k<s.length;s.length===r||(0,H.D)(s),++k){j=s[k]
o=this.r
p.i(0,j,J.iD(t.a,o,j))}for(s=q.d,r=s.length,k=0;k<s.length;s.length===r||(0,H.D)(s),++k){j=s[k]
q=this.r
p.i(0,j,J.iD(t.a,q,j))}},
sd1:function(a,b){this.x=b}}
G.i.prototype={
b9:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.d(!1)
return-1}}}
G.aX.prototype={
b5:function(a){var t,s,r,q,p
H.d(this.b==null)
for(t=a.length,s=this.c,r=this.x,q=0;q<a.length;a.length===t||(0,H.D)(a),++q){p=a[q]
H.d($.$get$P().C(0,p))
H.d(!C.a.Y(s,p))
C.a.l(s,p)
r.i(0,p,this.r);++this.r}C.a.at(s)},
af:function(a){var t,s,r,q
H.d(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.D)(a),++r){q=a[r]
if(H.ar($.$get$P().C(0,q)))H.aO("missing uniform "+q)
H.d(!C.a.Y(s,q))
C.a.l(s,q)}C.a.at(s)},
b7:function(a){var t,s,r
H.d(this.b==null)
for(t=this.e,s=0;s<1;++s){r=a[s]
H.d($.$get$P().C(0,r))
H.d(!C.a.Y(t,r))
C.a.l(t,r)}C.a.at(t)},
cT:function(a,b){H.d(this.b==null)
this.b=this.cY(!0,a,b)},
ag:function(a){return this.cT(a,null)},
cY:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.d(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.D)(t),++o){n=t[o]
m=$.$get$P().h(0,n)
C.a.l(q,"layout (location="+H.f(p.h(0,n))+") in "+m.a+" "+H.f(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.D)(t),++o){k=t[o]
m=$.$get$P().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.f(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.D)(t),++o){k=t[o]
m=$.$get$P().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.f(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.D)(t),++o){k=t[o]
m=$.$get$P().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.f(k)+j+";")}C.a.l(q,"")
C.a.l(q,"void main(void) {")
C.a.dk(q,b)
C.a.l(q,"}")
return C.a.aa(q,"\n")}}
G.f5.prototype={}
G.fl.prototype={}
G.bu.prototype={
j:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.e5.prototype={
cU:function(a){var t,s
t=this.d
s=this.c
J.b4(t.a,s,this.b)
J.iE(t.a,s,0,6408,6408,5121,a)},
cP:function(a,b,c,d,e){var t,s,r,q
t=this.d
s=this.c
J.b4(t.a,s,this.b)
J.kp(t.a,37440,1)
this.cU(this.f)
r=this.e
q=r.e
if(q!==1)J.ks(t.a,s,34046,q)
J.iF(t.a,s,10240,r.r)
J.iF(t.a,s,10241,r.f)
H.d(J.kk(t.a)===0)
J.b4(t.a,s,null)}}
A.cJ.prototype={
j:function(a){return"NODE["+this.a+"]"}}
A.bp.prototype={}
A.eU.prototype={
cK:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.d
s=this.r
r=this.z
q=this.Q
p=t.a
t=t.b
J.k0(p.a,36160,t)
H.d(r>0&&q>0)
J.kz(p.a,this.x,this.y,r,q)
if(s!==0)J.k3(p.a,s)
for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.D)(t),++o){n=t[o]
m=n.e
C.a.l(m,new G.cU(P.L(),"transforms",!1,!0))
l=new T.N(new Float32Array(16))
l.L()
for(r=n.f,q=r.length,p=n.d,k=0;k<r.length;r.length===q||(0,H.D)(r),++k)A.jF(p,r[k],l,a,m)
m.pop()}},
cJ:function(){return this.cK(null)}}
B.fq.prototype={}
A.hI.prototype={
$2:function(a,b){var t=536870911&a+J.ab(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(){return{func:1,args:[P.n,P.q]}}}
T.aF.prototype={
B:function(a){var t,s
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
j:function(a){return"[0] "+this.K(0).j(0)+"\n[1] "+this.K(1).j(0)+"\n[2] "+this.K(2).j(0)+"\n"},
h:function(a,b){return this.a[b]},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aF){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gt:function(a){return A.d4(this.a)},
K:function(a){var t,s
t=new Float32Array(H.r(3))
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.p(t)},
dv:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
if(g===0){this.B(a)
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
T.N.prototype={
a_:function(a,b,c){H.d(a<4)
H.d(b<4)
this.a[b*4+a]=c},
B:function(a){var t,s
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
j:function(a){return"[0] "+this.K(0).j(0)+"\n[1] "+this.K(1).j(0)+"\n[2] "+this.K(2).j(0)+"\n[3] "+this.K(3).j(0)+"\n"},
h:function(a,b){return this.a[b]},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.N){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gt:function(a){return A.d4(this.a)},
K:function(a){var t,s
t=new Float32Array(H.r(4))
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.aq(t)},
L:function(){var t=this.a
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
bY:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.a3.prototype={
j:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+"]"},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.a3){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gt:function(a){return A.d4(this.a)},
h:function(a,b){return this.a[b]},
gk:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.p.prototype={
as:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
B:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
j:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+"]"},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.p){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gt:function(a){return A.d4(this.a)},
h:function(a,b){return this.a[b]},
gk:function(a){return Math.sqrt(this.gaQ())},
gaQ:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
Z:function(a){var t,s,r
t=Math.sqrt(this.gaQ())
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
al:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.p(new Float32Array(H.r(3)))
t.as(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
au:function(a){var t,s
t=a.a
s=this.a
s[0]=s[0]-t[0]
s[1]=s[1]-t[1]
s[2]=s[2]-t[2]},
cp:function(a,b){var t=this.a
t[2]=t[2]*b
t[1]=t[1]*b
t[0]=t[0]*b},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gH:function(a){return this.a[2]}}
T.aq.prototype={
j:function(a){var t=this.a
return H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+","+H.f(t[3])},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aq){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gt:function(a){return A.d4(this.a)},
h:function(a,b){return this.a[b]},
gk:function(a){var t,s,r,q
t=this.a
s=t[0]
r=t[1]
q=t[2]
t=t[3]
return Math.sqrt(s*s+r*r+q*q+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gH:function(a){return this.a[2]},
gap:function(a){return this.a[3]}}
M.hU.prototype={
$1:function(a){var t,s,r
t=this.a
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.am("size change "+H.f(s)+" "+H.f(r))
this.b.cI(s,r)
t=this.c
t.z=s
t.Q=r},
$S:function(){return{func:1,v:true,args:[W.j]}}}
M.hT.prototype={
$1:function(a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
t=this.a
s=t.a
t.a=a0+0
t=this.c
s=H.lz(t.k3+(a0-s))
t.k3=s
r=t.k1
q=t.id
p=t.k2
o=t.fy
B.d3(s/1500,r,q,p,1,o)
s=t.go
B.d3(t.k3/1500+0.1,r,q,p,1,s)
p=t.k4
p.B(s)
p.Z(0)
o=o.a
p=t.d.a
p[12]=o[0]
p[13]=o[1]
p[14]=o[2]
o=p[12]
q=p[13]
r=p[14]
n=new T.p(new Float32Array(H.r(3)))
n.as(0,1,0)
t=t.e
m=t.a
m[0]=p[12]
m[1]=p[13]
m[2]=p[14]
m=new Float32Array(H.r(3))
l=new T.p(m)
l.B(t)
l.au(s)
l.Z(0)
k=n.al(l)
k.Z(0)
j=l.al(k)
j.Z(0)
s=k.aM(t)
i=j.aM(t)
t=l.aM(t)
h=k.a
g=h[0]
f=j.a
e=f[0]
d=m[0]
c=h[1]
b=f[1]
a=m[1]
h=h[2]
f=f[2]
m=m[2]
p[15]=1
p[14]=-t
p[13]=-i
p[12]=-s
p[11]=0
p[10]=m
p[9]=f
p[8]=h
p[7]=0
p[6]=a
p[5]=b
p[4]=c
p[3]=0
p[2]=d
p[1]=e
p[0]=g
p[12]=o
p[13]=q
p[14]=r
r=this.e
M.jX(a0/1000,r)
p=this.b
J.b4(p.a,3553,this.f.b)
J.iE(p.a,3553,0,6408,6408,5121,r)
this.d.cJ()
C.S.gdm(window).c5(this)},
$S:function(){return{func:1,v:true,args:[P.Q]}}}
J.a.prototype.cE=J.a.prototype.j
J.bh.prototype.cF=J.bh.prototype.j;(function installTearOffs(){installTearOff(H.aL.prototype,"gdU",0,0,0,null,["$0"],["an"],0)
installTearOff(H.a8.prototype,"gcq",0,0,0,null,["$1"],["F"],2)
installTearOff(H.aK.prototype,"gdB",0,0,0,null,["$1"],["P"],2)
installTearOff(P,"lt",1,0,0,null,["$1"],["ld"],1)
installTearOff(P,"lu",1,0,0,null,["$1"],["le"],1)
installTearOff(P,"lv",1,0,0,null,["$1"],["lf"],1)
installTearOff(P,"jE",1,0,0,null,["$0"],["lr"],0)
installTearOff(P.al.prototype,"gd3",0,0,0,null,["$2","$1"],["ah","d4"],3)
installTearOff(P,"ly",1,0,0,null,["$2"],["kG"],4)
installTearOff(M,"jW",1,0,0,null,["$0"],["lM"],0)})();(function inheritance(){inherit(P.q,null)
var t=P.q
inherit(H.ib,t)
inherit(J.a,t)
inherit(J.df,t)
inherit(P.ae,t)
inherit(H.cA,t)
inherit(P.cy,t)
inherit(H.bS,t)
inherit(H.aR,t)
inherit(H.hf,t)
inherit(H.aL,t)
inherit(H.fT,t)
inherit(H.aM,t)
inherit(H.he,t)
inherit(H.fN,t)
inherit(H.aW,t)
inherit(H.fn,t)
inherit(H.ad,t)
inherit(H.a8,t)
inherit(H.aK,t)
inherit(H.eT,t)
inherit(H.fv,t)
inherit(P.aS,t)
inherit(H.d0,t)
inherit(H.ap,t)
inherit(H.af,t)
inherit(H.eh,t)
inherit(H.ej,t)
inherit(P.fP,t)
inherit(P.cY,t)
inherit(P.al,t)
inherit(P.cW,t)
inherit(P.fa,t)
inherit(P.fb,t)
inherit(P.aQ,t)
inherit(P.hw,t)
inherit(P.f2,t)
inherit(P.hc,t)
inherit(P.bz,t)
inherit(P.v,t)
inherit(P.hd,t)
inherit(P.bF,t)
inherit(P.F,t)
inherit(P.b7,t)
inherit(P.Q,t)
inherit(P.az,t)
inherit(P.cR,t)
inherit(P.fX,t)
inherit(P.dz,t)
inherit(P.b,t)
inherit(P.ao,t)
inherit(P.aG,t)
inherit(P.bq,t)
inherit(P.y,t)
inherit(P.bs,t)
inherit(W.dn,t)
inherit(W.z,t)
inherit(W.dW,t)
inherit(P.ha,t)
inherit(P.hh,t)
inherit(G.eu,t)
inherit(G.dl,t)
inherit(G.e_,t)
inherit(G.dS,t)
inherit(G.e1,t)
inherit(G.cT,t)
inherit(G.bv,t)
inherit(G.i,t)
inherit(G.aX,t)
inherit(G.fl,t)
inherit(G.bu,t)
inherit(T.aF,t)
inherit(T.N,t)
inherit(T.a3,t)
inherit(T.p,t)
inherit(T.aq,t)
t=J.a
inherit(J.eb,t)
inherit(J.ed,t)
inherit(J.bh,t)
inherit(J.aA,t)
inherit(J.aT,t)
inherit(J.aB,t)
inherit(H.bj,t)
inherit(H.aV,t)
inherit(W.h,t)
inherit(W.U,t)
inherit(W.bI,t)
inherit(W.bK,t)
inherit(W.bL,t)
inherit(W.x,t)
inherit(W.bU,t)
inherit(W.dq,t)
inherit(W.dr,t)
inherit(W.ds,t)
inherit(W.bO,t)
inherit(W.bP,t)
inherit(W.c8,t)
inherit(W.dv,t)
inherit(W.j,t)
inherit(W.ca,t)
inherit(W.W,t)
inherit(W.e2,t)
inherit(W.c2,t)
inherit(W.el,t)
inherit(W.er,t)
inherit(W.X,t)
inherit(W.c5,t)
inherit(W.eD,t)
inherit(W.c_,t)
inherit(W.eF,t)
inherit(W.aY,t)
inherit(W.Y,t)
inherit(W.cd,t)
inherit(W.a7,t)
inherit(W.a_,t)
inherit(W.c3,t)
inherit(W.a0,t)
inherit(W.f9,t)
inherit(W.R,t)
inherit(W.bV,t)
inherit(W.fm,t)
inherit(W.a2,t)
inherit(W.c0,t)
inherit(W.fs,t)
inherit(W.fz,t)
inherit(W.fE,t)
inherit(W.fO,t)
inherit(W.bZ,t)
inherit(W.bW,t)
inherit(W.cb,t)
inherit(W.bX,t)
inherit(W.c9,t)
inherit(W.c7,t)
inherit(W.hu,t)
inherit(W.hv,t)
inherit(P.ag,t)
inherit(P.bY,t)
inherit(P.ah,t)
inherit(P.c1,t)
inherit(P.eL,t)
inherit(P.eM,t)
inherit(P.eR,t)
inherit(P.c6,t)
inherit(P.ai,t)
inherit(P.c4,t)
inherit(P.fD,t)
inherit(P.dg,t)
inherit(P.eW,t)
inherit(P.eX,t)
inherit(P.ht,t)
inherit(P.cc,t)
t=J.bh
inherit(J.eJ,t)
inherit(J.aI,t)
inherit(J.aC,t)
inherit(J.ia,J.aA)
t=J.aT
inherit(J.cz,t)
inherit(J.ec,t)
t=P.ae
inherit(H.c,t)
inherit(H.cB,t)
t=H.c
inherit(H.aU,t)
inherit(H.ei,t)
inherit(H.dy,H.cB)
inherit(H.em,P.cy)
t=H.aU
inherit(H.cC,t)
inherit(P.ek,t)
t=H.aR
inherit(H.hZ,t)
inherit(H.i_,t)
inherit(H.h9,t)
inherit(H.fU,t)
inherit(H.e8,t)
inherit(H.e9,t)
inherit(H.hg,t)
inherit(H.fo,t)
inherit(H.fp,t)
inherit(H.i0,t)
inherit(H.hN,t)
inherit(H.hO,t)
inherit(H.hP,t)
inherit(H.hQ,t)
inherit(H.hR,t)
inherit(H.fh,t)
inherit(H.ee,t)
inherit(H.hJ,t)
inherit(H.hK,t)
inherit(H.hL,t)
inherit(P.fK,t)
inherit(P.fJ,t)
inherit(P.fL,t)
inherit(P.fM,t)
inherit(P.fY,t)
inherit(P.h1,t)
inherit(P.fZ,t)
inherit(P.h_,t)
inherit(P.h0,t)
inherit(P.h4,t)
inherit(P.h5,t)
inherit(P.h3,t)
inherit(P.h2,t)
inherit(P.fc,t)
inherit(P.fd,t)
inherit(P.hz,t)
inherit(P.hk,t)
inherit(P.hj,t)
inherit(P.hl,t)
inherit(P.en,t)
inherit(P.dw,t)
inherit(P.dx,t)
inherit(W.fG,t)
inherit(W.fW,t)
inherit(P.hC,t)
inherit(A.hI,t)
inherit(M.hU,t)
inherit(M.hT,t)
t=H.fN
inherit(H.aZ,t)
inherit(H.bB,t)
t=P.aS
inherit(H.cL,t)
inherit(H.ef,t)
inherit(H.fy,t)
inherit(H.fx,t)
inherit(H.dk,t)
inherit(H.eZ,t)
inherit(P.bH,t)
inherit(P.cM,t)
inherit(P.ac,t)
inherit(P.t,t)
inherit(P.cV,t)
inherit(P.br,t)
inherit(P.a5,t)
inherit(P.dp,t)
t=H.fh
inherit(H.f8,t)
inherit(H.b5,t)
inherit(H.fI,P.bH)
t=H.aV
inherit(H.ev,t)
inherit(H.cF,t)
t=H.cF
inherit(H.bk,t)
inherit(H.bl,t)
inherit(H.bn,H.bk)
inherit(H.cG,H.bn)
inherit(H.bm,H.bl)
inherit(H.cH,H.bm)
t=H.cG
inherit(H.cE,t)
inherit(H.ew,t)
t=H.cH
inherit(H.ex,t)
inherit(H.ey,t)
inherit(H.ez,t)
inherit(H.eA,t)
inherit(H.eB,t)
inherit(H.cI,t)
inherit(H.eC,t)
inherit(P.hs,P.fP)
inherit(P.hi,P.hw)
inherit(P.cZ,H.af)
inherit(P.f1,P.f2)
inherit(P.h8,P.f1)
inherit(P.hb,P.h8)
t=P.Q
inherit(P.K,t)
inherit(P.n,t)
t=P.ac
inherit(P.cO,t)
inherit(P.e6,t)
t=W.h
inherit(W.w,t)
inherit(W.ba,t)
inherit(W.dm,t)
inherit(W.dU,t)
inherit(W.bg,t)
inherit(W.bi,t)
inherit(W.eO,t)
inherit(W.cP,t)
inherit(W.f3,t)
inherit(W.Z,t)
inherit(W.bb,t)
inherit(W.a1,t)
inherit(W.S,t)
inherit(W.b9,t)
inherit(W.fB,t)
inherit(W.fF,t)
inherit(W.bw,t)
inherit(W.fH,t)
inherit(W.aJ,t)
inherit(W.hp,t)
t=W.w
inherit(W.bQ,t)
inherit(W.ay,t)
inherit(W.b8,t)
inherit(W.bN,t)
inherit(W.fR,t)
t=W.bQ
inherit(W.k,t)
inherit(P.I,t)
t=W.k
inherit(W.dd,t)
inherit(W.de,t)
inherit(W.di,t)
inherit(W.bJ,t)
inherit(W.dZ,t)
inherit(W.e7,t)
inherit(W.f0,t)
inherit(W.h7,t)
inherit(W.bc,W.ba)
inherit(W.dh,W.bc)
inherit(W.b6,W.bU)
inherit(W.dt,W.bO)
inherit(W.cv,W.c8)
inherit(W.du,W.cv)
inherit(W.V,W.bI)
inherit(W.ct,W.ca)
inherit(W.dT,W.ct)
inherit(W.ch,W.c2)
inherit(W.bf,W.ch)
inherit(W.bT,W.b8)
inherit(W.e3,W.bg)
inherit(W.es,W.bi)
inherit(W.cr,W.c5)
inherit(W.et,W.cr)
inherit(W.ci,W.c_)
inherit(W.cK,W.ci)
t=W.aY
inherit(W.eI,t)
inherit(W.eY,t)
inherit(W.fu,t)
inherit(W.cq,W.cd)
inherit(W.eK,W.cq)
inherit(W.eN,W.a7)
inherit(W.bd,W.bb)
inherit(W.f4,W.bd)
inherit(W.cp,W.c3)
inherit(W.f6,W.cp)
inherit(W.ce,W.bV)
inherit(W.fj,W.ce)
inherit(W.be,W.b9)
inherit(W.fk,W.be)
inherit(W.cf,W.c0)
inherit(W.fr,W.cf)
inherit(W.cg,W.bZ)
inherit(W.cX,W.cg)
inherit(W.cs,W.bW)
inherit(W.fQ,W.cs)
inherit(W.fS,W.bP)
inherit(W.cu,W.cb)
inherit(W.h6,W.cu)
inherit(W.ck,W.bX)
inherit(W.d_,W.ck)
inherit(W.cw,W.c9)
inherit(W.hq,W.cw)
inherit(W.cx,W.c7)
inherit(W.hr,W.cx)
inherit(W.il,P.fa)
inherit(W.fV,P.fb)
inherit(P.H,P.hh)
t=P.I
inherit(P.an,t)
inherit(P.ax,t)
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
inherit(P.dP,t)
inherit(P.dQ,t)
inherit(P.dR,t)
inherit(P.dV,t)
inherit(P.eo,t)
inherit(P.ep,t)
inherit(P.eG,t)
inherit(P.f_,t)
inherit(P.fg,t)
inherit(P.fC,t)
inherit(P.by,t)
inherit(P.hm,t)
inherit(P.hn,t)
inherit(P.ho,t)
t=P.an
inherit(P.dc,t)
inherit(P.dY,t)
inherit(P.a6,t)
inherit(P.e4,t)
inherit(P.ff,t)
inherit(P.cS,t)
inherit(P.fA,t)
inherit(P.cn,P.bY)
inherit(P.eg,P.cn)
inherit(P.cm,P.c1)
inherit(P.eE,P.cm)
inherit(P.eS,P.a6)
inherit(P.cl,P.c6)
inherit(P.fe,P.cl)
t=P.cS
inherit(P.fi,t)
inherit(P.bt,t)
inherit(P.cj,P.c4)
inherit(P.ft,P.cj)
inherit(P.co,P.cc)
inherit(P.f7,P.co)
t=G.eu
inherit(G.cU,t)
inherit(G.f5,t)
inherit(G.cD,t)
inherit(G.eV,t)
inherit(A.bp,t)
inherit(A.eU,t)
t=G.f5
inherit(G.dj,t)
inherit(A.cJ,t)
t=G.cU
inherit(G.eq,t)
inherit(G.eH,t)
inherit(G.e5,G.bu)
inherit(B.fq,G.dj)
mixin(H.bk,P.v)
mixin(H.bl,P.v)
mixin(H.bm,H.bS)
mixin(H.bn,H.bS)
mixin(W.b9,P.v)
mixin(W.ba,P.v)
mixin(W.bb,P.v)
mixin(W.bc,W.z)
mixin(W.bd,W.z)
mixin(W.be,W.z)
mixin(W.bU,W.dn)
mixin(W.cd,P.v)
mixin(W.c_,P.v)
mixin(W.bX,P.v)
mixin(W.c7,P.v)
mixin(W.c8,P.v)
mixin(W.c9,P.v)
mixin(W.ca,P.v)
mixin(W.cb,P.v)
mixin(W.bV,P.v)
mixin(W.bZ,P.v)
mixin(W.bW,P.v)
mixin(W.c0,P.v)
mixin(W.c2,P.v)
mixin(W.c3,P.v)
mixin(W.c5,P.v)
mixin(W.ce,W.z)
mixin(W.cf,W.z)
mixin(W.cg,W.z)
mixin(W.cq,W.z)
mixin(W.cr,W.z)
mixin(W.cp,W.z)
mixin(W.cu,W.z)
mixin(W.cv,W.z)
mixin(W.cw,W.z)
mixin(W.cx,W.z)
mixin(W.ch,W.z)
mixin(W.ci,W.z)
mixin(W.ck,W.z)
mixin(W.cs,W.z)
mixin(W.ct,W.z)
mixin(P.c6,P.v)
mixin(P.bY,P.v)
mixin(P.c1,P.v)
mixin(P.c4,P.v)
mixin(P.cj,W.z)
mixin(P.cl,W.z)
mixin(P.cm,W.z)
mixin(P.cn,W.z)
mixin(P.cc,P.v)
mixin(P.co,W.z)})();(function constants(){C.i=W.bJ.prototype
C.e=W.bK.prototype
C.h=W.bL.prototype
C.p=W.bT.prototype
C.q=J.a.prototype
C.a=J.aA.prototype
C.b=J.cz.prototype
C.d=J.aT.prototype
C.f=J.aB.prototype
C.y=J.aC.prototype
C.z=H.cE.prototype
C.n=J.eJ.prototype
C.j=J.aI.prototype
C.S=W.bw.prototype
C.o=new P.ha()
C.c=new P.hi()
C.k=new P.az(0)
C.r=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.t=function(hooks) {
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
C.l=function(hooks) { return hooks; }

C.u=function(getTagFallback) {
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
C.v=function() {
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
C.w=function(hooks) {
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
C.x=function(hooks) {
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
C.m=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.A=H.J("lT")
C.B=H.J("lU")
C.C=H.J("dX")
C.D=H.J("lV")
C.E=H.J("lW")
C.F=H.J("j0")
C.G=H.J("lX")
C.H=H.J("j3")
C.I=H.J("aG")
C.J=H.J("y")
C.K=H.J("jp")
C.L=H.J("jq")
C.M=H.J("lY")
C.N=H.J("jr")
C.O=H.J("bF")
C.P=H.J("K")
C.Q=H.J("n")
C.R=H.J("Q")})();(function staticFields(){$.j8="$cachedFunction"
$.j9="$cachedInvocation"
$.iT=null
$.iR=null
$.im=!1
$.ir=null
$.jB=null
$.jR=null
$.hE=null
$.hM=null
$.is=null
$.b_=null
$.bC=null
$.bD=null
$.io=!1
$.B=C.c
$.iY=0
$.jH=0})();(function lazyInitializers(){lazy($,"iX","$get$iX",function(){return H.jJ("_$dart_dartClosure")})
lazy($,"ic","$get$ic",function(){return H.jJ("_$dart_js")})
lazy($,"j1","$get$j1",function(){return H.kR()})
lazy($,"j2","$get$j2",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.iY
$.iY=t+1
t="expando$key$"+t}return new P.dz(null,t,[P.n])})
lazy($,"je","$get$je",function(){return H.aj(H.fw({
toString:function(){return"$receiver$"}}))})
lazy($,"jf","$get$jf",function(){return H.aj(H.fw({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"jg","$get$jg",function(){return H.aj(H.fw(null))})
lazy($,"jh","$get$jh",function(){return H.aj(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"jl","$get$jl",function(){return H.aj(H.fw(void 0))})
lazy($,"jm","$get$jm",function(){return H.aj(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"jj","$get$jj",function(){return H.aj(H.jk(null))})
lazy($,"ji","$get$ji",function(){return H.aj(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"jo","$get$jo",function(){return H.aj(H.jk(void 0))})
lazy($,"jn","$get$jn",function(){return H.aj(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"ik","$get$ik",function(){return P.lc()})
lazy($,"bE","$get$bE",function(){return[]})
lazy($,"jc","$get$jc",function(){return new G.cT(1281,0,4294967295)})
lazy($,"iP","$get$iP",function(){return new G.bv(32774,770,771)})
lazy($,"iO","$get$iO",function(){return new G.bv(32774,770,769)})
lazy($,"P","$get$P",function(){return P.aD(["cBlendEquation",new G.i("","",0),"cDepthWrite",new G.i("","",0),"cDepthTest",new G.i("","",0),"cStencilFunc",new G.i("","",0),"tPosition",new G.i("vec3","",0),"tSpeed",new G.i("vec3","",0),"tForce",new G.i("vec3","",0),"aColors",new G.i("vec3","per vertex color",0),"aColorAlpha",new G.i("vec4","per vertex color",0),"aPosition",new G.i("vec3","vertex coordinates",0),"aTexUV",new G.i("vec2","texture uvs",0),"aNormal",new G.i("vec3","vertex normals",0),"aBinormal",new G.i("vec3","vertex binormals",0),"aCenter",new G.i("vec4","for wireframe",0),"aPointSize",new G.i("float","",0),"aBoneIndex",new G.i("vec4","",0),"aBoneWeight",new G.i("vec4","",0),"aTangent",new G.i("vec3","vertex tangents",0),"aBitangent",new G.i("vec3","vertex btangents",0),"iaRotation",new G.i("vec4","",0),"iaTranslation",new G.i("vec3","",0),"iaScale",new G.i("vec3","",0),"vColor",new G.i("vec3","per vertex color",0),"vTexUV",new G.i("vec2","",0),"vLightWeighting",new G.i("vec3","",0),"vNormal",new G.i("vec3","",0),"vPosition",new G.i("vec3","vertex coordinates",0),"vPositionFromLight",new G.i("vec4","delta from light",0),"vCenter",new G.i("vec4","for wireframe",0),"vDepth",new G.i("float","depth for shadowmaps",0),"uTransformationMatrix",new G.i("mat4","",0),"uModelMatrix",new G.i("mat4","",0),"uNormalMatrix",new G.i("mat3","",0),"uConvolutionMatrix",new G.i("mat3","",0),"uPerspectiveViewMatrix",new G.i("mat4","",0),"uLightPerspectiveViewMatrix",new G.i("mat4","",0),"uShadowMap",new G.i("sampler2DShadow","",0),"uTexture",new G.i("sampler2D","",0),"uTexture2",new G.i("sampler2D","",0),"uTexture3",new G.i("sampler2D","",0),"uTexture4",new G.i("sampler2D","",0),"uSpecularMap",new G.i("sampler2D","",0),"uNormalMap",new G.i("sampler2D","",0),"uBumpMap",new G.i("sampler2D","",0),"uDepthMap",new G.i("sampler2D","",0),"uCubeTexture",new G.i("samplerCube","",0),"uAnimationTable",new G.i("sampler2D","",0),"uTime",new G.i("float","time since program start in sec",0),"uCameraNear",new G.i("float","",0),"uCameraFar",new G.i("float","",0),"uFogNear",new G.i("float","",0),"uFogFar",new G.i("float","",0),"uPointSize",new G.i("float","",0),"uScale",new G.i("float","",0),"uAngle",new G.i("float","",0),"uCanvasSize",new G.i("vec2","",0),"uCenter2",new G.i("vec2","",0),"uCutOff",new G.i("float","",0),"uShininess",new G.i("float","",0),"uShadowBias",new G.i("float","",0),"uOpacity",new G.i("float","",0),"uColor",new G.i("vec3","",0),"uAmbientDiffuse",new G.i("vec3","",0),"uColorEmissive",new G.i("vec3","",0),"uColorSpecular",new G.i("vec3","",0),"uColorDiffuse",new G.i("vec3","",0),"uColorAlpha",new G.i("vec4","",0),"uColorAlpha2",new G.i("vec4","",0),"uEyePosition",new G.i("vec3","",0),"uMaterial",new G.i("mat4","",0),"uRange",new G.i("vec2","",0),"uDirection",new G.i("vec2","",0),"uBoneMatrices",new G.i("mat4","",128),"uLightDescs",new G.i("mat4","",4),"uLightCount",new G.i("float","",0),"uLightTypes",new G.i("float","",4),"uBumpScale",new G.i("float","for bump maps",0),"uNormalScale",new G.i("float","for normal maps",0)])})
lazy($,"js","$get$js",function(){return C.o})
lazy($,"jU","$get$jU",function(){var t=new G.aX("Textured",null,[],[],[],[],0,P.L())
t.b5(["aPosition","aTexUV"])
t.af(["uPerspectiveViewMatrix","uModelMatrix"])
t.b7(["vTexUV"])
t.ag(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vTexUV = aTexUV;"])
return t})
lazy($,"jT","$get$jT",function(){var t=new G.aX("TexturedF",null,[],[],[],[],0,P.L())
t.b7(["vTexUV"])
t.af(["uColor","uTexture"])
t.ag(["oFragColor = texture(uTexture, vTexUV) + vec4( uColor, 0.0 );"])
return t})
lazy($,"jQ","$get$jQ",function(){var t=new G.aX("PointSpritesV",null,[],[],[],[],0,P.L())
t.b5(["aPosition"])
t.af(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"])
t.ag(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"])
return t})
lazy($,"jP","$get$jP",function(){var t=new G.aX("PointSpritesF",null,[],[],[],[],0,P.L())
t.af(["uTexture"])
t.ag(["oFragColor = texture( uTexture,  gl_PointCoord);"])
return t})
lazy($,"hW","$get$hW",function(){return T.ii()})
lazy($,"iv","$get$iv",function(){return T.ii()})
lazy($,"jN","$get$jN",function(){return T.ii()})})()
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
mangledGlobalNames:{n:"int",K:"double",Q:"num",y:"String",bF:"bool",aG:"Null",b:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,v:true,args:[P.q],opt:[P.bq]},{func:1,ret:P.n,args:[P.F,P.F]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationTimeline:J.a,AppBannerPromptResult:J.a,BarProp:J.a,Body:J.a,CacheStorage:J.a,CanvasPattern:J.a,CHROMIUMValuebuffer:J.a,CircularGeofencingRegion:J.a,Client:J.a,Clients:J.a,CompositorProxy:J.a,ConsoleBase:J.a,Coordinates:J.a,Credential:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMStringMap:J.a,EffectModel:J.a,Entry:J.a,FederatedCredential:J.a,FileEntry:J.a,FileError:J.a,Stream:J.a,DOMFileSystem:J.a,FontFace:J.a,FormData:J.a,GamepadButton:J.a,Geofencing:J.a,GeofencingRegion:J.a,Geolocation:J.a,Geoposition:J.a,Headers:J.a,HMDVRDevice:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageData:J.a,InjectedScriptHost:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,KeyframeEffect:J.a,MediaDeviceInfo:J.a,MediaDevices:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaMetadata:J.a,MediaSession:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigatorStorageUtils:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,OffscreenCanvas:J.a,PasswordCredential:J.a,PerformanceCompositeTiming:J.a,PerformanceEntry:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformanceRenderTiming:J.a,PerformanceResourceTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PositionError:J.a,PositionSensorVRDevice:J.a,Presentation:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,Range:J.a,ReadableByteStream:J.a,ReadableByteStreamReader:J.a,ReadableStreamReader:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,Selection:J.a,ServicePort:J.a,SharedArrayBuffer:J.a,SourceInfo:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StorageInfo:J.a,StorageManager:J.a,StorageQuota:J.a,StyleMedia:J.a,StylePropertyMap:J.a,SyncManager:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRDevice:J.a,VREyeParameters:J.a,VRFieldOfView:J.a,VRPositionState:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkerConsole:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothAdvertisingData:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,NFC:J.a,PagePopupController:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WebKitCSSMatrix:J.a,Worklet:J.a,WorkletGlobalScope:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPreserveAspectRatio:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,CHROMIUMSubscribeUniform:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTDisjointTimerQuery:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bj,ArrayBufferView:H.aV,DataView:H.ev,Float32Array:H.cE,Float64Array:H.ew,Int16Array:H.ex,Int32Array:H.ey,Int8Array:H.ez,Uint16Array:H.eA,Uint32Array:H.eB,Uint8ClampedArray:H.cI,CanvasPixelArray:H.cI,Uint8Array:H.eC,HTMLAudioElement:W.k,HTMLBRElement:W.k,HTMLBaseElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLDivElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLImageElement:W.k,HTMLKeygenElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMediaElement:W.k,HTMLMenuElement:W.k,HTMLMenuItemElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTableElement:W.k,HTMLTableRowElement:W.k,HTMLTableSectionElement:W.k,HTMLTemplateElement:W.k,HTMLTextAreaElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLVideoElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,HTMLAnchorElement:W.dd,HTMLAreaElement:W.de,AudioTrack:W.U,AudioTrackList:W.dh,Blob:W.bI,HTMLBodyElement:W.di,HTMLCanvasElement:W.bJ,CanvasGradient:W.bK,CanvasRenderingContext2D:W.bL,CDATASection:W.ay,CharacterData:W.ay,Comment:W.ay,ProcessingInstruction:W.ay,Text:W.ay,CompositorWorker:W.dm,CSSCharsetRule:W.x,CSSFontFaceRule:W.x,CSSGroupingRule:W.x,CSSImportRule:W.x,CSSKeyframeRule:W.x,MozCSSKeyframeRule:W.x,WebKitCSSKeyframeRule:W.x,CSSKeyframesRule:W.x,MozCSSKeyframesRule:W.x,WebKitCSSKeyframesRule:W.x,CSSMediaRule:W.x,CSSNamespaceRule:W.x,CSSPageRule:W.x,CSSRule:W.x,CSSStyleRule:W.x,CSSSupportsRule:W.x,CSSViewportRule:W.x,CSSStyleDeclaration:W.b6,MSStyleCSSProperties:W.b6,CSS2Properties:W.b6,DataTransferItemList:W.dq,DeviceAcceleration:W.dr,XMLDocument:W.b8,Document:W.b8,DocumentFragment:W.bN,ShadowRoot:W.bN,DOMException:W.ds,DOMPoint:W.dt,DOMPointReadOnly:W.bO,DOMRectReadOnly:W.bP,DOMStringList:W.du,DOMTokenList:W.dv,Element:W.bQ,AnimationEvent:W.j,AnimationPlayerEvent:W.j,ApplicationCacheErrorEvent:W.j,AutocompleteErrorEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CompositionEvent:W.j,CustomEvent:W.j,DeviceLightEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,Event:W.j,InputEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FocusEvent:W.j,FontFaceSetLoadEvent:W.j,GamepadEvent:W.j,GeofencingEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,KeyboardEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,MouseEvent:W.j,DragEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PointerEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RelatedEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCIceCandidateEvent:W.j,RTCPeerConnectionIceEvent:W.j,SecurityPolicyViolationEvent:W.j,ServicePortConnectEvent:W.j,ServiceWorkerMessageEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TextEvent:W.j,TouchEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,UIEvent:W.j,WheelEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,SVGZoomEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Animation:W.h,ApplicationCache:W.h,DOMApplicationCache:W.h,OfflineResourceList:W.h,BatteryManager:W.h,CanvasCaptureMediaStreamTrack:W.h,CrossOriginServiceWorkerClient:W.h,EventSource:W.h,FileReader:W.h,FontFaceSet:W.h,MediaKeySession:W.h,MediaQueryList:W.h,MediaRecorder:W.h,MediaSource:W.h,MediaStream:W.h,MediaStreamTrack:W.h,MessagePort:W.h,MIDIAccess:W.h,NetworkInformation:W.h,Notification:W.h,Performance:W.h,PermissionStatus:W.h,PresentationAvailability:W.h,PresentationReceiver:W.h,PresentationRequest:W.h,RTCDTMFSender:W.h,RTCPeerConnection:W.h,webkitRTCPeerConnection:W.h,mozRTCPeerConnection:W.h,ScreenOrientation:W.h,ServicePortCollection:W.h,ServiceWorkerContainer:W.h,ServiceWorkerRegistration:W.h,SpeechRecognition:W.h,SpeechSynthesis:W.h,SpeechSynthesisUtterance:W.h,WorkerPerformance:W.h,BluetoothDevice:W.h,BluetoothRemoteGATTCharacteristic:W.h,USB:W.h,IDBDatabase:W.h,IDBOpenDBRequest:W.h,IDBVersionChangeRequest:W.h,IDBRequest:W.h,IDBTransaction:W.h,AnalyserNode:W.h,RealtimeAnalyserNode:W.h,AudioBufferSourceNode:W.h,AudioContext:W.h,webkitAudioContext:W.h,AudioDestinationNode:W.h,AudioNode:W.h,AudioSourceNode:W.h,BiquadFilterNode:W.h,ChannelMergerNode:W.h,AudioChannelMerger:W.h,ChannelSplitterNode:W.h,AudioChannelSplitter:W.h,ConvolverNode:W.h,DelayNode:W.h,DynamicsCompressorNode:W.h,GainNode:W.h,AudioGainNode:W.h,IIRFilterNode:W.h,MediaElementAudioSourceNode:W.h,MediaStreamAudioDestinationNode:W.h,MediaStreamAudioSourceNode:W.h,OfflineAudioContext:W.h,OscillatorNode:W.h,Oscillator:W.h,PannerNode:W.h,AudioPannerNode:W.h,webkitAudioPannerNode:W.h,ScriptProcessorNode:W.h,JavaScriptAudioNode:W.h,StereoPannerNode:W.h,WaveShaperNode:W.h,EventTarget:W.h,File:W.V,FileList:W.dT,FileWriter:W.dU,HTMLFormElement:W.dZ,Gamepad:W.W,History:W.e2,HTMLCollection:W.bf,HTMLFormControlsCollection:W.bf,HTMLOptionsCollection:W.bf,HTMLDocument:W.bT,XMLHttpRequest:W.e3,XMLHttpRequestUpload:W.bg,XMLHttpRequestEventTarget:W.bg,HTMLInputElement:W.e7,Location:W.el,MediaList:W.er,MIDIOutput:W.es,MIDIInput:W.bi,MIDIPort:W.bi,MimeType:W.X,MimeTypeArray:W.et,Navigator:W.eD,Attr:W.w,Node:W.w,NodeList:W.cK,RadioNodeList:W.cK,Path2D:W.eF,Perspective:W.eI,Plugin:W.Y,PluginArray:W.eK,PositionValue:W.eN,PresentationConnection:W.eO,Rotation:W.eY,RTCDataChannel:W.cP,DataChannel:W.cP,HTMLSelectElement:W.f0,SharedWorker:W.f3,SourceBuffer:W.Z,SourceBufferList:W.f4,SpeechGrammar:W.a_,SpeechGrammarList:W.f6,SpeechRecognitionResult:W.a0,Storage:W.f9,CSSStyleSheet:W.R,StyleSheet:W.R,CalcLength:W.a7,KeywordValue:W.a7,LengthValue:W.a7,NumberValue:W.a7,SimpleLength:W.a7,TransformValue:W.a7,StyleValue:W.a7,TextTrack:W.a1,TextTrackCue:W.S,VTTCue:W.S,TextTrackCueList:W.fj,TextTrackList:W.fk,TimeRanges:W.fm,Touch:W.a2,TouchList:W.fr,TrackDefaultList:W.fs,Matrix:W.aY,Skew:W.aY,TransformComponent:W.aY,Translation:W.fu,URL:W.fz,VideoTrackList:W.fB,VTTRegionList:W.fE,WebSocket:W.fF,Window:W.bw,DOMWindow:W.bw,Worker:W.fH,CompositorWorkerGlobalScope:W.aJ,DedicatedWorkerGlobalScope:W.aJ,ServiceWorkerGlobalScope:W.aJ,SharedWorkerGlobalScope:W.aJ,WorkerGlobalScope:W.aJ,ClientRect:W.fO,ClientRectList:W.cX,DOMRectList:W.cX,CSSRuleList:W.fQ,DocumentType:W.fR,DOMRect:W.fS,GamepadList:W.h6,HTMLFrameSetElement:W.h7,NamedNodeMap:W.d_,MozNamedAttrMap:W.d_,ServiceWorker:W.hp,SpeechRecognitionResultList:W.hq,StyleSheetList:W.hr,WorkerLocation:W.hu,WorkerNavigator:W.hv,SVGAElement:P.dc,SVGAnimateElement:P.ax,SVGAnimateMotionElement:P.ax,SVGAnimateTransformElement:P.ax,SVGAnimationElement:P.ax,SVGSetElement:P.ax,SVGFEBlendElement:P.dA,SVGFEColorMatrixElement:P.dB,SVGFEComponentTransferElement:P.dC,SVGFECompositeElement:P.dD,SVGFEConvolveMatrixElement:P.dE,SVGFEDiffuseLightingElement:P.dF,SVGFEDisplacementMapElement:P.dG,SVGFEFloodElement:P.dH,SVGFEGaussianBlurElement:P.dI,SVGFEImageElement:P.dJ,SVGFEMergeElement:P.dK,SVGFEMorphologyElement:P.dL,SVGFEOffsetElement:P.dM,SVGFEPointLightElement:P.dN,SVGFESpecularLightingElement:P.dO,SVGFESpotLightElement:P.dP,SVGFETileElement:P.dQ,SVGFETurbulenceElement:P.dR,SVGFilterElement:P.dV,SVGForeignObjectElement:P.dY,SVGCircleElement:P.a6,SVGEllipseElement:P.a6,SVGLineElement:P.a6,SVGPathElement:P.a6,SVGPolygonElement:P.a6,SVGPolylineElement:P.a6,SVGGeometryElement:P.a6,SVGClipPathElement:P.an,SVGDefsElement:P.an,SVGGElement:P.an,SVGSwitchElement:P.an,SVGGraphicsElement:P.an,SVGImageElement:P.e4,SVGLength:P.ag,SVGLengthList:P.eg,SVGMarkerElement:P.eo,SVGMaskElement:P.ep,SVGNumber:P.ah,SVGNumberList:P.eE,SVGPatternElement:P.eG,SVGPoint:P.eL,SVGPointList:P.eM,SVGRect:P.eR,SVGRectElement:P.eS,SVGScriptElement:P.f_,SVGStringList:P.fe,SVGDescElement:P.I,SVGDiscardElement:P.I,SVGFEDistantLightElement:P.I,SVGFEFuncAElement:P.I,SVGFEFuncBElement:P.I,SVGFEFuncGElement:P.I,SVGFEFuncRElement:P.I,SVGFEMergeNodeElement:P.I,SVGMetadataElement:P.I,SVGStopElement:P.I,SVGStyleElement:P.I,SVGTitleElement:P.I,SVGComponentTransferFunctionElement:P.I,SVGElement:P.I,SVGSVGElement:P.ff,SVGSymbolElement:P.fg,SVGTextContentElement:P.cS,SVGTextPathElement:P.fi,SVGTSpanElement:P.bt,SVGTextElement:P.bt,SVGTextPositioningElement:P.bt,SVGTransform:P.ai,SVGTransformList:P.ft,SVGUseElement:P.fA,SVGViewElement:P.fC,SVGViewSpec:P.fD,SVGLinearGradientElement:P.by,SVGRadialGradientElement:P.by,SVGGradientElement:P.by,SVGCursorElement:P.hm,SVGFEDropShadowElement:P.hn,SVGMPathElement:P.ho,AudioBuffer:P.dg,WebGLRenderingContext:P.eW,WebGL2RenderingContext:P.eX,WebGL2RenderingContextBase:P.ht,SQLResultSetRowList:P.f7})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasPattern:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,Credential:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMStringMap:true,EffectModel:true,Entry:true,FederatedCredential:true,FileEntry:true,FileError:true,Stream:true,DOMFileSystem:true,FontFace:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageData:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PasswordCredential:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,Range:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,ServicePort:true,SharedArrayBuffer:true,SourceInfo:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPreserveAspectRatio:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,AudioTrack:true,AudioTrackList:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasGradient:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,CSSCharsetRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DataTransferItemList:true,DeviceAcceleration:true,XMLDocument:true,Document:false,DocumentFragment:true,ShadowRoot:true,DOMException:true,DOMPoint:true,DOMPointReadOnly:false,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,Event:true,InputEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,NotificationEvent:true,PageTransitionEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,WheelEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,SVGZoomEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AudioDestinationNode:true,AudioNode:true,AudioSourceNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OfflineAudioContext:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLInputElement:true,Location:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,Navigator:true,Attr:true,Node:false,NodeList:true,RadioNodeList:true,Path2D:true,Perspective:true,Plugin:true,PluginArray:true,PositionValue:true,PresentationConnection:true,Rotation:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,SharedWorker:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,CalcLength:true,KeywordValue:true,LengthValue:true,NumberValue:true,SimpleLength:true,TransformValue:true,StyleValue:false,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefaultList:true,Matrix:true,Skew:true,TransformComponent:false,Translation:true,URL:true,VideoTrackList:true,VTTRegionList:true,WebSocket:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.cF.$nativeSuperclassTag="ArrayBufferView"
H.bk.$nativeSuperclassTag="ArrayBufferView"
H.bn.$nativeSuperclassTag="ArrayBufferView"
H.cG.$nativeSuperclassTag="ArrayBufferView"
H.bl.$nativeSuperclassTag="ArrayBufferView"
H.bm.$nativeSuperclassTag="ArrayBufferView"
H.cH.$nativeSuperclassTag="ArrayBufferView"
W.ba.$nativeSuperclassTag="EventTarget"
W.bc.$nativeSuperclassTag="EventTarget"
W.bb.$nativeSuperclassTag="EventTarget"
W.bd.$nativeSuperclassTag="EventTarget"
W.b9.$nativeSuperclassTag="EventTarget"
W.be.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.jS(M.jW(),b)},[])
else (function(b){H.jS(M.jW(),b)})([])})})()