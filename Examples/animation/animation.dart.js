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
a[c]=function(){a[c]=function(){H.oE(b)}
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
return d?function(e){if(t===null)t=H.kg(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.kg(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.kg(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={jQ:function jQ(a){this.a=a},
jX:function(a,b,c,d){if(!!J.p(a).$isj)return new H.eu(a,b,[c,d])
return new H.cC(a,b,[c,d])},
cw:function(){return new P.bc("No element")},
nm:function(){return new P.bc("Too many elements")},
nl:function(){return new P.bc("Too few elements")},
nD:function(a,b){H.cS(a,0,J.ax(a)-1,b)},
cS:function(a,b,c,d){if(c-b<=32)H.nC(a,b,c,d)
else H.nB(a,b,c,d)},
nC:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.z(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.ag(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.j(a,q,s.h(a,p))
q=p}s.j(a,q,r)}},
nB:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.b(t>32)
s=C.b.F(t+1,6)
r=a3+s
q=a4-s
p=C.b.F(a3+a4,2)
o=p-s
n=p+s
t=J.z(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.ag(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.ag(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.ag(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.ag(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.ag(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.ag(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.ag(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.ag(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.ag(a5.$2(j,i),0)){h=i
i=j
j=h}t.j(a2,r,m)
t.j(a2,p,k)
t.j(a2,q,i)
t.j(a2,o,t.h(a2,a3))
t.j(a2,n,t.h(a2,a4))
g=a3+1
f=a4-1
if(J.E(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=t.h(a2,e)
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
H.cS(a2,a3,g-2,a5)
H.cS(a2,f+2,a4,a5)
if(a0)return
if(g<r&&f>q){for(;J.E(a5.$2(t.h(a2,g),l),0);)++g
for(;J.E(a5.$2(t.h(a2,f),j),0);)--f
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
break}}H.cS(a2,g,f,a5)}else H.cS(a2,g,f,a5)},
j:function j(){},
aK:function aK(){},
cB:function cB(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cC:function cC(a,b,c){this.a=a
this.b=b
this.$ti=c},
eu:function eu(a,b,c){this.a=a
this.b=b
this.$ti=c},
ft:function ft(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bx:function bx(a,b,c){this.a=a
this.b=b
this.$ti=c},
d7:function d7(a,b,c){this.a=a
this.b=b
this.$ti=c},
hS:function hS(a,b,c){this.a=a
this.b=b
this.$ti=c},
b3:function b3(){},
dU:function(a,b){var t=a.ar(b)
if(!u.globalState.d.cy)u.globalState.f.aw()
return t},
j4:function(){++u.globalState.f.b},
jj:function(){--u.globalState.f.b
H.b(u.globalState.f.b>=0)},
m0:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.p(s).$isi)throw H.c(P.cb("Arguments to main must be a List: "+H.d(s)))
u.globalState=new H.iC(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$l_()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.i8(P.jW(null,H.aT),0)
q=P.x
s.sfw(new H.ai(0,null,null,null,null,null,0,[q,H.bf]))
s.sfB(new H.ai(0,null,null,null,null,null,0,[q,null]))
if(s.x){r=new H.iB()
s.Q=r
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.ng,r)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.nV)}if(u.globalState.x)return
o=H.lx()
u.globalState.e=o
u.globalState.z.j(0,o.a,o)
u.globalState.d=o
if(H.bm(a,{func:1,args:[P.L]}))o.ar(new H.ju(t,a))
else if(H.bm(a,{func:1,args:[P.L,P.L]}))o.ar(new H.jv(t,a))
else o.ar(a)
u.globalState.f.aw()},
nV:function(a){var t=P.as(["command","print","msg",a])
return new H.ad(!0,P.bg(null,P.x)).M(t)},
lx:function(){var t,s
t=u.globalState.a++
s=P.x
t=new H.bf(t,new H.ai(0,null,null,null,null,null,0,[s,H.cP]),P.aJ(null,null,null,s),u.createNewIsolate(),new H.cP(0,null,!1),new H.aA(H.lY()),new H.aA(H.lY()),!1,!1,[],P.aJ(null,null,null,null),null,null,!1,!0,P.aJ(null,null,null,null))
t.e2()
return t},
ni:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.nj()
return},
nj:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.c(P.t("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.c(P.t('Cannot extract URI from "'+t+'"'))},
ng:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=new H.aS(!0,[]).a_(b.data)
s=J.z(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.or(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.aS(!0,[]).a_(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.aS(!0,[]).a_(s.h(t,"replyTo"))
k=H.lx()
u.globalState.f.a.X(0,new H.aT(k,new H.f9(q,p,o,n,m,l),"worker-start"))
u.globalState.d=k
u.globalState.f.aw()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.mD(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.aw()
break
case"close":u.globalState.ch.av(0,$.$get$l0().h(0,a))
a.terminate()
u.globalState.f.aw()
break
case"log":H.nf(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
j=P.as(["command","print","msg",t])
j=new H.ad(!0,P.bg(null,P.x)).M(j)
s.toString
self.postMessage(j)}else P.O(s.h(t,"msg"))
break
case"error":throw H.c(s.h(t,"msg"))}},
nf:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.as(["command","log","msg",a])
r=new H.ad(!0,P.bg(null,P.x)).M(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.J(q)
t=H.ae(q)
s=P.cp(t)
throw H.c(s)}},
nh:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.l9=$.l9+("_"+s)
$.la=$.la+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.J(0,["spawned",new H.bh(s,r),q,t.r])
r=new H.fa(t,d,a,c,b)
if(e){t.cc(q,q)
u.globalState.f.a.X(0,new H.aT(t,r,"start isolate"))}else r.$0()},
nF:function(a,b){var t=new H.hz(!0,!1,null,0)
t.dW(a,b)
return t},
nX:function(a){return new H.aS(!0,[]).a_(new H.ad(!1,P.bg(null,P.x)).M(a))},
ju:function ju(a,b){this.a=a
this.b=b},
jv:function jv(a,b){this.a=a
this.b=b},
iC:function iC(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
bf:function bf(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
iu:function iu(a,b){this.a=a
this.b=b},
i8:function i8(a,b){this.a=a
this.b=b},
i9:function i9(a){this.a=a},
aT:function aT(a,b,c){this.a=a
this.b=b
this.c=c},
iB:function iB(){},
f9:function f9(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fa:function fa(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
i2:function i2(){},
bh:function bh(a,b){this.b=a
this.a=b},
iD:function iD(a,b){this.a=a
this.b=b},
c1:function c1(a,b,c){this.b=a
this.c=b
this.a=c},
cP:function cP(a,b,c){this.a=a
this.b=b
this.c=c},
hz:function hz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hA:function hA(a,b){this.a=a
this.b=b},
hB:function hB(a,b){this.a=a
this.b=b},
aA:function aA(a){this.a=a},
ad:function ad(a,b){this.a=a
this.b=b},
aS:function aS(a,b){this.a=a
this.b=b},
ol:function(a){return u.types[a]},
ot:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.p(a).$isu},
d:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.bp(a)
if(typeof t!=="string")throw H.c(H.M(a))
return t},
nz:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t=J.ar(t)
s=t[0]
r=t[1]
return new H.h2(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aM:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
bD:function(a){var t,s,r,q,p,o,n,m,l
t=J.p(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.M||!!J.p(a).$isaQ){p=C.z(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.i.aW(q,0)===36)q=C.i.dv(q,1)
l=H.dW(H.j7(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+l,u.mangledGlobalNames)},
S:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nx:function(a){return a.b?H.S(a).getUTCFullYear()+0:H.S(a).getFullYear()+0},
nv:function(a){return a.b?H.S(a).getUTCMonth()+1:H.S(a).getMonth()+1},
nr:function(a){return a.b?H.S(a).getUTCDate()+0:H.S(a).getDate()+0},
ns:function(a){return a.b?H.S(a).getUTCHours()+0:H.S(a).getHours()+0},
nu:function(a){return a.b?H.S(a).getUTCMinutes()+0:H.S(a).getMinutes()+0},
nw:function(a){return a.b?H.S(a).getUTCSeconds()+0:H.S(a).getSeconds()+0},
nt:function(a){return a.b?H.S(a).getUTCMilliseconds()+0:H.S(a).getMilliseconds()+0},
l8:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.c(H.M(a))
return a[b]},
bl:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a7(!0,b,"index",null)
t=J.ax(a)
if(b<0||C.b.bq(b,t))return P.B(b,a,"index",null,t)
return P.h_(b,"index",null)},
M:function(a){return new P.a7(!0,a,null,null)},
c:function(a){var t
if(a==null)a=new P.b9()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.m1})
t.name=""}else t.toString=H.m1
return t},
m1:function(){return J.bp(this.dartException)},
K:function(a){throw H.c(a)},
G:function(a){throw H.c(P.a8(a))},
al:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.hF(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
hG:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
ll:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
l7:function(a,b){return new H.fL(a,b==null?null:b.method)},
jS:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.ff(a,s,t?null:b.receiver)},
J:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.jw(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.b6(r,16)&8191)===10)switch(q){case 438:return t.$1(H.jS(H.d(s)+" (Error "+q+")",null))
case 445:case 5007:return t.$1(H.l7(H.d(s)+" (Error "+q+")",null))}}if(a instanceof TypeError){p=$.$get$lf()
o=$.$get$lg()
n=$.$get$lh()
m=$.$get$li()
l=$.$get$lm()
k=$.$get$ln()
j=$.$get$lk()
$.$get$lj()
i=$.$get$lp()
h=$.$get$lo()
g=p.R(s)
if(g!=null)return t.$1(H.jS(s,g))
else{g=o.R(s)
if(g!=null){g.method="call"
return t.$1(H.jS(s,g))}else{g=n.R(s)
if(g==null){g=m.R(s)
if(g==null){g=l.R(s)
if(g==null){g=k.R(s)
if(g==null){g=j.R(s)
if(g==null){g=m.R(s)
if(g==null){g=i.R(s)
if(g==null){g=h.R(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return t.$1(H.l7(s,g))}}return t.$1(new H.hK(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.cV()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.a7(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.cV()
return a},
ae:function(a){var t
if(a==null)return new H.dz(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dz(a,null)},
ox:function(a){if(a==null||typeof a!='object')return J.bo(a)
else return H.aM(a)},
oj:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=a.length
for(r=0;r<s;){q=r+1
H.b(t)
p=a[r]
r=q+1
H.b(t)
b.j(0,p,a[q])}return b},
os:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dU(b,new H.je(a))
case 1:return H.dU(b,new H.jf(a,d))
case 2:return H.dU(b,new H.jg(a,d,e))
case 3:return H.dU(b,new H.jh(a,d,e,f))
case 4:return H.dU(b,new H.ji(a,d,e,f,g))}throw H.c(P.cp("Unsupported number of arguments for wrapped closure"))},
aw:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.os)
a.$identity=t
return t},
mW:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.p(c).$isi){t.$reflectionInfo=c
r=H.nz(t).r}else r=c
q=d?Object.create(new H.hh().constructor.prototype):Object.create(new H.bq(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.kM(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.ol,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.kJ:H.jK
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.c("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.kM(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
mT:function(a,b,c,d){var t=H.jK
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
kM:function(a,b,c){var t,s,r,q
if(c)return H.mV(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.mT(s,b==null?r!=null:b!==r,t,b)
return q},
mU:function(a,b,c,d){var t,s
t=H.jK
s=H.kJ
switch(b?-1:a){case 0:throw H.c(H.nA("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
mV:function(a,b){var t,s,r,q
t=$.kK
if(t==null){t=H.kH("self")
$.kK=t}t=$.kI
if(t==null){t=H.kH("receiver")
$.kI=t}s=b.$stubName
r=b.length
q=a[s]
t=H.mU(r,b==null?q!=null:b!==q,s,b)
return t},
kg:function(a,b,c,d,e,f){var t,s
t=J.ar(b)
s=!!J.p(c).$isi?J.ar(c):c
return H.mW(a,t,s,!!d,e,f)},
jK:function(a){return a.a},
kJ:function(a){return a.c},
kH:function(a){var t,s,r,q,p
t=new H.bq("self","target","receiver","name")
s=J.ar(Object.getOwnPropertyNames(t))
for(r=s.length,q=0;q<r;++q){p=s[q]
if(t[p]===a)return p}},
oU:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.am(a,"String"))},
oP:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.am(a,"double"))},
oT:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.am(a,"num"))},
oc:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.am(a,"bool"))},
or:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.am(a,"int"))},
oz:function(a,b){throw H.c(H.am(a,b.substring(3)))},
oy:function(a,b){var t=J.z(b)
throw H.c(H.kL(a,t.bF(b,3,t.gi(b))))},
kk:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.p(a)[b])return a
H.oz(a,b)},
ap:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.p(a)[b]
else t=!0
if(t)return a
H.oy(a,b)},
oS:function(a){if(a==null)return a
if(!!J.p(a).$isi)return a
throw H.c(H.am(a,"List"))},
kh:function(a){var t=J.p(a)
return"$S" in t?t.$S():null},
bm:function(a,b){var t,s
if(a==null)return!1
t=H.kh(a)
if(t==null)s=!1
else s=H.lU(t,b)
return s},
oQ:function(a,b){var t,s
if(a==null)return a
if($.kd)return a
$.kd=!0
try{if(H.bm(a,b))return a
t=H.jo(b,null)
s=H.am(a,t)
throw H.c(s)}finally{$.kd=!1}},
am:function(a,b){return new H.hH("TypeError: "+H.d(P.co(a))+": type '"+H.lD(a)+"' is not a subtype of type '"+b+"'")},
kL:function(a,b){return new H.e9("CastError: "+H.d(P.co(a))+": type '"+H.lD(a)+"' is not a subtype of type '"+b+"'")},
lD:function(a){var t
if(a instanceof H.aC){t=H.kh(a)
if(t!=null)return H.jo(t,null)
return"Closure"}return H.bD(a)},
W:function(a){if(!0===a)return!1
if(!!J.p(a).$isjO)a=a.$0()
if(typeof a==="boolean")return!a
throw H.c(H.am(a,"bool"))},
a1:function(a){throw H.c(new H.hX(a))},
b:function(a){if(H.W(a))throw H.c(P.mS(null))},
oE:function(a){throw H.c(new P.el(a))},
nA:function(a){return new H.h7(a)},
lY:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
lS:function(a){return u.getIsolateTag(a)},
I:function(a){return new H.av(a,null)},
v:function(a,b){H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
j7:function(a){if(a==null)return
return a.$ti},
lT:function(a,b){return H.ko(a["$as"+H.d(b)],H.j7(a))},
a3:function(a,b,c){var t,s
t=H.lT(a,b)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
a6:function(a,b){var t,s
t=H.j7(a)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
jo:function(a,b){var t=H.bn(a,b)
return t},
bn:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.b(!0)
H.b(!0)
return a[0].name+H.dW(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.d(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.bn(t,b)
return H.o0(a,b)}return"unknown-reified-type"},
o0:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.bn(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.bn(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.bn(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.oi(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.bn(l[j],b)+(" "+H.d(j))}q+="}"}return"("+q+") => "+t},
dW:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=new P.bH("")
for(r=b,q=!0,p=!0;H.b(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.b(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.bn(o,c)}return p?"":"<"+s.k(0)+">"},
j8:function(a){var t,s,r
if(a instanceof H.aC){t=H.kh(a)
if(t!=null)return H.jo(t,null)}s=J.p(a).constructor.name
if(a==null)return s
r=H.dW(a.$ti,0,null)
return s+r},
ko:function(a,b){if(a==null)return b
H.b(typeof a=="function")
H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.kl(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.kl(a,null,b)
return b},
c5:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.j7(a)
s=J.p(a)
if(s[b]==null)return!1
return H.lK(H.ko(s[d],t),c)},
dY:function(a,b,c,d){var t,s
if(a==null)return a
t=H.c5(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.dW(c,0,null)
throw H.c(H.kL(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
oM:function(a,b,c,d){var t,s
if(a==null)return a
t=H.c5(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.dW(c,0,null)
throw H.c(H.am(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
lK:function(a,b){var t,s,r,q,p
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
if(!H.a4(r,b[p]))return!1}return!0},
oN:function(a,b,c){return H.kl(a,b,H.lT(b,c))},
a4:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.name==="L")return!0
if('func' in b)return H.lU(a,b)
if('func' in a)return b.name==="jO"||b.name==="D"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.b(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.b(!0)
q=b[0]}else q=b
if(q!==s){p=H.jo(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.lK(H.ko(o,t),r)},
lJ:function(a,b,c){var t,s,r,q,p,o,n
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
if(!(H.a4(o,n)||H.a4(n,o)))return!1}return!0},
o8:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
H.b(typeof a=='object')
H.b(typeof b=='object')
t=J.ar(Object.getOwnPropertyNames(b))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.a4(p,o)||H.a4(o,p)))return!1}return!0},
lU:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.b('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.a4(t,s)||H.a4(s,t)))return!1}r=a.args
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
if(n===m){if(!H.lJ(r,q,!1))return!1
if(!H.lJ(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.b(j)
g=r[h]
H.b(i)
f=q[h]
if(!(H.a4(g,f)||H.a4(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=q[e]
if(!(H.a4(g,f)||H.a4(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=o[e]
if(!(H.a4(g,f)||H.a4(f,g)))return!1}}return H.o8(a.named,b.named)},
kl:function(a,b,c){H.b(typeof a=="function")
H.b(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
oV:function(a){var t=$.ki
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
oR:function(a){return H.aM(a)},
oO:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
ou:function(a){var t,s,r,q,p,o
H.b(!(a instanceof P.D))
t=$.ki.$1(a)
s=$.j3[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.jd[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.lF.$2(a,t)
if(t!=null){s=$.j3[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.jd[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.jn(r)
$.j3[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.jd[t]=r
return r}if(p==="-"){o=H.jn(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.lW(a,r)
if(p==="*")throw H.c(P.k4(t))
if(u.leafTags[t]===true){o=H.jn(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.lW(a,r)},
lW:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.km(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
jn:function(a){return J.km(a,!1,null,!!a.$isu)},
ow:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return H.jn(t)
else return J.km(t,c,null,null)},
op:function(){if(!0===$.kj)return
$.kj=!0
H.oq()},
oq:function(){var t,s,r,q,p,o,n,m
$.j3=Object.create(null)
$.jd=Object.create(null)
H.oo()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.lX.$1(p)
if(o!=null){n=H.ow(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
oo:function(){var t,s,r,q,p,o,n
t=C.Q()
t=H.bk(C.N,H.bk(C.S,H.bk(C.y,H.bk(C.y,H.bk(C.R,H.bk(C.O,H.bk(C.P(C.z),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.ki=new H.ja(p)
$.lF=new H.jb(o)
$.lX=new H.jc(n)},
bk:function(a,b){return a(b)||b},
oD:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
h2:function h2(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
hF:function hF(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fL:function fL(a,b){this.a=a
this.b=b},
ff:function ff(a,b,c){this.a=a
this.b=b
this.c=c},
hK:function hK(a){this.a=a},
jw:function jw(a){this.a=a},
dz:function dz(a,b){this.a=a
this.b=b},
je:function je(a){this.a=a},
jf:function jf(a,b){this.a=a
this.b=b},
jg:function jg(a,b,c){this.a=a
this.b=b
this.c=c},
jh:function jh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ji:function ji(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
aC:function aC(){},
hv:function hv(){},
hh:function hh(){},
bq:function bq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hH:function hH(a){this.a=a},
e9:function e9(a){this.a=a},
h7:function h7(a){this.a=a},
hX:function hX(a){this.a=a},
av:function av(a,b){this.a=a
this.b=b},
ai:function ai(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
fe:function fe(a){this.a=a},
fj:function fj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fk:function fk(a,b){this.a=a
this.$ti=b},
fl:function fl(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ja:function ja(a){this.a=a},
jb:function jb(a){this.a=a},
jc:function jc(a){this.a=a},
iW:function(a){var t,s,r
if(!!J.p(a).$isq)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
an:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bl(b,a))},
bA:function bA(){},
b8:function b8(){},
fB:function fB(){},
cF:function cF(){},
cG:function cG(){},
cH:function cH(){},
cE:function cE(){},
fC:function fC(){},
fD:function fD(){},
fE:function fE(){},
fF:function fF(){},
fG:function fG(){},
fH:function fH(){},
cI:function cI(){},
fI:function fI(){},
bT:function bT(){},
bU:function bU(){},
bV:function bV(){},
bW:function bW(){},
oi:function(a){return J.ar(H.v(a?Object.keys(a):[],[null]))},
dX:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
p:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cz.prototype
return J.cy.prototype}if(typeof a=="string")return J.aG.prototype
if(a==null)return J.fd.prototype
if(typeof a=="boolean")return J.fc.prototype
if(a.constructor==Array)return J.aF.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aH.prototype
return a}if(a instanceof P.D)return a
return J.j6(a)},
km:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
j6:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.kj==null){H.op()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.c(P.k4("Return interceptor for "+H.d(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$jR()]
if(p!=null)return p
p=H.ou(a)
if(p!=null)return p
if(typeof a=="function")return C.T
s=Object.getPrototypeOf(a)
if(s==null)return C.C
if(s===Object.prototype)return C.C
if(typeof q=="function"){Object.defineProperty(q,$.$get$jR(),{value:C.u,enumerable:false,writable:true,configurable:true})
return C.u}return C.u},
ar:function(a){a.fixed$length=Array
return a},
z:function(a){if(typeof a=="string")return J.aG.prototype
if(a==null)return a
if(a.constructor==Array)return J.aF.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aH.prototype
return a}if(a instanceof P.D)return a
return J.j6(a)},
aV:function(a){if(a==null)return a
if(a.constructor==Array)return J.aF.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aH.prototype
return a}if(a instanceof P.D)return a
return J.j6(a)},
j5:function(a){if(typeof a=="number")return J.b7.prototype
if(a==null)return a
if(!(a instanceof P.D))return J.aQ.prototype
return a},
ok:function(a){if(typeof a=="number")return J.b7.prototype
if(typeof a=="string")return J.aG.prototype
if(a==null)return a
if(!(a instanceof P.D))return J.aQ.prototype
return a},
lR:function(a){if(typeof a=="string")return J.aG.prototype
if(a==null)return a
if(!(a instanceof P.D))return J.aQ.prototype
return a},
h:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aH.prototype
return a}if(a instanceof P.D)return a
return J.j6(a)},
jx:function(a,b){if(typeof a=="number"&&typeof b=="number")return a/b
return J.j5(a).ae(a,b)},
E:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.p(a).B(a,b)},
ag:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.j5(a).W(a,b)},
m2:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.j5(a).H(a,b)},
X:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ot(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.z(a).h(a,b)},
m3:function(a,b,c){return J.aV(a).j(a,b,c)},
m4:function(a,b,c,d){return J.h(a).e6(a,b,c,d)},
kp:function(a,b){return J.lR(a).aW(a,b)},
m5:function(a,b){return J.h(a).eh(a,b)},
m6:function(a,b,c,d){return J.h(a).ej(a,b,c,d)},
jy:function(a,b){return J.h(a).eu(a,b)},
m7:function(a,b,c,d){return J.h(a).ev(a,b,c,d)},
m8:function(a,b,c){return J.h(a).ew(a,b,c)},
kq:function(a,b){return J.h(a).cb(a,b)},
jz:function(a,b){return J.h(a).T(a,b)},
kr:function(a,b,c){return J.h(a).ce(a,b,c)},
m9:function(a,b){return J.h(a).eQ(a,b)},
jA:function(a,b,c){return J.h(a).cf(a,b,c)},
ma:function(a,b,c){return J.h(a).cg(a,b,c)},
aW:function(a,b,c){return J.h(a).ci(a,b,c)},
dZ:function(a,b){return J.h(a).eT(a,b)},
mb:function(a,b){return J.h(a).cj(a,b)},
mc:function(a,b,c){return J.h(a).ck(a,b,c)},
ks:function(a,b,c,d){return J.h(a).cm(a,b,c,d)},
md:function(a,b){return J.aV(a).cn(a,b)},
me:function(a,b,c,d,e){return J.h(a).co(a,b,c,d,e)},
mf:function(a,b){return J.ok(a).U(a,b)},
jB:function(a,b,c){return J.z(a).f_(a,b,c)},
jC:function(a){return J.h(a).cq(a)},
mg:function(a){return J.h(a).cr(a)},
kt:function(a){return J.h(a).ct(a)},
mh:function(a){return J.h(a).f5(a)},
mi:function(a,b){return J.h(a).cv(a,b)},
jD:function(a,b){return J.h(a).cw(a,b)},
mj:function(a,b,c,d){return J.h(a).cz(a,b,c,d)},
mk:function(a,b,c,d,e){return J.h(a).fg(a,b,c,d,e)},
ml:function(a,b,c,d,e){return J.h(a).cA(a,b,c,d,e)},
mm:function(a,b,c,d,e,f){return J.h(a).fh(a,b,c,d,e,f)},
mn:function(a,b){return J.aV(a).t(a,b)},
c9:function(a,b){return J.h(a).cB(a,b)},
mo:function(a,b){return J.h(a).cC(a,b)},
mp:function(a){return J.h(a).fi(a)},
ku:function(a,b){return J.aV(a).P(a,b)},
mq:function(a){return J.h(a).geP(a)},
bo:function(a){return J.p(a).gw(a)},
P:function(a){return J.aV(a).gv(a)},
ax:function(a){return J.z(a).gi(a)},
mr:function(a){return J.h(a).gbk(a)},
ms:function(a){return J.h(a).gbl(a)},
mt:function(a){return J.p(a).gC(a)},
mu:function(a){return J.h(a).gfO(a)},
mv:function(a){return J.h(a).gcQ(a)},
mw:function(a){return J.h(a).gay(a)},
jE:function(a){return J.h(a).gm(a)},
jF:function(a){return J.h(a).gn(a)},
kv:function(a){return J.h(a).gG(a)},
jG:function(a,b){return J.h(a).af(a,b)},
mx:function(a){return J.h(a).aN(a)},
kw:function(a){return J.h(a).bs(a)},
my:function(a,b){return J.h(a).bt(a,b)},
mz:function(a,b,c){return J.h(a).bu(a,b,c)},
kx:function(a,b,c){return J.h(a).bx(a,b,c)},
mA:function(a,b){return J.h(a).cG(a,b)},
mB:function(a,b){return J.aV(a).cJ(a,b)},
mC:function(a,b,c){return J.h(a).cK(a,b,c)},
ky:function(a){return J.aV(a).fH(a)},
mD:function(a,b){return J.h(a).J(a,b)},
mE:function(a,b,c,d){return J.h(a).bE(a,b,c,d)},
mF:function(a,b,c,d,e,f,g){return J.h(a).cR(a,b,c,d,e,f,g)},
mG:function(a,b,c,d,e,f,g,h,i,j){return J.h(a).aK(a,b,c,d,e,f,g,h,i,j)},
mH:function(a,b,c,d){return J.h(a).cS(a,b,c,d)},
e_:function(a,b,c,d){return J.h(a).cT(a,b,c,d)},
Q:function(a){return J.j5(a).fP(a)},
mI:function(a){return J.lR(a).fS(a)},
bp:function(a){return J.p(a).k(a)},
mJ:function(a,b,c,d){return J.h(a).fU(a,b,c,d)},
mK:function(a,b,c){return J.h(a).cW(a,b,c)},
mL:function(a,b,c){return J.h(a).cX(a,b,c)},
jH:function(a,b,c){return J.h(a).cY(a,b,c)},
mM:function(a,b,c){return J.h(a).cZ(a,b,c)},
kz:function(a,b,c){return J.h(a).d_(a,b,c)},
kA:function(a,b,c){return J.h(a).d0(a,b,c)},
kB:function(a,b,c){return J.h(a).d1(a,b,c)},
kC:function(a,b,c,d){return J.h(a).d2(a,b,c,d)},
kD:function(a,b,c,d){return J.h(a).d3(a,b,c,d)},
mN:function(a,b){return J.h(a).d5(a,b)},
mO:function(a,b,c){return J.h(a).fV(a,b,c)},
mP:function(a,b,c,d,e,f,g){return J.h(a).d7(a,b,c,d,e,f,g)},
mQ:function(a,b,c,d,e){return J.h(a).d9(a,b,c,d,e)},
a:function a(){},
fc:function fc(){},
fd:function fd(){},
bv:function bv(){},
fV:function fV(){},
aQ:function aQ(){},
aH:function aH(){},
aF:function aF(a){this.$ti=a},
jP:function jP(a){this.$ti=a},
cc:function cc(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b7:function b7(){},
cz:function cz(){},
cy:function cy(){},
aG:function aG(){}},P={
nJ:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.o9()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.aw(new P.hZ(t),1)).observe(s,{childList:true})
return new P.hY(t,s,r)}else if(self.setImmediate!=null)return P.oa()
return P.ob()},
nK:function(a){H.j4()
self.scheduleImmediate(H.aw(new P.i_(a),0))},
nL:function(a){H.j4()
self.setImmediate(H.aw(new P.i0(a),0))},
nM:function(a){P.k1(C.w,a)},
k1:function(a,b){var t=C.b.F(a.a,1000)
return H.nF(t<0?0:t,b)},
o4:function(a,b){if(H.bm(a,{func:1,args:[P.L,P.L]})){b.toString
return a}else{b.toString
return a}},
n9:function(a,b,c){var t
if(a==null)a=new P.b9()
t=$.w
if(t!==C.d)t.toString
t=new P.F(0,t,null,[c])
t.bV(a,b)
return t},
na:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.F(0,$.w,null,[P.i])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.f_(t,b,!1,s)
try{for(m=0,l=0;m<2;++m){q=a[m]
p=l
q.bo(new P.eZ(t,p,s,b,!1),r)
l=++t.b}if(l===0){l=new P.F(0,$.w,null,[null])
l.bU(C.A)
return l}k=new Array(l)
k.fixed$length=Array
t.a=k}catch(j){o=H.J(j)
n=H.ae(j)
if(t.b===0||!1)return P.n9(o,n,null)
else{t.c=o
t.d=n}}return s},
nY:function(a,b,c){$.w.toString
a.K(b,c)},
nP:function(a,b){var t=new P.F(0,$.w,null,[b])
H.b(!0)
t.a=4
t.c=a
return t},
lu:function(a,b){var t,s,r
H.b(b.a<4)
H.b(!(a instanceof P.F))
H.b(b.a===0)
b.a=1
try{a.bo(new P.ii(b),new P.ij(b))}catch(r){t=H.J(r)
s=H.ae(r)
P.oA(new P.ik(b,t,s))}},
ih:function(a,b){var t,s,r
H.b(b.a<=1)
for(;t=a.a,s=t===2,s;){H.b(s)
a=a.c}if(t>=4){r=b.aF()
b.aV(a)
P.be(b,r)}else{r=b.c
H.b(b.a<=1)
b.a=2
b.c=a
a.c5(r)}},
be:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.iX(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.be(t.a,b)}s=t.a
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
P.iX(null,null,p,o,s)
return}s=$.w
if(s==null?l!=null:s!==l){H.b(l!=null)
s=$.w
H.b(l==null?s!=null:l!==s)
j=$.w
$.w=l
i=j}else i=null
s=b.c
if(s===8)new P.iq(t,r,b,q).$0()
else if(p){if((s&1)!==0)new P.ip(r,b,m).$0()}else if((s&2)!==0)new P.io(t,r,b).$0()
if(i!=null){H.b(!0)
$.w=i}s=r.b
if(!!J.p(s).$isa5){if(s.a>=4){H.b(o.a<4)
h=o.c
o.c=null
b=o.aG(h)
H.b(o.a<4)
H.b(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.ih(s,o)
return}}g=b.b
H.b(g.a<4)
h=g.c
g.c=null
b=g.aG(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.b(!o)
g.a=4
g.c=p}else{H.b(!o)
g.a=8
g.c=p}t.a=g
s=g}},
o2:function(){var t,s
for(;t=$.bi,t!=null;){$.c3=null
s=t.b
$.bi=s
if(s==null)$.c2=null
t.a.$0()}},
o7:function(){$.ke=!0
try{P.o2()}finally{$.c3=null
$.ke=!1
if($.bi!=null)$.$get$k9().$1(P.lL())}},
lC:function(a){var t=new P.d8(a,null)
if($.bi==null){$.c2=t
$.bi=t
if(!$.ke)$.$get$k9().$1(P.lL())}else{$.c2.b=t
$.c2=t}},
o6:function(a){var t,s,r
t=$.bi
if(t==null){P.lC(a)
$.c3=$.c2
return}s=new P.d8(a,null)
r=$.c3
if(r==null){s.b=t
$.c3=s
$.bi=s}else{s.b=r.b
r.b=s
$.c3=s
if(s.b==null)$.c2=s}},
oA:function(a){var t=$.w
if(C.d===t){P.bj(null,null,C.d,a)
return}t.toString
P.bj(null,null,t,t.bf(a))},
nW:function(a,b,c){var t=a.eV(0)
if(!!J.p(t).$isa5&&t!==$.$get$kY())t.fW(new P.iU(b,c))
else b.ak(c)},
nG:function(a,b){var t=$.w
if(t===C.d){t.toString
return P.k1(a,b)}return P.k1(a,t.bf(b))},
k8:function(a){var t,s
H.b(a!=null)
t=$.w
H.b(a==null?t!=null:a!==t)
s=$.w
$.w=a
return s},
iX:function(a,b,c,d,e){var t={}
t.a=d
P.o6(new P.iY(t,e))},
lA:function(a,b,c,d){var t,s
if($.w===c)return d.$0()
t=P.k8(c)
try{s=d.$0()
return s}finally{s=t
H.b(s!=null)
$.w=s}},
lB:function(a,b,c,d,e){var t,s
if($.w===c)return d.$1(e)
t=P.k8(c)
try{s=d.$1(e)
return s}finally{s=t
H.b(s!=null)
$.w=s}},
o5:function(a,b,c,d,e,f){var t,s
if($.w===c)return d.$2(e,f)
t=P.k8(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.b(s!=null)
$.w=s}},
bj:function(a,b,c,d){var t=C.d!==c
if(t)d=!(!t||!1)?c.bf(d):c.eR(d)
P.lC(d)},
hZ:function hZ(a){this.a=a},
hY:function hY(a,b,c){this.a=a
this.b=b
this.c=c},
i_:function i_(a){this.a=a},
i0:function i0(a){this.a=a},
a5:function a5(){},
f_:function f_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eZ:function eZ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jL:function jL(){},
i3:function i3(){},
bN:function bN(a,b){this.a=a
this.$ti=b},
iP:function iP(a,b){this.a=a
this.$ti=b},
bP:function bP(a,b,c,d,e,f){var _=this
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
id:function id(a,b){this.a=a
this.b=b},
im:function im(a,b){this.a=a
this.b=b},
ii:function ii(a){this.a=a},
ij:function ij(a){this.a=a},
ik:function ik(a,b,c){this.a=a
this.b=b
this.c=c},
ig:function ig(a,b){this.a=a
this.b=b},
il:function il(a,b){this.a=a
this.b=b},
ie:function ie(a,b,c){this.a=a
this.b=b
this.c=c},
iq:function iq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ir:function ir(a){this.a=a},
ip:function ip(a,b,c){this.a=a
this.b=b
this.c=c},
io:function io(a,b,c){this.a=a
this.b=b
this.c=c},
d8:function d8(a,b){this.a=a
this.b=b},
bG:function bG(){},
hp:function hp(a){this.a=a},
hq:function hq(a,b){this.a=a
this.b=b},
hn:function hn(a,b,c){this.a=a
this.b=b
this.c=c},
ho:function ho(a){this.a=a},
hm:function hm(){},
cX:function cX(){},
iU:function iU(a,b){this.a=a
this.b=b},
k0:function k0(){},
aX:function aX(a,b){this.a=a
this.b=b},
iT:function iT(){},
iY:function iY(a,b){this.a=a
this.b=b},
iF:function iF(){},
iH:function iH(a,b){this.a=a
this.b=b},
iG:function iG(a,b){this.a=a
this.b=b},
iI:function iI(a,b){this.a=a
this.b=b},
fm:function(a,b){return new H.ai(0,null,null,null,null,null,0,[a,b])},
Y:function(){return new H.ai(0,null,null,null,null,null,0,[null,null])},
as:function(a){return H.oj(a,new H.ai(0,null,null,null,null,null,0,[null,null]))},
bg:function(a,b){return new P.iz(0,null,null,null,null,null,0,[a,b])},
aJ:function(a,b,c,d){return new P.ix(0,null,null,null,null,null,0,[d])},
kc:function(){var t=Object.create(null)
H.b(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
nk:function(a,b,c){var t,s
if(P.kf(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$c4()
C.a.l(s,a)
try{P.o1(a,t)}finally{H.b(C.a.gaJ(s)===a)
s.pop()}s=P.ld(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
fb:function(a,b,c){var t,s,r
if(P.kf(a))return b+"..."+c
t=new P.bH(b)
s=$.$get$c4()
C.a.l(s,a)
try{r=t
r.a=P.ld(r.ga7(),a,", ")}finally{H.b(C.a.gaJ(s)===a)
s.pop()}s=t
s.a=s.ga7()+c
s=t.ga7()
return s.charCodeAt(0)==0?s:s},
kf:function(a){var t,s
for(t=0;s=$.$get$c4(),t<s.length;++t)if(a===s[t])return!0
return!1},
o1:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gv(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.p())return
q=H.d(t.gq(t))
C.a.l(b,q)
s+=q.length+2;++r}if(!t.p()){if(r<=5)return
p=b.pop()
o=b.pop()}else{n=t.gq(t);++r
if(!t.p()){if(r<=4){C.a.l(b,H.d(n))
return}p=H.d(n)
o=b.pop()
s+=p.length+2}else{m=t.gq(t);++r
H.b(r<100)
for(;t.p();n=m,m=l){l=t.gq(t);++r
if(r>100){while(!0){if(!(s>75&&r>3))break
s-=b.pop().length+2;--r}C.a.l(b,"...")
return}}o=H.d(n)
p=H.d(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)C.a.l(b,k)
C.a.l(b,o)
C.a.l(b,p)},
jV:function(a,b){var t,s
t=P.aJ(null,null,null,b)
for(s=J.P(a);s.p();)t.l(0,s.gq(s))
return t},
l3:function(a){var t,s,r
t={}
if(P.kf(a))return"{...}"
s=new P.bH("")
try{C.a.l($.$get$c4(),a)
r=s
r.a=r.ga7()+"{"
t.a=!0
J.ku(a,new P.fs(t,s))
t=s
t.a=t.ga7()+"}"}finally{t=$.$get$c4()
H.b(C.a.gaJ(t)===a)
t.pop()}t=s.ga7()
return t.charCodeAt(0)==0?t:t},
jW:function(a,b){var t=new P.fn(null,0,0,0,[b])
t.dN(a,b)
return t},
iz:function iz(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
ix:function ix(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
iy:function iy(a,b,c){this.a=a
this.b=b
this.c=c},
bR:function bR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
it:function it(){},
jU:function jU(){},
cA:function cA(){},
m:function m(){},
bw:function bw(){},
fs:function fs(a,b){this.a=a
this.b=b},
aL:function aL(){},
fn:function fn(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
iA:function iA(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
ha:function ha(){},
h9:function h9(){},
bS:function bS(){},
o3:function(a,b){var t,s,r,q
if(typeof a!=="string")throw H.c(H.M(a))
t=null
try{t=JSON.parse(a)}catch(r){s=H.J(r)
q=String(s)
throw H.c(new P.eX(q,null,null))}q=P.iV(t)
return q},
iV:function(a){var t
if(a==null)return
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new P.iv(a,Object.create(null),null)
for(t=0;t<a.length;++t)a[t]=P.iV(a[t])
return a},
iv:function iv(a,b,c){this.a=a
this.b=b
this.c=c},
iw:function iw(a){this.a=a},
cf:function cf(){},
cg:function cg(){},
fg:function fg(a,b){this.a=a
this.b=b},
fh:function fh(a){this.a=a},
n5:function(a){var t=J.p(a)
if(!!t.$isaC)return t.k(a)
return"Instance of '"+H.bD(a)+"'"},
l2:function(a,b,c){var t,s
t=H.v([],[c])
for(s=J.P(a);s.p();)C.a.l(t,s.gq(s))
if(b)return t
return J.ar(t)},
ld:function(a,b,c){var t=J.P(b)
if(!t.p())return a
if(c.length===0){do a+=H.d(t.gq(t))
while(t.p())}else{a+=H.d(t.gq(t))
for(;t.p();)a=a+c+H.d(t.gq(t))}return a},
mX:function(a,b){return J.mf(a,b)},
n_:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+t
if(t>=10)return s+"00"+t
return s+"000"+t},
n0:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ci:function(a){if(a>=10)return""+a
return"0"+a},
n2:function(a,b,c,d,e,f){return new P.aE(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
co:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bp(a)
if(typeof a==="string")return JSON.stringify(a)
return P.n5(a)},
mS:function(a){return new P.cd(a)},
cb:function(a){return new P.a7(!1,null,null,a)},
jI:function(a,b,c){return new P.a7(!0,a,b,c)},
mR:function(a){return new P.a7(!1,null,a,"Must not be null")},
h_:function(a,b,c){return new P.cO(null,null,!0,a,b,"Value not in range")},
aN:function(a,b,c,d,e){return new P.cO(b,c,!0,a,d,"Invalid value")},
lb:function(a,b,c,d,e,f){if(C.b.W(0,a)||C.b.W(a,c))throw H.c(P.aN(a,0,c,"start",f))
if(b!=null){if(a>b||C.b.W(b,c))throw H.c(P.aN(b,a,c,"end",f))
return b}return c},
B:function(a,b,c,d,e){var t=e!=null?e:J.ax(b)
return new P.f8(b,t,!0,a,c,"Index out of range")},
t:function(a){return new P.hL(a)},
k4:function(a){return new P.hJ(a)},
cW:function(a){return new P.bc(a)},
a8:function(a){return new P.eb(a)},
cp:function(a){return new P.ic(a)},
O:function(a){H.dX(H.d(a))},
ao:function ao(){},
H:function H(){},
b1:function b1(a,b){this.a=a
this.b=b},
a2:function a2(){},
aE:function aE(a){this.a=a},
es:function es(){},
et:function et(){},
b2:function b2(){},
cd:function cd(a){this.a=a},
b9:function b9(){},
a7:function a7(a,b,c,d){var _=this
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
f8:function f8(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hL:function hL(a){this.a=a},
hJ:function hJ(a){this.a=a},
bc:function bc(a){this.a=a},
eb:function eb(a){this.a=a},
cV:function cV(){},
el:function el(a){this.a=a},
jN:function jN(){},
ic:function ic(a){this.a=a},
eX:function eX(a,b,c){this.a=a
this.b=b
this.c=c},
ew:function ew(a,b,c){this.a=a
this.b=b
this.$ti=c},
x:function x(){},
R:function R(){},
cx:function cx(){},
i:function i(){},
Z:function Z(){},
L:function L(){},
af:function af(){},
D:function D(){},
bb:function bb(){},
l:function l(){},
bH:function bH(a){this.a=a},
k3:function k3(){},
lM:function(a){return a},
j1:function(a){var t,s,r,q,p
if(a==null)return
t=P.Y()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.G)(s),++q){p=s[q]
t.j(0,p,a[p])}return t},
of:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.ku(a,new P.iZ(t))
return t},
og:function(a){var t,s
t=new P.F(0,$.w,null,[null])
s=new P.bN(t,[null])
a.then(H.aw(new P.j_(s),1))["catch"](H.aw(new P.j0(s),1))
return t},
kU:function(){var t=$.kT
if(t==null){t=J.jB(window.navigator.userAgent,"Opera",0)
$.kT=t}return t},
n1:function(){var t,s
t=$.kQ
if(t!=null)return t
s=$.kR
if(s==null){s=J.jB(window.navigator.userAgent,"Firefox",0)
$.kR=s}if(s)t="-moz-"
else{s=$.kS
if(s==null){s=!P.kU()&&J.jB(window.navigator.userAgent,"Trident/",0)
$.kS=s}if(s)t="-ms-"
else t=P.kU()?"-o-":"-webkit-"}$.kQ=t
return t},
hU:function hU(){},
hW:function hW(a,b){this.a=a
this.b=b},
iZ:function iZ(a){this.a=a},
hV:function hV(a,b,c){this.a=a
this.b=b
this.c=c},
j_:function j_(a){this.a=a},
j0:function j0(a){this.a=a},
hP:function hP(){},
iE:function iE(){},
a_:function a_(){},
ex:function ex(){},
ey:function ey(){},
ez:function ez(){},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){},
eO:function eO(){},
eS:function eS(){},
eV:function eV(){},
ab:function ab(){},
ah:function ah(){},
f3:function f3(){},
fi:function fi(){},
fu:function fu(){},
fM:function fM(){},
fT:function fT(){},
fX:function fX(){},
fY:function fY(){},
h0:function h0(){},
h1:function h1(){},
bE:function bE(){},
hr:function hr(){},
y:function y(){},
hs:function hs(){},
bJ:function bJ(){},
bK:function bK(){},
hE:function hE(){},
hN:function hN(){},
dj:function dj(){},
dk:function dk(){},
dr:function dr(){},
ds:function ds(){},
dB:function dB(){},
dC:function dC(){},
dH:function dH(){},
dI:function dI(){},
e4:function e4(){},
e5:function e5(){},
aY:function aY(){},
fN:function fN(){},
h5:function h5(){},
h6:function h6(){},
hg:function hg(){},
dx:function dx(){},
dy:function dy(){}},W={
n3:function(a,b,c){var t,s
t=document.body
s=(t&&C.p).O(t,a,b,c)
s.toString
t=new H.d7(new W.U(s),new W.ev(),[W.r])
return t.ga4(t)},
n4:function(a){return"wheel"},
br:function(a){var t,s,r
t="element tag unavailable"
try{s=J.mu(a)
if(typeof s==="string")t=a.tagName}catch(r){H.J(r)}return t},
nO:function(a,b){return document.createElement(a)},
aU:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ly:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
a0:function(a,b,c,d,e){var t=c==null?null:W.lE(new W.ib(c))
t=new W.ia(0,a,b,t,!1,[e])
t.e0(a,b,c,!1,e)
return t},
lv:function(a){var t,s
t=document.createElement("a")
s=new W.iJ(t,window.location)
s=new W.bQ(s)
s.e1(a)
return s},
nR:function(a,b,c,d){return!0},
nS:function(a,b,c,d){var t,s,r,q,p
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
lz:function(){var t=P.l
t=new W.iQ(P.jV(C.r,t),P.aJ(null,null,null,t),P.aJ(null,null,null,t),P.aJ(null,null,null,t),null)
t.e4(null,new H.bx(C.r,new W.iR(),[H.a6(C.r,0),null]),["TEMPLATE"],null)
return t},
nZ:function(a){var t
if(a==null)return
if("postMessage" in a){t=W.nN(a)
if(!!J.p(t).$ise)return t
return}else return a},
o_:function(a){var t
if(!!J.p(a).$isaD)return a
t=new P.hV([],[],!1)
t.c=!0
return t.bp(a)},
nN:function(a){if(a===window)return a
else return new W.i5(a)},
lE:function(a){var t=$.w
if(t===C.d)return a
return t.eS(a)},
k:function k(){},
ca:function ca(){},
e0:function e0(){},
e1:function e1(){},
e3:function e3(){},
ay:function ay(){},
az:function az(){},
e8:function e8(){},
aB:function aB(){},
ed:function ed(){},
ee:function ee(){},
ef:function ef(){},
eg:function eg(){},
b_:function b_(){},
eh:function eh(){},
a9:function a9(){},
b0:function b0(){},
ei:function ei(){},
ej:function ej(){},
ek:function ek(){},
em:function em(){},
en:function en(){},
cj:function cj(){},
aD:function aD(){},
eo:function eo(){},
ck:function ck(){},
ep:function ep(){},
cl:function cl(){},
cm:function cm(){},
cn:function cn(){},
eq:function eq(){},
er:function er(){},
aa:function aa(){},
ev:function ev(){},
f:function f(){},
e:function e(){},
eQ:function eQ(){},
eR:function eR(){},
eW:function eW(){},
f1:function f1(){},
ct:function ct(){},
f2:function f2(){},
bs:function bs(){},
cu:function cu(){},
cv:function cv(){},
bt:function bt(){},
b4:function b4(){},
b5:function b5(){},
b6:function b6(){},
bu:function bu(){},
aI:function aI(){},
fq:function fq(){},
fr:function fr(){},
by:function by(){},
fw:function fw(){},
fy:function fy(){},
bz:function bz(){},
fz:function fz(){},
N:function N(){},
U:function U(a){this.a=a},
r:function r(){},
cJ:function cJ(){},
bC:function bC(){},
aj:function aj(){},
fW:function fW(){},
fZ:function fZ(){},
cN:function cN(){},
cR:function cR(){},
h8:function h8(){},
au:function au(){},
hd:function hd(){},
hf:function hf(){},
ak:function ak(){},
hk:function hk(){},
hl:function hl(a){this.a=a},
cZ:function cZ(){},
ht:function ht(){},
hu:function hu(){},
bI:function bI(){},
hw:function hw(){},
hx:function hx(){},
hy:function hy(){},
aO:function aO(){},
hC:function hC(){},
hD:function hD(){},
d5:function d5(){},
aP:function aP(){},
hM:function hM(){},
hO:function hO(){},
bd:function bd(){},
hQ:function hQ(){},
hR:function hR(){},
aR:function aR(){},
bM:function bM(){},
hT:function hT(a){this.a=a},
k7:function k7(){},
i4:function i4(){},
i6:function i6(){},
is:function is(){},
dn:function dn(){},
iM:function iM(){},
iN:function iN(){},
i1:function i1(){},
i7:function i7(a){this.a=a},
de:function de(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bO:function bO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ia:function ia(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
ib:function ib(a){this.a=a},
bQ:function bQ(a){this.a=a},
n:function n(){},
cL:function cL(a){this.a=a},
fK:function fK(a){this.a=a},
fJ:function fJ(a,b,c){this.a=a
this.b=b
this.c=c},
bX:function bX(){},
iK:function iK(){},
iL:function iL(){},
iQ:function iQ(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iR:function iR(){},
iO:function iO(){},
cr:function cr(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
i5:function i5(a){this.a=a},
cK:function cK(){},
jY:function jY(){},
k6:function k6(){},
iJ:function iJ(a,b){this.a=a
this.b=b},
dJ:function dJ(a){this.a=a},
iS:function iS(a){this.a=a},
d9:function d9(){},
da:function da(){},
db:function db(){},
dc:function dc(){},
dd:function dd(){},
df:function df(){},
dg:function dg(){},
dh:function dh(){},
di:function di(){},
dl:function dl(){},
dm:function dm(){},
dp:function dp(){},
dq:function dq(){},
dt:function dt(){},
du:function du(){},
bY:function bY(){},
bZ:function bZ(){},
dv:function dv(){},
dw:function dw(){},
dA:function dA(){},
dD:function dD(){},
dE:function dE(){},
c_:function c_(){},
c0:function c0(){},
dF:function dF(){},
dG:function dG(){},
dK:function dK(){},
dL:function dL(){},
dM:function dM(){},
dN:function dN(){},
dO:function dO(){},
dP:function dP(){},
dQ:function dQ(){},
dR:function dR(){},
dS:function dS(){},
dT:function dT(){}},B={
oB:function(a){var t,s
t=document
s=W.aI
W.a0(t,"keydown",new B.jp(),!1,s)
W.a0(t,"keyup",new B.jq(),!1,s)
if(!$.oC)W.a0(t,"mousemove",new B.jr(),!1,W.N)
s=W.N
W.a0(t,"mousedown",new B.js(),!1,s)
W.a0(t,"mouseup",new B.jt(),!1,s)},
nq:function(a,b,c,d){var t,s,r,q,p,o,n
t=new Float32Array(3)
s=$.$get$j2()
r=$.$get$c6()
q=new T.C(new Float32Array(16))
q.I()
p=new Float32Array(3)
o=new Float32Array(3)
n=new Float32Array(3)
t=new B.fO(a,b,c,0,new T.o(t),-0.02,s,r,q,new T.o(p),new T.o(o),new T.o(n),new T.o(new Float32Array(3)),"camera:orbit",!1,!0)
t.dQ(a,b,c,d)
return t},
jp:function jp(){},
jq:function jq(){},
jr:function jr(){},
js:function js(){},
jt:function jt(){},
fO:function fO(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
fP:function fP(a){this.a=a},
fQ:function fQ(a){this.a=a},
fR:function fR(){},
fS:function fS(a){this.a=a}},L={
kE:function(a){var t,s,r
t=new Array(a)
t.fixed$length=Array
s=[T.C]
t=H.v(t,s)
r=new Array(a)
r.fixed$length=Array
s=new L.e2(t,H.v(r,s))
s.dF(a)
return s},
k5:function(b1,b2,b3,b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
t=new Float32Array(16)
s=new T.C(t)
for(r=b3.b,q=b4.a,p=0;p<b1.length;++p){o=b1[p]
n=q[p]
m=o.e
if(m<0)n.I()
else n.D(q[m])
l=r[p]
if(l!=null){k=L.jJ(l.f,b5)
H.b(!0)
j=L.jJ(l.b,b5)
H.b(!0)
i=L.jJ(l.d,b5)
H.b(!0)
h=l.r[k]
m=l.c[j]
g=l.e[i].a
f=g[0]
e=g[1]
d=g[2]
c=g[3]
b=f+f
a=e+e
a0=d+d
a1=f*b
a2=f*a
a3=f*a0
a4=e*a
a5=e*a0
a6=d*a0
a7=c*b
a8=c*a
a9=c*a0
b0=m.a
t[0]=1-(a4+a6)
t[1]=a2+a9
t[2]=a3-a8
t[3]=0
t[4]=a2-a9
t[5]=1-(a1+a6)
t[6]=a5+a7
t[7]=0
t[8]=a3+a8
t[9]=a5-a7
t[10]=1-(a1+a4)
t[11]=0
t[12]=b0[0]
t[13]=b0[1]
t[14]=b0[2]
t[15]=1
s.S(0,h)
n.ab(0,s)}else n.ab(0,o.b)}for(t=b4.b,p=0;p<b1.length;++p){n=t[p]
n.D(b2)
n.ab(0,q[p])
n.ab(0,b1[p].c)}},
mZ:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k
t=L.kE(a.length)
s=a.length
r=d.length
q=new Float32Array(s*16*r)
for(s=d.length,r=t.b,p=r.length,o=0,n=0;n<d.length;d.length===s||(0,H.G)(d),++n){L.k5(a,b,c,t,d[n])
for(m=0;m<p;++m){l=r[m]
for(k=0;k<16;++k)q[o+k]=l.a[k]
o+=16}}return q},
jJ:function(a,b){var t,s
for(t=0;t<a.length-1;t=s){s=t+1
if(C.c.H(b,a[s]))return t}return 0},
aZ:function aZ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
e2:function e2(a,b){this.a=a
this.b=b},
ce:function ce(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
hc:function hc(a,b,c){this.a=a
this.b=b
this.c=c}},G={
nI:function(a){var t,s,r
t=H.v(a.split("\n"),[P.l])
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.d(t[s])}return C.a.aa(t,"\n")},
lt:function(a,b,c){var t,s,r,q
t=J.h(a)
s=t.cs(a,b)
t.bC(a,s,c)
t.cp(a,s)
r=t.bw(a,s,35713)
if(r!=null&&!r){q=t.bv(a,s)
P.O("E:Compilation failed:")
P.O("E:"+G.nI(c))
P.O("E:Failure:")
P.O(C.i.a2("E:",q))
throw H.c(q)}return s},
l4:function(a){var t=new G.fv(P.Y(),a,!1,!0)
t.dO(a)
return t},
eT:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.jE(a[s])
b[t+1]=J.jF(a[s])
b[t+2]=J.kv(a[s])}return b},
n7:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.jE(a[s])
b[t+1]=J.jF(a[s])}return b},
n8:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.jE(a[s])
b[t+1]=J.jF(a[s])
b[t+2]=J.kv(a[s])
b[t+3]=J.mw(a[s])}return b},
n6:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.X(a[s],0)
b[t+1]=J.X(a[s],1)
b[t+2]=J.X(a[s],2)
b[t+3]=J.X(a[s],3)}return b},
l5:function(a,b,c,d){return new G.fx(b,J.mh(b.a),c,P.Y(),d,null,0,-1,null,null,P.Y(),"meshdata:"+a,!1,!0)},
nQ:function(a,b){var t,s,r,q,p,o,n,m,l,k
for(t=a.e,s=t.gA(t),s=s.gv(s),r=b.x,q=[[P.i,P.x]],p=[P.a2],o=[T.T],n=[T.o],m=[T.ac];s.p();){l=s.gq(s)
if(!r.u(0,l)){l="Dropping unnecessary attribute: "+H.d(l)
if($.lQ>0)H.dX("I: "+l)
continue}k=t.h(0,l)
switch($.$get$V().h(0,l).a){case"vec2":b.ah(l,G.n7(H.dY(k,"$isi",m,"$asi"),null),2)
break
case"vec3":b.ah(l,G.eT(H.dY(k,"$isi",n,"$asi"),null),3)
break
case"vec4":b.ah(l,G.n8(H.dY(k,"$isi",o,"$asi"),null),4)
break
case"float":b.ah(l,new Float32Array(H.iW(H.dY(k,"$isi",p,"$asi"))),1)
break
case"uvec4":b.ah(l,G.n6(H.dY(k,"$isi",q,"$asi"),null),4)
break
default:if(H.W(!1))H.a1("unknown type for "+H.d(l)+" ["+J.mt(k[0]).k(0)+"] ["+new H.av(H.j8(k),null).k(0)+"] "+H.d(k))}}},
nn:function(a,b,c){var t,s,r,q
t=G.l5(a,b.d,1,b.e.x)
t.aA(G.eT(c,null))
s=new Array(c.length)
s.fixed$length=Array
r=H.v(s,[P.x])
for(s=c.length,q=0;q<s;++q)r[q]=q
t.bH(r)
return t},
k_:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.aJ(null,null,null,P.l)
s=c.b
r=d.b
q=c.f
p=J.mg(b.a)
o=G.lt(b.a,35633,s)
J.kr(b.a,p,o)
n=G.lt(b.a,35632,r)
J.kr(b.a,p,n)
if(q.length>0)J.mJ(b.a,p,q,35980)
J.mA(b.a,p)
if(!J.mz(b.a,p,35714))H.K(J.my(b.a,p))
t=new G.h4(b,c,d,p,P.jV(c.c,null),P.Y(),P.Y(),t,null,a,!1,!0)
t.dS(a,b,c,d)
return t},
bF:function(a){return new G.hb(a,null,[],[],[],[],0,P.Y())},
nE:function(){return new G.d1(!1,!1,!1,!0,1,9729,9729)},
fA:function fA(){},
d6:function d6(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
e7:function e7(){},
ea:function ea(a,b){this.a=a
this.b=b},
eY:function eY(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eP:function eP(a,b,c){this.a=a
this.b=b
this.c=c},
f0:function f0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
d3:function d3(a,b,c){this.a=a
this.b=b
this.c=c},
d2:function d2(a,b,c){this.a=a
this.b=b
this.c=c},
fv:function fv(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
fx:function fx(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
fU:function fU(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
h4:function h4(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
A:function A(a,b,c){this.a=a
this.b=b
this.c=c},
hb:function hb(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
he:function he(){},
d1:function d1(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bL:function bL(){},
hI:function hI(a,b,c,d,e,f,g,h){var _=this
_.f=a
_.r=b
_.x=c
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f4:function f4(a,b,c,d,e,f){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f}},Y={
ka:function(a){var t,s,r,q
t=J.z(a)
s=new Array(t.gi(a))
s.fixed$length=Array
r=H.v(s,[P.a2])
for(q=0;C.b.H(q,t.gi(a));++q){s=t.h(a,q)
if(typeof s==="number"&&Math.floor(s)===s)r[q]=J.Q(t.h(a,q))
else{s=t.h(a,q)
if(typeof s==="number")r[q]=t.h(a,q)
else if(H.W(!1))H.a1("bad numeric type ["+H.d(t.h(a,q))+"]")}}return r},
nT:function(a){var t,s,r,q
t=J.z(a)
s=new Array(t.gi(a))
s.fixed$length=Array
r=H.v(s,[P.x])
for(q=0;C.b.H(q,t.gi(a));++q)r[q]=t.h(a,q)
return r},
nU:function(a){var t,s,r,q
t=J.z(a)
s=new Array(t.gi(a))
s.fixed$length=Array
r=H.v(s,[[P.i,P.x]])
for(q=0;C.b.H(q,t.gi(a));++q)r[q]=Y.nT(t.h(a,q))
return r},
nc:function(a0,a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
t=[]
s=new G.f0(!1,t,[],[],P.Y())
r=J.z(a0)
q=r.h(a0,"name")
if(H.W(r.u(a0,"vertices")))H.a1("no vertices")
s.aA(Y.ec(r.h(a0,"vertices")))
if(r.u(a0,"normals")){s.a6("aNormal")
s.aS("aNormal",Y.ec(r.h(a0,"normals")))}if(r.u(a0,"texturecoords")){H.b(J.ax(r.h(a0,"texturecoords"))===1)
s.a6("aTexUV")
s.dD("aTexUV",Y.mY(J.X(r.h(a0,"texturecoords"),0)))}if(r.u(a0,"tangents")){s.a6("aTangent")
s.aS("aTangent",Y.ec(r.h(a0,"tangents")))}if(r.u(a0,"bitangents")){s.a6("aBitangent")
s.aS("aBitangent",Y.ec(r.h(a0,"bitangents")))}p=Y.nU(r.h(a0,"faces"))
if(H.W(!0))H.a1("no faces")
for(o=p.length,n=0;n<o;++n){m=p[n]
H.b(m.length===3)
l=m[0]
k=m[1]
j=m[2]
H.b(!0)
C.a.l(t,new G.eP(l,k,j))}i=P.fm(P.l,L.aZ)
C.a.P(a1,new Y.f6(i))
t=C.c.F(J.ax(r.h(a0,"normals")),3)
o=new Array(t)
o.fixed$length=Array
l=[T.T]
h=H.v(o,l)
o=new Array(t)
o.fixed$length=Array
g=H.v(o,l)
for(f=0;f<t;++f){h[f]=new T.T(new Float32Array(4))
g[f]=new T.T(new Float32Array(4))}for(t=J.P(r.h(a0,"bones"));t.p();){o=t.gq(t)
l=J.z(o)
H.b(i.u(0,l.h(o,"name")))
e=i.h(0,l.h(o,"name"))
k=e.c
j=Y.ka(l.h(o,"offsetmatrix"))
d=k.a
d[15]=j[15]
d[14]=j[14]
d[13]=j[13]
d[12]=j[12]
d[11]=j[11]
d[10]=j[10]
d[9]=j[9]
d[8]=j[8]
d[7]=j[7]
d[6]=j[6]
d[5]=j[5]
d[4]=j[4]
d[3]=j[3]
d[2]=j[2]
d[1]=j[1]
d[0]=j[0]
k.cV()
if(l.u(o,"weights")){c=e.d
for(o=J.P(l.h(o,"weights"));o.p();){l=o.gq(o)
k=J.z(l)
b=k.h(l,0)
for(a=0;a<4;++a)if(C.a.h(g,b).a[a]===0)break
H.b(a!==4)
j=C.a.h(g,b)
l=J.Q(k.h(l,1))
j.a[a]=l
C.a.h(h,b).a[a]=c}}}s.a6("aBoneIndex")
s.a6("aBoneWeight")
s.bG("aBoneIndex",h)
s.bG("aBoneWeight",g)
P.O("mesh "+H.d(q)+" "+s.k(0)+" "+H.d(r.gA(a0)))
return s},
nd:function(a){var t,s,r,q
t={}
s=H.v([],[L.aZ])
t.a=0
r=new Y.f7(t,s)
for(q=J.P(J.X(J.X(a,"rootnode"),"children"));q.p();)r.$2(q.gq(q),-1)
return s},
nb:function(a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
t=P.fm(P.l,L.aZ)
C.a.P(a4,new Y.f5(t))
s=J.z(a3)
r=s.h(a3,"name")
q=J.Q(s.h(a3,"tickspersecond"))
p=s.h(a3,"duration")
o=s.h(a3,"channels")
H.b(o!=null)
s=new Array(a4.length)
s.fixed$length=Array
s=H.v(s,[L.ce])
n=J.z(o)
P.O("animated bones: "+H.d(n.gi(o)))
for(n=n.gv(o);n.p();){m=n.gq(n)
l=J.z(m)
H.b(t.u(0,l.h(m,"name")))
k=t.h(0,l.h(m,"name"))
j=[]
i=[]
for(h=J.P(l.h(m,"positionkeys"));h.p();){g=h.gq(h)
f=J.z(g)
C.a.l(j,J.jx(f.h(g,0),q))
g=f.h(g,1)
f=J.z(g)
e=J.Q(f.h(g,0))
d=J.Q(f.h(g,1))
g=J.Q(f.h(g,2))
f=new Float32Array(3)
f[0]=e
f[1]=d
f[2]=g
C.a.l(i,new T.o(f))}c=[]
b=[]
for(h=J.P(l.h(m,"rotationkeys"));h.p();){g=h.gq(h)
f=J.z(g)
C.a.l(c,J.jx(f.h(g,0),q))
a=Y.ka(f.h(g,1))
g=a[1]
f=a[2]
e=a[3]
d=a[0]
a0=new Float32Array(4)
a0[0]=g
a0[1]=f
a0[2]=e
a0[3]=d
C.a.l(b,new T.cM(a0))}a1=[]
a2=[]
for(m=J.P(l.h(m,"scalingkeys"));m.p();){l=m.gq(m)
h=J.z(l)
C.a.l(a1,J.jx(h.h(l,0),q))
l=h.h(l,1)
h=J.z(l)
g=J.Q(h.h(l,0))
f=J.Q(h.h(l,1))
l=J.Q(h.h(l,2))
h=new Float32Array(3)
h[0]=g
h[1]=f
h[2]=l
C.a.l(a2,new T.o(h))}m=new L.ce(k,j,i,c,b,a1,a2)
l=j.length
if(l===0){m.seo([0])
l=new Float32Array(3)
l[0]=0
l[1]=0
l[2]=0
m.sep([new T.o(l)])}l=m.d
if(l==null||l.length===0){m.sez([0])
l=new Float32Array(4)
l[0]=0
l[1]=0
l[2]=0
l[3]=1
m.seA([new T.cM(l)])}l=m.f
if(l==null||l.length===0){m.seD([0])
l=new Float32Array(3)
l[0]=1
l[1]=1
l[2]=1
m.seE([new T.o(l)])}H.b(m.d.length>0)
H.b(m.b.length>0)
H.b(m.f.length>0)
H.b(m.d.length===m.e.length)
H.b(m.b.length===m.c.length)
H.b(m.f.length===m.r.length)
l=k.d
H.b(s[l]==null)
s[l]=m}return new L.hc(r,s,p)},
ec:function(a){var t,s,r,q,p,o,n,m
t=J.z(a)
s=new Array(C.b.F(t.gi(a),3))
s.fixed$length=Array
r=H.v(s,[T.o])
for(q=0;C.b.H(q,t.gi(a));q+=3){s=C.b.F(q,3)
p=J.Q(t.h(a,q))
o=J.Q(t.h(a,q+1))
n=J.Q(t.h(a,q+2))
m=new Float32Array(3)
m[0]=p
m[1]=o
m[2]=n
r[s]=new T.o(m)}return r},
mY:function(a){var t,s,r,q,p,o,n
t=J.z(a)
s=new Array(C.b.F(t.gi(a),2))
s.fixed$length=Array
r=H.v(s,[T.ac])
for(q=0;C.b.H(q,t.gi(a));q+=2){s=C.b.F(q,2)
p=J.Q(t.h(a,q))
o=J.Q(t.h(a,q+1))
n=new Float32Array(2)
n[0]=p
n[1]=o
r[s]=new T.ac(n)}return r},
f6:function f6(a){this.a=a},
f7:function f7(a,b){this.a=a
this.b=b},
f5:function f5(a){this.a=a}},R={
kG:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=[]
for(s=b.a,r=0;r<a.length;++r){q=a[r].e
if(q===-1)continue
p=s[r].a
o=p[14]
n=p[13]
m=p[12]
p=new Float32Array(3)
p[0]=m
p[1]=n
p[2]=o
l=new T.o(new Float32Array(3))
l.D(new T.o(p))
l.S(0,c)
C.a.l(t,l)
l=s[q].a
o=l[14]
n=l[13]
m=l[12]
p=new Float32Array(3)
p[0]=m
p[1]=n
p[2]=o
l=new T.o(new Float32Array(3))
l.D(new T.o(p))
l.S(0,c)
C.a.l(t,l)}return t},
e6:function e6(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cQ:function cQ(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
_.c=m},
hi:function hi(){},
hj:function hj(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},A={
l6:function(a,b){var t,s,r,q,p,o
t=new Float32Array(9)
s=new T.C(new Float32Array(16))
s.I()
r=new T.C(new Float32Array(16))
r.I()
q=new Float32Array(3)
p=new Float32Array(3)
o=new Float32Array(3)
t=new A.bB(null,null,[],new T.at(t),s,r,new T.o(q),new T.o(p),new T.o(o),new T.o(new Float32Array(3)),a,!1,!0)
t.dP(a,b)
return t},
lP:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
if(!b.c)return
t=b.dx
t.D(c)
s=b.d
t.ab(0,s)
r=b.ch
if(r!=null&&b.cx!=null){H.d(b)
q=C.a.gaJ(e)
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
p.f1(new T.at(o))
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
q.j(0,"uTransformationMatrix",s)
q.j(0,"uModelMatrix",t)
q.j(0,"uNormalMatrix",p)
C.a.l(e,r)
a.dJ(b.cx,e,d)
e.pop()}for(s=b.cy,r=s.length,l=0;l<s.length;s.length===r||(0,H.G)(s),++l)A.lP(a,s[l],t,d,e)},
bB:function bB(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
ba:function ba(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.a=d
_.b=e
_.c=f},
h3:function h3(){},
dV:function(a){var t,s
t=C.Y.fk(a,0,new A.j9())
s=536870911&t+(C.b.da(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
j9:function j9(){}},D={
np:function(a){var t,s
t=new P.F(0,$.w,null,[null])
s=new XMLHttpRequest()
C.x.fE(s,"GET",a)
W.a0(s,"loadend",new D.fp(new P.bN(t,[null]),s),!1,W.oK)
C.x.J(s,"")
return t},
no:function(a){var t,s,r
t=new P.F(0,$.w,null,[null])
s=document.createElement("img")
r=new W.bO(s,"load",!1,[W.f])
r.gbh(r).aL(new D.fo(new P.bN(t,[null]),s))
s.src=a
return t},
fp:function fp(a,b){this.a=a
this.b=b},
fo:function fo(a,b){this.a=a
this.b=b}},T={
nH:function(a,b,c){var t=new T.o(new Float32Array(3))
t.a3(a,b,c)
return t},
at:function at(a){this.a=a},
C:function C(a){this.a=a},
cM:function cM(a){this.a=a},
ac:function ac(a){this.a=a},
o:function o(a){this.a=a},
T:function T(a){this.a=a}},X={
ov:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
t={}
s=document
r=new R.hj(0,0,null,null,null,null)
r.dV(C.j.dd(s,"stats"),"blue","gray")
q=C.j.fG(s,"#webgl-canvas")
p=new G.ea(null,q)
o=(q&&C.J).dc(q,"webgl2",P.as(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
p.a=o
if(o==null)H.K(P.cp('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
n="ChronosGL Config: "+H.d(J.mx(o))
if($.lQ>0)P.O("I: "+n)
J.me(o,0,0,0,1)
J.c9(o,2929)
J.c9(o,2884)
m=B.nq(5000,0,0,q)
o=new T.C(new Float32Array(16))
o.I()
n=new T.C(new Float32Array(16))
n.I()
l=new G.fU(m,50,1,1,1e4,o,n,new T.C(new Float32Array(16)),P.Y(),"perspective",!1,!0)
l.bP()
o=G.k_("animation",p,$.$get$lH(),$.$get$lG())
k=new A.ba(o,[l],[],"animation",!1,!0)
n=G.k_("solid",p,$.$get$m_(),$.$get$lZ())
j=new A.ba(n,[l],[],"solid",!1,!0)
i=G.k_("demo",p,$.$get$lO(),$.$get$lN())
h=new A.ba(i,[l],[],"demo",!1,!0)
H.b(n.dM(o))
g=H.v([],[A.ba])
f=new R.cQ(q,l,null,p,g,17664,0,0,0,0,"main",!1,!0)
f.dR("main",p,null)
f.cM(null)
W.a0(window,"resize",f.gfK(),!1,W.f)
H.b(!0)
C.a.l(g,j)
H.b(!0)
C.a.l(g,k)
H.b(!0)
C.a.l(g,h)
e=G.l4("wire")
e.a1("uColor",$.$get$kN())
d=G.l4("mat")
t.a=null
t.b=null
t.c=null
c=P.as(["idSkeleton",n,"idStatic",i,"idAnimation",o])
for(o=C.j.br(s,"input"),n=o.length,b=0;b<o.length;o.length===n||(0,H.G)(o),++b){i=J.mr(o[b])
W.a0(i.a,i.b,new X.jl(c),!1,H.a6(i,0))}for(o=C.j.br(s,"input"),n=o.length,b=0;b<o.length;o.length===n||(0,H.G)(o),++b){a=o[b]
i=J.h(a)
H.dX("initialize inputs "+H.d(i.gfq(a)))
a0=C.j.ec(s,"Event")
J.m6(a0,"change",!0,!0)
i.ff(a,a0)}t.d=0
d.d.j(0,"uTime",0)
P.na([D.np("../asset/monster/monster.json"),D.no("../asset/monster/monster.jpg")],null,!1).aL(new X.jm(t,p,d,k,h,j,e,new X.jk(t,m,f,r,d)))},
jl:function jl(a){this.a=a},
jk:function jk(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jm:function jm(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h}}
var v=[C,H,J,P,W,B,L,G,Y,R,A,D,T,X]
setFunctionNamesIfNecessary(v)
var $={}
H.jQ.prototype={}
J.a.prototype={
B:function(a,b){return a===b},
gw:function(a){return H.aM(a)},
k:function(a){return"Instance of '"+H.bD(a)+"'"},
gC:function(a){return new H.av(H.j8(a),null)}}
J.fc.prototype={
k:function(a){return String(a)},
gw:function(a){return a?519018:218159},
gC:function(a){return C.as},
$isao:1}
J.fd.prototype={
B:function(a,b){return null==b},
k:function(a){return"null"},
gw:function(a){return 0},
gC:function(a){return C.am},
$isL:1}
J.bv.prototype={
gw:function(a){return 0},
gC:function(a){return C.al},
k:function(a){return String(a)},
$isl1:1}
J.fV.prototype={}
J.aQ.prototype={}
J.aH.prototype={
k:function(a){var t=a[$.$get$kP()]
return t==null?this.dA(a):J.bp(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isjO:1}
J.aF.prototype={
l:function(a,b){if(!!a.fixed$length)H.K(P.t("add"))
a.push(b)},
N:function(a,b){var t,s,r,q,p
t=a.length
if(!!a.fixed$length)H.K(P.t("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.G)(b),++r,t=p){q=b[r]
p=t+1
H.b(t===a.length||H.K(P.a8(a)))
a.push(q)}},
P:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){b.$1(a[s])
if(a.length!==t)throw H.c(P.a8(a))}},
cJ:function(a,b){return new H.bx(a,b,[H.a6(a,0),null])},
aa:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.d(a[s])
return t.join(b)},
t:function(a,b){return this.h(a,b)},
gbh:function(a){if(a.length>0)return a[0]
throw H.c(H.cw())},
gaJ:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.c(H.cw())},
bA:function(a,b,c,d,e){var t,s,r
if(!!a.immutable$list)H.K(P.t("setRange"))
P.lb(b,c,a.length,null,null,null)
t=C.b.a5(c,b)
if(t===0)return
if(e<0)H.K(P.aN(e,0,null,"skipCount",null))
s=J.z(d)
if(C.b.W(e+t,s.gi(d)))throw H.c(H.nl())
if(C.b.H(e,b))for(r=t-1;r>=0;--r)a[b+r]=s.h(d,e+r)
else for(r=0;r<t;++r)a[b+r]=s.h(d,e+r)},
cd:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.c(P.a8(a))}return!1},
dt:function(a,b){if(!!a.immutable$list)H.K(P.t("sort"))
H.nD(a,P.oh())},
aO:function(a){return this.dt(a,null)},
E:function(a,b){var t
for(t=0;t<a.length;++t)if(J.E(a[t],b))return!0
return!1},
k:function(a){return P.fb(a,"[","]")},
gv:function(a){return new J.cc(a,a.length,0,null,[H.a6(a,0)])},
gw:function(a){return H.aM(a)},
gi:function(a){return a.length},
si:function(a,b){if(!!a.fixed$length)H.K(P.t("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.jI(b,"newLength",null))
if(b<0)throw H.c(P.aN(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.bl(a,b))
if(b>=a.length||b<0)throw H.c(H.bl(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.K(P.t("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.bl(a,b))
if(b>=a.length||b<0)throw H.c(H.bl(a,b))
a[b]=c},
$isq:1,
$asq:function(){},
$isj:1,
$isi:1}
J.jP.prototype={}
J.cc.prototype={
gq:function(a){return this.d},
p:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.c(H.G(t))
r=this.c
if(r>=s){this.sbR(null)
return!1}this.sbR(t[r]);++this.c
return!0},
sbR:function(a){this.d=a}}
J.b7.prototype={
U:function(a,b){var t
if(typeof b!=="number")throw H.c(H.M(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaH(b)
if(this.gaH(a)===t)return 0
if(this.gaH(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaH:function(a){return a===0?1/a<0:a<0},
eW:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.c(P.t(""+a+".ceil()"))},
fj:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.c(P.t(""+a+".floor()"))},
ac:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.t(""+a+".round()"))},
eX:function(a,b,c){if(this.U(b,c)>0)throw H.c(H.M(b))
if(this.U(a,b)<0)return b
if(this.U(a,c)>0)return c
return a},
fP:function(a){return a},
fT:function(a,b){var t
if(b>20)throw H.c(P.aN(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gaH(a))return"-"+t
return t},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gw:function(a){return a&0x1FFFFFFF},
a2:function(a,b){if(typeof b!=="number")throw H.c(H.M(b))
return a+b},
a5:function(a,b){if(typeof b!=="number")throw H.c(H.M(b))
return a-b},
ae:function(a,b){if(typeof b!=="number")throw H.c(H.M(b))
return a/b},
L:function(a,b){if(typeof b!=="number")throw H.c(H.M(b))
return a*b},
by:function(a,b){var t
if(typeof b!=="number")throw H.c(H.M(b))
t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
aQ:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.c9(a,b)},
F:function(a,b){return(a|0)===a?a/b|0:this.c9(a,b)},
c9:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.c(P.t("Result of truncating division is "+H.d(t)+": "+H.d(a)+" ~/ "+b))},
b6:function(a,b){var t
if(a>0)t=this.eF(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
eF:function(a,b){return b>31?0:a>>>b},
da:function(a,b){if(typeof b!=="number")throw H.c(H.M(b))
return(a&b)>>>0},
dC:function(a,b){if(typeof b!=="number")throw H.c(H.M(b))
return(a^b)>>>0},
H:function(a,b){if(typeof b!=="number")throw H.c(H.M(b))
return a<b},
W:function(a,b){if(typeof b!=="number")throw H.c(H.M(b))
return a>b},
bq:function(a,b){if(typeof b!=="number")throw H.c(H.M(b))
return a>=b},
gC:function(a){return C.av},
$isH:1,
$asH:function(){return[P.af]},
$isa2:1,
$isaf:1}
J.cz.prototype={
gC:function(a){return C.au},
$isx:1}
J.cy.prototype={
gC:function(a){return C.at}}
J.aG.prototype={
aW:function(a,b){if(b>=a.length)throw H.c(H.bl(a,b))
return a.charCodeAt(b)},
a2:function(a,b){if(typeof b!=="string")throw H.c(P.jI(b,null,null))
return a+b},
du:function(a,b,c){var t
if(c>a.length)throw H.c(P.aN(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bD:function(a,b){return this.du(a,b,0)},
bF:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.h_(b,null,null))
if(b>c)throw H.c(P.h_(b,null,null))
if(c>a.length)throw H.c(P.h_(c,null,null))
return a.substring(b,c)},
dv:function(a,b){return this.bF(a,b,null)},
fS:function(a){return a.toLowerCase()},
f_:function(a,b,c){if(c>a.length)throw H.c(P.aN(c,0,a.length,null,null))
return H.oD(a,b,c)},
U:function(a,b){var t
if(typeof b!=="string")throw H.c(H.M(b))
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
gi:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.c(H.bl(a,b))
return a[b]},
$isq:1,
$asq:function(){},
$isH:1,
$asH:function(){return[P.l]},
$isl:1}
H.j.prototype={}
H.aK.prototype={
gv:function(a){return new H.cB(this,this.gi(this),0,null,[H.a3(this,"aK",0)])},
aM:function(a,b){return this.dz(0,b)},
fR:function(a,b){var t,s
t=H.v([],[H.a3(this,"aK",0)])
C.a.si(t,this.gi(this))
for(s=0;C.b.H(s,this.gi(this));++s)t[s]=this.t(0,s)
return t},
fQ:function(a){return this.fR(a,!0)}}
H.cB.prototype={
gq:function(a){return this.d},
p:function(){var t,s,r,q
t=this.a
s=J.z(t)
r=s.gi(t)
q=this.b
if(q==null?r!=null:q!==r)throw H.c(P.a8(t))
if(C.b.bq(this.c,r)){this.sal(null)
return!1}this.sal(s.t(t,this.c));++this.c
return!0},
sal:function(a){this.d=a}}
H.cC.prototype={
gv:function(a){return new H.ft(null,J.P(this.a),this.b,this.$ti)},
gi:function(a){return J.ax(this.a)},
$asR:function(a,b){return[b]}}
H.eu.prototype={$isj:1,
$asj:function(a,b){return[b]}}
H.ft.prototype={
p:function(){var t=this.b
if(t.p()){this.sal(this.c.$1(t.gq(t)))
return!0}this.sal(null)
return!1},
gq:function(a){return this.a},
sal:function(a){this.a=a},
$ascx:function(a,b){return[b]}}
H.bx.prototype={
gi:function(a){return J.ax(this.a)},
t:function(a,b){return this.b.$1(J.mn(this.a,b))},
$asj:function(a,b){return[b]},
$asaK:function(a,b){return[b]},
$asR:function(a,b){return[b]}}
H.d7.prototype={
gv:function(a){return new H.hS(J.P(this.a),this.b,this.$ti)}}
H.hS.prototype={
p:function(){var t,s
for(t=this.a,s=this.b;t.p();)if(s.$1(t.gq(t)))return!0
return!1},
gq:function(a){var t=this.a
return t.gq(t)}}
H.b3.prototype={}
H.ju.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.jv.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.iC.prototype={
sfw:function(a){this.z=a},
sfB:function(a){this.ch=a}}
H.bf.prototype={
e2:function(){var t,s
t=this.e
s=t.a
this.c.l(0,s)
this.e7(s,t)},
cc:function(a,b){if(!this.f.B(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.be()},
fJ:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.av(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.c3();++r.d}this.y=!1}this.be()},
eL:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.p(a),s=0;r=this.ch,s<r.length;s+=2)if(t.B(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
fI:function(a){var t,s,r
if(this.ch==null)return
for(t=J.p(a),s=0;r=this.ch,s<r.length;s+=2)if(t.B(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.K(P.t("removeRange"))
P.lb(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
dq:function(a,b){if(!this.r.B(0,a))return
this.db=b},
fo:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.J(0,c)
return}H.b(b===1)
t=this.cx
if(t==null){t=P.jW(null,null)
this.cx=t}t.X(0,new H.iu(a,c))},
fn:function(a,b){var t
if(!this.r.B(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.aI()
return}H.b(b===1)
t=this.cx
if(t==null){t=P.jW(null,null)
this.cx=t}t.X(0,this.gfz())},
fp:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.O(a)
if(b!=null)P.O(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.bp(a)
s[1]=b==null?null:b.k(0)
for(r=new P.bR(t,t.r,null,null,[null]),r.c=t.e;r.p();)r.d.J(0,s)},
ar:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.J(o)
p=H.ae(o)
this.fp(q,p)
if(this.db){this.aI()
if(this===u.globalState.e)throw o}}finally{this.cy=H.oc(r)
u.globalState.d=H.kk(t,"$isbf")
if(t!=null)$=t.gfv()
if(this.cx!=null)for(;n=this.cx,!n.gau(n);)this.cx.cL().$0()}return s},
cI:function(a){return this.b.h(0,a)},
e7:function(a,b){var t=this.b
if(t.u(0,a))throw H.c(P.cp("Registry: ports must be registered only once."))
t.j(0,a,b)},
be:function(){var t=this.b
if(t.gi(t)-this.c.a>0||this.y||!this.x)u.globalState.z.j(0,this.a,this)
else this.aI()},
aI:function(){var t,s,r
t=this.cx
if(t!=null)t.Z(0)
for(t=this.b,s=t.gd6(t),s=s.gv(s);s.p();)s.gq(s).e9()
t.Z(0)
this.c.Z(0)
u.globalState.z.av(0,this.a)
this.dx.Z(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].J(0,t[r+1])
this.ch=null}},
gfv:function(){return this.d},
gf0:function(){return this.e}}
H.iu.prototype={
$0:function(){this.a.J(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.i8.prototype={
fa:function(){var t=this.a
if(t.b===t.c)return
return t.cL()},
cP:function(){var t,s,r
t=this.fa()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.u(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gau(s)}else s=!1
else s=!1
else s=!1
if(s)H.K(P.cp("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gau(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.as(["command","close"])
r=new H.ad(!0,P.bg(null,P.x)).M(r)
s.toString
self.postMessage(r)}return!1}t.fF()
return!0},
c7:function(){if(self.window!=null)new H.i9(this).$0()
else for(;this.cP(););},
aw:function(){var t,s,r,q,p
if(!u.globalState.x)this.c7()
else try{this.c7()}catch(r){t=H.J(r)
s=H.ae(r)
q=u.globalState.Q
p=P.as(["command","error","msg",H.d(t)+"\n"+H.d(s)])
p=new H.ad(!0,P.bg(null,P.x)).M(p)
q.toString
self.postMessage(p)}}}
H.i9.prototype={
$0:function(){if(!this.a.cP())return
P.nG(C.w,this)},
$S:function(){return{func:1,v:true}}}
H.aT.prototype={
fF:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.ar(this.b)}}
H.iB.prototype={}
H.f9.prototype={
$0:function(){H.nh(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.fa.prototype={
$0:function(){var t,s
t=this.a
t.x=!0
if(!this.b)this.c.$1(this.d)
else{s=this.c
if(H.bm(s,{func:1,args:[P.L,P.L]}))s.$2(this.e,this.d)
else if(H.bm(s,{func:1,args:[P.L]}))s.$1(this.e)
else s.$0()}t.be()},
$S:function(){return{func:1,v:true}}}
H.i2.prototype={}
H.bh.prototype={
J:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.nX(b)
if(t.gf0()===s){s=J.z(r)
switch(s.h(r,0)){case"pause":t.cc(s.h(r,1),s.h(r,2))
break
case"resume":t.fJ(s.h(r,1))
break
case"add-ondone":t.eL(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.fI(s.h(r,1))
break
case"set-errors-fatal":t.dq(s.h(r,1),s.h(r,2))
break
case"ping":t.fo(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.fn(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.av(0,s)
break}return}u.globalState.f.a.X(0,new H.aT(t,new H.iD(this,r),"receive"))},
B:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bh){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gw:function(a){return this.b.a}}
H.iD.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.e5(0,this.b)},
$S:function(){return{func:1}}}
H.c1.prototype={
J:function(a,b){var t,s,r
t=P.as(["command","message","port",this,"msg",b])
s=new H.ad(!0,P.bg(null,P.x)).M(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
B:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.c1){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gw:function(a){return C.b.dC((this.b<<16^this.a<<8)>>>0,this.c)}}
H.cP.prototype={
e9:function(){this.c=!0
this.b=null},
e5:function(a,b){if(this.c)return
this.b.$1(b)},
$isny:1}
H.hz.prototype={
dW:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.X(0,new H.aT(s,new H.hA(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){H.j4()
this.c=self.setTimeout(H.aw(new H.hB(this,b),0),a)}else{H.b(a>0)
throw H.c(P.t("Timer greater than 0."))}}}
H.hA.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.hB.prototype={
$0:function(){var t=this.a
t.c=null
H.jj()
t.d=1
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.aA.prototype={
gw:function(a){var t=this.a
t=C.b.b6(t,0)^C.b.F(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
B:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.aA){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.ad.prototype={
M:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.j(0,a,t.gi(t))
t=J.p(a)
if(!!t.$isbA)return["buffer",a]
if(!!t.$isb8)return["typed",a]
if(!!t.$isq)return this.dk(a)
if(!!t.$isne){r=this.gdh()
q=t.gA(a)
q=H.jX(q,r,H.a3(q,"R",0),null)
q=P.l2(q,!0,H.a3(q,"R",0))
t=t.gd6(a)
t=H.jX(t,r,H.a3(t,"R",0),null)
return["map",q,P.l2(t,!0,H.a3(t,"R",0))]}if(!!t.$isl1)return this.dl(a)
if(!!t.$isa)this.d4(a)
if(!!t.$isny)this.ax(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isbh)return this.dm(a)
if(!!t.$isc1)return this.dn(a)
if(!!t.$isaC){p=a.$static_name
if(p==null)this.ax(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isaA)return["capability",a.a]
if(!(a instanceof P.D))this.d4(a)
return["dart",u.classIdExtractor(a),this.dj(u.classFieldsExtractor(a))]},
ax:function(a,b){throw H.c(P.t((b==null?"Can't transmit:":b)+" "+H.d(a)))},
d4:function(a){return this.ax(a,null)},
dk:function(a){var t
H.b(typeof a!=="string")
t=this.di(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.ax(a,"Can't serialize indexable: ")},
di:function(a){var t,s
t=[]
C.a.si(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.M(a[s])
return t},
dj:function(a){var t
for(t=0;t<a.length;++t)C.a.j(a,t,this.M(a[t]))
return a},
dl:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.ax(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.si(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.M(a[t[r]])
return["js-object",t,s]},
dn:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
dm:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.aS.prototype={
a_:function(a){var t,s,r,q
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.c(P.cb("Bad serialized message: "+H.d(a)))
switch(C.a.gbh(a)){case"ref":H.b(J.E(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.b(J.E(a[0],"buffer"))
t=a[1]
C.a.l(this.b,t)
return t
case"typed":H.b(J.E(a[0],"typed"))
t=a[1]
C.a.l(this.b,t)
return t
case"fixed":H.b(J.E(a[0],"fixed"))
t=a[1]
C.a.l(this.b,t)
return J.ar(H.v(this.aq(t),[null]))
case"extendable":H.b(J.E(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.v(this.aq(t),[null])
case"mutable":H.b(J.E(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.aq(t)
case"const":H.b(J.E(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
return J.ar(H.v(this.aq(t),[null]))
case"map":return this.fd(a)
case"sendport":return this.fe(a)
case"raw sendport":H.b(J.E(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.fc(a)
case"function":H.b(J.E(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.b(J.E(a[0],"capability"))
return new H.aA(a[1])
case"dart":H.b(J.E(a[0],"dart"))
s=a[1]
r=a[2]
q=u.instanceFromClassId(s)
C.a.l(this.b,q)
this.aq(r)
return u.initializeEmptyInstance(s,q,r)
default:throw H.c("couldn't deserialize: "+H.d(a))}},
aq:function(a){var t
for(t=0;t<a.length;++t)C.a.j(a,t,this.a_(a[t]))
return a},
fd:function(a){var t,s,r,q,p
H.b(J.E(a[0],"map"))
t=a[1]
s=a[2]
r=P.Y()
C.a.l(this.b,r)
t=J.mB(t,this.gfb()).fQ(0)
for(q=J.z(s),p=0;p<t.length;++p)r.j(0,t[p],this.a_(q.h(s,p)))
return r},
fe:function(a){var t,s,r,q,p,o,n
H.b(J.E(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.cI(r)
if(o==null)return
n=new H.bh(o,s)}else n=new H.c1(t,r,s)
C.a.l(this.b,n)
return n},
fc:function(a){var t,s,r,q,p,o
H.b(J.E(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.z(t),p=J.z(s),o=0;C.b.H(o,q.gi(t));++o)r[q.h(t,o)]=this.a_(p.h(s,o))
return r}}
H.h2.prototype={}
H.hF.prototype={
R:function(a){var t,s,r
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
H.fL.prototype={
k:function(a){var t=this.b
if(t==null)return"NullError: "+H.d(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.ff.prototype={
k:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.d(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.d(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.d(this.a)+")"}}
H.hK.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.jw.prototype={
$1:function(a){if(!!J.p(a).$isb2)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(a){return{func:1,args:[,]}}}
H.dz.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t},
$isbb:1}
H.je.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.jf.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.jg.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.jh.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.ji.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.aC.prototype={
k:function(a){return"Closure '"+H.bD(this).trim()+"'"},
$isjO:1,
gfX:function(){return this},
$D:null}
H.hv.prototype={}
H.hh.prototype={
k:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bq.prototype={
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bq))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gw:function(a){var t,s
t=this.c
if(t==null)s=H.aM(this.a)
else s=typeof t!=="object"?J.bo(t):H.aM(t)
return(s^H.aM(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.bD(t)+"'")}}
H.hH.prototype={
k:function(a){return this.a}}
H.e9.prototype={
k:function(a){return this.a}}
H.h7.prototype={
k:function(a){return"RuntimeError: "+H.d(this.a)}}
H.hX.prototype={
k:function(a){return C.i.a2("Assertion failed: ",P.co(this.a))}}
H.av.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gw:function(a){return J.bo(this.a)},
B:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.av){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.ai.prototype={
gi:function(a){return this.a},
gau:function(a){return this.a===0},
gA:function(a){return new H.fk(this,[H.a6(this,0)])},
gd6:function(a){return H.jX(this.gA(this),new H.fe(this),H.a6(this,0),H.a6(this,1))},
u:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.c1(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.c1(s,b)}else return this.fs(b)},
fs:function(a){var t=this.d
if(t==null)return!1
return this.at(this.aE(t,this.as(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.am(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.am(r,b)
return s==null?null:s.b}else return this.ft(b)},
ft:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.aE(t,this.as(a))
r=this.at(s,a)
if(r<0)return
return s[r].b},
j:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.b3()
this.b=t}this.bT(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.b3()
this.c=s}this.bT(s,b,c)}else{r=this.d
if(r==null){r=this.b3()
this.d=r}q=this.as(b)
p=this.aE(r,q)
if(p==null)this.b5(r,q,[this.b4(b,c)])
else{o=this.at(p,b)
if(o>=0)p[o].b=c
else p.push(this.b4(b,c))}}},
av:function(a,b){if(typeof b==="string")return this.c6(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.c6(this.c,b)
else return this.fu(b)},
fu:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.aE(t,this.as(a))
r=this.at(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.ca(q)
return q.b},
Z:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.b2()}},
P:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.c(P.a8(this))
t=t.c}},
bT:function(a,b,c){var t=this.am(a,b)
if(t==null)this.b5(a,b,this.b4(b,c))
else t.b=c},
c6:function(a,b){var t
if(a==null)return
t=this.am(a,b)
if(t==null)return
this.ca(t)
this.c2(a,b)
return t.b},
b2:function(){this.r=this.r+1&67108863},
b4:function(a,b){var t,s
t=new H.fj(a,b,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.b2()
return t},
ca:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.b2()},
as:function(a){return J.bo(a)&0x3ffffff},
at:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.E(a[s].a,b))return s
return-1},
k:function(a){return P.l3(this)},
am:function(a,b){return a[b]},
aE:function(a,b){return a[b]},
b5:function(a,b,c){H.b(c!=null)
a[b]=c},
c2:function(a,b){delete a[b]},
c1:function(a,b){return this.am(a,b)!=null},
b3:function(){var t=Object.create(null)
this.b5(t,"<non-identifier-key>",t)
this.c2(t,"<non-identifier-key>")
return t},
$isne:1}
H.fe.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(a){return{func:1,args:[,]}}}
H.fj.prototype={}
H.fk.prototype={
gi:function(a){return this.a.a},
gv:function(a){var t,s
t=this.a
s=new H.fl(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.fl.prototype={
gq:function(a){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.a8(t))
else{t=this.c
if(t==null){this.sbS(null)
return!1}else{this.sbS(t.a)
this.c=this.c.c
return!0}}},
sbS:function(a){this.d=a}}
H.ja.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[,]}}}
H.jb.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(a,b){return{func:1,args:[,P.l]}}}
H.jc.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[P.l]}}}
H.bA.prototype={
gC:function(a){return C.ae},
$isbA:1}
H.b8.prototype={$isb8:1}
H.fB.prototype={
gC:function(a){return C.af}}
H.cF.prototype={
gi:function(a){return a.length},
$isq:1,
$asq:function(){},
$isu:1,
$asu:function(){}}
H.cG.prototype={
h:function(a,b){H.an(b,a,a.length)
return a[b]},
j:function(a,b,c){H.an(b,a,a.length)
a[b]=c},
$isj:1,
$asj:function(){return[P.a2]},
$asb3:function(){return[P.a2]},
$asm:function(){return[P.a2]},
$isi:1,
$asi:function(){return[P.a2]}}
H.cH.prototype={
j:function(a,b,c){H.an(b,a,a.length)
a[b]=c},
$isj:1,
$asj:function(){return[P.x]},
$asb3:function(){return[P.x]},
$asm:function(){return[P.x]},
$isi:1,
$asi:function(){return[P.x]}}
H.cE.prototype={
gC:function(a){return C.ag},
$iseU:1}
H.fC.prototype={
gC:function(a){return C.ah}}
H.fD.prototype={
gC:function(a){return C.ai},
h:function(a,b){H.an(b,a,a.length)
return a[b]}}
H.fE.prototype={
gC:function(a){return C.aj},
h:function(a,b){H.an(b,a,a.length)
return a[b]},
$iskZ:1}
H.fF.prototype={
gC:function(a){return C.ak},
h:function(a,b){H.an(b,a,a.length)
return a[b]}}
H.fG.prototype={
gC:function(a){return C.ao},
h:function(a,b){H.an(b,a,a.length)
return a[b]},
$islq:1}
H.fH.prototype={
gC:function(a){return C.ap},
h:function(a,b){H.an(b,a,a.length)
return a[b]},
$islr:1}
H.cI.prototype={
gC:function(a){return C.aq},
gi:function(a){return a.length},
h:function(a,b){H.an(b,a,a.length)
return a[b]}}
H.fI.prototype={
gC:function(a){return C.ar},
gi:function(a){return a.length},
h:function(a,b){H.an(b,a,a.length)
return a[b]},
$isls:1}
H.bT.prototype={}
H.bU.prototype={}
H.bV.prototype={}
H.bW.prototype={}
P.hZ.prototype={
$1:function(a){var t,s
H.jj()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(a){return{func:1,args:[,]}}}
P.hY.prototype={
$1:function(a){var t,s
t=this.a
H.b(t.a==null)
H.j4()
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(a){return{func:1,args:[{func:1,v:true}]}}}
P.i_.prototype={
$0:function(){H.jj()
this.a.$0()},
$S:function(){return{func:1}}}
P.i0.prototype={
$0:function(){H.jj()
this.a.$0()},
$S:function(){return{func:1}}}
P.a5.prototype={}
P.f_.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.c)this.d.K(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.c)this.d.K(t.c,t.d)},
$S:function(a,b){return{func:1,args:[,,]}}}
P.eZ.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){r[this.b]=a
if(s===0)this.c.c0(r)}else if(t.b===0&&!this.e)this.c.K(t.c,t.d)},
$S:function(a){return{func:1,args:[,]}}}
P.jL.prototype={}
P.i3.prototype={
eZ:function(a,b){if(a==null)a=new P.b9()
if(this.a.a!==0)throw H.c(P.cW("Future already completed"))
$.w.toString
this.K(a,b)},
eY:function(a){return this.eZ(a,null)}}
P.bN.prototype={
ap:function(a,b){var t=this.a
if(t.a!==0)throw H.c(P.cW("Future already completed"))
t.bU(b)},
K:function(a,b){this.a.bV(a,b)}}
P.iP.prototype={
ap:function(a,b){var t=this.a
if(t.a!==0)throw H.c(P.cW("Future already completed"))
t.ak(b)},
K:function(a,b){this.a.K(a,b)}}
P.bP.prototype={
fC:function(a){if(this.c!==6)return!0
H.b(!0)
return this.b.b.bn(this.d,a.a)},
fm:function(a){var t,s
t=(this.c&2)!==0
if(t){H.b(t)
t=this.e!=null}else t=!1
H.b(t)
s=this.e
t=this.b.b
if(H.bm(s,{func:1,args:[P.D,P.bb]}))return t.fL(s,a.a,a.b)
else return t.bn(s,a.a)}}
P.F.prototype={
bo:function(a,b){var t,s,r
t=$.w
if(t!==C.d){t.toString
if(b!=null)b=P.o4(b,t)}s=new P.F(0,t,null,[null])
r=b==null?1:3
this.aU(new P.bP(null,s,r,a,b,[H.a6(this,0),null]))
return s},
aL:function(a){return this.bo(a,null)},
fW:function(a){var t,s
t=$.w
s=new P.F(0,t,null,this.$ti)
if(t!==C.d)t.toString
t=H.a6(this,0)
this.aU(new P.bP(null,s,8,a,null,[t,t]))
return s},
aV:function(a){H.b(this.a<4)
H.b(a.a>=4)
this.a=a.a
this.c=a.c},
aU:function(a){var t
H.b(a.a==null)
t=this.a
if(t<=1){a.a=H.kk(this.c,"$isbP")
this.c=a}else{if(t===2){H.b(!0)
t=this.c
if(t.a<4){t.aU(a)
return}this.aV(t)}H.b(this.a>=4)
t=this.b
t.toString
P.bj(null,null,t,new P.id(this,a))}},
c5:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.b(!0)
s=this.c
if(s.a<4){s.c5(a)
return}this.aV(s)}H.b(this.a>=4)
t.a=this.aG(a)
s=this.b
s.toString
P.bj(null,null,s,new P.im(t,this))}},
aF:function(){H.b(this.a<4)
var t=this.c
this.c=null
return this.aG(t)},
aG:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
ak:function(a){var t,s,r
H.b(this.a<4)
t=this.$ti
s=H.c5(a,"$isa5",t,"$asa5")
if(s){t=H.c5(a,"$isF",t,null)
if(t)P.ih(a,this)
else P.lu(a,this)}else{r=this.aF()
H.b(this.a<4)
this.a=4
this.c=a
P.be(this,r)}},
c0:function(a){var t
H.b(this.a<4)
H.b(!J.p(a).$isa5)
t=this.aF()
H.b(this.a<4)
this.a=4
this.c=a
P.be(this,t)},
K:function(a,b){var t
H.b(this.a<4)
t=this.aF()
H.b(this.a<4)
this.a=8
this.c=new P.aX(a,b)
P.be(this,t)},
ea:function(a){return this.K(a,null)},
bU:function(a){var t
H.b(this.a<4)
t=H.c5(a,"$isa5",this.$ti,"$asa5")
if(t){this.e8(a)
return}H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.bj(null,null,t,new P.ig(this,a))},
e8:function(a){var t=H.c5(a,"$isF",this.$ti,null)
if(t){if(a.a===8){H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.bj(null,null,t,new P.il(this,a))}else P.ih(a,this)
return}P.lu(a,this)},
bV:function(a,b){var t
H.b(this.a<4)
H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.bj(null,null,t,new P.ie(this,a,b))},
$isa5:1,
gb7:function(){return this.a},
gey:function(){return this.c}}
P.id.prototype={
$0:function(){P.be(this.a,this.b)},
$S:function(){return{func:1}}}
P.im.prototype={
$0:function(){P.be(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.ii.prototype={
$1:function(a){var t=this.a
H.b(t.a===1)
H.b(t.a===1)
t.a=0
t.ak(a)},
$S:function(a){return{func:1,args:[,]}}}
P.ij.prototype={
$2:function(a,b){var t=this.a
H.b(t.a===1)
t.K(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(a,b){return{func:1,args:[,],opt:[,]}}}
P.ik.prototype={
$0:function(){this.a.K(this.b,this.c)},
$S:function(){return{func:1}}}
P.ig.prototype={
$0:function(){this.a.c0(this.b)},
$S:function(){return{func:1}}}
P.il.prototype={
$0:function(){P.ih(this.b,this.a)},
$S:function(){return{func:1}}}
P.ie.prototype={
$0:function(){this.a.K(this.b,this.c)},
$S:function(){return{func:1}}}
P.iq.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.c
p=q.c
H.b((p&1)===0)
o=(p&2)===0
H.b(o)
t=null
try{H.b(o)
H.b(p===8)
t=q.b.b.cO(q.d)}catch(n){s=H.J(n)
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
p.b=q.c}else p.b=new P.aX(s,r)
p.a=!0
return}if(!!J.p(t).$isa5){if(t instanceof P.F&&t.gb7()>=4){if(t.gb7()===8){q=t
H.b(q.gb7()===8)
p=this.b
p.b=q.gey()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.aL(new P.ir(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.ir.prototype={
$1:function(a){return this.a},
$S:function(a){return{func:1,args:[,]}}}
P.ip.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.b((r.c&1)!==0)
this.a.b=r.b.b.bn(r.d,this.c)}catch(q){t=H.J(q)
s=H.ae(q)
r=this.a
r.b=new P.aX(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.io.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.b(q.a===8)
t=q.c
q=this.c
if(q.fC(t)){H.b((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.fm(t)
p.a=!1}}catch(o){s=H.J(o)
r=H.ae(o)
q=this.a
p=q.a
H.b(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.b(q.a===8)
m.b=q.c}else m.b=new P.aX(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.d8.prototype={}
P.bG.prototype={
gi:function(a){var t,s
t={}
s=new P.F(0,$.w,null,[P.x])
t.a=0
this.cH(new P.hp(t),!0,new P.hq(t,s),s.gc_())
return s},
gbh:function(a){var t,s
t={}
s=new P.F(0,$.w,null,[H.a3(this,"bG",0)])
t.a=null
t.a=this.cH(new P.hn(t,this,s),!0,new P.ho(s),s.gc_())
return s}}
P.hp.prototype={
$1:function(a){++this.a.a},
$S:function(a){return{func:1,args:[,]}}}
P.hq.prototype={
$0:function(){this.b.ak(this.a.a)},
$S:function(){return{func:1}}}
P.hn.prototype={
$1:function(a){P.nW(this.a.a,this.c,a)},
$S:function(a){return{func:1,args:[H.a3(this.b,"bG",0)]}}}
P.ho.prototype={
$0:function(){var t,s,r,q
try{r=H.cw()
throw H.c(r)}catch(q){t=H.J(q)
s=H.ae(q)
P.nY(this.a,t,s)}},
$S:function(){return{func:1}}}
P.hm.prototype={}
P.cX.prototype={}
P.iU.prototype={
$0:function(){return this.a.ak(this.b)},
$S:function(){return{func:1}}}
P.k0.prototype={}
P.aX.prototype={
k:function(a){return H.d(this.a)},
$isb2:1}
P.iT.prototype={}
P.iY.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.b9()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.c(t)
r=H.c(t)
r.stack=s.k(0)
throw r},
$S:function(){return{func:1}}}
P.iF.prototype={
fM:function(a){var t,s,r
try{if(C.d===$.w){a.$0()
return}P.lA(null,null,this,a)}catch(r){t=H.J(r)
s=H.ae(r)
P.iX(null,null,this,t,s)}},
fN:function(a,b){var t,s,r
try{if(C.d===$.w){a.$1(b)
return}P.lB(null,null,this,a,b)}catch(r){t=H.J(r)
s=H.ae(r)
P.iX(null,null,this,t,s)}},
eR:function(a){return new P.iH(this,a)},
bf:function(a){return new P.iG(this,a)},
eS:function(a){return new P.iI(this,a)},
h:function(a,b){return},
cO:function(a){if($.w===C.d)return a.$0()
return P.lA(null,null,this,a)},
bn:function(a,b){if($.w===C.d)return a.$1(b)
return P.lB(null,null,this,a,b)},
fL:function(a,b,c){if($.w===C.d)return a.$2(b,c)
return P.o5(null,null,this,a,b,c)}}
P.iH.prototype={
$0:function(){return this.a.cO(this.b)},
$S:function(){return{func:1}}}
P.iG.prototype={
$0:function(){return this.a.fM(this.b)},
$S:function(){return{func:1}}}
P.iI.prototype={
$1:function(a){return this.a.fN(this.b,a)},
$S:function(a){return{func:1,args:[,]}}}
P.iz.prototype={
as:function(a){return H.ox(a)&0x3ffffff},
at:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.ix.prototype={
gv:function(a){var t=new P.bR(this,this.r,null,null,[null])
t.c=this.e
return t},
gi:function(a){return this.a},
E:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.eb(b)},
eb:function(a){var t=this.d
if(t==null)return!1
return this.aD(t[this.aB(a)],a)>=0},
cI:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.E(0,a)?a:null
else return this.em(a)},
em:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.aB(a)]
r=this.aD(s,a)
if(r<0)return
return J.X(s,r).gee()},
l:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.kc()
this.b=t}return this.bX(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.kc()
this.c=s}return this.bX(s,b)}else return this.X(0,b)},
X:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.kc()
this.d=t}s=this.aB(b)
r=t[s]
if(r==null){q=[this.aY(b)]
H.b(q!=null)
t[s]=q}else{if(this.aD(r,b)>=0)return!1
r.push(this.aY(b))}return!0},
av:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bY(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bY(this.c,b)
else return this.er(0,b)},
er:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.aB(b)]
r=this.aD(s,b)
if(r<0)return!1
this.bZ(s.splice(r,1)[0])
return!0},
Z:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aX()}},
bX:function(a,b){var t
if(a[b]!=null)return!1
t=this.aY(b)
H.b(!0)
a[b]=t
return!0},
bY:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bZ(t)
delete a[b]
return!0},
aX:function(){this.r=this.r+1&67108863},
aY:function(a){var t,s
t=new P.iy(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.aX()
return t},
bZ:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.aX()},
aB:function(a){return J.bo(a)&0x3ffffff},
aD:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.E(a[s].a,b))return s
return-1}}
P.iy.prototype={
gee:function(){return this.a}}
P.bR.prototype={
gq:function(a){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.a8(t))
else{t=this.c
if(t==null){this.saj(null)
return!1}else{this.saj(t.a)
this.c=this.c.b
return!0}}},
saj:function(a){this.d=a}}
P.it.prototype={}
P.jU.prototype={$isj:1}
P.cA.prototype={$isj:1,$isi:1}
P.m.prototype={
gv:function(a){return new H.cB(a,this.gi(a),0,null,[H.a3(a,"m",0)])},
t:function(a,b){return this.h(a,b)},
cJ:function(a,b){return new H.bx(a,b,[H.a3(a,"m",0),null])},
fk:function(a,b,c){var t,s,r,q
t=this.gi(a)
for(s=b,r=0;C.b.H(r,t);++r){s=c.$2(s,this.h(a,r))
q=this.gi(a)
if(t==null?q!=null:t!==q)throw H.c(P.a8(a))}return s},
k:function(a){return P.fb(a,"[","]")}}
P.bw.prototype={}
P.fs.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.d(a)
t.a=s+": "
t.a+=H.d(b)},
$S:function(a,b){return{func:1,args:[,,]}}}
P.aL.prototype={
P:function(a,b){var t,s
for(t=J.P(this.gA(a));t.p();){s=t.gq(t)
b.$2(s,this.h(a,s))}},
gi:function(a){return J.ax(this.gA(a))},
k:function(a){return P.l3(a)},
$isZ:1}
P.fn.prototype={
dN:function(a,b){var t
H.b(!0)
t=new Array(8)
t.fixed$length=Array
this.sc8(H.v(t,[b]))},
gv:function(a){return new P.iA(this,this.c,this.d,this.b,null,this.$ti)},
gau:function(a){return this.b===this.c},
gi:function(a){return(this.c-this.b&this.a.length-1)>>>0},
t:function(a,b){var t=this.gi(this)
if(C.b.W(0,b)||b>=t)H.K(P.B(b,this,"index",null,t))
return this.a[(C.b.a2(this.b,b)&this.a.length-1)>>>0]},
Z:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
k:function(a){return P.fb(this,"{","}")},
cL:function(){var t,s,r
t=this.b
if(t===this.c)throw H.c(H.cw());++this.d
s=this.a
r=s[t]
s[t]=null
this.b=(t+1&s.length-1)>>>0
return r},
X:function(a,b){var t,s
t=this.a
s=this.c
t[s]=b
t=(s+1&t.length-1)>>>0
this.c=t
if(this.b===t)this.c3();++this.d},
c3:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.v(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.bA(s,0,q,t,r)
C.a.bA(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sc8(s)},
sc8:function(a){this.a=a}}
P.iA.prototype={
gq:function(a){return this.e},
p:function(){var t,s
t=this.a
if(this.c!==t.d)H.K(P.a8(t))
s=this.d
if(s===this.b){this.saj(null)
return!1}this.saj(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
saj:function(a){this.e=a}}
P.ha.prototype={
N:function(a,b){var t
for(t=J.P(b);t.p();)this.l(0,t.gq(t))},
k:function(a){return P.fb(this,"{","}")},
$isj:1}
P.h9.prototype={}
P.bS.prototype={}
P.iv.prototype={
h:function(a,b){var t,s
t=this.b
if(t==null)return this.gao().h(0,b)
else if(typeof b!=="string")return
else{s=t[b]
return typeof s=="undefined"?this.eq(b):s}},
gi:function(a){var t
if(this.b==null){t=this.gao()
t=t.gi(t)}else t=this.aC().length
return t},
gA:function(a){var t
if(this.b==null){t=this.gao()
return t.gA(t)}return new P.iw(this)},
u:function(a,b){if(this.b==null)return this.gao().u(0,b)
return Object.prototype.hasOwnProperty.call(this.a,b)},
P:function(a,b){var t,s,r,q
if(this.b==null)return this.gao().P(0,b)
t=this.aC()
for(s=0;s<t.length;++s){r=t[s]
q=this.b[r]
if(typeof q=="undefined"){q=P.iV(this.a[r])
this.b[r]=q}b.$2(r,q)
if(t!==this.c)throw H.c(P.a8(this))}},
gao:function(){H.b(this.b==null)
return this.c},
aC:function(){H.b(this.b!=null)
var t=this.c
if(t==null){t=Object.keys(this.a)
this.c=t}return t},
eq:function(a){var t
if(!Object.prototype.hasOwnProperty.call(this.a,a))return
t=P.iV(this.a[a])
return this.b[a]=t},
$asbw:function(){return[P.l,null]},
$asaL:function(){return[P.l,null]},
$asZ:function(){return[P.l,null]}}
P.iw.prototype={
gi:function(a){var t=this.a
return t.gi(t)},
t:function(a,b){var t=this.a
return t.b==null?t.gA(t).t(0,b):C.a.h(t.aC(),b)},
gv:function(a){var t=this.a
if(t.b==null){t=t.gA(t)
t=t.gv(t)}else{t=t.aC()
t=new J.cc(t,t.length,0,null,[H.a6(t,0)])}return t},
$asj:function(){return[P.l]},
$asaK:function(){return[P.l]},
$asR:function(){return[P.l]}}
P.cf.prototype={}
P.cg.prototype={}
P.fg.prototype={
f7:function(a,b,c){var t=P.o3(b,this.gf8().a)
return t},
f6:function(a,b){return this.f7(a,b,null)},
gf8:function(){return C.V},
$ascf:function(){return[P.D,P.l]}}
P.fh.prototype={
$ascX:function(){return[P.l,P.D]},
$ascg:function(){return[P.l,P.D]}}
P.ao.prototype={}
P.H.prototype={}
P.b1.prototype={
gfD:function(){return this.a},
dG:function(a,b){var t
if(Math.abs(this.a)<=864e13)t=!1
else t=!0
if(t)throw H.c(P.cb("DateTime is outside valid range: "+this.gfD()))},
B:function(a,b){if(b==null)return!1
if(!(b instanceof P.b1))return!1
return this.a===b.a&&this.b===b.b},
U:function(a,b){return C.b.U(this.a,b.a)},
gw:function(a){var t=this.a
return(t^C.b.b6(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.n_(H.nx(this))
s=P.ci(H.nv(this))
r=P.ci(H.nr(this))
q=P.ci(H.ns(this))
p=P.ci(H.nu(this))
o=P.ci(H.nw(this))
n=P.n0(H.nt(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isH:1,
$asH:function(){return[P.b1]}}
P.a2.prototype={}
P.aE.prototype={
H:function(a,b){return C.b.H(this.a,b.ged())},
W:function(a,b){return C.b.W(this.a,b.ged())},
B:function(a,b){if(b==null)return!1
if(!(b instanceof P.aE))return!1
return this.a===b.a},
gw:function(a){return this.a&0x1FFFFFFF},
U:function(a,b){return C.b.U(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.et()
s=this.a
if(s<0)return"-"+new P.aE(0-s).k(0)
r=t.$1(C.b.F(s,6e7)%60)
q=t.$1(C.b.F(s,1e6)%60)
p=new P.es().$1(s%1e6)
return""+C.b.F(s,36e8)+":"+H.d(r)+":"+H.d(q)+"."+H.d(p)},
$isH:1,
$asH:function(){return[P.aE]}}
P.es.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(a){return{func:1,ret:P.l,args:[P.x]}}}
P.et.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(a){return{func:1,ret:P.l,args:[P.x]}}}
P.b2.prototype={}
P.cd.prototype={
k:function(a){return"Assertion failed"}}
P.b9.prototype={
k:function(a){return"Throw of null."}}
P.a7.prototype={
gb_:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaZ:function(){return""},
k:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.d(t)
q=this.gb_()+s+r
if(!this.a)return q
p=this.gaZ()
o=P.co(this.b)
return q+p+": "+H.d(o)}}
P.cO.prototype={
gb_:function(){return"RangeError"},
gaZ:function(){var t,s,r
H.b(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.d(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.d(t)
else if(r>t)s=": Not in range "+H.d(t)+".."+H.d(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.d(t)}return s}}
P.f8.prototype={
gb_:function(){return"RangeError"},
gaZ:function(){H.b(this.a)
if(J.m2(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.d(t)},
gi:function(a){return this.f}}
P.hL.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.hJ.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.bc.prototype={
k:function(a){return"Bad state: "+this.a}}
P.eb.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.d(P.co(t))+"."}}
P.cV.prototype={
k:function(a){return"Stack Overflow"},
$isb2:1}
P.el.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.jN.prototype={}
P.ic.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.d(t)}}
P.eX.prototype={
k:function(a){var t,s
t=this.a
s=""!==t?"FormatException: "+t:"FormatException"
return s}}
P.ew.prototype={
h:function(a,b){var t,s
t=this.a
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.K(P.jI(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.l8(b,"expando$values")
return s==null?null:H.l8(s,t)},
k:function(a){return"Expando:"+H.d(this.b)}}
P.x.prototype={}
P.R.prototype={
aM:function(a,b){return new H.d7(this,b,[H.a3(this,"R",0)])},
gi:function(a){var t,s
H.b(!this.$isj)
t=this.gv(this)
for(s=0;t.p();)++s
return s},
ga4:function(a){var t,s
t=this.gv(this)
if(!t.p())throw H.c(H.cw())
s=t.gq(t)
if(t.p())throw H.c(H.nm())
return s},
t:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.mR("index"))
if(b<0)H.K(P.aN(b,0,null,"index",null))
for(t=this.gv(this),s=0;t.p();){r=t.gq(t)
if(b===s)return r;++s}throw H.c(P.B(b,this,"index",null,s))},
k:function(a){return P.nk(this,"(",")")}}
P.cx.prototype={}
P.i.prototype={$isj:1}
P.Z.prototype={}
P.L.prototype={
gw:function(a){return P.D.prototype.gw.call(this,this)},
k:function(a){return"null"}}
P.af.prototype={$isH:1,
$asH:function(){return[P.af]}}
P.D.prototype={constructor:P.D,$isD:1,
B:function(a,b){return this===b},
gw:function(a){return H.aM(this)},
k:function(a){return"Instance of '"+H.bD(this)+"'"},
gC:function(a){return new H.av(H.j8(this),null)},
toString:function(){return this.k(this)}}
P.bb.prototype={}
P.l.prototype={$isH:1,
$asH:function(){return[P.l]}}
P.bH.prototype={
gi:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga7:function(){return this.a}}
P.k3.prototype={}
W.k.prototype={}
W.ca.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
W.e0.prototype={
gi:function(a){return a.length}}
W.e1.prototype={
k:function(a){return String(a)}}
W.e3.prototype={
k:function(a){return String(a)}}
W.ay.prototype={$isay:1}
W.az.prototype={
dc:function(a,b,c){var t=this.eg(a,b,P.of(c,null))
return t},
eg:function(a,b,c){return a.getContext(b,c)},
$isaz:1}
W.e8.prototype={
aN:function(a){return P.j1(a.getContextAttributes())}}
W.aB.prototype={
gi:function(a){return a.length}}
W.ed.prototype={
gi:function(a){return a.length}}
W.ee.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.ef.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
W.eg.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
W.b_.prototype={
bW:function(a,b){var t,s
t=$.$get$kO()
s=t[b]
if(typeof s==="string")return s
s=this.eG(a,b)
t[b]=s
return s},
eG:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.n1()+b
if(t in a)return t
return b},
gi:function(a){return a.length}}
W.eh.prototype={}
W.a9.prototype={}
W.b0.prototype={}
W.ei.prototype={
gi:function(a){return a.length}}
W.ej.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
W.ek.prototype={
gi:function(a){return a.length}}
W.em.prototype={
h:function(a,b){return a[b]},
gi:function(a){return a.length}}
W.en.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
W.cj.prototype={}
W.aD.prototype={
eM:function(a,b){return a.adoptNode(b)},
ec:function(a,b){return a.createEvent(b)},
br:function(a,b){return a.getElementsByTagName(b)},
dd:function(a,b){return a.getElementById(b)},
fG:function(a,b){return a.querySelector(b)},
gbk:function(a){return new W.de(a,"change",!1,[W.f])},
$isaD:1}
W.eo.prototype={
k:function(a){return String(a)}}
W.ck.prototype={
f4:function(a,b){return a.createHTMLDocument(b)}}
W.ep.prototype={
gay:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
W.cl.prototype={
gay:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
W.cm.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[P.a_]},
$isj:1,
$asj:function(){return[P.a_]},
$isu:1,
$asu:function(){return[P.a_]},
$asm:function(){return[P.a_]},
$isi:1,
$asi:function(){return[P.a_]},
$asn:function(){return[P.a_]}}
W.cn.prototype={
k:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.gad(a))+" x "+H.d(this.ga9(a))},
B:function(a,b){var t
if(b==null)return!1
t=J.p(b)
if(!t.$isa_)return!1
return a.left===t.gcF(b)&&a.top===t.gcU(b)&&this.gad(a)===t.gad(b)&&this.ga9(a)===t.ga9(b)},
gw:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gad(a)
q=this.ga9(a)
return W.ly(W.aU(W.aU(W.aU(W.aU(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga9:function(a){return a.height},
gcF:function(a){return a.left},
gcU:function(a){return a.top},
gad:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isa_:1,
$asa_:function(){}}
W.eq.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[P.l]},
$isj:1,
$asj:function(){return[P.l]},
$isu:1,
$asu:function(){return[P.l]},
$asm:function(){return[P.l]},
$isi:1,
$asi:function(){return[P.l]},
$asn:function(){return[P.l]}}
W.er.prototype={
gi:function(a){return a.length}}
W.aa.prototype={
geP:function(a){return new W.i7(a)},
k:function(a){return a.localName},
O:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.kW
if(t==null){t=H.v([],[W.cK])
s=new W.cL(t)
C.a.l(t,W.lv(null))
C.a.l(t,W.lz())
$.kW=s
d=s}else d=t
t=$.kV
if(t==null){t=new W.dJ(d)
$.kV=t
c=t}else{t.a=d
c=t}}if($.aq==null){t=document
s=t.implementation
s=(s&&C.K).f4(s,"")
$.aq=s
$.jM=s.createRange()
s=$.aq
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.aq.head;(t&&C.L).T(t,r)}t=$.aq
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.kk(s,"$isay")}t=$.aq
if(!!this.$isay)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.aq.body;(t&&C.p).T(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.E(C.X,a.tagName)){t=$.jM;(t&&C.D).dg(t,q)
t=$.jM
p=(t&&C.D).f2(t,b)}else{q.innerHTML=b
p=$.aq.createDocumentFragment()
for(t=J.h(p);s=q.firstChild,s!=null;)t.T(p,s)}t=$.aq.body
if(q==null?t!=null:q!==t)J.ky(q)
c.bz(p)
C.j.eM(document,p)
return p},
f3:function(a,b,c){return this.O(a,b,c,null)},
ds:function(a,b,c,d){a.textContent=null
this.T(a,this.O(a,b,c,d))},
dr:function(a,b){return this.ds(a,b,null,null)},
af:function(a,b){return a.getAttribute(b)},
eh:function(a,b){return a.hasAttribute(b)},
es:function(a,b){return a.removeAttribute(b)},
gbk:function(a){return new W.bO(a,"change",!1,[W.f])},
$isaa:1,
gfq:function(a){return a.id},
gfO:function(a){return a.tagName}}
W.ev.prototype={
$1:function(a){return!!J.p(a).$isaa},
$S:function(a){return{func:1,args:[,]}}}
W.f.prototype={
gcQ:function(a){return W.nZ(a.target)},
ej:function(a,b,c,d){return a.initEvent(b,!0,!0)},
$isf:1}
W.e.prototype={
e6:function(a,b,c,d){return a.addEventListener(b,H.aw(c,1),!1)},
ff:function(a,b){return a.dispatchEvent(b)},
ev:function(a,b,c,d){return a.removeEventListener(b,H.aw(c,1),!1)},
$ise:1}
W.eQ.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cq]},
$isj:1,
$asj:function(){return[W.cq]},
$isu:1,
$asu:function(){return[W.cq]},
$asm:function(){return[W.cq]},
$isi:1,
$asi:function(){return[W.cq]},
$asn:function(){return[W.cq]}}
W.eR.prototype={
gi:function(a){return a.length}}
W.eW.prototype={
gi:function(a){return a.length}}
W.f1.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
W.ct.prototype={}
W.f2.prototype={
gi:function(a){return a.length}}
W.bs.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.r]},
$isj:1,
$asj:function(){return[W.r]},
$isu:1,
$asu:function(){return[W.r]},
$asm:function(){return[W.r]},
$isi:1,
$asi:function(){return[W.r]},
$asn:function(){return[W.r]}}
W.cu.prototype={}
W.cv.prototype={
h0:function(a,b,c,d,e,f){return a.open(b,c)},
fE:function(a,b,c){return a.open(b,c)},
J:function(a,b){return a.send(b)}}
W.bt.prototype={}
W.b4.prototype={$isb4:1}
W.b5.prototype={$isb5:1}
W.b6.prototype={$isb6:1}
W.bu.prototype={$isbu:1}
W.aI.prototype={$isaI:1}
W.fq.prototype={
k:function(a){return String(a)}}
W.fr.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
W.by.prototype={}
W.fw.prototype={
gi:function(a){return a.length}}
W.fy.prototype={
fY:function(a,b,c){return a.send(b,c)},
J:function(a,b){return a.send(b)}}
W.bz.prototype={}
W.fz.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cD]},
$isj:1,
$asj:function(){return[W.cD]},
$isu:1,
$asu:function(){return[W.cD]},
$asm:function(){return[W.cD]},
$isi:1,
$asi:function(){return[W.cD]},
$asn:function(){return[W.cD]}}
W.N.prototype={$isN:1}
W.U.prototype={
ga4:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.c(P.cW("No elements"))
if(s>1)throw H.c(P.cW("More than one element"))
return t.firstChild},
N:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.h(s),p=0;p<r;++p)q.T(s,t.firstChild)
return},
j:function(a,b,c){var t=this.a
J.m8(t,c,C.B.h(t.childNodes,b))},
gv:function(a){var t=this.a.childNodes
return new W.cr(t,t.length,-1,null,[H.a3(t,"n",0)])},
gi:function(a){return this.a.childNodes.length},
h:function(a,b){return C.B.h(this.a.childNodes,b)},
$asj:function(){return[W.r]},
$ascA:function(){return[W.r]},
$asm:function(){return[W.r]},
$asi:function(){return[W.r]},
$asbS:function(){return[W.r]}}
W.r.prototype={
fH:function(a){var t=a.parentNode
if(t!=null)J.jy(t,a)},
k:function(a){var t=a.nodeValue
return t==null?this.dw(a):t},
T:function(a,b){return a.appendChild(b)},
eu:function(a,b){return a.removeChild(b)},
ew:function(a,b,c){return a.replaceChild(b,c)},
$isr:1,
gbl:function(a){return a.previousSibling}}
W.cJ.prototype={
bm:function(a){return a.previousNode()}}
W.bC.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.r]},
$isj:1,
$asj:function(){return[W.r]},
$isu:1,
$asu:function(){return[W.r]},
$asm:function(){return[W.r]},
$isi:1,
$asi:function(){return[W.r]},
$asn:function(){return[W.r]}}
W.aj.prototype={
gi:function(a){return a.length}}
W.fW.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.aj]},
$isj:1,
$asj:function(){return[W.aj]},
$isu:1,
$asu:function(){return[W.aj]},
$asm:function(){return[W.aj]},
$isi:1,
$asi:function(){return[W.aj]},
$asn:function(){return[W.aj]}}
W.fZ.prototype={
J:function(a,b){return a.send(b)}}
W.cN.prototype={
f2:function(a,b){return a.createContextualFragment(b)},
dg:function(a,b){return a.selectNodeContents(b)}}
W.cR.prototype={
J:function(a,b){return a.send(b)}}
W.h8.prototype={
gi:function(a){return a.length}}
W.au.prototype={}
W.hd.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cT]},
$isj:1,
$asj:function(){return[W.cT]},
$isu:1,
$asu:function(){return[W.cT]},
$asm:function(){return[W.cT]},
$isi:1,
$asi:function(){return[W.cT]},
$asn:function(){return[W.cT]}}
W.hf.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cU]},
$isj:1,
$asj:function(){return[W.cU]},
$isu:1,
$asu:function(){return[W.cU]},
$asm:function(){return[W.cU]},
$isi:1,
$asi:function(){return[W.cU]},
$asn:function(){return[W.cU]}}
W.ak.prototype={
gi:function(a){return a.length}}
W.hk.prototype={
u:function(a,b){return this.b1(a,b)!=null},
h:function(a,b){return this.b1(a,b)},
P:function(a,b){var t,s
for(t=0;!0;++t){s=this.el(a,t)
if(s==null)return
b.$2(s,this.b1(a,s))}},
gA:function(a){var t=H.v([],[P.l])
this.P(a,new W.hl(t))
return t},
gi:function(a){return a.length},
b1:function(a,b){return a.getItem(b)},
el:function(a,b){return a.key(b)},
$asaL:function(){return[P.l,P.l]},
$isZ:1,
$asZ:function(){return[P.l,P.l]}}
W.hl.prototype={
$2:function(a,b){return C.a.l(this.a,a)},
$S:function(a,b){return{func:1,args:[,,]}}}
W.cZ.prototype={
O:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aP(a,b,c,d)
t=W.n3("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.U(s).N(0,new W.U(t))
return s}}
W.ht.prototype={
O:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aP(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.I.O(t.createElement("table"),b,c,d)
t.toString
t=new W.U(t)
r=t.ga4(t)
r.toString
t=new W.U(r)
q=t.ga4(t)
s.toString
q.toString
new W.U(s).N(0,new W.U(q))
return s}}
W.hu.prototype={
O:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aP(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.I.O(t.createElement("table"),b,c,d)
t.toString
t=new W.U(t)
r=t.ga4(t)
s.toString
r.toString
new W.U(s).N(0,new W.U(r))
return s}}
W.bI.prototype={$isbI:1}
W.hw.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.d0]},
$isj:1,
$asj:function(){return[W.d0]},
$isu:1,
$asu:function(){return[W.d0]},
$asm:function(){return[W.d0]},
$isi:1,
$asi:function(){return[W.d0]},
$asn:function(){return[W.d0]}}
W.hx.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.d_]},
$isj:1,
$asj:function(){return[W.d_]},
$isu:1,
$asu:function(){return[W.d_]},
$asm:function(){return[W.d_]},
$isi:1,
$asi:function(){return[W.d_]},
$asn:function(){return[W.d_]}}
W.hy.prototype={
gi:function(a){return a.length}}
W.aO.prototype={$isaO:1}
W.hC.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.d4]},
$isj:1,
$asj:function(){return[W.d4]},
$isu:1,
$asu:function(){return[W.d4]},
$asm:function(){return[W.d4]},
$isi:1,
$asi:function(){return[W.d4]},
$asn:function(){return[W.d4]}}
W.hD.prototype={
gi:function(a){return a.length}}
W.d5.prototype={
bm:function(a){return a.previousNode()}}
W.aP.prototype={}
W.hM.prototype={
k:function(a){return String(a)}}
W.hO.prototype={
gm:function(a){return a.x},
gG:function(a){return a.z}}
W.bd.prototype={$isbd:1}
W.hQ.prototype={
gi:function(a){return a.length}}
W.hR.prototype={
J:function(a,b){return a.send(b)}}
W.aR.prototype={
gf9:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.t("deltaY is not supported"))},
$isaR:1}
W.bM.prototype={
geO:function(a){var t,s
t=P.af
s=new P.F(0,$.w,null,[t])
this.ef(a)
this.ex(a,W.lE(new W.hT(new P.iP(s,[t]))))
return s},
ex:function(a,b){return a.requestAnimationFrame(H.aw(b,1))},
ef:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.hT.prototype={
$1:function(a){this.a.ap(0,a)},
$S:function(a){return{func:1,args:[,]}}}
W.k7.prototype={}
W.i4.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.ch]},
$isj:1,
$asj:function(){return[W.ch]},
$isu:1,
$asu:function(){return[W.ch]},
$asm:function(){return[W.ch]},
$isi:1,
$asi:function(){return[W.ch]},
$asn:function(){return[W.ch]}}
W.i6.prototype={
k:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
B:function(a,b){var t
if(b==null)return!1
t=J.p(b)
if(!t.$isa_)return!1
return a.left===t.gcF(b)&&a.top===t.gcU(b)&&a.width===t.gad(b)&&a.height===t.ga9(b)},
gw:function(a){var t,s,r,q
t=a.left
s=a.top
r=a.width
q=a.height
return W.ly(W.aU(W.aU(W.aU(W.aU(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga9:function(a){return a.height},
gad:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.is.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cs]},
$isj:1,
$asj:function(){return[W.cs]},
$isu:1,
$asu:function(){return[W.cs]},
$asm:function(){return[W.cs]},
$isi:1,
$asi:function(){return[W.cs]},
$asn:function(){return[W.cs]}}
W.dn.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.r]},
$isj:1,
$asj:function(){return[W.r]},
$isu:1,
$asu:function(){return[W.r]},
$asm:function(){return[W.r]},
$isi:1,
$asi:function(){return[W.r]},
$asn:function(){return[W.r]}}
W.iM.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.ak]},
$isj:1,
$asj:function(){return[W.ak]},
$isu:1,
$asu:function(){return[W.ak]},
$asm:function(){return[W.ak]},
$isi:1,
$asi:function(){return[W.ak]},
$asn:function(){return[W.ak]}}
W.iN.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cY]},
$isj:1,
$asj:function(){return[W.cY]},
$isu:1,
$asu:function(){return[W.cY]},
$asm:function(){return[W.cY]},
$isi:1,
$asi:function(){return[W.cY]},
$asn:function(){return[W.cY]}}
W.i1.prototype={
P:function(a,b){var t,s,r,q,p,o
for(t=this.gA(this),s=t.length,r=this.a,q=J.h(r),p=0;p<t.length;t.length===s||(0,H.G)(t),++p){o=t[p]
b.$2(o,q.af(r,o))}},
gA:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.v([],[P.l])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.l(s,p.name)}return s},
$asbw:function(){return[P.l,P.l]},
$asaL:function(){return[P.l,P.l]},
$asZ:function(){return[P.l,P.l]},
gei:function(){return this.a}}
W.i7.prototype={
u:function(a,b){return J.m5(this.a,b)},
h:function(a,b){return J.jG(this.a,b)},
gi:function(a){return this.gA(this).length}}
W.de.prototype={
cH:function(a,b,c,d){return W.a0(this.a,this.b,a,!1,H.a6(this,0))}}
W.bO.prototype={}
W.ia.prototype={
e0:function(a,b,c,d,e){this.eI()},
eV:function(a){if(this.b==null)return
this.eJ()
this.b=null
this.sen(null)
return},
eI:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.m4(r,this.c,t,!1)}},
eJ:function(){var t,s,r
t=this.d
s=t!=null
if(s){r=this.b
r.toString
if(s)J.m7(r,this.c,t,!1)}},
sen:function(a){this.d=a}}
W.ib.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(a){return{func:1,args:[,]}}}
W.bQ.prototype={
e1:function(a){var t,s
t=$.$get$kb()
if(t.gau(t)){for(s=0;s<262;++s)t.j(0,C.W[s],W.om())
for(s=0;s<12;++s)t.j(0,C.t[s],W.on())}},
a8:function(a){return $.$get$lw().E(0,W.br(a))},
Y:function(a,b,c){var t,s,r
t=W.br(a)
s=$.$get$kb()
r=s.h(0,H.d(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)}}
W.n.prototype={
gv:function(a){return new W.cr(a,this.gi(a),-1,null,[H.a3(a,"n",0)])}}
W.cL.prototype={
a8:function(a){return C.a.cd(this.a,new W.fK(a))},
Y:function(a,b,c){return C.a.cd(this.a,new W.fJ(a,b,c))}}
W.fK.prototype={
$1:function(a){return a.a8(this.a)},
$S:function(a){return{func:1,args:[,]}}}
W.fJ.prototype={
$1:function(a){return a.Y(this.a,this.b,this.c)},
$S:function(a){return{func:1,args:[,]}}}
W.bX.prototype={
e4:function(a,b,c,d){var t,s,r
this.a.N(0,c)
t=b.aM(0,new W.iK())
s=b.aM(0,new W.iL())
this.b.N(0,t)
r=this.c
r.N(0,C.A)
r.N(0,s)},
a8:function(a){return this.a.E(0,W.br(a))},
Y:function(a,b,c){var t,s
t=W.br(a)
s=this.c
if(s.E(0,H.d(t)+"::"+b))return this.d.eN(c)
else if(s.E(0,"*::"+b))return this.d.eN(c)
else{s=this.b
if(s.E(0,H.d(t)+"::"+b))return!0
else if(s.E(0,"*::"+b))return!0
else if(s.E(0,H.d(t)+"::*"))return!0
else if(s.E(0,"*::*"))return!0}return!1}}
W.iK.prototype={
$1:function(a){return!C.a.E(C.t,a)},
$S:function(a){return{func:1,args:[,]}}}
W.iL.prototype={
$1:function(a){return C.a.E(C.t,a)},
$S:function(a){return{func:1,args:[,]}}}
W.iQ.prototype={
Y:function(a,b,c){if(this.dB(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.jG(a,"template")==="")return this.e.E(0,b)
return!1}}
W.iR.prototype={
$1:function(a){return"TEMPLATE::"+H.d(a)},
$S:function(a){return{func:1,args:[,]}}}
W.iO.prototype={
a8:function(a){var t=J.p(a)
if(!!t.$isbE)return!1
t=!!t.$isy
if(t&&W.br(a)==="foreignObject")return!1
if(t)return!0
return!1},
Y:function(a,b,c){if(b==="is"||C.i.bD(b,"on"))return!1
return this.a8(a)}}
W.cr.prototype={
p:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sc4(J.X(this.a,t))
this.c=t
return!0}this.sc4(null)
this.c=s
return!1},
gq:function(a){return this.d},
sc4:function(a){this.d=a}}
W.i5.prototype={$isa:1,$ise:1}
W.cK.prototype={}
W.jY.prototype={}
W.k6.prototype={}
W.iJ.prototype={}
W.dJ.prototype={
bz:function(a){new W.iS(this).$2(a,null)},
an:function(a,b){if(b==null)J.ky(a)
else J.jy(b,a)},
eC:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.mq(a)
r=J.jG(s.gei(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.J(n)}p="element unprintable"
try{p=J.bp(a)}catch(n){H.J(n)}try{o=W.br(a)
this.eB(a,b,t,p,o,s,r)}catch(n){if(H.J(n) instanceof P.a7)throw n
else{this.an(a,b)
window
m="Removing corrupted element "+H.d(p)
if(typeof console!="undefined")window.console.warn(m)}}},
eB:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.an(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(t)
return}if(!this.a.a8(a)){this.an(a,b)
window
t="Removing disallowed element <"+H.d(e)+"> from "+H.d(b)
if(typeof console!="undefined")window.console.warn(t)
return}if(g!=null)if(!this.a.Y(a,"is",g)){this.an(a,b)
window
t="Removing disallowed type extension <"+H.d(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(t)
return}t=f.gA(f)
s=H.v(t.slice(0),[H.a6(t,0)])
for(r=f.gA(f).length-1,t=f.a,q=J.h(t);r>=0;--r){p=s[r]
if(!this.a.Y(a,J.mI(p),q.af(t,p))){window
o="Removing disallowed attribute <"+H.d(e)+" "+p+'="'+H.d(q.af(t,p))+'">'
if(typeof console!="undefined")window.console.warn(o)
q.af(t,p)
q.es(t,p)}}if(!!J.p(a).$isbI)this.bz(a.content)}}
W.iS.prototype={
$2:function(a,b){var t,s,r,q
r=this.a
switch(a.nodeType){case 1:r.eC(a,b)
break
case 8:case 11:case 3:case 4:break
default:r.an(a,b)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.ms(t)}catch(q){H.J(q)
r=t
J.jy(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(a,b){return{func:1,v:true,args:[W.r,W.r]}}}
W.d9.prototype={}
W.da.prototype={}
W.db.prototype={}
W.dc.prototype={}
W.dd.prototype={}
W.df.prototype={}
W.dg.prototype={}
W.dh.prototype={}
W.di.prototype={}
W.dl.prototype={}
W.dm.prototype={}
W.dp.prototype={}
W.dq.prototype={}
W.dt.prototype={}
W.du.prototype={}
W.bY.prototype={}
W.bZ.prototype={}
W.dv.prototype={}
W.dw.prototype={}
W.dA.prototype={}
W.dD.prototype={}
W.dE.prototype={}
W.c_.prototype={}
W.c0.prototype={}
W.dF.prototype={}
W.dG.prototype={}
W.dK.prototype={}
W.dL.prototype={}
W.dM.prototype={}
W.dN.prototype={}
W.dO.prototype={}
W.dP.prototype={}
W.dQ.prototype={}
W.dR.prototype={}
W.dS.prototype={}
W.dT.prototype={}
P.hU.prototype={
cE:function(a){var t,s,r,q
t=this.a
s=t.length
for(r=0;r<s;++r){q=t[r]
if(q==null?a==null:q===a)return r}C.a.l(t,a)
C.a.l(this.b,null)
return s},
bp:function(a){var t,s,r,q,p,o,n,m,l,k
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){s=a.getTime()
r=new P.b1(s,!0)
r.dG(s,!0)
return r}if(a instanceof RegExp)throw H.c(P.k4("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.og(a)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=this.cE(a)
r=this.b
o=r[p]
t.a=o
if(o!=null)return o
o=P.Y()
t.a=o
r[p]=o
this.fl(a,new P.hW(t,this))
return t.a}if(a instanceof Array){n=a
p=this.cE(n)
r=this.b
o=r[p]
if(o!=null)return o
m=J.z(n)
l=m.gi(n)
o=this.c?new Array(l):n
r[p]=o
for(r=J.aV(o),k=0;C.b.H(k,l);++k)r.j(o,k,this.bp(m.h(n,k)))
return o}return a}}
P.hW.prototype={
$2:function(a,b){var t,s
t=this.a.a
s=this.b.bp(b)
J.m3(t,a,s)
return s},
$S:function(a,b){return{func:1,args:[,,]}}}
P.iZ.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(a,b){return{func:1,args:[,,]}}}
P.hV.prototype={
fl:function(a,b){var t,s,r,q
for(t=Object.keys(a),s=t.length,r=0;r<t.length;t.length===s||(0,H.G)(t),++r){q=t[r]
b.$2(q,a[q])}}}
P.j_.prototype={
$1:function(a){return this.a.ap(0,a)},
$S:function(a){return{func:1,args:[,]}}}
P.j0.prototype={
$1:function(a){return this.a.eY(a)},
$S:function(a){return{func:1,args:[,]}}}
P.hP.prototype={
gcQ:function(a){return a.target}}
P.iE.prototype={}
P.a_.prototype={}
P.ex.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ey.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ez.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eA.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eB.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eC.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eD.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eE.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eF.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eG.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eH.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eI.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eJ.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eK.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
P.eL.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eM.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
P.eN.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eO.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eS.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eV.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ab.prototype={}
P.ah.prototype={}
P.f3.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fi.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return this.a0(a,b)},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
a0:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.jT]},
$asm:function(){return[P.jT]},
$isi:1,
$asi:function(){return[P.jT]},
$asn:function(){return[P.jT]}}
P.fu.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fM.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return this.a0(a,b)},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
a0:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.jZ]},
$asm:function(){return[P.jZ]},
$isi:1,
$asi:function(){return[P.jZ]},
$asn:function(){return[P.jZ]}}
P.fT.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fX.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fY.prototype={
gi:function(a){return a.length}}
P.h0.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.h1.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bE.prototype={$isbE:1}
P.hr.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return this.a0(a,b)},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
a0:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.l]},
$asm:function(){return[P.l]},
$isi:1,
$asi:function(){return[P.l]},
$asn:function(){return[P.l]}}
P.y.prototype={
O:function(a,b,c,d){var t,s,r,q,p,o
t=H.v([],[W.cK])
C.a.l(t,W.lv(null))
C.a.l(t,W.lz())
C.a.l(t,new W.iO())
c=new W.dJ(new W.cL(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.p).f3(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.U(q)
o=t.ga4(t)
for(t=J.h(p);r=o.firstChild,r!=null;)t.T(p,r)
return p},
gbk:function(a){return new W.bO(a,"change",!1,[W.f])},
$isy:1}
P.hs.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bJ.prototype={}
P.bK.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.hE.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return this.a0(a,b)},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
a0:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.k2]},
$asm:function(){return[P.k2]},
$isi:1,
$asi:function(){return[P.k2]},
$asn:function(){return[P.k2]}}
P.hN.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dj.prototype={}
P.dk.prototype={}
P.dr.prototype={}
P.ds.prototype={}
P.dB.prototype={}
P.dC.prototype={}
P.dH.prototype={}
P.dI.prototype={}
P.e4.prototype={
gi:function(a){return a.length}}
P.e5.prototype={
gi:function(a){return a.length}}
P.aY.prototype={}
P.fN.prototype={
gi:function(a){return a.length}}
P.h5.prototype={
cb:function(a,b){return a.activeTexture(b)},
ce:function(a,b,c){return a.attachShader(b,c)},
cf:function(a,b,c){return a.bindBuffer(b,c)},
cg:function(a,b,c){return a.bindFramebuffer(b,c)},
ci:function(a,b,c){return a.bindTexture(b,c)},
cj:function(a,b){return a.blendEquation(b)},
ck:function(a,b,c){return a.blendFunc(b,c)},
cm:function(a,b,c,d){return a.bufferData(b,c,d)},
cn:function(a,b){return a.clear(b)},
co:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
cp:function(a,b){return a.compileShader(b)},
cq:function(a){return a.createBuffer()},
cr:function(a){return a.createProgram()},
cs:function(a,b){return a.createShader(b)},
ct:function(a){return a.createTexture()},
cv:function(a,b){return a.depthMask(b)},
cw:function(a,b){return a.disable(b)},
cz:function(a,b,c,d){return a.drawArrays(b,c,d)},
cA:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cB:function(a,b){return a.enable(b)},
cC:function(a,b){return a.enableVertexAttribArray(b)},
aN:function(a){return P.j1(a.getContextAttributes())},
bs:function(a){return a.getError()},
bt:function(a,b){return a.getProgramInfoLog(b)},
bu:function(a,b,c){return a.getProgramParameter(b,c)},
bv:function(a,b){return a.getShaderInfoLog(b)},
bw:function(a,b,c){return a.getShaderParameter(b,c)},
bx:function(a,b,c){return a.getUniformLocation(b,c)},
cG:function(a,b){return a.linkProgram(b)},
cK:function(a,b,c){return a.pixelStorei(b,c)},
bC:function(a,b,c){return a.shaderSource(b,c)},
bE:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aK:function(a,b,c,d,e,f,g,h,i,j){var t,s
t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){this.b8(a,b,c,d,e,f,g,h,i,j)
return}s=J.p(g)
if(!!s.$isb5&&h==null&&t&&j==null){this.b9(a,b,c,d,e,f,P.lM(g))
return}if(!!s.$isb6&&h==null&&t&&j==null){this.ba(a,b,c,d,e,f,g)
return}if(!!s.$isaz&&h==null&&t&&j==null){this.bb(a,b,c,d,e,f,g)
return}if(!!s.$isbd&&h==null&&t&&j==null){this.bc(a,b,c,d,e,f,g)
return}if(!!s.$isb4&&h==null&&t&&j==null){this.bd(a,b,c,d,e,f,g)
return}throw H.c(P.cb("Incorrect number or type of arguments"))},
cR:function(a,b,c,d,e,f,g){return this.aK(a,b,c,d,e,f,g,null,null,null)},
b8:function(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
b9:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
ba:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bb:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bc:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bd:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cS:function(a,b,c,d){return a.texParameterf(b,c,d)},
cT:function(a,b,c,d){return a.texParameteri(b,c,d)},
cW:function(a,b,c){return a.uniform1f(b,c)},
cX:function(a,b,c){return a.uniform1fv(b,c)},
cY:function(a,b,c){return a.uniform1i(b,c)},
cZ:function(a,b,c){return a.uniform1iv(b,c)},
d_:function(a,b,c){return a.uniform2fv(b,c)},
d0:function(a,b,c){return a.uniform3fv(b,c)},
d1:function(a,b,c){return a.uniform4fv(b,c)},
d2:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
d3:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
d5:function(a,b){return a.useProgram(b)},
d7:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
d9:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.h6.prototype={
eQ:function(a,b){return a.beginTransformFeedback(b)},
eT:function(a,b){return a.bindVertexArray(b)},
f5:function(a){return a.createVertexArray()},
fg:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
fh:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
fi:function(a){return a.endTransformFeedback()},
fU:function(a,b,c,d){this.eH(a,b,c,d)
return},
eH:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
fV:function(a,b,c){return a.vertexAttribDivisor(b,c)},
cb:function(a,b){return a.activeTexture(b)},
ce:function(a,b,c){return a.attachShader(b,c)},
cf:function(a,b,c){return a.bindBuffer(b,c)},
cg:function(a,b,c){return a.bindFramebuffer(b,c)},
ci:function(a,b,c){return a.bindTexture(b,c)},
cj:function(a,b){return a.blendEquation(b)},
ck:function(a,b,c){return a.blendFunc(b,c)},
cm:function(a,b,c,d){return a.bufferData(b,c,d)},
cn:function(a,b){return a.clear(b)},
co:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
cp:function(a,b){return a.compileShader(b)},
cq:function(a){return a.createBuffer()},
cr:function(a){return a.createProgram()},
cs:function(a,b){return a.createShader(b)},
ct:function(a){return a.createTexture()},
cv:function(a,b){return a.depthMask(b)},
cw:function(a,b){return a.disable(b)},
cz:function(a,b,c,d){return a.drawArrays(b,c,d)},
cA:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cB:function(a,b){return a.enable(b)},
cC:function(a,b){return a.enableVertexAttribArray(b)},
aN:function(a){return P.j1(a.getContextAttributes())},
bs:function(a){return a.getError()},
bt:function(a,b){return a.getProgramInfoLog(b)},
bu:function(a,b,c){return a.getProgramParameter(b,c)},
bv:function(a,b){return a.getShaderInfoLog(b)},
bw:function(a,b,c){return a.getShaderParameter(b,c)},
bx:function(a,b,c){return a.getUniformLocation(b,c)},
cG:function(a,b){return a.linkProgram(b)},
cK:function(a,b,c){return a.pixelStorei(b,c)},
bC:function(a,b,c){return a.shaderSource(b,c)},
bE:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aK:function(a,b,c,d,e,f,g,h,i,j){var t,s
t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){this.b8(a,b,c,d,e,f,g,h,i,j)
return}s=J.p(g)
if(!!s.$isb5&&h==null&&t&&j==null){this.b9(a,b,c,d,e,f,P.lM(g))
return}if(!!s.$isb6&&h==null&&t&&j==null){this.ba(a,b,c,d,e,f,g)
return}if(!!s.$isaz&&h==null&&t&&j==null){this.bb(a,b,c,d,e,f,g)
return}if(!!s.$isbd&&h==null&&t&&j==null){this.bc(a,b,c,d,e,f,g)
return}if(!!s.$isb4&&h==null&&t&&j==null){this.bd(a,b,c,d,e,f,g)
return}throw H.c(P.cb("Incorrect number or type of arguments"))},
cR:function(a,b,c,d,e,f,g){return this.aK(a,b,c,d,e,f,g,null,null,null)},
b8:function(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
b9:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
ba:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bb:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bc:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bd:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cS:function(a,b,c,d){return a.texParameterf(b,c,d)},
cT:function(a,b,c,d){return a.texParameteri(b,c,d)},
cW:function(a,b,c){return a.uniform1f(b,c)},
cX:function(a,b,c){return a.uniform1fv(b,c)},
cY:function(a,b,c){return a.uniform1i(b,c)},
cZ:function(a,b,c){return a.uniform1iv(b,c)},
d_:function(a,b,c){return a.uniform2fv(b,c)},
d0:function(a,b,c){return a.uniform3fv(b,c)},
d1:function(a,b,c){return a.uniform4fv(b,c)},
d2:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
d3:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
d5:function(a,b){return a.useProgram(b)},
d7:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
d9:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.hg.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return P.j1(this.ek(a,b))},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
ek:function(a,b){return a.item(b)},
$isj:1,
$asj:function(){return[P.Z]},
$asm:function(){return[P.Z]},
$isi:1,
$asi:function(){return[P.Z]},
$asn:function(){return[P.Z]}}
P.dx.prototype={}
P.dy.prototype={}
B.jp.prototype={
$1:function(a){$.$get$j2().j(0,a.which,!0)},
$S:function(a){return{func:1,args:[W.aI]}}}
B.jq.prototype={
$1:function(a){$.$get$j2().j(0,a.which,null)},
$S:function(a){return{func:1,args:[W.aI]}}}
B.jr.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.od=t
$.oe=C.b.a5(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.kn=s-C.b.F(window.innerWidth,2)
$.lV=-(t-C.b.F(window.innerHeight,2))},
$S:function(a){return{func:1,args:[W.N]}}}
B.js.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.c7=t-C.b.F(window.innerWidth,2)
$.c8=-(s-C.b.F(window.innerHeight,2))
if(a.button===2)$.$get$c6().j(0,"right",!0)
else $.$get$c6().j(0,"left",!0)},
$S:function(a){return{func:1,args:[W.N]}}}
B.jt.prototype={
$1:function(a){if(a.button===2)$.$get$c6().j(0,"right",null)
else $.$get$c6().j(0,"left",null)},
$S:function(a){return{func:1,args:[W.N]}}}
B.fO.prototype={
dQ:function(a,b,c,d){var t
d.toString
W.a0(d,W.n4(d),new B.fP(this),!1,W.aR)
W.a0(d,"mousemove",new B.fQ(this),!1,W.N)
t=W.aO
W.a0(d,"touchstart",new B.fR(),!1,t)
W.a0(d,"touchmove",new B.fS(this),!1,t)
B.oB(null)}}
B.fP.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.aw.gf9(a)*r.k3
if(C.c.a5(r.fy,t)>0)r.fy=C.c.a5(r.fy,t)}catch(q){s=H.J(q)
P.O(s)}},
$S:function(a){return{func:1,args:[W.aR]}}}
B.fQ.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=t.go+C.b.a5($.kn,$.c7)*0.01
s=t.id
r=$.c8
q=$.lV
t.id=s+(r-q)*0.01
$.c7=$.kn
$.c8=q}},
$S:function(a){return{func:1,args:[W.N]}}}
B.fR.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.ac(t.clientX)
C.c.ac(t.clientY)
$.c7=s
C.c.ac(t.clientX)
$.c8=C.c.ac(t.clientY)},
$S:function(a){return{func:1,args:[W.aO]}}}
B.fS.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.ac(t.clientX)
t=C.c.ac(t.clientY)
r=this.a
r.go=r.go+C.b.a5(s,$.c7)*0.01
r.id=r.id+($.c8-t)*0.01
$.c7=s
$.c8=t},
$S:function(a){return{func:1,args:[W.aO]}}}
L.aZ.prototype={
k:function(a){return"BONE["+this.d+"] ("+this.e+") "+H.d(this.a)+"\ntrans:\n"+this.b.k(0)+"offset:\n"+this.c.k(0)},
gcl:function(){return this.a}}
L.e2.prototype={
dF:function(a){var t,s,r
for(t=this.b,s=this.a,r=0;r<a;++r){s[r]=new T.C(new Float32Array(16))
t[r]=new T.C(new Float32Array(16))}}}
L.ce.prototype={
k:function(a){var t=[]
C.a.l(t,H.d(this.a.a))
C.a.l(t,""+this.b.length+": "+H.d(this.c))
C.a.l(t,""+this.d.length+": "+H.d(this.e))
C.a.l(t,""+this.f.length+": "+H.d(this.r))
return C.a.aa(t,"\n")},
seo:function(a){this.b=a},
sep:function(a){this.c=a},
sez:function(a){this.d=a},
seA:function(a){this.e=a},
seD:function(a){this.f=a},
seE:function(a){this.r=a}}
L.hc.prototype={
k:function(a){return"SkeletalAnimation["+H.d(this.a)+", duration: "+H.d(this.c)+", frames: "+this.b.length+"]"}}
G.fA.prototype={}
G.d6.prototype={
a1:function(a,b){var t=this.d
if(H.W(!t.u(0,a)))H.a1("uniform "+a+" already set")
t.j(0,a,b)},
bL:function(){return this.d},
k:function(a){var t,s,r,q
t=H.v(["{"+new H.av(H.j8(this),null).k(0)+"}["+this.a+"]"],[P.l])
for(s=this.d,r=s.gA(s),r=r.gv(r);r.p();){q=r.gq(r)
C.a.l(t,H.d(q)+": "+H.d(s.h(0,q)))}return C.a.aa(t,"\n")}}
G.e7.prototype={}
G.ea.prototype={
cD:function(a,b,c){J.mo(this.a,b)
if(c>0)J.mO(this.a,b,c)},
d8:function(a,b,c,d,e,f,g,h){J.jA(this.a,34962,b)
J.mP(this.a,c,d,e,!1,g,h)}}
G.eY.prototype={}
G.eP.prototype={}
G.f0.prototype={
a6:function(a){var t=this.e
H.b(!t.u(0,a))
H.b(C.i.bD(a,"a"))
switch($.$get$V().h(0,a).a){case"vec2":t.j(0,a,H.v([],[T.ac]))
break
case"vec3":t.j(0,a,H.v([],[T.o]))
break
case"vec4":t.j(0,a,H.v([],[T.T]))
break
case"float":t.j(0,a,H.v([],[P.a2]))
break
case"uvec4":t.j(0,a,H.v([],[[P.i,P.x]]))
break
default:if(H.W(!1))H.a1("unknown type for "+a)}},
aA:function(a){var t,s,r,q,p
for(t=a.length,s=this.d,r=0;r<t;++r){q=a[r]
q.toString
p=new T.o(new Float32Array(3))
p.D(q)
C.a.l(s,p)}},
dD:function(a,b){var t,s,r,q,p,o,n
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<s;++q){p=b[q]
p.toString
o=new Float32Array(2)
n=p.a
o[1]=n[1]
o[0]=n[0]
r.l(t,new T.ac(o))}},
aS:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<s;++q){p=b[q]
p.toString
o=new T.o(new Float32Array(3))
o.D(p)
r.l(t,o)}},
bG:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<s;++q){p=b[q]
p.toString
o=new T.T(new Float32Array(4))
o.D(p)
r.l(t,o)}},
dK:function(){var t,s,r,q,p,o,n
t=this.b
H.b(t.length>0||!1)
s=new Array(t.length*3)
s.fixed$length=Array
r=H.v(s,[P.x])
for(s=t.length,q=0,p=0;p<s;++p){o=t[p]
r[q]=o.a
r[q+1]=o.b
r[q+2]=o.c
q+=3}for(t=this.c,p=0;!1;++p){n=t[p]
r[q]=n.geK(n)
r[q+1]=n.gfZ(n)
r[q+2]=n.geU(n)
r[q+3]=n.geK(n)
r[q+4]=n.geU(n)
r[q+5]=n.gh_(n)
q+=6}H.b(q===r.length)
return r},
k:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4[0]"]
for(s=this.e,r=s.gA(s),r=r.gv(r);r.p();){q=r.gq(r)
p=$.$get$V().h(0,q).a
C.a.l(t,H.d(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.aa(t," ")}}
G.d3.prototype={}
G.d2.prototype={}
G.fv.prototype={
dO:function(a){this.a1("cDepthTest",!0)
this.a1("cDepthWrite",!0)
this.a1("cBlendEquation",$.$get$kF())
this.a1("cStencilFunc",$.$get$lc())}}
G.fx.prototype={
bI:function(a,b,c){var t,s
if(C.i.aW(a,0)===105){if(H.W(C.b.aQ(b.length,c)===this.z))H.a1("ChangeAttribute "+this.z)}else{t=C.b.aQ(b.length,c)
if(H.W(t===(this.ch.length/3|0)))H.a1("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}this.cy.j(0,a,b)
t=this.d
s=this.r.h(0,a)
J.jA(t.a,34962,s)
J.ks(t.a,34962,b,35048)},
bJ:function(a){this.ch=a
this.bI("aPosition",a,3)},
dL:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
ah:function(a,b,c){var t,s,r,q,p,o
t=J.kp(a,0)===105
if(t&&this.z===0)this.z=C.b.aQ(b.length,c)
s=this.r
r=this.d
s.j(0,a,J.jC(r.a))
this.bI(a,b,c)
q=$.$get$V().h(0,a)
if(q==null)throw H.c("Unknown canonical "+a)
p=this.x
if(H.W(p.u(0,a)))H.a1("unexpected attribute "+a)
o=p.h(0,a)
J.dZ(r.a,this.e)
r.cD(0,o,t?1:0)
r.d8(0,s.h(0,a),o,q.bK(),5126,!1,0,0)},
aA:function(a){var t,s,r,q,p
t=this.r
s=this.d
t.j(0,"aPosition",J.jC(s.a))
this.bJ(a)
r=$.$get$V().h(0,"aPosition")
if(r==null)throw H.c("Unknown canonical aPosition")
q=this.x
H.b(q.u(0,"aPosition"))
p=q.h(0,"aPosition")
J.dZ(s.a,this.e)
s.cD(0,p,0)
s.d8(0,t.h(0,"aPosition"),p,r.bK(),5126,!1,0,0)},
bH:function(a){var t,s,r,q
t=this.d
this.y=J.jC(t.a)
H.b(this.ch!=null)
s=this.ch.length
if(s<768){this.sb0(new Uint8Array(H.iW(a)))
this.Q=5121}else if(s<196608){this.sb0(new Uint16Array(H.iW(a)))
this.Q=5123}else{this.sb0(new Uint32Array(H.iW(a)))
this.Q=5125}J.dZ(t.a,this.e)
s=this.y
r=this.cx
q=J.p(r)
H.b(!!q.$islq||!!q.$islr||!!q.$isls)
J.jA(t.a,34963,s)
J.ks(t.a,34963,r,35048)},
k:function(a){var t,s,r,q
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,r=t.gA(t),r=r.gv(r);r.p();){q=r.gq(r)
C.a.l(s,H.d(q)+":"+t.h(0,q).length)}return"MESH["+this.a+"] "+C.a.aa(s,"  ")},
sb0:function(a){this.cx=a}}
G.fU.prototype={
dE:function(a,b){var t=C.b.ae(a,b)
if(this.z===t)return
this.z=t
this.bP()},
bP:function(){var t,s,r,q,p,o,n
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
t.ag(0,0,1/(p*s))
t.ag(1,1,1/p)
t.ag(2,2,(q+r)/o)
t.ag(3,2,-1)
t.ag(2,3,2*r*q/o)},
bL:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.o(new Float32Array(3))
o.a3(r,q,p)
p=this.d
p.j(0,"uEyePosition",o)
o=this.cy
o.D(t)
t=o.a
t[12]=0
t[13]=0
t[14]=0
t[15]=1
n=-s[12]
m=-s[13]
l=-s[14]
s=J.p(n)
r=!!s.$isT
k=r?s.gay(n):1
if(!!s.$iso){j=s.gm(n)
m=s.gn(n)
l=s.gG(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
l=s.gG(n)
n=j}else if(!(typeof n==="number")){n=null
m=null
l=null}s=C.c.L(t[0],n)
r=C.c.L(t[4],m)
q=C.c.L(t[8],l)
i=t[12]
h=C.c.L(t[1],n)
g=C.c.L(t[5],m)
f=C.c.L(t[9],l)
e=t[13]
d=C.c.L(t[2],n)
c=C.c.L(t[6],m)
b=C.c.L(t[10],l)
a=t[14]
a0=C.c.L(t[3],n)
a1=C.c.L(t[7],m)
a2=C.c.L(t[11],l)
a3=t[15]
t[12]=s+r+q+i*k
t[13]=h+g+f+e*k
t[14]=d+c+b+a*k
t[15]=a0+a1+a2+a3*k
a3=this.cx
a3.D(this.db)
a3.ab(0,o)
p.j(0,"uPerspectiveViewMatrix",a3)
return p}}
G.h4.prototype={
dS:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.G)(t),++o){n=t[o]
r.j(0,n,J.kx(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.G)(t),++o){n=t[o]
r.j(0,n,J.kx(q.a,p,n))}},
dM:function(a){var t,s,r,q,p
t=this.e.x
s=a.e.x
for(r=t.gA(t),r=r.gv(r);r.p();){q=r.gq(r)
p=t.h(0,q)
q=s.h(0,q)
if(p==null?q!=null:p!==q)return!1}return!0},
dX:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gi(t)===s.gi(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gA(s),s=s.gv(s);s.p();){q=s.gq(s)
if(!t.u(0,q))C.a.l(r,q)}for(t=this.x,s=new P.bR(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.p();){q=s.d
if(!t.E(0,q))C.a.l(r,q)}return r},
e_:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gA(b),s=s.gv(s),r=this.d,q=this.y,p=this.z,o=0;s.p();){n=s.gq(s)
switch(J.kp(n,0)){case 117:if(q.u(0,n)){m=b.h(0,n)
if(p.u(0,n))H.dX("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.j(0,n,a)
l=$.$get$V().h(0,n)
if(l==null)H.K("unknown "+n)
H.b(q.u(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.jH(r.a,k,m)
else if(!!J.p(m).$iskZ)J.mM(r.a,k,m)
break
case"float":if(l.c===0)J.mK(r.a,k,m)
else if(!!J.p(m).$iseU)J.mL(r.a,k,m)
break
case"mat4":if(l.c===0){n=H.ap(m,"$isC").a
J.kD(r.a,k,!1,n)}else if(!!J.p(m).$iseU)J.kD(r.a,k,!1,m)
else if(H.W(!1))H.a1("bad unform: "+n)
break
case"mat3":if(l.c===0){n=H.ap(m,"$isat").a
J.kC(r.a,k,!1,n)}else if(!!J.p(m).$iseU)J.kC(r.a,k,!1,m)
else if(H.W(!1))H.a1("bad unform: "+n)
break
case"vec4":n=l.c
j=r.a
if(n===0)J.kB(j,k,H.ap(m,"$isT").a)
else J.kB(j,k,m)
break
case"vec3":n=l.c
j=r.a
if(n===0)J.kA(j,k,H.ap(m,"$iso").a)
else J.kA(j,k,m)
break
case"vec2":n=l.c
j=r.a
if(n===0)J.kz(j,k,H.ap(m,"$isac").a)
else J.kz(j,k,m)
break
case"sampler2D":case"sampler2DShadow":n=C.b.a2(33984,this.ch)
J.kq(r.a,n)
n=H.ap(m,"$isbL").b
J.aW(r.a,3553,n)
n=this.ch
J.jH(r.a,k,n)
this.ch=this.ch+1
break
case"samplerCube":H.b(n==="uCubeTexture")
n=C.b.a2(33984,this.ch)
J.kq(r.a,n)
n=H.ap(m,"$isbL").b
J.aW(r.a,34067,n)
n=this.ch
J.jH(r.a,k,n)
this.ch=this.ch+1
break
default:H.dX("Error: unknow uniform type: "+j)
H.b(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":n=J.E(m,!0)
j=r.a
if(n)J.c9(j,2929)
else J.jD(j,2929)
break
case"cStencilFunc":H.ap(m,"$isd3")
n=m.a
j=r.a
if(n===1281)J.jD(j,2960)
else{J.c9(j,2960)
j=m.b
i=m.c
J.mE(r.a,n,j,i)}break
case"cDepthWrite":J.mi(r.a,m)
break
case"cBlendEquation":H.ap(m,"$isd2")
n=m.a
j=r.a
if(n===1281)J.jD(j,3042)
else{J.c9(j,3042)
j=m.b
i=m.c
J.mc(r.a,j,i)
J.mb(r.a,n)}break}++o
break}}h=P.n2(0,0,0,Date.now()-new P.b1(t,!1).a,0,0)
""+o
h.k(0)},
dJ:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
Date.now()
t=this.d
J.mN(t.a,this.r)
this.ch=0
this.z.Z(0)
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.G)(b),++r){q=b[r]
this.e_(q.a,q.bL())}s=this.Q
s.Z(0)
for(p=a.cy,p=p.gA(p),p=p.gv(p);p.p();)s.l(0,p.gq(p))
o=this.dX()
if(o.length!==0)P.O("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.d(o)))
s=a.d
p=a.e
J.dZ(s.a,p)
n=this.e.f.length>0
p=a.f
s=a.dL()
m=a.Q
l=a.z
if(n)J.m9(t.a,p)
if(m!==-1){k=t.a
if(l>1)J.mm(k,p,s,m,0,l)
else J.ml(k,p,s,m,0)}else{m=t.a
if(l>1)J.mk(m,p,0,s,l)
else J.mj(m,p,0,s)}if(n)J.mp(t.a)}}
G.A.prototype={
bK:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.b(!1)
return-1}}}
G.hb.prototype={
aR:function(a){var t,s,r,q,p
H.b(this.b==null)
for(t=a.length,s=this.c,r=this.x,q=0;q<a.length;a.length===t||(0,H.G)(a),++q){p=a[q]
H.b($.$get$V().u(0,p))
H.b(!C.a.E(s,p))
C.a.l(s,p)
r.j(0,p,this.r);++this.r}C.a.aO(s)},
ai:function(a){var t,s,r,q
H.b(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.G)(a),++r){q=a[r]
if(H.W($.$get$V().u(0,q)))H.a1("missing uniform "+q)
H.b(!C.a.E(s,q))
C.a.l(s,q)}C.a.aO(s)},
az:function(a){var t,s,r
H.b(this.b==null)
for(t=this.e,s=0;s<1;++s){r=a[s]
H.b($.$get$V().u(0,r))
H.b(!C.a.E(t,r))
C.a.l(t,r)}C.a.aO(t)},
bO:function(a,b){H.b(this.b==null)
this.b=this.bQ(!0,a,b)},
aT:function(a){return this.bO(a,null)},
dT:function(a,b){H.b(this.b==null)
this.b=this.bQ(!1,a,b)},
bN:function(a){return this.dT(a,null)},
bQ:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.b(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.G)(t),++o){n=t[o]
m=$.$get$V().h(0,n)
C.a.l(q,"layout (location="+H.d(p.h(0,n))+") in "+m.a+" "+H.d(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.G)(t),++o){k=t[o]
m=$.$get$V().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.d(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.G)(t),++o){k=t[o]
m=$.$get$V().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.d(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.G)(t),++o){k=t[o]
m=$.$get$V().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.d(k)+j+";")}C.a.l(q,"")
if(c!=null)C.a.N(q,c)
if(a)C.a.l(q,"void main(void) {")
C.a.N(q,b)
if(a)C.a.l(q,"}")
return C.a.aa(q,"\n")}}
G.he.prototype={
fA:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=this.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
b=new T.o(new Float32Array(3))
b.a3(0,1,0)
o=this.e
n=o.a
n[0]=s[12]
n[1]=s[13]
n[2]=s[14]
n=new Float32Array(3)
m=new T.o(n)
m.D(o)
l=a.a
n[0]=n[0]-l[0]
n[1]=n[1]-l[1]
n[2]=n[2]-l[2]
m.bj(0)
k=b.cu(m)
k.bj(0)
j=m.cu(k)
j.bj(0)
i=k.bg(o)
h=j.bg(o)
o=m.bg(o)
g=k.a
f=j.a
t.bB(g[0],f[0],n[0],0,g[1],f[1],n[1],0,g[2],f[2],n[2],0,-i,-h,-o,1)
s[12]=r
s[13]=q
s[14]=p},
bi:function(a){return this.fA(a,null)}}
G.d1.prototype={
bM:function(a,b){var t=this.e
if(t!==1)J.mH(a.a,b,34046,t)
t=this.r
J.e_(a.a,b,10240,t)
t=this.f
J.e_(a.a,b,10241,t)
if(this.b){J.e_(a.a,b,10242,33071)
J.e_(a.a,b,10243,33071)}}}
G.bL.prototype={
k:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.hI.prototype={
k:function(a){return"TypedTextureMutable["+this.a+", "+this.x+", "+this.f+" X "+this.r+"]"}}
G.f4.prototype={
dU:function(a){var t,s
t=this.d
s=this.c
J.aW(t.a,s,this.b)
J.mF(t.a,s,0,6408,6408,5121,a)}}
Y.f6.prototype={
$1:function(a){this.a.j(0,a.gcl(),a)
return a},
$S:function(a){return{func:1,args:[,]}}}
Y.f7.prototype={
$2:function(a,b){var t,s,r,q,p,o
t=J.z(a)
s=t.h(a,"name")
r=Y.ka(t.h(a,"transformation"))
q=new T.C(new Float32Array(16))
q.bB(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9],r[10],r[11],r[12],r[13],r[14],r[15])
q.cV()
p=new T.C(new Float32Array(16))
p.I()
r=this.a
o=r.a
H.b(o>b);++r.a
C.a.l(this.b,new L.aZ(s,q,p,o,b))
if(t.u(a,"children"))for(t=J.P(t.h(a,"children"));t.p();)this.$2(t.gq(t),o)},
$S:function(a,b){return{func:1,v:true,args:[[P.Z,P.l,,],P.x]}}}
Y.f5.prototype={
$1:function(a){this.a.j(0,a.gcl(),a)
return a},
$S:function(a){return{func:1,args:[,]}}}
R.e6.prototype={}
R.cQ.prototype={
cM:function(a){var t,s,r
t=this.db
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.O("size change "+H.d(s)+" "+H.d(r))
this.dx.dE(s,r)
this.z=s
this.Q=r}}
R.hi.prototype={
dV:function(a,b,c){var t,s,r
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
J.jz(this.a,s)
r=this.e3(b,c,90,30)
this.d=r
J.jz(this.a,r)
t=t.createElement("div")
this.c=t
J.jz(this.a,t)},
e3:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.nO("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.v).bW(r,"float")
r.setProperty(p,"left","")
p=C.v.bW(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.q.T(t,s)}return t}}
R.hj.prototype={
dZ:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.n.fT(s,2)+" fps"
t=this.c;(t&&C.q).dr(t,b)
r=C.b.F(30*C.n.eW(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.q).T(t,q)},
dY:function(a){return this.dZ(a,"")}}
A.bB.prototype={
dP:function(a,b){C.a.l(this.cy,b)},
k:function(a){return"NODE["+this.a+"]"}}
A.ba.prototype={}
A.h3.prototype={
dR:function(a,b,c){if(this.d==null)this.d=new G.eY(this.e,null,null,null,null)},
dI:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.d
s=this.r
r=this.z
q=this.Q
p=t.a
t=t.b
J.ma(p.a,36160,t)
H.b(r>0&&q>0)
J.mQ(p.a,this.x,this.y,r,q)
if(s!==0)J.md(p.a,s)
for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.G)(t),++o){n=t[o]
if(!n.c)continue
r=n.d
if(!r.c)continue
m=n.e
C.a.l(m,new G.d6(P.Y(),"transforms",!1,!0))
l=new T.C(new Float32Array(16))
l.I()
for(q=n.f,p=q.length,k=0;k<q.length;q.length===p||(0,H.G)(q),++k)A.lP(r,q[k],l,a,m)
m.pop()}},
dH:function(){return this.dI(null)}}
D.fp.prototype={
$1:function(a){this.a.ap(0,C.U.f6(0,W.o_(this.b.response)))},
$S:function(a){return{func:1,args:[,]}}}
D.fo.prototype={
$1:function(a){return this.a.ap(0,this.b)},
$S:function(a){return{func:1,args:[,]}}}
A.j9.prototype={
$2:function(a,b){var t=536870911&a+J.bo(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(a,b){return{func:1,args:[P.x,P.D]}}}
T.at.prototype={
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
k:function(a){return"[0] "+this.V(0).k(0)+"\n[1] "+this.V(1).k(0)+"\n[2] "+this.V(2).k(0)+"\n"},
h:function(a,b){return this.a[b]},
B:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.at){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gw:function(a){return A.dV(this.a)},
V:function(a){var t,s
t=new Float32Array(3)
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.o(t)},
f1:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
T.C.prototype={
ag:function(a,b,c){H.b(a<4)
H.b(b<4)
this.a[b*4+a]=c},
bB:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var t=this.a
t[15]=p
t[14]=o
t[13]=n
t[12]=m
t[11]=l
t[10]=k
t[9]=j
t[8]=i
t[7]=h
t[6]=g
t[5]=f
t[4]=e
t[3]=d
t[2]=c
t[1]=b
t[0]=a},
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
k:function(a){return"[0] "+this.V(0).k(0)+"\n[1] "+this.V(1).k(0)+"\n[2] "+this.V(2).k(0)+"\n[3] "+this.V(3).k(0)+"\n"},
h:function(a,b){return this.a[b]},
B:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.C){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gw:function(a){return A.dV(this.a)},
V:function(a){var t,s
t=new Float32Array(4)
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.T(t)},
cN:function(a){var t,s,r,q,p,o,n,m,l,k,j,i
t=Math.cos(a)
s=Math.sin(a)
r=this.a
q=r[4]
p=r[8]
o=r[5]
n=r[9]
m=r[6]
l=r[10]
k=r[7]
j=r[11]
i=-s
r[4]=q*t+p*s
r[5]=o*t+n*s
r[6]=m*t+l*s
r[7]=k*t+j*s
r[8]=q*i+p*t
r[9]=o*i+n*t
r[10]=m*i+l*t
r[11]=k*i+j*t},
de:function(a,b,c,d){var t,s,r,q
t=b.a
s=t[0]
r=t[1]
q=t[2]
t=this.a
t[0]=t[0]*s
t[1]=t[1]*s
t[2]=t[2]*s
t[3]=t[3]*s
t[4]=t[4]*r
t[5]=t[5]*r
t[6]=t[6]*r
t[7]=t[7]*r
t[8]=t[8]*q
t[9]=t[9]*q
t[10]=t[10]*q
t[11]=t[11]*q
t[12]=t[12]
t[13]=t[13]
t[14]=t[14]
t[15]=t[15]},
S:function(a,b){return this.de(a,b,null,null)},
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
cV:function(){var t,s
t=this.a
s=t[4]
t[4]=t[1]
t[1]=s
s=t[8]
t[8]=t[2]
t[2]=s
s=t[12]
t[12]=t[3]
t[3]=s
s=t[9]
t[9]=t[6]
t[6]=s
s=t[13]
t[13]=t[7]
t[7]=s
s=t[14]
t[14]=t[11]
t[11]=s},
ab:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.cM.prototype={
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gG:function(a){return this.a[2]},
gay:function(a){return this.a[3]},
gi:function(a){var t,s,r,q,p
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=t[3]
return Math.sqrt(s*s+r*r+q*q+p*p)},
h:function(a,b){return this.a[b]},
k:function(a){var t=this.a
return H.d(t[0])+", "+H.d(t[1])+", "+H.d(t[2])+" @ "+H.d(t[3])}}
T.ac.prototype={
D:function(a){var t,s
t=a.a
s=this.a
s[1]=t[1]
s[0]=t[0]},
k:function(a){var t=this.a
return"["+H.d(t[0])+","+H.d(t[1])+"]"},
B:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.ac){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gw:function(a){return A.dV(this.a)},
ae:function(a,b){var t=new T.ac(new Float32Array(2))
t.D(this)
t.S(0,1/b)
return t},
h:function(a,b){return this.a[b]},
gi:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
S:function(a,b){var t=this.a
t[1]=t[1]*b
t[0]=t[0]*b},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.o.prototype={
a3:function(a,b,c){var t=this.a
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
return"["+H.d(t[0])+","+H.d(t[1])+","+H.d(t[2])+"]"},
B:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.o){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gw:function(a){return A.dV(this.a)},
ae:function(a,b){return this.df(1/b)},
h:function(a,b){return this.a[b]},
gi:function(a){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return Math.sqrt(s*s+r*r+t*t)},
bj:function(a){var t,s,r,q,p,o
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=Math.sqrt(s*s+r*r+q*q)
if(p===0)return 0
o=1/p
t[0]=t[0]*o
t[1]=t[1]*o
t[2]=t[2]*o
return p},
bg:function(a){var t,s
t=a.a
s=this.a
return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]},
cu:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.o(new Float32Array(3))
t.a3(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
S:function(a,b){var t=this.a
t[2]=t[2]*b
t[1]=t[1]*b
t[0]=t[0]*b},
df:function(a){var t=new T.o(new Float32Array(3))
t.D(this)
t.S(0,a)
return t},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gG:function(a){return this.a[2]}}
T.T.prototype={
D:function(a){var t,s
t=a.a
s=this.a
s[3]=t[3]
s[2]=t[2]
s[1]=t[1]
s[0]=t[0]},
k:function(a){var t=this.a
return H.d(t[0])+","+H.d(t[1])+","+H.d(t[2])+","+H.d(t[3])},
B:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.T){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gw:function(a){return A.dV(this.a)},
ae:function(a,b){var t=new T.T(new Float32Array(4))
t.D(this)
t.S(0,1/b)
return t},
h:function(a,b){return this.a[b]},
gi:function(a){var t,s,r,q
t=this.a
s=t[0]
r=t[1]
q=t[2]
t=t[3]
return Math.sqrt(s*s+r*r+q*q+t*t)},
S:function(a,b){var t=this.a
t[0]=t[0]*b
t[1]=t[1]*b
t[2]=t[2]*b
t[3]=t[3]*b},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gG:function(a){return this.a[2]},
gay:function(a){return this.a[3]}}
X.jl.prototype={
$1:function(a){var t=H.ap(J.mv(a),"$isbu")
P.O(H.d(t.id)+" toggle "+H.d(t.checked))
this.a.h(0,t.id).c=t.checked},
$S:function(a){return{func:1,args:[W.f]}}}
X.jk.prototype={
$1:function(b2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
t=this.a
t.d=b2+0
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
s.id=0}r=C.c.eX(s.id,-1.4707963267948965,1.4707963267948965)
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
s.bi(p)
p=s.f.a
p[0]=m[2]
p[1]=m[6]
p[2]=m[10]
s=-s.k1
r=p[0]
q=p[1]
n=p[2]
l=Math.sqrt(r*r+q*q+n*n)
k=p[0]/l
j=p[1]/l
i=p[2]/l
h=Math.cos(s)
g=Math.sin(s)
f=1-h
e=k*k*f+h
s=i*g
d=k*j*f-s
p=j*g
c=k*i*f+p
b=j*k*f+s
a=j*j*f+h
s=k*g
a0=j*i*f-s
a1=i*k*f-p
a2=i*j*f+s
a3=i*i*f+h
s=m[0]
p=m[4]
n=m[8]
q=m[1]
r=m[5]
a4=m[9]
a5=m[2]
a6=m[6]
a7=m[10]
a8=m[3]
a9=m[7]
b0=m[11]
m[0]=s*e+p*b+n*a1
m[1]=q*e+r*b+a4*a1
m[2]=a5*e+a6*b+a7*a1
m[3]=a8*e+a9*b+b0*a1
m[4]=s*d+p*a+n*a2
m[5]=q*d+r*a+a4*a2
m[6]=a5*d+a6*a+a7*a2
m[7]=a8*d+a9*a+b0*a2
m[8]=s*c+p*a0+n*a3
m[9]=q*c+r*a0+a4*a3
m[10]=a5*c+a6*a0+a7*a3
m[11]=a8*c+a9*a0+b0*a3
this.c.dH()
C.ax.geO(window).aL(this)
this.d.dY(t.d)
b0=b2/1000
this.e.d.j(0,"uTime",C.b.by(C.n.fj(b0/0.0333),t.b.length))
t=t.c
a9=t.c
a8=t.a
m=t.d
L.k5(a9,a8,m,t.e,C.n.by(b0,m.c))
b1=R.kG(a9,t.e,1)
t.b.bJ(G.eT(b1,null))},
$S:function(a){return{func:1,v:true,args:[P.af]}}}
X.jm.prototype={
$1:function(a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.b
s=J.z(a4)
r=s.h(a4,1)
q=new G.d1(!1,!1,!1,!0,1,9729,9729)
p=J.kt(t.a)
o=new G.f4(r,"../asset/monster/monster.jpg",p,3553,t,q)
J.aW(t.a,3553,p)
p=q.d?1:0
J.mC(t.a,37440,p)
o.dU(r)
q.bM(t,3553)
H.b(J.kw(t.a)===0)
J.aW(t.a,3553,null)
q=this.c
q.a1("uTexture",o)
n=J.X(J.X(s.h(a4,0),"meshes"),0)
m=J.X(J.X(s.h(a4,0),"animations"),0)
l=new T.C(new Float32Array(16))
l.I()
k=Y.nd(s.h(a4,0))
j=Y.nc(n,k)
i=Y.nb(m,k)
P.O("Imnported "+i.k(0))
s=this.d
r=s.d
h=G.l5("../asset/monster/monster.json",r.d,4,r.e.x)
h.aA(G.eT(j.d,null))
h.bH(j.dK())
G.nQ(j,h)
r=new Float32Array(9)
p=new T.C(new Float32Array(16))
p.I()
g=new T.C(new Float32Array(16))
g.I()
f=new Float32Array(3)
e=new Float32Array(3)
d=new Float32Array(3)
c=new Float32Array(3)
g.cN(-0.785)
b=A.l6("wrapper",new A.bB(q,h,[],new T.at(r),p,g,new T.o(f),new T.o(e),new T.o(d),new T.o(c),h.a,!1,!0))
r=new T.o(new Float32Array(3))
r.a3(100,0,0)
b.bi(r)
H.b(!0)
C.a.l(this.e.f,b)
H.b(!0)
C.a.l(s.f,b)
s=this.a
s.b=[]
for(r=i.c,a=0;C.c.H(a,r);a+=0.0333){p=s.b;(p&&C.a).l(p,a)}a0=L.mZ(k,l,i,s.b)
r=k.length*4
p=s.b.length
g=$.$get$le()
f=J.kt(t.a)
a1=new G.hI(r,p,34836,"anim",f,3553,t,g)
J.aW(t.a,3553,f)
J.mG(t.a,3553,0,34836,r,p,0,6408,5126,a0)
g.bM(t,3553)
a2=J.kw(t.a)
if(H.W(a2===0))H.a1("texture error "+H.d(a2))
J.aW(t.a,3553,null)
s.a=a1
q.a1("uAnimationTable",a1)
t=this.f
r=new T.C(new Float32Array(16))
r.I()
a3=new R.e6(r,null,k,i,null,null)
q=L.kE(k.length)
a3.e=q
L.k5(k,r,i,q,0)
q=G.nn("wire",t.d,R.kG(k,q,1))
a3.b=q
r=new Float32Array(9)
p=new T.C(new Float32Array(16))
p.I()
g=new T.C(new Float32Array(16))
g.I()
f=new Float32Array(3)
e=new Float32Array(3)
d=new Float32Array(3)
r=new A.bB(this.r,q,[],new T.at(r),p,g,new T.o(f),new T.o(e),new T.o(d),new T.o(new Float32Array(3)),q.a,!1,!0)
a3.f=r
s.c=a3
g.cN(0.785)
b=A.l6("wrapper",r)
s=new T.o(new Float32Array(3))
s.a3(100,0,0)
b.bi(s)
H.b(!0)
C.a.l(t.f,b)
this.x.$1(0)},
$S:function(a){return{func:1,args:[P.i]}}}
J.a.prototype.dw=J.a.prototype.k
J.bv.prototype.dA=J.bv.prototype.k
P.R.prototype.dz=P.R.prototype.aM
W.aa.prototype.aP=W.aa.prototype.O
W.bX.prototype.dB=W.bX.prototype.Y;(function installTearOffs(){installTearOff(H.bf.prototype,"gfz",0,0,0,null,["$0"],["aI"],0)
installTearOff(H.ad.prototype,"gdh",0,0,0,null,["$1"],["M"],2)
installTearOff(H.aS.prototype,"gfb",0,0,0,null,["$1"],["a_"],2)
installTearOff(P,"o9",1,0,0,null,["$1"],["nK"],1)
installTearOff(P,"oa",1,0,0,null,["$1"],["nL"],1)
installTearOff(P,"ob",1,0,0,null,["$1"],["nM"],1)
installTearOff(P,"lL",1,0,0,null,["$0"],["o7"],0)
installTearOff(P.F.prototype,"gc_",0,0,0,null,["$2","$1"],["K","ea"],5)
installTearOff(P,"oh",1,0,0,null,["$2"],["mX"],7)
installTearOff(W,"om",1,0,0,null,["$4"],["nR"],4)
installTearOff(W,"on",1,0,0,null,["$4"],["nS"],4)
installTearOff(W.cJ.prototype,"gbl",0,1,0,null,["$0"],["bm"],3)
installTearOff(W.d5.prototype,"gbl",0,1,0,null,["$0"],["bm"],3)
installTearOff(R.cQ.prototype,"gfK",0,0,0,null,["$1"],["cM"],6)
installTearOff(X,"lI",1,0,0,null,["$0"],["ov"],0)})();(function inheritance(){inherit(P.D,null)
var t=P.D
inherit(H.jQ,t)
inherit(J.a,t)
inherit(J.cc,t)
inherit(P.R,t)
inherit(H.cB,t)
inherit(P.cx,t)
inherit(H.b3,t)
inherit(H.aC,t)
inherit(H.iC,t)
inherit(H.bf,t)
inherit(H.i8,t)
inherit(H.aT,t)
inherit(H.iB,t)
inherit(H.i2,t)
inherit(H.cP,t)
inherit(H.hz,t)
inherit(H.aA,t)
inherit(H.ad,t)
inherit(H.aS,t)
inherit(H.h2,t)
inherit(H.hF,t)
inherit(P.b2,t)
inherit(H.dz,t)
inherit(H.av,t)
inherit(P.aL,t)
inherit(H.fj,t)
inherit(H.fl,t)
inherit(P.a5,t)
inherit(P.jL,t)
inherit(P.i3,t)
inherit(P.bP,t)
inherit(P.F,t)
inherit(P.d8,t)
inherit(P.bG,t)
inherit(P.hm,t)
inherit(P.cX,t)
inherit(P.k0,t)
inherit(P.aX,t)
inherit(P.iT,t)
inherit(P.ha,t)
inherit(P.iy,t)
inherit(P.bR,t)
inherit(P.jU,t)
inherit(P.bS,t)
inherit(P.m,t)
inherit(P.iA,t)
inherit(P.cf,t)
inherit(P.ao,t)
inherit(P.H,t)
inherit(P.b1,t)
inherit(P.af,t)
inherit(P.aE,t)
inherit(P.cV,t)
inherit(P.jN,t)
inherit(P.ic,t)
inherit(P.eX,t)
inherit(P.ew,t)
inherit(P.i,t)
inherit(P.Z,t)
inherit(P.L,t)
inherit(P.bb,t)
inherit(P.l,t)
inherit(P.bH,t)
inherit(P.k3,t)
inherit(W.eh,t)
inherit(W.bQ,t)
inherit(W.n,t)
inherit(W.cL,t)
inherit(W.bX,t)
inherit(W.iO,t)
inherit(W.cr,t)
inherit(W.i5,t)
inherit(W.cK,t)
inherit(W.jY,t)
inherit(W.k6,t)
inherit(W.iJ,t)
inherit(W.dJ,t)
inherit(P.hU,t)
inherit(P.iE,t)
inherit(G.fA,t)
inherit(L.aZ,t)
inherit(L.e2,t)
inherit(L.ce,t)
inherit(L.hc,t)
inherit(G.ea,t)
inherit(G.eY,t)
inherit(G.eP,t)
inherit(G.f0,t)
inherit(G.d3,t)
inherit(G.d2,t)
inherit(G.A,t)
inherit(G.hb,t)
inherit(G.d1,t)
inherit(G.bL,t)
inherit(R.e6,t)
inherit(R.hi,t)
inherit(T.at,t)
inherit(T.C,t)
inherit(T.cM,t)
inherit(T.ac,t)
inherit(T.o,t)
inherit(T.T,t)
t=J.a
inherit(J.fc,t)
inherit(J.fd,t)
inherit(J.bv,t)
inherit(J.aF,t)
inherit(J.b7,t)
inherit(J.aG,t)
inherit(H.bA,t)
inherit(H.b8,t)
inherit(W.e,t)
inherit(W.e0,t)
inherit(W.e8,t)
inherit(W.b0,t)
inherit(W.a9,t)
inherit(W.d9,t)
inherit(W.em,t)
inherit(W.en,t)
inherit(W.eo,t)
inherit(W.ck,t)
inherit(W.cl,t)
inherit(W.da,t)
inherit(W.cn,t)
inherit(W.dc,t)
inherit(W.er,t)
inherit(W.f,t)
inherit(W.df,t)
inherit(W.f2,t)
inherit(W.dh,t)
inherit(W.b4,t)
inherit(W.b5,t)
inherit(W.fq,t)
inherit(W.fw,t)
inherit(W.dl,t)
inherit(W.cJ,t)
inherit(W.dp,t)
inherit(W.aj,t)
inherit(W.dt,t)
inherit(W.cN,t)
inherit(W.dv,t)
inherit(W.ak,t)
inherit(W.dA,t)
inherit(W.dD,t)
inherit(W.hy,t)
inherit(W.dF,t)
inherit(W.hD,t)
inherit(W.d5,t)
inherit(W.hM,t)
inherit(W.hO,t)
inherit(W.dK,t)
inherit(W.dM,t)
inherit(W.dO,t)
inherit(W.dQ,t)
inherit(W.dS,t)
inherit(P.dj,t)
inherit(P.dr,t)
inherit(P.fX,t)
inherit(P.fY,t)
inherit(P.h0,t)
inherit(P.dB,t)
inherit(P.dH,t)
inherit(P.e4,t)
inherit(P.h5,t)
inherit(P.h6,t)
inherit(P.dx,t)
t=J.bv
inherit(J.fV,t)
inherit(J.aQ,t)
inherit(J.aH,t)
inherit(J.jP,J.aF)
t=J.b7
inherit(J.cz,t)
inherit(J.cy,t)
t=P.R
inherit(H.j,t)
inherit(H.cC,t)
inherit(H.d7,t)
t=H.j
inherit(H.aK,t)
inherit(H.fk,t)
inherit(H.eu,H.cC)
t=P.cx
inherit(H.ft,t)
inherit(H.hS,t)
t=H.aK
inherit(H.bx,t)
inherit(P.fn,t)
inherit(P.iw,t)
t=H.aC
inherit(H.ju,t)
inherit(H.jv,t)
inherit(H.iu,t)
inherit(H.i9,t)
inherit(H.f9,t)
inherit(H.fa,t)
inherit(H.iD,t)
inherit(H.hA,t)
inherit(H.hB,t)
inherit(H.jw,t)
inherit(H.je,t)
inherit(H.jf,t)
inherit(H.jg,t)
inherit(H.jh,t)
inherit(H.ji,t)
inherit(H.hv,t)
inherit(H.fe,t)
inherit(H.ja,t)
inherit(H.jb,t)
inherit(H.jc,t)
inherit(P.hZ,t)
inherit(P.hY,t)
inherit(P.i_,t)
inherit(P.i0,t)
inherit(P.f_,t)
inherit(P.eZ,t)
inherit(P.id,t)
inherit(P.im,t)
inherit(P.ii,t)
inherit(P.ij,t)
inherit(P.ik,t)
inherit(P.ig,t)
inherit(P.il,t)
inherit(P.ie,t)
inherit(P.iq,t)
inherit(P.ir,t)
inherit(P.ip,t)
inherit(P.io,t)
inherit(P.hp,t)
inherit(P.hq,t)
inherit(P.hn,t)
inherit(P.ho,t)
inherit(P.iU,t)
inherit(P.iY,t)
inherit(P.iH,t)
inherit(P.iG,t)
inherit(P.iI,t)
inherit(P.fs,t)
inherit(P.es,t)
inherit(P.et,t)
inherit(W.ev,t)
inherit(W.hl,t)
inherit(W.hT,t)
inherit(W.ib,t)
inherit(W.fK,t)
inherit(W.fJ,t)
inherit(W.iK,t)
inherit(W.iL,t)
inherit(W.iR,t)
inherit(W.iS,t)
inherit(P.hW,t)
inherit(P.iZ,t)
inherit(P.j_,t)
inherit(P.j0,t)
inherit(B.jp,t)
inherit(B.jq,t)
inherit(B.jr,t)
inherit(B.js,t)
inherit(B.jt,t)
inherit(B.fP,t)
inherit(B.fQ,t)
inherit(B.fR,t)
inherit(B.fS,t)
inherit(Y.f6,t)
inherit(Y.f7,t)
inherit(Y.f5,t)
inherit(D.fp,t)
inherit(D.fo,t)
inherit(A.j9,t)
inherit(X.jl,t)
inherit(X.jk,t)
inherit(X.jm,t)
t=H.i2
inherit(H.bh,t)
inherit(H.c1,t)
t=P.b2
inherit(H.fL,t)
inherit(H.ff,t)
inherit(H.hK,t)
inherit(H.hH,t)
inherit(H.e9,t)
inherit(H.h7,t)
inherit(P.cd,t)
inherit(P.b9,t)
inherit(P.a7,t)
inherit(P.hL,t)
inherit(P.hJ,t)
inherit(P.bc,t)
inherit(P.eb,t)
inherit(P.el,t)
t=H.hv
inherit(H.hh,t)
inherit(H.bq,t)
inherit(H.hX,P.cd)
inherit(P.bw,P.aL)
t=P.bw
inherit(H.ai,t)
inherit(P.iv,t)
inherit(W.i1,t)
t=H.b8
inherit(H.fB,t)
inherit(H.cF,t)
t=H.cF
inherit(H.bT,t)
inherit(H.bV,t)
inherit(H.bU,H.bT)
inherit(H.cG,H.bU)
inherit(H.bW,H.bV)
inherit(H.cH,H.bW)
t=H.cG
inherit(H.cE,t)
inherit(H.fC,t)
t=H.cH
inherit(H.fD,t)
inherit(H.fE,t)
inherit(H.fF,t)
inherit(H.fG,t)
inherit(H.fH,t)
inherit(H.cI,t)
inherit(H.fI,t)
t=P.i3
inherit(P.bN,t)
inherit(P.iP,t)
inherit(P.iF,P.iT)
inherit(P.iz,H.ai)
inherit(P.h9,P.ha)
inherit(P.it,P.h9)
inherit(P.ix,P.it)
inherit(P.cA,P.bS)
inherit(P.cg,P.cX)
inherit(P.fg,P.cf)
inherit(P.fh,P.cg)
t=P.af
inherit(P.a2,t)
inherit(P.x,t)
t=P.a7
inherit(P.cO,t)
inherit(P.f8,t)
t=W.e
inherit(W.r,t)
inherit(W.au,t)
inherit(W.eR,t)
inherit(W.bt,t)
inherit(W.bz,t)
inherit(W.fZ,t)
inherit(W.cR,t)
inherit(W.bY,t)
inherit(W.c_,t)
inherit(W.hQ,t)
inherit(W.hR,t)
inherit(W.bM,t)
inherit(W.k7,t)
inherit(P.e5,t)
inherit(P.aY,t)
t=W.r
inherit(W.aa,t)
inherit(W.aB,t)
inherit(W.aD,t)
t=W.aa
inherit(W.k,t)
inherit(P.y,t)
t=W.au
inherit(W.ca,t)
inherit(W.f1,t)
inherit(W.fr,t)
t=W.k
inherit(W.e1,t)
inherit(W.e3,t)
inherit(W.ay,t)
inherit(W.az,t)
inherit(W.cj,t)
inherit(W.eW,t)
inherit(W.ct,t)
inherit(W.b6,t)
inherit(W.bu,t)
inherit(W.by,t)
inherit(W.h8,t)
inherit(W.cZ,t)
inherit(W.ht,t)
inherit(W.hu,t)
inherit(W.bI,t)
t=W.b0
inherit(W.ed,t)
inherit(W.ef,t)
inherit(W.eg,t)
inherit(W.ej,t)
t=W.a9
inherit(W.ee,t)
inherit(W.ei,t)
inherit(W.ek,t)
inherit(W.b_,W.d9)
inherit(W.ep,W.cl)
inherit(W.db,W.da)
inherit(W.cm,W.db)
inherit(W.dd,W.dc)
inherit(W.eq,W.dd)
inherit(W.dg,W.df)
inherit(W.eQ,W.dg)
inherit(W.di,W.dh)
inherit(W.bs,W.di)
inherit(W.cu,W.aD)
inherit(W.cv,W.bt)
t=W.f
inherit(W.aP,t)
inherit(P.hP,t)
t=W.aP
inherit(W.aI,t)
inherit(W.N,t)
inherit(W.aO,t)
inherit(W.fy,W.bz)
inherit(W.dm,W.dl)
inherit(W.fz,W.dm)
inherit(W.U,P.cA)
inherit(W.dq,W.dp)
inherit(W.bC,W.dq)
inherit(W.du,W.dt)
inherit(W.fW,W.du)
inherit(W.bZ,W.bY)
inherit(W.hd,W.bZ)
inherit(W.dw,W.dv)
inherit(W.hf,W.dw)
inherit(W.hk,W.dA)
inherit(W.dE,W.dD)
inherit(W.hw,W.dE)
inherit(W.c0,W.c_)
inherit(W.hx,W.c0)
inherit(W.dG,W.dF)
inherit(W.hC,W.dG)
inherit(W.bd,W.by)
inherit(W.aR,W.N)
inherit(W.dL,W.dK)
inherit(W.i4,W.dL)
inherit(W.i6,W.cn)
inherit(W.dN,W.dM)
inherit(W.is,W.dN)
inherit(W.dP,W.dO)
inherit(W.dn,W.dP)
inherit(W.dR,W.dQ)
inherit(W.iM,W.dR)
inherit(W.dT,W.dS)
inherit(W.iN,W.dT)
inherit(W.i7,W.i1)
inherit(W.de,P.bG)
inherit(W.bO,W.de)
inherit(W.ia,P.hm)
inherit(W.iQ,W.bX)
inherit(P.hV,P.hU)
inherit(P.a_,P.iE)
t=P.y
inherit(P.ex,t)
inherit(P.ey,t)
inherit(P.ez,t)
inherit(P.eA,t)
inherit(P.eB,t)
inherit(P.eC,t)
inherit(P.eD,t)
inherit(P.eE,t)
inherit(P.eF,t)
inherit(P.eG,t)
inherit(P.eH,t)
inherit(P.eI,t)
inherit(P.eJ,t)
inherit(P.eK,t)
inherit(P.eL,t)
inherit(P.eM,t)
inherit(P.eN,t)
inherit(P.eO,t)
inherit(P.eS,t)
inherit(P.ah,t)
inherit(P.fu,t)
inherit(P.fT,t)
inherit(P.bE,t)
t=P.ah
inherit(P.eV,t)
inherit(P.ab,t)
inherit(P.f3,t)
inherit(P.hs,t)
inherit(P.bJ,t)
inherit(P.hN,t)
inherit(P.dk,P.dj)
inherit(P.fi,P.dk)
inherit(P.ds,P.dr)
inherit(P.fM,P.ds)
inherit(P.h1,P.ab)
inherit(P.dC,P.dB)
inherit(P.hr,P.dC)
inherit(P.bK,P.bJ)
inherit(P.dI,P.dH)
inherit(P.hE,P.dI)
inherit(P.fN,P.aY)
inherit(P.dy,P.dx)
inherit(P.hg,P.dy)
t=G.fA
inherit(G.he,t)
inherit(G.d6,t)
inherit(G.fx,t)
inherit(G.h4,t)
inherit(A.h3,t)
inherit(A.ba,t)
t=G.he
inherit(G.e7,t)
inherit(A.bB,t)
inherit(B.fO,G.e7)
t=G.d6
inherit(G.fv,t)
inherit(G.fU,t)
t=G.bL
inherit(G.hI,t)
inherit(G.f4,t)
inherit(R.cQ,A.h3)
inherit(R.hj,R.hi)
mixin(H.bT,P.m)
mixin(H.bU,H.b3)
mixin(H.bV,P.m)
mixin(H.bW,H.b3)
mixin(P.bS,P.m)
mixin(W.d9,W.eh)
mixin(W.da,P.m)
mixin(W.db,W.n)
mixin(W.dc,P.m)
mixin(W.dd,W.n)
mixin(W.df,P.m)
mixin(W.dg,W.n)
mixin(W.dh,P.m)
mixin(W.di,W.n)
mixin(W.dl,P.m)
mixin(W.dm,W.n)
mixin(W.dp,P.m)
mixin(W.dq,W.n)
mixin(W.dt,P.m)
mixin(W.du,W.n)
mixin(W.bY,P.m)
mixin(W.bZ,W.n)
mixin(W.dv,P.m)
mixin(W.dw,W.n)
mixin(W.dA,P.aL)
mixin(W.dD,P.m)
mixin(W.dE,W.n)
mixin(W.c_,P.m)
mixin(W.c0,W.n)
mixin(W.dF,P.m)
mixin(W.dG,W.n)
mixin(W.dK,P.m)
mixin(W.dL,W.n)
mixin(W.dM,P.m)
mixin(W.dN,W.n)
mixin(W.dO,P.m)
mixin(W.dP,W.n)
mixin(W.dQ,P.m)
mixin(W.dR,W.n)
mixin(W.dS,P.m)
mixin(W.dT,W.n)
mixin(P.dj,P.m)
mixin(P.dk,W.n)
mixin(P.dr,P.m)
mixin(P.ds,W.n)
mixin(P.dB,P.m)
mixin(P.dC,W.n)
mixin(P.dH,P.m)
mixin(P.dI,W.n)
mixin(P.dx,P.m)
mixin(P.dy,W.n)})();(function constants(){C.p=W.ay.prototype
C.J=W.az.prototype
C.v=W.b_.prototype
C.q=W.cj.prototype
C.K=W.ck.prototype
C.L=W.ct.prototype
C.j=W.cu.prototype
C.x=W.cv.prototype
C.M=J.a.prototype
C.a=J.aF.prototype
C.n=J.cy.prototype
C.b=J.cz.prototype
C.c=J.b7.prototype
C.i=J.aG.prototype
C.T=J.aH.prototype
C.Y=H.cE.prototype
C.B=W.bC.prototype
C.C=J.fV.prototype
C.D=W.cN.prototype
C.I=W.cZ.prototype
C.u=J.aQ.prototype
C.aw=W.aR.prototype
C.ax=W.bM.prototype
C.d=new P.iF()
C.w=new P.aE(0)
C.N=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.O=function(hooks) {
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

C.P=function(getTagFallback) {
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
C.Q=function() {
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
C.R=function(hooks) {
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
C.S=function(hooks) {
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
C.U=new P.fg(null,null)
C.V=new P.fh(null)
C.W=H.v(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.l])
C.X=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.A=makeConstList([])
C.r=H.v(makeConstList(["bind","if","ref","repeat","syntax"]),[P.l])
C.t=H.v(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.l])
C.Z=new G.A("vec3","vertex btangents",0)
C.e=new G.A("vec3","",0)
C.a_=new G.A("vec4","delta from light",0)
C.o=new G.A("","",0)
C.E=new G.A("vec3","vertex coordinates",0)
C.a0=new G.A("vec3","vertex binormals",0)
C.F=new G.A("vec4","for wireframe",0)
C.a1=new G.A("vec4","per vertex color",0)
C.a2=new G.A("float","for normal maps",0)
C.k=new G.A("mat4","",0)
C.a4=new G.A("mat4","",4)
C.a3=new G.A("mat4","",128)
C.f=new G.A("float","",0)
C.a5=new G.A("float","",4)
C.a6=new G.A("float","depth for shadowmaps",0)
C.h=new G.A("sampler2D","",0)
C.a7=new G.A("float","for bump maps",0)
C.a8=new G.A("vec2","texture uvs",0)
C.a9=new G.A("float","time since program start in sec",0)
C.l=new G.A("vec2","",0)
C.aa=new G.A("samplerCube","",0)
C.m=new G.A("vec4","",0)
C.ab=new G.A("vec3","vertex normals",0)
C.ac=new G.A("sampler2DShadow","",0)
C.G=new G.A("vec3","per vertex color",0)
C.H=new G.A("mat3","",0)
C.ad=new G.A("vec3","vertex tangents",0)
C.ae=H.I("oF")
C.af=H.I("oG")
C.ag=H.I("eU")
C.ah=H.I("oH")
C.ai=H.I("oI")
C.aj=H.I("kZ")
C.ak=H.I("oJ")
C.al=H.I("l1")
C.am=H.I("L")
C.an=H.I("l")
C.ao=H.I("lq")
C.ap=H.I("lr")
C.aq=H.I("oL")
C.ar=H.I("ls")
C.as=H.I("ao")
C.at=H.I("a2")
C.au=H.I("x")
C.av=H.I("af")})();(function staticFields(){$.l9="$cachedFunction"
$.la="$cachedInvocation"
$.kK=null
$.kI=null
$.kd=!1
$.ki=null
$.lF=null
$.lX=null
$.j3=null
$.jd=null
$.kj=null
$.bi=null
$.c2=null
$.c3=null
$.ke=!1
$.w=C.d
$.kX=0
$.aq=null
$.jM=null
$.kW=null
$.kV=null
$.kT=null
$.kS=null
$.kR=null
$.kQ=null
$.od=0
$.oe=0
$.kn=0
$.lV=0
$.c7=0
$.c8=0
$.oC=!1
$.lQ=0})();(function lazyInitializers(){lazy($,"kP","$get$kP",function(){return H.lS("_$dart_dartClosure")})
lazy($,"jR","$get$jR",function(){return H.lS("_$dart_js")})
lazy($,"l_","$get$l_",function(){return H.ni()})
lazy($,"l0","$get$l0",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.kX
$.kX=t+1
t="expando$key$"+t}return new P.ew(t,null,[P.x])})
lazy($,"lf","$get$lf",function(){return H.al(H.hG({
toString:function(){return"$receiver$"}}))})
lazy($,"lg","$get$lg",function(){return H.al(H.hG({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"lh","$get$lh",function(){return H.al(H.hG(null))})
lazy($,"li","$get$li",function(){return H.al(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"lm","$get$lm",function(){return H.al(H.hG(void 0))})
lazy($,"ln","$get$ln",function(){return H.al(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"lk","$get$lk",function(){return H.al(H.ll(null))})
lazy($,"lj","$get$lj",function(){return H.al(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"lp","$get$lp",function(){return H.al(H.ll(void 0))})
lazy($,"lo","$get$lo",function(){return H.al(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"k9","$get$k9",function(){return P.nJ()})
lazy($,"kY","$get$kY",function(){return P.nP(null,P.L)})
lazy($,"c4","$get$c4",function(){return[]})
lazy($,"kO","$get$kO",function(){return{}})
lazy($,"lw","$get$lw",function(){return P.jV(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"kb","$get$kb",function(){return P.Y()})
lazy($,"j2","$get$j2",function(){return P.fm(P.x,P.ao)})
lazy($,"c6","$get$c6",function(){return P.fm(P.l,P.ao)})
lazy($,"lc","$get$lc",function(){return new G.d3(1281,0,4294967295)})
lazy($,"kF","$get$kF",function(){return new G.d2(1281,1281,1281)})
lazy($,"V","$get$V",function(){return P.as(["cBlendEquation",C.o,"cDepthWrite",C.o,"cDepthTest",C.o,"cStencilFunc",C.o,"tPosition",C.e,"tSpeed",C.e,"tForce",C.e,"aColors",C.G,"aColorAlpha",C.a1,"aPosition",C.E,"aTexUV",C.a8,"aNormal",C.ab,"aBinormal",C.a0,"aCenter",C.F,"aPointSize",C.f,"aBoneIndex",C.m,"aBoneWeight",C.m,"aTangent",C.ad,"aBitangent",C.Z,"iaRotation",C.m,"iaTranslation",C.e,"iaScale",C.e,"vColor",C.G,"vTexUV",C.l,"vLightWeighting",C.e,"vNormal",C.e,"vPosition",C.E,"vPositionFromLight",C.a_,"vCenter",C.F,"vDepth",C.a6,"uTransformationMatrix",C.k,"uModelMatrix",C.k,"uNormalMatrix",C.H,"uConvolutionMatrix",C.H,"uPerspectiveViewMatrix",C.k,"uLightPerspectiveViewMatrix",C.k,"uShadowMap",C.ac,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.aa,"uAnimationTable",C.h,"uTime",C.a9,"uCameraNear",C.f,"uCameraFar",C.f,"uFogNear",C.f,"uFogFar",C.f,"uPointSize",C.f,"uScale",C.f,"uAngle",C.f,"uCanvasSize",C.l,"uCenter2",C.l,"uCutOff",C.f,"uShininess",C.f,"uShadowBias",C.f,"uOpacity",C.f,"uColor",C.e,"uAmbientDiffuse",C.e,"uColorEmissive",C.e,"uColorSpecular",C.e,"uColorDiffuse",C.e,"uColorAlpha",C.m,"uColorAlpha2",C.m,"uEyePosition",C.e,"uMaterial",C.k,"uRange",C.l,"uDirection",C.l,"uBoneMatrices",C.a3,"uLightDescs",C.a4,"uLightCount",C.f,"uLightTypes",C.a5,"uBumpScale",C.a7,"uNormalScale",C.a2])})
lazy($,"le","$get$le",function(){var t=G.nE()
t.d=!1
t.b=!0
t.a=!1
t.f=9728
t.r=9728
return t})
lazy($,"kN","$get$kN",function(){return T.nH(1,1,0)})
lazy($,"m_","$get$m_",function(){var t=G.bF("SolidColor")
t.aR(["aPosition"])
t.ai(["uPerspectiveViewMatrix","uModelMatrix"])
t.aT(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"])
return t})
lazy($,"lZ","$get$lZ",function(){var t=G.bF("SolidColorF")
t.ai(["uColor"])
t.aT(["oFragColor = vec4( uColor, 1.0 );"])
return t})
lazy($,"lO","$get$lO",function(){var t=G.bF("FixedVertexColorV")
t.aR(["aPosition"])
t.ai(["uPerspectiveViewMatrix","uModelMatrix"])
t.az(["vColor"])
t.bO(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vColor = ColorFromPosition(aPosition);"],["// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"])
return t})
lazy($,"lN","$get$lN",function(){var t=G.bF("FixedVertexColorF")
t.az(["vColor"])
t.aT(["oFragColor = vec4( vColor, 1.0 );"])
return t})
lazy($,"lH","$get$lH",function(){var t=G.bF("AnimationV")
t.aR(["aPosition","aTexUV","aBoneIndex","aBoneWeight"])
t.az(["vTexUV"])
t.ai(["uPerspectiveViewMatrix","uModelMatrix","uAnimationTable","uTime"])
t.bN(["mat4 GetBoneMatrix(sampler2D table, int index, int time) {\n    vec4 v1 = texelFetch(table, ivec2(index * 4 + 0, time), 0);\n    vec4 v2 = texelFetch(table, ivec2(index * 4 + 1, time), 0);\n    vec4 v3 = texelFetch(table, ivec2(index * 4 + 2, time), 0);\n    vec4 v4 = texelFetch(table, ivec2(index * 4 + 3, time), 0);\n    return mat4(v1, v2, v3, v4);\n    //return uBoneMatrices[index];\n}\n\nmat4 adjustMatrix(sampler2D table, vec4 weights, ivec4 indices, int time) {\n    return weights.x * GetBoneMatrix(table, indices.x, time) +\n           weights.y * GetBoneMatrix(table, indices.y, time) +\n           weights.z * GetBoneMatrix(table, indices.z, time) +\n           weights.w * GetBoneMatrix(table, indices.w, time);\n}\n\nvoid main() {\n   mat4 skinMat = uModelMatrix * adjustMatrix(uAnimationTable,\n                                              aBoneWeight,\n                                              ivec4(aBoneIndex),\n                                              int(uTime));\n   vec4 pos = skinMat * vec4(aPosition, 1.0);\n   // vPosition = pos.xyz;\n   // This is not quite accurate\n   //vNormal = normalize(mat3(skinMat) * aNormal);\n   gl_Position = uPerspectiveViewMatrix * pos;\n\n   vTexUV = aTexUV;\n}\n\n"])
return t})
lazy($,"lG","$get$lG",function(){var t=G.bF("AnimationV")
t.az(["vTexUV"])
t.ai(["uTexture"])
t.bN(["void main() {\n  oFragColor = texture(uTexture, vTexUV);\n}\n"])
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
mangledGlobalNames:{x:"int",a2:"double",af:"num",l:"String",ao:"bool",L:"Null",i:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.r},{func:1,ret:P.ao,args:[W.aa,P.l,P.l,W.bQ]},{func:1,v:true,args:[P.D],opt:[P.bb]},{func:1,v:true,args:[W.f]},{func:1,ret:P.x,args:[P.H,P.H]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,Blob:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSCharsetRule:J.a,CSSConditionRule:J.a,CSSFontFaceRule:J.a,CSSGroupingRule:J.a,CSSImportRule:J.a,CSSKeyframeRule:J.a,MozCSSKeyframeRule:J.a,WebKitCSSKeyframeRule:J.a,CSSKeyframesRule:J.a,MozCSSKeyframesRule:J.a,WebKitCSSKeyframesRule:J.a,CSSMediaRule:J.a,CSSNamespaceRule:J.a,CSSPageRule:J.a,CSSRule:J.a,CSSStyleRule:J.a,CSSStyleSheet:J.a,CSSSupportsRule:J.a,CSSVariableReferenceValue:J.a,CSSViewportRule:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,File:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,Gamepad:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MimeType:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechGrammar:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,StyleSheet:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,Touch:J.a,TrackDefault:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGLength:J.a,SVGMatrix:J.a,SVGNumber:J.a,SVGPreserveAspectRatio:J.a,SVGTransform:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioParamMap:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bA,ArrayBufferView:H.b8,DataView:H.fB,Float32Array:H.cE,Float64Array:H.fC,Int16Array:H.fD,Int32Array:H.fE,Int8Array:H.fF,Uint16Array:H.fG,Uint32Array:H.fH,Uint8ClampedArray:H.cI,CanvasPixelArray:H.cI,Uint8Array:H.fI,HTMLBRElement:W.k,HTMLBaseElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMenuElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTextAreaElement:W.k,HTMLTimeElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLFrameSetElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,Accelerometer:W.ca,LinearAccelerationSensor:W.ca,AccessibleNodeList:W.e0,HTMLAnchorElement:W.e1,HTMLAreaElement:W.e3,HTMLBodyElement:W.ay,HTMLCanvasElement:W.az,CanvasRenderingContext2D:W.e8,CDATASection:W.aB,CharacterData:W.aB,Comment:W.aB,ProcessingInstruction:W.aB,Text:W.aB,CSSPerspective:W.ed,CSSPositionValue:W.ee,CSSRotation:W.ef,CSSScale:W.eg,CSSStyleDeclaration:W.b_,MSStyleCSSProperties:W.b_,CSS2Properties:W.b_,CSSImageValue:W.a9,CSSKeywordValue:W.a9,CSSNumericValue:W.a9,CSSResourceValue:W.a9,CSSUnitValue:W.a9,CSSURLImageValue:W.a9,CSSStyleValue:W.a9,CSSMatrixComponent:W.b0,CSSSkew:W.b0,CSSTransformComponent:W.b0,CSSTransformValue:W.ei,CSSTranslation:W.ej,CSSUnparsedValue:W.ek,DataTransferItemList:W.em,DeviceAcceleration:W.en,HTMLDivElement:W.cj,XMLDocument:W.aD,Document:W.aD,DOMException:W.eo,DOMImplementation:W.ck,DOMPoint:W.ep,DOMPointReadOnly:W.cl,ClientRectList:W.cm,DOMRectList:W.cm,DOMRectReadOnly:W.cn,DOMStringList:W.eq,DOMTokenList:W.er,Element:W.aa,AbortPaymentEvent:W.f,AnimationEvent:W.f,AnimationPlaybackEvent:W.f,ApplicationCacheErrorEvent:W.f,BackgroundFetchClickEvent:W.f,BackgroundFetchEvent:W.f,BackgroundFetchFailEvent:W.f,BackgroundFetchedEvent:W.f,BeforeInstallPromptEvent:W.f,BeforeUnloadEvent:W.f,BlobEvent:W.f,CanMakePaymentEvent:W.f,ClipboardEvent:W.f,CloseEvent:W.f,CustomEvent:W.f,DeviceMotionEvent:W.f,DeviceOrientationEvent:W.f,ErrorEvent:W.f,ExtendableEvent:W.f,ExtendableMessageEvent:W.f,FetchEvent:W.f,FontFaceSetLoadEvent:W.f,ForeignFetchEvent:W.f,GamepadEvent:W.f,HashChangeEvent:W.f,InstallEvent:W.f,MediaEncryptedEvent:W.f,MediaKeyMessageEvent:W.f,MediaQueryListEvent:W.f,MediaStreamEvent:W.f,MediaStreamTrackEvent:W.f,MessageEvent:W.f,MIDIConnectionEvent:W.f,MIDIMessageEvent:W.f,MutationEvent:W.f,NotificationEvent:W.f,PageTransitionEvent:W.f,PaymentRequestEvent:W.f,PaymentRequestUpdateEvent:W.f,PopStateEvent:W.f,PresentationConnectionAvailableEvent:W.f,PresentationConnectionCloseEvent:W.f,ProgressEvent:W.f,PromiseRejectionEvent:W.f,PushEvent:W.f,RTCDataChannelEvent:W.f,RTCDTMFToneChangeEvent:W.f,RTCPeerConnectionIceEvent:W.f,RTCTrackEvent:W.f,SecurityPolicyViolationEvent:W.f,SensorErrorEvent:W.f,SpeechRecognitionError:W.f,SpeechRecognitionEvent:W.f,SpeechSynthesisEvent:W.f,StorageEvent:W.f,SyncEvent:W.f,TrackEvent:W.f,TransitionEvent:W.f,WebKitTransitionEvent:W.f,VRDeviceEvent:W.f,VRDisplayEvent:W.f,VRSessionEvent:W.f,MojoInterfaceRequestEvent:W.f,ResourceProgressEvent:W.f,USBConnectionEvent:W.f,AudioProcessingEvent:W.f,OfflineAudioCompletionEvent:W.f,WebGLContextEvent:W.f,Event:W.f,InputEvent:W.f,AccessibleNode:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MessagePort:W.e,MIDIAccess:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RemotePlayback:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SourceBuffer:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,TextTrack:W.e,TextTrackCue:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,VTTCue:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,ServiceWorker:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,FileList:W.eQ,FileWriter:W.eR,HTMLFormElement:W.eW,Gyroscope:W.f1,HTMLHeadElement:W.ct,History:W.f2,HTMLCollection:W.bs,HTMLFormControlsCollection:W.bs,HTMLOptionsCollection:W.bs,HTMLDocument:W.cu,XMLHttpRequest:W.cv,XMLHttpRequestUpload:W.bt,XMLHttpRequestEventTarget:W.bt,ImageBitmap:W.b4,ImageData:W.b5,HTMLImageElement:W.b6,HTMLInputElement:W.bu,KeyboardEvent:W.aI,Location:W.fq,Magnetometer:W.fr,HTMLAudioElement:W.by,HTMLMediaElement:W.by,MediaList:W.fw,MIDIOutput:W.fy,MIDIInput:W.bz,MIDIPort:W.bz,MimeTypeArray:W.fz,PointerEvent:W.N,MouseEvent:W.N,DragEvent:W.N,DocumentFragment:W.r,ShadowRoot:W.r,Attr:W.r,DocumentType:W.r,Node:W.r,NodeIterator:W.cJ,NodeList:W.bC,RadioNodeList:W.bC,Plugin:W.aj,PluginArray:W.fW,PresentationConnection:W.fZ,Range:W.cN,RTCDataChannel:W.cR,DataChannel:W.cR,HTMLSelectElement:W.h8,AbsoluteOrientationSensor:W.au,AmbientLightSensor:W.au,OrientationSensor:W.au,RelativeOrientationSensor:W.au,Sensor:W.au,SourceBufferList:W.hd,SpeechGrammarList:W.hf,SpeechRecognitionResult:W.ak,Storage:W.hk,HTMLTableElement:W.cZ,HTMLTableRowElement:W.ht,HTMLTableSectionElement:W.hu,HTMLTemplateElement:W.bI,TextTrackCueList:W.hw,TextTrackList:W.hx,TimeRanges:W.hy,TouchEvent:W.aO,TouchList:W.hC,TrackDefaultList:W.hD,TreeWalker:W.d5,CompositionEvent:W.aP,FocusEvent:W.aP,TextEvent:W.aP,UIEvent:W.aP,URL:W.hM,VRStageBoundsPoint:W.hO,HTMLVideoElement:W.bd,VideoTrackList:W.hQ,WebSocket:W.hR,WheelEvent:W.aR,Window:W.bM,DOMWindow:W.bM,CSSRuleList:W.i4,DOMRect:W.i6,GamepadList:W.is,NamedNodeMap:W.dn,MozNamedAttrMap:W.dn,SpeechRecognitionResultList:W.iM,StyleSheetList:W.iN,IDBVersionChangeEvent:P.hP,SVGFEBlendElement:P.ex,SVGFEColorMatrixElement:P.ey,SVGFEComponentTransferElement:P.ez,SVGFECompositeElement:P.eA,SVGFEConvolveMatrixElement:P.eB,SVGFEDiffuseLightingElement:P.eC,SVGFEDisplacementMapElement:P.eD,SVGFEFloodElement:P.eE,SVGFEGaussianBlurElement:P.eF,SVGFEImageElement:P.eG,SVGFEMergeElement:P.eH,SVGFEMorphologyElement:P.eI,SVGFEOffsetElement:P.eJ,SVGFEPointLightElement:P.eK,SVGFESpecularLightingElement:P.eL,SVGFESpotLightElement:P.eM,SVGFETileElement:P.eN,SVGFETurbulenceElement:P.eO,SVGFilterElement:P.eS,SVGForeignObjectElement:P.eV,SVGCircleElement:P.ab,SVGEllipseElement:P.ab,SVGLineElement:P.ab,SVGPathElement:P.ab,SVGPolygonElement:P.ab,SVGPolylineElement:P.ab,SVGGeometryElement:P.ab,SVGAElement:P.ah,SVGClipPathElement:P.ah,SVGDefsElement:P.ah,SVGGElement:P.ah,SVGSwitchElement:P.ah,SVGGraphicsElement:P.ah,SVGImageElement:P.f3,SVGLengthList:P.fi,SVGMaskElement:P.fu,SVGNumberList:P.fM,SVGPatternElement:P.fT,SVGPoint:P.fX,SVGPointList:P.fY,SVGRect:P.h0,SVGRectElement:P.h1,SVGScriptElement:P.bE,SVGStringList:P.hr,SVGAnimateElement:P.y,SVGAnimateMotionElement:P.y,SVGAnimateTransformElement:P.y,SVGAnimationElement:P.y,SVGDescElement:P.y,SVGDiscardElement:P.y,SVGFEDistantLightElement:P.y,SVGFEFuncAElement:P.y,SVGFEFuncBElement:P.y,SVGFEFuncGElement:P.y,SVGFEFuncRElement:P.y,SVGFEMergeNodeElement:P.y,SVGLinearGradientElement:P.y,SVGMarkerElement:P.y,SVGMetadataElement:P.y,SVGRadialGradientElement:P.y,SVGSetElement:P.y,SVGStopElement:P.y,SVGStyleElement:P.y,SVGSymbolElement:P.y,SVGTitleElement:P.y,SVGViewElement:P.y,SVGGradientElement:P.y,SVGComponentTransferFunctionElement:P.y,SVGFEDropShadowElement:P.y,SVGMPathElement:P.y,SVGElement:P.y,SVGSVGElement:P.hs,SVGTextPathElement:P.bJ,SVGTextContentElement:P.bJ,SVGTSpanElement:P.bK,SVGTextElement:P.bK,SVGTextPositioningElement:P.bK,SVGTransformList:P.hE,SVGUseElement:P.hN,AudioBuffer:P.e4,AudioTrackList:P.e5,AudioContext:P.aY,webkitAudioContext:P.aY,BaseAudioContext:P.aY,OfflineAudioContext:P.fN,WebGLRenderingContext:P.h5,WebGL2RenderingContext:P.h6,SQLResultSetRowList:P.hg})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,Blob:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSStyleSheet:true,CSSSupportsRule:true,CSSVariableReferenceValue:true,CSSViewportRule:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,File:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,Gamepad:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechGrammar:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,StyleSheet:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,Touch:true,TrackDefault:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGLength:true,SVGMatrix:true,SVGNumber:true,SVGPreserveAspectRatio:true,SVGTransform:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioParamMap:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,Accelerometer:true,LinearAccelerationSensor:true,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSPositionValue:true,CSSRotation:true,CSSScale:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSSkew:true,CSSTransformComponent:false,CSSTransformValue:true,CSSTranslation:true,CSSUnparsedValue:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMPoint:true,DOMPointReadOnly:false,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AccessibleNode:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnectionList:true,PresentationRequest:true,RemotePlayback:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SourceBuffer:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,TextTrack:true,TextTrackCue:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,VTTCue:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,ServiceWorker:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,FileList:true,FileWriter:true,HTMLFormElement:true,Gyroscope:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,ImageBitmap:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,Magnetometer:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,PresentationConnection:true,Range:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,AbsoluteOrientationSensor:true,AmbientLightSensor:true,OrientationSensor:true,RelativeOrientationSensor:true,Sensor:false,SourceBufferList:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VRStageBoundsPoint:true,HTMLVideoElement:true,VideoTrackList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,IDBVersionChangeEvent:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGAElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLengthList:true,SVGMaskElement:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMetadataElement:true,SVGRadialGradientElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSymbolElement:true,SVGTitleElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGSVGElement:true,SVGTextPathElement:true,SVGTextContentElement:false,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransformList:true,SVGUseElement:true,AudioBuffer:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cF.$nativeSuperclassTag="ArrayBufferView"
H.bT.$nativeSuperclassTag="ArrayBufferView"
H.bU.$nativeSuperclassTag="ArrayBufferView"
H.cG.$nativeSuperclassTag="ArrayBufferView"
H.bV.$nativeSuperclassTag="ArrayBufferView"
H.bW.$nativeSuperclassTag="ArrayBufferView"
H.cH.$nativeSuperclassTag="ArrayBufferView"
W.bY.$nativeSuperclassTag="EventTarget"
W.bZ.$nativeSuperclassTag="EventTarget"
W.c_.$nativeSuperclassTag="EventTarget"
W.c0.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.m0(X.lI(),b)},[])
else (function(b){H.m0(X.lI(),b)})([])})})()