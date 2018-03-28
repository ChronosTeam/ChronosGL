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
a[c]=function(){a[c]=function(){H.nH(b)}
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
if(v[t][a])return v[t][a]}}var C={},H={jc:function jc(a){this.a=a},
jj:function(a,b,c,d){if(!!a.$isj)return new H.ea(a,b,[c,d])
return new H.cp(a,b,[c,d])},
ch:function(){return new P.b1("No element")},
mw:function(){return new P.b1("Too many elements")},
mv:function(){return new P.b1("Too few elements")},
mN:function(a,b){H.cH(a,0,J.bf(a)-1,b)},
cH:function(a,b,c,d){if(c-b<=32)H.mM(a,b,c,d)
else H.mL(a,b,c,d)},
mM:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.U(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.a5(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
mL:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.b(t>32)
s=C.b.I(t+1,6)
r=a3+s
q=a4-s
p=C.b.I(a3+a4,2)
o=p-s
n=p+s
t=J.U(a2)
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
if(J.B(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=t.h(a2,e)
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
H.cH(a2,a3,g-2,a5)
H.cH(a2,f+2,a4,a5)
if(a0)return
if(g<r&&f>q){for(;J.B(a5.$2(t.h(a2,g),l),0);)++g
for(;J.B(a5.$2(t.h(a2,f),j),0);)--f
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
break}}H.cH(a2,g,f,a5)}else H.cH(a2,g,f,a5)},
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
ea:function ea(a,b,c){this.a=a
this.b=b
this.$ti=c},
f_:function f_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bo:function bo(a,b,c){this.a=a
this.b=b
this.$ti=c},
cT:function cT(a,b,c){this.a=a
this.b=b
this.$ti=c},
hm:function hm(a,b,c){this.a=a
this.b=b
this.$ti=c},
aS:function aS(){},
dE:function(a,b){var t=a.ag(b)
if(!u.globalState.d.cy)u.globalState.f.an()
return t},
iu:function(){++u.globalState.f.b},
iJ:function(){--u.globalState.f.b
H.b(u.globalState.f.b>=0)},
lj:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.p(s).$ish)throw H.c(P.dM("Arguments to main must be a List: "+H.e(s)))
u.globalState=new H.i2(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$kk()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.hB(P.ji(null,H.aJ),0)
q=P.y
s.seP(new H.a8(0,null,null,null,null,null,0,[q,H.b4]))
s.seR(new H.a8(0,null,null,null,null,null,0,[q,null]))
if(s.x){r=new H.i1()
s.Q=r
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.mq,r)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.n1)}if(u.globalState.x)return
o=H.kT()
u.globalState.e=o
u.globalState.z.i(0,o.a,o)
u.globalState.d=o
if(H.bc(a,{func:1,args:[P.I]}))o.ag(new H.iU(t,a))
else if(H.bc(a,{func:1,args:[P.I,P.I]}))o.ag(new H.iV(t,a))
else o.ag(a)
u.globalState.f.an()},
n1:function(a){var t=P.az(["command","print","msg",a])
return new H.a1(!0,P.b5(null,P.y)).J(t)},
kT:function(){var t,s
t=u.globalState.a++
s=P.y
t=new H.b4(t,new H.a8(0,null,null,null,null,null,0,[s,H.cD]),P.aA(null,null,null,s),u.createNewIsolate(),new H.cD(0,null,!1),new H.aq(H.li()),new H.aq(H.li()),!1,!1,[],P.aA(null,null,null,null),null,null,!1,!0,P.aA(null,null,null,null))
t.dF()
return t},
ms:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.mt()
return},
mt:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.c(P.t("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.c(P.t('Cannot extract URI from "'+t+'"'))},
mq:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=new H.aI(!0,[]).V(b.data)
s=J.U(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.nu(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.aI(!0,[]).V(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.aI(!0,[]).V(s.h(t,"replyTo"))
k=H.kT()
u.globalState.f.a.S(0,new H.aJ(k,new H.eL(q,p,o,n,m,l),"worker-start"))
u.globalState.d=k
u.globalState.f.an()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.lU(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.an()
break
case"close":u.globalState.ch.am(0,$.$get$kl().h(0,a))
a.terminate()
u.globalState.f.an()
break
case"log":H.mp(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
j=P.az(["command","print","msg",t])
j=new H.a1(!0,P.b5(null,P.y)).J(j)
s.toString
self.postMessage(j)}else P.a4(s.h(t,"msg"))
break
case"error":throw H.c(s.h(t,"msg"))}},
mp:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.az(["command","log","msg",a])
r=new H.a1(!0,P.b5(null,P.y)).J(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.H(q)
t=H.a2(q)
s=P.cb(t)
throw H.c(s)}},
mr:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.ku=$.ku+("_"+s)
$.kv=$.kv+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.H(0,["spawned",new H.b6(s,r),q,t.r])
r=new H.eM(t,d,a,c,b)
if(e){t.bZ(q,q)
u.globalState.f.a.S(0,new H.aJ(t,r,"start isolate"))}else r.$0()},
mO:function(a,b){var t=new H.h4(!0,!1,null,0)
t.dw(a,b)
return t},
n3:function(a){return new H.aI(!0,[]).V(new H.a1(!1,P.b5(null,P.y)).J(a))},
iU:function iU(a,b){this.a=a
this.b=b},
iV:function iV(a,b){this.a=a
this.b=b},
i2:function i2(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
hW:function hW(a,b){this.a=a
this.b=b},
hB:function hB(a,b){this.a=a
this.b=b},
hC:function hC(a){this.a=a},
aJ:function aJ(a,b,c){this.a=a
this.b=b
this.c=c},
i1:function i1(){},
eL:function eL(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eM:function eM(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hv:function hv(){},
b6:function b6(a,b){this.b=a
this.a=b},
i3:function i3(a,b){this.a=a
this.b=b},
bQ:function bQ(a,b,c){this.b=a
this.c=b
this.a=c},
cD:function cD(a,b,c){this.a=a
this.b=b
this.c=c},
h4:function h4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h5:function h5(a,b){this.a=a
this.b=b},
h6:function h6(a,b){this.a=a
this.b=b},
aq:function aq(a){this.a=a},
a1:function a1(a,b){this.a=a
this.b=b},
aI:function aI(a,b){this.a=a
this.b=b},
no:function(a){return u.types[a]},
nw:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.p(a).$isr},
e:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.bg(a)
if(typeof t!=="string")throw H.c(H.N(a))
return t},
mI:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t=J.av(t)
s=t[0]
r=t[1]
return new H.fy(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aB:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
bu:function(a){var t,s,r,q,p,o,n,m,l
t=J.p(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.O||!!J.p(a).$isaF){p=C.B(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.i.aP(q,0)===36)q=C.i.d8(q,1)
l=H.dG(H.iw(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+l,u.mangledGlobalNames)},
K:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mG:function(a){return a.b?H.K(a).getUTCFullYear()+0:H.K(a).getFullYear()+0},
mE:function(a){return a.b?H.K(a).getUTCMonth()+1:H.K(a).getMonth()+1},
mA:function(a){return a.b?H.K(a).getUTCDate()+0:H.K(a).getDate()+0},
mB:function(a){return a.b?H.K(a).getUTCHours()+0:H.K(a).getHours()+0},
mD:function(a){return a.b?H.K(a).getUTCMinutes()+0:H.K(a).getMinutes()+0},
mF:function(a){return a.b?H.K(a).getUTCSeconds()+0:H.K(a).getSeconds()+0},
mC:function(a){return a.b?H.K(a).getUTCMilliseconds()+0:H.K(a).getMilliseconds()+0},
kt:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.c(H.N(a))
return a[b]},
bb:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a6(!0,b,"index",null)
t=J.bf(a)
if(b<0||C.b.cT(b,t))return P.z(b,a,"index",null,t)
return P.fv(b,"index",null)},
N:function(a){return new P.a6(!0,a,null,null)},
c:function(a){var t
if(a==null)a=new P.bt()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.ln})
t.name=""}else t.toString=H.ln
return t},
ln:function(){return J.bg(this.dartException)},
G:function(a){throw H.c(a)},
O:function(a){throw H.c(P.ah(a))},
ab:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.ha(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
hb:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
kF:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
ks:function(a,b){return new H.fg(a,b==null?null:b.method)},
je:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.eQ(a,s,t?null:b.receiver)},
H:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.iW(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aZ(r,16)&8191)===10)switch(q){case 438:return t.$1(H.je(H.e(s)+" (Error "+q+")",null))
case 445:case 5007:return t.$1(H.ks(H.e(s)+" (Error "+q+")",null))}}if(a instanceof TypeError){p=$.$get$kz()
o=$.$get$kA()
n=$.$get$kB()
m=$.$get$kC()
l=$.$get$kG()
k=$.$get$kH()
j=$.$get$kE()
$.$get$kD()
i=$.$get$kJ()
h=$.$get$kI()
g=p.N(s)
if(g!=null)return t.$1(H.je(s,g))
else{g=o.N(s)
if(g!=null){g.method="call"
return t.$1(H.je(s,g))}else{g=n.N(s)
if(g==null){g=m.N(s)
if(g==null){g=l.N(s)
if(g==null){g=k.N(s)
if(g==null){g=j.N(s)
if(g==null){g=m.N(s)
if(g==null){g=i.N(s)
if(g==null){g=h.N(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return t.$1(H.ks(s,g))}}return t.$1(new H.hf(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.cK()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.a6(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.cK()
return a},
a2:function(a){var t
if(a==null)return new H.di(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.di(a,null)},
nA:function(a){if(a==null||typeof a!='object')return J.be(a)
else return H.aB(a)},
nm:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=a.length
for(r=0;r<s;){q=r+1
H.b(t)
p=a[r]
r=q+1
H.b(t)
b.i(0,p,a[q])}return b},
nv:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dE(b,new H.iE(a))
case 1:return H.dE(b,new H.iF(a,d))
case 2:return H.dE(b,new H.iG(a,d,e))
case 3:return H.dE(b,new H.iH(a,d,e,f))
case 4:return H.dE(b,new H.iI(a,d,e,f,g))}throw H.c(P.cb("Unsupported number of arguments for wrapped closure"))},
ba:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.nv)
a.$identity=t
return t},
ma:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.p(c).$ish){t.$reflectionInfo=c
r=H.mI(t).r}else r=c
q=d?Object.create(new H.fM().constructor.prototype):Object.create(new H.bh(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.k5(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.no,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.k2:H.j6
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.c("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.k5(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
m7:function(a,b,c,d){var t=H.j6
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
k5:function(a,b,c){var t,s,r,q
if(c)return H.m9(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.m7(s,b==null?r!=null:b!==r,t,b)
return q},
m8:function(a,b,c,d){var t,s
t=H.j6
s=H.k2
switch(b?-1:a){case 0:throw H.c(H.mJ("Intercepted function with no arguments."))
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
t=$.k3
if(t==null){t=H.k0("self")
$.k3=t}t=$.k1
if(t==null){t=H.k0("receiver")
$.k1=t}s=b.$stubName
r=b.length
q=a[s]
t=H.m8(r,b==null?q!=null:b!==q,s,b)
return t},
jB:function(a,b,c,d,e,f){var t,s
t=J.av(b)
s=!!J.p(c).$ish?J.av(c):c
return H.ma(a,t,s,!!d,e,f)},
j6:function(a){return a.a},
k2:function(a){return a.c},
k0:function(a){var t,s,r,q,p
t=new H.bh("self","target","receiver","name")
s=J.av(Object.getOwnPropertyNames(t))
for(r=s.length,q=0;q<r;++q){p=s[q]
if(t[p]===a)return p}},
nX:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.ac(a,"String"))},
nS:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.ac(a,"double"))},
nW:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.ac(a,"num"))},
ng:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.ac(a,"bool"))},
nu:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.ac(a,"int"))},
nC:function(a,b){throw H.c(H.ac(a,b.substring(3)))},
nB:function(a,b){var t=J.U(b)
throw H.c(H.k4(a,t.bv(b,3,t.gj(b))))},
jF:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.p(a)[b])return a
H.nC(a,b)},
an:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.p(a)[b]
else t=!0
if(t)return a
H.nB(a,b)},
nV:function(a){if(a==null)return a
if(!!J.p(a).$ish)return a
throw H.c(H.ac(a,"List"))},
jC:function(a){var t=J.p(a)
return"$S" in t?t.$S():null},
bc:function(a,b){var t,s
if(a==null)return!1
t=H.jC(a)
if(t==null)s=!1
else s=H.la(t,b)
return s},
nT:function(a,b){var t,s
if(a==null)return a
if($.jy)return a
$.jy=!0
try{if(H.bc(a,b))return a
t=H.iO(b,null)
s=H.ac(a,t)
throw H.c(s)}finally{$.jy=!1}},
ac:function(a,b){return new H.hc("TypeError: "+H.e(P.ca(a))+": type '"+H.kZ(a)+"' is not a subtype of type '"+b+"'")},
k4:function(a,b){return new H.dR("CastError: "+H.e(P.ca(a))+": type '"+H.kZ(a)+"' is not a subtype of type '"+b+"'")},
kZ:function(a){var t
if(a instanceof H.as){t=H.jC(a)
if(t!=null)return H.iO(t,null)
return"Closure"}return H.bu(a)},
ae:function(a){if(!0===a)return!1
if(!!J.p(a).$isja)a=a.$0()
if(typeof a==="boolean")return!a
throw H.c(H.ac(a,"bool"))},
am:function(a){throw H.c(new H.ho(a))},
b:function(a){if(H.ae(a))throw H.c(P.m6(null))},
nH:function(a){throw H.c(new P.e1(a))},
mJ:function(a){return new H.fC(a)},
li:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
l8:function(a){return u.getIsolateTag(a)},
F:function(a){return new H.ak(a,null)},
A:function(a,b){H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
iw:function(a){if(a==null)return
return a.$ti},
l9:function(a,b){return H.jJ(a["$as"+H.e(b)],H.iw(a))},
V:function(a,b,c){var t,s
t=H.l9(a,b)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
ag:function(a,b){var t,s
t=H.iw(a)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
iO:function(a,b){var t=H.bd(a,b)
return t},
bd:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.b(!0)
H.b(!0)
return a[0].name+H.dG(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.e(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.bd(t,b)
return H.n5(a,b)}return"unknown-reified-type"},
n5:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.bd(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.bd(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.bd(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.nl(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.bd(l[j],b)+(" "+H.e(j))}q+="}"}return"("+q+") => "+t},
dG:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=new P.bx("")
for(r=b,q=!0,p=!0;H.b(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.b(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.bd(o,c)}return p?"":"<"+s.k(0)+">"},
ix:function(a){var t,s,r
if(a instanceof H.as){t=H.jC(a)
if(t!=null)return H.iO(t,null)}s=J.p(a).constructor.name
if(a==null)return s
r=H.dG(a.$ti,0,null)
return s+r},
jJ:function(a,b){if(a==null)return b
H.b(typeof a=="function")
H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.jG(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.jG(a,null,b)
return b},
bU:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.iw(a)
s=J.p(a)
if(s[b]==null)return!1
return H.l2(H.jJ(s[d],t),c)},
dH:function(a,b,c,d){var t,s
if(a==null)return a
t=H.bU(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.dG(c,0,null)
throw H.c(H.k4(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
nP:function(a,b,c,d){var t,s
if(a==null)return a
t=H.bU(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.dG(c,0,null)
throw H.c(H.ac(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
l2:function(a,b){var t,s,r,q,p
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
nQ:function(a,b,c){return H.jG(a,b,H.l9(b,c))},
W:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.name==="I")return!0
if('func' in b)return H.la(a,b)
if('func' in a)return b.name==="ja"||b.name==="C"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.b(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.b(!0)
q=b[0]}else q=b
if(q!==s){p=H.iO(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.l2(H.jJ(o,t),r)},
l1:function(a,b,c){var t,s,r,q,p,o,n
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
nc:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
H.b(typeof a=='object')
H.b(typeof b=='object')
t=J.av(Object.getOwnPropertyNames(b))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.W(p,o)||H.W(o,p)))return!1}return!0},
la:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
if(n===m){if(!H.l1(r,q,!1))return!1
if(!H.l1(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.b(j)
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
if(!(H.W(g,f)||H.W(f,g)))return!1}}return H.nc(a.named,b.named)},
jG:function(a,b,c){H.b(typeof a=="function")
H.b(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
nY:function(a){var t=$.jD
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
nU:function(a){return H.aB(a)},
nR:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nx:function(a){var t,s,r,q,p,o
H.b(!(a instanceof P.C))
t=$.jD.$1(a)
s=$.it[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iD[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.l0.$2(a,t)
if(t!=null){s=$.it[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iD[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.iM(r)
$.it[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.iD[t]=r
return r}if(p==="-"){o=H.iM(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.lc(a,r)
if(p==="*")throw H.c(P.kN(t))
if(u.leafTags[t]===true){o=H.iM(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.lc(a,r)},
lc:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.jH(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
iM:function(a){return J.jH(a,!1,null,!!a.$isr)},
nz:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return H.iM(t)
else return J.jH(t,c,null,null)},
ns:function(){if(!0===$.jE)return
$.jE=!0
H.nt()},
nt:function(){var t,s,r,q,p,o,n,m
$.it=Object.create(null)
$.iD=Object.create(null)
H.nr()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.lh.$1(p)
if(o!=null){n=H.nz(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
nr:function(){var t,s,r,q,p,o,n
t=C.T()
t=H.b9(C.Q,H.b9(C.V,H.b9(C.A,H.b9(C.A,H.b9(C.U,H.b9(C.R,H.b9(C.S(C.B),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.jD=new H.iA(p)
$.l0=new H.iB(o)
$.lh=new H.iC(n)},
b9:function(a,b){return a(b)||b},
nG:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
fy:function fy(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
ha:function ha(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fg:function fg(a,b){this.a=a
this.b=b},
eQ:function eQ(a,b,c){this.a=a
this.b=b
this.c=c},
hf:function hf(a){this.a=a},
iW:function iW(a){this.a=a},
di:function di(a,b){this.a=a
this.b=b},
iE:function iE(a){this.a=a},
iF:function iF(a,b){this.a=a
this.b=b},
iG:function iG(a,b,c){this.a=a
this.b=b
this.c=c},
iH:function iH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iI:function iI(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
as:function as(){},
h_:function h_(){},
fM:function fM(){},
bh:function bh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hc:function hc(a){this.a=a},
dR:function dR(a){this.a=a},
fC:function fC(a){this.a=a},
ho:function ho(a){this.a=a},
ak:function ak(a,b){this.a=a
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
eP:function eP(a){this.a=a},
eS:function eS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eT:function eT(a,b){this.a=a
this.$ti=b},
eU:function eU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
iA:function iA(a){this.a=a},
iB:function iB(a){this.a=a},
iC:function iC(a){this.a=a},
im:function(a){var t,s,r
if(!!J.p(a).$iso)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
ad:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bb(b,a))},
br:function br(){},
b_:function b_(){},
f6:function f6(){},
ct:function ct(){},
cu:function cu(){},
cv:function cv(){},
cs:function cs(){},
f7:function f7(){},
f8:function f8(){},
f9:function f9(){},
fa:function fa(){},
fb:function fb(){},
fc:function fc(){},
cw:function cw(){},
fd:function fd(){},
bH:function bH(){},
bI:function bI(){},
bJ:function bJ(){},
bK:function bK(){},
nl:function(a){return J.av(H.A(a?Object.keys(a):[],[null]))},
iN:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
p:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ck.prototype
return J.cj.prototype}if(typeof a=="string")return J.aw.prototype
if(a==null)return J.cl.prototype
if(typeof a=="boolean")return J.eO.prototype
if(a.constructor==Array)return J.au.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ax.prototype
return a}if(a instanceof P.C)return a
return J.iv(a)},
jH:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iv:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.jE==null){H.ns()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.c(P.kN("Return interceptor for "+H.e(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$jd()]
if(p!=null)return p
p=H.nx(a)
if(p!=null)return p
if(typeof a=="function")return C.W
s=Object.getPrototypeOf(a)
if(s==null)return C.E
if(s===Object.prototype)return C.E
if(typeof q=="function"){Object.defineProperty(q,$.$get$jd(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
av:function(a){a.fixed$length=Array
return a},
U:function(a){if(typeof a=="string")return J.aw.prototype
if(a==null)return a
if(a.constructor==Array)return J.au.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ax.prototype
return a}if(a instanceof P.C)return a
return J.iv(a)},
dF:function(a){if(a==null)return a
if(a.constructor==Array)return J.au.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ax.prototype
return a}if(a instanceof P.C)return a
return J.iv(a)},
l6:function(a){if(typeof a=="number")return J.aW.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.aF.prototype
return a},
nn:function(a){if(typeof a=="number")return J.aW.prototype
if(typeof a=="string")return J.aw.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.aF.prototype
return a},
l7:function(a){if(typeof a=="string")return J.aw.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.aF.prototype
return a},
i:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ax.prototype
return a}if(a instanceof P.C)return a
return J.iv(a)},
B:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.p(a).w(a,b)},
a5:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.l6(a).aF(a,b)},
lo:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.l6(a).aG(a,b)},
aL:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nw(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.U(a).h(a,b)},
lp:function(a,b,c,d){return J.i(a).dJ(a,b,c,d)},
jK:function(a,b){return J.l7(a).aP(a,b)},
iX:function(a,b){return J.i(a).e1(a,b)},
lq:function(a,b,c,d){return J.i(a).e2(a,b,c,d)},
lr:function(a,b,c){return J.i(a).e3(a,b,c)},
jL:function(a,b){return J.i(a).bY(a,b)},
iY:function(a,b){return J.i(a).P(a,b)},
jM:function(a,b,c){return J.i(a).c0(a,b,c)},
ls:function(a,b){return J.i(a).ei(a,b)},
iZ:function(a,b,c){return J.i(a).c1(a,b,c)},
bY:function(a,b,c){return J.i(a).c2(a,b,c)},
dI:function(a,b){return J.i(a).el(a,b)},
lt:function(a,b){return J.i(a).c3(a,b)},
lu:function(a,b,c){return J.i(a).c4(a,b,c)},
jN:function(a,b,c,d){return J.i(a).c5(a,b,c,d)},
lv:function(a,b,c,d,e){return J.i(a).c6(a,b,c,d,e)},
lw:function(a,b){return J.nn(a).R(a,b)},
j_:function(a,b,c){return J.U(a).ep(a,b,c)},
j0:function(a){return J.i(a).c8(a)},
lx:function(a){return J.i(a).c9(a)},
ly:function(a){return J.i(a).cc(a)},
lz:function(a){return J.i(a).ev(a)},
lA:function(a,b){return J.i(a).ce(a,b)},
j1:function(a,b){return J.i(a).cf(a,b)},
lB:function(a,b,c,d){return J.i(a).cg(a,b,c,d)},
lC:function(a,b,c,d,e){return J.i(a).eC(a,b,c,d,e)},
lD:function(a,b,c,d,e){return J.i(a).ci(a,b,c,d,e)},
lE:function(a,b,c,d,e,f){return J.i(a).eD(a,b,c,d,e,f)},
lF:function(a,b){return J.dF(a).t(a,b)},
bZ:function(a,b){return J.i(a).cj(a,b)},
lG:function(a,b){return J.i(a).ck(a,b)},
lH:function(a){return J.i(a).eE(a)},
jO:function(a,b){return J.dF(a).ah(a,b)},
lI:function(a){return J.i(a).geh(a)},
be:function(a){return J.p(a).gu(a)},
aM:function(a){return J.dF(a).gv(a)},
bf:function(a){return J.U(a).gj(a)},
lJ:function(a){return J.i(a).gbc(a)},
lK:function(a){return J.p(a).gA(a)},
lL:function(a){return J.i(a).gf3(a)},
lM:function(a){return J.i(a).gaC(a)},
j2:function(a){return J.i(a).gm(a)},
j3:function(a){return J.i(a).gn(a)},
jP:function(a){return J.i(a).gC(a)},
j4:function(a,b){return J.i(a).a6(a,b)},
lN:function(a){return J.i(a).aE(a)},
lO:function(a){return J.i(a).bi(a)},
lP:function(a,b){return J.i(a).bj(a,b)},
lQ:function(a,b,c){return J.i(a).bk(a,b,c)},
jQ:function(a,b,c){return J.i(a).bn(a,b,c)},
lR:function(a,b){return J.i(a).cn(a,b)},
lS:function(a,b){return J.dF(a).cq(a,b)},
lT:function(a,b,c){return J.i(a).cr(a,b,c)},
jR:function(a){return J.dF(a).eX(a)},
lU:function(a,b){return J.i(a).H(a,b)},
lV:function(a,b,c,d){return J.i(a).bt(a,b,c,d)},
lW:function(a,b,c,d,e,f,g){return J.i(a).cw(a,b,c,d,e,f,g)},
lX:function(a,b,c,d){return J.i(a).cz(a,b,c,d)},
jS:function(a,b,c,d){return J.i(a).cA(a,b,c,d)},
lY:function(a){return J.l7(a).f6(a)},
bg:function(a){return J.p(a).k(a)},
lZ:function(a,b,c,d){return J.i(a).f8(a,b,c,d)},
m_:function(a,b,c){return J.i(a).cC(a,b,c)},
m0:function(a,b,c){return J.i(a).cD(a,b,c)},
j5:function(a,b,c){return J.i(a).cE(a,b,c)},
m1:function(a,b,c){return J.i(a).cF(a,b,c)},
jT:function(a,b,c){return J.i(a).cG(a,b,c)},
jU:function(a,b,c){return J.i(a).cH(a,b,c)},
jV:function(a,b,c){return J.i(a).cI(a,b,c)},
jW:function(a,b,c,d){return J.i(a).cJ(a,b,c,d)},
jX:function(a,b,c,d){return J.i(a).cK(a,b,c,d)},
m2:function(a,b){return J.i(a).cM(a,b)},
m3:function(a,b,c){return J.i(a).f9(a,b,c)},
m4:function(a,b,c,d,e,f,g){return J.i(a).cO(a,b,c,d,e,f,g)},
m5:function(a,b,c,d,e){return J.i(a).cQ(a,b,c,d,e)},
a:function a(){},
eO:function eO(){},
cl:function cl(){},
bn:function bn(){},
fq:function fq(){},
aF:function aF(){},
ax:function ax(){},
au:function au(a){this.$ti=a},
jb:function jb(a){this.$ti=a},
dN:function dN(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aW:function aW(){},
ck:function ck(){},
cj:function cj(){},
aw:function aw(){}},P={
mT:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.nd()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.ba(new P.hr(t),1)).observe(s,{childList:true})
return new P.hq(t,s,r)}else if(self.setImmediate!=null)return P.ne()
return P.nf()},
mU:function(a){H.iu()
self.scheduleImmediate(H.ba(new P.hs(a),0))},
mV:function(a){H.iu()
self.setImmediate(H.ba(new P.ht(a),0))},
mW:function(a){P.jp(C.y,a)},
jp:function(a,b){var t=C.b.I(a.a,1000)
return H.mO(t<0?0:t,b)},
n8:function(a,b){if(H.bc(a,{func:1,args:[P.I,P.I]})){b.toString
return a}else{b.toString
return a}},
mm:function(a,b,c){var t
if(a==null)a=new P.bt()
t=$.v
if(t!==C.d)t.toString
t=new P.E(0,t,null,[c])
t.dL(a,b)
return t},
mn:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.E(0,$.v,null,[P.h])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.eD(t,b,!1,s)
try{for(m=0,l=0;m<1;++m){q=a[m]
p=l
q.bg(new P.eC(t,p,s,b,!1),r)
l=++t.b}if(l===0){l=new P.E(0,$.v,null,[null])
l.bG(C.C)
return l}k=new Array(l)
k.fixed$length=Array
t.a=k}catch(j){o=H.H(j)
n=H.a2(j)
if(t.b===0||!1)return P.mm(o,n,null)
else{t.c=o
t.d=n}}return s},
n4:function(a,b,c){$.v.toString
a.O(b,c)},
mY:function(a,b){var t=new P.E(0,$.v,null,[b])
H.b(!0)
t.a=4
t.c=a
return t},
kQ:function(a,b){var t,s,r
H.b(b.a<4)
H.b(!(a instanceof P.E))
H.b(b.a===0)
b.a=1
try{a.bg(new P.hL(b),new P.hM(b))}catch(r){t=H.H(r)
s=H.a2(r)
P.nD(new P.hN(b,t,s))}},
hK:function(a,b){var t,s,r
H.b(b.a<=1)
for(;t=a.a,s=t===2,s;){H.b(s)
a=a.c}if(t>=4){r=b.av()
b.aO(a)
P.b3(b,r)}else{r=b.c
H.b(b.a<=1)
b.a=2
b.c=a
a.bS(r)}},
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
P.io(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
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
P.io(null,null,p,o,s)
return}s=$.v
if(s==null?l!=null:s!==l){H.b(l!=null)
s=$.v
H.b(l==null?s!=null:l!==s)
j=$.v
$.v=l
i=j}else i=null
s=b.c
if(s===8)new P.hS(t,r,b,q).$0()
else if(p){if((s&1)!==0)new P.hR(r,b,m).$0()}else if((s&2)!==0)new P.hQ(t,r,b).$0()
if(i!=null){H.b(!0)
$.v=i}s=r.b
if(!!J.p(s).$isX){if(s.a>=4){H.b(o.a<4)
h=o.c
o.c=null
b=o.aw(h)
H.b(o.a<4)
H.b(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.hK(s,o)
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
n7:function(){var t,s
for(;t=$.b7,t!=null;){$.bS=null
s=t.b
$.b7=s
if(s==null)$.bR=null
t.a.$0()}},
nb:function(){$.jz=!0
try{P.n7()}finally{$.bS=null
$.jz=!1
if($.b7!=null)$.$get$jv().$1(P.l3())}},
kY:function(a){var t=new P.cU(a,null)
if($.b7==null){$.bR=t
$.b7=t
if(!$.jz)$.$get$jv().$1(P.l3())}else{$.bR.b=t
$.bR=t}},
na:function(a){var t,s,r
t=$.b7
if(t==null){P.kY(a)
$.bS=$.bR
return}s=new P.cU(a,null)
r=$.bS
if(r==null){s.b=t
$.bS=s
$.b7=s}else{s.b=r.b
r.b=s
$.bS=s
if(s.b==null)$.bR=s}},
nD:function(a){var t=$.v
if(C.d===t){P.b8(null,null,C.d,a)
return}t.toString
P.b8(null,null,t,t.b6(a))},
n2:function(a,b,c){var t=a.em(0)
if(!!J.p(t).$isX&&t!==$.$get$kh())t.fa(new P.il(b,c))
else b.ab(c)},
mP:function(a,b){var t=$.v
if(t===C.d){t.toString
return P.jp(a,b)}return P.jp(a,t.b6(b))},
ju:function(a){var t,s
H.b(a!=null)
t=$.v
H.b(a==null?t!=null:a!==t)
s=$.v
$.v=a
return s},
io:function(a,b,c,d,e){var t={}
t.a=d
P.na(new P.ip(t,e))},
kW:function(a,b,c,d){var t,s
if($.v===c)return d.$0()
t=P.ju(c)
try{s=d.$0()
return s}finally{s=t
H.b(s!=null)
$.v=s}},
kX:function(a,b,c,d,e){var t,s
if($.v===c)return d.$1(e)
t=P.ju(c)
try{s=d.$1(e)
return s}finally{s=t
H.b(s!=null)
$.v=s}},
n9:function(a,b,c,d,e,f){var t,s
if($.v===c)return d.$2(e,f)
t=P.ju(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.b(s!=null)
$.v=s}},
b8:function(a,b,c,d){var t=C.d!==c
if(t)d=!(!t||!1)?c.b6(d):c.ej(d)
P.kY(d)},
hr:function hr(a){this.a=a},
hq:function hq(a,b,c){this.a=a
this.b=b
this.c=c},
hs:function hs(a){this.a=a},
ht:function ht(a){this.a=a},
X:function X(){},
eD:function eD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eC:function eC(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
j7:function j7(){},
hw:function hw(){},
hp:function hp(a,b){this.a=a
this.$ti=b},
ig:function ig(a,b){this.a=a
this.$ti=b},
bD:function bD(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
E:function E(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hH:function hH(a,b){this.a=a
this.b=b},
hP:function hP(a,b){this.a=a
this.b=b},
hL:function hL(a){this.a=a},
hM:function hM(a){this.a=a},
hN:function hN(a,b,c){this.a=a
this.b=b
this.c=c},
hJ:function hJ(a,b){this.a=a
this.b=b},
hO:function hO(a,b){this.a=a
this.b=b},
hI:function hI(a,b,c){this.a=a
this.b=b
this.c=c},
hS:function hS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hT:function hT(a){this.a=a},
hR:function hR(a,b,c){this.a=a
this.b=b
this.c=c},
hQ:function hQ(a,b,c){this.a=a
this.b=b
this.c=c},
cU:function cU(a,b){this.a=a
this.b=b},
bw:function bw(){},
fU:function fU(a){this.a=a},
fV:function fV(a,b){this.a=a
this.b=b},
fS:function fS(a,b,c){this.a=a
this.b=b
this.c=c},
fT:function fT(a){this.a=a},
fR:function fR(){},
il:function il(a,b){this.a=a
this.b=b},
jo:function jo(){},
aN:function aN(a,b){this.a=a
this.b=b},
ik:function ik(){},
ip:function ip(a,b){this.a=a
this.b=b},
i5:function i5(){},
i7:function i7(a,b){this.a=a
this.b=b},
i6:function i6(a,b){this.a=a
this.b=b},
i8:function i8(a,b){this.a=a
this.b=b},
kn:function(a,b){return new H.a8(0,null,null,null,null,null,0,[a,b])},
Q:function(){return new H.a8(0,null,null,null,null,null,0,[null,null])},
az:function(a){return H.nm(a,new H.a8(0,null,null,null,null,null,0,[null,null]))},
b5:function(a,b){return new P.i_(0,null,null,null,null,null,0,[a,b])},
aA:function(a,b,c,d){return new P.hY(0,null,null,null,null,null,0,[d])},
jx:function(){var t=Object.create(null)
H.b(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
mu:function(a,b,c){var t,s
if(P.jA(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$bT()
C.a.l(s,a)
try{P.n6(a,t)}finally{H.b(C.a.gba(s)===a)
s.pop()}s=P.kx(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eN:function(a,b,c){var t,s,r
if(P.jA(a))return b+"..."+c
t=new P.bx(b)
s=$.$get$bT()
C.a.l(s,a)
try{r=t
r.a=P.kx(r.ga_(),a,", ")}finally{H.b(C.a.gba(s)===a)
s.pop()}s=t
s.a=s.ga_()+c
s=t.ga_()
return s.charCodeAt(0)==0?s:s},
jA:function(a){var t,s
for(t=0;s=$.$get$bT(),t<s.length;++t)if(a===s[t])return!0
return!1},
n6:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gv(a)
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
jh:function(a,b){var t,s
t=P.aA(null,null,null,b)
for(s=J.aM(a);s.p();)t.l(0,s.gq(s))
return t},
kp:function(a){var t,s,r
t={}
if(P.jA(a))return"{...}"
s=new P.bx("")
try{C.a.l($.$get$bT(),a)
r=s
r.a=r.ga_()+"{"
t.a=!0
J.jO(a,new P.eZ(t,s))
t=s
t.a=t.ga_()+"}"}finally{t=$.$get$bT()
H.b(C.a.gba(t)===a)
t.pop()}t=s.ga_()
return t.charCodeAt(0)==0?t:t},
ji:function(a,b){var t=new P.eV(null,0,0,0,[b])
t.dm(a,b)
return t},
i_:function i_(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hY:function hY(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hZ:function hZ(a,b,c){this.a=a
this.b=b
this.c=c},
bF:function bF(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hV:function hV(){},
jg:function jg(){},
cm:function cm(){},
l:function l(){},
co:function co(){},
eZ:function eZ(a,b){this.a=a
this.b=b},
aZ:function aZ(){},
eV:function eV(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
i0:function i0(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fF:function fF(){},
fE:function fE(){},
bG:function bG(){},
mi:function(a){var t=J.p(a)
if(!!t.$isas)return t.k(a)
return"Instance of '"+H.bu(a)+"'"},
ko:function(a,b,c){var t,s
t=H.A([],[c])
for(s=J.aM(a);s.p();)C.a.l(t,s.gq(s))
return t},
kx:function(a,b,c){var t=J.aM(b)
if(!t.p())return a
if(c.length===0){do a+=H.e(t.gq(t))
while(t.p())}else{a+=H.e(t.gq(t))
for(;t.p();)a=a+c+H.e(t.gq(t))}return a},
mb:function(a,b){return J.lw(a,b)},
mc:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+t
if(t>=10)return s+"00"+t
return s+"000"+t},
md:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c4:function(a){if(a>=10)return""+a
return"0"+a},
mf:function(a,b,c,d,e,f){return new P.at(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
ca:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bg(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mi(a)},
m6:function(a){return new P.c0(a)},
dM:function(a){return new P.a6(!1,null,null,a)},
jY:function(a,b,c){return new P.a6(!0,a,b,c)},
fv:function(a,b,c){return new P.cC(null,null,!0,a,b,"Value not in range")},
aC:function(a,b,c,d,e){return new P.cC(b,c,!0,a,d,"Invalid value")},
kw:function(a,b,c,d,e,f){if(0>a||a>c)throw H.c(P.aC(a,0,c,"start",f))
if(a>b||b>c)throw H.c(P.aC(b,a,c,"end",f))
return b},
z:function(a,b,c,d,e){var t=e!=null?e:J.bf(b)
return new P.eK(b,t,!0,a,c,"Index out of range")},
t:function(a){return new P.hg(a)},
kN:function(a){return new P.he(a)},
fL:function(a){return new P.b1(a)},
ah:function(a){return new P.dT(a)},
cb:function(a){return new P.hG(a)},
a4:function(a){H.iN(H.e(a))},
af:function af(){},
D:function D(){},
bi:function bi(a,b){this.a=a
this.b=b},
T:function T(){},
at:function at(a){this.a=a},
e8:function e8(){},
e9:function e9(){},
aR:function aR(){},
c0:function c0(a){this.a=a},
bt:function bt(){},
a6:function a6(a,b,c,d){var _=this
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
eK:function eK(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hg:function hg(a){this.a=a},
he:function he(a){this.a=a},
b1:function b1(a){this.a=a},
dT:function dT(a){this.a=a},
cK:function cK(){},
e1:function e1(a){this.a=a},
j9:function j9(){},
hG:function hG(a){this.a=a},
ec:function ec(a,b,c){this.a=a
this.b=b
this.$ti=c},
y:function y(){},
P:function P(){},
ci:function ci(){},
h:function h(){},
aY:function aY(){},
I:function I(){},
a3:function a3(){},
C:function C(){},
b0:function b0(){},
n:function n(){},
bx:function bx(a){this.a=a},
jr:function jr(){},
l4:function(a){return a},
ir:function(a){var t,s,r,q,p
if(a==null)return
t=P.Q()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.O)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
nj:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.jO(a,new P.iq(t))
return t},
kc:function(){var t=$.kb
if(t==null){t=J.j_(window.navigator.userAgent,"Opera",0)
$.kb=t}return t},
me:function(){var t,s
t=$.k8
if(t!=null)return t
s=$.k9
if(s==null){s=J.j_(window.navigator.userAgent,"Firefox",0)
$.k9=s}if(s)t="-moz-"
else{s=$.ka
if(s==null){s=!P.kc()&&J.j_(window.navigator.userAgent,"Trident/",0)
$.ka=s}if(s)t="-ms-"
else t=P.kc()?"-o-":"-webkit-"}$.k8=t
return t},
iq:function iq(a){this.a=a},
hX:function hX(){},
i4:function i4(){},
S:function S(){},
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
er:function er(){},
es:function es(){},
et:function et(){},
eu:function eu(){},
ey:function ey(){},
eA:function eA(){},
a_:function a_(){},
a7:function a7(){},
eI:function eI(){},
eR:function eR(){},
f0:function f0(){},
fh:function fh(){},
fo:function fo(){},
fs:function fs(){},
ft:function ft(){},
fw:function fw(){},
fx:function fx(){},
bv:function bv(){},
fW:function fW(){},
u:function u(){},
fX:function fX(){},
bz:function bz(){},
bA:function bA(){},
h9:function h9(){},
hi:function hi(){},
d3:function d3(){},
d4:function d4(){},
da:function da(){},
db:function db(){},
dk:function dk(){},
dl:function dl(){},
dr:function dr(){},
ds:function ds(){},
dO:function dO(){},
dP:function dP(){},
aO:function aO(){},
fi:function fi(){},
fA:function fA(){},
fB:function fB(){},
fK:function fK(){},
dg:function dg(){},
dh:function dh(){}},W={
mg:function(a,b,c){var t,s
t=document.body
s=(t&&C.o).M(t,a,b,c)
s.toString
t=new H.cT(new W.L(s),new W.eb(),[W.q])
return t.gY(t)},
mh:function(a){return"wheel"},
bk:function(a){var t,s,r
t="element tag unavailable"
try{s=J.lL(a)
if(typeof s==="string")t=a.tagName}catch(r){H.H(r)}return t},
mX:function(a,b){return document.createElement(a)},
aK:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kU:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
a0:function(a,b,c,d,e){var t=W.l_(new W.hF(c))
t=new W.hE(0,a,b,t,!1,[e])
t.dD(a,b,c,!1,e)
return t},
kR:function(a){var t,s
t=document.createElement("a")
s=new W.i9(t,window.location)
s=new W.bE(s)
s.dE(a)
return s},
n_:function(a,b,c,d){return!0},
n0:function(a,b,c,d){var t,s,r,q,p
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
kV:function(){var t=P.n
t=new W.ih(P.jh(C.t,t),P.aA(null,null,null,t),P.aA(null,null,null,t),P.aA(null,null,null,t),null)
t.dH(null,new H.bo(C.t,new W.ii(),[H.ag(C.t,0),null]),["TEMPLATE"],null)
return t},
l_:function(a){var t=$.v
if(t===C.d)return a
return t.ek(a)},
k:function k(){},
c_:function c_(){},
dJ:function dJ(){},
dK:function dK(){},
dL:function dL(){},
ao:function ao(){},
ap:function ap(){},
c1:function c1(){},
c2:function c2(){},
ar:function ar(){},
dU:function dU(){},
dV:function dV(){},
dW:function dW(){},
dX:function dX(){},
aP:function aP(){},
dY:function dY(){},
Y:function Y(){},
aQ:function aQ(){},
dZ:function dZ(){},
e_:function e_(){},
e0:function e0(){},
e2:function e2(){},
e3:function e3(){},
c5:function c5(){},
bj:function bj(){},
e4:function e4(){},
c6:function c6(){},
e5:function e5(){},
c7:function c7(){},
c8:function c8(){},
c9:function c9(){},
e6:function e6(){},
e7:function e7(){},
Z:function Z(){},
eb:function eb(){},
f:function f(){},
d:function d(){},
ew:function ew(){},
ex:function ex(){},
eB:function eB(){},
eF:function eF(){},
cf:function cf(){},
eG:function eG(){},
bl:function bl(){},
cg:function cg(){},
eH:function eH(){},
bm:function bm(){},
aT:function aT(){},
aU:function aU(){},
aV:function aV(){},
ay:function ay(){},
eX:function eX(){},
eY:function eY(){},
bp:function bp(){},
f1:function f1(){},
f3:function f3(){},
bq:function bq(){},
f4:function f4(){},
J:function J(){},
L:function L(a){this.a=a},
q:function q(){},
cx:function cx(){},
bs:function bs(){},
a9:function a9(){},
fr:function fr(){},
fu:function fu(){},
cB:function cB(){},
cE:function cE(){},
fD:function fD(){},
aj:function aj(){},
fH:function fH(){},
fJ:function fJ(){},
aa:function aa(){},
fP:function fP(){},
fQ:function fQ(a){this.a=a},
cM:function cM(){},
fY:function fY(){},
fZ:function fZ(){},
by:function by(){},
h0:function h0(){},
h1:function h1(){},
h3:function h3(){},
aD:function aD(){},
h7:function h7(){},
h8:function h8(){},
cS:function cS(){},
aE:function aE(){},
hh:function hh(){},
hj:function hj(){},
b2:function b2(){},
hk:function hk(){},
hl:function hl(){},
aH:function aH(){},
bC:function bC(){},
hn:function hn(a){this.a=a},
jt:function jt(){},
hx:function hx(){},
hy:function hy(){},
hU:function hU(){},
d7:function d7(){},
ic:function ic(){},
id:function id(){},
hu:function hu(){},
hz:function hz(a){this.a=a},
hD:function hD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hA:function hA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hE:function hE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
hF:function hF(a){this.a=a},
bE:function bE(a){this.a=a},
m:function m(){},
cz:function cz(a){this.a=a},
ff:function ff(a){this.a=a},
fe:function fe(a,b,c){this.a=a
this.b=b
this.c=c},
bL:function bL(){},
ia:function ia(){},
ib:function ib(){},
ih:function ih(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
ii:function ii(){},
ie:function ie(){},
cd:function cd(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cy:function cy(){},
jk:function jk(){},
js:function js(){},
i9:function i9(a,b){this.a=a
this.b=b},
dt:function dt(a){this.a=a},
ij:function ij(a){this.a=a},
cV:function cV(){},
cW:function cW(){},
cX:function cX(){},
cY:function cY(){},
cZ:function cZ(){},
d_:function d_(){},
d0:function d0(){},
d1:function d1(){},
d2:function d2(){},
d5:function d5(){},
d6:function d6(){},
d8:function d8(){},
d9:function d9(){},
dc:function dc(){},
dd:function dd(){},
bM:function bM(){},
bN:function bN(){},
de:function de(){},
df:function df(){},
dj:function dj(){},
dm:function dm(){},
dn:function dn(){},
bO:function bO(){},
bP:function bP(){},
dp:function dp(){},
dq:function dq(){},
du:function du(){},
dv:function dv(){},
dw:function dw(){},
dx:function dx(){},
dy:function dy(){},
dz:function dz(){},
dA:function dA(){},
dB:function dB(){},
dC:function dC(){},
dD:function dD(){}},B={
nE:function(a){var t,s
t=document
s=W.ay
W.a0(t,"keydown",new B.iP(),!1,s)
W.a0(t,"keyup",new B.iQ(),!1,s)
if(!$.nF)W.a0(t,"mousemove",new B.iR(),!1,W.J)
s=W.J
W.a0(t,"mousedown",new B.iS(),!1,s)
W.a0(t,"mouseup",new B.iT(),!1,s)},
my:function(a,b,c,d){var t,s,r,q,p,o,n
t=new Float32Array(3)
s=$.$get$is()
r=$.$get$bV()
q=new T.R(new Float32Array(16))
q.X()
p=new Float32Array(3)
o=new Float32Array(3)
n=new Float32Array(3)
t=new B.fj(a,b,c,0,new T.x(t),-0.02,s,r,q,new T.x(p),new T.x(o),new T.x(n),new T.x(new Float32Array(3)),"camera:orbit",!1,!0)
t.dq(a,b,c,d)
return t},
iP:function iP(){},
iQ:function iQ(){},
iR:function iR(){},
iS:function iS(){},
iT:function iT(){},
fj:function fj(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
fk:function fk(a){this.a=a},
fl:function fl(a){this.a=a},
fm:function fm(){},
fn:function fn(a){this.a=a},
mK:function(a,b,c,d,e,a0,a1,a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=a2+1
s=a1+1
r=B.mz(new B.fG(e,d,a0,c),0,6.283185307179586,s,!1,0.001)
H.b(r.length===2*s)
q=B.mQ(r,a2,a3,!1)
H.b(q.length===s)
H.b(q[0].length===2*t)
p=[]
o=new G.eE(!1,[],[],p,P.Q())
for(n=q.length,m=0;m<q.length;q.length===n||(0,H.O)(q),++m){l=q[m]
for(k=0;k<l.length;k+=2){j=l[k]
j.toString
i=new T.x(new Float32Array(3))
i.K(j)
C.a.l(p,i)}}H.b(p.length===t*s)
o.di(t,s,!1)
o.dj(t,s)
n=o.e
H.b(n.h(0,"aTexUV").length===p.length)
H.b(!n.F(0,"aNormal"))
H.b(C.i.bs("aNormal","a"))
h=$.$get$M().h(0,"aNormal")
switch(h.a){case"vec2":n.i(0,"aNormal",H.A([],[T.aG]))
break
case"vec3":n.i(0,"aNormal",H.A([],[T.x]))
break
case"vec4":n.i(0,"aNormal",H.A([],[T.al]))
break
case"float":n.i(0,"aNormal",H.A([],[P.T]))
break
case"uvec4":n.i(0,"aNormal",H.A([],[[P.h,P.y]]))
break
default:if(H.ae(!1))H.am("unknown type for aNormal")}for(j=q.length,m=0;m<q.length;q.length===j||(0,H.O)(q),++m){l=q[m]
for(k=0;k<l.length;k+=2){i=l[k+1]
g=n.h(0,"aNormal")
i.toString
f=new T.x(new Float32Array(3))
f.K(i);(g&&C.a).l(g,f)}}H.b(n.h(0,"aNormal").length===p.length)
return o},
mQ:function(a1,a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
t=[]
s=new Float32Array(3)
r=new T.x(s)
q=new Float32Array(3)
p=new T.x(q)
o=new Float32Array(3)
n=new T.x(o)
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
o[2]=e*d}p.a2(0)
n.a2(0)
for(c=0;c<m;++c){b=c/a2*2*3.141592653589793
a=a3*Math.cos(b)
a0=a3*Math.sin(b)
r.K(k)
r.ay(p,a)
r.ay(n,a0)
h=new T.x(new Float32Array(3))
h.K(r)
C.a.l(i,h)
s[2]=0
s[1]=0
s[0]=0
r.ay(p,a)
r.ay(n,a0)
r.a2(0)
h=new T.x(new Float32Array(3))
h.K(r)
C.a.l(i,h)}}return t},
mz:function(a,b,c,d,e,f){var t,s,r,q,p,o,n
H.b(d>=2)
t=[]
s=new T.x(new Float32Array(3))
r=new T.x(new Float32Array(3))
for(q=(c-b)/(d-1),p=0;p<d;++p){o=q*p+b
a.$2(o,s)
a.$2(o+f,r)
r.bu(0,s)
n=new T.x(new Float32Array(3))
n.K(s)
C.a.l(t,n)
n=new T.x(new Float32Array(3))
n.K(r)
C.a.l(t,n)}return t},
fG:function fG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},G={
mS:function(a){var t,s,r
t=H.A(a.split("\n"),[P.n])
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.e(t[s])}return C.a.al(t,"\n")},
kP:function(a,b,c){var t,s,r,q
t=J.i(a)
s=t.cb(a,b)
t.br(a,s,c)
t.c7(a,s)
r=t.bm(a,s,35713)
if(r!=null&&!r){q=t.bl(a,s)
P.a4("E:Compilation failed:")
P.a4("E:"+G.mS(c))
P.a4("E:Failure:")
P.a4(C.i.a5("E:",q))
throw H.c(q)}return s},
ky:function(a,b,c){return new G.cP(a,b,c)},
kq:function(a){var t=new G.cq(P.Q(),a,!1,!0)
t.dn(a)
return t},
kg:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.j2(a[s])
b[t+1]=J.j3(a[s])
b[t+2]=J.jP(a[s])}return b},
mk:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.j2(a[s])
b[t+1]=J.j3(a[s])}return b},
ml:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.j2(a[s])
b[t+1]=J.j3(a[s])
b[t+2]=J.jP(a[s])
b[t+3]=J.lM(a[s])}return b},
mj:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.aL(a[s],0)
b[t+1]=J.aL(a[s],1)
b[t+2]=J.aL(a[s],2)
b[t+3]=J.aL(a[s],3)}return b},
kr:function(a,b,c,d){return new G.f2(b,J.lz(b.a),c,P.Q(),d,null,0,-1,null,null,P.Q(),"meshdata:"+a,!1,!0)},
mZ:function(a,b){var t,s,r,q,p,o,n,m,l,k
for(t=a.e,s=t.gD(t),s=s.gv(s),r=b.x,q=[[P.h,P.y]],p=[P.T],o=[T.al],n=[T.x],m=[T.aG];s.p();){l=s.gq(s)
if(!r.F(0,l)){l="Dropping unnecessary attribute: "+H.e(l)
if($.l5>0)H.iN("I: "+l)
continue}k=t.h(0,l)
switch($.$get$M().h(0,l).a){case"vec2":b.a9(l,G.mk(H.dH(k,"$ish",m,"$ash"),null),2)
break
case"vec3":b.a9(l,G.kg(H.dH(k,"$ish",n,"$ash"),null),3)
break
case"vec4":b.a9(l,G.ml(H.dH(k,"$ish",o,"$ash"),null),4)
break
case"float":b.a9(l,new Float32Array(H.im(H.dH(k,"$ish",p,"$ash"))),1)
break
case"uvec4":b.a9(l,G.mj(H.dH(k,"$ish",q,"$ash"),null),4)
break
default:if(H.ae(!1))H.am("unknown type for "+H.e(l)+" ["+J.lK(k[0]).k(0)+"] ["+new H.ak(H.ix(k),null).k(0)+"] "+H.e(k))}}},
jm:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.aA(null,null,null,P.n)
s=c.b
r=d.b
q=c.f
p=J.lx(b.a)
o=G.kP(b.a,35633,s)
J.jM(b.a,p,o)
n=G.kP(b.a,35632,r)
J.jM(b.a,p,n)
if(q.length>0)J.lZ(b.a,p,q,35980)
J.lR(b.a,p)
if(!J.lQ(b.a,p,35714))H.G(J.lP(b.a,p))
t=new G.fz(b,c,d,p,P.jh(c.c,null),P.Q(),P.Q(),t,null,a,!1,!0)
t.dr(a,b,c,d)
return t},
cG:function(a){return new G.cF(a,null,[],[],[],[],0,P.Q())},
ki:function(a,b,c,d,e){var t=new G.eJ(c,b,J.ly(a.a),e,a,new G.h2(!1,!1,!1,!0,1,9729,9729))
t.dl(a,b,c,d,e)
return t},
f5:function f5(){},
hd:function hd(){},
dQ:function dQ(){},
dS:function dS(a,b){this.a=a
this.b=b},
ev:function ev(a,b,c,d){var _=this
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
cQ:function cQ(a,b,c){this.a=a
this.b=b
this.c=c},
cP:function cP(a,b,c){this.a=a
this.b=b
this.c=c},
cq:function cq(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
f2:function f2(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
fp:function fp(){},
fz:function fz(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
w:function w(a,b,c){this.a=a
this.b=b
this.c=c},
cF:function cF(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fI:function fI(){},
h2:function h2(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bB:function bB(){},
eJ:function eJ(a,b,c,d,e,f){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f},
ny:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
t={}
s=document
r=new R.fO(0,0,null,null,null,null)
r.dv(C.r.cV(s,"stats"),"blue","gray")
q=C.r.eW(s,"#webgl-canvas")
p=new G.dS(null,q)
o=(q&&C.w).bh(q,"webgl2",P.az(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
p.a=o
if(o==null)H.G(P.cb('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
n="ChronosGL Config: "+H.e(J.lN(o))
if($.l5>0)P.a4("I: "+n)
J.lv(o,0,0,0,1)
J.bZ(o,2929)
J.bZ(o,2884)
m=B.my(165,0,0,q)
o=new T.R(new Float32Array(16))
o.X()
n=new T.R(new Float32Array(16))
n.X()
l=new R.cA(q,p,m,50,1,0.1,1000,o,n,new T.R(new Float32Array(16)),P.Q(),"perspective",!1,!0)
l.bB()
l.ct(null)
W.a0(window,"resize",l.gf_(),!1,W.f)
k=G.jm("textured",p,$.$get$lm(),$.$get$ll())
o=$.$get$ld()
n=new G.cF("PerlinNoiseColor F",null,[],[],[],[],0,P.Q())
n.aq(["vNormal"])
n.Z(["uTime","uTransformationMatrix"])
n.bA(["","vec3 mod289(vec3 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x)\n{\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec3 fade(vec3 t) {\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\n\n// Classic Perlin noise, periodic variant\nfloat pnoise(vec3 P, vec3 rep)\n{\n  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \n  return 2.2 * n_xyz;\n}\n","#define VARIANT 1\n\nvoid main() {\n#if VARIANT == 1\n  float mytime = uTime/2.0;\n#ifdef BLACK\n  mytime = uTime/10.0;\n#endif\n  float period = 10.0;\n  float factor = 1.0; // sin( uTime)/4.0+2.0;\n  vec3 translation = uTransformationMatrix[3].xyz;\n  float r = pnoise( .75 * ( vNormal *factor + mytime ), vec3( period ) );\n  float g = pnoise( 0.8 * ( vNormal *factor + mytime ), vec3( period ) );\n  float b = pnoise( 0.9 * ( vNormal *factor + mytime ), vec3( period ) );\n  float n = pnoise( 1.5 * ( vNormal *factor + mytime ), vec3( period ) );\n#else\n  float mytime = 0.0 ; //uTime/50.0;\n  float period = 5.0;\n  float factor = 1.0; // sin( uTime)/4.0+2.0;\n  vec3 translation = uTransformationMatrix[3].xyz;\n  float r = pnoise( .75 * ( translation*0.175 + vNormal *factor + mytime ), vec3( period ) );\n  float g = pnoise( 0.8 * ( translation*0.175 + vNormal *factor + mytime ), vec3( period ) );\n  float b = pnoise( 0.9 * ( translation*0.175 + vNormal *factor + mytime ), vec3( period ) );\n  float n = pnoise( 1.5 * ( translation*0.175 + vNormal *factor + mytime ), vec3( period ) );\n#endif\n\n  n = pow( .001, n );\n//float n = 10.0 * pnoise( 5.0 * ( vNormal + uTime ), vec3( 10.0 ) ) * pnoise( .5 * ( vNormal + uTime ), vec3( 10.0 ) );\n//n += .5 * pnoise( 4.0 * vNormal, vec3( 10.0 ) );\n#ifdef BLACK\n  vec3 color = vec3( 1.0-(r + n), 1.0-(g + n), 1.0-(b + n) );\n#else\n  vec3 color = vec3( (r + n), (g + n), (b + n) );\n#endif\n  oFragColor = vec4( color, 1.0 );\n}\n"])
j=G.jm("perlin",p,o,n)
i=B.mK(!0,!0,1,2,3,20,128,16,4,!1)
h=G.kr("torusknot",k.d,4,k.e.x)
h.bw(G.kg(i.d,null))
o=i.dh()
n=h.d
h.y=J.j0(n.a)
H.b(h.ch!=null)
g=h.ch.length
if(g<768){h.saU(new Uint8Array(H.im(o)))
h.Q=5121}else if(g<196608){h.saU(new Uint16Array(H.im(o)))
h.Q=5123}else{h.saU(new Uint32Array(H.im(o)))
h.Q=5125}J.dI(n.a,h.e)
o=h.y
g=h.cx
f=J.p(g)
H.b(!!f.$iskK||!!f.$iskL||!!f.$iskM)
J.iZ(n.a,34963,o)
J.jN(n.a,34963,g,35048)
G.mZ(i,h)
e=G.kq("texture")
o=new T.R(new Float32Array(16))
o.X()
o.bq(-50,0,0)
e.E("uModelMatrix",o)
e.E("uColor",new T.x(new Float32Array(3)))
d=G.kq("perlin")
d.E("uTransformationMatrix",new T.R(new Float32Array(16)))
o=new T.R(new Float32Array(16))
o.X()
o.bq(50,0,0)
d.E("uModelMatrix",o)
c=G.jm("stars",p,$.$get$lg(),$.$get$lf())
o=$.$get$jZ()
b=new G.cq(P.Q(),"stars",!1,!0)
b.E("cDepthTest",!0)
b.E("cDepthWrite",!1)
b.E("cBlendEquation",o)
b.E("cStencilFunc",$.$get$jn())
a=s.createElement("canvas")
a.width=64
a.height=64
a0=C.w.cU(a,"2d")
a1=(a0&&C.p).ca(a0,32,32,1,32,32,22);(a1&&C.m).ax(a1,0,"gray")
C.m.ax(a1,1,"black")
a0.fillStyle=a1
C.p.eF(a0,0,0,64,64)
a1=C.p.ca(a0,32,32,1,32,32,6);(a1&&C.m).ax(a1,0,"white")
C.m.ax(a1,1,"gray")
a0.globalAlpha=0.9
a0.fillStyle=a1
a0.arc(32,32,4,0,6.283185307179586,!1)
a0.fill("nonzero")
b.E("uTexture",G.ki(p,"Utils::Particles",a,null,3553))
b.E("uPointSize",1000)
s=new T.R(new Float32Array(16))
s.X()
b.E("uModelMatrix",s)
a2=R.mR(c,2000,200)
t.a=0
P.mn([D.mx($.lk)],null,!1).aB(new G.iL(p,e,new G.iK(t,m,d,k,h,l,e,j,c,a2,b,r)))},
iK:function iK(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
_.ch=l},
iL:function iL(a,b,c){this.a=a
this.b=b
this.c=c}},R={
mR:function(a,b,c){var t,s,r,q
t="stars_"+b
s=b*3
r=new Float32Array(s)
for(q=0;q<s;++q)r[q]=($.$get$kO().eU()-0.5)*c
s=G.kr(t,a.d,0,a.e.x)
s.bw(r)
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
fN:function fN(){},
fO:function fO(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},D={
mx:function(a){var t,s,r
t=new P.E(0,$.v,null,[null])
s=document.createElement("img")
r=new W.hA(s,"load",!1,[W.f])
r.gb9(r).aB(new D.eW(new P.hp(t,[null]),s))
s.src=a
return t},
eW:function eW(a,b){this.a=a
this.b=b}},A={
iy:function(a){var t,s
t=C.Z.eG(a,0,new A.iz())
s=536870911&t+(C.b.cR(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
iz:function iz(){}},T={R:function R(a){this.a=a},aG:function aG(a){this.a=a},x:function x(a){this.a=a},al:function al(a){this.a=a}}
var v=[C,H,J,P,W,B,G,R,D,A,T]
setFunctionNamesIfNecessary(v)
var $={}
H.jc.prototype={}
J.a.prototype={
w:function(a,b){return a===b},
gu:function(a){return H.aB(a)},
k:function(a){return"Instance of '"+H.bu(a)+"'"},
gA:function(a){return new H.ak(H.ix(a),null)}}
J.eO.prototype={
k:function(a){return String(a)},
gu:function(a){return a?519018:218159},
gA:function(a){return C.at},
$isaf:1}
J.cl.prototype={
w:function(a,b){return null==b},
k:function(a){return"null"},
gu:function(a){return 0},
gA:function(a){return C.an},
$isI:1}
J.bn.prototype={
gu:function(a){return 0},
gA:function(a){return C.am},
k:function(a){return String(a)},
$iskm:1}
J.fq.prototype={}
J.aF.prototype={}
J.ax.prototype={
k:function(a){var t=a[$.$get$k7()]
return t==null?this.dc(a):J.bg(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isja:1}
J.au.prototype={
l:function(a,b){if(!!a.fixed$length)H.G(P.t("add"))
a.push(b)},
L:function(a,b){var t,s,r,q,p
t=a.length
if(!!a.fixed$length)H.G(P.t("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.O)(b),++r,t=p){q=b[r]
p=t+1
H.b(t===a.length||H.G(P.ah(a)))
a.push(q)}},
cq:function(a,b){return new H.bo(a,b,[H.ag(a,0),null])},
al:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.e(a[s])
return t.join(b)},
t:function(a,b){return a[b]},
gb9:function(a){if(a.length>0)return a[0]
throw H.c(H.ch())},
gba:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.c(H.ch())},
bp:function(a,b,c,d,e){var t,s,r
if(!!a.immutable$list)H.G(P.t("setRange"))
P.kw(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.G(P.aC(e,0,null,"skipCount",null))
s=J.U(d)
if(e+t>s.gj(d))throw H.c(H.mv())
if(e<b)for(r=t-1;r>=0;--r)a[b+r]=s.h(d,e+r)
else for(r=0;r<t;++r)a[b+r]=s.h(d,e+r)},
c_:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.c(P.ah(a))}return!1},
d6:function(a,b){if(!!a.immutable$list)H.G(P.t("sort"))
H.mN(a,P.nk())},
aI:function(a){return this.d6(a,null)},
B:function(a,b){var t
for(t=0;t<a.length;++t)if(J.B(a[t],b))return!0
return!1},
k:function(a){return P.eN(a,"[","]")},
gv:function(a){return new J.dN(a,a.length,0,null,[H.ag(a,0)])},
gu:function(a){return H.aB(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.G(P.t("set length"))
if(b<0)throw H.c(P.aC(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.bb(a,b))
if(b>=a.length||b<0)throw H.c(H.bb(a,b))
return a[b]},
i:function(a,b,c){if(!!a.immutable$list)H.G(P.t("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.bb(a,b))
if(b>=a.length||b<0)throw H.c(H.bb(a,b))
a[b]=c},
$iso:1,
$aso:function(){},
$isj:1,
$ish:1}
J.jb.prototype={}
J.dN.prototype={
gq:function(a){return this.d},
p:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.c(H.O(t))
r=this.c
if(r>=s){this.sbD(null)
return!1}this.sbD(t[r]);++this.c
return!0},
sbD:function(a){this.d=a}}
J.aW.prototype={
R:function(a,b){var t
if(typeof b!=="number")throw H.c(H.N(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaz(b)
if(this.gaz(a)===t)return 0
if(this.gaz(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaz:function(a){return a===0?1/a<0:a<0},
en:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.c(P.t(""+a+".ceil()"))},
a3:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.t(""+a+".round()"))},
eo:function(a,b,c){if(this.R(b,c)>0)throw H.c(H.N(b))
if(this.R(a,b)<0)return b
if(this.R(a,c)>0)return c
return a},
f7:function(a,b){var t
if(b>20)throw H.c(P.aC(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gaz(a))return"-"+t
return t},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu:function(a){return a&0x1FFFFFFF},
a5:function(a,b){if(typeof b!=="number")throw H.c(H.N(b))
return a+b},
a8:function(a,b){if(typeof b!=="number")throw H.c(H.N(b))
return a-b},
cS:function(a,b){if(typeof b!=="number")throw H.c(H.N(b))
return a/b},
G:function(a,b){if(typeof b!=="number")throw H.c(H.N(b))
return a*b},
aK:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bW(a,b)},
I:function(a,b){return(a|0)===a?a/b|0:this.bW(a,b)},
bW:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.c(P.t("Result of truncating division is "+H.e(t)+": "+H.e(a)+" ~/ "+b))},
aZ:function(a,b){var t
if(a>0)t=this.e8(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
e8:function(a,b){return b>31?0:a>>>b},
cR:function(a,b){if(typeof b!=="number")throw H.c(H.N(b))
return(a&b)>>>0},
de:function(a,b){if(typeof b!=="number")throw H.c(H.N(b))
return(a^b)>>>0},
aG:function(a,b){if(typeof b!=="number")throw H.c(H.N(b))
return a<b},
aF:function(a,b){if(typeof b!=="number")throw H.c(H.N(b))
return a>b},
cT:function(a,b){if(typeof b!=="number")throw H.c(H.N(b))
return a>=b},
gA:function(a){return C.aw},
$isD:1,
$asD:function(){return[P.a3]},
$isT:1,
$isa3:1}
J.ck.prototype={
gA:function(a){return C.av},
$isy:1}
J.cj.prototype={
gA:function(a){return C.au}}
J.aw.prototype={
aP:function(a,b){if(b>=a.length)throw H.c(H.bb(a,b))
return a.charCodeAt(b)},
a5:function(a,b){if(typeof b!=="string")throw H.c(P.jY(b,null,null))
return a+b},
d7:function(a,b,c){var t
if(c>a.length)throw H.c(P.aC(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bs:function(a,b){return this.d7(a,b,0)},
bv:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.fv(b,null,null))
if(b>c)throw H.c(P.fv(b,null,null))
if(c>a.length)throw H.c(P.fv(c,null,null))
return a.substring(b,c)},
d8:function(a,b){return this.bv(a,b,null)},
f6:function(a){return a.toLowerCase()},
ep:function(a,b,c){if(c>a.length)throw H.c(P.aC(c,0,a.length,null,null))
return H.nG(a,b,c)},
R:function(a,b){var t
if(typeof b!=="string")throw H.c(H.N(b))
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
gA:function(a){return C.ao},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.c(H.bb(a,b))
return a[b]},
$iso:1,
$aso:function(){},
$isD:1,
$asD:function(){return[P.n]},
$isn:1}
H.j.prototype={}
H.aX.prototype={
gv:function(a){return new H.cn(this,this.gj(this),0,null,[H.V(this,"aX",0)])},
aD:function(a,b){return this.da(0,b)},
f5:function(a,b){var t,s
t=H.A([],[H.V(this,"aX",0)])
C.a.sj(t,this.gj(this))
for(s=0;s<this.gj(this);++s)t[s]=this.t(0,s)
return t},
f4:function(a){return this.f5(a,!0)}}
H.cn.prototype={
gq:function(a){return this.d},
p:function(){var t,s,r,q
t=this.a
s=J.U(t)
r=s.gj(t)
if(this.b!==r)throw H.c(P.ah(t))
q=this.c
if(q>=r){this.sac(null)
return!1}this.sac(s.t(t,q));++this.c
return!0},
sac:function(a){this.d=a}}
H.cp.prototype={
gv:function(a){return new H.f_(null,J.aM(this.a),this.b,this.$ti)},
gj:function(a){return J.bf(this.a)},
$asP:function(a,b){return[b]}}
H.ea.prototype={$isj:1,
$asj:function(a,b){return[b]}}
H.f_.prototype={
p:function(){var t=this.b
if(t.p()){this.sac(this.c.$1(t.gq(t)))
return!0}this.sac(null)
return!1},
gq:function(a){return this.a},
sac:function(a){this.a=a},
$asci:function(a,b){return[b]}}
H.bo.prototype={
gj:function(a){return J.bf(this.a)},
t:function(a,b){return this.b.$1(J.lF(this.a,b))},
$asj:function(a,b){return[b]},
$asaX:function(a,b){return[b]},
$asP:function(a,b){return[b]}}
H.cT.prototype={
gv:function(a){return new H.hm(J.aM(this.a),this.b,this.$ti)}}
H.hm.prototype={
p:function(){var t,s
for(t=this.a,s=this.b;t.p();)if(s.$1(t.gq(t)))return!0
return!1},
gq:function(a){var t=this.a
return t.gq(t)}}
H.aS.prototype={}
H.iU.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.iV.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.i2.prototype={
seP:function(a){this.z=a},
seR:function(a){this.ch=a}}
H.b4.prototype={
dF:function(){var t,s
t=this.e
s=t.a
this.c.l(0,s)
this.dK(s,t)},
bZ:function(a,b){if(!this.f.w(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.b5()},
eZ:function(a){var t,s,r,q,p
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
if(q===r.c)r.bQ();++r.d}this.y=!1}this.b5()},
ed:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.p(a),s=0;r=this.ch,s<r.length;s+=2)if(t.w(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
eY:function(a){var t,s,r
if(this.ch==null)return
for(t=J.p(a),s=0;r=this.ch,s<r.length;s+=2)if(t.w(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.G(P.t("removeRange"))
P.kw(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
d3:function(a,b){if(!this.r.w(0,a))return
this.db=b},
eJ:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.H(0,c)
return}H.b(b===1)
t=this.cx
if(t==null){t=P.ji(null,null)
this.cx=t}t.S(0,new H.hW(a,c))},
eI:function(a,b){var t
if(!this.r.w(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.aA()
return}H.b(b===1)
t=this.cx
if(t==null){t=P.ji(null,null)
this.cx=t}t.S(0,this.geQ())},
eK:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.a4(a)
if(b!=null)P.a4(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.bg(a)
s[1]=b==null?null:b.k(0)
for(r=new P.bF(t,t.r,null,null,[null]),r.c=t.e;r.p();)r.d.H(0,s)},
ag:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.H(o)
p=H.a2(o)
this.eK(q,p)
if(this.db){this.aA()
if(this===u.globalState.e)throw o}}finally{this.cy=H.ng(r)
u.globalState.d=H.jF(t,"$isb4")
if(t!=null)$=t.geO()
if(this.cx!=null)for(;n=this.cx,!n.gak(n);)this.cx.cs().$0()}return s},
cp:function(a){return this.b.h(0,a)},
dK:function(a,b){var t=this.b
if(t.F(0,a))throw H.c(P.cb("Registry: ports must be registered only once."))
t.i(0,a,b)},
b5:function(){var t=this.b
if(t.gj(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.aA()},
aA:function(){var t,s,r
t=this.cx
if(t!=null)t.U(0)
for(t=this.b,s=t.gcN(t),s=s.gv(s);s.p();)s.gq(s).dN()
t.U(0)
this.c.U(0)
u.globalState.z.am(0,this.a)
this.dx.U(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].H(0,t[r+1])
this.ch=null}},
geO:function(){return this.d},
geq:function(){return this.e}}
H.hW.prototype={
$0:function(){this.a.H(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.hB.prototype={
ex:function(){var t=this.a
if(t.b===t.c)return
return t.cs()},
cv:function(){var t,s,r
t=this.ex()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.F(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gak(s)}else s=!1
else s=!1
else s=!1
if(s)H.G(P.cb("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gak(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.az(["command","close"])
r=new H.a1(!0,P.b5(null,P.y)).J(r)
s.toString
self.postMessage(r)}return!1}t.eV()
return!0},
bU:function(){if(self.window!=null)new H.hC(this).$0()
else for(;this.cv(););},
an:function(){var t,s,r,q,p
if(!u.globalState.x)this.bU()
else try{this.bU()}catch(r){t=H.H(r)
s=H.a2(r)
q=u.globalState.Q
p=P.az(["command","error","msg",H.e(t)+"\n"+H.e(s)])
p=new H.a1(!0,P.b5(null,P.y)).J(p)
q.toString
self.postMessage(p)}}}
H.hC.prototype={
$0:function(){if(!this.a.cv())return
P.mP(C.y,this)},
$S:function(){return{func:1,v:true}}}
H.aJ.prototype={
eV:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.ag(this.b)}}
H.i1.prototype={}
H.eL.prototype={
$0:function(){H.mr(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.eM.prototype={
$0:function(){var t,s
t=this.a
t.x=!0
if(!this.b)this.c.$1(this.d)
else{s=this.c
if(H.bc(s,{func:1,args:[P.I,P.I]}))s.$2(this.e,this.d)
else if(H.bc(s,{func:1,args:[P.I]}))s.$1(this.e)
else s.$0()}t.b5()},
$S:function(){return{func:1,v:true}}}
H.hv.prototype={}
H.b6.prototype={
H:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.n3(b)
if(t.geq()===s){s=J.U(r)
switch(s.h(r,0)){case"pause":t.bZ(s.h(r,1),s.h(r,2))
break
case"resume":t.eZ(s.h(r,1))
break
case"add-ondone":t.ed(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.eY(s.h(r,1))
break
case"set-errors-fatal":t.d3(s.h(r,1),s.h(r,2))
break
case"ping":t.eJ(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.eI(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.am(0,s)
break}return}u.globalState.f.a.S(0,new H.aJ(t,new H.i3(this,r),"receive"))},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.b6){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gu:function(a){return this.b.a}}
H.i3.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dI(0,this.b)},
$S:function(){return{func:1}}}
H.bQ.prototype={
H:function(a,b){var t,s,r
t=P.az(["command","message","port",this,"msg",b])
s=new H.a1(!0,P.b5(null,P.y)).J(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bQ){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gu:function(a){return C.b.de((this.b<<16^this.a<<8)>>>0,this.c)}}
H.cD.prototype={
dN:function(){this.c=!0
this.b=null},
dI:function(a,b){if(this.c)return
this.b.$1(b)},
$ismH:1}
H.h4.prototype={
dw:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.S(0,new H.aJ(s,new H.h5(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){H.iu()
this.c=self.setTimeout(H.ba(new H.h6(this,b),0),a)}else{H.b(a>0)
throw H.c(P.t("Timer greater than 0."))}}}
H.h5.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.h6.prototype={
$0:function(){var t=this.a
t.c=null
H.iJ()
t.d=1
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.aq.prototype={
gu:function(a){var t=this.a
t=C.b.aZ(t,0)^C.b.I(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
w:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.aq){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.a1.prototype={
J:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gj(t))
t=J.p(a)
if(!!t.$isbr)return["buffer",a]
if(!!t.$isb_)return["typed",a]
if(!!t.$iso)return this.d_(a)
if(!!t.$ismo){r=this.gcX()
q=t.gD(a)
q=H.jj(q,r,H.V(q,"P",0),null)
q=P.ko(q,!0,H.V(q,"P",0))
t=t.gcN(a)
t=H.jj(t,r,H.V(t,"P",0),null)
return["map",q,P.ko(t,!0,H.V(t,"P",0))]}if(!!t.$iskm)return this.d0(a)
if(!!t.$isa)this.cL(a)
if(!!t.$ismH)this.ao(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isb6)return this.d1(a)
if(!!t.$isbQ)return this.d2(a)
if(!!t.$isas){p=a.$static_name
if(p==null)this.ao(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isaq)return["capability",a.a]
if(!(a instanceof P.C))this.cL(a)
return["dart",u.classIdExtractor(a),this.cZ(u.classFieldsExtractor(a))]},
ao:function(a,b){throw H.c(P.t((b==null?"Can't transmit:":b)+" "+H.e(a)))},
cL:function(a){return this.ao(a,null)},
d_:function(a){var t
H.b(typeof a!=="string")
t=this.cY(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.ao(a,"Can't serialize indexable: ")},
cY:function(a){var t,s
t=[]
C.a.sj(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.J(a[s])
return t},
cZ:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.J(a[t]))
return a},
d0:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.ao(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sj(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.J(a[t[r]])
return["js-object",t,s]},
d2:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
d1:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.aI.prototype={
V:function(a){var t,s,r,q
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.c(P.dM("Bad serialized message: "+H.e(a)))
switch(C.a.gb9(a)){case"ref":H.b(J.B(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.b(J.B(a[0],"buffer"))
t=a[1]
C.a.l(this.b,t)
return t
case"typed":H.b(J.B(a[0],"typed"))
t=a[1]
C.a.l(this.b,t)
return t
case"fixed":H.b(J.B(a[0],"fixed"))
t=a[1]
C.a.l(this.b,t)
return J.av(H.A(this.af(t),[null]))
case"extendable":H.b(J.B(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.A(this.af(t),[null])
case"mutable":H.b(J.B(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.af(t)
case"const":H.b(J.B(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
return J.av(H.A(this.af(t),[null]))
case"map":return this.eA(a)
case"sendport":return this.eB(a)
case"raw sendport":H.b(J.B(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.ez(a)
case"function":H.b(J.B(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.b(J.B(a[0],"capability"))
return new H.aq(a[1])
case"dart":H.b(J.B(a[0],"dart"))
s=a[1]
r=a[2]
q=u.instanceFromClassId(s)
C.a.l(this.b,q)
this.af(r)
return u.initializeEmptyInstance(s,q,r)
default:throw H.c("couldn't deserialize: "+H.e(a))}},
af:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.V(a[t]))
return a},
eA:function(a){var t,s,r,q,p
H.b(J.B(a[0],"map"))
t=a[1]
s=a[2]
r=P.Q()
C.a.l(this.b,r)
t=J.lS(t,this.gey()).f4(0)
for(q=J.U(s),p=0;p<t.length;++p)r.i(0,t[p],this.V(q.h(s,p)))
return r},
eB:function(a){var t,s,r,q,p,o,n
H.b(J.B(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.cp(r)
if(o==null)return
n=new H.b6(o,s)}else n=new H.bQ(t,r,s)
C.a.l(this.b,n)
return n},
ez:function(a){var t,s,r,q,p,o
H.b(J.B(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.U(t),p=J.U(s),o=0;o<q.gj(t);++o)r[q.h(t,o)]=this.V(p.h(s,o))
return r}}
H.fy.prototype={}
H.ha.prototype={
N:function(a){var t,s,r
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
H.fg.prototype={
k:function(a){var t=this.b
if(t==null)return"NullError: "+H.e(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.eQ.prototype={
k:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.e(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.e(this.a)+")"}}
H.hf.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.iW.prototype={
$1:function(a){if(!!J.p(a).$isaR)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(a){return{func:1,args:[,]}}}
H.di.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t},
$isb0:1}
H.iE.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.iF.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.iG.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.iH.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.iI.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.as.prototype={
k:function(a){return"Closure '"+H.bu(this).trim()+"'"},
$isja:1,
gfb:function(){return this},
$D:null}
H.h_.prototype={}
H.fM.prototype={
k:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bh.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bh))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gu:function(a){var t,s
t=this.c
if(t==null)s=H.aB(this.a)
else s=typeof t!=="object"?J.be(t):H.aB(t)
return(s^H.aB(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.bu(t)+"'")}}
H.hc.prototype={
k:function(a){return this.a}}
H.dR.prototype={
k:function(a){return this.a}}
H.fC.prototype={
k:function(a){return"RuntimeError: "+H.e(this.a)}}
H.ho.prototype={
k:function(a){return C.i.a5("Assertion failed: ",P.ca(this.a))}}
H.ak.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gu:function(a){return J.be(this.a)},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.ak){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.a8.prototype={
gj:function(a){return this.a},
gak:function(a){return this.a===0},
gD:function(a){return new H.eT(this,[H.ag(this,0)])},
gcN:function(a){return H.jj(this.gD(this),new H.eP(this),H.ag(this,0),H.ag(this,1))},
F:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bN(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bN(s,b)}else return this.eL(b)},
eL:function(a){var t=this.d
if(t==null)return!1
return this.aj(this.au(t,this.ai(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.ad(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.ad(r,b)
return s==null?null:s.b}else return this.eM(b)},
eM:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.au(t,this.ai(a))
r=this.aj(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aW()
this.b=t}this.bF(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aW()
this.c=s}this.bF(s,b,c)}else{r=this.d
if(r==null){r=this.aW()
this.d=r}q=this.ai(b)
p=this.au(r,q)
if(p==null)this.aY(r,q,[this.aX(b,c)])
else{o=this.aj(p,b)
if(o>=0)p[o].b=c
else p.push(this.aX(b,c))}}},
am:function(a,b){if(typeof b==="string")return this.bT(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bT(this.c,b)
else return this.eN(b)},
eN:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.au(t,this.ai(a))
r=this.aj(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bX(q)
return q.b},
U:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aV()}},
ah:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.c(P.ah(this))
t=t.c}},
bF:function(a,b,c){var t=this.ad(a,b)
if(t==null)this.aY(a,b,this.aX(b,c))
else t.b=c},
bT:function(a,b){var t
if(a==null)return
t=this.ad(a,b)
if(t==null)return
this.bX(t)
this.bO(a,b)
return t.b},
aV:function(){this.r=this.r+1&67108863},
aX:function(a,b){var t,s
t=new H.eS(a,b,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.aV()
return t},
bX:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.aV()},
ai:function(a){return J.be(a)&0x3ffffff},
aj:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.B(a[s].a,b))return s
return-1},
k:function(a){return P.kp(this)},
ad:function(a,b){return a[b]},
au:function(a,b){return a[b]},
aY:function(a,b,c){H.b(c!=null)
a[b]=c},
bO:function(a,b){delete a[b]},
bN:function(a,b){return this.ad(a,b)!=null},
aW:function(){var t=Object.create(null)
this.aY(t,"<non-identifier-key>",t)
this.bO(t,"<non-identifier-key>")
return t},
$ismo:1}
H.eP.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(a){return{func:1,args:[,]}}}
H.eS.prototype={}
H.eT.prototype={
gj:function(a){return this.a.a},
gv:function(a){var t,s
t=this.a
s=new H.eU(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.eU.prototype={
gq:function(a){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.ah(t))
else{t=this.c
if(t==null){this.sbE(null)
return!1}else{this.sbE(t.a)
this.c=this.c.c
return!0}}},
sbE:function(a){this.d=a}}
H.iA.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[,]}}}
H.iB.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(a,b){return{func:1,args:[,P.n]}}}
H.iC.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[P.n]}}}
H.br.prototype={
gA:function(a){return C.af},
$isbr:1}
H.b_.prototype={$isb_:1}
H.f6.prototype={
gA:function(a){return C.ag}}
H.ct.prototype={
gj:function(a){return a.length},
$iso:1,
$aso:function(){},
$isr:1,
$asr:function(){}}
H.cu.prototype={
h:function(a,b){H.ad(b,a,a.length)
return a[b]},
i:function(a,b,c){H.ad(b,a,a.length)
a[b]=c},
$isj:1,
$asj:function(){return[P.T]},
$asaS:function(){return[P.T]},
$asl:function(){return[P.T]},
$ish:1,
$ash:function(){return[P.T]}}
H.cv.prototype={
i:function(a,b,c){H.ad(b,a,a.length)
a[b]=c},
$isj:1,
$asj:function(){return[P.y]},
$asaS:function(){return[P.y]},
$asl:function(){return[P.y]},
$ish:1,
$ash:function(){return[P.y]}}
H.cs.prototype={
gA:function(a){return C.ah},
$isez:1}
H.f7.prototype={
gA:function(a){return C.ai}}
H.f8.prototype={
gA:function(a){return C.aj},
h:function(a,b){H.ad(b,a,a.length)
return a[b]}}
H.f9.prototype={
gA:function(a){return C.ak},
h:function(a,b){H.ad(b,a,a.length)
return a[b]},
$iskj:1}
H.fa.prototype={
gA:function(a){return C.al},
h:function(a,b){H.ad(b,a,a.length)
return a[b]}}
H.fb.prototype={
gA:function(a){return C.ap},
h:function(a,b){H.ad(b,a,a.length)
return a[b]},
$iskK:1}
H.fc.prototype={
gA:function(a){return C.aq},
h:function(a,b){H.ad(b,a,a.length)
return a[b]},
$iskL:1}
H.cw.prototype={
gA:function(a){return C.ar},
gj:function(a){return a.length},
h:function(a,b){H.ad(b,a,a.length)
return a[b]}}
H.fd.prototype={
gA:function(a){return C.as},
gj:function(a){return a.length},
h:function(a,b){H.ad(b,a,a.length)
return a[b]},
$iskM:1}
H.bH.prototype={}
H.bI.prototype={}
H.bJ.prototype={}
H.bK.prototype={}
P.hr.prototype={
$1:function(a){var t,s
H.iJ()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(a){return{func:1,args:[,]}}}
P.hq.prototype={
$1:function(a){var t,s
t=this.a
H.b(t.a==null)
H.iu()
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(a){return{func:1,args:[{func:1,v:true}]}}}
P.hs.prototype={
$0:function(){H.iJ()
this.a.$0()},
$S:function(){return{func:1}}}
P.ht.prototype={
$0:function(){H.iJ()
this.a.$0()},
$S:function(){return{func:1}}}
P.X.prototype={}
P.eD.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.c)this.d.O(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.c)this.d.O(t.c,t.d)},
$S:function(a,b){return{func:1,args:[,,]}}}
P.eC.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){r[this.b]=a
if(s===0)this.c.bM(r)}else if(t.b===0&&!this.e)this.c.O(t.c,t.d)},
$S:function(a){return{func:1,args:[,]}}}
P.j7.prototype={}
P.hw.prototype={}
P.hp.prototype={
b7:function(a,b){var t=this.a
if(t.a!==0)throw H.c(P.fL("Future already completed"))
t.bG(b)}}
P.ig.prototype={
b7:function(a,b){var t=this.a
if(t.a!==0)throw H.c(P.fL("Future already completed"))
t.ab(b)}}
P.bD.prototype={
eS:function(a){if(this.c!==6)return!0
H.b(!0)
return this.b.b.be(this.d,a.a)},
eH:function(a){var t,s
t=(this.c&2)!==0
if(t){H.b(t)
t=this.e!=null}else t=!1
H.b(t)
s=this.e
t=this.b.b
if(H.bc(s,{func:1,args:[P.C,P.b0]}))return t.f0(s,a.a,a.b)
else return t.be(s,a.a)}}
P.E.prototype={
bg:function(a,b){var t,s,r
t=$.v
if(t!==C.d){t.toString
if(b!=null)b=P.n8(b,t)}s=new P.E(0,t,null,[null])
r=b==null?1:3
this.aN(new P.bD(null,s,r,a,b,[H.ag(this,0),null]))
return s},
aB:function(a){return this.bg(a,null)},
fa:function(a){var t,s
t=$.v
s=new P.E(0,t,null,this.$ti)
if(t!==C.d)t.toString
t=H.ag(this,0)
this.aN(new P.bD(null,s,8,a,null,[t,t]))
return s},
aO:function(a){H.b(this.a<4)
H.b(a.a>=4)
this.a=a.a
this.c=a.c},
aN:function(a){var t
H.b(a.a==null)
t=this.a
if(t<=1){a.a=H.jF(this.c,"$isbD")
this.c=a}else{if(t===2){H.b(!0)
t=this.c
if(t.a<4){t.aN(a)
return}this.aO(t)}H.b(this.a>=4)
t=this.b
t.toString
P.b8(null,null,t,new P.hH(this,a))}},
bS:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.b(!0)
s=this.c
if(s.a<4){s.bS(a)
return}this.aO(s)}H.b(this.a>=4)
t.a=this.aw(a)
s=this.b
s.toString
P.b8(null,null,s,new P.hP(t,this))}},
av:function(){H.b(this.a<4)
var t=this.c
this.c=null
return this.aw(t)},
aw:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
ab:function(a){var t,s,r
H.b(this.a<4)
t=this.$ti
s=H.bU(a,"$isX",t,"$asX")
if(s){t=H.bU(a,"$isE",t,null)
if(t)P.hK(a,this)
else P.kQ(a,this)}else{r=this.av()
H.b(this.a<4)
this.a=4
this.c=a
P.b3(this,r)}},
bM:function(a){var t
H.b(this.a<4)
H.b(!J.p(a).$isX)
t=this.av()
H.b(this.a<4)
this.a=4
this.c=a
P.b3(this,t)},
O:function(a,b){var t
H.b(this.a<4)
t=this.av()
H.b(this.a<4)
this.a=8
this.c=new P.aN(a,b)
P.b3(this,t)},
dO:function(a){return this.O(a,null)},
bG:function(a){var t
H.b(this.a<4)
t=H.bU(a,"$isX",this.$ti,"$asX")
if(t){this.dM(a)
return}H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.b8(null,null,t,new P.hJ(this,a))},
dM:function(a){var t=H.bU(a,"$isE",this.$ti,null)
if(t){if(a.a===8){H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.b8(null,null,t,new P.hO(this,a))}else P.hK(a,this)
return}P.kQ(a,this)},
dL:function(a,b){var t
H.b(this.a<4)
H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.b8(null,null,t,new P.hI(this,a,b))},
$isX:1,
gb_:function(){return this.a},
ge5:function(){return this.c}}
P.hH.prototype={
$0:function(){P.b3(this.a,this.b)},
$S:function(){return{func:1}}}
P.hP.prototype={
$0:function(){P.b3(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.hL.prototype={
$1:function(a){var t=this.a
H.b(t.a===1)
H.b(t.a===1)
t.a=0
t.ab(a)},
$S:function(a){return{func:1,args:[,]}}}
P.hM.prototype={
$2:function(a,b){var t=this.a
H.b(t.a===1)
t.O(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(a,b){return{func:1,args:[,],opt:[,]}}}
P.hN.prototype={
$0:function(){this.a.O(this.b,this.c)},
$S:function(){return{func:1}}}
P.hJ.prototype={
$0:function(){this.a.bM(this.b)},
$S:function(){return{func:1}}}
P.hO.prototype={
$0:function(){P.hK(this.b,this.a)},
$S:function(){return{func:1}}}
P.hI.prototype={
$0:function(){this.a.O(this.b,this.c)},
$S:function(){return{func:1}}}
P.hS.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.c
p=q.c
H.b((p&1)===0)
o=(p&2)===0
H.b(o)
t=null
try{H.b(o)
H.b(p===8)
t=q.b.b.cu(q.d)}catch(n){s=H.H(n)
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
p.b=q.c}else p.b=new P.aN(s,r)
p.a=!0
return}if(!!J.p(t).$isX){if(t instanceof P.E&&t.gb_()>=4){if(t.gb_()===8){q=t
H.b(q.gb_()===8)
p=this.b
p.b=q.ge5()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.aB(new P.hT(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.hT.prototype={
$1:function(a){return this.a},
$S:function(a){return{func:1,args:[,]}}}
P.hR.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.b((r.c&1)!==0)
this.a.b=r.b.b.be(r.d,this.c)}catch(q){t=H.H(q)
s=H.a2(q)
r=this.a
r.b=new P.aN(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.hQ.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.b(q.a===8)
t=q.c
q=this.c
if(q.eS(t)){H.b((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.eH(t)
p.a=!1}}catch(o){s=H.H(o)
r=H.a2(o)
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
P.cU.prototype={}
P.bw.prototype={
gj:function(a){var t,s
t={}
s=new P.E(0,$.v,null,[P.y])
t.a=0
this.co(new P.fU(t),!0,new P.fV(t,s),s.gbL())
return s},
gb9:function(a){var t,s
t={}
s=new P.E(0,$.v,null,[H.V(this,"bw",0)])
t.a=null
t.a=this.co(new P.fS(t,this,s),!0,new P.fT(s),s.gbL())
return s}}
P.fU.prototype={
$1:function(a){++this.a.a},
$S:function(a){return{func:1,args:[,]}}}
P.fV.prototype={
$0:function(){this.b.ab(this.a.a)},
$S:function(){return{func:1}}}
P.fS.prototype={
$1:function(a){P.n2(this.a.a,this.c,a)},
$S:function(a){return{func:1,args:[H.V(this.b,"bw",0)]}}}
P.fT.prototype={
$0:function(){var t,s,r,q
try{r=H.ch()
throw H.c(r)}catch(q){t=H.H(q)
s=H.a2(q)
P.n4(this.a,t,s)}},
$S:function(){return{func:1}}}
P.fR.prototype={}
P.il.prototype={
$0:function(){return this.a.ab(this.b)},
$S:function(){return{func:1}}}
P.jo.prototype={}
P.aN.prototype={
k:function(a){return H.e(this.a)},
$isaR:1}
P.ik.prototype={}
P.ip.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.bt()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.c(t)
r=H.c(t)
r.stack=s.k(0)
throw r},
$S:function(){return{func:1}}}
P.i5.prototype={
f1:function(a){var t,s,r
try{if(C.d===$.v){a.$0()
return}P.kW(null,null,this,a)}catch(r){t=H.H(r)
s=H.a2(r)
P.io(null,null,this,t,s)}},
f2:function(a,b){var t,s,r
try{if(C.d===$.v){a.$1(b)
return}P.kX(null,null,this,a,b)}catch(r){t=H.H(r)
s=H.a2(r)
P.io(null,null,this,t,s)}},
ej:function(a){return new P.i7(this,a)},
b6:function(a){return new P.i6(this,a)},
ek:function(a){return new P.i8(this,a)},
h:function(a,b){return},
cu:function(a){if($.v===C.d)return a.$0()
return P.kW(null,null,this,a)},
be:function(a,b){if($.v===C.d)return a.$1(b)
return P.kX(null,null,this,a,b)},
f0:function(a,b,c){if($.v===C.d)return a.$2(b,c)
return P.n9(null,null,this,a,b,c)}}
P.i7.prototype={
$0:function(){return this.a.cu(this.b)},
$S:function(){return{func:1}}}
P.i6.prototype={
$0:function(){return this.a.f1(this.b)},
$S:function(){return{func:1}}}
P.i8.prototype={
$1:function(a){return this.a.f2(this.b,a)},
$S:function(a){return{func:1,args:[,]}}}
P.i_.prototype={
ai:function(a){return H.nA(a)&0x3ffffff},
aj:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.hY.prototype={
gv:function(a){var t=new P.bF(this,this.r,null,null,[null])
t.c=this.e
return t},
gj:function(a){return this.a},
B:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dP(b)},
dP:function(a){var t=this.d
if(t==null)return!1
return this.at(t[this.as(a)],a)>=0},
cp:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.B(0,a)?a:null
else return this.dY(a)},
dY:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.as(a)]
r=this.at(s,a)
if(r<0)return
return J.aL(s,r).gdR()},
l:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.jx()
this.b=t}return this.bI(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.jx()
this.c=s}return this.bI(s,b)}else return this.S(0,b)},
S:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.jx()
this.d=t}s=this.as(b)
r=t[s]
if(r==null){q=[this.aR(b)]
H.b(q!=null)
t[s]=q}else{if(this.at(r,b)>=0)return!1
r.push(this.aR(b))}return!0},
am:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bJ(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bJ(this.c,b)
else return this.e_(0,b)},
e_:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.as(b)]
r=this.at(s,b)
if(r<0)return!1
this.bK(s.splice(r,1)[0])
return!0},
U:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aQ()}},
bI:function(a,b){var t
if(a[b]!=null)return!1
t=this.aR(b)
H.b(!0)
a[b]=t
return!0},
bJ:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bK(t)
delete a[b]
return!0},
aQ:function(){this.r=this.r+1&67108863},
aR:function(a){var t,s
t=new P.hZ(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.aQ()
return t},
bK:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.aQ()},
as:function(a){return J.be(a)&0x3ffffff},
at:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.B(a[s].a,b))return s
return-1}}
P.hZ.prototype={
gdR:function(){return this.a}}
P.bF.prototype={
gq:function(a){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.ah(t))
else{t=this.c
if(t==null){this.saa(null)
return!1}else{this.saa(t.a)
this.c=this.c.b
return!0}}},
saa:function(a){this.d=a}}
P.hV.prototype={}
P.jg.prototype={$isj:1}
P.cm.prototype={$isj:1,$ish:1}
P.l.prototype={
gv:function(a){return new H.cn(a,this.gj(a),0,null,[H.V(a,"l",0)])},
t:function(a,b){return this.h(a,b)},
cq:function(a,b){return new H.bo(a,b,[H.V(a,"l",0),null])},
eG:function(a,b,c){var t,s,r
t=this.gj(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gj(a))throw H.c(P.ah(a))}return s},
k:function(a){return P.eN(a,"[","]")}}
P.co.prototype={}
P.eZ.prototype={
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
for(t=J.aM(this.gD(a));t.p();){s=t.gq(t)
b.$2(s,this.h(a,s))}},
gj:function(a){return J.bf(this.gD(a))},
k:function(a){return P.kp(a)}}
P.eV.prototype={
dm:function(a,b){var t
H.b(!0)
t=new Array(8)
t.fixed$length=Array
this.sbV(H.A(t,[b]))},
gv:function(a){return new P.i0(this,this.c,this.d,this.b,null,this.$ti)},
gak:function(a){return this.b===this.c},
gj:function(a){return(this.c-this.b&this.a.length-1)>>>0},
t:function(a,b){var t,s
t=this.gj(this)
if(0>b||b>=t)H.G(P.z(b,this,"index",null,t))
s=this.a
return s[(this.b+b&s.length-1)>>>0]},
U:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
k:function(a){return P.eN(this,"{","}")},
cs:function(){var t,s,r
t=this.b
if(t===this.c)throw H.c(H.ch());++this.d
s=this.a
r=s[t]
s[t]=null
this.b=(t+1&s.length-1)>>>0
return r},
S:function(a,b){var t,s
t=this.a
s=this.c
t[s]=b
t=(s+1&t.length-1)>>>0
this.c=t
if(this.b===t)this.bQ();++this.d},
bQ:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.A(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.bp(s,0,q,t,r)
C.a.bp(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbV(s)},
sbV:function(a){this.a=a}}
P.i0.prototype={
gq:function(a){return this.e},
p:function(){var t,s
t=this.a
if(this.c!==t.d)H.G(P.ah(t))
s=this.d
if(s===this.b){this.saa(null)
return!1}this.saa(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
saa:function(a){this.e=a}}
P.fF.prototype={
L:function(a,b){var t
for(t=J.aM(b);t.p();)this.l(0,t.gq(t))},
k:function(a){return P.eN(this,"{","}")},
$isj:1}
P.fE.prototype={}
P.bG.prototype={}
P.af.prototype={}
P.D.prototype={}
P.bi.prototype={
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.bi))return!1
return this.a===b.a&&this.b===b.b},
R:function(a,b){return C.b.R(this.a,b.a)},
gu:function(a){var t=this.a
return(t^C.b.aZ(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.mc(H.mG(this))
s=P.c4(H.mE(this))
r=P.c4(H.mA(this))
q=P.c4(H.mB(this))
p=P.c4(H.mD(this))
o=P.c4(H.mF(this))
n=P.md(H.mC(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isD:1,
$asD:function(){return[P.bi]}}
P.T.prototype={}
P.at.prototype={
aG:function(a,b){return C.b.aG(this.a,b.gdQ())},
aF:function(a,b){return C.b.aF(this.a,b.gdQ())},
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.at))return!1
return this.a===b.a},
gu:function(a){return this.a&0x1FFFFFFF},
R:function(a,b){return C.b.R(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.e9()
s=this.a
if(s<0)return"-"+new P.at(0-s).k(0)
r=t.$1(C.b.I(s,6e7)%60)
q=t.$1(C.b.I(s,1e6)%60)
p=new P.e8().$1(s%1e6)
return""+C.b.I(s,36e8)+":"+H.e(r)+":"+H.e(q)+"."+H.e(p)},
$isD:1,
$asD:function(){return[P.at]}}
P.e8.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(a){return{func:1,ret:P.n,args:[P.y]}}}
P.e9.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(a){return{func:1,ret:P.n,args:[P.y]}}}
P.aR.prototype={}
P.c0.prototype={
k:function(a){return"Assertion failed"}}
P.bt.prototype={
k:function(a){return"Throw of null."}}
P.a6.prototype={
gaT:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaS:function(){return""},
k:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+t
q=this.gaT()+s+r
if(!this.a)return q
p=this.gaS()
o=P.ca(this.b)
return q+p+": "+H.e(o)}}
P.cC.prototype={
gaT:function(){return"RangeError"},
gaS:function(){var t,s,r
H.b(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.e(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.e(t)
else if(r>t)s=": Not in range "+H.e(t)+".."+H.e(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.e(t)}return s}}
P.eK.prototype={
gaT:function(){return"RangeError"},
gaS:function(){H.b(this.a)
if(J.lo(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.e(t)},
gj:function(a){return this.f}}
P.hg.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.he.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.b1.prototype={
k:function(a){return"Bad state: "+this.a}}
P.dT.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.e(P.ca(t))+"."}}
P.cK.prototype={
k:function(a){return"Stack Overflow"},
$isaR:1}
P.e1.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.j9.prototype={}
P.hG.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.e(t)}}
P.ec.prototype={
h:function(a,b){var t,s
t=this.a
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.G(P.jY(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.kt(b,"expando$values")
return s==null?null:H.kt(s,t)},
k:function(a){return"Expando:"+H.e(this.b)}}
P.y.prototype={}
P.P.prototype={
aD:function(a,b){return new H.cT(this,b,[H.V(this,"P",0)])},
gj:function(a){var t,s
H.b(!this.$isj)
t=this.gv(this)
for(s=0;t.p();)++s
return s},
gY:function(a){var t,s
t=this.gv(this)
if(!t.p())throw H.c(H.ch())
s=t.gq(t)
if(t.p())throw H.c(H.mw())
return s},
t:function(a,b){var t,s,r
if(b<0)H.G(P.aC(b,0,null,"index",null))
for(t=this.gv(this),s=0;t.p();){r=t.gq(t)
if(b===s)return r;++s}throw H.c(P.z(b,this,"index",null,s))},
k:function(a){return P.mu(this,"(",")")}}
P.ci.prototype={}
P.h.prototype={$isj:1}
P.aY.prototype={}
P.I.prototype={
gu:function(a){return P.C.prototype.gu.call(this,this)},
k:function(a){return"null"}}
P.a3.prototype={$isD:1,
$asD:function(){return[P.a3]}}
P.C.prototype={constructor:P.C,$isC:1,
w:function(a,b){return this===b},
gu:function(a){return H.aB(this)},
k:function(a){return"Instance of '"+H.bu(this)+"'"},
gA:function(a){return new H.ak(H.ix(this),null)},
toString:function(){return this.k(this)}}
P.b0.prototype={}
P.n.prototype={$isD:1,
$asD:function(){return[P.n]}}
P.bx.prototype={
gj:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga_:function(){return this.a}}
P.jr.prototype={}
W.k.prototype={}
W.c_.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gC:function(a){return a.z}}
W.dJ.prototype={
gj:function(a){return a.length}}
W.dK.prototype={
k:function(a){return String(a)}}
W.dL.prototype={
k:function(a){return String(a)}}
W.ao.prototype={$isao:1}
W.ap.prototype={
bh:function(a,b,c){if(c!=null)return this.dT(a,b,P.nj(c,null))
return this.dU(a,b)},
cU:function(a,b){return this.bh(a,b,null)},
dT:function(a,b,c){return a.getContext(b,c)},
dU:function(a,b){return a.getContext(b)},
$isap:1}
W.c1.prototype={
ax:function(a,b,c){return a.addColorStop(b,c)}}
W.c2.prototype={
ca:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
eF:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
aE:function(a){return P.ir(a.getContextAttributes())}}
W.ar.prototype={
gj:function(a){return a.length}}
W.dU.prototype={
gj:function(a){return a.length}}
W.dV.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.dW.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gC:function(a){return a.z}}
W.dX.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gC:function(a){return a.z}}
W.aP.prototype={
bH:function(a,b){var t,s
t=$.$get$k6()
s=t[b]
if(typeof s==="string")return s
s=this.e9(a,b)
t[b]=s
return s},
e9:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.me()+b
if(t in a)return t
return b},
gj:function(a){return a.length}}
W.dY.prototype={}
W.Y.prototype={}
W.aQ.prototype={}
W.dZ.prototype={
gj:function(a){return a.length}}
W.e_.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gC:function(a){return a.z}}
W.e0.prototype={
gj:function(a){return a.length}}
W.e2.prototype={
h:function(a,b){return a[b]},
gj:function(a){return a.length}}
W.e3.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gC:function(a){return a.z}}
W.c5.prototype={}
W.bj.prototype={
ee:function(a,b){return a.adoptNode(b)},
cV:function(a,b){return a.getElementById(b)},
eW:function(a,b){return a.querySelector(b)}}
W.e4.prototype={
k:function(a){return String(a)}}
W.c6.prototype={
eu:function(a,b){return a.createHTMLDocument(b)}}
W.e5.prototype={
gaC:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gC:function(a){return a.z}}
W.c7.prototype={
gaC:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gC:function(a){return a.z}}
W.c8.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[P.S]},
$isj:1,
$asj:function(){return[P.S]},
$isr:1,
$asr:function(){return[P.S]},
$asl:function(){return[P.S]},
$ish:1,
$ash:function(){return[P.S]},
$asm:function(){return[P.S]}}
W.c9.prototype={
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.ga4(a))+" x "+H.e(this.ga1(a))},
w:function(a,b){var t
if(b==null)return!1
t=J.p(b)
if(!t.$isS)return!1
return a.left===t.gcm(b)&&a.top===t.gcB(b)&&this.ga4(a)===t.ga4(b)&&this.ga1(a)===t.ga1(b)},
gu:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.ga4(a)
q=this.ga1(a)
return W.kU(W.aK(W.aK(W.aK(W.aK(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga1:function(a){return a.height},
gcm:function(a){return a.left},
gcB:function(a){return a.top},
ga4:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isS:1,
$asS:function(){}}
W.e6.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[P.n]},
$isj:1,
$asj:function(){return[P.n]},
$isr:1,
$asr:function(){return[P.n]},
$asl:function(){return[P.n]},
$ish:1,
$ash:function(){return[P.n]},
$asm:function(){return[P.n]}}
W.e7.prototype={
gj:function(a){return a.length}}
W.Z.prototype={
geh:function(a){return new W.hz(a)},
k:function(a){return a.localName},
M:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.ke
if(t==null){t=H.A([],[W.cy])
s=new W.cz(t)
C.a.l(t,W.kR(null))
C.a.l(t,W.kV())
$.ke=s
d=s}else d=t
t=$.kd
if(t==null){t=new W.dt(d)
$.kd=t
c=t}else{t.a=d
c=t}}if($.ai==null){t=document
s=t.implementation
s=(s&&C.M).eu(s,"")
$.ai=s
$.j8=s.createRange()
s=$.ai
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.ai.head;(t&&C.N).P(t,r)}t=$.ai
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.jF(s,"$isao")}t=$.ai
if(!!this.$isao)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.ai.body;(t&&C.o).P(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.B(C.Y,a.tagName)){t=$.j8;(t&&C.F).cW(t,q)
t=$.j8
p=(t&&C.F).er(t,b)}else{q.innerHTML=b
p=$.ai.createDocumentFragment()
for(t=J.i(p);s=q.firstChild,s!=null;)t.P(p,s)}t=$.ai.body
if(q==null?t!=null:q!==t)J.jR(q)
c.bo(p)
C.r.ee(document,p)
return p},
es:function(a,b,c){return this.M(a,b,c,null)},
d5:function(a,b,c,d){a.textContent=null
this.P(a,this.M(a,b,c,d))},
d4:function(a,b){return this.d5(a,b,null,null)},
a6:function(a,b){return a.getAttribute(b)},
e0:function(a,b){return a.removeAttribute(b)},
$isZ:1,
gf3:function(a){return a.tagName}}
W.eb.prototype={
$1:function(a){return!!J.p(a).$isZ},
$S:function(a){return{func:1,args:[,]}}}
W.f.prototype={$isf:1}
W.d.prototype={
dJ:function(a,b,c,d){return a.addEventListener(b,H.ba(c,1),!1)},
e2:function(a,b,c,d){return a.removeEventListener(b,H.ba(c,1),!1)}}
W.ew.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.cc]},
$isj:1,
$asj:function(){return[W.cc]},
$isr:1,
$asr:function(){return[W.cc]},
$asl:function(){return[W.cc]},
$ish:1,
$ash:function(){return[W.cc]},
$asm:function(){return[W.cc]}}
W.ex.prototype={
gj:function(a){return a.length}}
W.eB.prototype={
gj:function(a){return a.length}}
W.eF.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gC:function(a){return a.z}}
W.cf.prototype={}
W.eG.prototype={
gj:function(a){return a.length}}
W.bl.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.q]},
$isj:1,
$asj:function(){return[W.q]},
$isr:1,
$asr:function(){return[W.q]},
$asl:function(){return[W.q]},
$ish:1,
$ash:function(){return[W.q]},
$asm:function(){return[W.q]}}
W.cg.prototype={}
W.eH.prototype={
H:function(a,b){return a.send(b)}}
W.bm.prototype={}
W.aT.prototype={$isaT:1}
W.aU.prototype={$isaU:1}
W.aV.prototype={$isaV:1}
W.ay.prototype={$isay:1}
W.eX.prototype={
k:function(a){return String(a)}}
W.eY.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gC:function(a){return a.z}}
W.bp.prototype={}
W.f1.prototype={
gj:function(a){return a.length}}
W.f3.prototype={
fc:function(a,b,c){return a.send(b,c)},
H:function(a,b){return a.send(b)}}
W.bq.prototype={}
W.f4.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.cr]},
$isj:1,
$asj:function(){return[W.cr]},
$isr:1,
$asr:function(){return[W.cr]},
$asl:function(){return[W.cr]},
$ish:1,
$ash:function(){return[W.cr]},
$asm:function(){return[W.cr]}}
W.J.prototype={$isJ:1}
W.L.prototype={
gY:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.c(P.fL("No elements"))
if(s>1)throw H.c(P.fL("More than one element"))
return t.firstChild},
L:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.i(s),p=0;p<r;++p)q.P(s,t.firstChild)
return},
i:function(a,b,c){var t=this.a
J.lr(t,c,C.D.h(t.childNodes,b))},
gv:function(a){var t=this.a.childNodes
return new W.cd(t,t.length,-1,null,[H.V(t,"m",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){return C.D.h(this.a.childNodes,b)},
$asj:function(){return[W.q]},
$ascm:function(){return[W.q]},
$asl:function(){return[W.q]},
$ash:function(){return[W.q]},
$asbG:function(){return[W.q]}}
W.q.prototype={
eX:function(a){var t=a.parentNode
if(t!=null)J.iX(t,a)},
k:function(a){var t=a.nodeValue
return t==null?this.d9(a):t},
P:function(a,b){return a.appendChild(b)},
e1:function(a,b){return a.removeChild(b)},
e3:function(a,b,c){return a.replaceChild(b,c)},
$isq:1,
gbc:function(a){return a.previousSibling}}
W.cx.prototype={
bd:function(a){return a.previousNode()}}
W.bs.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.q]},
$isj:1,
$asj:function(){return[W.q]},
$isr:1,
$asr:function(){return[W.q]},
$asl:function(){return[W.q]},
$ish:1,
$ash:function(){return[W.q]},
$asm:function(){return[W.q]}}
W.a9.prototype={
gj:function(a){return a.length}}
W.fr.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.a9]},
$isj:1,
$asj:function(){return[W.a9]},
$isr:1,
$asr:function(){return[W.a9]},
$asl:function(){return[W.a9]},
$ish:1,
$ash:function(){return[W.a9]},
$asm:function(){return[W.a9]}}
W.fu.prototype={
H:function(a,b){return a.send(b)}}
W.cB.prototype={
er:function(a,b){return a.createContextualFragment(b)},
cW:function(a,b){return a.selectNodeContents(b)}}
W.cE.prototype={
H:function(a,b){return a.send(b)}}
W.fD.prototype={
gj:function(a){return a.length}}
W.aj.prototype={}
W.fH.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.cI]},
$isj:1,
$asj:function(){return[W.cI]},
$isr:1,
$asr:function(){return[W.cI]},
$asl:function(){return[W.cI]},
$ish:1,
$ash:function(){return[W.cI]},
$asm:function(){return[W.cI]}}
W.fJ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.cJ]},
$isj:1,
$asj:function(){return[W.cJ]},
$isr:1,
$asr:function(){return[W.cJ]},
$asl:function(){return[W.cJ]},
$ish:1,
$ash:function(){return[W.cJ]},
$asm:function(){return[W.cJ]}}
W.aa.prototype={
gj:function(a){return a.length}}
W.fP.prototype={
h:function(a,b){return this.bP(a,b)},
ah:function(a,b){var t,s
for(t=0;!0;++t){s=this.dX(a,t)
if(s==null)return
b.$2(s,this.bP(a,s))}},
gD:function(a){var t=H.A([],[P.n])
this.ah(a,new W.fQ(t))
return t},
gj:function(a){return a.length},
bP:function(a,b){return a.getItem(b)},
dX:function(a,b){return a.key(b)},
$asaZ:function(){return[P.n,P.n]}}
W.fQ.prototype={
$2:function(a,b){return C.a.l(this.a,a)},
$S:function(a,b){return{func:1,args:[,,]}}}
W.cM.prototype={
M:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aJ(a,b,c,d)
t=W.mg("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.L(s).L(0,new W.L(t))
return s}}
W.fY.prototype={
M:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aJ(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.K.M(t.createElement("table"),b,c,d)
t.toString
t=new W.L(t)
r=t.gY(t)
r.toString
t=new W.L(r)
q=t.gY(t)
s.toString
q.toString
new W.L(s).L(0,new W.L(q))
return s}}
W.fZ.prototype={
M:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aJ(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.K.M(t.createElement("table"),b,c,d)
t.toString
t=new W.L(t)
r=t.gY(t)
s.toString
r.toString
new W.L(s).L(0,new W.L(r))
return s}}
W.by.prototype={$isby:1}
W.h0.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.cO]},
$isj:1,
$asj:function(){return[W.cO]},
$isr:1,
$asr:function(){return[W.cO]},
$asl:function(){return[W.cO]},
$ish:1,
$ash:function(){return[W.cO]},
$asm:function(){return[W.cO]}}
W.h1.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.cN]},
$isj:1,
$asj:function(){return[W.cN]},
$isr:1,
$asr:function(){return[W.cN]},
$asl:function(){return[W.cN]},
$ish:1,
$ash:function(){return[W.cN]},
$asm:function(){return[W.cN]}}
W.h3.prototype={
gj:function(a){return a.length}}
W.aD.prototype={$isaD:1}
W.h7.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.cR]},
$isj:1,
$asj:function(){return[W.cR]},
$isr:1,
$asr:function(){return[W.cR]},
$asl:function(){return[W.cR]},
$ish:1,
$ash:function(){return[W.cR]},
$asm:function(){return[W.cR]}}
W.h8.prototype={
gj:function(a){return a.length}}
W.cS.prototype={
bd:function(a){return a.previousNode()}}
W.aE.prototype={}
W.hh.prototype={
k:function(a){return String(a)}}
W.hj.prototype={
gm:function(a){return a.x},
gC:function(a){return a.z}}
W.b2.prototype={$isb2:1}
W.hk.prototype={
gj:function(a){return a.length}}
W.hl.prototype={
H:function(a,b){return a.send(b)}}
W.aH.prototype={
gew:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.t("deltaY is not supported"))},
$isaH:1}
W.bC.prototype={
geg:function(a){var t,s
t=P.a3
s=new P.E(0,$.v,null,[t])
this.dS(a)
this.e4(a,W.l_(new W.hn(new P.ig(s,[t]))))
return s},
e4:function(a,b){return a.requestAnimationFrame(H.ba(b,1))},
dS:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.hn.prototype={
$1:function(a){this.a.b7(0,a)},
$S:function(a){return{func:1,args:[,]}}}
W.jt.prototype={}
W.hx.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.c3]},
$isj:1,
$asj:function(){return[W.c3]},
$isr:1,
$asr:function(){return[W.c3]},
$asl:function(){return[W.c3]},
$ish:1,
$ash:function(){return[W.c3]},
$asm:function(){return[W.c3]}}
W.hy.prototype={
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
w:function(a,b){var t
if(b==null)return!1
t=J.p(b)
if(!t.$isS)return!1
return a.left===t.gcm(b)&&a.top===t.gcB(b)&&a.width===t.ga4(b)&&a.height===t.ga1(b)},
gu:function(a){var t,s,r,q
t=a.left
s=a.top
r=a.width
q=a.height
return W.kU(W.aK(W.aK(W.aK(W.aK(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga1:function(a){return a.height},
ga4:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.hU.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.ce]},
$isj:1,
$asj:function(){return[W.ce]},
$isr:1,
$asr:function(){return[W.ce]},
$asl:function(){return[W.ce]},
$ish:1,
$ash:function(){return[W.ce]},
$asm:function(){return[W.ce]}}
W.d7.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.q]},
$isj:1,
$asj:function(){return[W.q]},
$isr:1,
$asr:function(){return[W.q]},
$asl:function(){return[W.q]},
$ish:1,
$ash:function(){return[W.q]},
$asm:function(){return[W.q]}}
W.ic.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.aa]},
$isj:1,
$asj:function(){return[W.aa]},
$isr:1,
$asr:function(){return[W.aa]},
$asl:function(){return[W.aa]},
$ish:1,
$ash:function(){return[W.aa]},
$asm:function(){return[W.aa]}}
W.id.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.cL]},
$isj:1,
$asj:function(){return[W.cL]},
$isr:1,
$asr:function(){return[W.cL]},
$asl:function(){return[W.cL]},
$ish:1,
$ash:function(){return[W.cL]},
$asm:function(){return[W.cL]}}
W.hu.prototype={
ah:function(a,b){var t,s,r,q,p,o
for(t=this.gD(this),s=t.length,r=this.a,q=J.i(r),p=0;p<t.length;t.length===s||(0,H.O)(t),++p){o=t[p]
b.$2(o,q.a6(r,o))}},
gD:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.A([],[P.n])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.l(s,p.name)}return s},
$asco:function(){return[P.n,P.n]},
$asaZ:function(){return[P.n,P.n]},
gdV:function(){return this.a}}
W.hz.prototype={
h:function(a,b){return J.j4(this.a,b)},
gj:function(a){return this.gD(this).length}}
W.hD.prototype={
co:function(a,b,c,d){return W.a0(this.a,this.b,a,!1,H.ag(this,0))}}
W.hA.prototype={}
W.hE.prototype={
dD:function(a,b,c,d,e){this.eb()},
em:function(a){if(this.b==null)return
this.ec()
this.b=null
this.sdZ(null)
return},
eb:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.lp(r,this.c,t,!1)}},
ec:function(){var t,s,r
t=this.d
s=t!=null
if(s){r=this.b
r.toString
if(s)J.lq(r,this.c,t,!1)}},
sdZ:function(a){this.d=a}}
W.hF.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(a){return{func:1,args:[,]}}}
W.bE.prototype={
dE:function(a){var t,s
t=$.$get$jw()
if(t.gak(t)){for(s=0;s<262;++s)t.i(0,C.X[s],W.np())
for(s=0;s<12;++s)t.i(0,C.u[s],W.nq())}},
a0:function(a){return $.$get$kS().B(0,W.bk(a))},
T:function(a,b,c){var t,s,r
t=W.bk(a)
s=$.$get$jw()
r=s.h(0,H.e(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)}}
W.m.prototype={
gv:function(a){return new W.cd(a,this.gj(a),-1,null,[H.V(a,"m",0)])}}
W.cz.prototype={
a0:function(a){return C.a.c_(this.a,new W.ff(a))},
T:function(a,b,c){return C.a.c_(this.a,new W.fe(a,b,c))}}
W.ff.prototype={
$1:function(a){return a.a0(this.a)},
$S:function(a){return{func:1,args:[,]}}}
W.fe.prototype={
$1:function(a){return a.T(this.a,this.b,this.c)},
$S:function(a){return{func:1,args:[,]}}}
W.bL.prototype={
dH:function(a,b,c,d){var t,s,r
this.a.L(0,c)
t=b.aD(0,new W.ia())
s=b.aD(0,new W.ib())
this.b.L(0,t)
r=this.c
r.L(0,C.C)
r.L(0,s)},
a0:function(a){return this.a.B(0,W.bk(a))},
T:function(a,b,c){var t,s
t=W.bk(a)
s=this.c
if(s.B(0,H.e(t)+"::"+b))return this.d.ef(c)
else if(s.B(0,"*::"+b))return this.d.ef(c)
else{s=this.b
if(s.B(0,H.e(t)+"::"+b))return!0
else if(s.B(0,"*::"+b))return!0
else if(s.B(0,H.e(t)+"::*"))return!0
else if(s.B(0,"*::*"))return!0}return!1}}
W.ia.prototype={
$1:function(a){return!C.a.B(C.u,a)},
$S:function(a){return{func:1,args:[,]}}}
W.ib.prototype={
$1:function(a){return C.a.B(C.u,a)},
$S:function(a){return{func:1,args:[,]}}}
W.ih.prototype={
T:function(a,b,c){if(this.dd(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.j4(a,"template")==="")return this.e.B(0,b)
return!1}}
W.ii.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)},
$S:function(a){return{func:1,args:[,]}}}
W.ie.prototype={
a0:function(a){var t=J.p(a)
if(!!t.$isbv)return!1
t=!!t.$isu
if(t&&W.bk(a)==="foreignObject")return!1
if(t)return!0
return!1},
T:function(a,b,c){if(b==="is"||C.i.bs(b,"on"))return!1
return this.a0(a)}}
W.cd.prototype={
p:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbR(J.aL(this.a,t))
this.c=t
return!0}this.sbR(null)
this.c=s
return!1},
gq:function(a){return this.d},
sbR:function(a){this.d=a}}
W.cy.prototype={}
W.jk.prototype={}
W.js.prototype={}
W.i9.prototype={}
W.dt.prototype={
bo:function(a){new W.ij(this).$2(a,null)},
ae:function(a,b){if(b==null)J.jR(a)
else J.iX(b,a)},
e7:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.lI(a)
r=J.j4(s.gdV(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.H(n)}p="element unprintable"
try{p=J.bg(a)}catch(n){H.H(n)}try{o=W.bk(a)
this.e6(a,b,t,p,o,s,r)}catch(n){if(H.H(n) instanceof P.a6)throw n
else{this.ae(a,b)
window
m="Removing corrupted element "+H.e(p)
if(typeof console!="undefined")window.console.warn(m)}}},
e6:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.ae(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(t)
return}if(!this.a.a0(a)){this.ae(a,b)
window
t="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(t)
return}if(g!=null)if(!this.a.T(a,"is",g)){this.ae(a,b)
window
t="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(t)
return}t=f.gD(f)
s=H.A(t.slice(0),[H.ag(t,0)])
for(r=f.gD(f).length-1,t=f.a,q=J.i(t);r>=0;--r){p=s[r]
if(!this.a.T(a,J.lY(p),q.a6(t,p))){window
o="Removing disallowed attribute <"+H.e(e)+" "+p+'="'+H.e(q.a6(t,p))+'">'
if(typeof console!="undefined")window.console.warn(o)
q.a6(t,p)
q.e0(t,p)}}if(!!J.p(a).$isby)this.bo(a.content)}}
W.ij.prototype={
$2:function(a,b){var t,s,r,q
r=this.a
switch(a.nodeType){case 1:r.e7(a,b)
break
case 8:case 11:case 3:case 4:break
default:r.ae(a,b)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.lJ(t)}catch(q){H.H(q)
r=t
J.iX(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(a,b){return{func:1,v:true,args:[W.q,W.q]}}}
W.cV.prototype={}
W.cW.prototype={}
W.cX.prototype={}
W.cY.prototype={}
W.cZ.prototype={}
W.d_.prototype={}
W.d0.prototype={}
W.d1.prototype={}
W.d2.prototype={}
W.d5.prototype={}
W.d6.prototype={}
W.d8.prototype={}
W.d9.prototype={}
W.dc.prototype={}
W.dd.prototype={}
W.bM.prototype={}
W.bN.prototype={}
W.de.prototype={}
W.df.prototype={}
W.dj.prototype={}
W.dm.prototype={}
W.dn.prototype={}
W.bO.prototype={}
W.bP.prototype={}
W.dp.prototype={}
W.dq.prototype={}
W.du.prototype={}
W.dv.prototype={}
W.dw.prototype={}
W.dx.prototype={}
W.dy.prototype={}
W.dz.prototype={}
W.dA.prototype={}
W.dB.prototype={}
W.dC.prototype={}
W.dD.prototype={}
P.iq.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(a,b){return{func:1,args:[,,]}}}
P.hX.prototype={
eU:function(){return Math.random()}}
P.i4.prototype={}
P.S.prototype={}
P.ed.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ee.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
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
gn:function(a){return a.y},
gC:function(a){return a.z}}
P.er.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.es.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gC:function(a){return a.z}}
P.et.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eu.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ey.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eA.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.a_.prototype={}
P.a7.prototype={}
P.eI.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eR.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return this.W(a,b)},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
W:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.jf]},
$asl:function(){return[P.jf]},
$ish:1,
$ash:function(){return[P.jf]},
$asm:function(){return[P.jf]}}
P.f0.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fh.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return this.W(a,b)},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
W:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.jl]},
$asl:function(){return[P.jl]},
$ish:1,
$ash:function(){return[P.jl]},
$asm:function(){return[P.jl]}}
P.fo.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fs.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ft.prototype={
gj:function(a){return a.length}}
P.fw.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fx.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bv.prototype={$isbv:1}
P.fW.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return this.W(a,b)},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
W:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.n]},
$asl:function(){return[P.n]},
$ish:1,
$ash:function(){return[P.n]},
$asm:function(){return[P.n]}}
P.u.prototype={
M:function(a,b,c,d){var t,s,r,q,p,o
t=H.A([],[W.cy])
C.a.l(t,W.kR(null))
C.a.l(t,W.kV())
C.a.l(t,new W.ie())
c=new W.dt(new W.cz(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.o).es(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.L(q)
o=t.gY(t)
for(t=J.i(p);r=o.firstChild,r!=null;)t.P(p,r)
return p},
$isu:1}
P.fX.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bz.prototype={}
P.bA.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.h9.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return this.W(a,b)},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
W:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.jq]},
$asl:function(){return[P.jq]},
$ish:1,
$ash:function(){return[P.jq]},
$asm:function(){return[P.jq]}}
P.hi.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.d3.prototype={}
P.d4.prototype={}
P.da.prototype={}
P.db.prototype={}
P.dk.prototype={}
P.dl.prototype={}
P.dr.prototype={}
P.ds.prototype={}
P.dO.prototype={
gj:function(a){return a.length}}
P.dP.prototype={
gj:function(a){return a.length}}
P.aO.prototype={}
P.fi.prototype={
gj:function(a){return a.length}}
P.fA.prototype={
bY:function(a,b){return a.activeTexture(b)},
c0:function(a,b,c){return a.attachShader(b,c)},
c1:function(a,b,c){return a.bindBuffer(b,c)},
c2:function(a,b,c){return a.bindTexture(b,c)},
c3:function(a,b){return a.blendEquation(b)},
c4:function(a,b,c){return a.blendFunc(b,c)},
c5:function(a,b,c,d){return a.bufferData(b,c,d)},
c6:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c7:function(a,b){return a.compileShader(b)},
c8:function(a){return a.createBuffer()},
c9:function(a){return a.createProgram()},
cb:function(a,b){return a.createShader(b)},
cc:function(a){return a.createTexture()},
ce:function(a,b){return a.depthMask(b)},
cf:function(a,b){return a.disable(b)},
cg:function(a,b,c,d){return a.drawArrays(b,c,d)},
ci:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cj:function(a,b){return a.enable(b)},
ck:function(a,b){return a.enableVertexAttribArray(b)},
aE:function(a){return P.ir(a.getContextAttributes())},
bi:function(a){return a.getError()},
bj:function(a,b){return a.getProgramInfoLog(b)},
bk:function(a,b,c){return a.getProgramParameter(b,c)},
bl:function(a,b){return a.getShaderInfoLog(b)},
bm:function(a,b,c){return a.getShaderParameter(b,c)},
bn:function(a,b,c){return a.getUniformLocation(b,c)},
cn:function(a,b){return a.linkProgram(b)},
cr:function(a,b,c){return a.pixelStorei(b,c)},
br:function(a,b,c){return a.shaderSource(b,c)},
bt:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bf:function(a,b,c,d,e,f,g,h,i,j){var t,s
t=J.p(g)
if(!!t.$isaU)s=!0
else s=!1
if(s){this.b0(a,b,c,d,e,f,P.l4(g))
return}if(!!t.$isaV)s=!0
else s=!1
if(s){this.b1(a,b,c,d,e,f,g)
return}if(!!t.$isap)s=!0
else s=!1
if(s){this.b2(a,b,c,d,e,f,g)
return}if(!!t.$isb2)s=!0
else s=!1
if(s){this.b3(a,b,c,d,e,f,g)
return}if(!!t.$isaT)t=!0
else t=!1
if(t){this.b4(a,b,c,d,e,f,g)
return}throw H.c(P.dM("Incorrect number or type of arguments"))},
cw:function(a,b,c,d,e,f,g){return this.bf(a,b,c,d,e,f,g,null,null,null)},
b0:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b1:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b2:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b3:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b4:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cz:function(a,b,c,d){return a.texParameterf(b,c,d)},
cA:function(a,b,c,d){return a.texParameteri(b,c,d)},
cC:function(a,b,c){return a.uniform1f(b,c)},
cD:function(a,b,c){return a.uniform1fv(b,c)},
cE:function(a,b,c){return a.uniform1i(b,c)},
cF:function(a,b,c){return a.uniform1iv(b,c)},
cG:function(a,b,c){return a.uniform2fv(b,c)},
cH:function(a,b,c){return a.uniform3fv(b,c)},
cI:function(a,b,c){return a.uniform4fv(b,c)},
cJ:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cK:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cM:function(a,b){return a.useProgram(b)},
cO:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cQ:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fB.prototype={
ei:function(a,b){return a.beginTransformFeedback(b)},
el:function(a,b){return a.bindVertexArray(b)},
ev:function(a){return a.createVertexArray()},
eC:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
eD:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
eE:function(a){return a.endTransformFeedback()},
f8:function(a,b,c,d){this.ea(a,b,c,d)
return},
ea:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
f9:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bY:function(a,b){return a.activeTexture(b)},
c0:function(a,b,c){return a.attachShader(b,c)},
c1:function(a,b,c){return a.bindBuffer(b,c)},
c2:function(a,b,c){return a.bindTexture(b,c)},
c3:function(a,b){return a.blendEquation(b)},
c4:function(a,b,c){return a.blendFunc(b,c)},
c5:function(a,b,c,d){return a.bufferData(b,c,d)},
c6:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c7:function(a,b){return a.compileShader(b)},
c8:function(a){return a.createBuffer()},
c9:function(a){return a.createProgram()},
cb:function(a,b){return a.createShader(b)},
cc:function(a){return a.createTexture()},
ce:function(a,b){return a.depthMask(b)},
cf:function(a,b){return a.disable(b)},
cg:function(a,b,c,d){return a.drawArrays(b,c,d)},
ci:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cj:function(a,b){return a.enable(b)},
ck:function(a,b){return a.enableVertexAttribArray(b)},
aE:function(a){return P.ir(a.getContextAttributes())},
bi:function(a){return a.getError()},
bj:function(a,b){return a.getProgramInfoLog(b)},
bk:function(a,b,c){return a.getProgramParameter(b,c)},
bl:function(a,b){return a.getShaderInfoLog(b)},
bm:function(a,b,c){return a.getShaderParameter(b,c)},
bn:function(a,b,c){return a.getUniformLocation(b,c)},
cn:function(a,b){return a.linkProgram(b)},
cr:function(a,b,c){return a.pixelStorei(b,c)},
br:function(a,b,c){return a.shaderSource(b,c)},
bt:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bf:function(a,b,c,d,e,f,g,h,i,j){var t,s
t=J.p(g)
if(!!t.$isaU)s=!0
else s=!1
if(s){this.b0(a,b,c,d,e,f,P.l4(g))
return}if(!!t.$isaV)s=!0
else s=!1
if(s){this.b1(a,b,c,d,e,f,g)
return}if(!!t.$isap)s=!0
else s=!1
if(s){this.b2(a,b,c,d,e,f,g)
return}if(!!t.$isb2)s=!0
else s=!1
if(s){this.b3(a,b,c,d,e,f,g)
return}if(!!t.$isaT)t=!0
else t=!1
if(t){this.b4(a,b,c,d,e,f,g)
return}throw H.c(P.dM("Incorrect number or type of arguments"))},
cw:function(a,b,c,d,e,f,g){return this.bf(a,b,c,d,e,f,g,null,null,null)},
b0:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b1:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b2:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b3:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b4:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cz:function(a,b,c,d){return a.texParameterf(b,c,d)},
cA:function(a,b,c,d){return a.texParameteri(b,c,d)},
cC:function(a,b,c){return a.uniform1f(b,c)},
cD:function(a,b,c){return a.uniform1fv(b,c)},
cE:function(a,b,c){return a.uniform1i(b,c)},
cF:function(a,b,c){return a.uniform1iv(b,c)},
cG:function(a,b,c){return a.uniform2fv(b,c)},
cH:function(a,b,c){return a.uniform3fv(b,c)},
cI:function(a,b,c){return a.uniform4fv(b,c)},
cJ:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cK:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cM:function(a,b){return a.useProgram(b)},
cO:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cQ:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fK.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return P.ir(this.dW(a,b))},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
dW:function(a,b){return a.item(b)},
$isj:1,
$asj:function(){return[P.aY]},
$asl:function(){return[P.aY]},
$ish:1,
$ash:function(){return[P.aY]},
$asm:function(){return[P.aY]}}
P.dg.prototype={}
P.dh.prototype={}
B.iP.prototype={
$1:function(a){$.$get$is().i(0,a.which,!0)},
$S:function(a){return{func:1,args:[W.ay]}}}
B.iQ.prototype={
$1:function(a){$.$get$is().i(0,a.which,null)},
$S:function(a){return{func:1,args:[W.ay]}}}
B.iR.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.nh=t
$.ni=C.b.a8(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.jI=s-C.b.I(window.innerWidth,2)
$.lb=-(t-C.b.I(window.innerHeight,2))},
$S:function(a){return{func:1,args:[W.J]}}}
B.iS.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.bW=t-C.b.I(window.innerWidth,2)
$.bX=-(s-C.b.I(window.innerHeight,2))
if(a.button===2)$.$get$bV().i(0,"right",!0)
else $.$get$bV().i(0,"left",!0)},
$S:function(a){return{func:1,args:[W.J]}}}
B.iT.prototype={
$1:function(a){if(a.button===2)$.$get$bV().i(0,"right",null)
else $.$get$bV().i(0,"left",null)},
$S:function(a){return{func:1,args:[W.J]}}}
B.fj.prototype={
dq:function(a,b,c,d){var t
d.toString
W.a0(d,W.mh(d),new B.fk(this),!1,W.aH)
W.a0(d,"mousemove",new B.fl(this),!1,W.J)
t=W.aD
W.a0(d,"touchstart",new B.fm(),!1,t)
W.a0(d,"touchmove",new B.fn(this),!1,t)
B.nE(null)}}
B.fk.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.ax.gew(a)*r.k3
if(C.c.a8(r.fy,t)>0)r.fy=C.c.a8(r.fy,t)}catch(q){s=H.H(q)
P.a4(s)}},
$S:function(a){return{func:1,args:[W.aH]}}}
B.fl.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=t.go+C.b.a8($.jI,$.bW)*0.01
s=t.id
r=$.bX
q=$.lb
t.id=s+(r-q)*0.01
$.bW=$.jI
$.bX=q}},
$S:function(a){return{func:1,args:[W.J]}}}
B.fm.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.a3(t.clientX)
C.c.a3(t.clientY)
$.bW=s
C.c.a3(t.clientX)
$.bX=C.c.a3(t.clientY)},
$S:function(a){return{func:1,args:[W.aD]}}}
B.fn.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.a3(t.clientX)
t=C.c.a3(t.clientY)
r=this.a
r.go=r.go+C.b.a8(s,$.bW)*0.01
r.id=r.id+($.bX-t)*0.01
$.bW=s
$.bX=t},
$S:function(a){return{func:1,args:[W.aD]}}}
G.f5.prototype={}
G.hd.prototype={
E:function(a,b){var t=this.d
if(H.ae(!t.F(0,a)))H.am("uniform "+a+" already set")
t.i(0,a,b)},
bz:function(){return this.d},
k:function(a){var t,s,r,q
t=H.A(["{"+new H.ak(H.ix(this),null).k(0)+"}["+this.a+"]"],[P.n])
for(s=this.d,r=s.gD(s),r=r.gv(r);r.p();){q=r.gq(r)
C.a.l(t,H.e(q)+": "+H.e(s.h(0,q)))}return C.a.al(t,"\n")}}
G.dQ.prototype={}
G.dS.prototype={
cl:function(a,b,c){J.lG(this.a,b)
if(c>0)J.m3(this.a,b,c)},
cP:function(a,b,c,d,e,f,g,h){J.iZ(this.a,34962,b)
J.m4(this.a,c,d,e,!1,g,h)}}
G.ev.prototype={}
G.eE.prototype={
dh:function(){var t,s,r,q,p,o,n,m,l
t=this.c
s=t.length
H.b(s>0)
s=new Array(t.length*6)
s.fixed$length=Array
r=H.A(s,[P.y])
for(s=this.b,q=0,p=0;!1;++p){o=s[p]
r[q]=o.gfe(o)
r[q+1]=o.gff(o)
r[q+2]=o.gfg(o)
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
dj:function(a,b){var t,s,r,q,p,o,n,m
t=a*b
H.b(this.d.length===t)
s=[]
this.e.i(0,"aTexUV",s)
for(r=b-1,q=a-1,p=0;p<b;++p)for(o=p/r,n=0;n<a;++n){m=new Float32Array(2)
m[0]=o
m[1]=n/q
C.a.l(s,new T.aG(m))}H.b(s.length===t)},
di:function(a,b,c){var t,s,r,q,p,o,n,m,l
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
C.a.l(t,new G.ev(p+m,l+m,l+n,p+n))
n=m}q=o}},
k:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gD(s),r=r.gv(r);r.p();){q=r.gq(r)
p=$.$get$M().h(0,q).a
C.a.l(t,H.e(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.al(t," ")}}
G.cQ.prototype={}
G.cP.prototype={}
G.cq.prototype={
dn:function(a){this.E("cDepthTest",!0)
this.E("cDepthWrite",!0)
this.E("cBlendEquation",$.$get$k_())
this.E("cStencilFunc",$.$get$jn())}}
G.f2.prototype={
bx:function(a,b,c){var t,s
if(C.i.aP(a,0)===105){if(H.ae(C.b.aK(b.length,c)===this.z))H.am("ChangeAttribute "+this.z)}else{t=C.b.aK(b.length,c)
if(H.ae(t===(this.ch.length/3|0)))H.am("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.iZ(t.a,34962,s)
J.jN(t.a,34962,b,35048)},
dk:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
a9:function(a,b,c){var t,s,r,q,p,o
t=J.jK(a,0)===105
if(t&&this.z===0)this.z=C.b.aK(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.j0(r.a))
this.bx(a,b,c)
q=$.$get$M().h(0,a)
if(q==null)throw H.c("Unknown canonical "+a)
p=this.x
if(H.ae(p.F(0,a)))H.am("unexpected attribute "+a)
o=p.h(0,a)
J.dI(r.a,this.e)
r.cl(0,o,t?1:0)
r.cP(0,s.h(0,a),o,q.by(),5126,!1,0,0)},
bw:function(a){var t,s,r,q,p
t=this.r
s=this.d
t.i(0,"aPosition",J.j0(s.a))
this.ch=a
this.bx("aPosition",a,3)
r=$.$get$M().h(0,"aPosition")
if(r==null)throw H.c("Unknown canonical aPosition")
q=this.x
H.b(q.F(0,"aPosition"))
p=q.h(0,"aPosition")
J.dI(s.a,this.e)
s.cl(0,p,0)
s.cP(0,t.h(0,"aPosition"),p,r.by(),5126,!1,0,0)},
k:function(a){var t,s,r,q
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,r=t.gD(t),r=r.gv(r);r.p();){q=r.gq(r)
C.a.l(s,H.e(q)+":"+t.h(0,q).length)}return"MESH["+this.a+"] "+C.a.al(s,"  ")},
saU:function(a){this.cx=a}}
G.fp.prototype={
df:function(a,b){var t=C.b.cS(a,b)
if(this.z===t)return
this.z=t
this.bB()},
bB:function(){var t,s,r,q,p,o,n
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
t.a7(0,0,1/(p*s))
t.a7(1,1,1/p)
t.a7(2,2,(q+r)/o)
t.a7(3,2,-1)
t.a7(2,3,2*r*q/o)},
bz:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.x(new Float32Array(3))
o.aH(r,q,p)
p=this.d
p.i(0,"uEyePosition",o)
o=this.cy
o.K(t)
t=o.a
t[12]=0
t[13]=0
t[14]=0
t[15]=1
n=-s[12]
m=-s[13]
l=-s[14]
s=J.p(n)
r=!!s.$isal
k=r?s.gaC(n):1
if(!!s.$isx){j=s.gm(n)
m=s.gn(n)
l=s.gC(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
l=s.gC(n)
n=j}else if(!(typeof n==="number")){n=null
m=null
l=null}s=C.c.G(t[0],n)
r=C.c.G(t[4],m)
q=C.c.G(t[8],l)
i=t[12]
h=C.c.G(t[1],n)
g=C.c.G(t[5],m)
f=C.c.G(t[9],l)
e=t[13]
d=C.c.G(t[2],n)
c=C.c.G(t[6],m)
b=C.c.G(t[10],l)
a=t[14]
a0=C.c.G(t[3],n)
a1=C.c.G(t[7],m)
a2=C.c.G(t[11],l)
a3=t[15]
t[12]=s+r+q+i*k
t[13]=h+g+f+e*k
t[14]=d+c+b+a*k
t[15]=a0+a1+a2+a3*k
a3=this.cx
a3.K(this.db)
a3.eT(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.fz.prototype={
dr:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.O)(t),++o){n=t[o]
r.i(0,n,J.jQ(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.O)(t),++o){n=t[o]
r.i(0,n,J.jQ(q.a,p,n))}},
dz:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gj(t)===s.gj(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gD(s),s=s.gv(s);s.p();){q=s.gq(s)
if(!t.F(0,q))C.a.l(r,q)}for(t=this.x,s=new P.bF(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.p();){q=s.d
if(!t.B(0,q))C.a.l(r,q)}return r},
dC:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gD(b),s=s.gv(s),r=this.d,q=this.y,p=this.z,o=0;s.p();){n=s.gq(s)
switch(J.jK(n,0)){case 117:if(q.F(0,n)){m=b.h(0,n)
if(p.F(0,n))H.iN("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$M().h(0,n)
if(l==null)H.G("unknown "+n)
H.b(q.F(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.j5(r.a,k,m)
else if(!!J.p(m).$iskj)J.m1(r.a,k,m)
break
case"float":if(l.c===0)J.m_(r.a,k,m)
else if(!!J.p(m).$isez)J.m0(r.a,k,m)
break
case"mat4":if(l.c===0){n=H.an(m,"$isR").a
J.jX(r.a,k,!1,n)}else if(!!J.p(m).$isez)J.jX(r.a,k,!1,m)
else if(H.ae(!1))H.am("bad unform: "+n)
break
case"mat3":if(l.c===0){n=C.P.gfd(H.an(m,"$isnN"))
J.jW(r.a,k,!1,n)}else if(!!J.p(m).$isez)J.jW(r.a,k,!1,m)
else if(H.ae(!1))H.am("bad unform: "+n)
break
case"vec4":n=l.c
j=r.a
if(n===0)J.jV(j,k,H.an(m,"$isal").a)
else J.jV(j,k,m)
break
case"vec3":n=l.c
j=r.a
if(n===0)J.jU(j,k,H.an(m,"$isx").a)
else J.jU(j,k,m)
break
case"vec2":n=l.c
j=r.a
if(n===0)J.jT(j,k,H.an(m,"$isaG").a)
else J.jT(j,k,m)
break
case"sampler2D":case"sampler2DShadow":n=C.b.a5(33984,this.ch)
J.jL(r.a,n)
n=H.an(m,"$isbB").b
J.bY(r.a,3553,n)
n=this.ch
J.j5(r.a,k,n)
this.ch=this.ch+1
break
case"samplerCube":H.b(n==="uCubeTexture")
n=C.b.a5(33984,this.ch)
J.jL(r.a,n)
n=H.an(m,"$isbB").b
J.bY(r.a,34067,n)
n=this.ch
J.j5(r.a,k,n)
this.ch=this.ch+1
break
default:H.iN("Error: unknow uniform type: "+j)
H.b(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":n=J.B(m,!0)
j=r.a
if(n)J.bZ(j,2929)
else J.j1(j,2929)
break
case"cStencilFunc":H.an(m,"$iscQ")
n=m.a
j=r.a
if(n===1281)J.j1(j,2960)
else{J.bZ(j,2960)
j=m.b
i=m.c
J.lV(r.a,n,j,i)}break
case"cDepthWrite":J.lA(r.a,m)
break
case"cBlendEquation":H.an(m,"$iscP")
n=m.a
j=r.a
if(n===1281)J.j1(j,3042)
else{J.bZ(j,3042)
j=m.b
i=m.c
J.lu(r.a,j,i)
J.lt(r.a,n)}break}++o
break}}h=P.mf(0,0,0,Date.now()-new P.bi(t,!1).a,0,0)
""+o
h.k(0)},
dg:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
Date.now()
t=this.d
J.m2(t.a,this.r)
this.ch=0
this.z.U(0)
for(s=0;s<2;++s){r=b[s]
this.dC(r.a,r.bz())}q=this.Q
q.U(0)
for(p=a.cy,p=p.gD(p),p=p.gv(p);p.p();)q.l(0,p.gq(p))
o=this.dz()
if(o.length!==0)P.a4("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(o)))
J.dI(a.d.a,a.e)
n=this.e.f.length>0
q=a.f
p=a.dk()
m=a.Q
l=a.z
if(n)J.ls(t.a,q)
if(m!==-1){k=t.a
if(l>1)J.lE(k,q,p,m,0,l)
else J.lD(k,q,p,m,0)}else{m=t.a
if(l>1)J.lC(m,q,0,p,l)
else J.lB(m,q,0,p)}if(n)J.lH(t.a)},
aM:function(a,b){return this.dg(a,b,null)}}
G.w.prototype={
by:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.b(!1)
return-1}}}
G.cF.prototype={
aL:function(a){var t,s,r,q,p
H.b(this.b==null)
for(t=a.length,s=this.c,r=this.x,q=0;q<a.length;a.length===t||(0,H.O)(a),++q){p=a[q]
H.b($.$get$M().F(0,p))
H.b(!C.a.B(s,p))
C.a.l(s,p)
r.i(0,p,this.r);++this.r}C.a.aI(s)},
Z:function(a){var t,s,r,q
H.b(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.O)(a),++r){q=a[r]
if(H.ae($.$get$M().F(0,q)))H.am("missing uniform "+q)
H.b(!C.a.B(s,q))
C.a.l(s,q)}C.a.aI(s)},
aq:function(a){var t,s,r
H.b(this.b==null)
for(t=this.e,s=0;s<1;++s){r=a[s]
H.b($.$get$M().F(0,r))
H.b(!C.a.B(t,r))
C.a.l(t,r)}C.a.aI(t)},
dt:function(a,b){H.b(this.b==null)
this.b=this.bC(!0,a,b)},
ar:function(a){return this.dt(a,null)},
ds:function(a,b){H.b(this.b==null)
this.b=this.bC(!1,a,b)},
bA:function(a){return this.ds(a,null)},
bC:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.b(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.O)(t),++o){n=t[o]
m=$.$get$M().h(0,n)
C.a.l(q,"layout (location="+H.e(p.h(0,n))+") in "+m.a+" "+H.e(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.O)(t),++o){k=t[o]
m=$.$get$M().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.e(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.O)(t),++o){k=t[o]
m=$.$get$M().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.e(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.O)(t),++o){k=t[o]
m=$.$get$M().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.e(k)+j+";")}C.a.l(q,"")
if(a)C.a.l(q,"void main(void) {")
C.a.L(q,b)
if(a)C.a.l(q,"}")
return C.a.al(q,"\n")}}
G.fI.prototype={}
G.h2.prototype={}
G.bB.prototype={
k:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.eJ.prototype={
dl:function(a,b,c,d,e){var t,s,r,q
t=this.d
s=this.c
J.bY(t.a,s,this.b)
J.lT(t.a,37440,1)
this.du(this.f)
r=this.e
q=r.e
if(q!==1)J.lX(t.a,s,34046,q)
J.jS(t.a,s,10240,r.r)
J.jS(t.a,s,10241,r.f)
H.b(J.lO(t.a)===0)
J.bY(t.a,s,null)},
du:function(a){var t,s
t=this.d
s=this.c
J.bY(t.a,s,this.b)
J.lW(t.a,s,0,6408,6408,5121,a)}}
R.cA.prototype={
ct:function(a){var t,s,r
t=this.fy
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.a4("size change "+H.e(s)+" "+H.e(r))
this.df(s,r)
J.m5(this.go.a,0,0,s,r)}}
R.fN.prototype={
dv:function(a,b,c){var t,s,r
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
J.iY(this.a,s)
r=this.dG(b,c,90,30)
this.d=r
J.iY(this.a,r)
t=t.createElement("div")
this.c=t
J.iY(this.a,t)},
dG:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.mX("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.x).bH(r,"float")
r.setProperty(p,"left","")
p=C.x.bH(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.q.P(t,s)}return t}}
R.fO.prototype={
dB:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.z.f7(s,2)+" fps"
t=this.c;(t&&C.q).d4(t,b)
r=C.b.I(30*C.z.en(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.q).P(t,q)},
dA:function(a){return this.dB(a,"")}}
B.fG.prototype={
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
b.sC(0,this.d*t*0.5*q)},
$S:function(a,b){return{func:1,v:true,args:[P.T,T.x]}}}
D.eW.prototype={
$1:function(a){return this.a.b7(0,this.b)},
$S:function(a){return{func:1,args:[,]}}}
A.iz.prototype={
$2:function(a,b){var t=536870911&a+J.be(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(a,b){return{func:1,args:[P.y,P.C]}}}
T.R.prototype={
a7:function(a,b,c){H.b(a<4)
H.b(b<4)
this.a[b*4+a]=c},
K:function(a){var t,s
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
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.R){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gu:function(a){return A.iy(this.a)},
ap:function(a){var t,s
t=new Float32Array(4)
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.al(t)},
X:function(){var t=this.a
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
bq:function(a,b,c){var t=this.a
t[14]=c
t[13]=b
t[12]=a},
eT:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.aG.prototype={
k:function(a){var t=this.a
return"["+H.e(t[0])+","+H.e(t[1])+"]"},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aG){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gu:function(a){return A.iy(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.x.prototype={
aH:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
K:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
k:function(a){var t=this.a
return"["+H.e(t[0])+","+H.e(t[1])+","+H.e(t[2])+"]"},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.x){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gu:function(a){return A.iy(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){return Math.sqrt(this.gbb())},
gbb:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
a2:function(a){var t,s,r
t=Math.sqrt(this.gbb())
if(t===0)return 0
s=1/t
r=this.a
r[0]=r[0]*s
r[1]=r[1]*s
r[2]=r[2]*s
return t},
b8:function(a){var t,s
t=a.a
s=this.a
return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]},
cd:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.x(new Float32Array(3))
t.aH(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
ay:function(a,b){var t,s
t=a.a
s=this.a
s[0]=s[0]+t[0]*b
s[1]=s[1]+t[1]*b
s[2]=s[2]+t[2]*b},
bu:function(a,b){var t,s
t=b.a
s=this.a
s[0]=s[0]-t[0]
s[1]=s[1]-t[1]
s[2]=s[2]-t[2]},
sm:function(a,b){this.a[0]=b
return b},
sn:function(a,b){this.a[1]=b
return b},
sC:function(a,b){this.a[2]=b
return b},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gC:function(a){return this.a[2]}}
T.al.prototype={
k:function(a){var t=this.a
return H.e(t[0])+","+H.e(t[1])+","+H.e(t[2])+","+H.e(t[3])},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.al){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gu:function(a){return A.iy(this.a)},
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
gC:function(a){return this.a[2]},
gaC:function(a){return this.a[3]}}
G.iK.prototype={
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
s.id=0}r=C.c.eo(s.id,-1.4707963267948965,1.4707963267948965)
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
p=s.k2
r=p.a
m[12]=m[12]+r[0]
m[13]=m[13]+r[1]
m[14]=m[14]+r[2]
l=m[12]
k=m[13]
j=m[14]
i=new T.x(new Float32Array(3))
i.aH(0,1,0)
r=s.e
q=r.a
q[0]=m[12]
q[1]=m[13]
q[2]=m[14]
q=new Float32Array(3)
h=new T.x(q)
h.K(r)
h.bu(0,p)
h.a2(0)
g=i.cd(h)
g.a2(0)
f=h.cd(g)
f.a2(0)
p=g.b8(r)
n=f.b8(r)
r=h.b8(r)
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
a3=Math.sqrt(d.gbb())
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
n.d.i(0,"uTime",b6/1000)
p=this.e
q=this.f
this.d.aM(p,[q,this.r])
this.x.aM(p,[q,n])
this.y.aM(this.z,[this.Q,q])
C.ay.geg(window).aB(this)
this.ch.dA(t.a)},
$S:function(a){return{func:1,v:true,args:[P.a3]}}}
G.iL.prototype={
$1:function(a){this.b.E("uTexture",G.ki(this.a,$.lk,J.aL(a,0),null,3553))
this.c.$1(0)},
$S:function(a){return{func:1,args:[P.h]}}}
J.a.prototype.d9=J.a.prototype.k
J.bn.prototype.dc=J.bn.prototype.k
P.P.prototype.da=P.P.prototype.aD
W.Z.prototype.aJ=W.Z.prototype.M
W.bL.prototype.dd=W.bL.prototype.T;(function installTearOffs(){installTearOff(H.b4.prototype,"geQ",0,0,0,null,["$0"],["aA"],0)
installTearOff(H.a1.prototype,"gcX",0,0,0,null,["$1"],["J"],2)
installTearOff(H.aI.prototype,"gey",0,0,0,null,["$1"],["V"],2)
installTearOff(P,"nd",1,0,0,null,["$1"],["mU"],1)
installTearOff(P,"ne",1,0,0,null,["$1"],["mV"],1)
installTearOff(P,"nf",1,0,0,null,["$1"],["mW"],1)
installTearOff(P,"l3",1,0,0,null,["$0"],["nb"],0)
installTearOff(P.E.prototype,"gbL",0,0,0,null,["$2","$1"],["O","dO"],5)
installTearOff(P,"nk",1,0,0,null,["$2"],["mb"],7)
installTearOff(W,"np",1,0,0,null,["$4"],["n_"],4)
installTearOff(W,"nq",1,0,0,null,["$4"],["n0"],4)
installTearOff(W.cx.prototype,"gbc",0,1,0,null,["$0"],["bd"],3)
installTearOff(W.cS.prototype,"gbc",0,1,0,null,["$0"],["bd"],3)
installTearOff(R.cA.prototype,"gf_",0,0,0,null,["$1"],["ct"],6)
installTearOff(G,"le",1,0,0,null,["$0"],["ny"],0)})();(function inheritance(){inherit(P.C,null)
var t=P.C
inherit(H.jc,t)
inherit(J.a,t)
inherit(J.dN,t)
inherit(P.P,t)
inherit(H.cn,t)
inherit(P.ci,t)
inherit(H.aS,t)
inherit(H.as,t)
inherit(H.i2,t)
inherit(H.b4,t)
inherit(H.hB,t)
inherit(H.aJ,t)
inherit(H.i1,t)
inherit(H.hv,t)
inherit(H.cD,t)
inherit(H.h4,t)
inherit(H.aq,t)
inherit(H.a1,t)
inherit(H.aI,t)
inherit(H.fy,t)
inherit(H.ha,t)
inherit(P.aR,t)
inherit(H.di,t)
inherit(H.ak,t)
inherit(P.aZ,t)
inherit(H.eS,t)
inherit(H.eU,t)
inherit(P.X,t)
inherit(P.j7,t)
inherit(P.hw,t)
inherit(P.bD,t)
inherit(P.E,t)
inherit(P.cU,t)
inherit(P.bw,t)
inherit(P.fR,t)
inherit(P.jo,t)
inherit(P.aN,t)
inherit(P.ik,t)
inherit(P.fF,t)
inherit(P.hZ,t)
inherit(P.bF,t)
inherit(P.jg,t)
inherit(P.bG,t)
inherit(P.l,t)
inherit(P.i0,t)
inherit(P.af,t)
inherit(P.D,t)
inherit(P.bi,t)
inherit(P.a3,t)
inherit(P.at,t)
inherit(P.cK,t)
inherit(P.j9,t)
inherit(P.hG,t)
inherit(P.ec,t)
inherit(P.h,t)
inherit(P.aY,t)
inherit(P.I,t)
inherit(P.b0,t)
inherit(P.n,t)
inherit(P.bx,t)
inherit(P.jr,t)
inherit(W.dY,t)
inherit(W.bE,t)
inherit(W.m,t)
inherit(W.cz,t)
inherit(W.bL,t)
inherit(W.ie,t)
inherit(W.cd,t)
inherit(W.cy,t)
inherit(W.jk,t)
inherit(W.js,t)
inherit(W.i9,t)
inherit(W.dt,t)
inherit(P.hX,t)
inherit(P.i4,t)
inherit(G.f5,t)
inherit(G.dS,t)
inherit(G.ev,t)
inherit(G.eE,t)
inherit(G.cQ,t)
inherit(G.cP,t)
inherit(G.w,t)
inherit(G.cF,t)
inherit(G.h2,t)
inherit(G.bB,t)
inherit(R.fN,t)
inherit(T.R,t)
inherit(T.aG,t)
inherit(T.x,t)
inherit(T.al,t)
t=J.a
inherit(J.eO,t)
inherit(J.cl,t)
inherit(J.bn,t)
inherit(J.au,t)
inherit(J.aW,t)
inherit(J.aw,t)
inherit(H.br,t)
inherit(H.b_,t)
inherit(W.d,t)
inherit(W.dJ,t)
inherit(W.c1,t)
inherit(W.c2,t)
inherit(W.aQ,t)
inherit(W.Y,t)
inherit(W.cV,t)
inherit(W.e2,t)
inherit(W.e3,t)
inherit(W.e4,t)
inherit(W.c6,t)
inherit(W.c7,t)
inherit(W.cW,t)
inherit(W.c9,t)
inherit(W.cY,t)
inherit(W.e7,t)
inherit(W.f,t)
inherit(W.d_,t)
inherit(W.eG,t)
inherit(W.d1,t)
inherit(W.aT,t)
inherit(W.aU,t)
inherit(W.eX,t)
inherit(W.f1,t)
inherit(W.d5,t)
inherit(W.cx,t)
inherit(W.d8,t)
inherit(W.a9,t)
inherit(W.dc,t)
inherit(W.cB,t)
inherit(W.de,t)
inherit(W.aa,t)
inherit(W.dj,t)
inherit(W.dm,t)
inherit(W.h3,t)
inherit(W.dp,t)
inherit(W.h8,t)
inherit(W.cS,t)
inherit(W.hh,t)
inherit(W.hj,t)
inherit(W.du,t)
inherit(W.dw,t)
inherit(W.dy,t)
inherit(W.dA,t)
inherit(W.dC,t)
inherit(P.d3,t)
inherit(P.da,t)
inherit(P.fs,t)
inherit(P.ft,t)
inherit(P.fw,t)
inherit(P.dk,t)
inherit(P.dr,t)
inherit(P.dO,t)
inherit(P.fA,t)
inherit(P.fB,t)
inherit(P.dg,t)
t=J.bn
inherit(J.fq,t)
inherit(J.aF,t)
inherit(J.ax,t)
inherit(J.jb,J.au)
t=J.aW
inherit(J.ck,t)
inherit(J.cj,t)
t=P.P
inherit(H.j,t)
inherit(H.cp,t)
inherit(H.cT,t)
t=H.j
inherit(H.aX,t)
inherit(H.eT,t)
inherit(H.ea,H.cp)
t=P.ci
inherit(H.f_,t)
inherit(H.hm,t)
t=H.aX
inherit(H.bo,t)
inherit(P.eV,t)
t=H.as
inherit(H.iU,t)
inherit(H.iV,t)
inherit(H.hW,t)
inherit(H.hC,t)
inherit(H.eL,t)
inherit(H.eM,t)
inherit(H.i3,t)
inherit(H.h5,t)
inherit(H.h6,t)
inherit(H.iW,t)
inherit(H.iE,t)
inherit(H.iF,t)
inherit(H.iG,t)
inherit(H.iH,t)
inherit(H.iI,t)
inherit(H.h_,t)
inherit(H.eP,t)
inherit(H.iA,t)
inherit(H.iB,t)
inherit(H.iC,t)
inherit(P.hr,t)
inherit(P.hq,t)
inherit(P.hs,t)
inherit(P.ht,t)
inherit(P.eD,t)
inherit(P.eC,t)
inherit(P.hH,t)
inherit(P.hP,t)
inherit(P.hL,t)
inherit(P.hM,t)
inherit(P.hN,t)
inherit(P.hJ,t)
inherit(P.hO,t)
inherit(P.hI,t)
inherit(P.hS,t)
inherit(P.hT,t)
inherit(P.hR,t)
inherit(P.hQ,t)
inherit(P.fU,t)
inherit(P.fV,t)
inherit(P.fS,t)
inherit(P.fT,t)
inherit(P.il,t)
inherit(P.ip,t)
inherit(P.i7,t)
inherit(P.i6,t)
inherit(P.i8,t)
inherit(P.eZ,t)
inherit(P.e8,t)
inherit(P.e9,t)
inherit(W.eb,t)
inherit(W.fQ,t)
inherit(W.hn,t)
inherit(W.hF,t)
inherit(W.ff,t)
inherit(W.fe,t)
inherit(W.ia,t)
inherit(W.ib,t)
inherit(W.ii,t)
inherit(W.ij,t)
inherit(P.iq,t)
inherit(B.iP,t)
inherit(B.iQ,t)
inherit(B.iR,t)
inherit(B.iS,t)
inherit(B.iT,t)
inherit(B.fk,t)
inherit(B.fl,t)
inherit(B.fm,t)
inherit(B.fn,t)
inherit(B.fG,t)
inherit(D.eW,t)
inherit(A.iz,t)
inherit(G.iK,t)
inherit(G.iL,t)
t=H.hv
inherit(H.b6,t)
inherit(H.bQ,t)
t=P.aR
inherit(H.fg,t)
inherit(H.eQ,t)
inherit(H.hf,t)
inherit(H.hc,t)
inherit(H.dR,t)
inherit(H.fC,t)
inherit(P.c0,t)
inherit(P.bt,t)
inherit(P.a6,t)
inherit(P.hg,t)
inherit(P.he,t)
inherit(P.b1,t)
inherit(P.dT,t)
inherit(P.e1,t)
t=H.h_
inherit(H.fM,t)
inherit(H.bh,t)
inherit(H.ho,P.c0)
inherit(P.co,P.aZ)
t=P.co
inherit(H.a8,t)
inherit(W.hu,t)
t=H.b_
inherit(H.f6,t)
inherit(H.ct,t)
t=H.ct
inherit(H.bH,t)
inherit(H.bJ,t)
inherit(H.bI,H.bH)
inherit(H.cu,H.bI)
inherit(H.bK,H.bJ)
inherit(H.cv,H.bK)
t=H.cu
inherit(H.cs,t)
inherit(H.f7,t)
t=H.cv
inherit(H.f8,t)
inherit(H.f9,t)
inherit(H.fa,t)
inherit(H.fb,t)
inherit(H.fc,t)
inherit(H.cw,t)
inherit(H.fd,t)
t=P.hw
inherit(P.hp,t)
inherit(P.ig,t)
inherit(P.i5,P.ik)
inherit(P.i_,H.a8)
inherit(P.fE,P.fF)
inherit(P.hV,P.fE)
inherit(P.hY,P.hV)
inherit(P.cm,P.bG)
t=P.a3
inherit(P.T,t)
inherit(P.y,t)
t=P.a6
inherit(P.cC,t)
inherit(P.eK,t)
t=W.d
inherit(W.q,t)
inherit(W.aj,t)
inherit(W.ex,t)
inherit(W.bm,t)
inherit(W.bq,t)
inherit(W.fu,t)
inherit(W.cE,t)
inherit(W.bM,t)
inherit(W.bO,t)
inherit(W.hk,t)
inherit(W.hl,t)
inherit(W.bC,t)
inherit(W.jt,t)
inherit(P.dP,t)
inherit(P.aO,t)
t=W.q
inherit(W.Z,t)
inherit(W.ar,t)
inherit(W.bj,t)
t=W.Z
inherit(W.k,t)
inherit(P.u,t)
t=W.aj
inherit(W.c_,t)
inherit(W.eF,t)
inherit(W.eY,t)
t=W.k
inherit(W.dK,t)
inherit(W.dL,t)
inherit(W.ao,t)
inherit(W.ap,t)
inherit(W.c5,t)
inherit(W.eB,t)
inherit(W.cf,t)
inherit(W.aV,t)
inherit(W.bp,t)
inherit(W.fD,t)
inherit(W.cM,t)
inherit(W.fY,t)
inherit(W.fZ,t)
inherit(W.by,t)
t=W.aQ
inherit(W.dU,t)
inherit(W.dW,t)
inherit(W.dX,t)
inherit(W.e_,t)
t=W.Y
inherit(W.dV,t)
inherit(W.dZ,t)
inherit(W.e0,t)
inherit(W.aP,W.cV)
inherit(W.e5,W.c7)
inherit(W.cX,W.cW)
inherit(W.c8,W.cX)
inherit(W.cZ,W.cY)
inherit(W.e6,W.cZ)
inherit(W.d0,W.d_)
inherit(W.ew,W.d0)
inherit(W.d2,W.d1)
inherit(W.bl,W.d2)
inherit(W.cg,W.bj)
inherit(W.eH,W.bm)
inherit(W.aE,W.f)
t=W.aE
inherit(W.ay,t)
inherit(W.J,t)
inherit(W.aD,t)
inherit(W.f3,W.bq)
inherit(W.d6,W.d5)
inherit(W.f4,W.d6)
inherit(W.L,P.cm)
inherit(W.d9,W.d8)
inherit(W.bs,W.d9)
inherit(W.dd,W.dc)
inherit(W.fr,W.dd)
inherit(W.bN,W.bM)
inherit(W.fH,W.bN)
inherit(W.df,W.de)
inherit(W.fJ,W.df)
inherit(W.fP,W.dj)
inherit(W.dn,W.dm)
inherit(W.h0,W.dn)
inherit(W.bP,W.bO)
inherit(W.h1,W.bP)
inherit(W.dq,W.dp)
inherit(W.h7,W.dq)
inherit(W.b2,W.bp)
inherit(W.aH,W.J)
inherit(W.dv,W.du)
inherit(W.hx,W.dv)
inherit(W.hy,W.c9)
inherit(W.dx,W.dw)
inherit(W.hU,W.dx)
inherit(W.dz,W.dy)
inherit(W.d7,W.dz)
inherit(W.dB,W.dA)
inherit(W.ic,W.dB)
inherit(W.dD,W.dC)
inherit(W.id,W.dD)
inherit(W.hz,W.hu)
inherit(W.hD,P.bw)
inherit(W.hA,W.hD)
inherit(W.hE,P.fR)
inherit(W.ih,W.bL)
inherit(P.S,P.i4)
t=P.u
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
inherit(P.er,t)
inherit(P.es,t)
inherit(P.et,t)
inherit(P.eu,t)
inherit(P.ey,t)
inherit(P.a7,t)
inherit(P.f0,t)
inherit(P.fo,t)
inherit(P.bv,t)
t=P.a7
inherit(P.eA,t)
inherit(P.a_,t)
inherit(P.eI,t)
inherit(P.fX,t)
inherit(P.bz,t)
inherit(P.hi,t)
inherit(P.d4,P.d3)
inherit(P.eR,P.d4)
inherit(P.db,P.da)
inherit(P.fh,P.db)
inherit(P.fx,P.a_)
inherit(P.dl,P.dk)
inherit(P.fW,P.dl)
inherit(P.bA,P.bz)
inherit(P.ds,P.dr)
inherit(P.h9,P.ds)
inherit(P.fi,P.aO)
inherit(P.dh,P.dg)
inherit(P.fK,P.dh)
t=G.f5
inherit(G.fI,t)
inherit(G.hd,t)
inherit(G.f2,t)
inherit(G.fz,t)
inherit(G.dQ,G.fI)
inherit(B.fj,G.dQ)
t=G.hd
inherit(G.cq,t)
inherit(G.fp,t)
inherit(G.eJ,G.bB)
inherit(R.cA,G.fp)
inherit(R.fO,R.fN)
mixin(H.bH,P.l)
mixin(H.bI,H.aS)
mixin(H.bJ,P.l)
mixin(H.bK,H.aS)
mixin(P.bG,P.l)
mixin(W.cV,W.dY)
mixin(W.cW,P.l)
mixin(W.cX,W.m)
mixin(W.cY,P.l)
mixin(W.cZ,W.m)
mixin(W.d_,P.l)
mixin(W.d0,W.m)
mixin(W.d1,P.l)
mixin(W.d2,W.m)
mixin(W.d5,P.l)
mixin(W.d6,W.m)
mixin(W.d8,P.l)
mixin(W.d9,W.m)
mixin(W.dc,P.l)
mixin(W.dd,W.m)
mixin(W.bM,P.l)
mixin(W.bN,W.m)
mixin(W.de,P.l)
mixin(W.df,W.m)
mixin(W.dj,P.aZ)
mixin(W.dm,P.l)
mixin(W.dn,W.m)
mixin(W.bO,P.l)
mixin(W.bP,W.m)
mixin(W.dp,P.l)
mixin(W.dq,W.m)
mixin(W.du,P.l)
mixin(W.dv,W.m)
mixin(W.dw,P.l)
mixin(W.dx,W.m)
mixin(W.dy,P.l)
mixin(W.dz,W.m)
mixin(W.dA,P.l)
mixin(W.dB,W.m)
mixin(W.dC,P.l)
mixin(W.dD,W.m)
mixin(P.d3,P.l)
mixin(P.d4,W.m)
mixin(P.da,P.l)
mixin(P.db,W.m)
mixin(P.dk,P.l)
mixin(P.dl,W.m)
mixin(P.dr,P.l)
mixin(P.ds,W.m)
mixin(P.dg,P.l)
mixin(P.dh,W.m)})();(function constants(){C.o=W.ao.prototype
C.w=W.ap.prototype
C.m=W.c1.prototype
C.p=W.c2.prototype
C.x=W.aP.prototype
C.q=W.c5.prototype
C.M=W.c6.prototype
C.N=W.cf.prototype
C.r=W.cg.prototype
C.O=J.a.prototype
C.a=J.au.prototype
C.z=J.cj.prototype
C.b=J.ck.prototype
C.P=J.cl.prototype
C.c=J.aW.prototype
C.i=J.aw.prototype
C.W=J.ax.prototype
C.Z=H.cs.prototype
C.D=W.bs.prototype
C.E=J.fq.prototype
C.F=W.cB.prototype
C.K=W.cM.prototype
C.v=J.aF.prototype
C.ax=W.aH.prototype
C.ay=W.bC.prototype
C.L=new P.hX()
C.d=new P.i5()
C.y=new P.at(0)
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
C.X=H.A(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.n])
C.Y=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.C=makeConstList([])
C.t=H.A(makeConstList(["bind","if","ref","repeat","syntax"]),[P.n])
C.u=H.A(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.n])
C.a_=new G.w("vec3","vertex btangents",0)
C.e=new G.w("vec3","",0)
C.a0=new G.w("vec4","delta from light",0)
C.n=new G.w("","",0)
C.G=new G.w("vec3","vertex coordinates",0)
C.a1=new G.w("vec3","vertex binormals",0)
C.H=new G.w("vec4","for wireframe",0)
C.a2=new G.w("vec4","per vertex color",0)
C.a3=new G.w("float","for normal maps",0)
C.j=new G.w("mat4","",0)
C.a5=new G.w("mat4","",4)
C.a4=new G.w("mat4","",128)
C.f=new G.w("float","",0)
C.a6=new G.w("float","",4)
C.a7=new G.w("float","depth for shadowmaps",0)
C.h=new G.w("sampler2D","",0)
C.a8=new G.w("float","for bump maps",0)
C.a9=new G.w("vec2","texture uvs",0)
C.aa=new G.w("float","time since program start in sec",0)
C.k=new G.w("vec2","",0)
C.ab=new G.w("samplerCube","",0)
C.l=new G.w("vec4","",0)
C.ac=new G.w("vec3","vertex normals",0)
C.ad=new G.w("sampler2DShadow","",0)
C.I=new G.w("vec3","per vertex color",0)
C.J=new G.w("mat3","",0)
C.ae=new G.w("vec3","vertex tangents",0)
C.af=H.F("nI")
C.ag=H.F("nJ")
C.ah=H.F("ez")
C.ai=H.F("nK")
C.aj=H.F("nL")
C.ak=H.F("kj")
C.al=H.F("nM")
C.am=H.F("km")
C.an=H.F("I")
C.ao=H.F("n")
C.ap=H.F("kK")
C.aq=H.F("kL")
C.ar=H.F("nO")
C.as=H.F("kM")
C.at=H.F("af")
C.au=H.F("T")
C.av=H.F("y")
C.aw=H.F("a3")})();(function staticFields(){$.ku="$cachedFunction"
$.kv="$cachedInvocation"
$.k3=null
$.k1=null
$.jy=!1
$.jD=null
$.l0=null
$.lh=null
$.it=null
$.iD=null
$.jE=null
$.b7=null
$.bR=null
$.bS=null
$.jz=!1
$.v=C.d
$.kf=0
$.ai=null
$.j8=null
$.ke=null
$.kd=null
$.kb=null
$.ka=null
$.k9=null
$.k8=null
$.nh=0
$.ni=0
$.jI=0
$.lb=0
$.bW=0
$.bX=0
$.nF=!1
$.l5=0
$.lk="../gradient.jpg"})();(function lazyInitializers(){lazy($,"k7","$get$k7",function(){return H.l8("_$dart_dartClosure")})
lazy($,"jd","$get$jd",function(){return H.l8("_$dart_js")})
lazy($,"kk","$get$kk",function(){return H.ms()})
lazy($,"kl","$get$kl",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.kf
$.kf=t+1
t="expando$key$"+t}return new P.ec(t,null,[P.y])})
lazy($,"kz","$get$kz",function(){return H.ab(H.hb({
toString:function(){return"$receiver$"}}))})
lazy($,"kA","$get$kA",function(){return H.ab(H.hb({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"kB","$get$kB",function(){return H.ab(H.hb(null))})
lazy($,"kC","$get$kC",function(){return H.ab(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kG","$get$kG",function(){return H.ab(H.hb(void 0))})
lazy($,"kH","$get$kH",function(){return H.ab(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kE","$get$kE",function(){return H.ab(H.kF(null))})
lazy($,"kD","$get$kD",function(){return H.ab(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"kJ","$get$kJ",function(){return H.ab(H.kF(void 0))})
lazy($,"kI","$get$kI",function(){return H.ab(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"jv","$get$jv",function(){return P.mT()})
lazy($,"kh","$get$kh",function(){return P.mY(null,P.I)})
lazy($,"bT","$get$bT",function(){return[]})
lazy($,"k6","$get$k6",function(){return{}})
lazy($,"kS","$get$kS",function(){return P.jh(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"jw","$get$jw",function(){return P.Q()})
lazy($,"is","$get$is",function(){return P.kn(P.y,P.af)})
lazy($,"bV","$get$bV",function(){return P.kn(P.n,P.af)})
lazy($,"jn","$get$jn",function(){return new G.cQ(1281,0,4294967295)})
lazy($,"k_","$get$k_",function(){return G.ky(1281,1281,1281)})
lazy($,"jZ","$get$jZ",function(){return G.ky(32774,770,769)})
lazy($,"M","$get$M",function(){return P.az(["cBlendEquation",C.n,"cDepthWrite",C.n,"cDepthTest",C.n,"cStencilFunc",C.n,"tPosition",C.e,"tSpeed",C.e,"tForce",C.e,"aColors",C.I,"aColorAlpha",C.a2,"aPosition",C.G,"aTexUV",C.a9,"aNormal",C.ac,"aBinormal",C.a1,"aCenter",C.H,"aPointSize",C.f,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.ae,"aBitangent",C.a_,"iaRotation",C.l,"iaTranslation",C.e,"iaScale",C.e,"vColor",C.I,"vTexUV",C.k,"vLightWeighting",C.e,"vNormal",C.e,"vPosition",C.G,"vPositionFromLight",C.a0,"vCenter",C.H,"vDepth",C.a7,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.J,"uConvolutionMatrix",C.J,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.ad,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.ab,"uAnimationTable",C.h,"uTime",C.aa,"uCameraNear",C.f,"uCameraFar",C.f,"uFogNear",C.f,"uFogFar",C.f,"uPointSize",C.f,"uScale",C.f,"uAngle",C.f,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.f,"uShininess",C.f,"uShadowBias",C.f,"uOpacity",C.f,"uColor",C.e,"uAmbientDiffuse",C.e,"uColorEmissive",C.e,"uColorSpecular",C.e,"uColorDiffuse",C.e,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.e,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a4,"uLightDescs",C.a5,"uLightCount",C.f,"uLightTypes",C.a6,"uBumpScale",C.a8,"uNormalScale",C.a3])})
lazy($,"kO","$get$kO",function(){return C.L})
lazy($,"ld","$get$ld",function(){var t=G.cG("PerlinNoiseV")
t.aL(["aPosition"])
t.aq(["vNormal"])
t.Z(["uPerspectiveViewMatrix","uModelMatrix","uTime"])
t.bA(["vec3 mod289(vec3 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x)\n{\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec3 fade(vec3 t) {\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\n\n// Classic Perlin noise, periodic variant\nfloat pnoise(vec3 P, vec3 rep)\n{\n  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \n  return 2.2 * n_xyz;\n}\n","void main() {\n    vec3 normal = normalize( aPosition);\n    float f = 0.5 * pnoise( normal + uTime/3.0, vec3( 10.0 ) );\n    //vNormal = aPosition + f * normal;\n    //vNormal = f*normal;\n    vNormal = normal;\n    gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);\n}\n"])
return t})
lazy($,"lm","$get$lm",function(){var t=G.cG("Textured")
t.aL(["aPosition","aTexUV"])
t.Z(["uPerspectiveViewMatrix","uModelMatrix"])
t.aq(["vTexUV"])
t.ar(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vTexUV = aTexUV;"])
return t})
lazy($,"ll","$get$ll",function(){var t=G.cG("TexturedF")
t.aq(["vTexUV"])
t.Z(["uColor","uTexture"])
t.ar(["oFragColor = texture(uTexture, vTexUV) + vec4( uColor, 0.0 );"])
return t})
lazy($,"lg","$get$lg",function(){var t=G.cG("PointSpritesV")
t.aL(["aPosition"])
t.Z(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"])
t.ar(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"])
return t})
lazy($,"lf","$get$lf",function(){var t=G.cG("PointSpritesF")
t.Z(["uTexture"])
t.ar(["oFragColor = texture( uTexture,  gl_PointCoord);"])
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
mangledGlobalNames:{y:"int",T:"double",a3:"num",n:"String",af:"bool",I:"Null",h:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.q},{func:1,ret:P.af,args:[W.Z,P.n,P.n,W.bE]},{func:1,v:true,args:[P.C],opt:[P.b0]},{func:1,v:true,args:[W.f]},{func:1,ret:P.y,args:[P.D,P.D]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,Blob:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSCharsetRule:J.a,CSSConditionRule:J.a,CSSFontFaceRule:J.a,CSSGroupingRule:J.a,CSSImportRule:J.a,CSSKeyframeRule:J.a,MozCSSKeyframeRule:J.a,WebKitCSSKeyframeRule:J.a,CSSKeyframesRule:J.a,MozCSSKeyframesRule:J.a,WebKitCSSKeyframesRule:J.a,CSSMediaRule:J.a,CSSNamespaceRule:J.a,CSSPageRule:J.a,CSSRule:J.a,CSSStyleRule:J.a,CSSStyleSheet:J.a,CSSSupportsRule:J.a,CSSVariableReferenceValue:J.a,CSSViewportRule:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,File:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,Gamepad:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MimeType:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechGrammar:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,StyleSheet:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,Touch:J.a,TrackDefault:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGLength:J.a,SVGMatrix:J.a,SVGNumber:J.a,SVGPreserveAspectRatio:J.a,SVGTransform:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioParamMap:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.br,ArrayBufferView:H.b_,DataView:H.f6,Float32Array:H.cs,Float64Array:H.f7,Int16Array:H.f8,Int32Array:H.f9,Int8Array:H.fa,Uint16Array:H.fb,Uint32Array:H.fc,Uint8ClampedArray:H.cw,CanvasPixelArray:H.cw,Uint8Array:H.fd,HTMLBRElement:W.k,HTMLBaseElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLInputElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMenuElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTextAreaElement:W.k,HTMLTimeElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLFrameSetElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,Accelerometer:W.c_,LinearAccelerationSensor:W.c_,AccessibleNodeList:W.dJ,HTMLAnchorElement:W.dK,HTMLAreaElement:W.dL,HTMLBodyElement:W.ao,HTMLCanvasElement:W.ap,CanvasGradient:W.c1,CanvasRenderingContext2D:W.c2,CDATASection:W.ar,CharacterData:W.ar,Comment:W.ar,ProcessingInstruction:W.ar,Text:W.ar,CSSPerspective:W.dU,CSSPositionValue:W.dV,CSSRotation:W.dW,CSSScale:W.dX,CSSStyleDeclaration:W.aP,MSStyleCSSProperties:W.aP,CSS2Properties:W.aP,CSSImageValue:W.Y,CSSKeywordValue:W.Y,CSSNumericValue:W.Y,CSSResourceValue:W.Y,CSSUnitValue:W.Y,CSSURLImageValue:W.Y,CSSStyleValue:W.Y,CSSMatrixComponent:W.aQ,CSSSkew:W.aQ,CSSTransformComponent:W.aQ,CSSTransformValue:W.dZ,CSSTranslation:W.e_,CSSUnparsedValue:W.e0,DataTransferItemList:W.e2,DeviceAcceleration:W.e3,HTMLDivElement:W.c5,XMLDocument:W.bj,Document:W.bj,DOMException:W.e4,DOMImplementation:W.c6,DOMPoint:W.e5,DOMPointReadOnly:W.c7,ClientRectList:W.c8,DOMRectList:W.c8,DOMRectReadOnly:W.c9,DOMStringList:W.e6,DOMTokenList:W.e7,Element:W.Z,AbortPaymentEvent:W.f,AnimationEvent:W.f,AnimationPlaybackEvent:W.f,ApplicationCacheErrorEvent:W.f,BackgroundFetchClickEvent:W.f,BackgroundFetchEvent:W.f,BackgroundFetchFailEvent:W.f,BackgroundFetchedEvent:W.f,BeforeInstallPromptEvent:W.f,BeforeUnloadEvent:W.f,BlobEvent:W.f,CanMakePaymentEvent:W.f,ClipboardEvent:W.f,CloseEvent:W.f,CustomEvent:W.f,DeviceMotionEvent:W.f,DeviceOrientationEvent:W.f,ErrorEvent:W.f,ExtendableEvent:W.f,ExtendableMessageEvent:W.f,FetchEvent:W.f,FontFaceSetLoadEvent:W.f,ForeignFetchEvent:W.f,GamepadEvent:W.f,HashChangeEvent:W.f,InstallEvent:W.f,MediaEncryptedEvent:W.f,MediaKeyMessageEvent:W.f,MediaQueryListEvent:W.f,MediaStreamEvent:W.f,MediaStreamTrackEvent:W.f,MessageEvent:W.f,MIDIConnectionEvent:W.f,MIDIMessageEvent:W.f,MutationEvent:W.f,NotificationEvent:W.f,PageTransitionEvent:W.f,PaymentRequestEvent:W.f,PaymentRequestUpdateEvent:W.f,PopStateEvent:W.f,PresentationConnectionAvailableEvent:W.f,PresentationConnectionCloseEvent:W.f,ProgressEvent:W.f,PromiseRejectionEvent:W.f,PushEvent:W.f,RTCDataChannelEvent:W.f,RTCDTMFToneChangeEvent:W.f,RTCPeerConnectionIceEvent:W.f,RTCTrackEvent:W.f,SecurityPolicyViolationEvent:W.f,SensorErrorEvent:W.f,SpeechRecognitionError:W.f,SpeechRecognitionEvent:W.f,SpeechSynthesisEvent:W.f,StorageEvent:W.f,SyncEvent:W.f,TrackEvent:W.f,TransitionEvent:W.f,WebKitTransitionEvent:W.f,VRDeviceEvent:W.f,VRDisplayEvent:W.f,VRSessionEvent:W.f,MojoInterfaceRequestEvent:W.f,ResourceProgressEvent:W.f,USBConnectionEvent:W.f,IDBVersionChangeEvent:W.f,AudioProcessingEvent:W.f,OfflineAudioCompletionEvent:W.f,WebGLContextEvent:W.f,Event:W.f,InputEvent:W.f,AccessibleNode:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RemotePlayback:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SourceBuffer:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,TextTrack:W.d,TextTrackCue:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,VTTCue:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,ServiceWorker:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,FileList:W.ew,FileWriter:W.ex,HTMLFormElement:W.eB,Gyroscope:W.eF,HTMLHeadElement:W.cf,History:W.eG,HTMLCollection:W.bl,HTMLFormControlsCollection:W.bl,HTMLOptionsCollection:W.bl,HTMLDocument:W.cg,XMLHttpRequest:W.eH,XMLHttpRequestUpload:W.bm,XMLHttpRequestEventTarget:W.bm,ImageBitmap:W.aT,ImageData:W.aU,HTMLImageElement:W.aV,KeyboardEvent:W.ay,Location:W.eX,Magnetometer:W.eY,HTMLAudioElement:W.bp,HTMLMediaElement:W.bp,MediaList:W.f1,MIDIOutput:W.f3,MIDIInput:W.bq,MIDIPort:W.bq,MimeTypeArray:W.f4,PointerEvent:W.J,MouseEvent:W.J,DragEvent:W.J,DocumentFragment:W.q,ShadowRoot:W.q,Attr:W.q,DocumentType:W.q,Node:W.q,NodeIterator:W.cx,NodeList:W.bs,RadioNodeList:W.bs,Plugin:W.a9,PluginArray:W.fr,PresentationConnection:W.fu,Range:W.cB,RTCDataChannel:W.cE,DataChannel:W.cE,HTMLSelectElement:W.fD,AbsoluteOrientationSensor:W.aj,AmbientLightSensor:W.aj,OrientationSensor:W.aj,RelativeOrientationSensor:W.aj,Sensor:W.aj,SourceBufferList:W.fH,SpeechGrammarList:W.fJ,SpeechRecognitionResult:W.aa,Storage:W.fP,HTMLTableElement:W.cM,HTMLTableRowElement:W.fY,HTMLTableSectionElement:W.fZ,HTMLTemplateElement:W.by,TextTrackCueList:W.h0,TextTrackList:W.h1,TimeRanges:W.h3,TouchEvent:W.aD,TouchList:W.h7,TrackDefaultList:W.h8,TreeWalker:W.cS,CompositionEvent:W.aE,FocusEvent:W.aE,TextEvent:W.aE,UIEvent:W.aE,URL:W.hh,VRStageBoundsPoint:W.hj,HTMLVideoElement:W.b2,VideoTrackList:W.hk,WebSocket:W.hl,WheelEvent:W.aH,Window:W.bC,DOMWindow:W.bC,CSSRuleList:W.hx,DOMRect:W.hy,GamepadList:W.hU,NamedNodeMap:W.d7,MozNamedAttrMap:W.d7,SpeechRecognitionResultList:W.ic,StyleSheetList:W.id,SVGFEBlendElement:P.ed,SVGFEColorMatrixElement:P.ee,SVGFEComponentTransferElement:P.ef,SVGFECompositeElement:P.eg,SVGFEConvolveMatrixElement:P.eh,SVGFEDiffuseLightingElement:P.ei,SVGFEDisplacementMapElement:P.ej,SVGFEFloodElement:P.ek,SVGFEGaussianBlurElement:P.el,SVGFEImageElement:P.em,SVGFEMergeElement:P.en,SVGFEMorphologyElement:P.eo,SVGFEOffsetElement:P.ep,SVGFEPointLightElement:P.eq,SVGFESpecularLightingElement:P.er,SVGFESpotLightElement:P.es,SVGFETileElement:P.et,SVGFETurbulenceElement:P.eu,SVGFilterElement:P.ey,SVGForeignObjectElement:P.eA,SVGCircleElement:P.a_,SVGEllipseElement:P.a_,SVGLineElement:P.a_,SVGPathElement:P.a_,SVGPolygonElement:P.a_,SVGPolylineElement:P.a_,SVGGeometryElement:P.a_,SVGAElement:P.a7,SVGClipPathElement:P.a7,SVGDefsElement:P.a7,SVGGElement:P.a7,SVGSwitchElement:P.a7,SVGGraphicsElement:P.a7,SVGImageElement:P.eI,SVGLengthList:P.eR,SVGMaskElement:P.f0,SVGNumberList:P.fh,SVGPatternElement:P.fo,SVGPoint:P.fs,SVGPointList:P.ft,SVGRect:P.fw,SVGRectElement:P.fx,SVGScriptElement:P.bv,SVGStringList:P.fW,SVGAnimateElement:P.u,SVGAnimateMotionElement:P.u,SVGAnimateTransformElement:P.u,SVGAnimationElement:P.u,SVGDescElement:P.u,SVGDiscardElement:P.u,SVGFEDistantLightElement:P.u,SVGFEFuncAElement:P.u,SVGFEFuncBElement:P.u,SVGFEFuncGElement:P.u,SVGFEFuncRElement:P.u,SVGFEMergeNodeElement:P.u,SVGLinearGradientElement:P.u,SVGMarkerElement:P.u,SVGMetadataElement:P.u,SVGRadialGradientElement:P.u,SVGSetElement:P.u,SVGStopElement:P.u,SVGStyleElement:P.u,SVGSymbolElement:P.u,SVGTitleElement:P.u,SVGViewElement:P.u,SVGGradientElement:P.u,SVGComponentTransferFunctionElement:P.u,SVGFEDropShadowElement:P.u,SVGMPathElement:P.u,SVGElement:P.u,SVGSVGElement:P.fX,SVGTextPathElement:P.bz,SVGTextContentElement:P.bz,SVGTSpanElement:P.bA,SVGTextElement:P.bA,SVGTextPositioningElement:P.bA,SVGTransformList:P.h9,SVGUseElement:P.hi,AudioBuffer:P.dO,AudioTrackList:P.dP,AudioContext:P.aO,webkitAudioContext:P.aO,BaseAudioContext:P.aO,OfflineAudioContext:P.fi,WebGLRenderingContext:P.fA,WebGL2RenderingContext:P.fB,SQLResultSetRowList:P.fK})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,Blob:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSStyleSheet:true,CSSSupportsRule:true,CSSVariableReferenceValue:true,CSSViewportRule:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,File:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,Gamepad:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechGrammar:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,StyleSheet:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,Touch:true,TrackDefault:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGLength:true,SVGMatrix:true,SVGNumber:true,SVGPreserveAspectRatio:true,SVGTransform:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioParamMap:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,Accelerometer:true,LinearAccelerationSensor:true,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasGradient:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSPositionValue:true,CSSRotation:true,CSSScale:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSSkew:true,CSSTransformComponent:false,CSSTransformValue:true,CSSTranslation:true,CSSUnparsedValue:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMPoint:true,DOMPointReadOnly:false,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AccessibleNode:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnectionList:true,PresentationRequest:true,RemotePlayback:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SourceBuffer:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,TextTrack:true,TextTrackCue:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,VTTCue:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,ServiceWorker:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,FileList:true,FileWriter:true,HTMLFormElement:true,Gyroscope:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,ImageBitmap:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,Magnetometer:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,PresentationConnection:true,Range:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,AbsoluteOrientationSensor:true,AmbientLightSensor:true,OrientationSensor:true,RelativeOrientationSensor:true,Sensor:false,SourceBufferList:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VRStageBoundsPoint:true,HTMLVideoElement:true,VideoTrackList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGAElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLengthList:true,SVGMaskElement:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMetadataElement:true,SVGRadialGradientElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSymbolElement:true,SVGTitleElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGSVGElement:true,SVGTextPathElement:true,SVGTextContentElement:false,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransformList:true,SVGUseElement:true,AudioBuffer:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.ct.$nativeSuperclassTag="ArrayBufferView"
H.bH.$nativeSuperclassTag="ArrayBufferView"
H.bI.$nativeSuperclassTag="ArrayBufferView"
H.cu.$nativeSuperclassTag="ArrayBufferView"
H.bJ.$nativeSuperclassTag="ArrayBufferView"
H.bK.$nativeSuperclassTag="ArrayBufferView"
H.cv.$nativeSuperclassTag="ArrayBufferView"
W.bM.$nativeSuperclassTag="EventTarget"
W.bN.$nativeSuperclassTag="EventTarget"
W.bO.$nativeSuperclassTag="EventTarget"
W.bP.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.lj(G.le(),b)},[])
else (function(b){H.lj(G.le(),b)})([])})})()