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
a[c]=function(){a[c]=function(){H.nE(b)}
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
return d?function(e){if(t===null)t=H.jH(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.jH(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.jH(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={jj:function jj(a){this.a=a},
jq:function(a,b,c,d){if(!!a.$isk)return new H.ee(a,b,[c,d])
return new H.cp(a,b,[c,d])},
ch:function(){return new P.b4("No element")},
mw:function(){return new P.b4("Too many elements")},
mv:function(){return new P.b4("Too few elements")},
mM:function(a,b){H.cF(a,0,J.bk(a)-1,b)},
cF:function(a,b,c,d){if(c-b<=32)H.mL(a,b,c,d)
else H.mK(a,b,c,d)},
mL:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.P(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.a7(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
mK:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
if(J.a7(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.a7(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.a7(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.a7(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.a7(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.a7(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.a7(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.a7(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.a7(a5.$2(j,i),0)){h=i
i=j
j=h}t.i(a2,r,m)
t.i(a2,p,k)
t.i(a2,q,i)
t.i(a2,o,t.h(a2,a3))
t.i(a2,n,t.h(a2,a4))
g=a3+1
f=a4-1
if(J.D(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=t.h(a2,e)
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
if(g<r&&f>q){for(;J.D(a5.$2(t.h(a2,g),l),0);)++g
for(;J.D(a5.$2(t.h(a2,f),j),0);)--f
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
k:function k(){},
aZ:function aZ(){},
cn:function cn(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cp:function cp(a,b,c){this.a=a
this.b=b
this.$ti=c},
ee:function ee(a,b,c){this.a=a
this.b=b
this.$ti=c},
f4:function f4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bu:function bu(a,b,c){this.a=a
this.b=b
this.$ti=c},
cT:function cT(a,b,c){this.a=a
this.b=b
this.$ti=c},
hs:function hs(a,b,c){this.a=a
this.b=b
this.$ti=c},
aX:function aX(){},
dF:function(a,b){var t=a.ah(b)
if(!u.globalState.d.cy)u.globalState.f.an()
return t},
iB:function(){++u.globalState.f.b},
iQ:function(){--u.globalState.f.b
H.b(u.globalState.f.b>=0)},
lj:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.q(s).$ish)throw H.c(P.dP("Arguments to main must be a List: "+H.e(s)))
u.globalState=new H.i6(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$ko()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.hG(P.jp(null,H.aM),0)
q=P.z
s.seM(new H.aa(0,null,null,null,null,null,0,[q,H.b9]))
s.seO(new H.aa(0,null,null,null,null,null,0,[q,null]))
if(s.x){r=new H.i5()
s.Q=r
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.mq,r)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.n_)}if(u.globalState.x)return
o=H.kW()
u.globalState.e=o
u.globalState.z.i(0,o.a,o)
u.globalState.d=o
if(H.bg(a,{func:1,args:[P.J]}))o.ah(new H.j0(t,a))
else if(H.bg(a,{func:1,args:[P.J,P.J]}))o.ah(new H.j1(t,a))
else o.ah(a)
u.globalState.f.an()},
n_:function(a){var t=P.am(["command","print","msg",a])
return new H.a3(!0,P.ba(null,P.z)).L(t)},
kW:function(){var t,s
t=u.globalState.a++
s=P.z
t=new H.b9(t,new H.aa(0,null,null,null,null,null,0,[s,H.cD]),P.aD(null,null,null,s),u.createNewIsolate(),new H.cD(0,null,!1),new H.au(H.li()),new H.au(H.li()),!1,!1,[],P.aD(null,null,null,null),null,null,!1,!0,P.aD(null,null,null,null))
t.dA()
return t},
ms:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.mt()
return},
mt:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.c(P.u("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.c(P.u('Cannot extract URI from "'+t+'"'))},
mq:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=new H.aL(!0,[]).V(b.data)
s=J.P(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.nr(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.aL(!0,[]).V(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.aL(!0,[]).V(s.h(t,"replyTo"))
k=H.kW()
u.globalState.f.a.S(0,new H.aM(k,new H.eO(q,p,o,n,m,l),"worker-start"))
u.globalState.d=k
u.globalState.f.an()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.lT(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.an()
break
case"close":u.globalState.ch.am(0,$.$get$kp().h(0,a))
a.terminate()
u.globalState.f.an()
break
case"log":H.mp(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
j=P.am(["command","print","msg",t])
j=new H.a3(!0,P.ba(null,P.z)).L(j)
s.toString
self.postMessage(j)}else P.U(s.h(t,"msg"))
break
case"error":throw H.c(s.h(t,"msg"))}},
mp:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.am(["command","log","msg",a])
r=new H.a3(!0,P.ba(null,P.z)).L(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.I(q)
t=H.a4(q)
s=P.cc(t)
throw H.c(s)}},
mr:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.kw=$.kw+("_"+s)
$.kx=$.kx+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.J(0,["spawned",new H.bb(s,r),q,t.r])
r=new H.eP(t,d,a,c,b)
if(e){t.bQ(q,q)
u.globalState.f.a.S(0,new H.aM(t,r,"start isolate"))}else r.$0()},
mO:function(a,b){var t=new H.ha(!0,!1,null,0)
t.dq(a,b)
return t},
n1:function(a){return new H.aL(!0,[]).V(new H.a3(!1,P.ba(null,P.z)).L(a))},
j0:function j0(a,b){this.a=a
this.b=b},
j1:function j1(a,b){this.a=a
this.b=b},
i6:function i6(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
b9:function b9(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
i0:function i0(a,b){this.a=a
this.b=b},
hG:function hG(a,b){this.a=a
this.b=b},
hH:function hH(a){this.a=a},
aM:function aM(a,b,c){this.a=a
this.b=b
this.c=c},
i5:function i5(){},
eO:function eO(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eP:function eP(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hA:function hA(){},
bb:function bb(a,b){this.b=a
this.a=b},
i7:function i7(a,b){this.a=a
this.b=b},
bU:function bU(a,b,c){this.b=a
this.c=b
this.a=c},
cD:function cD(a,b,c){this.a=a
this.b=b
this.c=c},
ha:function ha(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hb:function hb(a,b){this.a=a
this.b=b},
hc:function hc(a,b){this.a=a
this.b=b},
au:function au(a){this.a=a},
a3:function a3(a,b){this.a=a
this.b=b},
aL:function aL(a,b){this.a=a
this.b=b},
nl:function(a){return u.types[a]},
nt:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.q(a).$ist},
e:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.bl(a)
if(typeof t!=="string")throw H.c(H.O(a))
return t},
mH:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t=J.az(t)
s=t[0]
r=t[1]
return new H.fG(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aF:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
bz:function(a){var t,s,r,q,p,o,n,m,l
t=J.q(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.M||!!J.q(a).$isaJ){p=C.y(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.i.aJ(q,0)===36)q=C.i.d1(q,1)
l=H.dH(H.iD(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+l,u.mangledGlobalNames)},
L:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mF:function(a){return a.b?H.L(a).getUTCFullYear()+0:H.L(a).getFullYear()+0},
mD:function(a){return a.b?H.L(a).getUTCMonth()+1:H.L(a).getMonth()+1},
mz:function(a){return a.b?H.L(a).getUTCDate()+0:H.L(a).getDate()+0},
mA:function(a){return a.b?H.L(a).getUTCHours()+0:H.L(a).getHours()+0},
mC:function(a){return a.b?H.L(a).getUTCMinutes()+0:H.L(a).getMinutes()+0},
mE:function(a){return a.b?H.L(a).getUTCSeconds()+0:H.L(a).getSeconds()+0},
mB:function(a){return a.b?H.L(a).getUTCMilliseconds()+0:H.L(a).getMilliseconds()+0},
kv:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.c(H.O(a))
return a[b]},
bf:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a8(!0,b,"index",null)
t=J.bk(a)
if(b<0||C.b.cK(b,t))return P.A(b,a,"index",null,t)
return P.fD(b,"index",null)},
O:function(a){return new P.a8(!0,a,null,null)},
c:function(a){var t
if(a==null)a=new P.b2()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.lm})
t.name=""}else t.toString=H.lm
return t},
lm:function(){return J.bl(this.dartException)},
H:function(a){throw H.c(a)},
aj:function(a){throw H.c(P.ak(a))},
ae:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.hg(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
hh:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
kJ:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
ku:function(a,b){return new H.fo(a,b==null?null:b.method)},
jl:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.eT(a,s,t?null:b.receiver)},
I:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.j2(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aT(r,16)&8191)===10)switch(q){case 438:return t.$1(H.jl(H.e(s)+" (Error "+q+")",null))
case 445:case 5007:return t.$1(H.ku(H.e(s)+" (Error "+q+")",null))}}if(a instanceof TypeError){p=$.$get$kD()
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
if(g!=null)return t.$1(H.jl(s,g))
else{g=o.O(s)
if(g!=null){g.method="call"
return t.$1(H.jl(s,g))}else{g=n.O(s)
if(g==null){g=m.O(s)
if(g==null){g=l.O(s)
if(g==null){g=k.O(s)
if(g==null){g=j.O(s)
if(g==null){g=m.O(s)
if(g==null){g=i.O(s)
if(g==null){g=h.O(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return t.$1(H.ku(s,g))}}return t.$1(new H.hl(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.cI()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.a8(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.cI()
return a},
a4:function(a){var t
if(a==null)return new H.dj(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dj(a,null)},
nx:function(a){if(a==null||typeof a!='object')return J.bj(a)
else return H.aF(a)},
nj:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=a.length
for(r=0;r<s;){q=r+1
H.b(t)
p=a[r]
r=q+1
H.b(t)
b.i(0,p,a[q])}return b},
ns:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dF(b,new H.iL(a))
case 1:return H.dF(b,new H.iM(a,d))
case 2:return H.dF(b,new H.iN(a,d,e))
case 3:return H.dF(b,new H.iO(a,d,e,f))
case 4:return H.dF(b,new H.iP(a,d,e,f,g))}throw H.c(P.cc("Unsupported number of arguments for wrapped closure"))},
ar:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.ns)
a.$identity=t
return t},
m9:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.q(c).$ish){t.$reflectionInfo=c
r=H.mH(t).r}else r=c
q=d?Object.create(new H.fT().constructor.prototype):Object.create(new H.bm(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.k9(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.nl,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.k6:H.jd
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.c("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.k9(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
m6:function(a,b,c,d){var t=H.jd
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
k9:function(a,b,c){var t,s,r,q
if(c)return H.m8(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.m6(s,b==null?r!=null:b!==r,t,b)
return q},
m7:function(a,b,c,d){var t,s
t=H.jd
s=H.k6
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
m8:function(a,b){var t,s,r,q
t=$.k7
if(t==null){t=H.k4("self")
$.k7=t}t=$.k5
if(t==null){t=H.k4("receiver")
$.k5=t}s=b.$stubName
r=b.length
q=a[s]
t=H.m7(r,b==null?q!=null:b!==q,s,b)
return t},
jH:function(a,b,c,d,e,f){var t,s
t=J.az(b)
s=!!J.q(c).$ish?J.az(c):c
return H.m9(a,t,s,!!d,e,f)},
jd:function(a){return a.a},
k6:function(a){return a.c},
k4:function(a){var t,s,r,q,p
t=new H.bm("self","target","receiver","name")
s=J.az(Object.getOwnPropertyNames(t))
for(r=s.length,q=0;q<r;++q){p=s[q]
if(t[p]===a)return p}},
nU:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.af(a,"String"))},
nP:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.af(a,"double"))},
nT:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.af(a,"num"))},
nd:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.af(a,"bool"))},
nr:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.af(a,"int"))},
nz:function(a,b){throw H.c(H.af(a,b.substring(3)))},
ny:function(a,b){var t=J.P(b)
throw H.c(H.k8(a,t.bj(b,3,t.gj(b))))},
jL:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.q(a)[b])return a
H.nz(a,b)},
as:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.q(a)[b]
else t=!0
if(t)return a
H.ny(a,b)},
nS:function(a){if(a==null)return a
if(!!J.q(a).$ish)return a
throw H.c(H.af(a,"List"))},
jI:function(a){var t=J.q(a)
return"$S" in t?t.$S():null},
bg:function(a,b){var t,s
if(a==null)return!1
t=H.jI(a)
if(t==null)s=!1
else s=H.le(t,b)
return s},
nQ:function(a,b){var t,s
if(a==null)return a
if($.jE)return a
$.jE=!0
try{if(H.bg(a,b))return a
t=H.iV(b,null)
s=H.af(a,t)
throw H.c(s)}finally{$.jE=!1}},
af:function(a,b){return new H.hi("TypeError: "+H.e(P.cb(a))+": type '"+H.l2(a)+"' is not a subtype of type '"+b+"'")},
k8:function(a,b){return new H.dV("CastError: "+H.e(P.cb(a))+": type '"+H.l2(a)+"' is not a subtype of type '"+b+"'")},
l2:function(a){var t
if(a instanceof H.aw){t=H.jI(a)
if(t!=null)return H.iV(t,null)
return"Closure"}return H.bz(a)},
ah:function(a){if(!0===a)return!1
if(!!J.q(a).$isjh)a=a.$0()
if(typeof a==="boolean")return!a
throw H.c(H.af(a,"bool"))},
aq:function(a){throw H.c(new H.hu(a))},
b:function(a){if(H.ah(a))throw H.c(P.m5(null))},
nE:function(a){throw H.c(new P.e5(a))},
mJ:function(a){return new H.fK(a)},
li:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
lc:function(a){return u.getIsolateTag(a)},
G:function(a){return new H.ao(a,null)},
B:function(a,b){H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
iD:function(a){if(a==null)return
return a.$ti},
ld:function(a,b){return H.jP(a["$as"+H.e(b)],H.iD(a))},
S:function(a,b,c){var t,s
t=H.ld(a,b)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
a5:function(a,b){var t,s
t=H.iD(a)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
iV:function(a,b){var t=H.bh(a,b)
return t},
bh:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.b(!0)
H.b(!0)
return a[0].name+H.dH(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.e(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.bh(t,b)
return H.n3(a,b)}return"unknown-reified-type"},
n3:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.bh(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.bh(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.bh(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.ni(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.bh(l[j],b)+(" "+H.e(j))}q+="}"}return"("+q+") => "+t},
dH:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=new P.bC("")
for(r=b,q=!0,p=!0;H.b(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.b(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.bh(o,c)}return p?"":"<"+s.k(0)+">"},
iE:function(a){var t,s,r
if(a instanceof H.aw){t=H.jI(a)
if(t!=null)return H.iV(t,null)}s=J.q(a).constructor.name
if(a==null)return s
r=H.dH(a.$ti,0,null)
return s+r},
jP:function(a,b){if(a==null)return b
H.b(typeof a=="function")
H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.jM(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.jM(a,null,b)
return b},
bY:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.iD(a)
s=J.q(a)
if(s[b]==null)return!1
return H.l6(H.jP(s[d],t),c)},
dI:function(a,b,c,d){var t,s
if(a==null)return a
t=H.bY(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.dH(c,0,null)
throw H.c(H.k8(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
nM:function(a,b,c,d){var t,s
if(a==null)return a
t=H.bY(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.dH(c,0,null)
throw H.c(H.af(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
l6:function(a,b){var t,s,r,q,p
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
if(!H.T(r,b[p]))return!1}return!0},
nN:function(a,b,c){return H.jM(a,b,H.ld(b,c))},
T:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.name==="J")return!0
if('func' in b)return H.le(a,b)
if('func' in a)return b.name==="jh"||b.name==="C"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.b(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.b(!0)
q=b[0]}else q=b
if(q!==s){p=H.iV(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.l6(H.jP(o,t),r)},
l5:function(a,b,c){var t,s,r,q,p,o,n
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
if(!(H.T(o,n)||H.T(n,o)))return!1}return!0},
n9:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
H.b(typeof a=='object')
H.b(typeof b=='object')
t=J.az(Object.getOwnPropertyNames(b))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.T(p,o)||H.T(o,p)))return!1}return!0},
le:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.b('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.T(t,s)||H.T(s,t)))return!1}r=a.args
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
if(n===m){if(!H.l5(r,q,!1))return!1
if(!H.l5(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.b(j)
g=r[h]
H.b(i)
f=q[h]
if(!(H.T(g,f)||H.T(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=q[e]
if(!(H.T(g,f)||H.T(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=o[e]
if(!(H.T(g,f)||H.T(f,g)))return!1}}return H.n9(a.named,b.named)},
jM:function(a,b,c){H.b(typeof a=="function")
H.b(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
nV:function(a){var t=$.jJ
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
nR:function(a){return H.aF(a)},
nO:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nu:function(a){var t,s,r,q,p,o
H.b(!(a instanceof P.C))
t=$.jJ.$1(a)
s=$.iA[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iK[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.l4.$2(a,t)
if(t!=null){s=$.iA[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iK[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.iT(r)
$.iA[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.iK[t]=r
return r}if(p==="-"){o=H.iT(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.lg(a,r)
if(p==="*")throw H.c(P.jx(t))
if(u.leafTags[t]===true){o=H.iT(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.lg(a,r)},
lg:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.jN(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
iT:function(a){return J.jN(a,!1,null,!!a.$ist)},
nw:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return H.iT(t)
else return J.jN(t,c,null,null)},
np:function(){if(!0===$.jK)return
$.jK=!0
H.nq()},
nq:function(){var t,s,r,q,p,o,n,m
$.iA=Object.create(null)
$.iK=Object.create(null)
H.no()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.lh.$1(p)
if(o!=null){n=H.nw(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
no:function(){var t,s,r,q,p,o,n
t=C.R()
t=H.be(C.O,H.be(C.T,H.be(C.x,H.be(C.x,H.be(C.S,H.be(C.P,H.be(C.Q(C.y),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.jJ=new H.iH(p)
$.l4=new H.iI(o)
$.lh=new H.iJ(n)},
be:function(a,b){return a(b)||b},
nD:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
fG:function fG(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
hg:function hg(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fo:function fo(a,b){this.a=a
this.b=b},
eT:function eT(a,b,c){this.a=a
this.b=b
this.c=c},
hl:function hl(a){this.a=a},
j2:function j2(a){this.a=a},
dj:function dj(a,b){this.a=a
this.b=b},
iL:function iL(a){this.a=a},
iM:function iM(a,b){this.a=a
this.b=b},
iN:function iN(a,b,c){this.a=a
this.b=b
this.c=c},
iO:function iO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iP:function iP(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
aw:function aw(){},
h6:function h6(){},
fT:function fT(){},
bm:function bm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hi:function hi(a){this.a=a},
dV:function dV(a){this.a=a},
fK:function fK(a){this.a=a},
hu:function hu(a){this.a=a},
ao:function ao(a,b){this.a=a
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
eS:function eS(a){this.a=a},
eV:function eV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eW:function eW(a,b){this.a=a
this.$ti=b},
eX:function eX(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
iH:function iH(a){this.a=a},
iI:function iI(a){this.a=a},
iJ:function iJ(a){this.a=a},
iu:function(a){var t,s,r
if(!!J.q(a).$isp)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
ag:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bf(b,a))},
b1:function b1(){},
aE:function aE(){},
fc:function fc(){},
cs:function cs(){},
ct:function ct(){},
cu:function cu(){},
cr:function cr(){},
fd:function fd(){},
fe:function fe(){},
ff:function ff(){},
fg:function fg(){},
fh:function fh(){},
fi:function fi(){},
cv:function cv(){},
fj:function fj(){},
bL:function bL(){},
bM:function bM(){},
bN:function bN(){},
bO:function bO(){},
ni:function(a){return J.az(H.B(a?Object.keys(a):[],[null]))},
iU:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
q:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ck.prototype
return J.cj.prototype}if(typeof a=="string")return J.aA.prototype
if(a==null)return J.cl.prototype
if(typeof a=="boolean")return J.eR.prototype
if(a.constructor==Array)return J.ay.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aB.prototype
return a}if(a instanceof P.C)return a
return J.iC(a)},
jN:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iC:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.jK==null){H.np()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.c(P.jx("Return interceptor for "+H.e(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$jk()]
if(p!=null)return p
p=H.nu(a)
if(p!=null)return p
if(typeof a=="function")return C.U
s=Object.getPrototypeOf(a)
if(s==null)return C.B
if(s===Object.prototype)return C.B
if(typeof q=="function"){Object.defineProperty(q,$.$get$jk(),{value:C.t,enumerable:false,writable:true,configurable:true})
return C.t}return C.t},
az:function(a){a.fixed$length=Array
return a},
P:function(a){if(typeof a=="string")return J.aA.prototype
if(a==null)return a
if(a.constructor==Array)return J.ay.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aB.prototype
return a}if(a instanceof P.C)return a
return J.iC(a)},
dG:function(a){if(a==null)return a
if(a.constructor==Array)return J.ay.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aB.prototype
return a}if(a instanceof P.C)return a
return J.iC(a)},
la:function(a){if(typeof a=="number")return J.aY.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.aJ.prototype
return a},
nk:function(a){if(typeof a=="number")return J.aY.prototype
if(typeof a=="string")return J.aA.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.aJ.prototype
return a},
lb:function(a){if(typeof a=="string")return J.aA.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.aJ.prototype
return a},
i:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aB.prototype
return a}if(a instanceof P.C)return a
return J.iC(a)},
D:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.q(a).B(a,b)},
a7:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.la(a).aD(a,b)},
ln:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.la(a).aE(a,b)},
aO:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nt(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.P(a).h(a,b)},
lo:function(a,b,c,d){return J.i(a).dE(a,b,c,d)},
jQ:function(a,b){return J.lb(a).aJ(a,b)},
j3:function(a,b){return J.i(a).dW(a,b)},
lp:function(a,b,c,d){return J.i(a).dX(a,b,c,d)},
lq:function(a,b,c){return J.i(a).dY(a,b,c)},
jR:function(a,b){return J.i(a).bP(a,b)},
j4:function(a,b){return J.i(a).P(a,b)},
jS:function(a,b,c){return J.i(a).bS(a,b,c)},
lr:function(a,b){return J.i(a).ed(a,b)},
j5:function(a,b,c){return J.i(a).bT(a,b,c)},
bi:function(a,b,c){return J.i(a).bU(a,b,c)},
dJ:function(a,b){return J.i(a).eg(a,b)},
ls:function(a,b){return J.i(a).bV(a,b)},
lt:function(a,b,c){return J.i(a).bW(a,b,c)},
jT:function(a,b,c,d){return J.i(a).bX(a,b,c,d)},
lu:function(a,b,c,d,e){return J.i(a).bY(a,b,c,d,e)},
lv:function(a,b){return J.nk(a).R(a,b)},
j6:function(a,b,c){return J.P(a).em(a,b,c)},
j7:function(a){return J.i(a).c_(a)},
lw:function(a){return J.i(a).c0(a)},
lx:function(a){return J.i(a).c2(a)},
ly:function(a){return J.i(a).es(a)},
lz:function(a,b){return J.i(a).c4(a,b)},
j8:function(a,b){return J.i(a).c5(a,b)},
lA:function(a,b,c,d){return J.i(a).c6(a,b,c,d)},
lB:function(a,b,c,d,e){return J.i(a).eA(a,b,c,d,e)},
lC:function(a,b,c,d,e){return J.i(a).c7(a,b,c,d,e)},
lD:function(a,b,c,d,e,f){return J.i(a).eB(a,b,c,d,e,f)},
lE:function(a,b){return J.dG(a).t(a,b)},
dK:function(a,b){return J.i(a).c8(a,b)},
lF:function(a,b){return J.i(a).c9(a,b)},
lG:function(a){return J.i(a).eC(a)},
jU:function(a,b){return J.dG(a).a1(a,b)},
lH:function(a){return J.i(a).gec(a)},
bj:function(a){return J.q(a).gw(a)},
aP:function(a){return J.dG(a).gA(a)},
bk:function(a){return J.P(a).gj(a)},
lI:function(a){return J.i(a).gb2(a)},
lJ:function(a){return J.q(a).gC(a)},
lK:function(a){return J.i(a).gf_(a)},
lL:function(a){return J.i(a).gaA(a)},
j9:function(a){return J.i(a).gm(a)},
ja:function(a){return J.i(a).gn(a)},
jV:function(a){return J.i(a).gF(a)},
jb:function(a,b){return J.i(a).a6(a,b)},
lM:function(a){return J.i(a).aC(a)},
lN:function(a){return J.i(a).b8(a)},
lO:function(a,b){return J.i(a).b9(a,b)},
lP:function(a,b,c){return J.i(a).ba(a,b,c)},
jW:function(a,b,c){return J.i(a).bd(a,b,c)},
lQ:function(a,b){return J.i(a).cd(a,b)},
lR:function(a,b){return J.dG(a).cg(a,b)},
lS:function(a,b,c){return J.i(a).ci(a,b,c)},
jX:function(a){return J.dG(a).eT(a)},
lT:function(a,b){return J.i(a).J(a,b)},
lU:function(a,b,c,d){return J.i(a).bi(a,b,c,d)},
lV:function(a,b,c,d,e,f,g){return J.i(a).cn(a,b,c,d,e,f,g)},
lW:function(a,b,c,d){return J.i(a).co(a,b,c,d)},
dL:function(a,b,c,d){return J.i(a).cp(a,b,c,d)},
lX:function(a){return J.lb(a).f2(a)},
bl:function(a){return J.q(a).k(a)},
lY:function(a,b,c,d){return J.i(a).f4(a,b,c,d)},
lZ:function(a,b,c){return J.i(a).cr(a,b,c)},
m_:function(a,b,c){return J.i(a).cs(a,b,c)},
jc:function(a,b,c){return J.i(a).ct(a,b,c)},
m0:function(a,b,c){return J.i(a).cu(a,b,c)},
jY:function(a,b,c){return J.i(a).cv(a,b,c)},
jZ:function(a,b,c){return J.i(a).cw(a,b,c)},
k_:function(a,b,c){return J.i(a).cz(a,b,c)},
k0:function(a,b,c,d){return J.i(a).cA(a,b,c,d)},
k1:function(a,b,c,d){return J.i(a).cB(a,b,c,d)},
m1:function(a,b){return J.i(a).cD(a,b)},
m2:function(a,b,c){return J.i(a).f5(a,b,c)},
m3:function(a,b,c,d,e,f,g){return J.i(a).cF(a,b,c,d,e,f,g)},
m4:function(a,b,c,d,e){return J.i(a).cH(a,b,c,d,e)},
a:function a(){},
eR:function eR(){},
cl:function cl(){},
bt:function bt(){},
fy:function fy(){},
aJ:function aJ(){},
aB:function aB(){},
ay:function ay(a){this.$ti=a},
ji:function ji(a){this.$ti=a},
dQ:function dQ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aY:function aY(){},
ck:function ck(){},
cj:function cj(){},
aA:function aA(){}},P={
mR:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.na()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.ar(new P.hw(t),1)).observe(s,{childList:true})
return new P.hv(t,s,r)}else if(self.setImmediate!=null)return P.nb()
return P.nc()},
mS:function(a){H.iB()
self.scheduleImmediate(H.ar(new P.hx(a),0))},
mT:function(a){H.iB()
self.setImmediate(H.ar(new P.hy(a),0))},
mU:function(a){P.ju(C.v,a)},
ju:function(a,b){var t=C.b.K(a.a,1000)
return H.mO(t<0?0:t,b)},
kZ:function(a,b){if(H.bg(a,{func:1,args:[P.J,P.J]})){b.toString
return a}else{b.toString
return a}},
mm:function(a,b,c){var t
if(a==null)a=new P.b2()
t=$.v
if(t!==C.d)t.toString
t=new P.E(0,t,null,[c])
t.bx(a,b)
return t},
mn:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.E(0,$.v,null,[P.h])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.eG(t,b,!1,s)
try{for(m=0,l=0;m<1;++m){q=a[m]
p=l
q.b6(new P.eF(t,p,s,b,!1),r)
l=++t.b}if(l===0){l=new P.E(0,$.v,null,[null])
l.bw(C.z)
return l}k=new Array(l)
k.fixed$length=Array
t.a=k}catch(j){o=H.I(j)
n=H.a4(j)
if(t.b===0||!1)return P.mm(o,n,null)
else{t.c=o
t.d=n}}return s},
n2:function(a,b,c){$.v.toString
a.H(b,c)},
mW:function(a,b){var t=new P.E(0,$.v,null,[b])
H.b(!0)
t.a=4
t.c=a
return t},
kT:function(a,b){var t,s,r
H.b(b.a<4)
H.b(!(a instanceof P.E))
H.b(b.a===0)
b.a=1
try{a.b6(new P.hQ(b),new P.hR(b))}catch(r){t=H.I(r)
s=H.a4(r)
P.nA(new P.hS(b,t,s))}},
hP:function(a,b){var t,s,r
H.b(b.a<=1)
for(;t=a.a,s=t===2,s;){H.b(s)
a=a.c}if(t>=4){r=b.aw()
b.aI(a)
P.b8(b,r)}else{r=b.c
H.b(b.a<=1)
b.a=2
b.c=a
a.bJ(r)}},
b8:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.iv(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.b8(t.a,b)}s=t.a
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
P.iv(null,null,p,o,s)
return}s=$.v
if(s==null?l!=null:s!==l){H.b(l!=null)
s=$.v
H.b(l==null?s!=null:l!==s)
j=$.v
$.v=l
i=j}else i=null
s=b.c
if(s===8)new P.hX(t,r,b,q).$0()
else if(p){if((s&1)!==0)new P.hW(r,b,m).$0()}else if((s&2)!==0)new P.hV(t,r,b).$0()
if(i!=null){H.b(!0)
$.v=i}s=r.b
if(!!J.q(s).$isW){if(s.a>=4){H.b(o.a<4)
h=o.c
o.c=null
b=o.ax(h)
H.b(o.a<4)
H.b(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.hP(s,o)
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
n5:function(){var t,s
for(;t=$.bc,t!=null;){$.bW=null
s=t.b
$.bc=s
if(s==null)$.bV=null
t.a.$0()}},
n8:function(){$.jF=!0
try{P.n5()}finally{$.bW=null
$.jF=!1
if($.bc!=null)$.$get$jB().$1(P.l7())}},
l1:function(a){var t=new P.cU(a,null)
if($.bc==null){$.bV=t
$.bc=t
if(!$.jF)$.$get$jB().$1(P.l7())}else{$.bV.b=t
$.bV=t}},
n7:function(a){var t,s,r
t=$.bc
if(t==null){P.l1(a)
$.bW=$.bV
return}s=new P.cU(a,null)
r=$.bW
if(r==null){s.b=t
$.bW=s
$.bc=s}else{s.b=r.b
r.b=s
$.bW=s
if(s.b==null)$.bV=s}},
nA:function(a){var t=$.v
if(C.d===t){P.bd(null,null,C.d,a)
return}t.toString
P.bd(null,null,t,t.aX(a))},
n0:function(a,b,c){var t=a.eh(0)
if(!!J.q(t).$isW&&t!==$.$get$km())t.f6(new P.it(b,c))
else b.ab(c)},
mP:function(a,b){var t=$.v
if(t===C.d){t.toString
return P.ju(a,b)}return P.ju(a,t.aX(b))},
jA:function(a){var t,s
H.b(a!=null)
t=$.v
H.b(a==null?t!=null:a!==t)
s=$.v
$.v=a
return s},
iv:function(a,b,c,d,e){var t={}
t.a=d
P.n7(new P.iw(t,e))},
l_:function(a,b,c,d){var t,s
if($.v===c)return d.$0()
t=P.jA(c)
try{s=d.$0()
return s}finally{s=t
H.b(s!=null)
$.v=s}},
l0:function(a,b,c,d,e){var t,s
if($.v===c)return d.$1(e)
t=P.jA(c)
try{s=d.$1(e)
return s}finally{s=t
H.b(s!=null)
$.v=s}},
n6:function(a,b,c,d,e,f){var t,s
if($.v===c)return d.$2(e,f)
t=P.jA(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.b(s!=null)
$.v=s}},
bd:function(a,b,c,d){var t=C.d!==c
if(t)d=!(!t||!1)?c.aX(d):c.ee(d)
P.l1(d)},
hw:function hw(a){this.a=a},
hv:function hv(a,b,c){this.a=a
this.b=b
this.c=c},
hx:function hx(a){this.a=a},
hy:function hy(a){this.a=a},
W:function W(){},
eG:function eG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eF:function eF(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
je:function je(){},
hB:function hB(){},
cV:function cV(a,b){this.a=a
this.$ti=b},
io:function io(a,b){this.a=a
this.$ti=b},
b7:function b7(a,b,c,d,e,f){var _=this
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
hM:function hM(a,b){this.a=a
this.b=b},
hU:function hU(a,b){this.a=a
this.b=b},
hQ:function hQ(a){this.a=a},
hR:function hR(a){this.a=a},
hS:function hS(a,b,c){this.a=a
this.b=b
this.c=c},
hO:function hO(a,b){this.a=a
this.b=b},
hT:function hT(a,b){this.a=a
this.b=b},
hN:function hN(a,b,c){this.a=a
this.b=b
this.c=c},
hX:function hX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hY:function hY(a){this.a=a},
hW:function hW(a,b,c){this.a=a
this.b=b
this.c=c},
hV:function hV(a,b,c){this.a=a
this.b=b
this.c=c},
cU:function cU(a,b){this.a=a
this.b=b},
bB:function bB(){},
h0:function h0(a){this.a=a},
h1:function h1(a,b){this.a=a
this.b=b},
fZ:function fZ(a,b,c){this.a=a
this.b=b
this.c=c},
h_:function h_(a){this.a=a},
fY:function fY(){},
it:function it(a,b){this.a=a
this.b=b},
jt:function jt(){},
aQ:function aQ(a,b){this.a=a
this.b=b},
is:function is(){},
iw:function iw(a,b){this.a=a
this.b=b},
i9:function i9(){},
ib:function ib(a,b){this.a=a
this.b=b},
ia:function ia(a,b){this.a=a
this.b=b},
ic:function ic(a,b){this.a=a
this.b=b},
kr:function(a,b){return new H.aa(0,null,null,null,null,null,0,[a,b])},
a1:function(){return new H.aa(0,null,null,null,null,null,0,[null,null])},
am:function(a){return H.nj(a,new H.aa(0,null,null,null,null,null,0,[null,null]))},
ba:function(a,b){return new P.i3(0,null,null,null,null,null,0,[a,b])},
aD:function(a,b,c,d){return new P.i1(0,null,null,null,null,null,0,[d])},
jD:function(){var t=Object.create(null)
H.b(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
mu:function(a,b,c){var t,s
if(P.jG(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$bX()
C.a.l(s,a)
try{P.n4(a,t)}finally{H.b(C.a.gb_(s)===a)
s.pop()}s=P.kB(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eQ:function(a,b,c){var t,s,r
if(P.jG(a))return b+"..."+c
t=new P.bC(b)
s=$.$get$bX()
C.a.l(s,a)
try{r=t
r.a=P.kB(r.ga_(),a,", ")}finally{H.b(C.a.gb_(s)===a)
s.pop()}s=t
s.a=s.ga_()+c
s=t.ga_()
return s.charCodeAt(0)==0?s:s},
jG:function(a){var t,s
for(t=0;s=$.$get$bX(),t<s.length;++t)if(a===s[t])return!0
return!1},
n4:function(a,b){var t,s,r,q,p,o,n,m,l,k
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
jo:function(a,b){var t,s
t=P.aD(null,null,null,b)
for(s=J.aP(a);s.p();)t.l(0,s.gq(s))
return t},
kt:function(a){var t,s,r
t={}
if(P.jG(a))return"{...}"
s=new P.bC("")
try{C.a.l($.$get$bX(),a)
r=s
r.a=r.ga_()+"{"
t.a=!0
J.jU(a,new P.f3(t,s))
t=s
t.a=t.ga_()+"}"}finally{t=$.$get$bX()
H.b(C.a.gb_(t)===a)
t.pop()}t=s.ga_()
return t.charCodeAt(0)==0?t:t},
jp:function(a,b){var t=new P.eY(null,0,0,0,[b])
t.dj(a,b)
return t},
i3:function i3(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
i1:function i1(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
i2:function i2(a,b,c){this.a=a
this.b=b
this.c=c},
bJ:function bJ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
i_:function i_(){},
jn:function jn(){},
cm:function cm(){},
l:function l(){},
co:function co(){},
f3:function f3(a,b){this.a=a
this.b=b},
b_:function b_(){},
eY:function eY(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
i4:function i4(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fN:function fN(){},
fM:function fM(){},
bK:function bK(){},
mi:function(a){var t=J.q(a)
if(!!t.$isaw)return t.k(a)
return"Instance of '"+H.bz(a)+"'"},
ks:function(a,b,c){var t,s
t=H.B([],[c])
for(s=J.aP(a);s.p();)C.a.l(t,s.gq(s))
return t},
kB:function(a,b,c){var t=J.aP(b)
if(!t.p())return a
if(c.length===0){do a+=H.e(t.gq(t))
while(t.p())}else{a+=H.e(t.gq(t))
for(;t.p();)a=a+c+H.e(t.gq(t))}return a},
ma:function(a,b){return J.lv(a,b)},
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
c5:function(a){if(a>=10)return""+a
return"0"+a},
mf:function(a,b,c,d,e,f){return new P.ax(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
cb:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bl(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mi(a)},
m5:function(a){return new P.c2(a)},
dP:function(a){return new P.a8(!1,null,null,a)},
k2:function(a,b,c){return new P.a8(!0,a,b,c)},
fD:function(a,b,c){return new P.cC(null,null,!0,a,b,"Value not in range")},
aG:function(a,b,c,d,e){return new P.cC(b,c,!0,a,d,"Invalid value")},
ky:function(a,b,c,d,e,f){if(0>a||a>c)throw H.c(P.aG(a,0,c,"start",f))
if(a>b||b>c)throw H.c(P.aG(b,a,c,"end",f))
return b},
A:function(a,b,c,d,e){var t=e!=null?e:J.bk(b)
return new P.eN(b,t,!0,a,c,"Index out of range")},
u:function(a){return new P.hm(a)},
jx:function(a){return new P.hk(a)},
cJ:function(a){return new P.b4(a)},
ak:function(a){return new P.dX(a)},
cc:function(a){return new P.hL(a)},
U:function(a){H.iU(H.e(a))},
ai:function ai(){},
F:function F(){},
aV:function aV(a,b){this.a=a
this.b=b},
Y:function Y(){},
ax:function ax(a){this.a=a},
ec:function ec(){},
ed:function ed(){},
aW:function aW(){},
c2:function c2(a){this.a=a},
b2:function b2(){},
a8:function a8(a,b,c,d){var _=this
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
eN:function eN(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hm:function hm(a){this.a=a},
hk:function hk(a){this.a=a},
b4:function b4(a){this.a=a},
dX:function dX(a){this.a=a},
cI:function cI(){},
e5:function e5(a){this.a=a},
jg:function jg(){},
hL:function hL(a){this.a=a},
eg:function eg(a,b,c){this.a=a
this.b=b
this.$ti=c},
z:function z(){},
Q:function Q(){},
ci:function ci(){},
h:function h(){},
X:function X(){},
J:function J(){},
a6:function a6(){},
C:function C(){},
b3:function b3(){},
n:function n(){},
bC:function bC(a){this.a=a},
jw:function jw(){},
iy:function(a){var t,s,r,q,p
if(a==null)return
t=P.a1()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.aj)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
ng:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.jU(a,new P.ix(t))
return t},
kh:function(){var t=$.kg
if(t==null){t=J.j6(window.navigator.userAgent,"Opera",0)
$.kg=t}return t},
me:function(){var t,s
t=$.kd
if(t!=null)return t
s=$.ke
if(s==null){s=J.j6(window.navigator.userAgent,"Firefox",0)
$.ke=s}if(s)t="-moz-"
else{s=$.kf
if(s==null){s=!P.kh()&&J.j6(window.navigator.userAgent,"Trident/",0)
$.kf=s}if(s)t="-ms-"
else t=P.kh()?"-o-":"-webkit-"}$.kd=t
return t},
ii:function ii(){},
ik:function ik(a,b){this.a=a
this.b=b},
ix:function ix(a){this.a=a},
ij:function ij(a,b){this.a=a
this.b=b},
i8:function i8(){},
R:function R(){},
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
ex:function ex(){},
ey:function ey(){},
eB:function eB(){},
eD:function eD(){},
a0:function a0(){},
a9:function a9(){},
eL:function eL(){},
eU:function eU(){},
f5:function f5(){},
fp:function fp(){},
fw:function fw(){},
fA:function fA(){},
fB:function fB(){},
fE:function fE(){},
fF:function fF(){},
bA:function bA(){},
h2:function h2(){},
w:function w(){},
h3:function h3(){},
bE:function bE(){},
bF:function bF(){},
hf:function hf(){},
ho:function ho(){},
d4:function d4(){},
d5:function d5(){},
db:function db(){},
dc:function dc(){},
dl:function dl(){},
dm:function dm(){},
ds:function ds(){},
dt:function dt(){},
dR:function dR(){},
dS:function dS(){},
aR:function aR(){},
fq:function fq(){},
fI:function fI(){},
fJ:function fJ(){},
fS:function fS(){},
dh:function dh(){},
di:function di(){}},W={
mg:function(a,b,c){var t,s
t=document.body
s=(t&&C.n).N(t,a,b,c)
s.toString
t=new H.cT(new W.M(s),new W.ef(),[W.r])
return t.gZ(t)},
mh:function(a){return"wheel"},
bo:function(a){var t,s,r
t="element tag unavailable"
try{s=J.lK(a)
if(typeof s==="string")t=a.tagName}catch(r){H.I(r)}return t},
mV:function(a,b){return document.createElement(a)},
aN:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kX:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
a2:function(a,b,c,d,e){var t=W.l3(new W.hK(c))
t=new W.hJ(0,a,b,t,!1,[e])
t.dw(a,b,c,!1,e)
return t},
kU:function(a){var t,s
t=document.createElement("a")
s=new W.id(t,window.location)
s=new W.bI(s)
s.dz(a)
return s},
mY:function(a,b,c,d){return!0},
mZ:function(a,b,c,d){var t,s,r,q,p
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
kY:function(){var t=P.n
t=new W.ip(P.jo(C.q,t),P.aD(null,null,null,t),P.aD(null,null,null,t),P.aD(null,null,null,t),null)
t.dC(null,new H.bu(C.q,new W.iq(),[H.a5(C.q,0),null]),["TEMPLATE"],null)
return t},
l3:function(a){var t=$.v
if(t===C.d)return a
return t.ef(a)},
j:function j(){},
c1:function c1(){},
dM:function dM(){},
dN:function dN(){},
dO:function dO(){},
aS:function aS(){},
at:function at(){},
c3:function c3(){},
dU:function dU(){},
av:function av(){},
dY:function dY(){},
dZ:function dZ(){},
e_:function e_(){},
e0:function e0(){},
aT:function aT(){},
e1:function e1(){},
Z:function Z(){},
aU:function aU(){},
e2:function e2(){},
e3:function e3(){},
e4:function e4(){},
e6:function e6(){},
e7:function e7(){},
c6:function c6(){},
bn:function bn(){},
e8:function e8(){},
c7:function c7(){},
e9:function e9(){},
c8:function c8(){},
c9:function c9(){},
ca:function ca(){},
ea:function ea(){},
eb:function eb(){},
a_:function a_(){},
ef:function ef(){},
f:function f(){},
d:function d(){},
V:function V(){},
bp:function bp(){},
eA:function eA(){},
eE:function eE(){},
eI:function eI(){},
cf:function cf(){},
eJ:function eJ(){},
bq:function bq(){},
cg:function cg(){},
eK:function eK(){},
br:function br(){},
bs:function bs(){},
aC:function aC(){},
eZ:function eZ(){},
f_:function f_(){},
bv:function bv(){},
f7:function f7(){},
b0:function b0(){},
f9:function f9(){},
bw:function bw(){},
fa:function fa(){},
K:function K(){},
cw:function cw(){},
fk:function fk(a){this.a=a},
fl:function fl(a){this.a=a},
bx:function bx(){},
M:function M(a){this.a=a},
r:function r(){},
cx:function cx(){},
by:function by(){},
ac:function ac(){},
fz:function fz(){},
fC:function fC(){},
cB:function cB(){},
cE:function cE(){},
fL:function fL(){},
an:function an(){},
fP:function fP(){},
fR:function fR(){},
ad:function ad(){},
fW:function fW(){},
fX:function fX(a){this.a=a},
cL:function cL(){},
h4:function h4(){},
h5:function h5(){},
bD:function bD(){},
h7:function h7(){},
h8:function h8(){},
h9:function h9(){},
aH:function aH(){},
hd:function hd(){},
he:function he(){},
cS:function cS(){},
aI:function aI(){},
hn:function hn(){},
hp:function hp(){},
b6:function b6(){},
hq:function hq(){},
hr:function hr(){},
aK:function aK(){},
bH:function bH(){},
ht:function ht(a){this.a=a},
jz:function jz(){},
hC:function hC(){},
hD:function hD(){},
hZ:function hZ(){},
d8:function d8(){},
ih:function ih(){},
il:function il(){},
hz:function hz(){},
hE:function hE(a){this.a=a},
hI:function hI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hF:function hF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hJ:function hJ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
hK:function hK(a){this.a=a},
bI:function bI(a){this.a=a},
m:function m(){},
cz:function cz(a){this.a=a},
fn:function fn(a){this.a=a},
fm:function fm(a,b,c){this.a=a
this.b=b
this.c=c},
bP:function bP(){},
ie:function ie(){},
ig:function ig(){},
ip:function ip(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iq:function iq(){},
im:function im(){},
cd:function cd(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cy:function cy(){},
jr:function jr(){},
jy:function jy(){},
id:function id(a,b){this.a=a
this.b=b},
du:function du(a){this.a=a},
ir:function ir(a){this.a=a},
cW:function cW(){},
cX:function cX(){},
cY:function cY(){},
cZ:function cZ(){},
d_:function d_(){},
d0:function d0(){},
d1:function d1(){},
d2:function d2(){},
d3:function d3(){},
d6:function d6(){},
d7:function d7(){},
d9:function d9(){},
da:function da(){},
dd:function dd(){},
de:function de(){},
bQ:function bQ(){},
bR:function bR(){},
df:function df(){},
dg:function dg(){},
dk:function dk(){},
dn:function dn(){},
dp:function dp(){},
bS:function bS(){},
bT:function bT(){},
dq:function dq(){},
dr:function dr(){},
dv:function dv(){},
dw:function dw(){},
dx:function dx(){},
dy:function dy(){},
dz:function dz(){},
dA:function dA(){},
dB:function dB(){},
dC:function dC(){},
dD:function dD(){},
dE:function dE(){}},B={
nB:function(a){var t,s
t=document
s=W.aC
W.a2(t,"keydown",new B.iW(),!1,s)
W.a2(t,"keyup",new B.iX(),!1,s)
if(!$.nC)W.a2(t,"mousemove",new B.iY(),!1,W.K)
s=W.K
W.a2(t,"mousedown",new B.iZ(),!1,s)
W.a2(t,"mouseup",new B.j_(),!1,s)},
my:function(a,b,c,d){var t,s,r,q,p,o,n
t=new Float32Array(3)
s=$.$get$iz()
r=$.$get$bZ()
q=new T.ab(new Float32Array(16))
q.ar()
p=new Float32Array(3)
o=new Float32Array(3)
n=new Float32Array(3)
t=new B.fr(a,b,c,0,new T.o(t),-0.02,s,r,q,new T.o(p),new T.o(o),new T.o(n),new T.o(new Float32Array(3)),"camera:orbit",!1,!0)
t.dk(a,b,c,d)
return t},
iW:function iW(){},
iX:function iX(){},
iY:function iY(){},
iZ:function iZ(){},
j_:function j_(){},
fr:function fr(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
fs:function fs(a){this.a=a},
ft:function ft(a){this.a=a},
fu:function fu(){},
fv:function fv(a){this.a=a},
mb:function(d1,d2,d3,d4,d5,d6,d7,d8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0
t=-d6
s=-d7
r=new T.o(new Float32Array(3))
r.u(t,s,d8)
q=new T.o(new Float32Array(3))
q.u(d6,s,d8)
p=new T.o(new Float32Array(3))
p.u(d6,d7,d8)
o=new T.o(new Float32Array(3))
o.u(t,d7,d8)
n=-d8
m=new T.o(new Float32Array(3))
m.u(t,s,n)
l=new T.o(new Float32Array(3))
l.u(t,d7,n)
k=new T.o(new Float32Array(3))
k.u(d6,d7,n)
j=new T.o(new Float32Array(3))
j.u(d6,s,n)
i=new T.o(new Float32Array(3))
i.u(t,d7,n)
h=new T.o(new Float32Array(3))
h.u(t,d7,d8)
g=new T.o(new Float32Array(3))
g.u(d6,d7,d8)
f=new T.o(new Float32Array(3))
f.u(d6,d7,n)
e=new T.o(new Float32Array(3))
e.u(d6,s,d8)
d=new T.o(new Float32Array(3))
d.u(t,s,d8)
c=new T.o(new Float32Array(3))
c.u(t,s,n)
b=new T.o(new Float32Array(3))
b.u(d6,s,n)
a=new T.o(new Float32Array(3))
a.u(d6,s,n)
a0=new T.o(new Float32Array(3))
a0.u(d6,d7,n)
a1=new T.o(new Float32Array(3))
a1.u(d6,d7,d8)
a2=new T.o(new Float32Array(3))
a2.u(d6,s,d8)
a3=new T.o(new Float32Array(3))
a3.u(t,s,n)
a4=new T.o(new Float32Array(3))
a4.u(t,s,d8)
s=new T.o(new Float32Array(3))
s.u(t,d7,d8)
a5=new T.o(new Float32Array(3))
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
c8=new G.eH(!1,[],[],[],P.a1())
c8.bn("aTexUV")
c8.bn("aNormal")
c8.da(6)
c8.dc([r,q,p,o,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,s,a5])
c8.d8("aTexUV",[t,n,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7])
for(c9=0;t=$.$get$kS(),c9<6;++c9){d0=t[c9]
c8.d9("aNormal",[d0,d0,d0,d0])}return c8}},G={
mQ:function(a){var t,s,r
t=H.B(a.split("\n"),[P.n])
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.e(t[s])}return C.a.al(t,"\n")},
kR:function(a,b,c){var t,s,r,q
t=J.i(a)
s=t.c1(a,b)
t.bg(a,s,c)
t.bZ(a,s)
r=t.bc(a,s,35713)
if(r!=null&&!r){q=t.bb(a,s)
P.U("E:Compilation failed:")
P.U("E:"+G.mQ(c))
P.U("E:Failure:")
P.U(C.i.a5("E:",q))
throw H.c(q)}return s},
kl:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.j9(a[s])
b[t+1]=J.ja(a[s])
b[t+2]=J.jV(a[s])}return b},
mk:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.j9(a[s])
b[t+1]=J.ja(a[s])}return b},
ml:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.j9(a[s])
b[t+1]=J.ja(a[s])
b[t+2]=J.jV(a[s])
b[t+3]=J.lL(a[s])}return b},
mj:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.aO(a[s],0)
b[t+1]=J.aO(a[s],1)
b[t+2]=J.aO(a[s],2)
b[t+3]=J.aO(a[s],3)}return b},
mX:function(a,b){var t,s,r,q,p,o,n,m,l,k
for(t=a.e,s=t.gE(t),s=s.gA(s),r=b.x,q=[[P.h,P.z]],p=[P.Y],o=[T.ap],n=[T.o],m=[T.x];s.p();){l=s.gq(s)
if(!r.G(0,l)){l="Dropping unnecessary attribute: "+H.e(l)
if($.l9>0)H.iU("I: "+l)
continue}k=t.h(0,l)
switch($.$get$N().h(0,l).a){case"vec2":b.a9(l,G.mk(H.dI(k,"$ish",m,"$ash"),null),2)
break
case"vec3":b.a9(l,G.kl(H.dI(k,"$ish",n,"$ash"),null),3)
break
case"vec4":b.a9(l,G.ml(H.dI(k,"$ish",o,"$ash"),null),4)
break
case"float":b.a9(l,new Float32Array(H.iu(H.dI(k,"$ish",p,"$ash"))),1)
break
case"uvec4":b.a9(l,G.mj(H.dI(k,"$ish",q,"$ash"),null),4)
break
default:if(H.ah(!1))H.aq("unknown type for "+H.e(l)+" ["+J.lJ(k[0]).k(0)+"] ["+new H.ao(H.iE(k),null).k(0)+"] "+H.e(k))}}},
mI:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.aD(null,null,null,P.n)
s=c.b
r=d.b
q=c.f
p=J.lw(b.a)
o=G.kR(b.a,35633,s)
J.jS(b.a,p,o)
n=G.kR(b.a,35632,r)
J.jS(b.a,p,n)
if(q.length>0)J.lY(b.a,p,q,35980)
J.lQ(b.a,p)
if(!J.lP(b.a,p,35714))H.H(J.lO(b.a,p))
t=new G.fH(b,c,d,p,P.jo(c.c,null),P.a1(),P.a1(),t,null,a,!1,!0)
t.dl(a,b,c,d)
return t},
kz:function(a){return new G.fO(a,null,[],[],[],[],0,P.a1())},
mN:function(){return new G.cO(!1,!1,!1,!0,1,9729,9729)},
fb:function fb(){},
hj:function hj(){},
dT:function dT(){},
dW:function dW(a,b){this.a=a
this.b=b},
ez:function ez(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eH:function eH(a,b,c,d,e){var _=this
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
f6:function f6(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
f8:function f8(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
fx:function fx(){},
fH:function fH(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
fO:function fO(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fQ:function fQ(){},
cO:function cO(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bG:function bG(){},
eM:function eM(a,b,c,d,e,f){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f}},R={cA:function cA(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.c=n},fU:function fU(){},fV:function fV(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},D={
mx:function(){var t,s,r,q,p,o
t=new P.E(0,$.v,null,[null])
s=new P.cV(t,[null])
r=window.navigator
r=(r&&C.Y).cN(r,!0).ao(new D.f1(s))
q=new D.f2(s)
p=H.a5(r,0)
o=$.v
if(o!==C.d)q=P.kZ(q,o)
r.as(new P.b7(null,new P.E(0,o,null,[p]),2,null,q,[p,p]))
return t},
f1:function f1(a){this.a=a},
f0:function f0(a,b){this.a=a
this.b=b},
f2:function f2(a){this.a=a}},A={
iF:function(a){var t,s
t=C.X.eD(a,0,new A.iG())
s=536870911&t+(C.b.cI(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
iG:function iG(){}},T={
b5:function(a,b,c){var t=new T.o(new Float32Array(3))
t.u(a,b,c)
return t},
ab:function ab(a){this.a=a},
x:function x(a){this.a=a},
o:function o(a){this.a=a},
ap:function ap(a){this.a=a}},U={
nv:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
t={}
s=document
r=new R.fV(0,0,null,null,null,null)
r.dn(C.p.cM(s,"stats"),"blue","gray")
q=C.p.eS(s,"#webgl-canvas")
p=new G.dW(null,q)
s=(q&&C.J).cL(q,"webgl2",P.am(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
p.a=s
if(s==null)H.H(P.cc('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
o="ChronosGL Config: "+H.e(J.lM(s))
if($.l9>0)P.U("I: "+o)
J.lu(s,0,0,0,1)
J.dK(s,2929)
n=B.my(15,10,0,q)
s=new T.ab(new Float32Array(16))
s.ar()
o=new T.ab(new Float32Array(16))
o.ar()
m=new R.cA(q,p,n,50,1,0.1,1000,s,o,new T.ab(new Float32Array(16)),P.a1(),"perspective",!1,!0)
m.bs()
m.ck(null)
W.a2(window,"resize",m.geW(),!1,W.f)
l=G.mI("solid",p,$.$get$ll(),$.$get$lk())
k=new G.f6(P.a1(),"cube",!1,!0)
k.X("cDepthTest",!0)
k.X("cDepthWrite",!0)
k.X("cBlendEquation",$.$get$k3())
k.X("cStencilFunc",$.$get$kA())
k.X("uColor",$.$get$ka())
s=new T.ab(new Float32Array(16))
s.ar()
k.X("uModelMatrix",s)
j=B.mb(!0,1,0,1,0,1,1,1)
s=l.d
o=l.e.x
i=P.a1()
h=J.ly(s.a)
g=new G.f8(s,h,4,i,o,null,0,-1,null,null,P.a1(),"meshdata:cube",!1,!0)
f=G.kl(j.d,null)
i.i(0,"aPosition",J.j7(s.a))
g.ch=f
g.bm("aPosition",f,3)
e=$.$get$N().h(0,"aPosition")
if(e==null)H.H("Unknown canonical aPosition")
H.b(o.G(0,"aPosition"))
d=o.h(0,"aPosition")
J.dJ(s.a,h)
s.ca(0,d,0)
s.cG(0,i.h(0,"aPosition"),d,e.bo(),5126,!1,0,0)
o=j.dg()
g.y=J.j7(s.a)
H.b(g.ch!=null)
i=g.ch.length
if(i<768){g.saO(new Uint8Array(H.iu(o)))
g.Q=5121}else if(i<196608){g.saO(new Uint16Array(H.iu(o)))
g.Q=5123}else{g.saO(new Uint32Array(H.iu(o)))
g.Q=5125}J.dJ(s.a,h)
o=g.y
i=g.cx
h=J.q(i)
H.b(!!h.$iskO||!!h.$iskP||!!h.$iskQ)
J.j5(s.a,34963,o)
J.jT(s.a,34963,i,35048)
G.mX(j,g)
t.a=null
t.b=null
t.c=0
P.mn([D.mx()],null,!1).ao(new U.iS(t,p,k,new U.iR(t,n,l,g,m,k,r)))},
iR:function iR(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
iS:function iS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}}
var v=[C,H,J,P,W,B,G,R,D,A,T,U]
setFunctionNamesIfNecessary(v)
var $={}
H.jj.prototype={}
J.a.prototype={
B:function(a,b){return a===b},
gw:function(a){return H.aF(a)},
k:function(a){return"Instance of '"+H.bz(a)+"'"},
gC:function(a){return new H.ao(H.iE(a),null)}}
J.eR.prototype={
k:function(a){return String(a)},
gw:function(a){return a?519018:218159},
gC:function(a){return C.as},
$isai:1}
J.cl.prototype={
B:function(a,b){return null==b},
k:function(a){return"null"},
gw:function(a){return 0},
gC:function(a){return C.am},
$isJ:1}
J.bt.prototype={
gw:function(a){return 0},
gC:function(a){return C.al},
k:function(a){return String(a)},
$iskq:1}
J.fy.prototype={}
J.aJ.prototype={}
J.aB.prototype={
k:function(a){var t=a[$.$get$kc()]
return t==null?this.d4(a):J.bl(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isjh:1}
J.ay.prototype={
l:function(a,b){if(!!a.fixed$length)H.H(P.u("add"))
a.push(b)},
M:function(a,b){var t,s,r,q,p
t=a.length
if(!!a.fixed$length)H.H(P.u("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.aj)(b),++r,t=p){q=b[r]
p=t+1
H.b(t===a.length||H.H(P.ak(a)))
a.push(q)}},
cg:function(a,b){return new H.bu(a,b,[H.a5(a,0),null])},
al:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.e(a[s])
return t.join(b)},
t:function(a,b){return a[b]},
gaZ:function(a){if(a.length>0)return a[0]
throw H.c(H.ch())},
gb_:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.c(H.ch())},
bf:function(a,b,c,d,e){var t,s,r
if(!!a.immutable$list)H.H(P.u("setRange"))
P.ky(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.H(P.aG(e,0,null,"skipCount",null))
s=J.P(d)
if(e+t>s.gj(d))throw H.c(H.mv())
if(e<b)for(r=t-1;r>=0;--r)a[b+r]=s.h(d,e+r)
else for(r=0;r<t;++r)a[b+r]=s.h(d,e+r)},
bR:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.c(P.ak(a))}return!1},
d_:function(a,b){if(!!a.immutable$list)H.H(P.u("sort"))
H.mM(a,P.nh())},
aF:function(a){return this.d_(a,null)},
D:function(a,b){var t
for(t=0;t<a.length;++t)if(J.D(a[t],b))return!0
return!1},
k:function(a){return P.eQ(a,"[","]")},
gA:function(a){return new J.dQ(a,a.length,0,null,[H.a5(a,0)])},
gw:function(a){return H.aF(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.H(P.u("set length"))
if(b<0)throw H.c(P.aG(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.bf(a,b))
if(b>=a.length||b<0)throw H.c(H.bf(a,b))
return a[b]},
i:function(a,b,c){if(!!a.immutable$list)H.H(P.u("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.bf(a,b))
if(b>=a.length||b<0)throw H.c(H.bf(a,b))
a[b]=c},
$isp:1,
$asp:function(){},
$isk:1,
$ish:1}
J.ji.prototype={}
J.dQ.prototype={
gq:function(a){return this.d},
p:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.c(H.aj(t))
r=this.c
if(r>=s){this.sbt(null)
return!1}this.sbt(t[r]);++this.c
return!0},
sbt:function(a){this.d=a}}
J.aY.prototype={
R:function(a,b){var t
if(typeof b!=="number")throw H.c(H.O(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gay(b)
if(this.gay(a)===t)return 0
if(this.gay(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gay:function(a){return a===0?1/a<0:a<0},
ei:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.c(P.u(""+a+".ceil()"))},
a3:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.u(""+a+".round()"))},
ej:function(a,b,c){if(this.R(b,c)>0)throw H.c(H.O(b))
if(this.R(a,b)<0)return b
if(this.R(a,c)>0)return c
return a},
f3:function(a,b){var t
if(b>20)throw H.c(P.aG(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gay(a))return"-"+t
return t},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gw:function(a){return a&0x1FFFFFFF},
a5:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return a+b},
a8:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return a-b},
cJ:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return a/b},
I:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return a*b},
aH:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bN(a,b)},
K:function(a,b){return(a|0)===a?a/b|0:this.bN(a,b)},
bN:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.c(P.u("Result of truncating division is "+H.e(t)+": "+H.e(a)+" ~/ "+b))},
aT:function(a,b){var t
if(a>0)t=this.e2(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
e2:function(a,b){return b>31?0:a>>>b},
cI:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return(a&b)>>>0},
d6:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return(a^b)>>>0},
aE:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return a<b},
aD:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return a>b},
cK:function(a,b){if(typeof b!=="number")throw H.c(H.O(b))
return a>=b},
gC:function(a){return C.av},
$isF:1,
$asF:function(){return[P.a6]},
$isY:1,
$isa6:1}
J.ck.prototype={
gC:function(a){return C.au},
$isz:1}
J.cj.prototype={
gC:function(a){return C.at}}
J.aA.prototype={
aJ:function(a,b){if(b>=a.length)throw H.c(H.bf(a,b))
return a.charCodeAt(b)},
a5:function(a,b){if(typeof b!=="string")throw H.c(P.k2(b,null,null))
return a+b},
d0:function(a,b,c){var t
if(c>a.length)throw H.c(P.aG(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bh:function(a,b){return this.d0(a,b,0)},
bj:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.fD(b,null,null))
if(b>c)throw H.c(P.fD(b,null,null))
if(c>a.length)throw H.c(P.fD(c,null,null))
return a.substring(b,c)},
d1:function(a,b){return this.bj(a,b,null)},
f2:function(a){return a.toLowerCase()},
em:function(a,b,c){if(c>a.length)throw H.c(P.aG(c,0,a.length,null,null))
return H.nD(a,b,c)},
R:function(a,b){var t
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
gC:function(a){return C.an},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.c(H.bf(a,b))
return a[b]},
$isp:1,
$asp:function(){},
$isF:1,
$asF:function(){return[P.n]},
$isn:1}
H.k.prototype={}
H.aZ.prototype={
gA:function(a){return new H.cn(this,this.gj(this),0,null,[H.S(this,"aZ",0)])},
aB:function(a,b){return this.d3(0,b)},
f1:function(a,b){var t,s
t=H.B([],[H.S(this,"aZ",0)])
C.a.sj(t,this.gj(this))
for(s=0;s<this.gj(this);++s)t[s]=this.t(0,s)
return t},
f0:function(a){return this.f1(a,!0)}}
H.cn.prototype={
gq:function(a){return this.d},
p:function(){var t,s,r,q
t=this.a
s=J.P(t)
r=s.gj(t)
if(this.b!==r)throw H.c(P.ak(t))
q=this.c
if(q>=r){this.sac(null)
return!1}this.sac(s.t(t,q));++this.c
return!0},
sac:function(a){this.d=a}}
H.cp.prototype={
gA:function(a){return new H.f4(null,J.aP(this.a),this.b,this.$ti)},
gj:function(a){return J.bk(this.a)},
$asQ:function(a,b){return[b]}}
H.ee.prototype={$isk:1,
$ask:function(a,b){return[b]}}
H.f4.prototype={
p:function(){var t=this.b
if(t.p()){this.sac(this.c.$1(t.gq(t)))
return!0}this.sac(null)
return!1},
gq:function(a){return this.a},
sac:function(a){this.a=a},
$asci:function(a,b){return[b]}}
H.bu.prototype={
gj:function(a){return J.bk(this.a)},
t:function(a,b){return this.b.$1(J.lE(this.a,b))},
$ask:function(a,b){return[b]},
$asaZ:function(a,b){return[b]},
$asQ:function(a,b){return[b]}}
H.cT.prototype={
gA:function(a){return new H.hs(J.aP(this.a),this.b,this.$ti)}}
H.hs.prototype={
p:function(){var t,s
for(t=this.a,s=this.b;t.p();)if(s.$1(t.gq(t)))return!0
return!1},
gq:function(a){var t=this.a
return t.gq(t)}}
H.aX.prototype={}
H.j0.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.j1.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.i6.prototype={
seM:function(a){this.z=a},
seO:function(a){this.ch=a}}
H.b9.prototype={
dA:function(){var t,s
t=this.e
s=t.a
this.c.l(0,s)
this.dF(s,t)},
bQ:function(a,b){if(!this.f.B(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.aW()},
eV:function(a){var t,s,r,q,p
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
if(q===r.c)r.bH();++r.d}this.y=!1}this.aW()},
e7:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.q(a),s=0;r=this.ch,s<r.length;s+=2)if(t.B(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
eU:function(a){var t,s,r
if(this.ch==null)return
for(t=J.q(a),s=0;r=this.ch,s<r.length;s+=2)if(t.B(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.H(P.u("removeRange"))
P.ky(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
cX:function(a,b){if(!this.r.B(0,a))return
this.db=b},
eG:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.J(0,c)
return}H.b(b===1)
t=this.cx
if(t==null){t=P.jp(null,null)
this.cx=t}t.S(0,new H.i0(a,c))},
eF:function(a,b){var t
if(!this.r.B(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.az()
return}H.b(b===1)
t=this.cx
if(t==null){t=P.jp(null,null)
this.cx=t}t.S(0,this.geN())},
eH:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.U(a)
if(b!=null)P.U(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.bl(a)
s[1]=b==null?null:b.k(0)
for(r=new P.bJ(t,t.r,null,null,[null]),r.c=t.e;r.p();)r.d.J(0,s)},
ah:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.I(o)
p=H.a4(o)
this.eH(q,p)
if(this.db){this.az()
if(this===u.globalState.e)throw o}}finally{this.cy=H.nd(r)
u.globalState.d=H.jL(t,"$isb9")
if(t!=null)$=t.geL()
if(this.cx!=null)for(;n=this.cx,!n.gak(n);)this.cx.cj().$0()}return s},
cf:function(a){return this.b.h(0,a)},
dF:function(a,b){var t=this.b
if(t.G(0,a))throw H.c(P.cc("Registry: ports must be registered only once."))
t.i(0,a,b)},
aW:function(){var t=this.b
if(t.gj(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.az()},
az:function(){var t,s,r
t=this.cx
if(t!=null)t.U(0)
for(t=this.b,s=t.gcE(t),s=s.gA(s);s.p();)s.gq(s).dH()
t.U(0)
this.c.U(0)
u.globalState.z.am(0,this.a)
this.dx.U(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].J(0,t[r+1])
this.ch=null}},
geL:function(){return this.d},
gen:function(){return this.e}}
H.i0.prototype={
$0:function(){this.a.J(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.hG.prototype={
ev:function(){var t=this.a
if(t.b===t.c)return
return t.cj()},
cm:function(){var t,s,r
t=this.ev()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.G(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gak(s)}else s=!1
else s=!1
else s=!1
if(s)H.H(P.cc("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gak(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.am(["command","close"])
r=new H.a3(!0,P.ba(null,P.z)).L(r)
s.toString
self.postMessage(r)}return!1}t.eR()
return!0},
bL:function(){if(self.window!=null)new H.hH(this).$0()
else for(;this.cm(););},
an:function(){var t,s,r,q,p
if(!u.globalState.x)this.bL()
else try{this.bL()}catch(r){t=H.I(r)
s=H.a4(r)
q=u.globalState.Q
p=P.am(["command","error","msg",H.e(t)+"\n"+H.e(s)])
p=new H.a3(!0,P.ba(null,P.z)).L(p)
q.toString
self.postMessage(p)}}}
H.hH.prototype={
$0:function(){if(!this.a.cm())return
P.mP(C.v,this)},
$S:function(){return{func:1,v:true}}}
H.aM.prototype={
eR:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.ah(this.b)}}
H.i5.prototype={}
H.eO.prototype={
$0:function(){H.mr(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.eP.prototype={
$0:function(){var t,s
t=this.a
t.x=!0
if(!this.b)this.c.$1(this.d)
else{s=this.c
if(H.bg(s,{func:1,args:[P.J,P.J]}))s.$2(this.e,this.d)
else if(H.bg(s,{func:1,args:[P.J]}))s.$1(this.e)
else s.$0()}t.aW()},
$S:function(){return{func:1,v:true}}}
H.hA.prototype={}
H.bb.prototype={
J:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.n1(b)
if(t.gen()===s){s=J.P(r)
switch(s.h(r,0)){case"pause":t.bQ(s.h(r,1),s.h(r,2))
break
case"resume":t.eV(s.h(r,1))
break
case"add-ondone":t.e7(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.eU(s.h(r,1))
break
case"set-errors-fatal":t.cX(s.h(r,1),s.h(r,2))
break
case"ping":t.eG(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.eF(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.am(0,s)
break}return}u.globalState.f.a.S(0,new H.aM(t,new H.i7(this,r),"receive"))},
B:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bb){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gw:function(a){return this.b.a}}
H.i7.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dD(0,this.b)},
$S:function(){return{func:1}}}
H.bU.prototype={
J:function(a,b){var t,s,r
t=P.am(["command","message","port",this,"msg",b])
s=new H.a3(!0,P.ba(null,P.z)).L(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
B:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bU){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gw:function(a){return C.b.d6((this.b<<16^this.a<<8)>>>0,this.c)}}
H.cD.prototype={
dH:function(){this.c=!0
this.b=null},
dD:function(a,b){if(this.c)return
this.b.$1(b)},
$ismG:1}
H.ha.prototype={
dq:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.S(0,new H.aM(s,new H.hb(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){H.iB()
this.c=self.setTimeout(H.ar(new H.hc(this,b),0),a)}else{H.b(a>0)
throw H.c(P.u("Timer greater than 0."))}}}
H.hb.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.hc.prototype={
$0:function(){var t=this.a
t.c=null
H.iQ()
t.d=1
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.au.prototype={
gw:function(a){var t=this.a
t=C.b.aT(t,0)^C.b.K(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
B:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.au){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.a3.prototype={
L:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gj(t))
t=J.q(a)
if(!!t.$isb1)return["buffer",a]
if(!!t.$isaE)return["typed",a]
if(!!t.$isp)return this.cT(a)
if(!!t.$ismo){r=this.gcQ()
q=t.gE(a)
q=H.jq(q,r,H.S(q,"Q",0),null)
q=P.ks(q,!0,H.S(q,"Q",0))
t=t.gcE(a)
t=H.jq(t,r,H.S(t,"Q",0),null)
return["map",q,P.ks(t,!0,H.S(t,"Q",0))]}if(!!t.$iskq)return this.cU(a)
if(!!t.$isa)this.cC(a)
if(!!t.$ismG)this.ap(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isbb)return this.cV(a)
if(!!t.$isbU)return this.cW(a)
if(!!t.$isaw){p=a.$static_name
if(p==null)this.ap(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isau)return["capability",a.a]
if(!(a instanceof P.C))this.cC(a)
return["dart",u.classIdExtractor(a),this.cS(u.classFieldsExtractor(a))]},
ap:function(a,b){throw H.c(P.u((b==null?"Can't transmit:":b)+" "+H.e(a)))},
cC:function(a){return this.ap(a,null)},
cT:function(a){var t
H.b(typeof a!=="string")
t=this.cR(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.ap(a,"Can't serialize indexable: ")},
cR:function(a){var t,s
t=[]
C.a.sj(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.L(a[s])
return t},
cS:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.L(a[t]))
return a},
cU:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.ap(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sj(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.L(a[t[r]])
return["js-object",t,s]},
cW:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cV:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.aL.prototype={
V:function(a){var t,s,r,q
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.c(P.dP("Bad serialized message: "+H.e(a)))
switch(C.a.gaZ(a)){case"ref":H.b(J.D(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.b(J.D(a[0],"buffer"))
t=a[1]
C.a.l(this.b,t)
return t
case"typed":H.b(J.D(a[0],"typed"))
t=a[1]
C.a.l(this.b,t)
return t
case"fixed":H.b(J.D(a[0],"fixed"))
t=a[1]
C.a.l(this.b,t)
return J.az(H.B(this.ag(t),[null]))
case"extendable":H.b(J.D(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.B(this.ag(t),[null])
case"mutable":H.b(J.D(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.ag(t)
case"const":H.b(J.D(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
return J.az(H.B(this.ag(t),[null]))
case"map":return this.ey(a)
case"sendport":return this.ez(a)
case"raw sendport":H.b(J.D(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.ex(a)
case"function":H.b(J.D(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.b(J.D(a[0],"capability"))
return new H.au(a[1])
case"dart":H.b(J.D(a[0],"dart"))
s=a[1]
r=a[2]
q=u.instanceFromClassId(s)
C.a.l(this.b,q)
this.ag(r)
return u.initializeEmptyInstance(s,q,r)
default:throw H.c("couldn't deserialize: "+H.e(a))}},
ag:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.V(a[t]))
return a},
ey:function(a){var t,s,r,q,p
H.b(J.D(a[0],"map"))
t=a[1]
s=a[2]
r=P.a1()
C.a.l(this.b,r)
t=J.lR(t,this.gew()).f0(0)
for(q=J.P(s),p=0;p<t.length;++p)r.i(0,t[p],this.V(q.h(s,p)))
return r},
ez:function(a){var t,s,r,q,p,o,n
H.b(J.D(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.cf(r)
if(o==null)return
n=new H.bb(o,s)}else n=new H.bU(t,r,s)
C.a.l(this.b,n)
return n},
ex:function(a){var t,s,r,q,p,o
H.b(J.D(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.P(t),p=J.P(s),o=0;o<q.gj(t);++o)r[q.h(t,o)]=this.V(p.h(s,o))
return r}}
H.fG.prototype={}
H.hg.prototype={
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
H.fo.prototype={
k:function(a){var t=this.b
if(t==null)return"NullError: "+H.e(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.eT.prototype={
k:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.e(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.e(this.a)+")"}}
H.hl.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.j2.prototype={
$1:function(a){if(!!J.q(a).$isaW)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(a){return{func:1,args:[,]}}}
H.dj.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t},
$isb3:1}
H.iL.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.iM.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.iN.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.iO.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.iP.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.aw.prototype={
k:function(a){return"Closure '"+H.bz(this).trim()+"'"},
$isjh:1,
gf7:function(){return this},
$D:null}
H.h6.prototype={}
H.fT.prototype={
k:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bm.prototype={
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bm))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gw:function(a){var t,s
t=this.c
if(t==null)s=H.aF(this.a)
else s=typeof t!=="object"?J.bj(t):H.aF(t)
return(s^H.aF(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.bz(t)+"'")}}
H.hi.prototype={
k:function(a){return this.a}}
H.dV.prototype={
k:function(a){return this.a}}
H.fK.prototype={
k:function(a){return"RuntimeError: "+H.e(this.a)}}
H.hu.prototype={
k:function(a){return C.i.a5("Assertion failed: ",P.cb(this.a))}}
H.ao.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gw:function(a){return J.bj(this.a)},
B:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.ao){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.aa.prototype={
gj:function(a){return this.a},
gak:function(a){return this.a===0},
gE:function(a){return new H.eW(this,[H.a5(this,0)])},
gcE:function(a){return H.jq(this.gE(this),new H.eS(this),H.a5(this,0),H.a5(this,1))},
G:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bE(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bE(s,b)}else return this.eI(b)},
eI:function(a){var t=this.d
if(t==null)return!1
return this.aj(this.av(t,this.ai(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.ad(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.ad(r,b)
return s==null?null:s.b}else return this.eJ(b)},
eJ:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.av(t,this.ai(a))
r=this.aj(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aQ()
this.b=t}this.bv(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aQ()
this.c=s}this.bv(s,b,c)}else{r=this.d
if(r==null){r=this.aQ()
this.d=r}q=this.ai(b)
p=this.av(r,q)
if(p==null)this.aS(r,q,[this.aR(b,c)])
else{o=this.aj(p,b)
if(o>=0)p[o].b=c
else p.push(this.aR(b,c))}}},
am:function(a,b){if(typeof b==="string")return this.bK(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bK(this.c,b)
else return this.eK(b)},
eK:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.av(t,this.ai(a))
r=this.aj(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bO(q)
return q.b},
U:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aP()}},
a1:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.c(P.ak(this))
t=t.c}},
bv:function(a,b,c){var t=this.ad(a,b)
if(t==null)this.aS(a,b,this.aR(b,c))
else t.b=c},
bK:function(a,b){var t
if(a==null)return
t=this.ad(a,b)
if(t==null)return
this.bO(t)
this.bF(a,b)
return t.b},
aP:function(){this.r=this.r+1&67108863},
aR:function(a,b){var t,s
t=new H.eV(a,b,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.aP()
return t},
bO:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.aP()},
ai:function(a){return J.bj(a)&0x3ffffff},
aj:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.D(a[s].a,b))return s
return-1},
k:function(a){return P.kt(this)},
ad:function(a,b){return a[b]},
av:function(a,b){return a[b]},
aS:function(a,b,c){H.b(c!=null)
a[b]=c},
bF:function(a,b){delete a[b]},
bE:function(a,b){return this.ad(a,b)!=null},
aQ:function(){var t=Object.create(null)
this.aS(t,"<non-identifier-key>",t)
this.bF(t,"<non-identifier-key>")
return t},
$ismo:1}
H.eS.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(a){return{func:1,args:[,]}}}
H.eV.prototype={}
H.eW.prototype={
gj:function(a){return this.a.a},
gA:function(a){var t,s
t=this.a
s=new H.eX(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.eX.prototype={
gq:function(a){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.ak(t))
else{t=this.c
if(t==null){this.sbu(null)
return!1}else{this.sbu(t.a)
this.c=this.c.c
return!0}}},
sbu:function(a){this.d=a}}
H.iH.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[,]}}}
H.iI.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(a,b){return{func:1,args:[,P.n]}}}
H.iJ.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[P.n]}}}
H.b1.prototype={
gC:function(a){return C.ae},
$isb1:1}
H.aE.prototype={$isaE:1}
H.fc.prototype={
gC:function(a){return C.af}}
H.cs.prototype={
gj:function(a){return a.length},
$isp:1,
$asp:function(){},
$ist:1,
$ast:function(){}}
H.ct.prototype={
h:function(a,b){H.ag(b,a,a.length)
return a[b]},
i:function(a,b,c){H.ag(b,a,a.length)
a[b]=c},
$isk:1,
$ask:function(){return[P.Y]},
$asaX:function(){return[P.Y]},
$asl:function(){return[P.Y]},
$ish:1,
$ash:function(){return[P.Y]}}
H.cu.prototype={
i:function(a,b,c){H.ag(b,a,a.length)
a[b]=c},
$isk:1,
$ask:function(){return[P.z]},
$asaX:function(){return[P.z]},
$asl:function(){return[P.z]},
$ish:1,
$ash:function(){return[P.z]}}
H.cr.prototype={
gC:function(a){return C.ag},
$iseC:1}
H.fd.prototype={
gC:function(a){return C.ah}}
H.fe.prototype={
gC:function(a){return C.ai},
h:function(a,b){H.ag(b,a,a.length)
return a[b]}}
H.ff.prototype={
gC:function(a){return C.aj},
h:function(a,b){H.ag(b,a,a.length)
return a[b]},
$iskn:1}
H.fg.prototype={
gC:function(a){return C.ak},
h:function(a,b){H.ag(b,a,a.length)
return a[b]}}
H.fh.prototype={
gC:function(a){return C.ao},
h:function(a,b){H.ag(b,a,a.length)
return a[b]},
$iskO:1}
H.fi.prototype={
gC:function(a){return C.ap},
h:function(a,b){H.ag(b,a,a.length)
return a[b]},
$iskP:1}
H.cv.prototype={
gC:function(a){return C.aq},
gj:function(a){return a.length},
h:function(a,b){H.ag(b,a,a.length)
return a[b]}}
H.fj.prototype={
gC:function(a){return C.ar},
gj:function(a){return a.length},
h:function(a,b){H.ag(b,a,a.length)
return a[b]},
$iskQ:1}
H.bL.prototype={}
H.bM.prototype={}
H.bN.prototype={}
H.bO.prototype={}
P.hw.prototype={
$1:function(a){var t,s
H.iQ()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(a){return{func:1,args:[,]}}}
P.hv.prototype={
$1:function(a){var t,s
t=this.a
H.b(t.a==null)
H.iB()
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(a){return{func:1,args:[{func:1,v:true}]}}}
P.hx.prototype={
$0:function(){H.iQ()
this.a.$0()},
$S:function(){return{func:1}}}
P.hy.prototype={
$0:function(){H.iQ()
this.a.$0()},
$S:function(){return{func:1}}}
P.W.prototype={}
P.eG.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.c)this.d.H(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.c)this.d.H(t.c,t.d)},
$S:function(a,b){return{func:1,args:[,,]}}}
P.eF.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){r[this.b]=a
if(s===0)this.c.bD(r)}else if(t.b===0&&!this.e)this.c.H(t.c,t.d)},
$S:function(a){return{func:1,args:[,]}}}
P.je.prototype={}
P.hB.prototype={
el:function(a,b){if(a==null)a=new P.b2()
if(this.a.a!==0)throw H.c(P.cJ("Future already completed"))
$.v.toString
this.H(a,b)},
ek:function(a){return this.el(a,null)}}
P.cV.prototype={
af:function(a,b){var t=this.a
if(t.a!==0)throw H.c(P.cJ("Future already completed"))
t.bw(b)},
H:function(a,b){this.a.bx(a,b)}}
P.io.prototype={
af:function(a,b){var t=this.a
if(t.a!==0)throw H.c(P.cJ("Future already completed"))
t.ab(b)},
H:function(a,b){this.a.H(a,b)}}
P.b7.prototype={
eP:function(a){if(this.c!==6)return!0
H.b(!0)
return this.b.b.b4(this.d,a.a)},
eE:function(a){var t,s
t=(this.c&2)!==0
if(t){H.b(t)
t=this.e!=null}else t=!1
H.b(t)
s=this.e
t=this.b.b
if(H.bg(s,{func:1,args:[P.C,P.b3]}))return t.eX(s,a.a,a.b)
else return t.b4(s,a.a)}}
P.E.prototype={
b6:function(a,b){var t,s,r
t=$.v
if(t!==C.d){t.toString
if(b!=null)b=P.kZ(b,t)}s=new P.E(0,t,null,[null])
r=b==null?1:3
this.as(new P.b7(null,s,r,a,b,[H.a5(this,0),null]))
return s},
ao:function(a){return this.b6(a,null)},
f6:function(a){var t,s
t=$.v
s=new P.E(0,t,null,this.$ti)
if(t!==C.d)t.toString
t=H.a5(this,0)
this.as(new P.b7(null,s,8,a,null,[t,t]))
return s},
aI:function(a){H.b(this.a<4)
H.b(a.a>=4)
this.a=a.a
this.c=a.c},
as:function(a){var t
H.b(a.a==null)
t=this.a
if(t<=1){a.a=H.jL(this.c,"$isb7")
this.c=a}else{if(t===2){H.b(!0)
t=this.c
if(t.a<4){t.as(a)
return}this.aI(t)}H.b(this.a>=4)
t=this.b
t.toString
P.bd(null,null,t,new P.hM(this,a))}},
bJ:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.b(!0)
s=this.c
if(s.a<4){s.bJ(a)
return}this.aI(s)}H.b(this.a>=4)
t.a=this.ax(a)
s=this.b
s.toString
P.bd(null,null,s,new P.hU(t,this))}},
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
s=H.bY(a,"$isW",t,"$asW")
if(s){t=H.bY(a,"$isE",t,null)
if(t)P.hP(a,this)
else P.kT(a,this)}else{r=this.aw()
H.b(this.a<4)
this.a=4
this.c=a
P.b8(this,r)}},
bD:function(a){var t
H.b(this.a<4)
H.b(!J.q(a).$isW)
t=this.aw()
H.b(this.a<4)
this.a=4
this.c=a
P.b8(this,t)},
H:function(a,b){var t
H.b(this.a<4)
t=this.aw()
H.b(this.a<4)
this.a=8
this.c=new P.aQ(a,b)
P.b8(this,t)},
dI:function(a){return this.H(a,null)},
bw:function(a){var t
H.b(this.a<4)
t=H.bY(a,"$isW",this.$ti,"$asW")
if(t){this.dG(a)
return}H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.bd(null,null,t,new P.hO(this,a))},
dG:function(a){var t=H.bY(a,"$isE",this.$ti,null)
if(t){if(a.a===8){H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.bd(null,null,t,new P.hT(this,a))}else P.hP(a,this)
return}P.kT(a,this)},
bx:function(a,b){var t
H.b(this.a<4)
H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.bd(null,null,t,new P.hN(this,a,b))},
$isW:1,
gaU:function(){return this.a},
ge_:function(){return this.c}}
P.hM.prototype={
$0:function(){P.b8(this.a,this.b)},
$S:function(){return{func:1}}}
P.hU.prototype={
$0:function(){P.b8(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.hQ.prototype={
$1:function(a){var t=this.a
H.b(t.a===1)
H.b(t.a===1)
t.a=0
t.ab(a)},
$S:function(a){return{func:1,args:[,]}}}
P.hR.prototype={
$2:function(a,b){var t=this.a
H.b(t.a===1)
t.H(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(a,b){return{func:1,args:[,],opt:[,]}}}
P.hS.prototype={
$0:function(){this.a.H(this.b,this.c)},
$S:function(){return{func:1}}}
P.hO.prototype={
$0:function(){this.a.bD(this.b)},
$S:function(){return{func:1}}}
P.hT.prototype={
$0:function(){P.hP(this.b,this.a)},
$S:function(){return{func:1}}}
P.hN.prototype={
$0:function(){this.a.H(this.b,this.c)},
$S:function(){return{func:1}}}
P.hX.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.c
p=q.c
H.b((p&1)===0)
o=(p&2)===0
H.b(o)
t=null
try{H.b(o)
H.b(p===8)
t=q.b.b.cl(q.d)}catch(n){s=H.I(n)
r=H.a4(n)
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
return}if(!!J.q(t).$isW){if(t instanceof P.E&&t.gaU()>=4){if(t.gaU()===8){q=t
H.b(q.gaU()===8)
p=this.b
p.b=q.ge_()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.ao(new P.hY(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.hY.prototype={
$1:function(a){return this.a},
$S:function(a){return{func:1,args:[,]}}}
P.hW.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.b((r.c&1)!==0)
this.a.b=r.b.b.b4(r.d,this.c)}catch(q){t=H.I(q)
s=H.a4(q)
r=this.a
r.b=new P.aQ(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.hV.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.b(q.a===8)
t=q.c
q=this.c
if(q.eP(t)){H.b((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.eE(t)
p.a=!1}}catch(o){s=H.I(o)
r=H.a4(o)
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
P.cU.prototype={}
P.bB.prototype={
gj:function(a){var t,s
t={}
s=new P.E(0,$.v,null,[P.z])
t.a=0
this.ce(new P.h0(t),!0,new P.h1(t,s),s.gbC())
return s},
gaZ:function(a){var t,s
t={}
s=new P.E(0,$.v,null,[H.S(this,"bB",0)])
t.a=null
t.a=this.ce(new P.fZ(t,this,s),!0,new P.h_(s),s.gbC())
return s}}
P.h0.prototype={
$1:function(a){++this.a.a},
$S:function(a){return{func:1,args:[,]}}}
P.h1.prototype={
$0:function(){this.b.ab(this.a.a)},
$S:function(){return{func:1}}}
P.fZ.prototype={
$1:function(a){P.n0(this.a.a,this.c,a)},
$S:function(a){return{func:1,args:[H.S(this.b,"bB",0)]}}}
P.h_.prototype={
$0:function(){var t,s,r,q
try{r=H.ch()
throw H.c(r)}catch(q){t=H.I(q)
s=H.a4(q)
P.n2(this.a,t,s)}},
$S:function(){return{func:1}}}
P.fY.prototype={}
P.it.prototype={
$0:function(){return this.a.ab(this.b)},
$S:function(){return{func:1}}}
P.jt.prototype={}
P.aQ.prototype={
k:function(a){return H.e(this.a)},
$isaW:1}
P.is.prototype={}
P.iw.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.b2()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.c(t)
r=H.c(t)
r.stack=s.k(0)
throw r},
$S:function(){return{func:1}}}
P.i9.prototype={
eY:function(a){var t,s,r
try{if(C.d===$.v){a.$0()
return}P.l_(null,null,this,a)}catch(r){t=H.I(r)
s=H.a4(r)
P.iv(null,null,this,t,s)}},
eZ:function(a,b){var t,s,r
try{if(C.d===$.v){a.$1(b)
return}P.l0(null,null,this,a,b)}catch(r){t=H.I(r)
s=H.a4(r)
P.iv(null,null,this,t,s)}},
ee:function(a){return new P.ib(this,a)},
aX:function(a){return new P.ia(this,a)},
ef:function(a){return new P.ic(this,a)},
h:function(a,b){return},
cl:function(a){if($.v===C.d)return a.$0()
return P.l_(null,null,this,a)},
b4:function(a,b){if($.v===C.d)return a.$1(b)
return P.l0(null,null,this,a,b)},
eX:function(a,b,c){if($.v===C.d)return a.$2(b,c)
return P.n6(null,null,this,a,b,c)}}
P.ib.prototype={
$0:function(){return this.a.cl(this.b)},
$S:function(){return{func:1}}}
P.ia.prototype={
$0:function(){return this.a.eY(this.b)},
$S:function(){return{func:1}}}
P.ic.prototype={
$1:function(a){return this.a.eZ(this.b,a)},
$S:function(a){return{func:1,args:[,]}}}
P.i3.prototype={
ai:function(a){return H.nx(a)&0x3ffffff},
aj:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.i1.prototype={
gA:function(a){var t=new P.bJ(this,this.r,null,null,[null])
t.c=this.e
return t},
gj:function(a){return this.a},
D:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dJ(b)},
dJ:function(a){var t=this.d
if(t==null)return!1
return this.au(t[this.at(a)],a)>=0},
cf:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.D(0,a)?a:null
else return this.dS(a)},
dS:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.at(a)]
r=this.au(s,a)
if(r<0)return
return J.aO(s,r).gdL()},
l:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.jD()
this.b=t}return this.bz(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.jD()
this.c=s}return this.bz(s,b)}else return this.S(0,b)},
S:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.jD()
this.d=t}s=this.at(b)
r=t[s]
if(r==null){q=[this.aL(b)]
H.b(q!=null)
t[s]=q}else{if(this.au(r,b)>=0)return!1
r.push(this.aL(b))}return!0},
am:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bA(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bA(this.c,b)
else return this.dU(0,b)},
dU:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.at(b)]
r=this.au(s,b)
if(r<0)return!1
this.bB(s.splice(r,1)[0])
return!0},
U:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aK()}},
bz:function(a,b){var t
if(a[b]!=null)return!1
t=this.aL(b)
H.b(!0)
a[b]=t
return!0},
bA:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bB(t)
delete a[b]
return!0},
aK:function(){this.r=this.r+1&67108863},
aL:function(a){var t,s
t=new P.i2(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.aK()
return t},
bB:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.aK()},
at:function(a){return J.bj(a)&0x3ffffff},
au:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.D(a[s].a,b))return s
return-1}}
P.i2.prototype={
gdL:function(){return this.a}}
P.bJ.prototype={
gq:function(a){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.ak(t))
else{t=this.c
if(t==null){this.saa(null)
return!1}else{this.saa(t.a)
this.c=this.c.b
return!0}}},
saa:function(a){this.d=a}}
P.i_.prototype={}
P.jn.prototype={$isk:1}
P.cm.prototype={$isk:1,$ish:1}
P.l.prototype={
gA:function(a){return new H.cn(a,this.gj(a),0,null,[H.S(a,"l",0)])},
t:function(a,b){return this.h(a,b)},
cg:function(a,b){return new H.bu(a,b,[H.S(a,"l",0),null])},
eD:function(a,b,c){var t,s,r
t=this.gj(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gj(a))throw H.c(P.ak(a))}return s},
k:function(a){return P.eQ(a,"[","]")}}
P.co.prototype={}
P.f3.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.e(a)
t.a=s+": "
t.a+=H.e(b)},
$S:function(a,b){return{func:1,args:[,,]}}}
P.b_.prototype={
a1:function(a,b){var t,s
for(t=J.aP(this.gE(a));t.p();){s=t.gq(t)
b.$2(s,this.h(a,s))}},
gj:function(a){return J.bk(this.gE(a))},
k:function(a){return P.kt(a)},
$isX:1}
P.eY.prototype={
dj:function(a,b){var t
H.b(!0)
t=new Array(8)
t.fixed$length=Array
this.sbM(H.B(t,[b]))},
gA:function(a){return new P.i4(this,this.c,this.d,this.b,null,this.$ti)},
gak:function(a){return this.b===this.c},
gj:function(a){return(this.c-this.b&this.a.length-1)>>>0},
t:function(a,b){var t,s
t=this.gj(this)
if(0>b||b>=t)H.H(P.A(b,this,"index",null,t))
s=this.a
return s[(this.b+b&s.length-1)>>>0]},
U:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
k:function(a){return P.eQ(this,"{","}")},
cj:function(){var t,s,r
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
if(this.b===t)this.bH();++this.d},
bH:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.B(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.bf(s,0,q,t,r)
C.a.bf(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbM(s)},
sbM:function(a){this.a=a}}
P.i4.prototype={
gq:function(a){return this.e},
p:function(){var t,s
t=this.a
if(this.c!==t.d)H.H(P.ak(t))
s=this.d
if(s===this.b){this.saa(null)
return!1}this.saa(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
saa:function(a){this.e=a}}
P.fN.prototype={
M:function(a,b){var t
for(t=J.aP(b);t.p();)this.l(0,t.gq(t))},
k:function(a){return P.eQ(this,"{","}")},
$isk:1}
P.fM.prototype={}
P.bK.prototype={}
P.ai.prototype={}
P.F.prototype={}
P.aV.prototype={
B:function(a,b){if(b==null)return!1
if(!(b instanceof P.aV))return!1
return this.a===b.a&&this.b===b.b},
R:function(a,b){return C.b.R(this.a,b.a)},
gw:function(a){var t=this.a
return(t^C.b.aT(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.mc(H.mF(this))
s=P.c5(H.mD(this))
r=P.c5(H.mz(this))
q=P.c5(H.mA(this))
p=P.c5(H.mC(this))
o=P.c5(H.mE(this))
n=P.md(H.mB(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isF:1,
$asF:function(){return[P.aV]}}
P.Y.prototype={}
P.ax.prototype={
aE:function(a,b){return C.b.aE(this.a,b.gdK())},
aD:function(a,b){return C.b.aD(this.a,b.gdK())},
B:function(a,b){if(b==null)return!1
if(!(b instanceof P.ax))return!1
return this.a===b.a},
gw:function(a){return this.a&0x1FFFFFFF},
R:function(a,b){return C.b.R(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.ed()
s=this.a
if(s<0)return"-"+new P.ax(0-s).k(0)
r=t.$1(C.b.K(s,6e7)%60)
q=t.$1(C.b.K(s,1e6)%60)
p=new P.ec().$1(s%1e6)
return""+C.b.K(s,36e8)+":"+H.e(r)+":"+H.e(q)+"."+H.e(p)},
$isF:1,
$asF:function(){return[P.ax]}}
P.ec.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(a){return{func:1,ret:P.n,args:[P.z]}}}
P.ed.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(a){return{func:1,ret:P.n,args:[P.z]}}}
P.aW.prototype={}
P.c2.prototype={
k:function(a){return"Assertion failed"}}
P.b2.prototype={
k:function(a){return"Throw of null."}}
P.a8.prototype={
gaN:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaM:function(){return""},
k:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+t
q=this.gaN()+s+r
if(!this.a)return q
p=this.gaM()
o=P.cb(this.b)
return q+p+": "+H.e(o)}}
P.cC.prototype={
gaN:function(){return"RangeError"},
gaM:function(){var t,s,r
H.b(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.e(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.e(t)
else if(r>t)s=": Not in range "+H.e(t)+".."+H.e(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.e(t)}return s}}
P.eN.prototype={
gaN:function(){return"RangeError"},
gaM:function(){H.b(this.a)
if(J.ln(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.e(t)},
gj:function(a){return this.f}}
P.hm.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.hk.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.b4.prototype={
k:function(a){return"Bad state: "+this.a}}
P.dX.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.e(P.cb(t))+"."}}
P.cI.prototype={
k:function(a){return"Stack Overflow"},
$isaW:1}
P.e5.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.jg.prototype={}
P.hL.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.e(t)}}
P.eg.prototype={
h:function(a,b){var t,s
t=this.a
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.H(P.k2(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.kv(b,"expando$values")
return s==null?null:H.kv(s,t)},
k:function(a){return"Expando:"+H.e(this.b)}}
P.z.prototype={}
P.Q.prototype={
aB:function(a,b){return new H.cT(this,b,[H.S(this,"Q",0)])},
gj:function(a){var t,s
H.b(!this.$isk)
t=this.gA(this)
for(s=0;t.p();)++s
return s},
gZ:function(a){var t,s
t=this.gA(this)
if(!t.p())throw H.c(H.ch())
s=t.gq(t)
if(t.p())throw H.c(H.mw())
return s},
t:function(a,b){var t,s,r
if(b<0)H.H(P.aG(b,0,null,"index",null))
for(t=this.gA(this),s=0;t.p();){r=t.gq(t)
if(b===s)return r;++s}throw H.c(P.A(b,this,"index",null,s))},
k:function(a){return P.mu(this,"(",")")}}
P.ci.prototype={}
P.h.prototype={$isk:1}
P.X.prototype={}
P.J.prototype={
gw:function(a){return P.C.prototype.gw.call(this,this)},
k:function(a){return"null"}}
P.a6.prototype={$isF:1,
$asF:function(){return[P.a6]}}
P.C.prototype={constructor:P.C,$isC:1,
B:function(a,b){return this===b},
gw:function(a){return H.aF(this)},
k:function(a){return"Instance of '"+H.bz(this)+"'"},
gC:function(a){return new H.ao(H.iE(this),null)},
toString:function(){return this.k(this)}}
P.b3.prototype={}
P.n.prototype={$isF:1,
$asF:function(){return[P.n]}}
P.bC.prototype={
gj:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga_:function(){return this.a}}
P.jw.prototype={}
W.j.prototype={}
W.c1.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
W.dM.prototype={
gj:function(a){return a.length}}
W.dN.prototype={
k:function(a){return String(a)}}
W.dO.prototype={
k:function(a){return String(a)}}
W.aS.prototype={$isaS:1}
W.at.prototype={$isat:1}
W.c3.prototype={
cL:function(a,b,c){var t=this.dN(a,b,P.ng(c,null))
return t},
dN:function(a,b,c){return a.getContext(b,c)}}
W.dU.prototype={
aC:function(a){return P.iy(a.getContextAttributes())}}
W.av.prototype={
gj:function(a){return a.length}}
W.dY.prototype={
gj:function(a){return a.length}}
W.dZ.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.e_.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
W.e0.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
W.aT.prototype={
by:function(a,b){var t,s
t=$.$get$kb()
s=t[b]
if(typeof s==="string")return s
s=this.e3(a,b)
t[b]=s
return s},
e3:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.me()+b
if(t in a)return t
return b},
gj:function(a){return a.length}}
W.e1.prototype={}
W.Z.prototype={}
W.aU.prototype={}
W.e2.prototype={
gj:function(a){return a.length}}
W.e3.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
W.e4.prototype={
gj:function(a){return a.length}}
W.e6.prototype={
h:function(a,b){return a[b]},
gj:function(a){return a.length}}
W.e7.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
W.c6.prototype={}
W.bn.prototype={
e8:function(a,b){return a.adoptNode(b)},
cM:function(a,b){return a.getElementById(b)},
eS:function(a,b){return a.querySelector(b)}}
W.e8.prototype={
k:function(a){return String(a)}}
W.c7.prototype={
er:function(a,b){return a.createHTMLDocument(b)}}
W.e9.prototype={
gaA:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
W.c8.prototype={
gaA:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
W.c9.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isp:1,
$asp:function(){return[P.R]},
$isk:1,
$ask:function(){return[P.R]},
$ist:1,
$ast:function(){return[P.R]},
$asl:function(){return[P.R]},
$ish:1,
$ash:function(){return[P.R]},
$asm:function(){return[P.R]}}
W.ca.prototype={
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.ga4(a))+" x "+H.e(this.ga2(a))},
B:function(a,b){var t
if(b==null)return!1
t=J.q(b)
if(!t.$isR)return!1
return a.left===t.gcc(b)&&a.top===t.gcq(b)&&this.ga4(a)===t.ga4(b)&&this.ga2(a)===t.ga2(b)},
gw:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.ga4(a)
q=this.ga2(a)
return W.kX(W.aN(W.aN(W.aN(W.aN(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga2:function(a){return a.height},
gcc:function(a){return a.left},
gcq:function(a){return a.top},
ga4:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isR:1,
$asR:function(){}}
W.ea.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isp:1,
$asp:function(){return[P.n]},
$isk:1,
$ask:function(){return[P.n]},
$ist:1,
$ast:function(){return[P.n]},
$asl:function(){return[P.n]},
$ish:1,
$ash:function(){return[P.n]},
$asm:function(){return[P.n]}}
W.eb.prototype={
gj:function(a){return a.length}}
W.a_.prototype={
gec:function(a){return new W.hE(a)},
k:function(a){return a.localName},
N:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.kj
if(t==null){t=H.B([],[W.cy])
s=new W.cz(t)
C.a.l(t,W.kU(null))
C.a.l(t,W.kY())
$.kj=s
d=s}else d=t
t=$.ki
if(t==null){t=new W.du(d)
$.ki=t
c=t}else{t.a=d
c=t}}if($.al==null){t=document
s=t.implementation
s=(s&&C.K).er(s,"")
$.al=s
$.jf=s.createRange()
s=$.al
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.al.head;(t&&C.L).P(t,r)}t=$.al
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.jL(s,"$isat")}t=$.al
if(!!this.$isat)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.al.body;(t&&C.n).P(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.D(C.W,a.tagName)){t=$.jf;(t&&C.C).cP(t,q)
t=$.jf
p=(t&&C.C).ep(t,b)}else{q.innerHTML=b
p=$.al.createDocumentFragment()
for(t=J.i(p);s=q.firstChild,s!=null;)t.P(p,s)}t=$.al.body
if(q==null?t!=null:q!==t)J.jX(q)
c.be(p)
C.p.e8(document,p)
return p},
eq:function(a,b,c){return this.N(a,b,c,null)},
cZ:function(a,b,c,d){a.textContent=null
this.P(a,this.N(a,b,c,d))},
cY:function(a,b){return this.cZ(a,b,null,null)},
a6:function(a,b){return a.getAttribute(b)},
dV:function(a,b){return a.removeAttribute(b)},
$isa_:1,
gf_:function(a){return a.tagName}}
W.ef.prototype={
$1:function(a){return!!J.q(a).$isa_},
$S:function(a){return{func:1,args:[,]}}}
W.f.prototype={$isf:1}
W.d.prototype={
dE:function(a,b,c,d){return a.addEventListener(b,H.ar(c,1),!1)},
dX:function(a,b,c,d){return a.removeEventListener(b,H.ar(c,1),!1)}}
W.V.prototype={$isV:1}
W.bp.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isp:1,
$asp:function(){return[W.V]},
$isk:1,
$ask:function(){return[W.V]},
$ist:1,
$ast:function(){return[W.V]},
$asl:function(){return[W.V]},
$ish:1,
$ash:function(){return[W.V]},
$isbp:1,
$asm:function(){return[W.V]}}
W.eA.prototype={
gj:function(a){return a.length}}
W.eE.prototype={
gj:function(a){return a.length}}
W.eI.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
W.cf.prototype={}
W.eJ.prototype={
gj:function(a){return a.length}}
W.bq.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isp:1,
$asp:function(){return[W.r]},
$isk:1,
$ask:function(){return[W.r]},
$ist:1,
$ast:function(){return[W.r]},
$asl:function(){return[W.r]},
$ish:1,
$ash:function(){return[W.r]},
$asm:function(){return[W.r]}}
W.cg.prototype={}
W.eK.prototype={
J:function(a,b){return a.send(b)}}
W.br.prototype={}
W.bs.prototype={$isbs:1}
W.aC.prototype={$isaC:1}
W.eZ.prototype={
k:function(a){return String(a)}}
W.f_.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
W.bv.prototype={}
W.f7.prototype={
gj:function(a){return a.length}}
W.b0.prototype={$isb0:1}
W.f9.prototype={
f8:function(a,b,c){return a.send(b,c)},
J:function(a,b){return a.send(b)}}
W.bw.prototype={}
W.fa.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isp:1,
$asp:function(){return[W.cq]},
$isk:1,
$ask:function(){return[W.cq]},
$ist:1,
$ast:function(){return[W.cq]},
$asl:function(){return[W.cq]},
$ish:1,
$ash:function(){return[W.cq]},
$asm:function(){return[W.cq]}}
W.K.prototype={$isK:1}
W.cw.prototype={
cO:function(a,b,c){var t,s,r,q
t=W.b0
s=new P.E(0,$.v,null,[t])
r=new P.cV(s,[t])
q=P.am(["audio",!1,"video",!0])
if(!a.getUserMedia)a.getUserMedia=a.getUserMedia||a.webkitGetUserMedia||a.mozGetUserMedia||a.msGetUserMedia
this.dO(a,new P.ij([],[]).b7(q),new W.fk(r),new W.fl(r))
return s},
cN:function(a,b){return this.cO(a,!1,b)},
dO:function(a,b,c,d){return a.getUserMedia(b,H.ar(c,1),H.ar(d,1))}}
W.fk.prototype={
$1:function(a){this.a.af(0,a)},
$S:function(a){return{func:1,args:[,]}}}
W.fl.prototype={
$1:function(a){this.a.ek(a)},
$S:function(a){return{func:1,args:[,]}}}
W.bx.prototype={}
W.M.prototype={
gZ:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.c(P.cJ("No elements"))
if(s>1)throw H.c(P.cJ("More than one element"))
return t.firstChild},
M:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.i(s),p=0;p<r;++p)q.P(s,t.firstChild)
return},
i:function(a,b,c){var t=this.a
J.lq(t,c,C.A.h(t.childNodes,b))},
gA:function(a){var t=this.a.childNodes
return new W.cd(t,t.length,-1,null,[H.S(t,"m",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){return C.A.h(this.a.childNodes,b)},
$ask:function(){return[W.r]},
$ascm:function(){return[W.r]},
$asl:function(){return[W.r]},
$ash:function(){return[W.r]},
$asbK:function(){return[W.r]}}
W.r.prototype={
eT:function(a){var t=a.parentNode
if(t!=null)J.j3(t,a)},
k:function(a){var t=a.nodeValue
return t==null?this.d2(a):t},
P:function(a,b){return a.appendChild(b)},
dW:function(a,b){return a.removeChild(b)},
dY:function(a,b,c){return a.replaceChild(b,c)},
$isr:1,
gb2:function(a){return a.previousSibling}}
W.cx.prototype={
b3:function(a){return a.previousNode()}}
W.by.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isp:1,
$asp:function(){return[W.r]},
$isk:1,
$ask:function(){return[W.r]},
$ist:1,
$ast:function(){return[W.r]},
$asl:function(){return[W.r]},
$ish:1,
$ash:function(){return[W.r]},
$asm:function(){return[W.r]}}
W.ac.prototype={
gj:function(a){return a.length}}
W.fz.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isp:1,
$asp:function(){return[W.ac]},
$isk:1,
$ask:function(){return[W.ac]},
$ist:1,
$ast:function(){return[W.ac]},
$asl:function(){return[W.ac]},
$ish:1,
$ash:function(){return[W.ac]},
$asm:function(){return[W.ac]}}
W.fC.prototype={
J:function(a,b){return a.send(b)}}
W.cB.prototype={
ep:function(a,b){return a.createContextualFragment(b)},
cP:function(a,b){return a.selectNodeContents(b)}}
W.cE.prototype={
J:function(a,b){return a.send(b)}}
W.fL.prototype={
gj:function(a){return a.length}}
W.an.prototype={}
W.fP.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isp:1,
$asp:function(){return[W.cG]},
$isk:1,
$ask:function(){return[W.cG]},
$ist:1,
$ast:function(){return[W.cG]},
$asl:function(){return[W.cG]},
$ish:1,
$ash:function(){return[W.cG]},
$asm:function(){return[W.cG]}}
W.fR.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isp:1,
$asp:function(){return[W.cH]},
$isk:1,
$ask:function(){return[W.cH]},
$ist:1,
$ast:function(){return[W.cH]},
$asl:function(){return[W.cH]},
$ish:1,
$ash:function(){return[W.cH]},
$asm:function(){return[W.cH]}}
W.ad.prototype={
gj:function(a){return a.length}}
W.fW.prototype={
h:function(a,b){return this.bG(a,b)},
a1:function(a,b){var t,s
for(t=0;!0;++t){s=this.dR(a,t)
if(s==null)return
b.$2(s,this.bG(a,s))}},
gE:function(a){var t=H.B([],[P.n])
this.a1(a,new W.fX(t))
return t},
gj:function(a){return a.length},
bG:function(a,b){return a.getItem(b)},
dR:function(a,b){return a.key(b)},
$asb_:function(){return[P.n,P.n]},
$isX:1,
$asX:function(){return[P.n,P.n]}}
W.fX.prototype={
$2:function(a,b){return C.a.l(this.a,a)},
$S:function(a,b){return{func:1,args:[,,]}}}
W.cL.prototype={
N:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aG(a,b,c,d)
t=W.mg("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.M(s).M(0,new W.M(t))
return s}}
W.h4.prototype={
N:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aG(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.H.N(t.createElement("table"),b,c,d)
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
W.h5.prototype={
N:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aG(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.H.N(t.createElement("table"),b,c,d)
t.toString
t=new W.M(t)
r=t.gZ(t)
s.toString
r.toString
new W.M(s).M(0,new W.M(r))
return s}}
W.bD.prototype={$isbD:1}
W.h7.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isp:1,
$asp:function(){return[W.cN]},
$isk:1,
$ask:function(){return[W.cN]},
$ist:1,
$ast:function(){return[W.cN]},
$asl:function(){return[W.cN]},
$ish:1,
$ash:function(){return[W.cN]},
$asm:function(){return[W.cN]}}
W.h8.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isp:1,
$asp:function(){return[W.cM]},
$isk:1,
$ask:function(){return[W.cM]},
$ist:1,
$ast:function(){return[W.cM]},
$asl:function(){return[W.cM]},
$ish:1,
$ash:function(){return[W.cM]},
$asm:function(){return[W.cM]}}
W.h9.prototype={
gj:function(a){return a.length}}
W.aH.prototype={$isaH:1}
W.hd.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isp:1,
$asp:function(){return[W.cR]},
$isk:1,
$ask:function(){return[W.cR]},
$ist:1,
$ast:function(){return[W.cR]},
$asl:function(){return[W.cR]},
$ish:1,
$ash:function(){return[W.cR]},
$asm:function(){return[W.cR]}}
W.he.prototype={
gj:function(a){return a.length}}
W.cS.prototype={
b3:function(a){return a.previousNode()}}
W.aI.prototype={}
W.hn.prototype={
k:function(a){return String(a)}}
W.hp.prototype={
gm:function(a){return a.x},
gF:function(a){return a.z}}
W.b6.prototype={$isb6:1}
W.hq.prototype={
gj:function(a){return a.length}}
W.hr.prototype={
J:function(a,b){return a.send(b)}}
W.aK.prototype={
geu:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.u("deltaY is not supported"))},
$isaK:1}
W.bH.prototype={
geb:function(a){var t,s
t=P.a6
s=new P.E(0,$.v,null,[t])
this.dM(a)
this.dZ(a,W.l3(new W.ht(new P.io(s,[t]))))
return s},
dZ:function(a,b){return a.requestAnimationFrame(H.ar(b,1))},
dM:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
e9:function(a,b){return a.alert(b)}}
W.ht.prototype={
$1:function(a){this.a.af(0,a)},
$S:function(a){return{func:1,args:[,]}}}
W.jz.prototype={}
W.hC.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isp:1,
$asp:function(){return[W.c4]},
$isk:1,
$ask:function(){return[W.c4]},
$ist:1,
$ast:function(){return[W.c4]},
$asl:function(){return[W.c4]},
$ish:1,
$ash:function(){return[W.c4]},
$asm:function(){return[W.c4]}}
W.hD.prototype={
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
B:function(a,b){var t
if(b==null)return!1
t=J.q(b)
if(!t.$isR)return!1
return a.left===t.gcc(b)&&a.top===t.gcq(b)&&a.width===t.ga4(b)&&a.height===t.ga2(b)},
gw:function(a){var t,s,r,q
t=a.left
s=a.top
r=a.width
q=a.height
return W.kX(W.aN(W.aN(W.aN(W.aN(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga2:function(a){return a.height},
ga4:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.hZ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isp:1,
$asp:function(){return[W.ce]},
$isk:1,
$ask:function(){return[W.ce]},
$ist:1,
$ast:function(){return[W.ce]},
$asl:function(){return[W.ce]},
$ish:1,
$ash:function(){return[W.ce]},
$asm:function(){return[W.ce]}}
W.d8.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isp:1,
$asp:function(){return[W.r]},
$isk:1,
$ask:function(){return[W.r]},
$ist:1,
$ast:function(){return[W.r]},
$asl:function(){return[W.r]},
$ish:1,
$ash:function(){return[W.r]},
$asm:function(){return[W.r]}}
W.ih.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isp:1,
$asp:function(){return[W.ad]},
$isk:1,
$ask:function(){return[W.ad]},
$ist:1,
$ast:function(){return[W.ad]},
$asl:function(){return[W.ad]},
$ish:1,
$ash:function(){return[W.ad]},
$asm:function(){return[W.ad]}}
W.il.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isp:1,
$asp:function(){return[W.cK]},
$isk:1,
$ask:function(){return[W.cK]},
$ist:1,
$ast:function(){return[W.cK]},
$asl:function(){return[W.cK]},
$ish:1,
$ash:function(){return[W.cK]},
$asm:function(){return[W.cK]}}
W.hz.prototype={
a1:function(a,b){var t,s,r,q,p,o
for(t=this.gE(this),s=t.length,r=this.a,q=J.i(r),p=0;p<t.length;t.length===s||(0,H.aj)(t),++p){o=t[p]
b.$2(o,q.a6(r,o))}},
gE:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.B([],[P.n])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.l(s,p.name)}return s},
$asco:function(){return[P.n,P.n]},
$asb_:function(){return[P.n,P.n]},
$asX:function(){return[P.n,P.n]},
gdP:function(){return this.a}}
W.hE.prototype={
h:function(a,b){return J.jb(this.a,b)},
gj:function(a){return this.gE(this).length}}
W.hI.prototype={
ce:function(a,b,c,d){return W.a2(this.a,this.b,a,!1,H.a5(this,0))}}
W.hF.prototype={}
W.hJ.prototype={
dw:function(a,b,c,d,e){this.e5()},
eh:function(a){if(this.b==null)return
this.e6()
this.b=null
this.sdT(null)
return},
e5:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.lo(r,this.c,t,!1)}},
e6:function(){var t,s,r
t=this.d
s=t!=null
if(s){r=this.b
r.toString
if(s)J.lp(r,this.c,t,!1)}},
sdT:function(a){this.d=a}}
W.hK.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(a){return{func:1,args:[,]}}}
W.bI.prototype={
dz:function(a){var t,s
t=$.$get$jC()
if(t.gak(t)){for(s=0;s<262;++s)t.i(0,C.V[s],W.nm())
for(s=0;s<12;++s)t.i(0,C.r[s],W.nn())}},
a0:function(a){return $.$get$kV().D(0,W.bo(a))},
T:function(a,b,c){var t,s,r
t=W.bo(a)
s=$.$get$jC()
r=s.h(0,H.e(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)}}
W.m.prototype={
gA:function(a){return new W.cd(a,this.gj(a),-1,null,[H.S(a,"m",0)])}}
W.cz.prototype={
a0:function(a){return C.a.bR(this.a,new W.fn(a))},
T:function(a,b,c){return C.a.bR(this.a,new W.fm(a,b,c))}}
W.fn.prototype={
$1:function(a){return a.a0(this.a)},
$S:function(a){return{func:1,args:[,]}}}
W.fm.prototype={
$1:function(a){return a.T(this.a,this.b,this.c)},
$S:function(a){return{func:1,args:[,]}}}
W.bP.prototype={
dC:function(a,b,c,d){var t,s,r
this.a.M(0,c)
t=b.aB(0,new W.ie())
s=b.aB(0,new W.ig())
this.b.M(0,t)
r=this.c
r.M(0,C.z)
r.M(0,s)},
a0:function(a){return this.a.D(0,W.bo(a))},
T:function(a,b,c){var t,s
t=W.bo(a)
s=this.c
if(s.D(0,H.e(t)+"::"+b))return this.d.ea(c)
else if(s.D(0,"*::"+b))return this.d.ea(c)
else{s=this.b
if(s.D(0,H.e(t)+"::"+b))return!0
else if(s.D(0,"*::"+b))return!0
else if(s.D(0,H.e(t)+"::*"))return!0
else if(s.D(0,"*::*"))return!0}return!1}}
W.ie.prototype={
$1:function(a){return!C.a.D(C.r,a)},
$S:function(a){return{func:1,args:[,]}}}
W.ig.prototype={
$1:function(a){return C.a.D(C.r,a)},
$S:function(a){return{func:1,args:[,]}}}
W.ip.prototype={
T:function(a,b,c){if(this.d5(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.jb(a,"template")==="")return this.e.D(0,b)
return!1}}
W.iq.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)},
$S:function(a){return{func:1,args:[,]}}}
W.im.prototype={
a0:function(a){var t=J.q(a)
if(!!t.$isbA)return!1
t=!!t.$isw
if(t&&W.bo(a)==="foreignObject")return!1
if(t)return!0
return!1},
T:function(a,b,c){if(b==="is"||C.i.bh(b,"on"))return!1
return this.a0(a)}}
W.cd.prototype={
p:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbI(J.aO(this.a,t))
this.c=t
return!0}this.sbI(null)
this.c=s
return!1},
gq:function(a){return this.d},
sbI:function(a){this.d=a}}
W.cy.prototype={}
W.jr.prototype={}
W.jy.prototype={}
W.id.prototype={}
W.du.prototype={
be:function(a){new W.ir(this).$2(a,null)},
ae:function(a,b){if(b==null)J.jX(a)
else J.j3(b,a)},
e1:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.lH(a)
r=J.jb(s.gdP(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.I(n)}p="element unprintable"
try{p=J.bl(a)}catch(n){H.I(n)}try{o=W.bo(a)
this.e0(a,b,t,p,o,s,r)}catch(n){if(H.I(n) instanceof P.a8)throw n
else{this.ae(a,b)
window
m="Removing corrupted element "+H.e(p)
if(typeof console!="undefined")window.console.warn(m)}}},
e0:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
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
return}t=f.gE(f)
s=H.B(t.slice(0),[H.a5(t,0)])
for(r=f.gE(f).length-1,t=f.a,q=J.i(t);r>=0;--r){p=s[r]
if(!this.a.T(a,J.lX(p),q.a6(t,p))){window
o="Removing disallowed attribute <"+H.e(e)+" "+p+'="'+H.e(q.a6(t,p))+'">'
if(typeof console!="undefined")window.console.warn(o)
q.a6(t,p)
q.dV(t,p)}}if(!!J.q(a).$isbD)this.be(a.content)}}
W.ir.prototype={
$2:function(a,b){var t,s,r,q
r=this.a
switch(a.nodeType){case 1:r.e1(a,b)
break
case 8:case 11:case 3:case 4:break
default:r.ae(a,b)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.lI(t)}catch(q){H.I(q)
r=t
J.j3(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(a,b){return{func:1,v:true,args:[W.r,W.r]}}}
W.cW.prototype={}
W.cX.prototype={}
W.cY.prototype={}
W.cZ.prototype={}
W.d_.prototype={}
W.d0.prototype={}
W.d1.prototype={}
W.d2.prototype={}
W.d3.prototype={}
W.d6.prototype={}
W.d7.prototype={}
W.d9.prototype={}
W.da.prototype={}
W.dd.prototype={}
W.de.prototype={}
W.bQ.prototype={}
W.bR.prototype={}
W.df.prototype={}
W.dg.prototype={}
W.dk.prototype={}
W.dn.prototype={}
W.dp.prototype={}
W.bS.prototype={}
W.bT.prototype={}
W.dq.prototype={}
W.dr.prototype={}
W.dv.prototype={}
W.dw.prototype={}
W.dx.prototype={}
W.dy.prototype={}
W.dz.prototype={}
W.dA.prototype={}
W.dB.prototype={}
W.dC.prototype={}
W.dD.prototype={}
W.dE.prototype={}
P.ii.prototype={
cb:function(a){var t,s,r
t=this.a
s=t.length
for(r=0;r<s;++r)if(t[r]===a)return r
C.a.l(t,a)
C.a.l(this.b,null)
return s},
b7:function(a){var t,s,r,q,p
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
s=J.q(a)
if(!!s.$isaV)return new Date(a.a)
if(!!s.$isV)return a
if(!!s.$isaS)return a
if(!!s.$isbp)return a
if(!!s.$isbs)return a
if(!!s.$isb1||!!s.$isaE)return a
if(!!s.$isX){r=this.cb(a)
q=this.b
p=q[r]
t.a=p
if(p!=null)return p
p={}
t.a=p
q[r]=p
s.a1(a,new P.ik(t,this))
return t.a}if(!!s.$ish){r=this.cb(a)
p=this.b[r]
if(p!=null)return p
return this.eo(a,r)}throw H.c(P.jx("structured clone of other type"))},
eo:function(a,b){var t,s,r,q
t=J.P(a)
s=t.gj(a)
r=new Array(s)
this.b[b]=r
for(q=0;q<s;++q)r[q]=this.b7(t.h(a,q))
return r}}
P.ik.prototype={
$2:function(a,b){this.a.a[a]=this.b.b7(b)},
$S:function(a,b){return{func:1,args:[,,]}}}
P.ix.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(a,b){return{func:1,args:[,,]}}}
P.ij.prototype={}
P.i8.prototype={}
P.R.prototype={}
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
gn:function(a){return a.y}}
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
gn:function(a){return a.y},
gF:function(a){return a.z}}
P.ex.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ey.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eB.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eD.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.a0.prototype={}
P.a9.prototype={}
P.eL.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eU.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return this.W(a,b)},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
W:function(a,b){return a.getItem(b)},
$isk:1,
$ask:function(){return[P.jm]},
$asl:function(){return[P.jm]},
$ish:1,
$ash:function(){return[P.jm]},
$asm:function(){return[P.jm]}}
P.f5.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fp.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return this.W(a,b)},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
W:function(a,b){return a.getItem(b)},
$isk:1,
$ask:function(){return[P.js]},
$asl:function(){return[P.js]},
$ish:1,
$ash:function(){return[P.js]},
$asm:function(){return[P.js]}}
P.fw.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fA.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fB.prototype={
gj:function(a){return a.length}}
P.fE.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fF.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bA.prototype={$isbA:1}
P.h2.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return this.W(a,b)},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
W:function(a,b){return a.getItem(b)},
$isk:1,
$ask:function(){return[P.n]},
$asl:function(){return[P.n]},
$ish:1,
$ash:function(){return[P.n]},
$asm:function(){return[P.n]}}
P.w.prototype={
N:function(a,b,c,d){var t,s,r,q,p,o
t=H.B([],[W.cy])
C.a.l(t,W.kU(null))
C.a.l(t,W.kY())
C.a.l(t,new W.im())
c=new W.du(new W.cz(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.n).eq(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.M(q)
o=t.gZ(t)
for(t=J.i(p);r=o.firstChild,r!=null;)t.P(p,r)
return p},
$isw:1}
P.h3.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bE.prototype={}
P.bF.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.hf.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return this.W(a,b)},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
W:function(a,b){return a.getItem(b)},
$isk:1,
$ask:function(){return[P.jv]},
$asl:function(){return[P.jv]},
$ish:1,
$ash:function(){return[P.jv]},
$asm:function(){return[P.jv]}}
P.ho.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.d4.prototype={}
P.d5.prototype={}
P.db.prototype={}
P.dc.prototype={}
P.dl.prototype={}
P.dm.prototype={}
P.ds.prototype={}
P.dt.prototype={}
P.dR.prototype={
gj:function(a){return a.length}}
P.dS.prototype={
gj:function(a){return a.length}}
P.aR.prototype={}
P.fq.prototype={
gj:function(a){return a.length}}
P.fI.prototype={
bP:function(a,b){return a.activeTexture(b)},
bS:function(a,b,c){return a.attachShader(b,c)},
bT:function(a,b,c){return a.bindBuffer(b,c)},
bU:function(a,b,c){return a.bindTexture(b,c)},
bV:function(a,b){return a.blendEquation(b)},
bW:function(a,b,c){return a.blendFunc(b,c)},
bX:function(a,b,c,d){return a.bufferData(b,c,d)},
bY:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bZ:function(a,b){return a.compileShader(b)},
c_:function(a){return a.createBuffer()},
c0:function(a){return a.createProgram()},
c1:function(a,b){return a.createShader(b)},
c2:function(a){return a.createTexture()},
c4:function(a,b){return a.depthMask(b)},
c5:function(a,b){return a.disable(b)},
c6:function(a,b,c,d){return a.drawArrays(b,c,d)},
c7:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c8:function(a,b){return a.enable(b)},
c9:function(a,b){return a.enableVertexAttribArray(b)},
aC:function(a){return P.iy(a.getContextAttributes())},
b8:function(a){return a.getError()},
b9:function(a,b){return a.getProgramInfoLog(b)},
ba:function(a,b,c){return a.getProgramParameter(b,c)},
bb:function(a,b){return a.getShaderInfoLog(b)},
bc:function(a,b,c){return a.getShaderParameter(b,c)},
bd:function(a,b,c){return a.getUniformLocation(b,c)},
cd:function(a,b){return a.linkProgram(b)},
ci:function(a,b,c){return a.pixelStorei(b,c)},
bg:function(a,b,c){return a.shaderSource(b,c)},
bi:function(a,b,c,d){return a.stencilFunc(b,c,d)},
b5:function(a,b,c,d,e,f,g,h,i,j){var t
if(!!J.q(g).$isb6)t=!0
else t=!1
if(t){this.aV(a,b,c,d,e,f,g)
return}throw H.c(P.dP("Incorrect number or type of arguments"))},
cn:function(a,b,c,d,e,f,g){return this.b5(a,b,c,d,e,f,g,null,null,null)},
aV:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
co:function(a,b,c,d){return a.texParameterf(b,c,d)},
cp:function(a,b,c,d){return a.texParameteri(b,c,d)},
cr:function(a,b,c){return a.uniform1f(b,c)},
cs:function(a,b,c){return a.uniform1fv(b,c)},
ct:function(a,b,c){return a.uniform1i(b,c)},
cu:function(a,b,c){return a.uniform1iv(b,c)},
cv:function(a,b,c){return a.uniform2fv(b,c)},
cw:function(a,b,c){return a.uniform3fv(b,c)},
cz:function(a,b,c){return a.uniform4fv(b,c)},
cA:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cB:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cD:function(a,b){return a.useProgram(b)},
cF:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cH:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fJ.prototype={
ed:function(a,b){return a.beginTransformFeedback(b)},
eg:function(a,b){return a.bindVertexArray(b)},
es:function(a){return a.createVertexArray()},
eA:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
eB:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
eC:function(a){return a.endTransformFeedback()},
f4:function(a,b,c,d){this.e4(a,b,c,d)
return},
e4:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
f5:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bP:function(a,b){return a.activeTexture(b)},
bS:function(a,b,c){return a.attachShader(b,c)},
bT:function(a,b,c){return a.bindBuffer(b,c)},
bU:function(a,b,c){return a.bindTexture(b,c)},
bV:function(a,b){return a.blendEquation(b)},
bW:function(a,b,c){return a.blendFunc(b,c)},
bX:function(a,b,c,d){return a.bufferData(b,c,d)},
bY:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bZ:function(a,b){return a.compileShader(b)},
c_:function(a){return a.createBuffer()},
c0:function(a){return a.createProgram()},
c1:function(a,b){return a.createShader(b)},
c2:function(a){return a.createTexture()},
c4:function(a,b){return a.depthMask(b)},
c5:function(a,b){return a.disable(b)},
c6:function(a,b,c,d){return a.drawArrays(b,c,d)},
c7:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c8:function(a,b){return a.enable(b)},
c9:function(a,b){return a.enableVertexAttribArray(b)},
aC:function(a){return P.iy(a.getContextAttributes())},
b8:function(a){return a.getError()},
b9:function(a,b){return a.getProgramInfoLog(b)},
ba:function(a,b,c){return a.getProgramParameter(b,c)},
bb:function(a,b){return a.getShaderInfoLog(b)},
bc:function(a,b,c){return a.getShaderParameter(b,c)},
bd:function(a,b,c){return a.getUniformLocation(b,c)},
cd:function(a,b){return a.linkProgram(b)},
ci:function(a,b,c){return a.pixelStorei(b,c)},
bg:function(a,b,c){return a.shaderSource(b,c)},
bi:function(a,b,c,d){return a.stencilFunc(b,c,d)},
b5:function(a,b,c,d,e,f,g,h,i,j){var t
if(!!J.q(g).$isb6)t=!0
else t=!1
if(t){this.aV(a,b,c,d,e,f,g)
return}throw H.c(P.dP("Incorrect number or type of arguments"))},
cn:function(a,b,c,d,e,f,g){return this.b5(a,b,c,d,e,f,g,null,null,null)},
aV:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
co:function(a,b,c,d){return a.texParameterf(b,c,d)},
cp:function(a,b,c,d){return a.texParameteri(b,c,d)},
cr:function(a,b,c){return a.uniform1f(b,c)},
cs:function(a,b,c){return a.uniform1fv(b,c)},
ct:function(a,b,c){return a.uniform1i(b,c)},
cu:function(a,b,c){return a.uniform1iv(b,c)},
cv:function(a,b,c){return a.uniform2fv(b,c)},
cw:function(a,b,c){return a.uniform3fv(b,c)},
cz:function(a,b,c){return a.uniform4fv(b,c)},
cA:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cB:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cD:function(a,b){return a.useProgram(b)},
cF:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cH:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fS.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return P.iy(this.dQ(a,b))},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
dQ:function(a,b){return a.item(b)},
$isk:1,
$ask:function(){return[P.X]},
$asl:function(){return[P.X]},
$ish:1,
$ash:function(){return[P.X]},
$asm:function(){return[P.X]}}
P.dh.prototype={}
P.di.prototype={}
B.iW.prototype={
$1:function(a){$.$get$iz().i(0,a.which,!0)},
$S:function(a){return{func:1,args:[W.aC]}}}
B.iX.prototype={
$1:function(a){$.$get$iz().i(0,a.which,null)},
$S:function(a){return{func:1,args:[W.aC]}}}
B.iY.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.ne=t
$.nf=C.b.a8(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.jO=s-C.b.K(window.innerWidth,2)
$.lf=-(t-C.b.K(window.innerHeight,2))},
$S:function(a){return{func:1,args:[W.K]}}}
B.iZ.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.c_=t-C.b.K(window.innerWidth,2)
$.c0=-(s-C.b.K(window.innerHeight,2))
if(a.button===2)$.$get$bZ().i(0,"right",!0)
else $.$get$bZ().i(0,"left",!0)},
$S:function(a){return{func:1,args:[W.K]}}}
B.j_.prototype={
$1:function(a){if(a.button===2)$.$get$bZ().i(0,"right",null)
else $.$get$bZ().i(0,"left",null)},
$S:function(a){return{func:1,args:[W.K]}}}
B.fr.prototype={
dk:function(a,b,c,d){var t
d.toString
W.a2(d,W.mh(d),new B.fs(this),!1,W.aK)
W.a2(d,"mousemove",new B.ft(this),!1,W.K)
t=W.aH
W.a2(d,"touchstart",new B.fu(),!1,t)
W.a2(d,"touchmove",new B.fv(this),!1,t)
B.nB(null)}}
B.fs.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.aw.geu(a)*r.k3
if(C.c.a8(r.fy,t)>0)r.fy=C.c.a8(r.fy,t)}catch(q){s=H.I(q)
P.U(s)}},
$S:function(a){return{func:1,args:[W.aK]}}}
B.ft.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=t.go+C.b.a8($.jO,$.c_)*0.01
s=t.id
r=$.c0
q=$.lf
t.id=s+(r-q)*0.01
$.c_=$.jO
$.c0=q}},
$S:function(a){return{func:1,args:[W.K]}}}
B.fu.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.a3(t.clientX)
C.c.a3(t.clientY)
$.c_=s
C.c.a3(t.clientX)
$.c0=C.c.a3(t.clientY)},
$S:function(a){return{func:1,args:[W.aH]}}}
B.fv.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.a3(t.clientX)
t=C.c.a3(t.clientY)
r=this.a
r.go=r.go+C.b.a8(s,$.c_)*0.01
r.id=r.id+($.c0-t)*0.01
$.c_=s
$.c0=t},
$S:function(a){return{func:1,args:[W.aH]}}}
G.fb.prototype={}
G.hj.prototype={
X:function(a,b){var t=this.d
if(H.ah(!t.G(0,a)))H.aq("uniform "+a+" already set")
t.i(0,a,b)},
bp:function(){return this.d},
k:function(a){var t,s,r,q
t=H.B(["{"+new H.ao(H.iE(this),null).k(0)+"}["+this.a+"]"],[P.n])
for(s=this.d,r=s.gE(s),r=r.gA(r);r.p();){q=r.gq(r)
C.a.l(t,H.e(q)+": "+H.e(s.h(0,q)))}return C.a.al(t,"\n")}}
G.dT.prototype={}
G.dW.prototype={
ca:function(a,b,c){J.lF(this.a,b)
if(c>0)J.m2(this.a,b,c)},
cG:function(a,b,c,d,e,f,g,h){J.j5(this.a,34962,b)
J.m3(this.a,c,d,e,!1,g,h)}}
G.ez.prototype={}
G.eH.prototype={
bn:function(a){var t=this.e
H.b(!t.G(0,a))
H.b(C.i.bh(a,"a"))
switch($.$get$N().h(0,a).a){case"vec2":t.i(0,a,H.B([],[T.x]))
break
case"vec3":t.i(0,a,H.B([],[T.o]))
break
case"vec4":t.i(0,a,H.B([],[T.ap]))
break
case"float":t.i(0,a,H.B([],[P.Y]))
break
case"uvec4":t.i(0,a,H.B([],[[P.h,P.z]]))
break
default:if(H.ah(!1))H.aq("unknown type for "+a)}},
da:function(a){var t,s,r
H.b(!0)
t=this.d.length
for(s=this.c,r=0;r<a;++r,t+=4)C.a.l(s,new G.ez(t,t+1,t+2,t+3))},
dc:function(a){var t,s,r,q
for(t=this.d,s=0;s<24;++s){r=a[s]
q=new T.o(new Float32Array(3))
q.Y(r)
C.a.l(t,q)}},
d8:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=t&&C.a,r=0;r<24;++r){q=b[r]
p=new Float32Array(2)
o=q.a
p[1]=o[1]
p[0]=o[0]
s.l(t,new T.x(p))}},
d9:function(a,b){var t,s,r,q,p
t=this.e.h(0,a)
for(s=t&&C.a,r=0;r<4;++r){q=b[r]
p=new T.o(new Float32Array(3))
p.Y(q)
s.l(t,p)}},
dg:function(){var t,s,r,q,p,o,n,m,l
t=this.c
s=t.length
H.b(s>0)
s=new Array(t.length*6)
s.fixed$length=Array
r=H.B(s,[P.z])
for(s=this.b,q=0,p=0;!1;++p){o=s[p]
r[q]=o.gfa(o)
r[q+1]=o.gfb(o)
r[q+2]=o.gfc(o)
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
G.cQ.prototype={}
G.cP.prototype={}
G.f6.prototype={}
G.f8.prototype={
bm:function(a,b,c){var t,s
if(C.i.aJ(a,0)===105){if(H.ah(C.b.aH(b.length,c)===this.z))H.aq("ChangeAttribute "+this.z)}else{t=C.b.aH(b.length,c)
if(H.ah(t===(this.ch.length/3|0)))H.aq("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.j5(t.a,34962,s)
J.jT(t.a,34962,b,35048)},
dh:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
a9:function(a,b,c){var t,s,r,q,p,o
t=J.jQ(a,0)===105
if(t&&this.z===0)this.z=C.b.aH(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.j7(r.a))
this.bm(a,b,c)
q=$.$get$N().h(0,a)
if(q==null)throw H.c("Unknown canonical "+a)
p=this.x
if(H.ah(p.G(0,a)))H.aq("unexpected attribute "+a)
o=p.h(0,a)
J.dJ(r.a,this.e)
r.ca(0,o,t?1:0)
r.cG(0,s.h(0,a),o,q.bo(),5126,!1,0,0)},
k:function(a){var t,s,r,q
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,r=t.gE(t),r=r.gA(r);r.p();){q=r.gq(r)
C.a.l(s,H.e(q)+":"+t.h(0,q).length)}return"MESH["+this.a+"] "+C.a.al(s,"  ")},
saO:function(a){this.cx=a}}
G.fx.prototype={
dd:function(a,b){var t=C.b.cJ(a,b)
if(this.z===t)return
this.z=t
this.bs()},
bs:function(){var t,s,r,q,p,o,n
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
bp:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.o(new Float32Array(3))
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
r=!!s.$isap
k=r?s.gaA(n):1
if(!!s.$iso){j=s.gm(n)
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
a3.eQ(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.fH.prototype={
dl:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.aj)(t),++o){n=t[o]
r.i(0,n,J.jW(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.aj)(t),++o){n=t[o]
r.i(0,n,J.jW(q.a,p,n))}},
dr:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gj(t)===s.gj(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gE(s),s=s.gA(s);s.p();){q=s.gq(s)
if(!t.G(0,q))C.a.l(r,q)}for(t=this.x,s=new P.bJ(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.p();){q=s.d
if(!t.D(0,q))C.a.l(r,q)}return r},
du:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gE(b),s=s.gA(s),r=this.d,q=this.y,p=this.z,o=0;s.p();){n=s.gq(s)
switch(J.jQ(n,0)){case 117:if(q.G(0,n)){m=b.h(0,n)
if(p.G(0,n))H.iU("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$N().h(0,n)
if(l==null)H.H("unknown "+n)
H.b(q.G(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.jc(r.a,k,m)
else if(!!J.q(m).$iskn)J.m0(r.a,k,m)
break
case"float":if(l.c===0)J.lZ(r.a,k,m)
else if(!!J.q(m).$iseC)J.m_(r.a,k,m)
break
case"mat4":if(l.c===0){n=H.as(m,"$isab").a
J.k1(r.a,k,!1,n)}else if(!!J.q(m).$iseC)J.k1(r.a,k,!1,m)
else if(H.ah(!1))H.aq("bad unform: "+n)
break
case"mat3":if(l.c===0){n=C.N.gf9(H.as(m,"$isnK"))
J.k0(r.a,k,!1,n)}else if(!!J.q(m).$iseC)J.k0(r.a,k,!1,m)
else if(H.ah(!1))H.aq("bad unform: "+n)
break
case"vec4":n=l.c
j=r.a
if(n===0)J.k_(j,k,H.as(m,"$isap").a)
else J.k_(j,k,m)
break
case"vec3":n=l.c
j=r.a
if(n===0)J.jZ(j,k,H.as(m,"$iso").a)
else J.jZ(j,k,m)
break
case"vec2":n=l.c
j=r.a
if(n===0)J.jY(j,k,H.as(m,"$isx").a)
else J.jY(j,k,m)
break
case"sampler2D":case"sampler2DShadow":n=C.b.a5(33984,this.ch)
J.jR(r.a,n)
n=H.as(m,"$isbG").b
J.bi(r.a,3553,n)
n=this.ch
J.jc(r.a,k,n)
this.ch=this.ch+1
break
case"samplerCube":H.b(n==="uCubeTexture")
n=C.b.a5(33984,this.ch)
J.jR(r.a,n)
n=H.as(m,"$isbG").b
J.bi(r.a,34067,n)
n=this.ch
J.jc(r.a,k,n)
this.ch=this.ch+1
break
default:H.iU("Error: unknow uniform type: "+j)
H.b(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":n=J.D(m,!0)
j=r.a
if(n)J.dK(j,2929)
else J.j8(j,2929)
break
case"cStencilFunc":H.as(m,"$iscQ")
n=m.a
j=r.a
if(n===1281)J.j8(j,2960)
else{J.dK(j,2960)
j=m.b
i=m.c
J.lU(r.a,n,j,i)}break
case"cDepthWrite":J.lz(r.a,m)
break
case"cBlendEquation":H.as(m,"$iscP")
n=m.a
j=r.a
if(n===1281)J.j8(j,3042)
else{J.dK(j,3042)
j=m.b
i=m.c
J.lt(r.a,j,i)
J.ls(r.a,n)}break}++o
break}}h=P.mf(0,0,0,Date.now()-new P.aV(t,!1).a,0,0)
""+o
h.k(0)},
df:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
Date.now()
t=this.d
J.m1(t.a,this.r)
this.ch=0
this.z.U(0)
for(s=0;s<2;++s){r=b[s]
this.du(r.a,r.bp())}q=this.Q
q.U(0)
for(p=a.cy,p=p.gE(p),p=p.gA(p);p.p();)q.l(0,p.gq(p))
o=this.dr()
if(o.length!==0)P.U("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(o)))
J.dJ(a.d.a,a.e)
n=this.e.f.length>0
q=a.f
p=a.dh()
m=a.Q
l=a.z
if(n)J.lr(t.a,q)
if(m!==-1){k=t.a
if(l>1)J.lD(k,q,p,m,0,l)
else J.lC(k,q,p,m,0)}else{m=t.a
if(l>1)J.lB(m,q,0,p,l)
else J.lA(m,q,0,p)}if(n)J.lG(t.a)},
de:function(a,b){return this.df(a,b,null)}}
G.y.prototype={
bo:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.b(!1)
return-1}}}
G.fO.prototype={
d7:function(a){var t,s,r,q
H.b(this.b==null)
for(t=this.c,s=this.x,r=0;r<2;++r){q=a[r]
H.b($.$get$N().G(0,q))
H.b(!C.a.D(t,q))
C.a.l(t,q)
s.i(0,q,this.r);++this.r}C.a.aF(t)},
bk:function(a){var t,s,r
H.b(this.b==null)
for(t=this.d,s=0;s<2;++s){r=a[s]
if(H.ah($.$get$N().G(0,r)))H.aq("missing uniform "+r)
H.b(!C.a.D(t,r))
C.a.l(t,r)}C.a.aF(t)},
bl:function(a){var t,s,r
H.b(this.b==null)
for(t=this.e,s=0;s<1;++s){r=a[s]
H.b($.$get$N().G(0,r))
H.b(!C.a.D(t,r))
C.a.l(t,r)}C.a.aF(t)},
dm:function(a,b){H.b(this.b==null)
this.b=this.dv(!0,a,b)},
bq:function(a){return this.dm(a,null)},
dv:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.b(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.aj)(t),++o){n=t[o]
m=$.$get$N().h(0,n)
C.a.l(q,"layout (location="+H.e(p.h(0,n))+") in "+m.a+" "+H.e(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.aj)(t),++o){k=t[o]
m=$.$get$N().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.e(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.aj)(t),++o){k=t[o]
m=$.$get$N().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.e(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.aj)(t),++o){k=t[o]
m=$.$get$N().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.e(k)+j+";")}C.a.l(q,"")
C.a.l(q,"void main(void) {")
C.a.M(q,b)
C.a.l(q,"}")
return C.a.al(q,"\n")}}
G.fQ.prototype={}
G.cO.prototype={
di:function(a,b){var t=this.e
if(t!==1)J.lW(a.a,b,34046,t)
J.dL(a.a,b,10240,this.r)
J.dL(a.a,b,10241,this.f)
if(this.b){J.dL(a.a,b,10242,33071)
J.dL(a.a,b,10243,33071)}}}
G.bG.prototype={
k:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.eM.prototype={
br:function(a){var t,s
t=this.d
s=this.c
J.bi(t.a,s,this.b)
J.lV(t.a,s,0,6408,6408,5121,a)}}
R.cA.prototype={
ck:function(a){var t,s,r
t=this.fy
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.U("size change "+H.e(s)+" "+H.e(r))
this.dd(s,r)
J.m4(this.go.a,0,0,s,r)}}
R.fU.prototype={
dn:function(a,b,c){var t,s,r
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
J.j4(this.a,s)
r=this.dB(b,c,90,30)
this.d=r
J.j4(this.a,r)
t=t.createElement("div")
this.c=t
J.j4(this.a,t)},
dB:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.mV("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.u).by(r,"float")
r.setProperty(p,"left","")
p=C.u.by(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.o.P(t,s)}return t}}
R.fV.prototype={
dt:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.w.f3(s,2)+" fps"
t=this.c;(t&&C.o).cY(t,b)
r=C.b.K(30*C.w.ei(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.o).P(t,q)},
ds:function(a){return this.dt(a,"")}}
D.f1.prototype={
$1:function(a){var t,s
t=document.createElement("video")
t.autoplay=!0
s=new W.hF(t,"playing",!1,[W.f])
s.gaZ(s).ao(new D.f0(this.a,t))
t.srcObject=a},
$S:function(a){return{func:1,args:[W.b0]}}}
D.f0.prototype={
$1:function(a){return this.a.af(0,this.b)},
$S:function(a){return{func:1,args:[,]}}}
D.f2.prototype={
$1:function(a){P.U("E:"+("Camera open error "+H.e(a)))
this.a.af(0,null)},
$S:function(a){return{func:1,args:[P.C]}}}
A.iG.prototype={
$2:function(a,b){var t=536870911&a+J.bj(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(a,b){return{func:1,args:[P.z,P.C]}}}
T.ab.prototype={
a7:function(a,b,c){H.b(a<4)
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
k:function(a){return"[0] "+this.aq(0).k(0)+"\n[1] "+this.aq(1).k(0)+"\n[2] "+this.aq(2).k(0)+"\n[3] "+this.aq(3).k(0)+"\n"},
h:function(a,b){return this.a[b]},
B:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.ab){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gw:function(a){return A.iF(this.a)},
aq:function(a){var t,s
t=new Float32Array(4)
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.ap(t)},
ar:function(){var t=this.a
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
eQ:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
gw:function(a){return A.iF(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.o.prototype={
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
if(b instanceof T.o){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gw:function(a){return A.iF(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){return Math.sqrt(this.gb0())},
gb0:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
b1:function(a){var t,s,r
t=Math.sqrt(this.gb0())
if(t===0)return 0
s=1/t
r=this.a
r[0]=r[0]*s
r[1]=r[1]*s
r[2]=r[2]*s
return t},
aY:function(a){var t,s
t=a.a
s=this.a
return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]},
c3:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.o(new Float32Array(3))
t.u(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gF:function(a){return this.a[2]}}
T.ap.prototype={
k:function(a){var t=this.a
return H.e(t[0])+","+H.e(t[1])+","+H.e(t[2])+","+H.e(t[3])},
B:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.ap){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gw:function(a){return A.iF(this.a)},
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
gaA:function(a){return this.a[3]}}
U.iR.prototype={
$1:function(b8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7
s=this.a
s.c=b8+0
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
r.id=0}q=C.c.ej(r.id,-1.4707963267948965,1.4707963267948965)
r.id=q
p=r.fy
o=r.go
n=p*Math.cos(q)
m=Math.cos(o)
q=Math.sin(q)
o=Math.sin(o)
l=r.d.a
l[12]=n*m
l[13]=p*q
l[14]=n*o
o=r.k2.a
l[12]=l[12]+o[0]
l[13]=l[13]+o[1]
l[14]=l[14]+o[2]
k=l[12]
j=l[13]
i=l[14]
h=new T.o(new Float32Array(3))
h.u(0,1,0)
q=r.e
p=q.a
p[0]=l[12]
p[1]=l[13]
p[2]=l[14]
p=new Float32Array(3)
g=new T.o(p)
g.Y(q)
p[0]=p[0]-o[0]
p[1]=p[1]-o[1]
p[2]=p[2]-o[2]
g.b1(0)
f=h.c3(g)
f.b1(0)
e=g.c3(f)
e.b1(0)
o=f.aY(q)
m=e.aY(q)
q=g.aY(q)
d=f.a
c=d[0]
b=e.a
a=b[0]
a0=p[0]
a1=d[1]
a2=b[1]
a3=p[1]
d=d[2]
b=b[2]
p=p[2]
l[15]=1
l[14]=-q
l[13]=-m
l[12]=-o
l[11]=0
l[10]=p
l[9]=b
l[8]=d
l[7]=0
l[6]=a3
l[5]=a2
l[4]=a1
l[3]=0
l[2]=a0
l[1]=a
l[0]=c
l[12]=k
l[13]=j
l[14]=i
c=r.f
a=c.a
a[0]=l[2]
a[1]=l[6]
a[2]=l[10]
r=-r.k1
a4=Math.sqrt(c.gb0())
k=a[0]/a4
j=a[1]/a4
i=a[2]/a4
a5=Math.cos(r)
a6=Math.sin(r)
a7=1-a5
a8=k*k*a7+a5
r=i*a6
a9=k*j*a7-r
a=j*a6
b0=k*i*a7+a
b1=j*k*a7+r
b2=j*j*a7+a5
r=k*a6
b3=j*i*a7-r
b4=i*k*a7-a
b5=i*j*a7+r
b6=i*i*a7+a5
r=l[0]
a=l[4]
c=l[8]
a0=l[1]
a1=l[5]
a2=l[9]
a3=l[2]
d=l[6]
b=l[10]
p=l[3]
o=l[7]
m=l[11]
l[0]=r*a8+a*b1+c*b4
l[1]=a0*a8+a1*b1+a2*b4
l[2]=a3*a8+d*b1+b*b4
l[3]=p*a8+o*b1+m*b4
l[4]=r*a9+a*b2+c*b5
l[5]=a0*a9+a1*b2+a2*b5
l[6]=a3*a9+d*b2+b*b5
l[7]=p*a9+o*b2+m*b5
l[8]=r*b0+a*b3+c*b6
l[9]=a0*b0+a1*b3+a2*b6
l[10]=a3*b0+d*b3+b*b6
l[11]=p*b0+o*b3+m*b6
try{r=s.b
r.br(r.f)
q=r.d
r=r.c
J.bi(q.a,r,null)}catch(b7){t=H.I(b7)
P.U(t)}this.c.de(this.d,[this.e,this.f])
this.r.ds(s.c)
C.I.geb(window).ao(this)},
$S:function(a){return{func:1,v:true,args:[P.a6]}}}
U.iS.prototype={
$1:function(a){var t,s,r,q,p,o,n
t=J.aO(a,0)
s=this.a
s.a=t
if(t==null)C.I.e9(window,"Could not access camera - do you have a camera installed?")
r=this.b
q=s.a
p=$.$get$kC()
if(p==null)p=new G.cO(!1,!1,!1,!0,1,9729,9729)
o=J.lx(r.a)
n=new G.eM(q,"video",o,3553,r,p)
J.bi(r.a,3553,o)
J.lS(r.a,37440,1)
n.br(q)
p.di(r,3553)
H.b(J.lN(r.a)===0)
J.bi(r.a,3553,null)
s.b=n
this.c.X("uTexture",n)
this.d.$1(0)},
$S:function(a){return{func:1,args:[P.h]}}}
J.a.prototype.d2=J.a.prototype.k
J.bt.prototype.d4=J.bt.prototype.k
P.Q.prototype.d3=P.Q.prototype.aB
W.a_.prototype.aG=W.a_.prototype.N
W.bP.prototype.d5=W.bP.prototype.T;(function installTearOffs(){installTearOff(H.b9.prototype,"geN",0,0,0,null,["$0"],["az"],0)
installTearOff(H.a3.prototype,"gcQ",0,0,0,null,["$1"],["L"],2)
installTearOff(H.aL.prototype,"gew",0,0,0,null,["$1"],["V"],2)
installTearOff(P,"na",1,0,0,null,["$1"],["mS"],1)
installTearOff(P,"nb",1,0,0,null,["$1"],["mT"],1)
installTearOff(P,"nc",1,0,0,null,["$1"],["mU"],1)
installTearOff(P,"l7",1,0,0,null,["$0"],["n8"],0)
installTearOff(P.E.prototype,"gbC",0,0,0,null,["$2","$1"],["H","dI"],5)
installTearOff(P,"nh",1,0,0,null,["$2"],["ma"],7)
installTearOff(W,"nm",1,0,0,null,["$4"],["mY"],4)
installTearOff(W,"nn",1,0,0,null,["$4"],["mZ"],4)
installTearOff(W.cx.prototype,"gb2",0,1,0,null,["$0"],["b3"],3)
installTearOff(W.cS.prototype,"gb2",0,1,0,null,["$0"],["b3"],3)
installTearOff(R.cA.prototype,"geW",0,0,0,null,["$1"],["ck"],6)
installTearOff(U,"l8",1,0,0,null,["$0"],["nv"],0)})();(function inheritance(){inherit(P.C,null)
var t=P.C
inherit(H.jj,t)
inherit(J.a,t)
inherit(J.dQ,t)
inherit(P.Q,t)
inherit(H.cn,t)
inherit(P.ci,t)
inherit(H.aX,t)
inherit(H.aw,t)
inherit(H.i6,t)
inherit(H.b9,t)
inherit(H.hG,t)
inherit(H.aM,t)
inherit(H.i5,t)
inherit(H.hA,t)
inherit(H.cD,t)
inherit(H.ha,t)
inherit(H.au,t)
inherit(H.a3,t)
inherit(H.aL,t)
inherit(H.fG,t)
inherit(H.hg,t)
inherit(P.aW,t)
inherit(H.dj,t)
inherit(H.ao,t)
inherit(P.b_,t)
inherit(H.eV,t)
inherit(H.eX,t)
inherit(P.W,t)
inherit(P.je,t)
inherit(P.hB,t)
inherit(P.b7,t)
inherit(P.E,t)
inherit(P.cU,t)
inherit(P.bB,t)
inherit(P.fY,t)
inherit(P.jt,t)
inherit(P.aQ,t)
inherit(P.is,t)
inherit(P.fN,t)
inherit(P.i2,t)
inherit(P.bJ,t)
inherit(P.jn,t)
inherit(P.bK,t)
inherit(P.l,t)
inherit(P.i4,t)
inherit(P.ai,t)
inherit(P.F,t)
inherit(P.aV,t)
inherit(P.a6,t)
inherit(P.ax,t)
inherit(P.cI,t)
inherit(P.jg,t)
inherit(P.hL,t)
inherit(P.eg,t)
inherit(P.h,t)
inherit(P.X,t)
inherit(P.J,t)
inherit(P.b3,t)
inherit(P.n,t)
inherit(P.bC,t)
inherit(P.jw,t)
inherit(W.e1,t)
inherit(W.bI,t)
inherit(W.m,t)
inherit(W.cz,t)
inherit(W.bP,t)
inherit(W.im,t)
inherit(W.cd,t)
inherit(W.cy,t)
inherit(W.jr,t)
inherit(W.jy,t)
inherit(W.id,t)
inherit(W.du,t)
inherit(P.ii,t)
inherit(P.i8,t)
inherit(G.fb,t)
inherit(G.dW,t)
inherit(G.ez,t)
inherit(G.eH,t)
inherit(G.cQ,t)
inherit(G.cP,t)
inherit(G.y,t)
inherit(G.fO,t)
inherit(G.cO,t)
inherit(G.bG,t)
inherit(R.fU,t)
inherit(T.ab,t)
inherit(T.x,t)
inherit(T.o,t)
inherit(T.ap,t)
t=J.a
inherit(J.eR,t)
inherit(J.cl,t)
inherit(J.bt,t)
inherit(J.ay,t)
inherit(J.aY,t)
inherit(J.aA,t)
inherit(H.b1,t)
inherit(H.aE,t)
inherit(W.d,t)
inherit(W.dM,t)
inherit(W.aS,t)
inherit(W.dU,t)
inherit(W.aU,t)
inherit(W.Z,t)
inherit(W.cW,t)
inherit(W.e6,t)
inherit(W.e7,t)
inherit(W.e8,t)
inherit(W.c7,t)
inherit(W.c8,t)
inherit(W.cX,t)
inherit(W.ca,t)
inherit(W.cZ,t)
inherit(W.eb,t)
inherit(W.f,t)
inherit(W.d0,t)
inherit(W.eJ,t)
inherit(W.d2,t)
inherit(W.bs,t)
inherit(W.eZ,t)
inherit(W.f7,t)
inherit(W.d6,t)
inherit(W.bx,t)
inherit(W.cx,t)
inherit(W.d9,t)
inherit(W.ac,t)
inherit(W.dd,t)
inherit(W.cB,t)
inherit(W.df,t)
inherit(W.ad,t)
inherit(W.dk,t)
inherit(W.dn,t)
inherit(W.h9,t)
inherit(W.dq,t)
inherit(W.he,t)
inherit(W.cS,t)
inherit(W.hn,t)
inherit(W.hp,t)
inherit(W.dv,t)
inherit(W.dx,t)
inherit(W.dz,t)
inherit(W.dB,t)
inherit(W.dD,t)
inherit(P.d4,t)
inherit(P.db,t)
inherit(P.fA,t)
inherit(P.fB,t)
inherit(P.fE,t)
inherit(P.dl,t)
inherit(P.ds,t)
inherit(P.dR,t)
inherit(P.fI,t)
inherit(P.fJ,t)
inherit(P.dh,t)
t=J.bt
inherit(J.fy,t)
inherit(J.aJ,t)
inherit(J.aB,t)
inherit(J.ji,J.ay)
t=J.aY
inherit(J.ck,t)
inherit(J.cj,t)
t=P.Q
inherit(H.k,t)
inherit(H.cp,t)
inherit(H.cT,t)
t=H.k
inherit(H.aZ,t)
inherit(H.eW,t)
inherit(H.ee,H.cp)
t=P.ci
inherit(H.f4,t)
inherit(H.hs,t)
t=H.aZ
inherit(H.bu,t)
inherit(P.eY,t)
t=H.aw
inherit(H.j0,t)
inherit(H.j1,t)
inherit(H.i0,t)
inherit(H.hH,t)
inherit(H.eO,t)
inherit(H.eP,t)
inherit(H.i7,t)
inherit(H.hb,t)
inherit(H.hc,t)
inherit(H.j2,t)
inherit(H.iL,t)
inherit(H.iM,t)
inherit(H.iN,t)
inherit(H.iO,t)
inherit(H.iP,t)
inherit(H.h6,t)
inherit(H.eS,t)
inherit(H.iH,t)
inherit(H.iI,t)
inherit(H.iJ,t)
inherit(P.hw,t)
inherit(P.hv,t)
inherit(P.hx,t)
inherit(P.hy,t)
inherit(P.eG,t)
inherit(P.eF,t)
inherit(P.hM,t)
inherit(P.hU,t)
inherit(P.hQ,t)
inherit(P.hR,t)
inherit(P.hS,t)
inherit(P.hO,t)
inherit(P.hT,t)
inherit(P.hN,t)
inherit(P.hX,t)
inherit(P.hY,t)
inherit(P.hW,t)
inherit(P.hV,t)
inherit(P.h0,t)
inherit(P.h1,t)
inherit(P.fZ,t)
inherit(P.h_,t)
inherit(P.it,t)
inherit(P.iw,t)
inherit(P.ib,t)
inherit(P.ia,t)
inherit(P.ic,t)
inherit(P.f3,t)
inherit(P.ec,t)
inherit(P.ed,t)
inherit(W.ef,t)
inherit(W.fk,t)
inherit(W.fl,t)
inherit(W.fX,t)
inherit(W.ht,t)
inherit(W.hK,t)
inherit(W.fn,t)
inherit(W.fm,t)
inherit(W.ie,t)
inherit(W.ig,t)
inherit(W.iq,t)
inherit(W.ir,t)
inherit(P.ik,t)
inherit(P.ix,t)
inherit(B.iW,t)
inherit(B.iX,t)
inherit(B.iY,t)
inherit(B.iZ,t)
inherit(B.j_,t)
inherit(B.fs,t)
inherit(B.ft,t)
inherit(B.fu,t)
inherit(B.fv,t)
inherit(D.f1,t)
inherit(D.f0,t)
inherit(D.f2,t)
inherit(A.iG,t)
inherit(U.iR,t)
inherit(U.iS,t)
t=H.hA
inherit(H.bb,t)
inherit(H.bU,t)
t=P.aW
inherit(H.fo,t)
inherit(H.eT,t)
inherit(H.hl,t)
inherit(H.hi,t)
inherit(H.dV,t)
inherit(H.fK,t)
inherit(P.c2,t)
inherit(P.b2,t)
inherit(P.a8,t)
inherit(P.hm,t)
inherit(P.hk,t)
inherit(P.b4,t)
inherit(P.dX,t)
inherit(P.e5,t)
t=H.h6
inherit(H.fT,t)
inherit(H.bm,t)
inherit(H.hu,P.c2)
inherit(P.co,P.b_)
t=P.co
inherit(H.aa,t)
inherit(W.hz,t)
t=H.aE
inherit(H.fc,t)
inherit(H.cs,t)
t=H.cs
inherit(H.bL,t)
inherit(H.bN,t)
inherit(H.bM,H.bL)
inherit(H.ct,H.bM)
inherit(H.bO,H.bN)
inherit(H.cu,H.bO)
t=H.ct
inherit(H.cr,t)
inherit(H.fd,t)
t=H.cu
inherit(H.fe,t)
inherit(H.ff,t)
inherit(H.fg,t)
inherit(H.fh,t)
inherit(H.fi,t)
inherit(H.cv,t)
inherit(H.fj,t)
t=P.hB
inherit(P.cV,t)
inherit(P.io,t)
inherit(P.i9,P.is)
inherit(P.i3,H.aa)
inherit(P.fM,P.fN)
inherit(P.i_,P.fM)
inherit(P.i1,P.i_)
inherit(P.cm,P.bK)
t=P.a6
inherit(P.Y,t)
inherit(P.z,t)
t=P.a8
inherit(P.cC,t)
inherit(P.eN,t)
t=W.d
inherit(W.r,t)
inherit(W.an,t)
inherit(W.eA,t)
inherit(W.br,t)
inherit(W.b0,t)
inherit(W.bw,t)
inherit(W.fC,t)
inherit(W.cE,t)
inherit(W.bQ,t)
inherit(W.bS,t)
inherit(W.hq,t)
inherit(W.hr,t)
inherit(W.bH,t)
inherit(W.jz,t)
inherit(P.dS,t)
inherit(P.aR,t)
t=W.r
inherit(W.a_,t)
inherit(W.av,t)
inherit(W.bn,t)
t=W.a_
inherit(W.j,t)
inherit(P.w,t)
t=W.an
inherit(W.c1,t)
inherit(W.eI,t)
inherit(W.f_,t)
t=W.j
inherit(W.dN,t)
inherit(W.dO,t)
inherit(W.at,t)
inherit(W.c3,t)
inherit(W.c6,t)
inherit(W.eE,t)
inherit(W.cf,t)
inherit(W.bv,t)
inherit(W.fL,t)
inherit(W.cL,t)
inherit(W.h4,t)
inherit(W.h5,t)
inherit(W.bD,t)
t=W.aU
inherit(W.dY,t)
inherit(W.e_,t)
inherit(W.e0,t)
inherit(W.e3,t)
t=W.Z
inherit(W.dZ,t)
inherit(W.e2,t)
inherit(W.e4,t)
inherit(W.aT,W.cW)
inherit(W.e9,W.c8)
inherit(W.cY,W.cX)
inherit(W.c9,W.cY)
inherit(W.d_,W.cZ)
inherit(W.ea,W.d_)
inherit(W.V,W.aS)
inherit(W.d1,W.d0)
inherit(W.bp,W.d1)
inherit(W.d3,W.d2)
inherit(W.bq,W.d3)
inherit(W.cg,W.bn)
inherit(W.eK,W.br)
inherit(W.aI,W.f)
t=W.aI
inherit(W.aC,t)
inherit(W.K,t)
inherit(W.aH,t)
inherit(W.f9,W.bw)
inherit(W.d7,W.d6)
inherit(W.fa,W.d7)
inherit(W.cw,W.bx)
inherit(W.M,P.cm)
inherit(W.da,W.d9)
inherit(W.by,W.da)
inherit(W.de,W.dd)
inherit(W.fz,W.de)
inherit(W.bR,W.bQ)
inherit(W.fP,W.bR)
inherit(W.dg,W.df)
inherit(W.fR,W.dg)
inherit(W.fW,W.dk)
inherit(W.dp,W.dn)
inherit(W.h7,W.dp)
inherit(W.bT,W.bS)
inherit(W.h8,W.bT)
inherit(W.dr,W.dq)
inherit(W.hd,W.dr)
inherit(W.b6,W.bv)
inherit(W.aK,W.K)
inherit(W.dw,W.dv)
inherit(W.hC,W.dw)
inherit(W.hD,W.ca)
inherit(W.dy,W.dx)
inherit(W.hZ,W.dy)
inherit(W.dA,W.dz)
inherit(W.d8,W.dA)
inherit(W.dC,W.dB)
inherit(W.ih,W.dC)
inherit(W.dE,W.dD)
inherit(W.il,W.dE)
inherit(W.hE,W.hz)
inherit(W.hI,P.bB)
inherit(W.hF,W.hI)
inherit(W.hJ,P.fY)
inherit(W.ip,W.bP)
inherit(P.ij,P.ii)
inherit(P.R,P.i8)
t=P.w
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
inherit(P.ex,t)
inherit(P.ey,t)
inherit(P.eB,t)
inherit(P.a9,t)
inherit(P.f5,t)
inherit(P.fw,t)
inherit(P.bA,t)
t=P.a9
inherit(P.eD,t)
inherit(P.a0,t)
inherit(P.eL,t)
inherit(P.h3,t)
inherit(P.bE,t)
inherit(P.ho,t)
inherit(P.d5,P.d4)
inherit(P.eU,P.d5)
inherit(P.dc,P.db)
inherit(P.fp,P.dc)
inherit(P.fF,P.a0)
inherit(P.dm,P.dl)
inherit(P.h2,P.dm)
inherit(P.bF,P.bE)
inherit(P.dt,P.ds)
inherit(P.hf,P.dt)
inherit(P.fq,P.aR)
inherit(P.di,P.dh)
inherit(P.fS,P.di)
t=G.fb
inherit(G.fQ,t)
inherit(G.hj,t)
inherit(G.f8,t)
inherit(G.fH,t)
inherit(G.dT,G.fQ)
inherit(B.fr,G.dT)
t=G.hj
inherit(G.f6,t)
inherit(G.fx,t)
inherit(G.eM,G.bG)
inherit(R.cA,G.fx)
inherit(R.fV,R.fU)
mixin(H.bL,P.l)
mixin(H.bM,H.aX)
mixin(H.bN,P.l)
mixin(H.bO,H.aX)
mixin(P.bK,P.l)
mixin(W.cW,W.e1)
mixin(W.cX,P.l)
mixin(W.cY,W.m)
mixin(W.cZ,P.l)
mixin(W.d_,W.m)
mixin(W.d0,P.l)
mixin(W.d1,W.m)
mixin(W.d2,P.l)
mixin(W.d3,W.m)
mixin(W.d6,P.l)
mixin(W.d7,W.m)
mixin(W.d9,P.l)
mixin(W.da,W.m)
mixin(W.dd,P.l)
mixin(W.de,W.m)
mixin(W.bQ,P.l)
mixin(W.bR,W.m)
mixin(W.df,P.l)
mixin(W.dg,W.m)
mixin(W.dk,P.b_)
mixin(W.dn,P.l)
mixin(W.dp,W.m)
mixin(W.bS,P.l)
mixin(W.bT,W.m)
mixin(W.dq,P.l)
mixin(W.dr,W.m)
mixin(W.dv,P.l)
mixin(W.dw,W.m)
mixin(W.dx,P.l)
mixin(W.dy,W.m)
mixin(W.dz,P.l)
mixin(W.dA,W.m)
mixin(W.dB,P.l)
mixin(W.dC,W.m)
mixin(W.dD,P.l)
mixin(W.dE,W.m)
mixin(P.d4,P.l)
mixin(P.d5,W.m)
mixin(P.db,P.l)
mixin(P.dc,W.m)
mixin(P.dl,P.l)
mixin(P.dm,W.m)
mixin(P.ds,P.l)
mixin(P.dt,W.m)
mixin(P.dh,P.l)
mixin(P.di,W.m)})();(function constants(){C.n=W.at.prototype
C.J=W.c3.prototype
C.u=W.aT.prototype
C.o=W.c6.prototype
C.K=W.c7.prototype
C.L=W.cf.prototype
C.p=W.cg.prototype
C.M=J.a.prototype
C.a=J.ay.prototype
C.w=J.cj.prototype
C.b=J.ck.prototype
C.N=J.cl.prototype
C.c=J.aY.prototype
C.i=J.aA.prototype
C.U=J.aB.prototype
C.X=H.cr.prototype
C.Y=W.cw.prototype
C.A=W.by.prototype
C.B=J.fy.prototype
C.C=W.cB.prototype
C.H=W.cL.prototype
C.t=J.aJ.prototype
C.aw=W.aK.prototype
C.I=W.bH.prototype
C.d=new P.i9()
C.v=new P.ax(0)
C.O=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.P=function(hooks) {
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

C.Q=function(getTagFallback) {
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
C.R=function() {
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
C.S=function(hooks) {
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
C.T=function(hooks) {
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
C.V=H.B(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.n])
C.W=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.z=makeConstList([])
C.q=H.B(makeConstList(["bind","if","ref","repeat","syntax"]),[P.n])
C.r=H.B(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.n])
C.Z=new G.y("vec3","vertex btangents",0)
C.e=new G.y("vec3","",0)
C.a_=new G.y("vec4","delta from light",0)
C.m=new G.y("","",0)
C.D=new G.y("vec3","vertex coordinates",0)
C.a0=new G.y("vec3","vertex binormals",0)
C.E=new G.y("vec4","for wireframe",0)
C.a1=new G.y("vec4","per vertex color",0)
C.a2=new G.y("float","for normal maps",0)
C.j=new G.y("mat4","",0)
C.a4=new G.y("mat4","",4)
C.a3=new G.y("mat4","",128)
C.f=new G.y("float","",0)
C.a5=new G.y("float","",4)
C.a6=new G.y("float","depth for shadowmaps",0)
C.h=new G.y("sampler2D","",0)
C.a7=new G.y("float","for bump maps",0)
C.a8=new G.y("vec2","texture uvs",0)
C.a9=new G.y("float","time since program start in sec",0)
C.k=new G.y("vec2","",0)
C.aa=new G.y("samplerCube","",0)
C.l=new G.y("vec4","",0)
C.ab=new G.y("vec3","vertex normals",0)
C.ac=new G.y("sampler2DShadow","",0)
C.F=new G.y("vec3","per vertex color",0)
C.G=new G.y("mat3","",0)
C.ad=new G.y("vec3","vertex tangents",0)
C.ae=H.G("nF")
C.af=H.G("nG")
C.ag=H.G("eC")
C.ah=H.G("nH")
C.ai=H.G("nI")
C.aj=H.G("kn")
C.ak=H.G("nJ")
C.al=H.G("kq")
C.am=H.G("J")
C.an=H.G("n")
C.ao=H.G("kO")
C.ap=H.G("kP")
C.aq=H.G("nL")
C.ar=H.G("kQ")
C.as=H.G("ai")
C.at=H.G("Y")
C.au=H.G("z")
C.av=H.G("a6")})();(function staticFields(){$.kw="$cachedFunction"
$.kx="$cachedInvocation"
$.k7=null
$.k5=null
$.jE=!1
$.jJ=null
$.l4=null
$.lh=null
$.iA=null
$.iK=null
$.jK=null
$.bc=null
$.bV=null
$.bW=null
$.jF=!1
$.v=C.d
$.kk=0
$.al=null
$.jf=null
$.kj=null
$.ki=null
$.kg=null
$.kf=null
$.ke=null
$.kd=null
$.ne=0
$.nf=0
$.jO=0
$.lf=0
$.c_=0
$.c0=0
$.nC=!1
$.l9=0})();(function lazyInitializers(){lazy($,"kc","$get$kc",function(){return H.lc("_$dart_dartClosure")})
lazy($,"jk","$get$jk",function(){return H.lc("_$dart_js")})
lazy($,"ko","$get$ko",function(){return H.ms()})
lazy($,"kp","$get$kp",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.kk
$.kk=t+1
t="expando$key$"+t}return new P.eg(t,null,[P.z])})
lazy($,"kD","$get$kD",function(){return H.ae(H.hh({
toString:function(){return"$receiver$"}}))})
lazy($,"kE","$get$kE",function(){return H.ae(H.hh({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"kF","$get$kF",function(){return H.ae(H.hh(null))})
lazy($,"kG","$get$kG",function(){return H.ae(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kK","$get$kK",function(){return H.ae(H.hh(void 0))})
lazy($,"kL","$get$kL",function(){return H.ae(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kI","$get$kI",function(){return H.ae(H.kJ(null))})
lazy($,"kH","$get$kH",function(){return H.ae(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"kN","$get$kN",function(){return H.ae(H.kJ(void 0))})
lazy($,"kM","$get$kM",function(){return H.ae(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"jB","$get$jB",function(){return P.mR()})
lazy($,"km","$get$km",function(){return P.mW(null,P.J)})
lazy($,"bX","$get$bX",function(){return[]})
lazy($,"kb","$get$kb",function(){return{}})
lazy($,"kV","$get$kV",function(){return P.jo(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"jC","$get$jC",function(){return P.a1()})
lazy($,"iz","$get$iz",function(){return P.kr(P.z,P.ai)})
lazy($,"bZ","$get$bZ",function(){return P.kr(P.n,P.ai)})
lazy($,"kA","$get$kA",function(){return new G.cQ(1281,0,4294967295)})
lazy($,"k3","$get$k3",function(){return new G.cP(1281,1281,1281)})
lazy($,"N","$get$N",function(){return P.am(["cBlendEquation",C.m,"cDepthWrite",C.m,"cDepthTest",C.m,"cStencilFunc",C.m,"tPosition",C.e,"tSpeed",C.e,"tForce",C.e,"aColors",C.F,"aColorAlpha",C.a1,"aPosition",C.D,"aTexUV",C.a8,"aNormal",C.ab,"aBinormal",C.a0,"aCenter",C.E,"aPointSize",C.f,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.ad,"aBitangent",C.Z,"iaRotation",C.l,"iaTranslation",C.e,"iaScale",C.e,"vColor",C.F,"vTexUV",C.k,"vLightWeighting",C.e,"vNormal",C.e,"vPosition",C.D,"vPositionFromLight",C.a_,"vCenter",C.E,"vDepth",C.a6,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.G,"uConvolutionMatrix",C.G,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.ac,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.aa,"uAnimationTable",C.h,"uTime",C.a9,"uCameraNear",C.f,"uCameraFar",C.f,"uFogNear",C.f,"uFogFar",C.f,"uPointSize",C.f,"uScale",C.f,"uAngle",C.f,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.f,"uShininess",C.f,"uShadowBias",C.f,"uOpacity",C.f,"uColor",C.e,"uAmbientDiffuse",C.e,"uColorEmissive",C.e,"uColorSpecular",C.e,"uColorDiffuse",C.e,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.e,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a3,"uLightDescs",C.a4,"uLightCount",C.f,"uLightTypes",C.a5,"uBumpScale",C.a7,"uNormalScale",C.a2])})
lazy($,"kC","$get$kC",function(){var t=G.mN()
t.b=!0
return t})
lazy($,"ka","$get$ka",function(){return T.b5(0,0,0)})
lazy($,"ll","$get$ll",function(){var t=G.kz("Textured")
t.d7(["aPosition","aTexUV"])
t.bk(["uPerspectiveViewMatrix","uModelMatrix"])
t.bl(["vTexUV"])
t.bq(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vTexUV = aTexUV;"])
return t})
lazy($,"lk","$get$lk",function(){var t=G.kz("TexturedF")
t.bl(["vTexUV"])
t.bk(["uColor","uTexture"])
t.bq(["oFragColor = texture(uTexture, vTexUV) + vec4( uColor, 0.0 );"])
return t})
lazy($,"kS","$get$kS",function(){return[T.b5(0,0,1),T.b5(0,0,-1),T.b5(0,1,0),T.b5(0,-1,0),T.b5(1,0,0),T.b5(-1,0,0)]})})()
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
mangledGlobalNames:{z:"int",Y:"double",a6:"num",n:"String",ai:"bool",J:"Null",h:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.r},{func:1,ret:P.ai,args:[W.a_,P.n,P.n,W.bI]},{func:1,v:true,args:[P.C],opt:[P.b3]},{func:1,v:true,args:[W.f]},{func:1,ret:P.z,args:[P.F,P.F]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSCharsetRule:J.a,CSSConditionRule:J.a,CSSFontFaceRule:J.a,CSSGroupingRule:J.a,CSSImportRule:J.a,CSSKeyframeRule:J.a,MozCSSKeyframeRule:J.a,WebKitCSSKeyframeRule:J.a,CSSKeyframesRule:J.a,MozCSSKeyframesRule:J.a,WebKitCSSKeyframesRule:J.a,CSSMediaRule:J.a,CSSNamespaceRule:J.a,CSSPageRule:J.a,CSSRule:J.a,CSSStyleRule:J.a,CSSStyleSheet:J.a,CSSSupportsRule:J.a,CSSVariableReferenceValue:J.a,CSSViewportRule:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,Gamepad:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MimeType:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,NavigatorAutomationInformation:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechGrammar:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,StyleSheet:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,Touch:J.a,TrackDefault:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGLength:J.a,SVGMatrix:J.a,SVGNumber:J.a,SVGPreserveAspectRatio:J.a,SVGTransform:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioParamMap:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.b1,ArrayBufferView:H.aE,DataView:H.fc,Float32Array:H.cr,Float64Array:H.fd,Int16Array:H.fe,Int32Array:H.ff,Int8Array:H.fg,Uint16Array:H.fh,Uint32Array:H.fi,Uint8ClampedArray:H.cv,CanvasPixelArray:H.cv,Uint8Array:H.fj,HTMLBRElement:W.j,HTMLBaseElement:W.j,HTMLButtonElement:W.j,HTMLContentElement:W.j,HTMLDListElement:W.j,HTMLDataElement:W.j,HTMLDataListElement:W.j,HTMLDetailsElement:W.j,HTMLDialogElement:W.j,HTMLEmbedElement:W.j,HTMLFieldSetElement:W.j,HTMLHRElement:W.j,HTMLHeadingElement:W.j,HTMLHtmlElement:W.j,HTMLIFrameElement:W.j,HTMLImageElement:W.j,HTMLInputElement:W.j,HTMLLIElement:W.j,HTMLLabelElement:W.j,HTMLLegendElement:W.j,HTMLLinkElement:W.j,HTMLMapElement:W.j,HTMLMenuElement:W.j,HTMLMetaElement:W.j,HTMLMeterElement:W.j,HTMLModElement:W.j,HTMLOListElement:W.j,HTMLObjectElement:W.j,HTMLOptGroupElement:W.j,HTMLOptionElement:W.j,HTMLOutputElement:W.j,HTMLParagraphElement:W.j,HTMLParamElement:W.j,HTMLPictureElement:W.j,HTMLPreElement:W.j,HTMLProgressElement:W.j,HTMLQuoteElement:W.j,HTMLScriptElement:W.j,HTMLShadowElement:W.j,HTMLSlotElement:W.j,HTMLSourceElement:W.j,HTMLSpanElement:W.j,HTMLStyleElement:W.j,HTMLTableCaptionElement:W.j,HTMLTableCellElement:W.j,HTMLTableDataCellElement:W.j,HTMLTableHeaderCellElement:W.j,HTMLTableColElement:W.j,HTMLTextAreaElement:W.j,HTMLTimeElement:W.j,HTMLTitleElement:W.j,HTMLTrackElement:W.j,HTMLUListElement:W.j,HTMLUnknownElement:W.j,HTMLDirectoryElement:W.j,HTMLFontElement:W.j,HTMLFrameElement:W.j,HTMLFrameSetElement:W.j,HTMLMarqueeElement:W.j,HTMLElement:W.j,Accelerometer:W.c1,LinearAccelerationSensor:W.c1,AccessibleNodeList:W.dM,HTMLAnchorElement:W.dN,HTMLAreaElement:W.dO,Blob:W.aS,HTMLBodyElement:W.at,HTMLCanvasElement:W.c3,CanvasRenderingContext2D:W.dU,CDATASection:W.av,CharacterData:W.av,Comment:W.av,ProcessingInstruction:W.av,Text:W.av,CSSPerspective:W.dY,CSSPositionValue:W.dZ,CSSRotation:W.e_,CSSScale:W.e0,CSSStyleDeclaration:W.aT,MSStyleCSSProperties:W.aT,CSS2Properties:W.aT,CSSImageValue:W.Z,CSSKeywordValue:W.Z,CSSNumericValue:W.Z,CSSResourceValue:W.Z,CSSUnitValue:W.Z,CSSURLImageValue:W.Z,CSSStyleValue:W.Z,CSSMatrixComponent:W.aU,CSSSkew:W.aU,CSSTransformComponent:W.aU,CSSTransformValue:W.e2,CSSTranslation:W.e3,CSSUnparsedValue:W.e4,DataTransferItemList:W.e6,DeviceAcceleration:W.e7,HTMLDivElement:W.c6,XMLDocument:W.bn,Document:W.bn,DOMException:W.e8,DOMImplementation:W.c7,DOMPoint:W.e9,DOMPointReadOnly:W.c8,ClientRectList:W.c9,DOMRectList:W.c9,DOMRectReadOnly:W.ca,DOMStringList:W.ea,DOMTokenList:W.eb,Element:W.a_,AbortPaymentEvent:W.f,AnimationEvent:W.f,AnimationPlaybackEvent:W.f,ApplicationCacheErrorEvent:W.f,BackgroundFetchClickEvent:W.f,BackgroundFetchEvent:W.f,BackgroundFetchFailEvent:W.f,BackgroundFetchedEvent:W.f,BeforeInstallPromptEvent:W.f,BeforeUnloadEvent:W.f,BlobEvent:W.f,CanMakePaymentEvent:W.f,ClipboardEvent:W.f,CloseEvent:W.f,CustomEvent:W.f,DeviceMotionEvent:W.f,DeviceOrientationEvent:W.f,ErrorEvent:W.f,ExtendableEvent:W.f,ExtendableMessageEvent:W.f,FetchEvent:W.f,FontFaceSetLoadEvent:W.f,ForeignFetchEvent:W.f,GamepadEvent:W.f,HashChangeEvent:W.f,InstallEvent:W.f,MediaEncryptedEvent:W.f,MediaKeyMessageEvent:W.f,MediaQueryListEvent:W.f,MediaStreamEvent:W.f,MediaStreamTrackEvent:W.f,MessageEvent:W.f,MIDIConnectionEvent:W.f,MIDIMessageEvent:W.f,MutationEvent:W.f,NotificationEvent:W.f,PageTransitionEvent:W.f,PaymentRequestEvent:W.f,PaymentRequestUpdateEvent:W.f,PopStateEvent:W.f,PresentationConnectionAvailableEvent:W.f,PresentationConnectionCloseEvent:W.f,ProgressEvent:W.f,PromiseRejectionEvent:W.f,PushEvent:W.f,RTCDataChannelEvent:W.f,RTCDTMFToneChangeEvent:W.f,RTCPeerConnectionIceEvent:W.f,RTCTrackEvent:W.f,SecurityPolicyViolationEvent:W.f,SensorErrorEvent:W.f,SpeechRecognitionError:W.f,SpeechRecognitionEvent:W.f,SpeechSynthesisEvent:W.f,StorageEvent:W.f,SyncEvent:W.f,TrackEvent:W.f,TransitionEvent:W.f,WebKitTransitionEvent:W.f,VRDeviceEvent:W.f,VRDisplayEvent:W.f,VRSessionEvent:W.f,MojoInterfaceRequestEvent:W.f,ResourceProgressEvent:W.f,USBConnectionEvent:W.f,IDBVersionChangeEvent:W.f,AudioProcessingEvent:W.f,OfflineAudioCompletionEvent:W.f,WebGLContextEvent:W.f,Event:W.f,InputEvent:W.f,AccessibleNode:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RemotePlayback:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SourceBuffer:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,TextTrack:W.d,TextTrackCue:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,VTTCue:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,ServiceWorker:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.V,FileList:W.bp,FileWriter:W.eA,HTMLFormElement:W.eE,Gyroscope:W.eI,HTMLHeadElement:W.cf,History:W.eJ,HTMLCollection:W.bq,HTMLFormControlsCollection:W.bq,HTMLOptionsCollection:W.bq,HTMLDocument:W.cg,XMLHttpRequest:W.eK,XMLHttpRequestUpload:W.br,XMLHttpRequestEventTarget:W.br,ImageData:W.bs,KeyboardEvent:W.aC,Location:W.eZ,Magnetometer:W.f_,HTMLAudioElement:W.bv,HTMLMediaElement:W.bv,MediaList:W.f7,MediaStream:W.b0,MIDIOutput:W.f9,MIDIInput:W.bw,MIDIPort:W.bw,MimeTypeArray:W.fa,PointerEvent:W.K,MouseEvent:W.K,DragEvent:W.K,Navigator:W.cw,WorkerNavigator:W.bx,NavigatorConcurrentHardware:W.bx,DocumentFragment:W.r,ShadowRoot:W.r,Attr:W.r,DocumentType:W.r,Node:W.r,NodeIterator:W.cx,NodeList:W.by,RadioNodeList:W.by,Plugin:W.ac,PluginArray:W.fz,PresentationConnection:W.fC,Range:W.cB,RTCDataChannel:W.cE,DataChannel:W.cE,HTMLSelectElement:W.fL,AbsoluteOrientationSensor:W.an,AmbientLightSensor:W.an,OrientationSensor:W.an,RelativeOrientationSensor:W.an,Sensor:W.an,SourceBufferList:W.fP,SpeechGrammarList:W.fR,SpeechRecognitionResult:W.ad,Storage:W.fW,HTMLTableElement:W.cL,HTMLTableRowElement:W.h4,HTMLTableSectionElement:W.h5,HTMLTemplateElement:W.bD,TextTrackCueList:W.h7,TextTrackList:W.h8,TimeRanges:W.h9,TouchEvent:W.aH,TouchList:W.hd,TrackDefaultList:W.he,TreeWalker:W.cS,CompositionEvent:W.aI,FocusEvent:W.aI,TextEvent:W.aI,UIEvent:W.aI,URL:W.hn,VRStageBoundsPoint:W.hp,HTMLVideoElement:W.b6,VideoTrackList:W.hq,WebSocket:W.hr,WheelEvent:W.aK,Window:W.bH,DOMWindow:W.bH,CSSRuleList:W.hC,DOMRect:W.hD,GamepadList:W.hZ,NamedNodeMap:W.d8,MozNamedAttrMap:W.d8,SpeechRecognitionResultList:W.ih,StyleSheetList:W.il,SVGFEBlendElement:P.eh,SVGFEColorMatrixElement:P.ei,SVGFEComponentTransferElement:P.ej,SVGFECompositeElement:P.ek,SVGFEConvolveMatrixElement:P.el,SVGFEDiffuseLightingElement:P.em,SVGFEDisplacementMapElement:P.en,SVGFEFloodElement:P.eo,SVGFEGaussianBlurElement:P.ep,SVGFEImageElement:P.eq,SVGFEMergeElement:P.er,SVGFEMorphologyElement:P.es,SVGFEOffsetElement:P.et,SVGFEPointLightElement:P.eu,SVGFESpecularLightingElement:P.ev,SVGFESpotLightElement:P.ew,SVGFETileElement:P.ex,SVGFETurbulenceElement:P.ey,SVGFilterElement:P.eB,SVGForeignObjectElement:P.eD,SVGCircleElement:P.a0,SVGEllipseElement:P.a0,SVGLineElement:P.a0,SVGPathElement:P.a0,SVGPolygonElement:P.a0,SVGPolylineElement:P.a0,SVGGeometryElement:P.a0,SVGAElement:P.a9,SVGClipPathElement:P.a9,SVGDefsElement:P.a9,SVGGElement:P.a9,SVGSwitchElement:P.a9,SVGGraphicsElement:P.a9,SVGImageElement:P.eL,SVGLengthList:P.eU,SVGMaskElement:P.f5,SVGNumberList:P.fp,SVGPatternElement:P.fw,SVGPoint:P.fA,SVGPointList:P.fB,SVGRect:P.fE,SVGRectElement:P.fF,SVGScriptElement:P.bA,SVGStringList:P.h2,SVGAnimateElement:P.w,SVGAnimateMotionElement:P.w,SVGAnimateTransformElement:P.w,SVGAnimationElement:P.w,SVGDescElement:P.w,SVGDiscardElement:P.w,SVGFEDistantLightElement:P.w,SVGFEFuncAElement:P.w,SVGFEFuncBElement:P.w,SVGFEFuncGElement:P.w,SVGFEFuncRElement:P.w,SVGFEMergeNodeElement:P.w,SVGLinearGradientElement:P.w,SVGMarkerElement:P.w,SVGMetadataElement:P.w,SVGRadialGradientElement:P.w,SVGSetElement:P.w,SVGStopElement:P.w,SVGStyleElement:P.w,SVGSymbolElement:P.w,SVGTitleElement:P.w,SVGViewElement:P.w,SVGGradientElement:P.w,SVGComponentTransferFunctionElement:P.w,SVGFEDropShadowElement:P.w,SVGMPathElement:P.w,SVGElement:P.w,SVGSVGElement:P.h3,SVGTextPathElement:P.bE,SVGTextContentElement:P.bE,SVGTSpanElement:P.bF,SVGTextElement:P.bF,SVGTextPositioningElement:P.bF,SVGTransformList:P.hf,SVGUseElement:P.ho,AudioBuffer:P.dR,AudioTrackList:P.dS,AudioContext:P.aR,webkitAudioContext:P.aR,BaseAudioContext:P.aR,OfflineAudioContext:P.fq,WebGLRenderingContext:P.fI,WebGL2RenderingContext:P.fJ,SQLResultSetRowList:P.fS})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSStyleSheet:true,CSSSupportsRule:true,CSSVariableReferenceValue:true,CSSViewportRule:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,Gamepad:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,NavigatorAutomationInformation:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechGrammar:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,StyleSheet:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,Touch:true,TrackDefault:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGLength:true,SVGMatrix:true,SVGNumber:true,SVGPreserveAspectRatio:true,SVGTransform:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioParamMap:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,Accelerometer:true,LinearAccelerationSensor:true,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSPositionValue:true,CSSRotation:true,CSSScale:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSSkew:true,CSSTransformComponent:false,CSSTransformValue:true,CSSTranslation:true,CSSUnparsedValue:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMPoint:true,DOMPointReadOnly:false,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AccessibleNode:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnectionList:true,PresentationRequest:true,RemotePlayback:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SourceBuffer:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,TextTrack:true,TextTrackCue:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,VTTCue:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,ServiceWorker:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gyroscope:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,ImageData:true,KeyboardEvent:true,Location:true,Magnetometer:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MediaStream:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Navigator:true,WorkerNavigator:true,NavigatorConcurrentHardware:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,PresentationConnection:true,Range:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,AbsoluteOrientationSensor:true,AmbientLightSensor:true,OrientationSensor:true,RelativeOrientationSensor:true,Sensor:false,SourceBufferList:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VRStageBoundsPoint:true,HTMLVideoElement:true,VideoTrackList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGAElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLengthList:true,SVGMaskElement:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMetadataElement:true,SVGRadialGradientElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSymbolElement:true,SVGTitleElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGSVGElement:true,SVGTextPathElement:true,SVGTextContentElement:false,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransformList:true,SVGUseElement:true,AudioBuffer:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cs.$nativeSuperclassTag="ArrayBufferView"
H.bL.$nativeSuperclassTag="ArrayBufferView"
H.bM.$nativeSuperclassTag="ArrayBufferView"
H.ct.$nativeSuperclassTag="ArrayBufferView"
H.bN.$nativeSuperclassTag="ArrayBufferView"
H.bO.$nativeSuperclassTag="ArrayBufferView"
H.cu.$nativeSuperclassTag="ArrayBufferView"
W.bQ.$nativeSuperclassTag="EventTarget"
W.bR.$nativeSuperclassTag="EventTarget"
W.bS.$nativeSuperclassTag="EventTarget"
W.bT.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.lj(U.l8(),b)},[])
else (function(b){H.lj(U.l8(),b)})([])})})()