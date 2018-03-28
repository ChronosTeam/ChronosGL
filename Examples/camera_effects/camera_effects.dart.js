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
a[c]=function(){a[c]=function(){H.nq(b)}
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
return d?function(e){if(t===null)t=H.jj(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.jj(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.jj(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={iW:function iW(a){this.a=a},
j2:function(a,b,c,d){if(!!a.$isj)return new H.e7(a,b,[c,d])
return new H.cm(a,b,[c,d])},
ce:function(){return new P.aZ("No element")},
mj:function(){return new P.aZ("Too many elements")},
mi:function(){return new P.aZ("Too few elements")},
mz:function(a,b){H.cB(a,0,J.bd(a)-1,b)},
cB:function(a,b,c,d){if(c-b<=32)H.my(a,b,c,d)
else H.mx(a,b,c,d)},
my:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.O(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.a6(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.j(a,q,s.h(a,p))
q=p}s.j(a,q,r)}},
mx:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.b(t>32)
s=C.b.R(t+1,6)
r=a3+s
q=a4-s
p=C.b.R(a3+a4,2)
o=p-s
n=p+s
t=J.O(a2)
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
j=h}t.j(a2,r,m)
t.j(a2,p,k)
t.j(a2,q,i)
t.j(a2,o,t.h(a2,a3))
t.j(a2,n,t.h(a2,a4))
g=a3+1
f=a4-1
if(J.B(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=t.h(a2,e)
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
H.cB(a2,a3,g-2,a5)
H.cB(a2,f+2,a4,a5)
if(a0)return
if(g<r&&f>q){for(;J.B(a5.$2(t.h(a2,g),l),0);)++g
for(;J.B(a5.$2(t.h(a2,f),j),0);)--f
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
break}}H.cB(a2,g,f,a5)}else H.cB(a2,g,f,a5)},
j:function j(){},
aS:function aS(){},
ck:function ck(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cm:function cm(a,b,c){this.a=a
this.b=b
this.$ti=c},
e7:function e7(a,b,c){this.a=a
this.b=b
this.$ti=c},
eY:function eY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bo:function bo(a,b,c){this.a=a
this.b=b
this.$ti=c},
cN:function cN(a,b,c){this.a=a
this.b=b
this.$ti=c},
hb:function hb(a,b,c){this.a=a
this.b=b
this.$ti=c},
aR:function aR(){},
dz:function(a,b){var t=a.af(b)
if(!u.globalState.d.cy)u.globalState.f.al()
return t},
ii:function(){++u.globalState.f.b},
iy:function(){--u.globalState.f.b
H.b(u.globalState.f.b>=0)},
l7:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.o(s).$isf)throw H.c(P.bY("Arguments to main must be a List: "+H.e(s)))
u.globalState=new H.hQ(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$ka()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.hp(P.j1(null,H.aF),0)
q=P.w
s.seB(new H.ai(0,null,null,null,null,null,0,[q,H.b2]))
s.seD(new H.ai(0,null,null,null,null,null,0,[q,null]))
if(s.x){r=new H.hP()
s.Q=r
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.md,r)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.mO)}if(u.globalState.x)return
o=H.kE()
u.globalState.e=o
u.globalState.z.j(0,o.a,o)
u.globalState.d=o
if(H.b9(a,{func:1,args:[P.H]}))o.af(new H.iE(t,a))
else if(H.b9(a,{func:1,args:[P.H,P.H]}))o.af(new H.iF(t,a))
else o.af(a)
u.globalState.f.al()},
mO:function(a){var t=P.aj(["command","print","msg",a])
return new H.a1(!0,P.b3(null,P.w)).I(t)},
kE:function(){var t,s
t=u.globalState.a++
s=P.w
t=new H.b2(t,new H.ai(0,null,null,null,null,null,0,[s,H.cz]),P.az(null,null,null,s),u.createNewIsolate(),new H.cz(0,null,!1),new H.ar(H.l5()),new H.ar(H.l5()),!1,!1,[],P.az(null,null,null,null),null,null,!1,!0,P.az(null,null,null,null))
t.dk()
return t},
mf:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.mg()
return},
mg:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.c(P.t("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.c(P.t('Cannot extract URI from "'+t+'"'))},
md:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=new H.aE(!0,[]).U(b.data)
s=J.O(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.nf(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.aE(!0,[]).U(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.aE(!0,[]).U(s.h(t,"replyTo"))
k=H.kE()
u.globalState.f.a.P(0,new H.aF(k,new H.eH(q,p,o,n,m,l),"worker-start"))
u.globalState.d=k
u.globalState.f.al()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.lJ(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.al()
break
case"close":u.globalState.ch.ak(0,$.$get$kb().h(0,a))
a.terminate()
u.globalState.f.al()
break
case"log":H.mc(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
j=P.aj(["command","print","msg",t])
j=new H.a1(!0,P.b3(null,P.w)).I(j)
s.toString
self.postMessage(j)}else P.Y(s.h(t,"msg"))
break
case"error":throw H.c(s.h(t,"msg"))}},
mc:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aj(["command","log","msg",a])
r=new H.a1(!0,P.b3(null,P.w)).I(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.G(q)
t=H.a2(q)
s=P.c9(t)
throw H.c(s)}},
me:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.kh=$.kh+("_"+s)
$.ki=$.ki+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.H(0,["spawned",new H.b4(s,r),q,t.r])
r=new H.eI(t,d,a,c,b)
if(e){t.bI(q,q)
u.globalState.f.a.P(0,new H.aF(t,r,"start isolate"))}else r.$0()},
mB:function(a,b){var t=new H.fV(!0,!1,null,0)
t.dd(a,b)
return t},
mQ:function(a){return new H.aE(!0,[]).U(new H.a1(!1,P.b3(null,P.w)).I(a))},
iE:function iE(a,b){this.a=a
this.b=b},
iF:function iF(a,b){this.a=a
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
hp:function hp(a,b){this.a=a
this.b=b},
hq:function hq(a){this.a=a},
aF:function aF(a,b,c){this.a=a
this.b=b
this.c=c},
hP:function hP(){},
eH:function eH(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eI:function eI(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hj:function hj(){},
b4:function b4(a,b){this.b=a
this.a=b},
hR:function hR(a,b){this.a=a
this.b=b},
bS:function bS(a,b,c){this.b=a
this.c=b
this.a=c},
cz:function cz(a,b,c){this.a=a
this.b=b
this.c=c},
fV:function fV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fW:function fW(a,b){this.a=a
this.b=b},
fX:function fX(a,b){this.a=a
this.b=b},
ar:function ar(a){this.a=a},
a1:function a1(a,b){this.a=a
this.b=b},
aE:function aE(a,b){this.a=a
this.b=b},
n9:function(a){return u.types[a]},
nh:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.o(a).$isq},
e:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.be(a)
if(typeof t!=="string")throw H.c(H.ad(a))
return t},
mt:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t=J.aw(t)
s=t[0]
r=t[1]
return new H.fs(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aB:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
bv:function(a){var t,s,r,q,p,o,n,m,l
t=J.o(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.M||!!J.o(a).$isaD){p=C.y(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.h.aF(q,0)===36)q=C.h.cS(q,1)
l=H.dB(H.il(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+l,u.mangledGlobalNames)},
K:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mr:function(a){return a.b?H.K(a).getUTCFullYear()+0:H.K(a).getFullYear()+0},
mp:function(a){return a.b?H.K(a).getUTCMonth()+1:H.K(a).getMonth()+1},
ml:function(a){return a.b?H.K(a).getUTCDate()+0:H.K(a).getDate()+0},
mm:function(a){return a.b?H.K(a).getUTCHours()+0:H.K(a).getHours()+0},
mo:function(a){return a.b?H.K(a).getUTCMinutes()+0:H.K(a).getMinutes()+0},
mq:function(a){return a.b?H.K(a).getUTCSeconds()+0:H.K(a).getSeconds()+0},
mn:function(a){return a.b?H.K(a).getUTCMilliseconds()+0:H.K(a).getMilliseconds()+0},
kg:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.c(H.ad(a))
return a[b]},
b8:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a7(!0,b,"index",null)
t=J.bd(a)
if(b<0||C.b.cz(b,t))return P.x(b,a,"index",null,t)
return P.fp(b,"index",null)},
ad:function(a){return new P.a7(!0,a,null,null)},
c:function(a){var t
if(a==null)a=new P.aW()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.l8})
t.name=""}else t.toString=H.l8
return t},
l8:function(){return J.be(this.dartException)},
E:function(a){throw H.c(a)},
a5:function(a){throw H.c(P.ag(a))},
ab:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.h0(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
h1:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
ks:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
kf:function(a,b){return new H.fg(a,b==null?null:b.method)},
iY:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.eM(a,s,t?null:b.receiver)},
G:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.iG(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aP(r,16)&8191)===10)switch(q){case 438:return t.$1(H.iY(H.e(s)+" (Error "+q+")",null))
case 445:case 5007:return t.$1(H.kf(H.e(s)+" (Error "+q+")",null))}}if(a instanceof TypeError){p=$.$get$km()
o=$.$get$kn()
n=$.$get$ko()
m=$.$get$kp()
l=$.$get$kt()
k=$.$get$ku()
j=$.$get$kr()
$.$get$kq()
i=$.$get$kw()
h=$.$get$kv()
g=p.M(s)
if(g!=null)return t.$1(H.iY(s,g))
else{g=o.M(s)
if(g!=null){g.method="call"
return t.$1(H.iY(s,g))}else{g=n.M(s)
if(g==null){g=m.M(s)
if(g==null){g=l.M(s)
if(g==null){g=k.M(s)
if(g==null){g=j.M(s)
if(g==null){g=m.M(s)
if(g==null){g=i.M(s)
if(g==null){g=h.M(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return t.$1(H.kf(s,g))}}return t.$1(new H.h4(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.cE()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.a7(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.cE()
return a},
a2:function(a){var t
if(a==null)return new H.dd(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dd(a,null)},
nl:function(a){if(a==null||typeof a!='object')return J.bc(a)
else return H.aB(a)},
n7:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=a.length
for(r=0;r<s;){q=r+1
H.b(t)
p=a[r]
r=q+1
H.b(t)
b.j(0,p,a[q])}return b},
ng:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dz(b,new H.it(a))
case 1:return H.dz(b,new H.iu(a,d))
case 2:return H.dz(b,new H.iv(a,d,e))
case 3:return H.dz(b,new H.iw(a,d,e,f))
case 4:return H.dz(b,new H.ix(a,d,e,f,g))}throw H.c(P.c9("Unsupported number of arguments for wrapped closure"))},
ap:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.ng)
a.$identity=t
return t},
lZ:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.o(c).$isf){t.$reflectionInfo=c
r=H.mt(t).r}else r=c
q=d?Object.create(new H.fD().constructor.prototype):Object.create(new H.bf(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.jL(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.n9,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.jI:H.iQ
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.c("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.jL(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
lW:function(a,b,c,d){var t=H.iQ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
jL:function(a,b,c){var t,s,r,q
if(c)return H.lY(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.lW(s,b==null?r!=null:b!==r,t,b)
return q},
lX:function(a,b,c,d){var t,s
t=H.iQ
s=H.jI
switch(b?-1:a){case 0:throw H.c(H.mw("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
lY:function(a,b){var t,s,r,q
t=$.jJ
if(t==null){t=H.jG("self")
$.jJ=t}t=$.jH
if(t==null){t=H.jG("receiver")
$.jH=t}s=b.$stubName
r=b.length
q=a[s]
t=H.lX(r,b==null?q!=null:b!==q,s,b)
return t},
jj:function(a,b,c,d,e,f){var t,s
t=J.aw(b)
s=!!J.o(c).$isf?J.aw(c):c
return H.lZ(a,t,s,!!d,e,f)},
iQ:function(a){return a.a},
jI:function(a){return a.c},
jG:function(a){var t,s,r,q,p
t=new H.bf("self","target","receiver","name")
s=J.aw(Object.getOwnPropertyNames(t))
for(r=s.length,q=0;q<r;++q){p=s[q]
if(t[p]===a)return p}},
nI:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.am(a,"String"))},
nH:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.am(a,"num"))},
n2:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.am(a,"bool"))},
nf:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.am(a,"int"))},
nn:function(a,b){throw H.c(H.am(a,b.substring(3)))},
nm:function(a,b){var t=J.O(b)
throw H.c(H.jK(a,t.be(b,3,t.gi(b))))},
jo:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.o(a)[b])return a
H.nn(a,b)},
af:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.o(a)[b]
else t=!0
if(t)return a
H.nm(a,b)},
nG:function(a){if(a==null)return a
if(!!J.o(a).$isf)return a
throw H.c(H.am(a,"List"))},
jk:function(a){var t=J.o(a)
return"$S" in t?t.$S():null},
b9:function(a,b){var t,s
if(a==null)return!1
t=H.jk(a)
if(t==null)s=!1
else s=H.l1(t,b)
return s},
nE:function(a,b){var t,s
if(a==null)return a
if($.jg)return a
$.jg=!0
try{if(H.b9(a,b))return a
t=H.iD(b,null)
s=H.am(a,t)
throw H.c(s)}finally{$.jg=!1}},
am:function(a,b){return new H.h2("TypeError: "+H.e(P.c8(a))+": type '"+H.kL(a)+"' is not a subtype of type '"+b+"'")},
jK:function(a,b){return new H.dN("CastError: "+H.e(P.c8(a))+": type '"+H.kL(a)+"' is not a subtype of type '"+b+"'")},
kL:function(a){var t
if(a instanceof H.at){t=H.jk(a)
if(t!=null)return H.iD(t,null)
return"Closure"}return H.bv(a)},
ae:function(a){if(!0===a)return!1
if(!!J.o(a).$isiU)a=a.$0()
if(typeof a==="boolean")return!a
throw H.c(H.am(a,"bool"))},
ao:function(a){throw H.c(new H.hd(a))},
b:function(a){if(H.ae(a))throw H.c(P.lV(null))},
nq:function(a){throw H.c(new P.dY(a))},
mw:function(a){return new H.fw(a)},
l5:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
kZ:function(a){return u.getIsolateTag(a)},
F:function(a){return new H.an(a,null)},
y:function(a,b){H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
il:function(a){if(a==null)return
return a.$ti},
l_:function(a,b){return H.jr(a["$as"+H.e(b)],H.il(a))},
S:function(a,b,c){var t,s
t=H.l_(a,b)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
a3:function(a,b){var t,s
t=H.il(a)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
iD:function(a,b){var t=H.ba(a,b)
return t},
ba:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.b(!0)
H.b(!0)
return a[0].name+H.dB(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.e(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.ba(t,b)
return H.mS(a,b)}return"unknown-reified-type"},
mS:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.ba(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.ba(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.ba(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.n6(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.ba(l[j],b)+(" "+H.e(j))}q+="}"}return"("+q+") => "+t},
dB:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=new P.by("")
for(r=b,q=!0,p=!0;H.b(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.b(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.ba(o,c)}return p?"":"<"+s.k(0)+">"},
im:function(a){var t,s,r
if(a instanceof H.at){t=H.jk(a)
if(t!=null)return H.iD(t,null)}s=J.o(a).constructor.name
if(a==null)return s
r=H.dB(a.$ti,0,null)
return s+r},
jr:function(a,b){if(a==null)return b
H.b(typeof a=="function")
H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.jp(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.jp(a,null,b)
return b},
bW:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.il(a)
s=J.o(a)
if(s[b]==null)return!1
return H.kP(H.jr(s[d],t),c)},
dC:function(a,b,c,d){var t,s
if(a==null)return a
t=H.bW(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.dB(c,0,null)
throw H.c(H.jK(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
nB:function(a,b,c,d){var t,s
if(a==null)return a
t=H.bW(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.dB(c,0,null)
throw H.c(H.am(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
kP:function(a,b){var t,s,r,q,p
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
nC:function(a,b,c){return H.jp(a,b,H.l_(b,c))},
T:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.name==="H")return!0
if('func' in b)return H.l1(a,b)
if('func' in a)return b.name==="iU"||b.name==="A"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.b(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.b(!0)
q=b[0]}else q=b
if(q!==s){p=H.iD(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.kP(H.jr(o,t),r)},
kO:function(a,b,c){var t,s,r,q,p,o,n
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
mZ:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
H.b(typeof a=='object')
H.b(typeof b=='object')
t=J.aw(Object.getOwnPropertyNames(b))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.T(p,o)||H.T(o,p)))return!1}return!0},
l1:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
if(n===m){if(!H.kO(r,q,!1))return!1
if(!H.kO(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.b(j)
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
if(!(H.T(g,f)||H.T(f,g)))return!1}}return H.mZ(a.named,b.named)},
jp:function(a,b,c){H.b(typeof a=="function")
H.b(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
nJ:function(a){var t=$.jl
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
nF:function(a){return H.aB(a)},
nD:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
ni:function(a){var t,s,r,q,p,o
H.b(!(a instanceof P.A))
t=$.jl.$1(a)
s=$.ih[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.is[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.kN.$2(a,t)
if(t!=null){s=$.ih[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.is[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.iB(r)
$.ih[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.is[t]=r
return r}if(p==="-"){o=H.iB(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.l3(a,r)
if(p==="*")throw H.c(P.j9(t))
if(u.leafTags[t]===true){o=H.iB(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.l3(a,r)},
l3:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.jq(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
iB:function(a){return J.jq(a,!1,null,!!a.$isq)},
nk:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return H.iB(t)
else return J.jq(t,c,null,null)},
nd:function(){if(!0===$.jn)return
$.jn=!0
H.ne()},
ne:function(){var t,s,r,q,p,o,n,m
$.ih=Object.create(null)
$.is=Object.create(null)
H.nc()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.l4.$1(p)
if(o!=null){n=H.nk(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
nc:function(){var t,s,r,q,p,o,n
t=C.Q()
t=H.b7(C.N,H.b7(C.S,H.b7(C.x,H.b7(C.x,H.b7(C.R,H.b7(C.O,H.b7(C.P(C.y),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.jl=new H.ip(p)
$.kN=new H.iq(o)
$.l4=new H.ir(n)},
b7:function(a,b){return a(b)||b},
np:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
fs:function fs(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
h0:function h0(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fg:function fg(a,b){this.a=a
this.b=b},
eM:function eM(a,b,c){this.a=a
this.b=b
this.c=c},
h4:function h4(a){this.a=a},
iG:function iG(a){this.a=a},
dd:function dd(a,b){this.a=a
this.b=b},
it:function it(a){this.a=a},
iu:function iu(a,b){this.a=a
this.b=b},
iv:function iv(a,b,c){this.a=a
this.b=b
this.c=c},
iw:function iw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ix:function ix(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
at:function at(){},
fR:function fR(){},
fD:function fD(){},
bf:function bf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h2:function h2(a){this.a=a},
dN:function dN(a){this.a=a},
fw:function fw(a){this.a=a},
hd:function hd(a){this.a=a},
an:function an(a,b){this.a=a
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
eL:function eL(a){this.a=a},
eO:function eO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eP:function eP(a,b){this.a=a
this.$ti=b},
eQ:function eQ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ip:function ip(a){this.a=a},
iq:function iq(a){this.a=a},
ir:function ir(a){this.a=a},
ib:function(a){var t,s,r
if(!!J.o(a).$isn)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
ac:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.b8(b,a))},
aV:function aV(){},
aA:function aA(){},
f4:function f4(){},
cp:function cp(){},
cq:function cq(){},
cr:function cr(){},
co:function co(){},
f5:function f5(){},
f6:function f6(){},
f7:function f7(){},
f8:function f8(){},
f9:function f9(){},
fa:function fa(){},
cs:function cs(){},
fb:function fb(){},
bJ:function bJ(){},
bK:function bK(){},
bL:function bL(){},
bM:function bM(){},
n6:function(a){return J.aw(H.y(a?Object.keys(a):[],[null]))},
iC:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
o:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ch.prototype
return J.cg.prototype}if(typeof a=="string")return J.ax.prototype
if(a==null)return J.ci.prototype
if(typeof a=="boolean")return J.eK.prototype
if(a.constructor==Array)return J.av.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ay.prototype
return a}if(a instanceof P.A)return a
return J.ik(a)},
jq:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ik:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.jn==null){H.nd()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.c(P.j9("Return interceptor for "+H.e(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$iX()]
if(p!=null)return p
p=H.ni(a)
if(p!=null)return p
if(typeof a=="function")return C.T
s=Object.getPrototypeOf(a)
if(s==null)return C.B
if(s===Object.prototype)return C.B
if(typeof q=="function"){Object.defineProperty(q,$.$get$iX(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
aw:function(a){a.fixed$length=Array
return a},
O:function(a){if(typeof a=="string")return J.ax.prototype
if(a==null)return a
if(a.constructor==Array)return J.av.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ay.prototype
return a}if(a instanceof P.A)return a
return J.ik(a)},
dA:function(a){if(a==null)return a
if(a.constructor==Array)return J.av.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ay.prototype
return a}if(a instanceof P.A)return a
return J.ik(a)},
kX:function(a){if(typeof a=="number")return J.bm.prototype
if(a==null)return a
if(!(a instanceof P.A))return J.aD.prototype
return a},
n8:function(a){if(typeof a=="number")return J.bm.prototype
if(typeof a=="string")return J.ax.prototype
if(a==null)return a
if(!(a instanceof P.A))return J.aD.prototype
return a},
kY:function(a){if(typeof a=="string")return J.ax.prototype
if(a==null)return a
if(!(a instanceof P.A))return J.aD.prototype
return a},
h:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ay.prototype
return a}if(a instanceof P.A)return a
return J.ik(a)},
B:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.o(a).A(a,b)},
a6:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.kX(a).az(a,b)},
lb:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kX(a).aA(a,b)},
aI:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nh(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.O(a).h(a,b)},
lc:function(a,b,c,d){return J.h(a).dq(a,b,c,d)},
js:function(a,b){return J.kY(a).aF(a,b)},
iH:function(a,b){return J.h(a).dK(a,b)},
ld:function(a,b,c,d){return J.h(a).dL(a,b,c,d)},
le:function(a,b,c){return J.h(a).dM(a,b,c)},
jt:function(a,b){return J.h(a).bH(a,b)},
iI:function(a,b){return J.h(a).L(a,b)},
ju:function(a,b,c){return J.h(a).bK(a,b,c)},
lf:function(a,b){return J.h(a).e1(a,b)},
iJ:function(a,b,c){return J.h(a).bL(a,b,c)},
bb:function(a,b,c){return J.h(a).bM(a,b,c)},
dD:function(a,b){return J.h(a).e4(a,b)},
lg:function(a,b){return J.h(a).bN(a,b)},
lh:function(a,b,c){return J.h(a).bO(a,b,c)},
jv:function(a,b,c,d){return J.h(a).bP(a,b,c,d)},
li:function(a,b,c,d,e){return J.h(a).bQ(a,b,c,d,e)},
lj:function(a,b){return J.n8(a).a2(a,b)},
iK:function(a,b,c){return J.O(a).e9(a,b,c)},
iL:function(a){return J.h(a).bS(a)},
lk:function(a){return J.h(a).bT(a)},
ll:function(a){return J.h(a).bV(a)},
lm:function(a){return J.h(a).ef(a)},
ln:function(a,b){return J.h(a).bW(a,b)},
lo:function(a,b){return J.h(a).bX(a,b)},
lp:function(a,b,c,d){return J.h(a).bY(a,b,c,d)},
lq:function(a,b,c,d,e){return J.h(a).el(a,b,c,d,e)},
lr:function(a,b,c,d,e){return J.h(a).bZ(a,b,c,d,e)},
ls:function(a,b,c,d,e,f){return J.h(a).em(a,b,c,d,e,f)},
lt:function(a,b){return J.dA(a).t(a,b)},
dE:function(a,b){return J.h(a).c_(a,b)},
lu:function(a,b){return J.h(a).c0(a,b)},
lv:function(a){return J.h(a).en(a)},
lw:function(a,b){return J.dA(a).X(a,b)},
lx:function(a){return J.h(a).ge0(a)},
bc:function(a){return J.o(a).gv(a)},
aJ:function(a){return J.dA(a).gu(a)},
bd:function(a){return J.O(a).gi(a)},
ly:function(a){return J.h(a).gaW(a)},
lz:function(a){return J.o(a).gB(a)},
lA:function(a){return J.h(a).geM(a)},
lB:function(a){return J.h(a).gcv(a)},
iM:function(a){return J.h(a).gm(a)},
iN:function(a){return J.h(a).gn(a)},
jw:function(a){return J.h(a).gG(a)},
iO:function(a,b){return J.h(a).a6(a,b)},
lC:function(a){return J.h(a).ax(a)},
lD:function(a){return J.h(a).b1(a)},
lE:function(a,b){return J.h(a).b2(a,b)},
lF:function(a,b,c){return J.h(a).b3(a,b,c)},
jx:function(a,b,c){return J.h(a).b6(a,b,c)},
jy:function(a,b,c){return J.h(a).c3(a,b,c)},
lG:function(a,b){return J.h(a).c4(a,b)},
lH:function(a,b){return J.dA(a).c7(a,b)},
lI:function(a,b,c){return J.h(a).c8(a,b,c)},
jz:function(a){return J.dA(a).eG(a)},
lJ:function(a,b){return J.h(a).H(a,b)},
lK:function(a,b,c,d){return J.h(a).bd(a,b,c,d)},
lL:function(a,b,c,d,e,f,g){return J.h(a).cd(a,b,c,d,e,f,g)},
lM:function(a,b,c,d){return J.h(a).ce(a,b,c,d)},
dF:function(a,b,c,d){return J.h(a).cf(a,b,c,d)},
lN:function(a){return J.kY(a).eP(a)},
be:function(a){return J.o(a).k(a)},
lO:function(a,b,c,d){return J.h(a).eR(a,b,c,d)},
lP:function(a,b,c){return J.h(a).cg(a,b,c)},
lQ:function(a,b,c){return J.h(a).ci(a,b,c)},
iP:function(a,b,c){return J.h(a).cj(a,b,c)},
lR:function(a,b,c){return J.h(a).ck(a,b,c)},
jA:function(a,b,c){return J.h(a).cl(a,b,c)},
jB:function(a,b,c){return J.h(a).cm(a,b,c)},
jC:function(a,b,c){return J.h(a).cn(a,b,c)},
jD:function(a,b,c,d){return J.h(a).co(a,b,c,d)},
jE:function(a,b,c,d){return J.h(a).cp(a,b,c,d)},
lS:function(a,b){return J.h(a).cr(a,b)},
lT:function(a,b,c){return J.h(a).eS(a,b,c)},
lU:function(a,b,c,d,e,f,g){return J.h(a).ct(a,b,c,d,e,f,g)},
a:function a(){},
eK:function eK(){},
ci:function ci(){},
bn:function bn(){},
fk:function fk(){},
aD:function aD(){},
ay:function ay(){},
av:function av(a){this.$ti=a},
iV:function iV(a){this.$ti=a},
dJ:function dJ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bm:function bm(){},
ch:function ch(){},
cg:function cg(){},
ax:function ax(){}},P={
mE:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.n_()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.ap(new P.hf(t),1)).observe(s,{childList:true})
return new P.he(t,s,r)}else if(self.setImmediate!=null)return P.n0()
return P.n1()},
mF:function(a){H.ii()
self.scheduleImmediate(H.ap(new P.hg(a),0))},
mG:function(a){H.ii()
self.setImmediate(H.ap(new P.hh(a),0))},
mH:function(a){P.j6(C.u,a)},
j6:function(a,b){var t=C.b.R(a.a,1000)
return H.mB(t<0?0:t,b)},
kH:function(a,b){if(H.b9(a,{func:1,args:[P.H,P.H]})){b.toString
return a}else{b.toString
return a}},
m9:function(a,b,c){var t
if(a==null)a=new P.aW()
t=$.r
if(t!==C.c)t.toString
t=new P.C(0,t,null,[c])
t.bp(a,b)
return t},
ma:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.C(0,$.r,null,[P.f])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.ez(t,b,!1,s)
try{for(m=0,l=0;m<1;++m){q=a[m]
p=l
q.b_(new P.ey(t,p,s,b,!1),r)
l=++t.b}if(l===0){l=new P.C(0,$.r,null,[null])
l.bo(C.z)
return l}k=new Array(l)
k.fixed$length=Array
t.a=k}catch(j){o=H.G(j)
n=H.a2(j)
if(t.b===0||!1)return P.m9(o,n,null)
else{t.c=o
t.d=n}}return s},
mR:function(a,b,c){$.r.toString
a.F(b,c)},
mK:function(a,b){var t=new P.C(0,$.r,null,[b])
H.b(!0)
t.a=4
t.c=a
return t},
kB:function(a,b){var t,s,r
H.b(b.a<4)
H.b(!(a instanceof P.C))
H.b(b.a===0)
b.a=1
try{a.b_(new P.hz(b),new P.hA(b))}catch(r){t=H.G(r)
s=H.a2(r)
P.no(new P.hB(b,t,s))}},
hy:function(a,b){var t,s,r
H.b(b.a<=1)
for(;t=a.a,s=t===2,s;){H.b(s)
a=a.c}if(t>=4){r=b.as()
b.aE(a)
P.b1(b,r)}else{r=b.c
H.b(b.a<=1)
b.a=2
b.c=a
a.bB(r)}},
b1:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.ic(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.b1(t.a,b)}s=t.a
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
P.ic(null,null,p,o,s)
return}s=$.r
if(s==null?l!=null:s!==l){H.b(l!=null)
s=$.r
H.b(l==null?s!=null:l!==s)
j=$.r
$.r=l
i=j}else i=null
s=b.c
if(s===8)new P.hG(t,r,b,q).$0()
else if(p){if((s&1)!==0)new P.hF(r,b,m).$0()}else if((s&2)!==0)new P.hE(t,r,b).$0()
if(i!=null){H.b(!0)
$.r=i}s=r.b
if(!!J.o(s).$isV){if(s.a>=4){H.b(o.a<4)
h=o.c
o.c=null
b=o.at(h)
H.b(o.a<4)
H.b(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.hy(s,o)
return}}g=b.b
H.b(g.a<4)
h=g.c
g.c=null
b=g.at(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.b(!o)
g.a=4
g.c=p}else{H.b(!o)
g.a=8
g.c=p}t.a=g
s=g}},
mU:function(){var t,s
for(;t=$.b5,t!=null;){$.bU=null
s=t.b
$.b5=s
if(s==null)$.bT=null
t.a.$0()}},
mX:function(){$.jh=!0
try{P.mU()}finally{$.bU=null
$.jh=!1
if($.b5!=null)$.$get$jd().$1(P.kQ())}},
kK:function(a){var t=new P.cO(a,null)
if($.b5==null){$.bT=t
$.b5=t
if(!$.jh)$.$get$jd().$1(P.kQ())}else{$.bT.b=t
$.bT=t}},
mW:function(a){var t,s,r
t=$.b5
if(t==null){P.kK(a)
$.bU=$.bT
return}s=new P.cO(a,null)
r=$.bU
if(r==null){s.b=t
$.bU=s
$.b5=s}else{s.b=r.b
r.b=s
$.bU=s
if(s.b==null)$.bT=s}},
no:function(a){var t=$.r
if(C.c===t){P.b6(null,null,C.c,a)
return}t.toString
P.b6(null,null,t,t.aT(a))},
mP:function(a,b,c){var t=a.e5(0)
if(!!J.o(t).$isV&&t!==$.$get$k8())t.eT(new P.ia(b,c))
else b.a9(c)},
mC:function(a,b){var t=$.r
if(t===C.c){t.toString
return P.j6(a,b)}return P.j6(a,t.aT(b))},
jc:function(a){var t,s
H.b(a!=null)
t=$.r
H.b(a==null?t!=null:a!==t)
s=$.r
$.r=a
return s},
ic:function(a,b,c,d,e){var t={}
t.a=d
P.mW(new P.id(t,e))},
kI:function(a,b,c,d){var t,s
if($.r===c)return d.$0()
t=P.jc(c)
try{s=d.$0()
return s}finally{s=t
H.b(s!=null)
$.r=s}},
kJ:function(a,b,c,d,e){var t,s
if($.r===c)return d.$1(e)
t=P.jc(c)
try{s=d.$1(e)
return s}finally{s=t
H.b(s!=null)
$.r=s}},
mV:function(a,b,c,d,e,f){var t,s
if($.r===c)return d.$2(e,f)
t=P.jc(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.b(s!=null)
$.r=s}},
b6:function(a,b,c,d){var t=C.c!==c
if(t)d=!(!t||!1)?c.aT(d):c.e2(d)
P.kK(d)},
hf:function hf(a){this.a=a},
he:function he(a,b,c){this.a=a
this.b=b
this.c=c},
hg:function hg(a){this.a=a},
hh:function hh(a){this.a=a},
V:function V(){},
ez:function ez(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ey:function ey(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iR:function iR(){},
hk:function hk(){},
cP:function cP(a,b){this.a=a
this.$ti=b},
i5:function i5(a,b){this.a=a
this.$ti=b},
b0:function b0(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
C:function C(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hv:function hv(a,b){this.a=a
this.b=b},
hD:function hD(a,b){this.a=a
this.b=b},
hz:function hz(a){this.a=a},
hA:function hA(a){this.a=a},
hB:function hB(a,b,c){this.a=a
this.b=b
this.c=c},
hx:function hx(a,b){this.a=a
this.b=b},
hC:function hC(a,b){this.a=a
this.b=b},
hw:function hw(a,b,c){this.a=a
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
bx:function bx(){},
fL:function fL(a){this.a=a},
fM:function fM(a,b){this.a=a
this.b=b},
fJ:function fJ(a,b,c){this.a=a
this.b=b
this.c=c},
fK:function fK(a){this.a=a},
fI:function fI(){},
ia:function ia(a,b){this.a=a
this.b=b},
j5:function j5(){},
aK:function aK(a,b){this.a=a
this.b=b},
i9:function i9(){},
id:function id(a,b){this.a=a
this.b=b},
hT:function hT(){},
hV:function hV(a,b){this.a=a
this.b=b},
hU:function hU(a,b){this.a=a
this.b=b},
hW:function hW(a,b){this.a=a
this.b=b},
z:function(){return new H.ai(0,null,null,null,null,null,0,[null,null])},
aj:function(a){return H.n7(a,new H.ai(0,null,null,null,null,null,0,[null,null]))},
b3:function(a,b){return new P.hN(0,null,null,null,null,null,0,[a,b])},
az:function(a,b,c,d){return new P.hL(0,null,null,null,null,null,0,[d])},
jf:function(){var t=Object.create(null)
H.b(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
mh:function(a,b,c){var t,s
if(P.ji(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$bV()
C.a.l(s,a)
try{P.mT(a,t)}finally{H.b(C.a.gaV(s)===a)
s.pop()}s=P.kk(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eJ:function(a,b,c){var t,s,r
if(P.ji(a))return b+"..."+c
t=new P.by(b)
s=$.$get$bV()
C.a.l(s,a)
try{r=t
r.a=P.kk(r.ga0(),a,", ")}finally{H.b(C.a.gaV(s)===a)
s.pop()}s=t
s.a=s.ga0()+c
s=t.ga0()
return s.charCodeAt(0)==0?s:s},
ji:function(a){var t,s
for(t=0;s=$.$get$bV(),t<s.length;++t)if(a===s[t])return!0
return!1},
mT:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gu(a)
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
j0:function(a,b){var t,s
t=P.az(null,null,null,b)
for(s=J.aJ(a);s.p();)t.l(0,s.gq(s))
return t},
ke:function(a){var t,s,r
t={}
if(P.ji(a))return"{...}"
s=new P.by("")
try{C.a.l($.$get$bV(),a)
r=s
r.a=r.ga0()+"{"
t.a=!0
J.lw(a,new P.eX(t,s))
t=s
t.a=t.ga0()+"}"}finally{t=$.$get$bV()
H.b(C.a.gaV(t)===a)
t.pop()}t=s.ga0()
return t.charCodeAt(0)==0?t:t},
j1:function(a,b){var t=new P.eR(null,0,0,0,[b])
t.d7(a,b)
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
bH:function bH(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hJ:function hJ(){},
j_:function j_(){},
cj:function cj(){},
k:function k(){},
cl:function cl(){},
eX:function eX(a,b){this.a=a
this.b=b},
aT:function aT(){},
eR:function eR(a,b,c,d,e){var _=this
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
fy:function fy(){},
fx:function fx(){},
bI:function bI(){},
m5:function(a){var t=J.o(a)
if(!!t.$isat)return t.k(a)
return"Instance of '"+H.bv(a)+"'"},
kd:function(a,b,c){var t,s
t=H.y([],[c])
for(s=J.aJ(a);s.p();)C.a.l(t,s.gq(s))
return t},
kk:function(a,b,c){var t=J.aJ(b)
if(!t.p())return a
if(c.length===0){do a+=H.e(t.gq(t))
while(t.p())}else{a+=H.e(t.gq(t))
for(;t.p();)a=a+c+H.e(t.gq(t))}return a},
m_:function(a,b){return J.lj(a,b)},
m0:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+t
if(t>=10)return s+"00"+t
return s+"000"+t},
m1:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c1:function(a){if(a>=10)return""+a
return"0"+a},
m3:function(a,b,c,d,e,f){return new P.au(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
c8:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.be(a)
if(typeof a==="string")return JSON.stringify(a)
return P.m5(a)},
lV:function(a){return new P.bZ(a)},
bY:function(a){return new P.a7(!1,null,null,a)},
jF:function(a,b,c){return new P.a7(!0,a,b,c)},
fp:function(a,b,c){return new P.cy(null,null,!0,a,b,"Value not in range")},
aC:function(a,b,c,d,e){return new P.cy(b,c,!0,a,d,"Invalid value")},
kj:function(a,b,c,d,e,f){if(0>a||a>c)throw H.c(P.aC(a,0,c,"start",f))
if(a>b||b>c)throw H.c(P.aC(b,a,c,"end",f))
return b},
x:function(a,b,c,d,e){var t=e!=null?e:J.bd(b)
return new P.eG(b,t,!0,a,c,"Index out of range")},
t:function(a){return new P.h5(a)},
j9:function(a){return new P.h3(a)},
cF:function(a){return new P.aZ(a)},
ag:function(a){return new P.dP(a)},
c9:function(a){return new P.hu(a)},
Y:function(a){H.iC(H.e(a))},
aH:function aH(){},
D:function D(){},
aP:function aP(a,b){this.a=a
this.b=b},
X:function X(){},
au:function au(a){this.a=a},
e4:function e4(){},
e5:function e5(){},
aQ:function aQ(){},
bZ:function bZ(a){this.a=a},
aW:function aW(){},
a7:function a7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cy:function cy(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eG:function eG(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
h5:function h5(a){this.a=a},
h3:function h3(a){this.a=a},
aZ:function aZ(a){this.a=a},
dP:function dP(a){this.a=a},
cE:function cE(){},
dY:function dY(a){this.a=a},
iT:function iT(){},
hu:function hu(a){this.a=a},
e9:function e9(a,b,c){this.a=a
this.b=b
this.$ti=c},
w:function w(){},
Q:function Q(){},
cf:function cf(){},
f:function f(){},
W:function W(){},
H:function H(){},
a4:function a4(){},
A:function A(){},
aY:function aY(){},
m:function m(){},
by:function by(a){this.a=a},
j8:function j8(){},
ig:function(a){var t,s,r,q,p
if(a==null)return
t=P.z()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.a5)(s),++q){p=s[q]
t.j(0,p,a[p])}return t},
n3:function(a,b){var t={}
a.X(0,new P.ie(t))
return t},
k3:function(){var t=$.k2
if(t==null){t=J.iK(window.navigator.userAgent,"Opera",0)
$.k2=t}return t},
m2:function(){var t,s
t=$.k_
if(t!=null)return t
s=$.k0
if(s==null){s=J.iK(window.navigator.userAgent,"Firefox",0)
$.k0=s}if(s)t="-moz-"
else{s=$.k1
if(s==null){s=!P.k3()&&J.iK(window.navigator.userAgent,"Trident/",0)
$.k1=s}if(s)t="-ms-"
else t=P.k3()?"-o-":"-webkit-"}$.k_=t
return t},
i0:function i0(){},
i2:function i2(a,b){this.a=a
this.b=b},
ie:function ie(a){this.a=a},
i1:function i1(a,b){this.a=a
this.b=b},
hS:function hS(){},
R:function R(){},
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
er:function er(){},
eu:function eu(){},
ew:function ew(){},
a0:function a0(){},
a8:function a8(){},
eE:function eE(){},
eN:function eN(){},
eZ:function eZ(){},
fh:function fh(){},
fj:function fj(){},
fm:function fm(){},
fn:function fn(){},
fq:function fq(){},
fr:function fr(){},
bw:function bw(){},
fN:function fN(){},
u:function u(){},
fO:function fO(){},
bA:function bA(){},
bB:function bB(){},
h_:function h_(){},
h7:function h7(){},
cZ:function cZ(){},
d_:function d_(){},
d5:function d5(){},
d6:function d6(){},
df:function df(){},
dg:function dg(){},
dl:function dl(){},
dm:function dm(){},
dK:function dK(){},
dL:function dL(){},
aL:function aL(){},
fi:function fi(){},
fu:function fu(){},
fv:function fv(){},
fC:function fC(){},
db:function db(){},
dc:function dc(){}},W={
n5:function(){return document},
m4:function(a,b,c){var t,s
t=document.body
s=(t&&C.n).J(t,a,b,c)
s.toString
t=new H.cN(new W.M(s),new W.e8(),[W.p])
return t.ga_(t)},
bh:function(a){var t,s,r
t="element tag unavailable"
try{s=J.lA(a)
if(typeof s==="string")t=a.tagName}catch(r){H.G(r)}return t},
mI:function(a,b){return document.createElement(a)},
aG:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kF:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
mJ:function(a,b,c,d,e){var t=W.kM(new W.ht(c))
t=new W.hs(0,a,b,t,!1,[e])
t.di(a,b,c,!1,e)
return t},
kC:function(a){var t,s
t=document.createElement("a")
s=new W.hX(t,window.location)
s=new W.bG(s)
s.dj(a)
return s},
mM:function(a,b,c,d){return!0},
mN:function(a,b,c,d){var t,s,r,q,p
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
kG:function(){var t=P.m
t=new W.i6(P.j0(C.p,t),P.az(null,null,null,t),P.az(null,null,null,t),P.az(null,null,null,t),null)
t.dm(null,new H.bo(C.p,new W.i7(),[H.a3(C.p,0),null]),["TEMPLATE"],null)
return t},
kM:function(a){var t=$.r
if(t===C.c)return a
return t.e3(a)},
i:function i(){},
bX:function bX(){},
dG:function dG(){},
dH:function dH(){},
dI:function dI(){},
aM:function aM(){},
aq:function aq(){},
c_:function c_(){},
dM:function dM(){},
as:function as(){},
dQ:function dQ(){},
dR:function dR(){},
dS:function dS(){},
dT:function dT(){},
aN:function aN(){},
dU:function dU(){},
Z:function Z(){},
aO:function aO(){},
dV:function dV(){},
dW:function dW(){},
dX:function dX(){},
dZ:function dZ(){},
e_:function e_(){},
c2:function c2(){},
bg:function bg(){},
e0:function e0(){},
c3:function c3(){},
e1:function e1(){},
c4:function c4(){},
c5:function c5(){},
c6:function c6(){},
e2:function e2(){},
e3:function e3(){},
a_:function a_(){},
e8:function e8(){},
d:function d(){},
U:function U(){},
bi:function bi(){},
et:function et(){},
ex:function ex(){},
eB:function eB(){},
cc:function cc(){},
eC:function eC(){},
bj:function bj(){},
cd:function cd(){},
eD:function eD(){},
bk:function bk(){},
bl:function bl(){},
eS:function eS(){},
eT:function eT(){},
br:function br(){},
f_:function f_(){},
aU:function aU(){},
f1:function f1(){},
bs:function bs(){},
f2:function f2(){},
ct:function ct(){},
fc:function fc(a){this.a=a},
fd:function fd(a){this.a=a},
bt:function bt(){},
M:function M(a){this.a=a},
p:function p(){},
cu:function cu(){},
bu:function bu(){},
a9:function a9(){},
fl:function fl(){},
fo:function fo(){},
cx:function cx(){},
cA:function cA(){},
aX:function aX(){},
ak:function ak(){},
fA:function fA(){},
fB:function fB(){},
aa:function aa(){},
fG:function fG(){},
fH:function fH(a){this.a=a},
cH:function cH(){},
fP:function fP(){},
fQ:function fQ(){},
bz:function bz(){},
fS:function fS(){},
fT:function fT(){},
fU:function fU(){},
fY:function fY(){},
fZ:function fZ(){},
cM:function cM(){},
h6:function h6(){},
h8:function h8(){},
b_:function b_(){},
h9:function h9(){},
ha:function ha(){},
bF:function bF(){},
hc:function hc(a){this.a=a},
jb:function jb(){},
hl:function hl(){},
hm:function hm(){},
hI:function hI(){},
d2:function d2(){},
i_:function i_(){},
i3:function i3(){},
hi:function hi(){},
hn:function hn(a){this.a=a},
hr:function hr(){},
ho:function ho(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hs:function hs(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
ht:function ht(a){this.a=a},
bG:function bG(a){this.a=a},
l:function l(){},
cw:function cw(a){this.a=a},
ff:function ff(a){this.a=a},
fe:function fe(a,b,c){this.a=a
this.b=b
this.c=c},
bN:function bN(){},
hY:function hY(){},
hZ:function hZ(){},
i6:function i6(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
i7:function i7(){},
i4:function i4(){},
ca:function ca(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cv:function cv(){},
j3:function j3(){},
ja:function ja(){},
hX:function hX(a,b){this.a=a
this.b=b},
dn:function dn(a){this.a=a},
i8:function i8(a){this.a=a},
cQ:function cQ(){},
cR:function cR(){},
cS:function cS(){},
cT:function cT(){},
cU:function cU(){},
cV:function cV(){},
cW:function cW(){},
cX:function cX(){},
cY:function cY(){},
d0:function d0(){},
d1:function d1(){},
d3:function d3(){},
d4:function d4(){},
d7:function d7(){},
d8:function d8(){},
bO:function bO(){},
bP:function bP(){},
d9:function d9(){},
da:function da(){},
de:function de(){},
dh:function dh(){},
di:function di(){},
bQ:function bQ(){},
bR:function bR(){},
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
dy:function dy(){}},G={
mD:function(a){var t,s,r
t=H.y(a.split("\n"),[P.m])
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.e(t[s])}return C.a.aj(t,"\n")},
kA:function(a,b,c){var t,s,r,q
t=J.h(a)
s=t.bU(a,b)
t.bb(a,s,c)
t.bR(a,s)
r=t.b5(a,s,35713)
if(r!=null&&!r){q=t.b4(a,s)
P.Y("E:Compilation failed:")
P.Y("E:"+G.mD(c))
P.Y("E:Failure:")
P.Y(C.h.a5("E:",q))
throw H.c(q)}return s},
k7:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.iM(a[s])
b[t+1]=J.iN(a[s])
b[t+2]=J.jw(a[s])}return b},
m7:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.iM(a[s])
b[t+1]=J.iN(a[s])}return b},
m8:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.iM(a[s])
b[t+1]=J.iN(a[s])
b[t+2]=J.jw(a[s])
b[t+3]=J.lB(a[s])}return b},
m6:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.aI(a[s],0)
b[t+1]=J.aI(a[s],1)
b[t+2]=J.aI(a[s],2)
b[t+3]=J.aI(a[s],3)}return b},
mL:function(a,b){var t,s,r,q,p,o,n,m,l,k
for(t=a.e,s=t.gD(t),s=s.gu(s),r=b.x,q=[[P.f,P.w]],p=[P.X],o=[T.bE],n=[T.J],m=[T.L];s.p();){l=s.gq(s)
if(!r.E(0,l)){l="Dropping unnecessary attribute: "+H.e(l)
if($.kW>0)H.iC("I: "+l)
continue}k=t.h(0,l)
switch($.$get$N().h(0,l).a){case"vec2":b.a7(l,G.m7(H.dC(k,"$isf",m,"$asf"),null),2)
break
case"vec3":b.a7(l,G.k7(H.dC(k,"$isf",n,"$asf"),null),3)
break
case"vec4":b.a7(l,G.m8(H.dC(k,"$isf",o,"$asf"),null),4)
break
case"float":b.a7(l,new Float32Array(H.ib(H.dC(k,"$isf",p,"$asf"))),1)
break
case"uvec4":b.a7(l,G.m6(H.dC(k,"$isf",q,"$asf"),null),4)
break
default:if(H.ae(!1))H.ao("unknown type for "+H.e(l)+" ["+J.lz(k[0]).k(0)+"] ["+new H.an(H.im(k),null).k(0)+"] "+H.e(k))}}},
mv:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.az(null,null,null,P.m)
s=c.b
r=d.b
q=c.f
p=J.lk(b.a)
o=G.kA(b.a,35633,s)
J.ju(b.a,p,o)
n=G.kA(b.a,35632,r)
J.ju(b.a,p,n)
if(q.length>0)J.lO(b.a,p,q,35980)
J.lG(b.a,p)
if(!J.lF(b.a,p,35714))H.E(J.lE(b.a,p))
t=new G.ft(b,c,d,p,P.j0(c.c,null),P.z(),P.z(),t,null,a,!1,!0)
t.d8(a,b,c,d)
return t},
al:function(a){return new G.fz(a,null,[],[],[],[],0,P.z())},
mA:function(){return new G.cK(!1,!1,!1,!0,1,9729,9729)},
f3:function f3(){},
I:function I(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dO:function dO(a,b){this.a=a
this.b=b},
es:function es(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eA:function eA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
f0:function f0(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
ft:function ft(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
fz:function fz(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
cK:function cK(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bC:function bC(){},
eF:function eF(a,b,c,d,e,f){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f}},R={fE:function fE(){},fF:function fF(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},D={
mk:function(){var t,s,r,q,p,o
t=new P.C(0,$.r,null,[null])
s=new P.cP(t,[null])
r=window.navigator
r=(r&&C.X).cC(r,!0).am(new D.eV(s))
q=new D.eW(s)
p=H.a3(r,0)
o=$.r
if(o!==C.c)q=P.kH(q,o)
r.ao(new P.b0(null,new P.C(0,o,null,[p]),2,null,q,[p,p]))
return t},
eV:function eV(a){this.a=a},
eU:function eU(a,b){this.a=a
this.b=b},
eW:function eW(a){this.a=a}},A={
jm:function(a){var t,s
t=C.W.ep(a,0,new A.io())
s=536870911&t+(C.b.cw(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
io:function io(){}},T={
bq:function(a,b,c,d,e,f,g,h,i){var t=new Float32Array(9)
t[8]=i
t[7]=h
t[6]=g
t[5]=f
t[4]=e
t[3]=d
t[2]=c
t[1]=b
t[0]=a
return new T.bp(t)},
bD:function(a,b,c){var t=new T.J(new Float32Array(3))
t.Z(a,b,c)
return t},
bp:function bp(a){this.a=a},
L:function L(a){this.a=a},
J:function J(a){this.a=a},
bE:function bE(){},
P:function(a,b,c){var t=c.a
t=new T.e6(t,G.mv(t,a,$.$get$kV(),b),c)
t.d3(a,b,c)
return t},
mu:function(a){var t,s,r
T.P(a,$.$get$kT(),new G.I(P.z(),"none",!1,!0))
T.P(a,$.$get$l9(),new G.I(P.z(),"toon",!1,!0))
t=$.$get$l0()
s=new G.I(P.z(),"hexalate-10",!1,!0)
r=new T.L(new Float32Array(2))
r.Y(0.5,0.5)
s.w("uCenter2",r)
s.w("uPointSize",10)
T.P(a,t,s)
s=$.$get$kU()
t=new G.I(P.z(),"dot",!1,!0)
r=new T.L(new Float32Array(2))
r.Y(0,0)
t.w("uCenter2",r)
t.w("uScale",0.8)
t.w("uAngle",0.5)
T.P(a,s,t)
t=$.$get$la()
s=new G.I(P.z(),"tv-distortion",!1,!0)
s.w("uScale",0.0009)
s.w("uTime",0)
T.P(a,t,s)
s=$.$get$l2()
t=new G.I(P.z(),"lumidots-8",!1,!0)
t.w("uPointSize",8)
T.P(a,s,t)
t=$.$get$l6()
s=new G.I(P.z(),"square-8",!1,!0)
s.w("uPointSize",8)
T.P(a,t,s)
s=$.$get$kS()
t=new G.I(P.z(),"emboss",!1,!0)
t.w("uConvolutionMatrix",$.$get$jO())
t.w("uColor",$.$get$jU())
T.P(a,s,t)
t=new G.I(P.z(),"emboss2",!1,!0)
t.w("uConvolutionMatrix",$.$get$jP())
t.w("uColor",$.$get$jV())
T.P(a,s,t)
t=new G.I(P.z(),"engrave",!1,!0)
t.w("uConvolutionMatrix",$.$get$jQ())
t.w("uColor",$.$get$jW())
T.P(a,s,t)
t=new G.I(P.z(),"sharpen",!1,!0)
t.w("uConvolutionMatrix",$.$get$jR())
t.w("uColor",$.$get$jX())
T.P(a,s,t)
t=new G.I(P.z(),"edges",!1,!0)
t.w("uConvolutionMatrix",$.$get$jN())
t.w("uColor",$.$get$jT())
T.P(a,s,t)
t=new G.I(P.z(),"blur",!1,!0)
t.w("uConvolutionMatrix",$.$get$jM())
t.w("uColor",$.$get$jS())
T.P(a,s,t)
H.b($.$get$ij()!=null)
for(t=$.$get$c7(),t=t.gD(t),t=t.gu(t);t.p();){s=t.gq(t)
r=$.$get$ij();(r&&C.Y).ew(r,"beforeend","<option>"+H.e(s)+"</option>",null,null)}},
nj:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
t={}
s=document
r=new R.fF(0,0,null,null,null,null)
r.dc(C.l.cB(s,"stats"),"blue","gray")
q=C.l.c9(s,"#webgl-canvas")
q.width=q.clientWidth
q.height=q.clientHeight
p=new G.dO(null,q)
s=(q&&C.J).cA(q,"webgl2",P.aj(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
p.a=s
if(s==null)H.E(P.c9('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
o="ChronosGL Config: "+H.e(J.lC(s))
if($.kW>0)P.Y("I: "+o)
J.li(s,0,0,0,1)
J.dE(s,2929)
T.mu(p)
t.a=null
t.b=null
s=$.$get$c7().h(0,"dot").b
o=new T.J(new Float32Array(3))
o.Z(-1,-1,0)
n=new T.J(new Float32Array(3))
n.Z(1,-1,0)
m=new T.J(new Float32Array(3))
m.Z(1,1,0)
l=new T.J(new Float32Array(3))
l.Z(-1,1,0)
k=new T.L(new Float32Array(2))
k.Y(0,0)
j=new T.L(new Float32Array(2))
j.Y(1,0)
i=new T.L(new Float32Array(2))
i.Y(1,1)
h=new T.L(new Float32Array(2))
h.Y(0,1)
g=new T.J(new Float32Array(3))
g.Z(0,0,1)
f=[]
e=new G.eA(!1,[],[],f,P.z())
e.bg("aTexUV")
e.d0([o,n,m,l])
e.cZ("aTexUV",[k,j,i,h])
e.bg("aNormal")
e.d_("aNormal",[g,g,g,g])
o=s.d
s=s.e.x
n=P.z()
m=J.lm(o.a)
d=new G.f0(o,m,4,n,s,null,0,-1,null,null,P.z(),"meshdata:quad",!1,!0)
f=G.k7(f,null)
n.j(0,"aPosition",J.iL(o.a))
d.ch=f
d.bf("aPosition",f,3)
c=$.$get$N().h(0,"aPosition")
if(c==null)H.E("Unknown canonical aPosition")
H.b(s.E(0,"aPosition"))
b=s.h(0,"aPosition")
J.dD(o.a,m)
o.c1(0,b,0)
o.cu(0,n.h(0,"aPosition"),b,c.bh(),5126,!1,0,0)
s=e.d4()
d.y=J.iL(o.a)
H.b(d.ch!=null)
n=d.ch.length
if(n<768){d.saK(new Uint8Array(H.ib(s)))
d.Q=5121}else if(n<196608){d.saK(new Uint16Array(H.ib(s)))
d.Q=5123}else{d.saK(new Uint32Array(H.ib(s)))
d.Q=5125}J.dD(o.a,m)
s=d.y
n=d.cx
m=J.o(n)
H.b(!!m.$iskx||!!m.$isky||!!m.$iskz)
J.iJ(o.a,34963,s)
J.jv(o.a,34963,n,35048)
G.mL(e,d)
P.ma([D.mk()],null,!1).am(new T.iA(t,p,new T.iz(t,d,r)))},
e6:function e6(a,b,c){this.a=a
this.b=b
this.c=c},
iz:function iz(a,b,c){this.a=a
this.b=b
this.c=c},
iA:function iA(a,b,c){this.a=a
this.b=b
this.c=c}}
var v=[C,H,J,P,W,G,R,D,A,T]
setFunctionNamesIfNecessary(v)
var $={}
H.iW.prototype={}
J.a.prototype={
A:function(a,b){return a===b},
gv:function(a){return H.aB(a)},
k:function(a){return"Instance of '"+H.bv(a)+"'"},
gB:function(a){return new H.an(H.im(a),null)}}
J.eK.prototype={
k:function(a){return String(a)},
gv:function(a){return a?519018:218159},
gB:function(a){return C.as},
$isaH:1}
J.ci.prototype={
A:function(a,b){return null==b},
k:function(a){return"null"},
gv:function(a){return 0},
gB:function(a){return C.am},
$isH:1}
J.bn.prototype={
gv:function(a){return 0},
gB:function(a){return C.al},
k:function(a){return String(a)},
$iskc:1}
J.fk.prototype={}
J.aD.prototype={}
J.ay.prototype={
k:function(a){var t=a[$.$get$jZ()]
return t==null?this.cV(a):J.be(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isiU:1}
J.av.prototype={
l:function(a,b){if(!!a.fixed$length)H.E(P.t("add"))
a.push(b)},
K:function(a,b){var t,s,r,q,p
t=a.length
if(!!a.fixed$length)H.E(P.t("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.a5)(b),++r,t=p){q=b[r]
p=t+1
H.b(t===a.length||H.E(P.ag(a)))
a.push(q)}},
c7:function(a,b){return new H.bo(a,b,[H.a3(a,0),null])},
aj:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.e(a[s])
return t.join(b)},
t:function(a,b){return a[b]},
gaU:function(a){if(a.length>0)return a[0]
throw H.c(H.ce())},
gaV:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.c(H.ce())},
ba:function(a,b,c,d,e){var t,s,r
if(!!a.immutable$list)H.E(P.t("setRange"))
P.kj(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.E(P.aC(e,0,null,"skipCount",null))
s=J.O(d)
if(e+t>s.gi(d))throw H.c(H.mi())
if(e<b)for(r=t-1;r>=0;--r)a[b+r]=s.h(d,e+r)
else for(r=0;r<t;++r)a[b+r]=s.h(d,e+r)},
bJ:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.c(P.ag(a))}return!1},
cP:function(a,b){if(!!a.immutable$list)H.E(P.t("sort"))
H.mz(a,P.n4())},
aB:function(a){return this.cP(a,null)},
C:function(a,b){var t
for(t=0;t<a.length;++t)if(J.B(a[t],b))return!0
return!1},
k:function(a){return P.eJ(a,"[","]")},
gu:function(a){return new J.dJ(a,a.length,0,null,[H.a3(a,0)])},
gv:function(a){return H.aB(a)},
gi:function(a){return a.length},
si:function(a,b){if(!!a.fixed$length)H.E(P.t("set length"))
if(b<0)throw H.c(P.aC(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.b8(a,b))
if(b>=a.length||b<0)throw H.c(H.b8(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.E(P.t("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.b8(a,b))
if(b>=a.length||b<0)throw H.c(H.b8(a,b))
a[b]=c},
$isn:1,
$asn:function(){},
$isj:1,
$isf:1}
J.iV.prototype={}
J.dJ.prototype={
gq:function(a){return this.d},
p:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.c(H.a5(t))
r=this.c
if(r>=s){this.sbl(null)
return!1}this.sbl(t[r]);++this.c
return!0},
sbl:function(a){this.d=a}}
J.bm.prototype={
a2:function(a,b){var t
if(typeof b!=="number")throw H.c(H.ad(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gau(b)
if(this.gau(a)===t)return 0
if(this.gau(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gau:function(a){return a===0?1/a<0:a<0},
e6:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.c(P.t(""+a+".ceil()"))},
eQ:function(a,b){var t
if(b>20)throw H.c(P.aC(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gau(a))return"-"+t
return t},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv:function(a){return a&0x1FFFFFFF},
a5:function(a,b){if(typeof b!=="number")throw H.c(H.ad(b))
return a+b},
aD:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bF(a,b)},
R:function(a,b){return(a|0)===a?a/b|0:this.bF(a,b)},
bF:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.c(P.t("Result of truncating division is "+H.e(t)+": "+H.e(a)+" ~/ "+b))},
aP:function(a,b){var t
if(a>0)t=this.dR(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
dR:function(a,b){return b>31?0:a>>>b},
cw:function(a,b){if(typeof b!=="number")throw H.c(H.ad(b))
return(a&b)>>>0},
cX:function(a,b){if(typeof b!=="number")throw H.c(H.ad(b))
return(a^b)>>>0},
aA:function(a,b){if(typeof b!=="number")throw H.c(H.ad(b))
return a<b},
az:function(a,b){if(typeof b!=="number")throw H.c(H.ad(b))
return a>b},
cz:function(a,b){if(typeof b!=="number")throw H.c(H.ad(b))
return a>=b},
gB:function(a){return C.av},
$isD:1,
$asD:function(){return[P.a4]},
$isX:1,
$isa4:1}
J.ch.prototype={
gB:function(a){return C.au},
$isw:1}
J.cg.prototype={
gB:function(a){return C.at}}
J.ax.prototype={
aF:function(a,b){if(b>=a.length)throw H.c(H.b8(a,b))
return a.charCodeAt(b)},
a5:function(a,b){if(typeof b!=="string")throw H.c(P.jF(b,null,null))
return a+b},
cQ:function(a,b,c){var t
if(c>a.length)throw H.c(P.aC(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bc:function(a,b){return this.cQ(a,b,0)},
be:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.fp(b,null,null))
if(b>c)throw H.c(P.fp(b,null,null))
if(c>a.length)throw H.c(P.fp(c,null,null))
return a.substring(b,c)},
cS:function(a,b){return this.be(a,b,null)},
eP:function(a){return a.toLowerCase()},
e9:function(a,b,c){if(c>a.length)throw H.c(P.aC(c,0,a.length,null,null))
return H.np(a,b,c)},
a2:function(a,b){var t
if(typeof b!=="string")throw H.c(H.ad(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
k:function(a){return a},
gv:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gB:function(a){return C.an},
gi:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.c(H.b8(a,b))
return a[b]},
$isn:1,
$asn:function(){},
$isD:1,
$asD:function(){return[P.m]},
$ism:1}
H.j.prototype={}
H.aS.prototype={
gu:function(a){return new H.ck(this,this.gi(this),0,null,[H.S(this,"aS",0)])},
aw:function(a,b){return this.cU(0,b)},
eO:function(a,b){var t,s
t=H.y([],[H.S(this,"aS",0)])
C.a.si(t,this.gi(this))
for(s=0;s<this.gi(this);++s)t[s]=this.t(0,s)
return t},
eN:function(a){return this.eO(a,!0)}}
H.ck.prototype={
gq:function(a){return this.d},
p:function(){var t,s,r,q
t=this.a
s=J.O(t)
r=s.gi(t)
if(this.b!==r)throw H.c(P.ag(t))
q=this.c
if(q>=r){this.saa(null)
return!1}this.saa(s.t(t,q));++this.c
return!0},
saa:function(a){this.d=a}}
H.cm.prototype={
gu:function(a){return new H.eY(null,J.aJ(this.a),this.b,this.$ti)},
gi:function(a){return J.bd(this.a)},
$asQ:function(a,b){return[b]}}
H.e7.prototype={$isj:1,
$asj:function(a,b){return[b]}}
H.eY.prototype={
p:function(){var t=this.b
if(t.p()){this.saa(this.c.$1(t.gq(t)))
return!0}this.saa(null)
return!1},
gq:function(a){return this.a},
saa:function(a){this.a=a},
$ascf:function(a,b){return[b]}}
H.bo.prototype={
gi:function(a){return J.bd(this.a)},
t:function(a,b){return this.b.$1(J.lt(this.a,b))},
$asj:function(a,b){return[b]},
$asaS:function(a,b){return[b]},
$asQ:function(a,b){return[b]}}
H.cN.prototype={
gu:function(a){return new H.hb(J.aJ(this.a),this.b,this.$ti)}}
H.hb.prototype={
p:function(){var t,s
for(t=this.a,s=this.b;t.p();)if(s.$1(t.gq(t)))return!0
return!1},
gq:function(a){var t=this.a
return t.gq(t)}}
H.aR.prototype={}
H.iE.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.iF.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.hQ.prototype={
seB:function(a){this.z=a},
seD:function(a){this.ch=a}}
H.b2.prototype={
dk:function(){var t,s
t=this.e
s=t.a
this.c.l(0,s)
this.dr(s,t)},
bI:function(a,b){if(!this.f.A(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.aS()},
eI:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.ak(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.bz();++r.d}this.y=!1}this.aS()},
dW:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.o(a),s=0;r=this.ch,s<r.length;s+=2)if(t.A(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
eH:function(a){var t,s,r
if(this.ch==null)return
for(t=J.o(a),s=0;r=this.ch,s<r.length;s+=2)if(t.A(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.E(P.t("removeRange"))
P.kj(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
cM:function(a,b){if(!this.r.A(0,a))return
this.db=b},
eu:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.H(0,c)
return}H.b(b===1)
t=this.cx
if(t==null){t=P.j1(null,null)
this.cx=t}t.P(0,new H.hK(a,c))},
es:function(a,b){var t
if(!this.r.A(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.av()
return}H.b(b===1)
t=this.cx
if(t==null){t=P.j1(null,null)
this.cx=t}t.P(0,this.geC())},
ev:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.Y(a)
if(b!=null)P.Y(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.be(a)
s[1]=b==null?null:b.k(0)
for(r=new P.bH(t,t.r,null,null,[null]),r.c=t.e;r.p();)r.d.H(0,s)},
af:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.G(o)
p=H.a2(o)
this.ev(q,p)
if(this.db){this.av()
if(this===u.globalState.e)throw o}}finally{this.cy=H.n2(r)
u.globalState.d=H.jo(t,"$isb2")
if(t!=null)$=t.geA()
if(this.cx!=null)for(;n=this.cx,!n.gai(n);)this.cx.ca().$0()}return s},
c6:function(a){return this.b.h(0,a)},
dr:function(a,b){var t=this.b
if(t.E(0,a))throw H.c(P.c9("Registry: ports must be registered only once."))
t.j(0,a,b)},
aS:function(){var t=this.b
if(t.gi(t)-this.c.a>0||this.y||!this.x)u.globalState.z.j(0,this.a,this)
else this.av()},
av:function(){var t,s,r
t=this.cx
if(t!=null)t.T(0)
for(t=this.b,s=t.gcs(t),s=s.gu(s);s.p();)s.gq(s).dt()
t.T(0)
this.c.T(0)
u.globalState.z.ak(0,this.a)
this.dx.T(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].H(0,t[r+1])
this.ch=null}},
geA:function(){return this.d},
gea:function(){return this.e}}
H.hK.prototype={
$0:function(){this.a.H(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.hp.prototype={
eg:function(){var t=this.a
if(t.b===t.c)return
return t.ca()},
cc:function(){var t,s,r
t=this.eg()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.E(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gai(s)}else s=!1
else s=!1
else s=!1
if(s)H.E(P.c9("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gai(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aj(["command","close"])
r=new H.a1(!0,P.b3(null,P.w)).I(r)
s.toString
self.postMessage(r)}return!1}t.eF()
return!0},
bD:function(){if(self.window!=null)new H.hq(this).$0()
else for(;this.cc(););},
al:function(){var t,s,r,q,p
if(!u.globalState.x)this.bD()
else try{this.bD()}catch(r){t=H.G(r)
s=H.a2(r)
q=u.globalState.Q
p=P.aj(["command","error","msg",H.e(t)+"\n"+H.e(s)])
p=new H.a1(!0,P.b3(null,P.w)).I(p)
q.toString
self.postMessage(p)}}}
H.hq.prototype={
$0:function(){if(!this.a.cc())return
P.mC(C.u,this)},
$S:function(){return{func:1,v:true}}}
H.aF.prototype={
eF:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.af(this.b)}}
H.hP.prototype={}
H.eH.prototype={
$0:function(){H.me(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.eI.prototype={
$0:function(){var t,s
t=this.a
t.x=!0
if(!this.b)this.c.$1(this.d)
else{s=this.c
if(H.b9(s,{func:1,args:[P.H,P.H]}))s.$2(this.e,this.d)
else if(H.b9(s,{func:1,args:[P.H]}))s.$1(this.e)
else s.$0()}t.aS()},
$S:function(){return{func:1,v:true}}}
H.hj.prototype={}
H.b4.prototype={
H:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.mQ(b)
if(t.gea()===s){s=J.O(r)
switch(s.h(r,0)){case"pause":t.bI(s.h(r,1),s.h(r,2))
break
case"resume":t.eI(s.h(r,1))
break
case"add-ondone":t.dW(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.eH(s.h(r,1))
break
case"set-errors-fatal":t.cM(s.h(r,1),s.h(r,2))
break
case"ping":t.eu(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.es(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.ak(0,s)
break}return}u.globalState.f.a.P(0,new H.aF(t,new H.hR(this,r),"receive"))},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.b4){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gv:function(a){return this.b.a}}
H.hR.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dn(0,this.b)},
$S:function(){return{func:1}}}
H.bS.prototype={
H:function(a,b){var t,s,r
t=P.aj(["command","message","port",this,"msg",b])
s=new H.a1(!0,P.b3(null,P.w)).I(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
A:function(a,b){var t,s
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
gv:function(a){return C.b.cX((this.b<<16^this.a<<8)>>>0,this.c)}}
H.cz.prototype={
dt:function(){this.c=!0
this.b=null},
dn:function(a,b){if(this.c)return
this.b.$1(b)},
$isms:1}
H.fV.prototype={
dd:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.P(0,new H.aF(s,new H.fW(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){H.ii()
this.c=self.setTimeout(H.ap(new H.fX(this,b),0),a)}else{H.b(a>0)
throw H.c(P.t("Timer greater than 0."))}}}
H.fW.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.fX.prototype={
$0:function(){var t=this.a
t.c=null
H.iy()
t.d=1
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.ar.prototype={
gv:function(a){var t=this.a
t=C.b.aP(t,0)^C.b.R(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
A:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.ar){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.a1.prototype={
I:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.j(0,a,t.gi(t))
t=J.o(a)
if(!!t.$isaV)return["buffer",a]
if(!!t.$isaA)return["typed",a]
if(!!t.$isn)return this.cI(a)
if(!!t.$ismb){r=this.gcF()
q=t.gD(a)
q=H.j2(q,r,H.S(q,"Q",0),null)
q=P.kd(q,!0,H.S(q,"Q",0))
t=t.gcs(a)
t=H.j2(t,r,H.S(t,"Q",0),null)
return["map",q,P.kd(t,!0,H.S(t,"Q",0))]}if(!!t.$iskc)return this.cJ(a)
if(!!t.$isa)this.cq(a)
if(!!t.$isms)this.an(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isb4)return this.cK(a)
if(!!t.$isbS)return this.cL(a)
if(!!t.$isat){p=a.$static_name
if(p==null)this.an(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isar)return["capability",a.a]
if(!(a instanceof P.A))this.cq(a)
return["dart",u.classIdExtractor(a),this.cH(u.classFieldsExtractor(a))]},
an:function(a,b){throw H.c(P.t((b==null?"Can't transmit:":b)+" "+H.e(a)))},
cq:function(a){return this.an(a,null)},
cI:function(a){var t
H.b(typeof a!=="string")
t=this.cG(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.an(a,"Can't serialize indexable: ")},
cG:function(a){var t,s
t=[]
C.a.si(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.I(a[s])
return t},
cH:function(a){var t
for(t=0;t<a.length;++t)C.a.j(a,t,this.I(a[t]))
return a},
cJ:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.an(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.si(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.I(a[t[r]])
return["js-object",t,s]},
cL:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cK:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.aE.prototype={
U:function(a){var t,s,r,q
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.c(P.bY("Bad serialized message: "+H.e(a)))
switch(C.a.gaU(a)){case"ref":H.b(J.B(a[0],"ref"))
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
return J.aw(H.y(this.ae(t),[null]))
case"extendable":H.b(J.B(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.y(this.ae(t),[null])
case"mutable":H.b(J.B(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.ae(t)
case"const":H.b(J.B(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
return J.aw(H.y(this.ae(t),[null]))
case"map":return this.ej(a)
case"sendport":return this.ek(a)
case"raw sendport":H.b(J.B(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.ei(a)
case"function":H.b(J.B(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.b(J.B(a[0],"capability"))
return new H.ar(a[1])
case"dart":H.b(J.B(a[0],"dart"))
s=a[1]
r=a[2]
q=u.instanceFromClassId(s)
C.a.l(this.b,q)
this.ae(r)
return u.initializeEmptyInstance(s,q,r)
default:throw H.c("couldn't deserialize: "+H.e(a))}},
ae:function(a){var t
for(t=0;t<a.length;++t)C.a.j(a,t,this.U(a[t]))
return a},
ej:function(a){var t,s,r,q,p
H.b(J.B(a[0],"map"))
t=a[1]
s=a[2]
r=P.z()
C.a.l(this.b,r)
t=J.lH(t,this.geh()).eN(0)
for(q=J.O(s),p=0;p<t.length;++p)r.j(0,t[p],this.U(q.h(s,p)))
return r},
ek:function(a){var t,s,r,q,p,o,n
H.b(J.B(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.c6(r)
if(o==null)return
n=new H.b4(o,s)}else n=new H.bS(t,r,s)
C.a.l(this.b,n)
return n},
ei:function(a){var t,s,r,q,p,o
H.b(J.B(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.O(t),p=J.O(s),o=0;o<q.gi(t);++o)r[q.h(t,o)]=this.U(p.h(s,o))
return r}}
H.fs.prototype={}
H.h0.prototype={
M:function(a){var t,s,r
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
H.eM.prototype={
k:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.e(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.e(this.a)+")"}}
H.h4.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.iG.prototype={
$1:function(a){if(!!J.o(a).$isaQ)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(a){return{func:1,args:[,]}}}
H.dd.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t},
$isaY:1}
H.it.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.iu.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.iv.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.iw.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.ix.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.at.prototype={
k:function(a){return"Closure '"+H.bv(this).trim()+"'"},
$isiU:1,
geU:function(){return this},
$D:null}
H.fR.prototype={}
H.fD.prototype={
k:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bf.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bf))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gv:function(a){var t,s
t=this.c
if(t==null)s=H.aB(this.a)
else s=typeof t!=="object"?J.bc(t):H.aB(t)
return(s^H.aB(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.bv(t)+"'")}}
H.h2.prototype={
k:function(a){return this.a}}
H.dN.prototype={
k:function(a){return this.a}}
H.fw.prototype={
k:function(a){return"RuntimeError: "+H.e(this.a)}}
H.hd.prototype={
k:function(a){return C.h.a5("Assertion failed: ",P.c8(this.a))}}
H.an.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gv:function(a){return J.bc(this.a)},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.an){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.ai.prototype={
gi:function(a){return this.a},
gai:function(a){return this.a===0},
gD:function(a){return new H.eP(this,[H.a3(this,0)])},
gcs:function(a){return H.j2(this.gD(this),new H.eL(this),H.a3(this,0),H.a3(this,1))},
E:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bw(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bw(s,b)}else return this.ex(b)},
ex:function(a){var t=this.d
if(t==null)return!1
return this.ah(this.ar(t,this.ag(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.ab(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.ab(r,b)
return s==null?null:s.b}else return this.ey(b)},
ey:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.ar(t,this.ag(a))
r=this.ah(s,a)
if(r<0)return
return s[r].b},
j:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aM()
this.b=t}this.bn(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aM()
this.c=s}this.bn(s,b,c)}else{r=this.d
if(r==null){r=this.aM()
this.d=r}q=this.ag(b)
p=this.ar(r,q)
if(p==null)this.aO(r,q,[this.aN(b,c)])
else{o=this.ah(p,b)
if(o>=0)p[o].b=c
else p.push(this.aN(b,c))}}},
ak:function(a,b){if(typeof b==="string")return this.bC(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bC(this.c,b)
else return this.ez(b)},
ez:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.ar(t,this.ag(a))
r=this.ah(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bG(q)
return q.b},
T:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aL()}},
X:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.c(P.ag(this))
t=t.c}},
bn:function(a,b,c){var t=this.ab(a,b)
if(t==null)this.aO(a,b,this.aN(b,c))
else t.b=c},
bC:function(a,b){var t
if(a==null)return
t=this.ab(a,b)
if(t==null)return
this.bG(t)
this.bx(a,b)
return t.b},
aL:function(){this.r=this.r+1&67108863},
aN:function(a,b){var t,s
t=new H.eO(a,b,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.aL()
return t},
bG:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.aL()},
ag:function(a){return J.bc(a)&0x3ffffff},
ah:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.B(a[s].a,b))return s
return-1},
k:function(a){return P.ke(this)},
ab:function(a,b){return a[b]},
ar:function(a,b){return a[b]},
aO:function(a,b,c){H.b(c!=null)
a[b]=c},
bx:function(a,b){delete a[b]},
bw:function(a,b){return this.ab(a,b)!=null},
aM:function(){var t=Object.create(null)
this.aO(t,"<non-identifier-key>",t)
this.bx(t,"<non-identifier-key>")
return t},
$ismb:1}
H.eL.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(a){return{func:1,args:[,]}}}
H.eO.prototype={}
H.eP.prototype={
gi:function(a){return this.a.a},
gu:function(a){var t,s
t=this.a
s=new H.eQ(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.eQ.prototype={
gq:function(a){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.ag(t))
else{t=this.c
if(t==null){this.sbm(null)
return!1}else{this.sbm(t.a)
this.c=this.c.c
return!0}}},
sbm:function(a){this.d=a}}
H.ip.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[,]}}}
H.iq.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(a,b){return{func:1,args:[,P.m]}}}
H.ir.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[P.m]}}}
H.aV.prototype={
gB:function(a){return C.ae},
$isaV:1}
H.aA.prototype={$isaA:1}
H.f4.prototype={
gB:function(a){return C.af}}
H.cp.prototype={
gi:function(a){return a.length},
$isn:1,
$asn:function(){},
$isq:1,
$asq:function(){}}
H.cq.prototype={
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
j:function(a,b,c){H.ac(b,a,a.length)
a[b]=c},
$isj:1,
$asj:function(){return[P.X]},
$asaR:function(){return[P.X]},
$ask:function(){return[P.X]},
$isf:1,
$asf:function(){return[P.X]}}
H.cr.prototype={
j:function(a,b,c){H.ac(b,a,a.length)
a[b]=c},
$isj:1,
$asj:function(){return[P.w]},
$asaR:function(){return[P.w]},
$ask:function(){return[P.w]},
$isf:1,
$asf:function(){return[P.w]}}
H.co.prototype={
gB:function(a){return C.ag},
$isev:1}
H.f5.prototype={
gB:function(a){return C.ah}}
H.f6.prototype={
gB:function(a){return C.ai},
h:function(a,b){H.ac(b,a,a.length)
return a[b]}}
H.f7.prototype={
gB:function(a){return C.aj},
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
$isk9:1}
H.f8.prototype={
gB:function(a){return C.ak},
h:function(a,b){H.ac(b,a,a.length)
return a[b]}}
H.f9.prototype={
gB:function(a){return C.ao},
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
$iskx:1}
H.fa.prototype={
gB:function(a){return C.ap},
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
$isky:1}
H.cs.prototype={
gB:function(a){return C.aq},
gi:function(a){return a.length},
h:function(a,b){H.ac(b,a,a.length)
return a[b]}}
H.fb.prototype={
gB:function(a){return C.ar},
gi:function(a){return a.length},
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
$iskz:1}
H.bJ.prototype={}
H.bK.prototype={}
H.bL.prototype={}
H.bM.prototype={}
P.hf.prototype={
$1:function(a){var t,s
H.iy()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(a){return{func:1,args:[,]}}}
P.he.prototype={
$1:function(a){var t,s
t=this.a
H.b(t.a==null)
H.ii()
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(a){return{func:1,args:[{func:1,v:true}]}}}
P.hg.prototype={
$0:function(){H.iy()
this.a.$0()},
$S:function(){return{func:1}}}
P.hh.prototype={
$0:function(){H.iy()
this.a.$0()},
$S:function(){return{func:1}}}
P.V.prototype={}
P.ez.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.c)this.d.F(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.c)this.d.F(t.c,t.d)},
$S:function(a,b){return{func:1,args:[,,]}}}
P.ey.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){r[this.b]=a
if(s===0)this.c.bv(r)}else if(t.b===0&&!this.e)this.c.F(t.c,t.d)},
$S:function(a){return{func:1,args:[,]}}}
P.iR.prototype={}
P.hk.prototype={
e8:function(a,b){if(a==null)a=new P.aW()
if(this.a.a!==0)throw H.c(P.cF("Future already completed"))
$.r.toString
this.F(a,b)},
e7:function(a){return this.e8(a,null)}}
P.cP.prototype={
ad:function(a,b){var t=this.a
if(t.a!==0)throw H.c(P.cF("Future already completed"))
t.bo(b)},
F:function(a,b){this.a.bp(a,b)}}
P.i5.prototype={
ad:function(a,b){var t=this.a
if(t.a!==0)throw H.c(P.cF("Future already completed"))
t.a9(b)},
F:function(a,b){this.a.F(a,b)}}
P.b0.prototype={
eE:function(a){if(this.c!==6)return!0
H.b(!0)
return this.b.b.aY(this.d,a.a)},
er:function(a){var t,s
t=(this.c&2)!==0
if(t){H.b(t)
t=this.e!=null}else t=!1
H.b(t)
s=this.e
t=this.b.b
if(H.b9(s,{func:1,args:[P.A,P.aY]}))return t.eJ(s,a.a,a.b)
else return t.aY(s,a.a)}}
P.C.prototype={
b_:function(a,b){var t,s,r
t=$.r
if(t!==C.c){t.toString
if(b!=null)b=P.kH(b,t)}s=new P.C(0,t,null,[null])
r=b==null?1:3
this.ao(new P.b0(null,s,r,a,b,[H.a3(this,0),null]))
return s},
am:function(a){return this.b_(a,null)},
eT:function(a){var t,s
t=$.r
s=new P.C(0,t,null,this.$ti)
if(t!==C.c)t.toString
t=H.a3(this,0)
this.ao(new P.b0(null,s,8,a,null,[t,t]))
return s},
aE:function(a){H.b(this.a<4)
H.b(a.a>=4)
this.a=a.a
this.c=a.c},
ao:function(a){var t
H.b(a.a==null)
t=this.a
if(t<=1){a.a=H.jo(this.c,"$isb0")
this.c=a}else{if(t===2){H.b(!0)
t=this.c
if(t.a<4){t.ao(a)
return}this.aE(t)}H.b(this.a>=4)
t=this.b
t.toString
P.b6(null,null,t,new P.hv(this,a))}},
bB:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.b(!0)
s=this.c
if(s.a<4){s.bB(a)
return}this.aE(s)}H.b(this.a>=4)
t.a=this.at(a)
s=this.b
s.toString
P.b6(null,null,s,new P.hD(t,this))}},
as:function(){H.b(this.a<4)
var t=this.c
this.c=null
return this.at(t)},
at:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
a9:function(a){var t,s,r
H.b(this.a<4)
t=this.$ti
s=H.bW(a,"$isV",t,"$asV")
if(s){t=H.bW(a,"$isC",t,null)
if(t)P.hy(a,this)
else P.kB(a,this)}else{r=this.as()
H.b(this.a<4)
this.a=4
this.c=a
P.b1(this,r)}},
bv:function(a){var t
H.b(this.a<4)
H.b(!J.o(a).$isV)
t=this.as()
H.b(this.a<4)
this.a=4
this.c=a
P.b1(this,t)},
F:function(a,b){var t
H.b(this.a<4)
t=this.as()
H.b(this.a<4)
this.a=8
this.c=new P.aK(a,b)
P.b1(this,t)},
du:function(a){return this.F(a,null)},
bo:function(a){var t
H.b(this.a<4)
t=H.bW(a,"$isV",this.$ti,"$asV")
if(t){this.ds(a)
return}H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.b6(null,null,t,new P.hx(this,a))},
ds:function(a){var t=H.bW(a,"$isC",this.$ti,null)
if(t){if(a.a===8){H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.b6(null,null,t,new P.hC(this,a))}else P.hy(a,this)
return}P.kB(a,this)},
bp:function(a,b){var t
H.b(this.a<4)
H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.b6(null,null,t,new P.hw(this,a,b))},
$isV:1,
gaQ:function(){return this.a},
gdO:function(){return this.c}}
P.hv.prototype={
$0:function(){P.b1(this.a,this.b)},
$S:function(){return{func:1}}}
P.hD.prototype={
$0:function(){P.b1(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.hz.prototype={
$1:function(a){var t=this.a
H.b(t.a===1)
H.b(t.a===1)
t.a=0
t.a9(a)},
$S:function(a){return{func:1,args:[,]}}}
P.hA.prototype={
$2:function(a,b){var t=this.a
H.b(t.a===1)
t.F(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(a,b){return{func:1,args:[,],opt:[,]}}}
P.hB.prototype={
$0:function(){this.a.F(this.b,this.c)},
$S:function(){return{func:1}}}
P.hx.prototype={
$0:function(){this.a.bv(this.b)},
$S:function(){return{func:1}}}
P.hC.prototype={
$0:function(){P.hy(this.b,this.a)},
$S:function(){return{func:1}}}
P.hw.prototype={
$0:function(){this.a.F(this.b,this.c)},
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
t=q.b.b.cb(q.d)}catch(n){s=H.G(n)
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
p.b=q.c}else p.b=new P.aK(s,r)
p.a=!0
return}if(!!J.o(t).$isV){if(t instanceof P.C&&t.gaQ()>=4){if(t.gaQ()===8){q=t
H.b(q.gaQ()===8)
p=this.b
p.b=q.gdO()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.am(new P.hH(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.hH.prototype={
$1:function(a){return this.a},
$S:function(a){return{func:1,args:[,]}}}
P.hF.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.b((r.c&1)!==0)
this.a.b=r.b.b.aY(r.d,this.c)}catch(q){t=H.G(q)
s=H.a2(q)
r=this.a
r.b=new P.aK(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.hE.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.b(q.a===8)
t=q.c
q=this.c
if(q.eE(t)){H.b((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.er(t)
p.a=!1}}catch(o){s=H.G(o)
r=H.a2(o)
q=this.a
p=q.a
H.b(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.b(q.a===8)
m.b=q.c}else m.b=new P.aK(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.cO.prototype={}
P.bx.prototype={
gi:function(a){var t,s
t={}
s=new P.C(0,$.r,null,[P.w])
t.a=0
this.c5(new P.fL(t),!0,new P.fM(t,s),s.gbu())
return s},
gaU:function(a){var t,s
t={}
s=new P.C(0,$.r,null,[H.S(this,"bx",0)])
t.a=null
t.a=this.c5(new P.fJ(t,this,s),!0,new P.fK(s),s.gbu())
return s}}
P.fL.prototype={
$1:function(a){++this.a.a},
$S:function(a){return{func:1,args:[,]}}}
P.fM.prototype={
$0:function(){this.b.a9(this.a.a)},
$S:function(){return{func:1}}}
P.fJ.prototype={
$1:function(a){P.mP(this.a.a,this.c,a)},
$S:function(a){return{func:1,args:[H.S(this.b,"bx",0)]}}}
P.fK.prototype={
$0:function(){var t,s,r,q
try{r=H.ce()
throw H.c(r)}catch(q){t=H.G(q)
s=H.a2(q)
P.mR(this.a,t,s)}},
$S:function(){return{func:1}}}
P.fI.prototype={}
P.ia.prototype={
$0:function(){return this.a.a9(this.b)},
$S:function(){return{func:1}}}
P.j5.prototype={}
P.aK.prototype={
k:function(a){return H.e(this.a)},
$isaQ:1}
P.i9.prototype={}
P.id.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.aW()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.c(t)
r=H.c(t)
r.stack=s.k(0)
throw r},
$S:function(){return{func:1}}}
P.hT.prototype={
eK:function(a){var t,s,r
try{if(C.c===$.r){a.$0()
return}P.kI(null,null,this,a)}catch(r){t=H.G(r)
s=H.a2(r)
P.ic(null,null,this,t,s)}},
eL:function(a,b){var t,s,r
try{if(C.c===$.r){a.$1(b)
return}P.kJ(null,null,this,a,b)}catch(r){t=H.G(r)
s=H.a2(r)
P.ic(null,null,this,t,s)}},
e2:function(a){return new P.hV(this,a)},
aT:function(a){return new P.hU(this,a)},
e3:function(a){return new P.hW(this,a)},
h:function(a,b){return},
cb:function(a){if($.r===C.c)return a.$0()
return P.kI(null,null,this,a)},
aY:function(a,b){if($.r===C.c)return a.$1(b)
return P.kJ(null,null,this,a,b)},
eJ:function(a,b,c){if($.r===C.c)return a.$2(b,c)
return P.mV(null,null,this,a,b,c)}}
P.hV.prototype={
$0:function(){return this.a.cb(this.b)},
$S:function(){return{func:1}}}
P.hU.prototype={
$0:function(){return this.a.eK(this.b)},
$S:function(){return{func:1}}}
P.hW.prototype={
$1:function(a){return this.a.eL(this.b,a)},
$S:function(a){return{func:1,args:[,]}}}
P.hN.prototype={
ag:function(a){return H.nl(a)&0x3ffffff},
ah:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.hL.prototype={
gu:function(a){var t=new P.bH(this,this.r,null,null,[null])
t.c=this.e
return t},
gi:function(a){return this.a},
C:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dv(b)},
dv:function(a){var t=this.d
if(t==null)return!1
return this.aq(t[this.ap(a)],a)>=0},
c6:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.C(0,a)?a:null
else return this.dG(a)},
dG:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.ap(a)]
r=this.aq(s,a)
if(r<0)return
return J.aI(s,r).gdz()},
l:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.jf()
this.b=t}return this.br(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.jf()
this.c=s}return this.br(s,b)}else return this.P(0,b)},
P:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.jf()
this.d=t}s=this.ap(b)
r=t[s]
if(r==null){q=[this.aH(b)]
H.b(q!=null)
t[s]=q}else{if(this.aq(r,b)>=0)return!1
r.push(this.aH(b))}return!0},
ak:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bs(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bs(this.c,b)
else return this.dI(0,b)},
dI:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.ap(b)]
r=this.aq(s,b)
if(r<0)return!1
this.bt(s.splice(r,1)[0])
return!0},
T:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aG()}},
br:function(a,b){var t
if(a[b]!=null)return!1
t=this.aH(b)
H.b(!0)
a[b]=t
return!0},
bs:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bt(t)
delete a[b]
return!0},
aG:function(){this.r=this.r+1&67108863},
aH:function(a){var t,s
t=new P.hM(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.aG()
return t},
bt:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.aG()},
ap:function(a){return J.bc(a)&0x3ffffff},
aq:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.B(a[s].a,b))return s
return-1}}
P.hM.prototype={
gdz:function(){return this.a}}
P.bH.prototype={
gq:function(a){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.ag(t))
else{t=this.c
if(t==null){this.sa8(null)
return!1}else{this.sa8(t.a)
this.c=this.c.b
return!0}}},
sa8:function(a){this.d=a}}
P.hJ.prototype={}
P.j_.prototype={$isj:1}
P.cj.prototype={$isj:1,$isf:1}
P.k.prototype={
gu:function(a){return new H.ck(a,this.gi(a),0,null,[H.S(a,"k",0)])},
t:function(a,b){return this.h(a,b)},
c7:function(a,b){return new H.bo(a,b,[H.S(a,"k",0),null])},
ep:function(a,b,c){var t,s,r
t=this.gi(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gi(a))throw H.c(P.ag(a))}return s},
k:function(a){return P.eJ(a,"[","]")}}
P.cl.prototype={}
P.eX.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.e(a)
t.a=s+": "
t.a+=H.e(b)},
$S:function(a,b){return{func:1,args:[,,]}}}
P.aT.prototype={
X:function(a,b){var t,s
for(t=J.aJ(this.gD(a));t.p();){s=t.gq(t)
b.$2(s,this.h(a,s))}},
gi:function(a){return J.bd(this.gD(a))},
k:function(a){return P.ke(a)},
$isW:1}
P.eR.prototype={
d7:function(a,b){var t
H.b(!0)
t=new Array(8)
t.fixed$length=Array
this.sbE(H.y(t,[b]))},
gu:function(a){return new P.hO(this,this.c,this.d,this.b,null,this.$ti)},
gai:function(a){return this.b===this.c},
gi:function(a){return(this.c-this.b&this.a.length-1)>>>0},
t:function(a,b){var t,s
t=this.gi(this)
if(0>b||b>=t)H.E(P.x(b,this,"index",null,t))
s=this.a
return s[(this.b+b&s.length-1)>>>0]},
T:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
k:function(a){return P.eJ(this,"{","}")},
ca:function(){var t,s,r
t=this.b
if(t===this.c)throw H.c(H.ce());++this.d
s=this.a
r=s[t]
s[t]=null
this.b=(t+1&s.length-1)>>>0
return r},
P:function(a,b){var t,s
t=this.a
s=this.c
t[s]=b
t=(s+1&t.length-1)>>>0
this.c=t
if(this.b===t)this.bz();++this.d},
bz:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.y(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.ba(s,0,q,t,r)
C.a.ba(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbE(s)},
sbE:function(a){this.a=a}}
P.hO.prototype={
gq:function(a){return this.e},
p:function(){var t,s
t=this.a
if(this.c!==t.d)H.E(P.ag(t))
s=this.d
if(s===this.b){this.sa8(null)
return!1}this.sa8(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sa8:function(a){this.e=a}}
P.fy.prototype={
K:function(a,b){var t
for(t=J.aJ(b);t.p();)this.l(0,t.gq(t))},
k:function(a){return P.eJ(this,"{","}")},
$isj:1}
P.fx.prototype={}
P.bI.prototype={}
P.aH.prototype={}
P.D.prototype={}
P.aP.prototype={
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.aP))return!1
return this.a===b.a&&this.b===b.b},
a2:function(a,b){return C.b.a2(this.a,b.a)},
gv:function(a){var t=this.a
return(t^C.b.aP(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.m0(H.mr(this))
s=P.c1(H.mp(this))
r=P.c1(H.ml(this))
q=P.c1(H.mm(this))
p=P.c1(H.mo(this))
o=P.c1(H.mq(this))
n=P.m1(H.mn(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isD:1,
$asD:function(){return[P.aP]}}
P.X.prototype={}
P.au.prototype={
aA:function(a,b){return C.b.aA(this.a,b.gdw())},
az:function(a,b){return C.b.az(this.a,b.gdw())},
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.au))return!1
return this.a===b.a},
gv:function(a){return this.a&0x1FFFFFFF},
a2:function(a,b){return C.b.a2(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.e5()
s=this.a
if(s<0)return"-"+new P.au(0-s).k(0)
r=t.$1(C.b.R(s,6e7)%60)
q=t.$1(C.b.R(s,1e6)%60)
p=new P.e4().$1(s%1e6)
return""+C.b.R(s,36e8)+":"+H.e(r)+":"+H.e(q)+"."+H.e(p)},
$isD:1,
$asD:function(){return[P.au]}}
P.e4.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(a){return{func:1,ret:P.m,args:[P.w]}}}
P.e5.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(a){return{func:1,ret:P.m,args:[P.w]}}}
P.aQ.prototype={}
P.bZ.prototype={
k:function(a){return"Assertion failed"}}
P.aW.prototype={
k:function(a){return"Throw of null."}}
P.a7.prototype={
gaJ:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaI:function(){return""},
k:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+t
q=this.gaJ()+s+r
if(!this.a)return q
p=this.gaI()
o=P.c8(this.b)
return q+p+": "+H.e(o)}}
P.cy.prototype={
gaJ:function(){return"RangeError"},
gaI:function(){var t,s,r
H.b(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.e(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.e(t)
else if(r>t)s=": Not in range "+H.e(t)+".."+H.e(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.e(t)}return s}}
P.eG.prototype={
gaJ:function(){return"RangeError"},
gaI:function(){H.b(this.a)
if(J.lb(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.e(t)},
gi:function(a){return this.f}}
P.h5.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.h3.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.aZ.prototype={
k:function(a){return"Bad state: "+this.a}}
P.dP.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.e(P.c8(t))+"."}}
P.cE.prototype={
k:function(a){return"Stack Overflow"},
$isaQ:1}
P.dY.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.iT.prototype={}
P.hu.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.e(t)}}
P.e9.prototype={
h:function(a,b){var t,s
t=this.a
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.E(P.jF(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.kg(b,"expando$values")
return s==null?null:H.kg(s,t)},
k:function(a){return"Expando:"+H.e(this.b)}}
P.w.prototype={}
P.Q.prototype={
aw:function(a,b){return new H.cN(this,b,[H.S(this,"Q",0)])},
gi:function(a){var t,s
H.b(!this.$isj)
t=this.gu(this)
for(s=0;t.p();)++s
return s},
ga_:function(a){var t,s
t=this.gu(this)
if(!t.p())throw H.c(H.ce())
s=t.gq(t)
if(t.p())throw H.c(H.mj())
return s},
t:function(a,b){var t,s,r
if(b<0)H.E(P.aC(b,0,null,"index",null))
for(t=this.gu(this),s=0;t.p();){r=t.gq(t)
if(b===s)return r;++s}throw H.c(P.x(b,this,"index",null,s))},
k:function(a){return P.mh(this,"(",")")}}
P.cf.prototype={}
P.f.prototype={$isj:1}
P.W.prototype={}
P.H.prototype={
gv:function(a){return P.A.prototype.gv.call(this,this)},
k:function(a){return"null"}}
P.a4.prototype={$isD:1,
$asD:function(){return[P.a4]}}
P.A.prototype={constructor:P.A,$isA:1,
A:function(a,b){return this===b},
gv:function(a){return H.aB(this)},
k:function(a){return"Instance of '"+H.bv(this)+"'"},
gB:function(a){return new H.an(H.im(this),null)},
toString:function(){return this.k(this)}}
P.aY.prototype={}
P.m.prototype={$isD:1,
$asD:function(){return[P.m]}}
P.by.prototype={
gi:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga0:function(){return this.a}}
P.j8.prototype={}
W.i.prototype={}
W.bX.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
W.dG.prototype={
gi:function(a){return a.length}}
W.dH.prototype={
k:function(a){return String(a)}}
W.dI.prototype={
k:function(a){return String(a)}}
W.aM.prototype={$isaM:1}
W.aq.prototype={$isaq:1}
W.c_.prototype={
cA:function(a,b,c){var t=this.dB(a,b,P.n3(c,null))
return t},
dB:function(a,b,c){return a.getContext(b,c)}}
W.dM.prototype={
ax:function(a){return P.ig(a.getContextAttributes())}}
W.as.prototype={
gi:function(a){return a.length}}
W.dQ.prototype={
gi:function(a){return a.length}}
W.dR.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.dS.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
W.dT.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
W.aN.prototype={
bq:function(a,b){var t,s
t=$.$get$jY()
s=t[b]
if(typeof s==="string")return s
s=this.dS(a,b)
t[b]=s
return s},
dS:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.m2()+b
if(t in a)return t
return b},
gi:function(a){return a.length}}
W.dU.prototype={}
W.Z.prototype={}
W.aO.prototype={}
W.dV.prototype={
gi:function(a){return a.length}}
W.dW.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
W.dX.prototype={
gi:function(a){return a.length}}
W.dZ.prototype={
h:function(a,b){return a[b]},
gi:function(a){return a.length}}
W.e_.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
W.c2.prototype={}
W.bg.prototype={
dX:function(a,b){return a.adoptNode(b)},
cB:function(a,b){return a.getElementById(b)},
c9:function(a,b){return a.querySelector(b)}}
W.e0.prototype={
k:function(a){return String(a)}}
W.c3.prototype={
ee:function(a,b){return a.createHTMLDocument(b)}}
W.e1.prototype={
gcv:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
W.c4.prototype={
gcv:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
W.c5.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[P.R]},
$isj:1,
$asj:function(){return[P.R]},
$isq:1,
$asq:function(){return[P.R]},
$ask:function(){return[P.R]},
$isf:1,
$asf:function(){return[P.R]},
$asl:function(){return[P.R]}}
W.c6.prototype={
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.ga4(a))+" x "+H.e(this.ga3(a))},
A:function(a,b){var t
if(b==null)return!1
t=J.o(b)
if(!t.$isR)return!1
return a.left===b.left&&a.top===b.top&&this.ga4(a)===t.ga4(b)&&this.ga3(a)===t.ga3(b)},
gv:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.ga4(a)
q=this.ga3(a)
return W.kF(W.aG(W.aG(W.aG(W.aG(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga3:function(a){return a.height},
ga4:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isR:1,
$asR:function(){}}
W.e2.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[P.m]},
$isj:1,
$asj:function(){return[P.m]},
$isq:1,
$asq:function(){return[P.m]},
$ask:function(){return[P.m]},
$isf:1,
$asf:function(){return[P.m]},
$asl:function(){return[P.m]}}
W.e3.prototype={
gi:function(a){return a.length}}
W.a_.prototype={
ge0:function(a){return new W.hn(a)},
k:function(a){return a.localName},
ew:function(a,b,c,d,e){var t,s
t=this.J(a,c,d,e)
switch(b.toLowerCase()){case"beforebegin":J.jy(a.parentNode,t,a)
break
case"afterbegin":s=a.childNodes
this.c3(a,t,s.length>0?s[0]:null)
break
case"beforeend":this.L(a,t)
break
case"afterend":J.jy(a.parentNode,t,a.nextSibling)
break
default:H.E(P.bY("Invalid position "+b))}},
J:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.k5
if(t==null){t=H.y([],[W.cv])
s=new W.cw(t)
C.a.l(t,W.kC(null))
C.a.l(t,W.kG())
$.k5=s
d=s}else d=t
t=$.k4
if(t==null){t=new W.dn(d)
$.k4=t
c=t}else{t.a=d
c=t}}if($.ah==null){t=document
s=t.implementation
s=(s&&C.K).ee(s,"")
$.ah=s
$.iS=s.createRange()
s=$.ah
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.ah.head;(t&&C.L).L(t,r)}t=$.ah
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.jo(s,"$isaq")}t=$.ah
if(!!this.$isaq)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.ah.body;(t&&C.n).L(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.C(C.V,a.tagName)){t=$.iS;(t&&C.C).cE(t,q)
t=$.iS
p=(t&&C.C).ec(t,b)}else{q.innerHTML=b
p=$.ah.createDocumentFragment()
for(t=J.h(p);s=q.firstChild,s!=null;)t.L(p,s)}t=$.ah.body
if(q==null?t!=null:q!==t)J.jz(q)
c.b7(p)
C.l.dX(document,p)
return p},
ed:function(a,b,c){return this.J(a,b,c,null)},
cO:function(a,b,c,d){a.textContent=null
this.L(a,this.J(a,b,c,d))},
cN:function(a,b){return this.cO(a,b,null,null)},
a6:function(a,b){return a.getAttribute(b)},
dJ:function(a,b){return a.removeAttribute(b)},
$isa_:1,
geM:function(a){return a.tagName}}
W.e8.prototype={
$1:function(a){return!!J.o(a).$isa_},
$S:function(a){return{func:1,args:[,]}}}
W.d.prototype={
dq:function(a,b,c,d){return a.addEventListener(b,H.ap(c,1),!1)},
dL:function(a,b,c,d){return a.removeEventListener(b,H.ap(c,1),!1)}}
W.U.prototype={$isU:1}
W.bi.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.U]},
$isj:1,
$asj:function(){return[W.U]},
$isq:1,
$asq:function(){return[W.U]},
$ask:function(){return[W.U]},
$isf:1,
$asf:function(){return[W.U]},
$isbi:1,
$asl:function(){return[W.U]}}
W.et.prototype={
gi:function(a){return a.length}}
W.ex.prototype={
gi:function(a){return a.length}}
W.eB.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
W.cc.prototype={}
W.eC.prototype={
gi:function(a){return a.length}}
W.bj.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.p]},
$isj:1,
$asj:function(){return[W.p]},
$isq:1,
$asq:function(){return[W.p]},
$ask:function(){return[W.p]},
$isf:1,
$asf:function(){return[W.p]},
$asl:function(){return[W.p]}}
W.cd.prototype={}
W.eD.prototype={
H:function(a,b){return a.send(b)}}
W.bk.prototype={}
W.bl.prototype={$isbl:1}
W.eS.prototype={
k:function(a){return String(a)}}
W.eT.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
W.br.prototype={}
W.f_.prototype={
gi:function(a){return a.length}}
W.aU.prototype={$isaU:1}
W.f1.prototype={
eV:function(a,b,c){return a.send(b,c)},
H:function(a,b){return a.send(b)}}
W.bs.prototype={}
W.f2.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.cn]},
$isj:1,
$asj:function(){return[W.cn]},
$isq:1,
$asq:function(){return[W.cn]},
$ask:function(){return[W.cn]},
$isf:1,
$asf:function(){return[W.cn]},
$asl:function(){return[W.cn]}}
W.ct.prototype={
cD:function(a,b,c){var t,s,r,q
t=W.aU
s=new P.C(0,$.r,null,[t])
r=new P.cP(s,[t])
q=P.aj(["audio",!1,"video",!0])
if(!a.getUserMedia)a.getUserMedia=a.getUserMedia||a.webkitGetUserMedia||a.mozGetUserMedia||a.msGetUserMedia
this.dC(a,new P.i1([],[]).b0(q),new W.fc(r),new W.fd(r))
return s},
cC:function(a,b){return this.cD(a,!1,b)},
dC:function(a,b,c,d){return a.getUserMedia(b,H.ap(c,1),H.ap(d,1))}}
W.fc.prototype={
$1:function(a){this.a.ad(0,a)},
$S:function(a){return{func:1,args:[,]}}}
W.fd.prototype={
$1:function(a){this.a.e7(a)},
$S:function(a){return{func:1,args:[,]}}}
W.bt.prototype={}
W.M.prototype={
ga_:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.c(P.cF("No elements"))
if(s>1)throw H.c(P.cF("More than one element"))
return t.firstChild},
K:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.h(s),p=0;p<r;++p)q.L(s,t.firstChild)
return},
j:function(a,b,c){var t=this.a
J.le(t,c,C.A.h(t.childNodes,b))},
gu:function(a){var t=this.a.childNodes
return new W.ca(t,t.length,-1,null,[H.S(t,"l",0)])},
gi:function(a){return this.a.childNodes.length},
h:function(a,b){return C.A.h(this.a.childNodes,b)},
$asj:function(){return[W.p]},
$ascj:function(){return[W.p]},
$ask:function(){return[W.p]},
$asf:function(){return[W.p]},
$asbI:function(){return[W.p]}}
W.p.prototype={
eG:function(a){var t=a.parentNode
if(t!=null)J.iH(t,a)},
k:function(a){var t=a.nodeValue
return t==null?this.cT(a):t},
L:function(a,b){return a.appendChild(b)},
c3:function(a,b,c){return a.insertBefore(b,c)},
dK:function(a,b){return a.removeChild(b)},
dM:function(a,b,c){return a.replaceChild(b,c)},
$isp:1,
gaW:function(a){return a.previousSibling}}
W.cu.prototype={
aX:function(a){return a.previousNode()}}
W.bu.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.p]},
$isj:1,
$asj:function(){return[W.p]},
$isq:1,
$asq:function(){return[W.p]},
$ask:function(){return[W.p]},
$isf:1,
$asf:function(){return[W.p]},
$asl:function(){return[W.p]}}
W.a9.prototype={
gi:function(a){return a.length}}
W.fl.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.a9]},
$isj:1,
$asj:function(){return[W.a9]},
$isq:1,
$asq:function(){return[W.a9]},
$ask:function(){return[W.a9]},
$isf:1,
$asf:function(){return[W.a9]},
$asl:function(){return[W.a9]}}
W.fo.prototype={
H:function(a,b){return a.send(b)}}
W.cx.prototype={
ec:function(a,b){return a.createContextualFragment(b)},
cE:function(a,b){return a.selectNodeContents(b)}}
W.cA.prototype={
H:function(a,b){return a.send(b)}}
W.aX.prototype={$isaX:1,
gi:function(a){return a.length}}
W.ak.prototype={}
W.fA.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.cC]},
$isj:1,
$asj:function(){return[W.cC]},
$isq:1,
$asq:function(){return[W.cC]},
$ask:function(){return[W.cC]},
$isf:1,
$asf:function(){return[W.cC]},
$asl:function(){return[W.cC]}}
W.fB.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.cD]},
$isj:1,
$asj:function(){return[W.cD]},
$isq:1,
$asq:function(){return[W.cD]},
$ask:function(){return[W.cD]},
$isf:1,
$asf:function(){return[W.cD]},
$asl:function(){return[W.cD]}}
W.aa.prototype={
gi:function(a){return a.length}}
W.fG.prototype={
h:function(a,b){return this.by(a,b)},
X:function(a,b){var t,s
for(t=0;!0;++t){s=this.dF(a,t)
if(s==null)return
b.$2(s,this.by(a,s))}},
gD:function(a){var t=H.y([],[P.m])
this.X(a,new W.fH(t))
return t},
gi:function(a){return a.length},
by:function(a,b){return a.getItem(b)},
dF:function(a,b){return a.key(b)},
$asaT:function(){return[P.m,P.m]},
$isW:1,
$asW:function(){return[P.m,P.m]}}
W.fH.prototype={
$2:function(a,b){return C.a.l(this.a,a)},
$S:function(a,b){return{func:1,args:[,,]}}}
W.cH.prototype={
J:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aC(a,b,c,d)
t=W.m4("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.M(s).K(0,new W.M(t))
return s}}
W.fP.prototype={
J:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aC(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.H.J(t.createElement("table"),b,c,d)
t.toString
t=new W.M(t)
r=t.ga_(t)
r.toString
t=new W.M(r)
q=t.ga_(t)
s.toString
q.toString
new W.M(s).K(0,new W.M(q))
return s}}
W.fQ.prototype={
J:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aC(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.H.J(t.createElement("table"),b,c,d)
t.toString
t=new W.M(t)
r=t.ga_(t)
s.toString
r.toString
new W.M(s).K(0,new W.M(r))
return s}}
W.bz.prototype={$isbz:1}
W.fS.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.cJ]},
$isj:1,
$asj:function(){return[W.cJ]},
$isq:1,
$asq:function(){return[W.cJ]},
$ask:function(){return[W.cJ]},
$isf:1,
$asf:function(){return[W.cJ]},
$asl:function(){return[W.cJ]}}
W.fT.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.cI]},
$isj:1,
$asj:function(){return[W.cI]},
$isq:1,
$asq:function(){return[W.cI]},
$ask:function(){return[W.cI]},
$isf:1,
$asf:function(){return[W.cI]},
$asl:function(){return[W.cI]}}
W.fU.prototype={
gi:function(a){return a.length}}
W.fY.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.cL]},
$isj:1,
$asj:function(){return[W.cL]},
$isq:1,
$asq:function(){return[W.cL]},
$ask:function(){return[W.cL]},
$isf:1,
$asf:function(){return[W.cL]},
$asl:function(){return[W.cL]}}
W.fZ.prototype={
gi:function(a){return a.length}}
W.cM.prototype={
aX:function(a){return a.previousNode()}}
W.h6.prototype={
k:function(a){return String(a)}}
W.h8.prototype={
gm:function(a){return a.x},
gG:function(a){return a.z}}
W.b_.prototype={$isb_:1}
W.h9.prototype={
gi:function(a){return a.length}}
W.ha.prototype={
H:function(a,b){return a.send(b)}}
W.bF.prototype={
ge_:function(a){var t,s
t=P.a4
s=new P.C(0,$.r,null,[t])
this.dA(a)
this.dN(a,W.kM(new W.hc(new P.i5(s,[t]))))
return s},
dN:function(a,b){return a.requestAnimationFrame(H.ap(b,1))},
dA:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
dY:function(a,b){return a.alert(b)}}
W.hc.prototype={
$1:function(a){this.a.ad(0,a)},
$S:function(a){return{func:1,args:[,]}}}
W.jb.prototype={}
W.hl.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.c0]},
$isj:1,
$asj:function(){return[W.c0]},
$isq:1,
$asq:function(){return[W.c0]},
$ask:function(){return[W.c0]},
$isf:1,
$asf:function(){return[W.c0]},
$asl:function(){return[W.c0]}}
W.hm.prototype={
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
A:function(a,b){var t
if(b==null)return!1
t=J.o(b)
if(!t.$isR)return!1
return a.left===b.left&&a.top===b.top&&a.width===t.ga4(b)&&a.height===t.ga3(b)},
gv:function(a){var t,s,r,q
t=a.left
s=a.top
r=a.width
q=a.height
return W.kF(W.aG(W.aG(W.aG(W.aG(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga3:function(a){return a.height},
ga4:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.hI.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.cb]},
$isj:1,
$asj:function(){return[W.cb]},
$isq:1,
$asq:function(){return[W.cb]},
$ask:function(){return[W.cb]},
$isf:1,
$asf:function(){return[W.cb]},
$asl:function(){return[W.cb]}}
W.d2.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.p]},
$isj:1,
$asj:function(){return[W.p]},
$isq:1,
$asq:function(){return[W.p]},
$ask:function(){return[W.p]},
$isf:1,
$asf:function(){return[W.p]},
$asl:function(){return[W.p]}}
W.i_.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.aa]},
$isj:1,
$asj:function(){return[W.aa]},
$isq:1,
$asq:function(){return[W.aa]},
$ask:function(){return[W.aa]},
$isf:1,
$asf:function(){return[W.aa]},
$asl:function(){return[W.aa]}}
W.i3.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.cG]},
$isj:1,
$asj:function(){return[W.cG]},
$isq:1,
$asq:function(){return[W.cG]},
$ask:function(){return[W.cG]},
$isf:1,
$asf:function(){return[W.cG]},
$asl:function(){return[W.cG]}}
W.hi.prototype={
X:function(a,b){var t,s,r,q,p,o
for(t=this.gD(this),s=t.length,r=this.a,q=J.h(r),p=0;p<t.length;t.length===s||(0,H.a5)(t),++p){o=t[p]
b.$2(o,q.a6(r,o))}},
gD:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.y([],[P.m])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.l(s,p.name)}return s},
$ascl:function(){return[P.m,P.m]},
$asaT:function(){return[P.m,P.m]},
$asW:function(){return[P.m,P.m]},
gdD:function(){return this.a}}
W.hn.prototype={
h:function(a,b){return J.iO(this.a,b)},
gi:function(a){return this.gD(this).length}}
W.hr.prototype={
c5:function(a,b,c,d){return W.mJ(this.a,this.b,a,!1,H.a3(this,0))}}
W.ho.prototype={}
W.hs.prototype={
di:function(a,b,c,d,e){this.dU()},
e5:function(a){if(this.b==null)return
this.dV()
this.b=null
this.sdH(null)
return},
dU:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.lc(r,this.c,t,!1)}},
dV:function(){var t,s,r
t=this.d
s=t!=null
if(s){r=this.b
r.toString
if(s)J.ld(r,this.c,t,!1)}},
sdH:function(a){this.d=a}}
W.ht.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(a){return{func:1,args:[,]}}}
W.bG.prototype={
dj:function(a){var t,s
t=$.$get$je()
if(t.gai(t)){for(s=0;s<262;++s)t.j(0,C.U[s],W.na())
for(s=0;s<12;++s)t.j(0,C.q[s],W.nb())}},
a1:function(a){return $.$get$kD().C(0,W.bh(a))},
S:function(a,b,c){var t,s,r
t=W.bh(a)
s=$.$get$je()
r=s.h(0,H.e(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)}}
W.l.prototype={
gu:function(a){return new W.ca(a,this.gi(a),-1,null,[H.S(a,"l",0)])}}
W.cw.prototype={
a1:function(a){return C.a.bJ(this.a,new W.ff(a))},
S:function(a,b,c){return C.a.bJ(this.a,new W.fe(a,b,c))}}
W.ff.prototype={
$1:function(a){return a.a1(this.a)},
$S:function(a){return{func:1,args:[,]}}}
W.fe.prototype={
$1:function(a){return a.S(this.a,this.b,this.c)},
$S:function(a){return{func:1,args:[,]}}}
W.bN.prototype={
dm:function(a,b,c,d){var t,s,r
this.a.K(0,c)
t=b.aw(0,new W.hY())
s=b.aw(0,new W.hZ())
this.b.K(0,t)
r=this.c
r.K(0,C.z)
r.K(0,s)},
a1:function(a){return this.a.C(0,W.bh(a))},
S:function(a,b,c){var t,s
t=W.bh(a)
s=this.c
if(s.C(0,H.e(t)+"::"+b))return this.d.dZ(c)
else if(s.C(0,"*::"+b))return this.d.dZ(c)
else{s=this.b
if(s.C(0,H.e(t)+"::"+b))return!0
else if(s.C(0,"*::"+b))return!0
else if(s.C(0,H.e(t)+"::*"))return!0
else if(s.C(0,"*::*"))return!0}return!1}}
W.hY.prototype={
$1:function(a){return!C.a.C(C.q,a)},
$S:function(a){return{func:1,args:[,]}}}
W.hZ.prototype={
$1:function(a){return C.a.C(C.q,a)},
$S:function(a){return{func:1,args:[,]}}}
W.i6.prototype={
S:function(a,b,c){if(this.cW(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.iO(a,"template")==="")return this.e.C(0,b)
return!1}}
W.i7.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)},
$S:function(a){return{func:1,args:[,]}}}
W.i4.prototype={
a1:function(a){var t=J.o(a)
if(!!t.$isbw)return!1
t=!!t.$isu
if(t&&W.bh(a)==="foreignObject")return!1
if(t)return!0
return!1},
S:function(a,b,c){if(b==="is"||C.h.bc(b,"on"))return!1
return this.a1(a)}}
W.ca.prototype={
p:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbA(J.aI(this.a,t))
this.c=t
return!0}this.sbA(null)
this.c=s
return!1},
gq:function(a){return this.d},
sbA:function(a){this.d=a}}
W.cv.prototype={}
W.j3.prototype={}
W.ja.prototype={}
W.hX.prototype={}
W.dn.prototype={
b7:function(a){new W.i8(this).$2(a,null)},
ac:function(a,b){if(b==null)J.jz(a)
else J.iH(b,a)},
dQ:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.lx(a)
r=J.iO(s.gdD(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.G(n)}p="element unprintable"
try{p=J.be(a)}catch(n){H.G(n)}try{o=W.bh(a)
this.dP(a,b,t,p,o,s,r)}catch(n){if(H.G(n) instanceof P.a7)throw n
else{this.ac(a,b)
window
m="Removing corrupted element "+H.e(p)
if(typeof console!="undefined")window.console.warn(m)}}},
dP:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.ac(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(t)
return}if(!this.a.a1(a)){this.ac(a,b)
window
t="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(t)
return}if(g!=null)if(!this.a.S(a,"is",g)){this.ac(a,b)
window
t="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(t)
return}t=f.gD(f)
s=H.y(t.slice(0),[H.a3(t,0)])
for(r=f.gD(f).length-1,t=f.a,q=J.h(t);r>=0;--r){p=s[r]
if(!this.a.S(a,J.lN(p),q.a6(t,p))){window
o="Removing disallowed attribute <"+H.e(e)+" "+p+'="'+H.e(q.a6(t,p))+'">'
if(typeof console!="undefined")window.console.warn(o)
q.a6(t,p)
q.dJ(t,p)}}if(!!J.o(a).$isbz)this.b7(a.content)}}
W.i8.prototype={
$2:function(a,b){var t,s,r,q
r=this.a
switch(a.nodeType){case 1:r.dQ(a,b)
break
case 8:case 11:case 3:case 4:break
default:r.ac(a,b)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.ly(t)}catch(q){H.G(q)
r=t
J.iH(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(a,b){return{func:1,v:true,args:[W.p,W.p]}}}
W.cQ.prototype={}
W.cR.prototype={}
W.cS.prototype={}
W.cT.prototype={}
W.cU.prototype={}
W.cV.prototype={}
W.cW.prototype={}
W.cX.prototype={}
W.cY.prototype={}
W.d0.prototype={}
W.d1.prototype={}
W.d3.prototype={}
W.d4.prototype={}
W.d7.prototype={}
W.d8.prototype={}
W.bO.prototype={}
W.bP.prototype={}
W.d9.prototype={}
W.da.prototype={}
W.de.prototype={}
W.dh.prototype={}
W.di.prototype={}
W.bQ.prototype={}
W.bR.prototype={}
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
P.i0.prototype={
c2:function(a){var t,s,r
t=this.a
s=t.length
for(r=0;r<s;++r)if(t[r]===a)return r
C.a.l(t,a)
C.a.l(this.b,null)
return s},
b0:function(a){var t,s,r,q,p
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
s=J.o(a)
if(!!s.$isaP)return new Date(a.a)
if(!!s.$isU)return a
if(!!s.$isaM)return a
if(!!s.$isbi)return a
if(!!s.$isbl)return a
if(!!s.$isaV||!!s.$isaA)return a
if(!!s.$isW){r=this.c2(a)
q=this.b
p=q[r]
t.a=p
if(p!=null)return p
p={}
t.a=p
q[r]=p
s.X(a,new P.i2(t,this))
return t.a}if(!!s.$isf){r=this.c2(a)
p=this.b[r]
if(p!=null)return p
return this.eb(a,r)}throw H.c(P.j9("structured clone of other type"))},
eb:function(a,b){var t,s,r,q
t=J.O(a)
s=t.gi(a)
r=new Array(s)
this.b[b]=r
for(q=0;q<s;++q)r[q]=this.b0(t.h(a,q))
return r}}
P.i2.prototype={
$2:function(a,b){this.a.a[a]=this.b.b0(b)},
$S:function(a,b){return{func:1,args:[,,]}}}
P.ie.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(a,b){return{func:1,args:[,,]}}}
P.i1.prototype={}
P.hS.prototype={}
P.R.prototype={}
P.ea.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eb.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ec.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
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
gn:function(a){return a.y},
gG:function(a){return a.z}}
P.eo.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ep.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
P.eq.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.er.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eu.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ew.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.a0.prototype={}
P.a8.prototype={}
P.eE.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eN.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return this.V(a,b)},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
V:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.iZ]},
$ask:function(){return[P.iZ]},
$isf:1,
$asf:function(){return[P.iZ]},
$asl:function(){return[P.iZ]}}
P.eZ.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fh.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return this.V(a,b)},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
V:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.j4]},
$ask:function(){return[P.j4]},
$isf:1,
$asf:function(){return[P.j4]},
$asl:function(){return[P.j4]}}
P.fj.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fm.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fn.prototype={
gi:function(a){return a.length}}
P.fq.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fr.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bw.prototype={$isbw:1}
P.fN.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return this.V(a,b)},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
V:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.m]},
$ask:function(){return[P.m]},
$isf:1,
$asf:function(){return[P.m]},
$asl:function(){return[P.m]}}
P.u.prototype={
J:function(a,b,c,d){var t,s,r,q,p,o
t=H.y([],[W.cv])
C.a.l(t,W.kC(null))
C.a.l(t,W.kG())
C.a.l(t,new W.i4())
c=new W.dn(new W.cw(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.n).ed(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.M(q)
o=t.ga_(t)
for(t=J.h(p);r=o.firstChild,r!=null;)t.L(p,r)
return p},
$isu:1}
P.fO.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bA.prototype={}
P.bB.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.h_.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return this.V(a,b)},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
V:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.j7]},
$ask:function(){return[P.j7]},
$isf:1,
$asf:function(){return[P.j7]},
$asl:function(){return[P.j7]}}
P.h7.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.cZ.prototype={}
P.d_.prototype={}
P.d5.prototype={}
P.d6.prototype={}
P.df.prototype={}
P.dg.prototype={}
P.dl.prototype={}
P.dm.prototype={}
P.dK.prototype={
gi:function(a){return a.length}}
P.dL.prototype={
gi:function(a){return a.length}}
P.aL.prototype={}
P.fi.prototype={
gi:function(a){return a.length}}
P.fu.prototype={
bH:function(a,b){return a.activeTexture(b)},
bK:function(a,b,c){return a.attachShader(b,c)},
bL:function(a,b,c){return a.bindBuffer(b,c)},
bM:function(a,b,c){return a.bindTexture(b,c)},
bN:function(a,b){return a.blendEquation(b)},
bO:function(a,b,c){return a.blendFunc(b,c)},
bP:function(a,b,c,d){return a.bufferData(b,c,d)},
bQ:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bR:function(a,b){return a.compileShader(b)},
bS:function(a){return a.createBuffer()},
bT:function(a){return a.createProgram()},
bU:function(a,b){return a.createShader(b)},
bV:function(a){return a.createTexture()},
bW:function(a,b){return a.depthMask(b)},
bX:function(a,b){return a.disable(b)},
bY:function(a,b,c,d){return a.drawArrays(b,c,d)},
bZ:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c_:function(a,b){return a.enable(b)},
c0:function(a,b){return a.enableVertexAttribArray(b)},
ax:function(a){return P.ig(a.getContextAttributes())},
b1:function(a){return a.getError()},
b2:function(a,b){return a.getProgramInfoLog(b)},
b3:function(a,b,c){return a.getProgramParameter(b,c)},
b4:function(a,b){return a.getShaderInfoLog(b)},
b5:function(a,b,c){return a.getShaderParameter(b,c)},
b6:function(a,b,c){return a.getUniformLocation(b,c)},
c4:function(a,b){return a.linkProgram(b)},
c8:function(a,b,c){return a.pixelStorei(b,c)},
bb:function(a,b,c){return a.shaderSource(b,c)},
bd:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aZ:function(a,b,c,d,e,f,g,h,i,j){var t
if(!!J.o(g).$isb_)t=!0
else t=!1
if(t){this.aR(a,b,c,d,e,f,g)
return}throw H.c(P.bY("Incorrect number or type of arguments"))},
cd:function(a,b,c,d,e,f,g){return this.aZ(a,b,c,d,e,f,g,null,null,null)},
aR:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
ce:function(a,b,c,d){return a.texParameterf(b,c,d)},
cf:function(a,b,c,d){return a.texParameteri(b,c,d)},
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
P.fv.prototype={
e1:function(a,b){return a.beginTransformFeedback(b)},
e4:function(a,b){return a.bindVertexArray(b)},
ef:function(a){return a.createVertexArray()},
el:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
em:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
en:function(a){return a.endTransformFeedback()},
eR:function(a,b,c,d){this.dT(a,b,c,d)
return},
dT:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
eS:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bH:function(a,b){return a.activeTexture(b)},
bK:function(a,b,c){return a.attachShader(b,c)},
bL:function(a,b,c){return a.bindBuffer(b,c)},
bM:function(a,b,c){return a.bindTexture(b,c)},
bN:function(a,b){return a.blendEquation(b)},
bO:function(a,b,c){return a.blendFunc(b,c)},
bP:function(a,b,c,d){return a.bufferData(b,c,d)},
bQ:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bR:function(a,b){return a.compileShader(b)},
bS:function(a){return a.createBuffer()},
bT:function(a){return a.createProgram()},
bU:function(a,b){return a.createShader(b)},
bV:function(a){return a.createTexture()},
bW:function(a,b){return a.depthMask(b)},
bX:function(a,b){return a.disable(b)},
bY:function(a,b,c,d){return a.drawArrays(b,c,d)},
bZ:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c_:function(a,b){return a.enable(b)},
c0:function(a,b){return a.enableVertexAttribArray(b)},
ax:function(a){return P.ig(a.getContextAttributes())},
b1:function(a){return a.getError()},
b2:function(a,b){return a.getProgramInfoLog(b)},
b3:function(a,b,c){return a.getProgramParameter(b,c)},
b4:function(a,b){return a.getShaderInfoLog(b)},
b5:function(a,b,c){return a.getShaderParameter(b,c)},
b6:function(a,b,c){return a.getUniformLocation(b,c)},
c4:function(a,b){return a.linkProgram(b)},
c8:function(a,b,c){return a.pixelStorei(b,c)},
bb:function(a,b,c){return a.shaderSource(b,c)},
bd:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aZ:function(a,b,c,d,e,f,g,h,i,j){var t
if(!!J.o(g).$isb_)t=!0
else t=!1
if(t){this.aR(a,b,c,d,e,f,g)
return}throw H.c(P.bY("Incorrect number or type of arguments"))},
cd:function(a,b,c,d,e,f,g){return this.aZ(a,b,c,d,e,f,g,null,null,null)},
aR:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
ce:function(a,b,c,d){return a.texParameterf(b,c,d)},
cf:function(a,b,c,d){return a.texParameteri(b,c,d)},
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
P.fC.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.x(b,a,null,null,null))
return P.ig(this.dE(a,b))},
j:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
dE:function(a,b){return a.item(b)},
$isj:1,
$asj:function(){return[P.W]},
$ask:function(){return[P.W]},
$isf:1,
$asf:function(){return[P.W]},
$asl:function(){return[P.W]}}
P.db.prototype={}
P.dc.prototype={}
G.f3.prototype={}
G.I.prototype={
w:function(a,b){var t=this.d
if(H.ae(!t.E(0,a)))H.ao("uniform "+a+" already set")
t.j(0,a,b)},
k:function(a){var t,s,r,q
t=H.y(["{"+new H.an(H.im(this),null).k(0)+"}["+this.a+"]"],[P.m])
for(s=this.d,r=s.gD(s),r=r.gu(r);r.p();){q=r.gq(r)
C.a.l(t,H.e(q)+": "+H.e(s.h(0,q)))}return C.a.aj(t,"\n")}}
G.dO.prototype={
c1:function(a,b,c){J.lu(this.a,b)
if(c>0)J.lT(this.a,b,c)},
cu:function(a,b,c,d,e,f,g,h){J.iJ(this.a,34962,b)
J.lU(this.a,c,d,e,!1,g,h)}}
G.es.prototype={}
G.eA.prototype={
bg:function(a){var t=this.e
H.b(!t.E(0,a))
H.b(C.h.bc(a,"a"))
switch($.$get$N().h(0,a).a){case"vec2":t.j(0,a,H.y([],[T.L]))
break
case"vec3":t.j(0,a,H.y([],[T.J]))
break
case"vec4":t.j(0,a,H.y([],[T.bE]))
break
case"float":t.j(0,a,H.y([],[P.X]))
break
case"uvec4":t.j(0,a,H.y([],[[P.f,P.w]]))
break
default:if(H.ae(!1))H.ao("unknown type for "+a)}},
cZ:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=t&&C.a,r=0;r<4;++r){q=b[r]
p=new Float32Array(2)
o=q.a
p[1]=o[1]
p[0]=o[0]
s.l(t,new T.L(p))}},
d_:function(a,b){var t,s,r,q,p
t=this.e.h(0,a)
for(s=t&&C.a,r=0;r<4;++r){q=b[r]
p=new T.J(new Float32Array(3))
p.b9(q)
s.l(t,p)}},
d0:function(a){var t,s,r,q,p
H.b(!0)
t=this.d
s=t.length
C.a.l(this.c,new G.es(s,s+1,s+2,s+3))
for(r=0;r<4;++r){q=a[r]
p=new T.J(new Float32Array(3))
p.b9(q)
C.a.l(t,p)}},
d4:function(){var t,s,r,q,p,o,n,m,l
t=this.c
s=t.length
H.b(s>0)
s=new Array(t.length*6)
s.fixed$length=Array
r=H.y(s,[P.w])
for(s=this.b,q=0,p=0;!1;++p){o=s[p]
r[q]=o.geX(o)
r[q+1]=o.geY(o)
r[q+2]=o.geZ(o)
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
for(s=this.e,r=s.gD(s),r=r.gu(r);r.p();){q=r.gq(r)
p=$.$get$N().h(0,q).a
C.a.l(t,H.e(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.aj(t," ")}}
G.f0.prototype={
bf:function(a,b,c){var t,s
if(C.h.aF(a,0)===105){if(H.ae(C.b.aD(b.length,c)===this.z))H.ao("ChangeAttribute "+this.z)}else{t=C.b.aD(b.length,c)
if(H.ae(t===(this.ch.length/3|0)))H.ao("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}this.cy.j(0,a,b)
t=this.d
s=this.r.h(0,a)
J.iJ(t.a,34962,s)
J.jv(t.a,34962,b,35048)},
d5:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
a7:function(a,b,c){var t,s,r,q,p,o
t=J.js(a,0)===105
if(t&&this.z===0)this.z=C.b.aD(b.length,c)
s=this.r
r=this.d
s.j(0,a,J.iL(r.a))
this.bf(a,b,c)
q=$.$get$N().h(0,a)
if(q==null)throw H.c("Unknown canonical "+a)
p=this.x
if(H.ae(p.E(0,a)))H.ao("unexpected attribute "+a)
o=p.h(0,a)
J.dD(r.a,this.e)
r.c1(0,o,t?1:0)
r.cu(0,s.h(0,a),o,q.bh(),5126,!1,0,0)},
k:function(a){var t,s,r,q
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,r=t.gD(t),r=r.gu(r);r.p();){q=r.gq(r)
C.a.l(s,H.e(q)+":"+t.h(0,q).length)}return"MESH["+this.a+"] "+C.a.aj(s,"  ")},
saK:function(a){this.cx=a}}
G.ft.prototype={
d8:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.a5)(t),++o){n=t[o]
r.j(0,n,J.jx(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.a5)(t),++o){n=t[o]
r.j(0,n,J.jx(q.a,p,n))}},
de:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gi(t)===s.gi(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gD(s),s=s.gu(s);s.p();){q=s.gq(s)
if(!t.E(0,q))C.a.l(r,q)}for(t=this.x,s=new P.bH(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.p();){q=s.d
if(!t.C(0,q))C.a.l(r,q)}return r},
dh:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gD(b),s=s.gu(s),r=this.d,q=this.y,p=this.z,o=0;s.p();){n=s.gq(s)
switch(J.js(n,0)){case 117:if(q.E(0,n)){m=b.h(0,n)
if(p.E(0,n))H.iC("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.j(0,n,a)
l=$.$get$N().h(0,n)
if(l==null)H.E("unknown "+n)
H.b(q.E(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.iP(r.a,k,m)
else if(!!J.o(m).$isk9)J.lR(r.a,k,m)
break
case"float":if(l.c===0)J.lP(r.a,k,m)
else if(!!J.o(m).$isev)J.lQ(r.a,k,m)
break
case"mat4":if(l.c===0){n=C.w.gcR(H.af(m,"$isnx"))
J.jE(r.a,k,!1,n)}else if(!!J.o(m).$isev)J.jE(r.a,k,!1,m)
else if(H.ae(!1))H.ao("bad unform: "+n)
break
case"mat3":if(l.c===0){n=H.af(m,"$isbp").a
J.jD(r.a,k,!1,n)}else if(!!J.o(m).$isev)J.jD(r.a,k,!1,m)
else if(H.ae(!1))H.ao("bad unform: "+n)
break
case"vec4":if(l.c===0){n=C.w.gcR(H.af(m,"$isbE"))
J.jC(r.a,k,n)}else J.jC(r.a,k,m)
break
case"vec3":n=l.c
j=r.a
if(n===0)J.jB(j,k,H.af(m,"$isJ").a)
else J.jB(j,k,m)
break
case"vec2":n=l.c
j=r.a
if(n===0)J.jA(j,k,H.af(m,"$isL").a)
else J.jA(j,k,m)
break
case"sampler2D":case"sampler2DShadow":n=C.b.a5(33984,this.ch)
J.jt(r.a,n)
n=H.af(m,"$isbC").b
J.bb(r.a,3553,n)
n=this.ch
J.iP(r.a,k,n)
this.ch=this.ch+1
break
case"samplerCube":H.b(n==="uCubeTexture")
n=C.b.a5(33984,this.ch)
J.jt(r.a,n)
n=H.af(m,"$isbC").b
J.bb(r.a,34067,n)
n=this.ch
J.iP(r.a,k,n)
this.ch=this.ch+1
break
default:H.iC("Error: unknow uniform type: "+j)
H.b(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":n=J.B(m,!0)
j=r.a
if(n)J.dE(j,2929)
else J.lo(j,2929)
break
case"cStencilFunc":H.af(m,"$isnz")
m.geq()
J.dE(r.a,2960)
n=m.geq()
j=m.gf1(m)
i=m.gf0(m)
J.lK(r.a,n,j,i)
break
case"cDepthWrite":J.ln(r.a,m)
break
case"cBlendEquation":H.af(m,"$isny")
m.geo()
J.dE(r.a,3042)
n=m.geW()
j=m.gf_()
J.lh(r.a,n,j)
j=m.geo()
J.lg(r.a,j)
break}++o
break}}h=P.m3(0,0,0,Date.now()-new P.aP(t,!1).a,0,0)
""+o
h.k(0)},
d2:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
Date.now()
t=this.d
J.lS(t.a,this.r)
this.ch=0
this.z.T(0)
for(s=0;s<1;++s){r=b[s]
this.dh(r.a,r.d)}q=this.Q
q.T(0)
for(p=a.cy,p=p.gD(p),p=p.gu(p);p.p();)q.l(0,p.gq(p))
o=this.de()
if(o.length!==0)P.Y("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(o)))
J.dD(a.d.a,a.e)
n=this.e.f.length>0
q=a.f
p=a.d5()
m=a.Q
l=a.z
if(n)J.lf(t.a,q)
if(m!==-1){k=t.a
if(l>1)J.ls(k,q,p,m,0,l)
else J.lr(k,q,p,m,0)}else{m=t.a
if(l>1)J.lq(m,q,0,p,l)
else J.lp(m,q,0,p)}if(n)J.lv(t.a)},
d1:function(a,b){return this.d2(a,b,null)}}
G.v.prototype={
bh:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.b(!1)
return-1}}}
G.fz.prototype={
cY:function(a){var t,s,r,q
H.b(this.b==null)
for(t=this.c,s=this.x,r=0;r<2;++r){q=a[r]
H.b($.$get$N().E(0,q))
H.b(!C.a.C(t,q))
C.a.l(t,q)
s.j(0,q,this.r);++this.r}C.a.aB(t)},
O:function(a){var t,s,r,q
H.b(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.a5)(a),++r){q=a[r]
if(H.ae($.$get$N().E(0,q)))H.ao("missing uniform "+q)
H.b(!C.a.C(s,q))
C.a.l(s,q)}C.a.aB(s)},
N:function(a){var t,s,r
H.b(this.b==null)
for(t=this.e,s=0;s<1;++s){r=a[s]
H.b($.$get$N().E(0,r))
H.b(!C.a.C(t,r))
C.a.l(t,r)}C.a.aB(t)},
da:function(a,b){H.b(this.b==null)
this.b=this.bk(!0,a,b)},
bi:function(a){return this.da(a,null)},
d9:function(a,b){H.b(this.b==null)
this.b=this.bk(!1,a,b)},
W:function(a){return this.d9(a,null)},
bk:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
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
if(a)C.a.l(q,"void main(void) {")
C.a.K(q,b)
if(a)C.a.l(q,"}")
return C.a.aj(q,"\n")}}
G.cK.prototype={
d6:function(a,b){var t=this.e
if(t!==1)J.lM(a.a,b,34046,t)
J.dF(a.a,b,10240,this.r)
J.dF(a.a,b,10241,this.f)
if(this.b){J.dF(a.a,b,10242,33071)
J.dF(a.a,b,10243,33071)}}}
G.bC.prototype={
k:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.eF.prototype={
bj:function(a){var t,s
t=this.d
s=this.c
J.bb(t.a,s,this.b)
J.lL(t.a,s,0,6408,6408,5121,a)}}
R.fE.prototype={
dc:function(a,b,c){var t,s,r
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
J.iI(this.a,s)
r=this.dl(b,c,90,30)
this.d=r
J.iI(this.a,r)
t=t.createElement("div")
this.c=t
J.iI(this.a,t)},
dl:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.mI("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.t).bq(r,"float")
r.setProperty(p,"left","")
p=C.t.bq(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.o.L(t,s)}return t}}
R.fF.prototype={
dg:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.v.eQ(s,2)+" fps"
t=this.c;(t&&C.o).cN(t,b)
r=C.b.R(30*C.v.e6(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.o).L(t,q)},
df:function(a){return this.dg(a,"")}}
D.eV.prototype={
$1:function(a){var t,s
t=document.createElement("video")
t.autoplay=!0
s=new W.ho(t,"playing",!1,[W.nt])
s.gaU(s).am(new D.eU(this.a,t))
t.srcObject=a},
$S:function(a){return{func:1,args:[W.aU]}}}
D.eU.prototype={
$1:function(a){return this.a.ad(0,this.b)},
$S:function(a){return{func:1,args:[,]}}}
D.eW.prototype={
$1:function(a){P.Y("E:"+("Camera open error "+H.e(a)))
this.a.ad(0,null)},
$S:function(a){return{func:1,args:[P.A]}}}
A.io.prototype={
$2:function(a,b){var t=536870911&a+J.bc(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(a,b){return{func:1,args:[P.w,P.A]}}}
T.bp.prototype={
k:function(a){return"[0] "+this.ay(0).k(0)+"\n[1] "+this.ay(1).k(0)+"\n[2] "+this.ay(2).k(0)+"\n"},
h:function(a,b){return this.a[b]},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.bp){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gv:function(a){return A.jm(this.a)},
ay:function(a){var t,s
t=new Float32Array(3)
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.J(t)},
b8:function(a,b){var t=this.a
t[0]=t[0]*b
t[1]=t[1]*b
t[2]=t[2]*b
t[3]=t[3]*b
t[4]=t[4]*b
t[5]=t[5]*b
t[6]=t[6]*b
t[7]=t[7]*b
t[8]=t[8]*b}}
T.L.prototype={
Y:function(a,b){var t=this.a
t[0]=a
t[1]=b},
k:function(a){var t=this.a
return"["+H.e(t[0])+","+H.e(t[1])+"]"},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.L){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gv:function(a){return A.jm(this.a)},
h:function(a,b){return this.a[b]},
gi:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.J.prototype={
Z:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
b9:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
k:function(a){var t=this.a
return"["+H.e(t[0])+","+H.e(t[1])+","+H.e(t[2])+"]"},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.J){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gv:function(a){return A.jm(this.a)},
h:function(a,b){return this.a[b]},
gi:function(a){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return Math.sqrt(s*s+r*r+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gG:function(a){return this.a[2]}}
T.bE.prototype={}
T.e6.prototype={
d3:function(a,b,c){$.$get$c7().j(0,this.c.a,this)}}
T.iz.prototype={
$1:function(a){var t,s,r,q,p
try{s=this.a.b
s.bj(s.f)
r=s.d
s=s.c
J.bb(r.a,s,null)}catch(q){t=H.G(q)
P.Y(t)}p=$.$get$c7().h(0,$.$get$ij().value)
s=p.c
r=s.d
r.j(0,"uTime",a/1000)
r.j(0,"uTexture",this.a.b)
p.b.d1(this.b,[s])
C.I.ge_(window).am(this)
this.c.df(a+0)},
$S:function(a){return{func:1,v:true,args:[P.a4]}}}
T.iA.prototype={
$1:function(a){var t,s,r,q,p,o,n,m,l
t=J.aI(a,0)
s=this.a
s.a=t
if(t==null)C.I.dY(window,"Could not access camera - do you have a camera installed?")
r=s.a
q=r.videoWidth
p=r.videoHeight
P.Y("camera resolution: "+H.e(q)+"x"+H.e(p))
r=this.b
o=s.a
n=$.$get$kl()
if(n==null)n=new G.cK(!1,!1,!1,!0,1,9729,9729)
m=J.ll(r.a)
l=new G.eF(o,"video",m,3553,r,n)
J.bb(r.a,3553,m)
J.lI(r.a,37440,1)
l.bj(o)
n.d6(r,3553)
H.b(J.lD(r.a)===0)
J.bb(r.a,3553,null)
s.b=l
this.c.$1(0)},
$S:function(a){return{func:1,args:[P.f]}}}
J.a.prototype.cT=J.a.prototype.k
J.bn.prototype.cV=J.bn.prototype.k
P.Q.prototype.cU=P.Q.prototype.aw
W.a_.prototype.aC=W.a_.prototype.J
W.bN.prototype.cW=W.bN.prototype.S;(function installTearOffs(){installTearOff(H.b2.prototype,"geC",0,0,0,null,["$0"],["av"],0)
installTearOff(H.a1.prototype,"gcF",0,0,0,null,["$1"],["I"],2)
installTearOff(H.aE.prototype,"geh",0,0,0,null,["$1"],["U"],2)
installTearOff(P,"n_",1,0,0,null,["$1"],["mF"],1)
installTearOff(P,"n0",1,0,0,null,["$1"],["mG"],1)
installTearOff(P,"n1",1,0,0,null,["$1"],["mH"],1)
installTearOff(P,"kQ",1,0,0,null,["$0"],["mX"],0)
installTearOff(P.C.prototype,"gbu",0,0,0,null,["$2","$1"],["F","du"],5)
installTearOff(P,"n4",1,0,0,null,["$2"],["m_"],6)
installTearOff(W,"na",1,0,0,null,["$4"],["mM"],4)
installTearOff(W,"nb",1,0,0,null,["$4"],["mN"],4)
installTearOff(W.cu.prototype,"gaW",0,1,0,null,["$0"],["aX"],3)
installTearOff(W.cM.prototype,"gaW",0,1,0,null,["$0"],["aX"],3)
installTearOff(T,"kR",1,0,0,null,["$0"],["nj"],0)})();(function inheritance(){inherit(P.A,null)
var t=P.A
inherit(H.iW,t)
inherit(J.a,t)
inherit(J.dJ,t)
inherit(P.Q,t)
inherit(H.ck,t)
inherit(P.cf,t)
inherit(H.aR,t)
inherit(H.at,t)
inherit(H.hQ,t)
inherit(H.b2,t)
inherit(H.hp,t)
inherit(H.aF,t)
inherit(H.hP,t)
inherit(H.hj,t)
inherit(H.cz,t)
inherit(H.fV,t)
inherit(H.ar,t)
inherit(H.a1,t)
inherit(H.aE,t)
inherit(H.fs,t)
inherit(H.h0,t)
inherit(P.aQ,t)
inherit(H.dd,t)
inherit(H.an,t)
inherit(P.aT,t)
inherit(H.eO,t)
inherit(H.eQ,t)
inherit(P.V,t)
inherit(P.iR,t)
inherit(P.hk,t)
inherit(P.b0,t)
inherit(P.C,t)
inherit(P.cO,t)
inherit(P.bx,t)
inherit(P.fI,t)
inherit(P.j5,t)
inherit(P.aK,t)
inherit(P.i9,t)
inherit(P.fy,t)
inherit(P.hM,t)
inherit(P.bH,t)
inherit(P.j_,t)
inherit(P.bI,t)
inherit(P.k,t)
inherit(P.hO,t)
inherit(P.aH,t)
inherit(P.D,t)
inherit(P.aP,t)
inherit(P.a4,t)
inherit(P.au,t)
inherit(P.cE,t)
inherit(P.iT,t)
inherit(P.hu,t)
inherit(P.e9,t)
inherit(P.f,t)
inherit(P.W,t)
inherit(P.H,t)
inherit(P.aY,t)
inherit(P.m,t)
inherit(P.by,t)
inherit(P.j8,t)
inherit(W.dU,t)
inherit(W.bG,t)
inherit(W.l,t)
inherit(W.cw,t)
inherit(W.bN,t)
inherit(W.i4,t)
inherit(W.ca,t)
inherit(W.cv,t)
inherit(W.j3,t)
inherit(W.ja,t)
inherit(W.hX,t)
inherit(W.dn,t)
inherit(P.i0,t)
inherit(P.hS,t)
inherit(G.f3,t)
inherit(G.dO,t)
inherit(G.es,t)
inherit(G.eA,t)
inherit(G.v,t)
inherit(G.fz,t)
inherit(G.cK,t)
inherit(G.bC,t)
inherit(R.fE,t)
inherit(T.bp,t)
inherit(T.L,t)
inherit(T.J,t)
inherit(T.bE,t)
inherit(T.e6,t)
t=J.a
inherit(J.eK,t)
inherit(J.ci,t)
inherit(J.bn,t)
inherit(J.av,t)
inherit(J.bm,t)
inherit(J.ax,t)
inherit(H.aV,t)
inherit(H.aA,t)
inherit(W.d,t)
inherit(W.dG,t)
inherit(W.aM,t)
inherit(W.dM,t)
inherit(W.aO,t)
inherit(W.Z,t)
inherit(W.cQ,t)
inherit(W.dZ,t)
inherit(W.e_,t)
inherit(W.e0,t)
inherit(W.c3,t)
inherit(W.c4,t)
inherit(W.cR,t)
inherit(W.c6,t)
inherit(W.cT,t)
inherit(W.e3,t)
inherit(W.cV,t)
inherit(W.eC,t)
inherit(W.cX,t)
inherit(W.bl,t)
inherit(W.eS,t)
inherit(W.f_,t)
inherit(W.d0,t)
inherit(W.bt,t)
inherit(W.cu,t)
inherit(W.d3,t)
inherit(W.a9,t)
inherit(W.d7,t)
inherit(W.cx,t)
inherit(W.d9,t)
inherit(W.aa,t)
inherit(W.de,t)
inherit(W.dh,t)
inherit(W.fU,t)
inherit(W.dj,t)
inherit(W.fZ,t)
inherit(W.cM,t)
inherit(W.h6,t)
inherit(W.h8,t)
inherit(W.dp,t)
inherit(W.dr,t)
inherit(W.dt,t)
inherit(W.dv,t)
inherit(W.dx,t)
inherit(P.cZ,t)
inherit(P.d5,t)
inherit(P.fm,t)
inherit(P.fn,t)
inherit(P.fq,t)
inherit(P.df,t)
inherit(P.dl,t)
inherit(P.dK,t)
inherit(P.fu,t)
inherit(P.fv,t)
inherit(P.db,t)
t=J.bn
inherit(J.fk,t)
inherit(J.aD,t)
inherit(J.ay,t)
inherit(J.iV,J.av)
t=J.bm
inherit(J.ch,t)
inherit(J.cg,t)
t=P.Q
inherit(H.j,t)
inherit(H.cm,t)
inherit(H.cN,t)
t=H.j
inherit(H.aS,t)
inherit(H.eP,t)
inherit(H.e7,H.cm)
t=P.cf
inherit(H.eY,t)
inherit(H.hb,t)
t=H.aS
inherit(H.bo,t)
inherit(P.eR,t)
t=H.at
inherit(H.iE,t)
inherit(H.iF,t)
inherit(H.hK,t)
inherit(H.hq,t)
inherit(H.eH,t)
inherit(H.eI,t)
inherit(H.hR,t)
inherit(H.fW,t)
inherit(H.fX,t)
inherit(H.iG,t)
inherit(H.it,t)
inherit(H.iu,t)
inherit(H.iv,t)
inherit(H.iw,t)
inherit(H.ix,t)
inherit(H.fR,t)
inherit(H.eL,t)
inherit(H.ip,t)
inherit(H.iq,t)
inherit(H.ir,t)
inherit(P.hf,t)
inherit(P.he,t)
inherit(P.hg,t)
inherit(P.hh,t)
inherit(P.ez,t)
inherit(P.ey,t)
inherit(P.hv,t)
inherit(P.hD,t)
inherit(P.hz,t)
inherit(P.hA,t)
inherit(P.hB,t)
inherit(P.hx,t)
inherit(P.hC,t)
inherit(P.hw,t)
inherit(P.hG,t)
inherit(P.hH,t)
inherit(P.hF,t)
inherit(P.hE,t)
inherit(P.fL,t)
inherit(P.fM,t)
inherit(P.fJ,t)
inherit(P.fK,t)
inherit(P.ia,t)
inherit(P.id,t)
inherit(P.hV,t)
inherit(P.hU,t)
inherit(P.hW,t)
inherit(P.eX,t)
inherit(P.e4,t)
inherit(P.e5,t)
inherit(W.e8,t)
inherit(W.fc,t)
inherit(W.fd,t)
inherit(W.fH,t)
inherit(W.hc,t)
inherit(W.ht,t)
inherit(W.ff,t)
inherit(W.fe,t)
inherit(W.hY,t)
inherit(W.hZ,t)
inherit(W.i7,t)
inherit(W.i8,t)
inherit(P.i2,t)
inherit(P.ie,t)
inherit(D.eV,t)
inherit(D.eU,t)
inherit(D.eW,t)
inherit(A.io,t)
inherit(T.iz,t)
inherit(T.iA,t)
t=H.hj
inherit(H.b4,t)
inherit(H.bS,t)
t=P.aQ
inherit(H.fg,t)
inherit(H.eM,t)
inherit(H.h4,t)
inherit(H.h2,t)
inherit(H.dN,t)
inherit(H.fw,t)
inherit(P.bZ,t)
inherit(P.aW,t)
inherit(P.a7,t)
inherit(P.h5,t)
inherit(P.h3,t)
inherit(P.aZ,t)
inherit(P.dP,t)
inherit(P.dY,t)
t=H.fR
inherit(H.fD,t)
inherit(H.bf,t)
inherit(H.hd,P.bZ)
inherit(P.cl,P.aT)
t=P.cl
inherit(H.ai,t)
inherit(W.hi,t)
t=H.aA
inherit(H.f4,t)
inherit(H.cp,t)
t=H.cp
inherit(H.bJ,t)
inherit(H.bL,t)
inherit(H.bK,H.bJ)
inherit(H.cq,H.bK)
inherit(H.bM,H.bL)
inherit(H.cr,H.bM)
t=H.cq
inherit(H.co,t)
inherit(H.f5,t)
t=H.cr
inherit(H.f6,t)
inherit(H.f7,t)
inherit(H.f8,t)
inherit(H.f9,t)
inherit(H.fa,t)
inherit(H.cs,t)
inherit(H.fb,t)
t=P.hk
inherit(P.cP,t)
inherit(P.i5,t)
inherit(P.hT,P.i9)
inherit(P.hN,H.ai)
inherit(P.fx,P.fy)
inherit(P.hJ,P.fx)
inherit(P.hL,P.hJ)
inherit(P.cj,P.bI)
t=P.a4
inherit(P.X,t)
inherit(P.w,t)
t=P.a7
inherit(P.cy,t)
inherit(P.eG,t)
t=W.d
inherit(W.p,t)
inherit(W.ak,t)
inherit(W.et,t)
inherit(W.bk,t)
inherit(W.aU,t)
inherit(W.bs,t)
inherit(W.fo,t)
inherit(W.cA,t)
inherit(W.bO,t)
inherit(W.bQ,t)
inherit(W.h9,t)
inherit(W.ha,t)
inherit(W.bF,t)
inherit(W.jb,t)
inherit(P.dL,t)
inherit(P.aL,t)
t=W.p
inherit(W.a_,t)
inherit(W.as,t)
inherit(W.bg,t)
t=W.a_
inherit(W.i,t)
inherit(P.u,t)
t=W.ak
inherit(W.bX,t)
inherit(W.eB,t)
inherit(W.eT,t)
t=W.i
inherit(W.dH,t)
inherit(W.dI,t)
inherit(W.aq,t)
inherit(W.c_,t)
inherit(W.c2,t)
inherit(W.ex,t)
inherit(W.cc,t)
inherit(W.br,t)
inherit(W.aX,t)
inherit(W.cH,t)
inherit(W.fP,t)
inherit(W.fQ,t)
inherit(W.bz,t)
t=W.aO
inherit(W.dQ,t)
inherit(W.dS,t)
inherit(W.dT,t)
inherit(W.dW,t)
t=W.Z
inherit(W.dR,t)
inherit(W.dV,t)
inherit(W.dX,t)
inherit(W.aN,W.cQ)
inherit(W.e1,W.c4)
inherit(W.cS,W.cR)
inherit(W.c5,W.cS)
inherit(W.cU,W.cT)
inherit(W.e2,W.cU)
inherit(W.U,W.aM)
inherit(W.cW,W.cV)
inherit(W.bi,W.cW)
inherit(W.cY,W.cX)
inherit(W.bj,W.cY)
inherit(W.cd,W.bg)
inherit(W.eD,W.bk)
inherit(W.f1,W.bs)
inherit(W.d1,W.d0)
inherit(W.f2,W.d1)
inherit(W.ct,W.bt)
inherit(W.M,P.cj)
inherit(W.d4,W.d3)
inherit(W.bu,W.d4)
inherit(W.d8,W.d7)
inherit(W.fl,W.d8)
inherit(W.bP,W.bO)
inherit(W.fA,W.bP)
inherit(W.da,W.d9)
inherit(W.fB,W.da)
inherit(W.fG,W.de)
inherit(W.di,W.dh)
inherit(W.fS,W.di)
inherit(W.bR,W.bQ)
inherit(W.fT,W.bR)
inherit(W.dk,W.dj)
inherit(W.fY,W.dk)
inherit(W.b_,W.br)
inherit(W.dq,W.dp)
inherit(W.hl,W.dq)
inherit(W.hm,W.c6)
inherit(W.ds,W.dr)
inherit(W.hI,W.ds)
inherit(W.du,W.dt)
inherit(W.d2,W.du)
inherit(W.dw,W.dv)
inherit(W.i_,W.dw)
inherit(W.dy,W.dx)
inherit(W.i3,W.dy)
inherit(W.hn,W.hi)
inherit(W.hr,P.bx)
inherit(W.ho,W.hr)
inherit(W.hs,P.fI)
inherit(W.i6,W.bN)
inherit(P.i1,P.i0)
inherit(P.R,P.hS)
t=P.u
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
inherit(P.er,t)
inherit(P.eu,t)
inherit(P.a8,t)
inherit(P.eZ,t)
inherit(P.fj,t)
inherit(P.bw,t)
t=P.a8
inherit(P.ew,t)
inherit(P.a0,t)
inherit(P.eE,t)
inherit(P.fO,t)
inherit(P.bA,t)
inherit(P.h7,t)
inherit(P.d_,P.cZ)
inherit(P.eN,P.d_)
inherit(P.d6,P.d5)
inherit(P.fh,P.d6)
inherit(P.fr,P.a0)
inherit(P.dg,P.df)
inherit(P.fN,P.dg)
inherit(P.bB,P.bA)
inherit(P.dm,P.dl)
inherit(P.h_,P.dm)
inherit(P.fi,P.aL)
inherit(P.dc,P.db)
inherit(P.fC,P.dc)
t=G.f3
inherit(G.I,t)
inherit(G.f0,t)
inherit(G.ft,t)
inherit(G.eF,G.bC)
inherit(R.fF,R.fE)
mixin(H.bJ,P.k)
mixin(H.bK,H.aR)
mixin(H.bL,P.k)
mixin(H.bM,H.aR)
mixin(P.bI,P.k)
mixin(W.cQ,W.dU)
mixin(W.cR,P.k)
mixin(W.cS,W.l)
mixin(W.cT,P.k)
mixin(W.cU,W.l)
mixin(W.cV,P.k)
mixin(W.cW,W.l)
mixin(W.cX,P.k)
mixin(W.cY,W.l)
mixin(W.d0,P.k)
mixin(W.d1,W.l)
mixin(W.d3,P.k)
mixin(W.d4,W.l)
mixin(W.d7,P.k)
mixin(W.d8,W.l)
mixin(W.bO,P.k)
mixin(W.bP,W.l)
mixin(W.d9,P.k)
mixin(W.da,W.l)
mixin(W.de,P.aT)
mixin(W.dh,P.k)
mixin(W.di,W.l)
mixin(W.bQ,P.k)
mixin(W.bR,W.l)
mixin(W.dj,P.k)
mixin(W.dk,W.l)
mixin(W.dp,P.k)
mixin(W.dq,W.l)
mixin(W.dr,P.k)
mixin(W.ds,W.l)
mixin(W.dt,P.k)
mixin(W.du,W.l)
mixin(W.dv,P.k)
mixin(W.dw,W.l)
mixin(W.dx,P.k)
mixin(W.dy,W.l)
mixin(P.cZ,P.k)
mixin(P.d_,W.l)
mixin(P.d5,P.k)
mixin(P.d6,W.l)
mixin(P.df,P.k)
mixin(P.dg,W.l)
mixin(P.dl,P.k)
mixin(P.dm,W.l)
mixin(P.db,P.k)
mixin(P.dc,W.l)})();(function constants(){C.n=W.aq.prototype
C.J=W.c_.prototype
C.t=W.aN.prototype
C.o=W.c2.prototype
C.K=W.c3.prototype
C.L=W.cc.prototype
C.l=W.cd.prototype
C.M=J.a.prototype
C.a=J.av.prototype
C.v=J.cg.prototype
C.b=J.ch.prototype
C.w=J.ci.prototype
C.h=J.ax.prototype
C.T=J.ay.prototype
C.W=H.co.prototype
C.X=W.ct.prototype
C.A=W.bu.prototype
C.B=J.fk.prototype
C.C=W.cx.prototype
C.Y=W.aX.prototype
C.H=W.cH.prototype
C.r=J.aD.prototype
C.I=W.bF.prototype
C.c=new P.hT()
C.u=new P.au(0)
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
C.x=function(hooks) { return hooks; }

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
C.y=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.U=H.y(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.m])
C.V=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.z=makeConstList([])
C.p=H.y(makeConstList(["bind","if","ref","repeat","syntax"]),[P.m])
C.q=H.y(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.m])
C.Z=new G.v("vec3","vertex btangents",0)
C.d=new G.v("vec3","",0)
C.a_=new G.v("vec4","delta from light",0)
C.m=new G.v("","",0)
C.D=new G.v("vec3","vertex coordinates",0)
C.a0=new G.v("vec3","vertex binormals",0)
C.E=new G.v("vec4","for wireframe",0)
C.a1=new G.v("vec4","per vertex color",0)
C.a2=new G.v("float","for normal maps",0)
C.i=new G.v("mat4","",0)
C.a4=new G.v("mat4","",4)
C.a3=new G.v("mat4","",128)
C.e=new G.v("float","",0)
C.a5=new G.v("float","",4)
C.a6=new G.v("float","depth for shadowmaps",0)
C.f=new G.v("sampler2D","",0)
C.a7=new G.v("float","for bump maps",0)
C.a8=new G.v("vec2","texture uvs",0)
C.a9=new G.v("float","time since program start in sec",0)
C.j=new G.v("vec2","",0)
C.aa=new G.v("samplerCube","",0)
C.k=new G.v("vec4","",0)
C.ab=new G.v("vec3","vertex normals",0)
C.ac=new G.v("sampler2DShadow","",0)
C.F=new G.v("vec3","per vertex color",0)
C.G=new G.v("mat3","",0)
C.ad=new G.v("vec3","vertex tangents",0)
C.ae=H.F("nr")
C.af=H.F("ns")
C.ag=H.F("ev")
C.ah=H.F("nu")
C.ai=H.F("nv")
C.aj=H.F("k9")
C.ak=H.F("nw")
C.al=H.F("kc")
C.am=H.F("H")
C.an=H.F("m")
C.ao=H.F("kx")
C.ap=H.F("ky")
C.aq=H.F("nA")
C.ar=H.F("kz")
C.as=H.F("aH")
C.at=H.F("X")
C.au=H.F("w")
C.av=H.F("a4")})();(function staticFields(){$.kh="$cachedFunction"
$.ki="$cachedInvocation"
$.jJ=null
$.jH=null
$.jg=!1
$.jl=null
$.kN=null
$.l4=null
$.ih=null
$.is=null
$.jn=null
$.b5=null
$.bT=null
$.bU=null
$.jh=!1
$.r=C.c
$.k6=0
$.ah=null
$.iS=null
$.k5=null
$.k4=null
$.k2=null
$.k1=null
$.k0=null
$.k_=null
$.kW=0
$.mY="\nfloat nearestLevel(float col, int mode) {\n   if (mode==0) return ceil(col / 80.0) * 80.0;\n\t else if (mode==1) return ceil(col * 6.0) / 6.0;\n\t else return ceil(col * 3.0) / 3.0;\n}\n\n// averaged pixel intensity from 3 color channels\nfloat avg3(vec3 pix) {\n return (pix.r + pix.g + pix.b)/3.0;\n}\n\nvec3 get_pixel(vec2 coords, float dx, float dy) {\n return texture(uTexture, coords + vec2(dx, dy)).rgb;\n}\n\n// returns pixel color\nfloat IsEdge(vec2 coords, vec2 dim) {\n  vec2 d = vec2(1.0, 1.0) / dim;\n\n  // read neighboring pixel intensities\n  float pix0 = avg3(get_pixel(coords, -d.x, -d.y));\n  float pix1 = avg3(get_pixel(coords, -d.x, 0.0));\n  float pix2 = avg3(get_pixel(coords, -d.x, d.y));\n  float pix3 = avg3(get_pixel(coords, 0.0, -d.y));\n\n  float pix5 = avg3(get_pixel(coords, 0.0, d.y));\n  float pix6 = avg3(get_pixel(coords, d.x, -d.y));\n  float pix7 = avg3(get_pixel(coords, d.x, 0.0));\n  float pix8 = avg3(get_pixel(coords, d.x, d.y));\n\n\n  // average color differences around neighboring pixels\n  float delta = (abs(pix1-pix7) + abs(pix5-pix3) +\n                 abs(pix0-pix8) + abs(pix2-pix6)) * 0.25;\n  return clamp(5.5*delta, 0.0, 1.0);\n}\n\nvoid main() {\n    vec2 texdim = vec2(textureSize(uTexture, 0));\n    vec4 colorOrg = texture(uTexture, vTexUV);\n    vec3 vHSV =  RGBtoHSV(colorOrg.rgb);\n    vHSV.x = nearestLevel(vHSV.x, 0);\n    vHSV.y = nearestLevel(vHSV.y, 1);\n    vHSV.z = nearestLevel(vHSV.z, 2);\n    float edg = IsEdge(vTexUV, texdim);\n    vec3 vRGB = (edg >= 0.3) ? vec3(0.0,0.0,0.0) : HSVtoRGB(vHSV);\n    //vec3 vRGB = HSVtoRGB(vHSV);\n    oFragColor = vec4(vRGB, 1.0);\n}\n"})();(function lazyInitializers(){lazy($,"jZ","$get$jZ",function(){return H.kZ("_$dart_dartClosure")})
lazy($,"iX","$get$iX",function(){return H.kZ("_$dart_js")})
lazy($,"ka","$get$ka",function(){return H.mf()})
lazy($,"kb","$get$kb",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.k6
$.k6=t+1
t="expando$key$"+t}return new P.e9(t,null,[P.w])})
lazy($,"km","$get$km",function(){return H.ab(H.h1({
toString:function(){return"$receiver$"}}))})
lazy($,"kn","$get$kn",function(){return H.ab(H.h1({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"ko","$get$ko",function(){return H.ab(H.h1(null))})
lazy($,"kp","$get$kp",function(){return H.ab(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kt","$get$kt",function(){return H.ab(H.h1(void 0))})
lazy($,"ku","$get$ku",function(){return H.ab(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kr","$get$kr",function(){return H.ab(H.ks(null))})
lazy($,"kq","$get$kq",function(){return H.ab(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"kw","$get$kw",function(){return H.ab(H.ks(void 0))})
lazy($,"kv","$get$kv",function(){return H.ab(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"jd","$get$jd",function(){return P.mE()})
lazy($,"k8","$get$k8",function(){return P.mK(null,P.H)})
lazy($,"bV","$get$bV",function(){return[]})
lazy($,"jY","$get$jY",function(){return{}})
lazy($,"kD","$get$kD",function(){return P.j0(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"je","$get$je",function(){return P.z()})
lazy($,"N","$get$N",function(){return P.aj(["cBlendEquation",C.m,"cDepthWrite",C.m,"cDepthTest",C.m,"cStencilFunc",C.m,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColors",C.F,"aColorAlpha",C.a1,"aPosition",C.D,"aTexUV",C.a8,"aNormal",C.ab,"aBinormal",C.a0,"aCenter",C.E,"aPointSize",C.e,"aBoneIndex",C.k,"aBoneWeight",C.k,"aTangent",C.ad,"aBitangent",C.Z,"iaRotation",C.k,"iaTranslation",C.d,"iaScale",C.d,"vColor",C.F,"vTexUV",C.j,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.D,"vPositionFromLight",C.a_,"vCenter",C.E,"vDepth",C.a6,"uTransformationMatrix",C.i,"uModelMatrix",C.i,"uNormalMatrix",C.G,"uConvolutionMatrix",C.G,"uPerspectiveViewMatrix",C.i,"uLightPerspectiveViewMatrix",C.i,"uShadowMap",C.ac,"uTexture",C.f,"uTexture2",C.f,"uTexture3",C.f,"uTexture4",C.f,"uSpecularMap",C.f,"uNormalMap",C.f,"uBumpMap",C.f,"uDepthMap",C.f,"uCubeTexture",C.aa,"uAnimationTable",C.f,"uTime",C.a9,"uCameraNear",C.e,"uCameraFar",C.e,"uFogNear",C.e,"uFogFar",C.e,"uPointSize",C.e,"uScale",C.e,"uAngle",C.e,"uCanvasSize",C.j,"uCenter2",C.j,"uCutOff",C.e,"uShininess",C.e,"uShadowBias",C.e,"uOpacity",C.e,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.k,"uColorAlpha2",C.k,"uEyePosition",C.d,"uMaterial",C.i,"uRange",C.j,"uDirection",C.j,"uBoneMatrices",C.a3,"uLightDescs",C.a4,"uLightCount",C.e,"uLightTypes",C.a5,"uBumpScale",C.a7,"uNormalScale",C.a2])})
lazy($,"kl","$get$kl",function(){var t=G.mA()
t.b=!0
return t})
lazy($,"kV","$get$kV",function(){var t=G.al("uv-passthru")
t.cY(["aPosition","aTexUV"])
t.N(["vTexUV"])
t.bi(["gl_Position = vec4(aPosition, 1.0);","vTexUV = aTexUV;"])
return t})
lazy($,"kT","$get$kT",function(){var t=G.al("copyF")
t.N(["vTexUV"])
t.O(["uTexture"])
t.bi(["oFragColor = texture(uTexture, vTexUV);"])
return t})
lazy($,"l9","$get$l9",function(){var t=G.al("ToonF")
t.N(["vTexUV"])
t.O(["uTexture"])
t.W(["vec3 RGBtoHSV(vec3 rgb) {\n   float r = rgb.r;\n   float g = rgb.g;\n   float b = rgb.b;\n\n\n   float minv = min(min(r, g), b);\n   float maxv = max(max(r, g), b);\n   float delta = maxv - minv;\n\n   vec3 res;\n   res.z = maxv;            // v\n   if( maxv == 0.0 ) {\n      // r = g = b = 0      // s = 0, v is undefined\n      res.y = 0.0;\n      res.x = -1.0;\n      return res;\n   }\n\n   res.y = delta / maxv;      // s\n   if (r == maxv) res.x = (g - b) / delta;  // btwn yellow & magenta\n   else if (g == maxv) res.x = 2.0 + (b - r) / delta;   // btwn cyan & yellow\n   else res.x = 4.0 + (r - g) / delta;   // btwn magenta & cyan\n\n   res.x = res.x * 60.0;            // degrees\n   if( res.x < 0.0 ) res.x = res.x + 360.0;\n\n   return res;\n}\n\nvec3 HSVtoRGB(vec3 hsv) {\n   float h = hsv.x / 60.0;  // sector 0 to 5\n   float s = hsv.y;\n   float v = hsv.z;\n\n   if( s == 0.0 ) {\n      // achromatic (grey)\n      return vec3(v, v, v);\n   }\n\n   int i = int(floor( h ));\n   float f = h - float(i);         // fractional part of h\n   float p = v * ( 1.0 - s );\n   float q = v * ( 1.0 - s * f );\n   float t = v * ( 1.0 - s * ( 1.0 - f ) );\n\n   if (i == 0) return vec3(v, t, p);\n   else if (i == 1) return vec3(q, v , p);\n   else if (i == 2) return vec3(p, v, t);\n   else if (i == 3) return vec3(p, q, v);\n   else if (i == 4) return vec3(t, p, v);\n   return vec3(v, p, q);\n}\n",$.mY])
return t})
lazy($,"l0","$get$l0",function(){var t=G.al("HexPixelateF")
t.N(["vTexUV"])
t.O(["uCenter2","uPointSize","uTexture"])
t.W(["\nfloat S = 0.86602540378;\n\nvec2 GetHexCenter(vec2 p) {\n vec2 a;\n    if (p.x + p.y - floor(p.x) - floor(p.y) < 1.0) a = vec2(floor(p.x), floor(p.y));\n    else a = vec2(ceil(p.x), ceil(p.y));\n    vec2 b = vec2(ceil(p.x), floor(p.y));\n    vec2 c = vec2(floor(p.x), ceil(p.y));\n\n    vec3 P = vec3(p.x, p.y, 1.0 - p.x - p.y);\n    vec3 A = vec3(a.x, a.y, 1.0 - a.x - a.y);\n    vec3 B = vec3(b.x, b.y, 1.0 - b.x - b.y);\n    vec3 C = vec3(c.x, c.y, 1.0 - c.x - c.y);\n\n    float alen = length(P - A);\n    float blen = length(P - B);\n    float clen = length(P - C);\n\n    if (alen < blen) {\n        return (alen < clen) ? a : c;\n    } else {\n        return (blen < clen) ? b : c;\n    }\n}\n\nvec2 ToPixelSpace(vec2 v, vec2 texdim) {\n    vec2 p = (v * texdim - uCenter2) / uPointSize;\n    float t = p.y / S;\n    return vec2(p.x - 0.5 * t, t);\n}\n\nvec2 ToNormalizedSpace(vec2 v, vec2 texdim) {\n   vec2 p = vec2(v.x + v.y * 0.5, v.y * S);\n   return p * uPointSize / texdim + uCenter2 / texdim;\n}\n\nvoid main() {\n    vec2 texdim = vec2(textureSize(uTexture, 0));\n    vec2 p = ToPixelSpace(vTexUV, texdim);\n    vec2 c = GetHexCenter(p);\n    vec2 q = ToNormalizedSpace(c, texdim);\n    oFragColor = texture(uTexture, q);\n}\n"])
return t})
lazy($,"kU","$get$kU",function(){var t=G.al("DotF")
t.N(["vTexUV"])
t.O(["uCenter2","uScale","uAngle","uTexture"])
t.W(["float pattern(vec2 tex) {\n\t\tfloat s = sin( uAngle );\n\t\tfloat c = cos( uAngle );\n\t\tvec2 point = vec2( c * tex.x - s * tex.y, s * tex.x + c * tex.y ) * uScale;\n\t\treturn ( sin( point.x ) * sin( point.y ) ) * 4.0;\n}\n\nvoid main() {\n\t\tvec2 texdim = vec2(textureSize(uTexture, 0));\n\t\tvec4 color = texture(uTexture, vTexUV );\n\t\tfloat average = ( color.r + color.g + color.b ) / 3.0;\n     vec2 tex = vTexUV* texdim - uCenter2;\n\t\toFragColor = vec4( vec3( average * 10.0 - 5.0 + pattern(tex) ), color.a );\n}\n"])
return t})
lazy($,"la","$get$la",function(){var t=G.al("DotF")
t.N(["vTexUV"])
t.O(["uScale","uTime","uTexture"])
t.W(["float rand(vec2 co)  {\n    float a = 12.9898;\n    float b = 78.233;\n    float c = 43758.5453;\n    float dt = dot(co.xy, vec2(a,b));\n    float sn = mod(dt,3.14);\n    return fract(sin(sn) * c);\n}\n\nvec3 rgbDistortion(vec2 uv, float magnitude, float time) {\n    // x offset for the three color channels\n    // we do not change the y\n\t  float dR = rand(vec2(time * 0.03, uv.y * 0.42)) * 0.001 +\n\t             sin(rand(vec2(time * 0.2, uv.y))) * magnitude;\n\t  float dG = rand(vec2(time * 0.004, uv.y * 0.002)) * 0.004 +\n               sin(time * 9.0) * magnitude;\n\t  float dB = 0.0;\n    return vec3(dR, dG, dB);\n}\n\nvoid main() {\n      vec3 d = rgbDistortion(vTexUV, uScale, uTime);\n      float x = vTexUV.x;\n      float y = vTexUV.y;\n\n\t\t\tfloat r = texture(uTexture, vec2(x + d.r, y) ).r;\n\t\t\tfloat g = texture(uTexture, vec2(x + d.g, y) ).g;\n\t\t\tfloat b = texture(uTexture, vec2(x + d.b, y) ).b;\n\t\t\toFragColor = vec4( r, g, b, 1.0 );\n}\n"])
return t})
lazy($,"l2","$get$l2",function(){var t=G.al("LumidotsF")
t.N(["vTexUV"])
t.O(["uPointSize","uTexture"])
t.W(["\n// http://stackoverflow.com/questions/596216/formula-to-determine-brightness-of-rgb-color\nfloat RGB2Luma(vec3 rgb) { return dot(rgb, vec3(0.212, 0.715, 0.072)); }\n// float RGB2Luma(vec3 rgb) { return dot(rgb, vec3(0.299, 0.587, 0.114)); }\n\n\nvoid main() {\n\t  vec2 texdim = vec2(textureSize(uTexture, 0));\n    float r = uPointSize;\n    vec2 uv = vTexUV * texdim;\n    vec2 center = floor(uv / r / 2.0) * 2.0 * r + r;\n    vec3 col = texture(uTexture, center / texdim).rgb;\n    float lum = max(0.1, RGB2Luma(col));\n    float alpha =  smoothstep(1.0, 0.5,\n                              distance(center, uv) / lum / r);\n    oFragColor.rgb = col.rgb * alpha;\n}\n"])
return t})
lazy($,"l6","$get$l6",function(){var t=G.al("SquarePixelateF")
t.N(["vTexUV"])
t.O(["uPointSize","uTexture"])
t.W(["void main() {\n\t  vec2 texdim = vec2(textureSize(uTexture, 0));\n    float r = uPointSize;\n    vec2 uv = vTexUV * texdim;\n    vec2 center = floor(uv / r / 2.0) * 2.0 * r + r;\n    oFragColor = texture(uTexture, center / texdim);\n}\n"])
return t})
lazy($,"jO","$get$jO",function(){return T.bq(-1,0,-1,0,4,0,-1,0,-1)})
lazy($,"jU","$get$jU",function(){return T.bD(0.5,0.5,0.5)})
lazy($,"jP","$get$jP",function(){return T.bq(2,0,0,0,-1,0,0,0,-1)})
lazy($,"jV","$get$jV",function(){return T.bD(0.5,0.5,0.5)})
lazy($,"jQ","$get$jQ",function(){return T.bq(-2,0,0,0,2,0,0,0,0)})
lazy($,"jW","$get$jW",function(){return T.bD(0.37,0.37,0.37)})
lazy($,"jR","$get$jR",function(){var t=T.bq(0,-2,0,-2,11,-2,0,-2,0)
t.b8(0,0.333)
return t})
lazy($,"jX","$get$jX",function(){return T.bD(0,0,0)})
lazy($,"jN","$get$jN",function(){return T.bq(-1,-1,-1,-1,8,-1,-1,-1,-1)})
lazy($,"jT","$get$jT",function(){return T.bD(0,0,0)})
lazy($,"jM","$get$jM",function(){var t=T.bq(1,2,1,2,4,2,1,2,1)
t.b8(0,0.0625)
return t})
lazy($,"jS","$get$jS",function(){return T.bD(0,0,0)})
lazy($,"kS","$get$kS",function(){var t=G.al("Convolution3x3F")
t.N(["vTexUV"])
t.O(["uTexture","uColor","uConvolutionMatrix"])
t.W(["void main() {\n    mat3 m = uConvolutionMatrix;\n    vec2 d = 1.0 / vec2(textureSize(uTexture, 0));\n    vec3 sum = vec3(0.0, 0.0, 0.0);\n    for (int x = -1; x <= 1; x++) {\n      for (int y = -1; y <= 1; y++) {\n        sum += m[x+1][y+1] * texture(uTexture, vTexUV + d * vec2(x, y)).rgb;     \n      }\n    }\n    oFragColor.rgb = uColor + sum;\n}\n"])
return t})
lazy($,"ij","$get$ij",function(){return H.af(C.l.c9(W.n5(),"#effect"),"$isaX")})
lazy($,"c7","$get$c7",function(){return P.z()})})()
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
mangledGlobalNames:{w:"int",X:"double",a4:"num",m:"String",aH:"bool",H:"Null",f:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.p},{func:1,ret:P.aH,args:[W.a_,P.m,P.m,W.bG]},{func:1,v:true,args:[P.A],opt:[P.aY]},{func:1,ret:P.w,args:[P.D,P.D]}],
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
setOrUpdateInterceptorsByTag({AbortPaymentEvent:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationEvent:J.a,AnimationPlaybackEvent:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,ApplicationCacheErrorEvent:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchClickEvent:J.a,BackgroundFetchEvent:J.a,BackgroundFetchFailEvent:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BackgroundFetchedEvent:J.a,BarProp:J.a,BarcodeDetector:J.a,BeforeInstallPromptEvent:J.a,BeforeUnloadEvent:J.a,BlobEvent:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanMakePaymentEvent:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,ClipboardEvent:J.a,CloseEvent:J.a,CompositionEvent:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSCharsetRule:J.a,CSSConditionRule:J.a,CSSFontFaceRule:J.a,CSSGroupingRule:J.a,CSSImportRule:J.a,CSSKeyframeRule:J.a,MozCSSKeyframeRule:J.a,WebKitCSSKeyframeRule:J.a,CSSKeyframesRule:J.a,MozCSSKeyframesRule:J.a,WebKitCSSKeyframesRule:J.a,CSSMediaRule:J.a,CSSNamespaceRule:J.a,CSSPageRule:J.a,CSSRule:J.a,CSSStyleRule:J.a,CSSStyleSheet:J.a,CSSSupportsRule:J.a,CSSVariableReferenceValue:J.a,CSSViewportRule:J.a,CustomElementRegistry:J.a,CustomEvent:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceMotionEvent:J.a,DeviceOrientationEvent:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,ErrorEvent:J.a,Event:J.a,InputEvent:J.a,ExtendableEvent:J.a,ExtendableMessageEvent:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FetchEvent:J.a,FileEntry:J.a,DOMFileSystem:J.a,FocusEvent:J.a,FontFace:J.a,FontFaceSetLoadEvent:J.a,FontFaceSource:J.a,ForeignFetchEvent:J.a,FormData:J.a,Gamepad:J.a,GamepadButton:J.a,GamepadEvent:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,HashChangeEvent:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,InstallEvent:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyboardEvent:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaEncryptedEvent:J.a,MediaError:J.a,MediaKeyMessageEvent:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaQueryListEvent:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MediaStreamEvent:J.a,MediaStreamTrackEvent:J.a,MemoryInfo:J.a,MessageChannel:J.a,MessageEvent:J.a,Metadata:J.a,MIDIConnectionEvent:J.a,MIDIInputMap:J.a,MIDIMessageEvent:J.a,MIDIOutputMap:J.a,MimeType:J.a,MouseEvent:J.a,DragEvent:J.a,MutationEvent:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,NavigatorAutomationInformation:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,NotificationEvent:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PageTransitionEvent:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentRequestEvent:J.a,PaymentRequestUpdateEvent:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PointerEvent:J.a,PopStateEvent:J.a,PositionError:J.a,Presentation:J.a,PresentationConnectionAvailableEvent:J.a,PresentationConnectionCloseEvent:J.a,PresentationReceiver:J.a,ProgressEvent:J.a,PromiseRejectionEvent:J.a,PublicKeyCredential:J.a,PushEvent:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCDataChannelEvent:J.a,RTCDTMFToneChangeEvent:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCPeerConnectionIceEvent:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,RTCTrackEvent:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,SecurityPolicyViolationEvent:J.a,Selection:J.a,SensorErrorEvent:J.a,SharedArrayBuffer:J.a,SpeechGrammar:J.a,SpeechRecognitionAlternative:J.a,SpeechRecognitionError:J.a,SpeechRecognitionEvent:J.a,SpeechSynthesisEvent:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageEvent:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,StyleSheet:J.a,SyncEvent:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextEvent:J.a,TextMetrics:J.a,Touch:J.a,TouchEvent:J.a,TrackDefault:J.a,TrackEvent:J.a,TransitionEvent:J.a,WebKitTransitionEvent:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UIEvent:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDeviceEvent:J.a,VRDisplayCapabilities:J.a,VRDisplayEvent:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRSessionEvent:J.a,VRStageBounds:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WheelEvent:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoInterfaceRequestEvent:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,ResourceProgressEvent:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBConnectionEvent:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,IDBVersionChangeEvent:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGLength:J.a,SVGMatrix:J.a,SVGNumber:J.a,SVGPreserveAspectRatio:J.a,SVGTransform:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioParamMap:J.a,AudioProcessingEvent:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,OfflineAudioCompletionEvent:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLContextEvent:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.aV,ArrayBufferView:H.aA,DataView:H.f4,Float32Array:H.co,Float64Array:H.f5,Int16Array:H.f6,Int32Array:H.f7,Int8Array:H.f8,Uint16Array:H.f9,Uint32Array:H.fa,Uint8ClampedArray:H.cs,CanvasPixelArray:H.cs,Uint8Array:H.fb,HTMLBRElement:W.i,HTMLBaseElement:W.i,HTMLButtonElement:W.i,HTMLContentElement:W.i,HTMLDListElement:W.i,HTMLDataElement:W.i,HTMLDataListElement:W.i,HTMLDetailsElement:W.i,HTMLDialogElement:W.i,HTMLEmbedElement:W.i,HTMLFieldSetElement:W.i,HTMLHRElement:W.i,HTMLHeadingElement:W.i,HTMLHtmlElement:W.i,HTMLIFrameElement:W.i,HTMLImageElement:W.i,HTMLInputElement:W.i,HTMLLIElement:W.i,HTMLLabelElement:W.i,HTMLLegendElement:W.i,HTMLLinkElement:W.i,HTMLMapElement:W.i,HTMLMenuElement:W.i,HTMLMetaElement:W.i,HTMLMeterElement:W.i,HTMLModElement:W.i,HTMLOListElement:W.i,HTMLObjectElement:W.i,HTMLOptGroupElement:W.i,HTMLOptionElement:W.i,HTMLOutputElement:W.i,HTMLParagraphElement:W.i,HTMLParamElement:W.i,HTMLPictureElement:W.i,HTMLPreElement:W.i,HTMLProgressElement:W.i,HTMLQuoteElement:W.i,HTMLScriptElement:W.i,HTMLShadowElement:W.i,HTMLSlotElement:W.i,HTMLSourceElement:W.i,HTMLSpanElement:W.i,HTMLStyleElement:W.i,HTMLTableCaptionElement:W.i,HTMLTableCellElement:W.i,HTMLTableDataCellElement:W.i,HTMLTableHeaderCellElement:W.i,HTMLTableColElement:W.i,HTMLTextAreaElement:W.i,HTMLTimeElement:W.i,HTMLTitleElement:W.i,HTMLTrackElement:W.i,HTMLUListElement:W.i,HTMLUnknownElement:W.i,HTMLDirectoryElement:W.i,HTMLFontElement:W.i,HTMLFrameElement:W.i,HTMLFrameSetElement:W.i,HTMLMarqueeElement:W.i,HTMLElement:W.i,Accelerometer:W.bX,LinearAccelerationSensor:W.bX,AccessibleNodeList:W.dG,HTMLAnchorElement:W.dH,HTMLAreaElement:W.dI,Blob:W.aM,HTMLBodyElement:W.aq,HTMLCanvasElement:W.c_,CanvasRenderingContext2D:W.dM,CDATASection:W.as,CharacterData:W.as,Comment:W.as,ProcessingInstruction:W.as,Text:W.as,CSSPerspective:W.dQ,CSSPositionValue:W.dR,CSSRotation:W.dS,CSSScale:W.dT,CSSStyleDeclaration:W.aN,MSStyleCSSProperties:W.aN,CSS2Properties:W.aN,CSSImageValue:W.Z,CSSKeywordValue:W.Z,CSSNumericValue:W.Z,CSSResourceValue:W.Z,CSSUnitValue:W.Z,CSSURLImageValue:W.Z,CSSStyleValue:W.Z,CSSMatrixComponent:W.aO,CSSSkew:W.aO,CSSTransformComponent:W.aO,CSSTransformValue:W.dV,CSSTranslation:W.dW,CSSUnparsedValue:W.dX,DataTransferItemList:W.dZ,DeviceAcceleration:W.e_,HTMLDivElement:W.c2,XMLDocument:W.bg,Document:W.bg,DOMException:W.e0,DOMImplementation:W.c3,DOMPoint:W.e1,DOMPointReadOnly:W.c4,ClientRectList:W.c5,DOMRectList:W.c5,DOMRectReadOnly:W.c6,DOMStringList:W.e2,DOMTokenList:W.e3,Element:W.a_,AccessibleNode:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RemotePlayback:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SourceBuffer:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,TextTrack:W.d,TextTrackCue:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,VTTCue:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,ServiceWorker:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.U,FileList:W.bi,FileWriter:W.et,HTMLFormElement:W.ex,Gyroscope:W.eB,HTMLHeadElement:W.cc,History:W.eC,HTMLCollection:W.bj,HTMLFormControlsCollection:W.bj,HTMLOptionsCollection:W.bj,HTMLDocument:W.cd,XMLHttpRequest:W.eD,XMLHttpRequestUpload:W.bk,XMLHttpRequestEventTarget:W.bk,ImageData:W.bl,Location:W.eS,Magnetometer:W.eT,HTMLAudioElement:W.br,HTMLMediaElement:W.br,MediaList:W.f_,MediaStream:W.aU,MIDIOutput:W.f1,MIDIInput:W.bs,MIDIPort:W.bs,MimeTypeArray:W.f2,Navigator:W.ct,WorkerNavigator:W.bt,NavigatorConcurrentHardware:W.bt,DocumentFragment:W.p,ShadowRoot:W.p,Attr:W.p,DocumentType:W.p,Node:W.p,NodeIterator:W.cu,NodeList:W.bu,RadioNodeList:W.bu,Plugin:W.a9,PluginArray:W.fl,PresentationConnection:W.fo,Range:W.cx,RTCDataChannel:W.cA,DataChannel:W.cA,HTMLSelectElement:W.aX,AbsoluteOrientationSensor:W.ak,AmbientLightSensor:W.ak,OrientationSensor:W.ak,RelativeOrientationSensor:W.ak,Sensor:W.ak,SourceBufferList:W.fA,SpeechGrammarList:W.fB,SpeechRecognitionResult:W.aa,Storage:W.fG,HTMLTableElement:W.cH,HTMLTableRowElement:W.fP,HTMLTableSectionElement:W.fQ,HTMLTemplateElement:W.bz,TextTrackCueList:W.fS,TextTrackList:W.fT,TimeRanges:W.fU,TouchList:W.fY,TrackDefaultList:W.fZ,TreeWalker:W.cM,URL:W.h6,VRStageBoundsPoint:W.h8,HTMLVideoElement:W.b_,VideoTrackList:W.h9,WebSocket:W.ha,Window:W.bF,DOMWindow:W.bF,CSSRuleList:W.hl,DOMRect:W.hm,GamepadList:W.hI,NamedNodeMap:W.d2,MozNamedAttrMap:W.d2,SpeechRecognitionResultList:W.i_,StyleSheetList:W.i3,SVGFEBlendElement:P.ea,SVGFEColorMatrixElement:P.eb,SVGFEComponentTransferElement:P.ec,SVGFECompositeElement:P.ed,SVGFEConvolveMatrixElement:P.ee,SVGFEDiffuseLightingElement:P.ef,SVGFEDisplacementMapElement:P.eg,SVGFEFloodElement:P.eh,SVGFEGaussianBlurElement:P.ei,SVGFEImageElement:P.ej,SVGFEMergeElement:P.ek,SVGFEMorphologyElement:P.el,SVGFEOffsetElement:P.em,SVGFEPointLightElement:P.en,SVGFESpecularLightingElement:P.eo,SVGFESpotLightElement:P.ep,SVGFETileElement:P.eq,SVGFETurbulenceElement:P.er,SVGFilterElement:P.eu,SVGForeignObjectElement:P.ew,SVGCircleElement:P.a0,SVGEllipseElement:P.a0,SVGLineElement:P.a0,SVGPathElement:P.a0,SVGPolygonElement:P.a0,SVGPolylineElement:P.a0,SVGGeometryElement:P.a0,SVGAElement:P.a8,SVGClipPathElement:P.a8,SVGDefsElement:P.a8,SVGGElement:P.a8,SVGSwitchElement:P.a8,SVGGraphicsElement:P.a8,SVGImageElement:P.eE,SVGLengthList:P.eN,SVGMaskElement:P.eZ,SVGNumberList:P.fh,SVGPatternElement:P.fj,SVGPoint:P.fm,SVGPointList:P.fn,SVGRect:P.fq,SVGRectElement:P.fr,SVGScriptElement:P.bw,SVGStringList:P.fN,SVGAnimateElement:P.u,SVGAnimateMotionElement:P.u,SVGAnimateTransformElement:P.u,SVGAnimationElement:P.u,SVGDescElement:P.u,SVGDiscardElement:P.u,SVGFEDistantLightElement:P.u,SVGFEFuncAElement:P.u,SVGFEFuncBElement:P.u,SVGFEFuncGElement:P.u,SVGFEFuncRElement:P.u,SVGFEMergeNodeElement:P.u,SVGLinearGradientElement:P.u,SVGMarkerElement:P.u,SVGMetadataElement:P.u,SVGRadialGradientElement:P.u,SVGSetElement:P.u,SVGStopElement:P.u,SVGStyleElement:P.u,SVGSymbolElement:P.u,SVGTitleElement:P.u,SVGViewElement:P.u,SVGGradientElement:P.u,SVGComponentTransferFunctionElement:P.u,SVGFEDropShadowElement:P.u,SVGMPathElement:P.u,SVGElement:P.u,SVGSVGElement:P.fO,SVGTextPathElement:P.bA,SVGTextContentElement:P.bA,SVGTSpanElement:P.bB,SVGTextElement:P.bB,SVGTextPositioningElement:P.bB,SVGTransformList:P.h_,SVGUseElement:P.h7,AudioBuffer:P.dK,AudioTrackList:P.dL,AudioContext:P.aL,webkitAudioContext:P.aL,BaseAudioContext:P.aL,OfflineAudioContext:P.fi,WebGLRenderingContext:P.fu,WebGL2RenderingContext:P.fv,SQLResultSetRowList:P.fC})
setOrUpdateLeafTags({AbortPaymentEvent:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationEvent:true,AnimationPlaybackEvent:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,ApplicationCacheErrorEvent:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BackgroundFetchedEvent:true,BarProp:true,BarcodeDetector:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanMakePaymentEvent:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSStyleSheet:true,CSSSupportsRule:true,CSSVariableReferenceValue:true,CSSViewportRule:true,CustomElementRegistry:true,CustomEvent:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMQuad:true,DOMStringMap:true,Entry:true,ErrorEvent:true,Event:true,InputEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,External:true,FaceDetector:true,FederatedCredential:true,FetchEvent:true,FileEntry:true,DOMFileSystem:true,FocusEvent:true,FontFace:true,FontFaceSetLoadEvent:true,FontFaceSource:true,ForeignFetchEvent:true,FormData:true,Gamepad:true,GamepadButton:true,GamepadEvent:true,GamepadPose:true,Geolocation:true,Position:true,HashChangeEvent:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,InstallEvent:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyboardEvent:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaEncryptedEvent:true,MediaError:true,MediaKeyMessageEvent:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaQueryListEvent:true,MediaSession:true,MediaSettingsRange:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MemoryInfo:true,MessageChannel:true,MessageEvent:true,Metadata:true,MIDIConnectionEvent:true,MIDIInputMap:true,MIDIMessageEvent:true,MIDIOutputMap:true,MimeType:true,MouseEvent:true,DragEvent:true,MutationEvent:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,NavigatorAutomationInformation:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,NotificationEvent:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PageTransitionEvent:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PointerEvent:true,PopStateEvent:true,PositionError:true,Presentation:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,PresentationReceiver:true,ProgressEvent:true,PromiseRejectionEvent:true,PublicKeyCredential:true,PushEvent:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCPeerConnectionIceEvent:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,RTCTrackEvent:true,Screen:true,ScrollState:true,ScrollTimeline:true,SecurityPolicyViolationEvent:true,Selection:true,SensorErrorEvent:true,SharedArrayBuffer:true,SpeechGrammar:true,SpeechRecognitionAlternative:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,SpeechSynthesisVoice:true,StaticRange:true,StorageEvent:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,StyleSheet:true,SyncEvent:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextEvent:true,TextMetrics:true,Touch:true,TouchEvent:true,TrackDefault:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UIEvent:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDeviceEvent:true,VRDisplayCapabilities:true,VRDisplayEvent:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRSessionEvent:true,VRStageBounds:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WheelEvent:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoInterfaceRequestEvent:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,ResourceProgressEvent:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBConnectionEvent:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,IDBVersionChangeEvent:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGLength:true,SVGMatrix:true,SVGNumber:true,SVGPreserveAspectRatio:true,SVGTransform:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioParamMap:true,AudioProcessingEvent:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,OfflineAudioCompletionEvent:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLContextEvent:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,Accelerometer:true,LinearAccelerationSensor:true,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSPositionValue:true,CSSRotation:true,CSSScale:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSSkew:true,CSSTransformComponent:false,CSSTransformValue:true,CSSTranslation:true,CSSUnparsedValue:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMPoint:true,DOMPointReadOnly:false,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AccessibleNode:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnectionList:true,PresentationRequest:true,RemotePlayback:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SourceBuffer:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,TextTrack:true,TextTrackCue:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,VTTCue:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,ServiceWorker:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gyroscope:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,ImageData:true,Location:true,Magnetometer:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MediaStream:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeTypeArray:true,Navigator:true,WorkerNavigator:true,NavigatorConcurrentHardware:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,PresentationConnection:true,Range:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,AbsoluteOrientationSensor:true,AmbientLightSensor:true,OrientationSensor:true,RelativeOrientationSensor:true,Sensor:false,SourceBufferList:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,TouchList:true,TrackDefaultList:true,TreeWalker:true,URL:true,VRStageBoundsPoint:true,HTMLVideoElement:true,VideoTrackList:true,WebSocket:true,Window:true,DOMWindow:true,CSSRuleList:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGAElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLengthList:true,SVGMaskElement:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMetadataElement:true,SVGRadialGradientElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSymbolElement:true,SVGTitleElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGSVGElement:true,SVGTextPathElement:true,SVGTextContentElement:false,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransformList:true,SVGUseElement:true,AudioBuffer:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cp.$nativeSuperclassTag="ArrayBufferView"
H.bJ.$nativeSuperclassTag="ArrayBufferView"
H.bK.$nativeSuperclassTag="ArrayBufferView"
H.cq.$nativeSuperclassTag="ArrayBufferView"
H.bL.$nativeSuperclassTag="ArrayBufferView"
H.bM.$nativeSuperclassTag="ArrayBufferView"
H.cr.$nativeSuperclassTag="ArrayBufferView"
W.bO.$nativeSuperclassTag="EventTarget"
W.bP.$nativeSuperclassTag="EventTarget"
W.bQ.$nativeSuperclassTag="EventTarget"
W.bR.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.l7(T.kR(),b)},[])
else (function(b){H.l7(T.kR(),b)})([])})})()