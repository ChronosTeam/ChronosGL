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
a[c]=function(){a[c]=function(){H.mg(b)}
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
return d?function(e){if(t===null)t=H.iG(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.iG(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.iG(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={iu:function iu(a){this.a=a},
iy:function(a,b,c,d){if(!!a.$isc)return new H.dG(a,b,[c,d])
return new H.cL(a,b,[c,d])},
is:function(){return new P.bx("No element")},
lc:function(){return new P.bx("Too few elements")},
cY:function(a,b,c,d){if(c-b<=32)H.lr(a,b,c,d)
else H.lq(a,b,c,d)},
lr:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.ae(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.af(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
lq:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.d(t>32)
s=C.b.D(t+1,6)
r=a3+s
q=a4-s
p=C.b.D(a3+a4,2)
o=p-s
n=p+s
t=J.ae(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.af(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.af(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.af(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.af(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.af(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.af(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.af(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.af(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.af(a5.$2(j,i),0)){h=i
i=j
j=h}t.i(a2,r,m)
t.i(a2,p,k)
t.i(a2,q,i)
t.i(a2,o,t.h(a2,a3))
t.i(a2,n,t.h(a2,a4))
g=a3+1
f=a4-1
if(J.E(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=t.h(a2,e)
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
H.cY(a2,a3,g-2,a5)
H.cY(a2,f+2,a4,a5)
if(a0)return
if(g<r&&f>q){for(;J.E(a5.$2(t.h(a2,g),l),0);)++g
for(;J.E(a5.$2(t.h(a2,f),j),0);)--f
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
break}}H.cY(a2,g,f,a5)}else H.cY(a2,g,f,a5)},
c:function c(){},
b1:function b1(){},
cK:function cK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cL:function cL(a,b,c){this.a=a
this.b=b
this.$ti=c},
dG:function dG(a,b,c){this.a=a
this.b=b
this.$ti=c},
ep:function ep(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cM:function cM(a,b,c){this.a=a
this.b=b
this.$ti=c},
bZ:function bZ(){},
d9:function(a,b){var t=a.ab(b)
if(!u.globalState.d.cy)u.globalState.f.ah()
return t},
i2:function(){--u.globalState.f.b
H.d(u.globalState.f.b>=0)},
kc:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.u(s).$isb)throw H.e(P.j0("Arguments to main must be a List: "+H.h(s)))
u.globalState=new H.ho(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$jf()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.h1(P.ix(null,H.aV),0)
r=P.m
s.sdV(new H.a8(0,null,null,null,null,null,0,[r,H.aU]))
s.sdY(new H.a8(0,null,null,null,null,null,0,[r,null]))
if(s.x){q=new H.hn()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.l7,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.lD)}if(u.globalState.x)return
s=u.globalState.a++
q=P.aL(null,null,null,r)
p=new H.b3(0,null,!1)
o=new H.aU(s,new H.a8(0,null,null,null,null,null,0,[r,H.b3]),q,u.createNewIsolate(),p,new H.ah(H.i7()),new H.ah(H.i7()),!1,!1,[],P.aL(null,null,null,null),null,null,!1,!0,P.aL(null,null,null,null))
q.l(0,0)
o.bj(0,p)
u.globalState.e=o
u.globalState.z.i(0,s,o)
u.globalState.d=o
if(H.b8(a,{func:1,args:[,]}))o.ab(new H.id(t,a))
else if(H.b8(a,{func:1,args:[,,]}))o.ab(new H.ie(t,a))
else o.ab(a)
u.globalState.f.ah()},
lD:function(a){var t=P.aK(["command","print","msg",a])
return new H.ac(!0,P.bF(null,P.m)).H(t)},
l9:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.la()
return},
la:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.e(new P.r("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.e(new P.r('Cannot extract URI from "'+t+'"'))},
l7:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.aT(!0,[]).R(b.data)
s=J.ae(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.m3(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.aT(!0,[]).R(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.aT(!0,[]).R(s.h(t,"replyTo"))
s=u.globalState.a++
k=P.m
j=P.aL(null,null,null,k)
i=new H.b3(0,null,!1)
h=new H.aU(s,new H.a8(0,null,null,null,null,null,0,[k,H.b3]),j,u.createNewIsolate(),i,new H.ah(H.i7()),new H.ah(H.i7()),!1,!1,[],P.aL(null,null,null,null),null,null,!1,!0,P.aL(null,null,null,null))
j.l(0,0)
h.bj(0,i)
u.globalState.f.a.O(0,new H.aV(h,new H.ec(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.ah()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.kI(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.ah()
break
case"close":u.globalState.ch.ag(0,$.$get$jg().h(0,a))
a.terminate()
u.globalState.f.ah()
break
case"log":H.l6(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
k=P.aK(["command","print","msg",t])
k=new H.ac(!0,P.bF(null,P.m)).H(k)
s.toString
self.postMessage(k)}else P.as(s.h(t,"msg"))
break
case"error":throw H.e(s.h(t,"msg"))}},
l6:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aK(["command","log","msg",a])
r=new H.ac(!0,P.bF(null,P.m)).H(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.at(q)
t=H.aA(q)
s=P.bX(t)
throw H.e(s)}},
l8:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.jm=$.jm+("_"+s)
$.jn=$.jn+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.G(0,["spawned",new H.b5(s,r),q,t.r])
r=new H.ed(a,b,c,d,t)
if(e){t.bB(q,q)
u.globalState.f.a.O(0,new H.aV(t,r,"start isolate"))}else r.$0()},
ls:function(a,b){var t=new H.fw(!0,!1,null)
t.cZ(a,b)
return t},
lE:function(a){return new H.aT(!0,[]).R(new H.ac(!1,P.bF(null,P.m)).H(a))},
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
aU:function aU(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
hj:function hj(a,b){this.a=a
this.b=b},
h1:function h1(a,b){this.a=a
this.b=b},
h2:function h2(a){this.a=a},
aV:function aV(a,b,c){this.a=a
this.b=b
this.c=c},
hn:function hn(){},
ec:function ec(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ed:function ed(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fW:function fW(){},
b5:function b5(a,b){this.b=a
this.a=b},
hp:function hp(a,b){this.a=a
this.b=b},
bG:function bG(a,b,c){this.b=a
this.c=b
this.a=c},
b3:function b3(a,b,c){this.a=a
this.b=b
this.c=c},
fw:function fw(a,b,c){this.a=a
this.b=b
this.c=c},
fx:function fx(a,b){this.a=a
this.b=b},
fy:function fy(a,b){this.a=a
this.b=b},
ah:function ah(a){this.a=a},
ac:function ac(a,b){this.a=a
this.b=b},
aT:function aT(a,b){this.a=a
this.b=b},
lZ:function(a){return u.types[a]},
m5:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.u(a).$iso},
h:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.bb(a)
if(typeof t!=="string")throw H.e(H.R(a))
return t},
lo:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.f1(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aN:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
cV:function(a){var t,s,r,q,p,o,n,m
t=J.u(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.n||!!J.u(a).$isaQ){p=C.k(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.e.aC(q,0)===36)q=C.e.cG(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.db(H.hQ(a),0,null),u.mangledGlobalNames)},
eY:function(a){return"Instance of '"+H.cV(a)+"'"},
P:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lm:function(a){return a.b?H.P(a).getUTCFullYear()+0:H.P(a).getFullYear()+0},
lk:function(a){return a.b?H.P(a).getUTCMonth()+1:H.P(a).getMonth()+1},
lg:function(a){return a.b?H.P(a).getUTCDate()+0:H.P(a).getDate()+0},
lh:function(a){return a.b?H.P(a).getUTCHours()+0:H.P(a).getHours()+0},
lj:function(a){return a.b?H.P(a).getUTCMinutes()+0:H.P(a).getMinutes()+0},
ll:function(a){return a.b?H.P(a).getUTCSeconds()+0:H.P(a).getSeconds()+0},
li:function(a){return a.b?H.P(a).getUTCMilliseconds()+0:H.P(a).getMilliseconds()+0},
jl:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.R(a))
return a[b]},
O:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.au(!0,b,"index",null)
t=J.dh(a)
if(b<0||C.b.cq(b,t))return P.A(b,a,"index",null,t)
return P.eZ(b,"index",null)},
R:function(a){return new P.au(!0,a,null,null)},
e:function(a){var t
if(a==null)a=new P.cU()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.kd})
t.name=""}else t.toString=H.kd
return t},
kd:function(){return J.bb(this.dartException)},
D:function(a){throw H.e(a)},
M:function(a){throw H.e(new P.a6(a))},
am:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.fD(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
fE:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
jy:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
iw:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.ei(a,s,t?null:b.receiver)},
at:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.ig(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aL(r,16)&8191)===10)switch(q){case 438:return t.$1(H.iw(H.h(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.h(s)+" (Error "+q+")"
return t.$1(new H.cT(p,null))}}if(a instanceof TypeError){o=$.$get$js()
n=$.$get$jt()
m=$.$get$ju()
l=$.$get$jv()
k=$.$get$jz()
j=$.$get$jA()
i=$.$get$jx()
$.$get$jw()
h=$.$get$jC()
g=$.$get$jB()
f=o.K(s)
if(f!=null)return t.$1(H.iw(s,f))
else{f=n.K(s)
if(f!=null){f.method="call"
return t.$1(H.iw(s,f))}else{f=m.K(s)
if(f==null){f=l.K(s)
if(f==null){f=k.K(s)
if(f==null){f=j.K(s)
if(f==null){f=i.K(s)
if(f==null){f=l.K(s)
if(f==null){f=h.K(s)
if(f==null){f=g.K(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.cT(s,f==null?null:f.method))}}return t.$1(new H.fH(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.cZ()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.au(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.cZ()
return a},
aA:function(a){var t
if(a==null)return new H.d8(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.d8(a,null)},
ma:function(a){if(a==null||typeof a!='object')return J.ag(a)
else return H.aN(a)},
lW:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=a.length
for(r=0;r<s;){q=r+1
H.d(t)
p=a[r]
r=q+1
H.d(t)
b.i(0,p,a[q])}return b},
m4:function(a,b,c,d,e,f,g){switch(c){case 0:return H.d9(b,new H.hY(a))
case 1:return H.d9(b,new H.hZ(a,d))
case 2:return H.d9(b,new H.i_(a,d,e))
case 3:return H.d9(b,new H.i0(a,d,e,f))
case 4:return H.d9(b,new H.i1(a,d,e,f,g))}throw H.e(P.bX("Unsupported number of arguments for wrapped closure"))},
bK:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.m4)
a.$identity=t
return t},
kX:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.u(c).$isb){t.$reflectionInfo=c
r=H.lo(t).r}else r=c
q=d?Object.create(new H.fh().constructor.prototype):Object.create(new H.bc(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.j8(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.lZ,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.j5:H.io
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
kU:function(a,b,c,d){var t=H.io
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
j8:function(a,b,c){var t,s,r,q
if(c)return H.kW(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.kU(s,b==null?r!=null:b!==r,t,b)
return q},
kV:function(a,b,c,d){var t,s
t=H.io
s=H.j5
switch(b?-1:a){case 0:throw H.e(new H.f7("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
kW:function(a,b){var t,s,r,q
H.kT()
t=$.j4
if(t==null){t=H.j3("receiver")
$.j4=t}s=b.$stubName
r=b.length
q=a[s]
t=H.kV(r,b==null?q!=null:b!==q,s,b)
return t},
iG:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.u(c).$isb){c.fixed$length=Array
t=c}else t=c
return H.kX(a,b,t,!!d,e,f)},
io:function(a){return a.a},
j5:function(a){return a.c},
kT:function(){var t=$.j6
if(t==null){t=H.j3("self")
$.j6=t}return t},
j3:function(a){var t,s,r,q,p
t=new H.bc("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
mv:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.an(a,"String"))},
V:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.an(a,"double"))},
mu:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.an(a,"num"))},
lQ:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.an(a,"bool"))},
m3:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.an(a,"int"))},
mc:function(a,b){throw H.e(H.an(a,b.substring(3)))},
mb:function(a,b){var t=J.ae(b)
throw H.e(H.j7(H.cV(a),t.b7(b,3,t.gj(b))))},
k5:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.u(a)[b])return a
H.mc(a,b)},
aB:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.u(a)[b]
else t=!0
if(t)return a
H.mb(a,b)},
mt:function(a){if(a==null)return a
if(!!J.u(a).$isb)return a
throw H.e(H.an(a,"List"))},
jY:function(a){var t=J.u(a)
return"$S" in t?t.$S():null},
b8:function(a,b){var t
if(a==null)return!1
t=H.jY(a)
return t==null?!1:H.k6(t,b)},
mr:function(a,b){var t,s
if(a==null)return a
if($.iD)return a
$.iD=!0
try{if(H.b8(a,b))return a
t=H.aC(b,null)
s=H.an(a,t)
throw H.e(s)}finally{$.iD=!1}},
an:function(a,b){return new H.fF("type '"+H.cV(a)+"' is not a subtype of type '"+b+"'")},
j7:function(a,b){return new H.dt("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
ad:function(a){if(!0===a)return!1
if(!!J.u(a).$isir)a=a.$0()
if(typeof a==="boolean")return!a
throw H.e(H.an(a,"bool"))},
ar:function(a){throw H.e(new H.fR(a))},
d:function(a){if(H.ad(a))throw H.e(new P.bP(null))},
mg:function(a){throw H.e(new P.dx(a))},
i7:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
k2:function(a){return u.getIsolateTag(a)},
J:function(a){return new H.ax(a,null)},
K:function(a,b){H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
hQ:function(a){if(a==null)return
return a.$ti},
k3:function(a,b){return H.iN(a["$as"+H.h(b)],H.hQ(a))},
az:function(a,b,c){var t,s
t=H.k3(a,b)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
b9:function(a,b){var t,s
t=H.hQ(a)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
aC:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.d(!0)
H.d(!0)
return a[0].name+H.db(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.h(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aC(t,b)
return H.lF(a,b)}return"unknown-reified-type"},
lF:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aC(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aC(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aC(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.lV(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aC(l[j],b)+(" "+H.h(j))}q+="}"}return"("+q+") => "+t},
db:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=new P.by("")
for(r=b,q=!0,p=!0;H.d(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.d(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aC(o,c)}return p?"":"<"+s.k(0)+">"},
hR:function(a){var t,s
if(a instanceof H.aZ){t=H.jY(a)
if(t!=null)return H.aC(t,null)}s=J.u(a).constructor.name
if(a==null)return s
return s+H.db(a.$ti,0,null)},
iN:function(a,b){if(a==null)return b
H.d(typeof a=="function")
H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.iJ(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.iJ(a,null,b)
return b},
hK:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.hQ(a)
s=J.u(a)
if(s[b]==null)return!1
return H.jT(H.iN(s[d],t),c)},
dc:function(a,b,c,d){if(a==null)return a
if(H.hK(a,b,c,d))return a
throw H.e(H.j7(H.cV(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.db(c,0,null),u.mangledGlobalNames)))},
mo:function(a,b,c,d){if(a==null)return a
if(H.hK(a,b,c,d))return a
throw H.e(H.an(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.db(c,0,null),u.mangledGlobalNames)))},
jT:function(a,b){var t,s,r,q,p
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
if(!H.W(r,b[p]))return!1}return!0},
mp:function(a,b,c){return H.iJ(a,b,H.k3(b,c))},
W:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.name==="aM")return!0
if('func' in b)return H.k6(a,b)
if('func' in a)return b.name==="ir"||b.name==="p"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.d(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.d(!0)
q=b[0]}else q=b
if(q!==s){p=H.aC(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.jT(H.iN(o,t),r)},
jS:function(a,b,c){var t,s,r,q,p,o,n
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
if(!(H.W(o,n)||H.W(n,o)))return!1}return!0},
lM:function(a,b){var t,s,r,q,p,o
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
if(!(H.W(p,o)||H.W(o,p)))return!1}return!0},
k6:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.d('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.W(t,s)||H.W(s,t)))return!1}r=a.args
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
if(n===m){if(!H.jS(r,q,!1))return!1
if(!H.jS(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.d(j)
g=r[h]
H.d(i)
f=q[h]
if(!(H.W(g,f)||H.W(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.d(j)
g=p[d]
H.d(i)
f=q[e]
if(!(H.W(g,f)||H.W(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.d(j)
g=p[d]
H.d(i)
f=o[e]
if(!(H.W(g,f)||H.W(f,g)))return!1}}return H.lM(a.named,b.named)},
iJ:function(a,b,c){H.d(typeof a=="function")
H.d(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
mw:function(a){var t=$.iH
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
ms:function(a){return H.aN(a)},
mq:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
m6:function(a){var t,s,r,q,p,o
H.d(!(a instanceof P.p))
t=$.iH.$1(a)
s=$.hO[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.hX[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.jP.$2(a,t)
if(t!=null){s=$.hO[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.hX[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.iK(r)
$.hO[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.hX[t]=r
return r}if(p==="-"){o=H.iK(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.k9(a,r)
if(p==="*")throw H.e(new P.d2(t))
if(u.leafTags[t]===true){o=H.iK(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.k9(a,r)},
k9:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.i4(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
iK:function(a){return J.i4(a,!1,null,!!a.$iso)},
m8:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.i4(t,!1,null,!!t.$iso)
else return J.i4(t,c,null,null)},
m1:function(){if(!0===$.iI)return
$.iI=!0
H.m2()},
m2:function(){var t,s,r,q,p,o,n,m
$.hO=Object.create(null)
$.hX=Object.create(null)
H.m0()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.kb.$1(p)
if(o!=null){n=H.m8(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
m0:function(){var t,s,r,q,p,o,n
t=C.t()
t=H.b7(C.p,H.b7(C.v,H.b7(C.j,H.b7(C.j,H.b7(C.u,H.b7(C.q,H.b7(C.r(C.k),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.iH=new H.hU(p)
$.jP=new H.hV(o)
$.kb=new H.hW(n)},
b7:function(a,b){return a(b)||b},
f1:function f1(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fD:function fD(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cT:function cT(a,b){this.a=a
this.b=b},
ei:function ei(a,b,c){this.a=a
this.b=b
this.c=c},
fH:function fH(a){this.a=a},
ig:function ig(a){this.a=a},
d8:function d8(a,b){this.a=a
this.b=b},
hY:function hY(a){this.a=a},
hZ:function hZ(a,b){this.a=a
this.b=b},
i_:function i_(a,b,c){this.a=a
this.b=b
this.c=c},
i0:function i0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i1:function i1(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
aZ:function aZ(){},
fq:function fq(){},
fh:function fh(){},
bc:function bc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fF:function fF(a){this.a=a},
dt:function dt(a){this.a=a},
f7:function f7(a){this.a=a},
fR:function fR(a){this.a=a},
ax:function ax(a,b){this.a=a
this.b=b},
a8:function a8(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
eh:function eh(a){this.a=a},
ek:function ek(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
el:function el(a,b){this.a=a
this.$ti=b},
em:function em(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hU:function hU(a){this.a=a},
hV:function hV(a){this.a=a},
hW:function hW(a){this.a=a},
t:function(a){return a},
hG:function(a){var t,s,r
if(!!J.u(a).$isn)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
bq:function bq(){},
b2:function b2(){},
ez:function ez(){},
cO:function cO(){},
cP:function cP(){},
cQ:function cQ(){},
cN:function cN(){},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
cR:function cR(){},
eG:function eG(){},
br:function br(){},
bs:function bs(){},
bt:function bt(){},
bu:function bu(){},
lV:function(a){var t=H.K(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
i6:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
u:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cI.prototype
return J.eg.prototype}if(typeof a=="string")return J.aH.prototype
if(a==null)return J.cJ.prototype
if(typeof a=="boolean")return J.ef.prototype
if(a.constructor==Array)return J.aG.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aI.prototype
return a}if(a instanceof P.p)return a
return J.hP(a)},
i4:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hP:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.iI==null){H.m1()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.e(new P.d2("Return interceptor for "+H.h(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$iv()]
if(p!=null)return p
p=H.m6(a)
if(p!=null)return p
if(typeof a=="function")return C.w
s=Object.getPrototypeOf(a)
if(s==null)return C.l
if(s===Object.prototype)return C.l
if(typeof q=="function"){Object.defineProperty(q,$.$get$iv(),{value:C.h,enumerable:false,writable:true,configurable:true})
return C.h}return C.h},
ae:function(a){if(typeof a=="string")return J.aH.prototype
if(a==null)return a
if(a.constructor==Array)return J.aG.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aI.prototype
return a}if(a instanceof P.p)return a
return J.hP(a)},
da:function(a){if(a==null)return a
if(a.constructor==Array)return J.aG.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aI.prototype
return a}if(a instanceof P.p)return a
return J.hP(a)},
k1:function(a){if(typeof a=="number")return J.b0.prototype
if(a==null)return a
if(!(a instanceof P.p))return J.aQ.prototype
return a},
lX:function(a){if(typeof a=="number")return J.b0.prototype
if(typeof a=="string")return J.aH.prototype
if(a==null)return a
if(!(a instanceof P.p))return J.aQ.prototype
return a},
lY:function(a){if(typeof a=="string")return J.aH.prototype
if(a==null)return a
if(!(a instanceof P.p))return J.aQ.prototype
return a},
l:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aI.prototype
return a}if(a instanceof P.p)return a
return J.hP(a)},
E:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.u(a).v(a,b)},
af:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.k1(a).av(a,b)},
ke:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.k1(a).aw(a,b)},
ba:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.m5(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ae(a).h(a,b)},
kf:function(a,b,c,d){return J.l(a).d4(a,b,c,d)},
iO:function(a,b){return J.lY(a).aC(a,b)},
iP:function(a,b){return J.l(a).bA(a,b)},
iQ:function(a,b,c){return J.l(a).bC(a,b,c)},
kg:function(a,b){return J.l(a).ds(a,b)},
dd:function(a,b,c){return J.l(a).bD(a,b,c)},
ih:function(a,b,c){return J.l(a).bE(a,b,c)},
de:function(a,b,c){return J.l(a).bF(a,b,c)},
df:function(a,b){return J.l(a).dv(a,b)},
kh:function(a,b){return J.l(a).bG(a,b)},
ki:function(a,b,c){return J.l(a).bH(a,b,c)},
iR:function(a,b,c,d){return J.l(a).bI(a,b,c,d)},
kj:function(a,b){return J.l(a).bJ(a,b)},
kk:function(a,b){return J.da(a).bK(a,b)},
kl:function(a,b,c,d,e){return J.l(a).bL(a,b,c,d,e)},
km:function(a,b){return J.lX(a).L(a,b)},
ii:function(a){return J.l(a).bN(a)},
kn:function(a){return J.l(a).bO(a)},
ko:function(a){return J.l(a).bP(a)},
kp:function(a){return J.l(a).bR(a)},
kq:function(a){return J.l(a).dB(a)},
kr:function(a,b){return J.l(a).bS(a,b)},
ij:function(a,b){return J.l(a).bT(a,b)},
ks:function(a,b,c,d){return J.l(a).bU(a,b,c,d)},
kt:function(a,b,c,d,e){return J.l(a).dI(a,b,c,d,e)},
ku:function(a,b,c,d,e){return J.l(a).bV(a,b,c,d,e)},
kv:function(a,b,c,d,e,f){return J.l(a).dJ(a,b,c,d,e,f)},
kw:function(a,b){return J.da(a).p(a,b)},
bO:function(a,b){return J.l(a).bW(a,b)},
kx:function(a,b){return J.l(a).bX(a,b)},
ky:function(a){return J.l(a).dK(a)},
kz:function(a,b){return J.da(a).aS(a,b)},
iS:function(a,b,c,d,e,f){return J.l(a).bZ(a,b,c,d,e,f)},
ag:function(a){return J.u(a).gu(a)},
dg:function(a){return J.da(a).gw(a)},
dh:function(a){return J.ae(a).gj(a)},
kA:function(a){return J.u(a).gA(a)},
kB:function(a){return J.l(a).gat(a)},
ik:function(a){return J.l(a).gm(a)},
il:function(a){return J.l(a).gn(a)},
iT:function(a){return J.l(a).gI(a)},
kC:function(a){return J.l(a).au(a)},
kD:function(a){return J.l(a).aZ(a)},
kE:function(a,b){return J.l(a).b_(a,b)},
kF:function(a,b,c){return J.l(a).b0(a,b,c)},
iU:function(a,b,c){return J.l(a).b3(a,b,c)},
kG:function(a,b){return J.l(a).c_(a,b)},
kH:function(a,b){return J.da(a).c1(a,b)},
kI:function(a,b){return J.l(a).G(a,b)},
kJ:function(a,b,c,d){return J.l(a).b6(a,b,c,d)},
kK:function(a,b,c,d){return J.l(a).c5(a,b,c,d)},
di:function(a,b,c,d){return J.l(a).c6(a,b,c,d)},
kL:function(a,b,c,d,e,f){return J.l(a).e6(a,b,c,d,e,f)},
bb:function(a){return J.u(a).k(a)},
kM:function(a,b,c,d){return J.l(a).e9(a,b,c,d)},
kN:function(a,b,c){return J.l(a).c9(a,b,c)},
kO:function(a,b,c){return J.l(a).ca(a,b,c)},
im:function(a,b,c){return J.l(a).cb(a,b,c)},
kP:function(a,b,c){return J.l(a).cc(a,b,c)},
iV:function(a,b,c){return J.l(a).cd(a,b,c)},
iW:function(a,b,c){return J.l(a).ce(a,b,c)},
iX:function(a,b,c){return J.l(a).cf(a,b,c)},
iY:function(a,b,c,d){return J.l(a).cg(a,b,c,d)},
iZ:function(a,b,c,d){return J.l(a).ci(a,b,c,d)},
kQ:function(a,b){return J.l(a).ck(a,b)},
kR:function(a,b,c){return J.l(a).ea(a,b,c)},
j_:function(a,b,c,d,e,f,g){return J.l(a).cm(a,b,c,d,e,f,g)},
kS:function(a,b,c,d,e){return J.l(a).cn(a,b,c,d,e)},
a:function a(){},
ef:function ef(){},
cJ:function cJ(){},
bo:function bo(){},
eS:function eS(){},
aQ:function aQ(){},
aI:function aI(){},
aG:function aG(a){this.$ti=a},
it:function it(a){this.$ti=a},
dm:function dm(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b0:function b0(){},
cI:function cI(){},
eg:function eg(){},
aH:function aH(){}},P={
lw:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.lN()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.bK(new P.fT(t),1)).observe(s,{childList:true})
return new P.fS(t,s,r)}else if(self.setImmediate!=null)return P.lO()
return P.lP()},
lx:function(a){++u.globalState.f.b
self.scheduleImmediate(H.bK(new P.fU(a),0))},
ly:function(a){++u.globalState.f.b
self.setImmediate(H.bK(new P.fV(a),0))},
lz:function(a){P.iz(C.i,a)},
lI:function(a,b){if(H.b8(a,{func:1,args:[P.aM,P.aM]})){b.toString
return a}else{b.toString
return a}},
lA:function(a,b){var t,s,r
H.d(b.a<4)
H.d(!(a instanceof P.aq))
H.d(b.a===0)
b.a=1
try{a.c8(new P.h8(b),new P.h9(b))}catch(r){t=H.at(r)
s=H.aA(r)
P.md(new P.ha(b,t,s))}},
jJ:function(a,b){var t,s,r,q
H.d(b.a<=1)
for(;t=a.a,s=t===2,s;){H.d(s)
a=a.c}s=b.a
if(t>=4){H.d(s<4)
r=b.c
b.c=null
q=b.a9(r)
H.d(b.a<4)
H.d(a.a>=4)
b.a=a.a
b.c=a.c
P.bC(b,q)}else{q=b.c
H.d(s<=1)
b.a=2
b.c=a
a.bt(q)}},
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
return}s=$.B
if(s==null?l!=null:s!==l){H.d(l!=null)
s=$.B
H.d(l==null?s!=null:l!==s)
j=$.B
$.B=l
i=j}else i=null
s=b.c
if(s===8)new P.he(t,r,q,b).$0()
else if(p){if((s&1)!==0)new P.hd(r,b,m).$0()}else if((s&2)!==0)new P.hc(t,r,b).$0()
if(i!=null){H.d(!0)
$.B=i}s=r.b
if(!!J.u(s).$ise6){if(s.a>=4){H.d(o.a<4)
h=o.c
o.c=null
b=o.a9(h)
H.d(o.a<4)
H.d(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.jJ(s,o)
return}}g=b.b
H.d(g.a<4)
h=g.c
g.c=null
b=g.a9(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.d(!o)
g.a=4
g.c=p}else{H.d(!o)
g.a=8
g.c=p}t.a=g
s=g}},
lH:function(){var t,s
for(;t=$.b6,t!=null;){$.bI=null
s=t.b
$.b6=s
if(s==null)$.bH=null
t.a.$0()}},
lL:function(){$.iE=!0
try{P.lH()}finally{$.bI=null
$.iE=!1
if($.b6!=null)$.$get$iB().$1(P.jU())}},
jN:function(a){var t=new P.d3(a,null)
if($.b6==null){$.bH=t
$.b6=t
if(!$.iE)$.$get$iB().$1(P.jU())}else{$.bH.b=t
$.bH=t}},
lK:function(a){var t,s,r
t=$.b6
if(t==null){P.jN(a)
$.bI=$.bH
return}s=new P.d3(a,null)
r=$.bI
if(r==null){s.b=t
$.bI=s
$.b6=s}else{s.b=r.b
r.b=s
$.bI=s
if(s.b==null)$.bH=s}},
md:function(a){var t=$.B
if(C.d===t){P.hJ(null,null,C.d,a)
return}t.toString
P.hJ(null,null,t,t.aO(a))},
lt:function(a,b){var t=$.B
if(t===C.d){t.toString
return P.iz(a,b)}return P.iz(a,t.aO(b))},
iz:function(a,b){var t=C.b.D(a.a,1000)
return H.ls(t<0?0:t,b)},
iA:function(a){var t,s
H.d(a!=null)
t=$.B
H.d(a==null?t!=null:a!==t)
s=$.B
$.B=a
return s},
hH:function(a,b,c,d,e){var t={}
t.a=d
P.lK(new P.hI(t,e))},
jL:function(a,b,c,d){var t,s
if($.B===c)return d.$0()
t=P.iA(c)
try{s=d.$0()
return s}finally{s=t
H.d(s!=null)
$.B=s}},
jM:function(a,b,c,d,e){var t,s
if($.B===c)return d.$1(e)
t=P.iA(c)
try{s=d.$1(e)
return s}finally{s=t
H.d(s!=null)
$.B=s}},
lJ:function(a,b,c,d,e,f){var t,s
if($.B===c)return d.$2(e,f)
t=P.iA(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.d(s!=null)
$.B=s}},
hJ:function(a,b,c,d){var t=C.d!==c
if(t)d=!(!t||!1)?c.aO(d):c.dt(d)
P.jN(d)},
fT:function fT(a){this.a=a},
fS:function fS(a,b,c){this.a=a
this.b=b
this.c=c},
fU:function fU(a){this.a=a},
fV:function fV(a){this.a=a},
fY:function fY(){},
hB:function hB(a,b){this.a=a
this.$ti=b},
d5:function d5(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
aq:function aq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
h7:function h7(a,b){this.a=a
this.b=b},
hb:function hb(a,b){this.a=a
this.b=b},
h8:function h8(a){this.a=a},
h9:function h9(a){this.a=a},
ha:function ha(a,b,c){this.a=a
this.b=b
this.c=c},
he:function he(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hf:function hf(a){this.a=a},
hd:function hd(a,b,c){this.a=a
this.b=b
this.c=c},
hc:function hc(a,b,c){this.a=a
this.b=b
this.c=c},
d3:function d3(a,b){this.a=a
this.b=b},
fj:function fj(){},
fl:function fl(a){this.a=a},
fm:function fm(a,b){this.a=a
this.b=b},
fk:function fk(){},
aY:function aY(a,b){this.a=a
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
ji:function(a,b){return new H.a8(0,null,null,null,null,null,0,[a,b])},
C:function(){return new H.a8(0,null,null,null,null,null,0,[null,null])},
aK:function(a){return H.lW(a,new H.a8(0,null,null,null,null,null,0,[null,null]))},
bF:function(a,b){return new P.d6(0,null,null,null,null,null,0,[a,b])},
lC:function(){var t=Object.create(null)
H.d(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
lb:function(a,b,c){var t,s
if(P.iF(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$bJ()
C.a.l(s,a)
try{P.lG(a,t)}finally{H.d(C.a.gaU(s)===a)
s.pop()}s=P.jq(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
ee:function(a,b,c){var t,s,r
if(P.iF(a))return b+"..."+c
t=new P.by(b)
s=$.$get$bJ()
C.a.l(s,a)
try{r=t
r.a=P.jq(r.gV(),a,", ")}finally{H.d(C.a.gaU(s)===a)
s.pop()}s=t
s.a=s.gV()+c
s=t.gV()
return s.charCodeAt(0)==0?s:s},
iF:function(a){var t,s
for(t=0;s=$.$get$bJ(),t<s.length;++t)if(a===s[t])return!0
return!1},
lG:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gw(a)
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
aL:function(a,b,c,d){return new P.hk(0,null,null,null,null,null,0,[d])},
ld:function(a,b){var t,s
t=P.aL(null,null,null,b)
for(s=J.dg(a);s.q();)t.l(0,s.gt())
return t},
le:function(a){var t,s,r
t={}
if(P.iF(a))return"{...}"
s=new P.by("")
try{C.a.l($.$get$bJ(),a)
r=s
r.a=r.gV()+"{"
t.a=!0
a.aS(0,new P.eq(t,s))
t=s
t.a=t.gV()+"}"}finally{t=$.$get$bJ()
H.d(C.a.gaU(t)===a)
t.pop()}t=s.gV()
return t.charCodeAt(0)==0?t:t},
ix:function(a,b){var t=new P.en(null,0,0,0,[b])
t.cU(a,b)
return t},
d6:function d6(a,b,c,d,e,f,g,h){var _=this
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
hi:function hi(){},
w:function w(){},
eq:function eq(a,b){this.a=a
this.b=b},
en:function en(a,b,c,d,e){var _=this
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
fb:function fb(){},
fa:function fa(){},
jq:function(a,b,c){var t=J.dg(b)
if(!t.q())return a
if(c.length===0){do a+=H.h(t.gt())
while(t.q())}else{a+=H.h(t.gt())
for(;t.q();)a=a+c+H.h(t.gt())}return a},
kY:function(a,b){return J.km(a,b)},
kZ:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.h(t)
if(t>=10)return s+"00"+H.h(t)
return s+"000"+H.h(t)},
l_:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bS:function(a){if(a>=10)return""+a
return"0"+a},
ip:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bb(a)
if(typeof a==="string")return JSON.stringify(a)
return P.l1(a)},
l1:function(a){var t=J.u(a)
if(!!t.$isaZ)return t.k(a)
return H.eY(a)},
j0:function(a){return new P.au(!1,null,null,a)},
j1:function(a,b,c){return new P.au(!0,a,b,c)},
eZ:function(a,b,c){return new P.cW(null,null,!0,a,b,"Value not in range")},
bv:function(a,b,c,d,e){return new P.cW(b,c,!0,a,d,"Invalid value")},
jo:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.bv(a,0,c,"start",f))
if(a>b||b>c)throw H.e(P.bv(b,a,c,"end",f))
return b},
A:function(a,b,c,d,e){var t=e!=null?e:J.dh(b)
return new P.ea(b,t,!0,a,c,"Index out of range")},
bX:function(a){return new P.h6(a)},
jj:function(a,b,c){var t,s
t=H.K([],[c])
for(s=J.dg(a);s.q();)C.a.l(t,s.gt())
return t},
as:function(a){H.i6(H.h(a))},
aX:function aX(){},
G:function G(){},
be:function be(a,b){this.a=a
this.b=b},
L:function L(){},
aF:function aF(a){this.a=a},
dE:function dE(){},
dF:function dF(){},
b_:function b_(){},
bP:function bP(a){this.a=a},
cU:function cU(){},
au:function au(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cW:function cW(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ea:function ea(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
r:function r(a){this.a=a},
d2:function d2(a){this.a=a},
bx:function bx(a){this.a=a},
a6:function a6(a){this.a=a},
cZ:function cZ(){},
dx:function dx(a){this.a=a},
h6:function h6(a){this.a=a},
dH:function dH(a,b,c){this.a=a
this.b=b
this.$ti=c},
m:function m(){},
ai:function ai(){},
cH:function cH(){},
b:function b(){},
aw:function aw(){},
aM:function aM(){},
S:function S(){},
p:function p(){},
bw:function bw(){},
v:function v(){},
by:function by(a){this.a=a},
hM:function(a){var t,s,r,q,p
if(a==null)return
t=P.C()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.M)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
lT:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.kz(a,new P.hL(t))
return t},
hL:function hL(a){this.a=a},
hq:function hq(){},
H:function H(){},
dj:function dj(){},
aD:function aD(){},
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
dY:function dY(){},
dZ:function dZ(){},
e1:function e1(){},
e4:function e4(){},
a7:function a7(){},
av:function av(){},
e9:function e9(){},
aj:function aj(){},
ej:function ej(){},
er:function er(){},
es:function es(){},
ak:function ak(){},
eI:function eI(){},
eP:function eP(){},
eU:function eU(){},
eV:function eV(){},
f_:function f_(){},
f0:function f0(){},
f8:function f8(){},
fn:function fn(){},
I:function I(){},
fo:function fo(){},
fp:function fp(){},
d_:function d_(){},
fr:function fr(){},
bz:function bz(){},
al:function al(){},
fB:function fB(){},
fJ:function fJ(){},
fL:function fL(){},
fM:function fM(){},
bD:function bD(){},
hv:function hv(){},
hw:function hw(){},
hx:function hx(){},
cf:function cf(){},
c7:function c7(){},
c4:function c4(){},
cd:function cd(){},
cs:function cs(){},
cu:function cu(){},
cv:function cv(){},
cw:function cw(){},
dn:function dn(){},
f4:function f4(){},
f5:function f5(){},
hC:function hC(){},
fg:function fg(){},
cl:function cl(){},
cx:function cx(){}},W={
jW:function(){return document},
l0:function(a){return"wheel"},
aW:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jK:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ap:function(a,b,c,d,e){var t=W.jO(new W.h5(c))
t=new W.h4(0,a,b,t,!1,[e])
t.d2(a,b,c,!1,e)
return t},
jO:function(a){var t=$.B
if(t===C.d)return a
return t.du(a)},
j:function j(){},
dk:function dk(){},
dl:function dl(){},
X:function X(){},
dp:function dp(){},
bQ:function bQ(){},
dq:function dq(){},
bR:function bR(){},
ds:function ds(){},
aE:function aE(){},
dv:function dv(){},
y:function y(){},
bd:function bd(){},
dw:function dw(){},
dy:function dy(){},
dz:function dz(){},
bf:function bf(){},
bT:function bT(){},
dA:function dA(){},
dB:function dB(){},
bU:function bU(){},
bV:function bV(){},
dC:function dC(){},
dD:function dD(){},
bW:function bW(){},
k:function k(){},
f:function f(){},
Y:function Y(){},
e_:function e_(){},
e0:function e0(){},
e5:function e5(){},
Z:function Z(){},
e7:function e7(){},
bm:function bm(){},
c1:function c1(){},
e8:function e8(){},
bn:function bn(){},
eb:function eb(){},
aJ:function aJ(){},
eo:function eo(){},
eu:function eu(){},
ew:function ew(){},
bp:function bp(){},
a_:function a_(){},
ex:function ex(){},
N:function N(){},
eH:function eH(){},
x:function x(){},
cS:function cS(){},
eO:function eO(){},
eR:function eR(){},
a0:function a0(){},
eT:function eT(){},
eW:function eW(){},
eX:function eX(){},
f6:function f6(){},
cX:function cX(){},
f9:function f9(){},
fc:function fc(){},
a1:function a1(){},
fd:function fd(){},
a2:function a2(){},
ff:function ff(){},
a3:function a3(){},
fi:function fi(){},
T:function T(){},
ab:function ab(){},
a4:function a4(){},
U:function U(){},
fs:function fs(){},
ft:function ft(){},
fv:function fv(){},
a5:function a5(){},
aO:function aO(){},
fz:function fz(){},
fA:function fA(){},
b4:function b4(){},
fC:function fC(){},
ay:function ay(){},
fI:function fI(){},
fK:function fK(){},
fN:function fN(){},
fO:function fO(){},
aR:function aR(){},
bB:function bB(){},
fP:function fP(a){this.a=a},
fQ:function fQ(){},
aS:function aS(){},
fX:function fX(){},
d4:function d4(){},
fZ:function fZ(){},
h_:function h_(){},
h0:function h0(){},
hg:function hg(){},
hh:function hh(){},
d7:function d7(){},
hy:function hy(){},
hz:function hz(){},
hA:function hA(){},
hD:function hD(){},
hE:function hE(){},
h3:function h3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iC:function iC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
h4:function h4(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
h5:function h5(a){this.a=a},
z:function z(){},
e2:function e2(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bg:function bg(){},
bh:function bh(){},
bi:function bi(){},
bj:function bj(){},
bk:function bk(){},
bl:function bl(){},
c2:function c2(){},
cm:function cm(){},
c8:function c8(){},
c5:function c5(){},
cg:function cg(){},
ch:function ch(){},
ci:function ci(){},
cj:function cj(){},
ck:function ck(){},
c3:function c3(){},
c6:function c6(){},
c9:function c9(){},
ca:function ca(){},
cb:function cb(){},
cc:function cc(){},
ce:function ce(){},
cn:function cn(){},
co:function co(){},
cp:function cp(){},
cz:function cz(){},
cA:function cA(){},
cy:function cy(){},
cD:function cD(){},
cE:function cE(){},
cF:function cF(){},
cG:function cG(){},
cq:function cq(){},
cr:function cr(){},
ct:function ct(){},
cB:function cB(){},
cC:function cC(){}},B={
me:function(a){var t,s
t=document
s=W.aJ
W.ap(t,"keydown",new B.i8(),!1,s)
W.ap(t,"keyup",new B.i9(),!1,s)
if(!$.mf)W.ap(t,"mousemove",new B.ia(),!1,W.N)
s=W.N
W.ap(t,"mousedown",new B.ib(),!1,s)
W.ap(t,"mouseup",new B.ic(),!1,s)},
lf:function(a,b,c,d){var t,s,r,q
t=new Float32Array(H.t(3))
s=$.$get$hN()
r=$.$get$bL()
q=new T.a9(new Float32Array(H.t(16)))
q.a_()
q=new B.eJ(a,b,c,0,new T.q(t),-0.02,s,r,q,new T.q(new Float32Array(H.t(3))),new T.q(new Float32Array(H.t(3))),new T.q(new Float32Array(H.t(3))),new T.q(new Float32Array(H.t(3))),"camera:orbit",!1,!0)
q.cV(a,b,c,d)
return q},
i8:function i8(){},
i9:function i9(){},
ia:function ia(){},
ib:function ib(){},
ic:function ic(){},
eJ:function eJ(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
eK:function eK(a){this.a=a},
eL:function eL(a){this.a=a},
eM:function eM(){},
eN:function eN(a){this.a=a},
lp:function(b4,b5,b6,b7,b8,b9,c0,c1,c2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
t=[]
s=new Float32Array(H.t(3))
r=new T.q(s)
q=new T.q(new Float32Array(H.t(3)))
new Float32Array(H.t(3))
p=H.K(new Array(b9),[[P.b,P.m]])
for(o=[P.m],n=0;n<b9;++n){p[n]=H.K(new Array(c0),o)
m=n/b9*2*b6*3.141592653589793
B.k4(m,b7,b6,b8,b5,$.$get$i5())
B.k4(m+0.02,b7,b6,b8,b5,$.$get$iM())
l=$.$get$iM().a
k=l[0]
j=$.$get$i5().a
s[0]=k-j[0]
s[1]=l[1]-j[1]
s[2]=l[2]-j[2]
k=q.a
k[0]=l[0]+j[0]
k[1]=l[1]+j[1]
k[2]=l[2]+j[2]
i=r.ap(q)
i.af(0)
q=i.ap(r)
q.af(0)
for(l=q.a,k=i.a,h=0;h<c0;++h){g=h/c0*2*3.141592653589793
f=c1*Math.cos(g)
e=c1*Math.sin(g)
j=$.$get$i5().a
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
C.a.l(t,new T.q(a4))
p[n][h]=t.length-1}}a5=new G.c0(!1,[],[],[],P.C())
a5.aA("aTexUV")
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
a5.cL(1)
a5.cM([C.a.h(t,b3),C.a.h(t,b2),C.a.h(t,b1),C.a.h(t,b0)])
a5.b8("aTexUV",[new T.F(o),new T.F(l),new T.F(k),new T.F(j)])}a5.cS()
return a5},
k4:function(a,b,c,d,e,f){var t,s,r,q,p
t=Math.cos(a)
s=Math.sin(a)
r=b/c*a
q=d*(2+Math.cos(r))
p=f.a
p[0]=q*0.5*t
p[1]=q*s*0.5
p[2]=e*d*Math.sin(r)*0.5
return f}},G={
lv:function(a){var t,s,r
t=a.split("\n")
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.h(t[s])}return C.a.ae(t,"\n")},
jI:function(a,b,c){var t,s,r,q
t=J.l(a)
s=t.bQ(a,b)
t.b5(a,s,c)
t.bM(a,s)
r=t.b2(a,s,35713)
if(r!=null&&!r){q=t.b1(a,s)
P.as("E:Compilation failed:")
P.as("E:"+G.lv(c))
P.as("E:Failure:")
P.as(C.e.Y("E:",q))
throw H.e(q)}return s},
iq:function(a,b,c){var t,s,r
t=$.$get$jr()
s=G.jD(a,"frame::color",b,c,32856,t)
t=G.jD(a,"frame::depth",b,c,33190,t)
r=new G.c_(a,null,s,t,null)
r.cQ(a,s,t,null,!1)
return r},
jk:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
d.C(b)
d.ay(a)
e.C(c)
e.ay(a)
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
t=Math.sqrt(e.gas())
if(t===0)return!1
e.cs(0,-1/t)
return!0},
jc:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.ik(a[s])
b[t+1]=J.il(a[s])
b[t+2]=J.iT(a[s])}return b},
l3:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.ik(a[s])
b[t+1]=J.il(a[s])}return b},
l4:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.ik(a[s])
b[t+1]=J.il(a[s])
b[t+2]=J.iT(a[s])
b[t+3]=J.kB(a[s])}return b},
l2:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.ba(a[s],0)
b[t+1]=J.ba(a[s],1)
b[t+2]=J.ba(a[s],2)
b[t+3]=J.ba(a[s],3)}return b},
lB:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
for(t=a.e,s=t.gJ(t),s=s.gw(s),r=b.x,q=[[P.b,P.m]],p=[P.L],o=[T.ao],n=[T.q],m=[T.F];s.q();){l=s.gt()
if(!r.E(0,l)){k="Dropping unnecessary attribute: "+H.h(l)
if($.k_>0)H.i6("I: "+k)
continue}j=t.h(0,l)
switch($.$get$Q().h(0,l).a){case"vec2":b.a2(l,G.l3(H.dc(j,"$isb",m,"$asb"),null),2)
break
case"vec3":b.a2(l,G.jc(H.dc(j,"$isb",n,"$asb"),null),3)
break
case"vec4":b.a2(l,G.l4(H.dc(j,"$isb",o,"$asb"),null),4)
break
case"float":b.a2(l,new Float32Array(H.hG(H.dc(j,"$isb",p,"$asb"))),1)
break
case"uvec4":b.a2(l,G.l2(H.dc(j,"$isb",q,"$asb"),null),4)
break
default:if(H.ad(!1))H.ar("unknown type for "+H.h(l)+" ["+J.kA(j[0]).k(0)+"] ["+new H.ax(H.hR(j),null).k(0)+"] "+H.h(j))}}},
jd:function(a,b,c){var t,s,r,q,p,o,n,m
t=b.d
s=b.e.x
r=P.C()
q=J.kq(t.a)
p=new G.ev(t,q,4,r,s,null,0,-1,null,null,P.C(),"meshdata:"+a,!1,!0)
o=G.jc(c.d,null)
r.i(0,"aPosition",J.ii(t.a))
p.ch=o
p.b9("aPosition",o,3)
n=$.$get$Q().h(0,"aPosition")
if(n==null)H.D("Unknown canonical aPosition")
H.d(s.E(0,"aPosition"))
m=s.h(0,"aPosition")
J.df(t.a,q)
t.bY(0,m,0)
s=r.h(0,"aPosition")
r=n.ba()
J.dd(t.a,34962,s)
J.j_(t.a,m,r,5126,!1,0,0)
s=c.cR()
p.y=J.ii(t.a)
H.d(p.ch!=null)
r=p.ch.length
if(r<768){p.saH(new Uint8Array(H.hG(s)))
p.Q=5121}else if(r<196608){p.saH(new Uint16Array(H.hG(s)))
p.Q=5123}else{p.saH(new Uint32Array(H.hG(s)))
p.Q=5125}J.df(t.a,q)
s=p.y
r=p.cx
q=J.u(r)
H.d(!!q.$isjE||!!q.$isjF||!!q.$isjG)
J.dd(t.a,34963,s)
J.iR(t.a,34963,r,35048)
G.lB(c,p)
return p},
f3:function(a,b,c,d){var t=new G.f2(b,c,d,null,null,P.C(),P.C(),P.aL(null,null,null,P.v),null,a,!1,!0)
t.cW(a,b,c,d)
return t},
jD:function(a,b,c,d,e,f){var t=new G.fG(c,d,e,b,J.kp(a.a),3553,a,f)
t.d_(a,b,c,d,e,f)
return t},
ey:function ey(){},
aP:function aP(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dr:function dr(){},
du:function du(a,b){this.a=a
this.b=b},
c_:function c_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bY:function bY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c0:function c0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
d1:function d1(a,b,c){this.a=a
this.b=b
this.c=c},
d0:function d0(a,b,c){this.a=a
this.b=b
this.c=c},
et:function et(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
ev:function ev(a,b,c,d,e,f,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
eQ:function eQ(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
f2:function f2(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
aa:function aa(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fe:function fe(){},
fu:function fu(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bA:function bA(){},
fG:function fG(a,b,c,d,e,f,g,h){var _=this
_.f=a
_.r=b
_.x=c
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h}},A={
hS:function(a){var t,s
t=C.x.dM(a,0,new A.hT())
s=536870911&t+(C.b.co(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
hT:function hT(){}},T={
lu:function(a,b,c){var t=new Float32Array(3)
t[0]=a
t[1]=b
t[2]=c
return new T.q(t)},
jH:function(){return new T.q(new Float32Array(H.t(3)))},
a9:function a9(a){this.a=a},
F:function F(a){this.a=a},
q:function q(a){this.a=a},
ao:function ao(a){this.a=a}},Q={
m7:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
t={}
s=C.f.aW(document,"#webgl-canvas")
r=new G.du(null,s)
q=(s&&C.m).cr(s,"webgl2",P.aK(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
r.a=q
if(q==null)H.D(P.bX('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
p="ChronosGL Config: "+J.bb(J.kC(q))
if($.k_>0)P.as("I: "+p)
J.kl(q,0,0,0,1)
J.bO(q,2929)
J.bO(q,2884)
o=B.lf(165,0,0,s)
q=new T.a9(new Float32Array(H.t(16)))
q.a_()
p=new T.a9(new Float32Array(H.t(16)))
p.a_()
n=new G.eQ(o,50,1,0.1,1000,q,p,new T.a9(new Float32Array(H.t(16))),P.C(),"perspective",!1,!0)
n.be()
m=s.clientWidth
l=s.clientHeight
s.width=m
s.height=l
n.cO(m,l)
k=G.iq(r,m,l)
p=C.b.D(m,2)
q=C.b.D(l,2)
j=G.iq(r,p,q)
i=G.iq(r,p,q)
q=$.$get$ka()
p=new G.aa("BlackPerlinNoiseColor F",null,[],[],[],[],0,P.C())
p.N(["vNormal"])
p.a3(["uTime","uTransformationMatrix"])
H.d(p.b==null)
p.b=p.a5(!1,["#define BLACK 1","vec3 mod289(vec3 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x)\n{\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec3 fade(vec3 t) {\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\n\n// Classic Perlin noise, periodic variant\nfloat pnoise(vec3 P, vec3 rep)\n{\n  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \n  return 2.2 * n_xyz;\n}\n","#define VARIANT 1\n\nvoid main() {\n#if VARIANT == 1\n  float mytime = uTime/2.0;\n#ifdef BLACK\n  mytime = uTime/10.0;\n#endif\n  float period = 10.0;\n  float factor = 1.0; // sin( uTime)/4.0+2.0;\n  vec3 translation = uTransformationMatrix[3].xyz;\n  float r = pnoise( .75 * ( vNormal *factor + mytime ), vec3( period ) );\n  float g = pnoise( 0.8 * ( vNormal *factor + mytime ), vec3( period ) );\n  float b = pnoise( 0.9 * ( vNormal *factor + mytime ), vec3( period ) );\n  float n = pnoise( 1.5 * ( vNormal *factor + mytime ), vec3( period ) );\n#else\n  float mytime = 0.0 ; //uTime/50.0;\n  float period = 5.0;\n  float factor = 1.0; // sin( uTime)/4.0+2.0;\n  vec3 translation = uTransformationMatrix[3].xyz;\n  float r = pnoise( .75 * ( translation*0.175 + vNormal *factor + mytime ), vec3( period ) );\n  float g = pnoise( 0.8 * ( translation*0.175 + vNormal *factor + mytime ), vec3( period ) );\n  float b = pnoise( 0.9 * ( translation*0.175 + vNormal *factor + mytime ), vec3( period ) );\n  float n = pnoise( 1.5 * ( translation*0.175 + vNormal *factor + mytime ), vec3( period ) );\n#endif\n\n  n = pow( .001, n );\n//float n = 10.0 * pnoise( 5.0 * ( vNormal + uTime ), vec3( 10.0 ) ) * pnoise( .5 * ( vNormal + uTime ), vec3( 10.0 ) );\n//n += .5 * pnoise( 4.0 * vNormal, vec3( 10.0 ) );\n#ifdef BLACK\n  vec3 color = vec3( 1.0-(r + n), 1.0-(g + n), 1.0-(b + n) );\n#else\n  vec3 color = vec3( (r + n), (g + n), (b + n) );\n#endif\n  oFragColor = vec4( color, 1.0 );\n}\n"],null)
h=G.f3("perlin",r,q,p)
g=G.f3("highpass",r,$.$get$jX(),$.$get$k7())
f=V.m9(6,6)
p=new G.aa("uv-passthru",null,[],[],[],[],0,P.C())
p.ak(["aPosition","aTexUV"])
p.N(["vTexUV"])
H.d(p.b==null)
p.b=p.a5(!0,["gl_Position = vec4(aPosition, 1.0);","vTexUV = aTexUV;"],null)
q=new G.aa("BloomPassF",null,[],[],[],[],0,P.C())
q.N(["vTexUV"])
q.a3(["uDirection","uTexture"])
H.d(q.b==null)
q.b=q.a5(!1,[f,"void main() {\n    vec2 invSize = 1.0 / vec2(textureSize(uTexture, 0));\n    vec3 sum = texture(uTexture, vTexUV).rgb * kernel[0];\n    for (int i = 1; i < kernel.length(); i++) {\n        vec2 offset = uDirection * invSize * float(i);\n        sum += texture(uTexture, vTexUV + offset).rgb * kernel[i];\n        sum += texture(uTexture, vTexUV - offset).rgb * kernel[i];\n    }\n    oFragColor = vec4(sum, 1.0);\n}\n"],null)
e=[p,q]
d=G.f3("bloom",r,e[0],e[1])
c=G.f3("bloom",r,$.$get$jR(),$.$get$jQ())
H.d(c.bc(g))
H.d(c.bc(d))
q=new T.q(new Float32Array(H.t(3)))
q.M(-1,-1,0)
p=new T.q(new Float32Array(H.t(3)))
p.M(1,-1,0)
b=new T.q(new Float32Array(H.t(3)))
b.M(1,1,0)
a=new T.q(new Float32Array(H.t(3)))
a.M(-1,1,0)
a0=new Float32Array(H.t(2))
a0[0]=0
a0[1]=0
a1=new Float32Array(H.t(2))
a1[0]=1
a1[1]=0
a2=new Float32Array(H.t(2))
a2[0]=1
a2[1]=1
a3=new Float32Array(H.t(2))
a3[0]=0
a3[1]=1
a4=new T.q(new Float32Array(H.t(3)))
a4.M(0,0,1)
a5=new G.c0(!1,[],[],[],P.C())
a5.aA("aTexUV")
a5.cN([q,p,b,a])
a5.b8("aTexUV",[new T.F(a0),new T.F(a1),new T.F(a2),new T.F(a3)])
a5.aA("aNormal")
a5.cK("aNormal",[a4,a4,a4,a4])
a6=G.jd("quad",c,a5)
a7=new G.et(P.C(),"mat",!1,!0)
a7.B("cDepthTest",!0)
a7.B("cDepthWrite",!0)
a7.B("cBlendEquation",$.$get$j2())
a7.B("cStencilFunc",$.$get$jp())
a3=new T.a9(new Float32Array(H.t(16)))
a3.a_()
a7.B("uTransformationMatrix",a3)
a3=new T.a9(new Float32Array(H.t(16)))
a3.a_()
a7.B("uModelMatrix",a3)
a8=G.jd("torusknot",h,B.lp(!0,1,2,3,20,128,16,4,!0))
a9=new G.aP(P.C(),"uniformsHighPass",!1,!0)
a3=new Float32Array(H.t(2))
a3[0]=0.65
a3[1]=0.66
a9.B("uRange",new T.F(a3))
a9.B("uColorAlpha",new T.ao(new Float32Array(H.t(4))))
a3=k.c
a9.B("uTexture",a3)
b0=new G.aP(P.C(),"Bloom Horizontal",!1,!0)
a2=new Float32Array(H.t(2))
a2[0]=1.5
a2[1]=0
b0.B("uDirection",new T.F(a2))
a2=i.c
b0.B("uTexture",a2)
b1=new G.aP(P.C(),"Bloom Vertical",!1,!0)
a1=new Float32Array(H.t(2))
a1[0]=0
a1[1]=1.5
b1.B("uDirection",new T.F(a1))
b1.B("uTexture",j.c)
b2=new G.aP(P.C(),"uniformApply",!1,!0)
b2.B("uTexture",a3)
b2.B("uScale",0.6)
b2.B("uColor",$.$get$j9())
b2.B("uTexture2",a2)
t.a=0
new Q.i3(t,o,n,m,l,new G.c_(r,null,null,null,null),k,j,i,h,g,d,c,a6,a7,a8,a9,b0,b1,b2).$1(0)},
i3:function i3(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9){var _=this
_.a=a0
_.b=a1
_.c=a2
_.d=a3
_.e=a4
_.f=a5
_.r=a6
_.x=a7
_.y=a8
_.z=a9
_.Q=b0
_.ch=b1
_.cx=b2
_.cy=b3
_.db=b4
_.dx=b5
_.dy=b6
_.fr=b7
_.fx=b8
_.fy=b9}},V={
m9:function(a,b){var t,s,r,q,p,o
t=[]
for(s=b*b,r=0,q=0;q<a;++q){p=0.39894*Math.exp(-0.5*q*q/s)/b
C.a.l(t,p)
r+=p
if(q>0)r+=p}for(o="",q=0,s="";q<a;++q,o=", ")s=s+o+H.h(t[q]/r)
return"float kernel["+a+"] = float["+a+"]("+(s.charCodeAt(0)==0?s:s)+");"}}
var v=[C,H,J,P,W,B,G,A,T,Q,V]
setFunctionNamesIfNecessary(v)
var $={}
H.iu.prototype={}
J.a.prototype={
v:function(a,b){return a===b},
gu:function(a){return H.aN(a)},
k:function(a){return H.eY(a)},
gA:function(a){return new H.ax(H.hR(a),null)}}
J.ef.prototype={
k:function(a){return String(a)},
gu:function(a){return a?519018:218159},
gA:function(a){return C.M},
$isaX:1}
J.cJ.prototype={
v:function(a,b){return null==b},
k:function(a){return"null"},
gu:function(a){return 0},
gA:function(a){return C.G}}
J.bo.prototype={
gu:function(a){return 0},
gA:function(a){return C.F},
k:function(a){return String(a)},
$isjh:1}
J.eS.prototype={}
J.aQ.prototype={}
J.aI.prototype={
k:function(a){var t=a[$.$get$ja()]
return t==null?this.cI(a):J.bb(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isir:1}
J.aG.prototype={
aQ:function(a,b){if(!!a.immutable$list)throw H.e(new P.r(b))},
aP:function(a,b){if(!!a.fixed$length)throw H.e(new P.r(b))},
l:function(a,b){this.aP(a,"add")
a.push(b)},
dn:function(a,b){var t,s,r,q,p
t=a.length
this.aP(a,"addAll")
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.M)(b),++r,t=p){q=b[r]
p=t+1
H.d(t===a.length||H.D(new P.a6(a)))
a.push(q)}},
c1:function(a,b){return new H.cM(a,b,[H.b9(a,0),null])},
ae:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.h(a[s])
return t.join(b)},
p:function(a,b){return a[b]},
gdL:function(a){if(a.length>0)return a[0]
throw H.e(H.is())},
gaU:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.e(H.is())},
b4:function(a,b,c,d,e){var t,s
this.aQ(a,"setRange")
P.jo(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.D(P.bv(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.e(H.lc())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=d[e+s]
else for(s=0;s<t;++s)a[b+s]=d[e+s]},
cD:function(a,b){this.aQ(a,"sort")
H.cY(a,0,a.length-1,P.lU())},
ax:function(a){return this.cD(a,null)},
W:function(a,b){var t
for(t=0;t<a.length;++t)if(J.E(a[t],b))return!0
return!1},
k:function(a){return P.ee(a,"[","]")},
gw:function(a){return new J.dm(a,a.length,0,null,[H.b9(a,0)])},
gu:function(a){return H.aN(a)},
gj:function(a){return a.length},
sj:function(a,b){this.aP(a,"set length")
if(b<0)throw H.e(P.bv(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.O(a,b))
if(b>=a.length||b<0)throw H.e(H.O(a,b))
return a[b]},
i:function(a,b,c){this.aQ(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.O(a,b))
if(b>=a.length||b<0)throw H.e(H.O(a,b))
a[b]=c},
$isn:1,
$asn:function(){},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
J.it.prototype={}
J.dm.prototype={
gt:function(){return this.d},
q:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.e(H.M(t))
r=this.c
if(r>=s){this.sbf(null)
return!1}this.sbf(t[r]);++this.c
return!0},
sbf:function(a){this.d=a}}
J.b0.prototype={
L:function(a,b){var t
if(typeof b!=="number")throw H.e(H.R(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaT(b)
if(this.gaT(a)===t)return 0
if(this.gaT(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaT:function(a){return a===0?1/a<0:a<0},
X:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(new P.r(""+a+".round()"))},
dw:function(a,b,c){if(this.L(b,c)>0)throw H.e(H.R(b))
if(this.L(a,b)<0)return b
if(this.L(a,c)>0)return c
return a},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu:function(a){return a&0x1FFFFFFF},
Y:function(a,b){if(typeof b!=="number")throw H.e(H.R(b))
return a+b},
a0:function(a,b){if(typeof b!=="number")throw H.e(H.R(b))
return a-b},
cp:function(a,b){if(typeof b!=="number")throw H.e(H.R(b))
return a/b},
F:function(a,b){if(typeof b!=="number")throw H.e(H.R(b))
return a*b},
az:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.by(a,b)},
D:function(a,b){return(a|0)===a?a/b|0:this.by(a,b)},
by:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.e(new P.r("Result of truncating division is "+H.h(t)+": "+H.h(a)+" ~/ "+b))},
aL:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
co:function(a,b){if(typeof b!=="number")throw H.e(H.R(b))
return(a&b)>>>0},
cJ:function(a,b){if(typeof b!=="number")throw H.e(H.R(b))
return(a^b)>>>0},
aw:function(a,b){if(typeof b!=="number")throw H.e(H.R(b))
return a<b},
av:function(a,b){if(typeof b!=="number")throw H.e(H.R(b))
return a>b},
cq:function(a,b){if(typeof b!=="number")throw H.e(H.R(b))
return a>=b},
gA:function(a){return C.P},
$isS:1}
J.cI.prototype={
gA:function(a){return C.O},
$isL:1,
$ism:1,
$isS:1}
J.eg.prototype={
gA:function(a){return C.N},
$isL:1,
$isS:1}
J.aH.prototype={
aC:function(a,b){if(b>=a.length)throw H.e(H.O(a,b))
return a.charCodeAt(b)},
Y:function(a,b){if(typeof b!=="string")throw H.e(P.j1(b,null,null))
return a+b},
cF:function(a,b,c){var t
if(c>a.length)throw H.e(P.bv(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
cE:function(a,b){return this.cF(a,b,0)},
b7:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.eZ(b,null,null))
if(b>c)throw H.e(P.eZ(b,null,null))
if(c>a.length)throw H.e(P.eZ(c,null,null))
return a.substring(b,c)},
cG:function(a,b){return this.b7(a,b,null)},
L:function(a,b){var t
if(typeof b!=="string")throw H.e(H.R(b))
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
gA:function(a){return C.H},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.e(H.O(a,b))
return a[b]},
$isn:1,
$asn:function(){},
$isv:1}
H.c.prototype={$asc:null}
H.b1.prototype={
gw:function(a){return new H.cK(this,this.gj(this),0,null,[H.az(this,"b1",0)])},
e8:function(a,b){var t,s
t=H.K([],[H.az(this,"b1",0)])
C.a.sj(t,this.gj(this))
for(s=0;s<this.gj(this);++s)t[s]=this.p(0,s)
return t},
e7:function(a){return this.e8(a,!0)}}
H.cK.prototype={
gt:function(){return this.d},
q:function(){var t,s,r,q
t=this.a
s=J.ae(t)
r=s.gj(t)
if(this.b!==r)throw H.e(new P.a6(t))
q=this.c
if(q>=r){this.sa7(null)
return!1}this.sa7(s.p(t,q));++this.c
return!0},
sa7:function(a){this.d=a}}
H.cL.prototype={
gw:function(a){return new H.ep(null,J.dg(this.a),this.b,this.$ti)},
gj:function(a){return J.dh(this.a)},
$asai:function(a,b){return[b]}}
H.dG.prototype={$isc:1,
$asc:function(a,b){return[b]}}
H.ep.prototype={
q:function(){var t=this.b
if(t.q()){this.sa7(this.c.$1(t.gt()))
return!0}this.sa7(null)
return!1},
gt:function(){return this.a},
sa7:function(a){this.a=a},
$ascH:function(a,b){return[b]}}
H.cM.prototype={
gj:function(a){return J.dh(this.a)},
p:function(a,b){return this.b.$1(J.kw(this.a,b))},
$asc:function(a,b){return[b]},
$asb1:function(a,b){return[b]},
$asai:function(a,b){return[b]}}
H.bZ.prototype={}
H.id.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.ie.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.ho.prototype={
sdV:function(a){this.z=a},
sdY:function(a){this.ch=a}}
H.aU.prototype={
bB:function(a,b){if(!this.f.v(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.aN()},
e2:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.ag(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.br();++r.d}this.y=!1}this.aN()},
dq:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.u(a),s=0;r=this.ch,s<r.length;s+=2)if(t.v(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
e1:function(a){var t,s,r
if(this.ch==null)return
for(t=J.u(a),s=0;r=this.ch,s<r.length;s+=2)if(t.v(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.D(new P.r("removeRange"))
P.jo(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
cC:function(a,b){if(!this.r.v(0,a))return
this.db=b},
dP:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.G(0,c)
return}H.d(b===1)
t=this.cx
if(t==null){t=P.ix(null,null)
this.cx=t}t.O(0,new H.hj(a,c))},
dO:function(a,b){var t
if(!this.r.v(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.ar()
return}H.d(b===1)
t=this.cx
if(t==null){t=P.ix(null,null)
this.cx=t}t.O(0,this.gdW())},
dQ:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.as(a)
if(b!=null)P.as(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.bb(a)
s[1]=b==null?null:b.k(0)
for(r=new P.bE(t,t.r,null,null,[null]),r.c=t.e;r.q();)r.d.G(0,s)},
ab:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.at(o)
p=H.aA(o)
this.dQ(q,p)
if(this.db){this.ar()
if(this===u.globalState.e)throw o}}finally{this.cy=H.lQ(r)
u.globalState.d=H.k5(t,"$isaU")
if(t!=null)$=t.gdU()
if(this.cx!=null)for(;n=this.cx,!n.gaq(n);)this.cx.c2().$0()}return s},
c0:function(a){return this.b.h(0,a)},
bj:function(a,b){var t=this.b
if(t.E(0,a))throw H.e(P.bX("Registry: ports must be registered only once."))
t.i(0,a,b)},
aN:function(){var t=this.b
if(t.gj(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.ar()},
ar:function(){var t,s,r
t=this.cx
if(t!=null)t.P(0)
for(t=this.b,s=t.gcl(t),s=s.gw(s);s.q();)s.gt().d6()
t.P(0)
this.c.P(0)
u.globalState.z.ag(0,this.a)
this.dx.P(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].G(0,t[r+1])
this.ch=null}},
gdU:function(){return this.d},
gdA:function(){return this.e}}
H.hj.prototype={
$0:function(){this.a.G(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.h1.prototype={
dD:function(){var t=this.a
if(t.b===t.c)return
return t.c2()},
c4:function(){var t,s,r
t=this.dD()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.E(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gaq(s)}else s=!1
else s=!1
else s=!1
if(s)H.D(P.bX("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gaq(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aK(["command","close"])
r=new H.ac(!0,new P.d6(0,null,null,null,null,null,0,[null,P.m])).H(r)
s.toString
self.postMessage(r)}return!1}t.e0()
return!0},
bw:function(){if(self.window!=null)new H.h2(this).$0()
else for(;this.c4(););},
ah:function(){var t,s,r,q,p
if(!u.globalState.x)this.bw()
else try{this.bw()}catch(r){t=H.at(r)
s=H.aA(r)
q=u.globalState.Q
p=P.aK(["command","error","msg",H.h(t)+"\n"+H.h(s)])
p=new H.ac(!0,P.bF(null,P.m)).H(p)
q.toString
self.postMessage(p)}}}
H.h2.prototype={
$0:function(){if(!this.a.c4())return
P.lt(C.i,this)},
$S:function(){return{func:1,v:true}}}
H.aV.prototype={
e0:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.ab(this.b)}}
H.hn.prototype={}
H.ec.prototype={
$0:function(){H.l8(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.ed.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(!this.d)this.a.$1(this.c)
else{s=this.a
if(H.b8(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.b8(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.aN()},
$S:function(){return{func:1,v:true}}}
H.fW.prototype={}
H.b5.prototype={
G:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.lE(b)
if(t.gdA()===s){s=J.ae(r)
switch(s.h(r,0)){case"pause":t.bB(s.h(r,1),s.h(r,2))
break
case"resume":t.e2(s.h(r,1))
break
case"add-ondone":t.dq(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.e1(s.h(r,1))
break
case"set-errors-fatal":t.cC(s.h(r,1),s.h(r,2))
break
case"ping":t.dP(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.dO(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.ag(0,s)
break}return}u.globalState.f.a.O(0,new H.aV(t,new H.hp(this,r),"receive"))},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.b5){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gu:function(a){return this.b.a}}
H.hp.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.d3(0,this.b)},
$S:function(){return{func:1}}}
H.bG.prototype={
G:function(a,b){var t,s,r
t=P.aK(["command","message","port",this,"msg",b])
s=new H.ac(!0,P.bF(null,P.m)).H(t)
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
gu:function(a){return C.b.cJ((this.b<<16^this.a<<8)>>>0,this.c)}}
H.b3.prototype={
d6:function(){this.c=!0
this.b=null},
d3:function(a,b){if(this.c)return
this.b.$1(b)},
$isln:1}
H.fw.prototype={
cZ:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.O(0,new H.aV(s,new H.fx(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.bK(new H.fy(this,b),0),a)}else{H.d(a>0)
throw H.e(new P.r("Timer greater than 0."))}}}
H.fx.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.fy.prototype={
$0:function(){this.a.c=null
H.i2()
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.ah.prototype={
gu:function(a){var t=this.a
t=C.b.aL(t,0)^C.b.D(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
v:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.ah){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.ac.prototype={
H:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gj(t))
t=J.u(a)
if(!!t.$isbq)return["buffer",a]
if(!!t.$isb2)return["typed",a]
if(!!t.$isn)return this.cw(a)
if(!!t.$isl5){r=this.gct()
q=t.gJ(a)
q=H.iy(q,r,H.az(q,"ai",0),null)
q=P.jj(q,!0,H.az(q,"ai",0))
t=t.gcl(a)
t=H.iy(t,r,H.az(t,"ai",0),null)
return["map",q,P.jj(t,!0,H.az(t,"ai",0))]}if(!!t.$isjh)return this.cz(a)
if(!!t.$isa)this.cj(a)
if(!!t.$isln)this.ai(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isb5)return this.cA(a)
if(!!t.$isbG)return this.cB(a)
if(!!t.$isaZ){p=a.$static_name
if(p==null)this.ai(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isah)return["capability",a.a]
if(!(a instanceof P.p))this.cj(a)
return["dart",u.classIdExtractor(a),this.cv(u.classFieldsExtractor(a))]},
ai:function(a,b){throw H.e(new P.r((b==null?"Can't transmit:":b)+" "+H.h(a)))},
cj:function(a){return this.ai(a,null)},
cw:function(a){var t
H.d(typeof a!=="string")
t=this.cu(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.ai(a,"Can't serialize indexable: ")},
cu:function(a){var t,s
t=[]
C.a.sj(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.H(a[s])
return t},
cv:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.H(a[t]))
return a},
cz:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.ai(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sj(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.H(a[t[r]])
return["js-object",t,s]},
cB:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cA:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.aT.prototype={
R:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.e(P.j0("Bad serialized message: "+H.h(a)))
switch(C.a.gdL(a)){case"ref":H.d(J.E(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.d(J.E(a[0],"buffer"))
t=a[1]
C.a.l(this.b,t)
return t
case"typed":H.d(J.E(a[0],"typed"))
t=a[1]
C.a.l(this.b,t)
return t
case"fixed":H.d(J.E(a[0],"fixed"))
t=a[1]
C.a.l(this.b,t)
s=H.K(this.aa(t),[null])
s.fixed$length=Array
return s
case"extendable":H.d(J.E(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.K(this.aa(t),[null])
case"mutable":H.d(J.E(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.aa(t)
case"const":H.d(J.E(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
s=H.K(this.aa(t),[null])
s.fixed$length=Array
return s
case"map":return this.dG(a)
case"sendport":return this.dH(a)
case"raw sendport":H.d(J.E(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.dF(a)
case"function":H.d(J.E(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.d(J.E(a[0],"capability"))
return new H.ah(a[1])
case"dart":H.d(J.E(a[0],"dart"))
r=a[1]
q=a[2]
p=u.instanceFromClassId(r)
C.a.l(this.b,p)
this.aa(q)
return u.initializeEmptyInstance(r,p,q)
default:throw H.e("couldn't deserialize: "+H.h(a))}},
aa:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.R(a[t]))
return a},
dG:function(a){var t,s,r,q,p
H.d(J.E(a[0],"map"))
t=a[1]
s=a[2]
r=P.C()
C.a.l(this.b,r)
t=J.kH(t,this.gdE()).e7(0)
for(q=J.ae(s),p=0;p<t.length;++p)r.i(0,t[p],this.R(q.h(s,p)))
return r},
dH:function(a){var t,s,r,q,p,o,n
H.d(J.E(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.c0(r)
if(o==null)return
n=new H.b5(o,s)}else n=new H.bG(t,r,s)
C.a.l(this.b,n)
return n},
dF:function(a){var t,s,r,q,p,o
H.d(J.E(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.ae(t),p=J.ae(s),o=0;o<q.gj(t);++o)r[q.h(t,o)]=this.R(p.h(s,o))
return r}}
H.f1.prototype={}
H.fD.prototype={
K:function(a){var t,s,r
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
H.cT.prototype={
k:function(a){var t=this.b
if(t==null)return"NullError: "+H.h(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.ei.prototype={
k:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.h(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.h(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.h(this.a)+")"}}
H.fH.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.ig.prototype={
$1:function(a){if(!!J.u(a).$isb_)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.d8.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.hY.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.hZ.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.i_.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.i0.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.i1.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.aZ.prototype={
k:function(a){return"Closure '"+H.cV(this).trim()+"'"},
$isir:1,
geb:function(){return this},
$D:null}
H.fq.prototype={}
H.fh.prototype={
k:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bc.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bc))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gu:function(a){var t,s
t=this.c
if(t==null)s=H.aN(this.a)
else s=typeof t!=="object"?J.ag(t):H.aN(t)
return(s^H.aN(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.h(this.d)+"' of "+H.eY(t)}}
H.fF.prototype={
k:function(a){return this.a}}
H.dt.prototype={
k:function(a){return this.a}}
H.f7.prototype={
k:function(a){return"RuntimeError: "+H.h(this.a)}}
H.fR.prototype={
k:function(a){return C.e.Y("Assertion failed: ",P.ip(this.a))}}
H.ax.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gu:function(a){return J.ag(this.a)},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.ax){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.a8.prototype={
gj:function(a){return this.a},
gaq:function(a){return this.a===0},
gJ:function(a){return new H.el(this,[H.b9(this,0)])},
gcl:function(a){return H.iy(this.gJ(this),new H.eh(this),H.b9(this,0),H.b9(this,1))},
E:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bo(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bo(s,b)}else return this.dR(b)},
dR:function(a){var t=this.d
if(t==null)return!1
return this.ad(this.ao(t,this.ac(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.a8(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.a8(r,b)
return s==null?null:s.b}else return this.dS(b)},
dS:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.ao(t,this.ac(a))
r=this.ad(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aI()
this.b=t}this.bh(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aI()
this.c=s}this.bh(s,b,c)}else{r=this.d
if(r==null){r=this.aI()
this.d=r}q=this.ac(b)
p=this.ao(r,q)
if(p==null)this.aK(r,q,[this.aJ(b,c)])
else{o=this.ad(p,b)
if(o>=0)p[o].b=c
else p.push(this.aJ(b,c))}}},
ag:function(a,b){if(typeof b==="string")return this.bu(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bu(this.c,b)
else return this.dT(b)},
dT:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.ao(t,this.ac(a))
r=this.ad(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bz(q)
return q.b},
P:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
aS:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.e(new P.a6(this))
t=t.c}},
bh:function(a,b,c){var t=this.a8(a,b)
if(t==null)this.aK(a,b,this.aJ(b,c))
else t.b=c},
bu:function(a,b){var t
if(a==null)return
t=this.a8(a,b)
if(t==null)return
this.bz(t)
this.bp(a,b)
return t.b},
aJ:function(a,b){var t,s
t=new H.ek(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bz:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.r=this.r+1&67108863},
ac:function(a){return J.ag(a)&0x3ffffff},
ad:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.E(a[s].a,b))return s
return-1},
k:function(a){return P.le(this)},
a8:function(a,b){return a[b]},
ao:function(a,b){return a[b]},
aK:function(a,b,c){H.d(c!=null)
a[b]=c},
bp:function(a,b){delete a[b]},
bo:function(a,b){return this.a8(a,b)!=null},
aI:function(){var t=Object.create(null)
this.aK(t,"<non-identifier-key>",t)
this.bp(t,"<non-identifier-key>")
return t},
$isl5:1}
H.eh.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.ek.prototype={}
H.el.prototype={
gj:function(a){return this.a.a},
gw:function(a){var t,s
t=this.a
s=new H.em(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.em.prototype={
gt:function(){return this.d},
q:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a6(t))
else{t=this.c
if(t==null){this.sbg(null)
return!1}else{this.sbg(t.a)
this.c=this.c.c
return!0}}},
sbg:function(a){this.d=a}}
H.hU.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.hV.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.v]}}}
H.hW.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.v]}}}
H.bq.prototype={
gA:function(a){return C.y},
$isbq:1}
H.b2.prototype={$isb2:1}
H.ez.prototype={
gA:function(a){return C.z}}
H.cO.prototype={
gj:function(a){return a.length},
$isn:1,
$asn:function(){},
$iso:1,
$aso:function(){}}
H.cP.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.O(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.D(H.O(a,b))
a[b]=c}}
H.cQ.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.D(H.O(a,b))
a[b]=c},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]}}
H.cN.prototype={
gA:function(a){return C.A},
$isc:1,
$asc:function(){return[P.L]},
$isb:1,
$asb:function(){return[P.L]},
$ise3:1}
H.eA.prototype={
gA:function(a){return C.B},
$isc:1,
$asc:function(){return[P.L]},
$isb:1,
$asb:function(){return[P.L]}}
H.eB.prototype={
gA:function(a){return C.C},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.O(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]}}
H.eC.prototype={
gA:function(a){return C.D},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.O(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]},
$isje:1}
H.eD.prototype={
gA:function(a){return C.E},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.O(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]}}
H.eE.prototype={
gA:function(a){return C.I},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.O(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]},
$isjE:1}
H.eF.prototype={
gA:function(a){return C.J},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.O(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]},
$isjF:1}
H.cR.prototype={
gA:function(a){return C.K},
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.O(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]}}
H.eG.prototype={
gA:function(a){return C.L},
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.D(H.O(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]},
$isjG:1}
H.br.prototype={
$asn:function(){},
$isc:1,
$asc:function(){return[P.m]},
$aso:function(){},
$isb:1,
$asb:function(){return[P.m]}}
H.bs.prototype={
$asn:function(){},
$isc:1,
$asc:function(){return[P.L]},
$aso:function(){},
$isb:1,
$asb:function(){return[P.L]}}
H.bt.prototype={
$asn:function(){},
$asc:function(){return[P.L]},
$aso:function(){},
$asb:function(){return[P.L]}}
H.bu.prototype={
$asn:function(){},
$asc:function(){return[P.m]},
$aso:function(){},
$asb:function(){return[P.m]}}
P.fT.prototype={
$1:function(a){var t,s
H.i2()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.fS.prototype={
$1:function(a){var t,s
t=this.a
H.d(t.a==null);++u.globalState.f.b
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.fU.prototype={
$0:function(){H.i2()
this.a.$0()},
$S:function(){return{func:1}}}
P.fV.prototype={
$0:function(){H.i2()
this.a.$0()},
$S:function(){return{func:1}}}
P.fY.prototype={}
P.hB.prototype={
dz:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.bx("Future already completed"))
t.aE(b)}}
P.d5.prototype={
dZ:function(a){if(this.c!==6)return!0
H.d(!0)
return this.b.b.aX(this.d,a.a)},
dN:function(a){var t,s
t=(this.c&2)!==0
if(t){H.d(t)
t=this.e!=null}else t=!1
H.d(t)
s=this.e
t=this.b.b
if(H.b8(s,{func:1,args:[P.p,P.bw]}))return t.e3(s,a.a,a.b)
else return t.aX(s,a.a)}}
P.aq.prototype={
c8:function(a,b){var t,s,r
t=$.B
if(t!==C.d){t.toString
if(b!=null)b=P.lI(b,t)}s=new P.aq(0,t,null,[null])
r=b==null?1:3
this.bi(new P.d5(null,s,r,a,b,[H.b9(this,0),null]))
return s},
c7:function(a){return this.c8(a,null)},
bk:function(a){H.d(this.a<4)
H.d(a.a>=4)
this.a=a.a
this.c=a.c},
bi:function(a){var t
H.d(a.a==null)
t=this.a
if(t<=1){a.a=H.k5(this.c,"$isd5")
this.c=a}else{if(t===2){H.d(!0)
t=this.c
if(t.a<4){t.bi(a)
return}this.bk(t)}H.d(this.a>=4)
t=this.b
t.toString
P.hJ(null,null,t,new P.h7(this,a))}},
bt:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.d(!0)
s=this.c
if(s.a<4){s.bt(a)
return}this.bk(s)}H.d(this.a>=4)
t.a=this.a9(a)
s=this.b
s.toString
P.hJ(null,null,s,new P.hb(t,this))}},
bv:function(){H.d(this.a<4)
var t=this.c
this.c=null
return this.a9(t)},
a9:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aE:function(a){var t,s
H.d(this.a<4)
t=this.$ti
if(H.hK(a,"$ise6",t,"$ase6"))if(H.hK(a,"$isaq",t,null))P.jJ(a,this)
else P.lA(a,this)
else{s=this.bv()
H.d(this.a<4)
this.a=4
this.c=a
P.bC(this,s)}},
al:function(a,b){var t
H.d(this.a<4)
t=this.bv()
H.d(this.a<4)
this.a=8
this.c=new P.aY(a,b)
P.bC(this,t)},
d8:function(a){return this.al(a,null)},
$ise6:1,
gaM:function(){return this.a},
gdk:function(){return this.c}}
P.h7.prototype={
$0:function(){P.bC(this.a,this.b)},
$S:function(){return{func:1}}}
P.hb.prototype={
$0:function(){P.bC(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.h8.prototype={
$1:function(a){var t=this.a
H.d(t.a===1)
H.d(t.a===1)
t.a=0
t.aE(a)},
$S:function(){return{func:1,args:[,]}}}
P.h9.prototype={
$2:function(a,b){var t=this.a
H.d(t.a===1)
t.al(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.ha.prototype={
$0:function(){this.a.al(this.b,this.c)},
$S:function(){return{func:1}}}
P.he.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.d
p=q.c
H.d((p&1)===0)
o=(p&2)===0
H.d(o)
t=null
try{H.d(o)
H.d(p===8)
t=q.b.b.c3(q.d)}catch(n){s=H.at(n)
r=H.aA(n)
if(this.c){q=this.a.a
H.d(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.d(q.a===8)
p.b=q.c}else p.b=new P.aY(s,r)
p.a=!0
return}if(!!J.u(t).$ise6){if(t instanceof P.aq&&t.gaM()>=4){if(t.gaM()===8){q=t
H.d(q.gaM()===8)
p=this.b
p.b=q.gdk()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.c7(new P.hf(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.hf.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.hd.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.d((r.c&1)!==0)
this.a.b=r.b.b.aX(r.d,this.c)}catch(q){t=H.at(q)
s=H.aA(q)
r=this.a
r.b=new P.aY(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.hc.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.d(q.a===8)
t=q.c
q=this.c
if(q.dZ(t)){H.d((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.dN(t)
p.a=!1}}catch(o){s=H.at(o)
r=H.aA(o)
q=this.a
p=q.a
H.d(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.d(q.a===8)
m.b=q.c}else m.b=new P.aY(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.d3.prototype={}
P.fj.prototype={
gj:function(a){var t,s
t={}
s=new P.aq(0,$.B,null,[P.m])
t.a=0
this.dX(new P.fl(t),!0,new P.fm(t,s),s.gd7())
return s}}
P.fl.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.fm.prototype={
$0:function(){this.b.aE(this.a.a)},
$S:function(){return{func:1}}}
P.fk.prototype={}
P.aY.prototype={
k:function(a){return H.h(this.a)},
$isb_:1}
P.hF.prototype={}
P.hI.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.cU()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.e(t)
r=H.e(t)
r.stack=s.k(0)
throw r},
$S:function(){return{func:1}}}
P.hr.prototype={
e4:function(a){var t,s,r
try{if(C.d===$.B){a.$0()
return}P.jL(null,null,this,a)}catch(r){t=H.at(r)
s=H.aA(r)
P.hH(null,null,this,t,s)}},
e5:function(a,b){var t,s,r
try{if(C.d===$.B){a.$1(b)
return}P.jM(null,null,this,a,b)}catch(r){t=H.at(r)
s=H.aA(r)
P.hH(null,null,this,t,s)}},
dt:function(a){return new P.ht(this,a)},
aO:function(a){return new P.hs(this,a)},
du:function(a){return new P.hu(this,a)},
h:function(a,b){return},
c3:function(a){if($.B===C.d)return a.$0()
return P.jL(null,null,this,a)},
aX:function(a,b){if($.B===C.d)return a.$1(b)
return P.jM(null,null,this,a,b)},
e3:function(a,b,c){if($.B===C.d)return a.$2(b,c)
return P.lJ(null,null,this,a,b,c)}}
P.ht.prototype={
$0:function(){return this.a.c3(this.b)},
$S:function(){return{func:1}}}
P.hs.prototype={
$0:function(){return this.a.e4(this.b)},
$S:function(){return{func:1}}}
P.hu.prototype={
$1:function(a){return this.a.e5(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.d6.prototype={
ac:function(a){return H.ma(a)&0x3ffffff},
ad:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.hk.prototype={
gw:function(a){var t=new P.bE(this,this.r,null,null,[null])
t.c=this.e
return t},
gj:function(a){return this.a},
W:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.d9(b)},
d9:function(a){var t=this.d
if(t==null)return!1
return this.an(t[this.am(a)],a)>=0},
c0:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.W(0,a)?a:null
else return this.dh(a)},
dh:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.am(a)]
r=this.an(s,a)
if(r<0)return
return J.ba(s,r).gdc()},
l:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.bl(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.bl(r,b)}else return this.O(0,b)},
O:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.lC()
this.d=t}s=this.am(b)
r=t[s]
if(r==null){q=[this.aD(b)]
H.d(q!=null)
t[s]=q}else{if(this.an(r,b)>=0)return!1
r.push(this.aD(b))}return!0},
ag:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bm(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bm(this.c,b)
else return this.di(0,b)},
di:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.am(b)]
r=this.an(s,b)
if(r<0)return!1
this.bn(s.splice(r,1)[0])
return!0},
P:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
bl:function(a,b){var t
if(a[b]!=null)return!1
t=this.aD(b)
H.d(!0)
a[b]=t
return!0},
bm:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bn(t)
delete a[b]
return!0},
aD:function(a){var t,s
t=new P.hl(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bn:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.r=this.r+1&67108863},
am:function(a){return J.ag(a)&0x3ffffff},
an:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.E(a[s].a,b))return s
return-1},
$isc:1,
$asc:null}
P.hl.prototype={
gdc:function(){return this.a}}
P.bE.prototype={
gt:function(){return this.d},
q:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a6(t))
else{t=this.c
if(t==null){this.sa6(null)
return!1}else{this.sa6(t.a)
this.c=this.c.b
return!0}}},
sa6:function(a){this.d=a}}
P.hi.prototype={}
P.w.prototype={
gw:function(a){return new H.cK(a,this.gj(a),0,null,[H.az(a,"w",0)])},
p:function(a,b){return this.h(a,b)},
c1:function(a,b){return new H.cM(a,b,[H.az(a,"w",0),null])},
dM:function(a,b,c){var t,s,r
t=this.gj(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gj(a))throw H.e(new P.a6(a))}return s},
k:function(a){return P.ee(a,"[","]")},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
P.eq.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.h(a)
t.a=s+": "
t.a+=H.h(b)},
$S:function(){return{func:1,args:[,,]}}}
P.en.prototype={
gw:function(a){return new P.hm(this,this.c,this.d,this.b,null,this.$ti)},
gaq:function(a){return this.b===this.c},
gj:function(a){return(this.c-this.b&this.a.length-1)>>>0},
p:function(a,b){var t,s
t=(this.c-this.b&this.a.length-1)>>>0
if(0>b||b>=t)H.D(P.A(b,this,"index",null,t))
s=this.a
return s[(this.b+b&s.length-1)>>>0]},
P:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
k:function(a){return P.ee(this,"{","}")},
c2:function(){var t,s,r
t=this.b
if(t===this.c)throw H.e(H.is());++this.d
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
if(this.b===t)this.br();++this.d},
br:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.K(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.b4(s,0,q,t,r)
C.a.b4(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbx(s)},
cU:function(a,b){var t
H.d(!0)
t=new Array(8)
t.fixed$length=Array
this.sbx(H.K(t,[b]))},
sbx:function(a){this.a=a},
$asc:null}
P.hm.prototype={
gt:function(){return this.e},
q:function(){var t,s
t=this.a
if(this.c!==t.d)H.D(new P.a6(t))
s=this.d
if(s===this.b){this.sa6(null)
return!1}this.sa6(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sa6:function(a){this.e=a}}
P.fb.prototype={
k:function(a){return P.ee(this,"{","}")},
$isc:1,
$asc:null}
P.fa.prototype={}
P.aX.prototype={}
P.G.prototype={}
P.be.prototype={
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.be))return!1
return this.a===b.a&&this.b===b.b},
L:function(a,b){return C.b.L(this.a,b.a)},
gu:function(a){var t=this.a
return(t^C.b.aL(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.kZ(H.lm(this))
s=P.bS(H.lk(this))
r=P.bS(H.lg(this))
q=P.bS(H.lh(this))
p=P.bS(H.lj(this))
o=P.bS(H.ll(this))
n=P.l_(H.li(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isG:1,
$asG:function(){return[P.be]}}
P.L.prototype={$isG:1,
$asG:function(){return[P.S]}}
P.aF.prototype={
aw:function(a,b){return C.b.aw(this.a,b.gda())},
av:function(a,b){return C.b.av(this.a,b.gda())},
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.aF))return!1
return this.a===b.a},
gu:function(a){return this.a&0x1FFFFFFF},
L:function(a,b){return C.b.L(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.dF()
s=this.a
if(s<0)return"-"+new P.aF(0-s).k(0)
r=t.$1(C.b.D(s,6e7)%60)
q=t.$1(C.b.D(s,1e6)%60)
p=new P.dE().$1(s%1e6)
return""+C.b.D(s,36e8)+":"+H.h(r)+":"+H.h(q)+"."+H.h(p)},
$isG:1,
$asG:function(){return[P.aF]}}
P.dE.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.v,args:[P.m]}}}
P.dF.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.v,args:[P.m]}}}
P.b_.prototype={}
P.bP.prototype={
k:function(a){return"Assertion failed"}}
P.cU.prototype={
k:function(a){return"Throw of null."}}
P.au.prototype={
gaG:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaF:function(){return""},
k:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+t
q=this.gaG()+s+r
if(!this.a)return q
p=this.gaF()
o=P.ip(this.b)
return q+p+": "+H.h(o)}}
P.cW.prototype={
gaG:function(){return"RangeError"},
gaF:function(){var t,s,r
H.d(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.h(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.h(t)
else if(r>t)s=": Not in range "+H.h(t)+".."+H.h(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.h(t)}return s}}
P.ea.prototype={
gaG:function(){return"RangeError"},
gaF:function(){H.d(this.a)
if(J.ke(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.h(t)},
gj:function(a){return this.f}}
P.r.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.d2.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.bx.prototype={
k:function(a){return"Bad state: "+this.a}}
P.a6.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.h(P.ip(t))+"."}}
P.cZ.prototype={
k:function(a){return"Stack Overflow"},
$isb_:1}
P.dx.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.h6.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.h(t)}}
P.dH.prototype={
k:function(a){return"Expando:"+H.h(this.a)},
h:function(a,b){var t,s
t=this.b
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.D(P.j1(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.jl(b,"expando$values")
return s==null?null:H.jl(s,t)}}
P.m.prototype={$isG:1,
$asG:function(){return[P.S]}}
P.ai.prototype={
gj:function(a){var t,s
H.d(!this.$isc)
t=this.gw(this)
for(s=0;t.q();)++s
return s},
p:function(a,b){var t,s,r
if(b<0)H.D(P.bv(b,0,null,"index",null))
for(t=this.gw(this),s=0;t.q();){r=t.gt()
if(b===s)return r;++s}throw H.e(P.A(b,this,"index",null,s))},
k:function(a){return P.lb(this,"(",")")}}
P.cH.prototype={}
P.b.prototype={$isc:1,$asc:null,$asb:null}
P.aw.prototype={}
P.aM.prototype={
gu:function(a){return P.p.prototype.gu.call(this,this)},
k:function(a){return"null"}}
P.S.prototype={$isG:1,
$asG:function(){return[P.S]}}
P.p.prototype={constructor:P.p,$isp:1,
v:function(a,b){return this===b},
gu:function(a){return H.aN(this)},
k:function(a){return H.eY(this)},
gA:function(a){return new H.ax(H.hR(this),null)},
toString:function(){return this.k(this)}}
P.bw.prototype={}
P.v.prototype={$isG:1,
$asG:function(){return[P.v]}}
P.by.prototype={
gj:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
gV:function(){return this.a}}
W.j.prototype={}
W.dk.prototype={
k:function(a){return String(a)},
$isa:1}
W.dl.prototype={
k:function(a){return String(a)},
$isa:1}
W.X.prototype={$isp:1}
W.dp.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.X]},
$isc:1,
$asc:function(){return[W.X]},
$iso:1,
$aso:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.bQ.prototype={}
W.dq.prototype={$isa:1}
W.bR.prototype={
cr:function(a,b,c){var t=this.de(a,b,P.lT(c,null))
return t},
de:function(a,b,c){return a.getContext(b,c)}}
W.ds.prototype={
au:function(a){return P.hM(a.getContextAttributes())}}
W.aE.prototype={$isa:1,
gj:function(a){return a.length}}
W.dv.prototype={$isa:1}
W.y.prototype={$isp:1}
W.bd.prototype={
gj:function(a){return a.length}}
W.dw.prototype={}
W.dy.prototype={
h:function(a,b){return a[b]},
gj:function(a){return a.length}}
W.dz.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gI:function(a){return a.z}}
W.bf.prototype={
aW:function(a,b){return a.querySelector(b)}}
W.bT.prototype={$isa:1}
W.dA.prototype={
k:function(a){return String(a)}}
W.dB.prototype={
gat:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gI:function(a){return a.z}}
W.bU.prototype={
gat:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gI:function(a){return a.z}}
W.bV.prototype={
k:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(this.gU(a))+" x "+H.h(this.gT(a))},
v:function(a,b){var t
if(b==null)return!1
t=J.u(b)
if(!t.$isH)return!1
return a.left===t.gaV(b)&&a.top===t.gaY(b)&&this.gU(a)===t.gU(b)&&this.gT(a)===t.gT(b)},
gu:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gU(a)
q=this.gT(a)
return W.jK(W.aW(W.aW(W.aW(W.aW(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gT:function(a){return a.height},
gaV:function(a){return a.left},
gaY:function(a){return a.top},
gU:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isH:1,
$asH:function(){}}
W.dC.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[P.v]},
$isc:1,
$asc:function(){return[P.v]},
$iso:1,
$aso:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]}}
W.dD.prototype={
gj:function(a){return a.length}}
W.bW.prototype={
k:function(a){return a.localName},
$isa:1}
W.k.prototype={}
W.f.prototype={
d4:function(a,b,c,d){return a.addEventListener(b,H.bK(c,1),!1)},
$isp:1,
$isf:1}
W.Y.prototype={$isp:1}
W.e_.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.Y]},
$isc:1,
$asc:function(){return[W.Y]},
$iso:1,
$aso:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.e0.prototype={
gj:function(a){return a.length}}
W.e5.prototype={
gj:function(a){return a.length}}
W.Z.prototype={$isp:1}
W.e7.prototype={
gj:function(a){return a.length}}
W.bm.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.x]},
$isc:1,
$asc:function(){return[W.x]},
$iso:1,
$aso:function(){return[W.x]},
$isb:1,
$asb:function(){return[W.x]}}
W.c1.prototype={}
W.e8.prototype={
G:function(a,b){return a.send(b)}}
W.bn.prototype={}
W.eb.prototype={$isa:1}
W.aJ.prototype={$isp:1,$isaJ:1}
W.eo.prototype={
k:function(a){return String(a)}}
W.eu.prototype={
gj:function(a){return a.length}}
W.ew.prototype={
ec:function(a,b,c){return a.send(b,c)},
G:function(a,b){return a.send(b)}}
W.bp.prototype={}
W.a_.prototype={$isp:1}
W.ex.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.a_]},
$isc:1,
$asc:function(){return[W.a_]},
$iso:1,
$aso:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.N.prototype={$isp:1,$isN:1}
W.eH.prototype={$isa:1}
W.x.prototype={
k:function(a){var t=a.nodeValue
return t==null?this.cH(a):t},
$isp:1,
$isf:1}
W.cS.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.x]},
$isc:1,
$asc:function(){return[W.x]},
$iso:1,
$aso:function(){return[W.x]},
$isb:1,
$asb:function(){return[W.x]}}
W.eO.prototype={$isa:1}
W.eR.prototype={
gj:function(a){return a.length}}
W.a0.prototype={$isp:1,
gj:function(a){return a.length}}
W.eT.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.a0]},
$isc:1,
$asc:function(){return[W.a0]},
$iso:1,
$aso:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.eW.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.eX.prototype={
G:function(a,b){return a.send(b)}}
W.f6.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gI:function(a){return a.z}}
W.cX.prototype={
G:function(a,b){return a.send(b)}}
W.f9.prototype={
gj:function(a){return a.length}}
W.fc.prototype={$isa:1}
W.a1.prototype={$isp:1,$isf:1}
W.fd.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.a1]},
$isc:1,
$asc:function(){return[W.a1]},
$iso:1,
$aso:function(){return[W.a1]},
$isb:1,
$asb:function(){return[W.a1]}}
W.a2.prototype={$isp:1}
W.ff.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.a2]},
$isc:1,
$asc:function(){return[W.a2]},
$iso:1,
$aso:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.a3.prototype={$isp:1,
gj:function(a){return a.length}}
W.fi.prototype={
h:function(a,b){return this.bq(a,b)},
aS:function(a,b){var t,s
for(t=0;!0;++t){s=this.dg(a,t)
if(s==null)return
b.$2(s,this.bq(a,s))}},
gj:function(a){return a.length},
bq:function(a,b){return a.getItem(b)},
dg:function(a,b){return a.key(b)}}
W.T.prototype={$isp:1}
W.ab.prototype={}
W.a4.prototype={$isp:1,$isf:1}
W.U.prototype={$isp:1,$isf:1}
W.fs.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.U]},
$isc:1,
$asc:function(){return[W.U]},
$iso:1,
$aso:function(){return[W.U]},
$isb:1,
$asb:function(){return[W.U]}}
W.ft.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.a4]},
$isc:1,
$asc:function(){return[W.a4]},
$iso:1,
$aso:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.fv.prototype={
gj:function(a){return a.length}}
W.a5.prototype={$isp:1}
W.aO.prototype={$isp:1,$isaO:1}
W.fz.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.a5]},
$isc:1,
$asc:function(){return[W.a5]},
$iso:1,
$aso:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.fA.prototype={
gj:function(a){return a.length}}
W.b4.prototype={}
W.fC.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gI:function(a){return a.z}}
W.ay.prototype={}
W.fI.prototype={
k:function(a){return String(a)},
$isa:1}
W.fK.prototype={
gj:function(a){return a.length}}
W.fN.prototype={
gj:function(a){return a.length}}
W.fO.prototype={
G:function(a,b){return a.send(b)}}
W.aR.prototype={
gdC:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(new P.r("deltaY is not supported"))},
$isp:1,
$isN:1,
$isaR:1}
W.bB.prototype={
gdr:function(a){var t,s
t=P.S
s=new P.aq(0,$.B,null,[t])
this.dd(a)
this.dj(a,W.jO(new W.fP(new P.hB(s,[t]))))
return s},
dj:function(a,b){return a.requestAnimationFrame(H.bK(b,1))},
dd:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isa:1}
W.fP.prototype={
$1:function(a){this.a.dz(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.fQ.prototype={$isa:1}
W.aS.prototype={$isa:1}
W.fX.prototype={
k:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(a.width)+" x "+H.h(a.height)},
v:function(a,b){var t,s,r
if(b==null)return!1
t=J.u(b)
if(!t.$isH)return!1
s=a.left
r=t.gaV(b)
if(s==null?r==null:s===r){s=a.top
r=t.gaY(b)
if(s==null?r==null:s===r){s=a.width
r=t.gU(b)
if(s==null?r==null:s===r){s=a.height
t=t.gT(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gu:function(a){var t,s,r,q
t=J.ag(a.left)
s=J.ag(a.top)
r=J.ag(a.width)
q=J.ag(a.height)
return W.jK(W.aW(W.aW(W.aW(W.aW(0,t),s),r),q))},
$isH:1,
$asH:function(){},
gT:function(a){return a.height},
gaV:function(a){return a.left},
gaY:function(a){return a.top},
gU:function(a){return a.width}}
W.d4.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[P.H]},
$isc:1,
$asc:function(){return[P.H]},
$iso:1,
$aso:function(){return[P.H]},
$isb:1,
$asb:function(){return[P.H]}}
W.fZ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.y]},
$isc:1,
$asc:function(){return[W.y]},
$iso:1,
$aso:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.h_.prototype={$isa:1}
W.h0.prototype={
gT:function(a){return a.height},
gU:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.hg.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.Z]},
$isc:1,
$asc:function(){return[W.Z]},
$iso:1,
$aso:function(){return[W.Z]},
$isb:1,
$asb:function(){return[W.Z]}}
W.hh.prototype={$isa:1}
W.d7.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.x]},
$isc:1,
$asc:function(){return[W.x]},
$iso:1,
$aso:function(){return[W.x]},
$isb:1,
$asb:function(){return[W.x]}}
W.hy.prototype={$isa:1}
W.hz.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.a3]},
$isc:1,
$asc:function(){return[W.a3]},
$iso:1,
$aso:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.hA.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.T]},
$isc:1,
$asc:function(){return[W.T]},
$iso:1,
$aso:function(){return[W.T]},
$isb:1,
$asb:function(){return[W.T]}}
W.hD.prototype={$isa:1}
W.hE.prototype={$isa:1}
W.h3.prototype={
dX:function(a,b,c,d){return W.ap(this.a,this.b,a,!1,H.b9(this,0))}}
W.iC.prototype={}
W.h4.prototype={
dm:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.kf(r,this.c,t,!1)}},
d2:function(a,b,c,d,e){this.dm()}}
W.h5.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.z.prototype={
gw:function(a){return new W.e2(a,this.gj(a),-1,null,[H.az(a,"z",0)])},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
W.e2.prototype={
q:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbs(J.ba(this.a,t))
this.c=t
return!0}this.sbs(null)
this.c=s
return!1},
gt:function(){return this.d},
sbs:function(a){this.d=a}}
W.bg.prototype={$isc:1,
$asc:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.bh.prototype={$isc:1,
$asc:function(){return[W.a1]},
$isb:1,
$asb:function(){return[W.a1]}}
W.bi.prototype={$isc:1,
$asc:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.bj.prototype={$isc:1,
$asc:function(){return[W.a1]},
$isb:1,
$asb:function(){return[W.a1]}}
W.bk.prototype={$isc:1,
$asc:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.bl.prototype={$isc:1,
$asc:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.c2.prototype={}
W.cm.prototype={$isc:1,
$asc:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.c8.prototype={$isc:1,
$asc:function(){return[W.x]},
$isb:1,
$asb:function(){return[W.x]}}
W.c5.prototype={$isc:1,
$asc:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.cg.prototype={$isc:1,
$asc:function(){return[W.x]},
$isb:1,
$asb:function(){return[W.x]}}
W.ch.prototype={$isc:1,
$asc:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]}}
W.ci.prototype={$isc:1,
$asc:function(){return[W.Z]},
$isb:1,
$asb:function(){return[W.Z]}}
W.cj.prototype={$isc:1,
$asc:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.ck.prototype={$isc:1,
$asc:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.c3.prototype={$isc:1,
$asc:function(){return[P.H]},
$isb:1,
$asb:function(){return[P.H]}}
W.c6.prototype={$isc:1,
$asc:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.c9.prototype={$isc:1,
$asc:function(){return[W.U]},
$isb:1,
$asb:function(){return[W.U]}}
W.ca.prototype={$isc:1,
$asc:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.cb.prototype={$isc:1,
$asc:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.cc.prototype={$isc:1,
$asc:function(){return[W.T]},
$isb:1,
$asb:function(){return[W.T]}}
W.ce.prototype={$isc:1,
$asc:function(){return[W.x]},
$isb:1,
$asb:function(){return[W.x]}}
W.cn.prototype={$isc:1,
$asc:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.co.prototype={$isc:1,
$asc:function(){return[W.x]},
$isb:1,
$asb:function(){return[W.x]}}
W.cp.prototype={$isc:1,
$asc:function(){return[W.U]},
$isb:1,
$asb:function(){return[W.U]}}
W.cz.prototype={$isc:1,
$asc:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.cA.prototype={$isc:1,
$asc:function(){return[W.x]},
$isb:1,
$asb:function(){return[W.x]}}
W.cy.prototype={$isc:1,
$asc:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.cD.prototype={$isc:1,
$asc:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.cE.prototype={$isc:1,
$asc:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]}}
W.cF.prototype={$isc:1,
$asc:function(){return[W.Z]},
$isb:1,
$asb:function(){return[W.Z]}}
W.cG.prototype={$isc:1,
$asc:function(){return[W.x]},
$isb:1,
$asb:function(){return[W.x]}}
W.cq.prototype={$isc:1,
$asc:function(){return[W.T]},
$isb:1,
$asb:function(){return[W.T]}}
W.cr.prototype={$isc:1,
$asc:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.ct.prototype={$isc:1,
$asc:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.cB.prototype={$isc:1,
$asc:function(){return[P.H]},
$isb:1,
$asb:function(){return[P.H]}}
W.cC.prototype={$isc:1,
$asc:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
P.hL.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.v,,]}}}
P.hq.prototype={}
P.H.prototype={$asH:null}
P.dj.prototype={$isa:1}
P.aD.prototype={$isa:1}
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
P.dT.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
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
P.dX.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gI:function(a){return a.z}}
P.dY.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dZ.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e1.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e4.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.a7.prototype={}
P.av.prototype={$isa:1}
P.e9.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.aj.prototype={$isp:1}
P.ej.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return this.S(a,b)},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
S:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.aj]},
$isb:1,
$asb:function(){return[P.aj]}}
P.er.prototype={$isa:1}
P.es.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ak.prototype={$isp:1}
P.eI.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return this.S(a,b)},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
S:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.ak]},
$isb:1,
$asb:function(){return[P.ak]}}
P.eP.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eU.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eV.prototype={
gj:function(a){return a.length}}
P.f_.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.f0.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.f8.prototype={$isa:1}
P.fn.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return this.S(a,b)},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
S:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]}}
P.I.prototype={$isa:1}
P.fo.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fp.prototype={$isa:1}
P.d_.prototype={}
P.fr.prototype={$isa:1}
P.bz.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.al.prototype={$isp:1}
P.fB.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return this.S(a,b)},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
S:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.al]},
$isb:1,
$asb:function(){return[P.al]}}
P.fJ.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fL.prototype={$isa:1}
P.fM.prototype={$isa:1}
P.bD.prototype={$isa:1}
P.hv.prototype={$isa:1}
P.hw.prototype={$isa:1}
P.hx.prototype={$isa:1}
P.cf.prototype={$isc:1,
$asc:function(){return[P.aj]},
$isb:1,
$asb:function(){return[P.aj]}}
P.c7.prototype={$isc:1,
$asc:function(){return[P.ak]},
$isb:1,
$asb:function(){return[P.ak]}}
P.c4.prototype={$isc:1,
$asc:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]}}
P.cd.prototype={$isc:1,
$asc:function(){return[P.al]},
$isb:1,
$asb:function(){return[P.al]}}
P.cs.prototype={$isc:1,
$asc:function(){return[P.al]},
$isb:1,
$asb:function(){return[P.al]}}
P.cu.prototype={$isc:1,
$asc:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]}}
P.cv.prototype={$isc:1,
$asc:function(){return[P.ak]},
$isb:1,
$asb:function(){return[P.ak]}}
P.cw.prototype={$isc:1,
$asc:function(){return[P.aj]},
$isb:1,
$asb:function(){return[P.aj]}}
P.dn.prototype={
gj:function(a){return a.length}}
P.f4.prototype={
bA:function(a,b){return a.activeTexture(b)},
bC:function(a,b,c){return a.attachShader(b,c)},
bD:function(a,b,c){return a.bindBuffer(b,c)},
bE:function(a,b,c){return a.bindFramebuffer(b,c)},
bF:function(a,b,c){return a.bindTexture(b,c)},
bG:function(a,b){return a.blendEquation(b)},
bH:function(a,b,c){return a.blendFunc(b,c)},
bI:function(a,b,c,d){return a.bufferData(b,c,d)},
bJ:function(a,b){return a.checkFramebufferStatus(b)},
bK:function(a,b){return a.clear(b)},
bL:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bM:function(a,b){return a.compileShader(b)},
bN:function(a){return a.createBuffer()},
bO:function(a){return a.createFramebuffer()},
bP:function(a){return a.createProgram()},
bQ:function(a,b){return a.createShader(b)},
bR:function(a){return a.createTexture()},
bS:function(a,b){return a.depthMask(b)},
bT:function(a,b){return a.disable(b)},
bU:function(a,b,c,d){return a.drawArrays(b,c,d)},
bV:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bW:function(a,b){return a.enable(b)},
bX:function(a,b){return a.enableVertexAttribArray(b)},
bZ:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
au:function(a){return P.hM(a.getContextAttributes())},
aZ:function(a){return a.getError()},
b_:function(a,b){return a.getProgramInfoLog(b)},
b0:function(a,b,c){return a.getProgramParameter(b,c)},
b1:function(a,b){return a.getShaderInfoLog(b)},
b2:function(a,b,c){return a.getShaderParameter(b,c)},
b3:function(a,b,c){return a.getUniformLocation(b,c)},
c_:function(a,b){return a.linkProgram(b)},
b5:function(a,b,c){return a.shaderSource(b,c)},
b6:function(a,b,c,d){return a.stencilFunc(b,c,d)},
c5:function(a,b,c,d){return a.texParameterf(b,c,d)},
c6:function(a,b,c,d){return a.texParameteri(b,c,d)},
c9:function(a,b,c){return a.uniform1f(b,c)},
ca:function(a,b,c){return a.uniform1fv(b,c)},
cb:function(a,b,c){return a.uniform1i(b,c)},
cc:function(a,b,c){return a.uniform1iv(b,c)},
cd:function(a,b,c){return a.uniform2fv(b,c)},
ce:function(a,b,c){return a.uniform3fv(b,c)},
cf:function(a,b,c){return a.uniform4fv(b,c)},
cg:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ci:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
ck:function(a,b){return a.useProgram(b)},
cm:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cn:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.f5.prototype={
ds:function(a,b){return a.beginTransformFeedback(b)},
dv:function(a,b){return a.bindVertexArray(b)},
dB:function(a){return a.createVertexArray()},
dI:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dJ:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dK:function(a){return a.endTransformFeedback()},
e6:function(a,b,c,d,e,f){return a.texStorage2D(b,c,d,e,f)},
e9:function(a,b,c,d){this.dl(a,b,c,d)
return},
dl:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
ea:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bA:function(a,b){return a.activeTexture(b)},
bC:function(a,b,c){return a.attachShader(b,c)},
bD:function(a,b,c){return a.bindBuffer(b,c)},
bE:function(a,b,c){return a.bindFramebuffer(b,c)},
bF:function(a,b,c){return a.bindTexture(b,c)},
bG:function(a,b){return a.blendEquation(b)},
bH:function(a,b,c){return a.blendFunc(b,c)},
bI:function(a,b,c,d){return a.bufferData(b,c,d)},
bJ:function(a,b){return a.checkFramebufferStatus(b)},
bK:function(a,b){return a.clear(b)},
bL:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bM:function(a,b){return a.compileShader(b)},
bN:function(a){return a.createBuffer()},
bO:function(a){return a.createFramebuffer()},
bP:function(a){return a.createProgram()},
bQ:function(a,b){return a.createShader(b)},
bR:function(a){return a.createTexture()},
bS:function(a,b){return a.depthMask(b)},
bT:function(a,b){return a.disable(b)},
bU:function(a,b,c,d){return a.drawArrays(b,c,d)},
bV:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bW:function(a,b){return a.enable(b)},
bX:function(a,b){return a.enableVertexAttribArray(b)},
bZ:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
au:function(a){return P.hM(a.getContextAttributes())},
aZ:function(a){return a.getError()},
b_:function(a,b){return a.getProgramInfoLog(b)},
b0:function(a,b,c){return a.getProgramParameter(b,c)},
b1:function(a,b){return a.getShaderInfoLog(b)},
b2:function(a,b,c){return a.getShaderParameter(b,c)},
b3:function(a,b,c){return a.getUniformLocation(b,c)},
c_:function(a,b){return a.linkProgram(b)},
b5:function(a,b,c){return a.shaderSource(b,c)},
b6:function(a,b,c,d){return a.stencilFunc(b,c,d)},
c5:function(a,b,c,d){return a.texParameterf(b,c,d)},
c6:function(a,b,c,d){return a.texParameteri(b,c,d)},
c9:function(a,b,c){return a.uniform1f(b,c)},
ca:function(a,b,c){return a.uniform1fv(b,c)},
cb:function(a,b,c){return a.uniform1i(b,c)},
cc:function(a,b,c){return a.uniform1iv(b,c)},
cd:function(a,b,c){return a.uniform2fv(b,c)},
ce:function(a,b,c){return a.uniform3fv(b,c)},
cf:function(a,b,c){return a.uniform4fv(b,c)},
cg:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ci:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
ck:function(a,b){return a.useProgram(b)},
cm:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cn:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isa:1}
P.hC.prototype={$isa:1}
P.fg.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return P.hM(this.df(a,b))},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
df:function(a,b){return a.item(b)},
$isc:1,
$asc:function(){return[P.aw]},
$isb:1,
$asb:function(){return[P.aw]}}
P.cl.prototype={$isc:1,
$asc:function(){return[P.aw]},
$isb:1,
$asb:function(){return[P.aw]}}
P.cx.prototype={$isc:1,
$asc:function(){return[P.aw]},
$isb:1,
$asb:function(){return[P.aw]}}
B.i8.prototype={
$1:function(a){$.$get$hN().i(0,a.which,!0)},
$S:function(){return{func:1,args:[W.aJ]}}}
B.i9.prototype={
$1:function(a){$.$get$hN().i(0,a.which,null)},
$S:function(){return{func:1,args:[W.aJ]}}}
B.ia.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.lR=t
$.lS=C.b.a0(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.iL=s-C.b.D(window.innerWidth,2)
$.k8=-(t-C.b.D(window.innerHeight,2))},
$S:function(){return{func:1,args:[W.N]}}}
B.ib.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.bM=t-C.b.D(window.innerWidth,2)
$.bN=-(s-C.b.D(window.innerHeight,2))
if(a.button===2)$.$get$bL().i(0,"right",!0)
else $.$get$bL().i(0,"left",!0)},
$S:function(){return{func:1,args:[W.N]}}}
B.ic.prototype={
$1:function(a){if(a.button===2)$.$get$bL().i(0,"right",null)
else $.$get$bL().i(0,"left",null)},
$S:function(){return{func:1,args:[W.N]}}}
B.eJ.prototype={
cV:function(a,b,c,d){var t
d.toString
W.ap(d,W.m_().$1(d),new B.eK(this),!1,W.aR)
W.ap(d,"mousemove",new B.eL(this),!1,W.N)
t=W.aO
W.ap(d,"touchstart",new B.eM(),!1,t)
W.ap(d,"touchmove",new B.eN(this),!1,t)
B.me(null)}}
B.eK.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.Q.gdC(a)*r.k3
if(C.c.a0(r.fy,t)>0)r.fy=H.V(C.c.a0(r.fy,t))}catch(q){s=H.at(q)
P.as(s)}},
$S:function(){return{func:1,args:[W.aR]}}}
B.eL.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=H.V(t.go+C.b.a0($.iL,$.bM)*0.01)
s=t.id
r=$.bN
q=$.k8
t.id=H.V(s+(r-q)*0.01)
$.bM=$.iL
$.bN=q}},
$S:function(){return{func:1,args:[W.N]}}}
B.eM.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.X(t.clientX)
C.c.X(t.clientY)
$.bM=s
C.c.X(t.clientX)
$.bN=C.c.X(t.clientY)},
$S:function(){return{func:1,args:[W.aO]}}}
B.eN.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.X(t.clientX)
t=C.c.X(t.clientY)
r=this.a
r.go=H.V(r.go+C.b.a0(s,$.bM)*0.01)
r.id=H.V(r.id+($.bN-t)*0.01)
$.bM=s
$.bN=t},
$S:function(){return{func:1,args:[W.aO]}}}
G.ey.prototype={}
G.aP.prototype={
B:function(a,b){var t=this.d
if(H.ad(!t.E(0,a)))H.ar("uniform "+a+" already set")
t.i(0,a,b)},
bb:function(){return this.d},
k:function(a){var t,s,r,q
t=H.K(["{"+new H.ax(H.hR(this),null).k(0)+"}["+this.a+"]"],[P.v])
for(s=this.d,r=s.gJ(s),r=r.gw(r);r.q();){q=r.gt()
C.a.l(t,H.h(q)+": "+H.h(s.h(0,q)))}return C.a.ae(t,"\n")}}
G.dr.prototype={}
G.du.prototype={
bY:function(a,b,c){J.kx(this.a,b)
if(c>0)J.kR(this.a,b,c)}}
G.c_.prototype={
a1:function(a,b,c,d,e){var t,s
t=this.a
s=this.b
J.ih(t.a,36160,s)
H.d(d>0&&e>0)
J.kS(t.a,b,c,d,e)
if(a!==0)J.kk(t.a,a)},
cQ:function(a,b,c,d,e){var t,s,r
t=this.a
s=J.kn(t.a)
this.b=s
J.ih(t.a,36160,s)
s=this.c
if(s!=null){s=s.b
J.iS(t.a,36160,36064,3553,s,0)}s=this.d
if(s!=null){s=s.b
J.iS(t.a,36160,36096,3553,s,0)}r=J.kj(t.a,36160)
s=r===36053
if(H.ad(s))H.ar("framebuffer error: "+H.h(r))
if(!s)throw H.e("Error Incomplete Framebuffer: "+H.h(r))
J.ih(t.a,36160,null)}}
G.bY.prototype={}
G.c0.prototype={
aA:function(a){var t=this.e
H.d(!t.E(0,a))
H.d(C.e.cE(a,"a"))
switch($.$get$Q().h(0,a).a){case"vec2":t.i(0,a,H.K([],[T.F]))
break
case"vec3":t.i(0,a,H.K([],[T.q]))
break
case"vec4":t.i(0,a,H.K([],[T.ao]))
break
case"float":t.i(0,a,H.K([],[P.L]))
break
case"uvec4":t.i(0,a,H.K([],[[P.b,P.m]]))
break
default:if(H.ad(!1))H.ar("unknown type for "+a)}},
cL:function(a){var t,s,r
H.d(!0)
t=this.d.length
for(s=this.c,r=0;r<a;++r,t+=4)C.a.l(s,new G.bY(t,t+1,t+2,t+3))},
cM:function(a){var t,s,r,q,p
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.M)(a),++r){q=a[r]
p=new T.q(new Float32Array(3))
p.C(q)
C.a.l(s,p)}},
b8:function(a,b){var t,s,r,q,p,o,n
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.M)(b),++q){p=b[q]
o=new Float32Array(2)
n=p.a
o[1]=n[1]
o[0]=n[0]
r.l(t,new T.F(o))}},
cK:function(a,b){var t,s,r,q,p
t=this.e.h(0,a)
for(s=t&&C.a,r=0;r<4;++r){q=b[r]
p=new T.q(new Float32Array(3))
p.C(q)
s.l(t,p)}},
cN:function(a){var t,s,r,q,p
H.d(!0)
t=this.d
s=t.length
C.a.l(this.c,new G.bY(s,s+1,s+2,s+3))
for(r=0;r<4;++r){q=a[r]
p=new T.q(new Float32Array(3))
p.C(q)
C.a.l(t,p)}},
cR:function(){var t,s,r,q,p,o,n,m,l,k
t=this.b
H.d(t.length>0||this.c.length>0)
s=this.c
r=new Array(t.length*3+s.length*6)
r.fixed$length=Array
q=H.K(r,[P.m])
for(r=t.length,p=0,o=0;n=t.length,o<n;n===r||(0,H.M)(t),++o){m=t[o]
q[p]=m.a
q[p+1]=m.b
q[p+2]=m.c
p+=3}for(t=s.length,o=0;r=s.length,o<r;r===t||(0,H.M)(s),++o){l=s[o]
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
cS:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=this.d
s=new Array(t.length)
s.fixed$length=Array
r=H.K(s,[T.q])
q=new T.q(new Float32Array(H.t(3)))
p=new T.q(new Float32Array(H.t(3)))
for(s=this.b,o=s.length,n=0;n<s.length;s.length===o||(0,H.M)(s),++n){m=s[n]
l=m.a
k=m.b
j=m.c
G.jk(t[l],t[k],t[j],q,p)
i=new T.q(new Float32Array(3))
i.C(p)
r[l]=i
l=new T.q(new Float32Array(3))
l.C(p)
r[k]=l
l=new T.q(new Float32Array(3))
l.C(p)
r[j]=l}for(s=this.c,o=s.length,n=0;n<s.length;s.length===o||(0,H.M)(s),++n){h=s[n]
l=h.a
k=h.b
j=h.c
G.jk(t[l],t[k],t[j],q,p)
i=new T.q(new Float32Array(3))
i.C(p)
r[l]=i
l=new T.q(new Float32Array(3))
l.C(p)
r[k]=l
l=new T.q(new Float32Array(3))
l.C(p)
r[j]=l
l=new T.q(new Float32Array(3))
l.C(p)
r[h.d]=l}this.e.i(0,"aNormal",r)},
k:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gJ(s),r=r.gw(r);r.q();){q=r.gt()
p=$.$get$Q().h(0,q).a
C.a.l(t,H.h(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.ae(t," ")}}
G.d1.prototype={}
G.d0.prototype={}
G.et.prototype={}
G.ev.prototype={
b9:function(a,b,c){var t,s
if(C.e.aC(a,0)===105){if(H.ad(C.b.az(b.length,c)===this.z))H.ar("ChangeAttribute "+this.z)}else H.d(C.b.az(b.length,c)===(this.ch.length/3|0))
this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.dd(t.a,34962,s)
J.iR(t.a,34962,b,35048)},
cT:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
a2:function(a,b,c){var t,s,r,q,p,o
t=J.iO(a,0)===105
if(t&&this.z===0)this.z=C.b.az(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.ii(r.a))
this.b9(a,b,c)
q=$.$get$Q().h(0,a)
if(q==null)throw H.e("Unknown canonical "+a)
p=this.x
if(H.ad(p.E(0,a)))H.ar("unexpected attribute "+a)
o=p.h(0,a)
J.df(r.a,this.e)
r.bY(0,o,t?1:0)
s=s.h(0,a)
p=q.ba()
J.dd(r.a,34962,s)
J.j_(r.a,o,p,5126,!1,0,0)},
k:function(a){var t,s,r
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,t=t.gJ(t),t=t.gw(t);t.q();){r=t.gt()
C.a.l(s,H.h(r)+":"+this.cy.h(0,r).length)}return"MESH["+this.a+"] "+C.a.ae(s,"  ")},
saH:function(a){this.cx=a}}
G.eQ.prototype={
cO:function(a,b){var t=C.b.cp(a,b)
if(this.z===t)return
this.z=t
this.be()},
be:function(){var t,s,r,q,p,o,n
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
t.Z(0,0,1/(p*s))
t.Z(1,1,1/p)
t.Z(2,2,(q+r)/o)
t.Z(3,2,-1)
t.Z(2,3,2*r*q/o)},
bb:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.q(new Float32Array(H.t(3)))
o.M(r,q,p)
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
s=J.u(n)
r=!!s.$isao
k=r?s.gat(n):1
if(!!s.$isq){j=s.gm(n)
m=s.gn(n)
l=s.gI(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
l=s.gI(n)
n=j}else if(!(typeof n==="number")){n=null
m=null
l=null}s=C.c.F(t[0],n)
r=C.c.F(t[4],m)
q=C.c.F(t[8],l)
i=t[12]
h=C.c.F(t[1],n)
g=C.c.F(t[5],m)
f=C.c.F(t[9],l)
e=t[13]
d=C.c.F(t[2],n)
c=C.c.F(t[6],m)
b=C.c.F(t[10],l)
a=t[14]
a0=C.c.F(t[3],n)
a1=C.c.F(t[7],m)
a2=C.c.F(t[11],l)
a3=t[15]
t[12]=s+r+q+i*k
t[13]=h+g+f+e*k
t[14]=d+c+b+a*k
t[15]=a0+a1+a2+a3*k
a3=this.cx
a3.C(this.db)
a3.e_(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.f2.prototype={
bc:function(a){var t,s,r,q,p,o
t=this.e.x
s=a.e.x
if(t.gj(t)!==s.gj(s))return!1
for(r=t.gJ(t),r=r.gw(r);r.q();){q=r.gt()
p=t.h(0,q)
o=s.h(0,q)
if(p==null?o!=null:p!==o)return!1}return!0},
d0:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gj(t)===s.gj(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gJ(s),s=s.gw(s);s.q();){q=s.gt()
if(!t.E(0,q))C.a.l(r,q)}for(t=this.x,s=new P.bE(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.q();){q=s.d
if(!t.W(0,q))C.a.l(r,q)}return r},
d1:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gJ(b),s=s.gw(s),r=this.d,q=this.y,p=this.z,o=0;s.q();){n=s.gt()
switch(J.iO(n,0)){case 117:if(q.E(0,n)){m=b.h(0,n)
if(p.E(0,n))H.i6("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$Q().h(0,n)
if(l==null)H.D("unknown "+n)
H.d(q.E(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.im(r.a,k,m)
else if(!!J.u(m).$isje)J.kP(r.a,k,m)
break
case"float":if(l.c===0)J.kN(r.a,k,m)
else if(!!J.u(m).$ise3)J.kO(r.a,k,m)
break
case"mat4":if(l.c===0){j=H.aB(m,"$isa9").a
J.iZ(r.a,k,!1,j)}else if(!!J.u(m).$ise3)J.iZ(r.a,k,!1,m)
else if(H.ad(!1))H.ar("bad unform: "+n)
break
case"mat3":if(l.c===0){j=C.o.ged(H.aB(m,"$ismm"))
J.iY(r.a,k,!1,j)}else if(!!J.u(m).$ise3)J.iY(r.a,k,!1,m)
else if(H.ad(!1))H.ar("bad unform: "+n)
break
case"vec4":if(l.c===0){j=H.aB(m,"$isao").a
J.iX(r.a,k,j)}else J.iX(r.a,k,m)
break
case"vec3":if(l.c===0){j=H.aB(m,"$isq").a
J.iW(r.a,k,j)}else J.iW(r.a,k,m)
break
case"vec2":if(l.c===0){j=H.aB(m,"$isF").a
J.iV(r.a,k,j)}else J.iV(r.a,k,m)
break
case"sampler2D":case"sampler2DShadow":j=C.b.Y(33984,this.ch)
J.iP(r.a,j)
j=H.aB(m,"$isbA").b
J.de(r.a,3553,j)
j=this.ch
J.im(r.a,k,j)
this.ch=this.ch+1
break
case"samplerCube":H.d(n==="uCubeTexture")
j=C.b.Y(33984,this.ch)
J.iP(r.a,j)
j=H.aB(m,"$isbA").b
J.de(r.a,34067,j)
j=this.ch
J.im(r.a,k,j)
this.ch=this.ch+1
break
default:H.i6("Error: unknow uniform type: "+j)
H.d(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":if(J.E(m,!0))J.bO(r.a,2929)
else J.ij(r.a,2929)
break
case"cStencilFunc":H.aB(m,"$isd1")
j=m.a
if(j===1281)J.ij(r.a,2960)
else{J.bO(r.a,2960)
i=m.b
h=m.c
J.kJ(r.a,j,i,h)}break
case"cDepthWrite":J.kr(r.a,m)
break
case"cBlendEquation":H.aB(m,"$isd0")
j=m.a
if(j===1281)J.ij(r.a,3042)
else{J.bO(r.a,3042)
i=m.b
h=m.c
J.ki(r.a,i,h)
J.kh(r.a,j)}break}++o
break}}s=Date.now()
""+o
new P.aF(1000*(s-new P.be(t,!1).a)).k(0)},
cP:function(a,b,c){var t,s,r,q,p,o,n,m,l
Date.now()
t=this.d
s=this.r
J.kQ(t.a,s)
this.ch=0
this.z.P(0)
for(r=0;r<2;++r){q=b[r]
this.d1(q.a,q.bb())}s=this.Q
s.P(0)
for(p=a.cy,p=p.gJ(p),p=p.gw(p);p.q();)s.l(0,p.gt())
o=this.d0()
if(o.length!==0)P.as("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.h(o)))
J.df(a.d.a,a.e)
n=this.e.f.length>0
s=a.f
p=a.cT()
m=a.Q
l=a.z
t.toString
if(n)J.kg(t.a,s)
if(m!==-1)if(l>1)J.kv(t.a,s,p,m,0,l)
else J.ku(t.a,s,p,m,0)
else if(l>1)J.kt(t.a,s,0,p,l)
else J.ks(t.a,s,0,p)
if(n)J.ky(t.a)},
a4:function(a,b){return this.cP(a,b,null)},
cW:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j
t=this.d
s=this.e
r=s.b
q=this.f
p=q.b
o=s.f
n=J.ko(t.a)
m=G.jI(t.a,35633,r)
J.iQ(t.a,n,m)
l=G.jI(t.a,35632,p)
J.iQ(t.a,n,l)
if(o.length>0)J.kM(t.a,n,o,35980)
J.kG(t.a,n)
if(!J.kF(t.a,n,35714))H.D(J.kE(t.a,n))
this.r=n
this.sd5(0,P.ld(s.c,null))
for(s=s.d,r=s.length,p=this.y,k=0;k<s.length;s.length===r||(0,H.M)(s),++k){j=s[k]
o=this.r
p.i(0,j,J.iU(t.a,o,j))}for(s=q.d,r=s.length,k=0;k<s.length;s.length===r||(0,H.M)(s),++k){j=s[k]
q=this.r
p.i(0,j,J.iU(t.a,q,j))}},
sd5:function(a,b){this.x=b}}
G.i.prototype={
ba:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.d(!1)
return-1}}}
G.aa.prototype={
ak:function(a){var t,s,r,q,p
H.d(this.b==null)
for(t=a.length,s=this.c,r=this.x,q=0;q<a.length;a.length===t||(0,H.M)(a),++q){p=a[q]
H.d($.$get$Q().E(0,p))
H.d(!C.a.W(s,p))
C.a.l(s,p)
r.i(0,p,this.r);++this.r}C.a.ax(s)},
a3:function(a){var t,s,r,q
H.d(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.M)(a),++r){q=a[r]
if(H.ad($.$get$Q().E(0,q)))H.ar("missing uniform "+q)
H.d(!C.a.W(s,q))
C.a.l(s,q)}C.a.ax(s)},
N:function(a){var t,s,r
H.d(this.b==null)
for(t=this.e,s=0;s<1;++s){r=a[s]
H.d($.$get$Q().E(0,r))
H.d(!C.a.W(t,r))
C.a.l(t,r)}C.a.ax(t)},
cY:function(a,b){H.d(this.b==null)
this.b=this.a5(!0,a,b)},
bd:function(a){return this.cY(a,null)},
cX:function(a,b){H.d(this.b==null)
this.b=this.a5(!1,a,b)},
aB:function(a){return this.cX(a,null)},
a5:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.d(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.M)(t),++o){n=t[o]
m=$.$get$Q().h(0,n)
C.a.l(q,"layout (location="+H.h(p.h(0,n))+") in "+m.a+" "+H.h(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.M)(t),++o){k=t[o]
m=$.$get$Q().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.h(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.M)(t),++o){k=t[o]
m=$.$get$Q().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.h(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.M)(t),++o){k=t[o]
m=$.$get$Q().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.h(k)+j+";")}C.a.l(q,"")
if(a)C.a.l(q,"void main(void) {")
C.a.dn(q,b)
if(a)C.a.l(q,"}")
return C.a.ae(q,"\n")}}
G.fe.prototype={}
G.fu.prototype={}
G.bA.prototype={
k:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.fG.prototype={
k:function(a){return"TypedTexture["+this.a+", "+this.x+", "+H.h(this.f)+" X "+H.h(this.r)+"]"},
d_:function(a,b,c,d,e,f){var t,s,r,q,p
t=this.d
s=this.c
J.de(t.a,s,this.b)
J.kL(t.a,3553,1,this.x,this.f,this.r)
r=this.e
q=r.e
if(q!==1)J.kK(t.a,s,34046,q)
q=r.r
J.di(t.a,s,10240,q)
q=r.f
J.di(t.a,s,10241,q)
if(r.b){J.di(t.a,s,10242,33071)
J.di(t.a,s,10243,33071)}p=J.kD(t.a)
if(H.ad(p===0))H.ar("texture error "+H.h(p))
J.de(t.a,s,null)}}
A.hT.prototype={
$2:function(a,b){var t=536870911&a+J.ag(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(){return{func:1,args:[P.m,P.p]}}}
T.a9.prototype={
Z:function(a,b,c){H.d(a<4)
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
k:function(a){return"[0] "+this.aj(0).k(0)+"\n[1] "+this.aj(1).k(0)+"\n[2] "+this.aj(2).k(0)+"\n[3] "+this.aj(3).k(0)+"\n"},
h:function(a,b){return this.a[b]},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.a9){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gu:function(a){return A.hS(this.a)},
aj:function(a){var t,s
t=new Float32Array(H.t(4))
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.ao(t)},
a_:function(){var t=this.a
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
e_:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.F.prototype={
k:function(a){var t=this.a
return"["+H.h(t[0])+","+H.h(t[1])+"]"},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.F){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gu:function(a){return A.hS(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.q.prototype={
M:function(a,b,c){var t=this.a
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
return"["+H.h(t[0])+","+H.h(t[1])+","+H.h(t[2])+"]"},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.q){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gu:function(a){return A.hS(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){return Math.sqrt(this.gas())},
gas:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
af:function(a){var t,s,r
t=Math.sqrt(this.gas())
if(t===0)return 0
s=1/t
r=this.a
r[0]=r[0]*s
r[1]=r[1]*s
r[2]=r[2]*s
return t},
aR:function(a){var t,s
t=a.a
s=this.a
return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]},
ap:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.q(new Float32Array(H.t(3)))
t.M(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
ay:function(a){var t,s
t=a.a
s=this.a
s[0]=s[0]-t[0]
s[1]=s[1]-t[1]
s[2]=s[2]-t[2]},
cs:function(a,b){var t=this.a
t[2]=t[2]*b
t[1]=t[1]*b
t[0]=t[0]*b},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gI:function(a){return this.a[2]}}
T.ao.prototype={
k:function(a){var t=this.a
return H.h(t[0])+","+H.h(t[1])+","+H.h(t[2])+","+H.h(t[3])},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.ao){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gu:function(a){return A.hS(this.a)},
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
gat:function(a){return this.a[3]}}
Q.i3.prototype={
$1:function(b2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
this.a.a=b2+0
t=this.b
t.go=H.V(t.go+0.01)
s=t.k4
if(s.h(0,37)!=null)t.go=H.V(t.go+0.03)
else if(s.h(0,39)!=null)t.go=H.V(t.go-0.03)
if(s.h(0,38)!=null)t.id=H.V(t.id+0.03)
else if(s.h(0,40)!=null)t.id=H.V(t.id-0.03)
if(s.h(0,33)!=null)t.fy=H.V(t.fy*0.99)
else if(s.h(0,34)!=null)t.fy=H.V(t.fy*1.01)
if(s.h(0,32)!=null){t.go=0
t.id=0}s=H.V(C.c.dw(t.id,-1.4707963267948965,1.4707963267948965))
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
m=new T.q(new Float32Array(H.t(3)))
m.M(0,1,0)
l=t.e
k=l.a
k[0]=n[12]
k[1]=n[13]
k[2]=n[14]
k=new Float32Array(H.t(3))
j=new T.q(k)
j.C(l)
j.ay(q)
j.af(0)
i=m.ap(j)
i.af(0)
h=j.ap(i)
h.af(0)
q=i.aR(l)
g=h.aR(l)
l=j.aR(l)
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
o=Math.sqrt(o.gas())
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
d=this.db
d.d.i(0,"uTime",b2/1000)
f=this.d
a1=this.e
this.r.a1(17664,0,0,f,a1)
n=this.c
this.z.a4(this.dx,[n,d])
d=this.y
a0=C.b.D(f,2)
a=C.b.D(a1,2)
d.a1(17664,0,0,a0,a)
b=$.$get$k0().valueAsNumber
c=this.dy
e=new Float32Array(H.t(2))
e[0]=b
e[1]=b+0.01
c.d.i(0,"uRange",new T.F(e))
e=this.cy
this.Q.a4(e,[n,c])
this.x.a1(17664,0,0,a0,a)
c=this.ch
c.a4(e,[n,this.fr])
d.a1(17664,0,0,a0,a)
c.a4(e,[n,this.fx])
this.f.a1(17664,0,0,f,a1)
a1=this.fy
a1.d.i(0,"uScale",$.$get$jZ().valueAsNumber)
this.cx.a4(e,[n,a1])
C.R.gdr(window).c7(this)},
$S:function(){return{func:1,v:true,args:[P.S]}}}
J.a.prototype.cH=J.a.prototype.k
J.bo.prototype.cI=J.bo.prototype.k;(function installTearOffs(){installTearOff(H.aU.prototype,"gdW",0,0,0,null,["$0"],["ar"],0)
installTearOff(H.ac.prototype,"gct",0,0,0,null,["$1"],["H"],2)
installTearOff(H.aT.prototype,"gdE",0,0,0,null,["$1"],["R"],2)
installTearOff(P,"lN",1,0,0,null,["$1"],["lx"],1)
installTearOff(P,"lO",1,0,0,null,["$1"],["ly"],1)
installTearOff(P,"lP",1,0,0,null,["$1"],["lz"],1)
installTearOff(P,"jU",1,0,0,null,["$0"],["lL"],0)
installTearOff(P.aq.prototype,"gd7",0,0,0,null,["$2","$1"],["al","d8"],3)
installTearOff(P,"lU",1,0,0,null,["$2"],["kY"],4)
installTearOff(W,"m_",1,0,0,null,["$1"],["l0"],5)
installTearOff(Q,"jV",1,0,0,null,["$0"],["m7"],0)})();(function inheritance(){inherit(P.p,null)
var t=P.p
inherit(H.iu,t)
inherit(J.a,t)
inherit(J.dm,t)
inherit(P.ai,t)
inherit(H.cK,t)
inherit(P.cH,t)
inherit(H.bZ,t)
inherit(H.aZ,t)
inherit(H.ho,t)
inherit(H.aU,t)
inherit(H.h1,t)
inherit(H.aV,t)
inherit(H.hn,t)
inherit(H.fW,t)
inherit(H.b3,t)
inherit(H.fw,t)
inherit(H.ah,t)
inherit(H.ac,t)
inherit(H.aT,t)
inherit(H.f1,t)
inherit(H.fD,t)
inherit(P.b_,t)
inherit(H.d8,t)
inherit(H.ax,t)
inherit(H.a8,t)
inherit(H.ek,t)
inherit(H.em,t)
inherit(P.fY,t)
inherit(P.d5,t)
inherit(P.aq,t)
inherit(P.d3,t)
inherit(P.fj,t)
inherit(P.fk,t)
inherit(P.aY,t)
inherit(P.hF,t)
inherit(P.fb,t)
inherit(P.hl,t)
inherit(P.bE,t)
inherit(P.w,t)
inherit(P.hm,t)
inherit(P.aX,t)
inherit(P.G,t)
inherit(P.be,t)
inherit(P.S,t)
inherit(P.aF,t)
inherit(P.cZ,t)
inherit(P.h6,t)
inherit(P.dH,t)
inherit(P.b,t)
inherit(P.aw,t)
inherit(P.aM,t)
inherit(P.bw,t)
inherit(P.v,t)
inherit(P.by,t)
inherit(W.dw,t)
inherit(W.z,t)
inherit(W.e2,t)
inherit(P.hq,t)
inherit(G.ey,t)
inherit(G.du,t)
inherit(G.c_,t)
inherit(G.bY,t)
inherit(G.c0,t)
inherit(G.d1,t)
inherit(G.d0,t)
inherit(G.i,t)
inherit(G.aa,t)
inherit(G.fu,t)
inherit(G.bA,t)
inherit(T.a9,t)
inherit(T.F,t)
inherit(T.q,t)
inherit(T.ao,t)
t=J.a
inherit(J.ef,t)
inherit(J.cJ,t)
inherit(J.bo,t)
inherit(J.aG,t)
inherit(J.b0,t)
inherit(J.aH,t)
inherit(H.bq,t)
inherit(H.b2,t)
inherit(W.f,t)
inherit(W.X,t)
inherit(W.bQ,t)
inherit(W.ds,t)
inherit(W.y,t)
inherit(W.c2,t)
inherit(W.dy,t)
inherit(W.dz,t)
inherit(W.dA,t)
inherit(W.bU,t)
inherit(W.bV,t)
inherit(W.ch,t)
inherit(W.dD,t)
inherit(W.k,t)
inherit(W.cj,t)
inherit(W.Z,t)
inherit(W.e7,t)
inherit(W.ce,t)
inherit(W.eo,t)
inherit(W.eu,t)
inherit(W.a_,t)
inherit(W.cm,t)
inherit(W.eH,t)
inherit(W.c8,t)
inherit(W.eO,t)
inherit(W.b4,t)
inherit(W.a0,t)
inherit(W.ca,t)
inherit(W.ab,t)
inherit(W.a2,t)
inherit(W.cb,t)
inherit(W.a3,t)
inherit(W.fi,t)
inherit(W.T,t)
inherit(W.c9,t)
inherit(W.fv,t)
inherit(W.a5,t)
inherit(W.c6,t)
inherit(W.fA,t)
inherit(W.fI,t)
inherit(W.fN,t)
inherit(W.fX,t)
inherit(W.c3,t)
inherit(W.ck,t)
inherit(W.ci,t)
inherit(W.cg,t)
inherit(W.c5,t)
inherit(W.cc,t)
inherit(W.hD,t)
inherit(W.hE,t)
inherit(P.aj,t)
inherit(P.cf,t)
inherit(P.ak,t)
inherit(P.c7,t)
inherit(P.eU,t)
inherit(P.eV,t)
inherit(P.f_,t)
inherit(P.c4,t)
inherit(P.al,t)
inherit(P.cd,t)
inherit(P.fM,t)
inherit(P.dn,t)
inherit(P.f4,t)
inherit(P.f5,t)
inherit(P.hC,t)
inherit(P.cl,t)
t=J.bo
inherit(J.eS,t)
inherit(J.aQ,t)
inherit(J.aI,t)
inherit(J.it,J.aG)
t=J.b0
inherit(J.cI,t)
inherit(J.eg,t)
t=P.ai
inherit(H.c,t)
inherit(H.cL,t)
t=H.c
inherit(H.b1,t)
inherit(H.el,t)
inherit(H.dG,H.cL)
inherit(H.ep,P.cH)
t=H.b1
inherit(H.cM,t)
inherit(P.en,t)
t=H.aZ
inherit(H.id,t)
inherit(H.ie,t)
inherit(H.hj,t)
inherit(H.h2,t)
inherit(H.ec,t)
inherit(H.ed,t)
inherit(H.hp,t)
inherit(H.fx,t)
inherit(H.fy,t)
inherit(H.ig,t)
inherit(H.hY,t)
inherit(H.hZ,t)
inherit(H.i_,t)
inherit(H.i0,t)
inherit(H.i1,t)
inherit(H.fq,t)
inherit(H.eh,t)
inherit(H.hU,t)
inherit(H.hV,t)
inherit(H.hW,t)
inherit(P.fT,t)
inherit(P.fS,t)
inherit(P.fU,t)
inherit(P.fV,t)
inherit(P.h7,t)
inherit(P.hb,t)
inherit(P.h8,t)
inherit(P.h9,t)
inherit(P.ha,t)
inherit(P.he,t)
inherit(P.hf,t)
inherit(P.hd,t)
inherit(P.hc,t)
inherit(P.fl,t)
inherit(P.fm,t)
inherit(P.hI,t)
inherit(P.ht,t)
inherit(P.hs,t)
inherit(P.hu,t)
inherit(P.eq,t)
inherit(P.dE,t)
inherit(P.dF,t)
inherit(W.fP,t)
inherit(W.h5,t)
inherit(P.hL,t)
inherit(B.i8,t)
inherit(B.i9,t)
inherit(B.ia,t)
inherit(B.ib,t)
inherit(B.ic,t)
inherit(B.eK,t)
inherit(B.eL,t)
inherit(B.eM,t)
inherit(B.eN,t)
inherit(A.hT,t)
inherit(Q.i3,t)
t=H.fW
inherit(H.b5,t)
inherit(H.bG,t)
t=P.b_
inherit(H.cT,t)
inherit(H.ei,t)
inherit(H.fH,t)
inherit(H.fF,t)
inherit(H.dt,t)
inherit(H.f7,t)
inherit(P.bP,t)
inherit(P.cU,t)
inherit(P.au,t)
inherit(P.r,t)
inherit(P.d2,t)
inherit(P.bx,t)
inherit(P.a6,t)
inherit(P.dx,t)
t=H.fq
inherit(H.fh,t)
inherit(H.bc,t)
inherit(H.fR,P.bP)
t=H.b2
inherit(H.ez,t)
inherit(H.cO,t)
t=H.cO
inherit(H.bs,t)
inherit(H.br,t)
inherit(H.bt,H.bs)
inherit(H.cP,H.bt)
inherit(H.bu,H.br)
inherit(H.cQ,H.bu)
t=H.cP
inherit(H.cN,t)
inherit(H.eA,t)
t=H.cQ
inherit(H.eB,t)
inherit(H.eC,t)
inherit(H.eD,t)
inherit(H.eE,t)
inherit(H.eF,t)
inherit(H.cR,t)
inherit(H.eG,t)
inherit(P.hB,P.fY)
inherit(P.hr,P.hF)
inherit(P.d6,H.a8)
inherit(P.fa,P.fb)
inherit(P.hi,P.fa)
inherit(P.hk,P.hi)
t=P.S
inherit(P.L,t)
inherit(P.m,t)
t=P.au
inherit(P.cW,t)
inherit(P.ea,t)
t=W.f
inherit(W.x,t)
inherit(W.bg,t)
inherit(W.dv,t)
inherit(W.e0,t)
inherit(W.bn,t)
inherit(W.bp,t)
inherit(W.eX,t)
inherit(W.cX,t)
inherit(W.fc,t)
inherit(W.a1,t)
inherit(W.bh,t)
inherit(W.a4,t)
inherit(W.U,t)
inherit(W.bi,t)
inherit(W.fK,t)
inherit(W.fO,t)
inherit(W.bB,t)
inherit(W.fQ,t)
inherit(W.aS,t)
inherit(W.hy,t)
t=W.x
inherit(W.bW,t)
inherit(W.aE,t)
inherit(W.bf,t)
inherit(W.bT,t)
inherit(W.h_,t)
t=W.bW
inherit(W.j,t)
inherit(P.I,t)
t=W.j
inherit(W.dk,t)
inherit(W.dl,t)
inherit(W.dq,t)
inherit(W.bR,t)
inherit(W.e5,t)
inherit(W.eb,t)
inherit(W.f9,t)
inherit(W.hh,t)
inherit(W.bk,W.bg)
inherit(W.dp,W.bk)
inherit(W.bd,W.c2)
inherit(W.dB,W.bU)
inherit(W.cE,W.ch)
inherit(W.dC,W.cE)
inherit(W.Y,W.bQ)
inherit(W.cC,W.cj)
inherit(W.e_,W.cC)
inherit(W.cA,W.ce)
inherit(W.bm,W.cA)
inherit(W.c1,W.bf)
inherit(W.e8,W.bn)
inherit(W.ay,W.k)
t=W.ay
inherit(W.aJ,t)
inherit(W.N,t)
inherit(W.aO,t)
inherit(W.ew,W.bp)
inherit(W.cz,W.cm)
inherit(W.ex,W.cz)
inherit(W.co,W.c8)
inherit(W.cS,W.co)
t=W.b4
inherit(W.eR,t)
inherit(W.f6,t)
inherit(W.fC,t)
inherit(W.cy,W.ca)
inherit(W.eT,W.cy)
inherit(W.eW,W.ab)
inherit(W.bj,W.bh)
inherit(W.fd,W.bj)
inherit(W.cn,W.cb)
inherit(W.ff,W.cn)
inherit(W.cp,W.c9)
inherit(W.fs,W.cp)
inherit(W.bl,W.bi)
inherit(W.ft,W.bl)
inherit(W.cr,W.c6)
inherit(W.fz,W.cr)
inherit(W.aR,W.N)
inherit(W.cB,W.c3)
inherit(W.d4,W.cB)
inherit(W.cD,W.ck)
inherit(W.fZ,W.cD)
inherit(W.h0,W.bV)
inherit(W.cF,W.ci)
inherit(W.hg,W.cF)
inherit(W.cG,W.cg)
inherit(W.d7,W.cG)
inherit(W.ct,W.c5)
inherit(W.hz,W.ct)
inherit(W.cq,W.cc)
inherit(W.hA,W.cq)
inherit(W.h3,P.fj)
inherit(W.iC,W.h3)
inherit(W.h4,P.fk)
inherit(P.H,P.hq)
t=P.I
inherit(P.av,t)
inherit(P.aD,t)
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
inherit(P.dY,t)
inherit(P.dZ,t)
inherit(P.e1,t)
inherit(P.er,t)
inherit(P.es,t)
inherit(P.eP,t)
inherit(P.f8,t)
inherit(P.fp,t)
inherit(P.fL,t)
inherit(P.bD,t)
inherit(P.hv,t)
inherit(P.hw,t)
inherit(P.hx,t)
t=P.av
inherit(P.dj,t)
inherit(P.e4,t)
inherit(P.a7,t)
inherit(P.e9,t)
inherit(P.fo,t)
inherit(P.d_,t)
inherit(P.fJ,t)
inherit(P.cw,P.cf)
inherit(P.ej,P.cw)
inherit(P.cv,P.c7)
inherit(P.eI,P.cv)
inherit(P.f0,P.a7)
inherit(P.cu,P.c4)
inherit(P.fn,P.cu)
t=P.d_
inherit(P.fr,t)
inherit(P.bz,t)
inherit(P.cs,P.cd)
inherit(P.fB,P.cs)
inherit(P.cx,P.cl)
inherit(P.fg,P.cx)
t=G.ey
inherit(G.fe,t)
inherit(G.aP,t)
inherit(G.ev,t)
inherit(G.f2,t)
inherit(G.dr,G.fe)
inherit(B.eJ,G.dr)
t=G.aP
inherit(G.et,t)
inherit(G.eQ,t)
inherit(G.fG,G.bA)
mixin(H.br,P.w)
mixin(H.bs,P.w)
mixin(H.bt,H.bZ)
mixin(H.bu,H.bZ)
mixin(W.bg,P.w)
mixin(W.bh,P.w)
mixin(W.bi,P.w)
mixin(W.bj,W.z)
mixin(W.bk,W.z)
mixin(W.bl,W.z)
mixin(W.c2,W.dw)
mixin(W.cm,P.w)
mixin(W.c8,P.w)
mixin(W.c5,P.w)
mixin(W.cg,P.w)
mixin(W.ch,P.w)
mixin(W.ci,P.w)
mixin(W.cj,P.w)
mixin(W.ck,P.w)
mixin(W.c3,P.w)
mixin(W.c6,P.w)
mixin(W.c9,P.w)
mixin(W.ca,P.w)
mixin(W.cb,P.w)
mixin(W.cc,P.w)
mixin(W.ce,P.w)
mixin(W.cn,W.z)
mixin(W.co,W.z)
mixin(W.cp,W.z)
mixin(W.cz,W.z)
mixin(W.cA,W.z)
mixin(W.cy,W.z)
mixin(W.cD,W.z)
mixin(W.cE,W.z)
mixin(W.cF,W.z)
mixin(W.cG,W.z)
mixin(W.cq,W.z)
mixin(W.cr,W.z)
mixin(W.ct,W.z)
mixin(W.cB,W.z)
mixin(W.cC,W.z)
mixin(P.cf,P.w)
mixin(P.c7,P.w)
mixin(P.c4,P.w)
mixin(P.cd,P.w)
mixin(P.cs,W.z)
mixin(P.cu,W.z)
mixin(P.cv,W.z)
mixin(P.cw,W.z)
mixin(P.cl,P.w)
mixin(P.cx,W.z)})();(function constants(){C.m=W.bR.prototype
C.f=W.c1.prototype
C.n=J.a.prototype
C.a=J.aG.prototype
C.b=J.cI.prototype
C.o=J.cJ.prototype
C.c=J.b0.prototype
C.e=J.aH.prototype
C.w=J.aI.prototype
C.x=H.cN.prototype
C.l=J.eS.prototype
C.h=J.aQ.prototype
C.Q=W.aR.prototype
C.R=W.bB.prototype
C.d=new P.hr()
C.i=new P.aF(0)
C.p=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.q=function(hooks) {
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
C.j=function(hooks) { return hooks; }

C.r=function(getTagFallback) {
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
C.t=function() {
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
C.u=function(hooks) {
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
C.v=function(hooks) {
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
C.k=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.y=H.J("mh")
C.z=H.J("mi")
C.A=H.J("e3")
C.B=H.J("mj")
C.C=H.J("mk")
C.D=H.J("je")
C.E=H.J("ml")
C.F=H.J("jh")
C.G=H.J("aM")
C.H=H.J("v")
C.I=H.J("jE")
C.J=H.J("jF")
C.K=H.J("mn")
C.L=H.J("jG")
C.M=H.J("aX")
C.N=H.J("L")
C.O=H.J("m")
C.P=H.J("S")})();(function staticFields(){$.jm="$cachedFunction"
$.jn="$cachedInvocation"
$.j6=null
$.j4=null
$.iD=!1
$.iH=null
$.jP=null
$.kb=null
$.hO=null
$.hX=null
$.iI=null
$.b6=null
$.bH=null
$.bI=null
$.iE=!1
$.B=C.d
$.jb=0
$.lR=0
$.lS=0
$.iL=0
$.k8=0
$.bM=0
$.bN=0
$.mf=!1
$.k_=0})();(function lazyInitializers(){lazy($,"ja","$get$ja",function(){return H.k2("_$dart_dartClosure")})
lazy($,"iv","$get$iv",function(){return H.k2("_$dart_js")})
lazy($,"jf","$get$jf",function(){return H.l9()})
lazy($,"jg","$get$jg",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.jb
$.jb=t+1
t="expando$key$"+t}return new P.dH(null,t,[P.m])})
lazy($,"js","$get$js",function(){return H.am(H.fE({
toString:function(){return"$receiver$"}}))})
lazy($,"jt","$get$jt",function(){return H.am(H.fE({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"ju","$get$ju",function(){return H.am(H.fE(null))})
lazy($,"jv","$get$jv",function(){return H.am(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"jz","$get$jz",function(){return H.am(H.fE(void 0))})
lazy($,"jA","$get$jA",function(){return H.am(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"jx","$get$jx",function(){return H.am(H.jy(null))})
lazy($,"jw","$get$jw",function(){return H.am(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"jC","$get$jC",function(){return H.am(H.jy(void 0))})
lazy($,"jB","$get$jB",function(){return H.am(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"iB","$get$iB",function(){return P.lw()})
lazy($,"bJ","$get$bJ",function(){return[]})
lazy($,"hN","$get$hN",function(){return P.ji(P.m,P.aX)})
lazy($,"bL","$get$bL",function(){return P.ji(P.v,P.aX)})
lazy($,"jp","$get$jp",function(){return new G.d1(1281,0,4294967295)})
lazy($,"j2","$get$j2",function(){return new G.d0(1281,1281,1281)})
lazy($,"Q","$get$Q",function(){return P.aK(["cBlendEquation",new G.i("","",0),"cDepthWrite",new G.i("","",0),"cDepthTest",new G.i("","",0),"cStencilFunc",new G.i("","",0),"tPosition",new G.i("vec3","",0),"tSpeed",new G.i("vec3","",0),"tForce",new G.i("vec3","",0),"aColors",new G.i("vec3","per vertex color",0),"aColorAlpha",new G.i("vec4","per vertex color",0),"aPosition",new G.i("vec3","vertex coordinates",0),"aTexUV",new G.i("vec2","texture uvs",0),"aNormal",new G.i("vec3","vertex normals",0),"aBinormal",new G.i("vec3","vertex binormals",0),"aCenter",new G.i("vec4","for wireframe",0),"aPointSize",new G.i("float","",0),"aBoneIndex",new G.i("vec4","",0),"aBoneWeight",new G.i("vec4","",0),"aTangent",new G.i("vec3","vertex tangents",0),"aBitangent",new G.i("vec3","vertex btangents",0),"iaRotation",new G.i("vec4","",0),"iaTranslation",new G.i("vec3","",0),"iaScale",new G.i("vec3","",0),"vColor",new G.i("vec3","per vertex color",0),"vTexUV",new G.i("vec2","",0),"vLightWeighting",new G.i("vec3","",0),"vNormal",new G.i("vec3","",0),"vPosition",new G.i("vec3","vertex coordinates",0),"vPositionFromLight",new G.i("vec4","delta from light",0),"vCenter",new G.i("vec4","for wireframe",0),"vDepth",new G.i("float","depth for shadowmaps",0),"uTransformationMatrix",new G.i("mat4","",0),"uModelMatrix",new G.i("mat4","",0),"uNormalMatrix",new G.i("mat3","",0),"uConvolutionMatrix",new G.i("mat3","",0),"uPerspectiveViewMatrix",new G.i("mat4","",0),"uLightPerspectiveViewMatrix",new G.i("mat4","",0),"uShadowMap",new G.i("sampler2DShadow","",0),"uTexture",new G.i("sampler2D","",0),"uTexture2",new G.i("sampler2D","",0),"uTexture3",new G.i("sampler2D","",0),"uTexture4",new G.i("sampler2D","",0),"uSpecularMap",new G.i("sampler2D","",0),"uNormalMap",new G.i("sampler2D","",0),"uBumpMap",new G.i("sampler2D","",0),"uDepthMap",new G.i("sampler2D","",0),"uCubeTexture",new G.i("samplerCube","",0),"uAnimationTable",new G.i("sampler2D","",0),"uTime",new G.i("float","time since program start in sec",0),"uCameraNear",new G.i("float","",0),"uCameraFar",new G.i("float","",0),"uFogNear",new G.i("float","",0),"uFogFar",new G.i("float","",0),"uPointSize",new G.i("float","",0),"uScale",new G.i("float","",0),"uAngle",new G.i("float","",0),"uCanvasSize",new G.i("vec2","",0),"uCenter2",new G.i("vec2","",0),"uCutOff",new G.i("float","",0),"uShininess",new G.i("float","",0),"uShadowBias",new G.i("float","",0),"uOpacity",new G.i("float","",0),"uColor",new G.i("vec3","",0),"uAmbientDiffuse",new G.i("vec3","",0),"uColorEmissive",new G.i("vec3","",0),"uColorSpecular",new G.i("vec3","",0),"uColorDiffuse",new G.i("vec3","",0),"uColorAlpha",new G.i("vec4","",0),"uColorAlpha2",new G.i("vec4","",0),"uEyePosition",new G.i("vec3","",0),"uMaterial",new G.i("mat4","",0),"uRange",new G.i("vec2","",0),"uDirection",new G.i("vec2","",0),"uBoneMatrices",new G.i("mat4","",128),"uLightDescs",new G.i("mat4","",4),"uLightCount",new G.i("float","",0),"uLightTypes",new G.i("float","",4),"uBumpScale",new G.i("float","for bump maps",0),"uNormalScale",new G.i("float","for normal maps",0)])})
lazy($,"jr","$get$jr",function(){var t=new G.fu(!1,!1,!1,!0,1,9729,9729)
t.d=!1
t.b=!0
t.f=9728
t.r=9728
return t})
lazy($,"j9","$get$j9",function(){return T.lu(1,1,1)})
lazy($,"jR","$get$jR",function(){var t=new G.aa("uv-passthru",null,[],[],[],[],0,P.C())
t.ak(["aPosition","aTexUV"])
t.N(["vTexUV"])
t.bd(["gl_Position = vec4(aPosition, 1.0);","vTexUV = aTexUV;"])
return t})
lazy($,"jQ","$get$jQ",function(){var t=new G.aa("BloomPassF",null,[],[],[],[],0,P.C())
t.N(["vTexUV"])
t.a3(["uTexture","uTexture2","uScale","uColor"])
t.aB(["void main() {\n\toFragColor = texture(uTexture, vTexUV) +\n\t                uScale *\n\t                vec4(uColor, 1.0) *\n\t                texture(uTexture2, vTexUV);\n}\n"])
return t})
lazy($,"jX","$get$jX",function(){var t=new G.aa("uv-passthru",null,[],[],[],[],0,P.C())
t.ak(["aPosition","aTexUV"])
t.N(["vTexUV"])
t.bd(["gl_Position = vec4(aPosition, 1.0);","vTexUV = aTexUV;"])
return t})
lazy($,"k7","$get$k7",function(){var t=new G.aa("LuminosityHighPassF",null,[],[],[],[],0,P.C())
t.N(["vTexUV"])
t.a3(["uRange","uColorAlpha","uTexture"])
t.aB(["\n// http://stackoverflow.com/questions/596216/formula-to-determine-brightness-of-rgb-color\nfloat RGB2Luma(vec3 rgb) { return dot(rgb, vec3(0.212, 0.715, 0.072)); }\n// float RGB2Luma(vec3 rgb) { return dot(rgb, vec3(0.299, 0.587, 0.114)); }\n\nvoid main() {\n    vec4 color = texture(uTexture, vTexUV);\n    float luma = RGB2Luma(color.rgb);\n    float alpha = smoothstep(uRange.x, uRange.y, luma);\n    oFragColor = mix(uColorAlpha, color, alpha );\n}\n"])
return t})
lazy($,"ka","$get$ka",function(){var t=new G.aa("PerlinNoiseV",null,[],[],[],[],0,P.C())
t.ak(["aPosition"])
t.N(["vNormal"])
t.a3(["uPerspectiveViewMatrix","uModelMatrix","uTime"])
t.aB(["vec3 mod289(vec3 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x)\n{\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec3 fade(vec3 t) {\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\n\n// Classic Perlin noise, periodic variant\nfloat pnoise(vec3 P, vec3 rep)\n{\n  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \n  return 2.2 * n_xyz;\n}\n","void main() {\n    vec3 normal = normalize( aPosition);\n    float f = 0.5 * pnoise( normal + uTime/3.0, vec3( 10.0 ) );\n    //vNormal = aPosition + f * normal;\n    //vNormal = f*normal;\n    vNormal = normal;\n    gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);\n}\n"])
return t})
lazy($,"i5","$get$i5",function(){return T.jH()})
lazy($,"iM","$get$iM",function(){return T.jH()})
lazy($,"k0","$get$k0",function(){return C.f.aW(W.jW(),"#luminance")})
lazy($,"jZ","$get$jZ",function(){return C.f.aW(W.jW(),"#intensity")})})()
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
mangledGlobalNames:{m:"int",L:"double",S:"num",v:"String",aX:"bool",aM:"Null",b:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,v:true,args:[P.p],opt:[P.bw]},{func:1,ret:P.m,args:[P.G,P.G]},{func:1,ret:P.v,args:[W.f]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationTimeline:J.a,AppBannerPromptResult:J.a,BarProp:J.a,Body:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CHROMIUMValuebuffer:J.a,CircularGeofencingRegion:J.a,Client:J.a,Clients:J.a,CompositorProxy:J.a,ConsoleBase:J.a,Coordinates:J.a,Credential:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMStringMap:J.a,EffectModel:J.a,Entry:J.a,FederatedCredential:J.a,FileEntry:J.a,FileError:J.a,Stream:J.a,DOMFileSystem:J.a,FontFace:J.a,FormData:J.a,GamepadButton:J.a,Geofencing:J.a,GeofencingRegion:J.a,Geolocation:J.a,Geoposition:J.a,Headers:J.a,HMDVRDevice:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageData:J.a,InjectedScriptHost:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,KeyframeEffect:J.a,MediaDeviceInfo:J.a,MediaDevices:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaMetadata:J.a,MediaSession:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigatorStorageUtils:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,OffscreenCanvas:J.a,PasswordCredential:J.a,PerformanceCompositeTiming:J.a,PerformanceEntry:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformanceRenderTiming:J.a,PerformanceResourceTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PositionError:J.a,PositionSensorVRDevice:J.a,Presentation:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,Range:J.a,ReadableByteStream:J.a,ReadableByteStreamReader:J.a,ReadableStreamReader:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,Selection:J.a,ServicePort:J.a,SharedArrayBuffer:J.a,SourceInfo:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StorageInfo:J.a,StorageManager:J.a,StorageQuota:J.a,StyleMedia:J.a,StylePropertyMap:J.a,SyncManager:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRDevice:J.a,VREyeParameters:J.a,VRFieldOfView:J.a,VRPositionState:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkerConsole:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothAdvertisingData:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,NFC:J.a,PagePopupController:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WebKitCSSMatrix:J.a,Worklet:J.a,WorkletGlobalScope:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPreserveAspectRatio:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,CHROMIUMSubscribeUniform:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTDisjointTimerQuery:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bq,ArrayBufferView:H.b2,DataView:H.ez,Float32Array:H.cN,Float64Array:H.eA,Int16Array:H.eB,Int32Array:H.eC,Int8Array:H.eD,Uint16Array:H.eE,Uint32Array:H.eF,Uint8ClampedArray:H.cR,CanvasPixelArray:H.cR,Uint8Array:H.eG,HTMLAudioElement:W.j,HTMLBRElement:W.j,HTMLBaseElement:W.j,HTMLButtonElement:W.j,HTMLContentElement:W.j,HTMLDListElement:W.j,HTMLDataListElement:W.j,HTMLDetailsElement:W.j,HTMLDialogElement:W.j,HTMLDivElement:W.j,HTMLEmbedElement:W.j,HTMLFieldSetElement:W.j,HTMLHRElement:W.j,HTMLHeadElement:W.j,HTMLHeadingElement:W.j,HTMLHtmlElement:W.j,HTMLIFrameElement:W.j,HTMLImageElement:W.j,HTMLKeygenElement:W.j,HTMLLIElement:W.j,HTMLLabelElement:W.j,HTMLLegendElement:W.j,HTMLLinkElement:W.j,HTMLMapElement:W.j,HTMLMediaElement:W.j,HTMLMenuElement:W.j,HTMLMenuItemElement:W.j,HTMLMetaElement:W.j,HTMLMeterElement:W.j,HTMLModElement:W.j,HTMLOListElement:W.j,HTMLObjectElement:W.j,HTMLOptGroupElement:W.j,HTMLOptionElement:W.j,HTMLOutputElement:W.j,HTMLParagraphElement:W.j,HTMLParamElement:W.j,HTMLPictureElement:W.j,HTMLPreElement:W.j,HTMLProgressElement:W.j,HTMLQuoteElement:W.j,HTMLScriptElement:W.j,HTMLShadowElement:W.j,HTMLSlotElement:W.j,HTMLSourceElement:W.j,HTMLSpanElement:W.j,HTMLStyleElement:W.j,HTMLTableCaptionElement:W.j,HTMLTableCellElement:W.j,HTMLTableDataCellElement:W.j,HTMLTableHeaderCellElement:W.j,HTMLTableColElement:W.j,HTMLTableElement:W.j,HTMLTableRowElement:W.j,HTMLTableSectionElement:W.j,HTMLTemplateElement:W.j,HTMLTextAreaElement:W.j,HTMLTitleElement:W.j,HTMLTrackElement:W.j,HTMLUListElement:W.j,HTMLUnknownElement:W.j,HTMLVideoElement:W.j,HTMLDirectoryElement:W.j,HTMLFontElement:W.j,HTMLFrameElement:W.j,HTMLMarqueeElement:W.j,HTMLElement:W.j,HTMLAnchorElement:W.dk,HTMLAreaElement:W.dl,AudioTrack:W.X,AudioTrackList:W.dp,Blob:W.bQ,HTMLBodyElement:W.dq,HTMLCanvasElement:W.bR,CanvasRenderingContext2D:W.ds,CDATASection:W.aE,CharacterData:W.aE,Comment:W.aE,ProcessingInstruction:W.aE,Text:W.aE,CompositorWorker:W.dv,CSSCharsetRule:W.y,CSSFontFaceRule:W.y,CSSGroupingRule:W.y,CSSImportRule:W.y,CSSKeyframeRule:W.y,MozCSSKeyframeRule:W.y,WebKitCSSKeyframeRule:W.y,CSSKeyframesRule:W.y,MozCSSKeyframesRule:W.y,WebKitCSSKeyframesRule:W.y,CSSMediaRule:W.y,CSSNamespaceRule:W.y,CSSPageRule:W.y,CSSRule:W.y,CSSStyleRule:W.y,CSSSupportsRule:W.y,CSSViewportRule:W.y,CSSStyleDeclaration:W.bd,MSStyleCSSProperties:W.bd,CSS2Properties:W.bd,DataTransferItemList:W.dy,DeviceAcceleration:W.dz,XMLDocument:W.bf,Document:W.bf,DocumentFragment:W.bT,ShadowRoot:W.bT,DOMException:W.dA,DOMPoint:W.dB,DOMPointReadOnly:W.bU,DOMRectReadOnly:W.bV,DOMStringList:W.dC,DOMTokenList:W.dD,Element:W.bW,AnimationEvent:W.k,AnimationPlayerEvent:W.k,ApplicationCacheErrorEvent:W.k,AutocompleteErrorEvent:W.k,BeforeInstallPromptEvent:W.k,BeforeUnloadEvent:W.k,BlobEvent:W.k,ClipboardEvent:W.k,CloseEvent:W.k,CustomEvent:W.k,DeviceLightEvent:W.k,DeviceMotionEvent:W.k,DeviceOrientationEvent:W.k,ErrorEvent:W.k,ExtendableEvent:W.k,ExtendableMessageEvent:W.k,FetchEvent:W.k,FontFaceSetLoadEvent:W.k,GamepadEvent:W.k,GeofencingEvent:W.k,HashChangeEvent:W.k,InstallEvent:W.k,MediaEncryptedEvent:W.k,MediaKeyMessageEvent:W.k,MediaQueryListEvent:W.k,MediaStreamEvent:W.k,MediaStreamTrackEvent:W.k,MessageEvent:W.k,MIDIConnectionEvent:W.k,MIDIMessageEvent:W.k,NotificationEvent:W.k,PageTransitionEvent:W.k,PopStateEvent:W.k,PresentationConnectionAvailableEvent:W.k,PresentationConnectionCloseEvent:W.k,ProgressEvent:W.k,PromiseRejectionEvent:W.k,PushEvent:W.k,RelatedEvent:W.k,RTCDataChannelEvent:W.k,RTCDTMFToneChangeEvent:W.k,RTCIceCandidateEvent:W.k,RTCPeerConnectionIceEvent:W.k,SecurityPolicyViolationEvent:W.k,ServicePortConnectEvent:W.k,ServiceWorkerMessageEvent:W.k,SpeechRecognitionError:W.k,SpeechRecognitionEvent:W.k,SpeechSynthesisEvent:W.k,StorageEvent:W.k,SyncEvent:W.k,TrackEvent:W.k,TransitionEvent:W.k,WebKitTransitionEvent:W.k,ResourceProgressEvent:W.k,USBConnectionEvent:W.k,IDBVersionChangeEvent:W.k,AudioProcessingEvent:W.k,OfflineAudioCompletionEvent:W.k,WebGLContextEvent:W.k,Event:W.k,InputEvent:W.k,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BatteryManager:W.f,CanvasCaptureMediaStreamTrack:W.f,CrossOriginServiceWorkerClient:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MessagePort:W.f,MIDIAccess:W.f,NetworkInformation:W.f,Notification:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationReceiver:W.f,PresentationRequest:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,ServicePortCollection:W.f,ServiceWorkerContainer:W.f,ServiceWorkerRegistration:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioContext:W.f,webkitAudioContext:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioSourceNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OfflineAudioContext:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.Y,FileList:W.e_,FileWriter:W.e0,HTMLFormElement:W.e5,Gamepad:W.Z,History:W.e7,HTMLCollection:W.bm,HTMLFormControlsCollection:W.bm,HTMLOptionsCollection:W.bm,HTMLDocument:W.c1,XMLHttpRequest:W.e8,XMLHttpRequestUpload:W.bn,XMLHttpRequestEventTarget:W.bn,HTMLInputElement:W.eb,KeyboardEvent:W.aJ,Location:W.eo,MediaList:W.eu,MIDIOutput:W.ew,MIDIInput:W.bp,MIDIPort:W.bp,MimeType:W.a_,MimeTypeArray:W.ex,PointerEvent:W.N,MouseEvent:W.N,DragEvent:W.N,Navigator:W.eH,Attr:W.x,Node:W.x,NodeList:W.cS,RadioNodeList:W.cS,Path2D:W.eO,Perspective:W.eR,Plugin:W.a0,PluginArray:W.eT,PositionValue:W.eW,PresentationConnection:W.eX,Rotation:W.f6,RTCDataChannel:W.cX,DataChannel:W.cX,HTMLSelectElement:W.f9,SharedWorker:W.fc,SourceBuffer:W.a1,SourceBufferList:W.fd,SpeechGrammar:W.a2,SpeechGrammarList:W.ff,SpeechRecognitionResult:W.a3,Storage:W.fi,CSSStyleSheet:W.T,StyleSheet:W.T,CalcLength:W.ab,KeywordValue:W.ab,LengthValue:W.ab,NumberValue:W.ab,SimpleLength:W.ab,TransformValue:W.ab,StyleValue:W.ab,TextTrack:W.a4,TextTrackCue:W.U,VTTCue:W.U,TextTrackCueList:W.fs,TextTrackList:W.ft,TimeRanges:W.fv,Touch:W.a5,TouchEvent:W.aO,TouchList:W.fz,TrackDefaultList:W.fA,Matrix:W.b4,Skew:W.b4,TransformComponent:W.b4,Translation:W.fC,CompositionEvent:W.ay,FocusEvent:W.ay,TextEvent:W.ay,SVGZoomEvent:W.ay,UIEvent:W.ay,URL:W.fI,VideoTrackList:W.fK,VTTRegionList:W.fN,WebSocket:W.fO,WheelEvent:W.aR,Window:W.bB,DOMWindow:W.bB,Worker:W.fQ,CompositorWorkerGlobalScope:W.aS,DedicatedWorkerGlobalScope:W.aS,ServiceWorkerGlobalScope:W.aS,SharedWorkerGlobalScope:W.aS,WorkerGlobalScope:W.aS,ClientRect:W.fX,ClientRectList:W.d4,DOMRectList:W.d4,CSSRuleList:W.fZ,DocumentType:W.h_,DOMRect:W.h0,GamepadList:W.hg,HTMLFrameSetElement:W.hh,NamedNodeMap:W.d7,MozNamedAttrMap:W.d7,ServiceWorker:W.hy,SpeechRecognitionResultList:W.hz,StyleSheetList:W.hA,WorkerLocation:W.hD,WorkerNavigator:W.hE,SVGAElement:P.dj,SVGAnimateElement:P.aD,SVGAnimateMotionElement:P.aD,SVGAnimateTransformElement:P.aD,SVGAnimationElement:P.aD,SVGSetElement:P.aD,SVGFEBlendElement:P.dI,SVGFEColorMatrixElement:P.dJ,SVGFEComponentTransferElement:P.dK,SVGFECompositeElement:P.dL,SVGFEConvolveMatrixElement:P.dM,SVGFEDiffuseLightingElement:P.dN,SVGFEDisplacementMapElement:P.dO,SVGFEFloodElement:P.dP,SVGFEGaussianBlurElement:P.dQ,SVGFEImageElement:P.dR,SVGFEMergeElement:P.dS,SVGFEMorphologyElement:P.dT,SVGFEOffsetElement:P.dU,SVGFEPointLightElement:P.dV,SVGFESpecularLightingElement:P.dW,SVGFESpotLightElement:P.dX,SVGFETileElement:P.dY,SVGFETurbulenceElement:P.dZ,SVGFilterElement:P.e1,SVGForeignObjectElement:P.e4,SVGCircleElement:P.a7,SVGEllipseElement:P.a7,SVGLineElement:P.a7,SVGPathElement:P.a7,SVGPolygonElement:P.a7,SVGPolylineElement:P.a7,SVGGeometryElement:P.a7,SVGClipPathElement:P.av,SVGDefsElement:P.av,SVGGElement:P.av,SVGSwitchElement:P.av,SVGGraphicsElement:P.av,SVGImageElement:P.e9,SVGLength:P.aj,SVGLengthList:P.ej,SVGMarkerElement:P.er,SVGMaskElement:P.es,SVGNumber:P.ak,SVGNumberList:P.eI,SVGPatternElement:P.eP,SVGPoint:P.eU,SVGPointList:P.eV,SVGRect:P.f_,SVGRectElement:P.f0,SVGScriptElement:P.f8,SVGStringList:P.fn,SVGDescElement:P.I,SVGDiscardElement:P.I,SVGFEDistantLightElement:P.I,SVGFEFuncAElement:P.I,SVGFEFuncBElement:P.I,SVGFEFuncGElement:P.I,SVGFEFuncRElement:P.I,SVGFEMergeNodeElement:P.I,SVGMetadataElement:P.I,SVGStopElement:P.I,SVGStyleElement:P.I,SVGTitleElement:P.I,SVGComponentTransferFunctionElement:P.I,SVGElement:P.I,SVGSVGElement:P.fo,SVGSymbolElement:P.fp,SVGTextContentElement:P.d_,SVGTextPathElement:P.fr,SVGTSpanElement:P.bz,SVGTextElement:P.bz,SVGTextPositioningElement:P.bz,SVGTransform:P.al,SVGTransformList:P.fB,SVGUseElement:P.fJ,SVGViewElement:P.fL,SVGViewSpec:P.fM,SVGLinearGradientElement:P.bD,SVGRadialGradientElement:P.bD,SVGGradientElement:P.bD,SVGCursorElement:P.hv,SVGFEDropShadowElement:P.hw,SVGMPathElement:P.hx,AudioBuffer:P.dn,WebGLRenderingContext:P.f4,WebGL2RenderingContext:P.f5,WebGL2RenderingContextBase:P.hC,SQLResultSetRowList:P.fg})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,Credential:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMStringMap:true,EffectModel:true,Entry:true,FederatedCredential:true,FileEntry:true,FileError:true,Stream:true,DOMFileSystem:true,FontFace:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageData:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PasswordCredential:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,Range:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,ServicePort:true,SharedArrayBuffer:true,SourceInfo:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPreserveAspectRatio:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,AudioTrack:true,AudioTrackList:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,CSSCharsetRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DataTransferItemList:true,DeviceAcceleration:true,XMLDocument:true,Document:false,DocumentFragment:true,ShadowRoot:true,DOMException:true,DOMPoint:true,DOMPointReadOnly:false,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AudioDestinationNode:true,AudioNode:true,AudioSourceNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OfflineAudioContext:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Navigator:true,Attr:true,Node:false,NodeList:true,RadioNodeList:true,Path2D:true,Perspective:true,Plugin:true,PluginArray:true,PositionValue:true,PresentationConnection:true,Rotation:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,SharedWorker:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,CalcLength:true,KeywordValue:true,LengthValue:true,NumberValue:true,SimpleLength:true,TransformValue:true,StyleValue:false,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,Matrix:true,Skew:true,TransformComponent:false,Translation:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,SVGZoomEvent:true,UIEvent:false,URL:true,VideoTrackList:true,VTTRegionList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.cO.$nativeSuperclassTag="ArrayBufferView"
H.bs.$nativeSuperclassTag="ArrayBufferView"
H.bt.$nativeSuperclassTag="ArrayBufferView"
H.cP.$nativeSuperclassTag="ArrayBufferView"
H.br.$nativeSuperclassTag="ArrayBufferView"
H.bu.$nativeSuperclassTag="ArrayBufferView"
H.cQ.$nativeSuperclassTag="ArrayBufferView"
W.bg.$nativeSuperclassTag="EventTarget"
W.bk.$nativeSuperclassTag="EventTarget"
W.bh.$nativeSuperclassTag="EventTarget"
W.bj.$nativeSuperclassTag="EventTarget"
W.bi.$nativeSuperclassTag="EventTarget"
W.bl.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.kc(Q.jV(),b)},[])
else (function(b){H.kc(Q.jV(),b)})([])})})()