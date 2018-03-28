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
a[c]=function(){a[c]=function(){H.nG(b)}
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
return d?function(e){if(t===null)t=H.jB(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.jB(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.jB(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={je:function je(a){this.a=a},
jl:function(a,b,c,d){if(!!a.$isj)return new H.ec(a,b,[c,d])
return new H.cp(a,b,[c,d])},
ch:function(){return new P.b1("No element")},
my:function(){return new P.b1("Too many elements")},
mx:function(){return new P.b1("Too few elements")},
mN:function(a,b){H.cF(a,0,J.bg(a)-1,b)},
cF:function(a,b,c,d){if(c-b<=32)H.mM(a,b,c,d)
else H.mL(a,b,c,d)},
mM:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.P(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.a6(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
mL:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.b(t>32)
s=C.b.K(t+1,6)
r=a3+s
q=a4-s
p=C.b.K(a3+a4,2)
o=p-s
n=p+s
t=J.P(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.a6(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.a6(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.a6(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.a6(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.a6(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.a6(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.a6(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.a6(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.a6(a5.$2(j,i),0)){h=i
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
H.cF(a2,a3,g-2,a5)
H.cF(a2,f+2,a4,a5)
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
break}}H.cF(a2,g,f,a5)}else H.cF(a2,g,f,a5)},
j:function j(){},
aX:function aX(){},
cn:function cn(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cp:function cp(a,b,c){this.a=a
this.b=b
this.$ti=c},
ec:function ec(a,b,c){this.a=a
this.b=b
this.$ti=c},
f1:function f1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bp:function bp(a,b,c){this.a=a
this.b=b
this.$ti=c},
cS:function cS(a,b,c){this.a=a
this.b=b
this.$ti=c},
ho:function ho(a,b,c){this.a=a
this.b=b
this.$ti=c},
aT:function aT(){},
dD:function(a,b){var t=a.ag(b)
if(!u.globalState.d.cy)u.globalState.f.an()
return t},
iw:function(){++u.globalState.f.b},
iL:function(){--u.globalState.f.b
H.b(u.globalState.f.b>=0)},
lq:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.q(s).$ish)throw H.c(P.dN("Arguments to main must be a List: "+H.e(s)))
u.globalState=new H.i4(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$km()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.hD(P.jk(null,H.aK),0)
q=P.z
s.seN(new H.a9(0,null,null,null,null,null,0,[q,H.b4]))
s.seP(new H.a9(0,null,null,null,null,null,0,[q,null]))
if(s.x){r=new H.i3()
s.Q=r
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.ms,r)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.n0)}if(u.globalState.x)return
o=H.kY()
u.globalState.e=o
u.globalState.z.i(0,o.a,o)
u.globalState.d=o
if(H.bc(a,{func:1,args:[P.J]}))o.ag(new H.iW(t,a))
else if(H.bc(a,{func:1,args:[P.J,P.J]}))o.ag(new H.iX(t,a))
else o.ag(a)
u.globalState.f.an()},
n0:function(a){var t=P.aB(["command","print","msg",a])
return new H.a1(!0,P.b5(null,P.z)).L(t)},
kY:function(){var t,s
t=u.globalState.a++
s=P.z
t=new H.b4(t,new H.a9(0,null,null,null,null,null,0,[s,H.cD]),P.aC(null,null,null,s),u.createNewIsolate(),new H.cD(0,null,!1),new H.ar(H.lp()),new H.ar(H.lp()),!1,!1,[],P.aC(null,null,null,null),null,null,!1,!0,P.aC(null,null,null,null))
t.dD()
return t},
mu:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.mv()
return},
mv:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.c(P.u("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.c(P.u('Cannot extract URI from "'+t+'"'))},
ms:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=new H.aJ(!0,[]).W(b.data)
s=J.P(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.nt(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.aJ(!0,[]).W(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.aJ(!0,[]).W(s.h(t,"replyTo"))
k=H.kY()
u.globalState.f.a.T(0,new H.aK(k,new H.eN(q,p,o,n,m,l),"worker-start"))
u.globalState.d=k
u.globalState.f.an()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.lV(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.an()
break
case"close":u.globalState.ch.am(0,$.$get$kn().h(0,a))
a.terminate()
u.globalState.f.an()
break
case"log":H.mr(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
j=P.aB(["command","print","msg",t])
j=new H.a1(!0,P.b5(null,P.z)).L(j)
s.toString
self.postMessage(j)}else P.a4(s.h(t,"msg"))
break
case"error":throw H.c(s.h(t,"msg"))}},
mr:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aB(["command","log","msg",a])
r=new H.a1(!0,P.b5(null,P.z)).L(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.I(q)
t=H.a2(q)
s=P.cb(t)
throw H.c(s)}},
mt:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.kv=$.kv+("_"+s)
$.kw=$.kw+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.J(0,["spawned",new H.b6(s,r),q,t.r])
r=new H.eO(t,d,a,c,b)
if(e){t.bX(q,q)
u.globalState.f.a.T(0,new H.aK(t,r,"start isolate"))}else r.$0()},
mO:function(a,b){var t=new H.h6(!0,!1,null,0)
t.dt(a,b)
return t},
n2:function(a){return new H.aJ(!0,[]).W(new H.a1(!1,P.b5(null,P.z)).L(a))},
iW:function iW(a,b){this.a=a
this.b=b},
iX:function iX(a,b){this.a=a
this.b=b},
i4:function i4(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
b4:function b4(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
hY:function hY(a,b){this.a=a
this.b=b},
hD:function hD(a,b){this.a=a
this.b=b},
hE:function hE(a){this.a=a},
aK:function aK(a,b,c){this.a=a
this.b=b
this.c=c},
i3:function i3(){},
eN:function eN(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eO:function eO(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hx:function hx(){},
b6:function b6(a,b){this.b=a
this.a=b},
i5:function i5(a,b){this.a=a
this.b=b},
bS:function bS(a,b,c){this.b=a
this.c=b
this.a=c},
cD:function cD(a,b,c){this.a=a
this.b=b
this.c=c},
h6:function h6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h7:function h7(a,b){this.a=a
this.b=b},
h8:function h8(a,b){this.a=a
this.b=b},
ar:function ar(a){this.a=a},
a1:function a1(a,b){this.a=a
this.b=b},
aJ:function aJ(a,b){this.a=a
this.b=b},
nn:function(a){return u.types[a]},
nv:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.q(a).$ist},
e:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.bh(a)
if(typeof t!=="string")throw H.c(H.O(a))
return t},
mJ:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t=J.ax(t)
s=t[0]
r=t[1]
return new H.fA(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aD:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
bv:function(a){var t,s,r,q,p,o,n,m,l
t=J.q(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.O||!!J.q(a).$isaH){p=C.B(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.i.aN(q,0)===36)q=C.i.d6(q,1)
l=H.dF(H.iy(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+l,u.mangledGlobalNames)},
L:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mH:function(a){return a.b?H.L(a).getUTCFullYear()+0:H.L(a).getFullYear()+0},
mF:function(a){return a.b?H.L(a).getUTCMonth()+1:H.L(a).getMonth()+1},
mB:function(a){return a.b?H.L(a).getUTCDate()+0:H.L(a).getDate()+0},
mC:function(a){return a.b?H.L(a).getUTCHours()+0:H.L(a).getHours()+0},
mE:function(a){return a.b?H.L(a).getUTCMinutes()+0:H.L(a).getMinutes()+0},
mG:function(a){return a.b?H.L(a).getUTCSeconds()+0:H.L(a).getSeconds()+0},
mD:function(a){return a.b?H.L(a).getUTCMilliseconds()+0:H.L(a).getMilliseconds()+0},
ku:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.c(H.O(a))
return a[b]},
bb:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a7(!0,b,"index",null)
t=J.bg(a)
if(b<0||C.b.cR(b,t))return P.A(b,a,"index",null,t)
return P.fx(b,"index",null)},
O:function(a){return new P.a7(!0,a,null,null)},
c:function(a){var t
if(a==null)a=new P.bu()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.lr})
t.name=""}else t.toString=H.lr
return t},
lr:function(){return J.bh(this.dartException)},
H:function(a){throw H.c(a)},
a5:function(a){throw H.c(P.ai(a))},
ac:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.hc(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
hd:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
kJ:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
kt:function(a,b){return new H.fi(a,b==null?null:b.method)},
jg:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.eS(a,s,t?null:b.receiver)},
I:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.iY(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aX(r,16)&8191)===10)switch(q){case 438:return t.$1(H.jg(H.e(s)+" (Error "+q+")",null))
case 445:case 5007:return t.$1(H.kt(H.e(s)+" (Error "+q+")",null))}}if(a instanceof TypeError){p=$.$get$kD()
o=$.$get$kE()
n=$.$get$kF()
m=$.$get$kG()
l=$.$get$kK()
k=$.$get$kL()
j=$.$get$kI()
$.$get$kH()
i=$.$get$kN()
h=$.$get$kM()
g=p.O(s)
if(g!=null)return t.$1(H.jg(s,g))
else{g=o.O(s)
if(g!=null){g.method="call"
return t.$1(H.jg(s,g))}else{g=n.O(s)
if(g==null){g=m.O(s)
if(g==null){g=l.O(s)
if(g==null){g=k.O(s)
if(g==null){g=j.O(s)
if(g==null){g=m.O(s)
if(g==null){g=i.O(s)
if(g==null){g=h.O(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return t.$1(H.kt(s,g))}}return t.$1(new H.hh(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.cI()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.a7(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.cI()
return a},
a2:function(a){var t
if(a==null)return new H.dh(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dh(a,null)},
nz:function(a){if(a==null||typeof a!='object')return J.bf(a)
else return H.aD(a)},
nl:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=a.length
for(r=0;r<s;){q=r+1
H.b(t)
p=a[r]
r=q+1
H.b(t)
b.i(0,p,a[q])}return b},
nu:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dD(b,new H.iG(a))
case 1:return H.dD(b,new H.iH(a,d))
case 2:return H.dD(b,new H.iI(a,d,e))
case 3:return H.dD(b,new H.iJ(a,d,e,f))
case 4:return H.dD(b,new H.iK(a,d,e,f,g))}throw H.c(P.cb("Unsupported number of arguments for wrapped closure"))},
ba:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.nu)
a.$identity=t
return t},
ma:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.q(c).$ish){t.$reflectionInfo=c
r=H.mJ(t).r}else r=c
q=d?Object.create(new H.fP().constructor.prototype):Object.create(new H.bi(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.k8(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.nn,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.k5:H.j8
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.c("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.k8(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
m7:function(a,b,c,d){var t=H.j8
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
k8:function(a,b,c){var t,s,r,q
if(c)return H.m9(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.m7(s,b==null?r!=null:b!==r,t,b)
return q},
m8:function(a,b,c,d){var t,s
t=H.j8
s=H.k5
switch(b?-1:a){case 0:throw H.c(H.mK("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
m9:function(a,b){var t,s,r,q
t=$.k6
if(t==null){t=H.k3("self")
$.k6=t}t=$.k4
if(t==null){t=H.k3("receiver")
$.k4=t}s=b.$stubName
r=b.length
q=a[s]
t=H.m8(r,b==null?q!=null:b!==q,s,b)
return t},
jB:function(a,b,c,d,e,f){var t,s
t=J.ax(b)
s=!!J.q(c).$ish?J.ax(c):c
return H.ma(a,t,s,!!d,e,f)},
j8:function(a){return a.a},
k5:function(a){return a.c},
k3:function(a){var t,s,r,q,p
t=new H.bi("self","target","receiver","name")
s=J.ax(Object.getOwnPropertyNames(t))
for(r=s.length,q=0;q<r;++q){p=s[q]
if(t[p]===a)return p}},
nW:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.ad(a,"String"))},
nR:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.ad(a,"double"))},
nV:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.ad(a,"num"))},
nf:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.ad(a,"bool"))},
nt:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.ad(a,"int"))},
nB:function(a,b){throw H.c(H.ad(a,b.substring(3)))},
nA:function(a,b){var t=J.P(b)
throw H.c(H.k7(a,t.bs(b,3,t.gj(b))))},
jF:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.q(a)[b])return a
H.nB(a,b)},
ao:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.q(a)[b]
else t=!0
if(t)return a
H.nA(a,b)},
nU:function(a){if(a==null)return a
if(!!J.q(a).$ish)return a
throw H.c(H.ad(a,"List"))},
jC:function(a){var t=J.q(a)
return"$S" in t?t.$S():null},
bc:function(a,b){var t,s
if(a==null)return!1
t=H.jC(a)
if(t==null)s=!1
else s=H.lj(t,b)
return s},
nS:function(a,b){var t,s
if(a==null)return a
if($.jy)return a
$.jy=!0
try{if(H.bc(a,b))return a
t=H.iQ(b,null)
s=H.ad(a,t)
throw H.c(s)}finally{$.jy=!1}},
ad:function(a,b){return new H.he("TypeError: "+H.e(P.ca(a))+": type '"+H.l4(a)+"' is not a subtype of type '"+b+"'")},
k7:function(a,b){return new H.dS("CastError: "+H.e(P.ca(a))+": type '"+H.l4(a)+"' is not a subtype of type '"+b+"'")},
l4:function(a){var t
if(a instanceof H.at){t=H.jC(a)
if(t!=null)return H.iQ(t,null)
return"Closure"}return H.bv(a)},
af:function(a){if(!0===a)return!1
if(!!J.q(a).$isjc)a=a.$0()
if(typeof a==="boolean")return!a
throw H.c(H.ad(a,"bool"))},
an:function(a){throw H.c(new H.hq(a))},
b:function(a){if(H.af(a))throw H.c(P.m6(null))},
nG:function(a){throw H.c(new P.e3(a))},
mK:function(a){return new H.fE(a)},
lp:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
lh:function(a){return u.getIsolateTag(a)},
G:function(a){return new H.al(a,null)},
B:function(a,b){H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
iy:function(a){if(a==null)return
return a.$ti},
li:function(a,b){return H.jJ(a["$as"+H.e(b)],H.iy(a))},
T:function(a,b,c){var t,s
t=H.li(a,b)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
ah:function(a,b){var t,s
t=H.iy(a)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
iQ:function(a,b){var t=H.bd(a,b)
return t},
bd:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.b(!0)
H.b(!0)
return a[0].name+H.dF(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.e(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.bd(t,b)
return H.n4(a,b)}return"unknown-reified-type"},
n4:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.bd(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.bd(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.bd(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.nk(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.bd(l[j],b)+(" "+H.e(j))}q+="}"}return"("+q+") => "+t},
dF:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=new P.by("")
for(r=b,q=!0,p=!0;H.b(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.b(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.bd(o,c)}return p?"":"<"+s.k(0)+">"},
iz:function(a){var t,s,r
if(a instanceof H.at){t=H.jC(a)
if(t!=null)return H.iQ(t,null)}s=J.q(a).constructor.name
if(a==null)return s
r=H.dF(a.$ti,0,null)
return s+r},
jJ:function(a,b){if(a==null)return b
H.b(typeof a=="function")
H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.jG(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.jG(a,null,b)
return b},
bW:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.iy(a)
s=J.q(a)
if(s[b]==null)return!1
return H.l8(H.jJ(s[d],t),c)},
dG:function(a,b,c,d){var t,s
if(a==null)return a
t=H.bW(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.dF(c,0,null)
throw H.c(H.k7(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
nO:function(a,b,c,d){var t,s
if(a==null)return a
t=H.bW(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.dF(c,0,null)
throw H.c(H.ad(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
l8:function(a,b){var t,s,r,q,p
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
nP:function(a,b,c){return H.jG(a,b,H.li(b,c))},
U:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.name==="J")return!0
if('func' in b)return H.lj(a,b)
if('func' in a)return b.name==="jc"||b.name==="D"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.b(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.b(!0)
q=b[0]}else q=b
if(q!==s){p=H.iQ(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.l8(H.jJ(o,t),r)},
l7:function(a,b,c){var t,s,r,q,p,o,n
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
nb:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
H.b(typeof a=='object')
H.b(typeof b=='object')
t=J.ax(Object.getOwnPropertyNames(b))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.U(p,o)||H.U(o,p)))return!1}return!0},
lj:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
if(n===m){if(!H.l7(r,q,!1))return!1
if(!H.l7(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.b(j)
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
if(!(H.U(g,f)||H.U(f,g)))return!1}}return H.nb(a.named,b.named)},
jG:function(a,b,c){H.b(typeof a=="function")
H.b(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
nX:function(a){var t=$.jD
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
nT:function(a){return H.aD(a)},
nQ:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nw:function(a){var t,s,r,q,p,o
H.b(!(a instanceof P.D))
t=$.jD.$1(a)
s=$.iv[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iF[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.l6.$2(a,t)
if(t!=null){s=$.iv[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iF[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.iO(r)
$.iv[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.iF[t]=r
return r}if(p==="-"){o=H.iO(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.ll(a,r)
if(p==="*")throw H.c(P.kR(t))
if(u.leafTags[t]===true){o=H.iO(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.ll(a,r)},
ll:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.jH(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
iO:function(a){return J.jH(a,!1,null,!!a.$ist)},
ny:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return H.iO(t)
else return J.jH(t,c,null,null)},
nr:function(){if(!0===$.jE)return
$.jE=!0
H.ns()},
ns:function(){var t,s,r,q,p,o,n,m
$.iv=Object.create(null)
$.iF=Object.create(null)
H.nq()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.lo.$1(p)
if(o!=null){n=H.ny(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
nq:function(){var t,s,r,q,p,o,n
t=C.T()
t=H.b9(C.Q,H.b9(C.V,H.b9(C.A,H.b9(C.A,H.b9(C.U,H.b9(C.R,H.b9(C.S(C.B),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.jD=new H.iC(p)
$.l6=new H.iD(o)
$.lo=new H.iE(n)},
b9:function(a,b){return a(b)||b},
nF:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
fA:function fA(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
hc:function hc(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fi:function fi(a,b){this.a=a
this.b=b},
eS:function eS(a,b,c){this.a=a
this.b=b
this.c=c},
hh:function hh(a){this.a=a},
iY:function iY(a){this.a=a},
dh:function dh(a,b){this.a=a
this.b=b},
iG:function iG(a){this.a=a},
iH:function iH(a,b){this.a=a
this.b=b},
iI:function iI(a,b,c){this.a=a
this.b=b
this.c=c},
iJ:function iJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iK:function iK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
at:function at(){},
h2:function h2(){},
fP:function fP(){},
bi:function bi(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
he:function he(a){this.a=a},
dS:function dS(a){this.a=a},
fE:function fE(a){this.a=a},
hq:function hq(a){this.a=a},
al:function al(a,b){this.a=a
this.b=b},
a9:function a9(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
eR:function eR(a){this.a=a},
eU:function eU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eV:function eV(a,b){this.a=a
this.$ti=b},
eW:function eW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
iC:function iC(a){this.a=a},
iD:function iD(a){this.a=a},
iE:function iE(a){this.a=a},
ip:function(a){var t,s,r
if(!!J.q(a).$isp)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
ae:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bb(b,a))},
bs:function bs(){},
b_:function b_(){},
f8:function f8(){},
ct:function ct(){},
cu:function cu(){},
cv:function cv(){},
cs:function cs(){},
f9:function f9(){},
fa:function fa(){},
fb:function fb(){},
fc:function fc(){},
fd:function fd(){},
fe:function fe(){},
cw:function cw(){},
ff:function ff(){},
bJ:function bJ(){},
bK:function bK(){},
bL:function bL(){},
bM:function bM(){},
nk:function(a){return J.ax(H.B(a?Object.keys(a):[],[null]))},
iP:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
q:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ck.prototype
return J.cj.prototype}if(typeof a=="string")return J.ay.prototype
if(a==null)return J.cl.prototype
if(typeof a=="boolean")return J.eQ.prototype
if(a.constructor==Array)return J.aw.prototype
if(typeof a!="object"){if(typeof a=="function")return J.az.prototype
return a}if(a instanceof P.D)return a
return J.ix(a)},
jH:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ix:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.jE==null){H.nr()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.c(P.kR("Return interceptor for "+H.e(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$jf()]
if(p!=null)return p
p=H.nw(a)
if(p!=null)return p
if(typeof a=="function")return C.W
s=Object.getPrototypeOf(a)
if(s==null)return C.E
if(s===Object.prototype)return C.E
if(typeof q=="function"){Object.defineProperty(q,$.$get$jf(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
ax:function(a){a.fixed$length=Array
return a},
P:function(a){if(typeof a=="string")return J.ay.prototype
if(a==null)return a
if(a.constructor==Array)return J.aw.prototype
if(typeof a!="object"){if(typeof a=="function")return J.az.prototype
return a}if(a instanceof P.D)return a
return J.ix(a)},
dE:function(a){if(a==null)return a
if(a.constructor==Array)return J.aw.prototype
if(typeof a!="object"){if(typeof a=="function")return J.az.prototype
return a}if(a instanceof P.D)return a
return J.ix(a)},
lf:function(a){if(typeof a=="number")return J.aW.prototype
if(a==null)return a
if(!(a instanceof P.D))return J.aH.prototype
return a},
nm:function(a){if(typeof a=="number")return J.aW.prototype
if(typeof a=="string")return J.ay.prototype
if(a==null)return a
if(!(a instanceof P.D))return J.aH.prototype
return a},
lg:function(a){if(typeof a=="string")return J.ay.prototype
if(a==null)return a
if(!(a instanceof P.D))return J.aH.prototype
return a},
i:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.az.prototype
return a}if(a instanceof P.D)return a
return J.ix(a)},
C:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.q(a).B(a,b)},
a6:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.lf(a).aF(a,b)},
ls:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.lf(a).aG(a,b)},
be:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nv(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.P(a).h(a,b)},
lt:function(a,b,c,d){return J.i(a).dH(a,b,c,d)},
jK:function(a,b){return J.lg(a).aN(a,b)},
iZ:function(a,b){return J.i(a).e_(a,b)},
lu:function(a,b,c,d){return J.i(a).e0(a,b,c,d)},
lv:function(a,b,c){return J.i(a).e1(a,b,c)},
jL:function(a,b){return J.i(a).bW(a,b)},
j_:function(a,b){return J.i(a).R(a,b)},
jM:function(a,b,c){return J.i(a).bZ(a,b,c)},
lw:function(a,b){return J.i(a).eg(a,b)},
j0:function(a,b,c){return J.i(a).c_(a,b,c)},
aM:function(a,b,c){return J.i(a).c0(a,b,c)},
dH:function(a,b){return J.i(a).ej(a,b)},
lx:function(a,b){return J.i(a).c1(a,b)},
ly:function(a,b,c){return J.i(a).c2(a,b,c)},
jN:function(a,b,c,d){return J.i(a).c3(a,b,c,d)},
lz:function(a,b,c,d,e){return J.i(a).c4(a,b,c,d,e)},
lA:function(a,b){return J.nm(a).S(a,b)},
j1:function(a,b,c){return J.P(a).en(a,b,c)},
j2:function(a){return J.i(a).c6(a)},
lB:function(a){return J.i(a).c7(a)},
jO:function(a){return J.i(a).ca(a)},
lC:function(a){return J.i(a).es(a)},
lD:function(a,b){return J.i(a).cc(a,b)},
j3:function(a,b){return J.i(a).cd(a,b)},
lE:function(a,b,c,d){return J.i(a).ce(a,b,c,d)},
lF:function(a,b,c,d,e){return J.i(a).eA(a,b,c,d,e)},
lG:function(a,b,c,d,e){return J.i(a).cf(a,b,c,d,e)},
lH:function(a,b,c,d,e,f){return J.i(a).eB(a,b,c,d,e,f)},
lI:function(a,b){return J.dE(a).t(a,b)},
dI:function(a,b){return J.i(a).cg(a,b)},
lJ:function(a,b){return J.i(a).ci(a,b)},
lK:function(a){return J.i(a).eC(a)},
jP:function(a,b){return J.dE(a).ah(a,b)},
lL:function(a){return J.i(a).gef(a)},
bf:function(a){return J.q(a).gw(a)},
aN:function(a){return J.dE(a).gA(a)},
bg:function(a){return J.P(a).gj(a)},
lM:function(a){return J.i(a).gbb(a)},
lN:function(a){return J.q(a).gC(a)},
lO:function(a){return J.i(a).gf1(a)},
lP:function(a){return J.i(a).gaC(a)},
j4:function(a){return J.i(a).gm(a)},
j5:function(a){return J.i(a).gn(a)},
jQ:function(a){return J.i(a).gF(a)},
j6:function(a,b){return J.i(a).a5(a,b)},
lQ:function(a){return J.i(a).aE(a)},
jR:function(a){return J.i(a).bh(a)},
lR:function(a,b){return J.i(a).bi(a,b)},
lS:function(a,b,c){return J.i(a).bj(a,b,c)},
jS:function(a,b,c){return J.i(a).bm(a,b,c)},
lT:function(a,b){return J.i(a).cl(a,b)},
lU:function(a,b){return J.dE(a).co(a,b)},
jT:function(a,b,c){return J.i(a).cp(a,b,c)},
jU:function(a){return J.dE(a).eV(a)},
lV:function(a,b){return J.i(a).J(a,b)},
lW:function(a,b,c,d){return J.i(a).br(a,b,c,d)},
jV:function(a,b,c,d,e,f,g){return J.i(a).cu(a,b,c,d,e,f,g)},
lX:function(a,b,c,d){return J.i(a).cv(a,b,c,d)},
dJ:function(a,b,c,d){return J.i(a).cw(a,b,c,d)},
lY:function(a){return J.lg(a).f4(a)},
bh:function(a){return J.q(a).k(a)},
lZ:function(a,b,c,d){return J.i(a).f6(a,b,c,d)},
m_:function(a,b,c){return J.i(a).cA(a,b,c)},
m0:function(a,b,c){return J.i(a).cB(a,b,c)},
j7:function(a,b,c){return J.i(a).cC(a,b,c)},
m1:function(a,b,c){return J.i(a).cD(a,b,c)},
jW:function(a,b,c){return J.i(a).cE(a,b,c)},
jX:function(a,b,c){return J.i(a).cF(a,b,c)},
jY:function(a,b,c){return J.i(a).cG(a,b,c)},
jZ:function(a,b,c,d){return J.i(a).cH(a,b,c,d)},
k_:function(a,b,c,d){return J.i(a).cI(a,b,c,d)},
m2:function(a,b){return J.i(a).cK(a,b)},
m3:function(a,b,c){return J.i(a).f7(a,b,c)},
m4:function(a,b,c,d,e,f,g){return J.i(a).cM(a,b,c,d,e,f,g)},
m5:function(a,b,c,d,e){return J.i(a).cO(a,b,c,d,e)},
a:function a(){},
eQ:function eQ(){},
cl:function cl(){},
bo:function bo(){},
fs:function fs(){},
aH:function aH(){},
az:function az(){},
aw:function aw(a){this.$ti=a},
jd:function jd(a){this.$ti=a},
dO:function dO(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aW:function aW(){},
ck:function ck(){},
cj:function cj(){},
ay:function ay(){}},P={
mS:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.nc()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.ba(new P.ht(t),1)).observe(s,{childList:true})
return new P.hs(t,s,r)}else if(self.setImmediate!=null)return P.nd()
return P.ne()},
mT:function(a){H.iw()
self.scheduleImmediate(H.ba(new P.hu(a),0))},
mU:function(a){H.iw()
self.setImmediate(H.ba(new P.hv(a),0))},
mV:function(a){P.jp(C.y,a)},
jp:function(a,b){var t=C.b.K(a.a,1000)
return H.mO(t<0?0:t,b)},
n7:function(a,b){if(H.bc(a,{func:1,args:[P.J,P.J]})){b.toString
return a}else{b.toString
return a}},
mo:function(a,b,c){var t
if(a==null)a=new P.bu()
t=$.w
if(t!==C.d)t.toString
t=new P.F(0,t,null,[c])
t.dJ(a,b)
return t},
mp:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.F(0,$.w,null,[P.h])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.eF(t,b,!1,s)
try{for(m=0,l=0;m<6;++m){q=a[m]
p=l
q.bf(new P.eE(t,p,s,b,!1),r)
l=++t.b}if(l===0){l=new P.F(0,$.w,null,[null])
l.bE(C.C)
return l}k=new Array(l)
k.fixed$length=Array
t.a=k}catch(j){o=H.I(j)
n=H.a2(j)
if(t.b===0||!1)return P.mo(o,n,null)
else{t.c=o
t.d=n}}return s},
n3:function(a,b,c){$.w.toString
a.P(b,c)},
mX:function(a,b){var t=new P.F(0,$.w,null,[b])
H.b(!0)
t.a=4
t.c=a
return t},
kV:function(a,b){var t,s,r
H.b(b.a<4)
H.b(!(a instanceof P.F))
H.b(b.a===0)
b.a=1
try{a.bf(new P.hN(b),new P.hO(b))}catch(r){t=H.I(r)
s=H.a2(r)
P.nC(new P.hP(b,t,s))}},
hM:function(a,b){var t,s,r
H.b(b.a<=1)
for(;t=a.a,s=t===2,s;){H.b(s)
a=a.c}if(t>=4){r=b.aw()
b.aM(a)
P.b3(b,r)}else{r=b.c
H.b(b.a<=1)
b.a=2
b.c=a
a.bQ(r)}},
b3:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.iq(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.b3(t.a,b)}s=t.a
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
P.iq(null,null,p,o,s)
return}s=$.w
if(s==null?l!=null:s!==l){H.b(l!=null)
s=$.w
H.b(l==null?s!=null:l!==s)
j=$.w
$.w=l
i=j}else i=null
s=b.c
if(s===8)new P.hU(t,r,b,q).$0()
else if(p){if((s&1)!==0)new P.hT(r,b,m).$0()}else if((s&2)!==0)new P.hS(t,r,b).$0()
if(i!=null){H.b(!0)
$.w=i}s=r.b
if(!!J.q(s).$isQ){if(s.a>=4){H.b(o.a<4)
h=o.c
o.c=null
b=o.ax(h)
H.b(o.a<4)
H.b(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.hM(s,o)
return}}g=b.b
H.b(g.a<4)
h=g.c
g.c=null
b=g.ax(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.b(!o)
g.a=4
g.c=p}else{H.b(!o)
g.a=8
g.c=p}t.a=g
s=g}},
n6:function(){var t,s
for(;t=$.b7,t!=null;){$.bU=null
s=t.b
$.b7=s
if(s==null)$.bT=null
t.a.$0()}},
na:function(){$.jz=!0
try{P.n6()}finally{$.bU=null
$.jz=!1
if($.b7!=null)$.$get$jv().$1(P.l9())}},
l3:function(a){var t=new P.cT(a,null)
if($.b7==null){$.bT=t
$.b7=t
if(!$.jz)$.$get$jv().$1(P.l9())}else{$.bT.b=t
$.bT=t}},
n9:function(a){var t,s,r
t=$.b7
if(t==null){P.l3(a)
$.bU=$.bT
return}s=new P.cT(a,null)
r=$.bU
if(r==null){s.b=t
$.bU=s
$.b7=s}else{s.b=r.b
r.b=s
$.bU=s
if(s.b==null)$.bT=s}},
nC:function(a){var t=$.w
if(C.d===t){P.b8(null,null,C.d,a)
return}t.toString
P.b8(null,null,t,t.b4(a))},
n1:function(a,b,c){var t=a.ek(0)
if(!!J.q(t).$isQ&&t!==$.$get$kk())t.f8(new P.io(b,c))
else b.ab(c)},
mP:function(a,b){var t=$.w
if(t===C.d){t.toString
return P.jp(a,b)}return P.jp(a,t.b4(b))},
ju:function(a){var t,s
H.b(a!=null)
t=$.w
H.b(a==null?t!=null:a!==t)
s=$.w
$.w=a
return s},
iq:function(a,b,c,d,e){var t={}
t.a=d
P.n9(new P.ir(t,e))},
l1:function(a,b,c,d){var t,s
if($.w===c)return d.$0()
t=P.ju(c)
try{s=d.$0()
return s}finally{s=t
H.b(s!=null)
$.w=s}},
l2:function(a,b,c,d,e){var t,s
if($.w===c)return d.$1(e)
t=P.ju(c)
try{s=d.$1(e)
return s}finally{s=t
H.b(s!=null)
$.w=s}},
n8:function(a,b,c,d,e,f){var t,s
if($.w===c)return d.$2(e,f)
t=P.ju(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.b(s!=null)
$.w=s}},
b8:function(a,b,c,d){var t=C.d!==c
if(t)d=!(!t||!1)?c.b4(d):c.eh(d)
P.l3(d)},
ht:function ht(a){this.a=a},
hs:function hs(a,b,c){this.a=a
this.b=b
this.c=c},
hu:function hu(a){this.a=a},
hv:function hv(a){this.a=a},
Q:function Q(){},
eF:function eF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eE:function eE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
j9:function j9(){},
hy:function hy(){},
hr:function hr(a,b){this.a=a
this.$ti=b},
ii:function ii(a,b){this.a=a
this.$ti=b},
bF:function bF(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
F:function F(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hJ:function hJ(a,b){this.a=a
this.b=b},
hR:function hR(a,b){this.a=a
this.b=b},
hN:function hN(a){this.a=a},
hO:function hO(a){this.a=a},
hP:function hP(a,b,c){this.a=a
this.b=b
this.c=c},
hL:function hL(a,b){this.a=a
this.b=b},
hQ:function hQ(a,b){this.a=a
this.b=b},
hK:function hK(a,b,c){this.a=a
this.b=b
this.c=c},
hU:function hU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hV:function hV(a){this.a=a},
hT:function hT(a,b,c){this.a=a
this.b=b
this.c=c},
hS:function hS(a,b,c){this.a=a
this.b=b
this.c=c},
cT:function cT(a,b){this.a=a
this.b=b},
bx:function bx(){},
fX:function fX(a){this.a=a},
fY:function fY(a,b){this.a=a
this.b=b},
fV:function fV(a,b,c){this.a=a
this.b=b
this.c=c},
fW:function fW(a){this.a=a},
fU:function fU(){},
io:function io(a,b){this.a=a
this.b=b},
jo:function jo(){},
aO:function aO(a,b){this.a=a
this.b=b},
im:function im(){},
ir:function ir(a,b){this.a=a
this.b=b},
i7:function i7(){},
i9:function i9(a,b){this.a=a
this.b=b},
i8:function i8(a,b){this.a=a
this.b=b},
ia:function ia(a,b){this.a=a
this.b=b},
kp:function(a,b){return new H.a9(0,null,null,null,null,null,0,[a,b])},
V:function(){return new H.a9(0,null,null,null,null,null,0,[null,null])},
aB:function(a){return H.nl(a,new H.a9(0,null,null,null,null,null,0,[null,null]))},
b5:function(a,b){return new P.i1(0,null,null,null,null,null,0,[a,b])},
aC:function(a,b,c,d){return new P.i_(0,null,null,null,null,null,0,[d])},
jx:function(){var t=Object.create(null)
H.b(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
mw:function(a,b,c){var t,s
if(P.jA(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$bV()
C.a.l(s,a)
try{P.n5(a,t)}finally{H.b(C.a.gb8(s)===a)
s.pop()}s=P.kB(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eP:function(a,b,c){var t,s,r
if(P.jA(a))return b+"..."+c
t=new P.by(b)
s=$.$get$bV()
C.a.l(s,a)
try{r=t
r.a=P.kB(r.ga_(),a,", ")}finally{H.b(C.a.gb8(s)===a)
s.pop()}s=t
s.a=s.ga_()+c
s=t.ga_()
return s.charCodeAt(0)==0?s:s},
jA:function(a){var t,s
for(t=0;s=$.$get$bV(),t<s.length;++t)if(a===s[t])return!0
return!1},
n5:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gA(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.p())return
q=H.e(t.gq(t))
C.a.l(b,q)
s+=q.length+2;++r}if(!t.p()){if(r<=5)return
p=b.pop()
o=b.pop()}else{n=t.gq(t);++r
if(!t.p()){if(r<=4){C.a.l(b,H.e(n))
return}p=H.e(n)
o=b.pop()
s+=p.length+2}else{m=t.gq(t);++r
H.b(r<100)
for(;t.p();n=m,m=l){l=t.gq(t);++r
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
jj:function(a,b){var t,s
t=P.aC(null,null,null,b)
for(s=J.aN(a);s.p();)t.l(0,s.gq(s))
return t},
kr:function(a){var t,s,r
t={}
if(P.jA(a))return"{...}"
s=new P.by("")
try{C.a.l($.$get$bV(),a)
r=s
r.a=r.ga_()+"{"
t.a=!0
J.jP(a,new P.f0(t,s))
t=s
t.a=t.ga_()+"}"}finally{t=$.$get$bV()
H.b(C.a.gb8(t)===a)
t.pop()}t=s.ga_()
return t.charCodeAt(0)==0?t:t},
jk:function(a,b){var t=new P.eX(null,0,0,0,[b])
t.dl(a,b)
return t},
i1:function i1(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
i_:function i_(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
i0:function i0(a,b,c){this.a=a
this.b=b
this.c=c},
bH:function bH(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hX:function hX(){},
ji:function ji(){},
cm:function cm(){},
l:function l(){},
co:function co(){},
f0:function f0(a,b){this.a=a
this.b=b},
aZ:function aZ(){},
eX:function eX(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
i2:function i2(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fH:function fH(){},
fG:function fG(){},
bI:function bI(){},
mk:function(a){var t=J.q(a)
if(!!t.$isat)return t.k(a)
return"Instance of '"+H.bv(a)+"'"},
kq:function(a,b,c){var t,s
t=H.B([],[c])
for(s=J.aN(a);s.p();)C.a.l(t,s.gq(s))
return t},
kB:function(a,b,c){var t=J.aN(b)
if(!t.p())return a
if(c.length===0){do a+=H.e(t.gq(t))
while(t.p())}else{a+=H.e(t.gq(t))
for(;t.p();)a=a+c+H.e(t.gq(t))}return a},
mb:function(a,b){return J.lA(a,b)},
me:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+t
if(t>=10)return s+"00"+t
return s+"000"+t},
mf:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c4:function(a){if(a>=10)return""+a
return"0"+a},
mh:function(a,b,c,d,e,f){return new P.au(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
ca:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bh(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mk(a)},
m6:function(a){return new P.c0(a)},
dN:function(a){return new P.a7(!1,null,null,a)},
k0:function(a,b,c){return new P.a7(!0,a,b,c)},
fx:function(a,b,c){return new P.cC(null,null,!0,a,b,"Value not in range")},
aE:function(a,b,c,d,e){return new P.cC(b,c,!0,a,d,"Invalid value")},
kx:function(a,b,c,d,e,f){if(0>a||a>c)throw H.c(P.aE(a,0,c,"start",f))
if(a>b||b>c)throw H.c(P.aE(b,a,c,"end",f))
return b},
A:function(a,b,c,d,e){var t=e!=null?e:J.bg(b)
return new P.eM(b,t,!0,a,c,"Index out of range")},
u:function(a){return new P.hi(a)},
kR:function(a){return new P.hg(a)},
fO:function(a){return new P.b1(a)},
ai:function(a){return new P.dU(a)},
cb:function(a){return new P.hI(a)},
a4:function(a){H.iP(H.e(a))},
ag:function ag(){},
E:function E(){},
bj:function bj(a,b){this.a=a
this.b=b},
W:function W(){},
au:function au(a){this.a=a},
ea:function ea(){},
eb:function eb(){},
aS:function aS(){},
c0:function c0(a){this.a=a},
bu:function bu(){},
a7:function a7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cC:function cC(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eM:function eM(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hi:function hi(a){this.a=a},
hg:function hg(a){this.a=a},
b1:function b1(a){this.a=a},
dU:function dU(a){this.a=a},
cI:function cI(){},
e3:function e3(a){this.a=a},
jb:function jb(){},
hI:function hI(a){this.a=a},
ee:function ee(a,b,c){this.a=a
this.b=b
this.$ti=c},
z:function z(){},
R:function R(){},
ci:function ci(){},
h:function h(){},
aY:function aY(){},
J:function J(){},
a3:function a3(){},
D:function D(){},
b0:function b0(){},
o:function o(){},
by:function by(a){this.a=a},
jr:function jr(){},
la:function(a){return a},
it:function(a){var t,s,r,q,p
if(a==null)return
t=P.V()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.a5)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
ni:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.jP(a,new P.is(t))
return t},
kf:function(){var t=$.ke
if(t==null){t=J.j1(window.navigator.userAgent,"Opera",0)
$.ke=t}return t},
mg:function(){var t,s
t=$.kb
if(t!=null)return t
s=$.kc
if(s==null){s=J.j1(window.navigator.userAgent,"Firefox",0)
$.kc=s}if(s)t="-moz-"
else{s=$.kd
if(s==null){s=!P.kf()&&J.j1(window.navigator.userAgent,"Trident/",0)
$.kd=s}if(s)t="-ms-"
else t=P.kf()?"-o-":"-webkit-"}$.kb=t
return t},
is:function is(a){this.a=a},
hZ:function hZ(){},
i6:function i6(){},
S:function S(){},
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
er:function er(){},
es:function es(){},
et:function et(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){},
eA:function eA(){},
eC:function eC(){},
Z:function Z(){},
a8:function a8(){},
eK:function eK(){},
eT:function eT(){},
f2:function f2(){},
fj:function fj(){},
fq:function fq(){},
fu:function fu(){},
fv:function fv(){},
fy:function fy(){},
fz:function fz(){},
bw:function bw(){},
fZ:function fZ(){},
v:function v(){},
h_:function h_(){},
bA:function bA(){},
bB:function bB(){},
hb:function hb(){},
hk:function hk(){},
d2:function d2(){},
d3:function d3(){},
d9:function d9(){},
da:function da(){},
dj:function dj(){},
dk:function dk(){},
dq:function dq(){},
dr:function dr(){},
dP:function dP(){},
dQ:function dQ(){},
aP:function aP(){},
fk:function fk(){},
fC:function fC(){},
fD:function fD(){},
fN:function fN(){},
df:function df(){},
dg:function dg(){}},W={
mi:function(a,b,c){var t,s
t=document.body
s=(t&&C.o).N(t,a,b,c)
s.toString
t=new H.cS(new W.M(s),new W.ed(),[W.r])
return t.gZ(t)},
mj:function(a){return"wheel"},
bl:function(a){var t,s,r
t="element tag unavailable"
try{s=J.lO(a)
if(typeof s==="string")t=a.tagName}catch(r){H.I(r)}return t},
mW:function(a,b){return document.createElement(a)},
aL:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kZ:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
a0:function(a,b,c,d,e){var t=W.l5(new W.hH(c))
t=new W.hG(0,a,b,t,!1,[e])
t.dB(a,b,c,!1,e)
return t},
kW:function(a){var t,s
t=document.createElement("a")
s=new W.ib(t,window.location)
s=new W.bG(s)
s.dC(a)
return s},
mZ:function(a,b,c,d){return!0},
n_:function(a,b,c,d){var t,s,r,q,p
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
l_:function(){var t=P.o
t=new W.ij(P.jj(C.t,t),P.aC(null,null,null,t),P.aC(null,null,null,t),P.aC(null,null,null,t),null)
t.dF(null,new H.bp(C.t,new W.ik(),[H.ah(C.t,0),null]),["TEMPLATE"],null)
return t},
l5:function(a){var t=$.w
if(t===C.d)return a
return t.ei(a)},
k:function k(){},
c_:function c_(){},
dK:function dK(){},
dL:function dL(){},
dM:function dM(){},
ap:function ap(){},
aq:function aq(){},
c1:function c1(){},
c2:function c2(){},
as:function as(){},
dV:function dV(){},
dW:function dW(){},
dX:function dX(){},
dY:function dY(){},
aQ:function aQ(){},
dZ:function dZ(){},
X:function X(){},
aR:function aR(){},
e_:function e_(){},
e0:function e0(){},
e1:function e1(){},
e4:function e4(){},
e5:function e5(){},
c5:function c5(){},
bk:function bk(){},
e6:function e6(){},
c6:function c6(){},
e7:function e7(){},
c7:function c7(){},
c8:function c8(){},
c9:function c9(){},
e8:function e8(){},
e9:function e9(){},
Y:function Y(){},
ed:function ed(){},
f:function f(){},
d:function d(){},
ey:function ey(){},
ez:function ez(){},
eD:function eD(){},
eH:function eH(){},
cf:function cf(){},
eI:function eI(){},
bm:function bm(){},
cg:function cg(){},
eJ:function eJ(){},
bn:function bn(){},
aU:function aU(){},
aV:function aV(){},
av:function av(){},
aA:function aA(){},
eZ:function eZ(){},
f_:function f_(){},
bq:function bq(){},
f3:function f3(){},
f5:function f5(){},
br:function br(){},
f6:function f6(){},
K:function K(){},
M:function M(a){this.a=a},
r:function r(){},
cx:function cx(){},
bt:function bt(){},
aa:function aa(){},
ft:function ft(){},
fw:function fw(){},
cB:function cB(){},
cE:function cE(){},
fF:function fF(){},
ak:function ak(){},
fK:function fK(){},
fM:function fM(){},
ab:function ab(){},
fS:function fS(){},
fT:function fT(a){this.a=a},
cK:function cK(){},
h0:function h0(){},
h1:function h1(){},
bz:function bz(){},
h3:function h3(){},
h4:function h4(){},
h5:function h5(){},
aF:function aF(){},
h9:function h9(){},
ha:function ha(){},
cR:function cR(){},
aG:function aG(){},
hj:function hj(){},
hl:function hl(){},
b2:function b2(){},
hm:function hm(){},
hn:function hn(){},
aI:function aI(){},
bE:function bE(){},
hp:function hp(a){this.a=a},
jt:function jt(){},
hz:function hz(){},
hA:function hA(){},
hW:function hW(){},
d6:function d6(){},
ie:function ie(){},
ig:function ig(){},
hw:function hw(){},
hB:function hB(a){this.a=a},
hF:function hF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hC:function hC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hG:function hG(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
hH:function hH(a){this.a=a},
bG:function bG(a){this.a=a},
m:function m(){},
cz:function cz(a){this.a=a},
fh:function fh(a){this.a=a},
fg:function fg(a,b,c){this.a=a
this.b=b
this.c=c},
bN:function bN(){},
ic:function ic(){},
id:function id(){},
ij:function ij(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
ik:function ik(){},
ih:function ih(){},
cd:function cd(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cy:function cy(){},
jm:function jm(){},
js:function js(){},
ib:function ib(a,b){this.a=a
this.b=b},
ds:function ds(a){this.a=a},
il:function il(a){this.a=a},
cU:function cU(){},
cV:function cV(){},
cW:function cW(){},
cX:function cX(){},
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
bO:function bO(){},
bP:function bP(){},
dd:function dd(){},
de:function de(){},
di:function di(){},
dl:function dl(){},
dm:function dm(){},
bQ:function bQ(){},
bR:function bR(){},
dn:function dn(){},
dp:function dp(){},
dt:function dt(){},
du:function du(){},
dv:function dv(){},
dw:function dw(){},
dx:function dx(){},
dy:function dy(){},
dz:function dz(){},
dA:function dA(){},
dB:function dB(){},
dC:function dC(){}},B={
nD:function(a){var t,s
t=document
s=W.aA
W.a0(t,"keydown",new B.iR(),!1,s)
W.a0(t,"keyup",new B.iS(),!1,s)
if(!$.nE)W.a0(t,"mousemove",new B.iT(),!1,W.K)
s=W.K
W.a0(t,"mousedown",new B.iU(),!1,s)
W.a0(t,"mouseup",new B.iV(),!1,s)},
mA:function(a,b,c,d){var t,s,r,q,p,o,n
t=new Float32Array(3)
s=$.$get$iu()
r=$.$get$bX()
q=new T.a_(new Float32Array(16))
q.a7()
p=new Float32Array(3)
o=new Float32Array(3)
n=new Float32Array(3)
t=new B.fl(a,b,c,0,new T.n(t),-0.02,s,r,q,new T.n(p),new T.n(o),new T.n(n),new T.n(new Float32Array(3)),"camera:orbit",!1,!0)
t.dm(a,b,c,d)
return t},
iR:function iR(){},
iS:function iS(){},
iT:function iT(){},
iU:function iU(){},
iV:function iV(){},
fl:function fl(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
fm:function fm(a){this.a=a},
fn:function fn(a){this.a=a},
fo:function fo(){},
fp:function fp(a){this.a=a},
mc:function(d1,d2,d3,d4,d5,d6,d7,d8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0
t=-d6
s=-d7
r=new T.n(new Float32Array(3))
r.u(t,s,d8)
q=new T.n(new Float32Array(3))
q.u(d6,s,d8)
p=new T.n(new Float32Array(3))
p.u(d6,d7,d8)
o=new T.n(new Float32Array(3))
o.u(t,d7,d8)
n=-d8
m=new T.n(new Float32Array(3))
m.u(t,s,n)
l=new T.n(new Float32Array(3))
l.u(t,d7,n)
k=new T.n(new Float32Array(3))
k.u(d6,d7,n)
j=new T.n(new Float32Array(3))
j.u(d6,s,n)
i=new T.n(new Float32Array(3))
i.u(t,d7,n)
h=new T.n(new Float32Array(3))
h.u(t,d7,d8)
g=new T.n(new Float32Array(3))
g.u(d6,d7,d8)
f=new T.n(new Float32Array(3))
f.u(d6,d7,n)
e=new T.n(new Float32Array(3))
e.u(d6,s,d8)
d=new T.n(new Float32Array(3))
d.u(t,s,d8)
c=new T.n(new Float32Array(3))
c.u(t,s,n)
b=new T.n(new Float32Array(3))
b.u(d6,s,n)
a=new T.n(new Float32Array(3))
a.u(d6,s,n)
a0=new T.n(new Float32Array(3))
a0.u(d6,d7,n)
a1=new T.n(new Float32Array(3))
a1.u(d6,d7,d8)
a2=new T.n(new Float32Array(3))
a2.u(d6,s,d8)
a3=new T.n(new Float32Array(3))
a3.u(t,s,n)
a4=new T.n(new Float32Array(3))
a4.u(t,s,d8)
s=new T.n(new Float32Array(3))
s.u(t,d7,d8)
a5=new T.n(new Float32Array(3))
a5.u(t,d7,n)
t=new T.x(new Float32Array(2))
t.v(d3,d5)
n=new T.x(new Float32Array(2))
n.v(d2,d5)
a6=new T.x(new Float32Array(2))
a6.v(d2,d4)
a7=new T.x(new Float32Array(2))
a7.v(d3,d4)
a8=new T.x(new Float32Array(2))
a8.v(d2,d5)
a9=new T.x(new Float32Array(2))
a9.v(d2,d4)
b0=new T.x(new Float32Array(2))
b0.v(d3,d4)
b1=new T.x(new Float32Array(2))
b1.v(d3,d5)
b2=new T.x(new Float32Array(2))
b2.v(d3,d4)
b3=new T.x(new Float32Array(2))
b3.v(d3,d5)
b4=new T.x(new Float32Array(2))
b4.v(d2,d5)
b5=new T.x(new Float32Array(2))
b5.v(d2,d4)
b6=new T.x(new Float32Array(2))
b6.v(d2,d4)
b7=new T.x(new Float32Array(2))
b7.v(d3,d4)
b8=new T.x(new Float32Array(2))
b8.v(d3,d5)
b9=new T.x(new Float32Array(2))
b9.v(d2,d5)
c0=new T.x(new Float32Array(2))
c0.v(d2,d5)
c1=new T.x(new Float32Array(2))
c1.v(d2,d4)
c2=new T.x(new Float32Array(2))
c2.v(d3,d4)
c3=new T.x(new Float32Array(2))
c3.v(d3,d5)
c4=new T.x(new Float32Array(2))
c4.v(d3,d5)
c5=new T.x(new Float32Array(2))
c5.v(d2,d5)
c6=new T.x(new Float32Array(2))
c6.v(d2,d4)
c7=new T.x(new Float32Array(2))
c7.v(d3,d4)
c8=new G.eG(!1,[],[],[],P.V())
c8.bw("aTexUV")
c8.bw("aNormal")
c8.df(6)
c8.ar([r,q,p,o,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,s,a5])
c8.dd("aTexUV",[t,n,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7])
for(c9=0;t=$.$get$kU(),c9<6;++c9){d0=t[c9]
c8.de("aNormal",[d0,d0,d0,d0])}return c8}},G={
mR:function(a){var t,s,r
t=H.B(a.split("\n"),[P.o])
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.e(t[s])}return C.a.al(t,"\n")},
kT:function(a,b,c){var t,s,r,q
t=J.i(a)
s=t.c9(a,b)
t.bp(a,s,c)
t.c5(a,s)
r=t.bl(a,s,35713)
if(r!=null&&!r){q=t.bk(a,s)
P.a4("E:Compilation failed:")
P.a4("E:"+G.mR(c))
P.a4("E:Failure:")
P.a4(C.i.a4("E:",q))
throw H.c(q)}return s},
kC:function(a,b,c){return new G.cO(a,b,c)},
kj:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.j4(a[s])
b[t+1]=J.j5(a[s])
b[t+2]=J.jQ(a[s])}return b},
mm:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.j4(a[s])
b[t+1]=J.j5(a[s])}return b},
mn:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.j4(a[s])
b[t+1]=J.j5(a[s])
b[t+2]=J.jQ(a[s])
b[t+3]=J.lP(a[s])}return b},
ml:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.be(a[s],0)
b[t+1]=J.be(a[s],1)
b[t+2]=J.be(a[s],2)
b[t+3]=J.be(a[s],3)}return b},
ks:function(a,b,c,d){return new G.f4(b,J.lC(b.a),c,P.V(),d,null,0,-1,null,null,P.V(),"meshdata:"+a,!1,!0)},
mY:function(a,b){var t,s,r,q,p,o,n,m,l,k
for(t=a.e,s=t.gE(t),s=s.gA(s),r=b.x,q=[[P.h,P.z]],p=[P.W],o=[T.am],n=[T.n],m=[T.x];s.p();){l=s.gq(s)
if(!r.G(0,l)){l="Dropping unnecessary attribute: "+H.e(l)
if($.le>0)H.iP("I: "+l)
continue}k=t.h(0,l)
switch($.$get$N().h(0,l).a){case"vec2":b.a9(l,G.mm(H.dG(k,"$ish",m,"$ash"),null),2)
break
case"vec3":b.a9(l,G.kj(H.dG(k,"$ish",n,"$ash"),null),3)
break
case"vec4":b.a9(l,G.mn(H.dG(k,"$ish",o,"$ash"),null),4)
break
case"float":b.a9(l,new Float32Array(H.ip(H.dG(k,"$ish",p,"$ash"))),1)
break
case"uvec4":b.a9(l,G.ml(H.dG(k,"$ish",q,"$ash"),null),4)
break
default:if(H.af(!1))H.an("unknown type for "+H.e(l)+" ["+J.lN(k[0]).k(0)+"] ["+new H.al(H.iz(k),null).k(0)+"] "+H.e(k))}}},
ky:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.aC(null,null,null,P.o)
s=c.b
r=d.b
q=c.f
p=J.lB(b.a)
o=G.kT(b.a,35633,s)
J.jM(b.a,p,o)
n=G.kT(b.a,35632,r)
J.jM(b.a,p,n)
if(q.length>0)J.lZ(b.a,p,q,35980)
J.lT(b.a,p)
if(!J.lS(b.a,p,35714))H.H(J.lR(b.a,p))
t=new G.fB(b,c,d,p,P.jj(c.c,null),P.V(),P.V(),t,null,a,!1,!0)
t.dn(a,b,c,d)
return t},
fJ:function(a){return new G.fI(a,null,[],[],[],[],0,P.V())},
md:function(a,b,c){var t=new G.cN(!1,!1,!1,!0,1,9729,9729)
t.b=!0
t=new G.e2(b,J.jO(a.a),34067,a,t)
t.dh(a,b,c)
return t},
f7:function f7(){},
hf:function hf(){},
dR:function dR(){},
dT:function dT(a,b){this.a=a
this.b=b},
ex:function ex(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eG:function eG(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cP:function cP(a,b,c){this.a=a
this.b=b
this.c=c},
cO:function cO(a,b,c){this.a=a
this.b=b
this.c=c},
cq:function cq(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
f4:function f4(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
fr:function fr(){},
fB:function fB(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
fI:function fI(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fL:function fL(){},
cN:function cN(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bC:function bC(){},
eL:function eL(a,b,c,d,e,f){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f},
e2:function e2(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e}},R={
mQ:function(a,b,c){var t,s,r,q
t="stars_"+b
s=b*3
r=new Float32Array(s)
for(q=0;q<s;++q)r[q]=($.$get$kS().eS()-0.5)*c
s=G.ks(t,a.d,0,a.e.x)
s.ar(r)
return s},
kz:function(a,b,c,d,e,f,g,h){var t,s,r,q,p,o
t=B.mc(!0,b,c,d,e,f,g,h)
s=G.ks("cube",a.d,4,a.e.x)
s.ar(G.kj(t.d,null))
r=t.dj()
q=s.d
s.y=J.j2(q.a)
H.b(s.ch!=null)
p=s.ch.length
if(p<768){s.saS(new Uint8Array(H.ip(r)))
s.Q=5121}else if(p<196608){s.saS(new Uint16Array(H.ip(r)))
s.Q=5123}else{s.saS(new Uint32Array(H.ip(r)))
s.Q=5125}J.dH(q.a,s.e)
r=s.y
p=s.cx
o=J.q(p)
H.b(!!o.$iskO||!!o.$iskP||!!o.$iskQ)
J.j0(q.a,34963,r)
J.jN(q.a,34963,p,35048)
G.mY(t,s)
return s},
cA:function cA(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
_.fy=a
_.go=b
_.x=c
_.y=d
_.z=e
_.Q=f
_.ch=g
_.cx=h
_.cy=i
_.db=j
_.d=k
_.a=l
_.b=m
_.c=n},
fQ:function fQ(){},
fR:function fR(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},D={
mz:function(a,b){var t,s,r,q,p,o,n,m,l
t=new Array(6)
t.fixed$length=Array
s=H.B(t,[[P.Q,W.av]])
for(t=[W.f],r=[null],q=[null],p=0;o=$.$get$l0(),p<6;++p){n=new P.F(0,$.w,null,r)
m=document.createElement("img")
l=new W.hC(m,"load",!1,t)
l.gb7(l).aB(new D.eY(new P.hr(n,q),m))
m.src=a+o[p]+b
s[p]=n}return s},
eY:function eY(a,b){this.a=a
this.b=b}},A={
iA:function(a){var t,s
t=C.a_.eE(a,0,new A.iB())
s=536870911&t+(C.b.cP(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
iB:function iB(){}},T={
bD:function(a,b,c){var t=new T.n(new Float32Array(3))
t.u(a,b,c)
return t},
a_:function a_(a){this.a=a},
x:function x(a){this.a=a},
n:function n(a){this.a=a},
am:function am(a){this.a=a}},M={
nx:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
t={}
s=document
r=new R.fR(0,0,null,null,null,null)
r.ds(C.r.cT(s,"stats"),"blue","gray")
q=C.r.eU(s,"#webgl-canvas")
p=new G.dT(null,q)
o=(q&&C.w).bg(q,"webgl2",P.aB(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
p.a=o
if(o==null)H.H(P.cb('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
n="ChronosGL Config: "+H.e(J.lQ(o))
if($.le>0)P.a4("I: "+n)
J.lz(o,0,0,0,1)
J.dI(o,2929)
m=B.mA(15,0,0,q)
o=new T.a_(new Float32Array(16))
o.a7()
n=new T.a_(new Float32Array(16))
n.a7()
l=new R.cA(q,p,m,50,1,0.1,1000,o,n,new T.a_(new Float32Array(16)),P.V(),"perspective",!1,!0)
l.bA()
l.cr(null)
W.a0(window,"resize",l.geY(),!1,W.f)
k=G.ky("solid",p,$.$get$lc(),$.$get$lb())
j=new G.cq(P.V(),"cubemap",!1,!0)
j.H("cDepthTest",!0)
j.H("cDepthWrite",!0)
j.H("cBlendEquation",$.$get$k2())
o=$.$get$kA()
j.H("cStencilFunc",o)
n=new T.a_(new Float32Array(16))
n.a7()
j.H("uModelMatrix",n)
i=R.kz(k,1,0,1,0,2,2,2)
h=R.kz(k,1,0,1,0,512,512,512)
g=G.ky("stars",p,$.$get$ln(),$.$get$lm())
n=$.$get$k1()
f=new G.cq(P.V(),"stars",!1,!0)
f.H("cDepthTest",!0)
f.H("cDepthWrite",!1)
f.H("cBlendEquation",n)
f.H("cStencilFunc",o)
e=s.createElement("canvas")
e.width=64
e.height=64
d=C.w.cS(e,"2d")
c=(d&&C.p).c8(d,32,32,1,32,32,22);(c&&C.m).ay(c,0,"gray")
C.m.ay(c,1,"black")
d.fillStyle=c
C.p.eD(d,0,0,64,64)
c=C.p.c8(d,32,32,1,32,32,6);(c&&C.m).ay(c,0,"white")
C.m.ay(c,1,"gray")
d.globalAlpha=0.9
d.fillStyle=c
d.arc(32,32,4,0,6.283185307179586,!1)
d.fill("nonzero")
s=new G.cN(!1,!1,!1,!0,1,9729,9729)
o=J.jO(p.a)
n=new G.eL(e,"Utils::Particles",o,3553,p,s)
J.aM(p.a,3553,o)
J.jT(p.a,37440,1)
n.dr(e)
s.bz(p,3553)
H.b(J.jR(p.a)===0)
J.aM(p.a,3553,null)
f.H("uTexture",n)
f.H("uPointSize",1000)
s=new T.a_(new Float32Array(16))
s.a7()
f.H("uModelMatrix",s)
b=R.mQ(g,2000,100)
t.a=0
P.mp(D.mz("skybox_",".png"),null,!1).aB(new M.iN(p,j,new M.iM(t,m,k,i,j,l,h,g,b,f,r)))},
iM:function iM(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
_.Q=k},
iN:function iN(a,b,c){this.a=a
this.b=b
this.c=c}}
var v=[C,H,J,P,W,B,G,R,D,A,T,M]
setFunctionNamesIfNecessary(v)
var $={}
H.je.prototype={}
J.a.prototype={
B:function(a,b){return a===b},
gw:function(a){return H.aD(a)},
k:function(a){return"Instance of '"+H.bv(a)+"'"},
gC:function(a){return new H.al(H.iz(a),null)}}
J.eQ.prototype={
k:function(a){return String(a)},
gw:function(a){return a?519018:218159},
gC:function(a){return C.au},
$isag:1}
J.cl.prototype={
B:function(a,b){return null==b},
k:function(a){return"null"},
gw:function(a){return 0},
gC:function(a){return C.ao},
$isJ:1}
J.bo.prototype={
gw:function(a){return 0},
gC:function(a){return C.an},
k:function(a){return String(a)},
$isko:1}
J.fs.prototype={}
J.aH.prototype={}
J.az.prototype={
k:function(a){var t=a[$.$get$ka()]
return t==null?this.d9(a):J.bh(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isjc:1}
J.aw.prototype={
l:function(a,b){if(!!a.fixed$length)H.H(P.u("add"))
a.push(b)},
M:function(a,b){var t,s,r,q,p
t=a.length
if(!!a.fixed$length)H.H(P.u("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.a5)(b),++r,t=p){q=b[r]
p=t+1
H.b(t===a.length||H.H(P.ai(a)))
a.push(q)}},
co:function(a,b){return new H.bp(a,b,[H.ah(a,0),null])},
al:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.e(a[s])
return t.join(b)},
t:function(a,b){return a[b]},
gb7:function(a){if(a.length>0)return a[0]
throw H.c(H.ch())},
gb8:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.c(H.ch())},
bo:function(a,b,c,d,e){var t,s,r
if(!!a.immutable$list)H.H(P.u("setRange"))
P.kx(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.H(P.aE(e,0,null,"skipCount",null))
s=J.P(d)
if(e+t>s.gj(d))throw H.c(H.mx())
if(e<b)for(r=t-1;r>=0;--r)a[b+r]=s.h(d,e+r)
else for(r=0;r<t;++r)a[b+r]=s.h(d,e+r)},
bY:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.c(P.ai(a))}return!1},
d4:function(a,b){if(!!a.immutable$list)H.H(P.u("sort"))
H.mN(a,P.nj())},
aH:function(a){return this.d4(a,null)},
D:function(a,b){var t
for(t=0;t<a.length;++t)if(J.C(a[t],b))return!0
return!1},
k:function(a){return P.eP(a,"[","]")},
gA:function(a){return new J.dO(a,a.length,0,null,[H.ah(a,0)])},
gw:function(a){return H.aD(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.H(P.u("set length"))
if(b<0)throw H.c(P.aE(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.bb(a,b))
if(b>=a.length||b<0)throw H.c(H.bb(a,b))
return a[b]},
i:function(a,b,c){if(!!a.immutable$list)H.H(P.u("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.bb(a,b))
if(b>=a.length||b<0)throw H.c(H.bb(a,b))
a[b]=c},
$isp:1,
$asp:function(){},
$isj:1,
$ish:1}
J.jd.prototype={}
J.dO.prototype={
gq:function(a){return this.d},
p:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.c(H.a5(t))
r=this.c
if(r>=s){this.sbB(null)
return!1}this.sbB(t[r]);++this.c
return!0},
sbB:function(a){this.d=a}}
J.aW.prototype={
S:function(a,b){var t
if(typeof b!=="number")throw H.c(H.O(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaz(b)
if(this.gaz(a)===t)return 0
if(this.gaz(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaz:function(a){return a===0?1/a<0:a<0},
el:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.c(P.u(""+a+".ceil()"))},
a2:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.u(""+a+".round()"))},
em:function(a,b,c){if(this.S(b,c)>0)throw H.c(H.O(b))
if(this.S(a,b)<0)return b
if(this.S(a,c)>0)return c
return a},
f5:function(a,b){var t
if(b>20)throw H.c(P.aE(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gaz(a))return"-"+t
return t},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gw:function(a){return a&0x1FFFFFFF},
a4:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return a+b},
a8:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return a-b},
cQ:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return a/b},
I:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return a*b},
aJ:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bU(a,b)},
K:function(a,b){return(a|0)===a?a/b|0:this.bU(a,b)},
bU:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.c(P.u("Result of truncating division is "+H.e(t)+": "+H.e(a)+" ~/ "+b))},
aX:function(a,b){var t
if(a>0)t=this.e6(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
e6:function(a,b){return b>31?0:a>>>b},
cP:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return(a&b)>>>0},
dc:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return(a^b)>>>0},
aG:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return a<b},
aF:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return a>b},
cR:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return a>=b},
gC:function(a){return C.ax},
$isE:1,
$asE:function(){return[P.a3]},
$isW:1,
$isa3:1}
J.ck.prototype={
gC:function(a){return C.aw},
$isz:1}
J.cj.prototype={
gC:function(a){return C.av}}
J.ay.prototype={
aN:function(a,b){if(b>=a.length)throw H.c(H.bb(a,b))
return a.charCodeAt(b)},
a4:function(a,b){if(typeof b!=="string")throw H.c(P.k0(b,null,null))
return a+b},
d5:function(a,b,c){var t
if(c>a.length)throw H.c(P.aE(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bq:function(a,b){return this.d5(a,b,0)},
bs:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.fx(b,null,null))
if(b>c)throw H.c(P.fx(b,null,null))
if(c>a.length)throw H.c(P.fx(c,null,null))
return a.substring(b,c)},
d6:function(a,b){return this.bs(a,b,null)},
f4:function(a){return a.toLowerCase()},
en:function(a,b,c){if(c>a.length)throw H.c(P.aE(c,0,a.length,null,null))
return H.nF(a,b,c)},
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
gC:function(a){return C.ap},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.c(H.bb(a,b))
return a[b]},
$isp:1,
$asp:function(){},
$isE:1,
$asE:function(){return[P.o]},
$iso:1}
H.j.prototype={}
H.aX.prototype={
gA:function(a){return new H.cn(this,this.gj(this),0,null,[H.T(this,"aX",0)])},
aD:function(a,b){return this.d8(0,b)},
f3:function(a,b){var t,s
t=H.B([],[H.T(this,"aX",0)])
C.a.sj(t,this.gj(this))
for(s=0;s<this.gj(this);++s)t[s]=this.t(0,s)
return t},
f2:function(a){return this.f3(a,!0)}}
H.cn.prototype={
gq:function(a){return this.d},
p:function(){var t,s,r,q
t=this.a
s=J.P(t)
r=s.gj(t)
if(this.b!==r)throw H.c(P.ai(t))
q=this.c
if(q>=r){this.sac(null)
return!1}this.sac(s.t(t,q));++this.c
return!0},
sac:function(a){this.d=a}}
H.cp.prototype={
gA:function(a){return new H.f1(null,J.aN(this.a),this.b,this.$ti)},
gj:function(a){return J.bg(this.a)},
$asR:function(a,b){return[b]}}
H.ec.prototype={$isj:1,
$asj:function(a,b){return[b]}}
H.f1.prototype={
p:function(){var t=this.b
if(t.p()){this.sac(this.c.$1(t.gq(t)))
return!0}this.sac(null)
return!1},
gq:function(a){return this.a},
sac:function(a){this.a=a},
$asci:function(a,b){return[b]}}
H.bp.prototype={
gj:function(a){return J.bg(this.a)},
t:function(a,b){return this.b.$1(J.lI(this.a,b))},
$asj:function(a,b){return[b]},
$asaX:function(a,b){return[b]},
$asR:function(a,b){return[b]}}
H.cS.prototype={
gA:function(a){return new H.ho(J.aN(this.a),this.b,this.$ti)}}
H.ho.prototype={
p:function(){var t,s
for(t=this.a,s=this.b;t.p();)if(s.$1(t.gq(t)))return!0
return!1},
gq:function(a){var t=this.a
return t.gq(t)}}
H.aT.prototype={}
H.iW.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.iX.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.i4.prototype={
seN:function(a){this.z=a},
seP:function(a){this.ch=a}}
H.b4.prototype={
dD:function(){var t,s
t=this.e
s=t.a
this.c.l(0,s)
this.dI(s,t)},
bX:function(a,b){if(!this.f.B(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.b3()},
eX:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.am(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.bO();++r.d}this.y=!1}this.b3()},
eb:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.q(a),s=0;r=this.ch,s<r.length;s+=2)if(t.B(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
eW:function(a){var t,s,r
if(this.ch==null)return
for(t=J.q(a),s=0;r=this.ch,s<r.length;s+=2)if(t.B(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.H(P.u("removeRange"))
P.kx(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
d1:function(a,b){if(!this.r.B(0,a))return
this.db=b},
eH:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.J(0,c)
return}H.b(b===1)
t=this.cx
if(t==null){t=P.jk(null,null)
this.cx=t}t.T(0,new H.hY(a,c))},
eG:function(a,b){var t
if(!this.r.B(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.aA()
return}H.b(b===1)
t=this.cx
if(t==null){t=P.jk(null,null)
this.cx=t}t.T(0,this.geO())},
eI:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.a4(a)
if(b!=null)P.a4(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.bh(a)
s[1]=b==null?null:b.k(0)
for(r=new P.bH(t,t.r,null,null,[null]),r.c=t.e;r.p();)r.d.J(0,s)},
ag:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.I(o)
p=H.a2(o)
this.eI(q,p)
if(this.db){this.aA()
if(this===u.globalState.e)throw o}}finally{this.cy=H.nf(r)
u.globalState.d=H.jF(t,"$isb4")
if(t!=null)$=t.geM()
if(this.cx!=null)for(;n=this.cx,!n.gak(n);)this.cx.cq().$0()}return s},
cn:function(a){return this.b.h(0,a)},
dI:function(a,b){var t=this.b
if(t.G(0,a))throw H.c(P.cb("Registry: ports must be registered only once."))
t.i(0,a,b)},
b3:function(){var t=this.b
if(t.gj(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.aA()},
aA:function(){var t,s,r
t=this.cx
if(t!=null)t.V(0)
for(t=this.b,s=t.gcL(t),s=s.gA(s);s.p();)s.gq(s).dL()
t.V(0)
this.c.V(0)
u.globalState.z.am(0,this.a)
this.dx.V(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].J(0,t[r+1])
this.ch=null}},
geM:function(){return this.d},
geo:function(){return this.e}}
H.hY.prototype={
$0:function(){this.a.J(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.hD.prototype={
ev:function(){var t=this.a
if(t.b===t.c)return
return t.cq()},
ct:function(){var t,s,r
t=this.ev()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.G(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gak(s)}else s=!1
else s=!1
else s=!1
if(s)H.H(P.cb("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gak(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aB(["command","close"])
r=new H.a1(!0,P.b5(null,P.z)).L(r)
s.toString
self.postMessage(r)}return!1}t.eT()
return!0},
bS:function(){if(self.window!=null)new H.hE(this).$0()
else for(;this.ct(););},
an:function(){var t,s,r,q,p
if(!u.globalState.x)this.bS()
else try{this.bS()}catch(r){t=H.I(r)
s=H.a2(r)
q=u.globalState.Q
p=P.aB(["command","error","msg",H.e(t)+"\n"+H.e(s)])
p=new H.a1(!0,P.b5(null,P.z)).L(p)
q.toString
self.postMessage(p)}}}
H.hE.prototype={
$0:function(){if(!this.a.ct())return
P.mP(C.y,this)},
$S:function(){return{func:1,v:true}}}
H.aK.prototype={
eT:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.ag(this.b)}}
H.i3.prototype={}
H.eN.prototype={
$0:function(){H.mt(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.eO.prototype={
$0:function(){var t,s
t=this.a
t.x=!0
if(!this.b)this.c.$1(this.d)
else{s=this.c
if(H.bc(s,{func:1,args:[P.J,P.J]}))s.$2(this.e,this.d)
else if(H.bc(s,{func:1,args:[P.J]}))s.$1(this.e)
else s.$0()}t.b3()},
$S:function(){return{func:1,v:true}}}
H.hx.prototype={}
H.b6.prototype={
J:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.n2(b)
if(t.geo()===s){s=J.P(r)
switch(s.h(r,0)){case"pause":t.bX(s.h(r,1),s.h(r,2))
break
case"resume":t.eX(s.h(r,1))
break
case"add-ondone":t.eb(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.eW(s.h(r,1))
break
case"set-errors-fatal":t.d1(s.h(r,1),s.h(r,2))
break
case"ping":t.eH(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.eG(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.am(0,s)
break}return}u.globalState.f.a.T(0,new H.aK(t,new H.i5(this,r),"receive"))},
B:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.b6){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gw:function(a){return this.b.a}}
H.i5.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dG(0,this.b)},
$S:function(){return{func:1}}}
H.bS.prototype={
J:function(a,b){var t,s,r
t=P.aB(["command","message","port",this,"msg",b])
s=new H.a1(!0,P.b5(null,P.z)).L(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
B:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bS){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gw:function(a){return C.b.dc((this.b<<16^this.a<<8)>>>0,this.c)}}
H.cD.prototype={
dL:function(){this.c=!0
this.b=null},
dG:function(a,b){if(this.c)return
this.b.$1(b)},
$ismI:1}
H.h6.prototype={
dt:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.T(0,new H.aK(s,new H.h7(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){H.iw()
this.c=self.setTimeout(H.ba(new H.h8(this,b),0),a)}else{H.b(a>0)
throw H.c(P.u("Timer greater than 0."))}}}
H.h7.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.h8.prototype={
$0:function(){var t=this.a
t.c=null
H.iL()
t.d=1
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.ar.prototype={
gw:function(a){var t=this.a
t=C.b.aX(t,0)^C.b.K(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
B:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.ar){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.a1.prototype={
L:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gj(t))
t=J.q(a)
if(!!t.$isbs)return["buffer",a]
if(!!t.$isb_)return["typed",a]
if(!!t.$isp)return this.cY(a)
if(!!t.$ismq){r=this.gcV()
q=t.gE(a)
q=H.jl(q,r,H.T(q,"R",0),null)
q=P.kq(q,!0,H.T(q,"R",0))
t=t.gcL(a)
t=H.jl(t,r,H.T(t,"R",0),null)
return["map",q,P.kq(t,!0,H.T(t,"R",0))]}if(!!t.$isko)return this.cZ(a)
if(!!t.$isa)this.cJ(a)
if(!!t.$ismI)this.ao(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isb6)return this.d_(a)
if(!!t.$isbS)return this.d0(a)
if(!!t.$isat){p=a.$static_name
if(p==null)this.ao(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isar)return["capability",a.a]
if(!(a instanceof P.D))this.cJ(a)
return["dart",u.classIdExtractor(a),this.cX(u.classFieldsExtractor(a))]},
ao:function(a,b){throw H.c(P.u((b==null?"Can't transmit:":b)+" "+H.e(a)))},
cJ:function(a){return this.ao(a,null)},
cY:function(a){var t
H.b(typeof a!=="string")
t=this.cW(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.ao(a,"Can't serialize indexable: ")},
cW:function(a){var t,s
t=[]
C.a.sj(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.L(a[s])
return t},
cX:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.L(a[t]))
return a},
cZ:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.ao(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sj(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.L(a[t[r]])
return["js-object",t,s]},
d0:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
d_:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.aJ.prototype={
W:function(a){var t,s,r,q
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.c(P.dN("Bad serialized message: "+H.e(a)))
switch(C.a.gb7(a)){case"ref":H.b(J.C(a[0],"ref"))
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
return J.ax(H.B(this.af(t),[null]))
case"extendable":H.b(J.C(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.B(this.af(t),[null])
case"mutable":H.b(J.C(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.af(t)
case"const":H.b(J.C(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
return J.ax(H.B(this.af(t),[null]))
case"map":return this.ey(a)
case"sendport":return this.ez(a)
case"raw sendport":H.b(J.C(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.ex(a)
case"function":H.b(J.C(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.b(J.C(a[0],"capability"))
return new H.ar(a[1])
case"dart":H.b(J.C(a[0],"dart"))
s=a[1]
r=a[2]
q=u.instanceFromClassId(s)
C.a.l(this.b,q)
this.af(r)
return u.initializeEmptyInstance(s,q,r)
default:throw H.c("couldn't deserialize: "+H.e(a))}},
af:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.W(a[t]))
return a},
ey:function(a){var t,s,r,q,p
H.b(J.C(a[0],"map"))
t=a[1]
s=a[2]
r=P.V()
C.a.l(this.b,r)
t=J.lU(t,this.gew()).f2(0)
for(q=J.P(s),p=0;p<t.length;++p)r.i(0,t[p],this.W(q.h(s,p)))
return r},
ez:function(a){var t,s,r,q,p,o,n
H.b(J.C(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.cn(r)
if(o==null)return
n=new H.b6(o,s)}else n=new H.bS(t,r,s)
C.a.l(this.b,n)
return n},
ex:function(a){var t,s,r,q,p,o
H.b(J.C(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.P(t),p=J.P(s),o=0;o<q.gj(t);++o)r[q.h(t,o)]=this.W(p.h(s,o))
return r}}
H.fA.prototype={}
H.hc.prototype={
O:function(a){var t,s,r
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
H.fi.prototype={
k:function(a){var t=this.b
if(t==null)return"NullError: "+H.e(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.eS.prototype={
k:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.e(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.e(this.a)+")"}}
H.hh.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.iY.prototype={
$1:function(a){if(!!J.q(a).$isaS)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(a){return{func:1,args:[,]}}}
H.dh.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t},
$isb0:1}
H.iG.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.iH.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.iI.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.iJ.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.iK.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.at.prototype={
k:function(a){return"Closure '"+H.bv(this).trim()+"'"},
$isjc:1,
gf9:function(){return this},
$D:null}
H.h2.prototype={}
H.fP.prototype={
k:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bi.prototype={
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bi))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gw:function(a){var t,s
t=this.c
if(t==null)s=H.aD(this.a)
else s=typeof t!=="object"?J.bf(t):H.aD(t)
return(s^H.aD(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.bv(t)+"'")}}
H.he.prototype={
k:function(a){return this.a}}
H.dS.prototype={
k:function(a){return this.a}}
H.fE.prototype={
k:function(a){return"RuntimeError: "+H.e(this.a)}}
H.hq.prototype={
k:function(a){return C.i.a4("Assertion failed: ",P.ca(this.a))}}
H.al.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gw:function(a){return J.bf(this.a)},
B:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.al){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.a9.prototype={
gj:function(a){return this.a},
gak:function(a){return this.a===0},
gE:function(a){return new H.eV(this,[H.ah(this,0)])},
gcL:function(a){return H.jl(this.gE(this),new H.eR(this),H.ah(this,0),H.ah(this,1))},
G:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bL(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bL(s,b)}else return this.eJ(b)},
eJ:function(a){var t=this.d
if(t==null)return!1
return this.aj(this.av(t,this.ai(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.ad(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.ad(r,b)
return s==null?null:s.b}else return this.eK(b)},
eK:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.av(t,this.ai(a))
r=this.aj(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aU()
this.b=t}this.bD(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aU()
this.c=s}this.bD(s,b,c)}else{r=this.d
if(r==null){r=this.aU()
this.d=r}q=this.ai(b)
p=this.av(r,q)
if(p==null)this.aW(r,q,[this.aV(b,c)])
else{o=this.aj(p,b)
if(o>=0)p[o].b=c
else p.push(this.aV(b,c))}}},
am:function(a,b){if(typeof b==="string")return this.bR(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bR(this.c,b)
else return this.eL(b)},
eL:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.av(t,this.ai(a))
r=this.aj(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bV(q)
return q.b},
V:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aT()}},
ah:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.c(P.ai(this))
t=t.c}},
bD:function(a,b,c){var t=this.ad(a,b)
if(t==null)this.aW(a,b,this.aV(b,c))
else t.b=c},
bR:function(a,b){var t
if(a==null)return
t=this.ad(a,b)
if(t==null)return
this.bV(t)
this.bM(a,b)
return t.b},
aT:function(){this.r=this.r+1&67108863},
aV:function(a,b){var t,s
t=new H.eU(a,b,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.aT()
return t},
bV:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.aT()},
ai:function(a){return J.bf(a)&0x3ffffff},
aj:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.C(a[s].a,b))return s
return-1},
k:function(a){return P.kr(this)},
ad:function(a,b){return a[b]},
av:function(a,b){return a[b]},
aW:function(a,b,c){H.b(c!=null)
a[b]=c},
bM:function(a,b){delete a[b]},
bL:function(a,b){return this.ad(a,b)!=null},
aU:function(){var t=Object.create(null)
this.aW(t,"<non-identifier-key>",t)
this.bM(t,"<non-identifier-key>")
return t},
$ismq:1}
H.eR.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(a){return{func:1,args:[,]}}}
H.eU.prototype={}
H.eV.prototype={
gj:function(a){return this.a.a},
gA:function(a){var t,s
t=this.a
s=new H.eW(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.eW.prototype={
gq:function(a){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.ai(t))
else{t=this.c
if(t==null){this.sbC(null)
return!1}else{this.sbC(t.a)
this.c=this.c.c
return!0}}},
sbC:function(a){this.d=a}}
H.iC.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[,]}}}
H.iD.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(a,b){return{func:1,args:[,P.o]}}}
H.iE.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[P.o]}}}
H.bs.prototype={
gC:function(a){return C.ag},
$isbs:1}
H.b_.prototype={$isb_:1}
H.f8.prototype={
gC:function(a){return C.ah}}
H.ct.prototype={
gj:function(a){return a.length},
$isp:1,
$asp:function(){},
$ist:1,
$ast:function(){}}
H.cu.prototype={
h:function(a,b){H.ae(b,a,a.length)
return a[b]},
i:function(a,b,c){H.ae(b,a,a.length)
a[b]=c},
$isj:1,
$asj:function(){return[P.W]},
$asaT:function(){return[P.W]},
$asl:function(){return[P.W]},
$ish:1,
$ash:function(){return[P.W]}}
H.cv.prototype={
i:function(a,b,c){H.ae(b,a,a.length)
a[b]=c},
$isj:1,
$asj:function(){return[P.z]},
$asaT:function(){return[P.z]},
$asl:function(){return[P.z]},
$ish:1,
$ash:function(){return[P.z]}}
H.cs.prototype={
gC:function(a){return C.ai},
$iseB:1}
H.f9.prototype={
gC:function(a){return C.aj}}
H.fa.prototype={
gC:function(a){return C.ak},
h:function(a,b){H.ae(b,a,a.length)
return a[b]}}
H.fb.prototype={
gC:function(a){return C.al},
h:function(a,b){H.ae(b,a,a.length)
return a[b]},
$iskl:1}
H.fc.prototype={
gC:function(a){return C.am},
h:function(a,b){H.ae(b,a,a.length)
return a[b]}}
H.fd.prototype={
gC:function(a){return C.aq},
h:function(a,b){H.ae(b,a,a.length)
return a[b]},
$iskO:1}
H.fe.prototype={
gC:function(a){return C.ar},
h:function(a,b){H.ae(b,a,a.length)
return a[b]},
$iskP:1}
H.cw.prototype={
gC:function(a){return C.as},
gj:function(a){return a.length},
h:function(a,b){H.ae(b,a,a.length)
return a[b]}}
H.ff.prototype={
gC:function(a){return C.at},
gj:function(a){return a.length},
h:function(a,b){H.ae(b,a,a.length)
return a[b]},
$iskQ:1}
H.bJ.prototype={}
H.bK.prototype={}
H.bL.prototype={}
H.bM.prototype={}
P.ht.prototype={
$1:function(a){var t,s
H.iL()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(a){return{func:1,args:[,]}}}
P.hs.prototype={
$1:function(a){var t,s
t=this.a
H.b(t.a==null)
H.iw()
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(a){return{func:1,args:[{func:1,v:true}]}}}
P.hu.prototype={
$0:function(){H.iL()
this.a.$0()},
$S:function(){return{func:1}}}
P.hv.prototype={
$0:function(){H.iL()
this.a.$0()},
$S:function(){return{func:1}}}
P.Q.prototype={}
P.eF.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.c)this.d.P(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.c)this.d.P(t.c,t.d)},
$S:function(a,b){return{func:1,args:[,,]}}}
P.eE.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){r[this.b]=a
if(s===0)this.c.bK(r)}else if(t.b===0&&!this.e)this.c.P(t.c,t.d)},
$S:function(a){return{func:1,args:[,]}}}
P.j9.prototype={}
P.hy.prototype={}
P.hr.prototype={
b5:function(a,b){var t=this.a
if(t.a!==0)throw H.c(P.fO("Future already completed"))
t.bE(b)}}
P.ii.prototype={
b5:function(a,b){var t=this.a
if(t.a!==0)throw H.c(P.fO("Future already completed"))
t.ab(b)}}
P.bF.prototype={
eQ:function(a){if(this.c!==6)return!0
H.b(!0)
return this.b.b.bd(this.d,a.a)},
eF:function(a){var t,s
t=(this.c&2)!==0
if(t){H.b(t)
t=this.e!=null}else t=!1
H.b(t)
s=this.e
t=this.b.b
if(H.bc(s,{func:1,args:[P.D,P.b0]}))return t.eZ(s,a.a,a.b)
else return t.bd(s,a.a)}}
P.F.prototype={
bf:function(a,b){var t,s,r
t=$.w
if(t!==C.d){t.toString
if(b!=null)b=P.n7(b,t)}s=new P.F(0,t,null,[null])
r=b==null?1:3
this.aL(new P.bF(null,s,r,a,b,[H.ah(this,0),null]))
return s},
aB:function(a){return this.bf(a,null)},
f8:function(a){var t,s
t=$.w
s=new P.F(0,t,null,this.$ti)
if(t!==C.d)t.toString
t=H.ah(this,0)
this.aL(new P.bF(null,s,8,a,null,[t,t]))
return s},
aM:function(a){H.b(this.a<4)
H.b(a.a>=4)
this.a=a.a
this.c=a.c},
aL:function(a){var t
H.b(a.a==null)
t=this.a
if(t<=1){a.a=H.jF(this.c,"$isbF")
this.c=a}else{if(t===2){H.b(!0)
t=this.c
if(t.a<4){t.aL(a)
return}this.aM(t)}H.b(this.a>=4)
t=this.b
t.toString
P.b8(null,null,t,new P.hJ(this,a))}},
bQ:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.b(!0)
s=this.c
if(s.a<4){s.bQ(a)
return}this.aM(s)}H.b(this.a>=4)
t.a=this.ax(a)
s=this.b
s.toString
P.b8(null,null,s,new P.hR(t,this))}},
aw:function(){H.b(this.a<4)
var t=this.c
this.c=null
return this.ax(t)},
ax:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
ab:function(a){var t,s,r
H.b(this.a<4)
t=this.$ti
s=H.bW(a,"$isQ",t,"$asQ")
if(s){t=H.bW(a,"$isF",t,null)
if(t)P.hM(a,this)
else P.kV(a,this)}else{r=this.aw()
H.b(this.a<4)
this.a=4
this.c=a
P.b3(this,r)}},
bK:function(a){var t
H.b(this.a<4)
H.b(!J.q(a).$isQ)
t=this.aw()
H.b(this.a<4)
this.a=4
this.c=a
P.b3(this,t)},
P:function(a,b){var t
H.b(this.a<4)
t=this.aw()
H.b(this.a<4)
this.a=8
this.c=new P.aO(a,b)
P.b3(this,t)},
dM:function(a){return this.P(a,null)},
bE:function(a){var t
H.b(this.a<4)
t=H.bW(a,"$isQ",this.$ti,"$asQ")
if(t){this.dK(a)
return}H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.b8(null,null,t,new P.hL(this,a))},
dK:function(a){var t=H.bW(a,"$isF",this.$ti,null)
if(t){if(a.a===8){H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.b8(null,null,t,new P.hQ(this,a))}else P.hM(a,this)
return}P.kV(a,this)},
dJ:function(a,b){var t
H.b(this.a<4)
H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.b8(null,null,t,new P.hK(this,a,b))},
$isQ:1,
gaY:function(){return this.a},
ge3:function(){return this.c}}
P.hJ.prototype={
$0:function(){P.b3(this.a,this.b)},
$S:function(){return{func:1}}}
P.hR.prototype={
$0:function(){P.b3(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.hN.prototype={
$1:function(a){var t=this.a
H.b(t.a===1)
H.b(t.a===1)
t.a=0
t.ab(a)},
$S:function(a){return{func:1,args:[,]}}}
P.hO.prototype={
$2:function(a,b){var t=this.a
H.b(t.a===1)
t.P(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(a,b){return{func:1,args:[,],opt:[,]}}}
P.hP.prototype={
$0:function(){this.a.P(this.b,this.c)},
$S:function(){return{func:1}}}
P.hL.prototype={
$0:function(){this.a.bK(this.b)},
$S:function(){return{func:1}}}
P.hQ.prototype={
$0:function(){P.hM(this.b,this.a)},
$S:function(){return{func:1}}}
P.hK.prototype={
$0:function(){this.a.P(this.b,this.c)},
$S:function(){return{func:1}}}
P.hU.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.c
p=q.c
H.b((p&1)===0)
o=(p&2)===0
H.b(o)
t=null
try{H.b(o)
H.b(p===8)
t=q.b.b.cs(q.d)}catch(n){s=H.I(n)
r=H.a2(n)
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
return}if(!!J.q(t).$isQ){if(t instanceof P.F&&t.gaY()>=4){if(t.gaY()===8){q=t
H.b(q.gaY()===8)
p=this.b
p.b=q.ge3()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.aB(new P.hV(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.hV.prototype={
$1:function(a){return this.a},
$S:function(a){return{func:1,args:[,]}}}
P.hT.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.b((r.c&1)!==0)
this.a.b=r.b.b.bd(r.d,this.c)}catch(q){t=H.I(q)
s=H.a2(q)
r=this.a
r.b=new P.aO(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.hS.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.b(q.a===8)
t=q.c
q=this.c
if(q.eQ(t)){H.b((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.eF(t)
p.a=!1}}catch(o){s=H.I(o)
r=H.a2(o)
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
P.cT.prototype={}
P.bx.prototype={
gj:function(a){var t,s
t={}
s=new P.F(0,$.w,null,[P.z])
t.a=0
this.cm(new P.fX(t),!0,new P.fY(t,s),s.gbJ())
return s},
gb7:function(a){var t,s
t={}
s=new P.F(0,$.w,null,[H.T(this,"bx",0)])
t.a=null
t.a=this.cm(new P.fV(t,this,s),!0,new P.fW(s),s.gbJ())
return s}}
P.fX.prototype={
$1:function(a){++this.a.a},
$S:function(a){return{func:1,args:[,]}}}
P.fY.prototype={
$0:function(){this.b.ab(this.a.a)},
$S:function(){return{func:1}}}
P.fV.prototype={
$1:function(a){P.n1(this.a.a,this.c,a)},
$S:function(a){return{func:1,args:[H.T(this.b,"bx",0)]}}}
P.fW.prototype={
$0:function(){var t,s,r,q
try{r=H.ch()
throw H.c(r)}catch(q){t=H.I(q)
s=H.a2(q)
P.n3(this.a,t,s)}},
$S:function(){return{func:1}}}
P.fU.prototype={}
P.io.prototype={
$0:function(){return this.a.ab(this.b)},
$S:function(){return{func:1}}}
P.jo.prototype={}
P.aO.prototype={
k:function(a){return H.e(this.a)},
$isaS:1}
P.im.prototype={}
P.ir.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.bu()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.c(t)
r=H.c(t)
r.stack=s.k(0)
throw r},
$S:function(){return{func:1}}}
P.i7.prototype={
f_:function(a){var t,s,r
try{if(C.d===$.w){a.$0()
return}P.l1(null,null,this,a)}catch(r){t=H.I(r)
s=H.a2(r)
P.iq(null,null,this,t,s)}},
f0:function(a,b){var t,s,r
try{if(C.d===$.w){a.$1(b)
return}P.l2(null,null,this,a,b)}catch(r){t=H.I(r)
s=H.a2(r)
P.iq(null,null,this,t,s)}},
eh:function(a){return new P.i9(this,a)},
b4:function(a){return new P.i8(this,a)},
ei:function(a){return new P.ia(this,a)},
h:function(a,b){return},
cs:function(a){if($.w===C.d)return a.$0()
return P.l1(null,null,this,a)},
bd:function(a,b){if($.w===C.d)return a.$1(b)
return P.l2(null,null,this,a,b)},
eZ:function(a,b,c){if($.w===C.d)return a.$2(b,c)
return P.n8(null,null,this,a,b,c)}}
P.i9.prototype={
$0:function(){return this.a.cs(this.b)},
$S:function(){return{func:1}}}
P.i8.prototype={
$0:function(){return this.a.f_(this.b)},
$S:function(){return{func:1}}}
P.ia.prototype={
$1:function(a){return this.a.f0(this.b,a)},
$S:function(a){return{func:1,args:[,]}}}
P.i1.prototype={
ai:function(a){return H.nz(a)&0x3ffffff},
aj:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.i_.prototype={
gA:function(a){var t=new P.bH(this,this.r,null,null,[null])
t.c=this.e
return t},
gj:function(a){return this.a},
D:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dN(b)},
dN:function(a){var t=this.d
if(t==null)return!1
return this.au(t[this.at(a)],a)>=0},
cn:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.D(0,a)?a:null
else return this.dW(a)},
dW:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.at(a)]
r=this.au(s,a)
if(r<0)return
return J.be(s,r).gdP()},
l:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.jx()
this.b=t}return this.bG(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.jx()
this.c=s}return this.bG(s,b)}else return this.T(0,b)},
T:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.jx()
this.d=t}s=this.at(b)
r=t[s]
if(r==null){q=[this.aP(b)]
H.b(q!=null)
t[s]=q}else{if(this.au(r,b)>=0)return!1
r.push(this.aP(b))}return!0},
am:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bH(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bH(this.c,b)
else return this.dY(0,b)},
dY:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.at(b)]
r=this.au(s,b)
if(r<0)return!1
this.bI(s.splice(r,1)[0])
return!0},
V:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aO()}},
bG:function(a,b){var t
if(a[b]!=null)return!1
t=this.aP(b)
H.b(!0)
a[b]=t
return!0},
bH:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bI(t)
delete a[b]
return!0},
aO:function(){this.r=this.r+1&67108863},
aP:function(a){var t,s
t=new P.i0(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.aO()
return t},
bI:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.aO()},
at:function(a){return J.bf(a)&0x3ffffff},
au:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.C(a[s].a,b))return s
return-1}}
P.i0.prototype={
gdP:function(){return this.a}}
P.bH.prototype={
gq:function(a){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.ai(t))
else{t=this.c
if(t==null){this.saa(null)
return!1}else{this.saa(t.a)
this.c=this.c.b
return!0}}},
saa:function(a){this.d=a}}
P.hX.prototype={}
P.ji.prototype={$isj:1}
P.cm.prototype={$isj:1,$ish:1}
P.l.prototype={
gA:function(a){return new H.cn(a,this.gj(a),0,null,[H.T(a,"l",0)])},
t:function(a,b){return this.h(a,b)},
co:function(a,b){return new H.bp(a,b,[H.T(a,"l",0),null])},
eE:function(a,b,c){var t,s,r
t=this.gj(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gj(a))throw H.c(P.ai(a))}return s},
k:function(a){return P.eP(a,"[","]")}}
P.co.prototype={}
P.f0.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.e(a)
t.a=s+": "
t.a+=H.e(b)},
$S:function(a,b){return{func:1,args:[,,]}}}
P.aZ.prototype={
ah:function(a,b){var t,s
for(t=J.aN(this.gE(a));t.p();){s=t.gq(t)
b.$2(s,this.h(a,s))}},
gj:function(a){return J.bg(this.gE(a))},
k:function(a){return P.kr(a)}}
P.eX.prototype={
dl:function(a,b){var t
H.b(!0)
t=new Array(8)
t.fixed$length=Array
this.sbT(H.B(t,[b]))},
gA:function(a){return new P.i2(this,this.c,this.d,this.b,null,this.$ti)},
gak:function(a){return this.b===this.c},
gj:function(a){return(this.c-this.b&this.a.length-1)>>>0},
t:function(a,b){var t,s
t=this.gj(this)
if(0>b||b>=t)H.H(P.A(b,this,"index",null,t))
s=this.a
return s[(this.b+b&s.length-1)>>>0]},
V:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
k:function(a){return P.eP(this,"{","}")},
cq:function(){var t,s,r
t=this.b
if(t===this.c)throw H.c(H.ch());++this.d
s=this.a
r=s[t]
s[t]=null
this.b=(t+1&s.length-1)>>>0
return r},
T:function(a,b){var t,s
t=this.a
s=this.c
t[s]=b
t=(s+1&t.length-1)>>>0
this.c=t
if(this.b===t)this.bO();++this.d},
bO:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.B(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.bo(s,0,q,t,r)
C.a.bo(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbT(s)},
sbT:function(a){this.a=a}}
P.i2.prototype={
gq:function(a){return this.e},
p:function(){var t,s
t=this.a
if(this.c!==t.d)H.H(P.ai(t))
s=this.d
if(s===this.b){this.saa(null)
return!1}this.saa(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
saa:function(a){this.e=a}}
P.fH.prototype={
M:function(a,b){var t
for(t=J.aN(b);t.p();)this.l(0,t.gq(t))},
k:function(a){return P.eP(this,"{","}")},
$isj:1}
P.fG.prototype={}
P.bI.prototype={}
P.ag.prototype={}
P.E.prototype={}
P.bj.prototype={
B:function(a,b){if(b==null)return!1
if(!(b instanceof P.bj))return!1
return this.a===b.a&&this.b===b.b},
S:function(a,b){return C.b.S(this.a,b.a)},
gw:function(a){var t=this.a
return(t^C.b.aX(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.me(H.mH(this))
s=P.c4(H.mF(this))
r=P.c4(H.mB(this))
q=P.c4(H.mC(this))
p=P.c4(H.mE(this))
o=P.c4(H.mG(this))
n=P.mf(H.mD(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isE:1,
$asE:function(){return[P.bj]}}
P.W.prototype={}
P.au.prototype={
aG:function(a,b){return C.b.aG(this.a,b.gdO())},
aF:function(a,b){return C.b.aF(this.a,b.gdO())},
B:function(a,b){if(b==null)return!1
if(!(b instanceof P.au))return!1
return this.a===b.a},
gw:function(a){return this.a&0x1FFFFFFF},
S:function(a,b){return C.b.S(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.eb()
s=this.a
if(s<0)return"-"+new P.au(0-s).k(0)
r=t.$1(C.b.K(s,6e7)%60)
q=t.$1(C.b.K(s,1e6)%60)
p=new P.ea().$1(s%1e6)
return""+C.b.K(s,36e8)+":"+H.e(r)+":"+H.e(q)+"."+H.e(p)},
$isE:1,
$asE:function(){return[P.au]}}
P.ea.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(a){return{func:1,ret:P.o,args:[P.z]}}}
P.eb.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(a){return{func:1,ret:P.o,args:[P.z]}}}
P.aS.prototype={}
P.c0.prototype={
k:function(a){return"Assertion failed"}}
P.bu.prototype={
k:function(a){return"Throw of null."}}
P.a7.prototype={
gaR:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaQ:function(){return""},
k:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+t
q=this.gaR()+s+r
if(!this.a)return q
p=this.gaQ()
o=P.ca(this.b)
return q+p+": "+H.e(o)}}
P.cC.prototype={
gaR:function(){return"RangeError"},
gaQ:function(){var t,s,r
H.b(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.e(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.e(t)
else if(r>t)s=": Not in range "+H.e(t)+".."+H.e(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.e(t)}return s}}
P.eM.prototype={
gaR:function(){return"RangeError"},
gaQ:function(){H.b(this.a)
if(J.ls(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.e(t)},
gj:function(a){return this.f}}
P.hi.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.hg.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.b1.prototype={
k:function(a){return"Bad state: "+this.a}}
P.dU.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.e(P.ca(t))+"."}}
P.cI.prototype={
k:function(a){return"Stack Overflow"},
$isaS:1}
P.e3.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.jb.prototype={}
P.hI.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.e(t)}}
P.ee.prototype={
h:function(a,b){var t,s
t=this.a
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.H(P.k0(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.ku(b,"expando$values")
return s==null?null:H.ku(s,t)},
k:function(a){return"Expando:"+H.e(this.b)}}
P.z.prototype={}
P.R.prototype={
aD:function(a,b){return new H.cS(this,b,[H.T(this,"R",0)])},
gj:function(a){var t,s
H.b(!this.$isj)
t=this.gA(this)
for(s=0;t.p();)++s
return s},
gZ:function(a){var t,s
t=this.gA(this)
if(!t.p())throw H.c(H.ch())
s=t.gq(t)
if(t.p())throw H.c(H.my())
return s},
t:function(a,b){var t,s,r
if(b<0)H.H(P.aE(b,0,null,"index",null))
for(t=this.gA(this),s=0;t.p();){r=t.gq(t)
if(b===s)return r;++s}throw H.c(P.A(b,this,"index",null,s))},
k:function(a){return P.mw(this,"(",")")}}
P.ci.prototype={}
P.h.prototype={$isj:1}
P.aY.prototype={}
P.J.prototype={
gw:function(a){return P.D.prototype.gw.call(this,this)},
k:function(a){return"null"}}
P.a3.prototype={$isE:1,
$asE:function(){return[P.a3]}}
P.D.prototype={constructor:P.D,$isD:1,
B:function(a,b){return this===b},
gw:function(a){return H.aD(this)},
k:function(a){return"Instance of '"+H.bv(this)+"'"},
gC:function(a){return new H.al(H.iz(this),null)},
toString:function(){return this.k(this)}}
P.b0.prototype={}
P.o.prototype={$isE:1,
$asE:function(){return[P.o]}}
P.by.prototype={
gj:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga_:function(){return this.a}}
P.jr.prototype={}
W.k.prototype={}
W.c_.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
W.dK.prototype={
gj:function(a){return a.length}}
W.dL.prototype={
k:function(a){return String(a)}}
W.dM.prototype={
k:function(a){return String(a)}}
W.ap.prototype={$isap:1}
W.aq.prototype={
bg:function(a,b,c){if(c!=null)return this.dR(a,b,P.ni(c,null))
return this.dS(a,b)},
cS:function(a,b){return this.bg(a,b,null)},
dR:function(a,b,c){return a.getContext(b,c)},
dS:function(a,b){return a.getContext(b)},
$isaq:1}
W.c1.prototype={
ay:function(a,b,c){return a.addColorStop(b,c)}}
W.c2.prototype={
c8:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
eD:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
aE:function(a){return P.it(a.getContextAttributes())}}
W.as.prototype={
gj:function(a){return a.length}}
W.dV.prototype={
gj:function(a){return a.length}}
W.dW.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.dX.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
W.dY.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
W.aQ.prototype={
bF:function(a,b){var t,s
t=$.$get$k9()
s=t[b]
if(typeof s==="string")return s
s=this.e7(a,b)
t[b]=s
return s},
e7:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.mg()+b
if(t in a)return t
return b},
gj:function(a){return a.length}}
W.dZ.prototype={}
W.X.prototype={}
W.aR.prototype={}
W.e_.prototype={
gj:function(a){return a.length}}
W.e0.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
W.e1.prototype={
gj:function(a){return a.length}}
W.e4.prototype={
h:function(a,b){return a[b]},
gj:function(a){return a.length}}
W.e5.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
W.c5.prototype={}
W.bk.prototype={
ec:function(a,b){return a.adoptNode(b)},
cT:function(a,b){return a.getElementById(b)},
eU:function(a,b){return a.querySelector(b)}}
W.e6.prototype={
k:function(a){return String(a)}}
W.c6.prototype={
er:function(a,b){return a.createHTMLDocument(b)}}
W.e7.prototype={
gaC:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
W.c7.prototype={
gaC:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
W.c8.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isp:1,
$asp:function(){return[P.S]},
$isj:1,
$asj:function(){return[P.S]},
$ist:1,
$ast:function(){return[P.S]},
$asl:function(){return[P.S]},
$ish:1,
$ash:function(){return[P.S]},
$asm:function(){return[P.S]}}
W.c9.prototype={
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.ga3(a))+" x "+H.e(this.ga1(a))},
B:function(a,b){var t
if(b==null)return!1
t=J.q(b)
if(!t.$isS)return!1
return a.left===t.gck(b)&&a.top===t.gcz(b)&&this.ga3(a)===t.ga3(b)&&this.ga1(a)===t.ga1(b)},
gw:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.ga3(a)
q=this.ga1(a)
return W.kZ(W.aL(W.aL(W.aL(W.aL(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga1:function(a){return a.height},
gck:function(a){return a.left},
gcz:function(a){return a.top},
ga3:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isS:1,
$asS:function(){}}
W.e8.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isp:1,
$asp:function(){return[P.o]},
$isj:1,
$asj:function(){return[P.o]},
$ist:1,
$ast:function(){return[P.o]},
$asl:function(){return[P.o]},
$ish:1,
$ash:function(){return[P.o]},
$asm:function(){return[P.o]}}
W.e9.prototype={
gj:function(a){return a.length}}
W.Y.prototype={
gef:function(a){return new W.hB(a)},
k:function(a){return a.localName},
N:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.kh
if(t==null){t=H.B([],[W.cy])
s=new W.cz(t)
C.a.l(t,W.kW(null))
C.a.l(t,W.l_())
$.kh=s
d=s}else d=t
t=$.kg
if(t==null){t=new W.ds(d)
$.kg=t
c=t}else{t.a=d
c=t}}if($.aj==null){t=document
s=t.implementation
s=(s&&C.M).er(s,"")
$.aj=s
$.ja=s.createRange()
s=$.aj
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.aj.head;(t&&C.N).R(t,r)}t=$.aj
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.jF(s,"$isap")}t=$.aj
if(!!this.$isap)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.aj.body;(t&&C.o).R(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.D(C.Z,a.tagName)){t=$.ja;(t&&C.F).cU(t,q)
t=$.ja
p=(t&&C.F).ep(t,b)}else{q.innerHTML=b
p=$.aj.createDocumentFragment()
for(t=J.i(p);s=q.firstChild,s!=null;)t.R(p,s)}t=$.aj.body
if(q==null?t!=null:q!==t)J.jU(q)
c.bn(p)
C.r.ec(document,p)
return p},
eq:function(a,b,c){return this.N(a,b,c,null)},
d3:function(a,b,c,d){a.textContent=null
this.R(a,this.N(a,b,c,d))},
d2:function(a,b){return this.d3(a,b,null,null)},
a5:function(a,b){return a.getAttribute(b)},
dZ:function(a,b){return a.removeAttribute(b)},
$isY:1,
gf1:function(a){return a.tagName}}
W.ed.prototype={
$1:function(a){return!!J.q(a).$isY},
$S:function(a){return{func:1,args:[,]}}}
W.f.prototype={$isf:1}
W.d.prototype={
dH:function(a,b,c,d){return a.addEventListener(b,H.ba(c,1),!1)},
e0:function(a,b,c,d){return a.removeEventListener(b,H.ba(c,1),!1)}}
W.ey.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isp:1,
$asp:function(){return[W.cc]},
$isj:1,
$asj:function(){return[W.cc]},
$ist:1,
$ast:function(){return[W.cc]},
$asl:function(){return[W.cc]},
$ish:1,
$ash:function(){return[W.cc]},
$asm:function(){return[W.cc]}}
W.ez.prototype={
gj:function(a){return a.length}}
W.eD.prototype={
gj:function(a){return a.length}}
W.eH.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
W.cf.prototype={}
W.eI.prototype={
gj:function(a){return a.length}}
W.bm.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isp:1,
$asp:function(){return[W.r]},
$isj:1,
$asj:function(){return[W.r]},
$ist:1,
$ast:function(){return[W.r]},
$asl:function(){return[W.r]},
$ish:1,
$ash:function(){return[W.r]},
$asm:function(){return[W.r]}}
W.cg.prototype={}
W.eJ.prototype={
J:function(a,b){return a.send(b)}}
W.bn.prototype={}
W.aU.prototype={$isaU:1}
W.aV.prototype={$isaV:1}
W.av.prototype={$isav:1}
W.aA.prototype={$isaA:1}
W.eZ.prototype={
k:function(a){return String(a)}}
W.f_.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
W.bq.prototype={}
W.f3.prototype={
gj:function(a){return a.length}}
W.f5.prototype={
fa:function(a,b,c){return a.send(b,c)},
J:function(a,b){return a.send(b)}}
W.br.prototype={}
W.f6.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isp:1,
$asp:function(){return[W.cr]},
$isj:1,
$asj:function(){return[W.cr]},
$ist:1,
$ast:function(){return[W.cr]},
$asl:function(){return[W.cr]},
$ish:1,
$ash:function(){return[W.cr]},
$asm:function(){return[W.cr]}}
W.K.prototype={$isK:1}
W.M.prototype={
gZ:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.c(P.fO("No elements"))
if(s>1)throw H.c(P.fO("More than one element"))
return t.firstChild},
M:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.i(s),p=0;p<r;++p)q.R(s,t.firstChild)
return},
i:function(a,b,c){var t=this.a
J.lv(t,c,C.D.h(t.childNodes,b))},
gA:function(a){var t=this.a.childNodes
return new W.cd(t,t.length,-1,null,[H.T(t,"m",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){return C.D.h(this.a.childNodes,b)},
$asj:function(){return[W.r]},
$ascm:function(){return[W.r]},
$asl:function(){return[W.r]},
$ash:function(){return[W.r]},
$asbI:function(){return[W.r]}}
W.r.prototype={
eV:function(a){var t=a.parentNode
if(t!=null)J.iZ(t,a)},
k:function(a){var t=a.nodeValue
return t==null?this.d7(a):t},
R:function(a,b){return a.appendChild(b)},
e_:function(a,b){return a.removeChild(b)},
e1:function(a,b,c){return a.replaceChild(b,c)},
$isr:1,
gbb:function(a){return a.previousSibling}}
W.cx.prototype={
bc:function(a){return a.previousNode()}}
W.bt.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isp:1,
$asp:function(){return[W.r]},
$isj:1,
$asj:function(){return[W.r]},
$ist:1,
$ast:function(){return[W.r]},
$asl:function(){return[W.r]},
$ish:1,
$ash:function(){return[W.r]},
$asm:function(){return[W.r]}}
W.aa.prototype={
gj:function(a){return a.length}}
W.ft.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isp:1,
$asp:function(){return[W.aa]},
$isj:1,
$asj:function(){return[W.aa]},
$ist:1,
$ast:function(){return[W.aa]},
$asl:function(){return[W.aa]},
$ish:1,
$ash:function(){return[W.aa]},
$asm:function(){return[W.aa]}}
W.fw.prototype={
J:function(a,b){return a.send(b)}}
W.cB.prototype={
ep:function(a,b){return a.createContextualFragment(b)},
cU:function(a,b){return a.selectNodeContents(b)}}
W.cE.prototype={
J:function(a,b){return a.send(b)}}
W.fF.prototype={
gj:function(a){return a.length}}
W.ak.prototype={}
W.fK.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isp:1,
$asp:function(){return[W.cG]},
$isj:1,
$asj:function(){return[W.cG]},
$ist:1,
$ast:function(){return[W.cG]},
$asl:function(){return[W.cG]},
$ish:1,
$ash:function(){return[W.cG]},
$asm:function(){return[W.cG]}}
W.fM.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isp:1,
$asp:function(){return[W.cH]},
$isj:1,
$asj:function(){return[W.cH]},
$ist:1,
$ast:function(){return[W.cH]},
$asl:function(){return[W.cH]},
$ish:1,
$ash:function(){return[W.cH]},
$asm:function(){return[W.cH]}}
W.ab.prototype={
gj:function(a){return a.length}}
W.fS.prototype={
h:function(a,b){return this.bN(a,b)},
ah:function(a,b){var t,s
for(t=0;!0;++t){s=this.dV(a,t)
if(s==null)return
b.$2(s,this.bN(a,s))}},
gE:function(a){var t=H.B([],[P.o])
this.ah(a,new W.fT(t))
return t},
gj:function(a){return a.length},
bN:function(a,b){return a.getItem(b)},
dV:function(a,b){return a.key(b)},
$asaZ:function(){return[P.o,P.o]}}
W.fT.prototype={
$2:function(a,b){return C.a.l(this.a,a)},
$S:function(a,b){return{func:1,args:[,,]}}}
W.cK.prototype={
N:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aI(a,b,c,d)
t=W.mi("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.M(s).M(0,new W.M(t))
return s}}
W.h0.prototype={
N:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aI(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.K.N(t.createElement("table"),b,c,d)
t.toString
t=new W.M(t)
r=t.gZ(t)
r.toString
t=new W.M(r)
q=t.gZ(t)
s.toString
q.toString
new W.M(s).M(0,new W.M(q))
return s}}
W.h1.prototype={
N:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aI(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.K.N(t.createElement("table"),b,c,d)
t.toString
t=new W.M(t)
r=t.gZ(t)
s.toString
r.toString
new W.M(s).M(0,new W.M(r))
return s}}
W.bz.prototype={$isbz:1}
W.h3.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isp:1,
$asp:function(){return[W.cM]},
$isj:1,
$asj:function(){return[W.cM]},
$ist:1,
$ast:function(){return[W.cM]},
$asl:function(){return[W.cM]},
$ish:1,
$ash:function(){return[W.cM]},
$asm:function(){return[W.cM]}}
W.h4.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isp:1,
$asp:function(){return[W.cL]},
$isj:1,
$asj:function(){return[W.cL]},
$ist:1,
$ast:function(){return[W.cL]},
$asl:function(){return[W.cL]},
$ish:1,
$ash:function(){return[W.cL]},
$asm:function(){return[W.cL]}}
W.h5.prototype={
gj:function(a){return a.length}}
W.aF.prototype={$isaF:1}
W.h9.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isp:1,
$asp:function(){return[W.cQ]},
$isj:1,
$asj:function(){return[W.cQ]},
$ist:1,
$ast:function(){return[W.cQ]},
$asl:function(){return[W.cQ]},
$ish:1,
$ash:function(){return[W.cQ]},
$asm:function(){return[W.cQ]}}
W.ha.prototype={
gj:function(a){return a.length}}
W.cR.prototype={
bc:function(a){return a.previousNode()}}
W.aG.prototype={}
W.hj.prototype={
k:function(a){return String(a)}}
W.hl.prototype={
gm:function(a){return a.x},
gF:function(a){return a.z}}
W.b2.prototype={$isb2:1}
W.hm.prototype={
gj:function(a){return a.length}}
W.hn.prototype={
J:function(a,b){return a.send(b)}}
W.aI.prototype={
geu:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.u("deltaY is not supported"))},
$isaI:1}
W.bE.prototype={
gee:function(a){var t,s
t=P.a3
s=new P.F(0,$.w,null,[t])
this.dQ(a)
this.e2(a,W.l5(new W.hp(new P.ii(s,[t]))))
return s},
e2:function(a,b){return a.requestAnimationFrame(H.ba(b,1))},
dQ:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.hp.prototype={
$1:function(a){this.a.b5(0,a)},
$S:function(a){return{func:1,args:[,]}}}
W.jt.prototype={}
W.hz.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isp:1,
$asp:function(){return[W.c3]},
$isj:1,
$asj:function(){return[W.c3]},
$ist:1,
$ast:function(){return[W.c3]},
$asl:function(){return[W.c3]},
$ish:1,
$ash:function(){return[W.c3]},
$asm:function(){return[W.c3]}}
W.hA.prototype={
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
B:function(a,b){var t
if(b==null)return!1
t=J.q(b)
if(!t.$isS)return!1
return a.left===t.gck(b)&&a.top===t.gcz(b)&&a.width===t.ga3(b)&&a.height===t.ga1(b)},
gw:function(a){var t,s,r,q
t=a.left
s=a.top
r=a.width
q=a.height
return W.kZ(W.aL(W.aL(W.aL(W.aL(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga1:function(a){return a.height},
ga3:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.hW.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isp:1,
$asp:function(){return[W.ce]},
$isj:1,
$asj:function(){return[W.ce]},
$ist:1,
$ast:function(){return[W.ce]},
$asl:function(){return[W.ce]},
$ish:1,
$ash:function(){return[W.ce]},
$asm:function(){return[W.ce]}}
W.d6.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isp:1,
$asp:function(){return[W.r]},
$isj:1,
$asj:function(){return[W.r]},
$ist:1,
$ast:function(){return[W.r]},
$asl:function(){return[W.r]},
$ish:1,
$ash:function(){return[W.r]},
$asm:function(){return[W.r]}}
W.ie.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isp:1,
$asp:function(){return[W.ab]},
$isj:1,
$asj:function(){return[W.ab]},
$ist:1,
$ast:function(){return[W.ab]},
$asl:function(){return[W.ab]},
$ish:1,
$ash:function(){return[W.ab]},
$asm:function(){return[W.ab]}}
W.ig.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isp:1,
$asp:function(){return[W.cJ]},
$isj:1,
$asj:function(){return[W.cJ]},
$ist:1,
$ast:function(){return[W.cJ]},
$asl:function(){return[W.cJ]},
$ish:1,
$ash:function(){return[W.cJ]},
$asm:function(){return[W.cJ]}}
W.hw.prototype={
ah:function(a,b){var t,s,r,q,p,o
for(t=this.gE(this),s=t.length,r=this.a,q=J.i(r),p=0;p<t.length;t.length===s||(0,H.a5)(t),++p){o=t[p]
b.$2(o,q.a5(r,o))}},
gE:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.B([],[P.o])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.l(s,p.name)}return s},
$asco:function(){return[P.o,P.o]},
$asaZ:function(){return[P.o,P.o]},
gdT:function(){return this.a}}
W.hB.prototype={
h:function(a,b){return J.j6(this.a,b)},
gj:function(a){return this.gE(this).length}}
W.hF.prototype={
cm:function(a,b,c,d){return W.a0(this.a,this.b,a,!1,H.ah(this,0))}}
W.hC.prototype={}
W.hG.prototype={
dB:function(a,b,c,d,e){this.e9()},
ek:function(a){if(this.b==null)return
this.ea()
this.b=null
this.sdX(null)
return},
e9:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.lt(r,this.c,t,!1)}},
ea:function(){var t,s,r
t=this.d
s=t!=null
if(s){r=this.b
r.toString
if(s)J.lu(r,this.c,t,!1)}},
sdX:function(a){this.d=a}}
W.hH.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(a){return{func:1,args:[,]}}}
W.bG.prototype={
dC:function(a){var t,s
t=$.$get$jw()
if(t.gak(t)){for(s=0;s<262;++s)t.i(0,C.X[s],W.no())
for(s=0;s<12;++s)t.i(0,C.u[s],W.np())}},
a0:function(a){return $.$get$kX().D(0,W.bl(a))},
U:function(a,b,c){var t,s,r
t=W.bl(a)
s=$.$get$jw()
r=s.h(0,H.e(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)}}
W.m.prototype={
gA:function(a){return new W.cd(a,this.gj(a),-1,null,[H.T(a,"m",0)])}}
W.cz.prototype={
a0:function(a){return C.a.bY(this.a,new W.fh(a))},
U:function(a,b,c){return C.a.bY(this.a,new W.fg(a,b,c))}}
W.fh.prototype={
$1:function(a){return a.a0(this.a)},
$S:function(a){return{func:1,args:[,]}}}
W.fg.prototype={
$1:function(a){return a.U(this.a,this.b,this.c)},
$S:function(a){return{func:1,args:[,]}}}
W.bN.prototype={
dF:function(a,b,c,d){var t,s,r
this.a.M(0,c)
t=b.aD(0,new W.ic())
s=b.aD(0,new W.id())
this.b.M(0,t)
r=this.c
r.M(0,C.C)
r.M(0,s)},
a0:function(a){return this.a.D(0,W.bl(a))},
U:function(a,b,c){var t,s
t=W.bl(a)
s=this.c
if(s.D(0,H.e(t)+"::"+b))return this.d.ed(c)
else if(s.D(0,"*::"+b))return this.d.ed(c)
else{s=this.b
if(s.D(0,H.e(t)+"::"+b))return!0
else if(s.D(0,"*::"+b))return!0
else if(s.D(0,H.e(t)+"::*"))return!0
else if(s.D(0,"*::*"))return!0}return!1}}
W.ic.prototype={
$1:function(a){return!C.a.D(C.u,a)},
$S:function(a){return{func:1,args:[,]}}}
W.id.prototype={
$1:function(a){return C.a.D(C.u,a)},
$S:function(a){return{func:1,args:[,]}}}
W.ij.prototype={
U:function(a,b,c){if(this.da(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.j6(a,"template")==="")return this.e.D(0,b)
return!1}}
W.ik.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)},
$S:function(a){return{func:1,args:[,]}}}
W.ih.prototype={
a0:function(a){var t=J.q(a)
if(!!t.$isbw)return!1
t=!!t.$isv
if(t&&W.bl(a)==="foreignObject")return!1
if(t)return!0
return!1},
U:function(a,b,c){if(b==="is"||C.i.bq(b,"on"))return!1
return this.a0(a)}}
W.cd.prototype={
p:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbP(J.be(this.a,t))
this.c=t
return!0}this.sbP(null)
this.c=s
return!1},
gq:function(a){return this.d},
sbP:function(a){this.d=a}}
W.cy.prototype={}
W.jm.prototype={}
W.js.prototype={}
W.ib.prototype={}
W.ds.prototype={
bn:function(a){new W.il(this).$2(a,null)},
ae:function(a,b){if(b==null)J.jU(a)
else J.iZ(b,a)},
e5:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.lL(a)
r=J.j6(s.gdT(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.I(n)}p="element unprintable"
try{p=J.bh(a)}catch(n){H.I(n)}try{o=W.bl(a)
this.e4(a,b,t,p,o,s,r)}catch(n){if(H.I(n) instanceof P.a7)throw n
else{this.ae(a,b)
window
m="Removing corrupted element "+H.e(p)
if(typeof console!="undefined")window.console.warn(m)}}},
e4:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.ae(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(t)
return}if(!this.a.a0(a)){this.ae(a,b)
window
t="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(t)
return}if(g!=null)if(!this.a.U(a,"is",g)){this.ae(a,b)
window
t="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(t)
return}t=f.gE(f)
s=H.B(t.slice(0),[H.ah(t,0)])
for(r=f.gE(f).length-1,t=f.a,q=J.i(t);r>=0;--r){p=s[r]
if(!this.a.U(a,J.lY(p),q.a5(t,p))){window
o="Removing disallowed attribute <"+H.e(e)+" "+p+'="'+H.e(q.a5(t,p))+'">'
if(typeof console!="undefined")window.console.warn(o)
q.a5(t,p)
q.dZ(t,p)}}if(!!J.q(a).$isbz)this.bn(a.content)}}
W.il.prototype={
$2:function(a,b){var t,s,r,q
r=this.a
switch(a.nodeType){case 1:r.e5(a,b)
break
case 8:case 11:case 3:case 4:break
default:r.ae(a,b)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.lM(t)}catch(q){H.I(q)
r=t
J.iZ(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(a,b){return{func:1,v:true,args:[W.r,W.r]}}}
W.cU.prototype={}
W.cV.prototype={}
W.cW.prototype={}
W.cX.prototype={}
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
W.bO.prototype={}
W.bP.prototype={}
W.dd.prototype={}
W.de.prototype={}
W.di.prototype={}
W.dl.prototype={}
W.dm.prototype={}
W.bQ.prototype={}
W.bR.prototype={}
W.dn.prototype={}
W.dp.prototype={}
W.dt.prototype={}
W.du.prototype={}
W.dv.prototype={}
W.dw.prototype={}
W.dx.prototype={}
W.dy.prototype={}
W.dz.prototype={}
W.dA.prototype={}
W.dB.prototype={}
W.dC.prototype={}
P.is.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(a,b){return{func:1,args:[,,]}}}
P.hZ.prototype={
eS:function(){return Math.random()}}
P.i6.prototype={}
P.S.prototype={}
P.ef.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eg.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eh.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ei.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ej.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ek.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
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
gn:function(a){return a.y},
gF:function(a){return a.z}}
P.et.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eu.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
P.ev.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ew.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eA.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eC.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.Z.prototype={}
P.a8.prototype={}
P.eK.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eT.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return this.X(a,b)},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
X:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.jh]},
$asl:function(){return[P.jh]},
$ish:1,
$ash:function(){return[P.jh]},
$asm:function(){return[P.jh]}}
P.f2.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fj.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return this.X(a,b)},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
X:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.jn]},
$asl:function(){return[P.jn]},
$ish:1,
$ash:function(){return[P.jn]},
$asm:function(){return[P.jn]}}
P.fq.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fu.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fv.prototype={
gj:function(a){return a.length}}
P.fy.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fz.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bw.prototype={$isbw:1}
P.fZ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return this.X(a,b)},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
X:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.o]},
$asl:function(){return[P.o]},
$ish:1,
$ash:function(){return[P.o]},
$asm:function(){return[P.o]}}
P.v.prototype={
N:function(a,b,c,d){var t,s,r,q,p,o
t=H.B([],[W.cy])
C.a.l(t,W.kW(null))
C.a.l(t,W.l_())
C.a.l(t,new W.ih())
c=new W.ds(new W.cz(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.o).eq(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.M(q)
o=t.gZ(t)
for(t=J.i(p);r=o.firstChild,r!=null;)t.R(p,r)
return p},
$isv:1}
P.h_.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bA.prototype={}
P.bB.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.hb.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return this.X(a,b)},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
X:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.jq]},
$asl:function(){return[P.jq]},
$ish:1,
$ash:function(){return[P.jq]},
$asm:function(){return[P.jq]}}
P.hk.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.d2.prototype={}
P.d3.prototype={}
P.d9.prototype={}
P.da.prototype={}
P.dj.prototype={}
P.dk.prototype={}
P.dq.prototype={}
P.dr.prototype={}
P.dP.prototype={
gj:function(a){return a.length}}
P.dQ.prototype={
gj:function(a){return a.length}}
P.aP.prototype={}
P.fk.prototype={
gj:function(a){return a.length}}
P.fC.prototype={
bW:function(a,b){return a.activeTexture(b)},
bZ:function(a,b,c){return a.attachShader(b,c)},
c_:function(a,b,c){return a.bindBuffer(b,c)},
c0:function(a,b,c){return a.bindTexture(b,c)},
c1:function(a,b){return a.blendEquation(b)},
c2:function(a,b,c){return a.blendFunc(b,c)},
c3:function(a,b,c,d){return a.bufferData(b,c,d)},
c4:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c5:function(a,b){return a.compileShader(b)},
c6:function(a){return a.createBuffer()},
c7:function(a){return a.createProgram()},
c9:function(a,b){return a.createShader(b)},
ca:function(a){return a.createTexture()},
cc:function(a,b){return a.depthMask(b)},
cd:function(a,b){return a.disable(b)},
ce:function(a,b,c,d){return a.drawArrays(b,c,d)},
cf:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cg:function(a,b){return a.enable(b)},
ci:function(a,b){return a.enableVertexAttribArray(b)},
aE:function(a){return P.it(a.getContextAttributes())},
bh:function(a){return a.getError()},
bi:function(a,b){return a.getProgramInfoLog(b)},
bj:function(a,b,c){return a.getProgramParameter(b,c)},
bk:function(a,b){return a.getShaderInfoLog(b)},
bl:function(a,b,c){return a.getShaderParameter(b,c)},
bm:function(a,b,c){return a.getUniformLocation(b,c)},
cl:function(a,b){return a.linkProgram(b)},
cp:function(a,b,c){return a.pixelStorei(b,c)},
bp:function(a,b,c){return a.shaderSource(b,c)},
br:function(a,b,c,d){return a.stencilFunc(b,c,d)},
be:function(a,b,c,d,e,f,g,h,i,j){var t,s
t=J.q(g)
if(!!t.$isaV)s=!0
else s=!1
if(s){this.aZ(a,b,c,d,e,f,P.la(g))
return}if(!!t.$isav)s=!0
else s=!1
if(s){this.b_(a,b,c,d,e,f,g)
return}if(!!t.$isaq)s=!0
else s=!1
if(s){this.b0(a,b,c,d,e,f,g)
return}if(!!t.$isb2)s=!0
else s=!1
if(s){this.b1(a,b,c,d,e,f,g)
return}if(!!t.$isaU)t=!0
else t=!1
if(t){this.b2(a,b,c,d,e,f,g)
return}throw H.c(P.dN("Incorrect number or type of arguments"))},
cu:function(a,b,c,d,e,f,g){return this.be(a,b,c,d,e,f,g,null,null,null)},
aZ:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b_:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b0:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b1:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b2:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cv:function(a,b,c,d){return a.texParameterf(b,c,d)},
cw:function(a,b,c,d){return a.texParameteri(b,c,d)},
cA:function(a,b,c){return a.uniform1f(b,c)},
cB:function(a,b,c){return a.uniform1fv(b,c)},
cC:function(a,b,c){return a.uniform1i(b,c)},
cD:function(a,b,c){return a.uniform1iv(b,c)},
cE:function(a,b,c){return a.uniform2fv(b,c)},
cF:function(a,b,c){return a.uniform3fv(b,c)},
cG:function(a,b,c){return a.uniform4fv(b,c)},
cH:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cI:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cK:function(a,b){return a.useProgram(b)},
cM:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cO:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fD.prototype={
eg:function(a,b){return a.beginTransformFeedback(b)},
ej:function(a,b){return a.bindVertexArray(b)},
es:function(a){return a.createVertexArray()},
eA:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
eB:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
eC:function(a){return a.endTransformFeedback()},
f6:function(a,b,c,d){this.e8(a,b,c,d)
return},
e8:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
f7:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bW:function(a,b){return a.activeTexture(b)},
bZ:function(a,b,c){return a.attachShader(b,c)},
c_:function(a,b,c){return a.bindBuffer(b,c)},
c0:function(a,b,c){return a.bindTexture(b,c)},
c1:function(a,b){return a.blendEquation(b)},
c2:function(a,b,c){return a.blendFunc(b,c)},
c3:function(a,b,c,d){return a.bufferData(b,c,d)},
c4:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c5:function(a,b){return a.compileShader(b)},
c6:function(a){return a.createBuffer()},
c7:function(a){return a.createProgram()},
c9:function(a,b){return a.createShader(b)},
ca:function(a){return a.createTexture()},
cc:function(a,b){return a.depthMask(b)},
cd:function(a,b){return a.disable(b)},
ce:function(a,b,c,d){return a.drawArrays(b,c,d)},
cf:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cg:function(a,b){return a.enable(b)},
ci:function(a,b){return a.enableVertexAttribArray(b)},
aE:function(a){return P.it(a.getContextAttributes())},
bh:function(a){return a.getError()},
bi:function(a,b){return a.getProgramInfoLog(b)},
bj:function(a,b,c){return a.getProgramParameter(b,c)},
bk:function(a,b){return a.getShaderInfoLog(b)},
bl:function(a,b,c){return a.getShaderParameter(b,c)},
bm:function(a,b,c){return a.getUniformLocation(b,c)},
cl:function(a,b){return a.linkProgram(b)},
cp:function(a,b,c){return a.pixelStorei(b,c)},
bp:function(a,b,c){return a.shaderSource(b,c)},
br:function(a,b,c,d){return a.stencilFunc(b,c,d)},
be:function(a,b,c,d,e,f,g,h,i,j){var t,s
t=J.q(g)
if(!!t.$isaV)s=!0
else s=!1
if(s){this.aZ(a,b,c,d,e,f,P.la(g))
return}if(!!t.$isav)s=!0
else s=!1
if(s){this.b_(a,b,c,d,e,f,g)
return}if(!!t.$isaq)s=!0
else s=!1
if(s){this.b0(a,b,c,d,e,f,g)
return}if(!!t.$isb2)s=!0
else s=!1
if(s){this.b1(a,b,c,d,e,f,g)
return}if(!!t.$isaU)t=!0
else t=!1
if(t){this.b2(a,b,c,d,e,f,g)
return}throw H.c(P.dN("Incorrect number or type of arguments"))},
cu:function(a,b,c,d,e,f,g){return this.be(a,b,c,d,e,f,g,null,null,null)},
aZ:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b_:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b0:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b1:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b2:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cv:function(a,b,c,d){return a.texParameterf(b,c,d)},
cw:function(a,b,c,d){return a.texParameteri(b,c,d)},
cA:function(a,b,c){return a.uniform1f(b,c)},
cB:function(a,b,c){return a.uniform1fv(b,c)},
cC:function(a,b,c){return a.uniform1i(b,c)},
cD:function(a,b,c){return a.uniform1iv(b,c)},
cE:function(a,b,c){return a.uniform2fv(b,c)},
cF:function(a,b,c){return a.uniform3fv(b,c)},
cG:function(a,b,c){return a.uniform4fv(b,c)},
cH:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cI:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cK:function(a,b){return a.useProgram(b)},
cM:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cO:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fN.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return P.it(this.dU(a,b))},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
dU:function(a,b){return a.item(b)},
$isj:1,
$asj:function(){return[P.aY]},
$asl:function(){return[P.aY]},
$ish:1,
$ash:function(){return[P.aY]},
$asm:function(){return[P.aY]}}
P.df.prototype={}
P.dg.prototype={}
B.iR.prototype={
$1:function(a){$.$get$iu().i(0,a.which,!0)},
$S:function(a){return{func:1,args:[W.aA]}}}
B.iS.prototype={
$1:function(a){$.$get$iu().i(0,a.which,null)},
$S:function(a){return{func:1,args:[W.aA]}}}
B.iT.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.ng=t
$.nh=C.b.a8(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.jI=s-C.b.K(window.innerWidth,2)
$.lk=-(t-C.b.K(window.innerHeight,2))},
$S:function(a){return{func:1,args:[W.K]}}}
B.iU.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.bY=t-C.b.K(window.innerWidth,2)
$.bZ=-(s-C.b.K(window.innerHeight,2))
if(a.button===2)$.$get$bX().i(0,"right",!0)
else $.$get$bX().i(0,"left",!0)},
$S:function(a){return{func:1,args:[W.K]}}}
B.iV.prototype={
$1:function(a){if(a.button===2)$.$get$bX().i(0,"right",null)
else $.$get$bX().i(0,"left",null)},
$S:function(a){return{func:1,args:[W.K]}}}
B.fl.prototype={
dm:function(a,b,c,d){var t
d.toString
W.a0(d,W.mj(d),new B.fm(this),!1,W.aI)
W.a0(d,"mousemove",new B.fn(this),!1,W.K)
t=W.aF
W.a0(d,"touchstart",new B.fo(),!1,t)
W.a0(d,"touchmove",new B.fp(this),!1,t)
B.nD(null)}}
B.fm.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.ay.geu(a)*r.k3
if(C.c.a8(r.fy,t)>0)r.fy=C.c.a8(r.fy,t)}catch(q){s=H.I(q)
P.a4(s)}},
$S:function(a){return{func:1,args:[W.aI]}}}
B.fn.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=t.go+C.b.a8($.jI,$.bY)*0.01
s=t.id
r=$.bZ
q=$.lk
t.id=s+(r-q)*0.01
$.bY=$.jI
$.bZ=q}},
$S:function(a){return{func:1,args:[W.K]}}}
B.fo.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.a2(t.clientX)
C.c.a2(t.clientY)
$.bY=s
C.c.a2(t.clientX)
$.bZ=C.c.a2(t.clientY)},
$S:function(a){return{func:1,args:[W.aF]}}}
B.fp.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.a2(t.clientX)
t=C.c.a2(t.clientY)
r=this.a
r.go=r.go+C.b.a8(s,$.bY)*0.01
r.id=r.id+($.bZ-t)*0.01
$.bY=s
$.bZ=t},
$S:function(a){return{func:1,args:[W.aF]}}}
G.f7.prototype={}
G.hf.prototype={
H:function(a,b){var t=this.d
if(H.af(!t.G(0,a)))H.an("uniform "+a+" already set")
t.i(0,a,b)},
by:function(){return this.d},
k:function(a){var t,s,r,q
t=H.B(["{"+new H.al(H.iz(this),null).k(0)+"}["+this.a+"]"],[P.o])
for(s=this.d,r=s.gE(s),r=r.gA(r);r.p();){q=r.gq(r)
C.a.l(t,H.e(q)+": "+H.e(s.h(0,q)))}return C.a.al(t,"\n")}}
G.dR.prototype={}
G.dT.prototype={
cj:function(a,b,c){J.lJ(this.a,b)
if(c>0)J.m3(this.a,b,c)},
cN:function(a,b,c,d,e,f,g,h){J.j0(this.a,34962,b)
J.m4(this.a,c,d,e,!1,g,h)}}
G.ex.prototype={}
G.eG.prototype={
bw:function(a){var t=this.e
H.b(!t.G(0,a))
H.b(C.i.bq(a,"a"))
switch($.$get$N().h(0,a).a){case"vec2":t.i(0,a,H.B([],[T.x]))
break
case"vec3":t.i(0,a,H.B([],[T.n]))
break
case"vec4":t.i(0,a,H.B([],[T.am]))
break
case"float":t.i(0,a,H.B([],[P.W]))
break
case"uvec4":t.i(0,a,H.B([],[[P.h,P.z]]))
break
default:if(H.af(!1))H.an("unknown type for "+a)}},
df:function(a){var t,s,r
H.b(!0)
t=this.d.length
for(s=this.c,r=0;r<a;++r,t+=4)C.a.l(s,new G.ex(t,t+1,t+2,t+3))},
ar:function(a){var t,s,r,q
for(t=this.d,s=0;s<24;++s){r=a[s]
q=new T.n(new Float32Array(3))
q.Y(r)
C.a.l(t,q)}},
dd:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=t&&C.a,r=0;r<24;++r){q=b[r]
p=new Float32Array(2)
o=q.a
p[1]=o[1]
p[0]=o[0]
s.l(t,new T.x(p))}},
de:function(a,b){var t,s,r,q,p
t=this.e.h(0,a)
for(s=t&&C.a,r=0;r<4;++r){q=b[r]
p=new T.n(new Float32Array(3))
p.Y(q)
s.l(t,p)}},
dj:function(){var t,s,r,q,p,o,n,m,l
t=this.c
s=t.length
H.b(s>0)
s=new Array(t.length*6)
s.fixed$length=Array
r=H.B(s,[P.z])
for(s=this.b,q=0,p=0;!1;++p){o=s[p]
r[q]=o.gfc(o)
r[q+1]=o.gfd(o)
r[q+2]=o.gfe(o)
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
k:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gE(s),r=r.gA(r);r.p();){q=r.gq(r)
p=$.$get$N().h(0,q).a
C.a.l(t,H.e(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.al(t," ")}}
G.cP.prototype={}
G.cO.prototype={}
G.cq.prototype={}
G.f4.prototype={
bv:function(a,b,c){var t,s
if(C.i.aN(a,0)===105){if(H.af(C.b.aJ(b.length,c)===this.z))H.an("ChangeAttribute "+this.z)}else{t=C.b.aJ(b.length,c)
if(H.af(t===(this.ch.length/3|0)))H.an("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.j0(t.a,34962,s)
J.jN(t.a,34962,b,35048)},
dk:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
a9:function(a,b,c){var t,s,r,q,p,o
t=J.jK(a,0)===105
if(t&&this.z===0)this.z=C.b.aJ(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.j2(r.a))
this.bv(a,b,c)
q=$.$get$N().h(0,a)
if(q==null)throw H.c("Unknown canonical "+a)
p=this.x
if(H.af(p.G(0,a)))H.an("unexpected attribute "+a)
o=p.h(0,a)
J.dH(r.a,this.e)
r.cj(0,o,t?1:0)
r.cN(0,s.h(0,a),o,q.bx(),5126,!1,0,0)},
ar:function(a){var t,s,r,q,p
t=this.r
s=this.d
t.i(0,"aPosition",J.j2(s.a))
this.ch=a
this.bv("aPosition",a,3)
r=$.$get$N().h(0,"aPosition")
if(r==null)throw H.c("Unknown canonical aPosition")
q=this.x
H.b(q.G(0,"aPosition"))
p=q.h(0,"aPosition")
J.dH(s.a,this.e)
s.cj(0,p,0)
s.cN(0,t.h(0,"aPosition"),p,r.bx(),5126,!1,0,0)},
k:function(a){var t,s,r,q
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,r=t.gE(t),r=r.gA(r);r.p();){q=r.gq(r)
C.a.l(s,H.e(q)+":"+t.h(0,q).length)}return"MESH["+this.a+"] "+C.a.al(s,"  ")},
saS:function(a){this.cx=a}}
G.fr.prototype={
dg:function(a,b){var t=C.b.cQ(a,b)
if(this.z===t)return
this.z=t
this.bA()},
bA:function(){var t,s,r,q,p,o,n
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
t.a6(0,0,1/(p*s))
t.a6(1,1,1/p)
t.a6(2,2,(q+r)/o)
t.a6(3,2,-1)
t.a6(2,3,2*r*q/o)},
by:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.n(new Float32Array(3))
o.u(r,q,p)
p=this.d
p.i(0,"uEyePosition",o)
o=this.cy
o.Y(t)
t=o.a
t[12]=0
t[13]=0
t[14]=0
t[15]=1
n=-s[12]
m=-s[13]
l=-s[14]
s=J.q(n)
r=!!s.$isam
k=r?s.gaC(n):1
if(!!s.$isn){j=s.gm(n)
m=s.gn(n)
l=s.gF(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
l=s.gF(n)
n=j}else if(!(typeof n==="number")){n=null
m=null
l=null}s=C.c.I(t[0],n)
r=C.c.I(t[4],m)
q=C.c.I(t[8],l)
i=t[12]
h=C.c.I(t[1],n)
g=C.c.I(t[5],m)
f=C.c.I(t[9],l)
e=t[13]
d=C.c.I(t[2],n)
c=C.c.I(t[6],m)
b=C.c.I(t[10],l)
a=t[14]
a0=C.c.I(t[3],n)
a1=C.c.I(t[7],m)
a2=C.c.I(t[11],l)
a3=t[15]
t[12]=s+r+q+i*k
t[13]=h+g+f+e*k
t[14]=d+c+b+a*k
t[15]=a0+a1+a2+a3*k
a3=this.cx
a3.Y(this.db)
a3.eR(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.fB.prototype={
dn:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.a5)(t),++o){n=t[o]
r.i(0,n,J.jS(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.a5)(t),++o){n=t[o]
r.i(0,n,J.jS(q.a,p,n))}},
du:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gj(t)===s.gj(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gE(s),s=s.gA(s);s.p();){q=s.gq(s)
if(!t.G(0,q))C.a.l(r,q)}for(t=this.x,s=new P.bH(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.p();){q=s.d
if(!t.D(0,q))C.a.l(r,q)}return r},
dz:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gE(b),s=s.gA(s),r=this.d,q=this.y,p=this.z,o=0;s.p();){n=s.gq(s)
switch(J.jK(n,0)){case 117:if(q.G(0,n)){m=b.h(0,n)
if(p.G(0,n))H.iP("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$N().h(0,n)
if(l==null)H.H("unknown "+n)
H.b(q.G(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.j7(r.a,k,m)
else if(!!J.q(m).$iskl)J.m1(r.a,k,m)
break
case"float":if(l.c===0)J.m_(r.a,k,m)
else if(!!J.q(m).$iseB)J.m0(r.a,k,m)
break
case"mat4":if(l.c===0){n=H.ao(m,"$isa_").a
J.k_(r.a,k,!1,n)}else if(!!J.q(m).$iseB)J.k_(r.a,k,!1,m)
else if(H.af(!1))H.an("bad unform: "+n)
break
case"mat3":if(l.c===0){n=C.P.gfb(H.ao(m,"$isnM"))
J.jZ(r.a,k,!1,n)}else if(!!J.q(m).$iseB)J.jZ(r.a,k,!1,m)
else if(H.af(!1))H.an("bad unform: "+n)
break
case"vec4":n=l.c
j=r.a
if(n===0)J.jY(j,k,H.ao(m,"$isam").a)
else J.jY(j,k,m)
break
case"vec3":n=l.c
j=r.a
if(n===0)J.jX(j,k,H.ao(m,"$isn").a)
else J.jX(j,k,m)
break
case"vec2":n=l.c
j=r.a
if(n===0)J.jW(j,k,H.ao(m,"$isx").a)
else J.jW(j,k,m)
break
case"sampler2D":case"sampler2DShadow":n=C.b.a4(33984,this.ch)
J.jL(r.a,n)
n=H.ao(m,"$isbC").b
J.aM(r.a,3553,n)
n=this.ch
J.j7(r.a,k,n)
this.ch=this.ch+1
break
case"samplerCube":H.b(n==="uCubeTexture")
n=C.b.a4(33984,this.ch)
J.jL(r.a,n)
n=H.ao(m,"$isbC").b
J.aM(r.a,34067,n)
n=this.ch
J.j7(r.a,k,n)
this.ch=this.ch+1
break
default:H.iP("Error: unknow uniform type: "+j)
H.b(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":n=J.C(m,!0)
j=r.a
if(n)J.dI(j,2929)
else J.j3(j,2929)
break
case"cStencilFunc":H.ao(m,"$iscP")
n=m.a
j=r.a
if(n===1281)J.j3(j,2960)
else{J.dI(j,2960)
j=m.b
i=m.c
J.lW(r.a,n,j,i)}break
case"cDepthWrite":J.lD(r.a,m)
break
case"cBlendEquation":H.ao(m,"$iscO")
n=m.a
j=r.a
if(n===1281)J.j3(j,3042)
else{J.dI(j,3042)
j=m.b
i=m.c
J.ly(r.a,j,i)
J.lx(r.a,n)}break}++o
break}}h=P.mh(0,0,0,Date.now()-new P.bj(t,!1).a,0,0)
""+o
h.k(0)},
di:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
Date.now()
t=this.d
J.m2(t.a,this.r)
this.ch=0
this.z.V(0)
for(s=0;s<2;++s){r=b[s]
this.dz(r.a,r.by())}q=this.Q
q.V(0)
for(p=a.cy,p=p.gE(p),p=p.gA(p);p.p();)q.l(0,p.gq(p))
o=this.du()
if(o.length!==0)P.a4("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(o)))
J.dH(a.d.a,a.e)
n=this.e.f.length>0
q=a.f
p=a.dk()
m=a.Q
l=a.z
if(n)J.lw(t.a,q)
if(m!==-1){k=t.a
if(l>1)J.lH(k,q,p,m,0,l)
else J.lG(k,q,p,m,0)}else{m=t.a
if(l>1)J.lF(m,q,0,p,l)
else J.lE(m,q,0,p)}if(n)J.lK(t.a)},
aK:function(a,b){return this.di(a,b,null)}}
G.y.prototype={
bx:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.b(!1)
return-1}}}
G.fI.prototype={
bt:function(a){var t,s,r,q
H.b(this.b==null)
for(t=this.c,s=this.x,r=0;r<1;++r){q=a[r]
H.b($.$get$N().G(0,q))
H.b(!C.a.D(t,q))
C.a.l(t,q)
s.i(0,q,this.r);++this.r}C.a.aH(t)},
aq:function(a){var t,s,r,q
H.b(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.a5)(a),++r){q=a[r]
if(H.af($.$get$N().G(0,q)))H.an("missing uniform "+q)
H.b(!C.a.D(s,q))
C.a.l(s,q)}C.a.aH(s)},
bu:function(a){var t,s,r
H.b(this.b==null)
for(t=this.e,s=0;s<1;++s){r=a[s]
H.b($.$get$N().G(0,r))
H.b(!C.a.D(t,r))
C.a.l(t,r)}C.a.aH(t)},
dq:function(a,b){H.b(this.b==null)
this.b=this.dA(!0,a,b)},
as:function(a){return this.dq(a,null)},
dA:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.b(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.a5)(t),++o){n=t[o]
m=$.$get$N().h(0,n)
C.a.l(q,"layout (location="+H.e(p.h(0,n))+") in "+m.a+" "+H.e(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.a5)(t),++o){k=t[o]
m=$.$get$N().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.e(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.a5)(t),++o){k=t[o]
m=$.$get$N().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.e(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.a5)(t),++o){k=t[o]
m=$.$get$N().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.e(k)+j+";")}C.a.l(q,"")
C.a.l(q,"void main(void) {")
C.a.M(q,b)
C.a.l(q,"}")
return C.a.al(q,"\n")}}
G.fL.prototype={}
G.cN.prototype={
bz:function(a,b){var t=this.e
if(t!==1)J.lX(a.a,b,34046,t)
J.dJ(a.a,b,10240,this.r)
J.dJ(a.a,b,10241,this.f)
if(this.b){J.dJ(a.a,b,10242,33071)
J.dJ(a.a,b,10243,33071)}}}
G.bC.prototype={
k:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.eL.prototype={
dr:function(a){var t,s
t=this.d
s=this.c
J.aM(t.a,s,this.b)
J.jV(t.a,s,0,6408,6408,5121,a)}}
G.e2.prototype={
dh:function(a,b,c){var t,s,r,q,p,o
t=J.P(c)
H.b(t.gj(c)===6)
s=this.d
J.jT(s.a,37440,1)
r=this.c
J.aM(s.a,r,this.b)
for(q=0;q<6;++q){p=C.Y[q]
o=t.h(c,q)
J.jV(s.a,p,0,6408,6408,5121,o)}t=this.e
t.bz(s,r)
H.b(J.jR(s.a)===0)
J.aM(s.a,r,null)
t.b=!0}}
R.cA.prototype={
cr:function(a){var t,s,r
t=this.fy
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.a4("size change "+H.e(s)+" "+H.e(r))
this.dg(s,r)
J.m5(this.go.a,0,0,s,r)}}
R.fQ.prototype={
ds:function(a,b,c){var t,s,r
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
J.j_(this.a,s)
r=this.dE(b,c,90,30)
this.d=r
J.j_(this.a,r)
t=t.createElement("div")
this.c=t
J.j_(this.a,t)},
dE:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.mW("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.x).bF(r,"float")
r.setProperty(p,"left","")
p=C.x.bF(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.q.R(t,s)}return t}}
R.fR.prototype={
dw:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.z.f5(s,2)+" fps"
t=this.c;(t&&C.q).d2(t,b)
r=C.b.K(30*C.z.el(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.q).R(t,q)},
dv:function(a){return this.dw(a,"")}}
D.eY.prototype={
$1:function(a){return this.a.b5(0,this.b)},
$S:function(a){return{func:1,args:[,]}}}
A.iB.prototype={
$2:function(a,b){var t=536870911&a+J.bf(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(a,b){return{func:1,args:[P.z,P.D]}}}
T.a_.prototype={
a6:function(a,b,c){H.b(a<4)
H.b(b<4)
this.a[b*4+a]=c},
Y:function(a){var t,s
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
k:function(a){return"[0] "+this.ap(0).k(0)+"\n[1] "+this.ap(1).k(0)+"\n[2] "+this.ap(2).k(0)+"\n[3] "+this.ap(3).k(0)+"\n"},
h:function(a,b){return this.a[b]},
B:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.a_){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gw:function(a){return A.iA(this.a)},
ap:function(a){var t,s
t=new Float32Array(4)
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.am(t)},
a7:function(){var t=this.a
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
eR:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.x.prototype={
v:function(a,b){var t=this.a
t[0]=a
t[1]=b},
k:function(a){var t=this.a
return"["+H.e(t[0])+","+H.e(t[1])+"]"},
B:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.x){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gw:function(a){return A.iA(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.n.prototype={
u:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
Y:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
k:function(a){var t=this.a
return"["+H.e(t[0])+","+H.e(t[1])+","+H.e(t[2])+"]"},
B:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.n){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gw:function(a){return A.iA(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){return Math.sqrt(this.gb9())},
gb9:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
ba:function(a){var t,s,r
t=Math.sqrt(this.gb9())
if(t===0)return 0
s=1/t
r=this.a
r[0]=r[0]*s
r[1]=r[1]*s
r[2]=r[2]*s
return t},
b6:function(a){var t,s
t=a.a
s=this.a
return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]},
cb:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.n(new Float32Array(3))
t.u(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gF:function(a){return this.a[2]}}
T.am.prototype={
k:function(a){var t=this.a
return H.e(t[0])+","+H.e(t[1])+","+H.e(t[2])+","+H.e(t[3])},
B:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.am){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gw:function(a){return A.iA(this.a)},
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
gF:function(a){return this.a[2]},
gaC:function(a){return this.a[3]}}
M.iM.prototype={
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
s.id=0}r=C.c.em(s.id,-1.4707963267948965,1.4707963267948965)
s.id=r
q=s.fy
p=s.go
o=q*Math.cos(r)
n=Math.cos(p)
r=Math.sin(r)
p=Math.sin(p)
m=s.d.a
m[12]=o*n
m[13]=q*r
m[14]=o*p
p=s.k2.a
m[12]=m[12]+p[0]
m[13]=m[13]+p[1]
m[14]=m[14]+p[2]
l=m[12]
k=m[13]
j=m[14]
i=new T.n(new Float32Array(3))
i.u(0,1,0)
r=s.e
q=r.a
q[0]=m[12]
q[1]=m[13]
q[2]=m[14]
q=new Float32Array(3)
h=new T.n(q)
h.Y(r)
q[0]=q[0]-p[0]
q[1]=q[1]-p[1]
q[2]=q[2]-p[2]
h.ba(0)
g=i.cb(h)
g.ba(0)
f=h.cb(g)
f.ba(0)
p=g.b6(r)
n=f.b6(r)
r=h.b6(r)
e=g.a
d=e[0]
c=f.a
b=c[0]
a=q[0]
a0=e[1]
a1=c[1]
a2=q[1]
e=e[2]
c=c[2]
q=q[2]
m[15]=1
m[14]=-r
m[13]=-n
m[12]=-p
m[11]=0
m[10]=q
m[9]=c
m[8]=e
m[7]=0
m[6]=a2
m[5]=a1
m[4]=a0
m[3]=0
m[2]=a
m[1]=b
m[0]=d
m[12]=l
m[13]=k
m[14]=j
d=s.f
b=d.a
b[0]=m[2]
b[1]=m[6]
b[2]=m[10]
s=-s.k1
a3=Math.sqrt(d.gb9())
l=b[0]/a3
k=b[1]/a3
j=b[2]/a3
a4=Math.cos(s)
a5=Math.sin(s)
a6=1-a4
a7=l*l*a6+a4
s=j*a5
a8=l*k*a6-s
b=k*a5
a9=l*j*a6+b
b0=k*l*a6+s
b1=k*k*a6+a4
s=l*a5
b2=k*j*a6-s
b3=j*l*a6-b
b4=j*k*a6+s
b5=j*j*a6+a4
s=m[0]
b=m[4]
d=m[8]
a=m[1]
a0=m[5]
a1=m[9]
a2=m[2]
e=m[6]
c=m[10]
q=m[3]
p=m[7]
n=m[11]
m[0]=s*a7+b*b0+d*b3
m[1]=a*a7+a0*b0+a1*b3
m[2]=a2*a7+e*b0+c*b3
m[3]=q*a7+p*b0+n*b3
m[4]=s*a8+b*b1+d*b4
m[5]=a*a8+a0*b1+a1*b4
m[6]=a2*a8+e*b1+c*b4
m[7]=q*a8+p*b1+n*b4
m[8]=s*a9+b*b2+d*b5
m[9]=a*a9+a0*b2+a1*b5
m[10]=a2*a9+e*b2+c*b5
m[11]=q*a9+p*b2+n*b5
n=this.c
p=this.e
q=this.f
n.aK(this.d,[p,q])
n.aK(this.r,[p,q])
this.x.aK(this.y,[this.z,q])
C.az.gee(window).aB(this)
this.Q.dv(t.a)},
$S:function(a){return{func:1,v:true,args:[P.a3]}}}
M.iN.prototype={
$1:function(a){this.b.H("uCubeTexture",G.md(this.a,"stars",a))
this.c.$1(0)},
$S:function(a){return{func:1,args:[P.h]}}}
J.a.prototype.d7=J.a.prototype.k
J.bo.prototype.d9=J.bo.prototype.k
P.R.prototype.d8=P.R.prototype.aD
W.Y.prototype.aI=W.Y.prototype.N
W.bN.prototype.da=W.bN.prototype.U;(function installTearOffs(){installTearOff(H.b4.prototype,"geO",0,0,0,null,["$0"],["aA"],0)
installTearOff(H.a1.prototype,"gcV",0,0,0,null,["$1"],["L"],2)
installTearOff(H.aJ.prototype,"gew",0,0,0,null,["$1"],["W"],2)
installTearOff(P,"nc",1,0,0,null,["$1"],["mT"],1)
installTearOff(P,"nd",1,0,0,null,["$1"],["mU"],1)
installTearOff(P,"ne",1,0,0,null,["$1"],["mV"],1)
installTearOff(P,"l9",1,0,0,null,["$0"],["na"],0)
installTearOff(P.F.prototype,"gbJ",0,0,0,null,["$2","$1"],["P","dM"],5)
installTearOff(P,"nj",1,0,0,null,["$2"],["mb"],7)
installTearOff(W,"no",1,0,0,null,["$4"],["mZ"],4)
installTearOff(W,"np",1,0,0,null,["$4"],["n_"],4)
installTearOff(W.cx.prototype,"gbb",0,1,0,null,["$0"],["bc"],3)
installTearOff(W.cR.prototype,"gbb",0,1,0,null,["$0"],["bc"],3)
installTearOff(R.cA.prototype,"geY",0,0,0,null,["$1"],["cr"],6)
installTearOff(M,"ld",1,0,0,null,["$0"],["nx"],0)})();(function inheritance(){inherit(P.D,null)
var t=P.D
inherit(H.je,t)
inherit(J.a,t)
inherit(J.dO,t)
inherit(P.R,t)
inherit(H.cn,t)
inherit(P.ci,t)
inherit(H.aT,t)
inherit(H.at,t)
inherit(H.i4,t)
inherit(H.b4,t)
inherit(H.hD,t)
inherit(H.aK,t)
inherit(H.i3,t)
inherit(H.hx,t)
inherit(H.cD,t)
inherit(H.h6,t)
inherit(H.ar,t)
inherit(H.a1,t)
inherit(H.aJ,t)
inherit(H.fA,t)
inherit(H.hc,t)
inherit(P.aS,t)
inherit(H.dh,t)
inherit(H.al,t)
inherit(P.aZ,t)
inherit(H.eU,t)
inherit(H.eW,t)
inherit(P.Q,t)
inherit(P.j9,t)
inherit(P.hy,t)
inherit(P.bF,t)
inherit(P.F,t)
inherit(P.cT,t)
inherit(P.bx,t)
inherit(P.fU,t)
inherit(P.jo,t)
inherit(P.aO,t)
inherit(P.im,t)
inherit(P.fH,t)
inherit(P.i0,t)
inherit(P.bH,t)
inherit(P.ji,t)
inherit(P.bI,t)
inherit(P.l,t)
inherit(P.i2,t)
inherit(P.ag,t)
inherit(P.E,t)
inherit(P.bj,t)
inherit(P.a3,t)
inherit(P.au,t)
inherit(P.cI,t)
inherit(P.jb,t)
inherit(P.hI,t)
inherit(P.ee,t)
inherit(P.h,t)
inherit(P.aY,t)
inherit(P.J,t)
inherit(P.b0,t)
inherit(P.o,t)
inherit(P.by,t)
inherit(P.jr,t)
inherit(W.dZ,t)
inherit(W.bG,t)
inherit(W.m,t)
inherit(W.cz,t)
inherit(W.bN,t)
inherit(W.ih,t)
inherit(W.cd,t)
inherit(W.cy,t)
inherit(W.jm,t)
inherit(W.js,t)
inherit(W.ib,t)
inherit(W.ds,t)
inherit(P.hZ,t)
inherit(P.i6,t)
inherit(G.f7,t)
inherit(G.dT,t)
inherit(G.ex,t)
inherit(G.eG,t)
inherit(G.cP,t)
inherit(G.cO,t)
inherit(G.y,t)
inherit(G.fI,t)
inherit(G.cN,t)
inherit(G.bC,t)
inherit(R.fQ,t)
inherit(T.a_,t)
inherit(T.x,t)
inherit(T.n,t)
inherit(T.am,t)
t=J.a
inherit(J.eQ,t)
inherit(J.cl,t)
inherit(J.bo,t)
inherit(J.aw,t)
inherit(J.aW,t)
inherit(J.ay,t)
inherit(H.bs,t)
inherit(H.b_,t)
inherit(W.d,t)
inherit(W.dK,t)
inherit(W.c1,t)
inherit(W.c2,t)
inherit(W.aR,t)
inherit(W.X,t)
inherit(W.cU,t)
inherit(W.e4,t)
inherit(W.e5,t)
inherit(W.e6,t)
inherit(W.c6,t)
inherit(W.c7,t)
inherit(W.cV,t)
inherit(W.c9,t)
inherit(W.cX,t)
inherit(W.e9,t)
inherit(W.f,t)
inherit(W.cZ,t)
inherit(W.eI,t)
inherit(W.d0,t)
inherit(W.aU,t)
inherit(W.aV,t)
inherit(W.eZ,t)
inherit(W.f3,t)
inherit(W.d4,t)
inherit(W.cx,t)
inherit(W.d7,t)
inherit(W.aa,t)
inherit(W.db,t)
inherit(W.cB,t)
inherit(W.dd,t)
inherit(W.ab,t)
inherit(W.di,t)
inherit(W.dl,t)
inherit(W.h5,t)
inherit(W.dn,t)
inherit(W.ha,t)
inherit(W.cR,t)
inherit(W.hj,t)
inherit(W.hl,t)
inherit(W.dt,t)
inherit(W.dv,t)
inherit(W.dx,t)
inherit(W.dz,t)
inherit(W.dB,t)
inherit(P.d2,t)
inherit(P.d9,t)
inherit(P.fu,t)
inherit(P.fv,t)
inherit(P.fy,t)
inherit(P.dj,t)
inherit(P.dq,t)
inherit(P.dP,t)
inherit(P.fC,t)
inherit(P.fD,t)
inherit(P.df,t)
t=J.bo
inherit(J.fs,t)
inherit(J.aH,t)
inherit(J.az,t)
inherit(J.jd,J.aw)
t=J.aW
inherit(J.ck,t)
inherit(J.cj,t)
t=P.R
inherit(H.j,t)
inherit(H.cp,t)
inherit(H.cS,t)
t=H.j
inherit(H.aX,t)
inherit(H.eV,t)
inherit(H.ec,H.cp)
t=P.ci
inherit(H.f1,t)
inherit(H.ho,t)
t=H.aX
inherit(H.bp,t)
inherit(P.eX,t)
t=H.at
inherit(H.iW,t)
inherit(H.iX,t)
inherit(H.hY,t)
inherit(H.hE,t)
inherit(H.eN,t)
inherit(H.eO,t)
inherit(H.i5,t)
inherit(H.h7,t)
inherit(H.h8,t)
inherit(H.iY,t)
inherit(H.iG,t)
inherit(H.iH,t)
inherit(H.iI,t)
inherit(H.iJ,t)
inherit(H.iK,t)
inherit(H.h2,t)
inherit(H.eR,t)
inherit(H.iC,t)
inherit(H.iD,t)
inherit(H.iE,t)
inherit(P.ht,t)
inherit(P.hs,t)
inherit(P.hu,t)
inherit(P.hv,t)
inherit(P.eF,t)
inherit(P.eE,t)
inherit(P.hJ,t)
inherit(P.hR,t)
inherit(P.hN,t)
inherit(P.hO,t)
inherit(P.hP,t)
inherit(P.hL,t)
inherit(P.hQ,t)
inherit(P.hK,t)
inherit(P.hU,t)
inherit(P.hV,t)
inherit(P.hT,t)
inherit(P.hS,t)
inherit(P.fX,t)
inherit(P.fY,t)
inherit(P.fV,t)
inherit(P.fW,t)
inherit(P.io,t)
inherit(P.ir,t)
inherit(P.i9,t)
inherit(P.i8,t)
inherit(P.ia,t)
inherit(P.f0,t)
inherit(P.ea,t)
inherit(P.eb,t)
inherit(W.ed,t)
inherit(W.fT,t)
inherit(W.hp,t)
inherit(W.hH,t)
inherit(W.fh,t)
inherit(W.fg,t)
inherit(W.ic,t)
inherit(W.id,t)
inherit(W.ik,t)
inherit(W.il,t)
inherit(P.is,t)
inherit(B.iR,t)
inherit(B.iS,t)
inherit(B.iT,t)
inherit(B.iU,t)
inherit(B.iV,t)
inherit(B.fm,t)
inherit(B.fn,t)
inherit(B.fo,t)
inherit(B.fp,t)
inherit(D.eY,t)
inherit(A.iB,t)
inherit(M.iM,t)
inherit(M.iN,t)
t=H.hx
inherit(H.b6,t)
inherit(H.bS,t)
t=P.aS
inherit(H.fi,t)
inherit(H.eS,t)
inherit(H.hh,t)
inherit(H.he,t)
inherit(H.dS,t)
inherit(H.fE,t)
inherit(P.c0,t)
inherit(P.bu,t)
inherit(P.a7,t)
inherit(P.hi,t)
inherit(P.hg,t)
inherit(P.b1,t)
inherit(P.dU,t)
inherit(P.e3,t)
t=H.h2
inherit(H.fP,t)
inherit(H.bi,t)
inherit(H.hq,P.c0)
inherit(P.co,P.aZ)
t=P.co
inherit(H.a9,t)
inherit(W.hw,t)
t=H.b_
inherit(H.f8,t)
inherit(H.ct,t)
t=H.ct
inherit(H.bJ,t)
inherit(H.bL,t)
inherit(H.bK,H.bJ)
inherit(H.cu,H.bK)
inherit(H.bM,H.bL)
inherit(H.cv,H.bM)
t=H.cu
inherit(H.cs,t)
inherit(H.f9,t)
t=H.cv
inherit(H.fa,t)
inherit(H.fb,t)
inherit(H.fc,t)
inherit(H.fd,t)
inherit(H.fe,t)
inherit(H.cw,t)
inherit(H.ff,t)
t=P.hy
inherit(P.hr,t)
inherit(P.ii,t)
inherit(P.i7,P.im)
inherit(P.i1,H.a9)
inherit(P.fG,P.fH)
inherit(P.hX,P.fG)
inherit(P.i_,P.hX)
inherit(P.cm,P.bI)
t=P.a3
inherit(P.W,t)
inherit(P.z,t)
t=P.a7
inherit(P.cC,t)
inherit(P.eM,t)
t=W.d
inherit(W.r,t)
inherit(W.ak,t)
inherit(W.ez,t)
inherit(W.bn,t)
inherit(W.br,t)
inherit(W.fw,t)
inherit(W.cE,t)
inherit(W.bO,t)
inherit(W.bQ,t)
inherit(W.hm,t)
inherit(W.hn,t)
inherit(W.bE,t)
inherit(W.jt,t)
inherit(P.dQ,t)
inherit(P.aP,t)
t=W.r
inherit(W.Y,t)
inherit(W.as,t)
inherit(W.bk,t)
t=W.Y
inherit(W.k,t)
inherit(P.v,t)
t=W.ak
inherit(W.c_,t)
inherit(W.eH,t)
inherit(W.f_,t)
t=W.k
inherit(W.dL,t)
inherit(W.dM,t)
inherit(W.ap,t)
inherit(W.aq,t)
inherit(W.c5,t)
inherit(W.eD,t)
inherit(W.cf,t)
inherit(W.av,t)
inherit(W.bq,t)
inherit(W.fF,t)
inherit(W.cK,t)
inherit(W.h0,t)
inherit(W.h1,t)
inherit(W.bz,t)
t=W.aR
inherit(W.dV,t)
inherit(W.dX,t)
inherit(W.dY,t)
inherit(W.e0,t)
t=W.X
inherit(W.dW,t)
inherit(W.e_,t)
inherit(W.e1,t)
inherit(W.aQ,W.cU)
inherit(W.e7,W.c7)
inherit(W.cW,W.cV)
inherit(W.c8,W.cW)
inherit(W.cY,W.cX)
inherit(W.e8,W.cY)
inherit(W.d_,W.cZ)
inherit(W.ey,W.d_)
inherit(W.d1,W.d0)
inherit(W.bm,W.d1)
inherit(W.cg,W.bk)
inherit(W.eJ,W.bn)
inherit(W.aG,W.f)
t=W.aG
inherit(W.aA,t)
inherit(W.K,t)
inherit(W.aF,t)
inherit(W.f5,W.br)
inherit(W.d5,W.d4)
inherit(W.f6,W.d5)
inherit(W.M,P.cm)
inherit(W.d8,W.d7)
inherit(W.bt,W.d8)
inherit(W.dc,W.db)
inherit(W.ft,W.dc)
inherit(W.bP,W.bO)
inherit(W.fK,W.bP)
inherit(W.de,W.dd)
inherit(W.fM,W.de)
inherit(W.fS,W.di)
inherit(W.dm,W.dl)
inherit(W.h3,W.dm)
inherit(W.bR,W.bQ)
inherit(W.h4,W.bR)
inherit(W.dp,W.dn)
inherit(W.h9,W.dp)
inherit(W.b2,W.bq)
inherit(W.aI,W.K)
inherit(W.du,W.dt)
inherit(W.hz,W.du)
inherit(W.hA,W.c9)
inherit(W.dw,W.dv)
inherit(W.hW,W.dw)
inherit(W.dy,W.dx)
inherit(W.d6,W.dy)
inherit(W.dA,W.dz)
inherit(W.ie,W.dA)
inherit(W.dC,W.dB)
inherit(W.ig,W.dC)
inherit(W.hB,W.hw)
inherit(W.hF,P.bx)
inherit(W.hC,W.hF)
inherit(W.hG,P.fU)
inherit(W.ij,W.bN)
inherit(P.S,P.i6)
t=P.v
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
inherit(P.er,t)
inherit(P.es,t)
inherit(P.et,t)
inherit(P.eu,t)
inherit(P.ev,t)
inherit(P.ew,t)
inherit(P.eA,t)
inherit(P.a8,t)
inherit(P.f2,t)
inherit(P.fq,t)
inherit(P.bw,t)
t=P.a8
inherit(P.eC,t)
inherit(P.Z,t)
inherit(P.eK,t)
inherit(P.h_,t)
inherit(P.bA,t)
inherit(P.hk,t)
inherit(P.d3,P.d2)
inherit(P.eT,P.d3)
inherit(P.da,P.d9)
inherit(P.fj,P.da)
inherit(P.fz,P.Z)
inherit(P.dk,P.dj)
inherit(P.fZ,P.dk)
inherit(P.bB,P.bA)
inherit(P.dr,P.dq)
inherit(P.hb,P.dr)
inherit(P.fk,P.aP)
inherit(P.dg,P.df)
inherit(P.fN,P.dg)
t=G.f7
inherit(G.fL,t)
inherit(G.hf,t)
inherit(G.f4,t)
inherit(G.fB,t)
inherit(G.dR,G.fL)
inherit(B.fl,G.dR)
t=G.hf
inherit(G.cq,t)
inherit(G.fr,t)
t=G.bC
inherit(G.eL,t)
inherit(G.e2,t)
inherit(R.cA,G.fr)
inherit(R.fR,R.fQ)
mixin(H.bJ,P.l)
mixin(H.bK,H.aT)
mixin(H.bL,P.l)
mixin(H.bM,H.aT)
mixin(P.bI,P.l)
mixin(W.cU,W.dZ)
mixin(W.cV,P.l)
mixin(W.cW,W.m)
mixin(W.cX,P.l)
mixin(W.cY,W.m)
mixin(W.cZ,P.l)
mixin(W.d_,W.m)
mixin(W.d0,P.l)
mixin(W.d1,W.m)
mixin(W.d4,P.l)
mixin(W.d5,W.m)
mixin(W.d7,P.l)
mixin(W.d8,W.m)
mixin(W.db,P.l)
mixin(W.dc,W.m)
mixin(W.bO,P.l)
mixin(W.bP,W.m)
mixin(W.dd,P.l)
mixin(W.de,W.m)
mixin(W.di,P.aZ)
mixin(W.dl,P.l)
mixin(W.dm,W.m)
mixin(W.bQ,P.l)
mixin(W.bR,W.m)
mixin(W.dn,P.l)
mixin(W.dp,W.m)
mixin(W.dt,P.l)
mixin(W.du,W.m)
mixin(W.dv,P.l)
mixin(W.dw,W.m)
mixin(W.dx,P.l)
mixin(W.dy,W.m)
mixin(W.dz,P.l)
mixin(W.dA,W.m)
mixin(W.dB,P.l)
mixin(W.dC,W.m)
mixin(P.d2,P.l)
mixin(P.d3,W.m)
mixin(P.d9,P.l)
mixin(P.da,W.m)
mixin(P.dj,P.l)
mixin(P.dk,W.m)
mixin(P.dq,P.l)
mixin(P.dr,W.m)
mixin(P.df,P.l)
mixin(P.dg,W.m)})();(function constants(){C.o=W.ap.prototype
C.w=W.aq.prototype
C.m=W.c1.prototype
C.p=W.c2.prototype
C.x=W.aQ.prototype
C.q=W.c5.prototype
C.M=W.c6.prototype
C.N=W.cf.prototype
C.r=W.cg.prototype
C.O=J.a.prototype
C.a=J.aw.prototype
C.z=J.cj.prototype
C.b=J.ck.prototype
C.P=J.cl.prototype
C.c=J.aW.prototype
C.i=J.ay.prototype
C.W=J.az.prototype
C.a_=H.cs.prototype
C.D=W.bt.prototype
C.E=J.fs.prototype
C.F=W.cB.prototype
C.K=W.cK.prototype
C.v=J.aH.prototype
C.ay=W.aI.prototype
C.az=W.bE.prototype
C.L=new P.hZ()
C.d=new P.i7()
C.y=new P.au(0)
C.Q=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.R=function(hooks) {
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

C.S=function(getTagFallback) {
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
C.T=function() {
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
C.U=function(hooks) {
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
C.V=function(hooks) {
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
C.X=H.B(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.o])
C.Y=makeConstList([34070,34069,34072,34071,34074,34073])
C.Z=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.C=makeConstList([])
C.t=H.B(makeConstList(["bind","if","ref","repeat","syntax"]),[P.o])
C.u=H.B(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.o])
C.a0=new G.y("vec3","vertex btangents",0)
C.e=new G.y("vec3","",0)
C.a1=new G.y("vec4","delta from light",0)
C.n=new G.y("","",0)
C.G=new G.y("vec3","vertex coordinates",0)
C.a2=new G.y("vec3","vertex binormals",0)
C.H=new G.y("vec4","for wireframe",0)
C.a3=new G.y("vec4","per vertex color",0)
C.a4=new G.y("float","for normal maps",0)
C.j=new G.y("mat4","",0)
C.a6=new G.y("mat4","",4)
C.a5=new G.y("mat4","",128)
C.f=new G.y("float","",0)
C.a7=new G.y("float","",4)
C.a8=new G.y("float","depth for shadowmaps",0)
C.h=new G.y("sampler2D","",0)
C.a9=new G.y("float","for bump maps",0)
C.aa=new G.y("vec2","texture uvs",0)
C.ab=new G.y("float","time since program start in sec",0)
C.k=new G.y("vec2","",0)
C.ac=new G.y("samplerCube","",0)
C.l=new G.y("vec4","",0)
C.ad=new G.y("vec3","vertex normals",0)
C.ae=new G.y("sampler2DShadow","",0)
C.I=new G.y("vec3","per vertex color",0)
C.J=new G.y("mat3","",0)
C.af=new G.y("vec3","vertex tangents",0)
C.ag=H.G("nH")
C.ah=H.G("nI")
C.ai=H.G("eB")
C.aj=H.G("nJ")
C.ak=H.G("nK")
C.al=H.G("kl")
C.am=H.G("nL")
C.an=H.G("ko")
C.ao=H.G("J")
C.ap=H.G("o")
C.aq=H.G("kO")
C.ar=H.G("kP")
C.as=H.G("nN")
C.at=H.G("kQ")
C.au=H.G("ag")
C.av=H.G("W")
C.aw=H.G("z")
C.ax=H.G("a3")})();(function staticFields(){$.kv="$cachedFunction"
$.kw="$cachedInvocation"
$.k6=null
$.k4=null
$.jy=!1
$.jD=null
$.l6=null
$.lo=null
$.iv=null
$.iF=null
$.jE=null
$.b7=null
$.bT=null
$.bU=null
$.jz=!1
$.w=C.d
$.ki=0
$.aj=null
$.ja=null
$.kh=null
$.kg=null
$.ke=null
$.kd=null
$.kc=null
$.kb=null
$.ng=0
$.nh=0
$.jI=0
$.lk=0
$.bY=0
$.bZ=0
$.nE=!1
$.le=0})();(function lazyInitializers(){lazy($,"ka","$get$ka",function(){return H.lh("_$dart_dartClosure")})
lazy($,"jf","$get$jf",function(){return H.lh("_$dart_js")})
lazy($,"km","$get$km",function(){return H.mu()})
lazy($,"kn","$get$kn",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.ki
$.ki=t+1
t="expando$key$"+t}return new P.ee(t,null,[P.z])})
lazy($,"kD","$get$kD",function(){return H.ac(H.hd({
toString:function(){return"$receiver$"}}))})
lazy($,"kE","$get$kE",function(){return H.ac(H.hd({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"kF","$get$kF",function(){return H.ac(H.hd(null))})
lazy($,"kG","$get$kG",function(){return H.ac(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kK","$get$kK",function(){return H.ac(H.hd(void 0))})
lazy($,"kL","$get$kL",function(){return H.ac(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kI","$get$kI",function(){return H.ac(H.kJ(null))})
lazy($,"kH","$get$kH",function(){return H.ac(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"kN","$get$kN",function(){return H.ac(H.kJ(void 0))})
lazy($,"kM","$get$kM",function(){return H.ac(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"jv","$get$jv",function(){return P.mS()})
lazy($,"kk","$get$kk",function(){return P.mX(null,P.J)})
lazy($,"bV","$get$bV",function(){return[]})
lazy($,"k9","$get$k9",function(){return{}})
lazy($,"kX","$get$kX",function(){return P.jj(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"jw","$get$jw",function(){return P.V()})
lazy($,"iu","$get$iu",function(){return P.kp(P.z,P.ag)})
lazy($,"bX","$get$bX",function(){return P.kp(P.o,P.ag)})
lazy($,"kA","$get$kA",function(){return new G.cP(1281,0,4294967295)})
lazy($,"k2","$get$k2",function(){return G.kC(1281,1281,1281)})
lazy($,"k1","$get$k1",function(){return G.kC(32774,770,769)})
lazy($,"N","$get$N",function(){return P.aB(["cBlendEquation",C.n,"cDepthWrite",C.n,"cDepthTest",C.n,"cStencilFunc",C.n,"tPosition",C.e,"tSpeed",C.e,"tForce",C.e,"aColors",C.I,"aColorAlpha",C.a3,"aPosition",C.G,"aTexUV",C.aa,"aNormal",C.ad,"aBinormal",C.a2,"aCenter",C.H,"aPointSize",C.f,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.af,"aBitangent",C.a0,"iaRotation",C.l,"iaTranslation",C.e,"iaScale",C.e,"vColor",C.I,"vTexUV",C.k,"vLightWeighting",C.e,"vNormal",C.e,"vPosition",C.G,"vPositionFromLight",C.a1,"vCenter",C.H,"vDepth",C.a8,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.J,"uConvolutionMatrix",C.J,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.ae,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.ac,"uAnimationTable",C.h,"uTime",C.ab,"uCameraNear",C.f,"uCameraFar",C.f,"uFogNear",C.f,"uFogFar",C.f,"uPointSize",C.f,"uScale",C.f,"uAngle",C.f,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.f,"uShininess",C.f,"uShadowBias",C.f,"uOpacity",C.f,"uColor",C.e,"uAmbientDiffuse",C.e,"uColorEmissive",C.e,"uColorSpecular",C.e,"uColorDiffuse",C.e,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.e,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a5,"uLightDescs",C.a6,"uLightCount",C.f,"uLightTypes",C.a7,"uBumpScale",C.a9,"uNormalScale",C.a4])})
lazy($,"kS","$get$kS",function(){return C.L})
lazy($,"lc","$get$lc",function(){var t=G.fJ("CubeMap")
t.bt(["aPosition"])
t.bu(["vPosition"])
t.aq(["uPerspectiveViewMatrix","uModelMatrix"])
t.as(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vPosition = normalize(aPosition);"])
return t})
lazy($,"lb","$get$lb",function(){var t=G.fJ("CubeMapF")
t.bu(["vPosition"])
t.aq(["uCubeTexture"])
t.as(["oFragColor = texture( uCubeTexture, vPosition );"])
return t})
lazy($,"ln","$get$ln",function(){var t=G.fJ("PointSpritesV")
t.bt(["aPosition"])
t.aq(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"])
t.as(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"])
return t})
lazy($,"lm","$get$lm",function(){var t=G.fJ("PointSpritesF")
t.aq(["uTexture"])
t.as(["oFragColor = texture( uTexture,  gl_PointCoord);"])
return t})
lazy($,"kU","$get$kU",function(){return[T.bD(0,0,1),T.bD(0,0,-1),T.bD(0,1,0),T.bD(0,-1,0),T.bD(1,0,0),T.bD(-1,0,0)]})
lazy($,"l0","$get$l0",function(){return["nx","px","ny","py","nz","pz"]})})()
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
mangledGlobalNames:{z:"int",W:"double",a3:"num",o:"String",ag:"bool",J:"Null",h:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.r},{func:1,ret:P.ag,args:[W.Y,P.o,P.o,W.bG]},{func:1,v:true,args:[P.D],opt:[P.b0]},{func:1,v:true,args:[W.f]},{func:1,ret:P.z,args:[P.E,P.E]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,Blob:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSCharsetRule:J.a,CSSConditionRule:J.a,CSSFontFaceRule:J.a,CSSGroupingRule:J.a,CSSImportRule:J.a,CSSKeyframeRule:J.a,MozCSSKeyframeRule:J.a,WebKitCSSKeyframeRule:J.a,CSSKeyframesRule:J.a,MozCSSKeyframesRule:J.a,WebKitCSSKeyframesRule:J.a,CSSMediaRule:J.a,CSSNamespaceRule:J.a,CSSPageRule:J.a,CSSRule:J.a,CSSStyleRule:J.a,CSSStyleSheet:J.a,CSSSupportsRule:J.a,CSSVariableReferenceValue:J.a,CSSViewportRule:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,File:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,Gamepad:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MimeType:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechGrammar:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,StyleSheet:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,Touch:J.a,TrackDefault:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGLength:J.a,SVGMatrix:J.a,SVGNumber:J.a,SVGPreserveAspectRatio:J.a,SVGTransform:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioParamMap:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bs,ArrayBufferView:H.b_,DataView:H.f8,Float32Array:H.cs,Float64Array:H.f9,Int16Array:H.fa,Int32Array:H.fb,Int8Array:H.fc,Uint16Array:H.fd,Uint32Array:H.fe,Uint8ClampedArray:H.cw,CanvasPixelArray:H.cw,Uint8Array:H.ff,HTMLBRElement:W.k,HTMLBaseElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLInputElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMenuElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTextAreaElement:W.k,HTMLTimeElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLFrameSetElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,Accelerometer:W.c_,LinearAccelerationSensor:W.c_,AccessibleNodeList:W.dK,HTMLAnchorElement:W.dL,HTMLAreaElement:W.dM,HTMLBodyElement:W.ap,HTMLCanvasElement:W.aq,CanvasGradient:W.c1,CanvasRenderingContext2D:W.c2,CDATASection:W.as,CharacterData:W.as,Comment:W.as,ProcessingInstruction:W.as,Text:W.as,CSSPerspective:W.dV,CSSPositionValue:W.dW,CSSRotation:W.dX,CSSScale:W.dY,CSSStyleDeclaration:W.aQ,MSStyleCSSProperties:W.aQ,CSS2Properties:W.aQ,CSSImageValue:W.X,CSSKeywordValue:W.X,CSSNumericValue:W.X,CSSResourceValue:W.X,CSSUnitValue:W.X,CSSURLImageValue:W.X,CSSStyleValue:W.X,CSSMatrixComponent:W.aR,CSSSkew:W.aR,CSSTransformComponent:W.aR,CSSTransformValue:W.e_,CSSTranslation:W.e0,CSSUnparsedValue:W.e1,DataTransferItemList:W.e4,DeviceAcceleration:W.e5,HTMLDivElement:W.c5,XMLDocument:W.bk,Document:W.bk,DOMException:W.e6,DOMImplementation:W.c6,DOMPoint:W.e7,DOMPointReadOnly:W.c7,ClientRectList:W.c8,DOMRectList:W.c8,DOMRectReadOnly:W.c9,DOMStringList:W.e8,DOMTokenList:W.e9,Element:W.Y,AbortPaymentEvent:W.f,AnimationEvent:W.f,AnimationPlaybackEvent:W.f,ApplicationCacheErrorEvent:W.f,BackgroundFetchClickEvent:W.f,BackgroundFetchEvent:W.f,BackgroundFetchFailEvent:W.f,BackgroundFetchedEvent:W.f,BeforeInstallPromptEvent:W.f,BeforeUnloadEvent:W.f,BlobEvent:W.f,CanMakePaymentEvent:W.f,ClipboardEvent:W.f,CloseEvent:W.f,CustomEvent:W.f,DeviceMotionEvent:W.f,DeviceOrientationEvent:W.f,ErrorEvent:W.f,ExtendableEvent:W.f,ExtendableMessageEvent:W.f,FetchEvent:W.f,FontFaceSetLoadEvent:W.f,ForeignFetchEvent:W.f,GamepadEvent:W.f,HashChangeEvent:W.f,InstallEvent:W.f,MediaEncryptedEvent:W.f,MediaKeyMessageEvent:W.f,MediaQueryListEvent:W.f,MediaStreamEvent:W.f,MediaStreamTrackEvent:W.f,MessageEvent:W.f,MIDIConnectionEvent:W.f,MIDIMessageEvent:W.f,MutationEvent:W.f,NotificationEvent:W.f,PageTransitionEvent:W.f,PaymentRequestEvent:W.f,PaymentRequestUpdateEvent:W.f,PopStateEvent:W.f,PresentationConnectionAvailableEvent:W.f,PresentationConnectionCloseEvent:W.f,ProgressEvent:W.f,PromiseRejectionEvent:W.f,PushEvent:W.f,RTCDataChannelEvent:W.f,RTCDTMFToneChangeEvent:W.f,RTCPeerConnectionIceEvent:W.f,RTCTrackEvent:W.f,SecurityPolicyViolationEvent:W.f,SensorErrorEvent:W.f,SpeechRecognitionError:W.f,SpeechRecognitionEvent:W.f,SpeechSynthesisEvent:W.f,StorageEvent:W.f,SyncEvent:W.f,TrackEvent:W.f,TransitionEvent:W.f,WebKitTransitionEvent:W.f,VRDeviceEvent:W.f,VRDisplayEvent:W.f,VRSessionEvent:W.f,MojoInterfaceRequestEvent:W.f,ResourceProgressEvent:W.f,USBConnectionEvent:W.f,IDBVersionChangeEvent:W.f,AudioProcessingEvent:W.f,OfflineAudioCompletionEvent:W.f,WebGLContextEvent:W.f,Event:W.f,InputEvent:W.f,AccessibleNode:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RemotePlayback:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SourceBuffer:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,TextTrack:W.d,TextTrackCue:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,VTTCue:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,ServiceWorker:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,FileList:W.ey,FileWriter:W.ez,HTMLFormElement:W.eD,Gyroscope:W.eH,HTMLHeadElement:W.cf,History:W.eI,HTMLCollection:W.bm,HTMLFormControlsCollection:W.bm,HTMLOptionsCollection:W.bm,HTMLDocument:W.cg,XMLHttpRequest:W.eJ,XMLHttpRequestUpload:W.bn,XMLHttpRequestEventTarget:W.bn,ImageBitmap:W.aU,ImageData:W.aV,HTMLImageElement:W.av,KeyboardEvent:W.aA,Location:W.eZ,Magnetometer:W.f_,HTMLAudioElement:W.bq,HTMLMediaElement:W.bq,MediaList:W.f3,MIDIOutput:W.f5,MIDIInput:W.br,MIDIPort:W.br,MimeTypeArray:W.f6,PointerEvent:W.K,MouseEvent:W.K,DragEvent:W.K,DocumentFragment:W.r,ShadowRoot:W.r,Attr:W.r,DocumentType:W.r,Node:W.r,NodeIterator:W.cx,NodeList:W.bt,RadioNodeList:W.bt,Plugin:W.aa,PluginArray:W.ft,PresentationConnection:W.fw,Range:W.cB,RTCDataChannel:W.cE,DataChannel:W.cE,HTMLSelectElement:W.fF,AbsoluteOrientationSensor:W.ak,AmbientLightSensor:W.ak,OrientationSensor:W.ak,RelativeOrientationSensor:W.ak,Sensor:W.ak,SourceBufferList:W.fK,SpeechGrammarList:W.fM,SpeechRecognitionResult:W.ab,Storage:W.fS,HTMLTableElement:W.cK,HTMLTableRowElement:W.h0,HTMLTableSectionElement:W.h1,HTMLTemplateElement:W.bz,TextTrackCueList:W.h3,TextTrackList:W.h4,TimeRanges:W.h5,TouchEvent:W.aF,TouchList:W.h9,TrackDefaultList:W.ha,TreeWalker:W.cR,CompositionEvent:W.aG,FocusEvent:W.aG,TextEvent:W.aG,UIEvent:W.aG,URL:W.hj,VRStageBoundsPoint:W.hl,HTMLVideoElement:W.b2,VideoTrackList:W.hm,WebSocket:W.hn,WheelEvent:W.aI,Window:W.bE,DOMWindow:W.bE,CSSRuleList:W.hz,DOMRect:W.hA,GamepadList:W.hW,NamedNodeMap:W.d6,MozNamedAttrMap:W.d6,SpeechRecognitionResultList:W.ie,StyleSheetList:W.ig,SVGFEBlendElement:P.ef,SVGFEColorMatrixElement:P.eg,SVGFEComponentTransferElement:P.eh,SVGFECompositeElement:P.ei,SVGFEConvolveMatrixElement:P.ej,SVGFEDiffuseLightingElement:P.ek,SVGFEDisplacementMapElement:P.el,SVGFEFloodElement:P.em,SVGFEGaussianBlurElement:P.en,SVGFEImageElement:P.eo,SVGFEMergeElement:P.ep,SVGFEMorphologyElement:P.eq,SVGFEOffsetElement:P.er,SVGFEPointLightElement:P.es,SVGFESpecularLightingElement:P.et,SVGFESpotLightElement:P.eu,SVGFETileElement:P.ev,SVGFETurbulenceElement:P.ew,SVGFilterElement:P.eA,SVGForeignObjectElement:P.eC,SVGCircleElement:P.Z,SVGEllipseElement:P.Z,SVGLineElement:P.Z,SVGPathElement:P.Z,SVGPolygonElement:P.Z,SVGPolylineElement:P.Z,SVGGeometryElement:P.Z,SVGAElement:P.a8,SVGClipPathElement:P.a8,SVGDefsElement:P.a8,SVGGElement:P.a8,SVGSwitchElement:P.a8,SVGGraphicsElement:P.a8,SVGImageElement:P.eK,SVGLengthList:P.eT,SVGMaskElement:P.f2,SVGNumberList:P.fj,SVGPatternElement:P.fq,SVGPoint:P.fu,SVGPointList:P.fv,SVGRect:P.fy,SVGRectElement:P.fz,SVGScriptElement:P.bw,SVGStringList:P.fZ,SVGAnimateElement:P.v,SVGAnimateMotionElement:P.v,SVGAnimateTransformElement:P.v,SVGAnimationElement:P.v,SVGDescElement:P.v,SVGDiscardElement:P.v,SVGFEDistantLightElement:P.v,SVGFEFuncAElement:P.v,SVGFEFuncBElement:P.v,SVGFEFuncGElement:P.v,SVGFEFuncRElement:P.v,SVGFEMergeNodeElement:P.v,SVGLinearGradientElement:P.v,SVGMarkerElement:P.v,SVGMetadataElement:P.v,SVGRadialGradientElement:P.v,SVGSetElement:P.v,SVGStopElement:P.v,SVGStyleElement:P.v,SVGSymbolElement:P.v,SVGTitleElement:P.v,SVGViewElement:P.v,SVGGradientElement:P.v,SVGComponentTransferFunctionElement:P.v,SVGFEDropShadowElement:P.v,SVGMPathElement:P.v,SVGElement:P.v,SVGSVGElement:P.h_,SVGTextPathElement:P.bA,SVGTextContentElement:P.bA,SVGTSpanElement:P.bB,SVGTextElement:P.bB,SVGTextPositioningElement:P.bB,SVGTransformList:P.hb,SVGUseElement:P.hk,AudioBuffer:P.dP,AudioTrackList:P.dQ,AudioContext:P.aP,webkitAudioContext:P.aP,BaseAudioContext:P.aP,OfflineAudioContext:P.fk,WebGLRenderingContext:P.fC,WebGL2RenderingContext:P.fD,SQLResultSetRowList:P.fN})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,Blob:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSStyleSheet:true,CSSSupportsRule:true,CSSVariableReferenceValue:true,CSSViewportRule:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,File:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,Gamepad:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechGrammar:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,StyleSheet:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,Touch:true,TrackDefault:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGLength:true,SVGMatrix:true,SVGNumber:true,SVGPreserveAspectRatio:true,SVGTransform:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioParamMap:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,Accelerometer:true,LinearAccelerationSensor:true,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasGradient:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSPositionValue:true,CSSRotation:true,CSSScale:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSSkew:true,CSSTransformComponent:false,CSSTransformValue:true,CSSTranslation:true,CSSUnparsedValue:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMPoint:true,DOMPointReadOnly:false,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AccessibleNode:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnectionList:true,PresentationRequest:true,RemotePlayback:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SourceBuffer:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,TextTrack:true,TextTrackCue:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,VTTCue:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,ServiceWorker:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,FileList:true,FileWriter:true,HTMLFormElement:true,Gyroscope:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,ImageBitmap:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,Magnetometer:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,PresentationConnection:true,Range:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,AbsoluteOrientationSensor:true,AmbientLightSensor:true,OrientationSensor:true,RelativeOrientationSensor:true,Sensor:false,SourceBufferList:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VRStageBoundsPoint:true,HTMLVideoElement:true,VideoTrackList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGAElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLengthList:true,SVGMaskElement:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMetadataElement:true,SVGRadialGradientElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSymbolElement:true,SVGTitleElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGSVGElement:true,SVGTextPathElement:true,SVGTextContentElement:false,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransformList:true,SVGUseElement:true,AudioBuffer:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.ct.$nativeSuperclassTag="ArrayBufferView"
H.bJ.$nativeSuperclassTag="ArrayBufferView"
H.bK.$nativeSuperclassTag="ArrayBufferView"
H.cu.$nativeSuperclassTag="ArrayBufferView"
H.bL.$nativeSuperclassTag="ArrayBufferView"
H.bM.$nativeSuperclassTag="ArrayBufferView"
H.cv.$nativeSuperclassTag="ArrayBufferView"
W.bO.$nativeSuperclassTag="EventTarget"
W.bP.$nativeSuperclassTag="EventTarget"
W.bQ.$nativeSuperclassTag="EventTarget"
W.bR.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.lq(M.ld(),b)},[])
else (function(b){H.lq(M.ld(),b)})([])})})()