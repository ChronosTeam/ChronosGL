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
a[c]=function(){a[c]=function(){H.nr(b)}
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
return d?function(e){if(t===null)t=H.jp(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.jp(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.jp(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={j0:function j0(a){this.a=a},
j7:function(a,b,c,d){if(!!a.$isl)return new H.e6(a,b,[c,d])
return new H.cj(a,b,[c,d])},
eH:function(){return new P.b1("No element")},
mg:function(){return new P.b1("Too many elements")},
mf:function(){return new P.b1("Too few elements")},
mx:function(a,b){H.cA(a,0,J.bc(a)-1,b)},
cA:function(a,b,c,d){if(c-b<=32)H.mw(a,b,c,d)
else H.mv(a,b,c,d)},
mw:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.X(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.a8(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
mv:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.b(t>32)
s=C.b.M(t+1,6)
r=a3+s
q=a4-s
p=C.b.M(a3+a4,2)
o=p-s
n=p+s
t=J.X(a2)
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
j=h}t.i(a2,r,m)
t.i(a2,p,k)
t.i(a2,q,i)
t.i(a2,o,t.h(a2,a3))
t.i(a2,n,t.h(a2,a4))
g=a3+1
f=a4-1
if(J.F(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=t.h(a2,e)
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
H.cA(a2,a3,g-2,a5)
H.cA(a2,f+2,a4,a5)
if(a0)return
if(g<r&&f>q){for(;J.F(a5.$2(t.h(a2,g),l),0);)++g
for(;J.F(a5.$2(t.h(a2,f),j),0);)--f
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
break}}H.cA(a2,g,f,a5)}else H.cA(a2,g,f,a5)},
l:function l(){},
aX:function aX(){},
ch:function ch(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cj:function cj(a,b,c){this.a=a
this.b=b
this.$ti=c},
e6:function e6(a,b,c){this.a=a
this.b=b
this.$ti=c},
eU:function eU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bn:function bn(a,b,c){this.a=a
this.b=b
this.$ti=c},
cN:function cN(a,b,c){this.a=a
this.b=b
this.$ti=c},
hg:function hg(a,b,c){this.a=a
this.b=b
this.$ti=c},
aV:function aV(){},
dz:function(a,b){var t=a.at(b)
if(!u.globalState.d.cy)u.globalState.f.aA()
return t},
ih:function(){++u.globalState.f.b},
iw:function(){--u.globalState.f.b
H.b(u.globalState.f.b>=0)},
l4:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.v(s).$isi)throw H.c(P.jM("Arguments to main must be a List: "+H.f(s)))
u.globalState=new H.hQ(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$k7()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.ht(P.j6(null,H.aN),0)
q=P.y
s.seD(new H.ab(0,null,null,null,null,null,0,[q,H.b2]))
s.seG(new H.ab(0,null,null,null,null,null,0,[q,null]))
if(s.x){r=new H.hP()
s.Q=r
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.ma,r)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.mM)}if(u.globalState.x)return
o=H.kH()
u.globalState.e=o
u.globalState.z.i(0,o.a,o)
u.globalState.d=o
if(H.b8(a,{func:1,args:[P.O]}))o.at(new H.iG(t,a))
else if(H.b8(a,{func:1,args:[P.O,P.O]}))o.at(new H.iH(t,a))
else o.at(a)
u.globalState.f.aA()},
mM:function(a){var t=P.aE(["command","print","msg",a])
return new H.a4(!0,P.b3(null,P.y)).O(t)},
kH:function(){var t,s
t=u.globalState.a++
s=P.y
t=new H.b2(t,new H.ab(0,null,null,null,null,null,0,[s,H.cw]),P.aF(null,null,null,s),u.createNewIsolate(),new H.cw(0,null,!1),new H.aw(H.l3()),new H.aw(H.l3()),!1,!1,[],P.aF(null,null,null,null),null,null,!1,!0,P.aF(null,null,null,null))
t.dv()
return t},
mc:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.md()
return},
md:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.c(P.u("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.c(P.u('Cannot extract URI from "'+t+'"'))},
ma:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=new H.aM(!0,[]).a5(b.data)
s=J.X(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.nd(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.aM(!0,[]).a5(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.aM(!0,[]).a5(s.h(t,"replyTo"))
k=H.kH()
u.globalState.f.a.a1(0,new H.aN(k,new H.eE(q,p,o,n,m,l),"worker-start"))
u.globalState.d=k
u.globalState.f.aA()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.lE(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.aA()
break
case"close":u.globalState.ch.az(0,$.$get$k8().h(0,a))
a.terminate()
u.globalState.f.aA()
break
case"log":H.m9(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
j=P.aE(["command","print","msg",t])
j=new H.a4(!0,P.b3(null,P.y)).O(j)
s.toString
self.postMessage(j)}else P.a7(s.h(t,"msg"))
break
case"error":throw H.c(s.h(t,"msg"))}},
m9:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aE(["command","log","msg",a])
r=new H.a4(!0,P.b3(null,P.y)).O(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.P(q)
t=H.at(q)
s=P.c6(t)
throw H.c(s)}},
mb:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.kg=$.kg+("_"+s)
$.kh=$.kh+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.L(0,["spawned",new H.b4(s,r),q,t.r])
r=new H.eF(t,d,a,c,b)
if(e){t.bT(q,q)
u.globalState.f.a.a1(0,new H.aN(t,r,"start isolate"))}else r.$0()},
mz:function(a,b){var t=new H.h_(!0,!1,null,0)
t.dm(a,b)
return t},
mN:function(a){return new H.aM(!0,[]).a5(new H.a4(!1,P.b3(null,P.y)).O(a))},
iG:function iG(a,b){this.a=a
this.b=b},
iH:function iH(a,b){this.a=a
this.b=b},
hQ:function hQ(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
hK:function hK(a,b){this.a=a
this.b=b},
ht:function ht(a,b){this.a=a
this.b=b},
hu:function hu(a){this.a=a},
aN:function aN(a,b,c){this.a=a
this.b=b
this.c=c},
hP:function hP(){},
eE:function eE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eF:function eF(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ho:function ho(){},
b4:function b4(a,b){this.b=a
this.a=b},
hR:function hR(a,b){this.a=a
this.b=b},
bL:function bL(a,b,c){this.b=a
this.c=b
this.a=c},
cw:function cw(a,b,c){this.a=a
this.b=b
this.c=c},
h_:function h_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h0:function h0(a,b){this.a=a
this.b=b},
h1:function h1(a,b){this.a=a
this.b=b},
aw:function aw(a){this.a=a},
a4:function a4(a,b){this.a=a
this.b=b},
aM:function aM(a,b){this.a=a
this.b=b},
n7:function(a){return u.types[a]},
nf:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.v(a).$ist},
f:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.bd(a)
if(typeof t!=="string")throw H.c(H.T(a))
return t},
mr:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t=J.ao(t)
s=t[0]
r=t[1]
return new H.fu(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aG:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
br:function(a){var t,s,r,q,p,o,n,m,l
t=J.v(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.K||!!J.v(a).$isaK){p=C.y(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.i.aV(q,0)===36)q=C.i.d0(q,1)
l=H.dB(H.ij(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+l,u.mangledGlobalNames)},
Q:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mp:function(a){return a.b?H.Q(a).getUTCFullYear()+0:H.Q(a).getFullYear()+0},
mn:function(a){return a.b?H.Q(a).getUTCMonth()+1:H.Q(a).getMonth()+1},
mj:function(a){return a.b?H.Q(a).getUTCDate()+0:H.Q(a).getDate()+0},
mk:function(a){return a.b?H.Q(a).getUTCHours()+0:H.Q(a).getHours()+0},
mm:function(a){return a.b?H.Q(a).getUTCMinutes()+0:H.Q(a).getMinutes()+0},
mo:function(a){return a.b?H.Q(a).getUTCSeconds()+0:H.Q(a).getSeconds()+0},
ml:function(a){return a.b?H.Q(a).getUTCMilliseconds()+0:H.Q(a).getMilliseconds()+0},
kf:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.c(H.T(a))
return a[b]},
b7:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a_(!0,b,"index",null)
t=J.bc(a)
if(b<0||C.b.be(b,t))return P.B(b,a,"index",null,t)
return P.fr(b,"index",null)},
T:function(a){return new P.a_(!0,a,null,null)},
c:function(a){var t
if(a==null)a=new P.ct()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.l6})
t.name=""}else t.toString=H.l6
return t},
l6:function(){return J.bd(this.dartException)},
L:function(a){throw H.c(a)},
D:function(a){throw H.c(P.al(a))},
ae:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.h5(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
h6:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
kt:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
ke:function(a,b){return new H.fc(a,b==null?null:b.method)},
j2:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.eL(a,s,t?null:b.receiver)},
P:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.iI(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.b6(r,16)&8191)===10)switch(q){case 438:return t.$1(H.j2(H.f(s)+" (Error "+q+")",null))
case 445:case 5007:return t.$1(H.ke(H.f(s)+" (Error "+q+")",null))}}if(a instanceof TypeError){p=$.$get$kn()
o=$.$get$ko()
n=$.$get$kp()
m=$.$get$kq()
l=$.$get$ku()
k=$.$get$kv()
j=$.$get$ks()
$.$get$kr()
i=$.$get$kx()
h=$.$get$kw()
g=p.U(s)
if(g!=null)return t.$1(H.j2(s,g))
else{g=o.U(s)
if(g!=null){g.method="call"
return t.$1(H.j2(s,g))}else{g=n.U(s)
if(g==null){g=m.U(s)
if(g==null){g=l.U(s)
if(g==null){g=k.U(s)
if(g==null){g=j.U(s)
if(g==null){g=m.U(s)
if(g==null){g=i.U(s)
if(g==null){g=h.U(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return t.$1(H.ke(s,g))}}return t.$1(new H.h9(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.cD()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.a_(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.cD()
return a},
at:function(a){var t
if(a==null)return new H.dd(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dd(a,null)},
nj:function(a){if(a==null||typeof a!='object')return J.bb(a)
else return H.aG(a)},
n5:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=a.length
for(r=0;r<s;){q=r+1
H.b(t)
p=a[r]
r=q+1
H.b(t)
b.i(0,p,a[q])}return b},
ne:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dz(b,new H.ir(a))
case 1:return H.dz(b,new H.is(a,d))
case 2:return H.dz(b,new H.it(a,d,e))
case 3:return H.dz(b,new H.iu(a,d,e,f))
case 4:return H.dz(b,new H.iv(a,d,e,f,g))}throw H.c(P.c6("Unsupported number of arguments for wrapped closure"))},
bP:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.ne)
a.$identity=t
return t},
lU:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.v(c).$isi){t.$reflectionInfo=c
r=H.mr(t).r}else r=c
q=d?Object.create(new H.fJ().constructor.prototype):Object.create(new H.be(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.jT(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.n7,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.jQ:H.iV
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.c("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.jT(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
lR:function(a,b,c,d){var t=H.iV
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
jT:function(a,b,c){var t,s,r,q
if(c)return H.lT(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.lR(s,b==null?r!=null:b!==r,t,b)
return q},
lS:function(a,b,c,d){var t,s
t=H.iV
s=H.jQ
switch(b?-1:a){case 0:throw H.c(H.mt("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
lT:function(a,b){var t,s,r,q
t=$.jR
if(t==null){t=H.jO("self")
$.jR=t}t=$.jP
if(t==null){t=H.jO("receiver")
$.jP=t}s=b.$stubName
r=b.length
q=a[s]
t=H.lS(r,b==null?q!=null:b!==q,s,b)
return t},
jp:function(a,b,c,d,e,f){var t,s
t=J.ao(b)
s=!!J.v(c).$isi?J.ao(c):c
return H.lU(a,t,s,!!d,e,f)},
iV:function(a){return a.a},
jQ:function(a){return a.c},
jO:function(a){var t,s,r,q,p
t=new H.be("self","target","receiver","name")
s=J.ao(Object.getOwnPropertyNames(t))
for(r=s.length,q=0;q<r;++q){p=s[q]
if(t[p]===a)return p}},
nG:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.af(a,"String"))},
nB:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.af(a,"double"))},
nF:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.af(a,"num"))},
mZ:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.af(a,"bool"))},
nd:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.af(a,"int"))},
nl:function(a,b){throw H.c(H.af(a,b.substring(3)))},
nk:function(a,b){var t=J.X(b)
throw H.c(H.jS(a,t.bp(b,3,t.gk(b))))},
jt:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.v(a)[b])return a
H.nl(a,b)},
ak:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.v(a)[b]
else t=!0
if(t)return a
H.nk(a,b)},
nE:function(a){if(a==null)return a
if(!!J.v(a).$isi)return a
throw H.c(H.af(a,"List"))},
jq:function(a){var t=J.v(a)
return"$S" in t?t.$S():null},
b8:function(a,b){var t,s
if(a==null)return!1
t=H.jq(a)
if(t==null)s=!1
else s=H.l_(t,b)
return s},
nC:function(a,b){var t,s
if(a==null)return a
if($.jm)return a
$.jm=!0
try{if(H.b8(a,b))return a
t=H.iA(b,null)
s=H.af(a,t)
throw H.c(s)}finally{$.jm=!1}},
af:function(a,b){return new H.h7("TypeError: "+H.f(P.c5(a))+": type '"+H.kN(a)+"' is not a subtype of type '"+b+"'")},
jS:function(a,b){return new H.dM("CastError: "+H.f(P.c5(a))+": type '"+H.kN(a)+"' is not a subtype of type '"+b+"'")},
kN:function(a){var t
if(a instanceof H.ay){t=H.jq(a)
if(t!=null)return H.iA(t,null)
return"Closure"}return H.br(a)},
ai:function(a){if(!0===a)return!1
if(!!J.v(a).$isiZ)a=a.$0()
if(typeof a==="boolean")return!a
throw H.c(H.af(a,"bool"))},
as:function(a){throw H.c(new H.hi(a))},
b:function(a){if(H.ai(a))throw H.c(P.lQ(null))},
nr:function(a){throw H.c(new P.dX(a))},
mt:function(a){return new H.fz(a)},
l3:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
kY:function(a){return u.getIsolateTag(a)},
K:function(a){return new H.ar(a,null)},
z:function(a,b){H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
ij:function(a){if(a==null)return
return a.$ti},
kZ:function(a,b){return H.jx(a["$as"+H.f(b)],H.ij(a))},
a5:function(a,b,c){var t,s
t=H.kZ(a,b)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
au:function(a,b){var t,s
t=H.ij(a)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
iA:function(a,b){var t=H.b9(a,b)
return t},
b9:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.b(!0)
H.b(!0)
return a[0].name+H.dB(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.f(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.b9(t,b)
return H.mO(a,b)}return"unknown-reified-type"},
mO:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.b9(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.b9(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.b9(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.n4(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.b9(l[j],b)+(" "+H.f(j))}q+="}"}return"("+q+") => "+t},
dB:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=new P.bt("")
for(r=b,q=!0,p=!0;H.b(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.b(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.b9(o,c)}return p?"":"<"+s.l(0)+">"},
ik:function(a){var t,s,r
if(a instanceof H.ay){t=H.jq(a)
if(t!=null)return H.iA(t,null)}s=J.v(a).constructor.name
if(a==null)return s
r=H.dB(a.$ti,0,null)
return s+r},
jx:function(a,b){if(a==null)return b
H.b(typeof a=="function")
H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.ju(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.ju(a,null,b)
return b},
ib:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.ij(a)
s=J.v(a)
if(s[b]==null)return!1
return H.kR(H.jx(s[d],t),c)},
dC:function(a,b,c,d){var t,s
if(a==null)return a
t=H.ib(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.dB(c,0,null)
throw H.c(H.jS(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
ny:function(a,b,c,d){var t,s
if(a==null)return a
t=H.ib(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.dB(c,0,null)
throw H.c(H.af(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
kR:function(a,b){var t,s,r,q,p
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
if(!H.Y(r,b[p]))return!1}return!0},
nz:function(a,b,c){return H.ju(a,b,H.kZ(b,c))},
Y:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.name==="O")return!0
if('func' in b)return H.l_(a,b)
if('func' in a)return b.name==="iZ"||b.name==="G"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.b(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.b(!0)
q=b[0]}else q=b
if(q!==s){p=H.iA(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.kR(H.jx(o,t),r)},
kQ:function(a,b,c){var t,s,r,q,p,o,n
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
if(!(H.Y(o,n)||H.Y(n,o)))return!1}return!0},
mV:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
H.b(typeof a=='object')
H.b(typeof b=='object')
t=J.ao(Object.getOwnPropertyNames(b))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.Y(p,o)||H.Y(o,p)))return!1}return!0},
l_:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.b('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.Y(t,s)||H.Y(s,t)))return!1}r=a.args
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
if(n===m){if(!H.kQ(r,q,!1))return!1
if(!H.kQ(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.b(j)
g=r[h]
H.b(i)
f=q[h]
if(!(H.Y(g,f)||H.Y(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=q[e]
if(!(H.Y(g,f)||H.Y(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=o[e]
if(!(H.Y(g,f)||H.Y(f,g)))return!1}}return H.mV(a.named,b.named)},
ju:function(a,b,c){H.b(typeof a=="function")
H.b(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
nH:function(a){var t=$.jr
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
nD:function(a){return H.aG(a)},
nA:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
ng:function(a){var t,s,r,q,p,o
H.b(!(a instanceof P.G))
t=$.jr.$1(a)
s=$.ig[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iq[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.kP.$2(a,t)
if(t!=null){s=$.ig[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iq[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.iy(r)
$.ig[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.iq[t]=r
return r}if(p==="-"){o=H.iy(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.l1(a,r)
if(p==="*")throw H.c(P.kB(t))
if(u.leafTags[t]===true){o=H.iy(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.l1(a,r)},
l1:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.jv(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
iy:function(a){return J.jv(a,!1,null,!!a.$ist)},
ni:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return H.iy(t)
else return J.jv(t,c,null,null)},
nb:function(){if(!0===$.js)return
$.js=!0
H.nc()},
nc:function(){var t,s,r,q,p,o,n,m
$.ig=Object.create(null)
$.iq=Object.create(null)
H.na()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.l2.$1(p)
if(o!=null){n=H.ni(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
na:function(){var t,s,r,q,p,o,n
t=C.O()
t=H.b6(C.L,H.b6(C.Q,H.b6(C.x,H.b6(C.x,H.b6(C.P,H.b6(C.M,H.b6(C.N(C.y),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.jr=new H.im(p)
$.kP=new H.io(o)
$.l2=new H.ip(n)},
b6:function(a,b){return a(b)||b},
nq:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
fu:function fu(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
h5:function h5(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fc:function fc(a,b){this.a=a
this.b=b},
eL:function eL(a,b,c){this.a=a
this.b=b
this.c=c},
h9:function h9(a){this.a=a},
iI:function iI(a){this.a=a},
dd:function dd(a,b){this.a=a
this.b=b},
ir:function ir(a){this.a=a},
is:function is(a,b){this.a=a
this.b=b},
it:function it(a,b,c){this.a=a
this.b=b
this.c=c},
iu:function iu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iv:function iv(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ay:function ay(){},
fW:function fW(){},
fJ:function fJ(){},
be:function be(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h7:function h7(a){this.a=a},
dM:function dM(a){this.a=a},
fz:function fz(a){this.a=a},
hi:function hi(a){this.a=a},
ar:function ar(a,b){this.a=a
this.b=b},
ab:function ab(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
eK:function eK(a){this.a=a},
eN:function eN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eO:function eO(a,b){this.a=a
this.$ti=b},
eP:function eP(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
im:function im(a){this.a=a},
io:function io(a){this.a=a},
ip:function ip(a){this.a=a},
i7:function(a){var t,s,r
if(!!J.v(a).$isq)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
ah:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.b7(b,a))},
bp:function bp(){},
b_:function b_(){},
f2:function f2(){},
cm:function cm(){},
cn:function cn(){},
co:function co(){},
cl:function cl(){},
f3:function f3(){},
f4:function f4(){},
f5:function f5(){},
f6:function f6(){},
f7:function f7(){},
f8:function f8(){},
cp:function cp(){},
f9:function f9(){},
bC:function bC(){},
bD:function bD(){},
bE:function bE(){},
bF:function bF(){},
n4:function(a){return J.ao(H.z(a?Object.keys(a):[],[null]))},
iz:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
v:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cf.prototype
return J.ce.prototype}if(typeof a=="string")return J.aB.prototype
if(a==null)return J.eJ.prototype
if(typeof a=="boolean")return J.eI.prototype
if(a.constructor==Array)return J.aA.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aC.prototype
return a}if(a instanceof P.G)return a
return J.ii(a)},
jv:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ii:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.js==null){H.nb()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.c(P.kB("Return interceptor for "+H.f(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$j1()]
if(p!=null)return p
p=H.ng(a)
if(p!=null)return p
if(typeof a=="function")return C.R
s=Object.getPrototypeOf(a)
if(s==null)return C.A
if(s===Object.prototype)return C.A
if(typeof q=="function"){Object.defineProperty(q,$.$get$j1(),{value:C.t,enumerable:false,writable:true,configurable:true})
return C.t}return C.t},
ao:function(a){a.fixed$length=Array
return a},
X:function(a){if(typeof a=="string")return J.aB.prototype
if(a==null)return a
if(a.constructor==Array)return J.aA.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aC.prototype
return a}if(a instanceof P.G)return a
return J.ii(a)},
bR:function(a){if(a==null)return a
if(a.constructor==Array)return J.aA.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aC.prototype
return a}if(a instanceof P.G)return a
return J.ii(a)},
kW:function(a){if(typeof a=="number")return J.aW.prototype
if(a==null)return a
if(!(a instanceof P.G))return J.aK.prototype
return a},
n6:function(a){if(typeof a=="number")return J.aW.prototype
if(typeof a=="string")return J.aB.prototype
if(a==null)return a
if(!(a instanceof P.G))return J.aK.prototype
return a},
kX:function(a){if(typeof a=="string")return J.aB.prototype
if(a==null)return a
if(!(a instanceof P.G))return J.aK.prototype
return a},
k:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aC.prototype
return a}if(a instanceof P.G)return a
return J.ii(a)},
F:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.v(a).B(a,b)},
a8:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.kW(a).a0(a,b)},
la:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kW(a).a7(a,b)},
ba:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nf(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.X(a).h(a,b)},
lb:function(a,b,c,d){return J.k(a).dB(a,b,c,d)},
jy:function(a,b){return J.kX(a).aV(a,b)},
iJ:function(a,b){return J.k(a).dR(a,b)},
lc:function(a,b,c){return J.k(a).dS(a,b,c)},
jz:function(a,b){return J.k(a).bS(a,b)},
iK:function(a,b){return J.k(a).Y(a,b)},
jA:function(a,b,c){return J.k(a).bV(a,b,c)},
ld:function(a,b){return J.k(a).e5(a,b)},
iL:function(a,b,c){return J.k(a).bW(a,b,c)},
le:function(a,b,c){return J.k(a).bX(a,b,c)},
jB:function(a,b,c){return J.k(a).bY(a,b,c)},
dD:function(a,b){return J.k(a).e8(a,b)},
lf:function(a,b){return J.k(a).bZ(a,b)},
lg:function(a,b,c){return J.k(a).c_(a,b,c)},
jC:function(a,b,c,d){return J.k(a).c0(a,b,c,d)},
lh:function(a,b){return J.bR(a).c1(a,b)},
li:function(a,b,c,d,e){return J.k(a).c2(a,b,c,d,e)},
lj:function(a,b){return J.n6(a).Z(a,b)},
iM:function(a,b,c){return J.X(a).ec(a,b,c)},
iN:function(a){return J.k(a).c4(a)},
lk:function(a){return J.k(a).c5(a)},
ll:function(a){return J.k(a).ei(a)},
lm:function(a,b){return J.k(a).c8(a,b)},
iO:function(a,b){return J.k(a).c9(a,b)},
ln:function(a,b,c,d){return J.k(a).ca(a,b,c,d)},
lo:function(a,b,c,d,e){return J.k(a).ep(a,b,c,d,e)},
lp:function(a,b,c,d,e){return J.k(a).cb(a,b,c,d,e)},
lq:function(a,b,c,d,e,f){return J.k(a).eq(a,b,c,d,e,f)},
lr:function(a,b){return J.bR(a).w(a,b)},
bU:function(a,b){return J.k(a).cc(a,b)},
ls:function(a,b){return J.k(a).cd(a,b)},
lt:function(a){return J.k(a).er(a)},
jD:function(a,b){return J.bR(a).au(a,b)},
lu:function(a){return J.k(a).ge4(a)},
bb:function(a){return J.v(a).gA(a)},
aP:function(a){return J.bR(a).gC(a)},
bc:function(a){return J.X(a).gk(a)},
lv:function(a){return J.k(a).gbb(a)},
lw:function(a){return J.v(a).gE(a)},
lx:function(a){return J.k(a).geQ(a)},
ly:function(a){return J.k(a).gaN(a)},
iP:function(a){return J.k(a).gn(a)},
iQ:function(a){return J.k(a).gp(a)},
jE:function(a){return J.k(a).gG(a)},
iR:function(a,b){return J.k(a).al(a,b)},
lz:function(a){return J.k(a).aP(a)},
lA:function(a,b){return J.k(a).bf(a,b)},
lB:function(a,b,c){return J.k(a).bg(a,b,c)},
jF:function(a,b,c){return J.k(a).bj(a,b,c)},
lC:function(a,b){return J.k(a).cg(a,b)},
lD:function(a,b){return J.bR(a).cj(a,b)},
jG:function(a){return J.bR(a).eJ(a)},
lE:function(a,b){return J.k(a).L(a,b)},
lF:function(a,b,c,d){return J.k(a).bo(a,b,c,d)},
lG:function(a){return J.kX(a).eT(a)},
bd:function(a){return J.v(a).l(a)},
lH:function(a,b,c,d){return J.k(a).eV(a,b,c,d)},
lI:function(a,b,c){return J.k(a).ct(a,b,c)},
lJ:function(a,b,c){return J.k(a).cu(a,b,c)},
iS:function(a,b,c){return J.k(a).cv(a,b,c)},
lK:function(a,b,c){return J.k(a).cw(a,b,c)},
jH:function(a,b,c){return J.k(a).cz(a,b,c)},
jI:function(a,b,c){return J.k(a).cA(a,b,c)},
jJ:function(a,b,c){return J.k(a).cB(a,b,c)},
jK:function(a,b,c,d){return J.k(a).cC(a,b,c,d)},
jL:function(a,b,c,d){return J.k(a).cD(a,b,c,d)},
lL:function(a,b){return J.k(a).cF(a,b)},
lM:function(a,b,c){return J.k(a).eW(a,b,c)},
lN:function(a,b,c,d,e,f,g){return J.k(a).cH(a,b,c,d,e,f,g)},
lO:function(a,b,c,d,e){return J.k(a).cJ(a,b,c,d,e)},
a:function a(){},
eI:function eI(){},
eJ:function eJ(){},
bm:function bm(){},
fm:function fm(){},
aK:function aK(){},
aC:function aC(){},
aA:function aA(a){this.$ti=a},
j_:function j_(a){this.$ti=a},
dH:function dH(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aW:function aW(){},
cf:function cf(){},
ce:function ce(){},
aB:function aB(){}},P={
mD:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.mW()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.bP(new P.hk(t),1)).observe(s,{childList:true})
return new P.hj(t,s,r)}else if(self.setImmediate!=null)return P.mX()
return P.mY()},
mE:function(a){H.ih()
self.scheduleImmediate(H.bP(new P.hl(a),0))},
mF:function(a){H.ih()
self.setImmediate(H.bP(new P.hm(a),0))},
mG:function(a){P.jc(C.v,a)},
jc:function(a,b){var t=C.b.M(a.a,1000)
return H.mz(t<0?0:t,b)},
mR:function(a,b){if(H.b8(a,{func:1,args:[P.O,P.O]})){b.toString
return a}else{b.toString
return a}},
mI:function(a,b){var t,s,r
H.b(b.a<4)
H.b(!(a instanceof P.ag))
H.b(b.a===0)
b.a=1
try{a.cr(new P.hA(b),new P.hB(b))}catch(r){t=H.P(r)
s=H.at(r)
P.nm(new P.hC(b,t,s))}},
kE:function(a,b){var t,s,r
H.b(b.a<=1)
for(;t=a.a,s=t===2,s;){H.b(s)
a=a.c}if(t>=4){r=b.b4()
b.aU(a)
P.by(b,r)}else{r=b.c
H.b(b.a<=1)
b.a=2
b.c=a
a.bM(r)}},
by:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.i8(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.by(t.a,b)}s=t.a
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
P.i8(null,null,p,o,s)
return}s=$.C
if(s==null?l!=null:s!==l){H.b(l!=null)
s=$.C
H.b(l==null?s!=null:l!==s)
j=$.C
$.C=l
i=j}else i=null
s=b.c
if(s===8)new P.hG(t,r,b,q).$0()
else if(p){if((s&1)!==0)new P.hF(r,b,m).$0()}else if((s&2)!==0)new P.hE(t,r,b).$0()
if(i!=null){H.b(!0)
$.C=i}s=r.b
if(!!J.v(s).$isey){if(s.a>=4){H.b(o.a<4)
h=o.c
o.c=null
b=o.aI(h)
H.b(o.a<4)
H.b(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.kE(s,o)
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
mQ:function(){var t,s
for(;t=$.b5,t!=null;){$.bN=null
s=t.b
$.b5=s
if(s==null)$.bM=null
t.a.$0()}},
mU:function(){$.jn=!0
try{P.mQ()}finally{$.bN=null
$.jn=!1
if($.b5!=null)$.$get$ji().$1(P.kS())}},
kM:function(a){var t=new P.cO(a,null)
if($.b5==null){$.bM=t
$.b5=t
if(!$.jn)$.$get$ji().$1(P.kS())}else{$.bM.b=t
$.bM=t}},
mT:function(a){var t,s,r
t=$.b5
if(t==null){P.kM(a)
$.bN=$.bM
return}s=new P.cO(a,null)
r=$.bN
if(r==null){s.b=t
$.bN=s
$.b5=s}else{s.b=r.b
r.b=s
$.bN=s
if(s.b==null)$.bM=s}},
nm:function(a){var t=$.C
if(C.f===t){P.ia(null,null,C.f,a)
return}t.toString
P.ia(null,null,t,t.b9(a))},
mA:function(a,b){var t=$.C
if(t===C.f){t.toString
return P.jc(a,b)}return P.jc(a,t.b9(b))},
jh:function(a){var t,s
H.b(a!=null)
t=$.C
H.b(a==null?t!=null:a!==t)
s=$.C
$.C=a
return s},
i8:function(a,b,c,d,e){var t={}
t.a=d
P.mT(new P.i9(t,e))},
kK:function(a,b,c,d){var t,s
if($.C===c)return d.$0()
t=P.jh(c)
try{s=d.$0()
return s}finally{s=t
H.b(s!=null)
$.C=s}},
kL:function(a,b,c,d,e){var t,s
if($.C===c)return d.$1(e)
t=P.jh(c)
try{s=d.$1(e)
return s}finally{s=t
H.b(s!=null)
$.C=s}},
mS:function(a,b,c,d,e,f){var t,s
if($.C===c)return d.$2(e,f)
t=P.jh(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.b(s!=null)
$.C=s}},
ia:function(a,b,c,d){var t=C.f!==c
if(t)d=!(!t||!1)?c.b9(d):c.e6(d)
P.kM(d)},
hk:function hk(a){this.a=a},
hj:function hj(a,b,c){this.a=a
this.b=b
this.c=c},
hl:function hl(a){this.a=a},
hm:function hm(a){this.a=a},
iW:function iW(){},
hp:function hp(){},
i2:function i2(a,b){this.a=a
this.$ti=b},
cW:function cW(a,b,c,d,e,f){var _=this
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
hz:function hz(a,b){this.a=a
this.b=b},
hD:function hD(a,b){this.a=a
this.b=b},
hA:function hA(a){this.a=a},
hB:function hB(a){this.a=a},
hC:function hC(a,b,c){this.a=a
this.b=b
this.c=c},
hG:function hG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hH:function hH(a){this.a=a},
hF:function hF(a,b,c){this.a=a
this.b=b
this.c=c},
hE:function hE(a,b,c){this.a=a
this.b=b
this.c=c},
cO:function cO(a,b){this.a=a
this.b=b},
fO:function fO(){},
fQ:function fQ(a){this.a=a},
fR:function fR(a,b){this.a=a
this.b=b},
fP:function fP(){},
jb:function jb(){},
aQ:function aQ(a,b){this.a=a
this.b=b},
i6:function i6(){},
i9:function i9(a,b){this.a=a
this.b=b},
hT:function hT(){},
hV:function hV(a,b){this.a=a
this.b=b},
hU:function hU(a,b){this.a=a
this.b=b},
hW:function hW(a,b){this.a=a
this.b=b},
ka:function(a,b){return new H.ab(0,null,null,null,null,null,0,[a,b])},
M:function(){return new H.ab(0,null,null,null,null,null,0,[null,null])},
aE:function(a){return H.n5(a,new H.ab(0,null,null,null,null,null,0,[null,null]))},
b3:function(a,b){return new P.hN(0,null,null,null,null,null,0,[a,b])},
aF:function(a,b,c,d){return new P.hL(0,null,null,null,null,null,0,[d])},
jl:function(){var t=Object.create(null)
H.b(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
me:function(a,b,c){var t,s
if(P.jo(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$bO()
C.a.j(s,a)
try{P.mP(a,t)}finally{H.b(C.a.gaM(s)===a)
s.pop()}s=P.kl(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eG:function(a,b,c){var t,s,r
if(P.jo(a))return b+"..."+c
t=new P.bt(b)
s=$.$get$bO()
C.a.j(s,a)
try{r=t
r.a=P.kl(r.gag(),a,", ")}finally{H.b(C.a.gaM(s)===a)
s.pop()}s=t
s.a=s.gag()+c
s=t.gag()
return s.charCodeAt(0)==0?s:s},
jo:function(a){var t,s
for(t=0;s=$.$get$bO(),t<s.length;++t)if(a===s[t])return!0
return!1},
mP:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gC(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.u())return
q=H.f(t.gv(t))
C.a.j(b,q)
s+=q.length+2;++r}if(!t.u()){if(r<=5)return
p=b.pop()
o=b.pop()}else{n=t.gv(t);++r
if(!t.u()){if(r<=4){C.a.j(b,H.f(n))
return}p=H.f(n)
o=b.pop()
s+=p.length+2}else{m=t.gv(t);++r
H.b(r<100)
for(;t.u();n=m,m=l){l=t.gv(t);++r
if(r>100){while(!0){if(!(s>75&&r>3))break
s-=b.pop().length+2;--r}C.a.j(b,"...")
return}}o=H.f(n)
p=H.f(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)C.a.j(b,k)
C.a.j(b,o)
C.a.j(b,p)},
j5:function(a,b){var t,s
t=P.aF(null,null,null,b)
for(s=J.aP(a);s.u();)t.j(0,s.gv(s))
return t},
kc:function(a){var t,s,r
t={}
if(P.jo(a))return"{...}"
s=new P.bt("")
try{C.a.j($.$get$bO(),a)
r=s
r.a=r.gag()+"{"
t.a=!0
J.jD(a,new P.eT(t,s))
t=s
t.a=t.gag()+"}"}finally{t=$.$get$bO()
H.b(C.a.gaM(t)===a)
t.pop()}t=s.gag()
return t.charCodeAt(0)==0?t:t},
j6:function(a,b){var t=new P.eQ(null,0,0,0,[b])
t.dh(a,b)
return t},
hN:function hN(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hL:function hL(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hM:function hM(a,b,c){this.a=a
this.b=b
this.c=c},
bA:function bA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hJ:function hJ(){},
j4:function j4(){},
cg:function cg(){},
n:function n(){},
ci:function ci(){},
eT:function eT(a,b){this.a=a
this.b=b},
aZ:function aZ(){},
eQ:function eQ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hO:function hO(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fC:function fC(){},
fB:function fB(){},
bB:function bB(){},
m3:function(a){var t=J.v(a)
if(!!t.$isay)return t.l(a)
return"Instance of '"+H.br(a)+"'"},
kb:function(a,b,c){var t,s
t=H.z([],[c])
for(s=J.aP(a);s.u();)C.a.j(t,s.gv(s))
if(b)return t
return J.ao(t)},
kl:function(a,b,c){var t=J.aP(b)
if(!t.u())return a
if(c.length===0){do a+=H.f(t.gv(t))
while(t.u())}else{a+=H.f(t.gv(t))
for(;t.u();)a=a+c+H.f(t.gv(t))}return a},
lV:function(a,b){return J.lj(a,b)},
lY:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+t
if(t>=10)return s+"00"+t
return s+"000"+t},
lZ:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bZ:function(a){if(a>=10)return""+a
return"0"+a},
m0:function(a,b,c,d,e,f){return new P.az(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
c5:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bd(a)
if(typeof a==="string")return JSON.stringify(a)
return P.m3(a)},
lQ:function(a){return new P.bW(a)},
jM:function(a){return new P.a_(!1,null,null,a)},
iT:function(a,b,c){return new P.a_(!0,a,b,c)},
lP:function(a){return new P.a_(!1,null,a,"Must not be null")},
fr:function(a,b,c){return new P.cv(null,null,!0,a,b,"Value not in range")},
aH:function(a,b,c,d,e){return new P.cv(b,c,!0,a,d,"Invalid value")},
ki:function(a,b,c,d,e,f){if(C.b.a0(0,a)||C.b.a0(a,c))throw H.c(P.aH(a,0,c,"start",f))
if(b!=null){if(a>b||C.b.a0(b,c))throw H.c(P.aH(b,a,c,"end",f))
return b}return c},
B:function(a,b,c,d,e){var t=e!=null?e:J.bc(b)
return new P.eD(b,t,!0,a,c,"Index out of range")},
u:function(a){return new P.ha(a)},
kB:function(a){return new P.h8(a)},
ja:function(a){return new P.b1(a)},
al:function(a){return new P.dO(a)},
c6:function(a){return new P.hy(a)},
a7:function(a){H.iz(H.f(a))},
aj:function aj(){},
I:function I(){},
bf:function bf(a,b){this.a=a
this.b=b},
W:function W(){},
az:function az(a){this.a=a},
e4:function e4(){},
e5:function e5(){},
aU:function aU(){},
bW:function bW(a){this.a=a},
ct:function ct(){},
a_:function a_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cv:function cv(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eD:function eD(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ha:function ha(a){this.a=a},
h8:function h8(a){this.a=a},
b1:function b1(a){this.a=a},
dO:function dO(a){this.a=a},
cD:function cD(){},
dX:function dX(a){this.a=a},
iY:function iY(){},
hy:function hy(a){this.a=a},
e8:function e8(a,b,c){this.a=a
this.b=b
this.$ti=c},
y:function y(){},
U:function U(){},
cd:function cd(){},
i:function i(){},
aY:function aY(){},
O:function O(){},
a6:function a6(){},
G:function G(){},
b0:function b0(){},
p:function p(){},
bt:function bt(a){this.a=a},
je:function je(){},
id:function(a){var t,s,r,q,p
if(a==null)return
t=P.M()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.D)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
n1:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.jD(a,new P.ic(t))
return t},
k_:function(){var t=$.jZ
if(t==null){t=J.iM(window.navigator.userAgent,"Opera",0)
$.jZ=t}return t},
m_:function(){var t,s
t=$.jW
if(t!=null)return t
s=$.jX
if(s==null){s=J.iM(window.navigator.userAgent,"Firefox",0)
$.jX=s}if(s)t="-moz-"
else{s=$.jY
if(s==null){s=!P.k_()&&J.iM(window.navigator.userAgent,"Trident/",0)
$.jY=s}if(s)t="-ms-"
else t=P.k_()?"-o-":"-webkit-"}$.jW=t
return t},
ic:function ic(a){this.a=a},
np:function(a){return Math.sqrt(a)},
hS:function hS(){},
V:function V(){},
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
ej:function ej(){},
ek:function ek(){},
el:function el(){},
em:function em(){},
en:function en(){},
eo:function eo(){},
ep:function ep(){},
eq:function eq(){},
et:function et(){},
ev:function ev(){},
a2:function a2(){},
aa:function aa(){},
eC:function eC(){},
eM:function eM(){},
eV:function eV(){},
eX:function eX(){},
fd:function fd(){},
fk:function fk(){},
fo:function fo(){},
fp:function fp(){},
fs:function fs(){},
ft:function ft(){},
bs:function bs(){},
fS:function fS(){},
w:function w(){},
fT:function fT(){},
bv:function bv(){},
bw:function bw(){},
h4:function h4(){},
hc:function hc(){},
cZ:function cZ(){},
d_:function d_(){},
d5:function d5(){},
d6:function d6(){},
df:function df(){},
dg:function dg(){},
dl:function dl(){},
dm:function dm(){},
dI:function dI(){},
dJ:function dJ(){},
aR:function aR(){},
fe:function fe(){},
fx:function fx(){},
fy:function fy(){},
fI:function fI(){},
db:function db(){},
dc:function dc(){}},W={
n3:function(){return document},
m1:function(a,b,c){var t,s
t=document.body
s=(t&&C.o).S(t,a,b,c)
s.toString
t=new H.cN(new W.R(s),new W.e7(),[W.r])
return t.gac(t)},
m2:function(a){return"wheel"},
bh:function(a){var t,s,r
t="element tag unavailable"
try{s=J.lx(a)
if(typeof s==="string")t=a.tagName}catch(r){H.P(r)}return t},
mH:function(a,b){return document.createElement(a)},
aO:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kI:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
a3:function(a,b,c,d,e){var t=c==null?null:W.kO(new W.hx(c))
t=new W.hw(0,a,b,t,!1,[e])
t.dt(a,b,c,!1,e)
return t},
kF:function(a){var t,s
t=document.createElement("a")
s=new W.hX(t,window.location)
s=new W.bz(s)
s.du(a)
return s},
mK:function(a,b,c,d){return!0},
mL:function(a,b,c,d){var t,s,r,q,p
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
kJ:function(){var t=P.p
t=new W.i3(P.j5(C.q,t),P.aF(null,null,null,t),P.aF(null,null,null,t),P.aF(null,null,null,t),null)
t.dz(null,new H.bn(C.q,new W.i4(),[H.au(C.q,0),null]),["TEMPLATE"],null)
return t},
kO:function(a){var t=$.C
if(t===C.f)return a
return t.e7(a)},
j:function j(){},
bV:function bV(){},
dE:function dE(){},
dF:function dF(){},
dG:function dG(){},
av:function av(){},
bX:function bX(){},
dL:function dL(){},
ax:function ax(){},
dP:function dP(){},
dQ:function dQ(){},
dR:function dR(){},
dS:function dS(){},
aS:function aS(){},
dT:function dT(){},
a0:function a0(){},
aT:function aT(){},
dU:function dU(){},
dV:function dV(){},
dW:function dW(){},
dY:function dY(){},
dZ:function dZ(){},
c_:function c_(){},
bg:function bg(){},
e_:function e_(){},
c0:function c0(){},
e0:function e0(){},
c1:function c1(){},
e1:function e1(){},
c2:function c2(){},
c3:function c3(){},
c4:function c4(){},
e2:function e2(){},
e3:function e3(){},
a1:function a1(){},
e7:function e7(){},
h:function h(){},
e:function e(){},
er:function er(){},
es:function es(){},
ew:function ew(){},
ez:function ez(){},
cb:function cb(){},
eA:function eA(){},
bj:function bj(){},
cc:function cc(){},
eB:function eB(){},
bk:function bk(){},
bl:function bl(){},
aD:function aD(){},
eR:function eR(){},
eS:function eS(){},
eY:function eY(){},
f_:function f_(){},
bo:function bo(){},
f0:function f0(){},
N:function N(){},
R:function R(a){this.a=a},
r:function r(){},
cq:function cq(){},
bq:function bq(){},
ac:function ac(){},
fn:function fn(){},
fq:function fq(){},
cu:function cu(){},
cy:function cy(){},
fA:function fA(){},
aq:function aq(){},
fF:function fF(){},
fH:function fH(){},
ad:function ad(){},
fM:function fM(){},
fN:function fN(a){this.a=a},
cF:function cF(){},
fU:function fU(){},
fV:function fV(){},
bu:function bu(){},
fX:function fX(){},
fY:function fY(){},
fZ:function fZ(){},
aI:function aI(){},
h2:function h2(){},
h3:function h3(){},
cL:function cL(){},
aJ:function aJ(){},
hb:function hb(){},
hd:function hd(){},
he:function he(){},
hf:function hf(){},
aL:function aL(){},
bx:function bx(){},
hh:function hh(a){this.a=a},
jg:function jg(){},
hq:function hq(){},
hr:function hr(){},
hI:function hI(){},
d2:function d2(){},
i_:function i_(){},
i0:function i0(){},
hn:function hn(){},
hs:function hs(a){this.a=a},
hv:function hv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jj:function jj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hw:function hw(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
hx:function hx(a){this.a=a},
bz:function bz(a){this.a=a},
o:function o(){},
cs:function cs(a){this.a=a},
fb:function fb(a){this.a=a},
fa:function fa(a,b,c){this.a=a
this.b=b
this.c=c},
bG:function bG(){},
hY:function hY(){},
hZ:function hZ(){},
i3:function i3(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
i4:function i4(){},
i1:function i1(){},
c9:function c9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cr:function cr(){},
j8:function j8(){},
jf:function jf(){},
hX:function hX(a,b){this.a=a
this.b=b},
dn:function dn(a){this.a=a},
i5:function i5(a){this.a=a},
cP:function cP(){},
cQ:function cQ(){},
cR:function cR(){},
cS:function cS(){},
cT:function cT(){},
cU:function cU(){},
cV:function cV(){},
cX:function cX(){},
cY:function cY(){},
d0:function d0(){},
d1:function d1(){},
d3:function d3(){},
d4:function d4(){},
d7:function d7(){},
d8:function d8(){},
bH:function bH(){},
bI:function bI(){},
d9:function d9(){},
da:function da(){},
de:function de(){},
dh:function dh(){},
di:function di(){},
bJ:function bJ(){},
bK:function bK(){},
dj:function dj(){},
dk:function dk(){},
dp:function dp(){},
dq:function dq(){},
dr:function dr(){},
ds:function ds(){},
dt:function dt(){},
du:function du(){},
dv:function dv(){},
dw:function dw(){},
dx:function dx(){},
dy:function dy(){}},B={
nn:function(a){var t,s
t=document
s=W.aD
W.a3(t,"keydown",new B.iB(),!1,s)
W.a3(t,"keyup",new B.iC(),!1,s)
if(!$.no)W.a3(t,"mousemove",new B.iD(),!1,W.N)
s=W.N
W.a3(t,"mousedown",new B.iE(),!1,s)
W.a3(t,"mouseup",new B.iF(),!1,s)},
mh:function(a,b,c,d){var t,s,r,q,p,o,n
t=new Float32Array(3)
s=$.$get$ie()
r=$.$get$bQ()
q=new T.E(new Float32Array(16))
q.I()
p=new Float32Array(3)
o=new Float32Array(3)
n=new Float32Array(3)
t=new B.ff(a,b,c,0,new T.d(t),-0.02,s,r,q,new T.d(p),new T.d(o),new T.d(n),new T.d(new Float32Array(3)),"camera:orbit",!1,!0)
t.di(a,b,c,d)
return t},
iB:function iB(){},
iC:function iC(){},
iD:function iD(){},
iE:function iE(){},
iF:function iF(){},
ff:function ff(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
fg:function fg(a){this.a=a},
fh:function fh(a){this.a=a},
fi:function fi(){},
fj:function fj(a){this.a=a},
lW:function(d1,d2,d3,d4,d5,d6,d7,d8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0
t=-d6
s=-d7
r=new T.d(new Float32Array(3))
r.m(t,s,d8)
q=new T.d(new Float32Array(3))
q.m(d6,s,d8)
p=new T.d(new Float32Array(3))
p.m(d6,d7,d8)
o=new T.d(new Float32Array(3))
o.m(t,d7,d8)
n=-d8
m=new T.d(new Float32Array(3))
m.m(t,s,n)
l=new T.d(new Float32Array(3))
l.m(t,d7,n)
k=new T.d(new Float32Array(3))
k.m(d6,d7,n)
j=new T.d(new Float32Array(3))
j.m(d6,s,n)
i=new T.d(new Float32Array(3))
i.m(t,d7,n)
h=new T.d(new Float32Array(3))
h.m(t,d7,d8)
g=new T.d(new Float32Array(3))
g.m(d6,d7,d8)
f=new T.d(new Float32Array(3))
f.m(d6,d7,n)
e=new T.d(new Float32Array(3))
e.m(d6,s,d8)
d=new T.d(new Float32Array(3))
d.m(t,s,d8)
c=new T.d(new Float32Array(3))
c.m(t,s,n)
b=new T.d(new Float32Array(3))
b.m(d6,s,n)
a=new T.d(new Float32Array(3))
a.m(d6,s,n)
a0=new T.d(new Float32Array(3))
a0.m(d6,d7,n)
a1=new T.d(new Float32Array(3))
a1.m(d6,d7,d8)
a2=new T.d(new Float32Array(3))
a2.m(d6,s,d8)
a3=new T.d(new Float32Array(3))
a3.m(t,s,n)
a4=new T.d(new Float32Array(3))
a4.m(t,s,d8)
s=new T.d(new Float32Array(3))
s.m(t,d7,d8)
a5=new T.d(new Float32Array(3))
a5.m(t,d7,n)
t=new T.m(new Float32Array(2))
t.q(d3,d5)
n=new T.m(new Float32Array(2))
n.q(d2,d5)
a6=new T.m(new Float32Array(2))
a6.q(d2,d4)
a7=new T.m(new Float32Array(2))
a7.q(d3,d4)
a8=new T.m(new Float32Array(2))
a8.q(d2,d5)
a9=new T.m(new Float32Array(2))
a9.q(d2,d4)
b0=new T.m(new Float32Array(2))
b0.q(d3,d4)
b1=new T.m(new Float32Array(2))
b1.q(d3,d5)
b2=new T.m(new Float32Array(2))
b2.q(d3,d4)
b3=new T.m(new Float32Array(2))
b3.q(d3,d5)
b4=new T.m(new Float32Array(2))
b4.q(d2,d5)
b5=new T.m(new Float32Array(2))
b5.q(d2,d4)
b6=new T.m(new Float32Array(2))
b6.q(d2,d4)
b7=new T.m(new Float32Array(2))
b7.q(d3,d4)
b8=new T.m(new Float32Array(2))
b8.q(d3,d5)
b9=new T.m(new Float32Array(2))
b9.q(d2,d5)
c0=new T.m(new Float32Array(2))
c0.q(d2,d5)
c1=new T.m(new Float32Array(2))
c1.q(d2,d4)
c2=new T.m(new Float32Array(2))
c2.q(d3,d4)
c3=new T.m(new Float32Array(2))
c3.q(d3,d5)
c4=new T.m(new Float32Array(2))
c4.q(d3,d5)
c5=new T.m(new Float32Array(2))
c5.q(d2,d5)
c6=new T.m(new Float32Array(2))
c6.q(d2,d4)
c7=new T.m(new Float32Array(2))
c7.q(d3,d4)
c8=new G.an(!1,[],[],[],P.M())
c8.P("aTexUV")
c8.P("aNormal")
c8.aD(6)
c8.aa([r,q,p,o,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,s,a5])
c8.W("aTexUV",[t,n,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7])
for(c9=0;t=$.$get$kD(),c9<6;++c9){d0=t[c9]
c8.aT("aNormal",[d0,d0,d0,d0])}return c8},
lX:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=c/2
s=[]
r=[]
for(q=-t,p=0;p<d;++p){o=p/d*3.141592653589793*2
n=Math.sin(o)
m=Math.cos(o)
l=new Float32Array(3)
l[0]=a*n
l[1]=t
l[2]=a*m
C.a.j(s,new T.d(l))
l=new Float32Array(3)
l[0]=b*n
l[1]=q
l[2]=b*m
C.a.j(r,new T.d(l))}C.a.j(s,s[0])
C.a.j(r,r[0])
l=d+1
H.b(s.length===l)
H.b(r.length===l)
k=new T.m(new Float32Array(2))
k.q(0,0)
j=new T.d(new Float32Array(3))
j.m(0,t,0)
i=new T.d(new Float32Array(3))
i.m(0,q,0)
h=new G.an(!1,[],[],[],P.M())
h.P("aTexUV")
h.bq(2*d)
for(p=0;p<d;p=g){g=p+1
h.aa([j,s[p],s[g]])
h.aa([i,r[g],r[p]])
h.W("aTexUV",[k,k,k])
h.W("aTexUV",[k,k,k])}h.aD(d)
for(p=0;p<d;p=g){g=p+1
h.aa([s[g],s[p],r[p],r[g]])
h.W("aTexUV",[k,k,k,k])}return h},
m7:function(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
t=[]
s=[]
C.a.N(t,$.$get$k4())
C.a.N(s,$.$get$k5())
for(r=0;r<a3;++r,t=q){q=[]
for(p=t.length,o=0;o<t.length;t.length===p||(0,H.D)(t),++o){n=t[o]
m=J.k(n)
l=C.a.h(s,m.gX(n))
k=new T.d(new Float32Array(3))
k.t(l)
k.j(0,C.a.h(s,m.gR(n)))
k.a8(0,0.5)
k.D(0)
l=C.a.h(s,m.gR(n))
j=new T.d(new Float32Array(3))
j.t(l)
j.j(0,C.a.h(s,m.ga3(n)))
j.a8(0,0.5)
j.D(0)
l=C.a.h(s,m.ga3(n))
i=new T.d(new Float32Array(3))
i.t(l)
i.j(0,C.a.h(s,m.gX(n)))
i.a8(0,0.5)
i.D(0)
h=s.length
C.a.j(s,k)
g=s.length
C.a.j(s,j)
f=s.length
C.a.j(s,i)
C.a.j(q,new G.a9(m.gX(n),h,f))
C.a.j(q,new G.a9(m.gR(n),g,h))
C.a.j(q,new G.a9(m.ga3(n),f,g))
C.a.j(q,new G.a9(h,g,f))}}e=new G.an(!1,[],[],[],P.M())
e.P("aTexUV")
e.P("aNormal")
for(p=t.length,o=0;o<t.length;t.length===p||(0,H.D)(t),++o){n=t[o]
m=J.k(n)
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
e.aT("aNormal",[d,c,b])
m=new T.d(new Float32Array(3))
m.t(d)
m.a8(0,a4)
l=new T.d(new Float32Array(3))
l.t(c)
l.a8(0,a4)
a2=new T.d(new Float32Array(3))
a2.t(b)
a2.a8(0,a4)
e.d7([m,l,a2])
e.W("aTexUV",[new T.m(a),new T.m(a0),new T.m(a1)])}return e},
mu:function(a,b,c,d,e,f,a0,a1,a2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=a0+1
s=B.mi(new B.fE(e,d,f,c),0,6.283185307179586,t,!1,0.001)
H.b(s.length===2*t)
r=B.mB(s,a1,a2,!1)
H.b(r.length===t)
q=new G.an(!1,[],[],[],P.M())
for(p=0;p<a0;p=o)for(o=p+1,n=0;n<a1;n=m){m=n+1
q.aD(1)
l=r[p]
k=m*2
j=l[k]
i=r[o]
h=n*2
q.aa([j,i[k],i[h],l[h]])}q.P("aTexUV")
for(p=0;p<a0;p=o)for(l=p/a0,o=p+1,n=0;n<a1;n=m){m=n+1
k=m/a1
j=new Float32Array(2)
j[0]=l
j[1]=k
i=o/a0
h=new Float32Array(2)
h[0]=i
h[1]=k
k=n/a1
g=new Float32Array(2)
g[0]=i
g[1]=k
i=new Float32Array(2)
i[0]=l
i[1]=k
q.W("aTexUV",[new T.m(j),new T.m(h),new T.m(g),new T.m(i)])}q.bu()
return q},
mB:function(a1,a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
C.a.j(t,i)
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
r.t(k)
r.aJ(p,a)
r.aJ(n,a0)
h=new T.d(new Float32Array(3))
h.t(r)
C.a.j(i,h)
s[2]=0
s[1]=0
s[0]=0
r.aJ(p,a)
r.aJ(n,a0)
r.D(0)
h=new T.d(new Float32Array(3))
h.t(r)
C.a.j(i,h)}}return t},
mi:function(a,b,c,d,e,f){var t,s,r,q,p,o,n
H.b(d>=2)
t=[]
s=new T.d(new Float32Array(3))
r=new T.d(new Float32Array(3))
for(q=(c-b)/(d-1),p=0;p<d;++p){o=q*p+b
a.$2(o,s)
a.$2(o+f,r)
r.aC(0,s)
n=new T.d(new Float32Array(3))
n.t(s)
C.a.j(t,n)
n=new T.d(new Float32Array(3))
n.t(r)
C.a.j(t,n)}return t},
fE:function fE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},G={
mC:function(a){var t,s,r
t=H.z(a.split("\n"),[P.p])
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.f(t[s])}return C.a.ay(t,"\n")},
kC:function(a,b,c){var t,s,r,q
t=J.k(a)
s=t.c6(a,b)
t.bm(a,s,c)
t.c3(a,s)
r=t.bi(a,s,35713)
if(r!=null&&!r){q=t.bh(a,s)
P.a7("E:Compilation failed:")
P.a7("E:"+G.mC(c))
P.a7("E:Failure:")
P.a7(C.i.ab("E:",q))
throw H.c(q)}return s},
H:function(a,b,c){return new G.a9(a,b,c)},
kd:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
d.t(b)
d.aC(0,a)
e.t(c)
e.aC(0,a)
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
km:function(a,b,c){return new G.cI(a,b,c)},
k3:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.iP(a[s])
b[t+1]=J.iQ(a[s])
b[t+2]=J.jE(a[s])}return b},
m5:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.iP(a[s])
b[t+1]=J.iQ(a[s])}return b},
m6:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.iP(a[s])
b[t+1]=J.iQ(a[s])
b[t+2]=J.jE(a[s])
b[t+3]=J.ly(a[s])}return b},
m4:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.ba(a[s],0)
b[t+1]=J.ba(a[s],1)
b[t+2]=J.ba(a[s],2)
b[t+3]=J.ba(a[s],3)}return b},
mJ:function(a,b){var t,s,r,q,p,o,n,m,l,k
for(t=a.e,s=t.gH(t),s=s.gC(s),r=b.x,q=[[P.i,P.y]],p=[P.W],o=[T.A],n=[T.d],m=[T.m];s.u();){l=s.gv(s)
if(!r.J(0,l)){l="Dropping unnecessary attribute: "+H.f(l)
if($.kU>0)H.iz("I: "+l)
continue}k=t.h(0,l)
switch($.$get$S().h(0,l).a){case"vec2":b.an(l,G.m5(H.dC(k,"$isi",m,"$asi"),null),2)
break
case"vec3":b.an(l,G.k3(H.dC(k,"$isi",n,"$asi"),null),3)
break
case"vec4":b.an(l,G.m6(H.dC(k,"$isi",o,"$asi"),null),4)
break
case"float":b.an(l,new Float32Array(H.i7(H.dC(k,"$isi",p,"$asi"))),1)
break
case"uvec4":b.an(l,G.m4(H.dC(k,"$isi",q,"$asi"),null),4)
break
default:if(H.ai(!1))H.as("unknown type for "+H.f(l)+" ["+J.lw(k[0]).l(0)+"] ["+new H.ar(H.ik(k),null).l(0)+"] "+H.f(k))}}},
bi:function(a,b,c){var t,s,r,q,p,o,n,m
t=b.d
s=b.e.x
r=P.M()
q=J.ll(t.a)
p=new G.eZ(t,q,4,r,s,null,0,-1,null,null,P.M(),"meshdata:"+a,!1,!0)
o=G.k3(c.d,null)
r.i(0,"aPosition",J.iN(t.a))
p.ch=o
p.bt("aPosition",o,3)
n=$.$get$S().h(0,"aPosition")
if(n==null)H.L("Unknown canonical aPosition")
H.b(s.J(0,"aPosition"))
m=s.h(0,"aPosition")
J.dD(t.a,q)
t.ce(0,m,0)
t.cI(0,r.h(0,"aPosition"),m,n.bv(),5126,!1,0,0)
s=c.de()
p.y=J.iN(t.a)
H.b(p.ch!=null)
r=p.ch.length
if(r<768){p.sb0(new Uint8Array(H.i7(s)))
p.Q=5121}else if(r<196608){p.sb0(new Uint16Array(H.i7(s)))
p.Q=5123}else{p.sb0(new Uint32Array(H.i7(s)))
p.Q=5125}J.dD(t.a,q)
s=p.y
r=p.cx
q=J.v(r)
H.b(!!q.$isky||!!q.$iskz||!!q.$iskA)
J.iL(t.a,34963,s)
J.jC(t.a,34963,r,35048)
G.mJ(c,p)
return p},
ms:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.aF(null,null,null,P.p)
s=c.b
r=d.b
q=c.f
p=J.lk(b.a)
o=G.kC(b.a,35633,s)
J.jA(b.a,p,o)
n=G.kC(b.a,35632,r)
J.jA(b.a,p,n)
if(q.length>0)J.lH(b.a,p,q,35980)
J.lC(b.a,p)
if(!J.lB(b.a,p,35714))H.L(J.lA(b.a,p))
t=new G.fw(b,c,d,p,P.j5(c.c,null),P.M(),P.M(),t,null,a,!1,!0)
t.dk(a,b,c,d)
return t},
kj:function(a){return new G.fD(a,null,[],[],[],[],0,P.M())},
f1:function f1(){},
cM:function cM(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dK:function dK(){},
dN:function dN(a,b){this.a=a
this.b=b},
ex:function ex(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
a9:function a9(a,b,c){this.a=a
this.b=b
this.c=c},
c7:function c7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
an:function an(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cJ:function cJ(a,b,c){this.a=a
this.b=b
this.c=c},
cI:function cI(a,b,c){this.a=a
this.b=b
this.c=c},
eW:function eW(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
eZ:function eZ(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
fl:function fl(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
fw:function fw(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
fD:function fD(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fG:function fG(){}},R={cx:function cx(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
_.c=m},fK:function fK(){},fL:function fL(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},A={
kT:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=b.dx
t.t(c)
s=b.d
t.ck(0,s)
r=b.cx
H.f(b)
q=C.a.gaM(e)
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
p.ee(new T.Z(o))
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
C.a.j(e,b.ch)
a.dd(r,e,d)
e.pop()
for(s=b.cy,r=s.length,l=0;l<s.length;s.length===r||(0,H.D)(s),++l)A.kT(a,s[l],t,d,e)},
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
cz:function cz(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.a=d
_.b=e
_.c=f},
fv:function fv(){},
dA:function(a){var t,s
t=C.V.eu(a,0,new A.il())
s=536870911&t+(C.b.cK(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
il:function il(){}},T={
J:function(a,b,c){var t=new T.d(new Float32Array(3))
t.m(a,b,c)
return t},
Z:function Z(a){this.a=a},
E:function E(a){this.a=a},
m:function m(a){this.a=a},
d:function d(a){this.a=a},
A:function A(a){this.a=a}},O={
nh:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3
t={}
s=document
r=new R.fL(0,0,null,null,null,null)
r.dl(C.m.cN(s,"stats"),"blue","gray")
q=C.m.cl(s,"#webgl-canvas")
p=new G.dN(null,q)
s=(q&&C.H).cM(q,"webgl2",P.aE(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
p.a=s
if(s==null)H.L(P.c6('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
o="ChronosGL Config: "+H.f(J.lz(s))
if($.kU>0)P.a7("I: "+o)
J.li(s,0,0,0,1)
J.bU(s,2929)
J.bU(s,2884)
n=B.mh(25,10,0,q)
s=new T.E(new Float32Array(16))
s.I()
o=new T.E(new Float32Array(16))
o.I()
m=new G.fl(n,50,1,0.1,1000,s,o,new T.E(new Float32Array(16)),P.M(),"perspective",!1,!0)
m.bx()
s=H.z([],[A.cz])
l=new R.cx(q,m,null,p,s,17664,0,0,0,0,"main",!1,!0)
l.dj("main",p,null)
l.cn(null)
W.a3(window,"resize",l.geM(),!1,W.h)
o=G.ms("main",p,$.$get$l8(),$.$get$l7())
k=[]
H.b(!0)
C.a.j(s,new A.cz(o,[m],k,"wireframe",!1,!0))
j=new G.eW(P.M(),"wire",!1,!0)
j.af("cDepthTest",!0)
j.af("cDepthWrite",!0)
j.af("cBlendEquation",$.$get$iU())
j.af("cStencilFunc",$.$get$kk())
s=new T.A(new Float32Array(4))
s.V(1,1,0,1)
j.af("uColorAlpha",s)
s=new T.A(new Float32Array(4))
s.V(0,0,0,0.5)
j.af("uColorAlpha2",s)
i=B.m7(2,1,!0)
i.ae()
s=G.bi("icosahedron",o,i)
h=new Float32Array(9)
g=new T.E(new Float32Array(16))
g.I()
f=new T.E(new Float32Array(16))
f.I()
e=new Float32Array(3)
d=new Float32Array(3)
c=new Float32Array(3)
b=new A.ap(j,s,[],new T.Z(h),g,f,new T.d(e),new T.d(d),new T.d(c),new T.d(new Float32Array(3)),"sphere",!1,!0)
b.a9(0,0,0)
H.b(!0)
C.a.j(k,b)
i=B.lW(!0,1,0,1,0,1,1,1)
i.ae()
s=G.bi("cube",o,i)
h=new Float32Array(9)
g=new T.E(new Float32Array(16))
g.I()
f=new T.E(new Float32Array(16))
f.I()
e=new Float32Array(3)
d=new Float32Array(3)
c=new Float32Array(3)
a=new A.ap(j,s,[],new T.Z(h),g,f,new T.d(e),new T.d(d),new T.d(c),new T.d(new Float32Array(3)),"cube",!1,!0)
a.a9(-5,0,-5)
H.b(!0)
C.a.j(k,a)
s=new T.d(new Float32Array(3))
s.m(-1,-1,1)
h=new T.d(new Float32Array(3))
h.m(1,-1,1)
g=new T.d(new Float32Array(3))
g.m(-1,1,1)
f=new T.d(new Float32Array(3))
f.m(-1,-1,-1)
e=new T.d(new Float32Array(3))
e.m(-1,1,-1)
d=new T.d(new Float32Array(3))
d.m(1,-1,-1)
c=new T.d(new Float32Array(3))
c.m(-1,1,-1)
a0=new T.d(new Float32Array(3))
a0.m(-1,1,1)
a1=new T.d(new Float32Array(3))
a1.m(1,-1,1)
a2=new T.d(new Float32Array(3))
a2.m(1,-1,-1)
a3=new T.d(new Float32Array(3))
a3.m(1,-1,1)
a4=new T.d(new Float32Array(3))
a4.m(-1,-1,1)
a5=new T.d(new Float32Array(3))
a5.m(-1,-1,-1)
a6=new T.d(new Float32Array(3))
a6.m(1,-1,-1)
a7=new T.d(new Float32Array(3))
a7.m(-1,-1,-1)
a8=new T.d(new Float32Array(3))
a8.m(-1,-1,1)
a9=new T.d(new Float32Array(3))
a9.m(-1,1,1)
b0=new T.d(new Float32Array(3))
b0.m(-1,1,-1)
b1=new T.m(new Float32Array(2))
b1.q(0,0)
b2=new T.m(new Float32Array(2))
b2.q(1,0)
b3=new T.m(new Float32Array(2))
b3.q(1,1)
b4=new T.m(new Float32Array(2))
b4.q(1,0)
b5=new T.m(new Float32Array(2))
b5.q(1,1)
b6=new T.m(new Float32Array(2))
b6.q(0,1)
b7=new T.m(new Float32Array(2))
b7.q(0,1)
b8=new T.m(new Float32Array(2))
b8.q(0,0)
b9=new T.m(new Float32Array(2))
b9.q(1,0)
c0=new T.m(new Float32Array(2))
c0.q(1,1)
c1=new T.m(new Float32Array(2))
c1.q(1,1)
c2=new T.m(new Float32Array(2))
c2.q(0,1)
c3=new T.m(new Float32Array(2))
c3.q(0,0)
c4=new T.m(new Float32Array(2))
c4.q(1,0)
c5=new T.m(new Float32Array(2))
c5.q(0,0)
c6=new T.m(new Float32Array(2))
c6.q(1,0)
c7=new T.m(new Float32Array(2))
c7.q(1,1)
c8=new T.m(new Float32Array(2))
c8.q(0,1)
i=new G.an(!1,[],[],[],P.M())
i.P("aTexUV")
i.P("aNormal")
i.bq(2)
i.aa([s,h,g,f,e,d])
i.W("aTexUV",[b1,b2,b3,b4,b5,b6])
i.aD(3)
i.aa([c,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0])
i.W("aTexUV",[b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8])
i.bu()
i.ae()
s=G.bi("wedge",o,i)
h=new Float32Array(9)
g=new T.E(new Float32Array(16))
g.I()
f=new T.E(new Float32Array(16))
f.I()
e=new Float32Array(3)
d=new Float32Array(3)
c=new Float32Array(3)
c9=new A.ap(j,s,[],new T.Z(h),g,f,new T.d(e),new T.d(d),new T.d(c),new T.d(new Float32Array(3)),"wedge",!1,!0)
c9.a9(0,-5,0)
H.b(!0)
C.a.j(k,c9)
i=B.lX(3,4,2,16)
i.ae()
s=G.bi("cylinder",o,i)
h=new Float32Array(9)
g=new T.E(new Float32Array(16))
g.I()
f=new T.E(new Float32Array(16))
f.I()
e=new Float32Array(3)
d=new Float32Array(3)
c=new Float32Array(3)
d0=new A.ap(j,s,[],new T.Z(h),g,f,new T.d(e),new T.d(d),new T.d(c),new T.d(new Float32Array(3)),"cylinder",!1,!0)
d0.a9(5,0,-5)
H.b(!0)
C.a.j(k,d0)
s=new T.d(new Float32Array(3))
s.m(-2,-2,0)
h=new T.d(new Float32Array(3))
h.m(2,-2,0)
g=new T.d(new Float32Array(3))
g.m(2,2,0)
f=new T.d(new Float32Array(3))
f.m(-2,2,0)
e=new T.m(new Float32Array(2))
e.q(0,0)
d=new T.m(new Float32Array(2))
d.q(1,0)
c=new T.m(new Float32Array(2))
c.q(1,1)
a0=new T.m(new Float32Array(2))
a0.q(0,1)
d1=new T.d(new Float32Array(3))
d1.m(0,0,1)
i=new G.an(!1,[],[],[],P.M())
i.P("aTexUV")
i.d8([s,h,g,f])
i.W("aTexUV",[e,d,c,a0])
i.P("aNormal")
i.aT("aNormal",[d1,d1,d1,d1])
i.ae()
s=G.bi("quad",o,i)
h=new Float32Array(9)
g=new T.E(new Float32Array(16))
g.I()
f=new T.E(new Float32Array(16))
f.I()
e=new Float32Array(3)
d=new Float32Array(3)
c=new Float32Array(3)
d2=new A.ap(j,s,[],new T.Z(h),g,f,new T.d(e),new T.d(d),new T.d(c),new T.d(new Float32Array(3)),"quad",!1,!0)
d2.a9(-5,0,5)
H.b(!0)
C.a.j(k,d2)
i=B.mu(!0,!0,1,2,3,1,128,16,0.4)
i.ae()
s=G.bi("torus",o,i)
o=new Float32Array(9)
h=new T.E(new Float32Array(16))
h.I()
g=new T.E(new Float32Array(16))
g.I()
f=new Float32Array(3)
e=new Float32Array(3)
d=new Float32Array(3)
d3=new A.ap(j,s,[],new T.Z(o),h,g,new T.d(f),new T.d(e),new T.d(d),new T.d(new Float32Array(3)),"torus",!1,!0)
d3.a9(5,0,5)
H.b(!0)
C.a.j(k,d3)
t.a=0
new O.ix(t,n,j,l,r).$1(0)},
ix:function ix(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e}}
var v=[C,H,J,P,W,B,G,R,A,T,O]
setFunctionNamesIfNecessary(v)
var $={}
H.j0.prototype={}
J.a.prototype={
B:function(a,b){return a===b},
gA:function(a){return H.aG(a)},
l:function(a){return"Instance of '"+H.br(a)+"'"},
gE:function(a){return new H.ar(H.ik(a),null)}}
J.eI.prototype={
l:function(a){return String(a)},
gA:function(a){return a?519018:218159},
gE:function(a){return C.ap},
$isaj:1}
J.eJ.prototype={
B:function(a,b){return null==b},
l:function(a){return"null"},
gA:function(a){return 0},
gE:function(a){return C.aj},
$isO:1}
J.bm.prototype={
gA:function(a){return 0},
gE:function(a){return C.ai},
l:function(a){return String(a)},
$isk9:1}
J.fm.prototype={}
J.aK.prototype={}
J.aC.prototype={
l:function(a){var t=a[$.$get$jV()]
return t==null?this.d3(a):J.bd(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isiZ:1}
J.aA.prototype={
j:function(a,b){if(!!a.fixed$length)H.L(P.u("add"))
a.push(b)},
N:function(a,b){var t,s,r,q,p
t=a.length
if(!!a.fixed$length)H.L(P.u("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.D)(b),++r,t=p){q=b[r]
p=t+1
H.b(t===a.length||H.L(P.al(a)))
a.push(q)}},
cj:function(a,b){return new H.bn(a,b,[H.au(a,0),null])},
ay:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.f(a[s])
return t.join(b)},
w:function(a,b){return this.h(a,b)},
ges:function(a){if(a.length>0)return a[0]
throw H.c(H.eH())},
gaM:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.c(H.eH())},
bl:function(a,b,c,d,e){var t,s,r
if(!!a.immutable$list)H.L(P.u("setRange"))
P.ki(b,c,a.length,null,null,null)
t=C.b.ad(c,b)
if(t===0)return
if(e<0)H.L(P.aH(e,0,null,"skipCount",null))
s=J.X(d)
if(C.b.a0(e+t,s.gk(d)))throw H.c(H.mf())
if(C.b.a7(e,b))for(r=t-1;r>=0;--r)a[b+r]=s.h(d,e+r)
else for(r=0;r<t;++r)a[b+r]=s.h(d,e+r)},
bU:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.c(P.al(a))}return!1},
cZ:function(a,b){if(!!a.immutable$list)H.L(P.u("sort"))
H.mx(a,P.n2())},
aQ:function(a){return this.cZ(a,null)},
F:function(a,b){var t
for(t=0;t<a.length;++t)if(J.F(a[t],b))return!0
return!1},
l:function(a){return P.eG(a,"[","]")},
gC:function(a){return new J.dH(a,a.length,0,null,[H.au(a,0)])},
gA:function(a){return H.aG(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.L(P.u("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.iT(b,"newLength",null))
if(b<0)throw H.c(P.aH(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.b7(a,b))
if(b>=a.length||b<0)throw H.c(H.b7(a,b))
return a[b]},
i:function(a,b,c){if(!!a.immutable$list)H.L(P.u("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.b7(a,b))
if(b>=a.length||b<0)throw H.c(H.b7(a,b))
a[b]=c},
$isq:1,
$asq:function(){},
$isl:1,
$isi:1}
J.j_.prototype={}
J.dH.prototype={
gv:function(a){return this.d},
u:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.c(H.D(t))
r=this.c
if(r>=s){this.sbz(null)
return!1}this.sbz(t[r]);++this.c
return!0},
sbz:function(a){this.d=a}}
J.aW.prototype={
Z:function(a,b){var t
if(typeof b!=="number")throw H.c(H.T(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaK(b)
if(this.gaK(a)===t)return 0
if(this.gaK(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaK:function(a){return a===0?1/a<0:a<0},
e9:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.c(P.u(""+a+".ceil()"))},
aj:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.u(""+a+".round()"))},
ea:function(a,b,c){if(this.Z(b,c)>0)throw H.c(H.T(b))
if(this.Z(a,b)<0)return b
if(this.Z(a,c)>0)return c
return a},
eU:function(a,b){var t
if(b>20)throw H.c(P.aH(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gaK(a))return"-"+t
return t},
l:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gA:function(a){return a&0x1FFFFFFF},
ab:function(a,b){if(typeof b!=="number")throw H.c(H.T(b))
return a+b},
ad:function(a,b){if(typeof b!=="number")throw H.c(H.T(b))
return a-b},
cL:function(a,b){if(typeof b!=="number")throw H.c(H.T(b))
return a/b},
K:function(a,b){if(typeof b!=="number")throw H.c(H.T(b))
return a*b},
aS:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bQ(a,b)},
M:function(a,b){return(a|0)===a?a/b|0:this.bQ(a,b)},
bQ:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.c(P.u("Result of truncating division is "+H.f(t)+": "+H.f(a)+" ~/ "+b))},
b6:function(a,b){var t
if(a>0)t=this.dX(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
dX:function(a,b){return b>31?0:a>>>b},
cK:function(a,b){if(typeof b!=="number")throw H.c(H.T(b))
return(a&b)>>>0},
d5:function(a,b){if(typeof b!=="number")throw H.c(H.T(b))
return(a^b)>>>0},
a7:function(a,b){if(typeof b!=="number")throw H.c(H.T(b))
return a<b},
a0:function(a,b){if(typeof b!=="number")throw H.c(H.T(b))
return a>b},
be:function(a,b){if(typeof b!=="number")throw H.c(H.T(b))
return a>=b},
gE:function(a){return C.as},
$isI:1,
$asI:function(){return[P.a6]},
$isW:1,
$isa6:1}
J.cf.prototype={
gE:function(a){return C.ar},
$isy:1}
J.ce.prototype={
gE:function(a){return C.aq}}
J.aB.prototype={
aV:function(a,b){if(b>=a.length)throw H.c(H.b7(a,b))
return a.charCodeAt(b)},
ab:function(a,b){if(typeof b!=="string")throw H.c(P.iT(b,null,null))
return a+b},
d_:function(a,b,c){var t
if(c>a.length)throw H.c(P.aH(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bn:function(a,b){return this.d_(a,b,0)},
bp:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.fr(b,null,null))
if(b>c)throw H.c(P.fr(b,null,null))
if(c>a.length)throw H.c(P.fr(c,null,null))
return a.substring(b,c)},
d0:function(a,b){return this.bp(a,b,null)},
eT:function(a){return a.toLowerCase()},
ec:function(a,b,c){if(c>a.length)throw H.c(P.aH(c,0,a.length,null,null))
return H.nq(a,b,c)},
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
gE:function(a){return C.ak},
gk:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.c(H.b7(a,b))
return a[b]},
$isq:1,
$asq:function(){},
$isI:1,
$asI:function(){return[P.p]},
$isp:1}
H.l.prototype={}
H.aX.prototype={
gC:function(a){return new H.ch(this,this.gk(this),0,null,[H.a5(this,"aX",0)])},
aO:function(a,b){return this.d2(0,b)},
eS:function(a,b){var t,s
t=H.z([],[H.a5(this,"aX",0)])
C.a.sk(t,this.gk(this))
for(s=0;C.b.a7(s,this.gk(this));++s)t[s]=this.w(0,s)
return t},
eR:function(a){return this.eS(a,!0)}}
H.ch.prototype={
gv:function(a){return this.d},
u:function(){var t,s,r,q
t=this.a
s=J.X(t)
r=s.gk(t)
q=this.b
if(q==null?r!=null:q!==r)throw H.c(P.al(t))
if(C.b.be(this.c,r)){this.sap(null)
return!1}this.sap(s.w(t,this.c));++this.c
return!0},
sap:function(a){this.d=a}}
H.cj.prototype={
gC:function(a){return new H.eU(null,J.aP(this.a),this.b,this.$ti)},
gk:function(a){return J.bc(this.a)},
$asU:function(a,b){return[b]}}
H.e6.prototype={$isl:1,
$asl:function(a,b){return[b]}}
H.eU.prototype={
u:function(){var t=this.b
if(t.u()){this.sap(this.c.$1(t.gv(t)))
return!0}this.sap(null)
return!1},
gv:function(a){return this.a},
sap:function(a){this.a=a},
$ascd:function(a,b){return[b]}}
H.bn.prototype={
gk:function(a){return J.bc(this.a)},
w:function(a,b){return this.b.$1(J.lr(this.a,b))},
$asl:function(a,b){return[b]},
$asaX:function(a,b){return[b]},
$asU:function(a,b){return[b]}}
H.cN.prototype={
gC:function(a){return new H.hg(J.aP(this.a),this.b,this.$ti)}}
H.hg.prototype={
u:function(){var t,s
for(t=this.a,s=this.b;t.u();)if(s.$1(t.gv(t)))return!0
return!1},
gv:function(a){var t=this.a
return t.gv(t)}}
H.aV.prototype={}
H.iG.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.iH.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.hQ.prototype={
seD:function(a){this.z=a},
seG:function(a){this.ch=a}}
H.b2.prototype={
dv:function(){var t,s
t=this.e
s=t.a
this.c.j(0,s)
this.dC(s,t)},
bT:function(a,b){if(!this.f.B(0,a))return
if(this.Q.j(0,b)&&!this.y)this.y=!0
this.b8()},
eL:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.az(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.bK();++r.d}this.y=!1}this.b8()},
e0:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.v(a),s=0;r=this.ch,s<r.length;s+=2)if(t.B(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).j(r,a)
t=this.ch;(t&&C.a).j(t,b)},
eK:function(a){var t,s,r
if(this.ch==null)return
for(t=J.v(a),s=0;r=this.ch,s<r.length;s+=2)if(t.B(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.L(P.u("removeRange"))
P.ki(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
cW:function(a,b){if(!this.r.B(0,a))return
this.db=b},
ex:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.L(0,c)
return}H.b(b===1)
t=this.cx
if(t==null){t=P.j6(null,null)
this.cx=t}t.a1(0,new H.hK(a,c))},
ew:function(a,b){var t
if(!this.r.B(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.aL()
return}H.b(b===1)
t=this.cx
if(t==null){t=P.j6(null,null)
this.cx=t}t.a1(0,this.geE())},
ey:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.a7(a)
if(b!=null)P.a7(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.bd(a)
s[1]=b==null?null:b.l(0)
for(r=new P.bA(t,t.r,null,null,[null]),r.c=t.e;r.u();)r.d.L(0,s)},
at:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.P(o)
p=H.at(o)
this.ey(q,p)
if(this.db){this.aL()
if(this===u.globalState.e)throw o}}finally{this.cy=H.mZ(r)
u.globalState.d=H.jt(t,"$isb2")
if(t!=null)$=t.geC()
if(this.cx!=null)for(;n=this.cx,!n.gax(n);)this.cx.cm().$0()}return s},
ci:function(a){return this.b.h(0,a)},
dC:function(a,b){var t=this.b
if(t.J(0,a))throw H.c(P.c6("Registry: ports must be registered only once."))
t.i(0,a,b)},
b8:function(){var t=this.b
if(t.gk(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.aL()},
aL:function(){var t,s,r
t=this.cx
if(t!=null)t.a4(0)
for(t=this.b,s=t.gcG(t),s=s.gC(s);s.u();)s.gv(s).dD()
t.a4(0)
this.c.a4(0)
u.globalState.z.az(0,this.a)
this.dx.a4(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].L(0,t[r+1])
this.ch=null}},
geC:function(){return this.d},
ged:function(){return this.e}}
H.hK.prototype={
$0:function(){this.a.L(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.ht.prototype={
ek:function(){var t=this.a
if(t.b===t.c)return
return t.cm()},
cp:function(){var t,s,r
t=this.ek()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.J(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gax(s)}else s=!1
else s=!1
else s=!1
if(s)H.L(P.c6("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gax(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aE(["command","close"])
r=new H.a4(!0,P.b3(null,P.y)).O(r)
s.toString
self.postMessage(r)}return!1}t.eI()
return!0},
bO:function(){if(self.window!=null)new H.hu(this).$0()
else for(;this.cp(););},
aA:function(){var t,s,r,q,p
if(!u.globalState.x)this.bO()
else try{this.bO()}catch(r){t=H.P(r)
s=H.at(r)
q=u.globalState.Q
p=P.aE(["command","error","msg",H.f(t)+"\n"+H.f(s)])
p=new H.a4(!0,P.b3(null,P.y)).O(p)
q.toString
self.postMessage(p)}}}
H.hu.prototype={
$0:function(){if(!this.a.cp())return
P.mA(C.v,this)},
$S:function(){return{func:1,v:true}}}
H.aN.prototype={
eI:function(){var t=this.a
if(t.y){C.a.j(t.z,this)
return}t.at(this.b)}}
H.hP.prototype={}
H.eE.prototype={
$0:function(){H.mb(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.eF.prototype={
$0:function(){var t,s
t=this.a
t.x=!0
if(!this.b)this.c.$1(this.d)
else{s=this.c
if(H.b8(s,{func:1,args:[P.O,P.O]}))s.$2(this.e,this.d)
else if(H.b8(s,{func:1,args:[P.O]}))s.$1(this.e)
else s.$0()}t.b8()},
$S:function(){return{func:1,v:true}}}
H.ho.prototype={}
H.b4.prototype={
L:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.mN(b)
if(t.ged()===s){s=J.X(r)
switch(s.h(r,0)){case"pause":t.bT(s.h(r,1),s.h(r,2))
break
case"resume":t.eL(s.h(r,1))
break
case"add-ondone":t.e0(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.eK(s.h(r,1))
break
case"set-errors-fatal":t.cW(s.h(r,1),s.h(r,2))
break
case"ping":t.ex(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.ew(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.j(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.az(0,s)
break}return}u.globalState.f.a.a1(0,new H.aN(t,new H.hR(this,r),"receive"))},
B:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.b4){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gA:function(a){return this.b.a}}
H.hR.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dA(0,this.b)},
$S:function(){return{func:1}}}
H.bL.prototype={
L:function(a,b){var t,s,r
t=P.aE(["command","message","port",this,"msg",b])
s=new H.a4(!0,P.b3(null,P.y)).O(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
B:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bL){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gA:function(a){return C.b.d5((this.b<<16^this.a<<8)>>>0,this.c)}}
H.cw.prototype={
dD:function(){this.c=!0
this.b=null},
dA:function(a,b){if(this.c)return
this.b.$1(b)},
$ismq:1}
H.h_.prototype={
dm:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.a1(0,new H.aN(s,new H.h0(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){H.ih()
this.c=self.setTimeout(H.bP(new H.h1(this,b),0),a)}else{H.b(a>0)
throw H.c(P.u("Timer greater than 0."))}}}
H.h0.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.h1.prototype={
$0:function(){var t=this.a
t.c=null
H.iw()
t.d=1
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.aw.prototype={
gA:function(a){var t=this.a
t=C.b.b6(t,0)^C.b.M(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
B:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.aw){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.a4.prototype={
O:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gk(t))
t=J.v(a)
if(!!t.$isbp)return["buffer",a]
if(!!t.$isb_)return["typed",a]
if(!!t.$isq)return this.cS(a)
if(!!t.$ism8){r=this.gcP()
q=t.gH(a)
q=H.j7(q,r,H.a5(q,"U",0),null)
q=P.kb(q,!0,H.a5(q,"U",0))
t=t.gcG(a)
t=H.j7(t,r,H.a5(t,"U",0),null)
return["map",q,P.kb(t,!0,H.a5(t,"U",0))]}if(!!t.$isk9)return this.cT(a)
if(!!t.$isa)this.cE(a)
if(!!t.$ismq)this.aB(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isb4)return this.cU(a)
if(!!t.$isbL)return this.cV(a)
if(!!t.$isay){p=a.$static_name
if(p==null)this.aB(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isaw)return["capability",a.a]
if(!(a instanceof P.G))this.cE(a)
return["dart",u.classIdExtractor(a),this.cR(u.classFieldsExtractor(a))]},
aB:function(a,b){throw H.c(P.u((b==null?"Can't transmit:":b)+" "+H.f(a)))},
cE:function(a){return this.aB(a,null)},
cS:function(a){var t
H.b(typeof a!=="string")
t=this.cQ(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.aB(a,"Can't serialize indexable: ")},
cQ:function(a){var t,s
t=[]
C.a.sk(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.O(a[s])
return t},
cR:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.O(a[t]))
return a},
cT:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.aB(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sk(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.O(a[t[r]])
return["js-object",t,s]},
cV:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cU:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.aM.prototype={
a5:function(a){var t,s,r,q
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.c(P.jM("Bad serialized message: "+H.f(a)))
switch(C.a.ges(a)){case"ref":H.b(J.F(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.b(J.F(a[0],"buffer"))
t=a[1]
C.a.j(this.b,t)
return t
case"typed":H.b(J.F(a[0],"typed"))
t=a[1]
C.a.j(this.b,t)
return t
case"fixed":H.b(J.F(a[0],"fixed"))
t=a[1]
C.a.j(this.b,t)
return J.ao(H.z(this.as(t),[null]))
case"extendable":H.b(J.F(a[0],"extendable"))
t=a[1]
C.a.j(this.b,t)
return H.z(this.as(t),[null])
case"mutable":H.b(J.F(a[0],"mutable"))
t=a[1]
C.a.j(this.b,t)
return this.as(t)
case"const":H.b(J.F(a[0],"const"))
t=a[1]
C.a.j(this.b,t)
return J.ao(H.z(this.as(t),[null]))
case"map":return this.en(a)
case"sendport":return this.eo(a)
case"raw sendport":H.b(J.F(a[0],"raw sendport"))
t=a[1]
C.a.j(this.b,t)
return t
case"js-object":return this.em(a)
case"function":H.b(J.F(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.j(this.b,t)
return t
case"capability":H.b(J.F(a[0],"capability"))
return new H.aw(a[1])
case"dart":H.b(J.F(a[0],"dart"))
s=a[1]
r=a[2]
q=u.instanceFromClassId(s)
C.a.j(this.b,q)
this.as(r)
return u.initializeEmptyInstance(s,q,r)
default:throw H.c("couldn't deserialize: "+H.f(a))}},
as:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.a5(a[t]))
return a},
en:function(a){var t,s,r,q,p
H.b(J.F(a[0],"map"))
t=a[1]
s=a[2]
r=P.M()
C.a.j(this.b,r)
t=J.lD(t,this.gel()).eR(0)
for(q=J.X(s),p=0;p<t.length;++p)r.i(0,t[p],this.a5(q.h(s,p)))
return r},
eo:function(a){var t,s,r,q,p,o,n
H.b(J.F(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.ci(r)
if(o==null)return
n=new H.b4(o,s)}else n=new H.bL(t,r,s)
C.a.j(this.b,n)
return n},
em:function(a){var t,s,r,q,p,o
H.b(J.F(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.j(this.b,r)
for(q=J.X(t),p=J.X(s),o=0;C.b.a7(o,q.gk(t));++o)r[q.h(t,o)]=this.a5(p.h(s,o))
return r}}
H.fu.prototype={}
H.h5.prototype={
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
H.fc.prototype={
l:function(a){var t=this.b
if(t==null)return"NullError: "+H.f(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.eL.prototype={
l:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.f(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.f(this.a)+")"}}
H.h9.prototype={
l:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.iI.prototype={
$1:function(a){if(!!J.v(a).$isaU)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(a){return{func:1,args:[,]}}}
H.dd.prototype={
l:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t},
$isb0:1}
H.ir.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.is.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.it.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.iu.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.iv.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.ay.prototype={
l:function(a){return"Closure '"+H.br(this).trim()+"'"},
$isiZ:1,
geX:function(){return this},
$D:null}
H.fW.prototype={}
H.fJ.prototype={
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
if(t==null)s=H.aG(this.a)
else s=typeof t!=="object"?J.bb(t):H.aG(t)
return(s^H.aG(this.b))>>>0},
l:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.br(t)+"'")}}
H.h7.prototype={
l:function(a){return this.a}}
H.dM.prototype={
l:function(a){return this.a}}
H.fz.prototype={
l:function(a){return"RuntimeError: "+H.f(this.a)}}
H.hi.prototype={
l:function(a){return C.i.ab("Assertion failed: ",P.c5(this.a))}}
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
H.ab.prototype={
gk:function(a){return this.a},
gax:function(a){return this.a===0},
gH:function(a){return new H.eO(this,[H.au(this,0)])},
gcG:function(a){return H.j7(this.gH(this),new H.eK(this),H.au(this,0),H.au(this,1))},
J:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bH(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bH(s,b)}else return this.ez(b)},
ez:function(a){var t=this.d
if(t==null)return!1
return this.aw(this.aH(t,this.av(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.aq(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.aq(r,b)
return s==null?null:s.b}else return this.eA(b)},
eA:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.aH(t,this.av(a))
r=this.aw(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.b2()
this.b=t}this.bB(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.b2()
this.c=s}this.bB(s,b,c)}else{r=this.d
if(r==null){r=this.b2()
this.d=r}q=this.av(b)
p=this.aH(r,q)
if(p==null)this.b5(r,q,[this.b3(b,c)])
else{o=this.aw(p,b)
if(o>=0)p[o].b=c
else p.push(this.b3(b,c))}}},
az:function(a,b){if(typeof b==="string")return this.bN(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bN(this.c,b)
else return this.eB(b)},
eB:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.aH(t,this.av(a))
r=this.aw(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bR(q)
return q.b},
a4:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.b1()}},
au:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.c(P.al(this))
t=t.c}},
bB:function(a,b,c){var t=this.aq(a,b)
if(t==null)this.b5(a,b,this.b3(b,c))
else t.b=c},
bN:function(a,b){var t
if(a==null)return
t=this.aq(a,b)
if(t==null)return
this.bR(t)
this.bI(a,b)
return t.b},
b1:function(){this.r=this.r+1&67108863},
b3:function(a,b){var t,s
t=new H.eN(a,b,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.b1()
return t},
bR:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.b1()},
av:function(a){return J.bb(a)&0x3ffffff},
aw:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.F(a[s].a,b))return s
return-1},
l:function(a){return P.kc(this)},
aq:function(a,b){return a[b]},
aH:function(a,b){return a[b]},
b5:function(a,b,c){H.b(c!=null)
a[b]=c},
bI:function(a,b){delete a[b]},
bH:function(a,b){return this.aq(a,b)!=null},
b2:function(){var t=Object.create(null)
this.b5(t,"<non-identifier-key>",t)
this.bI(t,"<non-identifier-key>")
return t},
$ism8:1}
H.eK.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(a){return{func:1,args:[,]}}}
H.eN.prototype={}
H.eO.prototype={
gk:function(a){return this.a.a},
gC:function(a){var t,s
t=this.a
s=new H.eP(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.eP.prototype={
gv:function(a){return this.d},
u:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.al(t))
else{t=this.c
if(t==null){this.sbA(null)
return!1}else{this.sbA(t.a)
this.c=this.c.c
return!0}}},
sbA:function(a){this.d=a}}
H.im.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[,]}}}
H.io.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(a,b){return{func:1,args:[,P.p]}}}
H.ip.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[P.p]}}}
H.bp.prototype={
gE:function(a){return C.ab},
$isbp:1}
H.b_.prototype={$isb_:1}
H.f2.prototype={
gE:function(a){return C.ac}}
H.cm.prototype={
gk:function(a){return a.length},
$isq:1,
$asq:function(){},
$ist:1,
$ast:function(){}}
H.cn.prototype={
h:function(a,b){H.ah(b,a,a.length)
return a[b]},
i:function(a,b,c){H.ah(b,a,a.length)
a[b]=c},
$isl:1,
$asl:function(){return[P.W]},
$asaV:function(){return[P.W]},
$asn:function(){return[P.W]},
$isi:1,
$asi:function(){return[P.W]}}
H.co.prototype={
i:function(a,b,c){H.ah(b,a,a.length)
a[b]=c},
$isl:1,
$asl:function(){return[P.y]},
$asaV:function(){return[P.y]},
$asn:function(){return[P.y]},
$isi:1,
$asi:function(){return[P.y]}}
H.cl.prototype={
gE:function(a){return C.ad},
$iseu:1}
H.f3.prototype={
gE:function(a){return C.ae}}
H.f4.prototype={
gE:function(a){return C.af},
h:function(a,b){H.ah(b,a,a.length)
return a[b]}}
H.f5.prototype={
gE:function(a){return C.ag},
h:function(a,b){H.ah(b,a,a.length)
return a[b]},
$isk6:1}
H.f6.prototype={
gE:function(a){return C.ah},
h:function(a,b){H.ah(b,a,a.length)
return a[b]}}
H.f7.prototype={
gE:function(a){return C.al},
h:function(a,b){H.ah(b,a,a.length)
return a[b]},
$isky:1}
H.f8.prototype={
gE:function(a){return C.am},
h:function(a,b){H.ah(b,a,a.length)
return a[b]},
$iskz:1}
H.cp.prototype={
gE:function(a){return C.an},
gk:function(a){return a.length},
h:function(a,b){H.ah(b,a,a.length)
return a[b]}}
H.f9.prototype={
gE:function(a){return C.ao},
gk:function(a){return a.length},
h:function(a,b){H.ah(b,a,a.length)
return a[b]},
$iskA:1}
H.bC.prototype={}
H.bD.prototype={}
H.bE.prototype={}
H.bF.prototype={}
P.hk.prototype={
$1:function(a){var t,s
H.iw()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(a){return{func:1,args:[,]}}}
P.hj.prototype={
$1:function(a){var t,s
t=this.a
H.b(t.a==null)
H.ih()
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(a){return{func:1,args:[{func:1,v:true}]}}}
P.hl.prototype={
$0:function(){H.iw()
this.a.$0()},
$S:function(){return{func:1}}}
P.hm.prototype={
$0:function(){H.iw()
this.a.$0()},
$S:function(){return{func:1}}}
P.iW.prototype={}
P.hp.prototype={}
P.i2.prototype={
eb:function(a,b){var t=this.a
if(t.a!==0)throw H.c(P.ja("Future already completed"))
t.aY(b)}}
P.cW.prototype={
eH:function(a){if(this.c!==6)return!0
H.b(!0)
return this.b.b.bd(this.d,a.a)},
ev:function(a){var t,s
t=(this.c&2)!==0
if(t){H.b(t)
t=this.e!=null}else t=!1
H.b(t)
s=this.e
t=this.b.b
if(H.b8(s,{func:1,args:[P.G,P.b0]}))return t.eN(s,a.a,a.b)
else return t.bd(s,a.a)}}
P.ag.prototype={
cr:function(a,b){var t,s,r
t=$.C
if(t!==C.f){t.toString
if(b!=null)b=P.mR(b,t)}s=new P.ag(0,t,null,[null])
r=b==null?1:3
this.bC(new P.cW(null,s,r,a,b,[H.au(this,0),null]))
return s},
cq:function(a){return this.cr(a,null)},
aU:function(a){H.b(this.a<4)
H.b(a.a>=4)
this.a=a.a
this.c=a.c},
bC:function(a){var t
H.b(a.a==null)
t=this.a
if(t<=1){a.a=H.jt(this.c,"$iscW")
this.c=a}else{if(t===2){H.b(!0)
t=this.c
if(t.a<4){t.bC(a)
return}this.aU(t)}H.b(this.a>=4)
t=this.b
t.toString
P.ia(null,null,t,new P.hz(this,a))}},
bM:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.b(!0)
s=this.c
if(s.a<4){s.bM(a)
return}this.aU(s)}H.b(this.a>=4)
t.a=this.aI(a)
s=this.b
s.toString
P.ia(null,null,s,new P.hD(t,this))}},
b4:function(){H.b(this.a<4)
var t=this.c
this.c=null
return this.aI(t)},
aI:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aY:function(a){var t,s,r
H.b(this.a<4)
t=this.$ti
s=H.ib(a,"$isey",t,"$asey")
if(s){t=H.ib(a,"$isag",t,null)
if(t)P.kE(a,this)
else P.mI(a,this)}else{r=this.b4()
H.b(this.a<4)
this.a=4
this.c=a
P.by(this,r)}},
aE:function(a,b){var t
H.b(this.a<4)
t=this.b4()
H.b(this.a<4)
this.a=8
this.c=new P.aQ(a,b)
P.by(this,t)},
dF:function(a){return this.aE(a,null)},
$isey:1,
gb7:function(){return this.a},
gdU:function(){return this.c}}
P.hz.prototype={
$0:function(){P.by(this.a,this.b)},
$S:function(){return{func:1}}}
P.hD.prototype={
$0:function(){P.by(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.hA.prototype={
$1:function(a){var t=this.a
H.b(t.a===1)
H.b(t.a===1)
t.a=0
t.aY(a)},
$S:function(a){return{func:1,args:[,]}}}
P.hB.prototype={
$2:function(a,b){var t=this.a
H.b(t.a===1)
t.aE(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(a,b){return{func:1,args:[,],opt:[,]}}}
P.hC.prototype={
$0:function(){this.a.aE(this.b,this.c)},
$S:function(){return{func:1}}}
P.hG.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.c
p=q.c
H.b((p&1)===0)
o=(p&2)===0
H.b(o)
t=null
try{H.b(o)
H.b(p===8)
t=q.b.b.co(q.d)}catch(n){s=H.P(n)
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
p.b=q.c}else p.b=new P.aQ(s,r)
p.a=!0
return}if(!!J.v(t).$isey){if(t instanceof P.ag&&t.gb7()>=4){if(t.gb7()===8){q=t
H.b(q.gb7()===8)
p=this.b
p.b=q.gdU()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.cq(new P.hH(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.hH.prototype={
$1:function(a){return this.a},
$S:function(a){return{func:1,args:[,]}}}
P.hF.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.b((r.c&1)!==0)
this.a.b=r.b.b.bd(r.d,this.c)}catch(q){t=H.P(q)
s=H.at(q)
r=this.a
r.b=new P.aQ(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.hE.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.b(q.a===8)
t=q.c
q=this.c
if(q.eH(t)){H.b((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.ev(t)
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
m.b=q.c}else m.b=new P.aQ(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.cO.prototype={}
P.fO.prototype={
gk:function(a){var t,s
t={}
s=new P.ag(0,$.C,null,[P.y])
t.a=0
this.eF(new P.fQ(t),!0,new P.fR(t,s),s.gdE())
return s}}
P.fQ.prototype={
$1:function(a){++this.a.a},
$S:function(a){return{func:1,args:[,]}}}
P.fR.prototype={
$0:function(){this.b.aY(this.a.a)},
$S:function(){return{func:1}}}
P.fP.prototype={}
P.jb.prototype={}
P.aQ.prototype={
l:function(a){return H.f(this.a)},
$isaU:1}
P.i6.prototype={}
P.i9.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.ct()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.c(t)
r=H.c(t)
r.stack=s.l(0)
throw r},
$S:function(){return{func:1}}}
P.hT.prototype={
eO:function(a){var t,s,r
try{if(C.f===$.C){a.$0()
return}P.kK(null,null,this,a)}catch(r){t=H.P(r)
s=H.at(r)
P.i8(null,null,this,t,s)}},
eP:function(a,b){var t,s,r
try{if(C.f===$.C){a.$1(b)
return}P.kL(null,null,this,a,b)}catch(r){t=H.P(r)
s=H.at(r)
P.i8(null,null,this,t,s)}},
e6:function(a){return new P.hV(this,a)},
b9:function(a){return new P.hU(this,a)},
e7:function(a){return new P.hW(this,a)},
h:function(a,b){return},
co:function(a){if($.C===C.f)return a.$0()
return P.kK(null,null,this,a)},
bd:function(a,b){if($.C===C.f)return a.$1(b)
return P.kL(null,null,this,a,b)},
eN:function(a,b,c){if($.C===C.f)return a.$2(b,c)
return P.mS(null,null,this,a,b,c)}}
P.hV.prototype={
$0:function(){return this.a.co(this.b)},
$S:function(){return{func:1}}}
P.hU.prototype={
$0:function(){return this.a.eO(this.b)},
$S:function(){return{func:1}}}
P.hW.prototype={
$1:function(a){return this.a.eP(this.b,a)},
$S:function(a){return{func:1,args:[,]}}}
P.hN.prototype={
av:function(a){return H.nj(a)&0x3ffffff},
aw:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.hL.prototype={
gC:function(a){var t=new P.bA(this,this.r,null,null,[null])
t.c=this.e
return t},
gk:function(a){return this.a},
F:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dG(b)},
dG:function(a){var t=this.d
if(t==null)return!1
return this.aG(t[this.aF(a)],a)>=0},
ci:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.F(0,a)?a:null
else return this.dO(a)},
dO:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.aF(a)]
r=this.aG(s,a)
if(r<0)return
return J.ba(s,r).gdI()},
j:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.jl()
this.b=t}return this.bE(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.jl()
this.c=s}return this.bE(s,b)}else return this.a1(0,b)},
a1:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.jl()
this.d=t}s=this.aF(b)
r=t[s]
if(r==null){q=[this.aX(b)]
H.b(q!=null)
t[s]=q}else{if(this.aG(r,b)>=0)return!1
r.push(this.aX(b))}return!0},
az:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bF(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bF(this.c,b)
else return this.dP(0,b)},
dP:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.aF(b)]
r=this.aG(s,b)
if(r<0)return!1
this.bG(s.splice(r,1)[0])
return!0},
a4:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aW()}},
bE:function(a,b){var t
if(a[b]!=null)return!1
t=this.aX(b)
H.b(!0)
a[b]=t
return!0},
bF:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bG(t)
delete a[b]
return!0},
aW:function(){this.r=this.r+1&67108863},
aX:function(a){var t,s
t=new P.hM(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.aW()
return t},
bG:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.aW()},
aF:function(a){return J.bb(a)&0x3ffffff},
aG:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.F(a[s].a,b))return s
return-1}}
P.hM.prototype={
gdI:function(){return this.a}}
P.bA.prototype={
gv:function(a){return this.d},
u:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.al(t))
else{t=this.c
if(t==null){this.sao(null)
return!1}else{this.sao(t.a)
this.c=this.c.b
return!0}}},
sao:function(a){this.d=a}}
P.hJ.prototype={}
P.j4.prototype={$isl:1}
P.cg.prototype={$isl:1,$isi:1}
P.n.prototype={
gC:function(a){return new H.ch(a,this.gk(a),0,null,[H.a5(a,"n",0)])},
w:function(a,b){return this.h(a,b)},
cj:function(a,b){return new H.bn(a,b,[H.a5(a,"n",0),null])},
eu:function(a,b,c){var t,s,r,q
t=this.gk(a)
for(s=b,r=0;C.b.a7(r,t);++r){s=c.$2(s,this.h(a,r))
q=this.gk(a)
if(t==null?q!=null:t!==q)throw H.c(P.al(a))}return s},
l:function(a){return P.eG(a,"[","]")}}
P.ci.prototype={}
P.eT.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.f(a)
t.a=s+": "
t.a+=H.f(b)},
$S:function(a,b){return{func:1,args:[,,]}}}
P.aZ.prototype={
au:function(a,b){var t,s
for(t=J.aP(this.gH(a));t.u();){s=t.gv(t)
b.$2(s,this.h(a,s))}},
gk:function(a){return J.bc(this.gH(a))},
l:function(a){return P.kc(a)}}
P.eQ.prototype={
dh:function(a,b){var t
H.b(!0)
t=new Array(8)
t.fixed$length=Array
this.sbP(H.z(t,[b]))},
gC:function(a){return new P.hO(this,this.c,this.d,this.b,null,this.$ti)},
gax:function(a){return this.b===this.c},
gk:function(a){return(this.c-this.b&this.a.length-1)>>>0},
w:function(a,b){var t=this.gk(this)
if(C.b.a0(0,b)||b>=t)H.L(P.B(b,this,"index",null,t))
return this.a[(C.b.ab(this.b,b)&this.a.length-1)>>>0]},
a4:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
l:function(a){return P.eG(this,"{","}")},
cm:function(){var t,s,r
t=this.b
if(t===this.c)throw H.c(H.eH());++this.d
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
if(this.b===t)this.bK();++this.d},
bK:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.z(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.bl(s,0,q,t,r)
C.a.bl(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbP(s)},
sbP:function(a){this.a=a}}
P.hO.prototype={
gv:function(a){return this.e},
u:function(){var t,s
t=this.a
if(this.c!==t.d)H.L(P.al(t))
s=this.d
if(s===this.b){this.sao(null)
return!1}this.sao(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sao:function(a){this.e=a}}
P.fC.prototype={
N:function(a,b){var t
for(t=J.aP(b);t.u();)this.j(0,t.gv(t))},
l:function(a){return P.eG(this,"{","}")},
$isl:1}
P.fB.prototype={}
P.bB.prototype={}
P.aj.prototype={}
P.I.prototype={}
P.bf.prototype={
B:function(a,b){if(b==null)return!1
if(!(b instanceof P.bf))return!1
return this.a===b.a&&this.b===b.b},
Z:function(a,b){return C.b.Z(this.a,b.a)},
gA:function(a){var t=this.a
return(t^C.b.b6(t,30))&1073741823},
l:function(a){var t,s,r,q,p,o,n
t=P.lY(H.mp(this))
s=P.bZ(H.mn(this))
r=P.bZ(H.mj(this))
q=P.bZ(H.mk(this))
p=P.bZ(H.mm(this))
o=P.bZ(H.mo(this))
n=P.lZ(H.ml(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isI:1,
$asI:function(){return[P.bf]}}
P.W.prototype={}
P.az.prototype={
a7:function(a,b){return C.b.a7(this.a,b.gdH())},
a0:function(a,b){return C.b.a0(this.a,b.gdH())},
B:function(a,b){if(b==null)return!1
if(!(b instanceof P.az))return!1
return this.a===b.a},
gA:function(a){return this.a&0x1FFFFFFF},
Z:function(a,b){return C.b.Z(this.a,b.a)},
l:function(a){var t,s,r,q,p
t=new P.e5()
s=this.a
if(s<0)return"-"+new P.az(0-s).l(0)
r=t.$1(C.b.M(s,6e7)%60)
q=t.$1(C.b.M(s,1e6)%60)
p=new P.e4().$1(s%1e6)
return""+C.b.M(s,36e8)+":"+H.f(r)+":"+H.f(q)+"."+H.f(p)},
$isI:1,
$asI:function(){return[P.az]}}
P.e4.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(a){return{func:1,ret:P.p,args:[P.y]}}}
P.e5.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(a){return{func:1,ret:P.p,args:[P.y]}}}
P.aU.prototype={}
P.bW.prototype={
l:function(a){return"Assertion failed"}}
P.ct.prototype={
l:function(a){return"Throw of null."}}
P.a_.prototype={
gb_:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaZ:function(){return""},
l:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.f(t)
q=this.gb_()+s+r
if(!this.a)return q
p=this.gaZ()
o=P.c5(this.b)
return q+p+": "+H.f(o)}}
P.cv.prototype={
gb_:function(){return"RangeError"},
gaZ:function(){var t,s,r
H.b(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.f(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.f(t)
else if(r>t)s=": Not in range "+H.f(t)+".."+H.f(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.f(t)}return s}}
P.eD.prototype={
gb_:function(){return"RangeError"},
gaZ:function(){H.b(this.a)
if(J.la(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.f(t)},
gk:function(a){return this.f}}
P.ha.prototype={
l:function(a){return"Unsupported operation: "+this.a}}
P.h8.prototype={
l:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.b1.prototype={
l:function(a){return"Bad state: "+this.a}}
P.dO.prototype={
l:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.f(P.c5(t))+"."}}
P.cD.prototype={
l:function(a){return"Stack Overflow"},
$isaU:1}
P.dX.prototype={
l:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.iY.prototype={}
P.hy.prototype={
l:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.f(t)}}
P.e8.prototype={
h:function(a,b){var t,s
t=this.a
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.L(P.iT(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.kf(b,"expando$values")
return s==null?null:H.kf(s,t)},
l:function(a){return"Expando:"+H.f(this.b)}}
P.y.prototype={}
P.U.prototype={
aO:function(a,b){return new H.cN(this,b,[H.a5(this,"U",0)])},
gk:function(a){var t,s
H.b(!this.$isl)
t=this.gC(this)
for(s=0;t.u();)++s
return s},
gac:function(a){var t,s
t=this.gC(this)
if(!t.u())throw H.c(H.eH())
s=t.gv(t)
if(t.u())throw H.c(H.mg())
return s},
w:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.lP("index"))
if(b<0)H.L(P.aH(b,0,null,"index",null))
for(t=this.gC(this),s=0;t.u();){r=t.gv(t)
if(b===s)return r;++s}throw H.c(P.B(b,this,"index",null,s))},
l:function(a){return P.me(this,"(",")")}}
P.cd.prototype={}
P.i.prototype={$isl:1}
P.aY.prototype={}
P.O.prototype={
gA:function(a){return P.G.prototype.gA.call(this,this)},
l:function(a){return"null"}}
P.a6.prototype={$isI:1,
$asI:function(){return[P.a6]}}
P.G.prototype={constructor:P.G,$isG:1,
B:function(a,b){return this===b},
gA:function(a){return H.aG(this)},
l:function(a){return"Instance of '"+H.br(this)+"'"},
gE:function(a){return new H.ar(H.ik(this),null)},
toString:function(){return this.l(this)}}
P.b0.prototype={}
P.p.prototype={$isI:1,
$asI:function(){return[P.p]}}
P.bt.prototype={
gk:function(a){return this.a.length},
l:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
gag:function(){return this.a}}
P.je.prototype={}
W.j.prototype={}
W.bV.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y},
gG:function(a){return a.z}}
W.dE.prototype={
gk:function(a){return a.length}}
W.dF.prototype={
l:function(a){return String(a)}}
W.dG.prototype={
l:function(a){return String(a)}}
W.av.prototype={$isav:1}
W.bX.prototype={
cM:function(a,b,c){var t=this.dK(a,b,P.n1(c,null))
return t},
dK:function(a,b,c){return a.getContext(b,c)}}
W.dL.prototype={
aP:function(a){return P.id(a.getContextAttributes())}}
W.ax.prototype={
gk:function(a){return a.length}}
W.dP.prototype={
gk:function(a){return a.length}}
W.dQ.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
W.dR.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y},
gG:function(a){return a.z}}
W.dS.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y},
gG:function(a){return a.z}}
W.aS.prototype={
bD:function(a,b){var t,s
t=$.$get$jU()
s=t[b]
if(typeof s==="string")return s
s=this.dY(a,b)
t[b]=s
return s},
dY:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.m_()+b
if(t in a)return t
return b},
gk:function(a){return a.length}}
W.dT.prototype={}
W.a0.prototype={}
W.aT.prototype={}
W.dU.prototype={
gk:function(a){return a.length}}
W.dV.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y},
gG:function(a){return a.z}}
W.dW.prototype={
gk:function(a){return a.length}}
W.dY.prototype={
h:function(a,b){return a[b]},
gk:function(a){return a.length}}
W.dZ.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y},
gG:function(a){return a.z}}
W.c_.prototype={}
W.bg.prototype={
e1:function(a,b){return a.adoptNode(b)},
cN:function(a,b){return a.getElementById(b)},
cl:function(a,b){return a.querySelector(b)}}
W.e_.prototype={
l:function(a){return String(a)}}
W.c0.prototype={
eh:function(a,b){return a.createHTMLDocument(b)}}
W.e0.prototype={
gX:function(a){return a.a},
gR:function(a){return a.b},
ga3:function(a){return a.c}}
W.c1.prototype={
gX:function(a){return a.a},
gR:function(a){return a.b},
ga3:function(a){return a.c}}
W.e1.prototype={
gaN:function(a){return a.w},
gn:function(a){return a.x},
gp:function(a){return a.y},
gG:function(a){return a.z}}
W.c2.prototype={
gaN:function(a){return a.w},
gn:function(a){return a.x},
gp:function(a){return a.y},
gG:function(a){return a.z}}
W.c3.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[P.V]},
$isl:1,
$asl:function(){return[P.V]},
$ist:1,
$ast:function(){return[P.V]},
$asn:function(){return[P.V]},
$isi:1,
$asi:function(){return[P.V]},
$aso:function(){return[P.V]}}
W.c4.prototype={
l:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gak(a))+" x "+H.f(this.gai(a))},
B:function(a,b){var t
if(b==null)return!1
t=J.v(b)
if(!t.$isV)return!1
return a.left===t.gcf(b)&&a.top===t.gcs(b)&&this.gak(a)===t.gak(b)&&this.gai(a)===t.gai(b)},
gA:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gak(a)
q=this.gai(a)
return W.kI(W.aO(W.aO(W.aO(W.aO(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gai:function(a){return a.height},
gcf:function(a){return a.left},
gcs:function(a){return a.top},
gak:function(a){return a.width},
gn:function(a){return a.x},
gp:function(a){return a.y},
$isV:1,
$asV:function(){}}
W.e2.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[P.p]},
$isl:1,
$asl:function(){return[P.p]},
$ist:1,
$ast:function(){return[P.p]},
$asn:function(){return[P.p]},
$isi:1,
$asi:function(){return[P.p]},
$aso:function(){return[P.p]}}
W.e3.prototype={
gk:function(a){return a.length}}
W.a1.prototype={
ge4:function(a){return new W.hs(a)},
l:function(a){return a.localName},
S:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.k1
if(t==null){t=H.z([],[W.cr])
s=new W.cs(t)
C.a.j(t,W.kF(null))
C.a.j(t,W.kJ())
$.k1=s
d=s}else d=t
t=$.k0
if(t==null){t=new W.dn(d)
$.k0=t
c=t}else{t.a=d
c=t}}if($.am==null){t=document
s=t.implementation
s=(s&&C.I).eh(s,"")
$.am=s
$.iX=s.createRange()
s=$.am
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.am.head;(t&&C.J).Y(t,r)}t=$.am
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.jt(s,"$isav")}t=$.am
if(!!this.$isav)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.am.body;(t&&C.o).Y(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.F(C.T,a.tagName)){t=$.iX;(t&&C.B).cO(t,q)
t=$.iX
p=(t&&C.B).ef(t,b)}else{q.innerHTML=b
p=$.am.createDocumentFragment()
for(t=J.k(p);s=q.firstChild,s!=null;)t.Y(p,s)}t=$.am.body
if(q==null?t!=null:q!==t)J.jG(q)
c.bk(p)
C.m.e1(document,p)
return p},
eg:function(a,b,c){return this.S(a,b,c,null)},
cY:function(a,b,c,d){a.textContent=null
this.Y(a,this.S(a,b,c,d))},
cX:function(a,b){return this.cY(a,b,null,null)},
al:function(a,b){return a.getAttribute(b)},
dQ:function(a,b){return a.removeAttribute(b)},
$isa1:1,
geQ:function(a){return a.tagName}}
W.e7.prototype={
$1:function(a){return!!J.v(a).$isa1},
$S:function(a){return{func:1,args:[,]}}}
W.h.prototype={$ish:1}
W.e.prototype={
dB:function(a,b,c,d){return a.addEventListener(b,H.bP(c,1),!1)}}
W.er.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.c8]},
$isl:1,
$asl:function(){return[W.c8]},
$ist:1,
$ast:function(){return[W.c8]},
$asn:function(){return[W.c8]},
$isi:1,
$asi:function(){return[W.c8]},
$aso:function(){return[W.c8]}}
W.es.prototype={
gk:function(a){return a.length}}
W.ew.prototype={
gk:function(a){return a.length}}
W.ez.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y},
gG:function(a){return a.z}}
W.cb.prototype={}
W.eA.prototype={
gk:function(a){return a.length}}
W.bj.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.r]},
$isl:1,
$asl:function(){return[W.r]},
$ist:1,
$ast:function(){return[W.r]},
$asn:function(){return[W.r]},
$isi:1,
$asi:function(){return[W.r]},
$aso:function(){return[W.r]}}
W.cc.prototype={}
W.eB.prototype={
L:function(a,b){return a.send(b)}}
W.bk.prototype={}
W.bl.prototype={$isbl:1}
W.aD.prototype={$isaD:1}
W.eR.prototype={
l:function(a){return String(a)}}
W.eS.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y},
gG:function(a){return a.z}}
W.eY.prototype={
gk:function(a){return a.length}}
W.f_.prototype={
eY:function(a,b,c){return a.send(b,c)},
L:function(a,b){return a.send(b)}}
W.bo.prototype={}
W.f0.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.ck]},
$isl:1,
$asl:function(){return[W.ck]},
$ist:1,
$ast:function(){return[W.ck]},
$asn:function(){return[W.ck]},
$isi:1,
$asi:function(){return[W.ck]},
$aso:function(){return[W.ck]}}
W.N.prototype={$isN:1}
W.R.prototype={
gac:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.c(P.ja("No elements"))
if(s>1)throw H.c(P.ja("More than one element"))
return t.firstChild},
N:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.k(s),p=0;p<r;++p)q.Y(s,t.firstChild)
return},
i:function(a,b,c){var t=this.a
J.lc(t,c,C.z.h(t.childNodes,b))},
gC:function(a){var t=this.a.childNodes
return new W.c9(t,t.length,-1,null,[H.a5(t,"o",0)])},
gk:function(a){return this.a.childNodes.length},
h:function(a,b){return C.z.h(this.a.childNodes,b)},
$asl:function(){return[W.r]},
$ascg:function(){return[W.r]},
$asn:function(){return[W.r]},
$asi:function(){return[W.r]},
$asbB:function(){return[W.r]}}
W.r.prototype={
eJ:function(a){var t=a.parentNode
if(t!=null)J.iJ(t,a)},
l:function(a){var t=a.nodeValue
return t==null?this.d1(a):t},
Y:function(a,b){return a.appendChild(b)},
dR:function(a,b){return a.removeChild(b)},
dS:function(a,b,c){return a.replaceChild(b,c)},
$isr:1,
gbb:function(a){return a.previousSibling}}
W.cq.prototype={
bc:function(a){return a.previousNode()}}
W.bq.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.r]},
$isl:1,
$asl:function(){return[W.r]},
$ist:1,
$ast:function(){return[W.r]},
$asn:function(){return[W.r]},
$isi:1,
$asi:function(){return[W.r]},
$aso:function(){return[W.r]}}
W.ac.prototype={
gk:function(a){return a.length}}
W.fn.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.ac]},
$isl:1,
$asl:function(){return[W.ac]},
$ist:1,
$ast:function(){return[W.ac]},
$asn:function(){return[W.ac]},
$isi:1,
$asi:function(){return[W.ac]},
$aso:function(){return[W.ac]}}
W.fq.prototype={
L:function(a,b){return a.send(b)}}
W.cu.prototype={
ef:function(a,b){return a.createContextualFragment(b)},
cO:function(a,b){return a.selectNodeContents(b)}}
W.cy.prototype={
L:function(a,b){return a.send(b)}}
W.fA.prototype={
gk:function(a){return a.length}}
W.aq.prototype={}
W.fF.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cB]},
$isl:1,
$asl:function(){return[W.cB]},
$ist:1,
$ast:function(){return[W.cB]},
$asn:function(){return[W.cB]},
$isi:1,
$asi:function(){return[W.cB]},
$aso:function(){return[W.cB]}}
W.fH.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cC]},
$isl:1,
$asl:function(){return[W.cC]},
$ist:1,
$ast:function(){return[W.cC]},
$asn:function(){return[W.cC]},
$isi:1,
$asi:function(){return[W.cC]},
$aso:function(){return[W.cC]}}
W.ad.prototype={
gk:function(a){return a.length}}
W.fM.prototype={
h:function(a,b){return this.bJ(a,b)},
au:function(a,b){var t,s
for(t=0;!0;++t){s=this.dN(a,t)
if(s==null)return
b.$2(s,this.bJ(a,s))}},
gH:function(a){var t=H.z([],[P.p])
this.au(a,new W.fN(t))
return t},
gk:function(a){return a.length},
bJ:function(a,b){return a.getItem(b)},
dN:function(a,b){return a.key(b)},
$asaZ:function(){return[P.p,P.p]}}
W.fN.prototype={
$2:function(a,b){return C.a.j(this.a,a)},
$S:function(a,b){return{func:1,args:[,,]}}}
W.cF.prototype={
S:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aR(a,b,c,d)
t=W.m1("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.R(s).N(0,new W.R(t))
return s}}
W.fU.prototype={
S:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aR(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.G.S(t.createElement("table"),b,c,d)
t.toString
t=new W.R(t)
r=t.gac(t)
r.toString
t=new W.R(r)
q=t.gac(t)
s.toString
q.toString
new W.R(s).N(0,new W.R(q))
return s}}
W.fV.prototype={
S:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aR(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.G.S(t.createElement("table"),b,c,d)
t.toString
t=new W.R(t)
r=t.gac(t)
s.toString
r.toString
new W.R(s).N(0,new W.R(r))
return s}}
W.bu.prototype={$isbu:1}
W.fX.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cH]},
$isl:1,
$asl:function(){return[W.cH]},
$ist:1,
$ast:function(){return[W.cH]},
$asn:function(){return[W.cH]},
$isi:1,
$asi:function(){return[W.cH]},
$aso:function(){return[W.cH]}}
W.fY.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cG]},
$isl:1,
$asl:function(){return[W.cG]},
$ist:1,
$ast:function(){return[W.cG]},
$asn:function(){return[W.cG]},
$isi:1,
$asi:function(){return[W.cG]},
$aso:function(){return[W.cG]}}
W.fZ.prototype={
gk:function(a){return a.length}}
W.aI.prototype={$isaI:1}
W.h2.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cK]},
$isl:1,
$asl:function(){return[W.cK]},
$ist:1,
$ast:function(){return[W.cK]},
$asn:function(){return[W.cK]},
$isi:1,
$asi:function(){return[W.cK]},
$aso:function(){return[W.cK]}}
W.h3.prototype={
gk:function(a){return a.length}}
W.cL.prototype={
bc:function(a){return a.previousNode()}}
W.aJ.prototype={}
W.hb.prototype={
l:function(a){return String(a)}}
W.hd.prototype={
gn:function(a){return a.x},
gG:function(a){return a.z}}
W.he.prototype={
gk:function(a){return a.length}}
W.hf.prototype={
L:function(a,b){return a.send(b)}}
W.aL.prototype={
gej:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.u("deltaY is not supported"))},
$isaL:1}
W.bx.prototype={
ge3:function(a){var t,s
t=P.a6
s=new P.ag(0,$.C,null,[t])
this.dJ(a)
this.dT(a,W.kO(new W.hh(new P.i2(s,[t]))))
return s},
dT:function(a,b){return a.requestAnimationFrame(H.bP(b,1))},
dJ:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.hh.prototype={
$1:function(a){this.a.eb(0,a)},
$S:function(a){return{func:1,args:[,]}}}
W.jg.prototype={}
W.hq.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.bY]},
$isl:1,
$asl:function(){return[W.bY]},
$ist:1,
$ast:function(){return[W.bY]},
$asn:function(){return[W.bY]},
$isi:1,
$asi:function(){return[W.bY]},
$aso:function(){return[W.bY]}}
W.hr.prototype={
l:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
B:function(a,b){var t
if(b==null)return!1
t=J.v(b)
if(!t.$isV)return!1
return a.left===t.gcf(b)&&a.top===t.gcs(b)&&a.width===t.gak(b)&&a.height===t.gai(b)},
gA:function(a){var t,s,r,q
t=a.left
s=a.top
r=a.width
q=a.height
return W.kI(W.aO(W.aO(W.aO(W.aO(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gai:function(a){return a.height},
gak:function(a){return a.width},
gn:function(a){return a.x},
gp:function(a){return a.y}}
W.hI.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.ca]},
$isl:1,
$asl:function(){return[W.ca]},
$ist:1,
$ast:function(){return[W.ca]},
$asn:function(){return[W.ca]},
$isi:1,
$asi:function(){return[W.ca]},
$aso:function(){return[W.ca]}}
W.d2.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.r]},
$isl:1,
$asl:function(){return[W.r]},
$ist:1,
$ast:function(){return[W.r]},
$asn:function(){return[W.r]},
$isi:1,
$asi:function(){return[W.r]},
$aso:function(){return[W.r]}}
W.i_.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.ad]},
$isl:1,
$asl:function(){return[W.ad]},
$ist:1,
$ast:function(){return[W.ad]},
$asn:function(){return[W.ad]},
$isi:1,
$asi:function(){return[W.ad]},
$aso:function(){return[W.ad]}}
W.i0.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cE]},
$isl:1,
$asl:function(){return[W.cE]},
$ist:1,
$ast:function(){return[W.cE]},
$asn:function(){return[W.cE]},
$isi:1,
$asi:function(){return[W.cE]},
$aso:function(){return[W.cE]}}
W.hn.prototype={
au:function(a,b){var t,s,r,q,p,o
for(t=this.gH(this),s=t.length,r=this.a,q=J.k(r),p=0;p<t.length;t.length===s||(0,H.D)(t),++p){o=t[p]
b.$2(o,q.al(r,o))}},
gH:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.z([],[P.p])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.j(s,p.name)}return s},
$asci:function(){return[P.p,P.p]},
$asaZ:function(){return[P.p,P.p]},
gdL:function(){return this.a}}
W.hs.prototype={
h:function(a,b){return J.iR(this.a,b)},
gk:function(a){return this.gH(this).length}}
W.hv.prototype={
eF:function(a,b,c,d){return W.a3(this.a,this.b,a,!1,H.au(this,0))}}
W.jj.prototype={}
W.hw.prototype={
dt:function(a,b,c,d,e){this.e_()},
e_:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.lb(r,this.c,t,!1)}}}
W.hx.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(a){return{func:1,args:[,]}}}
W.bz.prototype={
du:function(a){var t,s
t=$.$get$jk()
if(t.gax(t)){for(s=0;s<262;++s)t.i(0,C.S[s],W.n8())
for(s=0;s<12;++s)t.i(0,C.r[s],W.n9())}},
ah:function(a){return $.$get$kG().F(0,W.bh(a))},
a2:function(a,b,c){var t,s,r
t=W.bh(a)
s=$.$get$jk()
r=s.h(0,H.f(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)}}
W.o.prototype={
gC:function(a){return new W.c9(a,this.gk(a),-1,null,[H.a5(a,"o",0)])}}
W.cs.prototype={
ah:function(a){return C.a.bU(this.a,new W.fb(a))},
a2:function(a,b,c){return C.a.bU(this.a,new W.fa(a,b,c))}}
W.fb.prototype={
$1:function(a){return a.ah(this.a)},
$S:function(a){return{func:1,args:[,]}}}
W.fa.prototype={
$1:function(a){return a.a2(this.a,this.b,this.c)},
$S:function(a){return{func:1,args:[,]}}}
W.bG.prototype={
dz:function(a,b,c,d){var t,s,r
this.a.N(0,c)
t=b.aO(0,new W.hY())
s=b.aO(0,new W.hZ())
this.b.N(0,t)
r=this.c
r.N(0,C.U)
r.N(0,s)},
ah:function(a){return this.a.F(0,W.bh(a))},
a2:function(a,b,c){var t,s
t=W.bh(a)
s=this.c
if(s.F(0,H.f(t)+"::"+b))return this.d.e2(c)
else if(s.F(0,"*::"+b))return this.d.e2(c)
else{s=this.b
if(s.F(0,H.f(t)+"::"+b))return!0
else if(s.F(0,"*::"+b))return!0
else if(s.F(0,H.f(t)+"::*"))return!0
else if(s.F(0,"*::*"))return!0}return!1}}
W.hY.prototype={
$1:function(a){return!C.a.F(C.r,a)},
$S:function(a){return{func:1,args:[,]}}}
W.hZ.prototype={
$1:function(a){return C.a.F(C.r,a)},
$S:function(a){return{func:1,args:[,]}}}
W.i3.prototype={
a2:function(a,b,c){if(this.d4(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.iR(a,"template")==="")return this.e.F(0,b)
return!1}}
W.i4.prototype={
$1:function(a){return"TEMPLATE::"+H.f(a)},
$S:function(a){return{func:1,args:[,]}}}
W.i1.prototype={
ah:function(a){var t=J.v(a)
if(!!t.$isbs)return!1
t=!!t.$isw
if(t&&W.bh(a)==="foreignObject")return!1
if(t)return!0
return!1},
a2:function(a,b,c){if(b==="is"||C.i.bn(b,"on"))return!1
return this.ah(a)}}
W.c9.prototype={
u:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbL(J.ba(this.a,t))
this.c=t
return!0}this.sbL(null)
this.c=s
return!1},
gv:function(a){return this.d},
sbL:function(a){this.d=a}}
W.cr.prototype={}
W.j8.prototype={}
W.jf.prototype={}
W.hX.prototype={}
W.dn.prototype={
bk:function(a){new W.i5(this).$2(a,null)},
ar:function(a,b){if(b==null)J.jG(a)
else J.iJ(b,a)},
dW:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.lu(a)
r=J.iR(s.gdL(),"is")
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
this.dV(a,b,t,p,o,s,r)}catch(n){if(H.P(n) instanceof P.a_)throw n
else{this.ar(a,b)
window
m="Removing corrupted element "+H.f(p)
if(typeof console!="undefined")window.console.warn(m)}}},
dV:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.ar(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(t)
return}if(!this.a.ah(a)){this.ar(a,b)
window
t="Removing disallowed element <"+H.f(e)+"> from "+H.f(b)
if(typeof console!="undefined")window.console.warn(t)
return}if(g!=null)if(!this.a.a2(a,"is",g)){this.ar(a,b)
window
t="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(t)
return}t=f.gH(f)
s=H.z(t.slice(0),[H.au(t,0)])
for(r=f.gH(f).length-1,t=f.a,q=J.k(t);r>=0;--r){p=s[r]
if(!this.a.a2(a,J.lG(p),q.al(t,p))){window
o="Removing disallowed attribute <"+H.f(e)+" "+p+'="'+H.f(q.al(t,p))+'">'
if(typeof console!="undefined")window.console.warn(o)
q.al(t,p)
q.dQ(t,p)}}if(!!J.v(a).$isbu)this.bk(a.content)}}
W.i5.prototype={
$2:function(a,b){var t,s,r,q
r=this.a
switch(a.nodeType){case 1:r.dW(a,b)
break
case 8:case 11:case 3:case 4:break
default:r.ar(a,b)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.lv(t)}catch(q){H.P(q)
r=t
J.iJ(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(a,b){return{func:1,v:true,args:[W.r,W.r]}}}
W.cP.prototype={}
W.cQ.prototype={}
W.cR.prototype={}
W.cS.prototype={}
W.cT.prototype={}
W.cU.prototype={}
W.cV.prototype={}
W.cX.prototype={}
W.cY.prototype={}
W.d0.prototype={}
W.d1.prototype={}
W.d3.prototype={}
W.d4.prototype={}
W.d7.prototype={}
W.d8.prototype={}
W.bH.prototype={}
W.bI.prototype={}
W.d9.prototype={}
W.da.prototype={}
W.de.prototype={}
W.dh.prototype={}
W.di.prototype={}
W.bJ.prototype={}
W.bK.prototype={}
W.dj.prototype={}
W.dk.prototype={}
W.dp.prototype={}
W.dq.prototype={}
W.dr.prototype={}
W.ds.prototype={}
W.dt.prototype={}
W.du.prototype={}
W.dv.prototype={}
W.dw.prototype={}
W.dx.prototype={}
W.dy.prototype={}
P.ic.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(a,b){return{func:1,args:[,,]}}}
P.hS.prototype={}
P.V.prototype={}
P.e9.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.ea.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.eb.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.ec.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.ed.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.ee.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.ef.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.eg.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.eh.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.ei.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.ej.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.ek.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.el.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.em.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y},
gG:function(a){return a.z}}
P.en.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.eo.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y},
gG:function(a){return a.z}}
P.ep.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.eq.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.et.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.ev.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.a2.prototype={}
P.aa.prototype={}
P.eC.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.eM.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return this.a6(a,b)},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
a6:function(a,b){return a.getItem(b)},
$isl:1,
$asl:function(){return[P.j3]},
$asn:function(){return[P.j3]},
$isi:1,
$asi:function(){return[P.j3]},
$aso:function(){return[P.j3]}}
P.eV.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.eX.prototype={
gX:function(a){return a.a},
gR:function(a){return a.b},
ga3:function(a){return a.c}}
P.fd.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return this.a6(a,b)},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
a6:function(a,b){return a.getItem(b)},
$isl:1,
$asl:function(){return[P.j9]},
$asn:function(){return[P.j9]},
$isi:1,
$asi:function(){return[P.j9]},
$aso:function(){return[P.j9]}}
P.fk.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.fo.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.fp.prototype={
gk:function(a){return a.length}}
P.fs.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.ft.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.bs.prototype={$isbs:1}
P.fS.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return this.a6(a,b)},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
a6:function(a,b){return a.getItem(b)},
$isl:1,
$asl:function(){return[P.p]},
$asn:function(){return[P.p]},
$isi:1,
$asi:function(){return[P.p]},
$aso:function(){return[P.p]}}
P.w.prototype={
S:function(a,b,c,d){var t,s,r,q,p,o
t=H.z([],[W.cr])
C.a.j(t,W.kF(null))
C.a.j(t,W.kJ())
C.a.j(t,new W.i1())
c=new W.dn(new W.cs(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.o).eg(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.R(q)
o=t.gac(t)
for(t=J.k(p);r=o.firstChild,r!=null;)t.Y(p,r)
return p},
$isw:1}
P.fT.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.bv.prototype={}
P.bw.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.h4.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return this.a6(a,b)},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
a6:function(a,b){return a.getItem(b)},
$isl:1,
$asl:function(){return[P.jd]},
$asn:function(){return[P.jd]},
$isi:1,
$asi:function(){return[P.jd]},
$aso:function(){return[P.jd]}}
P.hc.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.cZ.prototype={}
P.d_.prototype={}
P.d5.prototype={}
P.d6.prototype={}
P.df.prototype={}
P.dg.prototype={}
P.dl.prototype={}
P.dm.prototype={}
P.dI.prototype={
gk:function(a){return a.length}}
P.dJ.prototype={
gk:function(a){return a.length}}
P.aR.prototype={}
P.fe.prototype={
gk:function(a){return a.length}}
P.fx.prototype={
bS:function(a,b){return a.activeTexture(b)},
bV:function(a,b,c){return a.attachShader(b,c)},
bW:function(a,b,c){return a.bindBuffer(b,c)},
bX:function(a,b,c){return a.bindFramebuffer(b,c)},
bY:function(a,b,c){return a.bindTexture(b,c)},
bZ:function(a,b){return a.blendEquation(b)},
c_:function(a,b,c){return a.blendFunc(b,c)},
c0:function(a,b,c,d){return a.bufferData(b,c,d)},
c1:function(a,b){return a.clear(b)},
c2:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c3:function(a,b){return a.compileShader(b)},
c4:function(a){return a.createBuffer()},
c5:function(a){return a.createProgram()},
c6:function(a,b){return a.createShader(b)},
c8:function(a,b){return a.depthMask(b)},
c9:function(a,b){return a.disable(b)},
ca:function(a,b,c,d){return a.drawArrays(b,c,d)},
cb:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cc:function(a,b){return a.enable(b)},
cd:function(a,b){return a.enableVertexAttribArray(b)},
aP:function(a){return P.id(a.getContextAttributes())},
bf:function(a,b){return a.getProgramInfoLog(b)},
bg:function(a,b,c){return a.getProgramParameter(b,c)},
bh:function(a,b){return a.getShaderInfoLog(b)},
bi:function(a,b,c){return a.getShaderParameter(b,c)},
bj:function(a,b,c){return a.getUniformLocation(b,c)},
cg:function(a,b){return a.linkProgram(b)},
bm:function(a,b,c){return a.shaderSource(b,c)},
bo:function(a,b,c,d){return a.stencilFunc(b,c,d)},
ct:function(a,b,c){return a.uniform1f(b,c)},
cu:function(a,b,c){return a.uniform1fv(b,c)},
cv:function(a,b,c){return a.uniform1i(b,c)},
cw:function(a,b,c){return a.uniform1iv(b,c)},
cz:function(a,b,c){return a.uniform2fv(b,c)},
cA:function(a,b,c){return a.uniform3fv(b,c)},
cB:function(a,b,c){return a.uniform4fv(b,c)},
cC:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cD:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cF:function(a,b){return a.useProgram(b)},
cH:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cJ:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fy.prototype={
e5:function(a,b){return a.beginTransformFeedback(b)},
e8:function(a,b){return a.bindVertexArray(b)},
ei:function(a){return a.createVertexArray()},
ep:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
eq:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
er:function(a){return a.endTransformFeedback()},
eV:function(a,b,c,d){this.dZ(a,b,c,d)
return},
dZ:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
eW:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bS:function(a,b){return a.activeTexture(b)},
bV:function(a,b,c){return a.attachShader(b,c)},
bW:function(a,b,c){return a.bindBuffer(b,c)},
bX:function(a,b,c){return a.bindFramebuffer(b,c)},
bY:function(a,b,c){return a.bindTexture(b,c)},
bZ:function(a,b){return a.blendEquation(b)},
c_:function(a,b,c){return a.blendFunc(b,c)},
c0:function(a,b,c,d){return a.bufferData(b,c,d)},
c1:function(a,b){return a.clear(b)},
c2:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c3:function(a,b){return a.compileShader(b)},
c4:function(a){return a.createBuffer()},
c5:function(a){return a.createProgram()},
c6:function(a,b){return a.createShader(b)},
c8:function(a,b){return a.depthMask(b)},
c9:function(a,b){return a.disable(b)},
ca:function(a,b,c,d){return a.drawArrays(b,c,d)},
cb:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cc:function(a,b){return a.enable(b)},
cd:function(a,b){return a.enableVertexAttribArray(b)},
aP:function(a){return P.id(a.getContextAttributes())},
bf:function(a,b){return a.getProgramInfoLog(b)},
bg:function(a,b,c){return a.getProgramParameter(b,c)},
bh:function(a,b){return a.getShaderInfoLog(b)},
bi:function(a,b,c){return a.getShaderParameter(b,c)},
bj:function(a,b,c){return a.getUniformLocation(b,c)},
cg:function(a,b){return a.linkProgram(b)},
bm:function(a,b,c){return a.shaderSource(b,c)},
bo:function(a,b,c,d){return a.stencilFunc(b,c,d)},
ct:function(a,b,c){return a.uniform1f(b,c)},
cu:function(a,b,c){return a.uniform1fv(b,c)},
cv:function(a,b,c){return a.uniform1i(b,c)},
cw:function(a,b,c){return a.uniform1iv(b,c)},
cz:function(a,b,c){return a.uniform2fv(b,c)},
cA:function(a,b,c){return a.uniform3fv(b,c)},
cB:function(a,b,c){return a.uniform4fv(b,c)},
cC:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cD:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cF:function(a,b){return a.useProgram(b)},
cH:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cJ:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fI.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return P.id(this.dM(a,b))},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
dM:function(a,b){return a.item(b)},
$isl:1,
$asl:function(){return[P.aY]},
$asn:function(){return[P.aY]},
$isi:1,
$asi:function(){return[P.aY]},
$aso:function(){return[P.aY]}}
P.db.prototype={}
P.dc.prototype={}
B.iB.prototype={
$1:function(a){$.$get$ie().i(0,a.which,!0)},
$S:function(a){return{func:1,args:[W.aD]}}}
B.iC.prototype={
$1:function(a){$.$get$ie().i(0,a.which,null)},
$S:function(a){return{func:1,args:[W.aD]}}}
B.iD.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.n_=t
$.n0=C.b.ad(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.jw=s-C.b.M(window.innerWidth,2)
$.l0=-(t-C.b.M(window.innerHeight,2))},
$S:function(a){return{func:1,args:[W.N]}}}
B.iE.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.bS=t-C.b.M(window.innerWidth,2)
$.bT=-(s-C.b.M(window.innerHeight,2))
if(a.button===2)$.$get$bQ().i(0,"right",!0)
else $.$get$bQ().i(0,"left",!0)},
$S:function(a){return{func:1,args:[W.N]}}}
B.iF.prototype={
$1:function(a){if(a.button===2)$.$get$bQ().i(0,"right",null)
else $.$get$bQ().i(0,"left",null)},
$S:function(a){return{func:1,args:[W.N]}}}
B.ff.prototype={
di:function(a,b,c,d){var t
d.toString
W.a3(d,W.m2(d),new B.fg(this),!1,W.aL)
W.a3(d,"mousemove",new B.fh(this),!1,W.N)
t=W.aI
W.a3(d,"touchstart",new B.fi(),!1,t)
W.a3(d,"touchmove",new B.fj(this),!1,t)
B.nn(null)}}
B.fg.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.at.gej(a)*r.k3
if(C.c.ad(r.fy,t)>0)r.fy=C.c.ad(r.fy,t)}catch(q){s=H.P(q)
P.a7(s)}},
$S:function(a){return{func:1,args:[W.aL]}}}
B.fh.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=t.go+C.b.ad($.jw,$.bS)*0.01
s=t.id
r=$.bT
q=$.l0
t.id=s+(r-q)*0.01
$.bS=$.jw
$.bT=q}},
$S:function(a){return{func:1,args:[W.N]}}}
B.fi.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.aj(t.clientX)
C.c.aj(t.clientY)
$.bS=s
C.c.aj(t.clientX)
$.bT=C.c.aj(t.clientY)},
$S:function(a){return{func:1,args:[W.aI]}}}
B.fj.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.aj(t.clientX)
t=C.c.aj(t.clientY)
r=this.a
r.go=r.go+C.b.ad(s,$.bS)*0.01
r.id=r.id+($.bT-t)*0.01
$.bS=s
$.bT=t},
$S:function(a){return{func:1,args:[W.aI]}}}
G.f1.prototype={}
G.cM.prototype={
af:function(a,b){var t=this.d
if(H.ai(!t.J(0,a)))H.as("uniform "+a+" already set")
t.i(0,a,b)},
bw:function(){return this.d},
l:function(a){var t,s,r,q
t=H.z(["{"+new H.ar(H.ik(this),null).l(0)+"}["+this.a+"]"],[P.p])
for(s=this.d,r=s.gH(s),r=r.gC(r);r.u();){q=r.gv(r)
C.a.j(t,H.f(q)+": "+H.f(s.h(0,q)))}return C.a.ay(t,"\n")}}
G.dK.prototype={}
G.dN.prototype={
ce:function(a,b,c){J.ls(this.a,b)
if(c>0)J.lM(this.a,b,c)},
cI:function(a,b,c,d,e,f,g,h){J.iL(this.a,34962,b)
J.lN(this.a,c,d,e,!1,g,h)}}
G.ex.prototype={}
G.a9.prototype={
gX:function(a){return this.a},
gR:function(a){return this.b},
ga3:function(a){return this.c}}
G.c7.prototype={
gX:function(a){return this.a},
gR:function(a){return this.b},
ga3:function(a){return this.c}}
G.an.prototype={
P:function(a){var t=this.e
H.b(!t.J(0,a))
H.b(C.i.bn(a,"a"))
switch($.$get$S().h(0,a).a){case"vec2":t.i(0,a,H.z([],[T.m]))
break
case"vec3":t.i(0,a,H.z([],[T.d]))
break
case"vec4":t.i(0,a,H.z([],[T.A]))
break
case"float":t.i(0,a,H.z([],[P.W]))
break
case"uvec4":t.i(0,a,H.z([],[[P.i,P.y]]))
break
default:if(H.ai(!1))H.as("unknown type for "+a)}},
bq:function(a){var t,s,r
H.b(!0)
t=this.d.length
for(s=this.b,r=0;r<a;++r,t+=3)C.a.j(s,new G.a9(t,t+1,t+2))},
aD:function(a){var t,s,r
H.b(!0)
t=this.d.length
for(s=this.c,r=0;r<a;++r,t+=4)C.a.j(s,new G.c7(t,t+1,t+2,t+3))},
aa:function(a){var t,s,r,q,p
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.D)(a),++r){q=a[r]
p=new T.d(new Float32Array(3))
p.t(q)
C.a.j(s,p)}},
d7:function(a){var t,s,r,q,p
H.b(!0)
t=this.d
s=t.length
C.a.j(this.b,new G.a9(s,s+1,s+2))
for(r=0;r<3;++r){q=a[r]
p=new T.d(new Float32Array(3))
p.t(q)
C.a.j(t,p)}},
W:function(a,b){var t,s,r,q,p,o,n
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.D)(b),++q){p=b[q]
o=new Float32Array(2)
n=p.a
o[1]=n[1]
o[0]=n[0]
r.j(t,new T.m(o))}},
aT:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.D)(b),++q){p=b[q]
o=new T.d(new Float32Array(3))
o.t(p)
r.j(t,o)}},
d8:function(a){var t,s,r,q,p
H.b(!0)
t=this.d
s=t.length
C.a.j(this.c,new G.c7(s,s+1,s+2,s+3))
for(r=0;r<4;++r){q=a[r]
p=new T.d(new Float32Array(3))
p.t(q)
C.a.j(t,p)}},
de:function(){var t,s,r,q,p,o,n,m,l
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
bu:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=this.d
s=new Array(t.length)
s.fixed$length=Array
r=H.z(s,[T.d])
q=new T.d(new Float32Array(3))
p=new T.d(new Float32Array(3))
for(s=this.b,o=s.length,n=0;n<s.length;s.length===o||(0,H.D)(s),++n){m=s[n]
l=m.a
k=m.b
j=m.c
G.kd(t[l],t[k],t[j],q,p)
i=new T.d(new Float32Array(3))
i.t(p)
r[l]=i
l=new T.d(new Float32Array(3))
l.t(p)
r[k]=l
l=new T.d(new Float32Array(3))
l.t(p)
r[j]=l}for(s=this.c,o=s.length,n=0;n<s.length;s.length===o||(0,H.D)(s),++n){h=s[n]
l=h.a
k=h.b
j=h.c
G.kd(t[l],t[k],t[j],q,p)
i=new T.d(new Float32Array(3))
i.t(p)
r[l]=i
l=new T.d(new Float32Array(3))
l.t(p)
r[k]=l
l=new T.d(new Float32Array(3))
l.t(p)
r[j]=l
l=new T.d(new Float32Array(3))
l.t(p)
r[h.d]=l}this.e.i(0,"aNormal",r)},
ae:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new Array(this.d.length)
t.fixed$length=Array
s=H.z(t,[T.A])
r=new T.A(new Float32Array(4))
r.V(1,0,0,0)
q=new T.A(new Float32Array(4))
q.V(0,1,0,0)
p=new T.A(new Float32Array(4))
p.V(0,0,1,0)
for(t=this.b,o=t.length,n=0;n<t.length;t.length===o||(0,H.D)(t),++n){m=t[n]
l=new T.A(new Float32Array(4))
l.t(r)
s[m.a]=l
l=new T.A(new Float32Array(4))
l.t(q)
s[m.b]=l
l=new T.A(new Float32Array(4))
l.t(p)
s[m.c]=l}k=new T.A(new Float32Array(4))
k.V(1,0,0,1)
j=new T.A(new Float32Array(4))
j.V(1,1,0,1)
i=new T.A(new Float32Array(4))
i.V(0,1,0,1)
h=new T.A(new Float32Array(4))
h.V(0,0,0,1)
for(t=this.c,o=t.length,n=0;n<t.length;t.length===o||(0,H.D)(t),++n){m=t[n]
l=new T.A(new Float32Array(4))
l.t(k)
s[m.a]=l
l=new T.A(new Float32Array(4))
l.t(j)
s[m.b]=l
l=new T.A(new Float32Array(4))
l.t(i)
s[m.c]=l
l=new T.A(new Float32Array(4))
l.t(h)
s[m.d]=l}this.e.i(0,"aCenter",s)},
l:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gH(s),r=r.gC(r);r.u();){q=r.gv(r)
p=$.$get$S().h(0,q).a
C.a.j(t,H.f(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.ay(t," ")}}
G.cJ.prototype={}
G.cI.prototype={}
G.eW.prototype={}
G.eZ.prototype={
bt:function(a,b,c){var t,s
if(C.i.aV(a,0)===105){if(H.ai(C.b.aS(b.length,c)===this.z))H.as("ChangeAttribute "+this.z)}else{t=C.b.aS(b.length,c)
if(H.ai(t===(this.ch.length/3|0)))H.as("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.iL(t.a,34962,s)
J.jC(t.a,34962,b,35048)},
df:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
an:function(a,b,c){var t,s,r,q,p,o
t=J.jy(a,0)===105
if(t&&this.z===0)this.z=C.b.aS(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.iN(r.a))
this.bt(a,b,c)
q=$.$get$S().h(0,a)
if(q==null)throw H.c("Unknown canonical "+a)
p=this.x
if(H.ai(p.J(0,a)))H.as("unexpected attribute "+a)
o=p.h(0,a)
J.dD(r.a,this.e)
r.ce(0,o,t?1:0)
r.cI(0,s.h(0,a),o,q.bv(),5126,!1,0,0)},
l:function(a){var t,s,r,q
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,r=t.gH(t),r=r.gC(r);r.u();){q=r.gv(r)
C.a.j(s,H.f(q)+":"+t.h(0,q).length)}return"MESH["+this.a+"] "+C.a.ay(s,"  ")},
sb0:function(a){this.cx=a}}
G.fl.prototype={
d9:function(a,b){var t=C.b.cL(a,b)
if(this.z===t)return
this.z=t
this.bx()},
bx:function(){var t,s,r,q,p,o,n
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
t.am(0,0,1/(p*s))
t.am(1,1,1/p)
t.am(2,2,(q+r)/o)
t.am(3,2,-1)
t.am(2,3,2*r*q/o)},
bw:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.d(new Float32Array(3))
o.m(r,q,p)
p=this.d
p.i(0,"uEyePosition",o)
o=this.cy
o.t(t)
t=o.a
t[12]=0
t[13]=0
t[14]=0
t[15]=1
n=-s[12]
m=-s[13]
l=-s[14]
s=J.v(n)
r=!!s.$isA
k=r?s.gaN(n):1
if(!!s.$isd){j=s.gn(n)
m=s.gp(n)
l=s.gG(n)
n=j}else if(r){j=s.gn(n)
m=s.gp(n)
l=s.gG(n)
n=j}else if(!(typeof n==="number")){n=null
m=null
l=null}s=C.c.K(t[0],n)
r=C.c.K(t[4],m)
q=C.c.K(t[8],l)
i=t[12]
h=C.c.K(t[1],n)
g=C.c.K(t[5],m)
f=C.c.K(t[9],l)
e=t[13]
d=C.c.K(t[2],n)
c=C.c.K(t[6],m)
b=C.c.K(t[10],l)
a=t[14]
a0=C.c.K(t[3],n)
a1=C.c.K(t[7],m)
a2=C.c.K(t[11],l)
a3=t[15]
t[12]=s+r+q+i*k
t[13]=h+g+f+e*k
t[14]=d+c+b+a*k
t[15]=a0+a1+a2+a3*k
a3=this.cx
a3.t(this.db)
a3.ck(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.fw.prototype={
dk:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.D)(t),++o){n=t[o]
r.i(0,n,J.jF(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.D)(t),++o){n=t[o]
r.i(0,n,J.jF(q.a,p,n))}},
dn:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gk(t)===s.gk(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gH(s),s=s.gC(s);s.u();){q=s.gv(s)
if(!t.J(0,q))C.a.j(r,q)}for(t=this.x,s=new P.bA(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.u();){q=s.d
if(!t.F(0,q))C.a.j(r,q)}return r},
ds:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gH(b),s=s.gC(s),r=this.d,q=this.y,p=this.z,o=0;s.u();){n=s.gv(s)
switch(J.jy(n,0)){case 117:if(q.J(0,n)){m=b.h(0,n)
if(p.J(0,n))H.iz("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$S().h(0,n)
if(l==null)H.L("unknown "+n)
H.b(q.J(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.iS(r.a,k,m)
else if(!!J.v(m).$isk6)J.lK(r.a,k,m)
break
case"float":if(l.c===0)J.lI(r.a,k,m)
else if(!!J.v(m).$iseu)J.lJ(r.a,k,m)
break
case"mat4":if(l.c===0){n=H.ak(m,"$isE").a
J.jL(r.a,k,!1,n)}else if(!!J.v(m).$iseu)J.jL(r.a,k,!1,m)
else if(H.ai(!1))H.as("bad unform: "+n)
break
case"mat3":if(l.c===0){n=H.ak(m,"$isZ").a
J.jK(r.a,k,!1,n)}else if(!!J.v(m).$iseu)J.jK(r.a,k,!1,m)
else if(H.ai(!1))H.as("bad unform: "+n)
break
case"vec4":n=l.c
j=r.a
if(n===0)J.jJ(j,k,H.ak(m,"$isA").a)
else J.jJ(j,k,m)
break
case"vec3":n=l.c
j=r.a
if(n===0)J.jI(j,k,H.ak(m,"$isd").a)
else J.jI(j,k,m)
break
case"vec2":n=l.c
j=r.a
if(n===0)J.jH(j,k,H.ak(m,"$ism").a)
else J.jH(j,k,m)
break
case"sampler2D":case"sampler2DShadow":n=C.b.ab(33984,this.ch)
J.jz(r.a,n)
n=H.ak(m,"$ismy").dg()
J.jB(r.a,3553,n)
n=this.ch
J.iS(r.a,k,n)
this.ch=this.ch+1
break
case"samplerCube":H.b(n==="uCubeTexture")
n=C.b.ab(33984,this.ch)
J.jz(r.a,n)
n=H.ak(m,"$ismy").dg()
J.jB(r.a,34067,n)
n=this.ch
J.iS(r.a,k,n)
this.ch=this.ch+1
break
default:H.iz("Error: unknow uniform type: "+j)
H.b(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":n=J.F(m,!0)
j=r.a
if(n)J.bU(j,2929)
else J.iO(j,2929)
break
case"cStencilFunc":H.ak(m,"$iscJ")
n=m.a
j=r.a
if(n===1281)J.iO(j,2960)
else{J.bU(j,2960)
j=m.b
i=m.c
J.lF(r.a,n,j,i)}break
case"cDepthWrite":J.lm(r.a,m)
break
case"cBlendEquation":H.ak(m,"$iscI")
n=m.a
j=r.a
if(n===1281)J.iO(j,3042)
else{J.bU(j,3042)
j=m.b
i=m.c
J.lg(r.a,j,i)
J.lf(r.a,n)}break}++o
break}}h=P.m0(0,0,0,Date.now()-new P.bf(t,!1).a,0,0)
""+o
h.l(0)},
dd:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
Date.now()
t=this.d
J.lL(t.a,this.r)
this.ch=0
this.z.a4(0)
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.D)(b),++r){q=b[r]
this.ds(q.a,q.bw())}s=this.Q
s.a4(0)
for(p=a.cy,p=p.gH(p),p=p.gC(p);p.u();)s.j(0,p.gv(p))
o=this.dn()
if(o.length!==0)P.a7("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.f(o)))
J.dD(a.d.a,a.e)
n=this.e.f.length>0
s=a.f
p=a.df()
m=a.Q
l=a.z
if(n)J.ld(t.a,s)
if(m!==-1){k=t.a
if(l>1)J.lq(k,s,p,m,0,l)
else J.lp(k,s,p,m,0)}else{m=t.a
if(l>1)J.lo(m,s,0,p,l)
else J.ln(m,s,0,p)}if(n)J.lt(t.a)}}
G.x.prototype={
bv:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.b(!1)
return-1}}}
G.fD.prototype={
d6:function(a){var t,s,r,q
H.b(this.b==null)
for(t=this.c,s=this.x,r=0;r<2;++r){q=a[r]
H.b($.$get$S().J(0,q))
H.b(!C.a.F(t,q))
C.a.j(t,q)
s.i(0,q,this.r);++this.r}C.a.aQ(t)},
br:function(a){var t,s,r
H.b(this.b==null)
for(t=this.d,s=0;s<2;++s){r=a[s]
if(H.ai($.$get$S().J(0,r)))H.as("missing uniform "+r)
H.b(!C.a.F(t,r))
C.a.j(t,r)}C.a.aQ(t)},
bs:function(a){var t,s,r
H.b(this.b==null)
for(t=this.e,s=0;s<1;++s){r=a[s]
H.b($.$get$S().J(0,r))
H.b(!C.a.F(t,r))
C.a.j(t,r)}C.a.aQ(t)},
by:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.b(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.D)(t),++o){n=t[o]
m=$.$get$S().h(0,n)
C.a.j(q,"layout (location="+H.f(p.h(0,n))+") in "+m.a+" "+H.f(n)+";")}C.a.j(q,"")
l=r?"in":"out"
if(r)C.a.j(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.D)(t),++o){k=t[o]
m=$.$get$S().h(0,k)
C.a.j(q,l+" "+m.a+" "+H.f(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.D)(t),++o){k=t[o]
m=$.$get$S().h(0,k)
C.a.j(q,l+" "+m.a+" "+H.f(k)+";")}C.a.j(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.D)(t),++o){k=t[o]
m=$.$get$S().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.j(q,"uniform "+m.a+" "+H.f(k)+j+";")}C.a.j(q,"")
if(a)C.a.j(q,"void main(void) {")
C.a.N(q,b)
if(a)C.a.j(q,"}")
return C.a.ay(q,"\n")}}
G.fG.prototype={
a9:function(a,b,c){var t=this.d.a
t[12]=a
t[13]=b
t[14]=c}}
R.cx.prototype={
cn:function(a){var t,s,r
t=this.db
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.a7("size change "+H.f(s)+" "+H.f(r))
this.dx.d9(s,r)
this.z=s
this.Q=r}}
R.fK.prototype={
dl:function(a,b,c){var t,s,r
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
J.iK(this.a,s)
r=this.dw(b,c,90,30)
this.d=r
J.iK(this.a,r)
t=t.createElement("div")
this.c=t
J.iK(this.a,t)},
dw:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.mH("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.u).bD(r,"float")
r.setProperty(p,"left","")
p=C.u.bD(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.p.Y(t,s)}return t}}
R.fL.prototype={
dr:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.w.eU(s,2)+" fps"
t=this.c;(t&&C.p).cX(t,b)
r=C.b.M(30*C.w.e9(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.p).Y(t,q)},
dq:function(a){return this.dr(a,"")}}
A.ap.prototype={
l:function(a){return"NODE["+this.a+"]"}}
A.cz.prototype={}
A.fv.prototype={
dj:function(a,b,c){if(this.d==null)this.d=new G.ex(this.e,null,null,null,null)},
dc:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.d
s=this.r
r=this.z
q=this.Q
p=t.a
t=t.b
J.le(p.a,36160,t)
H.b(r>0&&q>0)
J.lO(p.a,this.x,this.y,r,q)
if(s!==0)J.lh(p.a,s)
for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.D)(t),++o){n=t[o]
m=n.e
C.a.j(m,new G.cM(P.M(),"transforms",!1,!0))
l=new T.E(new Float32Array(16))
l.I()
for(r=n.f,q=r.length,p=n.d,k=0;k<r.length;r.length===q||(0,H.D)(r),++k)A.kT(p,r[k],l,a,m)
m.pop()}},
da:function(){return this.dc(null)}}
B.fE.prototype={
$2:function(a,b){var t,s,r,q,p,o
t=this.c
s=this.a*a
r=Math.cos(s)
q=Math.sin(s)
s=this.b*a
p=Math.cos(s)
o=Math.sin(s)
s=t*(2+r)*0.5
b.sn(0,s*p)
b.sp(0,s*o)
b.sG(0,this.d*t*0.5*q)},
$S:function(a,b){return{func:1,v:true,args:[P.W,T.d]}}}
A.il.prototype={
$2:function(a,b){var t=536870911&a+J.bb(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(a,b){return{func:1,args:[P.y,P.G]}}}
T.Z.prototype={
t:function(a){var t,s
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
if(b instanceof T.Z){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gA:function(a){return A.dA(this.a)},
a_:function(a){var t,s
t=new Float32Array(3)
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.d(t)},
ee:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
if(g===0){this.t(a)
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
am:function(a,b,c){H.b(a<4)
H.b(b<4)
this.a[b*4+a]=c},
t:function(a){var t,s
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
if(b instanceof T.E){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gA:function(a){return A.dA(this.a)},
a_:function(a){var t,s
t=new Float32Array(4)
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.A(t)},
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
ck:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.m.prototype={
q:function(a,b){var t=this.a
t[0]=a
t[1]=b},
l:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+"]"},
B:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.m){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gA:function(a){return A.dA(this.a)},
h:function(a,b){return this.a[b]},
gk:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gn:function(a){return this.a[0]},
gp:function(a){return this.a[1]}}
T.d.prototype={
m:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
t:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
l:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+"]"},
B:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.d){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gA:function(a){return A.dA(this.a)},
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
ba:function(a){var t,s
t=a.a
s=this.a
return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]},
c7:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.d(new Float32Array(3))
t.m(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
j:function(a,b){var t,s
t=b.a
s=this.a
s[0]=s[0]+t[0]
s[1]=s[1]+t[1]
s[2]=s[2]+t[2]},
aJ:function(a,b){var t,s
t=a.a
s=this.a
s[0]=s[0]+t[0]*b
s[1]=s[1]+t[1]*b
s[2]=s[2]+t[2]*b},
aC:function(a,b){var t,s
t=b.a
s=this.a
s[0]=s[0]-t[0]
s[1]=s[1]-t[1]
s[2]=s[2]-t[2]},
a8:function(a,b){var t=this.a
t[2]=t[2]*b
t[1]=t[1]*b
t[0]=t[0]*b},
sn:function(a,b){this.a[0]=b
return b},
sp:function(a,b){this.a[1]=b
return b},
sG:function(a,b){this.a[2]=b
return b},
gR:function(a){return this.a[2]},
gn:function(a){return this.a[0]},
gp:function(a){return this.a[1]},
gG:function(a){return this.a[2]}}
T.A.prototype={
V:function(a,b,c,d){var t=this.a
t[3]=d
t[2]=c
t[1]=b
t[0]=a},
t:function(a){var t,s
t=a.a
s=this.a
s[3]=t[3]
s[2]=t[2]
s[1]=t[1]
s[0]=t[0]},
l:function(a){var t=this.a
return H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+","+H.f(t[3])},
B:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.A){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gA:function(a){return A.dA(this.a)},
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
gn:function(a){return this.a[0]},
gp:function(a){return this.a[1]},
gG:function(a){return this.a[2]},
gaN:function(a){return this.a[3]}}
O.ix.prototype={
$1:function(b6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
t=this.a
t.a=b6+0
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
s.id=0}r=C.c.ea(s.id,-1.4707963267948965,1.4707963267948965)
s.id=r
q=s.fy
p=s.go
o=q*Math.cos(r)
s.a9(o*Math.cos(p),q*Math.sin(r),o*Math.sin(p))
p=s.k2
r=s.d.a
q=p.a
r[12]=r[12]+q[0]
r[13]=r[13]+q[1]
r[14]=r[14]+q[2]
n=r[12]
m=r[13]
l=r[14]
k=new T.d(new Float32Array(3))
k.m(0,1,0)
q=s.e
j=q.a
j[0]=r[12]
j[1]=r[13]
j[2]=r[14]
j=new Float32Array(3)
i=new T.d(j)
i.t(q)
i.aC(0,p)
i.D(0)
h=k.c7(i)
h.D(0)
g=i.c7(h)
g.D(0)
p=h.ba(q)
f=g.ba(q)
q=i.ba(q)
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
s=$.$get$kV().checked?$.$get$iU():$.$get$jN()
this.c.d.i(0,"cBlendEquation",s)
this.d.da()
C.au.ge3(window).cq(this)
this.e.dq(t.a)},
$S:function(a){return{func:1,v:true,args:[P.a6]}}}
J.a.prototype.d1=J.a.prototype.l
J.bm.prototype.d3=J.bm.prototype.l
P.U.prototype.d2=P.U.prototype.aO
W.a1.prototype.aR=W.a1.prototype.S
W.bG.prototype.d4=W.bG.prototype.a2;(function installTearOffs(){installTearOff(H.b2.prototype,"geE",0,0,0,null,["$0"],["aL"],0)
installTearOff(H.a4.prototype,"gcP",0,0,0,null,["$1"],["O"],2)
installTearOff(H.aM.prototype,"gel",0,0,0,null,["$1"],["a5"],2)
installTearOff(P,"mW",1,0,0,null,["$1"],["mE"],1)
installTearOff(P,"mX",1,0,0,null,["$1"],["mF"],1)
installTearOff(P,"mY",1,0,0,null,["$1"],["mG"],1)
installTearOff(P,"kS",1,0,0,null,["$0"],["mU"],0)
installTearOff(P.ag.prototype,"gdE",0,0,0,null,["$2","$1"],["aE","dF"],5)
installTearOff(P,"n2",1,0,0,null,["$2"],["lV"],7)
installTearOff(W,"n8",1,0,0,null,["$4"],["mK"],4)
installTearOff(W,"n9",1,0,0,null,["$4"],["mL"],4)
installTearOff(W.cq.prototype,"gbb",0,1,0,null,["$0"],["bc"],3)
installTearOff(W.cL.prototype,"gbb",0,1,0,null,["$0"],["bc"],3)
installTearOff(R.cx.prototype,"geM",0,0,0,null,["$1"],["cn"],6)
installTearOff(O,"l9",1,0,0,null,["$0"],["nh"],0)})();(function inheritance(){inherit(P.G,null)
var t=P.G
inherit(H.j0,t)
inherit(J.a,t)
inherit(J.dH,t)
inherit(P.U,t)
inherit(H.ch,t)
inherit(P.cd,t)
inherit(H.aV,t)
inherit(H.ay,t)
inherit(H.hQ,t)
inherit(H.b2,t)
inherit(H.ht,t)
inherit(H.aN,t)
inherit(H.hP,t)
inherit(H.ho,t)
inherit(H.cw,t)
inherit(H.h_,t)
inherit(H.aw,t)
inherit(H.a4,t)
inherit(H.aM,t)
inherit(H.fu,t)
inherit(H.h5,t)
inherit(P.aU,t)
inherit(H.dd,t)
inherit(H.ar,t)
inherit(P.aZ,t)
inherit(H.eN,t)
inherit(H.eP,t)
inherit(P.iW,t)
inherit(P.hp,t)
inherit(P.cW,t)
inherit(P.ag,t)
inherit(P.cO,t)
inherit(P.fO,t)
inherit(P.fP,t)
inherit(P.jb,t)
inherit(P.aQ,t)
inherit(P.i6,t)
inherit(P.fC,t)
inherit(P.hM,t)
inherit(P.bA,t)
inherit(P.j4,t)
inherit(P.bB,t)
inherit(P.n,t)
inherit(P.hO,t)
inherit(P.aj,t)
inherit(P.I,t)
inherit(P.bf,t)
inherit(P.a6,t)
inherit(P.az,t)
inherit(P.cD,t)
inherit(P.iY,t)
inherit(P.hy,t)
inherit(P.e8,t)
inherit(P.i,t)
inherit(P.aY,t)
inherit(P.O,t)
inherit(P.b0,t)
inherit(P.p,t)
inherit(P.bt,t)
inherit(P.je,t)
inherit(W.dT,t)
inherit(W.bz,t)
inherit(W.o,t)
inherit(W.cs,t)
inherit(W.bG,t)
inherit(W.i1,t)
inherit(W.c9,t)
inherit(W.cr,t)
inherit(W.j8,t)
inherit(W.jf,t)
inherit(W.hX,t)
inherit(W.dn,t)
inherit(P.hS,t)
inherit(G.f1,t)
inherit(G.dN,t)
inherit(G.ex,t)
inherit(G.a9,t)
inherit(G.c7,t)
inherit(G.an,t)
inherit(G.cJ,t)
inherit(G.cI,t)
inherit(G.x,t)
inherit(G.fD,t)
inherit(R.fK,t)
inherit(T.Z,t)
inherit(T.E,t)
inherit(T.m,t)
inherit(T.d,t)
inherit(T.A,t)
t=J.a
inherit(J.eI,t)
inherit(J.eJ,t)
inherit(J.bm,t)
inherit(J.aA,t)
inherit(J.aW,t)
inherit(J.aB,t)
inherit(H.bp,t)
inherit(H.b_,t)
inherit(W.e,t)
inherit(W.dE,t)
inherit(W.dL,t)
inherit(W.aT,t)
inherit(W.a0,t)
inherit(W.cP,t)
inherit(W.dY,t)
inherit(W.dZ,t)
inherit(W.e_,t)
inherit(W.c0,t)
inherit(W.c1,t)
inherit(W.c2,t)
inherit(W.cQ,t)
inherit(W.c4,t)
inherit(W.cS,t)
inherit(W.e3,t)
inherit(W.h,t)
inherit(W.cU,t)
inherit(W.eA,t)
inherit(W.cX,t)
inherit(W.eR,t)
inherit(W.eY,t)
inherit(W.d0,t)
inherit(W.cq,t)
inherit(W.d3,t)
inherit(W.ac,t)
inherit(W.d7,t)
inherit(W.cu,t)
inherit(W.d9,t)
inherit(W.ad,t)
inherit(W.de,t)
inherit(W.dh,t)
inherit(W.fZ,t)
inherit(W.dj,t)
inherit(W.h3,t)
inherit(W.cL,t)
inherit(W.hb,t)
inherit(W.hd,t)
inherit(W.dp,t)
inherit(W.dr,t)
inherit(W.dt,t)
inherit(W.dv,t)
inherit(W.dx,t)
inherit(P.cZ,t)
inherit(P.eX,t)
inherit(P.d5,t)
inherit(P.fo,t)
inherit(P.fp,t)
inherit(P.fs,t)
inherit(P.df,t)
inherit(P.dl,t)
inherit(P.dI,t)
inherit(P.fx,t)
inherit(P.fy,t)
inherit(P.db,t)
t=J.bm
inherit(J.fm,t)
inherit(J.aK,t)
inherit(J.aC,t)
inherit(J.j_,J.aA)
t=J.aW
inherit(J.cf,t)
inherit(J.ce,t)
t=P.U
inherit(H.l,t)
inherit(H.cj,t)
inherit(H.cN,t)
t=H.l
inherit(H.aX,t)
inherit(H.eO,t)
inherit(H.e6,H.cj)
t=P.cd
inherit(H.eU,t)
inherit(H.hg,t)
t=H.aX
inherit(H.bn,t)
inherit(P.eQ,t)
t=H.ay
inherit(H.iG,t)
inherit(H.iH,t)
inherit(H.hK,t)
inherit(H.hu,t)
inherit(H.eE,t)
inherit(H.eF,t)
inherit(H.hR,t)
inherit(H.h0,t)
inherit(H.h1,t)
inherit(H.iI,t)
inherit(H.ir,t)
inherit(H.is,t)
inherit(H.it,t)
inherit(H.iu,t)
inherit(H.iv,t)
inherit(H.fW,t)
inherit(H.eK,t)
inherit(H.im,t)
inherit(H.io,t)
inherit(H.ip,t)
inherit(P.hk,t)
inherit(P.hj,t)
inherit(P.hl,t)
inherit(P.hm,t)
inherit(P.hz,t)
inherit(P.hD,t)
inherit(P.hA,t)
inherit(P.hB,t)
inherit(P.hC,t)
inherit(P.hG,t)
inherit(P.hH,t)
inherit(P.hF,t)
inherit(P.hE,t)
inherit(P.fQ,t)
inherit(P.fR,t)
inherit(P.i9,t)
inherit(P.hV,t)
inherit(P.hU,t)
inherit(P.hW,t)
inherit(P.eT,t)
inherit(P.e4,t)
inherit(P.e5,t)
inherit(W.e7,t)
inherit(W.fN,t)
inherit(W.hh,t)
inherit(W.hx,t)
inherit(W.fb,t)
inherit(W.fa,t)
inherit(W.hY,t)
inherit(W.hZ,t)
inherit(W.i4,t)
inherit(W.i5,t)
inherit(P.ic,t)
inherit(B.iB,t)
inherit(B.iC,t)
inherit(B.iD,t)
inherit(B.iE,t)
inherit(B.iF,t)
inherit(B.fg,t)
inherit(B.fh,t)
inherit(B.fi,t)
inherit(B.fj,t)
inherit(B.fE,t)
inherit(A.il,t)
inherit(O.ix,t)
t=H.ho
inherit(H.b4,t)
inherit(H.bL,t)
t=P.aU
inherit(H.fc,t)
inherit(H.eL,t)
inherit(H.h9,t)
inherit(H.h7,t)
inherit(H.dM,t)
inherit(H.fz,t)
inherit(P.bW,t)
inherit(P.ct,t)
inherit(P.a_,t)
inherit(P.ha,t)
inherit(P.h8,t)
inherit(P.b1,t)
inherit(P.dO,t)
inherit(P.dX,t)
t=H.fW
inherit(H.fJ,t)
inherit(H.be,t)
inherit(H.hi,P.bW)
inherit(P.ci,P.aZ)
t=P.ci
inherit(H.ab,t)
inherit(W.hn,t)
t=H.b_
inherit(H.f2,t)
inherit(H.cm,t)
t=H.cm
inherit(H.bC,t)
inherit(H.bE,t)
inherit(H.bD,H.bC)
inherit(H.cn,H.bD)
inherit(H.bF,H.bE)
inherit(H.co,H.bF)
t=H.cn
inherit(H.cl,t)
inherit(H.f3,t)
t=H.co
inherit(H.f4,t)
inherit(H.f5,t)
inherit(H.f6,t)
inherit(H.f7,t)
inherit(H.f8,t)
inherit(H.cp,t)
inherit(H.f9,t)
inherit(P.i2,P.hp)
inherit(P.hT,P.i6)
inherit(P.hN,H.ab)
inherit(P.fB,P.fC)
inherit(P.hJ,P.fB)
inherit(P.hL,P.hJ)
inherit(P.cg,P.bB)
t=P.a6
inherit(P.W,t)
inherit(P.y,t)
t=P.a_
inherit(P.cv,t)
inherit(P.eD,t)
t=W.e
inherit(W.r,t)
inherit(W.aq,t)
inherit(W.es,t)
inherit(W.bk,t)
inherit(W.bo,t)
inherit(W.fq,t)
inherit(W.cy,t)
inherit(W.bH,t)
inherit(W.bJ,t)
inherit(W.he,t)
inherit(W.hf,t)
inherit(W.bx,t)
inherit(W.jg,t)
inherit(P.dJ,t)
inherit(P.aR,t)
t=W.r
inherit(W.a1,t)
inherit(W.ax,t)
inherit(W.bg,t)
t=W.a1
inherit(W.j,t)
inherit(P.w,t)
t=W.aq
inherit(W.bV,t)
inherit(W.ez,t)
inherit(W.eS,t)
t=W.j
inherit(W.dF,t)
inherit(W.dG,t)
inherit(W.av,t)
inherit(W.bX,t)
inherit(W.c_,t)
inherit(W.ew,t)
inherit(W.cb,t)
inherit(W.bl,t)
inherit(W.fA,t)
inherit(W.cF,t)
inherit(W.fU,t)
inherit(W.fV,t)
inherit(W.bu,t)
t=W.aT
inherit(W.dP,t)
inherit(W.dR,t)
inherit(W.dS,t)
inherit(W.dV,t)
t=W.a0
inherit(W.dQ,t)
inherit(W.dU,t)
inherit(W.dW,t)
inherit(W.aS,W.cP)
inherit(W.e0,W.c1)
inherit(W.e1,W.c2)
inherit(W.cR,W.cQ)
inherit(W.c3,W.cR)
inherit(W.cT,W.cS)
inherit(W.e2,W.cT)
inherit(W.cV,W.cU)
inherit(W.er,W.cV)
inherit(W.cY,W.cX)
inherit(W.bj,W.cY)
inherit(W.cc,W.bg)
inherit(W.eB,W.bk)
inherit(W.aJ,W.h)
t=W.aJ
inherit(W.aD,t)
inherit(W.N,t)
inherit(W.aI,t)
inherit(W.f_,W.bo)
inherit(W.d1,W.d0)
inherit(W.f0,W.d1)
inherit(W.R,P.cg)
inherit(W.d4,W.d3)
inherit(W.bq,W.d4)
inherit(W.d8,W.d7)
inherit(W.fn,W.d8)
inherit(W.bI,W.bH)
inherit(W.fF,W.bI)
inherit(W.da,W.d9)
inherit(W.fH,W.da)
inherit(W.fM,W.de)
inherit(W.di,W.dh)
inherit(W.fX,W.di)
inherit(W.bK,W.bJ)
inherit(W.fY,W.bK)
inherit(W.dk,W.dj)
inherit(W.h2,W.dk)
inherit(W.aL,W.N)
inherit(W.dq,W.dp)
inherit(W.hq,W.dq)
inherit(W.hr,W.c4)
inherit(W.ds,W.dr)
inherit(W.hI,W.ds)
inherit(W.du,W.dt)
inherit(W.d2,W.du)
inherit(W.dw,W.dv)
inherit(W.i_,W.dw)
inherit(W.dy,W.dx)
inherit(W.i0,W.dy)
inherit(W.hs,W.hn)
inherit(W.hv,P.fO)
inherit(W.jj,W.hv)
inherit(W.hw,P.fP)
inherit(W.i3,W.bG)
inherit(P.V,P.hS)
t=P.w
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
inherit(P.ej,t)
inherit(P.ek,t)
inherit(P.el,t)
inherit(P.em,t)
inherit(P.en,t)
inherit(P.eo,t)
inherit(P.ep,t)
inherit(P.eq,t)
inherit(P.et,t)
inherit(P.aa,t)
inherit(P.eV,t)
inherit(P.fk,t)
inherit(P.bs,t)
t=P.aa
inherit(P.ev,t)
inherit(P.a2,t)
inherit(P.eC,t)
inherit(P.fT,t)
inherit(P.bv,t)
inherit(P.hc,t)
inherit(P.d_,P.cZ)
inherit(P.eM,P.d_)
inherit(P.d6,P.d5)
inherit(P.fd,P.d6)
inherit(P.ft,P.a2)
inherit(P.dg,P.df)
inherit(P.fS,P.dg)
inherit(P.bw,P.bv)
inherit(P.dm,P.dl)
inherit(P.h4,P.dm)
inherit(P.fe,P.aR)
inherit(P.dc,P.db)
inherit(P.fI,P.dc)
t=G.f1
inherit(G.fG,t)
inherit(G.cM,t)
inherit(G.eZ,t)
inherit(G.fw,t)
inherit(A.fv,t)
inherit(A.cz,t)
t=G.fG
inherit(G.dK,t)
inherit(A.ap,t)
inherit(B.ff,G.dK)
t=G.cM
inherit(G.eW,t)
inherit(G.fl,t)
inherit(R.cx,A.fv)
inherit(R.fL,R.fK)
mixin(H.bC,P.n)
mixin(H.bD,H.aV)
mixin(H.bE,P.n)
mixin(H.bF,H.aV)
mixin(P.bB,P.n)
mixin(W.cP,W.dT)
mixin(W.cQ,P.n)
mixin(W.cR,W.o)
mixin(W.cS,P.n)
mixin(W.cT,W.o)
mixin(W.cU,P.n)
mixin(W.cV,W.o)
mixin(W.cX,P.n)
mixin(W.cY,W.o)
mixin(W.d0,P.n)
mixin(W.d1,W.o)
mixin(W.d3,P.n)
mixin(W.d4,W.o)
mixin(W.d7,P.n)
mixin(W.d8,W.o)
mixin(W.bH,P.n)
mixin(W.bI,W.o)
mixin(W.d9,P.n)
mixin(W.da,W.o)
mixin(W.de,P.aZ)
mixin(W.dh,P.n)
mixin(W.di,W.o)
mixin(W.bJ,P.n)
mixin(W.bK,W.o)
mixin(W.dj,P.n)
mixin(W.dk,W.o)
mixin(W.dp,P.n)
mixin(W.dq,W.o)
mixin(W.dr,P.n)
mixin(W.ds,W.o)
mixin(W.dt,P.n)
mixin(W.du,W.o)
mixin(W.dv,P.n)
mixin(W.dw,W.o)
mixin(W.dx,P.n)
mixin(W.dy,W.o)
mixin(P.cZ,P.n)
mixin(P.d_,W.o)
mixin(P.d5,P.n)
mixin(P.d6,W.o)
mixin(P.df,P.n)
mixin(P.dg,W.o)
mixin(P.dl,P.n)
mixin(P.dm,W.o)
mixin(P.db,P.n)
mixin(P.dc,W.o)})();(function constants(){C.o=W.av.prototype
C.H=W.bX.prototype
C.u=W.aS.prototype
C.p=W.c_.prototype
C.I=W.c0.prototype
C.J=W.cb.prototype
C.m=W.cc.prototype
C.K=J.a.prototype
C.a=J.aA.prototype
C.w=J.ce.prototype
C.b=J.cf.prototype
C.c=J.aW.prototype
C.i=J.aB.prototype
C.R=J.aC.prototype
C.V=H.cl.prototype
C.z=W.bq.prototype
C.A=J.fm.prototype
C.B=W.cu.prototype
C.G=W.cF.prototype
C.t=J.aK.prototype
C.at=W.aL.prototype
C.au=W.bx.prototype
C.f=new P.hT()
C.v=new P.az(0)
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
C.n=new G.x("","",0)
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
C.ab=H.K("ns")
C.ac=H.K("nt")
C.ad=H.K("eu")
C.ae=H.K("nu")
C.af=H.K("nv")
C.ag=H.K("k6")
C.ah=H.K("nw")
C.ai=H.K("k9")
C.aj=H.K("O")
C.ak=H.K("p")
C.al=H.K("ky")
C.am=H.K("kz")
C.an=H.K("nx")
C.ao=H.K("kA")
C.ap=H.K("aj")
C.aq=H.K("W")
C.ar=H.K("y")
C.as=H.K("a6")})();(function staticFields(){$.kg="$cachedFunction"
$.kh="$cachedInvocation"
$.jR=null
$.jP=null
$.jm=!1
$.jr=null
$.kP=null
$.l2=null
$.ig=null
$.iq=null
$.js=null
$.b5=null
$.bM=null
$.bN=null
$.jn=!1
$.C=C.f
$.k2=0
$.am=null
$.iX=null
$.k1=null
$.k0=null
$.jZ=null
$.jY=null
$.jX=null
$.jW=null
$.n_=0
$.n0=0
$.jw=0
$.l0=0
$.bS=0
$.bT=0
$.no=!1
$.kU=0})();(function lazyInitializers(){lazy($,"jV","$get$jV",function(){return H.kY("_$dart_dartClosure")})
lazy($,"j1","$get$j1",function(){return H.kY("_$dart_js")})
lazy($,"k7","$get$k7",function(){return H.mc()})
lazy($,"k8","$get$k8",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.k2
$.k2=t+1
t="expando$key$"+t}return new P.e8(t,null,[P.y])})
lazy($,"kn","$get$kn",function(){return H.ae(H.h6({
toString:function(){return"$receiver$"}}))})
lazy($,"ko","$get$ko",function(){return H.ae(H.h6({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"kp","$get$kp",function(){return H.ae(H.h6(null))})
lazy($,"kq","$get$kq",function(){return H.ae(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"ku","$get$ku",function(){return H.ae(H.h6(void 0))})
lazy($,"kv","$get$kv",function(){return H.ae(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"ks","$get$ks",function(){return H.ae(H.kt(null))})
lazy($,"kr","$get$kr",function(){return H.ae(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"kx","$get$kx",function(){return H.ae(H.kt(void 0))})
lazy($,"kw","$get$kw",function(){return H.ae(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"ji","$get$ji",function(){return P.mD()})
lazy($,"bO","$get$bO",function(){return[]})
lazy($,"jU","$get$jU",function(){return{}})
lazy($,"kG","$get$kG",function(){return P.j5(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"jk","$get$jk",function(){return P.M()})
lazy($,"ie","$get$ie",function(){return P.ka(P.y,P.aj)})
lazy($,"bQ","$get$bQ",function(){return P.ka(P.p,P.aj)})
lazy($,"kk","$get$kk",function(){return new G.cJ(1281,0,4294967295)})
lazy($,"iU","$get$iU",function(){return G.km(1281,1281,1281)})
lazy($,"jN","$get$jN",function(){return G.km(32774,770,771)})
lazy($,"S","$get$S",function(){return P.aE(["cBlendEquation",C.n,"cDepthWrite",C.n,"cDepthTest",C.n,"cStencilFunc",C.n,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColors",C.E,"aColorAlpha",C.Z,"aPosition",C.C,"aTexUV",C.a5,"aNormal",C.a8,"aBinormal",C.Y,"aCenter",C.D,"aPointSize",C.e,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.aa,"aBitangent",C.W,"iaRotation",C.l,"iaTranslation",C.d,"iaScale",C.d,"vColor",C.E,"vTexUV",C.k,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.C,"vPositionFromLight",C.X,"vCenter",C.D,"vDepth",C.a3,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.F,"uConvolutionMatrix",C.F,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a9,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a7,"uAnimationTable",C.h,"uTime",C.a6,"uCameraNear",C.e,"uCameraFar",C.e,"uFogNear",C.e,"uFogFar",C.e,"uPointSize",C.e,"uScale",C.e,"uAngle",C.e,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.e,"uShininess",C.e,"uShadowBias",C.e,"uOpacity",C.e,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.d,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a0,"uLightDescs",C.a1,"uLightCount",C.e,"uLightTypes",C.a2,"uBumpScale",C.a4,"uNormalScale",C.a_])})
lazy($,"l8","$get$l8",function(){var t=G.kj("WireframeV")
t.d6(["aPosition","aCenter"])
t.bs(["vCenter"])
t.br(["uPerspectiveViewMatrix","uModelMatrix"])
H.b(t.b==null)
t.b=t.by(!0,["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vCenter = aCenter;"],null)
return t})
lazy($,"l7","$get$l7",function(){var t=G.kj("WireframeF")
t.bs(["vCenter"])
t.br(["uColorAlpha","uColorAlpha2"])
H.b(t.b==null)
t.b=t.by(!1,["// the 3 vertices of a Face3 (w == 0) have the centers:\n// (1, 0, 0, 0)) \n// (0, 1, 0, 0)\n// (0, 0, 1, 0)\nfloat edgeFactorFace3(vec3 center) {\n    vec3 d = fwidth(center);\n    vec3 a3 = smoothstep(vec3(0.0), d * 1.5, center);\n    return min(min(a3.x, a3.y), a3.z);\n}\n\n// the 4 vertices of a Face4 (w == 1) have the centers:\n// (1, 0, 0, 1) \n// (1, 1, 0, 1)\n// (0, 1, 0, 1)\n// (0, 0, 0, 1)\nfloat edgeFactorFace4(vec2 center) {\n    vec2 d = fwidth(center);\n    vec2 a2 = smoothstep(vec2(0.0), d * 1.5, center);\n    return min(a2.x, a2.y);\n}\n\nvoid main() {\n    float q;\n    if (vCenter.w == 0.0) {\n        q = edgeFactorFace3(vCenter.xyz);\n    } else {\n        q = min(edgeFactorFace4(vCenter.xy),\n                edgeFactorFace4(1.0 - vCenter.xy));\n    }\n    oFragColor = mix(uColorAlpha, uColorAlpha2, q);\n}\n"],null)
return t})
lazy($,"kD","$get$kD",function(){return[T.J(0,0,1),T.J(0,0,-1),T.J(0,1,0),T.J(0,-1,0),T.J(1,0,0),T.J(-1,0,0)]})
lazy($,"k4","$get$k4",function(){return[G.H(0,11,5),G.H(0,5,1),G.H(0,1,7),G.H(0,7,10),G.H(0,10,11),G.H(1,5,9),G.H(5,11,4),G.H(11,10,2),G.H(10,7,6),G.H(7,1,8),G.H(3,9,4),G.H(3,4,2),G.H(3,2,6),G.H(3,6,8),G.H(3,8,9),G.H(4,9,5),G.H(2,4,11),G.H(6,2,10),G.H(8,6,7),G.H(9,8,1)]})
lazy($,"l5","$get$l5",function(){return(1+P.np(5))/2})
lazy($,"k5","$get$k5",function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=$.$get$l5()
s=T.J(-1,t,0)
s.D(0)
r=T.J(1,t,0)
r.D(0)
q=T.J(-1,-t,0)
q.D(0)
p=T.J(1,-t,0)
p.D(0)
o=T.J(0,-1,t)
o.D(0)
n=T.J(0,1,t)
n.D(0)
m=T.J(0,-1,-t)
m.D(0)
l=T.J(0,1,-t)
l.D(0)
k=T.J(t,0,-1)
k.D(0)
j=T.J(t,0,1)
j.D(0)
i=T.J(-t,0,-1)
i.D(0)
t=T.J(-t,0,1)
t.D(0)
return[s,r,q,p,o,n,m,l,k,j,i,t]})
lazy($,"kV","$get$kV",function(){return H.ak(C.m.cl(W.n3(),"#opaque"),"$isbl")})})()
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
mangledGlobalNames:{y:"int",W:"double",a6:"num",p:"String",aj:"bool",O:"Null",i:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.r},{func:1,ret:P.aj,args:[W.a1,P.p,P.p,W.bz]},{func:1,v:true,args:[P.G],opt:[P.b0]},{func:1,v:true,args:[W.h]},{func:1,ret:P.y,args:[P.I,P.I]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,Blob:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSCharsetRule:J.a,CSSConditionRule:J.a,CSSFontFaceRule:J.a,CSSGroupingRule:J.a,CSSImportRule:J.a,CSSKeyframeRule:J.a,MozCSSKeyframeRule:J.a,WebKitCSSKeyframeRule:J.a,CSSKeyframesRule:J.a,MozCSSKeyframesRule:J.a,WebKitCSSKeyframesRule:J.a,CSSMediaRule:J.a,CSSNamespaceRule:J.a,CSSPageRule:J.a,CSSRule:J.a,CSSStyleRule:J.a,CSSStyleSheet:J.a,CSSSupportsRule:J.a,CSSVariableReferenceValue:J.a,CSSViewportRule:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMParser:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,File:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,Gamepad:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MimeType:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechGrammar:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,StyleSheet:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,Touch:J.a,TrackDefault:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGLength:J.a,SVGNumber:J.a,SVGPreserveAspectRatio:J.a,SVGTransform:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioParamMap:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bp,ArrayBufferView:H.b_,DataView:H.f2,Float32Array:H.cl,Float64Array:H.f3,Int16Array:H.f4,Int32Array:H.f5,Int8Array:H.f6,Uint16Array:H.f7,Uint32Array:H.f8,Uint8ClampedArray:H.cp,CanvasPixelArray:H.cp,Uint8Array:H.f9,HTMLAudioElement:W.j,HTMLBRElement:W.j,HTMLBaseElement:W.j,HTMLButtonElement:W.j,HTMLContentElement:W.j,HTMLDListElement:W.j,HTMLDataElement:W.j,HTMLDataListElement:W.j,HTMLDetailsElement:W.j,HTMLDialogElement:W.j,HTMLEmbedElement:W.j,HTMLFieldSetElement:W.j,HTMLHRElement:W.j,HTMLHeadingElement:W.j,HTMLHtmlElement:W.j,HTMLIFrameElement:W.j,HTMLImageElement:W.j,HTMLLIElement:W.j,HTMLLabelElement:W.j,HTMLLegendElement:W.j,HTMLLinkElement:W.j,HTMLMapElement:W.j,HTMLMediaElement:W.j,HTMLMenuElement:W.j,HTMLMetaElement:W.j,HTMLMeterElement:W.j,HTMLModElement:W.j,HTMLOListElement:W.j,HTMLObjectElement:W.j,HTMLOptGroupElement:W.j,HTMLOptionElement:W.j,HTMLOutputElement:W.j,HTMLParagraphElement:W.j,HTMLParamElement:W.j,HTMLPictureElement:W.j,HTMLPreElement:W.j,HTMLProgressElement:W.j,HTMLQuoteElement:W.j,HTMLScriptElement:W.j,HTMLShadowElement:W.j,HTMLSlotElement:W.j,HTMLSourceElement:W.j,HTMLSpanElement:W.j,HTMLStyleElement:W.j,HTMLTableCaptionElement:W.j,HTMLTableCellElement:W.j,HTMLTableDataCellElement:W.j,HTMLTableHeaderCellElement:W.j,HTMLTableColElement:W.j,HTMLTextAreaElement:W.j,HTMLTimeElement:W.j,HTMLTitleElement:W.j,HTMLTrackElement:W.j,HTMLUListElement:W.j,HTMLUnknownElement:W.j,HTMLVideoElement:W.j,HTMLDirectoryElement:W.j,HTMLFontElement:W.j,HTMLFrameElement:W.j,HTMLFrameSetElement:W.j,HTMLMarqueeElement:W.j,HTMLElement:W.j,Accelerometer:W.bV,LinearAccelerationSensor:W.bV,AccessibleNodeList:W.dE,HTMLAnchorElement:W.dF,HTMLAreaElement:W.dG,HTMLBodyElement:W.av,HTMLCanvasElement:W.bX,CanvasRenderingContext2D:W.dL,CDATASection:W.ax,CharacterData:W.ax,Comment:W.ax,ProcessingInstruction:W.ax,Text:W.ax,CSSPerspective:W.dP,CSSPositionValue:W.dQ,CSSRotation:W.dR,CSSScale:W.dS,CSSStyleDeclaration:W.aS,MSStyleCSSProperties:W.aS,CSS2Properties:W.aS,CSSImageValue:W.a0,CSSKeywordValue:W.a0,CSSNumericValue:W.a0,CSSResourceValue:W.a0,CSSUnitValue:W.a0,CSSURLImageValue:W.a0,CSSStyleValue:W.a0,CSSMatrixComponent:W.aT,CSSSkew:W.aT,CSSTransformComponent:W.aT,CSSTransformValue:W.dU,CSSTranslation:W.dV,CSSUnparsedValue:W.dW,DataTransferItemList:W.dY,DeviceAcceleration:W.dZ,HTMLDivElement:W.c_,XMLDocument:W.bg,Document:W.bg,DOMException:W.e_,DOMImplementation:W.c0,DOMMatrix:W.e0,DOMMatrixReadOnly:W.c1,DOMPoint:W.e1,DOMPointReadOnly:W.c2,ClientRectList:W.c3,DOMRectList:W.c3,DOMRectReadOnly:W.c4,DOMStringList:W.e2,DOMTokenList:W.e3,Element:W.a1,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,AccessibleNode:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MessagePort:W.e,MIDIAccess:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RemotePlayback:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SourceBuffer:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,TextTrack:W.e,TextTrackCue:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,VTTCue:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,ServiceWorker:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,FileList:W.er,FileWriter:W.es,HTMLFormElement:W.ew,Gyroscope:W.ez,HTMLHeadElement:W.cb,History:W.eA,HTMLCollection:W.bj,HTMLFormControlsCollection:W.bj,HTMLOptionsCollection:W.bj,HTMLDocument:W.cc,XMLHttpRequest:W.eB,XMLHttpRequestUpload:W.bk,XMLHttpRequestEventTarget:W.bk,HTMLInputElement:W.bl,KeyboardEvent:W.aD,Location:W.eR,Magnetometer:W.eS,MediaList:W.eY,MIDIOutput:W.f_,MIDIInput:W.bo,MIDIPort:W.bo,MimeTypeArray:W.f0,PointerEvent:W.N,MouseEvent:W.N,DragEvent:W.N,DocumentFragment:W.r,ShadowRoot:W.r,Attr:W.r,DocumentType:W.r,Node:W.r,NodeIterator:W.cq,NodeList:W.bq,RadioNodeList:W.bq,Plugin:W.ac,PluginArray:W.fn,PresentationConnection:W.fq,Range:W.cu,RTCDataChannel:W.cy,DataChannel:W.cy,HTMLSelectElement:W.fA,AbsoluteOrientationSensor:W.aq,AmbientLightSensor:W.aq,OrientationSensor:W.aq,RelativeOrientationSensor:W.aq,Sensor:W.aq,SourceBufferList:W.fF,SpeechGrammarList:W.fH,SpeechRecognitionResult:W.ad,Storage:W.fM,HTMLTableElement:W.cF,HTMLTableRowElement:W.fU,HTMLTableSectionElement:W.fV,HTMLTemplateElement:W.bu,TextTrackCueList:W.fX,TextTrackList:W.fY,TimeRanges:W.fZ,TouchEvent:W.aI,TouchList:W.h2,TrackDefaultList:W.h3,TreeWalker:W.cL,CompositionEvent:W.aJ,FocusEvent:W.aJ,TextEvent:W.aJ,UIEvent:W.aJ,URL:W.hb,VRStageBoundsPoint:W.hd,VideoTrackList:W.he,WebSocket:W.hf,WheelEvent:W.aL,Window:W.bx,DOMWindow:W.bx,CSSRuleList:W.hq,DOMRect:W.hr,GamepadList:W.hI,NamedNodeMap:W.d2,MozNamedAttrMap:W.d2,SpeechRecognitionResultList:W.i_,StyleSheetList:W.i0,SVGFEBlendElement:P.e9,SVGFEColorMatrixElement:P.ea,SVGFEComponentTransferElement:P.eb,SVGFECompositeElement:P.ec,SVGFEConvolveMatrixElement:P.ed,SVGFEDiffuseLightingElement:P.ee,SVGFEDisplacementMapElement:P.ef,SVGFEFloodElement:P.eg,SVGFEGaussianBlurElement:P.eh,SVGFEImageElement:P.ei,SVGFEMergeElement:P.ej,SVGFEMorphologyElement:P.ek,SVGFEOffsetElement:P.el,SVGFEPointLightElement:P.em,SVGFESpecularLightingElement:P.en,SVGFESpotLightElement:P.eo,SVGFETileElement:P.ep,SVGFETurbulenceElement:P.eq,SVGFilterElement:P.et,SVGForeignObjectElement:P.ev,SVGCircleElement:P.a2,SVGEllipseElement:P.a2,SVGLineElement:P.a2,SVGPathElement:P.a2,SVGPolygonElement:P.a2,SVGPolylineElement:P.a2,SVGGeometryElement:P.a2,SVGAElement:P.aa,SVGClipPathElement:P.aa,SVGDefsElement:P.aa,SVGGElement:P.aa,SVGSwitchElement:P.aa,SVGGraphicsElement:P.aa,SVGImageElement:P.eC,SVGLengthList:P.eM,SVGMaskElement:P.eV,SVGMatrix:P.eX,SVGNumberList:P.fd,SVGPatternElement:P.fk,SVGPoint:P.fo,SVGPointList:P.fp,SVGRect:P.fs,SVGRectElement:P.ft,SVGScriptElement:P.bs,SVGStringList:P.fS,SVGAnimateElement:P.w,SVGAnimateMotionElement:P.w,SVGAnimateTransformElement:P.w,SVGAnimationElement:P.w,SVGDescElement:P.w,SVGDiscardElement:P.w,SVGFEDistantLightElement:P.w,SVGFEFuncAElement:P.w,SVGFEFuncBElement:P.w,SVGFEFuncGElement:P.w,SVGFEFuncRElement:P.w,SVGFEMergeNodeElement:P.w,SVGLinearGradientElement:P.w,SVGMarkerElement:P.w,SVGMetadataElement:P.w,SVGRadialGradientElement:P.w,SVGSetElement:P.w,SVGStopElement:P.w,SVGStyleElement:P.w,SVGSymbolElement:P.w,SVGTitleElement:P.w,SVGViewElement:P.w,SVGGradientElement:P.w,SVGComponentTransferFunctionElement:P.w,SVGFEDropShadowElement:P.w,SVGMPathElement:P.w,SVGElement:P.w,SVGSVGElement:P.fT,SVGTextPathElement:P.bv,SVGTextContentElement:P.bv,SVGTSpanElement:P.bw,SVGTextElement:P.bw,SVGTextPositioningElement:P.bw,SVGTransformList:P.h4,SVGUseElement:P.hc,AudioBuffer:P.dI,AudioTrackList:P.dJ,AudioContext:P.aR,webkitAudioContext:P.aR,BaseAudioContext:P.aR,OfflineAudioContext:P.fe,WebGLRenderingContext:P.fx,WebGL2RenderingContext:P.fy,SQLResultSetRowList:P.fI})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,Blob:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSStyleSheet:true,CSSSupportsRule:true,CSSVariableReferenceValue:true,CSSViewportRule:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMParser:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,File:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,Gamepad:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechGrammar:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,StyleSheet:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,Touch:true,TrackDefault:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGLength:true,SVGNumber:true,SVGPreserveAspectRatio:true,SVGTransform:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioParamMap:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,Accelerometer:true,LinearAccelerationSensor:true,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSPositionValue:true,CSSRotation:true,CSSScale:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSSkew:true,CSSTransformComponent:false,CSSTransformValue:true,CSSTranslation:true,CSSUnparsedValue:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMMatrix:true,DOMMatrixReadOnly:false,DOMPoint:true,DOMPointReadOnly:false,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AccessibleNode:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnectionList:true,PresentationRequest:true,RemotePlayback:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SourceBuffer:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,TextTrack:true,TextTrackCue:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,VTTCue:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,ServiceWorker:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,FileList:true,FileWriter:true,HTMLFormElement:true,Gyroscope:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLInputElement:true,KeyboardEvent:true,Location:true,Magnetometer:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,PresentationConnection:true,Range:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,AbsoluteOrientationSensor:true,AmbientLightSensor:true,OrientationSensor:true,RelativeOrientationSensor:true,Sensor:false,SourceBufferList:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VRStageBoundsPoint:true,VideoTrackList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGAElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLengthList:true,SVGMaskElement:true,SVGMatrix:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMetadataElement:true,SVGRadialGradientElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSymbolElement:true,SVGTitleElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGSVGElement:true,SVGTextPathElement:true,SVGTextContentElement:false,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransformList:true,SVGUseElement:true,AudioBuffer:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cm.$nativeSuperclassTag="ArrayBufferView"
H.bC.$nativeSuperclassTag="ArrayBufferView"
H.bD.$nativeSuperclassTag="ArrayBufferView"
H.cn.$nativeSuperclassTag="ArrayBufferView"
H.bE.$nativeSuperclassTag="ArrayBufferView"
H.bF.$nativeSuperclassTag="ArrayBufferView"
H.co.$nativeSuperclassTag="ArrayBufferView"
W.bH.$nativeSuperclassTag="EventTarget"
W.bI.$nativeSuperclassTag="EventTarget"
W.bJ.$nativeSuperclassTag="EventTarget"
W.bK.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.l4(O.l9(),b)},[])
else (function(b){H.l4(O.l9(),b)})([])})})()