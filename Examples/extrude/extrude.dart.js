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
a[c]=function(){a[c]=function(){H.mt(b)}
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
return d?function(e){if(t===null)t=H.ik(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.ik(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.ik(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={hV:function hV(a){this.a=a},
i1:function(a,b,c,d){if(!!a.$isj)return new H.dG(a,b,[c,d])
return new H.c0(a,b,[c,d])},
dV:function(){return new P.aQ("No element")},
lb:function(){return new P.aQ("Too many elements")},
la:function(){return new P.aQ("Too few elements")},
ls:function(a,b){H.cf(a,0,J.b0(a)-1,b)},
cf:function(a,b,c,d){if(c-b<=32)H.lr(a,b,c,d)
else H.lq(a,b,c,d)},
lr:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.P(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.Z(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.j(a,q,s.h(a,p))
q=p}s.j(a,q,r)}},
lq:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.b(t>32)
s=C.b.C(t+1,6)
r=a3+s
q=a4-s
p=C.b.C(a3+a4,2)
o=p-s
n=p+s
t=J.P(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.Z(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.Z(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.Z(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.Z(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.Z(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.Z(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.Z(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.Z(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.Z(a5.$2(j,i),0)){h=i
i=j
j=h}t.j(a2,r,m)
t.j(a2,p,k)
t.j(a2,q,i)
t.j(a2,o,t.h(a2,a3))
t.j(a2,n,t.h(a2,a4))
g=a3+1
f=a4-1
if(J.A(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=t.h(a2,e)
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
H.cf(a2,a3,g-2,a5)
H.cf(a2,f+2,a4,a5)
if(a0)return
if(g<r&&f>q){for(;J.A(a5.$2(t.h(a2,g),l),0);)++g
for(;J.A(a5.$2(t.h(a2,f),j),0);)--f
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
break}}H.cf(a2,g,f,a5)}else H.cf(a2,g,f,a5)},
j:function j(){},
aM:function aM(){},
bZ:function bZ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
c0:function c0(a,b,c){this.a=a
this.b=b
this.$ti=c},
dG:function dG(a,b,c){this.a=a
this.b=b
this.$ti=c},
e5:function e5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
b9:function b9(a,b,c){this.a=a
this.b=b
this.$ti=c},
cs:function cs(a,b,c){this.a=a
this.b=b
this.$ti=c},
fg:function fg(a,b,c){this.a=a
this.b=b
this.$ti=c},
aK:function aK(){},
dd:function(a,b){var t=a.ac(b)
if(!u.globalState.d.cy)u.globalState.f.aj()
return t},
hf:function(){++u.globalState.f.b},
ht:function(){--u.globalState.f.b
H.b(u.globalState.f.b>=0)},
k0:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.u(s).$isk)throw H.c(P.iJ("Arguments to main must be a List: "+H.e(s)))
u.globalState=new H.fQ(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$j2()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.ft(P.i0(null,H.aD),0)
q=P.w
s.sel(new H.a1(0,null,null,null,null,null,0,[q,H.aS]))
s.seo(new H.a1(0,null,null,null,null,null,0,[q,null]))
if(s.x){r=new H.fP()
s.Q=r
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.l5,r)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.lK)}if(u.globalState.x)return
o=H.jw()
u.globalState.e=o
u.globalState.z.j(0,o.a,o)
u.globalState.d=o
if(H.aY(a,{func:1,args:[P.I]}))o.ac(new H.hD(t,a))
else if(H.aY(a,{func:1,args:[P.I,P.I]}))o.ac(new H.hE(t,a))
else o.ac(a)
u.globalState.f.aj()},
lK:function(a){var t=P.ad(["command","print","msg",a])
return new H.W(!0,P.aT(null,P.w)).E(t)},
jw:function(){var t,s
t=u.globalState.a++
s=P.w
t=new H.aS(t,new H.a1(0,null,null,null,null,null,0,[s,H.cd]),P.au(null,null,null,s),u.createNewIsolate(),new H.cd(0,null,!1),new H.al(H.jY()),new H.al(H.jY()),!1,!1,[],P.au(null,null,null,null),null,null,!1,!0,P.au(null,null,null,null))
t.d9()
return t},
l7:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.l8()
return},
l8:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.c(P.t("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.c(P.t('Cannot extract URI from "'+t+'"'))},
l5:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=new H.aC(!0,[]).P(b.data)
s=J.P(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.mb(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.aC(!0,[]).P(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.aC(!0,[]).P(s.h(t,"replyTo"))
k=H.jw()
u.globalState.f.a.M(0,new H.aD(k,new H.dS(q,p,o,n,m,l),"worker-start"))
u.globalState.d=k
u.globalState.f.aj()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.ks(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.aj()
break
case"close":u.globalState.ch.ai(0,$.$get$j3().h(0,a))
a.terminate()
u.globalState.f.aj()
break
case"log":H.l4(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
j=P.ad(["command","print","msg",t])
j=new H.W(!0,P.aT(null,P.w)).E(j)
s.toString
self.postMessage(j)}else P.Y(s.h(t,"msg"))
break
case"error":throw H.c(s.h(t,"msg"))}},
l4:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.ad(["command","log","msg",a])
r=new H.W(!0,P.aT(null,P.w)).E(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.H(q)
t=H.ag(q)
s=P.bO(t)
throw H.c(s)}},
l6:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.ja=$.ja+("_"+s)
$.jb=$.jb+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.B(0,["spawned",new H.aU(s,r),q,t.r])
r=new H.dT(t,d,a,c,b)
if(e){t.bB(q,q)
u.globalState.f.a.M(0,new H.aD(t,r,"start isolate"))}else r.$0()},
lu:function(a,b){var t=new H.f0(!0,!1,null,0)
t.d1(a,b)
return t},
lL:function(a){return new H.aC(!0,[]).P(new H.W(!1,P.aT(null,P.w)).E(a))},
hD:function hD(a,b){this.a=a
this.b=b},
hE:function hE(a,b){this.a=a
this.b=b},
fQ:function fQ(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
aS:function aS(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
fK:function fK(a,b){this.a=a
this.b=b},
ft:function ft(a,b){this.a=a
this.b=b},
fu:function fu(a){this.a=a},
aD:function aD(a,b,c){this.a=a
this.b=b
this.c=c},
fP:function fP(){},
dS:function dS(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dT:function dT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fo:function fo(){},
aU:function aU(a,b){this.b=a
this.a=b},
fR:function fR(a,b){this.a=a
this.b=b},
bx:function bx(a,b,c){this.b=a
this.c=b
this.a=c},
cd:function cd(a,b,c){this.a=a
this.b=b
this.c=c},
f0:function f0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f1:function f1(a,b){this.a=a
this.b=b},
f2:function f2(a,b){this.a=a
this.b=b},
al:function al(a){this.a=a},
W:function W(a,b){this.a=a
this.b=b},
aC:function aC(a,b){this.a=a
this.b=b},
m5:function(a){return u.types[a]},
md:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.u(a).$isr},
e:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.b1(a)
if(typeof t!=="string")throw H.c(H.L(a))
return t},
ln:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t=J.aq(t)
s=t[0]
r=t[1]
return new H.ey(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aw:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
bf:function(a){var t,s,r,q,p,o,n,m,l
t=J.u(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.L||!!J.u(a).$isaA){p=C.z(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.k.aE(q,0)===36)q=C.k.cH(q,1)
l=H.hs(H.hh(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+l,u.mangledGlobalNames)},
J:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ll:function(a){return a.b?H.J(a).getUTCFullYear()+0:H.J(a).getFullYear()+0},
lj:function(a){return a.b?H.J(a).getUTCMonth()+1:H.J(a).getMonth()+1},
lf:function(a){return a.b?H.J(a).getUTCDate()+0:H.J(a).getDate()+0},
lg:function(a){return a.b?H.J(a).getUTCHours()+0:H.J(a).getHours()+0},
li:function(a){return a.b?H.J(a).getUTCMinutes()+0:H.J(a).getMinutes()+0},
lk:function(a){return a.b?H.J(a).getUTCSeconds()+0:H.J(a).getSeconds()+0},
lh:function(a){return a.b?H.J(a).getUTCMilliseconds()+0:H.J(a).getMilliseconds()+0},
j9:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.c(H.L(a))
return a[b]},
aX:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a_(!0,b,"index",null)
t=J.b0(a)
if(b<0||C.b.cn(b,t))return P.x(b,a,"index",null,t)
return P.ex(b,"index",null)},
L:function(a){return new P.a_(!0,a,null,null)},
c:function(a){var t
if(a==null)a=new P.c9()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.k1})
t.name=""}else t.toString=H.k1
return t},
k1:function(){return J.b1(this.dartException)},
F:function(a){throw H.c(a)},
aj:function(a){throw H.c(P.ab(a))},
a5:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.f6(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
f7:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
jm:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
j8:function(a,b){return new H.ek(a,b==null?null:b.method)},
hX:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.dY(a,s,t?null:b.receiver)},
H:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.hF(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aQ(r,16)&8191)===10)switch(q){case 438:return t.$1(H.hX(H.e(s)+" (Error "+q+")",null))
case 445:case 5007:return t.$1(H.j8(H.e(s)+" (Error "+q+")",null))}}if(a instanceof TypeError){p=$.$get$jg()
o=$.$get$jh()
n=$.$get$ji()
m=$.$get$jj()
l=$.$get$jn()
k=$.$get$jo()
j=$.$get$jl()
$.$get$jk()
i=$.$get$jq()
h=$.$get$jp()
g=p.I(s)
if(g!=null)return t.$1(H.hX(s,g))
else{g=o.I(s)
if(g!=null){g.method="call"
return t.$1(H.hX(s,g))}else{g=n.I(s)
if(g==null){g=m.I(s)
if(g==null){g=l.I(s)
if(g==null){g=k.I(s)
if(g==null){g=j.I(s)
if(g==null){g=m.I(s)
if(g==null){g=i.I(s)
if(g==null){g=h.I(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return t.$1(H.j8(s,g))}}return t.$1(new H.fb(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.ci()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.a_(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.ci()
return a},
ag:function(a){var t
if(a==null)return new H.cT(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.cT(a,null)},
mm:function(a){if(a==null||typeof a!='object')return J.b_(a)
else return H.aw(a)},
m2:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=a.length
for(r=0;r<s;){q=r+1
H.b(t)
p=a[r]
r=q+1
H.b(t)
b.j(0,p,a[q])}return b},
mc:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dd(b,new H.hn(a))
case 1:return H.dd(b,new H.ho(a,d))
case 2:return H.dd(b,new H.hp(a,d,e))
case 3:return H.dd(b,new H.hq(a,d,e,f))
case 4:return H.dd(b,new H.hr(a,d,e,f,g))}throw H.c(P.bO("Unsupported number of arguments for wrapped closure"))},
bB:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.mc)
a.$identity=t
return t},
kK:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.u(c).$isk){t.$reflectionInfo=c
r=H.ln(t).r}else r=c
q=d?Object.create(new H.eL().constructor.prototype):Object.create(new H.b2(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.iQ(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.m5,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.iO:H.hO
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.c("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.iQ(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
kH:function(a,b,c,d){var t=H.hO
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
iQ:function(a,b,c){var t,s,r,q
if(c)return H.kJ(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.kH(s,b==null?r!=null:b!==r,t,b)
return q},
kI:function(a,b,c,d){var t,s
t=H.hO
s=H.iO
switch(b?-1:a){case 0:throw H.c(H.lp("Intercepted function with no arguments."))
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
t=$.iP
if(t==null){t=H.iM("self")
$.iP=t}t=$.iN
if(t==null){t=H.iM("receiver")
$.iN=t}s=b.$stubName
r=b.length
q=a[s]
t=H.kI(r,b==null?q!=null:b!==q,s,b)
return t},
ik:function(a,b,c,d,e,f){var t,s
t=J.aq(b)
s=!!J.u(c).$isk?J.aq(c):c
return H.kK(a,t,s,!!d,e,f)},
hO:function(a){return a.a},
iO:function(a){return a.c},
iM:function(a){var t,s,r,q,p
t=new H.b2("self","target","receiver","name")
s=J.aq(Object.getOwnPropertyNames(t))
for(r=s.length,q=0;q<r;++q){p=s[q]
if(t[p]===a)return p}},
mC:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.a6(a,"String"))},
mx:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a6(a,"double"))},
mB:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a6(a,"num"))},
lX:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.a6(a,"bool"))},
mb:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.a6(a,"int"))},
mo:function(a,b){throw H.c(H.a6(a,b.substring(3)))},
mn:function(a,b){var t=J.P(b)
throw H.c(H.kG(a,t.b9(b,3,t.gi(b))))},
iq:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.u(a)[b])return a
H.mo(a,b)},
ai:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.u(a)[b]
else t=!0
if(t)return a
H.mn(a,b)},
mA:function(a){if(a==null)return a
if(!!J.u(a).$isk)return a
throw H.c(H.a6(a,"List"))},
il:function(a){var t=J.u(a)
return"$S" in t?t.$S():null},
aY:function(a,b){var t,s
if(a==null)return!1
t=H.il(a)
if(t==null)s=!1
else s=H.jU(t,b)
return s},
my:function(a,b){var t,s
if(a==null)return a
if($.ig)return a
$.ig=!0
try{if(H.aY(a,b))return a
t=H.hx(b,null)
s=H.a6(a,t)
throw H.c(s)}finally{$.ig=!1}},
a6:function(a,b){return new H.f8("TypeError: "+H.e(P.bN(a))+": type '"+H.jC(a)+"' is not a subtype of type '"+b+"'")},
kG:function(a,b){return new H.ds("CastError: "+H.e(P.bN(a))+": type '"+H.jC(a)+"' is not a subtype of type '"+b+"'")},
jC:function(a){var t
if(a instanceof H.an){t=H.il(a)
if(t!=null)return H.hx(t,null)
return"Closure"}return H.bf(a)},
a9:function(a){if(!0===a)return!1
if(!!J.u(a).$ishT)a=a.$0()
if(typeof a==="boolean")return!a
throw H.c(H.a6(a,"bool"))},
ae:function(a){throw H.c(new H.fi(a))},
b:function(a){if(H.a9(a))throw H.c(P.kD(null))},
mt:function(a){throw H.c(new P.dz(a))},
lp:function(a){return new H.eC(a)},
jY:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
jS:function(a){return u.getIsolateTag(a)},
z:function(a,b){H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
hh:function(a){if(a==null)return
return a.$ti},
jT:function(a,b){return H.iu(a["$as"+H.e(b)],H.hh(a))},
X:function(a,b,c){var t,s
t=H.jT(a,b)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
ah:function(a,b){var t,s
t=H.hh(a)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
hx:function(a,b){var t=H.aZ(a,b)
return t},
aZ:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.b(!0)
H.b(!0)
return a[0].name+H.hs(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.e(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aZ(t,b)
return H.lM(a,b)}return"unknown-reified-type"},
lM:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aZ(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aZ(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aZ(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.m1(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aZ(l[j],b)+(" "+H.e(j))}q+="}"}return"("+q+") => "+t},
hs:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=new P.bh("")
for(r=b,q=!0,p=!0;H.b(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.b(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aZ(o,c)}return p?"":"<"+s.k(0)+">"},
m4:function(a){var t,s,r
if(a instanceof H.an){t=H.il(a)
if(t!=null)return H.hx(t,null)}s=J.u(a).constructor.name
if(a==null)return s
r=H.hs(a.$ti,0,null)
return s+r},
iu:function(a,b){if(a==null)return b
H.b(typeof a=="function")
H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.ir(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.ir(a,null,b)
return b},
ij:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.hh(a)
s=J.u(a)
if(s[b]==null)return!1
return H.jG(H.iu(s[d],t),c)},
mu:function(a,b,c,d){var t,s
if(a==null)return a
t=H.ij(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.hs(c,0,null)
throw H.c(H.a6(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
jG:function(a,b){var t,s,r,q,p
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
if(!H.Q(r,b[p]))return!1}return!0},
mv:function(a,b,c){return H.ir(a,b,H.jT(b,c))},
Q:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.name==="I")return!0
if('func' in b)return H.jU(a,b)
if('func' in a)return b.name==="hT"||b.name==="B"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.b(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.b(!0)
q=b[0]}else q=b
if(q!==s){p=H.hx(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.jG(H.iu(o,t),r)},
jF:function(a,b,c){var t,s,r,q,p,o,n
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
if(!(H.Q(o,n)||H.Q(n,o)))return!1}return!0},
lT:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
H.b(typeof a=='object')
H.b(typeof b=='object')
t=J.aq(Object.getOwnPropertyNames(b))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.Q(p,o)||H.Q(o,p)))return!1}return!0},
jU:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.b('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.Q(t,s)||H.Q(s,t)))return!1}r=a.args
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
if(n===m){if(!H.jF(r,q,!1))return!1
if(!H.jF(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.b(j)
g=r[h]
H.b(i)
f=q[h]
if(!(H.Q(g,f)||H.Q(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=q[e]
if(!(H.Q(g,f)||H.Q(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=o[e]
if(!(H.Q(g,f)||H.Q(f,g)))return!1}}return H.lT(a.named,b.named)},
ir:function(a,b,c){H.b(typeof a=="function")
H.b(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
mD:function(a){var t=$.io
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
mz:function(a){return H.aw(a)},
mw:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
mj:function(a){var t,s,r,q,p,o
H.b(!(a instanceof P.B))
t=$.io.$1(a)
s=$.he[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.hm[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.jE.$2(a,t)
if(t!=null){s=$.he[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.hm[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.hv(r)
$.he[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.hm[t]=r
return r}if(p==="-"){o=H.hv(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.jW(a,r)
if(p==="*")throw H.c(P.jr(t))
if(u.leafTags[t]===true){o=H.hv(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.jW(a,r)},
jW:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.is(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
hv:function(a){return J.is(a,!1,null,!!a.$isr)},
ml:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return H.hv(t)
else return J.is(t,c,null,null)},
m9:function(){if(!0===$.ip)return
$.ip=!0
H.ma()},
ma:function(){var t,s,r,q,p,o,n,m
$.he=Object.create(null)
$.hm=Object.create(null)
H.m8()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.jX.$1(p)
if(o!=null){n=H.ml(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
m8:function(){var t,s,r,q,p,o,n
t=C.P()
t=H.aW(C.M,H.aW(C.R,H.aW(C.y,H.aW(C.y,H.aW(C.Q,H.aW(C.N,H.aW(C.O(C.z),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.io=new H.hj(p)
$.jE=new H.hk(o)
$.jX=new H.hl(n)},
aW:function(a,b){return a(b)||b},
ms:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
ey:function ey(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
f6:function f6(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ek:function ek(a,b){this.a=a
this.b=b},
dY:function dY(a,b,c){this.a=a
this.b=b
this.c=c},
fb:function fb(a){this.a=a},
hF:function hF(a){this.a=a},
cT:function cT(a,b){this.a=a
this.b=b},
hn:function hn(a){this.a=a},
ho:function ho(a,b){this.a=a
this.b=b},
hp:function hp(a,b,c){this.a=a
this.b=b
this.c=c},
hq:function hq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hr:function hr(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
an:function an(){},
eX:function eX(){},
eL:function eL(){},
b2:function b2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f8:function f8(a){this.a=a},
ds:function ds(a){this.a=a},
eC:function eC(a){this.a=a},
fi:function fi(a){this.a=a},
cr:function cr(a,b){this.a=a
this.b=b},
a1:function a1(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
dX:function dX(a){this.a=a},
e_:function e_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e0:function e0(a,b){this.a=a
this.$ti=b},
e1:function e1(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hj:function hj(a){this.a=a},
hk:function hk(a){this.a=a},
hl:function hl(a){this.a=a},
h7:function(a){var t,s,r
if(!!J.u(a).$iso)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
a8:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.aX(b,a))},
bc:function bc(){},
av:function av(){},
c3:function c3(){},
bd:function bd(){},
c4:function c4(){},
c2:function c2(){},
ec:function ec(){},
ed:function ed(){},
ee:function ee(){},
ef:function ef(){},
eg:function eg(){},
c5:function c5(){},
eh:function eh(){},
bo:function bo(){},
bp:function bp(){},
bq:function bq(){},
br:function br(){},
m1:function(a){return J.aq(H.z(a?Object.keys(a):[],[null]))},
hw:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
u:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.bW.prototype
return J.bV.prototype}if(typeof a=="string")return J.ar.prototype
if(a==null)return J.bX.prototype
if(typeof a=="boolean")return J.dW.prototype
if(a.constructor==Array)return J.ap.prototype
if(typeof a!="object"){if(typeof a=="function")return J.as.prototype
return a}if(a instanceof P.B)return a
return J.hg(a)},
is:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hg:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.ip==null){H.m9()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.c(P.jr("Return interceptor for "+H.e(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$hW()]
if(p!=null)return p
p=H.mj(a)
if(p!=null)return p
if(typeof a=="function")return C.S
s=Object.getPrototypeOf(a)
if(s==null)return C.B
if(s===Object.prototype)return C.B
if(typeof q=="function"){Object.defineProperty(q,$.$get$hW(),{value:C.u,enumerable:false,writable:true,configurable:true})
return C.u}return C.u},
aq:function(a){a.fixed$length=Array
return a},
P:function(a){if(typeof a=="string")return J.ar.prototype
if(a==null)return a
if(a.constructor==Array)return J.ap.prototype
if(typeof a!="object"){if(typeof a=="function")return J.as.prototype
return a}if(a instanceof P.B)return a
return J.hg(a)},
df:function(a){if(a==null)return a
if(a.constructor==Array)return J.ap.prototype
if(typeof a!="object"){if(typeof a=="function")return J.as.prototype
return a}if(a instanceof P.B)return a
return J.hg(a)},
jQ:function(a){if(typeof a=="number")return J.aL.prototype
if(a==null)return a
if(!(a instanceof P.B))return J.aA.prototype
return a},
m3:function(a){if(typeof a=="number")return J.aL.prototype
if(typeof a=="string")return J.ar.prototype
if(a==null)return a
if(!(a instanceof P.B))return J.aA.prototype
return a},
jR:function(a){if(typeof a=="string")return J.ar.prototype
if(a==null)return a
if(!(a instanceof P.B))return J.aA.prototype
return a},
l:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.as.prototype
return a}if(a instanceof P.B)return a
return J.hg(a)},
A:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.u(a).t(a,b)},
Z:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.jQ(a).aA(a,b)},
k2:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.jQ(a).U(a,b)},
iv:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.md(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.P(a).h(a,b)},
k3:function(a,b,c,d){return J.l(a).de(a,b,c,d)},
iw:function(a,b){return J.jR(a).aE(a,b)},
hG:function(a,b){return J.l(a).dw(a,b)},
k4:function(a,b,c){return J.l(a).dz(a,b,c)},
ix:function(a,b){return J.l(a).bA(a,b)},
hH:function(a,b){return J.l(a).J(a,b)},
iy:function(a,b,c){return J.l(a).bD(a,b,c)},
k5:function(a,b){return J.l(a).dP(a,b)},
hI:function(a,b,c){return J.l(a).bE(a,b,c)},
iz:function(a,b,c){return J.l(a).bF(a,b,c)},
dh:function(a,b){return J.l(a).dS(a,b)},
k6:function(a,b){return J.l(a).bG(a,b)},
k7:function(a,b,c){return J.l(a).bH(a,b,c)},
iA:function(a,b,c,d){return J.l(a).bI(a,b,c,d)},
k8:function(a,b,c,d,e){return J.l(a).bJ(a,b,c,d,e)},
k9:function(a,b){return J.m3(a).K(a,b)},
hJ:function(a,b,c){return J.P(a).dX(a,b,c)},
hK:function(a){return J.l(a).bL(a)},
ka:function(a){return J.l(a).bM(a)},
kb:function(a){return J.l(a).e1(a)},
kc:function(a,b){return J.l(a).bO(a,b)},
hL:function(a,b){return J.l(a).bP(a,b)},
kd:function(a,b,c,d){return J.l(a).bQ(a,b,c,d)},
ke:function(a,b,c,d,e){return J.l(a).e8(a,b,c,d,e)},
kf:function(a,b,c,d,e){return J.l(a).bR(a,b,c,d,e)},
kg:function(a,b,c,d,e,f){return J.l(a).e9(a,b,c,d,e,f)},
kh:function(a,b){return J.df(a).p(a,b)},
di:function(a,b){return J.l(a).bS(a,b)},
ki:function(a,b){return J.l(a).bT(a,b)},
kj:function(a){return J.l(a).ea(a)},
iB:function(a,b){return J.df(a).ad(a,b)},
kk:function(a){return J.l(a).gdN(a)},
b_:function(a){return J.u(a).gq(a)},
aF:function(a){return J.df(a).gu(a)},
b0:function(a){return J.P(a).gi(a)},
kl:function(a){return J.l(a).gaX(a)},
km:function(a){return J.l(a).geB(a)},
hM:function(a,b){return J.l(a).a3(a,b)},
kn:function(a){return J.l(a).az(a)},
ko:function(a,b){return J.l(a).b_(a,b)},
kp:function(a,b,c){return J.l(a).b0(a,b,c)},
iC:function(a,b,c){return J.l(a).b3(a,b,c)},
kq:function(a,b){return J.l(a).bW(a,b)},
kr:function(a,b){return J.df(a).bY(a,b)},
iD:function(a){return J.df(a).es(a)},
ks:function(a,b){return J.l(a).B(a,b)},
kt:function(a,b,c,d){return J.l(a).b8(a,b,c,d)},
ku:function(a){return J.jR(a).eE(a)},
b1:function(a){return J.u(a).k(a)},
kv:function(a,b,c,d){return J.l(a).eG(a,b,c,d)},
kw:function(a,b,c){return J.l(a).c5(a,b,c)},
kx:function(a,b,c){return J.l(a).c6(a,b,c)},
hN:function(a,b,c){return J.l(a).c7(a,b,c)},
ky:function(a,b,c){return J.l(a).c8(a,b,c)},
iE:function(a,b,c){return J.l(a).c9(a,b,c)},
iF:function(a,b,c){return J.l(a).ca(a,b,c)},
iG:function(a,b,c){return J.l(a).cb(a,b,c)},
iH:function(a,b,c,d){return J.l(a).cc(a,b,c,d)},
iI:function(a,b,c,d){return J.l(a).cd(a,b,c,d)},
kz:function(a,b){return J.l(a).cf(a,b)},
kA:function(a,b,c){return J.l(a).eH(a,b,c)},
kB:function(a,b,c,d,e,f,g){return J.l(a).ci(a,b,c,d,e,f,g)},
kC:function(a,b,c,d,e){return J.l(a).ck(a,b,c,d,e)},
a:function a(){},
dW:function dW(){},
bX:function bX(){},
b8:function b8(){},
et:function et(){},
aA:function aA(){},
as:function as(){},
ap:function ap(a){this.$ti=a},
hU:function hU(a){this.$ti=a},
dm:function dm(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aL:function aL(){},
bW:function bW(){},
bV:function bV(){},
ar:function ar(){}},P={
lB:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.lU()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.bB(new P.fk(t),1)).observe(s,{childList:true})
return new P.fj(t,s,r)}else if(self.setImmediate!=null)return P.lV()
return P.lW()},
lC:function(a){H.hf()
self.scheduleImmediate(H.bB(new P.fl(a),0))},
lD:function(a){H.hf()
self.setImmediate(H.bB(new P.fm(a),0))},
lE:function(a){P.i6(C.w,a)},
i6:function(a,b){var t=C.b.C(a.a,1000)
return H.lu(t<0?0:t,b)},
lP:function(a,b){if(H.aY(a,{func:1,args:[P.I,P.I]})){b.toString
return a}else{b.toString
return a}},
lG:function(a,b){var t,s,r
H.b(b.a<4)
H.b(!(a instanceof P.a7))
H.b(b.a===0)
b.a=1
try{a.c3(new P.fA(b),new P.fB(b))}catch(r){t=H.H(r)
s=H.ag(r)
P.mp(new P.fC(b,t,s))}},
jt:function(a,b){var t,s,r
H.b(b.a<=1)
for(;t=a.a,s=t===2,s;){H.b(s)
a=a.c}if(t>=4){r=b.aO()
b.aD(a)
P.bk(b,r)}else{r=b.c
H.b(b.a<=1)
b.a=2
b.c=a
a.bu(r)}},
bk:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.h8(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bk(t.a,b)}s=t.a
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
P.h8(null,null,p,o,s)
return}s=$.y
if(s==null?l!=null:s!==l){H.b(l!=null)
s=$.y
H.b(l==null?s!=null:l!==s)
j=$.y
$.y=l
i=j}else i=null
s=b.c
if(s===8)new P.fG(t,r,b,q).$0()
else if(p){if((s&1)!==0)new P.fF(r,b,m).$0()}else if((s&2)!==0)new P.fE(t,r,b).$0()
if(i!=null){H.b(!0)
$.y=i}s=r.b
if(!!J.u(s).$isdN){if(s.a>=4){H.b(o.a<4)
h=o.c
o.c=null
b=o.au(h)
H.b(o.a<4)
H.b(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.jt(s,o)
return}}g=b.b
H.b(g.a<4)
h=g.c
g.c=null
b=g.au(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.b(!o)
g.a=4
g.c=p}else{H.b(!o)
g.a=8
g.c=p}t.a=g
s=g}},
lO:function(){var t,s
for(;t=$.aV,t!=null;){$.bz=null
s=t.b
$.aV=s
if(s==null)$.by=null
t.a.$0()}},
lS:function(){$.ih=!0
try{P.lO()}finally{$.bz=null
$.ih=!1
if($.aV!=null)$.$get$ib().$1(P.jH())}},
jB:function(a){var t=new P.ct(a,null)
if($.aV==null){$.by=t
$.aV=t
if(!$.ih)$.$get$ib().$1(P.jH())}else{$.by.b=t
$.by=t}},
lR:function(a){var t,s,r
t=$.aV
if(t==null){P.jB(a)
$.bz=$.by
return}s=new P.ct(a,null)
r=$.bz
if(r==null){s.b=t
$.bz=s
$.aV=s}else{s.b=r.b
r.b=s
$.bz=s
if(s.b==null)$.by=s}},
mp:function(a){var t=$.y
if(C.h===t){P.ha(null,null,C.h,a)
return}t.toString
P.ha(null,null,t,t.aT(a))},
lv:function(a,b){var t=$.y
if(t===C.h){t.toString
return P.i6(a,b)}return P.i6(a,t.aT(b))},
ia:function(a){var t,s
H.b(a!=null)
t=$.y
H.b(a==null?t!=null:a!==t)
s=$.y
$.y=a
return s},
h8:function(a,b,c,d,e){var t={}
t.a=d
P.lR(new P.h9(t,e))},
jz:function(a,b,c,d){var t,s
if($.y===c)return d.$0()
t=P.ia(c)
try{s=d.$0()
return s}finally{s=t
H.b(s!=null)
$.y=s}},
jA:function(a,b,c,d,e){var t,s
if($.y===c)return d.$1(e)
t=P.ia(c)
try{s=d.$1(e)
return s}finally{s=t
H.b(s!=null)
$.y=s}},
lQ:function(a,b,c,d,e,f){var t,s
if($.y===c)return d.$2(e,f)
t=P.ia(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.b(s!=null)
$.y=s}},
ha:function(a,b,c,d){var t=C.h!==c
if(t)d=!(!t||!1)?c.aT(d):c.dQ(d)
P.jB(d)},
fk:function fk(a){this.a=a},
fj:function fj(a,b,c){this.a=a
this.b=b
this.c=c},
fl:function fl(a){this.a=a},
fm:function fm(a){this.a=a},
hP:function hP(){},
fp:function fp(){},
h2:function h2(a,b){this.a=a
this.$ti=b},
cB:function cB(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
a7:function a7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
fz:function fz(a,b){this.a=a
this.b=b},
fD:function fD(a,b){this.a=a
this.b=b},
fA:function fA(a){this.a=a},
fB:function fB(a){this.a=a},
fC:function fC(a,b,c){this.a=a
this.b=b
this.c=c},
fG:function fG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fH:function fH(a){this.a=a},
fF:function fF(a,b,c){this.a=a
this.b=b
this.c=c},
fE:function fE(a,b,c){this.a=a
this.b=b
this.c=c},
ct:function ct(a,b){this.a=a
this.b=b},
eQ:function eQ(){},
eS:function eS(a){this.a=a},
eT:function eT(a,b){this.a=a
this.b=b},
eR:function eR(){},
i5:function i5(){},
aG:function aG(a,b){this.a=a
this.b=b},
h6:function h6(){},
h9:function h9(a,b){this.a=a
this.b=b},
fT:function fT(){},
fV:function fV(a,b){this.a=a
this.b=b},
fU:function fU(a,b){this.a=a
this.b=b},
fW:function fW(a,b){this.a=a
this.b=b},
j4:function(a,b){return new H.a1(0,null,null,null,null,null,0,[a,b])},
U:function(){return new H.a1(0,null,null,null,null,null,0,[null,null])},
ad:function(a){return H.m2(a,new H.a1(0,null,null,null,null,null,0,[null,null]))},
aT:function(a,b){return new P.fN(0,null,null,null,null,null,0,[a,b])},
au:function(a,b,c,d){return new P.fL(0,null,null,null,null,null,0,[d])},
ie:function(){var t=Object.create(null)
H.b(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
l9:function(a,b,c){var t,s
if(P.ii(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$bA()
C.a.l(s,a)
try{P.lN(a,t)}finally{H.b(C.a.gaV(s)===a)
s.pop()}s=P.jf(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
dU:function(a,b,c){var t,s,r
if(P.ii(a))return b+"..."+c
t=new P.bh(b)
s=$.$get$bA()
C.a.l(s,a)
try{r=t
r.a=P.jf(r.gX(),a,", ")}finally{H.b(C.a.gaV(s)===a)
s.pop()}s=t
s.a=s.gX()+c
s=t.gX()
return s.charCodeAt(0)==0?s:s},
ii:function(a){var t,s
for(t=0;s=$.$get$bA(),t<s.length;++t)if(a===s[t])return!0
return!1},
lN:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gu(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.m())return
q=H.e(t.gn(t))
C.a.l(b,q)
s+=q.length+2;++r}if(!t.m()){if(r<=5)return
p=b.pop()
o=b.pop()}else{n=t.gn(t);++r
if(!t.m()){if(r<=4){C.a.l(b,H.e(n))
return}p=H.e(n)
o=b.pop()
s+=p.length+2}else{m=t.gn(t);++r
H.b(r<100)
for(;t.m();n=m,m=l){l=t.gn(t);++r
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
i_:function(a,b){var t,s
t=P.au(null,null,null,b)
for(s=J.aF(a);s.m();)t.l(0,s.gn(s))
return t},
j6:function(a){var t,s,r
t={}
if(P.ii(a))return"{...}"
s=new P.bh("")
try{C.a.l($.$get$bA(),a)
r=s
r.a=r.gX()+"{"
t.a=!0
J.iB(a,new P.e4(t,s))
t=s
t.a=t.gX()+"}"}finally{t=$.$get$bA()
H.b(C.a.gaV(t)===a)
t.pop()}t=s.gX()
return t.charCodeAt(0)==0?t:t},
i0:function(a,b){var t=new P.e2(null,0,0,0,[b])
t.cX(a,b)
return t},
fN:function fN(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
fL:function fL(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
fM:function fM(a,b,c){this.a=a
this.b=b
this.c=c},
bm:function bm(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
fJ:function fJ(){},
hZ:function hZ(){},
bY:function bY(){},
m:function m(){},
c_:function c_(){},
e4:function e4(a,b){this.a=a
this.b=b},
aO:function aO(){},
e2:function e2(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
fO:function fO(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
eF:function eF(){},
eE:function eE(){},
bn:function bn(){},
kY:function(a){var t=J.u(a)
if(!!t.$isan)return t.k(a)
return"Instance of '"+H.bf(a)+"'"},
j5:function(a,b,c){var t,s
t=H.z([],[c])
for(s=J.aF(a);s.m();)C.a.l(t,s.gn(s))
return t},
jf:function(a,b,c){var t=J.aF(b)
if(!t.m())return a
if(c.length===0){do a+=H.e(t.gn(t))
while(t.m())}else{a+=H.e(t.gn(t))
for(;t.m();)a=a+c+H.e(t.gn(t))}return a},
kL:function(a,b){return J.k9(a,b)},
kN:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+t
if(t>=10)return s+"00"+t
return s+"000"+t},
kO:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bI:function(a){if(a>=10)return""+a
return"0"+a},
kQ:function(a,b,c,d,e,f){return new P.ao(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
bN:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.b1(a)
if(typeof a==="string")return JSON.stringify(a)
return P.kY(a)},
kD:function(a){return new P.bF(a)},
iJ:function(a){return new P.a_(!1,null,null,a)},
iK:function(a,b,c){return new P.a_(!0,a,b,c)},
ex:function(a,b,c){return new P.cc(null,null,!0,a,b,"Value not in range")},
ax:function(a,b,c,d,e){return new P.cc(b,c,!0,a,d,"Invalid value")},
jc:function(a,b,c,d,e,f){if(0>a||a>c)throw H.c(P.ax(a,0,c,"start",f))
if(a>b||b>c)throw H.c(P.ax(b,a,c,"end",f))
return b},
x:function(a,b,c,d,e){var t=e!=null?e:J.b0(b)
return new P.dR(b,t,!0,a,c,"Index out of range")},
t:function(a){return new P.fc(a)},
jr:function(a){return new P.fa(a)},
i4:function(a){return new P.aQ(a)},
ab:function(a){return new P.du(a)},
bO:function(a){return new P.fy(a)},
Y:function(a){H.hw(H.e(a))},
af:function af(){},
E:function E(){},
b3:function b3(a,b){this.a=a
this.b=b},
O:function O(){},
ao:function ao(a){this.a=a},
dE:function dE(){},
dF:function dF(){},
aJ:function aJ(){},
bF:function bF(a){this.a=a},
c9:function c9(){},
a_:function a_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cc:function cc(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dR:function dR(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fc:function fc(a){this.a=a},
fa:function fa(a){this.a=a},
aQ:function aQ(a){this.a=a},
du:function du(a){this.a=a},
ci:function ci(){},
dz:function dz(a){this.a=a},
hR:function hR(){},
fy:function fy(a){this.a=a},
dI:function dI(a,b,c){this.a=a
this.b=b
this.$ti=c},
w:function w(){},
M:function M(){},
bU:function bU(){},
k:function k(){},
aN:function aN(){},
I:function I(){},
aa:function aa(){},
B:function B(){},
aP:function aP(){},
p:function p(){},
bh:function bh(a){this.a=a},
hc:function(a){var t,s,r,q,p
if(a==null)return
t=P.U()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.aj)(s),++q){p=s[q]
t.j(0,p,a[p])}return t},
m_:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.iB(a,new P.hb(t))
return t},
iY:function(){var t=$.iX
if(t==null){t=J.hJ(window.navigator.userAgent,"Opera",0)
$.iX=t}return t},
kP:function(){var t,s
t=$.iU
if(t!=null)return t
s=$.iV
if(s==null){s=J.hJ(window.navigator.userAgent,"Firefox",0)
$.iV=s}if(s)t="-moz-"
else{s=$.iW
if(s==null){s=!P.iY()&&J.hJ(window.navigator.userAgent,"Trident/",0)
$.iW=s}if(s)t="-ms-"
else t=P.iY()?"-o-":"-webkit-"}$.iU=t
return t},
hb:function hb(a){this.a=a},
fS:function fS(){},
N:function N(){},
dZ:function dZ(){},
el:function el(){},
ev:function ev(){},
bg:function bg(){},
eU:function eU(){},
h:function h(){},
f5:function f5(){},
cE:function cE(){},
cF:function cF(){},
cL:function cL(){},
cM:function cM(){},
cV:function cV(){},
cW:function cW(){},
d0:function d0(){},
d1:function d1(){},
dn:function dn(){},
dp:function dp(){},
aH:function aH(){},
em:function em(){},
eA:function eA(){},
eB:function eB(){},
eK:function eK(){},
cR:function cR(){},
cS:function cS(){}},W={
de:function(){return document},
kW:function(a,b,c){var t,s
t=document.body
s=(t&&C.p).H(t,a,b,c)
s.toString
t=new H.cs(new W.K(s),new W.dH(),[W.q])
return t.gV(t)},
kX:function(a){return"wheel"},
b5:function(a){var t,s,r
t="element tag unavailable"
try{s=J.km(a)
if(typeof s==="string")t=a.tagName}catch(r){H.H(r)}return t},
lF:function(a,b){return document.createElement(a)},
aE:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jx:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
V:function(a,b,c,d,e){var t=W.jD(new W.fx(c))
t=new W.fw(0,a,b,t,!1,[e])
t.d7(a,b,c,!1,e)
return t},
ju:function(a){var t,s
t=document.createElement("a")
s=new W.fX(t,window.location)
s=new W.bl(s)
s.d8(a)
return s},
lI:function(a,b,c,d){return!0},
lJ:function(a,b,c,d){var t,s,r,q,p
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
jy:function(){var t=P.p
t=new W.h3(P.i_(C.r,t),P.au(null,null,null,t),P.au(null,null,null,t),P.au(null,null,null,t),null)
t.dc(null,new H.b9(C.r,new W.h4(),[H.ah(C.r,0),null]),["TEMPLATE"],null)
return t},
jD:function(a){var t=$.y
if(t===C.h)return a
return t.dR(a)},
i:function i(){},
dj:function dj(){},
dk:function dk(){},
dl:function dl(){},
ak:function ak(){},
bG:function bG(){},
dr:function dr(){},
am:function am(){},
dv:function dv(){},
aI:function aI(){},
dw:function dw(){},
R:function R(){},
a0:function a0(){},
dx:function dx(){},
dy:function dy(){},
dA:function dA(){},
bJ:function bJ(){},
b4:function b4(){},
dB:function dB(){},
bK:function bK(){},
bL:function bL(){},
bM:function bM(){},
dC:function dC(){},
dD:function dD(){},
T:function T(){},
dH:function dH(){},
f:function f(){},
d:function d(){},
dK:function dK(){},
dL:function dL(){},
dM:function dM(){},
bS:function bS(){},
dP:function dP(){},
b6:function b6(){},
bT:function bT(){},
dQ:function dQ(){},
b7:function b7(){},
at:function at(){},
e3:function e3(){},
e7:function e7(){},
e9:function e9(){},
bb:function bb(){},
ea:function ea(){},
G:function G(){},
K:function K(a){this.a=a},
q:function q(){},
c6:function c6(){},
be:function be(){},
a3:function a3(){},
eu:function eu(){},
ew:function ew(){},
cb:function cb(){},
ce:function ce(){},
eD:function eD(){},
eH:function eH(){},
eJ:function eJ(){},
a4:function a4(){},
eO:function eO(){},
eP:function eP(a){this.a=a},
ck:function ck(){},
eV:function eV(){},
eW:function eW(){},
bi:function bi(){},
eY:function eY(){},
eZ:function eZ(){},
f_:function f_(){},
ay:function ay(){},
f3:function f3(){},
f4:function f4(){},
cq:function cq(){},
az:function az(){},
fd:function fd(){},
fe:function fe(){},
ff:function ff(){},
aB:function aB(){},
bj:function bj(){},
fh:function fh(a){this.a=a},
i9:function i9(){},
fq:function fq(){},
fr:function fr(){},
fI:function fI(){},
cI:function cI(){},
h_:function h_(){},
h0:function h0(){},
fn:function fn(){},
fs:function fs(a){this.a=a},
fv:function fv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ic:function ic(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
fw:function fw(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fx:function fx(a){this.a=a},
bl:function bl(a){this.a=a},
n:function n(){},
c8:function c8(a){this.a=a},
ej:function ej(a){this.a=a},
ei:function ei(a,b,c){this.a=a
this.b=b
this.c=c},
bs:function bs(){},
fY:function fY(){},
fZ:function fZ(){},
h3:function h3(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
h4:function h4(){},
h1:function h1(){},
bQ:function bQ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
c7:function c7(){},
i2:function i2(){},
i8:function i8(){},
fX:function fX(a,b){this.a=a
this.b=b},
d2:function d2(a){this.a=a},
h5:function h5(a){this.a=a},
cu:function cu(){},
cv:function cv(){},
cw:function cw(){},
cx:function cx(){},
cy:function cy(){},
cz:function cz(){},
cA:function cA(){},
cC:function cC(){},
cD:function cD(){},
cG:function cG(){},
cH:function cH(){},
cJ:function cJ(){},
cK:function cK(){},
cN:function cN(){},
cO:function cO(){},
bt:function bt(){},
bu:function bu(){},
cP:function cP(){},
cQ:function cQ(){},
cU:function cU(){},
cX:function cX(){},
cY:function cY(){},
bv:function bv(){},
bw:function bw(){},
cZ:function cZ(){},
d_:function d_(){},
d3:function d3(){},
d4:function d4(){},
d5:function d5(){},
d6:function d6(){},
d7:function d7(){},
d8:function d8(){},
d9:function d9(){},
da:function da(){},
db:function db(){},
dc:function dc(){}},B={
mq:function(a){var t,s
t=document
s=W.at
W.V(t,"keydown",new B.hy(),!1,s)
W.V(t,"keyup",new B.hz(),!1,s)
if(!$.mr)W.V(t,"mousemove",new B.hA(),!1,W.G)
s=W.G
W.V(t,"mousedown",new B.hB(),!1,s)
W.V(t,"mouseup",new B.hC(),!1,s)},
le:function(a,b,c,d){var t,s,r,q,p,o,n
t=new Float32Array(3)
s=$.$get$hd()
r=$.$get$bC()
q=new T.a2(new Float32Array(16))
q.an()
p=new Float32Array(3)
o=new Float32Array(3)
n=new Float32Array(3)
t=new B.en(a,b,c,0,new T.C(t),-0.02,s,r,q,new T.C(p),new T.C(o),new T.C(n),new T.C(new Float32Array(3)),"camera:orbit",!1,!0)
t.cY(a,b,c,d)
return t},
hy:function hy(){},
hz:function hz(){},
hA:function hA(){},
hB:function hB(){},
hC:function hC(){},
en:function en(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
eo:function eo(a){this.a=a},
ep:function ep(a){this.a=a},
eq:function eq(){},
er:function er(a){this.a=a}},G={
lA:function(a){var t,s,r
t=H.z(a.split("\n"),[P.p])
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.e(t[s])}return C.a.ah(t,"\n")},
js:function(a,b,c){var t,s,r,q
t=J.l(a)
s=t.bN(a,b)
t.b6(a,s,c)
t.bK(a,s)
r=t.b2(a,s,35713)
if(r!=null&&!r){q=t.b1(a,s)
P.Y("E:Compilation failed:")
P.Y("E:"+G.lA(c))
P.Y("E:Failure:")
P.Y(C.k.R("E:",q))
throw H.c(q)}return s},
j1:function(a,b){var t,s,r
t=a.length
b=new Float32Array(t*3)
for(t=a.length,s=0;s<t;++s){r=s*3
b[r]=a[s].a[0]
b[r+1]=a[s].a[1]
b[r+2]=a[s].a[2]}return b},
l_:function(a,b){var t,s,r
t=C.d.gi(a).v(0,2)
b=new Float32Array(t)
for(s=0;C.b.U(s,C.d.gi(a));++s){t=s*2
r=C.d.h(a,s)
b[t]=r.gal(r)
r=C.d.h(a,s)
b[t+1]=r.gam(r)}return b},
l0:function(a,b){var t,s,r
t=C.d.gi(a).v(0,4)
b=new Float32Array(t)
for(s=0;C.b.U(s,C.d.gi(a));++s){t=s*4
r=C.d.h(a,s)
b[t]=r.gal(r)
r=C.d.h(a,s)
b[t+1]=r.gam(r)
r=C.d.h(a,s)
b[t+2]=r.gay(r)
r=C.d.h(a,s)
b[t+3]=r.geI(r)}return b},
kZ:function(a,b){var t,s
t=C.d.gi(a).v(0,4)
b=new Uint32Array(t)
for(s=0;C.b.U(s,C.d.gi(a));++s){t=s*4
b[t]=C.d.h(a,s).h(0,0)
b[t+1]=C.d.h(a,s).h(0,1)
b[t+2]=C.d.h(a,s).h(0,2)
b[t+3]=C.d.h(a,s).h(0,3)}return b},
lH:function(a,b){var t,s,r,q,p,o
for(t=a.e,s=t.gA(t),s=s.gu(s),r=b.x;s.m();){q=s.gn(s)
if(!r.D(0,q)){q="Dropping unnecessary attribute: "+H.e(q)
if($.jN>0)H.hw("I: "+q)
continue}p=t.h(0,q)
switch($.$get$S().h(0,q).a){case"vec2":b.a5(q,G.l_(p,null),2)
break
case"vec3":b.a5(q,G.j1(p,null),3)
break
case"vec4":b.a5(q,G.l0(p,null),4)
break
case"float":b.a5(q,new Float32Array(H.h7(p)),1)
break
case"uvec4":b.a5(q,G.kZ(p,null),4)
break
default:if(H.a9(!1)){q="unknown type for "+H.e(q)+" ["
o=C.d.h(p,0)
H.ae(q+H.e(o.geA(o))+"] ["+H.e(C.d.geA(p))+"] "+H.e(p))}}}},
lo:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.au(null,null,null,P.p)
s=c.b
r=d.b
q=c.f
p=J.ka(b.a)
o=G.js(b.a,35633,s)
J.iy(b.a,p,o)
n=G.js(b.a,35632,r)
J.iy(b.a,p,n)
if(q.length>0)J.kv(b.a,p,q,35980)
J.kq(b.a,p)
if(!J.kp(b.a,p,35714))H.F(J.ko(b.a,p))
t=new G.ez(b,c,d,p,P.i_(c.c,null),P.U(),P.U(),t,null,a,!1,!0)
t.cZ(a,b,c,d)
return t},
jd:function(a){return new G.eG(a,null,[],[],[],[],0,P.U())},
eb:function eb(){},
f9:function f9(){},
dq:function dq(){},
dt:function dt(a,b){this.a=a
this.b=b},
dJ:function dJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dO:function dO(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
co:function co(a,b,c){this.a=a
this.b=b
this.c=c},
cn:function cn(a,b,c){this.a=a
this.b=b
this.c=c},
e6:function e6(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
e8:function e8(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
es:function es(){},
ez:function ez(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
v:function v(a,b,c){this.a=a
this.b=b
this.c=c},
eG:function eG(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
eI:function eI(){}},R={ca:function ca(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.c=n},eM:function eM(){},eN:function eN(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},A={
dg:function(a){var t,s
t=C.W.ec(a,0,new A.hi())
s=536870911&t+(C.b.cl(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
hi:function hi(){}},T={
lz:function(a,b,c){var t=new T.C(new Float32Array(3))
t.ao(a,b,c)
return t},
ba:function ba(a){this.a=a},
a2:function a2(a){this.a=a},
D:function D(a){this.a=a},
C:function C(a){this.a=a},
aR:function aR(a){this.a=a}},N={
mk:function(){var t,s,r,q,p,o,n,m,l,k
t={}
s=document
r=new R.eN(0,0,null,null,null,null)
r.d0(C.j.cp(s,"stats"),"blue","gray")
q=C.j.a0(s,"#webgl-canvas")
p=new G.dt(null,q)
s=(q&&C.I).co(q,"webgl2",P.ad(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
p.a=s
if(s==null)H.F(P.bO('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
o="ChronosGL Config: "+H.e(J.kn(s))
if($.jN>0)P.Y("I: "+o)
J.k8(s,0,0,0,1)
J.di(s,2929)
n=B.le(25,10,0,q)
s=new T.a2(new Float32Array(16))
s.an()
o=new T.a2(new Float32Array(16))
o.an()
m=new R.ca(q,p,n,50,1,0.1,1000,s,o,new T.a2(new Float32Array(16)),P.U(),"perspective",!1,!0)
m.bg()
m.c_(null)
W.V(window,"resize",m.gew(),!1,W.f)
l=G.lo("basic",p,$.$get$k_(),$.$get$jZ())
k=new G.e6(P.U(),"wire",!1,!0)
k.W("cDepthTest",!0)
k.W("cDepthWrite",!0)
k.W("cBlendEquation",$.$get$iL())
k.W("cStencilFunc",$.$get$je())
k.W("uColor",$.$get$iR())
s=new T.a2(new Float32Array(16))
s.an()
k.W("uModelMatrix",s)
t.a=0
new N.hu(t,l,n,m,k,r).$1(0)},
hu:function hu(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f}},X={
ld:function(a,b,c,d){var t,s,r
t=b.aa(d)
if(t===0)return
s=c.T(0,a).aa(d)
r=new T.D(new Float32Array(2))
r.F(b)
r.cq(0,s/t)
return a.R(0,r)},
l1:function(a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
t=H.z([],[T.D])
s=a3.length
for(r=0;r<s;r=p){q=r-1
if(q<0)q+=s
p=r+1
o=p>=s?p-s:p
n=a3[q]
m=a3[r]
l=a3[o]
m.toString
k=new Float32Array(2)
j=new T.D(k)
i=m.a
k[1]=i[1]
k[0]=i[0]
j.ap(0,n)
l.toString
h=new Float32Array(2)
g=new T.D(h)
i=l.a
h[1]=i[1]
h[0]=i[0]
g.ap(0,m)
l=k[1]
k=k[0]
f=new Float32Array(2)
e=new T.D(f)
f[0]=l
f[1]=-k
e.a_(0)
k=h[1]
l=h[0]
d=new Float32Array(2)
c=new T.D(d)
d[0]=k
d[1]=-l
c.a_(0)
if(H.a9(h[0]*f[0]+h[1]*f[1]!==0))H.ae("possibly colinear points in contour? use FilterDupsAndColinear")
n.toString
l=new Float32Array(2)
b=new T.D(l)
a=n.a
l[1]=a[1]
l[0]=a[0]
b.l(0,e)
n=new Float32Array(2)
a0=new T.D(n)
n[1]=i[1]
n[0]=i[0]
a0.l(0,c)
a1=X.ld(b,j,a0,g)
a1.toString
n=new Float32Array(2)
a2=new T.D(n)
i=a1.a
n[1]=i[1]
n[0]=i[0]
a2.ap(0,m)
C.a.l(t,a2)}return t},
kM:function(a,b,c){var t,s,r,q,p,o
t=new Array(a)
t.fixed$length=Array
s=H.z(t,[T.D])
for(r=0;r<a;++r){q=6.283185307179586*r/a
t=Math.cos(q)
p=Math.sin(q)
o=new Float32Array(2)
o[0]=b*t
o[1]=b*p
s[r]=new T.D(o)}return s},
kR:function(a){return 1-Math.cos(a*3.141592653589793/2)},
kV:function(a){return Math.sin(a*3.141592653589793/2)},
kT:function(a){return a},
kU:function(a){return a*a},
kS:function(a){return a*a*a},
kF:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
t=new Array(c)
t.fixed$length=Array
s=H.z(t,[T.D])
for(t=c-1,r=-a,q=0;q<c;++q){p=q/t
o=C.c.v(r,e.$1(p))
n=C.c.v(b,d.$1(p))
m=new Float32Array(2)
m[0]=o
m[1]=n
s[q]=new T.D(m)}return s},
kE:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=a.length
H.b(t===b.length)
s=[]
r=new Float32Array(3)
q=new T.C(r)
for(p=c.length,o=[T.C],n=0;n<p;++n){m=c[n]
l=new Array(t)
l.fixed$length=Array
k=H.z(l,o)
for(l=k.length,j=0;j<l;++j){i=a[j].a[0]
h=b[j].a[0]
g=m.a
r[0]=i+h*g[0]
r[1]=a[j].a[1]+b[j].a[1]*g[0]
r[2]=g[1]
k[j]=d.v(0,q)}C.a.l(s,k)}return s}}
var v=[C,H,J,P,W,B,G,R,A,T,N,X]
setFunctionNamesIfNecessary(v)
var $={}
H.hV.prototype={}
J.a.prototype={
t:function(a,b){return a===b},
gq:function(a){return H.aw(a)},
k:function(a){return"Instance of '"+H.bf(a)+"'"}}
J.dW.prototype={
k:function(a){return String(a)},
gq:function(a){return a?519018:218159},
$isaf:1}
J.bX.prototype={
t:function(a,b){return null==b},
k:function(a){return"null"},
gq:function(a){return 0},
$isI:1}
J.b8.prototype={
gq:function(a){return 0},
k:function(a){return String(a)},
$islc:1}
J.et.prototype={}
J.aA.prototype={}
J.as.prototype={
k:function(a){var t=a[$.$get$iT()]
return t==null?this.cK(a):J.b1(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ishT:1}
J.ap.prototype={
l:function(a,b){if(!!a.fixed$length)H.F(P.t("add"))
a.push(b)},
G:function(a,b){var t,s,r,q
t=a.length
if(!!a.fixed$length)H.F(P.t("addAll"))
for(s=0;s<1;++s,t=q){r=b[s]
q=t+1
H.b(t===a.length||H.F(P.ab(a)))
a.push(r)}},
bY:function(a,b){return new H.b9(a,b,[H.ah(a,0),null])},
ah:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.e(a[s])
return t.join(b)},
p:function(a,b){return a[b]},
geb:function(a){if(a.length>0)return a[0]
throw H.c(H.dV())},
gaV:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.c(H.dV())},
b5:function(a,b,c,d,e){var t,s,r
if(!!a.immutable$list)H.F(P.t("setRange"))
P.jc(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.F(P.ax(e,0,null,"skipCount",null))
s=J.P(d)
if(e+t>s.gi(d))throw H.c(H.la())
if(e<b)for(r=t-1;r>=0;--r)a[b+r]=s.h(d,e+r)
else for(r=0;r<t;++r)a[b+r]=s.h(d,e+r)},
bC:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.c(P.ab(a))}return!1},
cE:function(a,b){if(!!a.immutable$list)H.F(P.t("sort"))
H.ls(a,P.m0())},
b7:function(a){return this.cE(a,null)},
w:function(a,b){var t
for(t=0;t<a.length;++t)if(J.A(a[t],b))return!0
return!1},
k:function(a){return P.dU(a,"[","]")},
gu:function(a){return new J.dm(a,a.length,0,null,[H.ah(a,0)])},
gq:function(a){return H.aw(a)},
gi:function(a){return a.length},
si:function(a,b){if(!!a.fixed$length)H.F(P.t("set length"))
if(b<0)throw H.c(P.ax(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.aX(a,b))
if(b>=a.length||b<0)throw H.c(H.aX(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.F(P.t("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.aX(a,b))
if(b>=a.length||b<0)throw H.c(H.aX(a,b))
a[b]=c},
$iso:1,
$aso:function(){},
$isj:1,
$isk:1}
J.hU.prototype={}
J.dm.prototype={
gn:function(a){return this.d},
m:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.c(H.aj(t))
r=this.c
if(r>=s){this.sbh(null)
return!1}this.sbh(t[r]);++this.c
return!0},
sbh:function(a){this.d=a}}
J.aL.prototype={
K:function(a,b){var t
if(typeof b!=="number")throw H.c(H.L(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gav(b)
if(this.gav(a)===t)return 0
if(this.gav(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gav:function(a){return a===0?1/a<0:a<0},
dU:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.c(P.t(""+a+".ceil()"))},
a1:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.t(""+a+".round()"))},
dV:function(a,b,c){if(this.K(b,c)>0)throw H.c(H.L(b))
if(this.K(a,b)<0)return b
if(this.K(a,c)>0)return c
return a},
eF:function(a,b){var t
if(b>20)throw H.c(P.ax(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gav(a))return"-"+t
return t},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gq:function(a){return a&0x1FFFFFFF},
R:function(a,b){if(typeof b!=="number")throw H.c(H.L(b))
return a+b},
T:function(a,b){if(typeof b!=="number")throw H.c(H.L(b))
return a-b},
cm:function(a,b){if(typeof b!=="number")throw H.c(H.L(b))
return a/b},
v:function(a,b){if(typeof b!=="number")throw H.c(H.L(b))
return a*b},
aC:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.by(a,b)},
C:function(a,b){return(a|0)===a?a/b|0:this.by(a,b)},
by:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.c(P.t("Result of truncating division is "+H.e(t)+": "+H.e(a)+" ~/ "+b))},
aQ:function(a,b){var t
if(a>0)t=this.dE(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
dE:function(a,b){return b>31?0:a>>>b},
cl:function(a,b){if(typeof b!=="number")throw H.c(H.L(b))
return(a&b)>>>0},
cM:function(a,b){if(typeof b!=="number")throw H.c(H.L(b))
return(a^b)>>>0},
U:function(a,b){if(typeof b!=="number")throw H.c(H.L(b))
return a<b},
aA:function(a,b){if(typeof b!=="number")throw H.c(H.L(b))
return a>b},
cn:function(a,b){if(typeof b!=="number")throw H.c(H.L(b))
return a>=b},
$isE:1,
$asE:function(){return[P.aa]},
$isO:1,
$isaa:1}
J.bW.prototype={$isw:1}
J.bV.prototype={}
J.ar.prototype={
aE:function(a,b){if(b>=a.length)throw H.c(H.aX(a,b))
return a.charCodeAt(b)},
R:function(a,b){if(typeof b!=="string")throw H.c(P.iK(b,null,null))
return a+b},
cG:function(a,b,c){var t
if(c>a.length)throw H.c(P.ax(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
cF:function(a,b){return this.cG(a,b,0)},
b9:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.ex(b,null,null))
if(b>c)throw H.c(P.ex(b,null,null))
if(c>a.length)throw H.c(P.ex(c,null,null))
return a.substring(b,c)},
cH:function(a,b){return this.b9(a,b,null)},
eE:function(a){return a.toLowerCase()},
dX:function(a,b,c){if(c>a.length)throw H.c(P.ax(c,0,a.length,null,null))
return H.ms(a,b,c)},
K:function(a,b){var t
if(typeof b!=="string")throw H.c(H.L(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
k:function(a){return a},
gq:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gi:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.c(H.aX(a,b))
return a[b]},
$iso:1,
$aso:function(){},
$isE:1,
$asE:function(){return[P.p]},
$isp:1}
H.j.prototype={}
H.aM.prototype={
gu:function(a){return new H.bZ(this,this.gi(this),0,null,[H.X(this,"aM",0)])},
ax:function(a,b){return this.cJ(0,b)},
eD:function(a,b){var t,s
t=H.z([],[H.X(this,"aM",0)])
C.a.si(t,this.gi(this))
for(s=0;s<this.gi(this);++s)t[s]=this.p(0,s)
return t},
eC:function(a){return this.eD(a,!0)}}
H.bZ.prototype={
gn:function(a){return this.d},
m:function(){var t,s,r,q
t=this.a
s=J.P(t)
r=s.gi(t)
if(this.b!==r)throw H.c(P.ab(t))
q=this.c
if(q>=r){this.sa7(null)
return!1}this.sa7(s.p(t,q));++this.c
return!0},
sa7:function(a){this.d=a}}
H.c0.prototype={
gu:function(a){return new H.e5(null,J.aF(this.a),this.b,this.$ti)},
gi:function(a){return J.b0(this.a)},
$asM:function(a,b){return[b]}}
H.dG.prototype={$isj:1,
$asj:function(a,b){return[b]}}
H.e5.prototype={
m:function(){var t=this.b
if(t.m()){this.sa7(this.c.$1(t.gn(t)))
return!0}this.sa7(null)
return!1},
gn:function(a){return this.a},
sa7:function(a){this.a=a},
$asbU:function(a,b){return[b]}}
H.b9.prototype={
gi:function(a){return J.b0(this.a)},
p:function(a,b){return this.b.$1(J.kh(this.a,b))},
$asj:function(a,b){return[b]},
$asaM:function(a,b){return[b]},
$asM:function(a,b){return[b]}}
H.cs.prototype={
gu:function(a){return new H.fg(J.aF(this.a),this.b,this.$ti)}}
H.fg.prototype={
m:function(){var t,s
for(t=this.a,s=this.b;t.m();)if(s.$1(t.gn(t)))return!0
return!1},
gn:function(a){var t=this.a
return t.gn(t)}}
H.aK.prototype={}
H.hD.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.hE.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.fQ.prototype={
sel:function(a){this.z=a},
seo:function(a){this.ch=a}}
H.aS.prototype={
d9:function(){var t,s
t=this.e
s=t.a
this.c.l(0,s)
this.df(s,t)},
bB:function(a,b){if(!this.f.t(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.aS()},
ev:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.ai(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.bs();++r.d}this.y=!1}this.aS()},
dJ:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.u(a),s=0;r=this.ch,s<r.length;s+=2)if(t.t(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
eu:function(a){var t,s,r
if(this.ch==null)return
for(t=J.u(a),s=0;r=this.ch,s<r.length;s+=2)if(t.t(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.F(P.t("removeRange"))
P.jc(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
cB:function(a,b){if(!this.r.t(0,a))return
this.db=b},
ef:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.B(0,c)
return}H.b(b===1)
t=this.cx
if(t==null){t=P.i0(null,null)
this.cx=t}t.M(0,new H.fK(a,c))},
ee:function(a,b){var t
if(!this.r.t(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.aw()
return}H.b(b===1)
t=this.cx
if(t==null){t=P.i0(null,null)
this.cx=t}t.M(0,this.gem())},
eg:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.Y(a)
if(b!=null)P.Y(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.b1(a)
s[1]=b==null?null:b.k(0)
for(r=new P.bm(t,t.r,null,null,[null]),r.c=t.e;r.m();)r.d.B(0,s)},
ac:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.H(o)
p=H.ag(o)
this.eg(q,p)
if(this.db){this.aw()
if(this===u.globalState.e)throw o}}finally{this.cy=H.lX(r)
u.globalState.d=H.iq(t,"$isaS")
if(t!=null)$=t.gek()
if(this.cx!=null)for(;n=this.cx,!n.gag(n);)this.cx.bZ().$0()}return s},
bX:function(a){return this.b.h(0,a)},
df:function(a,b){var t=this.b
if(t.D(0,a))throw H.c(P.bO("Registry: ports must be registered only once."))
t.j(0,a,b)},
aS:function(){var t=this.b
if(t.gi(t)-this.c.a>0||this.y||!this.x)u.globalState.z.j(0,this.a,this)
else this.aw()},
aw:function(){var t,s,r
t=this.cx
if(t!=null)t.O(0)
for(t=this.b,s=t.gcg(t),s=s.gu(s);s.m();)s.gn(s).dg()
t.O(0)
this.c.O(0)
u.globalState.z.ai(0,this.a)
this.dx.O(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].B(0,t[r+1])
this.ch=null}},
gek:function(){return this.d},
gdY:function(){return this.e}}
H.fK.prototype={
$0:function(){this.a.B(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.ft.prototype={
e3:function(){var t=this.a
if(t.b===t.c)return
return t.bZ()},
c1:function(){var t,s,r
t=this.e3()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.D(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gag(s)}else s=!1
else s=!1
else s=!1
if(s)H.F(P.bO("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gag(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.ad(["command","close"])
r=new H.W(!0,P.aT(null,P.w)).E(r)
s.toString
self.postMessage(r)}return!1}t.er()
return!0},
bw:function(){if(self.window!=null)new H.fu(this).$0()
else for(;this.c1(););},
aj:function(){var t,s,r,q,p
if(!u.globalState.x)this.bw()
else try{this.bw()}catch(r){t=H.H(r)
s=H.ag(r)
q=u.globalState.Q
p=P.ad(["command","error","msg",H.e(t)+"\n"+H.e(s)])
p=new H.W(!0,P.aT(null,P.w)).E(p)
q.toString
self.postMessage(p)}}}
H.fu.prototype={
$0:function(){if(!this.a.c1())return
P.lv(C.w,this)},
$S:function(){return{func:1,v:true}}}
H.aD.prototype={
er:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.ac(this.b)}}
H.fP.prototype={}
H.dS.prototype={
$0:function(){H.l6(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.dT.prototype={
$0:function(){var t,s
t=this.a
t.x=!0
if(!this.b)this.c.$1(this.d)
else{s=this.c
if(H.aY(s,{func:1,args:[P.I,P.I]}))s.$2(this.e,this.d)
else if(H.aY(s,{func:1,args:[P.I]}))s.$1(this.e)
else s.$0()}t.aS()},
$S:function(){return{func:1,v:true}}}
H.fo.prototype={}
H.aU.prototype={
B:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.lL(b)
if(t.gdY()===s){s=J.P(r)
switch(s.h(r,0)){case"pause":t.bB(s.h(r,1),s.h(r,2))
break
case"resume":t.ev(s.h(r,1))
break
case"add-ondone":t.dJ(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.eu(s.h(r,1))
break
case"set-errors-fatal":t.cB(s.h(r,1),s.h(r,2))
break
case"ping":t.ef(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.ee(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.ai(0,s)
break}return}u.globalState.f.a.M(0,new H.aD(t,new H.fR(this,r),"receive"))},
t:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.aU){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gq:function(a){return this.b.a}}
H.fR.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dd(0,this.b)},
$S:function(){return{func:1}}}
H.bx.prototype={
B:function(a,b){var t,s,r
t=P.ad(["command","message","port",this,"msg",b])
s=new H.W(!0,P.aT(null,P.w)).E(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
t:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bx){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gq:function(a){return C.b.cM((this.b<<16^this.a<<8)>>>0,this.c)}}
H.cd.prototype={
dg:function(){this.c=!0
this.b=null},
dd:function(a,b){if(this.c)return
this.b.$1(b)},
$islm:1}
H.f0.prototype={
d1:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.M(0,new H.aD(s,new H.f1(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){H.hf()
this.c=self.setTimeout(H.bB(new H.f2(this,b),0),a)}else{H.b(a>0)
throw H.c(P.t("Timer greater than 0."))}}}
H.f1.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.f2.prototype={
$0:function(){var t=this.a
t.c=null
H.ht()
t.d=1
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.al.prototype={
gq:function(a){var t=this.a
t=C.b.aQ(t,0)^C.b.C(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
t:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.al){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.W.prototype={
E:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.j(0,a,t.gi(t))
t=J.u(a)
if(!!t.$isbc)return["buffer",a]
if(!!t.$isav)return["typed",a]
if(!!t.$iso)return this.cv(a)
if(!!t.$isl3){r=this.gcs()
q=t.gA(a)
q=H.i1(q,r,H.X(q,"M",0),null)
q=P.j5(q,!0,H.X(q,"M",0))
t=t.gcg(a)
t=H.i1(t,r,H.X(t,"M",0),null)
return["map",q,P.j5(t,!0,H.X(t,"M",0))]}if(!!t.$islc)return this.cw(a)
if(!!t.$isa)this.ce(a)
if(!!t.$islm)this.ak(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isaU)return this.cz(a)
if(!!t.$isbx)return this.cA(a)
if(!!t.$isan){p=a.$static_name
if(p==null)this.ak(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isal)return["capability",a.a]
if(!(a instanceof P.B))this.ce(a)
return["dart",u.classIdExtractor(a),this.cu(u.classFieldsExtractor(a))]},
ak:function(a,b){throw H.c(P.t((b==null?"Can't transmit:":b)+" "+H.e(a)))},
ce:function(a){return this.ak(a,null)},
cv:function(a){var t
H.b(typeof a!=="string")
t=this.ct(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.ak(a,"Can't serialize indexable: ")},
ct:function(a){var t,s
t=[]
C.a.si(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.E(a[s])
return t},
cu:function(a){var t
for(t=0;t<a.length;++t)C.a.j(a,t,this.E(a[t]))
return a},
cw:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.ak(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.si(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.E(a[t[r]])
return["js-object",t,s]},
cA:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cz:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.aC.prototype={
P:function(a){var t,s,r,q
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.c(P.iJ("Bad serialized message: "+H.e(a)))
switch(C.a.geb(a)){case"ref":H.b(J.A(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.b(J.A(a[0],"buffer"))
t=a[1]
C.a.l(this.b,t)
return t
case"typed":H.b(J.A(a[0],"typed"))
t=a[1]
C.a.l(this.b,t)
return t
case"fixed":H.b(J.A(a[0],"fixed"))
t=a[1]
C.a.l(this.b,t)
return J.aq(H.z(this.ab(t),[null]))
case"extendable":H.b(J.A(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.z(this.ab(t),[null])
case"mutable":H.b(J.A(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.ab(t)
case"const":H.b(J.A(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
return J.aq(H.z(this.ab(t),[null]))
case"map":return this.e6(a)
case"sendport":return this.e7(a)
case"raw sendport":H.b(J.A(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.e5(a)
case"function":H.b(J.A(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.b(J.A(a[0],"capability"))
return new H.al(a[1])
case"dart":H.b(J.A(a[0],"dart"))
s=a[1]
r=a[2]
q=u.instanceFromClassId(s)
C.a.l(this.b,q)
this.ab(r)
return u.initializeEmptyInstance(s,q,r)
default:throw H.c("couldn't deserialize: "+H.e(a))}},
ab:function(a){var t
for(t=0;t<a.length;++t)C.a.j(a,t,this.P(a[t]))
return a},
e6:function(a){var t,s,r,q,p
H.b(J.A(a[0],"map"))
t=a[1]
s=a[2]
r=P.U()
C.a.l(this.b,r)
t=J.kr(t,this.ge4()).eC(0)
for(q=J.P(s),p=0;p<t.length;++p)r.j(0,t[p],this.P(q.h(s,p)))
return r},
e7:function(a){var t,s,r,q,p,o,n
H.b(J.A(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.bX(r)
if(o==null)return
n=new H.aU(o,s)}else n=new H.bx(t,r,s)
C.a.l(this.b,n)
return n},
e5:function(a){var t,s,r,q,p,o
H.b(J.A(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.P(t),p=J.P(s),o=0;o<q.gi(t);++o)r[q.h(t,o)]=this.P(p.h(s,o))
return r}}
H.ey.prototype={}
H.f6.prototype={
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
H.ek.prototype={
k:function(a){var t=this.b
if(t==null)return"NullError: "+H.e(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.dY.prototype={
k:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.e(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.e(this.a)+")"}}
H.fb.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.hF.prototype={
$1:function(a){if(!!J.u(a).$isaJ)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(a){return{func:1,args:[,]}}}
H.cT.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t},
$isaP:1}
H.hn.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.ho.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.hp.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.hq.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.hr.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.an.prototype={
k:function(a){return"Closure '"+H.bf(this).trim()+"'"},
$ishT:1,
geJ:function(){return this},
$D:null}
H.eX.prototype={}
H.eL.prototype={
k:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.b2.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.b2))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gq:function(a){var t,s
t=this.c
if(t==null)s=H.aw(this.a)
else s=typeof t!=="object"?J.b_(t):H.aw(t)
return(s^H.aw(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.bf(t)+"'")}}
H.f8.prototype={
k:function(a){return this.a}}
H.ds.prototype={
k:function(a){return this.a}}
H.eC.prototype={
k:function(a){return"RuntimeError: "+H.e(this.a)}}
H.fi.prototype={
k:function(a){return C.k.R("Assertion failed: ",P.bN(this.a))}}
H.cr.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gq:function(a){return J.b_(this.a)},
t:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.cr){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.a1.prototype={
gi:function(a){return this.a},
gag:function(a){return this.a===0},
gA:function(a){return new H.e0(this,[H.ah(this,0)])},
gcg:function(a){return H.i1(this.gA(this),new H.dX(this),H.ah(this,0),H.ah(this,1))},
D:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bp(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bp(s,b)}else return this.eh(b)},
eh:function(a){var t=this.d
if(t==null)return!1
return this.af(this.at(t,this.ae(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.a8(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.a8(r,b)
return s==null?null:s.b}else return this.ei(b)},
ei:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.at(t,this.ae(a))
r=this.af(s,a)
if(r<0)return
return s[r].b},
j:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aM()
this.b=t}this.bj(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aM()
this.c=s}this.bj(s,b,c)}else{r=this.d
if(r==null){r=this.aM()
this.d=r}q=this.ae(b)
p=this.at(r,q)
if(p==null)this.aP(r,q,[this.aN(b,c)])
else{o=this.af(p,b)
if(o>=0)p[o].b=c
else p.push(this.aN(b,c))}}},
ai:function(a,b){if(typeof b==="string")return this.bv(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bv(this.c,b)
else return this.ej(b)},
ej:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.at(t,this.ae(a))
r=this.af(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bz(q)
return q.b},
O:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aL()}},
ad:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.c(P.ab(this))
t=t.c}},
bj:function(a,b,c){var t=this.a8(a,b)
if(t==null)this.aP(a,b,this.aN(b,c))
else t.b=c},
bv:function(a,b){var t
if(a==null)return
t=this.a8(a,b)
if(t==null)return
this.bz(t)
this.bq(a,b)
return t.b},
aL:function(){this.r=this.r+1&67108863},
aN:function(a,b){var t,s
t=new H.e_(a,b,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.aL()
return t},
bz:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.aL()},
ae:function(a){return J.b_(a)&0x3ffffff},
af:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.A(a[s].a,b))return s
return-1},
k:function(a){return P.j6(this)},
a8:function(a,b){return a[b]},
at:function(a,b){return a[b]},
aP:function(a,b,c){H.b(c!=null)
a[b]=c},
bq:function(a,b){delete a[b]},
bp:function(a,b){return this.a8(a,b)!=null},
aM:function(){var t=Object.create(null)
this.aP(t,"<non-identifier-key>",t)
this.bq(t,"<non-identifier-key>")
return t},
$isl3:1}
H.dX.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(a){return{func:1,args:[,]}}}
H.e_.prototype={}
H.e0.prototype={
gi:function(a){return this.a.a},
gu:function(a){var t,s
t=this.a
s=new H.e1(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.e1.prototype={
gn:function(a){return this.d},
m:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.ab(t))
else{t=this.c
if(t==null){this.sbi(null)
return!1}else{this.sbi(t.a)
this.c=this.c.c
return!0}}},
sbi:function(a){this.d=a}}
H.hj.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[,]}}}
H.hk.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(a,b){return{func:1,args:[,P.p]}}}
H.hl.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[P.p]}}}
H.bc.prototype={$isbc:1}
H.av.prototype={$isav:1}
H.c3.prototype={
gi:function(a){return a.length},
$iso:1,
$aso:function(){},
$isr:1,
$asr:function(){}}
H.bd.prototype={
h:function(a,b){H.a8(b,a,a.length)
return a[b]},
j:function(a,b,c){H.a8(b,a,a.length)
a[b]=c},
$isj:1,
$asj:function(){return[P.O]},
$asaK:function(){return[P.O]},
$asm:function(){return[P.O]},
$isk:1,
$ask:function(){return[P.O]}}
H.c4.prototype={
j:function(a,b,c){H.a8(b,a,a.length)
a[b]=c},
$isj:1,
$asj:function(){return[P.w]},
$asaK:function(){return[P.w]},
$asm:function(){return[P.w]},
$isk:1,
$ask:function(){return[P.w]}}
H.c2.prototype={$ishS:1}
H.ec.prototype={
h:function(a,b){H.a8(b,a,a.length)
return a[b]}}
H.ed.prototype={
h:function(a,b){H.a8(b,a,a.length)
return a[b]},
$isl2:1}
H.ee.prototype={
h:function(a,b){H.a8(b,a,a.length)
return a[b]}}
H.ef.prototype={
h:function(a,b){H.a8(b,a,a.length)
return a[b]},
$islw:1}
H.eg.prototype={
h:function(a,b){H.a8(b,a,a.length)
return a[b]},
$islx:1}
H.c5.prototype={
gi:function(a){return a.length},
h:function(a,b){H.a8(b,a,a.length)
return a[b]}}
H.eh.prototype={
gi:function(a){return a.length},
h:function(a,b){H.a8(b,a,a.length)
return a[b]},
$isly:1}
H.bo.prototype={}
H.bp.prototype={}
H.bq.prototype={}
H.br.prototype={}
P.fk.prototype={
$1:function(a){var t,s
H.ht()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(a){return{func:1,args:[,]}}}
P.fj.prototype={
$1:function(a){var t,s
t=this.a
H.b(t.a==null)
H.hf()
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(a){return{func:1,args:[{func:1,v:true}]}}}
P.fl.prototype={
$0:function(){H.ht()
this.a.$0()},
$S:function(){return{func:1}}}
P.fm.prototype={
$0:function(){H.ht()
this.a.$0()},
$S:function(){return{func:1}}}
P.hP.prototype={}
P.fp.prototype={}
P.h2.prototype={
dW:function(a,b){var t=this.a
if(t.a!==0)throw H.c(P.i4("Future already completed"))
t.aH(b)}}
P.cB.prototype={
ep:function(a){if(this.c!==6)return!0
H.b(!0)
return this.b.b.aZ(this.d,a.a)},
ed:function(a){var t,s
t=(this.c&2)!==0
if(t){H.b(t)
t=this.e!=null}else t=!1
H.b(t)
s=this.e
t=this.b.b
if(H.aY(s,{func:1,args:[P.B,P.aP]}))return t.ex(s,a.a,a.b)
else return t.aZ(s,a.a)}}
P.a7.prototype={
c3:function(a,b){var t,s,r
t=$.y
if(t!==C.h){t.toString
if(b!=null)b=P.lP(b,t)}s=new P.a7(0,t,null,[null])
r=b==null?1:3
this.bk(new P.cB(null,s,r,a,b,[H.ah(this,0),null]))
return s},
c2:function(a){return this.c3(a,null)},
aD:function(a){H.b(this.a<4)
H.b(a.a>=4)
this.a=a.a
this.c=a.c},
bk:function(a){var t
H.b(a.a==null)
t=this.a
if(t<=1){a.a=H.iq(this.c,"$iscB")
this.c=a}else{if(t===2){H.b(!0)
t=this.c
if(t.a<4){t.bk(a)
return}this.aD(t)}H.b(this.a>=4)
t=this.b
t.toString
P.ha(null,null,t,new P.fz(this,a))}},
bu:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.b(!0)
s=this.c
if(s.a<4){s.bu(a)
return}this.aD(s)}H.b(this.a>=4)
t.a=this.au(a)
s=this.b
s.toString
P.ha(null,null,s,new P.fD(t,this))}},
aO:function(){H.b(this.a<4)
var t=this.c
this.c=null
return this.au(t)},
au:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aH:function(a){var t,s,r
H.b(this.a<4)
t=this.$ti
s=H.ij(a,"$isdN",t,"$asdN")
if(s){t=H.ij(a,"$isa7",t,null)
if(t)P.jt(a,this)
else P.lG(a,this)}else{r=this.aO()
H.b(this.a<4)
this.a=4
this.c=a
P.bk(this,r)}},
aq:function(a,b){var t
H.b(this.a<4)
t=this.aO()
H.b(this.a<4)
this.a=8
this.c=new P.aG(a,b)
P.bk(this,t)},
di:function(a){return this.aq(a,null)},
$isdN:1,
gaR:function(){return this.a},
gdB:function(){return this.c}}
P.fz.prototype={
$0:function(){P.bk(this.a,this.b)},
$S:function(){return{func:1}}}
P.fD.prototype={
$0:function(){P.bk(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.fA.prototype={
$1:function(a){var t=this.a
H.b(t.a===1)
H.b(t.a===1)
t.a=0
t.aH(a)},
$S:function(a){return{func:1,args:[,]}}}
P.fB.prototype={
$2:function(a,b){var t=this.a
H.b(t.a===1)
t.aq(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(a,b){return{func:1,args:[,],opt:[,]}}}
P.fC.prototype={
$0:function(){this.a.aq(this.b,this.c)},
$S:function(){return{func:1}}}
P.fG.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.c
p=q.c
H.b((p&1)===0)
o=(p&2)===0
H.b(o)
t=null
try{H.b(o)
H.b(p===8)
t=q.b.b.c0(q.d)}catch(n){s=H.H(n)
r=H.ag(n)
if(this.d){q=this.a.a
H.b(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.b(q.a===8)
p.b=q.c}else p.b=new P.aG(s,r)
p.a=!0
return}if(!!J.u(t).$isdN){if(t instanceof P.a7&&t.gaR()>=4){if(t.gaR()===8){q=t
H.b(q.gaR()===8)
p=this.b
p.b=q.gdB()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.c2(new P.fH(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.fH.prototype={
$1:function(a){return this.a},
$S:function(a){return{func:1,args:[,]}}}
P.fF.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.b((r.c&1)!==0)
this.a.b=r.b.b.aZ(r.d,this.c)}catch(q){t=H.H(q)
s=H.ag(q)
r=this.a
r.b=new P.aG(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.fE.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.b(q.a===8)
t=q.c
q=this.c
if(q.ep(t)){H.b((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.ed(t)
p.a=!1}}catch(o){s=H.H(o)
r=H.ag(o)
q=this.a
p=q.a
H.b(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.b(q.a===8)
m.b=q.c}else m.b=new P.aG(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.ct.prototype={}
P.eQ.prototype={
gi:function(a){var t,s
t={}
s=new P.a7(0,$.y,null,[P.w])
t.a=0
this.en(new P.eS(t),!0,new P.eT(t,s),s.gdh())
return s}}
P.eS.prototype={
$1:function(a){++this.a.a},
$S:function(a){return{func:1,args:[,]}}}
P.eT.prototype={
$0:function(){this.b.aH(this.a.a)},
$S:function(){return{func:1}}}
P.eR.prototype={}
P.i5.prototype={}
P.aG.prototype={
k:function(a){return H.e(this.a)},
$isaJ:1}
P.h6.prototype={}
P.h9.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.c9()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.c(t)
r=H.c(t)
r.stack=s.k(0)
throw r},
$S:function(){return{func:1}}}
P.fT.prototype={
ey:function(a){var t,s,r
try{if(C.h===$.y){a.$0()
return}P.jz(null,null,this,a)}catch(r){t=H.H(r)
s=H.ag(r)
P.h8(null,null,this,t,s)}},
ez:function(a,b){var t,s,r
try{if(C.h===$.y){a.$1(b)
return}P.jA(null,null,this,a,b)}catch(r){t=H.H(r)
s=H.ag(r)
P.h8(null,null,this,t,s)}},
dQ:function(a){return new P.fV(this,a)},
aT:function(a){return new P.fU(this,a)},
dR:function(a){return new P.fW(this,a)},
h:function(a,b){return},
c0:function(a){if($.y===C.h)return a.$0()
return P.jz(null,null,this,a)},
aZ:function(a,b){if($.y===C.h)return a.$1(b)
return P.jA(null,null,this,a,b)},
ex:function(a,b,c){if($.y===C.h)return a.$2(b,c)
return P.lQ(null,null,this,a,b,c)}}
P.fV.prototype={
$0:function(){return this.a.c0(this.b)},
$S:function(){return{func:1}}}
P.fU.prototype={
$0:function(){return this.a.ey(this.b)},
$S:function(){return{func:1}}}
P.fW.prototype={
$1:function(a){return this.a.ez(this.b,a)},
$S:function(a){return{func:1,args:[,]}}}
P.fN.prototype={
ae:function(a){return H.mm(a)&0x3ffffff},
af:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.fL.prototype={
gu:function(a){var t=new P.bm(this,this.r,null,null,[null])
t.c=this.e
return t},
gi:function(a){return this.a},
w:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dj(b)},
dj:function(a){var t=this.d
if(t==null)return!1
return this.as(t[this.ar(a)],a)>=0},
bX:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.w(0,a)?a:null
else return this.dt(a)},
dt:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.ar(a)]
r=this.as(s,a)
if(r<0)return
return J.iv(s,r).gdl()},
l:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.ie()
this.b=t}return this.bm(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.ie()
this.c=s}return this.bm(s,b)}else return this.M(0,b)},
M:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.ie()
this.d=t}s=this.ar(b)
r=t[s]
if(r==null){q=[this.aG(b)]
H.b(q!=null)
t[s]=q}else{if(this.as(r,b)>=0)return!1
r.push(this.aG(b))}return!0},
ai:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bn(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bn(this.c,b)
else return this.du(0,b)},
du:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.ar(b)]
r=this.as(s,b)
if(r<0)return!1
this.bo(s.splice(r,1)[0])
return!0},
O:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aF()}},
bm:function(a,b){var t
if(a[b]!=null)return!1
t=this.aG(b)
H.b(!0)
a[b]=t
return!0},
bn:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bo(t)
delete a[b]
return!0},
aF:function(){this.r=this.r+1&67108863},
aG:function(a){var t,s
t=new P.fM(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.aF()
return t},
bo:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.aF()},
ar:function(a){return J.b_(a)&0x3ffffff},
as:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.A(a[s].a,b))return s
return-1}}
P.fM.prototype={
gdl:function(){return this.a}}
P.bm.prototype={
gn:function(a){return this.d},
m:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.ab(t))
else{t=this.c
if(t==null){this.sa6(null)
return!1}else{this.sa6(t.a)
this.c=this.c.b
return!0}}},
sa6:function(a){this.d=a}}
P.fJ.prototype={}
P.hZ.prototype={$isj:1}
P.bY.prototype={$isj:1,$isk:1}
P.m.prototype={
gu:function(a){return new H.bZ(a,this.gi(a),0,null,[H.X(a,"m",0)])},
p:function(a,b){return this.h(a,b)},
bY:function(a,b){return new H.b9(a,b,[H.X(a,"m",0),null])},
ec:function(a,b,c){var t,s,r
t=this.gi(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gi(a))throw H.c(P.ab(a))}return s},
k:function(a){return P.dU(a,"[","]")}}
P.c_.prototype={}
P.e4.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.e(a)
t.a=s+": "
t.a+=H.e(b)},
$S:function(a,b){return{func:1,args:[,,]}}}
P.aO.prototype={
ad:function(a,b){var t,s
for(t=J.aF(this.gA(a));t.m();){s=t.gn(t)
b.$2(s,this.h(a,s))}},
gi:function(a){return J.b0(this.gA(a))},
k:function(a){return P.j6(a)}}
P.e2.prototype={
cX:function(a,b){var t
H.b(!0)
t=new Array(8)
t.fixed$length=Array
this.sbx(H.z(t,[b]))},
gu:function(a){return new P.fO(this,this.c,this.d,this.b,null,this.$ti)},
gag:function(a){return this.b===this.c},
gi:function(a){return(this.c-this.b&this.a.length-1)>>>0},
p:function(a,b){var t,s
t=this.gi(this)
if(0>b||b>=t)H.F(P.x(b,this,"index",null,t))
s=this.a
return s[(this.b+b&s.length-1)>>>0]},
O:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
k:function(a){return P.dU(this,"{","}")},
bZ:function(){var t,s,r
t=this.b
if(t===this.c)throw H.c(H.dV());++this.d
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
if(this.b===t)this.bs();++this.d},
bs:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.z(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.b5(s,0,q,t,r)
C.a.b5(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbx(s)},
sbx:function(a){this.a=a}}
P.fO.prototype={
gn:function(a){return this.e},
m:function(){var t,s
t=this.a
if(this.c!==t.d)H.F(P.ab(t))
s=this.d
if(s===this.b){this.sa6(null)
return!1}this.sa6(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sa6:function(a){this.e=a}}
P.eF.prototype={
G:function(a,b){var t
for(t=J.aF(b);t.m();)this.l(0,t.gn(t))},
k:function(a){return P.dU(this,"{","}")},
$isj:1}
P.eE.prototype={}
P.bn.prototype={}
P.af.prototype={}
P.E.prototype={}
P.b3.prototype={
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.b3))return!1
return this.a===b.a&&this.b===b.b},
K:function(a,b){return C.b.K(this.a,b.a)},
gq:function(a){var t=this.a
return(t^C.b.aQ(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.kN(H.ll(this))
s=P.bI(H.lj(this))
r=P.bI(H.lf(this))
q=P.bI(H.lg(this))
p=P.bI(H.li(this))
o=P.bI(H.lk(this))
n=P.kO(H.lh(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isE:1,
$asE:function(){return[P.b3]}}
P.O.prototype={}
P.ao.prototype={
U:function(a,b){return C.b.U(this.a,b.gdk())},
aA:function(a,b){return C.b.aA(this.a,b.gdk())},
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.ao))return!1
return this.a===b.a},
gq:function(a){return this.a&0x1FFFFFFF},
K:function(a,b){return C.b.K(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.dF()
s=this.a
if(s<0)return"-"+new P.ao(0-s).k(0)
r=t.$1(C.b.C(s,6e7)%60)
q=t.$1(C.b.C(s,1e6)%60)
p=new P.dE().$1(s%1e6)
return""+C.b.C(s,36e8)+":"+H.e(r)+":"+H.e(q)+"."+H.e(p)},
$isE:1,
$asE:function(){return[P.ao]}}
P.dE.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(a){return{func:1,ret:P.p,args:[P.w]}}}
P.dF.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(a){return{func:1,ret:P.p,args:[P.w]}}}
P.aJ.prototype={}
P.bF.prototype={
k:function(a){return"Assertion failed"}}
P.c9.prototype={
k:function(a){return"Throw of null."}}
P.a_.prototype={
gaJ:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaI:function(){return""},
k:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.e(t)
q=this.gaJ()+s+r
if(!this.a)return q
p=this.gaI()
o=P.bN(this.b)
return q+p+": "+H.e(o)}}
P.cc.prototype={
gaJ:function(){return"RangeError"},
gaI:function(){var t,s,r
H.b(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.e(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.e(t)
else if(r>t)s=": Not in range "+H.e(t)+".."+H.e(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.e(t)}return s}}
P.dR.prototype={
gaJ:function(){return"RangeError"},
gaI:function(){H.b(this.a)
if(J.k2(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.e(t)},
gi:function(a){return this.f}}
P.fc.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.fa.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.aQ.prototype={
k:function(a){return"Bad state: "+this.a}}
P.du.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.e(P.bN(t))+"."}}
P.ci.prototype={
k:function(a){return"Stack Overflow"},
$isaJ:1}
P.dz.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.hR.prototype={}
P.fy.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.e(t)}}
P.dI.prototype={
h:function(a,b){var t,s
t=this.a
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.F(P.iK(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.j9(b,"expando$values")
return s==null?null:H.j9(s,t)},
k:function(a){return"Expando:"+H.e(this.b)}}
P.w.prototype={}
P.M.prototype={
ax:function(a,b){return new H.cs(this,b,[H.X(this,"M",0)])},
gi:function(a){var t,s
H.b(!this.$isj)
t=this.gu(this)
for(s=0;t.m();)++s
return s},
gV:function(a){var t,s
t=this.gu(this)
if(!t.m())throw H.c(H.dV())
s=t.gn(t)
if(t.m())throw H.c(H.lb())
return s},
p:function(a,b){var t,s,r
if(b<0)H.F(P.ax(b,0,null,"index",null))
for(t=this.gu(this),s=0;t.m();){r=t.gn(t)
if(b===s)return r;++s}throw H.c(P.x(b,this,"index",null,s))},
k:function(a){return P.l9(this,"(",")")}}
P.bU.prototype={}
P.k.prototype={$isj:1}
P.aN.prototype={}
P.I.prototype={
gq:function(a){return P.B.prototype.gq.call(this,this)},
k:function(a){return"null"}}
P.aa.prototype={$isE:1,
$asE:function(){return[P.aa]}}
P.B.prototype={constructor:P.B,$isB:1,
t:function(a,b){return this===b},
gq:function(a){return H.aw(this)},
k:function(a){return"Instance of '"+H.bf(this)+"'"},
toString:function(){return this.k(this)}}
P.aP.prototype={}
P.p.prototype={$isE:1,
$asE:function(){return[P.p]}}
P.bh.prototype={
gi:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
gX:function(){return this.a}}
W.i.prototype={}
W.dj.prototype={
gi:function(a){return a.length}}
W.dk.prototype={
k:function(a){return String(a)}}
W.dl.prototype={
k:function(a){return String(a)}}
W.ak.prototype={$isak:1}
W.bG.prototype={
co:function(a,b,c){var t=this.dn(a,b,P.m_(c,null))
return t},
dn:function(a,b,c){return a.getContext(b,c)}}
W.dr.prototype={
az:function(a){return P.hc(a.getContextAttributes())}}
W.am.prototype={
gi:function(a){return a.length}}
W.dv.prototype={
gi:function(a){return a.length}}
W.aI.prototype={
bl:function(a,b){var t,s
t=$.$get$iS()
s=t[b]
if(typeof s==="string")return s
s=this.dF(a,b)
t[b]=s
return s},
dF:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.kP()+b
if(t in a)return t
return b},
gi:function(a){return a.length}}
W.dw.prototype={}
W.R.prototype={}
W.a0.prototype={}
W.dx.prototype={
gi:function(a){return a.length}}
W.dy.prototype={
gi:function(a){return a.length}}
W.dA.prototype={
h:function(a,b){return a[b]},
gi:function(a){return a.length}}
W.bJ.prototype={}
W.b4.prototype={
dK:function(a,b){return a.adoptNode(b)},
cp:function(a,b){return a.getElementById(b)},
a0:function(a,b){return a.querySelector(b)}}
W.dB.prototype={
k:function(a){return String(a)}}
W.bK.prototype={
e0:function(a,b){return a.createHTMLDocument(b)}}
W.bL.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[P.N]},
$isj:1,
$asj:function(){return[P.N]},
$isr:1,
$asr:function(){return[P.N]},
$asm:function(){return[P.N]},
$isk:1,
$ask:function(){return[P.N]},
$asn:function(){return[P.N]}}
W.bM.prototype={
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.ga2(a))+" x "+H.e(this.gZ(a))},
t:function(a,b){var t
if(b==null)return!1
t=J.u(b)
if(!t.$isN)return!1
return a.left===t.gbV(b)&&a.top===t.gc4(b)&&this.ga2(a)===t.ga2(b)&&this.gZ(a)===t.gZ(b)},
gq:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.ga2(a)
q=this.gZ(a)
return W.jx(W.aE(W.aE(W.aE(W.aE(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gZ:function(a){return a.height},
gbV:function(a){return a.left},
gc4:function(a){return a.top},
ga2:function(a){return a.width},
$isN:1,
$asN:function(){}}
W.dC.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[P.p]},
$isj:1,
$asj:function(){return[P.p]},
$isr:1,
$asr:function(){return[P.p]},
$asm:function(){return[P.p]},
$isk:1,
$ask:function(){return[P.p]},
$asn:function(){return[P.p]}}
W.dD.prototype={
gi:function(a){return a.length}}
W.T.prototype={
gdN:function(a){return new W.fs(a)},
k:function(a){return a.localName},
H:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.j_
if(t==null){t=H.z([],[W.c7])
s=new W.c8(t)
C.a.l(t,W.ju(null))
C.a.l(t,W.jy())
$.j_=s
d=s}else d=t
t=$.iZ
if(t==null){t=new W.d2(d)
$.iZ=t
c=t}else{t.a=d
c=t}}if($.ac==null){t=document
s=t.implementation
s=(s&&C.J).e0(s,"")
$.ac=s
$.hQ=s.createRange()
s=$.ac
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.ac.head;(t&&C.K).J(t,r)}t=$.ac
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.iq(s,"$isak")}t=$.ac
if(!!this.$isak)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.ac.body;(t&&C.p).J(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.w(C.U,a.tagName)){t=$.hQ;(t&&C.C).cr(t,q)
t=$.hQ
p=(t&&C.C).dZ(t,b)}else{q.innerHTML=b
p=$.ac.createDocumentFragment()
for(t=J.l(p);s=q.firstChild,s!=null;)t.J(p,s)}t=$.ac.body
if(q==null?t!=null:q!==t)J.iD(q)
c.b4(p)
C.j.dK(document,p)
return p},
e_:function(a,b,c){return this.H(a,b,c,null)},
cD:function(a,b,c,d){a.textContent=null
this.J(a,this.H(a,b,c,d))},
cC:function(a,b){return this.cD(a,b,null,null)},
a3:function(a,b){return a.getAttribute(b)},
dv:function(a,b){return a.removeAttribute(b)},
$isT:1,
geB:function(a){return a.tagName}}
W.dH.prototype={
$1:function(a){return!!J.u(a).$isT},
$S:function(a){return{func:1,args:[,]}}}
W.f.prototype={$isf:1}
W.d.prototype={
de:function(a,b,c,d){return a.addEventListener(b,H.bB(c,1),!1)}}
W.dK.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.bP]},
$isj:1,
$asj:function(){return[W.bP]},
$isr:1,
$asr:function(){return[W.bP]},
$asm:function(){return[W.bP]},
$isk:1,
$ask:function(){return[W.bP]},
$asn:function(){return[W.bP]}}
W.dL.prototype={
gi:function(a){return a.length}}
W.dM.prototype={
gi:function(a){return a.length}}
W.bS.prototype={}
W.dP.prototype={
gi:function(a){return a.length}}
W.b6.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.q]},
$isj:1,
$asj:function(){return[W.q]},
$isr:1,
$asr:function(){return[W.q]},
$asm:function(){return[W.q]},
$isk:1,
$ask:function(){return[W.q]},
$asn:function(){return[W.q]}}
W.bT.prototype={}
W.dQ.prototype={
B:function(a,b){return a.send(b)}}
W.b7.prototype={}
W.at.prototype={$isat:1}
W.e3.prototype={
k:function(a){return String(a)}}
W.e7.prototype={
gi:function(a){return a.length}}
W.e9.prototype={
eK:function(a,b,c){return a.send(b,c)},
B:function(a,b){return a.send(b)}}
W.bb.prototype={}
W.ea.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.c1]},
$isj:1,
$asj:function(){return[W.c1]},
$isr:1,
$asr:function(){return[W.c1]},
$asm:function(){return[W.c1]},
$isk:1,
$ask:function(){return[W.c1]},
$asn:function(){return[W.c1]}}
W.G.prototype={$isG:1}
W.K.prototype={
gV:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.c(P.i4("No elements"))
if(s>1)throw H.c(P.i4("More than one element"))
return t.firstChild},
G:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.l(s),p=0;p<r;++p)q.J(s,t.firstChild)
return},
j:function(a,b,c){var t=this.a
J.k4(t,c,C.A.h(t.childNodes,b))},
gu:function(a){var t=this.a.childNodes
return new W.bQ(t,t.length,-1,null,[H.X(t,"n",0)])},
gi:function(a){return this.a.childNodes.length},
h:function(a,b){return C.A.h(this.a.childNodes,b)},
$asj:function(){return[W.q]},
$asbY:function(){return[W.q]},
$asm:function(){return[W.q]},
$ask:function(){return[W.q]},
$asbn:function(){return[W.q]}}
W.q.prototype={
es:function(a){var t=a.parentNode
if(t!=null)J.hG(t,a)},
k:function(a){var t=a.nodeValue
return t==null?this.cI(a):t},
J:function(a,b){return a.appendChild(b)},
dw:function(a,b){return a.removeChild(b)},
dz:function(a,b,c){return a.replaceChild(b,c)},
$isq:1,
gaX:function(a){return a.previousSibling}}
W.c6.prototype={
aY:function(a){return a.previousNode()}}
W.be.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.q]},
$isj:1,
$asj:function(){return[W.q]},
$isr:1,
$asr:function(){return[W.q]},
$asm:function(){return[W.q]},
$isk:1,
$ask:function(){return[W.q]},
$asn:function(){return[W.q]}}
W.a3.prototype={
gi:function(a){return a.length}}
W.eu.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.a3]},
$isj:1,
$asj:function(){return[W.a3]},
$isr:1,
$asr:function(){return[W.a3]},
$asm:function(){return[W.a3]},
$isk:1,
$ask:function(){return[W.a3]},
$asn:function(){return[W.a3]}}
W.ew.prototype={
B:function(a,b){return a.send(b)}}
W.cb.prototype={
dZ:function(a,b){return a.createContextualFragment(b)},
cr:function(a,b){return a.selectNodeContents(b)}}
W.ce.prototype={
B:function(a,b){return a.send(b)}}
W.eD.prototype={
gi:function(a){return a.length}}
W.eH.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.cg]},
$isj:1,
$asj:function(){return[W.cg]},
$isr:1,
$asr:function(){return[W.cg]},
$asm:function(){return[W.cg]},
$isk:1,
$ask:function(){return[W.cg]},
$asn:function(){return[W.cg]}}
W.eJ.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.ch]},
$isj:1,
$asj:function(){return[W.ch]},
$isr:1,
$asr:function(){return[W.ch]},
$asm:function(){return[W.ch]},
$isk:1,
$ask:function(){return[W.ch]},
$asn:function(){return[W.ch]}}
W.a4.prototype={
gi:function(a){return a.length}}
W.eO.prototype={
h:function(a,b){return this.br(a,b)},
ad:function(a,b){var t,s
for(t=0;!0;++t){s=this.ds(a,t)
if(s==null)return
b.$2(s,this.br(a,s))}},
gA:function(a){var t=H.z([],[P.p])
this.ad(a,new W.eP(t))
return t},
gi:function(a){return a.length},
br:function(a,b){return a.getItem(b)},
ds:function(a,b){return a.key(b)},
$asaO:function(){return[P.p,P.p]}}
W.eP.prototype={
$2:function(a,b){return C.a.l(this.a,a)},
$S:function(a,b){return{func:1,args:[,,]}}}
W.ck.prototype={
H:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aB(a,b,c,d)
t=W.kW("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.K(s).G(0,new W.K(t))
return s}}
W.eV.prototype={
H:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aB(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.H.H(t.createElement("table"),b,c,d)
t.toString
t=new W.K(t)
r=t.gV(t)
r.toString
t=new W.K(r)
q=t.gV(t)
s.toString
q.toString
new W.K(s).G(0,new W.K(q))
return s}}
W.eW.prototype={
H:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aB(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.H.H(t.createElement("table"),b,c,d)
t.toString
t=new W.K(t)
r=t.gV(t)
s.toString
r.toString
new W.K(s).G(0,new W.K(r))
return s}}
W.bi.prototype={$isbi:1}
W.eY.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.cm]},
$isj:1,
$asj:function(){return[W.cm]},
$isr:1,
$asr:function(){return[W.cm]},
$asm:function(){return[W.cm]},
$isk:1,
$ask:function(){return[W.cm]},
$asn:function(){return[W.cm]}}
W.eZ.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.cl]},
$isj:1,
$asj:function(){return[W.cl]},
$isr:1,
$asr:function(){return[W.cl]},
$asm:function(){return[W.cl]},
$isk:1,
$ask:function(){return[W.cl]},
$asn:function(){return[W.cl]}}
W.f_.prototype={
gi:function(a){return a.length}}
W.ay.prototype={$isay:1}
W.f3.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.cp]},
$isj:1,
$asj:function(){return[W.cp]},
$isr:1,
$asr:function(){return[W.cp]},
$asm:function(){return[W.cp]},
$isk:1,
$ask:function(){return[W.cp]},
$asn:function(){return[W.cp]}}
W.f4.prototype={
gi:function(a){return a.length}}
W.cq.prototype={
aY:function(a){return a.previousNode()}}
W.az.prototype={}
W.fd.prototype={
k:function(a){return String(a)}}
W.fe.prototype={
gi:function(a){return a.length}}
W.ff.prototype={
B:function(a,b){return a.send(b)}}
W.aB.prototype={
ge2:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.t("deltaY is not supported"))},
$isaB:1}
W.bj.prototype={
gdM:function(a){var t,s
t=P.aa
s=new P.a7(0,$.y,null,[t])
this.dm(a)
this.dA(a,W.jD(new W.fh(new P.h2(s,[t]))))
return s},
dA:function(a,b){return a.requestAnimationFrame(H.bB(b,1))},
dm:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.fh.prototype={
$1:function(a){this.a.dW(0,a)},
$S:function(a){return{func:1,args:[,]}}}
W.i9.prototype={}
W.fq.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.bH]},
$isj:1,
$asj:function(){return[W.bH]},
$isr:1,
$asr:function(){return[W.bH]},
$asm:function(){return[W.bH]},
$isk:1,
$ask:function(){return[W.bH]},
$asn:function(){return[W.bH]}}
W.fr.prototype={
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
t:function(a,b){var t
if(b==null)return!1
t=J.u(b)
if(!t.$isN)return!1
return a.left===t.gbV(b)&&a.top===t.gc4(b)&&a.width===t.ga2(b)&&a.height===t.gZ(b)},
gq:function(a){var t,s,r,q
t=a.left
s=a.top
r=a.width
q=a.height
return W.jx(W.aE(W.aE(W.aE(W.aE(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gZ:function(a){return a.height},
ga2:function(a){return a.width}}
W.fI.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.bR]},
$isj:1,
$asj:function(){return[W.bR]},
$isr:1,
$asr:function(){return[W.bR]},
$asm:function(){return[W.bR]},
$isk:1,
$ask:function(){return[W.bR]},
$asn:function(){return[W.bR]}}
W.cI.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.q]},
$isj:1,
$asj:function(){return[W.q]},
$isr:1,
$asr:function(){return[W.q]},
$asm:function(){return[W.q]},
$isk:1,
$ask:function(){return[W.q]},
$asn:function(){return[W.q]}}
W.h_.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.a4]},
$isj:1,
$asj:function(){return[W.a4]},
$isr:1,
$asr:function(){return[W.a4]},
$asm:function(){return[W.a4]},
$isk:1,
$ask:function(){return[W.a4]},
$asn:function(){return[W.a4]}}
W.h0.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.cj]},
$isj:1,
$asj:function(){return[W.cj]},
$isr:1,
$asr:function(){return[W.cj]},
$asm:function(){return[W.cj]},
$isk:1,
$ask:function(){return[W.cj]},
$asn:function(){return[W.cj]}}
W.fn.prototype={
ad:function(a,b){var t,s,r,q,p,o
for(t=this.gA(this),s=t.length,r=this.a,q=J.l(r),p=0;p<t.length;t.length===s||(0,H.aj)(t),++p){o=t[p]
b.$2(o,q.a3(r,o))}},
gA:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.z([],[P.p])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.l(s,p.name)}return s},
$asc_:function(){return[P.p,P.p]},
$asaO:function(){return[P.p,P.p]},
gdq:function(){return this.a}}
W.fs.prototype={
h:function(a,b){return J.hM(this.a,b)},
gi:function(a){return this.gA(this).length}}
W.fv.prototype={
en:function(a,b,c,d){return W.V(this.a,this.b,a,!1,H.ah(this,0))}}
W.ic.prototype={}
W.fw.prototype={
d7:function(a,b,c,d,e){this.dH()},
dH:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.k3(r,this.c,t,!1)}}}
W.fx.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(a){return{func:1,args:[,]}}}
W.bl.prototype={
d8:function(a){var t,s
t=$.$get$id()
if(t.gag(t)){for(s=0;s<262;++s)t.j(0,C.T[s],W.m6())
for(s=0;s<12;++s)t.j(0,C.t[s],W.m7())}},
Y:function(a){return $.$get$jv().w(0,W.b5(a))},
N:function(a,b,c){var t,s,r
t=W.b5(a)
s=$.$get$id()
r=s.h(0,H.e(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)}}
W.n.prototype={
gu:function(a){return new W.bQ(a,this.gi(a),-1,null,[H.X(a,"n",0)])}}
W.c8.prototype={
Y:function(a){return C.a.bC(this.a,new W.ej(a))},
N:function(a,b,c){return C.a.bC(this.a,new W.ei(a,b,c))}}
W.ej.prototype={
$1:function(a){return a.Y(this.a)},
$S:function(a){return{func:1,args:[,]}}}
W.ei.prototype={
$1:function(a){return a.N(this.a,this.b,this.c)},
$S:function(a){return{func:1,args:[,]}}}
W.bs.prototype={
dc:function(a,b,c,d){var t,s,r
this.a.G(0,c)
t=b.ax(0,new W.fY())
s=b.ax(0,new W.fZ())
this.b.G(0,t)
r=this.c
r.G(0,C.V)
r.G(0,s)},
Y:function(a){return this.a.w(0,W.b5(a))},
N:function(a,b,c){var t,s
t=W.b5(a)
s=this.c
if(s.w(0,H.e(t)+"::"+b))return this.d.dL(c)
else if(s.w(0,"*::"+b))return this.d.dL(c)
else{s=this.b
if(s.w(0,H.e(t)+"::"+b))return!0
else if(s.w(0,"*::"+b))return!0
else if(s.w(0,H.e(t)+"::*"))return!0
else if(s.w(0,"*::*"))return!0}return!1}}
W.fY.prototype={
$1:function(a){return!C.a.w(C.t,a)},
$S:function(a){return{func:1,args:[,]}}}
W.fZ.prototype={
$1:function(a){return C.a.w(C.t,a)},
$S:function(a){return{func:1,args:[,]}}}
W.h3.prototype={
N:function(a,b,c){if(this.cL(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.hM(a,"template")==="")return this.e.w(0,b)
return!1}}
W.h4.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)},
$S:function(a){return{func:1,args:[,]}}}
W.h1.prototype={
Y:function(a){var t=J.u(a)
if(!!t.$isbg)return!1
t=!!t.$ish
if(t&&W.b5(a)==="foreignObject")return!1
if(t)return!0
return!1},
N:function(a,b,c){if(b==="is"||C.k.cF(b,"on"))return!1
return this.Y(a)}}
W.bQ.prototype={
m:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbt(J.iv(this.a,t))
this.c=t
return!0}this.sbt(null)
this.c=s
return!1},
gn:function(a){return this.d},
sbt:function(a){this.d=a}}
W.c7.prototype={}
W.i2.prototype={}
W.i8.prototype={}
W.fX.prototype={}
W.d2.prototype={
b4:function(a){new W.h5(this).$2(a,null)},
a9:function(a,b){if(b==null)J.iD(a)
else J.hG(b,a)},
dD:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.kk(a)
r=J.hM(s.gdq(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.H(n)}p="element unprintable"
try{p=J.b1(a)}catch(n){H.H(n)}try{o=W.b5(a)
this.dC(a,b,t,p,o,s,r)}catch(n){if(H.H(n) instanceof P.a_)throw n
else{this.a9(a,b)
window
m="Removing corrupted element "+H.e(p)
if(typeof console!="undefined")window.console.warn(m)}}},
dC:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.a9(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(t)
return}if(!this.a.Y(a)){this.a9(a,b)
window
t="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(t)
return}if(g!=null)if(!this.a.N(a,"is",g)){this.a9(a,b)
window
t="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(t)
return}t=f.gA(f)
s=H.z(t.slice(0),[H.ah(t,0)])
for(r=f.gA(f).length-1,t=f.a,q=J.l(t);r>=0;--r){p=s[r]
if(!this.a.N(a,J.ku(p),q.a3(t,p))){window
o="Removing disallowed attribute <"+H.e(e)+" "+p+'="'+H.e(q.a3(t,p))+'">'
if(typeof console!="undefined")window.console.warn(o)
q.a3(t,p)
q.dv(t,p)}}if(!!J.u(a).$isbi)this.b4(a.content)}}
W.h5.prototype={
$2:function(a,b){var t,s,r,q
r=this.a
switch(a.nodeType){case 1:r.dD(a,b)
break
case 8:case 11:case 3:case 4:break
default:r.a9(a,b)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.kl(t)}catch(q){H.H(q)
r=t
J.hG(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(a,b){return{func:1,v:true,args:[W.q,W.q]}}}
W.cu.prototype={}
W.cv.prototype={}
W.cw.prototype={}
W.cx.prototype={}
W.cy.prototype={}
W.cz.prototype={}
W.cA.prototype={}
W.cC.prototype={}
W.cD.prototype={}
W.cG.prototype={}
W.cH.prototype={}
W.cJ.prototype={}
W.cK.prototype={}
W.cN.prototype={}
W.cO.prototype={}
W.bt.prototype={}
W.bu.prototype={}
W.cP.prototype={}
W.cQ.prototype={}
W.cU.prototype={}
W.cX.prototype={}
W.cY.prototype={}
W.bv.prototype={}
W.bw.prototype={}
W.cZ.prototype={}
W.d_.prototype={}
W.d3.prototype={}
W.d4.prototype={}
W.d5.prototype={}
W.d6.prototype={}
W.d7.prototype={}
W.d8.prototype={}
W.d9.prototype={}
W.da.prototype={}
W.db.prototype={}
W.dc.prototype={}
P.hb.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(a,b){return{func:1,args:[,,]}}}
P.fS.prototype={}
P.N.prototype={}
P.dZ.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return this.S(a,b)},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
S:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.hY]},
$asm:function(){return[P.hY]},
$isk:1,
$ask:function(){return[P.hY]},
$asn:function(){return[P.hY]}}
P.el.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return this.S(a,b)},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
S:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.i3]},
$asm:function(){return[P.i3]},
$isk:1,
$ask:function(){return[P.i3]},
$asn:function(){return[P.i3]}}
P.ev.prototype={
gi:function(a){return a.length}}
P.bg.prototype={$isbg:1}
P.eU.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return this.S(a,b)},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
S:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.p]},
$asm:function(){return[P.p]},
$isk:1,
$ask:function(){return[P.p]},
$asn:function(){return[P.p]}}
P.h.prototype={
H:function(a,b,c,d){var t,s,r,q,p,o
t=H.z([],[W.c7])
C.a.l(t,W.ju(null))
C.a.l(t,W.jy())
C.a.l(t,new W.h1())
c=new W.d2(new W.c8(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.p).e_(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.K(q)
o=t.gV(t)
for(t=J.l(p);r=o.firstChild,r!=null;)t.J(p,r)
return p},
$ish:1}
P.f5.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return this.S(a,b)},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
S:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.i7]},
$asm:function(){return[P.i7]},
$isk:1,
$ask:function(){return[P.i7]},
$asn:function(){return[P.i7]}}
P.cE.prototype={}
P.cF.prototype={}
P.cL.prototype={}
P.cM.prototype={}
P.cV.prototype={}
P.cW.prototype={}
P.d0.prototype={}
P.d1.prototype={}
P.dn.prototype={
gi:function(a){return a.length}}
P.dp.prototype={
gi:function(a){return a.length}}
P.aH.prototype={}
P.em.prototype={
gi:function(a){return a.length}}
P.eA.prototype={
bA:function(a,b){return a.activeTexture(b)},
bD:function(a,b,c){return a.attachShader(b,c)},
bE:function(a,b,c){return a.bindBuffer(b,c)},
bF:function(a,b,c){return a.bindTexture(b,c)},
bG:function(a,b){return a.blendEquation(b)},
bH:function(a,b,c){return a.blendFunc(b,c)},
bI:function(a,b,c,d){return a.bufferData(b,c,d)},
bJ:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bK:function(a,b){return a.compileShader(b)},
bL:function(a){return a.createBuffer()},
bM:function(a){return a.createProgram()},
bN:function(a,b){return a.createShader(b)},
bO:function(a,b){return a.depthMask(b)},
bP:function(a,b){return a.disable(b)},
bQ:function(a,b,c,d){return a.drawArrays(b,c,d)},
bR:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bS:function(a,b){return a.enable(b)},
bT:function(a,b){return a.enableVertexAttribArray(b)},
az:function(a){return P.hc(a.getContextAttributes())},
b_:function(a,b){return a.getProgramInfoLog(b)},
b0:function(a,b,c){return a.getProgramParameter(b,c)},
b1:function(a,b){return a.getShaderInfoLog(b)},
b2:function(a,b,c){return a.getShaderParameter(b,c)},
b3:function(a,b,c){return a.getUniformLocation(b,c)},
bW:function(a,b){return a.linkProgram(b)},
b6:function(a,b,c){return a.shaderSource(b,c)},
b8:function(a,b,c,d){return a.stencilFunc(b,c,d)},
c5:function(a,b,c){return a.uniform1f(b,c)},
c6:function(a,b,c){return a.uniform1fv(b,c)},
c7:function(a,b,c){return a.uniform1i(b,c)},
c8:function(a,b,c){return a.uniform1iv(b,c)},
c9:function(a,b,c){return a.uniform2fv(b,c)},
ca:function(a,b,c){return a.uniform3fv(b,c)},
cb:function(a,b,c){return a.uniform4fv(b,c)},
cc:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cd:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cf:function(a,b){return a.useProgram(b)},
ci:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
ck:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.eB.prototype={
dP:function(a,b){return a.beginTransformFeedback(b)},
dS:function(a,b){return a.bindVertexArray(b)},
e1:function(a){return a.createVertexArray()},
e8:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
e9:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
ea:function(a){return a.endTransformFeedback()},
eG:function(a,b,c,d){this.dG(a,b,c,d)
return},
dG:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
eH:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bA:function(a,b){return a.activeTexture(b)},
bD:function(a,b,c){return a.attachShader(b,c)},
bE:function(a,b,c){return a.bindBuffer(b,c)},
bF:function(a,b,c){return a.bindTexture(b,c)},
bG:function(a,b){return a.blendEquation(b)},
bH:function(a,b,c){return a.blendFunc(b,c)},
bI:function(a,b,c,d){return a.bufferData(b,c,d)},
bJ:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bK:function(a,b){return a.compileShader(b)},
bL:function(a){return a.createBuffer()},
bM:function(a){return a.createProgram()},
bN:function(a,b){return a.createShader(b)},
bO:function(a,b){return a.depthMask(b)},
bP:function(a,b){return a.disable(b)},
bQ:function(a,b,c,d){return a.drawArrays(b,c,d)},
bR:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bS:function(a,b){return a.enable(b)},
bT:function(a,b){return a.enableVertexAttribArray(b)},
az:function(a){return P.hc(a.getContextAttributes())},
b_:function(a,b){return a.getProgramInfoLog(b)},
b0:function(a,b,c){return a.getProgramParameter(b,c)},
b1:function(a,b){return a.getShaderInfoLog(b)},
b2:function(a,b,c){return a.getShaderParameter(b,c)},
b3:function(a,b,c){return a.getUniformLocation(b,c)},
bW:function(a,b){return a.linkProgram(b)},
b6:function(a,b,c){return a.shaderSource(b,c)},
b8:function(a,b,c,d){return a.stencilFunc(b,c,d)},
c5:function(a,b,c){return a.uniform1f(b,c)},
c6:function(a,b,c){return a.uniform1fv(b,c)},
c7:function(a,b,c){return a.uniform1i(b,c)},
c8:function(a,b,c){return a.uniform1iv(b,c)},
c9:function(a,b,c){return a.uniform2fv(b,c)},
ca:function(a,b,c){return a.uniform3fv(b,c)},
cb:function(a,b,c){return a.uniform4fv(b,c)},
cc:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cd:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cf:function(a,b){return a.useProgram(b)},
ci:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
ck:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.eK.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return P.hc(this.dr(a,b))},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
dr:function(a,b){return a.item(b)},
$isj:1,
$asj:function(){return[P.aN]},
$asm:function(){return[P.aN]},
$isk:1,
$ask:function(){return[P.aN]},
$asn:function(){return[P.aN]}}
P.cR.prototype={}
P.cS.prototype={}
B.hy.prototype={
$1:function(a){$.$get$hd().j(0,a.which,!0)},
$S:function(a){return{func:1,args:[W.at]}}}
B.hz.prototype={
$1:function(a){$.$get$hd().j(0,a.which,null)},
$S:function(a){return{func:1,args:[W.at]}}}
B.hA.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.lY=t
$.lZ=C.b.T(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.it=s-C.b.C(window.innerWidth,2)
$.jV=-(t-C.b.C(window.innerHeight,2))},
$S:function(a){return{func:1,args:[W.G]}}}
B.hB.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.bD=t-C.b.C(window.innerWidth,2)
$.bE=-(s-C.b.C(window.innerHeight,2))
if(a.button===2)$.$get$bC().j(0,"right",!0)
else $.$get$bC().j(0,"left",!0)},
$S:function(a){return{func:1,args:[W.G]}}}
B.hC.prototype={
$1:function(a){if(a.button===2)$.$get$bC().j(0,"right",null)
else $.$get$bC().j(0,"left",null)},
$S:function(a){return{func:1,args:[W.G]}}}
B.en.prototype={
cY:function(a,b,c,d){var t
d.toString
W.V(d,W.kX(d),new B.eo(this),!1,W.aB)
W.V(d,"mousemove",new B.ep(this),!1,W.G)
t=W.ay
W.V(d,"touchstart",new B.eq(),!1,t)
W.V(d,"touchmove",new B.er(this),!1,t)
B.mq(null)}}
B.eo.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.ac.ge2(a)*r.k3
if(C.c.T(r.fy,t)>0)r.fy=C.c.T(r.fy,t)}catch(q){s=H.H(q)
P.Y(s)}},
$S:function(a){return{func:1,args:[W.aB]}}}
B.ep.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=t.go+C.b.T($.it,$.bD)*0.01
s=t.id
r=$.bE
q=$.jV
t.id=s+(r-q)*0.01
$.bD=$.it
$.bE=q}},
$S:function(a){return{func:1,args:[W.G]}}}
B.eq.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.a1(t.clientX)
C.c.a1(t.clientY)
$.bD=s
C.c.a1(t.clientX)
$.bE=C.c.a1(t.clientY)},
$S:function(a){return{func:1,args:[W.ay]}}}
B.er.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.a1(t.clientX)
t=C.c.a1(t.clientY)
r=this.a
r.go=r.go+C.b.T(s,$.bD)*0.01
r.id=r.id+($.bE-t)*0.01
$.bD=s
$.bE=t},
$S:function(a){return{func:1,args:[W.ay]}}}
G.eb.prototype={}
G.f9.prototype={
W:function(a,b){var t=this.d
if(H.a9(!t.D(0,a)))H.ae("uniform "+a+" already set")
t.j(0,a,b)},
be:function(){return this.d},
k:function(a){var t,s,r,q
t=H.z(["{"+new H.cr(H.m4(this),null).k(0)+"}["+this.a+"]"],[P.p])
for(s=this.d,r=s.gA(s),r=r.gu(r);r.m();){q=r.gn(r)
C.a.l(t,H.e(q)+": "+H.e(s.h(0,q)))}return C.a.ah(t,"\n")}}
G.dq.prototype={}
G.dt.prototype={
bU:function(a,b,c){J.ki(this.a,b)
if(c>0)J.kA(this.a,b,c)},
cj:function(a,b,c,d,e,f,g,h){J.hI(this.a,34962,b)
J.kB(this.a,c,d,e,!1,g,h)}}
G.dJ.prototype={}
G.dO.prototype={
bb:function(a){var t,s,r,q,p
H.b(!0)
t=this.d
s=t.length
C.a.l(this.c,new G.dJ(s,s+1,s+2,s+3))
for(r=0;r<4;++r){q=a[r]
q.toString
p=new T.C(new Float32Array(3))
p.F(q)
C.a.l(t,p)}},
cO:function(a,b,c){var t,s,r,q
t=a.length
H.b(t===b.length)
s=t-1
for(r=0;r<s;r=q){q=r+1
this.bb([b[r],b[q],a[q],a[r]])}this.bb([b[s],b[0],a[0],a[s]])},
cQ:function(a,b,c){var t,s
for(t=0;t<a.length-1;t=s){s=t+1
this.cO(a[s],a[t],!0)}},
cP:function(a,b){return this.cQ(a,b,!1)},
cU:function(){var t,s,r,q,p,o,n,m,l
t=this.c
s=new Array(t.length*8)
s.fixed$length=Array
r=H.z(s,[P.w])
for(s=this.b,q=0,p=0;!1;++p){o=s[p]
r[q]=o.gdI(o)
r[q+1]=o.gdO(o)
r[q+2]=o.gdO(o)
r[q+3]=o.gdT(o)
r[q+4]=o.gdT(o)
r[q+5]=o.gdI(o)
q+=6}for(s=t.length,p=0;p<s;++p){n=t[p]
m=n.a
r[q]=m
l=n.b
r[q+1]=l
r[q+2]=l
l=n.c
r[q+3]=l
r[q+4]=l
l=n.d
r[q+5]=l
r[q+6]=l
r[q+7]=m
q+=8}H.b(q===r.length)
return r},
k:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gA(s),r=r.gu(r);r.m();){q=r.gn(r)
p=$.$get$S().h(0,q).a
C.a.l(t,H.e(q)+"["+p+","+H.e(C.d.gi(s.h(0,q)))+"]")}return C.a.ah(t," ")}}
G.co.prototype={}
G.cn.prototype={}
G.e6.prototype={}
G.e8.prototype={
bc:function(a,b,c){var t,s
if(C.k.aE(a,0)===105){if(H.a9(C.b.aC(b.length,c)===this.z))H.ae("ChangeAttribute "+this.z)}else{t=C.b.aC(b.length,c)
if(H.a9(t===(this.ch.length/3|0)))H.ae("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}this.cy.j(0,a,b)
t=this.d
s=this.r.h(0,a)
J.hI(t.a,34962,s)
J.iA(t.a,34962,b,35048)},
cV:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
a5:function(a,b,c){var t,s,r,q,p,o
t=J.iw(a,0)===105
if(t&&this.z===0)this.z=C.b.aC(b.length,c)
s=this.r
r=this.d
s.j(0,a,J.hK(r.a))
this.bc(a,b,c)
q=$.$get$S().h(0,a)
if(q==null)throw H.c("Unknown canonical "+a)
p=this.x
if(H.a9(p.D(0,a)))H.ae("unexpected attribute "+a)
o=p.h(0,a)
J.dh(r.a,this.e)
r.bU(0,o,t?1:0)
r.cj(0,s.h(0,a),o,q.bd(),5126,!1,0,0)},
k:function(a){var t,s,r,q
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,r=t.gA(t),r=r.gu(r);r.m();){q=r.gn(r)
C.a.l(s,H.e(q)+":"+t.h(0,q).length)}return"MESH["+this.a+"] "+C.a.ah(s,"  ")},
saK:function(a){this.cx=a}}
G.es.prototype={
cR:function(a,b){var t=C.b.cm(a,b)
if(this.z===t)return
this.z=t
this.bg()},
bg:function(){var t,s,r,q,p,o,n
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
t.a4(0,0,1/(p*s))
t.a4(1,1,1/p)
t.a4(2,2,(q+r)/o)
t.a4(3,2,-1)
t.a4(2,3,2*r*q/o)},
be:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.C(new Float32Array(3))
o.ao(r,q,p)
p=this.d
p.j(0,"uEyePosition",o)
o=this.cy
o.F(t)
t=o.a
t[12]=0
t[13]=0
t[14]=0
t[15]=1
n=-s[12]
m=-s[13]
l=-s[14]
s=J.u(n)
r=!!s.$isaR
k=r?s.geI(n):1
if(!!s.$isC){j=s.gal(n)
m=s.gam(n)
l=s.gay(n)
n=j}else if(r){j=s.gal(n)
m=s.gam(n)
l=s.gay(n)
n=j}else if(!(typeof n==="number")){n=null
m=null
l=null}s=C.c.v(t[0],n)
r=C.c.v(t[4],m)
q=C.c.v(t[8],l)
i=t[12]
h=C.c.v(t[1],n)
g=C.c.v(t[5],m)
f=C.c.v(t[9],l)
e=t[13]
d=C.c.v(t[2],n)
c=C.c.v(t[6],m)
b=C.c.v(t[10],l)
a=t[14]
a0=C.c.v(t[3],n)
a1=C.c.v(t[7],m)
a2=C.c.v(t[11],l)
a3=t[15]
t[12]=s+r+q+i*k
t[13]=h+g+f+e*k
t[14]=d+c+b+a*k
t[15]=a0+a1+a2+a3*k
a3=this.cx
a3.F(this.db)
a3.eq(0,o)
p.j(0,"uPerspectiveViewMatrix",a3)
return p}}
G.ez.prototype={
cZ:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.aj)(t),++o){n=t[o]
r.j(0,n,J.iC(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.aj)(t),++o){n=t[o]
r.j(0,n,J.iC(q.a,p,n))}},
d2:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gi(t)===s.gi(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gA(s),s=s.gu(s);s.m();){q=s.gn(s)
if(!t.D(0,q))C.a.l(r,q)}for(t=this.x,s=new P.bm(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.m();){q=s.d
if(!t.w(0,q))C.a.l(r,q)}return r},
d5:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gA(b),s=s.gu(s),r=this.d,q=this.y,p=this.z,o=0;s.m();){n=s.gn(s)
switch(J.iw(n,0)){case 117:if(q.D(0,n)){m=b.h(0,n)
if(p.D(0,n))H.hw("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.j(0,n,a)
l=$.$get$S().h(0,n)
if(l==null)H.F("unknown "+n)
H.b(q.D(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.hN(r.a,k,m)
else if(!!J.u(m).$isl2)J.ky(r.a,k,m)
break
case"float":if(l.c===0)J.kw(r.a,k,m)
else if(!!J.u(m).$ishS)J.kx(r.a,k,m)
break
case"mat4":if(l.c===0){n=H.ai(m,"$isa2").a
J.iI(r.a,k,!1,n)}else if(!!J.u(m).$ishS)J.iI(r.a,k,!1,m)
else if(H.a9(!1))H.ae("bad unform: "+n)
break
case"mat3":if(l.c===0){n=H.ai(m,"$isba").a
J.iH(r.a,k,!1,n)}else if(!!J.u(m).$ishS)J.iH(r.a,k,!1,m)
else if(H.a9(!1))H.ae("bad unform: "+n)
break
case"vec4":n=l.c
j=r.a
if(n===0)J.iG(j,k,H.ai(m,"$isaR").a)
else J.iG(j,k,m)
break
case"vec3":n=l.c
j=r.a
if(n===0)J.iF(j,k,H.ai(m,"$isC").a)
else J.iF(j,k,m)
break
case"vec2":n=l.c
j=r.a
if(n===0)J.iE(j,k,H.ai(m,"$isD").a)
else J.iE(j,k,m)
break
case"sampler2D":case"sampler2DShadow":n=C.b.R(33984,this.ch)
J.ix(r.a,n)
n=H.ai(m,"$islt").cW()
J.iz(r.a,3553,n)
n=this.ch
J.hN(r.a,k,n)
this.ch=this.ch+1
break
case"samplerCube":H.b(n==="uCubeTexture")
n=C.b.R(33984,this.ch)
J.ix(r.a,n)
n=H.ai(m,"$islt").cW()
J.iz(r.a,34067,n)
n=this.ch
J.hN(r.a,k,n)
this.ch=this.ch+1
break
default:H.hw("Error: unknow uniform type: "+j)
H.b(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":n=J.A(m,!0)
j=r.a
if(n)J.di(j,2929)
else J.hL(j,2929)
break
case"cStencilFunc":H.ai(m,"$isco")
n=m.a
j=r.a
if(n===1281)J.hL(j,2960)
else{J.di(j,2960)
j=m.b
i=m.c
J.kt(r.a,n,j,i)}break
case"cDepthWrite":J.kc(r.a,m)
break
case"cBlendEquation":H.ai(m,"$iscn")
n=m.a
j=r.a
if(n===1281)J.hL(j,3042)
else{J.di(j,3042)
j=m.b
i=m.c
J.k7(r.a,j,i)
J.k6(r.a,n)}break}++o
break}}h=P.kQ(0,0,0,Date.now()-new P.b3(t,!1).a,0,0)
""+o
h.k(0)},
cT:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
Date.now()
t=this.d
J.kz(t.a,this.r)
this.ch=0
this.z.O(0)
for(s=0;s<2;++s){r=b[s]
this.d5(r.a,r.be())}q=this.Q
q.O(0)
for(p=a.cy,p=p.gA(p),p=p.gu(p);p.m();)q.l(0,p.gn(p))
o=this.d2()
if(o.length!==0)P.Y("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(o)))
J.dh(a.d.a,a.e)
n=this.e.f.length>0
q=a.f
p=a.cV()
m=a.Q
l=a.z
if(n)J.k5(t.a,q)
if(m!==-1){k=t.a
if(l>1)J.kg(k,q,p,m,0,l)
else J.kf(k,q,p,m,0)}else{m=t.a
if(l>1)J.ke(m,q,0,p,l)
else J.kd(m,q,0,p)}if(n)J.kj(t.a)},
cS:function(a,b){return this.cT(a,b,null)}}
G.v.prototype={
bd:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.b(!1)
return-1}}}
G.eG.prototype={
cN:function(a){var t,s,r,q
H.b(this.b==null)
for(t=this.c,s=this.x,r=0;r<1;++r){q=a[r]
H.b($.$get$S().D(0,q))
H.b(!C.a.w(t,q))
C.a.l(t,q)
s.j(0,q,this.r);++this.r}C.a.b7(t)},
ba:function(a){var t,s,r,q
H.b(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.aj)(a),++r){q=a[r]
if(H.a9($.$get$S().D(0,q)))H.ae("missing uniform "+q)
H.b(!C.a.w(s,q))
C.a.l(s,q)}C.a.b7(s)},
d_:function(a,b){H.b(this.b==null)
this.b=this.d6(!0,a,b)},
bf:function(a){return this.d_(a,null)},
d6:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.b(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.aj)(t),++o){n=t[o]
m=$.$get$S().h(0,n)
C.a.l(q,"layout (location="+H.e(p.h(0,n))+") in "+m.a+" "+H.e(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,o=0;!1;++o){k=t[o]
m=$.$get$S().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.e(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.aj)(t),++o){k=t[o]
m=$.$get$S().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.e(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.aj)(t),++o){k=t[o]
m=$.$get$S().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.e(k)+j+";")}C.a.l(q,"")
C.a.l(q,"void main(void) {")
C.a.G(q,b)
C.a.l(q,"}")
return C.a.ah(q,"\n")}}
G.eI.prototype={}
R.ca.prototype={
c_:function(a){var t,s,r
t=this.fy
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.Y("size change "+H.e(s)+" "+H.e(r))
this.cR(s,r)
J.kC(this.go.a,0,0,s,r)}}
R.eM.prototype={
d0:function(a,b,c){var t,s,r
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
J.hH(this.a,s)
r=this.da(b,c,90,30)
this.d=r
J.hH(this.a,r)
t=t.createElement("div")
this.c=t
J.hH(this.a,t)},
da:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.lF("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.v).bl(r,"float")
r.setProperty(p,"left","")
p=C.v.bl(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.q.J(t,s)}return t}}
R.eN.prototype={
d4:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.x.eF(s,2)+" fps"
t=this.c;(t&&C.q).cC(t,b)
r=C.b.C(30*C.x.dU(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.q).J(t,q)},
d3:function(a){return this.d4(a,"")}}
A.hi.prototype={
$2:function(a,b){var t=536870911&a+J.b_(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(a,b){return{func:1,args:[P.w,P.B]}}}
T.ba.prototype={
k:function(a){return"[0] "+this.L(0).k(0)+"\n[1] "+this.L(1).k(0)+"\n[2] "+this.L(2).k(0)+"\n"},
h:function(a,b){return this.a[b]},
t:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.ba){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gq:function(a){return A.dg(this.a)},
L:function(a){var t,s
t=new Float32Array(3)
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.C(t)},
v:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=new T.C(new Float32Array(3))
t.F(b)
s=t.a
r=this.a
q=r[0]
p=s[0]
o=r[3]
n=s[1]
m=r[6]
l=s[2]
k=r[1]
j=r[4]
i=r[7]
h=r[2]
g=r[5]
r=r[8]
t.sal(0,q*p+o*n+m*l)
t.sam(0,k*p+j*n+i*l)
t.say(0,h*p+g*n+r*l)
return t}}
T.a2.prototype={
a4:function(a,b,c){H.b(a<4)
H.b(b<4)
this.a[b*4+a]=c},
F:function(a){var t,s
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
k:function(a){return"[0] "+this.L(0).k(0)+"\n[1] "+this.L(1).k(0)+"\n[2] "+this.L(2).k(0)+"\n[3] "+this.L(3).k(0)+"\n"},
h:function(a,b){return this.a[b]},
t:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.a2){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gq:function(a){return A.dg(this.a)},
L:function(a){var t,s
t=new Float32Array(4)
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.aR(t)},
an:function(){var t=this.a
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
eq:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.D.prototype={
F:function(a){var t,s
t=a.a
s=this.a
s[1]=t[1]
s[0]=t[0]},
k:function(a){var t=this.a
return"["+H.e(t[0])+","+H.e(t[1])+"]"},
t:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.D){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gq:function(a){return A.dg(this.a)},
T:function(a,b){var t=new T.D(new Float32Array(2))
t.F(this)
t.ap(0,b)
return t},
R:function(a,b){var t=new T.D(new Float32Array(2))
t.F(this)
t.l(0,b)
return t},
h:function(a,b){return this.a[b]},
gi:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
a_:function(a){var t,s,r,q,p
t=this.a
s=t[0]
r=t[1]
q=Math.sqrt(s*s+r*r)
if(q===0)return 0
p=1/q
t[0]=t[0]*p
t[1]=t[1]*p
return q},
aa:function(a){var t,s
t=a.a
s=this.a
return s[0]*t[1]-s[1]*t[0]},
l:function(a,b){var t,s
t=b.a
s=this.a
s[0]=s[0]+t[0]
s[1]=s[1]+t[1]},
ap:function(a,b){var t,s
t=b.a
s=this.a
s[0]=s[0]-t[0]
s[1]=s[1]-t[1]},
cq:function(a,b){var t=this.a
t[1]=t[1]*b
t[0]=t[0]*b}}
T.C.prototype={
ao:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
F:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
k:function(a){var t=this.a
return"["+H.e(t[0])+","+H.e(t[1])+","+H.e(t[2])+"]"},
t:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.C){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gq:function(a){return A.dg(this.a)},
h:function(a,b){return this.a[b]},
gi:function(a){return Math.sqrt(this.gaW())},
gaW:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
a_:function(a){var t,s,r
t=Math.sqrt(this.gaW())
if(t===0)return 0
s=1/t
r=this.a
r[0]=r[0]*s
r[1]=r[1]*s
r[2]=r[2]*s
return t},
aU:function(a){var t,s
t=a.a
s=this.a
return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]},
aa:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.C(new Float32Array(3))
t.ao(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
sal:function(a,b){this.a[0]=b
return b},
sam:function(a,b){this.a[1]=b
return b},
say:function(a,b){this.a[2]=b
return b}}
T.aR.prototype={
k:function(a){var t=this.a
return H.e(t[0])+","+H.e(t[1])+","+H.e(t[2])+","+H.e(t[3])},
t:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aR){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gq:function(a){return A.dg(this.a)},
h:function(a,b){return this.a[b]},
gi:function(a){var t,s,r,q
t=this.a
s=t[0]
r=t[1]
q=t[2]
t=t[3]
return Math.sqrt(s*s+r*r+q*q+t*t)}}
N.hu.prototype={
$1:function(c4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3
t=this.a
t.a=c4+0
s=this.b
r=$.$get$jP().valueAsNumber
q=$.$get$jM().valueAsNumber
p=$.$get$j7()
o=p.h(0,$.$get$jK().value)
n=p.h(0,$.$get$jJ().value)
m=X.kF(r+0,q+0,$.$get$jO().valueAsNumber,n,o)
q=$.$get$im()
r=$.$get$jL()
p=new Float32Array(9)
p[0]=1
p[1]=0
p[2]=0
p[3]=0
p[4]=1
p[5]=0
p[6]=0
p[7]=0
p[8]=1
l=[]
k=new G.dO(!1,[],[],l,P.U())
k.cP(X.kE(q,r,m,new T.ba(p)),!0)
p=s.d
r=s.e.x
q=P.U()
j=J.kb(p.a)
i=new G.e8(p,j,1,q,r,null,0,-1,null,null,P.U(),"meshdata:",!1,!0)
l=G.j1(l,null)
q.j(0,"aPosition",J.hK(p.a))
i.ch=l
i.bc("aPosition",l,3)
h=$.$get$S().h(0,"aPosition")
if(h==null)H.F("Unknown canonical aPosition")
H.b(r.D(0,"aPosition"))
g=r.h(0,"aPosition")
J.dh(p.a,j)
p.bU(0,g,0)
p.cj(0,q.h(0,"aPosition"),g,h.bd(),5126,!1,0,0)
r=k.cU()
i.y=J.hK(p.a)
H.b(i.ch!=null)
q=i.ch.length
if(q<768){i.saK(new Uint8Array(H.h7(r)))
i.Q=5121}else if(q<196608){i.saK(new Uint16Array(H.h7(r)))
i.Q=5123}else{i.saK(new Uint32Array(H.h7(r)))
i.Q=5125}J.dh(p.a,j)
r=i.y
q=i.cx
l=J.u(q)
H.b(!!l.$islw||!!l.$islx||!!l.$isly)
J.hI(p.a,34963,r)
J.iA(p.a,34963,q,35048)
G.lH(k,i)
r=this.c
q=r.k4
if(q.h(0,37)!=null)r.go+=0.03
else if(q.h(0,39)!=null)r.go-=0.03
if(q.h(0,38)!=null)r.id+=0.03
else if(q.h(0,40)!=null)r.id-=0.03
if(q.h(0,33)!=null)r.fy*=0.99
else if(q.h(0,34)!=null)r.fy*=1.01
if(q.h(0,32)!=null){r.go=0
r.id=0}q=C.c.dV(r.id,-1.4707963267948965,1.4707963267948965)
r.id=q
p=r.fy
l=r.go
f=p*Math.cos(q)
j=Math.cos(l)
q=Math.sin(q)
l=Math.sin(l)
e=r.d.a
e[12]=f*j
e[13]=p*q
e[14]=f*l
l=r.k2.a
e[12]=e[12]+l[0]
e[13]=e[13]+l[1]
e[14]=e[14]+l[2]
d=e[12]
c=e[13]
b=e[14]
a=new T.C(new Float32Array(3))
a.ao(0,1,0)
q=r.e
p=q.a
p[0]=e[12]
p[1]=e[13]
p[2]=e[14]
p=new Float32Array(3)
a0=new T.C(p)
a0.F(q)
p[0]=p[0]-l[0]
p[1]=p[1]-l[1]
p[2]=p[2]-l[2]
a0.a_(0)
a1=a.aa(a0)
a1.a_(0)
a2=a0.aa(a1)
a2.a_(0)
l=a1.aU(q)
j=a2.aU(q)
q=a0.aU(q)
a3=a1.a
a4=a3[0]
a5=a2.a
a6=a5[0]
a7=p[0]
a8=a3[1]
a9=a5[1]
b0=p[1]
a3=a3[2]
a5=a5[2]
p=p[2]
e[15]=1
e[14]=-q
e[13]=-j
e[12]=-l
e[11]=0
e[10]=p
e[9]=a5
e[8]=a3
e[7]=0
e[6]=b0
e[5]=a9
e[4]=a8
e[3]=0
e[2]=a7
e[1]=a6
e[0]=a4
e[12]=d
e[13]=c
e[14]=b
a4=r.f
a6=a4.a
a6[0]=e[2]
a6[1]=e[6]
a6[2]=e[10]
r=-r.k1
b1=Math.sqrt(a4.gaW())
d=a6[0]/b1
c=a6[1]/b1
b=a6[2]/b1
b2=Math.cos(r)
b3=Math.sin(r)
b4=1-b2
b5=d*d*b4+b2
r=b*b3
b6=d*c*b4-r
a6=c*b3
b7=d*b*b4+a6
b8=c*d*b4+r
b9=c*c*b4+b2
r=d*b3
c0=c*b*b4-r
c1=b*d*b4-a6
c2=b*c*b4+r
c3=b*b*b4+b2
r=e[0]
a6=e[4]
a4=e[8]
a7=e[1]
a8=e[5]
a9=e[9]
b0=e[2]
a3=e[6]
a5=e[10]
p=e[3]
l=e[7]
j=e[11]
e[0]=r*b5+a6*b8+a4*c1
e[1]=a7*b5+a8*b8+a9*c1
e[2]=b0*b5+a3*b8+a5*c1
e[3]=p*b5+l*b8+j*c1
e[4]=r*b6+a6*b9+a4*c2
e[5]=a7*b6+a8*b9+a9*c2
e[6]=b0*b6+a3*b9+a5*c2
e[7]=p*b6+l*b9+j*c2
e[8]=r*b7+a6*c0+a4*c3
e[9]=a7*b7+a8*c0+a9*c3
e[10]=b0*b7+a3*c0+a5*c3
e[11]=p*b7+l*c0+j*c3
s.cS(i,[this.d,this.e])
C.ad.gdM(window).c2(this)
this.f.d3(t.a)},
$S:function(a){return{func:1,v:true,args:[P.aa]}}}
J.a.prototype.cI=J.a.prototype.k
J.b8.prototype.cK=J.b8.prototype.k
P.M.prototype.cJ=P.M.prototype.ax
W.T.prototype.aB=W.T.prototype.H
W.bs.prototype.cL=W.bs.prototype.N;(function installTearOffs(){installTearOff(H.aS.prototype,"gem",0,0,0,null,["$0"],["aw"],1)
installTearOff(H.W.prototype,"gcs",0,0,0,null,["$1"],["E"],3)
installTearOff(H.aC.prototype,"ge4",0,0,0,null,["$1"],["P"],3)
installTearOff(P,"lU",1,0,0,null,["$1"],["lC"],2)
installTearOff(P,"lV",1,0,0,null,["$1"],["lD"],2)
installTearOff(P,"lW",1,0,0,null,["$1"],["lE"],2)
installTearOff(P,"jH",1,0,0,null,["$0"],["lS"],1)
installTearOff(P.a7.prototype,"gdh",0,0,0,null,["$2","$1"],["aq","di"],6)
installTearOff(P,"m0",1,0,0,null,["$2"],["kL"],8)
installTearOff(W,"m6",1,0,0,null,["$4"],["lI"],5)
installTearOff(W,"m7",1,0,0,null,["$4"],["lJ"],5)
installTearOff(W.c6.prototype,"gaX",0,1,0,null,["$0"],["aY"],4)
installTearOff(W.cq.prototype,"gaX",0,1,0,null,["$0"],["aY"],4)
installTearOff(R.ca.prototype,"gew",0,0,0,null,["$1"],["c_"],7)
installTearOff(N,"jI",1,0,0,null,["$0"],["mk"],1)
installTearOff(X,"me",1,0,0,null,["$1"],["kR"],0)
installTearOff(X,"mi",1,0,0,null,["$1"],["kV"],0)
installTearOff(X,"mg",1,0,0,null,["$1"],["kT"],0)
installTearOff(X,"mh",1,0,0,null,["$1"],["kU"],0)
installTearOff(X,"mf",1,0,0,null,["$1"],["kS"],0)})();(function inheritance(){inherit(P.B,null)
var t=P.B
inherit(H.hV,t)
inherit(J.a,t)
inherit(J.dm,t)
inherit(P.M,t)
inherit(H.bZ,t)
inherit(P.bU,t)
inherit(H.aK,t)
inherit(H.an,t)
inherit(H.fQ,t)
inherit(H.aS,t)
inherit(H.ft,t)
inherit(H.aD,t)
inherit(H.fP,t)
inherit(H.fo,t)
inherit(H.cd,t)
inherit(H.f0,t)
inherit(H.al,t)
inherit(H.W,t)
inherit(H.aC,t)
inherit(H.ey,t)
inherit(H.f6,t)
inherit(P.aJ,t)
inherit(H.cT,t)
inherit(H.cr,t)
inherit(P.aO,t)
inherit(H.e_,t)
inherit(H.e1,t)
inherit(P.hP,t)
inherit(P.fp,t)
inherit(P.cB,t)
inherit(P.a7,t)
inherit(P.ct,t)
inherit(P.eQ,t)
inherit(P.eR,t)
inherit(P.i5,t)
inherit(P.aG,t)
inherit(P.h6,t)
inherit(P.eF,t)
inherit(P.fM,t)
inherit(P.bm,t)
inherit(P.hZ,t)
inherit(P.bn,t)
inherit(P.m,t)
inherit(P.fO,t)
inherit(P.af,t)
inherit(P.E,t)
inherit(P.b3,t)
inherit(P.aa,t)
inherit(P.ao,t)
inherit(P.ci,t)
inherit(P.hR,t)
inherit(P.fy,t)
inherit(P.dI,t)
inherit(P.k,t)
inherit(P.aN,t)
inherit(P.I,t)
inherit(P.aP,t)
inherit(P.p,t)
inherit(P.bh,t)
inherit(W.dw,t)
inherit(W.bl,t)
inherit(W.n,t)
inherit(W.c8,t)
inherit(W.bs,t)
inherit(W.h1,t)
inherit(W.bQ,t)
inherit(W.c7,t)
inherit(W.i2,t)
inherit(W.i8,t)
inherit(W.fX,t)
inherit(W.d2,t)
inherit(P.fS,t)
inherit(G.eb,t)
inherit(G.dt,t)
inherit(G.dJ,t)
inherit(G.dO,t)
inherit(G.co,t)
inherit(G.cn,t)
inherit(G.v,t)
inherit(G.eG,t)
inherit(R.eM,t)
inherit(T.ba,t)
inherit(T.a2,t)
inherit(T.D,t)
inherit(T.C,t)
inherit(T.aR,t)
t=J.a
inherit(J.dW,t)
inherit(J.bX,t)
inherit(J.b8,t)
inherit(J.ap,t)
inherit(J.aL,t)
inherit(J.ar,t)
inherit(H.bc,t)
inherit(H.av,t)
inherit(W.d,t)
inherit(W.dj,t)
inherit(W.dr,t)
inherit(W.a0,t)
inherit(W.cu,t)
inherit(W.R,t)
inherit(W.dA,t)
inherit(W.dB,t)
inherit(W.bK,t)
inherit(W.cv,t)
inherit(W.bM,t)
inherit(W.cx,t)
inherit(W.dD,t)
inherit(W.f,t)
inherit(W.cz,t)
inherit(W.dP,t)
inherit(W.cC,t)
inherit(W.e3,t)
inherit(W.e7,t)
inherit(W.cG,t)
inherit(W.c6,t)
inherit(W.cJ,t)
inherit(W.a3,t)
inherit(W.cN,t)
inherit(W.cb,t)
inherit(W.cP,t)
inherit(W.a4,t)
inherit(W.cU,t)
inherit(W.cX,t)
inherit(W.f_,t)
inherit(W.cZ,t)
inherit(W.f4,t)
inherit(W.cq,t)
inherit(W.fd,t)
inherit(W.d3,t)
inherit(W.d5,t)
inherit(W.d7,t)
inherit(W.d9,t)
inherit(W.db,t)
inherit(P.cE,t)
inherit(P.cL,t)
inherit(P.ev,t)
inherit(P.cV,t)
inherit(P.d0,t)
inherit(P.dn,t)
inherit(P.eA,t)
inherit(P.eB,t)
inherit(P.cR,t)
t=J.b8
inherit(J.et,t)
inherit(J.aA,t)
inherit(J.as,t)
inherit(J.hU,J.ap)
t=J.aL
inherit(J.bW,t)
inherit(J.bV,t)
t=P.M
inherit(H.j,t)
inherit(H.c0,t)
inherit(H.cs,t)
t=H.j
inherit(H.aM,t)
inherit(H.e0,t)
inherit(H.dG,H.c0)
t=P.bU
inherit(H.e5,t)
inherit(H.fg,t)
t=H.aM
inherit(H.b9,t)
inherit(P.e2,t)
t=H.an
inherit(H.hD,t)
inherit(H.hE,t)
inherit(H.fK,t)
inherit(H.fu,t)
inherit(H.dS,t)
inherit(H.dT,t)
inherit(H.fR,t)
inherit(H.f1,t)
inherit(H.f2,t)
inherit(H.hF,t)
inherit(H.hn,t)
inherit(H.ho,t)
inherit(H.hp,t)
inherit(H.hq,t)
inherit(H.hr,t)
inherit(H.eX,t)
inherit(H.dX,t)
inherit(H.hj,t)
inherit(H.hk,t)
inherit(H.hl,t)
inherit(P.fk,t)
inherit(P.fj,t)
inherit(P.fl,t)
inherit(P.fm,t)
inherit(P.fz,t)
inherit(P.fD,t)
inherit(P.fA,t)
inherit(P.fB,t)
inherit(P.fC,t)
inherit(P.fG,t)
inherit(P.fH,t)
inherit(P.fF,t)
inherit(P.fE,t)
inherit(P.eS,t)
inherit(P.eT,t)
inherit(P.h9,t)
inherit(P.fV,t)
inherit(P.fU,t)
inherit(P.fW,t)
inherit(P.e4,t)
inherit(P.dE,t)
inherit(P.dF,t)
inherit(W.dH,t)
inherit(W.eP,t)
inherit(W.fh,t)
inherit(W.fx,t)
inherit(W.ej,t)
inherit(W.ei,t)
inherit(W.fY,t)
inherit(W.fZ,t)
inherit(W.h4,t)
inherit(W.h5,t)
inherit(P.hb,t)
inherit(B.hy,t)
inherit(B.hz,t)
inherit(B.hA,t)
inherit(B.hB,t)
inherit(B.hC,t)
inherit(B.eo,t)
inherit(B.ep,t)
inherit(B.eq,t)
inherit(B.er,t)
inherit(A.hi,t)
inherit(N.hu,t)
t=H.fo
inherit(H.aU,t)
inherit(H.bx,t)
t=P.aJ
inherit(H.ek,t)
inherit(H.dY,t)
inherit(H.fb,t)
inherit(H.f8,t)
inherit(H.ds,t)
inherit(H.eC,t)
inherit(P.bF,t)
inherit(P.c9,t)
inherit(P.a_,t)
inherit(P.fc,t)
inherit(P.fa,t)
inherit(P.aQ,t)
inherit(P.du,t)
inherit(P.dz,t)
t=H.eX
inherit(H.eL,t)
inherit(H.b2,t)
inherit(H.fi,P.bF)
inherit(P.c_,P.aO)
t=P.c_
inherit(H.a1,t)
inherit(W.fn,t)
inherit(H.c3,H.av)
t=H.c3
inherit(H.bo,t)
inherit(H.bq,t)
inherit(H.bp,H.bo)
inherit(H.bd,H.bp)
inherit(H.br,H.bq)
inherit(H.c4,H.br)
inherit(H.c2,H.bd)
t=H.c4
inherit(H.ec,t)
inherit(H.ed,t)
inherit(H.ee,t)
inherit(H.ef,t)
inherit(H.eg,t)
inherit(H.c5,t)
inherit(H.eh,t)
inherit(P.h2,P.fp)
inherit(P.fT,P.h6)
inherit(P.fN,H.a1)
inherit(P.eE,P.eF)
inherit(P.fJ,P.eE)
inherit(P.fL,P.fJ)
inherit(P.bY,P.bn)
t=P.aa
inherit(P.O,t)
inherit(P.w,t)
t=P.a_
inherit(P.cc,t)
inherit(P.dR,t)
t=W.d
inherit(W.q,t)
inherit(W.dL,t)
inherit(W.b7,t)
inherit(W.bb,t)
inherit(W.ew,t)
inherit(W.ce,t)
inherit(W.bt,t)
inherit(W.bv,t)
inherit(W.fe,t)
inherit(W.ff,t)
inherit(W.bj,t)
inherit(W.i9,t)
inherit(P.dp,t)
inherit(P.aH,t)
t=W.q
inherit(W.T,t)
inherit(W.am,t)
inherit(W.b4,t)
t=W.T
inherit(W.i,t)
inherit(P.h,t)
t=W.i
inherit(W.dk,t)
inherit(W.dl,t)
inherit(W.ak,t)
inherit(W.bG,t)
inherit(W.bJ,t)
inherit(W.dM,t)
inherit(W.bS,t)
inherit(W.eD,t)
inherit(W.ck,t)
inherit(W.eV,t)
inherit(W.eW,t)
inherit(W.bi,t)
inherit(W.dv,W.a0)
inherit(W.aI,W.cu)
t=W.R
inherit(W.dx,t)
inherit(W.dy,t)
inherit(W.cw,W.cv)
inherit(W.bL,W.cw)
inherit(W.cy,W.cx)
inherit(W.dC,W.cy)
inherit(W.cA,W.cz)
inherit(W.dK,W.cA)
inherit(W.cD,W.cC)
inherit(W.b6,W.cD)
inherit(W.bT,W.b4)
inherit(W.dQ,W.b7)
inherit(W.az,W.f)
t=W.az
inherit(W.at,t)
inherit(W.G,t)
inherit(W.ay,t)
inherit(W.e9,W.bb)
inherit(W.cH,W.cG)
inherit(W.ea,W.cH)
inherit(W.K,P.bY)
inherit(W.cK,W.cJ)
inherit(W.be,W.cK)
inherit(W.cO,W.cN)
inherit(W.eu,W.cO)
inherit(W.bu,W.bt)
inherit(W.eH,W.bu)
inherit(W.cQ,W.cP)
inherit(W.eJ,W.cQ)
inherit(W.eO,W.cU)
inherit(W.cY,W.cX)
inherit(W.eY,W.cY)
inherit(W.bw,W.bv)
inherit(W.eZ,W.bw)
inherit(W.d_,W.cZ)
inherit(W.f3,W.d_)
inherit(W.aB,W.G)
inherit(W.d4,W.d3)
inherit(W.fq,W.d4)
inherit(W.fr,W.bM)
inherit(W.d6,W.d5)
inherit(W.fI,W.d6)
inherit(W.d8,W.d7)
inherit(W.cI,W.d8)
inherit(W.da,W.d9)
inherit(W.h_,W.da)
inherit(W.dc,W.db)
inherit(W.h0,W.dc)
inherit(W.fs,W.fn)
inherit(W.fv,P.eQ)
inherit(W.ic,W.fv)
inherit(W.fw,P.eR)
inherit(W.h3,W.bs)
inherit(P.N,P.fS)
inherit(P.cF,P.cE)
inherit(P.dZ,P.cF)
inherit(P.cM,P.cL)
inherit(P.el,P.cM)
inherit(P.bg,P.h)
inherit(P.cW,P.cV)
inherit(P.eU,P.cW)
inherit(P.d1,P.d0)
inherit(P.f5,P.d1)
inherit(P.em,P.aH)
inherit(P.cS,P.cR)
inherit(P.eK,P.cS)
t=G.eb
inherit(G.eI,t)
inherit(G.f9,t)
inherit(G.e8,t)
inherit(G.ez,t)
inherit(G.dq,G.eI)
inherit(B.en,G.dq)
t=G.f9
inherit(G.e6,t)
inherit(G.es,t)
inherit(R.ca,G.es)
inherit(R.eN,R.eM)
mixin(H.bo,P.m)
mixin(H.bp,H.aK)
mixin(H.bq,P.m)
mixin(H.br,H.aK)
mixin(P.bn,P.m)
mixin(W.cu,W.dw)
mixin(W.cv,P.m)
mixin(W.cw,W.n)
mixin(W.cx,P.m)
mixin(W.cy,W.n)
mixin(W.cz,P.m)
mixin(W.cA,W.n)
mixin(W.cC,P.m)
mixin(W.cD,W.n)
mixin(W.cG,P.m)
mixin(W.cH,W.n)
mixin(W.cJ,P.m)
mixin(W.cK,W.n)
mixin(W.cN,P.m)
mixin(W.cO,W.n)
mixin(W.bt,P.m)
mixin(W.bu,W.n)
mixin(W.cP,P.m)
mixin(W.cQ,W.n)
mixin(W.cU,P.aO)
mixin(W.cX,P.m)
mixin(W.cY,W.n)
mixin(W.bv,P.m)
mixin(W.bw,W.n)
mixin(W.cZ,P.m)
mixin(W.d_,W.n)
mixin(W.d3,P.m)
mixin(W.d4,W.n)
mixin(W.d5,P.m)
mixin(W.d6,W.n)
mixin(W.d7,P.m)
mixin(W.d8,W.n)
mixin(W.d9,P.m)
mixin(W.da,W.n)
mixin(W.db,P.m)
mixin(W.dc,W.n)
mixin(P.cE,P.m)
mixin(P.cF,W.n)
mixin(P.cL,P.m)
mixin(P.cM,W.n)
mixin(P.cV,P.m)
mixin(P.cW,W.n)
mixin(P.d0,P.m)
mixin(P.d1,W.n)
mixin(P.cR,P.m)
mixin(P.cS,W.n)})();(function constants(){C.p=W.ak.prototype
C.I=W.bG.prototype
C.v=W.aI.prototype
C.q=W.bJ.prototype
C.J=W.bK.prototype
C.K=W.bS.prototype
C.j=W.bT.prototype
C.L=J.a.prototype
C.a=J.ap.prototype
C.x=J.bV.prototype
C.b=J.bW.prototype
C.d=J.bX.prototype
C.c=J.aL.prototype
C.k=J.ar.prototype
C.S=J.as.prototype
C.W=H.c2.prototype
C.A=W.be.prototype
C.B=J.et.prototype
C.C=W.cb.prototype
C.H=W.ck.prototype
C.u=J.aA.prototype
C.ac=W.aB.prototype
C.ad=W.bj.prototype
C.h=new P.fT()
C.w=new P.ao(0)
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
C.T=H.z(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.p])
C.U=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.V=makeConstList([])
C.r=H.z(makeConstList(["bind","if","ref","repeat","syntax"]),[P.p])
C.t=H.z(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.p])
C.X=new G.v("vec3","vertex btangents",0)
C.e=new G.v("vec3","",0)
C.Y=new G.v("vec4","delta from light",0)
C.o=new G.v("","",0)
C.D=new G.v("vec3","vertex coordinates",0)
C.Z=new G.v("vec3","vertex binormals",0)
C.E=new G.v("vec4","for wireframe",0)
C.a_=new G.v("vec4","per vertex color",0)
C.a0=new G.v("float","for normal maps",0)
C.l=new G.v("mat4","",0)
C.a2=new G.v("mat4","",4)
C.a1=new G.v("mat4","",128)
C.f=new G.v("float","",0)
C.a3=new G.v("float","",4)
C.a4=new G.v("float","depth for shadowmaps",0)
C.i=new G.v("sampler2D","",0)
C.a5=new G.v("float","for bump maps",0)
C.a6=new G.v("vec2","texture uvs",0)
C.a7=new G.v("float","time since program start in sec",0)
C.m=new G.v("vec2","",0)
C.a8=new G.v("samplerCube","",0)
C.n=new G.v("vec4","",0)
C.a9=new G.v("vec3","vertex normals",0)
C.aa=new G.v("sampler2DShadow","",0)
C.F=new G.v("vec3","per vertex color",0)
C.G=new G.v("mat3","",0)
C.ab=new G.v("vec3","vertex tangents",0)})();(function staticFields(){$.ja="$cachedFunction"
$.jb="$cachedInvocation"
$.iP=null
$.iN=null
$.ig=!1
$.io=null
$.jE=null
$.jX=null
$.he=null
$.hm=null
$.ip=null
$.aV=null
$.by=null
$.bz=null
$.ih=!1
$.y=C.h
$.j0=0
$.ac=null
$.hQ=null
$.j_=null
$.iZ=null
$.iX=null
$.iW=null
$.iV=null
$.iU=null
$.lY=0
$.lZ=0
$.it=0
$.jV=0
$.bD=0
$.bE=0
$.mr=!1
$.jN=0})();(function lazyInitializers(){lazy($,"iT","$get$iT",function(){return H.jS("_$dart_dartClosure")})
lazy($,"hW","$get$hW",function(){return H.jS("_$dart_js")})
lazy($,"j2","$get$j2",function(){return H.l7()})
lazy($,"j3","$get$j3",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.j0
$.j0=t+1
t="expando$key$"+t}return new P.dI(t,null,[P.w])})
lazy($,"jg","$get$jg",function(){return H.a5(H.f7({
toString:function(){return"$receiver$"}}))})
lazy($,"jh","$get$jh",function(){return H.a5(H.f7({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"ji","$get$ji",function(){return H.a5(H.f7(null))})
lazy($,"jj","$get$jj",function(){return H.a5(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"jn","$get$jn",function(){return H.a5(H.f7(void 0))})
lazy($,"jo","$get$jo",function(){return H.a5(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"jl","$get$jl",function(){return H.a5(H.jm(null))})
lazy($,"jk","$get$jk",function(){return H.a5(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"jq","$get$jq",function(){return H.a5(H.jm(void 0))})
lazy($,"jp","$get$jp",function(){return H.a5(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"ib","$get$ib",function(){return P.lB()})
lazy($,"bA","$get$bA",function(){return[]})
lazy($,"iS","$get$iS",function(){return{}})
lazy($,"jv","$get$jv",function(){return P.i_(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"id","$get$id",function(){return P.U()})
lazy($,"hd","$get$hd",function(){return P.j4(P.w,P.af)})
lazy($,"bC","$get$bC",function(){return P.j4(P.p,P.af)})
lazy($,"je","$get$je",function(){return new G.co(1281,0,4294967295)})
lazy($,"iL","$get$iL",function(){return new G.cn(1281,1281,1281)})
lazy($,"S","$get$S",function(){return P.ad(["cBlendEquation",C.o,"cDepthWrite",C.o,"cDepthTest",C.o,"cStencilFunc",C.o,"tPosition",C.e,"tSpeed",C.e,"tForce",C.e,"aColors",C.F,"aColorAlpha",C.a_,"aPosition",C.D,"aTexUV",C.a6,"aNormal",C.a9,"aBinormal",C.Z,"aCenter",C.E,"aPointSize",C.f,"aBoneIndex",C.n,"aBoneWeight",C.n,"aTangent",C.ab,"aBitangent",C.X,"iaRotation",C.n,"iaTranslation",C.e,"iaScale",C.e,"vColor",C.F,"vTexUV",C.m,"vLightWeighting",C.e,"vNormal",C.e,"vPosition",C.D,"vPositionFromLight",C.Y,"vCenter",C.E,"vDepth",C.a4,"uTransformationMatrix",C.l,"uModelMatrix",C.l,"uNormalMatrix",C.G,"uConvolutionMatrix",C.G,"uPerspectiveViewMatrix",C.l,"uLightPerspectiveViewMatrix",C.l,"uShadowMap",C.aa,"uTexture",C.i,"uTexture2",C.i,"uTexture3",C.i,"uTexture4",C.i,"uSpecularMap",C.i,"uNormalMap",C.i,"uBumpMap",C.i,"uDepthMap",C.i,"uCubeTexture",C.a8,"uAnimationTable",C.i,"uTime",C.a7,"uCameraNear",C.f,"uCameraFar",C.f,"uFogNear",C.f,"uFogFar",C.f,"uPointSize",C.f,"uScale",C.f,"uAngle",C.f,"uCanvasSize",C.m,"uCenter2",C.m,"uCutOff",C.f,"uShininess",C.f,"uShadowBias",C.f,"uOpacity",C.f,"uColor",C.e,"uAmbientDiffuse",C.e,"uColorEmissive",C.e,"uColorSpecular",C.e,"uColorDiffuse",C.e,"uColorAlpha",C.n,"uColorAlpha2",C.n,"uEyePosition",C.e,"uMaterial",C.l,"uRange",C.m,"uDirection",C.m,"uBoneMatrices",C.a1,"uLightDescs",C.a2,"uLightCount",C.f,"uLightTypes",C.a3,"uBumpScale",C.a5,"uNormalScale",C.a0])})
lazy($,"iR","$get$iR",function(){return T.lz(1,1,0)})
lazy($,"j7","$get$j7",function(){return P.ad(["Cosine",X.me(),"Sine",X.mi(),"Quadratic",X.mh(),"Cubic",X.mf(),"Linear",X.mg()])})
lazy($,"k_","$get$k_",function(){var t=G.jd("SolidColor")
t.cN(["aPosition"])
t.ba(["uPerspectiveViewMatrix","uModelMatrix"])
t.bf(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"])
return t})
lazy($,"jZ","$get$jZ",function(){var t=G.jd("SolidColorF")
t.ba(["uColor"])
t.bf(["oFragColor = vec4( uColor, 1.0 );"])
return t})
lazy($,"jP","$get$jP",function(){return C.j.a0(W.de(),"#width")})
lazy($,"jM","$get$jM",function(){return C.j.a0(W.de(),"#height")})
lazy($,"jO","$get$jO",function(){return C.j.a0(W.de(),"#segments")})
lazy($,"jK","$get$jK",function(){return C.j.a0(W.de(),"#easingWidth")})
lazy($,"jJ","$get$jJ",function(){return C.j.a0(W.de(),"#easingHeight")})
lazy($,"im","$get$im",function(){return X.kM(20,10,!0)})
lazy($,"jL","$get$jL",function(){return X.l1($.$get$im())})})()
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
mangledGlobalNames:{w:"int",O:"double",aa:"num",p:"String",af:"bool",I:"Null",k:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,ret:P.O,args:[P.O]},{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.q},{func:1,ret:P.af,args:[W.T,P.p,P.p,W.bl]},{func:1,v:true,args:[P.B],opt:[P.aP]},{func:1,v:true,args:[W.f]},{func:1,ret:P.w,args:[P.E,P.E]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,Blob:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSCharsetRule:J.a,CSSConditionRule:J.a,CSSFontFaceRule:J.a,CSSGroupingRule:J.a,CSSImportRule:J.a,CSSKeyframeRule:J.a,MozCSSKeyframeRule:J.a,WebKitCSSKeyframeRule:J.a,CSSKeyframesRule:J.a,MozCSSKeyframesRule:J.a,WebKitCSSKeyframesRule:J.a,CSSMediaRule:J.a,CSSNamespaceRule:J.a,CSSPageRule:J.a,CSSRule:J.a,CSSStyleRule:J.a,CSSStyleSheet:J.a,CSSSupportsRule:J.a,CSSVariableReferenceValue:J.a,CSSViewportRule:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,File:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,Gamepad:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MimeType:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechGrammar:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,StyleSheet:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,Touch:J.a,TrackDefault:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGLength:J.a,SVGMatrix:J.a,SVGNumber:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGTransform:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioParamMap:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bc,DataView:H.av,ArrayBufferView:H.av,Float64Array:H.bd,Float32Array:H.c2,Int16Array:H.ec,Int32Array:H.ed,Int8Array:H.ee,Uint16Array:H.ef,Uint32Array:H.eg,Uint8ClampedArray:H.c5,CanvasPixelArray:H.c5,Uint8Array:H.eh,HTMLAudioElement:W.i,HTMLBRElement:W.i,HTMLBaseElement:W.i,HTMLButtonElement:W.i,HTMLContentElement:W.i,HTMLDListElement:W.i,HTMLDataElement:W.i,HTMLDataListElement:W.i,HTMLDetailsElement:W.i,HTMLDialogElement:W.i,HTMLEmbedElement:W.i,HTMLFieldSetElement:W.i,HTMLHRElement:W.i,HTMLHeadingElement:W.i,HTMLHtmlElement:W.i,HTMLIFrameElement:W.i,HTMLImageElement:W.i,HTMLInputElement:W.i,HTMLLIElement:W.i,HTMLLabelElement:W.i,HTMLLegendElement:W.i,HTMLLinkElement:W.i,HTMLMapElement:W.i,HTMLMediaElement:W.i,HTMLMenuElement:W.i,HTMLMetaElement:W.i,HTMLMeterElement:W.i,HTMLModElement:W.i,HTMLOListElement:W.i,HTMLObjectElement:W.i,HTMLOptGroupElement:W.i,HTMLOptionElement:W.i,HTMLOutputElement:W.i,HTMLParagraphElement:W.i,HTMLParamElement:W.i,HTMLPictureElement:W.i,HTMLPreElement:W.i,HTMLProgressElement:W.i,HTMLQuoteElement:W.i,HTMLScriptElement:W.i,HTMLShadowElement:W.i,HTMLSlotElement:W.i,HTMLSourceElement:W.i,HTMLSpanElement:W.i,HTMLStyleElement:W.i,HTMLTableCaptionElement:W.i,HTMLTableCellElement:W.i,HTMLTableDataCellElement:W.i,HTMLTableHeaderCellElement:W.i,HTMLTableColElement:W.i,HTMLTextAreaElement:W.i,HTMLTimeElement:W.i,HTMLTitleElement:W.i,HTMLTrackElement:W.i,HTMLUListElement:W.i,HTMLUnknownElement:W.i,HTMLVideoElement:W.i,HTMLDirectoryElement:W.i,HTMLFontElement:W.i,HTMLFrameElement:W.i,HTMLFrameSetElement:W.i,HTMLMarqueeElement:W.i,HTMLElement:W.i,AccessibleNodeList:W.dj,HTMLAnchorElement:W.dk,HTMLAreaElement:W.dl,HTMLBodyElement:W.ak,HTMLCanvasElement:W.bG,CanvasRenderingContext2D:W.dr,CDATASection:W.am,CharacterData:W.am,Comment:W.am,ProcessingInstruction:W.am,Text:W.am,CSSPerspective:W.dv,CSSStyleDeclaration:W.aI,MSStyleCSSProperties:W.aI,CSS2Properties:W.aI,CSSImageValue:W.R,CSSKeywordValue:W.R,CSSNumericValue:W.R,CSSPositionValue:W.R,CSSResourceValue:W.R,CSSUnitValue:W.R,CSSURLImageValue:W.R,CSSStyleValue:W.R,CSSMatrixComponent:W.a0,CSSRotation:W.a0,CSSScale:W.a0,CSSSkew:W.a0,CSSTranslation:W.a0,CSSTransformComponent:W.a0,CSSTransformValue:W.dx,CSSUnparsedValue:W.dy,DataTransferItemList:W.dA,HTMLDivElement:W.bJ,XMLDocument:W.b4,Document:W.b4,DOMException:W.dB,DOMImplementation:W.bK,ClientRectList:W.bL,DOMRectList:W.bL,DOMRectReadOnly:W.bM,DOMStringList:W.dC,DOMTokenList:W.dD,Element:W.T,AbortPaymentEvent:W.f,AnimationEvent:W.f,AnimationPlaybackEvent:W.f,ApplicationCacheErrorEvent:W.f,BackgroundFetchClickEvent:W.f,BackgroundFetchEvent:W.f,BackgroundFetchFailEvent:W.f,BackgroundFetchedEvent:W.f,BeforeInstallPromptEvent:W.f,BeforeUnloadEvent:W.f,BlobEvent:W.f,CanMakePaymentEvent:W.f,ClipboardEvent:W.f,CloseEvent:W.f,CustomEvent:W.f,DeviceMotionEvent:W.f,DeviceOrientationEvent:W.f,ErrorEvent:W.f,ExtendableEvent:W.f,ExtendableMessageEvent:W.f,FetchEvent:W.f,FontFaceSetLoadEvent:W.f,ForeignFetchEvent:W.f,GamepadEvent:W.f,HashChangeEvent:W.f,InstallEvent:W.f,MediaEncryptedEvent:W.f,MediaKeyMessageEvent:W.f,MediaQueryListEvent:W.f,MediaStreamEvent:W.f,MediaStreamTrackEvent:W.f,MessageEvent:W.f,MIDIConnectionEvent:W.f,MIDIMessageEvent:W.f,MutationEvent:W.f,NotificationEvent:W.f,PageTransitionEvent:W.f,PaymentRequestEvent:W.f,PaymentRequestUpdateEvent:W.f,PopStateEvent:W.f,PresentationConnectionAvailableEvent:W.f,PresentationConnectionCloseEvent:W.f,ProgressEvent:W.f,PromiseRejectionEvent:W.f,PushEvent:W.f,RTCDataChannelEvent:W.f,RTCDTMFToneChangeEvent:W.f,RTCPeerConnectionIceEvent:W.f,RTCTrackEvent:W.f,SecurityPolicyViolationEvent:W.f,SensorErrorEvent:W.f,SpeechRecognitionError:W.f,SpeechRecognitionEvent:W.f,SpeechSynthesisEvent:W.f,StorageEvent:W.f,SyncEvent:W.f,TrackEvent:W.f,TransitionEvent:W.f,WebKitTransitionEvent:W.f,VRDeviceEvent:W.f,VRDisplayEvent:W.f,VRSessionEvent:W.f,MojoInterfaceRequestEvent:W.f,ResourceProgressEvent:W.f,USBConnectionEvent:W.f,IDBVersionChangeEvent:W.f,AudioProcessingEvent:W.f,OfflineAudioCompletionEvent:W.f,WebGLContextEvent:W.f,Event:W.f,InputEvent:W.f,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SourceBuffer:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,TextTrack:W.d,TextTrackCue:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,VTTCue:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,ServiceWorker:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,FileList:W.dK,FileWriter:W.dL,HTMLFormElement:W.dM,HTMLHeadElement:W.bS,History:W.dP,HTMLCollection:W.b6,HTMLFormControlsCollection:W.b6,HTMLOptionsCollection:W.b6,HTMLDocument:W.bT,XMLHttpRequest:W.dQ,XMLHttpRequestUpload:W.b7,XMLHttpRequestEventTarget:W.b7,KeyboardEvent:W.at,Location:W.e3,MediaList:W.e7,MIDIOutput:W.e9,MIDIInput:W.bb,MIDIPort:W.bb,MimeTypeArray:W.ea,PointerEvent:W.G,MouseEvent:W.G,DragEvent:W.G,DocumentFragment:W.q,ShadowRoot:W.q,Attr:W.q,DocumentType:W.q,Node:W.q,NodeIterator:W.c6,NodeList:W.be,RadioNodeList:W.be,Plugin:W.a3,PluginArray:W.eu,PresentationConnection:W.ew,Range:W.cb,RTCDataChannel:W.ce,DataChannel:W.ce,HTMLSelectElement:W.eD,SourceBufferList:W.eH,SpeechGrammarList:W.eJ,SpeechRecognitionResult:W.a4,Storage:W.eO,HTMLTableElement:W.ck,HTMLTableRowElement:W.eV,HTMLTableSectionElement:W.eW,HTMLTemplateElement:W.bi,TextTrackCueList:W.eY,TextTrackList:W.eZ,TimeRanges:W.f_,TouchEvent:W.ay,TouchList:W.f3,TrackDefaultList:W.f4,TreeWalker:W.cq,CompositionEvent:W.az,FocusEvent:W.az,TextEvent:W.az,UIEvent:W.az,URL:W.fd,VideoTrackList:W.fe,WebSocket:W.ff,WheelEvent:W.aB,Window:W.bj,DOMWindow:W.bj,CSSRuleList:W.fq,DOMRect:W.fr,GamepadList:W.fI,NamedNodeMap:W.cI,MozNamedAttrMap:W.cI,SpeechRecognitionResultList:W.h_,StyleSheetList:W.h0,SVGLengthList:P.dZ,SVGNumberList:P.el,SVGPointList:P.ev,SVGScriptElement:P.bg,SVGStringList:P.eU,SVGAElement:P.h,SVGAnimateElement:P.h,SVGAnimateMotionElement:P.h,SVGAnimateTransformElement:P.h,SVGAnimationElement:P.h,SVGCircleElement:P.h,SVGClipPathElement:P.h,SVGDefsElement:P.h,SVGDescElement:P.h,SVGDiscardElement:P.h,SVGEllipseElement:P.h,SVGFEBlendElement:P.h,SVGFEColorMatrixElement:P.h,SVGFEComponentTransferElement:P.h,SVGFECompositeElement:P.h,SVGFEConvolveMatrixElement:P.h,SVGFEDiffuseLightingElement:P.h,SVGFEDisplacementMapElement:P.h,SVGFEDistantLightElement:P.h,SVGFEFloodElement:P.h,SVGFEFuncAElement:P.h,SVGFEFuncBElement:P.h,SVGFEFuncGElement:P.h,SVGFEFuncRElement:P.h,SVGFEGaussianBlurElement:P.h,SVGFEImageElement:P.h,SVGFEMergeElement:P.h,SVGFEMergeNodeElement:P.h,SVGFEMorphologyElement:P.h,SVGFEOffsetElement:P.h,SVGFEPointLightElement:P.h,SVGFESpecularLightingElement:P.h,SVGFESpotLightElement:P.h,SVGFETileElement:P.h,SVGFETurbulenceElement:P.h,SVGFilterElement:P.h,SVGForeignObjectElement:P.h,SVGGElement:P.h,SVGGeometryElement:P.h,SVGGraphicsElement:P.h,SVGImageElement:P.h,SVGLineElement:P.h,SVGLinearGradientElement:P.h,SVGMarkerElement:P.h,SVGMaskElement:P.h,SVGMetadataElement:P.h,SVGPathElement:P.h,SVGPatternElement:P.h,SVGPolygonElement:P.h,SVGPolylineElement:P.h,SVGRadialGradientElement:P.h,SVGRectElement:P.h,SVGSetElement:P.h,SVGStopElement:P.h,SVGStyleElement:P.h,SVGSVGElement:P.h,SVGSwitchElement:P.h,SVGSymbolElement:P.h,SVGTSpanElement:P.h,SVGTextContentElement:P.h,SVGTextElement:P.h,SVGTextPathElement:P.h,SVGTextPositioningElement:P.h,SVGTitleElement:P.h,SVGUseElement:P.h,SVGViewElement:P.h,SVGGradientElement:P.h,SVGComponentTransferFunctionElement:P.h,SVGFEDropShadowElement:P.h,SVGMPathElement:P.h,SVGElement:P.h,SVGTransformList:P.f5,AudioBuffer:P.dn,AudioTrackList:P.dp,AudioContext:P.aH,webkitAudioContext:P.aH,BaseAudioContext:P.aH,OfflineAudioContext:P.em,WebGLRenderingContext:P.eA,WebGL2RenderingContext:P.eB,SQLResultSetRowList:P.eK})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,Blob:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSStyleSheet:true,CSSSupportsRule:true,CSSVariableReferenceValue:true,CSSViewportRule:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,File:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,Gamepad:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechGrammar:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,StyleSheet:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,Touch:true,TrackDefault:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGLength:true,SVGMatrix:true,SVGNumber:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGTransform:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioParamMap:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float64Array:true,Float32Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SourceBuffer:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,TextTrack:true,TextTrackCue:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,VTTCue:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,ServiceWorker:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,FileList:true,FileWriter:true,HTMLFormElement:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,KeyboardEvent:true,Location:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,PresentationConnection:true,Range:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,SourceBufferList:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLengthList:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransformList:true,AudioBuffer:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.c3.$nativeSuperclassTag="ArrayBufferView"
H.bo.$nativeSuperclassTag="ArrayBufferView"
H.bp.$nativeSuperclassTag="ArrayBufferView"
H.bd.$nativeSuperclassTag="ArrayBufferView"
H.bq.$nativeSuperclassTag="ArrayBufferView"
H.br.$nativeSuperclassTag="ArrayBufferView"
H.c4.$nativeSuperclassTag="ArrayBufferView"
W.bt.$nativeSuperclassTag="EventTarget"
W.bu.$nativeSuperclassTag="EventTarget"
W.bv.$nativeSuperclassTag="EventTarget"
W.bw.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.k0(N.jI(),b)},[])
else (function(b){H.k0(N.jI(),b)})([])})})()