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
a[c]=function(){a[c]=function(){H.md(b)}
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
if(v[t][a])return v[t][a]}}var C={},H={hU:function hU(a){this.a=a},
i0:function(a,b,c,d){if(!!a.$isj)return new H.dE(a,b,[c,d])
return new H.c4(a,b,[c,d])},
dU:function(){return new P.aP("No element")},
l3:function(){return new P.aP("Too many elements")},
l2:function(){return new P.aP("Too few elements")},
lk:function(a,b){H.ch(a,0,J.b_(a)-1,b)},
ch:function(a,b,c,d){if(c-b<=32)H.lj(a,b,c,d)
else H.li(a,b,c,d)},
lj:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.N(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.W(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.j(a,q,s.h(a,p))
q=p}s.j(a,q,r)}},
li:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.b(t>32)
s=C.b.v(t+1,6)
r=a3+s
q=a4-s
p=C.b.v(a3+a4,2)
o=p-s
n=p+s
t=J.N(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.W(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.W(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.W(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.W(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.W(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.W(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.W(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.W(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.W(a5.$2(j,i),0)){h=i
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
H.ch(a2,a3,g-2,a5)
H.ch(a2,f+2,a4,a5)
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
break}}H.ch(a2,g,f,a5)}else H.ch(a2,g,f,a5)},
j:function j(){},
aL:function aL(){},
c2:function c2(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
c4:function c4(a,b,c){this.a=a
this.b=b
this.$ti=c},
dE:function dE(a,b,c){this.a=a
this.b=b
this.$ti=c},
e4:function e4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
b8:function b8(a,b,c){this.a=a
this.b=b
this.$ti=c},
cu:function cu(a,b,c){this.a=a
this.b=b
this.$ti=c},
fh:function fh(a,b,c){this.a=a
this.b=b
this.$ti=c},
aJ:function aJ(){},
df:function(a,b){var t=a.a9(b)
if(!u.globalState.d.cy)u.globalState.f.ah()
return t},
hg:function(){++u.globalState.f.b},
hu:function(){--u.globalState.f.b
H.b(u.globalState.f.b>=0)},
jX:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.v(s).$isl)throw H.c(P.iK("Arguments to main must be a List: "+H.e(s)))
u.globalState=new H.fR(0,0,1,null,null,null,null,null,null,null,null,null,a)
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
s.f=new H.fu(P.i_(null,H.aB),0)
q=P.x
s.sew(new H.Z(0,null,null,null,null,null,0,[q,H.aR]))
s.sez(new H.Z(0,null,null,null,null,null,0,[q,null]))
if(s.x){r=new H.fQ()
s.Q=r
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.kY,r)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.lx)}if(u.globalState.x)return
o=H.jy()
u.globalState.e=o
u.globalState.z.j(0,o.a,o)
u.globalState.d=o
if(H.aX(a,{func:1,args:[P.H]}))o.a9(new H.hD(t,a))
else if(H.aX(a,{func:1,args:[P.H,P.H]}))o.a9(new H.hE(t,a))
else o.a9(a)
u.globalState.f.ah()},
lx:function(a){var t=P.ar(["command","print","msg",a])
return new H.U(!0,P.aS(null,P.x)).F(t)},
jy:function(){var t,s
t=u.globalState.a++
s=P.x
t=new H.aR(t,new H.Z(0,null,null,null,null,null,0,[s,H.cf]),P.as(null,null,null,s),u.createNewIsolate(),new H.cf(0,null,!1),new H.ai(H.jW()),new H.ai(H.jW()),!1,!1,[],P.as(null,null,null,null),null,null,!1,!0,P.as(null,null,null,null))
t.dk()
return t},
l_:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.l0()
return},
l0:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.c(P.u("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.c(P.u('Cannot extract URI from "'+t+'"'))},
kY:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=new H.aA(!0,[]).P(b.data)
s=J.N(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.m0(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.aA(!0,[]).P(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.aA(!0,[]).P(s.h(t,"replyTo"))
k=H.jy()
u.globalState.f.a.L(0,new H.aB(k,new H.dR(q,p,o,n,m,l),"worker-start"))
u.globalState.d=k
u.globalState.f.ah()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.ks(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.ah()
break
case"close":u.globalState.ch.ag(0,$.$get$j3().h(0,a))
a.terminate()
u.globalState.f.ah()
break
case"log":H.kX(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
j=P.ar(["command","print","msg",t])
j=new H.U(!0,P.aS(null,P.x)).F(j)
s.toString
self.postMessage(j)}else P.a8(s.h(t,"msg"))
break
case"error":throw H.c(s.h(t,"msg"))}},
kX:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.ar(["command","log","msg",a])
r=new H.U(!0,P.aS(null,P.x)).F(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.G(q)
t=H.ae(q)
s=P.bS(t)
throw H.c(s)}},
kZ:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.ja=$.ja+("_"+s)
$.jb=$.jb+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.D(0,["spawned",new H.aT(s,r),q,t.r])
r=new H.dS(t,d,a,c,b)
if(e){t.bF(q,q)
u.globalState.f.a.L(0,new H.aB(t,r,"start isolate"))}else r.$0()},
ll:function(a,b){var t=new H.f1(!0,!1,null,0)
t.da(a,b)
return t},
lz:function(a){return new H.aA(!0,[]).P(new H.U(!1,P.aS(null,P.x)).F(a))},
hD:function hD(a,b){this.a=a
this.b=b},
hE:function hE(a,b){this.a=a
this.b=b},
fR:function fR(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
aR:function aR(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
fL:function fL(a,b){this.a=a
this.b=b},
fu:function fu(a,b){this.a=a
this.b=b},
fv:function fv(a){this.a=a},
aB:function aB(a,b,c){this.a=a
this.b=b
this.c=c},
fQ:function fQ(){},
dR:function dR(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dS:function dS(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fp:function fp(){},
aT:function aT(a,b){this.b=a
this.a=b},
fS:function fS(a,b){this.a=a
this.b=b},
bx:function bx(a,b,c){this.b=a
this.c=b
this.a=c},
cf:function cf(a,b,c){this.a=a
this.b=b
this.c=c},
f1:function f1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f2:function f2(a,b){this.a=a
this.b=b},
f3:function f3(a,b){this.a=a
this.b=b},
ai:function ai(a){this.a=a},
U:function U(a,b){this.a=a
this.b=b},
aA:function aA(a,b){this.a=a
this.b=b},
lV:function(a){return u.types[a]},
m2:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.v(a).$ist},
e:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.b0(a)
if(typeof t!=="string")throw H.c(H.K(a))
return t},
lf:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t=J.an(t)
s=t[0]
r=t[1]
return new H.ey(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
au:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
bd:function(a){var t,s,r,q,p,o,n,m,l
t=J.v(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.N||!!J.v(a).$isay){p=C.C(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.j.aC(q,0)===36)q=C.j.cT(q,1)
l=H.ht(H.hi(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+l,u.mangledGlobalNames)},
I:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lc:function(a){return a.b?H.I(a).getUTCFullYear()+0:H.I(a).getFullYear()+0},
la:function(a){return a.b?H.I(a).getUTCMonth()+1:H.I(a).getMonth()+1},
l6:function(a){return a.b?H.I(a).getUTCDate()+0:H.I(a).getDate()+0},
l7:function(a){return a.b?H.I(a).getUTCHours()+0:H.I(a).getHours()+0},
l9:function(a){return a.b?H.I(a).getUTCMinutes()+0:H.I(a).getMinutes()+0},
lb:function(a){return a.b?H.I(a).getUTCSeconds()+0:H.I(a).getSeconds()+0},
l8:function(a){return a.b?H.I(a).getUTCMilliseconds()+0:H.I(a).getMilliseconds()+0},
j9:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.c(H.K(a))
return a[b]},
aW:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.X(!0,b,"index",null)
t=J.b_(a)
if(b<0||C.b.cB(b,t))return P.y(b,a,"index",null,t)
return P.ex(b,"index",null)},
K:function(a){return new P.X(!0,a,null,null)},
c:function(a){var t
if(a==null)a=new P.cd()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.jY})
t.name=""}else t.toString=H.jY
return t},
jY:function(){return J.b0(this.dartException)},
E:function(a){throw H.c(a)},
P:function(a){throw H.c(P.a9(a))},
a2:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.f7(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
f8:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
jn:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
j8:function(a,b){return new H.ej(a,b==null?null:b.method)},
hW:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.dX(a,s,t?null:b.receiver)},
G:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.hF(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aN(r,16)&8191)===10)switch(q){case 438:return t.$1(H.hW(H.e(s)+" (Error "+q+")",null))
case 445:case 5007:return t.$1(H.j8(H.e(s)+" (Error "+q+")",null))}}if(a instanceof TypeError){p=$.$get$jh()
o=$.$get$ji()
n=$.$get$jj()
m=$.$get$jk()
l=$.$get$jo()
k=$.$get$jp()
j=$.$get$jm()
$.$get$jl()
i=$.$get$jr()
h=$.$get$jq()
g=p.I(s)
if(g!=null)return t.$1(H.hW(s,g))
else{g=o.I(s)
if(g!=null){g.method="call"
return t.$1(H.hW(s,g))}else{g=n.I(s)
if(g==null){g=m.I(s)
if(g==null){g=l.I(s)
if(g==null){g=k.I(s)
if(g==null){g=j.I(s)
if(g==null){g=m.I(s)
if(g==null){g=i.I(s)
if(g==null){g=h.I(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return t.$1(H.j8(s,g))}}return t.$1(new H.fc(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.ck()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.X(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.ck()
return a},
ae:function(a){var t
if(a==null)return new H.cV(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.cV(a,null)},
m6:function(a){if(a==null||typeof a!='object')return J.aZ(a)
else return H.au(a)},
lS:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=a.length
for(r=0;r<s;){q=r+1
H.b(t)
p=a[r]
r=q+1
H.b(t)
b.j(0,p,a[q])}return b},
m1:function(a,b,c,d,e,f,g){switch(c){case 0:return H.df(b,new H.ho(a))
case 1:return H.df(b,new H.hp(a,d))
case 2:return H.df(b,new H.hq(a,d,e))
case 3:return H.df(b,new H.hr(a,d,e,f))
case 4:return H.df(b,new H.hs(a,d,e,f,g))}throw H.c(P.bS("Unsupported number of arguments for wrapped closure"))},
bB:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.m1)
a.$identity=t
return t},
kJ:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.v(c).$isl){t.$reflectionInfo=c
r=H.lf(t).r}else r=c
q=d?Object.create(new H.eL().constructor.prototype):Object.create(new H.b1(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.iR(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.lV,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.iP:H.hN
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.c("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.iR(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
kG:function(a,b,c,d){var t=H.hN
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
iR:function(a,b,c){var t,s,r,q
if(c)return H.kI(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.kG(s,b==null?r!=null:b!==r,t,b)
return q},
kH:function(a,b,c,d){var t,s
t=H.hN
s=H.iP
switch(b?-1:a){case 0:throw H.c(H.lh("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
kI:function(a,b){var t,s,r,q
t=$.iQ
if(t==null){t=H.iN("self")
$.iQ=t}t=$.iO
if(t==null){t=H.iN("receiver")
$.iO=t}s=b.$stubName
r=b.length
q=a[s]
t=H.kH(r,b==null?q!=null:b!==q,s,b)
return t},
ik:function(a,b,c,d,e,f){var t,s
t=J.an(b)
s=!!J.v(c).$isl?J.an(c):c
return H.kJ(a,t,s,!!d,e,f)},
hN:function(a){return a.a},
iP:function(a){return a.c},
iN:function(a){var t,s,r,q,p
t=new H.b1("self","target","receiver","name")
s=J.an(Object.getOwnPropertyNames(t))
for(r=s.length,q=0;q<r;++q){p=s[q]
if(t[p]===a)return p}},
mo:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.a3(a,"String"))},
mj:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a3(a,"double"))},
mn:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a3(a,"num"))},
lM:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.a3(a,"bool"))},
m0:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.a3(a,"int"))},
m8:function(a,b){throw H.c(H.a3(a,b.substring(3)))},
m7:function(a,b){var t=J.N(b)
throw H.c(H.kF(a,t.bd(b,3,t.gi(b))))},
iq:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.v(a)[b])return a
H.m8(a,b)},
ag:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.v(a)[b]
else t=!0
if(t)return a
H.m7(a,b)},
mm:function(a){if(a==null)return a
if(!!J.v(a).$isl)return a
throw H.c(H.a3(a,"List"))},
il:function(a){var t=J.v(a)
return"$S" in t?t.$S():null},
aX:function(a,b){var t,s
if(a==null)return!1
t=H.il(a)
if(t==null)s=!1
else s=H.jQ(t,b)
return s},
mk:function(a,b){var t,s
if(a==null)return a
if($.ig)return a
$.ig=!0
try{if(H.aX(a,b))return a
t=H.hx(b,null)
s=H.a3(a,t)
throw H.c(s)}finally{$.ig=!1}},
a3:function(a,b){return new H.f9("TypeError: "+H.e(P.bR(a))+": type '"+H.jE(a)+"' is not a subtype of type '"+b+"'")},
kF:function(a,b){return new H.dq("CastError: "+H.e(P.bR(a))+": type '"+H.jE(a)+"' is not a subtype of type '"+b+"'")},
jE:function(a){var t
if(a instanceof H.ak){t=H.il(a)
if(t!=null)return H.hx(t,null)
return"Closure"}return H.bd(a)},
ab:function(a){if(!0===a)return!1
if(!!J.v(a).$ishS)a=a.$0()
if(typeof a==="boolean")return!a
throw H.c(H.a3(a,"bool"))},
aD:function(a){throw H.c(new H.fj(a))},
b:function(a){if(H.ab(a))throw H.c(P.kE(null))},
md:function(a){throw H.c(new P.dx(a))},
lh:function(a){return new H.eC(a)},
jW:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
jO:function(a){return u.getIsolateTag(a)},
D:function(a,b){H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
hi:function(a){if(a==null)return
return a.$ti},
jP:function(a,b){return H.iu(a["$as"+H.e(b)],H.hi(a))},
V:function(a,b,c){var t,s
t=H.jP(a,b)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
af:function(a,b){var t,s
t=H.hi(a)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
hx:function(a,b){var t=H.aY(a,b)
return t},
aY:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.b(!0)
H.b(!0)
return a[0].name+H.ht(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.e(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aY(t,b)
return H.lB(a,b)}return"unknown-reified-type"},
lB:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aY(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aY(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aY(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.lR(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aY(l[j],b)+(" "+H.e(j))}q+="}"}return"("+q+") => "+t},
ht:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=new P.bg("")
for(r=b,q=!0,p=!0;H.b(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.b(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aY(o,c)}return p?"":"<"+s.k(0)+">"},
lU:function(a){var t,s,r
if(a instanceof H.ak){t=H.il(a)
if(t!=null)return H.hx(t,null)}s=J.v(a).constructor.name
if(a==null)return s
r=H.ht(a.$ti,0,null)
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
t=H.hi(a)
s=J.v(a)
if(s[b]==null)return!1
return H.jI(H.iu(s[d],t),c)},
mg:function(a,b,c,d){var t,s
if(a==null)return a
t=H.ij(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.ht(c,0,null)
throw H.c(H.a3(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
jI:function(a,b){var t,s,r,q,p
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
if(!H.O(r,b[p]))return!1}return!0},
mh:function(a,b,c){return H.ir(a,b,H.jP(b,c))},
O:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.name==="H")return!0
if('func' in b)return H.jQ(a,b)
if('func' in a)return b.name==="hS"||b.name==="B"
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
return H.jI(H.iu(o,t),r)},
jH:function(a,b,c){var t,s,r,q,p,o,n
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
if(!(H.O(o,n)||H.O(n,o)))return!1}return!0},
lI:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
H.b(typeof a=='object')
H.b(typeof b=='object')
t=J.an(Object.getOwnPropertyNames(b))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.O(p,o)||H.O(o,p)))return!1}return!0},
jQ:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.b('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.O(t,s)||H.O(s,t)))return!1}r=a.args
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
if(n===m){if(!H.jH(r,q,!1))return!1
if(!H.jH(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.b(j)
g=r[h]
H.b(i)
f=q[h]
if(!(H.O(g,f)||H.O(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=q[e]
if(!(H.O(g,f)||H.O(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=o[e]
if(!(H.O(g,f)||H.O(f,g)))return!1}}return H.lI(a.named,b.named)},
ir:function(a,b,c){H.b(typeof a=="function")
H.b(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
mp:function(a){var t=$.im
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
ml:function(a){return H.au(a)},
mi:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
m3:function(a){var t,s,r,q,p,o
H.b(!(a instanceof P.B))
t=$.im.$1(a)
s=$.hf[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.hn[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.jG.$2(a,t)
if(t!=null){s=$.hf[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.hn[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.hw(r)
$.hf[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.hn[t]=r
return r}if(p==="-"){o=H.hw(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.jS(a,r)
if(p==="*")throw H.c(P.js(t))
if(u.leafTags[t]===true){o=H.hw(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.jS(a,r)},
jS:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.is(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
hw:function(a){return J.is(a,!1,null,!!a.$ist)},
m5:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return H.hw(t)
else return J.is(t,c,null,null)},
lZ:function(){if(!0===$.ip)return
$.ip=!0
H.m_()},
m_:function(){var t,s,r,q,p,o,n,m
$.hf=Object.create(null)
$.hn=Object.create(null)
H.lY()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.jV.$1(p)
if(o!=null){n=H.m5(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
lY:function(){var t,s,r,q,p,o,n
t=C.R()
t=H.aV(C.O,H.aV(C.T,H.aV(C.B,H.aV(C.B,H.aV(C.S,H.aV(C.P,H.aV(C.Q(C.C),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.im=new H.hk(p)
$.jG=new H.hl(o)
$.jV=new H.hm(n)},
aV:function(a,b){return a(b)||b},
mc:function(a,b,c){var t=a.indexOf(b,c)
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
f7:function f7(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ej:function ej(a,b){this.a=a
this.b=b},
dX:function dX(a,b,c){this.a=a
this.b=b
this.c=c},
fc:function fc(a){this.a=a},
hF:function hF(a){this.a=a},
cV:function cV(a,b){this.a=a
this.b=b},
ho:function ho(a){this.a=a},
hp:function hp(a,b){this.a=a
this.b=b},
hq:function hq(a,b,c){this.a=a
this.b=b
this.c=c},
hr:function hr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hs:function hs(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ak:function ak(){},
eX:function eX(){},
eL:function eL(){},
b1:function b1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f9:function f9(a){this.a=a},
dq:function dq(a){this.a=a},
eC:function eC(a){this.a=a},
fj:function fj(a){this.a=a},
ct:function ct(a,b){this.a=a
this.b=b},
Z:function Z(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
dW:function dW(a){this.a=a},
dZ:function dZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e_:function e_(a,b){this.a=a
this.$ti=b},
e0:function e0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hk:function hk(a){this.a=a},
hl:function hl(a){this.a=a},
hm:function hm(a){this.a=a},
lA:function(a){var t,s,r
if(!!J.v(a).$iso)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
a6:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.aW(b,a))},
ba:function ba(){},
at:function at(){},
c7:function c7(){},
bb:function bb(){},
c8:function c8(){},
c6:function c6(){},
eb:function eb(){},
ec:function ec(){},
ed:function ed(){},
ee:function ee(){},
ef:function ef(){},
c9:function c9(){},
eg:function eg(){},
bo:function bo(){},
bp:function bp(){},
bq:function bq(){},
br:function br(){},
lR:function(a){return J.an(H.D(a?Object.keys(a):[],[null]))},
bF:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
v:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.c_.prototype
return J.bZ.prototype}if(typeof a=="string")return J.ao.prototype
if(a==null)return J.c0.prototype
if(typeof a=="boolean")return J.dV.prototype
if(a.constructor==Array)return J.am.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ap.prototype
return a}if(a instanceof P.B)return a
return J.hh(a)},
is:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hh:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.ip==null){H.lZ()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.c(P.js("Return interceptor for "+H.e(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$hV()]
if(p!=null)return p
p=H.m3(a)
if(p!=null)return p
if(typeof a=="function")return C.U
s=Object.getPrototypeOf(a)
if(s==null)return C.E
if(s===Object.prototype)return C.E
if(typeof q=="function"){Object.defineProperty(q,$.$get$hV(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
an:function(a){a.fixed$length=Array
return a},
N:function(a){if(typeof a=="string")return J.ao.prototype
if(a==null)return a
if(a.constructor==Array)return J.am.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ap.prototype
return a}if(a instanceof P.B)return a
return J.hh(a)},
dg:function(a){if(a==null)return a
if(a.constructor==Array)return J.am.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ap.prototype
return a}if(a instanceof P.B)return a
return J.hh(a)},
jM:function(a){if(typeof a=="number")return J.aK.prototype
if(a==null)return a
if(!(a instanceof P.B))return J.ay.prototype
return a},
lT:function(a){if(typeof a=="number")return J.aK.prototype
if(typeof a=="string")return J.ao.prototype
if(a==null)return a
if(!(a instanceof P.B))return J.ay.prototype
return a},
jN:function(a){if(typeof a=="string")return J.ao.prototype
if(a==null)return a
if(!(a instanceof P.B))return J.ay.prototype
return a},
k:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ap.prototype
return a}if(a instanceof P.B)return a
return J.hh(a)},
A:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.v(a).u(a,b)},
W:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.jM(a).ay(a,b)},
jZ:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.jM(a).V(a,b)},
iv:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.m2(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.N(a).h(a,b)},
k_:function(a,b,c,d){return J.k(a).dr(a,b,c,d)},
iw:function(a,b){return J.jN(a).aC(a,b)},
hG:function(a,b){return J.k(a).dK(a,b)},
k0:function(a,b,c){return J.k(a).dL(a,b,c)},
ix:function(a,b){return J.k(a).bE(a,b)},
hH:function(a,b){return J.k(a).J(a,b)},
iy:function(a,b,c){return J.k(a).bH(a,b,c)},
k1:function(a,b){return J.k(a).dZ(a,b)},
iz:function(a,b,c){return J.k(a).bI(a,b,c)},
bG:function(a,b,c){return J.k(a).bJ(a,b,c)},
hI:function(a,b){return J.k(a).e1(a,b)},
k2:function(a,b){return J.k(a).bK(a,b)},
k3:function(a,b,c){return J.k(a).bL(a,b,c)},
k4:function(a,b,c,d){return J.k(a).bM(a,b,c,d)},
k5:function(a,b,c,d,e){return J.k(a).bN(a,b,c,d,e)},
k6:function(a,b){return J.lT(a).K(a,b)},
hJ:function(a,b,c){return J.N(a).e5(a,b,c)},
iA:function(a){return J.k(a).bP(a)},
k7:function(a){return J.k(a).bQ(a)},
k8:function(a){return J.k(a).bT(a)},
k9:function(a){return J.k(a).ea(a)},
ka:function(a,b){return J.k(a).bV(a,b)},
hK:function(a,b){return J.k(a).bW(a,b)},
kb:function(a,b,c,d){return J.k(a).bX(a,b,c,d)},
kc:function(a,b,c,d,e){return J.k(a).eh(a,b,c,d,e)},
kd:function(a,b,c,d,e){return J.k(a).bY(a,b,c,d,e)},
ke:function(a,b,c,d,e,f){return J.k(a).ei(a,b,c,d,e,f)},
kf:function(a,b){return J.dg(a).p(a,b)},
dh:function(a,b){return J.k(a).bZ(a,b)},
kg:function(a,b){return J.k(a).c_(a,b)},
kh:function(a){return J.k(a).ej(a)},
iB:function(a,b){return J.dg(a).aa(a,b)},
ki:function(a){return J.k(a).gdY(a)},
aZ:function(a){return J.v(a).gq(a)},
aE:function(a){return J.dg(a).gt(a)},
b_:function(a){return J.N(a).gi(a)},
kj:function(a){return J.k(a).gaV(a)},
kk:function(a){return J.k(a).geL(a)},
hL:function(a,b){return J.k(a).a1(a,b)},
kl:function(a){return J.k(a).ax(a)},
km:function(a){return J.k(a).b1(a)},
kn:function(a,b){return J.k(a).b2(a,b)},
ko:function(a,b,c){return J.k(a).b3(a,b,c)},
iC:function(a,b,c){return J.k(a).b6(a,b,c)},
kp:function(a,b){return J.k(a).c2(a,b)},
kq:function(a,b){return J.dg(a).c4(a,b)},
kr:function(a,b,c){return J.k(a).c6(a,b,c)},
iD:function(a){return J.dg(a).eE(a)},
ks:function(a,b){return J.k(a).D(a,b)},
kt:function(a,b,c,d){return J.k(a).bc(a,b,c,d)},
ku:function(a,b,c,d,e,f,g){return J.k(a).ca(a,b,c,d,e,f,g)},
kv:function(a,b,c,d){return J.k(a).cb(a,b,c,d)},
iE:function(a,b,c,d){return J.k(a).cc(a,b,c,d)},
kw:function(a){return J.jN(a).eO(a)},
b0:function(a){return J.v(a).k(a)},
kx:function(a,b,c,d){return J.k(a).eQ(a,b,c,d)},
ky:function(a,b,c){return J.k(a).cg(a,b,c)},
kz:function(a,b,c){return J.k(a).ci(a,b,c)},
hM:function(a,b,c){return J.k(a).cj(a,b,c)},
kA:function(a,b,c){return J.k(a).ck(a,b,c)},
iF:function(a,b,c){return J.k(a).cl(a,b,c)},
iG:function(a,b,c){return J.k(a).cm(a,b,c)},
iH:function(a,b,c){return J.k(a).cn(a,b,c)},
iI:function(a,b,c,d){return J.k(a).co(a,b,c,d)},
iJ:function(a,b,c,d){return J.k(a).cp(a,b,c,d)},
kB:function(a,b){return J.k(a).cr(a,b)},
kC:function(a,b,c){return J.k(a).eR(a,b,c)},
kD:function(a,b,c,d,e,f,g){return J.k(a).ct(a,b,c,d,e,f,g)},
a:function a(){},
dV:function dV(){},
c0:function c0(){},
b7:function b7(){},
es:function es(){},
ay:function ay(){},
ap:function ap(){},
am:function am(a){this.$ti=a},
hT:function hT(a){this.$ti=a},
dl:function dl(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aK:function aK(){},
c_:function c_(){},
bZ:function bZ(){},
ao:function ao(){}},P={
lo:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.lJ()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.bB(new P.fl(t),1)).observe(s,{childList:true})
return new P.fk(t,s,r)}else if(self.setImmediate!=null)return P.lK()
return P.lL()},
lp:function(a){H.hg()
self.scheduleImmediate(H.bB(new P.fm(a),0))},
lq:function(a){H.hg()
self.setImmediate(H.bB(new P.fn(a),0))},
lr:function(a){P.i6(C.z,a)},
i6:function(a,b){var t=C.b.v(a.a,1000)
return H.ll(t<0?0:t,b)},
lE:function(a,b){if(H.aX(a,{func:1,args:[P.H,P.H]})){b.toString
return a}else{b.toString
return a}},
lt:function(a,b){var t,s,r
H.b(b.a<4)
H.b(!(a instanceof P.a5))
H.b(b.a===0)
b.a=1
try{a.ce(new P.fB(b),new P.fC(b))}catch(r){t=H.G(r)
s=H.ae(r)
P.m9(new P.fD(b,t,s))}},
jv:function(a,b){var t,s,r
H.b(b.a<=1)
for(;t=a.a,s=t===2,s;){H.b(s)
a=a.c}if(t>=4){r=b.aL()
b.aB(a)
P.bk(b,r)}else{r=b.c
H.b(b.a<=1)
b.a=2
b.c=a
a.by(r)}},
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
P.h9(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
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
P.h9(null,null,p,o,s)
return}s=$.z
if(s==null?l!=null:s!==l){H.b(l!=null)
s=$.z
H.b(l==null?s!=null:l!==s)
j=$.z
$.z=l
i=j}else i=null
s=b.c
if(s===8)new P.fH(t,r,b,q).$0()
else if(p){if((s&1)!==0)new P.fG(r,b,m).$0()}else if((s&2)!==0)new P.fF(t,r,b).$0()
if(i!=null){H.b(!0)
$.z=i}s=r.b
if(!!J.v(s).$isdK){if(s.a>=4){H.b(o.a<4)
h=o.c
o.c=null
b=o.ar(h)
H.b(o.a<4)
H.b(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.jv(s,o)
return}}g=b.b
H.b(g.a<4)
h=g.c
g.c=null
b=g.ar(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.b(!o)
g.a=4
g.c=p}else{H.b(!o)
g.a=8
g.c=p}t.a=g
s=g}},
lD:function(){var t,s
for(;t=$.aU,t!=null;){$.bz=null
s=t.b
$.aU=s
if(s==null)$.by=null
t.a.$0()}},
lH:function(){$.ih=!0
try{P.lD()}finally{$.bz=null
$.ih=!1
if($.aU!=null)$.$get$ib().$1(P.jJ())}},
jD:function(a){var t=new P.cv(a,null)
if($.aU==null){$.by=t
$.aU=t
if(!$.ih)$.$get$ib().$1(P.jJ())}else{$.by.b=t
$.by=t}},
lG:function(a){var t,s,r
t=$.aU
if(t==null){P.jD(a)
$.bz=$.by
return}s=new P.cv(a,null)
r=$.bz
if(r==null){s.b=t
$.bz=s
$.aU=s}else{s.b=r.b
r.b=s
$.bz=s
if(s.b==null)$.by=s}},
m9:function(a){var t=$.z
if(C.h===t){P.hb(null,null,C.h,a)
return}t.toString
P.hb(null,null,t,t.aR(a))},
lm:function(a,b){var t=$.z
if(t===C.h){t.toString
return P.i6(a,b)}return P.i6(a,t.aR(b))},
ia:function(a){var t,s
H.b(a!=null)
t=$.z
H.b(a==null?t!=null:a!==t)
s=$.z
$.z=a
return s},
h9:function(a,b,c,d,e){var t={}
t.a=d
P.lG(new P.ha(t,e))},
jB:function(a,b,c,d){var t,s
if($.z===c)return d.$0()
t=P.ia(c)
try{s=d.$0()
return s}finally{s=t
H.b(s!=null)
$.z=s}},
jC:function(a,b,c,d,e){var t,s
if($.z===c)return d.$1(e)
t=P.ia(c)
try{s=d.$1(e)
return s}finally{s=t
H.b(s!=null)
$.z=s}},
lF:function(a,b,c,d,e,f){var t,s
if($.z===c)return d.$2(e,f)
t=P.ia(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.b(s!=null)
$.z=s}},
hb:function(a,b,c,d){var t=C.h!==c
if(t)d=!(!t||!1)?c.aR(d):c.e_(d)
P.jD(d)},
fl:function fl(a){this.a=a},
fk:function fk(a,b,c){this.a=a
this.b=b
this.c=c},
fm:function fm(a){this.a=a},
fn:function fn(a){this.a=a},
hO:function hO(){},
fq:function fq(){},
h4:function h4(a,b){this.a=a
this.$ti=b},
cD:function cD(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
a5:function a5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
fA:function fA(a,b){this.a=a
this.b=b},
fE:function fE(a,b){this.a=a
this.b=b},
fB:function fB(a){this.a=a},
fC:function fC(a){this.a=a},
fD:function fD(a,b,c){this.a=a
this.b=b
this.c=c},
fH:function fH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fI:function fI(a){this.a=a},
fG:function fG(a,b,c){this.a=a
this.b=b
this.c=c},
fF:function fF(a,b,c){this.a=a
this.b=b
this.c=c},
cv:function cv(a,b){this.a=a
this.b=b},
eQ:function eQ(){},
eS:function eS(a){this.a=a},
eT:function eT(a,b){this.a=a
this.b=b},
eR:function eR(){},
i5:function i5(){},
aF:function aF(a,b){this.a=a
this.b=b},
h8:function h8(){},
ha:function ha(a,b){this.a=a
this.b=b},
fV:function fV(){},
fX:function fX(a,b){this.a=a
this.b=b},
fW:function fW(a,b){this.a=a
this.b=b},
fY:function fY(a,b){this.a=a
this.b=b},
j4:function(a,b){return new H.Z(0,null,null,null,null,null,0,[a,b])},
T:function(){return new H.Z(0,null,null,null,null,null,0,[null,null])},
ar:function(a){return H.lS(a,new H.Z(0,null,null,null,null,null,0,[null,null]))},
aS:function(a,b){return new P.fO(0,null,null,null,null,null,0,[a,b])},
as:function(a,b,c,d){return new P.fM(0,null,null,null,null,null,0,[d])},
ie:function(){var t=Object.create(null)
H.b(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
l1:function(a,b,c){var t,s
if(P.ii(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$bA()
C.a.l(s,a)
try{P.lC(a,t)}finally{H.b(C.a.gaT(s)===a)
s.pop()}s=P.jg(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
dT:function(a,b,c){var t,s,r
if(P.ii(a))return b+"..."+c
t=new P.bg(b)
s=$.$get$bA()
C.a.l(s,a)
try{r=t
r.a=P.jg(r.gX(),a,", ")}finally{H.b(C.a.gaT(s)===a)
s.pop()}s=t
s.a=s.gX()+c
s=t.gX()
return s.charCodeAt(0)==0?s:s},
ii:function(a){var t,s
for(t=0;s=$.$get$bA(),t<s.length;++t)if(a===s[t])return!0
return!1},
lC:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gt(a)
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
hZ:function(a,b){var t,s
t=P.as(null,null,null,b)
for(s=J.aE(a);s.m();)t.l(0,s.gn(s))
return t},
j7:function(a){var t,s,r
t={}
if(P.ii(a))return"{...}"
s=new P.bg("")
try{C.a.l($.$get$bA(),a)
r=s
r.a=r.gX()+"{"
t.a=!0
J.iB(a,new P.e3(t,s))
t=s
t.a=t.gX()+"}"}finally{t=$.$get$bA()
H.b(C.a.gaT(t)===a)
t.pop()}t=s.gX()
return t.charCodeAt(0)==0?t:t},
i_:function(a,b){var t=new P.e1(null,0,0,0,[b])
t.d4(a,b)
return t},
fO:function fO(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
fM:function fM(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
fN:function fN(a,b,c){this.a=a
this.b=b
this.c=c},
bm:function bm(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
fK:function fK(){},
hY:function hY(){},
c1:function c1(){},
m:function m(){},
c3:function c3(){},
e3:function e3(a,b){this.a=a
this.b=b},
aN:function aN(){},
e1:function e1(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
fP:function fP(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
eF:function eF(){},
eE:function eE(){},
bn:function bn(){},
kR:function(a){var t=J.v(a)
if(!!t.$isak)return t.k(a)
return"Instance of '"+H.bd(a)+"'"},
j5:function(a,b,c){var t,s
t=H.D([],[c])
for(s=J.aE(a);s.m();)C.a.l(t,s.gn(s))
return t},
jg:function(a,b,c){var t=J.aE(b)
if(!t.m())return a
if(c.length===0){do a+=H.e(t.gn(t))
while(t.m())}else{a+=H.e(t.gn(t))
for(;t.m();)a=a+c+H.e(t.gn(t))}return a},
kK:function(a,b){return J.k6(a,b)},
kL:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+t
if(t>=10)return s+"00"+t
return s+"000"+t},
kM:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bM:function(a){if(a>=10)return""+a
return"0"+a},
kO:function(a,b,c,d,e,f){return new P.al(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
bR:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.b0(a)
if(typeof a==="string")return JSON.stringify(a)
return P.kR(a)},
kE:function(a){return new P.bH(a)},
iK:function(a){return new P.X(!1,null,null,a)},
iL:function(a,b,c){return new P.X(!0,a,b,c)},
ld:function(a){return new P.be(null,null,!1,null,null,a)},
ex:function(a,b,c){return new P.be(null,null,!0,a,b,"Value not in range")},
av:function(a,b,c,d,e){return new P.be(b,c,!0,a,d,"Invalid value")},
jd:function(a,b,c,d,e,f){if(0>a||a>c)throw H.c(P.av(a,0,c,"start",f))
if(a>b||b>c)throw H.c(P.av(b,a,c,"end",f))
return b},
y:function(a,b,c,d,e){var t=e!=null?e:J.b_(b)
return new P.dP(b,t,!0,a,c,"Index out of range")},
u:function(a){return new P.fd(a)},
js:function(a){return new P.fb(a)},
i4:function(a){return new P.aP(a)},
a9:function(a){return new P.ds(a)},
bS:function(a){return new P.fz(a)},
a8:function(a){H.bF(H.e(a))},
ac:function ac(){},
C:function C(){},
b2:function b2(a,b){this.a=a
this.b=b},
ad:function ad(){},
al:function al(a){this.a=a},
dC:function dC(){},
dD:function dD(){},
aI:function aI(){},
bH:function bH(a){this.a=a},
cd:function cd(){},
X:function X(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
be:function be(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dP:function dP(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fd:function fd(a){this.a=a},
fb:function fb(a){this.a=a},
aP:function aP(a){this.a=a},
ds:function ds(a){this.a=a},
ck:function ck(){},
dx:function dx(a){this.a=a},
hQ:function hQ(){},
fz:function fz(a){this.a=a},
dG:function dG(a,b,c){this.a=a
this.b=b
this.$ti=c},
x:function x(){},
L:function L(){},
bY:function bY(){},
l:function l(){},
aM:function aM(){},
H:function H(){},
a7:function a7(){},
B:function B(){},
aO:function aO(){},
p:function p(){},
bg:function bg(a){this.a=a},
hd:function(a){var t,s,r,q,p
if(a==null)return
t=P.T()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.P)(s),++q){p=s[q]
t.j(0,p,a[p])}return t},
lP:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.iB(a,new P.hc(t))
return t},
iY:function(){var t=$.iX
if(t==null){t=J.hJ(window.navigator.userAgent,"Opera",0)
$.iX=t}return t},
kN:function(){var t,s
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
hc:function hc(a){this.a=a},
ly:function(a){var t=new P.fT(0,0)
t.dm(a)
return t},
fT:function fT(a,b){this.a=a
this.b=b},
i3:function i3(){},
fU:function fU(){},
M:function M(){},
dY:function dY(){},
ek:function ek(){},
eu:function eu(){},
bf:function bf(){},
eU:function eU(){},
f:function f(){},
f6:function f6(){},
cG:function cG(){},
cH:function cH(){},
cN:function cN(){},
cO:function cO(){},
cX:function cX(){},
cY:function cY(){},
d2:function d2(){},
d3:function d3(){},
dm:function dm(){},
dn:function dn(){},
aG:function aG(){},
el:function el(){},
eA:function eA(){},
eB:function eB(){},
eK:function eK(){},
cT:function cT(){},
cU:function cU(){}},W={
kP:function(a,b,c){var t,s
t=document.body
s=(t&&C.p).H(t,a,b,c)
s.toString
t=new H.cu(new W.J(s),new W.dF(),[W.r])
return t.gW(t)},
kQ:function(a){return"wheel"},
b4:function(a){var t,s,r
t="element tag unavailable"
try{s=J.kk(a)
if(typeof s==="string")t=a.tagName}catch(r){H.G(r)}return t},
ls:function(a,b){return document.createElement(a)},
aC:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jz:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
a4:function(a,b,c,d,e){var t=W.jF(new W.fy(c))
t=new W.fx(0,a,b,t,!1,[e])
t.di(a,b,c,!1,e)
return t},
jw:function(a){var t,s
t=document.createElement("a")
s=new W.fZ(t,window.location)
s=new W.bl(s)
s.dj(a)
return s},
lv:function(a,b,c,d){return!0},
lw:function(a,b,c,d){var t,s,r,q,p
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
jA:function(){var t=P.p
t=new W.h5(P.hZ(C.u,t),P.as(null,null,null,t),P.as(null,null,null,t),P.as(null,null,null,t),null)
t.dn(null,new H.b8(C.u,new W.h6(),[H.af(C.u,0),null]),["TEMPLATE"],null)
return t},
jF:function(a){var t=$.z
if(t===C.h)return a
return t.e0(a)},
i:function i(){},
di:function di(){},
dj:function dj(){},
dk:function dk(){},
ah:function ah(){},
bI:function bI(){},
bJ:function bJ(){},
bK:function bK(){},
aj:function aj(){},
dt:function dt(){},
aH:function aH(){},
du:function du(){},
Q:function Q(){},
Y:function Y(){},
dv:function dv(){},
dw:function dw(){},
dy:function dy(){},
bN:function bN(){},
b3:function b3(){},
dz:function dz(){},
bO:function bO(){},
bP:function bP(){},
bQ:function bQ(){},
dA:function dA(){},
dB:function dB(){},
S:function S(){},
dF:function dF(){},
h:function h(){},
d:function d(){},
dH:function dH(){},
dI:function dI(){},
dJ:function dJ(){},
bW:function bW(){},
dM:function dM(){},
b5:function b5(){},
bX:function bX(){},
dN:function dN(){},
b6:function b6(){},
aq:function aq(){},
e2:function e2(){},
e6:function e6(){},
e8:function e8(){},
b9:function b9(){},
e9:function e9(){},
F:function F(){},
J:function J(a){this.a=a},
r:function r(){},
ca:function ca(){},
bc:function bc(){},
a0:function a0(){},
et:function et(){},
ew:function ew(){},
ce:function ce(){},
cg:function cg(){},
eD:function eD(){},
eH:function eH(){},
eJ:function eJ(){},
a1:function a1(){},
eO:function eO(){},
eP:function eP(a){this.a=a},
cm:function cm(){},
eV:function eV(){},
eW:function eW(){},
bh:function bh(){},
eY:function eY(){},
eZ:function eZ(){},
f0:function f0(){},
aw:function aw(){},
f4:function f4(){},
f5:function f5(){},
cs:function cs(){},
ax:function ax(){},
fe:function fe(){},
ff:function ff(){},
fg:function fg(){},
az:function az(){},
bj:function bj(){},
fi:function fi(a){this.a=a},
i9:function i9(){},
fr:function fr(){},
fs:function fs(){},
fJ:function fJ(){},
cK:function cK(){},
h1:function h1(){},
h2:function h2(){},
fo:function fo(){},
ft:function ft(a){this.a=a},
fw:function fw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ic:function ic(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
fx:function fx(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fy:function fy(a){this.a=a},
bl:function bl(a){this.a=a},
n:function n(){},
cc:function cc(a){this.a=a},
ei:function ei(a){this.a=a},
eh:function eh(a,b,c){this.a=a
this.b=b
this.c=c},
bs:function bs(){},
h_:function h_(){},
h0:function h0(){},
h5:function h5(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
h6:function h6(){},
h3:function h3(){},
bU:function bU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cb:function cb(){},
i1:function i1(){},
i8:function i8(){},
fZ:function fZ(a,b){this.a=a
this.b=b},
d4:function d4(a){this.a=a},
h7:function h7(a){this.a=a},
cw:function cw(){},
cx:function cx(){},
cy:function cy(){},
cz:function cz(){},
cA:function cA(){},
cB:function cB(){},
cC:function cC(){},
cE:function cE(){},
cF:function cF(){},
cI:function cI(){},
cJ:function cJ(){},
cL:function cL(){},
cM:function cM(){},
cP:function cP(){},
cQ:function cQ(){},
bt:function bt(){},
bu:function bu(){},
cR:function cR(){},
cS:function cS(){},
cW:function cW(){},
cZ:function cZ(){},
d_:function d_(){},
bv:function bv(){},
bw:function bw(){},
d0:function d0(){},
d1:function d1(){},
d5:function d5(){},
d6:function d6(){},
d7:function d7(){},
d8:function d8(){},
d9:function d9(){},
da:function da(){},
db:function db(){},
dc:function dc(){},
dd:function dd(){},
de:function de(){}},B={
ma:function(a){var t,s
t=document
s=W.aq
W.a4(t,"keydown",new B.hy(),!1,s)
W.a4(t,"keyup",new B.hz(),!1,s)
if(!$.mb)W.a4(t,"mousemove",new B.hA(),!1,W.F)
s=W.F
W.a4(t,"mousedown",new B.hB(),!1,s)
W.a4(t,"mouseup",new B.hC(),!1,s)},
l5:function(a,b,c,d){var t,s,r,q,p,o,n
t=new Float32Array(3)
s=$.$get$he()
r=$.$get$bC()
q=new T.a_(new Float32Array(16))
q.al()
p=new Float32Array(3)
o=new Float32Array(3)
n=new Float32Array(3)
t=new B.em(a,b,c,0,new T.q(t),-0.02,s,r,q,new T.q(p),new T.q(o),new T.q(n),new T.q(new Float32Array(3)),"camera:orbit",!1,!0)
t.d5(a,b,c,d)
return t},
hy:function hy(){},
hz:function hz(){},
hA:function hA(){},
hB:function hB(){},
hC:function hC(){},
em:function em(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
en:function en(a){this.a=a},
eo:function eo(a){this.a=a},
ep:function ep(){},
eq:function eq(a){this.a=a}},G={
ln:function(a){var t,s,r
t=H.D(a.split("\n"),[P.p])
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.e(t[s])}return C.a.ae(t,"\n")},
ju:function(a,b,c){var t,s,r,q
t=J.k(a)
s=t.bS(a,b)
t.ba(a,s,c)
t.bO(a,s)
r=t.b5(a,s,35713)
if(r!=null&&!r){q=t.b4(a,s)
P.a8("E:Compilation failed:")
P.a8("E:"+G.ln(c))
P.a8("E:Failure:")
P.a8(C.j.R("E:",q))
throw H.c(q)}return s},
j1:function(a,b){var t,s,r
t=a.length
b=new Float32Array(t*3)
for(t=a.length,s=0;s<t;++s){r=s*3
b[r]=a[s].a[0]
b[r+1]=a[s].a[1]
b[r+2]=a[s].a[2]}return b},
kT:function(a,b){var t,s,r
t=C.c.gi(a).C(0,2)
b=new Float32Array(t)
for(s=0;C.b.V(s,C.c.gi(a));++s){t=s*2
r=C.c.h(a,s)
b[t]=r.gaZ(r)
r=C.c.h(a,s)
b[t+1]=r.gb_(r)}return b},
kU:function(a,b){var t,s,r
t=C.c.gi(a).C(0,4)
b=new Float32Array(t)
for(s=0;C.b.V(s,C.c.gi(a));++s){t=s*4
r=C.c.h(a,s)
b[t]=r.gaZ(r)
r=C.c.h(a,s)
b[t+1]=r.gb_(r)
r=C.c.h(a,s)
b[t+2]=r.gcw(r)
r=C.c.h(a,s)
b[t+3]=r.geS(r)}return b},
kS:function(a,b){var t,s
t=C.c.gi(a).C(0,4)
b=new Uint32Array(t)
for(s=0;C.b.V(s,C.c.gi(a));++s){t=s*4
b[t]=C.c.h(a,s).h(0,0)
b[t+1]=C.c.h(a,s).h(0,1)
b[t+2]=C.c.h(a,s).h(0,2)
b[t+3]=C.c.h(a,s).h(0,3)}return b},
lu:function(a,b){var t,s,r,q,p,o
for(t=a.e,s=t.gB(t),s=s.gt(s),r=b.x;s.m();){q=s.gn(s)
if(!r.E(0,q)){q="Dropping unnecessary attribute: "+H.e(q)
if($.jL>0)H.bF("I: "+q)
continue}p=t.h(0,q)
switch($.$get$R().h(0,q).a){case"vec2":b.a3(q,G.kT(p,null),2)
break
case"vec3":b.a3(q,G.j1(p,null),3)
break
case"vec4":b.a3(q,G.kU(p,null),4)
break
case"float":b.a3(q,new Float32Array(H.lA(p)),1)
break
case"uvec4":b.a3(q,G.kS(p,null),4)
break
default:if(H.ab(!1)){q="unknown type for "+H.e(q)+" ["
o=C.c.h(p,0)
H.aD(q+H.e(o.geK(o))+"] ["+H.e(C.c.geK(p))+"] "+H.e(p))}}}},
lg:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.as(null,null,null,P.p)
s=c.b
r=d.b
q=c.f
p=J.k7(b.a)
o=G.ju(b.a,35633,s)
J.iy(b.a,p,o)
n=G.ju(b.a,35632,r)
J.iy(b.a,p,n)
if(q.length>0)J.kx(b.a,p,q,35980)
J.kp(b.a,p)
if(!J.ko(b.a,p,35714))H.E(J.kn(b.a,p))
t=new G.ez(b,c,d,p,P.hZ(c.c,null),P.T(),P.T(),t,null,a,!1,!0)
t.d6(a,b,c,d)
return t},
je:function(a){return new G.eG(a,null,[],[],[],[],0,P.T())},
ea:function ea(){},
fa:function fa(){},
dp:function dp(){},
dr:function dr(a,b){this.a=a
this.b=b},
dL:function dL(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cq:function cq(a,b,c){this.a=a
this.b=b
this.c=c},
cp:function cp(a,b,c){this.a=a
this.b=b
this.c=c},
e5:function e5(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
e7:function e7(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
er:function er(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
w:function w(a,b,c){this.a=a
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
eI:function eI(){},
f_:function f_(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bi:function bi(){},
dO:function dO(a,b,c,d,e,f){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f}},R={eM:function eM(){},eN:function eN(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
jc:function(a,b){var t,s,r,q
t=a.aU()
s=a.aU()
r=a.aU()
q=new T.q(new Float32Array(3))
q.am((t-0.5)*b,(s-0.5)*b,(r-0.5)*b)
return q},
j6:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j,i
t=[]
for(s=0;s<5;++s){r=a[s]
q=new Float32Array(3)
q[0]=r
q[1]=b
q[2]=c
p=new Float32Array(3)
o=new T.q(p)
o.w(new T.q(q))
o.ak(0,d)
q=new Float32Array(3)
o=new T.q(q)
n=new T.q(new Float32Array(3))
m=new T.q(new Float32Array(3))
l=new R.ev(o,n,m,0)
k=p[0]
j=p[1]
p=p[2]
i=new Float32Array(3)
i[0]=k
i[1]=j
i[2]=p
m.scv(new T.q(i))
i=q[0]
p=q[1]
q=q[2]
k=new Float32Array(3)
k[0]=i
k[1]=p
k[2]=q
n.scv(new T.q(k))
T.jt(n,m,0,o)
l.d=1
T.jt(n,m,1,o)
C.a.l(t,l)}return t},
m4:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
t={}
s=document
r=new R.eN(0,0,null,null,null,null)
r.d9(C.t.cD(s,"stats"),"blue","gray")
q=P.ly(0)
p=C.t.eD(s,"#webgl-canvas")
o=p.clientWidth
n=p.clientHeight
p.width=o
p.height=n
m=new G.dr(null,p)
l=(p&&C.x).b0(p,"webgl2",P.ar(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
m.a=l
if(l==null)H.E(P.bS('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
k="ChronosGL Config: "+H.e(J.kl(l))
if($.jL>0)P.a8("I: "+k)
J.k5(l,0,0,0,1)
J.dh(l,2929)
j=B.l5(15,0.5,0.5,p)
l=new T.a_(new Float32Array(16))
l.al()
k=new T.a_(new Float32Array(16))
k.al()
i=new G.er(j,50,1,0.1,1000,l,k,new T.a_(new Float32Array(16)),P.T(),"perspective",!1,!0)
i.bk()
i.d_(o,n)
h=G.lg("CPU",m,$.$get$jU(),$.$get$jT())
g=R.j6([2,1,0,-1,-2],0,2,3)
f=R.j6([2,1,0,-1,-2],0,-2,3)
l=new Float32Array(3)
e=new T.q(l)
l[2]=10010
l[1]=10010
l[0]=10010
d=[]
for(c=0;c<1e4;++c){b=new R.dQ(null,2)
l=new T.q(new Float32Array(3))
l.w(e)
b.a=l
C.a.l(d,b)}a=new Float32Array(3e4)
l=$.$get$iM()
a0=new G.e5(P.T(),"stars",!1,!0)
a0.U("cDepthTest",!0)
a0.U("cDepthWrite",!1)
a0.U("cBlendEquation",l)
a0.U("cStencilFunc",$.$get$jf())
a1=s.createElement("canvas")
a1.width=64
a1.height=64
a2=C.x.cC(a1,"2d")
a3=(a2&&C.q).bR(a2,32,32,1,32,32,22);(a3&&C.n).as(a3,0,"gray")
C.n.as(a3,1,"black")
a2.fillStyle=a3
C.q.ek(a2,0,0,64,64)
a3=C.q.bR(a2,32,32,1,32,32,6);(a3&&C.n).as(a3,0,"white")
C.n.as(a3,1,"gray")
a2.globalAlpha=0.9
a2.fillStyle=a3
a2.arc(32,32,4,0,6.283185307179586,!1)
a2.fill("nonzero")
s=new G.f_(!1,!1,!1,!0,1,9729,9729)
l=J.k8(m.a)
k=new G.dO(a1,"Utils::Particles",l,3553,m,s)
J.bG(m.a,3553,l)
J.kr(m.a,37440,1)
k.d8(a1)
s.d3(m,3553)
H.b(J.km(m.a)===0)
J.bG(m.a,3553,null)
a0.U("uTexture",k)
a0.U("uPointSize",200)
s=new T.a_(new Float32Array(16))
s.al()
a0.U("uModelMatrix",s)
s=[]
for(c=0;c<1e4;++c){l=new Float32Array(3)
k=new T.q(new Float32Array(3))
k.w(new T.q(l))
C.a.l(s,k)}l=h.d
k=h.e.x
a4=P.T()
a5=J.k9(l.a)
a6=new G.e7(l,a5,0,a4,k,null,0,-1,null,null,P.T(),"meshdata:",!1,!0)
a7=G.j1(s,null)
a4.j(0,"aPosition",J.iA(l.a))
a6.bg(a7)
a8=$.$get$R().h(0,"aPosition")
if(a8==null)H.E("Unknown canonical aPosition")
H.b(k.E(0,"aPosition"))
a9=k.h(0,"aPosition")
J.hI(l.a,a5)
l.c0(0,a9,0)
l.cu(0,a4.h(0,"aPosition"),a9,a8.bh(),5126,!1,0,0)
G.lu(new G.dL(!0,[],[],s,P.T()),a6)
t.a=0
new R.hv(t,j,d,g,f,q,a,a6,h,i,a0,r).$1(0)},
ev:function ev(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dQ:function dQ(a,b){this.a=a
this.b=b},
hv:function hv(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
_.ch=l}},A={
io:function(a){var t,s
t=C.Y.em(a,0,new A.hj())
s=536870911&t+(C.b.cz(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
hj:function hj(){}},T={
jt:function(a,b,c,d){var t,s,r,q
t=a.a
s=t[0]
r=b.a
q=d.a
q[0]=s+c*(r[0]-s)
s=t[1]
q[1]=s+c*(r[1]-s)
t=t[2]
q[2]=t+c*(r[2]-t)},
a_:function a_(a){this.a=a},
q:function q(a){this.a=a},
aQ:function aQ(a){this.a=a}}
var v=[C,H,J,P,W,B,G,R,A,T]
setFunctionNamesIfNecessary(v)
var $={}
H.hU.prototype={}
J.a.prototype={
u:function(a,b){return a===b},
gq:function(a){return H.au(a)},
k:function(a){return"Instance of '"+H.bd(a)+"'"}}
J.dV.prototype={
k:function(a){return String(a)},
gq:function(a){return a?519018:218159},
$isac:1}
J.c0.prototype={
u:function(a,b){return null==b},
k:function(a){return"null"},
gq:function(a){return 0},
$isH:1}
J.b7.prototype={
gq:function(a){return 0},
k:function(a){return String(a)},
$isl4:1}
J.es.prototype={}
J.ay.prototype={}
J.ap.prototype={
k:function(a){var t=a[$.$get$iT()]
return t==null?this.cW(a):J.b0(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ishS:1}
J.am.prototype={
l:function(a,b){if(!!a.fixed$length)H.E(P.u("add"))
a.push(b)},
G:function(a,b){var t,s,r,q,p
t=a.length
if(!!a.fixed$length)H.E(P.u("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.P)(b),++r,t=p){q=b[r]
p=t+1
H.b(t===a.length||H.E(P.a9(a)))
a.push(q)}},
c4:function(a,b){return new H.b8(a,b,[H.af(a,0),null])},
ae:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.e(a[s])
return t.join(b)},
p:function(a,b){return a[b]},
gel:function(a){if(a.length>0)return a[0]
throw H.c(H.dU())},
gaT:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.c(H.dU())},
b9:function(a,b,c,d,e){var t,s,r
if(!!a.immutable$list)H.E(P.u("setRange"))
P.jd(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.E(P.av(e,0,null,"skipCount",null))
s=J.N(d)
if(e+t>s.gi(d))throw H.c(H.l2())
if(e<b)for(r=t-1;r>=0;--r)a[b+r]=s.h(d,e+r)
else for(r=0;r<t;++r)a[b+r]=s.h(d,e+r)},
bG:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.c(P.a9(a))}return!1},
cP:function(a,b){if(!!a.immutable$list)H.E(P.u("sort"))
H.lk(a,P.lQ())},
bb:function(a){return this.cP(a,null)},
A:function(a,b){var t
for(t=0;t<a.length;++t)if(J.A(a[t],b))return!0
return!1},
k:function(a){return P.dT(a,"[","]")},
gt:function(a){return new J.dl(a,a.length,0,null,[H.af(a,0)])},
gq:function(a){return H.au(a)},
gi:function(a){return a.length},
si:function(a,b){if(!!a.fixed$length)H.E(P.u("set length"))
if(b<0)throw H.c(P.av(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.aW(a,b))
if(b>=a.length||b<0)throw H.c(H.aW(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.E(P.u("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.aW(a,b))
if(b>=a.length||b<0)throw H.c(H.aW(a,b))
a[b]=c},
$iso:1,
$aso:function(){},
$isj:1,
$isl:1}
J.hT.prototype={}
J.dl.prototype={
gn:function(a){return this.d},
m:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.c(H.P(t))
r=this.c
if(r>=s){this.sbl(null)
return!1}this.sbl(t[r]);++this.c
return!0},
sbl:function(a){this.d=a}}
J.aK.prototype={
K:function(a,b){var t
if(typeof b!=="number")throw H.c(H.K(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gat(b)
if(this.gat(a)===t)return 0
if(this.gat(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gat:function(a){return a===0?1/a<0:a<0},
e2:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.c(P.u(""+a+".ceil()"))},
a_:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.u(""+a+".round()"))},
e3:function(a,b,c){if(this.K(b,c)>0)throw H.c(H.K(b))
if(this.K(a,b)<0)return b
if(this.K(a,c)>0)return c
return a},
eP:function(a,b){var t
if(b>20)throw H.c(P.av(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gat(a))return"-"+t
return t},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gq:function(a){return a&0x1FFFFFFF},
R:function(a,b){if(typeof b!=="number")throw H.c(H.K(b))
return a+b},
T:function(a,b){if(typeof b!=="number")throw H.c(H.K(b))
return a-b},
cA:function(a,b){if(typeof b!=="number")throw H.c(H.K(b))
return a/b},
C:function(a,b){if(typeof b!=="number")throw H.c(H.K(b))
return a*b},
aA:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bC(a,b)},
v:function(a,b){return(a|0)===a?a/b|0:this.bC(a,b)},
bC:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.c(P.u("Result of truncating division is "+H.e(t)+": "+H.e(a)+" ~/ "+b))},
aN:function(a,b){var t
if(a>0)t=this.dQ(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
dQ:function(a,b){return b>31?0:a>>>b},
cz:function(a,b){if(typeof b!=="number")throw H.c(H.K(b))
return(a&b)>>>0},
cY:function(a,b){if(typeof b!=="number")throw H.c(H.K(b))
return(a^b)>>>0},
V:function(a,b){if(typeof b!=="number")throw H.c(H.K(b))
return a<b},
ay:function(a,b){if(typeof b!=="number")throw H.c(H.K(b))
return a>b},
cB:function(a,b){if(typeof b!=="number")throw H.c(H.K(b))
return a>=b},
$isC:1,
$asC:function(){return[P.a7]},
$isad:1,
$isa7:1}
J.c_.prototype={$isx:1}
J.bZ.prototype={}
J.ao.prototype={
aC:function(a,b){if(b>=a.length)throw H.c(H.aW(a,b))
return a.charCodeAt(b)},
R:function(a,b){if(typeof b!=="string")throw H.c(P.iL(b,null,null))
return a+b},
cR:function(a,b,c){var t
if(c>a.length)throw H.c(P.av(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
cQ:function(a,b){return this.cR(a,b,0)},
bd:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.ex(b,null,null))
if(b>c)throw H.c(P.ex(b,null,null))
if(c>a.length)throw H.c(P.ex(c,null,null))
return a.substring(b,c)},
cT:function(a,b){return this.bd(a,b,null)},
eO:function(a){return a.toLowerCase()},
e5:function(a,b,c){if(c>a.length)throw H.c(P.av(c,0,a.length,null,null))
return H.mc(a,b,c)},
K:function(a,b){var t
if(typeof b!=="string")throw H.c(H.K(b))
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
h:function(a,b){if(b>=a.length||!1)throw H.c(H.aW(a,b))
return a[b]},
$iso:1,
$aso:function(){},
$isC:1,
$asC:function(){return[P.p]},
$isp:1}
H.j.prototype={}
H.aL.prototype={
gt:function(a){return new H.c2(this,this.gi(this),0,null,[H.V(this,"aL",0)])},
aw:function(a,b){return this.cV(0,b)},
eN:function(a,b){var t,s
t=H.D([],[H.V(this,"aL",0)])
C.a.si(t,this.gi(this))
for(s=0;s<this.gi(this);++s)t[s]=this.p(0,s)
return t},
eM:function(a){return this.eN(a,!0)}}
H.c2.prototype={
gn:function(a){return this.d},
m:function(){var t,s,r,q
t=this.a
s=J.N(t)
r=s.gi(t)
if(this.b!==r)throw H.c(P.a9(t))
q=this.c
if(q>=r){this.sa5(null)
return!1}this.sa5(s.p(t,q));++this.c
return!0},
sa5:function(a){this.d=a}}
H.c4.prototype={
gt:function(a){return new H.e4(null,J.aE(this.a),this.b,this.$ti)},
gi:function(a){return J.b_(this.a)},
$asL:function(a,b){return[b]}}
H.dE.prototype={$isj:1,
$asj:function(a,b){return[b]}}
H.e4.prototype={
m:function(){var t=this.b
if(t.m()){this.sa5(this.c.$1(t.gn(t)))
return!0}this.sa5(null)
return!1},
gn:function(a){return this.a},
sa5:function(a){this.a=a},
$asbY:function(a,b){return[b]}}
H.b8.prototype={
gi:function(a){return J.b_(this.a)},
p:function(a,b){return this.b.$1(J.kf(this.a,b))},
$asj:function(a,b){return[b]},
$asaL:function(a,b){return[b]},
$asL:function(a,b){return[b]}}
H.cu.prototype={
gt:function(a){return new H.fh(J.aE(this.a),this.b,this.$ti)}}
H.fh.prototype={
m:function(){var t,s
for(t=this.a,s=this.b;t.m();)if(s.$1(t.gn(t)))return!0
return!1},
gn:function(a){var t=this.a
return t.gn(t)}}
H.aJ.prototype={}
H.hD.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.hE.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.fR.prototype={
sew:function(a){this.z=a},
sez:function(a){this.ch=a}}
H.aR.prototype={
dk:function(){var t,s
t=this.e
s=t.a
this.c.l(0,s)
this.ds(s,t)},
bF:function(a,b){if(!this.f.u(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.aQ()},
eG:function(a){var t,s,r,q,p
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
if(q===r.c)r.bw();++r.d}this.y=!1}this.aQ()},
dU:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.v(a),s=0;r=this.ch,s<r.length;s+=2)if(t.u(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
eF:function(a){var t,s,r
if(this.ch==null)return
for(t=J.v(a),s=0;r=this.ch,s<r.length;s+=2)if(t.u(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.E(P.u("removeRange"))
P.jd(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
cM:function(a,b){if(!this.r.u(0,a))return
this.db=b},
ep:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.D(0,c)
return}H.b(b===1)
t=this.cx
if(t==null){t=P.i_(null,null)
this.cx=t}t.L(0,new H.fL(a,c))},
eo:function(a,b){var t
if(!this.r.u(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.au()
return}H.b(b===1)
t=this.cx
if(t==null){t=P.i_(null,null)
this.cx=t}t.L(0,this.gex())},
eq:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.a8(a)
if(b!=null)P.a8(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.b0(a)
s[1]=b==null?null:b.k(0)
for(r=new P.bm(t,t.r,null,null,[null]),r.c=t.e;r.m();)r.d.D(0,s)},
a9:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.G(o)
p=H.ae(o)
this.eq(q,p)
if(this.db){this.au()
if(this===u.globalState.e)throw o}}finally{this.cy=H.lM(r)
u.globalState.d=H.iq(t,"$isaR")
if(t!=null)$=t.gev()
if(this.cx!=null)for(;n=this.cx,!n.gad(n);)this.cx.c7().$0()}return s},
c3:function(a){return this.b.h(0,a)},
ds:function(a,b){var t=this.b
if(t.E(0,a))throw H.c(P.bS("Registry: ports must be registered only once."))
t.j(0,a,b)},
aQ:function(){var t=this.b
if(t.gi(t)-this.c.a>0||this.y||!this.x)u.globalState.z.j(0,this.a,this)
else this.au()},
au:function(){var t,s,r
t=this.cx
if(t!=null)t.O(0)
for(t=this.b,s=t.gcs(t),s=s.gt(s);s.m();)s.gn(s).dt()
t.O(0)
this.c.O(0)
u.globalState.z.ag(0,this.a)
this.dx.O(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].D(0,t[r+1])
this.ch=null}},
gev:function(){return this.d},
ge6:function(){return this.e}}
H.fL.prototype={
$0:function(){this.a.D(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.fu.prototype={
ec:function(){var t=this.a
if(t.b===t.c)return
return t.c7()},
c9:function(){var t,s,r
t=this.ec()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.E(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gad(s)}else s=!1
else s=!1
else s=!1
if(s)H.E(P.bS("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gad(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.ar(["command","close"])
r=new H.U(!0,P.aS(null,P.x)).F(r)
s.toString
self.postMessage(r)}return!1}t.eC()
return!0},
bA:function(){if(self.window!=null)new H.fv(this).$0()
else for(;this.c9(););},
ah:function(){var t,s,r,q,p
if(!u.globalState.x)this.bA()
else try{this.bA()}catch(r){t=H.G(r)
s=H.ae(r)
q=u.globalState.Q
p=P.ar(["command","error","msg",H.e(t)+"\n"+H.e(s)])
p=new H.U(!0,P.aS(null,P.x)).F(p)
q.toString
self.postMessage(p)}}}
H.fv.prototype={
$0:function(){if(!this.a.c9())return
P.lm(C.z,this)},
$S:function(){return{func:1,v:true}}}
H.aB.prototype={
eC:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.a9(this.b)}}
H.fQ.prototype={}
H.dR.prototype={
$0:function(){H.kZ(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.dS.prototype={
$0:function(){var t,s
t=this.a
t.x=!0
if(!this.b)this.c.$1(this.d)
else{s=this.c
if(H.aX(s,{func:1,args:[P.H,P.H]}))s.$2(this.e,this.d)
else if(H.aX(s,{func:1,args:[P.H]}))s.$1(this.e)
else s.$0()}t.aQ()},
$S:function(){return{func:1,v:true}}}
H.fp.prototype={}
H.aT.prototype={
D:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.lz(b)
if(t.ge6()===s){s=J.N(r)
switch(s.h(r,0)){case"pause":t.bF(s.h(r,1),s.h(r,2))
break
case"resume":t.eG(s.h(r,1))
break
case"add-ondone":t.dU(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.eF(s.h(r,1))
break
case"set-errors-fatal":t.cM(s.h(r,1),s.h(r,2))
break
case"ping":t.ep(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.eo(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.ag(0,s)
break}return}u.globalState.f.a.L(0,new H.aB(t,new H.fS(this,r),"receive"))},
u:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.aT){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gq:function(a){return this.b.a}}
H.fS.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dq(0,this.b)},
$S:function(){return{func:1}}}
H.bx.prototype={
D:function(a,b){var t,s,r
t=P.ar(["command","message","port",this,"msg",b])
s=new H.U(!0,P.aS(null,P.x)).F(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
u:function(a,b){var t,s
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
gq:function(a){return C.b.cY((this.b<<16^this.a<<8)>>>0,this.c)}}
H.cf.prototype={
dt:function(){this.c=!0
this.b=null},
dq:function(a,b){if(this.c)return
this.b.$1(b)},
$isle:1}
H.f1.prototype={
da:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.L(0,new H.aB(s,new H.f2(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){H.hg()
this.c=self.setTimeout(H.bB(new H.f3(this,b),0),a)}else{H.b(a>0)
throw H.c(P.u("Timer greater than 0."))}}}
H.f2.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.f3.prototype={
$0:function(){var t=this.a
t.c=null
H.hu()
t.d=1
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.ai.prototype={
gq:function(a){var t=this.a
t=C.b.aN(t,0)^C.b.v(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
u:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.ai){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.U.prototype={
F:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.j(0,a,t.gi(t))
t=J.v(a)
if(!!t.$isba)return["buffer",a]
if(!!t.$isat)return["typed",a]
if(!!t.$iso)return this.cI(a)
if(!!t.$iskW){r=this.gcF()
q=t.gB(a)
q=H.i0(q,r,H.V(q,"L",0),null)
q=P.j5(q,!0,H.V(q,"L",0))
t=t.gcs(a)
t=H.i0(t,r,H.V(t,"L",0),null)
return["map",q,P.j5(t,!0,H.V(t,"L",0))]}if(!!t.$isl4)return this.cJ(a)
if(!!t.$isa)this.cq(a)
if(!!t.$isle)this.ai(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isaT)return this.cK(a)
if(!!t.$isbx)return this.cL(a)
if(!!t.$isak){p=a.$static_name
if(p==null)this.ai(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isai)return["capability",a.a]
if(!(a instanceof P.B))this.cq(a)
return["dart",u.classIdExtractor(a),this.cH(u.classFieldsExtractor(a))]},
ai:function(a,b){throw H.c(P.u((b==null?"Can't transmit:":b)+" "+H.e(a)))},
cq:function(a){return this.ai(a,null)},
cI:function(a){var t
H.b(typeof a!=="string")
t=this.cG(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.ai(a,"Can't serialize indexable: ")},
cG:function(a){var t,s
t=[]
C.a.si(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.F(a[s])
return t},
cH:function(a){var t
for(t=0;t<a.length;++t)C.a.j(a,t,this.F(a[t]))
return a},
cJ:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.ai(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.si(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.F(a[t[r]])
return["js-object",t,s]},
cL:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cK:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.aA.prototype={
P:function(a){var t,s,r,q
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.c(P.iK("Bad serialized message: "+H.e(a)))
switch(C.a.gel(a)){case"ref":H.b(J.A(a[0],"ref"))
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
return J.an(H.D(this.a8(t),[null]))
case"extendable":H.b(J.A(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.D(this.a8(t),[null])
case"mutable":H.b(J.A(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.a8(t)
case"const":H.b(J.A(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
return J.an(H.D(this.a8(t),[null]))
case"map":return this.ef(a)
case"sendport":return this.eg(a)
case"raw sendport":H.b(J.A(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.ee(a)
case"function":H.b(J.A(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.b(J.A(a[0],"capability"))
return new H.ai(a[1])
case"dart":H.b(J.A(a[0],"dart"))
s=a[1]
r=a[2]
q=u.instanceFromClassId(s)
C.a.l(this.b,q)
this.a8(r)
return u.initializeEmptyInstance(s,q,r)
default:throw H.c("couldn't deserialize: "+H.e(a))}},
a8:function(a){var t
for(t=0;t<a.length;++t)C.a.j(a,t,this.P(a[t]))
return a},
ef:function(a){var t,s,r,q,p
H.b(J.A(a[0],"map"))
t=a[1]
s=a[2]
r=P.T()
C.a.l(this.b,r)
t=J.kq(t,this.ged()).eM(0)
for(q=J.N(s),p=0;p<t.length;++p)r.j(0,t[p],this.P(q.h(s,p)))
return r},
eg:function(a){var t,s,r,q,p,o,n
H.b(J.A(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.c3(r)
if(o==null)return
n=new H.aT(o,s)}else n=new H.bx(t,r,s)
C.a.l(this.b,n)
return n},
ee:function(a){var t,s,r,q,p,o
H.b(J.A(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.N(t),p=J.N(s),o=0;o<q.gi(t);++o)r[q.h(t,o)]=this.P(p.h(s,o))
return r}}
H.ey.prototype={}
H.f7.prototype={
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
H.ej.prototype={
k:function(a){var t=this.b
if(t==null)return"NullError: "+H.e(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.dX.prototype={
k:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.e(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.e(this.a)+")"}}
H.fc.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.hF.prototype={
$1:function(a){if(!!J.v(a).$isaI)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(a){return{func:1,args:[,]}}}
H.cV.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t},
$isaO:1}
H.ho.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.hp.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.hq.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.hr.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.hs.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.ak.prototype={
k:function(a){return"Closure '"+H.bd(this).trim()+"'"},
$ishS:1,
geT:function(){return this},
$D:null}
H.eX.prototype={}
H.eL.prototype={
k:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.b1.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.b1))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gq:function(a){var t,s
t=this.c
if(t==null)s=H.au(this.a)
else s=typeof t!=="object"?J.aZ(t):H.au(t)
return(s^H.au(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.bd(t)+"'")}}
H.f9.prototype={
k:function(a){return this.a}}
H.dq.prototype={
k:function(a){return this.a}}
H.eC.prototype={
k:function(a){return"RuntimeError: "+H.e(this.a)}}
H.fj.prototype={
k:function(a){return C.j.R("Assertion failed: ",P.bR(this.a))}}
H.ct.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gq:function(a){return J.aZ(this.a)},
u:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.ct){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.Z.prototype={
gi:function(a){return this.a},
gad:function(a){return this.a===0},
gB:function(a){return new H.e_(this,[H.af(this,0)])},
gcs:function(a){return H.i0(this.gB(this),new H.dW(this),H.af(this,0),H.af(this,1))},
E:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bt(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bt(s,b)}else return this.er(b)},
er:function(a){var t=this.d
if(t==null)return!1
return this.ac(this.aq(t,this.ab(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.a6(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.a6(r,b)
return s==null?null:s.b}else return this.es(b)},
es:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.aq(t,this.ab(a))
r=this.ac(s,a)
if(r<0)return
return s[r].b},
j:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aJ()
this.b=t}this.bn(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aJ()
this.c=s}this.bn(s,b,c)}else{r=this.d
if(r==null){r=this.aJ()
this.d=r}q=this.ab(b)
p=this.aq(r,q)
if(p==null)this.aM(r,q,[this.aK(b,c)])
else{o=this.ac(p,b)
if(o>=0)p[o].b=c
else p.push(this.aK(b,c))}}},
ag:function(a,b){if(typeof b==="string")return this.bz(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bz(this.c,b)
else return this.eu(b)},
eu:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.aq(t,this.ab(a))
r=this.ac(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bD(q)
return q.b},
O:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aI()}},
aa:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.c(P.a9(this))
t=t.c}},
bn:function(a,b,c){var t=this.a6(a,b)
if(t==null)this.aM(a,b,this.aK(b,c))
else t.b=c},
bz:function(a,b){var t
if(a==null)return
t=this.a6(a,b)
if(t==null)return
this.bD(t)
this.bu(a,b)
return t.b},
aI:function(){this.r=this.r+1&67108863},
aK:function(a,b){var t,s
t=new H.dZ(a,b,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.aI()
return t},
bD:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.aI()},
ab:function(a){return J.aZ(a)&0x3ffffff},
ac:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.A(a[s].a,b))return s
return-1},
k:function(a){return P.j7(this)},
a6:function(a,b){return a[b]},
aq:function(a,b){return a[b]},
aM:function(a,b,c){H.b(c!=null)
a[b]=c},
bu:function(a,b){delete a[b]},
bt:function(a,b){return this.a6(a,b)!=null},
aJ:function(){var t=Object.create(null)
this.aM(t,"<non-identifier-key>",t)
this.bu(t,"<non-identifier-key>")
return t},
$iskW:1}
H.dW.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(a){return{func:1,args:[,]}}}
H.dZ.prototype={}
H.e_.prototype={
gi:function(a){return this.a.a},
gt:function(a){var t,s
t=this.a
s=new H.e0(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.e0.prototype={
gn:function(a){return this.d},
m:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.a9(t))
else{t=this.c
if(t==null){this.sbm(null)
return!1}else{this.sbm(t.a)
this.c=this.c.c
return!0}}},
sbm:function(a){this.d=a}}
H.hk.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[,]}}}
H.hl.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(a,b){return{func:1,args:[,P.p]}}}
H.hm.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[P.p]}}}
H.ba.prototype={$isba:1}
H.at.prototype={$isat:1}
H.c7.prototype={
gi:function(a){return a.length},
$iso:1,
$aso:function(){},
$ist:1,
$ast:function(){}}
H.bb.prototype={
h:function(a,b){H.a6(b,a,a.length)
return a[b]},
j:function(a,b,c){H.a6(b,a,a.length)
a[b]=c},
$isj:1,
$asj:function(){return[P.ad]},
$asaJ:function(){return[P.ad]},
$asm:function(){return[P.ad]},
$isl:1,
$asl:function(){return[P.ad]}}
H.c8.prototype={
j:function(a,b,c){H.a6(b,a,a.length)
a[b]=c},
$isj:1,
$asj:function(){return[P.x]},
$asaJ:function(){return[P.x]},
$asm:function(){return[P.x]},
$isl:1,
$asl:function(){return[P.x]}}
H.c6.prototype={$ishR:1}
H.eb.prototype={
h:function(a,b){H.a6(b,a,a.length)
return a[b]}}
H.ec.prototype={
h:function(a,b){H.a6(b,a,a.length)
return a[b]},
$iskV:1}
H.ed.prototype={
h:function(a,b){H.a6(b,a,a.length)
return a[b]}}
H.ee.prototype={
h:function(a,b){H.a6(b,a,a.length)
return a[b]}}
H.ef.prototype={
h:function(a,b){H.a6(b,a,a.length)
return a[b]}}
H.c9.prototype={
gi:function(a){return a.length},
h:function(a,b){H.a6(b,a,a.length)
return a[b]}}
H.eg.prototype={
gi:function(a){return a.length},
h:function(a,b){H.a6(b,a,a.length)
return a[b]}}
H.bo.prototype={}
H.bp.prototype={}
H.bq.prototype={}
H.br.prototype={}
P.fl.prototype={
$1:function(a){var t,s
H.hu()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(a){return{func:1,args:[,]}}}
P.fk.prototype={
$1:function(a){var t,s
t=this.a
H.b(t.a==null)
H.hg()
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(a){return{func:1,args:[{func:1,v:true}]}}}
P.fm.prototype={
$0:function(){H.hu()
this.a.$0()},
$S:function(){return{func:1}}}
P.fn.prototype={
$0:function(){H.hu()
this.a.$0()},
$S:function(){return{func:1}}}
P.hO.prototype={}
P.fq.prototype={}
P.h4.prototype={
e4:function(a,b){var t=this.a
if(t.a!==0)throw H.c(P.i4("Future already completed"))
t.aF(b)}}
P.cD.prototype={
eA:function(a){if(this.c!==6)return!0
H.b(!0)
return this.b.b.aX(this.d,a.a)},
en:function(a){var t,s
t=(this.c&2)!==0
if(t){H.b(t)
t=this.e!=null}else t=!1
H.b(t)
s=this.e
t=this.b.b
if(H.aX(s,{func:1,args:[P.B,P.aO]}))return t.eH(s,a.a,a.b)
else return t.aX(s,a.a)}}
P.a5.prototype={
ce:function(a,b){var t,s,r
t=$.z
if(t!==C.h){t.toString
if(b!=null)b=P.lE(b,t)}s=new P.a5(0,t,null,[null])
r=b==null?1:3
this.bo(new P.cD(null,s,r,a,b,[H.af(this,0),null]))
return s},
cd:function(a){return this.ce(a,null)},
aB:function(a){H.b(this.a<4)
H.b(a.a>=4)
this.a=a.a
this.c=a.c},
bo:function(a){var t
H.b(a.a==null)
t=this.a
if(t<=1){a.a=H.iq(this.c,"$iscD")
this.c=a}else{if(t===2){H.b(!0)
t=this.c
if(t.a<4){t.bo(a)
return}this.aB(t)}H.b(this.a>=4)
t=this.b
t.toString
P.hb(null,null,t,new P.fA(this,a))}},
by:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.b(!0)
s=this.c
if(s.a<4){s.by(a)
return}this.aB(s)}H.b(this.a>=4)
t.a=this.ar(a)
s=this.b
s.toString
P.hb(null,null,s,new P.fE(t,this))}},
aL:function(){H.b(this.a<4)
var t=this.c
this.c=null
return this.ar(t)},
ar:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aF:function(a){var t,s,r
H.b(this.a<4)
t=this.$ti
s=H.ij(a,"$isdK",t,"$asdK")
if(s){t=H.ij(a,"$isa5",t,null)
if(t)P.jv(a,this)
else P.lt(a,this)}else{r=this.aL()
H.b(this.a<4)
this.a=4
this.c=a
P.bk(this,r)}},
an:function(a,b){var t
H.b(this.a<4)
t=this.aL()
H.b(this.a<4)
this.a=8
this.c=new P.aF(a,b)
P.bk(this,t)},
dv:function(a){return this.an(a,null)},
$isdK:1,
gaO:function(){return this.a},
gdN:function(){return this.c}}
P.fA.prototype={
$0:function(){P.bk(this.a,this.b)},
$S:function(){return{func:1}}}
P.fE.prototype={
$0:function(){P.bk(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.fB.prototype={
$1:function(a){var t=this.a
H.b(t.a===1)
H.b(t.a===1)
t.a=0
t.aF(a)},
$S:function(a){return{func:1,args:[,]}}}
P.fC.prototype={
$2:function(a,b){var t=this.a
H.b(t.a===1)
t.an(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(a,b){return{func:1,args:[,],opt:[,]}}}
P.fD.prototype={
$0:function(){this.a.an(this.b,this.c)},
$S:function(){return{func:1}}}
P.fH.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.c
p=q.c
H.b((p&1)===0)
o=(p&2)===0
H.b(o)
t=null
try{H.b(o)
H.b(p===8)
t=q.b.b.c8(q.d)}catch(n){s=H.G(n)
r=H.ae(n)
if(this.d){q=this.a.a
H.b(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.b(q.a===8)
p.b=q.c}else p.b=new P.aF(s,r)
p.a=!0
return}if(!!J.v(t).$isdK){if(t instanceof P.a5&&t.gaO()>=4){if(t.gaO()===8){q=t
H.b(q.gaO()===8)
p=this.b
p.b=q.gdN()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.cd(new P.fI(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.fI.prototype={
$1:function(a){return this.a},
$S:function(a){return{func:1,args:[,]}}}
P.fG.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.b((r.c&1)!==0)
this.a.b=r.b.b.aX(r.d,this.c)}catch(q){t=H.G(q)
s=H.ae(q)
r=this.a
r.b=new P.aF(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.fF.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.b(q.a===8)
t=q.c
q=this.c
if(q.eA(t)){H.b((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.en(t)
p.a=!1}}catch(o){s=H.G(o)
r=H.ae(o)
q=this.a
p=q.a
H.b(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.b(q.a===8)
m.b=q.c}else m.b=new P.aF(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.cv.prototype={}
P.eQ.prototype={
gi:function(a){var t,s
t={}
s=new P.a5(0,$.z,null,[P.x])
t.a=0
this.ey(new P.eS(t),!0,new P.eT(t,s),s.gdu())
return s}}
P.eS.prototype={
$1:function(a){++this.a.a},
$S:function(a){return{func:1,args:[,]}}}
P.eT.prototype={
$0:function(){this.b.aF(this.a.a)},
$S:function(){return{func:1}}}
P.eR.prototype={}
P.i5.prototype={}
P.aF.prototype={
k:function(a){return H.e(this.a)},
$isaI:1}
P.h8.prototype={}
P.ha.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.cd()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.c(t)
r=H.c(t)
r.stack=s.k(0)
throw r},
$S:function(){return{func:1}}}
P.fV.prototype={
eI:function(a){var t,s,r
try{if(C.h===$.z){a.$0()
return}P.jB(null,null,this,a)}catch(r){t=H.G(r)
s=H.ae(r)
P.h9(null,null,this,t,s)}},
eJ:function(a,b){var t,s,r
try{if(C.h===$.z){a.$1(b)
return}P.jC(null,null,this,a,b)}catch(r){t=H.G(r)
s=H.ae(r)
P.h9(null,null,this,t,s)}},
e_:function(a){return new P.fX(this,a)},
aR:function(a){return new P.fW(this,a)},
e0:function(a){return new P.fY(this,a)},
h:function(a,b){return},
c8:function(a){if($.z===C.h)return a.$0()
return P.jB(null,null,this,a)},
aX:function(a,b){if($.z===C.h)return a.$1(b)
return P.jC(null,null,this,a,b)},
eH:function(a,b,c){if($.z===C.h)return a.$2(b,c)
return P.lF(null,null,this,a,b,c)}}
P.fX.prototype={
$0:function(){return this.a.c8(this.b)},
$S:function(){return{func:1}}}
P.fW.prototype={
$0:function(){return this.a.eI(this.b)},
$S:function(){return{func:1}}}
P.fY.prototype={
$1:function(a){return this.a.eJ(this.b,a)},
$S:function(a){return{func:1,args:[,]}}}
P.fO.prototype={
ab:function(a){return H.m6(a)&0x3ffffff},
ac:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.fM.prototype={
gt:function(a){var t=new P.bm(this,this.r,null,null,[null])
t.c=this.e
return t},
gi:function(a){return this.a},
A:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dw(b)},
dw:function(a){var t=this.d
if(t==null)return!1
return this.ap(t[this.ao(a)],a)>=0},
c3:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.A(0,a)?a:null
else return this.dH(a)},
dH:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.ao(a)]
r=this.ap(s,a)
if(r<0)return
return J.iv(s,r).gdA()},
l:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.ie()
this.b=t}return this.bq(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.ie()
this.c=s}return this.bq(s,b)}else return this.L(0,b)},
L:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.ie()
this.d=t}s=this.ao(b)
r=t[s]
if(r==null){q=[this.aE(b)]
H.b(q!=null)
t[s]=q}else{if(this.ap(r,b)>=0)return!1
r.push(this.aE(b))}return!0},
ag:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.br(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.br(this.c,b)
else return this.dI(0,b)},
dI:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.ao(b)]
r=this.ap(s,b)
if(r<0)return!1
this.bs(s.splice(r,1)[0])
return!0},
O:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aD()}},
bq:function(a,b){var t
if(a[b]!=null)return!1
t=this.aE(b)
H.b(!0)
a[b]=t
return!0},
br:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bs(t)
delete a[b]
return!0},
aD:function(){this.r=this.r+1&67108863},
aE:function(a){var t,s
t=new P.fN(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.aD()
return t},
bs:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.aD()},
ao:function(a){return J.aZ(a)&0x3ffffff},
ap:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.A(a[s].a,b))return s
return-1}}
P.fN.prototype={
gdA:function(){return this.a}}
P.bm.prototype={
gn:function(a){return this.d},
m:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.a9(t))
else{t=this.c
if(t==null){this.sa4(null)
return!1}else{this.sa4(t.a)
this.c=this.c.b
return!0}}},
sa4:function(a){this.d=a}}
P.fK.prototype={}
P.hY.prototype={$isj:1}
P.c1.prototype={$isj:1,$isl:1}
P.m.prototype={
gt:function(a){return new H.c2(a,this.gi(a),0,null,[H.V(a,"m",0)])},
p:function(a,b){return this.h(a,b)},
c4:function(a,b){return new H.b8(a,b,[H.V(a,"m",0),null])},
em:function(a,b,c){var t,s,r
t=this.gi(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gi(a))throw H.c(P.a9(a))}return s},
k:function(a){return P.dT(a,"[","]")}}
P.c3.prototype={}
P.e3.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.e(a)
t.a=s+": "
t.a+=H.e(b)},
$S:function(a,b){return{func:1,args:[,,]}}}
P.aN.prototype={
aa:function(a,b){var t,s
for(t=J.aE(this.gB(a));t.m();){s=t.gn(t)
b.$2(s,this.h(a,s))}},
gi:function(a){return J.b_(this.gB(a))},
k:function(a){return P.j7(a)}}
P.e1.prototype={
d4:function(a,b){var t
H.b(!0)
t=new Array(8)
t.fixed$length=Array
this.sbB(H.D(t,[b]))},
gt:function(a){return new P.fP(this,this.c,this.d,this.b,null,this.$ti)},
gad:function(a){return this.b===this.c},
gi:function(a){return(this.c-this.b&this.a.length-1)>>>0},
p:function(a,b){var t,s
t=this.gi(this)
if(0>b||b>=t)H.E(P.y(b,this,"index",null,t))
s=this.a
return s[(this.b+b&s.length-1)>>>0]},
O:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
k:function(a){return P.dT(this,"{","}")},
c7:function(){var t,s,r
t=this.b
if(t===this.c)throw H.c(H.dU());++this.d
s=this.a
r=s[t]
s[t]=null
this.b=(t+1&s.length-1)>>>0
return r},
L:function(a,b){var t,s
t=this.a
s=this.c
t[s]=b
t=(s+1&t.length-1)>>>0
this.c=t
if(this.b===t)this.bw();++this.d},
bw:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.D(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.b9(s,0,q,t,r)
C.a.b9(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbB(s)},
sbB:function(a){this.a=a}}
P.fP.prototype={
gn:function(a){return this.e},
m:function(){var t,s
t=this.a
if(this.c!==t.d)H.E(P.a9(t))
s=this.d
if(s===this.b){this.sa4(null)
return!1}this.sa4(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sa4:function(a){this.e=a}}
P.eF.prototype={
G:function(a,b){var t
for(t=J.aE(b);t.m();)this.l(0,t.gn(t))},
k:function(a){return P.dT(this,"{","}")},
$isj:1}
P.eE.prototype={}
P.bn.prototype={}
P.ac.prototype={}
P.C.prototype={}
P.b2.prototype={
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.b2))return!1
return this.a===b.a&&this.b===b.b},
K:function(a,b){return C.b.K(this.a,b.a)},
gq:function(a){var t=this.a
return(t^C.b.aN(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.kL(H.lc(this))
s=P.bM(H.la(this))
r=P.bM(H.l6(this))
q=P.bM(H.l7(this))
p=P.bM(H.l9(this))
o=P.bM(H.lb(this))
n=P.kM(H.l8(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isC:1,
$asC:function(){return[P.b2]}}
P.ad.prototype={}
P.al.prototype={
V:function(a,b){return C.b.V(this.a,b.gdz())},
ay:function(a,b){return C.b.ay(this.a,b.gdz())},
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.al))return!1
return this.a===b.a},
gq:function(a){return this.a&0x1FFFFFFF},
K:function(a,b){return C.b.K(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.dD()
s=this.a
if(s<0)return"-"+new P.al(0-s).k(0)
r=t.$1(C.b.v(s,6e7)%60)
q=t.$1(C.b.v(s,1e6)%60)
p=new P.dC().$1(s%1e6)
return""+C.b.v(s,36e8)+":"+H.e(r)+":"+H.e(q)+"."+H.e(p)},
$isC:1,
$asC:function(){return[P.al]}}
P.dC.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(a){return{func:1,ret:P.p,args:[P.x]}}}
P.dD.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(a){return{func:1,ret:P.p,args:[P.x]}}}
P.aI.prototype={}
P.bH.prototype={
k:function(a){return"Assertion failed"}}
P.cd.prototype={
k:function(a){return"Throw of null."}}
P.X.prototype={
gaH:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaG:function(){return""},
k:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+t
q=this.gaH()+s+r
if(!this.a)return q
p=this.gaG()
o=P.bR(this.b)
return q+p+": "+H.e(o)}}
P.be.prototype={
gaH:function(){return"RangeError"},
gaG:function(){var t,s,r
H.b(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.e(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.e(t)
else if(r>t)s=": Not in range "+H.e(t)+".."+H.e(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.e(t)}return s}}
P.dP.prototype={
gaH:function(){return"RangeError"},
gaG:function(){H.b(this.a)
if(J.jZ(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.e(t)},
gi:function(a){return this.f}}
P.fd.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.fb.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.aP.prototype={
k:function(a){return"Bad state: "+this.a}}
P.ds.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.e(P.bR(t))+"."}}
P.ck.prototype={
k:function(a){return"Stack Overflow"},
$isaI:1}
P.dx.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.hQ.prototype={}
P.fz.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.e(t)}}
P.dG.prototype={
h:function(a,b){var t,s
t=this.a
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.E(P.iL(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.j9(b,"expando$values")
return s==null?null:H.j9(s,t)},
k:function(a){return"Expando:"+H.e(this.b)}}
P.x.prototype={}
P.L.prototype={
aw:function(a,b){return new H.cu(this,b,[H.V(this,"L",0)])},
gi:function(a){var t,s
H.b(!this.$isj)
t=this.gt(this)
for(s=0;t.m();)++s
return s},
gW:function(a){var t,s
t=this.gt(this)
if(!t.m())throw H.c(H.dU())
s=t.gn(t)
if(t.m())throw H.c(H.l3())
return s},
p:function(a,b){var t,s,r
if(b<0)H.E(P.av(b,0,null,"index",null))
for(t=this.gt(this),s=0;t.m();){r=t.gn(t)
if(b===s)return r;++s}throw H.c(P.y(b,this,"index",null,s))},
k:function(a){return P.l1(this,"(",")")}}
P.bY.prototype={}
P.l.prototype={$isj:1}
P.aM.prototype={}
P.H.prototype={
gq:function(a){return P.B.prototype.gq.call(this,this)},
k:function(a){return"null"}}
P.a7.prototype={$isC:1,
$asC:function(){return[P.a7]}}
P.B.prototype={constructor:P.B,$isB:1,
u:function(a,b){return this===b},
gq:function(a){return H.au(this)},
k:function(a){return"Instance of '"+H.bd(this)+"'"},
toString:function(){return this.k(this)}}
P.aO.prototype={}
P.p.prototype={$isC:1,
$asC:function(){return[P.p]}}
P.bg.prototype={
gi:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
gX:function(){return this.a}}
W.i.prototype={}
W.di.prototype={
gi:function(a){return a.length}}
W.dj.prototype={
k:function(a){return String(a)}}
W.dk.prototype={
k:function(a){return String(a)}}
W.ah.prototype={$isah:1}
W.bI.prototype={
b0:function(a,b,c){if(c!=null)return this.dC(a,b,P.lP(c,null))
return this.dD(a,b)},
cC:function(a,b){return this.b0(a,b,null)},
dC:function(a,b,c){return a.getContext(b,c)},
dD:function(a,b){return a.getContext(b)}}
W.bJ.prototype={
as:function(a,b,c){return a.addColorStop(b,c)}}
W.bK.prototype={
bR:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
ek:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
ax:function(a){return P.hd(a.getContextAttributes())}}
W.aj.prototype={
gi:function(a){return a.length}}
W.dt.prototype={
gi:function(a){return a.length}}
W.aH.prototype={
bp:function(a,b){var t,s
t=$.$get$iS()
s=t[b]
if(typeof s==="string")return s
s=this.dR(a,b)
t[b]=s
return s},
dR:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.kN()+b
if(t in a)return t
return b},
gi:function(a){return a.length}}
W.du.prototype={}
W.Q.prototype={}
W.Y.prototype={}
W.dv.prototype={
gi:function(a){return a.length}}
W.dw.prototype={
gi:function(a){return a.length}}
W.dy.prototype={
h:function(a,b){return a[b]},
gi:function(a){return a.length}}
W.bN.prototype={}
W.b3.prototype={
dV:function(a,b){return a.adoptNode(b)},
cD:function(a,b){return a.getElementById(b)},
eD:function(a,b){return a.querySelector(b)}}
W.dz.prototype={
k:function(a){return String(a)}}
W.bO.prototype={
e9:function(a,b){return a.createHTMLDocument(b)}}
W.bP.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[P.M]},
$isj:1,
$asj:function(){return[P.M]},
$ist:1,
$ast:function(){return[P.M]},
$asm:function(){return[P.M]},
$isl:1,
$asl:function(){return[P.M]},
$asn:function(){return[P.M]}}
W.bQ.prototype={
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.ga0(a))+" x "+H.e(this.gZ(a))},
u:function(a,b){var t
if(b==null)return!1
t=J.v(b)
if(!t.$isM)return!1
return a.left===t.gc1(b)&&a.top===t.gcf(b)&&this.ga0(a)===t.ga0(b)&&this.gZ(a)===t.gZ(b)},
gq:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.ga0(a)
q=this.gZ(a)
return W.jz(W.aC(W.aC(W.aC(W.aC(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gZ:function(a){return a.height},
gc1:function(a){return a.left},
gcf:function(a){return a.top},
ga0:function(a){return a.width},
$isM:1,
$asM:function(){}}
W.dA.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[P.p]},
$isj:1,
$asj:function(){return[P.p]},
$ist:1,
$ast:function(){return[P.p]},
$asm:function(){return[P.p]},
$isl:1,
$asl:function(){return[P.p]},
$asn:function(){return[P.p]}}
W.dB.prototype={
gi:function(a){return a.length}}
W.S.prototype={
gdY:function(a){return new W.ft(a)},
k:function(a){return a.localName},
H:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.j_
if(t==null){t=H.D([],[W.cb])
s=new W.cc(t)
C.a.l(t,W.jw(null))
C.a.l(t,W.jA())
$.j_=s
d=s}else d=t
t=$.iZ
if(t==null){t=new W.d4(d)
$.iZ=t
c=t}else{t.a=d
c=t}}if($.aa==null){t=document
s=t.implementation
s=(s&&C.L).e9(s,"")
$.aa=s
$.hP=s.createRange()
s=$.aa
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.aa.head;(t&&C.M).J(t,r)}t=$.aa
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.iq(s,"$isah")}t=$.aa
if(!!this.$isah)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.aa.body;(t&&C.p).J(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.A(C.W,a.tagName)){t=$.hP;(t&&C.F).cE(t,q)
t=$.hP
p=(t&&C.F).e7(t,b)}else{q.innerHTML=b
p=$.aa.createDocumentFragment()
for(t=J.k(p);s=q.firstChild,s!=null;)t.J(p,s)}t=$.aa.body
if(q==null?t!=null:q!==t)J.iD(q)
c.b7(p)
C.t.dV(document,p)
return p},
e8:function(a,b,c){return this.H(a,b,c,null)},
cO:function(a,b,c,d){a.textContent=null
this.J(a,this.H(a,b,c,d))},
cN:function(a,b){return this.cO(a,b,null,null)},
a1:function(a,b){return a.getAttribute(b)},
dJ:function(a,b){return a.removeAttribute(b)},
$isS:1,
geL:function(a){return a.tagName}}
W.dF.prototype={
$1:function(a){return!!J.v(a).$isS},
$S:function(a){return{func:1,args:[,]}}}
W.h.prototype={}
W.d.prototype={
dr:function(a,b,c,d){return a.addEventListener(b,H.bB(c,1),!1)}}
W.dH.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.bT]},
$isj:1,
$asj:function(){return[W.bT]},
$ist:1,
$ast:function(){return[W.bT]},
$asm:function(){return[W.bT]},
$isl:1,
$asl:function(){return[W.bT]},
$asn:function(){return[W.bT]}}
W.dI.prototype={
gi:function(a){return a.length}}
W.dJ.prototype={
gi:function(a){return a.length}}
W.bW.prototype={}
W.dM.prototype={
gi:function(a){return a.length}}
W.b5.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.r]},
$isj:1,
$asj:function(){return[W.r]},
$ist:1,
$ast:function(){return[W.r]},
$asm:function(){return[W.r]},
$isl:1,
$asl:function(){return[W.r]},
$asn:function(){return[W.r]}}
W.bX.prototype={}
W.dN.prototype={
D:function(a,b){return a.send(b)}}
W.b6.prototype={}
W.aq.prototype={$isaq:1}
W.e2.prototype={
k:function(a){return String(a)}}
W.e6.prototype={
gi:function(a){return a.length}}
W.e8.prototype={
eU:function(a,b,c){return a.send(b,c)},
D:function(a,b){return a.send(b)}}
W.b9.prototype={}
W.e9.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.c5]},
$isj:1,
$asj:function(){return[W.c5]},
$ist:1,
$ast:function(){return[W.c5]},
$asm:function(){return[W.c5]},
$isl:1,
$asl:function(){return[W.c5]},
$asn:function(){return[W.c5]}}
W.F.prototype={$isF:1}
W.J.prototype={
gW:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.c(P.i4("No elements"))
if(s>1)throw H.c(P.i4("More than one element"))
return t.firstChild},
G:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.k(s),p=0;p<r;++p)q.J(s,t.firstChild)
return},
j:function(a,b,c){var t=this.a
J.k0(t,c,C.D.h(t.childNodes,b))},
gt:function(a){var t=this.a.childNodes
return new W.bU(t,t.length,-1,null,[H.V(t,"n",0)])},
gi:function(a){return this.a.childNodes.length},
h:function(a,b){return C.D.h(this.a.childNodes,b)},
$asj:function(){return[W.r]},
$asc1:function(){return[W.r]},
$asm:function(){return[W.r]},
$asl:function(){return[W.r]},
$asbn:function(){return[W.r]}}
W.r.prototype={
eE:function(a){var t=a.parentNode
if(t!=null)J.hG(t,a)},
k:function(a){var t=a.nodeValue
return t==null?this.cU(a):t},
J:function(a,b){return a.appendChild(b)},
dK:function(a,b){return a.removeChild(b)},
dL:function(a,b,c){return a.replaceChild(b,c)},
$isr:1,
gaV:function(a){return a.previousSibling}}
W.ca.prototype={
aW:function(a){return a.previousNode()}}
W.bc.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.r]},
$isj:1,
$asj:function(){return[W.r]},
$ist:1,
$ast:function(){return[W.r]},
$asm:function(){return[W.r]},
$isl:1,
$asl:function(){return[W.r]},
$asn:function(){return[W.r]}}
W.a0.prototype={
gi:function(a){return a.length}}
W.et.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.a0]},
$isj:1,
$asj:function(){return[W.a0]},
$ist:1,
$ast:function(){return[W.a0]},
$asm:function(){return[W.a0]},
$isl:1,
$asl:function(){return[W.a0]},
$asn:function(){return[W.a0]}}
W.ew.prototype={
D:function(a,b){return a.send(b)}}
W.ce.prototype={
e7:function(a,b){return a.createContextualFragment(b)},
cE:function(a,b){return a.selectNodeContents(b)}}
W.cg.prototype={
D:function(a,b){return a.send(b)}}
W.eD.prototype={
gi:function(a){return a.length}}
W.eH.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.ci]},
$isj:1,
$asj:function(){return[W.ci]},
$ist:1,
$ast:function(){return[W.ci]},
$asm:function(){return[W.ci]},
$isl:1,
$asl:function(){return[W.ci]},
$asn:function(){return[W.ci]}}
W.eJ.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.cj]},
$isj:1,
$asj:function(){return[W.cj]},
$ist:1,
$ast:function(){return[W.cj]},
$asm:function(){return[W.cj]},
$isl:1,
$asl:function(){return[W.cj]},
$asn:function(){return[W.cj]}}
W.a1.prototype={
gi:function(a){return a.length}}
W.eO.prototype={
h:function(a,b){return this.bv(a,b)},
aa:function(a,b){var t,s
for(t=0;!0;++t){s=this.dG(a,t)
if(s==null)return
b.$2(s,this.bv(a,s))}},
gB:function(a){var t=H.D([],[P.p])
this.aa(a,new W.eP(t))
return t},
gi:function(a){return a.length},
bv:function(a,b){return a.getItem(b)},
dG:function(a,b){return a.key(b)},
$asaN:function(){return[P.p,P.p]}}
W.eP.prototype={
$2:function(a,b){return C.a.l(this.a,a)},
$S:function(a,b){return{func:1,args:[,,]}}}
W.cm.prototype={
H:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.az(a,b,c,d)
t=W.kP("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.J(s).G(0,new W.J(t))
return s}}
W.eV.prototype={
H:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.az(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.K.H(t.createElement("table"),b,c,d)
t.toString
t=new W.J(t)
r=t.gW(t)
r.toString
t=new W.J(r)
q=t.gW(t)
s.toString
q.toString
new W.J(s).G(0,new W.J(q))
return s}}
W.eW.prototype={
H:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.az(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.K.H(t.createElement("table"),b,c,d)
t.toString
t=new W.J(t)
r=t.gW(t)
s.toString
r.toString
new W.J(s).G(0,new W.J(r))
return s}}
W.bh.prototype={$isbh:1}
W.eY.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.co]},
$isj:1,
$asj:function(){return[W.co]},
$ist:1,
$ast:function(){return[W.co]},
$asm:function(){return[W.co]},
$isl:1,
$asl:function(){return[W.co]},
$asn:function(){return[W.co]}}
W.eZ.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.cn]},
$isj:1,
$asj:function(){return[W.cn]},
$ist:1,
$ast:function(){return[W.cn]},
$asm:function(){return[W.cn]},
$isl:1,
$asl:function(){return[W.cn]},
$asn:function(){return[W.cn]}}
W.f0.prototype={
gi:function(a){return a.length}}
W.aw.prototype={$isaw:1}
W.f4.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.cr]},
$isj:1,
$asj:function(){return[W.cr]},
$ist:1,
$ast:function(){return[W.cr]},
$asm:function(){return[W.cr]},
$isl:1,
$asl:function(){return[W.cr]},
$asn:function(){return[W.cr]}}
W.f5.prototype={
gi:function(a){return a.length}}
W.cs.prototype={
aW:function(a){return a.previousNode()}}
W.ax.prototype={}
W.fe.prototype={
k:function(a){return String(a)}}
W.ff.prototype={
gi:function(a){return a.length}}
W.fg.prototype={
D:function(a,b){return a.send(b)}}
W.az.prototype={
geb:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.u("deltaY is not supported"))},
$isaz:1}
W.bj.prototype={
gdX:function(a){var t,s
t=P.a7
s=new P.a5(0,$.z,null,[t])
this.dB(a)
this.dM(a,W.jF(new W.fi(new P.h4(s,[t]))))
return s},
dM:function(a,b){return a.requestAnimationFrame(H.bB(b,1))},
dB:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.fi.prototype={
$1:function(a){this.a.e4(0,a)},
$S:function(a){return{func:1,args:[,]}}}
W.i9.prototype={}
W.fr.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.bL]},
$isj:1,
$asj:function(){return[W.bL]},
$ist:1,
$ast:function(){return[W.bL]},
$asm:function(){return[W.bL]},
$isl:1,
$asl:function(){return[W.bL]},
$asn:function(){return[W.bL]}}
W.fs.prototype={
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
u:function(a,b){var t
if(b==null)return!1
t=J.v(b)
if(!t.$isM)return!1
return a.left===t.gc1(b)&&a.top===t.gcf(b)&&a.width===t.ga0(b)&&a.height===t.gZ(b)},
gq:function(a){var t,s,r,q
t=a.left
s=a.top
r=a.width
q=a.height
return W.jz(W.aC(W.aC(W.aC(W.aC(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gZ:function(a){return a.height},
ga0:function(a){return a.width}}
W.fJ.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.bV]},
$isj:1,
$asj:function(){return[W.bV]},
$ist:1,
$ast:function(){return[W.bV]},
$asm:function(){return[W.bV]},
$isl:1,
$asl:function(){return[W.bV]},
$asn:function(){return[W.bV]}}
W.cK.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.r]},
$isj:1,
$asj:function(){return[W.r]},
$ist:1,
$ast:function(){return[W.r]},
$asm:function(){return[W.r]},
$isl:1,
$asl:function(){return[W.r]},
$asn:function(){return[W.r]}}
W.h1.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.a1]},
$isj:1,
$asj:function(){return[W.a1]},
$ist:1,
$ast:function(){return[W.a1]},
$asm:function(){return[W.a1]},
$isl:1,
$asl:function(){return[W.a1]},
$asn:function(){return[W.a1]}}
W.h2.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
p:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.cl]},
$isj:1,
$asj:function(){return[W.cl]},
$ist:1,
$ast:function(){return[W.cl]},
$asm:function(){return[W.cl]},
$isl:1,
$asl:function(){return[W.cl]},
$asn:function(){return[W.cl]}}
W.fo.prototype={
aa:function(a,b){var t,s,r,q,p,o
for(t=this.gB(this),s=t.length,r=this.a,q=J.k(r),p=0;p<t.length;t.length===s||(0,H.P)(t),++p){o=t[p]
b.$2(o,q.a1(r,o))}},
gB:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.D([],[P.p])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.l(s,p.name)}return s},
$asc3:function(){return[P.p,P.p]},
$asaN:function(){return[P.p,P.p]},
gdE:function(){return this.a}}
W.ft.prototype={
h:function(a,b){return J.hL(this.a,b)},
gi:function(a){return this.gB(this).length}}
W.fw.prototype={
ey:function(a,b,c,d){return W.a4(this.a,this.b,a,!1,H.af(this,0))}}
W.ic.prototype={}
W.fx.prototype={
di:function(a,b,c,d,e){this.dT()},
dT:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.k_(r,this.c,t,!1)}}}
W.fy.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(a){return{func:1,args:[,]}}}
W.bl.prototype={
dj:function(a){var t,s
t=$.$get$id()
if(t.gad(t)){for(s=0;s<262;++s)t.j(0,C.V[s],W.lW())
for(s=0;s<12;++s)t.j(0,C.v[s],W.lX())}},
Y:function(a){return $.$get$jx().A(0,W.b4(a))},
N:function(a,b,c){var t,s,r
t=W.b4(a)
s=$.$get$id()
r=s.h(0,H.e(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)}}
W.n.prototype={
gt:function(a){return new W.bU(a,this.gi(a),-1,null,[H.V(a,"n",0)])}}
W.cc.prototype={
Y:function(a){return C.a.bG(this.a,new W.ei(a))},
N:function(a,b,c){return C.a.bG(this.a,new W.eh(a,b,c))}}
W.ei.prototype={
$1:function(a){return a.Y(this.a)},
$S:function(a){return{func:1,args:[,]}}}
W.eh.prototype={
$1:function(a){return a.N(this.a,this.b,this.c)},
$S:function(a){return{func:1,args:[,]}}}
W.bs.prototype={
dn:function(a,b,c,d){var t,s,r
this.a.G(0,c)
t=b.aw(0,new W.h_())
s=b.aw(0,new W.h0())
this.b.G(0,t)
r=this.c
r.G(0,C.X)
r.G(0,s)},
Y:function(a){return this.a.A(0,W.b4(a))},
N:function(a,b,c){var t,s
t=W.b4(a)
s=this.c
if(s.A(0,H.e(t)+"::"+b))return this.d.dW(c)
else if(s.A(0,"*::"+b))return this.d.dW(c)
else{s=this.b
if(s.A(0,H.e(t)+"::"+b))return!0
else if(s.A(0,"*::"+b))return!0
else if(s.A(0,H.e(t)+"::*"))return!0
else if(s.A(0,"*::*"))return!0}return!1}}
W.h_.prototype={
$1:function(a){return!C.a.A(C.v,a)},
$S:function(a){return{func:1,args:[,]}}}
W.h0.prototype={
$1:function(a){return C.a.A(C.v,a)},
$S:function(a){return{func:1,args:[,]}}}
W.h5.prototype={
N:function(a,b,c){if(this.cX(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.hL(a,"template")==="")return this.e.A(0,b)
return!1}}
W.h6.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)},
$S:function(a){return{func:1,args:[,]}}}
W.h3.prototype={
Y:function(a){var t=J.v(a)
if(!!t.$isbf)return!1
t=!!t.$isf
if(t&&W.b4(a)==="foreignObject")return!1
if(t)return!0
return!1},
N:function(a,b,c){if(b==="is"||C.j.cQ(b,"on"))return!1
return this.Y(a)}}
W.bU.prototype={
m:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbx(J.iv(this.a,t))
this.c=t
return!0}this.sbx(null)
this.c=s
return!1},
gn:function(a){return this.d},
sbx:function(a){this.d=a}}
W.cb.prototype={}
W.i1.prototype={}
W.i8.prototype={}
W.fZ.prototype={}
W.d4.prototype={
b7:function(a){new W.h7(this).$2(a,null)},
a7:function(a,b){if(b==null)J.iD(a)
else J.hG(b,a)},
dP:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.ki(a)
r=J.hL(s.gdE(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.G(n)}p="element unprintable"
try{p=J.b0(a)}catch(n){H.G(n)}try{o=W.b4(a)
this.dO(a,b,t,p,o,s,r)}catch(n){if(H.G(n) instanceof P.X)throw n
else{this.a7(a,b)
window
m="Removing corrupted element "+H.e(p)
if(typeof console!="undefined")window.console.warn(m)}}},
dO:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.a7(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(t)
return}if(!this.a.Y(a)){this.a7(a,b)
window
t="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(t)
return}if(g!=null)if(!this.a.N(a,"is",g)){this.a7(a,b)
window
t="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(t)
return}t=f.gB(f)
s=H.D(t.slice(0),[H.af(t,0)])
for(r=f.gB(f).length-1,t=f.a,q=J.k(t);r>=0;--r){p=s[r]
if(!this.a.N(a,J.kw(p),q.a1(t,p))){window
o="Removing disallowed attribute <"+H.e(e)+" "+p+'="'+H.e(q.a1(t,p))+'">'
if(typeof console!="undefined")window.console.warn(o)
q.a1(t,p)
q.dJ(t,p)}}if(!!J.v(a).$isbh)this.b7(a.content)}}
W.h7.prototype={
$2:function(a,b){var t,s,r,q
r=this.a
switch(a.nodeType){case 1:r.dP(a,b)
break
case 8:case 11:case 3:case 4:break
default:r.a7(a,b)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.kj(t)}catch(q){H.G(q)
r=t
J.hG(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(a,b){return{func:1,v:true,args:[W.r,W.r]}}}
W.cw.prototype={}
W.cx.prototype={}
W.cy.prototype={}
W.cz.prototype={}
W.cA.prototype={}
W.cB.prototype={}
W.cC.prototype={}
W.cE.prototype={}
W.cF.prototype={}
W.cI.prototype={}
W.cJ.prototype={}
W.cL.prototype={}
W.cM.prototype={}
W.cP.prototype={}
W.cQ.prototype={}
W.bt.prototype={}
W.bu.prototype={}
W.cR.prototype={}
W.cS.prototype={}
W.cW.prototype={}
W.cZ.prototype={}
W.d_.prototype={}
W.bv.prototype={}
W.bw.prototype={}
W.d0.prototype={}
W.d1.prototype={}
W.d5.prototype={}
W.d6.prototype={}
W.d7.prototype={}
W.d8.prototype={}
W.d9.prototype={}
W.da.prototype={}
W.db.prototype={}
W.dc.prototype={}
W.dd.prototype={}
W.de.prototype={}
P.hc.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(a,b){return{func:1,args:[,,]}}}
P.fT.prototype={
dm:function(a){var t,s,r,q,p,o,n
do{t=(a&4294967295)>>>0
a=C.b.v(a-t,4294967296)
s=(a&4294967295)>>>0
a=C.b.v(a-s,4294967296)
r=((~t&4294967295)>>>0)+(t<<21>>>0)
q=(r&4294967295)>>>0
s=(~s>>>0)+((s<<21|t>>>11)>>>0)+C.b.v(r-q,4294967296)&4294967295
r=((q^(q>>>24|s<<8))>>>0)*265
t=(r&4294967295)>>>0
s=((s^s>>>24)>>>0)*265+C.b.v(r-t,4294967296)&4294967295
r=((t^(t>>>14|s<<18))>>>0)*21
t=(r&4294967295)>>>0
s=((s^s>>>14)>>>0)*21+C.b.v(r-t,4294967296)&4294967295
t=(t^(t>>>28|s<<4))>>>0
s=(s^s>>>28)>>>0
r=(t<<31>>>0)+t
q=(r&4294967295)>>>0
p=C.b.v(r-q,4294967296)
r=this.a*1037
o=(r&4294967295)>>>0
this.a=o
n=(this.b*1037+C.b.v(r-o,4294967296)&4294967295)>>>0
this.b=n
o=(o^q)>>>0
this.a=o
p=(n^s+((s<<31|t>>>1)>>>0)+p&4294967295)>>>0
this.b=p}while(a!==0)
if(p===0&&o===0)this.a=23063
this.M()
this.M()
this.M()
this.M()},
M:function(){var t,s,r,q,p,o
t=this.a
s=4294901760*t
r=(s&4294967295)>>>0
q=55905*t
p=(q&4294967295)>>>0
o=p+r+this.b
t=(o&4294967295)>>>0
this.a=t
this.b=(C.b.v(q-p+(s-r)+(o-t),4294967296)&4294967295)>>>0
H.b(!0)
H.b(this.b<4294967296)},
c5:function(a){var t,s,r
if(a<=0||a>4294967296)throw H.c(P.ld("max must be in range 0 < max \u2264 2^32, was "+a))
t=a-1
if((a&t)>>>0===0){this.M()
return(this.a&t)>>>0}do{this.M()
s=this.a
r=s%a}while(s-r+a>=4294967296)
return r},
aU:function(){this.M()
var t=this.a
this.M()
return((t&67108863)*134217728+(this.a&134217727))/9007199254740992}}
P.i3.prototype={}
P.fU.prototype={}
P.M.prototype={}
P.dY.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return this.S(a,b)},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
S:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.hX]},
$asm:function(){return[P.hX]},
$isl:1,
$asl:function(){return[P.hX]},
$asn:function(){return[P.hX]}}
P.ek.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return this.S(a,b)},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
S:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.i2]},
$asm:function(){return[P.i2]},
$isl:1,
$asl:function(){return[P.i2]},
$asn:function(){return[P.i2]}}
P.eu.prototype={
gi:function(a){return a.length}}
P.bf.prototype={$isbf:1}
P.eU.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return this.S(a,b)},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
S:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.p]},
$asm:function(){return[P.p]},
$isl:1,
$asl:function(){return[P.p]},
$asn:function(){return[P.p]}}
P.f.prototype={
H:function(a,b,c,d){var t,s,r,q,p,o
t=H.D([],[W.cb])
C.a.l(t,W.jw(null))
C.a.l(t,W.jA())
C.a.l(t,new W.h3())
c=new W.d4(new W.cc(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.p).e8(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.J(q)
o=t.gW(t)
for(t=J.k(p);r=o.firstChild,r!=null;)t.J(p,r)
return p},
$isf:1}
P.f6.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return this.S(a,b)},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
S:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.i7]},
$asm:function(){return[P.i7]},
$isl:1,
$asl:function(){return[P.i7]},
$asn:function(){return[P.i7]}}
P.cG.prototype={}
P.cH.prototype={}
P.cN.prototype={}
P.cO.prototype={}
P.cX.prototype={}
P.cY.prototype={}
P.d2.prototype={}
P.d3.prototype={}
P.dm.prototype={
gi:function(a){return a.length}}
P.dn.prototype={
gi:function(a){return a.length}}
P.aG.prototype={}
P.el.prototype={
gi:function(a){return a.length}}
P.eA.prototype={
bE:function(a,b){return a.activeTexture(b)},
bH:function(a,b,c){return a.attachShader(b,c)},
bI:function(a,b,c){return a.bindBuffer(b,c)},
bJ:function(a,b,c){return a.bindTexture(b,c)},
bK:function(a,b){return a.blendEquation(b)},
bL:function(a,b,c){return a.blendFunc(b,c)},
bM:function(a,b,c,d){return a.bufferData(b,c,d)},
bN:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bO:function(a,b){return a.compileShader(b)},
bP:function(a){return a.createBuffer()},
bQ:function(a){return a.createProgram()},
bS:function(a,b){return a.createShader(b)},
bT:function(a){return a.createTexture()},
bV:function(a,b){return a.depthMask(b)},
bW:function(a,b){return a.disable(b)},
bX:function(a,b,c,d){return a.drawArrays(b,c,d)},
bY:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bZ:function(a,b){return a.enable(b)},
c_:function(a,b){return a.enableVertexAttribArray(b)},
ax:function(a){return P.hd(a.getContextAttributes())},
b1:function(a){return a.getError()},
b2:function(a,b){return a.getProgramInfoLog(b)},
b3:function(a,b,c){return a.getProgramParameter(b,c)},
b4:function(a,b){return a.getShaderInfoLog(b)},
b5:function(a,b,c){return a.getShaderParameter(b,c)},
b6:function(a,b,c){return a.getUniformLocation(b,c)},
c2:function(a,b){return a.linkProgram(b)},
c6:function(a,b,c){return a.pixelStorei(b,c)},
ba:function(a,b,c){return a.shaderSource(b,c)},
bc:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aY:function(a,b,c,d,e,f,g,h,i,j){this.aP(a,b,c,d,e,f,g)
return},
ca:function(a,b,c,d,e,f,g){return this.aY(a,b,c,d,e,f,g,null,null,null)},
aP:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cb:function(a,b,c,d){return a.texParameterf(b,c,d)},
cc:function(a,b,c,d){return a.texParameteri(b,c,d)},
cg:function(a,b,c){return a.uniform1f(b,c)},
ci:function(a,b,c){return a.uniform1fv(b,c)},
cj:function(a,b,c){return a.uniform1i(b,c)},
ck:function(a,b,c){return a.uniform1iv(b,c)},
cl:function(a,b,c){return a.uniform2fv(b,c)},
cm:function(a,b,c){return a.uniform3fv(b,c)},
cn:function(a,b,c){return a.uniform4fv(b,c)},
co:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cp:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cr:function(a,b){return a.useProgram(b)},
ct:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)}}
P.eB.prototype={
dZ:function(a,b){return a.beginTransformFeedback(b)},
e1:function(a,b){return a.bindVertexArray(b)},
ea:function(a){return a.createVertexArray()},
eh:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
ei:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
ej:function(a){return a.endTransformFeedback()},
eQ:function(a,b,c,d){this.dS(a,b,c,d)
return},
dS:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
eR:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bE:function(a,b){return a.activeTexture(b)},
bH:function(a,b,c){return a.attachShader(b,c)},
bI:function(a,b,c){return a.bindBuffer(b,c)},
bJ:function(a,b,c){return a.bindTexture(b,c)},
bK:function(a,b){return a.blendEquation(b)},
bL:function(a,b,c){return a.blendFunc(b,c)},
bM:function(a,b,c,d){return a.bufferData(b,c,d)},
bN:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bO:function(a,b){return a.compileShader(b)},
bP:function(a){return a.createBuffer()},
bQ:function(a){return a.createProgram()},
bS:function(a,b){return a.createShader(b)},
bT:function(a){return a.createTexture()},
bV:function(a,b){return a.depthMask(b)},
bW:function(a,b){return a.disable(b)},
bX:function(a,b,c,d){return a.drawArrays(b,c,d)},
bY:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bZ:function(a,b){return a.enable(b)},
c_:function(a,b){return a.enableVertexAttribArray(b)},
ax:function(a){return P.hd(a.getContextAttributes())},
b1:function(a){return a.getError()},
b2:function(a,b){return a.getProgramInfoLog(b)},
b3:function(a,b,c){return a.getProgramParameter(b,c)},
b4:function(a,b){return a.getShaderInfoLog(b)},
b5:function(a,b,c){return a.getShaderParameter(b,c)},
b6:function(a,b,c){return a.getUniformLocation(b,c)},
c2:function(a,b){return a.linkProgram(b)},
c6:function(a,b,c){return a.pixelStorei(b,c)},
ba:function(a,b,c){return a.shaderSource(b,c)},
bc:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aY:function(a,b,c,d,e,f,g,h,i,j){this.aP(a,b,c,d,e,f,g)
return},
ca:function(a,b,c,d,e,f,g){return this.aY(a,b,c,d,e,f,g,null,null,null)},
aP:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cb:function(a,b,c,d){return a.texParameterf(b,c,d)},
cc:function(a,b,c,d){return a.texParameteri(b,c,d)},
cg:function(a,b,c){return a.uniform1f(b,c)},
ci:function(a,b,c){return a.uniform1fv(b,c)},
cj:function(a,b,c){return a.uniform1i(b,c)},
ck:function(a,b,c){return a.uniform1iv(b,c)},
cl:function(a,b,c){return a.uniform2fv(b,c)},
cm:function(a,b,c){return a.uniform3fv(b,c)},
cn:function(a,b,c){return a.uniform4fv(b,c)},
co:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cp:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cr:function(a,b){return a.useProgram(b)},
ct:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)}}
P.eK.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return P.hd(this.dF(a,b))},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
dF:function(a,b){return a.item(b)},
$isj:1,
$asj:function(){return[P.aM]},
$asm:function(){return[P.aM]},
$isl:1,
$asl:function(){return[P.aM]},
$asn:function(){return[P.aM]}}
P.cT.prototype={}
P.cU.prototype={}
B.hy.prototype={
$1:function(a){$.$get$he().j(0,a.which,!0)},
$S:function(a){return{func:1,args:[W.aq]}}}
B.hz.prototype={
$1:function(a){$.$get$he().j(0,a.which,null)},
$S:function(a){return{func:1,args:[W.aq]}}}
B.hA.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.lN=t
$.lO=C.b.T(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.it=s-C.b.v(window.innerWidth,2)
$.jR=-(t-C.b.v(window.innerHeight,2))},
$S:function(a){return{func:1,args:[W.F]}}}
B.hB.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.bD=t-C.b.v(window.innerWidth,2)
$.bE=-(s-C.b.v(window.innerHeight,2))
if(a.button===2)$.$get$bC().j(0,"right",!0)
else $.$get$bC().j(0,"left",!0)},
$S:function(a){return{func:1,args:[W.F]}}}
B.hC.prototype={
$1:function(a){if(a.button===2)$.$get$bC().j(0,"right",null)
else $.$get$bC().j(0,"left",null)},
$S:function(a){return{func:1,args:[W.F]}}}
B.em.prototype={
d5:function(a,b,c,d){var t
W.a4(d,W.kQ(d),new B.en(this),!1,W.az)
W.a4(d,"mousemove",new B.eo(this),!1,W.F)
t=W.aw
W.a4(d,"touchstart",new B.ep(),!1,t)
W.a4(d,"touchmove",new B.eq(this),!1,t)
B.ma(null)}}
B.en.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.ae.geb(a)*r.k3
if(C.d.T(r.fy,t)>0)r.fy=C.d.T(r.fy,t)}catch(q){s=H.G(q)
P.a8(s)}},
$S:function(a){return{func:1,args:[W.az]}}}
B.eo.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=t.go+C.b.T($.it,$.bD)*0.01
s=t.id
r=$.bE
q=$.jR
t.id=s+(r-q)*0.01
$.bD=$.it
$.bE=q}},
$S:function(a){return{func:1,args:[W.F]}}}
B.ep.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.d.a_(t.clientX)
C.d.a_(t.clientY)
$.bD=s
C.d.a_(t.clientX)
$.bE=C.d.a_(t.clientY)},
$S:function(a){return{func:1,args:[W.aw]}}}
B.eq.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.d.a_(t.clientX)
t=C.d.a_(t.clientY)
r=this.a
r.go=r.go+C.b.T(s,$.bD)*0.01
r.id=r.id+($.bE-t)*0.01
$.bD=s
$.bE=t},
$S:function(a){return{func:1,args:[W.aw]}}}
G.ea.prototype={}
G.fa.prototype={
U:function(a,b){var t=this.d
if(H.ab(!t.E(0,a)))H.aD("uniform "+a+" already set")
t.j(0,a,b)},
bi:function(){return this.d},
k:function(a){var t,s,r,q
t=H.D(["{"+new H.ct(H.lU(this),null).k(0)+"}["+this.a+"]"],[P.p])
for(s=this.d,r=s.gB(s),r=r.gt(r);r.m();){q=r.gn(r)
C.a.l(t,H.e(q)+": "+H.e(s.h(0,q)))}return C.a.ae(t,"\n")}}
G.dp.prototype={}
G.dr.prototype={
c0:function(a,b,c){J.kg(this.a,b)
if(c>0)J.kC(this.a,b,c)},
cu:function(a,b,c,d,e,f,g,h){J.iz(this.a,34962,b)
J.kD(this.a,c,d,e,!1,g,h)}}
G.dL.prototype={
k:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3[0]","f4[0]"]
for(s=this.e,r=s.gB(s),r=r.gt(r);r.m();){q=r.gn(r)
p=$.$get$R().h(0,q).a
C.a.l(t,H.e(q)+"["+p+","+H.e(C.c.gi(s.h(0,q)))+"]")}return C.a.ae(t," ")}}
G.cq.prototype={}
G.cp.prototype={}
G.e5.prototype={}
G.e7.prototype={
bf:function(a,b,c){var t,s
if(C.j.aC(a,0)===105){if(H.ab(C.b.aA(b.length,c)===this.z))H.aD("ChangeAttribute "+this.z)}else{t=C.b.aA(b.length,c)
if(H.ab(t===(this.ch.length/3|0)))H.aD("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}this.cy.j(0,a,b)
t=this.d
s=this.r.h(0,a)
J.iz(t.a,34962,s)
J.k4(t.a,34962,b,35048)},
bg:function(a){this.ch=a
this.bf("aPosition",a,3)},
d2:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
a3:function(a,b,c){var t,s,r,q,p,o
t=J.iw(a,0)===105
if(t&&this.z===0)this.z=C.b.aA(b.length,c)
s=this.r
r=this.d
s.j(0,a,J.iA(r.a))
this.bf(a,b,c)
q=$.$get$R().h(0,a)
if(q==null)throw H.c("Unknown canonical "+a)
p=this.x
if(H.ab(p.E(0,a)))H.aD("unexpected attribute "+a)
o=p.h(0,a)
J.hI(r.a,this.e)
r.c0(0,o,t?1:0)
r.cu(0,s.h(0,a),o,q.bh(),5126,!1,0,0)},
k:function(a){var t,s,r,q
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,r=t.gB(t),r=r.gt(r);r.m();){q=r.gn(r)
C.a.l(s,H.e(q)+":"+t.h(0,q).length)}return"MESH["+this.a+"] "+C.a.ae(s,"  ")}}
G.er.prototype={
d_:function(a,b){var t=C.b.cA(a,b)
if(this.z===t)return
this.z=t
this.bk()},
bk:function(){var t,s,r,q,p,o,n
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
t.a2(0,0,1/(p*s))
t.a2(1,1,1/p)
t.a2(2,2,(q+r)/o)
t.a2(3,2,-1)
t.a2(2,3,2*r*q/o)},
bi:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.q(new Float32Array(3))
o.am(r,q,p)
p=this.d
p.j(0,"uEyePosition",o)
o=this.cy
o.w(t)
t=o.a
t[12]=0
t[13]=0
t[14]=0
t[15]=1
n=-s[12]
m=-s[13]
l=-s[14]
s=J.v(n)
r=!!s.$isaQ
k=r?s.geS(n):1
if(!!s.$isq){j=s.gaZ(n)
m=s.gb_(n)
l=s.gcw(n)
n=j}else if(r){j=s.gaZ(n)
m=s.gb_(n)
l=s.gcw(n)
n=j}else if(!(typeof n==="number")){n=null
m=null
l=null}s=C.d.C(t[0],n)
r=C.d.C(t[4],m)
q=C.d.C(t[8],l)
i=t[12]
h=C.d.C(t[1],n)
g=C.d.C(t[5],m)
f=C.d.C(t[9],l)
e=t[13]
d=C.d.C(t[2],n)
c=C.d.C(t[6],m)
b=C.d.C(t[10],l)
a=t[14]
a0=C.d.C(t[3],n)
a1=C.d.C(t[7],m)
a2=C.d.C(t[11],l)
a3=t[15]
t[12]=s+r+q+i*k
t[13]=h+g+f+e*k
t[14]=d+c+b+a*k
t[15]=a0+a1+a2+a3*k
a3=this.cx
a3.w(this.db)
a3.eB(0,o)
p.j(0,"uPerspectiveViewMatrix",a3)
return p}}
G.ez.prototype={
d6:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.P)(t),++o){n=t[o]
r.j(0,n,J.iC(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.P)(t),++o){n=t[o]
r.j(0,n,J.iC(q.a,p,n))}},
dc:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gi(t)===s.gi(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gB(s),s=s.gt(s);s.m();){q=s.gn(s)
if(!t.E(0,q))C.a.l(r,q)}for(t=this.x,s=new P.bm(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.m();){q=s.d
if(!t.A(0,q))C.a.l(r,q)}return r},
dg:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gB(b),s=s.gt(s),r=this.d,q=this.y,p=this.z,o=0;s.m();){n=s.gn(s)
switch(J.iw(n,0)){case 117:if(q.E(0,n)){m=b.h(0,n)
if(p.E(0,n))H.bF("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.j(0,n,a)
l=$.$get$R().h(0,n)
if(l==null)H.E("unknown "+n)
H.b(q.E(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.hM(r.a,k,m)
else if(!!J.v(m).$iskV)J.kA(r.a,k,m)
break
case"float":if(l.c===0)J.ky(r.a,k,m)
else if(!!J.v(m).$ishR)J.kz(r.a,k,m)
break
case"mat4":if(l.c===0){n=H.ag(m,"$isa_").a
J.iJ(r.a,k,!1,n)}else if(!!J.v(m).$ishR)J.iJ(r.a,k,!1,m)
else if(H.ab(!1))H.aD("bad unform: "+n)
break
case"mat3":if(l.c===0){n=C.c.gcS(H.ag(m,"$isme"))
J.iI(r.a,k,!1,n)}else if(!!J.v(m).$ishR)J.iI(r.a,k,!1,m)
else if(H.ab(!1))H.aD("bad unform: "+n)
break
case"vec4":n=l.c
j=r.a
if(n===0)J.iH(j,k,H.ag(m,"$isaQ").a)
else J.iH(j,k,m)
break
case"vec3":n=l.c
j=r.a
if(n===0)J.iG(j,k,H.ag(m,"$isq").a)
else J.iG(j,k,m)
break
case"vec2":if(l.c===0){n=C.c.gcS(H.ag(m,"$ismf"))
J.iF(r.a,k,n)}else J.iF(r.a,k,m)
break
case"sampler2D":case"sampler2DShadow":n=C.b.R(33984,this.ch)
J.ix(r.a,n)
n=H.ag(m,"$isbi").b
J.bG(r.a,3553,n)
n=this.ch
J.hM(r.a,k,n)
this.ch=this.ch+1
break
case"samplerCube":H.b(n==="uCubeTexture")
n=C.b.R(33984,this.ch)
J.ix(r.a,n)
n=H.ag(m,"$isbi").b
J.bG(r.a,34067,n)
n=this.ch
J.hM(r.a,k,n)
this.ch=this.ch+1
break
default:H.bF("Error: unknow uniform type: "+j)
H.b(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":n=J.A(m,!0)
j=r.a
if(n)J.dh(j,2929)
else J.hK(j,2929)
break
case"cStencilFunc":H.ag(m,"$iscq")
n=m.a
j=r.a
if(n===1281)J.hK(j,2960)
else{J.dh(j,2960)
j=m.b
i=m.c
J.kt(r.a,n,j,i)}break
case"cDepthWrite":J.ka(r.a,m)
break
case"cBlendEquation":H.ag(m,"$iscp")
n=m.a
j=r.a
if(n===1281)J.hK(j,3042)
else{J.dh(j,3042)
j=m.b
i=m.c
J.k3(r.a,j,i)
J.k2(r.a,n)}break}++o
break}}h=P.kO(0,0,0,Date.now()-new P.b2(t,!1).a,0,0)
""+o
h.k(0)},
d1:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
Date.now()
t=this.d
J.kB(t.a,this.r)
this.ch=0
this.z.O(0)
for(s=0;s<2;++s){r=b[s]
this.dg(r.a,r.bi())}q=this.Q
q.O(0)
for(p=a.cy,p=p.gB(p),p=p.gt(p);p.m();)q.l(0,p.gn(p))
o=this.dc()
if(o.length!==0)P.a8("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(o)))
J.hI(a.d.a,a.e)
n=this.e.f.length>0
q=a.f
p=a.d2()
m=a.Q
l=a.z
if(n)J.k1(t.a,q)
if(m!==-1){k=t.a
if(l>1)J.ke(k,q,p,m,0,l)
else J.kd(k,q,p,m,0)}else{m=t.a
if(l>1)J.kc(m,q,0,p,l)
else J.kb(m,q,0,p)}if(n)J.kh(t.a)},
d0:function(a,b){return this.d1(a,b,null)}}
G.w.prototype={
bh:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.b(!1)
return-1}}}
G.eG.prototype={
cZ:function(a){var t,s,r,q
H.b(this.b==null)
for(t=this.c,s=this.x,r=0;r<1;++r){q=a[r]
H.b($.$get$R().E(0,q))
H.b(!C.a.A(t,q))
C.a.l(t,q)
s.j(0,q,this.r);++this.r}C.a.bb(t)},
be:function(a){var t,s,r,q
H.b(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.P)(a),++r){q=a[r]
if(H.ab($.$get$R().E(0,q)))H.aD("missing uniform "+q)
H.b(!C.a.A(s,q))
C.a.l(s,q)}C.a.bb(s)},
d7:function(a,b){H.b(this.b==null)
this.b=this.dh(!0,a,b)},
bj:function(a){return this.d7(a,null)},
dh:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.b(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.P)(t),++o){n=t[o]
m=$.$get$R().h(0,n)
C.a.l(q,"layout (location="+H.e(p.h(0,n))+") in "+m.a+" "+H.e(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,o=0;!1;++o){k=t[o]
m=$.$get$R().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.e(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.P)(t),++o){k=t[o]
m=$.$get$R().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.e(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.P)(t),++o){k=t[o]
m=$.$get$R().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.e(k)+j+";")}C.a.l(q,"")
C.a.l(q,"void main(void) {")
C.a.G(q,b)
C.a.l(q,"}")
return C.a.ae(q,"\n")}}
G.eI.prototype={}
G.f_.prototype={
d3:function(a,b){var t=this.e
if(t!==1)J.kv(a.a,b,34046,t)
J.iE(a.a,b,10240,this.r)
J.iE(a.a,b,10241,this.f)}}
G.bi.prototype={
k:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.dO.prototype={
d8:function(a){var t,s
t=this.d
s=this.c
J.bG(t.a,s,this.b)
J.ku(t.a,s,0,6408,6408,5121,a)}}
R.eM.prototype={
d9:function(a,b,c){var t,s,r
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
r=this.dl(b,c,90,30)
this.d=r
J.hH(this.a,r)
t=t.createElement("div")
this.c=t
J.hH(this.a,t)},
dl:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.ls("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.y).bp(r,"float")
r.setProperty(p,"left","")
p=C.y.bp(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.r.J(t,s)}return t}}
R.eN.prototype={
df:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.A.eP(s,2)+" fps"
t=this.c;(t&&C.r).cN(t,b)
r=C.b.v(30*C.A.e2(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.r).J(t,q)},
de:function(a){return this.df(a,"")}}
A.hj.prototype={
$2:function(a,b){var t=536870911&a+J.aZ(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(a,b){return{func:1,args:[P.x,P.B]}}}
T.a_.prototype={
a2:function(a,b,c){H.b(a<4)
H.b(b<4)
this.a[b*4+a]=c},
w:function(a){var t,s
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
u:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.a_){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gq:function(a){return A.io(this.a)},
aj:function(a){var t,s
t=new Float32Array(4)
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.aQ(t)},
al:function(){var t=this.a
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
eB:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.q.prototype={
am:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
w:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
k:function(a){var t=this.a
return"["+H.e(t[0])+","+H.e(t[1])+","+H.e(t[2])+"]"},
u:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.q){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gq:function(a){return A.io(this.a)},
T:function(a,b){var t,s,r
t=new Float32Array(3)
s=new T.q(t)
s.w(this)
r=b.a
t[0]=t[0]-r[0]
t[1]=t[1]-r[1]
t[2]=t[2]-r[2]
return s},
R:function(a,b){var t=new T.q(new Float32Array(3))
t.w(this)
t.l(0,b)
return t},
h:function(a,b){return this.a[b]},
gi:function(a){return Math.sqrt(this.gaf())},
gaf:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
av:function(a){var t,s,r
t=Math.sqrt(this.gaf())
if(t===0)return 0
s=1/t
r=this.a
r[0]=r[0]*s
r[1]=r[1]*s
r[2]=r[2]*s
return t},
aS:function(a){var t,s
t=a.a
s=this.a
return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]},
bU:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.q(new Float32Array(3))
t.am(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
l:function(a,b){var t,s
t=b.a
s=this.a
s[0]=s[0]+t[0]
s[1]=s[1]+t[1]
s[2]=s[2]+t[2]},
ak:function(a,b){var t=this.a
t[2]=t[2]*b
t[1]=t[1]*b
t[0]=t[0]*b},
b8:function(a){var t=new T.q(new Float32Array(3))
t.w(this)
t.ak(0,a)
return t},
scv:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]}}
T.aQ.prototype={
k:function(a){var t=this.a
return H.e(t[0])+","+H.e(t[1])+","+H.e(t[2])+","+H.e(t[3])},
u:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aQ){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gq:function(a){return A.io(this.a)},
h:function(a,b){return this.a[b]},
gi:function(a){var t,s,r,q
t=this.a
s=t[0]
r=t[1]
q=t[2]
t=t[3]
return Math.sqrt(s*s+r*r+q*q+t*t)}}
R.ev.prototype={
k:function(a){var t,s,r
t=this.a.a
s=this.b.a
r=this.c.a
return"POLE: "+(H.e(t[0])+" "+H.e(t[1])+" "+H.e(t[2]))+" time "+this.d+" ["+(H.e(s[0])+" "+H.e(s[1])+" "+H.e(s[2]))+"] => ["+(H.e(r[0])+" "+H.e(r[1])+" "+H.e(r[2]))+"]"}}
R.dQ.prototype={
k:function(a){var t=this.a.a
return"ION: "+(H.e(t[0])+" "+H.e(t[1])+" "+H.e(t[2]))+" speed: "+this.b},
dd:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j
t=new T.q(new Float32Array(3))
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.P)(a),++r){q=a[r]
p=this.a
o=q.a
n=new Float32Array(3)
m=new T.q(n)
m.w(p)
l=o.a
n[0]=n[0]-l[0]
n[1]=n[1]-l[1]
n[2]=n[2]-l[2]
k=Math.sqrt(m.gaf())
if(k<=0.2)continue
if(k>100.1){s=a[c.c5(a.length)].a
p=R.jc(c,20*d)
o=new T.q(new Float32Array(3))
o.w(s)
o.l(0,p)
this.a=o
H.bF("too far "+H.e(k))
return}p=new T.q(new Float32Array(3))
p.w(m)
p.ak(0,1/(k*k))
j=new T.q(new Float32Array(3))
j.w(t)
j.l(0,p)
t=j}for(s=b.length,r=0;r<b.length;b.length===s||(0,H.P)(b),++r,t=j){p=b[r].a
o=this.a
n=new Float32Array(3)
m=new T.q(n)
m.w(p)
l=o.a
n[0]=n[0]-l[0]
n[1]=n[1]-l[1]
n[2]=n[2]-l[2]
k=Math.sqrt(m.gaf())
if(k<=0.2){s=a[c.c5(a.length)].a
p=R.jc(c,20*d)
o=new T.q(new Float32Array(3))
o.w(s)
o.l(0,p)
this.a=o
H.bF("too close: "+H.e(k))
return}p=new T.q(new Float32Array(3))
p.w(m)
p.ak(0,1/(k*k))
j=new T.q(new Float32Array(3))
j.w(t)
j.l(0,p)}s=this.a
p=new T.q(new Float32Array(3))
p.w(t)
p.av(0)
this.a=s.R(0,p.b8(d).b8(this.b))}}
R.hv.prototype={
$1:function(b9){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
t=this.a
s=b9-t.a
t.a=b9+0
t=this.b
t.go+=0.001
if(s>0){for(r=this.c,q=r.length,p=this.d,o=this.e,n=this.f,m=s/1000,l=this.r,k=0,j=0;j<r.length;r.length===q||(0,H.P)(r),++j){i=r[j]
i.dd(p,o,n,m)
h=i.a.a
l[k]=h[0]
l[k+1]=h[1]
l[k+2]=h[2]
k+=3}this.x.bg(l)}r=t.k4
if(r.h(0,37)!=null)t.go+=0.03
else if(r.h(0,39)!=null)t.go-=0.03
if(r.h(0,38)!=null)t.id+=0.03
else if(r.h(0,40)!=null)t.id-=0.03
if(r.h(0,33)!=null)t.fy*=0.99
else if(r.h(0,34)!=null)t.fy*=1.01
if(r.h(0,32)!=null){t.go=0
t.id=0}r=C.d.e3(t.id,-1.4707963267948965,1.4707963267948965)
t.id=r
q=t.fy
p=t.go
g=q*Math.cos(r)
o=Math.cos(p)
r=Math.sin(r)
p=Math.sin(p)
n=t.d.a
n[12]=g*o
n[13]=q*r
n[14]=g*p
p=t.k2
r=p.a
n[12]=n[12]+r[0]
n[13]=n[13]+r[1]
n[14]=n[14]+r[2]
f=n[12]
e=n[13]
d=n[14]
c=new T.q(new Float32Array(3))
c.am(0,1,0)
r=t.e
q=r.a
q[0]=n[12]
q[1]=n[13]
q[2]=n[14]
b=r.T(0,p)
b.av(0)
a=c.bU(b)
a.av(0)
a0=b.bU(a)
a0.av(0)
p=a.aS(r)
q=a0.aS(r)
r=b.aS(r)
o=a.a
m=o[0]
l=a0.a
h=l[0]
a1=b.a
a2=a1[0]
a3=o[1]
a4=l[1]
a5=a1[1]
o=o[2]
l=l[2]
a1=a1[2]
n[15]=1
n[14]=-r
n[13]=-q
n[12]=-p
n[11]=0
n[10]=a1
n[9]=l
n[8]=o
n[7]=0
n[6]=a5
n[5]=a4
n[4]=a3
n[3]=0
n[2]=a2
n[1]=h
n[0]=m
n[12]=f
n[13]=e
n[14]=d
m=t.f
h=m.a
h[0]=n[2]
h[1]=n[6]
h[2]=n[10]
t=-t.k1
a6=Math.sqrt(m.gaf())
f=h[0]/a6
e=h[1]/a6
d=h[2]/a6
a7=Math.cos(t)
a8=Math.sin(t)
a9=1-a7
b0=f*f*a9+a7
t=d*a8
b1=f*e*a9-t
h=e*a8
b2=f*d*a9+h
b3=e*f*a9+t
b4=e*e*a9+a7
t=f*a8
b5=e*d*a9-t
b6=d*f*a9-h
b7=d*e*a9+t
b8=d*d*a9+a7
t=n[0]
h=n[4]
m=n[8]
a2=n[1]
a3=n[5]
a4=n[9]
a5=n[2]
o=n[6]
l=n[10]
a1=n[3]
p=n[7]
q=n[11]
n[0]=t*b0+h*b3+m*b6
n[1]=a2*b0+a3*b3+a4*b6
n[2]=a5*b0+o*b3+l*b6
n[3]=a1*b0+p*b3+q*b6
n[4]=t*b1+h*b4+m*b7
n[5]=a2*b1+a3*b4+a4*b7
n[6]=a5*b1+o*b4+l*b7
n[7]=a1*b1+p*b4+q*b7
n[8]=t*b2+h*b5+m*b8
n[9]=a2*b2+a3*b5+a4*b8
n[10]=a5*b2+o*b5+l*b8
n[11]=a1*b2+p*b5+q*b8
this.y.d0(this.x,[this.z,this.Q])
C.af.gdX(window).cd(this)
this.ch.de(b9)},
$S:function(a){return{func:1,v:true,args:[P.a7]}}}
J.a.prototype.cU=J.a.prototype.k
J.b7.prototype.cW=J.b7.prototype.k
P.L.prototype.cV=P.L.prototype.aw
W.S.prototype.az=W.S.prototype.H
W.bs.prototype.cX=W.bs.prototype.N;(function installTearOffs(){installTearOff(H.aR.prototype,"gex",0,0,0,null,["$0"],["au"],0)
installTearOff(H.U.prototype,"gcF",0,0,0,null,["$1"],["F"],2)
installTearOff(H.aA.prototype,"ged",0,0,0,null,["$1"],["P"],2)
installTearOff(P,"lJ",1,0,0,null,["$1"],["lp"],1)
installTearOff(P,"lK",1,0,0,null,["$1"],["lq"],1)
installTearOff(P,"lL",1,0,0,null,["$1"],["lr"],1)
installTearOff(P,"jJ",1,0,0,null,["$0"],["lH"],0)
installTearOff(P.a5.prototype,"gdu",0,0,0,null,["$2","$1"],["an","dv"],5)
installTearOff(P,"lQ",1,0,0,null,["$2"],["kK"],6)
installTearOff(W,"lW",1,0,0,null,["$4"],["lv"],4)
installTearOff(W,"lX",1,0,0,null,["$4"],["lw"],4)
installTearOff(W.ca.prototype,"gaV",0,1,0,null,["$0"],["aW"],3)
installTearOff(W.cs.prototype,"gaV",0,1,0,null,["$0"],["aW"],3)
installTearOff(R,"jK",1,0,0,null,["$0"],["m4"],0)})();(function inheritance(){inherit(P.B,null)
var t=P.B
inherit(H.hU,t)
inherit(J.a,t)
inherit(J.dl,t)
inherit(P.L,t)
inherit(H.c2,t)
inherit(P.bY,t)
inherit(H.aJ,t)
inherit(H.ak,t)
inherit(H.fR,t)
inherit(H.aR,t)
inherit(H.fu,t)
inherit(H.aB,t)
inherit(H.fQ,t)
inherit(H.fp,t)
inherit(H.cf,t)
inherit(H.f1,t)
inherit(H.ai,t)
inherit(H.U,t)
inherit(H.aA,t)
inherit(H.ey,t)
inherit(H.f7,t)
inherit(P.aI,t)
inherit(H.cV,t)
inherit(H.ct,t)
inherit(P.aN,t)
inherit(H.dZ,t)
inherit(H.e0,t)
inherit(P.hO,t)
inherit(P.fq,t)
inherit(P.cD,t)
inherit(P.a5,t)
inherit(P.cv,t)
inherit(P.eQ,t)
inherit(P.eR,t)
inherit(P.i5,t)
inherit(P.aF,t)
inherit(P.h8,t)
inherit(P.eF,t)
inherit(P.fN,t)
inherit(P.bm,t)
inherit(P.hY,t)
inherit(P.bn,t)
inherit(P.m,t)
inherit(P.fP,t)
inherit(P.ac,t)
inherit(P.C,t)
inherit(P.b2,t)
inherit(P.a7,t)
inherit(P.al,t)
inherit(P.ck,t)
inherit(P.hQ,t)
inherit(P.fz,t)
inherit(P.dG,t)
inherit(P.l,t)
inherit(P.aM,t)
inherit(P.H,t)
inherit(P.aO,t)
inherit(P.p,t)
inherit(P.bg,t)
inherit(W.du,t)
inherit(W.bl,t)
inherit(W.n,t)
inherit(W.cc,t)
inherit(W.bs,t)
inherit(W.h3,t)
inherit(W.bU,t)
inherit(W.cb,t)
inherit(W.i1,t)
inherit(W.i8,t)
inherit(W.fZ,t)
inherit(W.d4,t)
inherit(P.fT,t)
inherit(P.i3,t)
inherit(P.fU,t)
inherit(G.ea,t)
inherit(G.dr,t)
inherit(G.dL,t)
inherit(G.cq,t)
inherit(G.cp,t)
inherit(G.w,t)
inherit(G.eG,t)
inherit(G.f_,t)
inherit(G.bi,t)
inherit(R.eM,t)
inherit(T.a_,t)
inherit(T.q,t)
inherit(T.aQ,t)
inherit(R.ev,t)
inherit(R.dQ,t)
t=J.a
inherit(J.dV,t)
inherit(J.c0,t)
inherit(J.b7,t)
inherit(J.am,t)
inherit(J.aK,t)
inherit(J.ao,t)
inherit(H.ba,t)
inherit(H.at,t)
inherit(W.d,t)
inherit(W.di,t)
inherit(W.bJ,t)
inherit(W.bK,t)
inherit(W.Y,t)
inherit(W.cw,t)
inherit(W.Q,t)
inherit(W.dy,t)
inherit(W.dz,t)
inherit(W.bO,t)
inherit(W.cx,t)
inherit(W.bQ,t)
inherit(W.cz,t)
inherit(W.dB,t)
inherit(W.h,t)
inherit(W.cB,t)
inherit(W.dM,t)
inherit(W.cE,t)
inherit(W.e2,t)
inherit(W.e6,t)
inherit(W.cI,t)
inherit(W.ca,t)
inherit(W.cL,t)
inherit(W.a0,t)
inherit(W.cP,t)
inherit(W.ce,t)
inherit(W.cR,t)
inherit(W.a1,t)
inherit(W.cW,t)
inherit(W.cZ,t)
inherit(W.f0,t)
inherit(W.d0,t)
inherit(W.f5,t)
inherit(W.cs,t)
inherit(W.fe,t)
inherit(W.d5,t)
inherit(W.d7,t)
inherit(W.d9,t)
inherit(W.db,t)
inherit(W.dd,t)
inherit(P.cG,t)
inherit(P.cN,t)
inherit(P.eu,t)
inherit(P.cX,t)
inherit(P.d2,t)
inherit(P.dm,t)
inherit(P.eA,t)
inherit(P.eB,t)
inherit(P.cT,t)
t=J.b7
inherit(J.es,t)
inherit(J.ay,t)
inherit(J.ap,t)
inherit(J.hT,J.am)
t=J.aK
inherit(J.c_,t)
inherit(J.bZ,t)
t=P.L
inherit(H.j,t)
inherit(H.c4,t)
inherit(H.cu,t)
t=H.j
inherit(H.aL,t)
inherit(H.e_,t)
inherit(H.dE,H.c4)
t=P.bY
inherit(H.e4,t)
inherit(H.fh,t)
t=H.aL
inherit(H.b8,t)
inherit(P.e1,t)
t=H.ak
inherit(H.hD,t)
inherit(H.hE,t)
inherit(H.fL,t)
inherit(H.fv,t)
inherit(H.dR,t)
inherit(H.dS,t)
inherit(H.fS,t)
inherit(H.f2,t)
inherit(H.f3,t)
inherit(H.hF,t)
inherit(H.ho,t)
inherit(H.hp,t)
inherit(H.hq,t)
inherit(H.hr,t)
inherit(H.hs,t)
inherit(H.eX,t)
inherit(H.dW,t)
inherit(H.hk,t)
inherit(H.hl,t)
inherit(H.hm,t)
inherit(P.fl,t)
inherit(P.fk,t)
inherit(P.fm,t)
inherit(P.fn,t)
inherit(P.fA,t)
inherit(P.fE,t)
inherit(P.fB,t)
inherit(P.fC,t)
inherit(P.fD,t)
inherit(P.fH,t)
inherit(P.fI,t)
inherit(P.fG,t)
inherit(P.fF,t)
inherit(P.eS,t)
inherit(P.eT,t)
inherit(P.ha,t)
inherit(P.fX,t)
inherit(P.fW,t)
inherit(P.fY,t)
inherit(P.e3,t)
inherit(P.dC,t)
inherit(P.dD,t)
inherit(W.dF,t)
inherit(W.eP,t)
inherit(W.fi,t)
inherit(W.fy,t)
inherit(W.ei,t)
inherit(W.eh,t)
inherit(W.h_,t)
inherit(W.h0,t)
inherit(W.h6,t)
inherit(W.h7,t)
inherit(P.hc,t)
inherit(B.hy,t)
inherit(B.hz,t)
inherit(B.hA,t)
inherit(B.hB,t)
inherit(B.hC,t)
inherit(B.en,t)
inherit(B.eo,t)
inherit(B.ep,t)
inherit(B.eq,t)
inherit(A.hj,t)
inherit(R.hv,t)
t=H.fp
inherit(H.aT,t)
inherit(H.bx,t)
t=P.aI
inherit(H.ej,t)
inherit(H.dX,t)
inherit(H.fc,t)
inherit(H.f9,t)
inherit(H.dq,t)
inherit(H.eC,t)
inherit(P.bH,t)
inherit(P.cd,t)
inherit(P.X,t)
inherit(P.fd,t)
inherit(P.fb,t)
inherit(P.aP,t)
inherit(P.ds,t)
inherit(P.dx,t)
t=H.eX
inherit(H.eL,t)
inherit(H.b1,t)
inherit(H.fj,P.bH)
inherit(P.c3,P.aN)
t=P.c3
inherit(H.Z,t)
inherit(W.fo,t)
inherit(H.c7,H.at)
t=H.c7
inherit(H.bo,t)
inherit(H.bq,t)
inherit(H.bp,H.bo)
inherit(H.bb,H.bp)
inherit(H.br,H.bq)
inherit(H.c8,H.br)
inherit(H.c6,H.bb)
t=H.c8
inherit(H.eb,t)
inherit(H.ec,t)
inherit(H.ed,t)
inherit(H.ee,t)
inherit(H.ef,t)
inherit(H.c9,t)
inherit(H.eg,t)
inherit(P.h4,P.fq)
inherit(P.fV,P.h8)
inherit(P.fO,H.Z)
inherit(P.eE,P.eF)
inherit(P.fK,P.eE)
inherit(P.fM,P.fK)
inherit(P.c1,P.bn)
t=P.a7
inherit(P.ad,t)
inherit(P.x,t)
t=P.X
inherit(P.be,t)
inherit(P.dP,t)
t=W.d
inherit(W.r,t)
inherit(W.dI,t)
inherit(W.b6,t)
inherit(W.b9,t)
inherit(W.ew,t)
inherit(W.cg,t)
inherit(W.bt,t)
inherit(W.bv,t)
inherit(W.ff,t)
inherit(W.fg,t)
inherit(W.bj,t)
inherit(W.i9,t)
inherit(P.dn,t)
inherit(P.aG,t)
t=W.r
inherit(W.S,t)
inherit(W.aj,t)
inherit(W.b3,t)
t=W.S
inherit(W.i,t)
inherit(P.f,t)
t=W.i
inherit(W.dj,t)
inherit(W.dk,t)
inherit(W.ah,t)
inherit(W.bI,t)
inherit(W.bN,t)
inherit(W.dJ,t)
inherit(W.bW,t)
inherit(W.eD,t)
inherit(W.cm,t)
inherit(W.eV,t)
inherit(W.eW,t)
inherit(W.bh,t)
inherit(W.dt,W.Y)
inherit(W.aH,W.cw)
t=W.Q
inherit(W.dv,t)
inherit(W.dw,t)
inherit(W.cy,W.cx)
inherit(W.bP,W.cy)
inherit(W.cA,W.cz)
inherit(W.dA,W.cA)
inherit(W.cC,W.cB)
inherit(W.dH,W.cC)
inherit(W.cF,W.cE)
inherit(W.b5,W.cF)
inherit(W.bX,W.b3)
inherit(W.dN,W.b6)
inherit(W.ax,W.h)
t=W.ax
inherit(W.aq,t)
inherit(W.F,t)
inherit(W.aw,t)
inherit(W.e8,W.b9)
inherit(W.cJ,W.cI)
inherit(W.e9,W.cJ)
inherit(W.J,P.c1)
inherit(W.cM,W.cL)
inherit(W.bc,W.cM)
inherit(W.cQ,W.cP)
inherit(W.et,W.cQ)
inherit(W.bu,W.bt)
inherit(W.eH,W.bu)
inherit(W.cS,W.cR)
inherit(W.eJ,W.cS)
inherit(W.eO,W.cW)
inherit(W.d_,W.cZ)
inherit(W.eY,W.d_)
inherit(W.bw,W.bv)
inherit(W.eZ,W.bw)
inherit(W.d1,W.d0)
inherit(W.f4,W.d1)
inherit(W.az,W.F)
inherit(W.d6,W.d5)
inherit(W.fr,W.d6)
inherit(W.fs,W.bQ)
inherit(W.d8,W.d7)
inherit(W.fJ,W.d8)
inherit(W.da,W.d9)
inherit(W.cK,W.da)
inherit(W.dc,W.db)
inherit(W.h1,W.dc)
inherit(W.de,W.dd)
inherit(W.h2,W.de)
inherit(W.ft,W.fo)
inherit(W.fw,P.eQ)
inherit(W.ic,W.fw)
inherit(W.fx,P.eR)
inherit(W.h5,W.bs)
inherit(P.M,P.fU)
inherit(P.cH,P.cG)
inherit(P.dY,P.cH)
inherit(P.cO,P.cN)
inherit(P.ek,P.cO)
inherit(P.bf,P.f)
inherit(P.cY,P.cX)
inherit(P.eU,P.cY)
inherit(P.d3,P.d2)
inherit(P.f6,P.d3)
inherit(P.el,P.aG)
inherit(P.cU,P.cT)
inherit(P.eK,P.cU)
t=G.ea
inherit(G.eI,t)
inherit(G.fa,t)
inherit(G.e7,t)
inherit(G.ez,t)
inherit(G.dp,G.eI)
inherit(B.em,G.dp)
t=G.fa
inherit(G.e5,t)
inherit(G.er,t)
inherit(G.dO,G.bi)
inherit(R.eN,R.eM)
mixin(H.bo,P.m)
mixin(H.bp,H.aJ)
mixin(H.bq,P.m)
mixin(H.br,H.aJ)
mixin(P.bn,P.m)
mixin(W.cw,W.du)
mixin(W.cx,P.m)
mixin(W.cy,W.n)
mixin(W.cz,P.m)
mixin(W.cA,W.n)
mixin(W.cB,P.m)
mixin(W.cC,W.n)
mixin(W.cE,P.m)
mixin(W.cF,W.n)
mixin(W.cI,P.m)
mixin(W.cJ,W.n)
mixin(W.cL,P.m)
mixin(W.cM,W.n)
mixin(W.cP,P.m)
mixin(W.cQ,W.n)
mixin(W.bt,P.m)
mixin(W.bu,W.n)
mixin(W.cR,P.m)
mixin(W.cS,W.n)
mixin(W.cW,P.aN)
mixin(W.cZ,P.m)
mixin(W.d_,W.n)
mixin(W.bv,P.m)
mixin(W.bw,W.n)
mixin(W.d0,P.m)
mixin(W.d1,W.n)
mixin(W.d5,P.m)
mixin(W.d6,W.n)
mixin(W.d7,P.m)
mixin(W.d8,W.n)
mixin(W.d9,P.m)
mixin(W.da,W.n)
mixin(W.db,P.m)
mixin(W.dc,W.n)
mixin(W.dd,P.m)
mixin(W.de,W.n)
mixin(P.cG,P.m)
mixin(P.cH,W.n)
mixin(P.cN,P.m)
mixin(P.cO,W.n)
mixin(P.cX,P.m)
mixin(P.cY,W.n)
mixin(P.d2,P.m)
mixin(P.d3,W.n)
mixin(P.cT,P.m)
mixin(P.cU,W.n)})();(function constants(){C.p=W.ah.prototype
C.x=W.bI.prototype
C.n=W.bJ.prototype
C.q=W.bK.prototype
C.y=W.aH.prototype
C.r=W.bN.prototype
C.L=W.bO.prototype
C.M=W.bW.prototype
C.t=W.bX.prototype
C.N=J.a.prototype
C.a=J.am.prototype
C.A=J.bZ.prototype
C.b=J.c_.prototype
C.c=J.c0.prototype
C.d=J.aK.prototype
C.j=J.ao.prototype
C.U=J.ap.prototype
C.Y=H.c6.prototype
C.D=W.bc.prototype
C.E=J.es.prototype
C.F=W.ce.prototype
C.K=W.cm.prototype
C.w=J.ay.prototype
C.ae=W.az.prototype
C.af=W.bj.prototype
C.h=new P.fV()
C.z=new P.al(0)
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
C.B=function(hooks) { return hooks; }

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
C.C=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.V=H.D(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.p])
C.W=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.X=makeConstList([])
C.u=H.D(makeConstList(["bind","if","ref","repeat","syntax"]),[P.p])
C.v=H.D(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.p])
C.Z=new G.w("vec3","vertex btangents",0)
C.e=new G.w("vec3","",0)
C.a_=new G.w("vec4","delta from light",0)
C.o=new G.w("","",0)
C.G=new G.w("vec3","vertex coordinates",0)
C.a0=new G.w("vec3","vertex binormals",0)
C.H=new G.w("vec4","for wireframe",0)
C.a1=new G.w("vec4","per vertex color",0)
C.a2=new G.w("float","for normal maps",0)
C.k=new G.w("mat4","",0)
C.a4=new G.w("mat4","",4)
C.a3=new G.w("mat4","",128)
C.f=new G.w("float","",0)
C.a5=new G.w("float","",4)
C.a6=new G.w("float","depth for shadowmaps",0)
C.i=new G.w("sampler2D","",0)
C.a7=new G.w("float","for bump maps",0)
C.a8=new G.w("vec2","texture uvs",0)
C.a9=new G.w("float","time since program start in sec",0)
C.l=new G.w("vec2","",0)
C.aa=new G.w("samplerCube","",0)
C.m=new G.w("vec4","",0)
C.ab=new G.w("vec3","vertex normals",0)
C.ac=new G.w("sampler2DShadow","",0)
C.I=new G.w("vec3","per vertex color",0)
C.J=new G.w("mat3","",0)
C.ad=new G.w("vec3","vertex tangents",0)})();(function staticFields(){$.ja="$cachedFunction"
$.jb="$cachedInvocation"
$.iQ=null
$.iO=null
$.ig=!1
$.im=null
$.jG=null
$.jV=null
$.hf=null
$.hn=null
$.ip=null
$.aU=null
$.by=null
$.bz=null
$.ih=!1
$.z=C.h
$.j0=0
$.aa=null
$.hP=null
$.j_=null
$.iZ=null
$.iX=null
$.iW=null
$.iV=null
$.iU=null
$.lN=0
$.lO=0
$.it=0
$.jR=0
$.bD=0
$.bE=0
$.mb=!1
$.jL=0})();(function lazyInitializers(){lazy($,"iT","$get$iT",function(){return H.jO("_$dart_dartClosure")})
lazy($,"hV","$get$hV",function(){return H.jO("_$dart_js")})
lazy($,"j2","$get$j2",function(){return H.l_()})
lazy($,"j3","$get$j3",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.j0
$.j0=t+1
t="expando$key$"+t}return new P.dG(t,null,[P.x])})
lazy($,"jh","$get$jh",function(){return H.a2(H.f8({
toString:function(){return"$receiver$"}}))})
lazy($,"ji","$get$ji",function(){return H.a2(H.f8({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"jj","$get$jj",function(){return H.a2(H.f8(null))})
lazy($,"jk","$get$jk",function(){return H.a2(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"jo","$get$jo",function(){return H.a2(H.f8(void 0))})
lazy($,"jp","$get$jp",function(){return H.a2(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"jm","$get$jm",function(){return H.a2(H.jn(null))})
lazy($,"jl","$get$jl",function(){return H.a2(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"jr","$get$jr",function(){return H.a2(H.jn(void 0))})
lazy($,"jq","$get$jq",function(){return H.a2(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"ib","$get$ib",function(){return P.lo()})
lazy($,"bA","$get$bA",function(){return[]})
lazy($,"iS","$get$iS",function(){return{}})
lazy($,"jx","$get$jx",function(){return P.hZ(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"id","$get$id",function(){return P.T()})
lazy($,"he","$get$he",function(){return P.j4(P.x,P.ac)})
lazy($,"bC","$get$bC",function(){return P.j4(P.p,P.ac)})
lazy($,"jf","$get$jf",function(){return new G.cq(1281,0,4294967295)})
lazy($,"iM","$get$iM",function(){return new G.cp(32774,770,769)})
lazy($,"R","$get$R",function(){return P.ar(["cBlendEquation",C.o,"cDepthWrite",C.o,"cDepthTest",C.o,"cStencilFunc",C.o,"tPosition",C.e,"tSpeed",C.e,"tForce",C.e,"aColors",C.I,"aColorAlpha",C.a1,"aPosition",C.G,"aTexUV",C.a8,"aNormal",C.ab,"aBinormal",C.a0,"aCenter",C.H,"aPointSize",C.f,"aBoneIndex",C.m,"aBoneWeight",C.m,"aTangent",C.ad,"aBitangent",C.Z,"iaRotation",C.m,"iaTranslation",C.e,"iaScale",C.e,"vColor",C.I,"vTexUV",C.l,"vLightWeighting",C.e,"vNormal",C.e,"vPosition",C.G,"vPositionFromLight",C.a_,"vCenter",C.H,"vDepth",C.a6,"uTransformationMatrix",C.k,"uModelMatrix",C.k,"uNormalMatrix",C.J,"uConvolutionMatrix",C.J,"uPerspectiveViewMatrix",C.k,"uLightPerspectiveViewMatrix",C.k,"uShadowMap",C.ac,"uTexture",C.i,"uTexture2",C.i,"uTexture3",C.i,"uTexture4",C.i,"uSpecularMap",C.i,"uNormalMap",C.i,"uBumpMap",C.i,"uDepthMap",C.i,"uCubeTexture",C.aa,"uAnimationTable",C.i,"uTime",C.a9,"uCameraNear",C.f,"uCameraFar",C.f,"uFogNear",C.f,"uFogFar",C.f,"uPointSize",C.f,"uScale",C.f,"uAngle",C.f,"uCanvasSize",C.l,"uCenter2",C.l,"uCutOff",C.f,"uShininess",C.f,"uShadowBias",C.f,"uOpacity",C.f,"uColor",C.e,"uAmbientDiffuse",C.e,"uColorEmissive",C.e,"uColorSpecular",C.e,"uColorDiffuse",C.e,"uColorAlpha",C.m,"uColorAlpha2",C.m,"uEyePosition",C.e,"uMaterial",C.k,"uRange",C.l,"uDirection",C.l,"uBoneMatrices",C.a3,"uLightDescs",C.a4,"uLightCount",C.f,"uLightTypes",C.a5,"uBumpScale",C.a7,"uNormalScale",C.a2])})
lazy($,"jU","$get$jU",function(){var t=G.je("PointSpritesV")
t.cZ(["aPosition"])
t.be(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"])
t.bj(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"])
return t})
lazy($,"jT","$get$jT",function(){var t=G.je("PointSpritesF")
t.be(["uTexture"])
t.bj(["oFragColor = texture( uTexture,  gl_PointCoord);"])
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
mangledGlobalNames:{x:"int",ad:"double",a7:"num",p:"String",ac:"bool",H:"Null",l:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.r},{func:1,ret:P.ac,args:[W.S,P.p,P.p,W.bl]},{func:1,v:true,args:[P.B],opt:[P.aO]},{func:1,ret:P.x,args:[P.C,P.C]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,Blob:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSCharsetRule:J.a,CSSConditionRule:J.a,CSSFontFaceRule:J.a,CSSGroupingRule:J.a,CSSImportRule:J.a,CSSKeyframeRule:J.a,MozCSSKeyframeRule:J.a,WebKitCSSKeyframeRule:J.a,CSSKeyframesRule:J.a,MozCSSKeyframesRule:J.a,WebKitCSSKeyframesRule:J.a,CSSMediaRule:J.a,CSSNamespaceRule:J.a,CSSPageRule:J.a,CSSRule:J.a,CSSStyleRule:J.a,CSSStyleSheet:J.a,CSSSupportsRule:J.a,CSSVariableReferenceValue:J.a,CSSViewportRule:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,File:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,Gamepad:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MimeType:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechGrammar:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,StyleSheet:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,Touch:J.a,TrackDefault:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGLength:J.a,SVGMatrix:J.a,SVGNumber:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGTransform:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioParamMap:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.ba,DataView:H.at,ArrayBufferView:H.at,Float64Array:H.bb,Float32Array:H.c6,Int16Array:H.eb,Int32Array:H.ec,Int8Array:H.ed,Uint16Array:H.ee,Uint32Array:H.ef,Uint8ClampedArray:H.c9,CanvasPixelArray:H.c9,Uint8Array:H.eg,HTMLAudioElement:W.i,HTMLBRElement:W.i,HTMLBaseElement:W.i,HTMLButtonElement:W.i,HTMLContentElement:W.i,HTMLDListElement:W.i,HTMLDataElement:W.i,HTMLDataListElement:W.i,HTMLDetailsElement:W.i,HTMLDialogElement:W.i,HTMLEmbedElement:W.i,HTMLFieldSetElement:W.i,HTMLHRElement:W.i,HTMLHeadingElement:W.i,HTMLHtmlElement:W.i,HTMLIFrameElement:W.i,HTMLImageElement:W.i,HTMLInputElement:W.i,HTMLLIElement:W.i,HTMLLabelElement:W.i,HTMLLegendElement:W.i,HTMLLinkElement:W.i,HTMLMapElement:W.i,HTMLMediaElement:W.i,HTMLMenuElement:W.i,HTMLMetaElement:W.i,HTMLMeterElement:W.i,HTMLModElement:W.i,HTMLOListElement:W.i,HTMLObjectElement:W.i,HTMLOptGroupElement:W.i,HTMLOptionElement:W.i,HTMLOutputElement:W.i,HTMLParagraphElement:W.i,HTMLParamElement:W.i,HTMLPictureElement:W.i,HTMLPreElement:W.i,HTMLProgressElement:W.i,HTMLQuoteElement:W.i,HTMLScriptElement:W.i,HTMLShadowElement:W.i,HTMLSlotElement:W.i,HTMLSourceElement:W.i,HTMLSpanElement:W.i,HTMLStyleElement:W.i,HTMLTableCaptionElement:W.i,HTMLTableCellElement:W.i,HTMLTableDataCellElement:W.i,HTMLTableHeaderCellElement:W.i,HTMLTableColElement:W.i,HTMLTextAreaElement:W.i,HTMLTimeElement:W.i,HTMLTitleElement:W.i,HTMLTrackElement:W.i,HTMLUListElement:W.i,HTMLUnknownElement:W.i,HTMLVideoElement:W.i,HTMLDirectoryElement:W.i,HTMLFontElement:W.i,HTMLFrameElement:W.i,HTMLFrameSetElement:W.i,HTMLMarqueeElement:W.i,HTMLElement:W.i,AccessibleNodeList:W.di,HTMLAnchorElement:W.dj,HTMLAreaElement:W.dk,HTMLBodyElement:W.ah,HTMLCanvasElement:W.bI,CanvasGradient:W.bJ,CanvasRenderingContext2D:W.bK,CDATASection:W.aj,CharacterData:W.aj,Comment:W.aj,ProcessingInstruction:W.aj,Text:W.aj,CSSPerspective:W.dt,CSSStyleDeclaration:W.aH,MSStyleCSSProperties:W.aH,CSS2Properties:W.aH,CSSImageValue:W.Q,CSSKeywordValue:W.Q,CSSNumericValue:W.Q,CSSPositionValue:W.Q,CSSResourceValue:W.Q,CSSUnitValue:W.Q,CSSURLImageValue:W.Q,CSSStyleValue:W.Q,CSSMatrixComponent:W.Y,CSSRotation:W.Y,CSSScale:W.Y,CSSSkew:W.Y,CSSTranslation:W.Y,CSSTransformComponent:W.Y,CSSTransformValue:W.dv,CSSUnparsedValue:W.dw,DataTransferItemList:W.dy,HTMLDivElement:W.bN,XMLDocument:W.b3,Document:W.b3,DOMException:W.dz,DOMImplementation:W.bO,ClientRectList:W.bP,DOMRectList:W.bP,DOMRectReadOnly:W.bQ,DOMStringList:W.dA,DOMTokenList:W.dB,Element:W.S,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SourceBuffer:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,TextTrack:W.d,TextTrackCue:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,VTTCue:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,ServiceWorker:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,FileList:W.dH,FileWriter:W.dI,HTMLFormElement:W.dJ,HTMLHeadElement:W.bW,History:W.dM,HTMLCollection:W.b5,HTMLFormControlsCollection:W.b5,HTMLOptionsCollection:W.b5,HTMLDocument:W.bX,XMLHttpRequest:W.dN,XMLHttpRequestUpload:W.b6,XMLHttpRequestEventTarget:W.b6,KeyboardEvent:W.aq,Location:W.e2,MediaList:W.e6,MIDIOutput:W.e8,MIDIInput:W.b9,MIDIPort:W.b9,MimeTypeArray:W.e9,PointerEvent:W.F,MouseEvent:W.F,DragEvent:W.F,DocumentFragment:W.r,ShadowRoot:W.r,Attr:W.r,DocumentType:W.r,Node:W.r,NodeIterator:W.ca,NodeList:W.bc,RadioNodeList:W.bc,Plugin:W.a0,PluginArray:W.et,PresentationConnection:W.ew,Range:W.ce,RTCDataChannel:W.cg,DataChannel:W.cg,HTMLSelectElement:W.eD,SourceBufferList:W.eH,SpeechGrammarList:W.eJ,SpeechRecognitionResult:W.a1,Storage:W.eO,HTMLTableElement:W.cm,HTMLTableRowElement:W.eV,HTMLTableSectionElement:W.eW,HTMLTemplateElement:W.bh,TextTrackCueList:W.eY,TextTrackList:W.eZ,TimeRanges:W.f0,TouchEvent:W.aw,TouchList:W.f4,TrackDefaultList:W.f5,TreeWalker:W.cs,CompositionEvent:W.ax,FocusEvent:W.ax,TextEvent:W.ax,UIEvent:W.ax,URL:W.fe,VideoTrackList:W.ff,WebSocket:W.fg,WheelEvent:W.az,Window:W.bj,DOMWindow:W.bj,CSSRuleList:W.fr,DOMRect:W.fs,GamepadList:W.fJ,NamedNodeMap:W.cK,MozNamedAttrMap:W.cK,SpeechRecognitionResultList:W.h1,StyleSheetList:W.h2,SVGLengthList:P.dY,SVGNumberList:P.ek,SVGPointList:P.eu,SVGScriptElement:P.bf,SVGStringList:P.eU,SVGAElement:P.f,SVGAnimateElement:P.f,SVGAnimateMotionElement:P.f,SVGAnimateTransformElement:P.f,SVGAnimationElement:P.f,SVGCircleElement:P.f,SVGClipPathElement:P.f,SVGDefsElement:P.f,SVGDescElement:P.f,SVGDiscardElement:P.f,SVGEllipseElement:P.f,SVGFEBlendElement:P.f,SVGFEColorMatrixElement:P.f,SVGFEComponentTransferElement:P.f,SVGFECompositeElement:P.f,SVGFEConvolveMatrixElement:P.f,SVGFEDiffuseLightingElement:P.f,SVGFEDisplacementMapElement:P.f,SVGFEDistantLightElement:P.f,SVGFEFloodElement:P.f,SVGFEFuncAElement:P.f,SVGFEFuncBElement:P.f,SVGFEFuncGElement:P.f,SVGFEFuncRElement:P.f,SVGFEGaussianBlurElement:P.f,SVGFEImageElement:P.f,SVGFEMergeElement:P.f,SVGFEMergeNodeElement:P.f,SVGFEMorphologyElement:P.f,SVGFEOffsetElement:P.f,SVGFEPointLightElement:P.f,SVGFESpecularLightingElement:P.f,SVGFESpotLightElement:P.f,SVGFETileElement:P.f,SVGFETurbulenceElement:P.f,SVGFilterElement:P.f,SVGForeignObjectElement:P.f,SVGGElement:P.f,SVGGeometryElement:P.f,SVGGraphicsElement:P.f,SVGImageElement:P.f,SVGLineElement:P.f,SVGLinearGradientElement:P.f,SVGMarkerElement:P.f,SVGMaskElement:P.f,SVGMetadataElement:P.f,SVGPathElement:P.f,SVGPatternElement:P.f,SVGPolygonElement:P.f,SVGPolylineElement:P.f,SVGRadialGradientElement:P.f,SVGRectElement:P.f,SVGSetElement:P.f,SVGStopElement:P.f,SVGStyleElement:P.f,SVGSVGElement:P.f,SVGSwitchElement:P.f,SVGSymbolElement:P.f,SVGTSpanElement:P.f,SVGTextContentElement:P.f,SVGTextElement:P.f,SVGTextPathElement:P.f,SVGTextPositioningElement:P.f,SVGTitleElement:P.f,SVGUseElement:P.f,SVGViewElement:P.f,SVGGradientElement:P.f,SVGComponentTransferFunctionElement:P.f,SVGFEDropShadowElement:P.f,SVGMPathElement:P.f,SVGElement:P.f,SVGTransformList:P.f6,AudioBuffer:P.dm,AudioTrackList:P.dn,AudioContext:P.aG,webkitAudioContext:P.aG,BaseAudioContext:P.aG,OfflineAudioContext:P.el,WebGLRenderingContext:P.eA,WebGL2RenderingContext:P.eB,SQLResultSetRowList:P.eK})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,Blob:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSStyleSheet:true,CSSSupportsRule:true,CSSVariableReferenceValue:true,CSSViewportRule:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,File:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,Gamepad:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechGrammar:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,StyleSheet:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,Touch:true,TrackDefault:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGLength:true,SVGMatrix:true,SVGNumber:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGTransform:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioParamMap:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float64Array:true,Float32Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasGradient:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SourceBuffer:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,TextTrack:true,TextTrackCue:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,VTTCue:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,ServiceWorker:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,FileList:true,FileWriter:true,HTMLFormElement:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,KeyboardEvent:true,Location:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,PresentationConnection:true,Range:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,SourceBufferList:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLengthList:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransformList:true,AudioBuffer:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.c7.$nativeSuperclassTag="ArrayBufferView"
H.bo.$nativeSuperclassTag="ArrayBufferView"
H.bp.$nativeSuperclassTag="ArrayBufferView"
H.bb.$nativeSuperclassTag="ArrayBufferView"
H.bq.$nativeSuperclassTag="ArrayBufferView"
H.br.$nativeSuperclassTag="ArrayBufferView"
H.c8.$nativeSuperclassTag="ArrayBufferView"
W.bt.$nativeSuperclassTag="EventTarget"
W.bu.$nativeSuperclassTag="EventTarget"
W.bv.$nativeSuperclassTag="EventTarget"
W.bw.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.jX(R.jK(),b)},[])
else (function(b){H.jX(R.jK(),b)})([])})})()